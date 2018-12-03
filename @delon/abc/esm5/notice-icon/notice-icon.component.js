/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, } from '@angular/core';
import { DelonLocaleService } from '@delon/theme';
import { InputNumber, InputBoolean } from '@delon/util';
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
                    template: "<nz-badge *ngIf=\"data?.length === 0\" [nzCount]=\"count\">\n  <i nz-icon type=\"bell\"></i>\n</nz-badge>\n<nz-popover *ngIf=\"data?.length > 0\" [nzVisible]=\"popoverVisible\" (nzVisibleChange)=\"onVisibleChange($event)\" nzTrigger=\"click\"\n  nzPlacement=\"bottomRight\" nzOverlayClassName=\"notice-icon\">\n  <div nz-popover class=\"alain-default__nav-item notice-icon__item\">\n    <nz-badge [nzCount]=\"count\">\n      <i nz-icon type=\"bell\" class=\"alain-default__nav-item-icon\"></i>\n    </nz-badge>\n  </div>\n  <ng-template #nzTemplate>\n    <nz-spin [nzSpinning]=\"loading\" [nzDelay]=\"0\">\n      <nz-tabset>\n        <nz-tab *ngFor=\"let i of data\" [nzTitle]=\"i.title\">\n          <notice-icon-tab [locale]=\"locale\" [data]=\"i\" (select)=\"onSelect($event)\" (clear)=\"onClear($event)\"></notice-icon-tab>\n        </nz-tab>\n      </nz-tabset>\n    </nz-spin>\n  </ng-template>\n</nz-popover>\n",
                    host: { '[class.notice-icon__btn]': 'true' }
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
    return NoticeIconComponent;
}());
export { NoticeIconComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWNlLWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9ub3RpY2UtaWNvbi8iLCJzb3VyY2VzIjpbIm5vdGljZS1pY29uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEdBRWIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ2xELE9BQU8sRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBSXhEO0lBbUNFLDZCQUFvQixJQUF3QjtRQUE1QyxpQkFJQztRQUptQixTQUFJLEdBQUosSUFBSSxDQUFvQjtRQTVCNUMsV0FBTSxHQUFRLEVBQUUsQ0FBQztRQUdqQixTQUFJLEdBQWlCLEVBQUUsQ0FBQzs7OztRQVV4QixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBR1AsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFvQixDQUFDO1FBRTlDLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDOzs7O1FBSzVDLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBR2QseUJBQW9CLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUcxRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FDckMsY0FBTSxPQUFBLENBQUMsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUEvQyxDQUErQyxDQUN0RCxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCw2Q0FBZTs7OztJQUFmLFVBQWdCLE1BQWU7UUFDN0IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7OztJQUVELHNDQUFROzs7O0lBQVIsVUFBUyxDQUFNO1FBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFRCxxQ0FBTzs7OztJQUFQLFVBQVEsS0FBYTtRQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQseUNBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMzQixDQUFDOztnQkF2REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2QixpNkJBQTJDO29CQUMzQyxJQUFJLEVBQUUsRUFBRSwwQkFBMEIsRUFBRSxNQUFNLEVBQUU7aUJBQzdDOzs7O2dCQVRRLGtCQUFrQjs7O3VCQWN4QixLQUFLO3dCQUlMLEtBQUs7MEJBS0wsS0FBSzt5QkFJTCxNQUFNO3dCQUVOLE1BQU07aUNBSU4sS0FBSzt1Q0FJTCxNQUFNOztJQWpCUDtRQURDLFdBQVcsRUFBRTs7c0RBQ0E7SUFLZDtRQURDLFlBQVksRUFBRTs7d0RBQ0M7SUFVaEI7UUFEQyxZQUFZLEVBQUU7OytEQUNRO0lBMEJ6QiwwQkFBQztDQUFBLEFBeERELElBd0RDO1NBbkRZLG1CQUFtQjs7O0lBQzlCLG9DQUE0Qjs7SUFDNUIscUNBQWlCOztJQUVqQixtQ0FDd0I7Ozs7O0lBR3hCLG9DQUVjOzs7OztJQUdkLHNDQUVnQjs7SUFFaEIscUNBQ3VEOztJQUN2RCxvQ0FDNEM7Ozs7O0lBRzVDLDZDQUV1Qjs7SUFFdkIsbURBQzREOztJQUVoRCxtQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgT25EZXN0cm95LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRGVsb25Mb2NhbGVTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IElucHV0TnVtYmVyLCBJbnB1dEJvb2xlYW4gfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbmltcG9ydCB7IE5vdGljZUl0ZW0sIE5vdGljZUljb25TZWxlY3QgfSBmcm9tICcuL25vdGljZS1pY29uLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm90aWNlLWljb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vbm90aWNlLWljb24uY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7ICdbY2xhc3Mubm90aWNlLWljb25fX2J0bl0nOiAndHJ1ZScgfSxcbn0pXG5leHBvcnQgY2xhc3MgTm90aWNlSWNvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgaTE4biQ6IFN1YnNjcmlwdGlvbjtcbiAgbG9jYWxlOiBhbnkgPSB7fTtcblxuICBASW5wdXQoKVxuICBkYXRhOiBOb3RpY2VJdGVtW10gPSBbXTtcblxuICAvKiog5Zu+5qCH5LiK55qE5raI5oGv5oC75pWwICovXG4gIEBJbnB1dCgpXG4gIEBJbnB1dE51bWJlcigpXG4gIGNvdW50OiBudW1iZXI7XG5cbiAgLyoqIOW8ueWHuuWNoeeJh+WKoOi9veeKtuaAgSAqL1xuICBASW5wdXQoKVxuICBASW5wdXRCb29sZWFuKClcbiAgbG9hZGluZyA9IGZhbHNlO1xuXG4gIEBPdXRwdXQoKVxuICByZWFkb25seSBzZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPE5vdGljZUljb25TZWxlY3Q+KCk7XG4gIEBPdXRwdXQoKVxuICByZWFkb25seSBjbGVhciA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIC8qKiDmiYvliqjmjqfliLZQb3BvdmVy5pi+56S6ICovXG4gIEBJbnB1dCgpXG4gIEBJbnB1dEJvb2xlYW4oKVxuICBwb3BvdmVyVmlzaWJsZSA9IGZhbHNlO1xuXG4gIEBPdXRwdXQoKVxuICByZWFkb25seSBwb3BvdmVyVmlzaWJsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGkxOG46IERlbG9uTG9jYWxlU2VydmljZSkge1xuICAgIHRoaXMuaTE4biQgPSB0aGlzLmkxOG4uY2hhbmdlLnN1YnNjcmliZShcbiAgICAgICgpID0+ICh0aGlzLmxvY2FsZSA9IHRoaXMuaTE4bi5nZXREYXRhKCdub3RpY2VJY29uJykpLFxuICAgICk7XG4gIH1cblxuICBvblZpc2libGVDaGFuZ2UocmVzdWx0OiBib29sZWFuKSB7XG4gICAgdGhpcy5wb3BvdmVyVmlzaWJsZUNoYW5nZS5lbWl0KHJlc3VsdCk7XG4gIH1cblxuICBvblNlbGVjdChpOiBhbnkpIHtcbiAgICB0aGlzLnNlbGVjdC5lbWl0KGkpO1xuICB9XG5cbiAgb25DbGVhcih0aXRsZTogc3RyaW5nKSB7XG4gICAgdGhpcy5jbGVhci5lbWl0KHRpdGxlKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuaTE4biQudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19