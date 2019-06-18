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
            return ((targetCount > 0 ? text.substring(0, targetCount) : '') +
                (targetCount > 0 && targetCount < text.length ? tail : ''));
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
        var _a = this, lines = _a.lines, length = _a.length, isSupportLineClamp = _a.isSupportLineClamp, cdr = _a.cdr;
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
        cdr.detectChanges();
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
            var text = (/** @type {?} */ (el.textContent));
            /** @type {?} */
            var textLength = fullWidthRecognition ? this.getStrFullLength(text) : text.length;
            if (textLength <= length || length < 0) {
                this.text = text;
            }
            else {
                /** @type {?} */
                var displayText = void 0;
                if (length - tail.length <= 0) {
                    displayText = '';
                }
                else {
                    displayText = fullWidthRecognition
                        ? this.cutStrByFullLength(text, length)
                        : text.slice(0, length);
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
            var text = orgNode.innerText || (/** @type {?} */ (orgNode.textContent));
            /** @type {?} */
            var lineHeight = parseInt((/** @type {?} */ (getComputedStyle(this.getEl('.ellipsis')).lineHeight)), 10);
            /** @type {?} */
            var targetHeight = lines * lineHeight;
            this.getEl('.ellipsis__handle').style.height = targetHeight + "px";
            if (orgNode.offsetHeight <= targetHeight) {
                this.text = text;
                this.targetCount = text.length;
            }
            else {
                // bisection
                /** @type {?} */
                var len = text.length;
                /** @type {?} */
                var mid = Math.ceil(len / 2);
                /** @type {?} */
                var count = this.bisection(targetHeight, mid, 0, len, text, shadowTextEl.nativeElement.firstChild);
                this.text = text;
                this.targetCount = count;
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
        this.executeOnStable((/**
         * @return {?}
         */
        function () {
            var _a = _this, type = _a.type, dom = _a.dom, orgEl = _a.orgEl, cdr = _a.cdr;
            /** @type {?} */
            var html = orgEl.nativeElement.innerHTML;
            _this.orgHtml = dom.bypassSecurityTrustHtml(html);
            cdr.detectChanges();
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
                    template: "<div (cdkObserveContent)=\"refresh()\" #orgEl style=\"display: none;\">\n  <ng-content></ng-content>\n</div>\n<ng-template #tooltipTpl let-con>\n  <span *ngIf=\"tooltip; else con\" nz-tooltip [nzTitle]=\"titleTpl\" [nzOverlayStyle]=\"{ 'overflow-wrap': 'break-word', 'word-wrap': 'break-word' }\">\n    <ng-container *ngTemplateOutlet=\"con\"></ng-container>\n    <ng-template #titleTpl>\n      <div [innerHTML]=\"orgHtml\"></div>\n    </ng-template>\n  </span>\n</ng-template>\n<ng-container [ngSwitch]=\"type\">\n  <span *ngSwitchCase=\"'default'\" [ngClass]=\"cls\"></span>\n  <ng-container *ngSwitchCase=\"'length'\">\n    <ng-template [ngTemplateOutlet]=\"tooltipTpl\" [ngTemplateOutletContext]=\"{$implicit: lengthTpl}\"></ng-template>\n    <ng-template #lengthTpl>{{text}}</ng-template>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'line-clamp'\">\n    <ng-template [ngTemplateOutlet]=\"tooltipTpl\" [ngTemplateOutletContext]=\"{$implicit: lineClampTpl}\"></ng-template>\n    <ng-template #lineClampTpl>\n      <div [ngClass]=\"cls\" [ngStyle]=\"{'-webkit-line-clamp': lines, '-webkit-box-orient': 'vertical'}\"></div>\n    </ng-template>\n  </ng-container>\n  <div *ngSwitchCase=\"'line'\" [ngClass]=\"cls\">\n    <div class=\"ellipsis__handle\">\n      <ng-template [ngTemplateOutlet]=\"tooltipTpl\" [ngTemplateOutletContext]=\"{$implicit: lineTpl}\"></ng-template>\n      <ng-template #lineTpl>\n        {{ linsWord }}\n      </ng-template>\n      <div class=\"ellipsis__shadow\" #shadowOrgEl [innerHTML]=\"orgHtml\">\n      </div>\n      <div class=\"ellipsis__shadow\" #shadowTextEl><span>{{text}}</span></div>\n    </div>\n  </div>\n</ng-container>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxsaXBzaXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9lbGxpcHNpcy8iLCJzb3VyY2VzIjpbImVsbGlwc2lzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLE1BQU0sRUFDTixLQUFLLEVBQ0wsTUFBTSxFQUVOLFNBQVMsRUFDVCxpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBWSxNQUFNLDJCQUEyQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0QztJQXVDRSwyQkFDVSxFQUFjLEVBQ2QsTUFBYyxFQUNkLEdBQWlCLEVBQ0MsR0FBYSxFQUMvQixHQUFzQjtRQUp0QixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2QsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFFBQUcsR0FBSCxHQUFHLENBQWM7UUFDQyxRQUFHLEdBQUgsR0FBRyxDQUFVO1FBQy9CLFFBQUcsR0FBSCxHQUFHLENBQW1COztRQWxDeEIsdUJBQWtCLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEtBQUssU0FBUyxDQUFDO1FBSTFFLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFFdkIsU0FBSSxHQUFHLFNBQVMsQ0FBQztRQUNqQixRQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ1QsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLGdCQUFXLEdBQUcsQ0FBQyxDQUFDOztRQUlTLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFHaEIs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QUFsQixXQUFXLENBQUMsSUFBSSxDQUFDOztxREFBZ0I7SUFDZjtRQUFsQixXQUFXLENBQUMsSUFBSSxDQUFDOztvREFBZTtJQUNqQjtRQUFmLFlBQVksRUFBRTs7bUVBQThCO0lBd014RCx3QkFBQztDQUFBLEFBbE9ELElBa09DO1NBMU5ZLGlCQUFpQjs7Ozs7O0lBRTVCLCtDQUFrRjs7Ozs7SUFDbEYsa0NBQWlFOzs7OztJQUNqRSx3Q0FBNkU7Ozs7O0lBQzdFLHlDQUErRTs7Ozs7SUFDL0UsbUNBQXVCOztJQUN2QixvQ0FBa0I7O0lBQ2xCLGlDQUFpQjs7SUFDakIsZ0NBQVM7O0lBQ1QsaUNBQVU7O0lBQ1Ysd0NBQWdCOztJQUloQixvQ0FBeUM7O0lBQ3pDLG1DQUEyQzs7SUFDM0Msa0NBQTBDOztJQUMxQyxpREFBc0Q7O0lBQ3RELGlDQUFzQjs7Ozs7SUFhcEIsK0JBQXNCOzs7OztJQUN0QixtQ0FBc0I7Ozs7O0lBQ3RCLGdDQUF5Qjs7Ozs7SUFDekIsZ0NBQXVDOzs7OztJQUN2QyxnQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2VsbGlwc2lzJyxcbiAgZXhwb3J0QXM6ICdlbGxpcHNpcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9lbGxpcHNpcy5jb21wb25lbnQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgRWxsaXBzaXNDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tc3RyaW5nLWxpdGVyYWxcbiAgcHJpdmF0ZSBpc1N1cHBvcnRMaW5lQ2xhbXAgPSB0aGlzLmRvYy5ib2R5LnN0eWxlWyd3ZWJraXRMaW5lQ2xhbXAnXSAhPT0gdW5kZWZpbmVkO1xuICBAVmlld0NoaWxkKCdvcmdFbCcsIHsgc3RhdGljOiBmYWxzZSB9KSBwcml2YXRlIG9yZ0VsOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdzaGFkb3dPcmdFbCcsIHsgc3RhdGljOiBmYWxzZSB9KSBwcml2YXRlIHNoYWRvd09yZ0VsOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdzaGFkb3dUZXh0RWwnLCB7IHN0YXRpYzogZmFsc2UgfSkgcHJpdmF0ZSBzaGFkb3dUZXh0RWw6IEVsZW1lbnRSZWY7XG4gIHByaXZhdGUgaW5pdGVkID0gZmFsc2U7XG4gIG9yZ0h0bWw6IFNhZmVIdG1sO1xuICB0eXBlID0gJ2RlZmF1bHQnO1xuICBjbHMgPSB7fTtcbiAgdGV4dCA9ICcnO1xuICB0YXJnZXRDb3VudCA9IDA7XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgdG9vbHRpcCA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIobnVsbCkgbGVuZ3RoOiBudW1iZXI7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcihudWxsKSBsaW5lczogbnVtYmVyO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZnVsbFdpZHRoUmVjb2duaXRpb24gPSBmYWxzZTtcbiAgQElucHV0KCkgdGFpbCA9ICcuLi4nO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBnZXQgbGluc1dvcmQoKTogc3RyaW5nIHtcbiAgICBjb25zdCB7IHRhcmdldENvdW50LCB0ZXh0LCB0YWlsIH0gPSB0aGlzO1xuICAgIHJldHVybiAoXG4gICAgICAodGFyZ2V0Q291bnQgPiAwID8gdGV4dC5zdWJzdHJpbmcoMCwgdGFyZ2V0Q291bnQpIDogJycpICtcbiAgICAgICh0YXJnZXRDb3VudCA+IDAgJiYgdGFyZ2V0Q291bnQgPCB0ZXh0Lmxlbmd0aCA/IHRhaWwgOiAnJylcbiAgICApO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxuICAgIHByaXZhdGUgZG9tOiBEb21TYW5pdGl6ZXIsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IERvY3VtZW50LFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgKSB7fVxuXG4gIHByaXZhdGUgZ2V0U3RyRnVsbExlbmd0aChzdHI6IHN0cmluZyk6IG51bWJlciB7XG4gICAgcmV0dXJuIHN0ci5zcGxpdCgnJykucmVkdWNlKChwcmUsIGN1cikgPT4ge1xuICAgICAgY29uc3QgY2hhckNvZGUgPSBjdXIuY2hhckNvZGVBdCgwKTtcbiAgICAgIGlmIChjaGFyQ29kZSA+PSAwICYmIGNoYXJDb2RlIDw9IDEyOCkge1xuICAgICAgICByZXR1cm4gcHJlICsgMTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwcmUgKyAyO1xuICAgIH0sIDApO1xuICB9XG5cbiAgcHJpdmF0ZSBjdXRTdHJCeUZ1bGxMZW5ndGgoc3RyOiBzdHJpbmcsIG1heExlbmd0aDogbnVtYmVyKSB7XG4gICAgbGV0IHNob3dMZW5ndGggPSAwO1xuICAgIHJldHVybiBzdHIuc3BsaXQoJycpLnJlZHVjZSgocHJlLCBjdXIpID0+IHtcbiAgICAgIGNvbnN0IGNoYXJDb2RlID0gY3VyLmNoYXJDb2RlQXQoMCk7XG4gICAgICBpZiAoY2hhckNvZGUgPj0gMCAmJiBjaGFyQ29kZSA8PSAxMjgpIHtcbiAgICAgICAgc2hvd0xlbmd0aCArPSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2hvd0xlbmd0aCArPSAyO1xuICAgICAgfVxuICAgICAgaWYgKHNob3dMZW5ndGggPD0gbWF4TGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBwcmUgKyBjdXI7XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJlO1xuICAgIH0sICcnKTtcbiAgfVxuXG4gIHByaXZhdGUgYmlzZWN0aW9uKFxuICAgIHRoOiBudW1iZXIsXG4gICAgbTogbnVtYmVyLFxuICAgIGI6IG51bWJlcixcbiAgICBlOiBudW1iZXIsXG4gICAgdGV4dDogc3RyaW5nLFxuICAgIHNoYWRvd05vZGU6IEhUTUxFbGVtZW50LFxuICApOiBudW1iZXIge1xuICAgIGNvbnN0IHN1ZmZpeCA9IHRoaXMudGFpbDtcbiAgICBsZXQgbWlkID0gbTtcbiAgICBsZXQgZW5kID0gZTtcbiAgICBsZXQgYmVnaW4gPSBiO1xuICAgIHNoYWRvd05vZGUuaW5uZXJIVE1MID0gdGV4dC5zdWJzdHJpbmcoMCwgbWlkKSArIHN1ZmZpeDtcbiAgICBsZXQgc2ggPSBzaGFkb3dOb2RlLm9mZnNldEhlaWdodDtcblxuICAgIGlmIChzaCA8PSB0aCkge1xuICAgICAgc2hhZG93Tm9kZS5pbm5lckhUTUwgPSB0ZXh0LnN1YnN0cmluZygwLCBtaWQgKyAxKSArIHN1ZmZpeDtcbiAgICAgIHNoID0gc2hhZG93Tm9kZS5vZmZzZXRIZWlnaHQ7XG4gICAgICBpZiAoc2ggPiB0aCB8fCBtaWQgPT09IGJlZ2luKSB7XG4gICAgICAgIHJldHVybiBtaWQ7XG4gICAgICB9XG4gICAgICBiZWdpbiA9IG1pZDtcbiAgICAgIG1pZCA9IGVuZCAtIGJlZ2luID09PSAxID8gYmVnaW4gKyAxIDogTWF0aC5mbG9vcigoZW5kIC0gYmVnaW4pIC8gMikgKyBiZWdpbjtcbiAgICAgIHJldHVybiB0aGlzLmJpc2VjdGlvbih0aCwgbWlkLCBiZWdpbiwgZW5kLCB0ZXh0LCBzaGFkb3dOb2RlKTtcbiAgICB9XG4gICAgaWYgKG1pZCAtIDEgPCAwKSB7XG4gICAgICByZXR1cm4gbWlkO1xuICAgIH1cbiAgICBzaGFkb3dOb2RlLmlubmVySFRNTCA9IHRleHQuc3Vic3RyaW5nKDAsIG1pZCAtIDEpICsgc3VmZml4O1xuICAgIHNoID0gc2hhZG93Tm9kZS5vZmZzZXRIZWlnaHQ7XG4gICAgaWYgKHNoIDw9IHRoKSB7XG4gICAgICByZXR1cm4gbWlkIC0gMTtcbiAgICB9XG4gICAgZW5kID0gbWlkO1xuICAgIG1pZCA9IE1hdGguZmxvb3IoKGVuZCAtIGJlZ2luKSAvIDIpICsgYmVnaW47XG4gICAgcmV0dXJuIHRoaXMuYmlzZWN0aW9uKHRoLCBtaWQsIGJlZ2luLCBlbmQsIHRleHQsIHNoYWRvd05vZGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5UeXBlKCkge1xuICAgIGNvbnN0IHsgbGluZXMsIGxlbmd0aCwgaXNTdXBwb3J0TGluZUNsYW1wLCBjZHIgfSA9IHRoaXM7XG4gICAgdGhpcy5jbHMgPSB7XG4gICAgICBlbGxpcHNpczogdHJ1ZSxcbiAgICAgIGVsbGlwc2lzX19saW5lczogbGluZXMgJiYgIWlzU3VwcG9ydExpbmVDbGFtcCxcbiAgICAgICdlbGxpcHNpc19fbGluZS1jbGFtcCc6IGxpbmVzICYmIGlzU3VwcG9ydExpbmVDbGFtcCxcbiAgICB9O1xuICAgIGlmICghbGluZXMgJiYgIWxlbmd0aCkge1xuICAgICAgdGhpcy50eXBlID0gJ2RlZmF1bHQnO1xuICAgIH0gZWxzZSBpZiAoIWxpbmVzKSB7XG4gICAgICB0aGlzLnR5cGUgPSAnbGVuZ3RoJztcbiAgICB9IGVsc2UgaWYgKGlzU3VwcG9ydExpbmVDbGFtcCkge1xuICAgICAgdGhpcy50eXBlID0gJ2xpbmUtY2xhbXAnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnR5cGUgPSAnbGluZSc7XG4gICAgfVxuICAgIGNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBwcml2YXRlIGdlbigpIHtcbiAgICBjb25zdCB7IHR5cGUsIGxpbmVzLCBsZW5ndGgsIGZ1bGxXaWR0aFJlY29nbml0aW9uLCB0YWlsLCBvcmdFbCwgY2RyIH0gPSB0aGlzO1xuICAgIGlmICh0eXBlID09PSAnbGVuZ3RoJykge1xuICAgICAgY29uc3QgZWwgPSBvcmdFbC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgICAgaWYgKGVsLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFbGxpcHNpcyBjb250ZW50IG11c3QgYmUgc3RyaW5nLicpO1xuICAgICAgfVxuICAgICAgY29uc3QgdGV4dCA9IGVsLnRleHRDb250ZW50ITtcbiAgICAgIGNvbnN0IHRleHRMZW5ndGggPSBmdWxsV2lkdGhSZWNvZ25pdGlvbiA/IHRoaXMuZ2V0U3RyRnVsbExlbmd0aCh0ZXh0KSA6IHRleHQubGVuZ3RoO1xuICAgICAgaWYgKHRleHRMZW5ndGggPD0gbGVuZ3RoIHx8IGxlbmd0aCA8IDApIHtcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBkaXNwbGF5VGV4dDogc3RyaW5nO1xuICAgICAgICBpZiAobGVuZ3RoIC0gdGFpbC5sZW5ndGggPD0gMCkge1xuICAgICAgICAgIGRpc3BsYXlUZXh0ID0gJyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGlzcGxheVRleHQgPSBmdWxsV2lkdGhSZWNvZ25pdGlvblxuICAgICAgICAgICAgPyB0aGlzLmN1dFN0ckJ5RnVsbExlbmd0aCh0ZXh0LCBsZW5ndGgpXG4gICAgICAgICAgICA6IHRleHQuc2xpY2UoMCwgbGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRleHQgPSBkaXNwbGF5VGV4dCArIHRhaWw7XG4gICAgICB9XG4gICAgICBjZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2xpbmUnKSB7XG4gICAgICBjb25zdCB7IHNoYWRvd09yZ0VsLCBzaGFkb3dUZXh0RWwgfSA9IHRoaXM7XG4gICAgICBjb25zdCBvcmdOb2RlID0gc2hhZG93T3JnRWwubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGNvbnN0IHRleHQgPSBvcmdOb2RlLmlubmVyVGV4dCB8fCBvcmdOb2RlLnRleHRDb250ZW50ITtcbiAgICAgIGNvbnN0IGxpbmVIZWlnaHQgPSBwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKHRoaXMuZ2V0RWwoJy5lbGxpcHNpcycpKS5saW5lSGVpZ2h0ISwgMTApO1xuICAgICAgY29uc3QgdGFyZ2V0SGVpZ2h0ID0gbGluZXMgKiBsaW5lSGVpZ2h0O1xuICAgICAgdGhpcy5nZXRFbCgnLmVsbGlwc2lzX19oYW5kbGUnKS5zdHlsZS5oZWlnaHQgPSBgJHt0YXJnZXRIZWlnaHR9cHhgO1xuXG4gICAgICBpZiAob3JnTm9kZS5vZmZzZXRIZWlnaHQgPD0gdGFyZ2V0SGVpZ2h0KSB7XG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgICAgIHRoaXMudGFyZ2V0Q291bnQgPSB0ZXh0Lmxlbmd0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGJpc2VjdGlvblxuICAgICAgICBjb25zdCBsZW4gPSB0ZXh0Lmxlbmd0aDtcbiAgICAgICAgY29uc3QgbWlkID0gTWF0aC5jZWlsKGxlbiAvIDIpO1xuXG4gICAgICAgIGNvbnN0IGNvdW50ID0gdGhpcy5iaXNlY3Rpb24oXG4gICAgICAgICAgdGFyZ2V0SGVpZ2h0LFxuICAgICAgICAgIG1pZCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIGxlbixcbiAgICAgICAgICB0ZXh0LFxuICAgICAgICAgIHNoYWRvd1RleHRFbC5uYXRpdmVFbGVtZW50LmZpcnN0Q2hpbGQsXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgICAgIHRoaXMudGFyZ2V0Q291bnQgPSBjb3VudDtcbiAgICAgIH1cbiAgICAgIGNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRFbChjbHM6IHN0cmluZyk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoY2xzKTtcbiAgfVxuXG4gIHByaXZhdGUgZXhlY3V0ZU9uU3RhYmxlKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubmdab25lLmlzU3RhYmxlKSB7XG4gICAgICBmbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm5nWm9uZS5vblN0YWJsZVxuICAgICAgICAuYXNPYnNlcnZhYmxlKClcbiAgICAgICAgLnBpcGUodGFrZSgxKSlcbiAgICAgICAgLnN1YnNjcmliZShmbik7XG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaCgpOiB2b2lkIHtcbiAgICB0aGlzLmdlblR5cGUoKTtcbiAgICB0aGlzLmV4ZWN1dGVPblN0YWJsZSgoKSA9PiB7XG4gICAgICBjb25zdCB7IHR5cGUsIGRvbSwgb3JnRWwsIGNkciB9ID0gdGhpcztcbiAgICAgIGNvbnN0IGh0bWwgPSBvcmdFbC5uYXRpdmVFbGVtZW50LmlubmVySFRNTDtcbiAgICAgIHRoaXMub3JnSHRtbCA9IGRvbS5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChodG1sKTtcbiAgICAgIGNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB0aGlzLmdlbigpO1xuICAgICAgaWYgKHR5cGUgIT09ICdsaW5lJykge1xuICAgICAgICBjb25zdCBlbCA9IHRoaXMuZ2V0RWwoJy5lbGxpcHNpcycpO1xuICAgICAgICBpZiAoZWwpIHtcbiAgICAgICAgICBlbC5pbm5lckhUTUwgPSBodG1sO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pbml0ZWQgPSB0cnVlO1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW5pdGVkKSB7XG4gICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==