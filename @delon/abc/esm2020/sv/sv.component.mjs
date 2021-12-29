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
SVComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: SVComponent, deps: [{ token: i0.ElementRef }, { token: i1.SVContainerComponent, host: true, optional: true }, { token: i2.ResponsiveService }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
SVComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.1", type: SVComponent, selector: "sv, [sv]", inputs: { optional: "optional", optionalHelp: "optionalHelp", optionalHelpColor: "optionalHelpColor", label: "label", unit: "unit", col: "col", default: "default", type: "type", noColon: "noColon" }, host: { properties: { "style.padding-left.px": "paddingValue", "style.padding-right.px": "paddingValue" } }, viewQueries: [{ propertyName: "conEl", first: true, predicate: ["conEl"], descendants: true }], exportAs: ["sv"], usesOnChanges: true, ngImport: i0, template: "<div\n  class=\"sv__label\"\n  [class.sv__label-empty]=\"!label\"\n  [class.sv__label-width]=\"labelWidth !== null && labelWidth !== undefined\"\n  [class.sv__no-colon]=\"_noColon\"\n  [style.width.px]=\"labelWidth\"\n>\n  <span class=\"sv__label-text\">\n    <ng-container *nzStringTemplateOutlet=\"label\">{{ label }}</ng-container>\n  </span>\n  <span *ngIf=\"optional || optionalHelp\" class=\"sv__label-optional\" [class.sv__label-optional-no-text]=\"!optional\">\n    <ng-container *nzStringTemplateOutlet=\"optional\">{{ optional }}</ng-container>\n    <i\n      *ngIf=\"optionalHelp\"\n      nz-tooltip\n      [nzTooltipTitle]=\"optionalHelp\"\n      [nzTooltipColor]=\"optionalHelpColor\"\n      nz-icon\n      nzType=\"question-circle\"\n    ></i>\n  </span>\n</div>\n<div class=\"sv__detail\">\n  <span (cdkObserveContent)=\"checkContent()\" #conEl>\n    <ng-content></ng-content>\n  </span>\n  <ng-container *ngIf=\"!!unit\">\n    <span class=\"sv__unit\" *nzStringTemplateOutlet=\"unit\">{{ unit }}</span>\n  </ng-container>\n</div>\n", directives: [{ type: i3.NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i5.NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }, { type: i6.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { type: i7.CdkObserveContent, selector: "[cdkObserveContent]", inputs: ["cdkObserveContentDisabled", "debounce"], outputs: ["cdkObserveContent"], exportAs: ["cdkObserveContent"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    InputNumber(null)
], SVComponent.prototype, "col", void 0);
__decorate([
    InputBoolean(null)
], SVComponent.prototype, "default", void 0);
__decorate([
    InputBoolean(null)
], SVComponent.prototype, "noColon", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: SVComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3YuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3N2L3N2LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9zdi9zdi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixTQUFTLEVBRVQsSUFBSSxFQUNKLEtBQUssRUFFTCxRQUFRLEVBR1IsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUd2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUMsT0FBTyxFQUFnQixZQUFZLEVBQUUsV0FBVyxFQUFlLE1BQU0sdUJBQXVCLENBQUM7Ozs7Ozs7OztBQUk3RixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUM7QUFjdkIsTUFBTSxPQUFPLFdBQVc7SUFrQ3RCLFlBQ0UsRUFBYyxFQUNhLE1BQTRCLEVBQy9DLEdBQXNCLEVBQ3RCLEdBQWM7UUFGSyxXQUFNLEdBQU4sTUFBTSxDQUFzQjtRQUMvQyxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN0QixRQUFHLEdBQUgsR0FBRyxDQUFXO1FBOUJoQixXQUFNLEdBQWEsRUFBRSxDQUFDO1FBQzlCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUErQmYsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1lBQ2xCLE1BQU0sSUFBSSxLQUFLLENBQUMsNENBQTRDLENBQUMsQ0FBQztTQUMvRDtRQUNELElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQztJQUM3QixDQUFDO0lBckJELGFBQWE7SUFFYixJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxJQUFJLFVBQVU7UUFDWixNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDM0MsT0FBTyxNQUFNLEtBQUssWUFBWSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNyRCxDQUFDO0lBY08sUUFBUTtRQUNkLE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ2xFLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQzNELE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2hELE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2hFLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxTQUFTLFFBQVEsQ0FBQyxDQUFDO1FBQ2xDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLFNBQVMsY0FBYyxDQUFDLENBQUM7UUFDcEUsSUFBSSxJQUFJO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLFNBQVMsVUFBVSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3BELE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUQsWUFBWTtRQUNWLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDdkIsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN6QixJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDOUMsT0FBTztTQUNSO1FBQ0QsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDLGFBQTRCLENBQUM7UUFDOUMsTUFBTSxHQUFHLEdBQUcsYUFBYSxDQUFDO1FBQzFCLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDOUIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDMUI7UUFDRCxJQUFJLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUNmLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQzs7d0dBakZVLFdBQVc7NEZBQVgsV0FBVyw0ZUNuQ3hCLHloQ0E4QkE7QUR1QjhCO0lBQWxCLFdBQVcsQ0FBQyxJQUFJLENBQUM7d0NBQWE7QUFDWDtJQUFuQixZQUFZLENBQUMsSUFBSSxDQUFDOzRDQUFrQjtBQUVqQjtJQUFuQixZQUFZLENBQUMsSUFBSSxDQUFDOzRDQUFrQjsyRkFyQm5DLFdBQVc7a0JBWnZCLFNBQVM7K0JBQ0UsVUFBVSxZQUNWLElBQUksUUFFUjt3QkFDSix5QkFBeUIsRUFBRSxjQUFjO3dCQUN6QywwQkFBMEIsRUFBRSxjQUFjO3FCQUMzQyx1QkFDb0IsS0FBSyxtQkFDVCx1QkFBdUIsQ0FBQyxNQUFNLGlCQUNoQyxpQkFBaUIsQ0FBQyxJQUFJOzswQkFzQ2xDLElBQUk7OzBCQUFJLFFBQVE7b0dBOUJYLEtBQUs7c0JBRFosU0FBUzt1QkFBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO2dCQVE1QixRQUFRO3NCQUFoQixLQUFLO2dCQUNHLFlBQVk7c0JBQXBCLEtBQUs7Z0JBQ0csaUJBQWlCO3NCQUF6QixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ3NCLEdBQUc7c0JBQTlCLEtBQUs7Z0JBQ3VCLE9BQU87c0JBQW5DLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUN1QixPQUFPO3NCQUFuQyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT3B0aW9uYWwsXG4gIFJlbmRlcmVyMixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFJlc3BvbnNpdmVTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IGlzRW1wdHkgfSBmcm9tICdAZGVsb24vdXRpbC9icm93c2VyJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciwgTnVtYmVySW5wdXQgfSBmcm9tICdAZGVsb24vdXRpbC9kZWNvcmF0b3InO1xuXG5pbXBvcnQgeyBTVkNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vc3YtY29udGFpbmVyLmNvbXBvbmVudCc7XG5cbmNvbnN0IHByZWZpeENscyA9IGBzdmA7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N2LCBbc3ZdJyxcbiAgZXhwb3J0QXM6ICdzdicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdi5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICAnW3N0eWxlLnBhZGRpbmctbGVmdC5weF0nOiAncGFkZGluZ1ZhbHVlJyxcbiAgICAnW3N0eWxlLnBhZGRpbmctcmlnaHQucHhdJzogJ3BhZGRpbmdWYWx1ZSdcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFNWQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2NvbDogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9kZWZhdWx0OiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9ub0NvbG9uOiBCb29sZWFuSW5wdXQ7XG5cbiAgQFZpZXdDaGlsZCgnY29uRWwnLCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgcHJpdmF0ZSBjb25FbDogRWxlbWVudFJlZjtcbiAgcHJpdmF0ZSBlbDogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgY2xzTWFwOiBzdHJpbmdbXSA9IFtdO1xuICBfbm9Db2xvbiA9IGZhbHNlO1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgQElucHV0KCkgb3B0aW9uYWw6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBvcHRpb25hbEhlbHA6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBvcHRpb25hbEhlbHBDb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIHVuaXQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIobnVsbCkgY29sOiBudW1iZXI7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4obnVsbCkgZGVmYXVsdDogYm9vbGVhbjtcbiAgQElucHV0KCkgdHlwZTogJ3ByaW1hcnknIHwgJ3N1Y2Nlc3MnIHwgJ2RhbmdlcicgfCAnd2FybmluZyc7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4obnVsbCkgbm9Db2xvbjogYm9vbGVhbjtcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgZ2V0IHBhZGRpbmdWYWx1ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5ndXR0ZXIgLyAyO1xuICB9XG5cbiAgZ2V0IGxhYmVsV2lkdGgoKTogbnVtYmVyIHwgbnVsbCB7XG4gICAgY29uc3QgeyBsYWJlbFdpZHRoLCBsYXlvdXQgfSA9IHRoaXMucGFyZW50O1xuICAgIHJldHVybiBsYXlvdXQgPT09ICdob3Jpem9udGFsJyA/IGxhYmVsV2lkdGggOiBudWxsO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgZWw6IEVsZW1lbnRSZWYsXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgcGFyZW50OiBTVkNvbnRhaW5lckNvbXBvbmVudCxcbiAgICBwcml2YXRlIHJlcDogUmVzcG9uc2l2ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZW46IFJlbmRlcmVyMlxuICApIHtcbiAgICBpZiAocGFyZW50ID09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgW3N2XSBtdXN0IGluY2x1ZGUgJ3N2LWNvbnRhaW5lcicgY29tcG9uZW50YCk7XG4gICAgfVxuICAgIHRoaXMuZWwgPSBlbC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDbGFzcygpOiB2b2lkIHtcbiAgICBjb25zdCB7IGVsLCByZW4sIGNvbCwgY2xzTWFwLCB0eXBlLCByZXAsIG5vQ29sb24sIHBhcmVudCB9ID0gdGhpcztcbiAgICB0aGlzLl9ub0NvbG9uID0gbm9Db2xvbiAhPSBudWxsID8gbm9Db2xvbiA6IHBhcmVudC5ub0NvbG9uO1xuICAgIGNsc01hcC5mb3JFYWNoKGNscyA9PiByZW4ucmVtb3ZlQ2xhc3MoZWwsIGNscykpO1xuICAgIGNsc01hcC5sZW5ndGggPSAwO1xuICAgIGNsc01hcC5wdXNoKC4uLnJlcC5nZW5DbHMoY29sICE9IG51bGwgPyBjb2wgOiB0aGlzLnBhcmVudC5jb2wpKTtcbiAgICBjbHNNYXAucHVzaChgJHtwcmVmaXhDbHN9X19pdGVtYCk7XG4gICAgaWYgKHRoaXMucGFyZW50LmxhYmVsV2lkdGgpIGNsc01hcC5wdXNoKGAke3ByZWZpeENsc31fX2l0ZW0tZml4ZWRgKTtcbiAgICBpZiAodHlwZSkgY2xzTWFwLnB1c2goYCR7cHJlZml4Q2xzfV9fdHlwZS0ke3R5cGV9YCk7XG4gICAgY2xzTWFwLmZvckVhY2goY2xzID0+IHJlbi5hZGRDbGFzcyhlbCwgY2xzKSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRDbGFzcygpO1xuICAgIHRoaXMuY2hlY2tDb250ZW50KCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLnNldENsYXNzKCk7XG4gIH1cblxuICBjaGVja0NvbnRlbnQoKTogdm9pZCB7XG4gICAgY29uc3QgeyBjb25FbCB9ID0gdGhpcztcbiAgICBjb25zdCBkZWYgPSB0aGlzLmRlZmF1bHQ7XG4gICAgaWYgKCEoZGVmICE9IG51bGwgPyBkZWYgOiB0aGlzLnBhcmVudC5kZWZhdWx0KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBlbCA9IGNvbkVsLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgY2xzID0gYHN2X19kZWZhdWx0YDtcbiAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKGNscykpIHtcbiAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoY2xzKTtcbiAgICB9XG4gICAgaWYgKGlzRW1wdHkoZWwpKSB7XG4gICAgICBlbC5jbGFzc0xpc3QuYWRkKGNscyk7XG4gICAgfVxuICB9XG59XG4iLCI8ZGl2XG4gIGNsYXNzPVwic3ZfX2xhYmVsXCJcbiAgW2NsYXNzLnN2X19sYWJlbC1lbXB0eV09XCIhbGFiZWxcIlxuICBbY2xhc3Muc3ZfX2xhYmVsLXdpZHRoXT1cImxhYmVsV2lkdGggIT09IG51bGwgJiYgbGFiZWxXaWR0aCAhPT0gdW5kZWZpbmVkXCJcbiAgW2NsYXNzLnN2X19uby1jb2xvbl09XCJfbm9Db2xvblwiXG4gIFtzdHlsZS53aWR0aC5weF09XCJsYWJlbFdpZHRoXCJcbj5cbiAgPHNwYW4gY2xhc3M9XCJzdl9fbGFiZWwtdGV4dFwiPlxuICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJsYWJlbFwiPnt7IGxhYmVsIH19PC9uZy1jb250YWluZXI+XG4gIDwvc3Bhbj5cbiAgPHNwYW4gKm5nSWY9XCJvcHRpb25hbCB8fCBvcHRpb25hbEhlbHBcIiBjbGFzcz1cInN2X19sYWJlbC1vcHRpb25hbFwiIFtjbGFzcy5zdl9fbGFiZWwtb3B0aW9uYWwtbm8tdGV4dF09XCIhb3B0aW9uYWxcIj5cbiAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwib3B0aW9uYWxcIj57eyBvcHRpb25hbCB9fTwvbmctY29udGFpbmVyPlxuICAgIDxpXG4gICAgICAqbmdJZj1cIm9wdGlvbmFsSGVscFwiXG4gICAgICBuei10b29sdGlwXG4gICAgICBbbnpUb29sdGlwVGl0bGVdPVwib3B0aW9uYWxIZWxwXCJcbiAgICAgIFtuelRvb2x0aXBDb2xvcl09XCJvcHRpb25hbEhlbHBDb2xvclwiXG4gICAgICBuei1pY29uXG4gICAgICBuelR5cGU9XCJxdWVzdGlvbi1jaXJjbGVcIlxuICAgID48L2k+XG4gIDwvc3Bhbj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cInN2X19kZXRhaWxcIj5cbiAgPHNwYW4gKGNka09ic2VydmVDb250ZW50KT1cImNoZWNrQ29udGVudCgpXCIgI2NvbkVsPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPC9zcGFuPlxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiISF1bml0XCI+XG4gICAgPHNwYW4gY2xhc3M9XCJzdl9fdW5pdFwiICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwidW5pdFwiPnt7IHVuaXQgfX08L3NwYW4+XG4gIDwvbmctY29udGFpbmVyPlxuPC9kaXY+XG4iXX0=