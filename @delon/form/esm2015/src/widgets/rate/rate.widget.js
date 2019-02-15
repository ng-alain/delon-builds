/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { toBool } from '../../utils';
import { ControlWidget } from '../../widget';
export class RateWidget extends ControlWidget {
    constructor() {
        super(...arguments);
        this.hasText = false;
    }
    /**
     * @return {?}
     */
    get text() {
        return this.hasText
            ? ((/** @type {?} */ (this.ui.text))).replace('{{value}}', this.formProperty.value)
            : '';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.count = this.schema.maximum || 5;
        this.allowHalf = (this.schema.multipleOf || 0.5) === 0.5;
        this.allowClear = toBool(this.ui.allowClear, true);
        this.autoFocus = toBool(this.ui.autoFocus, false);
        this.hasText = !!this.ui.text;
    }
}
RateWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-rate',
                template: "<sf-item-wrap [id]=\"id\"\n              [schema]=\"schema\"\n              [ui]=\"ui\"\n              [showError]=\"showError\"\n              [error]=\"error\"\n              [showTitle]=\"schema.title\">\n  <nz-rate [nzDisabled]=\"disabled\"\n           [ngModel]=\"value\"\n           (ngModelChange)=\"setValue($event)\"\n           [nzAllowClear]=\"allowClear\"\n           [nzAllowHalf]=\"allowHalf\"\n           [nzAutoFocus]=\"autoFocus\"\n           [nzCount]=\"count\"></nz-rate>\n  <span *ngIf=\"hasText && formProperty.value\"\n        class=\"ant-rate-text\">{{ text }}</span>\n</sf-item-wrap>\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0ZS53aWRnZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vZm9ybS8iLCJzb3VyY2VzIjpbInNyYy93aWRnZXRzL3JhdGUvcmF0ZS53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNyQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBTTdDLE1BQU0sT0FBTyxVQUFXLFNBQVEsYUFBYTtJQUo3Qzs7UUFTRSxZQUFPLEdBQUcsS0FBSyxDQUFDO0lBZWxCLENBQUM7Ozs7SUFiQyxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxPQUFPO1lBQ2pCLENBQUMsQ0FBQyxDQUFDLG1CQUFBLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO1lBQ3hFLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDVCxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsSUFBSSxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUM7UUFDekQsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFDaEMsQ0FBQzs7O1lBdkJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsU0FBUztnQkFDbkIsNm1CQUFpQzthQUNsQzs7OztJQUVDLDJCQUFjOztJQUNkLCtCQUFtQjs7SUFDbkIsZ0NBQW9COztJQUNwQiwrQkFBbUI7O0lBQ25CLDZCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0b0Jvb2wgfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtcmF0ZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9yYXRlLndpZGdldC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgUmF0ZVdpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb3VudDogbnVtYmVyO1xuICBhbGxvd0hhbGY6IGJvb2xlYW47XG4gIGFsbG93Q2xlYXI6IGJvb2xlYW47XG4gIGF1dG9Gb2N1czogYm9vbGVhbjtcbiAgaGFzVGV4dCA9IGZhbHNlO1xuXG4gIGdldCB0ZXh0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuaGFzVGV4dFxuICAgICAgPyAodGhpcy51aS50ZXh0IGFzIHN0cmluZykucmVwbGFjZSgne3t2YWx1ZX19JywgdGhpcy5mb3JtUHJvcGVydHkudmFsdWUpXG4gICAgICA6ICcnO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jb3VudCA9IHRoaXMuc2NoZW1hLm1heGltdW0gfHwgNTtcbiAgICB0aGlzLmFsbG93SGFsZiA9ICh0aGlzLnNjaGVtYS5tdWx0aXBsZU9mIHx8IDAuNSkgPT09IDAuNTtcbiAgICB0aGlzLmFsbG93Q2xlYXIgPSB0b0Jvb2wodGhpcy51aS5hbGxvd0NsZWFyLCB0cnVlKTtcbiAgICB0aGlzLmF1dG9Gb2N1cyA9IHRvQm9vbCh0aGlzLnVpLmF1dG9Gb2N1cywgZmFsc2UpO1xuICAgIHRoaXMuaGFzVGV4dCA9ICEhdGhpcy51aS50ZXh0O1xuICB9XG59XG4iXX0=