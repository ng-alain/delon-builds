import { __decorate, __metadata, __spread } from 'tslib';
import { DOCUMENT, CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, ViewEncapsulation, ElementRef, NgZone, Inject, ChangeDetectorRef, ViewChild, Input, NgModule } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { InputBoolean, InputNumber, DelonUtilModule } from '@delon/util';
import { take } from 'rxjs/operators';
import { ObserversModule } from '@angular/cdk/observers';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

/**
 * @fileoverview added by tsickle
 * Generated from: ellipsis.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
                    template: "<div (cdkObserveContent)=\"refresh()\" #orgEl style=\"display: none;\"><ng-content></ng-content></div>\n<ng-template #tooltipTpl let-con>\n  <span *ngIf=\"tooltip; else con\" nz-tooltip [nzTooltipTitle]=\"titleTpl\" [nzTooltipOverlayStyle]=\"{ 'overflow-wrap': 'break-word', 'word-wrap': 'break-word' }\">\n    <ng-container *ngTemplateOutlet=\"con\"></ng-container>\n    <ng-template #titleTpl><div [innerHTML]=\"orgHtml\"></div></ng-template>\n  </span>\n</ng-template>\n<ng-container [ngSwitch]=\"type\">\n  <span *ngSwitchCase=\"'default'\" [ngClass]=\"cls\"></span>\n  <ng-container *ngSwitchCase=\"'length'\">\n    <ng-template [ngTemplateOutlet]=\"tooltipTpl\" [ngTemplateOutletContext]=\"{ $implicit: lengthTpl }\"></ng-template>\n    <ng-template #lengthTpl>{{ text }}</ng-template>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'line-clamp'\">\n    <ng-template [ngTemplateOutlet]=\"tooltipTpl\" [ngTemplateOutletContext]=\"{ $implicit: lineClampTpl }\"></ng-template>\n    <ng-template #lineClampTpl>\n      <div [ngClass]=\"cls\" [ngStyle]=\"{ '-webkit-line-clamp': lines, '-webkit-box-orient': 'vertical' }\"></div>\n    </ng-template>\n  </ng-container>\n  <div *ngSwitchCase=\"'line'\" [ngClass]=\"cls\">\n    <div class=\"ellipsis__handle\">\n      <ng-template [ngTemplateOutlet]=\"tooltipTpl\" [ngTemplateOutletContext]=\"{ $implicit: lineTpl }\"></ng-template>\n      <ng-template #lineTpl>{{ linsWord }}</ng-template>\n      <div class=\"ellipsis__shadow\" #shadowOrgEl [innerHTML]=\"orgHtml\"></div>\n      <div class=\"ellipsis__shadow\" #shadowTextEl>\n        <span>{{ text }}</span>\n      </div>\n    </div>\n  </div>\n</ng-container>\n",
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

/**
 * @fileoverview added by tsickle
 * Generated from: ellipsis.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var COMPONENTS = [EllipsisComponent];
var EllipsisModule = /** @class */ (function () {
    function EllipsisModule() {
    }
    EllipsisModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, ObserversModule, DelonUtilModule, NzToolTipModule],
                    declarations: __spread(COMPONENTS),
                    exports: __spread(COMPONENTS),
                },] }
    ];
    return EllipsisModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ellipsis.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { EllipsisComponent, EllipsisModule };
//# sourceMappingURL=ellipsis.js.map
