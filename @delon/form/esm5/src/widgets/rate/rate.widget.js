/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ControlWidget } from '../../widget';
import { toBool } from '../../utils';
var RateWidget = /** @class */ (function (_super) {
    tslib_1.__extends(RateWidget, _super);
    function RateWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hasText = false;
        return _this;
    }
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
    /**
     * @return {?}
     */
    RateWidget.prototype.genText = /**
     * @return {?}
     */
    function () {
        return this.hasText
            ? ((/** @type {?} */ (this.ui.text))).replace('{{value}}', this.formProperty.value)
            : '';
    };
    RateWidget.decorators = [
        { type: Component, args: [{
                    selector: 'sf-rate',
                    template: "\n  <sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n\n    <nz-rate\n      [nzDisabled]=\"disabled\"\n      [ngModel]=\"value\"\n      (ngModelChange)=\"setValue($event)\"\n      [nzAllowClear]=\"allowClear\"\n      [nzAllowHalf]=\"allowHalf\"\n      [nzAutoFocus]=\"autoFocus\"\n      [nzCount]=\"count\"></nz-rate>\n    <span *ngIf=\"hasText && formProperty.value\" class=\"ant-rate-text\">{{ genText() }}</span>\n\n  </sf-item-wrap>\n  ",
                    preserveWhitespaces: false
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0ZS53aWRnZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vZm9ybS8iLCJzb3VyY2VzIjpbInNyYy93aWRnZXRzL3JhdGUvcmF0ZS53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDN0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUVyQztJQW1CZ0Msc0NBQWE7SUFuQjdDO1FBQUEscUVBc0NDO1FBZEMsYUFBTyxHQUFHLEtBQUssQ0FBQzs7SUFjbEIsQ0FBQzs7OztJQWJDLDZCQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsSUFBSSxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUM7UUFDekQsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFDaEMsQ0FBQzs7OztJQUVELDRCQUFPOzs7SUFBUDtRQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU87WUFDakIsQ0FBQyxDQUFDLENBQUMsbUJBQUEsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7WUFDeEUsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNULENBQUM7O2dCQXJDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLFFBQVEsRUFBRSw2Z0JBY1Q7b0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztpQkFDM0I7O0lBb0JELGlCQUFDO0NBQUEsQUF0Q0QsQ0FtQmdDLGFBQWEsR0FtQjVDO1NBbkJZLFVBQVU7OztJQUNyQiwyQkFBYzs7SUFDZCwrQkFBbUI7O0lBQ25CLGdDQUFvQjs7SUFDcEIsK0JBQW1COztJQUNuQiw2QkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5pbXBvcnQgeyB0b0Jvb2wgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLXJhdGUnLFxuICB0ZW1wbGF0ZTogYFxuICA8c2YtaXRlbS13cmFwIFtpZF09XCJpZFwiIFtzY2hlbWFdPVwic2NoZW1hXCIgW3VpXT1cInVpXCIgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIiBbZXJyb3JdPVwiZXJyb3JcIiBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiPlxuXG4gICAgPG56LXJhdGVcbiAgICAgIFtuekRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgIFtuZ01vZGVsXT1cInZhbHVlXCJcbiAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInNldFZhbHVlKCRldmVudClcIlxuICAgICAgW256QWxsb3dDbGVhcl09XCJhbGxvd0NsZWFyXCJcbiAgICAgIFtuekFsbG93SGFsZl09XCJhbGxvd0hhbGZcIlxuICAgICAgW256QXV0b0ZvY3VzXT1cImF1dG9Gb2N1c1wiXG4gICAgICBbbnpDb3VudF09XCJjb3VudFwiPjwvbnotcmF0ZT5cbiAgICA8c3BhbiAqbmdJZj1cImhhc1RleHQgJiYgZm9ybVByb3BlcnR5LnZhbHVlXCIgY2xhc3M9XCJhbnQtcmF0ZS10ZXh0XCI+e3sgZ2VuVGV4dCgpIH19PC9zcGFuPlxuXG4gIDwvc2YtaXRlbS13cmFwPlxuICBgLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgUmF0ZVdpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb3VudDogbnVtYmVyO1xuICBhbGxvd0hhbGY6IGJvb2xlYW47XG4gIGFsbG93Q2xlYXI6IGJvb2xlYW47XG4gIGF1dG9Gb2N1czogYm9vbGVhbjtcbiAgaGFzVGV4dCA9IGZhbHNlO1xuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNvdW50ID0gdGhpcy5zY2hlbWEubWF4aW11bSB8fCA1O1xuICAgIHRoaXMuYWxsb3dIYWxmID0gKHRoaXMuc2NoZW1hLm11bHRpcGxlT2YgfHwgMC41KSA9PT0gMC41O1xuICAgIHRoaXMuYWxsb3dDbGVhciA9IHRvQm9vbCh0aGlzLnVpLmFsbG93Q2xlYXIsIHRydWUpO1xuICAgIHRoaXMuYXV0b0ZvY3VzID0gdG9Cb29sKHRoaXMudWkuYXV0b0ZvY3VzLCBmYWxzZSk7XG4gICAgdGhpcy5oYXNUZXh0ID0gISF0aGlzLnVpLnRleHQ7XG4gIH1cblxuICBnZW5UZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmhhc1RleHRcbiAgICAgID8gKHRoaXMudWkudGV4dCBhcyBzdHJpbmcpLnJlcGxhY2UoJ3t7dmFsdWV9fScsIHRoaXMuZm9ybVByb3BlcnR5LnZhbHVlKVxuICAgICAgOiAnJztcbiAgfVxufVxuIl19