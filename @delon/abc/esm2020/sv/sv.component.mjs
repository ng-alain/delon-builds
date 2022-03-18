import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Host, Input, Optional, ViewChild, ViewEncapsulation } from '@angular/core';
import { isEmpty } from '@delon/util/browser';
import { InputBoolean, InputNumber } from '@delon/util/decorator';
import * as i0 from "@angular/core";
import * as i1 from "./sv-container.component";
import * as i2 from "@delon/theme";
import * as i3 from "ng-zorro-antd/core/outlet";
import * as i4 from "@angular/common";
import * as i5 from "ng-zorro-antd/tooltip";
import * as i6 from "ng-zorro-antd/icon";
import * as i7 from "@angular/cdk/observers";
const prefixCls = `sv`;
export class SVComponent {
    constructor(el, parent, rep, ren) {
        this.parent = parent;
        this.rep = rep;
        this.ren = ren;
        this.clsMap = [];
        this._noColon = false;
        if (parent == null) {
            throw new Error(`[sv] must include 'sv-container' component`);
        }
        this.el = el.nativeElement;
    }
    // #endregion
    get paddingValue() {
        return this.parent && this.parent.gutter / 2;
    }
    get labelWidth() {
        const { labelWidth, layout } = this.parent;
        return layout === 'horizontal' ? labelWidth : null;
    }
    setClass() {
        const { el, ren, col, clsMap, type, rep, noColon, parent } = this;
        this._noColon = noColon != null ? noColon : parent.noColon;
        clsMap.forEach(cls => ren.removeClass(el, cls));
        clsMap.length = 0;
        clsMap.push(...rep.genCls(col != null ? col : this.parent.col));
        clsMap.push(`${prefixCls}__item`);
        if (this.parent.labelWidth)
            clsMap.push(`${prefixCls}__item-fixed`);
        if (type)
            clsMap.push(`${prefixCls}__type-${type}`);
        clsMap.forEach(cls => ren.addClass(el, cls));
    }
    ngAfterViewInit() {
        this.setClass();
        this.checkContent();
    }
    ngOnChanges() {
        this.setClass();
    }
    checkContent() {
        const { conEl } = this;
        const def = this.default;
        if (!(def != null ? def : this.parent.default)) {
            return;
        }
        const el = conEl.nativeElement;
        const cls = `sv__default`;
        if (el.classList.contains(cls)) {
            el.classList.remove(cls);
        }
        if (isEmpty(el)) {
            el.classList.add(cls);
        }
    }
}
SVComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: SVComponent, deps: [{ token: i0.ElementRef }, { token: i1.SVContainerComponent, host: true, optional: true }, { token: i2.ResponsiveService }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
SVComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: SVComponent, selector: "sv, [sv]", inputs: { optional: "optional", optionalHelp: "optionalHelp", optionalHelpColor: "optionalHelpColor", label: "label", unit: "unit", col: "col", default: "default", type: "type", noColon: "noColon" }, host: { properties: { "style.padding-left.px": "paddingValue", "style.padding-right.px": "paddingValue" } }, viewQueries: [{ propertyName: "conEl", first: true, predicate: ["conEl"], descendants: true }], exportAs: ["sv"], usesOnChanges: true, ngImport: i0, template: "<div\n  class=\"sv__label\"\n  [class.sv__label-empty]=\"!label\"\n  [class.sv__label-width]=\"labelWidth !== null && labelWidth !== undefined\"\n  [class.sv__no-colon]=\"_noColon\"\n  [style.width.px]=\"labelWidth\"\n>\n  <span class=\"sv__label-text\">\n    <ng-container *nzStringTemplateOutlet=\"label\">{{ label }}</ng-container>\n  </span>\n  <span *ngIf=\"optional || optionalHelp\" class=\"sv__label-optional\" [class.sv__label-optional-no-text]=\"!optional\">\n    <ng-container *nzStringTemplateOutlet=\"optional\">{{ optional }}</ng-container>\n    <i\n      *ngIf=\"optionalHelp\"\n      nz-tooltip\n      [nzTooltipTitle]=\"optionalHelp\"\n      [nzTooltipColor]=\"optionalHelpColor\"\n      nz-icon\n      nzType=\"question-circle\"\n    ></i>\n  </span>\n</div>\n<div class=\"sv__detail\">\n  <span (cdkObserveContent)=\"checkContent()\" #conEl>\n    <ng-content></ng-content>\n  </span>\n  <ng-container *ngIf=\"!!unit\">\n    <span class=\"sv__unit\" *nzStringTemplateOutlet=\"unit\">{{ unit }}</span>\n  </ng-container>\n</div>\n", directives: [{ type: i3.NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i5.NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }, { type: i6.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { type: i7.CdkObserveContent, selector: "[cdkObserveContent]", inputs: ["cdkObserveContentDisabled", "debounce"], outputs: ["cdkObserveContent"], exportAs: ["cdkObserveContent"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    InputNumber(null)
], SVComponent.prototype, "col", void 0);
__decorate([
    InputBoolean(null)
], SVComponent.prototype, "default", void 0);
__decorate([
    InputBoolean(null)
], SVComponent.prototype, "noColon", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: SVComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sv, [sv]', exportAs: 'sv', host: {
                        '[style.padding-left.px]': 'paddingValue',
                        '[style.padding-right.px]': 'paddingValue'
                    }, preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div\n  class=\"sv__label\"\n  [class.sv__label-empty]=\"!label\"\n  [class.sv__label-width]=\"labelWidth !== null && labelWidth !== undefined\"\n  [class.sv__no-colon]=\"_noColon\"\n  [style.width.px]=\"labelWidth\"\n>\n  <span class=\"sv__label-text\">\n    <ng-container *nzStringTemplateOutlet=\"label\">{{ label }}</ng-container>\n  </span>\n  <span *ngIf=\"optional || optionalHelp\" class=\"sv__label-optional\" [class.sv__label-optional-no-text]=\"!optional\">\n    <ng-container *nzStringTemplateOutlet=\"optional\">{{ optional }}</ng-container>\n    <i\n      *ngIf=\"optionalHelp\"\n      nz-tooltip\n      [nzTooltipTitle]=\"optionalHelp\"\n      [nzTooltipColor]=\"optionalHelpColor\"\n      nz-icon\n      nzType=\"question-circle\"\n    ></i>\n  </span>\n</div>\n<div class=\"sv__detail\">\n  <span (cdkObserveContent)=\"checkContent()\" #conEl>\n    <ng-content></ng-content>\n  </span>\n  <ng-container *ngIf=\"!!unit\">\n    <span class=\"sv__unit\" *nzStringTemplateOutlet=\"unit\">{{ unit }}</span>\n  </ng-container>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.SVContainerComponent, decorators: [{
                    type: Host
                }, {
                    type: Optional
                }] }, { type: i2.ResponsiveService }, { type: i0.Renderer2 }]; }, propDecorators: { conEl: [{
                type: ViewChild,
                args: ['conEl', { static: false }]
            }], optional: [{
                type: Input
            }], optionalHelp: [{
                type: Input
            }], optionalHelpColor: [{
                type: Input
            }], label: [{
                type: Input
            }], unit: [{
                type: Input
            }], col: [{
                type: Input
            }], default: [{
                type: Input
            }], type: [{
                type: Input
            }], noColon: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3YuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3N2L3N2LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9zdi9zdi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixTQUFTLEVBRVQsSUFBSSxFQUNKLEtBQUssRUFFTCxRQUFRLEVBR1IsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUd2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUMsT0FBTyxFQUFnQixZQUFZLEVBQUUsV0FBVyxFQUFlLE1BQU0sdUJBQXVCLENBQUM7Ozs7Ozs7OztBQUk3RixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUM7QUFjdkIsTUFBTSxPQUFPLFdBQVc7SUFrQ3RCLFlBQ0UsRUFBYyxFQUNhLE1BQTRCLEVBQy9DLEdBQXNCLEVBQ3RCLEdBQWM7UUFGSyxXQUFNLEdBQU4sTUFBTSxDQUFzQjtRQUMvQyxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN0QixRQUFHLEdBQUgsR0FBRyxDQUFXO1FBOUJoQixXQUFNLEdBQWEsRUFBRSxDQUFDO1FBQzlCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUErQmYsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1lBQ2xCLE1BQU0sSUFBSSxLQUFLLENBQUMsNENBQTRDLENBQUMsQ0FBQztTQUMvRDtRQUNELElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQztJQUM3QixDQUFDO0lBckJELGFBQWE7SUFFYixJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxJQUFJLFVBQVU7UUFDWixNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDM0MsT0FBTyxNQUFNLEtBQUssWUFBWSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNyRCxDQUFDO0lBY08sUUFBUTtRQUNkLE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ2xFLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQzNELE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2hELE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2hFLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxTQUFTLFFBQVEsQ0FBQyxDQUFDO1FBQ2xDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLFNBQVMsY0FBYyxDQUFDLENBQUM7UUFDcEUsSUFBSSxJQUFJO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLFNBQVMsVUFBVSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3BELE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUQsWUFBWTtRQUNWLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDdkIsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN6QixJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDOUMsT0FBTztTQUNSO1FBQ0QsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDLGFBQTRCLENBQUM7UUFDOUMsTUFBTSxHQUFHLEdBQUcsYUFBYSxDQUFDO1FBQzFCLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDOUIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDMUI7UUFDRCxJQUFJLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUNmLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQzs7d0dBakZVLFdBQVc7NEZBQVgsV0FBVyw0ZUNuQ3hCLHloQ0E4QkE7QUR1QjhCO0lBQWxCLFdBQVcsQ0FBQyxJQUFJLENBQUM7d0NBQXFCO0FBQ25CO0lBQW5CLFlBQVksQ0FBQyxJQUFJLENBQUM7NENBQTBCO0FBRXpCO0lBQW5CLFlBQVksQ0FBQyxJQUFJLENBQUM7NENBQTBCOzJGQXJCM0MsV0FBVztrQkFadkIsU0FBUzsrQkFDRSxVQUFVLFlBQ1YsSUFBSSxRQUVSO3dCQUNKLHlCQUF5QixFQUFFLGNBQWM7d0JBQ3pDLDBCQUEwQixFQUFFLGNBQWM7cUJBQzNDLHVCQUNvQixLQUFLLG1CQUNULHVCQUF1QixDQUFDLE1BQU0saUJBQ2hDLGlCQUFpQixDQUFDLElBQUk7OzBCQXNDbEMsSUFBSTs7MEJBQUksUUFBUTtvR0E5QlgsS0FBSztzQkFEWixTQUFTO3VCQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7Z0JBUTVCLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csWUFBWTtzQkFBcEIsS0FBSztnQkFDRyxpQkFBaUI7c0JBQXpCLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDc0IsR0FBRztzQkFBOUIsS0FBSztnQkFDdUIsT0FBTztzQkFBbkMsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ3VCLE9BQU87c0JBQW5DLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBIb3N0LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPcHRpb25hbCxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUmVzcG9uc2l2ZVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJ0BkZWxvbi91dGlsL2Jyb3dzZXInO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyLCBOdW1iZXJJbnB1dCB9IGZyb20gJ0BkZWxvbi91dGlsL2RlY29yYXRvcic7XG5cbmltcG9ydCB7IFNWQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9zdi1jb250YWluZXIuY29tcG9uZW50JztcblxuY29uc3QgcHJlZml4Q2xzID0gYHN2YDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3YsIFtzdl0nLFxuICBleHBvcnRBczogJ3N2JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N2LmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgICdbc3R5bGUucGFkZGluZy1sZWZ0LnB4XSc6ICdwYWRkaW5nVmFsdWUnLFxuICAgICdbc3R5bGUucGFkZGluZy1yaWdodC5weF0nOiAncGFkZGluZ1ZhbHVlJ1xuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU1ZDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfY29sOiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2RlZmF1bHQ6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX25vQ29sb246IEJvb2xlYW5JbnB1dDtcblxuICBAVmlld0NoaWxkKCdjb25FbCcsIHsgc3RhdGljOiBmYWxzZSB9KVxuICBwcml2YXRlIGNvbkVsITogRWxlbWVudFJlZjtcbiAgcHJpdmF0ZSBlbDogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgY2xzTWFwOiBzdHJpbmdbXSA9IFtdO1xuICBfbm9Db2xvbiA9IGZhbHNlO1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgQElucHV0KCkgb3B0aW9uYWw/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGw7XG4gIEBJbnB1dCgpIG9wdGlvbmFsSGVscD86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbDtcbiAgQElucHV0KCkgb3B0aW9uYWxIZWxwQ29sb3I/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxhYmVsPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsO1xuICBASW5wdXQoKSB1bml0Pzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIobnVsbCkgY29sPzogbnVtYmVyIHwgbnVsbDtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbihudWxsKSBkZWZhdWx0PzogYm9vbGVhbiB8IG51bGw7XG4gIEBJbnB1dCgpIHR5cGU/OiAncHJpbWFyeScgfCAnc3VjY2VzcycgfCAnZGFuZ2VyJyB8ICd3YXJuaW5nJztcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbihudWxsKSBub0NvbG9uPzogYm9vbGVhbiB8IG51bGw7XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGdldCBwYWRkaW5nVmFsdWUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuZ3V0dGVyIC8gMjtcbiAgfVxuXG4gIGdldCBsYWJlbFdpZHRoKCk6IG51bWJlciB8IG51bGwgfCB1bmRlZmluZWQge1xuICAgIGNvbnN0IHsgbGFiZWxXaWR0aCwgbGF5b3V0IH0gPSB0aGlzLnBhcmVudDtcbiAgICByZXR1cm4gbGF5b3V0ID09PSAnaG9yaXpvbnRhbCcgPyBsYWJlbFdpZHRoIDogbnVsbDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGVsOiBFbGVtZW50UmVmLFxuICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIHBhcmVudDogU1ZDb250YWluZXJDb21wb25lbnQsXG4gICAgcHJpdmF0ZSByZXA6IFJlc3BvbnNpdmVTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVuOiBSZW5kZXJlcjJcbiAgKSB7XG4gICAgaWYgKHBhcmVudCA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFtzdl0gbXVzdCBpbmNsdWRlICdzdi1jb250YWluZXInIGNvbXBvbmVudGApO1xuICAgIH1cbiAgICB0aGlzLmVsID0gZWwubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIHByaXZhdGUgc2V0Q2xhc3MoKTogdm9pZCB7XG4gICAgY29uc3QgeyBlbCwgcmVuLCBjb2wsIGNsc01hcCwgdHlwZSwgcmVwLCBub0NvbG9uLCBwYXJlbnQgfSA9IHRoaXM7XG4gICAgdGhpcy5fbm9Db2xvbiA9IG5vQ29sb24gIT0gbnVsbCA/IG5vQ29sb24gOiBwYXJlbnQubm9Db2xvbjtcbiAgICBjbHNNYXAuZm9yRWFjaChjbHMgPT4gcmVuLnJlbW92ZUNsYXNzKGVsLCBjbHMpKTtcbiAgICBjbHNNYXAubGVuZ3RoID0gMDtcbiAgICBjbHNNYXAucHVzaCguLi5yZXAuZ2VuQ2xzKGNvbCAhPSBudWxsID8gY29sIDogdGhpcy5wYXJlbnQuY29sKSk7XG4gICAgY2xzTWFwLnB1c2goYCR7cHJlZml4Q2xzfV9faXRlbWApO1xuICAgIGlmICh0aGlzLnBhcmVudC5sYWJlbFdpZHRoKSBjbHNNYXAucHVzaChgJHtwcmVmaXhDbHN9X19pdGVtLWZpeGVkYCk7XG4gICAgaWYgKHR5cGUpIGNsc01hcC5wdXNoKGAke3ByZWZpeENsc31fX3R5cGUtJHt0eXBlfWApO1xuICAgIGNsc01hcC5mb3JFYWNoKGNscyA9PiByZW4uYWRkQ2xhc3MoZWwsIGNscykpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0Q2xhc3MoKTtcbiAgICB0aGlzLmNoZWNrQ29udGVudCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRDbGFzcygpO1xuICB9XG5cbiAgY2hlY2tDb250ZW50KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgY29uRWwgfSA9IHRoaXM7XG4gICAgY29uc3QgZGVmID0gdGhpcy5kZWZhdWx0O1xuICAgIGlmICghKGRlZiAhPSBudWxsID8gZGVmIDogdGhpcy5wYXJlbnQuZGVmYXVsdCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZWwgPSBjb25FbC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IGNscyA9IGBzdl9fZGVmYXVsdGA7XG4gICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucyhjbHMpKSB7XG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKGNscyk7XG4gICAgfVxuICAgIGlmIChpc0VtcHR5KGVsKSkge1xuICAgICAgZWwuY2xhc3NMaXN0LmFkZChjbHMpO1xuICAgIH1cbiAgfVxufVxuIiwiPGRpdlxuICBjbGFzcz1cInN2X19sYWJlbFwiXG4gIFtjbGFzcy5zdl9fbGFiZWwtZW1wdHldPVwiIWxhYmVsXCJcbiAgW2NsYXNzLnN2X19sYWJlbC13aWR0aF09XCJsYWJlbFdpZHRoICE9PSBudWxsICYmIGxhYmVsV2lkdGggIT09IHVuZGVmaW5lZFwiXG4gIFtjbGFzcy5zdl9fbm8tY29sb25dPVwiX25vQ29sb25cIlxuICBbc3R5bGUud2lkdGgucHhdPVwibGFiZWxXaWR0aFwiXG4+XG4gIDxzcGFuIGNsYXNzPVwic3ZfX2xhYmVsLXRleHRcIj5cbiAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwibGFiZWxcIj57eyBsYWJlbCB9fTwvbmctY29udGFpbmVyPlxuICA8L3NwYW4+XG4gIDxzcGFuICpuZ0lmPVwib3B0aW9uYWwgfHwgb3B0aW9uYWxIZWxwXCIgY2xhc3M9XCJzdl9fbGFiZWwtb3B0aW9uYWxcIiBbY2xhc3Muc3ZfX2xhYmVsLW9wdGlvbmFsLW5vLXRleHRdPVwiIW9wdGlvbmFsXCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cIm9wdGlvbmFsXCI+e3sgb3B0aW9uYWwgfX08L25nLWNvbnRhaW5lcj5cbiAgICA8aVxuICAgICAgKm5nSWY9XCJvcHRpb25hbEhlbHBcIlxuICAgICAgbnotdG9vbHRpcFxuICAgICAgW256VG9vbHRpcFRpdGxlXT1cIm9wdGlvbmFsSGVscFwiXG4gICAgICBbbnpUb29sdGlwQ29sb3JdPVwib3B0aW9uYWxIZWxwQ29sb3JcIlxuICAgICAgbnotaWNvblxuICAgICAgbnpUeXBlPVwicXVlc3Rpb24tY2lyY2xlXCJcbiAgICA+PC9pPlxuICA8L3NwYW4+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJzdl9fZGV0YWlsXCI+XG4gIDxzcGFuIChjZGtPYnNlcnZlQ29udGVudCk9XCJjaGVja0NvbnRlbnQoKVwiICNjb25FbD5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDwvc3Bhbj5cbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiEhdW5pdFwiPlxuICAgIDxzcGFuIGNsYXNzPVwic3ZfX3VuaXRcIiAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cInVuaXRcIj57eyB1bml0IH19PC9zcGFuPlxuICA8L25nLWNvbnRhaW5lcj5cbjwvZGl2PlxuIl19