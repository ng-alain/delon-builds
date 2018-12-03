/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { ControlWidget } from '../../widget';
import { getData, toBool } from '../../utils';
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
        if (this.ui.change)
            this.ui.change(values);
        this.setValue(values);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    openChange(value) {
        if (this.ui.openChange)
            this.ui.openChange(value);
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
     * @param {?} value
     * @return {?}
     */
    scrollToBottom(value) {
        if (this.ui.scrollToBottom)
            this.ui.scrollToBottom(value);
    }
}
SelectWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-select',
                template: `
  <sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title">

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
      (nzScrollToBottom)="scrollToBottom($event)">
      <ng-container *ngIf="!hasGroup">
        <nz-option
          *ngFor="let o of data"
          [nzLabel]="o.label"
          [nzValue]="o.value"
          [nzDisabled]="o.disabled">
        </nz-option>
      </ng-container>
      <ng-container *ngIf="hasGroup">
        <nz-option-group *ngFor="let i of data" [nzLabel]="i.label">
          <nz-option
            *ngFor="let o of i.children"
            [nzLabel]="o.label"
            [nzValue]="o.value"
            [nzDisabled]="o.disabled">
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9mb3JtLyIsInNvdXJjZXMiOlsic3JjL3dpZGdldHMvc2VsZWN0L3NlbGVjdC53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUU3QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQWdEOUMsTUFBTSxPQUFPLFlBQWEsU0FBUSxhQUFhO0lBOUMvQzs7UUFpREUsYUFBUSxHQUFHLEtBQUssQ0FBQztJQWlEbkIsQ0FBQzs7OztJQS9DQyxRQUFRO1FBQ04sSUFBSSxDQUFDLENBQUMsR0FBRztZQUNQLFVBQVUsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVU7WUFDOUIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUM7WUFDM0MsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsSUFBSSxJQUFJO1lBQ3BELHdCQUF3QixFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLHdCQUF3QixFQUFFLElBQUksQ0FBQztZQUN4RSxZQUFZLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQztZQUNqRCxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLGdCQUFnQixJQUFJLFFBQVE7WUFDdEQsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLFNBQVM7WUFDL0IsZUFBZSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsZUFBZSxJQUFJLE1BQU07WUFDbEQsVUFBVSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUM7U0FDN0MsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsS0FBSyxDQUFDLEtBQVU7UUFDZCxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUNqRSxJQUFJLENBQUMsRUFBRTtZQUNMLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUM5RCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdkIsQ0FBQyxDQUNGLENBQUM7SUFDSixDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxNQUFXO1FBQ2hCLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNO1lBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN4QixDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxLQUFVO1FBQ25CLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVO1lBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsSUFBWTtRQUN2QixJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQVUsRUFBRSxFQUFFO2dCQUN6QyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztnQkFDaEIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxDQUFDO1lBQ0gsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLEtBQVU7UUFDdkIsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLGNBQWM7WUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1RCxDQUFDOzs7WUFqR0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTBDVDthQUNGOzs7O0lBRUMseUJBQU87O0lBQ1AsNEJBQXFCOztJQUNyQixnQ0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5pbXBvcnQgeyBTRlNjaGVtYUVudW0gfSBmcm9tICcuLi8uLi9zY2hlbWEnO1xuaW1wb3J0IHsgZ2V0RGF0YSwgdG9Cb29sIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1zZWxlY3QnLFxuICB0ZW1wbGF0ZTogYFxuICA8c2YtaXRlbS13cmFwIFtpZF09XCJpZFwiIFtzY2hlbWFdPVwic2NoZW1hXCIgW3VpXT1cInVpXCIgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIiBbZXJyb3JdPVwiZXJyb3JcIiBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiPlxuXG4gICAgPG56LXNlbGVjdFxuICAgICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgW256U2l6ZV09XCJ1aS5zaXplXCJcbiAgICAgIFtuZ01vZGVsXT1cInZhbHVlXCJcbiAgICAgIChuZ01vZGVsQ2hhbmdlKT1cImNoYW5nZSgkZXZlbnQpXCJcbiAgICAgIFtuelBsYWNlSG9sZGVyXT1cInVpLnBsYWNlaG9sZGVyXCJcbiAgICAgIFtuekFsbG93Q2xlYXJdPVwiaS5hbGxvd0NsZWFyXCJcbiAgICAgIFtuekF1dG9Gb2N1c109XCJpLmF1dG9Gb2N1c1wiXG4gICAgICBbbnpEcm9wZG93bkNsYXNzTmFtZV09XCJpLmRyb3Bkb3duQ2xhc3NOYW1lXCJcbiAgICAgIFtuekRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aF09XCJpLmRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aFwiXG4gICAgICBbbnpTZXJ2ZXJTZWFyY2hdPVwiaS5zZXJ2ZXJTZWFyY2hcIlxuICAgICAgW256TWF4TXVsdGlwbGVDb3VudF09XCJpLm1heE11bHRpcGxlQ291bnRcIlxuICAgICAgW256TW9kZV09XCJpLm1vZGVcIlxuICAgICAgW256Tm90Rm91bmRDb250ZW50XT1cImkubm90Rm91bmRDb250ZW50XCJcbiAgICAgIFtuelNob3dTZWFyY2hdPVwiaS5zaG93U2VhcmNoXCJcbiAgICAgIChuek9wZW5DaGFuZ2UpPVwib3BlbkNoYW5nZSgkZXZlbnQpXCJcbiAgICAgIChuek9uU2VhcmNoKT1cInNlYXJjaENoYW5nZSgkZXZlbnQpXCJcbiAgICAgIChuelNjcm9sbFRvQm90dG9tKT1cInNjcm9sbFRvQm90dG9tKCRldmVudClcIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaGFzR3JvdXBcIj5cbiAgICAgICAgPG56LW9wdGlvblxuICAgICAgICAgICpuZ0Zvcj1cImxldCBvIG9mIGRhdGFcIlxuICAgICAgICAgIFtuekxhYmVsXT1cIm8ubGFiZWxcIlxuICAgICAgICAgIFtuelZhbHVlXT1cIm8udmFsdWVcIlxuICAgICAgICAgIFtuekRpc2FibGVkXT1cIm8uZGlzYWJsZWRcIj5cbiAgICAgICAgPC9uei1vcHRpb24+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJoYXNHcm91cFwiPlxuICAgICAgICA8bnotb3B0aW9uLWdyb3VwICpuZ0Zvcj1cImxldCBpIG9mIGRhdGFcIiBbbnpMYWJlbF09XCJpLmxhYmVsXCI+XG4gICAgICAgICAgPG56LW9wdGlvblxuICAgICAgICAgICAgKm5nRm9yPVwibGV0IG8gb2YgaS5jaGlsZHJlblwiXG4gICAgICAgICAgICBbbnpMYWJlbF09XCJvLmxhYmVsXCJcbiAgICAgICAgICAgIFtuelZhbHVlXT1cIm8udmFsdWVcIlxuICAgICAgICAgICAgW256RGlzYWJsZWRdPVwiby5kaXNhYmxlZFwiPlxuICAgICAgICAgIDwvbnotb3B0aW9uPlxuICAgICAgICA8L256LW9wdGlvbi1ncm91cD5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvbnotc2VsZWN0PlxuXG4gIDwvc2YtaXRlbS13cmFwPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RXaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IGltcGxlbWVudHMgT25Jbml0IHtcbiAgaTogYW55O1xuICBkYXRhOiBTRlNjaGVtYUVudW1bXTtcbiAgaGFzR3JvdXAgPSBmYWxzZTtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmkgPSB7XG4gICAgICBhbGxvd0NsZWFyOiB0aGlzLnVpLmFsbG93Q2xlYXIsXG4gICAgICBhdXRvRm9jdXM6IHRvQm9vbCh0aGlzLnVpLmF1dG9Gb2N1cywgZmFsc2UpLFxuICAgICAgZHJvcGRvd25DbGFzc05hbWU6IHRoaXMudWkuZHJvcGRvd25DbGFzc05hbWUgfHwgbnVsbCxcbiAgICAgIGRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aDogdG9Cb29sKHRoaXMudWkuZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoLCB0cnVlKSxcbiAgICAgIHNlcnZlclNlYXJjaDogdG9Cb29sKHRoaXMudWkuc2VydmVyU2VhcmNoLCBmYWxzZSksXG4gICAgICBtYXhNdWx0aXBsZUNvdW50OiB0aGlzLnVpLm1heE11bHRpcGxlQ291bnQgfHwgSW5maW5pdHksXG4gICAgICBtb2RlOiB0aGlzLnVpLm1vZGUgfHwgJ2RlZmF1bHQnLFxuICAgICAgbm90Rm91bmRDb250ZW50OiB0aGlzLnVpLm5vdEZvdW5kQ29udGVudCB8fCAn5peg5rOV5om+5YiwJyxcbiAgICAgIHNob3dTZWFyY2g6IHRvQm9vbCh0aGlzLnVpLnNob3dTZWFyY2gsIHRydWUpLFxuICAgIH07XG4gIH1cblxuICByZXNldCh2YWx1ZTogYW55KSB7XG4gICAgZ2V0RGF0YSh0aGlzLnNjaGVtYSwgdGhpcy51aSwgdGhpcy5mb3JtUHJvcGVydHkuZm9ybURhdGEpLnN1YnNjcmliZShcbiAgICAgIGxpc3QgPT4ge1xuICAgICAgICB0aGlzLmRhdGEgPSBsaXN0O1xuICAgICAgICB0aGlzLmhhc0dyb3VwID0gbGlzdC5maWx0ZXIodyA9PiB3Lmdyb3VwID09PSB0cnVlKS5sZW5ndGggPiAwO1xuICAgICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH0sXG4gICAgKTtcbiAgfVxuXG4gIGNoYW5nZSh2YWx1ZXM6IGFueSkge1xuICAgIGlmICh0aGlzLnVpLmNoYW5nZSkgdGhpcy51aS5jaGFuZ2UodmFsdWVzKTtcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlcyk7XG4gIH1cblxuICBvcGVuQ2hhbmdlKHZhbHVlOiBhbnkpIHtcbiAgICBpZiAodGhpcy51aS5vcGVuQ2hhbmdlKSB0aGlzLnVpLm9wZW5DaGFuZ2UodmFsdWUpO1xuICB9XG5cbiAgc2VhcmNoQ2hhbmdlKHRleHQ6IHN0cmluZykge1xuICAgIGlmICh0aGlzLnVpLm9uU2VhcmNoKSB7XG4gICAgICB0aGlzLnVpLm9uU2VhcmNoKHRleHQpLnRoZW4oKHJlczogYW55W10pID0+IHtcbiAgICAgICAgdGhpcy5kYXRhID0gcmVzO1xuICAgICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHNjcm9sbFRvQm90dG9tKHZhbHVlOiBhbnkpIHtcbiAgICBpZiAodGhpcy51aS5zY3JvbGxUb0JvdHRvbSkgdGhpcy51aS5zY3JvbGxUb0JvdHRvbSh2YWx1ZSk7XG4gIH1cbn1cbiJdfQ==