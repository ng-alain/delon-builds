import { Component, TemplateRef, Input, NgModule } from '@angular/core';
import { toBoolean, DelonUtilModule } from '@delon/util';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class G2CardComponent {
    constructor() {
        this._bordered = false;
        this._avatar = '';
        this._title = '';
        this._action = '';
        this.total = '';
        this._height = 'auto';
        this._footer = '';
        this._loading = false;
    }
    /**
     * 是否显示边框
     * @return {?}
     */
    get bordered() {
        return this._bordered;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set bordered(value) {
        this._bordered = toBoolean(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set avatar(value) {
        if (value instanceof TemplateRef) {
            this._avatar = null;
            this._avatarTpl = value;
        }
        else
            this._avatar = value;
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
        else
            this._title = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set action(value) {
        if (value instanceof TemplateRef) {
            this._action = null;
            this._actionTpl = value;
        }
        else
            this._action = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set contentHeight(value) {
        this._orgHeight = value;
        this._height =
            typeof value === 'number' ? (this._height = `${value}px`) : value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set footer(value) {
        if (value instanceof TemplateRef) {
            this._footer = null;
            this._footerTpl = value;
        }
        else
            this._footer = value;
    }
    /**
     * 是否显示Loading
     * @return {?}
     */
    get loading() {
        return this._loading;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set loading(value) {
        this._loading = toBoolean(value);
    }
}
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [G2CardComponent];
class G2CardModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: G2CardModule, providers: [] };
    }
}
G2CardModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, DelonUtilModule, NgZorroAntdModule],
                declarations: [...COMPONENTS],
                exports: [...COMPONENTS],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { G2CardComponent, G2CardModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGRlbG9uL2NoYXJ0L2NhcmQvY2FyZC5jb21wb25lbnQudHMiLCJuZzovL0BkZWxvbi9jaGFydC9jYXJkL2NhcmQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIElucHV0LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICdAZGVsb24vdXRpbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2cyLWNhcmQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJkLmNvbXBvbmVudC5odG1sJyxcclxuICBob3N0OiB7ICdbY2xhc3MuZzItY2FyZF0nOiAndHJ1ZScgfSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEcyQ2FyZENvbXBvbmVudCB7XHJcblxyXG4gIC8qKiDDpsKYwq/DpcKQwqbDpsKYwr7Dp8KkwrrDqMK+wrnDpsKhwoYgKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCBib3JkZXJlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9ib3JkZXJlZDtcclxuICB9XHJcbiAgc2V0IGJvcmRlcmVkKHZhbHVlOiBhbnkpIHtcclxuICAgIHRoaXMuX2JvcmRlcmVkID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICB9XHJcbiAgcHJpdmF0ZSBfYm9yZGVyZWQgPSBmYWxzZTtcclxuXHJcbiAgX2F2YXRhciA9ICcnO1xyXG4gIF9hdmF0YXJUcGw6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgQElucHV0KClcclxuICBzZXQgYXZhdGFyKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KSB7XHJcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xyXG4gICAgICB0aGlzLl9hdmF0YXIgPSBudWxsO1xyXG4gICAgICB0aGlzLl9hdmF0YXJUcGwgPSB2YWx1ZTtcclxuICAgIH0gZWxzZSB0aGlzLl9hdmF0YXIgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIF90aXRsZSA9ICcnO1xyXG4gIF90aXRsZVRwbDogVGVtcGxhdGVSZWY8YW55PjtcclxuICBASW5wdXQoKVxyXG4gIHNldCB0aXRsZSh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pikge1xyXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcclxuICAgICAgdGhpcy5fdGl0bGUgPSBudWxsO1xyXG4gICAgICB0aGlzLl90aXRsZVRwbCA9IHZhbHVlO1xyXG4gICAgfSBlbHNlIHRoaXMuX3RpdGxlID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBfYWN0aW9uID0gJyc7XHJcbiAgX2FjdGlvblRwbDogVGVtcGxhdGVSZWY8YW55PjtcclxuICBASW5wdXQoKVxyXG4gIHNldCBhY3Rpb24odmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4pIHtcclxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XHJcbiAgICAgIHRoaXMuX2FjdGlvbiA9IG51bGw7XHJcbiAgICAgIHRoaXMuX2FjdGlvblRwbCA9IHZhbHVlO1xyXG4gICAgfSBlbHNlIHRoaXMuX2FjdGlvbiA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCkgdG90YWwgPSAnJztcclxuXHJcbiAgX2hlaWdodCA9ICdhdXRvJztcclxuICBfb3JnSGVpZ2h0OiBhbnk7XHJcbiAgQElucHV0KClcclxuICBzZXQgY29udGVudEhlaWdodCh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9vcmdIZWlnaHQgPSB2YWx1ZTtcclxuICAgIHRoaXMuX2hlaWdodCA9XHJcbiAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgPyAodGhpcy5faGVpZ2h0ID0gYCR7dmFsdWV9cHhgKSA6IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgX2Zvb3RlciA9ICcnO1xyXG4gIF9mb290ZXJUcGw6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgQElucHV0KClcclxuICBzZXQgZm9vdGVyKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KSB7XHJcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xyXG4gICAgICB0aGlzLl9mb290ZXIgPSBudWxsO1xyXG4gICAgICB0aGlzLl9mb290ZXJUcGwgPSB2YWx1ZTtcclxuICAgIH0gZWxzZSB0aGlzLl9mb290ZXIgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIC8qKiDDpsKYwq/DpcKQwqbDpsKYwr7Dp8KkwrpMb2FkaW5nICovXHJcbiAgQElucHV0KClcclxuICBnZXQgbG9hZGluZygpIHtcclxuICAgIHJldHVybiB0aGlzLl9sb2FkaW5nO1xyXG4gIH1cclxuICBzZXQgbG9hZGluZyh2YWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLl9sb2FkaW5nID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICB9XHJcbiAgcHJpdmF0ZSBfbG9hZGluZyA9IGZhbHNlO1xyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ1pvcnJvQW50ZE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xyXG5pbXBvcnQgeyBEZWxvblV0aWxNb2R1bGUgfSBmcm9tICdAZGVsb24vdXRpbCc7XHJcblxyXG5pbXBvcnQgeyBHMkNhcmRDb21wb25lbnQgfSBmcm9tICcuL2NhcmQuY29tcG9uZW50JztcclxuXHJcbmNvbnN0IENPTVBPTkVOVFMgPSBbRzJDYXJkQ29tcG9uZW50XTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRGVsb25VdGlsTW9kdWxlLCBOZ1pvcnJvQW50ZE1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbLi4uQ09NUE9ORU5UU10sXHJcbiAgZXhwb3J0czogWy4uLkNPTVBPTkVOVFNdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRzJDYXJkTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7IG5nTW9kdWxlOiBHMkNhcmRNb2R1bGUsIHByb3ZpZGVyczogW10gfTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzt5QkF1QnNCLEtBQUs7dUJBRWYsRUFBRTtzQkFVSCxFQUFFO3VCQVVELEVBQUU7cUJBVUssRUFBRTt1QkFFVCxNQUFNO3VCQVNOLEVBQUU7d0JBa0JPLEtBQUs7Ozs7OztJQXBFeEIsSUFDSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0tBQ3ZCOzs7OztJQUNELElBQUksUUFBUSxDQUFDLEtBQVU7UUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDbkM7Ozs7O0lBS0QsSUFDSSxNQUFNLENBQUMsS0FBZ0M7UUFDekMsSUFBSSxLQUFLLFlBQVksV0FBVyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1NBQ3pCOztZQUFNLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0tBQzdCOzs7OztJQUlELElBQ0ksS0FBSyxDQUFDLEtBQWdDO1FBQ3hDLElBQUksS0FBSyxZQUFZLFdBQVcsRUFBRTtZQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztTQUN4Qjs7WUFBTSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztLQUM1Qjs7Ozs7SUFJRCxJQUNJLE1BQU0sQ0FBQyxLQUFnQztRQUN6QyxJQUFJLEtBQUssWUFBWSxXQUFXLEVBQUU7WUFDaEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDcEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7U0FDekI7O1lBQU0sSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7S0FDN0I7Ozs7O0lBTUQsSUFDSSxhQUFhLENBQUMsS0FBc0I7UUFDdEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU87WUFDVixPQUFPLEtBQUssS0FBSyxRQUFRLElBQUksSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLEtBQUssSUFBSSxJQUFJLEtBQUssQ0FBQztLQUNyRTs7Ozs7SUFJRCxJQUNJLE1BQU0sQ0FBQyxLQUFnQztRQUN6QyxJQUFJLEtBQUssWUFBWSxXQUFXLEVBQUU7WUFDaEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDcEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7U0FDekI7O1lBQU0sSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7S0FDN0I7Ozs7O0lBR0QsSUFDSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0tBQ3RCOzs7OztJQUNELElBQUksT0FBTyxDQUFDLEtBQVU7UUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDbEM7OztZQTVFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLHV0Q0FBb0M7Z0JBQ3BDLElBQUksRUFBRSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sRUFBRTtnQkFDbkMsbUJBQW1CLEVBQUUsS0FBSzthQUMzQjs7O3VCQUlFLEtBQUs7cUJBV0wsS0FBSztvQkFVTCxLQUFLO3FCQVVMLEtBQUs7b0JBUUwsS0FBSzs0QkFJTCxLQUFLO3FCQVNMLEtBQUs7c0JBU0wsS0FBSzs7Ozs7OztBQzdFUjtBQU9BLE1BQU0sVUFBVSxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7QUFPckM7Ozs7SUFDRSxPQUFPLE9BQU87UUFDWixPQUFPLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUM7S0FDbEQ7OztZQVJGLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZUFBZSxFQUFFLGlCQUFpQixDQUFDO2dCQUMzRCxZQUFZLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQztnQkFDN0IsT0FBTyxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUM7YUFDekI7Ozs7Ozs7Ozs7Ozs7OzsifQ==