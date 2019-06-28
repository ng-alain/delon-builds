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
        const { type, lines, length, fullWidthRecognition, tail, orgEl, cdr } = this;
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
            cdr.detectChanges();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxsaXBzaXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9lbGxpcHNpcy8iLCJzb3VyY2VzIjpbImVsbGlwc2lzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLE1BQU0sRUFDTixLQUFLLEVBQ0wsTUFBTSxFQUVOLFNBQVMsRUFDVCxpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBWSxNQUFNLDJCQUEyQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQVV0QyxNQUFNLE9BQU8saUJBQWlCOzs7Ozs7OztJQTRCNUIsWUFDVSxFQUFjLEVBQ2QsTUFBYyxFQUNkLEdBQWlCLEVBQ0MsR0FBYSxFQUMvQixHQUFzQjtRQUp0QixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2QsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFFBQUcsR0FBSCxHQUFHLENBQWM7UUFDQyxRQUFHLEdBQUgsR0FBRyxDQUFVO1FBQy9CLFFBQUcsR0FBSCxHQUFHLENBQW1COztRQS9CeEIsdUJBQWtCLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEtBQUssU0FBUyxDQUFDO1FBSTFFLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFFdkIsU0FBSSxHQUFHLFNBQVMsQ0FBQztRQUNqQixRQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ1QsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLGdCQUFXLEdBQUcsQ0FBQyxDQUFDOztRQUlTLFlB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akUsd0NBQTZFOzs7OztJQUM3RSx5Q0FBK0U7Ozs7O0lBQy9FLG1DQUF1Qjs7SUFDdkIsb0NBQWtCOztJQUNsQixpQ0FBaUI7O0lBQ2pCLGdDQUFTOztJQUNULGlDQUFVOztJQUNWLHdDQUFnQjs7SUFJaEIsb0NBQXlDOztJQUN6QyxtQ0FBMkM7O0lBQzNDLGtDQUEwQzs7SUFDMUMsaURBQXNEOztJQUN0RCxpQ0FBc0I7Ozs7O0lBVXBCLCtCQUFzQjs7Ozs7SUFDdEIsbUNBQXNCOzs7OztJQUN0QixnQ0FBeUI7Ozs7O0lBQ3pCLGdDQUF1Qzs7Ozs7SUFDdkMsZ0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25DaGFuZ2VzLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlbGxpcHNpcycsXG4gIGV4cG9ydEFzOiAnZWxsaXBzaXMnLFxuICB0ZW1wbGF0ZVVybDogJy4vZWxsaXBzaXMuY29tcG9uZW50Lmh0bWwnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIEVsbGlwc2lzQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXN0cmluZy1saXRlcmFsXG4gIHByaXZhdGUgaXNTdXBwb3J0TGluZUNsYW1wID0gdGhpcy5kb2MuYm9keS5zdHlsZVsnd2Via2l0TGluZUNsYW1wJ10gIT09IHVuZGVmaW5lZDtcbiAgQFZpZXdDaGlsZCgnb3JnRWwnLCB7IHN0YXRpYzogZmFsc2UgfSkgcHJpdmF0ZSBvcmdFbDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnc2hhZG93T3JnRWwnLCB7IHN0YXRpYzogZmFsc2UgfSkgcHJpdmF0ZSBzaGFkb3dPcmdFbDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnc2hhZG93VGV4dEVsJywgeyBzdGF0aWM6IGZhbHNlIH0pIHByaXZhdGUgc2hhZG93VGV4dEVsOiBFbGVtZW50UmVmO1xuICBwcml2YXRlIGluaXRlZCA9IGZhbHNlO1xuICBvcmdIdG1sOiBTYWZlSHRtbDtcbiAgdHlwZSA9ICdkZWZhdWx0JztcbiAgY2xzID0ge307XG4gIHRleHQgPSAnJztcbiAgdGFyZ2V0Q291bnQgPSAwO1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHRvb2x0aXAgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKG51bGwpIGxlbmd0aDogbnVtYmVyO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIobnVsbCkgbGluZXM6IG51bWJlcjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGZ1bGxXaWR0aFJlY29nbml0aW9uID0gZmFsc2U7XG4gIEBJbnB1dCgpIHRhaWwgPSAnLi4uJztcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgZ2V0IGxpbnNXb3JkKCk6IHN0cmluZyB7XG4gICAgY29uc3QgeyB0YXJnZXRDb3VudCwgdGV4dCwgdGFpbCB9ID0gdGhpcztcbiAgICByZXR1cm4gKHRhcmdldENvdW50ID4gMCA/IHRleHQuc3Vic3RyaW5nKDAsIHRhcmdldENvdW50KSA6ICcnKSArICh0YXJnZXRDb3VudCA+IDAgJiYgdGFyZ2V0Q291bnQgPCB0ZXh0Lmxlbmd0aCA/IHRhaWwgOiAnJyk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSBkb206IERvbVNhbml0aXplcixcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogRG9jdW1lbnQsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICApIHt9XG5cbiAgcHJpdmF0ZSBnZXRTdHJGdWxsTGVuZ3RoKHN0cjogc3RyaW5nKTogbnVtYmVyIHtcbiAgICByZXR1cm4gc3RyLnNwbGl0KCcnKS5yZWR1Y2UoKHByZSwgY3VyKSA9PiB7XG4gICAgICBjb25zdCBjaGFyQ29kZSA9IGN1ci5jaGFyQ29kZUF0KDApO1xuICAgICAgaWYgKGNoYXJDb2RlID49IDAgJiYgY2hhckNvZGUgPD0gMTI4KSB7XG4gICAgICAgIHJldHVybiBwcmUgKyAxO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHByZSArIDI7XG4gICAgfSwgMCk7XG4gIH1cblxuICBwcml2YXRlIGN1dFN0ckJ5RnVsbExlbmd0aChzdHI6IHN0cmluZywgbWF4TGVuZ3RoOiBudW1iZXIpIHtcbiAgICBsZXQgc2hvd0xlbmd0aCA9IDA7XG4gICAgcmV0dXJuIHN0ci5zcGxpdCgnJykucmVkdWNlKChwcmUsIGN1cikgPT4ge1xuICAgICAgY29uc3QgY2hhckNvZGUgPSBjdXIuY2hhckNvZGVBdCgwKTtcbiAgICAgIGlmIChjaGFyQ29kZSA+PSAwICYmIGNoYXJDb2RlIDw9IDEyOCkge1xuICAgICAgICBzaG93TGVuZ3RoICs9IDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaG93TGVuZ3RoICs9IDI7XG4gICAgICB9XG4gICAgICBpZiAoc2hvd0xlbmd0aCA8PSBtYXhMZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHByZSArIGN1cjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwcmU7XG4gICAgfSwgJycpO1xuICB9XG5cbiAgcHJpdmF0ZSBiaXNlY3Rpb24odGg6IG51bWJlciwgbTogbnVtYmVyLCBiOiBudW1iZXIsIGU6IG51bWJlciwgdGV4dDogc3RyaW5nLCBzaGFkb3dOb2RlOiBIVE1MRWxlbWVudCk6IG51bWJlciB7XG4gICAgY29uc3Qgc3VmZml4ID0gdGhpcy50YWlsO1xuICAgIGxldCBtaWQgPSBtO1xuICAgIGxldCBlbmQgPSBlO1xuICAgIGxldCBiZWdpbiA9IGI7XG4gICAgc2hhZG93Tm9kZS5pbm5lckhUTUwgPSB0ZXh0LnN1YnN0cmluZygwLCBtaWQpICsgc3VmZml4O1xuICAgIGxldCBzaCA9IHNoYWRvd05vZGUub2Zmc2V0SGVpZ2h0O1xuXG4gICAgaWYgKHNoIDw9IHRoKSB7XG4gICAgICBzaGFkb3dOb2RlLmlubmVySFRNTCA9IHRleHQuc3Vic3RyaW5nKDAsIG1pZCArIDEpICsgc3VmZml4O1xuICAgICAgc2ggPSBzaGFkb3dOb2RlLm9mZnNldEhlaWdodDtcbiAgICAgIGlmIChzaCA+IHRoIHx8IG1pZCA9PT0gYmVnaW4pIHtcbiAgICAgICAgcmV0dXJuIG1pZDtcbiAgICAgIH1cbiAgICAgIGJlZ2luID0gbWlkO1xuICAgICAgbWlkID0gZW5kIC0gYmVnaW4gPT09IDEgPyBiZWdpbiArIDEgOiBNYXRoLmZsb29yKChlbmQgLSBiZWdpbikgLyAyKSArIGJlZ2luO1xuICAgICAgcmV0dXJuIHRoaXMuYmlzZWN0aW9uKHRoLCBtaWQsIGJlZ2luLCBlbmQsIHRleHQsIHNoYWRvd05vZGUpO1xuICAgIH1cbiAgICBpZiAobWlkIC0gMSA8IDApIHtcbiAgICAgIHJldHVybiBtaWQ7XG4gICAgfVxuICAgIHNoYWRvd05vZGUuaW5uZXJIVE1MID0gdGV4dC5zdWJzdHJpbmcoMCwgbWlkIC0gMSkgKyBzdWZmaXg7XG4gICAgc2ggPSBzaGFkb3dOb2RlLm9mZnNldEhlaWdodDtcbiAgICBpZiAoc2ggPD0gdGgpIHtcbiAgICAgIHJldHVybiBtaWQgLSAxO1xuICAgIH1cbiAgICBlbmQgPSBtaWQ7XG4gICAgbWlkID0gTWF0aC5mbG9vcigoZW5kIC0gYmVnaW4pIC8gMikgKyBiZWdpbjtcbiAgICByZXR1cm4gdGhpcy5iaXNlY3Rpb24odGgsIG1pZCwgYmVnaW4sIGVuZCwgdGV4dCwgc2hhZG93Tm9kZSk7XG4gIH1cblxuICBwcml2YXRlIGdlblR5cGUoKSB7XG4gICAgY29uc3QgeyBsaW5lcywgbGVuZ3RoLCBpc1N1cHBvcnRMaW5lQ2xhbXAgfSA9IHRoaXM7XG4gICAgdGhpcy5jbHMgPSB7XG4gICAgICBlbGxpcHNpczogdHJ1ZSxcbiAgICAgIGVsbGlwc2lzX19saW5lczogbGluZXMgJiYgIWlzU3VwcG9ydExpbmVDbGFtcCxcbiAgICAgICdlbGxpcHNpc19fbGluZS1jbGFtcCc6IGxpbmVzICYmIGlzU3VwcG9ydExpbmVDbGFtcCxcbiAgICB9O1xuICAgIGlmICghbGluZXMgJiYgIWxlbmd0aCkge1xuICAgICAgdGhpcy50eXBlID0gJ2RlZmF1bHQnO1xuICAgIH0gZWxzZSBpZiAoIWxpbmVzKSB7XG4gICAgICB0aGlzLnR5cGUgPSAnbGVuZ3RoJztcbiAgICB9IGVsc2UgaWYgKGlzU3VwcG9ydExpbmVDbGFtcCkge1xuICAgICAgdGhpcy50eXBlID0gJ2xpbmUtY2xhbXAnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnR5cGUgPSAnbGluZSc7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZW4oKSB7XG4gICAgY29uc3QgeyB0eXBlLCBsaW5lcywgbGVuZ3RoLCBmdWxsV2lkdGhSZWNvZ25pdGlvbiwgdGFpbCwgb3JnRWwsIGNkciB9ID0gdGhpcztcbiAgICBpZiAodHlwZSA9PT0gJ2xlbmd0aCcpIHtcbiAgICAgIGNvbnN0IGVsID0gb3JnRWwubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGlmIChlbC5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRWxsaXBzaXMgY29udGVudCBtdXN0IGJlIHN0cmluZy4nKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGxlbmd0aFRleHQgPSBlbC50ZXh0Q29udGVudCE7XG4gICAgICBjb25zdCB0ZXh0TGVuZ3RoID0gZnVsbFdpZHRoUmVjb2duaXRpb24gPyB0aGlzLmdldFN0ckZ1bGxMZW5ndGgobGVuZ3RoVGV4dCkgOiBsZW5ndGhUZXh0Lmxlbmd0aDtcbiAgICAgIGlmICh0ZXh0TGVuZ3RoIDw9IGxlbmd0aCB8fCBsZW5ndGggPCAwKSB7XG4gICAgICAgIHRoaXMudGV4dCA9IGxlbmd0aFRleHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgZGlzcGxheVRleHQ6IHN0cmluZztcbiAgICAgICAgaWYgKGxlbmd0aCAtIHRhaWwubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICBkaXNwbGF5VGV4dCA9ICcnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRpc3BsYXlUZXh0ID0gZnVsbFdpZHRoUmVjb2duaXRpb24gPyB0aGlzLmN1dFN0ckJ5RnVsbExlbmd0aChsZW5ndGhUZXh0LCBsZW5ndGgpIDogbGVuZ3RoVGV4dC5zbGljZSgwLCBsZW5ndGgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudGV4dCA9IGRpc3BsYXlUZXh0ICsgdGFpbDtcbiAgICAgIH1cbiAgICAgIGNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnbGluZScpIHtcbiAgICAgIGNvbnN0IHsgc2hhZG93T3JnRWwsIHNoYWRvd1RleHRFbCB9ID0gdGhpcztcbiAgICAgIGNvbnN0IG9yZ05vZGUgPSBzaGFkb3dPcmdFbC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgICAgY29uc3QgbGluZVRleHQgPSBvcmdOb2RlLmlubmVyVGV4dCB8fCBvcmdOb2RlLnRleHRDb250ZW50ITtcbiAgICAgIGNvbnN0IGxpbmVIZWlnaHQgPSBwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKHRoaXMuZ2V0RWwoJy5lbGxpcHNpcycpKS5saW5lSGVpZ2h0ISwgMTApO1xuICAgICAgY29uc3QgdGFyZ2V0SGVpZ2h0ID0gbGluZXMgKiBsaW5lSGVpZ2h0O1xuICAgICAgdGhpcy5nZXRFbCgnLmVsbGlwc2lzX19oYW5kbGUnKS5zdHlsZS5oZWlnaHQgPSBgJHt0YXJnZXRIZWlnaHR9cHhgO1xuXG4gICAgICBpZiAob3JnTm9kZS5vZmZzZXRIZWlnaHQgPD0gdGFyZ2V0SGVpZ2h0KSB7XG4gICAgICAgIHRoaXMudGV4dCA9IGxpbmVUZXh0O1xuICAgICAgICB0aGlzLnRhcmdldENvdW50ID0gbGluZVRleHQubGVuZ3RoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gYmlzZWN0aW9uXG4gICAgICAgIGNvbnN0IGxlbiA9IGxpbmVUZXh0Lmxlbmd0aDtcbiAgICAgICAgY29uc3QgbWlkID0gTWF0aC5jZWlsKGxlbiAvIDIpO1xuXG4gICAgICAgIGNvbnN0IGNvdW50ID0gdGhpcy5iaXNlY3Rpb24odGFyZ2V0SGVpZ2h0LCBtaWQsIDAsIGxlbiwgbGluZVRleHQsIHNoYWRvd1RleHRFbC5uYXRpdmVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgICB0aGlzLnRleHQgPSBsaW5lVGV4dDtcbiAgICAgICAgdGhpcy50YXJnZXRDb3VudCA9IGNvdW50O1xuICAgICAgfVxuICAgICAgY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldEVsKGNsczogc3RyaW5nKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcihjbHMpO1xuICB9XG5cbiAgcHJpdmF0ZSBleGVjdXRlT25TdGFibGUoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uZ1pvbmUuaXNTdGFibGUpIHtcbiAgICAgIGZuKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubmdab25lLm9uU3RhYmxlXG4gICAgICAgIC5hc09ic2VydmFibGUoKVxuICAgICAgICAucGlwZSh0YWtlKDEpKVxuICAgICAgICAuc3Vic2NyaWJlKGZuKTtcbiAgICB9XG4gIH1cblxuICByZWZyZXNoKCk6IHZvaWQge1xuICAgIHRoaXMuZ2VuVHlwZSgpO1xuICAgIGNvbnN0IHsgdHlwZSwgZG9tLCBvcmdFbCwgY2RyIH0gPSB0aGlzO1xuICAgIGNvbnN0IGh0bWwgPSBvcmdFbC5uYXRpdmVFbGVtZW50LmlubmVySFRNTDtcbiAgICB0aGlzLm9yZ0h0bWwgPSBkb20uYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoaHRtbCk7XG4gICAgY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB0aGlzLmV4ZWN1dGVPblN0YWJsZSgoKSA9PiB7XG4gICAgICB0aGlzLmdlbigpO1xuICAgICAgaWYgKHR5cGUgIT09ICdsaW5lJykge1xuICAgICAgICBjb25zdCBlbCA9IHRoaXMuZ2V0RWwoJy5lbGxpcHNpcycpO1xuICAgICAgICBpZiAoZWwpIHtcbiAgICAgICAgICBlbC5pbm5lckhUTUwgPSBodG1sO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pbml0ZWQgPSB0cnVlO1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW5pdGVkKSB7XG4gICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==