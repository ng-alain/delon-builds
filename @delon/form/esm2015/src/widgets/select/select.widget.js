/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
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
        this.i = {
            allowClear: this.ui.allowClear,
            autoFocus: toBool(this.ui.autoFocus, false),
            dropdownClassName: this.ui.dropdownClassName || null,
            dropdownMatchSelectWidth: toBool(this.ui.dropdownMatchSelectWidth, true),
            serverSearch: toBool(this.ui.serverSearch, false),
            maxMultipleCount: this.ui.maxMultipleCount || Infinity,
            mode: this.ui.mode || 'default',
            notFoundContent: this.ui.notFoundContent || '无法找到',
            showSearch: toBool(this.ui.showSearch, true),
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    reset(value) {
        getData(this.schema, this.ui, this.formProperty.formData).subscribe(list => {
            this.data = list;
            this.hasGroup = list.filter(w => w.group === true).length > 0;
            this.detectChanges();
        });
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
            this.ui.onSearch(text).then((res) => {
                this.data = res;
                this.detectChanges();
            });
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
                template: `
    <sf-item-wrap
      [id]="id"
      [schema]="schema"
      [ui]="ui"
      [showError]="showError"
      [error]="error"
      [showTitle]="schema.title"
    >
      <nz-select
        [nzDisabled]="disabled"
        [nzSize]="ui.size"
        [ngModel]="value"
        (ngModelChange)="change($event)"
        [nzPlaceHolder]="ui.placeholder"
        [nzAllowClear]="i.allowClear"
        [nzAutoFocus]="i.autoFocus"
        [nzDropdownClassName]="i.dropdownClassName"
        [nzDropdownMatchSelectWidth]="i.dropdownMatchSelectWidth"
        [nzServerSearch]="i.serverSearch"
        [nzMaxMultipleCount]="i.maxMultipleCount"
        [nzMode]="i.mode"
        [nzNotFoundContent]="i.notFoundContent"
        [nzShowSearch]="i.showSearch"
        (nzOpenChange)="openChange($event)"
        (nzOnSearch)="searchChange($event)"
        (nzScrollToBottom)="scrollToBottom()"
      >
        <ng-container *ngIf="!hasGroup">
          <nz-option
            *ngFor="let o of data"
            [nzLabel]="o.label"
            [nzValue]="o.value"
            [nzDisabled]="o.disabled"
          >
          </nz-option>
        </ng-container>
        <ng-container *ngIf="hasGroup">
          <nz-option-group *ngFor="let i of data" [nzLabel]="i.label">
            <nz-option
              *ngFor="let o of i.children"
              [nzLabel]="o.label"
              [nzValue]="o.value"
              [nzDisabled]="o.disabled"
            >
            </nz-option>
          </nz-option-group>
        </ng-container>
      </nz-select>
    </sf-item-wrap>
  `
            }] }
];
if (false) {
    /** @type {?} */
    SelectWidget.prototype.i;
    /** @type {?} */
    SelectWidget.prototype.data;
    /** @type {?} */
    SelectWidget.prototype.hasGroup;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9mb3JtLyIsInNvdXJjZXMiOlsic3JjL3dpZGdldHMvc2VsZWN0L3NlbGVjdC53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFHbEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDOUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQXdEN0MsTUFBTSxPQUFPLFlBQWEsU0FBUSxhQUFhO0lBdEQvQzs7UUEwREUsYUFBUSxHQUFHLEtBQUssQ0FBQztJQXFEbkIsQ0FBQzs7OztJQW5EQyxRQUFRO1FBQ04sSUFBSSxDQUFDLENBQUMsR0FBRztZQUNQLFVBQVUsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVU7WUFDOUIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUM7WUFDM0MsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsSUFBSSxJQUFJO1lBQ3BELHdCQUF3QixFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLHdCQUF3QixFQUFFLElBQUksQ0FBQztZQUN4RSxZQUFZLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQztZQUNqRCxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLGdCQUFnQixJQUFJLFFBQVE7WUFDdEQsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLFNBQVM7WUFDL0IsZUFBZSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsZUFBZSxJQUFJLE1BQU07WUFDbEQsVUFBVSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUM7U0FDN0MsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsS0FBSyxDQUFDLEtBQWM7UUFDbEIsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN6RSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDOUQsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsTUFBZTtRQUNwQixJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3hCO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN4QixDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxLQUFjO1FBQ3ZCLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUU7WUFDdEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDM0I7SUFDSCxDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxJQUFZO1FBQ3ZCLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUU7WUFDcEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBbUIsRUFBRSxFQUFFO2dCQUNsRCxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztnQkFDaEIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxDQUFDO1lBQ0gsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFRCxjQUFjO1FBQ1osSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLGNBQWMsRUFBRTtZQUMxQixJQUFJLENBQUMsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQzFCO0lBQ0gsQ0FBQzs7O1lBOUdGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtEVDthQUNGOzs7O0lBR0MseUJBQU87O0lBQ1AsNEJBQXFCOztJQUNyQixnQ0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU0ZWYWx1ZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBTRlNjaGVtYUVudW0gfSBmcm9tICcuLi8uLi9zY2hlbWEnO1xuaW1wb3J0IHsgZ2V0RGF0YSwgdG9Cb29sIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLXNlbGVjdCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHNmLWl0ZW0td3JhcFxuICAgICAgW2lkXT1cImlkXCJcbiAgICAgIFtzY2hlbWFdPVwic2NoZW1hXCJcbiAgICAgIFt1aV09XCJ1aVwiXG4gICAgICBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiXG4gICAgICBbZXJyb3JdPVwiZXJyb3JcIlxuICAgICAgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIlxuICAgID5cbiAgICAgIDxuei1zZWxlY3RcbiAgICAgICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICBbbnpTaXplXT1cInVpLnNpemVcIlxuICAgICAgICBbbmdNb2RlbF09XCJ2YWx1ZVwiXG4gICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cImNoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgW256UGxhY2VIb2xkZXJdPVwidWkucGxhY2Vob2xkZXJcIlxuICAgICAgICBbbnpBbGxvd0NsZWFyXT1cImkuYWxsb3dDbGVhclwiXG4gICAgICAgIFtuekF1dG9Gb2N1c109XCJpLmF1dG9Gb2N1c1wiXG4gICAgICAgIFtuekRyb3Bkb3duQ2xhc3NOYW1lXT1cImkuZHJvcGRvd25DbGFzc05hbWVcIlxuICAgICAgICBbbnpEcm9wZG93bk1hdGNoU2VsZWN0V2lkdGhdPVwiaS5kcm9wZG93bk1hdGNoU2VsZWN0V2lkdGhcIlxuICAgICAgICBbbnpTZXJ2ZXJTZWFyY2hdPVwiaS5zZXJ2ZXJTZWFyY2hcIlxuICAgICAgICBbbnpNYXhNdWx0aXBsZUNvdW50XT1cImkubWF4TXVsdGlwbGVDb3VudFwiXG4gICAgICAgIFtuek1vZGVdPVwiaS5tb2RlXCJcbiAgICAgICAgW256Tm90Rm91bmRDb250ZW50XT1cImkubm90Rm91bmRDb250ZW50XCJcbiAgICAgICAgW256U2hvd1NlYXJjaF09XCJpLnNob3dTZWFyY2hcIlxuICAgICAgICAobnpPcGVuQ2hhbmdlKT1cIm9wZW5DaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgIChuek9uU2VhcmNoKT1cInNlYXJjaENoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgKG56U2Nyb2xsVG9Cb3R0b20pPVwic2Nyb2xsVG9Cb3R0b20oKVwiXG4gICAgICA+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaGFzR3JvdXBcIj5cbiAgICAgICAgICA8bnotb3B0aW9uXG4gICAgICAgICAgICAqbmdGb3I9XCJsZXQgbyBvZiBkYXRhXCJcbiAgICAgICAgICAgIFtuekxhYmVsXT1cIm8ubGFiZWxcIlxuICAgICAgICAgICAgW256VmFsdWVdPVwiby52YWx1ZVwiXG4gICAgICAgICAgICBbbnpEaXNhYmxlZF09XCJvLmRpc2FibGVkXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgPC9uei1vcHRpb24+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaGFzR3JvdXBcIj5cbiAgICAgICAgICA8bnotb3B0aW9uLWdyb3VwICpuZ0Zvcj1cImxldCBpIG9mIGRhdGFcIiBbbnpMYWJlbF09XCJpLmxhYmVsXCI+XG4gICAgICAgICAgICA8bnotb3B0aW9uXG4gICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBvIG9mIGkuY2hpbGRyZW5cIlxuICAgICAgICAgICAgICBbbnpMYWJlbF09XCJvLmxhYmVsXCJcbiAgICAgICAgICAgICAgW256VmFsdWVdPVwiby52YWx1ZVwiXG4gICAgICAgICAgICAgIFtuekRpc2FibGVkXT1cIm8uZGlzYWJsZWRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgPC9uei1vcHRpb24+XG4gICAgICAgICAgPC9uei1vcHRpb24tZ3JvdXA+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPC9uei1zZWxlY3Q+XG4gICAgPC9zZi1pdGVtLXdyYXA+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdFdpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIGk6IGFueTtcbiAgZGF0YTogU0ZTY2hlbWFFbnVtW107XG4gIGhhc0dyb3VwID0gZmFsc2U7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pID0ge1xuICAgICAgYWxsb3dDbGVhcjogdGhpcy51aS5hbGxvd0NsZWFyLFxuICAgICAgYXV0b0ZvY3VzOiB0b0Jvb2wodGhpcy51aS5hdXRvRm9jdXMsIGZhbHNlKSxcbiAgICAgIGRyb3Bkb3duQ2xhc3NOYW1lOiB0aGlzLnVpLmRyb3Bkb3duQ2xhc3NOYW1lIHx8IG51bGwsXG4gICAgICBkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGg6IHRvQm9vbCh0aGlzLnVpLmRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aCwgdHJ1ZSksXG4gICAgICBzZXJ2ZXJTZWFyY2g6IHRvQm9vbCh0aGlzLnVpLnNlcnZlclNlYXJjaCwgZmFsc2UpLFxuICAgICAgbWF4TXVsdGlwbGVDb3VudDogdGhpcy51aS5tYXhNdWx0aXBsZUNvdW50IHx8IEluZmluaXR5LFxuICAgICAgbW9kZTogdGhpcy51aS5tb2RlIHx8ICdkZWZhdWx0JyxcbiAgICAgIG5vdEZvdW5kQ29udGVudDogdGhpcy51aS5ub3RGb3VuZENvbnRlbnQgfHwgJ+aXoOazleaJvuWIsCcsXG4gICAgICBzaG93U2VhcmNoOiB0b0Jvb2wodGhpcy51aS5zaG93U2VhcmNoLCB0cnVlKSxcbiAgICB9O1xuICB9XG5cbiAgcmVzZXQodmFsdWU6IFNGVmFsdWUpIHtcbiAgICBnZXREYXRhKHRoaXMuc2NoZW1hLCB0aGlzLnVpLCB0aGlzLmZvcm1Qcm9wZXJ0eS5mb3JtRGF0YSkuc3Vic2NyaWJlKGxpc3QgPT4ge1xuICAgICAgdGhpcy5kYXRhID0gbGlzdDtcbiAgICAgIHRoaXMuaGFzR3JvdXAgPSBsaXN0LmZpbHRlcih3ID0+IHcuZ3JvdXAgPT09IHRydWUpLmxlbmd0aCA+IDA7XG4gICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNoYW5nZSh2YWx1ZXM6IFNGVmFsdWUpIHtcbiAgICBpZiAodGhpcy51aS5jaGFuZ2UpIHtcbiAgICAgIHRoaXMudWkuY2hhbmdlKHZhbHVlcyk7XG4gICAgfVxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWVzKTtcbiAgfVxuXG4gIG9wZW5DaGFuZ2UodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy51aS5vcGVuQ2hhbmdlKSB7XG4gICAgICB0aGlzLnVpLm9wZW5DaGFuZ2UodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHNlYXJjaENoYW5nZSh0ZXh0OiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy51aS5vblNlYXJjaCkge1xuICAgICAgdGhpcy51aS5vblNlYXJjaCh0ZXh0KS50aGVuKChyZXM6IFNGU2NoZW1hRW51bVtdKSA9PiB7XG4gICAgICAgIHRoaXMuZGF0YSA9IHJlcztcbiAgICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBzY3JvbGxUb0JvdHRvbSgpIHtcbiAgICBpZiAodGhpcy51aS5zY3JvbGxUb0JvdHRvbSkge1xuICAgICAgdGhpcy51aS5zY3JvbGxUb0JvdHRvbSgpO1xuICAgIH1cbiAgfVxufVxuIl19