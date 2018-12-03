/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
var SEErrorComponent = /** @class */ (function () {
    function SEErrorComponent() {
    }
    SEErrorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'se-error',
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
                    template: "\n  <div [@errorAnt]>\n    <ng-content></ng-content>\n  </div>",
                    host: {
                        '[class.ant-form-explain]': 'true',
                    },
                    styles: ["\n      :host {\n        display: block;\n      }\n    "]
                }] }
    ];
    return SEErrorComponent;
}());
export { SEErrorComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1lcnJvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL2VkaXQvIiwic291cmNlcyI6WyJlZGl0LWVycm9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFMUU7SUFBQTtJQStDK0IsQ0FBQzs7Z0JBL0MvQixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLFVBQVUsRUFBRTt3QkFDVixPQUFPLENBQUMsVUFBVSxFQUFFOzRCQUNsQixVQUFVLENBQUMsV0FBVyxFQUFFO2dDQUN0QixLQUFLLENBQUM7b0NBQ0osT0FBTyxFQUFFLENBQUM7b0NBQ1YsU0FBUyxFQUFFLGtCQUFrQjtpQ0FDOUIsQ0FBQztnQ0FDRixPQUFPLENBQ0wsMkNBQTJDLEVBQzNDLEtBQUssQ0FBQztvQ0FDSixPQUFPLEVBQUUsQ0FBQztvQ0FDVixTQUFTLEVBQUUsZUFBZTtpQ0FDM0IsQ0FBQyxDQUNIOzZCQUNGLENBQUM7NEJBQ0YsVUFBVSxDQUFDLFdBQVcsRUFBRTtnQ0FDdEIsS0FBSyxDQUFDO29DQUNKLE9BQU8sRUFBRSxDQUFDO29DQUNWLFNBQVMsRUFBRSxlQUFlO2lDQUMzQixDQUFDO2dDQUNGLE9BQU8sQ0FDTCwyQ0FBMkMsRUFDM0MsS0FBSyxDQUFDO29DQUNKLE9BQU8sRUFBRSxDQUFDO29DQUNWLFNBQVMsRUFBRSxrQkFBa0I7aUNBQzlCLENBQUMsQ0FDSDs2QkFDRixDQUFDO3lCQUNILENBQUM7cUJBQ0g7b0JBQ0QsUUFBUSxFQUFFLGdFQUdIO29CQUNQLElBQUksRUFBRTt3QkFDSiwwQkFBMEIsRUFBRSxNQUFNO3FCQUNuQzs2QkFFQyx5REFJQztpQkFFSjs7SUFDOEIsdUJBQUM7Q0FBQSxBQS9DaEMsSUErQ2dDO1NBQW5CLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYW5pbWF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2UtZXJyb3InLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignZXJyb3JBbnQnLCBbXG4gICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTVweCknLFxuICAgICAgICB9KSxcbiAgICAgICAgYW5pbWF0ZShcbiAgICAgICAgICAnMC4zcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSknLFxuICAgICAgICAgIHN0eWxlKHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDApJyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgKSxcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgW1xuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDApJyxcbiAgICAgICAgfSksXG4gICAgICAgIGFuaW1hdGUoXG4gICAgICAgICAgJzAuM3MgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpJyxcbiAgICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNXB4KScsXG4gICAgICAgICAgfSksXG4gICAgICAgICksXG4gICAgICBdKSxcbiAgICBdKSxcbiAgXSxcbiAgdGVtcGxhdGU6IGBcbiAgPGRpdiBbQGVycm9yQW50XT5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDwvZGl2PmAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC1mb3JtLWV4cGxhaW5dJzogJ3RydWUnLFxuICB9LFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgIGAsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFNFRXJyb3JDb21wb25lbnQge31cbiJdfQ==