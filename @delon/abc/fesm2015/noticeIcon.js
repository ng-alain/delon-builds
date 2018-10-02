import { Component, Input, Output, EventEmitter, NgModule } from '@angular/core';
import { __decorate, __metadata } from 'tslib';
import { DelonLocaleService, DelonLocaleModule } from '@delon/theme';
import { InputNumber, InputBoolean } from '@delon/util';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        this.select.emit(/** @type {?} */ ({
            title: this.data.title,
            item,
        }));
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
                template: `
  <div *ngIf="data.list?.length === 0; else listTpl" class="notice-icon__notfound">
    <img class="notice-icon__notfound-img" *ngIf="data.emptyImage" src="{{data.emptyImage}}" alt="not found" />
    <p>{{data.emptyText || locale.emptyText}}</p>
  </div>
  <ng-template #listTpl>
    <nz-list [nzDataSource]="data.list" [nzRenderItem]="item">
      <ng-template #item let-item>
        <nz-list-item (click)="onClick(item)" [ngClass]="{'notice-icon__item-read': item.read}">
          <nz-list-item-meta
            [nzTitle]="nzTitle"
            [nzDescription]="nzDescription"
            [nzAvatar]="item.avatar">
            <ng-template #nzTitle>
              {{item.title}}
              <div class="notice-icon__item-extra" *ngIf="item.extra"><nz-tag [nzColor]="item.color">{{item.extra}}</nz-tag></div>
            </ng-template>
            <ng-template #nzDescription>
              <div *ngIf="item.description" class="notice-icon__item-desc">{{item.description}}</div>
              <div *ngIf="item.datetime" class="notice-icon__item-time">{{item.datetime}}</div>
            </ng-template>
          </nz-list-item-meta>
        </nz-list-item>
      </ng-template>
    </nz-list>
    <div class="notice-icon__clear" (click)="onClear()">{{ data.clearText || locale.clearText }}</div>
  </ng-template>
  `,
                preserveWhitespaces: false
            }] }
];
NoticeIconTabComponent.propDecorators = {
    locale: [{ type: Input }],
    data: [{ type: Input }],
    select: [{ type: Output }],
    clear: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NoticeIconComponent {
    /**
     * @param {?} i18n
     */
    constructor(i18n) {
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
        this.i18n$ = this.i18n.change.subscribe(() => (this.locale = this.i18n.getData('noticeIcon')));
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
    ngOnDestroy() {
        this.i18n$.unsubscribe();
    }
}
NoticeIconComponent.decorators = [
    { type: Component, args: [{
                selector: 'notice-icon',
                template: `
  <nz-badge *ngIf="data?.length === 0" [nzCount]="count">
    <i class="anticon anticon-bell"></i>
  </nz-badge>
  <nz-popover *ngIf="data?.length > 0"
    [nzVisible]="popoverVisible" (nzVisibleChange)="onVisibleChange($event)" nzTrigger="click"
    nzPlacement="bottomRight"
    nzOverlayClassName="notice-icon">
    <div nz-popover class="alain-default__nav-item notice-icon__item">
      <nz-badge [nzCount]="count">
        <i class="anticon anticon-bell"></i>
      </nz-badge>
    </div>
    <ng-template #nzTemplate>
      <nz-spin [nzSpinning]="loading" [nzDelay]="0">
        <nz-tabset>
          <nz-tab *ngFor="let i of data" [nzTitle]="i.title">
            <notice-icon-tab
              [locale]="locale"
              [data]="i"
              (select)="onSelect($event)"
              (clear)="onClear($event)"></notice-icon-tab>
          </nz-tab>
        </nz-tabset>
      </nz-spin>
    </ng-template>
  </nz-popover>
  `,
                host: { '[class.notice-icon__btn]': 'true' },
                preserveWhitespaces: false
            }] }
];
/** @nocollapse */
NoticeIconComponent.ctorParameters = () => [
    { type: DelonLocaleService }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [NoticeIconComponent];
class NoticeIconModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: NoticeIconModule, providers: [] };
    }
}
NoticeIconModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, DelonLocaleModule, NgZorroAntdModule],
                declarations: [...COMPONENTS, NoticeIconTabComponent],
                exports: [...COMPONENTS],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { NoticeIconTabComponent, NoticeIconComponent, NoticeIconModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWNlSWNvbi5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGRlbG9uL2FiYy9ub3RpY2UtaWNvbi9ub3RpY2UtaWNvbi10YWIuY29tcG9uZW50LnRzIiwibmc6Ly9AZGVsb24vYWJjL25vdGljZS1pY29uL25vdGljZS1pY29uLmNvbXBvbmVudC50cyIsIm5nOi8vQGRlbG9uL2FiYy9ub3RpY2UtaWNvbi9ub3RpY2UtaWNvbi5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTm90aWNlSXRlbSwgTm90aWNlSWNvblNlbGVjdCB9IGZyb20gJy4vbm90aWNlLWljb24udHlwZXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdub3RpY2UtaWNvbi10YWInLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPGRpdiAqbmdJZj1cImRhdGEubGlzdD8ubGVuZ3RoID09PSAwOyBlbHNlIGxpc3RUcGxcIiBjbGFzcz1cIm5vdGljZS1pY29uX19ub3Rmb3VuZFwiPlxyXG4gICAgPGltZyBjbGFzcz1cIm5vdGljZS1pY29uX19ub3Rmb3VuZC1pbWdcIiAqbmdJZj1cImRhdGEuZW1wdHlJbWFnZVwiIHNyYz1cInt7ZGF0YS5lbXB0eUltYWdlfX1cIiBhbHQ9XCJub3QgZm91bmRcIiAvPlxyXG4gICAgPHA+e3tkYXRhLmVtcHR5VGV4dCB8fCBsb2NhbGUuZW1wdHlUZXh0fX08L3A+XHJcbiAgPC9kaXY+XHJcbiAgPG5nLXRlbXBsYXRlICNsaXN0VHBsPlxyXG4gICAgPG56LWxpc3QgW256RGF0YVNvdXJjZV09XCJkYXRhLmxpc3RcIiBbbnpSZW5kZXJJdGVtXT1cIml0ZW1cIj5cclxuICAgICAgPG5nLXRlbXBsYXRlICNpdGVtIGxldC1pdGVtPlxyXG4gICAgICAgIDxuei1saXN0LWl0ZW0gKGNsaWNrKT1cIm9uQ2xpY2soaXRlbSlcIiBbbmdDbGFzc109XCJ7J25vdGljZS1pY29uX19pdGVtLXJlYWQnOiBpdGVtLnJlYWR9XCI+XHJcbiAgICAgICAgICA8bnotbGlzdC1pdGVtLW1ldGFcclxuICAgICAgICAgICAgW256VGl0bGVdPVwibnpUaXRsZVwiXHJcbiAgICAgICAgICAgIFtuekRlc2NyaXB0aW9uXT1cIm56RGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICBbbnpBdmF0YXJdPVwiaXRlbS5hdmF0YXJcIj5cclxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNuelRpdGxlPlxyXG4gICAgICAgICAgICAgIHt7aXRlbS50aXRsZX19XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdGljZS1pY29uX19pdGVtLWV4dHJhXCIgKm5nSWY9XCJpdGVtLmV4dHJhXCI+PG56LXRhZyBbbnpDb2xvcl09XCJpdGVtLmNvbG9yXCI+e3tpdGVtLmV4dHJhfX08L256LXRhZz48L2Rpdj5cclxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNuekRlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJpdGVtLmRlc2NyaXB0aW9uXCIgY2xhc3M9XCJub3RpY2UtaWNvbl9faXRlbS1kZXNjXCI+e3tpdGVtLmRlc2NyaXB0aW9ufX08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiaXRlbS5kYXRldGltZVwiIGNsYXNzPVwibm90aWNlLWljb25fX2l0ZW0tdGltZVwiPnt7aXRlbS5kYXRldGltZX19PC9kaXY+XHJcbiAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICA8L256LWxpc3QtaXRlbS1tZXRhPlxyXG4gICAgICAgIDwvbnotbGlzdC1pdGVtPlxyXG4gICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgPC9uei1saXN0PlxyXG4gICAgPGRpdiBjbGFzcz1cIm5vdGljZS1pY29uX19jbGVhclwiIChjbGljayk9XCJvbkNsZWFyKClcIj57eyBkYXRhLmNsZWFyVGV4dCB8fCBsb2NhbGUuY2xlYXJUZXh0IH19PC9kaXY+XHJcbiAgPC9uZy10ZW1wbGF0ZT5cclxuICBgLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTm90aWNlSWNvblRhYkNvbXBvbmVudCB7XHJcbiAgQElucHV0KClcclxuICBsb2NhbGU6IGFueSA9IHt9O1xyXG4gIEBJbnB1dCgpXHJcbiAgZGF0YTogTm90aWNlSXRlbTtcclxuICBAT3V0cHV0KClcclxuICBzZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPE5vdGljZUljb25TZWxlY3Q+KCk7XHJcbiAgQE91dHB1dCgpXHJcbiAgY2xlYXIgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuXHJcbiAgb25DbGljayhpdGVtOiBOb3RpY2VJdGVtKSB7XHJcbiAgICB0aGlzLnNlbGVjdC5lbWl0KDxOb3RpY2VJY29uU2VsZWN0PntcclxuICAgICAgdGl0bGU6IHRoaXMuZGF0YS50aXRsZSxcclxuICAgICAgaXRlbSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25DbGVhcigpIHtcclxuICAgIHRoaXMuY2xlYXIuZW1pdCh0aGlzLmRhdGEudGl0bGUpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIE9uRGVzdHJveSxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IERlbG9uTG9jYWxlU2VydmljZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XHJcbmltcG9ydCB7IElucHV0TnVtYmVyLCBJbnB1dEJvb2xlYW4gfSBmcm9tICdAZGVsb24vdXRpbCc7XHJcblxyXG5pbXBvcnQgeyBOb3RpY2VJdGVtLCBOb3RpY2VJY29uU2VsZWN0IH0gZnJvbSAnLi9ub3RpY2UtaWNvbi50eXBlcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25vdGljZS1pY29uJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxuei1iYWRnZSAqbmdJZj1cImRhdGE/Lmxlbmd0aCA9PT0gMFwiIFtuekNvdW50XT1cImNvdW50XCI+XHJcbiAgICA8aSBjbGFzcz1cImFudGljb24gYW50aWNvbi1iZWxsXCI+PC9pPlxyXG4gIDwvbnotYmFkZ2U+XHJcbiAgPG56LXBvcG92ZXIgKm5nSWY9XCJkYXRhPy5sZW5ndGggPiAwXCJcclxuICAgIFtuelZpc2libGVdPVwicG9wb3ZlclZpc2libGVcIiAobnpWaXNpYmxlQ2hhbmdlKT1cIm9uVmlzaWJsZUNoYW5nZSgkZXZlbnQpXCIgbnpUcmlnZ2VyPVwiY2xpY2tcIlxyXG4gICAgbnpQbGFjZW1lbnQ9XCJib3R0b21SaWdodFwiXHJcbiAgICBuek92ZXJsYXlDbGFzc05hbWU9XCJub3RpY2UtaWNvblwiPlxyXG4gICAgPGRpdiBuei1wb3BvdmVyIGNsYXNzPVwiYWxhaW4tZGVmYXVsdF9fbmF2LWl0ZW0gbm90aWNlLWljb25fX2l0ZW1cIj5cclxuICAgICAgPG56LWJhZGdlIFtuekNvdW50XT1cImNvdW50XCI+XHJcbiAgICAgICAgPGkgY2xhc3M9XCJhbnRpY29uIGFudGljb24tYmVsbFwiPjwvaT5cclxuICAgICAgPC9uei1iYWRnZT5cclxuICAgIDwvZGl2PlxyXG4gICAgPG5nLXRlbXBsYXRlICNuelRlbXBsYXRlPlxyXG4gICAgICA8bnotc3BpbiBbbnpTcGlubmluZ109XCJsb2FkaW5nXCIgW256RGVsYXldPVwiMFwiPlxyXG4gICAgICAgIDxuei10YWJzZXQ+XHJcbiAgICAgICAgICA8bnotdGFiICpuZ0Zvcj1cImxldCBpIG9mIGRhdGFcIiBbbnpUaXRsZV09XCJpLnRpdGxlXCI+XHJcbiAgICAgICAgICAgIDxub3RpY2UtaWNvbi10YWJcclxuICAgICAgICAgICAgICBbbG9jYWxlXT1cImxvY2FsZVwiXHJcbiAgICAgICAgICAgICAgW2RhdGFdPVwiaVwiXHJcbiAgICAgICAgICAgICAgKHNlbGVjdCk9XCJvblNlbGVjdCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAoY2xlYXIpPVwib25DbGVhcigkZXZlbnQpXCI+PC9ub3RpY2UtaWNvbi10YWI+XHJcbiAgICAgICAgICA8L256LXRhYj5cclxuICAgICAgICA8L256LXRhYnNldD5cclxuICAgICAgPC9uei1zcGluPlxyXG4gICAgPC9uZy10ZW1wbGF0ZT5cclxuICA8L256LXBvcG92ZXI+XHJcbiAgYCxcclxuICBob3N0OiB7ICdbY2xhc3Mubm90aWNlLWljb25fX2J0bl0nOiAndHJ1ZScgfSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE5vdGljZUljb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgaTE4biQ6IFN1YnNjcmlwdGlvbjtcclxuICBsb2NhbGU6IGFueSA9IHt9O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGRhdGE6IE5vdGljZUl0ZW1bXSA9IFtdO1xyXG5cclxuICAvKiogw6XCm8K+w6bCoMKHw6TCuMKKw6fCmsKEw6bCtsKIw6bCgcKvw6bCgMK7w6bClcKwICovXHJcbiAgQElucHV0KClcclxuICBASW5wdXROdW1iZXIoKVxyXG4gIGNvdW50OiBudW1iZXI7XHJcblxyXG4gIC8qKiDDpcK8wrnDpcKHwrrDpcKNwqHDp8KJwofDpcKKwqDDqMK9wr3Dp8KKwrbDpsKAwoEgKi9cclxuICBASW5wdXQoKVxyXG4gIEBJbnB1dEJvb2xlYW4oKVxyXG4gIGxvYWRpbmcgPSBmYWxzZTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgc2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxOb3RpY2VJY29uU2VsZWN0PigpO1xyXG4gIEBPdXRwdXQoKVxyXG4gIGNsZWFyID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcblxyXG4gIC8qKiDDpsKJwovDpcKKwqjDpsKOwqfDpcKIwrZQb3BvdmVyw6bCmMK+w6fCpMK6ICovXHJcbiAgQElucHV0KClcclxuICBASW5wdXRCb29sZWFuKClcclxuICBwb3BvdmVyVmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwb3BvdmVyVmlzaWJsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpMThuOiBEZWxvbkxvY2FsZVNlcnZpY2UpIHtcclxuICAgIHRoaXMuaTE4biQgPSB0aGlzLmkxOG4uY2hhbmdlLnN1YnNjcmliZShcclxuICAgICAgKCkgPT4gKHRoaXMubG9jYWxlID0gdGhpcy5pMThuLmdldERhdGEoJ25vdGljZUljb24nKSksXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgb25WaXNpYmxlQ2hhbmdlKHJlc3VsdDogYm9vbGVhbikge1xyXG4gICAgdGhpcy5wb3BvdmVyVmlzaWJsZUNoYW5nZS5lbWl0KHJlc3VsdCk7XHJcbiAgfVxyXG5cclxuICBvblNlbGVjdChpOiBhbnkpIHtcclxuICAgIHRoaXMuc2VsZWN0LmVtaXQoaSk7XHJcbiAgfVxyXG5cclxuICBvbkNsZWFyKHRpdGxlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuY2xlYXIuZW1pdCh0aXRsZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuaTE4biQudW5zdWJzY3JpYmUoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdab3Jyb0FudGRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkJztcclxuaW1wb3J0IHsgRGVsb25Mb2NhbGVNb2R1bGUgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xyXG5cclxuaW1wb3J0IHsgTm90aWNlSWNvbkNvbXBvbmVudCB9IGZyb20gJy4vbm90aWNlLWljb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgTm90aWNlSWNvblRhYkNvbXBvbmVudCB9IGZyb20gJy4vbm90aWNlLWljb24tdGFiLmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCBDT01QT05FTlRTID0gW05vdGljZUljb25Db21wb25lbnRdO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBEZWxvbkxvY2FsZU1vZHVsZSwgTmdab3Jyb0FudGRNb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogWy4uLkNPTVBPTkVOVFMsIE5vdGljZUljb25UYWJDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFsuLi5DT01QT05FTlRTXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE5vdGljZUljb25Nb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHsgbmdNb2R1bGU6IE5vdGljZUljb25Nb2R1bGUsIHByb3ZpZGVyczogW10gfTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O3NCQXFDZ0IsRUFBRTtzQkFJUCxJQUFJLFlBQVksRUFBb0I7cUJBRXJDLElBQUksWUFBWSxFQUFVOzs7Ozs7SUFFbEMsT0FBTyxDQUFDLElBQWdCO1FBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxtQkFBbUI7WUFDakMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSztZQUN0QixJQUFJO1NBQ0wsRUFBQyxDQUFDO0tBQ0o7Ozs7SUFFRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNsQzs7O1lBbkRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTJCVDtnQkFDRCxtQkFBbUIsRUFBRSxLQUFLO2FBQzNCOzs7cUJBRUUsS0FBSzttQkFFTCxLQUFLO3FCQUVMLE1BQU07b0JBRU4sTUFBTTs7Ozs7Ozs7Ozs7SUNrQ1AsWUFBb0IsSUFBd0I7UUFBeEIsU0FBSSxHQUFKLElBQUksQ0FBb0I7c0JBNUI5QixFQUFFO29CQUdLLEVBQUU7Ozs7dUJBVWIsS0FBSztzQkFHTixJQUFJLFlBQVksRUFBb0I7cUJBRXJDLElBQUksWUFBWSxFQUFVOzs7OzhCQUtqQixLQUFLO29DQUdDLElBQUksWUFBWSxFQUFXO1FBR2hELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUNyQyxPQUFPLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FDdEQsQ0FBQztLQUNIOzs7OztJQUVELGVBQWUsQ0FBQyxNQUFlO1FBQzdCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDeEM7Ozs7O0lBRUQsUUFBUSxDQUFDLENBQU07UUFDYixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNyQjs7Ozs7SUFFRCxPQUFPLENBQUMsS0FBYTtRQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN4Qjs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQzFCOzs7WUFuRkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTJCVDtnQkFDRCxJQUFJLEVBQUUsRUFBRSwwQkFBMEIsRUFBRSxNQUFNLEVBQUU7Z0JBQzVDLG1CQUFtQixFQUFFLEtBQUs7YUFDM0I7Ozs7WUFyQ1Esa0JBQWtCOzs7bUJBMEN4QixLQUFLO29CQUlMLEtBQUs7c0JBS0wsS0FBSztxQkFJTCxNQUFNO29CQUVOLE1BQU07NkJBSU4sS0FBSzttQ0FJTCxNQUFNOzs7SUFsQk4sV0FBVyxFQUFFOzs7O0lBS2IsWUFBWSxFQUFFOzs7O0lBVWQsWUFBWSxFQUFFOzs7Ozs7OztBQ3RFakI7QUFRQSxNQUFNLFVBQVUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFPekM7Ozs7SUFDRSxPQUFPLE9BQU87UUFDWixPQUFPLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsQ0FBQztLQUN0RDs7O1lBUkYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxpQkFBaUIsQ0FBQztnQkFDN0QsWUFBWSxFQUFFLENBQUMsR0FBRyxVQUFVLEVBQUUsc0JBQXNCLENBQUM7Z0JBQ3JELE9BQU8sRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDO2FBQ3pCOzs7Ozs7Ozs7Ozs7Ozs7In0=