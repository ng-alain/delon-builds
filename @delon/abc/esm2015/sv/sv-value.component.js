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
                    '[class.sv__value-large]': `size === 'large'`
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            },] }
];
SVValueComponent.propDecorators = {
    prefix: [{ type: Input }],
    unit: [{ type: Input }],
    tooltip: [{ type: Input }],
    size: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3YtdmFsdWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3N2L3N2LXZhbHVlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQXFCN0YsTUFBTSxPQUFPLGdCQUFnQjtJQWpCN0I7UUFxQlcsU0FBSSxHQUFrQyxTQUFTLENBQUM7SUFDM0QsQ0FBQzs7O1lBdEJBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxRQUFRLEVBQUUsU0FBUztnQkFDbkIsUUFBUSxFQUFFOzs7O0dBSVQ7Z0JBQ0QsSUFBSSxFQUFFO29CQUNKLG1CQUFtQixFQUFFLE1BQU07b0JBQzNCLHlCQUF5QixFQUFFLGtCQUFrQjtvQkFDN0MseUJBQXlCLEVBQUUsa0JBQWtCO2lCQUM5QztnQkFDRCxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7OztxQkFFRSxLQUFLO21CQUNMLEtBQUs7c0JBQ0wsS0FBSzttQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB0eXBlIHsgTnpUU1R5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdi12YWx1ZSwgW3N2LXZhbHVlXScsXG4gIGV4cG9ydEFzOiAnc3ZWYWx1ZScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGVtICpuZ0lmPVwicHJlZml4XCIgY2xhc3M9XCJzdl9fdmFsdWUtcHJlZml4XCIgW2lubmVySFRNTF09XCJwcmVmaXhcIj48L2VtPlxuICAgIDxzcGFuIG56LXRvb2x0aXAgW256VG9vbHRpcFRpdGxlXT1cInRvb2x0aXBcIiBjbGFzcz1cInN2X192YWx1ZS10ZXh0XCI+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50Pjwvc3Bhbj5cbiAgICA8ZW0gKm5nSWY9XCJ1bml0XCIgY2xhc3M9XCJzdl9fdmFsdWUtdW5pdFwiIFtpbm5lckhUTUxdPVwidW5pdFwiPjwvZW0+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLnN2X192YWx1ZV0nOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy5zdl9fdmFsdWUtc21hbGxdJzogYHNpemUgPT09ICdzbWFsbCdgLFxuICAgICdbY2xhc3Muc3ZfX3ZhbHVlLWxhcmdlXSc6IGBzaXplID09PSAnbGFyZ2UnYFxuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU1ZWYWx1ZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHByZWZpeD86IHN0cmluZztcbiAgQElucHV0KCkgdW5pdD86IHN0cmluZztcbiAgQElucHV0KCkgdG9vbHRpcD86IE56VFNUeXBlIHwgbnVsbDtcbiAgQElucHV0KCkgc2l6ZTogJ2xhcmdlJyB8ICdzbWFsbCcgfCAnZGVmYXVsdCcgPSAnZGVmYXVsdCc7XG59XG4iXX0=