/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ControlWidget } from '../../widget';
import { toBool, getData } from '../../utils';
import { NzTreeNode } from 'ng-zorro-antd';
import { map } from 'rxjs/operators';
import { deepCopy } from '@delon/util';
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
    TreeSelectWidget.prototype.dc = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Muse wait `nz-tree-select` write values
        // https://github.com/NG-ZORRO/ng-zorro-antd/issues/2316
        setTimeout(function () { return _this.detectChanges(); }, 1000);
    };
    /**
     * @param {?} list
     * @return {?}
     */
    TreeSelectWidget.prototype.tranData = /**
     * @param {?} list
     * @return {?}
     */
    function (list) {
        return list.map(function (node) { return new NzTreeNode(/** @type {?} */ (deepCopy(node))); });
    };
    /**
     * @return {?}
     */
    TreeSelectWidget.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var ui = this.ui;
        this.i = {
            allowClear: ui["allowClear"],
            showSearch: toBool(ui["showSearch"], false),
            dropdownMatchSelectWidth: toBool(ui["dropdownMatchSelectWidth"], true),
            multiple: toBool(ui["multiple"], false),
            checkable: toBool(ui["checkable"], false),
            showExpand: toBool(ui["showExpand"], true),
            showLine: toBool(ui["showLine"], false),
            asyncData: typeof ui["expandChange"] === 'function',
            defaultExpandAll: toBool(ui["defaultExpandAll"], false),
            defaultExpandedKeys: ui["defaultExpandedKeys"] || [],
            displayWith: ui["displayWith"] || (function (node) { return node.title; }),
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
        getData(this.schema, this.ui, this.formProperty.formData)
            .pipe(map(function (list) { return _this.tranData(list); }))
            .subscribe(function (list) {
            _this.data = list;
            _this.dc();
        });
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
        if (this.ui["change"])
            this.ui["change"](value);
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
        if (typeof ui["expandChange"] !== 'function')
            return;
        ui["expandChange"](e)
            .pipe(map(function (list) { return _this.tranData(list); }))
            .subscribe(function (res) {
            e.node.addChildren(res);
            _this.dc();
        });
    };
    TreeSelectWidget.decorators = [
        { type: Component, args: [{
                    selector: 'sf-tree-select',
                    template: "\n  <sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n    <nz-tree-select\n      [nzAllowClear]=\"i.allowClear\"\n      [nzPlaceHolder]=\"ui.placeholder\"\n      [nzDisabled]=\"disabled\"\n      [nzShowSearch]=\"i.showSearch\"\n      [nzDropdownMatchSelectWidth]=\"i.dropdownMatchSelectWidth\"\n      [nzDropdownStyle]=\"ui.dropdownStyle\"\n      [nzMultiple]=\"i.multiple\"\n      [nzSize]=\"ui.size\"\n      [nzCheckable]=\"i.checkable\"\n      [nzShowExpand]=\"i.showExpand\"\n      [nzShowLine]=\"i.showLine\"\n      [nzAsyncData]=\"i.asyncData\"\n      [nzNodes]=\"data\"\n      [nzDefaultExpandAll]=\"i.defaultExpandAll\"\n      [nzDefaultExpandedKeys]=\"i.defaultExpandedKeys\"\n      [nzDisplayWith]=\"i.displayWith\"\n      [ngModel]=\"value\"\n      (ngModelChange)=\"change($event)\"\n      (nzExpandChange)=\"expandChange($event)\">\n    </nz-tree-select>\n\n  </sf-item-wrap>\n  ",
                    preserveWhitespaces: false
                }] }
    ];
    return TreeSelectWidget;
}(ControlWidget));
export { TreeSelectWidget };
if (false) {
    /** @type {?} */
    TreeSelectWidget.prototype.i;
    /** @type {?} */
    TreeSelectWidget.prototype.data;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1zZWxlY3Qud2lkZ2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0cy90cmVlLXNlbGVjdC90cmVlLXNlbGVjdC53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFN0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDOUMsT0FBTyxFQUFFLFVBQVUsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7O0lBZ0NELDRDQUFhOzs7cUJBRTFCLEVBQUU7Ozs7OztJQUVqQiw2QkFBRTs7Ozs7OztRQUdSLFVBQVUsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGFBQWEsRUFBRSxFQUFwQixDQUFvQixFQUFFLElBQUksQ0FBQyxDQUFDOzs7Ozs7SUFHdkMsbUNBQVE7Ozs7Y0FBQyxJQUFvQjtRQUNuQyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLFVBQVUsbUJBQUMsUUFBUSxDQUFDLElBQUksQ0FBUSxFQUFDLEVBQXJDLENBQXFDLENBQUMsQ0FBQzs7Ozs7SUFHakUsbUNBQVE7OztJQUFSO1FBQ1UsSUFBQSxZQUFFLENBQVU7UUFDcEIsSUFBSSxDQUFDLENBQUMsR0FBRztZQUNQLFVBQVUsRUFBRSxFQUFFLGNBQVc7WUFDekIsVUFBVSxFQUFFLE1BQU0sQ0FBQyxFQUFFLGdCQUFhLEtBQUssQ0FBQztZQUN4Qyx3QkFBd0IsRUFBRSxNQUFNLENBQUMsRUFBRSw4QkFBMkIsSUFBSSxDQUFDO1lBQ25FLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRSxjQUFXLEtBQUssQ0FBQztZQUNwQyxTQUFTLEVBQUUsTUFBTSxDQUFDLEVBQUUsZUFBWSxLQUFLLENBQUM7WUFDdEMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxFQUFFLGdCQUFhLElBQUksQ0FBQztZQUN2QyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUUsY0FBVyxLQUFLLENBQUM7WUFDcEMsU0FBUyxFQUFFLE9BQU8sRUFBRSxnQkFBYSxLQUFLLFVBQVU7WUFDaEQsZ0JBQWdCLEVBQUUsTUFBTSxDQUFDLEVBQUUsc0JBQW1CLEtBQUssQ0FBQztZQUNwRCxtQkFBbUIsRUFBRSxFQUFFLDJCQUF3QixFQUFFO1lBQ2pELFdBQVcsRUFBRSxFQUFFLG1CQUFnQixDQUFDLFVBQUMsSUFBZ0IsSUFBSyxPQUFBLElBQUksQ0FBQyxLQUFLLEVBQVYsQ0FBVSxDQUFDO1NBQ2xFLENBQUM7S0FDSDs7Ozs7SUFFRCxnQ0FBSzs7OztJQUFMLFVBQU0sS0FBVTtRQUFoQixpQkFPQztRQU5DLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUM7YUFDdEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQW5CLENBQW1CLENBQUMsQ0FBQzthQUN0QyxTQUFTLENBQUMsVUFBQSxJQUFJO1lBQ2IsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDakIsS0FBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO1NBQ1gsQ0FBQyxDQUFDO0tBQ047Ozs7O0lBRUQsaUNBQU07Ozs7SUFBTixVQUFPLEtBQVU7UUFDZixJQUFJLElBQUksQ0FBQyxFQUFFO1lBQVMsSUFBSSxDQUFDLEVBQUUsV0FBUSxLQUFLLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3RCOzs7OztJQUVELHVDQUFZOzs7O0lBQVosVUFBYSxDQUFvQjtRQUFqQyxpQkFTQztRQVJTLElBQUEsWUFBRSxDQUFVO1FBQ3BCLElBQUksT0FBTyxFQUFFLGdCQUFhLEtBQUssVUFBVTtZQUFFLE9BQU87UUFDbEQsRUFBRSxpQkFBYyxDQUFDLENBQUM7YUFDZixJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBb0IsSUFBSyxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQW5CLENBQW1CLENBQUMsQ0FBQzthQUN4RCxTQUFTLENBQUMsVUFBQSxHQUFHO1lBQ1osQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDeEIsS0FBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO1NBQ1gsQ0FBQyxDQUFDO0tBQ047O2dCQXBGRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsUUFBUSxFQUFFLGk5QkF5QlQ7b0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztpQkFDM0I7OzJCQXJDRDtFQXNDc0MsYUFBYTtTQUF0QyxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5pbXBvcnQgeyBTRlNjaGVtYUVudW0gfSBmcm9tICcuLi8uLi9zY2hlbWEnO1xuaW1wb3J0IHsgdG9Cb29sLCBnZXREYXRhIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHsgTnpUcmVlTm9kZSwgTnpGb3JtYXRFbWl0RXZlbnQgfSBmcm9tICduZy16b3Jyby1hbnRkJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IGRlZXBDb3B5IH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi10cmVlLXNlbGVjdCcsXG4gIHRlbXBsYXRlOiBgXG4gIDxzZi1pdGVtLXdyYXAgW2lkXT1cImlkXCIgW3NjaGVtYV09XCJzY2hlbWFcIiBbdWldPVwidWlcIiBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiIFtlcnJvcl09XCJlcnJvclwiIFtzaG93VGl0bGVdPVwic2NoZW1hLnRpdGxlXCI+XG4gICAgPG56LXRyZWUtc2VsZWN0XG4gICAgICBbbnpBbGxvd0NsZWFyXT1cImkuYWxsb3dDbGVhclwiXG4gICAgICBbbnpQbGFjZUhvbGRlcl09XCJ1aS5wbGFjZWhvbGRlclwiXG4gICAgICBbbnpEaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICBbbnpTaG93U2VhcmNoXT1cImkuc2hvd1NlYXJjaFwiXG4gICAgICBbbnpEcm9wZG93bk1hdGNoU2VsZWN0V2lkdGhdPVwiaS5kcm9wZG93bk1hdGNoU2VsZWN0V2lkdGhcIlxuICAgICAgW256RHJvcGRvd25TdHlsZV09XCJ1aS5kcm9wZG93blN0eWxlXCJcbiAgICAgIFtuek11bHRpcGxlXT1cImkubXVsdGlwbGVcIlxuICAgICAgW256U2l6ZV09XCJ1aS5zaXplXCJcbiAgICAgIFtuekNoZWNrYWJsZV09XCJpLmNoZWNrYWJsZVwiXG4gICAgICBbbnpTaG93RXhwYW5kXT1cImkuc2hvd0V4cGFuZFwiXG4gICAgICBbbnpTaG93TGluZV09XCJpLnNob3dMaW5lXCJcbiAgICAgIFtuekFzeW5jRGF0YV09XCJpLmFzeW5jRGF0YVwiXG4gICAgICBbbnpOb2Rlc109XCJkYXRhXCJcbiAgICAgIFtuekRlZmF1bHRFeHBhbmRBbGxdPVwiaS5kZWZhdWx0RXhwYW5kQWxsXCJcbiAgICAgIFtuekRlZmF1bHRFeHBhbmRlZEtleXNdPVwiaS5kZWZhdWx0RXhwYW5kZWRLZXlzXCJcbiAgICAgIFtuekRpc3BsYXlXaXRoXT1cImkuZGlzcGxheVdpdGhcIlxuICAgICAgW25nTW9kZWxdPVwidmFsdWVcIlxuICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiY2hhbmdlKCRldmVudClcIlxuICAgICAgKG56RXhwYW5kQ2hhbmdlKT1cImV4cGFuZENoYW5nZSgkZXZlbnQpXCI+XG4gICAgPC9uei10cmVlLXNlbGVjdD5cblxuICA8L3NmLWl0ZW0td3JhcD5cbiAgYCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIFRyZWVTZWxlY3RXaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IGltcGxlbWVudHMgT25Jbml0IHtcbiAgaTogYW55O1xuICBkYXRhOiBTRlNjaGVtYUVudW1bXSA9IFtdO1xuXG4gIHByaXZhdGUgZGMoKSB7XG4gICAgLy8gTXVzZSB3YWl0IGBuei10cmVlLXNlbGVjdGAgd3JpdGUgdmFsdWVzXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvaXNzdWVzLzIzMTZcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZGV0ZWN0Q2hhbmdlcygpLCAxMDAwKTtcbiAgfVxuXG4gIHByaXZhdGUgdHJhbkRhdGEobGlzdDogU0ZTY2hlbWFFbnVtW10pIHtcbiAgICByZXR1cm4gbGlzdC5tYXAobm9kZSA9PiBuZXcgTnpUcmVlTm9kZShkZWVwQ29weShub2RlKSBhcyBhbnkpKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgdWkgfSA9IHRoaXM7XG4gICAgdGhpcy5pID0ge1xuICAgICAgYWxsb3dDbGVhcjogdWkuYWxsb3dDbGVhcixcbiAgICAgIHNob3dTZWFyY2g6IHRvQm9vbCh1aS5zaG93U2VhcmNoLCBmYWxzZSksXG4gICAgICBkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGg6IHRvQm9vbCh1aS5kcm9wZG93bk1hdGNoU2VsZWN0V2lkdGgsIHRydWUpLFxuICAgICAgbXVsdGlwbGU6IHRvQm9vbCh1aS5tdWx0aXBsZSwgZmFsc2UpLFxuICAgICAgY2hlY2thYmxlOiB0b0Jvb2wodWkuY2hlY2thYmxlLCBmYWxzZSksXG4gICAgICBzaG93RXhwYW5kOiB0b0Jvb2wodWkuc2hvd0V4cGFuZCwgdHJ1ZSksXG4gICAgICBzaG93TGluZTogdG9Cb29sKHVpLnNob3dMaW5lLCBmYWxzZSksXG4gICAgICBhc3luY0RhdGE6IHR5cGVvZiB1aS5leHBhbmRDaGFuZ2UgPT09ICdmdW5jdGlvbicsXG4gICAgICBkZWZhdWx0RXhwYW5kQWxsOiB0b0Jvb2wodWkuZGVmYXVsdEV4cGFuZEFsbCwgZmFsc2UpLFxuICAgICAgZGVmYXVsdEV4cGFuZGVkS2V5czogdWkuZGVmYXVsdEV4cGFuZGVkS2V5cyB8fCBbXSxcbiAgICAgIGRpc3BsYXlXaXRoOiB1aS5kaXNwbGF5V2l0aCB8fCAoKG5vZGU6IE56VHJlZU5vZGUpID0+IG5vZGUudGl0bGUpLFxuICAgIH07XG4gIH1cblxuICByZXNldCh2YWx1ZTogYW55KSB7XG4gICAgZ2V0RGF0YSh0aGlzLnNjaGVtYSwgdGhpcy51aSwgdGhpcy5mb3JtUHJvcGVydHkuZm9ybURhdGEpXG4gICAgICAucGlwZShtYXAobGlzdCA9PiB0aGlzLnRyYW5EYXRhKGxpc3QpKSlcbiAgICAgIC5zdWJzY3JpYmUobGlzdCA9PiB7XG4gICAgICAgIHRoaXMuZGF0YSA9IGxpc3Q7XG4gICAgICAgIHRoaXMuZGMoKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgY2hhbmdlKHZhbHVlOiBhbnkpIHtcbiAgICBpZiAodGhpcy51aS5jaGFuZ2UpIHRoaXMudWkuY2hhbmdlKHZhbHVlKTtcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIGV4cGFuZENoYW5nZShlOiBOekZvcm1hdEVtaXRFdmVudCkge1xuICAgIGNvbnN0IHsgdWkgfSA9IHRoaXM7XG4gICAgaWYgKHR5cGVvZiB1aS5leHBhbmRDaGFuZ2UgIT09ICdmdW5jdGlvbicpIHJldHVybjtcbiAgICB1aS5leHBhbmRDaGFuZ2UoZSlcbiAgICAgIC5waXBlKG1hcCgobGlzdDogU0ZTY2hlbWFFbnVtW10pID0+IHRoaXMudHJhbkRhdGEobGlzdCkpKVxuICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICBlLm5vZGUuYWRkQ2hpbGRyZW4ocmVzKTtcbiAgICAgICAgdGhpcy5kYygpO1xuICAgICAgfSk7XG4gIH1cbn1cbiJdfQ==