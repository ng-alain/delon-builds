import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { InputNumber } from '@delon/util/decorator';
import * as i0 from "@angular/core";
import * as i1 from "@delon/util/config";
export class SGContainerComponent {
    constructor(configSrv) {
        configSrv.attach(this, 'sg', {
            gutter: 32,
            col: 2
        });
    }
    get marginValue() {
        return -(this.gutter / 2);
    }
}
SGContainerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: SGContainerComponent, deps: [{ token: i1.AlainConfigService }], target: i0.ɵɵFactoryTarget.Component });
SGContainerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.8", type: SGContainerComponent, selector: "sg-container, [sg-container]", inputs: { gutter: "gutter", colInCon: ["sg-container", "colInCon"], col: "col" }, host: { properties: { "style.margin-left.px": "marginValue", "style.margin-right.px": "marginValue", "class.ant-row": "true", "class.sg__wrap": "true" } }, exportAs: ["sgContainer"], ngImport: i0, template: ` <ng-content></ng-content> `, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    InputNumber()
], SGContainerComponent.prototype, "gutter", void 0);
__decorate([
    InputNumber(null)
], SGContainerComponent.prototype, "colInCon", void 0);
__decorate([
    InputNumber(null)
], SGContainerComponent.prototype, "col", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: SGContainerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'sg-container, [sg-container]',
                    exportAs: 'sgContainer',
                    template: ` <ng-content></ng-content> `,
                    host: {
                        '[style.margin-left.px]': 'marginValue',
                        '[style.margin-right.px]': 'marginValue',
                        '[class.ant-row]': 'true',
                        '[class.sg__wrap]': 'true'
                    },
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: function () { return [{ type: i1.AlainConfigService }]; }, propDecorators: { gutter: [{
                type: Input
            }], colInCon: [{
                type: Input,
                args: ['sg-container']
            }], col: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ctY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9zZy9zZy1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUk3RixPQUFPLEVBQUUsV0FBVyxFQUFlLE1BQU0sdUJBQXVCLENBQUM7OztBQWdCakUsTUFBTSxPQUFPLG9CQUFvQjtJQWEvQixZQUFZLFNBQTZCO1FBQ3ZDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRTtZQUMzQixNQUFNLEVBQUUsRUFBRTtZQUNWLEdBQUcsRUFBRSxDQUFDO1NBQ1AsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQVRELElBQUksV0FBVztRQUNiLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7aUhBWFUsb0JBQW9CO3FHQUFwQixvQkFBb0IsNlVBWHJCLDZCQUE2QjtBQWdCZjtJQUFkLFdBQVcsRUFBRTtvREFBaUI7QUFDRTtJQUFsQixXQUFXLENBQUMsSUFBSSxDQUFDO3NEQUFxQjtBQUNsQztJQUFsQixXQUFXLENBQUMsSUFBSSxDQUFDO2lEQUFnQjsyRkFQaEMsb0JBQW9CO2tCQWRoQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSw4QkFBOEI7b0JBQ3hDLFFBQVEsRUFBRSxhQUFhO29CQUN2QixRQUFRLEVBQUUsNkJBQTZCO29CQUN2QyxJQUFJLEVBQUU7d0JBQ0osd0JBQXdCLEVBQUUsYUFBYTt3QkFDdkMseUJBQXlCLEVBQUUsYUFBYTt3QkFDeEMsaUJBQWlCLEVBQUUsTUFBTTt3QkFDekIsa0JBQWtCLEVBQUUsTUFBTTtxQkFDM0I7b0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUN0Qzt5R0FNeUIsTUFBTTtzQkFBN0IsS0FBSztnQkFDb0MsUUFBUTtzQkFBakQsS0FBSzt1QkFBQyxjQUFjO2dCQUNPLEdBQUc7c0JBQTlCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUkVQX1RZUEUgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3V0aWwvY29uZmlnJztcbmltcG9ydCB7IElucHV0TnVtYmVyLCBOdW1iZXJJbnB1dCB9IGZyb20gJ0BkZWxvbi91dGlsL2RlY29yYXRvcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NnLWNvbnRhaW5lciwgW3NnLWNvbnRhaW5lcl0nLFxuICBleHBvcnRBczogJ3NnQ29udGFpbmVyJyxcbiAgdGVtcGxhdGU6IGAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiBgLFxuICBob3N0OiB7XG4gICAgJ1tzdHlsZS5tYXJnaW4tbGVmdC5weF0nOiAnbWFyZ2luVmFsdWUnLFxuICAgICdbc3R5bGUubWFyZ2luLXJpZ2h0LnB4XSc6ICdtYXJnaW5WYWx1ZScsXG4gICAgJ1tjbGFzcy5hbnQtcm93XSc6ICd0cnVlJyxcbiAgICAnW2NsYXNzLnNnX193cmFwXSc6ICd0cnVlJ1xuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU0dDb250YWluZXJDb21wb25lbnQge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZ3V0dGVyOiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2NvbEluQ29uOiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2NvbDogTnVtYmVySW5wdXQ7XG5cbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgZ3V0dGVyITogbnVtYmVyO1xuICBASW5wdXQoJ3NnLWNvbnRhaW5lcicpIEBJbnB1dE51bWJlcihudWxsKSBjb2xJbkNvbj86IFJFUF9UWVBFO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIobnVsbCkgY29sITogUkVQX1RZUEU7XG5cbiAgZ2V0IG1hcmdpblZhbHVlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIC0odGhpcy5ndXR0ZXIgLyAyKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZ1NydjogQWxhaW5Db25maWdTZXJ2aWNlKSB7XG4gICAgY29uZmlnU3J2LmF0dGFjaCh0aGlzLCAnc2cnLCB7XG4gICAgICBndXR0ZXI6IDMyLFxuICAgICAgY29sOiAyXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==