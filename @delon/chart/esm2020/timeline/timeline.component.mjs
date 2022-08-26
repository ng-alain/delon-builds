import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { format } from 'date-fns';
import { G2BaseComponent } from '@delon/chart/core';
import { toDate } from '@delon/util/date-time';
import { InputBoolean, InputNumber } from '@delon/util/decorator';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/core/outlet";
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
}
G2TimelineComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: G2TimelineComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
G2TimelineComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.0", type: G2TimelineComponent, selector: "g2-timeline", inputs: { title: "title", maxAxis: "maxAxis", data: "data", titleMap: "titleMap", colorMap: "colorMap", mask: "mask", maskSlider: "maskSlider", position: "position", height: "height", padding: "padding", borderWidth: "borderWidth", slider: "slider" }, outputs: { clickItem: "clickItem" }, exportAs: ["g2Timeline"], usesInheritance: true, ngImport: i0, template: `
    <ng-container *nzStringTemplateOutlet="title">
      <h4>{{ title }}</h4>
    </ng-container>
    <nz-skeleton *ngIf="!loaded"></nz-skeleton>
    <div #container></div>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { kind: "component", type: i3.NzSkeletonComponent, selector: "nz-skeleton", inputs: ["nzActive", "nzLoading", "nzRound", "nzTitle", "nzAvatar", "nzParagraph"], exportAs: ["nzSkeleton"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: G2TimelineComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY2hhcnQvdGltZWxpbmUvdGltZWxpbmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFHTixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUVsQyxPQUFPLEVBQUUsZUFBZSxFQUFVLE1BQU0sbUJBQW1CLENBQUM7QUFDNUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQy9DLE9BQU8sRUFBZ0IsWUFBWSxFQUFFLFdBQVcsRUFBZSxNQUFNLHVCQUF1QixDQUFDOzs7OztBQXVEN0YsTUFBTSxPQUFPLG1CQUFvQixTQUFRLGVBQWU7SUFkeEQ7O1FBdUIwQixZQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLFNBQUksR0FBcUIsRUFBRSxDQUFDO1FBRTVCLGFBQVEsR0FBa0IsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQztRQUN4RyxTQUFJLEdBQVcsT0FBTyxDQUFDO1FBQ3ZCLGVBQVUsR0FBVyxPQUFPLENBQUM7UUFDN0IsYUFBUSxHQUF3QyxLQUFLLENBQUM7UUFDdkMsV0FBTSxHQUFHLEdBQUcsQ0FBQztRQUM1QixZQUFPLEdBQWEsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNyQixnQkFBVyxHQUFHLENBQUMsQ0FBQztRQUNmLFdBQU0sR0FBRyxJQUFJLENBQUM7UUFDcEIsY0FBUyxHQUFH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bmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB0eXBlIHsgQ2hhcnQsIEV2ZW50LCBUeXBlcyB9IGZyb20gJ0BhbnR2L2cyJztcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zJztcblxuaW1wb3J0IHsgRzJCYXNlQ29tcG9uZW50LCBHMlRpbWUgfSBmcm9tICdAZGVsb24vY2hhcnQvY29yZSc7XG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tICdAZGVsb24vdXRpbC9kYXRlLXRpbWUnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyLCBOdW1iZXJJbnB1dCB9IGZyb20gJ0BkZWxvbi91dGlsL2RlY29yYXRvcic7XG5pbXBvcnQgdHlwZSB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRzJUaW1lbGluZURhdGEge1xuICAvKipcbiAgICog5pe26Ze05YC8XG4gICAqL1xuICB0aW1lPzogRzJUaW1lO1xuICAvKiog5oyH5qCHMeaVsOaNriAqL1xuICB5MTogbnVtYmVyO1xuICAvKiog5oyH5qCHMuaVsOaNriAqL1xuICB5MjogbnVtYmVyO1xuICAvKiog5oyH5qCHM+aVsOaNriAqL1xuICB5Mz86IG51bWJlcjtcbiAgLyoqIOaMh+aghzTmlbDmja4gKi9cbiAgeTQ/OiBudW1iZXI7XG4gIC8qKiDmjIfmoIc15pWw5o2uICovXG4gIHk1PzogbnVtYmVyO1xuICBba2V5OiBzdHJpbmddOiBOelNhZmVBbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRzJUaW1lbGluZU1hcCB7XG4gIC8qKiDmjIfmoIcxICovXG4gIHkxOiBzdHJpbmc7XG4gIC8qKiDmjIfmoIcgKi9cbiAgeTI6IHN0cmluZztcbiAgLyoqIOaMh+aghzMgKi9cbiAgeTM/OiBzdHJpbmc7XG4gIC8qKiDmjIfmoIc0ICovXG4gIHk0Pzogc3RyaW5nO1xuICAvKiog5oyH5qCHNSAqL1xuICB5NT86IHN0cmluZztcblxuICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRzJUaW1lbGluZUNsaWNrSXRlbSB7XG4gIGl0ZW06IEcyVGltZWxpbmVEYXRhO1xuICBldjogRXZlbnQ7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2cyLXRpbWVsaW5lJyxcbiAgZXhwb3J0QXM6ICdnMlRpbWVsaW5lJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwidGl0bGVcIj5cbiAgICAgIDxoND57eyB0aXRsZSB9fTwvaDQ+XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgPG56LXNrZWxldG9uICpuZ0lmPVwiIWxvYWRlZFwiPjwvbnotc2tlbGV0b24+XG4gICAgPGRpdiAjY29udGFpbmVyPjwvZGl2PlxuICBgLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRzJUaW1lbGluZUNvbXBvbmVudCBleHRlbmRzIEcyQmFzZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9oZWlnaHQ6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbWF4QXhpczogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9ib3JkZXJXaWR0aDogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9zbGlkZXI6IEJvb2xlYW5JbnB1dDtcblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIEBJbnB1dCgpIHRpdGxlPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBtYXhBeGlzID0gMjtcbiAgQElucHV0KCkgZGF0YTogRzJUaW1lbGluZURhdGFbXSA9IFtdO1xuICBASW5wdXQoKSB0aXRsZU1hcD86IEcyVGltZWxpbmVNYXAgfCBudWxsO1xuICBASW5wdXQoKSBjb2xvck1hcDogRzJUaW1lbGluZU1hcCA9IHsgeTE6ICcjNUI4RkY5JywgeTI6ICcjNUFEOEE2JywgeTM6ICcjNUQ3MDkyJywgeTQ6ICcjRjZCRDE2JywgeTU6ICcjRTg2NDUyJyB9O1xuICBASW5wdXQoKSBtYXNrOiBzdHJpbmcgPSAnSEg6bW0nO1xuICBASW5wdXQoKSBtYXNrU2xpZGVyOiBzdHJpbmcgPSAnSEg6bW0nO1xuICBASW5wdXQoKSBwb3NpdGlvbjogJ3RvcCcgfCAncmlnaHQnIHwgJ2JvdHRvbScgfCAnbGVmdCcgPSAndG9wJztcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgaGVpZ2h0ID0gNDUwO1xuICBASW5wdXQoKSBwYWRkaW5nOiBudW1iZXJbXSA9IFs0MCwgOCwgNjQsIDQwXTtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgYm9yZGVyV2lkdGggPSAyO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2xpZGVyID0gdHJ1ZTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNsaWNrSXRlbSA9IG5ldyBFdmVudEVtaXR0ZXI8RzJUaW1lbGluZUNsaWNrSXRlbT4oKTtcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgb25seUNoYW5nZURhdGEgPSAoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IGJvb2xlYW4gPT4ge1xuICAgIGNvbnN0IHRtID0gY2hhbmdlcy50aXRsZU1hcDtcbiAgICByZXR1cm4gISh0bSAmJiAhdG0uZmlyc3RDaGFuZ2UgJiYgdG0uY3VycmVudFZhbHVlICE9PSB0bS5wcmV2aW91c1ZhbHVlKTtcbiAgfTtcblxuICBpbnN0YWxsKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgbm9kZSwgaGVpZ2h0LCBwYWRkaW5nLCBzbGlkZXIsIG1heEF4aXMsIHRoZW1lLCBtYXNrU2xpZGVyIH0gPSB0aGlzO1xuICAgIGNvbnN0IGNoYXJ0OiBDaGFydCA9ICh0aGlzLl9jaGFydCA9IG5ldyB0aGlzLndpbkcyLkNoYXJ0KHtcbiAgICAgIGNvbnRhaW5lcjogbm9kZS5uYXRpdmVFbGVtZW50LFxuICAgICAgYXV0b0ZpdDogdHJ1ZSxcbiAgICAgIGhlaWdodCxcbiAgICAgIHBhZGRpbmcsXG4gICAgICB0aGVtZVxuICAgIH0pKTtcbiAgICBjaGFydC5heGlzKCd0aW1lJywgeyB0aXRsZTogbnVsbCB9KTtcbiAgICBjaGFydC5heGlzKCd5MScsIHsgdGl0bGU6IG51bGwgfSk7XG4gICAgZm9yIChsZXQgaSA9IDI7IGkgPD0gbWF4QXhpczsgaSsrKSB7XG4gICAgICBjaGFydC5heGlzKGB5JHtpfWAsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBjaGFydC5saW5lKCkucG9zaXRpb24oJ3RpbWUqeTEnKTtcbiAgICBmb3IgKGxldCBpID0gMjsgaSA8PSBtYXhBeGlzOyBpKyspIHtcbiAgICAgIGNoYXJ0LmxpbmUoKS5wb3NpdGlvbihgdGltZSp5JHtpfWApO1xuICAgIH1cblxuICAgIGNoYXJ0LnRvb2x0aXAoe1xuICAgICAgc2hvd0Nyb3NzaGFpcnM6IHRydWUsXG4gICAgICBzaGFyZWQ6IHRydWVcbiAgICB9KTtcblxuICAgIGNvbnN0IHNsaWRlclBhZGRpbmcgPSB7IC4uLltdLCAuLi5wYWRkaW5nIH07XG4gICAgc2xpZGVyUGFkZGluZ1swXSA9IDA7XG4gICAgaWYgKHNsaWRlcikge1xuICAgICAgY2hhcnQub3B0aW9uKCdzbGlkZXInLCB7XG4gICAgICAgIGhlaWdodDogMjYsXG4gICAgICAgIHN0YXJ0OiAwLFxuICAgICAgICBlbmQ6IDEsXG4gICAgICAgIHRyZW5kQ2ZnOiB7XG4gICAgICAgICAgaXNBcmVhOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBtaW5MaW1pdDogMixcbiAgICAgICAgZm9ybWF0dGVyOiAodmFsOiBEYXRlKSA9PiBmb3JtYXQodmFsLCBtYXNrU2xpZGVyKVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2hhcnQub24oYHBsb3Q6Y2xpY2tgLCAoZXY6IEV2ZW50KSA9PiB7XG4gICAgICBjb25zdCByZWNvcmRzID0gdGhpcy5fY2hhcnQuZ2V0U25hcFJlY29yZHMoeyB4OiBldi54LCB5OiBldi55IH0pO1xuICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMuY2xpY2tJdGVtLmVtaXQoeyBpdGVtOiByZWNvcmRzWzBdLl9vcmlnaW4sIGV2IH0pKTtcbiAgICB9KTtcblxuICAgIGNoYXJ0Lm9uKGBsZWdlbmQtaXRlbTpjbGlja2AsIChldjogRXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IGl0ZW0gPSBldj8udGFyZ2V0Py5nZXQoJ2RlbGVnYXRlT2JqZWN0JykuaXRlbTtcbiAgICAgIGNvbnN0IGlkID0gaXRlbT8uaWQ7XG4gICAgICBjb25zdCBsaW5lID0gY2hhcnQuZ2VvbWV0cmllcy5maW5kKHcgPT4gdy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJykuZ2V0RmllbGRzKClbMV0gPT09IGlkKTtcbiAgICAgIGlmIChsaW5lKSB7XG4gICAgICAgIGxpbmUuY2hhbmdlVmlzaWJsZSghaXRlbS51bmNoZWNrZWQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5yZWFkeS5uZXh0KGNoYXJ0KTtcblxuICAgIHRoaXMuY2hhbmdlRGF0YSgpO1xuXG4gICAgY2hhcnQucmVuZGVyKCk7XG4gIH1cblxuICBjaGFuZ2VEYXRhKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgX2NoYXJ0LCBoZWlnaHQsIHBhZGRpbmcsIG1hc2ssIHRpdGxlTWFwLCBwb3NpdGlvbiwgY29sb3JNYXAsIGJvcmRlcldpZHRoLCBtYXhBeGlzIH0gPSB0aGlzO1xuICAgIGxldCBkYXRhID0gWy4uLnRoaXMuZGF0YV07XG4gICAgaWYgKCFfY2hhcnQgfHwgZGF0YS5sZW5ndGggPD0gMCkgcmV0dXJuO1xuXG4gICAgY29uc3QgYXJyQXhpcyA9IFsuLi5BcnJheShtYXhBeGlzKV0ubWFwKChfLCBpbmRleCkgPT4gaW5kZXggKyAxKTtcblxuICAgIF9jaGFydC5sZWdlbmQoe1xuICAgICAgcG9zaXRpb24sXG4gICAgICBjdXN0b206IHRydWUsXG4gICAgICBpdGVtczogYXJyQXhpcy5tYXAoaWQgPT4ge1xuICAgICAgICBjb25zdCBrZXkgPSBgeSR7aWR9YDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpZDoga2V5LFxuICAgICAgICAgIG5hbWU6IHRpdGxlTWFwIVtrZXldLFxuICAgICAgICAgIHZhbHVlOiBrZXksXG4gICAgICAgICAgbWFya2VyOiB7IHN0eWxlOiB7IGZpbGw6IGNvbG9yTWFwW2tleV0gfSB9XG4gICAgICAgIH0gYXMgVHlwZXMuTGVnZW5kSXRlbTtcbiAgICAgIH0pXG4gICAgfSk7XG5cbiAgICAvLyBib3JkZXJcbiAgICBfY2hhcnQuZ2VvbWV0cmllcy5mb3JFYWNoKCh2LCBpZHg6IG51bWJlcikgPT4ge1xuICAgICAgdi5jb2xvcigoY29sb3JNYXAgYXMgTnpTYWZlQW55KVtgeSR7aWR4ICsgMX1gXSkuc2l6ZShib3JkZXJXaWR0aCk7XG4gICAgfSk7XG4gICAgX2NoYXJ0LmhlaWdodCA9IGhlaWdodDtcbiAgICBfY2hhcnQucGFkZGluZyA9IHBhZGRpbmc7XG5cbiAgICAvLyDovazmjaLmiJDml6XmnJ/nsbvlnotcbiAgICBkYXRhID0gZGF0YVxuICAgICAgLm1hcChpdGVtID0+IHtcbiAgICAgICAgaXRlbS50aW1lID0gdG9EYXRlKGl0ZW0udGltZSEpO1xuICAgICAgICBpdGVtLl90aW1lID0gK2l0ZW0udGltZTtcbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICB9KVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGEuX3RpbWUgLSBiLl90aW1lKTtcblxuICAgIGNvbnN0IG1heCA9IE1hdGgubWF4KC4uLmFyckF4aXMubWFwKGlkID0+IFsuLi5kYXRhXS5zb3J0KChhLCBiKSA9PiBiW2B5JHtpZH1gXSAtIGFbYHkke2lkfWBdKVswXVtgeSR7aWR9YF0pKTtcbiAgICBjb25zdCBzY2FsZU9wdGlvbnM6IFJlY29yZDxzdHJpbmcsIFR5cGVzLlNjYWxlT3B0aW9uPiA9IHt9O1xuICAgIGFyckF4aXMuZm9yRWFjaChpZCA9PiB7XG4gICAgICBjb25zdCBrZXkgPSBgeSR7aWR9YDtcbiAgICAgIHNjYWxlT3B0aW9uc1trZXldID0ge1xuICAgICAgICBhbGlhczogdGl0bGVNYXAhW2tleV0sXG4gICAgICAgIG1heCxcbiAgICAgICAgbWluOiAwXG4gICAgICB9O1xuICAgIH0pO1xuICAgIF9jaGFydC5zY2FsZSh7XG4gICAgICB0aW1lOiB7XG4gICAgICAgIHR5cGU6ICd0aW1lJyxcbiAgICAgICAgbWFzayxcbiAgICAgICAgcmFuZ2U6IFswLCAxXVxuICAgICAgfSxcbiAgICAgIC4uLnNjYWxlT3B0aW9uc1xuICAgIH0pO1xuXG4gICAgY29uc3QgaW5pdGlhbFJhbmdlID0ge1xuICAgICAgc3RhcnQ6IGRhdGFbMF0uX3RpbWUsXG4gICAgICBlbmQ6IGRhdGFbZGF0YS5sZW5ndGggLSAxXS5fdGltZVxuICAgIH07XG4gICAgY29uc3QgZmlsdGVyRGF0YSA9IGRhdGEuZmlsdGVyKHZhbCA9PiB2YWwuX3RpbWUgPj0gaW5pdGlhbFJhbmdlLnN0YXJ0ICYmIHZhbC5fdGltZSA8PSBpbml0aWFsUmFuZ2UuZW5kKTtcbiAgICBfY2hhcnQuY2hhbmdlRGF0YShmaWx0ZXJEYXRhKTtcbiAgfVxufVxuIl19