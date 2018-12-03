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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2UtdGFiLWNvbnRleHQtbWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL3JldXNlLXRhYi8iLCJzb3VyY2VzIjpbInJldXNlLXRhYi1jb250ZXh0LW1lbnUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBU2xEO0lBOEJFLHNDQUFvQixPQUEyQjtRQUEzQixZQUFPLEdBQVAsT0FBTyxDQUFvQjtRQU50QyxVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQTBCLENBQUM7SUFNVCxDQUFDO0lBeEJwRCxzQkFDSSw4Q0FBSTs7OztRQU1SO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3BCLENBQUM7Ozs7O1FBVEQsVUFDUyxLQUF1QjtZQUM5QixJQUFJLENBQUMsS0FBSyx3QkFDTCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFDaEMsS0FBSyxDQUNULENBQUM7UUFDSixDQUFDOzs7T0FBQTtJQWNELHNCQUFJLDZEQUFtQjs7OztRQUF2QjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFDNUIsQ0FBQzs7O09BQUE7Ozs7OztJQUlPLDZDQUFNOzs7OztJQUFkLFVBQWUsSUFBZSxFQUFFLElBQWU7UUFDN0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDZCxJQUFJLE1BQUE7WUFDSixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixtQkFBbUIsRUFBRSxJQUFJLENBQUMsbUJBQW1CO1NBQzlDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCwrQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLElBQUksQ0FBQyxtQkFBbUI7WUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDMUQsQ0FBQzs7Ozs7O0lBRUQsNENBQUs7Ozs7O0lBQUwsVUFBTSxDQUFhLEVBQUUsSUFBZTtRQUNsQyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkIsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3BCLElBQUksSUFBSSxLQUFLLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUTtZQUFFLE9BQU87UUFDcEQsSUFBSSxJQUFJLEtBQUssWUFBWSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDcEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7Ozs7O0lBSUQsZ0RBQVM7Ozs7SUFGVCxVQUVVLEtBQWlCO1FBQ3pCLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxPQUFPLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDO1lBQUUsT0FBTztRQUN6RCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDOztnQkF6REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx3QkFBd0I7b0JBQ2xDLDBpQkFBc0Q7aUJBQ3ZEOzs7O2dCQVpRLGtCQUFrQjs7O3VCQWV4QixLQUFLO3VCQVdMLEtBQUs7d0JBR0wsS0FBSzt3QkFHTCxNQUFNOzRCQTZCTixZQUFZLFNBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUMsY0FDekMsWUFBWSxTQUFDLHNCQUFzQixFQUFFLENBQUMsUUFBUSxDQUFDOztJQUtsRCxtQ0FBQztDQUFBLEFBMURELElBMERDO1NBdERZLDRCQUE0Qjs7O0lBQ3ZDLDZDQUFnQzs7SUFZaEMsNENBQ2dCOztJQUVoQiw2Q0FDa0I7O0lBRWxCLDZDQUM0RDs7SUFNaEQsK0NBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERlbG9uTG9jYWxlU2VydmljZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5cbmltcG9ydCB7XG4gIENsb3NlVHlwZSxcbiAgUmV1c2VDb250ZXh0Q2xvc2VFdmVudCxcbiAgUmV1c2VDb250ZXh0STE4bixcbiAgUmV1c2VJdGVtLFxufSBmcm9tICcuL3JldXNlLXRhYi5pbnRlcmZhY2VzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncmV1c2UtdGFiLWNvbnRleHQtbWVudScsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZXVzZS10YWItY29udGV4dC1tZW51LmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgUmV1c2VUYWJDb250ZXh0TWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgX2kxOG46IFJldXNlQ29udGV4dEkxOG47XG4gIEBJbnB1dCgpXG4gIHNldCBpMThuKHZhbHVlOiBSZXVzZUNvbnRleHRJMThuKSB7XG4gICAgdGhpcy5faTE4biA9IHtcbiAgICAgIC4uLnRoaXMuaTE4blNydi5nZXREYXRhKCdyZXVzZVRhYicpLFxuICAgICAgLi4udmFsdWUsXG4gICAgfTtcbiAgfVxuICBnZXQgaTE4bigpIHtcbiAgICByZXR1cm4gdGhpcy5faTE4bjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGl0ZW06IFJldXNlSXRlbTtcblxuICBASW5wdXQoKVxuICBldmVudDogTW91c2VFdmVudDtcblxuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgY2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPFJldXNlQ29udGV4dENsb3NlRXZlbnQ+KCk7XG5cbiAgZ2V0IGluY2x1ZGVOb25DbG9zZWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZXZlbnQuY3RybEtleTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaTE4blNydjogRGVsb25Mb2NhbGVTZXJ2aWNlKSB7IH1cblxuICBwcml2YXRlIG5vdGlmeSh0eXBlOiBDbG9zZVR5cGUsIGl0ZW06IFJldXNlSXRlbSkge1xuICAgIHRoaXMuY2xvc2UubmV4dCh7XG4gICAgICB0eXBlLFxuICAgICAgaXRlbTogdGhpcy5pdGVtLFxuICAgICAgaW5jbHVkZU5vbkNsb3NlYWJsZTogdGhpcy5pbmNsdWRlTm9uQ2xvc2VhYmxlLFxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW5jbHVkZU5vbkNsb3NlYWJsZSkgdGhpcy5pdGVtLmNsb3NhYmxlID0gdHJ1ZTtcbiAgfVxuXG4gIGNsaWNrKGU6IE1vdXNlRXZlbnQsIHR5cGU6IENsb3NlVHlwZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmICh0eXBlID09PSAnY2xvc2UnICYmICF0aGlzLml0ZW0uY2xvc2FibGUpIHJldHVybjtcbiAgICBpZiAodHlwZSA9PT0gJ2Nsb3NlUmlnaHQnICYmIHRoaXMuaXRlbS5sYXN0KSByZXR1cm47XG4gICAgdGhpcy5ub3RpZnkodHlwZSwgdGhpcy5pdGVtKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmNsaWNrJywgWyckZXZlbnQnXSlcbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6Y29udGV4dG1lbnUnLCBbJyRldmVudCddKVxuICBjbG9zZU1lbnUoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ2NsaWNrJyAmJiBldmVudC5idXR0b24gPT09IDIpIHJldHVybjtcbiAgICB0aGlzLm5vdGlmeShudWxsLCBudWxsKTtcbiAgfVxufVxuIl19