/**
 * @fileoverview added by tsickle
 * Generated from: src/sf-item-wrap.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewEncapsulation } from '@angular/core';
var SFItemWrapComponent = /** @class */ (function () {
    function SFItemWrapComponent() {
        this.title = null;
    }
    Object.defineProperty(SFItemWrapComponent.prototype, "t", {
        get: /**
         * @return {?}
         */
        function () {
            return this.title === null ? this.schema.title : this.title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SFItemWrapComponent.prototype, "oh", {
        get: /**
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (this.ui.optionalHelp));
        },
        enumerable: true,
        configurable: true
    });
    SFItemWrapComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sf-item-wrap',
                    template: "<nz-form-item [style.width.px]=\"ui.width\" [class.ant-form-item-with-help]=\"showError\">\n  <nz-col *ngIf=\"showTitle\" [nzSpan]=\"ui.spanLabel\" class=\"ant-form-item-label\">\n    <label *ngIf=\"t\" [attr.for]=\"id\" [class.ant-form-item-required]=\"ui._required\">\n      {{ t }}\n      <span class=\"sf__optional\">\n        {{ ui.optional }}\n        <i *ngIf=\"oh\" nz-tooltip\n          [nzTooltipTitle]=\"oh.text\" [nzTooltipPlacement]=\"oh.placement\" [nzTooltipTrigger]=\"oh.trigger\"\n          [nzOverlayClassName]=\"oh.overlayClassName\" [nzOverlayStyle]=\"oh.overlayStyle\"\n          [nzMouseEnterDelay]=\"oh.mouseEnterDelay\" [nzMouseLeaveDelay]=\"oh.mouseLeaveDelay\"\n          nz-icon [nzType]=\"oh.icon\"></i>\n      </span>\n    </label>\n  </nz-col>\n  <nz-col class=\"ant-form-item-control-wrapper\" [nzSpan]=\"ui.spanControl\" [nzOffset]=\"ui.offsetControl\">\n    <div class=\"ant-form-item-control\" [class.has-error]=\"showError\">\n      <ng-content></ng-content>\n      <div *ngIf=\"!ui.onlyVisual && showError\" class=\"ant-form-explain\">{{error}}</div>\n      <div *ngIf=\"schema.description\" [innerHTML]=\"schema._description\" class=\"ant-form-extra\"></div>\n    </div>\n  </nz-col>\n</nz-form-item>\n",
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    SFItemWrapComponent.propDecorators = {
        id: [{ type: Input }],
        schema: [{ type: Input }],
        ui: [{ type: Input }],
        showError: [{ type: Input }],
        error: [{ type: Input }],
        showTitle: [{ type: Input }],
        title: [{ type: Input }]
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
    /** @type {?} */
    SFItemWrapComponent.prototype.title;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2YtaXRlbS13cmFwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9mb3JtLyIsInNvdXJjZXMiOlsic3JjL3NmLWl0ZW0td3JhcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUlwRTtJQUFBO1FBYVcsVUFBSyxHQUFrQixJQUFJLENBQUM7SUFTdkMsQ0FBQztJQVBDLHNCQUFJLGtDQUFDOzs7O1FBQUw7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUM5RCxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLG1DQUFFOzs7O1FBQU47WUFDRSxPQUFPLG1CQUFBLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFrQixDQUFDO1FBQ2hELENBQUM7OztPQUFBOztnQkFyQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4QixtdUNBQTRDO29CQUM1QyxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDdEM7OztxQkFFRSxLQUFLO3lCQUNMLEtBQUs7cUJBQ0wsS0FBSzs0QkFDTCxLQUFLO3dCQUNMLEtBQUs7NEJBQ0wsS0FBSzt3QkFDTCxLQUFLOztJQVNSLDBCQUFDO0NBQUEsQUF0QkQsSUFzQkM7U0FoQlksbUJBQW1COzs7SUFDOUIsaUNBQW9COztJQUNwQixxQ0FBMEI7O0lBQzFCLGlDQUE0Qjs7SUFDNUIsd0NBQTRCOztJQUM1QixvQ0FBdUI7O0lBQ3ZCLHdDQUE0Qjs7SUFDNUIsb0NBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNGU2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEvaW5kZXgnO1xuaW1wb3J0IHsgU0ZPcHRpb25hbEhlbHAsIFNGVUlTY2hlbWFJdGVtIH0gZnJvbSAnLi9zY2hlbWEvdWknO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1pdGVtLXdyYXAnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2YtaXRlbS13cmFwLmNvbXBvbmVudC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIFNGSXRlbVdyYXBDb21wb25lbnQge1xuICBASW5wdXQoKSBpZDogc3RyaW5nO1xuICBASW5wdXQoKSBzY2hlbWE6IFNGU2NoZW1hO1xuICBASW5wdXQoKSB1aTogU0ZVSVNjaGVtYUl0ZW07XG4gIEBJbnB1dCgpIHNob3dFcnJvcjogYm9vbGVhbjtcbiAgQElucHV0KCkgZXJyb3I6IHN0cmluZztcbiAgQElucHV0KCkgc2hvd1RpdGxlOiBib29sZWFuO1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cbiAgZ2V0IHQoKSB7XG4gICAgcmV0dXJuIHRoaXMudGl0bGUgPT09IG51bGwgPyB0aGlzLnNjaGVtYS50aXRsZSA6IHRoaXMudGl0bGU7XG4gIH1cblxuICBnZXQgb2goKSB7XG4gICAgcmV0dXJuIHRoaXMudWkub3B0aW9uYWxIZWxwIGFzIFNGT3B0aW9uYWxIZWxwO1xuICB9XG59XG4iXX0=