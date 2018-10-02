/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, EventEmitter, Output, HostListener, } from '@angular/core';
import { DelonLocaleService } from '@delon/theme';
export class ReuseTabContextMenuComponent {
    /**
     * @param {?} i18nSrv
     */
    constructor(i18nSrv) {
        this.i18nSrv = i18nSrv;
        this.close = new EventEmitter();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set i18n(value) {
        this._i18n = Object.assign({}, this.i18nSrv.getData('reuseTab'), value);
    }
    /**
     * @return {?}
     */
    get i18n() {
        return this._i18n;
    }
    /**
     * @return {?}
     */
    get includeNonCloseable() {
        return this.event.ctrlKey;
    }
    /**
     * @param {?} type
     * @param {?} item
     * @return {?}
     */
    notify(type, item) {
        this.close.next({
            type,
            item: this.item,
            includeNonCloseable: this.includeNonCloseable,
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.includeNonCloseable)
            this.item.closable = true;
    }
    /**
     * @param {?} e
     * @param {?} type
     * @return {?}
     */
    click(e, type) {
        e.preventDefault();
        e.stopPropagation();
        if (type === 'close' && !this.item.closable)
            return;
        if (type === 'closeRight' && this.item.last)
            return;
        this.notify(type, this.item);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    closeMenu(event) {
        if (event.type === 'click' && event.button === 2)
            return;
        this.notify(null, null);
    }
}
ReuseTabContextMenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'reuse-tab-context-menu',
                template: `
  <ul nz-menu>
      <li nz-menu-item (click)="click($event, 'close')" data-type="close" [nzDisabled]="!item.closable" [innerHTML]="i18n.close"></li>
      <li nz-menu-item (click)="click($event, 'closeOther')" data-type="closeOther" [innerHTML]="i18n.closeOther"></li>
      <li nz-menu-item (click)="click($event, 'closeRight')" data-type="closeRight" [nzDisabled]="item.last" [innerHTML]="i18n.closeRight"></li>
      <li nz-menu-item (click)="click($event, 'clear')" data-type="clear" [innerHTML]="i18n.clear"></li>
  </ul>`,
                preserveWhitespaces: false
            }] }
];
/** @nocollapse */
ReuseTabContextMenuComponent.ctorParameters = () => [
    { type: DelonLocaleService }
];
ReuseTabContextMenuComponent.propDecorators = {
    i18n: [{ type: Input }],
    item: [{ type: Input }],
    event: [{ type: Input }],
    close: [{ type: Output }],
    closeMenu: [{ type: HostListener, args: ['document:click', ['$event'],] }, { type: HostListener, args: ['document:contextmenu', ['$event'],] }]
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2UtdGFiLWNvbnRleHQtbWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL3JldXNlLXRhYi8iLCJzb3VyY2VzIjpbInJldXNlLXRhYi1jb250ZXh0LW1lbnUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxZQUFZLEVBQ1osTUFBTSxFQUNOLFlBQVksR0FFYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFvQmxELE1BQU07Ozs7SUF1QkosWUFBb0IsT0FBMkI7UUFBM0IsWUFBTyxHQUFQLE9BQU8sQ0FBb0I7cUJBTnZDLElBQUksWUFBWSxFQUEwQjtLQU1DOzs7OztJQXJCbkQsSUFDSSxJQUFJLENBQUMsS0FBdUI7UUFDOUIsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztLQUN6RTs7OztJQUNELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztLQUNuQjs7OztJQVdELElBQUksbUJBQW1CO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7S0FDM0I7Ozs7OztJQUlPLE1BQU0sQ0FBQyxJQUFlLEVBQUUsSUFBZTtRQUM3QyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztZQUNkLElBQUk7WUFDSixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixtQkFBbUIsRUFBRSxJQUFJLENBQUMsbUJBQW1CO1NBQzlDLENBQUMsQ0FBQzs7Ozs7SUFHTCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsbUJBQW1CO1lBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0tBQ3pEOzs7Ozs7SUFFRCxLQUFLLENBQUMsQ0FBYSxFQUFFLElBQWU7UUFDbEMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25CLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNwQixJQUFJLElBQUksS0FBSyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7WUFBRSxPQUFPO1FBQ3BELElBQUksSUFBSSxLQUFLLFlBQVksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3BELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUM5Qjs7Ozs7SUFJRCxTQUFTLENBQUMsS0FBaUI7UUFDekIsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLE9BQU8sSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUM7WUFBRSxPQUFPO1FBQ3pELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQ3pCOzs7WUE3REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFFBQVEsRUFBRTs7Ozs7O1FBTUo7Z0JBQ04sbUJBQW1CLEVBQUUsS0FBSzthQUMzQjs7OztZQW5CUSxrQkFBa0I7OzttQkFzQnhCLEtBQUs7bUJBUUwsS0FBSztvQkFHTCxLQUFLO29CQUdMLE1BQU07d0JBNkJOLFlBQVksU0FBQyxnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxjQUN6QyxZQUFZLFNBQUMsc0JBQXNCLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgT3V0cHV0LFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBPbkluaXQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERlbG9uTG9jYWxlU2VydmljZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XHJcblxyXG5pbXBvcnQge1xyXG4gIFJldXNlQ29udGV4dEkxOG4sXHJcbiAgUmV1c2VDb250ZXh0Q2xvc2VFdmVudCxcclxuICBSZXVzZUl0ZW0sXHJcbiAgQ2xvc2VUeXBlLFxyXG59IGZyb20gJy4vcmV1c2UtdGFiLmludGVyZmFjZXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdyZXVzZS10YWItY29udGV4dC1tZW51JyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDx1bCBuei1tZW51PlxyXG4gICAgICA8bGkgbnotbWVudS1pdGVtIChjbGljayk9XCJjbGljaygkZXZlbnQsICdjbG9zZScpXCIgZGF0YS10eXBlPVwiY2xvc2VcIiBbbnpEaXNhYmxlZF09XCIhaXRlbS5jbG9zYWJsZVwiIFtpbm5lckhUTUxdPVwiaTE4bi5jbG9zZVwiPjwvbGk+XHJcbiAgICAgIDxsaSBuei1tZW51LWl0ZW0gKGNsaWNrKT1cImNsaWNrKCRldmVudCwgJ2Nsb3NlT3RoZXInKVwiIGRhdGEtdHlwZT1cImNsb3NlT3RoZXJcIiBbaW5uZXJIVE1MXT1cImkxOG4uY2xvc2VPdGhlclwiPjwvbGk+XHJcbiAgICAgIDxsaSBuei1tZW51LWl0ZW0gKGNsaWNrKT1cImNsaWNrKCRldmVudCwgJ2Nsb3NlUmlnaHQnKVwiIGRhdGEtdHlwZT1cImNsb3NlUmlnaHRcIiBbbnpEaXNhYmxlZF09XCJpdGVtLmxhc3RcIiBbaW5uZXJIVE1MXT1cImkxOG4uY2xvc2VSaWdodFwiPjwvbGk+XHJcbiAgICAgIDxsaSBuei1tZW51LWl0ZW0gKGNsaWNrKT1cImNsaWNrKCRldmVudCwgJ2NsZWFyJylcIiBkYXRhLXR5cGU9XCJjbGVhclwiIFtpbm5lckhUTUxdPVwiaTE4bi5jbGVhclwiPjwvbGk+XHJcbiAgPC91bD5gLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmV1c2VUYWJDb250ZXh0TWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgcHJpdmF0ZSBfaTE4bjogUmV1c2VDb250ZXh0STE4bjtcclxuICBASW5wdXQoKVxyXG4gIHNldCBpMThuKHZhbHVlOiBSZXVzZUNvbnRleHRJMThuKSB7XHJcbiAgICB0aGlzLl9pMThuID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5pMThuU3J2LmdldERhdGEoJ3JldXNlVGFiJyksIHZhbHVlKTtcclxuICB9XHJcbiAgZ2V0IGkxOG4oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faTE4bjtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgaXRlbTogUmV1c2VJdGVtO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGV2ZW50OiBNb3VzZUV2ZW50O1xyXG5cclxuICBAT3V0cHV0KClcclxuICBjbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8UmV1c2VDb250ZXh0Q2xvc2VFdmVudD4oKTtcclxuXHJcbiAgZ2V0IGluY2x1ZGVOb25DbG9zZWFibGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ldmVudC5jdHJsS2V5O1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpMThuU3J2OiBEZWxvbkxvY2FsZVNlcnZpY2UpIHt9XHJcblxyXG4gIHByaXZhdGUgbm90aWZ5KHR5cGU6IENsb3NlVHlwZSwgaXRlbTogUmV1c2VJdGVtKSB7XHJcbiAgICB0aGlzLmNsb3NlLm5leHQoe1xyXG4gICAgICB0eXBlLFxyXG4gICAgICBpdGVtOiB0aGlzLml0ZW0sXHJcbiAgICAgIGluY2x1ZGVOb25DbG9zZWFibGU6IHRoaXMuaW5jbHVkZU5vbkNsb3NlYWJsZSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pbmNsdWRlTm9uQ2xvc2VhYmxlKSB0aGlzLml0ZW0uY2xvc2FibGUgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgY2xpY2soZTogTW91c2VFdmVudCwgdHlwZTogQ2xvc2VUeXBlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgaWYgKHR5cGUgPT09ICdjbG9zZScgJiYgIXRoaXMuaXRlbS5jbG9zYWJsZSkgcmV0dXJuO1xyXG4gICAgaWYgKHR5cGUgPT09ICdjbG9zZVJpZ2h0JyAmJiB0aGlzLml0ZW0ubGFzdCkgcmV0dXJuO1xyXG4gICAgdGhpcy5ub3RpZnkodHlwZSwgdGhpcy5pdGVtKTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmNsaWNrJywgWyckZXZlbnQnXSlcclxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDpjb250ZXh0bWVudScsIFsnJGV2ZW50J10pXHJcbiAgY2xvc2VNZW51KGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ2NsaWNrJyAmJiBldmVudC5idXR0b24gPT09IDIpIHJldHVybjtcclxuICAgIHRoaXMubm90aWZ5KG51bGwsIG51bGwpO1xyXG4gIH1cclxufVxyXG4iXX0=