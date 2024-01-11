import { __decorate } from "tslib";
import { ObserversModule } from '@angular/cdk/observers';
import { ChangeDetectionStrategy, Component, Host, Input, Optional, ViewChild, ViewEncapsulation } from '@angular/core';
import { isEmpty } from '@delon/util/browser';
import { InputBoolean, InputNumber } from '@delon/util/decorator';
import { NzStringTemplateOutletDirective } from 'ng-zorro-antd/core/outlet';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { NzTooltipDirective } from 'ng-zorro-antd/tooltip';
import * as i0 from "@angular/core";
import * as i1 from "./sv-container.component";
import * as i2 from "@delon/theme";
import * as i3 from "@angular/cdk/observers";
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.9", type: SVComponent, isStandalone: true, selector: "sv, [sv]", inputs: { optional: "optional", optionalHelp: "optionalHelp", optionalHelpColor: "optionalHelpColor", label: "label", unit: "unit", col: "col", default: "default", type: "type", noColon: "noColon", hideLabel: "hideLabel" }, host: { properties: { "style.padding-left.px": "paddingValue", "style.padding-right.px": "paddingValue" } }, viewQueries: [{ propertyName: "conEl", first: true, predicate: ["conEl"], descendants: true }], exportAs: ["sv"], usesOnChanges: true, ngImport: i0, template: "@if (!hideLabel) {\n  <div\n    class=\"sv__label\"\n    [class.sv__label-empty]=\"!label\"\n    [class.sv__label-width]=\"labelWidth !== null && labelWidth !== undefined\"\n    [class.sv__no-colon]=\"_noColon\"\n    [style.width.px]=\"labelWidth\"\n  >\n    <span class=\"sv__label-text\">\n      <ng-container *nzStringTemplateOutlet=\"label\">{{ label }}</ng-container>\n    </span>\n    @if (optional || optionalHelp) {\n      <span class=\"sv__label-optional\" [class.sv__label-optional-no-text]=\"!optional\">\n        <ng-container *nzStringTemplateOutlet=\"optional\">{{ optional }}</ng-container>\n        @if (optionalHelp) {\n          <i\n            nz-tooltip\n            [nzTooltipTitle]=\"optionalHelp\"\n            [nzTooltipColor]=\"optionalHelpColor\"\n            nz-icon\n            nzType=\"question-circle\"\n          ></i>\n        }\n      </span>\n    }\n  </div>\n}\n<div class=\"sv__detail\">\n  <span (cdkObserveContent)=\"checkContent()\" #conEl>\n    <ng-content />\n  </span>\n  @if (!!unit) {\n    <span class=\"sv__unit\" *nzStringTemplateOutlet=\"unit\">{{ unit }}</span>\n  }\n</div>\n", dependencies: [{ kind: "directive", type: NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { kind: "directive", type: NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "cdkConnectedOverlayPush", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }, { kind: "directive", type: NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "ngmodule", type: ObserversModule }, { kind: "directive", type: i3.CdkObserveContent, selector: "[cdkObserveContent]", inputs: ["cdkObserveContentDisabled", "debounce"], outputs: ["cdkObserveContent"], exportAs: ["cdkObserveContent"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
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
                    }, preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, standalone: true, imports: [NzStringTemplateOutletDirective, NzTooltipDirective, NzIconDirective, ObserversModule], template: "@if (!hideLabel) {\n  <div\n    class=\"sv__label\"\n    [class.sv__label-empty]=\"!label\"\n    [class.sv__label-width]=\"labelWidth !== null && labelWidth !== undefined\"\n    [class.sv__no-colon]=\"_noColon\"\n    [style.width.px]=\"labelWidth\"\n  >\n    <span class=\"sv__label-text\">\n      <ng-container *nzStringTemplateOutlet=\"label\">{{ label }}</ng-container>\n    </span>\n    @if (optional || optionalHelp) {\n      <span class=\"sv__label-optional\" [class.sv__label-optional-no-text]=\"!optional\">\n        <ng-container *nzStringTemplateOutlet=\"optional\">{{ optional }}</ng-container>\n        @if (optionalHelp) {\n          <i\n            nz-tooltip\n            [nzTooltipTitle]=\"optionalHelp\"\n            [nzTooltipColor]=\"optionalHelpColor\"\n            nz-icon\n            nzType=\"question-circle\"\n          ></i>\n        }\n      </span>\n    }\n  </div>\n}\n<div class=\"sv__detail\">\n  <span (cdkObserveContent)=\"checkContent()\" #conEl>\n    <ng-content />\n  </span>\n  @if (!!unit) {\n    <span class=\"sv__unit\" *nzStringTemplateOutlet=\"unit\">{{ unit }}</span>\n  }\n</div>\n" }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3YuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3N2L3N2LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9zdi9zdi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3pELE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUVULElBQUksRUFDSixLQUFLLEVBRUwsUUFBUSxFQUdSLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzlDLE9BQU8sRUFBZ0IsWUFBWSxFQUFFLFdBQVcsRUFBZSxNQUFNLHVCQUF1QixDQUFDO0FBQzdGLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7QUFJM0QsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDO0FBZ0J2QixNQUFNLE9BQU8sV0FBVztJQXdCdEIsYUFBYTtJQUViLElBQUksWUFBWTtRQUNkLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFDdEMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELElBQUksVUFBVTtRQUNaLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMzQyxPQUFPLE1BQU0sS0FBSyxZQUFZLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFD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QUNtQixTQUFTO3NCQUFqQyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2ZXJzTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL29ic2VydmVycyc7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBIb3N0LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPcHRpb25hbCxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUmVzcG9uc2l2ZVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJ0BkZWxvbi91dGlsL2Jyb3dzZXInO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyLCBOdW1iZXJJbnB1dCB9IGZyb20gJ0BkZWxvbi91dGlsL2RlY29yYXRvcic7XG5pbXBvcnQgeyBOelN0cmluZ1RlbXBsYXRlT3V0bGV0RGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL291dGxldCc7XG5pbXBvcnQgeyBOekljb25EaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL2ljb24nO1xuaW1wb3J0IHsgTnpUb29sdGlwRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC90b29sdGlwJztcblxuaW1wb3J0IHsgU1ZDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL3N2LWNvbnRhaW5lci5jb21wb25lbnQnO1xuXG5jb25zdCBwcmVmaXhDbHMgPSBgc3ZgO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdiwgW3N2XScsXG4gIGV4cG9ydEFzOiAnc3YnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3YuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7XG4gICAgJ1tzdHlsZS5wYWRkaW5nLWxlZnQucHhdJzogJ3BhZGRpbmdWYWx1ZScsXG4gICAgJ1tzdHlsZS5wYWRkaW5nLXJpZ2h0LnB4XSc6ICdwYWRkaW5nVmFsdWUnXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW056U3RyaW5nVGVtcGxhdGVPdXRsZXREaXJlY3RpdmUsIE56VG9vbHRpcERpcmVjdGl2ZSwgTnpJY29uRGlyZWN0aXZlLCBPYnNlcnZlcnNNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIFNWQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2NvbDogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9kZWZhdWx0OiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9ub0NvbG9uOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9oaWRlTGFiZWw6IEJvb2xlYW5JbnB1dDtcblxuICBAVmlld0NoaWxkKCdjb25FbCcsIHsgc3RhdGljOiBmYWxzZSB9KVxuICBwcml2YXRlIGNvbkVsITogRWxlbWVudFJlZjxIVE1MRWxlbWVudD47XG4gIHByaXZhdGUgY2xzTWFwOiBzdHJpbmdbXSA9IFtdO1xuICBfbm9Db2xvbiA9IGZhbHNlO1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgQElucHV0KCkgb3B0aW9uYWw/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGw7XG4gIEBJbnB1dCgpIG9wdGlvbmFsSGVscD86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbDtcbiAgQElucHV0KCkgb3B0aW9uYWxIZWxwQ29sb3I/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxhYmVsPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsO1xuICBASW5wdXQoKSB1bml0Pzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIobnVsbCkgY29sPzogbnVtYmVyIHwgbnVsbDtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbihudWxsKSBkZWZhdWx0PzogYm9vbGVhbiB8IG51bGw7XG4gIEBJbnB1dCgpIHR5cGU/OiAncHJpbWFyeScgfCAnc3VjY2VzcycgfCAnZGFuZ2VyJyB8ICd3YXJuaW5nJztcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbihudWxsKSBub0NvbG9uPzogYm9vbGVhbiB8IG51bGw7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBoaWRlTGFiZWwgPSBmYWxzZTtcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgZ2V0IHBhZGRpbmdWYWx1ZSgpOiBudW1iZXIgfCBudWxsIHtcbiAgICBpZiAodGhpcy5wYXJlbnQuYm9yZGVyZWQpIHJldHVybiBudWxsO1xuICAgIHJldHVybiB0aGlzLnBhcmVudC5ndXR0ZXIgLyAyO1xuICB9XG5cbiAgZ2V0IGxhYmVsV2lkdGgoKTogbnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZCB7XG4gICAgY29uc3QgeyBsYWJlbFdpZHRoLCBsYXlvdXQgfSA9IHRoaXMucGFyZW50O1xuICAgIHJldHVybiBsYXlvdXQgPT09ICdob3Jpem9udGFsJyA/IGxhYmVsV2lkdGggOiBudWxsO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgcGFyZW50OiBTVkNvbnRhaW5lckNvbXBvbmVudCxcbiAgICBwcml2YXRlIHJlcDogUmVzcG9uc2l2ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZW46IFJlbmRlcmVyMlxuICApIHtcbiAgICBpZiAocGFyZW50ID09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgW3N2XSBtdXN0IGluY2x1ZGUgJ3N2LWNvbnRhaW5lcicgY29tcG9uZW50YCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRDbGFzcygpOiB2b2lkIHtcbiAgICBjb25zdCB7IHJlbiwgY29sLCBjbHNNYXAsIHR5cGUsIHJlcCwgbm9Db2xvbiwgcGFyZW50IH0gPSB0aGlzO1xuICAgIGNvbnN0IGVsID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuX25vQ29sb24gPSBwYXJlbnQuYm9yZGVyZWQgPyB0cnVlIDogbm9Db2xvbiAhPSBudWxsID8gbm9Db2xvbiA6IHBhcmVudC5ub0NvbG9uO1xuICAgIGNsc01hcC5mb3JFYWNoKGNscyA9PiByZW4ucmVtb3ZlQ2xhc3MoZWwsIGNscykpO1xuICAgIGNsc01hcC5sZW5ndGggPSAwO1xuICAgIGNvbnN0IHBhcmVudENvbCA9IHBhcmVudC5jb2xJbkNvbiB8fCBwYXJlbnQuY29sO1xuICAgIGNsc01hcC5wdXNoKC4uLnJlcC5nZW5DbHMoY29sICE9IG51bGwgPyBjb2wgOiBwYXJlbnRDb2wsIHBhcmVudENvbCkpO1xuICAgIGNsc01hcC5wdXNoKGAke3ByZWZpeENsc31fX2l0ZW1gKTtcbiAgICBpZiAodGhpcy5wYXJlbnQubGFiZWxXaWR0aCkgY2xzTWFwLnB1c2goYCR7cHJlZml4Q2xzfV9faXRlbS1maXhlZGApO1xuICAgIGlmICh0eXBlKSBjbHNNYXAucHVzaChgJHtwcmVmaXhDbHN9X190eXBlLSR7dHlwZX1gKTtcbiAgICBjbHNNYXAuZm9yRWFjaChjbHMgPT4gcmVuLmFkZENsYXNzKGVsLCBjbHMpKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldENsYXNzKCk7XG4gICAgdGhpcy5jaGVja0NvbnRlbnQoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuc2V0Q2xhc3MoKTtcbiAgfVxuXG4gIGNoZWNrQ29udGVudCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IGNvbkVsIH0gPSB0aGlzO1xuICAgIGNvbnN0IGRlZiA9IHRoaXMuZGVmYXVsdDtcbiAgICBpZiAoIShkZWYgIT0gbnVsbCA/IGRlZiA6IHRoaXMucGFyZW50LmRlZmF1bHQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGVsID0gY29uRWwubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBjbHMgPSBgc3ZfX2RlZmF1bHRgO1xuICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoY2xzKSkge1xuICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShjbHMpO1xuICAgIH1cbiAgICBpZiAoaXNFbXB0eShlbCkpIHtcbiAgICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xzKTtcbiAgICB9XG4gIH1cbn1cbiIsIkBpZiAoIWhpZGVMYWJlbCkge1xuICA8ZGl2XG4gICAgY2xhc3M9XCJzdl9fbGFiZWxcIlxuICAgIFtjbGFzcy5zdl9fbGFiZWwtZW1wdHldPVwiIWxhYmVsXCJcbiAgICBbY2xhc3Muc3ZfX2xhYmVsLXdpZHRoXT1cImxhYmVsV2lkdGggIT09IG51bGwgJiYgbGFiZWxXaWR0aCAhPT0gdW5kZWZpbmVkXCJcbiAgICBbY2xhc3Muc3ZfX25vLWNvbG9uXT1cIl9ub0NvbG9uXCJcbiAgICBbc3R5bGUud2lkdGgucHhdPVwibGFiZWxXaWR0aFwiXG4gID5cbiAgICA8c3BhbiBjbGFzcz1cInN2X19sYWJlbC10ZXh0XCI+XG4gICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwibGFiZWxcIj57eyBsYWJlbCB9fTwvbmctY29udGFpbmVyPlxuICAgIDwvc3Bhbj5cbiAgICBAaWYgKG9wdGlvbmFsIHx8IG9wdGlvbmFsSGVscCkge1xuICAgICAgPHNwYW4gY2xhc3M9XCJzdl9fbGFiZWwtb3B0aW9uYWxcIiBbY2xhc3Muc3ZfX2xhYmVsLW9wdGlvbmFsLW5vLXRleHRdPVwiIW9wdGlvbmFsXCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJvcHRpb25hbFwiPnt7IG9wdGlvbmFsIH19PC9uZy1jb250YWluZXI+XG4gICAgICAgIEBpZiAob3B0aW9uYWxIZWxwKSB7XG4gICAgICAgICAgPGlcbiAgICAgICAgICAgIG56LXRvb2x0aXBcbiAgICAgICAgICAgIFtuelRvb2x0aXBUaXRsZV09XCJvcHRpb25hbEhlbHBcIlxuICAgICAgICAgICAgW256VG9vbHRpcENvbG9yXT1cIm9wdGlvbmFsSGVscENvbG9yXCJcbiAgICAgICAgICAgIG56LWljb25cbiAgICAgICAgICAgIG56VHlwZT1cInF1ZXN0aW9uLWNpcmNsZVwiXG4gICAgICAgICAgPjwvaT5cbiAgICAgICAgfVxuICAgICAgPC9zcGFuPlxuICAgIH1cbiAgPC9kaXY+XG59XG48ZGl2IGNsYXNzPVwic3ZfX2RldGFpbFwiPlxuICA8c3BhbiAoY2RrT2JzZXJ2ZUNvbnRlbnQpPVwiY2hlY2tDb250ZW50KClcIiAjY29uRWw+XG4gICAgPG5nLWNvbnRlbnQgLz5cbiAgPC9zcGFuPlxuICBAaWYgKCEhdW5pdCkge1xuICAgIDxzcGFuIGNsYXNzPVwic3ZfX3VuaXRcIiAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cInVuaXRcIj57eyB1bml0IH19PC9zcGFuPlxuICB9XG48L2Rpdj5cbiJdfQ==