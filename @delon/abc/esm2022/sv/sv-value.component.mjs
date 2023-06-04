import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/tooltip";
class SVValueComponent {
    constructor() {
        this.size = 'default';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: SVValueComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.4", type: SVValueComponent, selector: "sv-value, [sv-value]", inputs: { prefix: "prefix", unit: "unit", tooltip: "tooltip", size: "size" }, host: { properties: { "class.sv__value": "true", "class.sv__value-small": "size === 'small'", "class.sv__value-large": "size === 'large'" } }, exportAs: ["svValue"], ngImport: i0, template: `
    <em *ngIf="prefix" class="sv__value-prefix" [innerHTML]="prefix"></em>
    <span nz-tooltip [nzTooltipTitle]="tooltip" class="sv__value-text"><ng-content></ng-content></span>
    <em *ngIf="unit" class="sv__value-unit" [innerHTML]="unit"></em>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
export { SVValueComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: SVValueComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3YtdmFsdWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3N2L3N2LXZhbHVlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUk3RixNQWlCYSxnQkFBZ0I7SUFqQjdCO1FBcUJXLFNBQUksR0FBa0MsU0FBUyxDQUFDO0tBQzFEOzhHQUxZLGdCQUFnQjtrR0FBaEIsZ0JBQWdCLGdUQWRqQjs7OztHQUlUOztTQVVVLGdCQUFnQjsyRkFBaEIsZ0JBQWdCO2tCQWpCNUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyxRQUFRLEVBQUUsU0FBUztvQkFDbkIsUUFBUSxFQUFFOzs7O0dBSVQ7b0JBQ0QsSUFBSSxFQUFFO3dCQUNKLG1CQUFtQixFQUFFLE1BQU07d0JBQzNCLHlCQUF5QixFQUFFLGtCQUFrQjt3QkFDN0MseUJBQXlCLEVBQUUsa0JBQWtCO3FCQUM5QztvQkFDRCxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3RDOzhCQUVVLE1BQU07c0JBQWQsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgdHlwZSB7IE56VFNUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3YtdmFsdWUsIFtzdi12YWx1ZV0nLFxuICBleHBvcnRBczogJ3N2VmFsdWUnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxlbSAqbmdJZj1cInByZWZpeFwiIGNsYXNzPVwic3ZfX3ZhbHVlLXByZWZpeFwiIFtpbm5lckhUTUxdPVwicHJlZml4XCI+PC9lbT5cbiAgICA8c3BhbiBuei10b29sdGlwIFtuelRvb2x0aXBUaXRsZV09XCJ0b29sdGlwXCIgY2xhc3M9XCJzdl9fdmFsdWUtdGV4dFwiPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L3NwYW4+XG4gICAgPGVtICpuZ0lmPVwidW5pdFwiIGNsYXNzPVwic3ZfX3ZhbHVlLXVuaXRcIiBbaW5uZXJIVE1MXT1cInVuaXRcIj48L2VtPlxuICBgLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5zdl9fdmFsdWVdJzogJ3RydWUnLFxuICAgICdbY2xhc3Muc3ZfX3ZhbHVlLXNtYWxsXSc6IGBzaXplID09PSAnc21hbGwnYCxcbiAgICAnW2NsYXNzLnN2X192YWx1ZS1sYXJnZV0nOiBgc2l6ZSA9PT0gJ2xhcmdlJ2BcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFNWVmFsdWVDb21wb25lbnQge1xuICBASW5wdXQoKSBwcmVmaXg/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHVuaXQ/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRvb2x0aXA/OiBOelRTVHlwZSB8IG51bGw7XG4gIEBJbnB1dCgpIHNpemU6ICdsYXJnZScgfCAnc21hbGwnIHwgJ2RlZmF1bHQnID0gJ2RlZmF1bHQnO1xufVxuIl19