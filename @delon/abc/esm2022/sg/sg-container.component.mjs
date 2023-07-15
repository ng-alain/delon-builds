import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { InputNumber } from '@delon/util/decorator';
import * as i0 from "@angular/core";
import * as i1 from "@delon/util/config";
class SGContainerComponent {
    get marginValue() {
        return -(this.gutter / 2);
    }
    constructor(configSrv) {
        configSrv.attach(this, 'sg', {
            gutter: 32,
            col: 2
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: SGContainerComponent, deps: [{ token: i1.AlainConfigService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.5", type: SGContainerComponent, selector: "sg-container, [sg-container]", inputs: { gutter: "gutter", colInCon: ["sg-container", "colInCon"], col: "col" }, host: { properties: { "style.margin-left.px": "marginValue", "style.margin-right.px": "marginValue", "class.ant-row": "true", "class.sg__wrap": "true" } }, exportAs: ["sgContainer"], ngImport: i0, template: ` <ng-content></ng-content> `, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
__decorate([
    InputNumber()
], SGContainerComponent.prototype, "gutter", void 0);
__decorate([
    InputNumber(null)
], SGContainerComponent.prototype, "colInCon", void 0);
__decorate([
    InputNumber(null)
], SGContainerComponent.prototype, "col", void 0);
export { SGContainerComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: SGContainerComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ctY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9zZy9zZy1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUk3RixPQUFPLEVBQUUsV0FBVyxFQUFlLE1BQU0sdUJBQXVCLENBQUM7OztBQUVqRSxNQWNhLG9CQUFvQjtJQVMvQixJQUFJLFdBQVc7UUFDYixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxZQUFZLFNBQTZCO1FBQ3ZDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRTtZQUMzQixNQUFNLEVBQUUsRUFBRTtZQUNWLEdBQUcsRUFBRSxDQUFDO1NBQ1AsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs4R0FsQlUsb0JBQW9CO2tHQUFwQixvQkFBb0IsNlVBWHJCLDZCQUE2Qjs7QUFnQmY7SUFBZCxXQUFXLEVBQUU7b0RBQWlCO0FBQ0U7SUFBbEIsV0FBVyxDQUFDLElBQUksQ0FBQztzREFBcUI7QUFDbEM7SUFBbEIsV0FBVyxDQUFDLElBQUksQ0FBQztpREFBZ0I7U0FQaEMsb0JBQW9COzJGQUFwQixvQkFBb0I7a0JBZGhDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLDhCQUE4QjtvQkFDeEMsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLFFBQVEsRUFBRSw2QkFBNkI7b0JBQ3ZDLElBQUksRUFBRTt3QkFDSix3QkFBd0IsRUFBRSxhQUFhO3dCQUN2Qyx5QkFBeUIsRUFBRSxhQUFhO3dCQUN4QyxpQkFBaUIsRUFBRSxNQUFNO3dCQUN6QixrQkFBa0IsRUFBRSxNQUFNO3FCQUMzQjtvQkFDRCxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3RDO3lHQU15QixNQUFNO3NCQUE3QixLQUFLO2dCQUNvQyxRQUFRO3NCQUFqRCxLQUFLO3VCQUFDLGNBQWM7Z0JBQ08sR0FBRztzQkFBOUIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBSRVBfVFlQRSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UgfSBmcm9tICdAZGVsb24vdXRpbC9jb25maWcnO1xuaW1wb3J0IHsgSW5wdXROdW1iZXIsIE51bWJlcklucHV0IH0gZnJvbSAnQGRlbG9uL3V0aWwvZGVjb3JhdG9yJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2ctY29udGFpbmVyLCBbc2ctY29udGFpbmVyXScsXG4gIGV4cG9ydEFzOiAnc2dDb250YWluZXInLFxuICB0ZW1wbGF0ZTogYCA8bmctY29udGVudD48L25nLWNvbnRlbnQ+IGAsXG4gIGhvc3Q6IHtcbiAgICAnW3N0eWxlLm1hcmdpbi1sZWZ0LnB4XSc6ICdtYXJnaW5WYWx1ZScsXG4gICAgJ1tzdHlsZS5tYXJnaW4tcmlnaHQucHhdJzogJ21hcmdpblZhbHVlJyxcbiAgICAnW2NsYXNzLmFudC1yb3ddJzogJ3RydWUnLFxuICAgICdbY2xhc3Muc2dfX3dyYXBdJzogJ3RydWUnXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTR0NvbnRhaW5lckNvbXBvbmVudCB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9ndXR0ZXI6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfY29sSW5Db246IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfY29sOiBOdW1iZXJJbnB1dDtcblxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBndXR0ZXIhOiBudW1iZXI7XG4gIEBJbnB1dCgnc2ctY29udGFpbmVyJykgQElucHV0TnVtYmVyKG51bGwpIGNvbEluQ29uPzogUkVQX1RZUEU7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcihudWxsKSBjb2whOiBSRVBfVFlQRTtcblxuICBnZXQgbWFyZ2luVmFsdWUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gLSh0aGlzLmd1dHRlciAvIDIpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoY29uZmlnU3J2OiBBbGFpbkNvbmZpZ1NlcnZpY2UpIHtcbiAgICBjb25maWdTcnYuYXR0YWNoKHRoaXMsICdzZycsIHtcbiAgICAgIGd1dHRlcjogMzIsXG4gICAgICBjb2w6IDJcbiAgICB9KTtcbiAgfVxufVxuIl19