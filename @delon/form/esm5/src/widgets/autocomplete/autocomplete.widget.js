/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { of } from 'rxjs';
import { debounceTime, flatMap, map, startWith } from 'rxjs/operators';
import { getCopyEnum, getEnum, toBool } from '../../utils';
import { ControlWidget } from '../../widget';
var AutoCompleteWidget = /** @class */ (function (_super) {
    tslib_1.__extends(AutoCompleteWidget, _super);
    function AutoCompleteWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.i = {};
        _this.fixData = [];
        _this.typing = '';
        _this.isAsync = false;
        return _this;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    AutoCompleteWidget.prototype.updateValue = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.typing = item.nzLabel;
        this.setValue(item.nzValue);
    };
    /**
     * @return {?}
     */
    AutoCompleteWidget.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
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
            function (input, option) {
                return option.label.toLowerCase().indexOf((input || '').toLowerCase()) > -1;
            });
        }
        this.isAsync = !!this.ui.asyncData;
        /** @type {?} */
        var orgTime = +(this.ui.debounceTime || 0);
        /** @type {?} */
        var time = Math.max(0, this.isAsync ? Math.max(50, orgTime) : orgTime);
        this.list = (/** @type {?} */ (this.ngModel.valueChanges)).pipe(debounceTime(time), startWith(''), flatMap((/**
         * @param {?} input
         * @return {?}
         */
        function (input) { return (_this.isAsync ? (/** @type {?} */ (_this.ui.asyncData))(input) : _this.filterData(input)); })), map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return getEnum(res, null, (/** @type {?} */ (_this.schema.readOnly))); })));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    AutoCompleteWidget.prototype.reset = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
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
    };
    /**
     * @private
     * @param {?} input
     * @return {?}
     */
    AutoCompleteWidget.prototype.filterData = /**
     * @private
     * @param {?} input
     * @return {?}
     */
    function (input) {
        var _this = this;
        switch (this.ui.type) {
            case 'email':
                return this.addEmailSuffix(input);
            default:
                return of(this.fixData.filter((/**
                 * @param {?} option
                 * @return {?}
                 */
                function (option) { return _this.filterOption(input, option); })));
        }
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    AutoCompleteWidget.prototype.addEmailSuffix = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return of(!value || ~value.indexOf('@') ? [] : this.fixData.map((/**
         * @param {?} domain
         * @return {?}
         */
        function (domain) { return value + "@" + domain.label; })));
    };
    AutoCompleteWidget.decorators = [
        { type: Component, args: [{
                    selector: 'sf-autocomplete',
                    template: "<sf-item-wrap [id]=\"id\"\n              [schema]=\"schema\"\n              [ui]=\"ui\"\n              [showError]=\"showError\"\n              [error]=\"error\"\n              [showTitle]=\"schema.title\">\n  <input nz-input\n         [nzAutocomplete]=\"auto\"\n         [attr.id]=\"id\"\n         [disabled]=\"disabled\"\n         [attr.disabled]=\"disabled\"\n         [nzSize]=\"ui.size\"\n         [(ngModel)]=\"typing\"\n         [attr.maxLength]=\"schema.maxLength || null\"\n         [attr.placeholder]=\"ui.placeholder\"\n         autocomplete=\"off\">\n  <nz-autocomplete #auto\n                   [nzBackfill]=\"i.backfill\"\n                   [nzDefaultActiveFirstOption]=\"i.defaultActiveFirstOption\"\n                   [nzWidth]=\"i.width\"\n                   (selectionChange)=\"updateValue($event)\">\n    <nz-auto-option *ngFor=\"let i of list | async\"\n                    [nzValue]=\"i.value\"\n                    [nzLabel]=\"i.label\">\n      {{i.label}}\n    </nz-auto-option>\n  </nz-autocomplete>\n</sf-item-wrap>\n"
                }] }
    ];
    AutoCompleteWidget.propDecorators = {
        ngModel: [{ type: ViewChild, args: [NgModel,] }]
    };
    return AutoCompleteWidget;
}(ControlWidget));
export { AutoCompleteWidget };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9mb3JtLyIsInNvdXJjZXMiOlsic3JjL3dpZGdldHMvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpDLE9BQU8sRUFBRSxFQUFFLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3ZFLE9BQU8sRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMzRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRTdDO0lBSXdDLDhDQUFhO0lBSnJEO1FBQUEscUVBMEVDO1FBckVDLE9BQUMsR0FBUSxFQUFFLENBQUM7UUFDWixhQUFPLEdBQW1CLEVBQUUsQ0FBQztRQUU3QixZQUFNLEdBQVcsRUFBRSxDQUFDO1FBR1osYUFBTyxHQUFHLEtBQUssQ0FBQzs7SUErRDFCLENBQUM7Ozs7O0lBN0RDLHdDQUFXOzs7O0lBQVgsVUFBWSxJQUFtQztRQUM3QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7OztJQUVELDRDQUFlOzs7SUFBZjtRQUFBLGlCQXVCQztRQXRCQyxJQUFJLENBQUMsQ0FBQyxHQUFHO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUM7WUFD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QWxCLFVBQW1CLEtBQWE7UUFBaEMsaUJBT0M7UUFOQyxRQUFRLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFO1lBQ3BCLEtBQUssT0FBTztnQkFDVixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDcEM7Z0JBQ0UsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNOzs7O2dCQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEVBQWhDLENBQWdDLEVBQUMsQ0FBQyxDQUFDO1NBQzlFO0lBQ0gsQ0FBQzs7Ozs7O0lBRU8sMkNBQWM7Ozs7O0lBQXRCLFVBQXVCLEtBQWE7UUFDbEMsT0FBTyxFQUFFLENBQ1AsQ0FBQyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRzs7OztRQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUcsS0FBSyxTQUFJLE1BQU0sQ0FBQyxLQUFPLEVBQTFCLENBQTBCLEVBQUMsQ0FDNUYsQ0FBQztJQUNKLENBQUM7O2dCQXpFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsZ2lDQUF5QztpQkFDMUM7OzswQkFNRSxTQUFTLFNBQUMsT0FBTzs7SUFpRXBCLHlCQUFDO0NBQUEsQUExRUQsQ0FJd0MsYUFBYSxHQXNFcEQ7U0F0RVksa0JBQWtCOzs7SUFDN0IsK0JBQVk7O0lBQ1oscUNBQTZCOztJQUM3QixrQ0FBaUM7O0lBQ2pDLG9DQUFvQjs7Ozs7SUFDcEIscUNBQTZDOzs7OztJQUM3QywwQ0FBdUU7Ozs7O0lBQ3ZFLHFDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ01vZGVsIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTnpBdXRvY29tcGxldGVPcHRpb25Db21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkJztcbmltcG9ydCB7IG9mLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGZsYXRNYXAsIG1hcCwgc3RhcnRXaXRoIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU0ZWYWx1ZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBTRlNjaGVtYUVudW0gfSBmcm9tICcuLi8uLi9zY2hlbWEnO1xuaW1wb3J0IHsgZ2V0Q29weUVudW0sIGdldEVudW0sIHRvQm9vbCB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1hdXRvY29tcGxldGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vYXV0b2NvbXBsZXRlLndpZGdldC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQXV0b0NvbXBsZXRlV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBpOiBhbnkgPSB7fTtcbiAgZml4RGF0YTogU0ZTY2hlbWFFbnVtW10gPSBbXTtcbiAgbGlzdDogT2JzZXJ2YWJsZTxTRlNjaGVtYUVudW1bXT47XG4gIHR5cGluZzogc3RyaW5nID0gJyc7XG4gIEBWaWV3Q2hpbGQoTmdNb2RlbCkgcHJpdmF0ZSBuZ01vZGVsOiBOZ01vZGVsO1xuICBwcml2YXRlIGZpbHRlck9wdGlvbjogKGlucHV0OiBzdHJpbmcsIG9wdGlvbjogU0ZTY2hlbWFFbnVtKSA9PiBib29sZWFuO1xuICBwcml2YXRlIGlzQXN5bmMgPSBmYWxzZTtcblxuICB1cGRhdGVWYWx1ZShpdGVtOiBOekF1dG9jb21wbGV0ZU9wdGlvbkNvbXBvbmVudCkge1xuICAgIHRoaXMudHlwaW5nID0gaXRlbS5uekxhYmVsO1xuICAgIHRoaXMuc2V0VmFsdWUoaXRlbS5uelZhbHVlKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmkgPSB7XG4gICAgICBiYWNrZmlsbDogdG9Cb29sKHRoaXMudWkuYmFja2ZpbGwsIGZhbHNlKSxcbiAgICAgIGRlZmF1bHRBY3RpdmVGaXJzdE9wdGlvbjogdG9Cb29sKHRoaXMudWkuZGVmYXVsdEFjdGl2ZUZpcnN0T3B0aW9uLCB0cnVlKSxcbiAgICAgIHdpZHRoOiB0aGlzLnVpLndpZHRoIHx8IHVuZGVmaW5lZCxcbiAgICB9O1xuXG4gICAgdGhpcy5maWx0ZXJPcHRpb24gPSB0aGlzLnVpLmZpbHRlck9wdGlvbiA9PSBudWxsID8gdHJ1ZSA6IHRoaXMudWkuZmlsdGVyT3B0aW9uO1xuICAgIGlmICh0eXBlb2YgdGhpcy5maWx0ZXJPcHRpb24gPT09ICdib29sZWFuJykge1xuICAgICAgdGhpcy5maWx0ZXJPcHRpb24gPSAoaW5wdXQ6IHN0cmluZywgb3B0aW9uOiBTRlNjaGVtYUVudW0pID0+XG4gICAgICAgIG9wdGlvbi5sYWJlbC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoKGlucHV0IHx8ICcnKS50b0xvd2VyQ2FzZSgpKSA+IC0xO1xuICAgIH1cblxuICAgIHRoaXMuaXNBc3luYyA9ICEhdGhpcy51aS5hc3luY0RhdGE7XG4gICAgY29uc3Qgb3JnVGltZSA9ICsodGhpcy51aS5kZWJvdW5jZVRpbWUgfHwgMCk7XG4gICAgY29uc3QgdGltZSA9IE1hdGgubWF4KDAsIHRoaXMuaXNBc3luYyA/IE1hdGgubWF4KDUwLCBvcmdUaW1lKSA6IG9yZ1RpbWUpO1xuXG4gICAgdGhpcy5saXN0ID0gdGhpcy5uZ01vZGVsLnZhbHVlQ2hhbmdlcyEucGlwZShcbiAgICAgIGRlYm91bmNlVGltZSh0aW1lKSxcbiAgICAgIHN0YXJ0V2l0aCgnJyksXG4gICAgICBmbGF0TWFwKGlucHV0ID0+ICh0aGlzLmlzQXN5bmMgPyB0aGlzLnVpLmFzeW5jRGF0YSEoaW5wdXQpIDogdGhpcy5maWx0ZXJEYXRhKGlucHV0KSkpLFxuICAgICAgbWFwKHJlcyA9PiBnZXRFbnVtKHJlcywgbnVsbCwgdGhpcy5zY2hlbWEucmVhZE9ubHkhKSksXG4gICAgKTtcbiAgfVxuXG4gIHJlc2V0KHZhbHVlOiBTRlZhbHVlKSB7XG4gICAgdGhpcy50eXBpbmcgPSB0aGlzLnZhbHVlO1xuICAgIGlmICh0aGlzLmlzQXN5bmMpIHJldHVybjtcbiAgICBzd2l0Y2ggKHRoaXMudWkudHlwZSkge1xuICAgICAgY2FzZSAnZW1haWwnOlxuICAgICAgICB0aGlzLmZpeERhdGEgPSBnZXRDb3B5RW51bSh0aGlzLnNjaGVtYS5lbnVtISB8fCB0aGlzLmZvcm1Qcm9wZXJ0eS5vcHRpb25zLnVpRW1haWxTdWZmaXhlcywgbnVsbCwgdGhpcy5zY2hlbWEucmVhZE9ubHkhKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLmZpeERhdGEgPSBnZXRDb3B5RW51bShcbiAgICAgICAgICB0aGlzLnNjaGVtYS5lbnVtISxcbiAgICAgICAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5mb3JtRGF0YSxcbiAgICAgICAgICB0aGlzLnNjaGVtYS5yZWFkT25seSEsXG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZmlsdGVyRGF0YShpbnB1dDogc3RyaW5nKSB7XG4gICAgc3dpdGNoICh0aGlzLnVpLnR5cGUpIHtcbiAgICAgIGNhc2UgJ2VtYWlsJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkRW1haWxTdWZmaXgoaW5wdXQpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG9mKHRoaXMuZml4RGF0YS5maWx0ZXIob3B0aW9uID0+IHRoaXMuZmlsdGVyT3B0aW9uKGlucHV0LCBvcHRpb24pKSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhZGRFbWFpbFN1ZmZpeCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG9mKFxuICAgICAgIXZhbHVlIHx8IH52YWx1ZS5pbmRleE9mKCdAJykgPyBbXSA6IHRoaXMuZml4RGF0YS5tYXAoZG9tYWluID0+IGAke3ZhbHVlfUAke2RvbWFpbi5sYWJlbH1gKSxcbiAgICApO1xuICB9XG59XG4iXX0=