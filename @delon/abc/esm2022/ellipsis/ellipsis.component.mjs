import { CdkObserveContent } from '@angular/cdk/observers';
import { DOCUMENT, NgClass, NgStyle, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, NgZone, ViewChild, ViewEncapsulation, booleanAttribute, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { take } from 'rxjs';
import { toNumber } from '@delon/util/decorator';
import { NzTooltipDirective } from 'ng-zorro-antd/tooltip';
import * as i0 from "@angular/core";
export class EllipsisComponent {
    constructor() {
        this.el = inject(ElementRef).nativeElement;
        this.ngZone = inject(NgZone);
        this.dom = inject(DomSanitizer);
        this.doc = inject(DOCUMENT);
        this.cdr = inject(ChangeDetectorRef);
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
        return ((targetCount > 0 ? text.substring(0, targetCount) : '') +
            (targetCount > 0 && targetCount < text.length ? tail : ''));
    }
    get win() {
        return this.doc.defaultView || window;
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
            const handleEl = this.getEl('.ellipsis__handle');
            handleEl.style.height = `${targetHeight}px`;
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
        return this.el.querySelector(cls);
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: EllipsisComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.1.0", type: EllipsisComponent, isStandalone: true, selector: "ellipsis", inputs: { tooltip: ["tooltip", "tooltip", booleanAttribute], length: ["length", "length", (v) => toNumber(v, null)], lines: ["lines", "lines", (v) => toNumber(v, null)], fullWidthRecognition: ["fullWidthRecognition", "fullWidthRecognition", booleanAttribute], tail: "tail" }, viewQueries: [{ propertyName: "orgEl", first: true, predicate: ["orgEl"], descendants: true }, { propertyName: "shadowOrgEl", first: true, predicate: ["shadowOrgEl"], descendants: true }, { propertyName: "shadowTextEl", first: true, predicate: ["shadowTextEl"], descendants: true }], exportAs: ["ellipsis"], usesOnChanges: true, ngImport: i0, template: "<div (cdkObserveContent)=\"refresh()\" #orgEl style=\"display: none\"><ng-content /></div>\n<ng-template #tooltipTpl let-con>\n  @if (tooltip) {\n    <span\n      nz-tooltip\n      [nzTooltipTitle]=\"titleTpl\"\n      [nzTooltipOverlayStyle]=\"{ 'overflow-wrap': 'break-word', 'word-wrap': 'break-word' }\"\n    >\n      <ng-container *ngTemplateOutlet=\"con\" />\n      <ng-template #titleTpl><div [innerHTML]=\"orgHtml\"></div></ng-template>\n    </span>\n  } @else {\n    <ng-container *ngTemplateOutlet=\"con\" />\n  }\n</ng-template>\n@switch (type) {\n  @case ('default') {\n    <span [ngClass]=\"cls\"></span>\n  }\n  @case ('length') {\n    <ng-template [ngTemplateOutlet]=\"tooltipTpl\" [ngTemplateOutletContext]=\"{ $implicit: lengthTpl }\" />\n    <ng-template #lengthTpl>{{ text }}</ng-template>\n  }\n  @case ('line-clamp') {\n    <ng-template [ngTemplateOutlet]=\"tooltipTpl\" [ngTemplateOutletContext]=\"{ $implicit: lineClampTpl }\" />\n    <ng-template #lineClampTpl>\n      <div [ngClass]=\"cls\" [ngStyle]=\"{ '-webkit-line-clamp': lines, '-webkit-box-orient': 'vertical' }\"></div>\n    </ng-template>\n  }\n  @case ('line') {\n    <div [ngClass]=\"cls\">\n      <div class=\"ellipsis__handle\">\n        <ng-template [ngTemplateOutlet]=\"tooltipTpl\" [ngTemplateOutletContext]=\"{ $implicit: lineTpl }\" />\n        <ng-template #lineTpl>{{ linsWord }}</ng-template>\n        <div class=\"ellipsis__shadow\" #shadowOrgEl [innerHTML]=\"orgHtml\"></div>\n        <div class=\"ellipsis__shadow\" #shadowTextEl>\n          <span>{{ text }}</span>\n        </div>\n      </div>\n    </div>\n  }\n}\n", dependencies: [{ kind: "directive", type: CdkObserveContent, selector: "[cdkObserveContent]", inputs: ["cdkObserveContentDisabled", "debounce"], outputs: ["cdkObserveContent"], exportAs: ["cdkObserveContent"] }, { kind: "directive", type: NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "cdkConnectedOverlayPush", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: EllipsisComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ellipsis', exportAs: 'ellipsis', preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, standalone: true, imports: [CdkObserveContent, NzTooltipDirective, NgTemplateOutlet, NgClass, NgStyle], template: "<div (cdkObserveContent)=\"refresh()\" #orgEl style=\"display: none\"><ng-content /></div>\n<ng-template #tooltipTpl let-con>\n  @if (tooltip) {\n    <span\n      nz-tooltip\n      [nzTooltipTitle]=\"titleTpl\"\n      [nzTooltipOverlayStyle]=\"{ 'overflow-wrap': 'break-word', 'word-wrap': 'break-word' }\"\n    >\n      <ng-container *ngTemplateOutlet=\"con\" />\n      <ng-template #titleTpl><div [innerHTML]=\"orgHtml\"></div></ng-template>\n    </span>\n  } @else {\n    <ng-container *ngTemplateOutlet=\"con\" />\n  }\n</ng-template>\n@switch (type) {\n  @case ('default') {\n    <span [ngClass]=\"cls\"></span>\n  }\n  @case ('length') {\n    <ng-template [ngTemplateOutlet]=\"tooltipTpl\" [ngTemplateOutletContext]=\"{ $implicit: lengthTpl }\" />\n    <ng-template #lengthTpl>{{ text }}</ng-template>\n  }\n  @case ('line-clamp') {\n    <ng-template [ngTemplateOutlet]=\"tooltipTpl\" [ngTemplateOutletContext]=\"{ $implicit: lineClampTpl }\" />\n    <ng-template #lineClampTpl>\n      <div [ngClass]=\"cls\" [ngStyle]=\"{ '-webkit-line-clamp': lines, '-webkit-box-orient': 'vertical' }\"></div>\n    </ng-template>\n  }\n  @case ('line') {\n    <div [ngClass]=\"cls\">\n      <div class=\"ellipsis__handle\">\n        <ng-template [ngTemplateOutlet]=\"tooltipTpl\" [ngTemplateOutletContext]=\"{ $implicit: lineTpl }\" />\n        <ng-template #lineTpl>{{ linsWord }}</ng-template>\n        <div class=\"ellipsis__shadow\" #shadowOrgEl [innerHTML]=\"orgHtml\"></div>\n        <div class=\"ellipsis__shadow\" #shadowTextEl>\n          <span>{{ text }}</span>\n        </div>\n      </div>\n    </div>\n  }\n}\n" }]
        }], propDecorators: { orgEl: [{
                type: ViewChild,
                args: ['orgEl', { static: false }]
            }], shadowOrgEl: [{
                type: ViewChild,
                args: ['shadowOrgEl', { static: false }]
            }], shadowTextEl: [{
                type: ViewChild,
                args: ['shadowTextEl', { static: false }]
            }], tooltip: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], length: [{
                type: Input,
                args: [{ transform: (v) => toNumber(v, null) }]
            }], lines: [{
                type: Input,
                args: [{ transform: (v) => toNumber(v, null) }]
            }], fullWidthRecognition: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], tail: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxsaXBzaXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL2VsbGlwc2lzL2VsbGlwc2lzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9lbGxpcHNpcy9lbGxpcHNpcy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvRSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxNQUFNLEVBRU4sU0FBUyxFQUNULGlCQUFpQixFQUNqQixnQkFBZ0IsRUFDaEIsTUFBTSxFQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQVksTUFBTSwyQkFBMkIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTVCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVqRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFZM0QsTUFBTSxPQUFPLGlCQUFpQjtJQVY5QjtRQVdtQixPQUFFLEdBQWdCLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxhQUFhLENBQUM7UUFDbkQsV0FBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4QixRQUFHLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzNCLFFBQUcsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdkIsUUFBRyxHQUFHLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFD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QS9ELEtBQUs7dUJBQUMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFZLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUU7Z0JBQ2pCLG9CQUFvQjtzQkFBM0QsS0FBSzt1QkFBQyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRTtnQkFDN0IsSUFBSTtzQkFBWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2RrT2JzZXJ2ZUNvbnRlbnQgfSBmcm9tICdAYW5ndWxhci9jZGsvb2JzZXJ2ZXJzJztcbmltcG9ydCB7IERPQ1VNRU5ULCBOZ0NsYXNzLCBOZ1N0eWxlLCBOZ1RlbXBsYXRlT3V0bGV0IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIGJvb2xlYW5BdHRyaWJ1dGUsXG4gIGluamVjdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IHRha2UgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgdG9OdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbC9kZWNvcmF0b3InO1xuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgTnpUb29sdGlwRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC90b29sdGlwJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZWxsaXBzaXMnLFxuICBleHBvcnRBczogJ2VsbGlwc2lzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2VsbGlwc2lzLmNvbXBvbmVudC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbQ2RrT2JzZXJ2ZUNvbnRlbnQsIE56VG9vbHRpcERpcmVjdGl2ZSwgTmdUZW1wbGF0ZU91dGxldCwgTmdDbGFzcywgTmdTdHlsZV1cbn0pXG5leHBvcnQgY2xhc3MgRWxsaXBzaXNDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xuICBwcml2YXRlIHJlYWRvbmx5IGVsOiBIVE1MRWxlbWVudCA9IGluamVjdChFbGVtZW50UmVmKS5uYXRpdmVFbGVtZW50O1xuICBwcml2YXRlIHJlYWRvbmx5IG5nWm9uZSA9IGluamVjdChOZ1pvbmUpO1xuICBwcml2YXRlIHJlYWRvbmx5IGRvbSA9IGluamVjdChEb21TYW5pdGl6ZXIpO1xuICBwcml2YXRlIHJlYWRvbmx5IGRvYyA9IGluamVjdChET0NVTUVOVCk7XG4gIHByaXZhdGUgcmVhZG9ubHkgY2RyID0gaW5qZWN0KENoYW5nZURldGVjdG9yUmVmKTtcbiAgcHJpdmF0ZSBpc1N1cHBvcnRMaW5lQ2xhbXAgPSB0aGlzLmRvYy5ib2R5LnN0eWxlWyd3ZWJraXRMaW5lQ2xhbXAnXSAhPT0gdW5kZWZpbmVkO1xuICBAVmlld0NoaWxkKCdvcmdFbCcsIHsgc3RhdGljOiBmYWxzZSB9KSBwcml2YXRlIG9yZ0VsITogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnc2hhZG93T3JnRWwnLCB7IHN0YXRpYzogZmFsc2UgfSkgcHJpdmF0ZSBzaGFkb3dPcmdFbCE6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3NoYWRvd1RleHRFbCcsIHsgc3RhdGljOiBmYWxzZSB9KSBwcml2YXRlIHNoYWRvd1RleHRFbCE6IEVsZW1lbnRSZWY7XG4gIHByaXZhdGUgaW5pdGVkID0gZmFsc2U7XG4gIG9yZ0h0bWwhOiBTYWZlSHRtbDtcbiAgdHlwZSA9ICdkZWZhdWx0JztcbiAgY2xzID0ge307XG4gIHRleHQgPSAnJztcbiAgdGFyZ2V0Q291bnQgPSAwO1xuXG4gIEBJbnB1dCh7IHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZSB9KSB0b29sdGlwID0gZmFsc2U7XG4gIEBJbnB1dCh7IHRyYW5zZm9ybTogKHY6IE56U2FmZUFueSkgPT4gdG9OdW1iZXIodiwgbnVsbCkgfSkgbGVuZ3RoPzogbnVtYmVyO1xuICBASW5wdXQoeyB0cmFuc2Zvcm06ICh2OiBOelNhZmVBbnkpID0+IHRvTnVtYmVyKHYsIG51bGwpIH0pIGxpbmVzPzogbnVtYmVyO1xuICBASW5wdXQoeyB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGUgfSkgZnVsbFdpZHRoUmVjb2duaXRpb24gPSBmYWxzZTtcbiAgQElucHV0KCkgdGFpbCA9ICcuLi4nO1xuXG4gIGdldCBsaW5zV29yZCgpOiBzdHJpbmcge1xuICAgIGNvbnN0IHsgdGFyZ2V0Q291bnQsIHRleHQsIHRhaWwgfSA9IHRoaXM7XG4gICAgcmV0dXJuIChcbiAgICAgICh0YXJnZXRDb3VudCA+IDAgPyB0ZXh0LnN1YnN0cmluZygwLCB0YXJnZXRDb3VudCkgOiAnJykgK1xuICAgICAgKHRhcmdldENvdW50ID4gMCAmJiB0YXJnZXRDb3VudCA8IHRleHQubGVuZ3RoID8gdGFpbCA6ICcnKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGdldCB3aW4oKTogTnpTYWZlQW55IHtcbiAgICByZXR1cm4gdGhpcy5kb2MuZGVmYXVsdFZpZXcgfHwgd2luZG93O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTdHJGdWxsTGVuZ3RoKHN0cjogc3RyaW5nKTogbnVtYmVyIHtcbiAgICByZXR1cm4gc3RyLnNwbGl0KCcnKS5yZWR1Y2UoKHByZSwgY3VyKSA9PiB7XG4gICAgICBjb25zdCBjaGFyQ29kZSA9IGN1ci5jaGFyQ29kZUF0KDApO1xuICAgICAgaWYgKGNoYXJDb2RlID49IDAgJiYgY2hhckNvZGUgPD0gMTI4KSB7XG4gICAgICAgIHJldHVybiBwcmUgKyAxO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHByZSArIDI7XG4gICAgfSwgMCk7XG4gIH1cblxuICBwcml2YXRlIGN1dFN0ckJ5RnVsbExlbmd0aChzdHI6IHN0cmluZywgbWF4TGVuZ3RoOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGxldCBzaG93TGVuZ3RoID0gMDtcbiAgICByZXR1cm4gc3RyLnNwbGl0KCcnKS5yZWR1Y2UoKHByZSwgY3VyKSA9PiB7XG4gICAgICBjb25zdCBjaGFyQ29kZSA9IGN1ci5jaGFyQ29kZUF0KDApO1xuICAgICAgaWYgKGNoYXJDb2RlID49IDAgJiYgY2hhckNvZGUgPD0gMTI4KSB7XG4gICAgICAgIHNob3dMZW5ndGggKz0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNob3dMZW5ndGggKz0gMjtcbiAgICAgIH1cbiAgICAgIGlmIChzaG93TGVuZ3RoIDw9IG1heExlbmd0aCkge1xuICAgICAgICByZXR1cm4gcHJlICsgY3VyO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHByZTtcbiAgICB9LCAnJyk7XG4gIH1cblxuICBwcml2YXRlIGJpc2VjdGlvbihcbiAgICB0YXJnZXRIZWlnaHQ6IG51bWJlcixcbiAgICBtaWQ6IG51bWJlcixcbiAgICBiZWdpbjogbnVtYmVyLFxuICAgIGVuZDogbnVtYmVyLFxuICAgIHRleHQ6IHN0cmluZyxcbiAgICBub2RlOiBIVE1MRWxlbWVudFxuICApOiBudW1iZXIge1xuICAgIGNvbnN0IHN1ZmZpeCA9IHRoaXMudGFpbDtcbiAgICBub2RlLmlubmVySFRNTCA9IHRleHQuc3Vic3RyaW5nKDAsIG1pZCkgKyBzdWZmaXg7XG4gICAgbGV0IHNoID0gbm9kZS5vZmZzZXRIZWlnaHQ7XG5cbiAgICBpZiAoc2ggPD0gdGFyZ2V0SGVpZ2h0KSB7XG4gICAgICBub2RlLmlubmVySFRNTCA9IHRleHQuc3Vic3RyaW5nKDAsIG1pZCArIDEpICsgc3VmZml4O1xuICAgICAgc2ggPSBub2RlLm9mZnNldEhlaWdodDtcbiAgICAgIGlmIChzaCA+IHRhcmdldEhlaWdodCB8fCBtaWQgPT09IGJlZ2luKSB7XG4gICAgICAgIHJldHVybiBtaWQ7XG4gICAgICB9XG4gICAgICBiZWdpbiA9IG1pZDtcbiAgICAgIG1pZCA9IGVuZCAtIGJlZ2luID09PSAxID8gYmVnaW4gKyAxIDogTWF0aC5mbG9vcigoZW5kIC0gYmVnaW4pIC8gMikgKyBiZWdpbjtcbiAgICAgIHJldHVybiB0aGlzLmJpc2VjdGlvbih0YXJnZXRIZWlnaHQsIG1pZCwgYmVnaW4sIGVuZCwgdGV4dCwgbm9kZSk7XG4gICAgfVxuICAgIGlmIChtaWQgLSAxIDwgMCkge1xuICAgICAgcmV0dXJuIG1pZDtcbiAgICB9XG4gICAgbm9kZS5pbm5lckhUTUwgPSB0ZXh0LnN1YnN0cmluZygwLCBtaWQgLSAxKSArIHN1ZmZpeDtcbiAgICBzaCA9IG5vZGUub2Zmc2V0SGVpZ2h0O1xuICAgIGlmIChzaCA8PSB0YXJnZXRIZWlnaHQpIHtcbiAgICAgIHJldHVybiBtaWQgLSAxO1xuICAgIH1cbiAgICBlbmQgPSBtaWQ7XG4gICAgbWlkID0gTWF0aC5mbG9vcigoZW5kIC0gYmVnaW4pIC8gMikgKyBiZWdpbjtcbiAgICByZXR1cm4gdGhpcy5iaXNlY3Rpb24odGFyZ2V0SGVpZ2h0LCBtaWQsIGJlZ2luLCBlbmQsIHRleHQsIG5vZGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5UeXBlKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgbGluZXMsIGxlbmd0aCwgaXNTdXBwb3J0TGluZUNsYW1wIH0gPSB0aGlzO1xuICAgIHRoaXMuY2xzID0ge1xuICAgICAgZWxsaXBzaXM6IHRydWUsXG4gICAgICBlbGxpcHNpc19fbGluZXM6IGxpbmVzICYmICFpc1N1cHBvcnRMaW5lQ2xhbXAsXG4gICAgICAnZWxsaXBzaXNfX2xpbmUtY2xhbXAnOiBsaW5lcyAmJiBpc1N1cHBvcnRMaW5lQ2xhbXBcbiAgICB9O1xuICAgIGlmICghbGluZXMgJiYgIWxlbmd0aCkge1xuICAgICAgdGhpcy50eXBlID0gJ2RlZmF1bHQnO1xuICAgIH0gZWxzZSBpZiAoIWxpbmVzKSB7XG4gICAgICB0aGlzLnR5cGUgPSAnbGVuZ3RoJztcbiAgICB9IGVsc2UgaWYgKGlzU3VwcG9ydExpbmVDbGFtcCkge1xuICAgICAgdGhpcy50eXBlID0gJ2xpbmUtY2xhbXAnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnR5cGUgPSAnbGluZSc7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZW4oKTogdm9pZCB7XG4gICAgY29uc3QgeyB0eXBlLCBsaW5lcywgbGVuZ3RoLCBmdWxsV2lkdGhSZWNvZ25pdGlvbiwgdGFpbCwgb3JnRWwsIGNkciwgbmdab25lIH0gPSB0aGlzO1xuICAgIGlmICh0eXBlID09PSAnbGVuZ3RoJykge1xuICAgICAgY29uc3QgZWwgPSBvcmdFbC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgICAgaWYgKGVsLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFbGxpcHNpcyBjb250ZW50IG11c3QgYmUgc3RyaW5nLicpO1xuICAgICAgfVxuICAgICAgY29uc3QgbGVuZ3RoVGV4dCA9IGVsLnRleHRDb250ZW50ITtcbiAgICAgIGNvbnN0IHRleHRMZW5ndGggPSBmdWxsV2lkdGhSZWNvZ25pdGlvbiA/IHRoaXMuZ2V0U3RyRnVsbExlbmd0aChsZW5ndGhUZXh0KSA6IGxlbmd0aFRleHQubGVuZ3RoO1xuICAgICAgaWYgKHRleHRMZW5ndGggPD0gbGVuZ3RoISB8fCBsZW5ndGghIDwgMCkge1xuICAgICAgICB0aGlzLnRleHQgPSBsZW5ndGhUZXh0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGRpc3BsYXlUZXh0OiBzdHJpbmc7XG4gICAgICAgIGlmIChsZW5ndGghIC0gdGFpbC5sZW5ndGggPD0gMCkge1xuICAgICAgICAgIGRpc3BsYXlUZXh0ID0gJyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGlzcGxheVRleHQgPSBmdWxsV2lkdGhSZWNvZ25pdGlvblxuICAgICAgICAgICAgPyB0aGlzLmN1dFN0ckJ5RnVsbExlbmd0aChsZW5ndGhUZXh0LCBsZW5ndGghKVxuICAgICAgICAgICAgOiBsZW5ndGhUZXh0LnNsaWNlKDAsIGxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50ZXh0ID0gZGlzcGxheVRleHQgKyB0YWlsO1xuICAgICAgfVxuICAgICAgbmdab25lLnJ1bigoKSA9PiBjZHIuZGV0ZWN0Q2hhbmdlcygpKTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdsaW5lJykge1xuICAgICAgY29uc3QgeyBzaGFkb3dPcmdFbCwgc2hhZG93VGV4dEVsIH0gPSB0aGlzO1xuICAgICAgY29uc3Qgb3JnTm9kZSA9IHNoYWRvd09yZ0VsLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBjb25zdCBsaW5lVGV4dCA9IG9yZ05vZGUuaW5uZXJUZXh0IHx8IG9yZ05vZGUudGV4dENvbnRlbnQhO1xuICAgICAgY29uc3QgbGluZUhlaWdodCA9IHBhcnNlSW50KHRoaXMud2luLmdldENvbXB1dGVkU3R5bGUodGhpcy5nZXRFbCgnLmVsbGlwc2lzJykpLmxpbmVIZWlnaHQhLCAxMCk7XG4gICAgICBjb25zdCB0YXJnZXRIZWlnaHQgPSBsaW5lcyEgKiBsaW5lSGVpZ2h0O1xuICAgICAgY29uc3QgaGFuZGxlRWwgPSB0aGlzLmdldEVsKCcuZWxsaXBzaXNfX2hhbmRsZScpO1xuICAgICAgaGFuZGxlRWwhLnN0eWxlLmhlaWdodCA9IGAke3RhcmdldEhlaWdodH1weGA7XG5cbiAgICAgIGlmIChvcmdOb2RlLm9mZnNldEhlaWdodCA8PSB0YXJnZXRIZWlnaHQpIHtcbiAgICAgICAgdGhpcy50ZXh0ID0gbGluZVRleHQ7XG4gICAgICAgIHRoaXMudGFyZ2V0Q291bnQgPSBsaW5lVGV4dC5sZW5ndGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBiaXNlY3Rpb25cbiAgICAgICAgY29uc3QgbGVuID0gbGluZVRleHQubGVuZ3RoO1xuICAgICAgICBjb25zdCBtaWQgPSBNYXRoLmNlaWwobGVuIC8gMik7XG5cbiAgICAgICAgY29uc3QgY291bnQgPSB0aGlzLmJpc2VjdGlvbih0YXJnZXRIZWlnaHQsIG1pZCwgMCwgbGVuLCBsaW5lVGV4dCwgc2hhZG93VGV4dEVsLm5hdGl2ZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgICAgIHRoaXMudGV4dCA9IGxpbmVUZXh0O1xuICAgICAgICB0aGlzLnRhcmdldENvdW50ID0gY291bnQ7XG4gICAgICB9XG4gICAgICBuZ1pvbmUucnVuKCgpID0+IGNkci5kZXRlY3RDaGFuZ2VzKCkpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0RWwoY2xzOiBzdHJpbmcpOiBIVE1MRWxlbWVudCB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KGNscyk7XG4gIH1cblxuICBwcml2YXRlIGV4ZWN1dGVPblN0YWJsZShmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm5nWm9uZS5pc1N0YWJsZSkge1xuICAgICAgZm4oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5uZ1pvbmUub25TdGFibGUuYXNPYnNlcnZhYmxlKCkucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoZm4pO1xuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2goKTogdm9pZCB7XG4gICAgdGhpcy5nZW5UeXBlKCk7XG4gICAgY29uc3QgeyB0eXBlLCBkb20sIG9yZ0VsLCBjZHIgfSA9IHRoaXM7XG4gICAgY29uc3QgaHRtbCA9IG9yZ0VsLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MO1xuICAgIHRoaXMub3JnSHRtbCA9IGRvbS5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChodG1sKTtcbiAgICBjZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHRoaXMuZXhlY3V0ZU9uU3RhYmxlKCgpID0+IHtcbiAgICAgIHRoaXMuZ2VuKCk7XG4gICAgICBpZiAodHlwZSAhPT0gJ2xpbmUnKSB7XG4gICAgICAgIGNvbnN0IGVsID0gdGhpcy5nZXRFbCgnLmVsbGlwc2lzJyk7XG4gICAgICAgIGlmIChlbCkge1xuICAgICAgICAgIGVsLmlubmVySFRNTCA9IGh0bWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmluaXRlZCA9IHRydWU7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pbml0ZWQpIHtcbiAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgIH1cbiAgfVxufVxuIiwiPGRpdiAoY2RrT2JzZXJ2ZUNvbnRlbnQpPVwicmVmcmVzaCgpXCIgI29yZ0VsIHN0eWxlPVwiZGlzcGxheTogbm9uZVwiPjxuZy1jb250ZW50IC8+PC9kaXY+XG48bmctdGVtcGxhdGUgI3Rvb2x0aXBUcGwgbGV0LWNvbj5cbiAgQGlmICh0b29sdGlwKSB7XG4gICAgPHNwYW5cbiAgICAgIG56LXRvb2x0aXBcbiAgICAgIFtuelRvb2x0aXBUaXRsZV09XCJ0aXRsZVRwbFwiXG4gICAgICBbbnpUb29sdGlwT3ZlcmxheVN0eWxlXT1cInsgJ292ZXJmbG93LXdyYXAnOiAnYnJlYWstd29yZCcsICd3b3JkLXdyYXAnOiAnYnJlYWstd29yZCcgfVwiXG4gICAgPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImNvblwiIC8+XG4gICAgICA8bmctdGVtcGxhdGUgI3RpdGxlVHBsPjxkaXYgW2lubmVySFRNTF09XCJvcmdIdG1sXCI+PC9kaXY+PC9uZy10ZW1wbGF0ZT5cbiAgICA8L3NwYW4+XG4gIH0gQGVsc2Uge1xuICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjb25cIiAvPlxuICB9XG48L25nLXRlbXBsYXRlPlxuQHN3aXRjaCAodHlwZSkge1xuICBAY2FzZSAoJ2RlZmF1bHQnKSB7XG4gICAgPHNwYW4gW25nQ2xhc3NdPVwiY2xzXCI+PC9zcGFuPlxuICB9XG4gIEBjYXNlICgnbGVuZ3RoJykge1xuICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJ0b29sdGlwVHBsXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBsZW5ndGhUcGwgfVwiIC8+XG4gICAgPG5nLXRlbXBsYXRlICNsZW5ndGhUcGw+e3sgdGV4dCB9fTwvbmctdGVtcGxhdGU+XG4gIH1cbiAgQGNhc2UgKCdsaW5lLWNsYW1wJykge1xuICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJ0b29sdGlwVHBsXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBsaW5lQ2xhbXBUcGwgfVwiIC8+XG4gICAgPG5nLXRlbXBsYXRlICNsaW5lQ2xhbXBUcGw+XG4gICAgICA8ZGl2IFtuZ0NsYXNzXT1cImNsc1wiIFtuZ1N0eWxlXT1cInsgJy13ZWJraXQtbGluZS1jbGFtcCc6IGxpbmVzLCAnLXdlYmtpdC1ib3gtb3JpZW50JzogJ3ZlcnRpY2FsJyB9XCI+PC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgfVxuICBAY2FzZSAoJ2xpbmUnKSB7XG4gICAgPGRpdiBbbmdDbGFzc109XCJjbHNcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJlbGxpcHNpc19faGFuZGxlXCI+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJ0b29sdGlwVHBsXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBsaW5lVHBsIH1cIiAvPlxuICAgICAgICA8bmctdGVtcGxhdGUgI2xpbmVUcGw+e3sgbGluc1dvcmQgfX08L25nLXRlbXBsYXRlPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZWxsaXBzaXNfX3NoYWRvd1wiICNzaGFkb3dPcmdFbCBbaW5uZXJIVE1MXT1cIm9yZ0h0bWxcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImVsbGlwc2lzX19zaGFkb3dcIiAjc2hhZG93VGV4dEVsPlxuICAgICAgICAgIDxzcGFuPnt7IHRleHQgfX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIH1cbn1cbiJdfQ==