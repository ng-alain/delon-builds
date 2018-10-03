/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { ArrayLayoutWidget } from '../../widget';
export class ArrayWidget extends ArrayLayoutWidget {
    constructor() {
        super(...arguments);
        this.arraySpan = 8;
    }
    /**
     * @return {?}
     */
    get addDisabled() {
        return (this.schema.maxItems &&
            (/** @type {?} */ (this.formProperty.properties)).length >= this.schema.maxItems);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.ui.grid && this.ui.grid.arraySpan)
            this.arraySpan = this.ui.grid.arraySpan;
        this.addTitle = this.ui.addTitle || '添加';
        this.addType = this.ui.addType || 'dashed';
        this.removeTitle =
            this.ui.removable === false ? null : this.ui.removeTitle || '移除';
    }
    /**
     * @return {?}
     */
    addItem() {
        this.formProperty.add(null);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    removeItem(index) {
        this.formProperty.remove(index);
    }
}
ArrayWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-array',
                template: `
  <nz-form-item>
    <nz-col *ngIf="schema.title" [nzSpan]="ui.spanLabel" class="ant-form-item-label">
      <label>
        {{ schema.title }}
        <span class="optional">
          {{ ui.optional }}
          <nz-tooltip *ngIf="ui.optionalHelp" [nzTitle]="ui.optionalHelp">
            <i nz-tooltip class="anticon anticon-question-circle-o"></i>
          </nz-tooltip>
        </span>
      </label>
      <div class="add">
        <button nz-button [nzType]="addType" [disabled]="addDisabled" (click)="addItem()" [innerHTML]="addTitle"></button>
      </div>
    </nz-col>
    <nz-col class="ant-form-item-control-wrapper" [nzSpan]="ui.spanControl" [nzOffset]="ui.offsetControl">
      <div class="ant-form-item-control" [class.has-error]="showError">

        <nz-row class="sf-array-container">
          <ng-container *ngFor="let i of formProperty.properties; let idx=index">
            <nz-col *ngIf="i.visible && !i.ui.hidden" [nzSpan]="arraySpan" [attr.data-index]="idx" class="sf-array-item">
              <nz-card>
                <sf-item [formProperty]="i"></sf-item>
                <span *ngIf="removeTitle" class="remove" (click)="removeItem(idx)" [attr.title]="removeTitle">
                  <i class="anticon anticon-delete"></i>
                </span>
              </nz-card>
            </nz-col>
          </ng-container>
        </nz-row>

        <nz-form-extra *ngIf="schema.description" [innerHTML]="schema.description"></nz-form-extra>
        <nz-form-explain *ngIf="!ui.onlyVisual && showError">{{error}}</nz-form-explain>

      </div>
    </nz-col>
  </nz-form-item>
  `
            }] }
];
if (false) {
    /** @type {?} */
    ArrayWidget.prototype.addTitle;
    /** @type {?} */
    ArrayWidget.prototype.addType;
    /** @type {?} */
    ArrayWidget.prototype.removeTitle;
    /** @type {?} */
    ArrayWidget.prototype.arraySpan;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXkud2lkZ2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0cy9hcnJheS9hcnJheS53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBNENqRCxNQUFNLGtCQUFtQixTQUFRLGlCQUFpQjs7O3lCQUlwQyxDQUFDOzs7OztJQUViLElBQUksV0FBVztRQUNiLE9BQU8sQ0FDTCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVE7WUFDcEIsbUJBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFtQixFQUFDLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUN2RSxDQUFDO0tBQ0g7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTO1lBQ3hDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBRTFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLElBQUksUUFBUSxDQUFDO1FBQzNDLElBQUksQ0FBQyxXQUFXO1lBQ2QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQztLQUNwRTs7OztJQUVELE9BQU87UUFDTCxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUM3Qjs7Ozs7SUFFRCxVQUFVLENBQUMsS0FBYTtRQUN0QixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNqQzs7O1lBdkVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXNDVDthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFycmF5TGF5b3V0V2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtYXJyYXknLFxuICB0ZW1wbGF0ZTogYFxuICA8bnotZm9ybS1pdGVtPlxuICAgIDxuei1jb2wgKm5nSWY9XCJzY2hlbWEudGl0bGVcIiBbbnpTcGFuXT1cInVpLnNwYW5MYWJlbFwiIGNsYXNzPVwiYW50LWZvcm0taXRlbS1sYWJlbFwiPlxuICAgICAgPGxhYmVsPlxuICAgICAgICB7eyBzY2hlbWEudGl0bGUgfX1cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJvcHRpb25hbFwiPlxuICAgICAgICAgIHt7IHVpLm9wdGlvbmFsIH19XG4gICAgICAgICAgPG56LXRvb2x0aXAgKm5nSWY9XCJ1aS5vcHRpb25hbEhlbHBcIiBbbnpUaXRsZV09XCJ1aS5vcHRpb25hbEhlbHBcIj5cbiAgICAgICAgICAgIDxpIG56LXRvb2x0aXAgY2xhc3M9XCJhbnRpY29uIGFudGljb24tcXVlc3Rpb24tY2lyY2xlLW9cIj48L2k+XG4gICAgICAgICAgPC9uei10b29sdGlwPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2xhYmVsPlxuICAgICAgPGRpdiBjbGFzcz1cImFkZFwiPlxuICAgICAgICA8YnV0dG9uIG56LWJ1dHRvbiBbbnpUeXBlXT1cImFkZFR5cGVcIiBbZGlzYWJsZWRdPVwiYWRkRGlzYWJsZWRcIiAoY2xpY2spPVwiYWRkSXRlbSgpXCIgW2lubmVySFRNTF09XCJhZGRUaXRsZVwiPjwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9uei1jb2w+XG4gICAgPG56LWNvbCBjbGFzcz1cImFudC1mb3JtLWl0ZW0tY29udHJvbC13cmFwcGVyXCIgW256U3Bhbl09XCJ1aS5zcGFuQ29udHJvbFwiIFtuek9mZnNldF09XCJ1aS5vZmZzZXRDb250cm9sXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LWZvcm0taXRlbS1jb250cm9sXCIgW2NsYXNzLmhhcy1lcnJvcl09XCJzaG93RXJyb3JcIj5cblxuICAgICAgICA8bnotcm93IGNsYXNzPVwic2YtYXJyYXktY29udGFpbmVyXCI+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaSBvZiBmb3JtUHJvcGVydHkucHJvcGVydGllczsgbGV0IGlkeD1pbmRleFwiPlxuICAgICAgICAgICAgPG56LWNvbCAqbmdJZj1cImkudmlzaWJsZSAmJiAhaS51aS5oaWRkZW5cIiBbbnpTcGFuXT1cImFycmF5U3BhblwiIFthdHRyLmRhdGEtaW5kZXhdPVwiaWR4XCIgY2xhc3M9XCJzZi1hcnJheS1pdGVtXCI+XG4gICAgICAgICAgICAgIDxuei1jYXJkPlxuICAgICAgICAgICAgICAgIDxzZi1pdGVtIFtmb3JtUHJvcGVydHldPVwiaVwiPjwvc2YtaXRlbT5cbiAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cInJlbW92ZVRpdGxlXCIgY2xhc3M9XCJyZW1vdmVcIiAoY2xpY2spPVwicmVtb3ZlSXRlbShpZHgpXCIgW2F0dHIudGl0bGVdPVwicmVtb3ZlVGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYW50aWNvbiBhbnRpY29uLWRlbGV0ZVwiPjwvaT5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvbnotY2FyZD5cbiAgICAgICAgICAgIDwvbnotY29sPlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8L256LXJvdz5cblxuICAgICAgICA8bnotZm9ybS1leHRyYSAqbmdJZj1cInNjaGVtYS5kZXNjcmlwdGlvblwiIFtpbm5lckhUTUxdPVwic2NoZW1hLmRlc2NyaXB0aW9uXCI+PC9uei1mb3JtLWV4dHJhPlxuICAgICAgICA8bnotZm9ybS1leHBsYWluICpuZ0lmPVwiIXVpLm9ubHlWaXN1YWwgJiYgc2hvd0Vycm9yXCI+e3tlcnJvcn19PC9uei1mb3JtLWV4cGxhaW4+XG5cbiAgICAgIDwvZGl2PlxuICAgIDwvbnotY29sPlxuICA8L256LWZvcm0taXRlbT5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgQXJyYXlXaWRnZXQgZXh0ZW5kcyBBcnJheUxheW91dFdpZGdldCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGFkZFRpdGxlOiBzdHJpbmc7XG4gIGFkZFR5cGU6IHN0cmluZztcbiAgcmVtb3ZlVGl0bGU6IHN0cmluZztcbiAgYXJyYXlTcGFuID0gODtcblxuICBnZXQgYWRkRGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuc2NoZW1hLm1heEl0ZW1zICYmXG4gICAgICAodGhpcy5mb3JtUHJvcGVydHkucHJvcGVydGllcyBhcyBhbnlbXSkubGVuZ3RoID49IHRoaXMuc2NoZW1hLm1heEl0ZW1zXG4gICAgKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnVpLmdyaWQgJiYgdGhpcy51aS5ncmlkLmFycmF5U3BhbilcbiAgICAgIHRoaXMuYXJyYXlTcGFuID0gdGhpcy51aS5ncmlkLmFycmF5U3BhbjtcblxuICAgIHRoaXMuYWRkVGl0bGUgPSB0aGlzLnVpLmFkZFRpdGxlIHx8ICfmt7vliqAnO1xuICAgIHRoaXMuYWRkVHlwZSA9IHRoaXMudWkuYWRkVHlwZSB8fCAnZGFzaGVkJztcbiAgICB0aGlzLnJlbW92ZVRpdGxlID1cbiAgICAgIHRoaXMudWkucmVtb3ZhYmxlID09PSBmYWxzZSA/IG51bGwgOiB0aGlzLnVpLnJlbW92ZVRpdGxlIHx8ICfnp7vpmaQnO1xuICB9XG5cbiAgYWRkSXRlbSgpIHtcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5hZGQobnVsbCk7XG4gIH1cblxuICByZW1vdmVJdGVtKGluZGV4OiBudW1iZXIpIHtcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5yZW1vdmUoaW5kZXgpO1xuICB9XG59XG4iXX0=