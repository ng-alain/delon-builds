import { ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, ViewEncapsulation, booleanAttribute, inject, numberAttribute } from '@angular/core';
import { BehaviorSubject, filter } from 'rxjs';
import { NzStringTemplateOutletDirective } from 'ng-zorro-antd/core/outlet';
import * as i0 from "@angular/core";
import * as i1 from "@delon/util/config";
export class SETitleComponent {
    constructor() {
        this.parentComp = inject(SEContainerComponent, { host: true, optional: true });
        this.el = inject(ElementRef).nativeElement;
        this.ren = inject(Renderer2);
        if (this.parentComp == null) {
            throw new Error(`[se-title] must include 'se-container' component`);
        }
    }
    setClass() {
        const { el } = this;
        const gutter = this.parentComp.gutter;
        this.ren.setStyle(el, 'padding-left', `${gutter / 2}px`);
        this.ren.setStyle(el, 'padding-right', `${gutter / 2}px`);
    }
    ngOnInit() {
        this.setClass();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.5", ngImport: i0, type: SETitleComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.5", type: SETitleComponent, isStandalone: true, selector: "se-title, [se-title]", host: { properties: { "class.se__title": "true" } }, exportAs: ["seTitle"], ngImport: i0, template: '<ng-content />', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.5", ngImport: i0, type: SETitleComponent, decorators: [{
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
        this._gutter = value;
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.5", ngImport: i0, type: SEContainerComponent, deps: [{ token: i1.AlainConfigService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.0.5", type: SEContainerComponent, isStandalone: true, selector: "se-container, [se-container]", inputs: { colInCon: ["se-container", "colInCon", (v) => (v == null ? null : numberAttribute(v))], col: ["col", "col", (v) => (v == null ? null : numberAttribute(v))], labelWidth: ["labelWidth", "labelWidth", (v) => (v == null ? null : numberAttribute(v))], noColon: ["noColon", "noColon", booleanAttribute], title: "title", gutter: ["gutter", "gutter", numberAttribute], nzLayout: "nzLayout", size: "size", firstVisual: ["firstVisual", "firstVisual", booleanAttribute], ingoreDirty: ["ingoreDirty", "ingoreDirty", booleanAttribute], line: ["line", "line", booleanAttribute], errors: "errors" }, host: { properties: { "class.ant-row": "true", "class.se__container": "true", "class.se__horizontal": "nzLayout === 'horizontal'", "class.se__vertical": "nzLayout === 'vertical'", "class.se__inline": "nzLayout === 'inline'", "class.se__compact": "size === 'compact'", "style.margin-left.px": "margin", "style.margin-right.px": "margin" } }, exportAs: ["seContainer"], ngImport: i0, template: `
    @if (title) {
      <div se-title>
        <ng-container *nzStringTemplateOutlet="title">{{ title }}</ng-container>
      </div>
    }
    <ng-content />
  `, isInline: true, dependencies: [{ kind: "component", type: SETitleComponent, selector: "se-title, [se-title]", exportAs: ["seTitle"] }, { kind: "directive", type: NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.5", ngImport: i0, type: SEContainerComponent, decorators: [{
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
                args: [{ alias: 'se-container', transform: (v) => (v == null ? null : numberAttribute(v)) }]
            }], col: [{
                type: Input,
                args: [{ transform: (v) => (v == null ? null : numberAttribute(v)) }]
            }], labelWidth: [{
                type: Input,
                args: [{ transform: (v) => (v == null ? null : numberAttribute(v)) }]
            }], noColon: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], title: [{
                type: Input
            }], gutter: [{
                type: Input,
                args: [{ transform: numberAttribute }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2UtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9zZS9zZS1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBRUwsU0FBUyxFQUVULGlCQUFpQixFQUNqQixnQkFBZ0IsRUFDaEIsTUFBTSxFQUNOLGVBQWUsRUFDaEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFJM0QsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7OztBQWlCNUUsTUFBTSxPQUFPLGdCQUFnQjtJQUkzQjtRQUhpQixlQUFVLEdBQUcsTUFBTSxDQUFDLG9CQUFvQixFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUMxRSxPQUFFLEdBQWdCLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxhQUFhLENBQUM7UUFDbkQsUUFBRyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUV2QyxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxFQUFFLENBQUM7WUFDNUIsTUFBTSxJQUFJLEtBQUssQ0FBQyxrREFBa0QsQ0FBQyxDQUFDO1FBQ3RFLENBQUM7SUFDSCxDQUFDO0lBRU8sUUFBUTtRQUNkLE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDcEIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVcsQ0FBQyxNQUFnQixDQUFDO1FBQ2pELElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxjQUFjLEVBQUUsR0FBRyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMs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LENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUVyQixHQUFHO3NCQUFqRixLQUFLO3VCQUFDLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ0UsVUFBVTtzQkFBeEYsS0FBSzt1QkFBQyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNyQyxPQUFPO3NCQUE5QyxLQUFLO3VCQUFDLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFO2dCQUM3QixLQUFLO3NCQUFiLEtBQUs7Z0JBR0YsTUFBTTtzQkFEVCxLQUFLO3VCQUFDLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRTtnQkFVakMsUUFBUTtzQkFEWCxLQUFLO2dCQVlHLElBQUk7c0JBQVosS0FBSztnQkFDa0MsV0FBVztzQkFBbEQsS0FBSzt1QkFBQyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRTtnQkFDRSxXQUFXO3NCQUFsRCxLQUFLO3VCQUFDLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFO2dCQUNFLElBQUk7c0JBQTNDLEtBQUs7dUJBQUMsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUU7Z0JBRWxDLE1BQU07c0JBRFQsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBib29sZWFuQXR0cmlidXRlLFxuICBpbmplY3QsXG4gIG51bWJlckF0dHJpYnV0ZVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgZmlsdGVyIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB0eXBlIHsgUkVQX1RZUEUgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3V0aWwvY29uZmlnJztcbmltcG9ydCB7IE56U3RyaW5nVGVtcGxhdGVPdXRsZXREaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvb3V0bGV0JztcbmltcG9ydCB0eXBlIHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuaW1wb3J0IHsgU0VFcnJvclJlZnJlc2gsIFNFTGF5b3V0IH0gZnJvbSAnLi9zZS50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NlLXRpdGxlLCBbc2UtdGl0bGVdJyxcbiAgZXhwb3J0QXM6ICdzZVRpdGxlJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudCAvPicsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLnNlX190aXRsZV0nOiAndHJ1ZSdcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzdGFuZGFsb25lOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIFNFVGl0bGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIHJlYWRvbmx5IHBhcmVudENvbXAgPSBpbmplY3QoU0VDb250YWluZXJDb21wb25lbnQsIHsgaG9zdDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUgfSk7XG4gIHByaXZhdGUgcmVhZG9ubHkgZWw6IEhUTUxFbGVtZW50ID0gaW5qZWN0KEVsZW1lbnRSZWYpLm5hdGl2ZUVsZW1lbnQ7XG4gIHByaXZhdGUgcmVhZG9ubHkgcmVuID0gaW5qZWN0KFJlbmRlcmVyMik7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGlmICh0aGlzLnBhcmVudENvbXAgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBbc2UtdGl0bGVdIG11c3QgaW5jbHVkZSAnc2UtY29udGFpbmVyJyBjb21wb25lbnRgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldENsYXNzKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgZWwgfSA9IHRoaXM7XG4gICAgY29uc3QgZ3V0dGVyID0gdGhpcy5wYXJlbnRDb21wIS5ndXR0ZXIgYXMgbnVtYmVyO1xuICAgIHRoaXMucmVuLnNldFN0eWxlKGVsLCAncGFkZGluZy1sZWZ0JywgYCR7Z3V0dGVyIC8gMn1weGApO1xuICAgIHRoaXMucmVuLnNldFN0eWxlKGVsLCAncGFkZGluZy1yaWdodCcsIGAke2d1dHRlciAvIDJ9cHhgKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0Q2xhc3MoKTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZS1jb250YWluZXIsIFtzZS1jb250YWluZXJdJyxcbiAgZXhwb3J0QXM6ICdzZUNvbnRhaW5lcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgQGlmICh0aXRsZSkge1xuICAgICAgPGRpdiBzZS10aXRsZT5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cInRpdGxlXCI+e3sgdGl0bGUgfX08L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICAgIH1cbiAgICA8bmctY29udGVudCAvPlxuICBgLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtcm93XSc6IGB0cnVlYCxcbiAgICAnW2NsYXNzLnNlX19jb250YWluZXJdJzogYHRydWVgLFxuICAgICdbY2xhc3Muc2VfX2hvcml6b250YWxdJzogYG56TGF5b3V0ID09PSAnaG9yaXpvbnRhbCdgLFxuICAgICdbY2xhc3Muc2VfX3ZlcnRpY2FsXSc6IGBuekxheW91dCA9PT0gJ3ZlcnRpY2FsJ2AsXG4gICAgJ1tjbGFzcy5zZV9faW5saW5lXSc6IGBuekxheW91dCA9PT0gJ2lubGluZSdgLFxuICAgICdbY2xhc3Muc2VfX2NvbXBhY3RdJzogYHNpemUgPT09ICdjb21wYWN0J2AsXG4gICAgJ1tzdHlsZS5tYXJnaW4tbGVmdC5weF0nOiBgbWFyZ2luYCxcbiAgICAnW3N0eWxlLm1hcmdpbi1yaWdodC5weF0nOiBgbWFyZ2luYFxuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtTRVRpdGxlQ29tcG9uZW50LCBOelN0cmluZ1RlbXBsYXRlT3V0bGV0RGlyZWN0aXZlXVxufSlcbmV4cG9ydCBjbGFzcyBTRUNvbnRhaW5lckNvbXBvbmVudCB7XG4gIHByaXZhdGUgZXJyb3JOb3RpZnkkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxTRUVycm9yUmVmcmVzaD4obnVsbCBhcyBOelNhZmVBbnkpO1xuICBASW5wdXQoeyBhbGlhczogJ3NlLWNvbnRhaW5lcicsIHRyYW5zZm9ybTogKHY6IHVua25vd24pID0+ICh2ID09IG51bGwgPyBudWxsIDogbnVtYmVyQXR0cmlidXRlKHYpKSB9KVxuICBjb2xJbkNvbj86IFJFUF9UWVBFO1xuICBASW5wdXQoeyB0cmFuc2Zvcm06ICh2OiB1bmtub3duKSA9PiAodiA9PSBudWxsID8gbnVsbCA6IG51bWJlckF0dHJpYnV0ZSh2KSkgfSkgY29sITogUkVQX1RZUEU7XG4gIEBJbnB1dCh7IHRyYW5zZm9ybTogKHY6IHVua25vd24pID0+ICh2ID09IG51bGwgPyBudWxsIDogbnVtYmVyQXR0cmlidXRlKHYpKSB9KSBsYWJlbFdpZHRoITogbnVtYmVyO1xuICBASW5wdXQoeyB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGUgfSkgbm9Db2xvbiA9IGZhbHNlO1xuICBASW5wdXQoKSB0aXRsZT86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbDtcblxuICBASW5wdXQoeyB0cmFuc2Zvcm06IG51bWJlckF0dHJpYnV0ZSB9KVxuICBnZXQgZ3V0dGVyKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMubnpMYXlvdXQgPT09ICdob3Jpem9udGFsJyA/IHRoaXMuX2d1dHRlciA6IDA7XG4gIH1cbiAgc2V0IGd1dHRlcih2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fZ3V0dGVyID0gdmFsdWU7XG4gIH1cbiAgcHJpdmF0ZSBfZ3V0dGVyITogbnVtYmVyO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBuekxheW91dCgpOiBTRUxheW91dCB7XG4gICAgcmV0dXJuIHRoaXMuX256TGF5b3V0O1xuICB9XG4gIHNldCBuekxheW91dCh2YWx1ZTogU0VMYXlvdXQpIHtcbiAgICB0aGlzLl9uekxheW91dCA9IHZhbHVlO1xuICAgIGlmICh2YWx1ZSA9PT0gJ2lubGluZScpIHtcbiAgICAgIHRoaXMuc2l6ZSA9ICdjb21wYWN0JztcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBfbnpMYXlvdXQhOiBTRUxheW91dDtcblxuICBASW5wdXQoKSBzaXplITogJ2RlZmF1bHQnIHwgJ2NvbXBhY3QnO1xuICBASW5wdXQoeyB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGUgfSkgZmlyc3RWaXN1YWwhOiBib29sZWFuO1xuICBASW5wdXQoeyB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGUgfSkgaW5nb3JlRGlydHkhOiBib29sZWFuO1xuICBASW5wdXQoeyB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGUgfSkgbGluZSA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBzZXQgZXJyb3JzKHZhbDogU0VFcnJvclJlZnJlc2hbXSkge1xuICAgIHRoaXMuc2V0RXJyb3JzKHZhbCk7XG4gIH1cblxuICBnZXQgbWFyZ2luKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIC0oKHRoaXMuZ3V0dGVyIGFzIG51bWJlcikgLyAyKTtcbiAgfVxuXG4gIGdldCBlcnJvck5vdGlmeSgpOiBPYnNlcnZhYmxlPFNFRXJyb3JSZWZyZXNoPiB7XG4gICAgcmV0dXJuIHRoaXMuZXJyb3JOb3RpZnkkLnBpcGUoZmlsdGVyKHYgPT4gdiAhPSBudWxsKSk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihjb25maWdTcnY6IEFsYWluQ29uZmlnU2VydmljZSkge1xuICAgIGNvbmZpZ1Nydi5hdHRhY2godGhpcywgJ3NlJywge1xuICAgICAgc2l6ZTogJ2RlZmF1bHQnLFxuICAgICAgbnpMYXlvdXQ6ICdob3Jpem9udGFsJyxcbiAgICAgIGd1dHRlcjogMzIsXG4gICAgICBjb2w6IDIsXG4gICAgICBsYWJlbFdpZHRoOiAxNTAsXG4gICAgICBmaXJzdFZpc3VhbDogZmFsc2UsXG4gICAgICBpbmdvcmVEaXJ0eTogZmFsc2VcbiAgICB9KTtcbiAgfVxuXG4gIHNldEVycm9ycyhlcnJvcnM6IFNFRXJyb3JSZWZyZXNoW10pOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IGVycm9yIG9mIGVycm9ycykge1xuICAgICAgdGhpcy5lcnJvck5vdGlmeSQubmV4dChlcnJvcik7XG4gICAgfVxuICB9XG59XG4iXX0=