import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from '@delon/util/decorator';
import * as i0 from "@angular/core";
export class LayoutDefaultTopMenuItemComponent {
    constructor() {
        this.selected = false;
        this.disabled = false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.3", ngImport: i0, type: LayoutDefaultTopMenuItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.3", type: LayoutDefaultTopMenuItemComponent, selector: "layout-default-top-menu-item", inputs: { selected: "selected", disabled: "disabled" }, host: { properties: { "class.alain-default__nav-item": "true", "class.alain-default__top-menu-item": "true", "class.alain-default__top-menu-item-selected": "selected", "class.alain-default__top-menu-item-disabled": "disabled" } }, ngImport: i0, template: `<ng-content />`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
__decorate([
    InputBoolean()
], LayoutDefaultTopMenuItemComponent.prototype, "selected", void 0);
__decorate([
    InputBoolean()
], LayoutDefaultTopMenuItemComponent.prototype, "disabled", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.3", ngImport: i0, type: LayoutDefaultTopMenuItemComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'layout-default-top-menu-item',
                    template: `<ng-content />`,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LXRvcC1tZW51LWl0ZW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90aGVtZS9sYXlvdXQtZGVmYXVsdC9sYXlvdXQtdG9wLW1lbnUtaXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0YsT0FBTyxFQUFnQixZQUFZLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFlbkUsTUFBTSxPQUFPLGlDQUFpQztJQWI5QztRQWlCMkIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixhQUFRLEdBQUcsS0FBSyxDQUFDO0tBQzNDOzhHQU5ZLGlDQUFpQztrR0FBakMsaUNBQWlDLG1XQVhsQyxnQkFBZ0I7O0FBZUQ7SUFBZixZQUFZLEVBQUU7bUVBQWtCO0FBQ2pCO0lBQWYsWUFBWSxFQUFFO21FQUFrQjsyRkFML0IsaUNBQWlDO2tCQWI3QyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSw4QkFBOEI7b0JBQ3hDLFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLElBQUksRUFBRTt3QkFDSixpQ0FBaUMsRUFBRSxNQUFNO3dCQUN6QyxzQ0FBc0MsRUFBRSxNQUFNO3dCQUM5QywrQ0FBK0MsRUFBRSxVQUFVO3dCQUMzRCwrQ0FBK0MsRUFBRSxVQUFVO3FCQUM1RDtvQkFDRCxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3RDOzhCQUswQixRQUFRO3NCQUFoQyxLQUFLO2dCQUNtQixRQUFRO3NCQUFoQyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgSW5wdXRCb29sZWFuIH0gZnJvbSAnQGRlbG9uL3V0aWwvZGVjb3JhdG9yJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGF5b3V0LWRlZmF1bHQtdG9wLW1lbnUtaXRlbScsXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQgLz5gLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbGFpbi1kZWZhdWx0X19uYXYtaXRlbV0nOiBgdHJ1ZWAsXG4gICAgJ1tjbGFzcy5hbGFpbi1kZWZhdWx0X190b3AtbWVudS1pdGVtXSc6IGB0cnVlYCxcbiAgICAnW2NsYXNzLmFsYWluLWRlZmF1bHRfX3RvcC1tZW51LWl0ZW0tc2VsZWN0ZWRdJzogYHNlbGVjdGVkYCxcbiAgICAnW2NsYXNzLmFsYWluLWRlZmF1bHRfX3RvcC1tZW51LWl0ZW0tZGlzYWJsZWRdJzogYGRpc2FibGVkYFxuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgTGF5b3V0RGVmYXVsdFRvcE1lbnVJdGVtQ29tcG9uZW50IHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3NlbGVjdGVkOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9kaXNhYmxlZDogQm9vbGVhbklucHV0O1xuXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzZWxlY3RlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZGlzYWJsZWQgPSBmYWxzZTtcbn1cbiJdfQ==