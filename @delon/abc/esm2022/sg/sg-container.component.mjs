import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation, numberAttribute } from '@angular/core';
import { toNumber } from '@delon/util/decorator';
import * as i0 from "@angular/core";
import * as i1 from "@delon/util/config";
export class SGContainerComponent {
    get marginValue() {
        return -(this.gutter / 2);
    }
    constructor(configSrv) {
        configSrv.attach(this, 'sg', {
            gutter: 32,
            col: 2
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: SGContainerComponent, deps: [{ token: i1.AlainConfigService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "17.1.0", type: SGContainerComponent, isStandalone: true, selector: "sg-container, [sg-container]", inputs: { gutter: ["gutter", "gutter", numberAttribute], colInCon: ["sg-container", "colInCon", (v) => toNumber(v, null)], col: ["col", "col", (v) => toNumber(v, null)] }, host: { properties: { "style.margin-left.px": "marginValue", "style.margin-right.px": "marginValue", "class.ant-row": "true", "class.sg__wrap": "true" } }, exportAs: ["sgContainer"], ngImport: i0, template: ` <ng-content /> `, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: SGContainerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'sg-container, [sg-container]',
                    exportAs: 'sgContainer',
                    template: ` <ng-content /> `,
                    host: {
                        '[style.margin-left.px]': 'marginValue',
                        '[style.margin-right.px]': 'marginValue',
                        '[class.ant-row]': 'true',
                        '[class.sg__wrap]': 'true'
                    },
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i1.AlainConfigService }], propDecorators: { gutter: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], colInCon: [{
                type: Input,
                args: [{ alias: 'sg-container', transform: (v) => toNumber(v, null) }]
            }], col: [{
                type: Input,
                args: [{ transform: (v) => toNumber(v, null) }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ctY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9zZy9zZy1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUk5RyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7OztBQWtCakQsTUFBTSxPQUFPLG9CQUFvQjtJQUsvQixJQUFJLFdBQVc7UUFDYixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxZQUFZLFNBQTZCO1FBQ3ZDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRTtZQUMzQixNQUFNLEVBQUUsRUFBRTtZQUNWLEdBQUcsRUFBRSxDQUFDO1NBQ1AsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs4R0FkVSxvQkFBb0I7a0dBQXBCLG9CQUFvQix1R0FDWCxlQUFlLDBDQUNRLENBQUMsQ0FBWSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyx1QkFDMUQsQ0FBQyxDQUFZLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLG9OQWY3QyxrQkFBa0I7OzJGQVlqQixvQkFBb0I7a0JBZmhDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLDhCQUE4QjtvQkFDeEMsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLElBQUksRUFBRTt3QkFDSix3QkFBd0IsRUFBRSxhQUFhO3dCQUN2Qyx5QkFBeUIsRUFBRSxhQUFhO3dCQUN4QyxpQkFBaUIsRUFBRSxNQUFNO3dCQUN6QixrQkFBa0IsRUFBRSxNQUFNO3FCQUMzQjtvQkFDRCxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLFVBQVUsRUFBRSxJQUFJO2lCQUNqQjt1RkFFd0MsTUFBTTtzQkFBNUMsS0FBSzt1QkFBQyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUU7Z0JBQzZDLFFBQVE7c0JBQXpGLEtBQUs7dUJBQUMsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQVksRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRTtnQkFDckIsR0FBRztzQkFBN0QsS0FBSzt1QkFBQyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQVksRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiwgbnVtYmVyQXR0cmlidXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB0eXBlIHsgUkVQX1RZUEUgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3V0aWwvY29uZmlnJztcbmltcG9ydCB7IHRvTnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwvZGVjb3JhdG9yJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NnLWNvbnRhaW5lciwgW3NnLWNvbnRhaW5lcl0nLFxuICBleHBvcnRBczogJ3NnQ29udGFpbmVyJyxcbiAgdGVtcGxhdGU6IGAgPG5nLWNvbnRlbnQgLz4gYCxcbiAgaG9zdDoge1xuICAgICdbc3R5bGUubWFyZ2luLWxlZnQucHhdJzogJ21hcmdpblZhbHVlJyxcbiAgICAnW3N0eWxlLm1hcmdpbi1yaWdodC5weF0nOiAnbWFyZ2luVmFsdWUnLFxuICAgICdbY2xhc3MuYW50LXJvd10nOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy5zZ19fd3JhcF0nOiAndHJ1ZSdcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzdGFuZGFsb25lOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIFNHQ29udGFpbmVyQ29tcG9uZW50IHtcbiAgQElucHV0KHsgdHJhbnNmb3JtOiBudW1iZXJBdHRyaWJ1dGUgfSkgZ3V0dGVyITogbnVtYmVyO1xuICBASW5wdXQoeyBhbGlhczogJ3NnLWNvbnRhaW5lcicsIHRyYW5zZm9ybTogKHY6IE56U2FmZUFueSkgPT4gdG9OdW1iZXIodiwgbnVsbCkgfSkgY29sSW5Db24/OiBSRVBfVFlQRTtcbiAgQElucHV0KHsgdHJhbnNmb3JtOiAodjogTnpTYWZlQW55KSA9PiB0b051bWJlcih2LCBudWxsKSB9KSBjb2whOiBSRVBfVFlQRTtcblxuICBnZXQgbWFyZ2luVmFsdWUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gLSh0aGlzLmd1dHRlciAvIDIpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoY29uZmlnU3J2OiBBbGFpbkNvbmZpZ1NlcnZpY2UpIHtcbiAgICBjb25maWdTcnYuYXR0YWNoKHRoaXMsICdzZycsIHtcbiAgICAgIGd1dHRlcjogMzIsXG4gICAgICBjb2w6IDJcbiAgICB9KTtcbiAgfVxufVxuIl19