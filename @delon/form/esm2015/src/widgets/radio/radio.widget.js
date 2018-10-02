/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { ControlWidget } from '../../widget';
import { getData } from '../../utils';
export class RadioWidget extends ControlWidget {
    constructor() {
        super(...arguments);
        this.data = [];
    }
    /**
     * @param {?} value
     * @return {?}
     */
    reset(value) {
        this.styleType = (this.ui["styleType"] || 'default') === 'default';
        getData(this.schema, this.ui, this.formProperty.formData).subscribe(list => (this.data = list));
    }
}
RadioWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-radio',
                template: `
  <sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title">

    <nz-radio-group
      [nzDisabled]="disabled"
      [nzSize]="ui.size"
      [nzName]="id"
      [ngModel]="value"
      (ngModelChange)="setValue($event)">
      <ng-container *ngIf="styleType">
        <label *ngFor="let option of data"
          nz-radio
          [nzValue]="option.value"
          [nzDisabled]="option.disabled">
          <span [innerHTML]="option.label"></span>
        </label>
      </ng-container>
      <ng-container *ngIf="!styleType">
        <label *ngFor="let option of data"
          nz-radio-button
          [nzValue]="option.value"
          [nzDisabled]="option.disabled">
          <span [innerHTML]="option.label"></span>
        </label>
      </ng-container>
    </nz-radio-group>

  </sf-item-wrap>
  `,
                preserveWhitespaces: false
            }] }
];
if (false) {
    /** @type {?} */
    RadioWidget.prototype.data;
    /** @type {?} */
    RadioWidget.prototype.styleType;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8ud2lkZ2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0cy9yYWRpby9yYWRpby53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUM3QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBbUN0QyxNQUFNLGtCQUFtQixTQUFRLGFBQWE7OztvQkFDOUIsRUFBRTs7Ozs7O0lBR2hCLEtBQUssQ0FBQyxLQUFVO1FBQ2QsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLGlCQUFjLFNBQVMsQ0FBQyxLQUFLLFNBQVMsQ0FBQztRQUNoRSxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUNqRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FDM0IsQ0FBQztLQUNIOzs7WUExQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUNwQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E0QlQ7Z0JBQ0QsbUJBQW1CLEVBQUUsS0FBSzthQUMzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcclxuaW1wb3J0IHsgZ2V0RGF0YSB9IGZyb20gJy4uLy4uL3V0aWxzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc2YtcmFkaW8nLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cclxuXHJcbiAgICA8bnotcmFkaW8tZ3JvdXBcclxuICAgICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICBbbnpTaXplXT1cInVpLnNpemVcIlxyXG4gICAgICBbbnpOYW1lXT1cImlkXCJcclxuICAgICAgW25nTW9kZWxdPVwidmFsdWVcIlxyXG4gICAgICAobmdNb2RlbENoYW5nZSk9XCJzZXRWYWx1ZSgkZXZlbnQpXCI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJzdHlsZVR5cGVcIj5cclxuICAgICAgICA8bGFiZWwgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBkYXRhXCJcclxuICAgICAgICAgIG56LXJhZGlvXHJcbiAgICAgICAgICBbbnpWYWx1ZV09XCJvcHRpb24udmFsdWVcIlxyXG4gICAgICAgICAgW256RGlzYWJsZWRdPVwib3B0aW9uLmRpc2FibGVkXCI+XHJcbiAgICAgICAgICA8c3BhbiBbaW5uZXJIVE1MXT1cIm9wdGlvbi5sYWJlbFwiPjwvc3Bhbj5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFzdHlsZVR5cGVcIj5cclxuICAgICAgICA8bGFiZWwgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBkYXRhXCJcclxuICAgICAgICAgIG56LXJhZGlvLWJ1dHRvblxyXG4gICAgICAgICAgW256VmFsdWVdPVwib3B0aW9uLnZhbHVlXCJcclxuICAgICAgICAgIFtuekRpc2FibGVkXT1cIm9wdGlvbi5kaXNhYmxlZFwiPlxyXG4gICAgICAgICAgPHNwYW4gW2lubmVySFRNTF09XCJvcHRpb24ubGFiZWxcIj48L3NwYW4+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8L256LXJhZGlvLWdyb3VwPlxyXG5cclxuICA8L3NmLWl0ZW0td3JhcD5cclxuICBgLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmFkaW9XaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IHtcclxuICBkYXRhOiBhbnlbXSA9IFtdO1xyXG4gIHN0eWxlVHlwZTogYm9vbGVhbjtcclxuXHJcbiAgcmVzZXQodmFsdWU6IGFueSkge1xyXG4gICAgdGhpcy5zdHlsZVR5cGUgPSAodGhpcy51aS5zdHlsZVR5cGUgfHwgJ2RlZmF1bHQnKSA9PT0gJ2RlZmF1bHQnO1xyXG4gICAgZ2V0RGF0YSh0aGlzLnNjaGVtYSwgdGhpcy51aSwgdGhpcy5mb3JtUHJvcGVydHkuZm9ybURhdGEpLnN1YnNjcmliZShcclxuICAgICAgbGlzdCA9PiAodGhpcy5kYXRhID0gbGlzdCksXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=