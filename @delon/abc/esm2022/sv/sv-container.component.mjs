import { ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, ViewEncapsulation, booleanAttribute, inject, numberAttribute } from '@angular/core';
import { NzStringTemplateOutletDirective } from 'ng-zorro-antd/core/outlet';
import * as i0 from "@angular/core";
import * as i1 from "@delon/util/config";
export class SVTitleComponent {
    constructor() {
        this.el = inject(ElementRef).nativeElement;
        this.parentComp = inject(SVContainerComponent, { host: true, optional: true });
        this.ren = inject(Renderer2);
        if (this.parentComp == null) {
            throw new Error(`[sv-title] must include 'sv-container' component`);
        }
    }
    setClass() {
        const gutter = this.parentComp.gutter;
        const el = this.el;
        this.ren.setStyle(el, 'padding-left', `${gutter / 2}px`);
        this.ren.setStyle(el, 'padding-right', `${gutter / 2}px`);
    }
    ngOnInit() {
        this.setClass();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.11", ngImport: i0, type: SVTitleComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.11", type: SVTitleComponent, isStandalone: true, selector: "sv-title, [sv-title]", host: { properties: { "class.sv__title": "true" } }, exportAs: ["svTitle"], ngImport: i0, template: '<ng-content />', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.11", ngImport: i0, type: SVTitleComponent, decorators: [{
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
                    encapsulation: ViewEncapsulation.None,
                    standalone: true
                }]
        }], ctorParameters: () => [] });
export class SVContainerComponent {
    get margin() {
        return this.bordered ? {} : { 'margin-left': `${-(this.gutter / 2)}px`, 'margin-right': `${-(this.gutter / 2)}px` };
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.11", ngImport: i0, type: SVContainerComponent, deps: [{ token: i1.AlainConfigService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.11", type: SVContainerComponent, isStandalone: true, selector: "sv-container, [sv-container]", inputs: { colInCon: ["sv-container", "colInCon", (v) => (v == null ? null : numberAttribute(v))], title: "title", size: "size", gutter: ["gutter", "gutter", numberAttribute], layout: "layout", labelWidth: ["labelWidth", "labelWidth", numberAttribute], col: ["col", "col", numberAttribute], default: ["default", "default", booleanAttribute], noColon: ["noColon", "noColon", booleanAttribute], bordered: ["bordered", "bordered", booleanAttribute] }, host: { properties: { "class.sv__container": "true", "class.sv__horizontal": "layout === 'horizontal'", "class.sv__vertical": "layout === 'vertical'", "class.sv__small": "size === 'small'", "class.sv__large": "size === 'large'", "class.sv__bordered": "bordered", "class.clearfix": "true" } }, exportAs: ["svContainer"], ngImport: i0, template: `
    <div class="ant-row" [style]="margin">
      @if (title) {
        <sv-title>
          <ng-container *nzStringTemplateOutlet="title">{{ title }}</ng-container>
        </sv-title>
      }
      <ng-content />
    </div>
  `, isInline: true, dependencies: [{ kind: "component", type: SVTitleComponent, selector: "sv-title, [sv-title]", exportAs: ["svTitle"] }, { kind: "directive", type: NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.11", ngImport: i0, type: SVContainerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'sv-container, [sv-container]',
                    exportAs: 'svContainer',
                    template: `
    <div class="ant-row" [style]="margin">
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
                    encapsulation: ViewEncapsulation.None,
                    standalone: true,
                    imports: [SVTitleComponent, NzStringTemplateOutletDirective]
                }]
        }], ctorParameters: () => [{ type: i1.AlainConfigService }], propDecorators: { colInCon: [{
                type: Input,
                args: [{ alias: 'sv-container', transform: (v) => (v == null ? null : numberAttribute(v)) }]
            }], title: [{
                type: Input
            }], size: [{
                type: Input
            }], gutter: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], layout: [{
                type: Input
            }], labelWidth: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], col: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], default: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], noColon: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], bordered: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3YtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9zdi9zdi1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBRUwsU0FBUyxFQUVULGlCQUFpQixFQUNqQixnQkFBZ0IsRUFDaEIsTUFBTSxFQUNOLGVBQWUsRUFDaEIsTUFBTSxlQUFlLENBQUM7QUFJdkIsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7OztBQWM1RSxNQUFNLE9BQU8sZ0JBQWdCO0lBSzNCO1FBSmlCLE9BQUUsR0FBZ0IsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLGFBQWEsQ0FBQztRQUNuRCxlQUFVLEdBQUcsTUFBTSxDQUFDLG9CQUFvQixFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUMxRSxRQUFHLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBR3ZDLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUM1QixNQUFNLElBQUksS0FBSyxDQUFDLGtEQUFrRCxDQUFDLENBQUM7UUFDdEUsQ0FBQztJQUNILENBQUM7SUFFTyxRQUFRO1FBQ2QsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVcsQ0FBQyxNQUFNLENBQUM7UUFDdkMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsY0FBYyxFQUFFLEdBQUcsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLGVB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Q0FBQyxDQUFDLEVBQUU7Z0JBRTNGLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBRWlDLE1BQU07c0JBQTVDLEtBQUs7dUJBQUMsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFO2dCQUM1QixNQUFNO3NCQUFkLEtBQUs7Z0JBQ2lDLFVBQVU7c0JBQWhELEtBQUs7dUJBQUMsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFO2dCQUVFLEdBQUc7c0JBQXpDLEtBQUs7dUJBQUMsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFO2dCQUNHLE9BQU87c0JBQTlDLEtBQUs7dUJBQUMsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUU7Z0JBQ0UsT0FBTztzQkFBOUMsS0FBSzt1QkFBQyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRTtnQkFDRSxRQUFRO3NCQUEvQyxLQUFLO3VCQUFDLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIGJvb2xlYW5BdHRyaWJ1dGUsXG4gIGluamVjdCxcbiAgbnVtYmVyQXR0cmlidXRlXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgdHlwZSB7IFJFUF9UWVBFIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IEFsYWluQ29uZmlnU2VydmljZSB9IGZyb20gJ0BkZWxvbi91dGlsL2NvbmZpZyc7XG5pbXBvcnQgeyBOelN0cmluZ1RlbXBsYXRlT3V0bGV0RGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL291dGxldCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N2LXRpdGxlLCBbc3YtdGl0bGVdJyxcbiAgZXhwb3J0QXM6ICdzdlRpdGxlJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudCAvPicsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLnN2X190aXRsZV0nOiAndHJ1ZSdcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzdGFuZGFsb25lOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIFNWVGl0bGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIHJlYWRvbmx5IGVsOiBIVE1MRWxlbWVudCA9IGluamVjdChFbGVtZW50UmVmKS5uYXRpdmVFbGVtZW50O1xuICBwcml2YXRlIHJlYWRvbmx5IHBhcmVudENvbXAgPSBpbmplY3QoU1ZDb250YWluZXJDb21wb25lbnQsIHsgaG9zdDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUgfSk7XG4gIHByaXZhdGUgcmVhZG9ubHkgcmVuID0gaW5qZWN0KFJlbmRlcmVyMik7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgaWYgKHRoaXMucGFyZW50Q29tcCA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFtzdi10aXRsZV0gbXVzdCBpbmNsdWRlICdzdi1jb250YWluZXInIGNvbXBvbmVudGApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0Q2xhc3MoKTogdm9pZCB7XG4gICAgY29uc3QgZ3V0dGVyID0gdGhpcy5wYXJlbnRDb21wIS5ndXR0ZXI7XG4gICAgY29uc3QgZWwgPSB0aGlzLmVsO1xuICAgIHRoaXMucmVuLnNldFN0eWxlKGVsLCAncGFkZGluZy1sZWZ0JywgYCR7Z3V0dGVyIC8gMn1weGApO1xuICAgIHRoaXMucmVuLnNldFN0eWxlKGVsLCAncGFkZGluZy1yaWdodCcsIGAke2d1dHRlciAvIDJ9cHhgKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0Q2xhc3MoKTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdi1jb250YWluZXIsIFtzdi1jb250YWluZXJdJyxcbiAgZXhwb3J0QXM6ICdzdkNvbnRhaW5lcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImFudC1yb3dcIiBbc3R5bGVdPVwibWFyZ2luXCI+XG4gICAgICBAaWYgKHRpdGxlKSB7XG4gICAgICAgIDxzdi10aXRsZT5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwidGl0bGVcIj57eyB0aXRsZSB9fTwvbmctY29udGFpbmVyPlxuICAgICAgICA8L3N2LXRpdGxlPlxuICAgICAgfVxuICAgICAgPG5nLWNvbnRlbnQgLz5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3Muc3ZfX2NvbnRhaW5lcl0nOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy5zdl9faG9yaXpvbnRhbF0nOiBgbGF5b3V0ID09PSAnaG9yaXpvbnRhbCdgLFxuICAgICdbY2xhc3Muc3ZfX3ZlcnRpY2FsXSc6IGBsYXlvdXQgPT09ICd2ZXJ0aWNhbCdgLFxuICAgICdbY2xhc3Muc3ZfX3NtYWxsXSc6IGBzaXplID09PSAnc21hbGwnYCxcbiAgICAnW2NsYXNzLnN2X19sYXJnZV0nOiBgc2l6ZSA9PT0gJ2xhcmdlJ2AsXG4gICAgJ1tjbGFzcy5zdl9fYm9yZGVyZWRdJzogYGJvcmRlcmVkYCxcbiAgICAnW2NsYXNzLmNsZWFyZml4XSc6IGB0cnVlYFxuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtTVlRpdGxlQ29tcG9uZW50LCBOelN0cmluZ1RlbXBsYXRlT3V0bGV0RGlyZWN0aXZlXVxufSlcbmV4cG9ydCBjbGFzcyBTVkNvbnRhaW5lckNvbXBvbmVudCB7XG4gIEBJbnB1dCh7IGFsaWFzOiAnc3YtY29udGFpbmVyJywgdHJhbnNmb3JtOiAodjogdW5rbm93bikgPT4gKHYgPT0gbnVsbCA/IG51bGwgOiBudW1iZXJBdHRyaWJ1dGUodikpIH0pXG4gIGNvbEluQ29uPzogUkVQX1RZUEU7XG4gIEBJbnB1dCgpIHRpdGxlPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIHNpemU/OiAnc21hbGwnIHwgJ2xhcmdlJyB8ICdkZWZhdWx0JztcbiAgLyoqIOWIl+ihqOmhuemXtOi3ne+8jOWNleS9jeS4uiBgcHhgICovXG4gIEBJbnB1dCh7IHRyYW5zZm9ybTogbnVtYmVyQXR0cmlidXRlIH0pIGd1dHRlciE6IG51bWJlcjtcbiAgQElucHV0KCkgbGF5b3V0ITogJ2hvcml6b250YWwnIHwgJ3ZlcnRpY2FsJztcbiAgQElucHV0KHsgdHJhbnNmb3JtOiBudW1iZXJBdHRyaWJ1dGUgfSkgbGFiZWxXaWR0aD86IG51bWJlcjtcbiAgLyoqIOaMh+WumuS/oeaBr+acgOWkmuWIhuWHoOWIl+Wxleekuu+8jOacgOe7iOS4gOihjOWHoOWIl+eUsSBjb2wg6YWN572u57uT5ZCI5ZON5bqU5byP6KeE5YiZ5Yaz5a6aICovXG4gIEBJbnB1dCh7IHRyYW5zZm9ybTogbnVtYmVyQXR0cmlidXRlIH0pIGNvbCE6IG51bWJlcjtcbiAgQElucHV0KHsgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlIH0pIGRlZmF1bHQhOiBib29sZWFuO1xuICBASW5wdXQoeyB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGUgfSkgbm9Db2xvbiA9IGZhbHNlO1xuICBASW5wdXQoeyB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGUgfSkgYm9yZGVyZWQgPSBmYWxzZTtcblxuICBnZXQgbWFyZ2luKCk6IHsgW2s6IHN0cmluZ106IHN0cmluZyB9IHtcbiAgICByZXR1cm4gdGhpcy5ib3JkZXJlZCA/IHt9IDogeyAnbWFyZ2luLWxlZnQnOiBgJHstKHRoaXMuZ3V0dGVyIC8gMil9cHhgLCAnbWFyZ2luLXJpZ2h0JzogYCR7LSh0aGlzLmd1dHRlciAvIDIpfXB4YCB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoY29uZmlnU3J2OiBBbGFpbkNvbmZpZ1NlcnZpY2UpIHtcbiAgICBjb25maWdTcnYuYXR0YWNoKHRoaXMsICdzdicsIHtcbiAgICAgIHNpemU6ICdsYXJnZScsXG4gICAgICBndXR0ZXI6IDMyLFxuICAgICAgbGF5b3V0OiAnaG9yaXpvbnRhbCcsXG4gICAgICBjb2w6IDMsXG4gICAgICBkZWZhdWx0OiB0cnVlXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==