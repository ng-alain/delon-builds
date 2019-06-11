/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { getData, toBool } from '../../utils';
import { ControlWidget } from '../../widget';
var SelectWidget = /** @class */ (function (_super) {
    tslib_1.__extends(SelectWidget, _super);
    function SelectWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hasGroup = false;
        return _this;
    }
    /**
     * @private
     * @param {?} list
     * @return {?}
     */
    SelectWidget.prototype.checkGroup = /**
     * @private
     * @param {?} list
     * @return {?}
     */
    function (list) {
        this.hasGroup = list.filter((/**
         * @param {?} w
         * @return {?}
         */
        function (w) { return w.group === true; })).length > 0;
    };
    /**
     * @return {?}
     */
    SelectWidget.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _a = this.ui, autoClearSearchValue = _a.autoClearSearchValue, allowClear = _a.allowClear, autoFocus = _a.autoFocus, dropdownClassName = _a.dropdownClassName, dropdownMatchSelectWidth = _a.dropdownMatchSelectWidth, serverSearch = _a.serverSearch, maxMultipleCount = _a.maxMultipleCount, mode = _a.mode, notFoundContent = _a.notFoundContent, showSearch = _a.showSearch, tokenSeparators = _a.tokenSeparators, maxTagCount = _a.maxTagCount, compareWith = _a.compareWith;
        this.i = {
            autoClearSearchValue: toBool(autoClearSearchValue, true),
            allowClear: allowClear,
            autoFocus: toBool(autoFocus, false),
            dropdownClassName: dropdownClassName || null,
            dropdownMatchSelectWidth: toBool(dropdownMatchSelectWidth, true),
            serverSearch: toBool(serverSearch, false),
            maxMultipleCount: maxMultipleCount || Infinity,
            mode: mode || 'default',
            notFoundContent: notFoundContent,
            showSearch: toBool(showSearch, true),
            tokenSeparators: tokenSeparators || [],
            maxTagCount: maxTagCount || undefined,
            compareWith: compareWith || ((/**
             * @param {?} o1
             * @param {?} o2
             * @return {?}
             */
            function (o1, o2) { return o1 === o2; })),
        };
    };
    /**
     * @param {?} value
     * @return {?}
     */
    SelectWidget.prototype.reset = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        getData(this.schema, this.ui, this.formProperty.formData).subscribe((/**
         * @param {?} list
         * @return {?}
         */
        function (list) {
            _this._value = value;
            _this.data = list;
            _this.checkGroup(list);
            _this.detectChanges();
        }));
    };
    /**
     * @param {?} values
     * @return {?}
     */
    SelectWidget.prototype.change = /**
     * @param {?} values
     * @return {?}
     */
    function (values) {
        if (this.ui.change) {
            this.ui.change(values);
        }
        this.setValue(values);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    SelectWidget.prototype.openChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.ui.openChange) {
            this.ui.openChange(value);
        }
    };
    /**
     * @param {?} text
     * @return {?}
     */
    SelectWidget.prototype.searchChange = /**
     * @param {?} text
     * @return {?}
     */
    function (text) {
        var _this = this;
        if (this.ui.onSearch) {
            this.ui.onSearch(text).then((/**
             * @param {?} list
             * @return {?}
             */
            function (list) {
                _this.data = list;
                _this.checkGroup(list);
                _this.detectChanges();
            }));
            return;
        }
        this.detectChanges();
    };
    /**
     * @return {?}
     */
    SelectWidget.prototype.scrollToBottom = /**
     * @return {?}
     */
    function () {
        if (this.ui.scrollToBottom) {
            this.ui.scrollToBottom();
        }
    };
    SelectWidget.decorators = [
        { type: Component, args: [{
                    selector: 'sf-select',
                    template: "<sf-item-wrap [id]=\"id\"\n              [schema]=\"schema\"\n              [ui]=\"ui\"\n              [showError]=\"showError\"\n              [error]=\"error\"\n              [showTitle]=\"schema.title\">\n  <nz-select [nzDisabled]=\"disabled\"\n             [nzSize]=\"ui.size\"\n             [(ngModel)]=\"_value\"\n             (ngModelChange)=\"change($event)\"\n             [nzPlaceHolder]=\"ui.placeholder\"\n             [nzAutoClearSearchValue]=\"i.autoClearSearchValue\"\n             [nzAllowClear]=\"i.allowClear\"\n             [nzAutoFocus]=\"i.autoFocus\"\n             [nzDropdownClassName]=\"i.dropdownClassName\"\n             [nzDropdownMatchSelectWidth]=\"i.dropdownMatchSelectWidth\"\n             [nzServerSearch]=\"i.serverSearch\"\n             [nzMaxMultipleCount]=\"i.maxMultipleCount\"\n             [nzMode]=\"i.mode\"\n             [nzNotFoundContent]=\"i.notFoundContent\"\n             [nzShowSearch]=\"i.showSearch\"\n             [nzTokenSeparators]=\"i.tokenSeparators\"\n             [nzMaxTagCount]=\"i.maxTagCount\"\n             [compareWith]=\"i.compareWith\"\n             (nzOpenChange)=\"openChange($event)\"\n             (nzOnSearch)=\"searchChange($event)\"\n             (nzScrollToBottom)=\"scrollToBottom()\">\n    <ng-container *ngIf=\"!hasGroup\">\n      <nz-option *ngFor=\"let o of data\"\n                 [nzLabel]=\"o.label\"\n                 [nzValue]=\"o.value\"\n                 [nzDisabled]=\"o.disabled\">\n      </nz-option>\n    </ng-container>\n    <ng-container *ngIf=\"hasGroup\">\n      <nz-option-group *ngFor=\"let i of data\"\n                       [nzLabel]=\"i.label\">\n        <nz-option *ngFor=\"let o of i.children\"\n                   [nzLabel]=\"o.label\"\n                   [nzValue]=\"o.value\"\n                   [nzDisabled]=\"o.disabled\">\n        </nz-option>\n      </nz-option-group>\n    </ng-container>\n  </nz-select>\n</sf-item-wrap>\n",
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    return SelectWidget;
}(ControlWidget));
export { SelectWidget };
if (false) {
    /** @type {?} */
    SelectWidget.prototype.i;
    /** @type {?} */
    SelectWidget.prototype.data;
    /** @type {?} */
    SelectWidget.prototype._value;
    /** @type {?} */
    SelectWidget.prototype.hasGroup;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9mb3JtLyIsInNvdXJjZXMiOlsic3JjL3dpZGdldHMvc2VsZWN0L3NlbGVjdC53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3JFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFN0M7SUFNa0Msd0NBQWE7SUFOL0M7UUFBQSxxRUF3RkM7UUE5RUMsY0FBUSxHQUFHLEtBQUssQ0FBQzs7SUE4RW5CLENBQUM7Ozs7OztJQTVFUyxpQ0FBVTs7Ozs7SUFBbEIsVUFBbUIsSUFBb0I7UUFDckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTTs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEtBQUssS0FBSyxJQUFJLEVBQWhCLENBQWdCLEVBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7Ozs7SUFFRCwrQkFBUTs7O0lBQVI7UUFDUSxJQUFBLFlBY0ssRUFiVCw4Q0FBb0IsRUFDcEIsMEJBQVUsRUFDVix3QkFBUyxFQUNULHdDQUFpQixFQUNqQixzREFBd0IsRUFDeEIsOEJBQVksRUFDWixzQ0FBZ0IsRUFDaEIsY0FBSSxFQUNKLG9DQUFlLEVBQ2YsMEJBQVUsRUFDVixvQ0FBZSxFQUNmLDRCQUFXLEVBQ1gsNEJBQ1M7UUFDWCxJQUFJLENBQUMsQ0FBQyxHQUFHO1lBQ1Asb0JBQW9CLEVBQUUsTUFBTSxDQUFDLG9CQUFvQixFQUFFLElBQUksQ0FBQztZQUN4RCxVQUFVLFlBQUE7WUFDVixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUM7WUFDbkMsaUJBQWlCLEVBQUUsaUJBQWlC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T25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU0ZWYWx1ZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBTRlNjaGVtYUVudW0gfSBmcm9tICcuLi8uLi9zY2hlbWEnO1xuaW1wb3J0IHsgZ2V0RGF0YSwgdG9Cb29sIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLXNlbGVjdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZWxlY3Qud2lkZ2V0Lmh0bWwnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0V2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGk6IGFueTtcbiAgZGF0YTogU0ZTY2hlbWFFbnVtW107XG4gIF92YWx1ZTogYW55O1xuICBoYXNHcm91cCA9IGZhbHNlO1xuXG4gIHByaXZhdGUgY2hlY2tHcm91cChsaXN0OiBTRlNjaGVtYUVudW1bXSk6IHZvaWQge1xuICAgIHRoaXMuaGFzR3JvdXAgPSBsaXN0LmZpbHRlcih3ID0+IHcuZ3JvdXAgPT09IHRydWUpLmxlbmd0aCA+IDA7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCB7XG4gICAgICBhdXRvQ2xlYXJTZWFyY2hWYWx1ZSxcbiAgICAgIGFsbG93Q2xlYXIsXG4gICAgICBhdXRvRm9jdXMsXG4gICAgICBkcm9wZG93bkNsYXNzTmFtZSxcbiAgICAgIGRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aCxcbiAgICAgIHNlcnZlclNlYXJjaCxcbiAgICAgIG1heE11bHRpcGxlQ291bnQsXG4gICAgICBtb2RlLFxuICAgICAgbm90Rm91bmRDb250ZW50LFxuICAgICAgc2hvd1NlYXJjaCxcbiAgICAgIHRva2VuU2VwYXJhdG9ycyxcbiAgICAgIG1heFRhZ0NvdW50LFxuICAgICAgY29tcGFyZVdpdGgsXG4gICAgfSA9IHRoaXMudWk7XG4gICAgdGhpcy5pID0ge1xuICAgICAgYXV0b0NsZWFyU2VhcmNoVmFsdWU6IHRvQm9vbChhdXRvQ2xlYXJTZWFyY2hWYWx1ZSwgdHJ1ZSksXG4gICAgICBhbGxvd0NsZWFyLFxuICAgICAgYXV0b0ZvY3VzOiB0b0Jvb2woYXV0b0ZvY3VzLCBmYWxzZSksXG4gICAgICBkcm9wZG93bkNsYXNzTmFtZTogZHJvcGRvd25DbGFzc05hbWUgfHwgbnVsbCxcbiAgICAgIGRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aDogdG9Cb29sKGRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aCwgdHJ1ZSksXG4gICAgICBzZXJ2ZXJTZWFyY2g6IHRvQm9vbChzZXJ2ZXJTZWFyY2gsIGZhbHNlKSxcbiAgICAgIG1heE11bHRpcGxlQ291bnQ6IG1heE11bHRpcGxlQ291bnQgfHwgSW5maW5pdHksXG4gICAgICBtb2RlOiBtb2RlIHx8ICdkZWZhdWx0JyxcbiAgICAgIG5vdEZvdW5kQ29udGVudCxcbiAgICAgIHNob3dTZWFyY2g6IHRvQm9vbChzaG93U2VhcmNoLCB0cnVlKSxcbiAgICAgIHRva2VuU2VwYXJhdG9yczogdG9rZW5TZXBhcmF0b3JzIHx8IFtdLFxuICAgICAgbWF4VGFnQ291bnQ6IG1heFRhZ0NvdW50IHx8IHVuZGVmaW5lZCxcbiAgICAgIGNvbXBhcmVXaXRoOiBjb21wYXJlV2l0aCB8fCAoKG8xOiBhbnksIG8yOiBhbnkpID0+IG8xID09PSBvMiksXG4gICAgfTtcbiAgfVxuXG4gIHJlc2V0KHZhbHVlOiBTRlZhbHVlKSB7XG4gICAgZ2V0RGF0YSh0aGlzLnNjaGVtYSwgdGhpcy51aSwgdGhpcy5mb3JtUHJvcGVydHkuZm9ybURhdGEpLnN1YnNjcmliZShsaXN0ID0+IHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLmRhdGEgPSBsaXN0O1xuICAgICAgdGhpcy5jaGVja0dyb3VwKGxpc3QpO1xuICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gIH1cblxuICBjaGFuZ2UodmFsdWVzOiBTRlZhbHVlKSB7XG4gICAgaWYgKHRoaXMudWkuY2hhbmdlKSB7XG4gICAgICB0aGlzLnVpLmNoYW5nZSh2YWx1ZXMpO1xuICAgIH1cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlcyk7XG4gIH1cblxuICBvcGVuQ2hhbmdlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMudWkub3BlbkNoYW5nZSkge1xuICAgICAgdGhpcy51aS5vcGVuQ2hhbmdlKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBzZWFyY2hDaGFuZ2UodGV4dDogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMudWkub25TZWFyY2gpIHtcbiAgICAgIHRoaXMudWkub25TZWFyY2godGV4dCkudGhlbigobGlzdDogU0ZTY2hlbWFFbnVtW10pID0+IHtcbiAgICAgICAgdGhpcy5kYXRhID0gbGlzdDtcbiAgICAgICAgdGhpcy5jaGVja0dyb3VwKGxpc3QpO1xuICAgICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHNjcm9sbFRvQm90dG9tKCkge1xuICAgIGlmICh0aGlzLnVpLnNjcm9sbFRvQm90dG9tKSB7XG4gICAgICB0aGlzLnVpLnNjcm9sbFRvQm90dG9tKCk7XG4gICAgfVxuICB9XG59XG4iXX0=