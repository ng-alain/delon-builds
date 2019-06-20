/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { getData } from '../../utils';
import { ControlWidget } from '../../widget';
export class CheckboxWidget extends ControlWidget {
    constructor() {
        super(...arguments);
        this.data = [];
        this.allChecked = false;
        this.indeterminate = false;
        this.labelTitle = ``;
        this.inited = false;
    }
    /**
     * @param {?} _value
     * @return {?}
     */
    reset(_value) {
        this.inited = false;
        getData(this.schema, this.ui, this.formProperty.formData).subscribe((/**
         * @param {?} list
         * @return {?}
         */
        list => {
            this.data = list;
            this.allChecked = false;
            this.indeterminate = false;
            this.labelTitle = list.length === 0 ? '' : ((/** @type {?} */ (this.schema.title)));
            this.grid_span = this.ui.span && this.ui.span > 0 ? this.ui.span : 0;
            this.updateAllChecked();
            this.inited = true;
            this.detectChanges();
        }));
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
        const checkList = this.data.filter((/**
         * @param {?} w
         * @return {?}
         */
        w => w.checked));
        this.updateAllChecked().setValue(checkList.map((/**
         * @param {?} item
         * @return {?}
         */
        item => item.value)));
        this.notifyChange(checkList);
    }
    /**
     * @param {?} values
     * @return {?}
     */
    groupInGridChange(values) {
        this.data.forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => (item.checked = values.indexOf(item.value) !== -1)));
        this.notifySet();
    }
    /**
     * @return {?}
     */
    onAllChecked() {
        this.data.forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => (item.checked = this.allChecked)));
        this.notifySet();
    }
    /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    updateAllChecked() {
        if ((/** @type {?} */ (this)).data.every((/**
         * @param {?} item
         * @return {?}
         */
        item => item.checked !== true))) {
            (/** @type {?} */ (this)).allChecked = false;
            (/** @type {?} */ (this)).indeterminate = false;
        }
        else if ((/** @type {?} */ (this)).data.every((/**
         * @param {?} item
         * @return {?}
         */
        item => item.checked === true))) {
            (/** @type {?} */ (this)).allChecked = true;
            (/** @type {?} */ (this)).indeterminate = false;
        }
        else {
            (/** @type {?} */ (this)).indeterminate = true;
        }
        (/** @type {?} */ (this)).detectChanges();
        return (/** @type {?} */ (this));
    }
    /**
     * @private
     * @param {?} res
     * @return {?}
     */
    notifyChange(res) {
        if (this.ui.change)
            this.ui.change(res);
    }
}
CheckboxWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-checkbox',
                template: "<ng-template #all>\n  <label *ngIf=\"ui.checkAll\"\n         nz-checkbox\n         class=\"sf__checkbox-all mr-sm\"\n         [(ngModel)]=\"allChecked\"\n         (ngModelChange)=\"onAllChecked()\"\n         [nzIndeterminate]=\"indeterminate\">{{ ui.checkAllText || l.checkAllText }}</label>\n</ng-template>\n<sf-item-wrap [id]=\"id\"\n              [schema]=\"schema\"\n              [ui]=\"ui\"\n              [showError]=\"showError\"\n              [error]=\"error\"\n              [showTitle]=\"true\"\n              [title]=\"labelTitle\">\n  <ng-container *ngIf=\"inited && data.length === 0\">\n    <label nz-checkbox\n           [nzDisabled]=\"disabled\"\n           [ngModel]=\"value\"\n           (ngModelChange)=\"_setValue($event)\">\n      {{schema.title}}\n      <span class=\"sf__optional\">\n        {{ ui.optional }}\n        <nz-tooltip *ngIf=\"oh\"\n          [nzTitle]=\"oh.text\" [nzPlacement]=\"oh.placement\" [nzTrigger]=\"oh.trigger\"\n          [nzOverlayClassName]=\"oh.overlayClassName\" [nzOverlayStyle]=\"oh.overlayStyle\"\n          [nzMouseEnterDelay]=\"oh.mouseEnterDelay\" [nzMouseLeaveDelay]=\"oh.mouseLeaveDelay\">\n          <i nz-tooltip nz-icon [nzType]=\"oh.icon\"></i>\n        </nz-tooltip>\n      </span>\n    </label>\n  </ng-container>\n  <ng-container *ngIf=\"inited && data.length > 0\">\n    <ng-container *ngIf=\"grid_span === 0\">\n      <ng-template [ngTemplateOutlet]=\"all\"></ng-template>\n      <nz-checkbox-group [ngModel]=\"data\"\n                         (ngModelChange)=\"notifySet()\"></nz-checkbox-group>\n    </ng-container>\n    <ng-container *ngIf=\"grid_span !== 0\">\n      <nz-checkbox-wrapper class=\"sf__checkbox-list\"\n                           (nzOnChange)=\"groupInGridChange($event)\">\n        <nz-row>\n          <nz-col [nzSpan]=\"grid_span\"\n                  *ngIf=\"ui.checkAll\">\n            <ng-template [ngTemplateOutlet]=\"all\"></ng-template>\n          </nz-col>\n          <nz-col [nzSpan]=\"grid_span\"\n                  *ngFor=\"let i of data\">\n            <label nz-checkbox\n                   [nzValue]=\"i.value\"\n                   [ngModel]=\"i.checked\"\n                   [nzDisabled]=\"i.disabled\">{{i.label}}</label>\n          </nz-col>\n        </nz-row>\n      </nz-checkbox-wrapper>\n    </ng-container>\n  </ng-container>\n</sf-item-wrap>\n",
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None
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
    CheckboxWidget.prototype.labelTitle;
    /** @type {?} */
    CheckboxWidget.prototype.inited;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gud2lkZ2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0cy9jaGVja2JveC9jaGVja2JveC53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHN0QsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN0QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBUTdDLE1BQU0sT0FBTyxjQUFlLFNBQVEsYUFBYTtJQU5qRDs7UUFPRSxTQUFJLEdBQW1CLEVBQUUsQ0FBQztRQUMxQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBRXRCLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFDeEIsV0FBTSxHQUFHLEtBQUssQ0FBQztJQXdEakIsQ0FBQzs7Ozs7SUF0REMsS0FBSyxDQUFDLE1BQWU7UUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxJQUFJLENBQUMsRUFBRTtZQUN6RSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNqQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUN4QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQUEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQVUsQ0FBQyxDQUFDO1lBQ3pFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRXJFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25CLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN2QixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLEtBQWM7UUFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQsU0FBUzs7Y0FDRCxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFDO1FBQ2xELElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRzs7OztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7OztJQUVELGlCQUFpQixDQUFDLE1BQWlCO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTzs7OztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztRQUM5RSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU87Ozs7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7Ozs7O0lBRUQsZ0JBQWdCO1FBQ2QsSUFBSSxtQkFBQSxJQUFJLEVBQUEsQ0FBQyxJQUFJLENBQUMsS0FBSzs7OztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sS0FBSyxJQUFJLEVBQUMsRUFBRTtZQUNsRCxtQkFBQSxJQUFJLEVBQUEsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLG1CQUFBLElBQUksRUFBQSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7U0FDNUI7YUFBTSxJQUFJLG1CQUFBLElBQUksRUFBQSxDQUFDLElBQUksQ0FBQyxLQUFLOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxLQUFLLElBQUksRUFBQyxFQUFFO1lBQ3pELG1CQUFBLElBQUksRUFBQSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDdkIsbUJBQUEsSUFBSSxFQUFBLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztTQUM1QjthQUFNO1lBQ0wsbUJBQUEsSUFBSSxFQUFBLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztTQUMzQjtRQUNELG1CQUFBLElBQUksRUFBQSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLE9BQU8sbUJBQUEsSUFBSSxFQUFBLENBQUM7SUFDZCxDQUFDOzs7Ozs7SUFFTyxZQUFZLENBQUMsR0FBNkI7UUFDaEQsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU07WUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7WUFuRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2Qiw4ekVBQXFDO2dCQUNyQyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0Qzs7OztJQUVDLDhCQUEwQjs7SUFDMUIsb0NBQW1COztJQUNuQix1Q0FBc0I7O0lBQ3RCLG1DQUFrQjs7SUFDbEIsb0NBQXdCOztJQUN4QixnQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNGVmFsdWUgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgU0ZTY2hlbWFFbnVtIH0gZnJvbSAnLi4vLi4vc2NoZW1hJztcbmltcG9ydCB7IGdldERhdGEgfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtY2hlY2tib3gnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2hlY2tib3gud2lkZ2V0Lmh0bWwnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hXaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IHtcbiAgZGF0YTogU0ZTY2hlbWFFbnVtW10gPSBbXTtcbiAgYWxsQ2hlY2tlZCA9IGZhbHNlO1xuICBpbmRldGVybWluYXRlID0gZmFsc2U7XG4gIGdyaWRfc3BhbjogbnVtYmVyO1xuICBsYWJlbFRpdGxlOiBzdHJpbmcgPSBgYDtcbiAgaW5pdGVkID0gZmFsc2U7XG5cbiAgcmVzZXQoX3ZhbHVlOiBTRlZhbHVlKSB7XG4gICAgdGhpcy5pbml0ZWQgPSBmYWxzZTtcbiAgICBnZXREYXRhKHRoaXMuc2NoZW1hLCB0aGlzLnVpLCB0aGlzLmZvcm1Qcm9wZXJ0eS5mb3JtRGF0YSkuc3Vic2NyaWJlKGxpc3QgPT4ge1xuICAgICAgdGhpcy5kYXRhID0gbGlzdDtcbiAgICAgIHRoaXMuYWxsQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5pbmRldGVybWluYXRlID0gZmFsc2U7XG4gICAgICB0aGlzLmxhYmVsVGl0bGUgPSBsaXN0Lmxlbmd0aCA9PT0gMCA/ICcnIDogKHRoaXMuc2NoZW1hLnRpdGxlIGFzIHN0cmluZyk7XG4gICAgICB0aGlzLmdyaWRfc3BhbiA9IHRoaXMudWkuc3BhbiAmJiB0aGlzLnVpLnNwYW4gPiAwID8gdGhpcy51aS5zcGFuIDogMDtcblxuICAgICAgdGhpcy51cGRhdGVBbGxDaGVja2VkKCk7XG4gICAgICB0aGlzLmluaXRlZCA9IHRydWU7XG4gICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIF9zZXRWYWx1ZSh2YWx1ZTogU0ZWYWx1ZSkge1xuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHRoaXMubm90aWZ5Q2hhbmdlKHZhbHVlKTtcbiAgfVxuXG4gIG5vdGlmeVNldCgpIHtcbiAgICBjb25zdCBjaGVja0xpc3QgPSB0aGlzLmRhdGEuZmlsdGVyKHcgPT4gdy5jaGVja2VkKTtcbiAgICB0aGlzLnVwZGF0ZUFsbENoZWNrZWQoKS5zZXRWYWx1ZShjaGVja0xpc3QubWFwKGl0ZW0gPT4gaXRlbS52YWx1ZSkpO1xuICAgIHRoaXMubm90aWZ5Q2hhbmdlKGNoZWNrTGlzdCk7XG4gIH1cblxuICBncm91cEluR3JpZENoYW5nZSh2YWx1ZXM6IFNGVmFsdWVbXSkge1xuICAgIHRoaXMuZGF0YS5mb3JFYWNoKGl0ZW0gPT4gKGl0ZW0uY2hlY2tlZCA9IHZhbHVlcy5pbmRleE9mKGl0ZW0udmFsdWUpICE9PSAtMSkpO1xuICAgIHRoaXMubm90aWZ5U2V0KCk7XG4gIH1cblxuICBvbkFsbENoZWNrZWQoKSB7XG4gICAgdGhpcy5kYXRhLmZvckVhY2goaXRlbSA9PiAoaXRlbS5jaGVja2VkID0gdGhpcy5hbGxDaGVja2VkKSk7XG4gICAgdGhpcy5ub3RpZnlTZXQoKTtcbiAgfVxuXG4gIHVwZGF0ZUFsbENoZWNrZWQoKTogdGhpcyB7XG4gICAgaWYgKHRoaXMuZGF0YS5ldmVyeShpdGVtID0+IGl0ZW0uY2hlY2tlZCAhPT0gdHJ1ZSkpIHtcbiAgICAgIHRoaXMuYWxsQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5pbmRldGVybWluYXRlID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmICh0aGlzLmRhdGEuZXZlcnkoaXRlbSA9PiBpdGVtLmNoZWNrZWQgPT09IHRydWUpKSB7XG4gICAgICB0aGlzLmFsbENoZWNrZWQgPSB0cnVlO1xuICAgICAgdGhpcy5pbmRldGVybWluYXRlID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5kZXRlcm1pbmF0ZSA9IHRydWU7XG4gICAgfVxuICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHJpdmF0ZSBub3RpZnlDaGFuZ2UocmVzOiBib29sZWFuIHwgU0ZTY2hlbWFFbnVtW10pIHtcbiAgICBpZiAodGhpcy51aS5jaGFuZ2UpIHRoaXMudWkuY2hhbmdlKHJlcyk7XG4gIH1cbn1cbiJdfQ==