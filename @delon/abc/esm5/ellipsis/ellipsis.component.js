/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Inject, Input, NgZone, ViewChild, ViewEncapsulation, } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { InputBoolean, InputNumber } from '@delon/util';
import { take } from 'rxjs/operators';
var EllipsisComponent = /** @class */ (function () {
    function EllipsisComponent(el, ngZone, dom, doc, cdr) {
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
    Object.defineProperty(EllipsisComponent.prototype, "linsWord", {
        // #endregion
        get: 
        // #endregion
        /**
         * @return {?}
         */
        function () {
            var _a = this, targetCount = _a.targetCount, text = _a.text, tail = _a.tail;
            return (targetCount > 0 ? text.substring(0, targetCount) : '') + (targetCount > 0 && targetCount < text.length ? tail : '');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @param {?} str
     * @return {?}
     */
    EllipsisComponent.prototype.getStrFullLength = /**
     * @private
     * @param {?} str
     * @return {?}
     */
    function (str) {
        return str.split('').reduce((/**
         * @param {?} pre
         * @param {?} cur
         * @return {?}
         */
        function (pre, cur) {
            /** @type {?} */
            var charCode = cur.charCodeAt(0);
            if (charCode >= 0 && charCode <= 128) {
                return pre + 1;
            }
            return pre + 2;
        }), 0);
    };
    /**
     * @private
     * @param {?} str
     * @param {?} maxLength
     * @return {?}
     */
    EllipsisComponent.prototype.cutStrByFullLength = /**
     * @private
     * @param {?} str
     * @param {?} maxLength
     * @return {?}
     */
    function (str, maxLength) {
        /** @type {?} */
        var showLength = 0;
        return str.split('').reduce((/**
         * @param {?} pre
         * @param {?} cur
         * @return {?}
         */
        function (pre, cur) {
            /** @type {?} */
            var charCode = cur.charCodeAt(0);
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
        }), '');
    };
    /**
     * @private
     * @param {?} th
     * @param {?} m
     * @param {?} b
     * @param {?} e
     * @param {?} text
     * @param {?} shadowNode
     * @return {?}
     */
    EllipsisComponent.prototype.bisection = /**
     * @private
     * @param {?} th
     * @param {?} m
     * @param {?} b
     * @param {?} e
     * @param {?} text
     * @param {?} shadowNode
     * @return {?}
     */
    function (th, m, b, e, text, shadowNode) {
        /** @type {?} */
        var suffix = this.tail;
        /** @type {?} */
        var mid = m;
        /** @type {?} */
        var end = e;
        /** @type {?} */
        var begin = b;
        shadowNode.innerHTML = text.substring(0, mid) + suffix;
        /** @type {?} */
        var sh = shadowNode.offsetHeight;
        if (sh <= th) {
            shadowNode.innerHTML = text.substring(0, mid + 1) + suffix;
            sh = shadowNode.offsetHeight;
            if (sh > th || mid === begin) {
                return mid;
            }
            begin = mid;
            mid = end - begin === 1 ? begin + 1 : Math.floor((end - begin) / 2) + begin;
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
    };
    /**
     * @private
     * @return {?}
     */
    EllipsisComponent.prototype.genType = /**
     * @private
     * @return {?}
     */
    function () {
        var _a = this, lines = _a.lines, length = _a.length, isSupportLineClamp = _a.isSupportLineClamp;
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
    };
    /**
     * @private
     * @return {?}
     */
    EllipsisComponent.prototype.gen = /**
     * @private
     * @return {?}
     */
    function () {
        var _a = this, type = _a.type, lines = _a.lines, length = _a.length, fullWidthRecognition = _a.fullWidthRecognition, tail = _a.tail, orgEl = _a.orgEl, cdr = _a.cdr;
        if (type === 'length') {
            /** @type {?} */
            var el = (/** @type {?} */ (orgEl.nativeElement));
            if (el.children.length > 0) {
                throw new Error('Ellipsis content must be string.');
            }
            /** @type {?} */
            var lengthText = (/** @type {?} */ (el.textContent));
            /** @type {?} */
            var textLength = fullWidthRecognition ? this.getStrFullLength(lengthText) : lengthText.length;
            if (textLength <= length || length < 0) {
                this.text = lengthText;
            }
            else {
                /** @type {?} */
                var displayText = void 0;
                if (length - tail.length <= 0) {
                    displayText = '';
                }
                else {
                    displayText = fullWidthRecognition ? this.cutStrByFullLength(lengthText, length) : lengthText.slice(0, length);
                }
                this.text = displayText + tail;
            }
            cdr.detectChanges();
        }
        else if (type === 'line') {
            var _b = this, shadowOrgEl = _b.shadowOrgEl, shadowTextEl = _b.shadowTextEl;
            /** @type {?} */
            var orgNode = (/** @type {?} */ (shadowOrgEl.nativeElement));
            /** @type {?} */
            var lineText = orgNode.innerText || (/** @type {?} */ (orgNode.textContent));
            /** @type {?} */
            var lineHeight = parseInt((/** @type {?} */ (getComputedStyle(this.getEl('.ellipsis')).lineHeight)), 10);
            /** @type {?} */
            var targetHeight = lines * lineHeight;
            this.getEl('.ellipsis__handle').style.height = targetHeight + "px";
            if (orgNode.offsetHeight <= targetHeight) {
                this.text = lineText;
                this.targetCount = lineText.length;
            }
            else {
                // bisection
                /** @type {?} */
                var len = lineText.length;
                /** @type {?} */
                var mid = Math.ceil(len / 2);
                /** @type {?} */
                var count = this.bisection(targetHeight, mid, 0, len, lineText, shadowTextEl.nativeElement.firstChild);
                this.text = lineText;
                this.targetCount = count;
                console.log(lineHeight, targetHeight, len, mid, count);
            }
            cdr.detectChanges();
        }
    };
    /**
     * @private
     * @param {?} cls
     * @return {?}
     */
    EllipsisComponent.prototype.getEl = /**
     * @private
     * @param {?} cls
     * @return {?}
     */
    function (cls) {
        return this.el.nativeElement.querySelector(cls);
    };
    /**
     * @private
     * @param {?} fn
     * @return {?}
     */
    EllipsisComponent.prototype.executeOnStable = /**
     * @private
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        if (this.ngZone.isStable) {
            fn();
        }
        else {
            this.ngZone.onStable
                .asObservable()
                .pipe(take(1))
                .subscribe(fn);
        }
    };
    /**
     * @return {?}
     */
    EllipsisComponent.prototype.refresh = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.genType();
        var _a = this, type = _a.type, dom = _a.dom, orgEl = _a.orgEl, cdr = _a.cdr;
        /** @type {?} */
        var html = orgEl.nativeElement.innerHTML;
        this.orgHtml = dom.bypassSecurityTrustHtml(html);
        cdr.detectChanges();
        this.executeOnStable((/**
         * @return {?}
         */
        function () {
            _this.gen();
            if (type !== 'line') {
                /** @type {?} */
                var el = _this.getEl('.ellipsis');
                if (el) {
                    el.innerHTML = html;
                }
            }
        }));
    };
    /**
     * @return {?}
     */
    EllipsisComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.inited = true;
        this.refresh();
    };
    /**
     * @return {?}
     */
    EllipsisComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (this.inited) {
            this.refresh();
        }
    };
    EllipsisComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ellipsis',
                    exportAs: 'ellipsis',
                    template: "<div (cdkObserveContent)=\"refresh()\" #orgEl style=\"display: none;\"><ng-content></ng-content></div>\n<ng-template #tooltipTpl let-con>\n  <span *ngIf=\"tooltip; else con\" nz-tooltip [nzTitle]=\"titleTpl\" [nzOverlayStyle]=\"{ 'overflow-wrap': 'break-word', 'word-wrap': 'break-word' }\">\n    <ng-container *ngTemplateOutlet=\"con\"></ng-container>\n    <ng-template #titleTpl><div [innerHTML]=\"orgHtml\"></div></ng-template>\n  </span>\n</ng-template>\n<ng-container [ngSwitch]=\"type\">\n  <span *ngSwitchCase=\"'default'\" [ngClass]=\"cls\"></span>\n  <ng-container *ngSwitchCase=\"'length'\">\n    <ng-template [ngTemplateOutlet]=\"tooltipTpl\" [ngTemplateOutletContext]=\"{$implicit: lengthTpl}\"></ng-template>\n    <ng-template #lengthTpl>{{text}}</ng-template>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'line-clamp'\">\n    <ng-template [ngTemplateOutlet]=\"tooltipTpl\" [ngTemplateOutletContext]=\"{$implicit: lineClampTpl}\"></ng-template>\n    <ng-template #lineClampTpl>\n      <div [ngClass]=\"cls\" [ngStyle]=\"{'-webkit-line-clamp': lines, '-webkit-box-orient': 'vertical'}\"></div>\n    </ng-template>\n  </ng-container>\n  <div *ngSwitchCase=\"'line'\" [ngClass]=\"cls\">\n    <div class=\"ellipsis__handle\">\n      <ng-template [ngTemplateOutlet]=\"tooltipTpl\" [ngTemplateOutletContext]=\"{$implicit: lineTpl}\"></ng-template>\n      <ng-template #lineTpl>{{ linsWord }}</ng-template>\n      <div class=\"ellipsis__shadow\" #shadowOrgEl [innerHTML]=\"orgHtml\"></div>\n      <div class=\"ellipsis__shadow\" #shadowTextEl><span>{{text}}</span></div>\n    </div>\n  </div>\n</ng-container>",
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    EllipsisComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NgZone },
        { type: DomSanitizer },
        { type: Document, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: ChangeDetectorRef }
    ]; };
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
    return EllipsisComponent;
}());
export { EllipsisComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    EllipsisComponent.prototype.isSupportLineClamp;
    /**
     * @type {?}
     * @private
     */
    EllipsisComponent.prototype.orgEl;
    /**
     * @type {?}
     * @private
     */
    EllipsisComponent.prototype.shadowOrgEl;
    /**
     * @type {?}
     * @private
     */
    EllipsisComponent.prototype.shadowTextEl;
    /**
     * @type {?}
     * @private
     */
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
    /**
     * @type {?}
     * @private
     */
    EllipsisComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    EllipsisComponent.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    EllipsisComponent.prototype.dom;
    /**
     * @type {?}
     * @private
     */
    EllipsisComponent.prototype.doc;
    /**
     * @type {?}
     * @private
     */
    EllipsisComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxsaXBzaXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9lbGxpcHNpcy8iLCJzb3VyY2VzIjpbImVsbGlwc2lzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLE1BQU0sRUFDTixLQUFLLEVBQ0wsTUFBTSxFQUVOLFNBQVMsRUFDVCxpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBWSxNQUFNLDJCQUEyQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0QztJQW9DRSwyQkFDVSxFQUFjLEVBQ2QsTUFBYyxFQUNkLEdBQWlCLEVBQ0MsR0FBYSxFQUMvQixHQUFzQjtRQUp0QixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2QsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFFBQUcsR0FBSCxHQUFHLENBQWM7UUFDQyxRQUFHLEdBQUgsR0FBRyxDQUFVO1FBQy9CLFFBQUcsR0FBSCxHQUFHLENBQW1COztRQS9CeEIsdUJBQWtCLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEtBQUssU0FBUyxDQUFDO1FBSTFFLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFFdkIsU0FBSSxHQUFHLFNBQVMsQ0FBQztRQUNqQixRQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ1QsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLGdCQUFXLEdBQUcsQ0FBQyxDQUFDOztRQUlTLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFHaEIs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WUFBWSxFQUFFOztzREFBaUI7SUFDYjtRQUFsQixXQUFXLENBQUMsSUFBSSxDQUFDOztxREFBZ0I7SUFDZjtRQUFsQixXQUFXLENBQUMsSUFBSSxDQUFDOztvREFBZTtJQUNqQjtRQUFmLFlBQVksRUFBRTs7bUVBQThCO0lBcUx4RCx3QkFBQztDQUFBLEFBL01ELElBK01DO1NBdk1ZLGlCQUFpQjs7Ozs7O0lBRTVCLCtDQUFrRjs7Ozs7SUFDbEYsa0NBQWlFOzs7OztJQUNqRSx3Q0FBNkU7Ozs7O0lBQzdFLHlDQUErRTs7Ozs7SUFDL0UsbUNBQXVCOztJQUN2QixvQ0FBa0I7O0lBQ2xCLGlDQUFpQjs7SUFDakIsZ0NBQVM7O0lBQ1QsaUNBQVU7O0lBQ1Ysd0NBQWdCOztJQUloQixvQ0FBeUM7O0lBQ3pDLG1DQUEyQzs7SUFDM0Msa0NBQTBDOztJQUMxQyxpREFBc0Q7O0lBQ3RELGlDQUFzQjs7Ozs7SUFVcEIsK0JBQXNCOzs7OztJQUN0QixtQ0FBc0I7Ozs7O0lBQ3RCLGdDQUF5Qjs7Ozs7SUFDekIsZ0NBQXVDOzs7OztJQUN2QyxnQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2VsbGlwc2lzJyxcbiAgZXhwb3J0QXM6ICdlbGxpcHNpcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9lbGxpcHNpcy5jb21wb25lbnQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgRWxsaXBzaXNDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tc3RyaW5nLWxpdGVyYWxcbiAgcHJpdmF0ZSBpc1N1cHBvcnRMaW5lQ2xhbXAgPSB0aGlzLmRvYy5ib2R5LnN0eWxlWyd3ZWJraXRMaW5lQ2xhbXAnXSAhPT0gdW5kZWZpbmVkO1xuICBAVmlld0NoaWxkKCdvcmdFbCcsIHsgc3RhdGljOiBmYWxzZSB9KSBwcml2YXRlIG9yZ0VsOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdzaGFkb3dPcmdFbCcsIHsgc3RhdGljOiBmYWxzZSB9KSBwcml2YXRlIHNoYWRvd09yZ0VsOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdzaGFkb3dUZXh0RWwnLCB7IHN0YXRpYzogZmFsc2UgfSkgcHJpdmF0ZSBzaGFkb3dUZXh0RWw6IEVsZW1lbnRSZWY7XG4gIHByaXZhdGUgaW5pdGVkID0gZmFsc2U7XG4gIG9yZ0h0bWw6IFNhZmVIdG1sO1xuICB0eXBlID0gJ2RlZmF1bHQnO1xuICBjbHMgPSB7fTtcbiAgdGV4dCA9ICcnO1xuICB0YXJnZXRDb3VudCA9IDA7XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgdG9vbHRpcCA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIobnVsbCkgbGVuZ3RoOiBudW1iZXI7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcihudWxsKSBsaW5lczogbnVtYmVyO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZnVsbFdpZHRoUmVjb2duaXRpb24gPSBmYWxzZTtcbiAgQElucHV0KCkgdGFpbCA9ICcuLi4nO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBnZXQgbGluc1dvcmQoKTogc3RyaW5nIHtcbiAgICBjb25zdCB7IHRhcmdldENvdW50LCB0ZXh0LCB0YWlsIH0gPSB0aGlzO1xuICAgIHJldHVybiAodGFyZ2V0Q291bnQgPiAwID8gdGV4dC5zdWJzdHJpbmcoMCwgdGFyZ2V0Q291bnQpIDogJycpICsgKHRhcmdldENvdW50ID4gMCAmJiB0YXJnZXRDb3VudCA8IHRleHQubGVuZ3RoID8gdGFpbCA6ICcnKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIGRvbTogRG9tU2FuaXRpemVyLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBEb2N1bWVudCxcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICkge31cblxuICBwcml2YXRlIGdldFN0ckZ1bGxMZW5ndGgoc3RyOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIHJldHVybiBzdHIuc3BsaXQoJycpLnJlZHVjZSgocHJlLCBjdXIpID0+IHtcbiAgICAgIGNvbnN0IGNoYXJDb2RlID0gY3VyLmNoYXJDb2RlQXQoMCk7XG4gICAgICBpZiAoY2hhckNvZGUgPj0gMCAmJiBjaGFyQ29kZSA8PSAxMjgpIHtcbiAgICAgICAgcmV0dXJuIHByZSArIDE7XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJlICsgMjtcbiAgICB9LCAwKTtcbiAgfVxuXG4gIHByaXZhdGUgY3V0U3RyQnlGdWxsTGVuZ3RoKHN0cjogc3RyaW5nLCBtYXhMZW5ndGg6IG51bWJlcikge1xuICAgIGxldCBzaG93TGVuZ3RoID0gMDtcbiAgICByZXR1cm4gc3RyLnNwbGl0KCcnKS5yZWR1Y2UoKHByZSwgY3VyKSA9PiB7XG4gICAgICBjb25zdCBjaGFyQ29kZSA9IGN1ci5jaGFyQ29kZUF0KDApO1xuICAgICAgaWYgKGNoYXJDb2RlID49IDAgJiYgY2hhckNvZGUgPD0gMTI4KSB7XG4gICAgICAgIHNob3dMZW5ndGggKz0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNob3dMZW5ndGggKz0gMjtcbiAgICAgIH1cbiAgICAgIGlmIChzaG93TGVuZ3RoIDw9IG1heExlbmd0aCkge1xuICAgICAgICByZXR1cm4gcHJlICsgY3VyO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHByZTtcbiAgICB9LCAnJyk7XG4gIH1cblxuICBwcml2YXRlIGJpc2VjdGlvbih0aDogbnVtYmVyLCBtOiBudW1iZXIsIGI6IG51bWJlciwgZTogbnVtYmVyLCB0ZXh0OiBzdHJpbmcsIHNoYWRvd05vZGU6IEhUTUxFbGVtZW50KTogbnVtYmVyIHtcbiAgICBjb25zdCBzdWZmaXggPSB0aGlzLnRhaWw7XG4gICAgbGV0IG1pZCA9IG07XG4gICAgbGV0IGVuZCA9IGU7XG4gICAgbGV0IGJlZ2luID0gYjtcbiAgICBzaGFkb3dOb2RlLmlubmVySFRNTCA9IHRleHQuc3Vic3RyaW5nKDAsIG1pZCkgKyBzdWZmaXg7XG4gICAgbGV0IHNoID0gc2hhZG93Tm9kZS5vZmZzZXRIZWlnaHQ7XG5cbiAgICBpZiAoc2ggPD0gdGgpIHtcbiAgICAgIHNoYWRvd05vZGUuaW5uZXJIVE1MID0gdGV4dC5zdWJzdHJpbmcoMCwgbWlkICsgMSkgKyBzdWZmaXg7XG4gICAgICBzaCA9IHNoYWRvd05vZGUub2Zmc2V0SGVpZ2h0O1xuICAgICAgaWYgKHNoID4gdGggfHwgbWlkID09PSBiZWdpbikge1xuICAgICAgICByZXR1cm4gbWlkO1xuICAgICAgfVxuICAgICAgYmVnaW4gPSBtaWQ7XG4gICAgICBtaWQgPSBlbmQgLSBiZWdpbiA9PT0gMSA/IGJlZ2luICsgMSA6IE1hdGguZmxvb3IoKGVuZCAtIGJlZ2luKSAvIDIpICsgYmVnaW47XG4gICAgICByZXR1cm4gdGhpcy5iaXNlY3Rpb24odGgsIG1pZCwgYmVnaW4sIGVuZCwgdGV4dCwgc2hhZG93Tm9kZSk7XG4gICAgfVxuICAgIGlmIChtaWQgLSAxIDwgMCkge1xuICAgICAgcmV0dXJuIG1pZDtcbiAgICB9XG4gICAgc2hhZG93Tm9kZS5pbm5lckhUTUwgPSB0ZXh0LnN1YnN0cmluZygwLCBtaWQgLSAxKSArIHN1ZmZpeDtcbiAgICBzaCA9IHNoYWRvd05vZGUub2Zmc2V0SGVpZ2h0O1xuICAgIGlmIChzaCA8PSB0aCkge1xuICAgICAgcmV0dXJuIG1pZCAtIDE7XG4gICAgfVxuICAgIGVuZCA9IG1pZDtcbiAgICBtaWQgPSBNYXRoLmZsb29yKChlbmQgLSBiZWdpbikgLyAyKSArIGJlZ2luO1xuICAgIHJldHVybiB0aGlzLmJpc2VjdGlvbih0aCwgbWlkLCBiZWdpbiwgZW5kLCB0ZXh0LCBzaGFkb3dOb2RlKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuVHlwZSgpIHtcbiAgICBjb25zdCB7IGxpbmVzLCBsZW5ndGgsIGlzU3VwcG9ydExpbmVDbGFtcCB9ID0gdGhpcztcbiAgICB0aGlzLmNscyA9IHtcbiAgICAgIGVsbGlwc2lzOiB0cnVlLFxuICAgICAgZWxsaXBzaXNfX2xpbmVzOiBsaW5lcyAmJiAhaXNTdXBwb3J0TGluZUNsYW1wLFxuICAgICAgJ2VsbGlwc2lzX19saW5lLWNsYW1wJzogbGluZXMgJiYgaXNTdXBwb3J0TGluZUNsYW1wLFxuICAgIH07XG4gICAgaWYgKCFsaW5lcyAmJiAhbGVuZ3RoKSB7XG4gICAgICB0aGlzLnR5cGUgPSAnZGVmYXVsdCc7XG4gICAgfSBlbHNlIGlmICghbGluZXMpIHtcbiAgICAgIHRoaXMudHlwZSA9ICdsZW5ndGgnO1xuICAgIH0gZWxzZSBpZiAoaXNTdXBwb3J0TGluZUNsYW1wKSB7XG4gICAgICB0aGlzLnR5cGUgPSAnbGluZS1jbGFtcCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudHlwZSA9ICdsaW5lJztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdlbigpIHtcbiAgICBjb25zdCB7IHR5cGUsIGxpbmVzLCBsZW5ndGgsIGZ1bGxXaWR0aFJlY29nbml0aW9uLCB0YWlsLCBvcmdFbCwgY2RyIH0gPSB0aGlzO1xuICAgIGlmICh0eXBlID09PSAnbGVuZ3RoJykge1xuICAgICAgY29uc3QgZWwgPSBvcmdFbC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgICAgaWYgKGVsLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFbGxpcHNpcyBjb250ZW50IG11c3QgYmUgc3RyaW5nLicpO1xuICAgICAgfVxuICAgICAgY29uc3QgbGVuZ3RoVGV4dCA9IGVsLnRleHRDb250ZW50ITtcbiAgICAgIGNvbnN0IHRleHRMZW5ndGggPSBmdWxsV2lkdGhSZWNvZ25pdGlvbiA/IHRoaXMuZ2V0U3RyRnVsbExlbmd0aChsZW5ndGhUZXh0KSA6IGxlbmd0aFRleHQubGVuZ3RoO1xuICAgICAgaWYgKHRleHRMZW5ndGggPD0gbGVuZ3RoIHx8IGxlbmd0aCA8IDApIHtcbiAgICAgICAgdGhpcy50ZXh0ID0gbGVuZ3RoVGV4dDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBkaXNwbGF5VGV4dDogc3RyaW5nO1xuICAgICAgICBpZiAobGVuZ3RoIC0gdGFpbC5sZW5ndGggPD0gMCkge1xuICAgICAgICAgIGRpc3BsYXlUZXh0ID0gJyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGlzcGxheVRleHQgPSBmdWxsV2lkdGhSZWNvZ25pdGlvbiA/IHRoaXMuY3V0U3RyQnlGdWxsTGVuZ3RoKGxlbmd0aFRleHQsIGxlbmd0aCkgOiBsZW5ndGhUZXh0LnNsaWNlKDAsIGxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50ZXh0ID0gZGlzcGxheVRleHQgKyB0YWlsO1xuICAgICAgfVxuICAgICAgY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdsaW5lJykge1xuICAgICAgY29uc3QgeyBzaGFkb3dPcmdFbCwgc2hhZG93VGV4dEVsIH0gPSB0aGlzO1xuICAgICAgY29uc3Qgb3JnTm9kZSA9IHNoYWRvd09yZ0VsLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBjb25zdCBsaW5lVGV4dCA9IG9yZ05vZGUuaW5uZXJUZXh0IHx8IG9yZ05vZGUudGV4dENvbnRlbnQhO1xuICAgICAgY29uc3QgbGluZUhlaWdodCA9IHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUodGhpcy5nZXRFbCgnLmVsbGlwc2lzJykpLmxpbmVIZWlnaHQhLCAxMCk7XG4gICAgICBjb25zdCB0YXJnZXRIZWlnaHQgPSBsaW5lcyAqIGxpbmVIZWlnaHQ7XG4gICAgICB0aGlzLmdldEVsKCcuZWxsaXBzaXNfX2hhbmRsZScpLnN0eWxlLmhlaWdodCA9IGAke3RhcmdldEhlaWdodH1weGA7XG5cbiAgICAgIGlmIChvcmdOb2RlLm9mZnNldEhlaWdodCA8PSB0YXJnZXRIZWlnaHQpIHtcbiAgICAgICAgdGhpcy50ZXh0ID0gbGluZVRleHQ7XG4gICAgICAgIHRoaXMudGFyZ2V0Q291bnQgPSBsaW5lVGV4dC5sZW5ndGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBiaXNlY3Rpb25cbiAgICAgICAgY29uc3QgbGVuID0gbGluZVRleHQubGVuZ3RoO1xuICAgICAgICBjb25zdCBtaWQgPSBNYXRoLmNlaWwobGVuIC8gMik7XG5cbiAgICAgICAgY29uc3QgY291bnQgPSB0aGlzLmJpc2VjdGlvbih0YXJnZXRIZWlnaHQsIG1pZCwgMCwgbGVuLCBsaW5lVGV4dCwgc2hhZG93VGV4dEVsLm5hdGl2ZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgICAgIHRoaXMudGV4dCA9IGxpbmVUZXh0O1xuICAgICAgICB0aGlzLnRhcmdldENvdW50ID0gY291bnQ7XG4gICAgICAgIGNvbnNvbGUubG9nKGxpbmVIZWlnaHQsIHRhcmdldEhlaWdodCwgbGVuLCBtaWQsIGNvdW50KTtcbiAgICAgIH1cbiAgICAgIGNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRFbChjbHM6IHN0cmluZyk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoY2xzKTtcbiAgfVxuXG4gIHByaXZhdGUgZXhlY3V0ZU9uU3RhYmxlKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubmdab25lLmlzU3RhYmxlKSB7XG4gICAgICBmbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm5nWm9uZS5vblN0YWJsZVxuICAgICAgICAuYXNPYnNlcnZhYmxlKClcbiAgICAgICAgLnBpcGUodGFrZSgxKSlcbiAgICAgICAgLnN1YnNjcmliZShmbik7XG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaCgpOiB2b2lkIHtcbiAgICB0aGlzLmdlblR5cGUoKTtcbiAgICBjb25zdCB7IHR5cGUsIGRvbSwgb3JnRWwsIGNkciB9ID0gdGhpcztcbiAgICBjb25zdCBodG1sID0gb3JnRWwubmF0aXZlRWxlbWVudC5pbm5lckhUTUw7XG4gICAgdGhpcy5vcmdIdG1sID0gZG9tLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKGh0bWwpO1xuICAgIGNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgdGhpcy5leGVjdXRlT25TdGFibGUoKCkgPT4ge1xuICAgICAgdGhpcy5nZW4oKTtcbiAgICAgIGlmICh0eXBlICE9PSAnbGluZScpIHtcbiAgICAgICAgY29uc3QgZWwgPSB0aGlzLmdldEVsKCcuZWxsaXBzaXMnKTtcbiAgICAgICAgaWYgKGVsKSB7XG4gICAgICAgICAgZWwuaW5uZXJIVE1MID0gaHRtbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmluaXRlZCkge1xuICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgfVxuICB9XG59XG4iXX0=