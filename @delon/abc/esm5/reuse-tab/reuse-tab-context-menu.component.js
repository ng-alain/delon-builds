/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, EventEmitter, HostListener, Input, Output, } from '@angular/core';
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
            this._i18n = tslib_1.__assign({}, this.i18nSrv.getData('reuseTab'), value);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2UtdGFiLWNvbnRleHQtbWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL3JldXNlLXRhYi8iLCJzb3VyY2VzIjpbInJldXNlLXRhYi1jb250ZXh0LW1lbnUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBU2xEO0lBMkJFLHNDQUFvQixPQUEyQjtRQUEzQixZQUFPLEdBQVAsT0FBTyxDQUFvQjtRQU50QyxVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQTBCLENBQUM7SUFNVCxDQUFDO0lBckJwRCxzQkFDSSw4Q0FBSTs7OztRQUdSO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3BCLENBQUM7Ozs7O1FBTkQsVUFDUyxLQUF1QjtZQUM5QixJQUFJLENBQUMsS0FBSyx3QkFBUSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBSyxLQUFLLENBQUUsQ0FBQztRQUNqRSxDQUFDOzs7T0FBQTtJQWNELHNCQUFJLDZEQUFtQjs7OztRQUF2QjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFDNUIsQ0FBQzs7O09BQUE7Ozs7OztJQUlPLDZDQUFNOzs7OztJQUFkLFVBQWUsSUFBZSxFQUFFLElBQWU7UUFDN0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDZCxJQUFJLE1BQUE7WUFDSixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixtQkFBbUIsRUFBRSxJQUFJLENBQUMsbUJBQW1CO1NBQzlDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCwrQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLElBQUksQ0FBQyxtQkFBbUI7WUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDMUQsQ0FBQzs7Ozs7O0lBRUQsNENBQUs7Ozs7O0lBQUwsVUFBTSxDQUFhLEVBQUUsSUFBZTtRQUNsQyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkIsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3BCLElBQUksSUFBSSxLQUFLLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUTtZQUFFLE9BQU87UUFDcEQsSUFBSSxJQUFJLEtBQUssWUFBWSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDcEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7Ozs7O0lBSUQsZ0RBQVM7Ozs7SUFGVCxVQUVVLEtBQWlCO1FBQ3pCLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxPQUFPLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDO1lBQUUsT0FBTztRQUN6RCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDOztnQkF0REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx3QkFBd0I7b0JBQ2xDLDBpQkFBc0Q7aUJBQ3ZEOzs7O2dCQVpRLGtCQUFrQjs7O3VCQWV4QixLQUFLO3VCQVFMLEtBQUs7d0JBR0wsS0FBSzt3QkFHTCxNQUFNOzRCQTZCTixZQUFZLFNBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUMsY0FDekMsWUFBWSxTQUFDLHNCQUFzQixFQUFFLENBQUMsUUFBUSxDQUFDOztJQUtsRCxtQ0FBQztDQUFBLEFBdkRELElBdURDO1NBbkRZLDRCQUE0Qjs7O0lBQ3ZDLDZDQUFnQzs7SUFTaEMsNENBQ2dCOztJQUVoQiw2Q0FDa0I7O0lBRWxCLDZDQUM0RDs7SUFNaEQsK0NBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERlbG9uTG9jYWxlU2VydmljZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5cbmltcG9ydCB7XG4gIENsb3NlVHlwZSxcbiAgUmV1c2VDb250ZXh0Q2xvc2VFdmVudCxcbiAgUmV1c2VDb250ZXh0STE4bixcbiAgUmV1c2VJdGVtLFxufSBmcm9tICcuL3JldXNlLXRhYi5pbnRlcmZhY2VzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncmV1c2UtdGFiLWNvbnRleHQtbWVudScsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZXVzZS10YWItY29udGV4dC1tZW51LmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgUmV1c2VUYWJDb250ZXh0TWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgX2kxOG46IFJldXNlQ29udGV4dEkxOG47XG4gIEBJbnB1dCgpXG4gIHNldCBpMThuKHZhbHVlOiBSZXVzZUNvbnRleHRJMThuKSB7XG4gICAgdGhpcy5faTE4biA9IHsgLi4udGhpcy5pMThuU3J2LmdldERhdGEoJ3JldXNlVGFiJyksIC4uLnZhbHVlIH07XG4gIH1cbiAgZ2V0IGkxOG4oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2kxOG47XG4gIH1cblxuICBASW5wdXQoKVxuICBpdGVtOiBSZXVzZUl0ZW07XG5cbiAgQElucHV0KClcbiAgZXZlbnQ6IE1vdXNlRXZlbnQ7XG5cbiAgQE91dHB1dCgpXG4gIHJlYWRvbmx5IGNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjxSZXVzZUNvbnRleHRDbG9zZUV2ZW50PigpO1xuXG4gIGdldCBpbmNsdWRlTm9uQ2xvc2VhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLmV2ZW50LmN0cmxLZXk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGkxOG5TcnY6IERlbG9uTG9jYWxlU2VydmljZSkgeyB9XG5cbiAgcHJpdmF0ZSBub3RpZnkodHlwZTogQ2xvc2VUeXBlLCBpdGVtOiBSZXVzZUl0ZW0pIHtcbiAgICB0aGlzLmNsb3NlLm5leHQoe1xuICAgICAgdHlwZSxcbiAgICAgIGl0ZW06IHRoaXMuaXRlbSxcbiAgICAgIGluY2x1ZGVOb25DbG9zZWFibGU6IHRoaXMuaW5jbHVkZU5vbkNsb3NlYWJsZSxcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmluY2x1ZGVOb25DbG9zZWFibGUpIHRoaXMuaXRlbS5jbG9zYWJsZSA9IHRydWU7XG4gIH1cblxuICBjbGljayhlOiBNb3VzZUV2ZW50LCB0eXBlOiBDbG9zZVR5cGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAodHlwZSA9PT0gJ2Nsb3NlJyAmJiAhdGhpcy5pdGVtLmNsb3NhYmxlKSByZXR1cm47XG4gICAgaWYgKHR5cGUgPT09ICdjbG9zZVJpZ2h0JyAmJiB0aGlzLml0ZW0ubGFzdCkgcmV0dXJuO1xuICAgIHRoaXMubm90aWZ5KHR5cGUsIHRoaXMuaXRlbSk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDpjbGljaycsIFsnJGV2ZW50J10pXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmNvbnRleHRtZW51JywgWyckZXZlbnQnXSlcbiAgY2xvc2VNZW51KGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKGV2ZW50LnR5cGUgPT09ICdjbGljaycgJiYgZXZlbnQuYnV0dG9uID09PSAyKSByZXR1cm47XG4gICAgdGhpcy5ub3RpZnkobnVsbCwgbnVsbCk7XG4gIH1cbn1cbiJdfQ==