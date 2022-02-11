import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/tooltip";
export class SVValueComponent {
    constructor() {
        this.size = 'default';
    }
}
SVValueComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: SVValueComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SVValueComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: SVValueComponent, selector: "sv-value, [sv-value]", inputs: { prefix: "prefix", unit: "unit", tooltip: "tooltip", size: "size" }, host: { properties: { "class.sv__value": "true", "class.sv__value-small": "size === 'small'", "class.sv__value-large": "size === 'large'" } }, exportAs: ["svValue"], ngImport: i0, template: `
    <em *ngIf="prefix" class="sv__value-prefix" [innerHTML]="prefix"></em>
    <span nz-tooltip [nzTooltipTitle]="tooltip" class="sv__value-text"><ng-content></ng-content></span>
    <em *ngIf="unit" class="sv__value-unit" [innerHTML]="unit"></em>
  `, isInline: true, directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2.NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: SVValueComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'sv-value, [sv-value]',
                    exportAs: 'svValue',
                    template: `
    <em *ngIf="prefix" class="sv__value-prefix" [innerHTML]="prefix"></em>
    <span nz-tooltip [nzTooltipTitle]="tooltip" class="sv__value-text"><ng-content></ng-content></span>
    <em *ngIf="unit" class="sv__value-unit" [innerHTML]="unit"></em>
  `,
                    host: {
                        '[class.sv__value]': 'true',
                        '[class.sv__value-small]': `size === 'small'`,
                        '[class.sv__value-large]': `size === 'large'`
                    },
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }], propDecorators: { prefix: [{
                type: Input
            }], unit: [{
                type: Input
            }], tooltip: [{
                type: Input
            }], size: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3YtdmFsdWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3N2L3N2LXZhbHVlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQXFCN0YsTUFBTSxPQUFPLGdCQUFnQjtJQWpCN0I7UUFxQlcsU0FBSSxHQUFrQyxTQUFTLENBQUM7S0FDMUQ7OzZHQUxZLGdCQUFnQjtpR0FBaEIsZ0JBQWdCLGdUQWRqQjs7OztHQUlUOzJGQVVVLGdCQUFnQjtrQkFqQjVCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLFFBQVEsRUFBRTs7OztHQUlUO29CQUNELElBQUksRUFBRTt3QkFDSixtQkFBbUIsRUFBRSxNQUFNO3dCQUMzQix5QkFBeUIsRUFBRSxrQkFBa0I7d0JBQzdDLHlCQUF5QixFQUFFLGtCQUFrQjtxQkFDOUM7b0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUN0Qzs4QkFFVSxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLE9BQU87c0JBQWYsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHR5cGUgeyBOelRTVHlwZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N2LXZhbHVlLCBbc3YtdmFsdWVdJyxcbiAgZXhwb3J0QXM6ICdzdlZhbHVlJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZW0gKm5nSWY9XCJwcmVmaXhcIiBjbGFzcz1cInN2X192YWx1ZS1wcmVmaXhcIiBbaW5uZXJIVE1MXT1cInByZWZpeFwiPjwvZW0+XG4gICAgPHNwYW4gbnotdG9vbHRpcCBbbnpUb29sdGlwVGl0bGVdPVwidG9vbHRpcFwiIGNsYXNzPVwic3ZfX3ZhbHVlLXRleHRcIj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9zcGFuPlxuICAgIDxlbSAqbmdJZj1cInVuaXRcIiBjbGFzcz1cInN2X192YWx1ZS11bml0XCIgW2lubmVySFRNTF09XCJ1bml0XCI+PC9lbT5cbiAgYCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3Muc3ZfX3ZhbHVlXSc6ICd0cnVlJyxcbiAgICAnW2NsYXNzLnN2X192YWx1ZS1zbWFsbF0nOiBgc2l6ZSA9PT0gJ3NtYWxsJ2AsXG4gICAgJ1tjbGFzcy5zdl9fdmFsdWUtbGFyZ2VdJzogYHNpemUgPT09ICdsYXJnZSdgXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTVlZhbHVlQ29tcG9uZW50IHtcbiAgQElucHV0KCkgcHJlZml4Pzogc3RyaW5nO1xuICBASW5wdXQoKSB1bml0Pzogc3RyaW5nO1xuICBASW5wdXQoKSB0b29sdGlwPzogTnpUU1R5cGUgfCBudWxsO1xuICBASW5wdXQoKSBzaXplOiAnbGFyZ2UnIHwgJ3NtYWxsJyB8ICdkZWZhdWx0JyA9ICdkZWZhdWx0Jztcbn1cbiJdfQ==