import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Host, Input, Optional, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, filter } from 'rxjs';
import { InputBoolean, InputNumber, toNumber } from '@delon/util/decorator';
import * as i0 from "@angular/core";
import * as i1 from "@delon/util/config";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/core/outlet";
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.7", ngImport: i0, type: SEContainerComponent, deps: [{ token: i1.AlainConfigService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.7", type: SEContainerComponent, selector: "se-container, [se-container]", inputs: { colInCon: ["se-container", "colInCon"], col: "col", labelWidth: "labelWidth", noColon: "noColon", title: "title", gutter: "gutter", nzLayout: "nzLayout", size: "size", firstVisual: "firstVisual", ingoreDirty: "ingoreDirty", line: "line", errors: "errors" }, host: { properties: { "class.ant-row": "true", "class.se__container": "true", "class.se__horizontal": "nzLayout === 'horizontal'", "class.se__vertical": "nzLayout === 'vertical'", "class.se__inline": "nzLayout === 'inline'", "class.se__compact": "size === 'compact'", "style.margin-left.px": "margin", "style.margin-right.px": "margin" } }, exportAs: ["seContainer"], ngImport: i0, template: `
    <div se-title *ngIf="title">
      <ng-container *nzStringTemplateOutlet="title">{{ title }}</ng-container>
    </div>
    <ng-content></ng-content>
  `, isInline: true, dependencies: [{ kind: "directive", type: i0.forwardRef(function () { return i2.NgIf; }), selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i0.forwardRef(function () { return i3.NzStringTemplateOutletDirective; }), selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { kind: "component", type: i0.forwardRef(function () { return SETitleComponent; }), selector: "se-title, [se-title]", exportAs: ["seTitle"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.7", ngImport: i0, type: SEContainerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'se-container, [se-container]',
                    exportAs: 'seContainer',
                    template: `
    <div se-title *ngIf="title">
      <ng-container *nzStringTemplateOutlet="title">{{ title }}</ng-container>
    </div>
    <ng-content></ng-content>
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
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: function () { return [{ type: i1.AlainConfigService }]; }, propDecorators: { colInCon: [{
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.7", ngImport: i0, type: SETitleComponent, deps: [{ token: SEContainerComponent, host: true, optional: true }, { token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.7", type: SETitleComponent, selector: "se-title, [se-title]", host: { properties: { "class.se__title": "true" } }, exportAs: ["seTitle"], ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.7", ngImport: i0, type: SETitleComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'se-title, [se-title]',
                    exportAs: 'seTitle',
                    template: '<ng-content></ng-content>',
                    host: {
                        '[class.se__title]': 'true'
                    },
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: function () { return [{ type: SEContainerComponent, decorators: [{
                    type: Host
                }, {
                    type: Optional
                }] }, { type: i0.ElementRef }, { type: i0.Renderer2 }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2UtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9zZS9zZS1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFFVCxJQUFJLEVBQ0osS0FBSyxFQUVMLFFBQVEsRUFHUixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFJM0QsT0FBTyxFQUFnQixZQUFZLEVBQUUsV0FBVyxFQUFlLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7OztBQTRCdkcsTUFBTSxPQUFPLG9CQUFvQjtJQWlCL0IsSUFDSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsUUFBUSxLQUFLLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFDRCxJQUFJLE1BQU0sQ0FBQyxLQUFhO1FBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFHRCxJQUNJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUNELElBQUksUUFBUSxDQUFDLEtBQWU7UUFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQztJQU9ELElBQ0ksTUFBTSxDQUFDLEdBQXFCO1FBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVELElBQUksTUFBTTtRQUNS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TUFBTSxJQUFJLEtBQUssQ0FBQyxrREFBa0QsQ0FBQyxDQUFDO1NBQ3JFO1FBQ0QsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDO0lBQzdCLENBQUM7SUFFTyxRQUFRO1FBQ2QsTUFBTSxFQUFFLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQztRQUNwQixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQWdCLENBQUM7UUFDNUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLGNBQWMsRUFBRSxHQUFHLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxlQUFlLEVBQUUsR0FBRyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDOzhHQXhCVSxnQkFBZ0I7a0dBQWhCLGdCQUFnQix3SUFSakIsMkJBQTJCOzsyRkFRMUIsZ0JBQWdCO2tCQVg1QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLFFBQVEsRUFBRSxTQUFTO29CQUNuQixRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxJQUFJLEVBQUU7d0JBQ0osbUJBQW1CLEVBQUUsTUFBTTtxQkFDNUI7b0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUN0Qzs7MEJBSUksSUFBSTs7MEJBQ0osUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3QsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgZmlsdGVyIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB0eXBlIHsgUkVQX1RZUEUgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3V0aWwvY29uZmlnJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciwgTnVtYmVySW5wdXQsIHRvTnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwvZGVjb3JhdG9yJztcbmltcG9ydCB0eXBlIHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuaW1wb3J0IHsgU0VFcnJvclJlZnJlc2gsIFNFTGF5b3V0IH0gZnJvbSAnLi9zZS50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NlLWNvbnRhaW5lciwgW3NlLWNvbnRhaW5lcl0nLFxuICBleHBvcnRBczogJ3NlQ29udGFpbmVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IHNlLXRpdGxlICpuZ0lmPVwidGl0bGVcIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJ0aXRsZVwiPnt7IHRpdGxlIH19PC9uZy1jb250YWluZXI+XG4gICAgPC9kaXY+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICBgLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtcm93XSc6IGB0cnVlYCxcbiAgICAnW2NsYXNzLnNlX19jb250YWluZXJdJzogYHRydWVgLFxuICAgICdbY2xhc3Muc2VfX2hvcml6b250YWxdJzogYG56TGF5b3V0ID09PSAnaG9yaXpvbnRhbCdgLFxuICAgICdbY2xhc3Muc2VfX3ZlcnRpY2FsXSc6IGBuekxheW91dCA9PT0gJ3ZlcnRpY2FsJ2AsXG4gICAgJ1tjbGFzcy5zZV9faW5saW5lXSc6IGBuekxheW91dCA9PT0gJ2lubGluZSdgLFxuICAgICdbY2xhc3Muc2VfX2NvbXBhY3RdJzogYHNpemUgPT09ICdjb21wYWN0J2AsXG4gICAgJ1tzdHlsZS5tYXJnaW4tbGVmdC5weF0nOiBgbWFyZ2luYCxcbiAgICAnW3N0eWxlLm1hcmdpbi1yaWdodC5weF0nOiBgbWFyZ2luYFxuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU0VDb250YWluZXJDb21wb25lbnQge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZ3V0dGVyOiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2NvbDogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9jb2xJbkNvbjogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9sYWJlbFdpZHRoOiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2ZpcnN0VmlzdWFsOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9pbmdvcmVEaXJ0eTogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbGluZTogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbm9Db2xvbjogQm9vbGVhbklucHV0O1xuXG4gIHByaXZhdGUgZXJyb3JOb3RpZnkkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxTRUVycm9yUmVmcmVzaD4obnVsbCBhcyBOelNhZmVBbnkpO1xuICBASW5wdXQoJ3NlLWNvbnRhaW5lcicpIEBJbnB1dE51bWJlcihudWxsKSBjb2xJbkNvbj86IFJFUF9UWVBFO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIobnVsbCkgY29sITogUkVQX1RZUEU7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcihudWxsKSBsYWJlbFdpZHRoITogbnVtYmVyO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbm9Db2xvbiA9IGZhbHNlO1xuICBASW5wdXQoKSB0aXRsZT86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbDtcblxuICBASW5wdXQoKVxuICBnZXQgZ3V0dGVyKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMubnpMYXlvdXQgPT09ICdob3Jpem9udGFsJyA/IHRoaXMuX2d1dHRlciA6IDA7XG4gIH1cbiAgc2V0IGd1dHRlcih2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fZ3V0dGVyID0gdG9OdW1iZXIodmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX2d1dHRlciE6IG51bWJlcjtcblxuICBASW5wdXQoKVxuICBnZXQgbnpMYXlvdXQoKTogU0VMYXlvdXQge1xuICAgIHJldHVybiB0aGlzLl9uekxheW91dDtcbiAgfVxuICBzZXQgbnpMYXlvdXQodmFsdWU6IFNFTGF5b3V0KSB7XG4gICAgdGhpcy5fbnpMYXlvdXQgPSB2YWx1ZTtcbiAgICBpZiAodmFsdWUgPT09ICdpbmxpbmUnKSB7XG4gICAgICB0aGlzLnNpemUgPSAnY29tcGFjdCc7XG4gICAgfVxuICB9XG4gIHByaXZhdGUgX256TGF5b3V0ITogU0VMYXlvdXQ7XG5cbiAgQElucHV0KCkgc2l6ZSE6ICdkZWZhdWx0JyB8ICdjb21wYWN0JztcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGZpcnN0VmlzdWFsITogYm9vbGVhbjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGluZ29yZURpcnR5ITogYm9vbGVhbjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGxpbmUgPSBmYWxzZTtcbiAgQElucHV0KClcbiAgc2V0IGVycm9ycyh2YWw6IFNFRXJyb3JSZWZyZXNoW10pIHtcbiAgICB0aGlzLnNldEVycm9ycyh2YWwpO1xuICB9XG5cbiAgZ2V0IG1hcmdpbigpOiBudW1iZXIge1xuICAgIHJldHVybiAtKCh0aGlzLmd1dHRlciBhcyBudW1iZXIpIC8gMik7XG4gIH1cblxuICBnZXQgZXJyb3JOb3RpZnkoKTogT2JzZXJ2YWJsZTxTRUVycm9yUmVmcmVzaD4ge1xuICAgIHJldHVybiB0aGlzLmVycm9yTm90aWZ5JC5waXBlKGZpbHRlcih2ID0+IHYgIT0gbnVsbCkpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoY29uZmlnU3J2OiBBbGFpbkNvbmZpZ1NlcnZpY2UpIHtcbiAgICBjb25maWdTcnYuYXR0YWNoKHRoaXMsICdzZScsIHtcbiAgICAgIHNpemU6ICdkZWZhdWx0JyxcbiAgICAgIG56TGF5b3V0OiAnaG9yaXpvbnRhbCcsXG4gICAgICBndXR0ZXI6IDMyLFxuICAgICAgY29sOiAyLFxuICAgICAgbGFiZWxXaWR0aDogMTUwLFxuICAgICAgZmlyc3RWaXN1YWw6IGZhbHNlLFxuICAgICAgaW5nb3JlRGlydHk6IGZhbHNlXG4gICAgfSk7XG4gIH1cblxuICBzZXRFcnJvcnMoZXJyb3JzOiBTRUVycm9yUmVmcmVzaFtdKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBlcnJvciBvZiBlcnJvcnMpIHtcbiAgICAgIHRoaXMuZXJyb3JOb3RpZnkkLm5leHQoZXJyb3IpO1xuICAgIH1cbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZS10aXRsZSwgW3NlLXRpdGxlXScsXG4gIGV4cG9ydEFzOiAnc2VUaXRsZScsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLnNlX190aXRsZV0nOiAndHJ1ZSdcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFNFVGl0bGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoXG4gICAgQEhvc3QoKVxuICAgIEBPcHRpb25hbCgpXG4gICAgcHJpdmF0ZSBwYXJlbnQ6IFNFQ29udGFpbmVyQ29tcG9uZW50LFxuICAgIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuOiBSZW5kZXJlcjJcbiAgKSB7XG4gICAgaWYgKHBhcmVudCA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFtzZS10aXRsZV0gbXVzdCBpbmNsdWRlICdzZS1jb250YWluZXInIGNvbXBvbmVudGApO1xuICAgIH1cbiAgICB0aGlzLmVsID0gZWwubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIHByaXZhdGUgc2V0Q2xhc3MoKTogdm9pZCB7XG4gICAgY29uc3QgeyBlbCB9ID0gdGhpcztcbiAgICBjb25zdCBndXR0ZXIgPSB0aGlzLnBhcmVudC5ndXR0ZXIgYXMgbnVtYmVyO1xuICAgIHRoaXMucmVuLnNldFN0eWxlKGVsLCAncGFkZGluZy1sZWZ0JywgYCR7Z3V0dGVyIC8gMn1weGApO1xuICAgIHRoaXMucmVuLnNldFN0eWxlKGVsLCAncGFkZGluZy1yaWdodCcsIGAke2d1dHRlciAvIDJ9cHhgKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0Q2xhc3MoKTtcbiAgfVxufVxuIl19