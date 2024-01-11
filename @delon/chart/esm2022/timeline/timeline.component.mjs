import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { format } from 'date-fns';
import { G2BaseComponent } from '@delon/chart/core';
import { toDate } from '@delon/util/date-time';
import { InputBoolean, InputNumber } from '@delon/util/decorator';
import { NzStringTemplateOutletDirective } from 'ng-zorro-antd/core/outlet';
import { NzSkeletonComponent } from 'ng-zorro-antd/skeleton';
import * as i0 from "@angular/core";
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
        const chart = (this._chart = new this.winG2.Chart({
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: G2TimelineComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.9", type: G2TimelineComponent, isStandalone: true, selector: "g2-timeline", inputs: { title: "title", maxAxis: "maxAxis", data: "data", titleMap: "titleMap", colorMap: "colorMap", mask: "mask", maskSlider: "maskSlider", position: "position", height: "height", padding: "padding", borderWidth: "borderWidth", slider: "slider" }, outputs: { clickItem: "clickItem" }, exportAs: ["g2Timeline"], usesInheritance: true, ngImport: i0, template: `
    <ng-container *nzStringTemplateOutlet="title">
      <h4>{{ title }}</h4>
    </ng-container>
    @if (!loaded) {
      <nz-skeleton />
    }
    <div #container></div>
  `, isInline: true, dependencies: [{ kind: "directive", type: NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { kind: "component", type: NzSkeletonComponent, selector: "nz-skeleton", inputs: ["nzActive", "nzLoading", "nzRound", "nzTitle", "nzAvatar", "nzParagraph"], exportAs: ["nzSkeleton"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: G2TimelineComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'g2-timeline',
                    exportAs: 'g2Timeline',
                    template: `
    <ng-container *nzStringTemplateOutlet="title">
      <h4>{{ title }}</h4>
    </ng-container>
    @if (!loaded) {
      <nz-skeleton />
    }
    <div #container></div>
  `,
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    standalone: true,
                    imports: [NzStringTemplateOutletDirective, NzSkeletonComponent]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY2hhcnQvdGltZWxpbmUvdGltZWxpbmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFHTixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUVsQyxPQUFPLEVBQUUsZUFBZSxFQUFVLE1BQU0sbUJBQW1CLENBQUM7QUFDNUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQy9DLE9BQU8sRUFBZ0IsWUFBWSxFQUFFLFdBQVcsRUFBZSxNQUFNLHVCQUF1QixDQUFDO0FBQzdGLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRTVFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQStEN0QsTUFBTSxPQUFPLG1CQUFvQixTQUFRLGVBQWU7SUFsQnhEOztRQTJCMEIsWUFBTyxHQUFHLENBQUMsQ0FBQztRQUMzQixTQUFJLEdBQXFCLEVBQUUsQ0FBQztRQUU1QixhQUFRLEdBQWtCLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUM7UUFDeEcsU0FBSSxHQUFXLE9BQU8sQ0FBQztRQUN2QixlQUFVLEdBQVcsT0FBTyxDQUFDO1FBQzdCLGFBQVEsR0FBd0MsS0FBSyxDQUFDO1FBQ3ZDLFdBQU0sR0FBRyxHQUFHLENBQUM7UUFDNUIsWUFBTyxHQUFhLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFF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RyxRQUFRO3NCQUFoQixLQUFLO2dCQUNrQixNQUFNO3NCQUE3QixLQUFLO2dCQUNHLE9BQU87c0JBQWYsS0FBSztnQkFDa0IsV0FBVztzQkFBbEMsS0FBSztnQkFDbUIsTUFBTTtzQkFBOUIsS0FBSztnQkFDYSxTQUFTO3NCQUEzQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB0eXBlIHsgQ2hhcnQsIEV2ZW50LCBUeXBlcyB9IGZyb20gJ0BhbnR2L2cyJztcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zJztcblxuaW1wb3J0IHsgRzJCYXNlQ29tcG9uZW50LCBHMlRpbWUgfSBmcm9tICdAZGVsb24vY2hhcnQvY29yZSc7XG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tICdAZGVsb24vdXRpbC9kYXRlLXRpbWUnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyLCBOdW1iZXJJbnB1dCB9IGZyb20gJ0BkZWxvbi91dGlsL2RlY29yYXRvcic7XG5pbXBvcnQgeyBOelN0cmluZ1RlbXBsYXRlT3V0bGV0RGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL291dGxldCc7XG5pbXBvcnQgdHlwZSB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBOelNrZWxldG9uQ29tcG9uZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC9za2VsZXRvbic7XG5cbi8qKlxuICog5pWw5o2uXG4gKlxuICog5rOo77ya5qC55o2uIGBtYXhBeGlzYCDlgLzkvKDpgJLmjIfmoIfmlbDmja5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBHMlRpbWVsaW5lRGF0YSB7XG4gIC8qKlxuICAgKiDml7bpl7TlgLxcbiAgICovXG4gIHRpbWU/OiBHMlRpbWU7XG4gIC8qKiDmjIfmoIcx5pWw5o2uICovXG4gIHkxOiBudW1iZXI7XG4gIC8qKiDmjIfmoIcy5pWw5o2uICovXG4gIHkyPzogbnVtYmVyO1xuICAvKiog5oyH5qCHM+aVsOaNriAqL1xuICB5Mz86IG51bWJlcjtcbiAgLyoqIOaMh+aghzTmlbDmja4gKi9cbiAgeTQ/OiBudW1iZXI7XG4gIC8qKiDmjIfmoIc15pWw5o2uICovXG4gIHk1PzogbnVtYmVyO1xuICBba2V5OiBzdHJpbmddOiBOelNhZmVBbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRzJUaW1lbGluZU1hcCB7XG4gIC8qKiDmjIfmoIcxICovXG4gIHkxOiBzdHJpbmc7XG4gIC8qKiDmjIfmoIcgKi9cbiAgeTI/OiBzdHJpbmc7XG4gIC8qKiDmjIfmoIczICovXG4gIHkzPzogc3RyaW5nO1xuICAvKiog5oyH5qCHNCAqL1xuICB5ND86IHN0cmluZztcbiAgLyoqIOaMh+aghzUgKi9cbiAgeTU/OiBzdHJpbmc7XG5cbiAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEcyVGltZWxpbmVDbGlja0l0ZW0ge1xuICBpdGVtOiBHMlRpbWVsaW5lRGF0YTtcbiAgZXY6IEV2ZW50O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnMi10aW1lbGluZScsXG4gIGV4cG9ydEFzOiAnZzJUaW1lbGluZScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cInRpdGxlXCI+XG4gICAgICA8aDQ+e3sgdGl0bGUgfX08L2g0PlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIEBpZiAoIWxvYWRlZCkge1xuICAgICAgPG56LXNrZWxldG9uIC8+XG4gICAgfVxuICAgIDxkaXYgI2NvbnRhaW5lcj48L2Rpdj5cbiAgYCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTnpTdHJpbmdUZW1wbGF0ZU91dGxldERpcmVjdGl2ZSwgTnpTa2VsZXRvbkNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgRzJUaW1lbGluZUNvbXBvbmVudCBleHRlbmRzIEcyQmFzZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9oZWlnaHQ6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbWF4QXhpczogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9ib3JkZXJXaWR0aDogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9zbGlkZXI6IEJvb2xlYW5JbnB1dDtcblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIEBJbnB1dCgpIHRpdGxlPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBtYXhBeGlzID0gMjtcbiAgQElucHV0KCkgZGF0YTogRzJUaW1lbGluZURhdGFbXSA9IFtdO1xuICBASW5wdXQoKSB0aXRsZU1hcD86IEcyVGltZWxpbmVNYXAgfCBudWxsO1xuICBASW5wdXQoKSBjb2xvck1hcDogRzJUaW1lbGluZU1hcCA9IHsgeTE6ICcjNUI4RkY5JywgeTI6ICcjNUFEOEE2JywgeTM6ICcjNUQ3MDkyJywgeTQ6ICcjRjZCRDE2JywgeTU6ICcjRTg2NDUyJyB9O1xuICBASW5wdXQoKSBtYXNrOiBzdHJpbmcgPSAnSEg6bW0nO1xuICBASW5wdXQoKSBtYXNrU2xpZGVyOiBzdHJpbmcgPSAnSEg6bW0nO1xuICBASW5wdXQoKSBwb3NpdGlvbjogJ3RvcCcgfCAncmlnaHQnIHwgJ2JvdHRvbScgfCAnbGVmdCcgPSAndG9wJztcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgaGVpZ2h0ID0gNDUwO1xuICBASW5wdXQoKSBwYWRkaW5nOiBudW1iZXJbXSA9IFs0MCwgOCwgNjQsIDQwXTtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgYm9yZGVyV2lkdGggPSAyO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2xpZGVyID0gdHJ1ZTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNsaWNrSXRlbSA9IG5ldyBFdmVudEVtaXR0ZXI8RzJUaW1lbGluZUNsaWNrSXRlbT4oKTtcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgb25seUNoYW5nZURhdGEgPSAoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IGJvb2xlYW4gPT4ge1xuICAgIGNvbnN0IHRtID0gY2hhbmdlcy50aXRsZU1hcDtcbiAgICByZXR1cm4gISh0bSAmJiAhdG0uZmlyc3RDaGFuZ2UgJiYgdG0uY3VycmVudFZhbHVlICE9PSB0bS5wcmV2aW91c1ZhbHVlKTtcbiAgfTtcblxuICBpbnN0YWxsKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgbm9kZSwgaGVpZ2h0LCBwYWRkaW5nLCBzbGlkZXIsIG1heEF4aXMsIHRoZW1lLCBtYXNrU2xpZGVyIH0gPSB0aGlzO1xuICAgIGNvbnN0IGNoYXJ0OiBDaGFydCA9ICh0aGlzLl9jaGFydCA9IG5ldyB0aGlzLndpbkcyLkNoYXJ0KHtcbiAgICAgIGNvbnRhaW5lcjogbm9kZS5uYXRpdmVFbGVtZW50LFxuICAgICAgYXV0b0ZpdDogdHJ1ZSxcbiAgICAgIGhlaWdodCxcbiAgICAgIHBhZGRpbmcsXG4gICAgICB0aGVtZVxuICAgIH0pKTtcbiAgICBjaGFydC5heGlzKCd0aW1lJywgeyB0aXRsZTogbnVsbCB9KTtcbiAgICBjaGFydC5heGlzKCd5MScsIHsgdGl0bGU6IG51bGwgfSk7XG4gICAgZm9yIChsZXQgaSA9IDI7IGkgPD0gbWF4QXhpczsgaSsrKSB7XG4gICAgICBjaGFydC5heGlzKGB5JHtpfWAsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBjaGFydC5saW5lKCkucG9zaXRpb24oJ3RpbWUqeTEnKTtcbiAgICBmb3IgKGxldCBpID0gMjsgaSA8PSBtYXhBeGlzOyBpKyspIHtcbiAgICAgIGNoYXJ0LmxpbmUoKS5wb3NpdGlvbihgdGltZSp5JHtpfWApO1xuICAgIH1cblxuICAgIGNoYXJ0LnRvb2x0aXAoe1xuICAgICAgc2hvd0Nyb3NzaGFpcnM6IHRydWUsXG4gICAgICBzaGFyZWQ6IHRydWVcbiAgICB9KTtcblxuICAgIGNvbnN0IHNsaWRlclBhZGRpbmcgPSB7IC4uLltdLCAuLi5wYWRkaW5nIH07XG4gICAgc2xpZGVyUGFkZGluZ1swXSA9IDA7XG4gICAgaWYgKHNsaWRlcikge1xuICAgICAgY2hhcnQub3B0aW9uKCdzbGlkZXInLCB7XG4gICAgICAgIGhlaWdodDogMjYsXG4gICAgICAgIHN0YXJ0OiAwLFxuICAgICAgICBlbmQ6IDEsXG4gICAgICAgIHRyZW5kQ2ZnOiB7XG4gICAgICAgICAgaXNBcmVhOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBtaW5MaW1pdDogMixcbiAgICAgICAgZm9ybWF0dGVyOiAodmFsOiBEYXRlKSA9PiBmb3JtYXQodmFsLCBtYXNrU2xpZGVyKVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2hhcnQub24oYHBsb3Q6Y2xpY2tgLCAoZXY6IEV2ZW50KSA9PiB7XG4gICAgICBjb25zdCByZWNvcmRzID0gdGhpcy5fY2hhcnQuZ2V0U25hcFJlY29yZHMoeyB4OiBldi54LCB5OiBldi55IH0pO1xuICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMuY2xpY2tJdGVtLmVtaXQoeyBpdGVtOiByZWNvcmRzWzBdLl9vcmlnaW4sIGV2IH0pKTtcbiAgICB9KTtcblxuICAgIGNoYXJ0Lm9uKGBsZWdlbmQtaXRlbTpjbGlja2AsIChldjogRXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IGl0ZW0gPSBldj8udGFyZ2V0Py5nZXQoJ2RlbGVnYXRlT2JqZWN0JykuaXRlbTtcbiAgICAgIGNvbnN0IGlkID0gaXRlbT8uaWQ7XG4gICAgICBjb25zdCBsaW5lID0gY2hhcnQuZ2VvbWV0cmllcy5maW5kKHcgPT4gdy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJykuZ2V0RmllbGRzKClbMV0gPT09IGlkKTtcbiAgICAgIGlmIChsaW5lKSB7XG4gICAgICAgIGxpbmUuY2hhbmdlVmlzaWJsZSghaXRlbS51bmNoZWNrZWQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5yZWFkeS5uZXh0KGNoYXJ0KTtcblxuICAgIHRoaXMuY2hhbmdlRGF0YSgpO1xuXG4gICAgY2hhcnQucmVuZGVyKCk7XG4gIH1cblxuICBjaGFuZ2VEYXRhKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgX2NoYXJ0LCBoZWlnaHQsIHBhZGRpbmcsIG1hc2ssIHRpdGxlTWFwLCBwb3NpdGlvbiwgY29sb3JNYXAsIGJvcmRlcldpZHRoLCBtYXhBeGlzIH0gPSB0aGlzO1xuICAgIGxldCBkYXRhID0gWy4uLnRoaXMuZGF0YV07XG4gICAgaWYgKCFfY2hhcnQgfHwgZGF0YS5sZW5ndGggPD0gMCkgcmV0dXJuO1xuXG4gICAgY29uc3QgYXJyQXhpcyA9IFsuLi5BcnJheShtYXhBeGlzKV0ubWFwKChfLCBpbmRleCkgPT4gaW5kZXggKyAxKTtcblxuICAgIF9jaGFydC5sZWdlbmQoe1xuICAgICAgcG9zaXRpb24sXG4gICAgICBjdXN0b206IHRydWUsXG4gICAgICBpdGVtczogYXJyQXhpcy5tYXAoaWQgPT4ge1xuICAgICAgICBjb25zdCBrZXkgPSBgeSR7aWR9YDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpZDoga2V5LFxuICAgICAgICAgIG5hbWU6IHRpdGxlTWFwIVtrZXldLFxuICAgICAgICAgIHZhbHVlOiBrZXksXG4gICAgICAgICAgbWFya2VyOiB7IHN0eWxlOiB7IGZpbGw6IGNvbG9yTWFwW2tleV0gfSB9XG4gICAgICAgIH0gYXMgVHlwZXMuTGVnZW5kSXRlbTtcbiAgICAgIH0pXG4gICAgfSk7XG5cbiAgICAvLyBib3JkZXJcbiAgICBfY2hhcnQuZ2VvbWV0cmllcy5mb3JFYWNoKCh2LCBpZHg6IG51bWJlcikgPT4ge1xuICAgICAgdi5jb2xvcigoY29sb3JNYXAgYXMgTnpTYWZlQW55KVtgeSR7aWR4ICsgMX1gXSkuc2l6ZShib3JkZXJXaWR0aCk7XG4gICAgfSk7XG4gICAgX2NoYXJ0LmhlaWdodCA9IGhlaWdodDtcbiAgICBfY2hhcnQucGFkZGluZyA9IHBhZGRpbmc7XG5cbiAgICAvLyDovazmjaLmiJDml6XmnJ/nsbvlnotcbiAgICBkYXRhID0gZGF0YVxuICAgICAgLm1hcChpdGVtID0+IHtcbiAgICAgICAgaXRlbS50aW1lID0gdG9EYXRlKGl0ZW0udGltZSEpO1xuICAgICAgICBpdGVtLl90aW1lID0gK2l0ZW0udGltZTtcbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICB9KVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGEuX3RpbWUgLSBiLl90aW1lKTtcblxuICAgIGNvbnN0IG1heCA9IE1hdGgubWF4KC4uLmFyckF4aXMubWFwKGlkID0+IFsuLi5kYXRhXS5zb3J0KChhLCBiKSA9PiBiW2B5JHtpZH1gXSAtIGFbYHkke2lkfWBdKVswXVtgeSR7aWR9YF0pKTtcbiAgICBjb25zdCBzY2FsZU9wdGlvbnM6IFJlY29yZDxzdHJpbmcsIFR5cGVzLlNjYWxlT3B0aW9uPiA9IHt9O1xuICAgIGFyckF4aXMuZm9yRWFjaChpZCA9PiB7XG4gICAgICBjb25zdCBrZXkgPSBgeSR7aWR9YDtcbiAgICAgIHNjYWxlT3B0aW9uc1trZXldID0ge1xuICAgICAgICBhbGlhczogdGl0bGVNYXAhW2tleV0sXG4gICAgICAgIG1heCxcbiAgICAgICAgbWluOiAwXG4gICAgICB9O1xuICAgIH0pO1xuICAgIF9jaGFydC5zY2FsZSh7XG4gICAgICB0aW1lOiB7XG4gICAgICAgIHR5cGU6ICd0aW1lJyxcbiAgICAgICAgbWFzayxcbiAgICAgICAgcmFuZ2U6IFswLCAxXVxuICAgICAgfSxcbiAgICAgIC4uLnNjYWxlT3B0aW9uc1xuICAgIH0pO1xuXG4gICAgY29uc3QgaW5pdGlhbFJhbmdlID0ge1xuICAgICAgc3RhcnQ6IGRhdGFbMF0uX3RpbWUsXG4gICAgICBlbmQ6IGRhdGFbZGF0YS5sZW5ndGggLSAxXS5fdGltZVxuICAgIH07XG4gICAgY29uc3QgZmlsdGVyRGF0YSA9IGRhdGEuZmlsdGVyKHZhbCA9PiB2YWwuX3RpbWUgPj0gaW5pdGlhbFJhbmdlLnN0YXJ0ICYmIHZhbC5fdGltZSA8PSBpbml0aWFsUmFuZ2UuZW5kKTtcbiAgICBfY2hhcnQuY2hhbmdlRGF0YShmaWx0ZXJEYXRhKTtcbiAgfVxufVxuIl19