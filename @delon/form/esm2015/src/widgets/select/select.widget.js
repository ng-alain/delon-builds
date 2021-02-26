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
    checkGroup(list) {
        this.hasGroup = (list || []).filter(w => w.group === true).length > 0;
    }
    ngOnInit() {
        const { autoClearSearchValue, borderless, autoFocus, dropdownMatchSelectWidth, serverSearch, maxMultipleCount, mode, showSearch, tokenSeparators, maxTagCount, compareWith, optionHeightPx, optionOverflowSize, showArrow, } = this.ui;
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
            showArrow: typeof showArrow !== 'boolean' ? undefined : showArrow,
            compareWith: compareWith || ((o1, o2) => o1 === o2),
        };
        const onSearch = this.ui.onSearch;
        if (onSearch) {
            this.search$
                .pipe(takeUntil(this.sfItemComp.unsubscribe$), distinctUntilChanged(), debounceTime(this.ui.searchDebounceTime || 300), switchMap(text => onSearch(text)), catchError(() => []))
                .subscribe(list => {
                this.data = list;
                this.checkGroup(list);
                this.loading = false;
                this.detectChanges();
            });
        }
    }
    reset(value) {
        getData(this.schema, this.ui, value).subscribe(list => {
            this._value = value;
            this.data = list;
            this.checkGroup(list);
            this.detectChanges();
        });
    }
    change(values) {
        if (this.ui.change) {
            this.ui.change(values, this.getOrgData(values));
        }
        this.setValue(values == null ? undefined : values);
    }
    getOrgData(values) {
        if (!Array.isArray(values)) {
            return this.data.find(w => w.value === values);
        }
        return values.map(value => {
            let item = null;
            this.data.forEach(list => {
                var _a;
                item = (_a = list.children) === null || _a === void 0 ? void 0 : _a.find(w => w.value === value);
            });
            return item;
        });
    }
    openChange(status) {
        if (this.ui.openChange) {
            this.ui.openChange(status);
        }
    }
    scrollToBottom() {
        if (this.ui.scrollToBottom) {
            this.ui.scrollToBottom();
        }
    }
    onSearch(value) {
        if (this.ui.onSearch) {
            this.loading = true;
            this.search$.next(value);
        }
    }
}
SelectWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-select',
                template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <nz-select\n    [nzDisabled]=\"disabled\"\n    [(ngModel)]=\"_value\"\n    (ngModelChange)=\"change($event)\"\n    [nzSize]=\"ui.size!\"\n    [nzPlaceHolder]=\"ui.placeholder!\"\n    [nzNotFoundContent]=\"ui.notFoundContent\"\n    [nzDropdownClassName]=\"ui.dropdownClassName!\"\n    [nzAllowClear]=\"ui.allowClear\"\n    [nzDropdownStyle]=\"ui.dropdownStyle!\"\n    [nzCustomTemplate]=\"ui.customTemplate!\"\n    [nzSuffixIcon]=\"ui.suffixIcon!\"\n    [nzRemoveIcon]=\"ui.removeIcon!\"\n    [nzClearIcon]=\"ui.clearIcon!\"\n    [nzMenuItemSelectedIcon]=\"ui.menuItemSelectedIcon!\"\n    [nzMaxTagPlaceholder]=\"ui.maxTagPlaceholder!\"\n    [nzDropdownRender]=\"ui.dropdownRender!\"\n    [nzAutoClearSearchValue]=\"i.autoClearSearchValue\"\n    [nzBorderless]=\"i.borderless\"\n    [nzAutoFocus]=\"i.autoFocus\"\n    [nzDropdownMatchSelectWidth]=\"i.dropdownMatchSelectWidth!\"\n    [nzServerSearch]=\"i.serverSearch\"\n    [nzMaxMultipleCount]=\"i.maxMultipleCount!\"\n    [nzMode]=\"i.mode!\"\n    [nzShowSearch]=\"i.shsowSearch\"\n    [nzShowArrow]=\"i.showArrow!\"\n    [nzTokenSeparators]=\"i.tokenSeparators!\"\n    [nzMaxTagCount]=\"i.maxTagCount!\"\n    [compareWith]=\"i.compareWith!\"\n    [nzOptionHeightPx]=\"i.optionHeightPx!\"\n    [nzOptionOverflowSize]=\"i.optionOverflowSize!\"\n    (nzOpenChange)=\"openChange($event)\"\n    (nzOnSearch)=\"onSearch($event)\"\n    (nzScrollToBottom)=\"scrollToBottom()\"\n  >\n    <ng-container *ngIf=\"!loading && !hasGroup\">\n      <nz-option *ngFor=\"let o of data\" [nzLabel]=\"o.label\" [nzValue]=\"o.value\" [nzDisabled]=\"o.disabled\"></nz-option>\n    </ng-container>\n    <ng-container *ngIf=\"!loading && hasGroup\">\n      <nz-option-group *ngFor=\"let i of data\" [nzLabel]=\"i.label\">\n        <nz-option *ngFor=\"let o of i.children\" [nzLabel]=\"o.label\" [nzValue]=\"o.value\" [nzDisabled]=\"o.disabled\"></nz-option>\n      </nz-option-group>\n    </ng-container>\n    <nz-option *ngIf=\"loading\" nzDisabled nzCustomContent>\n      <i nz-icon nzType=\"loading\"></i>\n      {{ ui.searchLoadingText }}\n    </nz-option>\n  </nz-select>\n</sf-item-wrap>\n",
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm0vc3JjL3dpZGdldHMvc2VsZWN0L3NlbGVjdC53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVyRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLG9CQUFvQixFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUd0RyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM5QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBUy9DLE1BQU0sT0FBTyxZQUFhLFNBQVEsZUFBcUM7SUFOdkU7O1FBT1UsWUFBTyxHQUFHLElBQUksT0FBTyxFQUFVLENBQUM7UUFJeEMsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixZQUFPLEdBQUcsS0FBSyxDQUFDO0lBMEdsQixDQUFDO0lBeEdTLFVBQVUsQ0FBQyxJQUFvQjtRQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRUQsUUFBUTtRQUNOLE1BQU0sRUFDSixvQkFBb0IsRUFDcEIsVUFBVSxFQUNWLFNBQVMsRUFDVCx3QkFBd0IsRUFDeEIsWUFBWSxFQUNaLGdCQUFnQixFQUNoQixJQUFJLEVBQ0osVUFBVSxFQUNWLGVBQWUsRUFDZixXQUFXLEVBQ1gsV0FBVyxFQUNYLGNBQWMsRUFDZCxr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LFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsK3RFQUFtQztnQkFDbkMsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBkZWJvdW5jZVRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBzd2l0Y2hNYXAsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFNGVmFsdWUgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgU0ZTY2hlbWFFbnVtIH0gZnJvbSAnLi4vLi4vc2NoZW1hJztcbmltcG9ydCB7IGdldERhdGEsIHRvQm9vbCB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IENvbnRyb2xVSVdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5pbXBvcnQgeyBTRlNlbGVjdFdpZGdldFNjaGVtYSB9IGZyb20gJy4vc2NoZW1hJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2Ytc2VsZWN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlbGVjdC53aWRnZXQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RXaWRnZXQgZXh0ZW5kcyBDb250cm9sVUlXaWRnZXQ8U0ZTZWxlY3RXaWRnZXRTY2hlbWE+IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBzZWFyY2gkID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xuICBpOiBTRlNlbGVjdFdpZGdldFNjaGVtYTtcbiAgZGF0YTogU0ZTY2hlbWFFbnVtW107XG4gIF92YWx1ZTogTnpTYWZlQW55O1xuICBoYXNHcm91cCA9IGZhbHNlO1xuICBsb2FkaW5nID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBjaGVja0dyb3VwKGxpc3Q6IFNGU2NoZW1hRW51bVtdKTogdm9pZCB7XG4gICAgdGhpcy5oYXNHcm91cCA9IChsaXN0IHx8IFtdKS5maWx0ZXIodyA9PiB3Lmdyb3VwID09PSB0cnVlKS5sZW5ndGggPiAwO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3Qge1xuICAgICAgYXV0b0NsZWFyU2VhcmNoVmFsdWUsXG4gICAgICBib3JkZXJsZXNzLFxuICAgICAgYXV0b0ZvY3VzLFxuICAgICAgZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoLFxuICAgICAgc2VydmVyU2VhcmNoLFxuICAgICAgbWF4TXVsdGlwbGVDb3VudCxcbiAgICAgIG1vZGUsXG4gICAgICBzaG93U2VhcmNoLFxuICAgICAgdG9rZW5TZXBhcmF0b3JzLFxuICAgICAgbWF4VGFnQ291bnQsXG4gICAgICBjb21wYXJlV2l0aCxcbiAgICAgIG9wdGlvbkhlaWdodFB4LFxuICAgICAgb3B0aW9uT3ZlcmZsb3dTaXplLFxuICAgICAgc2hvd0Fycm93LFxuICAgIH0gPSB0aGlzLnVpO1xuICAgIHRoaXMuaSA9IHtcbiAgICAgIGF1dG9DbGVhclNlYXJjaFZhbHVlOiB0b0Jvb2woYXV0b0NsZWFyU2VhcmNoVmFsdWUsIHRydWUpLFxuICAgICAgYm9yZGVybGVzczogdG9Cb29sKGJvcmRlcmxlc3MsIGZhbHNlKSxcbiAgICAgIGF1dG9Gb2N1czogdG9Cb29sKGF1dG9Gb2N1cywgZmFsc2UpLFxuICAgICAgZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoOiB0b0Jvb2woZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoLCB0cnVlKSxcbiAgICAgIHNlcnZlclNlYXJjaDogdG9Cb29sKHNlcnZlclNlYXJjaCwgZmFsc2UpLFxuICAgICAgbWF4TXVsdGlwbGVDb3VudDogbWF4TXVsdGlwbGVDb3VudCB8fCBJbmZpbml0eSxcbiAgICAgIG1vZGU6IG1vZGUgfHwgJ2RlZmF1bHQnLFxuICAgICAgc2hvd1NlYXJjaDogdG9Cb29sKHNob3dTZWFyY2gsIHRydWUpLFxuICAgICAgdG9rZW5TZXBhcmF0b3JzOiB0b2tlblNlcGFyYXRvcnMgfHwgW10sXG4gICAgICBtYXhUYWdDb3VudDogbWF4VGFnQ291bnQgfHwgdW5kZWZpbmVkLFxuICAgICAgb3B0aW9uSGVpZ2h0UHg6IG9wdGlvbkhlaWdodFB4IHx8IDMyLFxuICAgICAgb3B0aW9uT3ZlcmZsb3dTaXplOiBvcHRpb25PdmVyZmxvd1NpemUgfHwgOCxcbiAgICAgIHNob3dBcnJvdzogdHlwZW9mIHNob3dBcnJvdyAhPT0gJ2Jvb2xlYW4nID8gdW5kZWZpbmVkIDogc2hvd0Fycm93LFxuICAgICAgY29tcGFyZVdpdGg6IGNvbXBhcmVXaXRoIHx8ICgobzE6IGFueSwgbzI6IGFueSkgPT4gbzEgPT09IG8yKSxcbiAgICB9O1xuXG4gICAgY29uc3Qgb25TZWFyY2ggPSB0aGlzLnVpLm9uU2VhcmNoITtcbiAgICBpZiAob25TZWFyY2gpIHtcbiAgICAgIHRoaXMuc2VhcmNoJFxuICAgICAgICAucGlwZShcbiAgICAgICAgICB0YWtlVW50aWwodGhpcy5zZkl0ZW1Db21wIS51bnN1YnNjcmliZSQpLFxuICAgICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICAgICAgZGVib3VuY2VUaW1lKHRoaXMudWkuc2VhcmNoRGVib3VuY2VUaW1lIHx8IDMwMCksXG4gICAgICAgICAgc3dpdGNoTWFwKHRleHQgPT4gb25TZWFyY2godGV4dCkpLFxuICAgICAgICAgIGNhdGNoRXJyb3IoKCkgPT4gW10pLFxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUobGlzdCA9PiB7XG4gICAgICAgICAgdGhpcy5kYXRhID0gbGlzdDtcbiAgICAgICAgICB0aGlzLmNoZWNrR3JvdXAobGlzdCk7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0KHZhbHVlOiBTRlZhbHVlKTogdm9pZCB7XG4gICAgZ2V0RGF0YSh0aGlzLnNjaGVtYSwgdGhpcy51aSwgdmFsdWUpLnN1YnNjcmliZShsaXN0ID0+IHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLmRhdGEgPSBsaXN0O1xuICAgICAgdGhpcy5jaGVja0dyb3VwKGxpc3QpO1xuICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gIH1cblxuICBjaGFuZ2UodmFsdWVzOiBTRlZhbHVlKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudWkuY2hhbmdlKSB7XG4gICAgICB0aGlzLnVpLmNoYW5nZSh2YWx1ZXMsIHRoaXMuZ2V0T3JnRGF0YSh2YWx1ZXMpKTtcbiAgICB9XG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZXMgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IHZhbHVlcyk7XG4gIH1cblxuICBwcml2YXRlIGdldE9yZ0RhdGEodmFsdWVzOiBTRlZhbHVlKTogU0ZTY2hlbWFFbnVtIHwgU0ZTY2hlbWFFbnVtW10ge1xuICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZXMpKSB7XG4gICAgICByZXR1cm4gdGhpcy5kYXRhLmZpbmQodyA9PiB3LnZhbHVlID09PSB2YWx1ZXMpITtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlcy5tYXAodmFsdWUgPT4ge1xuICAgICAgbGV0IGl0ZW06IFNGU2NoZW1hRW51bSB8IG51bGwgPSBudWxsO1xuICAgICAgdGhpcy5kYXRhLmZvckVhY2gobGlzdCA9PiB7XG4gICAgICAgIGl0ZW0gPSBsaXN0LmNoaWxkcmVuPy5maW5kKHcgPT4gdy52YWx1ZSA9PT0gdmFsdWUpITtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfSk7XG4gIH1cblxuICBvcGVuQ2hhbmdlKHN0YXR1czogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICh0aGlzLnVpLm9wZW5DaGFuZ2UpIHtcbiAgICAgIHRoaXMudWkub3BlbkNoYW5nZShzdGF0dXMpO1xuICAgIH1cbiAgfVxuXG4gIHNjcm9sbFRvQm90dG9tKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnVpLnNjcm9sbFRvQm90dG9tKSB7XG4gICAgICB0aGlzLnVpLnNjcm9sbFRvQm90dG9tKCk7XG4gICAgfVxuICB9XG5cbiAgb25TZWFyY2godmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLnVpLm9uU2VhcmNoKSB7XG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5zZWFyY2gkLm5leHQodmFsdWUpO1xuICAgIH1cbiAgfVxufVxuIl19