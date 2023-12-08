import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Host, Input, Optional, ViewEncapsulation } from '@angular/core';
import { InputBoolean, InputNumber } from '@delon/util/decorator';
import * as i0 from "@angular/core";
import * as i1 from "@delon/util/config";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/core/outlet";
export class SVContainerComponent {
    get margin() {
        return this.bordered ? {} : { 'margin-left.px': -(this.gutter / 2), 'margin-right.px': -(this.gutter / 2) };
    }
    constructor(configSrv) {
        this.noColon = false;
        this.bordered = false;
        configSrv.attach(this, 'sv', {
            size: 'large',
            gutter: 32,
            layout: 'horizontal',
            col: 3,
            default: true
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: SVContainerComponent, deps: [{ token: i1.AlainConfigService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.6", type: SVContainerComponent, selector: "sv-container, [sv-container]", inputs: { colInCon: ["sv-container", "colInCon"], title: "title", size: "size", gutter: "gutter", layout: "layout", labelWidth: "labelWidth", col: "col", default: "default", noColon: "noColon", bordered: "bordered" }, host: { properties: { "class.sv__container": "true", "class.sv__horizontal": "layout === 'horizontal'", "class.sv__vertical": "layout === 'vertical'", "class.sv__small": "size === 'small'", "class.sv__large": "size === 'large'", "class.sv__bordered": "bordered", "class.clearfix": "true" } }, exportAs: ["svContainer"], ngImport: i0, template: `
    <div class="ant-row" [ngStyle]="margin">
      @if (title) {
        <sv-title>
          <ng-container *nzStringTemplateOutlet="title">{{ title }}</ng-container>
        </sv-title>
      }
      <ng-content />
    </div>
  `, isInline: true, dependencies: [{ kind: "directive", type: i0.forwardRef(() => i2.NgStyle), selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: i0.forwardRef(() => i3.NzStringTemplateOutletDirective), selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { kind: "component", type: i0.forwardRef(() => SVTitleComponent), selector: "sv-title, [sv-title]", exportAs: ["svTitle"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
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
__decorate([
    InputBoolean()
], SVContainerComponent.prototype, "bordered", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: SVContainerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'sv-container, [sv-container]',
                    exportAs: 'svContainer',
                    template: `
    <div class="ant-row" [ngStyle]="margin">
      @if (title) {
        <sv-title>
          <ng-container *nzStringTemplateOutlet="title">{{ title }}</ng-container>
        </sv-title>
      }
      <ng-content />
    </div>
  `,
                    host: {
                        '[class.sv__container]': 'true',
                        '[class.sv__horizontal]': `layout === 'horizontal'`,
                        '[class.sv__vertical]': `layout === 'vertical'`,
                        '[class.sv__small]': `size === 'small'`,
                        '[class.sv__large]': `size === 'large'`,
                        '[class.sv__bordered]': `bordered`,
                        '[class.clearfix]': `true`
                    },
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: () => [{ type: i1.AlainConfigService }], propDecorators: { colInCon: [{
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
            }], bordered: [{
                type: Input
            }] } });
export class SVTitleComponent {
    constructor(el, parent, ren) {
        this.el = el;
        this.parent = parent;
        this.ren = ren;
        if (parent == null) {
            throw new Error(`[sv-title] must include 'sv-container' component`);
        }
    }
    setClass() {
        const gutter = this.parent.gutter;
        const el = this.el.nativeElement;
        this.ren.setStyle(el, 'padding-left', `${gutter / 2}px`);
        this.ren.setStyle(el, 'padding-right', `${gutter / 2}px`);
    }
    ngOnInit() {
        this.setClass();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: SVTitleComponent, deps: [{ token: i0.ElementRef }, { token: SVContainerComponent, host: true, optional: true }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.6", type: SVTitleComponent, selector: "sv-title, [sv-title]", host: { properties: { "class.sv__title": "true" } }, exportAs: ["svTitle"], ngImport: i0, template: '<ng-content />', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: SVTitleComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'sv-title, [sv-title]',
                    exportAs: 'svTitle',
                    template: '<ng-content />',
                    host: {
                        '[class.sv__title]': 'true'
                    },
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: SVContainerComponent, decorators: [{
                    type: Host
                }, {
                    type: Optional
                }] }, { type: i0.Renderer2 }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3YtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9zdi9zdi1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFFVCxJQUFJLEVBQ0osS0FBSyxFQUVMLFFBQVEsRUFHUixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFJdkIsT0FBTyxFQUFnQixZQUFZLEVBQUUsV0FBVyxFQUFlLE1BQU0sdUJBQXVCLENBQUM7Ozs7O0FBMkI3RixNQUFNLE9BQU8sb0JBQW9CO0lBc0IvQixJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxnQkFBZ0IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQzlHLENBQUM7SUFFRCxZQUFZLFNBQTZCO1FBUGhCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQU94QyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUU7WUFDM0IsSUFBSSxFQUFFLE9BQU87WUFDYixNQUFNLEVBQUUsRUFBRTtZQUNWLE1BQU0sRUFBRSxZQUFZO1lBQ3BCLEdBQUcsRUFBRSxDQUFDO1lBQ04sT0FBTyxFQUFFLElBQUk7U0FDZCxDQUFDLENBQUM7SUFDTCxDQUFDOzhHQWxDVSxvQkFBb0I7a0dBQXBCLG9CQUFvQiw4bEJBdkJyQjs7Ozs7Ozs7O0dBU1QsaWFBOERVLGdCQUFnQjs7QUF2Q2U7SUFBbEIsV0FBVyxDQUFDLElBQUksQ0FBQztzREFBcUI7QUFJdEM7SUFBZCxXQUFXLEVBQUU7b0RBQWlCO0FBRWhCO0lBQWQsV0FBVyxFQUFFO3dEQUFxQjtBQUVwQjtJQUFkLFdBQVcsRUFBRTtpREFBYztBQUNaO0lBQWYsWUFBWSxFQUFFO3FEQUFtQjtBQUNsQjtJQUFmLFlBQVksRUFBRTtxREFBaUI7QUFDaEI7SUFBZixZQUFZLEVBQUU7c0RBQWtCOzJGQXBCL0Isb0JBQW9CO2tCQTFCaEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsOEJBQThCO29CQUN4QyxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsUUFBUSxFQUFFOzs7Ozs7Ozs7R0FTVDtvQkFDRCxJQUFJLEVBQUU7d0JBQ0osdUJBQXVCLEVBQUUsTUFBTTt3QkFDL0Isd0JBQXdCLEVBQUUseUJBQXlCO3dCQUNuRCxzQkFBc0IsRUFBRSx1QkFBdUI7d0JBQy9DLG1CQUFtQixFQUFFLGtCQUFrQjt3QkFDdkMsbUJBQW1CLEVBQUUsa0JBQWtCO3dCQUN2QyxzQkFBc0IsRUFBRSxVQUFVO3dCQUNsQyxrQkFBa0IsRUFBRSxNQUFNO3FCQUMzQjtvQkFDRCxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3RDO3VGQVUyQyxRQUFRO3NCQUFqRCxLQUFLO3VCQUFDLGNBQWM7Z0JBQ1osS0FBSztzQkFBYixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFFa0IsTUFBTTtzQkFBN0IsS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUs7Z0JBQ2tCLFVBQVU7c0JBQWpDLEtBQUs7Z0JBRWtCLEdBQUc7c0JBQTFCLEtBQUs7Z0JBQ21CLE9BQU87c0JBQS9CLEtBQUs7Z0JBQ21CLE9BQU87c0JBQS9CLEtBQUs7Z0JBQ21CLFFBQVE7c0JBQWhDLEtBQUs7O0FBNEJSLE1BQU0sT0FBTyxnQkFBZ0I7SUFDM0IsWUFDVSxFQUEyQixFQUNQLE1BQTRCLEVBQ2hELEdBQWM7UUFGZCxPQUFFLEdBQUYsRUFBRSxDQUF5QjtRQUNQLFdBQU0sR0FBTixNQUFNLENBQXNCO1FBQ2hELFFBQUcsR0FBSCxHQUFHLENBQVc7UUFFdEIsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1lBQ2xCLE1BQU0sSUFBSSxLQUFLLENBQUMsa0RBQWtELENBQUMsQ0FBQztTQUNyRTtJQUNILENBQUM7SUFFTyxRQUFRO1FBQ2QsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDbEMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUM7UUFDakMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLGNBQWMsRUFBRSxHQUFHLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxlQUFlLEVBQUUsR0FBRyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDOzhHQXBCVSxnQkFBZ0I7a0dBQWhCLGdCQUFnQix3SUFSakIsZ0JBQWdCOzsyRkFRZixnQkFBZ0I7a0JBWDVCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLElBQUksRUFBRTt3QkFDSixtQkFBbUIsRUFBRSxNQUFNO3FCQUM1QjtvQkFDRCxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3RDOzswQkFJSSxJQUFJOzswQkFBSSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdCxcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIFJlbmRlcmVyMixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgdHlwZSB7IFJFUF9UWVBFIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IEFsYWluQ29uZmlnU2VydmljZSB9IGZyb20gJ0BkZWxvbi91dGlsL2NvbmZpZyc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIsIE51bWJlcklucHV0IH0gZnJvbSAnQGRlbG9uL3V0aWwvZGVjb3JhdG9yJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N2LWNvbnRhaW5lciwgW3N2LWNvbnRhaW5lcl0nLFxuICBleHBvcnRBczogJ3N2Q29udGFpbmVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiYW50LXJvd1wiIFtuZ1N0eWxlXT1cIm1hcmdpblwiPlxuICAgICAgQGlmICh0aXRsZSkge1xuICAgICAgICA8c3YtdGl0bGU+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cInRpdGxlXCI+e3sgdGl0bGUgfX08L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9zdi10aXRsZT5cbiAgICAgIH1cbiAgICAgIDxuZy1jb250ZW50IC8+XG4gICAgPC9kaXY+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLnN2X19jb250YWluZXJdJzogJ3RydWUnLFxuICAgICdbY2xhc3Muc3ZfX2hvcml6b250YWxdJzogYGxheW91dCA9PT0gJ2hvcml6b250YWwnYCxcbiAgICAnW2NsYXNzLnN2X192ZXJ0aWNhbF0nOiBgbGF5b3V0ID09PSAndmVydGljYWwnYCxcbiAgICAnW2NsYXNzLnN2X19zbWFsbF0nOiBgc2l6ZSA9PT0gJ3NtYWxsJ2AsXG4gICAgJ1tjbGFzcy5zdl9fbGFyZ2VdJzogYHNpemUgPT09ICdsYXJnZSdgLFxuICAgICdbY2xhc3Muc3ZfX2JvcmRlcmVkXSc6IGBib3JkZXJlZGAsXG4gICAgJ1tjbGFzcy5jbGVhcmZpeF0nOiBgdHJ1ZWBcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFNWQ29udGFpbmVyQ29tcG9uZW50IHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2d1dHRlcjogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9sYWJlbFdpZHRoOiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2NvbDogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9jb2xJbkNvbjogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9kZWZhdWx0OiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9ub0NvbG9uOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9ib3JkZXJlZDogQm9vbGVhbklucHV0O1xuXG4gIEBJbnB1dCgnc3YtY29udGFpbmVyJykgQElucHV0TnVtYmVyKG51bGwpIGNvbEluQ29uPzogUkVQX1RZUEU7XG4gIEBJbnB1dCgpIHRpdGxlPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIHNpemU/OiAnc21hbGwnIHwgJ2xhcmdlJyB8ICdkZWZhdWx0JztcbiAgLyoqIOWIl+ihqOmhuemXtOi3ne+8jOWNleS9jeS4uiBgcHhgICovXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGd1dHRlciE6IG51bWJlcjtcbiAgQElucHV0KCkgbGF5b3V0ITogJ2hvcml6b250YWwnIHwgJ3ZlcnRpY2FsJztcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgbGFiZWxXaWR0aD86IG51bWJlcjtcbiAgLyoqIOaMh+WumuS/oeaBr+acgOWkmuWIhuWHoOWIl+Wxleekuu+8jOacgOe7iOS4gOihjOWHoOWIl+eUsSBjb2wg6YWN572u57uT5ZCI5ZON5bqU5byP6KeE5YiZ5Yaz5a6aICovXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGNvbCE6IG51bWJlcjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRlZmF1bHQhOiBib29sZWFuO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbm9Db2xvbiA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYm9yZGVyZWQgPSBmYWxzZTtcblxuICBnZXQgbWFyZ2luKCk6IHsgW2s6IHN0cmluZ106IG51bWJlciB9IHtcbiAgICByZXR1cm4gdGhpcy5ib3JkZXJlZCA/IHt9IDogeyAnbWFyZ2luLWxlZnQucHgnOiAtKHRoaXMuZ3V0dGVyIC8gMiksICdtYXJnaW4tcmlnaHQucHgnOiAtKHRoaXMuZ3V0dGVyIC8gMikgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZ1NydjogQWxhaW5Db25maWdTZXJ2aWNlKSB7XG4gICAgY29uZmlnU3J2LmF0dGFjaCh0aGlzLCAnc3YnLCB7XG4gICAgICBzaXplOiAnbGFyZ2UnLFxuICAgICAgZ3V0dGVyOiAzMixcbiAgICAgIGxheW91dDogJ2hvcml6b250YWwnLFxuICAgICAgY29sOiAzLFxuICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgIH0pO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N2LXRpdGxlLCBbc3YtdGl0bGVdJyxcbiAgZXhwb3J0QXM6ICdzdlRpdGxlJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudCAvPicsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLnN2X190aXRsZV0nOiAndHJ1ZSdcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFNWVGl0bGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIHByaXZhdGUgcGFyZW50OiBTVkNvbnRhaW5lckNvbXBvbmVudCxcbiAgICBwcml2YXRlIHJlbjogUmVuZGVyZXIyXG4gICkge1xuICAgIGlmIChwYXJlbnQgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBbc3YtdGl0bGVdIG11c3QgaW5jbHVkZSAnc3YtY29udGFpbmVyJyBjb21wb25lbnRgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldENsYXNzKCk6IHZvaWQge1xuICAgIGNvbnN0IGd1dHRlciA9IHRoaXMucGFyZW50Lmd1dHRlcjtcbiAgICBjb25zdCBlbCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLnJlbi5zZXRTdHlsZShlbCwgJ3BhZGRpbmctbGVmdCcsIGAke2d1dHRlciAvIDJ9cHhgKTtcbiAgICB0aGlzLnJlbi5zZXRTdHlsZShlbCwgJ3BhZGRpbmctcmlnaHQnLCBgJHtndXR0ZXIgLyAyfXB4YCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldENsYXNzKCk7XG4gIH1cbn1cbiJdfQ==