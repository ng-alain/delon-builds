/**
 * @fileoverview added by tsickle
 * Generated from: ellipsis.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Inject, Input, NgZone, ViewChild, ViewEncapsulation, } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { InputBoolean, InputNumber } from '@delon/util';
import { take } from 'rxjs/operators';
export class EllipsisComponent {
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
        return (targetCount > 0 ? text.substring(0, targetCount) : '') + (targetCount > 0 && targetCount < text.length ? tail : '');
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
     * @param {?} targetHeight
     * @param {?} mid
     * @param {?} begin
     * @param {?} end
     * @param {?} text
     * @param {?} node
     * @return {?}
     */
    bisection(targetHeight, mid, begin, end, text, node) {
        /** @type {?} */
        const suffix = this.tail;
        node.innerHTML = text.substring(0, mid) + suffix;
        /** @type {?} */
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
    /**
     * @private
     * @return {?}
     */
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
    /**
     * @private
     * @return {?}
     */
    gen() {
        const { type, lines, length, fullWidthRecognition, tail, orgEl, cdr, ngZone } = this;
        if (type === 'length') {
            /** @type {?} */
            const el = (/** @type {?} */ (orgEl.nativeElement));
            if (el.children.length > 0) {
                throw new Error('Ellipsis content must be string.');
            }
            /** @type {?} */
            const lengthText = (/** @type {?} */ (el.textContent));
            /** @type {?} */
            const textLength = fullWidthRecognition ? this.getStrFullLength(lengthText) : lengthText.length;
            if (textLength <= length || length < 0) {
                this.text = lengthText;
            }
            else {
                /** @type {?} */
                let displayText;
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
            () => cdr.detectChanges()));
        }
        else if (type === 'line') {
            const { shadowOrgEl, shadowTextEl } = this;
            /** @type {?} */
            const orgNode = (/** @type {?} */ (shadowOrgEl.nativeElement));
            /** @type {?} */
            const lineText = orgNode.innerText || (/** @type {?} */ (orgNode.textContent));
            /** @type {?} */
            const lineHeight = parseInt((/** @type {?} */ (getComputedStyle(this.getEl('.ellipsis')).lineHeight)), 10);
            /** @type {?} */
            const targetHeight = lines * lineHeight;
            this.getEl('.ellipsis__handle').style.height = `${targetHeight}px`;
            if (orgNode.offsetHeight <= targetHeight) {
                this.text = lineText;
                this.targetCount = lineText.length;
            }
            else {
                // bisection
                /** @type {?} */
                const len = lineText.length;
                /** @type {?} */
                const mid = Math.ceil(len / 2);
                /** @type {?} */
                const count = this.bisection(targetHeight, mid, 0, len, lineText, shadowTextEl.nativeElement.firstChild);
                this.text = lineText;
                this.targetCount = count;
            }
            ngZone.run((/**
             * @return {?}
             */
            () => cdr.detectChanges()));
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
            this.ngZone.onStable.asObservable().pipe(take(1)).subscribe(fn);
        }
    }
    /**
     * @return {?}
     */
    refresh() {
        this.genType();
        const { type, dom, orgEl, cdr } = this;
        /** @type {?} */
        const html = orgEl.nativeElement.innerHTML;
        this.orgHtml = dom.bypassSecurityTrustHtml(html);
        cdr.detectChanges();
        this.executeOnStable((/**
         * @return {?}
         */
        () => {
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
                template: "<div (cdkObserveContent)=\"refresh()\" #orgEl style=\"display: none;\"><ng-content></ng-content></div>\n<ng-template #tooltipTpl let-con>\n  <span *ngIf=\"tooltip; else con\" nz-tooltip [nzTooltipTitle]=\"titleTpl\" [nzTooltipOverlayStyle]=\"{ 'overflow-wrap': 'break-word', 'word-wrap': 'break-word' }\">\n    <ng-container *ngTemplateOutlet=\"con\"></ng-container>\n    <ng-template #titleTpl><div [innerHTML]=\"orgHtml\"></div></ng-template>\n  </span>\n</ng-template>\n<ng-container [ngSwitch]=\"type\">\n  <span *ngSwitchCase=\"'default'\" [ngClass]=\"cls\"></span>\n  <ng-container *ngSwitchCase=\"'length'\">\n    <ng-template [ngTemplateOutlet]=\"tooltipTpl\" [ngTemplateOutletContext]=\"{ $implicit: lengthTpl }\"></ng-template>\n    <ng-template #lengthTpl>{{ text }}</ng-template>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'line-clamp'\">\n    <ng-template [ngTemplateOutlet]=\"tooltipTpl\" [ngTemplateOutletContext]=\"{ $implicit: lineClampTpl }\"></ng-template>\n    <ng-template #lineClampTpl>\n      <div [ngClass]=\"cls\" [ngStyle]=\"{ '-webkit-line-clamp': lines, '-webkit-box-orient': 'vertical' }\"></div>\n    </ng-template>\n  </ng-container>\n  <div *ngSwitchCase=\"'line'\" [ngClass]=\"cls\">\n    <div class=\"ellipsis__handle\">\n      <ng-template [ngTemplateOutlet]=\"tooltipTpl\" [ngTemplateOutletContext]=\"{ $implicit: lineTpl }\"></ng-template>\n      <ng-template #lineTpl>{{ linsWord }}</ng-template>\n      <div class=\"ellipsis__shadow\" #shadowOrgEl [innerHTML]=\"orgHtml\"></div>\n      <div class=\"ellipsis__shadow\" #shadowTextEl>\n        <span>{{ text }}</span>\n      </div>\n    </div>\n  </div>\n</ng-container>\n",
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
if (false) {
    /** @type {?} */
    EllipsisComponent.ngAcceptInputType_tooltip;
    /** @type {?} */
    EllipsisComponent.ngAcceptInputType_length;
    /** @type {?} */
    EllipsisComponent.ngAcceptInputType_lines;
    /** @type {?} */
    EllipsisComponent.ngAcceptInputType_fullWidthRecognition;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxsaXBzaXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9lbGxpcHNpcy8iLCJzb3VyY2VzIjpbImVsbGlwc2lzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixNQUFNLEVBQ04sS0FBSyxFQUNMLE1BQU0sRUFFTixTQUFTLEVBQ1QsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQVksTUFBTSwyQkFBMkIsQ0FBQztBQUNuRSxPQUFPLEVBQWdCLFlBQVksRUFBRSxXQUFXLEVBQWUsTUFBTSxhQUFhLENBQUM7QUFDbkYsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBVXRDLE1BQU0sT0FBTyxpQkFBaUI7Ozs7Ozs7O0lBaUM1QixZQUNVLEVBQWMsRUFDZCxNQUFjLEVBQ2QsR0FBaUIsRUFDQyxHQUFhLEVBQy9CLEdBQXNCO1FBSnRCLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsUUFBRyxHQUFILEdBQUcsQ0FBYztRQUNDLFFBQUcsR0FBSCxHQUFHLENBQVU7UUFDL0IsUUFBRyxHQUFILEdBQUcsQ0FBbUI7O1FBL0J4Qix1QkFBa0IsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsS0FBSyxTQUFTLENBQUM7UUFJMUUsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUV2QixTQUFJLEdBQUcsU0FBUyxDQUFDO1FBQ2pCLFFBQUcsR0FBRyxFQUFFLENBQUM7UUFDVCxTQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1YsZ0JBQVcsR0FBRyxDQUFDLENBQUM7O1FBSVMsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUdoQix5QkFBb0IsR0FBRyxLQUFLLENBQUM7UUFDN0MsU0FBSSxHQUFHLEtBQUssQ0FBQztJQWVuQixDQUFDOzs7OztJQVhKLElBQUksUUFBUTtjQUNKLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxJQUFJO1FBQ3hDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzlILENBQUM7Ozs7OztJQVVPLGdCQUFnQixDQUFDLEdBQVc7UUFDbEMsT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU07Ozs7O1FBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7O2tCQUNqQyxRQUFRLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDbEMsSUFBSSxRQUFRLElBQUksQ0FBQyxJQUFJLFFBQVEsSUFBSSxHQUFHLEVBQUU7Z0JBQ3BDLE9BQU8sR0FBRyxHQUFHLENBQUMsQ0FBQzthQUNoQjtZQUNELE9BQU8sR0FBRyxHQUFHLENBQUMsQ0FBQztRQUNqQixDQUFDLEdBQUUsQ0FBQyxDQUFDLENBQUM7SUFDUixDQUFDOzs7Ozs7O0lBRU8sa0JBQWtCLENBQUMsR0FBVyxFQUFFLFNBQWlCOztZQUNuRCxVQUFVLEdBQUcsQ0FBQztRQUNsQixPQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTTs7Ozs7UUFBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTs7a0JBQ2pDLFFBQVEsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUNsQyxJQUFJLFFBQVEsSUFBSSxDQUFDLElBQUksUUFBUSxJQUFJLEdBQUcsRUFBRTtnQkFDcEMsVUFBVSxJQUFJLENBQUMsQ0FBQzthQUNqQjtpQkFBTTtnQkFDTCxVQUFVLElBQUksQ0FBQyxDQUFDO2FBQ2pCO1lBQ0QsSUFBSSxVQUFVLElBQUksU0FBUyxFQUFFO2dCQUMzQixPQUFPLEdBQUcsR0FBRyxHQUFHLENBQUM7YUFDbEI7WUFDRCxPQUFPLEdBQUcsQ0FBQztRQUNiLENBQUMsR0FBRSxFQUFFLENBQUMsQ0FBQztJQUNULENBQUM7Ozs7Ozs7Ozs7O0lBRU8sU0FBUyxDQUFDLFlBQW9CLEVBQUUsR0FBVyxFQUFFLEtBQWEsRUFBRSxHQUFXLEVBQUUsSUFBWSxFQUFFLElBQWlCOztjQUN4RyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUk7UUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUM7O1lBQzdDLEVBQUUsR0FBRyxJQUFJLENBQUMsWUFBWTtRQUUxQixJQUFJLEVBQUUsSUFBSSxZQUFZLEVBQUU7WUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDO1lBQ3JELEVBQUUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ3ZCLElBQUksRUFBRSxHQUFHLFlBQVksSUFBSSxHQUFHLEtBQUssS0FBSyxFQUFFO2dCQUN0QyxPQUFPLEdBQUcsQ0FBQzthQUNaO1lBQ0QsS0FBSyxHQUFHLEdBQUcsQ0FBQztZQUNaLEdBQUcsR0FBRyxHQUFHLEdBQUcsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7WUFDNUUsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDbEU7UUFDRCxJQUFJLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2YsT0FBTyxHQUFHLENBQUM7U0FDWjtRQUNELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQztRQUNyRCxFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUN2QixJQUFJLEVBQUUsSUFBSSxZQUFZLEVBQUU7WUFDdEIsT0FBTyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1NBQ2hCO1FBQ0QsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNWLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUM1QyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuRSxDQUFDOzs7OztJQUVPLE9BQU87Y0FDUCxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsa0JBQWtCLEVBQUUsR0FBRyxJQUFJO1FBQ2xELElBQUksQ0FBQyxHQUFHLEdBQUc7WUFDVCxRQUFRLEVBQUUsSUFBSTtZQUNkLGVBQWUsRUFBRSxLQUFLLElBQUksQ0FBQyxrQkFBa0I7WUFDN0Msc0JBQXNCLEVBQUUsS0FBSyxJQUFJLGtCQUFrQjtTQUNwRCxDQUFDO1FBQ0YsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztTQUN2QjthQUFNLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7U0FDdEI7YUFBTSxJQUFJLGtCQUFrQixFQUFFO1lBQzdCLElBQUksQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDO1NBQzFCO2FBQU07WUFDTCxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztTQUNwQjtJQUNILENBQUM7Ozs7O0lBRU8sR0FBRztjQUNILEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsb0JBQW9CLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSTtRQUNwRixJQUFJLElBQUksS0FBSyxRQUFRLEVBQUU7O2tCQUNmLEVBQUUsR0FBRyxtQkFBQSxLQUFLLENBQUMsYUFBYSxFQUFlO1lBQzdDLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUMxQixNQUFNLElBQUksS0FBSyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7YUFDckQ7O2tCQUNLLFVBQVUsR0FBRyxtQkFBQSxFQUFFLENBQUMsV0FBVyxFQUFDOztrQkFDNUIsVUFBVSxHQUFHLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxNQUFNO1lBQy9GLElBQUksVUFBVSxJQUFJLE1BQU0sSUFBSSxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUN0QyxJQUFJLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQzthQUN4QjtpQkFBTTs7b0JBQ0QsV0FBbUI7Z0JBQ3ZCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO29CQUM3QixXQUFXLEdBQUcsRUFBRSxDQUFDO2lCQUNsQjtxQkFBTTtvQkFDTCxXQUFXLEdBQUcsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2lCQUNoSDtnQkFDRCxJQUFJLENBQUMsSUFBSSxHQUFHLFdBQVcsR0FBRyxJQUFJLENBQUM7YUFDaEM7WUFDRCxNQUFNLENBQUMsR0FBRzs7O1lBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxFQUFDLENBQUM7U0FDdkM7YUFBTSxJQUFJLElBQUksS0FBSyxNQUFNLEVBQUU7a0JBQ3BCLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxHQUFHLElBQUk7O2tCQUNwQyxPQUFPLEdBQUcsbUJBQUEsV0FBVyxDQUFDLGFBQWEsRUFBZTs7a0JBQ2xELFFBQVEsR0FBRyxPQUFPLENBQUMsU0FBUyxJQUFJLG1CQUFBLE9BQU8sQ0FBQyxXQUFXLEVBQUM7O2tCQUNwRCxVQUFVLEdBQUcsUUFBUSxDQUFDLG1CQUFBLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUMsRUFBRSxFQUFFLENBQUM7O2tCQUNoRixZQUFZLEdBQUcsS0FBSyxHQUFHLFVBQVU7WUFDdkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxZQUFZLElBQUksQ0FBQztZQUVuRSxJQUFJLE9BQU8sQ0FBQyxZQUFZLElBQUksWUFBWSxFQUFFO2dCQUN4QyxJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztnQkFDckIsSUFBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO2FBQ3BDO2lCQUFNOzs7c0JBRUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxNQUFNOztzQkFDckIsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQzs7c0JBRXhCLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsWUFBWSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUM7Z0JBQ3hHLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO2dCQUNyQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQzthQUMxQjtZQUNELE1BQU0sQ0FBQyxHQUFHOzs7WUFBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLEVBQUMsQ0FBQztTQUN2QztJQUNILENBQUM7Ozs7OztJQUVPLEtBQUssQ0FBQyxHQUFXO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7OztJQUVPLGVBQWUsQ0FBQyxFQUFjO1FBQ3BDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7WUFDeEIsRUFBRSxFQUFFLENBQUM7U0FDTjthQUFNO1lBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNqRTtJQUNILENBQUM7Ozs7SUFFRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2NBQ1QsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJOztjQUNoQyxJQUFJLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxTQUFTO1FBQzFDLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pELEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsZUFBZTs7O1FBQUMsR0FBRyxFQUFFO1lBQ3hCLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNYLElBQUksSUFBSSxLQUFLLE1BQU0sRUFBRTs7c0JBQ2IsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO2dCQUNsQyxJQUFJLEVBQUUsRUFBRTtvQkFDTixFQUFFLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztpQkFDckI7YUFDRjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDaEI7SUFDSCxDQUFDOzs7WUE1TUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUNwQixRQUFRLEVBQUUsVUFBVTtnQkFDcEIsZ3BEQUF3QztnQkFDeEMsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3RDOzs7O1lBbkJDLFVBQVU7WUFHVixNQUFNO1lBS0MsWUFBWTtZQWlEYyxRQUFRLHVCQUF0QyxNQUFNLFNBQUMsUUFBUTtZQTNEbEIsaUJBQWlCOzs7b0JBOEJoQixTQUFTLFNBQUMsT0FBTyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTswQkFDcEMsU0FBUyxTQUFDLGFBQWEsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7MkJBQzFDLFNBQVMsU0FBQyxjQUFjLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO3NCQVUzQyxLQUFLO3FCQUNMLEtBQUs7b0JBQ0wsS0FBSzttQ0FDTCxLQUFLO21CQUNMLEtBQUs7O0FBSm1CO0lBQWYsWUFBWSxFQUFFOztrREFBaUI7QUFDYjtJQUFsQixXQUFXLENBQUMsSUFBSSxDQUFDOztpREFBZ0I7QUFDZjtJQUFsQixXQUFXLENBQUMsSUFBSSxDQUFDOztnREFBZTtBQUNqQjtJQUFmLFlBQVksRUFBRTs7K0RBQThCOzs7SUF0QnRELDRDQUErQzs7SUFDL0MsMkNBQTZDOztJQUM3QywwQ0FBNEM7O0lBQzVDLHlEQUE0RDs7Ozs7SUFHNUQsK0NBQWtGOzs7OztJQUNsRixrQ0FBaUU7Ozs7O0lBQ2pFLHdDQUE2RTs7Ozs7SUFDN0UseUNBQStFOzs7OztJQUMvRSxtQ0FBdUI7O0lBQ3ZCLG9DQUFrQjs7SUFDbEIsaUNBQWlCOztJQUNqQixnQ0FBUzs7SUFDVCxpQ0FBVTs7SUFDVix3Q0FBZ0I7O0lBSWhCLG9DQUF5Qzs7SUFDekMsbUNBQTJDOztJQUMzQyxrQ0FBMEM7O0lBQzFDLGlEQUFzRDs7SUFDdEQsaUNBQXNCOzs7OztJQVVwQiwrQkFBc0I7Ozs7O0lBQ3RCLG1DQUFzQjs7Ozs7SUFDdEIsZ0NBQXlCOzs7OztJQUN6QixnQ0FBdUM7Ozs7O0lBQ3ZDLGdDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uQ2hhbmdlcyxcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIsIE51bWJlcklucHV0IH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZWxsaXBzaXMnLFxuICBleHBvcnRBczogJ2VsbGlwc2lzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2VsbGlwc2lzLmNvbXBvbmVudC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBFbGxpcHNpc0NvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV90b29sdGlwOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9sZW5ndGg6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbGluZXM6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZnVsbFdpZHRoUmVjb2duaXRpb246IEJvb2xlYW5JbnB1dDtcblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tc3RyaW5nLWxpdGVyYWxcbiAgcHJpdmF0ZSBpc1N1cHBvcnRMaW5lQ2xhbXAgPSB0aGlzLmRvYy5ib2R5LnN0eWxlWyd3ZWJraXRMaW5lQ2xhbXAnXSAhPT0gdW5kZWZpbmVkO1xuICBAVmlld0NoaWxkKCdvcmdFbCcsIHsgc3RhdGljOiBmYWxzZSB9KSBwcml2YXRlIG9yZ0VsOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdzaGFkb3dPcmdFbCcsIHsgc3RhdGljOiBmYWxzZSB9KSBwcml2YXRlIHNoYWRvd09yZ0VsOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdzaGFkb3dUZXh0RWwnLCB7IHN0YXRpYzogZmFsc2UgfSkgcHJpdmF0ZSBzaGFkb3dUZXh0RWw6IEVsZW1lbnRSZWY7XG4gIHByaXZhdGUgaW5pdGVkID0gZmFsc2U7XG4gIG9yZ0h0bWw6IFNhZmVIdG1sO1xuICB0eXBlID0gJ2RlZmF1bHQnO1xuICBjbHMgPSB7fTtcbiAgdGV4dCA9ICcnO1xuICB0YXJnZXRDb3VudCA9IDA7XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgdG9vbHRpcCA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIobnVsbCkgbGVuZ3RoOiBudW1iZXI7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcihudWxsKSBsaW5lczogbnVtYmVyO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZnVsbFdpZHRoUmVjb2duaXRpb24gPSBmYWxzZTtcbiAgQElucHV0KCkgdGFpbCA9ICcuLi4nO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBnZXQgbGluc1dvcmQoKTogc3RyaW5nIHtcbiAgICBjb25zdCB7IHRhcmdldENvdW50LCB0ZXh0LCB0YWlsIH0gPSB0aGlzO1xuICAgIHJldHVybiAodGFyZ2V0Q291bnQgPiAwID8gdGV4dC5zdWJzdHJpbmcoMCwgdGFyZ2V0Q291bnQpIDogJycpICsgKHRhcmdldENvdW50ID4gMCAmJiB0YXJnZXRDb3VudCA8IHRleHQubGVuZ3RoID8gdGFpbCA6ICcnKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIGRvbTogRG9tU2FuaXRpemVyLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBEb2N1bWVudCxcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICkge31cblxuICBwcml2YXRlIGdldFN0ckZ1bGxMZW5ndGgoc3RyOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIHJldHVybiBzdHIuc3BsaXQoJycpLnJlZHVjZSgocHJlLCBjdXIpID0+IHtcbiAgICAgIGNvbnN0IGNoYXJDb2RlID0gY3VyLmNoYXJDb2RlQXQoMCk7XG4gICAgICBpZiAoY2hhckNvZGUgPj0gMCAmJiBjaGFyQ29kZSA8PSAxMjgpIHtcbiAgICAgICAgcmV0dXJuIHByZSArIDE7XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJlICsgMjtcbiAgICB9LCAwKTtcbiAgfVxuXG4gIHByaXZhdGUgY3V0U3RyQnlGdWxsTGVuZ3RoKHN0cjogc3RyaW5nLCBtYXhMZW5ndGg6IG51bWJlcik6IHN0cmluZyB7XG4gICAgbGV0IHNob3dMZW5ndGggPSAwO1xuICAgIHJldHVybiBzdHIuc3BsaXQoJycpLnJlZHVjZSgocHJlLCBjdXIpID0+IHtcbiAgICAgIGNvbnN0IGNoYXJDb2RlID0gY3VyLmNoYXJDb2RlQXQoMCk7XG4gICAgICBpZiAoY2hhckNvZGUgPj0gMCAmJiBjaGFyQ29kZSA8PSAxMjgpIHtcbiAgICAgICAgc2hvd0xlbmd0aCArPSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2hvd0xlbmd0aCArPSAyO1xuICAgICAgfVxuICAgICAgaWYgKHNob3dMZW5ndGggPD0gbWF4TGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBwcmUgKyBjdXI7XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJlO1xuICAgIH0sICcnKTtcbiAgfVxuXG4gIHByaXZhdGUgYmlzZWN0aW9uKHRhcmdldEhlaWdodDogbnVtYmVyLCBtaWQ6IG51bWJlciwgYmVnaW46IG51bWJlciwgZW5kOiBudW1iZXIsIHRleHQ6IHN0cmluZywgbm9kZTogSFRNTEVsZW1lbnQpOiBudW1iZXIge1xuICAgIGNvbnN0IHN1ZmZpeCA9IHRoaXMudGFpbDtcbiAgICBub2RlLmlubmVySFRNTCA9IHRleHQuc3Vic3RyaW5nKDAsIG1pZCkgKyBzdWZmaXg7XG4gICAgbGV0IHNoID0gbm9kZS5vZmZzZXRIZWlnaHQ7XG5cbiAgICBpZiAoc2ggPD0gdGFyZ2V0SGVpZ2h0KSB7XG4gICAgICBub2RlLmlubmVySFRNTCA9IHRleHQuc3Vic3RyaW5nKDAsIG1pZCArIDEpICsgc3VmZml4O1xuICAgICAgc2ggPSBub2RlLm9mZnNldEhlaWdodDtcbiAgICAgIGlmIChzaCA+IHRhcmdldEhlaWdodCB8fCBtaWQgPT09IGJlZ2luKSB7XG4gICAgICAgIHJldHVybiBtaWQ7XG4gICAgICB9XG4gICAgICBiZWdpbiA9IG1pZDtcbiAgICAgIG1pZCA9IGVuZCAtIGJlZ2luID09PSAxID8gYmVnaW4gKyAxIDogTWF0aC5mbG9vcigoZW5kIC0gYmVnaW4pIC8gMikgKyBiZWdpbjtcbiAgICAgIHJldHVybiB0aGlzLmJpc2VjdGlvbih0YXJnZXRIZWlnaHQsIG1pZCwgYmVnaW4sIGVuZCwgdGV4dCwgbm9kZSk7XG4gICAgfVxuICAgIGlmIChtaWQgLSAxIDwgMCkge1xuICAgICAgcmV0dXJuIG1pZDtcbiAgICB9XG4gICAgbm9kZS5pbm5lckhUTUwgPSB0ZXh0LnN1YnN0cmluZygwLCBtaWQgLSAxKSArIHN1ZmZpeDtcbiAgICBzaCA9IG5vZGUub2Zmc2V0SGVpZ2h0O1xuICAgIGlmIChzaCA8PSB0YXJnZXRIZWlnaHQpIHtcbiAgICAgIHJldHVybiBtaWQgLSAxO1xuICAgIH1cbiAgICBlbmQgPSBtaWQ7XG4gICAgbWlkID0gTWF0aC5mbG9vcigoZW5kIC0gYmVnaW4pIC8gMikgKyBiZWdpbjtcbiAgICByZXR1cm4gdGhpcy5iaXNlY3Rpb24odGFyZ2V0SGVpZ2h0LCBtaWQsIGJlZ2luLCBlbmQsIHRleHQsIG5vZGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5UeXBlKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgbGluZXMsIGxlbmd0aCwgaXNTdXBwb3J0TGluZUNsYW1wIH0gPSB0aGlzO1xuICAgIHRoaXMuY2xzID0ge1xuICAgICAgZWxsaXBzaXM6IHRydWUsXG4gICAgICBlbGxpcHNpc19fbGluZXM6IGxpbmVzICYmICFpc1N1cHBvcnRMaW5lQ2xhbXAsXG4gICAgICAnZWxsaXBzaXNfX2xpbmUtY2xhbXAnOiBsaW5lcyAmJiBpc1N1cHBvcnRMaW5lQ2xhbXAsXG4gICAgfTtcbiAgICBpZiAoIWxpbmVzICYmICFsZW5ndGgpIHtcbiAgICAgIHRoaXMudHlwZSA9ICdkZWZhdWx0JztcbiAgICB9IGVsc2UgaWYgKCFsaW5lcykge1xuICAgICAgdGhpcy50eXBlID0gJ2xlbmd0aCc7XG4gICAgfSBlbHNlIGlmIChpc1N1cHBvcnRMaW5lQ2xhbXApIHtcbiAgICAgIHRoaXMudHlwZSA9ICdsaW5lLWNsYW1wJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50eXBlID0gJ2xpbmUnO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2VuKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgdHlwZSwgbGluZXMsIGxlbmd0aCwgZnVsbFdpZHRoUmVjb2duaXRpb24sIHRhaWwsIG9yZ0VsLCBjZHIsIG5nWm9uZSB9ID0gdGhpcztcbiAgICBpZiAodHlwZSA9PT0gJ2xlbmd0aCcpIHtcbiAgICAgIGNvbnN0IGVsID0gb3JnRWwubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGlmIChlbC5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRWxsaXBzaXMgY29udGVudCBtdXN0IGJlIHN0cmluZy4nKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGxlbmd0aFRleHQgPSBlbC50ZXh0Q29udGVudCE7XG4gICAgICBjb25zdCB0ZXh0TGVuZ3RoID0gZnVsbFdpZHRoUmVjb2duaXRpb24gPyB0aGlzLmdldFN0ckZ1bGxMZW5ndGgobGVuZ3RoVGV4dCkgOiBsZW5ndGhUZXh0Lmxlbmd0aDtcbiAgICAgIGlmICh0ZXh0TGVuZ3RoIDw9IGxlbmd0aCB8fCBsZW5ndGggPCAwKSB7XG4gICAgICAgIHRoaXMudGV4dCA9IGxlbmd0aFRleHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgZGlzcGxheVRleHQ6IHN0cmluZztcbiAgICAgICAgaWYgKGxlbmd0aCAtIHRhaWwubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICBkaXNwbGF5VGV4dCA9ICcnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRpc3BsYXlUZXh0ID0gZnVsbFdpZHRoUmVjb2duaXRpb24gPyB0aGlzLmN1dFN0ckJ5RnVsbExlbmd0aChsZW5ndGhUZXh0LCBsZW5ndGgpIDogbGVuZ3RoVGV4dC5zbGljZSgwLCBsZW5ndGgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudGV4dCA9IGRpc3BsYXlUZXh0ICsgdGFpbDtcbiAgICAgIH1cbiAgICAgIG5nWm9uZS5ydW4oKCkgPT4gY2RyLmRldGVjdENoYW5nZXMoKSk7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnbGluZScpIHtcbiAgICAgIGNvbnN0IHsgc2hhZG93T3JnRWwsIHNoYWRvd1RleHRFbCB9ID0gdGhpcztcbiAgICAgIGNvbnN0IG9yZ05vZGUgPSBzaGFkb3dPcmdFbC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgICAgY29uc3QgbGluZVRleHQgPSBvcmdOb2RlLmlubmVyVGV4dCB8fCBvcmdOb2RlLnRleHRDb250ZW50ITtcbiAgICAgIGNvbnN0IGxpbmVIZWlnaHQgPSBwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKHRoaXMuZ2V0RWwoJy5lbGxpcHNpcycpKS5saW5lSGVpZ2h0ISwgMTApO1xuICAgICAgY29uc3QgdGFyZ2V0SGVpZ2h0ID0gbGluZXMgKiBsaW5lSGVpZ2h0O1xuICAgICAgdGhpcy5nZXRFbCgnLmVsbGlwc2lzX19oYW5kbGUnKS5zdHlsZS5oZWlnaHQgPSBgJHt0YXJnZXRIZWlnaHR9cHhgO1xuXG4gICAgICBpZiAob3JnTm9kZS5vZmZzZXRIZWlnaHQgPD0gdGFyZ2V0SGVpZ2h0KSB7XG4gICAgICAgIHRoaXMudGV4dCA9IGxpbmVUZXh0O1xuICAgICAgICB0aGlzLnRhcmdldENvdW50ID0gbGluZVRleHQubGVuZ3RoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gYmlzZWN0aW9uXG4gICAgICAgIGNvbnN0IGxlbiA9IGxpbmVUZXh0Lmxlbmd0aDtcbiAgICAgICAgY29uc3QgbWlkID0gTWF0aC5jZWlsKGxlbiAvIDIpO1xuXG4gICAgICAgIGNvbnN0IGNvdW50ID0gdGhpcy5iaXNlY3Rpb24odGFyZ2V0SGVpZ2h0LCBtaWQsIDAsIGxlbiwgbGluZVRleHQsIHNoYWRvd1RleHRFbC5uYXRpdmVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgICB0aGlzLnRleHQgPSBsaW5lVGV4dDtcbiAgICAgICAgdGhpcy50YXJnZXRDb3VudCA9IGNvdW50O1xuICAgICAgfVxuICAgICAgbmdab25lLnJ1bigoKSA9PiBjZHIuZGV0ZWN0Q2hhbmdlcygpKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldEVsKGNsczogc3RyaW5nKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcihjbHMpO1xuICB9XG5cbiAgcHJpdmF0ZSBleGVjdXRlT25TdGFibGUoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uZ1pvbmUuaXNTdGFibGUpIHtcbiAgICAgIGZuKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubmdab25lLm9uU3RhYmxlLmFzT2JzZXJ2YWJsZSgpLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKGZuKTtcbiAgICB9XG4gIH1cblxuICByZWZyZXNoKCk6IHZvaWQge1xuICAgIHRoaXMuZ2VuVHlwZSgpO1xuICAgIGNvbnN0IHsgdHlwZSwgZG9tLCBvcmdFbCwgY2RyIH0gPSB0aGlzO1xuICAgIGNvbnN0IGh0bWwgPSBvcmdFbC5uYXRpdmVFbGVtZW50LmlubmVySFRNTDtcbiAgICB0aGlzLm9yZ0h0bWwgPSBkb20uYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoaHRtbCk7XG4gICAgY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB0aGlzLmV4ZWN1dGVPblN0YWJsZSgoKSA9PiB7XG4gICAgICB0aGlzLmdlbigpO1xuICAgICAgaWYgKHR5cGUgIT09ICdsaW5lJykge1xuICAgICAgICBjb25zdCBlbCA9IHRoaXMuZ2V0RWwoJy5lbGxpcHNpcycpO1xuICAgICAgICBpZiAoZWwpIHtcbiAgICAgICAgICBlbC5pbm5lckhUTUwgPSBodG1sO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pbml0ZWQgPSB0cnVlO1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW5pdGVkKSB7XG4gICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==