import * as i0 from '@angular/core';
import { EventEmitter, ɵɵngDeclareComponent, ViewEncapsulation, ɵsetClassMetadata, Component, Input, Output, ɵɵdirectiveInject, ChangeDetectorRef, ChangeDetectionStrategy, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NgIf, NgClass, NgTemplateOutlet, NgForOf, CommonModule } from '@angular/common';
import { NzListComponent, NzListItemComponent, NzListItemMetaComponent, NzListModule } from 'ng-zorro-antd/list';
import { NzTagComponent, NzTagModule } from 'ng-zorro-antd/tag';
import { __decorate, __metadata } from 'tslib';
import { DelonLocaleService, DelonLocaleModule } from '@delon/theme';
import { InputNumber, InputBoolean } from '@delon/util';
import { NzBadgeComponent, NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';
import { NzDropDownDirective, NzDropdownMenuComponent, NzDropDownModule } from 'ng-zorro-antd/dropdown';
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
}
/** @nocollapse */ NoticeIconTabComponent.ɵfac = function NoticeIconTabComponent_Factory(t) { return new (t || NoticeIconTabComponent)(); };
/** @nocollapse */ NoticeIconTabComponent.ɵcmp = ɵɵngDeclareComponent({ version: "11.1.1", type: NoticeIconTabComponent, selector: "notice-icon-tab", inputs: { locale: "locale", data: "data" }, outputs: { select: "select", clear: "clear" }, exportAs: ["noticeIconTab"], ngImport: i0, template: "<div *ngIf=\"data.list?.length === 0; else listTpl\" class=\"notice-icon__notfound\">\n  <img class=\"notice-icon__notfound-img\" *ngIf=\"data.emptyImage\" src=\"{{ data.emptyImage }}\" alt=\"not found\" />\n  <p>{{ data.emptyText || locale.emptyText }}</p>\n</div>\n<ng-template #listTpl>\n  <nz-list [nzDataSource]=\"data.list\" [nzRenderItem]=\"item\">\n    <ng-template #item let-item>\n      <nz-list-item (click)=\"onClick(item)\" [ngClass]=\"{ 'notice-icon__item-read': item.read }\">\n        <nz-list-item-meta [nzTitle]=\"nzTitle\" [nzDescription]=\"nzDescription\" [nzAvatar]=\"item.avatar\">\n          <ng-template #nzTitle>\n            {{ item.title }}\n            <div class=\"notice-icon__item-extra\" *ngIf=\"item.extra\">\n              <nz-tag [nzColor]=\"item.color\">{{ item.extra }}</nz-tag>\n            </div>\n          </ng-template>\n          <ng-template #nzDescription>\n            <div *ngIf=\"item.description\" class=\"notice-icon__item-desc\">{{ item.description }}</div>\n            <div *ngIf=\"item.datetime\" class=\"notice-icon__item-time\">{{ item.datetime }}</div>\n          </ng-template>\n        </nz-list-item-meta>\n      </nz-list-item>\n    </ng-template>\n  </nz-list>\n  <div class=\"notice-icon__clear\" (click)=\"onClear()\">{{ data.clearText || locale.clearText }}</div>\n</ng-template>\n", directives: [{ type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: NzListComponent, selector: "nz-list, [nz-list]", inputs: ["nzBordered", "nzGrid", "nzItemLayout", "nzRenderItem", "nzLoading", "nzLoadMore", "nzSize", "nzSplit", "nzDataSource", "nzHeader", "nzFooter", "nzPagination", "nzNoResult"], exportAs: ["nzList"] }, { type: NzListItemComponent, selector: "nz-list-item, [nz-list-item]", inputs: ["nzActions", "nzExtra", "nzNoFlex", "nzContent"], exportAs: ["nzListItem"] }, { type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: NzListItemMetaComponent, selector: "nz-list-item-meta, [nz-list-item-meta]", inputs: ["nzAvatar", "nzTitle", "nzDescription"], exportAs: ["nzListItemMeta"] }, { type: NzTagComponent, selector: "nz-tag", inputs: ["nzMode", "nzChecked", "nzColor"], outputs: ["nzOnClose", "nzCheckedChange"], exportAs: ["nzTag"] }], encapsulation: ViewEncapsulation.None });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(NoticeIconTabComponent, [{
        type: Component,
        args: [{
                selector: 'notice-icon-tab',
                exportAs: 'noticeIconTab',
                templateUrl: './notice-icon-tab.component.html',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
            }]
    }], null, { locale: [{
            type: Input
        }], data: [{
            type: Input
        }], select: [{
            type: Output
        }], clear: [{
            type: Output
        }] }); })();

class NoticeIconComponent {
    constructor(i18n, cdr) {
        this.i18n = i18n;
        this.cdr = cdr;
        this.locale = {};
        this.data = [];
        this.loading = false;
        this.popoverVisible = false;
        this.btnClass = '';
        this.btnIconClass = '';
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
/** @nocollapse */ NoticeIconComponent.ɵfac = function NoticeIconComponent_Factory(t) { return new (t || NoticeIconComponent)(ɵɵdirectiveInject(DelonLocaleService), ɵɵdirectiveInject(ChangeDetectorRef)); };
/** @nocollapse */ NoticeIconComponent.ɵcmp = ɵɵngDeclareComponent({ version: "11.1.1", type: NoticeIconComponent, selector: "notice-icon", inputs: { data: "data", count: "count", loading: "loading", popoverVisible: "popoverVisible", btnClass: "btnClass", btnIconClass: "btnIconClass" }, outputs: { select: "select", clear: "clear", popoverVisibleChange: "popoverVisibleChange" }, host: { properties: { "class.notice-icon__btn": "true" } }, exportAs: ["noticeIcon"], usesOnChanges: true, ngImport: i0, template: "<ng-template #badgeTpl>\n  <nz-badge [nzCount]=\"count\" [ngClass]=\"btnClass\" [nzStyle]=\"{ 'box-shadow': 'none' }\">\n    <i nz-icon nzType=\"bell\" [ngClass]=\"btnIconClass\"></i>\n  </nz-badge>\n</ng-template>\n<div *ngIf=\"data?.length === 0\">\n  <ng-template [ngTemplateOutlet]=\"badgeTpl\"></ng-template>\n</div>\n<div\n  *ngIf=\"data?.length > 0\"\n  nz-dropdown\n  [nzVisible]=\"popoverVisible\"\n  (nzVisibleChange)=\"onVisibleChange($event)\"\n  nzTrigger=\"click\"\n  nzPlacement=\"bottomRight\"\n  [nzOverlayClassName]=\"['header-dropdown', 'notice-icon']\"\n  [nzDropdownMenu]=\"noticeMenu\"\n>\n  <ng-template [ngTemplateOutlet]=\"badgeTpl\"></ng-template>\n</div>\n<nz-dropdown-menu #noticeMenu=\"nzDropdownMenu\">\n  <nz-spin [nzSpinning]=\"loading\" [nzDelay]=\"0\">\n    <nz-tabset nzSelectedIndex=\"0\">\n      <nz-tab *ngFor=\"let i of data\" [nzTitle]=\"i.title\">\n        <notice-icon-tab [locale]=\"locale\" [data]=\"i\" (select)=\"onSelect($event)\" (clear)=\"onClear($event)\"></notice-icon-tab>\n      </nz-tab>\n    </nz-tabset>\n  </nz-spin>\n</nz-dropdown-menu>\n", directives: [{ type: NzBadgeComponent, selector: "nz-badge", inputs: ["nzShowZero", "nzShowDot", "nzStandalone", "nzDot", "nzOverflowCount", "nzColor", "nzStyle", "nzText", "nzTitle", "nzStatus", "nzCount", "nzOffset"], exportAs: ["nzBadge"] }, { type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: NzIconDirective, selector: "[nz-icon]", inputs: ["nzRotate", "nzSpin", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }, { type: NzDropDownDirective, selector: "[nz-dropdown]", inputs: ["nzDropdownMenu", "nzTrigger", "nzMatchWidthElement", "nzBackdrop", "nzHasBackdrop", "nzClickHide", "nzDisabled", "nzVisible", "nzOverlayClassName", "nzOverlayStyle", "nzPlacement"], outputs: ["nzVisibleChange"], exportAs: ["nzDropdown"] }, { type: NzDropdownMenuComponent, selector: "nz-dropdown-menu", exportAs: ["nzDropdownMenu"] }, { type: NzSpinComponent, selector: "nz-spin", inputs: ["nzIndicator", "nzSize", "nzTip", "nzDelay", "nzSimple", "nzSpinning"], exportAs: ["nzSpin"] }, { type: NzTabSetComponent, selector: "nz-tabset", inputs: ["nzTabPosition", "nzCanDeactivate", "nzAddIcon", "nzTabBarStyle", "nzType", "nzSize", "nzAnimated", "nzTabBarGutter", "nzHideAdd", "nzCentered", "nzHideAll", "nzLinkRouter", "nzLinkExact", "nzSelectedIndex", "nzTabBarExtraContent"], outputs: ["nzSelectChange", "nzSelectedIndexChange", "nzTabListScroll", "nzClose", "nzAdd"], exportAs: ["nzTabset"] }, { type: NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: NzTabComponent, selector: "nz-tab", inputs: ["nzTitle", "nzClosable", "nzCloseIcon", "nzDisabled", "nzForceRender"], outputs: ["nzSelect", "nzDeselect", "nzClick", "nzContextmenu"], exportAs: ["nzTab"] }, { type: NoticeIconTabComponent, selector: "notice-icon-tab", inputs: ["locale", "data"], outputs: ["select", "clear"], exportAs: ["noticeIconTab"] }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
__decorate([
    InputNumber(),
    __metadata("design:type", Number)
], NoticeIconComponent.prototype, "count", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NoticeIconComponent.prototype, "loading", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NoticeIconComponent.prototype, "popoverVisible", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(NoticeIconComponent, [{
        type: Component,
        args: [{
                selector: 'notice-icon',
                exportAs: 'noticeIcon',
                templateUrl: './notice-icon.component.html',
                host: { '[class.notice-icon__btn]': 'true' },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], function () { return [{ type: DelonLocaleService }, { type: ChangeDetectorRef }]; }, { data: [{
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
        }] }); })();

const COMPONENTS = [NoticeIconComponent];
class NoticeIconModule {
}
/** @nocollapse */ NoticeIconModule.ɵmod = ɵɵdefineNgModule({ type: NoticeIconModule });
/** @nocollapse */ NoticeIconModule.ɵinj = ɵɵdefineInjector({ factory: function NoticeIconModule_Factory(t) { return new (t || NoticeIconModule)(); }, imports: [[
            CommonModule,
            DelonLocaleModule,
            NzBadgeModule,
            NzDropDownModule,
            NzIconModule,
            NzListModule,
            NzSpinModule,
            NzTabsModule,
            NzTagModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NoticeIconModule, { declarations: [NoticeIconComponent, NoticeIconTabComponent], imports: [CommonModule,
        DelonLocaleModule,
        NzBadgeModule,
        NzDropDownModule,
        NzIconModule,
        NzListModule,
        NzSpinModule,
        NzTabsModule,
        NzTagModule], exports: [NoticeIconComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(NoticeIconModule, [{
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
                ],
                declarations: [...COMPONENTS, NoticeIconTabComponent],
                exports: [...COMPONENTS],
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { NoticeIconComponent, NoticeIconModule, NoticeIconTabComponent };
//# sourceMappingURL=noticeIcon.js.map
