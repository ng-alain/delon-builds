/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ControlWidget } from '../../widget';
import { getData } from '../../utils';
var CheckboxWidget = /** @class */ (function (_super) {
    tslib_1.__extends(CheckboxWidget, _super);
    function CheckboxWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.data = [];
        _this.allChecked = false;
        _this.indeterminate = false;
        return _this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    CheckboxWidget.prototype.reset = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        getData(this.schema, this.ui, this.formProperty.formData).subscribe(function (list) {
            _this.data = list;
            _this.label = _this.ui.spanLabel;
            _this.control = _this.ui.spanControl;
            if (list.length === 0) {
                _this.label = null;
                _this.offset = _this.ui.spanLabel;
            }
            _this.grid_span = _this.ui["span"] && _this.ui["span"] > 0 ? _this.ui["span"] : 0;
            _this.updateAllChecked();
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CheckboxWidget.prototype._setValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.setValue(value);
        this.detectChanges();
        this.notifyChange(value);
    };
    /**
     * @return {?}
     */
    CheckboxWidget.prototype.notifySet = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var checkList = this.data.filter(function (w) { return w.checked; });
        this.updateAllChecked().setValue(checkList.map(function (item) { return item.value; }));
        this.notifyChange(checkList);
    };
    /**
     * @param {?} values
     * @return {?}
     */
    CheckboxWidget.prototype.groupInGridChange = /**
     * @param {?} values
     * @return {?}
     */
    function (values) {
        this.data.forEach(function (item) { return (item.checked = values.indexOf(item.value) !== -1); });
        this.notifySet();
    };
    /**
     * @param {?} e
     * @return {?}
     */
    CheckboxWidget.prototype.onAllChecked = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        e.stopPropagation();
        this.data.forEach(function (item) { return (item.checked = _this.allChecked); });
        this.notifySet();
    };
    /**
     * @return {?}
     */
    CheckboxWidget.prototype.updateAllChecked = /**
     * @return {?}
     */
    function () {
        if (this.data.every(function (item) { return item.checked === false; })) {
            this.allChecked = false;
            this.indeterminate = false;
        }
        else if (this.data.every(function (item) { return item.checked === true; })) {
            this.allChecked = true;
            this.indeterminate = false;
        }
        else {
            this.indeterminate = true;
        }
        this.detectChanges();
        return this;
    };
    /**
     * @param {?} res
     * @return {?}
     */
    CheckboxWidget.prototype.notifyChange = /**
     * @param {?} res
     * @return {?}
     */
    function (res) {
        if (this.ui["change"])
            this.ui["change"](res);
    };
    CheckboxWidget.decorators = [
        { type: Component, args: [{
                    selector: 'sf-checkbox',
                    template: "\n  <ng-template #all>\n    <label *ngIf=\"ui.checkAll\" nz-checkbox class=\"mr-sm\"\n      [(ngModel)]=\"allChecked\"\n      [nzIndeterminate]=\"indeterminate\"\n      (click)=\"onAllChecked($event)\">\n      {{ ui.checkAllText || '\u5168\u9009' }}\n    </label>\n  </ng-template>\n  <nz-form-item [style.width.px]=\"ui.width\">\n    <nz-col *ngIf=\"data.length > 0\" [nzSpan]=\"label\" class=\"ant-form-item-label\">\n      <label [attr.for]=\"id\" [class.ant-form-item-required]=\"ui._required\">\n        {{ schema.title }}\n        <span class=\"optional\">\n          {{ ui.optional }}\n          <nz-tooltip *ngIf=\"ui.optionalHelp\" [nzTitle]=\"ui.optionalHelp\">\n            <i nz-tooltip class=\"anticon anticon-question-circle-o\"></i>\n          </nz-tooltip>\n        </span>\n      </label>\n    </nz-col>\n    <nz-col class=\"ant-form-item-control-wrapper\" [nzSpan]=\"control\" [nzOffset]=\"offset\">\n      <div class=\"ant-form-item-control\" [class.has-error]=\"showError\">\n\n          <ng-container *ngIf=\"data.length === 0\">\n            <label nz-checkbox\n              [nzDisabled]=\"disabled\"\n              [ngModel]=\"value\"\n              (ngModelChange)=\"_setValue($event)\">\n              <span [innerHTML]=\"schema.title\"></span>\n              <span class=\"optional\">\n                {{ ui.optional }}\n                <nz-tooltip *ngIf=\"ui.optionalHelp\" [nzTitle]=\"ui.optionalHelp\">\n                  <i nz-tooltip class=\"anticon anticon-question-circle-o\"></i>\n                </nz-tooltip>\n              </span>\n            </label>\n          </ng-container>\n          <ng-container *ngIf=\"data.length > 0\">\n            <ng-container *ngIf=\"grid_span === 0\">\n              <ng-template [ngTemplateOutlet]=\"all\"></ng-template>\n              <nz-checkbox-group [ngModel]=\"data\" (ngModelChange)=\"notifySet()\"></nz-checkbox-group>\n            </ng-container>\n            <ng-container *ngIf=\"grid_span !== 0\">\n              <nz-checkbox-wrapper class=\"checkbox-grid-list\" (nzOnChange)=\"groupInGridChange($event)\">\n                <nz-row>\n                  <nz-col [nzSpan]=\"grid_span\" *ngIf=\"ui.checkAll\">\n                    <ng-template [ngTemplateOutlet]=\"all\"></ng-template>\n                  </nz-col>\n                  <nz-col [nzSpan]=\"grid_span\" *ngFor=\"let i of data\">\n                    <label nz-checkbox [nzValue]=\"i.value\" [ngModel]=\"i.checked\" [nzDisabled]=\"i.disabled\">{{i.label}}</label>\n                  </nz-col>\n                </nz-row>\n              </nz-checkbox-wrapper>\n            </ng-container>\n          </ng-container>\n\n          <nz-form-extra *ngIf=\"schema.description\" [innerHTML]=\"schema.description\"></nz-form-extra>\n          <nz-form-explain *ngIf=\"!ui.onlyVisual && showError\">{{error}}</nz-form-explain>\n      </div>\n    </nz-col>\n  </nz-form-item>\n  ",
                    preserveWhitespaces: false
                }] }
    ];
    return CheckboxWidget;
}(ControlWidget));
export { CheckboxWidget };
if (false) {
    /** @type {?} */
    CheckboxWidget.prototype.data;
    /** @type {?} */
    CheckboxWidget.prototype.allChecked;
    /** @type {?} */
    CheckboxWidget.prototype.indeterminate;
    /** @type {?} */
    CheckboxWidget.prototype.grid_span;
    /** @type {?} */
    CheckboxWidget.prototype.label;
    /** @type {?} */
    CheckboxWidget.prototype.control;
    /** @type {?} */
    CheckboxWidget.prototype.offset;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gud2lkZ2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0cy9jaGVja2JveC9jaGVja2JveC53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDN0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGFBQWEsQ0FBQzs7SUFzRUYsMENBQWE7OztxQkFDeEIsRUFBRTsyQkFDWixLQUFLOzhCQUNGLEtBQUs7Ozs7Ozs7SUFNckIsOEJBQUs7Ozs7SUFBTCxVQUFNLEtBQVU7UUFBaEIsaUJBZUM7UUFkQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUNqRSxVQUFBLElBQUk7WUFDRixLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUVqQixLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO1lBQy9CLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7WUFDbkMsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDckIsS0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7Z0JBQ2xCLEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7YUFDakM7WUFDRCxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUksQ0FBQyxFQUFFLFlBQVMsS0FBSSxDQUFDLEVBQUUsV0FBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxFQUFFLFNBQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyRSxLQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztTQUN6QixDQUNGLENBQUM7S0FDSDs7Ozs7SUFFRCxrQ0FBUzs7OztJQUFULFVBQVUsS0FBVTtRQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzFCOzs7O0lBRUQsa0NBQVM7OztJQUFUOztRQUNFLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLE9BQU8sRUFBVCxDQUFTLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxLQUFLLEVBQVYsQ0FBVSxDQUFDLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQzlCOzs7OztJQUVELDBDQUFpQjs7OztJQUFqQixVQUFrQixNQUFhO1FBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUNmLFVBQUEsSUFBSSxJQUFJLE9BQUEsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQWxELENBQWtELENBQzNELENBQUM7UUFDRixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7S0FDbEI7Ozs7O0lBRUQscUNBQVk7Ozs7SUFBWixVQUFhLENBQVE7UUFBckIsaUJBSUM7UUFIQyxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxFQUFoQyxDQUFnQyxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0tBQ2xCOzs7O0lBRUQseUNBQWdCOzs7SUFBaEI7UUFDRSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLE9BQU8sS0FBSyxLQUFLLEVBQXRCLENBQXNCLENBQUMsRUFBRTtZQUNuRCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUN4QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztTQUM1QjthQUFNLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsT0FBTyxLQUFLLElBQUksRUFBckIsQ0FBcUIsQ0FBQyxFQUFFO1lBQ3pELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1NBQzVCO2FBQU07WUFDTCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztTQUMzQjtRQUNELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixPQUFPLElBQUksQ0FBQztLQUNiOzs7OztJQUVPLHFDQUFZOzs7O2NBQUMsR0FBNkI7UUFDaEQsSUFBSSxJQUFJLENBQUMsRUFBRTtZQUFTLElBQUksQ0FBQyxFQUFFLFdBQVEsR0FBRyxDQUFDLENBQUM7OztnQkFySTNDLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsUUFBUSxFQUFFLGcyRkE4RFQ7b0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztpQkFDM0I7O3lCQXZFRDtFQXdFb0MsYUFBYTtTQUFwQyxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcbmltcG9ydCB7IGdldERhdGEgfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgeyBTRlNjaGVtYUVudW0gfSBmcm9tICcuLi8uLi9zY2hlbWEnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1jaGVja2JveCcsXG4gIHRlbXBsYXRlOiBgXG4gIDxuZy10ZW1wbGF0ZSAjYWxsPlxuICAgIDxsYWJlbCAqbmdJZj1cInVpLmNoZWNrQWxsXCIgbnotY2hlY2tib3ggY2xhc3M9XCJtci1zbVwiXG4gICAgICBbKG5nTW9kZWwpXT1cImFsbENoZWNrZWRcIlxuICAgICAgW256SW5kZXRlcm1pbmF0ZV09XCJpbmRldGVybWluYXRlXCJcbiAgICAgIChjbGljayk9XCJvbkFsbENoZWNrZWQoJGV2ZW50KVwiPlxuICAgICAge3sgdWkuY2hlY2tBbGxUZXh0IHx8ICflhajpgIknIH19XG4gICAgPC9sYWJlbD5cbiAgPC9uZy10ZW1wbGF0ZT5cbiAgPG56LWZvcm0taXRlbSBbc3R5bGUud2lkdGgucHhdPVwidWkud2lkdGhcIj5cbiAgICA8bnotY29sICpuZ0lmPVwiZGF0YS5sZW5ndGggPiAwXCIgW256U3Bhbl09XCJsYWJlbFwiIGNsYXNzPVwiYW50LWZvcm0taXRlbS1sYWJlbFwiPlxuICAgICAgPGxhYmVsIFthdHRyLmZvcl09XCJpZFwiIFtjbGFzcy5hbnQtZm9ybS1pdGVtLXJlcXVpcmVkXT1cInVpLl9yZXF1aXJlZFwiPlxuICAgICAgICB7eyBzY2hlbWEudGl0bGUgfX1cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJvcHRpb25hbFwiPlxuICAgICAgICAgIHt7IHVpLm9wdGlvbmFsIH19XG4gICAgICAgICAgPG56LXRvb2x0aXAgKm5nSWY9XCJ1aS5vcHRpb25hbEhlbHBcIiBbbnpUaXRsZV09XCJ1aS5vcHRpb25hbEhlbHBcIj5cbiAgICAgICAgICAgIDxpIG56LXRvb2x0aXAgY2xhc3M9XCJhbnRpY29uIGFudGljb24tcXVlc3Rpb24tY2lyY2xlLW9cIj48L2k+XG4gICAgICAgICAgPC9uei10b29sdGlwPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2xhYmVsPlxuICAgIDwvbnotY29sPlxuICAgIDxuei1jb2wgY2xhc3M9XCJhbnQtZm9ybS1pdGVtLWNvbnRyb2wtd3JhcHBlclwiIFtuelNwYW5dPVwiY29udHJvbFwiIFtuek9mZnNldF09XCJvZmZzZXRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJhbnQtZm9ybS1pdGVtLWNvbnRyb2xcIiBbY2xhc3MuaGFzLWVycm9yXT1cInNob3dFcnJvclwiPlxuXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImRhdGEubGVuZ3RoID09PSAwXCI+XG4gICAgICAgICAgICA8bGFiZWwgbnotY2hlY2tib3hcbiAgICAgICAgICAgICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICAgICAgICBbbmdNb2RlbF09XCJ2YWx1ZVwiXG4gICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIl9zZXRWYWx1ZSgkZXZlbnQpXCI+XG4gICAgICAgICAgICAgIDxzcGFuIFtpbm5lckhUTUxdPVwic2NoZW1hLnRpdGxlXCI+PC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm9wdGlvbmFsXCI+XG4gICAgICAgICAgICAgICAge3sgdWkub3B0aW9uYWwgfX1cbiAgICAgICAgICAgICAgICA8bnotdG9vbHRpcCAqbmdJZj1cInVpLm9wdGlvbmFsSGVscFwiIFtuelRpdGxlXT1cInVpLm9wdGlvbmFsSGVscFwiPlxuICAgICAgICAgICAgICAgICAgPGkgbnotdG9vbHRpcCBjbGFzcz1cImFudGljb24gYW50aWNvbi1xdWVzdGlvbi1jaXJjbGUtb1wiPjwvaT5cbiAgICAgICAgICAgICAgICA8L256LXRvb2x0aXA+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImRhdGEubGVuZ3RoID4gMFwiPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImdyaWRfc3BhbiA9PT0gMFwiPlxuICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiYWxsXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgPG56LWNoZWNrYm94LWdyb3VwIFtuZ01vZGVsXT1cImRhdGFcIiAobmdNb2RlbENoYW5nZSk9XCJub3RpZnlTZXQoKVwiPjwvbnotY2hlY2tib3gtZ3JvdXA+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJncmlkX3NwYW4gIT09IDBcIj5cbiAgICAgICAgICAgICAgPG56LWNoZWNrYm94LXdyYXBwZXIgY2xhc3M9XCJjaGVja2JveC1ncmlkLWxpc3RcIiAobnpPbkNoYW5nZSk9XCJncm91cEluR3JpZENoYW5nZSgkZXZlbnQpXCI+XG4gICAgICAgICAgICAgICAgPG56LXJvdz5cbiAgICAgICAgICAgICAgICAgIDxuei1jb2wgW256U3Bhbl09XCJncmlkX3NwYW5cIiAqbmdJZj1cInVpLmNoZWNrQWxsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJhbGxcIj48L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgPC9uei1jb2w+XG4gICAgICAgICAgICAgICAgICA8bnotY29sIFtuelNwYW5dPVwiZ3JpZF9zcGFuXCIgKm5nRm9yPVwibGV0IGkgb2YgZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgbnotY2hlY2tib3ggW256VmFsdWVdPVwiaS52YWx1ZVwiIFtuZ01vZGVsXT1cImkuY2hlY2tlZFwiIFtuekRpc2FibGVkXT1cImkuZGlzYWJsZWRcIj57e2kubGFiZWx9fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8L256LWNvbD5cbiAgICAgICAgICAgICAgICA8L256LXJvdz5cbiAgICAgICAgICAgICAgPC9uei1jaGVja2JveC13cmFwcGVyPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICA8bnotZm9ybS1leHRyYSAqbmdJZj1cInNjaGVtYS5kZXNjcmlwdGlvblwiIFtpbm5lckhUTUxdPVwic2NoZW1hLmRlc2NyaXB0aW9uXCI+PC9uei1mb3JtLWV4dHJhPlxuICAgICAgICAgIDxuei1mb3JtLWV4cGxhaW4gKm5nSWY9XCIhdWkub25seVZpc3VhbCAmJiBzaG93RXJyb3JcIj57e2Vycm9yfX08L256LWZvcm0tZXhwbGFpbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbnotY29sPlxuICA8L256LWZvcm0taXRlbT5cbiAgYCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrYm94V2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCB7XG4gIGRhdGE6IFNGU2NoZW1hRW51bVtdID0gW107XG4gIGFsbENoZWNrZWQgPSBmYWxzZTtcbiAgaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICBncmlkX3NwYW46IG51bWJlcjtcbiAgbGFiZWw6IG51bWJlcjtcbiAgY29udHJvbDogbnVtYmVyO1xuICBvZmZzZXQ6IG51bWJlcjtcblxuICByZXNldCh2YWx1ZTogYW55KSB7XG4gICAgZ2V0RGF0YSh0aGlzLnNjaGVtYSwgdGhpcy51aSwgdGhpcy5mb3JtUHJvcGVydHkuZm9ybURhdGEpLnN1YnNjcmliZShcbiAgICAgIGxpc3QgPT4ge1xuICAgICAgICB0aGlzLmRhdGEgPSBsaXN0O1xuXG4gICAgICAgIHRoaXMubGFiZWwgPSB0aGlzLnVpLnNwYW5MYWJlbDtcbiAgICAgICAgdGhpcy5jb250cm9sID0gdGhpcy51aS5zcGFuQ29udHJvbDtcbiAgICAgICAgaWYgKGxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5sYWJlbCA9IG51bGw7XG4gICAgICAgICAgdGhpcy5vZmZzZXQgPSB0aGlzLnVpLnNwYW5MYWJlbDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdyaWRfc3BhbiA9IHRoaXMudWkuc3BhbiAmJiB0aGlzLnVpLnNwYW4gPiAwID8gdGhpcy51aS5zcGFuIDogMDtcbiAgICAgICAgdGhpcy51cGRhdGVBbGxDaGVja2VkKCk7XG4gICAgICB9LFxuICAgICk7XG4gIH1cblxuICBfc2V0VmFsdWUodmFsdWU6IGFueSkge1xuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHRoaXMubm90aWZ5Q2hhbmdlKHZhbHVlKTtcbiAgfVxuXG4gIG5vdGlmeVNldCgpIHtcbiAgICBjb25zdCBjaGVja0xpc3QgPSB0aGlzLmRhdGEuZmlsdGVyKHcgPT4gdy5jaGVja2VkKTtcbiAgICB0aGlzLnVwZGF0ZUFsbENoZWNrZWQoKS5zZXRWYWx1ZShjaGVja0xpc3QubWFwKGl0ZW0gPT4gaXRlbS52YWx1ZSkpO1xuICAgIHRoaXMubm90aWZ5Q2hhbmdlKGNoZWNrTGlzdCk7XG4gIH1cblxuICBncm91cEluR3JpZENoYW5nZSh2YWx1ZXM6IGFueVtdKSB7XG4gICAgdGhpcy5kYXRhLmZvckVhY2goXG4gICAgICBpdGVtID0+IChpdGVtLmNoZWNrZWQgPSB2YWx1ZXMuaW5kZXhPZihpdGVtLnZhbHVlKSAhPT0gLTEpLFxuICAgICk7XG4gICAgdGhpcy5ub3RpZnlTZXQoKTtcbiAgfVxuXG4gIG9uQWxsQ2hlY2tlZChlOiBFdmVudCkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5kYXRhLmZvckVhY2goaXRlbSA9PiAoaXRlbS5jaGVja2VkID0gdGhpcy5hbGxDaGVja2VkKSk7XG4gICAgdGhpcy5ub3RpZnlTZXQoKTtcbiAgfVxuXG4gIHVwZGF0ZUFsbENoZWNrZWQoKTogdGhpcyB7XG4gICAgaWYgKHRoaXMuZGF0YS5ldmVyeShpdGVtID0+IGl0ZW0uY2hlY2tlZCA9PT0gZmFsc2UpKSB7XG4gICAgICB0aGlzLmFsbENoZWNrZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5kYXRhLmV2ZXJ5KGl0ZW0gPT4gaXRlbS5jaGVja2VkID09PSB0cnVlKSkge1xuICAgICAgdGhpcy5hbGxDaGVja2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMuaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmluZGV0ZXJtaW5hdGUgPSB0cnVlO1xuICAgIH1cbiAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHByaXZhdGUgbm90aWZ5Q2hhbmdlKHJlczogYm9vbGVhbiB8IFNGU2NoZW1hRW51bVtdKSB7XG4gICAgaWYgKHRoaXMudWkuY2hhbmdlKSB0aGlzLnVpLmNoYW5nZShyZXMpO1xuICB9XG59XG4iXX0=