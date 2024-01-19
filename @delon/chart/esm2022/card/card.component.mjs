import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation, booleanAttribute } from '@angular/core';
import { NzCardComponent } from 'ng-zorro-antd/card';
import { NzStringTemplateOutletDirective } from 'ng-zorro-antd/core/outlet';
import { NzSpinComponent } from 'ng-zorro-antd/spin';
import * as i0 from "@angular/core";
export class G2CardComponent {
    set contentHeight(value) {
        this._orgHeight = value;
        this._height = typeof value === 'number' ? (this._height = `${value}px`) : value;
    }
    constructor(cdr) {
        this.cdr = cdr;
        /** 是否显示边框 */
        this.bordered = false;
        this.total = '';
        this._height = 'auto';
        /** 是否显示Loading */
        this.loading = false;
    }
    ngOnChanges() {
        this.cdr.detectChanges();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: G2CardComponent, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.1.0", type: G2CardComponent, isStandalone: true, selector: "g2-card", inputs: { bordered: ["bordered", "bordered", booleanAttribute], avatar: "avatar", title: "title", action: "action", total: "total", contentHeight: "contentHeight", footer: "footer", loading: ["loading", "loading", booleanAttribute] }, host: { properties: { "class.g2-card": "true" } }, exportAs: ["g2Card"], usesOnChanges: true, ngImport: i0, template: "<nz-card [nzBodyStyle]=\"{ padding: '20px 24px 8px 24px' }\" [nzBordered]=\"bordered\">\n  <nz-spin [nzSpinning]=\"loading\">\n    <div class=\"g2-card__top\">\n      <div class=\"g2-card__avatar\">\n        <ng-container *nzStringTemplateOutlet=\"avatar\">{{ avatar }}</ng-container>\n      </div>\n      <div class=\"g2-card__meta-wrap\">\n        <div class=\"g2-card__meta\">\n          @if (title) {\n            <span class=\"g2-card__meta-title\">\n              <ng-container *nzStringTemplateOutlet=\"title\">{{ title }}</ng-container>\n            </span>\n          }\n          @if (action) {\n            <span class=\"g2-card__meta-action\">\n              <ng-container *nzStringTemplateOutlet=\"action\">{{ action }}</ng-container>\n            </span>\n          }\n        </div>\n        @if (total) {\n          <p class=\"g2-card__total\" [innerHTML]=\"total\"></p>\n        }\n      </div>\n    </div>\n    <div class=\"g2-card__desc\" [style.height]=\"_height\">\n      <div [class.g2-card__fixed]=\"!!_orgHeight\">\n        <ng-content />\n      </div>\n    </div>\n    @if (footer) {\n      <div class=\"g2-card__footer\">\n        <ng-container *nzStringTemplateOutlet=\"footer\">{{ footer }}</ng-container>\n      </div>\n    }\n  </nz-spin>\n</nz-card>\n", dependencies: [{ kind: "component", type: NzCardComponent, selector: "nz-card", inputs: ["nzBordered", "nzBorderless", "nzLoading", "nzHoverable", "nzBodyStyle", "nzCover", "nzActions", "nzType", "nzSize", "nzTitle", "nzExtra"], exportAs: ["nzCard"] }, { kind: "component", type: NzSpinComponent, selector: "nz-spin", inputs: ["nzIndicator", "nzSize", "nzTip", "nzDelay", "nzSimple", "nzSpinning"], exportAs: ["nzSpin"] }, { kind: "directive", type: NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: G2CardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'g2-card', exportAs: 'g2Card', host: { '[class.g2-card]': 'true' }, preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, standalone: true, imports: [NzCardComponent, NzSpinComponent, NzStringTemplateOutletDirective], template: "<nz-card [nzBodyStyle]=\"{ padding: '20px 24px 8px 24px' }\" [nzBordered]=\"bordered\">\n  <nz-spin [nzSpinning]=\"loading\">\n    <div class=\"g2-card__top\">\n      <div class=\"g2-card__avatar\">\n        <ng-container *nzStringTemplateOutlet=\"avatar\">{{ avatar }}</ng-container>\n      </div>\n      <div class=\"g2-card__meta-wrap\">\n        <div class=\"g2-card__meta\">\n          @if (title) {\n            <span class=\"g2-card__meta-title\">\n              <ng-container *nzStringTemplateOutlet=\"title\">{{ title }}</ng-container>\n            </span>\n          }\n          @if (action) {\n            <span class=\"g2-card__meta-action\">\n              <ng-container *nzStringTemplateOutlet=\"action\">{{ action }}</ng-container>\n            </span>\n          }\n        </div>\n        @if (total) {\n          <p class=\"g2-card__total\" [innerHTML]=\"total\"></p>\n        }\n      </div>\n    </div>\n    <div class=\"g2-card__desc\" [style.height]=\"_height\">\n      <div [class.g2-card__fixed]=\"!!_orgHeight\">\n        <ng-content />\n      </div>\n    </div>\n    @if (footer) {\n      <div class=\"g2-card__footer\">\n        <ng-container *nzStringTemplateOutlet=\"footer\">{{ footer }}</ng-container>\n      </div>\n    }\n  </nz-spin>\n</nz-card>\n" }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }], propDecorators: { bordered: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
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
                type: Input,
                args: [{ transform: booleanAttribute }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jaGFydC9jYXJkL2NhcmQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY2hhcnQvY2FyZC9jYXJkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUNULEtBQUssRUFHTCxpQkFBaUIsRUFDakIsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM1RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBYXJELE1BQU0sT0FBTyxlQUFlO0lBUzFCLElBQ0ksYUFBYSxDQUFDLEtBQXNCO1FBQ3RDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDbkYsQ0FBQztJQUtELFlBQW9CLEdBQXNCO1FBQXRCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBakIxQyxhQUFhO1FBQzJCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFJaEQsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNwQixZQUFPLEdBQUcsTUFBTSxDQUFDO1FBUWpCLGtCQUFrQjtRQUNzQixZQUFPLEdBQUcsS0FBSyxDQUFDO0lBRVgsQ0FBQztJQUU5QyxXQUFXO1FBQ1QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzQixDQUFDOzhHQXRCVSxlQUFlO2tHQUFmLGVBQWUsd0ZBRU4sZ0JBQWdCLHlKQWNoQixnQkFBZ0IsMkhDMUN0Qyxvd0NBb0NBLDRDRFpZLGVBQWUsK05BQUUsZUFBZSwySkFBRSwrQkFBK0I7OzJGQUVoRSxlQUFlO2tCQVgzQixTQUFTOytCQUNFLFNBQVMsWUFDVCxRQUFRLFFBRVosRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsdUJBQ2QsS0FBSyxtQkFDVCx1QkFBdUIsQ0FBQyxNQUFNLGlCQUNoQyxpQkFBaUIsQ0FBQyxJQUFJLGNBQ3pCLElBQUksV0FDUCxDQUFDLGVBQWUsRUFBRSxlQUFlLEVBQUUsK0JBQStCLENBQUM7c0ZBSXBDLFFBQVE7c0JBQS9DLEtBQUs7dUJBQUMsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUU7Z0JBQzdCLE1BQU07c0JBQWQsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFJRixhQUFhO3NCQURoQixLQUFLO2dCQUtHLE1BQU07c0JBQWQsS0FBSztnQkFFa0MsT0FBTztzQkFBOUMsS0FBSzt1QkFBQyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIGJvb2xlYW5BdHRyaWJ1dGVcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE56Q2FyZENvbXBvbmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY2FyZCc7XG5pbXBvcnQgeyBOelN0cmluZ1RlbXBsYXRlT3V0bGV0RGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL291dGxldCc7XG5pbXBvcnQgeyBOelNwaW5Db21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL3NwaW4nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnMi1jYXJkJyxcbiAgZXhwb3J0QXM6ICdnMkNhcmQnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FyZC5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHsgJ1tjbGFzcy5nMi1jYXJkXSc6ICd0cnVlJyB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtOekNhcmRDb21wb25lbnQsIE56U3BpbkNvbXBvbmVudCwgTnpTdHJpbmdUZW1wbGF0ZU91dGxldERpcmVjdGl2ZV1cbn0pXG5leHBvcnQgY2xhc3MgRzJDYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgLyoqIOaYr+WQpuaYvuekuui+ueahhiAqL1xuICBASW5wdXQoeyB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGUgfSkgYm9yZGVyZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgYXZhdGFyPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsO1xuICBASW5wdXQoKSB0aXRsZT86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbDtcbiAgQElucHV0KCkgYWN0aW9uPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsO1xuICBASW5wdXQoKSB0b3RhbCA9ICcnO1xuICBfaGVpZ2h0ID0gJ2F1dG8nO1xuICBfb3JnSGVpZ2h0ITogbnVtYmVyIHwgc3RyaW5nO1xuICBASW5wdXQoKVxuICBzZXQgY29udGVudEhlaWdodCh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nKSB7XG4gICAgdGhpcy5fb3JnSGVpZ2h0ID0gdmFsdWU7XG4gICAgdGhpcy5faGVpZ2h0ID0gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyA/ICh0aGlzLl9oZWlnaHQgPSBgJHt2YWx1ZX1weGApIDogdmFsdWU7XG4gIH1cbiAgQElucHV0KCkgZm9vdGVyPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsO1xuICAvKiog5piv5ZCm5pi+56S6TG9hZGluZyAqL1xuICBASW5wdXQoeyB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGUgfSkgbG9hZGluZyA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cbn1cbiIsIjxuei1jYXJkIFtuekJvZHlTdHlsZV09XCJ7IHBhZGRpbmc6ICcyMHB4IDI0cHggOHB4IDI0cHgnIH1cIiBbbnpCb3JkZXJlZF09XCJib3JkZXJlZFwiPlxuICA8bnotc3BpbiBbbnpTcGlubmluZ109XCJsb2FkaW5nXCI+XG4gICAgPGRpdiBjbGFzcz1cImcyLWNhcmRfX3RvcFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImcyLWNhcmRfX2F2YXRhclwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiYXZhdGFyXCI+e3sgYXZhdGFyIH19PC9uZy1jb250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJnMi1jYXJkX19tZXRhLXdyYXBcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImcyLWNhcmRfX21ldGFcIj5cbiAgICAgICAgICBAaWYgKHRpdGxlKSB7XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImcyLWNhcmRfX21ldGEtdGl0bGVcIj5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cInRpdGxlXCI+e3sgdGl0bGUgfX08L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICB9XG4gICAgICAgICAgQGlmIChhY3Rpb24pIHtcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZzItY2FyZF9fbWV0YS1hY3Rpb25cIj5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cImFjdGlvblwiPnt7IGFjdGlvbiB9fTwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIEBpZiAodG90YWwpIHtcbiAgICAgICAgICA8cCBjbGFzcz1cImcyLWNhcmRfX3RvdGFsXCIgW2lubmVySFRNTF09XCJ0b3RhbFwiPjwvcD5cbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImcyLWNhcmRfX2Rlc2NcIiBbc3R5bGUuaGVpZ2h0XT1cIl9oZWlnaHRcIj5cbiAgICAgIDxkaXYgW2NsYXNzLmcyLWNhcmRfX2ZpeGVkXT1cIiEhX29yZ0hlaWdodFwiPlxuICAgICAgICA8bmctY29udGVudCAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgQGlmIChmb290ZXIpIHtcbiAgICAgIDxkaXYgY2xhc3M9XCJnMi1jYXJkX19mb290ZXJcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cImZvb3RlclwiPnt7IGZvb3RlciB9fTwvbmctY29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgfVxuICA8L256LXNwaW4+XG48L256LWNhcmQ+XG4iXX0=