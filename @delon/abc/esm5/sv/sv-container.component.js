/**
 * @fileoverview added by tsickle
 * Generated from: sv-container.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { AlainConfigService, InputNumber } from '@delon/util';
var SVContainerComponent = /** @class */ (function () {
    function SVContainerComponent(configSrv) {
        configSrv.attach(this, 'sv', {
            size: 'large',
            gutter: 32,
            layout: 'horizontal',
            col: 3,
            default: true,
        });
    }
    SVContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sv-container, [sv-container]',
                    exportAs: 'svContainer',
                    template: "<div class=\"ant-row\" [ngStyle]=\"{ 'margin-left.px': -(gutter / 2), 'margin-right.px': -(gutter / 2) }\">\n  <sv-title *ngIf=\"title\">\n    <ng-container *nzStringTemplateOutlet=\"title\">{{ title }}</ng-container>\n  </sv-title>\n  <ng-content></ng-content>\n</div>\n",
                    host: {
                        '[class.sv__container]': 'true',
                        '[class.sv__horizontal]': "layout === 'horizontal'",
                        '[class.sv__vertical]': "layout === 'vertical'",
                        '[class.sv__small]': "size === 'small'",
                        '[class.sv__large]': "size === 'large'",
                        '[class.clearfix]': "true",
                    },
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    SVContainerComponent.ctorParameters = function () { return [
        { type: AlainConfigService }
    ]; };
    SVContainerComponent.propDecorators = {
        title: [{ type: Input }],
        size: [{ type: Input }],
        gutter: [{ type: Input }],
        layout: [{ type: Input }],
        labelWidth: [{ type: Input }],
        col: [{ type: Input }],
        default: [{ type: Input }]
    };
    __decorate([
        InputNumber(),
        __metadata("design:type", Number)
    ], SVContainerComponent.prototype, "gutter", void 0);
    __decorate([
        InputNumber(),
        __metadata("design:type", Number)
    ], SVContainerComponent.prototype, "labelWidth", void 0);
    __decorate([
        InputNumber(),
        __metadata("design:type", Number)
    ], SVContainerComponent.prototype, "col", void 0);
    return SVContainerComponent;
}());
export { SVContainerComponent };
if (false) {
    /** @type {?} */
    SVContainerComponent.prototype.title;
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3YtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvc3YvIiwic291cmNlcyI6WyJzdi1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFlLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFOUQ7SUEyQkUsOEJBQVksU0FBNkI7UUFDdkMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFO1lBQzNCLElBQUksRUFBRSxPQUFPO1lBQ2IsTUFBTSxFQUFFLEVBQUU7WUFDVixNQUFNLEVBQUUsWUFBWTtZQUNwQixHQUFHLEVBQUUsQ0FBQztZQUNOLE9BQU8sRUFBRSxJQUFJO1NBQ2QsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBbkNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsOEJBQThCO29CQUN4QyxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsMlJBQTRDO29CQUM1QyxJQUFJLEVBQUU7d0JBQ0osdUJBQXVCLEVBQUUsTUFBTTt3QkFDL0Isd0JBQXdCLEVBQUUseUJBQXlCO3dCQUNuRCxzQkFBc0IsRUFBRSx1QkFBdUI7d0JBQy9DLG1CQUFtQixFQUFFLGtCQUFrQjt3QkFDdkMsbUJBQW1CLEVBQUUsa0JBQWtCO3dCQUN2QyxrQkFBa0IsRUFBRSxNQUFNO3FCQUMzQjtvQkFDRCxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3RDOzs7O2dCQWpCUSxrQkFBa0I7Ozt3QkFtQnhCLEtBQUs7dUJBQ0wsS0FBSzt5QkFFTCxLQUFLO3lCQUNMLEtBQUs7NkJBQ0wsS0FBSztzQkFFTCxLQUFLOzBCQUNMLEtBQUs7O0lBTGtCO1FBQWQsV0FBVyxFQUFFOzt3REFBZ0I7SUFFZjtRQUFkLFdBQVcsRUFBRTs7NERBQW9CO0lBRW5CO1FBQWQsV0FBVyxFQUFFOztxREFBYTtJQVl0QywyQkFBQztDQUFBLEFBcENELElBb0NDO1NBcEJZLG9CQUFvQjs7O0lBQy9CLHFDQUEyQzs7SUFDM0Msb0NBQWlDOzs7OztJQUVqQyxzQ0FBdUM7O0lBQ3ZDLHNDQUEyQzs7SUFDM0MsMENBQTJDOzs7OztJQUUzQyxtQ0FBb0M7O0lBQ3BDLHVDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBUZW1wbGF0ZVJlZiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFsYWluQ29uZmlnU2VydmljZSwgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N2LWNvbnRhaW5lciwgW3N2LWNvbnRhaW5lcl0nLFxuICBleHBvcnRBczogJ3N2Q29udGFpbmVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N2LWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLnN2X19jb250YWluZXJdJzogJ3RydWUnLFxuICAgICdbY2xhc3Muc3ZfX2hvcml6b250YWxdJzogYGxheW91dCA9PT0gJ2hvcml6b250YWwnYCxcbiAgICAnW2NsYXNzLnN2X192ZXJ0aWNhbF0nOiBgbGF5b3V0ID09PSAndmVydGljYWwnYCxcbiAgICAnW2NsYXNzLnN2X19zbWFsbF0nOiBgc2l6ZSA9PT0gJ3NtYWxsJ2AsXG4gICAgJ1tjbGFzcy5zdl9fbGFyZ2VdJzogYHNpemUgPT09ICdsYXJnZSdgLFxuICAgICdbY2xhc3MuY2xlYXJmaXhdJzogYHRydWVgLFxuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIFNWQ29udGFpbmVyQ29tcG9uZW50IHtcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBzaXplOiAnc21hbGwnIHwgJ2xhcmdlJztcbiAgLyoqIOWIl+ihqOmhuemXtOi3ne+8jOWNleS9jeS4uiBgcHhgICovXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGd1dHRlcjogbnVtYmVyO1xuICBASW5wdXQoKSBsYXlvdXQ6ICdob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCc7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGxhYmVsV2lkdGg6IG51bWJlcjtcbiAgLyoqIOaMh+WumuS/oeaBr+acgOWkmuWIhuWHoOWIl+Wxleekuu+8jOacgOe7iOS4gOihjOWHoOWIl+eUsSBjb2wg6YWN572u57uT5ZCI5ZON5bqU5byP6KeE5YiZ5Yaz5a6aICovXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGNvbDogbnVtYmVyO1xuICBASW5wdXQoKSBkZWZhdWx0OiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZ1NydjogQWxhaW5Db25maWdTZXJ2aWNlKSB7XG4gICAgY29uZmlnU3J2LmF0dGFjaCh0aGlzLCAnc3YnLCB7XG4gICAgICBzaXplOiAnbGFyZ2UnLFxuICAgICAgZ3V0dGVyOiAzMixcbiAgICAgIGxheW91dDogJ2hvcml6b250YWwnLFxuICAgICAgY29sOiAzLFxuICAgICAgZGVmYXVsdDogdHJ1ZSxcbiAgICB9KTtcbiAgfVxufVxuIl19