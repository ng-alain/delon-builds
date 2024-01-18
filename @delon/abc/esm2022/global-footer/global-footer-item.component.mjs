import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from '@delon/util/decorator';
import * as i0 from "@angular/core";
export class GlobalFooterItemComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: GlobalFooterItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0", type: GlobalFooterItemComponent, isStandalone: true, selector: "global-footer-item", inputs: { href: "href", blankTarget: "blankTarget" }, viewQueries: [{ propertyName: "host", first: true, predicate: ["host"], descendants: true, static: true }], exportAs: ["globalFooterItem"], ngImport: i0, template: ` <ng-template #host><ng-content /></ng-template> `, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
__decorate([
    InputBoolean()
], GlobalFooterItemComponent.prototype, "blankTarget", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: GlobalFooterItemComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'global-footer-item',
                    exportAs: 'globalFooterItem',
                    template: ` <ng-template #host><ng-content /></ng-template> `,
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    standalone: true
                }]
        }], propDecorators: { host: [{
                type: ViewChild,
                args: ['host', { static: true }]
            }], href: [{
                type: Input
            }], blankTarget: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLWZvb3Rlci1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9nbG9iYWwtZm9vdGVyL2dsb2JhbC1mb290ZXItaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFlLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVySCxPQUFPLEVBQWdCLFlBQVksRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQVduRSxNQUFNLE9BQU8seUJBQXlCOzhHQUF6Qix5QkFBeUI7a0dBQXpCLHlCQUF5QixnUkFOMUIsbURBQW1EOztBQVlwQztJQUFmLFlBQVksRUFBRTs4REFBdUI7MkZBTnBDLHlCQUF5QjtrQkFUckMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixRQUFRLEVBQUUsbURBQW1EO29CQUM3RCxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLFVBQVUsRUFBRSxJQUFJO2lCQUNqQjs4QkFJc0MsSUFBSTtzQkFBeEMsU0FBUzt1QkFBQyxNQUFNLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2dCQUUxQixJQUFJO3NCQUFaLEtBQUs7Z0JBQ21CLFdBQVc7c0JBQW5DLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBJbnB1dEJvb2xlYW4gfSBmcm9tICdAZGVsb24vdXRpbC9kZWNvcmF0b3InO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnbG9iYWwtZm9vdGVyLWl0ZW0nLFxuICBleHBvcnRBczogJ2dsb2JhbEZvb3Rlckl0ZW0nLFxuICB0ZW1wbGF0ZTogYCA8bmctdGVtcGxhdGUgI2hvc3Q+PG5nLWNvbnRlbnQgLz48L25nLXRlbXBsYXRlPiBgLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHN0YW5kYWxvbmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgR2xvYmFsRm9vdGVySXRlbUNvbXBvbmVudCB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9ibGFua1RhcmdldDogQm9vbGVhbklucHV0O1xuXG4gIEBWaWV3Q2hpbGQoJ2hvc3QnLCB7IHN0YXRpYzogdHJ1ZSB9KSBob3N0ITogVGVtcGxhdGVSZWY8dm9pZD47XG5cbiAgQElucHV0KCkgaHJlZj86IHN0cmluZztcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJsYW5rVGFyZ2V0PzogYm9vbGVhbjtcbn1cbiJdfQ==