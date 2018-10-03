/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, TemplateRef, Input, } from '@angular/core';
import { toBoolean } from '@delon/util';
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
                    template: "<nz-card [nzBodyStyle]=\"{padding: '20px 24px 8px 24px'}\" [nzBordered]=\"bordered\">\n  <nz-spin [nzSpinning]=\"loading\">\n    <div class=\"g2-card__top\">\n      <div class=\"g2-card__avatar\">\n        <ng-container *ngIf=\"_avatar; else _avatarTpl\">{{ _avatar }}</ng-container>\n      </div>\n      <div class=\"g2-card__meta-wrap\">\n        <div class=\"g2-card__meta\">\n          <span class=\"g2-card__meta-title\" *ngIf=\"_title; else _titleTpl\">{{ _title }}</span>\n          <span class=\"g2-card__meta-action\" *ngIf=\"_action || _actionTpl\">\n            <ng-container *ngIf=\"_action; else _actionTpl\">{{ _action }}</ng-container>\n          </span>\n        </div>\n        <p *ngIf=\"total\" class=\"g2-card__total\" [innerHTML]=\"total\"></p>\n      </div>\n    </div>\n    <div class=\"g2-card__desc\" [ngStyle]=\"{'height':_height}\">\n      <div [ngClass]=\"{'g2-card__fixed': !!_orgHeight }\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n    <div class=\"g2-card__footer\" *ngIf=\"_footer || _footerTpl\">\n      <ng-container *ngIf=\"_footer; else _footerTpl\">{{ _footer }}</ng-container>\n    </div>\n  </nz-spin>\n</nz-card>\n",
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
export { G2CardComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vY2hhcnQvY2FyZC8iLCJzb3VyY2VzIjpbImNhcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFdBQVcsRUFDWCxLQUFLLEdBQ04sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7O3lCQWtCbEIsS0FBSzt1QkFFZixFQUFFO3NCQVVILEVBQUU7dUJBVUQsRUFBRTtxQkFVSyxFQUFFO3VCQUVULE1BQU07dUJBU04sRUFBRTt3QkFrQk8sS0FBSzs7SUFwRXhCLHNCQUNJLHFDQUFRO1FBRlosYUFBYTs7Ozs7UUFDYjtZQUVFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUN2Qjs7Ozs7UUFDRCxVQUFhLEtBQVU7WUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbkM7OztPQUhBO0lBUUQsc0JBQ0ksbUNBQU07Ozs7O1FBRFYsVUFDVyxLQUFnQztZQUN6QyxJQUFJLEtBQUssWUFBWSxXQUFXLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQzthQUN6Qjs7Z0JBQU0sSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7U0FDN0I7OztPQUFBO0lBSUQsc0JBQ0ksa0NBQUs7Ozs7O1FBRFQsVUFDVSxLQUFnQztZQUN4QyxJQUFJLEtBQUssWUFBWSxXQUFXLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQzthQUN4Qjs7Z0JBQU0sSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDNUI7OztPQUFBO0lBSUQsc0JBQ0ksbUNBQU07Ozs7O1FBRFYsVUFDVyxLQUFnQztZQUN6QyxJQUFJLEtBQUssWUFBWSxXQUFXLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQzthQUN6Qjs7Z0JBQU0sSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7U0FDN0I7OztPQUFBO0lBTUQsc0JBQ0ksMENBQWE7Ozs7O1FBRGpCLFVBQ2tCLEtBQXNCO1lBQ3RDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxPQUFPO2dCQUNWLE9BQU8sS0FBSyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFNLEtBQUssT0FBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztTQUNyRTs7O09BQUE7SUFJRCxzQkFDSSxtQ0FBTTs7Ozs7UUFEVixVQUNXLEtBQWdDO1lBQ3pDLElBQUksS0FBSyxZQUFZLFdBQVcsRUFBRTtnQkFDaEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO2FBQ3pCOztnQkFBTSxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztTQUM3Qjs7O09BQUE7SUFHRCxzQkFDSSxvQ0FBTztRQUZYLGtCQUFrQjs7Ozs7UUFDbEI7WUFFRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDdEI7Ozs7O1FBQ0QsVUFBWSxLQUFVO1lBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2xDOzs7T0FIQTs7Z0JBekVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsU0FBUztvQkFDbkIsbXFDQUFvQztvQkFDcEMsSUFBSSxFQUFFLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxFQUFFO29CQUNuQyxtQkFBbUIsRUFBRSxLQUFLO2lCQUMzQjs7OzJCQUlFLEtBQUs7eUJBV0wsS0FBSzt3QkFVTCxLQUFLO3lCQVVMLEtBQUs7d0JBUUwsS0FBSztnQ0FJTCxLQUFLO3lCQVNMLEtBQUs7MEJBU0wsS0FBSzs7MEJBN0VSOztTQWFhLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIFRlbXBsYXRlUmVmLFxuICBJbnB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2cyLWNhcmQnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FyZC5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHsgJ1tjbGFzcy5nMi1jYXJkXSc6ICd0cnVlJyB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgRzJDYXJkQ29tcG9uZW50IHtcblxuICAvKiog5piv5ZCm5pi+56S66L655qGGICovXG4gIEBJbnB1dCgpXG4gIGdldCBib3JkZXJlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYm9yZGVyZWQ7XG4gIH1cbiAgc2V0IGJvcmRlcmVkKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl9ib3JkZXJlZCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfYm9yZGVyZWQgPSBmYWxzZTtcblxuICBfYXZhdGFyID0gJyc7XG4gIF9hdmF0YXJUcGw6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBJbnB1dCgpXG4gIHNldCBhdmF0YXIodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4pIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgdGhpcy5fYXZhdGFyID0gbnVsbDtcbiAgICAgIHRoaXMuX2F2YXRhclRwbCA9IHZhbHVlO1xuICAgIH0gZWxzZSB0aGlzLl9hdmF0YXIgPSB2YWx1ZTtcbiAgfVxuXG4gIF90aXRsZSA9ICcnO1xuICBfdGl0bGVUcGw6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBJbnB1dCgpXG4gIHNldCB0aXRsZSh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICB0aGlzLl90aXRsZSA9IG51bGw7XG4gICAgICB0aGlzLl90aXRsZVRwbCA9IHZhbHVlO1xuICAgIH0gZWxzZSB0aGlzLl90aXRsZSA9IHZhbHVlO1xuICB9XG5cbiAgX2FjdGlvbiA9ICcnO1xuICBfYWN0aW9uVHBsOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBASW5wdXQoKVxuICBzZXQgYWN0aW9uKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIHRoaXMuX2FjdGlvbiA9IG51bGw7XG4gICAgICB0aGlzLl9hY3Rpb25UcGwgPSB2YWx1ZTtcbiAgICB9IGVsc2UgdGhpcy5fYWN0aW9uID0gdmFsdWU7XG4gIH1cblxuICBASW5wdXQoKSB0b3RhbCA9ICcnO1xuXG4gIF9oZWlnaHQgPSAnYXV0byc7XG4gIF9vcmdIZWlnaHQ6IGFueTtcbiAgQElucHV0KClcbiAgc2V0IGNvbnRlbnRIZWlnaHQodmFsdWU6IG51bWJlciB8IHN0cmluZykge1xuICAgIHRoaXMuX29yZ0hlaWdodCA9IHZhbHVlO1xuICAgIHRoaXMuX2hlaWdodCA9XG4gICAgICB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInID8gKHRoaXMuX2hlaWdodCA9IGAke3ZhbHVlfXB4YCkgOiB2YWx1ZTtcbiAgfVxuXG4gIF9mb290ZXIgPSAnJztcbiAgX2Zvb3RlclRwbDogVGVtcGxhdGVSZWY8YW55PjtcbiAgQElucHV0KClcbiAgc2V0IGZvb3Rlcih2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICB0aGlzLl9mb290ZXIgPSBudWxsO1xuICAgICAgdGhpcy5fZm9vdGVyVHBsID0gdmFsdWU7XG4gICAgfSBlbHNlIHRoaXMuX2Zvb3RlciA9IHZhbHVlO1xuICB9XG5cbiAgLyoqIOaYr+WQpuaYvuekukxvYWRpbmcgKi9cbiAgQElucHV0KClcbiAgZ2V0IGxvYWRpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvYWRpbmc7XG4gIH1cbiAgc2V0IGxvYWRpbmcodmFsdWU6IGFueSkge1xuICAgIHRoaXMuX2xvYWRpbmcgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX2xvYWRpbmcgPSBmYWxzZTtcblxufVxuIl19