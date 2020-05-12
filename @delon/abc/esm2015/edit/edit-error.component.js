/**
 * @fileoverview added by tsickle
 * Generated from: edit-error.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { animate, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
export class SEErrorComponent {
}
SEErrorComponent.decorators = [
    { type: Component, args: [{
                selector: 'se-error',
                exportAs: 'seError',
                animations: [
                    trigger('errorAnt', [
                        transition('void => *', [
                            style({
                                opacity: 0,
                                transform: 'translateY(-5px)',
                            }),
                            animate('0.3s cubic-bezier(0.645, 0.045, 0.355, 1)', style({
                                opacity: 1,
                                transform: 'translateY(0)',
                            })),
                        ]),
                        transition('* => void', [
                            style({
                                opacity: 1,
                                transform: 'translateY(0)',
                            }),
                            animate('0.3s cubic-bezier(0.645, 0.045, 0.355, 1)', style({
                                opacity: 0,
                                transform: 'translateY(-5px)',
                            })),
                        ]),
                    ]),
                ],
                template: `
    <div [@errorAnt]><ng-content></ng-content></div>
  `,
                host: {
                    '[class.ant-form-explain]': 'true',
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1lcnJvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL2VkaXQvIiwic291cmNlcyI6WyJlZGl0LWVycm9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUMxRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBNkN0RixNQUFNLE9BQU8sZ0JBQWdCOzs7WUEzQzVCLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLFVBQVUsRUFBRTtvQkFDVixPQUFPLENBQUMsVUFBVSxFQUFFO3dCQUNsQixVQUFVLENBQUMsV0FBVyxFQUFFOzRCQUN0QixLQUFLLENBQUM7Z0NBQ0osT0FBTyxFQUFFLENBQUM7Z0NBQ1YsU0FBUyxFQUFFLGtCQUFrQjs2QkFDOUIsQ0FBQzs0QkFDRixPQUFPLENBQ0wsMkNBQTJDLEVBQzNDLEtBQUssQ0FBQztnQ0FDSixPQUFPLEVBQUUsQ0FBQztnQ0FDVixTQUFTLEVBQUUsZUFBZTs2QkFDM0IsQ0FBQyxDQUNIO3lCQUNGLENBQUM7d0JBQ0YsVUFBVSxDQUFDLFdBQVcsRUFBRTs0QkFDdEIsS0FBSyxDQUFDO2dDQUNKLE9BQU8sRUFBRSxDQUFDO2dDQUNWLFNBQVMsRUFBRSxlQUFlOzZCQUMzQixDQUFDOzRCQUNGLE9BQU8sQ0FDTCwyQ0FBMkMsRUFDM0MsS0FBSyxDQUFDO2dDQUNKLE9BQU8sRUFBRSxDQUFDO2dDQUNWLFNBQVMsRUFBRSxrQkFBa0I7NkJBQzlCLENBQUMsQ0FDSDt5QkFDRixDQUFDO3FCQUNILENBQUM7aUJBQ0g7Z0JBQ0QsUUFBUSxFQUFFOztHQUVUO2dCQUNELElBQUksRUFBRTtvQkFDSiwwQkFBMEIsRUFBRSxNQUFNO2lCQUNuQztnQkFDRCxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbmltYXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2UtZXJyb3InLFxuICBleHBvcnRBczogJ3NlRXJyb3InLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignZXJyb3JBbnQnLCBbXG4gICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTVweCknLFxuICAgICAgICB9KSxcbiAgICAgICAgYW5pbWF0ZShcbiAgICAgICAgICAnMC4zcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSknLFxuICAgICAgICAgIHN0eWxlKHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDApJyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgKSxcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgW1xuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDApJyxcbiAgICAgICAgfSksXG4gICAgICAgIGFuaW1hdGUoXG4gICAgICAgICAgJzAuM3MgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpJyxcbiAgICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNXB4KScsXG4gICAgICAgICAgfSksXG4gICAgICAgICksXG4gICAgICBdKSxcbiAgICBdKSxcbiAgXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IFtAZXJyb3JBbnRdPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2Rpdj5cbiAgYCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LWZvcm0tZXhwbGFpbl0nOiAndHJ1ZScsXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgU0VFcnJvckNvbXBvbmVudCB7fVxuIl19