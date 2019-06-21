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
     * @param {?} value
     * @return {?}
     */
    reset(value) {
        this.inited = false;
        getData(this.schema, this.ui, value).subscribe((/**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gud2lkZ2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0cy9jaGVja2JveC9jaGVja2JveC53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHN0QsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN0QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBUTdDLE1BQU0sT0FBTyxjQUFlLFNBQVEsYUFBYTtJQU5qRDs7UUFPRSxTQUFJLEdBQW1CLEVBQUUsQ0FBQztRQUMxQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBRXRCLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFDeEIsV0FBTSxHQUFHLEtBQUssQ0FBQztJQXdEakIsQ0FBQzs7Ozs7SUF0REMsS0FBSyxDQUFDLEtBQWM7UUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQyxTQUFTOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUU7WUFDcEQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDakIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDeEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFBLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFVLENBQUMsQ0FBQztZQUN6RSxJQUFJLENBQUMsU0FBUyxHQUFH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QUUsYUFBYTtnQkFDdkIsOHpFQUFxQztnQkFDckMsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7Ozs7SUFFQyw4QkFBMEI7O0lBQzFCLG9DQUFtQjs7SUFDbkIsdUNBQXNCOztJQUN0QixtQ0FBa0I7O0lBQ2xCLG9DQUF3Qjs7SUFDeEIsZ0NBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTRlZhbHVlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlJztcbmltcG9ydCB7IFNGU2NoZW1hRW51bSB9IGZyb20gJy4uLy4uL3NjaGVtYSc7XG5pbXBvcnQgeyBnZXREYXRhIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLWNoZWNrYm94JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NoZWNrYm94LndpZGdldC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrYm94V2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCB7XG4gIGRhdGE6IFNGU2NoZW1hRW51bVtdID0gW107XG4gIGFsbENoZWNrZWQgPSBmYWxzZTtcbiAgaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICBncmlkX3NwYW46IG51bWJlcjtcbiAgbGFiZWxUaXRsZTogc3RyaW5nID0gYGA7XG4gIGluaXRlZCA9IGZhbHNlO1xuXG4gIHJlc2V0KHZhbHVlOiBTRlZhbHVlKSB7XG4gICAgdGhpcy5pbml0ZWQgPSBmYWxzZTtcbiAgICBnZXREYXRhKHRoaXMuc2NoZW1hLCB0aGlzLnVpLCB2YWx1ZSkuc3Vic2NyaWJlKGxpc3QgPT4ge1xuICAgICAgdGhpcy5kYXRhID0gbGlzdDtcbiAgICAgIHRoaXMuYWxsQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5pbmRldGVybWluYXRlID0gZmFsc2U7XG4gICAgICB0aGlzLmxhYmVsVGl0bGUgPSBsaXN0Lmxlbmd0aCA9PT0gMCA/ICcnIDogKHRoaXMuc2NoZW1hLnRpdGxlIGFzIHN0cmluZyk7XG4gICAgICB0aGlzLmdyaWRfc3BhbiA9IHRoaXMudWkuc3BhbiAmJiB0aGlzLnVpLnNwYW4gPiAwID8gdGhpcy51aS5zcGFuIDogMDtcblxuICAgICAgdGhpcy51cGRhdGVBbGxDaGVja2VkKCk7XG4gICAgICB0aGlzLmluaXRlZCA9IHRydWU7XG4gICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIF9zZXRWYWx1ZSh2YWx1ZTogU0ZWYWx1ZSkge1xuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHRoaXMubm90aWZ5Q2hhbmdlKHZhbHVlKTtcbiAgfVxuXG4gIG5vdGlmeVNldCgpIHtcbiAgICBjb25zdCBjaGVja0xpc3QgPSB0aGlzLmRhdGEuZmlsdGVyKHcgPT4gdy5jaGVja2VkKTtcbiAgICB0aGlzLnVwZGF0ZUFsbENoZWNrZWQoKS5zZXRWYWx1ZShjaGVja0xpc3QubWFwKGl0ZW0gPT4gaXRlbS52YWx1ZSkpO1xuICAgIHRoaXMubm90aWZ5Q2hhbmdlKGNoZWNrTGlzdCk7XG4gIH1cblxuICBncm91cEluR3JpZENoYW5nZSh2YWx1ZXM6IFNGVmFsdWVbXSkge1xuICAgIHRoaXMuZGF0YS5mb3JFYWNoKGl0ZW0gPT4gKGl0ZW0uY2hlY2tlZCA9IHZhbHVlcy5pbmRleE9mKGl0ZW0udmFsdWUpICE9PSAtMSkpO1xuICAgIHRoaXMubm90aWZ5U2V0KCk7XG4gIH1cblxuICBvbkFsbENoZWNrZWQoKSB7XG4gICAgdGhpcy5kYXRhLmZvckVhY2goaXRlbSA9PiAoaXRlbS5jaGVja2VkID0gdGhpcy5hbGxDaGVja2VkKSk7XG4gICAgdGhpcy5ub3RpZnlTZXQoKTtcbiAgfVxuXG4gIHVwZGF0ZUFsbENoZWNrZWQoKTogdGhpcyB7XG4gICAgaWYgKHRoaXMuZGF0YS5ldmVyeShpdGVtID0+IGl0ZW0uY2hlY2tlZCAhPT0gdHJ1ZSkpIHtcbiAgICAgIHRoaXMuYWxsQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5pbmRldGVybWluYXRlID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmICh0aGlzLmRhdGEuZXZlcnkoaXRlbSA9PiBpdGVtLmNoZWNrZWQgPT09IHRydWUpKSB7XG4gICAgICB0aGlzLmFsbENoZWNrZWQgPSB0cnVlO1xuICAgICAgdGhpcy5pbmRldGVybWluYXRlID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5kZXRlcm1pbmF0ZSA9IHRydWU7XG4gICAgfVxuICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHJpdmF0ZSBub3RpZnlDaGFuZ2UocmVzOiBib29sZWFuIHwgU0ZTY2hlbWFFbnVtW10pIHtcbiAgICBpZiAodGhpcy51aS5jaGFuZ2UpIHRoaXMudWkuY2hhbmdlKHJlcyk7XG4gIH1cbn1cbiJdfQ==