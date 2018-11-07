/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWNlLWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9ub3RpY2UtaWNvbi8iLCJzb3VyY2VzIjpbIm5vdGljZS1pY29uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEdBRWIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ2xELE9BQU8sRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBcUN4RCxNQUFNLE9BQU8sbUJBQW1COzs7O0lBOEI5QixZQUFvQixJQUF3QjtRQUF4QixTQUFJLEdBQUosSUFBSSxDQUFvQjtRQTVCNUMsV0FBTSxHQUFRLEVBQUUsQ0FBQztRQUdqQixTQUFJLEdBQWlCLEVBQUUsQ0FBQzs7OztRQVV4QixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBR1AsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFvQixDQUFDO1FBRTlDLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDOzs7O1FBSzVDLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBR2QseUJBQW9CLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUcxRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FDckMsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQ3RELENBQUM7SUFDSixDQUFDOzs7OztJQUVELGVBQWUsQ0FBQyxNQUFlO1FBQzdCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsQ0FBTTtRQUNiLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLEtBQWE7UUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzNCLENBQUM7OztZQW5GRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMkJUO2dCQUNELElBQUksRUFBRSxFQUFFLDBCQUEwQixFQUFFLE1BQU0sRUFBRTtnQkFDNUMsbUJBQW1CLEVBQUUsS0FBSzthQUMzQjs7OztZQXJDUSxrQkFBa0I7OzttQkEwQ3hCLEtBQUs7b0JBSUwsS0FBSztzQkFLTCxLQUFLO3FCQUlMLE1BQU07b0JBRU4sTUFBTTs2QkFJTixLQUFLO21DQUlMLE1BQU07O0FBakJQO0lBREMsV0FBVyxFQUFFOztrREFDQTtBQUtkO0lBREMsWUFBWSxFQUFFOztvREFDQztBQVVoQjtJQURDLFlBQVksRUFBRTs7MkRBQ1E7OztJQXhCdkIsb0NBQTRCOztJQUM1QixxQ0FBaUI7O0lBRWpCLG1DQUN3Qjs7Ozs7SUFHeEIsb0NBRWM7Ozs7O0lBR2Qsc0NBRWdCOztJQUVoQixxQ0FDdUQ7O0lBQ3ZELG9DQUM0Qzs7Ozs7SUFHNUMsNkNBRXVCOztJQUV2QixtREFDNEQ7O0lBRWhELG1DQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBEZWxvbkxvY2FsZVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgSW5wdXROdW1iZXIsIElucHV0Qm9vbGVhbiB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuaW1wb3J0IHsgTm90aWNlSXRlbSwgTm90aWNlSWNvblNlbGVjdCB9IGZyb20gJy4vbm90aWNlLWljb24udHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3RpY2UtaWNvbicsXG4gIHRlbXBsYXRlOiBgXG4gIDxuei1iYWRnZSAqbmdJZj1cImRhdGE/Lmxlbmd0aCA9PT0gMFwiIFtuekNvdW50XT1cImNvdW50XCI+XG4gICAgPGkgbnotaWNvbiB0eXBlPVwiYmVsbFwiPjwvaT5cbiAgPC9uei1iYWRnZT5cbiAgPG56LXBvcG92ZXIgKm5nSWY9XCJkYXRhPy5sZW5ndGggPiAwXCJcbiAgICBbbnpWaXNpYmxlXT1cInBvcG92ZXJWaXNpYmxlXCIgKG56VmlzaWJsZUNoYW5nZSk9XCJvblZpc2libGVDaGFuZ2UoJGV2ZW50KVwiIG56VHJpZ2dlcj1cImNsaWNrXCJcbiAgICBuelBsYWNlbWVudD1cImJvdHRvbVJpZ2h0XCJcbiAgICBuek92ZXJsYXlDbGFzc05hbWU9XCJub3RpY2UtaWNvblwiPlxuICAgIDxkaXYgbnotcG9wb3ZlciBjbGFzcz1cImFsYWluLWRlZmF1bHRfX25hdi1pdGVtIG5vdGljZS1pY29uX19pdGVtXCI+XG4gICAgICA8bnotYmFkZ2UgW256Q291bnRdPVwiY291bnRcIj5cbiAgICAgICAgPGkgbnotaWNvbiB0eXBlPVwiYmVsbFwiIGNsYXNzPVwiYWxhaW4tZGVmYXVsdF9fbmF2LWl0ZW0taWNvblwiPjwvaT5cbiAgICAgIDwvbnotYmFkZ2U+XG4gICAgPC9kaXY+XG4gICAgPG5nLXRlbXBsYXRlICNuelRlbXBsYXRlPlxuICAgICAgPG56LXNwaW4gW256U3Bpbm5pbmddPVwibG9hZGluZ1wiIFtuekRlbGF5XT1cIjBcIj5cbiAgICAgICAgPG56LXRhYnNldD5cbiAgICAgICAgICA8bnotdGFiICpuZ0Zvcj1cImxldCBpIG9mIGRhdGFcIiBbbnpUaXRsZV09XCJpLnRpdGxlXCI+XG4gICAgICAgICAgICA8bm90aWNlLWljb24tdGFiXG4gICAgICAgICAgICAgIFtsb2NhbGVdPVwibG9jYWxlXCJcbiAgICAgICAgICAgICAgW2RhdGFdPVwiaVwiXG4gICAgICAgICAgICAgIChzZWxlY3QpPVwib25TZWxlY3QoJGV2ZW50KVwiXG4gICAgICAgICAgICAgIChjbGVhcik9XCJvbkNsZWFyKCRldmVudClcIj48L25vdGljZS1pY29uLXRhYj5cbiAgICAgICAgICA8L256LXRhYj5cbiAgICAgICAgPC9uei10YWJzZXQ+XG4gICAgICA8L256LXNwaW4+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgPC9uei1wb3BvdmVyPlxuICBgLFxuICBob3N0OiB7ICdbY2xhc3Mubm90aWNlLWljb25fX2J0bl0nOiAndHJ1ZScgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIE5vdGljZUljb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGkxOG4kOiBTdWJzY3JpcHRpb247XG4gIGxvY2FsZTogYW55ID0ge307XG5cbiAgQElucHV0KClcbiAgZGF0YTogTm90aWNlSXRlbVtdID0gW107XG5cbiAgLyoqIOWbvuagh+S4iueahOa2iOaBr+aAu+aVsCAqL1xuICBASW5wdXQoKVxuICBASW5wdXROdW1iZXIoKVxuICBjb3VudDogbnVtYmVyO1xuXG4gIC8qKiDlvLnlh7rljaHniYfliqDovb3nirbmgIEgKi9cbiAgQElucHV0KClcbiAgQElucHV0Qm9vbGVhbigpXG4gIGxvYWRpbmcgPSBmYWxzZTtcblxuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgc2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxOb3RpY2VJY29uU2VsZWN0PigpO1xuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgY2xlYXIgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICAvKiog5omL5Yqo5o6n5Yi2UG9wb3ZlcuaYvuekuiAqL1xuICBASW5wdXQoKVxuICBASW5wdXRCb29sZWFuKClcbiAgcG9wb3ZlclZpc2libGUgPSBmYWxzZTtcblxuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgcG9wb3ZlclZpc2libGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpMThuOiBEZWxvbkxvY2FsZVNlcnZpY2UpIHtcbiAgICB0aGlzLmkxOG4kID0gdGhpcy5pMThuLmNoYW5nZS5zdWJzY3JpYmUoXG4gICAgICAoKSA9PiAodGhpcy5sb2NhbGUgPSB0aGlzLmkxOG4uZ2V0RGF0YSgnbm90aWNlSWNvbicpKSxcbiAgICApO1xuICB9XG5cbiAgb25WaXNpYmxlQ2hhbmdlKHJlc3VsdDogYm9vbGVhbikge1xuICAgIHRoaXMucG9wb3ZlclZpc2libGVDaGFuZ2UuZW1pdChyZXN1bHQpO1xuICB9XG5cbiAgb25TZWxlY3QoaTogYW55KSB7XG4gICAgdGhpcy5zZWxlY3QuZW1pdChpKTtcbiAgfVxuXG4gIG9uQ2xlYXIodGl0bGU6IHN0cmluZykge1xuICAgIHRoaXMuY2xlYXIuZW1pdCh0aXRsZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmkxOG4kLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==