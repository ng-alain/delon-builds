import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Host, Input, Optional, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { ResponsiveService } from '@delon/theme';
import { isEmpty } from '@delon/util/browser';
import { InputBoolean, InputNumber } from '@delon/util/decorator';
import { SVContainerComponent } from './sv-container.component';
const prefixCls = `sv`;
export class SVComponent {
    constructor(el, parent, rep, ren) {
        this.parent = parent;
        this.rep = rep;
        this.ren = ren;
        this.clsMap = [];
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
        const { el, ren, col, clsMap, type, rep } = this;
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
SVComponent.decorators = [
    { type: Component, args: [{
                selector: 'sv, [sv]',
                exportAs: 'sv',
                template: "<div\n  class=\"sv__label\"\n  [class.sv__label-empty]=\"!label\"\n  [class.sv__label-width]=\"labelWidth !== null && labelWidth !== undefined\"\n  [style.width.px]=\"labelWidth\"\n>\n  <span class=\"sv__label-text\">\n    <ng-container *nzStringTemplateOutlet=\"label\">{{ label }}</ng-container>\n  </span>\n  <span *ngIf=\"optional || optionalHelp\" class=\"sv__label-optional\" [class.sv__label-optional-no-text]=\"!optional\">\n    <ng-container *nzStringTemplateOutlet=\"optional\">{{ optional }}</ng-container>\n    <i\n      *ngIf=\"optionalHelp\"\n      nz-tooltip\n      [nzTooltipTitle]=\"optionalHelp\"\n      [nzTooltipColor]=\"optionalHelpColor\"\n      nz-icon\n      nzType=\"question-circle\"\n    ></i>\n  </span>\n</div>\n<div class=\"sv__detail\">\n  <span (cdkObserveContent)=\"checkContent()\" #conEl>\n    <ng-content></ng-content>\n  </span>\n  <ng-container *ngIf=\"!!unit\">\n    <span class=\"sv__unit\" *nzStringTemplateOutlet=\"unit\">{{ unit }}</span>\n  </ng-container>\n</div>\n",
                host: {
                    '[style.padding-left.px]': 'paddingValue',
                    '[style.padding-right.px]': 'paddingValue'
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            },] }
];
SVComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: SVContainerComponent, decorators: [{ type: Host }, { type: Optional }] },
    { type: ResponsiveService },
    { type: Renderer2 }
];
SVComponent.propDecorators = {
    conEl: [{ type: ViewChild, args: ['conEl', { static: false },] }],
    optional: [{ type: Input }],
    optionalHelp: [{ type: Input }],
    optionalHelpColor: [{ type: Input }],
    label: [{ type: Input }],
    unit: [{ type: Input }],
    col: [{ type: Input }],
    default: [{ type: Input }],
    type: [{ type: Input }]
};
__decorate([
    InputNumber(null)
], SVComponent.prototype, "col", void 0);
__decorate([
    InputBoolean(null)
], SVComponent.prototype, "default", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3YuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3N2L3N2LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLElBQUksRUFDSixLQUFLLEVBRUwsUUFBUSxFQUNSLFNBQVMsRUFFVCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUMsT0FBTyxFQUFnQixZQUFZLEVBQUUsV0FBVyxFQUFlLE1BQU0sdUJBQXVCLENBQUM7QUFFN0YsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFaEUsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDO0FBY3ZCLE1BQU0sT0FBTyxXQUFXO0lBK0J0QixZQUNFLEVBQWMsRUFDYSxNQUE0QixFQUMvQyxHQUFzQixFQUN0QixHQUFjO1FBRkssV0FBTSxHQUFOLE1BQU0sQ0FBc0I7UUFDL0MsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDdEIsUUFBRyxHQUFILEdBQUcsQ0FBVztRQTVCaEIsV0FBTSxHQUFhLEVBQUUsQ0FBQztRQThCNUIsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1lBQ2xCLE1BQU0sSUFBSSxLQUFLLENBQUMsNENBQTRDLENBQUMsQ0FBQztTQUMvRDtRQUNELElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQztJQUM3QixDQUFDO0lBckJELGFBQWE7SUFFYixJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxJQUFJLFVBQVU7UUFDWixNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDM0MsT0FBTyxNQUFNLEtBQUssWUFBWSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNyRCxDQUFDO0lBY08sUUFBUTtRQUNkLE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztRQUNqRCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNoRCxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNoRSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsU0FBUyxRQUFRLENBQUMsQ0FBQztRQUNsQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxTQUFTLGNBQWMsQ0FBQyxDQUFDO1FBQ3BFLElBQUksSUFBSTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxTQUFTLFVBQVUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNwRCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVELFlBQVk7UUFDVixNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDekIsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQzlDLE9BQU87U0FDUjtRQUNELE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxhQUE0QixDQUFDO1FBQzlDLE1BQU0sR0FBRyxHQUFHLGFBQWEsQ0FBQztRQUMxQixJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzlCLEVBQUUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzFCO1FBQ0QsSUFBSSxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDZixFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN2QjtJQUNILENBQUM7OztZQXpGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLFFBQVEsRUFBRSxJQUFJO2dCQUNkLDgvQkFBa0M7Z0JBQ2xDLElBQUksRUFBRTtvQkFDSix5QkFBeUIsRUFBRSxjQUFjO29CQUN6QywwQkFBMEIsRUFBRSxjQUFjO2lCQUMzQztnQkFDRCxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7OztZQTlCQyxVQUFVO1lBZUgsb0JBQW9CLHVCQWlEeEIsSUFBSSxZQUFJLFFBQVE7WUFyRFosaUJBQWlCO1lBTnhCLFNBQVM7OztvQkE4QlIsU0FBUyxTQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7dUJBT3BDLEtBQUs7MkJBQ0wsS0FBSztnQ0FDTCxLQUFLO29CQUNMLEtBQUs7bUJBQ0wsS0FBSztrQkFDTCxLQUFLO3NCQUNMLEtBQUs7bUJBQ0wsS0FBSzs7QUFGc0I7SUFBbEIsV0FBVyxDQUFDLElBQUksQ0FBQzt3Q0FBYTtBQUNYO0lBQW5CLFlBQVksQ0FBQyxJQUFJLENBQUM7NENBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT3B0aW9uYWwsXG4gIFJlbmRlcmVyMixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFJlc3BvbnNpdmVTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IGlzRW1wdHkgfSBmcm9tICdAZGVsb24vdXRpbC9icm93c2VyJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciwgTnVtYmVySW5wdXQgfSBmcm9tICdAZGVsb24vdXRpbC9kZWNvcmF0b3InO1xuXG5pbXBvcnQgeyBTVkNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vc3YtY29udGFpbmVyLmNvbXBvbmVudCc7XG5cbmNvbnN0IHByZWZpeENscyA9IGBzdmA7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N2LCBbc3ZdJyxcbiAgZXhwb3J0QXM6ICdzdicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdi5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICAnW3N0eWxlLnBhZGRpbmctbGVmdC5weF0nOiAncGFkZGluZ1ZhbHVlJyxcbiAgICAnW3N0eWxlLnBhZGRpbmctcmlnaHQucHhdJzogJ3BhZGRpbmdWYWx1ZSdcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFNWQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2NvbDogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9kZWZhdWx0OiBCb29sZWFuSW5wdXQ7XG5cbiAgQFZpZXdDaGlsZCgnY29uRWwnLCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgcHJpdmF0ZSBjb25FbDogRWxlbWVudFJlZjtcbiAgcHJpdmF0ZSBlbDogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgY2xzTWFwOiBzdHJpbmdbXSA9IFtdO1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgQElucHV0KCkgb3B0aW9uYWw6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBvcHRpb25hbEhlbHA6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBvcHRpb25hbEhlbHBDb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIHVuaXQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIobnVsbCkgY29sOiBudW1iZXI7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4obnVsbCkgZGVmYXVsdDogYm9vbGVhbjtcbiAgQElucHV0KCkgdHlwZTogJ3ByaW1hcnknIHwgJ3N1Y2Nlc3MnIHwgJ2RhbmdlcicgfCAnd2FybmluZyc7XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGdldCBwYWRkaW5nVmFsdWUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuZ3V0dGVyIC8gMjtcbiAgfVxuXG4gIGdldCBsYWJlbFdpZHRoKCk6IG51bWJlciB8IG51bGwge1xuICAgIGNvbnN0IHsgbGFiZWxXaWR0aCwgbGF5b3V0IH0gPSB0aGlzLnBhcmVudDtcbiAgICByZXR1cm4gbGF5b3V0ID09PSAnaG9yaXpvbnRhbCcgPyBsYWJlbFdpZHRoIDogbnVsbDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGVsOiBFbGVtZW50UmVmLFxuICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIHBhcmVudDogU1ZDb250YWluZXJDb21wb25lbnQsXG4gICAgcHJpdmF0ZSByZXA6IFJlc3BvbnNpdmVTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVuOiBSZW5kZXJlcjJcbiAgKSB7XG4gICAgaWYgKHBhcmVudCA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFtzdl0gbXVzdCBpbmNsdWRlICdzdi1jb250YWluZXInIGNvbXBvbmVudGApO1xuICAgIH1cbiAgICB0aGlzLmVsID0gZWwubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIHByaXZhdGUgc2V0Q2xhc3MoKTogdm9pZCB7XG4gICAgY29uc3QgeyBlbCwgcmVuLCBjb2wsIGNsc01hcCwgdHlwZSwgcmVwIH0gPSB0aGlzO1xuICAgIGNsc01hcC5mb3JFYWNoKGNscyA9PiByZW4ucmVtb3ZlQ2xhc3MoZWwsIGNscykpO1xuICAgIGNsc01hcC5sZW5ndGggPSAwO1xuICAgIGNsc01hcC5wdXNoKC4uLnJlcC5nZW5DbHMoY29sICE9IG51bGwgPyBjb2wgOiB0aGlzLnBhcmVudC5jb2wpKTtcbiAgICBjbHNNYXAucHVzaChgJHtwcmVmaXhDbHN9X19pdGVtYCk7XG4gICAgaWYgKHRoaXMucGFyZW50LmxhYmVsV2lkdGgpIGNsc01hcC5wdXNoKGAke3ByZWZpeENsc31fX2l0ZW0tZml4ZWRgKTtcbiAgICBpZiAodHlwZSkgY2xzTWFwLnB1c2goYCR7cHJlZml4Q2xzfV9fdHlwZS0ke3R5cGV9YCk7XG4gICAgY2xzTWFwLmZvckVhY2goY2xzID0+IHJlbi5hZGRDbGFzcyhlbCwgY2xzKSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRDbGFzcygpO1xuICAgIHRoaXMuY2hlY2tDb250ZW50KCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLnNldENsYXNzKCk7XG4gIH1cblxuICBjaGVja0NvbnRlbnQoKTogdm9pZCB7XG4gICAgY29uc3QgeyBjb25FbCB9ID0gdGhpcztcbiAgICBjb25zdCBkZWYgPSB0aGlzLmRlZmF1bHQ7XG4gICAgaWYgKCEoZGVmICE9IG51bGwgPyBkZWYgOiB0aGlzLnBhcmVudC5kZWZhdWx0KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBlbCA9IGNvbkVsLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgY2xzID0gYHN2X19kZWZhdWx0YDtcbiAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKGNscykpIHtcbiAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoY2xzKTtcbiAgICB9XG4gICAgaWYgKGlzRW1wdHkoZWwpKSB7XG4gICAgICBlbC5jbGFzc0xpc3QuYWRkKGNscyk7XG4gICAgfVxuICB9XG59XG4iXX0=