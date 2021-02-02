import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { DelonLocaleService } from '@delon/theme';
import * as i0 from "@angular/core";
import * as i1 from "@delon/theme";
import * as i2 from "ng-zorro-antd/menu";
import * as i3 from "@angular/common";
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
/** @nocollapse */ ReuseTabContextMenuComponent.ɵfac = function ReuseTabContextMenuComponent_Factory(t) { return new (t || ReuseTabContextMenuComponent)(i0.ɵɵdirectiveInject(i1.DelonLocaleService)); };
/** @nocollapse */ ReuseTabContextMenuComponent.ɵcmp = i0.ɵɵngDeclareComponent({ version: "11.1.1", type: ReuseTabContextMenuComponent, selector: "reuse-tab-context-menu", inputs: { i18n: "i18n", item: "item", event: "event", customContextMenu: "customContextMenu" }, outputs: { close: "close" }, host: { listeners: { "document:click": "closeMenu($event)", "document:contextmenu": "closeMenu($event)" } }, ngImport: i0, template: "<ul nz-menu>\n  <li nz-menu-item (click)=\"click($event, 'refresh')\" data-type=\"refresh\" [innerHTML]=\"i18n.refresh\"></li>\n  <li nz-menu-item (click)=\"click($event, 'close')\" data-type=\"close\" [nzDisabled]=\"!item.closable\" [innerHTML]=\"i18n.close\"></li>\n  <li nz-menu-item (click)=\"click($event, 'closeOther')\" data-type=\"closeOther\" [innerHTML]=\"i18n.closeOther\"></li>\n  <li nz-menu-item (click)=\"click($event, 'closeRight')\" data-type=\"closeRight\" [nzDisabled]=\"item.last\" [innerHTML]=\"i18n.closeRight\"></li>\n  <ng-container *ngIf=\"customContextMenu!.length > 0\">\n    <li nz-menu-divider></li>\n    <li\n      *ngFor=\"let i of customContextMenu\"\n      nz-menu-item\n      [attr.data-type]=\"i.id\"\n      [nzDisabled]=\"isDisabled(i)\"\n      (click)=\"click($event, 'custom', i)\"\n      [innerHTML]=\"i.title\"\n    ></li>\n  </ng-container>\n</ul>\n", directives: [{ type: i2.NzMenuDirective, selector: "[nz-menu]", inputs: ["nzInlineIndent", "nzTheme", "nzMode", "nzInlineCollapsed", "nzSelectable"], outputs: ["nzClick"], exportAs: ["nzMenu"] }, { type: i2.NzMenuItemDirective, selector: "[nz-menu-item]", inputs: ["nzDisabled", "nzSelected", "nzDanger", "nzMatchRouterExact", "nzMatchRouter", "nzPaddingLeft"], exportAs: ["nzMenuItem"] }, { type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2.NzMenuDividerDirective, selector: "[nz-menu-divider]", exportAs: ["nzMenuDivider"] }, { type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ReuseTabContextMenuComponent, [{
        type: Component,
        args: [{
                selector: 'reuse-tab-context-menu',
                templateUrl: './reuse-tab-context-menu.component.html',
                host: {
                    '(document:click)': 'closeMenu($event)',
                    '(document:contextmenu)': 'closeMenu($event)',
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], function () { return [{ type: i1.DelonLocaleService }]; }, { i18n: [{
            type: Input
        }], item: [{
            type: Input
        }], event: [{
            type: Input
        }], customContextMenu: [{
            type: Input
        }], close: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2UtdGFiLWNvbnRleHQtbWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvcmV1c2UtdGFiL3JldXNlLXRhYi1jb250ZXh0LW1lbnUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3JldXNlLXRhYi9yZXVzZS10YWItY29udGV4dC1tZW51LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0gsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sY0FBYyxDQUFDOzs7OztBQWNsRCxNQUFNLE9BQU8sNEJBQTRCO0lBcUJ2QyxZQUFvQixPQUEyQjtRQUEzQixZQUFPLEdBQVAsT0FBTyxDQUFvQjtRQU41QixVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQTBCLENBQUM7SUFNcEIsQ0FBQztJQW5CbkQsSUFDSSxJQUFJLENBQUMsS0FBdUI7UUFDOUIsSUFBSSxDQUFDLEtBQUssbUNBQ0wsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQ2hDLEtBQUssQ0FDVCxDQUFDO0lBQ0osQ0FBQztJQUNELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBTUQsSUFBSSxtQkFBbUI7UUFDckIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztJQUM1QixDQUFDO0lBSU8sTUFBTSxDQUFDLElBQWU7UUFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDZCxJQUFJO1lBQ0osSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLG1CQUFtQjtTQUM5QyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLG1CQUFtQjtZQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUMxRCxDQUFDO0lBRUQsS0FBSyxDQUFDLENBQWEsRUFBRSxJQUFlLEVBQUUsTUFBK0I7UUFDbkUsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25CLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNwQixJQUFJLElBQUksS0FBSyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7WUFBRSxPQUFPO1FBQ3BELElBQUksSUFBSSxLQUFLLFlBQVksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXBELElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztnQkFBRSxPQUFPO1lBQ3BDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztTQUM5QjtRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVELFVBQVUsQ0FBQyxNQUE4QjtRQUN2QyxPQUFPLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDOUQsQ0FBQztJQUVELFNBQVMsQ0FBQyxLQUFpQjtRQUN6QixJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssT0FBTyxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQztZQUFFLE9BQU87UUFDekQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQixDQUFDOzsySEF2RFUsNEJBQTRCOzBHQUE1Qiw0QkFBNEIsd1NDZnpDLDQzQkFpQkE7dUZERmEsNEJBQTRCO2NBWHhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxXQUFXLEVBQUUseUNBQXlDO2dCQUN0RCxJQUFJLEVBQUU7b0JBQ0osa0JBQWtCLEVBQUUsbUJBQW1CO29CQUN2Qyx3QkFBd0IsRUFBRSxtQkFBbUI7aUJBQzlDO2dCQUNELG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0QztxRUFJSyxJQUFJO2tCQURQLEtBQUs7WUFVRyxJQUFJO2tCQUFaLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDRyxpQkFBaUI7a0JBQXpCLEtBQUs7WUFDYSxLQUFLO2tCQUF2QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEZWxvbkxvY2FsZVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgQ2xvc2VUeXBlLCBSZXVzZUNvbnRleHRDbG9zZUV2ZW50LCBSZXVzZUNvbnRleHRJMThuLCBSZXVzZUN1c3RvbUNvbnRleHRNZW51LCBSZXVzZUl0ZW0gfSBmcm9tICcuL3JldXNlLXRhYi5pbnRlcmZhY2VzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncmV1c2UtdGFiLWNvbnRleHQtbWVudScsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZXVzZS10YWItY29udGV4dC1tZW51LmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgICcoZG9jdW1lbnQ6Y2xpY2spJzogJ2Nsb3NlTWVudSgkZXZlbnQpJyxcbiAgICAnKGRvY3VtZW50OmNvbnRleHRtZW51KSc6ICdjbG9zZU1lbnUoJGV2ZW50KScsXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgUmV1c2VUYWJDb250ZXh0TWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgX2kxOG46IFJldXNlQ29udGV4dEkxOG47XG4gIEBJbnB1dCgpXG4gIHNldCBpMThuKHZhbHVlOiBSZXVzZUNvbnRleHRJMThuKSB7XG4gICAgdGhpcy5faTE4biA9IHtcbiAgICAgIC4uLnRoaXMuaTE4blNydi5nZXREYXRhKCdyZXVzZVRhYicpLFxuICAgICAgLi4udmFsdWUsXG4gICAgfTtcbiAgfVxuICBnZXQgaTE4bigpOiBSZXVzZUNvbnRleHRJMThuIHtcbiAgICByZXR1cm4gdGhpcy5faTE4bjtcbiAgfVxuICBASW5wdXQoKSBpdGVtOiBSZXVzZUl0ZW07XG4gIEBJbnB1dCgpIGV2ZW50OiBNb3VzZUV2ZW50O1xuICBASW5wdXQoKSBjdXN0b21Db250ZXh0TWVudTogUmV1c2VDdXN0b21Db250ZXh0TWVudVtdO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPFJldXNlQ29udGV4dENsb3NlRXZlbnQ+KCk7XG5cbiAgZ2V0IGluY2x1ZGVOb25DbG9zZWFibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZXZlbnQuY3RybEtleTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaTE4blNydjogRGVsb25Mb2NhbGVTZXJ2aWNlKSB7fVxuXG4gIHByaXZhdGUgbm90aWZ5KHR5cGU6IENsb3NlVHlwZSk6IHZvaWQge1xuICAgIHRoaXMuY2xvc2UubmV4dCh7XG4gICAgICB0eXBlLFxuICAgICAgaXRlbTogdGhpcy5pdGVtLFxuICAgICAgaW5jbHVkZU5vbkNsb3NlYWJsZTogdGhpcy5pbmNsdWRlTm9uQ2xvc2VhYmxlLFxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW5jbHVkZU5vbkNsb3NlYWJsZSkgdGhpcy5pdGVtLmNsb3NhYmxlID0gdHJ1ZTtcbiAgfVxuXG4gIGNsaWNrKGU6IE1vdXNlRXZlbnQsIHR5cGU6IENsb3NlVHlwZSwgY3VzdG9tPzogUmV1c2VDdXN0b21Db250ZXh0TWVudSk6IHZvaWQge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmICh0eXBlID09PSAnY2xvc2UnICYmICF0aGlzLml0ZW0uY2xvc2FibGUpIHJldHVybjtcbiAgICBpZiAodHlwZSA9PT0gJ2Nsb3NlUmlnaHQnICYmIHRoaXMuaXRlbS5sYXN0KSByZXR1cm47XG5cbiAgICBpZiAoY3VzdG9tKSB7XG4gICAgICBpZiAodGhpcy5pc0Rpc2FibGVkKGN1c3RvbSkpIHJldHVybjtcbiAgICAgIGN1c3RvbS5mbih0aGlzLml0ZW0sIGN1c3RvbSk7XG4gICAgfVxuICAgIHRoaXMubm90aWZ5KHR5cGUpO1xuICB9XG5cbiAgaXNEaXNhYmxlZChjdXN0b206IFJldXNlQ3VzdG9tQ29udGV4dE1lbnUpOiBib29sZWFuIHtcbiAgICByZXR1cm4gY3VzdG9tLmRpc2FibGVkID8gY3VzdG9tLmRpc2FibGVkKHRoaXMuaXRlbSkgOiBmYWxzZTtcbiAgfVxuXG4gIGNsb3NlTWVudShldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmIChldmVudC50eXBlID09PSAnY2xpY2snICYmIGV2ZW50LmJ1dHRvbiA9PT0gMikgcmV0dXJuO1xuICAgIHRoaXMubm90aWZ5KG51bGwpO1xuICB9XG59XG4iLCI8dWwgbnotbWVudT5cbiAgPGxpIG56LW1lbnUtaXRlbSAoY2xpY2spPVwiY2xpY2soJGV2ZW50LCAncmVmcmVzaCcpXCIgZGF0YS10eXBlPVwicmVmcmVzaFwiIFtpbm5lckhUTUxdPVwiaTE4bi5yZWZyZXNoXCI+PC9saT5cbiAgPGxpIG56LW1lbnUtaXRlbSAoY2xpY2spPVwiY2xpY2soJGV2ZW50LCAnY2xvc2UnKVwiIGRhdGEtdHlwZT1cImNsb3NlXCIgW256RGlzYWJsZWRdPVwiIWl0ZW0uY2xvc2FibGVcIiBbaW5uZXJIVE1MXT1cImkxOG4uY2xvc2VcIj48L2xpPlxuICA8bGkgbnotbWVudS1pdGVtIChjbGljayk9XCJjbGljaygkZXZlbnQsICdjbG9zZU90aGVyJylcIiBkYXRhLXR5cGU9XCJjbG9zZU90aGVyXCIgW2lubmVySFRNTF09XCJpMThuLmNsb3NlT3RoZXJcIj48L2xpPlxuICA8bGkgbnotbWVudS1pdGVtIChjbGljayk9XCJjbGljaygkZXZlbnQsICdjbG9zZVJpZ2h0JylcIiBkYXRhLXR5cGU9XCJjbG9zZVJpZ2h0XCIgW256RGlzYWJsZWRdPVwiaXRlbS5sYXN0XCIgW2lubmVySFRNTF09XCJpMThuLmNsb3NlUmlnaHRcIj48L2xpPlxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiY3VzdG9tQ29udGV4dE1lbnUhLmxlbmd0aCA+IDBcIj5cbiAgICA8bGkgbnotbWVudS1kaXZpZGVyPjwvbGk+XG4gICAgPGxpXG4gICAgICAqbmdGb3I9XCJsZXQgaSBvZiBjdXN0b21Db250ZXh0TWVudVwiXG4gICAgICBuei1tZW51LWl0ZW1cbiAgICAgIFthdHRyLmRhdGEtdHlwZV09XCJpLmlkXCJcbiAgICAgIFtuekRpc2FibGVkXT1cImlzRGlzYWJsZWQoaSlcIlxuICAgICAgKGNsaWNrKT1cImNsaWNrKCRldmVudCwgJ2N1c3RvbScsIGkpXCJcbiAgICAgIFtpbm5lckhUTUxdPVwiaS50aXRsZVwiXG4gICAgPjwvbGk+XG4gIDwvbmctY29udGFpbmVyPlxuPC91bD5cbiJdfQ==