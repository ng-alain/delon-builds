/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { ControlWidget } from '../../widget';
import { toBool } from '../../utils';
export class RateWidget extends ControlWidget {
    constructor() {
        super(...arguments);
        this.hasText = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.count = this.schema.maximum || 5;
        this.allowHalf = (this.schema.multipleOf || 0.5) === 0.5;
        this.allowClear = toBool(this.ui["allowClear"], true);
        this.autoFocus = toBool(this.ui["autoFocus"], false);
        this.hasText = !!this.ui["text"];
    }
    /**
     * @return {?}
     */
    genText() {
        return this.hasText
            ? (/** @type {?} */ (this.ui["text"])).replace('{{value}}', this.formProperty.value)
            : '';
    }
}
RateWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-rate',
                template: `
  <sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title">

    <nz-rate
      [nzDisabled]="disabled"
      [ngModel]="value"
      (ngModelChange)="setValue($event)"
      [nzAllowClear]="allowClear"
      [nzAllowHalf]="allowHalf"
      [nzAutoFocus]="autoFocus"
      [nzCount]="count"></nz-rate>
    <span *ngIf="hasText && formProperty.value" class="ant-rate-text">{{ genText() }}</span>

  </sf-item-wrap>
  `,
                preserveWhitespaces: false
            }] }
];
if (false) {
    /** @type {?} */
    RateWidget.prototype.count;
    /** @type {?} */
    RateWidget.prototype.allowHalf;
    /** @type {?} */
    RateWidget.prototype.allowClear;
    /** @type {?} */
    RateWidget.prototype.autoFocus;
    /** @type {?} */
    RateWidget.prototype.hasText;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0ZS53aWRnZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vZm9ybS8iLCJzb3VyY2VzIjpbInNyYy93aWRnZXRzL3JhdGUvcmF0ZS53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUM3QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBcUJyQyxNQUFNLGlCQUFrQixTQUFRLGFBQWE7Ozt1QkFLakMsS0FBSzs7Ozs7SUFDZixRQUFRO1FBQ04sSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxJQUFJLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQztRQUN6RCxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxnQkFBYSxJQUFJLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxlQUFZLEtBQUssQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQUssQ0FBQztLQUMvQjs7OztJQUVELE9BQU87UUFDTCxPQUFPLElBQUksQ0FBQyxPQUFPO1lBQ2pCLENBQUMsQ0FBQyxtQkFBQyxJQUFJLENBQUMsRUFBRSxRQUFlLEVBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO1lBQ3hFLENBQUMsQ0FBQyxFQUFFLENBQUM7S0FDUjs7O1lBckNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsU0FBUztnQkFDbkIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7OztHQWNUO2dCQUNELG1CQUFtQixFQUFFLEtBQUs7YUFDM0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5pbXBvcnQgeyB0b0Jvb2wgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLXJhdGUnLFxuICB0ZW1wbGF0ZTogYFxuICA8c2YtaXRlbS13cmFwIFtpZF09XCJpZFwiIFtzY2hlbWFdPVwic2NoZW1hXCIgW3VpXT1cInVpXCIgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIiBbZXJyb3JdPVwiZXJyb3JcIiBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiPlxuXG4gICAgPG56LXJhdGVcbiAgICAgIFtuekRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgIFtuZ01vZGVsXT1cInZhbHVlXCJcbiAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInNldFZhbHVlKCRldmVudClcIlxuICAgICAgW256QWxsb3dDbGVhcl09XCJhbGxvd0NsZWFyXCJcbiAgICAgIFtuekFsbG93SGFsZl09XCJhbGxvd0hhbGZcIlxuICAgICAgW256QXV0b0ZvY3VzXT1cImF1dG9Gb2N1c1wiXG4gICAgICBbbnpDb3VudF09XCJjb3VudFwiPjwvbnotcmF0ZT5cbiAgICA8c3BhbiAqbmdJZj1cImhhc1RleHQgJiYgZm9ybVByb3BlcnR5LnZhbHVlXCIgY2xhc3M9XCJhbnQtcmF0ZS10ZXh0XCI+e3sgZ2VuVGV4dCgpIH19PC9zcGFuPlxuXG4gIDwvc2YtaXRlbS13cmFwPlxuICBgLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgUmF0ZVdpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb3VudDogbnVtYmVyO1xuICBhbGxvd0hhbGY6IGJvb2xlYW47XG4gIGFsbG93Q2xlYXI6IGJvb2xlYW47XG4gIGF1dG9Gb2N1czogYm9vbGVhbjtcbiAgaGFzVGV4dCA9IGZhbHNlO1xuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNvdW50ID0gdGhpcy5zY2hlbWEubWF4aW11bSB8fCA1O1xuICAgIHRoaXMuYWxsb3dIYWxmID0gKHRoaXMuc2NoZW1hLm11bHRpcGxlT2YgfHwgMC41KSA9PT0gMC41O1xuICAgIHRoaXMuYWxsb3dDbGVhciA9IHRvQm9vbCh0aGlzLnVpLmFsbG93Q2xlYXIsIHRydWUpO1xuICAgIHRoaXMuYXV0b0ZvY3VzID0gdG9Cb29sKHRoaXMudWkuYXV0b0ZvY3VzLCBmYWxzZSk7XG4gICAgdGhpcy5oYXNUZXh0ID0gISF0aGlzLnVpLnRleHQ7XG4gIH1cblxuICBnZW5UZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmhhc1RleHRcbiAgICAgID8gKHRoaXMudWkudGV4dCBhcyBzdHJpbmcpLnJlcGxhY2UoJ3t7dmFsdWV9fScsIHRoaXMuZm9ybVByb3BlcnR5LnZhbHVlKVxuICAgICAgOiAnJztcbiAgfVxufVxuIl19