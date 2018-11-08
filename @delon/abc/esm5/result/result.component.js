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
                    template: "\n  <div class=\"result__icon\"><i nz-icon class=\"anticon anticon-{{_icon}} result__icon-{{_type}}\"></i></div>\n  <div class=\"result__title\"><ng-container *ngIf=\"_title; else _titleTpl\">{{_title}}</ng-container></div>\n  <div *ngIf=\"_description || _descriptionTpl\" class=\"result__desc\"><ng-container *ngIf=\"_description; else _descriptionTpl\">{{_description}}</ng-container></div>\n  <div *ngIf=\"_extra || _extraTpl\" class=\"result__extra\">\n    <ng-container *ngIf=\"_extra; else _extraTpl\">{{_extra}}</ng-container>\n  </div>\n  <div class=\"result__actions\"><ng-content></ng-content></div>\n  ",
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdWx0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvcmVzdWx0LyIsInNvdXJjZXMiOlsicmVzdWx0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7cUJBaUJwRCxFQUFFO3FCQUNGLEVBQUU7c0JBaUJELEVBQUU7NEJBVUksRUFBRTtzQkFVUixFQUFFOztJQXBDWCxzQkFDSSxpQ0FBSTs7Ozs7UUFEUixVQUNTLEtBQWE7WUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDbkIsUUFBUSxLQUFLLEVBQUU7Z0JBQ2IsS0FBSyxTQUFTO29CQUNaLElBQUksQ0FBQyxLQUFLLEdBQUcsY0FBYyxDQUFDO29CQUM1QixNQUFNO2dCQUNSLEtBQUssT0FBTztvQkFDVixJQUFJLENBQUMsS0FBSyxHQUFHLGNBQWMsQ0FBQztvQkFDNUIsTUFBTTtnQkFDUjtvQkFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztvQkFDbkIsTUFBTTthQUNUO1NBQ0Y7OztPQUFBO0lBSUQsc0JBQ0ksa0NBQUs7Ozs7O1FBRFQsVUFDVSxLQUFnQztZQUN4QyxJQUFJLEtBQUssWUFBWSxXQUFXLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQzthQUN4Qjs7Z0JBQU0sSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDNUI7OztPQUFBO0lBSUQsc0JBQ0ksd0NBQVc7Ozs7O1FBRGYsVUFDZ0IsS0FBZ0M7WUFDOUMsSUFBSSxLQUFLLFlBQVksV0FBVyxFQUFFO2dCQUNoQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztnQkFDekIsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7YUFDOUI7O2dCQUFNLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1NBQ2xDOzs7T0FBQTtJQUlELHNCQUNJLGtDQUFLOzs7OztRQURULFVBQ1UsS0FBZ0M7WUFDeEMsSUFBSSxLQUFLLFlBQVksV0FBVyxFQUFFO2dCQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7YUFDeEI7O2dCQUFNLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQzVCOzs7T0FBQTs7Z0JBN0RGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsUUFBUTtvQkFDbEIsUUFBUSxFQUFFLHdtQkFRVDtvQkFDRCxJQUFJLEVBQUUsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUU7b0JBQ2xDLG1CQUFtQixFQUFFLEtBQUs7aUJBQzNCOzs7dUJBSUUsS0FBSzt3QkFrQkwsS0FBSzs4QkFVTCxLQUFLO3dCQVVMLEtBQUs7OzBCQXpEUjs7U0FnQmEsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Jlc3VsdCcsXG4gIHRlbXBsYXRlOiBgXG4gIDxkaXYgY2xhc3M9XCJyZXN1bHRfX2ljb25cIj48aSBuei1pY29uIGNsYXNzPVwiYW50aWNvbiBhbnRpY29uLXt7X2ljb259fSByZXN1bHRfX2ljb24te3tfdHlwZX19XCI+PC9pPjwvZGl2PlxuICA8ZGl2IGNsYXNzPVwicmVzdWx0X190aXRsZVwiPjxuZy1jb250YWluZXIgKm5nSWY9XCJfdGl0bGU7IGVsc2UgX3RpdGxlVHBsXCI+e3tfdGl0bGV9fTwvbmctY29udGFpbmVyPjwvZGl2PlxuICA8ZGl2ICpuZ0lmPVwiX2Rlc2NyaXB0aW9uIHx8IF9kZXNjcmlwdGlvblRwbFwiIGNsYXNzPVwicmVzdWx0X19kZXNjXCI+PG5nLWNvbnRhaW5lciAqbmdJZj1cIl9kZXNjcmlwdGlvbjsgZWxzZSBfZGVzY3JpcHRpb25UcGxcIj57e19kZXNjcmlwdGlvbn19PC9uZy1jb250YWluZXI+PC9kaXY+XG4gIDxkaXYgKm5nSWY9XCJfZXh0cmEgfHwgX2V4dHJhVHBsXCIgY2xhc3M9XCJyZXN1bHRfX2V4dHJhXCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIl9leHRyYTsgZWxzZSBfZXh0cmFUcGxcIj57e19leHRyYX19PC9uZy1jb250YWluZXI+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwicmVzdWx0X19hY3Rpb25zXCI+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvZGl2PlxuICBgLFxuICBob3N0OiB7ICdbY2xhc3MucmVzdWx0XSc6ICd0cnVlJyB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgUmVzdWx0Q29tcG9uZW50IHtcbiAgX3R5cGUgPSAnJztcbiAgX2ljb24gPSAnJztcbiAgQElucHV0KClcbiAgc2V0IHR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3R5cGUgPSB2YWx1ZTtcbiAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICBjYXNlICdzdWNjZXNzJzpcbiAgICAgICAgdGhpcy5faWNvbiA9ICdjaGVjay1jaXJjbGUnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgICAgdGhpcy5faWNvbiA9ICdjbG9zZS1jaXJjbGUnO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMuX2ljb24gPSB2YWx1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgX3RpdGxlID0gJyc7XG4gIF90aXRsZVRwbDogVGVtcGxhdGVSZWY8YW55PjtcbiAgQElucHV0KClcbiAgc2V0IHRpdGxlKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIHRoaXMuX3RpdGxlID0gbnVsbDtcbiAgICAgIHRoaXMuX3RpdGxlVHBsID0gdmFsdWU7XG4gICAgfSBlbHNlIHRoaXMuX3RpdGxlID0gdmFsdWU7XG4gIH1cblxuICBfZGVzY3JpcHRpb24gPSAnJztcbiAgX2Rlc2NyaXB0aW9uVHBsOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBASW5wdXQoKVxuICBzZXQgZGVzY3JpcHRpb24odmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4pIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgdGhpcy5fZGVzY3JpcHRpb24gPSBudWxsO1xuICAgICAgdGhpcy5fZGVzY3JpcHRpb25UcGwgPSB2YWx1ZTtcbiAgICB9IGVsc2UgdGhpcy5fZGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgfVxuXG4gIF9leHRyYSA9ICcnO1xuICBfZXh0cmFUcGw6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBJbnB1dCgpXG4gIHNldCBleHRyYSh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICB0aGlzLl9leHRyYSA9IG51bGw7XG4gICAgICB0aGlzLl9leHRyYVRwbCA9IHZhbHVlO1xuICAgIH0gZWxzZSB0aGlzLl9leHRyYSA9IHZhbHVlO1xuICB9XG59XG4iXX0=