import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from '@delon/util/decorator';
import * as i0 from "@angular/core";
export class GlobalFooterItemComponent {
}
/** @nocollapse */ GlobalFooterItemComponent.ɵfac = function GlobalFooterItemComponent_Factory(t) { return new (t || GlobalFooterItemComponent)(); };
/** @nocollapse */ GlobalFooterItemComponent.ɵcmp = i0.ɵɵngDeclareComponent({ version: "11.1.1", type: GlobalFooterItemComponent, selector: "global-footer-item", inputs: { href: "href", blankTarget: "blankTarget" }, viewQueries: [{ propertyName: "host", first: true, predicate: ["host"], emitDistinctChangesOnly: false, descendants: true, static: true }], exportAs: ["globalFooterItem"], ngImport: i0, template: ` <ng-template #host><ng-content></ng-content></ng-template> `, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], GlobalFooterItemComponent.prototype, "blankTarget", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GlobalFooterItemComponent, [{
        type: Component,
        args: [{
                selector: 'global-footer-item',
                exportAs: 'globalFooterItem',
                template: ` <ng-template #host><ng-content></ng-content></ng-template> `,
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], null, { host: [{
            type: ViewChild,
            args: ['host', { static: true }]
        }], href: [{
            type: Input
        }], blankTarget: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLWZvb3Rlci1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9nbG9iYWwtZm9vdGVyL2dsb2JhbC1mb290ZXItaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEgsT0FBTyxFQUFnQixZQUFZLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFVbkUsTUFBTSxPQUFPLHlCQUF5Qjs7cUhBQXpCLHlCQUF5Qjt1R0FBekIseUJBQXlCLDRSQUwxQiw4REFBOEQ7QUFXL0M7SUFBZixZQUFZLEVBQUU7OzhEQUFzQjt1RkFObkMseUJBQXlCO2NBUnJDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixRQUFRLEVBQUUsOERBQThEO2dCQUN4RSxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7Z0JBSXNDLElBQUk7a0JBQXhDLFNBQVM7bUJBQUMsTUFBTSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQUUxQixJQUFJO2tCQUFaLEtBQUs7WUFDbUIsV0FBVztrQkFBbkMsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIElucHV0Qm9vbGVhbiB9IGZyb20gJ0BkZWxvbi91dGlsL2RlY29yYXRvcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dsb2JhbC1mb290ZXItaXRlbScsXG4gIGV4cG9ydEFzOiAnZ2xvYmFsRm9vdGVySXRlbScsXG4gIHRlbXBsYXRlOiBgIDxuZy10ZW1wbGF0ZSAjaG9zdD48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9uZy10ZW1wbGF0ZT4gYCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBHbG9iYWxGb290ZXJJdGVtQ29tcG9uZW50IHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2JsYW5rVGFyZ2V0OiBCb29sZWFuSW5wdXQ7XG5cbiAgQFZpZXdDaGlsZCgnaG9zdCcsIHsgc3RhdGljOiB0cnVlIH0pIGhvc3Q6IEVsZW1lbnRSZWY7XG5cbiAgQElucHV0KCkgaHJlZjogc3RyaW5nO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYmxhbmtUYXJnZXQ6IGJvb2xlYW47XG59XG4iXX0=