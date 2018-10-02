/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, } from '@angular/core';
import { DelonLocaleService } from '@delon/theme';
import { InputNumber, InputBoolean } from '@delon/util';
export class NoticeIconComponent {
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
tslib_1.__decorate([
    InputNumber(),
    tslib_1.__metadata("design:type", Number)
], NoticeIconComponent.prototype, "count", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NoticeIconComponent.prototype, "loading", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NoticeIconComponent.prototype, "popoverVisible", void 0);
if (false) {
    /** @type {?} */
    NoticeIconComponent.prototype.i18n$;
    /** @type {?} */
    NoticeIconComponent.prototype.locale;
    /** @type {?} */
    NoticeIconComponent.prototype.data;
    /**
     * 图标上的消息总数
     * @type {?}
     */
    NoticeIconComponent.prototype.count;
    /**
     * 弹出卡片加载状态
     * @type {?}
     */
    NoticeIconComponent.prototype.loading;
    /** @type {?} */
    NoticeIconComponent.prototype.select;
    /** @type {?} */
    NoticeIconComponent.prototype.clear;
    /**
     * 手动控制Popover显示
     * @type {?}
     */
    NoticeIconComponent.prototype.popoverVisible;
    /** @type {?} */
    NoticeIconComponent.prototype.popoverVisibleChange;
    /** @type {?} */
    NoticeIconComponent.prototype.i18n;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWNlLWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9ub3RpY2UtaWNvbi8iLCJzb3VyY2VzIjpbIm5vdGljZS1pY29uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEdBRWIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ2xELE9BQU8sRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBcUN4RCxNQUFNOzs7O0lBOEJKLFlBQW9CLElBQXdCO1FBQXhCLFNBQUksR0FBSixJQUFJLENBQW9CO3NCQTVCOUIsRUFBRTtvQkFHSyxFQUFFOzs7O3VCQVViLEtBQUs7c0JBR04sSUFBSSxZQUFZLEVBQW9CO3FCQUVyQyxJQUFJLFlBQVksRUFBVTs7Ozs4QkFLakIsS0FBSztvQ0FHQyxJQUFJLFlBQVksRUFBVztRQUdoRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FDckMsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQ3RELENBQUM7S0FDSDs7Ozs7SUFFRCxlQUFlLENBQUMsTUFBZTtRQUM3QixJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ3hDOzs7OztJQUVELFFBQVEsQ0FBQyxDQUFNO1FBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDckI7Ozs7O0lBRUQsT0FBTyxDQUFDLEtBQWE7UUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDeEI7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUMxQjs7O1lBbkZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0EyQlQ7Z0JBQ0QsSUFBSSxFQUFFLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxFQUFFO2dCQUM1QyxtQkFBbUIsRUFBRSxLQUFLO2FBQzNCOzs7O1lBckNRLGtCQUFrQjs7O21CQTBDeEIsS0FBSztvQkFJTCxLQUFLO3NCQUtMLEtBQUs7cUJBSUwsTUFBTTtvQkFFTixNQUFNOzZCQUlOLEtBQUs7bUNBSUwsTUFBTTs7O0lBbEJOLFdBQVcsRUFBRTs7OztJQUtiLFlBQVksRUFBRTs7OztJQVVkLFlBQVksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgT25EZXN0cm95LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgRGVsb25Mb2NhbGVTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcclxuaW1wb3J0IHsgSW5wdXROdW1iZXIsIElucHV0Qm9vbGVhbiB9IGZyb20gJ0BkZWxvbi91dGlsJztcclxuXHJcbmltcG9ydCB7IE5vdGljZUl0ZW0sIE5vdGljZUljb25TZWxlY3QgfSBmcm9tICcuL25vdGljZS1pY29uLnR5cGVzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbm90aWNlLWljb24nLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPG56LWJhZGdlICpuZ0lmPVwiZGF0YT8ubGVuZ3RoID09PSAwXCIgW256Q291bnRdPVwiY291bnRcIj5cclxuICAgIDxpIGNsYXNzPVwiYW50aWNvbiBhbnRpY29uLWJlbGxcIj48L2k+XHJcbiAgPC9uei1iYWRnZT5cclxuICA8bnotcG9wb3ZlciAqbmdJZj1cImRhdGE/Lmxlbmd0aCA+IDBcIlxyXG4gICAgW256VmlzaWJsZV09XCJwb3BvdmVyVmlzaWJsZVwiIChuelZpc2libGVDaGFuZ2UpPVwib25WaXNpYmxlQ2hhbmdlKCRldmVudClcIiBuelRyaWdnZXI9XCJjbGlja1wiXHJcbiAgICBuelBsYWNlbWVudD1cImJvdHRvbVJpZ2h0XCJcclxuICAgIG56T3ZlcmxheUNsYXNzTmFtZT1cIm5vdGljZS1pY29uXCI+XHJcbiAgICA8ZGl2IG56LXBvcG92ZXIgY2xhc3M9XCJhbGFpbi1kZWZhdWx0X19uYXYtaXRlbSBub3RpY2UtaWNvbl9faXRlbVwiPlxyXG4gICAgICA8bnotYmFkZ2UgW256Q291bnRdPVwiY291bnRcIj5cclxuICAgICAgICA8aSBjbGFzcz1cImFudGljb24gYW50aWNvbi1iZWxsXCI+PC9pPlxyXG4gICAgICA8L256LWJhZGdlPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8bmctdGVtcGxhdGUgI256VGVtcGxhdGU+XHJcbiAgICAgIDxuei1zcGluIFtuelNwaW5uaW5nXT1cImxvYWRpbmdcIiBbbnpEZWxheV09XCIwXCI+XHJcbiAgICAgICAgPG56LXRhYnNldD5cclxuICAgICAgICAgIDxuei10YWIgKm5nRm9yPVwibGV0IGkgb2YgZGF0YVwiIFtuelRpdGxlXT1cImkudGl0bGVcIj5cclxuICAgICAgICAgICAgPG5vdGljZS1pY29uLXRhYlxyXG4gICAgICAgICAgICAgIFtsb2NhbGVdPVwibG9jYWxlXCJcclxuICAgICAgICAgICAgICBbZGF0YV09XCJpXCJcclxuICAgICAgICAgICAgICAoc2VsZWN0KT1cIm9uU2VsZWN0KCRldmVudClcIlxyXG4gICAgICAgICAgICAgIChjbGVhcik9XCJvbkNsZWFyKCRldmVudClcIj48L25vdGljZS1pY29uLXRhYj5cclxuICAgICAgICAgIDwvbnotdGFiPlxyXG4gICAgICAgIDwvbnotdGFic2V0PlxyXG4gICAgICA8L256LXNwaW4+XHJcbiAgICA8L25nLXRlbXBsYXRlPlxyXG4gIDwvbnotcG9wb3Zlcj5cclxuICBgLFxyXG4gIGhvc3Q6IHsgJ1tjbGFzcy5ub3RpY2UtaWNvbl9fYnRuXSc6ICd0cnVlJyB9LFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTm90aWNlSWNvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSBpMThuJDogU3Vic2NyaXB0aW9uO1xyXG4gIGxvY2FsZTogYW55ID0ge307XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZGF0YTogTm90aWNlSXRlbVtdID0gW107XHJcblxyXG4gIC8qKiDlm77moIfkuIrnmoTmtojmga/mgLvmlbAgKi9cclxuICBASW5wdXQoKVxyXG4gIEBJbnB1dE51bWJlcigpXHJcbiAgY291bnQ6IG51bWJlcjtcclxuXHJcbiAgLyoqIOW8ueWHuuWNoeeJh+WKoOi9veeKtuaAgSAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgQElucHV0Qm9vbGVhbigpXHJcbiAgbG9hZGluZyA9IGZhbHNlO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBzZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPE5vdGljZUljb25TZWxlY3Q+KCk7XHJcbiAgQE91dHB1dCgpXHJcbiAgY2xlYXIgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuXHJcbiAgLyoqIOaJi+WKqOaOp+WItlBvcG92ZXLmmL7npLogKi9cclxuICBASW5wdXQoKVxyXG4gIEBJbnB1dEJvb2xlYW4oKVxyXG4gIHBvcG92ZXJWaXNpYmxlID0gZmFsc2U7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHBvcG92ZXJWaXNpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGkxOG46IERlbG9uTG9jYWxlU2VydmljZSkge1xyXG4gICAgdGhpcy5pMThuJCA9IHRoaXMuaTE4bi5jaGFuZ2Uuc3Vic2NyaWJlKFxyXG4gICAgICAoKSA9PiAodGhpcy5sb2NhbGUgPSB0aGlzLmkxOG4uZ2V0RGF0YSgnbm90aWNlSWNvbicpKSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBvblZpc2libGVDaGFuZ2UocmVzdWx0OiBib29sZWFuKSB7XHJcbiAgICB0aGlzLnBvcG92ZXJWaXNpYmxlQ2hhbmdlLmVtaXQocmVzdWx0KTtcclxuICB9XHJcblxyXG4gIG9uU2VsZWN0KGk6IGFueSkge1xyXG4gICAgdGhpcy5zZWxlY3QuZW1pdChpKTtcclxuICB9XHJcblxyXG4gIG9uQ2xlYXIodGl0bGU6IHN0cmluZykge1xyXG4gICAgdGhpcy5jbGVhci5lbWl0KHRpdGxlKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5pMThuJC51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=