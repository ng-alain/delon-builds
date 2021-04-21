import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { G2BaseComponent, genMiniTooltipOptions } from '@delon/chart/core';
import { InputNumber } from '@delon/util/decorator';
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
        const chart = (this._chart = new window.G2.Chart({
            container: el.nativeElement,
            autoFit: true,
            height,
            padding,
            theme,
        }));
        chart.scale({
            x: {
                type: 'cat',
            },
            y: {
                min: 0,
            },
        });
        chart.legend(false);
        chart.axis(false);
        chart.tooltip(genMiniTooltipOptions(tooltipType, { showCrosshairs: false }));
        chart
            .interval()
            .position('x*y')
            .color(color)
            .size(borderWidth)
            .tooltip('x*y', (x, y) => ({ name: x, value: y + yTooltipSuffix }));
        chart.on(`interval:click`, (ev) => {
            this.ngZone.run(() => { var _a; return this.clickItem.emit({ item: (_a = ev.data) === null || _a === void 0 ? void 0 : _a.data, ev }); });
        });
        this.changeData();
        chart.render();
    }
    changeData() {
        const { _chart, data } = this;
        if (!_chart || !Array.isArray(data) || data.length <= 0)
            return;
        _chart.changeData(data);
    }
}
G2MiniBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'g2-mini-bar',
                exportAs: 'g2MiniBar',
                template: ``,
                host: {
                    '[style.height.px]': 'height',
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            },] }
];
G2MiniBarComponent.propDecorators = {
    color: [{ type: Input }],
    height: [{ type: Input }],
    borderWidth: [{ type: Input }],
    padding: [{ type: Input }],
    data: [{ type: Input }],
    yTooltipSuffix: [{ type: Input }],
    tooltipType: [{ type: Input }],
    clickItem: [{ type: Output }]
};
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2MiniBarComponent.prototype, "height", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2MiniBarComponent.prototype, "borderWidth", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluaS1iYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY2hhcnQvbWluaS1iYXIvbWluaS1iYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5ILE9BQU8sRUFBRSxlQUFlLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMzRSxPQUFPLEVBQUUsV0FBVyxFQUFlLE1BQU0sdUJBQXVCLENBQUM7QUF5QmpFLE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxlQUFlO0lBWHZEOztRQWVFLGlCQUFpQjtRQUVSLFVBQUssR0FBRyxTQUFTLENBQUM7UUFDSCxXQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsZ0JBQVcsR0FBRyxDQUFDLENBQUM7UUFDL0IsWUFBTyxHQUErQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ25ELFNBQUksR0FBb0IsRUFBRSxDQUFDO1FBQzNCLG1CQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLGdCQUFXLEdBQXVCLFNBQVMsQ0FBQztRQUMzQyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQXNCLENBQUM7SUE0Qy9ELENBQUM7SUExQ0MsYUFBYTtJQUViLE9BQU87UUFDTCxNQUFNLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxHQUFHLElBQUksQ0FBQztRQUM3RixNQUFNLEtBQUssR0FBVSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSyxNQUFjLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUMvRCxTQUFTLEVBQUUsRUFBRSxDQUFDLGFBQWE7WUFDM0IsT0FBTyxFQUFFLElBQUk7WUFDYixNQUFNO1lBQ04sT0FBTztZQUNQLEtBQUs7U0FDTixDQUFDLENBQUMsQ0FBQztRQUNKLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDVixDQUFDLEVBQUU7Z0JBQ0QsSUFBSSxFQUFFLEtBQUs7YUFDWjtZQUNELENBQUMsRUFBRTtnQkFDRCxHQUFHLEVBQUUsQ0FBQzthQUNQO1NBQ0YsQ0FBQyxDQUFDO1FBQ0gsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwQixLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xCLEtBQUssQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsV0FBVyxFQUFFLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM3RSxLQUFLO2FBQ0YsUUFBUSxFQUFFO2FBQ1YsUUFBUSxDQUFDLEtBQUssQ0FBQzthQUNmLEtBQUssQ0FBQyxLQUFLLENBQUM7YUFDWixJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ2pCLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFZLEVBQUUsQ0FBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxHQUFHLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUU1RixLQUFLLENBQUMsRUFBRSxDQUFDLGdCQUFnQixFQUFFLENBQUMsRUFBUyxFQUFFLEVBQUU7WUFDdkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFdBQUMsT0FBQSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksUUFBRSxFQUFFLENBQUMsSUFBSSwwQ0FBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQSxFQUFBLENBQUMsQ0FBQztRQUMxRSxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELFVBQVU7UUFDUixNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQztRQUM5QixJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUM7WUFBRSxPQUFPO1FBQ2hFLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7O1lBbkVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFFBQVEsRUFBRSxFQUFFO2dCQUNaLElBQUksRUFBRTtvQkFDSixtQkFBbUIsRUFBRSxRQUFRO2lCQUM5QjtnQkFDRCxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7OztvQkFPRSxLQUFLO3FCQUNMLEtBQUs7MEJBQ0wsS0FBSztzQkFDTCxLQUFLO21CQUNMLEtBQUs7NkJBQ0wsS0FBSzswQkFDTCxLQUFLO3dCQUNMLE1BQU07O0FBTmlCO0lBQWQsV0FBVyxFQUFFOztrREFBWTtBQUNYO0lBQWQsV0FBVyxFQUFFOzt1REFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDaGFydCwgRXZlbnQgfSBmcm9tICdAYW50di9nMic7XG5pbXBvcnQgeyBHMkJhc2VDb21wb25lbnQsIGdlbk1pbmlUb29sdGlwT3B0aW9ucyB9IGZyb20gJ0BkZWxvbi9jaGFydC9jb3JlJztcbmltcG9ydCB7IElucHV0TnVtYmVyLCBOdW1iZXJJbnB1dCB9IGZyb20gJ0BkZWxvbi91dGlsL2RlY29yYXRvcic7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEcyTWluaUJhckRhdGEge1xuICB4OiBhbnk7XG4gIHk6IGFueTtcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEcyTWluaUJhckNsaWNrSXRlbSB7XG4gIGl0ZW06IEcyTWluaUJhckRhdGE7XG4gIGV2OiBFdmVudDtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZzItbWluaS1iYXInLFxuICBleHBvcnRBczogJ2cyTWluaUJhcicsXG4gIHRlbXBsYXRlOiBgYCxcbiAgaG9zdDoge1xuICAgICdbc3R5bGUuaGVpZ2h0LnB4XSc6ICdoZWlnaHQnLFxuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIEcyTWluaUJhckNvbXBvbmVudCBleHRlbmRzIEcyQmFzZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9oZWlnaHQ6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfYm9yZGVyV2lkdGg6IE51bWJlcklucHV0O1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgQElucHV0KCkgY29sb3IgPSAnIzE4OTBGRic7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGhlaWdodCA9IDA7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGJvcmRlcldpZHRoID0gNTtcbiAgQElucHV0KCkgcGFkZGluZzogbnVtYmVyIHwgbnVtYmVyW10gfCAnYXV0bycgPSBbOCwgOCwgOCwgOF07XG4gIEBJbnB1dCgpIGRhdGE6IEcyTWluaUJhckRhdGFbXSA9IFtdO1xuICBASW5wdXQoKSB5VG9vbHRpcFN1ZmZpeCA9ICcnO1xuICBASW5wdXQoKSB0b29sdGlwVHlwZTogJ21pbmknIHwgJ2RlZmF1bHQnID0gJ2RlZmF1bHQnO1xuICBAT3V0cHV0KCkgY2xpY2tJdGVtID0gbmV3IEV2ZW50RW1pdHRlcjxHMk1pbmlCYXJDbGlja0l0ZW0+KCk7XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGluc3RhbGwoKTogdm9pZCB7XG4gICAgY29uc3QgeyBlbCwgaGVpZ2h0LCBwYWRkaW5nLCB5VG9vbHRpcFN1ZmZpeCwgdG9vbHRpcFR5cGUsIHRoZW1lLCBjb2xvciwgYm9yZGVyV2lkdGggfSA9IHRoaXM7XG4gICAgY29uc3QgY2hhcnQ6IENoYXJ0ID0gKHRoaXMuX2NoYXJ0ID0gbmV3ICh3aW5kb3cgYXMgYW55KS5HMi5DaGFydCh7XG4gICAgICBjb250YWluZXI6IGVsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICBhdXRvRml0OiB0cnVlLFxuICAgICAgaGVpZ2h0LFxuICAgICAgcGFkZGluZyxcbiAgICAgIHRoZW1lLFxuICAgIH0pKTtcbiAgICBjaGFydC5zY2FsZSh7XG4gICAgICB4OiB7XG4gICAgICAgIHR5cGU6ICdjYXQnLFxuICAgICAgfSxcbiAgICAgIHk6IHtcbiAgICAgICAgbWluOiAwLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBjaGFydC5sZWdlbmQoZmFsc2UpO1xuICAgIGNoYXJ0LmF4aXMoZmFsc2UpO1xuICAgIGNoYXJ0LnRvb2x0aXAoZ2VuTWluaVRvb2x0aXBPcHRpb25zKHRvb2x0aXBUeXBlLCB7IHNob3dDcm9zc2hhaXJzOiBmYWxzZSB9KSk7XG4gICAgY2hhcnRcbiAgICAgIC5pbnRlcnZhbCgpXG4gICAgICAucG9zaXRpb24oJ3gqeScpXG4gICAgICAuY29sb3IoY29sb3IpXG4gICAgICAuc2l6ZShib3JkZXJXaWR0aClcbiAgICAgIC50b29sdGlwKCd4KnknLCAoeDogTnpTYWZlQW55LCB5OiBOelNhZmVBbnkpID0+ICh7IG5hbWU6IHgsIHZhbHVlOiB5ICsgeVRvb2x0aXBTdWZmaXggfSkpO1xuXG4gICAgY2hhcnQub24oYGludGVydmFsOmNsaWNrYCwgKGV2OiBFdmVudCkgPT4ge1xuICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMuY2xpY2tJdGVtLmVtaXQoeyBpdGVtOiBldi5kYXRhPy5kYXRhLCBldiB9KSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmNoYW5nZURhdGEoKTtcbiAgICBjaGFydC5yZW5kZXIoKTtcbiAgfVxuXG4gIGNoYW5nZURhdGEoKTogdm9pZCB7XG4gICAgY29uc3QgeyBfY2hhcnQsIGRhdGEgfSA9IHRoaXM7XG4gICAgaWYgKCFfY2hhcnQgfHwgIUFycmF5LmlzQXJyYXkoZGF0YSkgfHwgZGF0YS5sZW5ndGggPD0gMCkgcmV0dXJuO1xuICAgIF9jaGFydC5jaGFuZ2VEYXRhKGRhdGEpO1xuICB9XG59XG4iXX0=