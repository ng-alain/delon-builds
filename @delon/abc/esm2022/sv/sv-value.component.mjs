import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/tooltip";
export class SVValueComponent {
    constructor() {
        this.size = 'default';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: SVValueComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.2", type: SVValueComponent, selector: "sv-value, [sv-value]", inputs: { prefix: "prefix", unit: "unit", tooltip: "tooltip", size: "size" }, host: { properties: { "class.sv__value": "true", "class.sv__value-small": "size === 'small'", "class.sv__value-large": "size === 'large'" } }, exportAs: ["svValue"], ngImport: i0, template: `
    @if (prefix) {
      <em class="sv__value-prefix" [innerHTML]="prefix"></em>
    }
    <span nz-tooltip [nzTooltipTitle]="tooltip" class="sv__value-text"><ng-content /></span>
    @if (unit) {
      <em class="sv__value-unit" [innerHTML]="unit"></em>
    }
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "cdkConnectedOverlayPush", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: SVValueComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3YtdmFsdWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3N2L3N2LXZhbHVlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBeUI3RixNQUFNLE9BQU8sZ0JBQWdCO0lBckI3QjtRQXlCVyxTQUFJLEdBQWtDLFNBQVMsQ0FBQztLQUMxRDs4R0FMWSxnQkFBZ0I7a0dBQWhCLGdCQUFnQixnVEFsQmpCOzs7Ozs7OztHQVFUOzsyRkFVVSxnQkFBZ0I7a0JBckI1QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLFFBQVEsRUFBRSxTQUFTO29CQUNuQixRQUFRLEVBQUU7Ozs7Ozs7O0dBUVQ7b0JBQ0QsSUFBSSxFQUFFO3dCQUNKLG1CQUFtQixFQUFFLE1BQU07d0JBQzNCLHlCQUF5QixFQUFFLGtCQUFrQjt3QkFDN0MseUJBQXlCLEVBQUUsa0JBQWtCO3FCQUM5QztvQkFDRCxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3RDOzhCQUVVLE1BQU07c0JBQWQsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgdHlwZSB7IE56VFNUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3YtdmFsdWUsIFtzdi12YWx1ZV0nLFxuICBleHBvcnRBczogJ3N2VmFsdWUnLFxuICB0ZW1wbGF0ZTogYFxuICAgIEBpZiAocHJlZml4KSB7XG4gICAgICA8ZW0gY2xhc3M9XCJzdl9fdmFsdWUtcHJlZml4XCIgW2lubmVySFRNTF09XCJwcmVmaXhcIj48L2VtPlxuICAgIH1cbiAgICA8c3BhbiBuei10b29sdGlwIFtuelRvb2x0aXBUaXRsZV09XCJ0b29sdGlwXCIgY2xhc3M9XCJzdl9fdmFsdWUtdGV4dFwiPjxuZy1jb250ZW50IC8+PC9zcGFuPlxuICAgIEBpZiAodW5pdCkge1xuICAgICAgPGVtIGNsYXNzPVwic3ZfX3ZhbHVlLXVuaXRcIiBbaW5uZXJIVE1MXT1cInVuaXRcIj48L2VtPlxuICAgIH1cbiAgYCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3Muc3ZfX3ZhbHVlXSc6ICd0cnVlJyxcbiAgICAnW2NsYXNzLnN2X192YWx1ZS1zbWFsbF0nOiBgc2l6ZSA9PT0gJ3NtYWxsJ2AsXG4gICAgJ1tjbGFzcy5zdl9fdmFsdWUtbGFyZ2VdJzogYHNpemUgPT09ICdsYXJnZSdgXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTVlZhbHVlQ29tcG9uZW50IHtcbiAgQElucHV0KCkgcHJlZml4Pzogc3RyaW5nO1xuICBASW5wdXQoKSB1bml0Pzogc3RyaW5nO1xuICBASW5wdXQoKSB0b29sdGlwPzogTnpUU1R5cGUgfCBudWxsO1xuICBASW5wdXQoKSBzaXplOiAnbGFyZ2UnIHwgJ3NtYWxsJyB8ICdkZWZhdWx0JyA9ICdkZWZhdWx0Jztcbn1cbiJdfQ==