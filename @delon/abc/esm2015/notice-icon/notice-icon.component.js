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
                template: "<nz-badge *ngIf=\"data?.length === 0\" [nzCount]=\"count\">\n  <i nz-icon type=\"bell\"></i>\n</nz-badge>\n<nz-popover *ngIf=\"data?.length > 0\" [nzVisible]=\"popoverVisible\" (nzVisibleChange)=\"onVisibleChange($event)\" nzTrigger=\"click\"\n  nzPlacement=\"bottomRight\" nzOverlayClassName=\"notice-icon\">\n  <div nz-popover class=\"alain-default__nav-item notice-icon__item\">\n    <nz-badge [nzCount]=\"count\">\n      <i nz-icon type=\"bell\" class=\"alain-default__nav-item-icon\"></i>\n    </nz-badge>\n  </div>\n  <ng-template #nzTemplate>\n    <nz-spin [nzSpinning]=\"loading\" [nzDelay]=\"0\">\n      <nz-tabset>\n        <nz-tab *ngFor=\"let i of data\" [nzTitle]=\"i.title\">\n          <notice-icon-tab [locale]=\"locale\" [data]=\"i\" (select)=\"onSelect($event)\" (clear)=\"onClear($event)\"></notice-icon-tab>\n        </nz-tab>\n      </nz-tabset>\n    </nz-spin>\n  </ng-template>\n</nz-popover>\n",
                host: { '[class.notice-icon__btn]': 'true' }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWNlLWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9ub3RpY2UtaWNvbi8iLCJzb3VyY2VzIjpbIm5vdGljZS1pY29uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEdBRWIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ2xELE9BQU8sRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBU3hELE1BQU0sT0FBTyxtQkFBbUI7Ozs7SUE4QjlCLFlBQW9CLElBQXdCO1FBQXhCLFNBQUksR0FBSixJQUFJLENBQW9CO1FBNUI1QyxXQUFNLEdBQVEsRUFBRSxDQUFDO1FBR2pCLFNBQUksR0FBaUIsRUFBRSxDQUFDOzs7O1FBVXhCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFHUCxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQW9CLENBQUM7UUFFOUMsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7Ozs7UUFLNUMsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFHZCx5QkFBb0IsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBRzFELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUNyQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FDdEQsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsZUFBZSxDQUFDLE1BQWU7UUFDN0IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxDQUFNO1FBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsS0FBYTtRQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7O1lBdkRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsaTZCQUEyQztnQkFDM0MsSUFBSSxFQUFFLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxFQUFFO2FBQzdDOzs7O1lBVFEsa0JBQWtCOzs7bUJBY3hCLEtBQUs7b0JBSUwsS0FBSztzQkFLTCxLQUFLO3FCQUlMLE1BQU07b0JBRU4sTUFBTTs2QkFJTixLQUFLO21DQUlMLE1BQU07O0FBakJQO0lBREMsV0FBVyxFQUFFOztrREFDQTtBQUtkO0lBREMsWUFBWSxFQUFFOztvREFDQztBQVVoQjtJQURDLFlBQVksRUFBRTs7MkRBQ1E7OztJQXhCdkIsb0NBQTRCOztJQUM1QixxQ0FBaUI7O0lBRWpCLG1DQUN3Qjs7Ozs7SUFHeEIsb0NBRWM7Ozs7O0lBR2Qsc0NBRWdCOztJQUVoQixxQ0FDdUQ7O0lBQ3ZELG9DQUM0Qzs7Ozs7SUFHNUMsNkNBRXVCOztJQUV2QixtREFDNEQ7O0lBRWhELG1DQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBEZWxvbkxvY2FsZVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgSW5wdXROdW1iZXIsIElucHV0Qm9vbGVhbiB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuaW1wb3J0IHsgTm90aWNlSXRlbSwgTm90aWNlSWNvblNlbGVjdCB9IGZyb20gJy4vbm90aWNlLWljb24udHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3RpY2UtaWNvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9ub3RpY2UtaWNvbi5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHsgJ1tjbGFzcy5ub3RpY2UtaWNvbl9fYnRuXSc6ICd0cnVlJyB9LFxufSlcbmV4cG9ydCBjbGFzcyBOb3RpY2VJY29uQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBpMThuJDogU3Vic2NyaXB0aW9uO1xuICBsb2NhbGU6IGFueSA9IHt9O1xuXG4gIEBJbnB1dCgpXG4gIGRhdGE6IE5vdGljZUl0ZW1bXSA9IFtdO1xuXG4gIC8qKiDlm77moIfkuIrnmoTmtojmga/mgLvmlbAgKi9cbiAgQElucHV0KClcbiAgQElucHV0TnVtYmVyKClcbiAgY291bnQ6IG51bWJlcjtcblxuICAvKiog5by55Ye65Y2h54mH5Yqg6L2954q25oCBICovXG4gIEBJbnB1dCgpXG4gIEBJbnB1dEJvb2xlYW4oKVxuICBsb2FkaW5nID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpXG4gIHJlYWRvbmx5IHNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8Tm90aWNlSWNvblNlbGVjdD4oKTtcbiAgQE91dHB1dCgpXG4gIHJlYWRvbmx5IGNsZWFyID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgLyoqIOaJi+WKqOaOp+WItlBvcG92ZXLmmL7npLogKi9cbiAgQElucHV0KClcbiAgQElucHV0Qm9vbGVhbigpXG4gIHBvcG92ZXJWaXNpYmxlID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpXG4gIHJlYWRvbmx5IHBvcG92ZXJWaXNpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaTE4bjogRGVsb25Mb2NhbGVTZXJ2aWNlKSB7XG4gICAgdGhpcy5pMThuJCA9IHRoaXMuaTE4bi5jaGFuZ2Uuc3Vic2NyaWJlKFxuICAgICAgKCkgPT4gKHRoaXMubG9jYWxlID0gdGhpcy5pMThuLmdldERhdGEoJ25vdGljZUljb24nKSksXG4gICAgKTtcbiAgfVxuXG4gIG9uVmlzaWJsZUNoYW5nZShyZXN1bHQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnBvcG92ZXJWaXNpYmxlQ2hhbmdlLmVtaXQocmVzdWx0KTtcbiAgfVxuXG4gIG9uU2VsZWN0KGk6IGFueSkge1xuICAgIHRoaXMuc2VsZWN0LmVtaXQoaSk7XG4gIH1cblxuICBvbkNsZWFyKHRpdGxlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNsZWFyLmVtaXQodGl0bGUpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5pMThuJC51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=