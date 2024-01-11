import { __decorate } from "tslib";
import { ObserversModule } from '@angular/cdk/observers';
import { DOCUMENT, NgClass, NgStyle, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { take } from 'rxjs';
import { InputBoolean, InputNumber } from '@delon/util/decorator';
import { NzTooltipDirective } from 'ng-zorro-antd/tooltip';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "@angular/cdk/observers";
export class EllipsisComponent {
    get linsWord() {
        const { targetCount, text, tail } = this;
        return ((targetCount > 0 ? text.substring(0, targetCount) : '') +
            (targetCount > 0 && targetCount < text.length ? tail : ''));
    }
    get win() {
        return this.doc.defaultView || window;
    }
    constructor(el, ngZone, dom, doc, cdr) {
        this.el = el;
        this.ngZone = ngZone;
        this.dom = dom;
        this.doc = doc;
        this.cdr = cdr;
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
            'ellipsis__line-clamp': lines && isSupportLineClamp
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
                    displayText = fullWidthRecognition
                        ? this.cutStrByFullLength(lengthText, length)
                        : lengthText.slice(0, length);
                }
                this.text = displayText + tail;
            }
            ngZone.run(() => cdr.detectChanges());
        }
        else if (type === 'line') {
            const { shadowOrgEl, shadowTextEl } = this;
            const orgNode = shadowOrgEl.nativeElement;
            const lineText = orgNode.innerText || orgNode.textContent;
            const lineHeight = parseInt(this.win.getComputedStyle(this.getEl('.ellipsis')).lineHeight, 10);
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: EllipsisComponent, deps: [{ token: i0.ElementRef }, { token: i0.NgZone }, { token: i1.DomSanitizer }, { token: DOCUMENT }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.9", type: EllipsisComponent, isStandalone: true, selector: "ellipsis", inputs: { tooltip: "tooltip", length: "length", lines: "lines", fullWidthRecognition: "fullWidthRecognition", tail: "tail" }, viewQueries: [{ propertyName: "orgEl", first: true, predicate: ["orgEl"], descendants: true }, { propertyName: "shadowOrgEl", first: true, predicate: ["shadowOrgEl"], descendants: true }, { propertyName: "shadowTextEl", first: true, predicate: ["shadowTextEl"], descendants: true }], exportAs: ["ellipsis"], usesOnChanges: true, ngImport: i0, template: "<div (cdkObserveContent)=\"refresh()\" #orgEl style=\"display: none\"><ng-content /></div>\n<ng-template #tooltipTpl let-con>\n  @if (tooltip) {\n    <span\n      nz-tooltip\n      [nzTooltipTitle]=\"titleTpl\"\n      [nzTooltipOverlayStyle]=\"{ 'overflow-wrap': 'break-word', 'word-wrap': 'break-word' }\"\n    >\n      <ng-container *ngTemplateOutlet=\"con\" />\n      <ng-template #titleTpl><div [innerHTML]=\"orgHtml\"></div></ng-template>\n    </span>\n  } @else {\n    <ng-container *ngTemplateOutlet=\"con\" />\n  }\n</ng-template>\n@switch (type) {\n  @case ('default') {\n    <span [ngClass]=\"cls\"></span>\n  }\n  @case ('length') {\n    <ng-template [ngTemplateOutlet]=\"tooltipTpl\" [ngTemplateOutletContext]=\"{ $implicit: lengthTpl }\" />\n    <ng-template #lengthTpl>{{ text }}</ng-template>\n  }\n  @case ('line-clamp') {\n    <ng-template [ngTemplateOutlet]=\"tooltipTpl\" [ngTemplateOutletContext]=\"{ $implicit: lineClampTpl }\" />\n    <ng-template #lineClampTpl>\n      <div [ngClass]=\"cls\" [ngStyle]=\"{ '-webkit-line-clamp': lines, '-webkit-box-orient': 'vertical' }\"></div>\n    </ng-template>\n  }\n  @case ('line') {\n    <div [ngClass]=\"cls\">\n      <div class=\"ellipsis__handle\">\n        <ng-template [ngTemplateOutlet]=\"tooltipTpl\" [ngTemplateOutletContext]=\"{ $implicit: lineTpl }\" />\n        <ng-template #lineTpl>{{ linsWord }}</ng-template>\n        <div class=\"ellipsis__shadow\" #shadowOrgEl [innerHTML]=\"orgHtml\"></div>\n        <div class=\"ellipsis__shadow\" #shadowTextEl>\n          <span>{{ text }}</span>\n        </div>\n      </div>\n    </div>\n  }\n}\n", dependencies: [{ kind: "ngmodule", type: ObserversModule }, { kind: "directive", type: i2.CdkObserveContent, selector: "[cdkObserveContent]", inputs: ["cdkObserveContentDisabled", "debounce"], outputs: ["cdkObserveContent"], exportAs: ["cdkObserveContent"] }, { kind: "directive", type: NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "cdkConnectedOverlayPush", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: EllipsisComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ellipsis', exportAs: 'ellipsis', preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, standalone: true, imports: [ObserversModule, NzTooltipDirective, NgTemplateOutlet, NgClass, NgStyle], template: "<div (cdkObserveContent)=\"refresh()\" #orgEl style=\"display: none\"><ng-content /></div>\n<ng-template #tooltipTpl let-con>\n  @if (tooltip) {\n    <span\n      nz-tooltip\n      [nzTooltipTitle]=\"titleTpl\"\n      [nzTooltipOverlayStyle]=\"{ 'overflow-wrap': 'break-word', 'word-wrap': 'break-word' }\"\n    >\n      <ng-container *ngTemplateOutlet=\"con\" />\n      <ng-template #titleTpl><div [innerHTML]=\"orgHtml\"></div></ng-template>\n    </span>\n  } @else {\n    <ng-container *ngTemplateOutlet=\"con\" />\n  }\n</ng-template>\n@switch (type) {\n  @case ('default') {\n    <span [ngClass]=\"cls\"></span>\n  }\n  @case ('length') {\n    <ng-template [ngTemplateOutlet]=\"tooltipTpl\" [ngTemplateOutletContext]=\"{ $implicit: lengthTpl }\" />\n    <ng-template #lengthTpl>{{ text }}</ng-template>\n  }\n  @case ('line-clamp') {\n    <ng-template [ngTemplateOutlet]=\"tooltipTpl\" [ngTemplateOutletContext]=\"{ $implicit: lineClampTpl }\" />\n    <ng-template #lineClampTpl>\n      <div [ngClass]=\"cls\" [ngStyle]=\"{ '-webkit-line-clamp': lines, '-webkit-box-orient': 'vertical' }\"></div>\n    </ng-template>\n  }\n  @case ('line') {\n    <div [ngClass]=\"cls\">\n      <div class=\"ellipsis__handle\">\n        <ng-template [ngTemplateOutlet]=\"tooltipTpl\" [ngTemplateOutletContext]=\"{ $implicit: lineTpl }\" />\n        <ng-template #lineTpl>{{ linsWord }}</ng-template>\n        <div class=\"ellipsis__shadow\" #shadowOrgEl [innerHTML]=\"orgHtml\"></div>\n        <div class=\"ellipsis__shadow\" #shadowTextEl>\n          <span>{{ text }}</span>\n        </div>\n      </div>\n    </div>\n  }\n}\n" }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i0.NgZone }, { type: i1.DomSanitizer }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: i0.ChangeDetectorRef }], propDecorators: { orgEl: [{
                type: ViewChild,
                args: ['orgEl', { static: false }]
            }], shadowOrgEl: [{
                type: ViewChild,
                args: ['shadowOrgEl', { static: false }]
            }], shadowTextEl: [{
                type: ViewChild,
                args: ['shadowTextEl', { static: false }]
            }], tooltip: [{
                type: Input
            }], length: [{
                type: Input
            }], lines: [{
                type: Input
            }], fullWidthRecognition: [{
                type: Input
            }], tail: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxsaXBzaXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL2VsbGlwc2lzL2VsbGlwc2lzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9lbGxpcHNpcy9lbGxpcHNpcy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9FLE9BQU8sRUFFTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUVULE1BQU0sRUFDTixLQUFLLEVBR0wsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTVCLE9BQU8sRUFBZ0IsWUFBWSxFQUFFLFdBQVcsRUFBZSxNQUFNLHVCQUF1QixDQUFDO0FBRTdGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7O0FBYTNELE1BQU0sT0FBTyxpQkFBaUI7SUF1QjVCLElBQUksUUFBUTtRQUNWLE1BQU0sRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQztRQUN6QyxPQUFPLENBQ0wsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ3ZELENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FDM0Qs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QkFFQyxLQUFLLG1CQUNULHVCQUF1QixDQUFDLE1BQU0saUJBQ2hDLGlCQUFpQixDQUFDLElBQUksY0FDekIsSUFBSSxXQUVQLENBQUMsZUFBZSxFQUFFLGtCQUFrQixFQUFFLGdCQUFnQixFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUM7OzBCQXlDL0UsTUFBTTsyQkFBQyxRQUFRO3lFQWhDNkIsS0FBSztzQkFBbkQsU0FBUzt1QkFBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO2dCQUNnQixXQUFXO3NCQUEvRCxTQUFTO3VCQUFDLGFBQWEsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7Z0JBQ1csWUFBWTtzQkFBakUsU0FBUzt1QkFBQyxjQUFjLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO2dCQVFuQixPQUFPO3NCQUEvQixLQUFLO2dCQUNzQixNQUFNO3NCQUFqQyxLQUFLO2dCQUNzQixLQUFLO3NCQUFoQyxLQUFLO2dCQUNtQixvQkFBb0I7c0JBQTVDLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2ZXJzTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL29ic2VydmVycyc7XG5pbXBvcnQgeyBET0NVTUVOVCwgTmdDbGFzcywgTmdTdHlsZSwgTmdUZW1wbGF0ZU91dGxldCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyB0YWtlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciwgTnVtYmVySW5wdXQgfSBmcm9tICdAZGVsb24vdXRpbC9kZWNvcmF0b3InO1xuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgTnpUb29sdGlwRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC90b29sdGlwJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZWxsaXBzaXMnLFxuICBleHBvcnRBczogJ2VsbGlwc2lzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2VsbGlwc2lzLmNvbXBvbmVudC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICAvLyBUT0RPOiBjYW4ndCB1c2UgQ2RrT2JzZXJ2ZUNvbnRlbnRcbiAgaW1wb3J0czogW09ic2VydmVyc01vZHVsZSwgTnpUb29sdGlwRGlyZWN0aXZlLCBOZ1RlbXBsYXRlT3V0bGV0LCBOZ0NsYXNzLCBOZ1N0eWxlXVxufSlcbmV4cG9ydCBjbGFzcyBFbGxpcHNpc0NvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV90b29sdGlwOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9sZW5ndGg6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbGluZXM6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZnVsbFdpZHRoUmVjb2duaXRpb246IEJvb2xlYW5JbnB1dDtcblxuICBwcml2YXRlIGlzU3VwcG9ydExpbmVDbGFtcCA9IHRoaXMuZG9jLmJvZHkuc3R5bGVbJ3dlYmtpdExpbmVDbGFtcCddICE9PSB1bmRlZmluZWQ7XG4gIEBWaWV3Q2hpbGQoJ29yZ0VsJywgeyBzdGF0aWM6IGZhbHNlIH0pIHByaXZhdGUgb3JnRWwhOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdzaGFkb3dPcmdFbCcsIHsgc3RhdGljOiBmYWxzZSB9KSBwcml2YXRlIHNoYWRvd09yZ0VsITogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnc2hhZG93VGV4dEVsJywgeyBzdGF0aWM6IGZhbHNlIH0pIHByaXZhdGUgc2hhZG93VGV4dEVsITogRWxlbWVudFJlZjtcbiAgcHJpdmF0ZSBpbml0ZWQgPSBmYWxzZTtcbiAgb3JnSHRtbCE6IFNhZmVIdG1sO1xuICB0eXBlID0gJ2RlZmF1bHQnO1xuICBjbHMgPSB7fTtcbiAgdGV4dCA9ICcnO1xuICB0YXJnZXRDb3VudCA9IDA7XG5cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHRvb2x0aXAgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKG51bGwpIGxlbmd0aD86IG51bWJlcjtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKG51bGwpIGxpbmVzPzogbnVtYmVyO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZnVsbFdpZHRoUmVjb2duaXRpb24gPSBmYWxzZTtcbiAgQElucHV0KCkgdGFpbCA9ICcuLi4nO1xuXG4gIGdldCBsaW5zV29yZCgpOiBzdHJpbmcge1xuICAgIGNvbnN0IHsgdGFyZ2V0Q291bnQsIHRleHQsIHRhaWwgfSA9IHRoaXM7XG4gICAgcmV0dXJuIChcbiAgICAgICh0YXJnZXRDb3VudCA+IDAgPyB0ZXh0LnN1YnN0cmluZygwLCB0YXJnZXRDb3VudCkgOiAnJykgK1xuICAgICAgKHRhcmdldENvdW50ID4gMCAmJiB0YXJnZXRDb3VudCA8IHRleHQubGVuZ3RoID8gdGFpbCA6ICcnKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGdldCB3aW4oKTogTnpTYWZlQW55IHtcbiAgICByZXR1cm4gdGhpcy5kb2MuZGVmYXVsdFZpZXcgfHwgd2luZG93O1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxuICAgIHByaXZhdGUgZG9tOiBEb21TYW5pdGl6ZXIsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IE56U2FmZUFueSxcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7fVxuXG4gIHByaXZhdGUgZ2V0U3RyRnVsbExlbmd0aChzdHI6IHN0cmluZyk6IG51bWJlciB7XG4gICAgcmV0dXJuIHN0ci5zcGxpdCgnJykucmVkdWNlKChwcmUsIGN1cikgPT4ge1xuICAgICAgY29uc3QgY2hhckNvZGUgPSBjdXIuY2hhckNvZGVBdCgwKTtcbiAgICAgIGlmIChjaGFyQ29kZSA+PSAwICYmIGNoYXJDb2RlIDw9IDEyOCkge1xuICAgICAgICByZXR1cm4gcHJlICsgMTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwcmUgKyAyO1xuICAgIH0sIDApO1xuICB9XG5cbiAgcHJpdmF0ZSBjdXRTdHJCeUZ1bGxMZW5ndGgoc3RyOiBzdHJpbmcsIG1heExlbmd0aDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBsZXQgc2hvd0xlbmd0aCA9IDA7XG4gICAgcmV0dXJuIHN0ci5zcGxpdCgnJykucmVkdWNlKChwcmUsIGN1cikgPT4ge1xuICAgICAgY29uc3QgY2hhckNvZGUgPSBjdXIuY2hhckNvZGVBdCgwKTtcbiAgICAgIGlmIChjaGFyQ29kZSA+PSAwICYmIGNoYXJDb2RlIDw9IDEyOCkge1xuICAgICAgICBzaG93TGVuZ3RoICs9IDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaG93TGVuZ3RoICs9IDI7XG4gICAgICB9XG4gICAgICBpZiAoc2hvd0xlbmd0aCA8PSBtYXhMZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHByZSArIGN1cjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwcmU7XG4gICAgfSwgJycpO1xuICB9XG5cbiAgcHJpdmF0ZSBiaXNlY3Rpb24oXG4gICAgdGFyZ2V0SGVpZ2h0OiBudW1iZXIsXG4gICAgbWlkOiBudW1iZXIsXG4gICAgYmVnaW46IG51bWJlcixcbiAgICBlbmQ6IG51bWJlcixcbiAgICB0ZXh0OiBzdHJpbmcsXG4gICAgbm9kZTogSFRNTEVsZW1lbnRcbiAgKTogbnVtYmVyIHtcbiAgICBjb25zdCBzdWZmaXggPSB0aGlzLnRhaWw7XG4gICAgbm9kZS5pbm5lckhUTUwgPSB0ZXh0LnN1YnN0cmluZygwLCBtaWQpICsgc3VmZml4O1xuICAgIGxldCBzaCA9IG5vZGUub2Zmc2V0SGVpZ2h0O1xuXG4gICAgaWYgKHNoIDw9IHRhcmdldEhlaWdodCkge1xuICAgICAgbm9kZS5pbm5lckhUTUwgPSB0ZXh0LnN1YnN0cmluZygwLCBtaWQgKyAxKSArIHN1ZmZpeDtcbiAgICAgIHNoID0gbm9kZS5vZmZzZXRIZWlnaHQ7XG4gICAgICBpZiAoc2ggPiB0YXJnZXRIZWlnaHQgfHwgbWlkID09PSBiZWdpbikge1xuICAgICAgICByZXR1cm4gbWlkO1xuICAgICAgfVxuICAgICAgYmVnaW4gPSBtaWQ7XG4gICAgICBtaWQgPSBlbmQgLSBiZWdpbiA9PT0gMSA/IGJlZ2luICsgMSA6IE1hdGguZmxvb3IoKGVuZCAtIGJlZ2luKSAvIDIpICsgYmVnaW47XG4gICAgICByZXR1cm4gdGhpcy5iaXNlY3Rpb24odGFyZ2V0SGVpZ2h0LCBtaWQsIGJlZ2luLCBlbmQsIHRleHQsIG5vZGUpO1xuICAgIH1cbiAgICBpZiAobWlkIC0gMSA8IDApIHtcbiAgICAgIHJldHVybiBtaWQ7XG4gICAgfVxuICAgIG5vZGUuaW5uZXJIVE1MID0gdGV4dC5zdWJzdHJpbmcoMCwgbWlkIC0gMSkgKyBzdWZmaXg7XG4gICAgc2ggPSBub2RlLm9mZnNldEhlaWdodDtcbiAgICBpZiAoc2ggPD0gdGFyZ2V0SGVpZ2h0KSB7XG4gICAgICByZXR1cm4gbWlkIC0gMTtcbiAgICB9XG4gICAgZW5kID0gbWlkO1xuICAgIG1pZCA9IE1hdGguZmxvb3IoKGVuZCAtIGJlZ2luKSAvIDIpICsgYmVnaW47XG4gICAgcmV0dXJuIHRoaXMuYmlzZWN0aW9uKHRhcmdldEhlaWdodCwgbWlkLCBiZWdpbiwgZW5kLCB0ZXh0LCBub2RlKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuVHlwZSgpOiB2b2lkIHtcbiAgICBjb25zdCB7IGxpbmVzLCBsZW5ndGgsIGlzU3VwcG9ydExpbmVDbGFtcCB9ID0gdGhpcztcbiAgICB0aGlzLmNscyA9IHtcbiAgICAgIGVsbGlwc2lzOiB0cnVlLFxuICAgICAgZWxsaXBzaXNfX2xpbmVzOiBsaW5lcyAmJiAhaXNTdXBwb3J0TGluZUNsYW1wLFxuICAgICAgJ2VsbGlwc2lzX19saW5lLWNsYW1wJzogbGluZXMgJiYgaXNTdXBwb3J0TGluZUNsYW1wXG4gICAgfTtcbiAgICBpZiAoIWxpbmVzICYmICFsZW5ndGgpIHtcbiAgICAgIHRoaXMudHlwZSA9ICdkZWZhdWx0JztcbiAgICB9IGVsc2UgaWYgKCFsaW5lcykge1xuICAgICAgdGhpcy50eXBlID0gJ2xlbmd0aCc7XG4gICAgfSBlbHNlIGlmIChpc1N1cHBvcnRMaW5lQ2xhbXApIHtcbiAgICAgIHRoaXMudHlwZSA9ICdsaW5lLWNsYW1wJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50eXBlID0gJ2xpbmUnO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2VuKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgdHlwZSwgbGluZXMsIGxlbmd0aCwgZnVsbFdpZHRoUmVjb2duaXRpb24sIHRhaWwsIG9yZ0VsLCBjZHIsIG5nWm9uZSB9ID0gdGhpcztcbiAgICBpZiAodHlwZSA9PT0gJ2xlbmd0aCcpIHtcbiAgICAgIGNvbnN0IGVsID0gb3JnRWwubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGlmIChlbC5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRWxsaXBzaXMgY29udGVudCBtdXN0IGJlIHN0cmluZy4nKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGxlbmd0aFRleHQgPSBlbC50ZXh0Q29udGVudCE7XG4gICAgICBjb25zdCB0ZXh0TGVuZ3RoID0gZnVsbFdpZHRoUmVjb2duaXRpb24gPyB0aGlzLmdldFN0ckZ1bGxMZW5ndGgobGVuZ3RoVGV4dCkgOiBsZW5ndGhUZXh0Lmxlbmd0aDtcbiAgICAgIGlmICh0ZXh0TGVuZ3RoIDw9IGxlbmd0aCEgfHwgbGVuZ3RoISA8IDApIHtcbiAgICAgICAgdGhpcy50ZXh0ID0gbGVuZ3RoVGV4dDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBkaXNwbGF5VGV4dDogc3RyaW5nO1xuICAgICAgICBpZiAobGVuZ3RoISAtIHRhaWwubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICBkaXNwbGF5VGV4dCA9ICcnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRpc3BsYXlUZXh0ID0gZnVsbFdpZHRoUmVjb2duaXRpb25cbiAgICAgICAgICAgID8gdGhpcy5jdXRTdHJCeUZ1bGxMZW5ndGgobGVuZ3RoVGV4dCwgbGVuZ3RoISlcbiAgICAgICAgICAgIDogbGVuZ3RoVGV4dC5zbGljZSgwLCBsZW5ndGgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudGV4dCA9IGRpc3BsYXlUZXh0ICsgdGFpbDtcbiAgICAgIH1cbiAgICAgIG5nWm9uZS5ydW4oKCkgPT4gY2RyLmRldGVjdENoYW5nZXMoKSk7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnbGluZScpIHtcbiAgICAgIGNvbnN0IHsgc2hhZG93T3JnRWwsIHNoYWRvd1RleHRFbCB9ID0gdGhpcztcbiAgICAgIGNvbnN0IG9yZ05vZGUgPSBzaGFkb3dPcmdFbC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgICAgY29uc3QgbGluZVRleHQgPSBvcmdOb2RlLmlubmVyVGV4dCB8fCBvcmdOb2RlLnRleHRDb250ZW50ITtcbiAgICAgIGNvbnN0IGxpbmVIZWlnaHQgPSBwYXJzZUludCh0aGlzLndpbi5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZ2V0RWwoJy5lbGxpcHNpcycpKS5saW5lSGVpZ2h0ISwgMTApO1xuICAgICAgY29uc3QgdGFyZ2V0SGVpZ2h0ID0gbGluZXMhICogbGluZUhlaWdodDtcbiAgICAgIHRoaXMuZ2V0RWwoJy5lbGxpcHNpc19faGFuZGxlJykuc3R5bGUuaGVpZ2h0ID0gYCR7dGFyZ2V0SGVpZ2h0fXB4YDtcblxuICAgICAgaWYgKG9yZ05vZGUub2Zmc2V0SGVpZ2h0IDw9IHRhcmdldEhlaWdodCkge1xuICAgICAgICB0aGlzLnRleHQgPSBsaW5lVGV4dDtcbiAgICAgICAgdGhpcy50YXJnZXRDb3VudCA9IGxpbmVUZXh0Lmxlbmd0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGJpc2VjdGlvblxuICAgICAgICBjb25zdCBsZW4gPSBsaW5lVGV4dC5sZW5ndGg7XG4gICAgICAgIGNvbnN0IG1pZCA9IE1hdGguY2VpbChsZW4gLyAyKTtcblxuICAgICAgICBjb25zdCBjb3VudCA9IHRoaXMuYmlzZWN0aW9uKHRhcmdldEhlaWdodCwgbWlkLCAwLCBsZW4sIGxpbmVUZXh0LCBzaGFkb3dUZXh0RWwubmF0aXZlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICAgICAgdGhpcy50ZXh0ID0gbGluZVRleHQ7XG4gICAgICAgIHRoaXMudGFyZ2V0Q291bnQgPSBjb3VudDtcbiAgICAgIH1cbiAgICAgIG5nWm9uZS5ydW4oKCkgPT4gY2RyLmRldGVjdENoYW5nZXMoKSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRFbChjbHM6IHN0cmluZyk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoY2xzKTtcbiAgfVxuXG4gIHByaXZhdGUgZXhlY3V0ZU9uU3RhYmxlKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubmdab25lLmlzU3RhYmxlKSB7XG4gICAgICBmbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm5nWm9uZS5vblN0YWJsZS5hc09ic2VydmFibGUoKS5waXBlKHRha2UoMSkpLnN1YnNjcmliZShmbik7XG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaCgpOiB2b2lkIHtcbiAgICB0aGlzLmdlblR5cGUoKTtcbiAgICBjb25zdCB7IHR5cGUsIGRvbSwgb3JnRWwsIGNkciB9ID0gdGhpcztcbiAgICBjb25zdCBodG1sID0gb3JnRWwubmF0aXZlRWxlbWVudC5pbm5lckhUTUw7XG4gICAgdGhpcy5vcmdIdG1sID0gZG9tLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKGh0bWwpO1xuICAgIGNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgdGhpcy5leGVjdXRlT25TdGFibGUoKCkgPT4ge1xuICAgICAgdGhpcy5nZW4oKTtcbiAgICAgIGlmICh0eXBlICE9PSAnbGluZScpIHtcbiAgICAgICAgY29uc3QgZWwgPSB0aGlzLmdldEVsKCcuZWxsaXBzaXMnKTtcbiAgICAgICAgaWYgKGVsKSB7XG4gICAgICAgICAgZWwuaW5uZXJIVE1MID0gaHRtbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmluaXRlZCkge1xuICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgfVxuICB9XG59XG4iLCI8ZGl2IChjZGtPYnNlcnZlQ29udGVudCk9XCJyZWZyZXNoKClcIiAjb3JnRWwgc3R5bGU9XCJkaXNwbGF5OiBub25lXCI+PG5nLWNvbnRlbnQgLz48L2Rpdj5cbjxuZy10ZW1wbGF0ZSAjdG9vbHRpcFRwbCBsZXQtY29uPlxuICBAaWYgKHRvb2x0aXApIHtcbiAgICA8c3BhblxuICAgICAgbnotdG9vbHRpcFxuICAgICAgW256VG9vbHRpcFRpdGxlXT1cInRpdGxlVHBsXCJcbiAgICAgIFtuelRvb2x0aXBPdmVybGF5U3R5bGVdPVwieyAnb3ZlcmZsb3ctd3JhcCc6ICdicmVhay13b3JkJywgJ3dvcmQtd3JhcCc6ICdicmVhay13b3JkJyB9XCJcbiAgICA+XG4gICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiY29uXCIgLz5cbiAgICAgIDxuZy10ZW1wbGF0ZSAjdGl0bGVUcGw+PGRpdiBbaW5uZXJIVE1MXT1cIm9yZ0h0bWxcIj48L2Rpdj48L25nLXRlbXBsYXRlPlxuICAgIDwvc3Bhbj5cbiAgfSBAZWxzZSB7XG4gICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImNvblwiIC8+XG4gIH1cbjwvbmctdGVtcGxhdGU+XG5Ac3dpdGNoICh0eXBlKSB7XG4gIEBjYXNlICgnZGVmYXVsdCcpIHtcbiAgICA8c3BhbiBbbmdDbGFzc109XCJjbHNcIj48L3NwYW4+XG4gIH1cbiAgQGNhc2UgKCdsZW5ndGgnKSB7XG4gICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRvb2x0aXBUcGxcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IGxlbmd0aFRwbCB9XCIgLz5cbiAgICA8bmctdGVtcGxhdGUgI2xlbmd0aFRwbD57eyB0ZXh0IH19PC9uZy10ZW1wbGF0ZT5cbiAgfVxuICBAY2FzZSAoJ2xpbmUtY2xhbXAnKSB7XG4gICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRvb2x0aXBUcGxcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IGxpbmVDbGFtcFRwbCB9XCIgLz5cbiAgICA8bmctdGVtcGxhdGUgI2xpbmVDbGFtcFRwbD5cbiAgICAgIDxkaXYgW25nQ2xhc3NdPVwiY2xzXCIgW25nU3R5bGVdPVwieyAnLXdlYmtpdC1saW5lLWNsYW1wJzogbGluZXMsICctd2Via2l0LWJveC1vcmllbnQnOiAndmVydGljYWwnIH1cIj48L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICB9XG4gIEBjYXNlICgnbGluZScpIHtcbiAgICA8ZGl2IFtuZ0NsYXNzXT1cImNsc1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImVsbGlwc2lzX19oYW5kbGVcIj5cbiAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRvb2x0aXBUcGxcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IGxpbmVUcGwgfVwiIC8+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjbGluZVRwbD57eyBsaW5zV29yZCB9fTwvbmctdGVtcGxhdGU+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJlbGxpcHNpc19fc2hhZG93XCIgI3NoYWRvd09yZ0VsIFtpbm5lckhUTUxdPVwib3JnSHRtbFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZWxsaXBzaXNfX3NoYWRvd1wiICNzaGFkb3dUZXh0RWw+XG4gICAgICAgICAgPHNwYW4+e3sgdGV4dCB9fTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgfVxufVxuIl19