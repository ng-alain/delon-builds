import { __decorate } from "tslib";
import { ObserversModule } from '@angular/cdk/observers';
import { ChangeDetectionStrategy, Component, Host, Input, Optional, ViewChild, ViewEncapsulation } from '@angular/core';
import { isEmpty } from '@delon/util/browser';
import { InputBoolean, InputNumber } from '@delon/util/decorator';
import { NzStringTemplateOutletDirective } from 'ng-zorro-antd/core/outlet';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import * as i0 from "@angular/core";
import * as i1 from "./sv-container.component";
import * as i2 from "@delon/theme";
import * as i3 from "ng-zorro-antd/tooltip";
import * as i4 from "@angular/cdk/observers";
const prefixCls = `sv`;
export class SVComponent {
    // #endregion
    get paddingValue() {
        if (this.parent.bordered)
            return null;
        return this.parent.gutter / 2;
    }
    get labelWidth() {
        const { labelWidth, layout } = this.parent;
        return layout === 'horizontal' ? labelWidth : null;
    }
    constructor(el, parent, rep, ren) {
        this.el = el;
        this.parent = parent;
        this.rep = rep;
        this.ren = ren;
        this.clsMap = [];
        this._noColon = false;
        this.hideLabel = false;
        if (parent == null) {
            throw new Error(`[sv] must include 'sv-container' component`);
        }
    }
    setClass() {
        const { ren, col, clsMap, type, rep, noColon, parent } = this;
        const el = this.el.nativeElement;
        this._noColon = parent.bordered ? true : noColon != null ? noColon : parent.noColon;
        clsMap.forEach(cls => ren.removeClass(el, cls));
        clsMap.length = 0;
        const parentCol = parent.colInCon || parent.col;
        clsMap.push(...rep.genCls(col != null ? col : parentCol, parentCol));
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: SVComponent, deps: [{ token: i0.ElementRef }, { token: i1.SVContainerComponent, host: true, optional: true }, { token: i2.ResponsiveService }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.9", type: SVComponent, isStandalone: true, selector: "sv, [sv]", inputs: { optional: "optional", optionalHelp: "optionalHelp", optionalHelpColor: "optionalHelpColor", label: "label", unit: "unit", col: "col", default: "default", type: "type", noColon: "noColon", hideLabel: "hideLabel" }, host: { properties: { "style.padding-left.px": "paddingValue", "style.padding-right.px": "paddingValue" } }, viewQueries: [{ propertyName: "conEl", first: true, predicate: ["conEl"], descendants: true }], exportAs: ["sv"], usesOnChanges: true, ngImport: i0, template: "@if (!hideLabel) {\n  <div\n    class=\"sv__label\"\n    [class.sv__label-empty]=\"!label\"\n    [class.sv__label-width]=\"labelWidth !== null && labelWidth !== undefined\"\n    [class.sv__no-colon]=\"_noColon\"\n    [style.width.px]=\"labelWidth\"\n  >\n    <span class=\"sv__label-text\">\n      <ng-container *nzStringTemplateOutlet=\"label\">{{ label }}</ng-container>\n    </span>\n    @if (optional || optionalHelp) {\n      <span class=\"sv__label-optional\" [class.sv__label-optional-no-text]=\"!optional\">\n        <ng-container *nzStringTemplateOutlet=\"optional\">{{ optional }}</ng-container>\n        @if (optionalHelp) {\n          <i\n            nz-tooltip\n            [nzTooltipTitle]=\"optionalHelp\"\n            [nzTooltipColor]=\"optionalHelpColor\"\n            nz-icon\n            nzType=\"question-circle\"\n          ></i>\n        }\n      </span>\n    }\n  </div>\n}\n<div class=\"sv__detail\">\n  <span (cdkObserveContent)=\"checkContent()\" #conEl>\n    <ng-content />\n  </span>\n  @if (!!unit) {\n    <span class=\"sv__unit\" *nzStringTemplateOutlet=\"unit\">{{ unit }}</span>\n  }\n</div>\n", dependencies: [{ kind: "directive", type: NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { kind: "ngmodule", type: NzToolTipModule }, { kind: "directive", type: i3.NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "cdkConnectedOverlayPush", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }, { kind: "directive", type: NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "ngmodule", type: ObserversModule }, { kind: "directive", type: i4.CdkObserveContent, selector: "[cdkObserveContent]", inputs: ["cdkObserveContentDisabled", "debounce"], outputs: ["cdkObserveContent"], exportAs: ["cdkObserveContent"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
__decorate([
    InputNumber(null)
], SVComponent.prototype, "col", void 0);
__decorate([
    InputBoolean(null)
], SVComponent.prototype, "default", void 0);
__decorate([
    InputBoolean(null)
], SVComponent.prototype, "noColon", void 0);
__decorate([
    InputBoolean()
], SVComponent.prototype, "hideLabel", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: SVComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sv, [sv]', exportAs: 'sv', host: {
                        '[style.padding-left.px]': 'paddingValue',
                        '[style.padding-right.px]': 'paddingValue'
                    }, preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, standalone: true, imports: [NzStringTemplateOutletDirective, NzToolTipModule, NzIconDirective, ObserversModule], template: "@if (!hideLabel) {\n  <div\n    class=\"sv__label\"\n    [class.sv__label-empty]=\"!label\"\n    [class.sv__label-width]=\"labelWidth !== null && labelWidth !== undefined\"\n    [class.sv__no-colon]=\"_noColon\"\n    [style.width.px]=\"labelWidth\"\n  >\n    <span class=\"sv__label-text\">\n      <ng-container *nzStringTemplateOutlet=\"label\">{{ label }}</ng-container>\n    </span>\n    @if (optional || optionalHelp) {\n      <span class=\"sv__label-optional\" [class.sv__label-optional-no-text]=\"!optional\">\n        <ng-container *nzStringTemplateOutlet=\"optional\">{{ optional }}</ng-container>\n        @if (optionalHelp) {\n          <i\n            nz-tooltip\n            [nzTooltipTitle]=\"optionalHelp\"\n            [nzTooltipColor]=\"optionalHelpColor\"\n            nz-icon\n            nzType=\"question-circle\"\n          ></i>\n        }\n      </span>\n    }\n  </div>\n}\n<div class=\"sv__detail\">\n  <span (cdkObserveContent)=\"checkContent()\" #conEl>\n    <ng-content />\n  </span>\n  @if (!!unit) {\n    <span class=\"sv__unit\" *nzStringTemplateOutlet=\"unit\">{{ unit }}</span>\n  }\n</div>\n" }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i1.SVContainerComponent, decorators: [{
                    type: Host
                }, {
                    type: Optional
                }] }, { type: i2.ResponsiveService }, { type: i0.Renderer2 }], propDecorators: { conEl: [{
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
            }], hideLabel: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3YuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3N2L3N2LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9zdi9zdi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3pELE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUVULElBQUksRUFDSixLQUFLLEVBRUwsUUFBUSxFQUdSLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzlDLE9BQU8sRUFBZ0IsWUFBWSxFQUFFLFdBQVcsRUFBZSxNQUFNLHVCQUF1QixDQUFDO0FBQzdGLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7OztBQUl4RCxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUM7QUFnQnZCLE1BQU0sT0FBTyxXQUFXO0lBd0J0QixhQUFhO0lBRWIsSUFBSSxZQUFZO1FBQ2QsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVE7WUFBRSxPQUFPLElBQUksQ0FBQztRQUN0QyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsSUFBSSxVQUFVO1FBQ1osTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzNDLE9BQU8sTUFBTSxLQUFLLFlBQVksQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMs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U0FBUztzQkFBakMsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmVyc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vYnNlcnZlcnMnO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT3B0aW9uYWwsXG4gIFJlbmRlcmVyMixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFJlc3BvbnNpdmVTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IGlzRW1wdHkgfSBmcm9tICdAZGVsb24vdXRpbC9icm93c2VyJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciwgTnVtYmVySW5wdXQgfSBmcm9tICdAZGVsb24vdXRpbC9kZWNvcmF0b3InO1xuaW1wb3J0IHsgTnpTdHJpbmdUZW1wbGF0ZU91dGxldERpcmVjdGl2ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9vdXRsZXQnO1xuaW1wb3J0IHsgTnpJY29uRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pY29uJztcbmltcG9ydCB7IE56VG9vbFRpcE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvdG9vbHRpcCc7XG5cbmltcG9ydCB7IFNWQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9zdi1jb250YWluZXIuY29tcG9uZW50JztcblxuY29uc3QgcHJlZml4Q2xzID0gYHN2YDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3YsIFtzdl0nLFxuICBleHBvcnRBczogJ3N2JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N2LmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgICdbc3R5bGUucGFkZGluZy1sZWZ0LnB4XSc6ICdwYWRkaW5nVmFsdWUnLFxuICAgICdbc3R5bGUucGFkZGluZy1yaWdodC5weF0nOiAncGFkZGluZ1ZhbHVlJ1xuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtOelN0cmluZ1RlbXBsYXRlT3V0bGV0RGlyZWN0aXZlLCBOelRvb2xUaXBNb2R1bGUsIE56SWNvbkRpcmVjdGl2ZSwgT2JzZXJ2ZXJzTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBTVkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9jb2w6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZGVmYXVsdDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbm9Db2xvbjogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfaGlkZUxhYmVsOiBCb29sZWFuSW5wdXQ7XG5cbiAgQFZpZXdDaGlsZCgnY29uRWwnLCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgcHJpdmF0ZSBjb25FbCE6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+O1xuICBwcml2YXRlIGNsc01hcDogc3RyaW5nW10gPSBbXTtcbiAgX25vQ29sb24gPSBmYWxzZTtcblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIEBJbnB1dCgpIG9wdGlvbmFsPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsO1xuICBASW5wdXQoKSBvcHRpb25hbEhlbHA/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGw7XG4gIEBJbnB1dCgpIG9wdGlvbmFsSGVscENvbG9yPzogc3RyaW5nO1xuICBASW5wdXQoKSBsYWJlbD86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbDtcbiAgQElucHV0KCkgdW5pdD86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbDtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKG51bGwpIGNvbD86IG51bWJlciB8IG51bGw7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4obnVsbCkgZGVmYXVsdD86IGJvb2xlYW4gfCBudWxsO1xuICBASW5wdXQoKSB0eXBlPzogJ3ByaW1hcnknIHwgJ3N1Y2Nlc3MnIHwgJ2RhbmdlcicgfCAnd2FybmluZyc7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4obnVsbCkgbm9Db2xvbj86IGJvb2xlYW4gfCBudWxsO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgaGlkZUxhYmVsID0gZmFsc2U7XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGdldCBwYWRkaW5nVmFsdWUoKTogbnVtYmVyIHwgbnVsbCB7XG4gICAgaWYgKHRoaXMucGFyZW50LmJvcmRlcmVkKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQuZ3V0dGVyIC8gMjtcbiAgfVxuXG4gIGdldCBsYWJlbFdpZHRoKCk6IG51bWJlciB8IG51bGwgfCB1bmRlZmluZWQge1xuICAgIGNvbnN0IHsgbGFiZWxXaWR0aCwgbGF5b3V0IH0gPSB0aGlzLnBhcmVudDtcbiAgICByZXR1cm4gbGF5b3V0ID09PSAnaG9yaXpvbnRhbCcgPyBsYWJlbFdpZHRoIDogbnVsbDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIHBhcmVudDogU1ZDb250YWluZXJDb21wb25lbnQsXG4gICAgcHJpdmF0ZSByZXA6IFJlc3BvbnNpdmVTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVuOiBSZW5kZXJlcjJcbiAgKSB7XG4gICAgaWYgKHBhcmVudCA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFtzdl0gbXVzdCBpbmNsdWRlICdzdi1jb250YWluZXInIGNvbXBvbmVudGApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0Q2xhc3MoKTogdm9pZCB7XG4gICAgY29uc3QgeyByZW4sIGNvbCwgY2xzTWFwLCB0eXBlLCByZXAsIG5vQ29sb24sIHBhcmVudCB9ID0gdGhpcztcbiAgICBjb25zdCBlbCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLl9ub0NvbG9uID0gcGFyZW50LmJvcmRlcmVkID8gdHJ1ZSA6IG5vQ29sb24gIT0gbnVsbCA/IG5vQ29sb24gOiBwYXJlbnQubm9Db2xvbjtcbiAgICBjbHNNYXAuZm9yRWFjaChjbHMgPT4gcmVuLnJlbW92ZUNsYXNzKGVsLCBjbHMpKTtcbiAgICBjbHNNYXAubGVuZ3RoID0gMDtcbiAgICBjb25zdCBwYXJlbnRDb2wgPSBwYXJlbnQuY29sSW5Db24gfHwgcGFyZW50LmNvbDtcbiAgICBjbHNNYXAucHVzaCguLi5yZXAuZ2VuQ2xzKGNvbCAhPSBudWxsID8gY29sIDogcGFyZW50Q29sLCBwYXJlbnRDb2wpKTtcbiAgICBjbHNNYXAucHVzaChgJHtwcmVmaXhDbHN9X19pdGVtYCk7XG4gICAgaWYgKHRoaXMucGFyZW50LmxhYmVsV2lkdGgpIGNsc01hcC5wdXNoKGAke3ByZWZpeENsc31fX2l0ZW0tZml4ZWRgKTtcbiAgICBpZiAodHlwZSkgY2xzTWFwLnB1c2goYCR7cHJlZml4Q2xzfV9fdHlwZS0ke3R5cGV9YCk7XG4gICAgY2xzTWFwLmZvckVhY2goY2xzID0+IHJlbi5hZGRDbGFzcyhlbCwgY2xzKSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRDbGFzcygpO1xuICAgIHRoaXMuY2hlY2tDb250ZW50KCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLnNldENsYXNzKCk7XG4gIH1cblxuICBjaGVja0NvbnRlbnQoKTogdm9pZCB7XG4gICAgY29uc3QgeyBjb25FbCB9ID0gdGhpcztcbiAgICBjb25zdCBkZWYgPSB0aGlzLmRlZmF1bHQ7XG4gICAgaWYgKCEoZGVmICE9IG51bGwgPyBkZWYgOiB0aGlzLnBhcmVudC5kZWZhdWx0KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBlbCA9IGNvbkVsLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgY2xzID0gYHN2X19kZWZhdWx0YDtcbiAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKGNscykpIHtcbiAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoY2xzKTtcbiAgICB9XG4gICAgaWYgKGlzRW1wdHkoZWwpKSB7XG4gICAgICBlbC5jbGFzc0xpc3QuYWRkKGNscyk7XG4gICAgfVxuICB9XG59XG4iLCJAaWYgKCFoaWRlTGFiZWwpIHtcbiAgPGRpdlxuICAgIGNsYXNzPVwic3ZfX2xhYmVsXCJcbiAgICBbY2xhc3Muc3ZfX2xhYmVsLWVtcHR5XT1cIiFsYWJlbFwiXG4gICAgW2NsYXNzLnN2X19sYWJlbC13aWR0aF09XCJsYWJlbFdpZHRoICE9PSBudWxsICYmIGxhYmVsV2lkdGggIT09IHVuZGVmaW5lZFwiXG4gICAgW2NsYXNzLnN2X19uby1jb2xvbl09XCJfbm9Db2xvblwiXG4gICAgW3N0eWxlLndpZHRoLnB4XT1cImxhYmVsV2lkdGhcIlxuICA+XG4gICAgPHNwYW4gY2xhc3M9XCJzdl9fbGFiZWwtdGV4dFwiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cImxhYmVsXCI+e3sgbGFiZWwgfX08L25nLWNvbnRhaW5lcj5cbiAgICA8L3NwYW4+XG4gICAgQGlmIChvcHRpb25hbCB8fCBvcHRpb25hbEhlbHApIHtcbiAgICAgIDxzcGFuIGNsYXNzPVwic3ZfX2xhYmVsLW9wdGlvbmFsXCIgW2NsYXNzLnN2X19sYWJlbC1vcHRpb25hbC1uby10ZXh0XT1cIiFvcHRpb25hbFwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwib3B0aW9uYWxcIj57eyBvcHRpb25hbCB9fTwvbmctY29udGFpbmVyPlxuICAgICAgICBAaWYgKG9wdGlvbmFsSGVscCkge1xuICAgICAgICAgIDxpXG4gICAgICAgICAgICBuei10b29sdGlwXG4gICAgICAgICAgICBbbnpUb29sdGlwVGl0bGVdPVwib3B0aW9uYWxIZWxwXCJcbiAgICAgICAgICAgIFtuelRvb2x0aXBDb2xvcl09XCJvcHRpb25hbEhlbHBDb2xvclwiXG4gICAgICAgICAgICBuei1pY29uXG4gICAgICAgICAgICBuelR5cGU9XCJxdWVzdGlvbi1jaXJjbGVcIlxuICAgICAgICAgID48L2k+XG4gICAgICAgIH1cbiAgICAgIDwvc3Bhbj5cbiAgICB9XG4gIDwvZGl2PlxufVxuPGRpdiBjbGFzcz1cInN2X19kZXRhaWxcIj5cbiAgPHNwYW4gKGNka09ic2VydmVDb250ZW50KT1cImNoZWNrQ29udGVudCgpXCIgI2NvbkVsPlxuICAgIDxuZy1jb250ZW50IC8+XG4gIDwvc3Bhbj5cbiAgQGlmICghIXVuaXQpIHtcbiAgICA8c3BhbiBjbGFzcz1cInN2X191bml0XCIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJ1bml0XCI+e3sgdW5pdCB9fTwvc3Bhbj5cbiAgfVxuPC9kaXY+XG4iXX0=