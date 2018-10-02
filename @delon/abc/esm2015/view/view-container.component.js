/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, ElementRef, Renderer2, TemplateRef, } from '@angular/core';
import { updateHostClass, InputNumber } from '@delon/util';
import { SVConfig } from './view.config';
/** @type {?} */
const prefixCls = `sv`;
export class SVContainerComponent {
    /**
     * @param {?} el
     * @param {?} ren
     * @param {?} cog
     */
    constructor(el, ren, cog) {
        this.ren = ren;
        //#region fields
        this._title = '';
        this.el = el.nativeElement;
        Object.assign(this, cog);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set title(value) {
        if (value instanceof TemplateRef) {
            this._title = null;
            this._titleTpl = value;
        }
        else {
            this._title = value;
        }
    }
    /**
     * @return {?}
     */
    setClass() {
        const { el, ren, size, layout } = this;
        updateHostClass(el, ren, {
            [`${prefixCls}__container`]: true,
            [`${prefixCls}__${size}`]: true,
            [`${prefixCls}__${layout}`]: true,
            [`clearfix`]: true,
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setClass();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.setClass();
    }
}
SVContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'sv-container, [sv-container]',
                template: "<div class=\"ant-row\" [ngStyle]=\"{'margin-left.px': -(gutter / 2), 'margin-right.px': -(gutter / 2)}\">\r\n  <sv-title *ngIf=\"_title || _titleTpl\">\r\n    <ng-container *ngIf=\"_title; else _titleTpl\">{{_title}}</ng-container>\r\n  </sv-title>\r\n  <ng-content></ng-content>\r\n</div>\r\n",
                preserveWhitespaces: false
            }] }
];
/** @nocollapse */
SVContainerComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: SVConfig }
];
SVContainerComponent.propDecorators = {
    title: [{ type: Input }],
    size: [{ type: Input }],
    gutter: [{ type: Input }],
    layout: [{ type: Input }],
    labelWidth: [{ type: Input }],
    col: [{ type: Input }],
    default: [{ type: Input }]
};
tslib_1.__decorate([
    InputNumber(),
    tslib_1.__metadata("design:type", Number)
], SVContainerComponent.prototype, "gutter", void 0);
tslib_1.__decorate([
    InputNumber(null),
    tslib_1.__metadata("design:type", Number)
], SVContainerComponent.prototype, "labelWidth", void 0);
tslib_1.__decorate([
    InputNumber(),
    tslib_1.__metadata("design:type", Number)
], SVContainerComponent.prototype, "col", void 0);
if (false) {
    /** @type {?} */
    SVContainerComponent.prototype.el;
    /** @type {?} */
    SVContainerComponent.prototype._title;
    /** @type {?} */
    SVContainerComponent.prototype._titleTpl;
    /** @type {?} */
    SVContainerComponent.prototype.size;
    /**
     * 列表项间距，单位为 `px`
     * @type {?}
     */
    SVContainerComponent.prototype.gutter;
    /** @type {?} */
    SVContainerComponent.prototype.layout;
    /** @type {?} */
    SVContainerComponent.prototype.labelWidth;
    /**
     * 指定信息最多分几列展示，最终一行几列由 col 配置结合响应式规则决定
     * @type {?}
     */
    SVContainerComponent.prototype.col;
    /** @type {?} */
    SVContainerComponent.prototype.default;
    /** @type {?} */
    SVContainerComponent.prototype.ren;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy92aWV3LyIsInNvdXJjZXMiOlsidmlldy1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsVUFBVSxFQUNWLFNBQVMsRUFHVCxXQUFXLEdBQ1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDM0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFekMsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDO0FBT3ZCLE1BQU07Ozs7OztJQXlDSixZQUFZLEVBQWMsRUFBVSxHQUFjLEVBQUUsR0FBYTtRQUE3QixRQUFHLEdBQUgsR0FBRyxDQUFXOztzQkFyQ3pDLEVBQUU7UUFzQ1QsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDO1FBQzNCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQzFCOzs7OztJQXRDRCxJQUNJLEtBQUssQ0FBQyxLQUFnQztRQUN4QyxJQUFJLEtBQUssWUFBWSxXQUFXLEVBQUU7WUFDaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7U0FDeEI7YUFBTTtZQUNMLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3JCO0tBQ0Y7Ozs7SUFnQ08sUUFBUTtRQUNkLE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDdkMsZUFBZSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUU7WUFDdkIsQ0FBQyxHQUFHLFNBQVMsYUFBYSxDQUFDLEVBQUUsSUFBSTtZQUNqQyxDQUFDLEdBQUcsU0FBUyxLQUFLLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSTtZQUMvQixDQUFDLEdBQUcsU0FBUyxLQUFLLE1BQU0sRUFBRSxDQUFDLEVBQUUsSUFBSTtZQUNqQyxDQUFDLFVBQVUsQ0FBQyxFQUFFLElBQUk7U0FDbkIsQ0FBQyxDQUFDOzs7OztJQUdMLFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDakI7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQ2pCOzs7WUFuRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw4QkFBOEI7Z0JBQ3hDLGlUQUE4QztnQkFDOUMsbUJBQW1CLEVBQUUsS0FBSzthQUMzQjs7OztZQWZDLFVBQVU7WUFDVixTQUFTO1lBTUYsUUFBUTs7O29CQWVkLEtBQUs7bUJBVUwsS0FBSztxQkFJTCxLQUFLO3FCQUlMLEtBQUs7eUJBR0wsS0FBSztrQkFLTCxLQUFLO3NCQUlMLEtBQUs7OztJQWZMLFdBQVcsRUFBRTs7OztJQU9iLFdBQVcsQ0FBQyxJQUFJLENBQUM7Ozs7SUFLakIsV0FBVyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgSW5wdXQsXHJcbiAgRWxlbWVudFJlZixcclxuICBSZW5kZXJlcjIsXHJcbiAgT25Jbml0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgdXBkYXRlSG9zdENsYXNzLCBJbnB1dE51bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsJztcclxuaW1wb3J0IHsgU1ZDb25maWcgfSBmcm9tICcuL3ZpZXcuY29uZmlnJztcclxuXHJcbmNvbnN0IHByZWZpeENscyA9IGBzdmA7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3N2LWNvbnRhaW5lciwgW3N2LWNvbnRhaW5lcl0nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi92aWV3LWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTVkNvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICBwcml2YXRlIGVsOiBIVE1MRWxlbWVudDtcclxuICAvLyNyZWdpb24gZmllbGRzXHJcblxyXG4gIF90aXRsZSA9ICcnO1xyXG4gIF90aXRsZVRwbDogVGVtcGxhdGVSZWY8YW55PjtcclxuICBASW5wdXQoKVxyXG4gIHNldCB0aXRsZSh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pikge1xyXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcclxuICAgICAgdGhpcy5fdGl0bGUgPSBudWxsO1xyXG4gICAgICB0aGlzLl90aXRsZVRwbCA9IHZhbHVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fdGl0bGUgPSB2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2l6ZTogJ3NtYWxsJyB8ICdsYXJnZSc7XHJcblxyXG4gIC8qKiDliJfooajpobnpl7Tot53vvIzljZXkvY3kuLogYHB4YCAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgQElucHV0TnVtYmVyKClcclxuICBndXR0ZXI6IG51bWJlcjtcclxuXHJcbiAgQElucHV0KClcclxuICBsYXlvdXQ6ICdob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgQElucHV0TnVtYmVyKG51bGwpXHJcbiAgbGFiZWxXaWR0aDogbnVtYmVyO1xyXG5cclxuICAvKiog5oyH5a6a5L+h5oGv5pyA5aSa5YiG5Yeg5YiX5bGV56S677yM5pyA57uI5LiA6KGM5Yeg5YiX55SxIGNvbCDphY3nva7nu5PlkIjlk43lupTlvI/op4TliJnlhrPlrpogKi9cclxuICBASW5wdXQoKVxyXG4gIEBJbnB1dE51bWJlcigpXHJcbiAgY29sOiBudW1iZXI7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZGVmYXVsdDogYm9vbGVhbjtcclxuXHJcbiAgLy8jZW5kcmVnaW9uXHJcblxyXG4gIGNvbnN0cnVjdG9yKGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbjogUmVuZGVyZXIyLCBjb2c6IFNWQ29uZmlnKSB7XHJcbiAgICB0aGlzLmVsID0gZWwubmF0aXZlRWxlbWVudDtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgY29nKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0Q2xhc3MoKSB7XHJcbiAgICBjb25zdCB7IGVsLCByZW4sIHNpemUsIGxheW91dCB9ID0gdGhpcztcclxuICAgIHVwZGF0ZUhvc3RDbGFzcyhlbCwgcmVuLCB7XHJcbiAgICAgIFtgJHtwcmVmaXhDbHN9X19jb250YWluZXJgXTogdHJ1ZSxcclxuICAgICAgW2Ake3ByZWZpeENsc31fXyR7c2l6ZX1gXTogdHJ1ZSxcclxuICAgICAgW2Ake3ByZWZpeENsc31fXyR7bGF5b3V0fWBdOiB0cnVlLFxyXG4gICAgICBbYGNsZWFyZml4YF06IHRydWUsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5zZXRDbGFzcygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoKSB7XHJcbiAgICB0aGlzLnNldENsYXNzKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==