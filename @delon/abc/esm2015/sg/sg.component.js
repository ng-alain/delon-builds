import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Host, Input, Optional, Renderer2, ViewEncapsulation, } from '@angular/core';
import { ResponsiveService } from '@delon/theme';
import { InputNumber } from '@delon/util/decorator';
import { SGContainerComponent } from './sg-container.component';
import * as i0 from "@angular/core";
import * as i1 from "./sg-container.component";
import * as i2 from "@delon/theme";
const prefixCls = `sg`;
export class SGComponent {
    constructor(el, ren, parent, rep) {
        this.ren = ren;
        this.parent = parent;
        this.rep = rep;
        this.clsMap = [];
        this.inited = false;
        if (parent == null) {
            throw new Error(`[sg] must include 'sg-container' component`);
        }
        this.el = el.nativeElement;
    }
    get paddingValue() {
        return this.parent.gutter / 2;
    }
    setClass() {
        const { el, ren, clsMap, col, parent } = this;
        clsMap.forEach(cls => ren.removeClass(el, cls));
        clsMap.length = 0;
        clsMap.push(...this.rep.genCls(col != null ? col : parent.colInCon || parent.col), `${prefixCls}__item`);
        clsMap.forEach(cls => ren.addClass(el, cls));
        return this;
    }
    ngOnChanges() {
        if (this.inited)
            this.setClass();
    }
    ngAfterViewInit() {
        this.setClass();
        this.inited = true;
    }
}
/** @nocollapse */ SGComponent.ɵfac = function SGComponent_Factory(t) { return new (t || SGComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1.SGContainerComponent, 9), i0.ɵɵdirectiveInject(i2.ResponsiveService)); };
/** @nocollapse */ SGComponent.ɵcmp = i0.ɵɵngDeclareComponent({ version: "11.1.1", type: SGComponent, selector: "sg", inputs: { col: "col" }, host: { properties: { "style.padding-left.px": "paddingValue", "style.padding-right.px": "paddingValue" } }, exportAs: ["sg"], usesOnChanges: true, ngImport: i0, template: ` <ng-content></ng-content> `, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    InputNumber(null),
    __metadata("design:type", Number)
], SGComponent.prototype, "col", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SGComponent, [{
        type: Component,
        args: [{
                selector: 'sg',
                exportAs: 'sg',
                template: ` <ng-content></ng-content> `,
                host: {
                    '[style.padding-left.px]': 'paddingValue',
                    '[style.padding-right.px]': 'paddingValue',
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.SGContainerComponent, decorators: [{
                type: Optional
            }, {
                type: Host
            }] }, { type: i2.ResponsiveService }]; }, { col: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3NnL3NnLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLElBQUksRUFDSixLQUFLLEVBRUwsUUFBUSxFQUNSLFNBQVMsRUFDVCxpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ2pELE9BQU8sRUFBRSxXQUFXLEVBQWUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7OztBQUVoRSxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUM7QUFjdkIsTUFBTSxPQUFPLFdBQVc7SUFhdEIsWUFDRSxFQUFjLEVBQ04sR0FBYyxFQUNNLE1BQTRCLEVBQ2hELEdBQXNCO1FBRnRCLFFBQUcsR0FBSCxHQUFHLENBQVc7UUFDTSxXQUFNLEdBQU4sTUFBTSxDQUFzQjtRQUNoRCxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQWJ4QixXQUFNLEdBQWEsRUFBRSxDQUFDO1FBQ3RCLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFjckIsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1lBQ2xCLE1BQU0sSUFBSSxLQUFLLENBQUMsNENBQTRDLENBQUMsQ0FBQztTQUMvRDtRQUNELElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQztJQUM3QixDQUFDO0lBZEQsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQWNPLFFBQVE7UUFDZCxNQUFNLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQztRQUM5QyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNoRCxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLFNBQVMsUUFBUSxDQUFDLENBQUM7UUFDekcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0MsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLE1BQU07WUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQzs7eUZBekNVLFdBQVc7eUZBQVgsV0FBVyxzTkFUWiw2QkFBNkI7QUFnQlg7SUFBbEIsV0FBVyxDQUFDLElBQUksQ0FBQzs7d0NBQWE7dUZBUDdCLFdBQVc7Y0FadkIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxJQUFJO2dCQUNkLFFBQVEsRUFBRSxJQUFJO2dCQUNkLFFBQVEsRUFBRSw2QkFBNkI7Z0JBQ3ZDLElBQUksRUFBRTtvQkFDSix5QkFBeUIsRUFBRSxjQUFjO29CQUN6QywwQkFBMEIsRUFBRSxjQUFjO2lCQUMzQztnQkFDRCxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7O3NCQWlCSSxRQUFROztzQkFBSSxJQUFJO3dEQVRTLEdBQUc7a0JBQTlCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBIb3N0LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPcHRpb25hbCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXNwb25zaXZlU2VydmljZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBJbnB1dE51bWJlciwgTnVtYmVySW5wdXQgfSBmcm9tICdAZGVsb24vdXRpbC9kZWNvcmF0b3InO1xuaW1wb3J0IHsgU0dDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL3NnLWNvbnRhaW5lci5jb21wb25lbnQnO1xuXG5jb25zdCBwcmVmaXhDbHMgPSBgc2dgO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZycsXG4gIGV4cG9ydEFzOiAnc2cnLFxuICB0ZW1wbGF0ZTogYCA8bmctY29udGVudD48L25nLWNvbnRlbnQ+IGAsXG4gIGhvc3Q6IHtcbiAgICAnW3N0eWxlLnBhZGRpbmctbGVmdC5weF0nOiAncGFkZGluZ1ZhbHVlJyxcbiAgICAnW3N0eWxlLnBhZGRpbmctcmlnaHQucHhdJzogJ3BhZGRpbmdWYWx1ZScsXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgU0dDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfY29sOiBOdW1iZXJJbnB1dDtcblxuICBwcml2YXRlIGVsOiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBjbHNNYXA6IHN0cmluZ1tdID0gW107XG4gIHByaXZhdGUgaW5pdGVkID0gZmFsc2U7XG5cbiAgQElucHV0KCkgQElucHV0TnVtYmVyKG51bGwpIGNvbDogbnVtYmVyO1xuXG4gIGdldCBwYWRkaW5nVmFsdWUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQuZ3V0dGVyIC8gMjtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuOiBSZW5kZXJlcjIsXG4gICAgQE9wdGlvbmFsKCkgQEhvc3QoKSBwcml2YXRlIHBhcmVudDogU0dDb250YWluZXJDb21wb25lbnQsXG4gICAgcHJpdmF0ZSByZXA6IFJlc3BvbnNpdmVTZXJ2aWNlLFxuICApIHtcbiAgICBpZiAocGFyZW50ID09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgW3NnXSBtdXN0IGluY2x1ZGUgJ3NnLWNvbnRhaW5lcicgY29tcG9uZW50YCk7XG4gICAgfVxuICAgIHRoaXMuZWwgPSBlbC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDbGFzcygpOiB0aGlzIHtcbiAgICBjb25zdCB7IGVsLCByZW4sIGNsc01hcCwgY29sLCBwYXJlbnQgfSA9IHRoaXM7XG4gICAgY2xzTWFwLmZvckVhY2goY2xzID0+IHJlbi5yZW1vdmVDbGFzcyhlbCwgY2xzKSk7XG4gICAgY2xzTWFwLmxlbmd0aCA9IDA7XG4gICAgY2xzTWFwLnB1c2goLi4udGhpcy5yZXAuZ2VuQ2xzKGNvbCAhPSBudWxsID8gY29sIDogcGFyZW50LmNvbEluQ29uIHx8IHBhcmVudC5jb2wpLCBgJHtwcmVmaXhDbHN9X19pdGVtYCk7XG4gICAgY2xzTWFwLmZvckVhY2goY2xzID0+IHJlbi5hZGRDbGFzcyhlbCwgY2xzKSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pbml0ZWQpIHRoaXMuc2V0Q2xhc3MoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldENsYXNzKCk7XG4gICAgdGhpcy5pbml0ZWQgPSB0cnVlO1xuICB9XG59XG4iXX0=