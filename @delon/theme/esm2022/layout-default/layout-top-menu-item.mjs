import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from '@delon/util/decorator';
import * as i0 from "@angular/core";
class LayoutDefaultTopMenuItemComponent {
    constructor() {
        this.selected = false;
        this.disabled = false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.2", ngImport: i0, type: LayoutDefaultTopMenuItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.2", type: LayoutDefaultTopMenuItemComponent, selector: "layout-default-top-menu-item", inputs: { selected: "selected", disabled: "disabled" }, host: { properties: { "class.alain-default__nav-item": "true", "class.alain-default__top-menu-item": "true", "class.alain-default__top-menu-item-selected": "selected", "class.alain-default__top-menu-item-disabled": "disabled" } }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
__decorate([
    InputBoolean()
], LayoutDefaultTopMenuItemComponent.prototype, "selected", void 0);
__decorate([
    InputBoolean()
], LayoutDefaultTopMenuItemComponent.prototype, "disabled", void 0);
export { LayoutDefaultTopMenuItemComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.2", ngImport: i0, type: LayoutDefaultTopMenuItemComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LXRvcC1tZW51LWl0ZW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90aGVtZS9sYXlvdXQtZGVmYXVsdC9sYXlvdXQtdG9wLW1lbnUtaXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0YsT0FBTyxFQUFnQixZQUFZLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFFbkUsTUFhYSxpQ0FBaUM7SUFiOUM7UUFpQjJCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsYUFBUSxHQUFHLEtBQUssQ0FBQztLQUMzQzs4R0FOWSxpQ0FBaUM7a0dBQWpDLGlDQUFpQyxtV0FYbEMsMkJBQTJCOztBQWVaO0lBQWYsWUFBWSxFQUFFO21FQUFrQjtBQUNqQjtJQUFmLFlBQVksRUFBRTttRUFBa0I7U0FML0IsaUNBQWlDOzJGQUFqQyxpQ0FBaUM7a0JBYjdDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLDhCQUE4QjtvQkFDeEMsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMsSUFBSSxFQUFFO3dCQUNKLGlDQUFpQyxFQUFFLE1BQU07d0JBQ3pDLHNDQUFzQyxFQUFFLE1BQU07d0JBQzlDLCtDQUErQyxFQUFFLFVBQVU7d0JBQzNELCtDQUErQyxFQUFFLFVBQVU7cUJBQzVEO29CQUNELG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDdEM7OEJBSzBCLFFBQVE7c0JBQWhDLEtBQUs7Z0JBQ21CLFFBQVE7c0JBQWhDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBJbnB1dEJvb2xlYW4gfSBmcm9tICdAZGVsb24vdXRpbC9kZWNvcmF0b3InO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsYXlvdXQtZGVmYXVsdC10b3AtbWVudS1pdGVtJyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYWxhaW4tZGVmYXVsdF9fbmF2LWl0ZW1dJzogYHRydWVgLFxuICAgICdbY2xhc3MuYWxhaW4tZGVmYXVsdF9fdG9wLW1lbnUtaXRlbV0nOiBgdHJ1ZWAsXG4gICAgJ1tjbGFzcy5hbGFpbi1kZWZhdWx0X190b3AtbWVudS1pdGVtLXNlbGVjdGVkXSc6IGBzZWxlY3RlZGAsXG4gICAgJ1tjbGFzcy5hbGFpbi1kZWZhdWx0X190b3AtbWVudS1pdGVtLWRpc2FibGVkXSc6IGBkaXNhYmxlZGBcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIExheW91dERlZmF1bHRUb3BNZW51SXRlbUNvbXBvbmVudCB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9zZWxlY3RlZDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZGlzYWJsZWQ6IEJvb2xlYW5JbnB1dDtcblxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2VsZWN0ZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRpc2FibGVkID0gZmFsc2U7XG59XG4iXX0=