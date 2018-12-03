/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, Input, EventEmitter, Output, HostListener, } from '@angular/core';
import { DelonLocaleService } from '@delon/theme';
var ReuseTabContextMenuComponent = /** @class */ (function () {
    function ReuseTabContextMenuComponent(i18nSrv) {
        this.i18nSrv = i18nSrv;
        this.close = new EventEmitter();
    }
    Object.defineProperty(ReuseTabContextMenuComponent.prototype, "i18n", {
        get: /**
         * @return {?}
         */
        function () {
            return this._i18n;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._i18n = Object.assign({}, this.i18nSrv.getData('reuseTab'), value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReuseTabContextMenuComponent.prototype, "includeNonCloseable", {
        get: /**
         * @return {?}
         */
        function () {
            return this.event.ctrlKey;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} type
     * @param {?} item
     * @return {?}
     */
    ReuseTabContextMenuComponent.prototype.notify = /**
     * @param {?} type
     * @param {?} item
     * @return {?}
     */
    function (type, item) {
        this.close.next({
            type: type,
            item: this.item,
            includeNonCloseable: this.includeNonCloseable,
        });
    };
    /**
     * @return {?}
     */
    ReuseTabContextMenuComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.includeNonCloseable)
            this.item.closable = true;
    };
    /**
     * @param {?} e
     * @param {?} type
     * @return {?}
     */
    ReuseTabContextMenuComponent.prototype.click = /**
     * @param {?} e
     * @param {?} type
     * @return {?}
     */
    function (e, type) {
        e.preventDefault();
        e.stopPropagation();
        if (type === 'close' && !this.item.closable)
            return;
        if (type === 'closeRight' && this.item.last)
            return;
        this.notify(type, this.item);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ReuseTabContextMenuComponent.prototype.closeMenu = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.type === 'click' && event.button === 2)
            return;
        this.notify(null, null);
    };
    ReuseTabContextMenuComponent.decorators = [
        { type: Component, args: [{
                    selector: 'reuse-tab-context-menu',
                    template: "<ul nz-menu>\n  <li nz-menu-item (click)=\"click($event, 'close')\" data-type=\"close\" [nzDisabled]=\"!item.closable\" [innerHTML]=\"i18n.close\"></li>\n  <li nz-menu-item (click)=\"click($event, 'closeOther')\" data-type=\"closeOther\" [innerHTML]=\"i18n.closeOther\"></li>\n  <li nz-menu-item (click)=\"click($event, 'closeRight')\" data-type=\"closeRight\" [nzDisabled]=\"item.last\" [innerHTML]=\"i18n.closeRight\"></li>\n  <li nz-menu-item (click)=\"click($event, 'clear')\" data-type=\"clear\" [innerHTML]=\"i18n.clear\"></li>\n</ul>\n"
                }] }
    ];
    /** @nocollapse */
    ReuseTabContextMenuComponent.ctorParameters = function () { return [
        { type: DelonLocaleService }
    ]; };
    ReuseTabContextMenuComponent.propDecorators = {
        i18n: [{ type: Input }],
        item: [{ type: Input }],
        event: [{ type: Input }],
        close: [{ type: Output }],
        closeMenu: [{ type: HostListener, args: ['document:click', ['$event'],] }, { type: HostListener, args: ['document:contextmenu', ['$event'],] }]
    };
    return ReuseTabContextMenuComponent;
}());
export { ReuseTabContextMenuComponent };
if (false) {
    /** @type {?} */
    ReuseTabContextMenuComponent.prototype._i18n;
    /** @type {?} */
    ReuseTabContextMenuComponent.prototype.item;
    /** @type {?} */
    ReuseTabContextMenuComponent.prototype.event;
    /** @type {?} */
    ReuseTabContextMenuComponent.prototype.close;
    /** @type {?} */
    ReuseTabContextMenuComponent.prototype.i18nSrv;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2UtdGFiLWNvbnRleHQtbWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL3JldXNlLXRhYi8iLCJzb3VyY2VzIjpbInJldXNlLXRhYi1jb250ZXh0LW1lbnUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxZQUFZLEVBQ1osTUFBTSxFQUNOLFlBQVksR0FFYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFTbEQ7SUEyQkUsc0NBQW9CLE9BQTJCO1FBQTNCLFlBQU8sR0FBUCxPQUFPLENBQW9CO1FBTnRDLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBMEIsQ0FBQztJQU1WLENBQUM7SUFyQm5ELHNCQUNJLDhDQUFJOzs7O1FBR1I7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDcEIsQ0FBQzs7Ozs7UUFORCxVQUNTLEtBQXVCO1lBQzlCLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDMUUsQ0FBQzs7O09BQUE7SUFjRCxzQkFBSSw2REFBbUI7Ozs7UUFBdkI7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO1FBQzVCLENBQUM7OztPQUFBOzs7Ozs7SUFJTyw2Q0FBTTs7Ozs7SUFBZCxVQUFlLElBQWUsRUFBRSxJQUFlO1FBQzdDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQ2QsSUFBSSxNQUFBO1lBQ0osSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLG1CQUFtQjtTQUM5QyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsK0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxJQUFJLENBQUMsbUJBQW1CO1lBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQzFELENBQUM7Ozs7OztJQUVELDRDQUFLOzs7OztJQUFMLFVBQU0sQ0FBYSxFQUFFLElBQWU7UUFDbEMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25CLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNwQixJQUFJLElBQUksS0FBSyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7WUFBRSxPQUFPO1FBQ3BELElBQUksSUFBSSxLQUFLLFlBQVksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3BELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7OztJQUlELGdEQUFTOzs7O0lBRlQsVUFFVSxLQUFpQjtRQUN6QixJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssT0FBTyxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQztZQUFFLE9BQU87UUFDekQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7Z0JBdERGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsd0JBQXdCO29CQUNsQywwaUJBQXNEO2lCQUN2RDs7OztnQkFaUSxrQkFBa0I7Ozt1QkFleEIsS0FBSzt1QkFRTCxLQUFLO3dCQUdMLEtBQUs7d0JBR0wsTUFBTTs0QkE2Qk4sWUFBWSxTQUFDLGdCQUFnQixFQUFFLENBQUMsUUFBUSxDQUFDLGNBQ3pDLFlBQVksU0FBQyxzQkFBc0IsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7SUFLbEQsbUNBQUM7Q0FBQSxBQXZERCxJQXVEQztTQW5EWSw0QkFBNEI7OztJQUN2Qyw2Q0FBZ0M7O0lBU2hDLDRDQUNnQjs7SUFFaEIsNkNBQ2tCOztJQUVsQiw2Q0FDNEQ7O0lBTWhELCtDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgT3V0cHV0LFxuICBIb3N0TGlzdGVuZXIsXG4gIE9uSW5pdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEZWxvbkxvY2FsZVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuXG5pbXBvcnQge1xuICBSZXVzZUNvbnRleHRJMThuLFxuICBSZXVzZUNvbnRleHRDbG9zZUV2ZW50LFxuICBSZXVzZUl0ZW0sXG4gIENsb3NlVHlwZSxcbn0gZnJvbSAnLi9yZXVzZS10YWIuaW50ZXJmYWNlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3JldXNlLXRhYi1jb250ZXh0LW1lbnUnLFxuICB0ZW1wbGF0ZVVybDogJy4vcmV1c2UtdGFiLWNvbnRleHQtbWVudS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFJldXNlVGFiQ29udGV4dE1lbnVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIF9pMThuOiBSZXVzZUNvbnRleHRJMThuO1xuICBASW5wdXQoKVxuICBzZXQgaTE4bih2YWx1ZTogUmV1c2VDb250ZXh0STE4bikge1xuICAgIHRoaXMuX2kxOG4gPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmkxOG5TcnYuZ2V0RGF0YSgncmV1c2VUYWInKSwgdmFsdWUpO1xuICB9XG4gIGdldCBpMThuKCkge1xuICAgIHJldHVybiB0aGlzLl9pMThuO1xuICB9XG5cbiAgQElucHV0KClcbiAgaXRlbTogUmV1c2VJdGVtO1xuXG4gIEBJbnB1dCgpXG4gIGV2ZW50OiBNb3VzZUV2ZW50O1xuXG4gIEBPdXRwdXQoKVxuICByZWFkb25seSBjbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8UmV1c2VDb250ZXh0Q2xvc2VFdmVudD4oKTtcblxuICBnZXQgaW5jbHVkZU5vbkNsb3NlYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ldmVudC5jdHJsS2V5O1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpMThuU3J2OiBEZWxvbkxvY2FsZVNlcnZpY2UpIHt9XG5cbiAgcHJpdmF0ZSBub3RpZnkodHlwZTogQ2xvc2VUeXBlLCBpdGVtOiBSZXVzZUl0ZW0pIHtcbiAgICB0aGlzLmNsb3NlLm5leHQoe1xuICAgICAgdHlwZSxcbiAgICAgIGl0ZW06IHRoaXMuaXRlbSxcbiAgICAgIGluY2x1ZGVOb25DbG9zZWFibGU6IHRoaXMuaW5jbHVkZU5vbkNsb3NlYWJsZSxcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmluY2x1ZGVOb25DbG9zZWFibGUpIHRoaXMuaXRlbS5jbG9zYWJsZSA9IHRydWU7XG4gIH1cblxuICBjbGljayhlOiBNb3VzZUV2ZW50LCB0eXBlOiBDbG9zZVR5cGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAodHlwZSA9PT0gJ2Nsb3NlJyAmJiAhdGhpcy5pdGVtLmNsb3NhYmxlKSByZXR1cm47XG4gICAgaWYgKHR5cGUgPT09ICdjbG9zZVJpZ2h0JyAmJiB0aGlzLml0ZW0ubGFzdCkgcmV0dXJuO1xuICAgIHRoaXMubm90aWZ5KHR5cGUsIHRoaXMuaXRlbSk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDpjbGljaycsIFsnJGV2ZW50J10pXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmNvbnRleHRtZW51JywgWyckZXZlbnQnXSlcbiAgY2xvc2VNZW51KGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKGV2ZW50LnR5cGUgPT09ICdjbGljaycgJiYgZXZlbnQuYnV0dG9uID09PSAyKSByZXR1cm47XG4gICAgdGhpcy5ub3RpZnkobnVsbCwgbnVsbCk7XG4gIH1cbn1cbiJdfQ==