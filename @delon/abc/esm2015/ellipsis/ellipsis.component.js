/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Inject, Input, NgZone, ViewChild, } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { InputBoolean, InputNumber } from '@delon/util';
import { take } from 'rxjs/operators';
export class EllipsisComponent {
    // #endregion
    /**
     * @param {?} el
     * @param {?} ngZone
     * @param {?} dom
     * @param {?} doc
     * @param {?} cdr
     */
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
        // #region fields
        this.tooltip = false;
        this.fullWidthRecognition = false;
        this.tail = '...';
    }
    /**
     * @param {?} str
     * @return {?}
     */
    getStrFullLength(str) {
        return str.split('').reduce((pre, cur) => {
            /** @type {?} */
            const charCode = cur.charCodeAt(0);
            if (charCode >= 0 && charCode <= 128) {
                return pre + 1;
            }
            return pre + 2;
        }, 0);
    }
    /**
     * @param {?} str
     * @param {?} maxLength
     * @return {?}
     */
    cutStrByFullLength(str, maxLength) {
        /** @type {?} */
        let showLength = 0;
        return str.split('').reduce((pre, cur) => {
            /** @type {?} */
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
    /**
     * @param {?} th
     * @param {?} m
     * @param {?} b
     * @param {?} e
     * @param {?} text
     * @param {?} shadowNode
     * @return {?}
     */
    bisection(th, m, b, e, text, shadowNode) {
        /** @type {?} */
        const suffix = this.tail;
        /** @type {?} */
        let mid = m;
        /** @type {?} */
        let end = e;
        /** @type {?} */
        let begin = b;
        shadowNode.innerHTML = text.substring(0, mid) + suffix;
        /** @type {?} */
        let sh = shadowNode.offsetHeight;
        if (sh <= th) {
            shadowNode.innerHTML = text.substring(0, mid + 1) + suffix;
            sh = shadowNode.offsetHeight;
            if (sh > th || mid === begin) {
                return mid;
            }
            begin = mid;
            if (end - begin === 1) {
                mid = begin + 1;
            }
            else {
                mid = Math.floor((end - begin) / 2) + begin;
            }
            return this.bisection(th, mid, begin, end, text, shadowNode);
        }
        if (mid - 1 < 0) {
            return mid;
        }
        shadowNode.innerHTML = text.substring(0, mid - 1) + suffix;
        sh = shadowNode.offsetHeight;
        if (sh <= th) {
            return mid - 1;
        }
        end = mid;
        mid = Math.floor((end - begin) / 2) + begin;
        return this.bisection(th, mid, begin, end, text, shadowNode);
    }
    /**
     * @return {?}
     */
    genType() {
        const { lines, length, isSupportLineClamp, cdr } = this;
        this.cls = {
            'ellipsis': true,
            'ellipsis__lines': lines && !isSupportLineClamp,
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
        cdr.detectChanges();
    }
    /**
     * @return {?}
     */
    gen() {
        const { type, lines, length, fullWidthRecognition, tail, orgEl, cdr } = this;
        if (type === 'length') {
            /** @type {?} */
            const el = (/** @type {?} */ (orgEl.nativeElement));
            if (el.children.length > 0) {
                throw new Error('Ellipsis content must be string.');
            }
            /** @type {?} */
            const text = el.textContent;
            /** @type {?} */
            const textLength = fullWidthRecognition ? this.getStrFullLength(text) : text.length;
            if (textLength <= length || length < 0) {
                this.text = text;
            }
            else {
                /** @type {?} */
                let displayText;
                if (length - tail.length <= 0) {
                    displayText = '';
                }
                else {
                    displayText = fullWidthRecognition ? this.cutStrByFullLength(text, length) : text.slice(0, length);
                }
                this.text = displayText + tail;
            }
            cdr.detectChanges();
        }
        else if (type === 'line') {
            const { shadowOrgEl, shadowTextEl } = this;
            /** @type {?} */
            const orgNode = (/** @type {?} */ (shadowOrgEl.nativeElement));
            /** @type {?} */
            const text = orgNode.innerText || orgNode.textContent;
            /** @type {?} */
            const lineHeight = parseInt(getComputedStyle(this.getEl('.ellipsis')).lineHeight, 10);
            /** @type {?} */
            const targetHeight = lines * lineHeight;
            this.getEl('.ellipsis__handle').style.height = `${targetHeight}px`;
            if (orgNode.offsetHeight <= targetHeight) {
                this.text = text;
                this.targetCount = text.length;
            }
            else {
                // bisection
                /** @type {?} */
                const len = text.length;
                /** @type {?} */
                const mid = Math.ceil(len / 2);
                /** @type {?} */
                const count = this.bisection(targetHeight, mid, 0, len, text, shadowTextEl.nativeElement.firstChild);
                this.text = text;
                this.targetCount = count;
            }
            cdr.detectChanges();
        }
    }
    /**
     * @param {?} cls
     * @return {?}
     */
    getEl(cls) {
        return this.el.nativeElement.querySelector(cls);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    executeOnStable(fn) {
        if (this.ngZone.isStable) {
            fn();
        }
        else {
            this.ngZone.onStable.asObservable().pipe(take(1)).subscribe(fn);
        }
    }
    /**
     * @return {?}
     */
    refresh() {
        this.genType();
        this.executeOnStable(() => {
            const { type, dom, orgEl, cdr } = this;
            /** @type {?} */
            const html = orgEl.nativeElement.innerHTML;
            this.orgHtml = dom.bypassSecurityTrustHtml(html);
            cdr.detectChanges();
            this.gen();
            if (type !== 'line') {
                /** @type {?} */
                const el = this.getEl('.ellipsis');
                if (el) {
                    el.innerHTML = html;
                }
            }
        });
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.inited = true;
        this.refresh();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this.inited) {
            this.refresh();
        }
    }
}
EllipsisComponent.decorators = [
    { type: Component, args: [{
                selector: 'ellipsis',
                template: "<div (cdkObserveContent)=\"refresh()\" #orgEl style=\"display: none;\"><ng-content></ng-content></div>\n<ng-template #tooltipTpl let-con>\n  <span *ngIf=\"tooltip; else con\" nz-tooltip [nzTitle]=\"titleTpl\" [nzOverlayStyle]=\"{ 'overflow-wrap': 'break-word', 'word-wrap': 'break-word' }\">\n    <ng-container *ngTemplateOutlet=\"con\"></ng-container>\n    <ng-template #titleTpl><div [innerHTML]=\"orgHtml\"></div></ng-template>\n  </span>\n</ng-template>\n<ng-container [ngSwitch]=\"type\">\n  <span *ngSwitchCase=\"'default'\" [ngClass]=\"cls\"></span>\n  <ng-container *ngSwitchCase=\"'length'\">\n    <ng-template [ngTemplateOutlet]=\"tooltipTpl\" [ngTemplateOutletContext]=\"{$implicit: lengthTpl}\"></ng-template>\n    <ng-template #lengthTpl>{{text}}</ng-template>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'line-clamp'\">\n    <ng-template [ngTemplateOutlet]=\"tooltipTpl\" [ngTemplateOutletContext]=\"{$implicit: lineClampTpl}\"></ng-template>\n    <ng-template #lineClampTpl>\n      <div [ngClass]=\"cls\" [ngStyle]=\"{'-webkit-line-clamp': lines, '-webkit-box-orient': 'vertical'}\"></div>\n    </ng-template>\n  </ng-container>\n  <div *ngSwitchCase=\"'line'\" [ngClass]=\"cls\">\n    <div class=\"ellipsis__handle\">\n      <ng-template [ngTemplateOutlet]=\"tooltipTpl\" [ngTemplateOutletContext]=\"{$implicit: lineTpl}\"></ng-template>\n      <ng-template #lineTpl>\n        {{ (targetCount > 0 ? text.substring(0, targetCount) : '') + (targetCount > 0 && targetCount < text.length ? tail : '') }}\n      </ng-template>\n      <div class=\"ellipsis__shadow\" #shadowOrgEl [innerHTML]=\"orgHtml\"></div>\n      <div class=\"ellipsis__shadow\" #shadowTextEl><span>{{text}}</span></div>\n    </div>\n  </div>\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
EllipsisComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone },
    { type: DomSanitizer },
    { type: Document, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: ChangeDetectorRef }
];
EllipsisComponent.propDecorators = {
    orgEl: [{ type: ViewChild, args: ['orgEl',] }],
    shadowOrgEl: [{ type: ViewChild, args: ['shadowOrgEl',] }],
    shadowTextEl: [{ type: ViewChild, args: ['shadowTextEl',] }],
    tooltip: [{ type: Input }],
    length: [{ type: Input }],
    lines: [{ type: Input }],
    fullWidthRecognition: [{ type: Input }],
    tail: [{ type: Input }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], EllipsisComponent.prototype, "tooltip", void 0);
tslib_1.__decorate([
    InputNumber(null),
    tslib_1.__metadata("design:type", Number)
], EllipsisComponent.prototype, "length", void 0);
tslib_1.__decorate([
    InputNumber(null),
    tslib_1.__metadata("design:type", Number)
], EllipsisComponent.prototype, "lines", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], EllipsisComponent.prototype, "fullWidthRecognition", void 0);
if (false) {
    /** @type {?} */
    EllipsisComponent.prototype.isSupportLineClamp;
    /** @type {?} */
    EllipsisComponent.prototype.orgEl;
    /** @type {?} */
    EllipsisComponent.prototype.shadowOrgEl;
    /** @type {?} */
    EllipsisComponent.prototype.shadowTextEl;
    /** @type {?} */
    EllipsisComponent.prototype.inited;
    /** @type {?} */
    EllipsisComponent.prototype.orgHtml;
    /** @type {?} */
    EllipsisComponent.prototype.type;
    /** @type {?} */
    EllipsisComponent.prototype.cls;
    /** @type {?} */
    EllipsisComponent.prototype.text;
    /** @type {?} */
    EllipsisComponent.prototype.targetCount;
    /** @type {?} */
    EllipsisComponent.prototype.tooltip;
    /** @type {?} */
    EllipsisComponent.prototype.length;
    /** @type {?} */
    EllipsisComponent.prototype.lines;
    /** @type {?} */
    EllipsisComponent.prototype.fullWidthRecognition;
    /** @type {?} */
    EllipsisComponent.prototype.tail;
    /** @type {?} */
    EllipsisComponent.prototype.el;
    /** @type {?} */
    EllipsisComponent.prototype.ngZone;
    /** @type {?} */
    EllipsisComponent.prototype.dom;
    /** @type {?} */
    EllipsisComponent.prototype.doc;
    /** @type {?} */
    EllipsisComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxsaXBzaXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9lbGxpcHNpcy8iLCJzb3VyY2VzIjpbImVsbGlwc2lzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLE1BQU0sRUFDTixLQUFLLEVBQ0wsTUFBTSxFQUVOLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFZLE1BQU0sMkJBQTJCLENBQUM7QUFDbkUsT0FBTyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDeEQsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBT3RDLE1BQU0sT0FBTyxpQkFBaUI7Ozs7Ozs7OztJQXdCNUIsWUFBb0IsRUFBYyxFQUFVLE1BQWMsRUFBVSxHQUFpQixFQUE0QixHQUFhLEVBQVUsR0FBc0I7UUFBMUksT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFjO1FBQTRCLFFBQUcsR0FBSCxHQUFHLENBQVU7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjs7UUFyQnRKLHVCQUFrQixHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLFNBQVMsQ0FBQztRQUkxRSxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBRXZCLFNBQUksR0FBRyxTQUFTLENBQUM7UUFDakIsUUFBRyxHQUFHLEVBQUUsQ0FBQztRQUNULFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVixnQkFBVyxHQUFHLENBQUMsQ0FBQzs7UUFJUyxZQUFPLEdBQUcsS0FB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Z0JBQ3BCLGt1REFBd0M7Z0JBQ3hDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7O1lBZkMsVUFBVTtZQUdWLE1BQU07WUFJQyxZQUFZO1lBaUNtRyxRQUFRLHVCQUF0QyxNQUFNLFNBQUMsUUFBUTtZQTFDdkcsaUJBQWlCOzs7b0JBc0JoQixTQUFTLFNBQUMsT0FBTzswQkFDakIsU0FBUyxTQUFDLGFBQWE7MkJBQ3ZCLFNBQVMsU0FBQyxjQUFjO3NCQVV4QixLQUFLO3FCQUNMLEtBQUs7b0JBQ0wsS0FBSzttQ0FDTCxLQUFLO21CQUNMLEtBQUs7O0FBSm1CO0lBQWYsWUFBWSxFQUFFOztrREFBaUI7QUFDYjtJQUFsQixXQUFXLENBQUMsSUFBSSxDQUFDOztpREFBZ0I7QUFDZjtJQUFsQixXQUFXLENBQUMsSUFBSSxDQUFDOztnREFBZTtBQUNqQjtJQUFmLFlBQVksRUFBRTs7K0RBQThCOzs7SUFoQnRELCtDQUFrRjs7SUFDbEYsa0NBQThDOztJQUM5Qyx3Q0FBMEQ7O0lBQzFELHlDQUE0RDs7SUFDNUQsbUNBQXVCOztJQUN2QixvQ0FBa0I7O0lBQ2xCLGlDQUFpQjs7SUFDakIsZ0NBQVM7O0lBQ1QsaUNBQVU7O0lBQ1Ysd0NBQWdCOztJQUloQixvQ0FBeUM7O0lBQ3pDLG1DQUEyQzs7SUFDM0Msa0NBQTBDOztJQUMxQyxpREFBc0Q7O0lBQ3RELGlDQUFzQjs7SUFJViwrQkFBc0I7O0lBQUUsbUNBQXNCOztJQUFFLGdDQUF5Qjs7SUFBRSxnQ0FBdUM7O0lBQUUsZ0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25DaGFuZ2VzLFxuICBWaWV3Q2hpbGQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2VsbGlwc2lzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2VsbGlwc2lzLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEVsbGlwc2lzQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tc3RyaW5nLWxpdGVyYWxcbiAgcHJpdmF0ZSBpc1N1cHBvcnRMaW5lQ2xhbXAgPSB0aGlzLmRvYy5ib2R5LnN0eWxlWyd3ZWJraXRMaW5lQ2xhbXAnXSAhPT0gdW5kZWZpbmVkO1xuICBAVmlld0NoaWxkKCdvcmdFbCcpIHByaXZhdGUgb3JnRWw6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3NoYWRvd09yZ0VsJykgcHJpdmF0ZSBzaGFkb3dPcmdFbDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnc2hhZG93VGV4dEVsJykgcHJpdmF0ZSBzaGFkb3dUZXh0RWw6IEVsZW1lbnRSZWY7XG4gIHByaXZhdGUgaW5pdGVkID0gZmFsc2U7XG4gIG9yZ0h0bWw6IFNhZmVIdG1sO1xuICB0eXBlID0gJ2RlZmF1bHQnO1xuICBjbHMgPSB7fTtcbiAgdGV4dCA9ICcnO1xuICB0YXJnZXRDb3VudCA9IDA7XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgdG9vbHRpcCA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIobnVsbCkgbGVuZ3RoOiBudW1iZXI7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcihudWxsKSBsaW5lczogbnVtYmVyO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZnVsbFdpZHRoUmVjb2duaXRpb24gPSBmYWxzZTtcbiAgQElucHV0KCkgdGFpbCA9ICcuLi4nO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIG5nWm9uZTogTmdab25lLCBwcml2YXRlIGRvbTogRG9tU2FuaXRpemVyLCBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogRG9jdW1lbnQsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTdHJGdWxsTGVuZ3RoKHN0cjogc3RyaW5nKTogbnVtYmVyIHtcbiAgICByZXR1cm4gc3RyLnNwbGl0KCcnKS5yZWR1Y2UoKHByZSwgY3VyKSA9PiB7XG4gICAgICBjb25zdCBjaGFyQ29kZSA9IGN1ci5jaGFyQ29kZUF0KDApO1xuICAgICAgaWYgKGNoYXJDb2RlID49IDAgJiYgY2hhckNvZGUgPD0gMTI4KSB7XG4gICAgICAgIHJldHVybiBwcmUgKyAxO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHByZSArIDI7XG4gICAgfSwgMCk7XG4gIH1cblxuICBwcml2YXRlIGN1dFN0ckJ5RnVsbExlbmd0aChzdHI6IHN0cmluZywgbWF4TGVuZ3RoOiBudW1iZXIpIHtcbiAgICBsZXQgc2hvd0xlbmd0aCA9IDA7XG4gICAgcmV0dXJuIHN0ci5zcGxpdCgnJykucmVkdWNlKChwcmUsIGN1cikgPT4ge1xuICAgICAgY29uc3QgY2hhckNvZGUgPSBjdXIuY2hhckNvZGVBdCgwKTtcbiAgICAgIGlmIChjaGFyQ29kZSA+PSAwICYmIGNoYXJDb2RlIDw9IDEyOCkge1xuICAgICAgICBzaG93TGVuZ3RoICs9IDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaG93TGVuZ3RoICs9IDI7XG4gICAgICB9XG4gICAgICBpZiAoc2hvd0xlbmd0aCA8PSBtYXhMZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHByZSArIGN1cjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwcmU7XG4gICAgfSwgJycpO1xuICB9XG5cbiAgcHJpdmF0ZSBiaXNlY3Rpb24odGg6IG51bWJlciwgbTogbnVtYmVyLCBiOiBudW1iZXIsIGU6IG51bWJlciwgdGV4dDogc3RyaW5nLCBzaGFkb3dOb2RlOiBIVE1MRWxlbWVudCk6IG51bWJlciB7XG4gICAgY29uc3Qgc3VmZml4ID0gdGhpcy50YWlsO1xuICAgIGxldCBtaWQgPSBtO1xuICAgIGxldCBlbmQgPSBlO1xuICAgIGxldCBiZWdpbiA9IGI7XG4gICAgc2hhZG93Tm9kZS5pbm5lckhUTUwgPSB0ZXh0LnN1YnN0cmluZygwLCBtaWQpICsgc3VmZml4O1xuICAgIGxldCBzaCA9IHNoYWRvd05vZGUub2Zmc2V0SGVpZ2h0O1xuXG4gICAgaWYgKHNoIDw9IHRoKSB7XG4gICAgICBzaGFkb3dOb2RlLmlubmVySFRNTCA9IHRleHQuc3Vic3RyaW5nKDAsIG1pZCArIDEpICsgc3VmZml4O1xuICAgICAgc2ggPSBzaGFkb3dOb2RlLm9mZnNldEhlaWdodDtcbiAgICAgIGlmIChzaCA+IHRoIHx8IG1pZCA9PT0gYmVnaW4pIHtcbiAgICAgICAgcmV0dXJuIG1pZDtcbiAgICAgIH1cbiAgICAgIGJlZ2luID0gbWlkO1xuICAgICAgaWYgKGVuZCAtIGJlZ2luID09PSAxKSB7XG4gICAgICAgIG1pZCA9IGJlZ2luICsgMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1pZCA9IE1hdGguZmxvb3IoKGVuZCAtIGJlZ2luKSAvIDIpICsgYmVnaW47XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5iaXNlY3Rpb24odGgsIG1pZCwgYmVnaW4sIGVuZCwgdGV4dCwgc2hhZG93Tm9kZSk7XG4gICAgfVxuICAgIGlmIChtaWQgLSAxIDwgMCkge1xuICAgICAgcmV0dXJuIG1pZDtcbiAgICB9XG4gICAgc2hhZG93Tm9kZS5pbm5lckhUTUwgPSB0ZXh0LnN1YnN0cmluZygwLCBtaWQgLSAxKSArIHN1ZmZpeDtcbiAgICBzaCA9IHNoYWRvd05vZGUub2Zmc2V0SGVpZ2h0O1xuICAgIGlmIChzaCA8PSB0aCkge1xuICAgICAgcmV0dXJuIG1pZCAtIDE7XG4gICAgfVxuICAgIGVuZCA9IG1pZDtcbiAgICBtaWQgPSBNYXRoLmZsb29yKChlbmQgLSBiZWdpbikgLyAyKSArIGJlZ2luO1xuICAgIHJldHVybiB0aGlzLmJpc2VjdGlvbih0aCwgbWlkLCBiZWdpbiwgZW5kLCB0ZXh0LCBzaGFkb3dOb2RlKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuVHlwZSgpIHtcbiAgICBjb25zdCB7IGxpbmVzLCBsZW5ndGgsIGlzU3VwcG9ydExpbmVDbGFtcCwgY2RyIH0gPSB0aGlzO1xuICAgIHRoaXMuY2xzID0ge1xuICAgICAgJ2VsbGlwc2lzJzogdHJ1ZSxcbiAgICAgICdlbGxpcHNpc19fbGluZXMnOiBsaW5lcyAmJiAhaXNTdXBwb3J0TGluZUNsYW1wLFxuICAgICAgJ2VsbGlwc2lzX19saW5lLWNsYW1wJzogbGluZXMgJiYgaXNTdXBwb3J0TGluZUNsYW1wLFxuICAgIH07XG4gICAgaWYgKCFsaW5lcyAmJiAhbGVuZ3RoKSB7XG4gICAgICB0aGlzLnR5cGUgPSAnZGVmYXVsdCc7XG4gICAgfSBlbHNlIGlmICghbGluZXMpIHtcbiAgICAgIHRoaXMudHlwZSA9ICdsZW5ndGgnO1xuICAgIH0gZWxzZSBpZiAoaXNTdXBwb3J0TGluZUNsYW1wKSB7XG4gICAgICB0aGlzLnR5cGUgPSAnbGluZS1jbGFtcCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudHlwZSA9ICdsaW5lJztcbiAgICB9XG4gICAgY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuKCkge1xuICAgIGNvbnN0IHsgdHlwZSwgbGluZXMsIGxlbmd0aCwgZnVsbFdpZHRoUmVjb2duaXRpb24sIHRhaWwsIG9yZ0VsLCBjZHIgfSA9IHRoaXM7XG4gICAgaWYgKHR5cGUgPT09ICdsZW5ndGgnKSB7XG4gICAgICBjb25zdCBlbCA9IG9yZ0VsLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBpZiAoZWwuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0VsbGlwc2lzIGNvbnRlbnQgbXVzdCBiZSBzdHJpbmcuJyk7XG4gICAgICB9XG4gICAgICBjb25zdCB0ZXh0ID0gZWwudGV4dENvbnRlbnQ7XG4gICAgICBjb25zdCB0ZXh0TGVuZ3RoID0gZnVsbFdpZHRoUmVjb2duaXRpb24gPyB0aGlzLmdldFN0ckZ1bGxMZW5ndGgodGV4dCkgOiB0ZXh0Lmxlbmd0aDtcbiAgICAgIGlmICh0ZXh0TGVuZ3RoIDw9IGxlbmd0aCB8fCBsZW5ndGggPCAwKSB7XG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgZGlzcGxheVRleHQ6IHN0cmluZztcbiAgICAgICAgaWYgKGxlbmd0aCAtIHRhaWwubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICBkaXNwbGF5VGV4dCA9ICcnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRpc3BsYXlUZXh0ID0gZnVsbFdpZHRoUmVjb2duaXRpb24gPyB0aGlzLmN1dFN0ckJ5RnVsbExlbmd0aCh0ZXh0LCBsZW5ndGgpIDogdGV4dC5zbGljZSgwLCBsZW5ndGgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudGV4dCA9IGRpc3BsYXlUZXh0ICsgdGFpbDtcbiAgICAgIH1cbiAgICAgIGNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnbGluZScpIHtcbiAgICAgIGNvbnN0IHsgc2hhZG93T3JnRWwsIHNoYWRvd1RleHRFbCB9ID0gdGhpcztcbiAgICAgIGNvbnN0IG9yZ05vZGUgPSBzaGFkb3dPcmdFbC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgICAgY29uc3QgdGV4dCA9IG9yZ05vZGUuaW5uZXJUZXh0IHx8IG9yZ05vZGUudGV4dENvbnRlbnQ7XG4gICAgICBjb25zdCBsaW5lSGVpZ2h0ID0gcGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmdldEVsKCcuZWxsaXBzaXMnKSkubGluZUhlaWdodCwgMTApO1xuICAgICAgY29uc3QgdGFyZ2V0SGVpZ2h0ID0gbGluZXMgKiBsaW5lSGVpZ2h0O1xuICAgICAgdGhpcy5nZXRFbCgnLmVsbGlwc2lzX19oYW5kbGUnKS5zdHlsZS5oZWlnaHQgPSBgJHt0YXJnZXRIZWlnaHR9cHhgO1xuXG4gICAgICBpZiAob3JnTm9kZS5vZmZzZXRIZWlnaHQgPD0gdGFyZ2V0SGVpZ2h0KSB7XG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgICAgIHRoaXMudGFyZ2V0Q291bnQgPSB0ZXh0Lmxlbmd0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGJpc2VjdGlvblxuICAgICAgICBjb25zdCBsZW4gPSB0ZXh0Lmxlbmd0aDtcbiAgICAgICAgY29uc3QgbWlkID0gTWF0aC5jZWlsKGxlbiAvIDIpO1xuXG4gICAgICAgIGNvbnN0IGNvdW50ID0gdGhpcy5iaXNlY3Rpb24odGFyZ2V0SGVpZ2h0LCBtaWQsIDAsIGxlbiwgdGV4dCwgc2hhZG93VGV4dEVsLm5hdGl2ZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgICAgIHRoaXMudGFyZ2V0Q291bnQgPSBjb3VudDtcbiAgICAgIH1cbiAgICAgIGNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRFbChjbHM6IHN0cmluZyk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoY2xzKTtcbiAgfVxuXG4gIHByaXZhdGUgZXhlY3V0ZU9uU3RhYmxlKGZuOiAoKSA9PiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uZ1pvbmUuaXNTdGFibGUpIHtcbiAgICAgIGZuKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubmdab25lLm9uU3RhYmxlLmFzT2JzZXJ2YWJsZSgpLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKGZuKTtcbiAgICB9XG4gIH1cblxuICByZWZyZXNoKCk6IHZvaWQge1xuICAgIHRoaXMuZ2VuVHlwZSgpO1xuICAgIHRoaXMuZXhlY3V0ZU9uU3RhYmxlKCgpID0+IHtcbiAgICAgIGNvbnN0IHsgdHlwZSwgZG9tLCBvcmdFbCwgY2RyIH0gPSB0aGlzO1xuICAgICAgY29uc3QgaHRtbCA9IG9yZ0VsLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MO1xuICAgICAgdGhpcy5vcmdIdG1sID0gZG9tLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKGh0bWwpO1xuICAgICAgY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIHRoaXMuZ2VuKCk7XG4gICAgICBpZiAodHlwZSAhPT0gJ2xpbmUnKSB7XG4gICAgICAgIGNvbnN0IGVsID0gdGhpcy5nZXRFbCgnLmVsbGlwc2lzJyk7XG4gICAgICAgIGlmIChlbCkge1xuICAgICAgICAgIGVsLmlubmVySFRNTCA9IGh0bWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmluaXRlZCA9IHRydWU7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pbml0ZWQpIHtcbiAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgIH1cbiAgfVxufVxuIl19