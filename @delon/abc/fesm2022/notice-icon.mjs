import { NgTemplateOutlet, CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { EventEmitter, Component, ViewEncapsulation, Input, Output, inject, ChangeDetectorRef, numberAttribute, booleanAttribute, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { NzStringTemplateOutletDirective, NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzListComponent, NzListItemComponent, NzListItemMetaComponent, NzListModule } from 'ng-zorro-antd/list';
import { NzTagComponent, NzTagModule } from 'ng-zorro-antd/tag';
import { DelonLocaleService, DelonLocaleModule } from '@delon/theme';
import { NzBadgeComponent, NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzDropDownDirective, NzDropdownMenuComponent, NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpinComponent, NzSpinModule } from 'ng-zorro-antd/spin';
import { NzTabSetComponent, NzTabComponent, NzTabsModule } from 'ng-zorro-antd/tabs';

class NoticeIconTabComponent {
    constructor() {
        this.locale = {};
        this.select = new EventEmitter();
        this.clear = new EventEmitter();
    }
    onClick(item) {
        this.select.emit({ title: this.data.title, item });
    }
    onClear() {
        this.clear.emit(this.data.title);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.0.5", ngImport: i0, type: NoticeIconTabComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.0.5", type: NoticeIconTabComponent, isStandalone: true, selector: "notice-icon-tab", inputs: { locale: "locale", data: "data" }, outputs: { select: "select", clear: "clear" }, exportAs: ["noticeIconTab"], ngImport: i0, template: "@if (data.list && data.list.length > 0) {\n  <ng-template [ngTemplateOutlet]=\"listTpl\" />\n} @else {\n  <div class=\"notice-icon__notfound\">\n    @if (data.emptyImage) {\n      <img class=\"notice-icon__notfound-img\" [attr.src]=\"data.emptyImage\" alt=\"not found\" />\n    }\n    <p>\n      <ng-container *nzStringTemplateOutlet=\"data.emptyText\">\n        {{ data.emptyText || locale.emptyText }}\n      </ng-container>\n    </p>\n  </div>\n}\n<ng-template #listTpl>\n  <nz-list [nzDataSource]=\"data.list\" [nzRenderItem]=\"item\">\n    <ng-template #item let-item>\n      <nz-list-item (click)=\"onClick(item)\" [class.notice-icon__item-read]=\"item.read\">\n        <nz-list-item-meta [nzTitle]=\"nzTitle\" [nzDescription]=\"nzDescription\" [nzAvatar]=\"item.avatar\">\n          <ng-template #nzTitle>\n            <ng-container *nzStringTemplateOutlet=\"item.title; context: { $implicit: item }\">\n              {{ item.title }}\n            </ng-container>\n            @if (item.extra) {\n              <div class=\"notice-icon__item-extra\">\n                <nz-tag [nzColor]=\"item.color\">{{ item.extra }}</nz-tag>\n              </div>\n            }\n          </ng-template>\n          <ng-template #nzDescription>\n            @if (item.description) {\n              <div class=\"notice-icon__item-desc\">\n                <ng-container *nzStringTemplateOutlet=\"item.description; context: { $implicit: item }\">\n                  {{ item.description }}\n                </ng-container>\n              </div>\n            }\n            @if (item.datetime) {\n              <div class=\"notice-icon__item-time\">{{ item.datetime }}</div>\n            }\n          </ng-template>\n        </nz-list-item-meta>\n      </nz-list-item>\n    </ng-template>\n  </nz-list>\n  <div class=\"notice-icon__clear\" (click)=\"onClear()\">{{ data.clearText || locale.clearText }}</div>\n</ng-template>\n", dependencies: [{ kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { kind: "component", type: NzListComponent, selector: "nz-list, [nz-list]", inputs: ["nzDataSource", "nzBordered", "nzGrid", "nzHeader", "nzFooter", "nzItemLayout", "nzRenderItem", "nzLoading", "nzLoadMore", "nzPagination", "nzSize", "nzSplit", "nzNoResult"], exportAs: ["nzList"] }, { kind: "component", type: NzListItemComponent, selector: "nz-list-item, [nz-list-item]", inputs: ["nzActions", "nzContent", "nzExtra", "nzNoFlex"], exportAs: ["nzListItem"] }, { kind: "component", type: NzListItemMetaComponent, selector: "nz-list-item-meta, [nz-list-item-meta]", inputs: ["nzAvatar", "nzTitle", "nzDescription"], exportAs: ["nzListItemMeta"] }, { kind: "component", type: NzTagComponent, selector: "nz-tag", inputs: ["nzMode", "nzColor", "nzChecked", "nzBordered"], outputs: ["nzOnClose", "nzCheckedChange"], exportAs: ["nzTag"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.0.5", ngImport: i0, type: NoticeIconTabComponent, decorators: [{
            type: Component,
            args: [{ selector: 'notice-icon-tab', exportAs: 'noticeIconTab', preserveWhitespaces: false, encapsulation: ViewEncapsulation.None, imports: [
                        NgTemplateOutlet,
                        NzStringTemplateOutletDirective,
                        NzListComponent,
                        NzListItemComponent,
                        NzListItemMetaComponent,
                        NzTagComponent
                    ], template: "@if (data.list && data.list.length > 0) {\n  <ng-template [ngTemplateOutlet]=\"listTpl\" />\n} @else {\n  <div class=\"notice-icon__notfound\">\n    @if (data.emptyImage) {\n      <img class=\"notice-icon__notfound-img\" [attr.src]=\"data.emptyImage\" alt=\"not found\" />\n    }\n    <p>\n      <ng-container *nzStringTemplateOutlet=\"data.emptyText\">\n        {{ data.emptyText || locale.emptyText }}\n      </ng-container>\n    </p>\n  </div>\n}\n<ng-template #listTpl>\n  <nz-list [nzDataSource]=\"data.list\" [nzRenderItem]=\"item\">\n    <ng-template #item let-item>\n      <nz-list-item (click)=\"onClick(item)\" [class.notice-icon__item-read]=\"item.read\">\n        <nz-list-item-meta [nzTitle]=\"nzTitle\" [nzDescription]=\"nzDescription\" [nzAvatar]=\"item.avatar\">\n          <ng-template #nzTitle>\n            <ng-container *nzStringTemplateOutlet=\"item.title; context: { $implicit: item }\">\n              {{ item.title }}\n            </ng-container>\n            @if (item.extra) {\n              <div class=\"notice-icon__item-extra\">\n                <nz-tag [nzColor]=\"item.color\">{{ item.extra }}</nz-tag>\n              </div>\n            }\n          </ng-template>\n          <ng-template #nzDescription>\n            @if (item.description) {\n              <div class=\"notice-icon__item-desc\">\n                <ng-container *nzStringTemplateOutlet=\"item.description; context: { $implicit: item }\">\n                  {{ item.description }}\n                </ng-container>\n              </div>\n            }\n            @if (item.datetime) {\n              <div class=\"notice-icon__item-time\">{{ item.datetime }}</div>\n            }\n          </ng-template>\n        </nz-list-item-meta>\n      </nz-list-item>\n    </ng-template>\n  </nz-list>\n  <div class=\"notice-icon__clear\" (click)=\"onClear()\">{{ data.clearText || locale.clearText }}</div>\n</ng-template>\n" }]
        }], propDecorators: { locale: [{
                type: Input
            }], data: [{
                type: Input
            }], select: [{
                type: Output
            }], clear: [{
                type: Output
            }] } });

class NoticeIconComponent {
    constructor() {
        this.i18n = inject(DelonLocaleService);
        this.cdr = inject(ChangeDetectorRef);
        this.locale = {};
        this.data = [];
        this.loading = false;
        this.popoverVisible = false;
        this.centered = false;
        this.select = new EventEmitter();
        this.clear = new EventEmitter();
        this.popoverVisibleChange = new EventEmitter();
        this.delayShow = false;
    }
    get overlayCls() {
        return `header-dropdown notice-icon${!this.centered ? ' notice-icon__tab-left' : ''}`;
    }
    onVisibleChange(result) {
        this.delayShow = result;
        this.popoverVisibleChange.emit(result);
        if (result) {
            // Next tick run
            Promise.resolve().then(() => this.cdr.detectChanges());
        }
    }
    onSelect(i) {
        this.select.emit(i);
    }
    onClear(title) {
        this.clear.emit(title);
    }
    ngOnInit() {
        this.i18n$ = this.i18n.change.subscribe(() => {
            this.locale = this.i18n.getData('noticeIcon');
            this.cdr.markForCheck();
        });
    }
    ngOnChanges() {
        this.cdr.markForCheck();
    }
    ngOnDestroy() {
        this.i18n$?.unsubscribe();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.0.5", ngImport: i0, type: NoticeIconComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.0.5", type: NoticeIconComponent, isStandalone: true, selector: "notice-icon", inputs: { data: "data", count: ["count", "count", numberAttribute], loading: ["loading", "loading", booleanAttribute], popoverVisible: ["popoverVisible", "popoverVisible", booleanAttribute], btnClass: "btnClass", btnIconClass: "btnIconClass", centered: ["centered", "centered", booleanAttribute] }, outputs: { select: "select", clear: "clear", popoverVisibleChange: "popoverVisibleChange" }, host: { properties: { "class.notice-icon__btn": "true" } }, exportAs: ["noticeIcon"], usesOnChanges: true, ngImport: i0, template: "<ng-template #badgeTpl>\n  <nz-badge [nzCount]=\"count\" [class]=\"btnClass!\" [nzStyle]=\"{ 'box-shadow': 'none' }\">\n    <i nz-icon nzType=\"bell\" [class]=\"btnIconClass!\"></i>\n  </nz-badge>\n</ng-template>\n@if (data!.length <= 0) {\n  <ng-template [ngTemplateOutlet]=\"badgeTpl\" />\n} @else {\n  <div\n    nz-dropdown\n    [nzVisible]=\"popoverVisible\"\n    (nzVisibleChange)=\"onVisibleChange($event)\"\n    nzTrigger=\"click\"\n    nzPlacement=\"bottomRight\"\n    [nzOverlayClassName]=\"overlayCls\"\n    [nzDropdownMenu]=\"noticeMenu\"\n  >\n    <ng-template [ngTemplateOutlet]=\"badgeTpl\" />\n  </div>\n  <nz-dropdown-menu #noticeMenu=\"nzDropdownMenu\">\n    <nz-spin [nzSpinning]=\"loading\" [nzDelay]=\"0\">\n      @if (delayShow) {\n        <nz-tabset [nzSelectedIndex]=\"0\" [nzCentered]=\"centered\">\n          @for (i of data; track $index) {\n            <nz-tab [nzTitle]=\"i.title\">\n              <notice-icon-tab [locale]=\"locale\" [data]=\"i\" (select)=\"onSelect($event)\" (clear)=\"onClear($event)\" />\n            </nz-tab>\n          }\n        </nz-tabset>\n      }\n    </nz-spin>\n  </nz-dropdown-menu>\n}\n", dependencies: [{ kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: NzBadgeComponent, selector: "nz-badge", inputs: ["nzShowZero", "nzShowDot", "nzStandalone", "nzDot", "nzOverflowCount", "nzColor", "nzStyle", "nzText", "nzTitle", "nzStatus", "nzCount", "nzOffset", "nzSize"], exportAs: ["nzBadge"] }, { kind: "directive", type: NzIconDirective, selector: "nz-icon,[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "directive", type: NzDropDownDirective, selector: "[nz-dropdown]", inputs: ["nzDropdownMenu", "nzTrigger", "nzMatchWidthElement", "nzBackdrop", "nzClickHide", "nzDisabled", "nzVisible", "nzOverlayClassName", "nzOverlayStyle", "nzPlacement"], outputs: ["nzVisibleChange"], exportAs: ["nzDropdown"] }, { kind: "component", type: NzDropdownMenuComponent, selector: "nz-dropdown-menu", exportAs: ["nzDropdownMenu"] }, { kind: "component", type: NzSpinComponent, selector: "nz-spin", inputs: ["nzIndicator", "nzSize", "nzTip", "nzDelay", "nzSimple", "nzSpinning"], exportAs: ["nzSpin"] }, { kind: "component", type: NzTabSetComponent, selector: "nz-tabset", inputs: ["nzSelectedIndex", "nzTabPosition", "nzTabBarExtraContent", "nzCanDeactivate", "nzAddIcon", "nzTabBarStyle", "nzType", "nzSize", "nzAnimated", "nzTabBarGutter", "nzHideAdd", "nzCentered", "nzHideAll", "nzLinkRouter", "nzLinkExact", "nzDestroyInactiveTabPane"], outputs: ["nzSelectChange", "nzSelectedIndexChange", "nzTabListScroll", "nzClose", "nzAdd"], exportAs: ["nzTabset"] }, { kind: "component", type: NzTabComponent, selector: "nz-tab", inputs: ["nzTitle", "nzClosable", "nzCloseIcon", "nzDisabled", "nzForceRender"], outputs: ["nzSelect", "nzDeselect", "nzClick", "nzContextmenu"], exportAs: ["nzTab"] }, { kind: "component", type: NoticeIconTabComponent, selector: "notice-icon-tab", inputs: ["locale", "data"], outputs: ["select", "clear"], exportAs: ["noticeIconTab"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.0.5", ngImport: i0, type: NoticeIconComponent, decorators: [{
            type: Component,
            args: [{ selector: 'notice-icon', exportAs: 'noticeIcon', host: { '[class.notice-icon__btn]': 'true' }, preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, imports: [
                        NgTemplateOutlet,
                        NzBadgeComponent,
                        NzIconDirective,
                        NzDropDownDirective,
                        NzDropdownMenuComponent,
                        NzSpinComponent,
                        NzTabSetComponent,
                        NzTabComponent,
                        NoticeIconTabComponent
                    ], template: "<ng-template #badgeTpl>\n  <nz-badge [nzCount]=\"count\" [class]=\"btnClass!\" [nzStyle]=\"{ 'box-shadow': 'none' }\">\n    <i nz-icon nzType=\"bell\" [class]=\"btnIconClass!\"></i>\n  </nz-badge>\n</ng-template>\n@if (data!.length <= 0) {\n  <ng-template [ngTemplateOutlet]=\"badgeTpl\" />\n} @else {\n  <div\n    nz-dropdown\n    [nzVisible]=\"popoverVisible\"\n    (nzVisibleChange)=\"onVisibleChange($event)\"\n    nzTrigger=\"click\"\n    nzPlacement=\"bottomRight\"\n    [nzOverlayClassName]=\"overlayCls\"\n    [nzDropdownMenu]=\"noticeMenu\"\n  >\n    <ng-template [ngTemplateOutlet]=\"badgeTpl\" />\n  </div>\n  <nz-dropdown-menu #noticeMenu=\"nzDropdownMenu\">\n    <nz-spin [nzSpinning]=\"loading\" [nzDelay]=\"0\">\n      @if (delayShow) {\n        <nz-tabset [nzSelectedIndex]=\"0\" [nzCentered]=\"centered\">\n          @for (i of data; track $index) {\n            <nz-tab [nzTitle]=\"i.title\">\n              <notice-icon-tab [locale]=\"locale\" [data]=\"i\" (select)=\"onSelect($event)\" (clear)=\"onClear($event)\" />\n            </nz-tab>\n          }\n        </nz-tabset>\n      }\n    </nz-spin>\n  </nz-dropdown-menu>\n}\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], count: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], loading: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], popoverVisible: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], btnClass: [{
                type: Input
            }], btnIconClass: [{
                type: Input
            }], centered: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], select: [{
                type: Output
            }], clear: [{
                type: Output
            }], popoverVisibleChange: [{
                type: Output
            }] } });

const COMPONENTS = [NoticeIconComponent];
class NoticeIconModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.0.5", ngImport: i0, type: NoticeIconModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "19.0.5", ngImport: i0, type: NoticeIconModule, imports: [CommonModule,
            DelonLocaleModule,
            NzBadgeModule,
            NzDropDownModule,
            NzIconModule,
            NzListModule,
            NzSpinModule,
            NzTabsModule,
            NzTagModule,
            NzOutletModule, NoticeIconComponent, NoticeIconTabComponent], exports: [NoticeIconComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "19.0.5", ngImport: i0, type: NoticeIconModule, imports: [CommonModule,
            DelonLocaleModule,
            NzBadgeModule,
            NzDropDownModule,
            NzIconModule,
            NzListModule,
            NzSpinModule,
            NzTabsModule,
            NzTagModule,
            NzOutletModule, COMPONENTS, NoticeIconTabComponent] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.0.5", ngImport: i0, type: NoticeIconModule, decorators: [{
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
