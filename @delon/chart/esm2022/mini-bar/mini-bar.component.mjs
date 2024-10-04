import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation, numberAttribute } from '@angular/core';
import { G2BaseComponent, genMiniTooltipOptions } from '@delon/chart/core';
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.7", ngImport: i0, type: G2MiniBarComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "18.2.7", type: G2MiniBarComponent, isStandalone: true, selector: "g2-mini-bar", inputs: { color: "color", height: ["height", "height", numberAttribute], borderWidth: ["borderWidth", "borderWidth", numberAttribute], padding: "padding", data: "data", yTooltipSuffix: "yTooltipSuffix", tooltipType: "tooltipType" }, outputs: { clickItem: "clickItem" }, host: { properties: { "style.height.px": "height" } }, exportAs: ["g2MiniBar"], usesInheritance: true, ngImport: i0, template: ``, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.7", ngImport: i0, type: G2MiniBarComponent, decorators: [{
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
                    encapsulation: ViewEncapsulation.None,
                    standalone: true
                }]
        }], propDecorators: { color: [{
                type: Input
            }], height: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], borderWidth: [{
                type: Input,
                args: [{ transform: numberAttribute }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluaS1iYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY2hhcnQvbWluaS1iYXIvbWluaS1iYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLGlCQUFpQixFQUNqQixlQUFlLEVBQ2hCLE1BQU0sZUFBZSxDQUFDO0FBSXZCLE9BQU8sRUFBRSxlQUFlLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7QUEyQjNFLE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxlQUFlO0lBWnZEOztRQWFFLGlCQUFpQjtRQUVSLFVBQUssR0FBRyxTQUFTLENBQUM7UUFDWSxXQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsZ0JBQVcsR0FBRyxDQUFDLENBQUM7UUFDOUMsWUFBTyxHQUErQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ25ELFNBQUksR0FBb0IsRUFBRSxDQUFDO1FBQzNCLG1CQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLGdCQUFXLEdBQXVCLFNBQVMsQ0FBQztRQUNsQyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQXNCLENBQUM7S0FpRHZFO0lBL0NDLGFBQWE7SUFFYixPQUFPO1FBQ0wsTUFBTSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDN0YsTUFBTSxLQUFLLEdBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDdkQsU0FBUyxFQUFFLEVBQUUsQ0FBQyxhQUFhO1lBQzNCLE9BQU8sRUFB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LEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRTtnQkFDRSxXQUFXO3NCQUFqRCxLQUFLO3VCQUFDLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRTtnQkFDNUIsT0FBTztzQkFBZixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxjQUFjO3NCQUF0QixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ2EsU0FBUztzQkFBM0IsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIG51bWJlckF0dHJpYnV0ZVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHR5cGUgeyBDaGFydCwgRXZlbnQgfSBmcm9tICdAYW50di9nMic7XG5cbmltcG9ydCB7IEcyQmFzZUNvbXBvbmVudCwgZ2VuTWluaVRvb2x0aXBPcHRpb25zIH0gZnJvbSAnQGRlbG9uL2NoYXJ0L2NvcmUnO1xuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEcyTWluaUJhckRhdGEge1xuICB4OiBOelNhZmVBbnk7XG4gIHk6IE56U2FmZUFueTtcbiAgY29sb3I/OiBzdHJpbmcgfCBudWxsO1xuICBba2V5OiBzdHJpbmddOiBOelNhZmVBbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRzJNaW5pQmFyQ2xpY2tJdGVtIHtcbiAgaXRlbTogRzJNaW5pQmFyRGF0YTtcbiAgZXY6IEV2ZW50O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnMi1taW5pLWJhcicsXG4gIGV4cG9ydEFzOiAnZzJNaW5pQmFyJyxcbiAgdGVtcGxhdGU6IGBgLFxuICBob3N0OiB7XG4gICAgJ1tzdHlsZS5oZWlnaHQucHhdJzogJ2hlaWdodCdcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzdGFuZGFsb25lOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIEcyTWluaUJhckNvbXBvbmVudCBleHRlbmRzIEcyQmFzZUNvbXBvbmVudCB7XG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgQElucHV0KCkgY29sb3IgPSAnIzE4OTBGRic7XG4gIEBJbnB1dCh7IHRyYW5zZm9ybTogbnVtYmVyQXR0cmlidXRlIH0pIGhlaWdodCA9IDA7XG4gIEBJbnB1dCh7IHRyYW5zZm9ybTogbnVtYmVyQXR0cmlidXRlIH0pIGJvcmRlcldpZHRoID0gNTtcbiAgQElucHV0KCkgcGFkZGluZzogbnVtYmVyIHwgbnVtYmVyW10gfCAnYXV0bycgPSBbOCwgOCwgOCwgOF07XG4gIEBJbnB1dCgpIGRhdGE6IEcyTWluaUJhckRhdGFbXSA9IFtdO1xuICBASW5wdXQoKSB5VG9vbHRpcFN1ZmZpeCA9ICcnO1xuICBASW5wdXQoKSB0b29sdGlwVHlwZTogJ21pbmknIHwgJ2RlZmF1bHQnID0gJ2RlZmF1bHQnO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2xpY2tJdGVtID0gbmV3IEV2ZW50RW1pdHRlcjxHMk1pbmlCYXJDbGlja0l0ZW0+KCk7XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGluc3RhbGwoKTogdm9pZCB7XG4gICAgY29uc3QgeyBlbCwgaGVpZ2h0LCBwYWRkaW5nLCB5VG9vbHRpcFN1ZmZpeCwgdG9vbHRpcFR5cGUsIHRoZW1lLCBjb2xvciwgYm9yZGVyV2lkdGggfSA9IHRoaXM7XG4gICAgY29uc3QgY2hhcnQ6IENoYXJ0ID0gKHRoaXMuX2NoYXJ0ID0gbmV3IHRoaXMud2luRzIuQ2hhcnQoe1xuICAgICAgY29udGFpbmVyOiBlbC5uYXRpdmVFbGVtZW50LFxuICAgICAgYXV0b0ZpdDogdHJ1ZSxcbiAgICAgIGhlaWdodCxcbiAgICAgIHBhZGRpbmcsXG4gICAgICB0aGVtZVxuICAgIH0pKTtcbiAgICBjaGFydC5zY2FsZSh7XG4gICAgICB4OiB7XG4gICAgICAgIHR5cGU6ICdjYXQnXG4gICAgICB9LFxuICAgICAgeToge1xuICAgICAgICBtaW46IDBcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjaGFydC5sZWdlbmQoZmFsc2UpO1xuICAgIGNoYXJ0LmF4aXMoZmFsc2UpO1xuICAgIGNoYXJ0LnRvb2x0aXAoZ2VuTWluaVRvb2x0aXBPcHRpb25zKHRvb2x0aXBUeXBlLCB7IHNob3dDcm9zc2hhaXJzOiBmYWxzZSB9KSk7XG4gICAgY2hhcnRcbiAgICAgIC5pbnRlcnZhbCgpXG4gICAgICAucG9zaXRpb24oJ3gqeScpXG4gICAgICAuY29sb3IoJ3gqeScsICh4LCB5KSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbG9ySXRlbSA9IHRoaXMuZGF0YS5maW5kKHcgPT4gdy54ID09PSB4ICYmIHcueSA9PT0geSk7XG4gICAgICAgIHJldHVybiBjb2xvckl0ZW0gJiYgY29sb3JJdGVtLmNvbG9yID8gY29sb3JJdGVtLmNvbG9yIDogY29sb3I7XG4gICAgICB9KVxuICAgICAgLnNpemUoYm9yZGVyV2lkdGgpXG4gICAgICAudG9vbHRpcCgneCp5JywgKHg6IE56U2FmZUFueSwgeTogTnpTYWZlQW55KSA9PiAoeyBuYW1lOiB4LCB2YWx1ZTogeSArIHlUb29sdGlwU3VmZml4IH0pKTtcblxuICAgIGNoYXJ0Lm9uKGBpbnRlcnZhbDpjbGlja2AsIChldjogRXZlbnQpID0+IHtcbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB0aGlzLmNsaWNrSXRlbS5lbWl0KHsgaXRlbTogZXYuZGF0YT8uZGF0YSwgZXYgfSkpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5yZWFkeS5uZXh0KGNoYXJ0KTtcblxuICAgIHRoaXMuY2hhbmdlRGF0YSgpO1xuICAgIGNoYXJ0LnJlbmRlcigpO1xuICB9XG5cbiAgY2hhbmdlRGF0YSgpOiB2b2lkIHtcbiAgICBjb25zdCB7IF9jaGFydCwgZGF0YSB9ID0gdGhpcztcbiAgICBpZiAoIV9jaGFydCB8fCAhQXJyYXkuaXNBcnJheShkYXRhKSB8fCBkYXRhLmxlbmd0aCA8PSAwKSByZXR1cm47XG4gICAgX2NoYXJ0LmNoYW5nZURhdGEoZGF0YSk7XG4gIH1cbn1cbiJdfQ==