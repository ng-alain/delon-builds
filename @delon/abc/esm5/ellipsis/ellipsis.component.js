/**
 * @fileoverview added by tsickle
 * Generated from: ellipsis.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
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
     * @param {?} targetHeight
     * @param {?} mid
     * @param {?} begin
     * @param {?} end
     * @param {?} text
     * @param {?} node
     * @return {?}
     */
    EllipsisComponent.prototype.bisection = /**
     * @private
     * @param {?} targetHeight
     * @param {?} mid
     * @param {?} begin
     * @param {?} end
     * @param {?} text
     * @param {?} node
     * @return {?}
     */
    function (targetHeight, mid, begin, end, text, node) {
        /** @type {?} */
        var suffix = this.tail;
        node.innerHTML = text.substring(0, mid) + suffix;
        /** @type {?} */
        var sh = node.offsetHeight;
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
        var _a = this, type = _a.type, lines = _a.lines, length = _a.length, fullWidthRecognition = _a.fullWidthRecognition, tail = _a.tail, orgEl = _a.orgEl, cdr = _a.cdr, ngZone = _a.ngZone;
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
            ngZone.run((/**
             * @return {?}
             */
            function () { return cdr.detectChanges(); }));
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
            }
            ngZone.run((/**
             * @return {?}
             */
            function () { return cdr.detectChanges(); }));
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
            this.ngZone.onStable.asObservable().pipe(take(1)).subscribe(fn);
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
                    template: "<div (cdkObserveContent)=\"refresh()\" #orgEl style=\"display: none;\"><ng-content></ng-content></div>\n<ng-template #tooltipTpl let-con>\n  <span *ngIf=\"tooltip; else con\" nz-tooltip [nzTooltipTitle]=\"titleTpl\" [nzOverlayStyle]=\"{ 'overflow-wrap': 'break-word', 'word-wrap': 'break-word' }\">\n    <ng-container *ngTemplateOutlet=\"con\"></ng-container>\n    <ng-template #titleTpl><div [innerHTML]=\"orgHtml\"></div></ng-template>\n  </span>\n</ng-template>\n<ng-container [ngSwitch]=\"type\">\n  <span *ngSwitchCase=\"'default'\" [ngClass]=\"cls\"></span>\n  <ng-container *ngSwitchCase=\"'length'\">\n    <ng-template [ngTemplateOutlet]=\"tooltipTpl\" [ngTemplateOutletContext]=\"{$implicit: lengthTpl}\"></ng-template>\n    <ng-template #lengthTpl>{{text}}</ng-template>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'line-clamp'\">\n    <ng-template [ngTemplateOutlet]=\"tooltipTpl\" [ngTemplateOutletContext]=\"{$implicit: lineClampTpl}\"></ng-template>\n    <ng-template #lineClampTpl>\n      <div [ngClass]=\"cls\" [ngStyle]=\"{'-webkit-line-clamp': lines, '-webkit-box-orient': 'vertical'}\"></div>\n    </ng-template>\n  </ng-container>\n  <div *ngSwitchCase=\"'line'\" [ngClass]=\"cls\">\n    <div class=\"ellipsis__handle\">\n      <ng-template [ngTemplateOutlet]=\"tooltipTpl\" [ngTemplateOutletContext]=\"{$implicit: lineTpl}\"></ng-template>\n      <ng-template #lineTpl>{{ linsWord }}</ng-template>\n      <div class=\"ellipsis__shadow\" #shadowOrgEl [innerHTML]=\"orgHtml\"></div>\n      <div class=\"ellipsis__shadow\" #shadowTextEl><span>{{text}}</span></div>\n    </div>\n  </div>\n</ng-container>\n",
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
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], EllipsisComponent.prototype, "tooltip", void 0);
    __decorate([
        InputNumber(null),
        __metadata("design:type", Number)
    ], EllipsisComponent.prototype, "length", void 0);
    __decorate([
        InputNumber(null),
        __metadata("design:type", Number)
    ], EllipsisComponent.prototype, "lines", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxsaXBzaXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9lbGxpcHNpcy8iLCJzb3VyY2VzIjpbImVsbGlwc2lzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixNQUFNLEVBQ04sS0FBSyxFQUNMLE1BQU0sRUFFTixTQUFTLEVBQ1QsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQVksTUFBTSwyQkFBMkIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN4RCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdEM7SUFvQ0UsMkJBQ1UsRUFBYyxFQUNkLE1BQWMsRUFDZCxHQUFpQixFQUNDLEdBQWEsRUFDL0IsR0FBc0I7UUFKdEIsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxRQUFHLEdBQUgsR0FBRyxDQUFjO1FBQ0MsUUFBRyxHQUFILEdBQUcsQ0FBVTtRQUMvQixRQUFHLEdBQUgsR0FBRyxDQUFtQjs7UUEvQnhCLHVCQUFrQixHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLFNBQVMsQ0FBQztRQUkxRSxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBRXZCLFNBQUksR0FBRyxTQUFTLENBQUM7UUFDakIsUUFBRyxHQUFHLEVBQUUsQ0FBQztRQUNULFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVixnQkFBVyxHQUFHLENBQUMsQ0FBQzs7UUFJUyxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBR2hC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QUMsSUFBSSxDQUFDOztxREFBZ0I7SUFDZjtRQUFsQixXQUFXLENBQUMsSUFBSSxDQUFDOztvREFBZTtJQUNqQjtRQUFmLFlBQVksRUFBRTs7bUVBQThCO0lBOEt4RCx3QkFBQztDQUFBLEFBeE1ELElBd01DO1NBaE1ZLGlCQUFpQjs7Ozs7O0lBRTVCLCtDQUFrRjs7Ozs7SUFDbEYsa0NBQWlFOzs7OztJQUNqRSx3Q0FBNkU7Ozs7O0lBQzdFLHlDQUErRTs7Ozs7SUFDL0UsbUNBQXVCOztJQUN2QixvQ0FBa0I7O0lBQ2xCLGlDQUFpQjs7SUFDakIsZ0NBQVM7O0lBQ1QsaUNBQVU7O0lBQ1Ysd0NBQWdCOztJQUloQixvQ0FBeUM7O0lBQ3pDLG1DQUEyQzs7SUFDM0Msa0NBQTBDOztJQUMxQyxpREFBc0Q7O0lBQ3RELGlDQUFzQjs7Ozs7SUFVcEIsK0JBQXNCOzs7OztJQUN0QixtQ0FBc0I7Ozs7O0lBQ3RCLGdDQUF5Qjs7Ozs7SUFDekIsZ0NBQXVDOzs7OztJQUN2QyxnQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2VsbGlwc2lzJyxcbiAgZXhwb3J0QXM6ICdlbGxpcHNpcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9lbGxpcHNpcy5jb21wb25lbnQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgRWxsaXBzaXNDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tc3RyaW5nLWxpdGVyYWxcbiAgcHJpdmF0ZSBpc1N1cHBvcnRMaW5lQ2xhbXAgPSB0aGlzLmRvYy5ib2R5LnN0eWxlWyd3ZWJraXRMaW5lQ2xhbXAnXSAhPT0gdW5kZWZpbmVkO1xuICBAVmlld0NoaWxkKCdvcmdFbCcsIHsgc3RhdGljOiBmYWxzZSB9KSBwcml2YXRlIG9yZ0VsOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdzaGFkb3dPcmdFbCcsIHsgc3RhdGljOiBmYWxzZSB9KSBwcml2YXRlIHNoYWRvd09yZ0VsOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdzaGFkb3dUZXh0RWwnLCB7IHN0YXRpYzogZmFsc2UgfSkgcHJpdmF0ZSBzaGFkb3dUZXh0RWw6IEVsZW1lbnRSZWY7XG4gIHByaXZhdGUgaW5pdGVkID0gZmFsc2U7XG4gIG9yZ0h0bWw6IFNhZmVIdG1sO1xuICB0eXBlID0gJ2RlZmF1bHQnO1xuICBjbHMgPSB7fTtcbiAgdGV4dCA9ICcnO1xuICB0YXJnZXRDb3VudCA9IDA7XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgdG9vbHRpcCA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIobnVsbCkgbGVuZ3RoOiBudW1iZXI7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcihudWxsKSBsaW5lczogbnVtYmVyO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZnVsbFdpZHRoUmVjb2duaXRpb24gPSBmYWxzZTtcbiAgQElucHV0KCkgdGFpbCA9ICcuLi4nO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBnZXQgbGluc1dvcmQoKTogc3RyaW5nIHtcbiAgICBjb25zdCB7IHRhcmdldENvdW50LCB0ZXh0LCB0YWlsIH0gPSB0aGlzO1xuICAgIHJldHVybiAodGFyZ2V0Q291bnQgPiAwID8gdGV4dC5zdWJzdHJpbmcoMCwgdGFyZ2V0Q291bnQpIDogJycpICsgKHRhcmdldENvdW50ID4gMCAmJiB0YXJnZXRDb3VudCA8IHRleHQubGVuZ3RoID8gdGFpbCA6ICcnKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIGRvbTogRG9tU2FuaXRpemVyLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBEb2N1bWVudCxcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICkge31cblxuICBwcml2YXRlIGdldFN0ckZ1bGxMZW5ndGgoc3RyOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIHJldHVybiBzdHIuc3BsaXQoJycpLnJlZHVjZSgocHJlLCBjdXIpID0+IHtcbiAgICAgIGNvbnN0IGNoYXJDb2RlID0gY3VyLmNoYXJDb2RlQXQoMCk7XG4gICAgICBpZiAoY2hhckNvZGUgPj0gMCAmJiBjaGFyQ29kZSA8PSAxMjgpIHtcbiAgICAgICAgcmV0dXJuIHByZSArIDE7XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJlICsgMjtcbiAgICB9LCAwKTtcbiAgfVxuXG4gIHByaXZhdGUgY3V0U3RyQnlGdWxsTGVuZ3RoKHN0cjogc3RyaW5nLCBtYXhMZW5ndGg6IG51bWJlcikge1xuICAgIGxldCBzaG93TGVuZ3RoID0gMDtcbiAgICByZXR1cm4gc3RyLnNwbGl0KCcnKS5yZWR1Y2UoKHByZSwgY3VyKSA9PiB7XG4gICAgICBjb25zdCBjaGFyQ29kZSA9IGN1ci5jaGFyQ29kZUF0KDApO1xuICAgICAgaWYgKGNoYXJDb2RlID49IDAgJiYgY2hhckNvZGUgPD0gMTI4KSB7XG4gICAgICAgIHNob3dMZW5ndGggKz0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNob3dMZW5ndGggKz0gMjtcbiAgICAgIH1cbiAgICAgIGlmIChzaG93TGVuZ3RoIDw9IG1heExlbmd0aCkge1xuICAgICAgICByZXR1cm4gcHJlICsgY3VyO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHByZTtcbiAgICB9LCAnJyk7XG4gIH1cblxuICBwcml2YXRlIGJpc2VjdGlvbih0YXJnZXRIZWlnaHQ6IG51bWJlciwgbWlkOiBudW1iZXIsIGJlZ2luOiBudW1iZXIsIGVuZDogbnVtYmVyLCB0ZXh0OiBzdHJpbmcsIG5vZGU6IEhUTUxFbGVtZW50KTogbnVtYmVyIHtcbiAgICBjb25zdCBzdWZmaXggPSB0aGlzLnRhaWw7XG4gICAgbm9kZS5pbm5lckhUTUwgPSB0ZXh0LnN1YnN0cmluZygwLCBtaWQpICsgc3VmZml4O1xuICAgIGxldCBzaCA9IG5vZGUub2Zmc2V0SGVpZ2h0O1xuXG4gICAgaWYgKHNoIDw9IHRhcmdldEhlaWdodCkge1xuICAgICAgbm9kZS5pbm5lckhUTUwgPSB0ZXh0LnN1YnN0cmluZygwLCBtaWQgKyAxKSArIHN1ZmZpeDtcbiAgICAgIHNoID0gbm9kZS5vZmZzZXRIZWlnaHQ7XG4gICAgICBpZiAoc2ggPiB0YXJnZXRIZWlnaHQgfHwgbWlkID09PSBiZWdpbikge1xuICAgICAgICByZXR1cm4gbWlkO1xuICAgICAgfVxuICAgICAgYmVnaW4gPSBtaWQ7XG4gICAgICBtaWQgPSBlbmQgLSBiZWdpbiA9PT0gMSA/IGJlZ2luICsgMSA6IE1hdGguZmxvb3IoKGVuZCAtIGJlZ2luKSAvIDIpICsgYmVnaW47XG4gICAgICByZXR1cm4gdGhpcy5iaXNlY3Rpb24odGFyZ2V0SGVpZ2h0LCBtaWQsIGJlZ2luLCBlbmQsIHRleHQsIG5vZGUpO1xuICAgIH1cbiAgICBpZiAobWlkIC0gMSA8IDApIHtcbiAgICAgIHJldHVybiBtaWQ7XG4gICAgfVxuICAgIG5vZGUuaW5uZXJIVE1MID0gdGV4dC5zdWJzdHJpbmcoMCwgbWlkIC0gMSkgKyBzdWZmaXg7XG4gICAgc2ggPSBub2RlLm9mZnNldEhlaWdodDtcbiAgICBpZiAoc2ggPD0gdGFyZ2V0SGVpZ2h0KSB7XG4gICAgICByZXR1cm4gbWlkIC0gMTtcbiAgICB9XG4gICAgZW5kID0gbWlkO1xuICAgIG1pZCA9IE1hdGguZmxvb3IoKGVuZCAtIGJlZ2luKSAvIDIpICsgYmVnaW47XG4gICAgcmV0dXJuIHRoaXMuYmlzZWN0aW9uKHRhcmdldEhlaWdodCwgbWlkLCBiZWdpbiwgZW5kLCB0ZXh0LCBub2RlKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuVHlwZSgpIHtcbiAgICBjb25zdCB7IGxpbmVzLCBsZW5ndGgsIGlzU3VwcG9ydExpbmVDbGFtcCB9ID0gdGhpcztcbiAgICB0aGlzLmNscyA9IHtcbiAgICAgIGVsbGlwc2lzOiB0cnVlLFxuICAgICAgZWxsaXBzaXNfX2xpbmVzOiBsaW5lcyAmJiAhaXNTdXBwb3J0TGluZUNsYW1wLFxuICAgICAgJ2VsbGlwc2lzX19saW5lLWNsYW1wJzogbGluZXMgJiYgaXNTdXBwb3J0TGluZUNsYW1wLFxuICAgIH07XG4gICAgaWYgKCFsaW5lcyAmJiAhbGVuZ3RoKSB7XG4gICAgICB0aGlzLnR5cGUgPSAnZGVmYXVsdCc7XG4gICAgfSBlbHNlIGlmICghbGluZXMpIHtcbiAgICAgIHRoaXMudHlwZSA9ICdsZW5ndGgnO1xuICAgIH0gZWxzZSBpZiAoaXNTdXBwb3J0TGluZUNsYW1wKSB7XG4gICAgICB0aGlzLnR5cGUgPSAnbGluZS1jbGFtcCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudHlwZSA9ICdsaW5lJztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdlbigpIHtcbiAgICBjb25zdCB7IHR5cGUsIGxpbmVzLCBsZW5ndGgsIGZ1bGxXaWR0aFJlY29nbml0aW9uLCB0YWlsLCBvcmdFbCwgY2RyLCBuZ1pvbmUgfSA9IHRoaXM7XG4gICAgaWYgKHR5cGUgPT09ICdsZW5ndGgnKSB7XG4gICAgICBjb25zdCBlbCA9IG9yZ0VsLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBpZiAoZWwuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0VsbGlwc2lzIGNvbnRlbnQgbXVzdCBiZSBzdHJpbmcuJyk7XG4gICAgICB9XG4gICAgICBjb25zdCBsZW5ndGhUZXh0ID0gZWwudGV4dENvbnRlbnQhO1xuICAgICAgY29uc3QgdGV4dExlbmd0aCA9IGZ1bGxXaWR0aFJlY29nbml0aW9uID8gdGhpcy5nZXRTdHJGdWxsTGVuZ3RoKGxlbmd0aFRleHQpIDogbGVuZ3RoVGV4dC5sZW5ndGg7XG4gICAgICBpZiAodGV4dExlbmd0aCA8PSBsZW5ndGggfHwgbGVuZ3RoIDwgMCkge1xuICAgICAgICB0aGlzLnRleHQgPSBsZW5ndGhUZXh0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGRpc3BsYXlUZXh0OiBzdHJpbmc7XG4gICAgICAgIGlmIChsZW5ndGggLSB0YWlsLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgZGlzcGxheVRleHQgPSAnJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkaXNwbGF5VGV4dCA9IGZ1bGxXaWR0aFJlY29nbml0aW9uID8gdGhpcy5jdXRTdHJCeUZ1bGxMZW5ndGgobGVuZ3RoVGV4dCwgbGVuZ3RoKSA6IGxlbmd0aFRleHQuc2xpY2UoMCwgbGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRleHQgPSBkaXNwbGF5VGV4dCArIHRhaWw7XG4gICAgICB9XG4gICAgICBuZ1pvbmUucnVuKCgpID0+IGNkci5kZXRlY3RDaGFuZ2VzKCkpO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2xpbmUnKSB7XG4gICAgICBjb25zdCB7IHNoYWRvd09yZ0VsLCBzaGFkb3dUZXh0RWwgfSA9IHRoaXM7XG4gICAgICBjb25zdCBvcmdOb2RlID0gc2hhZG93T3JnRWwubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGNvbnN0IGxpbmVUZXh0ID0gb3JnTm9kZS5pbm5lclRleHQgfHwgb3JnTm9kZS50ZXh0Q29udGVudCE7XG4gICAgICBjb25zdCBsaW5lSGVpZ2h0ID0gcGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmdldEVsKCcuZWxsaXBzaXMnKSkubGluZUhlaWdodCEsIDEwKTtcbiAgICAgIGNvbnN0IHRhcmdldEhlaWdodCA9IGxpbmVzICogbGluZUhlaWdodDtcbiAgICAgIHRoaXMuZ2V0RWwoJy5lbGxpcHNpc19faGFuZGxlJykuc3R5bGUuaGVpZ2h0ID0gYCR7dGFyZ2V0SGVpZ2h0fXB4YDtcblxuICAgICAgaWYgKG9yZ05vZGUub2Zmc2V0SGVpZ2h0IDw9IHRhcmdldEhlaWdodCkge1xuICAgICAgICB0aGlzLnRleHQgPSBsaW5lVGV4dDtcbiAgICAgICAgdGhpcy50YXJnZXRDb3VudCA9IGxpbmVUZXh0Lmxlbmd0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGJpc2VjdGlvblxuICAgICAgICBjb25zdCBsZW4gPSBsaW5lVGV4dC5sZW5ndGg7XG4gICAgICAgIGNvbnN0IG1pZCA9IE1hdGguY2VpbChsZW4gLyAyKTtcblxuICAgICAgICBjb25zdCBjb3VudCA9IHRoaXMuYmlzZWN0aW9uKHRhcmdldEhlaWdodCwgbWlkLCAwLCBsZW4sIGxpbmVUZXh0LCBzaGFkb3dUZXh0RWwubmF0aXZlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICAgICAgdGhpcy50ZXh0ID0gbGluZVRleHQ7XG4gICAgICAgIHRoaXMudGFyZ2V0Q291bnQgPSBjb3VudDtcbiAgICAgIH1cbiAgICAgIG5nWm9uZS5ydW4oKCkgPT4gY2RyLmRldGVjdENoYW5nZXMoKSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRFbChjbHM6IHN0cmluZyk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoY2xzKTtcbiAgfVxuXG4gIHByaXZhdGUgZXhlY3V0ZU9uU3RhYmxlKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubmdab25lLmlzU3RhYmxlKSB7XG4gICAgICBmbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm5nWm9uZS5vblN0YWJsZS5hc09ic2VydmFibGUoKS5waXBlKHRha2UoMSkpLnN1YnNjcmliZShmbik7XG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaCgpOiB2b2lkIHtcbiAgICB0aGlzLmdlblR5cGUoKTtcbiAgICBjb25zdCB7IHR5cGUsIGRvbSwgb3JnRWwsIGNkciB9ID0gdGhpcztcbiAgICBjb25zdCBodG1sID0gb3JnRWwubmF0aXZlRWxlbWVudC5pbm5lckhUTUw7XG4gICAgdGhpcy5vcmdIdG1sID0gZG9tLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKGh0bWwpO1xuICAgIGNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgdGhpcy5leGVjdXRlT25TdGFibGUoKCkgPT4ge1xuICAgICAgdGhpcy5nZW4oKTtcbiAgICAgIGlmICh0eXBlICE9PSAnbGluZScpIHtcbiAgICAgICAgY29uc3QgZWwgPSB0aGlzLmdldEVsKCcuZWxsaXBzaXMnKTtcbiAgICAgICAgaWYgKGVsKSB7XG4gICAgICAgICAgZWwuaW5uZXJIVE1MID0gaHRtbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmluaXRlZCkge1xuICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgfVxuICB9XG59XG4iXX0=