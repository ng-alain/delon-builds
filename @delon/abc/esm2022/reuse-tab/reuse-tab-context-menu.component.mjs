import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@delon/theme";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/menu";
export class ReuseTabContextMenuComponent {
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
    constructor(i18nSrv) {
        this.i18nSrv = i18nSrv;
        this.close = new EventEmitter();
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ReuseTabContextMenuComponent, deps: [{ token: i1.DelonLocaleService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.10", type: ReuseTabContextMenuComponent, selector: "reuse-tab-context-menu", inputs: { i18n: "i18n", item: "item", event: "event", customContextMenu: "customContextMenu" }, outputs: { close: "close" }, host: { listeners: { "document:click": "closeMenu($event)", "document:contextmenu": "closeMenu($event)" } }, ngImport: i0, template: "<ul nz-menu>\n  <li\n    *ngIf=\"item.active\"\n    nz-menu-item\n    (click)=\"click($event, 'refresh')\"\n    data-type=\"refresh\"\n    [innerHTML]=\"i18n.refresh\"\n  ></li>\n  <li\n    nz-menu-item\n    (click)=\"click($event, 'close')\"\n    data-type=\"close\"\n    [nzDisabled]=\"!item.closable\"\n    [innerHTML]=\"i18n.close\"\n  ></li>\n  <li nz-menu-item (click)=\"click($event, 'closeOther')\" data-type=\"closeOther\" [innerHTML]=\"i18n.closeOther\"></li>\n  <li\n    nz-menu-item\n    (click)=\"click($event, 'closeRight')\"\n    data-type=\"closeRight\"\n    [nzDisabled]=\"item.last\"\n    [innerHTML]=\"i18n.closeRight\"\n  ></li>\n  <ng-container *ngIf=\"customContextMenu!.length > 0\">\n    <li nz-menu-divider></li>\n    <li\n      *ngFor=\"let i of customContextMenu\"\n      nz-menu-item\n      [attr.data-type]=\"i.id\"\n      [nzDisabled]=\"isDisabled(i)\"\n      (click)=\"click($event, 'custom', i)\"\n      [innerHTML]=\"i.title\"\n    ></li>\n  </ng-container>\n</ul>\n", dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i3.NzMenuDirective, selector: "[nz-menu]", inputs: ["nzInlineIndent", "nzTheme", "nzMode", "nzInlineCollapsed", "nzSelectable"], outputs: ["nzClick"], exportAs: ["nzMenu"] }, { kind: "directive", type: i3.NzMenuItemDirective, selector: "[nz-menu-item]", inputs: ["nzPaddingLeft", "nzDisabled", "nzSelected", "nzDanger", "nzMatchRouterExact", "nzMatchRouter"], exportAs: ["nzMenuItem"] }, { kind: "directive", type: i3.NzMenuDividerDirective, selector: "[nz-menu-divider]", exportAs: ["nzMenuDivider"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ReuseTabContextMenuComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2UtdGFiLWNvbnRleHQtbWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvcmV1c2UtdGFiL3JldXNlLXRhYi1jb250ZXh0LW1lbnUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3JldXNlLXRhYi9yZXVzZS10YWItY29udGV4dC1tZW51LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUNOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQzs7Ozs7QUF1QnZCLE1BQU0sT0FBTyw0QkFBNEI7SUFFdkMsSUFDSSxJQUFJLENBQUMsS0FBdUI7UUFDOUIsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNYLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO1lBQ25DLEdBQUcsS0FBSztTQUNULENBQUM7SUFDSixDQUFDO0lBQ0QsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFNRCxJQUFJLG1CQUFtQjtRQUNyQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO0lBQzVCLENBQUM7SUFFRCxZQUFvQixPQUEyQjtRQUEzQixZQUFPLEdBQVAsT0FBTyxDQUFvQjtRQU41QixVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQTBCLENBQUM7SUFNcEIsQ0FBQztJQUUzQyxNQUFNLENBQUMsSUFBZTtRQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztZQUNkLElBQUk7WUFDSixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixtQkFBbUIsRUFBRSxJQUFJLENBQUMsbUJBQW1CO1NBQzlDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsbUJBQW1CO1lBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQzFELENBQUM7SUFFRCxLQUFLLENBQUMsQ0FBYSxFQUFFLElBQWUsRUFBRSxNQUErQjtRQUNuRSxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkIsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3BCLElBQUksSUFBSSxLQUFLLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUTtZQUFFLE9BQU87UUFDcEQsSUFBSSxJQUFJLEtBQUssWUFBWSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFcEQsSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO2dCQUFFLE9BQU87WUFDcEMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQzlCO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBRUQsVUFBVSxDQUFDLE1BQThCO1FBQ3ZDLE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUM5RCxDQUFDO0lBRUQsU0FBUyxDQUFDLEtBQWlCO1FBQ3pCLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxPQUFPLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDO1lBQUUsT0FBTztRQUN6RCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BCLENBQUM7K0dBdkRVLDRCQUE0QjttR0FBNUIsNEJBQTRCLHdTQy9CekMseStCQW1DQTs7NEZESmEsNEJBQTRCO2tCQVh4QyxTQUFTOytCQUNFLHdCQUF3QixRQUU1Qjt3QkFDSixrQkFBa0IsRUFBRSxtQkFBbUI7d0JBQ3ZDLHdCQUF3QixFQUFFLG1CQUFtQjtxQkFDOUMsdUJBQ29CLEtBQUssbUJBQ1QsdUJBQXVCLENBQUMsTUFBTSxpQkFDaEMsaUJBQWlCLENBQUMsSUFBSTt5R0FLakMsSUFBSTtzQkFEUCxLQUFLO2dCQVVHLElBQUk7c0JBQVosS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csaUJBQWlCO3NCQUF6QixLQUFLO2dCQUNhLEtBQUs7c0JBQXZCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERlbG9uTG9jYWxlU2VydmljZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5cbmltcG9ydCB7XG4gIENsb3NlVHlwZSxcbiAgUmV1c2VDb250ZXh0Q2xvc2VFdmVudCxcbiAgUmV1c2VDb250ZXh0STE4bixcbiAgUmV1c2VDdXN0b21Db250ZXh0TWVudSxcbiAgUmV1c2VJdGVtXG59IGZyb20gJy4vcmV1c2UtdGFiLmludGVyZmFjZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdyZXVzZS10YWItY29udGV4dC1tZW51JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JldXNlLXRhYi1jb250ZXh0LW1lbnUuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7XG4gICAgJyhkb2N1bWVudDpjbGljayknOiAnY2xvc2VNZW51KCRldmVudCknLFxuICAgICcoZG9jdW1lbnQ6Y29udGV4dG1lbnUpJzogJ2Nsb3NlTWVudSgkZXZlbnQpJ1xuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgUmV1c2VUYWJDb250ZXh0TWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgX2kxOG4hOiBSZXVzZUNvbnRleHRJMThuO1xuICBASW5wdXQoKVxuICBzZXQgaTE4bih2YWx1ZTogUmV1c2VDb250ZXh0STE4bikge1xuICAgIHRoaXMuX2kxOG4gPSB7XG4gICAgICAuLi50aGlzLmkxOG5TcnYuZ2V0RGF0YSgncmV1c2VUYWInKSxcbiAgICAgIC4uLnZhbHVlXG4gICAgfTtcbiAgfVxuICBnZXQgaTE4bigpOiBSZXVzZUNvbnRleHRJMThuIHtcbiAgICByZXR1cm4gdGhpcy5faTE4bjtcbiAgfVxuICBASW5wdXQoKSBpdGVtITogUmV1c2VJdGVtO1xuICBASW5wdXQoKSBldmVudCE6IE1vdXNlRXZlbnQ7XG4gIEBJbnB1dCgpIGN1c3RvbUNvbnRleHRNZW51ITogUmV1c2VDdXN0b21Db250ZXh0TWVudVtdO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPFJldXNlQ29udGV4dENsb3NlRXZlbnQ+KCk7XG5cbiAgZ2V0IGluY2x1ZGVOb25DbG9zZWFibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZXZlbnQuY3RybEtleTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaTE4blNydjogRGVsb25Mb2NhbGVTZXJ2aWNlKSB7fVxuXG4gIHByaXZhdGUgbm90aWZ5KHR5cGU6IENsb3NlVHlwZSk6IHZvaWQge1xuICAgIHRoaXMuY2xvc2UubmV4dCh7XG4gICAgICB0eXBlLFxuICAgICAgaXRlbTogdGhpcy5pdGVtLFxuICAgICAgaW5jbHVkZU5vbkNsb3NlYWJsZTogdGhpcy5pbmNsdWRlTm9uQ2xvc2VhYmxlXG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pbmNsdWRlTm9uQ2xvc2VhYmxlKSB0aGlzLml0ZW0uY2xvc2FibGUgPSB0cnVlO1xuICB9XG5cbiAgY2xpY2soZTogTW91c2VFdmVudCwgdHlwZTogQ2xvc2VUeXBlLCBjdXN0b20/OiBSZXVzZUN1c3RvbUNvbnRleHRNZW51KTogdm9pZCB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKHR5cGUgPT09ICdjbG9zZScgJiYgIXRoaXMuaXRlbS5jbG9zYWJsZSkgcmV0dXJuO1xuICAgIGlmICh0eXBlID09PSAnY2xvc2VSaWdodCcgJiYgdGhpcy5pdGVtLmxhc3QpIHJldHVybjtcblxuICAgIGlmIChjdXN0b20pIHtcbiAgICAgIGlmICh0aGlzLmlzRGlzYWJsZWQoY3VzdG9tKSkgcmV0dXJuO1xuICAgICAgY3VzdG9tLmZuKHRoaXMuaXRlbSwgY3VzdG9tKTtcbiAgICB9XG4gICAgdGhpcy5ub3RpZnkodHlwZSk7XG4gIH1cblxuICBpc0Rpc2FibGVkKGN1c3RvbTogUmV1c2VDdXN0b21Db250ZXh0TWVudSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBjdXN0b20uZGlzYWJsZWQgPyBjdXN0b20uZGlzYWJsZWQodGhpcy5pdGVtKSA6IGZhbHNlO1xuICB9XG5cbiAgY2xvc2VNZW51KGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKGV2ZW50LnR5cGUgPT09ICdjbGljaycgJiYgZXZlbnQuYnV0dG9uID09PSAyKSByZXR1cm47XG4gICAgdGhpcy5ub3RpZnkobnVsbCk7XG4gIH1cbn1cbiIsIjx1bCBuei1tZW51PlxuICA8bGlcbiAgICAqbmdJZj1cIml0ZW0uYWN0aXZlXCJcbiAgICBuei1tZW51LWl0ZW1cbiAgICAoY2xpY2spPVwiY2xpY2soJGV2ZW50LCAncmVmcmVzaCcpXCJcbiAgICBkYXRhLXR5cGU9XCJyZWZyZXNoXCJcbiAgICBbaW5uZXJIVE1MXT1cImkxOG4ucmVmcmVzaFwiXG4gID48L2xpPlxuICA8bGlcbiAgICBuei1tZW51LWl0ZW1cbiAgICAoY2xpY2spPVwiY2xpY2soJGV2ZW50LCAnY2xvc2UnKVwiXG4gICAgZGF0YS10eXBlPVwiY2xvc2VcIlxuICAgIFtuekRpc2FibGVkXT1cIiFpdGVtLmNsb3NhYmxlXCJcbiAgICBbaW5uZXJIVE1MXT1cImkxOG4uY2xvc2VcIlxuICA+PC9saT5cbiAgPGxpIG56LW1lbnUtaXRlbSAoY2xpY2spPVwiY2xpY2soJGV2ZW50LCAnY2xvc2VPdGhlcicpXCIgZGF0YS10eXBlPVwiY2xvc2VPdGhlclwiIFtpbm5lckhUTUxdPVwiaTE4bi5jbG9zZU90aGVyXCI+PC9saT5cbiAgPGxpXG4gICAgbnotbWVudS1pdGVtXG4gICAgKGNsaWNrKT1cImNsaWNrKCRldmVudCwgJ2Nsb3NlUmlnaHQnKVwiXG4gICAgZGF0YS10eXBlPVwiY2xvc2VSaWdodFwiXG4gICAgW256RGlzYWJsZWRdPVwiaXRlbS5sYXN0XCJcbiAgICBbaW5uZXJIVE1MXT1cImkxOG4uY2xvc2VSaWdodFwiXG4gID48L2xpPlxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiY3VzdG9tQ29udGV4dE1lbnUhLmxlbmd0aCA+IDBcIj5cbiAgICA8bGkgbnotbWVudS1kaXZpZGVyPjwvbGk+XG4gICAgPGxpXG4gICAgICAqbmdGb3I9XCJsZXQgaSBvZiBjdXN0b21Db250ZXh0TWVudVwiXG4gICAgICBuei1tZW51LWl0ZW1cbiAgICAgIFthdHRyLmRhdGEtdHlwZV09XCJpLmlkXCJcbiAgICAgIFtuekRpc2FibGVkXT1cImlzRGlzYWJsZWQoaSlcIlxuICAgICAgKGNsaWNrKT1cImNsaWNrKCRldmVudCwgJ2N1c3RvbScsIGkpXCJcbiAgICAgIFtpbm5lckhUTUxdPVwiaS50aXRsZVwiXG4gICAgPjwvbGk+XG4gIDwvbmctY29udGFpbmVyPlxuPC91bD5cbiJdfQ==