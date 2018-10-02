/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { tap, map } from 'rxjs/operators';
import { ControlWidget } from '../../widget';
import { getData, getEnum } from '../../utils';
import { NzMentionComponent } from 'ng-zorro-antd';
var MentionWidget = /** @class */ (function (_super) {
    tslib_1.__extends(MentionWidget, _super);
    function MentionWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.data = [];
        _this.loading = false;
        return _this;
    }
    /**
     * @return {?}
     */
    MentionWidget.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.i = {
            valueWith: this.ui["valueWith"] || (function (item) { return item.label; }),
            notFoundContent: this.ui["notFoundContent"] || '无匹配结果，轻敲空格完成输入',
            placement: this.ui["placement"] || 'bottom',
            prefix: this.ui["prefix"] || '@',
        };
        /** @type {?} */
        var min = typeof this.schema.minimum !== 'undefined' ? this.schema.minimum : -1;
        /** @type {?} */
        var max = typeof this.schema.maximum !== 'undefined' ? this.schema.maximum : -1;
        if (!this.ui.validator && (min !== -1 || max !== -1)) {
            this.ui.validator = function (value, formProperty, form) {
                /** @type {?} */
                var count = _this.mentionChild.getMentions().length;
                if (min !== -1 && count < min) {
                    return [{ keyword: 'mention', message: "\u6700\u5C11\u63D0\u53CA " + min + " \u6B21" }];
                }
                if (max !== -1 && count > max) {
                    return [{ keyword: 'mention', message: "\u6700\u591A\u63D0\u53CA " + max + " \u6B21" }];
                }
                return null;
            };
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    MentionWidget.prototype.reset = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        getData(this.schema, this.ui, null).subscribe(function (list) {
            _this.data = list;
            _this.detectChanges();
        });
    };
    /**
     * @param {?} options
     * @return {?}
     */
    MentionWidget.prototype._select = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        if (this.ui["select"])
            this.ui["select"](options);
    };
    /**
     * @param {?} option
     * @return {?}
     */
    MentionWidget.prototype._search = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        var _this = this;
        if (typeof this.ui["loadData"] !== 'function')
            return;
        this.loading = true;
        (/** @type {?} */ (this.ui["loadData"](option)))
            .pipe(tap(function () { return (_this.loading = false); }), map(function (res) { return getEnum(res, null, _this.schema.readOnly); }))
            .subscribe(function (res) {
            _this.data = res;
            _this.cd.detectChanges();
        });
    };
    MentionWidget.decorators = [
        { type: Component, args: [{
                    selector: 'sf-mention',
                    template: "\n    <sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n\n      <nz-mention #mentions\n        [nzSuggestions]=\"data\"\n        [nzValueWith]=\"i.valueWith\"\n        [nzLoading]=\"loading\"\n        [nzNotFoundContent]=\"i.notFoundContent\"\n        [nzPlacement]=\"i.placement\"\n        [nzPrefix]=\"i.prefix\"\n        (nzOnSelect)=\"_select($event)\"\n        (nzOnSearchChange)=\"_search($event)\">\n\n        <ng-container *ngIf=\"ui.inputStyle !== 'textarea'\">\n          <input nzMentionTrigger nz-input\n            [attr.id]=\"id\"\n            [disabled]=\"disabled\"\n            [attr.disabled]=\"disabled\"\n            [nzSize]=\"ui.size\"\n            [ngModel]=\"value\"\n            (ngModelChange)=\"setValue($event)\"\n            [attr.maxLength]=\"schema.maxLength || null\"\n            [attr.placeholder]=\"ui.placeholder\"\n            autocomplete=\"off\">\n        </ng-container>\n\n        <ng-container *ngIf=\"ui.inputStyle === 'textarea'\">\n          <textarea nzMentionTrigger nz-input\n            [attr.id]=\"id\"\n            [disabled]=\"disabled\"\n            [attr.disabled]=\"disabled\"\n            [nzSize]=\"ui.size\"\n            [ngModel]=\"value\"\n            (ngModelChange)=\"setValue($event)\"\n            [attr.maxLength]=\"schema.maxLength || null\"\n            [attr.placeholder]=\"ui.placeholder\"\n            [nzAutosize]=\"ui.autosize\">\n          </textarea>\n        </ng-container>\n\n      </nz-mention>\n\n    </sf-item-wrap>\n    ",
                    preserveWhitespaces: false
                }] }
    ];
    MentionWidget.propDecorators = {
        mentionChild: [{ type: ViewChild, args: ['mentions',] }]
    };
    return MentionWidget;
}(ControlWidget));
export { MentionWidget };
if (false) {
    /** @type {?} */
    MentionWidget.prototype.mentionChild;
    /** @type {?} */
    MentionWidget.prototype.data;
    /** @type {?} */
    MentionWidget.prototype.i;
    /** @type {?} */
    MentionWidget.prototype.loading;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudGlvbi53aWRnZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vZm9ybS8iLCJzb3VyY2VzIjpbInNyYy93aWRnZXRzL21lbnRpb24vbWVudGlvbi53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3RCxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDN0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFHL0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZUFBZSxDQUFDOztJQWtEaEIseUNBQWE7OztxQkFFdkIsRUFBRTt3QkFFZixLQUFLOzs7Ozs7SUFFZixnQ0FBUTs7O0lBQVI7UUFBQSxpQkE0QkM7UUEzQkMsSUFBSSxDQUFDLENBQUMsR0FBRztZQUNQLFNBQVMsRUFBRSxJQUFJLENBQUMsRUFBRSxpQkFBYyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLEtBQUssRUFBVixDQUFVLENBQUM7WUFDcEQsZUFBZSxFQUNiLElBQUksQ0FBQyxFQUFFLHVCQUFvQixnQkFBZ0I7WUFDN0MsU0FBUyxFQUFFLElBQUksQ0FBQyxFQUFFLGlCQUFjLFFBQVE7WUFDeEMsTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFLGNBQVcsR0FBRztTQUM5QixDQUFDOztRQUNGLElBQU0sR0FBRyxHQUNMLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBRUM7O1FBSDFFLElBRUUsR0FBRyxHQUNELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3BELElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxHQUFHLFVBQ2xCLEtBQVUsRUFDVixZQUEwQixFQUMxQixJQUFtQjs7Z0JBRW5CLElBQU0sS0FBSyxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDO2dCQUNyRCxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsSUFBSSxLQUFLLEdBQUcsR0FBRyxFQUFFO29CQUM3QixPQUFPLENBQUMsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSw4QkFBUSxHQUFHLFlBQUksRUFBRSxDQUFDLENBQUM7aUJBQzNEO2dCQUNELElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxJQUFJLEtBQUssR0FBRyxHQUFHLEVBQUU7b0JBQzdCLE9BQU8sQ0FBQyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLDhCQUFRLEdBQUcsWUFBSSxFQUFFLENBQUMsQ0FBQztpQkFDM0Q7Z0JBQ0QsT0FBTyxJQUFJLENBQUM7YUFDYixDQUFDO1NBQ0g7S0FDRjs7Ozs7SUFFRCw2QkFBSzs7OztJQUFMLFVBQU0sS0FBVTtRQUFoQixpQkFLQztRQUpDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUNoRCxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNqQixLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDdEIsQ0FBQyxDQUFDO0tBQ0o7Ozs7O0lBRUQsK0JBQU87Ozs7SUFBUCxVQUFRLE9BQVk7UUFDbEIsSUFBSSxJQUFJLENBQUMsRUFBRTtZQUFTLElBQUksQ0FBQyxFQUFFLFdBQVEsT0FBTyxDQUFDLENBQUM7S0FDN0M7Ozs7O0lBRUQsK0JBQU87Ozs7SUFBUCxVQUFRLE1BQVc7UUFBbkIsaUJBVUM7UUFUQyxJQUFJLE9BQU8sSUFBSSxDQUFDLEVBQUUsWUFBUyxLQUFLLFVBQVU7WUFBRSxPQUFPO1FBRW5ELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLG1CQUFDLElBQUksQ0FBQyxFQUFFLGFBQVUsTUFBTSxDQUFtQyxFQUFDO2FBQ3pELElBQUksQ0FBQyxHQUFHLENBQUMsY0FBTSxPQUFBLENBQUMsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsRUFBdEIsQ0FBc0IsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQXhDLENBQXdDLENBQUMsQ0FBQzthQUM3RixTQUFTLENBQUMsVUFBQSxHQUFHO1lBQ1osS0FBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7WUFDaEIsS0FBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN6QixDQUFDLENBQUM7S0FDTjs7Z0JBekdGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsUUFBUSxFQUFFLGtqREEyQ1A7b0JBQ0gsbUJBQW1CLEVBQUUsS0FBSztpQkFDM0I7OzsrQkFFRSxTQUFTLFNBQUMsVUFBVTs7d0JBMUR2QjtFQXlEbUMsYUFBYTtTQUFuQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRhcCwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcclxuaW1wb3J0IHsgZ2V0RGF0YSwgZ2V0RW51bSB9IGZyb20gJy4uLy4uL3V0aWxzJztcclxuaW1wb3J0IHsgU0ZTY2hlbWFFbnVtLCBTRlNjaGVtYUVudW1UeXBlIH0gZnJvbSAnLi4vLi4vc2NoZW1hJztcclxuaW1wb3J0IHsgRm9ybVByb3BlcnR5LCBQcm9wZXJ0eUdyb3VwIH0gZnJvbSAnLi4vLi4vbW9kZWwvZm9ybS5wcm9wZXJ0eSc7XHJcbmltcG9ydCB7IE56TWVudGlvbkNvbXBvbmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzZi1tZW50aW9uJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cclxuXHJcbiAgICAgIDxuei1tZW50aW9uICNtZW50aW9uc1xyXG4gICAgICAgIFtuelN1Z2dlc3Rpb25zXT1cImRhdGFcIlxyXG4gICAgICAgIFtuelZhbHVlV2l0aF09XCJpLnZhbHVlV2l0aFwiXHJcbiAgICAgICAgW256TG9hZGluZ109XCJsb2FkaW5nXCJcclxuICAgICAgICBbbnpOb3RGb3VuZENvbnRlbnRdPVwiaS5ub3RGb3VuZENvbnRlbnRcIlxyXG4gICAgICAgIFtuelBsYWNlbWVudF09XCJpLnBsYWNlbWVudFwiXHJcbiAgICAgICAgW256UHJlZml4XT1cImkucHJlZml4XCJcclxuICAgICAgICAobnpPblNlbGVjdCk9XCJfc2VsZWN0KCRldmVudClcIlxyXG4gICAgICAgIChuek9uU2VhcmNoQ2hhbmdlKT1cIl9zZWFyY2goJGV2ZW50KVwiPlxyXG5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidWkuaW5wdXRTdHlsZSAhPT0gJ3RleHRhcmVhJ1wiPlxyXG4gICAgICAgICAgPGlucHV0IG56TWVudGlvblRyaWdnZXIgbnotaW5wdXRcclxuICAgICAgICAgICAgW2F0dHIuaWRdPVwiaWRcIlxyXG4gICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICBbYXR0ci5kaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgICAgICAgIFtuelNpemVdPVwidWkuc2l6ZVwiXHJcbiAgICAgICAgICAgIFtuZ01vZGVsXT1cInZhbHVlXCJcclxuICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwic2V0VmFsdWUoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgIFthdHRyLm1heExlbmd0aF09XCJzY2hlbWEubWF4TGVuZ3RoIHx8IG51bGxcIlxyXG4gICAgICAgICAgICBbYXR0ci5wbGFjZWhvbGRlcl09XCJ1aS5wbGFjZWhvbGRlclwiXHJcbiAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidWkuaW5wdXRTdHlsZSA9PT0gJ3RleHRhcmVhJ1wiPlxyXG4gICAgICAgICAgPHRleHRhcmVhIG56TWVudGlvblRyaWdnZXIgbnotaW5wdXRcclxuICAgICAgICAgICAgW2F0dHIuaWRdPVwiaWRcIlxyXG4gICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICBbYXR0ci5kaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgICAgICAgIFtuelNpemVdPVwidWkuc2l6ZVwiXHJcbiAgICAgICAgICAgIFtuZ01vZGVsXT1cInZhbHVlXCJcclxuICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwic2V0VmFsdWUoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgIFthdHRyLm1heExlbmd0aF09XCJzY2hlbWEubWF4TGVuZ3RoIHx8IG51bGxcIlxyXG4gICAgICAgICAgICBbYXR0ci5wbGFjZWhvbGRlcl09XCJ1aS5wbGFjZWhvbGRlclwiXHJcbiAgICAgICAgICAgIFtuekF1dG9zaXplXT1cInVpLmF1dG9zaXplXCI+XHJcbiAgICAgICAgICA8L3RleHRhcmVhPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgPC9uei1tZW50aW9uPlxyXG5cclxuICAgIDwvc2YtaXRlbS13cmFwPlxyXG4gICAgYCxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE1lbnRpb25XaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBAVmlld0NoaWxkKCdtZW50aW9ucycpIG1lbnRpb25DaGlsZDogTnpNZW50aW9uQ29tcG9uZW50O1xyXG4gIGRhdGE6IFNGU2NoZW1hRW51bVtdID0gW107XHJcbiAgaTogYW55O1xyXG4gIGxvYWRpbmcgPSBmYWxzZTtcclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmkgPSB7XHJcbiAgICAgIHZhbHVlV2l0aDogdGhpcy51aS52YWx1ZVdpdGggfHwgKGl0ZW0gPT4gaXRlbS5sYWJlbCksXHJcbiAgICAgIG5vdEZvdW5kQ29udGVudDpcclxuICAgICAgICB0aGlzLnVpLm5vdEZvdW5kQ29udGVudCB8fCAn5peg5Yy56YWN57uT5p6c77yM6L275pWy56m65qC85a6M5oiQ6L6T5YWlJyxcclxuICAgICAgcGxhY2VtZW50OiB0aGlzLnVpLnBsYWNlbWVudCB8fCAnYm90dG9tJyxcclxuICAgICAgcHJlZml4OiB0aGlzLnVpLnByZWZpeCB8fCAnQCcsXHJcbiAgICB9O1xyXG4gICAgY29uc3QgbWluID1cclxuICAgICAgICB0eXBlb2YgdGhpcy5zY2hlbWEubWluaW11bSAhPT0gJ3VuZGVmaW5lZCcgPyB0aGlzLnNjaGVtYS5taW5pbXVtIDogLTEsXHJcbiAgICAgIG1heCA9XHJcbiAgICAgICAgdHlwZW9mIHRoaXMuc2NoZW1hLm1heGltdW0gIT09ICd1bmRlZmluZWQnID8gdGhpcy5zY2hlbWEubWF4aW11bSA6IC0xO1xyXG4gICAgaWYgKCF0aGlzLnVpLnZhbGlkYXRvciAmJiAobWluICE9PSAtMSB8fCBtYXggIT09IC0xKSkge1xyXG4gICAgICB0aGlzLnVpLnZhbGlkYXRvciA9IChcclxuICAgICAgICB2YWx1ZTogYW55LFxyXG4gICAgICAgIGZvcm1Qcm9wZXJ0eTogRm9ybVByb3BlcnR5LFxyXG4gICAgICAgIGZvcm06IFByb3BlcnR5R3JvdXAsXHJcbiAgICAgICkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvdW50ID0gdGhpcy5tZW50aW9uQ2hpbGQuZ2V0TWVudGlvbnMoKS5sZW5ndGg7XHJcbiAgICAgICAgaWYgKG1pbiAhPT0gLTEgJiYgY291bnQgPCBtaW4pIHtcclxuICAgICAgICAgIHJldHVybiBbeyBrZXl3b3JkOiAnbWVudGlvbicsIG1lc3NhZ2U6IGDmnIDlsJHmj5Dlj4ogJHttaW59IOasoWAgfV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtYXggIT09IC0xICYmIGNvdW50ID4gbWF4KSB7XHJcbiAgICAgICAgICByZXR1cm4gW3sga2V5d29yZDogJ21lbnRpb24nLCBtZXNzYWdlOiBg5pyA5aSa5o+Q5Y+KICR7bWF4fSDmrKFgIH1dO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlc2V0KHZhbHVlOiBhbnkpIHtcclxuICAgIGdldERhdGEodGhpcy5zY2hlbWEsIHRoaXMudWksIG51bGwpLnN1YnNjcmliZShsaXN0ID0+IHtcclxuICAgICAgdGhpcy5kYXRhID0gbGlzdDtcclxuICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIF9zZWxlY3Qob3B0aW9uczogYW55KSB7XHJcbiAgICBpZiAodGhpcy51aS5zZWxlY3QpIHRoaXMudWkuc2VsZWN0KG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgX3NlYXJjaChvcHRpb246IGFueSkge1xyXG4gICAgaWYgKHR5cGVvZiB0aGlzLnVpLmxvYWREYXRhICE9PSAnZnVuY3Rpb24nKSByZXR1cm47XHJcblxyXG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICh0aGlzLnVpLmxvYWREYXRhKG9wdGlvbikgYXMgT2JzZXJ2YWJsZTxTRlNjaGVtYUVudW1UeXBlW10+KVxyXG4gICAgICAucGlwZSh0YXAoKCkgPT4gKHRoaXMubG9hZGluZyA9IGZhbHNlKSksIG1hcChyZXMgPT4gZ2V0RW51bShyZXMsIG51bGwsIHRoaXMuc2NoZW1hLnJlYWRPbmx5KSkpXHJcbiAgICAgIC5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICB0aGlzLmRhdGEgPSByZXM7XHJcbiAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=