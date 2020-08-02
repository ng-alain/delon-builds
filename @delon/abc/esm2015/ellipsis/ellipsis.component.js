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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxsaXBzaXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL2VsbGlwc2lzL2VsbGlwc2lzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixNQUFNLEVBQ04sS0FBSyxFQUNMLE1BQU0sRUFFTixTQUFTLEVBQ1QsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQVksTUFBTSwyQkFBMkIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN4RCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFVdEMsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7Ozs7SUE0QjVCLFlBQ1UsRUFBYyxFQUNkLE1BQWMsRUFDZCxHQUFpQixFQUNDLEdBQWEsRUFDL0IsR0FBc0I7UUFKdEIsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxRQUFHLEdBQUgsR0FBRyxDQUFjO1FBQ0MsUUFBRyxHQUFILEdBQUcsQ0FBVTtRQUMvQixRQUFHLEdBQUgsR0FBRyxDQUFtQjs7UUEvQnhCLHVCQUFrQixHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLFNBQVMsQ0FBQztRQUkxRSxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBRXZCLFNBQUksR0FBRyxTQUFTLENBQUM7UUFDakIsUUFBRyxHQUFHLEVBQUUsQ0FBQztRQUNULFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVixnQkFBVyxHQUFHLENBQUMs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Ozs7OztJQWhCdEQsK0NBQWtGOzs7OztJQUNsRixrQ0FBaUU7Ozs7O0lBQ2pFLHdDQUE2RTs7Ozs7SUFDN0UseUNBQStFOzs7OztJQUMvRSxtQ0FBdUI7O0lBQ3ZCLG9DQUFrQjs7SUFDbEIsaUNBQWlCOztJQUNqQixnQ0FBUzs7SUFDVCxpQ0FBVTs7SUFDVix3Q0FBZ0I7O0lBSWhCLG9DQUF5Qzs7SUFDekMsbUNBQTJDOztJQUMzQyxrQ0FBMEM7O0lBQzFDLGlEQUFzRDs7SUFDdEQsaUNBQXNCOzs7OztJQVVwQiwrQkFBc0I7Ozs7O0lBQ3RCLG1DQUFzQjs7Ozs7SUFDdEIsZ0NBQXlCOzs7OztJQUN6QixnQ0FBdUM7Ozs7O0lBQ3ZDLGdDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uQ2hhbmdlcyxcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZWxsaXBzaXMnLFxuICBleHBvcnRBczogJ2VsbGlwc2lzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2VsbGlwc2lzLmNvbXBvbmVudC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBFbGxpcHNpc0NvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1zdHJpbmctbGl0ZXJhbFxuICBwcml2YXRlIGlzU3VwcG9ydExpbmVDbGFtcCA9IHRoaXMuZG9jLmJvZHkuc3R5bGVbJ3dlYmtpdExpbmVDbGFtcCddICE9PSB1bmRlZmluZWQ7XG4gIEBWaWV3Q2hpbGQoJ29yZ0VsJywgeyBzdGF0aWM6IGZhbHNlIH0pIHByaXZhdGUgb3JnRWw6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3NoYWRvd09yZ0VsJywgeyBzdGF0aWM6IGZhbHNlIH0pIHByaXZhdGUgc2hhZG93T3JnRWw6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3NoYWRvd1RleHRFbCcsIHsgc3RhdGljOiBmYWxzZSB9KSBwcml2YXRlIHNoYWRvd1RleHRFbDogRWxlbWVudFJlZjtcbiAgcHJpdmF0ZSBpbml0ZWQgPSBmYWxzZTtcbiAgb3JnSHRtbDogU2FmZUh0bWw7XG4gIHR5cGUgPSAnZGVmYXVsdCc7XG4gIGNscyA9IHt9O1xuICB0ZXh0ID0gJyc7XG4gIHRhcmdldENvdW50ID0gMDtcblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSB0b29sdGlwID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcihudWxsKSBsZW5ndGg6IG51bWJlcjtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKG51bGwpIGxpbmVzOiBudW1iZXI7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBmdWxsV2lkdGhSZWNvZ25pdGlvbiA9IGZhbHNlO1xuICBASW5wdXQoKSB0YWlsID0gJy4uLic7XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGdldCBsaW5zV29yZCgpOiBzdHJpbmcge1xuICAgIGNvbnN0IHsgdGFyZ2V0Q291bnQsIHRleHQsIHRhaWwgfSA9IHRoaXM7XG4gICAgcmV0dXJuICh0YXJnZXRDb3VudCA+IDAgPyB0ZXh0LnN1YnN0cmluZygwLCB0YXJnZXRDb3VudCkgOiAnJykgKyAodGFyZ2V0Q291bnQgPiAwICYmIHRhcmdldENvdW50IDwgdGV4dC5sZW5ndGggPyB0YWlsIDogJycpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxuICAgIHByaXZhdGUgZG9tOiBEb21TYW5pdGl6ZXIsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IERvY3VtZW50LFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgKSB7fVxuXG4gIHByaXZhdGUgZ2V0U3RyRnVsbExlbmd0aChzdHI6IHN0cmluZyk6IG51bWJlciB7XG4gICAgcmV0dXJuIHN0ci5zcGxpdCgnJykucmVkdWNlKChwcmUsIGN1cikgPT4ge1xuICAgICAgY29uc3QgY2hhckNvZGUgPSBjdXIuY2hhckNvZGVBdCgwKTtcbiAgICAgIGlmIChjaGFyQ29kZSA+PSAwICYmIGNoYXJDb2RlIDw9IDEyOCkge1xuICAgICAgICByZXR1cm4gcHJlICsgMTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwcmUgKyAyO1xuICAgIH0sIDApO1xuICB9XG5cbiAgcHJpdmF0ZSBjdXRTdHJCeUZ1bGxMZW5ndGgoc3RyOiBzdHJpbmcsIG1heExlbmd0aDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBsZXQgc2hvd0xlbmd0aCA9IDA7XG4gICAgcmV0dXJuIHN0ci5zcGxpdCgnJykucmVkdWNlKChwcmUsIGN1cikgPT4ge1xuICAgICAgY29uc3QgY2hhckNvZGUgPSBjdXIuY2hhckNvZGVBdCgwKTtcbiAgICAgIGlmIChjaGFyQ29kZSA+PSAwICYmIGNoYXJDb2RlIDw9IDEyOCkge1xuICAgICAgICBzaG93TGVuZ3RoICs9IDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaG93TGVuZ3RoICs9IDI7XG4gICAgICB9XG4gICAgICBpZiAoc2hvd0xlbmd0aCA8PSBtYXhMZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHByZSArIGN1cjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwcmU7XG4gICAgfSwgJycpO1xuICB9XG5cbiAgcHJpdmF0ZSBiaXNlY3Rpb24odGFyZ2V0SGVpZ2h0OiBudW1iZXIsIG1pZDogbnVtYmVyLCBiZWdpbjogbnVtYmVyLCBlbmQ6IG51bWJlciwgdGV4dDogc3RyaW5nLCBub2RlOiBIVE1MRWxlbWVudCk6IG51bWJlciB7XG4gICAgY29uc3Qgc3VmZml4ID0gdGhpcy50YWlsO1xuICAgIG5vZGUuaW5uZXJIVE1MID0gdGV4dC5zdWJzdHJpbmcoMCwgbWlkKSArIHN1ZmZpeDtcbiAgICBsZXQgc2ggPSBub2RlLm9mZnNldEhlaWdodDtcblxuICAgIGlmIChzaCA8PSB0YXJnZXRIZWlnaHQpIHtcbiAgICAgIG5vZGUuaW5uZXJIVE1MID0gdGV4dC5zdWJzdHJpbmcoMCwgbWlkICsgMSkgKyBzdWZmaXg7XG4gICAgICBzaCA9IG5vZGUub2Zmc2V0SGVpZ2h0O1xuICAgICAgaWYgKHNoID4gdGFyZ2V0SGVpZ2h0IHx8IG1pZCA9PT0gYmVnaW4pIHtcbiAgICAgICAgcmV0dXJuIG1pZDtcbiAgICAgIH1cbiAgICAgIGJlZ2luID0gbWlkO1xuICAgICAgbWlkID0gZW5kIC0gYmVnaW4gPT09IDEgPyBiZWdpbiArIDEgOiBNYXRoLmZsb29yKChlbmQgLSBiZWdpbikgLyAyKSArIGJlZ2luO1xuICAgICAgcmV0dXJuIHRoaXMuYmlzZWN0aW9uKHRhcmdldEhlaWdodCwgbWlkLCBiZWdpbiwgZW5kLCB0ZXh0LCBub2RlKTtcbiAgICB9XG4gICAgaWYgKG1pZCAtIDEgPCAwKSB7XG4gICAgICByZXR1cm4gbWlkO1xuICAgIH1cbiAgICBub2RlLmlubmVySFRNTCA9IHRleHQuc3Vic3RyaW5nKDAsIG1pZCAtIDEpICsgc3VmZml4O1xuICAgIHNoID0gbm9kZS5vZmZzZXRIZWlnaHQ7XG4gICAgaWYgKHNoIDw9IHRhcmdldEhlaWdodCkge1xuICAgICAgcmV0dXJuIG1pZCAtIDE7XG4gICAgfVxuICAgIGVuZCA9IG1pZDtcbiAgICBtaWQgPSBNYXRoLmZsb29yKChlbmQgLSBiZWdpbikgLyAyKSArIGJlZ2luO1xuICAgIHJldHVybiB0aGlzLmJpc2VjdGlvbih0YXJnZXRIZWlnaHQsIG1pZCwgYmVnaW4sIGVuZCwgdGV4dCwgbm9kZSk7XG4gIH1cblxuICBwcml2YXRlIGdlblR5cGUoKTogdm9pZCB7XG4gICAgY29uc3QgeyBsaW5lcywgbGVuZ3RoLCBpc1N1cHBvcnRMaW5lQ2xhbXAgfSA9IHRoaXM7XG4gICAgdGhpcy5jbHMgPSB7XG4gICAgICBlbGxpcHNpczogdHJ1ZSxcbiAgICAgIGVsbGlwc2lzX19saW5lczogbGluZXMgJiYgIWlzU3VwcG9ydExpbmVDbGFtcCxcbiAgICAgICdlbGxpcHNpc19fbGluZS1jbGFtcCc6IGxpbmVzICYmIGlzU3VwcG9ydExpbmVDbGFtcCxcbiAgICB9O1xuICAgIGlmICghbGluZXMgJiYgIWxlbmd0aCkge1xuICAgICAgdGhpcy50eXBlID0gJ2RlZmF1bHQnO1xuICAgIH0gZWxzZSBpZiAoIWxpbmVzKSB7XG4gICAgICB0aGlzLnR5cGUgPSAnbGVuZ3RoJztcbiAgICB9IGVsc2UgaWYgKGlzU3VwcG9ydExpbmVDbGFtcCkge1xuICAgICAgdGhpcy50eXBlID0gJ2xpbmUtY2xhbXAnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnR5cGUgPSAnbGluZSc7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZW4oKTogdm9pZCB7XG4gICAgY29uc3QgeyB0eXBlLCBsaW5lcywgbGVuZ3RoLCBmdWxsV2lkdGhSZWNvZ25pdGlvbiwgdGFpbCwgb3JnRWwsIGNkciwgbmdab25lIH0gPSB0aGlzO1xuICAgIGlmICh0eXBlID09PSAnbGVuZ3RoJykge1xuICAgICAgY29uc3QgZWwgPSBvcmdFbC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgICAgaWYgKGVsLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFbGxpcHNpcyBjb250ZW50IG11c3QgYmUgc3RyaW5nLicpO1xuICAgICAgfVxuICAgICAgY29uc3QgbGVuZ3RoVGV4dCA9IGVsLnRleHRDb250ZW50ITtcbiAgICAgIGNvbnN0IHRleHRMZW5ndGggPSBmdWxsV2lkdGhSZWNvZ25pdGlvbiA/IHRoaXMuZ2V0U3RyRnVsbExlbmd0aChsZW5ndGhUZXh0KSA6IGxlbmd0aFRleHQubGVuZ3RoO1xuICAgICAgaWYgKHRleHRMZW5ndGggPD0gbGVuZ3RoIHx8IGxlbmd0aCA8IDApIHtcbiAgICAgICAgdGhpcy50ZXh0ID0gbGVuZ3RoVGV4dDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBkaXNwbGF5VGV4dDogc3RyaW5nO1xuICAgICAgICBpZiAobGVuZ3RoIC0gdGFpbC5sZW5ndGggPD0gMCkge1xuICAgICAgICAgIGRpc3BsYXlUZXh0ID0gJyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGlzcGxheVRleHQgPSBmdWxsV2lkdGhSZWNvZ25pdGlvbiA/IHRoaXMuY3V0U3RyQnlGdWxsTGVuZ3RoKGxlbmd0aFRleHQsIGxlbmd0aCkgOiBsZW5ndGhUZXh0LnNsaWNlKDAsIGxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50ZXh0ID0gZGlzcGxheVRleHQgKyB0YWlsO1xuICAgICAgfVxuICAgICAgbmdab25lLnJ1bigoKSA9PiBjZHIuZGV0ZWN0Q2hhbmdlcygpKTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdsaW5lJykge1xuICAgICAgY29uc3QgeyBzaGFkb3dPcmdFbCwgc2hhZG93VGV4dEVsIH0gPSB0aGlzO1xuICAgICAgY29uc3Qgb3JnTm9kZSA9IHNoYWRvd09yZ0VsLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBjb25zdCBsaW5lVGV4dCA9IG9yZ05vZGUuaW5uZXJUZXh0IHx8IG9yZ05vZGUudGV4dENvbnRlbnQhO1xuICAgICAgY29uc3QgbGluZUhlaWdodCA9IHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUodGhpcy5nZXRFbCgnLmVsbGlwc2lzJykpLmxpbmVIZWlnaHQhLCAxMCk7XG4gICAgICBjb25zdCB0YXJnZXRIZWlnaHQgPSBsaW5lcyAqIGxpbmVIZWlnaHQ7XG4gICAgICB0aGlzLmdldEVsKCcuZWxsaXBzaXNfX2hhbmRsZScpLnN0eWxlLmhlaWdodCA9IGAke3RhcmdldEhlaWdodH1weGA7XG5cbiAgICAgIGlmIChvcmdOb2RlLm9mZnNldEhlaWdodCA8PSB0YXJnZXRIZWlnaHQpIHtcbiAgICAgICAgdGhpcy50ZXh0ID0gbGluZVRleHQ7XG4gICAgICAgIHRoaXMudGFyZ2V0Q291bnQgPSBsaW5lVGV4dC5sZW5ndGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBiaXNlY3Rpb25cbiAgICAgICAgY29uc3QgbGVuID0gbGluZVRleHQubGVuZ3RoO1xuICAgICAgICBjb25zdCBtaWQgPSBNYXRoLmNlaWwobGVuIC8gMik7XG5cbiAgICAgICAgY29uc3QgY291bnQgPSB0aGlzLmJpc2VjdGlvbih0YXJnZXRIZWlnaHQsIG1pZCwgMCwgbGVuLCBsaW5lVGV4dCwgc2hhZG93VGV4dEVsLm5hdGl2ZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgICAgIHRoaXMudGV4dCA9IGxpbmVUZXh0O1xuICAgICAgICB0aGlzLnRhcmdldENvdW50ID0gY291bnQ7XG4gICAgICB9XG4gICAgICBuZ1pvbmUucnVuKCgpID0+IGNkci5kZXRlY3RDaGFuZ2VzKCkpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0RWwoY2xzOiBzdHJpbmcpOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuZWwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKGNscyk7XG4gIH1cblxuICBwcml2YXRlIGV4ZWN1dGVPblN0YWJsZShmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm5nWm9uZS5pc1N0YWJsZSkge1xuICAgICAgZm4oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5uZ1pvbmUub25TdGFibGUuYXNPYnNlcnZhYmxlKCkucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoZm4pO1xuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2goKTogdm9pZCB7XG4gICAgdGhpcy5nZW5UeXBlKCk7XG4gICAgY29uc3QgeyB0eXBlLCBkb20sIG9yZ0VsLCBjZHIgfSA9IHRoaXM7XG4gICAgY29uc3QgaHRtbCA9IG9yZ0VsLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MO1xuICAgIHRoaXMub3JnSHRtbCA9IGRvbS5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChodG1sKTtcbiAgICBjZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHRoaXMuZXhlY3V0ZU9uU3RhYmxlKCgpID0+IHtcbiAgICAgIHRoaXMuZ2VuKCk7XG4gICAgICBpZiAodHlwZSAhPT0gJ2xpbmUnKSB7XG4gICAgICAgIGNvbnN0IGVsID0gdGhpcy5nZXRFbCgnLmVsbGlwc2lzJyk7XG4gICAgICAgIGlmIChlbCkge1xuICAgICAgICAgIGVsLmlubmVySFRNTCA9IGh0bWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmluaXRlZCA9IHRydWU7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pbml0ZWQpIHtcbiAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgIH1cbiAgfVxufVxuIl19