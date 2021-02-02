import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { G2BaseComponent } from '@delon/chart/core';
import { InputBoolean, InputNumber } from '@delon/util/decorator';
import * as i0 from "@angular/core";
export class G2MiniAreaComponent extends G2BaseComponent {
    constructor() {
        super(...arguments);
        // #region fields
        this.color = 'rgba(24, 144, 255, 0.2)';
        this.borderColor = '#1890FF';
        this.borderWidth = 2;
        this.height = 56;
        this.fit = true;
        this.line = false;
        this.animate = true;
        this.padding = [8, 8, 8, 8];
        this.data = [];
        this.yTooltipSuffix = '';
        this.tooltipType = 'default';
        this.clickItem = new EventEmitter();
    }
    // #endregion
    install() {
        const { el, fit, height, padding, xAxis, yAxis, yTooltipSuffix, tooltipType, line, theme } = this;
        const chart = (this._chart = new window.G2.Chart({
            container: el.nativeElement,
            autoFit: fit,
            height,
            padding,
            theme,
        }));
        if (!xAxis && !yAxis) {
            chart.axis(false);
        }
        if (xAxis) {
            chart.axis('x', xAxis);
        }
        else {
            chart.axis('x', false);
        }
        if (yAxis) {
            chart.axis('y', yAxis);
        }
        else {
            chart.axis('y', false);
        }
        chart.legend(false);
        const tooltipOption = {
            showTitle: false,
            showMarkers: true,
            enterable: true,
            domStyles: {
                'g2-tooltip': { padding: '0px' },
                'g2-tooltip-title': { display: 'none' },
                'g2-tooltip-list-item': { margin: '4px' },
            },
        };
        if (tooltipType === 'mini') {
            tooltipOption.position = 'top';
            tooltipOption.domStyles['g2-tooltip'] = { padding: '0px', backgroundColor: 'transparent', boxShadow: 'none' };
            tooltipOption.itemTpl = `<li>{value}</li>`;
            tooltipOption.offset = 0;
        }
        chart.tooltip(tooltipOption);
        chart
            .area()
            .position('x*y')
            .tooltip('x*y', (x, y) => ({ name: x, value: y + yTooltipSuffix }))
            .shape('smooth');
        if (line) {
            chart.line().position('x*y').shape('smooth').tooltip(false);
        }
        chart.on(`plot:click`, (ev) => {
            const records = this._chart.getSnapRecords({ x: ev.x, y: ev.y });
            this.ngZone.run(() => this.clickItem.emit({ item: records[0]._origin, ev }));
        });
        chart.render();
        this.attachChart();
    }
    attachChart() {
        const { _chart, line, fit, height, animate, padding, data, color, borderColor, borderWidth } = this;
        if (!_chart || !data || data.length <= 0) {
            return;
        }
        const geoms = _chart.geometries;
        geoms.forEach(g => g.color(color));
        if (line) {
            geoms[1].color(borderColor).size(borderWidth);
        }
        _chart.autoFit = fit;
        _chart.height = height;
        _chart.animate(animate);
        _chart.padding = padding;
        _chart.changeData(data);
        _chart.render();
    }
}
/** @nocollapse */ G2MiniAreaComponent.ɵfac = function G2MiniAreaComponent_Factory(t) { return ɵG2MiniAreaComponent_BaseFactory(t || G2MiniAreaComponent); };
/** @nocollapse */ G2MiniAreaComponent.ɵcmp = i0.ɵɵngDeclareComponent({ version: "11.1.1", type: G2MiniAreaComponent, selector: "g2-mini-area", inputs: { color: "color", borderColor: "borderColor", borderWidth: "borderWidth", height: "height", fit: "fit", line: "line", animate: "animate", xAxis: "xAxis", yAxis: "yAxis", padding: "padding", data: "data", yTooltipSuffix: "yTooltipSuffix", tooltipType: "tooltipType" }, outputs: { clickItem: "clickItem" }, host: { properties: { "style.height.px": "height" } }, exportAs: ["g2MiniArea"], usesInheritance: true, ngImport: i0, template: ``, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2MiniAreaComponent.prototype, "borderWidth", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2MiniAreaComponent.prototype, "height", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], G2MiniAreaComponent.prototype, "fit", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], G2MiniAreaComponent.prototype, "line", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], G2MiniAreaComponent.prototype, "animate", void 0);
const ɵG2MiniAreaComponent_BaseFactory = /*@__PURE__*/ i0.ɵɵgetInheritedFactory(G2MiniAreaComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(G2MiniAreaComponent, [{
        type: Component,
        args: [{
                selector: 'g2-mini-area',
                exportAs: 'g2MiniArea',
                template: ``,
                host: {
                    '[style.height.px]': 'height',
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], null, { color: [{
            type: Input
        }], borderColor: [{
            type: Input
        }], borderWidth: [{
            type: Input
        }], height: [{
            type: Input
        }], fit: [{
            type: Input
        }], line: [{
            type: Input
        }], animate: [{
            type: Input
        }], xAxis: [{
            type: Input
        }], yAxis: [{
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
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluaS1hcmVhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NoYXJ0L21pbmktYXJlYS9taW5pLWFyZWEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5ILE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRCxPQUFPLEVBQWdCLFlBQVksRUFBRSxXQUFXLEVBQWUsTUFBTSx1QkFBdUIsQ0FBQzs7QUF3QjdGLE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxlQUFlO0lBWHhEOztRQWtCRSxpQkFBaUI7UUFFUixVQUFLLEdBQUcseUJBQXlCLENBQUM7UUFDbEMsZ0JBQVcsR0FBRyxTQUFTLENBQUM7UUFDVCxnQkFBVyxHQUFHLENBQUMsQ0FBQztRQUNoQixXQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ1gsUUFBRyxHQUFHLElBQUksQ0FBQztRQUNYLFNBQUksR0FBRyxLQUFLLENBQUM7UUFDYixZQUFPLEdBQUcsSUFBSSxDQUFDO1FBRy9CLFlBQU8sR0FBK0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNuRCxTQUFJLEdBQXFCLEVBQUUsQ0FBQztRQUM1QixtQkFBYyxHQUFHLEVBQUUsQ0FBQztRQUNwQixnQkFBVyxHQUF1QixTQUFTLENBQUM7UUFDM0MsY0FBUyxHQUFHLElBQUksWUFBWSxFQUF1QixDQUFDO0tBeUYvRDtJQXZGQyxhQUFhO0lBRWIsT0FBTztRQUNMLE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsV0FBVyxFQUFFLElB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QUFkLFdBQVcsRUFBRTs7bURBQWE7QUFDWDtJQUFmLFlBQVksRUFBRTs7Z0RBQVk7QUFDWDtJQUFmLFlBQVksRUFBRTs7aURBQWM7QUFDYjtJQUFmLFlBQVksRUFBRTs7b0RBQWdCO2dGQWY3QixtQkFBbUI7dUZBQW5CLG1CQUFtQjtjQVgvQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUUsRUFBRTtnQkFDWixJQUFJLEVBQUU7b0JBQ0osbUJBQW1CLEVBQUUsUUFBUTtpQkFDOUI7Z0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3RDO2dCQVVVLEtBQUs7a0JBQWIsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFDa0IsV0FBVztrQkFBbEMsS0FBSztZQUNrQixNQUFNO2tCQUE3QixLQUFLO1lBQ21CLEdBQUc7a0JBQTNCLEtBQUs7WUFDbUIsSUFBSTtrQkFBNUIsS0FBSztZQUNtQixPQUFPO2tCQUEvQixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0csY0FBYztrQkFBdEIsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFDSSxTQUFTO2tCQUFsQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2hhcnQsIEV2ZW50LCBUeXBlcyB9IGZyb20gJ0BhbnR2L2cyJztcbmltcG9ydCB7IEcyQmFzZUNvbXBvbmVudCB9IGZyb20gJ0BkZWxvbi9jaGFydC9jb3JlJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciwgTnVtYmVySW5wdXQgfSBmcm9tICdAZGVsb24vdXRpbC9kZWNvcmF0b3InO1xuXG5leHBvcnQgaW50ZXJmYWNlIEcyTWluaUFyZWFEYXRhIHtcbiAgeDogYW55O1xuICB5OiBhbnk7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHMk1pbmlBcmVhQ2xpY2tJdGVtIHtcbiAgaXRlbTogRzJNaW5pQXJlYURhdGE7XG4gIGV2OiBFdmVudDtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZzItbWluaS1hcmVhJyxcbiAgZXhwb3J0QXM6ICdnMk1pbmlBcmVhJyxcbiAgdGVtcGxhdGU6IGBgLFxuICBob3N0OiB7XG4gICAgJ1tzdHlsZS5oZWlnaHQucHhdJzogJ2hlaWdodCcsXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgRzJNaW5pQXJlYUNvbXBvbmVudCBleHRlbmRzIEcyQmFzZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9ib3JkZXJXaWR0aDogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9oZWlnaHQ6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZml0OiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9saW5lOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9hbmltYXRlOiBCb29sZWFuSW5wdXQ7XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBASW5wdXQoKSBjb2xvciA9ICdyZ2JhKDI0LCAxNDQsIDI1NSwgMC4yKSc7XG4gIEBJbnB1dCgpIGJvcmRlckNvbG9yID0gJyMxODkwRkYnO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBib3JkZXJXaWR0aCA9IDI7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGhlaWdodCA9IDU2O1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZml0ID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGxpbmUgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGFuaW1hdGUgPSB0cnVlO1xuICBASW5wdXQoKSB4QXhpczogYW55O1xuICBASW5wdXQoKSB5QXhpczogYW55O1xuICBASW5wdXQoKSBwYWRkaW5nOiBudW1iZXIgfCBudW1iZXJbXSB8ICdhdXRvJyA9IFs4LCA4LCA4LCA4XTtcbiAgQElucHV0KCkgZGF0YTogRzJNaW5pQXJlYURhdGFbXSA9IFtdO1xuICBASW5wdXQoKSB5VG9vbHRpcFN1ZmZpeCA9ICcnO1xuICBASW5wdXQoKSB0b29sdGlwVHlwZTogJ21pbmknIHwgJ2RlZmF1bHQnID0gJ2RlZmF1bHQnO1xuICBAT3V0cHV0KCkgY2xpY2tJdGVtID0gbmV3IEV2ZW50RW1pdHRlcjxHMk1pbmlBcmVhQ2xpY2tJdGVtPigpO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBpbnN0YWxsKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgZWwsIGZpdCwgaGVpZ2h0LCBwYWRkaW5nLCB4QXhpcywgeUF4aXMsIHlUb29sdGlwU3VmZml4LCB0b29sdGlwVHlwZSwgbGluZSwgdGhlbWUgfSA9IHRoaXM7XG4gICAgY29uc3QgY2hhcnQ6IENoYXJ0ID0gKHRoaXMuX2NoYXJ0ID0gbmV3ICh3aW5kb3cgYXMgYW55KS5HMi5DaGFydCh7XG4gICAgICBjb250YWluZXI6IGVsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICBhdXRvRml0OiBmaXQsXG4gICAgICBoZWlnaHQsXG4gICAgICBwYWRkaW5nLFxuICAgICAgdGhlbWUsXG4gICAgfSkpO1xuXG4gICAgaWYgKCF4QXhpcyAmJiAheUF4aXMpIHtcbiAgICAgIGNoYXJ0LmF4aXMoZmFsc2UpO1xuICAgIH1cblxuICAgIGlmICh4QXhpcykge1xuICAgICAgY2hhcnQuYXhpcygneCcsIHhBeGlzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hhcnQuYXhpcygneCcsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBpZiAoeUF4aXMpIHtcbiAgICAgIGNoYXJ0LmF4aXMoJ3knLCB5QXhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoYXJ0LmF4aXMoJ3knLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgY2hhcnQubGVnZW5kKGZhbHNlKTtcbiAgICBjb25zdCB0b29sdGlwT3B0aW9uOiBUeXBlcy5Ub29sdGlwT3B0aW9uID0ge1xuICAgICAgc2hvd1RpdGxlOiBmYWxzZSxcbiAgICAgIHNob3dNYXJrZXJzOiB0cnVlLFxuICAgICAgZW50ZXJhYmxlOiB0cnVlLFxuICAgICAgZG9tU3R5bGVzOiB7XG4gICAgICAgICdnMi10b29sdGlwJzogeyBwYWRkaW5nOiAnMHB4JyB9LFxuICAgICAgICAnZzItdG9vbHRpcC10aXRsZSc6IHsgZGlzcGxheTogJ25vbmUnIH0sXG4gICAgICAgICdnMi10b29sdGlwLWxpc3QtaXRlbSc6IHsgbWFyZ2luOiAnNHB4JyB9LFxuICAgICAgfSxcbiAgICB9O1xuICAgIGlmICh0b29sdGlwVHlwZSA9PT0gJ21pbmknKSB7XG4gICAgICB0b29sdGlwT3B0aW9uLnBvc2l0aW9uID0gJ3RvcCc7XG4gICAgICB0b29sdGlwT3B0aW9uLmRvbVN0eWxlcyFbJ2cyLXRvb2x0aXAnXSA9IHsgcGFkZGluZzogJzBweCcsIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JywgYm94U2hhZG93OiAnbm9uZScgfTtcbiAgICAgIHRvb2x0aXBPcHRpb24uaXRlbVRwbCA9IGA8bGk+e3ZhbHVlfTwvbGk+YDtcbiAgICAgIHRvb2x0aXBPcHRpb24ub2Zmc2V0ID0gMDtcbiAgICB9XG4gICAgY2hhcnQudG9vbHRpcCh0b29sdGlwT3B0aW9uKTtcblxuICAgIGNoYXJ0XG4gICAgICAuYXJlYSgpXG4gICAgICAucG9zaXRpb24oJ3gqeScpXG4gICAgICAudG9vbHRpcCgneCp5JywgKHgsIHkpID0+ICh7IG5hbWU6IHgsIHZhbHVlOiB5ICsgeVRvb2x0aXBTdWZmaXggfSkpXG4gICAgICAuc2hhcGUoJ3Ntb290aCcpO1xuXG4gICAgaWYgKGxpbmUpIHtcbiAgICAgIGNoYXJ0LmxpbmUoKS5wb3NpdGlvbigneCp5Jykuc2hhcGUoJ3Ntb290aCcpLnRvb2x0aXAoZmFsc2UpO1xuICAgIH1cblxuICAgIGNoYXJ0Lm9uKGBwbG90OmNsaWNrYCwgKGV2OiBFdmVudCkgPT4ge1xuICAgICAgY29uc3QgcmVjb3JkcyA9IHRoaXMuX2NoYXJ0LmdldFNuYXBSZWNvcmRzKHsgeDogZXYueCwgeTogZXYueSB9KTtcbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB0aGlzLmNsaWNrSXRlbS5lbWl0KHsgaXRlbTogcmVjb3Jkc1swXS5fb3JpZ2luLCBldiB9KSk7XG4gICAgfSk7XG5cbiAgICBjaGFydC5yZW5kZXIoKTtcblxuICAgIHRoaXMuYXR0YWNoQ2hhcnQoKTtcbiAgfVxuXG4gIGF0dGFjaENoYXJ0KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgX2NoYXJ0LCBsaW5lLCBmaXQsIGhlaWdodCwgYW5pbWF0ZSwgcGFkZGluZywgZGF0YSwgY29sb3IsIGJvcmRlckNvbG9yLCBib3JkZXJXaWR0aCB9ID0gdGhpcztcbiAgICBpZiAoIV9jaGFydCB8fCAhZGF0YSB8fCBkYXRhLmxlbmd0aCA8PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZ2VvbXMgPSBfY2hhcnQuZ2VvbWV0cmllcztcbiAgICBnZW9tcy5mb3JFYWNoKGcgPT4gZy5jb2xvcihjb2xvcikpO1xuICAgIGlmIChsaW5lKSB7XG4gICAgICBnZW9tc1sxXS5jb2xvcihib3JkZXJDb2xvcikuc2l6ZShib3JkZXJXaWR0aCk7XG4gICAgfVxuXG4gICAgX2NoYXJ0LmF1dG9GaXQgPSBmaXQ7XG4gICAgX2NoYXJ0LmhlaWdodCA9IGhlaWdodDtcbiAgICBfY2hhcnQuYW5pbWF0ZShhbmltYXRlKTtcbiAgICBfY2hhcnQucGFkZGluZyA9IHBhZGRpbmc7XG5cbiAgICBfY2hhcnQuY2hhbmdlRGF0YShkYXRhKTtcbiAgICBfY2hhcnQucmVuZGVyKCk7XG4gIH1cbn1cbiJdfQ==