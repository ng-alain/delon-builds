import { Component, Input, Output, EventEmitter, NgModule } from '@angular/core';
import { __decorate, __metadata, __spread } from 'tslib';
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWNlSWNvbi5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGRlbG9uL2FiYy9ub3RpY2UtaWNvbi9ub3RpY2UtaWNvbi10YWIuY29tcG9uZW50LnRzIiwibmc6Ly9AZGVsb24vYWJjL25vdGljZS1pY29uL25vdGljZS1pY29uLmNvbXBvbmVudC50cyIsIm5nOi8vQGRlbG9uL2FiYy9ub3RpY2UtaWNvbi9ub3RpY2UtaWNvbi5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5vdGljZUl0ZW0sIE5vdGljZUljb25TZWxlY3QgfSBmcm9tICcuL25vdGljZS1pY29uLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm90aWNlLWljb24tdGFiJyxcbiAgdGVtcGxhdGU6IGBcbiAgPGRpdiAqbmdJZj1cImRhdGEubGlzdD8ubGVuZ3RoID09PSAwOyBlbHNlIGxpc3RUcGxcIiBjbGFzcz1cIm5vdGljZS1pY29uX19ub3Rmb3VuZFwiPlxuICAgIDxpbWcgY2xhc3M9XCJub3RpY2UtaWNvbl9fbm90Zm91bmQtaW1nXCIgKm5nSWY9XCJkYXRhLmVtcHR5SW1hZ2VcIiBzcmM9XCJ7e2RhdGEuZW1wdHlJbWFnZX19XCIgYWx0PVwibm90IGZvdW5kXCIgLz5cbiAgICA8cD57e2RhdGEuZW1wdHlUZXh0IHx8IGxvY2FsZS5lbXB0eVRleHR9fTwvcD5cbiAgPC9kaXY+XG4gIDxuZy10ZW1wbGF0ZSAjbGlzdFRwbD5cbiAgICA8bnotbGlzdCBbbnpEYXRhU291cmNlXT1cImRhdGEubGlzdFwiIFtuelJlbmRlckl0ZW1dPVwiaXRlbVwiPlxuICAgICAgPG5nLXRlbXBsYXRlICNpdGVtIGxldC1pdGVtPlxuICAgICAgICA8bnotbGlzdC1pdGVtIChjbGljayk9XCJvbkNsaWNrKGl0ZW0pXCIgW25nQ2xhc3NdPVwieydub3RpY2UtaWNvbl9faXRlbS1yZWFkJzogaXRlbS5yZWFkfVwiPlxuICAgICAgICAgIDxuei1saXN0LWl0ZW0tbWV0YVxuICAgICAgICAgICAgW256VGl0bGVdPVwibnpUaXRsZVwiXG4gICAgICAgICAgICBbbnpEZXNjcmlwdGlvbl09XCJuekRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgIFtuekF2YXRhcl09XCJpdGVtLmF2YXRhclwiPlxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNuelRpdGxlPlxuICAgICAgICAgICAgICB7e2l0ZW0udGl0bGV9fVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm90aWNlLWljb25fX2l0ZW0tZXh0cmFcIiAqbmdJZj1cIml0ZW0uZXh0cmFcIj48bnotdGFnIFtuekNvbG9yXT1cIml0ZW0uY29sb3JcIj57e2l0ZW0uZXh0cmF9fTwvbnotdGFnPjwvZGl2PlxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjbnpEZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cIml0ZW0uZGVzY3JpcHRpb25cIiBjbGFzcz1cIm5vdGljZS1pY29uX19pdGVtLWRlc2NcIj57e2l0ZW0uZGVzY3JpcHRpb259fTwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiaXRlbS5kYXRldGltZVwiIGNsYXNzPVwibm90aWNlLWljb25fX2l0ZW0tdGltZVwiPnt7aXRlbS5kYXRldGltZX19PC9kaXY+XG4gICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgIDwvbnotbGlzdC1pdGVtLW1ldGE+XG4gICAgICAgIDwvbnotbGlzdC1pdGVtPlxuICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8L256LWxpc3Q+XG4gICAgPGRpdiBjbGFzcz1cIm5vdGljZS1pY29uX19jbGVhclwiIChjbGljayk9XCJvbkNsZWFyKClcIj57eyBkYXRhLmNsZWFyVGV4dCB8fCBsb2NhbGUuY2xlYXJUZXh0IH19PC9kaXY+XG4gIDwvbmctdGVtcGxhdGU+XG4gIGAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBOb3RpY2VJY29uVGFiQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgbG9jYWxlOiBhbnkgPSB7fTtcbiAgQElucHV0KClcbiAgZGF0YTogTm90aWNlSXRlbTtcbiAgQE91dHB1dCgpXG4gIHNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8Tm90aWNlSWNvblNlbGVjdD4oKTtcbiAgQE91dHB1dCgpXG4gIGNsZWFyID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgb25DbGljayhpdGVtOiBOb3RpY2VJdGVtKSB7XG4gICAgdGhpcy5zZWxlY3QuZW1pdCg8Tm90aWNlSWNvblNlbGVjdD57XG4gICAgICB0aXRsZTogdGhpcy5kYXRhLnRpdGxlLFxuICAgICAgaXRlbSxcbiAgICB9KTtcbiAgfVxuXG4gIG9uQ2xlYXIoKSB7XG4gICAgdGhpcy5jbGVhci5lbWl0KHRoaXMuZGF0YS50aXRsZSk7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBEZWxvbkxvY2FsZVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgSW5wdXROdW1iZXIsIElucHV0Qm9vbGVhbiB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuaW1wb3J0IHsgTm90aWNlSXRlbSwgTm90aWNlSWNvblNlbGVjdCB9IGZyb20gJy4vbm90aWNlLWljb24udHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3RpY2UtaWNvbicsXG4gIHRlbXBsYXRlOiBgXG4gIDxuei1iYWRnZSAqbmdJZj1cImRhdGE/Lmxlbmd0aCA9PT0gMFwiIFtuekNvdW50XT1cImNvdW50XCI+XG4gICAgPGkgY2xhc3M9XCJhbnRpY29uIGFudGljb24tYmVsbFwiPjwvaT5cbiAgPC9uei1iYWRnZT5cbiAgPG56LXBvcG92ZXIgKm5nSWY9XCJkYXRhPy5sZW5ndGggPiAwXCJcbiAgICBbbnpWaXNpYmxlXT1cInBvcG92ZXJWaXNpYmxlXCIgKG56VmlzaWJsZUNoYW5nZSk9XCJvblZpc2libGVDaGFuZ2UoJGV2ZW50KVwiIG56VHJpZ2dlcj1cImNsaWNrXCJcbiAgICBuelBsYWNlbWVudD1cImJvdHRvbVJpZ2h0XCJcbiAgICBuek92ZXJsYXlDbGFzc05hbWU9XCJub3RpY2UtaWNvblwiPlxuICAgIDxkaXYgbnotcG9wb3ZlciBjbGFzcz1cImFsYWluLWRlZmF1bHRfX25hdi1pdGVtIG5vdGljZS1pY29uX19pdGVtXCI+XG4gICAgICA8bnotYmFkZ2UgW256Q291bnRdPVwiY291bnRcIj5cbiAgICAgICAgPGkgY2xhc3M9XCJhbnRpY29uIGFudGljb24tYmVsbFwiPjwvaT5cbiAgICAgIDwvbnotYmFkZ2U+XG4gICAgPC9kaXY+XG4gICAgPG5nLXRlbXBsYXRlICNuelRlbXBsYXRlPlxuICAgICAgPG56LXNwaW4gW256U3Bpbm5pbmddPVwibG9hZGluZ1wiIFtuekRlbGF5XT1cIjBcIj5cbiAgICAgICAgPG56LXRhYnNldD5cbiAgICAgICAgICA8bnotdGFiICpuZ0Zvcj1cImxldCBpIG9mIGRhdGFcIiBbbnpUaXRsZV09XCJpLnRpdGxlXCI+XG4gICAgICAgICAgICA8bm90aWNlLWljb24tdGFiXG4gICAgICAgICAgICAgIFtsb2NhbGVdPVwibG9jYWxlXCJcbiAgICAgICAgICAgICAgW2RhdGFdPVwiaVwiXG4gICAgICAgICAgICAgIChzZWxlY3QpPVwib25TZWxlY3QoJGV2ZW50KVwiXG4gICAgICAgICAgICAgIChjbGVhcik9XCJvbkNsZWFyKCRldmVudClcIj48L25vdGljZS1pY29uLXRhYj5cbiAgICAgICAgICA8L256LXRhYj5cbiAgICAgICAgPC9uei10YWJzZXQ+XG4gICAgICA8L256LXNwaW4+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgPC9uei1wb3BvdmVyPlxuICBgLFxuICBob3N0OiB7ICdbY2xhc3Mubm90aWNlLWljb25fX2J0bl0nOiAndHJ1ZScgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIE5vdGljZUljb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGkxOG4kOiBTdWJzY3JpcHRpb247XG4gIGxvY2FsZTogYW55ID0ge307XG5cbiAgQElucHV0KClcbiAgZGF0YTogTm90aWNlSXRlbVtdID0gW107XG5cbiAgLyoqIMOlwpvCvsOmwqDCh8OkwrjCisOnwprChMOmwrbCiMOmwoHCr8OmwoDCu8OmwpXCsCAqL1xuICBASW5wdXQoKVxuICBASW5wdXROdW1iZXIoKVxuICBjb3VudDogbnVtYmVyO1xuXG4gIC8qKiDDpcK8wrnDpcKHwrrDpcKNwqHDp8KJwofDpcKKwqDDqMK9wr3Dp8KKwrbDpsKAwoEgKi9cbiAgQElucHV0KClcbiAgQElucHV0Qm9vbGVhbigpXG4gIGxvYWRpbmcgPSBmYWxzZTtcblxuICBAT3V0cHV0KClcbiAgc2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxOb3RpY2VJY29uU2VsZWN0PigpO1xuICBAT3V0cHV0KClcbiAgY2xlYXIgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICAvKiogw6bCicKLw6XCisKow6bCjsKnw6XCiMK2UG9wb3ZlcsOmwpjCvsOnwqTCuiAqL1xuICBASW5wdXQoKVxuICBASW5wdXRCb29sZWFuKClcbiAgcG9wb3ZlclZpc2libGUgPSBmYWxzZTtcblxuICBAT3V0cHV0KClcbiAgcG9wb3ZlclZpc2libGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpMThuOiBEZWxvbkxvY2FsZVNlcnZpY2UpIHtcbiAgICB0aGlzLmkxOG4kID0gdGhpcy5pMThuLmNoYW5nZS5zdWJzY3JpYmUoXG4gICAgICAoKSA9PiAodGhpcy5sb2NhbGUgPSB0aGlzLmkxOG4uZ2V0RGF0YSgnbm90aWNlSWNvbicpKSxcbiAgICApO1xuICB9XG5cbiAgb25WaXNpYmxlQ2hhbmdlKHJlc3VsdDogYm9vbGVhbikge1xuICAgIHRoaXMucG9wb3ZlclZpc2libGVDaGFuZ2UuZW1pdChyZXN1bHQpO1xuICB9XG5cbiAgb25TZWxlY3QoaTogYW55KSB7XG4gICAgdGhpcy5zZWxlY3QuZW1pdChpKTtcbiAgfVxuXG4gIG9uQ2xlYXIodGl0bGU6IHN0cmluZykge1xuICAgIHRoaXMuY2xlYXIuZW1pdCh0aXRsZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmkxOG4kLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdab3Jyb0FudGRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkJztcbmltcG9ydCB7IERlbG9uTG9jYWxlTW9kdWxlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcblxuaW1wb3J0IHsgTm90aWNlSWNvbkNvbXBvbmVudCB9IGZyb20gJy4vbm90aWNlLWljb24uY29tcG9uZW50JztcbmltcG9ydCB7IE5vdGljZUljb25UYWJDb21wb25lbnQgfSBmcm9tICcuL25vdGljZS1pY29uLXRhYi5jb21wb25lbnQnO1xuXG5jb25zdCBDT01QT05FTlRTID0gW05vdGljZUljb25Db21wb25lbnRdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBEZWxvbkxvY2FsZU1vZHVsZSwgTmdab3Jyb0FudGRNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5DT01QT05FTlRTLCBOb3RpY2VJY29uVGFiQ29tcG9uZW50XSxcbiAgZXhwb3J0czogWy4uLkNPTVBPTkVOVFNdLFxufSlcbmV4cG9ydCBjbGFzcyBOb3RpY2VJY29uTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHsgbmdNb2R1bGU6IE5vdGljZUljb25Nb2R1bGUsIHByb3ZpZGVyczogW10gfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O3NCQXFDZ0IsRUFBRTtzQkFJUCxJQUFJLFlBQVksRUFBb0I7cUJBRXJDLElBQUksWUFBWSxFQUFVOzs7Ozs7SUFFbEMsd0NBQU87Ozs7SUFBUCxVQUFRLElBQWdCO1FBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxtQkFBbUI7WUFDakMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSztZQUN0QixJQUFJLE1BQUE7U0FDTCxFQUFDLENBQUM7S0FDSjs7OztJQUVELHdDQUFPOzs7SUFBUDtRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDbEM7O2dCQW5ERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsUUFBUSxFQUFFLGkzQ0EyQlQ7b0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztpQkFDM0I7Ozt5QkFFRSxLQUFLO3VCQUVMLEtBQUs7eUJBRUwsTUFBTTt3QkFFTixNQUFNOztpQ0ExQ1Q7Ozs7Ozs7O0lDNEVFLDZCQUFvQixJQUF3QjtRQUE1QyxpQkFJQztRQUptQixTQUFJLEdBQUosSUFBSSxDQUFvQjtzQkE1QjlCLEVBQUU7b0JBR0ssRUFBRTs7Ozt1QkFVYixLQUFLO3NCQUdOLElBQUksWUFBWSxFQUFvQjtxQkFFckMsSUFBSSxZQUFZLEVBQVU7Ozs7OEJBS2pCLEtBQUs7b0NBR0MsSUFBSSxZQUFZLEVBQVc7UUFHaEQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQ3JDLGNBQU0sUUFBQyxLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFDLENBQ3RELENBQUM7S0FDSDs7Ozs7SUFFRCw2Q0FBZTs7OztJQUFmLFVBQWdCLE1BQWU7UUFDN0IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUN4Qzs7Ozs7SUFFRCxzQ0FBUTs7OztJQUFSLFVBQVMsQ0FBTTtRQUNiLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3JCOzs7OztJQUVELHFDQUFPOzs7O0lBQVAsVUFBUSxLQUFhO1FBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3hCOzs7O0lBRUQseUNBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUMxQjs7Z0JBbkZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsUUFBUSxFQUFFLG8vQkEyQlQ7b0JBQ0QsSUFBSSxFQUFFLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxFQUFFO29CQUM1QyxtQkFBbUIsRUFBRSxLQUFLO2lCQUMzQjs7OztnQkFyQ1Esa0JBQWtCOzs7dUJBMEN4QixLQUFLO3dCQUlMLEtBQUs7MEJBS0wsS0FBSzt5QkFJTCxNQUFNO3dCQUVOLE1BQU07aUNBSU4sS0FBSzt1Q0FJTCxNQUFNOzs7UUFsQk4sV0FBVyxFQUFFOzs7O1FBS2IsWUFBWSxFQUFFOzs7O1FBVWQsWUFBWSxFQUFFOzs7OEJBdEVqQjs7Ozs7Ozs7QUNRQSxJQUFNLFVBQVUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7Ozs7Ozs7SUFRaEMsd0JBQU87OztJQUFkO1FBQ0UsT0FBTyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUM7S0FDdEQ7O2dCQVJGLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLENBQUM7b0JBQzdELFlBQVksV0FBTSxVQUFVLEdBQUUsc0JBQXNCLEVBQUM7b0JBQ3JELE9BQU8sV0FBTSxVQUFVLENBQUM7aUJBQ3pCOzsyQkFkRDs7Ozs7Ozs7Ozs7Ozs7OyJ9