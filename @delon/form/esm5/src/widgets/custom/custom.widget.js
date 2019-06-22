/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ControlWidget } from '../../widget';
var CustomWidget = /** @class */ (function (_super) {
    tslib_1.__extends(CustomWidget, _super);
    function CustomWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomWidget.decorators = [
        { type: Component, args: [{
                    selector: 'sf-custom',
                    template: "\n    <sf-item-wrap\n      [id]=\"id\"\n      [schema]=\"schema\"\n      [ui]=\"ui\"\n      [showError]=\"showError\"\n      [error]=\"error\"\n      [showTitle]=\"schema.title\"\n    >\n      <ng-template\n        [ngTemplateOutlet]=\"$any(ui)._render\"\n        [ngTemplateOutletContext]=\"{$implicit: this, schema: schema, ui: ui }\"\n      ></ng-template>\n    </sf-item-wrap>\n  ",
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    return CustomWidget;
}(ControlWidget));
export { CustomWidget };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9mb3JtLyIsInNvdXJjZXMiOlsic3JjL3dpZGdldHMvY3VzdG9tL2N1c3RvbS53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFN0M7SUFvQmtDLHdDQUFhO0lBcEIvQzs7SUFvQmlELENBQUM7O2dCQXBCakQsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQixRQUFRLEVBQUUsa1lBY1Q7b0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3RDOztJQUNnRCxtQkFBQztDQUFBLEFBcEJsRCxDQW9Ca0MsYUFBYSxHQUFHO1NBQXJDLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtY3VzdG9tJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c2YtaXRlbS13cmFwXG4gICAgICBbaWRdPVwiaWRcIlxuICAgICAgW3NjaGVtYV09XCJzY2hlbWFcIlxuICAgICAgW3VpXT1cInVpXCJcbiAgICAgIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCJcbiAgICAgIFtlcnJvcl09XCJlcnJvclwiXG4gICAgICBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiXG4gICAgPlxuICAgICAgPG5nLXRlbXBsYXRlXG4gICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIiRhbnkodWkpLl9yZW5kZXJcIlxuICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyRpbXBsaWNpdDogdGhpcywgc2NoZW1hOiBzY2hlbWEsIHVpOiB1aSB9XCJcbiAgICAgID48L25nLXRlbXBsYXRlPlxuICAgIDwvc2YtaXRlbS13cmFwPlxuICBgLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgQ3VzdG9tV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCB7fVxuIl19