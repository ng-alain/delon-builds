/**
 * @fileoverview added by tsickle
 * Generated from: tag-select.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewEncapsulation, } from '@angular/core';
import { DelonLocaleService } from '@delon/theme';
import { InputBoolean } from '@delon/util';
export class TagSelectComponent {
    /**
     * @param {?} i18n
     * @param {?} cdr
     */
    constructor(i18n, cdr) {
        this.i18n = i18n;
        this.cdr = cdr;
        this.locale = {};
        this.expand = false;
        /**
         * 是否启用 `展开与收进`
         */
        this.expandable = true;
        // tslint:disable-next-line:no-output-native
        this.change = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.i18n$ = this.i18n.change.subscribe((/**
         * @return {?}
         */
        () => {
            this.locale = this.i18n.getData('tagSelect');
            this.cdr.detectChanges();
        }));
    }
    /**
     * @return {?}
     */
    trigger() {
        this.expand = !this.expand;
        this.change.emit(this.expand);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.i18n$.unsubscribe();
    }
}
TagSelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'tag-select',
                exportAs: 'tagSelect',
                template: "<ng-content></ng-content>\n<a *ngIf=\"expandable\" class=\"tag-select__trigger\" (click)=\"trigger()\">\n  {{expand ? locale.collapse : locale.expand}}<i nz-icon [nzType]=\"expand ? 'up' : 'down'\" class=\"tag-select__trigger-icon\"></i>\n</a>\n",
                host: {
                    '[class.tag-select]': 'true',
                    '[class.tag-select__has-expand]': 'expandable',
                    '[class.tag-select__expanded]': 'expand',
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
TagSelectComponent.ctorParameters = () => [
    { type: DelonLocaleService },
    { type: ChangeDetectorRef }
];
TagSelectComponent.propDecorators = {
    expandable: [{ type: Input }],
    change: [{ type: Output }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], TagSelectComponent.prototype, "expandable", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL3RhZy1zZWxlY3QvIiwic291cmNlcyI6WyJ0YWctc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBQ04saUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBYyxNQUFNLGNBQWMsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBZ0IzQyxNQUFNLE9BQU8sa0JBQWtCOzs7OztJQVU3QixZQUFvQixJQUF3QixFQUFVLEdBQXNCO1FBQXhELFNBQUksR0FBSixJQUFJLENBQW9CO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFSNUUsV0FBTSxHQUFlLEVBQUUsQ0FBQztRQUN4QixXQUFNLEdBQUcsS0FBSyxDQUFDOzs7O1FBR1UsZUFBVSxHQUFHLElBQUksQ0FBQzs7UUFFeEIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7SUFFdUIsQ0FBQzs7OztJQUVoRixRQUFRO1FBQ04sSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTOzs7UUFBQyxHQUFHLEVBQUU7WUFDM0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUM3QyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzNCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELE9BQU87UUFDTCxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzNCLENBQUM7OztZQXZDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFFBQVEsRUFBRSxXQUFXO2dCQUNyQixpUUFBMEM7Z0JBQzFDLElBQUksRUFBRTtvQkFDSixvQkFBb0IsRUFBRSxNQUFNO29CQUM1QixnQ0FBZ0MsRUFBRSxZQUFZO29CQUM5Qyw4QkFBOEIsRUFBRSxRQUFRO2lCQUN6QztnQkFDRCxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7Ozs7WUFoQlEsa0JBQWtCO1lBVHpCLGlCQUFpQjs7O3lCQWdDaEIsS0FBSztxQkFFTCxNQUFNOztBQUZrQjtJQUFmLFlBQVksRUFBRTs7c0RBQW1COzs7Ozs7SUFMM0MsbUNBQTRCOztJQUM1QixvQ0FBd0I7O0lBQ3hCLG9DQUFlOzs7OztJQUdmLHdDQUEyQzs7SUFFM0Msb0NBQXdEOzs7OztJQUU1QyxrQ0FBZ0M7Ozs7O0lBQUUsaUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERlbG9uTG9jYWxlU2VydmljZSwgTG9jYWxlRGF0YSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGFnLXNlbGVjdCcsXG4gIGV4cG9ydEFzOiAndGFnU2VsZWN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhZy1zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy50YWctc2VsZWN0XSc6ICd0cnVlJyxcbiAgICAnW2NsYXNzLnRhZy1zZWxlY3RfX2hhcy1leHBhbmRdJzogJ2V4cGFuZGFibGUnLFxuICAgICdbY2xhc3MudGFnLXNlbGVjdF9fZXhwYW5kZWRdJzogJ2V4cGFuZCcsXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgVGFnU2VsZWN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGkxOG4kOiBTdWJzY3JpcHRpb247XG4gIGxvY2FsZTogTG9jYWxlRGF0YSA9IHt9O1xuICBleHBhbmQgPSBmYWxzZTtcblxuICAvKiog5piv5ZCm5ZCv55SoIGDlsZXlvIDkuI7mlLbov5tgICovXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBleHBhbmRhYmxlID0gdHJ1ZTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLW91dHB1dC1uYXRpdmVcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGkxOG46IERlbG9uTG9jYWxlU2VydmljZSwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaTE4biQgPSB0aGlzLmkxOG4uY2hhbmdlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmxvY2FsZSA9IHRoaXMuaTE4bi5nZXREYXRhKCd0YWdTZWxlY3QnKTtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHRyaWdnZXIoKSB7XG4gICAgdGhpcy5leHBhbmQgPSAhdGhpcy5leHBhbmQ7XG4gICAgdGhpcy5jaGFuZ2UuZW1pdCh0aGlzLmV4cGFuZCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmkxOG4kLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==