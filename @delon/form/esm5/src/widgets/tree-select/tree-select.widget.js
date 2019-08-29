/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { getData, toBool } from '../../utils';
import { ControlUIWidget } from '../../widget';
var TreeSelectWidget = /** @class */ (function (_super) {
    tslib_1.__extends(TreeSelectWidget, _super);
    function TreeSelectWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.data = [];
        return _this;
    }
    /**
     * @return {?}
     */
    TreeSelectWidget.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var ui = this.ui;
        this.i = {
            allowClear: ui.allowClear,
            showSearch: toBool(ui.showSearch, false),
            dropdownMatchSelectWidth: toBool(ui.dropdownMatchSelectWidth, true),
            multiple: toBool(ui.multiple, false),
            checkable: toBool(ui.checkable, false),
            showExpand: toBool(ui.showExpand, true),
            showLine: toBool(ui.showLine, false),
            asyncData: typeof ui.expandChange === 'function',
            defaultExpandAll: toBool(ui.defaultExpandAll, false),
            defaultExpandedKeys: ui.defaultExpandedKeys || [],
            displayWith: ui.displayWith || ((/**
             * @param {?} node
             * @return {?}
             */
            function (node) { return node.title; })),
        };
    };
    /**
     * @param {?} value
     * @return {?}
     */
    TreeSelectWidget.prototype.reset = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
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
    TreeSelectWidget.prototype.change = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.ui.change)
            this.ui.change(value);
        this.setValue(value);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    TreeSelectWidget.prototype.expandChange = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        var ui = this.ui;
        if (typeof ui.expandChange !== 'function')
            return;
        ui.expandChange(e).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            (/** @type {?} */ (e.node)).clearChildren();
            (/** @type {?} */ (e.node)).addChildren(res);
            _this.detectChanges();
        }));
    };
    TreeSelectWidget.decorators = [
        { type: Component, args: [{
                    selector: 'sf-tree-select',
                    template: "<sf-item-wrap [id]=\"id\"\n              [schema]=\"schema\"\n              [ui]=\"ui\"\n              [showError]=\"showError\"\n              [error]=\"error\"\n              [showTitle]=\"schema.title\">\n  <nz-tree-select [nzAllowClear]=\"i.allowClear\"\n                  [nzPlaceHolder]=\"ui.placeholder\"\n                  [nzDisabled]=\"disabled\"\n                  [nzShowSearch]=\"i.showSearch\"\n                  [nzDropdownMatchSelectWidth]=\"i.dropdownMatchSelectWidth\"\n                  [nzDropdownStyle]=\"ui.dropdownStyle\"\n                  [nzMultiple]=\"i.multiple\"\n                  [nzSize]=\"ui.size\"\n                  [nzCheckable]=\"i.checkable\"\n                  [nzShowExpand]=\"i.showExpand\"\n                  [nzShowLine]=\"i.showLine\"\n                  [nzAsyncData]=\"i.asyncData\"\n                  [nzNodes]=\"data\"\n                  [nzDefaultExpandAll]=\"i.defaultExpandAll\"\n                  [nzDefaultExpandedKeys]=\"i.defaultExpandedKeys\"\n                  [nzDisplayWith]=\"i.displayWith\"\n                  [ngModel]=\"value\"\n                  (ngModelChange)=\"change($event)\"\n                  (nzExpandChange)=\"expandChange($event)\">\n  </nz-tree-select>\n\n</sf-item-wrap>\n",
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    return TreeSelectWidget;
}(ControlUIWidget));
export { TreeSelectWidget };
if (false) {
    /** @type {?} */
    TreeSelectWidget.prototype.i;
    /** @type {?} */
    TreeSelectWidget.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1zZWxlY3Qud2lkZ2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0cy90cmVlLXNlbGVjdC90cmVlLXNlbGVjdC53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSXJFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFHL0M7SUFNc0MsNENBQXlDO0lBTi9FO1FBQUEscUVBZ0RDO1FBeENDLFVBQUksR0FBbUIsRUFBRSxDQUFDOztJQXdDNUIsQ0FBQzs7OztJQXRDQyxtQ0FBUTs7O0lBQVI7UUFDVSxJQUFBLFlBQUU7UUFDVixJQUFJLENBQUMsQ0FBQyxHQUFHO1lBQ1AsVUFBVSxFQUFFLEVBQUUsQ0FBQyxVQUFVO1lBQ3pCLFVBQVUsRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUM7WUFDeEMsd0JBQXdCLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSxJQUFJLENBQUM7WUFDbkUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQztZQUNwQyxTQUFTLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDO1lBQ3RDLFVBQVUsRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUM7WUFDdkMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQztZQUNwQyxTQUFTLEVBQUUsT0FBTyxFQUFFLENBQUMsWUFBWSxLQUFLLFVBQVU7WUFDaEQsZ0JBQWdCLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUM7WUFDcEQsbUJBQW1CLEVBQUUsRUFBRSxDQUFDLG1CQUFtQixJQUFJLEVBQUU7WUFDakQsV0FBVyxFQUFFLEVBQUUsQ0FBQyxXQUFXLElBQUk7Ozs7WUFBQyxVQUFDLElBQVMsSUFBSyxPQUFBLElBQUksQ0FBQyxLQUFLLEVBQVYsQ0FBVSxFQUFDO1NBQzNELENBQUM7SUFDSixDQUFDOzs7OztJQUVELGdDQUFLOzs7O0lBQUwsVUFBTSxLQUFjO1FBQXBCLGlCQUtDO1FBSkMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxJQUFJO1lBQ2pELEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN2QixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsaUNBQU07Ozs7SUFBTixVQUFPLEtBQXdCO1FBQzdCLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNO1lBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QixDQUFDOzs7OztJQUVELHVDQUFZOzs7O0lBQVosVUFBYSxDQUFvQjtRQUFqQyxpQkFRQztRQVBTLElBQUEsWUFBRTtRQUNWLElBQUksT0FBTyxFQUFFLENBQUMsWUFBWSxLQUFLLFVBQVU7WUFBRSxPQUFPO1FBQ2xELEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsR0FBRztZQUM5QixtQkFBQSxDQUFDLENBQUMsSUFBSSxFQUFDLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDeEIsbUJBQUEsQ0FBQyxDQUFDLElBQUksRUFBQyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN6QixLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdkIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOztnQkEvQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLDJ1Q0FBd0M7b0JBQ3hDLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUN0Qzs7SUEyQ0QsdUJBQUM7Q0FBQSxBQWhERCxDQU1zQyxlQUFlLEdBMENwRDtTQTFDWSxnQkFBZ0I7OztJQUMzQiw2QkFBTzs7SUFDUCxnQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56Rm9ybWF0RW1pdEV2ZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcbmltcG9ydCB7IFNGVmFsdWUgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgU0ZTY2hlbWFFbnVtIH0gZnJvbSAnLi4vLi4vc2NoZW1hJztcbmltcG9ydCB7IGdldERhdGEsIHRvQm9vbCB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IENvbnRyb2xVSVdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5pbXBvcnQgeyBTRlRyZWVTZWxlY3RXaWRnZXRTY2hlbWEgfSBmcm9tICcuL3NjaGVtYSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLXRyZWUtc2VsZWN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RyZWUtc2VsZWN0LndpZGdldC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIFRyZWVTZWxlY3RXaWRnZXQgZXh0ZW5kcyBDb250cm9sVUlXaWRnZXQ8U0ZUcmVlU2VsZWN0V2lkZ2V0U2NoZW1hPiBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGk6IGFueTtcbiAgZGF0YTogU0ZTY2hlbWFFbnVtW10gPSBbXTtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IHVpIH0gPSB0aGlzO1xuICAgIHRoaXMuaSA9IHtcbiAgICAgIGFsbG93Q2xlYXI6IHVpLmFsbG93Q2xlYXIsXG4gICAgICBzaG93U2VhcmNoOiB0b0Jvb2wodWkuc2hvd1NlYXJjaCwgZmFsc2UpLFxuICAgICAgZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoOiB0b0Jvb2wodWkuZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoLCB0cnVlKSxcbiAgICAgIG11bHRpcGxlOiB0b0Jvb2wodWkubXVsdGlwbGUsIGZhbHNlKSxcbiAgICAgIGNoZWNrYWJsZTogdG9Cb29sKHVpLmNoZWNrYWJsZSwgZmFsc2UpLFxuICAgICAgc2hvd0V4cGFuZDogdG9Cb29sKHVpLnNob3dFeHBhbmQsIHRydWUpLFxuICAgICAgc2hvd0xpbmU6IHRvQm9vbCh1aS5zaG93TGluZSwgZmFsc2UpLFxuICAgICAgYXN5bmNEYXRhOiB0eXBlb2YgdWkuZXhwYW5kQ2hhbmdlID09PSAnZnVuY3Rpb24nLFxuICAgICAgZGVmYXVsdEV4cGFuZEFsbDogdG9Cb29sKHVpLmRlZmF1bHRFeHBhbmRBbGwsIGZhbHNlKSxcbiAgICAgIGRlZmF1bHRFeHBhbmRlZEtleXM6IHVpLmRlZmF1bHRFeHBhbmRlZEtleXMgfHwgW10sXG4gICAgICBkaXNwbGF5V2l0aDogdWkuZGlzcGxheVdpdGggfHwgKChub2RlOiBhbnkpID0+IG5vZGUudGl0bGUpLFxuICAgIH07XG4gIH1cblxuICByZXNldCh2YWx1ZTogU0ZWYWx1ZSkge1xuICAgIGdldERhdGEodGhpcy5zY2hlbWEsIHRoaXMudWksIHZhbHVlKS5zdWJzY3JpYmUobGlzdCA9PiB7XG4gICAgICB0aGlzLmRhdGEgPSBsaXN0O1xuICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gIH1cblxuICBjaGFuZ2UodmFsdWU6IHN0cmluZ1tdIHwgc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMudWkuY2hhbmdlKSB0aGlzLnVpLmNoYW5nZSh2YWx1ZSk7XG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBleHBhbmRDaGFuZ2UoZTogTnpGb3JtYXRFbWl0RXZlbnQpIHtcbiAgICBjb25zdCB7IHVpIH0gPSB0aGlzO1xuICAgIGlmICh0eXBlb2YgdWkuZXhwYW5kQ2hhbmdlICE9PSAnZnVuY3Rpb24nKSByZXR1cm47XG4gICAgdWkuZXhwYW5kQ2hhbmdlKGUpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgZS5ub2RlIS5jbGVhckNoaWxkcmVuKCk7XG4gICAgICBlLm5vZGUhLmFkZENoaWxkcmVuKHJlcyk7XG4gICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgfVxufVxuIl19