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
G2PieComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.1", ngImport: i0, type: G2PieComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
G2PieComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.1", type: G2PieComponent, selector: "g2-pie", inputs: { animate: "animate", color: "color", subTitle: "subTitle", total: "total", height: "height", hasLegend: "hasLegend", inner: "inner", padding: "padding", percent: "percent", tooltip: "tooltip", lineWidth: "lineWidth", blockMaxWidth: "blockMaxWidth", select: "select", valueFormat: "valueFormat", data: "data", colors: "colors", interaction: "interaction", ratio: "ratio" }, outputs: { clickItem: "clickItem" }, host: { properties: { "class.g2-pie": "true", "class.g2-pie__legend-has": "hasLegend", "class.g2-pie__legend-block": "block", "class.g2-pie__mini": "isPercent" } }, exportAs: ["g2Pie"], usesInheritance: true, ngImport: i0, template: "<nz-skeleton *ngIf=\"!loaded\"></nz-skeleton>\n<div class=\"g2-pie__chart\">\n  <div #container></div>\n  <div *ngIf=\"subTitle || total\" class=\"g2-pie__total\">\n    <h4 *ngIf=\"subTitle\" class=\"g2-pie__total-title\">\n      <ng-container *nzStringTemplateOutlet=\"subTitle\">\n        <div [innerHTML]=\"subTitle\"></div>\n      </ng-container>\n    </h4>\n    <div *ngIf=\"total\" class=\"g2-pie__total-stat\">\n      <ng-container *nzStringTemplateOutlet=\"total\">\n        <div [innerHTML]=\"total\"></div>\n      </ng-container>\n    </div>\n  </div>\n</div>\n<ul *ngIf=\"hasLegend && legendData?.length\" class=\"g2-pie__legend\">\n  <li *ngFor=\"let item of legendData; let index = index\" (click)=\"_click(index)\" class=\"g2-pie__legend-item\">\n    <span class=\"g2-pie__legend-dot\" [ngStyle]=\"{ 'background-color': !item.checked ? '#aaa' : item.color }\"></span>\n    <span class=\"g2-pie__legend-title\">{{ item.x }}</span>\n    <nz-divider nzType=\"vertical\"></nz-divider>\n    <span class=\"g2-pie__legend-percent\">{{ item.percent }}%</span>\n    <span class=\"g2-pie__legend-value\" [innerHTML]=\"valueFormat ? valueFormat(item.y) : item.y\"></span>\n  </li>\n</ul>\n", dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "component", type: i2.NzDividerComponent, selector: "nz-divider", inputs: ["nzText", "nzType", "nzOrientation", "nzDashed", "nzPlain"], exportAs: ["nzDivider"] }, { kind: "directive", type: i3.NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { kind: "component", type: i4.NzSkeletonComponent, selector: "nz-skeleton", inputs: ["nzActive", "nzLoading", "nzRound", "nzTitle", "nzAvatar", "nzParagraph"], exportAs: ["nzSkeleton"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.1", ngImport: i0, type: G2PieComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NoYXJ0L3BpZS9waWUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY2hhcnQvcGllL3BpZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBRU4saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBSXZCLE9BQU8sRUFBRSxlQUFlLEVBQXFCLE1BQU0sbUJBQW1CLENBQUM7QUFDdkUsT0FBTyxFQUFnQixZQUFZLEVBQUUsV0FBVyxFQUFlLE1BQU0sdUJBQXVCLENBQUM7Ozs7OztBQXVDN0YsTUFBTSxPQUFPLGNBQWUsU0FBUSxlQUFlO0lBZG5EOztRQXlCRSxlQUFVLEdBQWdCLEVBQUUsQ0FBQztRQUM3QixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBRWxCLGlCQUFpQjtRQUVRLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFDL0IsVUFBSyxHQUFHLDBCQUEwQixDQUFDO1FBR3BCLFdBQU0sR0FBRyxDQUFDLENBQUM7UUFDVixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLFVBQUssR0FBRyxJQUFJLENBQUM7UUFDYixZQUFPLEdBQStCLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFckMsWUFBTyxHQUFHLElBQUksQ0FBQztRQUNoQixjQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2Qsa0JBQWEsR0FBRyxHQUFHLENBQUM7UUFDbkIsV0FBTSxHQUFHLElBQUksQ0FBQztRQUU5QixTQUFJLEdBQWdCLEVBQUUsQ0FBQztRQUV2QixnQkFBVyxHQUFzQixNQUFNLENBQUM7UUFDeEMsVUFBSyxHQUFlO1lBQzNCLElBQUksRUFBRSxJQUFJO1lBQ1Ys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WUFDUixPQUFPLFFBRVg7d0JBQ0osZ0JBQWdCLEVBQUUsTUFBTTt3QkFDeEIsNEJBQTRCLEVBQUUsV0FBVzt3QkFDekMsOEJBQThCLEVBQUUsT0FBTzt3QkFDdkMsc0JBQXNCLEVBQUUsV0FBVztxQkFDcEMsdUJBQ29CLEtBQUssbUJBQ1QsdUJBQXVCLENBQUMsTUFBTSxpQkFDaEMsaUJBQWlCLENBQUMsSUFBSTs4QkFrQlosT0FBTztzQkFBL0IsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ2tCLE1BQU07c0JBQTdCLEtBQUs7Z0JBQ21CLFNBQVM7c0JBQWpDLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLE9BQU87c0JBQWYsS0FBSztnQkFDa0IsT0FBTztzQkFBOUIsS0FBSztnQkFDbUIsT0FBTztzQkFBL0IsS0FBSztnQkFDa0IsU0FBUztzQkFBaEMsS0FBSztnQkFDa0IsYUFBYTtzQkFBcEMsS0FBSztnQkFDbUIsTUFBTTtzQkFBOUIsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBTWEsU0FBUztzQkFBM0IsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgdHlwZSB7IENoYXJ0LCBFdmVudCB9IGZyb20gJ0BhbnR2L2cyJztcblxuaW1wb3J0IHsgRzJCYXNlQ29tcG9uZW50LCBHMkludGVyYWN0aW9uVHlwZSB9IGZyb20gJ0BkZWxvbi9jaGFydC9jb3JlJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciwgTnVtYmVySW5wdXQgfSBmcm9tICdAZGVsb24vdXRpbC9kZWNvcmF0b3InO1xuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEcyUGllRGF0YSB7XG4gIHg6IE56U2FmZUFueTtcbiAgeTogbnVtYmVyO1xuICBba2V5OiBzdHJpbmddOiBOelNhZmVBbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRzJQaWVDbGlja0l0ZW0ge1xuICBpdGVtOiBHMlBpZURhdGE7XG4gIGV2OiBFdmVudDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHMlBpZVJhdGlvIHtcbiAgLyoqIOWNoOavlOaWh+acrO+8jOm7mOiupO+8mmDljaDmr5RgICovXG4gIHRleHQ6IHN0cmluZztcbiAgLyoqIOWPjeavlOaWh+acrO+8jOm7mOiupO+8mmDlj43mr5RgICovXG4gIGludmVyc2U6IHN0cmluZztcbiAgLyoqIOato+avlOminOiJsu+8jOm7mOiupOS9v+eUqCBgY29sb3JgIOWAvCAqL1xuICBjb2xvcjogc3RyaW5nO1xuICAvKiog5Y+N5q+U6aKc6Imy77yM6buY6K6k77yaYCNGMEYyRjVgICovXG4gIGludmVyc2VDb2xvcjogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnMi1waWUnLFxuICBleHBvcnRBczogJ2cyUGllJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BpZS5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmcyLXBpZV0nOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy5nMi1waWVfX2xlZ2VuZC1oYXNdJzogJ2hhc0xlZ2VuZCcsXG4gICAgJ1tjbGFzcy5nMi1waWVfX2xlZ2VuZC1ibG9ja10nOiAnYmxvY2snLFxuICAgICdbY2xhc3MuZzItcGllX19taW5pXSc6ICdpc1BlcmNlbnQnXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBHMlBpZUNvbXBvbmVudCBleHRlbmRzIEcyQmFzZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9oZWlnaHQ6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfYW5pbWF0ZTogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfaGFzTGVnZW5kOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9wZXJjZW50OiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3Rvb2x0aXA6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2xpbmVXaWR0aDogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9ibG9ja01heFdpZHRoOiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3NlbGVjdDogQm9vbGVhbklucHV0O1xuXG4gIHByaXZhdGUgcGVyY2VudENvbG9yITogKHZhbHVlOiBzdHJpbmcpID0+IHN0cmluZztcbiAgbGVnZW5kRGF0YTogTnpTYWZlQW55W10gPSBbXTtcbiAgaXNQZXJjZW50ID0gZmFsc2U7XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYW5pbWF0ZSA9IHRydWU7XG4gIEBJbnB1dCgpIGNvbG9yID0gJ3JnYmEoMjQsIDE0NCwgMjU1LCAwLjg1KSc7XG4gIEBJbnB1dCgpIHN1YlRpdGxlPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsO1xuICBASW5wdXQoKSB0b3RhbD86IHN0cmluZyB8IG51bWJlciB8IFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbDtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgaGVpZ2h0ID0gMDtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGhhc0xlZ2VuZCA9IGZhbHNlO1xuICBASW5wdXQoKSBpbm5lciA9IDAuNzU7XG4gIEBJbnB1dCgpIHBhZGRpbmc6IG51bWJlciB8IG51bWJlcltdIHwgJ2F1dG8nID0gWzEyLCAwLCAxMiwgMF07XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHBlcmNlbnQ/OiBudW1iZXI7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSB0b29sdGlwID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgbGluZVdpZHRoID0gMDtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgYmxvY2tNYXhXaWR0aCA9IDM4MDtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNlbGVjdCA9IHRydWU7XG4gIEBJbnB1dCgpIHZhbHVlRm9ybWF0PzogKHk6IG51bWJlcikgPT4gc3RyaW5nO1xuICBASW5wdXQoKSBkYXRhOiBHMlBpZURhdGFbXSA9IFtdO1xuICBASW5wdXQoKSBjb2xvcnM/OiBzdHJpbmdbXTtcbiAgQElucHV0KCkgaW50ZXJhY3Rpb246IEcySW50ZXJhY3Rpb25UeXBlID0gJ25vbmUnO1xuICBASW5wdXQoKSByYXRpbzogRzJQaWVSYXRpbyA9IHtcbiAgICB0ZXh0OiAn5Y2g5q+UJyxcbiAgICBpbnZlcnNlOiAn5Y+N5q+UJyxcbiAgICBjb2xvcjogJycsXG4gICAgaW52ZXJzZUNvbG9yOiAnI0YwRjJGNSdcbiAgfTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNsaWNrSXRlbSA9IG5ldyBFdmVudEVtaXR0ZXI8RzJQaWVDbGlja0l0ZW0+KCk7XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGJsb2NrOiBib29sZWFuID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBmaXhEYXRhKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgcGVyY2VudCwgY29sb3IgfSA9IHRoaXM7XG4gICAgdGhpcy5pc1BlcmNlbnQgPSBwZXJjZW50ICE9IG51bGw7XG4gICAgaWYgKCF0aGlzLmlzUGVyY2VudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2VsZWN0ID0gZmFsc2U7XG4gICAgdGhpcy50b29sdGlwID0gZmFsc2U7XG4gICAgY29uc3QgeyB0ZXh0LCBpbnZlcnNlLCBjb2xvcjogdGV4dENvbG9yLCBpbnZlcnNlQ29sb3IgfSA9IHRoaXMucmF0aW87XG4gICAgdGhpcy5wZXJjZW50Q29sb3IgPSAodmFsdWU6IHN0cmluZykgPT4gKHZhbHVlID09PSB0ZXh0ID8gdGV4dENvbG9yIHx8IGNvbG9yIDogaW52ZXJzZUNvbG9yKTtcbiAgICB0aGlzLmRhdGEgPSBbXG4gICAgICB7XG4gICAgICAgIHg6IHRleHQsXG4gICAgICAgIHk6IHBlcmNlbnQhXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB4OiBpbnZlcnNlLFxuICAgICAgICB5OiAxMDAgLSBwZXJjZW50IVxuICAgICAgfVxuICAgIF07XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUJsb2NrKCk6IHZvaWQge1xuICAgIHRoaXMuYmxvY2sgPSB0aGlzLl9jaGFydCAmJiB0aGlzLmhhc0xlZ2VuZCAmJiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGggPD0gdGhpcy5ibG9ja01heFdpZHRoO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIGluc3RhbGwoKTogdm9pZCB7XG4gICAgY29uc3Qge1xuICAgICAgbm9kZSxcbiAgICAgIGhlaWdodCxcbiAgICAgIHBhZGRpbmcsXG4gICAgICB0b29sdGlwLFxuICAgICAgaW5uZXIsXG4gICAgICBoYXNMZWdlbmQsXG4gICAgICBpbnRlcmFjdGlvbixcbiAgICAgIHRoZW1lLFxuICAgICAgYW5pbWF0ZSxcbiAgICAgIGxpbmVXaWR0aCxcbiAgICAgIGlzUGVyY2VudCxcbiAgICAgIHBlcmNlbnRDb2xvcixcbiAgICAgIGNvbG9yc1xuICAgIH0gPSB0aGlzO1xuICAgIGNvbnN0IGNoYXJ0OiBDaGFydCA9ICh0aGlzLl9jaGFydCA9IG5ldyB0aGlzLndpbkcyLkNoYXJ0KHtcbiAgICAgIGNvbnRhaW5lcjogbm9kZS5uYXRpdmVFbGVtZW50LFxuICAgICAgYXV0b0ZpdDogdHJ1ZSxcbiAgICAgIGhlaWdodCxcbiAgICAgIHBhZGRpbmcsXG4gICAgICB0aGVtZVxuICAgIH0pKTtcbiAgICBjaGFydC5hbmltYXRlKGFuaW1hdGUpO1xuXG4gICAgaWYgKCF0b29sdGlwKSB7XG4gICAgICBjaGFydC50b29sdGlwKGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hhcnQudG9vbHRpcCh7XG4gICAgICAgIHNob3dUaXRsZTogZmFsc2UsXG4gICAgICAgIHNob3dNYXJrZXJzOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChpbnRlcmFjdGlvbiAhPT0gJ25vbmUnKSB7XG4gICAgICBjaGFydC5pbnRlcmFjdGlvbihpbnRlcmFjdGlvbik7XG4gICAgfVxuICAgIGNoYXJ0LmF4aXMoZmFsc2UpLmxlZ2VuZChmYWxzZSkuY29vcmRpbmF0ZSgndGhldGEnLCB7IGlubmVyUmFkaXVzOiBpbm5lciB9KTtcbiAgICBjaGFydC5maWx0ZXIoJ3gnLCAoX3ZhbDogTnpTYWZlQW55LCBpdGVtOiBOelNhZmVBbnkpID0+IGl0ZW0uY2hlY2tlZCAhPT0gZmFsc2UpO1xuICAgIGNoYXJ0XG4gICAgICAuaW50ZXJ2YWwoKVxuICAgICAgLmFkanVzdCgnc3RhY2snKVxuICAgICAgLnBvc2l0aW9uKCd5JylcbiAgICAgIC5zdHlsZSh7IGxpbmVXaWR0aCwgc3Ryb2tlOiAnI2ZmZicgfSlcbiAgICAgIC5jb2xvcigneCcsIGlzUGVyY2VudCA/IHBlcmNlbnRDb2xvciA6IGNvbG9ycylcbiAgICAgIC50b29sdGlwKCd4KnBlcmNlbnQnLCAobmFtZTogc3RyaW5nLCBwOiBudW1iZXIpID0+ICh7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIHZhbHVlOiBgJHtoYXNMZWdlbmQgPyBwIDogKHAgKiAxMDApLnRvRml4ZWQoMil9ICVgXG4gICAgICB9KSlcbiAgICAgIC5zdGF0ZSh7fSk7XG4gICAgY2hhcnQuc2NhbGUoe1xuICAgICAgeDoge1xuICAgICAgICB0eXBlOiAnY2F0JyxcbiAgICAgICAgcmFuZ2U6IFswLCAxXVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY2hhcnRcbiAgICAgIC5vbihgaW50ZXJ2YWw6Y2xpY2tgLCAoZXY6IEV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB0aGlzLmNsaWNrSXRlbS5lbWl0KHsgaXRlbTogZXYuZGF0YT8uZGF0YSwgZXYgfSkpO1xuICAgICAgfSlcbiAgICAgIC5vbignYWZ0ZXJyZW5kZXInLCAoKSA9PiB7XG4gICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB0aGlzLnVwZGF0ZUJsb2NrKCkpO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLnJlYWR5Lm5leHQoY2hhcnQpO1xuXG4gICAgdGhpcy5jaGFuZ2VEYXRhKCk7XG5cbiAgICBjaGFydC5yZW5kZXIoKTtcbiAgfVxuXG4gIGNoYW5nZURhdGEoKTogdm9pZCB7XG4gICAgY29uc3QgeyBfY2hhcnQsIGRhdGEgfSA9IHRoaXM7XG4gICAgaWYgKCFfY2hhcnQgfHwgIUFycmF5LmlzQXJyYXkoZGF0YSkgfHwgZGF0YS5sZW5ndGggPD0gMCkgcmV0dXJuO1xuXG4gICAgLy8g6L2s5YyWIHBlcmNlbnRcbiAgICBjb25zdCB0b3RhbFN1bSA9IGRhdGEucmVkdWNlKChjdXIsIGl0ZW0pID0+IGN1ciArIGl0ZW0ueSwgMCk7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgIGl0ZW0ucGVyY2VudCA9IHRvdGFsU3VtID09PSAwID8gMCA6IGl0ZW0ueSAvIHRvdGFsU3VtO1xuICAgIH1cbiAgICBfY2hhcnQuY2hhbmdlRGF0YShkYXRhKTtcblxuICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB0aGlzLmdlbkxlZ2VuZCgpKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuTGVnZW5kKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgaGFzTGVnZW5kLCBpc1BlcmNlbnQsIGNkciwgX2NoYXJ0IH0gPSB0aGlzO1xuICAgIGlmICghaGFzTGVnZW5kIHx8IGlzUGVyY2VudCkgcmV0dXJuO1xuXG4gICAgdGhpcy5sZWdlbmREYXRhID0gX2NoYXJ0Lmdlb21ldHJpZXNbMF0uZGF0YUFycmF5Lm1hcCgoaXRlbTogTnpTYWZlQW55KSA9PiB7XG4gICAgICBjb25zdCBvcmlnaW4gPSBpdGVtWzBdLl9vcmlnaW47XG4gICAgICBvcmlnaW4uY29sb3IgPSBpdGVtWzBdLmNvbG9yO1xuICAgICAgb3JpZ2luLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgb3JpZ2luLnBlcmNlbnQgPSAob3JpZ2luLnBlcmNlbnQgKiAxMDApLnRvRml4ZWQoMik7XG4gICAgICByZXR1cm4gb3JpZ2luO1xuICAgIH0pO1xuXG4gICAgY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIF9jbGljayhpOiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCB7IGxlZ2VuZERhdGEsIF9jaGFydCB9ID0gdGhpcztcbiAgICBsZWdlbmREYXRhW2ldLmNoZWNrZWQgPSAhbGVnZW5kRGF0YVtpXS5jaGVja2VkO1xuICAgIF9jaGFydC5yZW5kZXIodHJ1ZSk7XG4gIH1cblxuICBvbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5maXhEYXRhKCk7XG4gIH1cbn1cbiIsIjxuei1za2VsZXRvbiAqbmdJZj1cIiFsb2FkZWRcIj48L256LXNrZWxldG9uPlxuPGRpdiBjbGFzcz1cImcyLXBpZV9fY2hhcnRcIj5cbiAgPGRpdiAjY29udGFpbmVyPjwvZGl2PlxuICA8ZGl2ICpuZ0lmPVwic3ViVGl0bGUgfHwgdG90YWxcIiBjbGFzcz1cImcyLXBpZV9fdG90YWxcIj5cbiAgICA8aDQgKm5nSWY9XCJzdWJUaXRsZVwiIGNsYXNzPVwiZzItcGllX190b3RhbC10aXRsZVwiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cInN1YlRpdGxlXCI+XG4gICAgICAgIDxkaXYgW2lubmVySFRNTF09XCJzdWJUaXRsZVwiPjwvZGl2PlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9oND5cbiAgICA8ZGl2ICpuZ0lmPVwidG90YWxcIiBjbGFzcz1cImcyLXBpZV9fdG90YWwtc3RhdFwiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cInRvdGFsXCI+XG4gICAgICAgIDxkaXYgW2lubmVySFRNTF09XCJ0b3RhbFwiPjwvZGl2PlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG48dWwgKm5nSWY9XCJoYXNMZWdlbmQgJiYgbGVnZW5kRGF0YT8ubGVuZ3RoXCIgY2xhc3M9XCJnMi1waWVfX2xlZ2VuZFwiPlxuICA8bGkgKm5nRm9yPVwibGV0IGl0ZW0gb2YgbGVnZW5kRGF0YTsgbGV0IGluZGV4ID0gaW5kZXhcIiAoY2xpY2spPVwiX2NsaWNrKGluZGV4KVwiIGNsYXNzPVwiZzItcGllX19sZWdlbmQtaXRlbVwiPlxuICAgIDxzcGFuIGNsYXNzPVwiZzItcGllX19sZWdlbmQtZG90XCIgW25nU3R5bGVdPVwieyAnYmFja2dyb3VuZC1jb2xvcic6ICFpdGVtLmNoZWNrZWQgPyAnI2FhYScgOiBpdGVtLmNvbG9yIH1cIj48L3NwYW4+XG4gICAgPHNwYW4gY2xhc3M9XCJnMi1waWVfX2xlZ2VuZC10aXRsZVwiPnt7IGl0ZW0ueCB9fTwvc3Bhbj5cbiAgICA8bnotZGl2aWRlciBuelR5cGU9XCJ2ZXJ0aWNhbFwiPjwvbnotZGl2aWRlcj5cbiAgICA8c3BhbiBjbGFzcz1cImcyLXBpZV9fbGVnZW5kLXBlcmNlbnRcIj57eyBpdGVtLnBlcmNlbnQgfX0lPC9zcGFuPlxuICAgIDxzcGFuIGNsYXNzPVwiZzItcGllX19sZWdlbmQtdmFsdWVcIiBbaW5uZXJIVE1MXT1cInZhbHVlRm9ybWF0ID8gdmFsdWVGb3JtYXQoaXRlbS55KSA6IGl0ZW0ueVwiPjwvc3Bhbj5cbiAgPC9saT5cbjwvdWw+XG4iXX0=