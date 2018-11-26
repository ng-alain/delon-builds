/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ControlWidget } from '../../widget';
var TextWidget = /** @class */ (function (_super) {
    tslib_1.__extends(TextWidget, _super);
    function TextWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    TextWidget.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.ui._required = false;
    };
    TextWidget.decorators = [
        { type: Component, args: [{
                    selector: 'sf-text',
                    template: "\n  <sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n    {{ value || ui.defaultText || '-' }}\n  </sf-item-wrap>\n  ",
                    preserveWhitespaces: false
                }] }
    ];
    return TextWidget;
}(ControlWidget));
export { TextWidget };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC53aWRnZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vZm9ybS8iLCJzb3VyY2VzIjpbInNyYy93aWRnZXRzL3RleHQvdGV4dC53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFN0M7SUFTZ0Msc0NBQWE7SUFUN0M7O0lBYUEsQ0FBQzs7OztJQUhDLDZCQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDOztnQkFaRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLFFBQVEsRUFBRSwwTUFJVDtvQkFDRCxtQkFBbUIsRUFBRSxLQUFLO2lCQUMzQjs7SUFLRCxpQkFBQztDQUFBLEFBYkQsQ0FTZ0MsYUFBYSxHQUk1QztTQUpZLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLXRleHQnLFxuICB0ZW1wbGF0ZTogYFxuICA8c2YtaXRlbS13cmFwIFtpZF09XCJpZFwiIFtzY2hlbWFdPVwic2NoZW1hXCIgW3VpXT1cInVpXCIgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIiBbZXJyb3JdPVwiZXJyb3JcIiBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiPlxuICAgIHt7IHZhbHVlIHx8IHVpLmRlZmF1bHRUZXh0IHx8ICctJyB9fVxuICA8L3NmLWl0ZW0td3JhcD5cbiAgYCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIFRleHRXaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IGltcGxlbWVudHMgT25Jbml0IHtcbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy51aS5fcmVxdWlyZWQgPSBmYWxzZTtcbiAgfVxufVxuIl19