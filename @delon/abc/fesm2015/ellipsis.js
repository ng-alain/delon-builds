import { __decorate, __metadata } from 'tslib';
import { DOCUMENT, CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, ViewEncapsulation, ElementRef, NgZone, Inject, ChangeDetectorRef, ViewChild, Input, NgModule } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { InputBoolean, InputNumber, DelonUtilModule } from '@delon/util';
import { take } from 'rxjs/operators';
import { ObserversModule } from '@angular/cdk/observers';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EllipsisComponent {
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
    // #endregion
    /**
     * @return {?}
     */
    get linsWord() {
        const { targetCount, text, tail } = this;
        return ((targetCount > 0 ? text.substring(0, targetCount) : '') +
            (targetCount > 0 && targetCount < text.length ? tail : ''));
    }
    /**
     * @private
     * @param {?} str
     * @return {?}
     */
    getStrFullLength(str) {
        return str.split('').reduce((/**
         * @param {?} pre
         * @param {?} cur
         * @return {?}
         */
        (pre, cur) => {
            /** @type {?} */
            const charCode = cur.charCodeAt(0);
            if (charCode >= 0 && charCode <= 128) {
                return pre + 1;
            }
            return pre + 2;
        }), 0);
    }
    /**
     * @private
     * @param {?} str
     * @param {?} maxLength
     * @return {?}
     */
    cutStrByFullLength(str, maxLength) {
        /** @type {?} */
        let showLength = 0;
        return str.split('').reduce((/**
         * @param {?} pre
         * @param {?} cur
         * @return {?}
         */
        (pre, cur) => {
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
        }), '');
    }
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
    }
    /**
     * @private
     * @return {?}
     */
    genType() {
        const { lines, length, isSupportLineClamp, cdr } = this;
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
    }
    /**
     * @private
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
            const text = (/** @type {?} */ (el.textContent));
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
                    displayText = fullWidthRecognition
                        ? this.cutStrByFullLength(text, length)
                        : text.slice(0, length);
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
            const text = orgNode.innerText || (/** @type {?} */ (orgNode.textContent));
            /** @type {?} */
            const lineHeight = parseInt((/** @type {?} */ (getComputedStyle(this.getEl('.ellipsis')).lineHeight)), 10);
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
     * @private
     * @param {?} cls
     * @return {?}
     */
    getEl(cls) {
        return this.el.nativeElement.querySelector(cls);
    }
    /**
     * @private
     * @param {?} fn
     * @return {?}
     */
    executeOnStable(fn) {
        if (this.ngZone.isStable) {
            fn();
        }
        else {
            this.ngZone.onStable
                .asObservable()
                .pipe(take(1))
                .subscribe(fn);
        }
    }
    /**
     * @return {?}
     */
    refresh() {
        this.genType();
        this.executeOnStable((/**
         * @return {?}
         */
        () => {
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
        }));
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
                exportAs: 'ellipsis',
                template: "<div (cdkObserveContent)=\"refresh()\" #orgEl style=\"display: none;\"><ng-content></ng-content></div>\n<ng-template #tooltipTpl let-con>\n  <span *ngIf=\"tooltip; else con\" nz-tooltip [nzTitle]=\"titleTpl\" [nzOverlayStyle]=\"{ 'overflow-wrap': 'break-word', 'word-wrap': 'break-word' }\">\n    <ng-container *ngTemplateOutlet=\"con\"></ng-container>\n    <ng-template #titleTpl><div [innerHTML]=\"orgHtml\"></div></ng-template>\n  </span>\n</ng-template>\n<ng-container [ngSwitch]=\"type\">\n  <span *ngSwitchCase=\"'default'\" [ngClass]=\"cls\"></span>\n  <ng-container *ngSwitchCase=\"'length'\">\n    <ng-template [ngTemplateOutlet]=\"tooltipTpl\" [ngTemplateOutletContext]=\"{$implicit: lengthTpl}\"></ng-template>\n    <ng-template #lengthTpl>{{text}}</ng-template>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'line-clamp'\">\n    <ng-template [ngTemplateOutlet]=\"tooltipTpl\" [ngTemplateOutletContext]=\"{$implicit: lineClampTpl}\"></ng-template>\n    <ng-template #lineClampTpl>\n      <div [ngClass]=\"cls\" [ngStyle]=\"{'-webkit-line-clamp': lines, '-webkit-box-orient': 'vertical'}\"></div>\n    </ng-template>\n  </ng-container>\n  <div *ngSwitchCase=\"'line'\" [ngClass]=\"cls\">\n    <div class=\"ellipsis__handle\">\n      <ng-template [ngTemplateOutlet]=\"tooltipTpl\" [ngTemplateOutletContext]=\"{$implicit: lineTpl}\"></ng-template>\n      <ng-template #lineTpl>{{ linsWord }}</ng-template>\n      <div class=\"ellipsis__shadow\" #shadowOrgEl [innerHTML]=\"orgHtml\"></div>\n      <div class=\"ellipsis__shadow\" #shadowTextEl><span>{{text}}</span></div>\n    </div>\n  </div>\n</ng-container>",
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [EllipsisComponent];
class EllipsisModule {
}
EllipsisModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, ObserversModule, DelonUtilModule, NzToolTipModule],
                declarations: [...COMPONENTS],
                exports: [...COMPONENTS],
            },] }
];

export { EllipsisComponent, EllipsisModule };
//# sourceMappingURL=ellipsis.js.map
