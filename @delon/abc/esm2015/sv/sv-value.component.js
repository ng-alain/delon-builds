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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3YtdmFsdWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3N2L3N2LXZhbHVlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQXFCN0YsTUFBTSxPQUFPLGdCQUFnQjtJQWpCN0I7UUFxQlcsU0FBSSxHQUFrQyxTQUFTLENBQUM7SUFDM0QsQ0FBQzs7O1lBdEJBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxRQUFRLEVBQUUsU0FBUztnQkFDbkIsUUFBUSxFQUFFOzs7O0dBSVQ7Z0JBQ0QsSUFBSSxFQUFFO29CQUNKLG1CQUFtQixFQUFFLE1BQU07b0JBQzNCLHlCQUF5QixFQUFFLGtCQUFrQjtvQkFDN0MseUJBQXlCLEVBQUUsa0JBQWtCO2lCQUM5QztnQkFDRCxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7OztxQkFFRSxLQUFLO21CQUNMLEtBQUs7c0JBQ0wsS0FBSzttQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE56VFNUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3YtdmFsdWUsIFtzdi12YWx1ZV0nLFxuICBleHBvcnRBczogJ3N2VmFsdWUnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxlbSAqbmdJZj1cInByZWZpeFwiIGNsYXNzPVwic3ZfX3ZhbHVlLXByZWZpeFwiIFtpbm5lckhUTUxdPVwicHJlZml4XCI+PC9lbT5cbiAgICA8c3BhbiBuei10b29sdGlwIFtuelRvb2x0aXBUaXRsZV09XCJ0b29sdGlwXCIgY2xhc3M9XCJzdl9fdmFsdWUtdGV4dFwiPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L3NwYW4+XG4gICAgPGVtICpuZ0lmPVwidW5pdFwiIGNsYXNzPVwic3ZfX3ZhbHVlLXVuaXRcIiBbaW5uZXJIVE1MXT1cInVuaXRcIj48L2VtPlxuICBgLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5zdl9fdmFsdWVdJzogJ3RydWUnLFxuICAgICdbY2xhc3Muc3ZfX3ZhbHVlLXNtYWxsXSc6IGBzaXplID09PSAnc21hbGwnYCxcbiAgICAnW2NsYXNzLnN2X192YWx1ZS1sYXJnZV0nOiBgc2l6ZSA9PT0gJ2xhcmdlJ2BcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFNWVmFsdWVDb21wb25lbnQge1xuICBASW5wdXQoKSBwcmVmaXg/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHVuaXQ/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRvb2x0aXA/OiBOelRTVHlwZSB8IG51bGw7XG4gIEBJbnB1dCgpIHNpemU6ICdsYXJnZScgfCAnc21hbGwnIHwgJ2RlZmF1bHQnID0gJ2RlZmF1bHQnO1xufVxuIl19