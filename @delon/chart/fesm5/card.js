import { Component, TemplateRef, Input, NgModule } from '@angular/core';
import { toBoolean, DelonUtilModule } from '@delon/util';
import { __spread } from 'tslib';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var G2CardComponent = /** @class */ (function () {
    function G2CardComponent() {
        this._bordered = false;
        this._avatar = '';
        this._title = '';
        this._action = '';
        this.total = '';
        this._height = 'auto';
        this._footer = '';
        this._loading = false;
    }
    Object.defineProperty(G2CardComponent.prototype, "bordered", {
        /** 是否显示边框 */
        get: /**
         * 是否显示边框
         * @return {?}
         */
        function () {
            return this._bordered;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._bordered = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G2CardComponent.prototype, "avatar", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value instanceof TemplateRef) {
                this._avatar = null;
                this._avatarTpl = value;
            }
            else
                this._avatar = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G2CardComponent.prototype, "title", {
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
    Object.defineProperty(G2CardComponent.prototype, "action", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value instanceof TemplateRef) {
                this._action = null;
                this._actionTpl = value;
            }
            else
                this._action = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G2CardComponent.prototype, "contentHeight", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._orgHeight = value;
            this._height =
                typeof value === 'number' ? (this._height = value + "px") : value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G2CardComponent.prototype, "footer", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value instanceof TemplateRef) {
                this._footer = null;
                this._footerTpl = value;
            }
            else
                this._footer = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G2CardComponent.prototype, "loading", {
        /** 是否显示Loading */
        get: /**
         * 是否显示Loading
         * @return {?}
         */
        function () {
            return this._loading;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._loading = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    G2CardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'g2-card',
                    template: "<nz-card [nzBodyStyle]=\"{padding: '20px 24px 8px 24px'}\" [nzBordered]=\"bordered\">\r\n  <nz-spin [nzSpinning]=\"loading\">\r\n    <div class=\"g2-card__top\">\r\n      <div class=\"g2-card__avatar\">\r\n        <ng-container *ngIf=\"_avatar; else _avatarTpl\">{{ _avatar }}</ng-container>\r\n      </div>\r\n      <div class=\"g2-card__meta-wrap\">\r\n        <div class=\"g2-card__meta\">\r\n          <span class=\"g2-card__meta-title\" *ngIf=\"_title; else _titleTpl\">{{ _title }}</span>\r\n          <span class=\"g2-card__meta-action\" *ngIf=\"_action || _actionTpl\">\r\n            <ng-container *ngIf=\"_action; else _actionTpl\">{{ _action }}</ng-container>\r\n          </span>\r\n        </div>\r\n        <p *ngIf=\"total\" class=\"g2-card__total\" [innerHTML]=\"total\"></p>\r\n      </div>\r\n    </div>\r\n    <div class=\"g2-card__desc\" [ngStyle]=\"{'height':_height}\">\r\n      <div [ngClass]=\"{'g2-card__fixed': !!_orgHeight }\">\r\n        <ng-content></ng-content>\r\n      </div>\r\n    </div>\r\n    <div class=\"g2-card__footer\" *ngIf=\"_footer || _footerTpl\">\r\n      <ng-container *ngIf=\"_footer; else _footerTpl\">{{ _footer }}</ng-container>\r\n    </div>\r\n  </nz-spin>\r\n</nz-card>\r\n",
                    host: { '[class.g2-card]': 'true' },
                    preserveWhitespaces: false
                }] }
    ];
    G2CardComponent.propDecorators = {
        bordered: [{ type: Input }],
        avatar: [{ type: Input }],
        title: [{ type: Input }],
        action: [{ type: Input }],
        total: [{ type: Input }],
        contentHeight: [{ type: Input }],
        footer: [{ type: Input }],
        loading: [{ type: Input }]
    };
    return G2CardComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var COMPONENTS = [G2CardComponent];
var G2CardModule = /** @class */ (function () {
    function G2CardModule() {
    }
    /**
     * @return {?}
     */
    G2CardModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: G2CardModule, providers: [] };
    };
    G2CardModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, DelonUtilModule, NgZorroAntdModule],
                    declarations: __spread(COMPONENTS),
                    exports: __spread(COMPONENTS),
                },] }
    ];
    return G2CardModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { G2CardComponent, G2CardModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGRlbG9uL2NoYXJ0L2NhcmQvY2FyZC5jb21wb25lbnQudHMiLCJuZzovL0BkZWxvbi9jaGFydC9jYXJkL2NhcmQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIElucHV0LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICdAZGVsb24vdXRpbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2cyLWNhcmQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJkLmNvbXBvbmVudC5odG1sJyxcclxuICBob3N0OiB7ICdbY2xhc3MuZzItY2FyZF0nOiAndHJ1ZScgfSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEcyQ2FyZENvbXBvbmVudCB7XHJcblxyXG4gIC8qKiDDpsKYwq/DpcKQwqbDpsKYwr7Dp8KkwrrDqMK+wrnDpsKhwoYgKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCBib3JkZXJlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9ib3JkZXJlZDtcclxuICB9XHJcbiAgc2V0IGJvcmRlcmVkKHZhbHVlOiBhbnkpIHtcclxuICAgIHRoaXMuX2JvcmRlcmVkID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICB9XHJcbiAgcHJpdmF0ZSBfYm9yZGVyZWQgPSBmYWxzZTtcclxuXHJcbiAgX2F2YXRhciA9ICcnO1xyXG4gIF9hdmF0YXJUcGw6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgQElucHV0KClcclxuICBzZXQgYXZhdGFyKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KSB7XHJcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xyXG4gICAgICB0aGlzLl9hdmF0YXIgPSBudWxsO1xyXG4gICAgICB0aGlzLl9hdmF0YXJUcGwgPSB2YWx1ZTtcclxuICAgIH0gZWxzZSB0aGlzLl9hdmF0YXIgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIF90aXRsZSA9ICcnO1xyXG4gIF90aXRsZVRwbDogVGVtcGxhdGVSZWY8YW55PjtcclxuICBASW5wdXQoKVxyXG4gIHNldCB0aXRsZSh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pikge1xyXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcclxuICAgICAgdGhpcy5fdGl0bGUgPSBudWxsO1xyXG4gICAgICB0aGlzLl90aXRsZVRwbCA9IHZhbHVlO1xyXG4gICAgfSBlbHNlIHRoaXMuX3RpdGxlID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBfYWN0aW9uID0gJyc7XHJcbiAgX2FjdGlvblRwbDogVGVtcGxhdGVSZWY8YW55PjtcclxuICBASW5wdXQoKVxyXG4gIHNldCBhY3Rpb24odmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4pIHtcclxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XHJcbiAgICAgIHRoaXMuX2FjdGlvbiA9IG51bGw7XHJcbiAgICAgIHRoaXMuX2FjdGlvblRwbCA9IHZhbHVlO1xyXG4gICAgfSBlbHNlIHRoaXMuX2FjdGlvbiA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCkgdG90YWwgPSAnJztcclxuXHJcbiAgX2hlaWdodCA9ICdhdXRvJztcclxuICBfb3JnSGVpZ2h0OiBhbnk7XHJcbiAgQElucHV0KClcclxuICBzZXQgY29udGVudEhlaWdodCh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9vcmdIZWlnaHQgPSB2YWx1ZTtcclxuICAgIHRoaXMuX2hlaWdodCA9XHJcbiAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgPyAodGhpcy5faGVpZ2h0ID0gYCR7dmFsdWV9cHhgKSA6IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgX2Zvb3RlciA9ICcnO1xyXG4gIF9mb290ZXJUcGw6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgQElucHV0KClcclxuICBzZXQgZm9vdGVyKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KSB7XHJcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xyXG4gICAgICB0aGlzLl9mb290ZXIgPSBudWxsO1xyXG4gICAgICB0aGlzLl9mb290ZXJUcGwgPSB2YWx1ZTtcclxuICAgIH0gZWxzZSB0aGlzLl9mb290ZXIgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIC8qKiDDpsKYwq/DpcKQwqbDpsKYwr7Dp8KkwrpMb2FkaW5nICovXHJcbiAgQElucHV0KClcclxuICBnZXQgbG9hZGluZygpIHtcclxuICAgIHJldHVybiB0aGlzLl9sb2FkaW5nO1xyXG4gIH1cclxuICBzZXQgbG9hZGluZyh2YWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLl9sb2FkaW5nID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICB9XHJcbiAgcHJpdmF0ZSBfbG9hZGluZyA9IGZhbHNlO1xyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ1pvcnJvQW50ZE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xyXG5pbXBvcnQgeyBEZWxvblV0aWxNb2R1bGUgfSBmcm9tICdAZGVsb24vdXRpbCc7XHJcblxyXG5pbXBvcnQgeyBHMkNhcmRDb21wb25lbnQgfSBmcm9tICcuL2NhcmQuY29tcG9uZW50JztcclxuXHJcbmNvbnN0IENPTVBPTkVOVFMgPSBbRzJDYXJkQ29tcG9uZW50XTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRGVsb25VdGlsTW9kdWxlLCBOZ1pvcnJvQW50ZE1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbLi4uQ09NUE9ORU5UU10sXHJcbiAgZXhwb3J0czogWy4uLkNPTVBPTkVOVFNdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRzJDYXJkTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7IG5nTW9kdWxlOiBHMkNhcmRNb2R1bGUsIHByb3ZpZGVyczogW10gfTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7eUJBdUJzQixLQUFLO3VCQUVmLEVBQUU7c0JBVUgsRUFBRTt1QkFVRCxFQUFFO3FCQVVLLEVBQUU7dUJBRVQsTUFBTTt1QkFTTixFQUFFO3dCQWtCTyxLQUFLOztJQXBFeEIsc0JBQ0kscUNBQVE7Ozs7OztRQURaO1lBRUUsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ3ZCOzs7OztRQUNELFVBQWEsS0FBVTtZQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNuQzs7O09BSEE7SUFRRCxzQkFDSSxtQ0FBTTs7Ozs7UUFEVixVQUNXLEtBQWdDO1lBQ3pDLElBQUksS0FBSyxZQUFZLFdBQVcsRUFBRTtnQkFDaEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO2FBQ3pCOztnQkFBTSxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztTQUM3Qjs7O09BQUE7SUFJRCxzQkFDSSxrQ0FBSzs7Ozs7UUFEVCxVQUNVLEtBQWdDO1lBQ3hDLElBQUksS0FBSyxZQUFZLFdBQVcsRUFBRTtnQkFDaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2FBQ3hCOztnQkFBTSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUM1Qjs7O09BQUE7SUFJRCxzQkFDSSxtQ0FBTTs7Ozs7UUFEVixVQUNXLEtBQWdDO1lBQ3pDLElBQUksS0FBSyxZQUFZLFdBQVcsRUFBRTtnQkFDaEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO2FBQ3pCOztnQkFBTSxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztTQUM3Qjs7O09BQUE7SUFNRCxzQkFDSSwwQ0FBYTs7Ozs7UUFEakIsVUFDa0IsS0FBc0I7WUFDdEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDeEIsSUFBSSxDQUFDLE9BQU87Z0JBQ1YsT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLElBQUksQ0FBQyxPQUFPLEdBQU0sS0FBSyxPQUFJLElBQUksS0FBSyxDQUFDO1NBQ3JFOzs7T0FBQTtJQUlELHNCQUNJLG1DQUFNOzs7OztRQURWLFVBQ1csS0FBZ0M7WUFDekMsSUFBSSxLQUFLLFlBQVksV0FBVyxFQUFFO2dCQUNoQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFDcEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7YUFDekI7O2dCQUFNLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1NBQzdCOzs7T0FBQTtJQUdELHNCQUNJLG9DQUFPOzs7Ozs7UUFEWDtZQUVFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUN0Qjs7Ozs7UUFDRCxVQUFZLEtBQVU7WUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbEM7OztPQUhBOztnQkF6RUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxTQUFTO29CQUNuQix1dENBQW9DO29CQUNwQyxJQUFJLEVBQUUsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUU7b0JBQ25DLG1CQUFtQixFQUFFLEtBQUs7aUJBQzNCOzs7MkJBSUUsS0FBSzt5QkFXTCxLQUFLO3dCQVVMLEtBQUs7eUJBVUwsS0FBSzt3QkFRTCxLQUFLO2dDQUlMLEtBQUs7eUJBU0wsS0FBSzswQkFTTCxLQUFLOzswQkE3RVI7Ozs7Ozs7O0FDT0EsSUFBTSxVQUFVLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQzs7Ozs7OztJQVE1QixvQkFBTzs7O0lBQWQ7UUFDRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUM7S0FDbEQ7O2dCQVJGLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZUFBZSxFQUFFLGlCQUFpQixDQUFDO29CQUMzRCxZQUFZLFdBQU0sVUFBVSxDQUFDO29CQUM3QixPQUFPLFdBQU0sVUFBVSxDQUFDO2lCQUN6Qjs7dUJBYkQ7Ozs7Ozs7Ozs7Ozs7OzsifQ==