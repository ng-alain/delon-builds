import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { DelonLocaleService } from '@delon/theme';
export class ReuseTabContextMenuComponent {
    constructor(i18nSrv) {
        this.i18nSrv = i18nSrv;
        this.close = new EventEmitter();
    }
    set i18n(value) {
        this._i18n = Object.assign(Object.assign({}, this.i18nSrv.getData('reuseTab')), value);
    }
    get i18n() {
        return this._i18n;
    }
    get includeNonCloseable() {
        return this.event.ctrlKey;
    }
    notify(type) {
        this.close.next({
            type,
            item: this.item,
            includeNonCloseable: this.includeNonCloseable,
        });
    }
    ngOnInit() {
        if (this.includeNonCloseable)
            this.item.closable = true;
    }
    click(e, type, custom) {
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
    }
    isDisabled(custom) {
        return custom.disabled ? custom.disabled(this.item) : false;
    }
    closeMenu(event) {
        if (event.type === 'click' && event.button === 2)
            return;
        this.notify(null);
    }
}
ReuseTabContextMenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'reuse-tab-context-menu',
                template: "<ul nz-menu>\n  <li nz-menu-item (click)=\"click($event, 'refresh')\" data-type=\"refresh\" [innerHTML]=\"i18n.refresh\"></li>\n  <li nz-menu-item (click)=\"click($event, 'close')\" data-type=\"close\" [nzDisabled]=\"!item.closable\" [innerHTML]=\"i18n.close\"></li>\n  <li nz-menu-item (click)=\"click($event, 'closeOther')\" data-type=\"closeOther\" [innerHTML]=\"i18n.closeOther\"></li>\n  <li nz-menu-item (click)=\"click($event, 'closeRight')\" data-type=\"closeRight\" [nzDisabled]=\"item.last\" [innerHTML]=\"i18n.closeRight\"></li>\n  <ng-container *ngIf=\"customContextMenu!.length > 0\">\n    <li nz-menu-divider></li>\n    <li\n      *ngFor=\"let i of customContextMenu\"\n      nz-menu-item\n      [attr.data-type]=\"i.id\"\n      [nzDisabled]=\"isDisabled(i)\"\n      (click)=\"click($event, 'custom', i)\"\n      [innerHTML]=\"i.title\"\n    ></li>\n  </ng-container>\n</ul>\n",
                host: {
                    '(document:click)': 'closeMenu($event)',
                    '(document:contextmenu)': 'closeMenu($event)',
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            },] }
];
/** @nocollapse */
ReuseTabContextMenuComponent.ctorParameters = () => [
    { type: DelonLocaleService }
];
ReuseTabContextMenuComponent.propDecorators = {
    i18n: [{ type: Input }],
    item: [{ type: Input }],
    event: [{ type: Input }],
    customContextMenu: [{ type: Input }],
    close: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2UtdGFiLWNvbnRleHQtbWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvcmV1c2UtdGFiL3JldXNlLXRhYi1jb250ZXh0LW1lbnUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0gsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBY2xELE1BQU0sT0FBTyw0QkFBNEI7SUFxQnZDLFlBQW9CLE9BQTJCO1FBQTNCLFlBQU8sR0FBUCxPQUFPLENBQW9CO1FBTjVCLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBMEIsQ0FBQztJQU1wQixDQUFDO0lBbkJuRCxJQUNJLElBQUksQ0FBQyxLQUF1QjtRQUM5QixJQUFJLENBQUMsS0FBSyxtQ0FDTCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsR0FDaEMsS0FBSyxDQUNULENBQUM7SUFDSixDQUFDO0lBQ0QsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFNRCxJQUFJLG1CQUFtQjtRQUNyQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO0lBQzVCLENBQUM7SUFJTyxNQUFNLENBQUMsSUFBZTtRQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztZQUNkLElBQUk7WUFDSixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixtQkFBbUIsRUFBRSxJQUFJLENBQUMsbUJBQW1CO1NBQzlDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsbUJBQW1CO1lBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQzFELENBQUM7SUFFRCxLQUFLLENBQUMsQ0FBYSxFQUFFLElBQWUsRUFBRSxNQUErQjtRQUNuRSxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkIsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3BCLElBQUksSUFBSSxLQUFLLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUTtZQUFFLE9BQU87UUFDcEQsSUFBSSxJQUFJLEtBQUssWUFBWSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFcEQsSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO2dCQUFFLE9BQU87WUFDcEMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQzlCO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBRUQsVUFBVSxDQUFDLE1BQThCO1FBQ3ZDLE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUM5RCxDQUFDO0lBRUQsU0FBUyxDQUFDLEtBQWlCO1FBQ3pCLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxPQUFPLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDO1lBQUUsT0FBTztRQUN6RCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BCLENBQUM7OztZQWxFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsczRCQUFzRDtnQkFDdEQsSUFBSSxFQUFFO29CQUNKLGtCQUFrQixFQUFFLG1CQUFtQjtvQkFDdkMsd0JBQXdCLEVBQUUsbUJBQW1CO2lCQUM5QztnQkFDRCxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7Ozs7WUFiUSxrQkFBa0I7OzttQkFnQnhCLEtBQUs7bUJBVUwsS0FBSztvQkFDTCxLQUFLO2dDQUNMLEtBQUs7b0JBQ0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGVsb25Mb2NhbGVTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IENsb3NlVHlwZSwgUmV1c2VDb250ZXh0Q2xvc2VFdmVudCwgUmV1c2VDb250ZXh0STE4biwgUmV1c2VDdXN0b21Db250ZXh0TWVudSwgUmV1c2VJdGVtIH0gZnJvbSAnLi9yZXVzZS10YWIuaW50ZXJmYWNlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3JldXNlLXRhYi1jb250ZXh0LW1lbnUnLFxuICB0ZW1wbGF0ZVVybDogJy4vcmV1c2UtdGFiLWNvbnRleHQtbWVudS5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICAnKGRvY3VtZW50OmNsaWNrKSc6ICdjbG9zZU1lbnUoJGV2ZW50KScsXG4gICAgJyhkb2N1bWVudDpjb250ZXh0bWVudSknOiAnY2xvc2VNZW51KCRldmVudCknLFxuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIFJldXNlVGFiQ29udGV4dE1lbnVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIF9pMThuOiBSZXVzZUNvbnRleHRJMThuO1xuICBASW5wdXQoKVxuICBzZXQgaTE4bih2YWx1ZTogUmV1c2VDb250ZXh0STE4bikge1xuICAgIHRoaXMuX2kxOG4gPSB7XG4gICAgICAuLi50aGlzLmkxOG5TcnYuZ2V0RGF0YSgncmV1c2VUYWInKSxcbiAgICAgIC4uLnZhbHVlLFxuICAgIH07XG4gIH1cbiAgZ2V0IGkxOG4oKTogUmV1c2VDb250ZXh0STE4biB7XG4gICAgcmV0dXJuIHRoaXMuX2kxOG47XG4gIH1cbiAgQElucHV0KCkgaXRlbTogUmV1c2VJdGVtO1xuICBASW5wdXQoKSBldmVudDogTW91c2VFdmVudDtcbiAgQElucHV0KCkgY3VzdG9tQ29udGV4dE1lbnU6IFJldXNlQ3VzdG9tQ29udGV4dE1lbnVbXTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjxSZXVzZUNvbnRleHRDbG9zZUV2ZW50PigpO1xuXG4gIGdldCBpbmNsdWRlTm9uQ2xvc2VhYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmV2ZW50LmN0cmxLZXk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGkxOG5TcnY6IERlbG9uTG9jYWxlU2VydmljZSkge31cblxuICBwcml2YXRlIG5vdGlmeSh0eXBlOiBDbG9zZVR5cGUpOiB2b2lkIHtcbiAgICB0aGlzLmNsb3NlLm5leHQoe1xuICAgICAgdHlwZSxcbiAgICAgIGl0ZW06IHRoaXMuaXRlbSxcbiAgICAgIGluY2x1ZGVOb25DbG9zZWFibGU6IHRoaXMuaW5jbHVkZU5vbkNsb3NlYWJsZSxcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmluY2x1ZGVOb25DbG9zZWFibGUpIHRoaXMuaXRlbS5jbG9zYWJsZSA9IHRydWU7XG4gIH1cblxuICBjbGljayhlOiBNb3VzZUV2ZW50LCB0eXBlOiBDbG9zZVR5cGUsIGN1c3RvbT86IFJldXNlQ3VzdG9tQ29udGV4dE1lbnUpOiB2b2lkIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAodHlwZSA9PT0gJ2Nsb3NlJyAmJiAhdGhpcy5pdGVtLmNsb3NhYmxlKSByZXR1cm47XG4gICAgaWYgKHR5cGUgPT09ICdjbG9zZVJpZ2h0JyAmJiB0aGlzLml0ZW0ubGFzdCkgcmV0dXJuO1xuXG4gICAgaWYgKGN1c3RvbSkge1xuICAgICAgaWYgKHRoaXMuaXNEaXNhYmxlZChjdXN0b20pKSByZXR1cm47XG4gICAgICBjdXN0b20uZm4odGhpcy5pdGVtLCBjdXN0b20pO1xuICAgIH1cbiAgICB0aGlzLm5vdGlmeSh0eXBlKTtcbiAgfVxuXG4gIGlzRGlzYWJsZWQoY3VzdG9tOiBSZXVzZUN1c3RvbUNvbnRleHRNZW51KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGN1c3RvbS5kaXNhYmxlZCA/IGN1c3RvbS5kaXNhYmxlZCh0aGlzLml0ZW0pIDogZmFsc2U7XG4gIH1cblxuICBjbG9zZU1lbnUoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ2NsaWNrJyAmJiBldmVudC5idXR0b24gPT09IDIpIHJldHVybjtcbiAgICB0aGlzLm5vdGlmeShudWxsKTtcbiAgfVxufVxuIl19