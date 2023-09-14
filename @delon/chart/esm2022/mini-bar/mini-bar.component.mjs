import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { G2BaseComponent, genMiniTooltipOptions } from '@delon/chart/core';
import { InputNumber } from '@delon/util/decorator';
import * as i0 from "@angular/core";
export class G2MiniBarComponent extends G2BaseComponent {
    constructor() {
        super(...arguments);
        // #region fields
        this.color = '#1890FF';
        this.height = 0;
        this.borderWidth = 5;
        this.padding = [8, 8, 8, 8];
        this.data = [];
        this.yTooltipSuffix = '';
        this.tooltipType = 'default';
        this.clickItem = new EventEmitter();
    }
    // #endregion
    install() {
        const { el, height, padding, yTooltipSuffix, tooltipType, theme, color, borderWidth } = this;
        const chart = (this._chart = new this.winG2.Chart({
            container: el.nativeElement,
            autoFit: true,
            height,
            padding,
            theme
        }));
        chart.scale({
            x: {
                type: 'cat'
            },
            y: {
                min: 0
            }
        });
        chart.legend(false);
        chart.axis(false);
        chart.tooltip(genMiniTooltipOptions(tooltipType, { showCrosshairs: false }));
        chart
            .interval()
            .position('x*y')
            .color('x*y', (x, y) => {
            const colorItem = this.data.find(w => w.x === x && w.y === y);
            return colorItem && colorItem.color ? colorItem.color : color;
        })
            .size(borderWidth)
            .tooltip('x*y', (x, y) => ({ name: x, value: y + yTooltipSuffix }));
        chart.on(`interval:click`, (ev) => {
            this.ngZone.run(() => this.clickItem.emit({ item: ev.data?.data, ev }));
        });
        this.ready.next(chart);
        this.changeData();
        chart.render();
    }
    changeData() {
        const { _chart, data } = this;
        if (!_chart || !Array.isArray(data) || data.length <= 0)
            return;
        _chart.changeData(data);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.5", ngImport: i0, type: G2MiniBarComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.5", type: G2MiniBarComponent, selector: "g2-mini-bar", inputs: { color: "color", height: "height", borderWidth: "borderWidth", padding: "padding", data: "data", yTooltipSuffix: "yTooltipSuffix", tooltipType: "tooltipType" }, outputs: { clickItem: "clickItem" }, host: { properties: { "style.height.px": "height" } }, exportAs: ["g2MiniBar"], usesInheritance: true, ngImport: i0, template: ``, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
__decorate([
    InputNumber()
], G2MiniBarComponent.prototype, "height", void 0);
__decorate([
    InputNumber()
], G2MiniBarComponent.prototype, "borderWidth", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.5", ngImport: i0, type: G2MiniBarComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'g2-mini-bar',
                    exportAs: 'g2MiniBar',
                    template: ``,
                    host: {
                        '[style.height.px]': 'height'
                    },
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }], propDecorators: { color: [{
                type: Input
            }], height: [{
                type: Input
            }], borderWidth: [{
                type: Input
            }], padding: [{
                type: Input
            }], data: [{
                type: Input
            }], yTooltipSuffix: [{
                type: Input
            }], tooltipType: [{
                type: Input
            }], clickItem: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluaS1iYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY2hhcnQvbWluaS1iYXIvbWluaS1iYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSW5ILE9BQU8sRUFBRSxlQUFlLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMzRSxPQUFPLEVBQUUsV0FBVyxFQUFlLE1BQU0sdUJBQXVCLENBQUM7O0FBMEJqRSxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsZUFBZTtJQVh2RDs7UUFlRSxpQkFBaUI7UUFFUixVQUFLLEdBQUcsU0FBUyxDQUFDO1FBQ0gsV0FBTSxHQUFHLENBQUMsQ0FBQztRQUNYLGdCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQy9CLFlBQU8sR0FBK0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNuRCxTQUFJLEdBQW9CLEVBQUUsQ0FBQztRQUMzQixtQkFBYyxHQUFHLEVBQUUsQ0FBQztRQUNwQixnQkFBVyxHQUF1QixTQUFTLENBQUM7UUFDbEMsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFzQixDQUFDO0tBaUR2RTtJQS9DQyxhQUFhO0lBRWIsT0FBTztRQUNMLE1BQU0sRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQzdGLE1BQU0sS0FBSyxHQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1lBQ3ZELFNBQVMsRUFB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O3NCQUFiLEtBQUs7Z0JBQ2tCLE1BQU07c0JBQTdCLEtBQUs7Z0JBQ2tCLFdBQVc7c0JBQWxDLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxjQUFjO3NCQUF0QixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ2EsU0FBUztzQkFBM0IsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHR5cGUgeyBDaGFydCwgRXZlbnQgfSBmcm9tICdAYW50di9nMic7XG5cbmltcG9ydCB7IEcyQmFzZUNvbXBvbmVudCwgZ2VuTWluaVRvb2x0aXBPcHRpb25zIH0gZnJvbSAnQGRlbG9uL2NoYXJ0L2NvcmUnO1xuaW1wb3J0IHsgSW5wdXROdW1iZXIsIE51bWJlcklucHV0IH0gZnJvbSAnQGRlbG9uL3V0aWwvZGVjb3JhdG9yJztcbmltcG9ydCB0eXBlIHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBHMk1pbmlCYXJEYXRhIHtcbiAgeDogTnpTYWZlQW55O1xuICB5OiBOelNhZmVBbnk7XG4gIGNvbG9yPzogc3RyaW5nIHwgbnVsbDtcbiAgW2tleTogc3RyaW5nXTogTnpTYWZlQW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEcyTWluaUJhckNsaWNrSXRlbSB7XG4gIGl0ZW06IEcyTWluaUJhckRhdGE7XG4gIGV2OiBFdmVudDtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZzItbWluaS1iYXInLFxuICBleHBvcnRBczogJ2cyTWluaUJhcicsXG4gIHRlbXBsYXRlOiBgYCxcbiAgaG9zdDoge1xuICAgICdbc3R5bGUuaGVpZ2h0LnB4XSc6ICdoZWlnaHQnXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBHMk1pbmlCYXJDb21wb25lbnQgZXh0ZW5kcyBHMkJhc2VDb21wb25lbnQge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfaGVpZ2h0OiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2JvcmRlcldpZHRoOiBOdW1iZXJJbnB1dDtcblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIEBJbnB1dCgpIGNvbG9yID0gJyMxODkwRkYnO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBoZWlnaHQgPSAwO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBib3JkZXJXaWR0aCA9IDU7XG4gIEBJbnB1dCgpIHBhZGRpbmc6IG51bWJlciB8IG51bWJlcltdIHwgJ2F1dG8nID0gWzgsIDgsIDgsIDhdO1xuICBASW5wdXQoKSBkYXRhOiBHMk1pbmlCYXJEYXRhW10gPSBbXTtcbiAgQElucHV0KCkgeVRvb2x0aXBTdWZmaXggPSAnJztcbiAgQElucHV0KCkgdG9vbHRpcFR5cGU6ICdtaW5pJyB8ICdkZWZhdWx0JyA9ICdkZWZhdWx0JztcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNsaWNrSXRlbSA9IG5ldyBFdmVudEVtaXR0ZXI8RzJNaW5pQmFyQ2xpY2tJdGVtPigpO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBpbnN0YWxsKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgZWwsIGhlaWdodCwgcGFkZGluZywgeVRvb2x0aXBTdWZmaXgsIHRvb2x0aXBUeXBlLCB0aGVtZSwgY29sb3IsIGJvcmRlcldpZHRoIH0gPSB0aGlzO1xuICAgIGNvbnN0IGNoYXJ0OiBDaGFydCA9ICh0aGlzLl9jaGFydCA9IG5ldyB0aGlzLndpbkcyLkNoYXJ0KHtcbiAgICAgIGNvbnRhaW5lcjogZWwubmF0aXZlRWxlbWVudCxcbiAgICAgIGF1dG9GaXQ6IHRydWUsXG4gICAgICBoZWlnaHQsXG4gICAgICBwYWRkaW5nLFxuICAgICAgdGhlbWVcbiAgICB9KSk7XG4gICAgY2hhcnQuc2NhbGUoe1xuICAgICAgeDoge1xuICAgICAgICB0eXBlOiAnY2F0J1xuICAgICAgfSxcbiAgICAgIHk6IHtcbiAgICAgICAgbWluOiAwXG4gICAgICB9XG4gICAgfSk7XG4gICAgY2hhcnQubGVnZW5kKGZhbHNlKTtcbiAgICBjaGFydC5heGlzKGZhbHNlKTtcbiAgICBjaGFydC50b29sdGlwKGdlbk1pbmlUb29sdGlwT3B0aW9ucyh0b29sdGlwVHlwZSwgeyBzaG93Q3Jvc3NoYWlyczogZmFsc2UgfSkpO1xuICAgIGNoYXJ0XG4gICAgICAuaW50ZXJ2YWwoKVxuICAgICAgLnBvc2l0aW9uKCd4KnknKVxuICAgICAgLmNvbG9yKCd4KnknLCAoeCwgeSkgPT4ge1xuICAgICAgICBjb25zdCBjb2xvckl0ZW0gPSB0aGlzLmRhdGEuZmluZCh3ID0+IHcueCA9PT0geCAmJiB3LnkgPT09IHkpO1xuICAgICAgICByZXR1cm4gY29sb3JJdGVtICYmIGNvbG9ySXRlbS5jb2xvciA/IGNvbG9ySXRlbS5jb2xvciA6IGNvbG9yO1xuICAgICAgfSlcbiAgICAgIC5zaXplKGJvcmRlcldpZHRoKVxuICAgICAgLnRvb2x0aXAoJ3gqeScsICh4OiBOelNhZmVBbnksIHk6IE56U2FmZUFueSkgPT4gKHsgbmFtZTogeCwgdmFsdWU6IHkgKyB5VG9vbHRpcFN1ZmZpeCB9KSk7XG5cbiAgICBjaGFydC5vbihgaW50ZXJ2YWw6Y2xpY2tgLCAoZXY6IEV2ZW50KSA9PiB7XG4gICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gdGhpcy5jbGlja0l0ZW0uZW1pdCh7IGl0ZW06IGV2LmRhdGE/LmRhdGEsIGV2IH0pKTtcbiAgICB9KTtcblxuICAgIHRoaXMucmVhZHkubmV4dChjaGFydCk7XG5cbiAgICB0aGlzLmNoYW5nZURhdGEoKTtcbiAgICBjaGFydC5yZW5kZXIoKTtcbiAgfVxuXG4gIGNoYW5nZURhdGEoKTogdm9pZCB7XG4gICAgY29uc3QgeyBfY2hhcnQsIGRhdGEgfSA9IHRoaXM7XG4gICAgaWYgKCFfY2hhcnQgfHwgIUFycmF5LmlzQXJyYXkoZGF0YSkgfHwgZGF0YS5sZW5ndGggPD0gMCkgcmV0dXJuO1xuICAgIF9jaGFydC5jaGFuZ2VEYXRhKGRhdGEpO1xuICB9XG59XG4iXX0=