import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation, booleanAttribute } from '@angular/core';
import * as i0 from "@angular/core";
export class LayoutDefaultTopMenuItemComponent {
    constructor() {
        this.selected = false;
        this.disabled = false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.5", ngImport: i0, type: LayoutDefaultTopMenuItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "18.0.5", type: LayoutDefaultTopMenuItemComponent, selector: "layout-default-top-menu-item", inputs: { selected: ["selected", "selected", booleanAttribute], disabled: ["disabled", "disabled", booleanAttribute] }, host: { properties: { "class.alain-default__nav-item": "true", "class.alain-default__top-menu-item": "true", "class.alain-default__top-menu-item-selected": "selected", "class.alain-default__top-menu-item-disabled": "disabled" } }, ngImport: i0, template: `<ng-content />`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.5", ngImport: i0, type: LayoutDefaultTopMenuItemComponent, decorators: [{
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
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], disabled: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LXRvcC1tZW51LWl0ZW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90aGVtZS9sYXlvdXQtZGVmYXVsdC9sYXlvdXQtdG9wLW1lbnUtaXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFlL0csTUFBTSxPQUFPLGlDQUFpQztJQWI5QztRQWMwQyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGFBQVEsR0FBRyxLQUFLLENBQUM7S0FDMUQ7OEdBSFksaUNBQWlDO2tHQUFqQyxpQ0FBaUMseUZBQ3hCLGdCQUFnQixzQ0FDaEIsZ0JBQWdCLG9RQWIxQixnQkFBZ0I7OzJGQVdmLGlDQUFpQztrQkFiN0MsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsOEJBQThCO29CQUN4QyxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixJQUFJLEVBQUU7d0JBQ0osaUNBQWlDLEVBQUUsTUFBTTt3QkFDekMsc0NBQXNDLEVBQUUsTUFBTTt3QkFDOUMsK0NBQStDLEVBQUUsVUFBVTt3QkFDM0QsK0NBQStDLEVBQUUsVUFBVTtxQkFDNUQ7b0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUN0Qzs4QkFFeUMsUUFBUTtzQkFBL0MsS0FBSzt1QkFBQyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRTtnQkFDRSxRQUFRO3NCQUEvQyxLQUFLO3VCQUFDLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBib29sZWFuQXR0cmlidXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xheW91dC1kZWZhdWx0LXRvcC1tZW51LWl0ZW0nLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50IC8+YCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYWxhaW4tZGVmYXVsdF9fbmF2LWl0ZW1dJzogYHRydWVgLFxuICAgICdbY2xhc3MuYWxhaW4tZGVmYXVsdF9fdG9wLW1lbnUtaXRlbV0nOiBgdHJ1ZWAsXG4gICAgJ1tjbGFzcy5hbGFpbi1kZWZhdWx0X190b3AtbWVudS1pdGVtLXNlbGVjdGVkXSc6IGBzZWxlY3RlZGAsXG4gICAgJ1tjbGFzcy5hbGFpbi1kZWZhdWx0X190b3AtbWVudS1pdGVtLWRpc2FibGVkXSc6IGBkaXNhYmxlZGBcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIExheW91dERlZmF1bHRUb3BNZW51SXRlbUNvbXBvbmVudCB7XG4gIEBJbnB1dCh7IHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZSB9KSBzZWxlY3RlZCA9IGZhbHNlO1xuICBASW5wdXQoeyB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGUgfSkgZGlzYWJsZWQgPSBmYWxzZTtcbn1cbiJdfQ==