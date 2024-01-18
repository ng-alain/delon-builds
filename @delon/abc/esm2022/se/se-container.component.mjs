import { ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, ViewEncapsulation, booleanAttribute, inject } from '@angular/core';
import { BehaviorSubject, filter } from 'rxjs';
import { toNumber } from '@delon/util/decorator';
import { NzStringTemplateOutletDirective } from 'ng-zorro-antd/core/outlet';
import * as i0 from "@angular/core";
import * as i1 from "@delon/util/config";
export class SETitleComponent {
    constructor() {
        this.parent = inject(SEContainerComponent, { host: true, optional: true });
        this.el = inject(ElementRef).nativeElement;
        this.ren = inject(Renderer2);
        if (parent == null) {
            throw new Error(`[se-title] must include 'se-container' component`);
        }
    }
    setClass() {
        const { el } = this;
        const gutter = this.parent.gutter;
        this.ren.setStyle(el, 'padding-left', `${gutter / 2}px`);
        this.ren.setStyle(el, 'padding-right', `${gutter / 2}px`);
    }
    ngOnInit() {
        this.setClass();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: SETitleComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0", type: SETitleComponent, isStandalone: true, selector: "se-title, [se-title]", host: { properties: { "class.se__title": "true" } }, exportAs: ["seTitle"], ngImport: i0, template: '<ng-content />', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: SETitleComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'se-title, [se-title]',
                    exportAs: 'seTitle',
                    template: '<ng-content />',
                    host: {
                        '[class.se__title]': 'true'
                    },
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    standalone: true
                }]
        }], ctorParameters: () => [] });
export class SEContainerComponent {
    get gutter() {
        return this.nzLayout === 'horizontal' ? this._gutter : 0;
    }
    set gutter(value) {
        this._gutter = toNumber(value);
    }
    get nzLayout() {
        return this._nzLayout;
    }
    set nzLayout(value) {
        this._nzLayout = value;
        if (value === 'inline') {
            this.size = 'compact';
        }
    }
    set errors(val) {
        this.setErrors(val);
    }
    get margin() {
        return -(this.gutter / 2);
    }
    get errorNotify() {
        return this.errorNotify$.pipe(filter(v => v != null));
    }
    constructor(configSrv) {
        this.errorNotify$ = new BehaviorSubject(null);
        this.noColon = false;
        this.line = false;
        configSrv.attach(this, 'se', {
            size: 'default',
            nzLayout: 'horizontal',
            gutter: 32,
            col: 2,
            labelWidth: 150,
            firstVisual: false,
            ingoreDirty: false
        });
    }
    setErrors(errors) {
        for (const error of errors) {
            this.errorNotify$.next(error);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: SEContainerComponent, deps: [{ token: i1.AlainConfigService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.1.0", type: SEContainerComponent, isStandalone: true, selector: "se-container, [se-container]", inputs: { colInCon: ["se-container", "colInCon", (v) => toNumber(v, null)], col: ["col", "col", (v) => toNumber(v, null)], labelWidth: ["labelWidth", "labelWidth", (v) => toNumber(v, null)], noColon: ["noColon", "noColon", booleanAttribute], title: "title", gutter: "gutter", nzLayout: "nzLayout", size: "size", firstVisual: ["firstVisual", "firstVisual", booleanAttribute], ingoreDirty: ["ingoreDirty", "ingoreDirty", booleanAttribute], line: ["line", "line", booleanAttribute], errors: "errors" }, host: { properties: { "class.ant-row": "true", "class.se__container": "true", "class.se__horizontal": "nzLayout === 'horizontal'", "class.se__vertical": "nzLayout === 'vertical'", "class.se__inline": "nzLayout === 'inline'", "class.se__compact": "size === 'compact'", "style.margin-left.px": "margin", "style.margin-right.px": "margin" } }, exportAs: ["seContainer"], ngImport: i0, template: `
    @if (title) {
      <div se-title>
        <ng-container *nzStringTemplateOutlet="title">{{ title }}</ng-container>
      </div>
    }
    <ng-content />
  `, isInline: true, dependencies: [{ kind: "component", type: SETitleComponent, selector: "se-title, [se-title]", exportAs: ["seTitle"] }, { kind: "directive", type: NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: SEContainerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'se-container, [se-container]',
                    exportAs: 'seContainer',
                    template: `
    @if (title) {
      <div se-title>
        <ng-container *nzStringTemplateOutlet="title">{{ title }}</ng-container>
      </div>
    }
    <ng-content />
  `,
                    host: {
                        '[class.ant-row]': `true`,
                        '[class.se__container]': `true`,
                        '[class.se__horizontal]': `nzLayout === 'horizontal'`,
                        '[class.se__vertical]': `nzLayout === 'vertical'`,
                        '[class.se__inline]': `nzLayout === 'inline'`,
                        '[class.se__compact]': `size === 'compact'`,
                        '[style.margin-left.px]': `margin`,
                        '[style.margin-right.px]': `margin`
                    },
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    standalone: true,
                    imports: [SETitleComponent, NzStringTemplateOutletDirective]
                }]
        }], ctorParameters: () => [{ type: i1.AlainConfigService }], propDecorators: { colInCon: [{
                type: Input,
                args: [{ alias: 'se-container', transform: (v) => toNumber(v, null) }]
            }], col: [{
                type: Input,
                args: [{ transform: (v) => toNumber(v, null) }]
            }], labelWidth: [{
                type: Input,
                args: [{ transform: (v) => toNumber(v, null) }]
            }], noColon: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], title: [{
                type: Input
            }], gutter: [{
                type: Input
            }], nzLayout: [{
                type: Input
            }], size: [{
                type: Input
            }], firstVisual: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], ingoreDirty: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], line: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], errors: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2UtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9zZS9zZS1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBRUwsU0FBUyxFQUVULGlCQUFpQixFQUNqQixnQkFBZ0IsRUFDaEIsTUFBTSxFQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBSTNELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7O0FBaUI1RSxNQUFNLE9BQU8sZ0JBQWdCO0lBSTNCO1FBSGlCLFdBQU0sR0FBRyxNQUFNLENBQUMsb0JBQW9CLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3RFLE9BQUUsR0FBZ0IsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLGFBQWEsQ0FBQztRQUNuRCxRQUFHLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRXZDLElBQUksTUFBTSxJQUFJLElBQUksRUFBRSxDQUFDO1lBQ25CLE1BQU0sSUFBSSxLQUFLLENBQUMsa0RBQWtELENBQUMsQ0FBQztRQUN0RSxDQUFDO0lBQ0gsQ0FBQztJQUVPLFFBQVE7UUFDZCxNQUFNLEVBQUUsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFPLENBQUMsTUFBZ0IsQ0FBQztRQUM3QyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsY0FBYyxFQUFFLEdBQUcsTUFB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QUFDLEVBQUUsSUFBSSxDQUFDLEVBQUU7Z0JBQ0UsVUFBVTtzQkFBcEUsS0FBSzt1QkFBQyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQVksRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRTtnQkFDakIsT0FBTztzQkFBOUMsS0FBSzt1QkFBQyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRTtnQkFDN0IsS0FBSztzQkFBYixLQUFLO2dCQUdGLE1BQU07c0JBRFQsS0FBSztnQkFVRixRQUFRO3NCQURYLEtBQUs7Z0JBWUcsSUFBSTtzQkFBWixLQUFLO2dCQUNrQyxXQUFXO3NCQUFsRCxLQUFLO3VCQUFDLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFO2dCQUNFLFdBQVc7c0JBQWxELEtBQUs7dUJBQUMsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUU7Z0JBQ0UsSUFBSTtzQkFBM0MsS0FBSzt1QkFBQyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRTtnQkFFbEMsTUFBTTtzQkFEVCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIGJvb2xlYW5BdHRyaWJ1dGUsXG4gIGluamVjdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgZmlsdGVyIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB0eXBlIHsgUkVQX1RZUEUgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3V0aWwvY29uZmlnJztcbmltcG9ydCB7IHRvTnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwvZGVjb3JhdG9yJztcbmltcG9ydCB7IE56U3RyaW5nVGVtcGxhdGVPdXRsZXREaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvb3V0bGV0JztcbmltcG9ydCB0eXBlIHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuaW1wb3J0IHsgU0VFcnJvclJlZnJlc2gsIFNFTGF5b3V0IH0gZnJvbSAnLi9zZS50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NlLXRpdGxlLCBbc2UtdGl0bGVdJyxcbiAgZXhwb3J0QXM6ICdzZVRpdGxlJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudCAvPicsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLnNlX190aXRsZV0nOiAndHJ1ZSdcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzdGFuZGFsb25lOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIFNFVGl0bGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIHJlYWRvbmx5IHBhcmVudCA9IGluamVjdChTRUNvbnRhaW5lckNvbXBvbmVudCwgeyBob3N0OiB0cnVlLCBvcHRpb25hbDogdHJ1ZSB9KTtcbiAgcHJpdmF0ZSByZWFkb25seSBlbDogSFRNTEVsZW1lbnQgPSBpbmplY3QoRWxlbWVudFJlZikubmF0aXZlRWxlbWVudDtcbiAgcHJpdmF0ZSByZWFkb25seSByZW4gPSBpbmplY3QoUmVuZGVyZXIyKTtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgaWYgKHBhcmVudCA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFtzZS10aXRsZV0gbXVzdCBpbmNsdWRlICdzZS1jb250YWluZXInIGNvbXBvbmVudGApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0Q2xhc3MoKTogdm9pZCB7XG4gICAgY29uc3QgeyBlbCB9ID0gdGhpcztcbiAgICBjb25zdCBndXR0ZXIgPSB0aGlzLnBhcmVudCEuZ3V0dGVyIGFzIG51bWJlcjtcbiAgICB0aGlzLnJlbi5zZXRTdHlsZShlbCwgJ3BhZGRpbmctbGVmdCcsIGAke2d1dHRlciAvIDJ9cHhgKTtcbiAgICB0aGlzLnJlbi5zZXRTdHlsZShlbCwgJ3BhZGRpbmctcmlnaHQnLCBgJHtndXR0ZXIgLyAyfXB4YCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldENsYXNzKCk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2UtY29udGFpbmVyLCBbc2UtY29udGFpbmVyXScsXG4gIGV4cG9ydEFzOiAnc2VDb250YWluZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIEBpZiAodGl0bGUpIHtcbiAgICAgIDxkaXYgc2UtdGl0bGU+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJ0aXRsZVwiPnt7IHRpdGxlIH19PC9uZy1jb250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICB9XG4gICAgPG5nLWNvbnRlbnQgLz5cbiAgYCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LXJvd10nOiBgdHJ1ZWAsXG4gICAgJ1tjbGFzcy5zZV9fY29udGFpbmVyXSc6IGB0cnVlYCxcbiAgICAnW2NsYXNzLnNlX19ob3Jpem9udGFsXSc6IGBuekxheW91dCA9PT0gJ2hvcml6b250YWwnYCxcbiAgICAnW2NsYXNzLnNlX192ZXJ0aWNhbF0nOiBgbnpMYXlvdXQgPT09ICd2ZXJ0aWNhbCdgLFxuICAgICdbY2xhc3Muc2VfX2lubGluZV0nOiBgbnpMYXlvdXQgPT09ICdpbmxpbmUnYCxcbiAgICAnW2NsYXNzLnNlX19jb21wYWN0XSc6IGBzaXplID09PSAnY29tcGFjdCdgLFxuICAgICdbc3R5bGUubWFyZ2luLWxlZnQucHhdJzogYG1hcmdpbmAsXG4gICAgJ1tzdHlsZS5tYXJnaW4tcmlnaHQucHhdJzogYG1hcmdpbmBcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbU0VUaXRsZUNvbXBvbmVudCwgTnpTdHJpbmdUZW1wbGF0ZU91dGxldERpcmVjdGl2ZV1cbn0pXG5leHBvcnQgY2xhc3MgU0VDb250YWluZXJDb21wb25lbnQge1xuICBwcml2YXRlIGVycm9yTm90aWZ5JCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8U0VFcnJvclJlZnJlc2g+KG51bGwgYXMgTnpTYWZlQW55KTtcbiAgQElucHV0KHsgYWxpYXM6ICdzZS1jb250YWluZXInLCB0cmFuc2Zvcm06ICh2OiBOelNhZmVBbnkpID0+IHRvTnVtYmVyKHYsIG51bGwpIH0pIGNvbEluQ29uPzogUkVQX1RZUEU7XG4gIEBJbnB1dCh7IHRyYW5zZm9ybTogKHY6IE56U2FmZUFueSkgPT4gdG9OdW1iZXIodiwgbnVsbCkgfSkgY29sITogUkVQX1RZUEU7XG4gIEBJbnB1dCh7IHRyYW5zZm9ybTogKHY6IE56U2FmZUFueSkgPT4gdG9OdW1iZXIodiwgbnVsbCkgfSkgbGFiZWxXaWR0aCE6IG51bWJlcjtcbiAgQElucHV0KHsgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlIH0pIG5vQ29sb24gPSBmYWxzZTtcbiAgQElucHV0KCkgdGl0bGU/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGw7XG5cbiAgQElucHV0KClcbiAgZ2V0IGd1dHRlcigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLm56TGF5b3V0ID09PSAnaG9yaXpvbnRhbCcgPyB0aGlzLl9ndXR0ZXIgOiAwO1xuICB9XG4gIHNldCBndXR0ZXIodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2d1dHRlciA9IHRvTnVtYmVyKHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF9ndXR0ZXIhOiBudW1iZXI7XG5cbiAgQElucHV0KClcbiAgZ2V0IG56TGF5b3V0KCk6IFNFTGF5b3V0IHtcbiAgICByZXR1cm4gdGhpcy5fbnpMYXlvdXQ7XG4gIH1cbiAgc2V0IG56TGF5b3V0KHZhbHVlOiBTRUxheW91dCkge1xuICAgIHRoaXMuX256TGF5b3V0ID0gdmFsdWU7XG4gICAgaWYgKHZhbHVlID09PSAnaW5saW5lJykge1xuICAgICAgdGhpcy5zaXplID0gJ2NvbXBhY3QnO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIF9uekxheW91dCE6IFNFTGF5b3V0O1xuXG4gIEBJbnB1dCgpIHNpemUhOiAnZGVmYXVsdCcgfCAnY29tcGFjdCc7XG4gIEBJbnB1dCh7IHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZSB9KSBmaXJzdFZpc3VhbCE6IGJvb2xlYW47XG4gIEBJbnB1dCh7IHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZSB9KSBpbmdvcmVEaXJ0eSE6IGJvb2xlYW47XG4gIEBJbnB1dCh7IHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZSB9KSBsaW5lID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIHNldCBlcnJvcnModmFsOiBTRUVycm9yUmVmcmVzaFtdKSB7XG4gICAgdGhpcy5zZXRFcnJvcnModmFsKTtcbiAgfVxuXG4gIGdldCBtYXJnaW4oKTogbnVtYmVyIHtcbiAgICByZXR1cm4gLSgodGhpcy5ndXR0ZXIgYXMgbnVtYmVyKSAvIDIpO1xuICB9XG5cbiAgZ2V0IGVycm9yTm90aWZ5KCk6IE9ic2VydmFibGU8U0VFcnJvclJlZnJlc2g+IHtcbiAgICByZXR1cm4gdGhpcy5lcnJvck5vdGlmeSQucGlwZShmaWx0ZXIodiA9PiB2ICE9IG51bGwpKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZ1NydjogQWxhaW5Db25maWdTZXJ2aWNlKSB7XG4gICAgY29uZmlnU3J2LmF0dGFjaCh0aGlzLCAnc2UnLCB7XG4gICAgICBzaXplOiAnZGVmYXVsdCcsXG4gICAgICBuekxheW91dDogJ2hvcml6b250YWwnLFxuICAgICAgZ3V0dGVyOiAzMixcbiAgICAgIGNvbDogMixcbiAgICAgIGxhYmVsV2lkdGg6IDE1MCxcbiAgICAgIGZpcnN0VmlzdWFsOiBmYWxzZSxcbiAgICAgIGluZ29yZURpcnR5OiBmYWxzZVxuICAgIH0pO1xuICB9XG5cbiAgc2V0RXJyb3JzKGVycm9yczogU0VFcnJvclJlZnJlc2hbXSk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgZXJyb3Igb2YgZXJyb3JzKSB7XG4gICAgICB0aGlzLmVycm9yTm90aWZ5JC5uZXh0KGVycm9yKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==