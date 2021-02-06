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
            },] }
];
SVValueComponent.propDecorators = {
    prefix: [{ type: Input }],
    unit: [{ type: Input }],
    tooltip: [{ type: Input }],
    size: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3YtdmFsdWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3N2L3N2LXZhbHVlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQW1CN0YsTUFBTSxPQUFPLGdCQUFnQjtJQWpCN0I7UUFxQlcsU0FBSSxHQUFrQyxTQUFTLENBQUM7SUFDM0QsQ0FBQzs7O1lBdEJBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxRQUFRLEVBQUUsU0FBUztnQkFDbkIsUUFBUSxFQUFFOzs7O0dBSVQ7Z0JBQ0QsSUFBSSxFQUFFO29CQUNKLG1CQUFtQixFQUFFLE1BQU07b0JBQzNCLHlCQUF5QixFQUFFLGtCQUFrQjtvQkFDN0MseUJBQXlCLEVBQUUsa0JBQWtCO2lCQUM5QztnQkFDRCxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7OztxQkFFRSxLQUFLO21CQUNMLEtBQUs7c0JBQ0wsS0FBSzttQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N2LXZhbHVlLCBbc3YtdmFsdWVdJyxcbiAgZXhwb3J0QXM6ICdzdlZhbHVlJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZW0gKm5nSWY9XCJwcmVmaXhcIiBjbGFzcz1cInN2X192YWx1ZS1wcmVmaXhcIiBbaW5uZXJIVE1MXT1cInByZWZpeFwiPjwvZW0+XG4gICAgPHNwYW4gbnotdG9vbHRpcCBbbnpUb29sdGlwVGl0bGVdPVwidG9vbHRpcFwiIGNsYXNzPVwic3ZfX3ZhbHVlLXRleHRcIj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9zcGFuPlxuICAgIDxlbSAqbmdJZj1cInVuaXRcIiBjbGFzcz1cInN2X192YWx1ZS11bml0XCIgW2lubmVySFRNTF09XCJ1bml0XCI+PC9lbT5cbiAgYCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3Muc3ZfX3ZhbHVlXSc6ICd0cnVlJyxcbiAgICAnW2NsYXNzLnN2X192YWx1ZS1zbWFsbF0nOiBgc2l6ZSA9PT0gJ3NtYWxsJ2AsXG4gICAgJ1tjbGFzcy5zdl9fdmFsdWUtbGFyZ2VdJzogYHNpemUgPT09ICdsYXJnZSdgLFxuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIFNWVmFsdWVDb21wb25lbnQge1xuICBASW5wdXQoKSBwcmVmaXghOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHVuaXQhOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRvb2x0aXAhOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNpemU6ICdsYXJnZScgfCAnc21hbGwnIHwgJ2RlZmF1bHQnID0gJ2RlZmF1bHQnO1xufVxuIl19