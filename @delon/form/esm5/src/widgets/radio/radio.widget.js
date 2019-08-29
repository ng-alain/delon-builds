/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { getData } from '../../utils';
import { ControlUIWidget } from '../../widget';
var RadioWidget = /** @class */ (function (_super) {
    tslib_1.__extends(RadioWidget, _super);
    function RadioWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.data = [];
        return _this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    RadioWidget.prototype.reset = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        this.styleType = (this.ui.styleType || 'default') === 'default';
        getData(this.schema, this.ui, value).subscribe((/**
         * @param {?} list
         * @return {?}
         */
        function (list) {
            _this.data = list;
            _this.detectChanges();
        }));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    RadioWidget.prototype._setValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.setValue(value);
        if (this.ui.change)
            this.ui.change(value);
    };
    RadioWidget.decorators = [
        { type: Component, args: [{
                    selector: 'sf-radio',
                    template: "<sf-item-wrap [id]=\"id\"\n              [schema]=\"schema\"\n              [ui]=\"ui\"\n              [showError]=\"showError\"\n              [error]=\"error\"\n              [showTitle]=\"schema.title\">\n\n  <nz-radio-group [nzDisabled]=\"disabled\"\n                  [nzSize]=\"ui.size\"\n                  [nzName]=\"id\"\n                  [ngModel]=\"value\"\n                  (ngModelChange)=\"_setValue($event)\"\n                  [nzButtonStyle]=\"ui.buttonStyle || 'outline'\">\n    <ng-container *ngIf=\"styleType\">\n      <label *ngFor=\"let option of data\"\n             nz-radio\n             [nzValue]=\"option.value\"\n             [nzDisabled]=\"option.disabled\">\n        <span [innerHTML]=\"option.label\"></span>\n      </label>\n    </ng-container>\n    <ng-container *ngIf=\"!styleType\">\n      <label *ngFor=\"let option of data\"\n             nz-radio-button\n             [nzValue]=\"option.value\"\n             [nzDisabled]=\"option.disabled\">\n        <span [innerHTML]=\"option.label\"></span>\n      </label>\n    </ng-container>\n  </nz-radio-group>\n\n</sf-item-wrap>\n",
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    return RadioWidget;
}(ControlUIWidget));
export { RadioWidget };
if (false) {
    /** @type {?} */
    RadioWidget.prototype.data;
    /** @type {?} */
    RadioWidget.prototype.styleType;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8ud2lkZ2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0cy9yYWRpby9yYWRpby53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzdELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDdEMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUcvQztJQU1pQyx1Q0FBb0M7SUFOckU7UUFBQSxxRUFzQkM7UUFmQyxVQUFJLEdBQW1CLEVBQUUsQ0FBQzs7SUFlNUIsQ0FBQzs7Ozs7SUFaQywyQkFBSzs7OztJQUFMLFVBQU0sS0FBYztRQUFwQixpQkFNQztRQUxDLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsSUFBSSxTQUFTLENBQUMsS0FBSyxTQUFTLENBQUM7UUFDaEUsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxJQUFJO1lBQ2pELEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN2QixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsK0JBQVM7Ozs7SUFBVCxVQUFVLEtBQWM7UUFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQixJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTTtZQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVDLENBQUM7O2dCQXJCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLG9tQ0FBa0M7b0JBQ2xDLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUN0Qzs7SUFpQkQsa0JBQUM7Q0FBQSxBQXRCRCxDQU1pQyxlQUFlLEdBZ0IvQztTQWhCWSxXQUFXOzs7SUFDdEIsMkJBQTBCOztJQUMxQixnQ0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTRlZhbHVlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlJztcbmltcG9ydCB7IFNGU2NoZW1hRW51bSB9IGZyb20gJy4uLy4uL3NjaGVtYS9pbmRleCc7XG5pbXBvcnQgeyBnZXREYXRhIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHsgQ29udHJvbFVJV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcbmltcG9ydCB7IFNGUmFkaW9XaWRnZXRTY2hlbWEgfSBmcm9tICcuL3NjaGVtYSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLXJhZGlvJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JhZGlvLndpZGdldC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIFJhZGlvV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFVJV2lkZ2V0PFNGUmFkaW9XaWRnZXRTY2hlbWE+IHtcbiAgZGF0YTogU0ZTY2hlbWFFbnVtW10gPSBbXTtcbiAgc3R5bGVUeXBlOiBib29sZWFuO1xuXG4gIHJlc2V0KHZhbHVlOiBTRlZhbHVlKSB7XG4gICAgdGhpcy5zdHlsZVR5cGUgPSAodGhpcy51aS5zdHlsZVR5cGUgfHwgJ2RlZmF1bHQnKSA9PT0gJ2RlZmF1bHQnO1xuICAgIGdldERhdGEodGhpcy5zY2hlbWEsIHRoaXMudWksIHZhbHVlKS5zdWJzY3JpYmUobGlzdCA9PiB7XG4gICAgICB0aGlzLmRhdGEgPSBsaXN0O1xuICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gIH1cblxuICBfc2V0VmFsdWUodmFsdWU6IFNGVmFsdWUpIHtcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgICBpZiAodGhpcy51aS5jaGFuZ2UpIHRoaXMudWkuY2hhbmdlKHZhbHVlKTtcbiAgfVxufVxuIl19