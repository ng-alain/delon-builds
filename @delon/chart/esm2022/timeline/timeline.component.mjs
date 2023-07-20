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
class G2TimelineComponent extends G2BaseComponent {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.6", ngImport: i0, type: G2TimelineComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.6", type: G2TimelineComponent, selector: "g2-timeline", inputs: { title: "title", maxAxis: "maxAxis", data: "data", titleMap: "titleMap", colorMap: "colorMap", mask: "mask", maskSlider: "maskSlider", position: "position", height: "height", padding: "padding", borderWidth: "borderWidth", slider: "slider" }, outputs: { clickItem: "clickItem" }, exportAs: ["g2Timeline"], usesInheritance: true, ngImport: i0, template: `
    <ng-container *nzStringTemplateOutlet="title">
      <h4>{{ title }}</h4>
    </ng-container>
    <nz-skeleton *ngIf="!loaded"></nz-skeleton>
    <div #container></div>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { kind: "component", type: i3.NzSkeletonComponent, selector: "nz-skeleton", inputs: ["nzActive", "nzLoading", "nzRound", "nzTitle", "nzAvatar", "nzParagraph"], exportAs: ["nzSkeleton"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
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
export { G2TimelineComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.6", ngImport: i0, type: G2TimelineComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY2hhcnQvdGltZWxpbmUvdGltZWxpbmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFHTixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUVsQyxPQUFPLEVBQUUsZUFBZSxFQUFVLE1BQU0sbUJBQW1CLENBQUM7QUFDNUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQy9DLE9BQU8sRUFBZ0IsWUFBWSxFQUFFLFdBQVcsRUFBZSxNQUFNLHVCQUF1QixDQUFDOzs7OztBQXlDN0YsTUFjYSxtQkFBb0IsU0FBUSxlQUFlO0lBZHhEOztRQXVCMEIsWUFBTyxHQUFHLENBQUMsQ0FBQztRQUMzQixTQUFJLEdBQXFCLEVBQUUsQ0FBQztRQUU1QixhQUFRLEdBQWtCLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUM7UUFDeEcsU0FBSSxHQUFXLE9BQU8sQ0FBQztRQUN2QixlQUFVLEdBQVcsT0FBTyxDQUFDO1FBQzdCLGFBQVEsR0FBd0MsS0FBSyxDQUFDO1FBQ3ZDLFdBQU0sR0FBRyxHQUFHLENBQUM7UUFDNUIsWUFBTyxHQUFhLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDckIsZ0JBQVcsR0FBRyxDQUFDLENBQUM7UUFDZixXQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLGNBQVMsR0FBRyxJQUFJ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dGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgdHlwZSB7IENoYXJ0LCBFdmVudCwgVHlwZXMgfSBmcm9tICdAYW50di9nMic7XG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICdkYXRlLWZucyc7XG5cbmltcG9ydCB7IEcyQmFzZUNvbXBvbmVudCwgRzJUaW1lIH0gZnJvbSAnQGRlbG9uL2NoYXJ0L2NvcmUnO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSAnQGRlbG9uL3V0aWwvZGF0ZS10aW1lJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciwgTnVtYmVySW5wdXQgfSBmcm9tICdAZGVsb24vdXRpbC9kZWNvcmF0b3InO1xuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEcyVGltZWxpbmVEYXRhIHtcbiAgLyoqXG4gICAqIOaXtumXtOWAvFxuICAgKi9cbiAgdGltZT86IEcyVGltZTtcbiAgLyoqIOaMh+aghzHmlbDmja4gKi9cbiAgeTE6IG51bWJlcjtcbiAgLyoqIOaMh+aghzLmlbDmja4gKi9cbiAgeTI6IG51bWJlcjtcbiAgLyoqIOaMh+aghzPmlbDmja4gKi9cbiAgeTM/OiBudW1iZXI7XG4gIC8qKiDmjIfmoIc05pWw5o2uICovXG4gIHk0PzogbnVtYmVyO1xuICAvKiog5oyH5qCHNeaVsOaNriAqL1xuICB5NT86IG51bWJlcjtcbiAgW2tleTogc3RyaW5nXTogTnpTYWZlQW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEcyVGltZWxpbmVNYXAge1xuICAvKiog5oyH5qCHMSAqL1xuICB5MTogc3RyaW5nO1xuICAvKiog5oyH5qCHICovXG4gIHkyOiBzdHJpbmc7XG4gIC8qKiDmjIfmoIczICovXG4gIHkzPzogc3RyaW5nO1xuICAvKiog5oyH5qCHNCAqL1xuICB5ND86IHN0cmluZztcbiAgLyoqIOaMh+aghzUgKi9cbiAgeTU/OiBzdHJpbmc7XG5cbiAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEcyVGltZWxpbmVDbGlja0l0ZW0ge1xuICBpdGVtOiBHMlRpbWVsaW5lRGF0YTtcbiAgZXY6IEV2ZW50O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnMi10aW1lbGluZScsXG4gIGV4cG9ydEFzOiAnZzJUaW1lbGluZScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cInRpdGxlXCI+XG4gICAgICA8aDQ+e3sgdGl0bGUgfX08L2g0PlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDxuei1za2VsZXRvbiAqbmdJZj1cIiFsb2FkZWRcIj48L256LXNrZWxldG9uPlxuICAgIDxkaXYgI2NvbnRhaW5lcj48L2Rpdj5cbiAgYCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEcyVGltZWxpbmVDb21wb25lbnQgZXh0ZW5kcyBHMkJhc2VDb21wb25lbnQge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfaGVpZ2h0OiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX21heEF4aXM6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfYm9yZGVyV2lkdGg6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc2xpZGVyOiBCb29sZWFuSW5wdXQ7XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBASW5wdXQoKSB0aXRsZT86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbDtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgbWF4QXhpcyA9IDI7XG4gIEBJbnB1dCgpIGRhdGE6IEcyVGltZWxpbmVEYXRhW10gPSBbXTtcbiAgQElucHV0KCkgdGl0bGVNYXA/OiBHMlRpbWVsaW5lTWFwIHwgbnVsbDtcbiAgQElucHV0KCkgY29sb3JNYXA6IEcyVGltZWxpbmVNYXAgPSB7IHkxOiAnIzVCOEZGOScsIHkyOiAnIzVBRDhBNicsIHkzOiAnIzVENzA5MicsIHk0OiAnI0Y2QkQxNicsIHk1OiAnI0U4NjQ1MicgfTtcbiAgQElucHV0KCkgbWFzazogc3RyaW5nID0gJ0hIOm1tJztcbiAgQElucHV0KCkgbWFza1NsaWRlcjogc3RyaW5nID0gJ0hIOm1tJztcbiAgQElucHV0KCkgcG9zaXRpb246ICd0b3AnIHwgJ3JpZ2h0JyB8ICdib3R0b20nIHwgJ2xlZnQnID0gJ3RvcCc7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGhlaWdodCA9IDQ1MDtcbiAgQElucHV0KCkgcGFkZGluZzogbnVtYmVyW10gPSBbNDAsIDgsIDY0LCA0MF07XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGJvcmRlcldpZHRoID0gMjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNsaWRlciA9IHRydWU7XG4gIEBPdXRwdXQoKSByZWFkb25seSBjbGlja0l0ZW0gPSBuZXcgRXZlbnRFbWl0dGVyPEcyVGltZWxpbmVDbGlja0l0ZW0+KCk7XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIG9ubHlDaGFuZ2VEYXRhID0gKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiBib29sZWFuID0+IHtcbiAgICBjb25zdCB0bSA9IGNoYW5nZXMudGl0bGVNYXA7XG4gICAgcmV0dXJuICEodG0gJiYgIXRtLmZpcnN0Q2hhbmdlICYmIHRtLmN1cnJlbnRWYWx1ZSAhPT0gdG0ucHJldmlvdXNWYWx1ZSk7XG4gIH07XG5cbiAgaW5zdGFsbCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IG5vZGUsIGhlaWdodCwgcGFkZGluZywgc2xpZGVyLCBtYXhBeGlzLCB0aGVtZSwgbWFza1NsaWRlciB9ID0gdGhpcztcbiAgICBjb25zdCBjaGFydDogQ2hhcnQgPSAodGhpcy5fY2hhcnQgPSBuZXcgdGhpcy53aW5HMi5DaGFydCh7XG4gICAgICBjb250YWluZXI6IG5vZGUubmF0aXZlRWxlbWVudCxcbiAgICAgIGF1dG9GaXQ6IHRydWUsXG4gICAgICBoZWlnaHQsXG4gICAgICBwYWRkaW5nLFxuICAgICAgdGhlbWVcbiAgICB9KSk7XG4gICAgY2hhcnQuYXhpcygndGltZScsIHsgdGl0bGU6IG51bGwgfSk7XG4gICAgY2hhcnQuYXhpcygneTEnLCB7IHRpdGxlOiBudWxsIH0pO1xuICAgIGZvciAobGV0IGkgPSAyOyBpIDw9IG1heEF4aXM7IGkrKykge1xuICAgICAgY2hhcnQuYXhpcyhgeSR7aX1gLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgY2hhcnQubGluZSgpLnBvc2l0aW9uKCd0aW1lKnkxJyk7XG4gICAgZm9yIChsZXQgaSA9IDI7IGkgPD0gbWF4QXhpczsgaSsrKSB7XG4gICAgICBjaGFydC5saW5lKCkucG9zaXRpb24oYHRpbWUqeSR7aX1gKTtcbiAgICB9XG5cbiAgICBjaGFydC50b29sdGlwKHtcbiAgICAgIHNob3dDcm9zc2hhaXJzOiB0cnVlLFxuICAgICAgc2hhcmVkOiB0cnVlXG4gICAgfSk7XG5cbiAgICBjb25zdCBzbGlkZXJQYWRkaW5nID0geyAuLi5bXSwgLi4ucGFkZGluZyB9O1xuICAgIHNsaWRlclBhZGRpbmdbMF0gPSAwO1xuICAgIGlmIChzbGlkZXIpIHtcbiAgICAgIGNoYXJ0Lm9wdGlvbignc2xpZGVyJywge1xuICAgICAgICBoZWlnaHQ6IDI2LFxuICAgICAgICBzdGFydDogMCxcbiAgICAgICAgZW5kOiAxLFxuICAgICAgICB0cmVuZENmZzoge1xuICAgICAgICAgIGlzQXJlYTogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgbWluTGltaXQ6IDIsXG4gICAgICAgIGZvcm1hdHRlcjogKHZhbDogRGF0ZSkgPT4gZm9ybWF0KHZhbCwgbWFza1NsaWRlcilcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNoYXJ0Lm9uKGBwbG90OmNsaWNrYCwgKGV2OiBFdmVudCkgPT4ge1xuICAgICAgY29uc3QgcmVjb3JkcyA9IHRoaXMuX2NoYXJ0LmdldFNuYXBSZWNvcmRzKHsgeDogZXYueCwgeTogZXYueSB9KTtcbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB0aGlzLmNsaWNrSXRlbS5lbWl0KHsgaXRlbTogcmVjb3Jkc1swXS5fb3JpZ2luLCBldiB9KSk7XG4gICAgfSk7XG5cbiAgICBjaGFydC5vbihgbGVnZW5kLWl0ZW06Y2xpY2tgLCAoZXY6IEV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBpdGVtID0gZXY/LnRhcmdldD8uZ2V0KCdkZWxlZ2F0ZU9iamVjdCcpLml0ZW07XG4gICAgICBjb25zdCBpZCA9IGl0ZW0/LmlkO1xuICAgICAgY29uc3QgbGluZSA9IGNoYXJ0Lmdlb21ldHJpZXMuZmluZCh3ID0+IHcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLmdldEZpZWxkcygpWzFdID09PSBpZCk7XG4gICAgICBpZiAobGluZSkge1xuICAgICAgICBsaW5lLmNoYW5nZVZpc2libGUoIWl0ZW0udW5jaGVja2VkKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMucmVhZHkubmV4dChjaGFydCk7XG5cbiAgICB0aGlzLmNoYW5nZURhdGEoKTtcblxuICAgIGNoYXJ0LnJlbmRlcigpO1xuICB9XG5cbiAgY2hhbmdlRGF0YSgpOiB2b2lkIHtcbiAgICBjb25zdCB7IF9jaGFydCwgaGVpZ2h0LCBwYWRkaW5nLCBtYXNrLCB0aXRsZU1hcCwgcG9zaXRpb24sIGNvbG9yTWFwLCBib3JkZXJXaWR0aCwgbWF4QXhpcyB9ID0gdGhpcztcbiAgICBsZXQgZGF0YSA9IFsuLi50aGlzLmRhdGFdO1xuICAgIGlmICghX2NoYXJ0IHx8IGRhdGEubGVuZ3RoIDw9IDApIHJldHVybjtcblxuICAgIGNvbnN0IGFyckF4aXMgPSBbLi4uQXJyYXkobWF4QXhpcyldLm1hcCgoXywgaW5kZXgpID0+IGluZGV4ICsgMSk7XG5cbiAgICBfY2hhcnQubGVnZW5kKHtcbiAgICAgIHBvc2l0aW9uLFxuICAgICAgY3VzdG9tOiB0cnVlLFxuICAgICAgaXRlbXM6IGFyckF4aXMubWFwKGlkID0+IHtcbiAgICAgICAgY29uc3Qga2V5ID0gYHkke2lkfWA7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaWQ6IGtleSxcbiAgICAgICAgICBuYW1lOiB0aXRsZU1hcCFba2V5XSxcbiAgICAgICAgICB2YWx1ZToga2V5LFxuICAgICAgICAgIG1hcmtlcjogeyBzdHlsZTogeyBmaWxsOiBjb2xvck1hcFtrZXldIH0gfVxuICAgICAgICB9IGFzIFR5cGVzLkxlZ2VuZEl0ZW07XG4gICAgICB9KVxuICAgIH0pO1xuXG4gICAgLy8gYm9yZGVyXG4gICAgX2NoYXJ0Lmdlb21ldHJpZXMuZm9yRWFjaCgodiwgaWR4OiBudW1iZXIpID0+IHtcbiAgICAgIHYuY29sb3IoKGNvbG9yTWFwIGFzIE56U2FmZUFueSlbYHkke2lkeCArIDF9YF0pLnNpemUoYm9yZGVyV2lkdGgpO1xuICAgIH0pO1xuICAgIF9jaGFydC5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgX2NoYXJ0LnBhZGRpbmcgPSBwYWRkaW5nO1xuXG4gICAgLy8g6L2s5o2i5oiQ5pel5pyf57G75Z6LXG4gICAgZGF0YSA9IGRhdGFcbiAgICAgIC5tYXAoaXRlbSA9PiB7XG4gICAgICAgIGl0ZW0udGltZSA9IHRvRGF0ZShpdGVtLnRpbWUhKTtcbiAgICAgICAgaXRlbS5fdGltZSA9ICtpdGVtLnRpbWU7XG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgfSlcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBhLl90aW1lIC0gYi5fdGltZSk7XG5cbiAgICBjb25zdCBtYXggPSBNYXRoLm1heCguLi5hcnJBeGlzLm1hcChpZCA9PiBbLi4uZGF0YV0uc29ydCgoYSwgYikgPT4gYltgeSR7aWR9YF0gLSBhW2B5JHtpZH1gXSlbMF1bYHkke2lkfWBdKSk7XG4gICAgY29uc3Qgc2NhbGVPcHRpb25zOiBSZWNvcmQ8c3RyaW5nLCBUeXBlcy5TY2FsZU9wdGlvbj4gPSB7fTtcbiAgICBhcnJBeGlzLmZvckVhY2goaWQgPT4ge1xuICAgICAgY29uc3Qga2V5ID0gYHkke2lkfWA7XG4gICAgICBzY2FsZU9wdGlvbnNba2V5XSA9IHtcbiAgICAgICAgYWxpYXM6IHRpdGxlTWFwIVtrZXldLFxuICAgICAgICBtYXgsXG4gICAgICAgIG1pbjogMFxuICAgICAgfTtcbiAgICB9KTtcbiAgICBfY2hhcnQuc2NhbGUoe1xuICAgICAgdGltZToge1xuICAgICAgICB0eXBlOiAndGltZScsXG4gICAgICAgIG1hc2ssXG4gICAgICAgIHJhbmdlOiBbMCwgMV1cbiAgICAgIH0sXG4gICAgICAuLi5zY2FsZU9wdGlvbnNcbiAgICB9KTtcblxuICAgIGNvbnN0IGluaXRpYWxSYW5nZSA9IHtcbiAgICAgIHN0YXJ0OiBkYXRhWzBdLl90aW1lLFxuICAgICAgZW5kOiBkYXRhW2RhdGEubGVuZ3RoIC0gMV0uX3RpbWVcbiAgICB9O1xuICAgIGNvbnN0IGZpbHRlckRhdGEgPSBkYXRhLmZpbHRlcih2YWwgPT4gdmFsLl90aW1lID49IGluaXRpYWxSYW5nZS5zdGFydCAmJiB2YWwuX3RpbWUgPD0gaW5pdGlhbFJhbmdlLmVuZCk7XG4gICAgX2NoYXJ0LmNoYW5nZURhdGEoZmlsdGVyRGF0YSk7XG4gIH1cbn1cbiJdfQ==