/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { ControlWidget } from '../../widget';
import { getData } from '../../utils';
export class CheckboxWidget extends ControlWidget {
    constructor() {
        super(...arguments);
        this.data = [];
        this.allChecked = false;
        this.indeterminate = false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    reset(value) {
        getData(this.schema, this.ui, this.formProperty.formData).subscribe(list => {
            this.data = list;
            this.label = this.ui.spanLabel;
            this.control = this.ui.spanControl;
            if (list.length === 0) {
                this.label = null;
                this.offset = this.ui.spanLabel;
            }
            this.grid_span = this.ui["span"] && this.ui["span"] > 0 ? this.ui["span"] : 0;
            this.updateAllChecked();
        });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    _setValue(value) {
        this.setValue(value);
        this.detectChanges();
        this.notifyChange(value);
    }
    /**
     * @return {?}
     */
    notifySet() {
        /** @type {?} */
        const checkList = this.data.filter(w => w.checked);
        this.updateAllChecked().setValue(checkList.map(item => item.value));
        this.notifyChange(checkList);
    }
    /**
     * @param {?} values
     * @return {?}
     */
    groupInGridChange(values) {
        this.data.forEach(item => (item.checked = values.indexOf(item.value) !== -1));
        this.notifySet();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onAllChecked(e) {
        e.stopPropagation();
        this.data.forEach(item => (item.checked = this.allChecked));
        this.notifySet();
    }
    /**
     * @return {?}
     */
    updateAllChecked() {
        if (this.data.every(item => item.checked === false)) {
            this.allChecked = false;
            this.indeterminate = false;
        }
        else if (this.data.every(item => item.checked === true)) {
            this.allChecked = true;
            this.indeterminate = false;
        }
        else {
            this.indeterminate = true;
        }
        this.detectChanges();
        return this;
    }
    /**
     * @param {?} res
     * @return {?}
     */
    notifyChange(res) {
        if (this.ui["change"])
            this.ui["change"](res);
    }
}
CheckboxWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-checkbox',
                template: `
  <ng-template #all>
    <label *ngIf="ui.checkAll" nz-checkbox class="mr-sm"
      [(ngModel)]="allChecked"
      [nzIndeterminate]="indeterminate"
      (click)="onAllChecked($event)">
      {{ ui.checkAllText || '全选' }}
    </label>
  </ng-template>
  <nz-form-item [style.width.px]="ui.width">
    <nz-col *ngIf="data.length > 0" [nzSpan]="label" class="ant-form-item-label">
      <label [attr.for]="id" [class.ant-form-item-required]="ui._required">
        {{ schema.title }}
        <span class="optional">
          {{ ui.optional }}
          <nz-tooltip *ngIf="ui.optionalHelp" [nzTitle]="ui.optionalHelp">
            <i nz-tooltip class="anticon anticon-question-circle-o"></i>
          </nz-tooltip>
        </span>
      </label>
    </nz-col>
    <nz-col class="ant-form-item-control-wrapper" [nzSpan]="control" [nzOffset]="offset">
      <div class="ant-form-item-control" [class.has-error]="showError">

          <ng-container *ngIf="data.length === 0">
            <label nz-checkbox
              [nzDisabled]="disabled"
              [ngModel]="value"
              (ngModelChange)="_setValue($event)">
              <span [innerHTML]="schema.title"></span>
              <span class="optional">
                {{ ui.optional }}
                <nz-tooltip *ngIf="ui.optionalHelp" [nzTitle]="ui.optionalHelp">
                  <i nz-tooltip class="anticon anticon-question-circle-o"></i>
                </nz-tooltip>
              </span>
            </label>
          </ng-container>
          <ng-container *ngIf="data.length > 0">
            <ng-container *ngIf="grid_span === 0">
              <ng-template [ngTemplateOutlet]="all"></ng-template>
              <nz-checkbox-group [ngModel]="data" (ngModelChange)="notifySet()"></nz-checkbox-group>
            </ng-container>
            <ng-container *ngIf="grid_span !== 0">
              <nz-checkbox-wrapper class="checkbox-grid-list" (nzOnChange)="groupInGridChange($event)">
                <nz-row>
                  <nz-col [nzSpan]="grid_span" *ngIf="ui.checkAll">
                    <ng-template [ngTemplateOutlet]="all"></ng-template>
                  </nz-col>
                  <nz-col [nzSpan]="grid_span" *ngFor="let i of data">
                    <label nz-checkbox [nzValue]="i.value" [ngModel]="i.checked" [nzDisabled]="i.disabled">{{i.label}}</label>
                  </nz-col>
                </nz-row>
              </nz-checkbox-wrapper>
            </ng-container>
          </ng-container>

          <nz-form-extra *ngIf="schema.description" [innerHTML]="schema.description"></nz-form-extra>
          <nz-form-explain *ngIf="!ui.onlyVisual && showError">{{error}}</nz-form-explain>
      </div>
    </nz-col>
  </nz-form-item>
  `,
                preserveWhitespaces: false
            }] }
];
if (false) {
    /** @type {?} */
    CheckboxWidget.prototype.data;
    /** @type {?} */
    CheckboxWidget.prototype.allChecked;
    /** @type {?} */
    CheckboxWidget.prototype.indeterminate;
    /** @type {?} */
    CheckboxWidget.prototype.grid_span;
    /** @type {?} */
    CheckboxWidget.prototype.label;
    /** @type {?} */
    CheckboxWidget.prototype.control;
    /** @type {?} */
    CheckboxWidget.prototype.offset;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gud2lkZ2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0cy9jaGVja2JveC9jaGVja2JveC53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUM3QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBc0V0QyxNQUFNLHFCQUFzQixTQUFRLGFBQWE7OztvQkFDeEIsRUFBRTswQkFDWixLQUFLOzZCQUNGLEtBQUs7Ozs7OztJQU1yQixLQUFLLENBQUMsS0FBVTtRQUNkLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQ2pFLElBQUksQ0FBQyxFQUFFO1lBQ0wsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFFakIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztZQUMvQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO1lBQ25DLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2dCQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2FBQ2pDO1lBQ0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsRUFBRSxZQUFTLElBQUksQ0FBQyxFQUFFLFdBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxTQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDekIsQ0FDRixDQUFDO0tBQ0g7Ozs7O0lBRUQsU0FBUyxDQUFDLEtBQVU7UUFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUMxQjs7OztJQUVELFNBQVM7O1FBQ1AsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQzlCOzs7OztJQUVELGlCQUFpQixDQUFDLE1BQWE7UUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQ2YsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FDM0QsQ0FBQztRQUNGLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztLQUNsQjs7Ozs7SUFFRCxZQUFZLENBQUMsQ0FBUTtRQUNuQixDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0tBQ2xCOzs7O0lBRUQsZ0JBQWdCO1FBQ2QsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEtBQUssS0FBSyxDQUFDLEVBQUU7WUFDbkQsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDeEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7U0FDNUI7YUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsRUFBRTtZQUN6RCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztTQUM1QjthQUFNO1lBQ0wsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7U0FDM0I7UUFDRCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsT0FBTyxJQUFJLENBQUM7S0FDYjs7Ozs7SUFFTyxZQUFZLENBQUMsR0FBNkI7UUFDaEQsSUFBSSxJQUFJLENBQUMsRUFBRTtZQUFTLElBQUksQ0FBQyxFQUFFLFdBQVEsR0FBRyxDQUFDLENBQUM7Ozs7WUFySTNDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQThEVDtnQkFDRCxtQkFBbUIsRUFBRSxLQUFLO2FBQzNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xyXG5pbXBvcnQgeyBnZXREYXRhIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xyXG5pbXBvcnQgeyBTRlNjaGVtYUVudW0gfSBmcm9tICcuLi8uLi9zY2hlbWEnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzZi1jaGVja2JveCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8bmctdGVtcGxhdGUgI2FsbD5cclxuICAgIDxsYWJlbCAqbmdJZj1cInVpLmNoZWNrQWxsXCIgbnotY2hlY2tib3ggY2xhc3M9XCJtci1zbVwiXHJcbiAgICAgIFsobmdNb2RlbCldPVwiYWxsQ2hlY2tlZFwiXHJcbiAgICAgIFtuekluZGV0ZXJtaW5hdGVdPVwiaW5kZXRlcm1pbmF0ZVwiXHJcbiAgICAgIChjbGljayk9XCJvbkFsbENoZWNrZWQoJGV2ZW50KVwiPlxyXG4gICAgICB7eyB1aS5jaGVja0FsbFRleHQgfHwgJ+WFqOmAiScgfX1cclxuICAgIDwvbGFiZWw+XHJcbiAgPC9uZy10ZW1wbGF0ZT5cclxuICA8bnotZm9ybS1pdGVtIFtzdHlsZS53aWR0aC5weF09XCJ1aS53aWR0aFwiPlxyXG4gICAgPG56LWNvbCAqbmdJZj1cImRhdGEubGVuZ3RoID4gMFwiIFtuelNwYW5dPVwibGFiZWxcIiBjbGFzcz1cImFudC1mb3JtLWl0ZW0tbGFiZWxcIj5cclxuICAgICAgPGxhYmVsIFthdHRyLmZvcl09XCJpZFwiIFtjbGFzcy5hbnQtZm9ybS1pdGVtLXJlcXVpcmVkXT1cInVpLl9yZXF1aXJlZFwiPlxyXG4gICAgICAgIHt7IHNjaGVtYS50aXRsZSB9fVxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwib3B0aW9uYWxcIj5cclxuICAgICAgICAgIHt7IHVpLm9wdGlvbmFsIH19XHJcbiAgICAgICAgICA8bnotdG9vbHRpcCAqbmdJZj1cInVpLm9wdGlvbmFsSGVscFwiIFtuelRpdGxlXT1cInVpLm9wdGlvbmFsSGVscFwiPlxyXG4gICAgICAgICAgICA8aSBuei10b29sdGlwIGNsYXNzPVwiYW50aWNvbiBhbnRpY29uLXF1ZXN0aW9uLWNpcmNsZS1vXCI+PC9pPlxyXG4gICAgICAgICAgPC9uei10b29sdGlwPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9sYWJlbD5cclxuICAgIDwvbnotY29sPlxyXG4gICAgPG56LWNvbCBjbGFzcz1cImFudC1mb3JtLWl0ZW0tY29udHJvbC13cmFwcGVyXCIgW256U3Bhbl09XCJjb250cm9sXCIgW256T2Zmc2V0XT1cIm9mZnNldFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LWZvcm0taXRlbS1jb250cm9sXCIgW2NsYXNzLmhhcy1lcnJvcl09XCJzaG93RXJyb3JcIj5cclxuXHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZGF0YS5sZW5ndGggPT09IDBcIj5cclxuICAgICAgICAgICAgPGxhYmVsIG56LWNoZWNrYm94XHJcbiAgICAgICAgICAgICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICAgIFtuZ01vZGVsXT1cInZhbHVlXCJcclxuICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJfc2V0VmFsdWUoJGV2ZW50KVwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIFtpbm5lckhUTUxdPVwic2NoZW1hLnRpdGxlXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwib3B0aW9uYWxcIj5cclxuICAgICAgICAgICAgICAgIHt7IHVpLm9wdGlvbmFsIH19XHJcbiAgICAgICAgICAgICAgICA8bnotdG9vbHRpcCAqbmdJZj1cInVpLm9wdGlvbmFsSGVscFwiIFtuelRpdGxlXT1cInVpLm9wdGlvbmFsSGVscFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aSBuei10b29sdGlwIGNsYXNzPVwiYW50aWNvbiBhbnRpY29uLXF1ZXN0aW9uLWNpcmNsZS1vXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9uei10b29sdGlwPlxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImRhdGEubGVuZ3RoID4gMFwiPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZ3JpZF9zcGFuID09PSAwXCI+XHJcbiAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImFsbFwiPjwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgPG56LWNoZWNrYm94LWdyb3VwIFtuZ01vZGVsXT1cImRhdGFcIiAobmdNb2RlbENoYW5nZSk9XCJub3RpZnlTZXQoKVwiPjwvbnotY2hlY2tib3gtZ3JvdXA+XHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZ3JpZF9zcGFuICE9PSAwXCI+XHJcbiAgICAgICAgICAgICAgPG56LWNoZWNrYm94LXdyYXBwZXIgY2xhc3M9XCJjaGVja2JveC1ncmlkLWxpc3RcIiAobnpPbkNoYW5nZSk9XCJncm91cEluR3JpZENoYW5nZSgkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgICAgICA8bnotcm93PlxyXG4gICAgICAgICAgICAgICAgICA8bnotY29sIFtuelNwYW5dPVwiZ3JpZF9zcGFuXCIgKm5nSWY9XCJ1aS5jaGVja0FsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJhbGxcIj48L25nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgICA8L256LWNvbD5cclxuICAgICAgICAgICAgICAgICAgPG56LWNvbCBbbnpTcGFuXT1cImdyaWRfc3BhblwiICpuZ0Zvcj1cImxldCBpIG9mIGRhdGFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgbnotY2hlY2tib3ggW256VmFsdWVdPVwiaS52YWx1ZVwiIFtuZ01vZGVsXT1cImkuY2hlY2tlZFwiIFtuekRpc2FibGVkXT1cImkuZGlzYWJsZWRcIj57e2kubGFiZWx9fTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDwvbnotY29sPlxyXG4gICAgICAgICAgICAgICAgPC9uei1yb3c+XHJcbiAgICAgICAgICAgICAgPC9uei1jaGVja2JveC13cmFwcGVyPlxyXG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgICAgIDxuei1mb3JtLWV4dHJhICpuZ0lmPVwic2NoZW1hLmRlc2NyaXB0aW9uXCIgW2lubmVySFRNTF09XCJzY2hlbWEuZGVzY3JpcHRpb25cIj48L256LWZvcm0tZXh0cmE+XHJcbiAgICAgICAgICA8bnotZm9ybS1leHBsYWluICpuZ0lmPVwiIXVpLm9ubHlWaXN1YWwgJiYgc2hvd0Vycm9yXCI+e3tlcnJvcn19PC9uei1mb3JtLWV4cGxhaW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uei1jb2w+XHJcbiAgPC9uei1mb3JtLWl0ZW0+XHJcbiAgYCxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENoZWNrYm94V2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCB7XHJcbiAgZGF0YTogU0ZTY2hlbWFFbnVtW10gPSBbXTtcclxuICBhbGxDaGVja2VkID0gZmFsc2U7XHJcbiAgaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xyXG4gIGdyaWRfc3BhbjogbnVtYmVyO1xyXG4gIGxhYmVsOiBudW1iZXI7XHJcbiAgY29udHJvbDogbnVtYmVyO1xyXG4gIG9mZnNldDogbnVtYmVyO1xyXG5cclxuICByZXNldCh2YWx1ZTogYW55KSB7XHJcbiAgICBnZXREYXRhKHRoaXMuc2NoZW1hLCB0aGlzLnVpLCB0aGlzLmZvcm1Qcm9wZXJ0eS5mb3JtRGF0YSkuc3Vic2NyaWJlKFxyXG4gICAgICBsaXN0ID0+IHtcclxuICAgICAgICB0aGlzLmRhdGEgPSBsaXN0O1xyXG5cclxuICAgICAgICB0aGlzLmxhYmVsID0gdGhpcy51aS5zcGFuTGFiZWw7XHJcbiAgICAgICAgdGhpcy5jb250cm9sID0gdGhpcy51aS5zcGFuQ29udHJvbDtcclxuICAgICAgICBpZiAobGlzdC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgIHRoaXMubGFiZWwgPSBudWxsO1xyXG4gICAgICAgICAgdGhpcy5vZmZzZXQgPSB0aGlzLnVpLnNwYW5MYWJlbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ncmlkX3NwYW4gPSB0aGlzLnVpLnNwYW4gJiYgdGhpcy51aS5zcGFuID4gMCA/IHRoaXMudWkuc3BhbiA6IDA7XHJcbiAgICAgICAgdGhpcy51cGRhdGVBbGxDaGVja2VkKCk7XHJcbiAgICAgIH0sXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgX3NldFZhbHVlKHZhbHVlOiBhbnkpIHtcclxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xyXG4gICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB0aGlzLm5vdGlmeUNoYW5nZSh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBub3RpZnlTZXQoKSB7XHJcbiAgICBjb25zdCBjaGVja0xpc3QgPSB0aGlzLmRhdGEuZmlsdGVyKHcgPT4gdy5jaGVja2VkKTtcclxuICAgIHRoaXMudXBkYXRlQWxsQ2hlY2tlZCgpLnNldFZhbHVlKGNoZWNrTGlzdC5tYXAoaXRlbSA9PiBpdGVtLnZhbHVlKSk7XHJcbiAgICB0aGlzLm5vdGlmeUNoYW5nZShjaGVja0xpc3QpO1xyXG4gIH1cclxuXHJcbiAgZ3JvdXBJbkdyaWRDaGFuZ2UodmFsdWVzOiBhbnlbXSkge1xyXG4gICAgdGhpcy5kYXRhLmZvckVhY2goXHJcbiAgICAgIGl0ZW0gPT4gKGl0ZW0uY2hlY2tlZCA9IHZhbHVlcy5pbmRleE9mKGl0ZW0udmFsdWUpICE9PSAtMSksXHJcbiAgICApO1xyXG4gICAgdGhpcy5ub3RpZnlTZXQoKTtcclxuICB9XHJcblxyXG4gIG9uQWxsQ2hlY2tlZChlOiBFdmVudCkge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMuZGF0YS5mb3JFYWNoKGl0ZW0gPT4gKGl0ZW0uY2hlY2tlZCA9IHRoaXMuYWxsQ2hlY2tlZCkpO1xyXG4gICAgdGhpcy5ub3RpZnlTZXQoKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUFsbENoZWNrZWQoKTogdGhpcyB7XHJcbiAgICBpZiAodGhpcy5kYXRhLmV2ZXJ5KGl0ZW0gPT4gaXRlbS5jaGVja2VkID09PSBmYWxzZSkpIHtcclxuICAgICAgdGhpcy5hbGxDaGVja2VkID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmRhdGEuZXZlcnkoaXRlbSA9PiBpdGVtLmNoZWNrZWQgPT09IHRydWUpKSB7XHJcbiAgICAgIHRoaXMuYWxsQ2hlY2tlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMuaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pbmRldGVybWluYXRlID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG5vdGlmeUNoYW5nZShyZXM6IGJvb2xlYW4gfCBTRlNjaGVtYUVudW1bXSkge1xyXG4gICAgaWYgKHRoaXMudWkuY2hhbmdlKSB0aGlzLnVpLmNoYW5nZShyZXMpO1xyXG4gIH1cclxufVxyXG4iXX0=