import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from '@delon/util/decorator';
import * as i0 from "@angular/core";
export class LayoutDefaultTopMenuItemComponent {
    constructor() {
        this.selected = false;
        this.disabled = false;
    }
}
LayoutDefaultTopMenuItemComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: LayoutDefaultTopMenuItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
LayoutDefaultTopMenuItemComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.4", type: LayoutDefaultTopMenuItemComponent, selector: "layout-default-top-menu-item", inputs: { selected: "selected", disabled: "disabled" }, host: { properties: { "class.alain-default__nav-item": "true", "class.alain-default__top-menu-item": "true", "class.alain-default__top-menu-item-selected": "selected", "class.alain-default__top-menu-item-disabled": "disabled" } }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    InputBoolean()
], LayoutDefaultTopMenuItemComponent.prototype, "selected", void 0);
__decorate([
    InputBoolean()
], LayoutDefaultTopMenuItemComponent.prototype, "disabled", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: LayoutDefaultTopMenuItemComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'layout-default-top-menu-item',
                    template: `<ng-content></ng-content>`,
                    host: {
                        '[class.alain-default__nav-item]': `true`,
                        '[class.alain-default__top-menu-item]': `true`,
                        '[class.alain-default__top-menu-item-selected]': `selected`,
                        '[class.alain-default__top-menu-item-disabled]': `disabled`
                    },
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }], propDecorators: { selected: [{
                type: Input
            }], disabled: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LXRvcC1tZW51LWl0ZW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90aGVtZS9sYXlvdXQtZGVmYXVsdC9sYXlvdXQtdG9wLW1lbnUtaXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0YsT0FBTyxFQUFnQixZQUFZLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFlbkUsTUFBTSxPQUFPLGlDQUFpQztJQWI5QztRQWlCMkIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixhQUFRLEdBQUcsS0FBSyxDQUFDO0tBQzNDOzs4SEFOWSxpQ0FBaUM7a0hBQWpDLGlDQUFpQyxtV0FYbEMsMkJBQTJCO0FBZVo7SUFBZixZQUFZLEVBQUU7bUVBQWtCO0FBQ2pCO0lBQWYsWUFBWSxFQUFFO21FQUFrQjsyRkFML0IsaUNBQWlDO2tCQWI3QyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSw4QkFBOEI7b0JBQ3hDLFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLElBQUksRUFBRTt3QkFDSixpQ0FBaUMsRUFBRSxNQUFNO3dCQUN6QyxzQ0FBc0MsRUFBRSxNQUFNO3dCQUM5QywrQ0FBK0MsRUFBRSxVQUFVO3dCQUMzRCwrQ0FBK0MsRUFBRSxVQUFVO3FCQUM1RDtvQkFDRCxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3RDOzhCQUswQixRQUFRO3NCQUFoQyxLQUFLO2dCQUNtQixRQUFRO3NCQUFoQyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgSW5wdXRCb29sZWFuIH0gZnJvbSAnQGRlbG9uL3V0aWwvZGVjb3JhdG9yJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGF5b3V0LWRlZmF1bHQtdG9wLW1lbnUtaXRlbScsXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFsYWluLWRlZmF1bHRfX25hdi1pdGVtXSc6IGB0cnVlYCxcbiAgICAnW2NsYXNzLmFsYWluLWRlZmF1bHRfX3RvcC1tZW51LWl0ZW1dJzogYHRydWVgLFxuICAgICdbY2xhc3MuYWxhaW4tZGVmYXVsdF9fdG9wLW1lbnUtaXRlbS1zZWxlY3RlZF0nOiBgc2VsZWN0ZWRgLFxuICAgICdbY2xhc3MuYWxhaW4tZGVmYXVsdF9fdG9wLW1lbnUtaXRlbS1kaXNhYmxlZF0nOiBgZGlzYWJsZWRgXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBMYXlvdXREZWZhdWx0VG9wTWVudUl0ZW1Db21wb25lbnQge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc2VsZWN0ZWQ6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Rpc2FibGVkOiBCb29sZWFuSW5wdXQ7XG5cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNlbGVjdGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkaXNhYmxlZCA9IGZhbHNlO1xufVxuIl19