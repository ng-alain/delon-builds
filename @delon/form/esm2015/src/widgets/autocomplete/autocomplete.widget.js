/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgModel } from '@angular/forms';
import { of } from 'rxjs';
import { debounceTime, flatMap, map, startWith } from 'rxjs/operators';
import { getCopyEnum, getEnum, toBool } from '../../utils';
import { ControlWidget } from '../../widget';
export class AutoCompleteWidget extends ControlWidget {
    constructor() {
        super(...arguments);
        this.i = {};
        this.fixData = [];
        this.typing = '';
        this.isAsync = false;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    updateValue(item) {
        this.typing = item.nzLabel;
        this.setValue(item.nzValue);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.i = {
            backfill: toBool(this.ui.backfill, false),
            defaultActiveFirstOption: toBool(this.ui.defaultActiveFirstOption, true),
            width: this.ui.width || undefined,
        };
        this.filterOption = this.ui.filterOption == null ? true : this.ui.filterOption;
        if (typeof this.filterOption === 'boolean') {
            this.filterOption = (/**
             * @param {?} input
             * @param {?} option
             * @return {?}
             */
            (input, option) => option.label.toLowerCase().indexOf((input || '').toLowerCase()) > -1);
        }
        this.isAsync = !!this.ui.asyncData;
        /** @type {?} */
        const orgTime = +(this.ui.debounceTime || 0);
        /** @type {?} */
        const time = Math.max(0, this.isAsync ? Math.max(50, orgTime) : orgTime);
        this.list = (/** @type {?} */ (this.ngModel.valueChanges)).pipe(debounceTime(time), startWith(''), flatMap((/**
         * @param {?} input
         * @return {?}
         */
        input => (this.isAsync ? (/** @type {?} */ (this.ui.asyncData))(input) : this.filterData(input)))), map((/**
         * @param {?} res
         * @return {?}
         */
        res => getEnum(res, null, (/** @type {?} */ (this.schema.readOnly))))));
    }
    /**
     * @param {?} _value
     * @return {?}
     */
    reset(_value) {
        this.typing = this.value;
        if (this.isAsync)
            return;
        switch (this.ui.type) {
            case 'email':
                this.fixData = getCopyEnum((/** @type {?} */ (this.schema.enum)) || this.formProperty.options.uiEmailSuffixes, null, (/** @type {?} */ (this.schema.readOnly)));
                break;
            default:
                this.fixData = getCopyEnum((/** @type {?} */ (this.schema.enum)), this.formProperty.formData, (/** @type {?} */ (this.schema.readOnly)));
                break;
        }
    }
    /**
     * @private
     * @param {?} input
     * @return {?}
     */
    filterData(input) {
        switch (this.ui.type) {
            case 'email':
                return this.addEmailSuffix(input);
            default:
                return of(this.fixData.filter((/**
                 * @param {?} option
                 * @return {?}
                 */
                option => this.filterOption(input, option))));
        }
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    addEmailSuffix(value) {
        return of(!value || ~value.indexOf('@') ? [] : this.fixData.map((/**
         * @param {?} domain
         * @return {?}
         */
        domain => `${value}@${domain.label}`)));
    }
}
AutoCompleteWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-autocomplete',
                template: "<sf-item-wrap [id]=\"id\"\n              [schema]=\"schema\"\n              [ui]=\"ui\"\n              [showError]=\"showError\"\n              [error]=\"error\"\n              [showTitle]=\"schema.title\">\n  <input nz-input\n         [nzAutocomplete]=\"auto\"\n         [attr.id]=\"id\"\n         [disabled]=\"disabled\"\n         [attr.disabled]=\"disabled\"\n         [nzSize]=\"ui.size\"\n         [(ngModel)]=\"typing\"\n         (ngModelChange)=\"setValue($event)\"\n         [attr.maxLength]=\"schema.maxLength || null\"\n         [attr.placeholder]=\"ui.placeholder\"\n         autocomplete=\"off\">\n  <nz-autocomplete #auto\n                   [nzBackfill]=\"i.backfill\"\n                   [nzDefaultActiveFirstOption]=\"i.defaultActiveFirstOption\"\n                   [nzWidth]=\"i.width\"\n                   (selectionChange)=\"updateValue($event)\">\n    <nz-auto-option *ngFor=\"let i of list | async\"\n                    [nzValue]=\"i.value\"\n                    [nzLabel]=\"i.label\">\n      {{i.label}}\n    </nz-auto-option>\n  </nz-autocomplete>\n</sf-item-wrap>\n",
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None
            }] }
];
AutoCompleteWidget.propDecorators = {
    ngModel: [{ type: ViewChild, args: [NgModel,] }]
};
if (false) {
    /** @type {?} */
    AutoCompleteWidget.prototype.i;
    /** @type {?} */
    AutoCompleteWidget.prototype.fixData;
    /** @type {?} */
    AutoCompleteWidget.prototype.list;
    /** @type {?} */
    AutoCompleteWidget.prototype.typing;
    /**
     * @type {?}
     * @private
     */
    AutoCompleteWidget.prototype.ngModel;
    /**
     * @type {?}
     * @private
     */
    AutoCompleteWidget.prototype.filterOption;
    /**
     * @type {?}
     * @private
     */
    AutoCompleteWidget.prototype.isAsync;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9mb3JtLyIsInNvdXJjZXMiOlsic3JjL3dpZGdldHMvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekMsT0FBTyxFQUFFLEVBQUUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHdkUsT0FBTyxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzNELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFRN0MsTUFBTSxPQUFPLGtCQUFtQixTQUFRLGFBQWE7SUFOckQ7O1FBT0UsTUFBQyxHQUFRLEVBQUUsQ0FBQztRQUNaLFlBQU8sR0FBbUIsRUFBRSxDQUFDO1FBRTdCLFdBQU0sR0FBVyxFQUFFLENBQUM7UUFHWixZQUFPLEdBQUcsS0FBSyxDQUFDO0lBNkQxQixDQUFDOzs7OztJQTNEQyxXQUFXLENBQUMsSUFBbUM7UUFDN0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLENBQUMsR0FBRztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDO1lBQ3pDLHdCQUF3QixFQUFFLE1B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O2dCQUNWLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNwQztnQkFDRSxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU07Ozs7Z0JBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsRUFBQyxDQUFDLENBQUM7U0FDOUU7SUFDSCxDQUFDOzs7Ozs7SUFFTyxjQUFjLENBQUMsS0FBYTtRQUNsQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHOzs7O1FBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFFLEVBQUMsQ0FBQyxDQUFDO0lBQ3pHLENBQUM7OztZQXpFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsK2tDQUF5QztnQkFDekMsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7OztzQkFNRSxTQUFTLFNBQUMsT0FBTzs7OztJQUpsQiwrQkFBWTs7SUFDWixxQ0FBNkI7O0lBQzdCLGtDQUFpQzs7SUFDakMsb0NBQW9COzs7OztJQUNwQixxQ0FBNkM7Ozs7O0lBQzdDLDBDQUF1RTs7Ozs7SUFDdkUscUNBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ01vZGVsIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTnpBdXRvY29tcGxldGVPcHRpb25Db21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL2F1dG8tY29tcGxldGUnO1xuaW1wb3J0IHsgb2YsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZmxhdE1hcCwgbWFwLCBzdGFydFdpdGggfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTRlZhbHVlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlJztcbmltcG9ydCB7IFNGU2NoZW1hRW51bSB9IGZyb20gJy4uLy4uL3NjaGVtYSc7XG5pbXBvcnQgeyBnZXRDb3B5RW51bSwgZ2V0RW51bSwgdG9Cb29sIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLWF1dG9jb21wbGV0ZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9hdXRvY29tcGxldGUud2lkZ2V0Lmh0bWwnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgQXV0b0NvbXBsZXRlV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBpOiBhbnkgPSB7fTtcbiAgZml4RGF0YTogU0ZTY2hlbWFFbnVtW10gPSBbXTtcbiAgbGlzdDogT2JzZXJ2YWJsZTxTRlNjaGVtYUVudW1bXT47XG4gIHR5cGluZzogc3RyaW5nID0gJyc7XG4gIEBWaWV3Q2hpbGQoTmdNb2RlbCkgcHJpdmF0ZSBuZ01vZGVsOiBOZ01vZGVsO1xuICBwcml2YXRlIGZpbHRlck9wdGlvbjogKGlucHV0OiBzdHJpbmcsIG9wdGlvbjogU0ZTY2hlbWFFbnVtKSA9PiBib29sZWFuO1xuICBwcml2YXRlIGlzQXN5bmMgPSBmYWxzZTtcblxuICB1cGRhdGVWYWx1ZShpdGVtOiBOekF1dG9jb21wbGV0ZU9wdGlvbkNvbXBvbmVudCkge1xuICAgIHRoaXMudHlwaW5nID0gaXRlbS5uekxhYmVsO1xuICAgIHRoaXMuc2V0VmFsdWUoaXRlbS5uelZhbHVlKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmkgPSB7XG4gICAgICBiYWNrZmlsbDogdG9Cb29sKHRoaXMudWkuYmFja2ZpbGwsIGZhbHNlKSxcbiAgICAgIGRlZmF1bHRBY3RpdmVGaXJzdE9wdGlvbjogdG9Cb29sKHRoaXMudWkuZGVmYXVsdEFjdGl2ZUZpcnN0T3B0aW9uLCB0cnVlKSxcbiAgICAgIHdpZHRoOiB0aGlzLnVpLndpZHRoIHx8IHVuZGVmaW5lZCxcbiAgICB9O1xuXG4gICAgdGhpcy5maWx0ZXJPcHRpb24gPSB0aGlzLnVpLmZpbHRlck9wdGlvbiA9PSBudWxsID8gdHJ1ZSA6IHRoaXMudWkuZmlsdGVyT3B0aW9uO1xuICAgIGlmICh0eXBlb2YgdGhpcy5maWx0ZXJPcHRpb24gPT09ICdib29sZWFuJykge1xuICAgICAgdGhpcy5maWx0ZXJPcHRpb24gPSAoaW5wdXQ6IHN0cmluZywgb3B0aW9uOiBTRlNjaGVtYUVudW0pID0+XG4gICAgICAgIG9wdGlvbi5sYWJlbC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoKGlucHV0IHx8ICcnKS50b0xvd2VyQ2FzZSgpKSA+IC0xO1xuICAgIH1cblxuICAgIHRoaXMuaXNBc3luYyA9ICEhdGhpcy51aS5hc3luY0RhdGE7XG4gICAgY29uc3Qgb3JnVGltZSA9ICsodGhpcy51aS5kZWJvdW5jZVRpbWUgfHwgMCk7XG4gICAgY29uc3QgdGltZSA9IE1hdGgubWF4KDAsIHRoaXMuaXNBc3luYyA/IE1hdGgubWF4KDUwLCBvcmdUaW1lKSA6IG9yZ1RpbWUpO1xuXG4gICAgdGhpcy5saXN0ID0gdGhpcy5uZ01vZGVsLnZhbHVlQ2hhbmdlcyEucGlwZShcbiAgICAgIGRlYm91bmNlVGltZSh0aW1lKSxcbiAgICAgIHN0YXJ0V2l0aCgnJyksXG4gICAgICBmbGF0TWFwKGlucHV0ID0+ICh0aGlzLmlzQXN5bmMgPyB0aGlzLnVpLmFzeW5jRGF0YSEoaW5wdXQpIDogdGhpcy5maWx0ZXJEYXRhKGlucHV0KSkpLFxuICAgICAgbWFwKHJlcyA9PiBnZXRFbnVtKHJlcywgbnVsbCwgdGhpcy5zY2hlbWEucmVhZE9ubHkhKSksXG4gICAgKTtcbiAgfVxuXG4gIHJlc2V0KF92YWx1ZTogU0ZWYWx1ZSkge1xuICAgIHRoaXMudHlwaW5nID0gdGhpcy52YWx1ZTtcbiAgICBpZiAodGhpcy5pc0FzeW5jKSByZXR1cm47XG4gICAgc3dpdGNoICh0aGlzLnVpLnR5cGUpIHtcbiAgICAgIGNhc2UgJ2VtYWlsJzpcbiAgICAgICAgdGhpcy5maXhEYXRhID0gZ2V0Q29weUVudW0oXG4gICAgICAgICAgdGhpcy5zY2hlbWEuZW51bSEgfHwgdGhpcy5mb3JtUHJvcGVydHkub3B0aW9ucy51aUVtYWlsU3VmZml4ZXMsXG4gICAgICAgICAgbnVsbCxcbiAgICAgICAgICB0aGlzLnNjaGVtYS5yZWFkT25seSEsXG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy5maXhEYXRhID0gZ2V0Q29weUVudW0odGhpcy5zY2hlbWEuZW51bSEsIHRoaXMuZm9ybVByb3BlcnR5LmZvcm1EYXRhLCB0aGlzLnNjaGVtYS5yZWFkT25seSEpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGZpbHRlckRhdGEoaW5wdXQ6IHN0cmluZykge1xuICAgIHN3aXRjaCAodGhpcy51aS50eXBlKSB7XG4gICAgICBjYXNlICdlbWFpbCc6XG4gICAgICAgIHJldHVybiB0aGlzLmFkZEVtYWlsU3VmZml4KGlucHV0KTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBvZih0aGlzLmZpeERhdGEuZmlsdGVyKG9wdGlvbiA9PiB0aGlzLmZpbHRlck9wdGlvbihpbnB1dCwgb3B0aW9uKSkpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYWRkRW1haWxTdWZmaXgodmFsdWU6IHN0cmluZykge1xuICAgIHJldHVybiBvZighdmFsdWUgfHwgfnZhbHVlLmluZGV4T2YoJ0AnKSA/IFtdIDogdGhpcy5maXhEYXRhLm1hcChkb21haW4gPT4gYCR7dmFsdWV9QCR7ZG9tYWluLmxhYmVsfWApKTtcbiAgfVxufVxuIl19