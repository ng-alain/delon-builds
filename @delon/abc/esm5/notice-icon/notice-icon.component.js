/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectorRef, Component, EventEmitter, Input, Output, } from '@angular/core';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWNlLWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9ub3RpY2UtaWNvbi8iLCJzb3VyY2VzIjpbIm5vdGljZS1pY29uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNsRCxPQUFPLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUt4RDtJQWtCRSw2QkFBb0IsSUFBd0IsRUFBVSxHQUFzQjtRQUF4RCxTQUFJLEdBQUosSUFBSSxDQUFvQjtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1COztRQVY1RSxXQUFNLEdBQVEsRUFBRSxDQUFDO1FBRVIsU0FBSSxHQUFpQixFQUFFLENBQUM7UUFFUixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQzdCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBb0IsQ0FBQztRQUM5QyxVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUNuQyx5QkFBb0IsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO0lBRVUsQ0FBQzs7Ozs7SUFFakYsNkNBQWU7Ozs7SUFBZixVQUFnQixNQUFlO1FBQzdCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQzs7Ozs7SUFFRCxzQ0FBUTs7OztJQUFSLFVBQVMsQ0FBbUI7UUFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFRCxxQ0FBTzs7OztJQUFQLFVBQVEsS0FBYTtRQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsc0NBQVE7OztJQUFSO1FBQUEsaUJBS0M7UUFKQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztZQUN0QyxLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzlDLEtBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQseUNBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMzQixDQUFDOztnQkF6Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2QixpNkJBQTJDO29CQUMzQyxJQUFJLEVBQUUsRUFBRSwwQkFBMEIsRUFBRSxNQUFNLEVBQUU7aUJBQzdDOzs7O2dCQVZRLGtCQUFrQjtnQkFSekIsaUJBQWlCOzs7dUJBd0JoQixLQUFLO3dCQUNMLEtBQUs7MEJBQ0wsS0FBSztpQ0FDTCxLQUFLO3lCQUNMLE1BQU07d0JBQ04sTUFBTTt1Q0FDTixNQUFNOztJQUxpQjtRQUFkLFdBQVcsRUFBRTs7c0RBQWU7SUFDYjtRQUFmLFlBQVksRUFBRTs7d0RBQWlCO0lBQ2hCO1FBQWYsWUFBWSxFQUFFOzsrREFBd0I7SUE2QmxELDBCQUFDO0NBQUEsQUExQ0QsSUEwQ0M7U0FyQ1ksbUJBQW1COzs7SUFDOUIsb0NBQTRCOztJQUU1QixxQ0FBaUI7O0lBRWpCLG1DQUFpQzs7SUFDakMsb0NBQXNDOztJQUN0QyxzQ0FBeUM7O0lBQ3pDLDZDQUFnRDs7SUFDaEQscUNBQWlFOztJQUNqRSxvQ0FBc0Q7O0lBQ3RELG1EQUFzRTs7SUFFMUQsbUNBQWdDOztJQUFFLGtDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGVsb25Mb2NhbGVTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTm90aWNlSWNvblNlbGVjdCwgTm90aWNlSXRlbSB9IGZyb20gJy4vbm90aWNlLWljb24udHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3RpY2UtaWNvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9ub3RpY2UtaWNvbi5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHsgJ1tjbGFzcy5ub3RpY2UtaWNvbl9fYnRuXSc6ICd0cnVlJyB9LFxufSlcbmV4cG9ydCBjbGFzcyBOb3RpY2VJY29uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGkxOG4kOiBTdWJzY3JpcHRpb247XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgbG9jYWxlOiBhbnkgPSB7fTtcblxuICBASW5wdXQoKSBkYXRhOiBOb3RpY2VJdGVtW10gPSBbXTtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgY291bnQ6IG51bWJlcjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGxvYWRpbmcgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHBvcG92ZXJWaXNpYmxlID0gZmFsc2U7XG4gIEBPdXRwdXQoKSByZWFkb25seSBzZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPE5vdGljZUljb25TZWxlY3Q+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBjbGVhciA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgcG9wb3ZlclZpc2libGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpMThuOiBEZWxvbkxvY2FsZVNlcnZpY2UsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikgeyB9XG5cbiAgb25WaXNpYmxlQ2hhbmdlKHJlc3VsdDogYm9vbGVhbikge1xuICAgIHRoaXMucG9wb3ZlclZpc2libGVDaGFuZ2UuZW1pdChyZXN1bHQpO1xuICB9XG5cbiAgb25TZWxlY3QoaTogTm90aWNlSWNvblNlbGVjdCkge1xuICAgIHRoaXMuc2VsZWN0LmVtaXQoaSk7XG4gIH1cblxuICBvbkNsZWFyKHRpdGxlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNsZWFyLmVtaXQodGl0bGUpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pMThuJCA9IHRoaXMuaTE4bi5jaGFuZ2Uuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMubG9jYWxlID0gdGhpcy5pMThuLmdldERhdGEoJ25vdGljZUljb24nKTtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuaTE4biQudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19