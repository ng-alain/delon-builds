/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, } from '@angular/core';
import { DelonLocaleService } from '@delon/theme';
import { InputBoolean } from '@delon/util';
var TagSelectComponent = /** @class */ (function () {
    function TagSelectComponent(i18n, cdr) {
        this.i18n = i18n;
        this.cdr = cdr;
        this.locale = {};
        this.expand = false;
        /**
         * 是否启用 `展开与收进`
         */
        this.expandable = true;
        this.change = new EventEmitter();
    }
    /**
     * @return {?}
     */
    TagSelectComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.i18n$ = this.i18n.change.subscribe((/**
         * @return {?}
         */
        function () {
            _this.locale = _this.i18n.getData('tagSelect');
            _this.cdr.detectChanges();
        }));
    };
    /**
     * @return {?}
     */
    TagSelectComponent.prototype.trigger = /**
     * @return {?}
     */
    function () {
        this.expand = !this.expand;
        this.change.emit(this.expand);
    };
    /**
     * @return {?}
     */
    TagSelectComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.i18n$.unsubscribe();
    };
    TagSelectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tag-select',
                    exportAs: 'tagSelect',
                    template: "<ng-content></ng-content>\n<a *ngIf=\"expandable\" class=\"tag-select__trigger\" (click)=\"trigger()\">\n  {{expand ? locale.collapse : locale.expand}}<i nz-icon [type]=\"expand ? 'up' : 'down'\" class=\"tag-select__trigger-icon\"></i>\n</a>\n",
                    host: {
                        '[class.tag-select]': 'true',
                        '[class.tag-select__has-expand]': 'expandable',
                        '[class.tag-select__expanded]': 'expand',
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    TagSelectComponent.ctorParameters = function () { return [
        { type: DelonLocaleService },
        { type: ChangeDetectorRef }
    ]; };
    TagSelectComponent.propDecorators = {
        expandable: [{ type: Input }],
        change: [{ type: Output }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], TagSelectComponent.prototype, "expandable", void 0);
    return TagSelectComponent;
}());
export { TagSelectComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    TagSelectComponent.prototype.i18n$;
    /** @type {?} */
    TagSelectComponent.prototype.locale;
    /** @type {?} */
    TagSelectComponent.prototype.expand;
    /**
     * 是否启用 `展开与收进`
     * @type {?}
     */
    TagSelectComponent.prototype.expandable;
    /** @type {?} */
    TagSelectComponent.prototype.change;
    /**
     * @type {?}
     * @private
     */
    TagSelectComponent.prototype.i18n;
    /**
     * @type {?}
     * @private
     */
    TagSelectComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL3RhZy1zZWxlY3QvIiwic291cmNlcyI6WyJ0YWctc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUd2QixPQUFPLEVBQUUsa0JBQWtCLEVBQWMsTUFBTSxjQUFjLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUUzQztJQW9CRSw0QkFBb0IsSUFBd0IsRUFBVSxHQUFzQjtRQUF4RCxTQUFJLEdBQUosSUFBSSxDQUFvQjtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBUDVFLFdBQU0sR0FBZSxFQUFFLENBQUM7UUFDeEIsV0FBTSxHQUFHLEtBQUssQ0FBQzs7OztRQUdVLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFDeEIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7SUFFdUIsQ0FBQzs7OztJQUVoRixxQ0FBUTs7O0lBQVI7UUFBQSxpQkFLQztRQUpDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUzs7O1FBQUM7WUFDdEMsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUM3QyxLQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzNCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELG9DQUFPOzs7SUFBUDtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7O0lBRUQsd0NBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMzQixDQUFDOztnQkFwQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QixRQUFRLEVBQUUsV0FBVztvQkFDckIsK1BBQTBDO29CQUMxQyxJQUFJLEVBQUU7d0JBQ0osb0JBQW9CLEVBQUUsTUFBTTt3QkFDNUIsZ0NBQWdDLEVBQUUsWUFBWTt3QkFDOUMsOEJBQThCLEVBQUUsUUFBUTtxQkFDekM7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7O2dCQWJRLGtCQUFrQjtnQkFWekIsaUJBQWlCOzs7NkJBOEJoQixLQUFLO3lCQUNMLE1BQU07O0lBRGtCO1FBQWYsWUFBWSxFQUFFOzswREFBbUI7SUFvQjdDLHlCQUFDO0NBQUEsQUFyQ0QsSUFxQ0M7U0ExQlksa0JBQWtCOzs7Ozs7SUFDN0IsbUNBQTRCOztJQUM1QixvQ0FBd0I7O0lBQ3hCLG9DQUFlOzs7OztJQUdmLHdDQUEyQzs7SUFDM0Msb0NBQXdEOzs7OztJQUU1QyxrQ0FBZ0M7Ozs7O0lBQUUsaUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IERlbG9uTG9jYWxlU2VydmljZSwgTG9jYWxlRGF0YSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhZy1zZWxlY3QnLFxuICBleHBvcnRBczogJ3RhZ1NlbGVjdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWctc2VsZWN0LmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MudGFnLXNlbGVjdF0nOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy50YWctc2VsZWN0X19oYXMtZXhwYW5kXSc6ICdleHBhbmRhYmxlJyxcbiAgICAnW2NsYXNzLnRhZy1zZWxlY3RfX2V4cGFuZGVkXSc6ICdleHBhbmQnLFxuICB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVGFnU2VsZWN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGkxOG4kOiBTdWJzY3JpcHRpb247XG4gIGxvY2FsZTogTG9jYWxlRGF0YSA9IHt9O1xuICBleHBhbmQgPSBmYWxzZTtcblxuICAvKiog5piv5ZCm5ZCv55SoIGDlsZXlvIDkuI7mlLbov5tgICovXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBleHBhbmRhYmxlID0gdHJ1ZTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGkxOG46IERlbG9uTG9jYWxlU2VydmljZSwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaTE4biQgPSB0aGlzLmkxOG4uY2hhbmdlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmxvY2FsZSA9IHRoaXMuaTE4bi5nZXREYXRhKCd0YWdTZWxlY3QnKTtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHRyaWdnZXIoKSB7XG4gICAgdGhpcy5leHBhbmQgPSAhdGhpcy5leHBhbmQ7XG4gICAgdGhpcy5jaGFuZ2UuZW1pdCh0aGlzLmV4cGFuZCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmkxOG4kLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==