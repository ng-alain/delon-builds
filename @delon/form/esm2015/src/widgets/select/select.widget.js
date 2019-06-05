/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { getData, toBool } from '../../utils';
import { ControlWidget } from '../../widget';
export class SelectWidget extends ControlWidget {
    constructor() {
        super(...arguments);
        this.hasGroup = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        const { autoClearSearchValue, allowClear, autoFocus, dropdownClassName, dropdownMatchSelectWidth, serverSearch, maxMultipleCount, mode, notFoundContent, showSearch, tokenSeparators, maxTagCount, compareWith, } = this.ui;
        this.i = {
            autoClearSearchValue: toBool(autoClearSearchValue, true),
            allowClear,
            autoFocus: toBool(autoFocus, false),
            dropdownClassName: dropdownClassName || null,
            dropdownMatchSelectWidth: toBool(dropdownMatchSelectWidth, true),
            serverSearch: toBool(serverSearch, false),
            maxMultipleCount: maxMultipleCount || Infinity,
            mode: mode || 'default',
            notFoundContent,
            showSearch: toBool(showSearch, true),
            tokenSeparators: tokenSeparators || [],
            maxTagCount: maxTagCount || undefined,
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
        getData(this.schema, this.ui, this.formProperty.formData).subscribe((/**
         * @param {?} list
         * @return {?}
         */
        list => {
            this._value = value;
            this.data = list;
            this.hasGroup = list.filter((/**
             * @param {?} w
             * @return {?}
             */
            w => w.group === true)).length > 0;
            this.detectChanges();
        }));
    }
    /**
     * @param {?} values
     * @return {?}
     */
    change(values) {
        if (this.ui.change) {
            this.ui.change(values);
        }
        this.setValue(values);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    openChange(value) {
        if (this.ui.openChange) {
            this.ui.openChange(value);
        }
    }
    /**
     * @param {?} text
     * @return {?}
     */
    searchChange(text) {
        if (this.ui.onSearch) {
            this.ui.onSearch(text).then((/**
             * @param {?} res
             * @return {?}
             */
            (res) => {
                this.data = res;
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
                template: "<sf-item-wrap [id]=\"id\"\n              [schema]=\"schema\"\n              [ui]=\"ui\"\n              [showError]=\"showError\"\n              [error]=\"error\"\n              [showTitle]=\"schema.title\">\n  <nz-select [nzDisabled]=\"disabled\"\n             [nzSize]=\"ui.size\"\n             [(ngModel)]=\"_value\"\n             (ngModelChange)=\"change($event)\"\n             [nzPlaceHolder]=\"ui.placeholder\"\n             [nzAutoClearSearchValue]=\"i.autoClearSearchValue\"\n             [nzAllowClear]=\"i.allowClear\"\n             [nzAutoFocus]=\"i.autoFocus\"\n             [nzDropdownClassName]=\"i.dropdownClassName\"\n             [nzDropdownMatchSelectWidth]=\"i.dropdownMatchSelectWidth\"\n             [nzServerSearch]=\"i.serverSearch\"\n             [nzMaxMultipleCount]=\"i.maxMultipleCount\"\n             [nzMode]=\"i.mode\"\n             [nzNotFoundContent]=\"i.notFoundContent\"\n             [nzShowSearch]=\"i.showSearch\"\n             [nzTokenSeparators]=\"i.tokenSeparators\"\n             [nzMaxTagCount]=\"i.maxTagCount\"\n             [compareWith]=\"i.compareWith\"\n             (nzOpenChange)=\"openChange($event)\"\n             (nzOnSearch)=\"searchChange($event)\"\n             (nzScrollToBottom)=\"scrollToBottom()\">\n    <ng-container *ngIf=\"!hasGroup\">\n      <nz-option *ngFor=\"let o of data\"\n                 [nzLabel]=\"o.label\"\n                 [nzValue]=\"o.value\"\n                 [nzDisabled]=\"o.disabled\">\n      </nz-option>\n    </ng-container>\n    <ng-container *ngIf=\"hasGroup\">\n      <nz-option-group *ngFor=\"let i of data\"\n                       [nzLabel]=\"i.label\">\n        <nz-option *ngFor=\"let o of i.children\"\n                   [nzLabel]=\"o.label\"\n                   [nzValue]=\"o.value\"\n                   [nzDisabled]=\"o.disabled\">\n        </nz-option>\n      </nz-option-group>\n    </ng-container>\n  </nz-select>\n</sf-item-wrap>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9mb3JtLyIsInNvdXJjZXMiOlsic3JjL3dpZGdldHMvc2VsZWN0L3NlbGVjdC53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHckUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDOUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQVE3QyxNQUFNLE9BQU8sWUFBYSxTQUFRLGFBQWE7SUFOL0M7O1FBVUUsYUFBUSxHQUFHLEtBQUssQ0FBQztJQXlFbkIsQ0FBQzs7OztJQXZFQyxRQUFRO2NBQ0EsRUFDSixvQkFBb0IsRUFDcEIsVUFBVSxFQUNWLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsd0JBQXdCLEVBQ3hCLFlBQVksRUFDWixnQkFBZ0IsRUFDaEIsSUFBSSxFQUNKLGVBQWUsRUFDZixVQUFVLEVBQ1YsZUFBZSxFQUNmLFdBQVcsRUFDWCxXQUFXLEdBQ1osR0FBRyxJQUFJLENBQUMsRUFBRTtRQUNYLElBQUksQ0FBQyxDQUFDLEdBQUc7WUFDUCxvQkFBb0IsRUFBRSxNQUFNLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDO1lBQ3hELFVBQVU7WUFDVixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUM7WUFDbkMsaUJBQWlCLEVBQUUsaUJBQWlCLElBQUksSUFBSTtZQUM1Qyx3QkFBd0IsRUFBRSxNQUFNLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxDQUFDO1lBQ2hFLFlBQVksRUFBRSxNQUFNLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQztZQUN6QyxnQkFBZ0IsRUFBRSxnQkFBZ0IsSUFBSSxRQUFRO1lBQzlDLElBQUksRUFBRSxJQUFJLElBQUksU0FBUztZQUN2QixlQUFlO1lBQ2YsVUFBVSxFQUFFLE1BQU0sQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDO1lBQ3BDLGVBQWUsRUFBRSxlQUFlLElBQUksRUFBRTtZQUN0QyxXQUFXLEVBQUUsV0FBVyxJQUFJLFNBQVM7WUFDckMsV0FBVyxFQUFFLFdBQVcsSUFBSTs7Ozs7WUFBQyxDQUFDLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUM7U0FDOUQsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsS0FBSyxDQUFDLEtBQWM7UUFDbEIsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxJQUFJLENBQUMsRUFBRTtZQUN6RSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNwQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNOzs7O1lBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLElBQUksRUFBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDOUQsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsTUFBZTtRQUNwQixJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3hCO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN4QixDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxLQUFjO1FBQ3ZCLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUU7WUFDdEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDM0I7SUFDSCxDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxJQUFZO1FBQ3ZCLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUU7WUFDcEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSTs7OztZQUFDLENBQUMsR0FBbUIsRUFBRSxFQUFFO2dCQUNsRCxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztnQkFDaEIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3ZCLENBQUMsRUFBQyxDQUFDO1lBQ0gsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFRCxjQUFjO1FBQ1osSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLGNBQWMsRUFBRTtZQUMxQixJQUFJLENBQUMsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQzFCO0lBQ0gsQ0FBQzs7O1lBbEZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIseTVEQUFtQztnQkFDbkMsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7Ozs7SUFFQyx5QkFBTzs7SUFDUCw0QkFBcUI7O0lBQ3JCLDhCQUFZOztJQUNaLGdDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU0ZWYWx1ZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBTRlNjaGVtYUVudW0gfSBmcm9tICcuLi8uLi9zY2hlbWEnO1xuaW1wb3J0IHsgZ2V0RGF0YSwgdG9Cb29sIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLXNlbGVjdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZWxlY3Qud2lkZ2V0Lmh0bWwnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0V2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGk6IGFueTtcbiAgZGF0YTogU0ZTY2hlbWFFbnVtW107XG4gIF92YWx1ZTogYW55O1xuICBoYXNHcm91cCA9IGZhbHNlO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHtcbiAgICAgIGF1dG9DbGVhclNlYXJjaFZhbHVlLFxuICAgICAgYWxsb3dDbGVhcixcbiAgICAgIGF1dG9Gb2N1cyxcbiAgICAgIGRyb3Bkb3duQ2xhc3NOYW1lLFxuICAgICAgZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoLFxuICAgICAgc2VydmVyU2VhcmNoLFxuICAgICAgbWF4TXVsdGlwbGVDb3VudCxcbiAgICAgIG1vZGUsXG4gICAgICBub3RGb3VuZENvbnRlbnQsXG4gICAgICBzaG93U2VhcmNoLFxuICAgICAgdG9rZW5TZXBhcmF0b3JzLFxuICAgICAgbWF4VGFnQ291bnQsXG4gICAgICBjb21wYXJlV2l0aCxcbiAgICB9ID0gdGhpcy51aTtcbiAgICB0aGlzLmkgPSB7XG4gICAgICBhdXRvQ2xlYXJTZWFyY2hWYWx1ZTogdG9Cb29sKGF1dG9DbGVhclNlYXJjaFZhbHVlLCB0cnVlKSxcbiAgICAgIGFsbG93Q2xlYXIsXG4gICAgICBhdXRvRm9jdXM6IHRvQm9vbChhdXRvRm9jdXMsIGZhbHNlKSxcbiAgICAgIGRyb3Bkb3duQ2xhc3NOYW1lOiBkcm9wZG93bkNsYXNzTmFtZSB8fCBudWxsLFxuICAgICAgZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoOiB0b0Jvb2woZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoLCB0cnVlKSxcbiAgICAgIHNlcnZlclNlYXJjaDogdG9Cb29sKHNlcnZlclNlYXJjaCwgZmFsc2UpLFxuICAgICAgbWF4TXVsdGlwbGVDb3VudDogbWF4TXVsdGlwbGVDb3VudCB8fCBJbmZpbml0eSxcbiAgICAgIG1vZGU6IG1vZGUgfHwgJ2RlZmF1bHQnLFxuICAgICAgbm90Rm91bmRDb250ZW50LFxuICAgICAgc2hvd1NlYXJjaDogdG9Cb29sKHNob3dTZWFyY2gsIHRydWUpLFxuICAgICAgdG9rZW5TZXBhcmF0b3JzOiB0b2tlblNlcGFyYXRvcnMgfHwgW10sXG4gICAgICBtYXhUYWdDb3VudDogbWF4VGFnQ291bnQgfHwgdW5kZWZpbmVkLFxuICAgICAgY29tcGFyZVdpdGg6IGNvbXBhcmVXaXRoIHx8ICgobzE6IGFueSwgbzI6IGFueSkgPT4gbzEgPT09IG8yKSxcbiAgICB9O1xuICB9XG5cbiAgcmVzZXQodmFsdWU6IFNGVmFsdWUpIHtcbiAgICBnZXREYXRhKHRoaXMuc2NoZW1hLCB0aGlzLnVpLCB0aGlzLmZvcm1Qcm9wZXJ0eS5mb3JtRGF0YSkuc3Vic2NyaWJlKGxpc3QgPT4ge1xuICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMuZGF0YSA9IGxpc3Q7XG4gICAgICB0aGlzLmhhc0dyb3VwID0gbGlzdC5maWx0ZXIodyA9PiB3Lmdyb3VwID09PSB0cnVlKS5sZW5ndGggPiAwO1xuICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gIH1cblxuICBjaGFuZ2UodmFsdWVzOiBTRlZhbHVlKSB7XG4gICAgaWYgKHRoaXMudWkuY2hhbmdlKSB7XG4gICAgICB0aGlzLnVpLmNoYW5nZSh2YWx1ZXMpO1xuICAgIH1cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlcyk7XG4gIH1cblxuICBvcGVuQ2hhbmdlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMudWkub3BlbkNoYW5nZSkge1xuICAgICAgdGhpcy51aS5vcGVuQ2hhbmdlKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBzZWFyY2hDaGFuZ2UodGV4dDogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMudWkub25TZWFyY2gpIHtcbiAgICAgIHRoaXMudWkub25TZWFyY2godGV4dCkudGhlbigocmVzOiBTRlNjaGVtYUVudW1bXSkgPT4ge1xuICAgICAgICB0aGlzLmRhdGEgPSByZXM7XG4gICAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgc2Nyb2xsVG9Cb3R0b20oKSB7XG4gICAgaWYgKHRoaXMudWkuc2Nyb2xsVG9Cb3R0b20pIHtcbiAgICAgIHRoaXMudWkuc2Nyb2xsVG9Cb3R0b20oKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==