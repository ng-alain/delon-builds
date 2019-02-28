/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { getData } from '../../utils';
import { ControlWidget } from '../../widget';
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
        this.styleType = (this.ui.styleType || 'default') === 'default';
        getData(this.schema, this.ui, this.formProperty.formData).subscribe((/**
         * @param {?} list
         * @return {?}
         */
        list => (this.data = list)));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    _setValue(value) {
        this.setValue(value);
        if (this.ui.change)
            this.ui.change(value);
    }
}
RadioWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-radio',
                template: "<sf-item-wrap [id]=\"id\"\n              [schema]=\"schema\"\n              [ui]=\"ui\"\n              [showError]=\"showError\"\n              [error]=\"error\"\n              [showTitle]=\"schema.title\">\n\n  <nz-radio-group [nzDisabled]=\"disabled\"\n                  [nzSize]=\"ui.size\"\n                  [nzName]=\"id\"\n                  [ngModel]=\"value\"\n                  (ngModelChange)=\"_setValue($event)\">\n    <ng-container *ngIf=\"styleType\">\n      <label *ngFor=\"let option of data\"\n             nz-radio\n             [nzValue]=\"option.value\"\n             [nzDisabled]=\"option.disabled\">\n        <span [innerHTML]=\"option.label\"></span>\n      </label>\n    </ng-container>\n    <ng-container *ngIf=\"!styleType\">\n      <label *ngFor=\"let option of data\"\n             nz-radio-button\n             [nzValue]=\"option.value\"\n             [nzDisabled]=\"option.disabled\">\n        <span [innerHTML]=\"option.label\"></span>\n      </label>\n    </ng-container>\n  </nz-radio-group>\n\n</sf-item-wrap>\n"
            }] }
];
if (false) {
    /** @type {?} */
    RadioWidget.prototype.data;
    /** @type {?} */
    RadioWidget.prototype.styleType;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8ud2lkZ2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0cy9yYWRpby9yYWRpby53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHMUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN0QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBTTdDLE1BQU0sT0FBTyxXQUFZLFNBQVEsYUFBYTtJQUo5Qzs7UUFLRSxTQUFJLEdBQW1CLEVBQUUsQ0FBQztJQVk1QixDQUFDOzs7OztJQVRDLEtBQUssQ0FBQyxLQUFjO1FBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsSUFBSSxTQUFTLENBQUMsS0FBSyxTQUFTLENBQUM7UUFDaEUsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsRUFBQyxDQUFDO0lBQ2xHLENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLEtBQWM7UUFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQixJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTTtZQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVDLENBQUM7OztZQWhCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLGlpQ0FBa0M7YUFDbkM7Ozs7SUFFQywyQkFBMEI7O0lBQzFCLGdDQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU0ZWYWx1ZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBTRlNjaGVtYUVudW0gfSBmcm9tICcuLi8uLi9zY2hlbWEvaW5kZXgnO1xuaW1wb3J0IHsgZ2V0RGF0YSB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1yYWRpbycsXG4gIHRlbXBsYXRlVXJsOiAnLi9yYWRpby53aWRnZXQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFJhZGlvV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCB7XG4gIGRhdGE6IFNGU2NoZW1hRW51bVtdID0gW107XG4gIHN0eWxlVHlwZTogYm9vbGVhbjtcblxuICByZXNldCh2YWx1ZTogU0ZWYWx1ZSkge1xuICAgIHRoaXMuc3R5bGVUeXBlID0gKHRoaXMudWkuc3R5bGVUeXBlIHx8ICdkZWZhdWx0JykgPT09ICdkZWZhdWx0JztcbiAgICBnZXREYXRhKHRoaXMuc2NoZW1hLCB0aGlzLnVpLCB0aGlzLmZvcm1Qcm9wZXJ0eS5mb3JtRGF0YSkuc3Vic2NyaWJlKGxpc3QgPT4gKHRoaXMuZGF0YSA9IGxpc3QpKTtcbiAgfVxuXG4gIF9zZXRWYWx1ZSh2YWx1ZTogU0ZWYWx1ZSkge1xuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICAgIGlmICh0aGlzLnVpLmNoYW5nZSkgdGhpcy51aS5jaGFuZ2UodmFsdWUpO1xuICB9XG59XG4iXX0=