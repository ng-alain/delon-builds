import { Component, Input, TemplateRef, NgModule } from '@angular/core';
import { __spread } from 'tslib';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var COMPONENTS = [ResultComponent];
var ResultModule = /** @class */ (function () {
    function ResultModule() {
    }
    /**
     * @return {?}
     */
    ResultModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: ResultModule, providers: [] };
    };
    ResultModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, NgZorroAntdModule],
                    declarations: __spread(COMPONENTS),
                    exports: __spread(COMPONENTS),
                },] }
    ];
    return ResultModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { ResultComponent, ResultModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdWx0LmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AZGVsb24vYWJjL3Jlc3VsdC9yZXN1bHQuY29tcG9uZW50LnRzIiwibmc6Ly9AZGVsb24vYWJjL3Jlc3VsdC9yZXN1bHQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Jlc3VsdCcsXG4gIHRlbXBsYXRlOiBgXG4gIDxkaXYgY2xhc3M9XCJyZXN1bHRfX2ljb25cIj48aSBuei1pY29uIGNsYXNzPVwiYW50aWNvbiBhbnRpY29uLXt7X2ljb259fSByZXN1bHRfX2ljb24te3tfdHlwZX19XCI+PC9pPjwvZGl2PlxuICA8ZGl2IGNsYXNzPVwicmVzdWx0X190aXRsZVwiPjxuZy1jb250YWluZXIgKm5nSWY9XCJfdGl0bGU7IGVsc2UgX3RpdGxlVHBsXCI+e3tfdGl0bGV9fTwvbmctY29udGFpbmVyPjwvZGl2PlxuICA8ZGl2ICpuZ0lmPVwiX2Rlc2NyaXB0aW9uIHx8IF9kZXNjcmlwdGlvblRwbFwiIGNsYXNzPVwicmVzdWx0X19kZXNjXCI+PG5nLWNvbnRhaW5lciAqbmdJZj1cIl9kZXNjcmlwdGlvbjsgZWxzZSBfZGVzY3JpcHRpb25UcGxcIj57e19kZXNjcmlwdGlvbn19PC9uZy1jb250YWluZXI+PC9kaXY+XG4gIDxkaXYgKm5nSWY9XCJfZXh0cmEgfHwgX2V4dHJhVHBsXCIgY2xhc3M9XCJyZXN1bHRfX2V4dHJhXCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIl9leHRyYTsgZWxzZSBfZXh0cmFUcGxcIj57e19leHRyYX19PC9uZy1jb250YWluZXI+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwicmVzdWx0X19hY3Rpb25zXCI+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvZGl2PlxuICBgLFxuICBob3N0OiB7ICdbY2xhc3MucmVzdWx0XSc6ICd0cnVlJyB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgUmVzdWx0Q29tcG9uZW50IHtcbiAgX3R5cGUgPSAnJztcbiAgX2ljb24gPSAnJztcbiAgQElucHV0KClcbiAgc2V0IHR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3R5cGUgPSB2YWx1ZTtcbiAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICBjYXNlICdzdWNjZXNzJzpcbiAgICAgICAgdGhpcy5faWNvbiA9ICdjaGVjay1jaXJjbGUnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgICAgdGhpcy5faWNvbiA9ICdjbG9zZS1jaXJjbGUnO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMuX2ljb24gPSB2YWx1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgX3RpdGxlID0gJyc7XG4gIF90aXRsZVRwbDogVGVtcGxhdGVSZWY8YW55PjtcbiAgQElucHV0KClcbiAgc2V0IHRpdGxlKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIHRoaXMuX3RpdGxlID0gbnVsbDtcbiAgICAgIHRoaXMuX3RpdGxlVHBsID0gdmFsdWU7XG4gICAgfSBlbHNlIHRoaXMuX3RpdGxlID0gdmFsdWU7XG4gIH1cblxuICBfZGVzY3JpcHRpb24gPSAnJztcbiAgX2Rlc2NyaXB0aW9uVHBsOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBASW5wdXQoKVxuICBzZXQgZGVzY3JpcHRpb24odmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4pIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgdGhpcy5fZGVzY3JpcHRpb24gPSBudWxsO1xuICAgICAgdGhpcy5fZGVzY3JpcHRpb25UcGwgPSB2YWx1ZTtcbiAgICB9IGVsc2UgdGhpcy5fZGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgfVxuXG4gIF9leHRyYSA9ICcnO1xuICBfZXh0cmFUcGw6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBJbnB1dCgpXG4gIHNldCBleHRyYSh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICB0aGlzLl9leHRyYSA9IG51bGw7XG4gICAgICB0aGlzLl9leHRyYVRwbCA9IHZhbHVlO1xuICAgIH0gZWxzZSB0aGlzLl9leHRyYSA9IHZhbHVlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nWm9ycm9BbnRkTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XG5cbmltcG9ydCB7IFJlc3VsdENvbXBvbmVudCB9IGZyb20gJy4vcmVzdWx0LmNvbXBvbmVudCc7XG5cbmNvbnN0IENPTVBPTkVOVFMgPSBbUmVzdWx0Q29tcG9uZW50XTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTmdab3Jyb0FudGRNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5DT01QT05FTlRTXSxcbiAgZXhwb3J0czogWy4uLkNPTVBPTkVOVFNdLFxufSlcbmV4cG9ydCBjbGFzcyBSZXN1bHRNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4geyBuZ01vZHVsZTogUmVzdWx0TW9kdWxlLCBwcm92aWRlcnM6IFtdIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtJQUVBO1FBZUUs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