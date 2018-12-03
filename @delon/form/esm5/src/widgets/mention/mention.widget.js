/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
        if (this.ui.select)
            this.ui.select(options);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudGlvbi53aWRnZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vZm9ybS8iLCJzb3VyY2VzIjpbInNyYy93aWRnZXRzL21lbnRpb24vbWVudGlvbi53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3RCxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDN0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFHL0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5EO0lBK0NtQyx5Q0FBYTtJQS9DaEQ7UUFBQSxxRUF5R0M7UUF4REMsVUFBSSxHQUFtQixFQUFFLENBQUM7UUFFMUIsYUFBTyxHQUFHLEtBQUssQ0FBQzs7SUFzRGxCLENBQUM7Ozs7SUFwREMsZ0NBQVE7OztJQUFSO1FBQUEsaUJBNEJDO1FBM0JDLElBQUksQ0FBQyxDQUFDLEdBQUc7WUFDUCxTQUFTLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLElBQUksQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxLQUFLLEVBQVYsQ0FBVSxDQUFDO1lBQ3BELGVBQWUsRUFDYixJQUFJLENBQUMsRUFBRSxDQUFDLGVBQWUsSUFBSSxnQkFBZ0I7WUFDN0MsU0FBUyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxJQUFJLFFBQVE7WUFDeEMsTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxJQUFJLEdBQUc7U0FDOUIsQ0FBQzs7WUFDSSxHQUFHLEdBQ0wsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FB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O0lBQ3hCLHFDQUF3RDs7SUFDeEQsNkJBQTBCOztJQUMxQiwwQkFBTzs7SUFDUCxnQ0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YXAsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuaW1wb3J0IHsgZ2V0RGF0YSwgZ2V0RW51bSB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IFNGU2NoZW1hRW51bSwgU0ZTY2hlbWFFbnVtVHlwZSB9IGZyb20gJy4uLy4uL3NjaGVtYSc7XG5pbXBvcnQgeyBGb3JtUHJvcGVydHksIFByb3BlcnR5R3JvdXAgfSBmcm9tICcuLi8uLi9tb2RlbC9mb3JtLnByb3BlcnR5JztcbmltcG9ydCB7IE56TWVudGlvbkNvbXBvbmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1tZW50aW9uJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c2YtaXRlbS13cmFwIFtpZF09XCJpZFwiIFtzY2hlbWFdPVwic2NoZW1hXCIgW3VpXT1cInVpXCIgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIiBbZXJyb3JdPVwiZXJyb3JcIiBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiPlxuXG4gICAgICA8bnotbWVudGlvbiAjbWVudGlvbnNcbiAgICAgICAgW256U3VnZ2VzdGlvbnNdPVwiZGF0YVwiXG4gICAgICAgIFtuelZhbHVlV2l0aF09XCJpLnZhbHVlV2l0aFwiXG4gICAgICAgIFtuekxvYWRpbmddPVwibG9hZGluZ1wiXG4gICAgICAgIFtuek5vdEZvdW5kQ29udGVudF09XCJpLm5vdEZvdW5kQ29udGVudFwiXG4gICAgICAgIFtuelBsYWNlbWVudF09XCJpLnBsYWNlbWVudFwiXG4gICAgICAgIFtuelByZWZpeF09XCJpLnByZWZpeFwiXG4gICAgICAgIChuek9uU2VsZWN0KT1cIl9zZWxlY3QoJGV2ZW50KVwiXG4gICAgICAgIChuek9uU2VhcmNoQ2hhbmdlKT1cIl9zZWFyY2goJGV2ZW50KVwiPlxuXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ1aS5pbnB1dFN0eWxlICE9PSAndGV4dGFyZWEnXCI+XG4gICAgICAgICAgPGlucHV0IG56TWVudGlvblRyaWdnZXIgbnotaW5wdXRcbiAgICAgICAgICAgIFthdHRyLmlkXT1cImlkXCJcbiAgICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgICAgICBbYXR0ci5kaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgICAgICBbbnpTaXplXT1cInVpLnNpemVcIlxuICAgICAgICAgICAgW25nTW9kZWxdPVwidmFsdWVcIlxuICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwic2V0VmFsdWUoJGV2ZW50KVwiXG4gICAgICAgICAgICBbYXR0ci5tYXhMZW5ndGhdPVwic2NoZW1hLm1heExlbmd0aCB8fCBudWxsXCJcbiAgICAgICAgICAgIFthdHRyLnBsYWNlaG9sZGVyXT1cInVpLnBsYWNlaG9sZGVyXCJcbiAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidWkuaW5wdXRTdHlsZSA9PT0gJ3RleHRhcmVhJ1wiPlxuICAgICAgICAgIDx0ZXh0YXJlYSBuek1lbnRpb25UcmlnZ2VyIG56LWlucHV0XG4gICAgICAgICAgICBbYXR0ci5pZF09XCJpZFwiXG4gICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICAgICAgW2F0dHIuZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICAgICAgW256U2l6ZV09XCJ1aS5zaXplXCJcbiAgICAgICAgICAgIFtuZ01vZGVsXT1cInZhbHVlXCJcbiAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInNldFZhbHVlKCRldmVudClcIlxuICAgICAgICAgICAgW2F0dHIubWF4TGVuZ3RoXT1cInNjaGVtYS5tYXhMZW5ndGggfHwgbnVsbFwiXG4gICAgICAgICAgICBbYXR0ci5wbGFjZWhvbGRlcl09XCJ1aS5wbGFjZWhvbGRlclwiXG4gICAgICAgICAgICBbbnpBdXRvc2l6ZV09XCJ1aS5hdXRvc2l6ZVwiPlxuICAgICAgICAgIDwvdGV4dGFyZWE+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICA8L256LW1lbnRpb24+XG5cbiAgICA8L3NmLWl0ZW0td3JhcD5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBNZW50aW9uV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBWaWV3Q2hpbGQoJ21lbnRpb25zJykgbWVudGlvbkNoaWxkOiBOek1lbnRpb25Db21wb25lbnQ7XG4gIGRhdGE6IFNGU2NoZW1hRW51bVtdID0gW107XG4gIGk6IGFueTtcbiAgbG9hZGluZyA9IGZhbHNlO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaSA9IHtcbiAgICAgIHZhbHVlV2l0aDogdGhpcy51aS52YWx1ZVdpdGggfHwgKGl0ZW0gPT4gaXRlbS5sYWJlbCksXG4gICAgICBub3RGb3VuZENvbnRlbnQ6XG4gICAgICAgIHRoaXMudWkubm90Rm91bmRDb250ZW50IHx8ICfml6DljLnphY3nu5PmnpzvvIzovbvmlbLnqbrmoLzlrozmiJDovpPlhaUnLFxuICAgICAgcGxhY2VtZW50OiB0aGlzLnVpLnBsYWNlbWVudCB8fCAnYm90dG9tJyxcbiAgICAgIHByZWZpeDogdGhpcy51aS5wcmVmaXggfHwgJ0AnLFxuICAgIH07XG4gICAgY29uc3QgbWluID1cbiAgICAgICAgdHlwZW9mIHRoaXMuc2NoZW1hLm1pbmltdW0gIT09ICd1bmRlZmluZWQnID8gdGhpcy5zY2hlbWEubWluaW11bSA6IC0xLFxuICAgICAgbWF4ID1cbiAgICAgICAgdHlwZW9mIHRoaXMuc2NoZW1hLm1heGltdW0gIT09ICd1bmRlZmluZWQnID8gdGhpcy5zY2hlbWEubWF4aW11bSA6IC0xO1xuICAgIGlmICghdGhpcy51aS52YWxpZGF0b3IgJiYgKG1pbiAhPT0gLTEgfHwgbWF4ICE9PSAtMSkpIHtcbiAgICAgIHRoaXMudWkudmFsaWRhdG9yID0gKFxuICAgICAgICB2YWx1ZTogYW55LFxuICAgICAgICBmb3JtUHJvcGVydHk6IEZvcm1Qcm9wZXJ0eSxcbiAgICAgICAgZm9ybTogUHJvcGVydHlHcm91cCxcbiAgICAgICkgPT4ge1xuICAgICAgICBjb25zdCBjb3VudCA9IHRoaXMubWVudGlvbkNoaWxkLmdldE1lbnRpb25zKCkubGVuZ3RoO1xuICAgICAgICBpZiAobWluICE9PSAtMSAmJiBjb3VudCA8IG1pbikge1xuICAgICAgICAgIHJldHVybiBbeyBrZXl3b3JkOiAnbWVudGlvbicsIG1lc3NhZ2U6IGDmnIDlsJHmj5Dlj4ogJHttaW59IOasoWAgfV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1heCAhPT0gLTEgJiYgY291bnQgPiBtYXgpIHtcbiAgICAgICAgICByZXR1cm4gW3sga2V5d29yZDogJ21lbnRpb24nLCBtZXNzYWdlOiBg5pyA5aSa5o+Q5Y+KICR7bWF4fSDmrKFgIH1dO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICByZXNldCh2YWx1ZTogYW55KSB7XG4gICAgZ2V0RGF0YSh0aGlzLnNjaGVtYSwgdGhpcy51aSwgbnVsbCkuc3Vic2NyaWJlKGxpc3QgPT4ge1xuICAgICAgdGhpcy5kYXRhID0gbGlzdDtcbiAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuICB9XG5cbiAgX3NlbGVjdChvcHRpb25zOiBhbnkpIHtcbiAgICBpZiAodGhpcy51aS5zZWxlY3QpIHRoaXMudWkuc2VsZWN0KG9wdGlvbnMpO1xuICB9XG5cbiAgX3NlYXJjaChvcHRpb246IGFueSkge1xuICAgIGlmICh0eXBlb2YgdGhpcy51aS5sb2FkRGF0YSAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuO1xuXG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAodGhpcy51aS5sb2FkRGF0YShvcHRpb24pIGFzIE9ic2VydmFibGU8U0ZTY2hlbWFFbnVtVHlwZVtdPilcbiAgICAgIC5waXBlKHRhcCgoKSA9PiAodGhpcy5sb2FkaW5nID0gZmFsc2UpKSwgbWFwKHJlcyA9PiBnZXRFbnVtKHJlcywgbnVsbCwgdGhpcy5zY2hlbWEucmVhZE9ubHkpKSlcbiAgICAgIC5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgdGhpcy5kYXRhID0gcmVzO1xuICAgICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH0pO1xuICB9XG59XG4iXX0=