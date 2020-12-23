/**
 * @fileoverview added by tsickle
 * Generated from: src/widgets/select/select.widget.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, switchMap, takeUntil } from 'rxjs/operators';
import { getData, toBool } from '../../utils';
import { ControlUIWidget } from '../../widget';
export class SelectWidget extends ControlUIWidget {
    constructor() {
        super(...arguments);
        this.search$ = new Subject();
        this.hasGroup = false;
        this.loading = false;
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
        if (this.ui.onSearch) {
            this.search$
                .pipe(takeUntil((/** @type {?} */ (this.sfItemComp)).unsubscribe$), distinctUntilChanged(), debounceTime(this.ui.searchDebounceTime || 300), switchMap((/**
             * @param {?} text
             * @return {?}
             */
            text => (/** @type {?} */ (this.ui.onSearch))(text))), catchError((/**
             * @return {?}
             */
            () => [])))
                .subscribe((/**
             * @param {?} list
             * @return {?}
             */
            list => {
                this.data = list;
                this.checkGroup(list);
                this.loading = false;
                this.detectChanges();
            }));
        }
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
     * @return {?}
     */
    scrollToBottom() {
        if (this.ui.scrollToBottom) {
            this.ui.scrollToBottom();
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onSearch(value) {
        this.loading = true;
        this.search$.next(value);
    }
}
SelectWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-select',
                template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <nz-select\n    [nzDisabled]=\"disabled\"\n    [(ngModel)]=\"_value\"\n    (ngModelChange)=\"change($event)\"\n    [nzSize]=\"ui.size\"\n    [nzPlaceHolder]=\"ui.placeholder\"\n    [nzNotFoundContent]=\"ui.notFoundContent\"\n    [nzDropdownClassName]=\"ui.dropdownClassName\"\n    [nzAllowClear]=\"ui.allowClear\"\n    [nzDropdownStyle]=\"ui.dropdownStyle\"\n    [nzCustomTemplate]=\"ui.customTemplate\"\n    [nzSuffixIcon]=\"ui.suffixIcon\"\n    [nzRemoveIcon]=\"ui.removeIcon\"\n    [nzClearIcon]=\"ui.clearIcon\"\n    [nzMenuItemSelectedIcon]=\"ui.menuItemSelectedIcon\"\n    [nzMaxTagPlaceholder]=\"ui.maxTagPlaceholder\"\n    [nzDropdownRender]=\"ui.dropdownRender\"\n    [nzAutoClearSearchValue]=\"i.autoClearSearchValue\"\n    [nzBorderless]=\"i.borderless\"\n    [nzAutoFocus]=\"i.autoFocus\"\n    [nzDropdownMatchSelectWidth]=\"i.dropdownMatchSelectWidth\"\n    [nzServerSearch]=\"i.serverSearch\"\n    [nzMaxMultipleCount]=\"i.maxMultipleCount\"\n    [nzMode]=\"i.mode\"\n    [nzShowSearch]=\"i.showSearch\"\n    [nzTokenSeparators]=\"i.tokenSeparators\"\n    [nzMaxTagCount]=\"i.maxTagCount\"\n    [compareWith]=\"i.compareWith\"\n    [nzOptionHeightPx]=\"i.optionHeightPx\"\n    [nzOptionOverflowSize]=\"i.optionOverflowSize\"\n    (nzOpenChange)=\"openChange($event)\"\n    (nzOnSearch)=\"onSearch($event)\"\n    (nzScrollToBottom)=\"scrollToBottom()\"\n  >\n    <ng-container *ngIf=\"!loading && !hasGroup\">\n      <nz-option *ngFor=\"let o of data\" [nzLabel]=\"o.label\" [nzValue]=\"o.value\" [nzDisabled]=\"o.disabled\"></nz-option>\n    </ng-container>\n    <ng-container *ngIf=\"!loading && hasGroup\">\n      <nz-option-group *ngFor=\"let i of data\" [nzLabel]=\"i.label\">\n        <nz-option *ngFor=\"let o of i.children\" [nzLabel]=\"o.label\" [nzValue]=\"o.value\" [nzDisabled]=\"o.disabled\"></nz-option>\n      </nz-option-group>\n    </ng-container>\n    <nz-option *ngIf=\"loading\" nzDisabled nzCustomContent>\n      <i nz-icon nzType=\"loading\"></i>\n      {{ ui.searchLoadingText }}\n    </nz-option>\n  </nz-select>\n</sf-item-wrap>\n",
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None
            }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SelectWidget.prototype.search$;
    /** @type {?} */
    SelectWidget.prototype.i;
    /** @type {?} */
    SelectWidget.prototype.data;
    /** @type {?} */
    SelectWidget.prototype._value;
    /** @type {?} */
    SelectWidget.prototype.hasGroup;
    /** @type {?} */
    SelectWidget.prototype.loading;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtLyIsInNvdXJjZXMiOlsic3JjL3dpZGdldHMvc2VsZWN0L3NlbGVjdC53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3RHLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFTL0MsTUFBTSxPQUFPLFlBQWEsU0FBUSxlQUFxQztJQU52RTs7UUFPVSxZQUFPLEdBQUcsSUFBSSxPQUFPLEVBQVUsQ0FBQztRQUl4QyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLFlBQU8sR0FBRyxLQUFLLENBQUM7SUFxR2xCLENBQUM7Ozs7OztJQW5HUyxVQUFVLENBQUMsSUFBb0I7UUFDckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLElBQUksRUFBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDeEUsQ0FBQzs7OztJQUVELFFBQVE7Y0FDQSxFQUNKLG9CQUFvQixFQUNwQixVQUFVLEVBQ1YsU0FBUyxFQUNULHdCQUF3QixFQUN4QixZQUFZLEVBQ1osZ0JBQWdCLEVBQ2hCLElBQUksRUFDSixVQUFVLEVBQ1YsZUFBZSxFQUNmLFdBQVcsRUFDWCxXQUFXLEVBQ1gsY0FBYyxFQUNkLGtCQUFrQixHQUNuQixHQUFHLElBQUksQ0FBQyxFQUFFO1FBQ1gsSUFBSSxDQUFDLENBQUMsR0FBRztZQUNQLG9CQUFvQixFQUFFLE1BQU0sQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUM7WUFDeEQsVUFBVSxFQUFFLE1BQU0sQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDO1lBQ3JDLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQztZQUNuQyx3QkFBd0IsRUFBRSxNQUFNLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxDQUFDO1lBQ2hFLFlBQVksRUFBRSxNQUFNLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQztZQUN6QyxnQkFBZ0IsRUFBRSxnQkFBZ0IsSUFBSSxRQUFRO1lBQzlDLElBQUksRUFBRSxJQUFJLElBQUksU0FBUztZQUN2QixVQUFVLEVBQUUsTUFBTSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUM7WUFDcEMsZUFBZSxFQUFFLGVBQWUsSUFBSSxFQUFFO1lBQ3RDLFdBQVcsRUFBRSxXQUFXLElBQUksU0FBUztZQUNyQyxjQUFjLEVBQUUsY0FBYyxJQUFJLEVBQUU7WUFDcEMsa0JBQWtCLEVBQUUsa0JBQWtCLElBQUksQ0FBQztZQUMzQyxXQUFXLEVBQUUsV0FBVyxJQUFJOzs7OztZQUFDLENBQUMsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBQztTQUM5RCxDQUFDO1FBRUYsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRTtZQUNwQixJQUFJLENBQUMsT0FBTztpQkFDVCxJQUFJLENBQ0gsU0FBUyxDQUFDLG1CQUFBLElBQUksQ0FBQyxVQUFVLEVBQUMsQ0FBQyxZQUFZLENBQUMsRUFDeEMsb0JBQW9CLEVBQUUsRUFDdEIsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsa0JBQWtCLElBQUksR0FBRyxDQUFDLEVBQy9DLFNBQVM7Ozs7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLG1CQUFBLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsRUFDMUMsVUFBVTs7O1lBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFDLENBQ3JCO2lCQUNBLFNBQVM7Ozs7WUFBQyxJQUFJLENBQUMsRUFBRTtnQkFDaEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7Z0JBQ2pCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2dCQUNyQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDdkIsQ0FBQyxFQUFDLENBQUM7U0FDTjtJQUNILENBQUM7Ozs7O0lBRUQsS0FBSyxDQUFDLEtBQWM7UUFDbEIsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQyxTQUFTOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUU7WUFDcEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDcEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDakIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdkIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxNQUFlO1FBQ3BCLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUU7WUFDbEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUNqRDtRQUNELElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNyRCxDQUFDOzs7Ozs7SUFFTyxVQUFVLENBQUMsTUFBZTtRQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUMxQixPQUFPLG1CQUFBLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTs7OztZQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxNQUFNLEVBQUMsRUFBQyxDQUFDO1NBQ2pEO1FBQ0QsT0FBTyxNQUFNLENBQUMsR0FBRzs7OztRQUFDLEtBQUssQ0FBQyxFQUFFOztnQkFDcEIsSUFBSSxHQUF3QixJQUFJO1lBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTzs7OztZQUFDLElBQUksQ0FBQyxFQUFFOztnQkFDdkIsSUFBSSxHQUFHLHlCQUFBLElBQUksQ0FBQyxRQUFRLDBDQUFFLElBQUk7Ozs7Z0JBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLEtBQUssSUFBRSxDQUFDO1lBQ3RELENBQUMsRUFBQyxDQUFDO1lBQ0gsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLE1BQWU7UUFDeEIsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRTtZQUN0QixJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUM1QjtJQUNILENBQUM7Ozs7SUFFRCxjQUFjO1FBQ1osSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLGNBQWMsRUFBRTtZQUMxQixJQUFJLENBQUMsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQzFCO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsS0FBYTtRQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDOzs7WUFoSEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQix1cUVBQW1DO2dCQUNuQyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0Qzs7Ozs7OztJQUVDLCtCQUF3Qzs7SUFDeEMseUJBQXdCOztJQUN4Qiw0QkFBcUI7O0lBQ3JCLDhCQUFrQjs7SUFDbEIsZ0NBQWlCOztJQUNqQiwrQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBkZWJvdW5jZVRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBzd2l0Y2hNYXAsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFNGVmFsdWUgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgU0ZTY2hlbWFFbnVtIH0gZnJvbSAnLi4vLi4vc2NoZW1hJztcbmltcG9ydCB7IGdldERhdGEsIHRvQm9vbCB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IENvbnRyb2xVSVdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5pbXBvcnQgeyBTRlNlbGVjdFdpZGdldFNjaGVtYSB9IGZyb20gJy4vc2NoZW1hJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2Ytc2VsZWN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlbGVjdC53aWRnZXQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RXaWRnZXQgZXh0ZW5kcyBDb250cm9sVUlXaWRnZXQ8U0ZTZWxlY3RXaWRnZXRTY2hlbWE+IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBzZWFyY2gkID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xuICBpOiBTRlNlbGVjdFdpZGdldFNjaGVtYTtcbiAgZGF0YTogU0ZTY2hlbWFFbnVtW107XG4gIF92YWx1ZTogTnpTYWZlQW55O1xuICBoYXNHcm91cCA9IGZhbHNlO1xuICBsb2FkaW5nID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBjaGVja0dyb3VwKGxpc3Q6IFNGU2NoZW1hRW51bVtdKTogdm9pZCB7XG4gICAgdGhpcy5oYXNHcm91cCA9IChsaXN0IHx8IFtdKS5maWx0ZXIodyA9PiB3Lmdyb3VwID09PSB0cnVlKS5sZW5ndGggPiAwO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3Qge1xuICAgICAgYXV0b0NsZWFyU2VhcmNoVmFsdWUsXG4gICAgICBib3JkZXJsZXNzLFxuICAgICAgYXV0b0ZvY3VzLFxuICAgICAgZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoLFxuICAgICAgc2VydmVyU2VhcmNoLFxuICAgICAgbWF4TXVsdGlwbGVDb3VudCxcbiAgICAgIG1vZGUsXG4gICAgICBzaG93U2VhcmNoLFxuICAgICAgdG9rZW5TZXBhcmF0b3JzLFxuICAgICAgbWF4VGFnQ291bnQsXG4gICAgICBjb21wYXJlV2l0aCxcbiAgICAgIG9wdGlvbkhlaWdodFB4LFxuICAgICAgb3B0aW9uT3ZlcmZsb3dTaXplLFxuICAgIH0gPSB0aGlzLnVpO1xuICAgIHRoaXMuaSA9IHtcbiAgICAgIGF1dG9DbGVhclNlYXJjaFZhbHVlOiB0b0Jvb2woYXV0b0NsZWFyU2VhcmNoVmFsdWUsIHRydWUpLFxuICAgICAgYm9yZGVybGVzczogdG9Cb29sKGJvcmRlcmxlc3MsIGZhbHNlKSxcbiAgICAgIGF1dG9Gb2N1czogdG9Cb29sKGF1dG9Gb2N1cywgZmFsc2UpLFxuICAgICAgZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoOiB0b0Jvb2woZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoLCB0cnVlKSxcbiAgICAgIHNlcnZlclNlYXJjaDogdG9Cb29sKHNlcnZlclNlYXJjaCwgZmFsc2UpLFxuICAgICAgbWF4TXVsdGlwbGVDb3VudDogbWF4TXVsdGlwbGVDb3VudCB8fCBJbmZpbml0eSxcbiAgICAgIG1vZGU6IG1vZGUgfHwgJ2RlZmF1bHQnLFxuICAgICAgc2hvd1NlYXJjaDogdG9Cb29sKHNob3dTZWFyY2gsIHRydWUpLFxuICAgICAgdG9rZW5TZXBhcmF0b3JzOiB0b2tlblNlcGFyYXRvcnMgfHwgW10sXG4gICAgICBtYXhUYWdDb3VudDogbWF4VGFnQ291bnQgfHwgdW5kZWZpbmVkLFxuICAgICAgb3B0aW9uSGVpZ2h0UHg6IG9wdGlvbkhlaWdodFB4IHx8IDMyLFxuICAgICAgb3B0aW9uT3ZlcmZsb3dTaXplOiBvcHRpb25PdmVyZmxvd1NpemUgfHwgOCxcbiAgICAgIGNvbXBhcmVXaXRoOiBjb21wYXJlV2l0aCB8fCAoKG8xOiBhbnksIG8yOiBhbnkpID0+IG8xID09PSBvMiksXG4gICAgfTtcblxuICAgIGlmICh0aGlzLnVpLm9uU2VhcmNoKSB7XG4gICAgICB0aGlzLnNlYXJjaCRcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgdGFrZVVudGlsKHRoaXMuc2ZJdGVtQ29tcCEudW5zdWJzY3JpYmUkKSxcbiAgICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgICAgIGRlYm91bmNlVGltZSh0aGlzLnVpLnNlYXJjaERlYm91bmNlVGltZSB8fCAzMDApLFxuICAgICAgICAgIHN3aXRjaE1hcCh0ZXh0ID0+IHRoaXMudWkub25TZWFyY2ghKHRleHQpKSxcbiAgICAgICAgICBjYXRjaEVycm9yKCgpID0+IFtdKSxcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKGxpc3QgPT4ge1xuICAgICAgICAgIHRoaXMuZGF0YSA9IGxpc3Q7XG4gICAgICAgICAgdGhpcy5jaGVja0dyb3VwKGxpc3QpO1xuICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXNldCh2YWx1ZTogU0ZWYWx1ZSk6IHZvaWQge1xuICAgIGdldERhdGEodGhpcy5zY2hlbWEsIHRoaXMudWksIHZhbHVlKS5zdWJzY3JpYmUobGlzdCA9PiB7XG4gICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5kYXRhID0gbGlzdDtcbiAgICAgIHRoaXMuY2hlY2tHcm91cChsaXN0KTtcbiAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuICB9XG5cbiAgY2hhbmdlKHZhbHVlczogU0ZWYWx1ZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLnVpLmNoYW5nZSkge1xuICAgICAgdGhpcy51aS5jaGFuZ2UodmFsdWVzLCB0aGlzLmdldE9yZ0RhdGEodmFsdWVzKSk7XG4gICAgfVxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWVzID09IG51bGwgPyB1bmRlZmluZWQgOiB2YWx1ZXMpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRPcmdEYXRhKHZhbHVlczogU0ZWYWx1ZSk6IFNGU2NoZW1hRW51bSB8IFNGU2NoZW1hRW51bVtdIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWVzKSkge1xuICAgICAgcmV0dXJuIHRoaXMuZGF0YS5maW5kKHcgPT4gdy52YWx1ZSA9PT0gdmFsdWVzKSE7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZXMubWFwKHZhbHVlID0+IHtcbiAgICAgIGxldCBpdGVtOiBTRlNjaGVtYUVudW0gfCBudWxsID0gbnVsbDtcbiAgICAgIHRoaXMuZGF0YS5mb3JFYWNoKGxpc3QgPT4ge1xuICAgICAgICBpdGVtID0gbGlzdC5jaGlsZHJlbj8uZmluZCh3ID0+IHcudmFsdWUgPT09IHZhbHVlKSE7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBpdGVtO1xuICAgIH0pO1xuICB9XG5cbiAgb3BlbkNoYW5nZShzdGF0dXM6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy51aS5vcGVuQ2hhbmdlKSB7XG4gICAgICB0aGlzLnVpLm9wZW5DaGFuZ2Uoc3RhdHVzKTtcbiAgICB9XG4gIH1cblxuICBzY3JvbGxUb0JvdHRvbSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy51aS5zY3JvbGxUb0JvdHRvbSkge1xuICAgICAgdGhpcy51aS5zY3JvbGxUb0JvdHRvbSgpO1xuICAgIH1cbiAgfVxuXG4gIG9uU2VhcmNoKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMuc2VhcmNoJC5uZXh0KHZhbHVlKTtcbiAgfVxufVxuIl19