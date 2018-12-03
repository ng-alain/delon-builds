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
     * @return {?}
     */
    scrollToBottom() {
        if (this.ui.scrollToBottom)
            this.ui.scrollToBottom();
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
      (nzScrollToBottom)="scrollToBottom()">
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9mb3JtLyIsInNvdXJjZXMiOlsic3JjL3dpZGdldHMvc2VsZWN0L3NlbGVjdC53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFHbEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDOUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQWdEN0MsTUFBTSxPQUFPLFlBQWEsU0FBUSxhQUFhO0lBOUMvQzs7UUFrREUsYUFBUSxHQUFHLEtBQUssQ0FBQztJQWlEbkIsQ0FBQzs7OztJQS9DQyxRQUFRO1FBQ04sSUFBSSxDQUFDLENBQUMsR0FBRztZQUNQLFVBQVUsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVU7WUFDOUIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUM7WUFDM0MsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsSUFBSSxJQUFJO1lBQ3BELHdCQUF3QixFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLHdCQUF3QixFQUFFLElBQUksQ0FBQztZQUN4RSxZQUFZLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQztZQUNqRCxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLGdCQUFnQixJQUFJLFFBQVE7WUFDdEQsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLFNBQVM7WUFDL0IsZUFBZSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsZUFBZSxJQUFJLE1BQU07WUFDbEQsVUFBVSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUM7U0FDN0MsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsS0FBSyxDQUFDLEtBQWM7UUFDbEIsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FDakUsSUFBSSxDQUFDLEVBQUU7WUFDTCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDOUQsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsTUFBZTtRQUNwQixJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTTtZQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsS0FBYztRQUN2QixJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVTtZQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BELENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLElBQVk7UUFDdkIsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRTtZQUNwQixJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFtQixFQUFFLEVBQUU7Z0JBQ2xELElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO2dCQUNoQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDdkIsQ0FBQyxDQUFDLENBQUM7WUFDSCxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVELGNBQWM7UUFDWixJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYztZQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDdkQsQ0FBQzs7O1lBbEdGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0EwQ1Q7YUFDRjs7OztJQUdDLHlCQUFPOztJQUNQLDRCQUFxQjs7SUFDckIsZ0NBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNGVmFsdWUgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgU0ZTY2hlbWFFbnVtIH0gZnJvbSAnLi4vLi4vc2NoZW1hJztcbmltcG9ydCB7IGdldERhdGEsIHRvQm9vbCB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1zZWxlY3QnLFxuICB0ZW1wbGF0ZTogYFxuICA8c2YtaXRlbS13cmFwIFtpZF09XCJpZFwiIFtzY2hlbWFdPVwic2NoZW1hXCIgW3VpXT1cInVpXCIgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIiBbZXJyb3JdPVwiZXJyb3JcIiBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiPlxuXG4gICAgPG56LXNlbGVjdFxuICAgICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgW256U2l6ZV09XCJ1aS5zaXplXCJcbiAgICAgIFtuZ01vZGVsXT1cInZhbHVlXCJcbiAgICAgIChuZ01vZGVsQ2hhbmdlKT1cImNoYW5nZSgkZXZlbnQpXCJcbiAgICAgIFtuelBsYWNlSG9sZGVyXT1cInVpLnBsYWNlaG9sZGVyXCJcbiAgICAgIFtuekFsbG93Q2xlYXJdPVwiaS5hbGxvd0NsZWFyXCJcbiAgICAgIFtuekF1dG9Gb2N1c109XCJpLmF1dG9Gb2N1c1wiXG4gICAgICBbbnpEcm9wZG93bkNsYXNzTmFtZV09XCJpLmRyb3Bkb3duQ2xhc3NOYW1lXCJcbiAgICAgIFtuekRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aF09XCJpLmRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aFwiXG4gICAgICBbbnpTZXJ2ZXJTZWFyY2hdPVwiaS5zZXJ2ZXJTZWFyY2hcIlxuICAgICAgW256TWF4TXVsdGlwbGVDb3VudF09XCJpLm1heE11bHRpcGxlQ291bnRcIlxuICAgICAgW256TW9kZV09XCJpLm1vZGVcIlxuICAgICAgW256Tm90Rm91bmRDb250ZW50XT1cImkubm90Rm91bmRDb250ZW50XCJcbiAgICAgIFtuelNob3dTZWFyY2hdPVwiaS5zaG93U2VhcmNoXCJcbiAgICAgIChuek9wZW5DaGFuZ2UpPVwib3BlbkNoYW5nZSgkZXZlbnQpXCJcbiAgICAgIChuek9uU2VhcmNoKT1cInNlYXJjaENoYW5nZSgkZXZlbnQpXCJcbiAgICAgIChuelNjcm9sbFRvQm90dG9tKT1cInNjcm9sbFRvQm90dG9tKClcIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaGFzR3JvdXBcIj5cbiAgICAgICAgPG56LW9wdGlvblxuICAgICAgICAgICpuZ0Zvcj1cImxldCBvIG9mIGRhdGFcIlxuICAgICAgICAgIFtuekxhYmVsXT1cIm8ubGFiZWxcIlxuICAgICAgICAgIFtuelZhbHVlXT1cIm8udmFsdWVcIlxuICAgICAgICAgIFtuekRpc2FibGVkXT1cIm8uZGlzYWJsZWRcIj5cbiAgICAgICAgPC9uei1vcHRpb24+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJoYXNHcm91cFwiPlxuICAgICAgICA8bnotb3B0aW9uLWdyb3VwICpuZ0Zvcj1cImxldCBpIG9mIGRhdGFcIiBbbnpMYWJlbF09XCJpLmxhYmVsXCI+XG4gICAgICAgICAgPG56LW9wdGlvblxuICAgICAgICAgICAgKm5nRm9yPVwibGV0IG8gb2YgaS5jaGlsZHJlblwiXG4gICAgICAgICAgICBbbnpMYWJlbF09XCJvLmxhYmVsXCJcbiAgICAgICAgICAgIFtuelZhbHVlXT1cIm8udmFsdWVcIlxuICAgICAgICAgICAgW256RGlzYWJsZWRdPVwiby5kaXNhYmxlZFwiPlxuICAgICAgICAgIDwvbnotb3B0aW9uPlxuICAgICAgICA8L256LW9wdGlvbi1ncm91cD5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvbnotc2VsZWN0PlxuXG4gIDwvc2YtaXRlbS13cmFwPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RXaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBpOiBhbnk7XG4gIGRhdGE6IFNGU2NoZW1hRW51bVtdO1xuICBoYXNHcm91cCA9IGZhbHNlO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaSA9IHtcbiAgICAgIGFsbG93Q2xlYXI6IHRoaXMudWkuYWxsb3dDbGVhcixcbiAgICAgIGF1dG9Gb2N1czogdG9Cb29sKHRoaXMudWkuYXV0b0ZvY3VzLCBmYWxzZSksXG4gICAgICBkcm9wZG93bkNsYXNzTmFtZTogdGhpcy51aS5kcm9wZG93bkNsYXNzTmFtZSB8fCBudWxsLFxuICAgICAgZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoOiB0b0Jvb2wodGhpcy51aS5kcm9wZG93bk1hdGNoU2VsZWN0V2lkdGgsIHRydWUpLFxuICAgICAgc2VydmVyU2VhcmNoOiB0b0Jvb2wodGhpcy51aS5zZXJ2ZXJTZWFyY2gsIGZhbHNlKSxcbiAgICAgIG1heE11bHRpcGxlQ291bnQ6IHRoaXMudWkubWF4TXVsdGlwbGVDb3VudCB8fCBJbmZpbml0eSxcbiAgICAgIG1vZGU6IHRoaXMudWkubW9kZSB8fCAnZGVmYXVsdCcsXG4gICAgICBub3RGb3VuZENvbnRlbnQ6IHRoaXMudWkubm90Rm91bmRDb250ZW50IHx8ICfml6Dms5Xmib7liLAnLFxuICAgICAgc2hvd1NlYXJjaDogdG9Cb29sKHRoaXMudWkuc2hvd1NlYXJjaCwgdHJ1ZSksXG4gICAgfTtcbiAgfVxuXG4gIHJlc2V0KHZhbHVlOiBTRlZhbHVlKSB7XG4gICAgZ2V0RGF0YSh0aGlzLnNjaGVtYSwgdGhpcy51aSwgdGhpcy5mb3JtUHJvcGVydHkuZm9ybURhdGEpLnN1YnNjcmliZShcbiAgICAgIGxpc3QgPT4ge1xuICAgICAgICB0aGlzLmRhdGEgPSBsaXN0O1xuICAgICAgICB0aGlzLmhhc0dyb3VwID0gbGlzdC5maWx0ZXIodyA9PiB3Lmdyb3VwID09PSB0cnVlKS5sZW5ndGggPiAwO1xuICAgICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH0sXG4gICAgKTtcbiAgfVxuXG4gIGNoYW5nZSh2YWx1ZXM6IFNGVmFsdWUpIHtcbiAgICBpZiAodGhpcy51aS5jaGFuZ2UpIHRoaXMudWkuY2hhbmdlKHZhbHVlcyk7XG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZXMpO1xuICB9XG5cbiAgb3BlbkNoYW5nZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLnVpLm9wZW5DaGFuZ2UpIHRoaXMudWkub3BlbkNoYW5nZSh2YWx1ZSk7XG4gIH1cblxuICBzZWFyY2hDaGFuZ2UodGV4dDogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMudWkub25TZWFyY2gpIHtcbiAgICAgIHRoaXMudWkub25TZWFyY2godGV4dCkudGhlbigocmVzOiBTRlNjaGVtYUVudW1bXSkgPT4ge1xuICAgICAgICB0aGlzLmRhdGEgPSByZXM7XG4gICAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgc2Nyb2xsVG9Cb3R0b20oKSB7XG4gICAgaWYgKHRoaXMudWkuc2Nyb2xsVG9Cb3R0b20pIHRoaXMudWkuc2Nyb2xsVG9Cb3R0b20oKTtcbiAgfVxufVxuIl19