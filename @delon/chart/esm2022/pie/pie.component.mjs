import { __decorate } from "tslib";
import { NgStyle } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { G2BaseComponent } from '@delon/chart/core';
import { InputBoolean, InputNumber } from '@delon/util/decorator';
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: G2PieComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.1.0", type: G2PieComponent, isStandalone: true, selector: "g2-pie", inputs: { animate: "animate", color: "color", subTitle: "subTitle", total: "total", height: "height", hasLegend: "hasLegend", inner: "inner", padding: "padding", percent: "percent", tooltip: "tooltip", lineWidth: "lineWidth", blockMaxWidth: "blockMaxWidth", select: "select", valueFormat: "valueFormat", data: "data", colors: "colors", interaction: "interaction", ratio: "ratio" }, outputs: { clickItem: "clickItem" }, host: { properties: { "class.g2-pie": "true", "class.g2-pie__legend-has": "hasLegend", "class.g2-pie__legend-block": "block", "class.g2-pie__mini": "isPercent" } }, exportAs: ["g2Pie"], usesInheritance: true, ngImport: i0, template: "@if (!loaded) {\n  <nz-skeleton />\n}\n<div class=\"g2-pie__chart\">\n  <div #container></div>\n  @if (subTitle || total) {\n    <div class=\"g2-pie__total\">\n      @if (subTitle) {\n        <h4 class=\"g2-pie__total-title\">\n          <ng-container *nzStringTemplateOutlet=\"subTitle\">\n            <div [innerHTML]=\"subTitle\"></div>\n          </ng-container>\n        </h4>\n      }\n      @if (total) {\n        <div class=\"g2-pie__total-stat\">\n          <ng-container *nzStringTemplateOutlet=\"total\">\n            <div [innerHTML]=\"total\"></div>\n          </ng-container>\n        </div>\n      }\n    </div>\n  }\n</div>\n@if (hasLegend && legendData.length > 0) {\n  <ul class=\"g2-pie__legend\">\n    @for (item of legendData; track $index) {\n      <li (click)=\"_click($index)\" class=\"g2-pie__legend-item\">\n        <span class=\"g2-pie__legend-dot\" [ngStyle]=\"{ 'background-color': !item.checked ? '#aaa' : item.color }\"></span>\n        <span class=\"g2-pie__legend-title\">{{ item.x }}</span>\n        <nz-divider nzType=\"vertical\" />\n        <span class=\"g2-pie__legend-percent\">{{ item.percent }}%</span>\n        <span class=\"g2-pie__legend-value\" [innerHTML]=\"valueFormat ? valueFormat(item.y) : item.y\"></span>\n      </li>\n    }\n  </ul>\n}\n", dependencies: [{ kind: "component", type: NzSkeletonComponent, selector: "nz-skeleton", inputs: ["nzActive", "nzLoading", "nzRound", "nzTitle", "nzAvatar", "nzParagraph"], exportAs: ["nzSkeleton"] }, { kind: "directive", type: NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { kind: "component", type: NzDividerComponent, selector: "nz-divider", inputs: ["nzText", "nzType", "nzOrientation", "nzDashed", "nzPlain"], exportAs: ["nzDivider"] }, { kind: "directive", type: NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: G2PieComponent, decorators: [{
            type: Component,
            args: [{ selector: 'g2-pie', exportAs: 'g2Pie', host: {
                        '[class.g2-pie]': 'true',
                        '[class.g2-pie__legend-has]': 'hasLegend',
                        '[class.g2-pie__legend-block]': 'block',
                        '[class.g2-pie__mini]': 'isPercent'
                    }, preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, standalone: true, imports: [NzSkeletonComponent, NzStringTemplateOutletDirective, NzDividerComponent, NgStyle], template: "@if (!loaded) {\n  <nz-skeleton />\n}\n<div class=\"g2-pie__chart\">\n  <div #container></div>\n  @if (subTitle || total) {\n    <div class=\"g2-pie__total\">\n      @if (subTitle) {\n        <h4 class=\"g2-pie__total-title\">\n          <ng-container *nzStringTemplateOutlet=\"subTitle\">\n            <div [innerHTML]=\"subTitle\"></div>\n          </ng-container>\n        </h4>\n      }\n      @if (total) {\n        <div class=\"g2-pie__total-stat\">\n          <ng-container *nzStringTemplateOutlet=\"total\">\n            <div [innerHTML]=\"total\"></div>\n          </ng-container>\n        </div>\n      }\n    </div>\n  }\n</div>\n@if (hasLegend && legendData.length > 0) {\n  <ul class=\"g2-pie__legend\">\n    @for (item of legendData; track $index) {\n      <li (click)=\"_click($index)\" class=\"g2-pie__legend-item\">\n        <span class=\"g2-pie__legend-dot\" [ngStyle]=\"{ 'background-color': !item.checked ? '#aaa' : item.color }\"></span>\n        <span class=\"g2-pie__legend-title\">{{ item.x }}</span>\n        <nz-divider nzType=\"vertical\" />\n        <span class=\"g2-pie__legend-percent\">{{ item.percent }}%</span>\n        <span class=\"g2-pie__legend-value\" [innerHTML]=\"valueFormat ? valueFormat(item.y) : item.y\"></span>\n      </li>\n    }\n  </ul>\n}\n" }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NoYXJ0L3BpZS9waWUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY2hhcnQvcGllL3BpZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzFDLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUVOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUl2QixPQUFPLEVBQUUsZUFBZSxFQUFxQixNQUFNLG1CQUFtQixDQUFDO0FBQ3ZFLE9BQU8sRUFBZ0IsWUFBWSxFQUFFLFdBQVcsRUFBZSxNQUFNLHVCQUF1QixDQUFDO0FBQzdGLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRTVFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzNELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQXdDN0QsTUFBTSxPQUFPLGNBQWUsU0FBUSxlQUFlO0lBaEJuRDs7UUEyQkUsZUFBVSxHQUFnQixFQUFFLENBQUM7UUFDN0IsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUVsQixpQkFBaUI7UUFFUSxZQUFPLEdBQUcsSUFBSSxDQUFDO1FBQy9CLFVBQUssR0FBRywwQkFBMEIsQ0FBQztRQUdwQixXQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQyxVQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2IsWUFBTyxHQUErQixDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRXJDLFlBQU8sR0FBRyxJQUFJLENBQUM7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Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQU1hLFNBQVM7c0JBQTNCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ1N0eWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgdHlwZSB7IENoYXJ0LCBFdmVudCB9IGZyb20gJ0BhbnR2L2cyJztcblxuaW1wb3J0IHsgRzJCYXNlQ29tcG9uZW50LCBHMkludGVyYWN0aW9uVHlwZSB9IGZyb20gJ0BkZWxvbi9jaGFydC9jb3JlJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciwgTnVtYmVySW5wdXQgfSBmcm9tICdAZGVsb24vdXRpbC9kZWNvcmF0b3InO1xuaW1wb3J0IHsgTnpTdHJpbmdUZW1wbGF0ZU91dGxldERpcmVjdGl2ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9vdXRsZXQnO1xuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgTnpEaXZpZGVyQ29tcG9uZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC9kaXZpZGVyJztcbmltcG9ydCB7IE56U2tlbGV0b25Db21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL3NrZWxldG9uJztcblxuZXhwb3J0IGludGVyZmFjZSBHMlBpZURhdGEge1xuICB4OiBOelNhZmVBbnk7XG4gIHk6IG51bWJlcjtcbiAgW2tleTogc3RyaW5nXTogTnpTYWZlQW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEcyUGllQ2xpY2tJdGVtIHtcbiAgaXRlbTogRzJQaWVEYXRhO1xuICBldjogRXZlbnQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRzJQaWVSYXRpbyB7XG4gIC8qKiDljaDmr5TmlofmnKzvvIzpu5jorqTvvJpg5Y2g5q+UYCAqL1xuICB0ZXh0OiBzdHJpbmc7XG4gIC8qKiDlj43mr5TmlofmnKzvvIzpu5jorqTvvJpg5Y+N5q+UYCAqL1xuICBpbnZlcnNlOiBzdHJpbmc7XG4gIC8qKiDmraPmr5TpopzoibLvvIzpu5jorqTkvb/nlKggYGNvbG9yYCDlgLwgKi9cbiAgY29sb3I6IHN0cmluZztcbiAgLyoqIOWPjeavlOminOiJsu+8jOm7mOiupO+8mmAjRjBGMkY1YCAqL1xuICBpbnZlcnNlQ29sb3I6IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZzItcGllJyxcbiAgZXhwb3J0QXM6ICdnMlBpZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9waWUuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5nMi1waWVdJzogJ3RydWUnLFxuICAgICdbY2xhc3MuZzItcGllX19sZWdlbmQtaGFzXSc6ICdoYXNMZWdlbmQnLFxuICAgICdbY2xhc3MuZzItcGllX19sZWdlbmQtYmxvY2tdJzogJ2Jsb2NrJyxcbiAgICAnW2NsYXNzLmcyLXBpZV9fbWluaV0nOiAnaXNQZXJjZW50J1xuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtOelNrZWxldG9uQ29tcG9uZW50LCBOelN0cmluZ1RlbXBsYXRlT3V0bGV0RGlyZWN0aXZlLCBOekRpdmlkZXJDb21wb25lbnQsIE5nU3R5bGVdXG59KVxuZXhwb3J0IGNsYXNzIEcyUGllQ29tcG9uZW50IGV4dGVuZHMgRzJCYXNlQ29tcG9uZW50IHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2hlaWdodDogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9hbmltYXRlOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9oYXNMZWdlbmQ6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3BlcmNlbnQ6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfdG9vbHRpcDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbGluZVdpZHRoOiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Jsb2NrTWF4V2lkdGg6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc2VsZWN0OiBCb29sZWFuSW5wdXQ7XG5cbiAgcHJpdmF0ZSBwZXJjZW50Q29sb3IhOiAodmFsdWU6IHN0cmluZykgPT4gc3RyaW5nO1xuICBsZWdlbmREYXRhOiBOelNhZmVBbnlbXSA9IFtdO1xuICBpc1BlcmNlbnQgPSBmYWxzZTtcblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBhbmltYXRlID0gdHJ1ZTtcbiAgQElucHV0KCkgY29sb3IgPSAncmdiYSgyNCwgMTQ0LCAyNTUsIDAuODUpJztcbiAgQElucHV0KCkgc3ViVGl0bGU/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGw7XG4gIEBJbnB1dCgpIHRvdGFsPzogc3RyaW5nIHwgbnVtYmVyIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBoZWlnaHQgPSAwO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgaGFzTGVnZW5kID0gZmFsc2U7XG4gIEBJbnB1dCgpIGlubmVyID0gMC43NTtcbiAgQElucHV0KCkgcGFkZGluZzogbnVtYmVyIHwgbnVtYmVyW10gfCAnYXV0bycgPSBbMTIsIDAsIDEyLCAwXTtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgcGVyY2VudD86IG51bWJlcjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHRvb2x0aXAgPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBsaW5lV2lkdGggPSAwO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBibG9ja01heFdpZHRoID0gMzgwO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2VsZWN0ID0gdHJ1ZTtcbiAgQElucHV0KCkgdmFsdWVGb3JtYXQ/OiAoeTogbnVtYmVyKSA9PiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRhdGE6IEcyUGllRGF0YVtdID0gW107XG4gIEBJbnB1dCgpIGNvbG9ycz86IHN0cmluZ1tdO1xuICBASW5wdXQoKSBpbnRlcmFjdGlvbjogRzJJbnRlcmFjdGlvblR5cGUgPSAnbm9uZSc7XG4gIEBJbnB1dCgpIHJhdGlvOiBHMlBpZVJhdGlvID0ge1xuICAgIHRleHQ6ICfljaDmr5QnLFxuICAgIGludmVyc2U6ICflj43mr5QnLFxuICAgIGNvbG9yOiAnJyxcbiAgICBpbnZlcnNlQ29sb3I6ICcjRjBGMkY1J1xuICB9O1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2xpY2tJdGVtID0gbmV3IEV2ZW50RW1pdHRlcjxHMlBpZUNsaWNrSXRlbT4oKTtcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgYmxvY2s6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwcml2YXRlIGZpeERhdGEoKTogdm9pZCB7XG4gICAgY29uc3QgeyBwZXJjZW50LCBjb2xvciB9ID0gdGhpcztcbiAgICB0aGlzLmlzUGVyY2VudCA9IHBlcmNlbnQgIT0gbnVsbDtcbiAgICBpZiAoIXRoaXMuaXNQZXJjZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zZWxlY3QgPSBmYWxzZTtcbiAgICB0aGlzLnRvb2x0aXAgPSBmYWxzZTtcbiAgICBjb25zdCB7IHRleHQsIGludmVyc2UsIGNvbG9yOiB0ZXh0Q29sb3IsIGludmVyc2VDb2xvciB9ID0gdGhpcy5yYXRpbztcbiAgICB0aGlzLnBlcmNlbnRDb2xvciA9ICh2YWx1ZTogc3RyaW5nKSA9PiAodmFsdWUgPT09IHRleHQgPyB0ZXh0Q29sb3IgfHwgY29sb3IgOiBpbnZlcnNlQ29sb3IpO1xuICAgIHRoaXMuZGF0YSA9IFtcbiAgICAgIHtcbiAgICAgICAgeDogdGV4dCxcbiAgICAgICAgeTogcGVyY2VudCFcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHg6IGludmVyc2UsXG4gICAgICAgIHk6IDEwMCAtIHBlcmNlbnQhXG4gICAgICB9XG4gICAgXTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlQmxvY2soKTogdm9pZCB7XG4gICAgdGhpcy5ibG9jayA9IHRoaXMuX2NoYXJ0ICYmIHRoaXMuaGFzTGVnZW5kICYmIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aCA8PSB0aGlzLmJsb2NrTWF4V2lkdGg7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgaW5zdGFsbCgpOiB2b2lkIHtcbiAgICBjb25zdCB7XG4gICAgICBub2RlLFxuICAgICAgaGVpZ2h0LFxuICAgICAgcGFkZGluZyxcbiAgICAgIHRvb2x0aXAsXG4gICAgICBpbm5lcixcbiAgICAgIGhhc0xlZ2VuZCxcbiAgICAgIGludGVyYWN0aW9uLFxuICAgICAgdGhlbWUsXG4gICAgICBhbmltYXRlLFxuICAgICAgbGluZVdpZHRoLFxuICAgICAgaXNQZXJjZW50LFxuICAgICAgcGVyY2VudENvbG9yLFxuICAgICAgY29sb3JzXG4gICAgfSA9IHRoaXM7XG4gICAgY29uc3QgY2hhcnQ6IENoYXJ0ID0gKHRoaXMuX2NoYXJ0ID0gbmV3IHRoaXMud2luRzIuQ2hhcnQoe1xuICAgICAgY29udGFpbmVyOiBub2RlLm5hdGl2ZUVsZW1lbnQsXG4gICAgICBhdXRvRml0OiB0cnVlLFxuICAgICAgaGVpZ2h0LFxuICAgICAgcGFkZGluZyxcbiAgICAgIHRoZW1lXG4gICAgfSkpO1xuICAgIGNoYXJ0LmFuaW1hdGUoYW5pbWF0ZSk7XG5cbiAgICBpZiAoIXRvb2x0aXApIHtcbiAgICAgIGNoYXJ0LnRvb2x0aXAoZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGFydC50b29sdGlwKHtcbiAgICAgICAgc2hvd1RpdGxlOiBmYWxzZSxcbiAgICAgICAgc2hvd01hcmtlcnM6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGludGVyYWN0aW9uICE9PSAnbm9uZScpIHtcbiAgICAgIGNoYXJ0LmludGVyYWN0aW9uKGludGVyYWN0aW9uKTtcbiAgICB9XG4gICAgY2hhcnQuYXhpcyhmYWxzZSkubGVnZW5kKGZhbHNlKS5jb29yZGluYXRlKCd0aGV0YScsIHsgaW5uZXJSYWRpdXM6IGlubmVyIH0pO1xuICAgIGNoYXJ0LmZpbHRlcigneCcsIChfdmFsOiBOelNhZmVBbnksIGl0ZW06IE56U2FmZUFueSkgPT4gaXRlbS5jaGVja2VkICE9PSBmYWxzZSk7XG4gICAgY2hhcnRcbiAgICAgIC5pbnRlcnZhbCgpXG4gICAgICAuYWRqdXN0KCdzdGFjaycpXG4gICAgICAucG9zaXRpb24oJ3knKVxuICAgICAgLnN0eWxlKHsgbGluZVdpZHRoLCBzdHJva2U6ICcjZmZmJyB9KVxuICAgICAgLmNvbG9yKCd4JywgaXNQZXJjZW50ID8gcGVyY2VudENvbG9yIDogY29sb3JzKVxuICAgICAgLnRvb2x0aXAoJ3gqcGVyY2VudCcsIChuYW1lOiBzdHJpbmcsIHA6IG51bWJlcikgPT4gKHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgdmFsdWU6IGAke2hhc0xlZ2VuZCA/IHAgOiAocCAqIDEwMCkudG9GaXhlZCgyKX0gJWBcbiAgICAgIH0pKVxuICAgICAgLnN0YXRlKHt9KTtcbiAgICBjaGFydC5zY2FsZSh7XG4gICAgICB4OiB7XG4gICAgICAgIHR5cGU6ICdjYXQnLFxuICAgICAgICByYW5nZTogWzAsIDFdXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjaGFydFxuICAgICAgLm9uKGBpbnRlcnZhbDpjbGlja2AsIChldjogRXZlbnQpID0+IHtcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMuY2xpY2tJdGVtLmVtaXQoeyBpdGVtOiBldi5kYXRhPy5kYXRhLCBldiB9KSk7XG4gICAgICB9KVxuICAgICAgLm9uKCdhZnRlcnJlbmRlcicsICgpID0+IHtcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMudXBkYXRlQmxvY2soKSk7XG4gICAgICB9KTtcblxuICAgIHRoaXMucmVhZHkubmV4dChjaGFydCk7XG5cbiAgICB0aGlzLmNoYW5nZURhdGEoKTtcblxuICAgIGNoYXJ0LnJlbmRlcigpO1xuICB9XG5cbiAgY2hhbmdlRGF0YSgpOiB2b2lkIHtcbiAgICBjb25zdCB7IF9jaGFydCwgZGF0YSB9ID0gdGhpcztcbiAgICBpZiAoIV9jaGFydCB8fCAhQXJyYXkuaXNBcnJheShkYXRhKSB8fCBkYXRhLmxlbmd0aCA8PSAwKSByZXR1cm47XG5cbiAgICAvLyDovazljJYgcGVyY2VudFxuICAgIGNvbnN0IHRvdGFsU3VtID0gZGF0YS5yZWR1Y2UoKGN1ciwgaXRlbSkgPT4gY3VyICsgaXRlbS55LCAwKTtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZGF0YSkge1xuICAgICAgaXRlbS5wZXJjZW50ID0gdG90YWxTdW0gPT09IDAgPyAwIDogaXRlbS55IC8gdG90YWxTdW07XG4gICAgfVxuICAgIF9jaGFydC5jaGFuZ2VEYXRhKGRhdGEpO1xuXG4gICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMuZ2VuTGVnZW5kKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5MZWdlbmQoKTogdm9pZCB7XG4gICAgY29uc3QgeyBoYXNMZWdlbmQsIGlzUGVyY2VudCwgY2RyLCBfY2hhcnQgfSA9IHRoaXM7XG4gICAgaWYgKCFoYXNMZWdlbmQgfHwgaXNQZXJjZW50KSByZXR1cm47XG5cbiAgICB0aGlzLmxlZ2VuZERhdGEgPSBfY2hhcnQuZ2VvbWV0cmllc1swXS5kYXRhQXJyYXkubWFwKChpdGVtOiBOelNhZmVBbnkpID0+IHtcbiAgICAgIGNvbnN0IG9yaWdpbiA9IGl0ZW1bMF0uX29yaWdpbjtcbiAgICAgIG9yaWdpbi5jb2xvciA9IGl0ZW1bMF0uY29sb3I7XG4gICAgICBvcmlnaW4uY2hlY2tlZCA9IHRydWU7XG4gICAgICBvcmlnaW4ucGVyY2VudCA9IChvcmlnaW4ucGVyY2VudCAqIDEwMCkudG9GaXhlZCgyKTtcbiAgICAgIHJldHVybiBvcmlnaW47XG4gICAgfSk7XG5cbiAgICBjZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgX2NsaWNrKGk6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IHsgbGVnZW5kRGF0YSwgX2NoYXJ0IH0gPSB0aGlzO1xuICAgIGxlZ2VuZERhdGFbaV0uY2hlY2tlZCA9ICFsZWdlbmREYXRhW2ldLmNoZWNrZWQ7XG4gICAgX2NoYXJ0LnJlbmRlcih0cnVlKTtcbiAgfVxuXG4gIG9uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLmZpeERhdGEoKTtcbiAgfVxufVxuIiwiQGlmICghbG9hZGVkKSB7XG4gIDxuei1za2VsZXRvbiAvPlxufVxuPGRpdiBjbGFzcz1cImcyLXBpZV9fY2hhcnRcIj5cbiAgPGRpdiAjY29udGFpbmVyPjwvZGl2PlxuICBAaWYgKHN1YlRpdGxlIHx8IHRvdGFsKSB7XG4gICAgPGRpdiBjbGFzcz1cImcyLXBpZV9fdG90YWxcIj5cbiAgICAgIEBpZiAoc3ViVGl0bGUpIHtcbiAgICAgICAgPGg0IGNsYXNzPVwiZzItcGllX190b3RhbC10aXRsZVwiPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJzdWJUaXRsZVwiPlxuICAgICAgICAgICAgPGRpdiBbaW5uZXJIVE1MXT1cInN1YlRpdGxlXCI+PC9kaXY+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvaDQ+XG4gICAgICB9XG4gICAgICBAaWYgKHRvdGFsKSB7XG4gICAgICAgIDxkaXYgY2xhc3M9XCJnMi1waWVfX3RvdGFsLXN0YXRcIj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwidG90YWxcIj5cbiAgICAgICAgICAgIDxkaXYgW2lubmVySFRNTF09XCJ0b3RhbFwiPjwvZGl2PlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgfVxuPC9kaXY+XG5AaWYgKGhhc0xlZ2VuZCAmJiBsZWdlbmREYXRhLmxlbmd0aCA+IDApIHtcbiAgPHVsIGNsYXNzPVwiZzItcGllX19sZWdlbmRcIj5cbiAgICBAZm9yIChpdGVtIG9mIGxlZ2VuZERhdGE7IHRyYWNrICRpbmRleCkge1xuICAgICAgPGxpIChjbGljayk9XCJfY2xpY2soJGluZGV4KVwiIGNsYXNzPVwiZzItcGllX19sZWdlbmQtaXRlbVwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImcyLXBpZV9fbGVnZW5kLWRvdFwiIFtuZ1N0eWxlXT1cInsgJ2JhY2tncm91bmQtY29sb3InOiAhaXRlbS5jaGVja2VkID8gJyNhYWEnIDogaXRlbS5jb2xvciB9XCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImcyLXBpZV9fbGVnZW5kLXRpdGxlXCI+e3sgaXRlbS54IH19PC9zcGFuPlxuICAgICAgICA8bnotZGl2aWRlciBuelR5cGU9XCJ2ZXJ0aWNhbFwiIC8+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZzItcGllX19sZWdlbmQtcGVyY2VudFwiPnt7IGl0ZW0ucGVyY2VudCB9fSU8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZzItcGllX19sZWdlbmQtdmFsdWVcIiBbaW5uZXJIVE1MXT1cInZhbHVlRm9ybWF0ID8gdmFsdWVGb3JtYXQoaXRlbS55KSA6IGl0ZW0ueVwiPjwvc3Bhbj5cbiAgICAgIDwvbGk+XG4gICAgfVxuICA8L3VsPlxufVxuIl19