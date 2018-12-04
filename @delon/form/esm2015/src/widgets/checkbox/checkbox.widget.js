/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
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
     * @return {?}
     */
    get l() {
        return this.formProperty.root.widget.sfComp.locale;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    reset(value) {
        this.inited = false;
        getData(this.schema, this.ui, this.formProperty.formData).subscribe(list => {
            this.data = list;
            this.allChecked = false;
            this.indeterminate = false;
            this.labelTitle = list.length === 0 ? '' : this.schema.title;
            this.grid_span = this.ui.span && this.ui.span > 0 ? this.ui.span : 0;
            this.updateAllChecked();
            this.inited = true;
            this.cd.detectChanges();
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
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    updateAllChecked() {
        if ((/** @type {?} */ (this)).data.every(item => item.checked === false)) {
            (/** @type {?} */ (this)).allChecked = false;
            (/** @type {?} */ (this)).indeterminate = false;
        }
        else if ((/** @type {?} */ (this)).data.every(item => item.checked === true)) {
            (/** @type {?} */ (this)).allChecked = true;
            (/** @type {?} */ (this)).indeterminate = false;
        }
        else {
            (/** @type {?} */ (this)).indeterminate = true;
        }
        // issues: https://github.com/NG-ZORRO/ng-zorro-antd/issues/2025
        setTimeout(() => (/** @type {?} */ (this)).detectChanges());
        return (/** @type {?} */ (this));
    }
    /**
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
                template: "<ng-template #all>\n  <label *ngIf=\"ui.checkAll\" nz-checkbox class=\"mr-sm\" [(ngModel)]=\"allChecked\" [nzIndeterminate]=\"indeterminate\"\n    (click)=\"onAllChecked($event)\">{{ ui.checkAllText || l.checkAllText }}</label>\n</ng-template>\n<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\"\n  [error]=\"error\" [showTitle]=\"true\" [title]=\"labelTitle\">\n  <ng-container *ngIf=\"inited && data.length === 0\">\n    <label nz-checkbox [nzDisabled]=\"disabled\" [ngModel]=\"value\" (ngModelChange)=\"_setValue($event)\">\n      {{schema.title}}\n      <span class=\"sf__optional\">\n        {{ ui.optional }}\n        <nz-tooltip *ngIf=\"ui.optionalHelp\" [nzTitle]=\"ui.optionalHelp\">\n          <i nz-tooltip nz-icon type=\"question-circle\"></i>\n        </nz-tooltip>\n      </span>\n    </label>\n  </ng-container>\n  <ng-container *ngIf=\"inited && data.length > 0\">\n    <ng-container *ngIf=\"grid_span === 0\">\n      <ng-template [ngTemplateOutlet]=\"all\"></ng-template>\n      <nz-checkbox-group [ngModel]=\"data\" (ngModelChange)=\"notifySet()\"></nz-checkbox-group>\n    </ng-container>\n    <ng-container *ngIf=\"grid_span !== 0\">\n      <nz-checkbox-wrapper class=\"sf__checkbox-list\" (nzOnChange)=\"groupInGridChange($event)\">\n        <nz-row>\n          <nz-col [nzSpan]=\"grid_span\" *ngIf=\"ui.checkAll\">\n            <ng-template [ngTemplateOutlet]=\"all\"></ng-template>\n          </nz-col>\n          <nz-col [nzSpan]=\"grid_span\" *ngFor=\"let i of data\">\n            <label nz-checkbox [nzValue]=\"i.value\" [ngModel]=\"i.checked\" [nzDisabled]=\"i.disabled\">{{i.label}}</label>\n          </nz-col>\n        </nz-row>\n      </nz-checkbox-wrapper>\n    </ng-container>\n  </ng-container>\n</sf-item-wrap>\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gud2lkZ2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0cy9jaGVja2JveC9jaGVja2JveC53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHMUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN0QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBTTdDLE1BQU0sT0FBTyxjQUFlLFNBQVEsYUFBYTtJQUpqRDs7UUFLRSxTQUFJLEdBQW1CLEVBQUUsQ0FBQztRQUMxQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBRXRCLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDaEIsV0FBTSxHQUFHLEtBQUssQ0FBQztJQWtFakIsQ0FBQzs7OztJQWhFQyxJQUFJLENBQUM7UUFDSCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ3JELENBQUM7Ozs7O0lBRUQsS0FBSyxDQUFDLEtBQWM7UUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FDakUsSUFBSSxDQUFDLEVBQUU7WUFDTCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNqQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUN4QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENB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ZCxDQUFDOzs7OztJQUVPLFlBQVksQ0FBQyxHQUE2QjtRQUNoRCxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTTtZQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFDLENBQUM7OztZQTNFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLGl3REFBcUM7YUFDdEM7Ozs7SUFFQyw4QkFBMEI7O0lBQzFCLG9DQUFtQjs7SUFDbkIsdUNBQXNCOztJQUN0QixtQ0FBa0I7O0lBQ2xCLG9DQUFnQjs7SUFDaEIsZ0NBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNGVmFsdWUgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgU0ZTY2hlbWFFbnVtIH0gZnJvbSAnLi4vLi4vc2NoZW1hJztcbmltcG9ydCB7IGdldERhdGEgfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtY2hlY2tib3gnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2hlY2tib3gud2lkZ2V0Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja2JveFdpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQge1xuICBkYXRhOiBTRlNjaGVtYUVudW1bXSA9IFtdO1xuICBhbGxDaGVja2VkID0gZmFsc2U7XG4gIGluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgZ3JpZF9zcGFuOiBudW1iZXI7XG4gIGxhYmVsVGl0bGUgPSBgYDtcbiAgaW5pdGVkID0gZmFsc2U7XG5cbiAgZ2V0IGwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybVByb3BlcnR5LnJvb3Qud2lkZ2V0LnNmQ29tcC5sb2NhbGU7XG4gIH1cblxuICByZXNldCh2YWx1ZTogU0ZWYWx1ZSkge1xuICAgIHRoaXMuaW5pdGVkID0gZmFsc2U7XG4gICAgZ2V0RGF0YSh0aGlzLnNjaGVtYSwgdGhpcy51aSwgdGhpcy5mb3JtUHJvcGVydHkuZm9ybURhdGEpLnN1YnNjcmliZShcbiAgICAgIGxpc3QgPT4ge1xuICAgICAgICB0aGlzLmRhdGEgPSBsaXN0O1xuICAgICAgICB0aGlzLmFsbENoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pbmRldGVybWluYXRlID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGFiZWxUaXRsZSA9IGxpc3QubGVuZ3RoID09PSAwID8gJycgOiB0aGlzLnNjaGVtYS50aXRsZTtcbiAgICAgICAgdGhpcy5ncmlkX3NwYW4gPSB0aGlzLnVpLnNwYW4gJiYgdGhpcy51aS5zcGFuID4gMCA/IHRoaXMudWkuc3BhbiA6IDA7XG5cbiAgICAgICAgdGhpcy51cGRhdGVBbGxDaGVja2VkKCk7XG4gICAgICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9LFxuICAgICk7XG4gIH1cblxuICBfc2V0VmFsdWUodmFsdWU6IFNGVmFsdWUpIHtcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgICB0aGlzLm5vdGlmeUNoYW5nZSh2YWx1ZSk7XG4gIH1cblxuICBub3RpZnlTZXQoKSB7XG4gICAgY29uc3QgY2hlY2tMaXN0ID0gdGhpcy5kYXRhLmZpbHRlcih3ID0+IHcuY2hlY2tlZCk7XG4gICAgdGhpcy51cGRhdGVBbGxDaGVja2VkKCkuc2V0VmFsdWUoY2hlY2tMaXN0Lm1hcChpdGVtID0+IGl0ZW0udmFsdWUpKTtcbiAgICB0aGlzLm5vdGlmeUNoYW5nZShjaGVja0xpc3QpO1xuICB9XG5cbiAgZ3JvdXBJbkdyaWRDaGFuZ2UodmFsdWVzOiBTRlZhbHVlW10pIHtcbiAgICB0aGlzLmRhdGEuZm9yRWFjaChcbiAgICAgIGl0ZW0gPT4gKGl0ZW0uY2hlY2tlZCA9IHZhbHVlcy5pbmRleE9mKGl0ZW0udmFsdWUpICE9PSAtMSksXG4gICAgKTtcbiAgICB0aGlzLm5vdGlmeVNldCgpO1xuICB9XG5cbiAgb25BbGxDaGVja2VkKGU6IEV2ZW50KSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLmRhdGEuZm9yRWFjaChpdGVtID0+IChpdGVtLmNoZWNrZWQgPSB0aGlzLmFsbENoZWNrZWQpKTtcbiAgICB0aGlzLm5vdGlmeVNldCgpO1xuICB9XG5cbiAgdXBkYXRlQWxsQ2hlY2tlZCgpOiB0aGlzIHtcbiAgICBpZiAodGhpcy5kYXRhLmV2ZXJ5KGl0ZW0gPT4gaXRlbS5jaGVja2VkID09PSBmYWxzZSkpIHtcbiAgICAgIHRoaXMuYWxsQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5pbmRldGVybWluYXRlID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmICh0aGlzLmRhdGEuZXZlcnkoaXRlbSA9PiBpdGVtLmNoZWNrZWQgPT09IHRydWUpKSB7XG4gICAgICB0aGlzLmFsbENoZWNrZWQgPSB0cnVlO1xuICAgICAgdGhpcy5pbmRldGVybWluYXRlID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5kZXRlcm1pbmF0ZSA9IHRydWU7XG4gICAgfVxuICAgIC8vIGlzc3VlczogaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvaXNzdWVzLzIwMjVcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZGV0ZWN0Q2hhbmdlcygpKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHByaXZhdGUgbm90aWZ5Q2hhbmdlKHJlczogYm9vbGVhbiB8IFNGU2NoZW1hRW51bVtdKSB7XG4gICAgaWYgKHRoaXMudWkuY2hhbmdlKSB0aGlzLnVpLmNoYW5nZShyZXMpO1xuICB9XG59XG4iXX0=