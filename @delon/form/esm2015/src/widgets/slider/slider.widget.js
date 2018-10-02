/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { ControlWidget } from '../../widget';
export class SliderWidget extends ControlWidget {
    constructor() {
        super(...arguments);
        this._formatter = (value) => {
            if (this.ui["formatter"])
                return this.ui["formatter"](value);
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
        this.marks = this.ui["marks"] || null;
        /** @type {?} */
        const included = this.ui["included"];
        this.included = typeof included === 'undefined' ? true : included;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    _afterChange(value) {
        if (this.ui["afterChange"])
            this.ui["afterChange"](value);
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
  `,
                preserveWhitespaces: false
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9mb3JtLyIsInNvdXJjZXMiOlsic3JjL3dpZGdldHMvc2xpZGVyL3NsaWRlci53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQTJCN0MsTUFBTSxtQkFBb0IsU0FBUSxhQUFhOzs7MEJBaUJoQyxDQUFDLEtBQVUsRUFBRSxFQUFFO1lBQzFCLElBQUksSUFBSSxDQUFDLEVBQUU7Z0JBQVksT0FBTyxJQUFJLENBQUMsRUFBRSxjQUFXLEtBQUssQ0FBQyxDQUFDO1lBQ3ZELE9BQU8sS0FBSyxDQUFDO1NBQ2Q7Ozs7O0lBYkQsUUFBUTtRQUNOLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUksR0FBRyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDO1FBRXhDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEVBQUUsYUFBVSxJQUFJLENBQUM7O1FBQ25DLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxFQUFFLGFBQVU7UUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLFFBQVEsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO0tBQ25FOzs7OztJQU9ELFlBQVksQ0FBQyxLQUFVO1FBQ3JCLElBQUksSUFBSSxDQUFDLEVBQUU7WUFBYyxJQUFJLENBQUMsRUFBRSxnQkFBYSxLQUFLLENBQUMsQ0FBQztLQUNyRDs7O1lBakRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9CVDtnQkFDRCxtQkFBbUIsRUFBRSxLQUFLO2FBQzNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NmLXNsaWRlcicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8c2YtaXRlbS13cmFwIFtpZF09XCJpZFwiIFtzY2hlbWFdPVwic2NoZW1hXCIgW3VpXT1cInVpXCIgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIiBbZXJyb3JdPVwiZXJyb3JcIiBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiPlxyXG5cclxuICAgIDxuei1zbGlkZXJcclxuICAgICAgW25nTW9kZWxdPVwidmFsdWVcIlxyXG4gICAgICAobmdNb2RlbENoYW5nZSk9XCJzZXRWYWx1ZSgkZXZlbnQpXCJcclxuICAgICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICBbbnpSYW5nZV09XCJ1aS5yYW5nZVwiXHJcbiAgICAgIFtuek1pbl09XCJtaW5cIlxyXG4gICAgICBbbnpNYXhdPVwibWF4XCJcclxuICAgICAgW256U3RlcF09XCJzdGVwXCJcclxuICAgICAgW256TWFya3NdPVwibWFya3NcIlxyXG4gICAgICBbbnpEb3RzXT1cInVpLmRvdHNcIlxyXG4gICAgICBbbnpJbmNsdWRlZF09XCJpbmNsdWRlZFwiXHJcbiAgICAgIFtuelZlcnRpY2FsXT1cInVpLnZlcnRpY2FsXCJcclxuICAgICAgW256VGlwRm9ybWF0dGVyXT1cIl9mb3JtYXR0ZXJcIlxyXG4gICAgICAobnpPbkFmdGVyQ2hhbmdlKT1cIl9hZnRlckNoYW5nZSgkZXZlbnQpXCI+XHJcbiAgICA8L256LXNsaWRlcj5cclxuXHJcbiAgPC9zZi1pdGVtLXdyYXA+XHJcbiAgYCxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNsaWRlcldpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIG1pbjogbnVtYmVyO1xyXG4gIG1heDogbnVtYmVyO1xyXG4gIHN0ZXA6IG51bWJlcjtcclxuICBtYXJrczogYW55O1xyXG4gIGluY2x1ZGVkOiBib29sZWFuO1xyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMubWluID0gdGhpcy5zY2hlbWEubWluaW11bSB8fCAwO1xyXG4gICAgdGhpcy5tYXggPSB0aGlzLnNjaGVtYS5tYXhpbXVtIHx8IDEwMDtcclxuICAgIHRoaXMuc3RlcCA9IHRoaXMuc2NoZW1hLm11bHRpcGxlT2YgfHwgMTtcclxuXHJcbiAgICB0aGlzLm1hcmtzID0gdGhpcy51aS5tYXJrcyB8fCBudWxsO1xyXG4gICAgY29uc3QgaW5jbHVkZWQgPSB0aGlzLnVpLmluY2x1ZGVkO1xyXG4gICAgdGhpcy5pbmNsdWRlZCA9IHR5cGVvZiBpbmNsdWRlZCA9PT0gJ3VuZGVmaW5lZCcgPyB0cnVlIDogaW5jbHVkZWQ7XHJcbiAgfVxyXG5cclxuICBfZm9ybWF0dGVyID0gKHZhbHVlOiBhbnkpID0+IHtcclxuICAgIGlmICh0aGlzLnVpLmZvcm1hdHRlcikgcmV0dXJuIHRoaXMudWkuZm9ybWF0dGVyKHZhbHVlKTtcclxuICAgIHJldHVybiB2YWx1ZTtcclxuICB9XHJcblxyXG4gIF9hZnRlckNoYW5nZSh2YWx1ZTogYW55KSB7XHJcbiAgICBpZiAodGhpcy51aS5hZnRlckNoYW5nZSkgdGhpcy51aS5hZnRlckNoYW5nZSh2YWx1ZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==