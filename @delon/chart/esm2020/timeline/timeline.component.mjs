import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { format } from 'date-fns';
import { G2BaseComponent } from '@delon/chart/core';
import { toDate } from '@delon/util/date-time';
import { InputBoolean, InputNumber } from '@delon/util/decorator';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/skeleton";
import * as i2 from "ng-zorro-antd/core/outlet";
import * as i3 from "@angular/common";
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
        // #endregion
        this.onlyChangeData = (changes) => {
            const tm = changes.titleMap;
            return !(tm && !tm.firstChange && tm.currentValue !== tm.previousValue);
        };
    }
    install() {
        const { node, height, padding, slider, maxAxis, theme, maskSlider } = this;
        const chart = (this._chart = new window.G2.Chart({
            container: node.nativeElement,
            autoFit: true,
            height,
            padding,
            theme
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
            shared: true
        });
        const sliderPadding = { ...[], ...padding };
        sliderPadding[0] = 0;
        if (slider) {
            chart.option('slider', {
                height: 26,
                start: 0,
                end: 1,
                trendCfg: {
                    isArea: false
                },
                minLimit: 2,
                formatter: (val) => format(val, maskSlider)
            });
        }
        chart.on(`plot:click`, (ev) => {
            const records = this._chart.getSnapRecords({ x: ev.x, y: ev.y });
            this.ngZone.run(() => this.clickItem.emit({ item: records[0]._origin, ev }));
        });
        chart.on(`legend-item:click`, (ev) => {
            const item = ev?.target?.get('delegateObject').item;
            const id = item?.id;
            const line = chart.geometries.find(w => w.getAttribute('position').getFields()[1] === id);
            if (line) {
                line.changeVisible(!item.unchecked);
            }
        });
        this.ready.next(chart);
        this.changeData();
        chart.render();
    }
    changeData() {
        const { _chart, height, padding, mask, titleMap, position, colorMap, borderWidth, maxAxis } = this;
        let data = [...this.data];
        if (!_chart || data.length <= 0)
            return;
        const arrAxis = [...Array(maxAxis)].map((_, index) => index + 1);
        _chart.legend({
            position,
            custom: true,
            items: arrAxis.map(id => {
                const key = `y${id}`;
                return {
                    id: key,
                    name: titleMap[key],
                    value: key,
                    marker: { style: { fill: colorMap[key] } }
                };
            })
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
                min: 0
            };
        });
        _chart.scale({
            time: {
                type: 'time',
                mask,
                range: [0, 1]
            },
            ...scaleOptions
        });
        const initialRange = {
            start: data[0]._time,
            end: data[data.length - 1]._time
        };
        const filterData = data.filter(val => val._time >= initialRange.start && val._time <= initialRange.end);
        _chart.changeData(filterData);
    }
}
G2TimelineComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.2", ngImport: i0, type: G2TimelineComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
G2TimelineComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.2", type: G2TimelineComponent, selector: "g2-timeline", inputs: { title: "title", maxAxis: "maxAxis", data: "data", titleMap: "titleMap", colorMap: "colorMap", mask: "mask", maskSlider: "maskSlider", position: "position", height: "height", padding: "padding", borderWidth: "borderWidth", slider: "slider" }, outputs: { clickItem: "clickItem" }, exportAs: ["g2Timeline"], usesInheritance: true, ngImport: i0, template: `
    <ng-container *nzStringTemplateOutlet="title">
      <h4>{{ title }}</h4>
    </ng-container>
    <nz-skeleton *ngIf="!loaded"></nz-skeleton>
    <div #container></div>
  `, isInline: true, components: [{ type: i1.NzSkeletonComponent, selector: "nz-skeleton", inputs: ["nzActive", "nzLoading", "nzRound", "nzTitle", "nzAvatar", "nzParagraph"], exportAs: ["nzSkeleton"] }], directives: [{ type: i2.NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    InputNumber()
], G2TimelineComponent.prototype, "maxAxis", void 0);
__decorate([
    InputNumber()
], G2TimelineComponent.prototype, "height", void 0);
__decorate([
    InputNumber()
], G2TimelineComponent.prototype, "borderWidth", void 0);
__decorate([
    InputBoolean()
], G2TimelineComponent.prototype, "slider", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.2", ngImport: i0, type: G2TimelineComponent, decorators: [{
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
                    encapsulation: ViewEncapsulation.None
                }]
        }], propDecorators: { title: [{
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
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY2hhcnQvdGltZWxpbmUvdGltZWxpbmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFHTixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUVsQyxPQUFPLEVBQUUsZUFBZSxFQUFVLE1BQU0sbUJBQW1CLENBQUM7QUFDNUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQy9DLE9BQU8sRUFBZ0IsWUFBWSxFQUFFLFdBQVcsRUFBZSxNQUFNLHVCQUF1QixDQUFDOzs7OztBQXVEN0YsTUFBTSxPQUFPLG1CQUFvQixTQUFRLGVBQWU7SUFkeEQ7O1FBdUIwQixZQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLFNBQUksR0FBcUIsRUFBRSxDQUFDO1FBRTVCLGFBQVEsR0FBa0IsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQztRQUN4RyxTQUFJLEdBQVcsT0FBTyxDQUFDO1FBQ3ZCLGVBQVUsR0FBVyxPQUFPLENBQUM7UUFDN0IsYUFBUSxHQUF3QyxLQUFLLENBQUM7UUFDdkMsV0FBTSxHQUFHLEdBQUcsQ0FBQztRQUM1QixZQUFPLEdBQWEsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNyQixnQkFBVyxHQUFHLENBQUMsQ0FBQztRQUNmLFdBQU0sR0FBRyxJQUFJLENBQUM7UUFDcEIsY0FBUyxHQUFHLElBQUksWUFBWSxFQUF1QixDQUFDO1FBRXZFLGFBQWE7UUFFYixtQkFBYyxHQUFHLENBQUMsT0FBc0IsRUFBVyxFQUFFO1lBQ25ELE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFDNUIsT0FBTyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUMsWUFBWSxLQUFLLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMxRSxDQUFDLENBQUM7S0E4SEg7SUE1SEMsT0FBTztRQUNMLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDM0UsTUFBTSxLQUFLLEdBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUssTUFBb0IsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ3JFLFNBQVMsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUM3QixPQUFPLEVBQUUsSUFBSTtZQUNiLE1BQU07WUFDTixPQUFPO1lBQ1AsS0FBSztTQUNOLENBQUMsQ0FBQyxDQUFDO1FBQ0osS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNwQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ2xDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDakMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzVCO1FBRUQsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNqQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2pDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3JDO1FBRUQsS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUNaLGNBQWMsRUFBRSxJQUFJO1lBQ3BCLE1BQU0sRUFBRSxJQUFJO1NBQ2IsQ0FBQyxDQUFDO1FBRUgsTUFBTSxhQUFhLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxHQUFHLE9BQU8sRUFBRSxDQUFDO1FBQzVDLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckIsSUFBSSxNQUFNLEVBQUU7WUFDVixLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtnQkFDckIsTUFBTSxFQUFFLEVBQUU7Z0JBQ1YsS0FBSyxFQUFFLENBQUM7Z0JBQ1IsR0FBRyxFQUFFLENBQUM7Z0JBQ04sUUFBUSxFQUFFO29CQUNSLE1BQU0sRUFBRSxLQUFLO2lCQUNkO2dCQUNELFFBQVEsRUFBRSxDQUFDO2dCQUNYLFNBQVMsRUFBRSxDQUFDLEdBQVMsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUM7YUFDbEQsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxLQUFLLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDLEVBQVMsRUFBRSxFQUFFO1lBQ25DLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2pFLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQy9FLENBQUMsQ0FBQyxDQUFDO1FBRUgsS0FBSyxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLEVBQVMsRUFBRSxFQUFFO1lBQzFDLE1BQU0sSUFBSSxHQUFHLEVBQUUsRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ3BELE1BQU0sRUFBRSxHQUFHLElBQUksRUFBRSxFQUFFLENBQUM7WUFDcEIsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBQzFGLElBQUksSUFBSSxFQUFFO2dCQUNSLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDckM7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXZCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUVsQixLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELFVBQVU7UUFDUixNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDbkcsSUFBSSxJQUFJLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQztZQUFFLE9BQU87UUFFeEMsTUFBTSxPQUFPLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztRQUVqRSxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQ1osUUFBUTtZQUNSLE1BQU0sRUFBRSxJQUFJO1lBQ1osS0FBSyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUU7Z0JBQ3RCLE1BQU0sR0FBRyxHQUFHLElBQUksRUFBRSxFQUFFLENBQUM7Z0JBQ3JCLE9BQU87b0JBQ0wsRUFBRSxFQUFFLEdBQUc7b0JBQ1AsSUFBSSxFQUFFLFFBQVMsQ0FBQyxHQUFHLENBQUM7b0JBQ3BCLEtBQUssRUFBRSxHQUFHO29CQUNWLE1BQU0sRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRTtpQkFDdkIsQ0FBQztZQUN4QixDQUFDLENBQUM7U0FDSCxDQUFDLENBQUM7UUFFSCxTQUFTO1FBQ1QsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBVyxFQUFFLEVBQUU7WUFDM0MsQ0FBQyxDQUFDLEtBQUssQ0FBRSxRQUFzQixDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDcEUsQ0FBQyxDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN2QixNQUFNLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUV6QixVQUFVO1FBQ1YsSUFBSSxHQUFHLElBQUk7YUFDUixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDVixJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSyxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDeEIsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDLENBQUM7YUFDRCxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVyQyxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdHLE1BQU0sWUFBWSxHQUFzQyxFQUFFLENBQUM7UUFDM0QsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUNuQixNQUFNLEdBQUcsR0FBRyxJQUFJLEVBQUUsRUFBRSxDQUFDO1lBQ3JCLFlBQVksQ0FBQyxHQUFHLENBQUMsR0FBRztnQkFDbEIsS0FBSyxFQUFFLFFBQVMsQ0FBQyxHQUFHLENBQUM7Z0JBQ3JCLEdBQUc7Z0JBQ0gsR0FBRyxFQUFFLENBQUM7YUFDUCxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ1gsSUFBSSxFQUFFO2dCQUNKLElBQUksRUFBRSxNQUFNO2dCQUNaLElBQUk7Z0JBQ0osS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUNkO1lBQ0QsR0FBRyxZQUFZO1NBQ2hCLENBQUMsQ0FBQztRQUVILE1BQU0sWUFBWSxHQUFHO1lBQ25CLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSztZQUNwQixHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSztTQUNqQyxDQUFDO1FBQ0YsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLElBQUksWUFBWSxDQUFDLEtBQUssSUFBSSxHQUFHLENBQUMsS0FBSyxJQUFJLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN4RyxNQUFNLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7O2dIQXhKVSxtQkFBbUI7b0dBQW5CLG1CQUFtQixxWUFYcEI7Ozs7OztHQU1UO0FBY3VCO0lBQWQsV0FBVyxFQUFFO29EQUFhO0FBT1o7SUFBZCxXQUFXLEVBQUU7bURBQWM7QUFFYjtJQUFkLFdBQVcsRUFBRTt3REFBaUI7QUFDZjtJQUFmLFlBQVksRUFBRTttREFBZTsyRkFuQjVCLG1CQUFtQjtrQkFkL0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFFBQVEsRUFBRTs7Ozs7O0dBTVQ7b0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUN0Qzs4QkFTVSxLQUFLO3NCQUFiLEtBQUs7Z0JBQ2tCLE9BQU87c0JBQTlCLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csVUFBVTtzQkFBbEIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNrQixNQUFNO3NCQUE3QixLQUFLO2dCQUNHLE9BQU87c0JBQWYsS0FBSztnQkFDa0IsV0FBVztzQkFBbEMsS0FBSztnQkFDbUIsTUFBTTtzQkFBOUIsS0FBSztnQkFDYSxTQUFTO3NCQUEzQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB0eXBlIHsgQ2hhcnQsIEV2ZW50LCBUeXBlcyB9IGZyb20gJ0BhbnR2L2cyJztcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zJztcblxuaW1wb3J0IHsgRzJCYXNlQ29tcG9uZW50LCBHMlRpbWUgfSBmcm9tICdAZGVsb24vY2hhcnQvY29yZSc7XG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tICdAZGVsb24vdXRpbC9kYXRlLXRpbWUnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyLCBOdW1iZXJJbnB1dCB9IGZyb20gJ0BkZWxvbi91dGlsL2RlY29yYXRvcic7XG5pbXBvcnQgdHlwZSB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRzJUaW1lbGluZURhdGEge1xuICAvKipcbiAgICog5pe26Ze05YC8XG4gICAqL1xuICB0aW1lPzogRzJUaW1lO1xuICAvKiog5oyH5qCHMeaVsOaNriAqL1xuICB5MTogbnVtYmVyO1xuICAvKiog5oyH5qCHMuaVsOaNriAqL1xuICB5MjogbnVtYmVyO1xuICAvKiog5oyH5qCHM+aVsOaNriAqL1xuICB5Mz86IG51bWJlcjtcbiAgLyoqIOaMh+aghzTmlbDmja4gKi9cbiAgeTQ/OiBudW1iZXI7XG4gIC8qKiDmjIfmoIc15pWw5o2uICovXG4gIHk1PzogbnVtYmVyO1xuICBba2V5OiBzdHJpbmddOiBOelNhZmVBbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRzJUaW1lbGluZU1hcCB7XG4gIC8qKiDmjIfmoIcxICovXG4gIHkxOiBzdHJpbmc7XG4gIC8qKiDmjIfmoIcgKi9cbiAgeTI6IHN0cmluZztcbiAgLyoqIOaMh+aghzMgKi9cbiAgeTM/OiBzdHJpbmc7XG4gIC8qKiDmjIfmoIc0ICovXG4gIHk0Pzogc3RyaW5nO1xuICAvKiog5oyH5qCHNSAqL1xuICB5NT86IHN0cmluZztcblxuICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRzJUaW1lbGluZUNsaWNrSXRlbSB7XG4gIGl0ZW06IEcyVGltZWxpbmVEYXRhO1xuICBldjogRXZlbnQ7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2cyLXRpbWVsaW5lJyxcbiAgZXhwb3J0QXM6ICdnMlRpbWVsaW5lJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwidGl0bGVcIj5cbiAgICAgIDxoND57eyB0aXRsZSB9fTwvaDQ+XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgPG56LXNrZWxldG9uICpuZ0lmPVwiIWxvYWRlZFwiPjwvbnotc2tlbGV0b24+XG4gICAgPGRpdiAjY29udGFpbmVyPjwvZGl2PlxuICBgLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRzJUaW1lbGluZUNvbXBvbmVudCBleHRlbmRzIEcyQmFzZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9oZWlnaHQ6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbWF4QXhpczogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9ib3JkZXJXaWR0aDogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9zbGlkZXI6IEJvb2xlYW5JbnB1dDtcblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIEBJbnB1dCgpIHRpdGxlPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBtYXhBeGlzID0gMjtcbiAgQElucHV0KCkgZGF0YTogRzJUaW1lbGluZURhdGFbXSA9IFtdO1xuICBASW5wdXQoKSB0aXRsZU1hcD86IEcyVGltZWxpbmVNYXAgfCBudWxsO1xuICBASW5wdXQoKSBjb2xvck1hcDogRzJUaW1lbGluZU1hcCA9IHsgeTE6ICcjNUI4RkY5JywgeTI6ICcjNUFEOEE2JywgeTM6ICcjNUQ3MDkyJywgeTQ6ICcjRjZCRDE2JywgeTU6ICcjRTg2NDUyJyB9O1xuICBASW5wdXQoKSBtYXNrOiBzdHJpbmcgPSAnSEg6bW0nO1xuICBASW5wdXQoKSBtYXNrU2xpZGVyOiBzdHJpbmcgPSAnSEg6bW0nO1xuICBASW5wdXQoKSBwb3NpdGlvbjogJ3RvcCcgfCAncmlnaHQnIHwgJ2JvdHRvbScgfCAnbGVmdCcgPSAndG9wJztcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgaGVpZ2h0ID0gNDUwO1xuICBASW5wdXQoKSBwYWRkaW5nOiBudW1iZXJbXSA9IFs0MCwgOCwgNjQsIDQwXTtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgYm9yZGVyV2lkdGggPSAyO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2xpZGVyID0gdHJ1ZTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNsaWNrSXRlbSA9IG5ldyBFdmVudEVtaXR0ZXI8RzJUaW1lbGluZUNsaWNrSXRlbT4oKTtcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgb25seUNoYW5nZURhdGEgPSAoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IGJvb2xlYW4gPT4ge1xuICAgIGNvbnN0IHRtID0gY2hhbmdlcy50aXRsZU1hcDtcbiAgICByZXR1cm4gISh0bSAmJiAhdG0uZmlyc3RDaGFuZ2UgJiYgdG0uY3VycmVudFZhbHVlICE9PSB0bS5wcmV2aW91c1ZhbHVlKTtcbiAgfTtcblxuICBpbnN0YWxsKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgbm9kZSwgaGVpZ2h0LCBwYWRkaW5nLCBzbGlkZXIsIG1heEF4aXMsIHRoZW1lLCBtYXNrU2xpZGVyIH0gPSB0aGlzO1xuICAgIGNvbnN0IGNoYXJ0OiBDaGFydCA9ICh0aGlzLl9jaGFydCA9IG5ldyAod2luZG93IGFzIE56U2FmZUFueSkuRzIuQ2hhcnQoe1xuICAgICAgY29udGFpbmVyOiBub2RlLm5hdGl2ZUVsZW1lbnQsXG4gICAgICBhdXRvRml0OiB0cnVlLFxuICAgICAgaGVpZ2h0LFxuICAgICAgcGFkZGluZyxcbiAgICAgIHRoZW1lXG4gICAgfSkpO1xuICAgIGNoYXJ0LmF4aXMoJ3RpbWUnLCB7IHRpdGxlOiBudWxsIH0pO1xuICAgIGNoYXJ0LmF4aXMoJ3kxJywgeyB0aXRsZTogbnVsbCB9KTtcbiAgICBmb3IgKGxldCBpID0gMjsgaSA8PSBtYXhBeGlzOyBpKyspIHtcbiAgICAgIGNoYXJ0LmF4aXMoYHkke2l9YCwgZmFsc2UpO1xuICAgIH1cblxuICAgIGNoYXJ0LmxpbmUoKS5wb3NpdGlvbigndGltZSp5MScpO1xuICAgIGZvciAobGV0IGkgPSAyOyBpIDw9IG1heEF4aXM7IGkrKykge1xuICAgICAgY2hhcnQubGluZSgpLnBvc2l0aW9uKGB0aW1lKnkke2l9YCk7XG4gICAgfVxuXG4gICAgY2hhcnQudG9vbHRpcCh7XG4gICAgICBzaG93Q3Jvc3NoYWlyczogdHJ1ZSxcbiAgICAgIHNoYXJlZDogdHJ1ZVxuICAgIH0pO1xuXG4gICAgY29uc3Qgc2xpZGVyUGFkZGluZyA9IHsgLi4uW10sIC4uLnBhZGRpbmcgfTtcbiAgICBzbGlkZXJQYWRkaW5nWzBdID0gMDtcbiAgICBpZiAoc2xpZGVyKSB7XG4gICAgICBjaGFydC5vcHRpb24oJ3NsaWRlcicsIHtcbiAgICAgICAgaGVpZ2h0OiAyNixcbiAgICAgICAgc3RhcnQ6IDAsXG4gICAgICAgIGVuZDogMSxcbiAgICAgICAgdHJlbmRDZmc6IHtcbiAgICAgICAgICBpc0FyZWE6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIG1pbkxpbWl0OiAyLFxuICAgICAgICBmb3JtYXR0ZXI6ICh2YWw6IERhdGUpID0+IGZvcm1hdCh2YWwsIG1hc2tTbGlkZXIpXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjaGFydC5vbihgcGxvdDpjbGlja2AsIChldjogRXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHJlY29yZHMgPSB0aGlzLl9jaGFydC5nZXRTbmFwUmVjb3Jkcyh7IHg6IGV2LngsIHk6IGV2LnkgfSk7XG4gICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gdGhpcy5jbGlja0l0ZW0uZW1pdCh7IGl0ZW06IHJlY29yZHNbMF0uX29yaWdpbiwgZXYgfSkpO1xuICAgIH0pO1xuXG4gICAgY2hhcnQub24oYGxlZ2VuZC1pdGVtOmNsaWNrYCwgKGV2OiBFdmVudCkgPT4ge1xuICAgICAgY29uc3QgaXRlbSA9IGV2Py50YXJnZXQ/LmdldCgnZGVsZWdhdGVPYmplY3QnKS5pdGVtO1xuICAgICAgY29uc3QgaWQgPSBpdGVtPy5pZDtcbiAgICAgIGNvbnN0IGxpbmUgPSBjaGFydC5nZW9tZXRyaWVzLmZpbmQodyA9PiB3LmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5nZXRGaWVsZHMoKVsxXSA9PT0gaWQpO1xuICAgICAgaWYgKGxpbmUpIHtcbiAgICAgICAgbGluZS5jaGFuZ2VWaXNpYmxlKCFpdGVtLnVuY2hlY2tlZCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnJlYWR5Lm5leHQoY2hhcnQpO1xuXG4gICAgdGhpcy5jaGFuZ2VEYXRhKCk7XG5cbiAgICBjaGFydC5yZW5kZXIoKTtcbiAgfVxuXG4gIGNoYW5nZURhdGEoKTogdm9pZCB7XG4gICAgY29uc3QgeyBfY2hhcnQsIGhlaWdodCwgcGFkZGluZywgbWFzaywgdGl0bGVNYXAsIHBvc2l0aW9uLCBjb2xvck1hcCwgYm9yZGVyV2lkdGgsIG1heEF4aXMgfSA9IHRoaXM7XG4gICAgbGV0IGRhdGEgPSBbLi4udGhpcy5kYXRhXTtcbiAgICBpZiAoIV9jaGFydCB8fCBkYXRhLmxlbmd0aCA8PSAwKSByZXR1cm47XG5cbiAgICBjb25zdCBhcnJBeGlzID0gWy4uLkFycmF5KG1heEF4aXMpXS5tYXAoKF8sIGluZGV4KSA9PiBpbmRleCArIDEpO1xuXG4gICAgX2NoYXJ0LmxlZ2VuZCh7XG4gICAgICBwb3NpdGlvbixcbiAgICAgIGN1c3RvbTogdHJ1ZSxcbiAgICAgIGl0ZW1zOiBhcnJBeGlzLm1hcChpZCA9PiB7XG4gICAgICAgIGNvbnN0IGtleSA9IGB5JHtpZH1gO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGlkOiBrZXksXG4gICAgICAgICAgbmFtZTogdGl0bGVNYXAhW2tleV0sXG4gICAgICAgICAgdmFsdWU6IGtleSxcbiAgICAgICAgICBtYXJrZXI6IHsgc3R5bGU6IHsgZmlsbDogY29sb3JNYXBba2V5XSB9IH1cbiAgICAgICAgfSBhcyBUeXBlcy5MZWdlbmRJdGVtO1xuICAgICAgfSlcbiAgICB9KTtcblxuICAgIC8vIGJvcmRlclxuICAgIF9jaGFydC5nZW9tZXRyaWVzLmZvckVhY2goKHYsIGlkeDogbnVtYmVyKSA9PiB7XG4gICAgICB2LmNvbG9yKChjb2xvck1hcCBhcyBOelNhZmVBbnkpW2B5JHtpZHggKyAxfWBdKS5zaXplKGJvcmRlcldpZHRoKTtcbiAgICB9KTtcbiAgICBfY2hhcnQuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIF9jaGFydC5wYWRkaW5nID0gcGFkZGluZztcblxuICAgIC8vIOi9rOaNouaIkOaXpeacn+exu+Wei1xuICAgIGRhdGEgPSBkYXRhXG4gICAgICAubWFwKGl0ZW0gPT4ge1xuICAgICAgICBpdGVtLnRpbWUgPSB0b0RhdGUoaXRlbS50aW1lISk7XG4gICAgICAgIGl0ZW0uX3RpbWUgPSAraXRlbS50aW1lO1xuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgIH0pXG4gICAgICAuc29ydCgoYSwgYikgPT4gYS5fdGltZSAtIGIuX3RpbWUpO1xuXG4gICAgY29uc3QgbWF4ID0gTWF0aC5tYXgoLi4uYXJyQXhpcy5tYXAoaWQgPT4gWy4uLmRhdGFdLnNvcnQoKGEsIGIpID0+IGJbYHkke2lkfWBdIC0gYVtgeSR7aWR9YF0pWzBdW2B5JHtpZH1gXSkpO1xuICAgIGNvbnN0IHNjYWxlT3B0aW9uczogUmVjb3JkPHN0cmluZywgVHlwZXMuU2NhbGVPcHRpb24+ID0ge307XG4gICAgYXJyQXhpcy5mb3JFYWNoKGlkID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IGB5JHtpZH1gO1xuICAgICAgc2NhbGVPcHRpb25zW2tleV0gPSB7XG4gICAgICAgIGFsaWFzOiB0aXRsZU1hcCFba2V5XSxcbiAgICAgICAgbWF4LFxuICAgICAgICBtaW46IDBcbiAgICAgIH07XG4gICAgfSk7XG4gICAgX2NoYXJ0LnNjYWxlKHtcbiAgICAgIHRpbWU6IHtcbiAgICAgICAgdHlwZTogJ3RpbWUnLFxuICAgICAgICBtYXNrLFxuICAgICAgICByYW5nZTogWzAsIDFdXG4gICAgICB9LFxuICAgICAgLi4uc2NhbGVPcHRpb25zXG4gICAgfSk7XG5cbiAgICBjb25zdCBpbml0aWFsUmFuZ2UgPSB7XG4gICAgICBzdGFydDogZGF0YVswXS5fdGltZSxcbiAgICAgIGVuZDogZGF0YVtkYXRhLmxlbmd0aCAtIDFdLl90aW1lXG4gICAgfTtcbiAgICBjb25zdCBmaWx0ZXJEYXRhID0gZGF0YS5maWx0ZXIodmFsID0+IHZhbC5fdGltZSA+PSBpbml0aWFsUmFuZ2Uuc3RhcnQgJiYgdmFsLl90aW1lIDw9IGluaXRpYWxSYW5nZS5lbmQpO1xuICAgIF9jaGFydC5jaGFuZ2VEYXRhKGZpbHRlckRhdGEpO1xuICB9XG59XG4iXX0=