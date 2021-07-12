import { __decorate } from "tslib";
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Inject, Input, NgZone, ViewChild, ViewEncapsulation, } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { InputBoolean, InputNumber } from '@delon/util/decorator';
import { take } from 'rxjs/operators';
export class EllipsisComponent {
    constructor(el, ngZone, dom, doc, cdr) {
        this.el = el;
        this.ngZone = ngZone;
        this.dom = dom;
        this.doc = doc;
        this.cdr = cdr;
        // tslint:disable-next-line:no-string-literal
        this.isSupportLineClamp = this.doc.body.style['webkitLineClamp'] !== undefined;
        this.inited = false;
        this.type = 'default';
        this.cls = {};
        this.text = '';
        this.targetCount = 0;
        this.tooltip = false;
        this.fullWidthRecognition = false;
        this.tail = '...';
    }
    get linsWord() {
        const { targetCount, text, tail } = this;
        return (targetCount > 0 ? text.substring(0, targetCount) : '') + (targetCount > 0 && targetCount < text.length ? tail : '');
    }
    getStrFullLength(str) {
        return str.split('').reduce((pre, cur) => {
            const charCode = cur.charCodeAt(0);
            if (charCode >= 0 && charCode <= 128) {
                return pre + 1;
            }
            return pre + 2;
        }, 0);
    }
    cutStrByFullLength(str, maxLength) {
        let showLength = 0;
        return str.split('').reduce((pre, cur) => {
            const charCode = cur.charCodeAt(0);
            if (charCode >= 0 && charCode <= 128) {
                showLength += 1;
            }
            else {
                showLength += 2;
            }
            if (showLength <= maxLength) {
                return pre + cur;
            }
            return pre;
        }, '');
    }
    bisection(targetHeight, mid, begin, end, text, node) {
        const suffix = this.tail;
        node.innerHTML = text.substring(0, mid) + suffix;
        let sh = node.offsetHeight;
        if (sh <= targetHeight) {
            node.innerHTML = text.substring(0, mid + 1) + suffix;
            sh = node.offsetHeight;
            if (sh > targetHeight || mid === begin) {
                return mid;
            }
            begin = mid;
            mid = end - begin === 1 ? begin + 1 : Math.floor((end - begin) / 2) + begin;
            return this.bisection(targetHeight, mid, begin, end, text, node);
        }
        if (mid - 1 < 0) {
            return mid;
        }
        node.innerHTML = text.substring(0, mid - 1) + suffix;
        sh = node.offsetHeight;
        if (sh <= targetHeight) {
            return mid - 1;
        }
        end = mid;
        mid = Math.floor((end - begin) / 2) + begin;
        return this.bisection(targetHeight, mid, begin, end, text, node);
    }
    genType() {
        const { lines, length, isSupportLineClamp } = this;
        this.cls = {
            ellipsis: true,
            ellipsis__lines: lines && !isSupportLineClamp,
            'ellipsis__line-clamp': lines && isSupportLineClamp,
        };
        if (!lines && !length) {
            this.type = 'default';
        }
        else if (!lines) {
            this.type = 'length';
        }
        else if (isSupportLineClamp) {
            this.type = 'line-clamp';
        }
        else {
            this.type = 'line';
        }
    }
    gen() {
        const { type, lines, length, fullWidthRecognition, tail, orgEl, cdr, ngZone } = this;
        if (type === 'length') {
            const el = orgEl.nativeElement;
            if (el.children.length > 0) {
                throw new Error('Ellipsis content must be string.');
            }
            const lengthText = el.textContent;
            const textLength = fullWidthRecognition ? this.getStrFullLength(lengthText) : lengthText.length;
            if (textLength <= length || length < 0) {
                this.text = lengthText;
            }
            else {
                let displayText;
                if (length - tail.length <= 0) {
                    displayText = '';
                }
                else {
                    displayText = fullWidthRecognition ? this.cutStrByFullLength(lengthText, length) : lengthText.slice(0, length);
                }
                this.text = displayText + tail;
            }
            ngZone.run(() => cdr.detectChanges());
        }
        else if (type === 'line') {
            const { shadowOrgEl, shadowTextEl } = this;
            const orgNode = shadowOrgEl.nativeElement;
            const lineText = orgNode.innerText || orgNode.textContent;
            const lineHeight = parseInt(getComputedStyle(this.getEl('.ellipsis')).lineHeight, 10);
            const targetHeight = lines * lineHeight;
            this.getEl('.ellipsis__handle').style.height = `${targetHeight}px`;
            if (orgNode.offsetHeight <= targetHeight) {
                this.text = lineText;
                this.targetCount = lineText.length;
            }
            else {
                // bisection
                const len = lineText.length;
                const mid = Math.ceil(len / 2);
                const count = this.bisection(targetHeight, mid, 0, len, lineText, shadowTextEl.nativeElement.firstChild);
                this.text = lineText;
                this.targetCount = count;
            }
            ngZone.run(() => cdr.detectChanges());
        }
    }
    getEl(cls) {
        return this.el.nativeElement.querySelector(cls);
    }
    executeOnStable(fn) {
        if (this.ngZone.isStable) {
            fn();
        }
        else {
            this.ngZone.onStable.asObservable().pipe(take(1)).subscribe(fn);
        }
    }
    refresh() {
        this.genType();
        const { type, dom, orgEl, cdr } = this;
        const html = orgEl.nativeElement.innerHTML;
        this.orgHtml = dom.bypassSecurityTrustHtml(html);
        cdr.detectChanges();
        this.executeOnStable(() => {
            this.gen();
            if (type !== 'line') {
                const el = this.getEl('.ellipsis');
                if (el) {
                    el.innerHTML = html;
                }
            }
        });
    }
    ngAfterViewInit() {
        this.inited = true;
        this.refresh();
    }
    ngOnChanges() {
        if (this.inited) {
            this.refresh();
        }
    }
}
EllipsisComponent.decorators = [
    { type: Component, args: [{
                selector: 'ellipsis',
                exportAs: 'ellipsis',
                template: "<div (cdkObserveContent)=\"refresh()\" #orgEl style=\"display: none;\"><ng-content></ng-content></div>\n<ng-template #tooltipTpl let-con>\n  <span *ngIf=\"tooltip; else con\" nz-tooltip [nzTooltipTitle]=\"titleTpl\" [nzTooltipOverlayStyle]=\"{ 'overflow-wrap': 'break-word', 'word-wrap': 'break-word' }\">\n    <ng-container *ngTemplateOutlet=\"con\"></ng-container>\n    <ng-template #titleTpl><div [innerHTML]=\"orgHtml\"></div></ng-template>\n  </span>\n</ng-template>\n<ng-container [ngSwitch]=\"type\">\n  <span *ngSwitchCase=\"'default'\" [ngClass]=\"cls\"></span>\n  <ng-container *ngSwitchCase=\"'length'\">\n    <ng-template [ngTemplateOutlet]=\"tooltipTpl\" [ngTemplateOutletContext]=\"{ $implicit: lengthTpl }\"></ng-template>\n    <ng-template #lengthTpl>{{ text }}</ng-template>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'line-clamp'\">\n    <ng-template [ngTemplateOutlet]=\"tooltipTpl\" [ngTemplateOutletContext]=\"{ $implicit: lineClampTpl }\"></ng-template>\n    <ng-template #lineClampTpl>\n      <div [ngClass]=\"cls\" [ngStyle]=\"{ '-webkit-line-clamp': lines, '-webkit-box-orient': 'vertical' }\"></div>\n    </ng-template>\n  </ng-container>\n  <div *ngSwitchCase=\"'line'\" [ngClass]=\"cls\">\n    <div class=\"ellipsis__handle\">\n      <ng-template [ngTemplateOutlet]=\"tooltipTpl\" [ngTemplateOutletContext]=\"{ $implicit: lineTpl }\"></ng-template>\n      <ng-template #lineTpl>{{ linsWord }}</ng-template>\n      <div class=\"ellipsis__shadow\" #shadowOrgEl [innerHTML]=\"orgHtml\"></div>\n      <div class=\"ellipsis__shadow\" #shadowTextEl>\n        <span>{{ text }}</span>\n      </div>\n    </div>\n  </div>\n</ng-container>\n",
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            },] }
];
EllipsisComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone },
    { type: DomSanitizer },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: ChangeDetectorRef }
];
EllipsisComponent.propDecorators = {
    orgEl: [{ type: ViewChild, args: ['orgEl', { static: false },] }],
    shadowOrgEl: [{ type: ViewChild, args: ['shadowOrgEl', { static: false },] }],
    shadowTextEl: [{ type: ViewChild, args: ['shadowTextEl', { static: false },] }],
    tooltip: [{ type: Input }],
    length: [{ type: Input }],
    lines: [{ type: Input }],
    fullWidthRecognition: [{ type: Input }],
    tail: [{ type: Input }]
};
__decorate([
    InputBoolean()
], EllipsisComponent.prototype, "tooltip", void 0);
__decorate([
    InputNumber(null)
], EllipsisComponent.prototype, "length", void 0);
__decorate([
    InputNumber(null)
], EllipsisComponent.prototype, "lines", void 0);
__decorate([
    InputBoolean()
], EllipsisComponent.prototype, "fullWidthRecognition", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxsaXBzaXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL2VsbGlwc2lzL2VsbGlwc2lzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsTUFBTSxFQUNOLEtBQUssRUFDTCxNQUFNLEVBRU4sU0FBUyxFQUNULGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFZLE1BQU0sMkJBQTJCLENBQUM7QUFDbkUsT0FBTyxFQUFnQixZQUFZLEVBQUUsV0FBVyxFQUFlLE1BQU0sdUJBQXVCLENBQUM7QUFDN0YsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBVXRDLE1BQU0sT0FBTyxpQkFBaUI7SUE2QjVCLFlBQ1UsRUFBYyxFQUNkLE1BQWMsRUFDZCxHQUFpQixFQUNDLEdBQVEsRUFDMUIsR0FBc0I7UUFKdEIsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxRQUFHLEdBQUgsR0FBRyxDQUFjO1FBQ0MsUUFBRyxHQUFILEdBQUcsQ0FBSztRQUMxQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQTVCaEMsNkNBQTZDO1FBQ3JDLHVCQUFrQixHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLFNBQVMsQ0FBQztRQUkxRSxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBRXZCLFNBQUksR0FBRyxTQUFTLENBQUM7UUFDakIsUUFBRyxHQUFHLEVBQUUsQ0FBQztRQUNULFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVixnQkFBVyxHQUFHLENB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SUFBSSxDQUFDO2lEQUFnQjtBQUNmO0lBQWxCLFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0RBQWU7QUFDakI7SUFBZixZQUFZLEVBQUU7K0RBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25DaGFuZ2VzLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciwgTnVtYmVySW5wdXQgfSBmcm9tICdAZGVsb24vdXRpbC9kZWNvcmF0b3InO1xuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZWxsaXBzaXMnLFxuICBleHBvcnRBczogJ2VsbGlwc2lzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2VsbGlwc2lzLmNvbXBvbmVudC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBFbGxpcHNpc0NvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV90b29sdGlwOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9sZW5ndGg6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbGluZXM6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZnVsbFdpZHRoUmVjb2duaXRpb246IEJvb2xlYW5JbnB1dDtcblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tc3RyaW5nLWxpdGVyYWxcbiAgcHJpdmF0ZSBpc1N1cHBvcnRMaW5lQ2xhbXAgPSB0aGlzLmRvYy5ib2R5LnN0eWxlWyd3ZWJraXRMaW5lQ2xhbXAnXSAhPT0gdW5kZWZpbmVkO1xuICBAVmlld0NoaWxkKCdvcmdFbCcsIHsgc3RhdGljOiBmYWxzZSB9KSBwcml2YXRlIG9yZ0VsOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdzaGFkb3dPcmdFbCcsIHsgc3RhdGljOiBmYWxzZSB9KSBwcml2YXRlIHNoYWRvd09yZ0VsOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdzaGFkb3dUZXh0RWwnLCB7IHN0YXRpYzogZmFsc2UgfSkgcHJpdmF0ZSBzaGFkb3dUZXh0RWw6IEVsZW1lbnRSZWY7XG4gIHByaXZhdGUgaW5pdGVkID0gZmFsc2U7XG4gIG9yZ0h0bWw6IFNhZmVIdG1sO1xuICB0eXBlID0gJ2RlZmF1bHQnO1xuICBjbHMgPSB7fTtcbiAgdGV4dCA9ICcnO1xuICB0YXJnZXRDb3VudCA9IDA7XG5cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHRvb2x0aXAgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKG51bGwpIGxlbmd0aDogbnVtYmVyO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIobnVsbCkgbGluZXM6IG51bWJlcjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGZ1bGxXaWR0aFJlY29nbml0aW9uID0gZmFsc2U7XG4gIEBJbnB1dCgpIHRhaWwgPSAnLi4uJztcblxuICBnZXQgbGluc1dvcmQoKTogc3RyaW5nIHtcbiAgICBjb25zdCB7IHRhcmdldENvdW50LCB0ZXh0LCB0YWlsIH0gPSB0aGlzO1xuICAgIHJldHVybiAodGFyZ2V0Q291bnQgPiAwID8gdGV4dC5zdWJzdHJpbmcoMCwgdGFyZ2V0Q291bnQpIDogJycpICsgKHRhcmdldENvdW50ID4gMCAmJiB0YXJnZXRDb3VudCA8IHRleHQubGVuZ3RoID8gdGFpbCA6ICcnKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIGRvbTogRG9tU2FuaXRpemVyLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBhbnksXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICApIHt9XG5cbiAgcHJpdmF0ZSBnZXRTdHJGdWxsTGVuZ3RoKHN0cjogc3RyaW5nKTogbnVtYmVyIHtcbiAgICByZXR1cm4gc3RyLnNwbGl0KCcnKS5yZWR1Y2UoKHByZSwgY3VyKSA9PiB7XG4gICAgICBjb25zdCBjaGFyQ29kZSA9IGN1ci5jaGFyQ29kZUF0KDApO1xuICAgICAgaWYgKGNoYXJDb2RlID49IDAgJiYgY2hhckNvZGUgPD0gMTI4KSB7XG4gICAgICAgIHJldHVybiBwcmUgKyAxO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHByZSArIDI7XG4gICAgfSwgMCk7XG4gIH1cblxuICBwcml2YXRlIGN1dFN0ckJ5RnVsbExlbmd0aChzdHI6IHN0cmluZywgbWF4TGVuZ3RoOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGxldCBzaG93TGVuZ3RoID0gMDtcbiAgICByZXR1cm4gc3RyLnNwbGl0KCcnKS5yZWR1Y2UoKHByZSwgY3VyKSA9PiB7XG4gICAgICBjb25zdCBjaGFyQ29kZSA9IGN1ci5jaGFyQ29kZUF0KDApO1xuICAgICAgaWYgKGNoYXJDb2RlID49IDAgJiYgY2hhckNvZGUgPD0gMTI4KSB7XG4gICAgICAgIHNob3dMZW5ndGggKz0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNob3dMZW5ndGggKz0gMjtcbiAgICAgIH1cbiAgICAgIGlmIChzaG93TGVuZ3RoIDw9IG1heExlbmd0aCkge1xuICAgICAgICByZXR1cm4gcHJlICsgY3VyO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHByZTtcbiAgICB9LCAnJyk7XG4gIH1cblxuICBwcml2YXRlIGJpc2VjdGlvbih0YXJnZXRIZWlnaHQ6IG51bWJlciwgbWlkOiBudW1iZXIsIGJlZ2luOiBudW1iZXIsIGVuZDogbnVtYmVyLCB0ZXh0OiBzdHJpbmcsIG5vZGU6IEhUTUxFbGVtZW50KTogbnVtYmVyIHtcbiAgICBjb25zdCBzdWZmaXggPSB0aGlzLnRhaWw7XG4gICAgbm9kZS5pbm5lckhUTUwgPSB0ZXh0LnN1YnN0cmluZygwLCBtaWQpICsgc3VmZml4O1xuICAgIGxldCBzaCA9IG5vZGUub2Zmc2V0SGVpZ2h0O1xuXG4gICAgaWYgKHNoIDw9IHRhcmdldEhlaWdodCkge1xuICAgICAgbm9kZS5pbm5lckhUTUwgPSB0ZXh0LnN1YnN0cmluZygwLCBtaWQgKyAxKSArIHN1ZmZpeDtcbiAgICAgIHNoID0gbm9kZS5vZmZzZXRIZWlnaHQ7XG4gICAgICBpZiAoc2ggPiB0YXJnZXRIZWlnaHQgfHwgbWlkID09PSBiZWdpbikge1xuICAgICAgICByZXR1cm4gbWlkO1xuICAgICAgfVxuICAgICAgYmVnaW4gPSBtaWQ7XG4gICAgICBtaWQgPSBlbmQgLSBiZWdpbiA9PT0gMSA/IGJlZ2luICsgMSA6IE1hdGguZmxvb3IoKGVuZCAtIGJlZ2luKSAvIDIpICsgYmVnaW47XG4gICAgICByZXR1cm4gdGhpcy5iaXNlY3Rpb24odGFyZ2V0SGVpZ2h0LCBtaWQsIGJlZ2luLCBlbmQsIHRleHQsIG5vZGUpO1xuICAgIH1cbiAgICBpZiAobWlkIC0gMSA8IDApIHtcbiAgICAgIHJldHVybiBtaWQ7XG4gICAgfVxuICAgIG5vZGUuaW5uZXJIVE1MID0gdGV4dC5zdWJzdHJpbmcoMCwgbWlkIC0gMSkgKyBzdWZmaXg7XG4gICAgc2ggPSBub2RlLm9mZnNldEhlaWdodDtcbiAgICBpZiAoc2ggPD0gdGFyZ2V0SGVpZ2h0KSB7XG4gICAgICByZXR1cm4gbWlkIC0gMTtcbiAgICB9XG4gICAgZW5kID0gbWlkO1xuICAgIG1pZCA9IE1hdGguZmxvb3IoKGVuZCAtIGJlZ2luKSAvIDIpICsgYmVnaW47XG4gICAgcmV0dXJuIHRoaXMuYmlzZWN0aW9uKHRhcmdldEhlaWdodCwgbWlkLCBiZWdpbiwgZW5kLCB0ZXh0LCBub2RlKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuVHlwZSgpOiB2b2lkIHtcbiAgICBjb25zdCB7IGxpbmVzLCBsZW5ndGgsIGlzU3VwcG9ydExpbmVDbGFtcCB9ID0gdGhpcztcbiAgICB0aGlzLmNscyA9IHtcbiAgICAgIGVsbGlwc2lzOiB0cnVlLFxuICAgICAgZWxsaXBzaXNfX2xpbmVzOiBsaW5lcyAmJiAhaXNTdXBwb3J0TGluZUNsYW1wLFxuICAgICAgJ2VsbGlwc2lzX19saW5lLWNsYW1wJzogbGluZXMgJiYgaXNTdXBwb3J0TGluZUNsYW1wLFxuICAgIH07XG4gICAgaWYgKCFsaW5lcyAmJiAhbGVuZ3RoKSB7XG4gICAgICB0aGlzLnR5cGUgPSAnZGVmYXVsdCc7XG4gICAgfSBlbHNlIGlmICghbGluZXMpIHtcbiAgICAgIHRoaXMudHlwZSA9ICdsZW5ndGgnO1xuICAgIH0gZWxzZSBpZiAoaXNTdXBwb3J0TGluZUNsYW1wKSB7XG4gICAgICB0aGlzLnR5cGUgPSAnbGluZS1jbGFtcCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudHlwZSA9ICdsaW5lJztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdlbigpOiB2b2lkIHtcbiAgICBjb25zdCB7IHR5cGUsIGxpbmVzLCBsZW5ndGgsIGZ1bGxXaWR0aFJlY29nbml0aW9uLCB0YWlsLCBvcmdFbCwgY2RyLCBuZ1pvbmUgfSA9IHRoaXM7XG4gICAgaWYgKHR5cGUgPT09ICdsZW5ndGgnKSB7XG4gICAgICBjb25zdCBlbCA9IG9yZ0VsLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBpZiAoZWwuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0VsbGlwc2lzIGNvbnRlbnQgbXVzdCBiZSBzdHJpbmcuJyk7XG4gICAgICB9XG4gICAgICBjb25zdCBsZW5ndGhUZXh0ID0gZWwudGV4dENvbnRlbnQhO1xuICAgICAgY29uc3QgdGV4dExlbmd0aCA9IGZ1bGxXaWR0aFJlY29nbml0aW9uID8gdGhpcy5nZXRTdHJGdWxsTGVuZ3RoKGxlbmd0aFRleHQpIDogbGVuZ3RoVGV4dC5sZW5ndGg7XG4gICAgICBpZiAodGV4dExlbmd0aCA8PSBsZW5ndGggfHwgbGVuZ3RoIDwgMCkge1xuICAgICAgICB0aGlzLnRleHQgPSBsZW5ndGhUZXh0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGRpc3BsYXlUZXh0OiBzdHJpbmc7XG4gICAgICAgIGlmIChsZW5ndGggLSB0YWlsLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgZGlzcGxheVRleHQgPSAnJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkaXNwbGF5VGV4dCA9IGZ1bGxXaWR0aFJlY29nbml0aW9uID8gdGhpcy5jdXRTdHJCeUZ1bGxMZW5ndGgobGVuZ3RoVGV4dCwgbGVuZ3RoKSA6IGxlbmd0aFRleHQuc2xpY2UoMCwgbGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRleHQgPSBkaXNwbGF5VGV4dCArIHRhaWw7XG4gICAgICB9XG4gICAgICBuZ1pvbmUucnVuKCgpID0+IGNkci5kZXRlY3RDaGFuZ2VzKCkpO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2xpbmUnKSB7XG4gICAgICBjb25zdCB7IHNoYWRvd09yZ0VsLCBzaGFkb3dUZXh0RWwgfSA9IHRoaXM7XG4gICAgICBjb25zdCBvcmdOb2RlID0gc2hhZG93T3JnRWwubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGNvbnN0IGxpbmVUZXh0ID0gb3JnTm9kZS5pbm5lclRleHQgfHwgb3JnTm9kZS50ZXh0Q29udGVudCE7XG4gICAgICBjb25zdCBsaW5lSGVpZ2h0ID0gcGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmdldEVsKCcuZWxsaXBzaXMnKSkubGluZUhlaWdodCEsIDEwKTtcbiAgICAgIGNvbnN0IHRhcmdldEhlaWdodCA9IGxpbmVzICogbGluZUhlaWdodDtcbiAgICAgIHRoaXMuZ2V0RWwoJy5lbGxpcHNpc19faGFuZGxlJykuc3R5bGUuaGVpZ2h0ID0gYCR7dGFyZ2V0SGVpZ2h0fXB4YDtcblxuICAgICAgaWYgKG9yZ05vZGUub2Zmc2V0SGVpZ2h0IDw9IHRhcmdldEhlaWdodCkge1xuICAgICAgICB0aGlzLnRleHQgPSBsaW5lVGV4dDtcbiAgICAgICAgdGhpcy50YXJnZXRDb3VudCA9IGxpbmVUZXh0Lmxlbmd0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGJpc2VjdGlvblxuICAgICAgICBjb25zdCBsZW4gPSBsaW5lVGV4dC5sZW5ndGg7XG4gICAgICAgIGNvbnN0IG1pZCA9IE1hdGguY2VpbChsZW4gLyAyKTtcblxuICAgICAgICBjb25zdCBjb3VudCA9IHRoaXMuYmlzZWN0aW9uKHRhcmdldEhlaWdodCwgbWlkLCAwLCBsZW4sIGxpbmVUZXh0LCBzaGFkb3dUZXh0RWwubmF0aXZlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICAgICAgdGhpcy50ZXh0ID0gbGluZVRleHQ7XG4gICAgICAgIHRoaXMudGFyZ2V0Q291bnQgPSBjb3VudDtcbiAgICAgIH1cbiAgICAgIG5nWm9uZS5ydW4oKCkgPT4gY2RyLmRldGVjdENoYW5nZXMoKSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRFbChjbHM6IHN0cmluZyk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoY2xzKTtcbiAgfVxuXG4gIHByaXZhdGUgZXhlY3V0ZU9uU3RhYmxlKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubmdab25lLmlzU3RhYmxlKSB7XG4gICAgICBmbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm5nWm9uZS5vblN0YWJsZS5hc09ic2VydmFibGUoKS5waXBlKHRha2UoMSkpLnN1YnNjcmliZShmbik7XG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaCgpOiB2b2lkIHtcbiAgICB0aGlzLmdlblR5cGUoKTtcbiAgICBjb25zdCB7IHR5cGUsIGRvbSwgb3JnRWwsIGNkciB9ID0gdGhpcztcbiAgICBjb25zdCBodG1sID0gb3JnRWwubmF0aXZlRWxlbWVudC5pbm5lckhUTUw7XG4gICAgdGhpcy5vcmdIdG1sID0gZG9tLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKGh0bWwpO1xuICAgIGNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgdGhpcy5leGVjdXRlT25TdGFibGUoKCkgPT4ge1xuICAgICAgdGhpcy5nZW4oKTtcbiAgICAgIGlmICh0eXBlICE9PSAnbGluZScpIHtcbiAgICAgICAgY29uc3QgZWwgPSB0aGlzLmdldEVsKCcuZWxsaXBzaXMnKTtcbiAgICAgICAgaWYgKGVsKSB7XG4gICAgICAgICAgZWwuaW5uZXJIVE1MID0gaHRtbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmluaXRlZCkge1xuICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgfVxuICB9XG59XG4iXX0=