import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { G2BaseComponent } from '@delon/chart/core';
import { InputBoolean, InputNumber } from '@delon/util/decorator';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/skeleton";
import * as i3 from "ng-zorro-antd/core/outlet";
import * as i4 from "ng-zorro-antd/grid";
export class G2RadarComponent extends G2BaseComponent {
    constructor() {
        super(...arguments);
        this.legendData = [];
        this.height = 0;
        this.padding = [44, 30, 16, 30];
        this.hasLegend = true;
        this.tickCount = 4;
        this.data = [];
        this.colors = ['#1890FF', '#FACC14', '#2FC25B', '#8543E0', '#F04864', '#13C2C2', '#fa8c16', '#a0d911'];
        this.clickItem = new EventEmitter();
    }
    // #endregion
    getHeight() {
        return this.height - (this.hasLegend ? 80 : 22);
    }
    install() {
        const { node, padding, theme } = this;
        const chart = (this._chart = new window.G2.Chart({
            container: node.nativeElement,
            autoFit: true,
            height: this.getHeight(),
            padding,
            theme,
        }));
        chart.coordinate('polar');
        chart.legend(false);
        chart.axis('label', {
            line: null,
            label: {
                offset: 8,
            },
            grid: {
                line: {
                    style: {
                        stroke: '#e9e9e9',
                        lineWidth: 1,
                        lineDash: [0, 0],
                    },
                },
            },
        });
        chart.axis('value', {
            grid: {
                line: {
                    type: 'polygon',
                    style: {
                        stroke: '#e9e9e9',
                        lineWidth: 1,
                        lineDash: [0, 0],
                    },
                },
            },
        });
        chart.filter('name', (name) => {
            const legendItem = this.legendData.find(w => w.name === name);
            return legendItem ? legendItem.checked !== false : true;
        });
        chart.line().position('label*value');
        chart.point().position('label*value').shape('circle').size(3);
        chart.render();
        chart.on(`point:click`, (ev) => {
            this.ngZone.run(() => { var _a; return this.clickItem.emit({ item: (_a = ev.data) === null || _a === void 0 ? void 0 : _a.data, ev }); });
        });
        this.attachChart();
    }
    attachChart() {
        const { _chart, padding, data, colors, tickCount } = this;
        if (!_chart || !data || data.length <= 0)
            return;
        _chart.height = this.getHeight();
        _chart.padding = padding;
        _chart.scale({
            value: {
                min: 0,
                tickCount,
            },
        });
        _chart.geometries.forEach(g => g.color('name', colors));
        _chart.changeData(data);
        _chart.render();
        this.ngZone.run(() => this.genLegend());
    }
    genLegend() {
        const { hasLegend, cdr, _chart } = this;
        if (!hasLegend)
            return;
        this.legendData = _chart.geometries[0].dataArray.map(item => {
            const origin = item[0]._origin;
            const result = {
                name: origin.name,
                color: item[0].color,
                checked: true,
                value: item.reduce((p, n) => p + n._origin.value, 0),
            };
            return result;
        });
        cdr.detectChanges();
    }
    _click(i) {
        const { legendData, _chart } = this;
        legendData[i].checked = !legendData[i].checked;
        _chart.render();
    }
    onChanges() {
        this.legendData.forEach(i => (i.checked = true));
    }
}
/** @nocollapse */ G2RadarComponent.ɵfac = function G2RadarComponent_Factory(t) { return ɵG2RadarComponent_BaseFactory(t || G2RadarComponent); };
/** @nocollapse */ G2RadarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ version: "11.1.1", type: G2RadarComponent, selector: "g2-radar", inputs: { title: "title", height: "height", padding: "padding", hasLegend: "hasLegend", tickCount: "tickCount", data: "data", colors: "colors" }, outputs: { clickItem: "clickItem" }, host: { properties: { "style.height.px": "height", "class.g2-radar": "true" } }, exportAs: ["g2Radar"], usesInheritance: true, ngImport: i0, template: "<nz-skeleton *ngIf=\"!loaded\"></nz-skeleton>\n<ng-container *nzStringTemplateOutlet=\"title\">\n  <h4>{{ title }}</h4>\n</ng-container>\n<div #container></div>\n<div nz-row class=\"g2-radar__legend\" *ngIf=\"hasLegend\">\n  <div nz-col [nzSpan]=\"24 / legendData.length\" *ngFor=\"let i of legendData; let idx = index\" (click)=\"_click(idx)\" class=\"g2-radar__legend-item\">\n    <i class=\"g2-radar__legend-dot\" [ngStyle]=\"{ 'background-color': !i.checked ? '#aaa' : i.color }\"></i>\n    {{ i.name }}\n    <h6 class=\"g2-radar__legend-title\">{{ i.value }}</h6>\n  </div>\n</div>\n", directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2.NzSkeletonComponent, selector: "nz-skeleton", inputs: ["nzActive", "nzLoading", "nzRound", "nzTitle", "nzAvatar", "nzParagraph"], exportAs: ["nzSkeleton"] }, { type: i3.NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { type: i4.NzRowDirective, selector: "[nz-row],nz-row,nz-form-item", inputs: ["nzAlign", "nzJustify", "nzGutter"], exportAs: ["nzRow"] }, { type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i4.NzColDirective, selector: "[nz-col],nz-col,nz-form-control,nz-form-label", inputs: ["nzFlex", "nzSpan", "nzOrder", "nzOffset", "nzPush", "nzPull", "nzXs", "nzSm", "nzMd", "nzLg", "nzXl", "nzXXl"], exportAs: ["nzCol"] }, { type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2RadarComponent.prototype, "height", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], G2RadarComponent.prototype, "hasLegend", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2RadarComponent.prototype, "tickCount", void 0);
const ɵG2RadarComponent_BaseFactory = /*@__PURE__*/ i0.ɵɵgetInheritedFactory(G2RadarComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(G2RadarComponent, [{
        type: Component,
        args: [{
                selector: 'g2-radar',
                exportAs: 'g2Radar',
                templateUrl: './radar.component.html',
                host: {
                    '[style.height.px]': 'height',
                    '[class.g2-radar]': 'true',
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], null, { title: [{
            type: Input
        }], height: [{
            type: Input
        }], padding: [{
            type: Input
        }], hasLegend: [{
            type: Input
        }], tickCount: [{
            type: Input
        }], data: [{
            type: Input
        }], colors: [{
            type: Input
        }], clickItem: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY2hhcnQvcmFkYXIvcmFkYXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY2hhcnQvcmFkYXIvcmFkYXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQWUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFaEksT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3BELE9BQU8sRUFBZ0IsWUFBWSxFQUFFLFdBQVcsRUFBZSxNQUFNLHVCQUF1QixDQUFDOzs7Ozs7QUEwQjdGLE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxlQUFlO0lBWnJEOztRQWlCRSxlQUFVLEdBQVUsRUFBRSxDQUFDO1FBS0MsV0FBTSxHQUFHLENBQUMsQ0FBQztRQUMxQixZQUFPLEdBQStCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDdkMsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNsQixjQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLFNBQUksR0FBa0IsRUFBRSxDQUFDO1FBQ3pCLFdBQU0sR0FBRyxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNqRyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQW9CLENBQUM7S0FrSDVEO0lBaEhDLGFBQWE7SUFFTCxTQUFTO1FBQ2YsT0FBTyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxF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Q21CLFNBQVM7a0JBQWpDLEtBQUs7WUFDa0IsU0FBUztrQkFBaEMsS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSztZQUNJLFNBQVM7a0JBQWxCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFRlbXBsYXRlUmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2hhcnQsIEV2ZW50IH0gZnJvbSAnQGFudHYvZzInO1xuaW1wb3J0IHsgRzJCYXNlQ29tcG9uZW50IH0gZnJvbSAnQGRlbG9uL2NoYXJ0L2NvcmUnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyLCBOdW1iZXJJbnB1dCB9IGZyb20gJ0BkZWxvbi91dGlsL2RlY29yYXRvcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRzJSYWRhckRhdGEge1xuICBuYW1lOiBzdHJpbmc7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHZhbHVlOiBudW1iZXI7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHMlJhZGFyQ2xpY2tJdGVtIHtcbiAgaXRlbTogRzJSYWRhckRhdGE7XG4gIGV2OiBFdmVudDtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZzItcmFkYXInLFxuICBleHBvcnRBczogJ2cyUmFkYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vcmFkYXIuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7XG4gICAgJ1tzdHlsZS5oZWlnaHQucHhdJzogJ2hlaWdodCcsXG4gICAgJ1tjbGFzcy5nMi1yYWRhcl0nOiAndHJ1ZScsXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgRzJSYWRhckNvbXBvbmVudCBleHRlbmRzIEcyQmFzZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9oZWlnaHQ6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfaGFzTGVnZW5kOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV90aWNrQ291bnQ6IE51bWJlcklucHV0O1xuXG4gIGxlZ2VuZERhdGE6IGFueVtdID0gW107XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGhlaWdodCA9IDA7XG4gIEBJbnB1dCgpIHBhZGRpbmc6IG51bWJlciB8IG51bWJlcltdIHwgJ2F1dG8nID0gWzQ0LCAzMCwgMTYsIDMwXTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGhhc0xlZ2VuZCA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHRpY2tDb3VudCA9IDQ7XG4gIEBJbnB1dCgpIGRhdGE6IEcyUmFkYXJEYXRhW10gPSBbXTtcbiAgQElucHV0KCkgY29sb3JzID0gWycjMTg5MEZGJywgJyNGQUNDMTQnLCAnIzJGQzI1QicsICcjODU0M0UwJywgJyNGMDQ4NjQnLCAnIzEzQzJDMicsICcjZmE4YzE2JywgJyNhMGQ5MTEnXTtcbiAgQE91dHB1dCgpIGNsaWNrSXRlbSA9IG5ldyBFdmVudEVtaXR0ZXI8RzJSYWRhckNsaWNrSXRlbT4oKTtcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgcHJpdmF0ZSBnZXRIZWlnaHQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5oZWlnaHQgLSAodGhpcy5oYXNMZWdlbmQgPyA4MCA6IDIyKTtcbiAgfVxuXG4gIGluc3RhbGwoKTogdm9pZCB7XG4gICAgY29uc3QgeyBub2RlLCBwYWRkaW5nLCB0aGVtZSB9ID0gdGhpcztcblxuICAgIGNvbnN0IGNoYXJ0OiBDaGFydCA9ICh0aGlzLl9jaGFydCA9IG5ldyAod2luZG93IGFzIGFueSkuRzIuQ2hhcnQoe1xuICAgICAgY29udGFpbmVyOiBub2RlLm5hdGl2ZUVsZW1lbnQsXG4gICAgICBhdXRvRml0OiB0cnVlLFxuICAgICAgaGVpZ2h0OiB0aGlzLmdldEhlaWdodCgpLFxuICAgICAgcGFkZGluZyxcbiAgICAgIHRoZW1lLFxuICAgIH0pKTtcblxuICAgIGNoYXJ0LmNvb3JkaW5hdGUoJ3BvbGFyJyk7XG4gICAgY2hhcnQubGVnZW5kKGZhbHNlKTtcbiAgICBjaGFydC5heGlzKCdsYWJlbCcsIHtcbiAgICAgIGxpbmU6IG51bGwsXG4gICAgICBsYWJlbDoge1xuICAgICAgICBvZmZzZXQ6IDgsXG4gICAgICB9LFxuICAgICAgZ3JpZDoge1xuICAgICAgICBsaW5lOiB7XG4gICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIHN0cm9rZTogJyNlOWU5ZTknLFxuICAgICAgICAgICAgbGluZVdpZHRoOiAxLFxuICAgICAgICAgICAgbGluZURhc2g6IFswLCAwXSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBjaGFydC5heGlzKCd2YWx1ZScsIHtcbiAgICAgIGdyaWQ6IHtcbiAgICAgICAgbGluZToge1xuICAgICAgICAgIHR5cGU6ICdwb2x5Z29uJyxcbiAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgc3Ryb2tlOiAnI2U5ZTllOScsXG4gICAgICAgICAgICBsaW5lV2lkdGg6IDEsXG4gICAgICAgICAgICBsaW5lRGFzaDogWzAsIDBdLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGNoYXJ0LmZpbHRlcignbmFtZScsIChuYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGxlZ2VuZEl0ZW0gPSB0aGlzLmxlZ2VuZERhdGEuZmluZCh3ID0+IHcubmFtZSA9PT0gbmFtZSk7XG4gICAgICByZXR1cm4gbGVnZW5kSXRlbSA/IGxlZ2VuZEl0ZW0uY2hlY2tlZCAhPT0gZmFsc2UgOiB0cnVlO1xuICAgIH0pO1xuXG4gICAgY2hhcnQubGluZSgpLnBvc2l0aW9uKCdsYWJlbCp2YWx1ZScpO1xuXG4gICAgY2hhcnQucG9pbnQoKS5wb3NpdGlvbignbGFiZWwqdmFsdWUnKS5zaGFwZSgnY2lyY2xlJykuc2l6ZSgzKTtcblxuICAgIGNoYXJ0LnJlbmRlcigpO1xuXG4gICAgY2hhcnQub24oYHBvaW50OmNsaWNrYCwgKGV2OiBFdmVudCkgPT4ge1xuICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMuY2xpY2tJdGVtLmVtaXQoeyBpdGVtOiBldi5kYXRhPy5kYXRhLCBldiB9KSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmF0dGFjaENoYXJ0KCk7XG4gIH1cblxuICBhdHRhY2hDaGFydCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IF9jaGFydCwgcGFkZGluZywgZGF0YSwgY29sb3JzLCB0aWNrQ291bnQgfSA9IHRoaXM7XG4gICAgaWYgKCFfY2hhcnQgfHwgIWRhdGEgfHwgZGF0YS5sZW5ndGggPD0gMCkgcmV0dXJuO1xuXG4gICAgX2NoYXJ0LmhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KCk7XG4gICAgX2NoYXJ0LnBhZGRpbmcgPSBwYWRkaW5nO1xuICAgIF9jaGFydC5zY2FsZSh7XG4gICAgICB2YWx1ZToge1xuICAgICAgICBtaW46IDAsXG4gICAgICAgIHRpY2tDb3VudCxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBfY2hhcnQuZ2VvbWV0cmllcy5mb3JFYWNoKGcgPT4gZy5jb2xvcignbmFtZScsIGNvbG9ycykpO1xuICAgIF9jaGFydC5jaGFuZ2VEYXRhKGRhdGEpO1xuICAgIF9jaGFydC5yZW5kZXIoKTtcblxuICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB0aGlzLmdlbkxlZ2VuZCgpKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuTGVnZW5kKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgaGFzTGVnZW5kLCBjZHIsIF9jaGFydCB9ID0gdGhpcztcbiAgICBpZiAoIWhhc0xlZ2VuZCkgcmV0dXJuO1xuXG4gICAgdGhpcy5sZWdlbmREYXRhID0gX2NoYXJ0Lmdlb21ldHJpZXNbMF0uZGF0YUFycmF5Lm1hcChpdGVtID0+IHtcbiAgICAgIGNvbnN0IG9yaWdpbiA9IGl0ZW1bMF0uX29yaWdpbjtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgICAgbmFtZTogb3JpZ2luLm5hbWUsXG4gICAgICAgIGNvbG9yOiBpdGVtWzBdLmNvbG9yLFxuICAgICAgICBjaGVja2VkOiB0cnVlLFxuICAgICAgICB2YWx1ZTogaXRlbS5yZWR1Y2UoKHAsIG4pID0+IHAgKyBuLl9vcmlnaW4udmFsdWUsIDApLFxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcblxuICAgIGNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBfY2xpY2soaTogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgeyBsZWdlbmREYXRhLCBfY2hhcnQgfSA9IHRoaXM7XG4gICAgbGVnZW5kRGF0YVtpXS5jaGVja2VkID0gIWxlZ2VuZERhdGFbaV0uY2hlY2tlZDtcbiAgICBfY2hhcnQucmVuZGVyKCk7XG4gIH1cblxuICBvbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5sZWdlbmREYXRhLmZvckVhY2goaSA9PiAoaS5jaGVja2VkID0gdHJ1ZSkpO1xuICB9XG59XG4iLCI8bnotc2tlbGV0b24gKm5nSWY9XCIhbG9hZGVkXCI+PC9uei1za2VsZXRvbj5cbjxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJ0aXRsZVwiPlxuICA8aDQ+e3sgdGl0bGUgfX08L2g0PlxuPC9uZy1jb250YWluZXI+XG48ZGl2ICNjb250YWluZXI+PC9kaXY+XG48ZGl2IG56LXJvdyBjbGFzcz1cImcyLXJhZGFyX19sZWdlbmRcIiAqbmdJZj1cImhhc0xlZ2VuZFwiPlxuICA8ZGl2IG56LWNvbCBbbnpTcGFuXT1cIjI0IC8gbGVnZW5kRGF0YS5sZW5ndGhcIiAqbmdGb3I9XCJsZXQgaSBvZiBsZWdlbmREYXRhOyBsZXQgaWR4ID0gaW5kZXhcIiAoY2xpY2spPVwiX2NsaWNrKGlkeClcIiBjbGFzcz1cImcyLXJhZGFyX19sZWdlbmQtaXRlbVwiPlxuICAgIDxpIGNsYXNzPVwiZzItcmFkYXJfX2xlZ2VuZC1kb3RcIiBbbmdTdHlsZV09XCJ7ICdiYWNrZ3JvdW5kLWNvbG9yJzogIWkuY2hlY2tlZCA/ICcjYWFhJyA6IGkuY29sb3IgfVwiPjwvaT5cbiAgICB7eyBpLm5hbWUgfX1cbiAgICA8aDYgY2xhc3M9XCJnMi1yYWRhcl9fbGVnZW5kLXRpdGxlXCI+e3sgaS52YWx1ZSB9fTwvaDY+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=