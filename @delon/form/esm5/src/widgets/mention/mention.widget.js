/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { NzMentionComponent } from 'ng-zorro-antd';
import { map, tap } from 'rxjs/operators';
import { getData, getEnum } from '../../utils';
import { ControlWidget } from '../../widget';
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
            valueWith: this.ui.valueWith || (function (item) { return item.label; }),
            notFoundContent: this.ui.notFoundContent || '无匹配结果，轻敲空格完成输入',
            placement: this.ui.placement || 'bottom',
            prefix: this.ui.prefix || '@',
        };
        /** @type {?} */
        var min = typeof this.schema.minimum !== 'undefined' ? this.schema.minimum : -1;
        /** @type {?} */
        var max = typeof this.schema.maximum !== 'undefined' ? this.schema.maximum : -1;
        if (!this.ui.validator && (min !== -1 || max !== -1)) {
            this.ui.validator = function () {
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
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {?} options
     * @return {?}
     */
    MentionWidget.prototype._select = 
    // tslint:disable-next-line:no-any
    /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        if (this.ui.select)
            this.ui.select(options);
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {?} option
     * @return {?}
     */
    MentionWidget.prototype._search = 
    // tslint:disable-next-line:no-any
    /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        var _this = this;
        if (typeof this.ui.loadData !== 'function')
            return;
        this.loading = true;
        ((/** @type {?} */ (this.ui.loadData(option))))
            .pipe(tap(function () { return (_this.loading = false); }), map(function (res) { return getEnum(res, null, _this.schema.readOnly); }))
            .subscribe(function (res) {
            _this.data = res;
            _this.cd.detectChanges();
        });
    };
    MentionWidget.decorators = [
        { type: Component, args: [{
                    selector: 'sf-mention',
                    template: "\n    <sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n\n      <nz-mention #mentions\n        [nzSuggestions]=\"data\"\n        [nzValueWith]=\"i.valueWith\"\n        [nzLoading]=\"loading\"\n        [nzNotFoundContent]=\"i.notFoundContent\"\n        [nzPlacement]=\"i.placement\"\n        [nzPrefix]=\"i.prefix\"\n        (nzOnSelect)=\"_select($event)\"\n        (nzOnSearchChange)=\"_search($event)\">\n\n        <ng-container *ngIf=\"ui.inputStyle !== 'textarea'\">\n          <input nzMentionTrigger nz-input\n            [attr.id]=\"id\"\n            [disabled]=\"disabled\"\n            [attr.disabled]=\"disabled\"\n            [nzSize]=\"ui.size\"\n            [ngModel]=\"value\"\n            (ngModelChange)=\"setValue($event)\"\n            [attr.maxLength]=\"schema.maxLength || null\"\n            [attr.placeholder]=\"ui.placeholder\"\n            autocomplete=\"off\">\n        </ng-container>\n\n        <ng-container *ngIf=\"ui.inputStyle === 'textarea'\">\n          <textarea nzMentionTrigger nz-input\n            [attr.id]=\"id\"\n            [disabled]=\"disabled\"\n            [attr.disabled]=\"disabled\"\n            [nzSize]=\"ui.size\"\n            [ngModel]=\"value\"\n            (ngModelChange)=\"setValue($event)\"\n            [attr.maxLength]=\"schema.maxLength || null\"\n            [attr.placeholder]=\"ui.placeholder\"\n            [nzAutosize]=\"ui.autosize\">\n          </textarea>\n        </ng-container>\n\n      </nz-mention>\n\n    </sf-item-wrap>\n    "
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudGlvbi53aWRnZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vZm9ybS8iLCJzb3VyY2VzIjpbInNyYy93aWRnZXRzL21lbnRpb24vbWVudGlvbi53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkQsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUcxQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRTdDO0lBK0NtQyx5Q0FBYTtJQS9DaEQ7UUFBQSxxRUF1R0M7UUF0REMsVUFBSSxHQUFtQixFQUFFLENBQUM7UUFHMUIsYUFBTyxHQUFHLEtBQUssQ0FBQzs7SUFtRGxCLENBQUM7Ozs7SUFqREMsZ0NBQVE7OztJQUFSO1FBQUEsaUJBdUJDO1FBdEJDLElBQUksQ0FBQyxDQUFDLEdBQUc7WUFDUCxTQUFTLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLElBQUksQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxLQUFLLEVBQVYsQ0FBVSxDQUFDO1lBQ3BELGVBQWUsRUFDYixJQUFJLENBQUMsRUFBRSxDQUFDLGVBQWUsSUFBSSxnQkFBZ0I7WUFDN0MsU0FBUyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxJQUFJLFFBQVE7WUFDeEMsTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxJQUFJLEdBQUc7U0FDOUIsQ0FBQzs7WUFDSSxHQUFHLEdBQUcsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FB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QUN4QixxQ0FBd0Q7O0lBQ3hELDZCQUEwQjs7SUFFMUIsMEJBQU87O0lBQ1AsZ0NBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpNZW50aW9uQ29tcG9uZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFNGVmFsdWUgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgU0ZTY2hlbWFFbnVtLCBTRlNjaGVtYUVudW1UeXBlIH0gZnJvbSAnLi4vLi4vc2NoZW1hJztcbmltcG9ydCB7IGdldERhdGEsIGdldEVudW0gfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtbWVudGlvbicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cblxuICAgICAgPG56LW1lbnRpb24gI21lbnRpb25zXG4gICAgICAgIFtuelN1Z2dlc3Rpb25zXT1cImRhdGFcIlxuICAgICAgICBbbnpWYWx1ZVdpdGhdPVwiaS52YWx1ZVdpdGhcIlxuICAgICAgICBbbnpMb2FkaW5nXT1cImxvYWRpbmdcIlxuICAgICAgICBbbnpOb3RGb3VuZENvbnRlbnRdPVwiaS5ub3RGb3VuZENvbnRlbnRcIlxuICAgICAgICBbbnpQbGFjZW1lbnRdPVwiaS5wbGFjZW1lbnRcIlxuICAgICAgICBbbnpQcmVmaXhdPVwiaS5wcmVmaXhcIlxuICAgICAgICAobnpPblNlbGVjdCk9XCJfc2VsZWN0KCRldmVudClcIlxuICAgICAgICAobnpPblNlYXJjaENoYW5nZSk9XCJfc2VhcmNoKCRldmVudClcIj5cblxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidWkuaW5wdXRTdHlsZSAhPT0gJ3RleHRhcmVhJ1wiPlxuICAgICAgICAgIDxpbnB1dCBuek1lbnRpb25UcmlnZ2VyIG56LWlucHV0XG4gICAgICAgICAgICBbYXR0ci5pZF09XCJpZFwiXG4gICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICAgICAgW2F0dHIuZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICAgICAgW256U2l6ZV09XCJ1aS5zaXplXCJcbiAgICAgICAgICAgIFtuZ01vZGVsXT1cInZhbHVlXCJcbiAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInNldFZhbHVlKCRldmVudClcIlxuICAgICAgICAgICAgW2F0dHIubWF4TGVuZ3RoXT1cInNjaGVtYS5tYXhMZW5ndGggfHwgbnVsbFwiXG4gICAgICAgICAgICBbYXR0ci5wbGFjZWhvbGRlcl09XCJ1aS5wbGFjZWhvbGRlclwiXG4gICAgICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInVpLmlucHV0U3R5bGUgPT09ICd0ZXh0YXJlYSdcIj5cbiAgICAgICAgICA8dGV4dGFyZWEgbnpNZW50aW9uVHJpZ2dlciBuei1pbnB1dFxuICAgICAgICAgICAgW2F0dHIuaWRdPVwiaWRcIlxuICAgICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgICAgIFthdHRyLmRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgICAgIFtuelNpemVdPVwidWkuc2l6ZVwiXG4gICAgICAgICAgICBbbmdNb2RlbF09XCJ2YWx1ZVwiXG4gICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJzZXRWYWx1ZSgkZXZlbnQpXCJcbiAgICAgICAgICAgIFthdHRyLm1heExlbmd0aF09XCJzY2hlbWEubWF4TGVuZ3RoIHx8IG51bGxcIlxuICAgICAgICAgICAgW2F0dHIucGxhY2Vob2xkZXJdPVwidWkucGxhY2Vob2xkZXJcIlxuICAgICAgICAgICAgW256QXV0b3NpemVdPVwidWkuYXV0b3NpemVcIj5cbiAgICAgICAgICA8L3RleHRhcmVhPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgPC9uei1tZW50aW9uPlxuXG4gICAgPC9zZi1pdGVtLXdyYXA+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTWVudGlvbldpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xuICBAVmlld0NoaWxkKCdtZW50aW9ucycpIG1lbnRpb25DaGlsZDogTnpNZW50aW9uQ29tcG9uZW50O1xuICBkYXRhOiBTRlNjaGVtYUVudW1bXSA9IFtdO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIGk6IGFueTtcbiAgbG9hZGluZyA9IGZhbHNlO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaSA9IHtcbiAgICAgIHZhbHVlV2l0aDogdGhpcy51aS52YWx1ZVdpdGggfHwgKGl0ZW0gPT4gaXRlbS5sYWJlbCksXG4gICAgICBub3RGb3VuZENvbnRlbnQ6XG4gICAgICAgIHRoaXMudWkubm90Rm91bmRDb250ZW50IHx8ICfml6DljLnphY3nu5PmnpzvvIzovbvmlbLnqbrmoLzlrozmiJDovpPlhaUnLFxuICAgICAgcGxhY2VtZW50OiB0aGlzLnVpLnBsYWNlbWVudCB8fCAnYm90dG9tJyxcbiAgICAgIHByZWZpeDogdGhpcy51aS5wcmVmaXggfHwgJ0AnLFxuICAgIH07XG4gICAgY29uc3QgbWluID0gdHlwZW9mIHRoaXMuc2NoZW1hLm1pbmltdW0gIT09ICd1bmRlZmluZWQnID8gdGhpcy5zY2hlbWEubWluaW11bSA6IC0xO1xuICAgIGNvbnN0IG1heCA9IHR5cGVvZiB0aGlzLnNjaGVtYS5tYXhpbXVtICE9PSAndW5kZWZpbmVkJyA/IHRoaXMuc2NoZW1hLm1heGltdW0gOiAtMTtcblxuICAgIGlmICghdGhpcy51aS52YWxpZGF0b3IgJiYgKG1pbiAhPT0gLTEgfHwgbWF4ICE9PSAtMSkpIHtcbiAgICAgIHRoaXMudWkudmFsaWRhdG9yID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjb3VudCA9IHRoaXMubWVudGlvbkNoaWxkLmdldE1lbnRpb25zKCkubGVuZ3RoO1xuICAgICAgICBpZiAobWluICE9PSAtMSAmJiBjb3VudCA8IG1pbikge1xuICAgICAgICAgIHJldHVybiBbeyBrZXl3b3JkOiAnbWVudGlvbicsIG1lc3NhZ2U6IGDmnIDlsJHmj5Dlj4ogJHttaW59IOasoWAgfV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1heCAhPT0gLTEgJiYgY291bnQgPiBtYXgpIHtcbiAgICAgICAgICByZXR1cm4gW3sga2V5d29yZDogJ21lbnRpb24nLCBtZXNzYWdlOiBg5pyA5aSa5o+Q5Y+KICR7bWF4fSDmrKFgIH1dO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICByZXNldCh2YWx1ZTogU0ZWYWx1ZSkge1xuICAgIGdldERhdGEodGhpcy5zY2hlbWEsIHRoaXMudWksIG51bGwpLnN1YnNjcmliZShsaXN0ID0+IHtcbiAgICAgIHRoaXMuZGF0YSA9IGxpc3Q7XG4gICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgX3NlbGVjdChvcHRpb25zOiBhbnkpIHtcbiAgICBpZiAodGhpcy51aS5zZWxlY3QpIHRoaXMudWkuc2VsZWN0KG9wdGlvbnMpO1xuICB9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBfc2VhcmNoKG9wdGlvbjogYW55KSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLnVpLmxvYWREYXRhICE9PSAnZnVuY3Rpb24nKSByZXR1cm47XG5cbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICh0aGlzLnVpLmxvYWREYXRhKG9wdGlvbikgYXMgT2JzZXJ2YWJsZTxTRlNjaGVtYUVudW1UeXBlW10+KVxuICAgICAgLnBpcGUodGFwKCgpID0+ICh0aGlzLmxvYWRpbmcgPSBmYWxzZSkpLCBtYXAocmVzID0+IGdldEVudW0ocmVzLCBudWxsLCB0aGlzLnNjaGVtYS5yZWFkT25seSkpKVxuICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICB0aGlzLmRhdGEgPSByZXM7XG4gICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfSk7XG4gIH1cbn1cbiJdfQ==