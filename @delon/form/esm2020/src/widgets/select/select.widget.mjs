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
}
SelectWidget.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.2", ngImport: i0, type: SelectWidget, deps: null, target: i0.ɵɵFactoryTarget.Component });
SelectWidget.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.2", type: SelectWidget, selector: "sf-select", usesInheritance: true, ngImport: i0, template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <nz-select\n    [nzId]=\"id\"\n    [nzDisabled]=\"disabled\"\n    [(ngModel)]=\"_value\"\n    (ngModelChange)=\"change($event)\"\n    [nzSize]=\"ui.size!\"\n    [nzPlaceHolder]=\"ui.placeholder!\"\n    [nzNotFoundContent]=\"ui.notFoundContent\"\n    [nzDropdownClassName]=\"ui.dropdownClassName!\"\n    [nzAllowClear]=\"ui.allowClear\"\n    [nzDropdownStyle]=\"ui.dropdownStyle!\"\n    [nzCustomTemplate]=\"ui.customTemplate!\"\n    [nzSuffixIcon]=\"ui.suffixIcon!\"\n    [nzRemoveIcon]=\"ui.removeIcon!\"\n    [nzClearIcon]=\"ui.clearIcon!\"\n    [nzMenuItemSelectedIcon]=\"ui.menuItemSelectedIcon!\"\n    [nzMaxTagPlaceholder]=\"ui.maxTagPlaceholder!\"\n    [nzDropdownRender]=\"ui.dropdownRender!\"\n    [nzAutoClearSearchValue]=\"i.autoClearSearchValue\"\n    [nzBorderless]=\"i.borderless\"\n    [nzAutoFocus]=\"i.autoFocus\"\n    [nzDropdownMatchSelectWidth]=\"i.dropdownMatchSelectWidth!\"\n    [nzServerSearch]=\"i.serverSearch\"\n    [nzMaxMultipleCount]=\"i.maxMultipleCount!\"\n    [nzMode]=\"i.mode!\"\n    [nzShowSearch]=\"i.showSearch\"\n    [nzShowArrow]=\"i.showArrow!\"\n    [nzTokenSeparators]=\"i.tokenSeparators!\"\n    [nzMaxTagCount]=\"i.maxTagCount!\"\n    [compareWith]=\"i.compareWith!\"\n    [nzOptionHeightPx]=\"i.optionHeightPx!\"\n    [nzOptionOverflowSize]=\"i.optionOverflowSize!\"\n    (nzOpenChange)=\"openChange($event)\"\n    (nzOnSearch)=\"onSearch($event)\"\n    (nzScrollToBottom)=\"scrollToBottom()\"\n  >\n    <ng-container *ngIf=\"!loading && !hasGroup\">\n      <nz-option\n        *ngFor=\"let o of data\"\n        [nzLabel]=\"o.label\"\n        [nzValue]=\"o.value\"\n        [nzHide]=\"o.hide\"\n        [nzDisabled]=\"o.disabled\"\n      ></nz-option>\n    </ng-container>\n    <ng-container *ngIf=\"!loading && hasGroup\">\n      <nz-option-group *ngFor=\"let i of data\" [nzLabel]=\"i.label\">\n        <nz-option\n          *ngFor=\"let o of i.children\"\n          [nzLabel]=\"o.label\"\n          [nzValue]=\"o.value\"\n          [nzDisabled]=\"o.disabled\"\n          [nzHide]=\"o.hide\"\n        ></nz-option>\n      </nz-option-group>\n    </ng-container>\n    <nz-option *ngIf=\"loading\" nzDisabled nzCustomContent>\n      <i nz-icon nzType=\"loading\"></i>\n      {{ ui.searchLoadingText }}\n    </nz-option>\n  </nz-select>\n</sf-item-wrap>\n", dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i3.ɵNzTransitionPatchDirective, selector: "[nz-button], nz-button-group, [nz-icon], [nz-menu-item], [nz-submenu], nz-select-top-control, nz-select-placeholder, nz-input-group", inputs: ["hidden"] }, { kind: "directive", type: i4.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "component", type: i5.NzOptionComponent, selector: "nz-option", inputs: ["nzLabel", "nzValue", "nzDisabled", "nzHide", "nzCustomContent"], exportAs: ["nzOption"] }, { kind: "component", type: i5.NzSelectComponent, selector: "nz-select", inputs: ["nzId", "nzSize", "nzStatus", "nzOptionHeightPx", "nzOptionOverflowSize", "nzDropdownClassName", "nzDropdownMatchSelectWidth", "nzDropdownStyle", "nzNotFoundContent", "nzPlaceHolder", "nzMaxTagCount", "nzDropdownRender", "nzCustomTemplate", "nzSuffixIcon", "nzClearIcon", "nzRemoveIcon", "nzMenuItemSelectedIcon", "nzTokenSeparators", "nzMaxTagPlaceholder", "nzMaxMultipleCount", "nzMode", "nzFilterOption", "compareWith", "nzAllowClear", "nzBorderless", "nzShowSearch", "nzLoading", "nzAutoFocus", "nzAutoClearSearchValue", "nzServerSearch", "nzDisabled", "nzOpen", "nzBackdrop", "nzOptions", "nzShowArrow"], outputs: ["nzOnSearch", "nzScrollToBottom", "nzOpenChange", "nzBlur", "nzFocus"], exportAs: ["nzSelect"] }, { kind: "component", type: i5.NzOptionGroupComponent, selector: "nz-option-group", inputs: ["nzLabel"], exportAs: ["nzOptionGroup"] }, { kind: "component", type: i6.SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.2", ngImport: i0, type: SelectWidget, decorators: [{
            type: Component,
            args: [{ selector: 'sf-select', preserveWhitespaces: false, encapsulation: ViewEncapsulation.None, template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <nz-select\n    [nzId]=\"id\"\n    [nzDisabled]=\"disabled\"\n    [(ngModel)]=\"_value\"\n    (ngModelChange)=\"change($event)\"\n    [nzSize]=\"ui.size!\"\n    [nzPlaceHolder]=\"ui.placeholder!\"\n    [nzNotFoundContent]=\"ui.notFoundContent\"\n    [nzDropdownClassName]=\"ui.dropdownClassName!\"\n    [nzAllowClear]=\"ui.allowClear\"\n    [nzDropdownStyle]=\"ui.dropdownStyle!\"\n    [nzCustomTemplate]=\"ui.customTemplate!\"\n    [nzSuffixIcon]=\"ui.suffixIcon!\"\n    [nzRemoveIcon]=\"ui.removeIcon!\"\n    [nzClearIcon]=\"ui.clearIcon!\"\n    [nzMenuItemSelectedIcon]=\"ui.menuItemSelectedIcon!\"\n    [nzMaxTagPlaceholder]=\"ui.maxTagPlaceholder!\"\n    [nzDropdownRender]=\"ui.dropdownRender!\"\n    [nzAutoClearSearchValue]=\"i.autoClearSearchValue\"\n    [nzBorderless]=\"i.borderless\"\n    [nzAutoFocus]=\"i.autoFocus\"\n    [nzDropdownMatchSelectWidth]=\"i.dropdownMatchSelectWidth!\"\n    [nzServerSearch]=\"i.serverSearch\"\n    [nzMaxMultipleCount]=\"i.maxMultipleCount!\"\n    [nzMode]=\"i.mode!\"\n    [nzShowSearch]=\"i.showSearch\"\n    [nzShowArrow]=\"i.showArrow!\"\n    [nzTokenSeparators]=\"i.tokenSeparators!\"\n    [nzMaxTagCount]=\"i.maxTagCount!\"\n    [compareWith]=\"i.compareWith!\"\n    [nzOptionHeightPx]=\"i.optionHeightPx!\"\n    [nzOptionOverflowSize]=\"i.optionOverflowSize!\"\n    (nzOpenChange)=\"openChange($event)\"\n    (nzOnSearch)=\"onSearch($event)\"\n    (nzScrollToBottom)=\"scrollToBottom()\"\n  >\n    <ng-container *ngIf=\"!loading && !hasGroup\">\n      <nz-option\n        *ngFor=\"let o of data\"\n        [nzLabel]=\"o.label\"\n        [nzValue]=\"o.value\"\n        [nzHide]=\"o.hide\"\n        [nzDisabled]=\"o.disabled\"\n      ></nz-option>\n    </ng-container>\n    <ng-container *ngIf=\"!loading && hasGroup\">\n      <nz-option-group *ngFor=\"let i of data\" [nzLabel]=\"i.label\">\n        <nz-option\n          *ngFor=\"let o of i.children\"\n          [nzLabel]=\"o.label\"\n          [nzValue]=\"o.value\"\n          [nzDisabled]=\"o.disabled\"\n          [nzHide]=\"o.hide\"\n        ></nz-option>\n      </nz-option-group>\n    </ng-container>\n    <nz-option *ngIf=\"loading\" nzDisabled nzCustomContent>\n      <i nz-icon nzType=\"loading\"></i>\n      {{ ui.searchLoadingText }}\n    </nz-option>\n  </nz-select>\n</sf-item-wrap>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm0vc3JjL3dpZGdldHMvc2VsZWN0L3NlbGVjdC53aWRnZXQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3NyYy93aWRnZXRzL3NlbGVjdC9zZWxlY3Qud2lkZ2V0Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVyRyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFLakQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDOUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7Ozs7Ozs7QUFTL0MsTUFBTSxPQUFPLFlBQWEsU0FBUSxlQUFxQztJQU52RTs7UUFPVSxZQUFPLEdBQUcsSUFBSSxPQUFPLEVBQVUsQ0FBQztRQUl4QyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLFlBQU8sR0FBRyxLQUFLLENBQUM7S0FxR2pCO0lBbkdTLFVBQVUsQ0FBQyxJQUFvQjtRQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRUQsUUFBUTtRQUNOLE1BQU0sRUFDSixvQkFBb0IsRUFDcEIsVUFBVSxFQUNWLFNBQVMsRUFDVCx3QkFBd0IsRUFD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Q0FBQztTQUMxQjtJQUNILENBQUM7O3lHQTFHVSxZQUFZOzZGQUFaLFlBQVksd0VDbEJ6QixxNEVBK0RBOzJGRDdDYSxZQUFZO2tCQU54QixTQUFTOytCQUNFLFdBQVcsdUJBRUEsS0FBSyxpQkFDWCxpQkFBaUIsQ0FBQyxJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0LCBjYXRjaEVycm9yLCBkZWJvdW5jZVRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBzd2l0Y2hNYXAsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBBcnJheVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdXRpbC9hcnJheSc7XG5pbXBvcnQgdHlwZSB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbmltcG9ydCB7IFNGVmFsdWUgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgU0ZTY2hlbWFFbnVtIH0gZnJvbSAnLi4vLi4vc2NoZW1hJztcbmltcG9ydCB7IGdldERhdGEsIHRvQm9vbCB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IENvbnRyb2xVSVdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5pbXBvcnQgeyBTRlNlbGVjdFdpZGdldFNjaGVtYSB9IGZyb20gJy4vc2NoZW1hJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2Ytc2VsZWN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlbGVjdC53aWRnZXQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdFdpZGdldCBleHRlbmRzIENvbnRyb2xVSVdpZGdldDxTRlNlbGVjdFdpZGdldFNjaGVtYT4gaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIHNlYXJjaCQgPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XG4gIGkhOiBTRlNlbGVjdFdpZGdldFNjaGVtYTtcbiAgZGF0YSE6IFNGU2NoZW1hRW51bVtdO1xuICBfdmFsdWU6IE56U2FmZUFueTtcbiAgaGFzR3JvdXAgPSBmYWxzZTtcbiAgbG9hZGluZyA9IGZhbHNlO1xuXG4gIHByaXZhdGUgY2hlY2tHcm91cChsaXN0OiBTRlNjaGVtYUVudW1bXSk6IHZvaWQge1xuICAgIHRoaXMuaGFzR3JvdXAgPSAobGlzdCB8fCBbXSkuZmlsdGVyKHcgPT4gdy5ncm91cCA9PT0gdHJ1ZSkubGVuZ3RoID4gMDtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHtcbiAgICAgIGF1dG9DbGVhclNlYXJjaFZhbHVlLFxuICAgICAgYm9yZGVybGVzcyxcbiAgICAgIGF1dG9Gb2N1cyxcbiAgICAgIGRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aCxcbiAgICAgIHNlcnZlclNlYXJjaCxcbiAgICAgIG1heE11bHRpcGxlQ291bnQsXG4gICAgICBtb2RlLFxuICAgICAgc2hvd1NlYXJjaCxcbiAgICAgIHRva2VuU2VwYXJhdG9ycyxcbiAgICAgIG1heFRhZ0NvdW50LFxuICAgICAgY29tcGFyZVdpdGgsXG4gICAgICBvcHRpb25IZWlnaHRQeCxcbiAgICAgIG9wdGlvbk92ZXJmbG93U2l6ZSxcbiAgICAgIHNob3dBcnJvd1xuICAgIH0gPSB0aGlzLnVpO1xuICAgIHRoaXMuaSA9IHtcbiAgICAgIGF1dG9DbGVhclNlYXJjaFZhbHVlOiB0b0Jvb2woYXV0b0NsZWFyU2VhcmNoVmFsdWUsIHRydWUpLFxuICAgICAgYm9yZGVybGVzczogdG9Cb29sKGJvcmRlcmxlc3MsIGZhbHNlKSxcbiAgICAgIGF1dG9Gb2N1czogdG9Cb29sKGF1dG9Gb2N1cywgZmFsc2UpLFxuICAgICAgZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoOiB0b0Jvb2woZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoLCB0cnVlKSxcbiAgICAgIHNlcnZlclNlYXJjaDogdG9Cb29sKHNlcnZlclNlYXJjaCwgZmFsc2UpLFxuICAgICAgbWF4TXVsdGlwbGVDb3VudDogbWF4TXVsdGlwbGVDb3VudCB8fCBJbmZpbml0eSxcbiAgICAgIG1vZGU6IG1vZGUgfHwgJ2RlZmF1bHQnLFxuICAgICAgc2hvd1NlYXJjaDogdG9Cb29sKHNob3dTZWFyY2gsIHRydWUpLFxuICAgICAgdG9rZW5TZXBhcmF0b3JzOiB0b2tlblNlcGFyYXRvcnMgfHwgW10sXG4gICAgICBtYXhUYWdDb3VudDogbWF4VGFnQ291bnQgfHwgdW5kZWZpbmVkLFxuICAgICAgb3B0aW9uSGVpZ2h0UHg6IG9wdGlvbkhlaWdodFB4IHx8IDMyLFxuICAgICAgb3B0aW9uT3ZlcmZsb3dTaXplOiBvcHRpb25PdmVyZmxvd1NpemUgfHwgOCxcbiAgICAgIHNob3dBcnJvdzogdHlwZW9mIHNob3dBcnJvdyAhPT0gJ2Jvb2xlYW4nID8gdW5kZWZpbmVkIDogc2hvd0Fycm93LFxuICAgICAgY29tcGFyZVdpdGg6IGNvbXBhcmVXaXRoIHx8ICgobzE6IE56U2FmZUFueSwgbzI6IE56U2FmZUFueSkgPT4gbzEgPT09IG8yKVxuICAgIH07XG5cbiAgICBjb25zdCBvblNlYXJjaCA9IHRoaXMudWkub25TZWFyY2ghO1xuICAgIGlmIChvblNlYXJjaCkge1xuICAgICAgdGhpcy5zZWFyY2gkXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHRha2VVbnRpbCh0aGlzLnNmSXRlbUNvbXAhLmRlc3Ryb3kkKSxcbiAgICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgICAgIGRlYm91bmNlVGltZSh0aGlzLnVpLnNlYXJjaERlYm91bmNlVGltZSB8fCAzMDApLFxuICAgICAgICAgIHN3aXRjaE1hcCh0ZXh0ID0+IG9uU2VhcmNoKHRleHQpKSxcbiAgICAgICAgICBjYXRjaEVycm9yKCgpID0+IFtdKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUobGlzdCA9PiB7XG4gICAgICAgICAgdGhpcy5kYXRhID0gbGlzdDtcbiAgICAgICAgICB0aGlzLmNoZWNrR3JvdXAobGlzdCk7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0KHZhbHVlOiBTRlZhbHVlKTogdm9pZCB7XG4gICAgZ2V0RGF0YSh0aGlzLnNjaGVtYSwgdGhpcy51aSwgdmFsdWUpLnN1YnNjcmliZShsaXN0ID0+IHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLmRhdGEgPSBsaXN0O1xuICAgICAgdGhpcy5jaGVja0dyb3VwKGxpc3QpO1xuICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gIH1cblxuICBjaGFuZ2UodmFsdWVzOiBTRlZhbHVlKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudWkuY2hhbmdlKSB7XG4gICAgICB0aGlzLnVpLmNoYW5nZSh2YWx1ZXMsIHRoaXMuZ2V0T3JnRGF0YSh2YWx1ZXMpKTtcbiAgICB9XG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZXMgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IHZhbHVlcyk7XG4gIH1cblxuICBwcml2YXRlIGdldE9yZ0RhdGEodmFsdWVzOiBTRlZhbHVlKTogU0ZTY2hlbWFFbnVtIHwgU0ZTY2hlbWFFbnVtW10ge1xuICAgIGNvbnN0IHNydiA9IHRoaXMuaW5qZWN0b3IuZ2V0KEFycmF5U2VydmljZSk7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlcykpIHtcbiAgICAgIHJldHVybiBzcnYuZmluZFRyZWUodGhpcy5kYXRhLCAoaXRlbTogU0ZTY2hlbWFFbnVtKSA9PiBpdGVtLnZhbHVlID09PSB2YWx1ZXMpITtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlcy5tYXAodmFsdWUgPT4gc3J2LmZpbmRUcmVlKHRoaXMuZGF0YSwgKGl0ZW06IFNGU2NoZW1hRW51bSkgPT4gaXRlbS52YWx1ZSA9PT0gdmFsdWUpKTtcbiAgfVxuXG4gIG9wZW5DaGFuZ2Uoc3RhdHVzOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudWkub3BlbkNoYW5nZSkge1xuICAgICAgdGhpcy51aS5vcGVuQ2hhbmdlKHN0YXR1cyk7XG4gICAgfVxuICB9XG5cbiAgc2Nyb2xsVG9Cb3R0b20oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudWkuc2Nyb2xsVG9Cb3R0b20pIHtcbiAgICAgIHRoaXMudWkuc2Nyb2xsVG9Cb3R0b20oKTtcbiAgICB9XG4gIH1cblxuICBvblNlYXJjaCh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudWkub25TZWFyY2gpIHtcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICB0aGlzLnNlYXJjaCQubmV4dCh2YWx1ZSk7XG4gICAgfVxuICB9XG59XG4iLCI8c2YtaXRlbS13cmFwIFtpZF09XCJpZFwiIFtzY2hlbWFdPVwic2NoZW1hXCIgW3VpXT1cInVpXCIgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIiBbZXJyb3JdPVwiZXJyb3JcIiBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiPlxuICA8bnotc2VsZWN0XG4gICAgW256SWRdPVwiaWRcIlxuICAgIFtuekRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICBbKG5nTW9kZWwpXT1cIl92YWx1ZVwiXG4gICAgKG5nTW9kZWxDaGFuZ2UpPVwiY2hhbmdlKCRldmVudClcIlxuICAgIFtuelNpemVdPVwidWkuc2l6ZSFcIlxuICAgIFtuelBsYWNlSG9sZGVyXT1cInVpLnBsYWNlaG9sZGVyIVwiXG4gICAgW256Tm90Rm91bmRDb250ZW50XT1cInVpLm5vdEZvdW5kQ29udGVudFwiXG4gICAgW256RHJvcGRvd25DbGFzc05hbWVdPVwidWkuZHJvcGRvd25DbGFzc05hbWUhXCJcbiAgICBbbnpBbGxvd0NsZWFyXT1cInVpLmFsbG93Q2xlYXJcIlxuICAgIFtuekRyb3Bkb3duU3R5bGVdPVwidWkuZHJvcGRvd25TdHlsZSFcIlxuICAgIFtuekN1c3RvbVRlbXBsYXRlXT1cInVpLmN1c3RvbVRlbXBsYXRlIVwiXG4gICAgW256U3VmZml4SWNvbl09XCJ1aS5zdWZmaXhJY29uIVwiXG4gICAgW256UmVtb3ZlSWNvbl09XCJ1aS5yZW1vdmVJY29uIVwiXG4gICAgW256Q2xlYXJJY29uXT1cInVpLmNsZWFySWNvbiFcIlxuICAgIFtuek1lbnVJdGVtU2VsZWN0ZWRJY29uXT1cInVpLm1lbnVJdGVtU2VsZWN0ZWRJY29uIVwiXG4gICAgW256TWF4VGFnUGxhY2Vob2xkZXJdPVwidWkubWF4VGFnUGxhY2Vob2xkZXIhXCJcbiAgICBbbnpEcm9wZG93blJlbmRlcl09XCJ1aS5kcm9wZG93blJlbmRlciFcIlxuICAgIFtuekF1dG9DbGVhclNlYXJjaFZhbHVlXT1cImkuYXV0b0NsZWFyU2VhcmNoVmFsdWVcIlxuICAgIFtuekJvcmRlcmxlc3NdPVwiaS5ib3JkZXJsZXNzXCJcbiAgICBbbnpBdXRvRm9jdXNdPVwiaS5hdXRvRm9jdXNcIlxuICAgIFtuekRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aF09XCJpLmRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aCFcIlxuICAgIFtuelNlcnZlclNlYXJjaF09XCJpLnNlcnZlclNlYXJjaFwiXG4gICAgW256TWF4TXVsdGlwbGVDb3VudF09XCJpLm1heE11bHRpcGxlQ291bnQhXCJcbiAgICBbbnpNb2RlXT1cImkubW9kZSFcIlxuICAgIFtuelNob3dTZWFyY2hdPVwiaS5zaG93U2VhcmNoXCJcbiAgICBbbnpTaG93QXJyb3ddPVwiaS5zaG93QXJyb3chXCJcbiAgICBbbnpUb2tlblNlcGFyYXRvcnNdPVwiaS50b2tlblNlcGFyYXRvcnMhXCJcbiAgICBbbnpNYXhUYWdDb3VudF09XCJpLm1heFRhZ0NvdW50IVwiXG4gICAgW2NvbXBhcmVXaXRoXT1cImkuY29tcGFyZVdpdGghXCJcbiAgICBbbnpPcHRpb25IZWlnaHRQeF09XCJpLm9wdGlvbkhlaWdodFB4IVwiXG4gICAgW256T3B0aW9uT3ZlcmZsb3dTaXplXT1cImkub3B0aW9uT3ZlcmZsb3dTaXplIVwiXG4gICAgKG56T3BlbkNoYW5nZSk9XCJvcGVuQ2hhbmdlKCRldmVudClcIlxuICAgIChuek9uU2VhcmNoKT1cIm9uU2VhcmNoKCRldmVudClcIlxuICAgIChuelNjcm9sbFRvQm90dG9tKT1cInNjcm9sbFRvQm90dG9tKClcIlxuICA+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFsb2FkaW5nICYmICFoYXNHcm91cFwiPlxuICAgICAgPG56LW9wdGlvblxuICAgICAgICAqbmdGb3I9XCJsZXQgbyBvZiBkYXRhXCJcbiAgICAgICAgW256TGFiZWxdPVwiby5sYWJlbFwiXG4gICAgICAgIFtuelZhbHVlXT1cIm8udmFsdWVcIlxuICAgICAgICBbbnpIaWRlXT1cIm8uaGlkZVwiXG4gICAgICAgIFtuekRpc2FibGVkXT1cIm8uZGlzYWJsZWRcIlxuICAgICAgPjwvbnotb3B0aW9uPlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhbG9hZGluZyAmJiBoYXNHcm91cFwiPlxuICAgICAgPG56LW9wdGlvbi1ncm91cCAqbmdGb3I9XCJsZXQgaSBvZiBkYXRhXCIgW256TGFiZWxdPVwiaS5sYWJlbFwiPlxuICAgICAgICA8bnotb3B0aW9uXG4gICAgICAgICAgKm5nRm9yPVwibGV0IG8gb2YgaS5jaGlsZHJlblwiXG4gICAgICAgICAgW256TGFiZWxdPVwiby5sYWJlbFwiXG4gICAgICAgICAgW256VmFsdWVdPVwiby52YWx1ZVwiXG4gICAgICAgICAgW256RGlzYWJsZWRdPVwiby5kaXNhYmxlZFwiXG4gICAgICAgICAgW256SGlkZV09XCJvLmhpZGVcIlxuICAgICAgICA+PC9uei1vcHRpb24+XG4gICAgICA8L256LW9wdGlvbi1ncm91cD5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8bnotb3B0aW9uICpuZ0lmPVwibG9hZGluZ1wiIG56RGlzYWJsZWQgbnpDdXN0b21Db250ZW50PlxuICAgICAgPGkgbnotaWNvbiBuelR5cGU9XCJsb2FkaW5nXCI+PC9pPlxuICAgICAge3sgdWkuc2VhcmNoTG9hZGluZ1RleHQgfX1cbiAgICA8L256LW9wdGlvbj5cbiAgPC9uei1zZWxlY3Q+XG48L3NmLWl0ZW0td3JhcD5cbiJdfQ==