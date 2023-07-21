import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Host, Input, Optional, ViewEncapsulation } from '@angular/core';
import { InputBoolean, InputNumber } from '@delon/util/decorator';
import * as i0 from "@angular/core";
import * as i1 from "@delon/util/config";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/core/outlet";
export class SVContainerComponent {
    constructor(configSrv) {
        this.noColon = false;
        configSrv.attach(this, 'sv', {
            size: 'large',
            gutter: 32,
            layout: 'horizontal',
            col: 3,
            default: true
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.6", ngImport: i0, type: SVContainerComponent, deps: [{ token: i1.AlainConfigService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.6", type: SVContainerComponent, selector: "sv-container, [sv-container]", inputs: { colInCon: ["sv-container", "colInCon"], title: "title", size: "size", gutter: "gutter", layout: "layout", labelWidth: "labelWidth", col: "col", default: "default", noColon: "noColon" }, host: { properties: { "class.sv__container": "true", "class.sv__horizontal": "layout === 'horizontal'", "class.sv__vertical": "layout === 'vertical'", "class.sv__small": "size === 'small'", "class.sv__large": "size === 'large'", "class.clearfix": "true" } }, exportAs: ["svContainer"], ngImport: i0, template: `
    <div class="ant-row" [ngStyle]="{ 'margin-left.px': -(gutter / 2), 'margin-right.px': -(gutter / 2) }">
      <sv-title *ngIf="title">
        <ng-container *nzStringTemplateOutlet="title">{{ title }}</ng-container>
      </sv-title>
      <ng-content></ng-content>
    </div>
  `, isInline: true, dependencies: [{ kind: "directive", type: i0.forwardRef(function () { return i2.NgIf; }), selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i0.forwardRef(function () { return i2.NgStyle; }), selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: i0.forwardRef(function () { return i3.NzStringTemplateOutletDirective; }), selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { kind: "component", type: i0.forwardRef(function () { return SVTitleComponent; }), selector: "sv-title, [sv-title]", exportAs: ["svTitle"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
__decorate([
    InputNumber(null)
], SVContainerComponent.prototype, "colInCon", void 0);
__decorate([
    InputNumber()
], SVContainerComponent.prototype, "gutter", void 0);
__decorate([
    InputNumber()
], SVContainerComponent.prototype, "labelWidth", void 0);
__decorate([
    InputNumber()
], SVContainerComponent.prototype, "col", void 0);
__decorate([
    InputBoolean()
], SVContainerComponent.prototype, "default", void 0);
__decorate([
    InputBoolean()
], SVContainerComponent.prototype, "noColon", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.6", ngImport: i0, type: SVContainerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'sv-container, [sv-container]',
                    exportAs: 'svContainer',
                    template: `
    <div class="ant-row" [ngStyle]="{ 'margin-left.px': -(gutter / 2), 'margin-right.px': -(gutter / 2) }">
      <sv-title *ngIf="title">
        <ng-container *nzStringTemplateOutlet="title">{{ title }}</ng-container>
      </sv-title>
      <ng-content></ng-content>
    </div>
  `,
                    host: {
                        '[class.sv__container]': 'true',
                        '[class.sv__horizontal]': `layout === 'horizontal'`,
                        '[class.sv__vertical]': `layout === 'vertical'`,
                        '[class.sv__small]': `size === 'small'`,
                        '[class.sv__large]': `size === 'large'`,
                        '[class.clearfix]': `true`
                    },
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: function () { return [{ type: i1.AlainConfigService }]; }, propDecorators: { colInCon: [{
                type: Input,
                args: ['sv-container']
            }], title: [{
                type: Input
            }], size: [{
                type: Input
            }], gutter: [{
                type: Input
            }], layout: [{
                type: Input
            }], labelWidth: [{
                type: Input
            }], col: [{
                type: Input
            }], default: [{
                type: Input
            }], noColon: [{
                type: Input
            }] } });
export class SVTitleComponent {
    constructor(el, parent, ren) {
        this.parent = parent;
        this.ren = ren;
        if (parent == null) {
            throw new Error(`[sv-title] must include 'sv-container' component`);
        }
        this.el = el.nativeElement;
    }
    setClass() {
        const { gutter } = this.parent;
        const { el } = this;
        this.ren.setStyle(el, 'padding-left', `${gutter / 2}px`);
        this.ren.setStyle(el, 'padding-right', `${gutter / 2}px`);
    }
    ngOnInit() {
        this.setClass();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.6", ngImport: i0, type: SVTitleComponent, deps: [{ token: i0.ElementRef }, { token: SVContainerComponent, host: true, optional: true }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.6", type: SVTitleComponent, selector: "sv-title, [sv-title]", host: { properties: { "class.sv__title": "true" } }, exportAs: ["svTitle"], ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.6", ngImport: i0, type: SVTitleComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'sv-title, [sv-title]',
                    exportAs: 'svTitle',
                    template: '<ng-content></ng-content>',
                    host: {
                        '[class.sv__title]': 'true'
                    },
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: SVContainerComponent, decorators: [{
                    type: Host
                }, {
                    type: Optional
                }] }, { type: i0.Renderer2 }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3YtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9zdi9zdi1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFFVCxJQUFJLEVBQ0osS0FBSyxFQUVMLFFBQVEsRUFHUixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFJdkIsT0FBTyxFQUFnQixZQUFZLEVBQUUsV0FBVyxFQUFlLE1BQU0sdUJBQXVCLENBQUM7Ozs7O0FBd0I3RixNQUFNLE9BQU8sb0JBQW9CO0lBbUIvQixZQUFZLFNBQTZCO1FBRmhCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFHdkMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFO1lBQzNCLElBQUksRUFBRSxPQUFPO1lBQ2IsTUFBTSxFQUFFLEVBQUU7WUFDVixNQUFNLEVBQUUsWUFBWTtZQUNwQixHQUFHLEVBQUUsQ0FBQztZQUNOLE9BQU8sRUFBRSxJQUFJO1NBQ2QsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs4R0EzQlUsb0JBQW9CO2tHQUFwQixvQkFBb0Isc2lCQXBCckI7Ozs7Ozs7R0FPVCwrbEJBc0RVLGdCQUFnQjs7QUFsQ2U7SUFBbEIsV0FBVyxDQUFDLElBQUksQ0FBQztzREFBcUI7QUFJdEM7SUFBZCxXQUFXLEVBQUU7b0RBQWlCO0FBRWhCO0lBQWQsV0FBVyxFQUFFO3dEQUFxQjtBQUVwQjtJQUFkLFdBQVcsRUFBRTtpREFBYztBQUNaO0lBQWYsWUFBWSxFQUFFO3FEQUFtQjtBQUNsQjtJQUFmLFlBQVksRUFBRTtxREFBaUI7MkZBakI5QixvQkFBb0I7a0JBdkJoQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSw4QkFBOEI7b0JBQ3hDLFFBQVEsRUFBRSxhQUFhO29CQUN2QixRQUFRLEVBQUU7Ozs7Ozs7R0FPVDtvQkFDRCxJQUFJLEVBQUU7d0JBQ0osdUJBQXVCLEVBQUUsTUFBTTt3QkFDL0Isd0JBQXdCLEVBQUUseUJBQXlCO3dCQUNuRCxzQkFBc0IsRUFBRSx1QkFBdUI7d0JBQy9DLG1CQUFtQixFQUFFLGtCQUFrQjt3QkFDdkMsbUJBQW1CLEVBQUUsa0JBQWtCO3dCQUN2QyxrQkFBa0IsRUFBRSxNQUFNO3FCQUMzQjtvQkFDRCxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3RDO3lHQVEyQyxRQUFRO3NCQUFqRCxLQUFLO3VCQUFDLGNBQWM7Z0JBQ1osS0FBSztzQkFBYixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFFa0IsTUFBTTtzQkFBN0IsS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUs7Z0JBQ2tCLFVBQVU7c0JBQWpDLEtBQUs7Z0JBRWtCLEdBQUc7c0JBQTFCLEtBQUs7Z0JBQ21CLE9BQU87c0JBQS9CLEtBQUs7Z0JBQ21CLE9BQU87c0JBQS9CLEtBQUs7O0FBd0JSLE1BQU0sT0FBTyxnQkFBZ0I7SUFFM0IsWUFDRSxFQUFjLEVBQ2MsTUFBNEIsRUFDaEQsR0FBYztRQURNLFdBQU0sR0FBTixNQUFNLENBQXNCO1FBQ2hELFFBQUcsR0FBSCxHQUFHLENBQVc7UUFFdEIsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1lBQ2xCLE1BQU0sSUFBSSxLQUFLLENBQUMsa0RBQWtELENBQUMsQ0FBQztTQUNyRTtRQUNELElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQztJQUM3QixDQUFDO0lBRU8sUUFBUTtRQUNkLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQy9CLE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLGNBQWMsRUFBRSxHQUFHLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxlQUFlLEVBQUUsR0FBRyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDOzhHQXRCVSxnQkFBZ0I7a0dBQWhCLGdCQUFnQix3SUFSakIsMkJBQTJCOzsyRkFRMUIsZ0JBQWdCO2tCQVg1QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLFFBQVEsRUFBRSxTQUFTO29CQUNuQixRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxJQUFJLEVBQUU7d0JBQ0osbUJBQW1CLEVBQUUsTUFBTTtxQkFDNUI7b0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUN0Qzs7MEJBS0ksSUFBSTs7MEJBQUksUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3QsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHR5cGUgeyBSRVBfVFlQRSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UgfSBmcm9tICdAZGVsb24vdXRpbC9jb25maWcnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyLCBOdW1iZXJJbnB1dCB9IGZyb20gJ0BkZWxvbi91dGlsL2RlY29yYXRvcic7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdi1jb250YWluZXIsIFtzdi1jb250YWluZXJdJyxcbiAgZXhwb3J0QXM6ICdzdkNvbnRhaW5lcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImFudC1yb3dcIiBbbmdTdHlsZV09XCJ7ICdtYXJnaW4tbGVmdC5weCc6IC0oZ3V0dGVyIC8gMiksICdtYXJnaW4tcmlnaHQucHgnOiAtKGd1dHRlciAvIDIpIH1cIj5cbiAgICAgIDxzdi10aXRsZSAqbmdJZj1cInRpdGxlXCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJ0aXRsZVwiPnt7IHRpdGxlIH19PC9uZy1jb250YWluZXI+XG4gICAgICA8L3N2LXRpdGxlPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuICBgLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5zdl9fY29udGFpbmVyXSc6ICd0cnVlJyxcbiAgICAnW2NsYXNzLnN2X19ob3Jpem9udGFsXSc6IGBsYXlvdXQgPT09ICdob3Jpem9udGFsJ2AsXG4gICAgJ1tjbGFzcy5zdl9fdmVydGljYWxdJzogYGxheW91dCA9PT0gJ3ZlcnRpY2FsJ2AsXG4gICAgJ1tjbGFzcy5zdl9fc21hbGxdJzogYHNpemUgPT09ICdzbWFsbCdgLFxuICAgICdbY2xhc3Muc3ZfX2xhcmdlXSc6IGBzaXplID09PSAnbGFyZ2UnYCxcbiAgICAnW2NsYXNzLmNsZWFyZml4XSc6IGB0cnVlYFxuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU1ZDb250YWluZXJDb21wb25lbnQge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZ3V0dGVyOiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2xhYmVsV2lkdGg6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfY29sOiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2RlZmF1bHQ6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX25vQ29sb246IEJvb2xlYW5JbnB1dDtcblxuICBASW5wdXQoJ3N2LWNvbnRhaW5lcicpIEBJbnB1dE51bWJlcihudWxsKSBjb2xJbkNvbj86IFJFUF9UWVBFO1xuICBASW5wdXQoKSB0aXRsZT86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBzaXplITogJ3NtYWxsJyB8ICdsYXJnZSc7XG4gIC8qKiDliJfooajpobnpl7Tot53vvIzljZXkvY3kuLogYHB4YCAqL1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBndXR0ZXIhOiBudW1iZXI7XG4gIEBJbnB1dCgpIGxheW91dCE6ICdob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCc7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGxhYmVsV2lkdGg/OiBudW1iZXI7XG4gIC8qKiDmjIflrprkv6Hmga/mnIDlpJrliIblh6DliJflsZXnpLrvvIzmnIDnu4jkuIDooYzlh6DliJfnlLEgY29sIOmFjee9rue7k+WQiOWTjeW6lOW8j+inhOWImeWGs+WumiAqL1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBjb2whOiBudW1iZXI7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkZWZhdWx0ITogYm9vbGVhbjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG5vQ29sb24gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihjb25maWdTcnY6IEFsYWluQ29uZmlnU2VydmljZSkge1xuICAgIGNvbmZpZ1Nydi5hdHRhY2godGhpcywgJ3N2Jywge1xuICAgICAgc2l6ZTogJ2xhcmdlJyxcbiAgICAgIGd1dHRlcjogMzIsXG4gICAgICBsYXlvdXQ6ICdob3Jpem9udGFsJyxcbiAgICAgIGNvbDogMyxcbiAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICB9KTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdi10aXRsZSwgW3N2LXRpdGxlXScsXG4gIGV4cG9ydEFzOiAnc3ZUaXRsZScsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLnN2X190aXRsZV0nOiAndHJ1ZSdcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFNWVGl0bGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoXG4gICAgZWw6IEVsZW1lbnRSZWYsXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBwcml2YXRlIHBhcmVudDogU1ZDb250YWluZXJDb21wb25lbnQsXG4gICAgcHJpdmF0ZSByZW46IFJlbmRlcmVyMlxuICApIHtcbiAgICBpZiAocGFyZW50ID09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgW3N2LXRpdGxlXSBtdXN0IGluY2x1ZGUgJ3N2LWNvbnRhaW5lcicgY29tcG9uZW50YCk7XG4gICAgfVxuICAgIHRoaXMuZWwgPSBlbC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDbGFzcygpOiB2b2lkIHtcbiAgICBjb25zdCB7IGd1dHRlciB9ID0gdGhpcy5wYXJlbnQ7XG4gICAgY29uc3QgeyBlbCB9ID0gdGhpcztcbiAgICB0aGlzLnJlbi5zZXRTdHlsZShlbCwgJ3BhZGRpbmctbGVmdCcsIGAke2d1dHRlciAvIDJ9cHhgKTtcbiAgICB0aGlzLnJlbi5zZXRTdHlsZShlbCwgJ3BhZGRpbmctcmlnaHQnLCBgJHtndXR0ZXIgLyAyfXB4YCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldENsYXNzKCk7XG4gIH1cbn1cbiJdfQ==