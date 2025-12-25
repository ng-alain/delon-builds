import { NgTemplateOutlet, CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { input, output, ViewEncapsulation, Component, inject, numberAttribute, booleanAttribute, signal, effect, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { NzStringTemplateOutletDirective, NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzListComponent, NzListItemComponent, NzListItemMetaComponent, NzListModule } from 'ng-zorro-antd/list';
import { NzTagComponent, NzTagModule } from 'ng-zorro-antd/tag';
import { DelonLocaleService, DelonLocaleModule } from '@delon/theme';
import { NzBadgeComponent, NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzDropdownDirective, NzDropdownMenuComponent, NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpinComponent, NzSpinModule } from 'ng-zorro-antd/spin';
import { NzTabsComponent, NzTabComponent, NzTabsModule } from 'ng-zorro-antd/tabs';

class NoticeIconTabComponent {
    locale = input.required(...(ngDevMode ? [{ debugName: "locale" }] : []));
    item = input.required(...(ngDevMode ? [{ debugName: "item" }] : []));
    select = output();
    clear = output();
    onClick(item, event) {
        this.select.emit({ title: this.item().title, item, event });
    }
    onClear() {
        this.clear.emit(this.item().title);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.0.6", ngImport: i0, type: NoticeIconTabComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.0.6", type: NoticeIconTabComponent, isStandalone: true, selector: "notice-icon-tab", inputs: { locale: { classPropertyName: "locale", publicName: "locale", isSignal: true, isRequired: true, transformFunction: null }, item: { classPropertyName: "item", publicName: "item", isSignal: true, isRequired: true, transformFunction: null } }, outputs: { select: "select", clear: "clear" }, exportAs: ["noticeIconTab"], ngImport: i0, template: "@let d = item();\n@let list = d.list;\n@if (list && list.length > 0) {\n  <ng-template [ngTemplateOutlet]=\"listTpl\" />\n} @else {\n  <div class=\"notice-icon__notfound\">\n    @if (d.emptyImage) {\n      <img class=\"notice-icon__notfound-img\" [attr.src]=\"d.emptyImage\" alt=\"not found\" />\n    }\n    <p>\n      <ng-container *nzStringTemplateOutlet=\"d.emptyText\">\n        {{ d.emptyText ?? locale().emptyText }}\n      </ng-container>\n    </p>\n  </div>\n}\n<ng-template #listTpl>\n  <nz-list [nzDataSource]=\"list\" [nzRenderItem]=\"item\">\n    <ng-template #item let-item>\n      <nz-list-item (click)=\"onClick(item, $event)\" [class.notice-icon__item-read]=\"item.read\">\n        <nz-list-item-meta [nzTitle]=\"nzTitle\" [nzDescription]=\"nzDescription\" [nzAvatar]=\"item.avatar\">\n          <ng-template #nzTitle>\n            <ng-container *nzStringTemplateOutlet=\"item.title; context: { $implicit: item }\">\n              {{ item.title }}\n            </ng-container>\n            @if (item.extra) {\n              <div class=\"notice-icon__item-extra\">\n                <nz-tag [nzColor]=\"item.color\">{{ item.extra }}</nz-tag>\n              </div>\n            }\n          </ng-template>\n          <ng-template #nzDescription>\n            @if (item.description) {\n              <div class=\"notice-icon__item-desc\">\n                <ng-container *nzStringTemplateOutlet=\"item.description; context: { $implicit: item }\">\n                  {{ item.description }}\n                </ng-container>\n              </div>\n            }\n            @if (item.datetime) {\n              <div class=\"notice-icon__item-time\">{{ item.datetime }}</div>\n            }\n          </ng-template>\n        </nz-list-item-meta>\n      </nz-list-item>\n    </ng-template>\n  </nz-list>\n  <div class=\"notice-icon__clear\" (click)=\"onClear()\">{{ d.clearText ?? locale().clearText }}</div>\n</ng-template>\n", dependencies: [{ kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { kind: "component", type: NzListComponent, selector: "nz-list, [nz-list]", inputs: ["nzDataSource", "nzBordered", "nzGrid", "nzHeader", "nzFooter", "nzItemLayout", "nzRenderItem", "nzLoading", "nzLoadMore", "nzPagination", "nzSize", "nzSplit", "nzNoResult"], exportAs: ["nzList"] }, { kind: "component", type: NzListItemComponent, selector: "nz-list-item, [nz-list-item]", inputs: ["nzActions", "nzContent", "nzExtra", "nzNoFlex"], exportAs: ["nzListItem"] }, { kind: "component", type: NzListItemMetaComponent, selector: "nz-list-item-meta, [nz-list-item-meta]", inputs: ["nzAvatar", "nzTitle", "nzDescription"], exportAs: ["nzListItemMeta"] }, { kind: "component", type: NzTagComponent, selector: "nz-tag", inputs: ["nzMode", "nzColor", "nzChecked", "nzBordered"], outputs: ["nzOnClose", "nzCheckedChange"], exportAs: ["nzTag"] }], encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.0.6", ngImport: i0, type: NoticeIconTabComponent, decorators: [{
            type: Component,
            args: [{ selector: 'notice-icon-tab', exportAs: 'noticeIconTab', preserveWhitespaces: false, encapsulation: ViewEncapsulation.None, imports: [
                        NgTemplateOutlet,
                        NzStringTemplateOutletDirective,
                        NzListComponent,
                        NzListItemComponent,
                        NzListItemMetaComponent,
                        NzTagComponent
                    ], template: "@let d = item();\n@let list = d.list;\n@if (list && list.length > 0) {\n  <ng-template [ngTemplateOutlet]=\"listTpl\" />\n} @else {\n  <div class=\"notice-icon__notfound\">\n    @if (d.emptyImage) {\n      <img class=\"notice-icon__notfound-img\" [attr.src]=\"d.emptyImage\" alt=\"not found\" />\n    }\n    <p>\n      <ng-container *nzStringTemplateOutlet=\"d.emptyText\">\n        {{ d.emptyText ?? locale().emptyText }}\n      </ng-container>\n    </p>\n  </div>\n}\n<ng-template #listTpl>\n  <nz-list [nzDataSource]=\"list\" [nzRenderItem]=\"item\">\n    <ng-template #item let-item>\n      <nz-list-item (click)=\"onClick(item, $event)\" [class.notice-icon__item-read]=\"item.read\">\n        <nz-list-item-meta [nzTitle]=\"nzTitle\" [nzDescription]=\"nzDescription\" [nzAvatar]=\"item.avatar\">\n          <ng-template #nzTitle>\n            <ng-container *nzStringTemplateOutlet=\"item.title; context: { $implicit: item }\">\n              {{ item.title }}\n            </ng-container>\n            @if (item.extra) {\n              <div class=\"notice-icon__item-extra\">\n                <nz-tag [nzColor]=\"item.color\">{{ item.extra }}</nz-tag>\n              </div>\n            }\n          </ng-template>\n          <ng-template #nzDescription>\n            @if (item.description) {\n              <div class=\"notice-icon__item-desc\">\n                <ng-container *nzStringTemplateOutlet=\"item.description; context: { $implicit: item }\">\n                  {{ item.description }}\n                </ng-container>\n              </div>\n            }\n            @if (item.datetime) {\n              <div class=\"notice-icon__item-time\">{{ item.datetime }}</div>\n            }\n          </ng-template>\n        </nz-list-item-meta>\n      </nz-list-item>\n    </ng-template>\n  </nz-list>\n  <div class=\"notice-icon__clear\" (click)=\"onClear()\">{{ d.clearText ?? locale().clearText }}</div>\n</ng-template>\n" }]
        }], propDecorators: { locale: [{ type: i0.Input, args: [{ isSignal: true, alias: "locale", required: true }] }], item: [{ type: i0.Input, args: [{ isSignal: true, alias: "item", required: true }] }], select: [{ type: i0.Output, args: ["select"] }], clear: [{ type: i0.Output, args: ["clear"] }] } });

class NoticeIconComponent {
    locale = inject(DelonLocaleService).valueSignal('noticeIcon');
    data = input([], ...(ngDevMode ? [{ debugName: "data" }] : []));
    count = input(undefined, { ...(ngDevMode ? { debugName: "count" } : {}), transform: numberAttribute });
    loading = input(false, { ...(ngDevMode ? { debugName: "loading" } : {}), transform: booleanAttribute });
    popoverVisible = input(false, { ...(ngDevMode ? { debugName: "popoverVisible" } : {}), transform: booleanAttribute });
    btnClass = input(...(ngDevMode ? [undefined, { debugName: "btnClass" }] : []));
    btnIconClass = input(...(ngDevMode ? [undefined, { debugName: "btnIconClass" }] : []));
    centered = input(false, { ...(ngDevMode ? { debugName: "centered" } : {}), transform: booleanAttribute });
    select = output();
    clear = output();
    popoverVisibleChange = output();
    overlayCls = signal('', ...(ngDevMode ? [{ debugName: "overlayCls" }] : []));
    constructor() {
        effect(() => {
            this.overlayCls.set(`header-dropdown notice-icon${!this.centered() ? ' notice-icon__tab-left' : ''}`);
            if (!this.popoverVisible())
                this.delayShow.set(false);
        });
    }
    delayShow = signal(false, ...(ngDevMode ? [{ debugName: "delayShow" }] : []));
    onVisibleChange(result) {
        this.delayShow.set(result);
        this.popoverVisibleChange.emit(result);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.0.6", ngImport: i0, type: NoticeIconComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.0.6", type: NoticeIconComponent, isStandalone: true, selector: "notice-icon", inputs: { data: { classPropertyName: "data", publicName: "data", isSignal: true, isRequired: false, transformFunction: null }, count: { classPropertyName: "count", publicName: "count", isSignal: true, isRequired: false, transformFunction: null }, loading: { classPropertyName: "loading", publicName: "loading", isSignal: true, isRequired: false, transformFunction: null }, popoverVisible: { classPropertyName: "popoverVisible", publicName: "popoverVisible", isSignal: true, isRequired: false, transformFunction: null }, btnClass: { classPropertyName: "btnClass", publicName: "btnClass", isSignal: true, isRequired: false, transformFunction: null }, btnIconClass: { classPropertyName: "btnIconClass", publicName: "btnIconClass", isSignal: true, isRequired: false, transformFunction: null }, centered: { classPropertyName: "centered", publicName: "centered", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { select: "select", clear: "clear", popoverVisibleChange: "popoverVisibleChange" }, host: { properties: { "class.notice-icon__btn": "true" } }, exportAs: ["noticeIcon"], ngImport: i0, template: "<ng-template #badgeTpl>\n  <nz-badge [nzCount]=\"count()\" [class]=\"btnClass()\" [nzStyle]=\"{ 'box-shadow': 'none' }\">\n    <nz-icon nzType=\"bell\" [class]=\"btnIconClass()\" />\n  </nz-badge>\n</ng-template>\n@let d = data();\n@if (d.length <= 0) {\n  <ng-template [ngTemplateOutlet]=\"badgeTpl\" />\n} @else {\n  <div\n    nz-dropdown\n    [nzVisible]=\"popoverVisible()\"\n    (nzVisibleChange)=\"onVisibleChange($event)\"\n    nzTrigger=\"click\"\n    nzPlacement=\"bottomRight\"\n    [nzOverlayClassName]=\"overlayCls()\"\n    [nzDropdownMenu]=\"noticeMenu\"\n  >\n    <ng-template [ngTemplateOutlet]=\"badgeTpl\" />\n  </div>\n  <nz-dropdown-menu #noticeMenu=\"nzDropdownMenu\">\n    <nz-spin [nzSpinning]=\"loading()\" [nzDelay]=\"0\">\n      @if (delayShow()) {\n        <nz-tabs [nzSelectedIndex]=\"0\" [nzCentered]=\"centered()\">\n          @for (i of d; track $index) {\n            <nz-tab [nzTitle]=\"i.title\">\n              <notice-icon-tab [locale]=\"locale()\" [item]=\"i\" (select)=\"select.emit($event)\" (clear)=\"clear.emit($event)\" />\n            </nz-tab>\n          }\n        </nz-tabs>\n      }\n    </nz-spin>\n  </nz-dropdown-menu>\n}\n", dependencies: [{ kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: NzBadgeComponent, selector: "nz-badge", inputs: ["nzShowZero", "nzShowDot", "nzStandalone", "nzDot", "nzOverflowCount", "nzColor", "nzStyle", "nzText", "nzTitle", "nzStatus", "nzCount", "nzOffset", "nzSize"], exportAs: ["nzBadge"] }, { kind: "directive", type: NzIconDirective, selector: "nz-icon,[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "directive", type: NzDropdownDirective, selector: "[nz-dropdown]", inputs: ["nzDropdownMenu", "nzTrigger", "nzMatchWidthElement", "nzBackdrop", "nzClickHide", "nzDisabled", "nzVisible", "nzArrow", "nzOverlayClassName", "nzOverlayStyle", "nzPlacement"], outputs: ["nzVisibleChange"], exportAs: ["nzDropdown"] }, { kind: "component", type: NzDropdownMenuComponent, selector: "nz-dropdown-menu", exportAs: ["nzDropdownMenu"] }, { kind: "component", type: NzSpinComponent, selector: "nz-spin", inputs: ["nzIndicator", "nzSize", "nzTip", "nzDelay", "nzSimple", "nzSpinning"], exportAs: ["nzSpin"] }, { kind: "component", type: NzTabsComponent, selector: "nz-tabs", inputs: ["nzSelectedIndex", "nzTabPosition", "nzTabBarExtraContent", "nzCanDeactivate", "nzAddIcon", "nzTabBarStyle", "nzType", "nzSize", "nzAnimated", "nzTabBarGutter", "nzHideAdd", "nzCentered", "nzHideAll", "nzLinkRouter", "nzLinkExact", "nzDestroyInactiveTabPane"], outputs: ["nzSelectChange", "nzSelectedIndexChange", "nzTabListScroll", "nzClose", "nzAdd"], exportAs: ["nzTabs"] }, { kind: "component", type: NzTabComponent, selector: "nz-tab", inputs: ["nzTitle", "nzClosable", "nzCloseIcon", "nzDisabled", "nzForceRender"], outputs: ["nzSelect", "nzDeselect", "nzClick", "nzContextmenu"], exportAs: ["nzTab"] }, { kind: "component", type: NoticeIconTabComponent, selector: "notice-icon-tab", inputs: ["locale", "item"], outputs: ["select", "clear"], exportAs: ["noticeIconTab"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.0.6", ngImport: i0, type: NoticeIconComponent, decorators: [{
            type: Component,
            args: [{ selector: 'notice-icon', exportAs: 'noticeIcon', host: { '[class.notice-icon__btn]': 'true' }, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, imports: [
                        NgTemplateOutlet,
                        NzBadgeComponent,
                        NzIconDirective,
                        NzDropdownDirective,
                        NzDropdownMenuComponent,
                        NzSpinComponent,
                        NzTabsComponent,
                        NzTabComponent,
                        NoticeIconTabComponent
                    ], template: "<ng-template #badgeTpl>\n  <nz-badge [nzCount]=\"count()\" [class]=\"btnClass()\" [nzStyle]=\"{ 'box-shadow': 'none' }\">\n    <nz-icon nzType=\"bell\" [class]=\"btnIconClass()\" />\n  </nz-badge>\n</ng-template>\n@let d = data();\n@if (d.length <= 0) {\n  <ng-template [ngTemplateOutlet]=\"badgeTpl\" />\n} @else {\n  <div\n    nz-dropdown\n    [nzVisible]=\"popoverVisible()\"\n    (nzVisibleChange)=\"onVisibleChange($event)\"\n    nzTrigger=\"click\"\n    nzPlacement=\"bottomRight\"\n    [nzOverlayClassName]=\"overlayCls()\"\n    [nzDropdownMenu]=\"noticeMenu\"\n  >\n    <ng-template [ngTemplateOutlet]=\"badgeTpl\" />\n  </div>\n  <nz-dropdown-menu #noticeMenu=\"nzDropdownMenu\">\n    <nz-spin [nzSpinning]=\"loading()\" [nzDelay]=\"0\">\n      @if (delayShow()) {\n        <nz-tabs [nzSelectedIndex]=\"0\" [nzCentered]=\"centered()\">\n          @for (i of d; track $index) {\n            <nz-tab [nzTitle]=\"i.title\">\n              <notice-icon-tab [locale]=\"locale()\" [item]=\"i\" (select)=\"select.emit($event)\" (clear)=\"clear.emit($event)\" />\n            </nz-tab>\n          }\n        </nz-tabs>\n      }\n    </nz-spin>\n  </nz-dropdown-menu>\n}\n" }]
        }], ctorParameters: () => [], propDecorators: { data: [{ type: i0.Input, args: [{ isSignal: true, alias: "data", required: false }] }], count: [{ type: i0.Input, args: [{ isSignal: true, alias: "count", required: false }] }], loading: [{ type: i0.Input, args: [{ isSignal: true, alias: "loading", required: false }] }], popoverVisible: [{ type: i0.Input, args: [{ isSignal: true, alias: "popoverVisible", required: false }] }], btnClass: [{ type: i0.Input, args: [{ isSignal: true, alias: "btnClass", required: false }] }], btnIconClass: [{ type: i0.Input, args: [{ isSignal: true, alias: "btnIconClass", required: false }] }], centered: [{ type: i0.Input, args: [{ isSignal: true, alias: "centered", required: false }] }], select: [{ type: i0.Output, args: ["select"] }], clear: [{ type: i0.Output, args: ["clear"] }], popoverVisibleChange: [{ type: i0.Output, args: ["popoverVisibleChange"] }] } });

const COMPONENTS = [NoticeIconComponent];
class NoticeIconModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.0.6", ngImport: i0, type: NoticeIconModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "21.0.6", ngImport: i0, type: NoticeIconModule, imports: [CommonModule,
            DelonLocaleModule,
            NzBadgeModule,
            NzDropDownModule,
            NzIconModule,
            NzListModule,
            NzSpinModule,
            NzTabsModule,
            NzTagModule,
            NzOutletModule, NoticeIconComponent, NoticeIconTabComponent], exports: [NoticeIconComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "21.0.6", ngImport: i0, type: NoticeIconModule, imports: [CommonModule,
            DelonLocaleModule,
            NzBadgeModule,
            NzDropDownModule,
            NzIconModule,
            NzListModule,
            NzSpinModule,
            NzTabsModule,
            NzTagModule,
            NzOutletModule, COMPONENTS, NoticeIconTabComponent] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.0.6", ngImport: i0, type: NoticeIconModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        DelonLocaleModule,
                        NzBadgeModule,
                        NzDropDownModule,
                        NzIconModule,
                        NzListModule,
                        NzSpinModule,
                        NzTabsModule,
                        NzTagModule,
                        NzOutletModule,
                        ...COMPONENTS,
                        NoticeIconTabComponent
                    ],
                    exports: COMPONENTS
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { NoticeIconComponent, NoticeIconModule, NoticeIconTabComponent };
//# sourceMappingURL=notice-icon.mjs.map
