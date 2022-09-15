import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@delon/theme";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/menu";
export class ReuseTabContextMenuComponent {
    constructor(i18nSrv) {
        this.i18nSrv = i18nSrv;
        this.close = new EventEmitter();
    }
    set i18n(value) {
        this._i18n = {
            ...this.i18nSrv.getData('reuseTab'),
            ...value
        };
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
ReuseTabContextMenuComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.2", ngImport: i0, type: ReuseTabContextMenuComponent, deps: [{ token: i1.DelonLocaleService }], target: i0.ɵɵFactoryTarget.Component });
ReuseTabContextMenuComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.2", type: ReuseTabContextMenuComponent, selector: "reuse-tab-context-menu", inputs: { i18n: "i18n", item: "item", event: "event", customContextMenu: "customContextMenu" }, outputs: { close: "close" }, host: { listeners: { "document:click": "closeMenu($event)", "document:contextmenu": "closeMenu($event)" } }, ngImport: i0, template: "<ul nz-menu>\n  <li\n    *ngIf=\"item.active\"\n    nz-menu-item\n    (click)=\"click($event, 'refresh')\"\n    data-type=\"refresh\"\n    [innerHTML]=\"i18n.refresh\"\n  ></li>\n  <li\n    nz-menu-item\n    (click)=\"click($event, 'close')\"\n    data-type=\"close\"\n    [nzDisabled]=\"!item.closable\"\n    [innerHTML]=\"i18n.close\"\n  ></li>\n  <li nz-menu-item (click)=\"click($event, 'closeOther')\" data-type=\"closeOther\" [innerHTML]=\"i18n.closeOther\"></li>\n  <li\n    nz-menu-item\n    (click)=\"click($event, 'closeRight')\"\n    data-type=\"closeRight\"\n    [nzDisabled]=\"item.last\"\n    [innerHTML]=\"i18n.closeRight\"\n  ></li>\n  <ng-container *ngIf=\"customContextMenu!.length > 0\">\n    <li nz-menu-divider></li>\n    <li\n      *ngFor=\"let i of customContextMenu\"\n      nz-menu-item\n      [attr.data-type]=\"i.id\"\n      [nzDisabled]=\"isDisabled(i)\"\n      (click)=\"click($event, 'custom', i)\"\n      [innerHTML]=\"i.title\"\n    ></li>\n  </ng-container>\n</ul>\n", dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i3.NzMenuDirective, selector: "[nz-menu]", inputs: ["nzInlineIndent", "nzTheme", "nzMode", "nzInlineCollapsed", "nzSelectable"], outputs: ["nzClick"], exportAs: ["nzMenu"] }, { kind: "directive", type: i3.NzMenuItemDirective, selector: "[nz-menu-item]", inputs: ["nzPaddingLeft", "nzDisabled", "nzSelected", "nzDanger", "nzMatchRouterExact", "nzMatchRouter"], exportAs: ["nzMenuItem"] }, { kind: "directive", type: i3.NzMenuDividerDirective, selector: "[nz-menu-divider]", exportAs: ["nzMenuDivider"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.2", ngImport: i0, type: ReuseTabContextMenuComponent, decorators: [{
            type: Component,
            args: [{ selector: 'reuse-tab-context-menu', host: {
                        '(document:click)': 'closeMenu($event)',
                        '(document:contextmenu)': 'closeMenu($event)'
                    }, preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<ul nz-menu>\n  <li\n    *ngIf=\"item.active\"\n    nz-menu-item\n    (click)=\"click($event, 'refresh')\"\n    data-type=\"refresh\"\n    [innerHTML]=\"i18n.refresh\"\n  ></li>\n  <li\n    nz-menu-item\n    (click)=\"click($event, 'close')\"\n    data-type=\"close\"\n    [nzDisabled]=\"!item.closable\"\n    [innerHTML]=\"i18n.close\"\n  ></li>\n  <li nz-menu-item (click)=\"click($event, 'closeOther')\" data-type=\"closeOther\" [innerHTML]=\"i18n.closeOther\"></li>\n  <li\n    nz-menu-item\n    (click)=\"click($event, 'closeRight')\"\n    data-type=\"closeRight\"\n    [nzDisabled]=\"item.last\"\n    [innerHTML]=\"i18n.closeRight\"\n  ></li>\n  <ng-container *ngIf=\"customContextMenu!.length > 0\">\n    <li nz-menu-divider></li>\n    <li\n      *ngFor=\"let i of customContextMenu\"\n      nz-menu-item\n      [attr.data-type]=\"i.id\"\n      [nzDisabled]=\"isDisabled(i)\"\n      (click)=\"click($event, 'custom', i)\"\n      [innerHTML]=\"i.title\"\n    ></li>\n  </ng-container>\n</ul>\n" }]
        }], ctorParameters: function () { return [{ type: i1.DelonLocaleService }]; }, propDecorators: { i18n: [{
                type: Input
            }], item: [{
                type: Input
            }], event: [{
                type: Input
            }], customContextMenu: [{
                type: Input
            }], close: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2UtdGFiLWNvbnRleHQtbWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvcmV1c2UtdGFiL3JldXNlLXRhYi1jb250ZXh0LW1lbnUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3JldXNlLXRhYi9yZXVzZS10YWItY29udGV4dC1tZW51LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUNOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQzs7Ozs7QUF1QnZCLE1BQU0sT0FBTyw0QkFBNEI7SUFxQnZDLFlBQW9CLE9BQTJCO1FBQTNCLFlBQU8sR0FBUCxPQUFPLENBQW9CO1FBTjVCLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBMEIsQ0FBQztJQU1wQixDQUFDO0lBbkJuRCxJQUNJLElBQUksQ0FBQyxLQUF1QjtRQUM5QixJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1gsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7WUFDbkMsR0FBRyxLQUFLO1NBQ1QsQ0FBQztJQUNKLENBQUM7SUFDRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQU1ELElBQUksbUJBQW1CO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7SUFDNUIsQ0FBQztJQUlPLE1BQU0sQ0FBQyxJQUFlO1FBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQ2QsSUFBSTtZQUNKLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLG1CQUFtQixFQUFFLElBQUksQ0FBQyxtQkFBbUI7U0FDOUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxtQkFBbUI7WUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDMUQsQ0FBQztJQUVELEtBQUssQ0FBQyxDQUFhLEVBQUUsSUFBZSxFQUFFLE1BQStCO1FBQ25FLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNuQixDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDcEIsSUFBSSxJQUFJLEtBQUssT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRO1lBQUUsT0FBTztRQUNwRCxJQUFJLElBQUksS0FBSyxZQUFZLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUVwRCxJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7Z0JBQUUsT0FBTztZQUNwQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDOUI7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFFRCxVQUFVLENBQUMsTUFBOEI7UUFDdkMsT0FBTyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQzlELENBQUM7SUFFRCxTQUFTLENBQUMsS0FBaUI7UUFDekIsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLE9BQU8sSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUM7WUFBRSxPQUFPO1FBQ3pELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEIsQ0FBQzs7eUhBdkRVLDRCQUE0Qjs2R0FBNUIsNEJBQTRCLHdTQy9CekMseStCQW1DQTsyRkRKYSw0QkFBNEI7a0JBWHhDLFNBQVM7K0JBQ0Usd0JBQXdCLFFBRTVCO3dCQUNKLGtCQUFrQixFQUFFLG1CQUFtQjt3QkFDdkMsd0JBQXdCLEVBQUUsbUJBQW1CO3FCQUM5Qyx1QkFDb0IsS0FBSyxtQkFDVCx1QkFBdUIsQ0FBQyxNQUFNLGlCQUNoQyxpQkFBaUIsQ0FBQyxJQUFJO3lHQUtqQyxJQUFJO3NCQURQLEtBQUs7Z0JBVUcsSUFBSTtzQkFBWixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxpQkFBaUI7c0JBQXpCLEtBQUs7Z0JBQ2EsS0FBSztzQkFBdkIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRGVsb25Mb2NhbGVTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcblxuaW1wb3J0IHtcbiAgQ2xvc2VUeXBlLFxuICBSZXVzZUNvbnRleHRDbG9zZUV2ZW50LFxuICBSZXVzZUNvbnRleHRJMThuLFxuICBSZXVzZUN1c3RvbUNvbnRleHRNZW51LFxuICBSZXVzZUl0ZW1cbn0gZnJvbSAnLi9yZXVzZS10YWIuaW50ZXJmYWNlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3JldXNlLXRhYi1jb250ZXh0LW1lbnUnLFxuICB0ZW1wbGF0ZVVybDogJy4vcmV1c2UtdGFiLWNvbnRleHQtbWVudS5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICAnKGRvY3VtZW50OmNsaWNrKSc6ICdjbG9zZU1lbnUoJGV2ZW50KScsXG4gICAgJyhkb2N1bWVudDpjb250ZXh0bWVudSknOiAnY2xvc2VNZW51KCRldmVudCknXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBSZXVzZVRhYkNvbnRleHRNZW51Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBfaTE4biE6IFJldXNlQ29udGV4dEkxOG47XG4gIEBJbnB1dCgpXG4gIHNldCBpMThuKHZhbHVlOiBSZXVzZUNvbnRleHRJMThuKSB7XG4gICAgdGhpcy5faTE4biA9IHtcbiAgICAgIC4uLnRoaXMuaTE4blNydi5nZXREYXRhKCdyZXVzZVRhYicpLFxuICAgICAgLi4udmFsdWVcbiAgICB9O1xuICB9XG4gIGdldCBpMThuKCk6IFJldXNlQ29udGV4dEkxOG4ge1xuICAgIHJldHVybiB0aGlzLl9pMThuO1xuICB9XG4gIEBJbnB1dCgpIGl0ZW0hOiBSZXVzZUl0ZW07XG4gIEBJbnB1dCgpIGV2ZW50ITogTW91c2VFdmVudDtcbiAgQElucHV0KCkgY3VzdG9tQ29udGV4dE1lbnUhOiBSZXVzZUN1c3RvbUNvbnRleHRNZW51W107XG4gIEBPdXRwdXQoKSByZWFkb25seSBjbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8UmV1c2VDb250ZXh0Q2xvc2VFdmVudD4oKTtcblxuICBnZXQgaW5jbHVkZU5vbkNsb3NlYWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5ldmVudC5jdHJsS2V5O1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpMThuU3J2OiBEZWxvbkxvY2FsZVNlcnZpY2UpIHt9XG5cbiAgcHJpdmF0ZSBub3RpZnkodHlwZTogQ2xvc2VUeXBlKTogdm9pZCB7XG4gICAgdGhpcy5jbG9zZS5uZXh0KHtcbiAgICAgIHR5cGUsXG4gICAgICBpdGVtOiB0aGlzLml0ZW0sXG4gICAgICBpbmNsdWRlTm9uQ2xvc2VhYmxlOiB0aGlzLmluY2x1ZGVOb25DbG9zZWFibGVcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmluY2x1ZGVOb25DbG9zZWFibGUpIHRoaXMuaXRlbS5jbG9zYWJsZSA9IHRydWU7XG4gIH1cblxuICBjbGljayhlOiBNb3VzZUV2ZW50LCB0eXBlOiBDbG9zZVR5cGUsIGN1c3RvbT86IFJldXNlQ3VzdG9tQ29udGV4dE1lbnUpOiB2b2lkIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAodHlwZSA9PT0gJ2Nsb3NlJyAmJiAhdGhpcy5pdGVtLmNsb3NhYmxlKSByZXR1cm47XG4gICAgaWYgKHR5cGUgPT09ICdjbG9zZVJpZ2h0JyAmJiB0aGlzLml0ZW0ubGFzdCkgcmV0dXJuO1xuXG4gICAgaWYgKGN1c3RvbSkge1xuICAgICAgaWYgKHRoaXMuaXNEaXNhYmxlZChjdXN0b20pKSByZXR1cm47XG4gICAgICBjdXN0b20uZm4odGhpcy5pdGVtLCBjdXN0b20pO1xuICAgIH1cbiAgICB0aGlzLm5vdGlmeSh0eXBlKTtcbiAgfVxuXG4gIGlzRGlzYWJsZWQoY3VzdG9tOiBSZXVzZUN1c3RvbUNvbnRleHRNZW51KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGN1c3RvbS5kaXNhYmxlZCA/IGN1c3RvbS5kaXNhYmxlZCh0aGlzLml0ZW0pIDogZmFsc2U7XG4gIH1cblxuICBjbG9zZU1lbnUoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ2NsaWNrJyAmJiBldmVudC5idXR0b24gPT09IDIpIHJldHVybjtcbiAgICB0aGlzLm5vdGlmeShudWxsKTtcbiAgfVxufVxuIiwiPHVsIG56LW1lbnU+XG4gIDxsaVxuICAgICpuZ0lmPVwiaXRlbS5hY3RpdmVcIlxuICAgIG56LW1lbnUtaXRlbVxuICAgIChjbGljayk9XCJjbGljaygkZXZlbnQsICdyZWZyZXNoJylcIlxuICAgIGRhdGEtdHlwZT1cInJlZnJlc2hcIlxuICAgIFtpbm5lckhUTUxdPVwiaTE4bi5yZWZyZXNoXCJcbiAgPjwvbGk+XG4gIDxsaVxuICAgIG56LW1lbnUtaXRlbVxuICAgIChjbGljayk9XCJjbGljaygkZXZlbnQsICdjbG9zZScpXCJcbiAgICBkYXRhLXR5cGU9XCJjbG9zZVwiXG4gICAgW256RGlzYWJsZWRdPVwiIWl0ZW0uY2xvc2FibGVcIlxuICAgIFtpbm5lckhUTUxdPVwiaTE4bi5jbG9zZVwiXG4gID48L2xpPlxuICA8bGkgbnotbWVudS1pdGVtIChjbGljayk9XCJjbGljaygkZXZlbnQsICdjbG9zZU90aGVyJylcIiBkYXRhLXR5cGU9XCJjbG9zZU90aGVyXCIgW2lubmVySFRNTF09XCJpMThuLmNsb3NlT3RoZXJcIj48L2xpPlxuICA8bGlcbiAgICBuei1tZW51LWl0ZW1cbiAgICAoY2xpY2spPVwiY2xpY2soJGV2ZW50LCAnY2xvc2VSaWdodCcpXCJcbiAgICBkYXRhLXR5cGU9XCJjbG9zZVJpZ2h0XCJcbiAgICBbbnpEaXNhYmxlZF09XCJpdGVtLmxhc3RcIlxuICAgIFtpbm5lckhUTUxdPVwiaTE4bi5jbG9zZVJpZ2h0XCJcbiAgPjwvbGk+XG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJjdXN0b21Db250ZXh0TWVudSEubGVuZ3RoID4gMFwiPlxuICAgIDxsaSBuei1tZW51LWRpdmlkZXI+PC9saT5cbiAgICA8bGlcbiAgICAgICpuZ0Zvcj1cImxldCBpIG9mIGN1c3RvbUNvbnRleHRNZW51XCJcbiAgICAgIG56LW1lbnUtaXRlbVxuICAgICAgW2F0dHIuZGF0YS10eXBlXT1cImkuaWRcIlxuICAgICAgW256RGlzYWJsZWRdPVwiaXNEaXNhYmxlZChpKVwiXG4gICAgICAoY2xpY2spPVwiY2xpY2soJGV2ZW50LCAnY3VzdG9tJywgaSlcIlxuICAgICAgW2lubmVySFRNTF09XCJpLnRpdGxlXCJcbiAgICA+PC9saT5cbiAgPC9uZy1jb250YWluZXI+XG48L3VsPlxuIl19