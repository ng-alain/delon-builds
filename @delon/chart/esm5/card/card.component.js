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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vY2hhcnQvY2FyZC8iLCJzb3VyY2VzIjpbImNhcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFdBQVcsRUFDWCxLQUFLLEdBQ04sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7O3lCQWtCbEIsS0FBSzt1QkFFZixFQUFFO3NCQVVILEVBQUU7dUJBVUQsRUFBRTtxQkFVSyxFQUFFO3VCQUVULE1BQU07dUJBU04sRUFBRTt3QkFrQk8sS0FBSzs7SUFwRXhCLHNCQUNJLHFDQUFRO1FBRlosYUFBYTs7Ozs7UUFDYjtZQUVFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUN2Qjs7Ozs7UUFDRCxVQUFhLEtBQVU7WUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbkM7OztPQUhBO0lBUUQsc0JBQ0ksbUNBQU07Ozs7O1FBRFYsVUFDVyxLQUFnQztZQUN6QyxJQUFJLEtBQUssWUFBWSxXQUFXLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQzthQUN6Qjs7Z0JBQU0sSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7U0FDN0I7OztPQUFBO0lBSUQsc0JBQ0ksa0NBQUs7Ozs7O1FBRFQsVUFDVSxLQUFnQztZQUN4QyxJQUFJLEtBQUssWUFBWSxXQUFXLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQzthQUN4Qjs7Z0JBQU0sSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDNUI7OztPQUFBO0lBSUQsc0JBQ0ksbUNBQU07Ozs7O1FBRFYsVUFDVyxLQUFnQztZQUN6QyxJQUFJLEtBQUssWUFBWSxXQUFXLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQzthQUN6Qjs7Z0JBQU0sSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7U0FDN0I7OztPQUFBO0lBTUQsc0JBQ0ksMENBQWE7Ozs7O1FBRGpCLFVBQ2tCLEtBQXNCO1lBQ3RDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxPQUFPO2dCQUNWLE9BQU8sS0FBSyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFNLEtBQUssT0FBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztTQUNyRTs7O09BQUE7SUFJRCxzQkFDSSxtQ0FBTTs7Ozs7UUFEVixVQUNXLEtBQWdDO1lBQ3pDLElBQUksS0FBSyxZQUFZLFdBQVcsRUFBRTtnQkFDaEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO2FBQ3pCOztnQkFBTSxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztTQUM3Qjs7O09BQUE7SUFHRCxzQkFDSSxvQ0FBTztRQUZYLGtCQUFrQjs7Ozs7UUFDbEI7WUFFRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDdEI7Ozs7O1FBQ0QsVUFBWSxLQUFVO1lBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2xDOzs7T0FIQTs7Z0JBekVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsU0FBUztvQkFDbkIsdXRDQUFvQztvQkFDcEMsSUFBSSxFQUFFLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxFQUFFO29CQUNuQyxtQkFBbUIsRUFBRSxLQUFLO2lCQUMzQjs7OzJCQUlFLEtBQUs7eUJBV0wsS0FBSzt3QkFVTCxLQUFLO3lCQVVMLEtBQUs7d0JBUUwsS0FBSztnQ0FJTCxLQUFLO3lCQVNMLEtBQUs7MEJBU0wsS0FBSzs7MEJBN0VSOztTQWFhLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBUZW1wbGF0ZVJlZixcclxuICBJbnB1dCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnMi1jYXJkJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY2FyZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgaG9zdDogeyAnW2NsYXNzLmcyLWNhcmRdJzogJ3RydWUnIH0sXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHMkNhcmRDb21wb25lbnQge1xyXG5cclxuICAvKiog5piv5ZCm5pi+56S66L655qGGICovXHJcbiAgQElucHV0KClcclxuICBnZXQgYm9yZGVyZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fYm9yZGVyZWQ7XHJcbiAgfVxyXG4gIHNldCBib3JkZXJlZCh2YWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLl9ib3JkZXJlZCA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG4gIHByaXZhdGUgX2JvcmRlcmVkID0gZmFsc2U7XHJcblxyXG4gIF9hdmF0YXIgPSAnJztcclxuICBfYXZhdGFyVHBsOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGF2YXRhcih2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pikge1xyXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcclxuICAgICAgdGhpcy5fYXZhdGFyID0gbnVsbDtcclxuICAgICAgdGhpcy5fYXZhdGFyVHBsID0gdmFsdWU7XHJcbiAgICB9IGVsc2UgdGhpcy5fYXZhdGFyID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBfdGl0bGUgPSAnJztcclxuICBfdGl0bGVUcGw6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgQElucHV0KClcclxuICBzZXQgdGl0bGUodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4pIHtcclxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XHJcbiAgICAgIHRoaXMuX3RpdGxlID0gbnVsbDtcclxuICAgICAgdGhpcy5fdGl0bGVUcGwgPSB2YWx1ZTtcclxuICAgIH0gZWxzZSB0aGlzLl90aXRsZSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgX2FjdGlvbiA9ICcnO1xyXG4gIF9hY3Rpb25UcGw6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgQElucHV0KClcclxuICBzZXQgYWN0aW9uKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KSB7XHJcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xyXG4gICAgICB0aGlzLl9hY3Rpb24gPSBudWxsO1xyXG4gICAgICB0aGlzLl9hY3Rpb25UcGwgPSB2YWx1ZTtcclxuICAgIH0gZWxzZSB0aGlzLl9hY3Rpb24gPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpIHRvdGFsID0gJyc7XHJcblxyXG4gIF9oZWlnaHQgPSAnYXV0byc7XHJcbiAgX29yZ0hlaWdodDogYW55O1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGNvbnRlbnRIZWlnaHQodmFsdWU6IG51bWJlciB8IHN0cmluZykge1xyXG4gICAgdGhpcy5fb3JnSGVpZ2h0ID0gdmFsdWU7XHJcbiAgICB0aGlzLl9oZWlnaHQgPVxyXG4gICAgICB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInID8gKHRoaXMuX2hlaWdodCA9IGAke3ZhbHVlfXB4YCkgOiB2YWx1ZTtcclxuICB9XHJcblxyXG4gIF9mb290ZXIgPSAnJztcclxuICBfZm9vdGVyVHBsOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGZvb3Rlcih2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pikge1xyXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcclxuICAgICAgdGhpcy5fZm9vdGVyID0gbnVsbDtcclxuICAgICAgdGhpcy5fZm9vdGVyVHBsID0gdmFsdWU7XHJcbiAgICB9IGVsc2UgdGhpcy5fZm9vdGVyID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICAvKiog5piv5ZCm5pi+56S6TG9hZGluZyAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IGxvYWRpbmcoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fbG9hZGluZztcclxuICB9XHJcbiAgc2V0IGxvYWRpbmcodmFsdWU6IGFueSkge1xyXG4gICAgdGhpcy5fbG9hZGluZyA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG4gIHByaXZhdGUgX2xvYWRpbmcgPSBmYWxzZTtcclxuXHJcbn1cclxuIl19