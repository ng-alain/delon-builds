/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var SFItemWrapComponent = /** @class */ (function () {
    function SFItemWrapComponent() {
    }
    SFItemWrapComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sf-item-wrap',
                    template: "\n  <nz-form-item [style.width.px]=\"ui.width\">\n    <nz-col *ngIf=\"showTitle\" [nzSpan]=\"ui.spanLabel\" class=\"ant-form-item-label\">\n      <label [attr.for]=\"id\" [class.ant-form-item-required]=\"ui._required\">\n        {{ schema.title }}\n        <span class=\"optional\">\n          {{ ui.optional }}\n          <nz-tooltip *ngIf=\"ui.optionalHelp\" [nzTitle]=\"ui.optionalHelp\">\n            <i nz-tooltip class=\"anticon anticon-question-circle-o\"></i>\n          </nz-tooltip>\n        </span>\n      </label>\n    </nz-col>\n    <nz-col class=\"ant-form-item-control-wrapper\" [nzSpan]=\"ui.spanControl\" [nzOffset]=\"ui.offsetControl\">\n      <div class=\"ant-form-item-control\" [class.has-error]=\"showError\">\n        <ng-content></ng-content>\n        <nz-form-extra *ngIf=\"schema.description\" [innerHTML]=\"schema.description\"></nz-form-extra>\n        <nz-form-explain *ngIf=\"!ui.onlyVisual && showError\">{{error}}</nz-form-explain>\n      </div>\n    </nz-col>\n  </nz-form-item>"
                }] }
    ];
    SFItemWrapComponent.propDecorators = {
        id: [{ type: Input }],
        schema: [{ type: Input }],
        ui: [{ type: Input }],
        showError: [{ type: Input }],
        error: [{ type: Input }],
        showTitle: [{ type: Input }]
    };
    return SFItemWrapComponent;
}());
export { SFItemWrapComponent };
if (false) {
    /** @type {?} */
    SFItemWrapComponent.prototype.id;
    /** @type {?} */
    SFItemWrapComponent.prototype.schema;
    /** @type {?} */
    SFItemWrapComponent.prototype.ui;
    /** @type {?} */
    SFItemWrapComponent.prototype.showError;
    /** @type {?} */
    SFItemWrapComponent.prototype.error;
    /** @type {?} */
    SFItemWrapComponent.prototype.showTitle;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2YtaXRlbS13cmFwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9mb3JtLyIsInNvdXJjZXMiOlsic3JjL3NmLWl0ZW0td3JhcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7OztnQkFJaEQsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4QixRQUFRLEVBQUUscS9CQW9CTTtpQkFDakI7OztxQkFFRSxLQUFLO3lCQUNMLEtBQUs7cUJBQ0wsS0FBSzs0QkFDTCxLQUFLO3dCQUNMLEtBQUs7NEJBQ0wsS0FBSzs7OEJBbENSOztTQTRCYSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFNGU2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEvaW5kZXgnO1xyXG5pbXBvcnQgeyBTRlVJU2NoZW1hSXRlbSB9IGZyb20gJy4vc2NoZW1hL3VpJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc2YtaXRlbS13cmFwJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxuei1mb3JtLWl0ZW0gW3N0eWxlLndpZHRoLnB4XT1cInVpLndpZHRoXCI+XHJcbiAgICA8bnotY29sICpuZ0lmPVwic2hvd1RpdGxlXCIgW256U3Bhbl09XCJ1aS5zcGFuTGFiZWxcIiBjbGFzcz1cImFudC1mb3JtLWl0ZW0tbGFiZWxcIj5cclxuICAgICAgPGxhYmVsIFthdHRyLmZvcl09XCJpZFwiIFtjbGFzcy5hbnQtZm9ybS1pdGVtLXJlcXVpcmVkXT1cInVpLl9yZXF1aXJlZFwiPlxyXG4gICAgICAgIHt7IHNjaGVtYS50aXRsZSB9fVxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwib3B0aW9uYWxcIj5cclxuICAgICAgICAgIHt7IHVpLm9wdGlvbmFsIH19XHJcbiAgICAgICAgICA8bnotdG9vbHRpcCAqbmdJZj1cInVpLm9wdGlvbmFsSGVscFwiIFtuelRpdGxlXT1cInVpLm9wdGlvbmFsSGVscFwiPlxyXG4gICAgICAgICAgICA8aSBuei10b29sdGlwIGNsYXNzPVwiYW50aWNvbiBhbnRpY29uLXF1ZXN0aW9uLWNpcmNsZS1vXCI+PC9pPlxyXG4gICAgICAgICAgPC9uei10b29sdGlwPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9sYWJlbD5cclxuICAgIDwvbnotY29sPlxyXG4gICAgPG56LWNvbCBjbGFzcz1cImFudC1mb3JtLWl0ZW0tY29udHJvbC13cmFwcGVyXCIgW256U3Bhbl09XCJ1aS5zcGFuQ29udHJvbFwiIFtuek9mZnNldF09XCJ1aS5vZmZzZXRDb250cm9sXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJhbnQtZm9ybS1pdGVtLWNvbnRyb2xcIiBbY2xhc3MuaGFzLWVycm9yXT1cInNob3dFcnJvclwiPlxyXG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgICAgICA8bnotZm9ybS1leHRyYSAqbmdJZj1cInNjaGVtYS5kZXNjcmlwdGlvblwiIFtpbm5lckhUTUxdPVwic2NoZW1hLmRlc2NyaXB0aW9uXCI+PC9uei1mb3JtLWV4dHJhPlxyXG4gICAgICAgIDxuei1mb3JtLWV4cGxhaW4gKm5nSWY9XCIhdWkub25seVZpc3VhbCAmJiBzaG93RXJyb3JcIj57e2Vycm9yfX08L256LWZvcm0tZXhwbGFpbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L256LWNvbD5cclxuICA8L256LWZvcm0taXRlbT5gLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU0ZJdGVtV3JhcENvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgaWQ6IHN0cmluZztcclxuICBASW5wdXQoKSBzY2hlbWE6IFNGU2NoZW1hO1xyXG4gIEBJbnB1dCgpIHVpOiBTRlVJU2NoZW1hSXRlbTtcclxuICBASW5wdXQoKSBzaG93RXJyb3I6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgZXJyb3I6IHN0cmluZztcclxuICBASW5wdXQoKSBzaG93VGl0bGU6IGJvb2xlYW47XHJcbn1cclxuIl19