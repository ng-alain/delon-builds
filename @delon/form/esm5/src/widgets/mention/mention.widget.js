/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        var _a = this.ui, valueWith = _a.valueWith, notFoundContent = _a.notFoundContent, placement = _a.placement, prefix = _a.prefix, autosize = _a.autosize;
        this.i = {
            valueWith: valueWith || ((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.label; })),
            notFoundContent: notFoundContent || '无匹配结果，轻敲空格完成输入',
            placement: placement || 'bottom',
            prefix: prefix || '@',
            autosize: typeof autosize === 'undefined' ? true : this.ui.autosize,
        };
        /** @type {?} */
        var min = typeof this.schema.minimum !== 'undefined' ? this.schema.minimum : -1;
        /** @type {?} */
        var max = typeof this.schema.maximum !== 'undefined' ? this.schema.maximum : -1;
        if (!this.ui.validator && (min !== -1 || max !== -1)) {
            this.ui.validator = (/** @type {?} */ (((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var count = _this.mentionChild.getMentions().length;
                if (min !== -1 && count < min) {
                    return [{ keyword: 'mention', message: "\u6700\u5C11\u63D0\u53CA " + min + " \u6B21" }];
                }
                if (max !== -1 && count > max) {
                    return [{ keyword: 'mention', message: "\u6700\u591A\u63D0\u53CA " + max + " \u6B21" }];
                }
                return null;
            }))));
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
        getData(this.schema, this.ui, null).subscribe((/**
         * @param {?} list
         * @return {?}
         */
        function (list) {
            _this.data = list;
            _this.detectChanges();
        }));
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
            .pipe(tap((/**
         * @return {?}
         */
        function () { return (_this.loading = false); })), map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return getEnum(res, null, (/** @type {?} */ (_this.schema.readOnly))); })))
            .subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            _this.data = res;
            _this.detectChanges();
        }));
    };
    MentionWidget.decorators = [
        { type: Component, args: [{
                    selector: 'sf-mention',
                    template: "<sf-item-wrap [id]=\"id\"\n              [schema]=\"schema\"\n              [ui]=\"ui\"\n              [showError]=\"showError\"\n              [error]=\"error\"\n              [showTitle]=\"schema.title\">\n  <nz-mention #mentions\n              [nzSuggestions]=\"data\"\n              [nzValueWith]=\"i.valueWith\"\n              [nzLoading]=\"loading\"\n              [nzNotFoundContent]=\"i.notFoundContent\"\n              [nzPlacement]=\"i.placement\"\n              [nzPrefix]=\"i.prefix\"\n              (nzOnSelect)=\"_select($event)\"\n              (nzOnSearchChange)=\"_search($event)\">\n    <ng-container *ngIf=\"ui.inputStyle !== 'textarea'\">\n      <input nzMentionTrigger\n             nz-input\n             [attr.id]=\"id\"\n             [disabled]=\"disabled\"\n             [attr.disabled]=\"disabled\"\n             [nzSize]=\"ui.size\"\n             [ngModel]=\"value\"\n             (ngModelChange)=\"setValue($event)\"\n             [attr.maxLength]=\"schema.maxLength || null\"\n             [attr.placeholder]=\"ui.placeholder\"\n             autocomplete=\"off\" />\n    </ng-container>\n\n    <ng-container *ngIf=\"ui.inputStyle === 'textarea'\">\n      <textarea nzMentionTrigger\n                nz-input\n                [attr.id]=\"id\"\n                [disabled]=\"disabled\"\n                [attr.disabled]=\"disabled\"\n                [nzSize]=\"ui.size\"\n                [ngModel]=\"value\"\n                (ngModelChange)=\"setValue($event)\"\n                [attr.maxLength]=\"schema.maxLength || null\"\n                [attr.placeholder]=\"ui.placeholder\"\n                [nzAutosize]=\"i.autosize\">\n        </textarea>\n    </ng-container>\n  </nz-mention>\n</sf-item-wrap>\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudGlvbi53aWRnZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vZm9ybS8iLCJzb3VyY2VzIjpbInNyYy93aWRnZXRzL21lbnRpb24vbWVudGlvbi53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkQsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUcxQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRTdDO0lBSW1DLHlDQUFhO0lBSmhEO1FBQUEscUVBNkRDO1FBdkRDLFVBQUksR0FBbUIsRUFBRSxDQUFDO1FBRTFCLGFBQU8sR0FBRyxLQUFLLENBQUM7O0lBcURsQixDQUFDOzs7O0lBbkRDLGdDQUFROzs7SUFBUjtRQUFBLGlCQXdCQztRQXZCTyxJQUFBLFlBQXFFLEVBQW5FLHdCQUFTLEVBQUUsb0NBQWUsRUFBRSx3QkFBUyxFQUFFLGtCQUFNLEVBQUUsc0JBQW9CO1FBQzNFLElBQUksQ0FBQyxDQUFDLEdBQUc7WUFDUCxTQUFTLEVBQUUsU0FBUyxJQUFJOzs7O1lBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsS0FBSyxFQUFWLENBQVUsRUFBQztZQUM1QyxlQUFlLEVBQUUsZUFBZSxJQUFJLGdCQUFnQjtZQUNwRCxTQUFTLEVBQUUsU0FBUyxJQUFJLFFBQVE7WUFDaEMsTUFBTSxFQUFFLE1BQU0sSUFBSSxHQUFHO1lBQ3JCLFFBQVEsRUFBRSxPQUFPLFFBQVEsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFR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QUNyQzs7OytCQUVFLFNBQVMsU0FBQyxVQUFVOztJQXdEdkIsb0JBQUM7Q0FBQSxBQTdERCxDQUltQyxhQUFhLEdBeUQvQztTQXpEWSxhQUFhOzs7SUFDeEIscUNBQXdEOztJQUN4RCw2QkFBMEI7O0lBQzFCLDBCQUFPOztJQUNQLGdDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56TWVudGlvbkNvbXBvbmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTRlZhbHVlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlJztcbmltcG9ydCB7IFNGU2NoZW1hRW51bSwgU0ZTY2hlbWFFbnVtVHlwZSB9IGZyb20gJy4uLy4uL3NjaGVtYSc7XG5pbXBvcnQgeyBnZXREYXRhLCBnZXRFbnVtIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLW1lbnRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vbWVudGlvbi53aWRnZXQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIE1lbnRpb25XaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQFZpZXdDaGlsZCgnbWVudGlvbnMnKSBtZW50aW9uQ2hpbGQ6IE56TWVudGlvbkNvbXBvbmVudDtcbiAgZGF0YTogU0ZTY2hlbWFFbnVtW10gPSBbXTtcbiAgaTogYW55O1xuICBsb2FkaW5nID0gZmFsc2U7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3QgeyB2YWx1ZVdpdGgsIG5vdEZvdW5kQ29udGVudCwgcGxhY2VtZW50LCBwcmVmaXgsIGF1dG9zaXplIH0gPSB0aGlzLnVpO1xuICAgIHRoaXMuaSA9IHtcbiAgICAgIHZhbHVlV2l0aDogdmFsdWVXaXRoIHx8IChpdGVtID0+IGl0ZW0ubGFiZWwpLFxuICAgICAgbm90Rm91bmRDb250ZW50OiBub3RGb3VuZENvbnRlbnQgfHwgJ+aXoOWMuemFjee7k+aenO+8jOi9u+aVsuepuuagvOWujOaIkOi+k+WFpScsXG4gICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudCB8fCAnYm90dG9tJyxcbiAgICAgIHByZWZpeDogcHJlZml4IHx8ICdAJyxcbiAgICAgIGF1dG9zaXplOiB0eXBlb2YgYXV0b3NpemUgPT09ICd1bmRlZmluZWQnID8gdHJ1ZSA6IHRoaXMudWkuYXV0b3NpemUsXG4gICAgfTtcbiAgICBjb25zdCBtaW4gPSB0eXBlb2YgdGhpcy5zY2hlbWEubWluaW11bSAhPT0gJ3VuZGVmaW5lZCcgPyB0aGlzLnNjaGVtYS5taW5pbXVtIDogLTE7XG4gICAgY29uc3QgbWF4ID0gdHlwZW9mIHRoaXMuc2NoZW1hLm1heGltdW0gIT09ICd1bmRlZmluZWQnID8gdGhpcy5zY2hlbWEubWF4aW11bSA6IC0xO1xuXG4gICAgaWYgKCF0aGlzLnVpLnZhbGlkYXRvciAmJiAobWluICE9PSAtMSB8fCBtYXggIT09IC0xKSkge1xuICAgICAgdGhpcy51aS52YWxpZGF0b3IgPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBjb3VudCA9IHRoaXMubWVudGlvbkNoaWxkLmdldE1lbnRpb25zKCkubGVuZ3RoO1xuICAgICAgICBpZiAobWluICE9PSAtMSAmJiBjb3VudCA8IG1pbikge1xuICAgICAgICAgIHJldHVybiBbeyBrZXl3b3JkOiAnbWVudGlvbicsIG1lc3NhZ2U6IGDmnIDlsJHmj5Dlj4ogJHttaW59IOasoWAgfV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1heCAhPT0gLTEgJiYgY291bnQgPiBtYXgpIHtcbiAgICAgICAgICByZXR1cm4gW3sga2V5d29yZDogJ21lbnRpb24nLCBtZXNzYWdlOiBg5pyA5aSa5o+Q5Y+KICR7bWF4fSDmrKFgIH1dO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSkgYXMgYW55O1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0KHZhbHVlOiBTRlZhbHVlKSB7XG4gICAgZ2V0RGF0YSh0aGlzLnNjaGVtYSwgdGhpcy51aSwgbnVsbCkuc3Vic2NyaWJlKGxpc3QgPT4ge1xuICAgICAgdGhpcy5kYXRhID0gbGlzdDtcbiAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuICB9XG5cbiAgX3NlbGVjdChvcHRpb25zOiBhbnkpIHtcbiAgICBpZiAodGhpcy51aS5zZWxlY3QpIHRoaXMudWkuc2VsZWN0KG9wdGlvbnMpO1xuICB9XG5cbiAgX3NlYXJjaChvcHRpb246IGFueSkge1xuICAgIGlmICh0eXBlb2YgdGhpcy51aS5sb2FkRGF0YSAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuO1xuXG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAodGhpcy51aS5sb2FkRGF0YShvcHRpb24pIGFzIE9ic2VydmFibGU8U0ZTY2hlbWFFbnVtVHlwZVtdPilcbiAgICAgIC5waXBlKFxuICAgICAgICB0YXAoKCkgPT4gKHRoaXMubG9hZGluZyA9IGZhbHNlKSksXG4gICAgICAgIG1hcChyZXMgPT4gZ2V0RW51bShyZXMsIG51bGwsIHRoaXMuc2NoZW1hLnJlYWRPbmx5ISkpLFxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICB0aGlzLmRhdGEgPSByZXM7XG4gICAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfSk7XG4gIH1cbn1cbiJdfQ==