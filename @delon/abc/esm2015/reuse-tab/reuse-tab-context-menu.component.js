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
            includeNonCloseable: this.includeNonCloseable
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
                template: "<ul nz-menu>\n  <li nz-menu-item (click)=\"click($event, 'refresh')\" data-type=\"refresh\" [innerHTML]=\"i18n.refresh\"></li>\n  <li\n    nz-menu-item\n    (click)=\"click($event, 'close')\"\n    data-type=\"close\"\n    [nzDisabled]=\"!item.closable\"\n    [innerHTML]=\"i18n.close\"\n  ></li>\n  <li nz-menu-item (click)=\"click($event, 'closeOther')\" data-type=\"closeOther\" [innerHTML]=\"i18n.closeOther\"></li>\n  <li\n    nz-menu-item\n    (click)=\"click($event, 'closeRight')\"\n    data-type=\"closeRight\"\n    [nzDisabled]=\"item.last\"\n    [innerHTML]=\"i18n.closeRight\"\n  ></li>\n  <ng-container *ngIf=\"customContextMenu!.length > 0\">\n    <li nz-menu-divider></li>\n    <li\n      *ngFor=\"let i of customContextMenu\"\n      nz-menu-item\n      [attr.data-type]=\"i.id\"\n      [nzDisabled]=\"isDisabled(i)\"\n      (click)=\"click($event, 'custom', i)\"\n      [innerHTML]=\"i.title\"\n    ></li>\n  </ng-container>\n</ul>\n",
                host: {
                    '(document:click)': 'closeMenu($event)',
                    '(document:contextmenu)': 'closeMenu($event)'
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            },] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2UtdGFiLWNvbnRleHQtbWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvcmV1c2UtdGFiL3JldXNlLXRhYi1jb250ZXh0LW1lbnUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUNOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFxQmxELE1BQU0sT0FBTyw0QkFBNEI7SUFxQnZDLFlBQW9CLE9BQTJCO1FBQTNCLFlBQU8sR0FBUCxPQUFPLENBQW9CO1FBTjVCLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBMEIsQ0FBQztJQU1wQixDQUFDO0lBbkJuRCxJQUNJLElBQUksQ0FBQyxLQUF1QjtRQUM5QixJQUFJLENBQUMsS0FBSyxtQ0FDTCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsR0FDaEMsS0FBSyxDQUNULENBQUM7SUFDSixDQUFDO0lBQ0QsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFNRCxJQUFJLG1CQUFtQjtRQUNyQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO0lBQzVCLENBQUM7SUFJTyxNQUFNLENBQUMsSUFBZTtRQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztZQUNkLElBQUk7WUFDSixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixtQkFBbUIsRUFBRSxJQUFJLENBQUMsbUJBQW1CO1NBQzlDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsbUJBQW1CO1lBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQzFELENBQUM7SUFFRCxLQUFLLENBQUMsQ0FBYSxFQUFFLElBQWUsRUFBRSxNQUErQjtRQUNuRSxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkIsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3BCLElBQUksSUFBSSxLQUFLLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUTtZQUFFLE9BQU87UUFDcEQsSUFBSSxJQUFJLEtBQUssWUFBWSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFcEQsSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO2dCQUFFLE9BQU87WUFDcEMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQzlCO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBRUQsVUFBVSxDQUFDLE1BQThCO1FBQ3ZDLE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUM5RCxDQUFDO0lBRUQsU0FBUyxDQUFDLEtBQWlCO1FBQ3pCLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxPQUFPLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDO1lBQUUsT0FBTztRQUN6RCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BCLENBQUM7OztZQWxFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsZzhCQUFzRDtnQkFDdEQsSUFBSSxFQUFFO29CQUNKLGtCQUFrQixFQUFFLG1CQUFtQjtvQkFDdkMsd0JBQXdCLEVBQUUsbUJBQW1CO2lCQUM5QztnQkFDRCxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7OztZQXBCUSxrQkFBa0I7OzttQkF1QnhCLEtBQUs7bUJBVUwsS0FBSztvQkFDTCxLQUFLO2dDQUNMLEtBQUs7b0JBQ0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRGVsb25Mb2NhbGVTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcblxuaW1wb3J0IHtcbiAgQ2xvc2VUeXBlLFxuICBSZXVzZUNvbnRleHRDbG9zZUV2ZW50LFxuICBSZXVzZUNvbnRleHRJMThuLFxuICBSZXVzZUN1c3RvbUNvbnRleHRNZW51LFxuICBSZXVzZUl0ZW1cbn0gZnJvbSAnLi9yZXVzZS10YWIuaW50ZXJmYWNlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3JldXNlLXRhYi1jb250ZXh0LW1lbnUnLFxuICB0ZW1wbGF0ZVVybDogJy4vcmV1c2UtdGFiLWNvbnRleHQtbWVudS5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICAnKGRvY3VtZW50OmNsaWNrKSc6ICdjbG9zZU1lbnUoJGV2ZW50KScsXG4gICAgJyhkb2N1bWVudDpjb250ZXh0bWVudSknOiAnY2xvc2VNZW51KCRldmVudCknXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBSZXVzZVRhYkNvbnRleHRNZW51Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBfaTE4bjogUmV1c2VDb250ZXh0STE4bjtcbiAgQElucHV0KClcbiAgc2V0IGkxOG4odmFsdWU6IFJldXNlQ29udGV4dEkxOG4pIHtcbiAgICB0aGlzLl9pMThuID0ge1xuICAgICAgLi4udGhpcy5pMThuU3J2LmdldERhdGEoJ3JldXNlVGFiJyksXG4gICAgICAuLi52YWx1ZVxuICAgIH07XG4gIH1cbiAgZ2V0IGkxOG4oKTogUmV1c2VDb250ZXh0STE4biB7XG4gICAgcmV0dXJuIHRoaXMuX2kxOG47XG4gIH1cbiAgQElucHV0KCkgaXRlbTogUmV1c2VJdGVtO1xuICBASW5wdXQoKSBldmVudDogTW91c2VFdmVudDtcbiAgQElucHV0KCkgY3VzdG9tQ29udGV4dE1lbnU6IFJldXNlQ3VzdG9tQ29udGV4dE1lbnVbXTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjxSZXVzZUNvbnRleHRDbG9zZUV2ZW50PigpO1xuXG4gIGdldCBpbmNsdWRlTm9uQ2xvc2VhYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmV2ZW50LmN0cmxLZXk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGkxOG5TcnY6IERlbG9uTG9jYWxlU2VydmljZSkge31cblxuICBwcml2YXRlIG5vdGlmeSh0eXBlOiBDbG9zZVR5cGUpOiB2b2lkIHtcbiAgICB0aGlzLmNsb3NlLm5leHQoe1xuICAgICAgdHlwZSxcbiAgICAgIGl0ZW06IHRoaXMuaXRlbSxcbiAgICAgIGluY2x1ZGVOb25DbG9zZWFibGU6IHRoaXMuaW5jbHVkZU5vbkNsb3NlYWJsZVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW5jbHVkZU5vbkNsb3NlYWJsZSkgdGhpcy5pdGVtLmNsb3NhYmxlID0gdHJ1ZTtcbiAgfVxuXG4gIGNsaWNrKGU6IE1vdXNlRXZlbnQsIHR5cGU6IENsb3NlVHlwZSwgY3VzdG9tPzogUmV1c2VDdXN0b21Db250ZXh0TWVudSk6IHZvaWQge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmICh0eXBlID09PSAnY2xvc2UnICYmICF0aGlzLml0ZW0uY2xvc2FibGUpIHJldHVybjtcbiAgICBpZiAodHlwZSA9PT0gJ2Nsb3NlUmlnaHQnICYmIHRoaXMuaXRlbS5sYXN0KSByZXR1cm47XG5cbiAgICBpZiAoY3VzdG9tKSB7XG4gICAgICBpZiAodGhpcy5pc0Rpc2FibGVkKGN1c3RvbSkpIHJldHVybjtcbiAgICAgIGN1c3RvbS5mbih0aGlzLml0ZW0sIGN1c3RvbSk7XG4gICAgfVxuICAgIHRoaXMubm90aWZ5KHR5cGUpO1xuICB9XG5cbiAgaXNEaXNhYmxlZChjdXN0b206IFJldXNlQ3VzdG9tQ29udGV4dE1lbnUpOiBib29sZWFuIHtcbiAgICByZXR1cm4gY3VzdG9tLmRpc2FibGVkID8gY3VzdG9tLmRpc2FibGVkKHRoaXMuaXRlbSkgOiBmYWxzZTtcbiAgfVxuXG4gIGNsb3NlTWVudShldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmIChldmVudC50eXBlID09PSAnY2xpY2snICYmIGV2ZW50LmJ1dHRvbiA9PT0gMikgcmV0dXJuO1xuICAgIHRoaXMubm90aWZ5KG51bGwpO1xuICB9XG59XG4iXX0=