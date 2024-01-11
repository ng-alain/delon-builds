import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Host, Input, Optional, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, filter } from 'rxjs';
import { InputBoolean, InputNumber, toNumber } from '@delon/util/decorator';
import { NzStringTemplateOutletDirective } from 'ng-zorro-antd/core/outlet';
import * as i0 from "@angular/core";
import * as i1 from "@delon/util/config";
export class SETitleComponent {
    constructor(parent, el, ren) {
        this.parent = parent;
        this.ren = ren;
        if (parent == null) {
            throw new Error(`[se-title] must include 'se-container' component`);
        }
        this.el = el.nativeElement;
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: SETitleComponent, deps: [{ token: SEContainerComponent, host: true, optional: true }, { token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.9", type: SETitleComponent, isStandalone: true, selector: "se-title, [se-title]", host: { properties: { "class.se__title": "true" } }, exportAs: ["seTitle"], ngImport: i0, template: '<ng-content />', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: SETitleComponent, decorators: [{
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
        }], ctorParameters: () => [{ type: SEContainerComponent, decorators: [{
                    type: Host
                }, {
                    type: Optional
                }] }, { type: i0.ElementRef }, { type: i0.Renderer2 }] });
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: SEContainerComponent, deps: [{ token: i1.AlainConfigService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.9", type: SEContainerComponent, isStandalone: true, selector: "se-container, [se-container]", inputs: { colInCon: ["se-container", "colInCon"], col: "col", labelWidth: "labelWidth", noColon: "noColon", title: "title", gutter: "gutter", nzLayout: "nzLayout", size: "size", firstVisual: "firstVisual", ingoreDirty: "ingoreDirty", line: "line", errors: "errors" }, host: { properties: { "class.ant-row": "true", "class.se__container": "true", "class.se__horizontal": "nzLayout === 'horizontal'", "class.se__vertical": "nzLayout === 'vertical'", "class.se__inline": "nzLayout === 'inline'", "class.se__compact": "size === 'compact'", "style.margin-left.px": "margin", "style.margin-right.px": "margin" } }, exportAs: ["seContainer"], ngImport: i0, template: `
    @if (title) {
      <div se-title>
        <ng-container *nzStringTemplateOutlet="title">{{ title }}</ng-container>
      </div>
    }
    <ng-content />
  `, isInline: true, dependencies: [{ kind: "component", type: SETitleComponent, selector: "se-title, [se-title]", exportAs: ["seTitle"] }, { kind: "directive", type: NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
__decorate([
    InputNumber(null)
], SEContainerComponent.prototype, "colInCon", void 0);
__decorate([
    InputNumber(null)
], SEContainerComponent.prototype, "col", void 0);
__decorate([
    InputNumber(null)
], SEContainerComponent.prototype, "labelWidth", void 0);
__decorate([
    InputBoolean()
], SEContainerComponent.prototype, "noColon", void 0);
__decorate([
    InputBoolean()
], SEContainerComponent.prototype, "firstVisual", void 0);
__decorate([
    InputBoolean()
], SEContainerComponent.prototype, "ingoreDirty", void 0);
__decorate([
    InputBoolean()
], SEContainerComponent.prototype, "line", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: SEContainerComponent, decorators: [{
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
                args: ['se-container']
            }], col: [{
                type: Input
            }], labelWidth: [{
                type: Input
            }], noColon: [{
                type: Input
            }], title: [{
                type: Input
            }], gutter: [{
                type: Input
            }], nzLayout: [{
                type: Input
            }], size: [{
                type: Input
            }], firstVisual: [{
                type: Input
            }], ingoreDirty: [{
                type: Input
            }], line: [{
                type: Input
            }], errors: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2UtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9zZS9zZS1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFFVCxJQUFJLEVBQ0osS0FBSyxFQUVMLFFBQVEsRUFHUixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFJM0QsT0FBTyxFQUFnQixZQUFZLEVBQUUsV0FBVyxFQUFlLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZHLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7QUFpQjVFLE1BQU0sT0FBTyxnQkFBZ0I7SUFFM0IsWUFHVSxNQUE0QixFQUNwQyxFQUFjLEVBQ04sR0FBYztRQUZkLFdBQU0sR0FBTixNQUFNLENBQXNCO1FBRTVCLFFBQUcsR0FBSCxHQUFHLENBQVc7UUFFdEIsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1lBQ2xCLE1BQU0sSUFBSSxLQUFLLENBQUMsa0RBQWtELENBQUMsQ0FBQztTQUNyRTtRQUNELElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQztJQUM3QixDQUFDO0lBRU8sUUFBUTtRQUNkLE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDcEIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFnQixDQUFDO1FBQzVDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxjQUFjLEVBQUUsR0FBRyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFF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RFQsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3QsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgZmlsdGVyIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB0eXBlIHsgUkVQX1RZUEUgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3V0aWwvY29uZmlnJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciwgTnVtYmVySW5wdXQsIHRvTnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwvZGVjb3JhdG9yJztcbmltcG9ydCB7IE56U3RyaW5nVGVtcGxhdGVPdXRsZXREaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvb3V0bGV0JztcbmltcG9ydCB0eXBlIHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuaW1wb3J0IHsgU0VFcnJvclJlZnJlc2gsIFNFTGF5b3V0IH0gZnJvbSAnLi9zZS50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NlLXRpdGxlLCBbc2UtdGl0bGVdJyxcbiAgZXhwb3J0QXM6ICdzZVRpdGxlJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudCAvPicsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLnNlX190aXRsZV0nOiAndHJ1ZSdcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzdGFuZGFsb25lOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIFNFVGl0bGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoXG4gICAgQEhvc3QoKVxuICAgIEBPcHRpb25hbCgpXG4gICAgcHJpdmF0ZSBwYXJlbnQ6IFNFQ29udGFpbmVyQ29tcG9uZW50LFxuICAgIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuOiBSZW5kZXJlcjJcbiAgKSB7XG4gICAgaWYgKHBhcmVudCA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFtzZS10aXRsZV0gbXVzdCBpbmNsdWRlICdzZS1jb250YWluZXInIGNvbXBvbmVudGApO1xuICAgIH1cbiAgICB0aGlzLmVsID0gZWwubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIHByaXZhdGUgc2V0Q2xhc3MoKTogdm9pZCB7XG4gICAgY29uc3QgeyBlbCB9ID0gdGhpcztcbiAgICBjb25zdCBndXR0ZXIgPSB0aGlzLnBhcmVudC5ndXR0ZXIgYXMgbnVtYmVyO1xuICAgIHRoaXMucmVuLnNldFN0eWxlKGVsLCAncGFkZGluZy1sZWZ0JywgYCR7Z3V0dGVyIC8gMn1weGApO1xuICAgIHRoaXMucmVuLnNldFN0eWxlKGVsLCAncGFkZGluZy1yaWdodCcsIGAke2d1dHRlciAvIDJ9cHhgKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0Q2xhc3MoKTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZS1jb250YWluZXIsIFtzZS1jb250YWluZXJdJyxcbiAgZXhwb3J0QXM6ICdzZUNvbnRhaW5lcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgQGlmICh0aXRsZSkge1xuICAgICAgPGRpdiBzZS10aXRsZT5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cInRpdGxlXCI+e3sgdGl0bGUgfX08L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICAgIH1cbiAgICA8bmctY29udGVudCAvPlxuICBgLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtcm93XSc6IGB0cnVlYCxcbiAgICAnW2NsYXNzLnNlX19jb250YWluZXJdJzogYHRydWVgLFxuICAgICdbY2xhc3Muc2VfX2hvcml6b250YWxdJzogYG56TGF5b3V0ID09PSAnaG9yaXpvbnRhbCdgLFxuICAgICdbY2xhc3Muc2VfX3ZlcnRpY2FsXSc6IGBuekxheW91dCA9PT0gJ3ZlcnRpY2FsJ2AsXG4gICAgJ1tjbGFzcy5zZV9faW5saW5lXSc6IGBuekxheW91dCA9PT0gJ2lubGluZSdgLFxuICAgICdbY2xhc3Muc2VfX2NvbXBhY3RdJzogYHNpemUgPT09ICdjb21wYWN0J2AsXG4gICAgJ1tzdHlsZS5tYXJnaW4tbGVmdC5weF0nOiBgbWFyZ2luYCxcbiAgICAnW3N0eWxlLm1hcmdpbi1yaWdodC5weF0nOiBgbWFyZ2luYFxuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtTRVRpdGxlQ29tcG9uZW50LCBOelN0cmluZ1RlbXBsYXRlT3V0bGV0RGlyZWN0aXZlXVxufSlcbmV4cG9ydCBjbGFzcyBTRUNvbnRhaW5lckNvbXBvbmVudCB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9ndXR0ZXI6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfY29sOiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2NvbEluQ29uOiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2xhYmVsV2lkdGg6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZmlyc3RWaXN1YWw6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2luZ29yZURpcnR5OiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9saW5lOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9ub0NvbG9uOiBCb29sZWFuSW5wdXQ7XG5cbiAgcHJpdmF0ZSBlcnJvck5vdGlmeSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFNFRXJyb3JSZWZyZXNoPihudWxsIGFzIE56U2FmZUFueSk7XG4gIEBJbnB1dCgnc2UtY29udGFpbmVyJykgQElucHV0TnVtYmVyKG51bGwpIGNvbEluQ29uPzogUkVQX1RZUEU7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcihudWxsKSBjb2whOiBSRVBfVFlQRTtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKG51bGwpIGxhYmVsV2lkdGghOiBudW1iZXI7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBub0NvbG9uID0gZmFsc2U7XG4gIEBJbnB1dCgpIHRpdGxlPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBndXR0ZXIoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5uekxheW91dCA9PT0gJ2hvcml6b250YWwnID8gdGhpcy5fZ3V0dGVyIDogMDtcbiAgfVxuICBzZXQgZ3V0dGVyKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9ndXR0ZXIgPSB0b051bWJlcih2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfZ3V0dGVyITogbnVtYmVyO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBuekxheW91dCgpOiBTRUxheW91dCB7XG4gICAgcmV0dXJuIHRoaXMuX256TGF5b3V0O1xuICB9XG4gIHNldCBuekxheW91dCh2YWx1ZTogU0VMYXlvdXQpIHtcbiAgICB0aGlzLl9uekxheW91dCA9IHZhbHVlO1xuICAgIGlmICh2YWx1ZSA9PT0gJ2lubGluZScpIHtcbiAgICAgIHRoaXMuc2l6ZSA9ICdjb21wYWN0JztcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBfbnpMYXlvdXQhOiBTRUxheW91dDtcblxuICBASW5wdXQoKSBzaXplITogJ2RlZmF1bHQnIHwgJ2NvbXBhY3QnO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZmlyc3RWaXN1YWwhOiBib29sZWFuO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgaW5nb3JlRGlydHkhOiBib29sZWFuO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbGluZSA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBzZXQgZXJyb3JzKHZhbDogU0VFcnJvclJlZnJlc2hbXSkge1xuICAgIHRoaXMuc2V0RXJyb3JzKHZhbCk7XG4gIH1cblxuICBnZXQgbWFyZ2luKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIC0oKHRoaXMuZ3V0dGVyIGFzIG51bWJlcikgLyAyKTtcbiAgfVxuXG4gIGdldCBlcnJvck5vdGlmeSgpOiBPYnNlcnZhYmxlPFNFRXJyb3JSZWZyZXNoPiB7XG4gICAgcmV0dXJuIHRoaXMuZXJyb3JOb3RpZnkkLnBpcGUoZmlsdGVyKHYgPT4gdiAhPSBudWxsKSk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihjb25maWdTcnY6IEFsYWluQ29uZmlnU2VydmljZSkge1xuICAgIGNvbmZpZ1Nydi5hdHRhY2godGhpcywgJ3NlJywge1xuICAgICAgc2l6ZTogJ2RlZmF1bHQnLFxuICAgICAgbnpMYXlvdXQ6ICdob3Jpem9udGFsJyxcbiAgICAgIGd1dHRlcjogMzIsXG4gICAgICBjb2w6IDIsXG4gICAgICBsYWJlbFdpZHRoOiAxNTAsXG4gICAgICBmaXJzdFZpc3VhbDogZmFsc2UsXG4gICAgICBpbmdvcmVEaXJ0eTogZmFsc2VcbiAgICB9KTtcbiAgfVxuXG4gIHNldEVycm9ycyhlcnJvcnM6IFNFRXJyb3JSZWZyZXNoW10pOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IGVycm9yIG9mIGVycm9ycykge1xuICAgICAgdGhpcy5lcnJvck5vdGlmeSQubmV4dChlcnJvcik7XG4gICAgfVxuICB9XG59XG4iXX0=