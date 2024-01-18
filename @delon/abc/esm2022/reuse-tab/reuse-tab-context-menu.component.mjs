import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { NzMenuDirective, NzMenuItemComponent } from 'ng-zorro-antd/menu';
import * as i0 from "@angular/core";
import * as i1 from "@delon/theme";
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: ReuseTabContextMenuComponent, deps: [{ token: i1.DelonLocaleService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.1.0", type: ReuseTabContextMenuComponent, isStandalone: true, selector: "reuse-tab-context-menu", inputs: { i18n: "i18n", item: "item", event: "event", customContextMenu: "customContextMenu" }, outputs: { close: "close" }, host: { listeners: { "document:click": "closeMenu($event)", "document:contextmenu": "closeMenu($event)" } }, ngImport: i0, template: "<ul nz-menu>\n  @if (item.active) {\n    <li nz-menu-item (click)=\"click($event, 'refresh')\" data-type=\"refresh\" [innerHTML]=\"i18n.refresh\"></li>\n  }\n  <li\n    nz-menu-item\n    (click)=\"click($event, 'close')\"\n    data-type=\"close\"\n    [nzDisabled]=\"!item.closable\"\n    [innerHTML]=\"i18n.close\"\n  ></li>\n  <li nz-menu-item (click)=\"click($event, 'closeOther')\" data-type=\"closeOther\" [innerHTML]=\"i18n.closeOther\"></li>\n  <li\n    nz-menu-item\n    (click)=\"click($event, 'closeRight')\"\n    data-type=\"closeRight\"\n    [nzDisabled]=\"item.last\"\n    [innerHTML]=\"i18n.closeRight\"\n  ></li>\n  @if (customContextMenu!.length > 0) {\n    <li nz-menu-divider></li>\n    @for (i of customContextMenu; track $index) {\n      <li\n        nz-menu-item\n        [attr.data-type]=\"i.id\"\n        [nzDisabled]=\"isDisabled(i)\"\n        (click)=\"click($event, 'custom', i)\"\n        [innerHTML]=\"i.title\"\n      ></li>\n    }\n  }\n</ul>\n", dependencies: [{ kind: "directive", type: NzMenuDirective, selector: "[nz-menu]", inputs: ["nzInlineIndent", "nzTheme", "nzMode", "nzInlineCollapsed", "nzSelectable"], outputs: ["nzClick"], exportAs: ["nzMenu"] }, { kind: "component", type: NzMenuItemComponent, selector: "[nz-menu-item]", inputs: ["nzPaddingLeft", "nzDisabled", "nzSelected", "nzDanger", "nzMatchRouterExact", "nzMatchRouter"], exportAs: ["nzMenuItem"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: ReuseTabContextMenuComponent, decorators: [{
            type: Component,
            args: [{ selector: 'reuse-tab-context-menu', host: {
                        '(document:click)': 'closeMenu($event)',
                        '(document:contextmenu)': 'closeMenu($event)'
                    }, preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, standalone: true, imports: [NzMenuDirective, NzMenuItemComponent], template: "<ul nz-menu>\n  @if (item.active) {\n    <li nz-menu-item (click)=\"click($event, 'refresh')\" data-type=\"refresh\" [innerHTML]=\"i18n.refresh\"></li>\n  }\n  <li\n    nz-menu-item\n    (click)=\"click($event, 'close')\"\n    data-type=\"close\"\n    [nzDisabled]=\"!item.closable\"\n    [innerHTML]=\"i18n.close\"\n  ></li>\n  <li nz-menu-item (click)=\"click($event, 'closeOther')\" data-type=\"closeOther\" [innerHTML]=\"i18n.closeOther\"></li>\n  <li\n    nz-menu-item\n    (click)=\"click($event, 'closeRight')\"\n    data-type=\"closeRight\"\n    [nzDisabled]=\"item.last\"\n    [innerHTML]=\"i18n.closeRight\"\n  ></li>\n  @if (customContextMenu!.length > 0) {\n    <li nz-menu-divider></li>\n    @for (i of customContextMenu; track $index) {\n      <li\n        nz-menu-item\n        [attr.data-type]=\"i.id\"\n        [nzDisabled]=\"isDisabled(i)\"\n        (click)=\"click($event, 'custom', i)\"\n        [innerHTML]=\"i.title\"\n      ></li>\n    }\n  }\n</ul>\n" }]
        }], ctorParameters: () => [{ type: i1.DelonLocaleService }], propDecorators: { i18n: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2UtdGFiLWNvbnRleHQtbWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvcmV1c2UtdGFiL3JldXNlLXRhYi1jb250ZXh0LW1lbnUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3JldXNlLXRhYi9yZXVzZS10YWItY29udGV4dC1tZW51LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUNOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUd2QixPQUFPLEVBQUUsZUFBZSxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7OztBQXVCMUUsTUFBTSxPQUFPLDRCQUE0QjtJQUV2QyxJQUNJLElBQUksQ0FBQyxLQUF1QjtRQUM5QixJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1gsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7WUFDbkMsR0FBRyxLQUFLO1NBQ1QsQ0FBQztJQUNKLENBQUM7SUFDRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQU1ELElBQUksbUJBQW1CO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7SUFDNUIsQ0FBQztJQUVELFlBQW9CLE9BQTJCO1FBQTNCLFlBQU8sR0FBUCxPQUFPLENBQW9CO1FBTjVCLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBMEIsQ0FBQztJQU1wQixDQUFDO0lBRTNDLE1BQU0sQ0FBQyxJQUFlO1FBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQ2QsSUFBSTtZQUNKLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLG1CQUFtQixFQUFFLElBQUksQ0FBQyxtQkFBbUI7U0FDOUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxtQkFBbUI7WUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDMUQsQ0FBQztJQUVELEtBQUssQ0FBQyxDQUFhLEVBQUUsSUFBZSxFQUFFLE1BQStCO1FBQ25FLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNuQixDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDcEIsSUFBSSxJQUFJLEtBQUssT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRO1lBQUUsT0FBTztRQUNwRCxJQUFJLElBQUksS0FBSyxZQUFZLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUVwRCxJQUFJLE1BQU0sRUFBRSxDQUFDO1lBQ1gsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztnQkFBRSxPQUFPO1lBQ3BDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMvQixDQUFDO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBRUQsVUFBVSxDQUFDLE1BQThCO1FBQ3ZDLE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUM5RCxDQUFDO0lBRUQsU0FBUyxDQUFDLEtBQWlCO1FBQ3pCLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxPQUFPLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDO1lBQUUsT0FBTztRQUN6RCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BCLENBQUM7OEdBdkRVLDRCQUE0QjtrR0FBNUIsNEJBQTRCLDRUQ2xDekMsZzlCQWdDQSw0Q0RBWSxlQUFlLHdMQUFFLG1CQUFtQjs7MkZBRW5DLDRCQUE0QjtrQkFieEMsU0FBUzsrQkFDRSx3QkFBd0IsUUFFNUI7d0JBQ0osa0JBQWtCLEVBQUUsbUJBQW1CO3dCQUN2Qyx3QkFBd0IsRUFBRSxtQkFBbUI7cUJBQzlDLHVCQUNvQixLQUFLLG1CQUNULHVCQUF1QixDQUFDLE1BQU0saUJBQ2hDLGlCQUFpQixDQUFDLElBQUksY0FDekIsSUFBSSxXQUNQLENBQUMsZUFBZSxFQUFFLG1CQUFtQixDQUFDO3VGQUszQyxJQUFJO3NCQURQLEtBQUs7Z0JBVUcsSUFBSTtzQkFBWixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxpQkFBaUI7c0JBQXpCLEtBQUs7Z0JBQ2EsS0FBSztzQkFBdkIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRGVsb25Mb2NhbGVTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IE56TWVudURpcmVjdGl2ZSwgTnpNZW51SXRlbUNvbXBvbmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQvbWVudSc7XG5cbmltcG9ydCB7XG4gIENsb3NlVHlwZSxcbiAgUmV1c2VDb250ZXh0Q2xvc2VFdmVudCxcbiAgUmV1c2VDb250ZXh0STE4bixcbiAgUmV1c2VDdXN0b21Db250ZXh0TWVudSxcbiAgUmV1c2VJdGVtXG59IGZyb20gJy4vcmV1c2UtdGFiLmludGVyZmFjZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdyZXVzZS10YWItY29udGV4dC1tZW51JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JldXNlLXRhYi1jb250ZXh0LW1lbnUuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7XG4gICAgJyhkb2N1bWVudDpjbGljayknOiAnY2xvc2VNZW51KCRldmVudCknLFxuICAgICcoZG9jdW1lbnQ6Y29udGV4dG1lbnUpJzogJ2Nsb3NlTWVudSgkZXZlbnQpJ1xuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtOek1lbnVEaXJlY3RpdmUsIE56TWVudUl0ZW1Db21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFJldXNlVGFiQ29udGV4dE1lbnVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIF9pMThuITogUmV1c2VDb250ZXh0STE4bjtcbiAgQElucHV0KClcbiAgc2V0IGkxOG4odmFsdWU6IFJldXNlQ29udGV4dEkxOG4pIHtcbiAgICB0aGlzLl9pMThuID0ge1xuICAgICAgLi4udGhpcy5pMThuU3J2LmdldERhdGEoJ3JldXNlVGFiJyksXG4gICAgICAuLi52YWx1ZVxuICAgIH07XG4gIH1cbiAgZ2V0IGkxOG4oKTogUmV1c2VDb250ZXh0STE4biB7XG4gICAgcmV0dXJuIHRoaXMuX2kxOG47XG4gIH1cbiAgQElucHV0KCkgaXRlbSE6IFJldXNlSXRlbTtcbiAgQElucHV0KCkgZXZlbnQhOiBNb3VzZUV2ZW50O1xuICBASW5wdXQoKSBjdXN0b21Db250ZXh0TWVudSE6IFJldXNlQ3VzdG9tQ29udGV4dE1lbnVbXTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjxSZXVzZUNvbnRleHRDbG9zZUV2ZW50PigpO1xuXG4gIGdldCBpbmNsdWRlTm9uQ2xvc2VhYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmV2ZW50LmN0cmxLZXk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGkxOG5TcnY6IERlbG9uTG9jYWxlU2VydmljZSkge31cblxuICBwcml2YXRlIG5vdGlmeSh0eXBlOiBDbG9zZVR5cGUpOiB2b2lkIHtcbiAgICB0aGlzLmNsb3NlLm5leHQoe1xuICAgICAgdHlwZSxcbiAgICAgIGl0ZW06IHRoaXMuaXRlbSxcbiAgICAgIGluY2x1ZGVOb25DbG9zZWFibGU6IHRoaXMuaW5jbHVkZU5vbkNsb3NlYWJsZVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW5jbHVkZU5vbkNsb3NlYWJsZSkgdGhpcy5pdGVtLmNsb3NhYmxlID0gdHJ1ZTtcbiAgfVxuXG4gIGNsaWNrKGU6IE1vdXNlRXZlbnQsIHR5cGU6IENsb3NlVHlwZSwgY3VzdG9tPzogUmV1c2VDdXN0b21Db250ZXh0TWVudSk6IHZvaWQge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmICh0eXBlID09PSAnY2xvc2UnICYmICF0aGlzLml0ZW0uY2xvc2FibGUpIHJldHVybjtcbiAgICBpZiAodHlwZSA9PT0gJ2Nsb3NlUmlnaHQnICYmIHRoaXMuaXRlbS5sYXN0KSByZXR1cm47XG5cbiAgICBpZiAoY3VzdG9tKSB7XG4gICAgICBpZiAodGhpcy5pc0Rpc2FibGVkKGN1c3RvbSkpIHJldHVybjtcbiAgICAgIGN1c3RvbS5mbih0aGlzLml0ZW0sIGN1c3RvbSk7XG4gICAgfVxuICAgIHRoaXMubm90aWZ5KHR5cGUpO1xuICB9XG5cbiAgaXNEaXNhYmxlZChjdXN0b206IFJldXNlQ3VzdG9tQ29udGV4dE1lbnUpOiBib29sZWFuIHtcbiAgICByZXR1cm4gY3VzdG9tLmRpc2FibGVkID8gY3VzdG9tLmRpc2FibGVkKHRoaXMuaXRlbSkgOiBmYWxzZTtcbiAgfVxuXG4gIGNsb3NlTWVudShldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmIChldmVudC50eXBlID09PSAnY2xpY2snICYmIGV2ZW50LmJ1dHRvbiA9PT0gMikgcmV0dXJuO1xuICAgIHRoaXMubm90aWZ5KG51bGwpO1xuICB9XG59XG4iLCI8dWwgbnotbWVudT5cbiAgQGlmIChpdGVtLmFjdGl2ZSkge1xuICAgIDxsaSBuei1tZW51LWl0ZW0gKGNsaWNrKT1cImNsaWNrKCRldmVudCwgJ3JlZnJlc2gnKVwiIGRhdGEtdHlwZT1cInJlZnJlc2hcIiBbaW5uZXJIVE1MXT1cImkxOG4ucmVmcmVzaFwiPjwvbGk+XG4gIH1cbiAgPGxpXG4gICAgbnotbWVudS1pdGVtXG4gICAgKGNsaWNrKT1cImNsaWNrKCRldmVudCwgJ2Nsb3NlJylcIlxuICAgIGRhdGEtdHlwZT1cImNsb3NlXCJcbiAgICBbbnpEaXNhYmxlZF09XCIhaXRlbS5jbG9zYWJsZVwiXG4gICAgW2lubmVySFRNTF09XCJpMThuLmNsb3NlXCJcbiAgPjwvbGk+XG4gIDxsaSBuei1tZW51LWl0ZW0gKGNsaWNrKT1cImNsaWNrKCRldmVudCwgJ2Nsb3NlT3RoZXInKVwiIGRhdGEtdHlwZT1cImNsb3NlT3RoZXJcIiBbaW5uZXJIVE1MXT1cImkxOG4uY2xvc2VPdGhlclwiPjwvbGk+XG4gIDxsaVxuICAgIG56LW1lbnUtaXRlbVxuICAgIChjbGljayk9XCJjbGljaygkZXZlbnQsICdjbG9zZVJpZ2h0JylcIlxuICAgIGRhdGEtdHlwZT1cImNsb3NlUmlnaHRcIlxuICAgIFtuekRpc2FibGVkXT1cIml0ZW0ubGFzdFwiXG4gICAgW2lubmVySFRNTF09XCJpMThuLmNsb3NlUmlnaHRcIlxuICA+PC9saT5cbiAgQGlmIChjdXN0b21Db250ZXh0TWVudSEubGVuZ3RoID4gMCkge1xuICAgIDxsaSBuei1tZW51LWRpdmlkZXI+PC9saT5cbiAgICBAZm9yIChpIG9mIGN1c3RvbUNvbnRleHRNZW51OyB0cmFjayAkaW5kZXgpIHtcbiAgICAgIDxsaVxuICAgICAgICBuei1tZW51LWl0ZW1cbiAgICAgICAgW2F0dHIuZGF0YS10eXBlXT1cImkuaWRcIlxuICAgICAgICBbbnpEaXNhYmxlZF09XCJpc0Rpc2FibGVkKGkpXCJcbiAgICAgICAgKGNsaWNrKT1cImNsaWNrKCRldmVudCwgJ2N1c3RvbScsIGkpXCJcbiAgICAgICAgW2lubmVySFRNTF09XCJpLnRpdGxlXCJcbiAgICAgID48L2xpPlxuICAgIH1cbiAgfVxuPC91bD5cbiJdfQ==