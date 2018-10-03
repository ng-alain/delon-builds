/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Host, ElementRef, Renderer2, TemplateRef, ViewChild, HostBinding, Optional, } from '@angular/core';
import { ResponsiveService } from '@delon/theme';
import { isEmpty, InputNumber, InputBoolean } from '@delon/util';
import { SVContainerComponent } from './view-container.component';
/** @type {?} */
const prefixCls = `sv`;
export class SVComponent {
    /**
     * @param {?} parent
     * @param {?} rep
     * @param {?} el
     * @param {?} ren
     */
    constructor(parent, rep, el, ren) {
        this.parent = parent;
        this.rep = rep;
        this.ren = ren;
        this.clsMap = [];
        //#region fields
        this._label = '';
        if (parent == null) {
            throw new Error(`[sv] must include 'sv-container' component`);
        }
        this.el = el.nativeElement;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set label(value) {
        if (value instanceof TemplateRef) {
            this._label = null;
            this._labelTpl = value;
        }
        else {
            this._label = value;
        }
    }
    /**
     * @return {?}
     */
    get paddingLeft() {
        return this.parent && this.parent.gutter / 2;
    }
    /**
     * @return {?}
     */
    get paddingRight() {
        return this.parent && this.parent.gutter / 2;
    }
    /**
     * @return {?}
     */
    setClass() {
        const { el, ren, col, clsMap, type, rep } = this;
        clsMap.forEach(cls => ren.removeClass(el, cls));
        clsMap.length = 0;
        clsMap.push(...rep.genCls(col != null ? col : this.parent.col));
        clsMap.push(`${prefixCls}__item`);
        if (this.parent.labelWidth)
            clsMap.push(`${prefixCls}__item-fixed`);
        if (type)
            clsMap.push(`${prefixCls}__type-${type}`);
        clsMap.forEach(cls => ren.addClass(el, cls));
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.setClass();
        this.checkContent();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.setClass();
    }
    /**
     * @return {?}
     */
    checkContent() {
        const { conEl } = this;
        /** @type {?} */
        const def = this.default;
        if (!(def != null ? def : this.parent.default))
            return;
        /** @type {?} */
        const el = /** @type {?} */ (conEl.nativeElement);
        /** @type {?} */
        const cls = `sv__default`;
        if (el.classList.contains(cls)) {
            el.classList.remove(cls);
        }
        if (isEmpty(el)) {
            el.classList.add(cls);
        }
    }
}
SVComponent.decorators = [
    { type: Component, args: [{
                selector: 'sv, [sv]',
                template: "<div class=\"sv__label\" [class.sv__label-empty]=\"!_label && !_labelTpl\"\n  [style.width.px]=\"parent.labelWidth\">\n  <ng-container *ngIf=\"_label; else _labelTpl\">{{_label}}</ng-container>\n</div>\n<div class=\"sv__detail\" (cdkObserveContent)=\"checkContent()\" #conEl>\n  <ng-content></ng-content>\n</div>\n",
                preserveWhitespaces: false
            }] }
];
/** @nocollapse */
SVComponent.ctorParameters = () => [
    { type: SVContainerComponent, decorators: [{ type: Host }, { type: Optional }] },
    { type: ResponsiveService },
    { type: ElementRef },
    { type: Renderer2 }
];
SVComponent.propDecorators = {
    conEl: [{ type: ViewChild, args: ['conEl',] }],
    label: [{ type: Input }],
    col: [{ type: Input }],
    default: [{ type: Input }],
    type: [{ type: Input }],
    paddingLeft: [{ type: HostBinding, args: ['style.padding-left.px',] }],
    paddingRight: [{ type: HostBinding, args: ['style.padding-right.px',] }]
};
tslib_1.__decorate([
    InputNumber(null),
    tslib_1.__metadata("design:type", Number)
], SVComponent.prototype, "col", void 0);
tslib_1.__decorate([
    InputBoolean(null),
    tslib_1.__metadata("design:type", Boolean)
], SVComponent.prototype, "default", void 0);
if (false) {
    /** @type {?} */
    SVComponent.prototype.conEl;
    /** @type {?} */
    SVComponent.prototype.el;
    /** @type {?} */
    SVComponent.prototype.clsMap;
    /** @type {?} */
    SVComponent.prototype._label;
    /** @type {?} */
    SVComponent.prototype._labelTpl;
    /** @type {?} */
    SVComponent.prototype.col;
    /** @type {?} */
    SVComponent.prototype.default;
    /** @type {?} */
    SVComponent.prototype.type;
    /** @type {?} */
    SVComponent.prototype.parent;
    /** @type {?} */
    SVComponent.prototype.rep;
    /** @type {?} */
    SVComponent.prototype.ren;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL3ZpZXcvIiwic291cmNlcyI6WyJ2aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLElBQUksRUFDSixVQUFVLEVBQ1YsU0FBUyxFQUVULFdBQVcsRUFDWCxTQUFTLEVBRVQsV0FBVyxFQUNYLFFBQVEsR0FDVCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDakQsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRWpFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDOztBQUVsRSxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUM7QUFPdkIsTUFBTTs7Ozs7OztJQTJDSixZQUdTLE1BQTRCLEVBQzNCLEtBQ1IsRUFBYyxFQUNOO1FBSEQsV0FBTSxHQUFOLE1BQU0sQ0FBc0I7UUFDM0IsUUFBRyxHQUFILEdBQUc7UUFFSCxRQUFHLEdBQUgsR0FBRztzQkE3Q2MsRUFBRTs7c0JBSXBCLEVBQUU7UUEyQ1QsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1lBQ2xCLE1BQU0sSUFBSSxLQUFLLENBQUMsNENBQTRDLENBQUMsQ0FBQztTQUMvRDtRQUNELElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQztLQUM1Qjs7Ozs7SUE3Q0QsSUFDSSxLQUFLLENBQUMsS0FBZ0M7UUFDeEMsSUFBSSxLQUFLLFlBQVksV0FBVyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1NBQ3hCO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUNy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QUM7Ozs7SUFJakIsWUFBWSxDQUFDLElBQUksQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIEhvc3QsXG4gIEVsZW1lbnRSZWYsXG4gIFJlbmRlcmVyMixcbiAgT25DaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBBZnRlclZpZXdJbml0LFxuICBIb3N0QmluZGluZyxcbiAgT3B0aW9uYWwsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzcG9uc2l2ZVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgaXNFbXB0eSwgSW5wdXROdW1iZXIsIElucHV0Qm9vbGVhbiB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuaW1wb3J0IHsgU1ZDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL3ZpZXctY29udGFpbmVyLmNvbXBvbmVudCc7XG5cbmNvbnN0IHByZWZpeENscyA9IGBzdmA7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N2LCBbc3ZdJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3ZpZXcuY29tcG9uZW50Lmh0bWwnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgU1ZDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xuICBAVmlld0NoaWxkKCdjb25FbCcpXG4gIHByaXZhdGUgY29uRWw6IEVsZW1lbnRSZWY7XG4gIHByaXZhdGUgZWw6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIGNsc01hcDogc3RyaW5nW10gPSBbXTtcblxuICAvLyNyZWdpb24gZmllbGRzXG5cbiAgX2xhYmVsID0gJyc7XG4gIF9sYWJlbFRwbDogVGVtcGxhdGVSZWY8YW55PjtcbiAgQElucHV0KClcbiAgc2V0IGxhYmVsKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIHRoaXMuX2xhYmVsID0gbnVsbDtcbiAgICAgIHRoaXMuX2xhYmVsVHBsID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2xhYmVsID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KClcbiAgQElucHV0TnVtYmVyKG51bGwpXG4gIGNvbDogbnVtYmVyO1xuXG4gIEBJbnB1dCgpXG4gIEBJbnB1dEJvb2xlYW4obnVsbClcbiAgZGVmYXVsdDogYm9vbGVhbjtcblxuICBASW5wdXQoKVxuICB0eXBlOiAncHJpbWFyeScgfCAnc3VjY2VzcycgfCAnZGFuZ2VyJyB8ICd3YXJuaW5nJztcblxuICAvLyNlbmRyZWdpb25cblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLnBhZGRpbmctbGVmdC5weCcpXG4gIGdldCBwYWRkaW5nTGVmdCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5ndXR0ZXIgLyAyO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5wYWRkaW5nLXJpZ2h0LnB4JylcbiAgZ2V0IHBhZGRpbmdSaWdodCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5ndXR0ZXIgLyAyO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEhvc3QoKVxuICAgIEBPcHRpb25hbCgpXG4gICAgcHVibGljIHBhcmVudDogU1ZDb250YWluZXJDb21wb25lbnQsXG4gICAgcHJpdmF0ZSByZXA6IFJlc3BvbnNpdmVTZXJ2aWNlLFxuICAgIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuOiBSZW5kZXJlcjIsXG4gICkge1xuICAgIGlmIChwYXJlbnQgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBbc3ZdIG11c3QgaW5jbHVkZSAnc3YtY29udGFpbmVyJyBjb21wb25lbnRgKTtcbiAgICB9XG4gICAgdGhpcy5lbCA9IGVsLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBwcml2YXRlIHNldENsYXNzKCkge1xuICAgIGNvbnN0IHsgZWwsIHJlbiwgY29sLCBjbHNNYXAsIHR5cGUsIHJlcCB9ID0gdGhpcztcbiAgICBjbHNNYXAuZm9yRWFjaChjbHMgPT4gcmVuLnJlbW92ZUNsYXNzKGVsLCBjbHMpKTtcbiAgICBjbHNNYXAubGVuZ3RoID0gMDtcbiAgICBjbHNNYXAucHVzaCguLi5yZXAuZ2VuQ2xzKGNvbCAhPSBudWxsID8gY29sIDogdGhpcy5wYXJlbnQuY29sKSk7XG4gICAgY2xzTWFwLnB1c2goYCR7cHJlZml4Q2xzfV9faXRlbWApO1xuICAgIGlmICh0aGlzLnBhcmVudC5sYWJlbFdpZHRoKSBjbHNNYXAucHVzaChgJHtwcmVmaXhDbHN9X19pdGVtLWZpeGVkYCk7XG4gICAgaWYgKHR5cGUpIGNsc01hcC5wdXNoKGAke3ByZWZpeENsc31fX3R5cGUtJHt0eXBlfWApO1xuICAgIGNsc01hcC5mb3JFYWNoKGNscyA9PiByZW4uYWRkQ2xhc3MoZWwsIGNscykpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuc2V0Q2xhc3MoKTtcbiAgICB0aGlzLmNoZWNrQ29udGVudCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy5zZXRDbGFzcygpO1xuICB9XG5cbiAgY2hlY2tDb250ZW50KCkge1xuICAgIGNvbnN0IHsgY29uRWwgfSA9IHRoaXM7XG4gICAgY29uc3QgZGVmID0gdGhpcy5kZWZhdWx0O1xuICAgIGlmICghKGRlZiAhPSBudWxsID8gZGVmIDogdGhpcy5wYXJlbnQuZGVmYXVsdCkpIHJldHVybjtcbiAgICBjb25zdCBlbCA9IGNvbkVsLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgY2xzID0gYHN2X19kZWZhdWx0YDtcbiAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKGNscykpIHtcbiAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoY2xzKTtcbiAgICB9XG4gICAgaWYgKGlzRW1wdHkoZWwpKSB7XG4gICAgICBlbC5jbGFzc0xpc3QuYWRkKGNscyk7XG4gICAgfVxuICB9XG59XG4iXX0=