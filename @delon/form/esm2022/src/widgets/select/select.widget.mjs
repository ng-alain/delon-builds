import { Component, ViewEncapsulation } from '@angular/core';
import { Subject, catchError, debounceTime, distinctUntilChanged, switchMap, takeUntil } from 'rxjs';
import { ArrayService } from '@delon/util/array';
import { getData, toBool } from '../../utils';
import { ControlUIWidget } from '../../widget';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "ng-zorro-antd/core/transition-patch";
import * as i4 from "ng-zorro-antd/icon";
import * as i5 from "ng-zorro-antd/select";
import * as i6 from "../../sf-item-wrap.component";
export class SelectWidget extends ControlUIWidget {
    constructor() {
        super(...arguments);
        this.search$ = new Subject();
        this.data = [];
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
                .pipe(takeUntil(this.sfItemComp.destroy$), distinctUntilChanged(), debounceTime(this.ui.searchDebounceTime || 300), switchMap(text => onSearch(text)), catchError(() => []))
                .subscribe(list => {
                this.data = list;
                this.checkGroup(list);
                this.loading = false;
                this.detectChanges();
            });
        }
    }
    reset(value) {
        const onSearch = this.ui.onSearch;
        getData(this.schema, this.ui, value).subscribe(list => {
            this._value = value;
            if (onSearch == null)
                this.data = list;
            this.checkGroup(list);
            this.detectChanges();
        });
        if (value && onSearch != null)
            this.search$.next(value);
    }
    change(values) {
        if (this.ui.change) {
            this.ui.change(values, this.getOrgData(values));
        }
        this.setValue(values == null ? undefined : values);
    }
    getOrgData(values) {
        const srv = this.injector.get(ArrayService);
        if (!Array.isArray(values)) {
            return srv.findTree(this.data, (item) => item.value === values);
        }
        return values.map(value => srv.findTree(this.data, (item) => item.value === value));
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.1", ngImport: i0, type: SelectWidget, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.1", type: SelectWidget, selector: "sf-select", usesInheritance: true, ngImport: i0, template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <nz-select\n    [nzId]=\"id\"\n    [nzDisabled]=\"disabled\"\n    [(ngModel)]=\"_value\"\n    (ngModelChange)=\"change($event)\"\n    [nzSize]=\"ui.size!\"\n    [nzPlaceHolder]=\"ui.placeholder!\"\n    [nzNotFoundContent]=\"ui.notFoundContent\"\n    [nzDropdownClassName]=\"ui.dropdownClassName!\"\n    [nzAllowClear]=\"ui.allowClear\"\n    [nzDropdownStyle]=\"ui.dropdownStyle!\"\n    [nzCustomTemplate]=\"ui.customTemplate!\"\n    [nzSuffixIcon]=\"ui.suffixIcon!\"\n    [nzRemoveIcon]=\"ui.removeIcon!\"\n    [nzClearIcon]=\"ui.clearIcon!\"\n    [nzMenuItemSelectedIcon]=\"ui.menuItemSelectedIcon!\"\n    [nzMaxTagPlaceholder]=\"ui.maxTagPlaceholder!\"\n    [nzDropdownRender]=\"ui.dropdownRender!\"\n    [nzAutoClearSearchValue]=\"i.autoClearSearchValue\"\n    [nzBorderless]=\"i.borderless\"\n    [nzAutoFocus]=\"i.autoFocus\"\n    [nzDropdownMatchSelectWidth]=\"i.dropdownMatchSelectWidth!\"\n    [nzServerSearch]=\"i.serverSearch\"\n    [nzMaxMultipleCount]=\"i.maxMultipleCount!\"\n    [nzMode]=\"i.mode!\"\n    [nzShowSearch]=\"i.showSearch\"\n    [nzShowArrow]=\"i.showArrow!\"\n    [nzTokenSeparators]=\"i.tokenSeparators!\"\n    [nzMaxTagCount]=\"i.maxTagCount!\"\n    [compareWith]=\"i.compareWith!\"\n    [nzOptionHeightPx]=\"i.optionHeightPx!\"\n    [nzOptionOverflowSize]=\"i.optionOverflowSize!\"\n    (nzOpenChange)=\"openChange($event)\"\n    (nzOnSearch)=\"onSearch($event)\"\n    (nzScrollToBottom)=\"scrollToBottom()\"\n  >\n    <ng-container *ngIf=\"!loading && !hasGroup\">\n      <nz-option\n        *ngFor=\"let o of data\"\n        [nzLabel]=\"o.label\"\n        [nzValue]=\"o.value\"\n        [nzHide]=\"o.hide\"\n        [nzDisabled]=\"o.disabled\"\n      />\n    </ng-container>\n    <ng-container *ngIf=\"!loading && hasGroup\">\n      <nz-option-group *ngFor=\"let i of data\" [nzLabel]=\"i.label\">\n        <nz-option\n          *ngFor=\"let o of i.children\"\n          [nzLabel]=\"o.label\"\n          [nzValue]=\"o.value\"\n          [nzDisabled]=\"o.disabled\"\n          [nzHide]=\"o.hide\"\n        />\n      </nz-option-group>\n    </ng-container>\n    <nz-option *ngIf=\"loading\" nzDisabled nzCustomContent>\n      <i nz-icon nzType=\"loading\"></i>\n      {{ ui.searchLoadingText }}\n    </nz-option>\n  </nz-select>\n</sf-item-wrap>\n", dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i3.ɵNzTransitionPatchDirective, selector: "[nz-button], nz-button-group, [nz-icon], [nz-menu-item], [nz-submenu], nz-select-top-control, nz-select-placeholder, nz-input-group", inputs: ["hidden"] }, { kind: "directive", type: i4.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "component", type: i5.NzOptionComponent, selector: "nz-option", inputs: ["nzTitle", "nzLabel", "nzValue", "nzKey", "nzDisabled", "nzHide", "nzCustomContent"], exportAs: ["nzOption"] }, { kind: "component", type: i5.NzSelectComponent, selector: "nz-select", inputs: ["nzId", "nzSize", "nzStatus", "nzOptionHeightPx", "nzOptionOverflowSize", "nzDropdownClassName", "nzDropdownMatchSelectWidth", "nzDropdownStyle", "nzNotFoundContent", "nzPlaceHolder", "nzPlacement", "nzMaxTagCount", "nzDropdownRender", "nzCustomTemplate", "nzSuffixIcon", "nzClearIcon", "nzRemoveIcon", "nzMenuItemSelectedIcon", "nzTokenSeparators", "nzMaxTagPlaceholder", "nzMaxMultipleCount", "nzMode", "nzFilterOption", "compareWith", "nzAllowClear", "nzBorderless", "nzShowSearch", "nzLoading", "nzAutoFocus", "nzAutoClearSearchValue", "nzServerSearch", "nzDisabled", "nzOpen", "nzSelectOnTab", "nzBackdrop", "nzOptions", "nzShowArrow"], outputs: ["nzOnSearch", "nzScrollToBottom", "nzOpenChange", "nzBlur", "nzFocus"], exportAs: ["nzSelect"] }, { kind: "component", type: i5.NzOptionGroupComponent, selector: "nz-option-group", inputs: ["nzLabel"], exportAs: ["nzOptionGroup"] }, { kind: "component", type: i6.SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.1", ngImport: i0, type: SelectWidget, decorators: [{
            type: Component,
            args: [{ selector: 'sf-select', preserveWhitespaces: false, encapsulation: ViewEncapsulation.None, template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <nz-select\n    [nzId]=\"id\"\n    [nzDisabled]=\"disabled\"\n    [(ngModel)]=\"_value\"\n    (ngModelChange)=\"change($event)\"\n    [nzSize]=\"ui.size!\"\n    [nzPlaceHolder]=\"ui.placeholder!\"\n    [nzNotFoundContent]=\"ui.notFoundContent\"\n    [nzDropdownClassName]=\"ui.dropdownClassName!\"\n    [nzAllowClear]=\"ui.allowClear\"\n    [nzDropdownStyle]=\"ui.dropdownStyle!\"\n    [nzCustomTemplate]=\"ui.customTemplate!\"\n    [nzSuffixIcon]=\"ui.suffixIcon!\"\n    [nzRemoveIcon]=\"ui.removeIcon!\"\n    [nzClearIcon]=\"ui.clearIcon!\"\n    [nzMenuItemSelectedIcon]=\"ui.menuItemSelectedIcon!\"\n    [nzMaxTagPlaceholder]=\"ui.maxTagPlaceholder!\"\n    [nzDropdownRender]=\"ui.dropdownRender!\"\n    [nzAutoClearSearchValue]=\"i.autoClearSearchValue\"\n    [nzBorderless]=\"i.borderless\"\n    [nzAutoFocus]=\"i.autoFocus\"\n    [nzDropdownMatchSelectWidth]=\"i.dropdownMatchSelectWidth!\"\n    [nzServerSearch]=\"i.serverSearch\"\n    [nzMaxMultipleCount]=\"i.maxMultipleCount!\"\n    [nzMode]=\"i.mode!\"\n    [nzShowSearch]=\"i.showSearch\"\n    [nzShowArrow]=\"i.showArrow!\"\n    [nzTokenSeparators]=\"i.tokenSeparators!\"\n    [nzMaxTagCount]=\"i.maxTagCount!\"\n    [compareWith]=\"i.compareWith!\"\n    [nzOptionHeightPx]=\"i.optionHeightPx!\"\n    [nzOptionOverflowSize]=\"i.optionOverflowSize!\"\n    (nzOpenChange)=\"openChange($event)\"\n    (nzOnSearch)=\"onSearch($event)\"\n    (nzScrollToBottom)=\"scrollToBottom()\"\n  >\n    <ng-container *ngIf=\"!loading && !hasGroup\">\n      <nz-option\n        *ngFor=\"let o of data\"\n        [nzLabel]=\"o.label\"\n        [nzValue]=\"o.value\"\n        [nzHide]=\"o.hide\"\n        [nzDisabled]=\"o.disabled\"\n      />\n    </ng-container>\n    <ng-container *ngIf=\"!loading && hasGroup\">\n      <nz-option-group *ngFor=\"let i of data\" [nzLabel]=\"i.label\">\n        <nz-option\n          *ngFor=\"let o of i.children\"\n          [nzLabel]=\"o.label\"\n          [nzValue]=\"o.value\"\n          [nzDisabled]=\"o.disabled\"\n          [nzHide]=\"o.hide\"\n        />\n      </nz-option-group>\n    </ng-container>\n    <nz-option *ngIf=\"loading\" nzDisabled nzCustomContent>\n      <i nz-icon nzType=\"loading\"></i>\n      {{ ui.searchLoadingText }}\n    </nz-option>\n  </nz-select>\n</sf-item-wrap>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm0vc3JjL3dpZGdldHMvc2VsZWN0L3NlbGVjdC53aWRnZXQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3NyYy93aWRnZXRzL3NlbGVjdC9zZWxlY3Qud2lkZ2V0Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVyRyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFNakQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDOUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7Ozs7Ozs7QUFRL0MsTUFBTSxPQUFPLFlBQWEsU0FBUSxlQUFxQztJQU52RTs7UUFPVSxZQUFPLEdBQUcsSUFBSSxPQUFPLEVBQVUsQ0FBQztRQUV4QyxTQUFJLEdBQW1CLEVBQUUsQ0FBQztRQUUxQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLFlBQU8sR0FBRyxLQUFLLENBQUM7S0F1R2pCO0lBckdTLFVBQVUsQ0FBQyxJQUFvQjtRQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRUQsUUFBUTtRQUNOLE1BQU0sRUFDSixvQkFBb0IsRUFDcEIsVUFB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LENBQUMsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQzFCO0lBQ0gsQ0FBQztJQUVELFFBQVEsQ0FBQyxLQUFhO1FBQ3BCLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUU7WUFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDMUI7SUFDSCxDQUFDOzhHQTVHVSxZQUFZO2tHQUFaLFlBQVksd0VDbEJ6QiwrMkVBK0RBOzsyRkQ3Q2EsWUFBWTtrQkFOeEIsU0FBUzsrQkFDRSxXQUFXLHVCQUVBLEtBQUssaUJBQ1gsaUJBQWlCLENBQUMsSUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCwgY2F0Y2hFcnJvciwgZGVib3VuY2VUaW1lLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgc3dpdGNoTWFwLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQXJyYXlTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3V0aWwvYXJyYXknO1xuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5pbXBvcnQgeyBTRlNlbGVjdFdpZGdldFNjaGVtYSB9IGZyb20gJy4vc2NoZW1hJztcbmltcG9ydCB7IFNGVmFsdWUgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgU0ZTY2hlbWFFbnVtIH0gZnJvbSAnLi4vLi4vc2NoZW1hJztcbmltcG9ydCB7IGdldERhdGEsIHRvQm9vbCB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IENvbnRyb2xVSVdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLXNlbGVjdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZWxlY3Qud2lkZ2V0Lmh0bWwnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RXaWRnZXQgZXh0ZW5kcyBDb250cm9sVUlXaWRnZXQ8U0ZTZWxlY3RXaWRnZXRTY2hlbWE+IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBzZWFyY2gkID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xuICBpITogU0ZTZWxlY3RXaWRnZXRTY2hlbWE7XG4gIGRhdGE6IFNGU2NoZW1hRW51bVtdID0gW107XG4gIF92YWx1ZTogTnpTYWZlQW55O1xuICBoYXNHcm91cCA9IGZhbHNlO1xuICBsb2FkaW5nID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBjaGVja0dyb3VwKGxpc3Q6IFNGU2NoZW1hRW51bVtdKTogdm9pZCB7XG4gICAgdGhpcy5oYXNHcm91cCA9IChsaXN0IHx8IFtdKS5maWx0ZXIodyA9PiB3Lmdyb3VwID09PSB0cnVlKS5sZW5ndGggPiAwO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3Qge1xuICAgICAgYXV0b0NsZWFyU2VhcmNoVmFsdWUsXG4gICAgICBib3JkZXJsZXNzLFxuICAgICAgYXV0b0ZvY3VzLFxuICAgICAgZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoLFxuICAgICAgc2VydmVyU2VhcmNoLFxuICAgICAgbWF4TXVsdGlwbGVDb3VudCxcbiAgICAgIG1vZGUsXG4gICAgICBzaG93U2VhcmNoLFxuICAgICAgdG9rZW5TZXBhcmF0b3JzLFxuICAgICAgbWF4VGFnQ291bnQsXG4gICAgICBjb21wYXJlV2l0aCxcbiAgICAgIG9wdGlvbkhlaWdodFB4LFxuICAgICAgb3B0aW9uT3ZlcmZsb3dTaXplLFxuICAgICAgc2hvd0Fycm93XG4gICAgfSA9IHRoaXMudWk7XG4gICAgdGhpcy5pID0ge1xuICAgICAgYXV0b0NsZWFyU2VhcmNoVmFsdWU6IHRvQm9vbChhdXRvQ2xlYXJTZWFyY2hWYWx1ZSwgdHJ1ZSksXG4gICAgICBib3JkZXJsZXNzOiB0b0Jvb2woYm9yZGVybGVzcywgZmFsc2UpLFxuICAgICAgYXV0b0ZvY3VzOiB0b0Jvb2woYXV0b0ZvY3VzLCBmYWxzZSksXG4gICAgICBkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGg6IHRvQm9vbChkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGgsIHRydWUpLFxuICAgICAgc2VydmVyU2VhcmNoOiB0b0Jvb2woc2VydmVyU2VhcmNoLCBmYWxzZSksXG4gICAgICBtYXhNdWx0aXBsZUNvdW50OiBtYXhNdWx0aXBsZUNvdW50IHx8IEluZmluaXR5LFxuICAgICAgbW9kZTogbW9kZSB8fCAnZGVmYXVsdCcsXG4gICAgICBzaG93U2VhcmNoOiB0b0Jvb2woc2hvd1NlYXJjaCwgdHJ1ZSksXG4gICAgICB0b2tlblNlcGFyYXRvcnM6IHRva2VuU2VwYXJhdG9ycyB8fCBbXSxcbiAgICAgIG1heFRhZ0NvdW50OiBtYXhUYWdDb3VudCB8fCB1bmRlZmluZWQsXG4gICAgICBvcHRpb25IZWlnaHRQeDogb3B0aW9uSGVpZ2h0UHggfHwgMzIsXG4gICAgICBvcHRpb25PdmVyZmxvd1NpemU6IG9wdGlvbk92ZXJmbG93U2l6ZSB8fCA4LFxuICAgICAgc2hvd0Fycm93OiB0eXBlb2Ygc2hvd0Fycm93ICE9PSAnYm9vbGVhbicgPyB1bmRlZmluZWQgOiBzaG93QXJyb3csXG4gICAgICBjb21wYXJlV2l0aDogY29tcGFyZVdpdGggfHwgKChvMTogTnpTYWZlQW55LCBvMjogTnpTYWZlQW55KSA9PiBvMSA9PT0gbzIpXG4gICAgfTtcblxuICAgIGNvbnN0IG9uU2VhcmNoID0gdGhpcy51aS5vblNlYXJjaCE7XG4gICAgaWYgKG9uU2VhcmNoKSB7XG4gICAgICB0aGlzLnNlYXJjaCRcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgdGFrZVVudGlsKHRoaXMuc2ZJdGVtQ29tcCEuZGVzdHJveSQpLFxuICAgICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICAgICAgZGVib3VuY2VUaW1lKHRoaXMudWkuc2VhcmNoRGVib3VuY2VUaW1lIHx8IDMwMCksXG4gICAgICAgICAgc3dpdGNoTWFwKHRleHQgPT4gb25TZWFyY2godGV4dCkpLFxuICAgICAgICAgIGNhdGNoRXJyb3IoKCkgPT4gW10pXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZShsaXN0ID0+IHtcbiAgICAgICAgICB0aGlzLmRhdGEgPSBsaXN0O1xuICAgICAgICAgIHRoaXMuY2hlY2tHcm91cChsaXN0KTtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVzZXQodmFsdWU6IFNGVmFsdWUpOiB2b2lkIHtcbiAgICBjb25zdCBvblNlYXJjaCA9IHRoaXMudWkub25TZWFyY2ghO1xuICAgIGdldERhdGEodGhpcy5zY2hlbWEsIHRoaXMudWksIHZhbHVlKS5zdWJzY3JpYmUobGlzdCA9PiB7XG4gICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgICAgaWYgKG9uU2VhcmNoID09IG51bGwpIHRoaXMuZGF0YSA9IGxpc3Q7XG4gICAgICB0aGlzLmNoZWNrR3JvdXAobGlzdCk7XG4gICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgICBpZiAodmFsdWUgJiYgb25TZWFyY2ggIT0gbnVsbCkgdGhpcy5zZWFyY2gkLm5leHQodmFsdWUpO1xuICB9XG5cbiAgY2hhbmdlKHZhbHVlczogU0ZWYWx1ZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLnVpLmNoYW5nZSkge1xuICAgICAgdGhpcy51aS5jaGFuZ2UodmFsdWVzLCB0aGlzLmdldE9yZ0RhdGEodmFsdWVzKSk7XG4gICAgfVxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWVzID09IG51bGwgPyB1bmRlZmluZWQgOiB2YWx1ZXMpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRPcmdEYXRhKHZhbHVlczogU0ZWYWx1ZSk6IFNGU2NoZW1hRW51bSB8IFNGU2NoZW1hRW51bVtdIHtcbiAgICBjb25zdCBzcnYgPSB0aGlzLmluamVjdG9yLmdldChBcnJheVNlcnZpY2UpO1xuICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZXMpKSB7XG4gICAgICByZXR1cm4gc3J2LmZpbmRUcmVlKHRoaXMuZGF0YSwgKGl0ZW06IFNGU2NoZW1hRW51bSkgPT4gaXRlbS52YWx1ZSA9PT0gdmFsdWVzKSE7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZXMubWFwKHZhbHVlID0+IHNydi5maW5kVHJlZSh0aGlzLmRhdGEsIChpdGVtOiBTRlNjaGVtYUVudW0pID0+IGl0ZW0udmFsdWUgPT09IHZhbHVlKSk7XG4gIH1cblxuICBvcGVuQ2hhbmdlKHN0YXR1czogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICh0aGlzLnVpLm9wZW5DaGFuZ2UpIHtcbiAgICAgIHRoaXMudWkub3BlbkNoYW5nZShzdGF0dXMpO1xuICAgIH1cbiAgfVxuXG4gIHNjcm9sbFRvQm90dG9tKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnVpLnNjcm9sbFRvQm90dG9tKSB7XG4gICAgICB0aGlzLnVpLnNjcm9sbFRvQm90dG9tKCk7XG4gICAgfVxuICB9XG5cbiAgb25TZWFyY2godmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLnVpLm9uU2VhcmNoKSB7XG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5zZWFyY2gkLm5leHQodmFsdWUpO1xuICAgIH1cbiAgfVxufVxuIiwiPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cbiAgPG56LXNlbGVjdFxuICAgIFtueklkXT1cImlkXCJcbiAgICBbbnpEaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgWyhuZ01vZGVsKV09XCJfdmFsdWVcIlxuICAgIChuZ01vZGVsQ2hhbmdlKT1cImNoYW5nZSgkZXZlbnQpXCJcbiAgICBbbnpTaXplXT1cInVpLnNpemUhXCJcbiAgICBbbnpQbGFjZUhvbGRlcl09XCJ1aS5wbGFjZWhvbGRlciFcIlxuICAgIFtuek5vdEZvdW5kQ29udGVudF09XCJ1aS5ub3RGb3VuZENvbnRlbnRcIlxuICAgIFtuekRyb3Bkb3duQ2xhc3NOYW1lXT1cInVpLmRyb3Bkb3duQ2xhc3NOYW1lIVwiXG4gICAgW256QWxsb3dDbGVhcl09XCJ1aS5hbGxvd0NsZWFyXCJcbiAgICBbbnpEcm9wZG93blN0eWxlXT1cInVpLmRyb3Bkb3duU3R5bGUhXCJcbiAgICBbbnpDdXN0b21UZW1wbGF0ZV09XCJ1aS5jdXN0b21UZW1wbGF0ZSFcIlxuICAgIFtuelN1ZmZpeEljb25dPVwidWkuc3VmZml4SWNvbiFcIlxuICAgIFtuelJlbW92ZUljb25dPVwidWkucmVtb3ZlSWNvbiFcIlxuICAgIFtuekNsZWFySWNvbl09XCJ1aS5jbGVhckljb24hXCJcbiAgICBbbnpNZW51SXRlbVNlbGVjdGVkSWNvbl09XCJ1aS5tZW51SXRlbVNlbGVjdGVkSWNvbiFcIlxuICAgIFtuek1heFRhZ1BsYWNlaG9sZGVyXT1cInVpLm1heFRhZ1BsYWNlaG9sZGVyIVwiXG4gICAgW256RHJvcGRvd25SZW5kZXJdPVwidWkuZHJvcGRvd25SZW5kZXIhXCJcbiAgICBbbnpBdXRvQ2xlYXJTZWFyY2hWYWx1ZV09XCJpLmF1dG9DbGVhclNlYXJjaFZhbHVlXCJcbiAgICBbbnpCb3JkZXJsZXNzXT1cImkuYm9yZGVybGVzc1wiXG4gICAgW256QXV0b0ZvY3VzXT1cImkuYXV0b0ZvY3VzXCJcbiAgICBbbnpEcm9wZG93bk1hdGNoU2VsZWN0V2lkdGhdPVwiaS5kcm9wZG93bk1hdGNoU2VsZWN0V2lkdGghXCJcbiAgICBbbnpTZXJ2ZXJTZWFyY2hdPVwiaS5zZXJ2ZXJTZWFyY2hcIlxuICAgIFtuek1heE11bHRpcGxlQ291bnRdPVwiaS5tYXhNdWx0aXBsZUNvdW50IVwiXG4gICAgW256TW9kZV09XCJpLm1vZGUhXCJcbiAgICBbbnpTaG93U2VhcmNoXT1cImkuc2hvd1NlYXJjaFwiXG4gICAgW256U2hvd0Fycm93XT1cImkuc2hvd0Fycm93IVwiXG4gICAgW256VG9rZW5TZXBhcmF0b3JzXT1cImkudG9rZW5TZXBhcmF0b3JzIVwiXG4gICAgW256TWF4VGFnQ291bnRdPVwiaS5tYXhUYWdDb3VudCFcIlxuICAgIFtjb21wYXJlV2l0aF09XCJpLmNvbXBhcmVXaXRoIVwiXG4gICAgW256T3B0aW9uSGVpZ2h0UHhdPVwiaS5vcHRpb25IZWlnaHRQeCFcIlxuICAgIFtuek9wdGlvbk92ZXJmbG93U2l6ZV09XCJpLm9wdGlvbk92ZXJmbG93U2l6ZSFcIlxuICAgIChuek9wZW5DaGFuZ2UpPVwib3BlbkNoYW5nZSgkZXZlbnQpXCJcbiAgICAobnpPblNlYXJjaCk9XCJvblNlYXJjaCgkZXZlbnQpXCJcbiAgICAobnpTY3JvbGxUb0JvdHRvbSk9XCJzY3JvbGxUb0JvdHRvbSgpXCJcbiAgPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhbG9hZGluZyAmJiAhaGFzR3JvdXBcIj5cbiAgICAgIDxuei1vcHRpb25cbiAgICAgICAgKm5nRm9yPVwibGV0IG8gb2YgZGF0YVwiXG4gICAgICAgIFtuekxhYmVsXT1cIm8ubGFiZWxcIlxuICAgICAgICBbbnpWYWx1ZV09XCJvLnZhbHVlXCJcbiAgICAgICAgW256SGlkZV09XCJvLmhpZGVcIlxuICAgICAgICBbbnpEaXNhYmxlZF09XCJvLmRpc2FibGVkXCJcbiAgICAgIC8+XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFsb2FkaW5nICYmIGhhc0dyb3VwXCI+XG4gICAgICA8bnotb3B0aW9uLWdyb3VwICpuZ0Zvcj1cImxldCBpIG9mIGRhdGFcIiBbbnpMYWJlbF09XCJpLmxhYmVsXCI+XG4gICAgICAgIDxuei1vcHRpb25cbiAgICAgICAgICAqbmdGb3I9XCJsZXQgbyBvZiBpLmNoaWxkcmVuXCJcbiAgICAgICAgICBbbnpMYWJlbF09XCJvLmxhYmVsXCJcbiAgICAgICAgICBbbnpWYWx1ZV09XCJvLnZhbHVlXCJcbiAgICAgICAgICBbbnpEaXNhYmxlZF09XCJvLmRpc2FibGVkXCJcbiAgICAgICAgICBbbnpIaWRlXT1cIm8uaGlkZVwiXG4gICAgICAgIC8+XG4gICAgICA8L256LW9wdGlvbi1ncm91cD5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8bnotb3B0aW9uICpuZ0lmPVwibG9hZGluZ1wiIG56RGlzYWJsZWQgbnpDdXN0b21Db250ZW50PlxuICAgICAgPGkgbnotaWNvbiBuelR5cGU9XCJsb2FkaW5nXCI+PC9pPlxuICAgICAge3sgdWkuc2VhcmNoTG9hZGluZ1RleHQgfX1cbiAgICA8L256LW9wdGlvbj5cbiAgPC9uei1zZWxlY3Q+XG48L3NmLWl0ZW0td3JhcD5cbiJdfQ==