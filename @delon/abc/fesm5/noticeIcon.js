import { Component, Input, Output, EventEmitter, NgModule } from '@angular/core';
import { __spread, __decorate, __metadata } from 'tslib';
import { DelonLocaleService, DelonLocaleModule } from '@delon/theme';
import { InputNumber, InputBoolean } from '@delon/util';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NoticeIconTabComponent = /** @class */ (function () {
    function NoticeIconTabComponent() {
        this.locale = {};
        this.select = new EventEmitter();
        this.clear = new EventEmitter();
    }
    /**
     * @param {?} item
     * @return {?}
     */
    NoticeIconTabComponent.prototype.onClick = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.select.emit(/** @type {?} */ ({
            title: this.data.title,
            item: item,
        }));
    };
    /**
     * @return {?}
     */
    NoticeIconTabComponent.prototype.onClear = /**
     * @return {?}
     */
    function () {
        this.clear.emit(this.data.title);
    };
    NoticeIconTabComponent.decorators = [
        { type: Component, args: [{
                    selector: 'notice-icon-tab',
                    template: "\n  <div *ngIf=\"data.list?.length === 0; else listTpl\" class=\"notice-icon__notfound\">\n    <img class=\"notice-icon__notfound-img\" *ngIf=\"data.emptyImage\" src=\"{{data.emptyImage}}\" alt=\"not found\" />\n    <p>{{data.emptyText || locale.emptyText}}</p>\n  </div>\n  <ng-template #listTpl>\n    <nz-list [nzDataSource]=\"data.list\" [nzRenderItem]=\"item\">\n      <ng-template #item let-item>\n        <nz-list-item (click)=\"onClick(item)\" [ngClass]=\"{'notice-icon__item-read': item.read}\">\n          <nz-list-item-meta\n            [nzTitle]=\"nzTitle\"\n            [nzDescription]=\"nzDescription\"\n            [nzAvatar]=\"item.avatar\">\n            <ng-template #nzTitle>\n              {{item.title}}\n              <div class=\"notice-icon__item-extra\" *ngIf=\"item.extra\"><nz-tag [nzColor]=\"item.color\">{{item.extra}}</nz-tag></div>\n            </ng-template>\n            <ng-template #nzDescription>\n              <div *ngIf=\"item.description\" class=\"notice-icon__item-desc\">{{item.description}}</div>\n              <div *ngIf=\"item.datetime\" class=\"notice-icon__item-time\">{{item.datetime}}</div>\n            </ng-template>\n          </nz-list-item-meta>\n        </nz-list-item>\n      </ng-template>\n    </nz-list>\n    <div class=\"notice-icon__clear\" (click)=\"onClear()\">{{ data.clearText || locale.clearText }}</div>\n  </ng-template>\n  ",
                    preserveWhitespaces: false
                }] }
    ];
    NoticeIconTabComponent.propDecorators = {
        locale: [{ type: Input }],
        data: [{ type: Input }],
        select: [{ type: Output }],
        clear: [{ type: Output }]
    };
    return NoticeIconTabComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NoticeIconComponent = /** @class */ (function () {
    function NoticeIconComponent(i18n) {
        var _this = this;
        this.i18n = i18n;
        this.locale = {};
        this.data = [];
        /**
         * 弹出卡片加载状态
         */
        this.loading = false;
        this.select = new EventEmitter();
        this.clear = new EventEmitter();
        /**
         * 手动控制Popover显示
         */
        this.popoverVisible = false;
        this.popoverVisibleChange = new EventEmitter();
        this.i18n$ = this.i18n.change.subscribe(function () { return (_this.locale = _this.i18n.getData('noticeIcon')); });
    }
    /**
     * @param {?} result
     * @return {?}
     */
    NoticeIconComponent.prototype.onVisibleChange = /**
     * @param {?} result
     * @return {?}
     */
    function (result) {
        this.popoverVisibleChange.emit(result);
    };
    /**
     * @param {?} i
     * @return {?}
     */
    NoticeIconComponent.prototype.onSelect = /**
     * @param {?} i
     * @return {?}
     */
    function (i) {
        this.select.emit(i);
    };
    /**
     * @param {?} title
     * @return {?}
     */
    NoticeIconComponent.prototype.onClear = /**
     * @param {?} title
     * @return {?}
     */
    function (title) {
        this.clear.emit(title);
    };
    /**
     * @return {?}
     */
    NoticeIconComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.i18n$.unsubscribe();
    };
    NoticeIconComponent.decorators = [
        { type: Component, args: [{
                    selector: 'notice-icon',
                    template: "\n  <nz-badge *ngIf=\"data?.length === 0\" [nzCount]=\"count\">\n    <i class=\"anticon anticon-bell\"></i>\n  </nz-badge>\n  <nz-popover *ngIf=\"data?.length > 0\"\n    [nzVisible]=\"popoverVisible\" (nzVisibleChange)=\"onVisibleChange($event)\" nzTrigger=\"click\"\n    nzPlacement=\"bottomRight\"\n    nzOverlayClassName=\"notice-icon\">\n    <div nz-popover class=\"alain-default__nav-item notice-icon__item\">\n      <nz-badge [nzCount]=\"count\">\n        <i class=\"anticon anticon-bell\"></i>\n      </nz-badge>\n    </div>\n    <ng-template #nzTemplate>\n      <nz-spin [nzSpinning]=\"loading\" [nzDelay]=\"0\">\n        <nz-tabset>\n          <nz-tab *ngFor=\"let i of data\" [nzTitle]=\"i.title\">\n            <notice-icon-tab\n              [locale]=\"locale\"\n              [data]=\"i\"\n              (select)=\"onSelect($event)\"\n              (clear)=\"onClear($event)\"></notice-icon-tab>\n          </nz-tab>\n        </nz-tabset>\n      </nz-spin>\n    </ng-template>\n  </nz-popover>\n  ",
                    host: { '[class.notice-icon__btn]': 'true' },
                    preserveWhitespaces: false
                }] }
    ];
    /** @nocollapse */
    NoticeIconComponent.ctorParameters = function () { return [
        { type: DelonLocaleService }
    ]; };
    NoticeIconComponent.propDecorators = {
        data: [{ type: Input }],
        count: [{ type: Input }],
        loading: [{ type: Input }],
        select: [{ type: Output }],
        clear: [{ type: Output }],
        popoverVisible: [{ type: Input }],
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
    return NoticeIconComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var COMPONENTS = [NoticeIconComponent];
var NoticeIconModule = /** @class */ (function () {
    function NoticeIconModule() {
    }
    /**
     * @return {?}
     */
    NoticeIconModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: NoticeIconModule, providers: [] };
    };
    NoticeIconModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, DelonLocaleModule, NgZorroAntdModule],
                    declarations: __spread(COMPONENTS, [NoticeIconTabComponent]),
                    exports: __spread(COMPONENTS),
                },] }
    ];
    return NoticeIconModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { NoticeIconTabComponent, NoticeIconComponent, NoticeIconModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWNlSWNvbi5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGRlbG9uL2FiYy9ub3RpY2UtaWNvbi9ub3RpY2UtaWNvbi10YWIuY29tcG9uZW50LnRzIiwibmc6Ly9AZGVsb24vYWJjL25vdGljZS1pY29uL25vdGljZS1pY29uLmNvbXBvbmVudC50cyIsIm5nOi8vQGRlbG9uL2FiYy9ub3RpY2UtaWNvbi9ub3RpY2UtaWNvbi5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTm90aWNlSXRlbSwgTm90aWNlSWNvblNlbGVjdCB9IGZyb20gJy4vbm90aWNlLWljb24udHlwZXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdub3RpY2UtaWNvbi10YWInLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPGRpdiAqbmdJZj1cImRhdGEubGlzdD8ubGVuZ3RoID09PSAwOyBlbHNlIGxpc3RUcGxcIiBjbGFzcz1cIm5vdGljZS1pY29uX19ub3Rmb3VuZFwiPlxyXG4gICAgPGltZyBjbGFzcz1cIm5vdGljZS1pY29uX19ub3Rmb3VuZC1pbWdcIiAqbmdJZj1cImRhdGEuZW1wdHlJbWFnZVwiIHNyYz1cInt7ZGF0YS5lbXB0eUltYWdlfX1cIiBhbHQ9XCJub3QgZm91bmRcIiAvPlxyXG4gICAgPHA+e3tkYXRhLmVtcHR5VGV4dCB8fCBsb2NhbGUuZW1wdHlUZXh0fX08L3A+XHJcbiAgPC9kaXY+XHJcbiAgPG5nLXRlbXBsYXRlICNsaXN0VHBsPlxyXG4gICAgPG56LWxpc3QgW256RGF0YVNvdXJjZV09XCJkYXRhLmxpc3RcIiBbbnpSZW5kZXJJdGVtXT1cIml0ZW1cIj5cclxuICAgICAgPG5nLXRlbXBsYXRlICNpdGVtIGxldC1pdGVtPlxyXG4gICAgICAgIDxuei1saXN0LWl0ZW0gKGNsaWNrKT1cIm9uQ2xpY2soaXRlbSlcIiBbbmdDbGFzc109XCJ7J25vdGljZS1pY29uX19pdGVtLXJlYWQnOiBpdGVtLnJlYWR9XCI+XHJcbiAgICAgICAgICA8bnotbGlzdC1pdGVtLW1ldGFcclxuICAgICAgICAgICAgW256VGl0bGVdPVwibnpUaXRsZVwiXHJcbiAgICAgICAgICAgIFtuekRlc2NyaXB0aW9uXT1cIm56RGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICBbbnpBdmF0YXJdPVwiaXRlbS5hdmF0YXJcIj5cclxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNuelRpdGxlPlxyXG4gICAgICAgICAgICAgIHt7aXRlbS50aXRsZX19XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdGljZS1pY29uX19pdGVtLWV4dHJhXCIgKm5nSWY9XCJpdGVtLmV4dHJhXCI+PG56LXRhZyBbbnpDb2xvcl09XCJpdGVtLmNvbG9yXCI+e3tpdGVtLmV4dHJhfX08L256LXRhZz48L2Rpdj5cclxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNuekRlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJpdGVtLmRlc2NyaXB0aW9uXCIgY2xhc3M9XCJub3RpY2UtaWNvbl9faXRlbS1kZXNjXCI+e3tpdGVtLmRlc2NyaXB0aW9ufX08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiaXRlbS5kYXRldGltZVwiIGNsYXNzPVwibm90aWNlLWljb25fX2l0ZW0tdGltZVwiPnt7aXRlbS5kYXRldGltZX19PC9kaXY+XHJcbiAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICA8L256LWxpc3QtaXRlbS1tZXRhPlxyXG4gICAgICAgIDwvbnotbGlzdC1pdGVtPlxyXG4gICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgPC9uei1saXN0PlxyXG4gICAgPGRpdiBjbGFzcz1cIm5vdGljZS1pY29uX19jbGVhclwiIChjbGljayk9XCJvbkNsZWFyKClcIj57eyBkYXRhLmNsZWFyVGV4dCB8fCBsb2NhbGUuY2xlYXJUZXh0IH19PC9kaXY+XHJcbiAgPC9uZy10ZW1wbGF0ZT5cclxuICBgLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTm90aWNlSWNvblRhYkNvbXBvbmVudCB7XHJcbiAgQElucHV0KClcclxuICBsb2NhbGU6IGFueSA9IHt9O1xyXG4gIEBJbnB1dCgpXHJcbiAgZGF0YTogTm90aWNlSXRlbTtcclxuICBAT3V0cHV0KClcclxuICBzZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPE5vdGljZUljb25TZWxlY3Q+KCk7XHJcbiAgQE91dHB1dCgpXHJcbiAgY2xlYXIgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuXHJcbiAgb25DbGljayhpdGVtOiBOb3RpY2VJdGVtKSB7XHJcbiAgICB0aGlzLnNlbGVjdC5lbWl0KDxOb3RpY2VJY29uU2VsZWN0PntcclxuICAgICAgdGl0bGU6IHRoaXMuZGF0YS50aXRsZSxcclxuICAgICAgaXRlbSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25DbGVhcigpIHtcclxuICAgIHRoaXMuY2xlYXIuZW1pdCh0aGlzLmRhdGEudGl0bGUpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIE9uRGVzdHJveSxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IERlbG9uTG9jYWxlU2VydmljZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XHJcbmltcG9ydCB7IElucHV0TnVtYmVyLCBJbnB1dEJvb2xlYW4gfSBmcm9tICdAZGVsb24vdXRpbCc7XHJcblxyXG5pbXBvcnQgeyBOb3RpY2VJdGVtLCBOb3RpY2VJY29uU2VsZWN0IH0gZnJvbSAnLi9ub3RpY2UtaWNvbi50eXBlcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25vdGljZS1pY29uJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxuei1iYWRnZSAqbmdJZj1cImRhdGE/Lmxlbmd0aCA9PT0gMFwiIFtuekNvdW50XT1cImNvdW50XCI+XHJcbiAgICA8aSBjbGFzcz1cImFudGljb24gYW50aWNvbi1iZWxsXCI+PC9pPlxyXG4gIDwvbnotYmFkZ2U+XHJcbiAgPG56LXBvcG92ZXIgKm5nSWY9XCJkYXRhPy5sZW5ndGggPiAwXCJcclxuICAgIFtuelZpc2libGVdPVwicG9wb3ZlclZpc2libGVcIiAobnpWaXNpYmxlQ2hhbmdlKT1cIm9uVmlzaWJsZUNoYW5nZSgkZXZlbnQpXCIgbnpUcmlnZ2VyPVwiY2xpY2tcIlxyXG4gICAgbnpQbGFjZW1lbnQ9XCJib3R0b21SaWdodFwiXHJcbiAgICBuek92ZXJsYXlDbGFzc05hbWU9XCJub3RpY2UtaWNvblwiPlxyXG4gICAgPGRpdiBuei1wb3BvdmVyIGNsYXNzPVwiYWxhaW4tZGVmYXVsdF9fbmF2LWl0ZW0gbm90aWNlLWljb25fX2l0ZW1cIj5cclxuICAgICAgPG56LWJhZGdlIFtuekNvdW50XT1cImNvdW50XCI+XHJcbiAgICAgICAgPGkgY2xhc3M9XCJhbnRpY29uIGFudGljb24tYmVsbFwiPjwvaT5cclxuICAgICAgPC9uei1iYWRnZT5cclxuICAgIDwvZGl2PlxyXG4gICAgPG5nLXRlbXBsYXRlICNuelRlbXBsYXRlPlxyXG4gICAgICA8bnotc3BpbiBbbnpTcGlubmluZ109XCJsb2FkaW5nXCIgW256RGVsYXldPVwiMFwiPlxyXG4gICAgICAgIDxuei10YWJzZXQ+XHJcbiAgICAgICAgICA8bnotdGFiICpuZ0Zvcj1cImxldCBpIG9mIGRhdGFcIiBbbnpUaXRsZV09XCJpLnRpdGxlXCI+XHJcbiAgICAgICAgICAgIDxub3RpY2UtaWNvbi10YWJcclxuICAgICAgICAgICAgICBbbG9jYWxlXT1cImxvY2FsZVwiXHJcbiAgICAgICAgICAgICAgW2RhdGFdPVwiaVwiXHJcbiAgICAgICAgICAgICAgKHNlbGVjdCk9XCJvblNlbGVjdCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAoY2xlYXIpPVwib25DbGVhcigkZXZlbnQpXCI+PC9ub3RpY2UtaWNvbi10YWI+XHJcbiAgICAgICAgICA8L256LXRhYj5cclxuICAgICAgICA8L256LXRhYnNldD5cclxuICAgICAgPC9uei1zcGluPlxyXG4gICAgPC9uZy10ZW1wbGF0ZT5cclxuICA8L256LXBvcG92ZXI+XHJcbiAgYCxcclxuICBob3N0OiB7ICdbY2xhc3Mubm90aWNlLWljb25fX2J0bl0nOiAndHJ1ZScgfSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE5vdGljZUljb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgaTE4biQ6IFN1YnNjcmlwdGlvbjtcclxuICBsb2NhbGU6IGFueSA9IHt9O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGRhdGE6IE5vdGljZUl0ZW1bXSA9IFtdO1xyXG5cclxuICAvKiogw6XCm8K+w6bCoMKHw6TCuMKKw6fCmsKEw6bCtsKIw6bCgcKvw6bCgMK7w6bClcKwICovXHJcbiAgQElucHV0KClcclxuICBASW5wdXROdW1iZXIoKVxyXG4gIGNvdW50OiBudW1iZXI7XHJcblxyXG4gIC8qKiDDpcK8wrnDpcKHwrrDpcKNwqHDp8KJwofDpcKKwqDDqMK9wr3Dp8KKwrbDpsKAwoEgKi9cclxuICBASW5wdXQoKVxyXG4gIEBJbnB1dEJvb2xlYW4oKVxyXG4gIGxvYWRpbmcgPSBmYWxzZTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgc2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxOb3RpY2VJY29uU2VsZWN0PigpO1xyXG4gIEBPdXRwdXQoKVxyXG4gIGNsZWFyID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcblxyXG4gIC8qKiDDpsKJwovDpcKKwqjDpsKOwqfDpcKIwrZQb3BvdmVyw6bCmMK+w6fCpMK6ICovXHJcbiAgQElucHV0KClcclxuICBASW5wdXRCb29sZWFuKClcclxuICBwb3BvdmVyVmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwb3BvdmVyVmlzaWJsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpMThuOiBEZWxvbkxvY2FsZVNlcnZpY2UpIHtcclxuICAgIHRoaXMuaTE4biQgPSB0aGlzLmkxOG4uY2hhbmdlLnN1YnNjcmliZShcclxuICAgICAgKCkgPT4gKHRoaXMubG9jYWxlID0gdGhpcy5pMThuLmdldERhdGEoJ25vdGljZUljb24nKSksXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgb25WaXNpYmxlQ2hhbmdlKHJlc3VsdDogYm9vbGVhbikge1xyXG4gICAgdGhpcy5wb3BvdmVyVmlzaWJsZUNoYW5nZS5lbWl0KHJlc3VsdCk7XHJcbiAgfVxyXG5cclxuICBvblNlbGVjdChpOiBhbnkpIHtcclxuICAgIHRoaXMuc2VsZWN0LmVtaXQoaSk7XHJcbiAgfVxyXG5cclxuICBvbkNsZWFyKHRpdGxlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuY2xlYXIuZW1pdCh0aXRsZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuaTE4biQudW5zdWJzY3JpYmUoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdab3Jyb0FudGRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkJztcclxuaW1wb3J0IHsgRGVsb25Mb2NhbGVNb2R1bGUgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xyXG5cclxuaW1wb3J0IHsgTm90aWNlSWNvbkNvbXBvbmVudCB9IGZyb20gJy4vbm90aWNlLWljb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgTm90aWNlSWNvblRhYkNvbXBvbmVudCB9IGZyb20gJy4vbm90aWNlLWljb24tdGFiLmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCBDT01QT05FTlRTID0gW05vdGljZUljb25Db21wb25lbnRdO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBEZWxvbkxvY2FsZU1vZHVsZSwgTmdab3Jyb0FudGRNb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogWy4uLkNPTVBPTkVOVFMsIE5vdGljZUljb25UYWJDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFsuLi5DT01QT05FTlRTXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE5vdGljZUljb25Nb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHsgbmdNb2R1bGU6IE5vdGljZUljb25Nb2R1bGUsIHByb3ZpZGVyczogW10gfTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O3NCQXFDZ0IsRUFBRTtzQkFJUCxJQUFJLFlBQVksRUFBb0I7cUJBRXJDLElBQUksWUFBWSxFQUFVOzs7Ozs7SUFFbEMsd0NBQU87Ozs7SUFBUCxVQUFRLElBQWdCO1FBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxtQkFBbUI7WUFDakMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSztZQUN0QixJQUFJLE1BQUE7U0FDTCxFQUFDLENBQUM7S0FDSjs7OztJQUVELHdDQUFPOzs7SUFBUDtRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDbEM7O2dCQW5ERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsUUFBUSxFQUFFLGkzQ0EyQlQ7b0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztpQkFDM0I7Ozt5QkFFRSxLQUFLO3VCQUVMLEtBQUs7eUJBRUwsTUFBTTt3QkFFTixNQUFNOztpQ0ExQ1Q7Ozs7Ozs7O0lDNEVFLDZCQUFvQixJQUF3QjtRQUE1QyxpQkFJQztRQUptQixTQUFJLEdBQUosSUFBSSxDQUFvQjtzQkE1QjlCLEVBQUU7b0JBR0ssRUFBRTs7Ozt1QkFVYixLQUFLO3NCQUdOLElBQUksWUFBWSxFQUFvQjtxQkFFckMsSUFBSSxZQUFZLEVBQVU7Ozs7OEJBS2pCLEtBQUs7b0NBR0MsSUFBSSxZQUFZLEVBQVc7UUFHaEQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQ3JDLGNBQU0sUUFBQyxLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFDLENBQ3RELENBQUM7S0FDSDs7Ozs7SUFFRCw2Q0FBZTs7OztJQUFmLFVBQWdCLE1BQWU7UUFDN0IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUN4Qzs7Ozs7SUFFRCxzQ0FBUTs7OztJQUFSLFVBQVMsQ0FBTTtRQUNiLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3JCOzs7OztJQUVELHFDQUFPOzs7O0lBQVAsVUFBUSxLQUFhO1FBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3hCOzs7O0lBRUQseUNBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUMxQjs7Z0JBbkZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsUUFBUSxFQUFFLG8vQkEyQlQ7b0JBQ0QsSUFBSSxFQUFFLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxFQUFFO29CQUM1QyxtQkFBbUIsRUFBRSxLQUFLO2lCQUMzQjs7OztnQkFyQ1Esa0JBQWtCOzs7dUJBMEN4QixLQUFLO3dCQUlMLEtBQUs7MEJBS0wsS0FBSzt5QkFJTCxNQUFNO3dCQUVOLE1BQU07aUNBSU4sS0FBSzt1Q0FJTCxNQUFNOzs7UUFsQk4sV0FBVyxFQUFFOzs7O1FBS2IsWUFBWSxFQUFFOzs7O1FBVWQsWUFBWSxFQUFFOzs7OEJBdEVqQjs7Ozs7Ozs7QUNRQSxJQUFNLFVBQVUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7Ozs7Ozs7SUFRaEMsd0JBQU87OztJQUFkO1FBQ0UsT0FBTyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUM7S0FDdEQ7O2dCQVJGLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLENBQUM7b0JBQzdELFlBQVksV0FBTSxVQUFVLEdBQUUsc0JBQXNCLEVBQUM7b0JBQ3JELE9BQU8sV0FBTSxVQUFVLENBQUM7aUJBQ3pCOzsyQkFkRDs7Ozs7Ozs7Ozs7Ozs7OyJ9