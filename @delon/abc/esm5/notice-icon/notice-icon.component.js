/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, } from '@angular/core';
import { DelonLocaleService } from '@delon/theme';
import { InputBoolean, InputNumber } from '@delon/util';
var NoticeIconComponent = /** @class */ (function () {
    function NoticeIconComponent(i18n, cdr) {
        this.i18n = i18n;
        this.cdr = cdr;
        // tslint:disable-next-line:no-any
        this.locale = {};
        this.data = [];
        this.loading = false;
        this.popoverVisible = false;
        this.select = new EventEmitter();
        this.clear = new EventEmitter();
        this.popoverVisibleChange = new EventEmitter();
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
    NoticeIconComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.i18n$ = this.i18n.change.subscribe(function () {
            _this.locale = _this.i18n.getData('noticeIcon');
            _this.cdr.detectChanges();
        });
    };
    /**
     * @return {?}
     */
    NoticeIconComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.cdr.detectChanges();
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
                    host: { '[class.notice-icon__btn]': 'true' },
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    NoticeIconComponent.ctorParameters = function () { return [
        { type: DelonLocaleService },
        { type: ChangeDetectorRef }
    ]; };
    NoticeIconComponent.propDecorators = {
        data: [{ type: Input }],
        count: [{ type: Input }],
        loading: [{ type: Input }],
        popoverVisible: [{ type: Input }],
        select: [{ type: Output }],
        clear: [{ type: Output }],
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
    /** @type {?} */
    NoticeIconComponent.prototype.count;
    /** @type {?} */
    NoticeIconComponent.prototype.loading;
    /** @type {?} */
    NoticeIconComponent.prototype.popoverVisible;
    /** @type {?} */
    NoticeIconComponent.prototype.select;
    /** @type {?} */
    NoticeIconComponent.prototype.clear;
    /** @type {?} */
    NoticeIconComponent.prototype.popoverVisibleChange;
    /** @type {?} */
    NoticeIconComponent.prototype.i18n;
    /** @type {?} */
    NoticeIconComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWNlLWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9ub3RpY2UtaWNvbi8iLCJzb3VyY2VzIjpbIm5vdGljZS1pY29uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUlMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDbEQsT0FBTyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFLeEQ7SUFtQkUsNkJBQW9CLElBQXdCLEVBQVUsR0FBc0I7UUFBeEQsU0FBSSxHQUFKLElBQUksQ0FBb0I7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjs7UUFWNUUsV0FBTSxHQUFRLEVBQUUsQ0FBQztRQUVSLFNBQUksR0FBaUIsRUFBRSxDQUFDO1FBRVIsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUM3QixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQW9CLENBQUM7UUFDOUMsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDbkMseUJBQW9CLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztJQUVVLENBQUM7Ozs7O0lBRWpGLDZDQUFlOzs7O0lBQWYsVUFBZ0IsTUFBZTtRQUM3QixJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7O0lBRUQsc0NBQVE7Ozs7SUFBUixVQUFTLENBQW1CO1FBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRUQscUNBQU87Ozs7SUFBUCxVQUFRLEtBQWE7UUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELHNDQUFROzs7SUFBUjtRQUFBLGlCQUtDO1FBSkMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7WUFDdEMsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUM5QyxLQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELHlDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELHlDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7Z0JBOUNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsaTZCQUEyQztvQkFDM0MsSUFBSSxFQUFFLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxFQUFFO29CQUM1QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7Ozs7Z0JBWFEsa0JBQWtCO2dCQVR6QixpQkFBaUI7Ozt1QkEwQmhCLEtBQUs7d0JBQ0wsS0FBSzswQkFDTCxLQUFLO2lDQUNMLEtBQUs7eUJBQ0wsTUFBTTt3QkFDTixNQUFNO3VDQUNOLE1BQU07O0lBTGlCO1FBQWQsV0FBVyxFQUFFOztzREFBZTtJQUNiO1FBQWYsWUFBWSxFQUFFOzt3REFBaUI7SUFDaEI7UUFBZixZQUFZLEVBQUU7OytEQUF3QjtJQWlDbEQsMEJBQUM7Q0FBQSxBQS9DRCxJQStDQztTQXpDWSxtQkFBbUI7OztJQUM5QixvQ0FBNEI7O0lBRTVCLHFDQUFpQjs7SUFFakIsbUNBQWlDOztJQUNqQyxvQ0FBc0M7O0lBQ3RDLHNDQUF5Qzs7SUFDekMsNkNBQWdEOztJQUNoRCxxQ0FBaUU7O0lBQ2pFLG9DQUFzRDs7SUFDdEQsbURBQXNFOztJQUUxRCxtQ0FBZ0M7O0lBQUUsa0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEZWxvbkxvY2FsZVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBOb3RpY2VJY29uU2VsZWN0LCBOb3RpY2VJdGVtIH0gZnJvbSAnLi9ub3RpY2UtaWNvbi50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdGljZS1pY29uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL25vdGljZS1pY29uLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDogeyAnW2NsYXNzLm5vdGljZS1pY29uX19idG5dJzogJ3RydWUnIH0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOb3RpY2VJY29uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgaTE4biQ6IFN1YnNjcmlwdGlvbjtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBsb2NhbGU6IGFueSA9IHt9O1xuXG4gIEBJbnB1dCgpIGRhdGE6IE5vdGljZUl0ZW1bXSA9IFtdO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBjb3VudDogbnVtYmVyO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbG9hZGluZyA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgcG9wb3ZlclZpc2libGUgPSBmYWxzZTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8Tm90aWNlSWNvblNlbGVjdD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNsZWFyID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBwb3BvdmVyVmlzaWJsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGkxOG46IERlbG9uTG9jYWxlU2VydmljZSwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7IH1cblxuICBvblZpc2libGVDaGFuZ2UocmVzdWx0OiBib29sZWFuKSB7XG4gICAgdGhpcy5wb3BvdmVyVmlzaWJsZUNoYW5nZS5lbWl0KHJlc3VsdCk7XG4gIH1cblxuICBvblNlbGVjdChpOiBOb3RpY2VJY29uU2VsZWN0KSB7XG4gICAgdGhpcy5zZWxlY3QuZW1pdChpKTtcbiAgfVxuXG4gIG9uQ2xlYXIodGl0bGU6IHN0cmluZykge1xuICAgIHRoaXMuY2xlYXIuZW1pdCh0aXRsZSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmkxOG4kID0gdGhpcy5pMThuLmNoYW5nZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5sb2NhbGUgPSB0aGlzLmkxOG4uZ2V0RGF0YSgnbm90aWNlSWNvbicpO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5pMThuJC51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=