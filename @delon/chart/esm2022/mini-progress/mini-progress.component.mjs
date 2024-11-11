import { NgStyle } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewEncapsulation, inject, numberAttribute } from '@angular/core';
import { DelonLocaleService } from '@delon/theme';
import { NzTooltipDirective } from 'ng-zorro-antd/tooltip';
import * as i0 from "@angular/core";
export class G2MiniProgressComponent {
    constructor() {
        this.i18n = inject(DelonLocaleService);
        this.cdr = inject(ChangeDetectorRef);
        this.color = '#1890FF';
    }
    fixNum(value) {
        return Math.min(Math.max(numberAttribute(value), 0), 100);
    }
    ngOnChanges() {
        this.target = this.fixNum(this.target);
        this.percent = this.fixNum(this.percent);
        this.cdr.detectChanges();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.11", ngImport: i0, type: G2MiniProgressComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "18.2.11", type: G2MiniProgressComponent, isStandalone: true, selector: "g2-mini-progress", inputs: { color: "color", target: ["target", "target", numberAttribute], percent: ["percent", "percent", numberAttribute], strokeWidth: ["strokeWidth", "strokeWidth", numberAttribute] }, host: { properties: { "class.g2-mini-progress": "true" } }, exportAs: ["g2MiniProgress"], usesOnChanges: true, ngImport: i0, template: "<div\n  nz-tooltip\n  [nzTooltipTitle]=\"i18n.getData('miniProgress').target + target + '%'\"\n  class=\"g2-mini-progress__target\"\n  [ngStyle]=\"{ 'left.%': target }\"\n>\n  <span class=\"g2-mini-progress__target-item\" [ngStyle]=\"{ 'background-color': color }\"></span>\n  <span class=\"g2-mini-progress__target-item\" [ngStyle]=\"{ 'background-color': color }\"></span>\n</div>\n<div class=\"g2-mini-progress__wrap\">\n  <div\n    class=\"g2-mini-progress__value\"\n    [ngStyle]=\"{ 'background-color': color, 'width.%': percent, 'height.px': strokeWidth }\"\n  ></div>\n</div>\n", dependencies: [{ kind: "directive", type: NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "cdkConnectedOverlayPush", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }, { kind: "directive", type: NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.11", ngImport: i0, type: G2MiniProgressComponent, decorators: [{
            type: Component,
            args: [{ selector: 'g2-mini-progress', exportAs: 'g2MiniProgress', host: { '[class.g2-mini-progress]': 'true' }, preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, standalone: true, imports: [NzTooltipDirective, NgStyle], template: "<div\n  nz-tooltip\n  [nzTooltipTitle]=\"i18n.getData('miniProgress').target + target + '%'\"\n  class=\"g2-mini-progress__target\"\n  [ngStyle]=\"{ 'left.%': target }\"\n>\n  <span class=\"g2-mini-progress__target-item\" [ngStyle]=\"{ 'background-color': color }\"></span>\n  <span class=\"g2-mini-progress__target-item\" [ngStyle]=\"{ 'background-color': color }\"></span>\n</div>\n<div class=\"g2-mini-progress__wrap\">\n  <div\n    class=\"g2-mini-progress__value\"\n    [ngStyle]=\"{ 'background-color': color, 'width.%': percent, 'height.px': strokeWidth }\"\n  ></div>\n</div>\n" }]
        }], propDecorators: { color: [{
                type: Input
            }], target: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], percent: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], strokeWidth: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluaS1wcm9ncmVzcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jaGFydC9taW5pLXByb2dyZXNzL21pbmktcHJvZ3Jlc3MuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY2hhcnQvbWluaS1wcm9ncmVzcy9taW5pLXByb2dyZXNzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMxQyxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsS0FBSyxFQUVMLGlCQUFpQixFQUNqQixNQUFNLEVBQ04sZUFBZSxFQUNoQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDbEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0FBYTNELE1BQU0sT0FBTyx1QkFBdUI7SUFYcEM7UUFZVyxTQUFJLEdBQUcsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDMUIsUUFBRyxHQUFHLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBRXhDLFVBQUssR0FBRyxTQUFTLENBQUM7S0FjNUI7SUFUUyxNQUFNLENBQUMsS0FBZ0M7UUFDN0MsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDM0IsQ0FBQzsrR0FqQlUsdUJBQXVCO21HQUF2Qix1QkFBdUIsMkdBS2QsZUFBZSxtQ0FDZixlQUFlLCtDQUNmLGVBQWUsNElDakNyQywya0JBZUEsNENEU1ksa0JBQWtCLHFjQUFFLE9BQU87OzRGQUUxQix1QkFBdUI7a0JBWG5DLFNBQVM7K0JBQ0Usa0JBQWtCLFlBQ2xCLGdCQUFnQixRQUVwQixFQUFFLDBCQUEwQixFQUFFLE1BQU0sRUFBRSx1QkFDdkIsS0FBSyxtQkFDVCx1QkFBdUIsQ0FBQyxNQUFNLGlCQUNoQyxpQkFBaUIsQ0FBQyxJQUFJLGNBQ3pCLElBQUksV0FDUCxDQUFDLGtCQUFrQixFQUFFLE9BQU8sQ0FBQzs4QkFNN0IsS0FBSztzQkFBYixLQUFLO2dCQUNpQyxNQUFNO3NCQUE1QyxLQUFLO3VCQUFDLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRTtnQkFDRSxPQUFPO3NCQUE3QyxLQUFLO3VCQUFDLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRTtnQkFDRSxXQUFXO3NCQUFqRCxLQUFLO3VCQUFDLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nU3R5bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBpbmplY3QsXG4gIG51bWJlckF0dHJpYnV0ZVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRGVsb25Mb2NhbGVTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IE56VG9vbHRpcERpcmVjdGl2ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvdG9vbHRpcCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2cyLW1pbmktcHJvZ3Jlc3MnLFxuICBleHBvcnRBczogJ2cyTWluaVByb2dyZXNzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21pbmktcHJvZ3Jlc3MuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7ICdbY2xhc3MuZzItbWluaS1wcm9ncmVzc10nOiAndHJ1ZScgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTnpUb29sdGlwRGlyZWN0aXZlLCBOZ1N0eWxlXVxufSlcbmV4cG9ydCBjbGFzcyBHMk1pbmlQcm9ncmVzc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIHJlYWRvbmx5IGkxOG4gPSBpbmplY3QoRGVsb25Mb2NhbGVTZXJ2aWNlKTtcbiAgcHJpdmF0ZSByZWFkb25seSBjZHIgPSBpbmplY3QoQ2hhbmdlRGV0ZWN0b3JSZWYpO1xuXG4gIEBJbnB1dCgpIGNvbG9yID0gJyMxODkwRkYnO1xuICBASW5wdXQoeyB0cmFuc2Zvcm06IG51bWJlckF0dHJpYnV0ZSB9KSB0YXJnZXQ/OiBudW1iZXIgfCBudWxsO1xuICBASW5wdXQoeyB0cmFuc2Zvcm06IG51bWJlckF0dHJpYnV0ZSB9KSBwZXJjZW50PzogbnVtYmVyIHwgbnVsbDtcbiAgQElucHV0KHsgdHJhbnNmb3JtOiBudW1iZXJBdHRyaWJ1dGUgfSkgc3Ryb2tlV2lkdGg/OiBudW1iZXIgfCBudWxsO1xuXG4gIHByaXZhdGUgZml4TnVtKHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQgfCBudWxsKTogbnVtYmVyIHtcbiAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgobnVtYmVyQXR0cmlidXRlKHZhbHVlKSwgMCksIDEwMCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLnRhcmdldCA9IHRoaXMuZml4TnVtKHRoaXMudGFyZ2V0KTtcbiAgICB0aGlzLnBlcmNlbnQgPSB0aGlzLmZpeE51bSh0aGlzLnBlcmNlbnQpO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxufVxuIiwiPGRpdlxuICBuei10b29sdGlwXG4gIFtuelRvb2x0aXBUaXRsZV09XCJpMThuLmdldERhdGEoJ21pbmlQcm9ncmVzcycpLnRhcmdldCArIHRhcmdldCArICclJ1wiXG4gIGNsYXNzPVwiZzItbWluaS1wcm9ncmVzc19fdGFyZ2V0XCJcbiAgW25nU3R5bGVdPVwieyAnbGVmdC4lJzogdGFyZ2V0IH1cIlxuPlxuICA8c3BhbiBjbGFzcz1cImcyLW1pbmktcHJvZ3Jlc3NfX3RhcmdldC1pdGVtXCIgW25nU3R5bGVdPVwieyAnYmFja2dyb3VuZC1jb2xvcic6IGNvbG9yIH1cIj48L3NwYW4+XG4gIDxzcGFuIGNsYXNzPVwiZzItbWluaS1wcm9ncmVzc19fdGFyZ2V0LWl0ZW1cIiBbbmdTdHlsZV09XCJ7ICdiYWNrZ3JvdW5kLWNvbG9yJzogY29sb3IgfVwiPjwvc3Bhbj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cImcyLW1pbmktcHJvZ3Jlc3NfX3dyYXBcIj5cbiAgPGRpdlxuICAgIGNsYXNzPVwiZzItbWluaS1wcm9ncmVzc19fdmFsdWVcIlxuICAgIFtuZ1N0eWxlXT1cInsgJ2JhY2tncm91bmQtY29sb3InOiBjb2xvciwgJ3dpZHRoLiUnOiBwZXJjZW50LCAnaGVpZ2h0LnB4Jzogc3Ryb2tlV2lkdGggfVwiXG4gID48L2Rpdj5cbjwvZGl2PlxuIl19