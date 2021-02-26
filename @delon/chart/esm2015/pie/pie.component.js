import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { G2BaseComponent } from '@delon/chart/core';
import { InputBoolean, InputNumber } from '@delon/util/decorator';
export class G2PieComponent extends G2BaseComponent {
    constructor() {
        super(...arguments);
        this.legendData = [];
        // #region fields
        this.animate = true;
        this.color = 'rgba(24, 144, 255, 0.85)';
        this.height = 0;
        this.hasLegend = false;
        this.inner = 0.75;
        this.padding = [12, 0, 12, 0];
        this.tooltip = true;
        this.lineWidth = 0;
        this.blockMaxWidth = 380;
        this.select = true;
        this.data = [];
        this.interaction = 'none';
        this.clickItem = new EventEmitter();
    }
    // #endregion
    get block() {
        return this.hasLegend && this.el.nativeElement.clientWidth <= this.blockMaxWidth;
    }
    fixData() {
        const { percent, color } = this;
        this.isPercent = percent != null;
        if (this.isPercent) {
            this.select = false;
            this.tooltip = false;
            this.percentColor = (value) => (value === '占比' ? color || 'rgba(24, 144, 255, 0.85)' : '#F0F2F5');
            this.data = [
                {
                    x: '占比',
                    y: percent,
                },
                {
                    x: '反比',
                    y: 100 - percent,
                },
            ];
        }
    }
    install() {
        const { node, height, padding, tooltip, inner, hasLegend, interaction, theme } = this;
        const chart = (this._chart = new window.G2.Chart({
            container: node.nativeElement,
            autoFit: true,
            height,
            padding,
            theme,
        }));
        if (!tooltip) {
            chart.tooltip(false);
        }
        else {
            chart.tooltip({
                showTitle: false,
                showMarkers: false,
            });
        }
        if (interaction !== 'none') {
            chart.interaction(interaction);
        }
        chart.axis(false).legend(false).coordinate('theta', { innerRadius: inner });
        chart.filter('x', (_val, item) => item.checked !== false);
        chart
            .interval()
            .adjust('stack')
            .position('y')
            .tooltip('x*percent', (name, p) => ({
            name,
            value: `${hasLegend ? p : (p * 100).toFixed(2)} %`,
        }))
            .state({});
        chart.on(`interval:click`, (ev) => {
            this.ngZone.run(() => { var _a; return this.clickItem.emit({ item: (_a = ev.data) === null || _a === void 0 ? void 0 : _a.data, ev }); });
        });
        this.attachChart();
    }
    attachChart() {
        const { _chart, height, padding, animate, data, lineWidth, isPercent, percentColor, colors } = this;
        if (!_chart)
            return;
        _chart.height = height;
        _chart.padding = padding;
        _chart.animate(animate);
        _chart.geometries[0].style({ lineWidth, stroke: '#fff' }).color('x', isPercent ? percentColor : colors);
        _chart.scale({
            x: {
                type: 'cat',
                range: [0, 1],
            },
        });
        // 转化 percent
        const totalSum = data.reduce((cur, item) => cur + item.y, 0);
        for (const item of data) {
            item.percent = totalSum === 0 ? 0 : item.y / totalSum;
        }
        _chart.changeData(data);
        _chart.render();
        this.ngZone.run(() => this.genLegend());
    }
    genLegend() {
        const { hasLegend, isPercent, cdr, _chart } = this;
        if (!hasLegend || isPercent)
            return;
        this.legendData = _chart.geometries[0].dataArray.map((item) => {
            const origin = item[0]._origin;
            origin.color = item[0].color;
            origin.checked = true;
            origin.percent = (origin.percent * 100).toFixed(2);
            return origin;
        });
        cdr.detectChanges();
    }
    _click(i) {
        const { legendData, _chart } = this;
        legendData[i].checked = !legendData[i].checked;
        _chart.render();
    }
    onChanges() {
        this.fixData();
    }
}
G2PieComponent.decorators = [
    { type: Component, args: [{
                selector: 'g2-pie',
                exportAs: 'g2Pie',
                template: "<nz-skeleton *ngIf=\"!loaded\"></nz-skeleton>\n<div class=\"g2-pie__chart\">\n  <div #container></div>\n  <div *ngIf=\"subTitle || total\" class=\"g2-pie__total\">\n    <h4 *ngIf=\"subTitle\" class=\"g2-pie__total-title\">\n      <ng-container *nzStringTemplateOutlet=\"subTitle\">\n        <div [innerHTML]=\"subTitle\"></div>\n      </ng-container>\n    </h4>\n    <div *ngIf=\"total\" class=\"g2-pie__total-stat\">\n      <ng-container *nzStringTemplateOutlet=\"total\">\n        <div [innerHTML]=\"total\"></div>\n      </ng-container>\n    </div>\n  </div>\n</div>\n<ul *ngIf=\"hasLegend && legendData?.length\" class=\"g2-pie__legend\">\n  <li *ngFor=\"let item of legendData; let index = index\" (click)=\"_click(index)\" class=\"g2-pie__legend-item\">\n    <span class=\"g2-pie__legend-dot\" [ngStyle]=\"{ 'background-color': !item.checked ? '#aaa' : item.color }\"></span>\n    <span class=\"g2-pie__legend-title\">{{ item.x }}</span>\n    <nz-divider nzType=\"vertical\"></nz-divider>\n    <span class=\"g2-pie__legend-percent\">{{ item.percent }}%</span>\n    <span class=\"g2-pie__legend-value\" [innerHTML]=\"valueFormat ? valueFormat(item.y) : item.y\"></span>\n  </li>\n</ul>\n",
                host: {
                    '[class.g2-pie]': 'true',
                    '[class.g2-pie__legend-has]': 'hasLegend',
                    '[class.g2-pie__legend-block]': 'block',
                    '[class.g2-pie__mini]': 'isPercent',
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            },] }
];
G2PieComponent.propDecorators = {
    animate: [{ type: Input }],
    color: [{ type: Input }],
    subTitle: [{ type: Input }],
    total: [{ type: Input }],
    height: [{ type: Input }],
    hasLegend: [{ type: Input }],
    inner: [{ type: Input }],
    padding: [{ type: Input }],
    percent: [{ type: Input }],
    tooltip: [{ type: Input }],
    lineWidth: [{ type: Input }],
    blockMaxWidth: [{ type: Input }],
    select: [{ type: Input }],
    valueFormat: [{ type: Input }],
    data: [{ type: Input }],
    colors: [{ type: Input }],
    interaction: [{ type: Input }],
    clickItem: [{ type: Output }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], G2PieComponent.prototype, "animate", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2PieComponent.prototype, "height", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], G2PieComponent.prototype, "hasLegend", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Number)
], G2PieComponent.prototype, "percent", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], G2PieComponent.prototype, "tooltip", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2PieComponent.prototype, "lineWidth", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2PieComponent.prototype, "blockMaxWidth", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], G2PieComponent.prototype, "select", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NoYXJ0L3BpZS9waWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFlLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWhJLE9BQU8sRUFBRSxlQUFlLEVBQXFCLE1BQU0sbUJBQW1CLENBQUM7QUFDdkUsT0FBTyxFQUFnQixZQUFZLEVBQUUsV0FBVyxFQUFlLE1BQU0sdUJBQXVCLENBQUM7QUE0QjdGLE1BQU0sT0FBTyxjQUFlLFNBQVEsZUFBZTtJQWRuRDs7UUF5QkUsZUFBVSxHQUFnQixFQUFFLENBQUM7UUFHN0IsaUJBQWlCO1FBRVEsWUFBTyxHQUFHLElBQUksQ0FBQztRQUMvQixVQUFLLEdBQUcsMEJBQTBCLENBQUM7UUFHcEIsV0FBTSxHQUFHLENBQUMsQ0FBQztRQUNWLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEMsVUFBSyxHQUFHLElBQUksQ0FBQztRQUNiLFlBQU8sR0FBK0IsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVyQyxZQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLGNBQVMsR0FBRyxDQUFDLENBQUM7UUFDZCxrQkFBYSxHQUFHLEdBQUcsQ0FBQztRQUNuQixXQUFNLEdBQUcsSUFBSSxDQUFDO1FBRTlCLFNBQUksR0FBZ0IsRUFBRSxDQUFDO1FBRXZCLGdCQUFXLEdBQXNCLE1BQU0sQ0FBQztRQUN2QyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQWtCLENBQUM7SUFxSDNELENBQUM7SUFuSEMsYUFBYTtJQUViLElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEs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ZWd5LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVGVtcGxhdGVSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDaGFydCwgRXZlbnQgfSBmcm9tICdAYW50di9nMic7XG5pbXBvcnQgeyBHMkJhc2VDb21wb25lbnQsIEcySW50ZXJhY3Rpb25UeXBlIH0gZnJvbSAnQGRlbG9uL2NoYXJ0L2NvcmUnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyLCBOdW1iZXJJbnB1dCB9IGZyb20gJ0BkZWxvbi91dGlsL2RlY29yYXRvcic7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEcyUGllRGF0YSB7XG4gIHg6IGFueTtcbiAgeTogbnVtYmVyO1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRzJQaWVDbGlja0l0ZW0ge1xuICBpdGVtOiBHMlBpZURhdGE7XG4gIGV2OiBFdmVudDtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZzItcGllJyxcbiAgZXhwb3J0QXM6ICdnMlBpZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9waWUuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5nMi1waWVdJzogJ3RydWUnLFxuICAgICdbY2xhc3MuZzItcGllX19sZWdlbmQtaGFzXSc6ICdoYXNMZWdlbmQnLFxuICAgICdbY2xhc3MuZzItcGllX19sZWdlbmQtYmxvY2tdJzogJ2Jsb2NrJyxcbiAgICAnW2NsYXNzLmcyLXBpZV9fbWluaV0nOiAnaXNQZXJjZW50JyxcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBHMlBpZUNvbXBvbmVudCBleHRlbmRzIEcyQmFzZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9oZWlnaHQ6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfYW5pbWF0ZTogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfaGFzTGVnZW5kOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9wZXJjZW50OiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3Rvb2x0aXA6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2xpbmVXaWR0aDogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9ibG9ja01heFdpZHRoOiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3NlbGVjdDogQm9vbGVhbklucHV0O1xuXG4gIHByaXZhdGUgcGVyY2VudENvbG9yOiAodmFsdWU6IHN0cmluZykgPT4gc3RyaW5nO1xuICBsZWdlbmREYXRhOiBOelNhZmVBbnlbXSA9IFtdO1xuICBpc1BlcmNlbnQ6IGJvb2xlYW47XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYW5pbWF0ZSA9IHRydWU7XG4gIEBJbnB1dCgpIGNvbG9yID0gJ3JnYmEoMjQsIDE0NCwgMjU1LCAwLjg1KSc7XG4gIEBJbnB1dCgpIHN1YlRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgdG90YWw6IHN0cmluZyB8IG51bWJlciB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBoZWlnaHQgPSAwO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgaGFzTGVnZW5kID0gZmFsc2U7XG4gIEBJbnB1dCgpIGlubmVyID0gMC43NTtcbiAgQElucHV0KCkgcGFkZGluZzogbnVtYmVyIHwgbnVtYmVyW10gfCAnYXV0bycgPSBbMTIsIDAsIDEyLCAwXTtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgcGVyY2VudDogbnVtYmVyO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgdG9vbHRpcCA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGxpbmVXaWR0aCA9IDA7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGJsb2NrTWF4V2lkdGggPSAzODA7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzZWxlY3QgPSB0cnVlO1xuICBASW5wdXQoKSB2YWx1ZUZvcm1hdDogKHk6IG51bWJlcikgPT4gc3RyaW5nO1xuICBASW5wdXQoKSBkYXRhOiBHMlBpZURhdGFbXSA9IFtdO1xuICBASW5wdXQoKSBjb2xvcnM6IGFueVtdO1xuICBASW5wdXQoKSBpbnRlcmFjdGlvbjogRzJJbnRlcmFjdGlvblR5cGUgPSAnbm9uZSc7XG4gIEBPdXRwdXQoKSBjbGlja0l0ZW0gPSBuZXcgRXZlbnRFbWl0dGVyPEcyUGllQ2xpY2tJdGVtPigpO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBnZXQgYmxvY2soKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaGFzTGVnZW5kICYmIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aCA8PSB0aGlzLmJsb2NrTWF4V2lkdGg7XG4gIH1cblxuICBwcml2YXRlIGZpeERhdGEoKTogdm9pZCB7XG4gICAgY29uc3QgeyBwZXJjZW50LCBjb2xvciB9ID0gdGhpcztcbiAgICB0aGlzLmlzUGVyY2VudCA9IHBlcmNlbnQgIT0gbnVsbDtcbiAgICBpZiAodGhpcy5pc1BlcmNlbnQpIHtcbiAgICAgIHRoaXMuc2VsZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLnRvb2x0aXAgPSBmYWxzZTtcbiAgICAgIHRoaXMucGVyY2VudENvbG9yID0gKHZhbHVlOiBzdHJpbmcpID0+ICh2YWx1ZSA9PT0gJ+WNoOavlCcgPyBjb2xvciB8fCAncmdiYSgyNCwgMTQ0LCAyNTUsIDAuODUpJyA6ICcjRjBGMkY1Jyk7XG4gICAgICB0aGlzLmRhdGEgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICB4OiAn5Y2g5q+UJyxcbiAgICAgICAgICB5OiBwZXJjZW50LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgeDogJ+WPjeavlCcsXG4gICAgICAgICAgeTogMTAwIC0gcGVyY2VudCxcbiAgICAgICAgfSxcbiAgICAgIF07XG4gICAgfVxuICB9XG5cbiAgaW5zdGFsbCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IG5vZGUsIGhlaWdodCwgcGFkZGluZywgdG9vbHRpcCwgaW5uZXIsIGhhc0xlZ2VuZCwgaW50ZXJhY3Rpb24sIHRoZW1lIH0gPSB0aGlzO1xuICAgIGNvbnN0IGNoYXJ0OiBDaGFydCA9ICh0aGlzLl9jaGFydCA9IG5ldyAod2luZG93IGFzIGFueSkuRzIuQ2hhcnQoe1xuICAgICAgY29udGFpbmVyOiBub2RlLm5hdGl2ZUVsZW1lbnQsXG4gICAgICBhdXRvRml0OiB0cnVlLFxuICAgICAgaGVpZ2h0LFxuICAgICAgcGFkZGluZyxcbiAgICAgIHRoZW1lLFxuICAgIH0pKTtcblxuICAgIGlmICghdG9vbHRpcCkge1xuICAgICAgY2hhcnQudG9vbHRpcChmYWxzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoYXJ0LnRvb2x0aXAoe1xuICAgICAgICBzaG93VGl0bGU6IGZhbHNlLFxuICAgICAgICBzaG93TWFya2VyczogZmFsc2UsXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGludGVyYWN0aW9uICE9PSAnbm9uZScpIHtcbiAgICAgIGNoYXJ0LmludGVyYWN0aW9uKGludGVyYWN0aW9uKTtcbiAgICB9XG4gICAgY2hhcnQuYXhpcyhmYWxzZSkubGVnZW5kKGZhbHNlKS5jb29yZGluYXRlKCd0aGV0YScsIHsgaW5uZXJSYWRpdXM6IGlubmVyIH0pO1xuICAgIGNoYXJ0LmZpbHRlcigneCcsIChfdmFsOiBhbnksIGl0ZW06IGFueSkgPT4gaXRlbS5jaGVja2VkICE9PSBmYWxzZSk7XG4gICAgY2hhcnRcbiAgICAgIC5pbnRlcnZhbCgpXG4gICAgICAuYWRqdXN0KCdzdGFjaycpXG4gICAgICAucG9zaXRpb24oJ3knKVxuICAgICAgLnRvb2x0aXAoJ3gqcGVyY2VudCcsIChuYW1lOiBzdHJpbmcsIHA6IG51bWJlcikgPT4gKHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgdmFsdWU6IGAke2hhc0xlZ2VuZCA/IHAgOiAocCAqIDEwMCkudG9GaXhlZCgyKX0gJWAsXG4gICAgICB9KSlcbiAgICAgIC5zdGF0ZSh7fSk7XG5cbiAgICBjaGFydC5vbihgaW50ZXJ2YWw6Y2xpY2tgLCAoZXY6IEV2ZW50KSA9PiB7XG4gICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gdGhpcy5jbGlja0l0ZW0uZW1pdCh7IGl0ZW06IGV2LmRhdGE/LmRhdGEsIGV2IH0pKTtcbiAgICB9KTtcblxuICAgIHRoaXMuYXR0YWNoQ2hhcnQoKTtcbiAgfVxuXG4gIGF0dGFjaENoYXJ0KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgX2NoYXJ0LCBoZWlnaHQsIHBhZGRpbmcsIGFuaW1hdGUsIGRhdGEsIGxpbmVXaWR0aCwgaXNQZXJjZW50LCBwZXJjZW50Q29sb3IsIGNvbG9ycyB9ID0gdGhpcztcbiAgICBpZiAoIV9jaGFydCkgcmV0dXJuO1xuXG4gICAgX2NoYXJ0LmhlaWdodCA9IGhlaWdodDtcbiAgICBfY2hhcnQucGFkZGluZyA9IHBhZGRpbmc7XG4gICAgX2NoYXJ0LmFuaW1hdGUoYW5pbWF0ZSk7XG4gICAgX2NoYXJ0Lmdlb21ldHJpZXNbMF0uc3R5bGUoeyBsaW5lV2lkdGgsIHN0cm9rZTogJyNmZmYnIH0pLmNvbG9yKCd4JywgaXNQZXJjZW50ID8gcGVyY2VudENvbG9yIDogY29sb3JzKTtcbiAgICBfY2hhcnQuc2NhbGUoe1xuICAgICAgeDoge1xuICAgICAgICB0eXBlOiAnY2F0JyxcbiAgICAgICAgcmFuZ2U6IFswLCAxXSxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgLy8g6L2s5YyWIHBlcmNlbnRcbiAgICBjb25zdCB0b3RhbFN1bSA9IGRhdGEucmVkdWNlKChjdXIsIGl0ZW0pID0+IGN1ciArIGl0ZW0ueSwgMCk7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgIGl0ZW0ucGVyY2VudCA9IHRvdGFsU3VtID09PSAwID8gMCA6IGl0ZW0ueSAvIHRvdGFsU3VtO1xuICAgIH1cbiAgICBfY2hhcnQuY2hhbmdlRGF0YShkYXRhKTtcbiAgICBfY2hhcnQucmVuZGVyKCk7XG5cbiAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gdGhpcy5nZW5MZWdlbmQoKSk7XG4gIH1cblxuICBwcml2YXRlIGdlbkxlZ2VuZCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IGhhc0xlZ2VuZCwgaXNQZXJjZW50LCBjZHIsIF9jaGFydCB9ID0gdGhpcztcbiAgICBpZiAoIWhhc0xlZ2VuZCB8fCBpc1BlcmNlbnQpIHJldHVybjtcblxuICAgIHRoaXMubGVnZW5kRGF0YSA9IF9jaGFydC5nZW9tZXRyaWVzWzBdLmRhdGFBcnJheS5tYXAoKGl0ZW06IGFueSkgPT4ge1xuICAgICAgY29uc3Qgb3JpZ2luID0gaXRlbVswXS5fb3JpZ2luO1xuICAgICAgb3JpZ2luLmNvbG9yID0gaXRlbVswXS5jb2xvcjtcbiAgICAgIG9yaWdpbi5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIG9yaWdpbi5wZXJjZW50ID0gKG9yaWdpbi5wZXJjZW50ICogMTAwKS50b0ZpeGVkKDIpO1xuICAgICAgcmV0dXJuIG9yaWdpbjtcbiAgICB9KTtcblxuICAgIGNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBfY2xpY2soaTogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgeyBsZWdlbmREYXRhLCBfY2hhcnQgfSA9IHRoaXM7XG4gICAgbGVnZW5kRGF0YVtpXS5jaGVja2VkID0gIWxlZ2VuZERhdGFbaV0uY2hlY2tlZDtcbiAgICBfY2hhcnQucmVuZGVyKCk7XG4gIH1cblxuICBvbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5maXhEYXRhKCk7XG4gIH1cbn1cbiJdfQ==