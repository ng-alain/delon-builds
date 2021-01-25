/**
 * @fileoverview added by tsickle
 * Generated from: sv-value.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
export class SVValueComponent {
    constructor() {
        this.size = 'default';
    }
}
SVValueComponent.decorators = [
    { type: Component, args: [{
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
                    '[class.sv__value-large]': `size === 'large'`,
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
SVValueComponent.propDecorators = {
    prefix: [{ type: Input }],
    unit: [{ type: Input }],
    tooltip: [{ type: Input }],
    size: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    SVValueComponent.prototype.prefix;
    /** @type {?} */
    SVValueComponent.prototype.unit;
    /** @type {?} */
    SVValueComponent.prototype.tooltip;
    /** @type {?} */
    SVValueComponent.prototype.size;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3YtdmFsdWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3N2L3N2LXZhbHVlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBbUI3RixNQUFNLE9BQU8sZ0JBQWdCO0lBakI3QjtRQXFCVyxTQUFJLEdBQWtDLFNBQVMsQ0FBQztJQUMzRCxDQUFDOzs7WUF0QkEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFFBQVEsRUFBRSxTQUFTO2dCQUNuQixRQUFRLEVBQUU7Ozs7R0FJVDtnQkFDRCxJQUFJLEVBQUU7b0JBQ0osbUJBQW1CLEVBQUUsTUFBTTtvQkFDM0IseUJBQXlCLEVBQUUsa0JBQWtCO29CQUM3Qyx5QkFBeUIsRUFBRSxrQkFBa0I7aUJBQzlDO2dCQUNELG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0Qzs7O3FCQUVFLEtBQUs7bUJBQ0wsS0FBSztzQkFDTCxLQUFLO21CQUNMLEtBQUs7Ozs7SUFITixrQ0FBeUI7O0lBQ3pCLGdDQUF1Qjs7SUFDdkIsbUNBQTBCOztJQUMxQixnQ0FBeUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3YtdmFsdWUsIFtzdi12YWx1ZV0nLFxuICBleHBvcnRBczogJ3N2VmFsdWUnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxlbSAqbmdJZj1cInByZWZpeFwiIGNsYXNzPVwic3ZfX3ZhbHVlLXByZWZpeFwiIFtpbm5lckhUTUxdPVwicHJlZml4XCI+PC9lbT5cbiAgICA8c3BhbiBuei10b29sdGlwIFtuelRvb2x0aXBUaXRsZV09XCJ0b29sdGlwXCIgY2xhc3M9XCJzdl9fdmFsdWUtdGV4dFwiPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L3NwYW4+XG4gICAgPGVtICpuZ0lmPVwidW5pdFwiIGNsYXNzPVwic3ZfX3ZhbHVlLXVuaXRcIiBbaW5uZXJIVE1MXT1cInVuaXRcIj48L2VtPlxuICBgLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5zdl9fdmFsdWVdJzogJ3RydWUnLFxuICAgICdbY2xhc3Muc3ZfX3ZhbHVlLXNtYWxsXSc6IGBzaXplID09PSAnc21hbGwnYCxcbiAgICAnW2NsYXNzLnN2X192YWx1ZS1sYXJnZV0nOiBgc2l6ZSA9PT0gJ2xhcmdlJ2AsXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgU1ZWYWx1ZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHByZWZpeCE6IHN0cmluZztcbiAgQElucHV0KCkgdW5pdCE6IHN0cmluZztcbiAgQElucHV0KCkgdG9vbHRpcCE6IHN0cmluZztcbiAgQElucHV0KCkgc2l6ZTogJ2xhcmdlJyB8ICdzbWFsbCcgfCAnZGVmYXVsdCcgPSAnZGVmYXVsdCc7XG59XG4iXX0=