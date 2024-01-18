import { __decorate } from "tslib";
import { CdkObserveContent } from '@angular/cdk/observers';
import { ChangeDetectionStrategy, Component, Host, Input, Optional, ViewChild, ViewEncapsulation } from '@angular/core';
import { isEmpty } from '@delon/util/browser';
import { InputBoolean, InputNumber } from '@delon/util/decorator';
import { NzStringTemplateOutletDirective } from 'ng-zorro-antd/core/outlet';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { NzTooltipDirective } from 'ng-zorro-antd/tooltip';
import * as i0 from "@angular/core";
import * as i1 from "./sv-container.component";
import * as i2 from "@delon/theme";
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: SVComponent, deps: [{ token: i0.ElementRef }, { token: i1.SVContainerComponent, host: true, optional: true }, { token: i2.ResponsiveService }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.1.0", type: SVComponent, isStandalone: true, selector: "sv, [sv]", inputs: { optional: "optional", optionalHelp: "optionalHelp", optionalHelpColor: "optionalHelpColor", label: "label", unit: "unit", col: "col", default: "default", type: "type", noColon: "noColon", hideLabel: "hideLabel" }, host: { properties: { "style.padding-left.px": "paddingValue", "style.padding-right.px": "paddingValue" } }, viewQueries: [{ propertyName: "conEl", first: true, predicate: ["conEl"], descendants: true }], exportAs: ["sv"], usesOnChanges: true, ngImport: i0, template: "@if (!hideLabel) {\n  <div\n    class=\"sv__label\"\n    [class.sv__label-empty]=\"!label\"\n    [class.sv__label-width]=\"labelWidth !== null && labelWidth !== undefined\"\n    [class.sv__no-colon]=\"_noColon\"\n    [style.width.px]=\"labelWidth\"\n  >\n    <span class=\"sv__label-text\">\n      <ng-container *nzStringTemplateOutlet=\"label\">{{ label }}</ng-container>\n    </span>\n    @if (optional || optionalHelp) {\n      <span class=\"sv__label-optional\" [class.sv__label-optional-no-text]=\"!optional\">\n        <ng-container *nzStringTemplateOutlet=\"optional\">{{ optional }}</ng-container>\n        @if (optionalHelp) {\n          <i\n            nz-tooltip\n            [nzTooltipTitle]=\"optionalHelp\"\n            [nzTooltipColor]=\"optionalHelpColor\"\n            nz-icon\n            nzType=\"question-circle\"\n          ></i>\n        }\n      </span>\n    }\n  </div>\n}\n<div class=\"sv__detail\">\n  <span (cdkObserveContent)=\"checkContent()\" #conEl>\n    <ng-content />\n  </span>\n  @if (!!unit) {\n    <span class=\"sv__unit\" *nzStringTemplateOutlet=\"unit\">{{ unit }}</span>\n  }\n</div>\n", dependencies: [{ kind: "directive", type: NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { kind: "directive", type: NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "cdkConnectedOverlayPush", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }, { kind: "directive", type: NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "directive", type: CdkObserveContent, selector: "[cdkObserveContent]", inputs: ["cdkObserveContentDisabled", "debounce"], outputs: ["cdkObserveContent"], exportAs: ["cdkObserveContent"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: SVComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sv, [sv]', exportAs: 'sv', host: {
                        '[style.padding-left.px]': 'paddingValue',
                        '[style.padding-right.px]': 'paddingValue'
                    }, preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, standalone: true, imports: [NzStringTemplateOutletDirective, NzTooltipDirective, NzIconDirective, CdkObserveContent], template: "@if (!hideLabel) {\n  <div\n    class=\"sv__label\"\n    [class.sv__label-empty]=\"!label\"\n    [class.sv__label-width]=\"labelWidth !== null && labelWidth !== undefined\"\n    [class.sv__no-colon]=\"_noColon\"\n    [style.width.px]=\"labelWidth\"\n  >\n    <span class=\"sv__label-text\">\n      <ng-container *nzStringTemplateOutlet=\"label\">{{ label }}</ng-container>\n    </span>\n    @if (optional || optionalHelp) {\n      <span class=\"sv__label-optional\" [class.sv__label-optional-no-text]=\"!optional\">\n        <ng-container *nzStringTemplateOutlet=\"optional\">{{ optional }}</ng-container>\n        @if (optionalHelp) {\n          <i\n            nz-tooltip\n            [nzTooltipTitle]=\"optionalHelp\"\n            [nzTooltipColor]=\"optionalHelpColor\"\n            nz-icon\n            nzType=\"question-circle\"\n          ></i>\n        }\n      </span>\n    }\n  </div>\n}\n<div class=\"sv__detail\">\n  <span (cdkObserveContent)=\"checkContent()\" #conEl>\n    <ng-content />\n  </span>\n  @if (!!unit) {\n    <span class=\"sv__unit\" *nzStringTemplateOutlet=\"unit\">{{ unit }}</span>\n  }\n</div>\n" }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3YuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3N2L3N2LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9zdi9zdi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDM0QsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixTQUFTLEVBRVQsSUFBSSxFQUNKLEtBQUssRUFFTCxRQUFRLEVBR1IsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUd2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUMsT0FBTyxFQUFnQixZQUFZLEVBQUUsV0FBVyxFQUFlLE1BQU0sdUJBQXVCLENBQUM7QUFDN0YsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7O0FBSTNELE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQztBQWdCdkIsTUFBTSxPQUFPLFdBQVc7SUF3QnRCLGFBQWE7SUFFYixJQUFJLFlBQVk7UUFDZCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUTtZQUFFLE9BQU8sSUFBSSxDQUFDO1FBQ3RDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxJQUFJLFVBQVU7UUFDWixNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDM0MsT0FBTyxNQUFNLEtBQUssWUFBWSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FB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QUNHLElBQUk7c0JBQVosS0FBSztnQkFDdUIsT0FBTztzQkFBbkMsS0FBSztnQkFDbUIsU0FBUztzQkFBakMsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENka09ic2VydmVDb250ZW50IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL29ic2VydmVycyc7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBIb3N0LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPcHRpb25hbCxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUmVzcG9uc2l2ZVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJ0BkZWxvbi91dGlsL2Jyb3dzZXInO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyLCBOdW1iZXJJbnB1dCB9IGZyb20gJ0BkZWxvbi91dGlsL2RlY29yYXRvcic7XG5pbXBvcnQgeyBOelN0cmluZ1RlbXBsYXRlT3V0bGV0RGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL291dGxldCc7XG5pbXBvcnQgeyBOekljb25EaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL2ljb24nO1xuaW1wb3J0IHsgTnpUb29sdGlwRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC90b29sdGlwJztcblxuaW1wb3J0IHsgU1ZDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL3N2LWNvbnRhaW5lci5jb21wb25lbnQnO1xuXG5jb25zdCBwcmVmaXhDbHMgPSBgc3ZgO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdiwgW3N2XScsXG4gIGV4cG9ydEFzOiAnc3YnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3YuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7XG4gICAgJ1tzdHlsZS5wYWRkaW5nLWxlZnQucHhdJzogJ3BhZGRpbmdWYWx1ZScsXG4gICAgJ1tzdHlsZS5wYWRkaW5nLXJpZ2h0LnB4XSc6ICdwYWRkaW5nVmFsdWUnXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW056U3RyaW5nVGVtcGxhdGVPdXRsZXREaXJlY3RpdmUsIE56VG9vbHRpcERpcmVjdGl2ZSwgTnpJY29uRGlyZWN0aXZlLCBDZGtPYnNlcnZlQ29udGVudF1cbn0pXG5leHBvcnQgY2xhc3MgU1ZDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfY29sOiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2RlZmF1bHQ6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX25vQ29sb246IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2hpZGVMYWJlbDogQm9vbGVhbklucHV0O1xuXG4gIEBWaWV3Q2hpbGQoJ2NvbkVsJywgeyBzdGF0aWM6IGZhbHNlIH0pXG4gIHByaXZhdGUgY29uRWwhOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PjtcbiAgcHJpdmF0ZSBjbHNNYXA6IHN0cmluZ1tdID0gW107XG4gIF9ub0NvbG9uID0gZmFsc2U7XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBASW5wdXQoKSBvcHRpb25hbD86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbDtcbiAgQElucHV0KCkgb3B0aW9uYWxIZWxwPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsO1xuICBASW5wdXQoKSBvcHRpb25hbEhlbHBDb2xvcj86IHN0cmluZztcbiAgQElucHV0KCkgbGFiZWw/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGw7XG4gIEBJbnB1dCgpIHVuaXQ/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGw7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcihudWxsKSBjb2w/OiBudW1iZXIgfCBudWxsO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKG51bGwpIGRlZmF1bHQ/OiBib29sZWFuIHwgbnVsbDtcbiAgQElucHV0KCkgdHlwZT86ICdwcmltYXJ5JyB8ICdzdWNjZXNzJyB8ICdkYW5nZXInIHwgJ3dhcm5pbmcnO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKG51bGwpIG5vQ29sb24/OiBib29sZWFuIHwgbnVsbDtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGhpZGVMYWJlbCA9IGZhbHNlO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBnZXQgcGFkZGluZ1ZhbHVlKCk6IG51bWJlciB8IG51bGwge1xuICAgIGlmICh0aGlzLnBhcmVudC5ib3JkZXJlZCkgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50Lmd1dHRlciAvIDI7XG4gIH1cblxuICBnZXQgbGFiZWxXaWR0aCgpOiBudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkIHtcbiAgICBjb25zdCB7IGxhYmVsV2lkdGgsIGxheW91dCB9ID0gdGhpcy5wYXJlbnQ7XG4gICAgcmV0dXJuIGxheW91dCA9PT0gJ2hvcml6b250YWwnID8gbGFiZWxXaWR0aCA6IG51bGw7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIHB1YmxpYyBwYXJlbnQ6IFNWQ29udGFpbmVyQ29tcG9uZW50LFxuICAgIHByaXZhdGUgcmVwOiBSZXNwb25zaXZlU2VydmljZSxcbiAgICBwcml2YXRlIHJlbjogUmVuZGVyZXIyXG4gICkge1xuICAgIGlmIChwYXJlbnQgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBbc3ZdIG11c3QgaW5jbHVkZSAnc3YtY29udGFpbmVyJyBjb21wb25lbnRgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldENsYXNzKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgcmVuLCBjb2wsIGNsc01hcCwgdHlwZSwgcmVwLCBub0NvbG9uLCBwYXJlbnQgfSA9IHRoaXM7XG4gICAgY29uc3QgZWwgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5fbm9Db2xvbiA9IHBhcmVudC5ib3JkZXJlZCA/IHRydWUgOiBub0NvbG9uICE9IG51bGwgPyBub0NvbG9uIDogcGFyZW50Lm5vQ29sb247XG4gICAgY2xzTWFwLmZvckVhY2goY2xzID0+IHJlbi5yZW1vdmVDbGFzcyhlbCwgY2xzKSk7XG4gICAgY2xzTWFwLmxlbmd0aCA9IDA7XG4gICAgY29uc3QgcGFyZW50Q29sID0gcGFyZW50LmNvbEluQ29uIHx8IHBhcmVudC5jb2w7XG4gICAgY2xzTWFwLnB1c2goLi4ucmVwLmdlbkNscyhjb2wgIT0gbnVsbCA/IGNvbCA6IHBhcmVudENvbCwgcGFyZW50Q29sKSk7XG4gICAgY2xzTWFwLnB1c2goYCR7cHJlZml4Q2xzfV9faXRlbWApO1xuICAgIGlmICh0aGlzLnBhcmVudC5sYWJlbFdpZHRoKSBjbHNNYXAucHVzaChgJHtwcmVmaXhDbHN9X19pdGVtLWZpeGVkYCk7XG4gICAgaWYgKHR5cGUpIGNsc01hcC5wdXNoKGAke3ByZWZpeENsc31fX3R5cGUtJHt0eXBlfWApO1xuICAgIGNsc01hcC5mb3JFYWNoKGNscyA9PiByZW4uYWRkQ2xhc3MoZWwsIGNscykpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0Q2xhc3MoKTtcbiAgICB0aGlzLmNoZWNrQ29udGVudCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRDbGFzcygpO1xuICB9XG5cbiAgY2hlY2tDb250ZW50KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgY29uRWwgfSA9IHRoaXM7XG4gICAgY29uc3QgZGVmID0gdGhpcy5kZWZhdWx0O1xuICAgIGlmICghKGRlZiAhPSBudWxsID8gZGVmIDogdGhpcy5wYXJlbnQuZGVmYXVsdCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZWwgPSBjb25FbC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IGNscyA9IGBzdl9fZGVmYXVsdGA7XG4gICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucyhjbHMpKSB7XG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKGNscyk7XG4gICAgfVxuICAgIGlmIChpc0VtcHR5KGVsKSkge1xuICAgICAgZWwuY2xhc3NMaXN0LmFkZChjbHMpO1xuICAgIH1cbiAgfVxufVxuIiwiQGlmICghaGlkZUxhYmVsKSB7XG4gIDxkaXZcbiAgICBjbGFzcz1cInN2X19sYWJlbFwiXG4gICAgW2NsYXNzLnN2X19sYWJlbC1lbXB0eV09XCIhbGFiZWxcIlxuICAgIFtjbGFzcy5zdl9fbGFiZWwtd2lkdGhdPVwibGFiZWxXaWR0aCAhPT0gbnVsbCAmJiBsYWJlbFdpZHRoICE9PSB1bmRlZmluZWRcIlxuICAgIFtjbGFzcy5zdl9fbm8tY29sb25dPVwiX25vQ29sb25cIlxuICAgIFtzdHlsZS53aWR0aC5weF09XCJsYWJlbFdpZHRoXCJcbiAgPlxuICAgIDxzcGFuIGNsYXNzPVwic3ZfX2xhYmVsLXRleHRcIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJsYWJlbFwiPnt7IGxhYmVsIH19PC9uZy1jb250YWluZXI+XG4gICAgPC9zcGFuPlxuICAgIEBpZiAob3B0aW9uYWwgfHwgb3B0aW9uYWxIZWxwKSB7XG4gICAgICA8c3BhbiBjbGFzcz1cInN2X19sYWJlbC1vcHRpb25hbFwiIFtjbGFzcy5zdl9fbGFiZWwtb3B0aW9uYWwtbm8tdGV4dF09XCIhb3B0aW9uYWxcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cIm9wdGlvbmFsXCI+e3sgb3B0aW9uYWwgfX08L25nLWNvbnRhaW5lcj5cbiAgICAgICAgQGlmIChvcHRpb25hbEhlbHApIHtcbiAgICAgICAgICA8aVxuICAgICAgICAgICAgbnotdG9vbHRpcFxuICAgICAgICAgICAgW256VG9vbHRpcFRpdGxlXT1cIm9wdGlvbmFsSGVscFwiXG4gICAgICAgICAgICBbbnpUb29sdGlwQ29sb3JdPVwib3B0aW9uYWxIZWxwQ29sb3JcIlxuICAgICAgICAgICAgbnotaWNvblxuICAgICAgICAgICAgbnpUeXBlPVwicXVlc3Rpb24tY2lyY2xlXCJcbiAgICAgICAgICA+PC9pPlxuICAgICAgICB9XG4gICAgICA8L3NwYW4+XG4gICAgfVxuICA8L2Rpdj5cbn1cbjxkaXYgY2xhc3M9XCJzdl9fZGV0YWlsXCI+XG4gIDxzcGFuIChjZGtPYnNlcnZlQ29udGVudCk9XCJjaGVja0NvbnRlbnQoKVwiICNjb25FbD5cbiAgICA8bmctY29udGVudCAvPlxuICA8L3NwYW4+XG4gIEBpZiAoISF1bml0KSB7XG4gICAgPHNwYW4gY2xhc3M9XCJzdl9fdW5pdFwiICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwidW5pdFwiPnt7IHVuaXQgfX08L3NwYW4+XG4gIH1cbjwvZGl2PlxuIl19