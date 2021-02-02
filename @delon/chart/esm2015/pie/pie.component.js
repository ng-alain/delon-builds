import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { G2BaseComponent } from '@delon/chart/core';
import { InputBoolean, InputNumber } from '@delon/util/decorator';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/skeleton";
import * as i3 from "ng-zorro-antd/core/outlet";
import * as i4 from "ng-zorro-antd/divider";
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
/** @nocollapse */ G2PieComponent.ɵfac = function G2PieComponent_Factory(t) { return ɵG2PieComponent_BaseFactory(t || G2PieComponent); };
/** @nocollapse */ G2PieComponent.ɵcmp = i0.ɵɵngDeclareComponent({ version: "11.1.1", type: G2PieComponent, selector: "g2-pie", inputs: { animate: "animate", color: "color", subTitle: "subTitle", total: "total", height: "height", hasLegend: "hasLegend", inner: "inner", padding: "padding", percent: "percent", tooltip: "tooltip", lineWidth: "lineWidth", blockMaxWidth: "blockMaxWidth", select: "select", valueFormat: "valueFormat", data: "data", colors: "colors", interaction: "interaction" }, outputs: { clickItem: "clickItem" }, host: { properties: { "class.g2-pie": "true", "class.g2-pie__legend-has": "hasLegend", "class.g2-pie__legend-block": "block", "class.g2-pie__mini": "isPercent" } }, exportAs: ["g2Pie"], usesInheritance: true, ngImport: i0, template: "<nz-skeleton *ngIf=\"!loaded\"></nz-skeleton>\n<div class=\"g2-pie__chart\">\n  <div #container></div>\n  <div *ngIf=\"subTitle || total\" class=\"g2-pie__total\">\n    <h4 *ngIf=\"subTitle\" class=\"g2-pie__total-title\">\n      <ng-container *nzStringTemplateOutlet=\"subTitle\">\n        <div [innerHTML]=\"subTitle\"></div>\n      </ng-container>\n    </h4>\n    <div *ngIf=\"total\" class=\"g2-pie__total-stat\">\n      <ng-container *nzStringTemplateOutlet=\"total\">\n        <div [innerHTML]=\"total\"></div>\n      </ng-container>\n    </div>\n  </div>\n</div>\n<ul *ngIf=\"hasLegend && legendData?.length\" class=\"g2-pie__legend\">\n  <li *ngFor=\"let item of legendData; let index = index\" (click)=\"_click(index)\" class=\"g2-pie__legend-item\">\n    <span class=\"g2-pie__legend-dot\" [ngStyle]=\"{ 'background-color': !item.checked ? '#aaa' : item.color }\"></span>\n    <span class=\"g2-pie__legend-title\">{{ item.x }}</span>\n    <nz-divider nzType=\"vertical\"></nz-divider>\n    <span class=\"g2-pie__legend-percent\">{{ item.percent }}%</span>\n    <span class=\"g2-pie__legend-value\" [innerHTML]=\"valueFormat ? valueFormat(item.y) : item.y\"></span>\n  </li>\n</ul>\n", directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2.NzSkeletonComponent, selector: "nz-skeleton", inputs: ["nzActive", "nzLoading", "nzRound", "nzTitle", "nzAvatar", "nzParagraph"], exportAs: ["nzSkeleton"] }, { type: i3.NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { type: i4.NzDividerComponent, selector: "nz-divider", inputs: ["nzType", "nzOrientation", "nzDashed", "nzPlain", "nzText"], exportAs: ["nzDivider"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
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
const ɵG2PieComponent_BaseFactory = /*@__PURE__*/ i0.ɵɵgetInheritedFactory(G2PieComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(G2PieComponent, [{
        type: Component,
        args: [{
                selector: 'g2-pie',
                exportAs: 'g2Pie',
                templateUrl: './pie.component.html',
                host: {
                    '[class.g2-pie]': 'true',
                    '[class.g2-pie__legend-has]': 'hasLegend',
                    '[class.g2-pie__legend-block]': 'block',
                    '[class.g2-pie__mini]': 'isPercent',
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], null, { animate: [{
            type: Input
        }], color: [{
            type: Input
        }], subTitle: [{
            type: Input
        }], total: [{
            type: Input
        }], height: [{
            type: Input
        }], hasLegend: [{
            type: Input
        }], inner: [{
            type: Input
        }], padding: [{
            type: Input
        }], percent: [{
            type: Input
        }], tooltip: [{
            type: Input
        }], lineWidth: [{
            type: Input
        }], blockMaxWidth: [{
            type: Input
        }], select: [{
            type: Input
        }], valueFormat: [{
            type: Input
        }], data: [{
            type: Input
        }], colors: [{
            type: Input
        }], interaction: [{
            type: Input
        }], clickItem: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NoYXJ0L3BpZS9waWUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY2hhcnQvcGllL3BpZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBZSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVoSSxPQUFPLEVBQUUsZUFBZSxFQUFxQixNQUFNLG1CQUFtQixDQUFDO0FBQ3ZFLE9BQU8sRUFBZ0IsWUFBWSxFQUFFLFdBQVcsRUFBZSxNQUFNLHVCQUF1QixDQUFDOzs7Ozs7QUE0QjdGLE1BQU0sT0FBTyxjQUFlLFNBQVEsZUFBZTtJQWRuRDs7UUF5QkUsZUFBVSxHQUFnQixFQUFFLENBQUM7UUFHN0IsaUJBQWlCO1FBRVEsWUFBTyxHQUFHLElBQUksQ0FBQztRQUMvQixVQUFLLEdBQUcsMEJBQTBCLENBQUM7UUFHcEIsV0FBTSxHQUFHLENBQUMsQ0FBQztRQUNWLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEMsVUFBSyxHQUFHLElBQUksQ0FBQztRQUNiLFlBQU8sR0FBK0IsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVyQyxZQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLGNBQVMsR0FBRyxDQUFDLENBQUM7UUFDZCxrQkFBYSxHQUFHLEdBQUcsQ0FBQztRQUNuQixXQUFNLEdBQUcsSUFBSSxDQUFDO1FBRTlCLFNBQUksR0FBZ0IsRUFBRSxDQUFDO1FBRXZCLGdCQUFXLEdBQXNCLE1BQU0sQ0FBQztRQUN2QyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQWtCLENBQUM7S0FxSDFEO0lBbkhDLGFBQWE7SUFFYixJQUFJLEtBQUs7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QkFBakMsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSztZQUNrQixPQUFPO2tCQUE5QixLQUFLO1lBQ21CLE9BQU87a0JBQS9CLEtBQUs7WUFDa0IsU0FBUztrQkFBaEMsS0FBSztZQUNrQixhQUFhO2tCQUFwQyxLQUFLO1lBQ21CLE1BQU07a0JBQTlCLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNJLFNBQVM7a0JBQWxCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFRlbXBsYXRlUmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2hhcnQsIEV2ZW50IH0gZnJvbSAnQGFudHYvZzInO1xuaW1wb3J0IHsgRzJCYXNlQ29tcG9uZW50LCBHMkludGVyYWN0aW9uVHlwZSB9IGZyb20gJ0BkZWxvbi9jaGFydC9jb3JlJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciwgTnVtYmVySW5wdXQgfSBmcm9tICdAZGVsb24vdXRpbC9kZWNvcmF0b3InO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBHMlBpZURhdGEge1xuICB4OiBhbnk7XG4gIHk6IG51bWJlcjtcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEcyUGllQ2xpY2tJdGVtIHtcbiAgaXRlbTogRzJQaWVEYXRhO1xuICBldjogRXZlbnQ7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2cyLXBpZScsXG4gIGV4cG9ydEFzOiAnZzJQaWUnLFxuICB0ZW1wbGF0ZVVybDogJy4vcGllLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuZzItcGllXSc6ICd0cnVlJyxcbiAgICAnW2NsYXNzLmcyLXBpZV9fbGVnZW5kLWhhc10nOiAnaGFzTGVnZW5kJyxcbiAgICAnW2NsYXNzLmcyLXBpZV9fbGVnZW5kLWJsb2NrXSc6ICdibG9jaycsXG4gICAgJ1tjbGFzcy5nMi1waWVfX21pbmldJzogJ2lzUGVyY2VudCcsXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgRzJQaWVDb21wb25lbnQgZXh0ZW5kcyBHMkJhc2VDb21wb25lbnQge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfaGVpZ2h0OiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2FuaW1hdGU6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2hhc0xlZ2VuZDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfcGVyY2VudDogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV90b29sdGlwOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9saW5lV2lkdGg6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfYmxvY2tNYXhXaWR0aDogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9zZWxlY3Q6IEJvb2xlYW5JbnB1dDtcblxuICBwcml2YXRlIHBlcmNlbnRDb2xvcjogKHZhbHVlOiBzdHJpbmcpID0+IHN0cmluZztcbiAgbGVnZW5kRGF0YTogTnpTYWZlQW55W10gPSBbXTtcbiAgaXNQZXJjZW50OiBib29sZWFuO1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGFuaW1hdGUgPSB0cnVlO1xuICBASW5wdXQoKSBjb2xvciA9ICdyZ2JhKDI0LCAxNDQsIDI1NSwgMC44NSknO1xuICBASW5wdXQoKSBzdWJUaXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIHRvdGFsOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgaGVpZ2h0ID0gMDtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGhhc0xlZ2VuZCA9IGZhbHNlO1xuICBASW5wdXQoKSBpbm5lciA9IDAuNzU7XG4gIEBJbnB1dCgpIHBhZGRpbmc6IG51bWJlciB8IG51bWJlcltdIHwgJ2F1dG8nID0gWzEyLCAwLCAxMiwgMF07XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHBlcmNlbnQ6IG51bWJlcjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHRvb2x0aXAgPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBsaW5lV2lkdGggPSAwO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBibG9ja01heFdpZHRoID0gMzgwO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2VsZWN0ID0gdHJ1ZTtcbiAgQElucHV0KCkgdmFsdWVGb3JtYXQ6ICh5OiBudW1iZXIpID0+IHN0cmluZztcbiAgQElucHV0KCkgZGF0YTogRzJQaWVEYXRhW10gPSBbXTtcbiAgQElucHV0KCkgY29sb3JzOiBhbnlbXTtcbiAgQElucHV0KCkgaW50ZXJhY3Rpb246IEcySW50ZXJhY3Rpb25UeXBlID0gJ25vbmUnO1xuICBAT3V0cHV0KCkgY2xpY2tJdGVtID0gbmV3IEV2ZW50RW1pdHRlcjxHMlBpZUNsaWNrSXRlbT4oKTtcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgZ2V0IGJsb2NrKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmhhc0xlZ2VuZCAmJiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGggPD0gdGhpcy5ibG9ja01heFdpZHRoO1xuICB9XG5cbiAgcHJpdmF0ZSBmaXhEYXRhKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgcGVyY2VudCwgY29sb3IgfSA9IHRoaXM7XG4gICAgdGhpcy5pc1BlcmNlbnQgPSBwZXJjZW50ICE9IG51bGw7XG4gICAgaWYgKHRoaXMuaXNQZXJjZW50KSB7XG4gICAgICB0aGlzLnNlbGVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy50b29sdGlwID0gZmFsc2U7XG4gICAgICB0aGlzLnBlcmNlbnRDb2xvciA9ICh2YWx1ZTogc3RyaW5nKSA9PiAodmFsdWUgPT09ICfljaDmr5QnID8gY29sb3IgfHwgJ3JnYmEoMjQsIDE0NCwgMjU1LCAwLjg1KScgOiAnI0YwRjJGNScpO1xuICAgICAgdGhpcy5kYXRhID0gW1xuICAgICAgICB7XG4gICAgICAgICAgeDogJ+WNoOavlCcsXG4gICAgICAgICAgeTogcGVyY2VudCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHg6ICflj43mr5QnLFxuICAgICAgICAgIHk6IDEwMCAtIHBlcmNlbnQsXG4gICAgICAgIH0sXG4gICAgICBdO1xuICAgIH1cbiAgfVxuXG4gIGluc3RhbGwoKTogdm9pZCB7XG4gICAgY29uc3QgeyBub2RlLCBoZWlnaHQsIHBhZGRpbmcsIHRvb2x0aXAsIGlubmVyLCBoYXNMZWdlbmQsIGludGVyYWN0aW9uLCB0aGVtZSB9ID0gdGhpcztcbiAgICBjb25zdCBjaGFydDogQ2hhcnQgPSAodGhpcy5fY2hhcnQgPSBuZXcgKHdpbmRvdyBhcyBhbnkpLkcyLkNoYXJ0KHtcbiAgICAgIGNvbnRhaW5lcjogbm9kZS5uYXRpdmVFbGVtZW50LFxuICAgICAgYXV0b0ZpdDogdHJ1ZSxcbiAgICAgIGhlaWdodCxcbiAgICAgIHBhZGRpbmcsXG4gICAgICB0aGVtZSxcbiAgICB9KSk7XG5cbiAgICBpZiAoIXRvb2x0aXApIHtcbiAgICAgIGNoYXJ0LnRvb2x0aXAoZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGFydC50b29sdGlwKHtcbiAgICAgICAgc2hvd1RpdGxlOiBmYWxzZSxcbiAgICAgICAgc2hvd01hcmtlcnM6IGZhbHNlLFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChpbnRlcmFjdGlvbiAhPT0gJ25vbmUnKSB7XG4gICAgICBjaGFydC5pbnRlcmFjdGlvbihpbnRlcmFjdGlvbik7XG4gICAgfVxuICAgIGNoYXJ0LmF4aXMoZmFsc2UpLmxlZ2VuZChmYWxzZSkuY29vcmRpbmF0ZSgndGhldGEnLCB7IGlubmVyUmFkaXVzOiBpbm5lciB9KTtcbiAgICBjaGFydC5maWx0ZXIoJ3gnLCAoX3ZhbDogYW55LCBpdGVtOiBhbnkpID0+IGl0ZW0uY2hlY2tlZCAhPT0gZmFsc2UpO1xuICAgIGNoYXJ0XG4gICAgICAuaW50ZXJ2YWwoKVxuICAgICAgLmFkanVzdCgnc3RhY2snKVxuICAgICAgLnBvc2l0aW9uKCd5JylcbiAgICAgIC50b29sdGlwKCd4KnBlcmNlbnQnLCAobmFtZTogc3RyaW5nLCBwOiBudW1iZXIpID0+ICh7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIHZhbHVlOiBgJHtoYXNMZWdlbmQgPyBwIDogKHAgKiAxMDApLnRvRml4ZWQoMil9ICVgLFxuICAgICAgfSkpXG4gICAgICAuc3RhdGUoe30pO1xuXG4gICAgY2hhcnQub24oYGludGVydmFsOmNsaWNrYCwgKGV2OiBFdmVudCkgPT4ge1xuICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMuY2xpY2tJdGVtLmVtaXQoeyBpdGVtOiBldi5kYXRhPy5kYXRhLCBldiB9KSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmF0dGFjaENoYXJ0KCk7XG4gIH1cblxuICBhdHRhY2hDaGFydCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IF9jaGFydCwgaGVpZ2h0LCBwYWRkaW5nLCBhbmltYXRlLCBkYXRhLCBsaW5lV2lkdGgsIGlzUGVyY2VudCwgcGVyY2VudENvbG9yLCBjb2xvcnMgfSA9IHRoaXM7XG4gICAgaWYgKCFfY2hhcnQpIHJldHVybjtcblxuICAgIF9jaGFydC5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgX2NoYXJ0LnBhZGRpbmcgPSBwYWRkaW5nO1xuICAgIF9jaGFydC5hbmltYXRlKGFuaW1hdGUpO1xuICAgIF9jaGFydC5nZW9tZXRyaWVzWzBdLnN0eWxlKHsgbGluZVdpZHRoLCBzdHJva2U6ICcjZmZmJyB9KS5jb2xvcigneCcsIGlzUGVyY2VudCA/IHBlcmNlbnRDb2xvciA6IGNvbG9ycyk7XG4gICAgX2NoYXJ0LnNjYWxlKHtcbiAgICAgIHg6IHtcbiAgICAgICAgdHlwZTogJ2NhdCcsXG4gICAgICAgIHJhbmdlOiBbMCwgMV0sXG4gICAgICB9LFxuICAgIH0pO1xuICAgIC8vIOi9rOWMliBwZXJjZW50XG4gICAgY29uc3QgdG90YWxTdW0gPSBkYXRhLnJlZHVjZSgoY3VyLCBpdGVtKSA9PiBjdXIgKyBpdGVtLnksIDApO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiBkYXRhKSB7XG4gICAgICBpdGVtLnBlcmNlbnQgPSB0b3RhbFN1bSA9PT0gMCA/IDAgOiBpdGVtLnkgLyB0b3RhbFN1bTtcbiAgICB9XG4gICAgX2NoYXJ0LmNoYW5nZURhdGEoZGF0YSk7XG4gICAgX2NoYXJ0LnJlbmRlcigpO1xuXG4gICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMuZ2VuTGVnZW5kKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5MZWdlbmQoKTogdm9pZCB7XG4gICAgY29uc3QgeyBoYXNMZWdlbmQsIGlzUGVyY2VudCwgY2RyLCBfY2hhcnQgfSA9IHRoaXM7XG4gICAgaWYgKCFoYXNMZWdlbmQgfHwgaXNQZXJjZW50KSByZXR1cm47XG5cbiAgICB0aGlzLmxlZ2VuZERhdGEgPSBfY2hhcnQuZ2VvbWV0cmllc1swXS5kYXRhQXJyYXkubWFwKChpdGVtOiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IG9yaWdpbiA9IGl0ZW1bMF0uX29yaWdpbjtcbiAgICAgIG9yaWdpbi5jb2xvciA9IGl0ZW1bMF0uY29sb3I7XG4gICAgICBvcmlnaW4uY2hlY2tlZCA9IHRydWU7XG4gICAgICBvcmlnaW4ucGVyY2VudCA9IChvcmlnaW4ucGVyY2VudCAqIDEwMCkudG9GaXhlZCgyKTtcbiAgICAgIHJldHVybiBvcmlnaW47XG4gICAgfSk7XG5cbiAgICBjZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgX2NsaWNrKGk6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IHsgbGVnZW5kRGF0YSwgX2NoYXJ0IH0gPSB0aGlzO1xuICAgIGxlZ2VuZERhdGFbaV0uY2hlY2tlZCA9ICFsZWdlbmREYXRhW2ldLmNoZWNrZWQ7XG4gICAgX2NoYXJ0LnJlbmRlcigpO1xuICB9XG5cbiAgb25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuZml4RGF0YSgpO1xuICB9XG59XG4iLCI8bnotc2tlbGV0b24gKm5nSWY9XCIhbG9hZGVkXCI+PC9uei1za2VsZXRvbj5cbjxkaXYgY2xhc3M9XCJnMi1waWVfX2NoYXJ0XCI+XG4gIDxkaXYgI2NvbnRhaW5lcj48L2Rpdj5cbiAgPGRpdiAqbmdJZj1cInN1YlRpdGxlIHx8IHRvdGFsXCIgY2xhc3M9XCJnMi1waWVfX3RvdGFsXCI+XG4gICAgPGg0ICpuZ0lmPVwic3ViVGl0bGVcIiBjbGFzcz1cImcyLXBpZV9fdG90YWwtdGl0bGVcIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJzdWJUaXRsZVwiPlxuICAgICAgICA8ZGl2IFtpbm5lckhUTUxdPVwic3ViVGl0bGVcIj48L2Rpdj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvaDQ+XG4gICAgPGRpdiAqbmdJZj1cInRvdGFsXCIgY2xhc3M9XCJnMi1waWVfX3RvdGFsLXN0YXRcIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJ0b3RhbFwiPlxuICAgICAgICA8ZGl2IFtpbm5lckhUTUxdPVwidG90YWxcIj48L2Rpdj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuPHVsICpuZ0lmPVwiaGFzTGVnZW5kICYmIGxlZ2VuZERhdGE/Lmxlbmd0aFwiIGNsYXNzPVwiZzItcGllX19sZWdlbmRcIj5cbiAgPGxpICpuZ0Zvcj1cImxldCBpdGVtIG9mIGxlZ2VuZERhdGE7IGxldCBpbmRleCA9IGluZGV4XCIgKGNsaWNrKT1cIl9jbGljayhpbmRleClcIiBjbGFzcz1cImcyLXBpZV9fbGVnZW5kLWl0ZW1cIj5cbiAgICA8c3BhbiBjbGFzcz1cImcyLXBpZV9fbGVnZW5kLWRvdFwiIFtuZ1N0eWxlXT1cInsgJ2JhY2tncm91bmQtY29sb3InOiAhaXRlbS5jaGVja2VkID8gJyNhYWEnIDogaXRlbS5jb2xvciB9XCI+PC9zcGFuPlxuICAgIDxzcGFuIGNsYXNzPVwiZzItcGllX19sZWdlbmQtdGl0bGVcIj57eyBpdGVtLnggfX08L3NwYW4+XG4gICAgPG56LWRpdmlkZXIgbnpUeXBlPVwidmVydGljYWxcIj48L256LWRpdmlkZXI+XG4gICAgPHNwYW4gY2xhc3M9XCJnMi1waWVfX2xlZ2VuZC1wZXJjZW50XCI+e3sgaXRlbS5wZXJjZW50IH19JTwvc3Bhbj5cbiAgICA8c3BhbiBjbGFzcz1cImcyLXBpZV9fbGVnZW5kLXZhbHVlXCIgW2lubmVySFRNTF09XCJ2YWx1ZUZvcm1hdCA/IHZhbHVlRm9ybWF0KGl0ZW0ueSkgOiBpdGVtLnlcIj48L3NwYW4+XG4gIDwvbGk+XG48L3VsPlxuIl19