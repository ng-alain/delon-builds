import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from '@delon/util/decorator';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/card";
import * as i2 from "ng-zorro-antd/spin";
import * as i3 from "ng-zorro-antd/core/outlet";
import * as i4 from "@angular/common";
export class G2CardComponent {
    constructor(cdr) {
        this.cdr = cdr;
        /** 是否显示边框 */
        this.bordered = false;
        this.total = '';
        this._height = 'auto';
        /** 是否显示Loading */
        this.loading = false;
    }
    set contentHeight(value) {
        this._orgHeight = value;
        this._height = typeof value === 'number' ? (this._height = `${value}px`) : value;
    }
    ngOnChanges() {
        this.cdr.detectChanges();
    }
}
/** @nocollapse */ G2CardComponent.ɵfac = function G2CardComponent_Factory(t) { return new (t || G2CardComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
/** @nocollapse */ G2CardComponent.ɵcmp = i0.ɵɵngDeclareComponent({ version: "11.1.1", type: G2CardComponent, selector: "g2-card", inputs: { bordered: "bordered", avatar: "avatar", title: "title", action: "action", total: "total", contentHeight: "contentHeight", footer: "footer", loading: "loading" }, host: { properties: { "class.g2-card": "true" } }, exportAs: ["g2Card"], usesOnChanges: true, ngImport: i0, template: "<nz-card [nzBodyStyle]=\"{ padding: '20px 24px 8px 24px' }\" [nzBordered]=\"bordered\">\n  <nz-spin [nzSpinning]=\"loading\">\n    <div class=\"g2-card__top\">\n      <div class=\"g2-card__avatar\">\n        <ng-container *nzStringTemplateOutlet=\"avatar\">{{ avatar }}</ng-container>\n      </div>\n      <div class=\"g2-card__meta-wrap\">\n        <div class=\"g2-card__meta\">\n          <span class=\"g2-card__meta-title\" *ngIf=\"title\">\n            <ng-container *nzStringTemplateOutlet=\"title\">{{ title }}</ng-container>\n          </span>\n          <span class=\"g2-card__meta-action\" *ngIf=\"action\">\n            <ng-container *nzStringTemplateOutlet=\"action\">{{ action }}</ng-container>\n          </span>\n        </div>\n        <p *ngIf=\"total\" class=\"g2-card__total\">{{ total }}</p>\n      </div>\n    </div>\n    <div class=\"g2-card__desc\" [ngStyle]=\"{ height: _height }\">\n      <div [ngClass]=\"{ 'g2-card__fixed': !!_orgHeight }\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n    <div class=\"g2-card__footer\" *ngIf=\"footer\">\n      <ng-container *nzStringTemplateOutlet=\"footer\">{{ footer }}</ng-container>\n    </div>\n  </nz-spin>\n</nz-card>\n", directives: [{ type: i1.NzCardComponent, selector: "nz-card", inputs: ["nzBordered", "nzBorderless", "nzLoading", "nzHoverable", "nzBodyStyle", "nzActions", "nzType", "nzSize", "nzCover", "nzTitle", "nzExtra"], exportAs: ["nzCard"] }, { type: i2.NzSpinComponent, selector: "nz-spin", inputs: ["nzIndicator", "nzSize", "nzTip", "nzDelay", "nzSimple", "nzSpinning"], exportAs: ["nzSpin"] }, { type: i3.NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i4.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], G2CardComponent.prototype, "bordered", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], G2CardComponent.prototype, "loading", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(G2CardComponent, [{
        type: Component,
        args: [{
                selector: 'g2-card',
                exportAs: 'g2Card',
                templateUrl: './card.component.html',
                host: { '[class.g2-card]': 'true' },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { bordered: [{
            type: Input
        }], avatar: [{
            type: Input
        }], title: [{
            type: Input
        }], action: [{
            type: Input
        }], total: [{
            type: Input
        }], contentHeight: [{
            type: Input
        }], footer: [{
            type: Input
        }], loading: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jaGFydC9jYXJkL2NhcmQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY2hhcnQvY2FyZC9jYXJkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBMEIsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEksT0FBTyxFQUFnQixZQUFZLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7O0FBV25FLE1BQU0sT0FBTyxlQUFlO0lBcUIxQixZQUFvQixHQUFzQjtRQUF0QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQWpCMUMsYUFBYTtRQUNZLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFJakMsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNwQixZQUFPLEdBQUcsTUFBTSxDQUFDO1FBUWpCLGtCQUFrQjtRQUNPLFlBQU8sR0FBRyxLQUFLLENBQUM7SUFFSSxDQUFDO0lBVDlDLElBQ0ksYUFBYSxDQUFDLEtBQXNCO1FBQ3RDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDbkYsQ0FBQztJQU9ELFdBQVc7UUFDVCxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNCLENBQUM7O2lHQXpCVSxlQUFlOzZGQUFmLGVBQWUseVRDWjVCLHdyQ0E0QkE7QURYMkI7SUFBZixZQUFZLEVBQUU7O2lEQUFrQjtBQWNqQjtJQUFmLFlBQVksRUFBRTs7Z0RBQWlCO3VGQW5COUIsZUFBZTtjQVQzQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLFFBQVEsRUFBRSxRQUFRO2dCQUNsQixXQUFXLEVBQUUsdUJBQXVCO2dCQUNwQyxJQUFJLEVBQUUsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUU7Z0JBQ25DLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0QztvRUFNMEIsUUFBUTtrQkFBaEMsS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUlGLGFBQWE7a0JBRGhCLEtBQUs7WUFLRyxNQUFNO2tCQUFkLEtBQUs7WUFFbUIsT0FBTztrQkFBL0IsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBUZW1wbGF0ZVJlZiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgSW5wdXRCb29sZWFuIH0gZnJvbSAnQGRlbG9uL3V0aWwvZGVjb3JhdG9yJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZzItY2FyZCcsXG4gIGV4cG9ydEFzOiAnZzJDYXJkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhcmQuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7ICdbY2xhc3MuZzItY2FyZF0nOiAndHJ1ZScgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBHMkNhcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfYm9yZGVyZWQ6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2xvYWRpbmc6IEJvb2xlYW5JbnB1dDtcblxuICAvKiog5piv5ZCm5pi+56S66L655qGGICovXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBib3JkZXJlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBhdmF0YXI6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIGFjdGlvbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIHRvdGFsID0gJyc7XG4gIF9oZWlnaHQgPSAnYXV0byc7XG4gIF9vcmdIZWlnaHQ6IG51bWJlciB8IHN0cmluZztcbiAgQElucHV0KClcbiAgc2V0IGNvbnRlbnRIZWlnaHQodmFsdWU6IG51bWJlciB8IHN0cmluZykge1xuICAgIHRoaXMuX29yZ0hlaWdodCA9IHZhbHVlO1xuICAgIHRoaXMuX2hlaWdodCA9IHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgPyAodGhpcy5faGVpZ2h0ID0gYCR7dmFsdWV9cHhgKSA6IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpIGZvb3Rlcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIC8qKiDmmK/lkKbmmL7npLpMb2FkaW5nICovXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBsb2FkaW5nID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxufVxuIiwiPG56LWNhcmQgW256Qm9keVN0eWxlXT1cInsgcGFkZGluZzogJzIwcHggMjRweCA4cHggMjRweCcgfVwiIFtuekJvcmRlcmVkXT1cImJvcmRlcmVkXCI+XG4gIDxuei1zcGluIFtuelNwaW5uaW5nXT1cImxvYWRpbmdcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZzItY2FyZF9fdG9wXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZzItY2FyZF9fYXZhdGFyXCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJhdmF0YXJcIj57eyBhdmF0YXIgfX08L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImcyLWNhcmRfX21ldGEtd3JhcFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZzItY2FyZF9fbWV0YVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZzItY2FyZF9fbWV0YS10aXRsZVwiICpuZ0lmPVwidGl0bGVcIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJ0aXRsZVwiPnt7IHRpdGxlIH19PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZzItY2FyZF9fbWV0YS1hY3Rpb25cIiAqbmdJZj1cImFjdGlvblwiPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cImFjdGlvblwiPnt7IGFjdGlvbiB9fTwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxwICpuZ0lmPVwidG90YWxcIiBjbGFzcz1cImcyLWNhcmRfX3RvdGFsXCI+e3sgdG90YWwgfX08L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZzItY2FyZF9fZGVzY1wiIFtuZ1N0eWxlXT1cInsgaGVpZ2h0OiBfaGVpZ2h0IH1cIj5cbiAgICAgIDxkaXYgW25nQ2xhc3NdPVwieyAnZzItY2FyZF9fZml4ZWQnOiAhIV9vcmdIZWlnaHQgfVwiPlxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZzItY2FyZF9fZm9vdGVyXCIgKm5nSWY9XCJmb290ZXJcIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJmb290ZXJcIj57eyBmb290ZXIgfX08L25nLWNvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgPC9uei1zcGluPlxuPC9uei1jYXJkPlxuIl19