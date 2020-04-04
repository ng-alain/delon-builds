/**
 * @fileoverview added by tsickle
 * Generated from: reuse-tab-context-menu.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __assign } from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
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
            this._i18n = __assign(__assign({}, this.i18nSrv.getData('reuseTab')), value);
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
     * @private
     * @param {?} type
     * @return {?}
     */
    ReuseTabContextMenuComponent.prototype.notify = /**
     * @private
     * @param {?} type
     * @return {?}
     */
    function (type) {
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
     * @param {?=} custom
     * @return {?}
     */
    ReuseTabContextMenuComponent.prototype.click = /**
     * @param {?} e
     * @param {?} type
     * @param {?=} custom
     * @return {?}
     */
    function (e, type, custom) {
        e.preventDefault();
        e.stopPropagation();
        if (type === 'close' && !this.item.closable)
            return;
        if (type === 'closeRight' && this.item.last)
            return;
        if (custom) {
            if (this.isDisabled(custom))
                return;
            custom.fn(this.item, custom);
        }
        this.notify(type);
    };
    /**
     * @param {?} custom
     * @return {?}
     */
    ReuseTabContextMenuComponent.prototype.isDisabled = /**
     * @param {?} custom
     * @return {?}
     */
    function (custom) {
        return custom.disabled ? custom.disabled(this.item) : false;
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
        this.notify(null);
    };
    ReuseTabContextMenuComponent.decorators = [
        { type: Component, args: [{
                    selector: 'reuse-tab-context-menu',
                    template: "<ul nz-menu>\n  <li nz-menu-item\n      (click)=\"click($event, 'close')\"\n      data-type=\"close\"\n      [nzDisabled]=\"!item.closable\"\n      [innerHTML]=\"i18n.close\"></li>\n  <li nz-menu-item\n      (click)=\"click($event, 'closeOther')\"\n      data-type=\"closeOther\"\n      [innerHTML]=\"i18n.closeOther\"></li>\n  <li nz-menu-item\n      (click)=\"click($event, 'closeRight')\"\n      data-type=\"closeRight\"\n      [nzDisabled]=\"item.last\"\n      [innerHTML]=\"i18n.closeRight\"></li>\n  <li nz-menu-item\n      (click)=\"click($event, 'clear')\"\n      data-type=\"clear\"\n      [innerHTML]=\"i18n.clear\"></li>\n  <ng-container *ngIf=\"customContextMenu!.length > 0\">\n    <li nz-menu-divider></li>\n    <li *ngFor=\"let i of customContextMenu\"\n        nz-menu-item\n        [attr.data-type]=\"i.id\"\n        [nzDisabled]=\"isDisabled(i)\"\n        (click)=\"click($event, 'custom', i)\"\n        [innerHTML]=\"i.title\"></li>\n  </ng-container>\n</ul>\n",
                    host: {
                        '(document:click)': 'closeMenu($event)',
                        '(document:contextmenu)': 'closeMenu($event)',
                    },
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
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
        customContextMenu: [{ type: Input }],
        close: [{ type: Output }]
    };
    return ReuseTabContextMenuComponent;
}());
export { ReuseTabContextMenuComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ReuseTabContextMenuComponent.prototype._i18n;
    /** @type {?} */
    ReuseTabContextMenuComponent.prototype.item;
    /** @type {?} */
    ReuseTabContextMenuComponent.prototype.event;
    /** @type {?} */
    ReuseTabContextMenuComponent.prototype.customContextMenu;
    /** @type {?} */
    ReuseTabContextMenuComponent.prototype.close;
    /**
     * @type {?}
     * @private
     */
    ReuseTabContextMenuComponent.prototype.i18nSrv;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2UtdGFiLWNvbnRleHQtbWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL3JldXNlLXRhYi8iLCJzb3VyY2VzIjpbInJldXNlLXRhYi1jb250ZXh0LW1lbnUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0gsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBR2xEO0lBZ0NFLHNDQUFvQixPQUEyQjtRQUEzQixZQUFPLEdBQVAsT0FBTyxDQUFvQjtRQU41QixVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQTBCLENBQUM7SUFNcEIsQ0FBQztJQW5CbkQsc0JBQ0ksOENBQUk7Ozs7UUFNUjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDOzs7OztRQVRELFVBQ1MsS0FBdUI7WUFDOUIsSUFBSSxDQUFDLEtBQUsseUJBQ0wsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQ2hDLEtBQUssQ0FDVCxDQUFDO1FBQ0osQ0FBQzs7O09BQUE7SUFTRCxzQkFBSSw2REFBbUI7Ozs7UUFBdkI7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO1FBQzVCLENBQUM7OztPQUFBOzs7Ozs7SUFJTyw2Q0FBTTs7Ozs7SUFBZCxVQUFlLElBQWU7UUFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDZCxJQUFJLE1BQUE7WUFDSixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixtQkFBbUIsRUFBRSxJQUFJLENBQUMsbUJBQW1CO1NBQzlDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCwrQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLElBQUksQ0FBQyxtQkFBbUI7WUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDMUQsQ0FBQzs7Ozs7OztJQUVELDRDQUFLOzs7Ozs7SUFBTCxVQUFNLENBQWEsRUFBRSxJQUFlLEVBQUUsTUFBK0I7UUFDbkUsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25CLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNwQixJQUFJLElBQUksS0FBSyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7WUFBRSxPQUFPO1FBQ3BELElBQUksSUFBSSxLQUFLLFlBQVksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXBELElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztnQkFBRSxPQUFPO1lBQ3BDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztTQUM5QjtRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEIsQ0FBQzs7Ozs7SUFFRCxpREFBVTs7OztJQUFWLFVBQVcsTUFBOEI7UUFDdkMsT0FBTyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQzlELENBQUM7Ozs7O0lBRUQsZ0RBQVM7Ozs7SUFBVCxVQUFVLEtBQWlCO1FBQ3pCLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxPQUFPLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDO1lBQUUsT0FBTztRQUN6RCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BCLENBQUM7O2dCQWxFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtvQkFDbEMsKzlCQUFzRDtvQkFDdEQsSUFBSSxFQUFFO3dCQUNKLGtCQUFrQixFQUFFLG1CQUFtQjt3QkFDdkMsd0JBQXdCLEVBQUUsbUJBQW1CO3FCQUM5QztvQkFDRCxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3RDOzs7O2dCQWJRLGtCQUFrQjs7O3VCQWdCeEIsS0FBSzt1QkFVTCxLQUFLO3dCQUNMLEtBQUs7b0NBQ0wsS0FBSzt3QkFDTCxNQUFNOztJQXlDVCxtQ0FBQztDQUFBLEFBbkVELElBbUVDO1NBeERZLDRCQUE0Qjs7Ozs7O0lBQ3ZDLDZDQUFnQzs7SUFXaEMsNENBQXlCOztJQUN6Qiw2Q0FBMkI7O0lBQzNCLHlEQUFxRDs7SUFDckQsNkNBQXNFOzs7OztJQU0xRCwrQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERlbG9uTG9jYWxlU2VydmljZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBDbG9zZVR5cGUsIFJldXNlQ29udGV4dENsb3NlRXZlbnQsIFJldXNlQ29udGV4dEkxOG4sIFJldXNlQ3VzdG9tQ29udGV4dE1lbnUsIFJldXNlSXRlbSB9IGZyb20gJy4vcmV1c2UtdGFiLmludGVyZmFjZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdyZXVzZS10YWItY29udGV4dC1tZW51JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JldXNlLXRhYi1jb250ZXh0LW1lbnUuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7XG4gICAgJyhkb2N1bWVudDpjbGljayknOiAnY2xvc2VNZW51KCRldmVudCknLFxuICAgICcoZG9jdW1lbnQ6Y29udGV4dG1lbnUpJzogJ2Nsb3NlTWVudSgkZXZlbnQpJyxcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBSZXVzZVRhYkNvbnRleHRNZW51Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBfaTE4bjogUmV1c2VDb250ZXh0STE4bjtcbiAgQElucHV0KClcbiAgc2V0IGkxOG4odmFsdWU6IFJldXNlQ29udGV4dEkxOG4pIHtcbiAgICB0aGlzLl9pMThuID0ge1xuICAgICAgLi4udGhpcy5pMThuU3J2LmdldERhdGEoJ3JldXNlVGFiJyksXG4gICAgICAuLi52YWx1ZSxcbiAgICB9O1xuICB9XG4gIGdldCBpMThuKCkge1xuICAgIHJldHVybiB0aGlzLl9pMThuO1xuICB9XG4gIEBJbnB1dCgpIGl0ZW06IFJldXNlSXRlbTtcbiAgQElucHV0KCkgZXZlbnQ6IE1vdXNlRXZlbnQ7XG4gIEBJbnB1dCgpIGN1c3RvbUNvbnRleHRNZW51OiBSZXVzZUN1c3RvbUNvbnRleHRNZW51W107XG4gIEBPdXRwdXQoKSByZWFkb25seSBjbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8UmV1c2VDb250ZXh0Q2xvc2VFdmVudD4oKTtcblxuICBnZXQgaW5jbHVkZU5vbkNsb3NlYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ldmVudC5jdHJsS2V5O1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpMThuU3J2OiBEZWxvbkxvY2FsZVNlcnZpY2UpIHt9XG5cbiAgcHJpdmF0ZSBub3RpZnkodHlwZTogQ2xvc2VUeXBlKSB7XG4gICAgdGhpcy5jbG9zZS5uZXh0KHtcbiAgICAgIHR5cGUsXG4gICAgICBpdGVtOiB0aGlzLml0ZW0sXG4gICAgICBpbmNsdWRlTm9uQ2xvc2VhYmxlOiB0aGlzLmluY2x1ZGVOb25DbG9zZWFibGUsXG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pbmNsdWRlTm9uQ2xvc2VhYmxlKSB0aGlzLml0ZW0uY2xvc2FibGUgPSB0cnVlO1xuICB9XG5cbiAgY2xpY2soZTogTW91c2VFdmVudCwgdHlwZTogQ2xvc2VUeXBlLCBjdXN0b20/OiBSZXVzZUN1c3RvbUNvbnRleHRNZW51KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKHR5cGUgPT09ICdjbG9zZScgJiYgIXRoaXMuaXRlbS5jbG9zYWJsZSkgcmV0dXJuO1xuICAgIGlmICh0eXBlID09PSAnY2xvc2VSaWdodCcgJiYgdGhpcy5pdGVtLmxhc3QpIHJldHVybjtcblxuICAgIGlmIChjdXN0b20pIHtcbiAgICAgIGlmICh0aGlzLmlzRGlzYWJsZWQoY3VzdG9tKSkgcmV0dXJuO1xuICAgICAgY3VzdG9tLmZuKHRoaXMuaXRlbSwgY3VzdG9tKTtcbiAgICB9XG4gICAgdGhpcy5ub3RpZnkodHlwZSk7XG4gIH1cblxuICBpc0Rpc2FibGVkKGN1c3RvbTogUmV1c2VDdXN0b21Db250ZXh0TWVudSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBjdXN0b20uZGlzYWJsZWQgPyBjdXN0b20uZGlzYWJsZWQodGhpcy5pdGVtKSA6IGZhbHNlO1xuICB9XG5cbiAgY2xvc2VNZW51KGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKGV2ZW50LnR5cGUgPT09ICdjbGljaycgJiYgZXZlbnQuYnV0dG9uID09PSAyKSByZXR1cm47XG4gICAgdGhpcy5ub3RpZnkobnVsbCk7XG4gIH1cbn1cbiJdfQ==