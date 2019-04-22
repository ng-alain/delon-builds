/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Inject, Input, NgZone, ViewChild, } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { InputBoolean, InputNumber } from '@delon/util';
import { take } from 'rxjs/operators';
var EllipsisComponent = /** @class */ (function () {
    // #endregion
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
                    displayText = fullWidthRecognition ? this.cutStrByFullLength(text, length) : text.slice(0, length);
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
                    template: "<div (cdkObserveContent)=\"refresh()\"\n     #orgEl\n     style=\"display: none;\">\n  <ng-content></ng-content>\n</div>\n<ng-template #tooltipTpl\n             let-con>\n  <span *ngIf=\"tooltip; else con\"\n        nz-tooltip\n        [nzTitle]=\"titleTpl\"\n        [nzOverlayStyle]=\"{ 'overflow-wrap': 'break-word', 'word-wrap': 'break-word' }\">\n    <ng-container *ngTemplateOutlet=\"con\"></ng-container>\n    <ng-template #titleTpl>\n      <div [innerHTML]=\"orgHtml\"></div>\n    </ng-template>\n  </span>\n</ng-template>\n<ng-container [ngSwitch]=\"type\">\n  <span *ngSwitchCase=\"'default'\"\n        [ngClass]=\"cls\"></span>\n  <ng-container *ngSwitchCase=\"'length'\">\n    <ng-template [ngTemplateOutlet]=\"tooltipTpl\"\n                 [ngTemplateOutletContext]=\"{$implicit: lengthTpl}\"></ng-template>\n    <ng-template #lengthTpl>{{text}}</ng-template>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'line-clamp'\">\n    <ng-template [ngTemplateOutlet]=\"tooltipTpl\"\n                 [ngTemplateOutletContext]=\"{$implicit: lineClampTpl}\"></ng-template>\n    <ng-template #lineClampTpl>\n      <div [ngClass]=\"cls\"\n           [ngStyle]=\"{'-webkit-line-clamp': lines, '-webkit-box-orient': 'vertical'}\"></div>\n    </ng-template>\n  </ng-container>\n  <div *ngSwitchCase=\"'line'\"\n       [ngClass]=\"cls\">\n    <div class=\"ellipsis__handle\">\n      <ng-template [ngTemplateOutlet]=\"tooltipTpl\"\n                   [ngTemplateOutletContext]=\"{$implicit: lineTpl}\"></ng-template>\n      <ng-template #lineTpl>\n        {{ (targetCount > 0 ? text.substring(0, targetCount) : '') + (targetCount > 0 && targetCount < text.length\n          ?\n          tail\n          : ''\n          )\n          }}\n          </ng-template>\n          <div\n          class=\"ellipsis__shadow\"\n          #shadowOrgEl\n          [innerHTML]=\"orgHtml\">\n    </div>\n    <div class=\"ellipsis__shadow\"\n         #shadowTextEl><span>{{text}}</span></div>\n  </div>\n  </div>\n</ng-container>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxsaXBzaXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9lbGxpcHNpcy8iLCJzb3VyY2VzIjpbImVsbGlwc2lzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLE1BQU0sRUFDTixLQUFLLEVBQ0wsTUFBTSxFQUVOLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFZLE1BQU0sMkJBQTJCLENBQUM7QUFDbkUsT0FBTyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDeEQsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXRDO0lBMkJFLGFBQWE7SUFFYiwyQkFDVSxFQUFjLEVBQ2QsTUFBYyxFQUNkLEdBQWlCLEVBQ0MsR0FBYSxFQUMvQixHQUFzQjtRQUp0QixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2QsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFFBQUcsR0FBSCxHQUFHLENBQWM7UUFDQyxRQUFHLEdBQUgsR0FBRyxDQUFVO1FBQy9CLFFBQUcsR0FBSCxHQUFHLENBQW1COztRQTFCeEIsdUJBQWtCLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEtBQUssU0FBUyxDQUFDO1FBSTFFLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFFdkIsU0FBSSxHQUFHLFNBQVMsQ0FBQztRQUNqQixRQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ1QsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLGdCQUFXLEdBQUcsQ0FBQyxDQUFDOztRQUlTLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFHaEIseUJB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dGVudCI6WyJpbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZWxsaXBzaXMnLFxuICBleHBvcnRBczogJ2VsbGlwc2lzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2VsbGlwc2lzLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEVsbGlwc2lzQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXN0cmluZy1saXRlcmFsXG4gIHByaXZhdGUgaXNTdXBwb3J0TGluZUNsYW1wID0gdGhpcy5kb2MuYm9keS5zdHlsZVsnd2Via2l0TGluZUNsYW1wJ10gIT09IHVuZGVmaW5lZDtcbiAgQFZpZXdDaGlsZCgnb3JnRWwnKSBwcml2YXRlIG9yZ0VsOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdzaGFkb3dPcmdFbCcpIHByaXZhdGUgc2hhZG93T3JnRWw6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3NoYWRvd1RleHRFbCcpIHByaXZhdGUgc2hhZG93VGV4dEVsOiBFbGVtZW50UmVmO1xuICBwcml2YXRlIGluaXRlZCA9IGZhbHNlO1xuICBvcmdIdG1sOiBTYWZlSHRtbDtcbiAgdHlwZSA9ICdkZWZhdWx0JztcbiAgY2xzID0ge307XG4gIHRleHQgPSAnJztcbiAgdGFyZ2V0Q291bnQgPSAwO1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHRvb2x0aXAgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKG51bGwpIGxlbmd0aDogbnVtYmVyO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIobnVsbCkgbGluZXM6IG51bWJlcjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGZ1bGxXaWR0aFJlY29nbml0aW9uID0gZmFsc2U7XG4gIEBJbnB1dCgpIHRhaWwgPSAnLi4uJztcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxuICAgIHByaXZhdGUgZG9tOiBEb21TYW5pdGl6ZXIsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IERvY3VtZW50LFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgKSB7fVxuXG4gIHByaXZhdGUgZ2V0U3RyRnVsbExlbmd0aChzdHI6IHN0cmluZyk6IG51bWJlciB7XG4gICAgcmV0dXJuIHN0ci5zcGxpdCgnJykucmVkdWNlKChwcmUsIGN1cikgPT4ge1xuICAgICAgY29uc3QgY2hhckNvZGUgPSBjdXIuY2hhckNvZGVBdCgwKTtcbiAgICAgIGlmIChjaGFyQ29kZSA+PSAwICYmIGNoYXJDb2RlIDw9IDEyOCkge1xuICAgICAgICByZXR1cm4gcHJlICsgMTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwcmUgKyAyO1xuICAgIH0sIDApO1xuICB9XG5cbiAgcHJpdmF0ZSBjdXRTdHJCeUZ1bGxMZW5ndGgoc3RyOiBzdHJpbmcsIG1heExlbmd0aDogbnVtYmVyKSB7XG4gICAgbGV0IHNob3dMZW5ndGggPSAwO1xuICAgIHJldHVybiBzdHIuc3BsaXQoJycpLnJlZHVjZSgocHJlLCBjdXIpID0+IHtcbiAgICAgIGNvbnN0IGNoYXJDb2RlID0gY3VyLmNoYXJDb2RlQXQoMCk7XG4gICAgICBpZiAoY2hhckNvZGUgPj0gMCAmJiBjaGFyQ29kZSA8PSAxMjgpIHtcbiAgICAgICAgc2hvd0xlbmd0aCArPSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2hvd0xlbmd0aCArPSAyO1xuICAgICAgfVxuICAgICAgaWYgKHNob3dMZW5ndGggPD0gbWF4TGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBwcmUgKyBjdXI7XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJlO1xuICAgIH0sICcnKTtcbiAgfVxuXG4gIHByaXZhdGUgYmlzZWN0aW9uKHRoOiBudW1iZXIsIG06IG51bWJlciwgYjogbnVtYmVyLCBlOiBudW1iZXIsIHRleHQ6IHN0cmluZywgc2hhZG93Tm9kZTogSFRNTEVsZW1lbnQpOiBudW1iZXIge1xuICAgIGNvbnN0IHN1ZmZpeCA9IHRoaXMudGFpbDtcbiAgICBsZXQgbWlkID0gbTtcbiAgICBsZXQgZW5kID0gZTtcbiAgICBsZXQgYmVnaW4gPSBiO1xuICAgIHNoYWRvd05vZGUuaW5uZXJIVE1MID0gdGV4dC5zdWJzdHJpbmcoMCwgbWlkKSArIHN1ZmZpeDtcbiAgICBsZXQgc2ggPSBzaGFkb3dOb2RlLm9mZnNldEhlaWdodDtcblxuICAgIGlmIChzaCA8PSB0aCkge1xuICAgICAgc2hhZG93Tm9kZS5pbm5lckhUTUwgPSB0ZXh0LnN1YnN0cmluZygwLCBtaWQgKyAxKSArIHN1ZmZpeDtcbiAgICAgIHNoID0gc2hhZG93Tm9kZS5vZmZzZXRIZWlnaHQ7XG4gICAgICBpZiAoc2ggPiB0aCB8fCBtaWQgPT09IGJlZ2luKSB7XG4gICAgICAgIHJldHVybiBtaWQ7XG4gICAgICB9XG4gICAgICBiZWdpbiA9IG1pZDtcbiAgICAgIGlmIChlbmQgLSBiZWdpbiA9PT0gMSkge1xuICAgICAgICBtaWQgPSBiZWdpbiArIDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtaWQgPSBNYXRoLmZsb29yKChlbmQgLSBiZWdpbikgLyAyKSArIGJlZ2luO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuYmlzZWN0aW9uKHRoLCBtaWQsIGJlZ2luLCBlbmQsIHRleHQsIHNoYWRvd05vZGUpO1xuICAgIH1cbiAgICBpZiAobWlkIC0gMSA8IDApIHtcbiAgICAgIHJldHVybiBtaWQ7XG4gICAgfVxuICAgIHNoYWRvd05vZGUuaW5uZXJIVE1MID0gdGV4dC5zdWJzdHJpbmcoMCwgbWlkIC0gMSkgKyBzdWZmaXg7XG4gICAgc2ggPSBzaGFkb3dOb2RlLm9mZnNldEhlaWdodDtcbiAgICBpZiAoc2ggPD0gdGgpIHtcbiAgICAgIHJldHVybiBtaWQgLSAxO1xuICAgIH1cbiAgICBlbmQgPSBtaWQ7XG4gICAgbWlkID0gTWF0aC5mbG9vcigoZW5kIC0gYmVnaW4pIC8gMikgKyBiZWdpbjtcbiAgICByZXR1cm4gdGhpcy5iaXNlY3Rpb24odGgsIG1pZCwgYmVnaW4sIGVuZCwgdGV4dCwgc2hhZG93Tm9kZSk7XG4gIH1cblxuICBwcml2YXRlIGdlblR5cGUoKSB7XG4gICAgY29uc3QgeyBsaW5lcywgbGVuZ3RoLCBpc1N1cHBvcnRMaW5lQ2xhbXAsIGNkciB9ID0gdGhpcztcbiAgICB0aGlzLmNscyA9IHtcbiAgICAgIGVsbGlwc2lzOiB0cnVlLFxuICAgICAgZWxsaXBzaXNfX2xpbmVzOiBsaW5lcyAmJiAhaXNTdXBwb3J0TGluZUNsYW1wLFxuICAgICAgJ2VsbGlwc2lzX19saW5lLWNsYW1wJzogbGluZXMgJiYgaXNTdXBwb3J0TGluZUNsYW1wLFxuICAgIH07XG4gICAgaWYgKCFsaW5lcyAmJiAhbGVuZ3RoKSB7XG4gICAgICB0aGlzLnR5cGUgPSAnZGVmYXVsdCc7XG4gICAgfSBlbHNlIGlmICghbGluZXMpIHtcbiAgICAgIHRoaXMudHlwZSA9ICdsZW5ndGgnO1xuICAgIH0gZWxzZSBpZiAoaXNTdXBwb3J0TGluZUNsYW1wKSB7XG4gICAgICB0aGlzLnR5cGUgPSAnbGluZS1jbGFtcCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudHlwZSA9ICdsaW5lJztcbiAgICB9XG4gICAgY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuKCkge1xuICAgIGNvbnN0IHsgdHlwZSwgbGluZXMsIGxlbmd0aCwgZnVsbFdpZHRoUmVjb2duaXRpb24sIHRhaWwsIG9yZ0VsLCBjZHIgfSA9IHRoaXM7XG4gICAgaWYgKHR5cGUgPT09ICdsZW5ndGgnKSB7XG4gICAgICBjb25zdCBlbCA9IG9yZ0VsLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBpZiAoZWwuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0VsbGlwc2lzIGNvbnRlbnQgbXVzdCBiZSBzdHJpbmcuJyk7XG4gICAgICB9XG4gICAgICBjb25zdCB0ZXh0ID0gZWwudGV4dENvbnRlbnQhO1xuICAgICAgY29uc3QgdGV4dExlbmd0aCA9IGZ1bGxXaWR0aFJlY29nbml0aW9uID8gdGhpcy5nZXRTdHJGdWxsTGVuZ3RoKHRleHQpIDogdGV4dC5sZW5ndGg7XG4gICAgICBpZiAodGV4dExlbmd0aCA8PSBsZW5ndGggfHwgbGVuZ3RoIDwgMCkge1xuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGRpc3BsYXlUZXh0OiBzdHJpbmc7XG4gICAgICAgIGlmIChsZW5ndGggLSB0YWlsLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgZGlzcGxheVRleHQgPSAnJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkaXNwbGF5VGV4dCA9IGZ1bGxXaWR0aFJlY29nbml0aW9uID8gdGhpcy5jdXRTdHJCeUZ1bGxMZW5ndGgodGV4dCwgbGVuZ3RoKSA6IHRleHQuc2xpY2UoMCwgbGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRleHQgPSBkaXNwbGF5VGV4dCArIHRhaWw7XG4gICAgICB9XG4gICAgICBjZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2xpbmUnKSB7XG4gICAgICBjb25zdCB7IHNoYWRvd09yZ0VsLCBzaGFkb3dUZXh0RWwgfSA9IHRoaXM7XG4gICAgICBjb25zdCBvcmdOb2RlID0gc2hhZG93T3JnRWwubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGNvbnN0IHRleHQgPSBvcmdOb2RlLmlubmVyVGV4dCB8fCBvcmdOb2RlLnRleHRDb250ZW50ITtcbiAgICAgIGNvbnN0IGxpbmVIZWlnaHQgPSBwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKHRoaXMuZ2V0RWwoJy5lbGxpcHNpcycpKS5saW5lSGVpZ2h0ISwgMTApO1xuICAgICAgY29uc3QgdGFyZ2V0SGVpZ2h0ID0gbGluZXMgKiBsaW5lSGVpZ2h0O1xuICAgICAgdGhpcy5nZXRFbCgnLmVsbGlwc2lzX19oYW5kbGUnKS5zdHlsZS5oZWlnaHQgPSBgJHt0YXJnZXRIZWlnaHR9cHhgO1xuXG4gICAgICBpZiAob3JnTm9kZS5vZmZzZXRIZWlnaHQgPD0gdGFyZ2V0SGVpZ2h0KSB7XG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgICAgIHRoaXMudGFyZ2V0Q291bnQgPSB0ZXh0Lmxlbmd0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGJpc2VjdGlvblxuICAgICAgICBjb25zdCBsZW4gPSB0ZXh0Lmxlbmd0aDtcbiAgICAgICAgY29uc3QgbWlkID0gTWF0aC5jZWlsKGxlbiAvIDIpO1xuXG4gICAgICAgIGNvbnN0IGNvdW50ID0gdGhpcy5iaXNlY3Rpb24odGFyZ2V0SGVpZ2h0LCBtaWQsIDAsIGxlbiwgdGV4dCwgc2hhZG93VGV4dEVsLm5hdGl2ZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgICAgIHRoaXMudGFyZ2V0Q291bnQgPSBjb3VudDtcbiAgICAgIH1cbiAgICAgIGNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRFbChjbHM6IHN0cmluZyk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoY2xzKTtcbiAgfVxuXG4gIHByaXZhdGUgZXhlY3V0ZU9uU3RhYmxlKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubmdab25lLmlzU3RhYmxlKSB7XG4gICAgICBmbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm5nWm9uZS5vblN0YWJsZVxuICAgICAgICAuYXNPYnNlcnZhYmxlKClcbiAgICAgICAgLnBpcGUodGFrZSgxKSlcbiAgICAgICAgLnN1YnNjcmliZShmbik7XG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaCgpOiB2b2lkIHtcbiAgICB0aGlzLmdlblR5cGUoKTtcbiAgICB0aGlzLmV4ZWN1dGVPblN0YWJsZSgoKSA9PiB7XG4gICAgICBjb25zdCB7IHR5cGUsIGRvbSwgb3JnRWwsIGNkciB9ID0gdGhpcztcbiAgICAgIGNvbnN0IGh0bWwgPSBvcmdFbC5uYXRpdmVFbGVtZW50LmlubmVySFRNTDtcbiAgICAgIHRoaXMub3JnSHRtbCA9IGRvbS5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChodG1sKTtcbiAgICAgIGNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB0aGlzLmdlbigpO1xuICAgICAgaWYgKHR5cGUgIT09ICdsaW5lJykge1xuICAgICAgICBjb25zdCBlbCA9IHRoaXMuZ2V0RWwoJy5lbGxpcHNpcycpO1xuICAgICAgICBpZiAoZWwpIHtcbiAgICAgICAgICBlbC5pbm5lckhUTUwgPSBodG1sO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pbml0ZWQgPSB0cnVlO1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW5pdGVkKSB7XG4gICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==