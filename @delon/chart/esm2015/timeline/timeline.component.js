/**
 * @fileoverview added by tsickle
 * Generated from: timeline.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { G2BaseComponent } from '@delon/chart/core';
import { toDate } from '@delon/util/date-time';
import { InputBoolean, InputNumber } from '@delon/util/decorator';
import format from 'date-fns/format';
/**
 * @record
 */
export function G2TimelineData() { }
if (false) {
    /**
     * 时间值
     * @type {?|undefined}
     */
    G2TimelineData.prototype.time;
    /**
     * 指标1数据
     * @type {?}
     */
    G2TimelineData.prototype.y1;
    /**
     * 指标2数据
     * @type {?}
     */
    G2TimelineData.prototype.y2;
    /**
     * 指标3数据
     * @type {?|undefined}
     */
    G2TimelineData.prototype.y3;
    /**
     * 指标4数据
     * @type {?|undefined}
     */
    G2TimelineData.prototype.y4;
    /**
     * 指标5数据
     * @type {?|undefined}
     */
    G2TimelineData.prototype.y5;
    /* Skipping unhandled member: [key: string]: any;*/
}
/**
 * @record
 */
export function G2TimelineMap() { }
if (false) {
    /**
     * 指标1
     * @type {?}
     */
    G2TimelineMap.prototype.y1;
    /**
     * 指标
     * @type {?}
     */
    G2TimelineMap.prototype.y2;
    /**
     * 指标3
     * @type {?|undefined}
     */
    G2TimelineMap.prototype.y3;
    /**
     * 指标4
     * @type {?|undefined}
     */
    G2TimelineMap.prototype.y4;
    /**
     * 指标5
     * @type {?|undefined}
     */
    G2TimelineMap.prototype.y5;
    /* Skipping unhandled member: [key: string]: string | undefined;*/
}
/**
 * @record
 */
export function G2TimelineClickItem() { }
if (false) {
    /** @type {?} */
    G2TimelineClickItem.prototype.item;
    /** @type {?} */
    G2TimelineClickItem.prototype.ev;
}
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
    /**
     * @return {?}
     */
    install() {
        const { node, height, padding, slider, maxAxis, theme, maskSlider } = this;
        /** @type {?} */
        const chart = (this._chart = new ((/** @type {?} */ (window))).G2.Chart({
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
        /** @type {?} */
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
                formatter: (/**
                 * @param {?} val
                 * @return {?}
                 */
                (val) => format(val, maskSlider)),
            });
        }
        chart.on(`plot:click`, (/**
         * @param {?} ev
         * @return {?}
         */
        (ev) => {
            /** @type {?} */
            const records = this._chart.getSnapRecords({ x: ev.x, y: ev.y });
            this.ngZone.run((/**
             * @return {?}
             */
            () => this.clickItem.emit({ item: records[0]._origin, ev })));
        }));
        chart.on(`legend-item:click`, (/**
         * @param {?} ev
         * @return {?}
         */
        (ev) => {
            var _a;
            /** @type {?} */
            const item = (_a = ev === null || ev === void 0 ? void 0 : ev.target) === null || _a === void 0 ? void 0 : _a.get('delegateObject').item;
            /** @type {?} */
            const id = item === null || item === void 0 ? void 0 : item.id;
            /** @type {?} */
            const line = chart.geometries.find((/**
             * @param {?} w
             * @return {?}
             */
            w => w.getAttribute('position').getFields()[1] === id));
            if (line) {
                line.changeVisible(!item.unchecked);
            }
        }));
        this.attachChart();
    }
    /**
     * @return {?}
     */
    attachChart() {
        const { _chart, height, padding, mask, titleMap, position, colorMap, borderWidth, maxAxis } = this;
        /** @type {?} */
        let data = [...this.data];
        if (!_chart || !data || data.length <= 0)
            return;
        /** @type {?} */
        const arrAxis = [...Array(maxAxis)].map((/**
         * @param {?} _
         * @param {?} index
         * @return {?}
         */
        (_, index) => index + 1));
        _chart.legend({
            position,
            custom: true,
            items: arrAxis.map((/**
             * @param {?} id
             * @return {?}
             */
            id => {
                /** @type {?} */
                const key = `y${id}`;
                return (/** @type {?} */ ({ id: key, name: titleMap[key], value: key, marker: { style: { fill: colorMap[key] } } }));
            })),
        });
        // border
        _chart.geometries.forEach((/**
         * @param {?} v
         * @param {?} idx
         * @return {?}
         */
        (v, idx) => {
            v.color(((/** @type {?} */ (colorMap)))[`y${idx + 1}`]).size(borderWidth);
        }));
        _chart.height = height;
        _chart.padding = padding;
        // 转换成日期类型
        data = data
            .map((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            item.time = toDate((/** @type {?} */ (item.time)));
            item._time = +item.time;
            return item;
        }))
            .sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        (a, b) => a._time - b._time));
        /** @type {?} */
        const max = Math.max(...arrAxis.map((/**
         * @param {?} id
         * @return {?}
         */
        id => [...data].sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        (a, b) => b[`y${id}`] - a[`y${id}`]))[0][`y${id}`])));
        /** @type {?} */
        const scaleOptions = {};
        arrAxis.forEach((/**
         * @param {?} id
         * @return {?}
         */
        id => {
            /** @type {?} */
            const key = `y${id}`;
            scaleOptions[key] = {
                alias: titleMap[key],
                max,
                min: 0,
            };
        }));
        _chart.scale(Object.assign({ time: {
                type: 'time',
                mask,
                range: [0, 1],
            } }, scaleOptions));
        /** @type {?} */
        const initialRange = {
            start: data[0]._time,
            end: data[data.length - 1]._time,
        };
        /** @type {?} */
        const filterData = data.filter((/**
         * @param {?} val
         * @return {?}
         */
        val => val._time >= initialRange.start && val._time <= initialRange.end));
        _chart.changeData(filterData);
        _chart.render();
    }
}
G2TimelineComponent.decorators = [
    { type: Component, args: [{
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
            }] }
];
G2TimelineComponent.propDecorators = {
    title: [{ type: Input }],
    maxAxis: [{ type: Input }],
    data: [{ type: Input }],
    titleMap: [{ type: Input }],
    colorMap: [{ type: Input }],
    mask: [{ type: Input }],
    maskSlider: [{ type: Input }],
    position: [{ type: Input }],
    height: [{ type: Input }],
    padding: [{ type: Input }],
    borderWidth: [{ type: Input }],
    slider: [{ type: Input }],
    clickItem: [{ type: Output }]
};
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
if (false) {
    /** @type {?} */
    G2TimelineComponent.ngAcceptInputType_height;
    /** @type {?} */
    G2TimelineComponent.ngAcceptInputType_maxAxis;
    /** @type {?} */
    G2TimelineComponent.ngAcceptInputType_borderWidth;
    /** @type {?} */
    G2TimelineComponent.ngAcceptInputType_slider;
    /** @type {?} */
    G2TimelineComponent.prototype.title;
    /** @type {?} */
    G2TimelineComponent.prototype.maxAxis;
    /** @type {?} */
    G2TimelineComponent.prototype.data;
    /** @type {?} */
    G2TimelineComponent.prototype.titleMap;
    /** @type {?} */
    G2TimelineComponent.prototype.colorMap;
    /** @type {?} */
    G2TimelineComponent.prototype.mask;
    /** @type {?} */
    G2TimelineComponent.prototype.maskSlider;
    /** @type {?} */
    G2TimelineComponent.prototype.position;
    /** @type {?} */
    G2TimelineComponent.prototype.height;
    /** @type {?} */
    G2TimelineComponent.prototype.padding;
    /** @type {?} */
    G2TimelineComponent.prototype.borderWidth;
    /** @type {?} */
    G2TimelineComponent.prototype.slider;
    /** @type {?} */
    G2TimelineComponent.prototype.clickItem;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY2hhcnQvdGltZWxpbmUvdGltZWxpbmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQWUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFaEksT0FBTyxFQUFFLGVBQWUsRUFBVSxNQUFNLG1CQUFtQixDQUFDO0FBQzVELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMvQyxPQUFPLEVBQWdCLFlBQVksRUFBRSxXQUFXLEVBQWUsTUFBTSx1QkFBdUIsQ0FBQztBQUM3RixPQUFPLE1BQU0sTUFBTSxpQkFBaUIsQ0FBQzs7OztBQUdyQyxvQ0FnQkM7Ozs7OztJQVpDLDhCQUFjOzs7OztJQUVkLDRCQUFXOzs7OztJQUVYLDRCQUFXOzs7OztJQUVYLDRCQUFZOzs7OztJQUVaLDRCQUFZOzs7OztJQUVaLDRCQUFZOzs7Ozs7QUFJZCxtQ0FhQzs7Ozs7O0lBWEMsMkJBQVc7Ozs7O0lBRVgsMkJBQVc7Ozs7O0lBRVgsMkJBQVk7Ozs7O0lBRVosMkJBQVk7Ozs7O0lBRVosMkJBQVk7Ozs7OztBQUtkLHlDQUdDOzs7SUFGQyxtQ0FBcUI7O0lBQ3JCLGlDQUFVOztBQWlCWixNQUFNLE9BQU8sbUJBQW9CLFNBQVEsZUFBZTtJQWR4RDs7UUF1QjBCLFlBQU8sR0FBRyxDQUFDLENBQUM7UUFDM0IsU0FBSSxHQUFxQixFQUFFLENBQUM7UUFFNUIsYUFBUSxHQUFrQixFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDO1FBQ3hH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blN0cmF0ZWd5LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVGVtcGxhdGVSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDaGFydCwgRXZlbnQsIFR5cGVzIH0gZnJvbSAnQGFudHYvZzInO1xuaW1wb3J0IHsgRzJCYXNlQ29tcG9uZW50LCBHMlRpbWUgfSBmcm9tICdAZGVsb24vY2hhcnQvY29yZSc7XG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tICdAZGVsb24vdXRpbC9kYXRlLXRpbWUnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyLCBOdW1iZXJJbnB1dCB9IGZyb20gJ0BkZWxvbi91dGlsL2RlY29yYXRvcic7XG5pbXBvcnQgZm9ybWF0IGZyb20gJ2RhdGUtZm5zL2Zvcm1hdCc7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEcyVGltZWxpbmVEYXRhIHtcbiAgLyoqXG4gICAqIOaXtumXtOWAvFxuICAgKi9cbiAgdGltZT86IEcyVGltZTtcbiAgLyoqIOaMh+aghzHmlbDmja4gKi9cbiAgeTE6IG51bWJlcjtcbiAgLyoqIOaMh+aghzLmlbDmja4gKi9cbiAgeTI6IG51bWJlcjtcbiAgLyoqIOaMh+aghzPmlbDmja4gKi9cbiAgeTM/OiBudW1iZXI7XG4gIC8qKiDmjIfmoIc05pWw5o2uICovXG4gIHk0PzogbnVtYmVyO1xuICAvKiog5oyH5qCHNeaVsOaNriAqL1xuICB5NT86IG51bWJlcjtcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEcyVGltZWxpbmVNYXAge1xuICAvKiog5oyH5qCHMSAqL1xuICB5MTogc3RyaW5nO1xuICAvKiog5oyH5qCHICovXG4gIHkyOiBzdHJpbmc7XG4gIC8qKiDmjIfmoIczICovXG4gIHkzPzogc3RyaW5nO1xuICAvKiog5oyH5qCHNCAqL1xuICB5ND86IHN0cmluZztcbiAgLyoqIOaMh+aghzUgKi9cbiAgeTU/OiBzdHJpbmc7XG5cbiAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEcyVGltZWxpbmVDbGlja0l0ZW0ge1xuICBpdGVtOiBHMlRpbWVsaW5lRGF0YTtcbiAgZXY6IEV2ZW50O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnMi10aW1lbGluZScsXG4gIGV4cG9ydEFzOiAnZzJUaW1lbGluZScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cInRpdGxlXCI+XG4gICAgICA8aDQ+e3sgdGl0bGUgfX08L2g0PlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDxuei1za2VsZXRvbiAqbmdJZj1cIiFsb2FkZWRcIj48L256LXNrZWxldG9uPlxuICAgIDxkaXYgI2NvbnRhaW5lcj48L2Rpdj5cbiAgYCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBHMlRpbWVsaW5lQ29tcG9uZW50IGV4dGVuZHMgRzJCYXNlQ29tcG9uZW50IHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2hlaWdodDogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9tYXhBeGlzOiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2JvcmRlcldpZHRoOiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3NsaWRlcjogQm9vbGVhbklucHV0O1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBtYXhBeGlzID0gMjtcbiAgQElucHV0KCkgZGF0YTogRzJUaW1lbGluZURhdGFbXSA9IFtdO1xuICBASW5wdXQoKSB0aXRsZU1hcDogRzJUaW1lbGluZU1hcDtcbiAgQElucHV0KCkgY29sb3JNYXA6IEcyVGltZWxpbmVNYXAgPSB7IHkxOiAnIzVCOEZGOScsIHkyOiAnIzVBRDhBNicsIHkzOiAnIzVENzA5MicsIHk0OiAnI0Y2QkQxNicsIHk1OiAnI0U4NjQ1MicgfTtcbiAgQElucHV0KCkgbWFzazogc3RyaW5nID0gJ0hIOm1tJztcbiAgQElucHV0KCkgbWFza1NsaWRlcjogc3RyaW5nID0gJ0hIOm1tJztcbiAgQElucHV0KCkgcG9zaXRpb246ICd0b3AnIHwgJ3JpZ2h0JyB8ICdib3R0b20nIHwgJ2xlZnQnID0gJ3RvcCc7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGhlaWdodCA9IDQ1MDtcbiAgQElucHV0KCkgcGFkZGluZzogbnVtYmVyW10gPSBbNDAsIDgsIDY0LCA0MF07XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGJvcmRlcldpZHRoID0gMjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNsaWRlciA9IHRydWU7XG4gIEBPdXRwdXQoKSBjbGlja0l0ZW0gPSBuZXcgRXZlbnRFbWl0dGVyPEcyVGltZWxpbmVDbGlja0l0ZW0+KCk7XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGluc3RhbGwoKTogdm9pZCB7XG4gICAgY29uc3QgeyBub2RlLCBoZWlnaHQsIHBhZGRpbmcsIHNsaWRlciwgbWF4QXhpcywgdGhlbWUsIG1hc2tTbGlkZXIgfSA9IHRoaXM7XG4gICAgY29uc3QgY2hhcnQ6IENoYXJ0ID0gKHRoaXMuX2NoYXJ0ID0gbmV3ICh3aW5kb3cgYXMgYW55KS5HMi5DaGFydCh7XG4gICAgICBjb250YWluZXI6IG5vZGUubmF0aXZlRWxlbWVudCxcbiAgICAgIGF1dG9GaXQ6IHRydWUsXG4gICAgICBoZWlnaHQsXG4gICAgICBwYWRkaW5nLFxuICAgICAgdGhlbWUsXG4gICAgfSkpO1xuICAgIGNoYXJ0LmF4aXMoJ3RpbWUnLCB7IHRpdGxlOiBudWxsIH0pO1xuICAgIGNoYXJ0LmF4aXMoJ3kxJywgeyB0aXRsZTogbnVsbCB9KTtcbiAgICBmb3IgKGxldCBpID0gMjsgaSA8PSBtYXhBeGlzOyBpKyspIHtcbiAgICAgIGNoYXJ0LmF4aXMoYHkke2l9YCwgZmFsc2UpO1xuICAgIH1cblxuICAgIGNoYXJ0LmxpbmUoKS5wb3NpdGlvbigndGltZSp5MScpO1xuICAgIGZvciAobGV0IGkgPSAyOyBpIDw9IG1heEF4aXM7IGkrKykge1xuICAgICAgY2hhcnQubGluZSgpLnBvc2l0aW9uKGB0aW1lKnkke2l9YCk7XG4gICAgfVxuXG4gICAgY2hhcnQudG9vbHRpcCh7XG4gICAgICBzaG93Q3Jvc3NoYWlyczogdHJ1ZSxcbiAgICAgIHNoYXJlZDogdHJ1ZSxcbiAgICB9KTtcblxuICAgIGNvbnN0IHNsaWRlclBhZGRpbmcgPSB7IC4uLltdLCAuLi5wYWRkaW5nIH07XG4gICAgc2xpZGVyUGFkZGluZ1swXSA9IDA7XG4gICAgaWYgKHNsaWRlcikge1xuICAgICAgY2hhcnQub3B0aW9uKCdzbGlkZXInLCB7XG4gICAgICAgIGhlaWdodDogMjYsXG4gICAgICAgIHN0YXJ0OiAwLFxuICAgICAgICBlbmQ6IDEsXG4gICAgICAgIHRyZW5kQ2ZnOiB7XG4gICAgICAgICAgaXNBcmVhOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgbWluTGltaXQ6IDIsXG4gICAgICAgIGZvcm1hdHRlcjogKHZhbDogRGF0ZSkgPT4gZm9ybWF0KHZhbCwgbWFza1NsaWRlciksXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjaGFydC5vbihgcGxvdDpjbGlja2AsIChldjogRXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHJlY29yZHMgPSB0aGlzLl9jaGFydC5nZXRTbmFwUmVjb3Jkcyh7IHg6IGV2LngsIHk6IGV2LnkgfSk7XG4gICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gdGhpcy5jbGlja0l0ZW0uZW1pdCh7IGl0ZW06IHJlY29yZHNbMF0uX29yaWdpbiwgZXYgfSkpO1xuICAgIH0pO1xuXG4gICAgY2hhcnQub24oYGxlZ2VuZC1pdGVtOmNsaWNrYCwgKGV2OiBFdmVudCkgPT4ge1xuICAgICAgY29uc3QgaXRlbSA9IGV2Py50YXJnZXQ/LmdldCgnZGVsZWdhdGVPYmplY3QnKS5pdGVtO1xuICAgICAgY29uc3QgaWQgPSBpdGVtPy5pZDtcbiAgICAgIGNvbnN0IGxpbmUgPSBjaGFydC5nZW9tZXRyaWVzLmZpbmQodyA9PiB3LmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5nZXRGaWVsZHMoKVsxXSA9PT0gaWQpO1xuICAgICAgaWYgKGxpbmUpIHtcbiAgICAgICAgbGluZS5jaGFuZ2VWaXNpYmxlKCFpdGVtLnVuY2hlY2tlZCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmF0dGFjaENoYXJ0KCk7XG4gIH1cblxuICBhdHRhY2hDaGFydCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IF9jaGFydCwgaGVpZ2h0LCBwYWRkaW5nLCBtYXNrLCB0aXRsZU1hcCwgcG9zaXRpb24sIGNvbG9yTWFwLCBib3JkZXJXaWR0aCwgbWF4QXhpcyB9ID0gdGhpcztcbiAgICBsZXQgZGF0YSA9IFsuLi50aGlzLmRhdGFdO1xuICAgIGlmICghX2NoYXJ0IHx8ICFkYXRhIHx8IGRhdGEubGVuZ3RoIDw9IDApIHJldHVybjtcblxuICAgIGNvbnN0IGFyckF4aXMgPSBbLi4uQXJyYXkobWF4QXhpcyldLm1hcCgoXywgaW5kZXgpID0+IGluZGV4ICsgMSk7XG5cbiAgICBfY2hhcnQubGVnZW5kKHtcbiAgICAgIHBvc2l0aW9uLFxuICAgICAgY3VzdG9tOiB0cnVlLFxuICAgICAgaXRlbXM6IGFyckF4aXMubWFwKGlkID0+IHtcbiAgICAgICAgY29uc3Qga2V5ID0gYHkke2lkfWA7XG4gICAgICAgIHJldHVybiB7IGlkOiBrZXksIG5hbWU6IHRpdGxlTWFwW2tleV0sIHZhbHVlOiBrZXksIG1hcmtlcjogeyBzdHlsZTogeyBmaWxsOiBjb2xvck1hcFtrZXldIH0gfSB9IGFzIFR5cGVzLkxlZ2VuZEl0ZW07XG4gICAgICB9KSxcbiAgICB9KTtcblxuICAgIC8vIGJvcmRlclxuICAgIF9jaGFydC5nZW9tZXRyaWVzLmZvckVhY2goKHYsIGlkeDogbnVtYmVyKSA9PiB7XG4gICAgICB2LmNvbG9yKChjb2xvck1hcCBhcyBOelNhZmVBbnkpW2B5JHtpZHggKyAxfWBdKS5zaXplKGJvcmRlcldpZHRoKTtcbiAgICB9KTtcbiAgICBfY2hhcnQuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIF9jaGFydC5wYWRkaW5nID0gcGFkZGluZztcblxuICAgIC8vIOi9rOaNouaIkOaXpeacn+exu+Wei1xuICAgIGRhdGEgPSBkYXRhXG4gICAgICAubWFwKGl0ZW0gPT4ge1xuICAgICAgICBpdGVtLnRpbWUgPSB0b0RhdGUoaXRlbS50aW1lISk7XG4gICAgICAgIGl0ZW0uX3RpbWUgPSAraXRlbS50aW1lO1xuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgIH0pXG4gICAgICAuc29ydCgoYSwgYikgPT4gYS5fdGltZSAtIGIuX3RpbWUpO1xuXG4gICAgY29uc3QgbWF4ID0gTWF0aC5tYXgoLi4uYXJyQXhpcy5tYXAoaWQgPT4gWy4uLmRhdGFdLnNvcnQoKGEsIGIpID0+IGJbYHkke2lkfWBdIC0gYVtgeSR7aWR9YF0pWzBdW2B5JHtpZH1gXSkpO1xuICAgIGNvbnN0IHNjYWxlT3B0aW9uczogUmVjb3JkPHN0cmluZywgVHlwZXMuU2NhbGVPcHRpb24+ID0ge307XG4gICAgYXJyQXhpcy5mb3JFYWNoKGlkID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IGB5JHtpZH1gO1xuICAgICAgc2NhbGVPcHRpb25zW2tleV0gPSB7XG4gICAgICAgIGFsaWFzOiB0aXRsZU1hcFtrZXldLFxuICAgICAgICBtYXgsXG4gICAgICAgIG1pbjogMCxcbiAgICAgIH07XG4gICAgfSk7XG4gICAgX2NoYXJ0LnNjYWxlKHtcbiAgICAgIHRpbWU6IHtcbiAgICAgICAgdHlwZTogJ3RpbWUnLFxuICAgICAgICBtYXNrLFxuICAgICAgICByYW5nZTogWzAsIDFdLFxuICAgICAgfSxcbiAgICAgIC4uLnNjYWxlT3B0aW9ucyxcbiAgICB9KTtcblxuICAgIGNvbnN0IGluaXRpYWxSYW5nZSA9IHtcbiAgICAgIHN0YXJ0OiBkYXRhWzBdLl90aW1lLFxuICAgICAgZW5kOiBkYXRhW2RhdGEubGVuZ3RoIC0gMV0uX3RpbWUsXG4gICAgfTtcbiAgICBjb25zdCBmaWx0ZXJEYXRhID0gZGF0YS5maWx0ZXIodmFsID0+IHZhbC5fdGltZSA+PSBpbml0aWFsUmFuZ2Uuc3RhcnQgJiYgdmFsLl90aW1lIDw9IGluaXRpYWxSYW5nZS5lbmQpO1xuICAgIF9jaGFydC5jaGFuZ2VEYXRhKGZpbHRlckRhdGEpO1xuICAgIF9jaGFydC5yZW5kZXIoKTtcbiAgfVxufVxuIl19