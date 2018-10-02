/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, TemplateRef } from '@angular/core';
var ResultComponent = /** @class */ (function () {
    function ResultComponent() {
        this._type = '';
        this._icon = '';
        this._title = '';
        this._description = '';
        this._extra = '';
    }
    Object.defineProperty(ResultComponent.prototype, "type", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._type = value;
            switch (value) {
                case 'success':
                    this._icon = 'check-circle';
                    break;
                case 'error':
                    this._icon = 'close-circle';
                    break;
                default:
                    this._icon = value;
                    break;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResultComponent.prototype, "title", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value instanceof TemplateRef) {
                this._title = null;
                this._titleTpl = value;
            }
            else
                this._title = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResultComponent.prototype, "description", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value instanceof TemplateRef) {
                this._description = null;
                this._descriptionTpl = value;
            }
            else
                this._description = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResultComponent.prototype, "extra", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value instanceof TemplateRef) {
                this._extra = null;
                this._extraTpl = value;
            }
            else
                this._extra = value;
        },
        enumerable: true,
        configurable: true
    });
    ResultComponent.decorators = [
        { type: Component, args: [{
                    selector: 'result',
                    template: "\n  <div class=\"result__icon\"><i class=\"anticon anticon-{{_icon}} result__icon-{{_type}}\"></i></div>\n  <div class=\"result__title\"><ng-container *ngIf=\"_title; else _titleTpl\">{{_title}}</ng-container></div>\n  <div *ngIf=\"_description || _descriptionTpl\" class=\"result__desc\"><ng-container *ngIf=\"_description; else _descriptionTpl\">{{_description}}</ng-container></div>\n  <div *ngIf=\"_extra || _extraTpl\" class=\"result__extra\">\n    <ng-container *ngIf=\"_extra; else _extraTpl\">{{_extra}}</ng-container>\n  </div>\n  <div class=\"result__actions\"><ng-content></ng-content></div>\n  ",
                    host: { '[class.result]': 'true' },
                    preserveWhitespaces: false
                }] }
    ];
    ResultComponent.propDecorators = {
        type: [{ type: Input }],
        title: [{ type: Input }],
        description: [{ type: Input }],
        extra: [{ type: Input }]
    };
    return ResultComponent;
}());
export { ResultComponent };
if (false) {
    /** @type {?} */
    ResultComponent.prototype._type;
    /** @type {?} */
    ResultComponent.prototype._icon;
    /** @type {?} */
    ResultComponent.prototype._title;
    /** @type {?} */
    ResultComponent.prototype._titleTpl;
    /** @type {?} */
    ResultComponent.prototype._description;
    /** @type {?} */
    ResultComponent.prototype._descriptionTpl;
    /** @type {?} */
    ResultComponent.prototype._extra;
    /** @type {?} */
    ResultComponent.prototype._extraTpl;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdWx0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvcmVzdWx0LyIsInNvdXJjZXMiOlsicmVzdWx0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7cUJBaUJwRCxFQUFFO3FCQUNGLEVBQUU7c0JBaUJELEVBQUU7NEJBVUksRUFBRTtzQkFVUixFQUFFOztJQXBDWCxzQkFDSSxpQ0FBSTs7Ozs7UUFEUixVQUNTLEtBQWE7WUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDbkIsUUFBUSxLQUFLLEVBQUU7Z0JBQ2IsS0FBSyxTQUFTO29CQUNaLElBQUksQ0FBQyxLQUFLLEdBQUcsY0FBYyxDQUFDO29CQUM1QixNQUFNO2dCQUNSLEtBQUssT0FBTztvQkFDVixJQUFJLENBQUMsS0FBSyxHQUFHLGNBQWMsQ0FBQztvQkFDNUIsTUFBTTtnQkFDUjtvQkFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztvQkFDbkIsTUFBTTthQUNUO1NBQ0Y7OztPQUFBO0lBSUQsc0JBQ0ksa0NBQUs7Ozs7O1FBRFQsVUFDVSxLQUFnQztZQUN4QyxJQUFJLEtBQUssWUFBWSxXQUFXLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQzthQUN4Qjs7Z0JBQU0sSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDNUI7OztPQUFBO0lBSUQsc0JBQ0ksd0NBQVc7Ozs7O1FBRGYsVUFDZ0IsS0FBZ0M7WUFDOUMsSUFBSSxLQUFLLFlBQVksV0FBVyxFQUFFO2dCQUNoQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztnQkFDekIsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7YUFDOUI7O2dCQUFNLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1NBQ2xDOzs7T0FBQTtJQUlELHNCQUNJLGtDQUFLOzs7OztRQURULFVBQ1UsS0FBZ0M7WUFDeEMsSUFBSSxLQUFLLFlBQVksV0FBVyxFQUFFO2dCQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7YUFDeEI7O2dCQUFNLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQzVCOzs7T0FBQTs7Z0JBN0RGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsUUFBUTtvQkFDbEIsUUFBUSxFQUFFLGdtQkFRVDtvQkFDRCxJQUFJLEVBQUUsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUU7b0JBQ2xDLG1CQUFtQixFQUFFLEtBQUs7aUJBQzNCOzs7dUJBSUUsS0FBSzt3QkFrQkwsS0FBSzs4QkFVTCxLQUFLO3dCQVVMLEtBQUs7OzBCQXpEUjs7U0FnQmEsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3Jlc3VsdCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8ZGl2IGNsYXNzPVwicmVzdWx0X19pY29uXCI+PGkgY2xhc3M9XCJhbnRpY29uIGFudGljb24te3tfaWNvbn19IHJlc3VsdF9faWNvbi17e190eXBlfX1cIj48L2k+PC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cInJlc3VsdF9fdGl0bGVcIj48bmctY29udGFpbmVyICpuZ0lmPVwiX3RpdGxlOyBlbHNlIF90aXRsZVRwbFwiPnt7X3RpdGxlfX08L25nLWNvbnRhaW5lcj48L2Rpdj5cclxuICA8ZGl2ICpuZ0lmPVwiX2Rlc2NyaXB0aW9uIHx8IF9kZXNjcmlwdGlvblRwbFwiIGNsYXNzPVwicmVzdWx0X19kZXNjXCI+PG5nLWNvbnRhaW5lciAqbmdJZj1cIl9kZXNjcmlwdGlvbjsgZWxzZSBfZGVzY3JpcHRpb25UcGxcIj57e19kZXNjcmlwdGlvbn19PC9uZy1jb250YWluZXI+PC9kaXY+XHJcbiAgPGRpdiAqbmdJZj1cIl9leHRyYSB8fCBfZXh0cmFUcGxcIiBjbGFzcz1cInJlc3VsdF9fZXh0cmFcIj5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJfZXh0cmE7IGVsc2UgX2V4dHJhVHBsXCI+e3tfZXh0cmF9fTwvbmctY29udGFpbmVyPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJyZXN1bHRfX2FjdGlvbnNcIj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9kaXY+XHJcbiAgYCxcclxuICBob3N0OiB7ICdbY2xhc3MucmVzdWx0XSc6ICd0cnVlJyB9LFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVzdWx0Q29tcG9uZW50IHtcclxuICBfdHlwZSA9ICcnO1xyXG4gIF9pY29uID0gJyc7XHJcbiAgQElucHV0KClcclxuICBzZXQgdHlwZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl90eXBlID0gdmFsdWU7XHJcbiAgICBzd2l0Y2ggKHZhbHVlKSB7XHJcbiAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxyXG4gICAgICAgIHRoaXMuX2ljb24gPSAnY2hlY2stY2lyY2xlJztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnZXJyb3InOlxyXG4gICAgICAgIHRoaXMuX2ljb24gPSAnY2xvc2UtY2lyY2xlJztcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICB0aGlzLl9pY29uID0gdmFsdWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfdGl0bGUgPSAnJztcclxuICBfdGl0bGVUcGw6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgQElucHV0KClcclxuICBzZXQgdGl0bGUodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4pIHtcclxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XHJcbiAgICAgIHRoaXMuX3RpdGxlID0gbnVsbDtcclxuICAgICAgdGhpcy5fdGl0bGVUcGwgPSB2YWx1ZTtcclxuICAgIH0gZWxzZSB0aGlzLl90aXRsZSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgX2Rlc2NyaXB0aW9uID0gJyc7XHJcbiAgX2Rlc2NyaXB0aW9uVHBsOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGRlc2NyaXB0aW9uKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KSB7XHJcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xyXG4gICAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IG51bGw7XHJcbiAgICAgIHRoaXMuX2Rlc2NyaXB0aW9uVHBsID0gdmFsdWU7XHJcbiAgICB9IGVsc2UgdGhpcy5fZGVzY3JpcHRpb24gPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIF9leHRyYSA9ICcnO1xyXG4gIF9leHRyYVRwbDogVGVtcGxhdGVSZWY8YW55PjtcclxuICBASW5wdXQoKVxyXG4gIHNldCBleHRyYSh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pikge1xyXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcclxuICAgICAgdGhpcy5fZXh0cmEgPSBudWxsO1xyXG4gICAgICB0aGlzLl9leHRyYVRwbCA9IHZhbHVlO1xyXG4gICAgfSBlbHNlIHRoaXMuX2V4dHJhID0gdmFsdWU7XHJcbiAgfVxyXG59XHJcbiJdfQ==