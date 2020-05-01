/**
 * @fileoverview added by tsickle
 * Generated from: src/widgets/autocomplete/autocomplete.widget.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgModel } from '@angular/forms';
import { of } from 'rxjs';
import { debounceTime, flatMap, map, startWith } from 'rxjs/operators';
import { getCopyEnum, getEnum, toBool } from '../../utils';
import { ControlUIWidget } from '../../widget';
export class AutoCompleteWidget extends ControlUIWidget {
    constructor() {
        super(...arguments);
        this.i = {};
        this.typing = '';
        this.isAsync = false;
        this.fixData = [];
    }
    /**
     * @param {?} item
     * @return {?}
     */
    updateValue(item) {
        this.typing = item.nzLabel;
        this.setValue(item.nzValue);
        if (this.ui.change)
            this.ui.change(item);
    }
    /**
     * @return {?}
     */
    afterViewInit() {
        const { backfill, defaultActiveFirstOption, nzWidth, filterOption, asyncData } = this.ui;
        this.i = {
            backfill: toBool(backfill, false),
            defaultActiveFirstOption: toBool(defaultActiveFirstOption, true),
            width: nzWidth || undefined,
        };
        /** @type {?} */
        let filterOptionValue = filterOption == null ? true : filterOption;
        if (typeof filterOptionValue === 'boolean') {
            filterOptionValue = (/**
             * @param {?} input
             * @param {?} option
             * @return {?}
             */
            (input, option) => option.label.toLowerCase().indexOf((input || '').toLowerCase()) > -1);
        }
        this.filterOption = filterOptionValue;
        this.isAsync = !!asyncData;
        /** @type {?} */
        const orgTime = +(this.ui.debounceTime || 0);
        /** @type {?} */
        const time = Math.max(0, this.isAsync ? Math.max(50, orgTime) : orgTime);
        this.list = (/** @type {?} */ (this.ngModel.valueChanges)).pipe(debounceTime(time), startWith(''), flatMap((/**
         * @param {?} input
         * @return {?}
         */
        input => (this.isAsync ? (/** @type {?} */ (asyncData))(input) : this.filterData(input)))), map((/**
         * @param {?} res
         * @return {?}
         */
        res => getEnum(res, null, (/** @type {?} */ (this.schema.readOnly))))));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    reset(value) {
        this.typing = this.value;
        if (this.isAsync)
            return;
        switch (this.ui.type) {
            case 'email':
                this.fixData = getCopyEnum((/** @type {?} */ (this.schema.enum)) || this.formProperty.options.uiEmailSuffixes, null, (/** @type {?} */ (this.schema.readOnly)));
                break;
            default:
                this.fixData = getCopyEnum((/** @type {?} */ (this.schema.enum)), value, (/** @type {?} */ (this.schema.readOnly)));
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
                template: "<sf-item-wrap [id]=\"id\"\n              [schema]=\"schema\"\n              [ui]=\"ui\"\n              [showError]=\"showError\"\n              [error]=\"error\"\n              [showTitle]=\"schema.title\">\n  <input nz-input\n         [nzAutocomplete]=\"auto\"\n         [attr.id]=\"id\"\n         [disabled]=\"disabled\"\n         [attr.disabled]=\"disabled\"\n         [nzSize]=\"ui.size\"\n         [(ngModel)]=\"typing\"\n         (ngModelChange)=\"setValue($event)\"\n         [attr.maxLength]=\"schema.maxLength || null\"\n         [attr.placeholder]=\"ui.placeholder\"\n         autocomplete=\"off\">\n  <nz-autocomplete #auto\n                   [nzBackfill]=\"i.backfill\"\n                   [nzDefaultActiveFirstOption]=\"i.defaultActiveFirstOption\"\n                   [nzWidth]=\"i.width\"\n                   (selectionChange)=\"updateValue($event)\">\n    <nz-auto-option *ngFor=\"let i of list | async\" [nzValue]=\"i.value\" [nzLabel]=\"i.label\">\n      {{i.label}}\n    </nz-auto-option>\n  </nz-autocomplete>\n</sf-item-wrap>\n",
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None
            }] }
];
AutoCompleteWidget.propDecorators = {
    ngModel: [{ type: ViewChild, args: [NgModel, { static: false },] }]
};
if (false) {
    /** @type {?} */
    AutoCompleteWidget.prototype.i;
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
    /**
     * @type {?}
     * @private
     */
    AutoCompleteWidget.prototype.fixData;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9mb3JtLyIsInNvdXJjZXMiOlsic3JjL3dpZGdldHMvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekMsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHdkUsT0FBTyxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzNELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFTL0MsTUFBTSxPQUFPLGtCQUFtQixTQUFRLGVBQTJDO0lBTm5GOztRQU9FLE1BQUMsR0FBUSxFQUFFLENBQUM7UUFFWixXQUFNLEdBQVcsRUFBRSxDQUFDO1FBR1osWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixZQUFPLEdBQW1CLEVBQUUsQ0FBQztJQTJEdkMsQ0FBQzs7Ozs7SUF6REMsV0FBVyxDQUFDLElBQW1DO1FBQzdDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM1QixJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTTtZQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7SUFFRCxhQUFhO2NBQ0wsRUFBRSxRQUFRLEVBQUUsd0JB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RTtZQUNwQixLQUFLLE9BQU87Z0JBQ1YsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3BDO2dCQUNFLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTTs7OztnQkFBQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxFQUFDLENBQUMsQ0FBQztTQUM5RTtJQUNILENBQUM7Ozs7OztJQUVPLGNBQWMsQ0FBQyxLQUFhO1FBQ2xDLE9BQU8sRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUc7Ozs7UUFBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxJQUFJLE1BQU0sQ0FBQyxLQUFLLEVBQUUsRUFBQyxDQUFDLENBQUM7SUFDekcsQ0FBQzs7O1lBdkVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixxaUNBQXlDO2dCQUN6QyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0Qzs7O3NCQUtFLFNBQVMsU0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOzs7O0lBSHJDLCtCQUFZOztJQUNaLGtDQUFpQzs7SUFDakMsb0NBQW9COzs7OztJQUNwQixxQ0FBZ0U7Ozs7O0lBQ2hFLDBDQUF1RTs7Ozs7SUFDdkUscUNBQXdCOzs7OztJQUN4QixxQ0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nTW9kZWwgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOekF1dG9jb21wbGV0ZU9wdGlvbkNvbXBvbmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQvYXV0by1jb21wbGV0ZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBmbGF0TWFwLCBtYXAsIHN0YXJ0V2l0aCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFNGVmFsdWUgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgU0ZTY2hlbWFFbnVtIH0gZnJvbSAnLi4vLi4vc2NoZW1hJztcbmltcG9ydCB7IGdldENvcHlFbnVtLCBnZXRFbnVtLCB0b0Jvb2wgfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgeyBDb250cm9sVUlXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuaW1wb3J0IHsgU0ZBdXRvQ29tcGxldGVXaWRnZXRTY2hlbWEgfSBmcm9tICcuL3NjaGVtYSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLWF1dG9jb21wbGV0ZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9hdXRvY29tcGxldGUud2lkZ2V0Lmh0bWwnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgQXV0b0NvbXBsZXRlV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFVJV2lkZ2V0PFNGQXV0b0NvbXBsZXRlV2lkZ2V0U2NoZW1hPiB7XG4gIGk6IGFueSA9IHt9O1xuICBsaXN0OiBPYnNlcnZhYmxlPFNGU2NoZW1hRW51bVtdPjtcbiAgdHlwaW5nOiBzdHJpbmcgPSAnJztcbiAgQFZpZXdDaGlsZChOZ01vZGVsLCB7IHN0YXRpYzogZmFsc2UgfSkgcHJpdmF0ZSBuZ01vZGVsOiBOZ01vZGVsO1xuICBwcml2YXRlIGZpbHRlck9wdGlvbjogKGlucHV0OiBzdHJpbmcsIG9wdGlvbjogU0ZTY2hlbWFFbnVtKSA9PiBib29sZWFuO1xuICBwcml2YXRlIGlzQXN5bmMgPSBmYWxzZTtcbiAgcHJpdmF0ZSBmaXhEYXRhOiBTRlNjaGVtYUVudW1bXSA9IFtdO1xuXG4gIHVwZGF0ZVZhbHVlKGl0ZW06IE56QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50KSB7XG4gICAgdGhpcy50eXBpbmcgPSBpdGVtLm56TGFiZWw7XG4gICAgdGhpcy5zZXRWYWx1ZShpdGVtLm56VmFsdWUpO1xuICAgIGlmICh0aGlzLnVpLmNoYW5nZSkgdGhpcy51aS5jaGFuZ2UoaXRlbSk7XG4gIH1cblxuICBhZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgYmFja2ZpbGwsIGRlZmF1bHRBY3RpdmVGaXJzdE9wdGlvbiwgbnpXaWR0aCwgZmlsdGVyT3B0aW9uLCBhc3luY0RhdGEgfSA9IHRoaXMudWk7XG4gICAgdGhpcy5pID0ge1xuICAgICAgYmFja2ZpbGw6IHRvQm9vbChiYWNrZmlsbCwgZmFsc2UpLFxuICAgICAgZGVmYXVsdEFjdGl2ZUZpcnN0T3B0aW9uOiB0b0Jvb2woZGVmYXVsdEFjdGl2ZUZpcnN0T3B0aW9uLCB0cnVlKSxcbiAgICAgIHdpZHRoOiBueldpZHRoIHx8IHVuZGVmaW5lZCxcbiAgICB9O1xuXG4gICAgbGV0IGZpbHRlck9wdGlvblZhbHVlID0gZmlsdGVyT3B0aW9uID09IG51bGwgPyB0cnVlIDogZmlsdGVyT3B0aW9uO1xuICAgIGlmICh0eXBlb2YgZmlsdGVyT3B0aW9uVmFsdWUgPT09ICdib29sZWFuJykge1xuICAgICAgZmlsdGVyT3B0aW9uVmFsdWUgPSAoaW5wdXQ6IHN0cmluZywgb3B0aW9uOiBTRlNjaGVtYUVudW0pID0+IG9wdGlvbi5sYWJlbC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoKGlucHV0IHx8ICcnKS50b0xvd2VyQ2FzZSgpKSA+IC0xO1xuICAgIH1cbiAgICB0aGlzLmZpbHRlck9wdGlvbiA9IGZpbHRlck9wdGlvblZhbHVlO1xuXG4gICAgdGhpcy5pc0FzeW5jID0gISFhc3luY0RhdGE7XG4gICAgY29uc3Qgb3JnVGltZSA9ICsodGhpcy51aS5kZWJvdW5jZVRpbWUgfHwgMCk7XG4gICAgY29uc3QgdGltZSA9IE1hdGgubWF4KDAsIHRoaXMuaXNBc3luYyA/IE1hdGgubWF4KDUwLCBvcmdUaW1lKSA6IG9yZ1RpbWUpO1xuXG4gICAgdGhpcy5saXN0ID0gdGhpcy5uZ01vZGVsLnZhbHVlQ2hhbmdlcyEucGlwZShcbiAgICAgIGRlYm91bmNlVGltZSh0aW1lKSxcbiAgICAgIHN0YXJ0V2l0aCgnJyksXG4gICAgICBmbGF0TWFwKGlucHV0ID0+ICh0aGlzLmlzQXN5bmMgPyBhc3luY0RhdGEhKGlucHV0KSA6IHRoaXMuZmlsdGVyRGF0YShpbnB1dCkpKSxcbiAgICAgIG1hcChyZXMgPT4gZ2V0RW51bShyZXMsIG51bGwsIHRoaXMuc2NoZW1hLnJlYWRPbmx5ISkpLFxuICAgICk7XG4gIH1cblxuICByZXNldCh2YWx1ZTogU0ZWYWx1ZSkge1xuICAgIHRoaXMudHlwaW5nID0gdGhpcy52YWx1ZTtcbiAgICBpZiAodGhpcy5pc0FzeW5jKSByZXR1cm47XG4gICAgc3dpdGNoICh0aGlzLnVpLnR5cGUpIHtcbiAgICAgIGNhc2UgJ2VtYWlsJzpcbiAgICAgICAgdGhpcy5maXhEYXRhID0gZ2V0Q29weUVudW0odGhpcy5zY2hlbWEuZW51bSEgfHwgdGhpcy5mb3JtUHJvcGVydHkub3B0aW9ucy51aUVtYWlsU3VmZml4ZXMsIG51bGwsIHRoaXMuc2NoZW1hLnJlYWRPbmx5ISk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy5maXhEYXRhID0gZ2V0Q29weUVudW0odGhpcy5zY2hlbWEuZW51bSEsIHZhbHVlLCB0aGlzLnNjaGVtYS5yZWFkT25seSEpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGZpbHRlckRhdGEoaW5wdXQ6IHN0cmluZykge1xuICAgIHN3aXRjaCAodGhpcy51aS50eXBlKSB7XG4gICAgICBjYXNlICdlbWFpbCc6XG4gICAgICAgIHJldHVybiB0aGlzLmFkZEVtYWlsU3VmZml4KGlucHV0KTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBvZih0aGlzLmZpeERhdGEuZmlsdGVyKG9wdGlvbiA9PiB0aGlzLmZpbHRlck9wdGlvbihpbnB1dCwgb3B0aW9uKSkpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYWRkRW1haWxTdWZmaXgodmFsdWU6IHN0cmluZykge1xuICAgIHJldHVybiBvZighdmFsdWUgfHwgfnZhbHVlLmluZGV4T2YoJ0AnKSA/IFtdIDogdGhpcy5maXhEYXRhLm1hcChkb21haW4gPT4gYCR7dmFsdWV9QCR7ZG9tYWluLmxhYmVsfWApKTtcbiAgfVxufVxuIl19