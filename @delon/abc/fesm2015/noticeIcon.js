import { EventEmitter, Component, ViewEncapsulation, Input, Output, ChangeDetectionStrategy, ChangeDetectorRef, NgModule } from '@angular/core';
import { __decorate, __metadata } from 'tslib';
import { DelonLocaleService, DelonLocaleModule } from '@delon/theme';
import { InputNumber, InputBoolean } from '@delon/util/other';
import { CommonModule } from '@angular/common';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTagModule } from 'ng-zorro-antd/tag';

/**
 * @fileoverview added by tsickle
 * Generated from: notice-icon.types.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function NoticeItem() { }
if (false) {
    /** @type {?} */
    NoticeItem.prototype.title;
    /** @type {?} */
    NoticeItem.prototype.list;
    /**
     * 空列表文本，默认：`无通知`
     * @type {?|undefined}
     */
    NoticeItem.prototype.emptyText;
    /**
     * 空列表图像
     * @type {?|undefined}
     */
    NoticeItem.prototype.emptyImage;
    /**
     * 清空文本，默认：`清空`
     * @type {?|undefined}
     */
    NoticeItem.prototype.clearText;
}
/**
 * @record
 */
function NoticeIconList() { }
if (false) {
    /**
     * 头像图片链接
     * @type {?|undefined}
     */
    NoticeIconList.prototype.avatar;
    /**
     * 标题
     * @type {?|undefined}
     */
    NoticeIconList.prototype.title;
    /**
     * 描述信息
     * @type {?|undefined}
     */
    NoticeIconList.prototype.description;
    /**
     * 时间戳
     * @type {?|undefined}
     */
    NoticeIconList.prototype.datetime;
    /**
     * 额外信息，在列表项右上角
     * @type {?|undefined}
     */
    NoticeIconList.prototype.extra;
    /**
     * 是否已读状态
     * @type {?|undefined}
     */
    NoticeIconList.prototype.read;
    /* Skipping unhandled member: [key: string]: any;*/
}
/**
 * @record
 */
function NoticeIconSelect() { }
if (false) {
    /** @type {?} */
    NoticeIconSelect.prototype.title;
    /** @type {?} */
    NoticeIconSelect.prototype.item;
}

/**
 * @fileoverview added by tsickle
 * Generated from: notice-icon-tab.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NoticeIconTabComponent {
    constructor() {
        this.locale = {};
        this.select = new EventEmitter();
        this.clear = new EventEmitter();
    }
    /**
     * @param {?} item
     * @return {?}
     */
    onClick(item) {
        this.select.emit({ title: this.data.title, item });
    }
    /**
     * @return {?}
     */
    onClear() {
        this.clear.emit(this.data.title);
    }
}
NoticeIconTabComponent.decorators = [
    { type: Component, args: [{
                selector: 'notice-icon-tab',
                exportAs: 'noticeIconTab',
                template: "<div *ngIf=\"data.list?.length === 0; else listTpl\" class=\"notice-icon__notfound\">\n  <img class=\"notice-icon__notfound-img\" *ngIf=\"data.emptyImage\" src=\"{{ data.emptyImage }}\" alt=\"not found\" />\n  <p>{{ data.emptyText || locale.emptyText }}</p>\n</div>\n<ng-template #listTpl>\n  <nz-list [nzDataSource]=\"data.list\" [nzRenderItem]=\"item\">\n    <ng-template #item let-item>\n      <nz-list-item (click)=\"onClick(item)\" [ngClass]=\"{ 'notice-icon__item-read': item.read }\">\n        <nz-list-item-meta [nzTitle]=\"nzTitle\" [nzDescription]=\"nzDescription\" [nzAvatar]=\"item.avatar\">\n          <ng-template #nzTitle>\n            {{ item.title }}\n            <div class=\"notice-icon__item-extra\" *ngIf=\"item.extra\">\n              <nz-tag [nzColor]=\"item.color\">{{ item.extra }}</nz-tag>\n            </div>\n          </ng-template>\n          <ng-template #nzDescription>\n            <div *ngIf=\"item.description\" class=\"notice-icon__item-desc\">{{ item.description }}</div>\n            <div *ngIf=\"item.datetime\" class=\"notice-icon__item-time\">{{ item.datetime }}</div>\n          </ng-template>\n        </nz-list-item-meta>\n      </nz-list-item>\n    </ng-template>\n  </nz-list>\n  <div class=\"notice-icon__clear\" (click)=\"onClear()\">{{ data.clearText || locale.clearText }}</div>\n</ng-template>\n",
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None
            }] }
];
NoticeIconTabComponent.propDecorators = {
    locale: [{ type: Input }],
    data: [{ type: Input }],
    select: [{ type: Output }],
    clear: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    NoticeIconTabComponent.prototype.locale;
    /** @type {?} */
    NoticeIconTabComponent.prototype.data;
    /** @type {?} */
    NoticeIconTabComponent.prototype.select;
    /** @type {?} */
    NoticeIconTabComponent.prototype.clear;
}

/**
 * @fileoverview added by tsickle
 * Generated from: notice-icon.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NoticeIconComponent {
    /**
     * @param {?} i18n
     * @param {?} cdr
     */
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
    /**
     * @param {?} result
     * @return {?}
     */
    onVisibleChange(result) {
        this.popoverVisibleChange.emit(result);
    }
    /**
     * @param {?} i
     * @return {?}
     */
    onSelect(i) {
        this.select.emit(i);
    }
    /**
     * @param {?} title
     * @return {?}
     */
    onClear(title) {
        this.clear.emit(title);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.i18n$ = this.i18n.change.subscribe((/**
         * @return {?}
         */
        () => {
            this.locale = this.i18n.getData('noticeIcon');
            this.cdr.markForCheck();
        }));
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.cdr.markForCheck();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.i18n$.unsubscribe();
    }
}
NoticeIconComponent.decorators = [
    { type: Component, args: [{
                selector: 'notice-icon',
                exportAs: 'noticeIcon',
                template: "<ng-template #badgeTpl>\n  <nz-badge [nzCount]=\"count\" [ngClass]=\"btnClass\" [nzStyle]=\"{ 'box-shadow': 'none' }\">\n    <i nz-icon nzType=\"bell\" [ngClass]=\"btnIconClass\"></i>\n  </nz-badge>\n</ng-template>\n<div *ngIf=\"data?.length === 0\">\n  <ng-template [ngTemplateOutlet]=\"badgeTpl\"></ng-template>\n</div>\n<div\n  *ngIf=\"data?.length > 0\"\n  nz-dropdown\n  [nzVisible]=\"popoverVisible\"\n  (nzVisibleChange)=\"onVisibleChange($event)\"\n  nzTrigger=\"click\"\n  nzPlacement=\"bottomRight\"\n  [nzOverlayClassName]=\"['header-dropdown', 'notice-icon']\"\n  [nzDropdownMenu]=\"noticeMenu\"\n>\n  <ng-template [ngTemplateOutlet]=\"badgeTpl\"></ng-template>\n</div>\n<nz-dropdown-menu #noticeMenu=\"nzDropdownMenu\">\n  <nz-spin [nzSpinning]=\"loading\" [nzDelay]=\"0\">\n    <nz-tabset nzSelectedIndex=\"0\">\n      <nz-tab *ngFor=\"let i of data\" [nzTitle]=\"i.title\">\n        <notice-icon-tab [locale]=\"locale\" [data]=\"i\" (select)=\"onSelect($event)\" (clear)=\"onClear($event)\"></notice-icon-tab>\n      </nz-tab>\n    </nz-tabset>\n  </nz-spin>\n</nz-dropdown-menu>\n",
                host: { '[class.notice-icon__btn]': 'true' },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
NoticeIconComponent.ctorParameters = () => [
    { type: DelonLocaleService },
    { type: ChangeDetectorRef }
];
NoticeIconComponent.propDecorators = {
    data: [{ type: Input }],
    count: [{ type: Input }],
    loading: [{ type: Input }],
    popoverVisible: [{ type: Input }],
    btnClass: [{ type: Input }],
    btnIconClass: [{ type: Input }],
    select: [{ type: Output }],
    clear: [{ type: Output }],
    popoverVisibleChange: [{ type: Output }]
};
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
if (false) {
    /** @type {?} */
    NoticeIconComponent.ngAcceptInputType_count;
    /** @type {?} */
    NoticeIconComponent.ngAcceptInputType_loading;
    /** @type {?} */
    NoticeIconComponent.ngAcceptInputType_popoverVisible;
    /**
     * @type {?}
     * @private
     */
    NoticeIconComponent.prototype.i18n$;
    /** @type {?} */
    NoticeIconComponent.prototype.locale;
    /** @type {?} */
    NoticeIconComponent.prototype.data;
    /** @type {?} */
    NoticeIconComponent.prototype.count;
    /** @type {?} */
    NoticeIconComponent.prototype.loading;
    /** @type {?} */
    NoticeIconComponent.prototype.popoverVisible;
    /** @type {?} */
    NoticeIconComponent.prototype.btnClass;
    /** @type {?} */
    NoticeIconComponent.prototype.btnIconClass;
    /** @type {?} */
    NoticeIconComponent.prototype.select;
    /** @type {?} */
    NoticeIconComponent.prototype.clear;
    /** @type {?} */
    NoticeIconComponent.prototype.popoverVisibleChange;
    /**
     * @type {?}
     * @private
     */
    NoticeIconComponent.prototype.i18n;
    /**
     * @type {?}
     * @private
     */
    NoticeIconComponent.prototype.cdr;
}

/**
 * @fileoverview added by tsickle
 * Generated from: notice-icon.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [NoticeIconComponent];
class NoticeIconModule {
}
NoticeIconModule.decorators = [
    { type: NgModule, args: [{
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
                exports: COMPONENTS,
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: noticeIcon.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NoticeIconComponent, NoticeIconModule, NoticeIconTabComponent };
//# sourceMappingURL=noticeIcon.js.map
