/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
export class SEErrorComponent {
}
SEErrorComponent.decorators = [
    { type: Component, args: [{
                selector: 'se-error',
                preserveWhitespaces: false,
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
  <div [@errorAnt]>
    <ng-content></ng-content>
  </div>`,
                host: {
                    '[class.ant-form-explain]': 'true',
                },
                styles: [`
      :host {
        display: block;
      }
    `]
            }] }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1lcnJvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL2VkaXQvIiwic291cmNlcyI6WyJlZGl0LWVycm9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFrRDFFLE1BQU07OztZQWhETCxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLFVBQVUsRUFBRTtvQkFDVixPQUFPLENBQUMsVUFBVSxFQUFFO3dCQUNsQixVQUFVLENBQUMsV0FBVyxFQUFFOzRCQUN0QixLQUFLLENBQUM7Z0NBQ0osT0FBTyxFQUFFLENBQUM7Z0NBQ1YsU0FBUyxFQUFFLGtCQUFrQjs2QkFDOUIsQ0FBQzs0QkFDRixPQUFPLENBQ0wsMkNBQTJDLEVBQzNDLEtBQUssQ0FBQztnQ0FDSixPQUFPLEVBQUUsQ0FBQztnQ0FDVixTQUFTLEVBQUUsZUFBZTs2QkFDM0IsQ0FBQyxDQUNIO3lCQUNGLENBQUM7d0JBQ0YsVUFBVSxDQUFDLFdBQVcsRUFBRTs0QkFDdEIsS0FBSyxDQUFDO2dDQUNKLE9BQU8sRUFBRSxDQUFDO2dDQUNWLFNBQVMsRUFBRSxlQUFlOzZCQUMzQixDQUFDOzRCQUNGLE9BQU8sQ0FDTCwyQ0FBMkMsRUFDM0MsS0FBSyxDQUFDO2dDQUNKLE9BQU8sRUFBRSxDQUFDO2dDQUNWLFNBQVMsRUFBRSxrQkFBa0I7NkJBQzlCLENBQUMsQ0FDSDt5QkFDRixDQUFDO3FCQUNILENBQUM7aUJBQ0g7Z0JBQ0QsUUFBUSxFQUFFOzs7U0FHSDtnQkFDUCxJQUFJLEVBQUU7b0JBQ0osMEJBQTBCLEVBQUUsTUFBTTtpQkFDbkM7eUJBRUM7Ozs7S0FJQzthQUVKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGFuaW1hdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NlLWVycm9yJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBhbmltYXRpb25zOiBbXHJcbiAgICB0cmlnZ2VyKCdlcnJvckFudCcsIFtcclxuICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgW1xyXG4gICAgICAgIHN0eWxlKHtcclxuICAgICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC01cHgpJyxcclxuICAgICAgICB9KSxcclxuICAgICAgICBhbmltYXRlKFxyXG4gICAgICAgICAgJzAuM3MgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpJyxcclxuICAgICAgICAgIHN0eWxlKHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwKScsXHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICApLFxyXG4gICAgICBdKSxcclxuICAgICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgW1xyXG4gICAgICAgIHN0eWxlKHtcclxuICAgICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDApJyxcclxuICAgICAgICB9KSxcclxuICAgICAgICBhbmltYXRlKFxyXG4gICAgICAgICAgJzAuM3MgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpJyxcclxuICAgICAgICAgIHN0eWxlKHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNXB4KScsXHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICApLFxyXG4gICAgICBdKSxcclxuICAgIF0pLFxyXG4gIF0sXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8ZGl2IFtAZXJyb3JBbnRdPlxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIDwvZGl2PmAsXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5hbnQtZm9ybS1leHBsYWluXSc6ICd0cnVlJyxcclxuICB9LFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICA6aG9zdCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICAgIGAsXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNFRXJyb3JDb21wb25lbnQge31cclxuIl19