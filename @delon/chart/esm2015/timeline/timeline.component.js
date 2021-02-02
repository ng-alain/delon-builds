import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { G2BaseComponent } from '@delon/chart/core';
import { toDate } from '@delon/util/date-time';
import { InputBoolean, InputNumber } from '@delon/util/decorator';
import format from 'date-fns/format';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core/outlet";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/skeleton";
export class G2TimelineComponent extends G2BaseComponent {
    constructor() {
        super(...arguments);
        this.maxAxis = 2;
        this.data = [];
        this.colorMap = { y1: '#5B8FF9', y2: '#5AD8A6', y3: '#5D7092', y4: '#F6BD16', y5: '#E86452' };
        this.mask = 'HH:mm';
        this.maskSlider = 'HH:mm';
        this.position = 'top';
        this.height = 450;
        this.padding = [40, 8, 64, 40];
        this.borderWidth = 2;
        this.slider = true;
        this.clickItem = new EventEmitter();
    }
    // #endregion
    install() {
        const { node, height, padding, slider, maxAxis, theme, maskSlider } = this;
        const chart = (this._chart = new window.G2.Chart({
            container: node.nativeElement,
            autoFit: true,
            height,
            padding,
            theme,
        }));
        chart.axis('time', { title: null });
        chart.axis('y1', { title: null });
        for (let i = 2; i <= maxAxis; i++) {
            chart.axis(`y${i}`, false);
        }
        chart.line().position('time*y1');
        for (let i = 2; i <= maxAxis; i++) {
            chart.line().position(`time*y${i}`);
        }
        chart.tooltip({
            showCrosshairs: true,
            shared: true,
        });
        const sliderPadding = Object.assign(Object.assign({}, []), padding);
        sliderPadding[0] = 0;
        if (slider) {
            chart.option('slider', {
                height: 26,
                start: 0,
                end: 1,
                trendCfg: {
                    isArea: false,
                },
                minLimit: 2,
                formatter: (val) => format(val, maskSlider),
            });
        }
        chart.on(`plot:click`, (ev) => {
            const records = this._chart.getSnapRecords({ x: ev.x, y: ev.y });
            this.ngZone.run(() => this.clickItem.emit({ item: records[0]._origin, ev }));
        });
        chart.on(`legend-item:click`, (ev) => {
            var _a;
            const item = (_a = ev === null || ev === void 0 ? void 0 : ev.target) === null || _a === void 0 ? void 0 : _a.get('delegateObject').item;
            const id = item === null || item === void 0 ? void 0 : item.id;
            const line = chart.geometries.find(w => w.getAttribute('position').getFields()[1] === id);
            if (line) {
                line.changeVisible(!item.unchecked);
            }
        });
        this.attachChart();
    }
    attachChart() {
        const { _chart, height, padding, mask, titleMap, position, colorMap, borderWidth, maxAxis } = this;
        let data = [...this.data];
        if (!_chart || !data || data.length <= 0)
            return;
        const arrAxis = [...Array(maxAxis)].map((_, index) => index + 1);
        _chart.legend({
            position,
            custom: true,
            items: arrAxis.map(id => {
                const key = `y${id}`;
                return { id: key, name: titleMap[key], value: key, marker: { style: { fill: colorMap[key] } } };
            }),
        });
        // border
        _chart.geometries.forEach((v, idx) => {
            v.color(colorMap[`y${idx + 1}`]).size(borderWidth);
        });
        _chart.height = height;
        _chart.padding = padding;
        // 转换成日期类型
        data = data
            .map(item => {
            item.time = toDate(item.time);
            item._time = +item.time;
            return item;
        })
            .sort((a, b) => a._time - b._time);
        const max = Math.max(...arrAxis.map(id => [...data].sort((a, b) => b[`y${id}`] - a[`y${id}`])[0][`y${id}`]));
        const scaleOptions = {};
        arrAxis.forEach(id => {
            const key = `y${id}`;
            scaleOptions[key] = {
                alias: titleMap[key],
                max,
                min: 0,
            };
        });
        _chart.scale(Object.assign({ time: {
                type: 'time',
                mask,
                range: [0, 1],
            } }, scaleOptions));
        const initialRange = {
            start: data[0]._time,
            end: data[data.length - 1]._time,
        };
        const filterData = data.filter(val => val._time >= initialRange.start && val._time <= initialRange.end);
        _chart.changeData(filterData);
        _chart.render();
    }
}
/** @nocollapse */ G2TimelineComponent.ɵfac = function G2TimelineComponent_Factory(t) { return ɵG2TimelineComponent_BaseFactory(t || G2TimelineComponent); };
/** @nocollapse */ G2TimelineComponent.ɵcmp = i0.ɵɵngDeclareComponent({ version: "11.1.1", type: G2TimelineComponent, selector: "g2-timeline", inputs: { title: "title", maxAxis: "maxAxis", data: "data", titleMap: "titleMap", colorMap: "colorMap", mask: "mask", maskSlider: "maskSlider", position: "position", height: "height", padding: "padding", borderWidth: "borderWidth", slider: "slider" }, outputs: { clickItem: "clickItem" }, exportAs: ["g2Timeline"], usesInheritance: true, ngImport: i0, template: `
    <ng-container *nzStringTemplateOutlet="title">
      <h4>{{ title }}</h4>
    </ng-container>
    <nz-skeleton *ngIf="!loaded"></nz-skeleton>
    <div #container></div>
  `, isInline: true, directives: [{ type: i1.NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i3.NzSkeletonComponent, selector: "nz-skeleton", inputs: ["nzActive", "nzLoading", "nzRound", "nzTitle", "nzAvatar", "nzParagraph"], exportAs: ["nzSkeleton"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2TimelineComponent.prototype, "maxAxis", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2TimelineComponent.prototype, "height", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2TimelineComponent.prototype, "borderWidth", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], G2TimelineComponent.prototype, "slider", void 0);
const ɵG2TimelineComponent_BaseFactory = /*@__PURE__*/ i0.ɵɵgetInheritedFactory(G2TimelineComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(G2TimelineComponent, [{
        type: Component,
        args: [{
                selector: 'g2-timeline',
                exportAs: 'g2Timeline',
                template: `
    <ng-container *nzStringTemplateOutlet="title">
      <h4>{{ title }}</h4>
    </ng-container>
    <nz-skeleton *ngIf="!loaded"></nz-skeleton>
    <div #container></div>
  `,
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], null, { title: [{
            type: Input
        }], maxAxis: [{
            type: Input
        }], data: [{
            type: Input
        }], titleMap: [{
            type: Input
        }], colorMap: [{
            type: Input
        }], mask: [{
            type: Input
        }], maskSlider: [{
            type: Input
        }], position: [{
            type: Input
        }], height: [{
            type: Input
        }], padding: [{
            type: Input
        }], borderWidth: [{
            type: Input
        }], slider: [{
            type: Input
        }], clickItem: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY2hhcnQvdGltZWxpbmUvdGltZWxpbmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFlLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWhJLE9BQU8sRUFBRSxlQUFlLEVBQVUsTUFBTSxtQkFBbUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDL0MsT0FBTyxFQUFnQixZQUFZLEVBQUUsV0FBVyxFQUFlLE1BQU0sdUJBQXVCLENBQUM7QUFDN0YsT0FBTyxNQUFNLE1BQU0saUJBQWlCLENBQUM7Ozs7O0FBdURyQyxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsZUFBZTtJQWR4RDs7UUF1QjBCLFlBQU8sR0FBRyxDQUFDLENBQUM7UUFDM0IsU0FBSSxHQUFxQixFQUFFLENBQUM7UUFFNUIsYUFBUSxHQUFrQixFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDO1FBQ3hHLFNBQUksR0FBVyxPQUFPLENBQUM7UUFDdkIsZUFBVSxHQUFXLE9BQU8sQ0FBQztRQUM3QixhQUFRLEdBQXdDLEtBQUssQ0FBQztRQUN2QyxXQUFNLEdBQUcsR0FBRyxDQUFDO1FBQzVCLFlBQU8sR0FBYSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3JCLGdCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsV0FBTSxHQUFHLElBQUksQ0FBQztRQUM3QixjQUFTLEdBQUcsSUFBSSxZQUFZ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O0dBTVQ7QUFjdUI7SUFBZCxXQUFXLEVBQUU7O29EQUFhO0FBT1o7SUFBZCxXQUFXLEVBQUU7O21EQUFjO0FBRWI7SUFBZCxXQUFXLEVBQUU7O3dEQUFpQjtBQUNmO0lBQWYsWUFBWSxFQUFFOzttREFBZTtnRkFuQjVCLG1CQUFtQjt1RkFBbkIsbUJBQW1CO2NBZC9CLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFFBQVEsRUFBRTs7Ozs7O0dBTVQ7Z0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3RDO2dCQVNVLEtBQUs7a0JBQWIsS0FBSztZQUNrQixPQUFPO2tCQUE5QixLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxJQUFJO2tCQUFaLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNrQixNQUFNO2tCQUE3QixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBQ2tCLFdBQVc7a0JBQWxDLEtBQUs7WUFDbUIsTUFBTTtrQkFBOUIsS0FBSztZQUNJLFNBQVM7a0JBQWxCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFRlbXBsYXRlUmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2hhcnQsIEV2ZW50LCBUeXBlcyB9IGZyb20gJ0BhbnR2L2cyJztcbmltcG9ydCB7IEcyQmFzZUNvbXBvbmVudCwgRzJUaW1lIH0gZnJvbSAnQGRlbG9uL2NoYXJ0L2NvcmUnO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSAnQGRlbG9uL3V0aWwvZGF0ZS10aW1lJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciwgTnVtYmVySW5wdXQgfSBmcm9tICdAZGVsb24vdXRpbC9kZWNvcmF0b3InO1xuaW1wb3J0IGZvcm1hdCBmcm9tICdkYXRlLWZucy9mb3JtYXQnO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBHMlRpbWVsaW5lRGF0YSB7XG4gIC8qKlxuICAgKiDml7bpl7TlgLxcbiAgICovXG4gIHRpbWU/OiBHMlRpbWU7XG4gIC8qKiDmjIfmoIcx5pWw5o2uICovXG4gIHkxOiBudW1iZXI7XG4gIC8qKiDmjIfmoIcy5pWw5o2uICovXG4gIHkyOiBudW1iZXI7XG4gIC8qKiDmjIfmoIcz5pWw5o2uICovXG4gIHkzPzogbnVtYmVyO1xuICAvKiog5oyH5qCHNOaVsOaNriAqL1xuICB5ND86IG51bWJlcjtcbiAgLyoqIOaMh+aghzXmlbDmja4gKi9cbiAgeTU/OiBudW1iZXI7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHMlRpbWVsaW5lTWFwIHtcbiAgLyoqIOaMh+aghzEgKi9cbiAgeTE6IHN0cmluZztcbiAgLyoqIOaMh+aghyAqL1xuICB5Mjogc3RyaW5nO1xuICAvKiog5oyH5qCHMyAqL1xuICB5Mz86IHN0cmluZztcbiAgLyoqIOaMh+aghzQgKi9cbiAgeTQ/OiBzdHJpbmc7XG4gIC8qKiDmjIfmoIc1ICovXG4gIHk1Pzogc3RyaW5nO1xuXG4gIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHMlRpbWVsaW5lQ2xpY2tJdGVtIHtcbiAgaXRlbTogRzJUaW1lbGluZURhdGE7XG4gIGV2OiBFdmVudDtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZzItdGltZWxpbmUnLFxuICBleHBvcnRBczogJ2cyVGltZWxpbmUnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJ0aXRsZVwiPlxuICAgICAgPGg0Pnt7IHRpdGxlIH19PC9oND5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8bnotc2tlbGV0b24gKm5nSWY9XCIhbG9hZGVkXCI+PC9uei1za2VsZXRvbj5cbiAgICA8ZGl2ICNjb250YWluZXI+PC9kaXY+XG4gIGAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgRzJUaW1lbGluZUNvbXBvbmVudCBleHRlbmRzIEcyQmFzZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9oZWlnaHQ6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbWF4QXhpczogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9ib3JkZXJXaWR0aDogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9zbGlkZXI6IEJvb2xlYW5JbnB1dDtcblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgbWF4QXhpcyA9IDI7XG4gIEBJbnB1dCgpIGRhdGE6IEcyVGltZWxpbmVEYXRhW10gPSBbXTtcbiAgQElucHV0KCkgdGl0bGVNYXA6IEcyVGltZWxpbmVNYXA7XG4gIEBJbnB1dCgpIGNvbG9yTWFwOiBHMlRpbWVsaW5lTWFwID0geyB5MTogJyM1QjhGRjknLCB5MjogJyM1QUQ4QTYnLCB5MzogJyM1RDcwOTInLCB5NDogJyNGNkJEMTYnLCB5NTogJyNFODY0NTInIH07XG4gIEBJbnB1dCgpIG1hc2s6IHN0cmluZyA9ICdISDptbSc7XG4gIEBJbnB1dCgpIG1hc2tTbGlkZXI6IHN0cmluZyA9ICdISDptbSc7XG4gIEBJbnB1dCgpIHBvc2l0aW9uOiAndG9wJyB8ICdyaWdodCcgfCAnYm90dG9tJyB8ICdsZWZ0JyA9ICd0b3AnO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBoZWlnaHQgPSA0NTA7XG4gIEBJbnB1dCgpIHBhZGRpbmc6IG51bWJlcltdID0gWzQwLCA4LCA2NCwgNDBdO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBib3JkZXJXaWR0aCA9IDI7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzbGlkZXIgPSB0cnVlO1xuICBAT3V0cHV0KCkgY2xpY2tJdGVtID0gbmV3IEV2ZW50RW1pdHRlcjxHMlRpbWVsaW5lQ2xpY2tJdGVtPigpO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBpbnN0YWxsKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgbm9kZSwgaGVpZ2h0LCBwYWRkaW5nLCBzbGlkZXIsIG1heEF4aXMsIHRoZW1lLCBtYXNrU2xpZGVyIH0gPSB0aGlzO1xuICAgIGNvbnN0IGNoYXJ0OiBDaGFydCA9ICh0aGlzLl9jaGFydCA9IG5ldyAod2luZG93IGFzIGFueSkuRzIuQ2hhcnQoe1xuICAgICAgY29udGFpbmVyOiBub2RlLm5hdGl2ZUVsZW1lbnQsXG4gICAgICBhdXRvRml0OiB0cnVlLFxuICAgICAgaGVpZ2h0LFxuICAgICAgcGFkZGluZyxcbiAgICAgIHRoZW1lLFxuICAgIH0pKTtcbiAgICBjaGFydC5heGlzKCd0aW1lJywgeyB0aXRsZTogbnVsbCB9KTtcbiAgICBjaGFydC5heGlzKCd5MScsIHsgdGl0bGU6IG51bGwgfSk7XG4gICAgZm9yIChsZXQgaSA9IDI7IGkgPD0gbWF4QXhpczsgaSsrKSB7XG4gICAgICBjaGFydC5heGlzKGB5JHtpfWAsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBjaGFydC5saW5lKCkucG9zaXRpb24oJ3RpbWUqeTEnKTtcbiAgICBmb3IgKGxldCBpID0gMjsgaSA8PSBtYXhBeGlzOyBpKyspIHtcbiAgICAgIGNoYXJ0LmxpbmUoKS5wb3NpdGlvbihgdGltZSp5JHtpfWApO1xuICAgIH1cblxuICAgIGNoYXJ0LnRvb2x0aXAoe1xuICAgICAgc2hvd0Nyb3NzaGFpcnM6IHRydWUsXG4gICAgICBzaGFyZWQ6IHRydWUsXG4gICAgfSk7XG5cbiAgICBjb25zdCBzbGlkZXJQYWRkaW5nID0geyAuLi5bXSwgLi4ucGFkZGluZyB9O1xuICAgIHNsaWRlclBhZGRpbmdbMF0gPSAwO1xuICAgIGlmIChzbGlkZXIpIHtcbiAgICAgIGNoYXJ0Lm9wdGlvbignc2xpZGVyJywge1xuICAgICAgICBoZWlnaHQ6IDI2LFxuICAgICAgICBzdGFydDogMCxcbiAgICAgICAgZW5kOiAxLFxuICAgICAgICB0cmVuZENmZzoge1xuICAgICAgICAgIGlzQXJlYTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIG1pbkxpbWl0OiAyLFxuICAgICAgICBmb3JtYXR0ZXI6ICh2YWw6IERhdGUpID0+IGZvcm1hdCh2YWwsIG1hc2tTbGlkZXIpLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2hhcnQub24oYHBsb3Q6Y2xpY2tgLCAoZXY6IEV2ZW50KSA9PiB7XG4gICAgICBjb25zdCByZWNvcmRzID0gdGhpcy5fY2hhcnQuZ2V0U25hcFJlY29yZHMoeyB4OiBldi54LCB5OiBldi55IH0pO1xuICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMuY2xpY2tJdGVtLmVtaXQoeyBpdGVtOiByZWNvcmRzWzBdLl9vcmlnaW4sIGV2IH0pKTtcbiAgICB9KTtcblxuICAgIGNoYXJ0Lm9uKGBsZWdlbmQtaXRlbTpjbGlja2AsIChldjogRXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IGl0ZW0gPSBldj8udGFyZ2V0Py5nZXQoJ2RlbGVnYXRlT2JqZWN0JykuaXRlbTtcbiAgICAgIGNvbnN0IGlkID0gaXRlbT8uaWQ7XG4gICAgICBjb25zdCBsaW5lID0gY2hhcnQuZ2VvbWV0cmllcy5maW5kKHcgPT4gdy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJykuZ2V0RmllbGRzKClbMV0gPT09IGlkKTtcbiAgICAgIGlmIChsaW5lKSB7XG4gICAgICAgIGxpbmUuY2hhbmdlVmlzaWJsZSghaXRlbS51bmNoZWNrZWQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5hdHRhY2hDaGFydCgpO1xuICB9XG5cbiAgYXR0YWNoQ2hhcnQoKTogdm9pZCB7XG4gICAgY29uc3QgeyBfY2hhcnQsIGhlaWdodCwgcGFkZGluZywgbWFzaywgdGl0bGVNYXAsIHBvc2l0aW9uLCBjb2xvck1hcCwgYm9yZGVyV2lkdGgsIG1heEF4aXMgfSA9IHRoaXM7XG4gICAgbGV0IGRhdGEgPSBbLi4udGhpcy5kYXRhXTtcbiAgICBpZiAoIV9jaGFydCB8fCAhZGF0YSB8fCBkYXRhLmxlbmd0aCA8PSAwKSByZXR1cm47XG5cbiAgICBjb25zdCBhcnJBeGlzID0gWy4uLkFycmF5KG1heEF4aXMpXS5tYXAoKF8sIGluZGV4KSA9PiBpbmRleCArIDEpO1xuXG4gICAgX2NoYXJ0LmxlZ2VuZCh7XG4gICAgICBwb3NpdGlvbixcbiAgICAgIGN1c3RvbTogdHJ1ZSxcbiAgICAgIGl0ZW1zOiBhcnJBeGlzLm1hcChpZCA9PiB7XG4gICAgICAgIGNvbnN0IGtleSA9IGB5JHtpZH1gO1xuICAgICAgICByZXR1cm4geyBpZDoga2V5LCBuYW1lOiB0aXRsZU1hcFtrZXldLCB2YWx1ZToga2V5LCBtYXJrZXI6IHsgc3R5bGU6IHsgZmlsbDogY29sb3JNYXBba2V5XSB9IH0gfSBhcyBUeXBlcy5MZWdlbmRJdGVtO1xuICAgICAgfSksXG4gICAgfSk7XG5cbiAgICAvLyBib3JkZXJcbiAgICBfY2hhcnQuZ2VvbWV0cmllcy5mb3JFYWNoKCh2LCBpZHg6IG51bWJlcikgPT4ge1xuICAgICAgdi5jb2xvcigoY29sb3JNYXAgYXMgTnpTYWZlQW55KVtgeSR7aWR4ICsgMX1gXSkuc2l6ZShib3JkZXJXaWR0aCk7XG4gICAgfSk7XG4gICAgX2NoYXJ0LmhlaWdodCA9IGhlaWdodDtcbiAgICBfY2hhcnQucGFkZGluZyA9IHBhZGRpbmc7XG5cbiAgICAvLyDovazmjaLmiJDml6XmnJ/nsbvlnotcbiAgICBkYXRhID0gZGF0YVxuICAgICAgLm1hcChpdGVtID0+IHtcbiAgICAgICAgaXRlbS50aW1lID0gdG9EYXRlKGl0ZW0udGltZSEpO1xuICAgICAgICBpdGVtLl90aW1lID0gK2l0ZW0udGltZTtcbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICB9KVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGEuX3RpbWUgLSBiLl90aW1lKTtcblxuICAgIGNvbnN0IG1heCA9IE1hdGgubWF4KC4uLmFyckF4aXMubWFwKGlkID0+IFsuLi5kYXRhXS5zb3J0KChhLCBiKSA9PiBiW2B5JHtpZH1gXSAtIGFbYHkke2lkfWBdKVswXVtgeSR7aWR9YF0pKTtcbiAgICBjb25zdCBzY2FsZU9wdGlvbnM6IFJlY29yZDxzdHJpbmcsIFR5cGVzLlNjYWxlT3B0aW9uPiA9IHt9O1xuICAgIGFyckF4aXMuZm9yRWFjaChpZCA9PiB7XG4gICAgICBjb25zdCBrZXkgPSBgeSR7aWR9YDtcbiAgICAgIHNjYWxlT3B0aW9uc1trZXldID0ge1xuICAgICAgICBhbGlhczogdGl0bGVNYXBba2V5XSxcbiAgICAgICAgbWF4LFxuICAgICAgICBtaW46IDAsXG4gICAgICB9O1xuICAgIH0pO1xuICAgIF9jaGFydC5zY2FsZSh7XG4gICAgICB0aW1lOiB7XG4gICAgICAgIHR5cGU6ICd0aW1lJyxcbiAgICAgICAgbWFzayxcbiAgICAgICAgcmFuZ2U6IFswLCAxXSxcbiAgICAgIH0sXG4gICAgICAuLi5zY2FsZU9wdGlvbnMsXG4gICAgfSk7XG5cbiAgICBjb25zdCBpbml0aWFsUmFuZ2UgPSB7XG4gICAgICBzdGFydDogZGF0YVswXS5fdGltZSxcbiAgICAgIGVuZDogZGF0YVtkYXRhLmxlbmd0aCAtIDFdLl90aW1lLFxuICAgIH07XG4gICAgY29uc3QgZmlsdGVyRGF0YSA9IGRhdGEuZmlsdGVyKHZhbCA9PiB2YWwuX3RpbWUgPj0gaW5pdGlhbFJhbmdlLnN0YXJ0ICYmIHZhbC5fdGltZSA8PSBpbml0aWFsUmFuZ2UuZW5kKTtcbiAgICBfY2hhcnQuY2hhbmdlRGF0YShmaWx0ZXJEYXRhKTtcbiAgICBfY2hhcnQucmVuZGVyKCk7XG4gIH1cbn1cbiJdfQ==