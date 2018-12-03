/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { ControlWidget } from '../../widget';
export class SliderWidget extends ControlWidget {
    constructor() {
        super(...arguments);
        this._formatter = (value) => {
            if (this.ui.formatter)
                return this.ui.formatter(value);
            return value;
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.min = this.schema.minimum || 0;
        this.max = this.schema.maximum || 100;
        this.step = this.schema.multipleOf || 1;
        this.marks = this.ui.marks || null;
        /** @type {?} */
        const included = this.ui.included;
        this.included = typeof included === 'undefined' ? true : included;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    _afterChange(value) {
        if (this.ui.afterChange)
            this.ui.afterChange(value);
    }
}
SliderWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-slider',
                template: `
  <sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title">

    <nz-slider
      [ngModel]="value"
      (ngModelChange)="setValue($event)"
      [nzDisabled]="disabled"
      [nzRange]="ui.range"
      [nzMin]="min"
      [nzMax]="max"
      [nzStep]="step"
      [nzMarks]="marks"
      [nzDots]="ui.dots"
      [nzIncluded]="included"
      [nzVertical]="ui.vertical"
      [nzTipFormatter]="_formatter"
      (nzOnAfterChange)="_afterChange($event)">
    </nz-slider>

  </sf-item-wrap>
  `
            }] }
];
if (false) {
    /** @type {?} */
    SliderWidget.prototype.min;
    /** @type {?} */
    SliderWidget.prototype.max;
    /** @type {?} */
    SliderWidget.prototype.step;
    /** @type {?} */
    SliderWidget.prototype.marks;
    /** @type {?} */
    SliderWidget.prototype.included;
    /** @type {?} */
    SliderWidget.prototype._formatter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9mb3JtLyIsInNvdXJjZXMiOlsic3JjL3dpZGdldHMvc2xpZGVyL3NsaWRlci53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQTBCN0MsTUFBTSxPQUFPLFlBQWEsU0FBUSxhQUFhO0lBeEIvQzs7UUF5Q0UsZUFBVSxHQUFHLENBQUMsS0FBYSxFQUFFLEVBQUU7WUFDN0IsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVM7Z0JBQUUsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN2RCxPQUFPLEtBQUssQ0FBQztRQUNmLENBQUMsQ0FBQTtJQUtILENBQUM7Ozs7SUFsQkMsUUFBUTtRQUNOLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUksR0FBRyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDO1FBRXhDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDOztjQUM3QixRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRO1FBQ2pDLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxRQUFRLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztJQUNwRSxDQUFDOzs7OztJQU9ELFlBQVksQ0FBQyxLQUFrQjtRQUM3QixJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVztZQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RELENBQUM7OztZQWhERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQlQ7YUFDRjs7OztJQUVDLDJCQUFZOztJQUNaLDJCQUFZOztJQUNaLDRCQUFhOztJQUNiLDZCQUFhOztJQUNiLGdDQUFrQjs7SUFZbEIsa0NBR0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWFya3MsIFNsaWRlclZhbHVlIH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2Ytc2xpZGVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cblxuICAgIDxuei1zbGlkZXJcbiAgICAgIFtuZ01vZGVsXT1cInZhbHVlXCJcbiAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInNldFZhbHVlKCRldmVudClcIlxuICAgICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgW256UmFuZ2VdPVwidWkucmFuZ2VcIlxuICAgICAgW256TWluXT1cIm1pblwiXG4gICAgICBbbnpNYXhdPVwibWF4XCJcbiAgICAgIFtuelN0ZXBdPVwic3RlcFwiXG4gICAgICBbbnpNYXJrc109XCJtYXJrc1wiXG4gICAgICBbbnpEb3RzXT1cInVpLmRvdHNcIlxuICAgICAgW256SW5jbHVkZWRdPVwiaW5jbHVkZWRcIlxuICAgICAgW256VmVydGljYWxdPVwidWkudmVydGljYWxcIlxuICAgICAgW256VGlwRm9ybWF0dGVyXT1cIl9mb3JtYXR0ZXJcIlxuICAgICAgKG56T25BZnRlckNoYW5nZSk9XCJfYWZ0ZXJDaGFuZ2UoJGV2ZW50KVwiPlxuICAgIDwvbnotc2xpZGVyPlxuXG4gIDwvc2YtaXRlbS13cmFwPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBTbGlkZXJXaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IGltcGxlbWVudHMgT25Jbml0IHtcbiAgbWluOiBudW1iZXI7XG4gIG1heDogbnVtYmVyO1xuICBzdGVwOiBudW1iZXI7XG4gIG1hcmtzOiBNYXJrcztcbiAgaW5jbHVkZWQ6IGJvb2xlYW47XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5taW4gPSB0aGlzLnNjaGVtYS5taW5pbXVtIHx8IDA7XG4gICAgdGhpcy5tYXggPSB0aGlzLnNjaGVtYS5tYXhpbXVtIHx8IDEwMDtcbiAgICB0aGlzLnN0ZXAgPSB0aGlzLnNjaGVtYS5tdWx0aXBsZU9mIHx8IDE7XG5cbiAgICB0aGlzLm1hcmtzID0gdGhpcy51aS5tYXJrcyB8fCBudWxsO1xuICAgIGNvbnN0IGluY2x1ZGVkID0gdGhpcy51aS5pbmNsdWRlZDtcbiAgICB0aGlzLmluY2x1ZGVkID0gdHlwZW9mIGluY2x1ZGVkID09PSAndW5kZWZpbmVkJyA/IHRydWUgOiBpbmNsdWRlZDtcbiAgfVxuXG4gIF9mb3JtYXR0ZXIgPSAodmFsdWU6IG51bWJlcikgPT4ge1xuICAgIGlmICh0aGlzLnVpLmZvcm1hdHRlcikgcmV0dXJuIHRoaXMudWkuZm9ybWF0dGVyKHZhbHVlKTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBfYWZ0ZXJDaGFuZ2UodmFsdWU6IFNsaWRlclZhbHVlKSB7XG4gICAgaWYgKHRoaXMudWkuYWZ0ZXJDaGFuZ2UpIHRoaXMudWkuYWZ0ZXJDaGFuZ2UodmFsdWUpO1xuICB9XG59XG4iXX0=