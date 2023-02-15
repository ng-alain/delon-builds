import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { G2BaseComponent } from '@delon/chart/core';
import { InputBoolean, InputNumber } from '@delon/util/decorator';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/divider";
import * as i3 from "ng-zorro-antd/core/outlet";
import * as i4 from "ng-zorro-antd/skeleton";
export class G2PieComponent extends G2BaseComponent {
    constructor() {
        super(...arguments);
        this.legendData = [];
        this.isPercent = false;
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
        this.ratio = {
            text: '占比',
            inverse: '反比',
            color: '',
            inverseColor: '#F0F2F5'
        };
        this.clickItem = new EventEmitter();
        // #endregion
        this.block = false;
    }
    fixData() {
        const { percent, color } = this;
        this.isPercent = percent != null;
        if (!this.isPercent) {
            return;
        }
        this.select = false;
        this.tooltip = false;
        const { text, inverse, color: textColor, inverseColor } = this.ratio;
        this.percentColor = (value) => (value === text ? textColor || color : inverseColor);
        this.data = [
            {
                x: text,
                y: percent
            },
            {
                x: inverse,
                y: 100 - percent
            }
        ];
    }
    updateBlock() {
        this.block = this._chart && this.hasLegend && this.el.nativeElement.clientWidth <= this.blockMaxWidth;
        this.cdr.detectChanges();
    }
    install() {
        const { node, height, padding, tooltip, inner, hasLegend, interaction, theme, animate, lineWidth, isPercent, percentColor, colors } = this;
        const chart = (this._chart = new this.winG2.Chart({
            container: node.nativeElement,
            autoFit: true,
            height,
            padding,
            theme
        }));
        chart.animate(animate);
        if (!tooltip) {
            chart.tooltip(false);
        }
        else {
            chart.tooltip({
                showTitle: false,
                showMarkers: false
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
            .style({ lineWidth, stroke: '#fff' })
            .color('x', isPercent ? percentColor : colors)
            .tooltip('x*percent', (name, p) => ({
            name,
            value: `${hasLegend ? p : (p * 100).toFixed(2)} %`
        }))
            .state({});
        chart.scale({
            x: {
                type: 'cat',
                range: [0, 1]
            }
        });
        chart
            .on(`interval:click`, (ev) => {
            this.ngZone.run(() => this.clickItem.emit({ item: ev.data?.data, ev }));
        })
            .on('afterrender', () => {
            this.ngZone.run(() => this.updateBlock());
        });
        this.ready.next(chart);
        this.changeData();
        chart.render();
    }
    changeData() {
        const { _chart, data } = this;
        if (!_chart || !Array.isArray(data) || data.length <= 0)
            return;
        // 转化 percent
        const totalSum = data.reduce((cur, item) => cur + item.y, 0);
        for (const item of data) {
            item.percent = totalSum === 0 ? 0 : item.y / totalSum;
        }
        _chart.changeData(data);
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
        _chart.render(true);
    }
    onChanges() {
        this.fixData();
    }
}
G2PieComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.4", ngImport: i0, type: G2PieComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
G2PieComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.4", type: G2PieComponent, selector: "g2-pie", inputs: { animate: "animate", color: "color", subTitle: "subTitle", total: "total", height: "height", hasLegend: "hasLegend", inner: "inner", padding: "padding", percent: "percent", tooltip: "tooltip", lineWidth: "lineWidth", blockMaxWidth: "blockMaxWidth", select: "select", valueFormat: "valueFormat", data: "data", colors: "colors", interaction: "interaction", ratio: "ratio" }, outputs: { clickItem: "clickItem" }, host: { properties: { "class.g2-pie": "true", "class.g2-pie__legend-has": "hasLegend", "class.g2-pie__legend-block": "block", "class.g2-pie__mini": "isPercent" } }, exportAs: ["g2Pie"], usesInheritance: true, ngImport: i0, template: "<nz-skeleton *ngIf=\"!loaded\"></nz-skeleton>\n<div class=\"g2-pie__chart\">\n  <div #container></div>\n  <div *ngIf=\"subTitle || total\" class=\"g2-pie__total\">\n    <h4 *ngIf=\"subTitle\" class=\"g2-pie__total-title\">\n      <ng-container *nzStringTemplateOutlet=\"subTitle\">\n        <div [innerHTML]=\"subTitle\"></div>\n      </ng-container>\n    </h4>\n    <div *ngIf=\"total\" class=\"g2-pie__total-stat\">\n      <ng-container *nzStringTemplateOutlet=\"total\">\n        <div [innerHTML]=\"total\"></div>\n      </ng-container>\n    </div>\n  </div>\n</div>\n<ul *ngIf=\"hasLegend && legendData?.length\" class=\"g2-pie__legend\">\n  <li *ngFor=\"let item of legendData; let index = index\" (click)=\"_click(index)\" class=\"g2-pie__legend-item\">\n    <span class=\"g2-pie__legend-dot\" [ngStyle]=\"{ 'background-color': !item.checked ? '#aaa' : item.color }\"></span>\n    <span class=\"g2-pie__legend-title\">{{ item.x }}</span>\n    <nz-divider nzType=\"vertical\"></nz-divider>\n    <span class=\"g2-pie__legend-percent\">{{ item.percent }}%</span>\n    <span class=\"g2-pie__legend-value\" [innerHTML]=\"valueFormat ? valueFormat(item.y) : item.y\"></span>\n  </li>\n</ul>\n", dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "component", type: i2.NzDividerComponent, selector: "nz-divider", inputs: ["nzText", "nzType", "nzOrientation", "nzDashed", "nzPlain"], exportAs: ["nzDivider"] }, { kind: "directive", type: i3.NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { kind: "component", type: i4.NzSkeletonComponent, selector: "nz-skeleton", inputs: ["nzActive", "nzLoading", "nzRound", "nzTitle", "nzAvatar", "nzParagraph"], exportAs: ["nzSkeleton"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    InputBoolean()
], G2PieComponent.prototype, "animate", void 0);
__decorate([
    InputNumber()
], G2PieComponent.prototype, "height", void 0);
__decorate([
    InputBoolean()
], G2PieComponent.prototype, "hasLegend", void 0);
__decorate([
    InputNumber()
], G2PieComponent.prototype, "percent", void 0);
__decorate([
    InputBoolean()
], G2PieComponent.prototype, "tooltip", void 0);
__decorate([
    InputNumber()
], G2PieComponent.prototype, "lineWidth", void 0);
__decorate([
    InputNumber()
], G2PieComponent.prototype, "blockMaxWidth", void 0);
__decorate([
    InputBoolean()
], G2PieComponent.prototype, "select", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.4", ngImport: i0, type: G2PieComponent, decorators: [{
            type: Component,
            args: [{ selector: 'g2-pie', exportAs: 'g2Pie', host: {
                        '[class.g2-pie]': 'true',
                        '[class.g2-pie__legend-has]': 'hasLegend',
                        '[class.g2-pie__legend-block]': 'block',
                        '[class.g2-pie__mini]': 'isPercent'
                    }, preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<nz-skeleton *ngIf=\"!loaded\"></nz-skeleton>\n<div class=\"g2-pie__chart\">\n  <div #container></div>\n  <div *ngIf=\"subTitle || total\" class=\"g2-pie__total\">\n    <h4 *ngIf=\"subTitle\" class=\"g2-pie__total-title\">\n      <ng-container *nzStringTemplateOutlet=\"subTitle\">\n        <div [innerHTML]=\"subTitle\"></div>\n      </ng-container>\n    </h4>\n    <div *ngIf=\"total\" class=\"g2-pie__total-stat\">\n      <ng-container *nzStringTemplateOutlet=\"total\">\n        <div [innerHTML]=\"total\"></div>\n      </ng-container>\n    </div>\n  </div>\n</div>\n<ul *ngIf=\"hasLegend && legendData?.length\" class=\"g2-pie__legend\">\n  <li *ngFor=\"let item of legendData; let index = index\" (click)=\"_click(index)\" class=\"g2-pie__legend-item\">\n    <span class=\"g2-pie__legend-dot\" [ngStyle]=\"{ 'background-color': !item.checked ? '#aaa' : item.color }\"></span>\n    <span class=\"g2-pie__legend-title\">{{ item.x }}</span>\n    <nz-divider nzType=\"vertical\"></nz-divider>\n    <span class=\"g2-pie__legend-percent\">{{ item.percent }}%</span>\n    <span class=\"g2-pie__legend-value\" [innerHTML]=\"valueFormat ? valueFormat(item.y) : item.y\"></span>\n  </li>\n</ul>\n" }]
        }], propDecorators: { animate: [{
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
            }], ratio: [{
                type: Input
            }], clickItem: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NoYXJ0L3BpZS9waWUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY2hhcnQvcGllL3BpZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBRU4saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBSXZCLE9BQU8sRUFBRSxlQUFlLEVBQXFCLE1BQU0sbUJBQW1CLENBQUM7QUFDdkUsT0FBTyxFQUFnQixZQUFZLEVBQUUsV0FBVyxFQUFlLE1BQU0sdUJBQXVCLENBQUM7Ozs7OztBQXVDN0YsTUFBTSxPQUFPLGNBQWUsU0FBUSxlQUFlO0lBZG5EOztRQXlCRSxlQUFVLEdBQWdCLEVBQUUsQ0FBQztRQUM3QixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBRWxCLGlCQUFpQjtRQUVRLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFDL0IsVUFBSyxHQUFHLDBCQUEwQixDQUFDO1FBR3BCLFdBQU0sR0FBRyxDQUFDLENBQUM7UUFDVixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLFVBQUssR0FBRyxJQUFJLENBQUM7UUFDYixZQUFPLEdBQStCLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFckMsWUFBTyxHQUFHLElBQUksQ0FBQztRQUNoQixjQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2Qsa0JBQWEsR0FBRyxHQUFHLENBQUM7UUFDbkIsV0FBTSxHQUFHLElBQUksQ0FBQztRQUU5QixTQUFJLEdBQWdCLEVBQUUsQ0FBQztRQUV2QixnQkFBVyxHQUFzQixNQUFNLENBQUM7UUFDeEMsVUFBSyxHQUFlO1lBQzNCLElBQUksRUFBRSxJQUFJO1lBQ1Ys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NUIsY0FBYztrQkFkMUIsU0FBUzsrQkFDRSxRQUFRLFlBQ1IsT0FBTyxRQUVYO3dCQUNKLGdCQUFnQixFQUFFLE1BQU07d0JBQ3hCLDRCQUE0QixFQUFFLFdBQVc7d0JBQ3pDLDhCQUE4QixFQUFFLE9BQU87d0JBQ3ZDLHNCQUFzQixFQUFFLFdBQVc7cUJBQ3BDLHVCQUNvQixLQUFLLG1CQUNULHVCQUF1QixDQUFDLE1BQU0saUJBQ2hDLGlCQUFpQixDQUFDLElBQUk7OEJBa0JaLE9BQU87c0JBQS9CLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNrQixNQUFNO3NCQUE3QixLQUFLO2dCQUNtQixTQUFTO3NCQUFqQyxLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxPQUFPO3NCQUFmLEtBQUs7Z0JBQ2tCLE9BQU87c0JBQTlCLEtBQUs7Z0JBQ21CLE9BQU87c0JBQS9CLEtBQUs7Z0JBQ2tCLFNBQVM7c0JBQWhDLEtBQUs7Z0JBQ2tCLGFBQWE7c0JBQXBDLEtBQUs7Z0JBQ21CLE1BQU07c0JBQTlCLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQU1hLFNBQVM7c0JBQTNCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHR5cGUgeyBDaGFydCwgRXZlbnQgfSBmcm9tICdAYW50di9nMic7XG5cbmltcG9ydCB7IEcyQmFzZUNvbXBvbmVudCwgRzJJbnRlcmFjdGlvblR5cGUgfSBmcm9tICdAZGVsb24vY2hhcnQvY29yZSc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIsIE51bWJlcklucHV0IH0gZnJvbSAnQGRlbG9uL3V0aWwvZGVjb3JhdG9yJztcbmltcG9ydCB0eXBlIHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBHMlBpZURhdGEge1xuICB4OiBOelNhZmVBbnk7XG4gIHk6IG51bWJlcjtcbiAgW2tleTogc3RyaW5nXTogTnpTYWZlQW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEcyUGllQ2xpY2tJdGVtIHtcbiAgaXRlbTogRzJQaWVEYXRhO1xuICBldjogRXZlbnQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRzJQaWVSYXRpbyB7XG4gIC8qKiDljaDmr5TmlofmnKzvvIzpu5jorqTvvJpg5Y2g5q+UYCAqL1xuICB0ZXh0OiBzdHJpbmc7XG4gIC8qKiDlj43mr5TmlofmnKzvvIzpu5jorqTvvJpg5Y+N5q+UYCAqL1xuICBpbnZlcnNlOiBzdHJpbmc7XG4gIC8qKiDmraPmr5TpopzoibLvvIzpu5jorqTkvb/nlKggYGNvbG9yYCDlgLwgKi9cbiAgY29sb3I6IHN0cmluZztcbiAgLyoqIOWPjeavlOminOiJsu+8jOm7mOiupO+8mmAjRjBGMkY1YCAqL1xuICBpbnZlcnNlQ29sb3I6IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZzItcGllJyxcbiAgZXhwb3J0QXM6ICdnMlBpZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9waWUuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5nMi1waWVdJzogJ3RydWUnLFxuICAgICdbY2xhc3MuZzItcGllX19sZWdlbmQtaGFzXSc6ICdoYXNMZWdlbmQnLFxuICAgICdbY2xhc3MuZzItcGllX19sZWdlbmQtYmxvY2tdJzogJ2Jsb2NrJyxcbiAgICAnW2NsYXNzLmcyLXBpZV9fbWluaV0nOiAnaXNQZXJjZW50J1xuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRzJQaWVDb21wb25lbnQgZXh0ZW5kcyBHMkJhc2VDb21wb25lbnQge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfaGVpZ2h0OiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2FuaW1hdGU6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2hhc0xlZ2VuZDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfcGVyY2VudDogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV90b29sdGlwOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9saW5lV2lkdGg6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfYmxvY2tNYXhXaWR0aDogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9zZWxlY3Q6IEJvb2xlYW5JbnB1dDtcblxuICBwcml2YXRlIHBlcmNlbnRDb2xvciE6ICh2YWx1ZTogc3RyaW5nKSA9PiBzdHJpbmc7XG4gIGxlZ2VuZERhdGE6IE56U2FmZUFueVtdID0gW107XG4gIGlzUGVyY2VudCA9IGZhbHNlO1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGFuaW1hdGUgPSB0cnVlO1xuICBASW5wdXQoKSBjb2xvciA9ICdyZ2JhKDI0LCAxNDQsIDI1NSwgMC44NSknO1xuICBASW5wdXQoKSBzdWJUaXRsZT86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbDtcbiAgQElucHV0KCkgdG90YWw/OiBzdHJpbmcgfCBudW1iZXIgfCBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGw7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGhlaWdodCA9IDA7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBoYXNMZWdlbmQgPSBmYWxzZTtcbiAgQElucHV0KCkgaW5uZXIgPSAwLjc1O1xuICBASW5wdXQoKSBwYWRkaW5nOiBudW1iZXIgfCBudW1iZXJbXSB8ICdhdXRvJyA9IFsxMiwgMCwgMTIsIDBdO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBwZXJjZW50PzogbnVtYmVyO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgdG9vbHRpcCA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGxpbmVXaWR0aCA9IDA7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGJsb2NrTWF4V2lkdGggPSAzODA7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzZWxlY3QgPSB0cnVlO1xuICBASW5wdXQoKSB2YWx1ZUZvcm1hdD86ICh5OiBudW1iZXIpID0+IHN0cmluZztcbiAgQElucHV0KCkgZGF0YTogRzJQaWVEYXRhW10gPSBbXTtcbiAgQElucHV0KCkgY29sb3JzPzogc3RyaW5nW107XG4gIEBJbnB1dCgpIGludGVyYWN0aW9uOiBHMkludGVyYWN0aW9uVHlwZSA9ICdub25lJztcbiAgQElucHV0KCkgcmF0aW86IEcyUGllUmF0aW8gPSB7XG4gICAgdGV4dDogJ+WNoOavlCcsXG4gICAgaW52ZXJzZTogJ+WPjeavlCcsXG4gICAgY29sb3I6ICcnLFxuICAgIGludmVyc2VDb2xvcjogJyNGMEYyRjUnXG4gIH07XG4gIEBPdXRwdXQoKSByZWFkb25seSBjbGlja0l0ZW0gPSBuZXcgRXZlbnRFbWl0dGVyPEcyUGllQ2xpY2tJdGVtPigpO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBibG9jazogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHByaXZhdGUgZml4RGF0YSgpOiB2b2lkIHtcbiAgICBjb25zdCB7IHBlcmNlbnQsIGNvbG9yIH0gPSB0aGlzO1xuICAgIHRoaXMuaXNQZXJjZW50ID0gcGVyY2VudCAhPSBudWxsO1xuICAgIGlmICghdGhpcy5pc1BlcmNlbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNlbGVjdCA9IGZhbHNlO1xuICAgIHRoaXMudG9vbHRpcCA9IGZhbHNlO1xuICAgIGNvbnN0IHsgdGV4dCwgaW52ZXJzZSwgY29sb3I6IHRleHRDb2xvciwgaW52ZXJzZUNvbG9yIH0gPSB0aGlzLnJhdGlvO1xuICAgIHRoaXMucGVyY2VudENvbG9yID0gKHZhbHVlOiBzdHJpbmcpID0+ICh2YWx1ZSA9PT0gdGV4dCA/IHRleHRDb2xvciB8fCBjb2xvciA6IGludmVyc2VDb2xvcik7XG4gICAgdGhpcy5kYXRhID0gW1xuICAgICAge1xuICAgICAgICB4OiB0ZXh0LFxuICAgICAgICB5OiBwZXJjZW50IVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgeDogaW52ZXJzZSxcbiAgICAgICAgeTogMTAwIC0gcGVyY2VudCFcbiAgICAgIH1cbiAgICBdO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVCbG9jaygpOiB2b2lkIHtcbiAgICB0aGlzLmJsb2NrID0gdGhpcy5fY2hhcnQgJiYgdGhpcy5oYXNMZWdlbmQgJiYgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoIDw9IHRoaXMuYmxvY2tNYXhXaWR0aDtcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBpbnN0YWxsKCk6IHZvaWQge1xuICAgIGNvbnN0IHtcbiAgICAgIG5vZGUsXG4gICAgICBoZWlnaHQsXG4gICAgICBwYWRkaW5nLFxuICAgICAgdG9vbHRpcCxcbiAgICAgIGlubmVyLFxuICAgICAgaGFzTGVnZW5kLFxuICAgICAgaW50ZXJhY3Rpb24sXG4gICAgICB0aGVtZSxcbiAgICAgIGFuaW1hdGUsXG4gICAgICBsaW5lV2lkdGgsXG4gICAgICBpc1BlcmNlbnQsXG4gICAgICBwZXJjZW50Q29sb3IsXG4gICAgICBjb2xvcnNcbiAgICB9ID0gdGhpcztcbiAgICBjb25zdCBjaGFydDogQ2hhcnQgPSAodGhpcy5fY2hhcnQgPSBuZXcgdGhpcy53aW5HMi5DaGFydCh7XG4gICAgICBjb250YWluZXI6IG5vZGUubmF0aXZlRWxlbWVudCxcbiAgICAgIGF1dG9GaXQ6IHRydWUsXG4gICAgICBoZWlnaHQsXG4gICAgICBwYWRkaW5nLFxuICAgICAgdGhlbWVcbiAgICB9KSk7XG4gICAgY2hhcnQuYW5pbWF0ZShhbmltYXRlKTtcblxuICAgIGlmICghdG9vbHRpcCkge1xuICAgICAgY2hhcnQudG9vbHRpcChmYWxzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoYXJ0LnRvb2x0aXAoe1xuICAgICAgICBzaG93VGl0bGU6IGZhbHNlLFxuICAgICAgICBzaG93TWFya2VyczogZmFsc2VcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoaW50ZXJhY3Rpb24gIT09ICdub25lJykge1xuICAgICAgY2hhcnQuaW50ZXJhY3Rpb24oaW50ZXJhY3Rpb24pO1xuICAgIH1cbiAgICBjaGFydC5heGlzKGZhbHNlKS5sZWdlbmQoZmFsc2UpLmNvb3JkaW5hdGUoJ3RoZXRhJywgeyBpbm5lclJhZGl1czogaW5uZXIgfSk7XG4gICAgY2hhcnQuZmlsdGVyKCd4JywgKF92YWw6IE56U2FmZUFueSwgaXRlbTogTnpTYWZlQW55KSA9PiBpdGVtLmNoZWNrZWQgIT09IGZhbHNlKTtcbiAgICBjaGFydFxuICAgICAgLmludGVydmFsKClcbiAgICAgIC5hZGp1c3QoJ3N0YWNrJylcbiAgICAgIC5wb3NpdGlvbigneScpXG4gICAgICAuc3R5bGUoeyBsaW5lV2lkdGgsIHN0cm9rZTogJyNmZmYnIH0pXG4gICAgICAuY29sb3IoJ3gnLCBpc1BlcmNlbnQgPyBwZXJjZW50Q29sb3IgOiBjb2xvcnMpXG4gICAgICAudG9vbHRpcCgneCpwZXJjZW50JywgKG5hbWU6IHN0cmluZywgcDogbnVtYmVyKSA9PiAoe1xuICAgICAgICBuYW1lLFxuICAgICAgICB2YWx1ZTogYCR7aGFzTGVnZW5kID8gcCA6IChwICogMTAwKS50b0ZpeGVkKDIpfSAlYFxuICAgICAgfSkpXG4gICAgICAuc3RhdGUoe30pO1xuICAgIGNoYXJ0LnNjYWxlKHtcbiAgICAgIHg6IHtcbiAgICAgICAgdHlwZTogJ2NhdCcsXG4gICAgICAgIHJhbmdlOiBbMCwgMV1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNoYXJ0XG4gICAgICAub24oYGludGVydmFsOmNsaWNrYCwgKGV2OiBFdmVudCkgPT4ge1xuICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gdGhpcy5jbGlja0l0ZW0uZW1pdCh7IGl0ZW06IGV2LmRhdGE/LmRhdGEsIGV2IH0pKTtcbiAgICAgIH0pXG4gICAgICAub24oJ2FmdGVycmVuZGVyJywgKCkgPT4ge1xuICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gdGhpcy51cGRhdGVCbG9jaygpKTtcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5yZWFkeS5uZXh0KGNoYXJ0KTtcblxuICAgIHRoaXMuY2hhbmdlRGF0YSgpO1xuXG4gICAgY2hhcnQucmVuZGVyKCk7XG4gIH1cblxuICBjaGFuZ2VEYXRhKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgX2NoYXJ0LCBkYXRhIH0gPSB0aGlzO1xuICAgIGlmICghX2NoYXJ0IHx8ICFBcnJheS5pc0FycmF5KGRhdGEpIHx8IGRhdGEubGVuZ3RoIDw9IDApIHJldHVybjtcblxuICAgIC8vIOi9rOWMliBwZXJjZW50XG4gICAgY29uc3QgdG90YWxTdW0gPSBkYXRhLnJlZHVjZSgoY3VyLCBpdGVtKSA9PiBjdXIgKyBpdGVtLnksIDApO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiBkYXRhKSB7XG4gICAgICBpdGVtLnBlcmNlbnQgPSB0b3RhbFN1bSA9PT0gMCA/IDAgOiBpdGVtLnkgLyB0b3RhbFN1bTtcbiAgICB9XG4gICAgX2NoYXJ0LmNoYW5nZURhdGEoZGF0YSk7XG5cbiAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gdGhpcy5nZW5MZWdlbmQoKSk7XG4gIH1cblxuICBwcml2YXRlIGdlbkxlZ2VuZCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IGhhc0xlZ2VuZCwgaXNQZXJjZW50LCBjZHIsIF9jaGFydCB9ID0gdGhpcztcbiAgICBpZiAoIWhhc0xlZ2VuZCB8fCBpc1BlcmNlbnQpIHJldHVybjtcblxuICAgIHRoaXMubGVnZW5kRGF0YSA9IF9jaGFydC5nZW9tZXRyaWVzWzBdLmRhdGFBcnJheS5tYXAoKGl0ZW06IE56U2FmZUFueSkgPT4ge1xuICAgICAgY29uc3Qgb3JpZ2luID0gaXRlbVswXS5fb3JpZ2luO1xuICAgICAgb3JpZ2luLmNvbG9yID0gaXRlbVswXS5jb2xvcjtcbiAgICAgIG9yaWdpbi5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIG9yaWdpbi5wZXJjZW50ID0gKG9yaWdpbi5wZXJjZW50ICogMTAwKS50b0ZpeGVkKDIpO1xuICAgICAgcmV0dXJuIG9yaWdpbjtcbiAgICB9KTtcblxuICAgIGNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBfY2xpY2soaTogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgeyBsZWdlbmREYXRhLCBfY2hhcnQgfSA9IHRoaXM7XG4gICAgbGVnZW5kRGF0YVtpXS5jaGVja2VkID0gIWxlZ2VuZERhdGFbaV0uY2hlY2tlZDtcbiAgICBfY2hhcnQucmVuZGVyKHRydWUpO1xuICB9XG5cbiAgb25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuZml4RGF0YSgpO1xuICB9XG59XG4iLCI8bnotc2tlbGV0b24gKm5nSWY9XCIhbG9hZGVkXCI+PC9uei1za2VsZXRvbj5cbjxkaXYgY2xhc3M9XCJnMi1waWVfX2NoYXJ0XCI+XG4gIDxkaXYgI2NvbnRhaW5lcj48L2Rpdj5cbiAgPGRpdiAqbmdJZj1cInN1YlRpdGxlIHx8IHRvdGFsXCIgY2xhc3M9XCJnMi1waWVfX3RvdGFsXCI+XG4gICAgPGg0ICpuZ0lmPVwic3ViVGl0bGVcIiBjbGFzcz1cImcyLXBpZV9fdG90YWwtdGl0bGVcIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJzdWJUaXRsZVwiPlxuICAgICAgICA8ZGl2IFtpbm5lckhUTUxdPVwic3ViVGl0bGVcIj48L2Rpdj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvaDQ+XG4gICAgPGRpdiAqbmdJZj1cInRvdGFsXCIgY2xhc3M9XCJnMi1waWVfX3RvdGFsLXN0YXRcIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJ0b3RhbFwiPlxuICAgICAgICA8ZGl2IFtpbm5lckhUTUxdPVwidG90YWxcIj48L2Rpdj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuPHVsICpuZ0lmPVwiaGFzTGVnZW5kICYmIGxlZ2VuZERhdGE/Lmxlbmd0aFwiIGNsYXNzPVwiZzItcGllX19sZWdlbmRcIj5cbiAgPGxpICpuZ0Zvcj1cImxldCBpdGVtIG9mIGxlZ2VuZERhdGE7IGxldCBpbmRleCA9IGluZGV4XCIgKGNsaWNrKT1cIl9jbGljayhpbmRleClcIiBjbGFzcz1cImcyLXBpZV9fbGVnZW5kLWl0ZW1cIj5cbiAgICA8c3BhbiBjbGFzcz1cImcyLXBpZV9fbGVnZW5kLWRvdFwiIFtuZ1N0eWxlXT1cInsgJ2JhY2tncm91bmQtY29sb3InOiAhaXRlbS5jaGVja2VkID8gJyNhYWEnIDogaXRlbS5jb2xvciB9XCI+PC9zcGFuPlxuICAgIDxzcGFuIGNsYXNzPVwiZzItcGllX19sZWdlbmQtdGl0bGVcIj57eyBpdGVtLnggfX08L3NwYW4+XG4gICAgPG56LWRpdmlkZXIgbnpUeXBlPVwidmVydGljYWxcIj48L256LWRpdmlkZXI+XG4gICAgPHNwYW4gY2xhc3M9XCJnMi1waWVfX2xlZ2VuZC1wZXJjZW50XCI+e3sgaXRlbS5wZXJjZW50IH19JTwvc3Bhbj5cbiAgICA8c3BhbiBjbGFzcz1cImcyLXBpZV9fbGVnZW5kLXZhbHVlXCIgW2lubmVySFRNTF09XCJ2YWx1ZUZvcm1hdCA/IHZhbHVlRm9ybWF0KGl0ZW0ueSkgOiBpdGVtLnlcIj48L3NwYW4+XG4gIDwvbGk+XG48L3VsPlxuIl19