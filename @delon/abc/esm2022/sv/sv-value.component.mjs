import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/tooltip";
export class SVValueComponent {
    constructor() {
        this.size = 'default';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: SVValueComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.9", type: SVValueComponent, isStandalone: true, selector: "sv-value, [sv-value]", inputs: { prefix: "prefix", unit: "unit", tooltip: "tooltip", size: "size" }, host: { properties: { "class.sv__value": "true", "class.sv__value-small": "size === 'small'", "class.sv__value-large": "size === 'large'" } }, exportAs: ["svValue"], ngImport: i0, template: `
    @if (prefix) {
      <em class="sv__value-prefix" [innerHTML]="prefix"></em>
    }
    <span nz-tooltip [nzTooltipTitle]="tooltip" class="sv__value-text"><ng-content /></span>
    @if (unit) {
      <em class="sv__value-unit" [innerHTML]="unit"></em>
    }
  `, isInline: true, dependencies: [{ kind: "ngmodule", type: NzToolTipModule }, { kind: "directive", type: i1.NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "cdkConnectedOverlayPush", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: SVValueComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'sv-value, [sv-value]',
                    exportAs: 'svValue',
                    template: `
    @if (prefix) {
      <em class="sv__value-prefix" [innerHTML]="prefix"></em>
    }
    <span nz-tooltip [nzTooltipTitle]="tooltip" class="sv__value-text"><ng-content /></span>
    @if (unit) {
      <em class="sv__value-unit" [innerHTML]="unit"></em>
    }
  `,
                    host: {
                        '[class.sv__value]': 'true',
                        '[class.sv__value-small]': `size === 'small'`,
                        '[class.sv__value-large]': `size === 'large'`
                    },
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    standalone: true,
                    imports: [NzToolTipModule]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3YtdmFsdWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3N2L3N2LXZhbHVlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUc3RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7OztBQXlCeEQsTUFBTSxPQUFPLGdCQUFnQjtJQXZCN0I7UUEyQlcsU0FBSSxHQUFrQyxTQUFTLENBQUM7S0FDMUQ7OEdBTFksZ0JBQWdCO2tHQUFoQixnQkFBZ0Isb1VBcEJqQjs7Ozs7Ozs7R0FRVCwyREFVUyxlQUFlOzsyRkFFZCxnQkFBZ0I7a0JBdkI1QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLFFBQVEsRUFBRSxTQUFTO29CQUNuQixRQUFRLEVBQUU7Ozs7Ozs7O0dBUVQ7b0JBQ0QsSUFBSSxFQUFFO3dCQUNKLG1CQUFtQixFQUFFLE1BQU07d0JBQzNCLHlCQUF5QixFQUFFLGtCQUFrQjt3QkFDN0MseUJBQXlCLEVBQUUsa0JBQWtCO3FCQUM5QztvQkFDRCxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLFVBQVUsRUFBRSxJQUFJO29CQUNoQixPQUFPLEVBQUUsQ0FBQyxlQUFlLENBQUM7aUJBQzNCOzhCQUVVLE1BQU07c0JBQWQsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgdHlwZSB7IE56VFNUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IE56VG9vbFRpcE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvdG9vbHRpcCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N2LXZhbHVlLCBbc3YtdmFsdWVdJyxcbiAgZXhwb3J0QXM6ICdzdlZhbHVlJyxcbiAgdGVtcGxhdGU6IGBcbiAgICBAaWYgKHByZWZpeCkge1xuICAgICAgPGVtIGNsYXNzPVwic3ZfX3ZhbHVlLXByZWZpeFwiIFtpbm5lckhUTUxdPVwicHJlZml4XCI+PC9lbT5cbiAgICB9XG4gICAgPHNwYW4gbnotdG9vbHRpcCBbbnpUb29sdGlwVGl0bGVdPVwidG9vbHRpcFwiIGNsYXNzPVwic3ZfX3ZhbHVlLXRleHRcIj48bmctY29udGVudCAvPjwvc3Bhbj5cbiAgICBAaWYgKHVuaXQpIHtcbiAgICAgIDxlbSBjbGFzcz1cInN2X192YWx1ZS11bml0XCIgW2lubmVySFRNTF09XCJ1bml0XCI+PC9lbT5cbiAgICB9XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLnN2X192YWx1ZV0nOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy5zdl9fdmFsdWUtc21hbGxdJzogYHNpemUgPT09ICdzbWFsbCdgLFxuICAgICdbY2xhc3Muc3ZfX3ZhbHVlLWxhcmdlXSc6IGBzaXplID09PSAnbGFyZ2UnYFxuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtOelRvb2xUaXBNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIFNWVmFsdWVDb21wb25lbnQge1xuICBASW5wdXQoKSBwcmVmaXg/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHVuaXQ/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRvb2x0aXA/OiBOelRTVHlwZSB8IG51bGw7XG4gIEBJbnB1dCgpIHNpemU6ICdsYXJnZScgfCAnc21hbGwnIHwgJ2RlZmF1bHQnID0gJ2RlZmF1bHQnO1xufVxuIl19