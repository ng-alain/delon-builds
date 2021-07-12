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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2UtdGFiLWNvbnRleHQtbWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvcmV1c2UtdGFiL3JldXNlLXRhYi1jb250ZXh0LW1lbnUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0gsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBY2xELE1BQU0sT0FBTyw0QkFBNEI7SUFxQnZDLFlBQW9CLE9BQTJCO1FBQTNCLFlBQU8sR0FBUCxPQUFPLENBQW9CO1FBTjVCLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBMEIsQ0FBQztJQU1wQixDQUFDO0lBbkJuRCxJQUNJLElBQUksQ0FBQyxLQUF1QjtRQUM5QixJQUFJLENBQUMsS0FBSyxtQ0FDTCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsR0FDaEMsS0FBSyxDQUNULENBQUM7SUFDSixDQUFDO0lBQ0QsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFNRCxJQUFJLG1CQUFtQjtRQUNyQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO0lBQzVCLENBQUM7SUFJTyxNQUFNLENBQUMsSUFBZTtRQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztZQUNkLElBQUk7WUFDSixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixtQkFBbUIsRUFBRSxJQUFJLENBQUMsbUJBQW1CO1NBQzlDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsbUJBQW1CO1lBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQzFELENBQUM7SUFFRCxLQUFLLENBQUMsQ0FBYSxFQUFFLElBQWUsRUFBRSxNQUErQjtRQUNuRSxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkIsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3BCLElBQUksSUFBSSxLQUFLLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUTtZQUFFLE9BQU87UUFDcEQsSUFBSSxJQUFJLEtBQUssWUFBWSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFcEQsSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO2dCQUFFLE9BQU87WUFDcEMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQzlCO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBRUQsVUFBVSxDQUFDLE1BQThCO1FBQ3ZDLE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUM5RCxDQUFDO0lBRUQsU0FBUyxDQUFDLEtBQWlCO1FBQ3pCLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxPQUFPLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDO1lBQUUsT0FBTztRQUN6RCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BCLENBQUM7OztZQWxFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsczRCQUFzRDtnQkFDdEQsSUFBSSxFQUFFO29CQUNKLGtCQUFrQixFQUFFLG1CQUFtQjtvQkFDdkMsd0JBQXdCLEVBQUUsbUJBQW1CO2lCQUM5QztnQkFDRCxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7OztZQWJRLGtCQUFrQjs7O21CQWdCeEIsS0FBSzttQkFVTCxLQUFLO29CQUNMLEtBQUs7Z0NBQ0wsS0FBSztvQkFDTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEZWxvbkxvY2FsZVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgQ2xvc2VUeXBlLCBSZXVzZUNvbnRleHRDbG9zZUV2ZW50LCBSZXVzZUNvbnRleHRJMThuLCBSZXVzZUN1c3RvbUNvbnRleHRNZW51LCBSZXVzZUl0ZW0gfSBmcm9tICcuL3JldXNlLXRhYi5pbnRlcmZhY2VzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncmV1c2UtdGFiLWNvbnRleHQtbWVudScsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZXVzZS10YWItY29udGV4dC1tZW51LmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgICcoZG9jdW1lbnQ6Y2xpY2spJzogJ2Nsb3NlTWVudSgkZXZlbnQpJyxcbiAgICAnKGRvY3VtZW50OmNvbnRleHRtZW51KSc6ICdjbG9zZU1lbnUoJGV2ZW50KScsXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgUmV1c2VUYWJDb250ZXh0TWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgX2kxOG46IFJldXNlQ29udGV4dEkxOG47XG4gIEBJbnB1dCgpXG4gIHNldCBpMThuKHZhbHVlOiBSZXVzZUNvbnRleHRJMThuKSB7XG4gICAgdGhpcy5faTE4biA9IHtcbiAgICAgIC4uLnRoaXMuaTE4blNydi5nZXREYXRhKCdyZXVzZVRhYicpLFxuICAgICAgLi4udmFsdWUsXG4gICAgfTtcbiAgfVxuICBnZXQgaTE4bigpOiBSZXVzZUNvbnRleHRJMThuIHtcbiAgICByZXR1cm4gdGhpcy5faTE4bjtcbiAgfVxuICBASW5wdXQoKSBpdGVtOiBSZXVzZUl0ZW07XG4gIEBJbnB1dCgpIGV2ZW50OiBNb3VzZUV2ZW50O1xuICBASW5wdXQoKSBjdXN0b21Db250ZXh0TWVudTogUmV1c2VDdXN0b21Db250ZXh0TWVudVtdO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPFJldXNlQ29udGV4dENsb3NlRXZlbnQ+KCk7XG5cbiAgZ2V0IGluY2x1ZGVOb25DbG9zZWFibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZXZlbnQuY3RybEtleTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaTE4blNydjogRGVsb25Mb2NhbGVTZXJ2aWNlKSB7fVxuXG4gIHByaXZhdGUgbm90aWZ5KHR5cGU6IENsb3NlVHlwZSk6IHZvaWQge1xuICAgIHRoaXMuY2xvc2UubmV4dCh7XG4gICAgICB0eXBlLFxuICAgICAgaXRlbTogdGhpcy5pdGVtLFxuICAgICAgaW5jbHVkZU5vbkNsb3NlYWJsZTogdGhpcy5pbmNsdWRlTm9uQ2xvc2VhYmxlLFxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW5jbHVkZU5vbkNsb3NlYWJsZSkgdGhpcy5pdGVtLmNsb3NhYmxlID0gdHJ1ZTtcbiAgfVxuXG4gIGNsaWNrKGU6IE1vdXNlRXZlbnQsIHR5cGU6IENsb3NlVHlwZSwgY3VzdG9tPzogUmV1c2VDdXN0b21Db250ZXh0TWVudSk6IHZvaWQge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmICh0eXBlID09PSAnY2xvc2UnICYmICF0aGlzLml0ZW0uY2xvc2FibGUpIHJldHVybjtcbiAgICBpZiAodHlwZSA9PT0gJ2Nsb3NlUmlnaHQnICYmIHRoaXMuaXRlbS5sYXN0KSByZXR1cm47XG5cbiAgICBpZiAoY3VzdG9tKSB7XG4gICAgICBpZiAodGhpcy5pc0Rpc2FibGVkKGN1c3RvbSkpIHJldHVybjtcbiAgICAgIGN1c3RvbS5mbih0aGlzLml0ZW0sIGN1c3RvbSk7XG4gICAgfVxuICAgIHRoaXMubm90aWZ5KHR5cGUpO1xuICB9XG5cbiAgaXNEaXNhYmxlZChjdXN0b206IFJldXNlQ3VzdG9tQ29udGV4dE1lbnUpOiBib29sZWFuIHtcbiAgICByZXR1cm4gY3VzdG9tLmRpc2FibGVkID8gY3VzdG9tLmRpc2FibGVkKHRoaXMuaXRlbSkgOiBmYWxzZTtcbiAgfVxuXG4gIGNsb3NlTWVudShldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmIChldmVudC50eXBlID09PSAnY2xpY2snICYmIGV2ZW50LmJ1dHRvbiA9PT0gMikgcmV0dXJuO1xuICAgIHRoaXMubm90aWZ5KG51bGwpO1xuICB9XG59XG4iXX0=