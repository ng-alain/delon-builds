/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { toBool } from '../../utils';
import { ControlWidget } from '../../widget';
var RateWidget = /** @class */ (function (_super) {
    tslib_1.__extends(RateWidget, _super);
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
        this.count = this.schema.maximum || 5;
        this.allowHalf = (this.schema.multipleOf || 0.5) === 0.5;
        this.allowClear = toBool(this.ui.allowClear, true);
        this.autoFocus = toBool(this.ui.autoFocus, false);
        this.hasText = !!this.ui.text;
    };
    RateWidget.decorators = [
        { type: Component, args: [{
                    selector: 'sf-rate',
                    template: "<sf-item-wrap [id]=\"id\"\n              [schema]=\"schema\"\n              [ui]=\"ui\"\n              [showError]=\"showError\"\n              [error]=\"error\"\n              [showTitle]=\"schema.title\">\n  <nz-rate [nzDisabled]=\"disabled\"\n           [ngModel]=\"value\"\n           (ngModelChange)=\"setValue($event)\"\n           [nzAllowClear]=\"allowClear\"\n           [nzAllowHalf]=\"allowHalf\"\n           [nzAutoFocus]=\"autoFocus\"\n           [nzCount]=\"count\"></nz-rate>\n  <span *ngIf=\"hasText && formProperty.value\"\n        class=\"ant-rate-text\">{{ text }}</span>\n</sf-item-wrap>\n"
                }] }
    ];
    return RateWidget;
}(ControlWidget));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0ZS53aWRnZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vZm9ybS8iLCJzb3VyY2VzIjpbInNyYy93aWRnZXRzL3JhdGUvcmF0ZS53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDckMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUU3QztJQUlnQyxzQ0FBYTtJQUo3QztRQUFBLHFFQXNCQztRQWJDLGFBQU8sR0FBRyxLQUFLLENBQUM7O0lBYWxCLENBQUM7SUFYQyxzQkFBSSw0QkFBSTs7OztRQUFSO1lBQ0UsT0FBTyxDQUFDLG1CQUFBLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEYsQ0FBQzs7O09BQUE7Ozs7SUFFRCw2QkFBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLElBQUksR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDO1FBQ3pELElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO0lBQ2hDLENBQUM7O2dCQXJCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLDZtQkFBaUM7aUJBQ2xDOztJQW1CRCxpQkFBQztDQUFBLEFBdEJELENBSWdDLGFBQWEsR0FrQjVDO1NBbEJZLFVBQVU7OztJQUNyQiwyQkFBYzs7SUFDZCwrQkFBbUI7O0lBQ25CLGdDQUFvQjs7SUFDcEIsK0JBQW1COztJQUNuQiw2QkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdG9Cb29sIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLXJhdGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vcmF0ZS53aWRnZXQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFJhdGVXaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY291bnQ6IG51bWJlcjtcbiAgYWxsb3dIYWxmOiBib29sZWFuO1xuICBhbGxvd0NsZWFyOiBib29sZWFuO1xuICBhdXRvRm9jdXM6IGJvb2xlYW47XG4gIGhhc1RleHQgPSBmYWxzZTtcblxuICBnZXQgdGV4dCgpOiBzdHJpbmcge1xuICAgIHJldHVybiAodGhpcy51aS50ZXh0IGFzIHN0cmluZykucmVwbGFjZSgne3t2YWx1ZX19JywgdGhpcy5mb3JtUHJvcGVydHkudmFsdWUpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jb3VudCA9IHRoaXMuc2NoZW1hLm1heGltdW0gfHwgNTtcbiAgICB0aGlzLmFsbG93SGFsZiA9ICh0aGlzLnNjaGVtYS5tdWx0aXBsZU9mIHx8IDAuNSkgPT09IDAuNTtcbiAgICB0aGlzLmFsbG93Q2xlYXIgPSB0b0Jvb2wodGhpcy51aS5hbGxvd0NsZWFyLCB0cnVlKTtcbiAgICB0aGlzLmF1dG9Gb2N1cyA9IHRvQm9vbCh0aGlzLnVpLmF1dG9Gb2N1cywgZmFsc2UpO1xuICAgIHRoaXMuaGFzVGV4dCA9ICEhdGhpcy51aS50ZXh0O1xuICB9XG59XG4iXX0=