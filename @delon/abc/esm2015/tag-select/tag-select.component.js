/**
 * @fileoverview added by tsickle
 * Generated from: tag-select.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { Directionality } from '@angular/cdk/bidi';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Optional, Output, ViewEncapsulation, } from '@angular/core';
import { DelonLocaleService } from '@delon/theme';
import { InputBoolean } from '@delon/util/other';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
export class TagSelectComponent {
    /**
     * @param {?} i18n
     * @param {?} directionality
     * @param {?} cdr
     */
    constructor(i18n, directionality, cdr) {
        this.i18n = i18n;
        this.directionality = directionality;
        this.cdr = cdr;
        this.destroy$ = new Subject();
        this.locale = {};
        this.expand = false;
        this.dir = 'ltr';
        /**
         * 是否启用 `展开与收进`
         */
        this.expandable = true;
        this.change = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        var _a;
        this.dir = this.directionality.value;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} direction
         * @return {?}
         */
        (direction) => {
            this.dir = direction;
        }));
        this.i18n.change.pipe(takeUntil(this.destroy$)).subscribe((/**
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
        this.destroy$.next();
        this.destroy$.complete();
    }
}
TagSelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'tag-select',
                exportAs: 'tagSelect',
                template: "<ng-content></ng-content>\n<a *ngIf=\"expandable\" class=\"tag-select__trigger\" (click)=\"trigger()\">\n  {{ expand ? locale.collapse : locale.expand }}<i nz-icon [nzType]=\"expand ? 'up' : 'down'\" class=\"tag-select__trigger-icon\"></i>\n</a>\n",
                host: {
                    '[class.tag-select]': 'true',
                    '[class.tag-select-rtl]': `dir === 'rtl'`,
                    '[class.tag-select-rtl__has-expand]': `dir === 'rtl' && expandable`,
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
    { type: Directionality, decorators: [{ type: Optional }] },
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
    /** @type {?} */
    TagSelectComponent.ngAcceptInputType_expandable;
    /**
     * @type {?}
     * @private
     */
    TagSelectComponent.prototype.destroy$;
    /** @type {?} */
    TagSelectComponent.prototype.locale;
    /** @type {?} */
    TagSelectComponent.prototype.expand;
    /** @type {?} */
    TagSelectComponent.prototype.dir;
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
    TagSelectComponent.prototype.directionality;
    /**
     * @type {?}
     * @private
     */
    TagSelectComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvdGFnLXNlbGVjdC90YWctc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQWEsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUQsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBR0wsUUFBUSxFQUNSLE1BQU0sRUFDTixpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFjLE1BQU0sY0FBYyxDQUFDO0FBQzlELE9BQU8sRUFBZ0IsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0QsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFpQjNDLE1BQU0sT0FBTyxrQkFBa0I7Ozs7OztJQVk3QixZQUFvQixJQUF3QixFQUFzQixjQUE4QixFQUFVLEdBQXNCO1FBQTVHLFNBQUksR0FBSixJQUFJLENBQW9CO1FBQXNCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBVHhILGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBQ3ZDLFdBQU0sR0FBZSxFQUFFLENBQUM7UUFDeEIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLFFBQUcsR0FBYyxLQUFLLENBQUM7Ozs7UUFHRSxlQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO0lBRTJFLENBQUM7Ozs7SUFFcEksUUFBUTs7UUFDTixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDO1FBQ3JDLE1BQUEsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLDBDQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLFNBQVM7Ozs7UUFBQyxDQUFDLFNBQW9CLEVBQUUsRUFBRTtZQUM1RixJQUFJLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQztRQUN2QixDQUFDLEdBQUU7UUFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVM7OztRQUFDLEdBQUcsRUFBRTtZQUM3RCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDM0IsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsT0FBTztRQUNMLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7WUFoREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUUsV0FBVztnQkFDckIsbVFBQTBDO2dCQUMxQyxJQUFJLEVBQUU7b0JBQ0osb0JBQW9CLEVBQUUsTUFBTTtvQkFDNUIsd0JBQXdCLEVBQUUsZUFBZTtvQkFDekMsb0NBQW9DLEVBQUUsNkJBQTZCO29CQUNuRSxnQ0FBZ0MsRUFBRSxZQUFZO29CQUM5Qyw4QkFBOEIsRUFBRSxRQUFRO2lCQUN6QztnQkFDRCxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7Ozs7WUFuQlEsa0JBQWtCO1lBYlAsY0FBYyx1QkE2Q2UsUUFBUTtZQTFDdkQsaUJBQWlCOzs7eUJBdUNoQixLQUFLO3FCQUNMLE1BQU07O0FBRGtCO0lBQWYsWUFBWSxFQUFFOztzREFBbUI7OztJQVIzQyxnREFBa0Q7Ozs7O0lBRWxELHNDQUF1Qzs7SUFDdkMsb0NBQXdCOztJQUN4QixvQ0FBZTs7SUFDZixpQ0FBdUI7Ozs7O0lBR3ZCLHdDQUEyQzs7SUFDM0Msb0NBQXdEOzs7OztJQUU1QyxrQ0FBZ0M7Ozs7O0lBQUUsNENBQWtEOzs7OztJQUFFLGlDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERlbG9uTG9jYWxlU2VydmljZSwgTG9jYWxlRGF0YSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIElucHV0Qm9vbGVhbiB9IGZyb20gJ0BkZWxvbi91dGlsL290aGVyJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGFnLXNlbGVjdCcsXG4gIGV4cG9ydEFzOiAndGFnU2VsZWN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhZy1zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy50YWctc2VsZWN0XSc6ICd0cnVlJyxcbiAgICAnW2NsYXNzLnRhZy1zZWxlY3QtcnRsXSc6IGBkaXIgPT09ICdydGwnYCxcbiAgICAnW2NsYXNzLnRhZy1zZWxlY3QtcnRsX19oYXMtZXhwYW5kXSc6IGBkaXIgPT09ICdydGwnICYmIGV4cGFuZGFibGVgLFxuICAgICdbY2xhc3MudGFnLXNlbGVjdF9faGFzLWV4cGFuZF0nOiAnZXhwYW5kYWJsZScsXG4gICAgJ1tjbGFzcy50YWctc2VsZWN0X19leHBhbmRlZF0nOiAnZXhwYW5kJyxcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBUYWdTZWxlY3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9leHBhbmRhYmxlOiBCb29sZWFuSW5wdXQ7XG5cbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIGxvY2FsZTogTG9jYWxlRGF0YSA9IHt9O1xuICBleHBhbmQgPSBmYWxzZTtcbiAgZGlyOiBEaXJlY3Rpb24gPSAnbHRyJztcblxuICAvKiog5piv5ZCm5ZCv55SoIGDlsZXlvIDkuI7mlLbov5tgICovXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBleHBhbmRhYmxlID0gdHJ1ZTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGkxOG46IERlbG9uTG9jYWxlU2VydmljZSwgQE9wdGlvbmFsKCkgcHJpdmF0ZSBkaXJlY3Rpb25hbGl0eTogRGlyZWN0aW9uYWxpdHksIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmRpciA9IHRoaXMuZGlyZWN0aW9uYWxpdHkudmFsdWU7XG4gICAgdGhpcy5kaXJlY3Rpb25hbGl0eS5jaGFuZ2U/LnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKGRpcmVjdGlvbjogRGlyZWN0aW9uKSA9PiB7XG4gICAgICB0aGlzLmRpciA9IGRpcmVjdGlvbjtcbiAgICB9KTtcbiAgICB0aGlzLmkxOG4uY2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5sb2NhbGUgPSB0aGlzLmkxOG4uZ2V0RGF0YSgndGFnU2VsZWN0Jyk7XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gIH1cblxuICB0cmlnZ2VyKCk6IHZvaWQge1xuICAgIHRoaXMuZXhwYW5kID0gIXRoaXMuZXhwYW5kO1xuICAgIHRoaXMuY2hhbmdlLmVtaXQodGhpcy5leHBhbmQpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=