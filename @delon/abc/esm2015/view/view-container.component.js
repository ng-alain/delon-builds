/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, ElementRef, Renderer2, TemplateRef, } from '@angular/core';
import { updateHostClass, InputNumber } from '@delon/util';
import { SVConfig } from './view.config';
/** @type {?} */
const prefixCls = `sv`;
export class SVContainerComponent {
    //#endregion
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
                template: "<div class=\"ant-row\" [ngStyle]=\"{'margin-left.px': -(gutter / 2), 'margin-right.px': -(gutter / 2)}\">\n  <sv-title *ngIf=\"_title || _titleTpl\">\n    <ng-container *ngIf=\"_title; else _titleTpl\">{{_title}}</ng-container>\n  </sv-title>\n  <ng-content></ng-content>\n</div>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy92aWV3LyIsInNvdXJjZXMiOlsidmlldy1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsVUFBVSxFQUNWLFNBQVMsRUFHVCxXQUFXLEdBQ1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDM0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7TUFFbkMsU0FBUyxHQUFHLElBQUk7QUFPdEIsTUFBTSxPQUFPLG9CQUFvQjs7Ozs7OztJQXlDL0IsWUFBWSxFQUFjLEVBQVUsR0FBYyxFQUFFLEdBQWE7UUFBN0IsUUFBRyxHQUFILEdBQUcsQ0FBVzs7UUFyQ2xELFdBQU0sR0FBRyxFQUFFLENBQUM7UUFzQ1YsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDO1FBQzNCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBdENELElBQ0ksS0FBSyxDQUFDLEtBQWdDO1FBQ3hDLElBQUksS0FBSyxZQUFZLFdBQVcsRUFBRTtZQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztTQUN4QjthQUFNO1lBQ0wsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDckI7SUFDSCxDQUFDOzs7O0lBZ0NPLFFBQVE7Y0FDUixFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxHQUFHLElBQUk7UUFDdEMsZUFBZSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUU7WUFDdkIsQ0FBQyxHQUFHLFNBQVMsYUFBYSxDQUFDLEVBQUUsSUFBSTtZQUNqQyxDQUFDLEdBQUcsU0FBUyxLQUFLLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSTtZQUMvQixDQUFDLEdBQUcsU0FBUyxLQUFLLE1BQU0sRUFBRSxDQUFDLEVBQUUsSUFBSTtZQUNqQyxDQUFDLFVBQVUsQ0FBQyxFQUFFLElBQUk7U0FDbkIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQzs7O1lBbkVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsOEJBQThCO2dCQUN4QyxxU0FBOEM7Z0JBQzlDLG1CQUFtQixFQUFFLEtBQUs7YUFDM0I7Ozs7WUFmQyxVQUFVO1lBQ1YsU0FBUztZQU1GLFFBQVE7OztvQkFlZCxLQUFLO21CQVVMLEtBQUs7cUJBSUwsS0FBSztxQkFJTCxLQUFLO3lCQUdMLEtBQUs7a0JBS0wsS0FBSztzQkFJTCxLQUFLOztBQWROO0lBREMsV0FBVyxFQUFFOztvREFDQztBQU9mO0lBREMsV0FBVyxDQUFDLElBQUksQ0FBQzs7d0RBQ0M7QUFLbkI7SUFEQyxXQUFXLEVBQUU7O2lEQUNGOzs7SUFqQ1osa0NBQXdCOztJQUd4QixzQ0FBWTs7SUFDWix5Q0FBNEI7O0lBVzVCLG9DQUN3Qjs7Ozs7SUFHeEIsc0NBRWU7O0lBRWYsc0NBQ2tDOztJQUVsQywwQ0FFbUI7Ozs7O0lBR25CLG1DQUVZOztJQUVaLHVDQUNpQjs7SUFJVyxtQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBFbGVtZW50UmVmLFxuICBSZW5kZXJlcjIsXG4gIE9uSW5pdCxcbiAgT25DaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB1cGRhdGVIb3N0Q2xhc3MsIElucHV0TnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgU1ZDb25maWcgfSBmcm9tICcuL3ZpZXcuY29uZmlnJztcblxuY29uc3QgcHJlZml4Q2xzID0gYHN2YDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3YtY29udGFpbmVyLCBbc3YtY29udGFpbmVyXScsXG4gIHRlbXBsYXRlVXJsOiAnLi92aWV3LWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBTVkNvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgcHJpdmF0ZSBlbDogSFRNTEVsZW1lbnQ7XG4gIC8vI3JlZ2lvbiBmaWVsZHNcblxuICBfdGl0bGUgPSAnJztcbiAgX3RpdGxlVHBsOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBASW5wdXQoKVxuICBzZXQgdGl0bGUodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4pIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgdGhpcy5fdGl0bGUgPSBudWxsO1xuICAgICAgdGhpcy5fdGl0bGVUcGwgPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fdGl0bGUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBASW5wdXQoKVxuICBzaXplOiAnc21hbGwnIHwgJ2xhcmdlJztcblxuICAvKiog5YiX6KGo6aG56Ze06Led77yM5Y2V5L2N5Li6IGBweGAgKi9cbiAgQElucHV0KClcbiAgQElucHV0TnVtYmVyKClcbiAgZ3V0dGVyOiBudW1iZXI7XG5cbiAgQElucHV0KClcbiAgbGF5b3V0OiAnaG9yaXpvbnRhbCcgfCAndmVydGljYWwnO1xuXG4gIEBJbnB1dCgpXG4gIEBJbnB1dE51bWJlcihudWxsKVxuICBsYWJlbFdpZHRoOiBudW1iZXI7XG5cbiAgLyoqIOaMh+WumuS/oeaBr+acgOWkmuWIhuWHoOWIl+Wxleekuu+8jOacgOe7iOS4gOihjOWHoOWIl+eUsSBjb2wg6YWN572u57uT5ZCI5ZON5bqU5byP6KeE5YiZ5Yaz5a6aICovXG4gIEBJbnB1dCgpXG4gIEBJbnB1dE51bWJlcigpXG4gIGNvbDogbnVtYmVyO1xuXG4gIEBJbnB1dCgpXG4gIGRlZmF1bHQ6IGJvb2xlYW47XG5cbiAgLy8jZW5kcmVnaW9uXG5cbiAgY29uc3RydWN0b3IoZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuOiBSZW5kZXJlcjIsIGNvZzogU1ZDb25maWcpIHtcbiAgICB0aGlzLmVsID0gZWwubmF0aXZlRWxlbWVudDtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvZyk7XG4gIH1cblxuICBwcml2YXRlIHNldENsYXNzKCkge1xuICAgIGNvbnN0IHsgZWwsIHJlbiwgc2l6ZSwgbGF5b3V0IH0gPSB0aGlzO1xuICAgIHVwZGF0ZUhvc3RDbGFzcyhlbCwgcmVuLCB7XG4gICAgICBbYCR7cHJlZml4Q2xzfV9fY29udGFpbmVyYF06IHRydWUsXG4gICAgICBbYCR7cHJlZml4Q2xzfV9fJHtzaXplfWBdOiB0cnVlLFxuICAgICAgW2Ake3ByZWZpeENsc31fXyR7bGF5b3V0fWBdOiB0cnVlLFxuICAgICAgW2BjbGVhcmZpeGBdOiB0cnVlLFxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zZXRDbGFzcygpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy5zZXRDbGFzcygpO1xuICB9XG59XG4iXX0=