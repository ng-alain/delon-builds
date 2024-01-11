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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: SelectWidget, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.9", type: SelectWidget, selector: "sf-select", usesInheritance: true, ngImport: i0, template: `<sf-item-wrap
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: SelectWidget, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm0vc3JjL3dpZGdldHMvc2VsZWN0L3NlbGVjdC53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVyRyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFNakQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDOUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7Ozs7OztBQXlFL0MsTUFBTSxPQUFPLFlBQWEsU0FBUSxlQUFxQztJQXZFdkU7O1FBd0VVLFlBQU8sR0FBRyxJQUFJLE9BQU8sRUFBVSxDQUFDO1FBRXhDLFNBQUksR0FBbUIsRUFBRSxDQUFDO1FBRTFCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsWUFBTyxHQUFHLEtBQUssQ0FBQztLQXVHakI7SUFyR1MsVUFBVSxDQUFDLElBQW9CO1FBQ3JDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFRCxRQUFRO1FBQ04sTUFBTSxFQUNKLG9CQUFvQixFQUNwQixVQUFVLEVBQ1YsU0FBUyxFQUNULHdCQUF3QixFQUN4QixZQUFZLEVBQ1osZ0JBQWdCLEVBQ2hCLElBQUksRUFDSixVQUFVLEVBQ1Ys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SUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRTtZQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMxQjtJQUNILENBQUM7OEdBNUdVLFlBQVk7a0dBQVosWUFBWSx3RUFyRWI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQWlFTTs7MkZBSUwsWUFBWTtrQkF2RXhCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBaUVNO29CQUNoQixtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDdEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QsIGNhdGNoRXJyb3IsIGRlYm91bmNlVGltZSwgZGlzdGluY3RVbnRpbENoYW5nZWQsIHN3aXRjaE1hcCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEFycmF5U2VydmljZSB9IGZyb20gJ0BkZWxvbi91dGlsL2FycmF5JztcbmltcG9ydCB0eXBlIHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuaW1wb3J0IHsgU0ZTZWxlY3RXaWRnZXRTY2hlbWEgfSBmcm9tICcuL3NjaGVtYSc7XG5pbXBvcnQgeyBTRlZhbHVlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlJztcbmltcG9ydCB7IFNGU2NoZW1hRW51bSB9IGZyb20gJy4uLy4uL3NjaGVtYSc7XG5pbXBvcnQgeyBnZXREYXRhLCB0b0Jvb2wgfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgeyBDb250cm9sVUlXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1zZWxlY3QnLFxuICB0ZW1wbGF0ZTogYDxzZi1pdGVtLXdyYXBcbiAgICBbaWRdPVwiaWRcIlxuICAgIFtzY2hlbWFdPVwic2NoZW1hXCJcbiAgICBbdWldPVwidWlcIlxuICAgIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCJcbiAgICBbZXJyb3JdPVwiZXJyb3JcIlxuICAgIFtzaG93VGl0bGVdPVwic2NoZW1hLnRpdGxlXCJcbiAgPlxuICAgIDxuei1zZWxlY3RcbiAgICAgIFtueklkXT1cImlkXCJcbiAgICAgIFtuekRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgIFsobmdNb2RlbCldPVwiX3ZhbHVlXCJcbiAgICAgIChuZ01vZGVsQ2hhbmdlKT1cImNoYW5nZSgkZXZlbnQpXCJcbiAgICAgIFtuelNpemVdPVwidWkuc2l6ZSFcIlxuICAgICAgW256UGxhY2VIb2xkZXJdPVwidWkucGxhY2Vob2xkZXIhXCJcbiAgICAgIFtuek5vdEZvdW5kQ29udGVudF09XCJ1aS5ub3RGb3VuZENvbnRlbnRcIlxuICAgICAgW256RHJvcGRvd25DbGFzc05hbWVdPVwidWkuZHJvcGRvd25DbGFzc05hbWUhXCJcbiAgICAgIFtuekFsbG93Q2xlYXJdPVwidWkuYWxsb3dDbGVhclwiXG4gICAgICBbbnpEcm9wZG93blN0eWxlXT1cInVpLmRyb3Bkb3duU3R5bGUhXCJcbiAgICAgIFtuekN1c3RvbVRlbXBsYXRlXT1cInVpLmN1c3RvbVRlbXBsYXRlIVwiXG4gICAgICBbbnpTdWZmaXhJY29uXT1cInVpLnN1ZmZpeEljb24hXCJcbiAgICAgIFtuelJlbW92ZUljb25dPVwidWkucmVtb3ZlSWNvbiFcIlxuICAgICAgW256Q2xlYXJJY29uXT1cInVpLmNsZWFySWNvbiFcIlxuICAgICAgW256TWVudUl0ZW1TZWxlY3RlZEljb25dPVwidWkubWVudUl0ZW1TZWxlY3RlZEljb24hXCJcbiAgICAgIFtuek1heFRhZ1BsYWNlaG9sZGVyXT1cInVpLm1heFRhZ1BsYWNlaG9sZGVyIVwiXG4gICAgICBbbnpEcm9wZG93blJlbmRlcl09XCJ1aS5kcm9wZG93blJlbmRlciFcIlxuICAgICAgW256QXV0b0NsZWFyU2VhcmNoVmFsdWVdPVwiaS5hdXRvQ2xlYXJTZWFyY2hWYWx1ZVwiXG4gICAgICBbbnpCb3JkZXJsZXNzXT1cImkuYm9yZGVybGVzc1wiXG4gICAgICBbbnpBdXRvRm9jdXNdPVwiaS5hdXRvRm9jdXNcIlxuICAgICAgW256RHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoXT1cImkuZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoIVwiXG4gICAgICBbbnpTZXJ2ZXJTZWFyY2hdPVwiaS5zZXJ2ZXJTZWFyY2hcIlxuICAgICAgW256TWF4TXVsdGlwbGVDb3VudF09XCJpLm1heE11bHRpcGxlQ291bnQhXCJcbiAgICAgIFtuek1vZGVdPVwiaS5tb2RlIVwiXG4gICAgICBbbnpTaG93U2VhcmNoXT1cImkuc2hvd1NlYXJjaFwiXG4gICAgICBbbnpTaG93QXJyb3ddPVwiaS5zaG93QXJyb3chXCJcbiAgICAgIFtuelRva2VuU2VwYXJhdG9yc109XCJpLnRva2VuU2VwYXJhdG9ycyFcIlxuICAgICAgW256TWF4VGFnQ291bnRdPVwiaS5tYXhUYWdDb3VudCFcIlxuICAgICAgW2NvbXBhcmVXaXRoXT1cImkuY29tcGFyZVdpdGghXCJcbiAgICAgIFtuek9wdGlvbkhlaWdodFB4XT1cImkub3B0aW9uSGVpZ2h0UHghXCJcbiAgICAgIFtuek9wdGlvbk92ZXJmbG93U2l6ZV09XCJpLm9wdGlvbk92ZXJmbG93U2l6ZSFcIlxuICAgICAgKG56T3BlbkNoYW5nZSk9XCJvcGVuQ2hhbmdlKCRldmVudClcIlxuICAgICAgKG56T25TZWFyY2gpPVwib25TZWFyY2goJGV2ZW50KVwiXG4gICAgICAobnpTY3JvbGxUb0JvdHRvbSk9XCJzY3JvbGxUb0JvdHRvbSgpXCJcbiAgICA+XG4gICAgICBAaWYgKCFsb2FkaW5nICYmICFoYXNHcm91cCkge1xuICAgICAgICBAZm9yIChvIG9mIGRhdGE7IHRyYWNrICRpbmRleCkge1xuICAgICAgICAgIDxuei1vcHRpb24gW256TGFiZWxdPVwiby5sYWJlbFwiIFtuelZhbHVlXT1cIm8udmFsdWVcIiBbbnpIaWRlXT1cIm8uaGlkZVwiIFtuekRpc2FibGVkXT1cIm8uZGlzYWJsZWRcIiAvPlxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBAaWYgKCFsb2FkaW5nICYmIGhhc0dyb3VwKSB7XG4gICAgICAgIEBmb3IgKGkgb2YgZGF0YTsgdHJhY2sgJGluZGV4KSB7XG4gICAgICAgICAgPG56LW9wdGlvbi1ncm91cCBbbnpMYWJlbF09XCJpLmxhYmVsXCI+XG4gICAgICAgICAgICBAZm9yIChvIG9mIGkuY2hpbGRyZW47IHRyYWNrICRpbmRleCkge1xuICAgICAgICAgICAgICA8bnotb3B0aW9uIFtuekxhYmVsXT1cIm8ubGFiZWxcIiBbbnpWYWx1ZV09XCJvLnZhbHVlXCIgW256RGlzYWJsZWRdPVwiby5kaXNhYmxlZFwiIFtuekhpZGVdPVwiby5oaWRlXCIgLz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L256LW9wdGlvbi1ncm91cD5cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgQGlmIChsb2FkaW5nKSB7XG4gICAgICAgIDxuei1vcHRpb24gbnpEaXNhYmxlZCBuekN1c3RvbUNvbnRlbnQ+XG4gICAgICAgICAgPGkgbnotaWNvbiBuelR5cGU9XCJsb2FkaW5nXCI+PC9pPlxuICAgICAgICAgIHt7IHVpLnNlYXJjaExvYWRpbmdUZXh0IH19XG4gICAgICAgIDwvbnotb3B0aW9uPlxuICAgICAgfVxuICAgIDwvbnotc2VsZWN0PlxuICA8L3NmLWl0ZW0td3JhcD5gLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RXaWRnZXQgZXh0ZW5kcyBDb250cm9sVUlXaWRnZXQ8U0ZTZWxlY3RXaWRnZXRTY2hlbWE+IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBzZWFyY2gkID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xuICBpITogU0ZTZWxlY3RXaWRnZXRTY2hlbWE7XG4gIGRhdGE6IFNGU2NoZW1hRW51bVtdID0gW107XG4gIF92YWx1ZTogTnpTYWZlQW55O1xuICBoYXNHcm91cCA9IGZhbHNlO1xuICBsb2FkaW5nID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBjaGVja0dyb3VwKGxpc3Q6IFNGU2NoZW1hRW51bVtdKTogdm9pZCB7XG4gICAgdGhpcy5oYXNHcm91cCA9IChsaXN0IHx8IFtdKS5maWx0ZXIodyA9PiB3Lmdyb3VwID09PSB0cnVlKS5sZW5ndGggPiAwO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3Qge1xuICAgICAgYXV0b0NsZWFyU2VhcmNoVmFsdWUsXG4gICAgICBib3JkZXJsZXNzLFxuICAgICAgYXV0b0ZvY3VzLFxuICAgICAgZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoLFxuICAgICAgc2VydmVyU2VhcmNoLFxuICAgICAgbWF4TXVsdGlwbGVDb3VudCxcbiAgICAgIG1vZGUsXG4gICAgICBzaG93U2VhcmNoLFxuICAgICAgdG9rZW5TZXBhcmF0b3JzLFxuICAgICAgbWF4VGFnQ291bnQsXG4gICAgICBjb21wYXJlV2l0aCxcbiAgICAgIG9wdGlvbkhlaWdodFB4LFxuICAgICAgb3B0aW9uT3ZlcmZsb3dTaXplLFxuICAgICAgc2hvd0Fycm93XG4gICAgfSA9IHRoaXMudWk7XG4gICAgdGhpcy5pID0ge1xuICAgICAgYXV0b0NsZWFyU2VhcmNoVmFsdWU6IHRvQm9vbChhdXRvQ2xlYXJTZWFyY2hWYWx1ZSwgdHJ1ZSksXG4gICAgICBib3JkZXJsZXNzOiB0b0Jvb2woYm9yZGVybGVzcywgZmFsc2UpLFxuICAgICAgYXV0b0ZvY3VzOiB0b0Jvb2woYXV0b0ZvY3VzLCBmYWxzZSksXG4gICAgICBkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGg6IHRvQm9vbChkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGgsIHRydWUpLFxuICAgICAgc2VydmVyU2VhcmNoOiB0b0Jvb2woc2VydmVyU2VhcmNoLCBmYWxzZSksXG4gICAgICBtYXhNdWx0aXBsZUNvdW50OiBtYXhNdWx0aXBsZUNvdW50IHx8IEluZmluaXR5LFxuICAgICAgbW9kZTogbW9kZSB8fCAnZGVmYXVsdCcsXG4gICAgICBzaG93U2VhcmNoOiB0b0Jvb2woc2hvd1NlYXJjaCwgdHJ1ZSksXG4gICAgICB0b2tlblNlcGFyYXRvcnM6IHRva2VuU2VwYXJhdG9ycyB8fCBbXSxcbiAgICAgIG1heFRhZ0NvdW50OiBtYXhUYWdDb3VudCB8fCB1bmRlZmluZWQsXG4gICAgICBvcHRpb25IZWlnaHRQeDogb3B0aW9uSGVpZ2h0UHggfHwgMzIsXG4gICAgICBvcHRpb25PdmVyZmxvd1NpemU6IG9wdGlvbk92ZXJmbG93U2l6ZSB8fCA4LFxuICAgICAgc2hvd0Fycm93OiB0eXBlb2Ygc2hvd0Fycm93ICE9PSAnYm9vbGVhbicgPyB1bmRlZmluZWQgOiBzaG93QXJyb3csXG4gICAgICBjb21wYXJlV2l0aDogY29tcGFyZVdpdGggfHwgKChvMTogTnpTYWZlQW55LCBvMjogTnpTYWZlQW55KSA9PiBvMSA9PT0gbzIpXG4gICAgfTtcblxuICAgIGNvbnN0IG9uU2VhcmNoID0gdGhpcy51aS5vblNlYXJjaCE7XG4gICAgaWYgKG9uU2VhcmNoKSB7XG4gICAgICB0aGlzLnNlYXJjaCRcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgdGFrZVVudGlsKHRoaXMuc2ZJdGVtQ29tcCEuZGVzdHJveSQpLFxuICAgICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICAgICAgZGVib3VuY2VUaW1lKHRoaXMudWkuc2VhcmNoRGVib3VuY2VUaW1lIHx8IDMwMCksXG4gICAgICAgICAgc3dpdGNoTWFwKHRleHQgPT4gb25TZWFyY2godGV4dCkpLFxuICAgICAgICAgIGNhdGNoRXJyb3IoKCkgPT4gW10pXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZShsaXN0ID0+IHtcbiAgICAgICAgICB0aGlzLmRhdGEgPSBsaXN0O1xuICAgICAgICAgIHRoaXMuY2hlY2tHcm91cChsaXN0KTtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVzZXQodmFsdWU6IFNGVmFsdWUpOiB2b2lkIHtcbiAgICBjb25zdCBvblNlYXJjaCA9IHRoaXMudWkub25TZWFyY2ghO1xuICAgIGdldERhdGEodGhpcy5zY2hlbWEsIHRoaXMudWksIHZhbHVlKS5zdWJzY3JpYmUobGlzdCA9PiB7XG4gICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgICAgaWYgKG9uU2VhcmNoID09IG51bGwpIHRoaXMuZGF0YSA9IGxpc3Q7XG4gICAgICB0aGlzLmNoZWNrR3JvdXAobGlzdCk7XG4gICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgICBpZiAodmFsdWUgJiYgb25TZWFyY2ggIT0gbnVsbCkgdGhpcy5zZWFyY2gkLm5leHQodmFsdWUpO1xuICB9XG5cbiAgY2hhbmdlKHZhbHVlczogU0ZWYWx1ZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLnVpLmNoYW5nZSkge1xuICAgICAgdGhpcy51aS5jaGFuZ2UodmFsdWVzLCB0aGlzLmdldE9yZ0RhdGEodmFsdWVzKSk7XG4gICAgfVxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWVzID09IG51bGwgPyB1bmRlZmluZWQgOiB2YWx1ZXMpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRPcmdEYXRhKHZhbHVlczogU0ZWYWx1ZSk6IFNGU2NoZW1hRW51bSB8IFNGU2NoZW1hRW51bVtdIHtcbiAgICBjb25zdCBzcnYgPSB0aGlzLmluamVjdG9yLmdldChBcnJheVNlcnZpY2UpO1xuICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZXMpKSB7XG4gICAgICByZXR1cm4gc3J2LmZpbmRUcmVlKHRoaXMuZGF0YSwgKGl0ZW06IFNGU2NoZW1hRW51bSkgPT4gaXRlbS52YWx1ZSA9PT0gdmFsdWVzKSE7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZXMubWFwKHZhbHVlID0+IHNydi5maW5kVHJlZSh0aGlzLmRhdGEsIChpdGVtOiBTRlNjaGVtYUVudW0pID0+IGl0ZW0udmFsdWUgPT09IHZhbHVlKSk7XG4gIH1cblxuICBvcGVuQ2hhbmdlKHN0YXR1czogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICh0aGlzLnVpLm9wZW5DaGFuZ2UpIHtcbiAgICAgIHRoaXMudWkub3BlbkNoYW5nZShzdGF0dXMpO1xuICAgIH1cbiAgfVxuXG4gIHNjcm9sbFRvQm90dG9tKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnVpLnNjcm9sbFRvQm90dG9tKSB7XG4gICAgICB0aGlzLnVpLnNjcm9sbFRvQm90dG9tKCk7XG4gICAgfVxuICB9XG5cbiAgb25TZWFyY2godmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLnVpLm9uU2VhcmNoKSB7XG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5zZWFyY2gkLm5leHQodmFsdWUpO1xuICAgIH1cbiAgfVxufVxuIl19