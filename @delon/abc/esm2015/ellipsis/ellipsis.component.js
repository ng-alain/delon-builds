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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxsaXBzaXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9lbGxpcHNpcy8iLCJzb3VyY2VzIjpbImVsbGlwc2lzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLE1BQU0sRUFDTixLQUFLLEVBQ0wsTUFBTSxFQUVOLFNBQVMsRUFDVCxpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBWSxNQUFNLDJCQUEyQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQVV0QyxNQUFNLE9BQU8saUJBQWlCOzs7Ozs7OztJQStCNUIsWUFDVSxFQUFjLEVBQ2QsTUFBYyxFQUNkLEdBQWlCLEVBQ0MsR0FBYSxFQUMvQixHQUFzQjtRQUp0QixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2QsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFFBQUcsR0FBSCxHQUFHLENBQWM7UUFDQyxRQUFHLEdBQUgsR0FBRyxDQUFVO1FBQy9CLFFBQUcsR0FBSCxHQUFHLENBQW1COztRQWxDeEIsdUJBQWtCLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEtBQUssU0FBUyxDQUFDO1FBSTFFLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFFdkIsU0FBSSxHQUFHLFNBQVMsQ0FBQztRQUNqQixRQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ1QsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLGdCQUFXLEdBQUcsQ0FBQyxDQUFDOztRQUlTLFlB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QUFZLEVBQUU7OytEQUE4Qjs7Ozs7O0lBaEJ0RCwrQ0FBa0Y7Ozs7O0lBQ2xGLGtDQUFpRTs7Ozs7SUFDakUsd0NBQTZFOzs7OztJQUM3RSx5Q0FBK0U7Ozs7O0lBQy9FLG1DQUF1Qjs7SUFDdkIsb0NBQWtCOztJQUNsQixpQ0FBaUI7O0lBQ2pCLGdDQUFTOztJQUNULGlDQUFVOztJQUNWLHdDQUFnQjs7SUFJaEIsb0NBQXlDOztJQUN6QyxtQ0FBMkM7O0lBQzNDLGtDQUEwQzs7SUFDMUMsaURBQXNEOztJQUN0RCxpQ0FBc0I7Ozs7O0lBYXBCLCtCQUFzQjs7Ozs7SUFDdEIsbUNBQXNCOzs7OztJQUN0QixnQ0FBeUI7Ozs7O0lBQ3pCLGdDQUF1Qzs7Ozs7SUFDdkMsZ0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25DaGFuZ2VzLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlbGxpcHNpcycsXG4gIGV4cG9ydEFzOiAnZWxsaXBzaXMnLFxuICB0ZW1wbGF0ZVVybDogJy4vZWxsaXBzaXMuY29tcG9uZW50Lmh0bWwnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIEVsbGlwc2lzQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXN0cmluZy1saXRlcmFsXG4gIHByaXZhdGUgaXNTdXBwb3J0TGluZUNsYW1wID0gdGhpcy5kb2MuYm9keS5zdHlsZVsnd2Via2l0TGluZUNsYW1wJ10gIT09IHVuZGVmaW5lZDtcbiAgQFZpZXdDaGlsZCgnb3JnRWwnLCB7IHN0YXRpYzogZmFsc2UgfSkgcHJpdmF0ZSBvcmdFbDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnc2hhZG93T3JnRWwnLCB7IHN0YXRpYzogZmFsc2UgfSkgcHJpdmF0ZSBzaGFkb3dPcmdFbDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnc2hhZG93VGV4dEVsJywgeyBzdGF0aWM6IGZhbHNlIH0pIHByaXZhdGUgc2hhZG93VGV4dEVsOiBFbGVtZW50UmVmO1xuICBwcml2YXRlIGluaXRlZCA9IGZhbHNlO1xuICBvcmdIdG1sOiBTYWZlSHRtbDtcbiAgdHlwZSA9ICdkZWZhdWx0JztcbiAgY2xzID0ge307XG4gIHRleHQgPSAnJztcbiAgdGFyZ2V0Q291bnQgPSAwO1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHRvb2x0aXAgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKG51bGwpIGxlbmd0aDogbnVtYmVyO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIobnVsbCkgbGluZXM6IG51bWJlcjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGZ1bGxXaWR0aFJlY29nbml0aW9uID0gZmFsc2U7XG4gIEBJbnB1dCgpIHRhaWwgPSAnLi4uJztcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgZ2V0IGxpbnNXb3JkKCk6IHN0cmluZyB7XG4gICAgY29uc3QgeyB0YXJnZXRDb3VudCwgdGV4dCwgdGFpbCB9ID0gdGhpcztcbiAgICByZXR1cm4gKFxuICAgICAgKHRhcmdldENvdW50ID4gMCA/IHRleHQuc3Vic3RyaW5nKDAsIHRhcmdldENvdW50KSA6ICcnKSArXG4gICAgICAodGFyZ2V0Q291bnQgPiAwICYmIHRhcmdldENvdW50IDwgdGV4dC5sZW5ndGggPyB0YWlsIDogJycpXG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIGRvbTogRG9tU2FuaXRpemVyLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBEb2N1bWVudCxcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICkge31cblxuICBwcml2YXRlIGdldFN0ckZ1bGxMZW5ndGgoc3RyOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIHJldHVybiBzdHIuc3BsaXQoJycpLnJlZHVjZSgocHJlLCBjdXIpID0+IHtcbiAgICAgIGNvbnN0IGNoYXJDb2RlID0gY3VyLmNoYXJDb2RlQXQoMCk7XG4gICAgICBpZiAoY2hhckNvZGUgPj0gMCAmJiBjaGFyQ29kZSA8PSAxMjgpIHtcbiAgICAgICAgcmV0dXJuIHByZSArIDE7XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJlICsgMjtcbiAgICB9LCAwKTtcbiAgfVxuXG4gIHByaXZhdGUgY3V0U3RyQnlGdWxsTGVuZ3RoKHN0cjogc3RyaW5nLCBtYXhMZW5ndGg6IG51bWJlcikge1xuICAgIGxldCBzaG93TGVuZ3RoID0gMDtcbiAgICByZXR1cm4gc3RyLnNwbGl0KCcnKS5yZWR1Y2UoKHByZSwgY3VyKSA9PiB7XG4gICAgICBjb25zdCBjaGFyQ29kZSA9IGN1ci5jaGFyQ29kZUF0KDApO1xuICAgICAgaWYgKGNoYXJDb2RlID49IDAgJiYgY2hhckNvZGUgPD0gMTI4KSB7XG4gICAgICAgIHNob3dMZW5ndGggKz0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNob3dMZW5ndGggKz0gMjtcbiAgICAgIH1cbiAgICAgIGlmIChzaG93TGVuZ3RoIDw9IG1heExlbmd0aCkge1xuICAgICAgICByZXR1cm4gcHJlICsgY3VyO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHByZTtcbiAgICB9LCAnJyk7XG4gIH1cblxuICBwcml2YXRlIGJpc2VjdGlvbihcbiAgICB0aDogbnVtYmVyLFxuICAgIG06IG51bWJlcixcbiAgICBiOiBudW1iZXIsXG4gICAgZTogbnVtYmVyLFxuICAgIHRleHQ6IHN0cmluZyxcbiAgICBzaGFkb3dOb2RlOiBIVE1MRWxlbWVudCxcbiAgKTogbnVtYmVyIHtcbiAgICBjb25zdCBzdWZmaXggPSB0aGlzLnRhaWw7XG4gICAgbGV0IG1pZCA9IG07XG4gICAgbGV0IGVuZCA9IGU7XG4gICAgbGV0IGJlZ2luID0gYjtcbiAgICBzaGFkb3dOb2RlLmlubmVySFRNTCA9IHRleHQuc3Vic3RyaW5nKDAsIG1pZCkgKyBzdWZmaXg7XG4gICAgbGV0IHNoID0gc2hhZG93Tm9kZS5vZmZzZXRIZWlnaHQ7XG5cbiAgICBpZiAoc2ggPD0gdGgpIHtcbiAgICAgIHNoYWRvd05vZGUuaW5uZXJIVE1MID0gdGV4dC5zdWJzdHJpbmcoMCwgbWlkICsgMSkgKyBzdWZmaXg7XG4gICAgICBzaCA9IHNoYWRvd05vZGUub2Zmc2V0SGVpZ2h0O1xuICAgICAgaWYgKHNoID4gdGggfHwgbWlkID09PSBiZWdpbikge1xuICAgICAgICByZXR1cm4gbWlkO1xuICAgICAgfVxuICAgICAgYmVnaW4gPSBtaWQ7XG4gICAgICBtaWQgPSBlbmQgLSBiZWdpbiA9PT0gMSA/IGJlZ2luICsgMSA6IE1hdGguZmxvb3IoKGVuZCAtIGJlZ2luKSAvIDIpICsgYmVnaW47XG4gICAgICByZXR1cm4gdGhpcy5iaXNlY3Rpb24odGgsIG1pZCwgYmVnaW4sIGVuZCwgdGV4dCwgc2hhZG93Tm9kZSk7XG4gICAgfVxuICAgIGlmIChtaWQgLSAxIDwgMCkge1xuICAgICAgcmV0dXJuIG1pZDtcbiAgICB9XG4gICAgc2hhZG93Tm9kZS5pbm5lckhUTUwgPSB0ZXh0LnN1YnN0cmluZygwLCBtaWQgLSAxKSArIHN1ZmZpeDtcbiAgICBzaCA9IHNoYWRvd05vZGUub2Zmc2V0SGVpZ2h0O1xuICAgIGlmIChzaCA8PSB0aCkge1xuICAgICAgcmV0dXJuIG1pZCAtIDE7XG4gICAgfVxuICAgIGVuZCA9IG1pZDtcbiAgICBtaWQgPSBNYXRoLmZsb29yKChlbmQgLSBiZWdpbikgLyAyKSArIGJlZ2luO1xuICAgIHJldHVybiB0aGlzLmJpc2VjdGlvbih0aCwgbWlkLCBiZWdpbiwgZW5kLCB0ZXh0LCBzaGFkb3dOb2RlKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuVHlwZSgpIHtcbiAgICBjb25zdCB7IGxpbmVzLCBsZW5ndGgsIGlzU3VwcG9ydExpbmVDbGFtcCwgY2RyIH0gPSB0aGlzO1xuICAgIHRoaXMuY2xzID0ge1xuICAgICAgZWxsaXBzaXM6IHRydWUsXG4gICAgICBlbGxpcHNpc19fbGluZXM6IGxpbmVzICYmICFpc1N1cHBvcnRMaW5lQ2xhbXAsXG4gICAgICAnZWxsaXBzaXNfX2xpbmUtY2xhbXAnOiBsaW5lcyAmJiBpc1N1cHBvcnRMaW5lQ2xhbXAsXG4gICAgfTtcbiAgICBpZiAoIWxpbmVzICYmICFsZW5ndGgpIHtcbiAgICAgIHRoaXMudHlwZSA9ICdkZWZhdWx0JztcbiAgICB9IGVsc2UgaWYgKCFsaW5lcykge1xuICAgICAgdGhpcy50eXBlID0gJ2xlbmd0aCc7XG4gICAgfSBlbHNlIGlmIChpc1N1cHBvcnRMaW5lQ2xhbXApIHtcbiAgICAgIHRoaXMudHlwZSA9ICdsaW5lLWNsYW1wJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50eXBlID0gJ2xpbmUnO1xuICAgIH1cbiAgICBjZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW4oKSB7XG4gICAgY29uc3QgeyB0eXBlLCBsaW5lcywgbGVuZ3RoLCBmdWxsV2lkdGhSZWNvZ25pdGlvbiwgdGFpbCwgb3JnRWwsIGNkciB9ID0gdGhpcztcbiAgICBpZiAodHlwZSA9PT0gJ2xlbmd0aCcpIHtcbiAgICAgIGNvbnN0IGVsID0gb3JnRWwubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGlmIChlbC5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRWxsaXBzaXMgY29udGVudCBtdXN0IGJlIHN0cmluZy4nKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHRleHQgPSBlbC50ZXh0Q29udGVudCE7XG4gICAgICBjb25zdCB0ZXh0TGVuZ3RoID0gZnVsbFdpZHRoUmVjb2duaXRpb24gPyB0aGlzLmdldFN0ckZ1bGxMZW5ndGgodGV4dCkgOiB0ZXh0Lmxlbmd0aDtcbiAgICAgIGlmICh0ZXh0TGVuZ3RoIDw9IGxlbmd0aCB8fCBsZW5ndGggPCAwKSB7XG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgZGlzcGxheVRleHQ6IHN0cmluZztcbiAgICAgICAgaWYgKGxlbmd0aCAtIHRhaWwubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICBkaXNwbGF5VGV4dCA9ICcnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRpc3BsYXlUZXh0ID0gZnVsbFdpZHRoUmVjb2duaXRpb25cbiAgICAgICAgICAgID8gdGhpcy5jdXRTdHJCeUZ1bGxMZW5ndGgodGV4dCwgbGVuZ3RoKVxuICAgICAgICAgICAgOiB0ZXh0LnNsaWNlKDAsIGxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50ZXh0ID0gZGlzcGxheVRleHQgKyB0YWlsO1xuICAgICAgfVxuICAgICAgY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdsaW5lJykge1xuICAgICAgY29uc3QgeyBzaGFkb3dPcmdFbCwgc2hhZG93VGV4dEVsIH0gPSB0aGlzO1xuICAgICAgY29uc3Qgb3JnTm9kZSA9IHNoYWRvd09yZ0VsLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBjb25zdCB0ZXh0ID0gb3JnTm9kZS5pbm5lclRleHQgfHwgb3JnTm9kZS50ZXh0Q29udGVudCE7XG4gICAgICBjb25zdCBsaW5lSGVpZ2h0ID0gcGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmdldEVsKCcuZWxsaXBzaXMnKSkubGluZUhlaWdodCEsIDEwKTtcbiAgICAgIGNvbnN0IHRhcmdldEhlaWdodCA9IGxpbmVzICogbGluZUhlaWdodDtcbiAgICAgIHRoaXMuZ2V0RWwoJy5lbGxpcHNpc19faGFuZGxlJykuc3R5bGUuaGVpZ2h0ID0gYCR7dGFyZ2V0SGVpZ2h0fXB4YDtcblxuICAgICAgaWYgKG9yZ05vZGUub2Zmc2V0SGVpZ2h0IDw9IHRhcmdldEhlaWdodCkge1xuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgICB0aGlzLnRhcmdldENvdW50ID0gdGV4dC5sZW5ndGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBiaXNlY3Rpb25cbiAgICAgICAgY29uc3QgbGVuID0gdGV4dC5sZW5ndGg7XG4gICAgICAgIGNvbnN0IG1pZCA9IE1hdGguY2VpbChsZW4gLyAyKTtcblxuICAgICAgICBjb25zdCBjb3VudCA9IHRoaXMuYmlzZWN0aW9uKFxuICAgICAgICAgIHRhcmdldEhlaWdodCxcbiAgICAgICAgICBtaWQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICBsZW4sXG4gICAgICAgICAgdGV4dCxcbiAgICAgICAgICBzaGFkb3dUZXh0RWwubmF0aXZlRWxlbWVudC5maXJzdENoaWxkLFxuICAgICAgICApO1xuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgICB0aGlzLnRhcmdldENvdW50ID0gY291bnQ7XG4gICAgICB9XG4gICAgICBjZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0RWwoY2xzOiBzdHJpbmcpOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuZWwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKGNscyk7XG4gIH1cblxuICBwcml2YXRlIGV4ZWN1dGVPblN0YWJsZShmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm5nWm9uZS5pc1N0YWJsZSkge1xuICAgICAgZm4oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5uZ1pvbmUub25TdGFibGVcbiAgICAgICAgLmFzT2JzZXJ2YWJsZSgpXG4gICAgICAgIC5waXBlKHRha2UoMSkpXG4gICAgICAgIC5zdWJzY3JpYmUoZm4pO1xuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2goKTogdm9pZCB7XG4gICAgdGhpcy5nZW5UeXBlKCk7XG4gICAgdGhpcy5leGVjdXRlT25TdGFibGUoKCkgPT4ge1xuICAgICAgY29uc3QgeyB0eXBlLCBkb20sIG9yZ0VsLCBjZHIgfSA9IHRoaXM7XG4gICAgICBjb25zdCBodG1sID0gb3JnRWwubmF0aXZlRWxlbWVudC5pbm5lckhUTUw7XG4gICAgICB0aGlzLm9yZ0h0bWwgPSBkb20uYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoaHRtbCk7XG4gICAgICBjZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgdGhpcy5nZW4oKTtcbiAgICAgIGlmICh0eXBlICE9PSAnbGluZScpIHtcbiAgICAgICAgY29uc3QgZWwgPSB0aGlzLmdldEVsKCcuZWxsaXBzaXMnKTtcbiAgICAgICAgaWYgKGVsKSB7XG4gICAgICAgICAgZWwuaW5uZXJIVE1MID0gaHRtbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmluaXRlZCkge1xuICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgfVxuICB9XG59XG4iXX0=