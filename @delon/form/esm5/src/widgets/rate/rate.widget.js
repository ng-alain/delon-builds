/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { toBool } from '../../utils';
import { ControlUIWidget } from '../../widget';
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
                    template: "<sf-item-wrap [id]=\"id\"\n              [schema]=\"schema\"\n              [ui]=\"ui\"\n              [showError]=\"showError\"\n              [error]=\"error\"\n              [showTitle]=\"schema.title\">\n  <nz-rate [nzDisabled]=\"disabled\"\n           [ngModel]=\"value\"\n           (ngModelChange)=\"setValue($event)\"\n           [nzAllowClear]=\"allowClear\"\n           [nzAllowHalf]=\"allowHalf\"\n           [nzAutoFocus]=\"autoFocus\"\n           [nzCount]=\"count\"></nz-rate>\n  <span *ngIf=\"hasText && formProperty.value\"\n        class=\"ant-rate-text\">{{ text }}</span>\n</sf-item-wrap>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0ZS53aWRnZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vZm9ybS8iLCJzb3VyY2VzIjpbInNyYy93aWRnZXRzL3JhdGUvcmF0ZS53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDckMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUcvQztJQU1nQyxzQ0FBbUM7SUFObkU7UUFBQSxxRUF5QkM7UUFkQyxhQUFPLEdBQUcsS0FBSyxDQUFDOztJQWNsQixDQUFDO0lBWkMsc0JBQUksNEJBQUk7Ozs7UUFBUjtZQUNFLE9BQU8sQ0FBQyxtQkFBQSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksRUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hGLENBQUM7OztPQUFBOzs7O0lBRUQsNkJBQVE7OztJQUFSO1FBQ1EsSUFBQSxTQUFxQixFQUFuQixrQkFBTSxFQUFFLFVBQVc7UUFDM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsTUFBTSxDQUFDLFVBQVUsSUFBSSxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUM7UUFDcEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFDM0IsQ0FBQzs7Z0JBeEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsU0FBUztvQkFDbkIsNm1CQUFpQztvQkFDakMsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3RDOztJQW9CRCxpQkFBQztDQUFBLEFBekJELENBTWdDLGVBQWUsR0FtQjlDO1NBbkJZLFVBQVU7OztJQUNyQiwyQkFBYzs7SUFDZCwrQkFBbUI7O0lBQ25CLGdDQUFvQjs7SUFDcEIsK0JBQW1COztJQUNuQiw2QkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRvQm9vbCB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IENvbnRyb2xVSVdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5pbXBvcnQgeyBTRlJhdGVXaWRnZXRTY2hlbWEgfSBmcm9tICcuL3NjaGVtYSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLXJhdGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vcmF0ZS53aWRnZXQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBSYXRlV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFVJV2lkZ2V0PFNGUmF0ZVdpZGdldFNjaGVtYT4gaW1wbGVtZW50cyBPbkluaXQge1xuICBjb3VudDogbnVtYmVyO1xuICBhbGxvd0hhbGY6IGJvb2xlYW47XG4gIGFsbG93Q2xlYXI6IGJvb2xlYW47XG4gIGF1dG9Gb2N1czogYm9vbGVhbjtcbiAgaGFzVGV4dCA9IGZhbHNlO1xuXG4gIGdldCB0ZXh0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICh0aGlzLnVpLnRleHQgYXMgc3RyaW5nKS5yZXBsYWNlKCd7e3ZhbHVlfX0nLCB0aGlzLmZvcm1Qcm9wZXJ0eS52YWx1ZSk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IHNjaGVtYSwgdWkgfSA9IHRoaXM7XG4gICAgdGhpcy5jb3VudCA9IHNjaGVtYS5tYXhpbXVtIHx8IDU7XG4gICAgdGhpcy5hbGxvd0hhbGYgPSAoc2NoZW1hLm11bHRpcGxlT2YgfHwgMC41KSA9PT0gMC41O1xuICAgIHRoaXMuYWxsb3dDbGVhciA9IHRvQm9vbCh1aS5hbGxvd0NsZWFyLCB0cnVlKTtcbiAgICB0aGlzLmF1dG9Gb2N1cyA9IHRvQm9vbCh1aS5hdXRvRm9jdXMsIGZhbHNlKTtcbiAgICB0aGlzLmhhc1RleHQgPSAhIXVpLnRleHQ7XG4gIH1cbn1cbiJdfQ==