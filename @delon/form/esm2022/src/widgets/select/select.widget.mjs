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
class SelectWidget extends ControlUIWidget {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: SelectWidget, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.5", type: SelectWidget, selector: "sf-select", usesInheritance: true, ngImport: i0, template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <nz-select\n    [nzId]=\"id\"\n    [nzDisabled]=\"disabled\"\n    [(ngModel)]=\"_value\"\n    (ngModelChange)=\"change($event)\"\n    [nzSize]=\"ui.size!\"\n    [nzPlaceHolder]=\"ui.placeholder!\"\n    [nzNotFoundContent]=\"ui.notFoundContent\"\n    [nzDropdownClassName]=\"ui.dropdownClassName!\"\n    [nzAllowClear]=\"ui.allowClear\"\n    [nzDropdownStyle]=\"ui.dropdownStyle!\"\n    [nzCustomTemplate]=\"ui.customTemplate!\"\n    [nzSuffixIcon]=\"ui.suffixIcon!\"\n    [nzRemoveIcon]=\"ui.removeIcon!\"\n    [nzClearIcon]=\"ui.clearIcon!\"\n    [nzMenuItemSelectedIcon]=\"ui.menuItemSelectedIcon!\"\n    [nzMaxTagPlaceholder]=\"ui.maxTagPlaceholder!\"\n    [nzDropdownRender]=\"ui.dropdownRender!\"\n    [nzAutoClearSearchValue]=\"i.autoClearSearchValue\"\n    [nzBorderless]=\"i.borderless\"\n    [nzAutoFocus]=\"i.autoFocus\"\n    [nzDropdownMatchSelectWidth]=\"i.dropdownMatchSelectWidth!\"\n    [nzServerSearch]=\"i.serverSearch\"\n    [nzMaxMultipleCount]=\"i.maxMultipleCount!\"\n    [nzMode]=\"i.mode!\"\n    [nzShowSearch]=\"i.showSearch\"\n    [nzShowArrow]=\"i.showArrow!\"\n    [nzTokenSeparators]=\"i.tokenSeparators!\"\n    [nzMaxTagCount]=\"i.maxTagCount!\"\n    [compareWith]=\"i.compareWith!\"\n    [nzOptionHeightPx]=\"i.optionHeightPx!\"\n    [nzOptionOverflowSize]=\"i.optionOverflowSize!\"\n    (nzOpenChange)=\"openChange($event)\"\n    (nzOnSearch)=\"onSearch($event)\"\n    (nzScrollToBottom)=\"scrollToBottom()\"\n  >\n    <ng-container *ngIf=\"!loading && !hasGroup\">\n      <nz-option\n        *ngFor=\"let o of data\"\n        [nzLabel]=\"o.label\"\n        [nzValue]=\"o.value\"\n        [nzHide]=\"o.hide\"\n        [nzDisabled]=\"o.disabled\"\n      ></nz-option>\n    </ng-container>\n    <ng-container *ngIf=\"!loading && hasGroup\">\n      <nz-option-group *ngFor=\"let i of data\" [nzLabel]=\"i.label\">\n        <nz-option\n          *ngFor=\"let o of i.children\"\n          [nzLabel]=\"o.label\"\n          [nzValue]=\"o.value\"\n          [nzDisabled]=\"o.disabled\"\n          [nzHide]=\"o.hide\"\n        ></nz-option>\n      </nz-option-group>\n    </ng-container>\n    <nz-option *ngIf=\"loading\" nzDisabled nzCustomContent>\n      <i nz-icon nzType=\"loading\"></i>\n      {{ ui.searchLoadingText }}\n    </nz-option>\n  </nz-select>\n</sf-item-wrap>\n", dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i3.ɵNzTransitionPatchDirective, selector: "[nz-button], nz-button-group, [nz-icon], [nz-menu-item], [nz-submenu], nz-select-top-control, nz-select-placeholder, nz-input-group", inputs: ["hidden"] }, { kind: "directive", type: i4.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "component", type: i5.NzOptionComponent, selector: "nz-option", inputs: ["nzLabel", "nzValue", "nzDisabled", "nzHide", "nzCustomContent"], exportAs: ["nzOption"] }, { kind: "component", type: i5.NzSelectComponent, selector: "nz-select", inputs: ["nzId", "nzSize", "nzStatus", "nzOptionHeightPx", "nzOptionOverflowSize", "nzDropdownClassName", "nzDropdownMatchSelectWidth", "nzDropdownStyle", "nzNotFoundContent", "nzPlaceHolder", "nzPlacement", "nzMaxTagCount", "nzDropdownRender", "nzCustomTemplate", "nzSuffixIcon", "nzClearIcon", "nzRemoveIcon", "nzMenuItemSelectedIcon", "nzTokenSeparators", "nzMaxTagPlaceholder", "nzMaxMultipleCount", "nzMode", "nzFilterOption", "compareWith", "nzAllowClear", "nzBorderless", "nzShowSearch", "nzLoading", "nzAutoFocus", "nzAutoClearSearchValue", "nzServerSearch", "nzDisabled", "nzOpen", "nzSelectOnTab", "nzBackdrop", "nzOptions", "nzShowArrow"], outputs: ["nzOnSearch", "nzScrollToBottom", "nzOpenChange", "nzBlur", "nzFocus"], exportAs: ["nzSelect"] }, { kind: "component", type: i5.NzOptionGroupComponent, selector: "nz-option-group", inputs: ["nzLabel"], exportAs: ["nzOptionGroup"] }, { kind: "component", type: i6.SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
export { SelectWidget };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: SelectWidget, decorators: [{
            type: Component,
            args: [{ selector: 'sf-select', preserveWhitespaces: false, encapsulation: ViewEncapsulation.None, template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <nz-select\n    [nzId]=\"id\"\n    [nzDisabled]=\"disabled\"\n    [(ngModel)]=\"_value\"\n    (ngModelChange)=\"change($event)\"\n    [nzSize]=\"ui.size!\"\n    [nzPlaceHolder]=\"ui.placeholder!\"\n    [nzNotFoundContent]=\"ui.notFoundContent\"\n    [nzDropdownClassName]=\"ui.dropdownClassName!\"\n    [nzAllowClear]=\"ui.allowClear\"\n    [nzDropdownStyle]=\"ui.dropdownStyle!\"\n    [nzCustomTemplate]=\"ui.customTemplate!\"\n    [nzSuffixIcon]=\"ui.suffixIcon!\"\n    [nzRemoveIcon]=\"ui.removeIcon!\"\n    [nzClearIcon]=\"ui.clearIcon!\"\n    [nzMenuItemSelectedIcon]=\"ui.menuItemSelectedIcon!\"\n    [nzMaxTagPlaceholder]=\"ui.maxTagPlaceholder!\"\n    [nzDropdownRender]=\"ui.dropdownRender!\"\n    [nzAutoClearSearchValue]=\"i.autoClearSearchValue\"\n    [nzBorderless]=\"i.borderless\"\n    [nzAutoFocus]=\"i.autoFocus\"\n    [nzDropdownMatchSelectWidth]=\"i.dropdownMatchSelectWidth!\"\n    [nzServerSearch]=\"i.serverSearch\"\n    [nzMaxMultipleCount]=\"i.maxMultipleCount!\"\n    [nzMode]=\"i.mode!\"\n    [nzShowSearch]=\"i.showSearch\"\n    [nzShowArrow]=\"i.showArrow!\"\n    [nzTokenSeparators]=\"i.tokenSeparators!\"\n    [nzMaxTagCount]=\"i.maxTagCount!\"\n    [compareWith]=\"i.compareWith!\"\n    [nzOptionHeightPx]=\"i.optionHeightPx!\"\n    [nzOptionOverflowSize]=\"i.optionOverflowSize!\"\n    (nzOpenChange)=\"openChange($event)\"\n    (nzOnSearch)=\"onSearch($event)\"\n    (nzScrollToBottom)=\"scrollToBottom()\"\n  >\n    <ng-container *ngIf=\"!loading && !hasGroup\">\n      <nz-option\n        *ngFor=\"let o of data\"\n        [nzLabel]=\"o.label\"\n        [nzValue]=\"o.value\"\n        [nzHide]=\"o.hide\"\n        [nzDisabled]=\"o.disabled\"\n      ></nz-option>\n    </ng-container>\n    <ng-container *ngIf=\"!loading && hasGroup\">\n      <nz-option-group *ngFor=\"let i of data\" [nzLabel]=\"i.label\">\n        <nz-option\n          *ngFor=\"let o of i.children\"\n          [nzLabel]=\"o.label\"\n          [nzValue]=\"o.value\"\n          [nzDisabled]=\"o.disabled\"\n          [nzHide]=\"o.hide\"\n        ></nz-option>\n      </nz-option-group>\n    </ng-container>\n    <nz-option *ngIf=\"loading\" nzDisabled nzCustomContent>\n      <i nz-icon nzType=\"loading\"></i>\n      {{ ui.searchLoadingText }}\n    </nz-option>\n  </nz-select>\n</sf-item-wrap>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm0vc3JjL3dpZGdldHMvc2VsZWN0L3NlbGVjdC53aWRnZXQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3NyYy93aWRnZXRzL3NlbGVjdC9zZWxlY3Qud2lkZ2V0Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVyRyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFLakQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDOUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7Ozs7Ozs7QUFHL0MsTUFNYSxZQUFhLFNBQVEsZUFBcUM7SUFOdkU7O1FBT1UsWUFBTyxHQUFHLElBQUksT0FBTyxFQUFVLENBQUM7UUFJeEMsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixZQUFPLEdBQUcsS0FBSyxDQUFDO0tBcUdqQjtJQW5HUyxVQUFVLENBQUMsSUFBb0I7UUFDckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVELFFBQVE7UUFDTixNQUFNLEVBQ0osb0JBQW9CLEVBQ3BCLFVBQVUsRUFDVixTQUFTLEVBQ1Qsd0JBQXdCLEVBQ3hCLFlB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U0FDMUI7SUFDSCxDQUFDOzhHQTFHVSxZQUFZO2tHQUFaLFlBQVksd0VDbEJ6QixxNEVBK0RBOztTRDdDYSxZQUFZOzJGQUFaLFlBQVk7a0JBTnhCLFNBQVM7K0JBQ0UsV0FBVyx1QkFFQSxLQUFLLGlCQUNYLGlCQUFpQixDQUFDLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QsIGNhdGNoRXJyb3IsIGRlYm91bmNlVGltZSwgZGlzdGluY3RVbnRpbENoYW5nZWQsIHN3aXRjaE1hcCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEFycmF5U2VydmljZSB9IGZyb20gJ0BkZWxvbi91dGlsL2FycmF5JztcbmltcG9ydCB0eXBlIHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuaW1wb3J0IHsgU0ZWYWx1ZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBTRlNjaGVtYUVudW0gfSBmcm9tICcuLi8uLi9zY2hlbWEnO1xuaW1wb3J0IHsgZ2V0RGF0YSwgdG9Cb29sIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHsgQ29udHJvbFVJV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcbmltcG9ydCB7IFNGU2VsZWN0V2lkZ2V0U2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1zZWxlY3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2VsZWN0LndpZGdldC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0V2lkZ2V0IGV4dGVuZHMgQ29udHJvbFVJV2lkZ2V0PFNGU2VsZWN0V2lkZ2V0U2NoZW1hPiBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgc2VhcmNoJCA9IG5ldyBTdWJqZWN0PHN0cmluZz4oKTtcbiAgaSE6IFNGU2VsZWN0V2lkZ2V0U2NoZW1hO1xuICBkYXRhITogU0ZTY2hlbWFFbnVtW107XG4gIF92YWx1ZTogTnpTYWZlQW55O1xuICBoYXNHcm91cCA9IGZhbHNlO1xuICBsb2FkaW5nID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBjaGVja0dyb3VwKGxpc3Q6IFNGU2NoZW1hRW51bVtdKTogdm9pZCB7XG4gICAgdGhpcy5oYXNHcm91cCA9IChsaXN0IHx8IFtdKS5maWx0ZXIodyA9PiB3Lmdyb3VwID09PSB0cnVlKS5sZW5ndGggPiAwO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3Qge1xuICAgICAgYXV0b0NsZWFyU2VhcmNoVmFsdWUsXG4gICAgICBib3JkZXJsZXNzLFxuICAgICAgYXV0b0ZvY3VzLFxuICAgICAgZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoLFxuICAgICAgc2VydmVyU2VhcmNoLFxuICAgICAgbWF4TXVsdGlwbGVDb3VudCxcbiAgICAgIG1vZGUsXG4gICAgICBzaG93U2VhcmNoLFxuICAgICAgdG9rZW5TZXBhcmF0b3JzLFxuICAgICAgbWF4VGFnQ291bnQsXG4gICAgICBjb21wYXJlV2l0aCxcbiAgICAgIG9wdGlvbkhlaWdodFB4LFxuICAgICAgb3B0aW9uT3ZlcmZsb3dTaXplLFxuICAgICAgc2hvd0Fycm93XG4gICAgfSA9IHRoaXMudWk7XG4gICAgdGhpcy5pID0ge1xuICAgICAgYXV0b0NsZWFyU2VhcmNoVmFsdWU6IHRvQm9vbChhdXRvQ2xlYXJTZWFyY2hWYWx1ZSwgdHJ1ZSksXG4gICAgICBib3JkZXJsZXNzOiB0b0Jvb2woYm9yZGVybGVzcywgZmFsc2UpLFxuICAgICAgYXV0b0ZvY3VzOiB0b0Jvb2woYXV0b0ZvY3VzLCBmYWxzZSksXG4gICAgICBkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGg6IHRvQm9vbChkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGgsIHRydWUpLFxuICAgICAgc2VydmVyU2VhcmNoOiB0b0Jvb2woc2VydmVyU2VhcmNoLCBmYWxzZSksXG4gICAgICBtYXhNdWx0aXBsZUNvdW50OiBtYXhNdWx0aXBsZUNvdW50IHx8IEluZmluaXR5LFxuICAgICAgbW9kZTogbW9kZSB8fCAnZGVmYXVsdCcsXG4gICAgICBzaG93U2VhcmNoOiB0b0Jvb2woc2hvd1NlYXJjaCwgdHJ1ZSksXG4gICAgICB0b2tlblNlcGFyYXRvcnM6IHRva2VuU2VwYXJhdG9ycyB8fCBbXSxcbiAgICAgIG1heFRhZ0NvdW50OiBtYXhUYWdDb3VudCB8fCB1bmRlZmluZWQsXG4gICAgICBvcHRpb25IZWlnaHRQeDogb3B0aW9uSGVpZ2h0UHggfHwgMzIsXG4gICAgICBvcHRpb25PdmVyZmxvd1NpemU6IG9wdGlvbk92ZXJmbG93U2l6ZSB8fCA4LFxuICAgICAgc2hvd0Fycm93OiB0eXBlb2Ygc2hvd0Fycm93ICE9PSAnYm9vbGVhbicgPyB1bmRlZmluZWQgOiBzaG93QXJyb3csXG4gICAgICBjb21wYXJlV2l0aDogY29tcGFyZVdpdGggfHwgKChvMTogTnpTYWZlQW55LCBvMjogTnpTYWZlQW55KSA9PiBvMSA9PT0gbzIpXG4gICAgfTtcblxuICAgIGNvbnN0IG9uU2VhcmNoID0gdGhpcy51aS5vblNlYXJjaCE7XG4gICAgaWYgKG9uU2VhcmNoKSB7XG4gICAgICB0aGlzLnNlYXJjaCRcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgdGFrZVVudGlsKHRoaXMuc2ZJdGVtQ29tcCEuZGVzdHJveSQpLFxuICAgICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICAgICAgZGVib3VuY2VUaW1lKHRoaXMudWkuc2VhcmNoRGVib3VuY2VUaW1lIHx8IDMwMCksXG4gICAgICAgICAgc3dpdGNoTWFwKHRleHQgPT4gb25TZWFyY2godGV4dCkpLFxuICAgICAgICAgIGNhdGNoRXJyb3IoKCkgPT4gW10pXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZShsaXN0ID0+IHtcbiAgICAgICAgICB0aGlzLmRhdGEgPSBsaXN0O1xuICAgICAgICAgIHRoaXMuY2hlY2tHcm91cChsaXN0KTtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVzZXQodmFsdWU6IFNGVmFsdWUpOiB2b2lkIHtcbiAgICBnZXREYXRhKHRoaXMuc2NoZW1hLCB0aGlzLnVpLCB2YWx1ZSkuc3Vic2NyaWJlKGxpc3QgPT4ge1xuICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMuZGF0YSA9IGxpc3Q7XG4gICAgICB0aGlzLmNoZWNrR3JvdXAobGlzdCk7XG4gICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNoYW5nZSh2YWx1ZXM6IFNGVmFsdWUpOiB2b2lkIHtcbiAgICBpZiAodGhpcy51aS5jaGFuZ2UpIHtcbiAgICAgIHRoaXMudWkuY2hhbmdlKHZhbHVlcywgdGhpcy5nZXRPcmdEYXRhKHZhbHVlcykpO1xuICAgIH1cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlcyA9PSBudWxsID8gdW5kZWZpbmVkIDogdmFsdWVzKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0T3JnRGF0YSh2YWx1ZXM6IFNGVmFsdWUpOiBTRlNjaGVtYUVudW0gfCBTRlNjaGVtYUVudW1bXSB7XG4gICAgY29uc3Qgc3J2ID0gdGhpcy5pbmplY3Rvci5nZXQoQXJyYXlTZXJ2aWNlKTtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWVzKSkge1xuICAgICAgcmV0dXJuIHNydi5maW5kVHJlZSh0aGlzLmRhdGEsIChpdGVtOiBTRlNjaGVtYUVudW0pID0+IGl0ZW0udmFsdWUgPT09IHZhbHVlcykhO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWVzLm1hcCh2YWx1ZSA9PiBzcnYuZmluZFRyZWUodGhpcy5kYXRhLCAoaXRlbTogU0ZTY2hlbWFFbnVtKSA9PiBpdGVtLnZhbHVlID09PSB2YWx1ZSkpO1xuICB9XG5cbiAgb3BlbkNoYW5nZShzdGF0dXM6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy51aS5vcGVuQ2hhbmdlKSB7XG4gICAgICB0aGlzLnVpLm9wZW5DaGFuZ2Uoc3RhdHVzKTtcbiAgICB9XG4gIH1cblxuICBzY3JvbGxUb0JvdHRvbSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy51aS5zY3JvbGxUb0JvdHRvbSkge1xuICAgICAgdGhpcy51aS5zY3JvbGxUb0JvdHRvbSgpO1xuICAgIH1cbiAgfVxuXG4gIG9uU2VhcmNoKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy51aS5vblNlYXJjaCkge1xuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2VhcmNoJC5uZXh0KHZhbHVlKTtcbiAgICB9XG4gIH1cbn1cbiIsIjxzZi1pdGVtLXdyYXAgW2lkXT1cImlkXCIgW3NjaGVtYV09XCJzY2hlbWFcIiBbdWldPVwidWlcIiBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiIFtlcnJvcl09XCJlcnJvclwiIFtzaG93VGl0bGVdPVwic2NoZW1hLnRpdGxlXCI+XG4gIDxuei1zZWxlY3RcbiAgICBbbnpJZF09XCJpZFwiXG4gICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgIFsobmdNb2RlbCldPVwiX3ZhbHVlXCJcbiAgICAobmdNb2RlbENoYW5nZSk9XCJjaGFuZ2UoJGV2ZW50KVwiXG4gICAgW256U2l6ZV09XCJ1aS5zaXplIVwiXG4gICAgW256UGxhY2VIb2xkZXJdPVwidWkucGxhY2Vob2xkZXIhXCJcbiAgICBbbnpOb3RGb3VuZENvbnRlbnRdPVwidWkubm90Rm91bmRDb250ZW50XCJcbiAgICBbbnpEcm9wZG93bkNsYXNzTmFtZV09XCJ1aS5kcm9wZG93bkNsYXNzTmFtZSFcIlxuICAgIFtuekFsbG93Q2xlYXJdPVwidWkuYWxsb3dDbGVhclwiXG4gICAgW256RHJvcGRvd25TdHlsZV09XCJ1aS5kcm9wZG93blN0eWxlIVwiXG4gICAgW256Q3VzdG9tVGVtcGxhdGVdPVwidWkuY3VzdG9tVGVtcGxhdGUhXCJcbiAgICBbbnpTdWZmaXhJY29uXT1cInVpLnN1ZmZpeEljb24hXCJcbiAgICBbbnpSZW1vdmVJY29uXT1cInVpLnJlbW92ZUljb24hXCJcbiAgICBbbnpDbGVhckljb25dPVwidWkuY2xlYXJJY29uIVwiXG4gICAgW256TWVudUl0ZW1TZWxlY3RlZEljb25dPVwidWkubWVudUl0ZW1TZWxlY3RlZEljb24hXCJcbiAgICBbbnpNYXhUYWdQbGFjZWhvbGRlcl09XCJ1aS5tYXhUYWdQbGFjZWhvbGRlciFcIlxuICAgIFtuekRyb3Bkb3duUmVuZGVyXT1cInVpLmRyb3Bkb3duUmVuZGVyIVwiXG4gICAgW256QXV0b0NsZWFyU2VhcmNoVmFsdWVdPVwiaS5hdXRvQ2xlYXJTZWFyY2hWYWx1ZVwiXG4gICAgW256Qm9yZGVybGVzc109XCJpLmJvcmRlcmxlc3NcIlxuICAgIFtuekF1dG9Gb2N1c109XCJpLmF1dG9Gb2N1c1wiXG4gICAgW256RHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoXT1cImkuZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoIVwiXG4gICAgW256U2VydmVyU2VhcmNoXT1cImkuc2VydmVyU2VhcmNoXCJcbiAgICBbbnpNYXhNdWx0aXBsZUNvdW50XT1cImkubWF4TXVsdGlwbGVDb3VudCFcIlxuICAgIFtuek1vZGVdPVwiaS5tb2RlIVwiXG4gICAgW256U2hvd1NlYXJjaF09XCJpLnNob3dTZWFyY2hcIlxuICAgIFtuelNob3dBcnJvd109XCJpLnNob3dBcnJvdyFcIlxuICAgIFtuelRva2VuU2VwYXJhdG9yc109XCJpLnRva2VuU2VwYXJhdG9ycyFcIlxuICAgIFtuek1heFRhZ0NvdW50XT1cImkubWF4VGFnQ291bnQhXCJcbiAgICBbY29tcGFyZVdpdGhdPVwiaS5jb21wYXJlV2l0aCFcIlxuICAgIFtuek9wdGlvbkhlaWdodFB4XT1cImkub3B0aW9uSGVpZ2h0UHghXCJcbiAgICBbbnpPcHRpb25PdmVyZmxvd1NpemVdPVwiaS5vcHRpb25PdmVyZmxvd1NpemUhXCJcbiAgICAobnpPcGVuQ2hhbmdlKT1cIm9wZW5DaGFuZ2UoJGV2ZW50KVwiXG4gICAgKG56T25TZWFyY2gpPVwib25TZWFyY2goJGV2ZW50KVwiXG4gICAgKG56U2Nyb2xsVG9Cb3R0b20pPVwic2Nyb2xsVG9Cb3R0b20oKVwiXG4gID5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWxvYWRpbmcgJiYgIWhhc0dyb3VwXCI+XG4gICAgICA8bnotb3B0aW9uXG4gICAgICAgICpuZ0Zvcj1cImxldCBvIG9mIGRhdGFcIlxuICAgICAgICBbbnpMYWJlbF09XCJvLmxhYmVsXCJcbiAgICAgICAgW256VmFsdWVdPVwiby52YWx1ZVwiXG4gICAgICAgIFtuekhpZGVdPVwiby5oaWRlXCJcbiAgICAgICAgW256RGlzYWJsZWRdPVwiby5kaXNhYmxlZFwiXG4gICAgICA+PC9uei1vcHRpb24+XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFsb2FkaW5nICYmIGhhc0dyb3VwXCI+XG4gICAgICA8bnotb3B0aW9uLWdyb3VwICpuZ0Zvcj1cImxldCBpIG9mIGRhdGFcIiBbbnpMYWJlbF09XCJpLmxhYmVsXCI+XG4gICAgICAgIDxuei1vcHRpb25cbiAgICAgICAgICAqbmdGb3I9XCJsZXQgbyBvZiBpLmNoaWxkcmVuXCJcbiAgICAgICAgICBbbnpMYWJlbF09XCJvLmxhYmVsXCJcbiAgICAgICAgICBbbnpWYWx1ZV09XCJvLnZhbHVlXCJcbiAgICAgICAgICBbbnpEaXNhYmxlZF09XCJvLmRpc2FibGVkXCJcbiAgICAgICAgICBbbnpIaWRlXT1cIm8uaGlkZVwiXG4gICAgICAgID48L256LW9wdGlvbj5cbiAgICAgIDwvbnotb3B0aW9uLWdyb3VwPlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDxuei1vcHRpb24gKm5nSWY9XCJsb2FkaW5nXCIgbnpEaXNhYmxlZCBuekN1c3RvbUNvbnRlbnQ+XG4gICAgICA8aSBuei1pY29uIG56VHlwZT1cImxvYWRpbmdcIj48L2k+XG4gICAgICB7eyB1aS5zZWFyY2hMb2FkaW5nVGV4dCB9fVxuICAgIDwvbnotb3B0aW9uPlxuICA8L256LXNlbGVjdD5cbjwvc2YtaXRlbS13cmFwPlxuIl19