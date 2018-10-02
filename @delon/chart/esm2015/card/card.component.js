/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vY2hhcnQvY2FyZC8iLCJzb3VyY2VzIjpbImNhcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFdBQVcsRUFDWCxLQUFLLEdBQ04sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQVF4QyxNQUFNOzt5QkFVZ0IsS0FBSzt1QkFFZixFQUFFO3NCQVVILEVBQUU7dUJBVUQsRUFBRTtxQkFVSyxFQUFFO3VCQUVULE1BQU07dUJBU04sRUFBRTt3QkFrQk8sS0FBSzs7Ozs7O0lBcEV4QixJQUNJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7S0FDdkI7Ozs7O0lBQ0QsSUFBSSxRQUFRLENBQUMsS0FBVTtRQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNuQzs7Ozs7SUFLRCxJQUNJLE1BQU0sQ0FBQyxLQUFnQztRQUN6QyxJQUFJLEtBQUssWUFBWSxXQUFXLEVBQUU7WUFDaEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDcEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7U0FDekI7O1lBQU0sSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7S0FDN0I7Ozs7O0lBSUQsSUFDSSxLQUFLLENBQUMsS0FBZ0M7UUFDeEMsSUFBSSxLQUFLLFlBQVksV0FBVyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1NBQ3hCOztZQUFNLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0tBQzVCOzs7OztJQUlELElBQ0ksTUFBTSxDQUFDLEtBQWdDO1FBQ3pDLElBQUksS0FBSyxZQUFZLFdBQVcsRUFBRTtZQUNoQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztTQUN6Qjs7WUFBTSxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztLQUM3Qjs7Ozs7SUFNRCxJQUNJLGFBQWEsQ0FBQyxLQUFzQjtRQUN0QyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTztZQUNWLE9BQU8sS0FBSyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0tBQ3JFOzs7OztJQUlELElBQ0ksTUFBTSxDQUFDLEtBQWdDO1FBQ3pDLElBQUksS0FBSyxZQUFZLFdBQVcsRUFBRTtZQUNoQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztTQUN6Qjs7WUFBTSxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztLQUM3Qjs7Ozs7SUFHRCxJQUNJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7S0FDdEI7Ozs7O0lBQ0QsSUFBSSxPQUFPLENBQUMsS0FBVTtRQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNsQzs7O1lBNUVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsU0FBUztnQkFDbkIsdXRDQUFvQztnQkFDcEMsSUFBSSxFQUFFLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxFQUFFO2dCQUNuQyxtQkFBbUIsRUFBRSxLQUFLO2FBQzNCOzs7dUJBSUUsS0FBSztxQkFXTCxLQUFLO29CQVVMLEtBQUs7cUJBVUwsS0FBSztvQkFRTCxLQUFLOzRCQUlMLEtBQUs7cUJBU0wsS0FBSztzQkFTTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgSW5wdXQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJ0BkZWxvbi91dGlsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZzItY2FyZCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NhcmQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGhvc3Q6IHsgJ1tjbGFzcy5nMi1jYXJkXSc6ICd0cnVlJyB9LFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRzJDYXJkQ29tcG9uZW50IHtcclxuXHJcbiAgLyoqIOaYr+WQpuaYvuekuui+ueahhiAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IGJvcmRlcmVkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2JvcmRlcmVkO1xyXG4gIH1cclxuICBzZXQgYm9yZGVyZWQodmFsdWU6IGFueSkge1xyXG4gICAgdGhpcy5fYm9yZGVyZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gIH1cclxuICBwcml2YXRlIF9ib3JkZXJlZCA9IGZhbHNlO1xyXG5cclxuICBfYXZhdGFyID0gJyc7XHJcbiAgX2F2YXRhclRwbDogVGVtcGxhdGVSZWY8YW55PjtcclxuICBASW5wdXQoKVxyXG4gIHNldCBhdmF0YXIodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4pIHtcclxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XHJcbiAgICAgIHRoaXMuX2F2YXRhciA9IG51bGw7XHJcbiAgICAgIHRoaXMuX2F2YXRhclRwbCA9IHZhbHVlO1xyXG4gICAgfSBlbHNlIHRoaXMuX2F2YXRhciA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgX3RpdGxlID0gJyc7XHJcbiAgX3RpdGxlVHBsOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHRpdGxlKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KSB7XHJcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xyXG4gICAgICB0aGlzLl90aXRsZSA9IG51bGw7XHJcbiAgICAgIHRoaXMuX3RpdGxlVHBsID0gdmFsdWU7XHJcbiAgICB9IGVsc2UgdGhpcy5fdGl0bGUgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIF9hY3Rpb24gPSAnJztcclxuICBfYWN0aW9uVHBsOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGFjdGlvbih2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pikge1xyXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcclxuICAgICAgdGhpcy5fYWN0aW9uID0gbnVsbDtcclxuICAgICAgdGhpcy5fYWN0aW9uVHBsID0gdmFsdWU7XHJcbiAgICB9IGVsc2UgdGhpcy5fYWN0aW9uID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKSB0b3RhbCA9ICcnO1xyXG5cclxuICBfaGVpZ2h0ID0gJ2F1dG8nO1xyXG4gIF9vcmdIZWlnaHQ6IGFueTtcclxuICBASW5wdXQoKVxyXG4gIHNldCBjb250ZW50SGVpZ2h0KHZhbHVlOiBudW1iZXIgfCBzdHJpbmcpIHtcclxuICAgIHRoaXMuX29yZ0hlaWdodCA9IHZhbHVlO1xyXG4gICAgdGhpcy5faGVpZ2h0ID1cclxuICAgICAgdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyA/ICh0aGlzLl9oZWlnaHQgPSBgJHt2YWx1ZX1weGApIDogdmFsdWU7XHJcbiAgfVxyXG5cclxuICBfZm9vdGVyID0gJyc7XHJcbiAgX2Zvb3RlclRwbDogVGVtcGxhdGVSZWY8YW55PjtcclxuICBASW5wdXQoKVxyXG4gIHNldCBmb290ZXIodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4pIHtcclxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XHJcbiAgICAgIHRoaXMuX2Zvb3RlciA9IG51bGw7XHJcbiAgICAgIHRoaXMuX2Zvb3RlclRwbCA9IHZhbHVlO1xyXG4gICAgfSBlbHNlIHRoaXMuX2Zvb3RlciA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLyoqIOaYr+WQpuaYvuekukxvYWRpbmcgKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCBsb2FkaW5nKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2xvYWRpbmc7XHJcbiAgfVxyXG4gIHNldCBsb2FkaW5nKHZhbHVlOiBhbnkpIHtcclxuICAgIHRoaXMuX2xvYWRpbmcgPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gIH1cclxuICBwcml2YXRlIF9sb2FkaW5nID0gZmFsc2U7XHJcblxyXG59XHJcbiJdfQ==