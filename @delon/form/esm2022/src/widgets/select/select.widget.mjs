import { Component, ViewEncapsulation } from '@angular/core';
import { Subject, catchError, debounceTime, distinctUntilChanged, switchMap, takeUntil } from 'rxjs';
import { ArrayService } from '@delon/util/array';
import { getData, toBool } from '../../utils';
import { ControlUIWidget } from '../../widget';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "ng-zorro-antd/core/transition-patch";
import * as i3 from "ng-zorro-antd/icon";
import * as i4 from "ng-zorro-antd/select";
import * as i5 from "../../sf-item-wrap.component";
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
            maxTagCount: maxTagCount || Infinity,
            optionHeightPx: optionHeightPx || 32,
            optionOverflowSize: optionOverflowSize || 8,
            showArrow: toBool(showArrow, true),
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
        this.setValue(values == null ? this.ui.clearValue : values);
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.7", ngImport: i0, type: SelectWidget, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.7", type: SelectWidget, selector: "sf-select", usesInheritance: true, ngImport: i0, template: `<sf-item-wrap
    [id]="id"
    [schema]="schema"
    [ui]="ui"
    [showError]="showError"
    [error]="error"
    [showTitle]="schema.title"
  >
    <nz-select
      [nzId]="id"
      [nzDisabled]="disabled"
      [(ngModel)]="_value"
      (ngModelChange)="change($event)"
      [nzSize]="ui.size!"
      [nzPlaceHolder]="ui.placeholder!"
      [nzNotFoundContent]="ui.notFoundContent"
      [nzDropdownClassName]="ui.dropdownClassName!"
      [nzAllowClear]="ui.allowClear"
      [nzDropdownStyle]="ui.dropdownStyle!"
      [nzCustomTemplate]="ui.customTemplate!"
      [nzSuffixIcon]="ui.suffixIcon!"
      [nzRemoveIcon]="ui.removeIcon!"
      [nzClearIcon]="ui.clearIcon!"
      [nzMenuItemSelectedIcon]="ui.menuItemSelectedIcon!"
      [nzMaxTagPlaceholder]="ui.maxTagPlaceholder!"
      [nzDropdownRender]="ui.dropdownRender!"
      [nzAutoClearSearchValue]="i.autoClearSearchValue"
      [nzBorderless]="i.borderless"
      [nzAutoFocus]="i.autoFocus"
      [nzDropdownMatchSelectWidth]="i.dropdownMatchSelectWidth!"
      [nzServerSearch]="i.serverSearch"
      [nzMaxMultipleCount]="i.maxMultipleCount!"
      [nzMode]="i.mode!"
      [nzShowSearch]="i.showSearch"
      [nzShowArrow]="i.showArrow!"
      [nzTokenSeparators]="i.tokenSeparators!"
      [nzMaxTagCount]="i.maxTagCount!"
      [compareWith]="i.compareWith!"
      [nzOptionHeightPx]="i.optionHeightPx!"
      [nzOptionOverflowSize]="i.optionOverflowSize!"
      (nzOpenChange)="openChange($event)"
      (nzOnSearch)="onSearch($event)"
      (nzScrollToBottom)="scrollToBottom()"
    >
      @if (!loading && !hasGroup) {
        @for (o of data; track $index) {
          <nz-option [nzLabel]="o.label" [nzValue]="o.value" [nzHide]="o.hide" [nzDisabled]="o.disabled" />
        }
      }
      @if (!loading && hasGroup) {
        @for (i of data; track $index) {
          <nz-option-group [nzLabel]="i.label">
            @for (o of i.children; track $index) {
              <nz-option [nzLabel]="o.label" [nzValue]="o.value" [nzDisabled]="o.disabled" [nzHide]="o.hide" />
            }
          </nz-option-group>
        }
      }
      @if (loading) {
        <nz-option nzDisabled nzCustomContent>
          <i nz-icon nzType="loading"></i>
          {{ ui.searchLoadingText }}
        </nz-option>
      }
    </nz-select>
  </sf-item-wrap>`, isInline: true, dependencies: [{ kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i2.ɵNzTransitionPatchDirective, selector: "[nz-button], nz-button-group, [nz-icon], [nz-menu-item], [nz-submenu], nz-select-top-control, nz-select-placeholder, nz-input-group", inputs: ["hidden"] }, { kind: "directive", type: i3.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "component", type: i4.NzOptionComponent, selector: "nz-option", inputs: ["nzTitle", "nzLabel", "nzValue", "nzKey", "nzDisabled", "nzHide", "nzCustomContent"], exportAs: ["nzOption"] }, { kind: "component", type: i4.NzSelectComponent, selector: "nz-select", inputs: ["nzId", "nzSize", "nzStatus", "nzOptionHeightPx", "nzOptionOverflowSize", "nzDropdownClassName", "nzDropdownMatchSelectWidth", "nzDropdownStyle", "nzNotFoundContent", "nzPlaceHolder", "nzPlacement", "nzMaxTagCount", "nzDropdownRender", "nzCustomTemplate", "nzSuffixIcon", "nzClearIcon", "nzRemoveIcon", "nzMenuItemSelectedIcon", "nzTokenSeparators", "nzMaxTagPlaceholder", "nzMaxMultipleCount", "nzMode", "nzFilterOption", "compareWith", "nzAllowClear", "nzBorderless", "nzShowSearch", "nzLoading", "nzAutoFocus", "nzAutoClearSearchValue", "nzServerSearch", "nzDisabled", "nzOpen", "nzSelectOnTab", "nzBackdrop", "nzOptions", "nzShowArrow"], outputs: ["nzOnSearch", "nzScrollToBottom", "nzOpenChange", "nzBlur", "nzFocus"], exportAs: ["nzSelect"] }, { kind: "component", type: i4.NzOptionGroupComponent, selector: "nz-option-group", inputs: ["nzLabel"], exportAs: ["nzOptionGroup"] }, { kind: "component", type: i5.SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.7", ngImport: i0, type: SelectWidget, decorators: [{
            type: Component,
            args: [{
                    selector: 'sf-select',
                    template: `<sf-item-wrap
    [id]="id"
    [schema]="schema"
    [ui]="ui"
    [showError]="showError"
    [error]="error"
    [showTitle]="schema.title"
  >
    <nz-select
      [nzId]="id"
      [nzDisabled]="disabled"
      [(ngModel)]="_value"
      (ngModelChange)="change($event)"
      [nzSize]="ui.size!"
      [nzPlaceHolder]="ui.placeholder!"
      [nzNotFoundContent]="ui.notFoundContent"
      [nzDropdownClassName]="ui.dropdownClassName!"
      [nzAllowClear]="ui.allowClear"
      [nzDropdownStyle]="ui.dropdownStyle!"
      [nzCustomTemplate]="ui.customTemplate!"
      [nzSuffixIcon]="ui.suffixIcon!"
      [nzRemoveIcon]="ui.removeIcon!"
      [nzClearIcon]="ui.clearIcon!"
      [nzMenuItemSelectedIcon]="ui.menuItemSelectedIcon!"
      [nzMaxTagPlaceholder]="ui.maxTagPlaceholder!"
      [nzDropdownRender]="ui.dropdownRender!"
      [nzAutoClearSearchValue]="i.autoClearSearchValue"
      [nzBorderless]="i.borderless"
      [nzAutoFocus]="i.autoFocus"
      [nzDropdownMatchSelectWidth]="i.dropdownMatchSelectWidth!"
      [nzServerSearch]="i.serverSearch"
      [nzMaxMultipleCount]="i.maxMultipleCount!"
      [nzMode]="i.mode!"
      [nzShowSearch]="i.showSearch"
      [nzShowArrow]="i.showArrow!"
      [nzTokenSeparators]="i.tokenSeparators!"
      [nzMaxTagCount]="i.maxTagCount!"
      [compareWith]="i.compareWith!"
      [nzOptionHeightPx]="i.optionHeightPx!"
      [nzOptionOverflowSize]="i.optionOverflowSize!"
      (nzOpenChange)="openChange($event)"
      (nzOnSearch)="onSearch($event)"
      (nzScrollToBottom)="scrollToBottom()"
    >
      @if (!loading && !hasGroup) {
        @for (o of data; track $index) {
          <nz-option [nzLabel]="o.label" [nzValue]="o.value" [nzHide]="o.hide" [nzDisabled]="o.disabled" />
        }
      }
      @if (!loading && hasGroup) {
        @for (i of data; track $index) {
          <nz-option-group [nzLabel]="i.label">
            @for (o of i.children; track $index) {
              <nz-option [nzLabel]="o.label" [nzValue]="o.value" [nzDisabled]="o.disabled" [nzHide]="o.hide" />
            }
          </nz-option-group>
        }
      }
      @if (loading) {
        <nz-option nzDisabled nzCustomContent>
          <i nz-icon nzType="loading"></i>
          {{ ui.searchLoadingText }}
        </nz-option>
      }
    </nz-select>
  </sf-item-wrap>`,
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm0vc3JjL3dpZGdldHMvc2VsZWN0L3NlbGVjdC53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVyRyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFLakQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDOUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7Ozs7OztBQTBFL0MsTUFBTSxPQUFPLFlBQWEsU0FBUSxlQUFxQztJQXZFdkU7O1FBd0VVLFlBQU8sR0FBRyxJQUFJLE9BQU8sRUFBVSxDQUFDO1FBRXhDLFNBQUksR0FBbUIsRUFBRSxDQUFDO1FBRTFCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsWUFBTyxHQUFHLEtBQUssQ0FBQztLQXVHakI7SUFyR1MsVUFBVSxDQUFDLElBQW9CO1FBQ3JDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFRCxRQUFRO1FBQ04sTUFBTSxFQUNKLG9CQUFvQixFQUNwQixVQUFVLEVBQ1YsU0FBUyxFQUNULHdCQUF3QixFQUN4QixZQUFZLEVBQ1osZ0JBQWdCLEVBQ2hCLElBQUksRUFDSixVQUFVLEVBQ1Ys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QUFDO0lBQ0gsQ0FBQztJQUVELFFBQVEsQ0FBQyxLQUFhO1FBQ3BCLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQixDQUFDO0lBQ0gsQ0FBQzs4R0E1R1UsWUFBWTtrR0FBWixZQUFZLHdFQXJFYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBaUVNOzsyRkFJTCxZQUFZO2tCQXZFeEIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkFpRU07b0JBQ2hCLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUN0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCwgY2F0Y2hFcnJvciwgZGVib3VuY2VUaW1lLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgc3dpdGNoTWFwLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQXJyYXlTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3V0aWwvYXJyYXknO1xuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5pbXBvcnQgeyBTRlZhbHVlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlJztcbmltcG9ydCB7IFNGU2NoZW1hRW51bSB9IGZyb20gJy4uLy4uL3NjaGVtYSc7XG5pbXBvcnQgeyBnZXREYXRhLCB0b0Jvb2wgfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgeyBDb250cm9sVUlXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuaW1wb3J0IHsgU0ZTZWxlY3RXaWRnZXRTY2hlbWEgfSBmcm9tICcuL3NjaGVtYSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLXNlbGVjdCcsXG4gIHRlbXBsYXRlOiBgPHNmLWl0ZW0td3JhcFxuICAgIFtpZF09XCJpZFwiXG4gICAgW3NjaGVtYV09XCJzY2hlbWFcIlxuICAgIFt1aV09XCJ1aVwiXG4gICAgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIlxuICAgIFtlcnJvcl09XCJlcnJvclwiXG4gICAgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIlxuICA+XG4gICAgPG56LXNlbGVjdFxuICAgICAgW256SWRdPVwiaWRcIlxuICAgICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgWyhuZ01vZGVsKV09XCJfdmFsdWVcIlxuICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiY2hhbmdlKCRldmVudClcIlxuICAgICAgW256U2l6ZV09XCJ1aS5zaXplIVwiXG4gICAgICBbbnpQbGFjZUhvbGRlcl09XCJ1aS5wbGFjZWhvbGRlciFcIlxuICAgICAgW256Tm90Rm91bmRDb250ZW50XT1cInVpLm5vdEZvdW5kQ29udGVudFwiXG4gICAgICBbbnpEcm9wZG93bkNsYXNzTmFtZV09XCJ1aS5kcm9wZG93bkNsYXNzTmFtZSFcIlxuICAgICAgW256QWxsb3dDbGVhcl09XCJ1aS5hbGxvd0NsZWFyXCJcbiAgICAgIFtuekRyb3Bkb3duU3R5bGVdPVwidWkuZHJvcGRvd25TdHlsZSFcIlxuICAgICAgW256Q3VzdG9tVGVtcGxhdGVdPVwidWkuY3VzdG9tVGVtcGxhdGUhXCJcbiAgICAgIFtuelN1ZmZpeEljb25dPVwidWkuc3VmZml4SWNvbiFcIlxuICAgICAgW256UmVtb3ZlSWNvbl09XCJ1aS5yZW1vdmVJY29uIVwiXG4gICAgICBbbnpDbGVhckljb25dPVwidWkuY2xlYXJJY29uIVwiXG4gICAgICBbbnpNZW51SXRlbVNlbGVjdGVkSWNvbl09XCJ1aS5tZW51SXRlbVNlbGVjdGVkSWNvbiFcIlxuICAgICAgW256TWF4VGFnUGxhY2Vob2xkZXJdPVwidWkubWF4VGFnUGxhY2Vob2xkZXIhXCJcbiAgICAgIFtuekRyb3Bkb3duUmVuZGVyXT1cInVpLmRyb3Bkb3duUmVuZGVyIVwiXG4gICAgICBbbnpBdXRvQ2xlYXJTZWFyY2hWYWx1ZV09XCJpLmF1dG9DbGVhclNlYXJjaFZhbHVlXCJcbiAgICAgIFtuekJvcmRlcmxlc3NdPVwiaS5ib3JkZXJsZXNzXCJcbiAgICAgIFtuekF1dG9Gb2N1c109XCJpLmF1dG9Gb2N1c1wiXG4gICAgICBbbnpEcm9wZG93bk1hdGNoU2VsZWN0V2lkdGhdPVwiaS5kcm9wZG93bk1hdGNoU2VsZWN0V2lkdGghXCJcbiAgICAgIFtuelNlcnZlclNlYXJjaF09XCJpLnNlcnZlclNlYXJjaFwiXG4gICAgICBbbnpNYXhNdWx0aXBsZUNvdW50XT1cImkubWF4TXVsdGlwbGVDb3VudCFcIlxuICAgICAgW256TW9kZV09XCJpLm1vZGUhXCJcbiAgICAgIFtuelNob3dTZWFyY2hdPVwiaS5zaG93U2VhcmNoXCJcbiAgICAgIFtuelNob3dBcnJvd109XCJpLnNob3dBcnJvdyFcIlxuICAgICAgW256VG9rZW5TZXBhcmF0b3JzXT1cImkudG9rZW5TZXBhcmF0b3JzIVwiXG4gICAgICBbbnpNYXhUYWdDb3VudF09XCJpLm1heFRhZ0NvdW50IVwiXG4gICAgICBbY29tcGFyZVdpdGhdPVwiaS5jb21wYXJlV2l0aCFcIlxuICAgICAgW256T3B0aW9uSGVpZ2h0UHhdPVwiaS5vcHRpb25IZWlnaHRQeCFcIlxuICAgICAgW256T3B0aW9uT3ZlcmZsb3dTaXplXT1cImkub3B0aW9uT3ZlcmZsb3dTaXplIVwiXG4gICAgICAobnpPcGVuQ2hhbmdlKT1cIm9wZW5DaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAobnpPblNlYXJjaCk9XCJvblNlYXJjaCgkZXZlbnQpXCJcbiAgICAgIChuelNjcm9sbFRvQm90dG9tKT1cInNjcm9sbFRvQm90dG9tKClcIlxuICAgID5cbiAgICAgIEBpZiAoIWxvYWRpbmcgJiYgIWhhc0dyb3VwKSB7XG4gICAgICAgIEBmb3IgKG8gb2YgZGF0YTsgdHJhY2sgJGluZGV4KSB7XG4gICAgICAgICAgPG56LW9wdGlvbiBbbnpMYWJlbF09XCJvLmxhYmVsXCIgW256VmFsdWVdPVwiby52YWx1ZVwiIFtuekhpZGVdPVwiby5oaWRlXCIgW256RGlzYWJsZWRdPVwiby5kaXNhYmxlZFwiIC8+XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEBpZiAoIWxvYWRpbmcgJiYgaGFzR3JvdXApIHtcbiAgICAgICAgQGZvciAoaSBvZiBkYXRhOyB0cmFjayAkaW5kZXgpIHtcbiAgICAgICAgICA8bnotb3B0aW9uLWdyb3VwIFtuekxhYmVsXT1cImkubGFiZWxcIj5cbiAgICAgICAgICAgIEBmb3IgKG8gb2YgaS5jaGlsZHJlbjsgdHJhY2sgJGluZGV4KSB7XG4gICAgICAgICAgICAgIDxuei1vcHRpb24gW256TGFiZWxdPVwiby5sYWJlbFwiIFtuelZhbHVlXT1cIm8udmFsdWVcIiBbbnpEaXNhYmxlZF09XCJvLmRpc2FibGVkXCIgW256SGlkZV09XCJvLmhpZGVcIiAvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvbnotb3B0aW9uLWdyb3VwPlxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBAaWYgKGxvYWRpbmcpIHtcbiAgICAgICAgPG56LW9wdGlvbiBuekRpc2FibGVkIG56Q3VzdG9tQ29udGVudD5cbiAgICAgICAgICA8aSBuei1pY29uIG56VHlwZT1cImxvYWRpbmdcIj48L2k+XG4gICAgICAgICAge3sgdWkuc2VhcmNoTG9hZGluZ1RleHQgfX1cbiAgICAgICAgPC9uei1vcHRpb24+XG4gICAgICB9XG4gICAgPC9uei1zZWxlY3Q+XG4gIDwvc2YtaXRlbS13cmFwPmAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdFdpZGdldCBleHRlbmRzIENvbnRyb2xVSVdpZGdldDxTRlNlbGVjdFdpZGdldFNjaGVtYT4gaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIHNlYXJjaCQgPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XG4gIGkhOiBTRlNlbGVjdFdpZGdldFNjaGVtYTtcbiAgZGF0YTogU0ZTY2hlbWFFbnVtW10gPSBbXTtcbiAgX3ZhbHVlOiBOelNhZmVBbnk7XG4gIGhhc0dyb3VwID0gZmFsc2U7XG4gIGxvYWRpbmcgPSBmYWxzZTtcblxuICBwcml2YXRlIGNoZWNrR3JvdXAobGlzdDogU0ZTY2hlbWFFbnVtW10pOiB2b2lkIHtcbiAgICB0aGlzLmhhc0dyb3VwID0gKGxpc3QgfHwgW10pLmZpbHRlcih3ID0+IHcuZ3JvdXAgPT09IHRydWUpLmxlbmd0aCA+IDA7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCB7XG4gICAgICBhdXRvQ2xlYXJTZWFyY2hWYWx1ZSxcbiAgICAgIGJvcmRlcmxlc3MsXG4gICAgICBhdXRvRm9jdXMsXG4gICAgICBkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGgsXG4gICAgICBzZXJ2ZXJTZWFyY2gsXG4gICAgICBtYXhNdWx0aXBsZUNvdW50LFxuICAgICAgbW9kZSxcbiAgICAgIHNob3dTZWFyY2gsXG4gICAgICB0b2tlblNlcGFyYXRvcnMsXG4gICAgICBtYXhUYWdDb3VudCxcbiAgICAgIGNvbXBhcmVXaXRoLFxuICAgICAgb3B0aW9uSGVpZ2h0UHgsXG4gICAgICBvcHRpb25PdmVyZmxvd1NpemUsXG4gICAgICBzaG93QXJyb3dcbiAgICB9ID0gdGhpcy51aTtcbiAgICB0aGlzLmkgPSB7XG4gICAgICBhdXRvQ2xlYXJTZWFyY2hWYWx1ZTogdG9Cb29sKGF1dG9DbGVhclNlYXJjaFZhbHVlLCB0cnVlKSxcbiAgICAgIGJvcmRlcmxlc3M6IHRvQm9vbChib3JkZXJsZXNzLCBmYWxzZSksXG4gICAgICBhdXRvRm9jdXM6IHRvQm9vbChhdXRvRm9jdXMsIGZhbHNlKSxcbiAgICAgIGRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aDogdG9Cb29sKGRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aCwgdHJ1ZSksXG4gICAgICBzZXJ2ZXJTZWFyY2g6IHRvQm9vbChzZXJ2ZXJTZWFyY2gsIGZhbHNlKSxcbiAgICAgIG1heE11bHRpcGxlQ291bnQ6IG1heE11bHRpcGxlQ291bnQgfHwgSW5maW5pdHksXG4gICAgICBtb2RlOiBtb2RlIHx8ICdkZWZhdWx0JyxcbiAgICAgIHNob3dTZWFyY2g6IHRvQm9vbChzaG93U2VhcmNoLCB0cnVlKSxcbiAgICAgIHRva2VuU2VwYXJhdG9yczogdG9rZW5TZXBhcmF0b3JzIHx8IFtdLFxuICAgICAgbWF4VGFnQ291bnQ6IG1heFRhZ0NvdW50IHx8IEluZmluaXR5LFxuICAgICAgb3B0aW9uSGVpZ2h0UHg6IG9wdGlvbkhlaWdodFB4IHx8IDMyLFxuICAgICAgb3B0aW9uT3ZlcmZsb3dTaXplOiBvcHRpb25PdmVyZmxvd1NpemUgfHwgOCxcbiAgICAgIHNob3dBcnJvdzogdG9Cb29sKHNob3dBcnJvdywgdHJ1ZSksXG4gICAgICBjb21wYXJlV2l0aDogY29tcGFyZVdpdGggfHwgKChvMTogTnpTYWZlQW55LCBvMjogTnpTYWZlQW55KSA9PiBvMSA9PT0gbzIpXG4gICAgfTtcblxuICAgIGNvbnN0IG9uU2VhcmNoID0gdGhpcy51aS5vblNlYXJjaCE7XG4gICAgaWYgKG9uU2VhcmNoKSB7XG4gICAgICB0aGlzLnNlYXJjaCRcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgdGFrZVVudGlsKHRoaXMuc2ZJdGVtQ29tcCEuZGVzdHJveSQpLFxuICAgICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICAgICAgZGVib3VuY2VUaW1lKHRoaXMudWkuc2VhcmNoRGVib3VuY2VUaW1lIHx8IDMwMCksXG4gICAgICAgICAgc3dpdGNoTWFwKHRleHQgPT4gb25TZWFyY2godGV4dCkpLFxuICAgICAgICAgIGNhdGNoRXJyb3IoKCkgPT4gW10pXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZShsaXN0ID0+IHtcbiAgICAgICAgICB0aGlzLmRhdGEgPSBsaXN0O1xuICAgICAgICAgIHRoaXMuY2hlY2tHcm91cChsaXN0KTtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVzZXQodmFsdWU6IFNGVmFsdWUpOiB2b2lkIHtcbiAgICBjb25zdCBvblNlYXJjaCA9IHRoaXMudWkub25TZWFyY2ghO1xuICAgIGdldERhdGEodGhpcy5zY2hlbWEsIHRoaXMudWksIHZhbHVlKS5zdWJzY3JpYmUobGlzdCA9PiB7XG4gICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgICAgaWYgKG9uU2VhcmNoID09IG51bGwpIHRoaXMuZGF0YSA9IGxpc3Q7XG4gICAgICB0aGlzLmNoZWNrR3JvdXAobGlzdCk7XG4gICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgICBpZiAodmFsdWUgJiYgb25TZWFyY2ggIT0gbnVsbCkgdGhpcy5zZWFyY2gkLm5leHQodmFsdWUpO1xuICB9XG5cbiAgY2hhbmdlKHZhbHVlczogU0ZWYWx1ZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLnVpLmNoYW5nZSkge1xuICAgICAgdGhpcy51aS5jaGFuZ2UodmFsdWVzLCB0aGlzLmdldE9yZ0RhdGEodmFsdWVzKSk7XG4gICAgfVxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWVzID09IG51bGwgPyB0aGlzLnVpLmNsZWFyVmFsdWUgOiB2YWx1ZXMpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRPcmdEYXRhKHZhbHVlczogU0ZWYWx1ZSk6IFNGU2NoZW1hRW51bSB8IFNGU2NoZW1hRW51bVtdIHtcbiAgICBjb25zdCBzcnYgPSB0aGlzLmluamVjdG9yLmdldChBcnJheVNlcnZpY2UpO1xuICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZXMpKSB7XG4gICAgICByZXR1cm4gc3J2LmZpbmRUcmVlKHRoaXMuZGF0YSwgKGl0ZW06IFNGU2NoZW1hRW51bSkgPT4gaXRlbS52YWx1ZSA9PT0gdmFsdWVzKSE7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZXMubWFwKHZhbHVlID0+IHNydi5maW5kVHJlZSh0aGlzLmRhdGEsIChpdGVtOiBTRlNjaGVtYUVudW0pID0+IGl0ZW0udmFsdWUgPT09IHZhbHVlKSk7XG4gIH1cblxuICBvcGVuQ2hhbmdlKHN0YXR1czogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICh0aGlzLnVpLm9wZW5DaGFuZ2UpIHtcbiAgICAgIHRoaXMudWkub3BlbkNoYW5nZShzdGF0dXMpO1xuICAgIH1cbiAgfVxuXG4gIHNjcm9sbFRvQm90dG9tKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnVpLnNjcm9sbFRvQm90dG9tKSB7XG4gICAgICB0aGlzLnVpLnNjcm9sbFRvQm90dG9tKCk7XG4gICAgfVxuICB9XG5cbiAgb25TZWFyY2godmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLnVpLm9uU2VhcmNoKSB7XG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5zZWFyY2gkLm5leHQodmFsdWUpO1xuICAgIH1cbiAgfVxufVxuIl19