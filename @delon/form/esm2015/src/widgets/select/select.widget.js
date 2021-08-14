import { Component, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, switchMap, takeUntil } from 'rxjs/operators';
import { ArrayService } from '@delon/util/array';
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
        const { autoClearSearchValue, borderless, autoFocus, dropdownMatchSelectWidth, serverSearch, maxMultipleCount, mode, showSearch, tokenSeparators, maxTagCount, compareWith, optionHeightPx, optionOverflowSize, showArrow } = this.ui;
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
            compareWith: compareWith || ((o1, o2) => o1 === o2)
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
            return this.injector.get(ArrayService).findTree(this.data, item => item.value === values);
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
                template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <nz-select\n    [nzId]=\"id\"\n    [nzDisabled]=\"disabled\"\n    [(ngModel)]=\"_value\"\n    (ngModelChange)=\"change($event)\"\n    [nzSize]=\"ui.size!\"\n    [nzPlaceHolder]=\"ui.placeholder!\"\n    [nzNotFoundContent]=\"ui.notFoundContent\"\n    [nzDropdownClassName]=\"ui.dropdownClassName!\"\n    [nzAllowClear]=\"ui.allowClear\"\n    [nzDropdownStyle]=\"ui.dropdownStyle!\"\n    [nzCustomTemplate]=\"ui.customTemplate!\"\n    [nzSuffixIcon]=\"ui.suffixIcon!\"\n    [nzRemoveIcon]=\"ui.removeIcon!\"\n    [nzClearIcon]=\"ui.clearIcon!\"\n    [nzMenuItemSelectedIcon]=\"ui.menuItemSelectedIcon!\"\n    [nzMaxTagPlaceholder]=\"ui.maxTagPlaceholder!\"\n    [nzDropdownRender]=\"ui.dropdownRender!\"\n    [nzAutoClearSearchValue]=\"i.autoClearSearchValue\"\n    [nzBorderless]=\"i.borderless\"\n    [nzAutoFocus]=\"i.autoFocus\"\n    [nzDropdownMatchSelectWidth]=\"i.dropdownMatchSelectWidth!\"\n    [nzServerSearch]=\"i.serverSearch\"\n    [nzMaxMultipleCount]=\"i.maxMultipleCount!\"\n    [nzMode]=\"i.mode!\"\n    [nzShowSearch]=\"i.showSearch\"\n    [nzShowArrow]=\"i.showArrow!\"\n    [nzTokenSeparators]=\"i.tokenSeparators!\"\n    [nzMaxTagCount]=\"i.maxTagCount!\"\n    [compareWith]=\"i.compareWith!\"\n    [nzOptionHeightPx]=\"i.optionHeightPx!\"\n    [nzOptionOverflowSize]=\"i.optionOverflowSize!\"\n    (nzOpenChange)=\"openChange($event)\"\n    (nzOnSearch)=\"onSearch($event)\"\n    (nzScrollToBottom)=\"scrollToBottom()\"\n  >\n    <ng-container *ngIf=\"!loading && !hasGroup\">\n      <nz-option *ngFor=\"let o of data\" [nzLabel]=\"o.label\" [nzValue]=\"o.value\" [nzDisabled]=\"o.disabled\"></nz-option>\n    </ng-container>\n    <ng-container *ngIf=\"!loading && hasGroup\">\n      <nz-option-group *ngFor=\"let i of data\" [nzLabel]=\"i.label\">\n        <nz-option\n          *ngFor=\"let o of i.children\"\n          [nzLabel]=\"o.label\"\n          [nzValue]=\"o.value\"\n          [nzDisabled]=\"o.disabled\"\n        ></nz-option>\n      </nz-option-group>\n    </ng-container>\n    <nz-option *ngIf=\"loading\" nzDisabled nzCustomContent>\n      <i nz-icon nzType=\"loading\"></i>\n      {{ ui.searchLoadingText }}\n    </nz-option>\n  </nz-select>\n</sf-item-wrap>\n",
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm0vc3JjL3dpZGdldHMvc2VsZWN0L3NlbGVjdC53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLG9CQUFvQixFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0RyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFLakQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDOUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQVMvQyxNQUFNLE9BQU8sWUFBYSxTQUFRLGVBQXFDO0lBTnZFOztRQU9VLFlBQU8sR0FBRyxJQUFJLE9BQU8sRUFBVSxDQUFDO1FBSXhDLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsWUFBTyxHQUFHLEtBQUssQ0FBQztJQTBHbEIsQ0FBQztJQXhHUyxVQUFVLENBQUMsSUFBb0I7UUFDckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVELFFBQVE7UUFDTixNQUFNLEVBQ0osb0JBQW9CLEVBQ3BCLFVBQVUsRUFDVixTQUFTLEVBQ1Qsd0JBQXdCLEVBQ3hCLFlBQVksRUFDWixnQkFBZ0IsRUFDaEIsSUFBSSxFQUNKLFVBQVUsRUFD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QUFHLElBQUksQ0FBQztZQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMxQjtJQUNILENBQUM7OztZQXJIRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLHV5RUFBbUM7Z0JBQ25DLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBkZWJvdW5jZVRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBzd2l0Y2hNYXAsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQXJyYXlTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3V0aWwvYXJyYXknO1xuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5pbXBvcnQgeyBTRlZhbHVlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlJztcbmltcG9ydCB7IFNGU2NoZW1hRW51bSB9IGZyb20gJy4uLy4uL3NjaGVtYSc7XG5pbXBvcnQgeyBnZXREYXRhLCB0b0Jvb2wgfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgeyBDb250cm9sVUlXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuaW1wb3J0IHsgU0ZTZWxlY3RXaWRnZXRTY2hlbWEgfSBmcm9tICcuL3NjaGVtYSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLXNlbGVjdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZWxlY3Qud2lkZ2V0Lmh0bWwnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RXaWRnZXQgZXh0ZW5kcyBDb250cm9sVUlXaWRnZXQ8U0ZTZWxlY3RXaWRnZXRTY2hlbWE+IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBzZWFyY2gkID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xuICBpOiBTRlNlbGVjdFdpZGdldFNjaGVtYTtcbiAgZGF0YTogU0ZTY2hlbWFFbnVtW107XG4gIF92YWx1ZTogTnpTYWZlQW55O1xuICBoYXNHcm91cCA9IGZhbHNlO1xuICBsb2FkaW5nID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBjaGVja0dyb3VwKGxpc3Q6IFNGU2NoZW1hRW51bVtdKTogdm9pZCB7XG4gICAgdGhpcy5oYXNHcm91cCA9IChsaXN0IHx8IFtdKS5maWx0ZXIodyA9PiB3Lmdyb3VwID09PSB0cnVlKS5sZW5ndGggPiAwO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3Qge1xuICAgICAgYXV0b0NsZWFyU2VhcmNoVmFsdWUsXG4gICAgICBib3JkZXJsZXNzLFxuICAgICAgYXV0b0ZvY3VzLFxuICAgICAgZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoLFxuICAgICAgc2VydmVyU2VhcmNoLFxuICAgICAgbWF4TXVsdGlwbGVDb3VudCxcbiAgICAgIG1vZGUsXG4gICAgICBzaG93U2VhcmNoLFxuICAgICAgdG9rZW5TZXBhcmF0b3JzLFxuICAgICAgbWF4VGFnQ291bnQsXG4gICAgICBjb21wYXJlV2l0aCxcbiAgICAgIG9wdGlvbkhlaWdodFB4LFxuICAgICAgb3B0aW9uT3ZlcmZsb3dTaXplLFxuICAgICAgc2hvd0Fycm93XG4gICAgfSA9IHRoaXMudWk7XG4gICAgdGhpcy5pID0ge1xuICAgICAgYXV0b0NsZWFyU2VhcmNoVmFsdWU6IHRvQm9vbChhdXRvQ2xlYXJTZWFyY2hWYWx1ZSwgdHJ1ZSksXG4gICAgICBib3JkZXJsZXNzOiB0b0Jvb2woYm9yZGVybGVzcywgZmFsc2UpLFxuICAgICAgYXV0b0ZvY3VzOiB0b0Jvb2woYXV0b0ZvY3VzLCBmYWxzZSksXG4gICAgICBkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGg6IHRvQm9vbChkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGgsIHRydWUpLFxuICAgICAgc2VydmVyU2VhcmNoOiB0b0Jvb2woc2VydmVyU2VhcmNoLCBmYWxzZSksXG4gICAgICBtYXhNdWx0aXBsZUNvdW50OiBtYXhNdWx0aXBsZUNvdW50IHx8IEluZmluaXR5LFxuICAgICAgbW9kZTogbW9kZSB8fCAnZGVmYXVsdCcsXG4gICAgICBzaG93U2VhcmNoOiB0b0Jvb2woc2hvd1NlYXJjaCwgdHJ1ZSksXG4gICAgICB0b2tlblNlcGFyYXRvcnM6IHRva2VuU2VwYXJhdG9ycyB8fCBbXSxcbiAgICAgIG1heFRhZ0NvdW50OiBtYXhUYWdDb3VudCB8fCB1bmRlZmluZWQsXG4gICAgICBvcHRpb25IZWlnaHRQeDogb3B0aW9uSGVpZ2h0UHggfHwgMzIsXG4gICAgICBvcHRpb25PdmVyZmxvd1NpemU6IG9wdGlvbk92ZXJmbG93U2l6ZSB8fCA4LFxuICAgICAgc2hvd0Fycm93OiB0eXBlb2Ygc2hvd0Fycm93ICE9PSAnYm9vbGVhbicgPyB1bmRlZmluZWQgOiBzaG93QXJyb3csXG4gICAgICBjb21wYXJlV2l0aDogY29tcGFyZVdpdGggfHwgKChvMTogTnpTYWZlQW55LCBvMjogTnpTYWZlQW55KSA9PiBvMSA9PT0gbzIpXG4gICAgfTtcblxuICAgIGNvbnN0IG9uU2VhcmNoID0gdGhpcy51aS5vblNlYXJjaCE7XG4gICAgaWYgKG9uU2VhcmNoKSB7XG4gICAgICB0aGlzLnNlYXJjaCRcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgdGFrZVVudGlsKHRoaXMuc2ZJdGVtQ29tcCEudW5zdWJzY3JpYmUkKSxcbiAgICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgICAgIGRlYm91bmNlVGltZSh0aGlzLnVpLnNlYXJjaERlYm91bmNlVGltZSB8fCAzMDApLFxuICAgICAgICAgIHN3aXRjaE1hcCh0ZXh0ID0+IG9uU2VhcmNoKHRleHQpKSxcbiAgICAgICAgICBjYXRjaEVycm9yKCgpID0+IFtdKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUobGlzdCA9PiB7XG4gICAgICAgICAgdGhpcy5kYXRhID0gbGlzdDtcbiAgICAgICAgICB0aGlzLmNoZWNrR3JvdXAobGlzdCk7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0KHZhbHVlOiBTRlZhbHVlKTogdm9pZCB7XG4gICAgZ2V0RGF0YSh0aGlzLnNjaGVtYSwgdGhpcy51aSwgdmFsdWUpLnN1YnNjcmliZShsaXN0ID0+IHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLmRhdGEgPSBsaXN0O1xuICAgICAgdGhpcy5jaGVja0dyb3VwKGxpc3QpO1xuICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gIH1cblxuICBjaGFuZ2UodmFsdWVzOiBTRlZhbHVlKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudWkuY2hhbmdlKSB7XG4gICAgICB0aGlzLnVpLmNoYW5nZSh2YWx1ZXMsIHRoaXMuZ2V0T3JnRGF0YSh2YWx1ZXMpKTtcbiAgICB9XG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZXMgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IHZhbHVlcyk7XG4gIH1cblxuICBwcml2YXRlIGdldE9yZ0RhdGEodmFsdWVzOiBTRlZhbHVlKTogU0ZTY2hlbWFFbnVtIHwgU0ZTY2hlbWFFbnVtW10ge1xuICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZXMpKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbmplY3Rvci5nZXQoQXJyYXlTZXJ2aWNlKS5maW5kVHJlZSh0aGlzLmRhdGEsIGl0ZW0gPT4gaXRlbS52YWx1ZSA9PT0gdmFsdWVzKSE7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZXMubWFwKHZhbHVlID0+IHtcbiAgICAgIGxldCBpdGVtOiBTRlNjaGVtYUVudW0gfCBudWxsID0gbnVsbDtcbiAgICAgIHRoaXMuZGF0YS5mb3JFYWNoKGxpc3QgPT4ge1xuICAgICAgICBpdGVtID0gbGlzdC5jaGlsZHJlbj8uZmluZCh3ID0+IHcudmFsdWUgPT09IHZhbHVlKSE7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBpdGVtO1xuICAgIH0pO1xuICB9XG5cbiAgb3BlbkNoYW5nZShzdGF0dXM6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy51aS5vcGVuQ2hhbmdlKSB7XG4gICAgICB0aGlzLnVpLm9wZW5DaGFuZ2Uoc3RhdHVzKTtcbiAgICB9XG4gIH1cblxuICBzY3JvbGxUb0JvdHRvbSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy51aS5zY3JvbGxUb0JvdHRvbSkge1xuICAgICAgdGhpcy51aS5zY3JvbGxUb0JvdHRvbSgpO1xuICAgIH1cbiAgfVxuXG4gIG9uU2VhcmNoKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy51aS5vblNlYXJjaCkge1xuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2VhcmNoJC5uZXh0KHZhbHVlKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==