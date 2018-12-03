/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, TemplateRef, Input, } from '@angular/core';
import { toBoolean } from '@delon/util';
export class G2CardComponent {
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
                template: "<nz-card [nzBodyStyle]=\"{padding: '20px 24px 8px 24px'}\" [nzBordered]=\"bordered\">\n  <nz-spin [nzSpinning]=\"loading\">\n    <div class=\"g2-card__top\">\n      <div class=\"g2-card__avatar\">\n        <ng-container *ngIf=\"_avatar; else _avatarTpl\">{{ _avatar }}</ng-container>\n      </div>\n      <div class=\"g2-card__meta-wrap\">\n        <div class=\"g2-card__meta\">\n          <span class=\"g2-card__meta-title\" *ngIf=\"_title; else _titleTpl\">{{ _title }}</span>\n          <span class=\"g2-card__meta-action\" *ngIf=\"_action || _actionTpl\">\n            <ng-container *ngIf=\"_action; else _actionTpl\">{{ _action }}</ng-container>\n          </span>\n        </div>\n        <p *ngIf=\"total\" class=\"g2-card__total\" [innerHTML]=\"total\"></p>\n      </div>\n    </div>\n    <div class=\"g2-card__desc\" [ngStyle]=\"{'height':_height}\">\n      <div [ngClass]=\"{'g2-card__fixed': !!_orgHeight }\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n    <div class=\"g2-card__footer\" *ngIf=\"_footer || _footerTpl\">\n      <ng-container *ngIf=\"_footer; else _footerTpl\">{{ _footer }}</ng-container>\n    </div>\n  </nz-spin>\n</nz-card>\n",
                host: { '[class.g2-card]': 'true' }
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
if (false) {
    /** @type {?} */
    G2CardComponent.prototype._bordered;
    /** @type {?} */
    G2CardComponent.prototype._avatar;
    /** @type {?} */
    G2CardComponent.prototype._avatarTpl;
    /** @type {?} */
    G2CardComponent.prototype._title;
    /** @type {?} */
    G2CardComponent.prototype._titleTpl;
    /** @type {?} */
    G2CardComponent.prototype._action;
    /** @type {?} */
    G2CardComponent.prototype._actionTpl;
    /** @type {?} */
    G2CardComponent.prototype.total;
    /** @type {?} */
    G2CardComponent.prototype._height;
    /** @type {?} */
    G2CardComponent.prototype._orgHeight;
    /** @type {?} */
    G2CardComponent.prototype._footer;
    /** @type {?} */
    G2CardComponent.prototype._footerTpl;
    /** @type {?} */
    G2CardComponent.prototype._loading;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vY2hhcnQvY2FyZC8iLCJzb3VyY2VzIjpbImNhcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFdBQVcsRUFDWCxLQUFLLEdBQ04sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQU94QyxNQUFNLE9BQU8sZUFBZTtJQUw1QjtRQWVVLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFFMUIsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQVViLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFVWixZQUFPLEdBQUcsRUFBRSxDQUFDO1FBVUosVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUVwQixZQUFPLEdBQUcsTUFBTSxDQUFDO1FBU2pCLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFrQkwsYUFBUSxHQUFHLEtBQUssQ0FBQztJQUUzQixDQUFDOzs7OztJQXRFQyxJQUNJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFDRCxJQUFJLFFBQVEsQ0FBQyxLQUFVO1FBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7O0lBS0QsSUFDSSxNQUFNLENBQUMsS0FBZ0M7UUFDekMsSUFBSSxLQUFLLFlBQVksV0FBVyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1NBQ3pCOztZQUFNLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBSUQsSUFDSSxLQUFLLENBQUMsS0FBZ0M7UUFDeEMsSUFBSSxLQUFLLFlBQVksV0FBVyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1NBQ3hCOztZQUFNLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBSUQsSUFDSSxNQUFNLENBQUMsS0FBZ0M7UUFDekMsSUFBSSxLQUFLLFlBQVksV0FBVyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1NBQ3pCOztZQUFNLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBTUQsSUFDSSxhQUFhLENBQUMsS0FBc0I7UUFDdEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU87WUFDVixPQUFPLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUN0RSxDQUFDOzs7OztJQUlELElBQ0ksTUFBTSxDQUFDLEtBQWdDO1FBQ3pDLElBQUksS0FBSyxZQUFZLFdBQVcsRUFBRTtZQUNoQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztTQUN6Qjs7WUFBTSxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUM5QixDQUFDOzs7OztJQUdELElBQ0ksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDOzs7OztJQUNELElBQUksT0FBTyxDQUFDLEtBQVU7UUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7O1lBM0VGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsU0FBUztnQkFDbkIsbXFDQUFvQztnQkFDcEMsSUFBSSxFQUFFLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxFQUFFO2FBQ3BDOzs7dUJBSUUsS0FBSztxQkFXTCxLQUFLO29CQVVMLEtBQUs7cUJBVUwsS0FBSztvQkFRTCxLQUFLOzRCQUlMLEtBQUs7cUJBU0wsS0FBSztzQkFTTCxLQUFLOzs7O0lBdEROLG9DQUEwQjs7SUFFMUIsa0NBQWE7O0lBQ2IscUNBQTZCOztJQVM3QixpQ0FBWTs7SUFDWixvQ0FBNEI7O0lBUzVCLGtDQUFhOztJQUNiLHFDQUE2Qjs7SUFTN0IsZ0NBQW9COztJQUVwQixrQ0FBaUI7O0lBQ2pCLHFDQUFnQjs7SUFRaEIsa0NBQWE7O0lBQ2IscUNBQTZCOztJQWlCN0IsbUNBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBUZW1wbGF0ZVJlZixcbiAgSW5wdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnMi1jYXJkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhcmQuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7ICdbY2xhc3MuZzItY2FyZF0nOiAndHJ1ZScgfSxcbn0pXG5leHBvcnQgY2xhc3MgRzJDYXJkQ29tcG9uZW50IHtcblxuICAvKiog5piv5ZCm5pi+56S66L655qGGICovXG4gIEBJbnB1dCgpXG4gIGdldCBib3JkZXJlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYm9yZGVyZWQ7XG4gIH1cbiAgc2V0IGJvcmRlcmVkKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl9ib3JkZXJlZCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfYm9yZGVyZWQgPSBmYWxzZTtcblxuICBfYXZhdGFyID0gJyc7XG4gIF9hdmF0YXJUcGw6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBJbnB1dCgpXG4gIHNldCBhdmF0YXIodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4pIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgdGhpcy5fYXZhdGFyID0gbnVsbDtcbiAgICAgIHRoaXMuX2F2YXRhclRwbCA9IHZhbHVlO1xuICAgIH0gZWxzZSB0aGlzLl9hdmF0YXIgPSB2YWx1ZTtcbiAgfVxuXG4gIF90aXRsZSA9ICcnO1xuICBfdGl0bGVUcGw6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBJbnB1dCgpXG4gIHNldCB0aXRsZSh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICB0aGlzLl90aXRsZSA9IG51bGw7XG4gICAgICB0aGlzLl90aXRsZVRwbCA9IHZhbHVlO1xuICAgIH0gZWxzZSB0aGlzLl90aXRsZSA9IHZhbHVlO1xuICB9XG5cbiAgX2FjdGlvbiA9ICcnO1xuICBfYWN0aW9uVHBsOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBASW5wdXQoKVxuICBzZXQgYWN0aW9uKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIHRoaXMuX2FjdGlvbiA9IG51bGw7XG4gICAgICB0aGlzLl9hY3Rpb25UcGwgPSB2YWx1ZTtcbiAgICB9IGVsc2UgdGhpcy5fYWN0aW9uID0gdmFsdWU7XG4gIH1cblxuICBASW5wdXQoKSB0b3RhbCA9ICcnO1xuXG4gIF9oZWlnaHQgPSAnYXV0byc7XG4gIF9vcmdIZWlnaHQ6IGFueTtcbiAgQElucHV0KClcbiAgc2V0IGNvbnRlbnRIZWlnaHQodmFsdWU6IG51bWJlciB8IHN0cmluZykge1xuICAgIHRoaXMuX29yZ0hlaWdodCA9IHZhbHVlO1xuICAgIHRoaXMuX2hlaWdodCA9XG4gICAgICB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInID8gKHRoaXMuX2hlaWdodCA9IGAke3ZhbHVlfXB4YCkgOiB2YWx1ZTtcbiAgfVxuXG4gIF9mb290ZXIgPSAnJztcbiAgX2Zvb3RlclRwbDogVGVtcGxhdGVSZWY8YW55PjtcbiAgQElucHV0KClcbiAgc2V0IGZvb3Rlcih2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICB0aGlzLl9mb290ZXIgPSBudWxsO1xuICAgICAgdGhpcy5fZm9vdGVyVHBsID0gdmFsdWU7XG4gICAgfSBlbHNlIHRoaXMuX2Zvb3RlciA9IHZhbHVlO1xuICB9XG5cbiAgLyoqIOaYr+WQpuaYvuekukxvYWRpbmcgKi9cbiAgQElucHV0KClcbiAgZ2V0IGxvYWRpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvYWRpbmc7XG4gIH1cbiAgc2V0IGxvYWRpbmcodmFsdWU6IGFueSkge1xuICAgIHRoaXMuX2xvYWRpbmcgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX2xvYWRpbmcgPSBmYWxzZTtcblxufVxuIl19