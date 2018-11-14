/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vY2hhcnQvY2FyZC8iLCJzb3VyY2VzIjpbImNhcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFdBQVcsRUFDWCxLQUFLLEdBQ04sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUV4QztJQUFBO1FBZ0JVLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFFMUIsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQVViLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFVWixZQUFPLEdBQUcsRUFBRSxDQUFDO1FBVUosVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUVwQixZQUFPLEdBQUcsTUFBTSxDQUFDO1FBU2pCLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFrQkwsYUFBUSxHQUFHLEtBQUssQ0FBQztJQUUzQixDQUFDO0lBdEVDLHNCQUNJLHFDQUFRO1FBRlosYUFBYTs7Ozs7UUFDYjtZQUVFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN4QixDQUFDOzs7OztRQUNELFVBQWEsS0FBVTtZQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwQyxDQUFDOzs7T0FIQTtJQVFELHNCQUNJLG1DQUFNOzs7OztRQURWLFVBQ1csS0FBZ0M7WUFDekMsSUFBSSxLQUFLLFlBQVksV0FBVyxFQUFFO2dCQUNoQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFDcEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7YUFDekI7O2dCQUFNLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQzlCLENBQUM7OztPQUFBO0lBSUQsc0JBQ0ksa0NBQUs7Ozs7O1FBRFQsVUFDVSxLQUFnQztZQUN4QyxJQUFJLEtBQUssWUFBWSxXQUFXLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQzthQUN4Qjs7Z0JBQU0sSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDN0IsQ0FBQzs7O09BQUE7SUFJRCxzQkFDSSxtQ0FBTTs7Ozs7UUFEVixVQUNXLEtBQWdDO1lBQ3pDLElBQUksS0FBSyxZQUFZLFdBQVcsRUFBRTtnQkFDaEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO2FBQ3pCOztnQkFBTSxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUM5QixDQUFDOzs7T0FBQTtJQU1ELHNCQUNJLDBDQUFhOzs7OztRQURqQixVQUNrQixLQUFzQjtZQUN0QyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUN4QixJQUFJLENBQUMsT0FBTztnQkFDVixPQUFPLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBTSxLQUFLLE9BQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDdEUsQ0FBQzs7O09BQUE7SUFJRCxzQkFDSSxtQ0FBTTs7Ozs7UUFEVixVQUNXLEtBQWdDO1lBQ3pDLElBQUksS0FBSyxZQUFZLFdBQVcsRUFBRTtnQkFDaEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO2FBQ3pCOztnQkFBTSxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUM5QixDQUFDOzs7T0FBQTtJQUdELHNCQUNJLG9DQUFPO1FBRlgsa0JBQWtCOzs7OztRQUNsQjtZQUVFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN2QixDQUFDOzs7OztRQUNELFVBQVksS0FBVTtZQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQyxDQUFDOzs7T0FIQTs7Z0JBekVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsU0FBUztvQkFDbkIsbXFDQUFvQztvQkFDcEMsSUFBSSxFQUFFLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxFQUFFO29CQUNuQyxtQkFBbUIsRUFBRSxLQUFLO2lCQUMzQjs7OzJCQUlFLEtBQUs7eUJBV0wsS0FBSzt3QkFVTCxLQUFLO3lCQVVMLEtBQUs7d0JBUUwsS0FBSztnQ0FJTCxLQUFLO3lCQVNMLEtBQUs7MEJBU0wsS0FBSzs7SUFTUixzQkFBQztDQUFBLEFBL0VELElBK0VDO1NBekVZLGVBQWU7OztJQVUxQixvQ0FBMEI7O0lBRTFCLGtDQUFhOztJQUNiLHFDQUE2Qjs7SUFTN0IsaUNBQVk7O0lBQ1osb0NBQTRCOztJQVM1QixrQ0FBYTs7SUFDYixxQ0FBNkI7O0lBUzdCLGdDQUFvQjs7SUFFcEIsa0NBQWlCOztJQUNqQixxQ0FBZ0I7O0lBUWhCLGtDQUFhOztJQUNiLHFDQUE2Qjs7SUFpQjdCLG1DQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgVGVtcGxhdGVSZWYsXG4gIElucHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZzItY2FyZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJkLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDogeyAnW2NsYXNzLmcyLWNhcmRdJzogJ3RydWUnIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBHMkNhcmRDb21wb25lbnQge1xuXG4gIC8qKiDmmK/lkKbmmL7npLrovrnmoYYgKi9cbiAgQElucHV0KClcbiAgZ2V0IGJvcmRlcmVkKCkge1xuICAgIHJldHVybiB0aGlzLl9ib3JkZXJlZDtcbiAgfVxuICBzZXQgYm9yZGVyZWQodmFsdWU6IGFueSkge1xuICAgIHRoaXMuX2JvcmRlcmVkID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF9ib3JkZXJlZCA9IGZhbHNlO1xuXG4gIF9hdmF0YXIgPSAnJztcbiAgX2F2YXRhclRwbDogVGVtcGxhdGVSZWY8YW55PjtcbiAgQElucHV0KClcbiAgc2V0IGF2YXRhcih2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICB0aGlzLl9hdmF0YXIgPSBudWxsO1xuICAgICAgdGhpcy5fYXZhdGFyVHBsID0gdmFsdWU7XG4gICAgfSBlbHNlIHRoaXMuX2F2YXRhciA9IHZhbHVlO1xuICB9XG5cbiAgX3RpdGxlID0gJyc7XG4gIF90aXRsZVRwbDogVGVtcGxhdGVSZWY8YW55PjtcbiAgQElucHV0KClcbiAgc2V0IHRpdGxlKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIHRoaXMuX3RpdGxlID0gbnVsbDtcbiAgICAgIHRoaXMuX3RpdGxlVHBsID0gdmFsdWU7XG4gICAgfSBlbHNlIHRoaXMuX3RpdGxlID0gdmFsdWU7XG4gIH1cblxuICBfYWN0aW9uID0gJyc7XG4gIF9hY3Rpb25UcGw6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBJbnB1dCgpXG4gIHNldCBhY3Rpb24odmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4pIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgdGhpcy5fYWN0aW9uID0gbnVsbDtcbiAgICAgIHRoaXMuX2FjdGlvblRwbCA9IHZhbHVlO1xuICAgIH0gZWxzZSB0aGlzLl9hY3Rpb24gPSB2YWx1ZTtcbiAgfVxuXG4gIEBJbnB1dCgpIHRvdGFsID0gJyc7XG5cbiAgX2hlaWdodCA9ICdhdXRvJztcbiAgX29yZ0hlaWdodDogYW55O1xuICBASW5wdXQoKVxuICBzZXQgY29udGVudEhlaWdodCh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nKSB7XG4gICAgdGhpcy5fb3JnSGVpZ2h0ID0gdmFsdWU7XG4gICAgdGhpcy5faGVpZ2h0ID1cbiAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgPyAodGhpcy5faGVpZ2h0ID0gYCR7dmFsdWV9cHhgKSA6IHZhbHVlO1xuICB9XG5cbiAgX2Zvb3RlciA9ICcnO1xuICBfZm9vdGVyVHBsOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBASW5wdXQoKVxuICBzZXQgZm9vdGVyKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIHRoaXMuX2Zvb3RlciA9IG51bGw7XG4gICAgICB0aGlzLl9mb290ZXJUcGwgPSB2YWx1ZTtcbiAgICB9IGVsc2UgdGhpcy5fZm9vdGVyID0gdmFsdWU7XG4gIH1cblxuICAvKiog5piv5ZCm5pi+56S6TG9hZGluZyAqL1xuICBASW5wdXQoKVxuICBnZXQgbG9hZGluZygpIHtcbiAgICByZXR1cm4gdGhpcy5fbG9hZGluZztcbiAgfVxuICBzZXQgbG9hZGluZyh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5fbG9hZGluZyA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfbG9hZGluZyA9IGZhbHNlO1xuXG59XG4iXX0=