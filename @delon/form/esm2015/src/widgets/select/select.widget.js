/**
 * @fileoverview added by tsickle
 * Generated from: src/widgets/select/select.widget.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { getData, toBool } from '../../utils';
import { ControlUIWidget } from '../../widget';
export class SelectWidget extends ControlUIWidget {
    constructor() {
        super(...arguments);
        this.hasGroup = false;
    }
    /**
     * @private
     * @param {?} list
     * @return {?}
     */
    checkGroup(list) {
        this.hasGroup = (list || []).filter((/**
         * @param {?} w
         * @return {?}
         */
        w => w.group === true)).length > 0;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        const { autoClearSearchValue, borderless, autoFocus, dropdownMatchSelectWidth, serverSearch, maxMultipleCount, mode, showSearch, tokenSeparators, maxTagCount, compareWith, optionHeightPx, optionOverflowSize, } = this.ui;
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
            (o1, o2) => o1 === o2)),
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    reset(value) {
        getData(this.schema, this.ui, value).subscribe((/**
         * @param {?} list
         * @return {?}
         */
        list => {
            this._value = value;
            this.data = list;
            this.checkGroup(list);
            this.detectChanges();
        }));
    }
    /**
     * @param {?} values
     * @return {?}
     */
    change(values) {
        if (this.ui.change) {
            this.ui.change(values, this.getOrgData(values));
        }
        this.setValue(values == null ? undefined : values);
    }
    /**
     * @private
     * @param {?} values
     * @return {?}
     */
    getOrgData(values) {
        if (!Array.isArray(values)) {
            return (/** @type {?} */ (this.data.find((/**
             * @param {?} w
             * @return {?}
             */
            w => w.value === values))));
        }
        return values.map((/**
         * @param {?} value
         * @return {?}
         */
        value => {
            /** @type {?} */
            let item = null;
            this.data.forEach((/**
             * @param {?} list
             * @return {?}
             */
            list => {
                var _a;
                item = (/** @type {?} */ ((_a = list.children) === null || _a === void 0 ? void 0 : _a.find((/**
                 * @param {?} w
                 * @return {?}
                 */
                w => w.value === value))));
            }));
            return item;
        }));
    }
    /**
     * @param {?} status
     * @return {?}
     */
    openChange(status) {
        if (this.ui.openChange) {
            this.ui.openChange(status);
        }
    }
    /**
     * @param {?} text
     * @return {?}
     */
    searchChange(text) {
        if (this.ui.onSearch) {
            this.ui.onSearch(text).then((/**
             * @param {?} list
             * @return {?}
             */
            (list) => {
                this.data = list;
                this.checkGroup(list);
                this.detectChanges();
            }));
            return;
        }
        this.detectChanges();
    }
    /**
     * @return {?}
     */
    scrollToBottom() {
        if (this.ui.scrollToBottom) {
            this.ui.scrollToBottom();
        }
    }
}
SelectWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-select',
                template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <nz-select\n    [nzDisabled]=\"disabled\"\n    [(ngModel)]=\"_value\"\n    (ngModelChange)=\"change($event)\"\n    [nzSize]=\"ui.size\"\n    [nzPlaceHolder]=\"ui.placeholder\"\n    [nzNotFoundContent]=\"ui.notFoundContent\"\n    [nzDropdownClassName]=\"ui.dropdownClassName\"\n    [nzAllowClear]=\"ui.allowClear\"\n    [nzDropdownStyle]=\"ui.dropdownStyle\"\n    [nzCustomTemplate]=\"ui.customTemplate\"\n    [nzSuffixIcon]=\"ui.suffixIcon\"\n    [nzRemoveIcon]=\"ui.removeIcon\"\n    [nzClearIcon]=\"ui.clearIcon\"\n    [nzMenuItemSelectedIcon]=\"ui.menuItemSelectedIcon\"\n    [nzMaxTagPlaceholder]=\"ui.maxTagPlaceholder\"\n    [nzDropdownRender]=\"ui.dropdownRender\"\n    [nzAutoClearSearchValue]=\"i.autoClearSearchValue\"\n    [nzBorderless]=\"i.borderless\"\n    [nzAutoFocus]=\"i.autoFocus\"\n    [nzDropdownMatchSelectWidth]=\"i.dropdownMatchSelectWidth\"\n    [nzServerSearch]=\"i.serverSearch\"\n    [nzMaxMultipleCount]=\"i.maxMultipleCount\"\n    [nzMode]=\"i.mode\"\n    [nzShowSearch]=\"i.showSearch\"\n    [nzTokenSeparators]=\"i.tokenSeparators\"\n    [nzMaxTagCount]=\"i.maxTagCount\"\n    [compareWith]=\"i.compareWith\"\n    [nzOptionHeightPx]=\"i.optionHeightPx\"\n    [nzOptionOverflowSize]=\"i.optionOverflowSize\"\n    (nzOpenChange)=\"openChange($event)\"\n    (nzOnSearch)=\"searchChange($event)\"\n    (nzScrollToBottom)=\"scrollToBottom()\"\n  >\n    <ng-container *ngIf=\"!hasGroup\">\n      <nz-option *ngFor=\"let o of data\" [nzLabel]=\"o.label\" [nzValue]=\"o.value\" [nzDisabled]=\"o.disabled\"></nz-option>\n    </ng-container>\n    <ng-container *ngIf=\"hasGroup\">\n      <nz-option-group *ngFor=\"let i of data\" [nzLabel]=\"i.label\">\n        <nz-option *ngFor=\"let o of i.children\" [nzLabel]=\"o.label\" [nzValue]=\"o.value\" [nzDisabled]=\"o.disabled\"></nz-option>\n      </nz-option-group>\n    </ng-container>\n  </nz-select>\n</sf-item-wrap>\n",
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None
            }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS92c3RzL3dvcmsvMS9zL3BhY2thZ2VzL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0cy9zZWxlY3Qvc2VsZWN0LndpZGdldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJckUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDOUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQVMvQyxNQUFNLE9BQU8sWUFBYSxTQUFRLGVBQXFDO0lBTnZFOztRQVVFLGFBQVEsR0FBRyxLQUFLLENBQUM7SUEyRm5CLENBQUM7Ozs7OztJQXpGUyxVQUFVLENBQUMsSUFBb0I7UUFDckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLElBQUksRUFBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDeEUsQ0FBQzs7OztJQUVELFFBQVE7Y0FDQSxFQUNKLG9CQUFvQixFQUNwQixVQUFVLEVBQ1YsU0FBUyxFQUNULHdCQUF3QixFQUN4QixZQUFZLEVBQ1osZ0JBQWdCLEVBQ2hCLElBQUksRUFDSixVQUFVLEVBQ1YsZUFBZSxFQUNmLFdBQVcsRUFDWCxXQUFXLEVBQ1gsY0FBYyxFQUNkLGtCQUFrQixHQUNuQixHQUFHLElBQUksQ0FBQyxFQUFFO1FBQ1gsSUFBSSxDQUFDLENBQUMsR0FBRztZQUNQLG9CQUFvQixFQUFFLE1BQU0sQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUM7WUFDeEQsVUFBVSxFQUFFLE1BQU0sQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDO1lBQ3JDLFNBQVMsRUFBRSxNQUFNLENBQUMs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QUUsRUFBRTtnQkFDbkQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7Z0JBQ2pCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUN2QixDQUFDLEVBQUMsQ0FBQztZQUNILE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQsY0FBYztRQUNaLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFjLEVBQUU7WUFDMUIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUMxQjtJQUNILENBQUM7OztZQXBHRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLHUvREFBbUM7Z0JBQ25DLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3RDOzs7O0lBRUMseUJBQXdCOztJQUN4Qiw0QkFBcUI7O0lBQ3JCLDhCQUFrQjs7SUFDbEIsZ0NBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgU0ZWYWx1ZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBTRlNjaGVtYUVudW0gfSBmcm9tICcuLi8uLi9zY2hlbWEnO1xuaW1wb3J0IHsgZ2V0RGF0YSwgdG9Cb29sIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHsgQ29udHJvbFVJV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcbmltcG9ydCB7IFNGU2VsZWN0V2lkZ2V0U2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1zZWxlY3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2VsZWN0LndpZGdldC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdFdpZGdldCBleHRlbmRzIENvbnRyb2xVSVdpZGdldDxTRlNlbGVjdFdpZGdldFNjaGVtYT4gaW1wbGVtZW50cyBPbkluaXQge1xuICBpOiBTRlNlbGVjdFdpZGdldFNjaGVtYTtcbiAgZGF0YTogU0ZTY2hlbWFFbnVtW107XG4gIF92YWx1ZTogTnpTYWZlQW55O1xuICBoYXNHcm91cCA9IGZhbHNlO1xuXG4gIHByaXZhdGUgY2hlY2tHcm91cChsaXN0OiBTRlNjaGVtYUVudW1bXSk6IHZvaWQge1xuICAgIHRoaXMuaGFzR3JvdXAgPSAobGlzdCB8fCBbXSkuZmlsdGVyKHcgPT4gdy5ncm91cCA9PT0gdHJ1ZSkubGVuZ3RoID4gMDtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHtcbiAgICAgIGF1dG9DbGVhclNlYXJjaFZhbHVlLFxuICAgICAgYm9yZGVybGVzcyxcbiAgICAgIGF1dG9Gb2N1cyxcbiAgICAgIGRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aCxcbiAgICAgIHNlcnZlclNlYXJjaCxcbiAgICAgIG1heE11bHRpcGxlQ291bnQsXG4gICAgICBtb2RlLFxuICAgICAgc2hvd1NlYXJjaCxcbiAgICAgIHRva2VuU2VwYXJhdG9ycyxcbiAgICAgIG1heFRhZ0NvdW50LFxuICAgICAgY29tcGFyZVdpdGgsXG4gICAgICBvcHRpb25IZWlnaHRQeCxcbiAgICAgIG9wdGlvbk92ZXJmbG93U2l6ZSxcbiAgICB9ID0gdGhpcy51aTtcbiAgICB0aGlzLmkgPSB7XG4gICAgICBhdXRvQ2xlYXJTZWFyY2hWYWx1ZTogdG9Cb29sKGF1dG9DbGVhclNlYXJjaFZhbHVlLCB0cnVlKSxcbiAgICAgIGJvcmRlcmxlc3M6IHRvQm9vbChib3JkZXJsZXNzLCBmYWxzZSksXG4gICAgICBhdXRvRm9jdXM6IHRvQm9vbChhdXRvRm9jdXMsIGZhbHNlKSxcbiAgICAgIGRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aDogdG9Cb29sKGRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aCwgdHJ1ZSksXG4gICAgICBzZXJ2ZXJTZWFyY2g6IHRvQm9vbChzZXJ2ZXJTZWFyY2gsIGZhbHNlKSxcbiAgICAgIG1heE11bHRpcGxlQ291bnQ6IG1heE11bHRpcGxlQ291bnQgfHwgSW5maW5pdHksXG4gICAgICBtb2RlOiBtb2RlIHx8ICdkZWZhdWx0JyxcbiAgICAgIHNob3dTZWFyY2g6IHRvQm9vbChzaG93U2VhcmNoLCB0cnVlKSxcbiAgICAgIHRva2VuU2VwYXJhdG9yczogdG9rZW5TZXBhcmF0b3JzIHx8IFtdLFxuICAgICAgbWF4VGFnQ291bnQ6IG1heFRhZ0NvdW50IHx8IHVuZGVmaW5lZCxcbiAgICAgIG9wdGlvbkhlaWdodFB4OiBvcHRpb25IZWlnaHRQeCB8fCAzMixcbiAgICAgIG9wdGlvbk92ZXJmbG93U2l6ZTogb3B0aW9uT3ZlcmZsb3dTaXplIHx8IDgsXG4gICAgICBjb21wYXJlV2l0aDogY29tcGFyZVdpdGggfHwgKChvMTogYW55LCBvMjogYW55KSA9PiBvMSA9PT0gbzIpLFxuICAgIH07XG4gIH1cblxuICByZXNldCh2YWx1ZTogU0ZWYWx1ZSk6IHZvaWQge1xuICAgIGdldERhdGEodGhpcy5zY2hlbWEsIHRoaXMudWksIHZhbHVlKS5zdWJzY3JpYmUobGlzdCA9PiB7XG4gICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5kYXRhID0gbGlzdDtcbiAgICAgIHRoaXMuY2hlY2tHcm91cChsaXN0KTtcbiAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuICB9XG5cbiAgY2hhbmdlKHZhbHVlczogU0ZWYWx1ZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLnVpLmNoYW5nZSkge1xuICAgICAgdGhpcy51aS5jaGFuZ2UodmFsdWVzLCB0aGlzLmdldE9yZ0RhdGEodmFsdWVzKSk7XG4gICAgfVxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWVzID09IG51bGwgPyB1bmRlZmluZWQgOiB2YWx1ZXMpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRPcmdEYXRhKHZhbHVlczogU0ZWYWx1ZSk6IFNGU2NoZW1hRW51bSB8IFNGU2NoZW1hRW51bVtdIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWVzKSkge1xuICAgICAgcmV0dXJuIHRoaXMuZGF0YS5maW5kKHcgPT4gdy52YWx1ZSA9PT0gdmFsdWVzKSE7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZXMubWFwKHZhbHVlID0+IHtcbiAgICAgIGxldCBpdGVtOiBTRlNjaGVtYUVudW0gfCBudWxsID0gbnVsbDtcbiAgICAgIHRoaXMuZGF0YS5mb3JFYWNoKGxpc3QgPT4ge1xuICAgICAgICBpdGVtID0gbGlzdC5jaGlsZHJlbj8uZmluZCh3ID0+IHcudmFsdWUgPT09IHZhbHVlKSE7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBpdGVtO1xuICAgIH0pO1xuICB9XG5cbiAgb3BlbkNoYW5nZShzdGF0dXM6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy51aS5vcGVuQ2hhbmdlKSB7XG4gICAgICB0aGlzLnVpLm9wZW5DaGFuZ2Uoc3RhdHVzKTtcbiAgICB9XG4gIH1cblxuICBzZWFyY2hDaGFuZ2UodGV4dDogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudWkub25TZWFyY2gpIHtcbiAgICAgIHRoaXMudWkub25TZWFyY2godGV4dCkudGhlbigobGlzdDogU0ZTY2hlbWFFbnVtW10pID0+IHtcbiAgICAgICAgdGhpcy5kYXRhID0gbGlzdDtcbiAgICAgICAgdGhpcy5jaGVja0dyb3VwKGxpc3QpO1xuICAgICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHNjcm9sbFRvQm90dG9tKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnVpLnNjcm9sbFRvQm90dG9tKSB7XG4gICAgICB0aGlzLnVpLnNjcm9sbFRvQm90dG9tKCk7XG4gICAgfVxuICB9XG59XG4iXX0=