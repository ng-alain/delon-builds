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
    <i nz-icon type="bell"></i>
  </nz-badge>
  <nz-popover *ngIf="data?.length > 0"
    [nzVisible]="popoverVisible" (nzVisibleChange)="onVisibleChange($event)" nzTrigger="click"
    nzPlacement="bottomRight"
    nzOverlayClassName="notice-icon">
    <div nz-popover class="alain-default__nav-item notice-icon__item">
      <nz-badge [nzCount]="count">
        <i nz-icon type="bell" class="alain-default__nav-item-icon"></i>
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWNlSWNvbi5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGRlbG9uL2FiYy9ub3RpY2UtaWNvbi9ub3RpY2UtaWNvbi10YWIuY29tcG9uZW50LnRzIiwibmc6Ly9AZGVsb24vYWJjL25vdGljZS1pY29uL25vdGljZS1pY29uLmNvbXBvbmVudC50cyIsIm5nOi8vQGRlbG9uL2FiYy9ub3RpY2UtaWNvbi9ub3RpY2UtaWNvbi5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5vdGljZUl0ZW0sIE5vdGljZUljb25TZWxlY3QgfSBmcm9tICcuL25vdGljZS1pY29uLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm90aWNlLWljb24tdGFiJyxcbiAgdGVtcGxhdGU6IGBcbiAgPGRpdiAqbmdJZj1cImRhdGEubGlzdD8ubGVuZ3RoID09PSAwOyBlbHNlIGxpc3RUcGxcIiBjbGFzcz1cIm5vdGljZS1pY29uX19ub3Rmb3VuZFwiPlxuICAgIDxpbWcgY2xhc3M9XCJub3RpY2UtaWNvbl9fbm90Zm91bmQtaW1nXCIgKm5nSWY9XCJkYXRhLmVtcHR5SW1hZ2VcIiBzcmM9XCJ7e2RhdGEuZW1wdHlJbWFnZX19XCIgYWx0PVwibm90IGZvdW5kXCIgLz5cbiAgICA8cD57e2RhdGEuZW1wdHlUZXh0IHx8IGxvY2FsZS5lbXB0eVRleHR9fTwvcD5cbiAgPC9kaXY+XG4gIDxuZy10ZW1wbGF0ZSAjbGlzdFRwbD5cbiAgICA8bnotbGlzdCBbbnpEYXRhU291cmNlXT1cImRhdGEubGlzdFwiIFtuelJlbmRlckl0ZW1dPVwiaXRlbVwiPlxuICAgICAgPG5nLXRlbXBsYXRlICNpdGVtIGxldC1pdGVtPlxuICAgICAgICA8bnotbGlzdC1pdGVtIChjbGljayk9XCJvbkNsaWNrKGl0ZW0pXCIgW25nQ2xhc3NdPVwieydub3RpY2UtaWNvbl9faXRlbS1yZWFkJzogaXRlbS5yZWFkfVwiPlxuICAgICAgICAgIDxuei1saXN0LWl0ZW0tbWV0YVxuICAgICAgICAgICAgW256VGl0bGVdPVwibnpUaXRsZVwiXG4gICAgICAgICAgICBbbnpEZXNjcmlwdGlvbl09XCJuekRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgIFtuekF2YXRhcl09XCJpdGVtLmF2YXRhclwiPlxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNuelRpdGxlPlxuICAgICAgICAgICAgICB7e2l0ZW0udGl0bGV9fVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm90aWNlLWljb25fX2l0ZW0tZXh0cmFcIiAqbmdJZj1cIml0ZW0uZXh0cmFcIj48bnotdGFnIFtuekNvbG9yXT1cIml0ZW0uY29sb3JcIj57e2l0ZW0uZXh0cmF9fTwvbnotdGFnPjwvZGl2PlxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjbnpEZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cIml0ZW0uZGVzY3JpcHRpb25cIiBjbGFzcz1cIm5vdGljZS1pY29uX19pdGVtLWRlc2NcIj57e2l0ZW0uZGVzY3JpcHRpb259fTwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiaXRlbS5kYXRldGltZVwiIGNsYXNzPVwibm90aWNlLWljb25fX2l0ZW0tdGltZVwiPnt7aXRlbS5kYXRldGltZX19PC9kaXY+XG4gICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgIDwvbnotbGlzdC1pdGVtLW1ldGE+XG4gICAgICAgIDwvbnotbGlzdC1pdGVtPlxuICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8L256LWxpc3Q+XG4gICAgPGRpdiBjbGFzcz1cIm5vdGljZS1pY29uX19jbGVhclwiIChjbGljayk9XCJvbkNsZWFyKClcIj57eyBkYXRhLmNsZWFyVGV4dCB8fCBsb2NhbGUuY2xlYXJUZXh0IH19PC9kaXY+XG4gIDwvbmctdGVtcGxhdGU+XG4gIGAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBOb3RpY2VJY29uVGFiQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgbG9jYWxlOiBhbnkgPSB7fTtcbiAgQElucHV0KClcbiAgZGF0YTogTm90aWNlSXRlbTtcbiAgQE91dHB1dCgpXG4gIHNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8Tm90aWNlSWNvblNlbGVjdD4oKTtcbiAgQE91dHB1dCgpXG4gIGNsZWFyID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgb25DbGljayhpdGVtOiBOb3RpY2VJdGVtKSB7XG4gICAgdGhpcy5zZWxlY3QuZW1pdCg8Tm90aWNlSWNvblNlbGVjdD57XG4gICAgICB0aXRsZTogdGhpcy5kYXRhLnRpdGxlLFxuICAgICAgaXRlbSxcbiAgICB9KTtcbiAgfVxuXG4gIG9uQ2xlYXIoKSB7XG4gICAgdGhpcy5jbGVhci5lbWl0KHRoaXMuZGF0YS50aXRsZSk7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBEZWxvbkxvY2FsZVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgSW5wdXROdW1iZXIsIElucHV0Qm9vbGVhbiB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuaW1wb3J0IHsgTm90aWNlSXRlbSwgTm90aWNlSWNvblNlbGVjdCB9IGZyb20gJy4vbm90aWNlLWljb24udHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3RpY2UtaWNvbicsXG4gIHRlbXBsYXRlOiBgXG4gIDxuei1iYWRnZSAqbmdJZj1cImRhdGE/Lmxlbmd0aCA9PT0gMFwiIFtuekNvdW50XT1cImNvdW50XCI+XG4gICAgPGkgbnotaWNvbiB0eXBlPVwiYmVsbFwiPjwvaT5cbiAgPC9uei1iYWRnZT5cbiAgPG56LXBvcG92ZXIgKm5nSWY9XCJkYXRhPy5sZW5ndGggPiAwXCJcbiAgICBbbnpWaXNpYmxlXT1cInBvcG92ZXJWaXNpYmxlXCIgKG56VmlzaWJsZUNoYW5nZSk9XCJvblZpc2libGVDaGFuZ2UoJGV2ZW50KVwiIG56VHJpZ2dlcj1cImNsaWNrXCJcbiAgICBuelBsYWNlbWVudD1cImJvdHRvbVJpZ2h0XCJcbiAgICBuek92ZXJsYXlDbGFzc05hbWU9XCJub3RpY2UtaWNvblwiPlxuICAgIDxkaXYgbnotcG9wb3ZlciBjbGFzcz1cImFsYWluLWRlZmF1bHRfX25hdi1pdGVtIG5vdGljZS1pY29uX19pdGVtXCI+XG4gICAgICA8bnotYmFkZ2UgW256Q291bnRdPVwiY291bnRcIj5cbiAgICAgICAgPGkgbnotaWNvbiB0eXBlPVwiYmVsbFwiIGNsYXNzPVwiYWxhaW4tZGVmYXVsdF9fbmF2LWl0ZW0taWNvblwiPjwvaT5cbiAgICAgIDwvbnotYmFkZ2U+XG4gICAgPC9kaXY+XG4gICAgPG5nLXRlbXBsYXRlICNuelRlbXBsYXRlPlxuICAgICAgPG56LXNwaW4gW256U3Bpbm5pbmddPVwibG9hZGluZ1wiIFtuekRlbGF5XT1cIjBcIj5cbiAgICAgICAgPG56LXRhYnNldD5cbiAgICAgICAgICA8bnotdGFiICpuZ0Zvcj1cImxldCBpIG9mIGRhdGFcIiBbbnpUaXRsZV09XCJpLnRpdGxlXCI+XG4gICAgICAgICAgICA8bm90aWNlLWljb24tdGFiXG4gICAgICAgICAgICAgIFtsb2NhbGVdPVwibG9jYWxlXCJcbiAgICAgICAgICAgICAgW2RhdGFdPVwiaVwiXG4gICAgICAgICAgICAgIChzZWxlY3QpPVwib25TZWxlY3QoJGV2ZW50KVwiXG4gICAgICAgICAgICAgIChjbGVhcik9XCJvbkNsZWFyKCRldmVudClcIj48L25vdGljZS1pY29uLXRhYj5cbiAgICAgICAgICA8L256LXRhYj5cbiAgICAgICAgPC9uei10YWJzZXQ+XG4gICAgICA8L256LXNwaW4+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgPC9uei1wb3BvdmVyPlxuICBgLFxuICBob3N0OiB7ICdbY2xhc3Mubm90aWNlLWljb25fX2J0bl0nOiAndHJ1ZScgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIE5vdGljZUljb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGkxOG4kOiBTdWJzY3JpcHRpb247XG4gIGxvY2FsZTogYW55ID0ge307XG5cbiAgQElucHV0KClcbiAgZGF0YTogTm90aWNlSXRlbVtdID0gW107XG5cbiAgLyoqIMOlwpvCvsOmwqDCh8OkwrjCisOnwprChMOmwrbCiMOmwoHCr8OmwoDCu8OmwpXCsCAqL1xuICBASW5wdXQoKVxuICBASW5wdXROdW1iZXIoKVxuICBjb3VudDogbnVtYmVyO1xuXG4gIC8qKiDDpcK8wrnDpcKHwrrDpcKNwqHDp8KJwofDpcKKwqDDqMK9wr3Dp8KKwrbDpsKAwoEgKi9cbiAgQElucHV0KClcbiAgQElucHV0Qm9vbGVhbigpXG4gIGxvYWRpbmcgPSBmYWxzZTtcblxuICBAT3V0cHV0KClcbiAgc2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxOb3RpY2VJY29uU2VsZWN0PigpO1xuICBAT3V0cHV0KClcbiAgY2xlYXIgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICAvKiogw6bCicKLw6XCisKow6bCjsKnw6XCiMK2UG9wb3ZlcsOmwpjCvsOnwqTCuiAqL1xuICBASW5wdXQoKVxuICBASW5wdXRCb29sZWFuKClcbiAgcG9wb3ZlclZpc2libGUgPSBmYWxzZTtcblxuICBAT3V0cHV0KClcbiAgcG9wb3ZlclZpc2libGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpMThuOiBEZWxvbkxvY2FsZVNlcnZpY2UpIHtcbiAgICB0aGlzLmkxOG4kID0gdGhpcy5pMThuLmNoYW5nZS5zdWJzY3JpYmUoXG4gICAgICAoKSA9PiAodGhpcy5sb2NhbGUgPSB0aGlzLmkxOG4uZ2V0RGF0YSgnbm90aWNlSWNvbicpKSxcbiAgICApO1xuICB9XG5cbiAgb25WaXNpYmxlQ2hhbmdlKHJlc3VsdDogYm9vbGVhbikge1xuICAgIHRoaXMucG9wb3ZlclZpc2libGVDaGFuZ2UuZW1pdChyZXN1bHQpO1xuICB9XG5cbiAgb25TZWxlY3QoaTogYW55KSB7XG4gICAgdGhpcy5zZWxlY3QuZW1pdChpKTtcbiAgfVxuXG4gIG9uQ2xlYXIodGl0bGU6IHN0cmluZykge1xuICAgIHRoaXMuY2xlYXIuZW1pdCh0aXRsZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmkxOG4kLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdab3Jyb0FudGRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkJztcbmltcG9ydCB7IERlbG9uTG9jYWxlTW9kdWxlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcblxuaW1wb3J0IHsgTm90aWNlSWNvbkNvbXBvbmVudCB9IGZyb20gJy4vbm90aWNlLWljb24uY29tcG9uZW50JztcbmltcG9ydCB7IE5vdGljZUljb25UYWJDb21wb25lbnQgfSBmcm9tICcuL25vdGljZS1pY29uLXRhYi5jb21wb25lbnQnO1xuXG5jb25zdCBDT01QT05FTlRTID0gW05vdGljZUljb25Db21wb25lbnRdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBEZWxvbkxvY2FsZU1vZHVsZSwgTmdab3Jyb0FudGRNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5DT01QT05FTlRTLCBOb3RpY2VJY29uVGFiQ29tcG9uZW50XSxcbiAgZXhwb3J0czogWy4uLkNPTVBPTkVOVFNdLFxufSlcbmV4cG9ydCBjbGFzcyBOb3RpY2VJY29uTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHsgbmdNb2R1bGU6IE5vdGljZUljb25Nb2R1bGUsIHByb3ZpZGVyczogW10gfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O3NCQXFDZ0IsRUFBRTtzQkFJUCxJQUFJLFlBQVksRUFBb0I7cUJBRXJDLElBQUksWUFBWSxFQUFVOzs7Ozs7SUFFbEMsT0FBTyxDQUFDLElBQWdCO1FBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxtQkFBbUI7WUFDakMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSztZQUN0QixJQUFJO1NBQ0wsRUFBQyxDQUFDO0tBQ0o7Ozs7SUFFRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNsQzs7O1lBbkRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTJCVDtnQkFDRCxtQkFBbUIsRUFBRSxLQUFLO2FBQzNCOzs7cUJBRUUsS0FBSzttQkFFTCxLQUFLO3FCQUVMLE1BQU07b0JBRU4sTUFBTTs7Ozs7Ozs7Ozs7SUNrQ1AsWUFBb0IsSUFBd0I7UUFBeEIsU0FBSSxHQUFKLElBQUksQ0FBb0I7c0JBNUI5QixFQUFFO29CQUdLLEVBQUU7Ozs7dUJBVWIsS0FBSztzQkFHTixJQUFJLFlBQVksRUFBb0I7cUJBRXJDLElBQUksWUFBWSxFQUFVOzs7OzhCQUtqQixLQUFLO29DQUdDLElBQUksWUFBWSxFQUFXO1FBR2hELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUNyQyxPQUFPLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FDdEQsQ0FBQztLQUNIOzs7OztJQUVELGVBQWUsQ0FBQyxNQUFlO1FBQzdCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDeEM7Ozs7O0lBRUQsUUFBUSxDQUFDLENBQU07UUFDYixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNyQjs7Ozs7SUFFRCxPQUFPLENBQUMsS0FBYTtRQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN4Qjs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQzFCOzs7WUFuRkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTJCVDtnQkFDRCxJQUFJLEVBQUUsRUFBRSwwQkFBMEIsRUFBRSxNQUFNLEVBQUU7Z0JBQzVDLG1CQUFtQixFQUFFLEtBQUs7YUFDM0I7Ozs7WUFyQ1Esa0JBQWtCOzs7bUJBMEN4QixLQUFLO29CQUlMLEtBQUs7c0JBS0wsS0FBSztxQkFJTCxNQUFNO29CQUVOLE1BQU07NkJBSU4sS0FBSzttQ0FJTCxNQUFNOzs7SUFsQk4sV0FBVyxFQUFFOzs7O0lBS2IsWUFBWSxFQUFFOzs7O0lBVWQsWUFBWSxFQUFFOzs7Ozs7OztBQ3RFakI7QUFRQSxNQUFNLFVBQVUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFPekM7Ozs7SUFDRSxPQUFPLE9BQU87UUFDWixPQUFPLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsQ0FBQztLQUN0RDs7O1lBUkYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxpQkFBaUIsQ0FBQztnQkFDN0QsWUFBWSxFQUFFLENBQUMsR0FBRyxVQUFVLEVBQUUsc0JBQXNCLENBQUM7Z0JBQ3JELE9BQU8sRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDO2FBQ3pCOzs7Ozs7Ozs7Ozs7Ozs7In0=