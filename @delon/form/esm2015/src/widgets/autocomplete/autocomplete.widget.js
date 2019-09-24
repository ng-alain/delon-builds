/**
 * @fileoverview added by tsickle
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
    ngAfterViewInit() {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9mb3JtLyIsInNvdXJjZXMiOlsic3JjL3dpZGdldHMvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekMsT0FBTyxFQUFFLEVBQUUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFJdkUsT0FBTyxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzNELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFTL0MsTUFBTSxPQUFPLGtCQUFtQixTQUFRLGVBQTJDO0lBTm5GOztRQU9FLE1BQUMsR0FBUSxFQUFFLENBQUM7UUFFWixXQUFNLEdBQVcsRUFBRSxDQUFDO1FBR1osWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixZQUFPLEdBQW1CLEVBQUUsQ0FBQztJQTJEdkMsQ0FBQzs7Ozs7SUF6REMsV0FBVyxDQUFDLElBQW1DO1FBQzdDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM1QixJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTTtZQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7SUFFRCxlQUFlO2NBQ1AsRUFBRSxRQUFRLEVBQUUsd0JB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RTtZQUNwQixLQUFLLE9BQU87Z0JBQ1YsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3BDO2dCQUNFLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTTs7OztnQkFBQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxFQUFDLENBQUMsQ0FBQztTQUM5RTtJQUNILENBQUM7Ozs7OztJQUVPLGNBQWMsQ0FBQyxLQUFhO1FBQ2xDLE9BQU8sRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUc7Ozs7UUFBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxJQUFJLE1BQU0sQ0FBQyxLQUFLLEVBQUUsRUFBQyxDQUFDLENBQUM7SUFDekcsQ0FBQzs7O1lBdkVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixxaUNBQXlDO2dCQUN6QyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0Qzs7O3NCQUtFLFNBQVMsU0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOzs7O0lBSHJDLCtCQUFZOztJQUNaLGtDQUFpQzs7SUFDakMsb0NBQW9COzs7OztJQUNwQixxQ0FBZ0U7Ozs7O0lBQ2hFLDBDQUF1RTs7Ozs7SUFDdkUscUNBQXdCOzs7OztJQUN4QixxQ0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIFZpZXdDaGlsZCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nTW9kZWwgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOekF1dG9jb21wbGV0ZU9wdGlvbkNvbXBvbmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQvYXV0by1jb21wbGV0ZSc7XG5pbXBvcnQgeyBvZiwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBmbGF0TWFwLCBtYXAsIHN0YXJ0V2l0aCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgU0ZWYWx1ZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBTRlNjaGVtYUVudW0gfSBmcm9tICcuLi8uLi9zY2hlbWEnO1xuaW1wb3J0IHsgZ2V0Q29weUVudW0sIGdldEVudW0sIHRvQm9vbCB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IENvbnRyb2xVSVdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5pbXBvcnQgeyBTRkF1dG9Db21wbGV0ZVdpZGdldFNjaGVtYSB9IGZyb20gJy4vc2NoZW1hJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtYXV0b2NvbXBsZXRlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2F1dG9jb21wbGV0ZS53aWRnZXQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBBdXRvQ29tcGxldGVXaWRnZXQgZXh0ZW5kcyBDb250cm9sVUlXaWRnZXQ8U0ZBdXRvQ29tcGxldGVXaWRnZXRTY2hlbWE+IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIGk6IGFueSA9IHt9O1xuICBsaXN0OiBPYnNlcnZhYmxlPFNGU2NoZW1hRW51bVtdPjtcbiAgdHlwaW5nOiBzdHJpbmcgPSAnJztcbiAgQFZpZXdDaGlsZChOZ01vZGVsLCB7IHN0YXRpYzogZmFsc2UgfSkgcHJpdmF0ZSBuZ01vZGVsOiBOZ01vZGVsO1xuICBwcml2YXRlIGZpbHRlck9wdGlvbjogKGlucHV0OiBzdHJpbmcsIG9wdGlvbjogU0ZTY2hlbWFFbnVtKSA9PiBib29sZWFuO1xuICBwcml2YXRlIGlzQXN5bmMgPSBmYWxzZTtcbiAgcHJpdmF0ZSBmaXhEYXRhOiBTRlNjaGVtYUVudW1bXSA9IFtdO1xuXG4gIHVwZGF0ZVZhbHVlKGl0ZW06IE56QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50KSB7XG4gICAgdGhpcy50eXBpbmcgPSBpdGVtLm56TGFiZWw7XG4gICAgdGhpcy5zZXRWYWx1ZShpdGVtLm56VmFsdWUpO1xuICAgIGlmICh0aGlzLnVpLmNoYW5nZSkgdGhpcy51aS5jaGFuZ2UoaXRlbSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgY29uc3QgeyBiYWNrZmlsbCwgZGVmYXVsdEFjdGl2ZUZpcnN0T3B0aW9uLCBueldpZHRoLCBmaWx0ZXJPcHRpb24sIGFzeW5jRGF0YSB9ID0gdGhpcy51aTtcbiAgICB0aGlzLmkgPSB7XG4gICAgICBiYWNrZmlsbDogdG9Cb29sKGJhY2tmaWxsLCBmYWxzZSksXG4gICAgICBkZWZhdWx0QWN0aXZlRmlyc3RPcHRpb246IHRvQm9vbChkZWZhdWx0QWN0aXZlRmlyc3RPcHRpb24sIHRydWUpLFxuICAgICAgd2lkdGg6IG56V2lkdGggfHwgdW5kZWZpbmVkLFxuICAgIH07XG5cbiAgICBsZXQgZmlsdGVyT3B0aW9uVmFsdWUgPSBmaWx0ZXJPcHRpb24gPT0gbnVsbCA/IHRydWUgOiBmaWx0ZXJPcHRpb247XG4gICAgaWYgKHR5cGVvZiBmaWx0ZXJPcHRpb25WYWx1ZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICBmaWx0ZXJPcHRpb25WYWx1ZSA9IChpbnB1dDogc3RyaW5nLCBvcHRpb246IFNGU2NoZW1hRW51bSkgPT4gb3B0aW9uLmxhYmVsLnRvTG93ZXJDYXNlKCkuaW5kZXhPZigoaW5wdXQgfHwgJycpLnRvTG93ZXJDYXNlKCkpID4gLTE7XG4gICAgfVxuICAgIHRoaXMuZmlsdGVyT3B0aW9uID0gZmlsdGVyT3B0aW9uVmFsdWU7XG5cbiAgICB0aGlzLmlzQXN5bmMgPSAhIWFzeW5jRGF0YTtcbiAgICBjb25zdCBvcmdUaW1lID0gKyh0aGlzLnVpLmRlYm91bmNlVGltZSB8fCAwKTtcbiAgICBjb25zdCB0aW1lID0gTWF0aC5tYXgoMCwgdGhpcy5pc0FzeW5jID8gTWF0aC5tYXgoNTAsIG9yZ1RpbWUpIDogb3JnVGltZSk7XG5cbiAgICB0aGlzLmxpc3QgPSB0aGlzLm5nTW9kZWwudmFsdWVDaGFuZ2VzIS5waXBlKFxuICAgICAgZGVib3VuY2VUaW1lKHRpbWUpLFxuICAgICAgc3RhcnRXaXRoKCcnKSxcbiAgICAgIGZsYXRNYXAoaW5wdXQgPT4gKHRoaXMuaXNBc3luYyA/IGFzeW5jRGF0YSEoaW5wdXQpIDogdGhpcy5maWx0ZXJEYXRhKGlucHV0KSkpLFxuICAgICAgbWFwKHJlcyA9PiBnZXRFbnVtKHJlcywgbnVsbCwgdGhpcy5zY2hlbWEucmVhZE9ubHkhKSksXG4gICAgKTtcbiAgfVxuXG4gIHJlc2V0KHZhbHVlOiBTRlZhbHVlKSB7XG4gICAgdGhpcy50eXBpbmcgPSB0aGlzLnZhbHVlO1xuICAgIGlmICh0aGlzLmlzQXN5bmMpIHJldHVybjtcbiAgICBzd2l0Y2ggKHRoaXMudWkudHlwZSkge1xuICAgICAgY2FzZSAnZW1haWwnOlxuICAgICAgICB0aGlzLmZpeERhdGEgPSBnZXRDb3B5RW51bSh0aGlzLnNjaGVtYS5lbnVtISB8fCB0aGlzLmZvcm1Qcm9wZXJ0eS5vcHRpb25zLnVpRW1haWxTdWZmaXhlcywgbnVsbCwgdGhpcy5zY2hlbWEucmVhZE9ubHkhKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLmZpeERhdGEgPSBnZXRDb3B5RW51bSh0aGlzLnNjaGVtYS5lbnVtISwgdmFsdWUsIHRoaXMuc2NoZW1hLnJlYWRPbmx5ISk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZmlsdGVyRGF0YShpbnB1dDogc3RyaW5nKSB7XG4gICAgc3dpdGNoICh0aGlzLnVpLnR5cGUpIHtcbiAgICAgIGNhc2UgJ2VtYWlsJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkRW1haWxTdWZmaXgoaW5wdXQpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG9mKHRoaXMuZml4RGF0YS5maWx0ZXIob3B0aW9uID0+IHRoaXMuZmlsdGVyT3B0aW9uKGlucHV0LCBvcHRpb24pKSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhZGRFbWFpbFN1ZmZpeCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG9mKCF2YWx1ZSB8fCB+dmFsdWUuaW5kZXhPZignQCcpID8gW10gOiB0aGlzLmZpeERhdGEubWFwKGRvbWFpbiA9PiBgJHt2YWx1ZX1AJHtkb21haW4ubGFiZWx9YCkpO1xuICB9XG59XG4iXX0=