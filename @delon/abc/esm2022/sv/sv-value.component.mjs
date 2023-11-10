import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/tooltip";
export class SVValueComponent {
    constructor() {
        this.size = 'default';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: SVValueComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.2", type: SVValueComponent, selector: "sv-value, [sv-value]", inputs: { prefix: "prefix", unit: "unit", tooltip: "tooltip", size: "size" }, host: { properties: { "class.sv__value": "true", "class.sv__value-small": "size === 'small'", "class.sv__value-large": "size === 'large'" } }, exportAs: ["svValue"], ngImport: i0, template: `
    <em *ngIf="prefix" class="sv__value-prefix" [innerHTML]="prefix"></em>
    <span nz-tooltip [nzTooltipTitle]="tooltip" class="sv__value-text"><ng-content /></span>
    <em *ngIf="unit" class="sv__value-unit" [innerHTML]="unit"></em>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: SVValueComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'sv-value, [sv-value]',
                    exportAs: 'svValue',
                    template: `
    <em *ngIf="prefix" class="sv__value-prefix" [innerHTML]="prefix"></em>
    <span nz-tooltip [nzTooltipTitle]="tooltip" class="sv__value-text"><ng-content /></span>
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3YtdmFsdWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3N2L3N2LXZhbHVlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQXFCN0YsTUFBTSxPQUFPLGdCQUFnQjtJQWpCN0I7UUFxQlcsU0FBSSxHQUFrQyxTQUFTLENBQUM7S0FDMUQ7OEdBTFksZ0JBQWdCO2tHQUFoQixnQkFBZ0IsZ1RBZGpCOzs7O0dBSVQ7OzJGQVVVLGdCQUFnQjtrQkFqQjVCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLFFBQVEsRUFBRTs7OztHQUlUO29CQUNELElBQUksRUFBRTt3QkFDSixtQkFBbUIsRUFBRSxNQUFNO3dCQUMzQix5QkFBeUIsRUFBRSxrQkFBa0I7d0JBQzdDLHlCQUF5QixFQUFFLGtCQUFrQjtxQkFDOUM7b0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUN0Qzs4QkFFVSxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLE9BQU87c0JBQWYsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHR5cGUgeyBOelRTVHlwZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N2LXZhbHVlLCBbc3YtdmFsdWVdJyxcbiAgZXhwb3J0QXM6ICdzdlZhbHVlJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZW0gKm5nSWY9XCJwcmVmaXhcIiBjbGFzcz1cInN2X192YWx1ZS1wcmVmaXhcIiBbaW5uZXJIVE1MXT1cInByZWZpeFwiPjwvZW0+XG4gICAgPHNwYW4gbnotdG9vbHRpcCBbbnpUb29sdGlwVGl0bGVdPVwidG9vbHRpcFwiIGNsYXNzPVwic3ZfX3ZhbHVlLXRleHRcIj48bmctY29udGVudCAvPjwvc3Bhbj5cbiAgICA8ZW0gKm5nSWY9XCJ1bml0XCIgY2xhc3M9XCJzdl9fdmFsdWUtdW5pdFwiIFtpbm5lckhUTUxdPVwidW5pdFwiPjwvZW0+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLnN2X192YWx1ZV0nOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy5zdl9fdmFsdWUtc21hbGxdJzogYHNpemUgPT09ICdzbWFsbCdgLFxuICAgICdbY2xhc3Muc3ZfX3ZhbHVlLWxhcmdlXSc6IGBzaXplID09PSAnbGFyZ2UnYFxuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU1ZWYWx1ZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHByZWZpeD86IHN0cmluZztcbiAgQElucHV0KCkgdW5pdD86IHN0cmluZztcbiAgQElucHV0KCkgdG9vbHRpcD86IE56VFNUeXBlIHwgbnVsbDtcbiAgQElucHV0KCkgc2l6ZTogJ2xhcmdlJyB8ICdzbWFsbCcgfCAnZGVmYXVsdCcgPSAnZGVmYXVsdCc7XG59XG4iXX0=