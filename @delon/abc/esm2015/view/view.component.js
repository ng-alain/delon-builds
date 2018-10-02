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
                template: "<div class=\"sv__label\" [class.sv__label-empty]=\"!_label && !_labelTpl\"\r\n  [style.width.px]=\"parent.labelWidth\">\r\n  <ng-container *ngIf=\"_label; else _labelTpl\">{{_label}}</ng-container>\r\n</div>\r\n<div class=\"sv__detail\" (cdkObserveContent)=\"checkContent()\" #conEl>\r\n  <ng-content></ng-content>\r\n</div>\r\n",
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL3ZpZXcvIiwic291cmNlcyI6WyJ2aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLElBQUksRUFDSixVQUFVLEVBQ1YsU0FBUyxFQUVULFdBQVcsRUFDWCxTQUFTLEVBRVQsV0FBVyxFQUNYLFFBQVEsR0FDVCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDakQsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRWpFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDOztBQUVsRSxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUM7QUFPdkIsTUFBTTs7Ozs7OztJQTJDSixZQUdTLE1BQTRCLEVBQzNCLEtBQ1IsRUFBYyxFQUNOO1FBSEQsV0FBTSxHQUFOLE1BQU0sQ0FBc0I7UUFDM0IsUUFBRyxHQUFILEdBQUc7UUFFSCxRQUFHLEdBQUgsR0FBRztzQkE3Q2MsRUFBRTs7c0JBSXBCLEVBQUU7UUEyQ1QsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1lBQ2xCLE1BQU0sSUFBSSxLQUFLLENBQUMsNENBQTRDLENBQUMsQ0FBQztTQUMvRDtRQUNELElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQztLQUM1Qjs7Ozs7SUE3Q0QsSUFDSSxLQUFLLENBQUMsS0FBZ0M7UUFDeEMsSUFBSSxLQUFLLFlBQVksV0FBVyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1NBQ3hCO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUNyQjtLQUNGOzs7O0lBZUQsSUFDSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztLQUM5Qzs7OztJQUVELElBQ0ksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7S0FDOUM7Ozs7SUFnQk8sUUFBUTtRQUNkLE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztRQUNqRCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNoRCxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNoRSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsU0FBUyxRQUFRLENBQUMsQ0FBQztRQUNsQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxTQUFTLGNBQWMsQ0FBQyxDQUFDO1FBQ3BFLElBQUksSUFBSTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxTQUFTLFVBQVUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNwRCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQzs7Ozs7SUFHL0MsZUFBZTtRQUNiLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7S0FDckI7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQ2pCOzs7O0lBRUQsWUFBWTtRQUNWLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUM7O1FBQ3ZCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDekIsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUFFLE9BQU87O1FBQ3ZELE1BQU0sRUFBRSxxQkFBRyxLQUFLLENBQUMsYUFBNEIsRUFBQzs7UUFDOUMsTUFBTSxHQUFHLEdBQUcsYUFBYSxDQUFDO1FBQzFCLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDOUIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDMUI7UUFDRCxJQUFJLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUNmLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3ZCO0tBQ0Y7OztZQTlGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLG9WQUFvQztnQkFDcEMsbUJBQW1CLEVBQUUsS0FBSzthQUMzQjs7OztZQVJRLG9CQUFvQix1QkFxRHhCLElBQUksWUFDSixRQUFRO1lBekRKLGlCQUFpQjtZQVR4QixVQUFVO1lBQ1YsU0FBUzs7O29CQXFCUixTQUFTLFNBQUMsT0FBTztvQkFTakIsS0FBSztrQkFVTCxLQUFLO3NCQUlMLEtBQUs7bUJBSUwsS0FBSzswQkFLTCxXQUFXLFNBQUMsdUJBQXVCOzJCQUtuQyxXQUFXLFNBQUMsd0JBQXdCOzs7SUFqQnBDLFdBQVcsQ0FBQyxJQUFJLENBQUM7Ozs7SUFJakIsWUFBWSxDQUFDLElBQUksQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIEhvc3QsXHJcbiAgRWxlbWVudFJlZixcclxuICBSZW5kZXJlcjIsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIEhvc3RCaW5kaW5nLFxyXG4gIE9wdGlvbmFsLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSZXNwb25zaXZlU2VydmljZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XHJcbmltcG9ydCB7IGlzRW1wdHksIElucHV0TnVtYmVyLCBJbnB1dEJvb2xlYW4gfSBmcm9tICdAZGVsb24vdXRpbCc7XHJcblxyXG5pbXBvcnQgeyBTVkNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vdmlldy1jb250YWluZXIuY29tcG9uZW50JztcclxuXHJcbmNvbnN0IHByZWZpeENscyA9IGBzdmA7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3N2LCBbc3ZdJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdmlldy5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTVkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB7XHJcbiAgQFZpZXdDaGlsZCgnY29uRWwnKVxyXG4gIHByaXZhdGUgY29uRWw6IEVsZW1lbnRSZWY7XHJcbiAgcHJpdmF0ZSBlbDogSFRNTEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBjbHNNYXA6IHN0cmluZ1tdID0gW107XHJcblxyXG4gIC8vI3JlZ2lvbiBmaWVsZHNcclxuXHJcbiAgX2xhYmVsID0gJyc7XHJcbiAgX2xhYmVsVHBsOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGxhYmVsKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KSB7XHJcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xyXG4gICAgICB0aGlzLl9sYWJlbCA9IG51bGw7XHJcbiAgICAgIHRoaXMuX2xhYmVsVHBsID0gdmFsdWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9sYWJlbCA9IHZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBASW5wdXROdW1iZXIobnVsbClcclxuICBjb2w6IG51bWJlcjtcclxuXHJcbiAgQElucHV0KClcclxuICBASW5wdXRCb29sZWFuKG51bGwpXHJcbiAgZGVmYXVsdDogYm9vbGVhbjtcclxuXHJcbiAgQElucHV0KClcclxuICB0eXBlOiAncHJpbWFyeScgfCAnc3VjY2VzcycgfCAnZGFuZ2VyJyB8ICd3YXJuaW5nJztcclxuXHJcbiAgLy8jZW5kcmVnaW9uXHJcblxyXG4gIEBIb3N0QmluZGluZygnc3R5bGUucGFkZGluZy1sZWZ0LnB4JylcclxuICBnZXQgcGFkZGluZ0xlZnQoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5ndXR0ZXIgLyAyO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5wYWRkaW5nLXJpZ2h0LnB4JylcclxuICBnZXQgcGFkZGluZ1JpZ2h0KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuZ3V0dGVyIC8gMjtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQEhvc3QoKVxyXG4gICAgQE9wdGlvbmFsKClcclxuICAgIHB1YmxpYyBwYXJlbnQ6IFNWQ29udGFpbmVyQ29tcG9uZW50LFxyXG4gICAgcHJpdmF0ZSByZXA6IFJlc3BvbnNpdmVTZXJ2aWNlLFxyXG4gICAgZWw6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHJlbjogUmVuZGVyZXIyLFxyXG4gICkge1xyXG4gICAgaWYgKHBhcmVudCA9PSBudWxsKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgW3N2XSBtdXN0IGluY2x1ZGUgJ3N2LWNvbnRhaW5lcicgY29tcG9uZW50YCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmVsID0gZWwubmF0aXZlRWxlbWVudDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0Q2xhc3MoKSB7XHJcbiAgICBjb25zdCB7IGVsLCByZW4sIGNvbCwgY2xzTWFwLCB0eXBlLCByZXAgfSA9IHRoaXM7XHJcbiAgICBjbHNNYXAuZm9yRWFjaChjbHMgPT4gcmVuLnJlbW92ZUNsYXNzKGVsLCBjbHMpKTtcclxuICAgIGNsc01hcC5sZW5ndGggPSAwO1xyXG4gICAgY2xzTWFwLnB1c2goLi4ucmVwLmdlbkNscyhjb2wgIT0gbnVsbCA/IGNvbCA6IHRoaXMucGFyZW50LmNvbCkpO1xyXG4gICAgY2xzTWFwLnB1c2goYCR7cHJlZml4Q2xzfV9faXRlbWApO1xyXG4gICAgaWYgKHRoaXMucGFyZW50LmxhYmVsV2lkdGgpIGNsc01hcC5wdXNoKGAke3ByZWZpeENsc31fX2l0ZW0tZml4ZWRgKTtcclxuICAgIGlmICh0eXBlKSBjbHNNYXAucHVzaChgJHtwcmVmaXhDbHN9X190eXBlLSR7dHlwZX1gKTtcclxuICAgIGNsc01hcC5mb3JFYWNoKGNscyA9PiByZW4uYWRkQ2xhc3MoZWwsIGNscykpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5zZXRDbGFzcygpO1xyXG4gICAgdGhpcy5jaGVja0NvbnRlbnQoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCkge1xyXG4gICAgdGhpcy5zZXRDbGFzcygpO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tDb250ZW50KCkge1xyXG4gICAgY29uc3QgeyBjb25FbCB9ID0gdGhpcztcclxuICAgIGNvbnN0IGRlZiA9IHRoaXMuZGVmYXVsdDtcclxuICAgIGlmICghKGRlZiAhPSBudWxsID8gZGVmIDogdGhpcy5wYXJlbnQuZGVmYXVsdCkpIHJldHVybjtcclxuICAgIGNvbnN0IGVsID0gY29uRWwubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcclxuICAgIGNvbnN0IGNscyA9IGBzdl9fZGVmYXVsdGA7XHJcbiAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKGNscykpIHtcclxuICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShjbHMpO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzRW1wdHkoZWwpKSB7XHJcbiAgICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xzKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19