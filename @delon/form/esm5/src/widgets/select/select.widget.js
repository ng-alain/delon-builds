/**
 * @fileoverview added by tsickle
 * Generated from: src/widgets/select/select.widget.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __extends } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { getData, toBool } from '../../utils';
import { ControlUIWidget } from '../../widget';
var SelectWidget = /** @class */ (function (_super) {
    __extends(SelectWidget, _super);
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
        this.hasGroup = (list || []).filter((/**
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
        var _a = this.ui, autoClearSearchValue = _a.autoClearSearchValue, borderless = _a.borderless, autoFocus = _a.autoFocus, dropdownMatchSelectWidth = _a.dropdownMatchSelectWidth, serverSearch = _a.serverSearch, maxMultipleCount = _a.maxMultipleCount, mode = _a.mode, showSearch = _a.showSearch, tokenSeparators = _a.tokenSeparators, maxTagCount = _a.maxTagCount, compareWith = _a.compareWith, optionHeightPx = _a.optionHeightPx, optionOverflowSize = _a.optionOverflowSize;
        this.i = {
            autoClearSearchValue: toBool(autoClearSearchValue, true),
            borderless: toBool(borderless, false),
            autoFocus: toBool(autoFocus, false),
            dropdownMatchSelectWidth: toBool(dropdownMatchSelectWidth, true),
            serverSearch: toBool(serverSearch, false),
            maxMultipleCount: maxMultipleCount || Infinity,
            mode: mode || 'default',
            showSearch: toBool(showSearch, true),
            tokenSeparators: tokenSeparators || [],
            maxTagCount: maxTagCount || undefined,
            optionHeightPx: optionHeightPx || 32,
            optionOverflowSize: optionOverflowSize || 8,
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
        getData(this.schema, this.ui, value).subscribe((/**
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
        this.setValue(values == null ? undefined : values);
    };
    /**
     * @param {?} status
     * @return {?}
     */
    SelectWidget.prototype.openChange = /**
     * @param {?} status
     * @return {?}
     */
    function (status) {
        if (this.ui.openChange) {
            this.ui.openChange(status);
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
                    template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <nz-select\n    [nzDisabled]=\"disabled\"\n    [(ngModel)]=\"_value\"\n    (ngModelChange)=\"change($event)\"\n    [nzSize]=\"ui.size\"\n    [nzPlaceHolder]=\"ui.placeholder\"\n    [nzNotFoundContent]=\"ui.notFoundContent\"\n    [nzDropdownClassName]=\"ui.dropdownClassName\"\n    [nzAllowClear]=\"ui.allowClear\"\n    [nzDropdownStyle]=\"ui.dropdownStyle\"\n    [nzCustomTemplate]=\"ui.customTemplate\"\n    [nzSuffixIcon]=\"ui.suffixIcon\"\n    [nzRemoveIcon]=\"ui.removeIcon\"\n    [nzClearIcon]=\"ui.clearIcon\"\n    [nzMenuItemSelectedIcon]=\"ui.menuItemSelectedIcon\"\n    [nzMaxTagPlaceholder]=\"ui.maxTagPlaceholder\"\n    [nzDropdownRender]=\"ui.dropdownRender\"\n    [nzAutoClearSearchValue]=\"i.autoClearSearchValue\"\n    [nzBorderless]=\"i.borderless\"\n    [nzAutoFocus]=\"i.autoFocus\"\n    [nzDropdownMatchSelectWidth]=\"i.dropdownMatchSelectWidth\"\n    [nzServerSearch]=\"i.serverSearch\"\n    [nzMaxMultipleCount]=\"i.maxMultipleCount\"\n    [nzMode]=\"i.mode\"\n    [nzShowSearch]=\"i.showSearch\"\n    [nzTokenSeparators]=\"i.tokenSeparators\"\n    [nzMaxTagCount]=\"i.maxTagCount\"\n    [compareWith]=\"i.compareWith\"\n    [nzOptionHeightPx]=\"i.optionHeightPx\"\n    [nzOptionOverflowSize]=\"i.optionOverflowSize\"\n    (nzOpenChange)=\"openChange($event)\"\n    (nzOnSearch)=\"searchChange($event)\"\n    (nzScrollToBottom)=\"scrollToBottom()\"\n  >\n    <ng-container *ngIf=\"!hasGroup\">\n      <nz-option *ngFor=\"let o of data\" [nzLabel]=\"o.label\" [nzValue]=\"o.value\" [nzDisabled]=\"o.disabled\"></nz-option>\n    </ng-container>\n    <ng-container *ngIf=\"hasGroup\">\n      <nz-option-group *ngFor=\"let i of data\" [nzLabel]=\"i.label\">\n        <nz-option *ngFor=\"let o of i.children\" [nzLabel]=\"o.label\" [nzValue]=\"o.value\" [nzDisabled]=\"o.disabled\"></nz-option>\n      </nz-option-group>\n    </ng-container>\n  </nz-select>\n</sf-item-wrap>\n",
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    return SelectWidget;
}(ControlUIWidget));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9mb3JtLyIsInNvdXJjZXMiOlsic3JjL3dpZGdldHMvc2VsZWN0L3NlbGVjdC53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUlyRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM5QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRy9DO0lBTWtDLGdDQUFxQztJQU52RTtRQUFBLHFFQXdGQztRQTlFQyxjQUFRLEdBQUcsS0FBSyxDQUFDOztJQThFbkIsQ0FBQzs7Ozs7O0lBNUVTLGlDQUFVOzs7OztJQUFsQixVQUFtQixJQUFvQjtRQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU07Ozs7UUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxLQUFLLEtBQUssSUFBSSxFQUFoQixDQUFnQixFQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUN4RSxDQUFDOzs7O0lBRUQsK0JBQVE7OztJQUFSO1FBQ1EsSUFBQSxZQWNLLEVBYlQsOENBQW9CLEVBQ3BCLDBCQUFVLEVBQ1Ysd0JBQVMsRUFDVCxzREFBd0IsRUFDeEIsOEJBQVksRUFDWixzQ0FBZ0IsRUFDaEIsY0FBSSxFQUNKLDBCQUFVLEVBQ1Ysb0NBQWUsRUFDZiw0QkFBVyxFQUNYLDRCQUFXLEVBQ1gsa0NBQWMsRUFDZCwwQ0FDUztRQUNYLElBQUksQ0FBQyxDQUFDLEdBQUc7WUFDUCxvQkFBb0IsRUFBRSxNQUFNLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDO1lBQ3hELFVBQVUsRUFBRSxNQUFNLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQztZQUNyQyxTQUFTLEVBQUUsTUFB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QVk7OztJQUN2Qix5QkFBd0I7O0lBQ3hCLDRCQUFxQjs7SUFDckIsOEJBQWtCOztJQUNsQixnQ0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBTRlZhbHVlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlJztcbmltcG9ydCB7IFNGU2NoZW1hRW51bSB9IGZyb20gJy4uLy4uL3NjaGVtYSc7XG5pbXBvcnQgeyBnZXREYXRhLCB0b0Jvb2wgfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgeyBDb250cm9sVUlXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuaW1wb3J0IHsgU0ZTZWxlY3RXaWRnZXRTY2hlbWEgfSBmcm9tICcuL3NjaGVtYSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLXNlbGVjdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZWxlY3Qud2lkZ2V0Lmh0bWwnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0V2lkZ2V0IGV4dGVuZHMgQ29udHJvbFVJV2lkZ2V0PFNGU2VsZWN0V2lkZ2V0U2NoZW1hPiBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGk6IFNGU2VsZWN0V2lkZ2V0U2NoZW1hO1xuICBkYXRhOiBTRlNjaGVtYUVudW1bXTtcbiAgX3ZhbHVlOiBOelNhZmVBbnk7XG4gIGhhc0dyb3VwID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBjaGVja0dyb3VwKGxpc3Q6IFNGU2NoZW1hRW51bVtdKTogdm9pZCB7XG4gICAgdGhpcy5oYXNHcm91cCA9IChsaXN0IHx8IFtdKS5maWx0ZXIodyA9PiB3Lmdyb3VwID09PSB0cnVlKS5sZW5ndGggPiAwO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3Qge1xuICAgICAgYXV0b0NsZWFyU2VhcmNoVmFsdWUsXG4gICAgICBib3JkZXJsZXNzLFxuICAgICAgYXV0b0ZvY3VzLFxuICAgICAgZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoLFxuICAgICAgc2VydmVyU2VhcmNoLFxuICAgICAgbWF4TXVsdGlwbGVDb3VudCxcbiAgICAgIG1vZGUsXG4gICAgICBzaG93U2VhcmNoLFxuICAgICAgdG9rZW5TZXBhcmF0b3JzLFxuICAgICAgbWF4VGFnQ291bnQsXG4gICAgICBjb21wYXJlV2l0aCxcbiAgICAgIG9wdGlvbkhlaWdodFB4LFxuICAgICAgb3B0aW9uT3ZlcmZsb3dTaXplLFxuICAgIH0gPSB0aGlzLnVpO1xuICAgIHRoaXMuaSA9IHtcbiAgICAgIGF1dG9DbGVhclNlYXJjaFZhbHVlOiB0b0Jvb2woYXV0b0NsZWFyU2VhcmNoVmFsdWUsIHRydWUpLFxuICAgICAgYm9yZGVybGVzczogdG9Cb29sKGJvcmRlcmxlc3MsIGZhbHNlKSxcbiAgICAgIGF1dG9Gb2N1czogdG9Cb29sKGF1dG9Gb2N1cywgZmFsc2UpLFxuICAgICAgZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoOiB0b0Jvb2woZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoLCB0cnVlKSxcbiAgICAgIHNlcnZlclNlYXJjaDogdG9Cb29sKHNlcnZlclNlYXJjaCwgZmFsc2UpLFxuICAgICAgbWF4TXVsdGlwbGVDb3VudDogbWF4TXVsdGlwbGVDb3VudCB8fCBJbmZpbml0eSxcbiAgICAgIG1vZGU6IG1vZGUgfHwgJ2RlZmF1bHQnLFxuICAgICAgc2hvd1NlYXJjaDogdG9Cb29sKHNob3dTZWFyY2gsIHRydWUpLFxuICAgICAgdG9rZW5TZXBhcmF0b3JzOiB0b2tlblNlcGFyYXRvcnMgfHwgW10sXG4gICAgICBtYXhUYWdDb3VudDogbWF4VGFnQ291bnQgfHwgdW5kZWZpbmVkLFxuICAgICAgb3B0aW9uSGVpZ2h0UHg6IG9wdGlvbkhlaWdodFB4IHx8IDMyLFxuICAgICAgb3B0aW9uT3ZlcmZsb3dTaXplOiBvcHRpb25PdmVyZmxvd1NpemUgfHwgOCxcbiAgICAgIGNvbXBhcmVXaXRoOiBjb21wYXJlV2l0aCB8fCAoKG8xOiBhbnksIG8yOiBhbnkpID0+IG8xID09PSBvMiksXG4gICAgfTtcbiAgfVxuXG4gIHJlc2V0KHZhbHVlOiBTRlZhbHVlKSB7XG4gICAgZ2V0RGF0YSh0aGlzLnNjaGVtYSwgdGhpcy51aSwgdmFsdWUpLnN1YnNjcmliZShsaXN0ID0+IHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLmRhdGEgPSBsaXN0O1xuICAgICAgdGhpcy5jaGVja0dyb3VwKGxpc3QpO1xuICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gIH1cblxuICBjaGFuZ2UodmFsdWVzOiBTRlZhbHVlKSB7XG4gICAgaWYgKHRoaXMudWkuY2hhbmdlKSB7XG4gICAgICB0aGlzLnVpLmNoYW5nZSh2YWx1ZXMpO1xuICAgIH1cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlcyA9PSBudWxsID8gdW5kZWZpbmVkIDogdmFsdWVzKTtcbiAgfVxuXG4gIG9wZW5DaGFuZ2Uoc3RhdHVzOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMudWkub3BlbkNoYW5nZSkge1xuICAgICAgdGhpcy51aS5vcGVuQ2hhbmdlKHN0YXR1cyk7XG4gICAgfVxuICB9XG5cbiAgc2VhcmNoQ2hhbmdlKHRleHQ6IHN0cmluZykge1xuICAgIGlmICh0aGlzLnVpLm9uU2VhcmNoKSB7XG4gICAgICB0aGlzLnVpLm9uU2VhcmNoKHRleHQpLnRoZW4oKGxpc3Q6IFNGU2NoZW1hRW51bVtdKSA9PiB7XG4gICAgICAgIHRoaXMuZGF0YSA9IGxpc3Q7XG4gICAgICAgIHRoaXMuY2hlY2tHcm91cChsaXN0KTtcbiAgICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBzY3JvbGxUb0JvdHRvbSgpIHtcbiAgICBpZiAodGhpcy51aS5zY3JvbGxUb0JvdHRvbSkge1xuICAgICAgdGhpcy51aS5zY3JvbGxUb0JvdHRvbSgpO1xuICAgIH1cbiAgfVxufVxuIl19