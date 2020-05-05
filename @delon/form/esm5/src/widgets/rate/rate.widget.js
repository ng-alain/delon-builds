/**
 * @fileoverview added by tsickle
 * Generated from: src/widgets/rate/rate.widget.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __extends } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { toBool } from '../../utils';
import { ControlUIWidget } from '../../widget';
var RateWidget = /** @class */ (function (_super) {
    __extends(RateWidget, _super);
    function RateWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hasText = false;
        return _this;
    }
    Object.defineProperty(RateWidget.prototype, "text", {
        get: /**
         * @return {?}
         */
        function () {
            return ((/** @type {?} */ (this.ui.text))).replace('{{value}}', this.formProperty.value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    RateWidget.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _a = this, schema = _a.schema, ui = _a.ui;
        this.count = schema.maximum || 5;
        this.allowHalf = (schema.multipleOf || 0.5) === 0.5;
        this.allowClear = toBool(ui.allowClear, true);
        this.autoFocus = toBool(ui.autoFocus, false);
        this.hasText = !!ui.text;
    };
    RateWidget.decorators = [
        { type: Component, args: [{
                    selector: 'sf-rate',
                    template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <nz-rate\n    [nzDisabled]=\"disabled\"\n    [ngModel]=\"value\"\n    (ngModelChange)=\"setValue($event)\"\n    [nzAllowClear]=\"allowClear\"\n    [nzAllowHalf]=\"allowHalf\"\n    [nzTooltips]=\"ui.tooltips || []\"\n    [nzAutoFocus]=\"autoFocus\"\n    [nzCount]=\"count\"\n  ></nz-rate>\n  <span *ngIf=\"hasText && formProperty.value\" class=\"ant-rate-text\">{{ text }}</span>\n</sf-item-wrap>\n",
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    return RateWidget;
}(ControlUIWidget));
export { RateWidget };
if (false) {
    /** @type {?} */
    RateWidget.prototype.count;
    /** @type {?} */
    RateWidget.prototype.allowHalf;
    /** @type {?} */
    RateWidget.prototype.allowClear;
    /** @type {?} */
    RateWidget.prototype.autoFocus;
    /** @type {?} */
    RateWidget.prototype.hasText;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0ZS53aWRnZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vZm9ybS8iLCJzb3VyY2VzIjpbInNyYy93aWRnZXRzL3JhdGUvcmF0ZS53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFHL0M7SUFNZ0MsOEJBQW1DO0lBTm5FO1FBQUEscUVBeUJDO1FBZEMsYUFBTyxHQUFHLEtBQUssQ0FBQzs7SUFjbEIsQ0FBQztJQVpDLHNCQUFJLDRCQUFJOzs7O1FBQVI7WUFDRSxPQUFPLENBQUMsbUJBQUEsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoRixDQUFDOzs7T0FBQTs7OztJQUVELDZCQUFROzs7SUFBUjtRQUNRLElBQUEsU0FBcUIsRUFBbkIsa0JBQU0sRUFBRSxVQUFXO1FBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFVLElBQUksR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDO1FBQ3BELElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO0lBQzNCLENBQUM7O2dCQXhCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLGdpQkFBaUM7b0JBQ2pDLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUN0Qzs7SUFvQkQsaUJBQUM7Q0FBQSxBQXpCRCxDQU1nQyxlQUFlLEdBbUI5QztTQW5CWSxVQUFVOzs7SUFDckIsMkJBQWM7O0lBQ2QsK0JBQW1COztJQUNuQixnQ0FBb0I7O0lBQ3BCLCtCQUFtQjs7SUFDbkIsNkJBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0b0Jvb2wgfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgeyBDb250cm9sVUlXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuaW1wb3J0IHsgU0ZSYXRlV2lkZ2V0U2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1yYXRlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JhdGUud2lkZ2V0Lmh0bWwnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgUmF0ZVdpZGdldCBleHRlbmRzIENvbnRyb2xVSVdpZGdldDxTRlJhdGVXaWRnZXRTY2hlbWE+IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY291bnQ6IG51bWJlcjtcbiAgYWxsb3dIYWxmOiBib29sZWFuO1xuICBhbGxvd0NsZWFyOiBib29sZWFuO1xuICBhdXRvRm9jdXM6IGJvb2xlYW47XG4gIGhhc1RleHQgPSBmYWxzZTtcblxuICBnZXQgdGV4dCgpOiBzdHJpbmcge1xuICAgIHJldHVybiAodGhpcy51aS50ZXh0IGFzIHN0cmluZykucmVwbGFjZSgne3t2YWx1ZX19JywgdGhpcy5mb3JtUHJvcGVydHkudmFsdWUpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3QgeyBzY2hlbWEsIHVpIH0gPSB0aGlzO1xuICAgIHRoaXMuY291bnQgPSBzY2hlbWEubWF4aW11bSB8fCA1O1xuICAgIHRoaXMuYWxsb3dIYWxmID0gKHNjaGVtYS5tdWx0aXBsZU9mIHx8IDAuNSkgPT09IDAuNTtcbiAgICB0aGlzLmFsbG93Q2xlYXIgPSB0b0Jvb2wodWkuYWxsb3dDbGVhciwgdHJ1ZSk7XG4gICAgdGhpcy5hdXRvRm9jdXMgPSB0b0Jvb2wodWkuYXV0b0ZvY3VzLCBmYWxzZSk7XG4gICAgdGhpcy5oYXNUZXh0ID0gISF1aS50ZXh0O1xuICB9XG59XG4iXX0=