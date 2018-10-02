/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
                    template: "\n  <ul nz-menu>\n      <li nz-menu-item (click)=\"click($event, 'close')\" data-type=\"close\" [nzDisabled]=\"!item.closable\" [innerHTML]=\"i18n.close\"></li>\n      <li nz-menu-item (click)=\"click($event, 'closeOther')\" data-type=\"closeOther\" [innerHTML]=\"i18n.closeOther\"></li>\n      <li nz-menu-item (click)=\"click($event, 'closeRight')\" data-type=\"closeRight\" [nzDisabled]=\"item.last\" [innerHTML]=\"i18n.closeRight\"></li>\n      <li nz-menu-item (click)=\"click($event, 'clear')\" data-type=\"clear\" [innerHTML]=\"i18n.clear\"></li>\n  </ul>",
                    preserveWhitespaces: false
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2UtdGFiLWNvbnRleHQtbWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL3JldXNlLXRhYi8iLCJzb3VyY2VzIjpbInJldXNlLXRhYi1jb250ZXh0LW1lbnUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxZQUFZLEVBQ1osTUFBTSxFQUNOLFlBQVksR0FFYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxjQUFjLENBQUM7O0lBMkNoRCxzQ0FBb0IsT0FBMkI7UUFBM0IsWUFBTyxHQUFQLE9BQU8sQ0FBb0I7cUJBTnZDLElBQUksWUFBWSxFQUEwQjtLQU1DO0lBckJuRCxzQkFDSSw4Q0FBSTs7OztRQUdSO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ25COzs7OztRQU5ELFVBQ1MsS0FBdUI7WUFDOUIsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUN6RTs7O09BQUE7SUFjRCxzQkFBSSw2REFBbUI7Ozs7UUFBdkI7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO1NBQzNCOzs7T0FBQTs7Ozs7O0lBSU8sNkNBQU07Ozs7O2NBQUMsSUFBZSxFQUFFLElBQWU7UUFDN0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDZCxJQUFJLE1BQUE7WUFDSixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixtQkFBbUIsRUFBRSxJQUFJLENBQUMsbUJBQW1CO1NBQzlDLENBQUMsQ0FBQzs7Ozs7SUFHTCwrQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLElBQUksQ0FBQyxtQkFBbUI7WUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7S0FDekQ7Ozs7OztJQUVELDRDQUFLOzs7OztJQUFMLFVBQU0sQ0FBYSxFQUFFLElBQWU7UUFDbEMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25CLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNwQixJQUFJLElBQUksS0FBSyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7WUFBRSxPQUFPO1FBQ3BELElBQUksSUFBSSxLQUFLLFlBQVksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3BELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUM5Qjs7Ozs7SUFJRCxnREFBUzs7OztJQUZULFVBRVUsS0FBaUI7UUFDekIsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLE9BQU8sSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUM7WUFBRSxPQUFPO1FBQ3pELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQ3pCOztnQkE3REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx3QkFBd0I7b0JBQ2xDLFFBQVEsRUFBRSxvakJBTUo7b0JBQ04sbUJBQW1CLEVBQUUsS0FBSztpQkFDM0I7Ozs7Z0JBbkJRLGtCQUFrQjs7O3VCQXNCeEIsS0FBSzt1QkFRTCxLQUFLO3dCQUdMLEtBQUs7d0JBR0wsTUFBTTs0QkE2Qk4sWUFBWSxTQUFDLGdCQUFnQixFQUFFLENBQUMsUUFBUSxDQUFDLGNBQ3pDLFlBQVksU0FBQyxzQkFBc0IsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7dUNBMUVsRDs7U0E0QmEsNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgSW5wdXQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIE91dHB1dCxcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgT25Jbml0LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEZWxvbkxvY2FsZVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xyXG5cclxuaW1wb3J0IHtcclxuICBSZXVzZUNvbnRleHRJMThuLFxyXG4gIFJldXNlQ29udGV4dENsb3NlRXZlbnQsXHJcbiAgUmV1c2VJdGVtLFxyXG4gIENsb3NlVHlwZSxcclxufSBmcm9tICcuL3JldXNlLXRhYi5pbnRlcmZhY2VzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncmV1c2UtdGFiLWNvbnRleHQtbWVudScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8dWwgbnotbWVudT5cclxuICAgICAgPGxpIG56LW1lbnUtaXRlbSAoY2xpY2spPVwiY2xpY2soJGV2ZW50LCAnY2xvc2UnKVwiIGRhdGEtdHlwZT1cImNsb3NlXCIgW256RGlzYWJsZWRdPVwiIWl0ZW0uY2xvc2FibGVcIiBbaW5uZXJIVE1MXT1cImkxOG4uY2xvc2VcIj48L2xpPlxyXG4gICAgICA8bGkgbnotbWVudS1pdGVtIChjbGljayk9XCJjbGljaygkZXZlbnQsICdjbG9zZU90aGVyJylcIiBkYXRhLXR5cGU9XCJjbG9zZU90aGVyXCIgW2lubmVySFRNTF09XCJpMThuLmNsb3NlT3RoZXJcIj48L2xpPlxyXG4gICAgICA8bGkgbnotbWVudS1pdGVtIChjbGljayk9XCJjbGljaygkZXZlbnQsICdjbG9zZVJpZ2h0JylcIiBkYXRhLXR5cGU9XCJjbG9zZVJpZ2h0XCIgW256RGlzYWJsZWRdPVwiaXRlbS5sYXN0XCIgW2lubmVySFRNTF09XCJpMThuLmNsb3NlUmlnaHRcIj48L2xpPlxyXG4gICAgICA8bGkgbnotbWVudS1pdGVtIChjbGljayk9XCJjbGljaygkZXZlbnQsICdjbGVhcicpXCIgZGF0YS10eXBlPVwiY2xlYXJcIiBbaW5uZXJIVE1MXT1cImkxOG4uY2xlYXJcIj48L2xpPlxyXG4gIDwvdWw+YCxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFJldXNlVGFiQ29udGV4dE1lbnVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHByaXZhdGUgX2kxOG46IFJldXNlQ29udGV4dEkxOG47XHJcbiAgQElucHV0KClcclxuICBzZXQgaTE4bih2YWx1ZTogUmV1c2VDb250ZXh0STE4bikge1xyXG4gICAgdGhpcy5faTE4biA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuaTE4blNydi5nZXREYXRhKCdyZXVzZVRhYicpLCB2YWx1ZSk7XHJcbiAgfVxyXG4gIGdldCBpMThuKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2kxOG47XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIGl0ZW06IFJldXNlSXRlbTtcclxuXHJcbiAgQElucHV0KClcclxuICBldmVudDogTW91c2VFdmVudDtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgY2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPFJldXNlQ29udGV4dENsb3NlRXZlbnQ+KCk7XHJcblxyXG4gIGdldCBpbmNsdWRlTm9uQ2xvc2VhYmxlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZXZlbnQuY3RybEtleTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaTE4blNydjogRGVsb25Mb2NhbGVTZXJ2aWNlKSB7fVxyXG5cclxuICBwcml2YXRlIG5vdGlmeSh0eXBlOiBDbG9zZVR5cGUsIGl0ZW06IFJldXNlSXRlbSkge1xyXG4gICAgdGhpcy5jbG9zZS5uZXh0KHtcclxuICAgICAgdHlwZSxcclxuICAgICAgaXRlbTogdGhpcy5pdGVtLFxyXG4gICAgICBpbmNsdWRlTm9uQ2xvc2VhYmxlOiB0aGlzLmluY2x1ZGVOb25DbG9zZWFibGUsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaW5jbHVkZU5vbkNsb3NlYWJsZSkgdGhpcy5pdGVtLmNsb3NhYmxlID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGNsaWNrKGU6IE1vdXNlRXZlbnQsIHR5cGU6IENsb3NlVHlwZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGlmICh0eXBlID09PSAnY2xvc2UnICYmICF0aGlzLml0ZW0uY2xvc2FibGUpIHJldHVybjtcclxuICAgIGlmICh0eXBlID09PSAnY2xvc2VSaWdodCcgJiYgdGhpcy5pdGVtLmxhc3QpIHJldHVybjtcclxuICAgIHRoaXMubm90aWZ5KHR5cGUsIHRoaXMuaXRlbSk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDpjbGljaycsIFsnJGV2ZW50J10pXHJcbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6Y29udGV4dG1lbnUnLCBbJyRldmVudCddKVxyXG4gIGNsb3NlTWVudShldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKGV2ZW50LnR5cGUgPT09ICdjbGljaycgJiYgZXZlbnQuYnV0dG9uID09PSAyKSByZXR1cm47XHJcbiAgICB0aGlzLm5vdGlmeShudWxsLCBudWxsKTtcclxuICB9XHJcbn1cclxuIl19