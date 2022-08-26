import { __decorate } from "tslib";
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, Input, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from '@delon/util/decorator';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@delon/abc/error-collect";
import * as i3 from "ng-zorro-antd/core/outlet";
const CLSBODY = 'footer-toolbar__body';
export class FooterToolbarComponent {
    constructor(el, renderer, doc) {
        this.el = el;
        this.renderer = renderer;
        this.doc = doc;
        this.errorCollect = false;
    }
    get bodyCls() {
        return this.doc.querySelector('body').classList;
    }
    ngOnInit() {
        this.renderer.addClass(this.el.nativeElement, 'footer-toolbar');
        this.bodyCls.add(CLSBODY);
    }
    ngOnDestroy() {
        this.bodyCls.remove(CLSBODY);
    }
}
FooterToolbarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: FooterToolbarComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: DOCUMENT }], target: i0.ɵɵFactoryTarget.Component });
FooterToolbarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.0", type: FooterToolbarComponent, selector: "footer-toolbar", inputs: { errorCollect: "errorCollect", extra: "extra" }, exportAs: ["footerToolbar"], ngImport: i0, template: "<div class=\"footer-toolbar__left\">\n  <ng-container *nzStringTemplateOutlet=\"extra\">{{ extra }}</ng-container>\n</div>\n<div class=\"footer-toolbar__right\">\n  <error-collect *ngIf=\"errorCollect\"></error-collect>\n  <ng-content></ng-content>\n</div>\n", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.ErrorCollectComponent, selector: "error-collect, [error-collect]", inputs: ["freq", "offsetTop"], exportAs: ["errorCollect"] }, { kind: "directive", type: i3.NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    InputBoolean()
], FooterToolbarComponent.prototype, "errorCollect", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: FooterToolbarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'footer-toolbar', exportAs: 'footerToolbar', preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div class=\"footer-toolbar__left\">\n  <ng-container *nzStringTemplateOutlet=\"extra\">{{ extra }}</ng-container>\n</div>\n<div class=\"footer-toolbar__right\">\n  <error-collect *ngIf=\"errorCollect\"></error-collect>\n  <ng-content></ng-content>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }]; }, propDecorators: { errorCollect: [{
                type: Input
            }], extra: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLXRvb2xiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL2Zvb3Rlci10b29sYmFyL2Zvb3Rlci10b29sYmFyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9mb290ZXItdG9vbGJhci9mb290ZXItdG9vbGJhci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUVULE1BQU0sRUFDTixLQUFLLEVBS0wsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBZ0IsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7O0FBR25FLE1BQU0sT0FBTyxHQUFHLHNCQUFzQixDQUFDO0FBVXZDLE1BQU0sT0FBTyxzQkFBc0I7SUFNakMsWUFBb0IsRUFBYyxFQUFVLFFBQW1CLEVBQTRCLEdBQWM7UUFBckYsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBNEIsUUFBRyxHQUFILEdBQUcsQ0FBVztRQUhoRixpQkFBWSxHQUFHLEtBQUssQ0FBQztJQUc4RCxDQUFDO0lBRTdHLElBQVksT0FBTztRQUNqQixPQUFRLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBaUIsQ0FBQyxTQUFTLENBQUM7SUFDbkUsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7bUhBbkJVLHNCQUFzQixxRUFNd0MsUUFBUTt1R0FOdEUsc0JBQXNCLDZJQzNCbkMsb1FBT0E7O0lEdUJZLFlBQVksRUFBRTs0REFBc0I7MkZBSG5DLHNCQUFzQjtrQkFSbEMsU0FBUzsrQkFDRSxnQkFBZ0IsWUFDaEIsZUFBZSx1QkFFSixLQUFLLG1CQUNULHVCQUF1QixDQUFDLE1BQU0saUJBQ2hDLGlCQUFpQixDQUFDLElBQUk7OzBCQVE2QixNQUFNOzJCQUFDLFFBQVE7NENBSHhELFlBQVk7c0JBQXBDLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIElucHV0Qm9vbGVhbiB9IGZyb20gJ0BkZWxvbi91dGlsL2RlY29yYXRvcic7XG5pbXBvcnQgdHlwZSB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbmNvbnN0IENMU0JPRFkgPSAnZm9vdGVyLXRvb2xiYXJfX2JvZHknO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmb290ZXItdG9vbGJhcicsXG4gIGV4cG9ydEFzOiAnZm9vdGVyVG9vbGJhcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9mb290ZXItdG9vbGJhci5jb21wb25lbnQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBGb290ZXJUb29sYmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZXJyb3JDb2xsZWN0OiBCb29sZWFuSW5wdXQ7XG5cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGVycm9yQ29sbGVjdCA9IGZhbHNlO1xuICBASW5wdXQoKSBleHRyYT86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IE56U2FmZUFueSkge31cblxuICBwcml2YXRlIGdldCBib2R5Q2xzKCk6IERPTVRva2VuTGlzdCB7XG4gICAgcmV0dXJuICh0aGlzLmRvYy5xdWVyeVNlbGVjdG9yKCdib2R5JykgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTGlzdDtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnZm9vdGVyLXRvb2xiYXInKTtcbiAgICB0aGlzLmJvZHlDbHMuYWRkKENMU0JPRFkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5ib2R5Q2xzLnJlbW92ZShDTFNCT0RZKTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImZvb3Rlci10b29sYmFyX19sZWZ0XCI+XG4gIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJleHRyYVwiPnt7IGV4dHJhIH19PC9uZy1jb250YWluZXI+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJmb290ZXItdG9vbGJhcl9fcmlnaHRcIj5cbiAgPGVycm9yLWNvbGxlY3QgKm5nSWY9XCJlcnJvckNvbGxlY3RcIj48L2Vycm9yLWNvbGxlY3Q+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvZGl2PlxuIl19