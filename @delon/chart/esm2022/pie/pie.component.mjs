import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation, booleanAttribute, numberAttribute } from '@angular/core';
import { G2BaseComponent } from '@delon/chart/core';
import { NzStringTemplateOutletDirective } from 'ng-zorro-antd/core/outlet';
import { NzDividerComponent } from 'ng-zorro-antd/divider';
import { NzSkeletonComponent } from 'ng-zorro-antd/skeleton';
import * as i0 from "@angular/core";
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.11", ngImport: i0, type: G2PieComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.11", type: G2PieComponent, isStandalone: true, selector: "g2-pie", inputs: { animate: ["animate", "animate", booleanAttribute], color: "color", subTitle: "subTitle", total: "total", height: ["height", "height", numberAttribute], hasLegend: ["hasLegend", "hasLegend", booleanAttribute], inner: "inner", padding: "padding", percent: ["percent", "percent", numberAttribute], tooltip: ["tooltip", "tooltip", booleanAttribute], lineWidth: ["lineWidth", "lineWidth", numberAttribute], blockMaxWidth: ["blockMaxWidth", "blockMaxWidth", numberAttribute], select: ["select", "select", booleanAttribute], valueFormat: "valueFormat", data: "data", colors: "colors", interaction: "interaction", ratio: "ratio" }, outputs: { clickItem: "clickItem" }, host: { properties: { "class.g2-pie": "true", "class.g2-pie__legend-has": "hasLegend", "class.g2-pie__legend-block": "block", "class.g2-pie__mini": "isPercent" } }, exportAs: ["g2Pie"], usesInheritance: true, ngImport: i0, template: "@if (!loaded) {\n  <nz-skeleton />\n}\n<div class=\"g2-pie__chart\">\n  <div #container></div>\n  @if (subTitle || total) {\n    <div class=\"g2-pie__total\">\n      @if (subTitle) {\n        <h4 class=\"g2-pie__total-title\">\n          <ng-container *nzStringTemplateOutlet=\"subTitle\">\n            <div [innerHTML]=\"subTitle\"></div>\n          </ng-container>\n        </h4>\n      }\n      @if (total) {\n        <div class=\"g2-pie__total-stat\">\n          <ng-container *nzStringTemplateOutlet=\"total\">\n            <div [innerHTML]=\"total\"></div>\n          </ng-container>\n        </div>\n      }\n    </div>\n  }\n</div>\n@if (hasLegend && legendData.length > 0) {\n  <ul class=\"g2-pie__legend\">\n    @for (item of legendData; track $index) {\n      <li (click)=\"_click($index)\" class=\"g2-pie__legend-item\">\n        <span class=\"g2-pie__legend-dot\" [style]=\"{ 'background-color': !item.checked ? '#aaa' : item.color }\"></span>\n        <span class=\"g2-pie__legend-title\">{{ item.x }}</span>\n        <nz-divider nzType=\"vertical\" />\n        <span class=\"g2-pie__legend-percent\">{{ item.percent }}%</span>\n        <span class=\"g2-pie__legend-value\" [innerHTML]=\"valueFormat ? valueFormat(item.y) : item.y\"></span>\n      </li>\n    }\n  </ul>\n}\n", dependencies: [{ kind: "component", type: NzSkeletonComponent, selector: "nz-skeleton", inputs: ["nzActive", "nzLoading", "nzRound", "nzTitle", "nzAvatar", "nzParagraph"], exportAs: ["nzSkeleton"] }, { kind: "directive", type: NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { kind: "component", type: NzDividerComponent, selector: "nz-divider", inputs: ["nzText", "nzType", "nzOrientation", "nzDashed", "nzPlain"], exportAs: ["nzDivider"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.11", ngImport: i0, type: G2PieComponent, decorators: [{
            type: Component,
            args: [{ selector: 'g2-pie', exportAs: 'g2Pie', host: {
                        '[class.g2-pie]': 'true',
                        '[class.g2-pie__legend-has]': 'hasLegend',
                        '[class.g2-pie__legend-block]': 'block',
                        '[class.g2-pie__mini]': 'isPercent'
                    }, preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, standalone: true, imports: [NzSkeletonComponent, NzStringTemplateOutletDirective, NzDividerComponent], template: "@if (!loaded) {\n  <nz-skeleton />\n}\n<div class=\"g2-pie__chart\">\n  <div #container></div>\n  @if (subTitle || total) {\n    <div class=\"g2-pie__total\">\n      @if (subTitle) {\n        <h4 class=\"g2-pie__total-title\">\n          <ng-container *nzStringTemplateOutlet=\"subTitle\">\n            <div [innerHTML]=\"subTitle\"></div>\n          </ng-container>\n        </h4>\n      }\n      @if (total) {\n        <div class=\"g2-pie__total-stat\">\n          <ng-container *nzStringTemplateOutlet=\"total\">\n            <div [innerHTML]=\"total\"></div>\n          </ng-container>\n        </div>\n      }\n    </div>\n  }\n</div>\n@if (hasLegend && legendData.length > 0) {\n  <ul class=\"g2-pie__legend\">\n    @for (item of legendData; track $index) {\n      <li (click)=\"_click($index)\" class=\"g2-pie__legend-item\">\n        <span class=\"g2-pie__legend-dot\" [style]=\"{ 'background-color': !item.checked ? '#aaa' : item.color }\"></span>\n        <span class=\"g2-pie__legend-title\">{{ item.x }}</span>\n        <nz-divider nzType=\"vertical\" />\n        <span class=\"g2-pie__legend-percent\">{{ item.percent }}%</span>\n        <span class=\"g2-pie__legend-value\" [innerHTML]=\"valueFormat ? valueFormat(item.y) : item.y\"></span>\n      </li>\n    }\n  </ul>\n}\n" }]
        }], propDecorators: { animate: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], color: [{
                type: Input
            }], subTitle: [{
                type: Input
            }], total: [{
                type: Input
            }], height: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], hasLegend: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], inner: [{
                type: Input
            }], padding: [{
                type: Input
            }], percent: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], tooltip: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], lineWidth: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], blockMaxWidth: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], select: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NoYXJ0L3BpZS9waWUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY2hhcnQvcGllL3BpZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFFTixpQkFBaUIsRUFDakIsZ0JBQWdCLEVBQ2hCLGVBQWUsRUFDaEIsTUFBTSxlQUFlLENBQUM7QUFJdkIsT0FBTyxFQUFFLGVBQWUsRUFBcUIsTUFBTSxtQkFBbUIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUU1RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7QUF3QzdELE1BQU0sT0FBTyxjQUFlLFNBQVEsZUFBZTtJQWhCbkQ7O1FBa0JFLGVBQVUsR0FBZ0IsRUFBRSxDQUFDO1FBQzdCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFFbEIsaUJBQWlCO1FBRXVCLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFDOUMsVUFBSyxHQUFHLDBCQUEwQixDQUFDO1FBR0wsV0FBTSxHQUFHLENBQUMsQ0FBQztRQUNWLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDakQsVUFBSyxHQUFHLElBQUksQ0FBQztRQUNiLFlBQU8sR0FBK0IsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUV0QixZQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLGNBQVMsR0FBRyxDQUFDLENBQUM7UUFDZCxrQkFBYSxHQUFHLEdBQUcsQ0FBQztRQUNuQixXQUFNLEdBQUcsSUFBSSxD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O3NCQUFuQixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBTWEsU0FBUztzQkFBM0IsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBib29sZWFuQXR0cmlidXRlLFxuICBudW1iZXJBdHRyaWJ1dGVcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB0eXBlIHsgQ2hhcnQsIEV2ZW50IH0gZnJvbSAnQGFudHYvZzInO1xuXG5pbXBvcnQgeyBHMkJhc2VDb21wb25lbnQsIEcySW50ZXJhY3Rpb25UeXBlIH0gZnJvbSAnQGRlbG9uL2NoYXJ0L2NvcmUnO1xuaW1wb3J0IHsgTnpTdHJpbmdUZW1wbGF0ZU91dGxldERpcmVjdGl2ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9vdXRsZXQnO1xuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgTnpEaXZpZGVyQ29tcG9uZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC9kaXZpZGVyJztcbmltcG9ydCB7IE56U2tlbGV0b25Db21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL3NrZWxldG9uJztcblxuZXhwb3J0IGludGVyZmFjZSBHMlBpZURhdGEge1xuICB4OiBOelNhZmVBbnk7XG4gIHk6IG51bWJlcjtcbiAgW2tleTogc3RyaW5nXTogTnpTYWZlQW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEcyUGllQ2xpY2tJdGVtIHtcbiAgaXRlbTogRzJQaWVEYXRhO1xuICBldjogRXZlbnQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRzJQaWVSYXRpbyB7XG4gIC8qKiDljaDmr5TmlofmnKzvvIzpu5jorqTvvJpg5Y2g5q+UYCAqL1xuICB0ZXh0OiBzdHJpbmc7XG4gIC8qKiDlj43mr5TmlofmnKzvvIzpu5jorqTvvJpg5Y+N5q+UYCAqL1xuICBpbnZlcnNlOiBzdHJpbmc7XG4gIC8qKiDmraPmr5TpopzoibLvvIzpu5jorqTkvb/nlKggYGNvbG9yYCDlgLwgKi9cbiAgY29sb3I6IHN0cmluZztcbiAgLyoqIOWPjeavlOminOiJsu+8jOm7mOiupO+8mmAjRjBGMkY1YCAqL1xuICBpbnZlcnNlQ29sb3I6IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZzItcGllJyxcbiAgZXhwb3J0QXM6ICdnMlBpZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9waWUuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5nMi1waWVdJzogJ3RydWUnLFxuICAgICdbY2xhc3MuZzItcGllX19sZWdlbmQtaGFzXSc6ICdoYXNMZWdlbmQnLFxuICAgICdbY2xhc3MuZzItcGllX19sZWdlbmQtYmxvY2tdJzogJ2Jsb2NrJyxcbiAgICAnW2NsYXNzLmcyLXBpZV9fbWluaV0nOiAnaXNQZXJjZW50J1xuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtOelNrZWxldG9uQ29tcG9uZW50LCBOelN0cmluZ1RlbXBsYXRlT3V0bGV0RGlyZWN0aXZlLCBOekRpdmlkZXJDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEcyUGllQ29tcG9uZW50IGV4dGVuZHMgRzJCYXNlQ29tcG9uZW50IHtcbiAgcHJpdmF0ZSBwZXJjZW50Q29sb3IhOiAodmFsdWU6IHN0cmluZykgPT4gc3RyaW5nO1xuICBsZWdlbmREYXRhOiBOelNhZmVBbnlbXSA9IFtdO1xuICBpc1BlcmNlbnQgPSBmYWxzZTtcblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIEBJbnB1dCh7IHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZSB9KSBhbmltYXRlID0gdHJ1ZTtcbiAgQElucHV0KCkgY29sb3IgPSAncmdiYSgyNCwgMTQ0LCAyNTUsIDAuODUpJztcbiAgQElucHV0KCkgc3ViVGl0bGU/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGw7XG4gIEBJbnB1dCgpIHRvdGFsPzogc3RyaW5nIHwgbnVtYmVyIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsO1xuICBASW5wdXQoeyB0cmFuc2Zvcm06IG51bWJlckF0dHJpYnV0ZSB9KSBoZWlnaHQgPSAwO1xuICBASW5wdXQoeyB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGUgfSkgaGFzTGVnZW5kID0gZmFsc2U7XG4gIEBJbnB1dCgpIGlubmVyID0gMC43NTtcbiAgQElucHV0KCkgcGFkZGluZzogbnVtYmVyIHwgbnVtYmVyW10gfCAnYXV0bycgPSBbMTIsIDAsIDEyLCAwXTtcbiAgQElucHV0KHsgdHJhbnNmb3JtOiBudW1iZXJBdHRyaWJ1dGUgfSkgcGVyY2VudD86IG51bWJlcjtcbiAgQElucHV0KHsgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlIH0pIHRvb2x0aXAgPSB0cnVlO1xuICBASW5wdXQoeyB0cmFuc2Zvcm06IG51bWJlckF0dHJpYnV0ZSB9KSBsaW5lV2lkdGggPSAwO1xuICBASW5wdXQoeyB0cmFuc2Zvcm06IG51bWJlckF0dHJpYnV0ZSB9KSBibG9ja01heFdpZHRoID0gMzgwO1xuICBASW5wdXQoeyB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGUgfSkgc2VsZWN0ID0gdHJ1ZTtcbiAgQElucHV0KCkgdmFsdWVGb3JtYXQ/OiAoeTogbnVtYmVyKSA9PiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRhdGE6IEcyUGllRGF0YVtdID0gW107XG4gIEBJbnB1dCgpIGNvbG9ycz86IHN0cmluZ1tdO1xuICBASW5wdXQoKSBpbnRlcmFjdGlvbjogRzJJbnRlcmFjdGlvblR5cGUgPSAnbm9uZSc7XG4gIEBJbnB1dCgpIHJhdGlvOiBHMlBpZVJhdGlvID0ge1xuICAgIHRleHQ6ICfljaDmr5QnLFxuICAgIGludmVyc2U6ICflj43mr5QnLFxuICAgIGNvbG9yOiAnJyxcbiAgICBpbnZlcnNlQ29sb3I6ICcjRjBGMkY1J1xuICB9O1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2xpY2tJdGVtID0gbmV3IEV2ZW50RW1pdHRlcjxHMlBpZUNsaWNrSXRlbT4oKTtcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgYmxvY2s6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwcml2YXRlIGZpeERhdGEoKTogdm9pZCB7XG4gICAgY29uc3QgeyBwZXJjZW50LCBjb2xvciB9ID0gdGhpcztcbiAgICB0aGlzLmlzUGVyY2VudCA9IHBlcmNlbnQgIT0gbnVsbDtcbiAgICBpZiAoIXRoaXMuaXNQZXJjZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zZWxlY3QgPSBmYWxzZTtcbiAgICB0aGlzLnRvb2x0aXAgPSBmYWxzZTtcbiAgICBjb25zdCB7IHRleHQsIGludmVyc2UsIGNvbG9yOiB0ZXh0Q29sb3IsIGludmVyc2VDb2xvciB9ID0gdGhpcy5yYXRpbztcbiAgICB0aGlzLnBlcmNlbnRDb2xvciA9ICh2YWx1ZTogc3RyaW5nKSA9PiAodmFsdWUgPT09IHRleHQgPyB0ZXh0Q29sb3IgfHwgY29sb3IgOiBpbnZlcnNlQ29sb3IpO1xuICAgIHRoaXMuZGF0YSA9IFtcbiAgICAgIHtcbiAgICAgICAgeDogdGV4dCxcbiAgICAgICAgeTogcGVyY2VudCFcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHg6IGludmVyc2UsXG4gICAgICAgIHk6IDEwMCAtIHBlcmNlbnQhXG4gICAgICB9XG4gICAgXTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlQmxvY2soKTogdm9pZCB7XG4gICAgdGhpcy5ibG9jayA9IHRoaXMuX2NoYXJ0ICYmIHRoaXMuaGFzTGVnZW5kICYmIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aCA8PSB0aGlzLmJsb2NrTWF4V2lkdGg7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgaW5zdGFsbCgpOiB2b2lkIHtcbiAgICBjb25zdCB7XG4gICAgICBub2RlLFxuICAgICAgaGVpZ2h0LFxuICAgICAgcGFkZGluZyxcbiAgICAgIHRvb2x0aXAsXG4gICAgICBpbm5lcixcbiAgICAgIGhhc0xlZ2VuZCxcbiAgICAgIGludGVyYWN0aW9uLFxuICAgICAgdGhlbWUsXG4gICAgICBhbmltYXRlLFxuICAgICAgbGluZVdpZHRoLFxuICAgICAgaXNQZXJjZW50LFxuICAgICAgcGVyY2VudENvbG9yLFxuICAgICAgY29sb3JzXG4gICAgfSA9IHRoaXM7XG4gICAgY29uc3QgY2hhcnQ6IENoYXJ0ID0gKHRoaXMuX2NoYXJ0ID0gbmV3IHRoaXMud2luRzIuQ2hhcnQoe1xuICAgICAgY29udGFpbmVyOiBub2RlLm5hdGl2ZUVsZW1lbnQsXG4gICAgICBhdXRvRml0OiB0cnVlLFxuICAgICAgaGVpZ2h0LFxuICAgICAgcGFkZGluZyxcbiAgICAgIHRoZW1lXG4gICAgfSkpO1xuICAgIGNoYXJ0LmFuaW1hdGUoYW5pbWF0ZSk7XG5cbiAgICBpZiAoIXRvb2x0aXApIHtcbiAgICAgIGNoYXJ0LnRvb2x0aXAoZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGFydC50b29sdGlwKHtcbiAgICAgICAgc2hvd1RpdGxlOiBmYWxzZSxcbiAgICAgICAgc2hvd01hcmtlcnM6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGludGVyYWN0aW9uICE9PSAnbm9uZScpIHtcbiAgICAgIGNoYXJ0LmludGVyYWN0aW9uKGludGVyYWN0aW9uKTtcbiAgICB9XG4gICAgY2hhcnQuYXhpcyhmYWxzZSkubGVnZW5kKGZhbHNlKS5jb29yZGluYXRlKCd0aGV0YScsIHsgaW5uZXJSYWRpdXM6IGlubmVyIH0pO1xuICAgIGNoYXJ0LmZpbHRlcigneCcsIChfdmFsOiBOelNhZmVBbnksIGl0ZW06IE56U2FmZUFueSkgPT4gaXRlbS5jaGVja2VkICE9PSBmYWxzZSk7XG4gICAgY2hhcnRcbiAgICAgIC5pbnRlcnZhbCgpXG4gICAgICAuYWRqdXN0KCdzdGFjaycpXG4gICAgICAucG9zaXRpb24oJ3knKVxuICAgICAgLnN0eWxlKHsgbGluZVdpZHRoLCBzdHJva2U6ICcjZmZmJyB9KVxuICAgICAgLmNvbG9yKCd4JywgaXNQZXJjZW50ID8gcGVyY2VudENvbG9yIDogY29sb3JzKVxuICAgICAgLnRvb2x0aXAoJ3gqcGVyY2VudCcsIChuYW1lOiBzdHJpbmcsIHA6IG51bWJlcikgPT4gKHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgdmFsdWU6IGAke2hhc0xlZ2VuZCA/IHAgOiAocCAqIDEwMCkudG9GaXhlZCgyKX0gJWBcbiAgICAgIH0pKVxuICAgICAgLnN0YXRlKHt9KTtcbiAgICBjaGFydC5zY2FsZSh7XG4gICAgICB4OiB7XG4gICAgICAgIHR5cGU6ICdjYXQnLFxuICAgICAgICByYW5nZTogWzAsIDFdXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjaGFydFxuICAgICAgLm9uKGBpbnRlcnZhbDpjbGlja2AsIChldjogRXZlbnQpID0+IHtcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMuY2xpY2tJdGVtLmVtaXQoeyBpdGVtOiBldi5kYXRhPy5kYXRhLCBldiB9KSk7XG4gICAgICB9KVxuICAgICAgLm9uKCdhZnRlcnJlbmRlcicsICgpID0+IHtcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMudXBkYXRlQmxvY2soKSk7XG4gICAgICB9KTtcblxuICAgIHRoaXMucmVhZHkubmV4dChjaGFydCk7XG5cbiAgICB0aGlzLmNoYW5nZURhdGEoKTtcblxuICAgIGNoYXJ0LnJlbmRlcigpO1xuICB9XG5cbiAgY2hhbmdlRGF0YSgpOiB2b2lkIHtcbiAgICBjb25zdCB7IF9jaGFydCwgZGF0YSB9ID0gdGhpcztcbiAgICBpZiAoIV9jaGFydCB8fCAhQXJyYXkuaXNBcnJheShkYXRhKSB8fCBkYXRhLmxlbmd0aCA8PSAwKSByZXR1cm47XG5cbiAgICAvLyDovazljJYgcGVyY2VudFxuICAgIGNvbnN0IHRvdGFsU3VtID0gZGF0YS5yZWR1Y2UoKGN1ciwgaXRlbSkgPT4gY3VyICsgaXRlbS55LCAwKTtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZGF0YSkge1xuICAgICAgaXRlbS5wZXJjZW50ID0gdG90YWxTdW0gPT09IDAgPyAwIDogaXRlbS55IC8gdG90YWxTdW07XG4gICAgfVxuICAgIF9jaGFydC5jaGFuZ2VEYXRhKGRhdGEpO1xuXG4gICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMuZ2VuTGVnZW5kKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5MZWdlbmQoKTogdm9pZCB7XG4gICAgY29uc3QgeyBoYXNMZWdlbmQsIGlzUGVyY2VudCwgY2RyLCBfY2hhcnQgfSA9IHRoaXM7XG4gICAgaWYgKCFoYXNMZWdlbmQgfHwgaXNQZXJjZW50KSByZXR1cm47XG5cbiAgICB0aGlzLmxlZ2VuZERhdGEgPSBfY2hhcnQuZ2VvbWV0cmllc1swXS5kYXRhQXJyYXkubWFwKChpdGVtOiBOelNhZmVBbnkpID0+IHtcbiAgICAgIGNvbnN0IG9yaWdpbiA9IGl0ZW1bMF0uX29yaWdpbjtcbiAgICAgIG9yaWdpbi5jb2xvciA9IGl0ZW1bMF0uY29sb3I7XG4gICAgICBvcmlnaW4uY2hlY2tlZCA9IHRydWU7XG4gICAgICBvcmlnaW4ucGVyY2VudCA9IChvcmlnaW4ucGVyY2VudCAqIDEwMCkudG9GaXhlZCgyKTtcbiAgICAgIHJldHVybiBvcmlnaW47XG4gICAgfSk7XG5cbiAgICBjZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgX2NsaWNrKGk6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IHsgbGVnZW5kRGF0YSwgX2NoYXJ0IH0gPSB0aGlzO1xuICAgIGxlZ2VuZERhdGFbaV0uY2hlY2tlZCA9ICFsZWdlbmREYXRhW2ldLmNoZWNrZWQ7XG4gICAgX2NoYXJ0LnJlbmRlcih0cnVlKTtcbiAgfVxuXG4gIG9uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLmZpeERhdGEoKTtcbiAgfVxufVxuIiwiQGlmICghbG9hZGVkKSB7XG4gIDxuei1za2VsZXRvbiAvPlxufVxuPGRpdiBjbGFzcz1cImcyLXBpZV9fY2hhcnRcIj5cbiAgPGRpdiAjY29udGFpbmVyPjwvZGl2PlxuICBAaWYgKHN1YlRpdGxlIHx8IHRvdGFsKSB7XG4gICAgPGRpdiBjbGFzcz1cImcyLXBpZV9fdG90YWxcIj5cbiAgICAgIEBpZiAoc3ViVGl0bGUpIHtcbiAgICAgICAgPGg0IGNsYXNzPVwiZzItcGllX190b3RhbC10aXRsZVwiPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJzdWJUaXRsZVwiPlxuICAgICAgICAgICAgPGRpdiBbaW5uZXJIVE1MXT1cInN1YlRpdGxlXCI+PC9kaXY+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvaDQ+XG4gICAgICB9XG4gICAgICBAaWYgKHRvdGFsKSB7XG4gICAgICAgIDxkaXYgY2xhc3M9XCJnMi1waWVfX3RvdGFsLXN0YXRcIj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwidG90YWxcIj5cbiAgICAgICAgICAgIDxkaXYgW2lubmVySFRNTF09XCJ0b3RhbFwiPjwvZGl2PlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgfVxuPC9kaXY+XG5AaWYgKGhhc0xlZ2VuZCAmJiBsZWdlbmREYXRhLmxlbmd0aCA+IDApIHtcbiAgPHVsIGNsYXNzPVwiZzItcGllX19sZWdlbmRcIj5cbiAgICBAZm9yIChpdGVtIG9mIGxlZ2VuZERhdGE7IHRyYWNrICRpbmRleCkge1xuICAgICAgPGxpIChjbGljayk9XCJfY2xpY2soJGluZGV4KVwiIGNsYXNzPVwiZzItcGllX19sZWdlbmQtaXRlbVwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImcyLXBpZV9fbGVnZW5kLWRvdFwiIFtzdHlsZV09XCJ7ICdiYWNrZ3JvdW5kLWNvbG9yJzogIWl0ZW0uY2hlY2tlZCA/ICcjYWFhJyA6IGl0ZW0uY29sb3IgfVwiPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJnMi1waWVfX2xlZ2VuZC10aXRsZVwiPnt7IGl0ZW0ueCB9fTwvc3Bhbj5cbiAgICAgICAgPG56LWRpdmlkZXIgbnpUeXBlPVwidmVydGljYWxcIiAvPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImcyLXBpZV9fbGVnZW5kLXBlcmNlbnRcIj57eyBpdGVtLnBlcmNlbnQgfX0lPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImcyLXBpZV9fbGVnZW5kLXZhbHVlXCIgW2lubmVySFRNTF09XCJ2YWx1ZUZvcm1hdCA/IHZhbHVlRm9ybWF0KGl0ZW0ueSkgOiBpdGVtLnlcIj48L3NwYW4+XG4gICAgICA8L2xpPlxuICAgIH1cbiAgPC91bD5cbn1cbiJdfQ==