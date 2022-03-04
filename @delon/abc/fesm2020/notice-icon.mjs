import * as i0 from '@angular/core';
import { EventEmitter, Component, ViewEncapsulation, Input, Output, ChangeDetectionStrategy, NgModule } from '@angular/core';
import * as i1 from 'ng-zorro-antd/list';
import { NzListModule } from 'ng-zorro-antd/list';
import * as i2 from 'ng-zorro-antd/tag';
import { NzTagModule } from 'ng-zorro-antd/tag';
import * as i7 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i4 from 'ng-zorro-antd/core/outlet';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { __decorate } from 'tslib';
import { InputNumber, InputBoolean } from '@delon/util/decorator';
import * as i1$1 from '@delon/theme';
import { DelonLocaleModule } from '@delon/theme';
import * as i2$1 from 'ng-zorro-antd/badge';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import * as i3 from 'ng-zorro-antd/dropdown';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import * as i4$1 from 'ng-zorro-antd/spin';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import * as i5 from 'ng-zorro-antd/tabs';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import * as i8 from 'ng-zorro-antd/icon';
import { NzIconModule } from 'ng-zorro-antd/icon';

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
}
NoticeIconTabComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: NoticeIconTabComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NoticeIconTabComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.5", type: NoticeIconTabComponent, selector: "notice-icon-tab", inputs: { locale: "locale", data: "data" }, outputs: { select: "select", clear: "clear" }, exportAs: ["noticeIconTab"], ngImport: i0, template: "<div *ngIf=\"data.list?.length === 0; else listTpl\" class=\"notice-icon__notfound\">\n  <img class=\"notice-icon__notfound-img\" *ngIf=\"data.emptyImage\" [attr.src]=\"data.emptyImage\" alt=\"not found\" />\n  <p>\n    <ng-container *nzStringTemplateOutlet=\"data.emptyText\">\n      {{ data.emptyText || locale.emptyText }}\n    </ng-container>\n  </p>\n</div>\n<ng-template #listTpl>\n  <nz-list [nzDataSource]=\"data.list\" [nzRenderItem]=\"item\">\n    <ng-template #item let-item>\n      <nz-list-item (click)=\"onClick(item)\" [ngClass]=\"{ 'notice-icon__item-read': item.read }\">\n        <nz-list-item-meta [nzTitle]=\"nzTitle\" [nzDescription]=\"nzDescription\" [nzAvatar]=\"item.avatar\">\n          <ng-template #nzTitle>\n            <ng-container *nzStringTemplateOutlet=\"item.title; context: { $implicit: item }\">{{\n              item.title\n            }}</ng-container>\n            <div class=\"notice-icon__item-extra\" *ngIf=\"item.extra\">\n              <nz-tag [nzColor]=\"item.color\">{{ item.extra }}</nz-tag>\n            </div>\n          </ng-template>\n          <ng-template #nzDescription>\n            <div *ngIf=\"item.description\" class=\"notice-icon__item-desc\">\n              <ng-container *nzStringTemplateOutlet=\"item.description; context: { $implicit: item }\">{{\n                item.description\n              }}</ng-container>\n            </div>\n            <div *ngIf=\"item.datetime\" class=\"notice-icon__item-time\">{{ item.datetime }}</div>\n          </ng-template>\n        </nz-list-item-meta>\n      </nz-list-item>\n    </ng-template>\n  </nz-list>\n  <div class=\"notice-icon__clear\" (click)=\"onClear()\">{{ data.clearText || locale.clearText }}</div>\n</ng-template>\n", components: [{ type: i1.NzListComponent, selector: "nz-list, [nz-list]", inputs: ["nzDataSource", "nzBordered", "nzGrid", "nzHeader", "nzFooter", "nzItemLayout", "nzRenderItem", "nzLoading", "nzLoadMore", "nzPagination", "nzSize", "nzSplit", "nzNoResult"], exportAs: ["nzList"] }, { type: i1.NzListItemComponent, selector: "nz-list-item, [nz-list-item]", inputs: ["nzActions", "nzContent", "nzExtra", "nzNoFlex"], exportAs: ["nzListItem"] }, { type: i1.NzListItemMetaComponent, selector: "nz-list-item-meta, [nz-list-item-meta]", inputs: ["nzAvatar", "nzTitle", "nzDescription"], exportAs: ["nzListItemMeta"] }, { type: i2.NzTagComponent, selector: "nz-tag", inputs: ["nzMode", "nzColor", "nzChecked"], outputs: ["nzOnClose", "nzCheckedChange"], exportAs: ["nzTag"] }], directives: [{ type: i7.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i4.NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { type: i7.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: NoticeIconTabComponent, decorators: [{
            type: Component,
            args: [{ selector: 'notice-icon-tab', exportAs: 'noticeIconTab', preserveWhitespaces: false, encapsulation: ViewEncapsulation.None, template: "<div *ngIf=\"data.list?.length === 0; else listTpl\" class=\"notice-icon__notfound\">\n  <img class=\"notice-icon__notfound-img\" *ngIf=\"data.emptyImage\" [attr.src]=\"data.emptyImage\" alt=\"not found\" />\n  <p>\n    <ng-container *nzStringTemplateOutlet=\"data.emptyText\">\n      {{ data.emptyText || locale.emptyText }}\n    </ng-container>\n  </p>\n</div>\n<ng-template #listTpl>\n  <nz-list [nzDataSource]=\"data.list\" [nzRenderItem]=\"item\">\n    <ng-template #item let-item>\n      <nz-list-item (click)=\"onClick(item)\" [ngClass]=\"{ 'notice-icon__item-read': item.read }\">\n        <nz-list-item-meta [nzTitle]=\"nzTitle\" [nzDescription]=\"nzDescription\" [nzAvatar]=\"item.avatar\">\n          <ng-template #nzTitle>\n            <ng-container *nzStringTemplateOutlet=\"item.title; context: { $implicit: item }\">{{\n              item.title\n            }}</ng-container>\n            <div class=\"notice-icon__item-extra\" *ngIf=\"item.extra\">\n              <nz-tag [nzColor]=\"item.color\">{{ item.extra }}</nz-tag>\n            </div>\n          </ng-template>\n          <ng-template #nzDescription>\n            <div *ngIf=\"item.description\" class=\"notice-icon__item-desc\">\n              <ng-container *nzStringTemplateOutlet=\"item.description; context: { $implicit: item }\">{{\n                item.description\n              }}</ng-container>\n            </div>\n            <div *ngIf=\"item.datetime\" class=\"notice-icon__item-time\">{{ item.datetime }}</div>\n          </ng-template>\n        </nz-list-item-meta>\n      </nz-list-item>\n    </ng-template>\n  </nz-list>\n  <div class=\"notice-icon__clear\" (click)=\"onClear()\">{{ data.clearText || locale.clearText }}</div>\n</ng-template>\n" }]
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
    constructor(i18n, cdr) {
        this.i18n = i18n;
        this.cdr = cdr;
        this.locale = {};
        this.data = [];
        this.loading = false;
        this.popoverVisible = false;
        this.select = new EventEmitter();
        this.clear = new EventEmitter();
        this.popoverVisibleChange = new EventEmitter();
    }
    onVisibleChange(result) {
        this.popoverVisibleChange.emit(result);
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
        this.i18n$.unsubscribe();
    }
}
NoticeIconComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: NoticeIconComponent, deps: [{ token: i1$1.DelonLocaleService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
NoticeIconComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.5", type: NoticeIconComponent, selector: "notice-icon", inputs: { data: "data", count: "count", loading: "loading", popoverVisible: "popoverVisible", btnClass: "btnClass", btnIconClass: "btnIconClass" }, outputs: { select: "select", clear: "clear", popoverVisibleChange: "popoverVisibleChange" }, host: { properties: { "class.notice-icon__btn": "true" } }, exportAs: ["noticeIcon"], usesOnChanges: true, ngImport: i0, template: "<ng-template #badgeTpl>\n  <nz-badge [nzCount]=\"count\" [ngClass]=\"btnClass!\" [nzStyle]=\"{ 'box-shadow': 'none' }\">\n    <i nz-icon nzType=\"bell\" [ngClass]=\"btnIconClass!\"></i>\n  </nz-badge>\n</ng-template>\n<div *ngIf=\"data!.length === 0\">\n  <ng-template [ngTemplateOutlet]=\"badgeTpl\"></ng-template>\n</div>\n<div\n  *ngIf=\"data!.length > 0\"\n  nz-dropdown\n  [nzVisible]=\"popoverVisible\"\n  (nzVisibleChange)=\"onVisibleChange($event)\"\n  nzTrigger=\"click\"\n  nzPlacement=\"bottomRight\"\n  nzOverlayClassName=\"header-dropdown notice-icon\"\n  [nzDropdownMenu]=\"noticeMenu\"\n>\n  <ng-template [ngTemplateOutlet]=\"badgeTpl\"></ng-template>\n</div>\n<nz-dropdown-menu #noticeMenu=\"nzDropdownMenu\">\n  <nz-spin [nzSpinning]=\"loading\" [nzDelay]=\"0\">\n    <nz-tabset nzSelectedIndex=\"0\">\n      <nz-tab *ngFor=\"let i of data\" [nzTitle]=\"i.title\">\n        <notice-icon-tab\n          [locale]=\"locale\"\n          [data]=\"i\"\n          (select)=\"onSelect($event)\"\n          (clear)=\"onClear($event)\"\n        ></notice-icon-tab>\n      </nz-tab>\n    </nz-tabset>\n  </nz-spin>\n</nz-dropdown-menu>\n", components: [{ type: i2$1.NzBadgeComponent, selector: "nz-badge", inputs: ["nzShowZero", "nzShowDot", "nzStandalone", "nzDot", "nzOverflowCount", "nzColor", "nzStyle", "nzText", "nzTitle", "nzStatus", "nzCount", "nzOffset"], exportAs: ["nzBadge"] }, { type: i3.NzDropdownMenuComponent, selector: "nz-dropdown-menu", exportAs: ["nzDropdownMenu"] }, { type: i4$1.NzSpinComponent, selector: "nz-spin", inputs: ["nzIndicator", "nzSize", "nzTip", "nzDelay", "nzSimple", "nzSpinning"], exportAs: ["nzSpin"] }, { type: i5.NzTabSetComponent, selector: "nz-tabset", inputs: ["nzSelectedIndex", "nzTabPosition", "nzTabBarExtraContent", "nzCanDeactivate", "nzAddIcon", "nzTabBarStyle", "nzType", "nzSize", "nzAnimated", "nzTabBarGutter", "nzHideAdd", "nzCentered", "nzHideAll", "nzLinkRouter", "nzLinkExact"], outputs: ["nzSelectChange", "nzSelectedIndexChange", "nzTabListScroll", "nzClose", "nzAdd"], exportAs: ["nzTabset"] }, { type: i5.NzTabComponent, selector: "nz-tab", inputs: ["nzTitle", "nzClosable", "nzCloseIcon", "nzDisabled", "nzForceRender"], outputs: ["nzSelect", "nzDeselect", "nzClick", "nzContextmenu"], exportAs: ["nzTab"] }, { type: NoticeIconTabComponent, selector: "notice-icon-tab", inputs: ["locale", "data"], outputs: ["select", "clear"], exportAs: ["noticeIconTab"] }], directives: [{ type: i7.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i8.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { type: i7.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i7.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }, { type: i3.NzDropDownDirective, selector: "[nz-dropdown]", inputs: ["nzDropdownMenu", "nzTrigger", "nzMatchWidthElement", "nzBackdrop", "nzClickHide", "nzDisabled", "nzVisible", "nzOverlayClassName", "nzOverlayStyle", "nzPlacement"], outputs: ["nzVisibleChange"], exportAs: ["nzDropdown"] }, { type: i7.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    InputNumber()
], NoticeIconComponent.prototype, "count", void 0);
__decorate([
    InputBoolean()
], NoticeIconComponent.prototype, "loading", void 0);
__decorate([
    InputBoolean()
], NoticeIconComponent.prototype, "popoverVisible", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: NoticeIconComponent, decorators: [{
            type: Component,
            args: [{ selector: 'notice-icon', exportAs: 'noticeIcon', host: { '[class.notice-icon__btn]': 'true' }, preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<ng-template #badgeTpl>\n  <nz-badge [nzCount]=\"count\" [ngClass]=\"btnClass!\" [nzStyle]=\"{ 'box-shadow': 'none' }\">\n    <i nz-icon nzType=\"bell\" [ngClass]=\"btnIconClass!\"></i>\n  </nz-badge>\n</ng-template>\n<div *ngIf=\"data!.length === 0\">\n  <ng-template [ngTemplateOutlet]=\"badgeTpl\"></ng-template>\n</div>\n<div\n  *ngIf=\"data!.length > 0\"\n  nz-dropdown\n  [nzVisible]=\"popoverVisible\"\n  (nzVisibleChange)=\"onVisibleChange($event)\"\n  nzTrigger=\"click\"\n  nzPlacement=\"bottomRight\"\n  nzOverlayClassName=\"header-dropdown notice-icon\"\n  [nzDropdownMenu]=\"noticeMenu\"\n>\n  <ng-template [ngTemplateOutlet]=\"badgeTpl\"></ng-template>\n</div>\n<nz-dropdown-menu #noticeMenu=\"nzDropdownMenu\">\n  <nz-spin [nzSpinning]=\"loading\" [nzDelay]=\"0\">\n    <nz-tabset nzSelectedIndex=\"0\">\n      <nz-tab *ngFor=\"let i of data\" [nzTitle]=\"i.title\">\n        <notice-icon-tab\n          [locale]=\"locale\"\n          [data]=\"i\"\n          (select)=\"onSelect($event)\"\n          (clear)=\"onClear($event)\"\n        ></notice-icon-tab>\n      </nz-tab>\n    </nz-tabset>\n  </nz-spin>\n</nz-dropdown-menu>\n" }]
        }], ctorParameters: function () { return [{ type: i1$1.DelonLocaleService }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { data: [{
                type: Input
            }], count: [{
                type: Input
            }], loading: [{
                type: Input
            }], popoverVisible: [{
                type: Input
            }], btnClass: [{
                type: Input
            }], btnIconClass: [{
                type: Input
            }], select: [{
                type: Output
            }], clear: [{
                type: Output
            }], popoverVisibleChange: [{
                type: Output
            }] } });

const COMPONENTS = [NoticeIconComponent];
class NoticeIconModule {
}
NoticeIconModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: NoticeIconModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NoticeIconModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: NoticeIconModule, declarations: [NoticeIconComponent, NoticeIconTabComponent], imports: [CommonModule,
        DelonLocaleModule,
        NzBadgeModule,
        NzDropDownModule,
        NzIconModule,
        NzListModule,
        NzSpinModule,
        NzTabsModule,
        NzTagModule,
        NzOutletModule], exports: [NoticeIconComponent] });
NoticeIconModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: NoticeIconModule, imports: [[
            CommonModule,
            DelonLocaleModule,
            NzBadgeModule,
            NzDropDownModule,
            NzIconModule,
            NzListModule,
            NzSpinModule,
            NzTabsModule,
            NzTagModule,
            NzOutletModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: NoticeIconModule, decorators: [{
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
                        NzOutletModule
                    ],
                    declarations: [...COMPONENTS, NoticeIconTabComponent],
                    exports: COMPONENTS
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { NoticeIconComponent, NoticeIconModule, NoticeIconTabComponent };
//# sourceMappingURL=notice-icon.mjs.map
