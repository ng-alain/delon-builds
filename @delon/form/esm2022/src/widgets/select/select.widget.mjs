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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm0vc3JjL3dpZGdldHMvc2VsZWN0L3NlbGVjdC53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVyRyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFLakQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDOUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7Ozs7OztBQTBFL0MsTUFBTSxPQUFPLFlBQWEsU0FBUSxlQUFxQztJQXZFdkU7O1FBd0VVLFlBQU8sR0FBRyxJQUFJLE9BQU8sRUFBVSxDQUFDO1FBRXhDLFNBQUksR0FBbUIsRUFBRSxDQUFDO1FBRTFCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsWUFBTyxHQUFHLEtBQUssQ0FBQztLQXVHakI7SUFyR1MsVUFBVSxDQUFDLElBQW9CO1FBQ3JDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFRCxRQUFRO1FBQ04sTUFBTSxFQUNKLG9CQUFvQixFQUNwQixVQUFVLEVBQ1YsU0FBUyxFQUNULHdCQUF3QixFQUN4QixZQUFZLEVBQ1osZ0JBQWdCLEVBQ2hCLElBQUksRUFDSixVQUFVLEVBQ1Ys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QUFRLENBQUMsS0FBYTtRQUNwQixJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0IsQ0FBQztJQUNILENBQUM7OEdBNUdVLFlBQVk7a0dBQVosWUFBWSx3RUFyRWI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQWlFTTs7MkZBSUwsWUFBWTtrQkF2RXhCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBaUVNO29CQUNoQixtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDdEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QsIGNhdGNoRXJyb3IsIGRlYm91bmNlVGltZSwgZGlzdGluY3RVbnRpbENoYW5nZWQsIHN3aXRjaE1hcCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEFycmF5U2VydmljZSB9IGZyb20gJ0BkZWxvbi91dGlsL2FycmF5JztcbmltcG9ydCB0eXBlIHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuaW1wb3J0IHsgU0ZWYWx1ZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBTRlNjaGVtYUVudW0gfSBmcm9tICcuLi8uLi9zY2hlbWEnO1xuaW1wb3J0IHsgZ2V0RGF0YSwgdG9Cb29sIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHsgQ29udHJvbFVJV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcbmltcG9ydCB7IFNGU2VsZWN0V2lkZ2V0U2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1zZWxlY3QnLFxuICB0ZW1wbGF0ZTogYDxzZi1pdGVtLXdyYXBcbiAgICBbaWRdPVwiaWRcIlxuICAgIFtzY2hlbWFdPVwic2NoZW1hXCJcbiAgICBbdWldPVwidWlcIlxuICAgIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCJcbiAgICBbZXJyb3JdPVwiZXJyb3JcIlxuICAgIFtzaG93VGl0bGVdPVwic2NoZW1hLnRpdGxlXCJcbiAgPlxuICAgIDxuei1zZWxlY3RcbiAgICAgIFtueklkXT1cImlkXCJcbiAgICAgIFtuekRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgIFsobmdNb2RlbCldPVwiX3ZhbHVlXCJcbiAgICAgIChuZ01vZGVsQ2hhbmdlKT1cImNoYW5nZSgkZXZlbnQpXCJcbiAgICAgIFtuelNpemVdPVwidWkuc2l6ZSFcIlxuICAgICAgW256UGxhY2VIb2xkZXJdPVwidWkucGxhY2Vob2xkZXIhXCJcbiAgICAgIFtuek5vdEZvdW5kQ29udGVudF09XCJ1aS5ub3RGb3VuZENvbnRlbnRcIlxuICAgICAgW256RHJvcGRvd25DbGFzc05hbWVdPVwidWkuZHJvcGRvd25DbGFzc05hbWUhXCJcbiAgICAgIFtuekFsbG93Q2xlYXJdPVwidWkuYWxsb3dDbGVhclwiXG4gICAgICBbbnpEcm9wZG93blN0eWxlXT1cInVpLmRyb3Bkb3duU3R5bGUhXCJcbiAgICAgIFtuekN1c3RvbVRlbXBsYXRlXT1cInVpLmN1c3RvbVRlbXBsYXRlIVwiXG4gICAgICBbbnpTdWZmaXhJY29uXT1cInVpLnN1ZmZpeEljb24hXCJcbiAgICAgIFtuelJlbW92ZUljb25dPVwidWkucmVtb3ZlSWNvbiFcIlxuICAgICAgW256Q2xlYXJJY29uXT1cInVpLmNsZWFySWNvbiFcIlxuICAgICAgW256TWVudUl0ZW1TZWxlY3RlZEljb25dPVwidWkubWVudUl0ZW1TZWxlY3RlZEljb24hXCJcbiAgICAgIFtuek1heFRhZ1BsYWNlaG9sZGVyXT1cInVpLm1heFRhZ1BsYWNlaG9sZGVyIVwiXG4gICAgICBbbnpEcm9wZG93blJlbmRlcl09XCJ1aS5kcm9wZG93blJlbmRlciFcIlxuICAgICAgW256QXV0b0NsZWFyU2VhcmNoVmFsdWVdPVwiaS5hdXRvQ2xlYXJTZWFyY2hWYWx1ZVwiXG4gICAgICBbbnpCb3JkZXJsZXNzXT1cImkuYm9yZGVybGVzc1wiXG4gICAgICBbbnpBdXRvRm9jdXNdPVwiaS5hdXRvRm9jdXNcIlxuICAgICAgW256RHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoXT1cImkuZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoIVwiXG4gICAgICBbbnpTZXJ2ZXJTZWFyY2hdPVwiaS5zZXJ2ZXJTZWFyY2hcIlxuICAgICAgW256TWF4TXVsdGlwbGVDb3VudF09XCJpLm1heE11bHRpcGxlQ291bnQhXCJcbiAgICAgIFtuek1vZGVdPVwiaS5tb2RlIVwiXG4gICAgICBbbnpTaG93U2VhcmNoXT1cImkuc2hvd1NlYXJjaFwiXG4gICAgICBbbnpTaG93QXJyb3ddPVwiaS5zaG93QXJyb3chXCJcbiAgICAgIFtuelRva2VuU2VwYXJhdG9yc109XCJpLnRva2VuU2VwYXJhdG9ycyFcIlxuICAgICAgW256TWF4VGFnQ291bnRdPVwiaS5tYXhUYWdDb3VudCFcIlxuICAgICAgW2NvbXBhcmVXaXRoXT1cImkuY29tcGFyZVdpdGghXCJcbiAgICAgIFtuek9wdGlvbkhlaWdodFB4XT1cImkub3B0aW9uSGVpZ2h0UHghXCJcbiAgICAgIFtuek9wdGlvbk92ZXJmbG93U2l6ZV09XCJpLm9wdGlvbk92ZXJmbG93U2l6ZSFcIlxuICAgICAgKG56T3BlbkNoYW5nZSk9XCJvcGVuQ2hhbmdlKCRldmVudClcIlxuICAgICAgKG56T25TZWFyY2gpPVwib25TZWFyY2goJGV2ZW50KVwiXG4gICAgICAobnpTY3JvbGxUb0JvdHRvbSk9XCJzY3JvbGxUb0JvdHRvbSgpXCJcbiAgICA+XG4gICAgICBAaWYgKCFsb2FkaW5nICYmICFoYXNHcm91cCkge1xuICAgICAgICBAZm9yIChvIG9mIGRhdGE7IHRyYWNrICRpbmRleCkge1xuICAgICAgICAgIDxuei1vcHRpb24gW256TGFiZWxdPVwiby5sYWJlbFwiIFtuelZhbHVlXT1cIm8udmFsdWVcIiBbbnpIaWRlXT1cIm8uaGlkZVwiIFtuekRpc2FibGVkXT1cIm8uZGlzYWJsZWRcIiAvPlxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBAaWYgKCFsb2FkaW5nICYmIGhhc0dyb3VwKSB7XG4gICAgICAgIEBmb3IgKGkgb2YgZGF0YTsgdHJhY2sgJGluZGV4KSB7XG4gICAgICAgICAgPG56LW9wdGlvbi1ncm91cCBbbnpMYWJlbF09XCJpLmxhYmVsXCI+XG4gICAgICAgICAgICBAZm9yIChvIG9mIGkuY2hpbGRyZW47IHRyYWNrICRpbmRleCkge1xuICAgICAgICAgICAgICA8bnotb3B0aW9uIFtuekxhYmVsXT1cIm8ubGFiZWxcIiBbbnpWYWx1ZV09XCJvLnZhbHVlXCIgW256RGlzYWJsZWRdPVwiby5kaXNhYmxlZFwiIFtuekhpZGVdPVwiby5oaWRlXCIgLz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L256LW9wdGlvbi1ncm91cD5cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgQGlmIChsb2FkaW5nKSB7XG4gICAgICAgIDxuei1vcHRpb24gbnpEaXNhYmxlZCBuekN1c3RvbUNvbnRlbnQ+XG4gICAgICAgICAgPGkgbnotaWNvbiBuelR5cGU9XCJsb2FkaW5nXCI+PC9pPlxuICAgICAgICAgIHt7IHVpLnNlYXJjaExvYWRpbmdUZXh0IH19XG4gICAgICAgIDwvbnotb3B0aW9uPlxuICAgICAgfVxuICAgIDwvbnotc2VsZWN0PlxuICA8L3NmLWl0ZW0td3JhcD5gLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RXaWRnZXQgZXh0ZW5kcyBDb250cm9sVUlXaWRnZXQ8U0ZTZWxlY3RXaWRnZXRTY2hlbWE+IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBzZWFyY2gkID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xuICBpITogU0ZTZWxlY3RXaWRnZXRTY2hlbWE7XG4gIGRhdGE6IFNGU2NoZW1hRW51bVtdID0gW107XG4gIF92YWx1ZTogTnpTYWZlQW55O1xuICBoYXNHcm91cCA9IGZhbHNlO1xuICBsb2FkaW5nID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBjaGVja0dyb3VwKGxpc3Q6IFNGU2NoZW1hRW51bVtdKTogdm9pZCB7XG4gICAgdGhpcy5oYXNHcm91cCA9IChsaXN0IHx8IFtdKS5maWx0ZXIodyA9PiB3Lmdyb3VwID09PSB0cnVlKS5sZW5ndGggPiAwO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3Qge1xuICAgICAgYXV0b0NsZWFyU2VhcmNoVmFsdWUsXG4gICAgICBib3JkZXJsZXNzLFxuICAgICAgYXV0b0ZvY3VzLFxuICAgICAgZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoLFxuICAgICAgc2VydmVyU2VhcmNoLFxuICAgICAgbWF4TXVsdGlwbGVDb3VudCxcbiAgICAgIG1vZGUsXG4gICAgICBzaG93U2VhcmNoLFxuICAgICAgdG9rZW5TZXBhcmF0b3JzLFxuICAgICAgbWF4VGFnQ291bnQsXG4gICAgICBjb21wYXJlV2l0aCxcbiAgICAgIG9wdGlvbkhlaWdodFB4LFxuICAgICAgb3B0aW9uT3ZlcmZsb3dTaXplLFxuICAgICAgc2hvd0Fycm93XG4gICAgfSA9IHRoaXMudWk7XG4gICAgdGhpcy5pID0ge1xuICAgICAgYXV0b0NsZWFyU2VhcmNoVmFsdWU6IHRvQm9vbChhdXRvQ2xlYXJTZWFyY2hWYWx1ZSwgdHJ1ZSksXG4gICAgICBib3JkZXJsZXNzOiB0b0Jvb2woYm9yZGVybGVzcywgZmFsc2UpLFxuICAgICAgYXV0b0ZvY3VzOiB0b0Jvb2woYXV0b0ZvY3VzLCBmYWxzZSksXG4gICAgICBkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGg6IHRvQm9vbChkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGgsIHRydWUpLFxuICAgICAgc2VydmVyU2VhcmNoOiB0b0Jvb2woc2VydmVyU2VhcmNoLCBmYWxzZSksXG4gICAgICBtYXhNdWx0aXBsZUNvdW50OiBtYXhNdWx0aXBsZUNvdW50IHx8IEluZmluaXR5LFxuICAgICAgbW9kZTogbW9kZSB8fCAnZGVmYXVsdCcsXG4gICAgICBzaG93U2VhcmNoOiB0b0Jvb2woc2hvd1NlYXJjaCwgdHJ1ZSksXG4gICAgICB0b2tlblNlcGFyYXRvcnM6IHRva2VuU2VwYXJhdG9ycyB8fCBbXSxcbiAgICAgIG1heFRhZ0NvdW50OiBtYXhUYWdDb3VudCB8fCBJbmZpbml0eSxcbiAgICAgIG9wdGlvbkhlaWdodFB4OiBvcHRpb25IZWlnaHRQeCB8fCAzMixcbiAgICAgIG9wdGlvbk92ZXJmbG93U2l6ZTogb3B0aW9uT3ZlcmZsb3dTaXplIHx8IDgsXG4gICAgICBzaG93QXJyb3c6IHRvQm9vbChzaG93QXJyb3csIHRydWUpLFxuICAgICAgY29tcGFyZVdpdGg6IGNvbXBhcmVXaXRoIHx8ICgobzE6IE56U2FmZUFueSwgbzI6IE56U2FmZUFueSkgPT4gbzEgPT09IG8yKVxuICAgIH07XG5cbiAgICBjb25zdCBvblNlYXJjaCA9IHRoaXMudWkub25TZWFyY2ghO1xuICAgIGlmIChvblNlYXJjaCkge1xuICAgICAgdGhpcy5zZWFyY2gkXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHRha2VVbnRpbCh0aGlzLnNmSXRlbUNvbXAhLmRlc3Ryb3kkKSxcbiAgICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgICAgIGRlYm91bmNlVGltZSh0aGlzLnVpLnNlYXJjaERlYm91bmNlVGltZSB8fCAzMDApLFxuICAgICAgICAgIHN3aXRjaE1hcCh0ZXh0ID0+IG9uU2VhcmNoKHRleHQpKSxcbiAgICAgICAgICBjYXRjaEVycm9yKCgpID0+IFtdKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUobGlzdCA9PiB7XG4gICAgICAgICAgdGhpcy5kYXRhID0gbGlzdDtcbiAgICAgICAgICB0aGlzLmNoZWNrR3JvdXAobGlzdCk7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0KHZhbHVlOiBTRlZhbHVlKTogdm9pZCB7XG4gICAgY29uc3Qgb25TZWFyY2ggPSB0aGlzLnVpLm9uU2VhcmNoITtcbiAgICBnZXREYXRhKHRoaXMuc2NoZW1hLCB0aGlzLnVpLCB2YWx1ZSkuc3Vic2NyaWJlKGxpc3QgPT4ge1xuICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICAgIGlmIChvblNlYXJjaCA9PSBudWxsKSB0aGlzLmRhdGEgPSBsaXN0O1xuICAgICAgdGhpcy5jaGVja0dyb3VwKGxpc3QpO1xuICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gICAgaWYgKHZhbHVlICYmIG9uU2VhcmNoICE9IG51bGwpIHRoaXMuc2VhcmNoJC5uZXh0KHZhbHVlKTtcbiAgfVxuXG4gIGNoYW5nZSh2YWx1ZXM6IFNGVmFsdWUpOiB2b2lkIHtcbiAgICBpZiAodGhpcy51aS5jaGFuZ2UpIHtcbiAgICAgIHRoaXMudWkuY2hhbmdlKHZhbHVlcywgdGhpcy5nZXRPcmdEYXRhKHZhbHVlcykpO1xuICAgIH1cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlcyA9PSBudWxsID8gdW5kZWZpbmVkIDogdmFsdWVzKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0T3JnRGF0YSh2YWx1ZXM6IFNGVmFsdWUpOiBTRlNjaGVtYUVudW0gfCBTRlNjaGVtYUVudW1bXSB7XG4gICAgY29uc3Qgc3J2ID0gdGhpcy5pbmplY3Rvci5nZXQoQXJyYXlTZXJ2aWNlKTtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWVzKSkge1xuICAgICAgcmV0dXJuIHNydi5maW5kVHJlZSh0aGlzLmRhdGEsIChpdGVtOiBTRlNjaGVtYUVudW0pID0+IGl0ZW0udmFsdWUgPT09IHZhbHVlcykhO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWVzLm1hcCh2YWx1ZSA9PiBzcnYuZmluZFRyZWUodGhpcy5kYXRhLCAoaXRlbTogU0ZTY2hlbWFFbnVtKSA9PiBpdGVtLnZhbHVlID09PSB2YWx1ZSkpO1xuICB9XG5cbiAgb3BlbkNoYW5nZShzdGF0dXM6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy51aS5vcGVuQ2hhbmdlKSB7XG4gICAgICB0aGlzLnVpLm9wZW5DaGFuZ2Uoc3RhdHVzKTtcbiAgICB9XG4gIH1cblxuICBzY3JvbGxUb0JvdHRvbSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy51aS5zY3JvbGxUb0JvdHRvbSkge1xuICAgICAgdGhpcy51aS5zY3JvbGxUb0JvdHRvbSgpO1xuICAgIH1cbiAgfVxuXG4gIG9uU2VhcmNoKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy51aS5vblNlYXJjaCkge1xuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2VhcmNoJC5uZXh0KHZhbHVlKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==