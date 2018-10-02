/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ControlWidget } from '../../widget';
import { getData } from '../../utils';
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
        this.styleType = (this.ui["styleType"] || 'default') === 'default';
        getData(this.schema, this.ui, this.formProperty.formData).subscribe(function (list) { return (_this.data = list); });
    };
    RadioWidget.decorators = [
        { type: Component, args: [{
                    selector: 'sf-radio',
                    template: "\n  <sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n\n    <nz-radio-group\n      [nzDisabled]=\"disabled\"\n      [nzSize]=\"ui.size\"\n      [nzName]=\"id\"\n      [ngModel]=\"value\"\n      (ngModelChange)=\"setValue($event)\">\n      <ng-container *ngIf=\"styleType\">\n        <label *ngFor=\"let option of data\"\n          nz-radio\n          [nzValue]=\"option.value\"\n          [nzDisabled]=\"option.disabled\">\n          <span [innerHTML]=\"option.label\"></span>\n        </label>\n      </ng-container>\n      <ng-container *ngIf=\"!styleType\">\n        <label *ngFor=\"let option of data\"\n          nz-radio-button\n          [nzValue]=\"option.value\"\n          [nzDisabled]=\"option.disabled\">\n          <span [innerHTML]=\"option.label\"></span>\n        </label>\n      </ng-container>\n    </nz-radio-group>\n\n  </sf-item-wrap>\n  ",
                    preserveWhitespaces: false
                }] }
    ];
    return RadioWidget;
}(ControlWidget));
export { RadioWidget };
if (false) {
    /** @type {?} */
    RadioWidget.prototype.data;
    /** @type {?} */
    RadioWidget.prototype.styleType;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8ud2lkZ2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0cy9yYWRpby9yYWRpby53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDN0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGFBQWEsQ0FBQzs7SUFtQ0wsdUNBQWE7OztxQkFDOUIsRUFBRTs7Ozs7OztJQUdoQiwyQkFBSzs7OztJQUFMLFVBQU0sS0FBVTtRQUFoQixpQkFLQztRQUpDLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxpQkFBYyxTQUFTLENBQUMsS0FBSyxTQUFTLENBQUM7UUFDaEUsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FDakUsVUFBQSxJQUFJLElBQUksT0FBQSxDQUFDLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQWxCLENBQWtCLENBQzNCLENBQUM7S0FDSDs7Z0JBMUNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsUUFBUSxFQUFFLGc3QkE0QlQ7b0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztpQkFDM0I7O3NCQXBDRDtFQXFDaUMsYUFBYTtTQUFqQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xyXG5pbXBvcnQgeyBnZXREYXRhIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzZi1yYWRpbycsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8c2YtaXRlbS13cmFwIFtpZF09XCJpZFwiIFtzY2hlbWFdPVwic2NoZW1hXCIgW3VpXT1cInVpXCIgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIiBbZXJyb3JdPVwiZXJyb3JcIiBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiPlxyXG5cclxuICAgIDxuei1yYWRpby1ncm91cFxyXG4gICAgICBbbnpEaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgIFtuelNpemVdPVwidWkuc2l6ZVwiXHJcbiAgICAgIFtuek5hbWVdPVwiaWRcIlxyXG4gICAgICBbbmdNb2RlbF09XCJ2YWx1ZVwiXHJcbiAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInNldFZhbHVlKCRldmVudClcIj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInN0eWxlVHlwZVwiPlxyXG4gICAgICAgIDxsYWJlbCAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGRhdGFcIlxyXG4gICAgICAgICAgbnotcmFkaW9cclxuICAgICAgICAgIFtuelZhbHVlXT1cIm9wdGlvbi52YWx1ZVwiXHJcbiAgICAgICAgICBbbnpEaXNhYmxlZF09XCJvcHRpb24uZGlzYWJsZWRcIj5cclxuICAgICAgICAgIDxzcGFuIFtpbm5lckhUTUxdPVwib3B0aW9uLmxhYmVsXCI+PC9zcGFuPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXN0eWxlVHlwZVwiPlxyXG4gICAgICAgIDxsYWJlbCAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGRhdGFcIlxyXG4gICAgICAgICAgbnotcmFkaW8tYnV0dG9uXHJcbiAgICAgICAgICBbbnpWYWx1ZV09XCJvcHRpb24udmFsdWVcIlxyXG4gICAgICAgICAgW256RGlzYWJsZWRdPVwib3B0aW9uLmRpc2FibGVkXCI+XHJcbiAgICAgICAgICA8c3BhbiBbaW5uZXJIVE1MXT1cIm9wdGlvbi5sYWJlbFwiPjwvc3Bhbj5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwvbnotcmFkaW8tZ3JvdXA+XHJcblxyXG4gIDwvc2YtaXRlbS13cmFwPlxyXG4gIGAsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSYWRpb1dpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQge1xyXG4gIGRhdGE6IGFueVtdID0gW107XHJcbiAgc3R5bGVUeXBlOiBib29sZWFuO1xyXG5cclxuICByZXNldCh2YWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLnN0eWxlVHlwZSA9ICh0aGlzLnVpLnN0eWxlVHlwZSB8fCAnZGVmYXVsdCcpID09PSAnZGVmYXVsdCc7XHJcbiAgICBnZXREYXRhKHRoaXMuc2NoZW1hLCB0aGlzLnVpLCB0aGlzLmZvcm1Qcm9wZXJ0eS5mb3JtRGF0YSkuc3Vic2NyaWJlKFxyXG4gICAgICBsaXN0ID0+ICh0aGlzLmRhdGEgPSBsaXN0KSxcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==