import { Component, Input, ViewChild, NgZone, TemplateRef, ChangeDetectionStrategy, ChangeDetectorRef, NgModule } from '@angular/core';
import { toNumber, DelonUtilModule } from '@delon/util';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class G2TimelineComponent {
    /**
     * @param {?} cd
     * @param {?} zone
     */
    constructor(cd, zone) {
        this.cd = cd;
        this.zone = zone;
        // #region fields
        this._title = '';
        this.colorMap = { y1: '#1890FF', y2: '#2FC25B' };
        this.mask = 'HH:mm';
        this.position = 'top';
        this._height = 400;
        this.padding = [60, 20, 40, 40];
        this._borderWidth = 2;
        this.initFlag = false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set title(value) {
        if (value instanceof TemplateRef) {
            this._title = null;
            this._titleTpl = value;
        }
        else {
            this._title = value;
        }
        this.cd.detectChanges();
    }
    /**
     * @return {?}
     */
    get height() {
        return this._height;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set height(value) {
        this._height = toNumber(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set borderWidth(value) {
        this._borderWidth = toNumber(value);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.initFlag = true;
        this.runInstall();
    }
    /**
     * @return {?}
     */
    runInstall() {
        this.zone.runOutsideAngular(() => setTimeout(() => this.install()));
    }
    /**
     * @return {?}
     */
    install() {
        if (!this.data || (this.data && this.data.length < 1))
            return;
        // clean
        this.uninstall();
        this.sliderNode.nativeElement.innerHTML = '';
        this.node.nativeElement.innerHTML = '';
        /** @type {?} */
        const MAX = 8;
        /** @type {?} */
        const begin = this.data.length > MAX ? (this.data.length - MAX) / 2 : 0;
        /** @type {?} */
        const ds = new DataSet({
            state: {
                start: this.data[begin - 1].x,
                end: this.data[begin - 1 + MAX].x,
            },
        });
        /** @type {?} */
        const dv = ds.createView().source(this.data);
        dv.source(this.data).transform({
            type: 'filter',
            /**
             * @param {?} obj
             * @return {?}
             */
            callback(obj) {
                /** @type {?} */
                const time = new Date(obj.x).getTime();
                return time >= ds.state.start && time <= ds.state.end;
            },
        });
        /** @type {?} */
        const chart = new G2.Chart({
            container: this.node.nativeElement,
            forceFit: true,
            height: +this.height,
            padding: this.padding,
        });
        chart.axis('x', { title: false });
        chart.axis('y1', {
            title: false,
        });
        chart.axis('y2', false);
        /** @type {?} */
        let max;
        if (this.data[0] && this.data[0].y1 && this.data[0].y2) {
            max = Math.max(this.data.sort((a, b) => b.y1 - a.y1)[0].y1, this.data.sort((a, b) => b.y2 - a.y2)[0].y2);
        }
        chart.source(dv, {
            x: {
                type: 'timeCat',
                tickCount: MAX,
                mask: this.mask,
                range: [0, 1],
            },
            y1: {
                alias: this.titleMap.y1,
                max,
                min: 0,
            },
            y2: {
                alias: this.titleMap.y2,
                max,
                min: 0,
            },
        });
        chart.legend({
            position: this.position,
            custom: true,
            clickable: false,
            items: [
                { value: this.titleMap.y1, fill: this.colorMap.y1 },
                { value: this.titleMap.y2, fill: this.colorMap.y2 },
            ],
        });
        chart
            .line()
            .position('x*y1')
            .color(this.colorMap.y1)
            .size(this._borderWidth);
        chart
            .line()
            .position('x*y2')
            .color(this.colorMap.y2)
            .size(this._borderWidth);
        chart.render();
        /** @type {?} */
        const sliderPadding = Object.assign([], this.padding);
        sliderPadding[0] = 0;
        /** @type {?} */
        const slider = new Slider({
            container: this.sliderNode.nativeElement,
            height: 26,
            padding: sliderPadding,
            scales: {
                x: {
                    type: 'time',
                    tickCount: 16,
                    mask: this.mask,
                },
            },
            backgroundChart: {
                type: 'line',
            },
            start: ds.state.start,
            end: ds.state.end,
            xAxis: 'x',
            yAxis: 'y1',
            data: this.data,
            /**
             * @param {?} __0
             * @return {?}
             */
            onChange({ startValue, endValue }) {
                ds.setState('start', startValue);
                ds.setState('end', endValue);
            },
        });
        slider.render();
        this.chart = chart;
        this.slider = slider;
    }
    /**
     * @return {?}
     */
    uninstall() {
        if (this.chart)
            this.chart.destroy();
        if (this.slider)
            this.slider.destroy();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this.initFlag)
            this.runInstall();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.uninstall();
    }
}
G2TimelineComponent.decorators = [
    { type: Component, args: [{
                selector: 'g2-timeline',
                template: "<ng-container *ngIf=\"_title; else _titleTpl\">\n  <h4>{{_title}}</h4>\n</ng-container>\n<div #container></div>\n<div #slider></div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false
            }] }
];
/** @nocollapse */
G2TimelineComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NgZone }
];
G2TimelineComponent.propDecorators = {
    title: [{ type: Input }],
    data: [{ type: Input }],
    titleMap: [{ type: Input }],
    colorMap: [{ type: Input }],
    mask: [{ type: Input }],
    position: [{ type: Input }],
    height: [{ type: Input }],
    padding: [{ type: Input }],
    borderWidth: [{ type: Input }],
    node: [{ type: ViewChild, args: ['container',] }],
    sliderNode: [{ type: ViewChild, args: ['slider',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [G2TimelineComponent];
class G2TimelineModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: G2TimelineModule, providers: [] };
    }
}
G2TimelineModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, DelonUtilModule],
                declarations: [...COMPONENTS],
                exports: [...COMPONENTS],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { G2TimelineComponent, G2TimelineModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BkZWxvbi9jaGFydC90aW1lbGluZS90aW1lbGluZS5jb21wb25lbnQudHMiLCJuZzovL0BkZWxvbi9jaGFydC90aW1lbGluZS90aW1lbGluZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgVmlld0NoaWxkLFxuICBFbGVtZW50UmVmLFxuICBPbkRlc3Ryb3ksXG4gIE9uQ2hhbmdlcyxcbiAgTmdab25lLFxuICBUZW1wbGF0ZVJlZixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBBZnRlclZpZXdJbml0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRvTnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5kZWNsYXJlIHZhciBHMjogYW55O1xuZGVjbGFyZSB2YXIgRGF0YVNldDogYW55O1xuZGVjbGFyZSB2YXIgU2xpZGVyOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2cyLXRpbWVsaW5lJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RpbWVsaW5lLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBHMlRpbWVsaW5lQ29tcG9uZW50XG4gIGltcGxlbWVudHMgT25EZXN0cm95LCBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQge1xuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIF90aXRsZSA9ICcnO1xuICBfdGl0bGVUcGw6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBJbnB1dCgpXG4gIHNldCB0aXRsZSh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICB0aGlzLl90aXRsZSA9IG51bGw7XG4gICAgICB0aGlzLl90aXRsZVRwbCA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl90aXRsZSA9IHZhbHVlO1xuICAgIH1cbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGRhdGE6IEFycmF5PHsgeDogRGF0ZTsgeTE6IG51bWJlcjsgeTI6IG51bWJlcjsgW2tleTogc3RyaW5nXTogYW55IH0+O1xuICBASW5wdXQoKVxuICB0aXRsZU1hcDogeyB5MTogc3RyaW5nOyB5Mjogc3RyaW5nIH07XG4gIEBJbnB1dCgpXG4gIGNvbG9yTWFwOiB7IHkxOiBzdHJpbmc7IHkyOiBzdHJpbmcgfSA9IHsgeTE6ICcjMTg5MEZGJywgeTI6ICcjMkZDMjVCJyB9O1xuXG4gIEBJbnB1dCgpXG4gIG1hc2s6IHN0cmluZyA9ICdISDptbSc7XG4gIEBJbnB1dCgpXG4gIHBvc2l0aW9uOiAndG9wJyB8ICdyaWdodCcgfCAnYm90dG9tJyB8ICdsZWZ0JyA9ICd0b3AnO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBoZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hlaWdodDtcbiAgfVxuICBzZXQgaGVpZ2h0KHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl9oZWlnaHQgPSB0b051bWJlcih2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfaGVpZ2h0ID0gNDAwO1xuXG4gIEBJbnB1dCgpXG4gIHBhZGRpbmc6IG51bWJlcltdID0gWzYwLCAyMCwgNDAsIDQwXTtcblxuICBASW5wdXQoKVxuICBzZXQgYm9yZGVyV2lkdGgodmFsdWU6IGFueSkge1xuICAgIHRoaXMuX2JvcmRlcldpZHRoID0gdG9OdW1iZXIodmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX2JvcmRlcldpZHRoID0gMjtcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJylcbiAgcHJpdmF0ZSBub2RlOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdzbGlkZXInKVxuICBwcml2YXRlIHNsaWRlck5vZGU6IEVsZW1lbnRSZWY7XG5cbiAgcHJpdmF0ZSBjaGFydDogYW55O1xuICBwcml2YXRlIGluaXRGbGFnID0gZmFsc2U7XG4gIHByaXZhdGUgc2xpZGVyOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgem9uZTogTmdab25lKSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmluaXRGbGFnID0gdHJ1ZTtcbiAgICB0aGlzLnJ1bkluc3RhbGwoKTtcbiAgfVxuXG4gIHByaXZhdGUgcnVuSW5zdGFsbCgpIHtcbiAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmluc3RhbGwoKSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbnN0YWxsKCkge1xuICAgIGlmICghdGhpcy5kYXRhIHx8ICh0aGlzLmRhdGEgJiYgdGhpcy5kYXRhLmxlbmd0aCA8IDEpKSByZXR1cm47XG5cbiAgICAvLyBjbGVhblxuICAgIHRoaXMudW5pbnN0YWxsKCk7XG4gICAgdGhpcy5zbGlkZXJOb2RlLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgdGhpcy5ub2RlLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBjb25zdCBNQVggPSA4O1xuICAgIGNvbnN0IGJlZ2luID0gdGhpcy5kYXRhLmxlbmd0aCA+IE1BWCA/ICh0aGlzLmRhdGEubGVuZ3RoIC0gTUFYKSAvIDIgOiAwO1xuXG4gICAgY29uc3QgZHMgPSBuZXcgRGF0YVNldCh7XG4gICAgICBzdGF0ZToge1xuICAgICAgICBzdGFydDogdGhpcy5kYXRhW2JlZ2luIC0gMV0ueCxcbiAgICAgICAgZW5kOiB0aGlzLmRhdGFbYmVnaW4gLSAxICsgTUFYXS54LFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBjb25zdCBkdiA9IGRzLmNyZWF0ZVZpZXcoKS5zb3VyY2UodGhpcy5kYXRhKTtcbiAgICBkdi5zb3VyY2UodGhpcy5kYXRhKS50cmFuc2Zvcm0oe1xuICAgICAgdHlwZTogJ2ZpbHRlcicsXG4gICAgICBjYWxsYmFjayhvYmopIHtcbiAgICAgICAgY29uc3QgdGltZSA9IG5ldyBEYXRlKG9iai54KS5nZXRUaW1lKCk7IC8vICHDpsKzwqjDpsKEwo/Dr8K8wprDpsKXwrbDqcKXwrTDpsKgwrzDpcK8wo/Dr8K8wozDpcK7wrrDqMKuwq7DqMK9wqzDpsKNwqLDpMK4wrrDpsKXwrbDqcKXwrTDpsKIwrPDqMK/wpvDqMKhwozDpsKvwpTDqMK+woNcbiAgICAgICAgcmV0dXJuIHRpbWUgPj0gZHMuc3RhdGUuc3RhcnQgJiYgdGltZSA8PSBkcy5zdGF0ZS5lbmQ7XG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgY29uc3QgY2hhcnQgPSBuZXcgRzIuQ2hhcnQoe1xuICAgICAgY29udGFpbmVyOiB0aGlzLm5vZGUubmF0aXZlRWxlbWVudCxcbiAgICAgIGZvcmNlRml0OiB0cnVlLFxuICAgICAgaGVpZ2h0OiArdGhpcy5oZWlnaHQsXG4gICAgICBwYWRkaW5nOiB0aGlzLnBhZGRpbmcsXG4gICAgfSk7XG4gICAgY2hhcnQuYXhpcygneCcsIHsgdGl0bGU6IGZhbHNlIH0pO1xuICAgIGNoYXJ0LmF4aXMoJ3kxJywge1xuICAgICAgdGl0bGU6IGZhbHNlLFxuICAgIH0pO1xuICAgIGNoYXJ0LmF4aXMoJ3kyJywgZmFsc2UpO1xuXG4gICAgbGV0IG1heDtcbiAgICBpZiAodGhpcy5kYXRhWzBdICYmIHRoaXMuZGF0YVswXS55MSAmJiB0aGlzLmRhdGFbMF0ueTIpIHtcbiAgICAgIG1heCA9IE1hdGgubWF4KFxuICAgICAgICB0aGlzLmRhdGEuc29ydCgoYSwgYikgPT4gYi55MSAtIGEueTEpWzBdLnkxLFxuICAgICAgICB0aGlzLmRhdGEuc29ydCgoYSwgYikgPT4gYi55MiAtIGEueTIpWzBdLnkyLFxuICAgICAgKTtcbiAgICB9XG4gICAgY2hhcnQuc291cmNlKGR2LCB7XG4gICAgICB4OiB7XG4gICAgICAgIHR5cGU6ICd0aW1lQ2F0JyxcbiAgICAgICAgdGlja0NvdW50OiBNQVgsXG4gICAgICAgIG1hc2s6IHRoaXMubWFzayxcbiAgICAgICAgcmFuZ2U6IFswLCAxXSxcbiAgICAgIH0sXG4gICAgICB5MToge1xuICAgICAgICBhbGlhczogdGhpcy50aXRsZU1hcC55MSxcbiAgICAgICAgbWF4LFxuICAgICAgICBtaW46IDAsXG4gICAgICB9LFxuICAgICAgeTI6IHtcbiAgICAgICAgYWxpYXM6IHRoaXMudGl0bGVNYXAueTIsXG4gICAgICAgIG1heCxcbiAgICAgICAgbWluOiAwLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGNoYXJ0LmxlZ2VuZCh7XG4gICAgICBwb3NpdGlvbjogdGhpcy5wb3NpdGlvbixcbiAgICAgIGN1c3RvbTogdHJ1ZSxcbiAgICAgIGNsaWNrYWJsZTogZmFsc2UsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHZhbHVlOiB0aGlzLnRpdGxlTWFwLnkxLCBmaWxsOiB0aGlzLmNvbG9yTWFwLnkxIH0sXG4gICAgICAgIHsgdmFsdWU6IHRoaXMudGl0bGVNYXAueTIsIGZpbGw6IHRoaXMuY29sb3JNYXAueTIgfSxcbiAgICAgIF0sXG4gICAgfSk7XG5cbiAgICBjaGFydFxuICAgICAgLmxpbmUoKVxuICAgICAgLnBvc2l0aW9uKCd4KnkxJylcbiAgICAgIC5jb2xvcih0aGlzLmNvbG9yTWFwLnkxKVxuICAgICAgLnNpemUodGhpcy5fYm9yZGVyV2lkdGgpO1xuICAgIGNoYXJ0XG4gICAgICAubGluZSgpXG4gICAgICAucG9zaXRpb24oJ3gqeTInKVxuICAgICAgLmNvbG9yKHRoaXMuY29sb3JNYXAueTIpXG4gICAgICAuc2l6ZSh0aGlzLl9ib3JkZXJXaWR0aCk7XG4gICAgY2hhcnQucmVuZGVyKCk7XG5cbiAgICBjb25zdCBzbGlkZXJQYWRkaW5nID0gT2JqZWN0LmFzc2lnbihbXSwgdGhpcy5wYWRkaW5nKTtcbiAgICBzbGlkZXJQYWRkaW5nWzBdID0gMDtcbiAgICBjb25zdCBzbGlkZXIgPSBuZXcgU2xpZGVyKHtcbiAgICAgIGNvbnRhaW5lcjogdGhpcy5zbGlkZXJOb2RlLm5hdGl2ZUVsZW1lbnQsXG4gICAgICBoZWlnaHQ6IDI2LFxuICAgICAgcGFkZGluZzogc2xpZGVyUGFkZGluZyxcbiAgICAgIHNjYWxlczoge1xuICAgICAgICB4OiB7XG4gICAgICAgICAgdHlwZTogJ3RpbWUnLFxuICAgICAgICAgIHRpY2tDb3VudDogMTYsXG4gICAgICAgICAgbWFzazogdGhpcy5tYXNrLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGJhY2tncm91bmRDaGFydDoge1xuICAgICAgICB0eXBlOiAnbGluZScsXG4gICAgICB9LFxuICAgICAgc3RhcnQ6IGRzLnN0YXRlLnN0YXJ0LFxuICAgICAgZW5kOiBkcy5zdGF0ZS5lbmQsXG4gICAgICB4QXhpczogJ3gnLFxuICAgICAgeUF4aXM6ICd5MScsXG4gICAgICBkYXRhOiB0aGlzLmRhdGEsXG4gICAgICBvbkNoYW5nZSh7IHN0YXJ0VmFsdWUsIGVuZFZhbHVlIH0pIHtcbiAgICAgICAgZHMuc2V0U3RhdGUoJ3N0YXJ0Jywgc3RhcnRWYWx1ZSk7XG4gICAgICAgIGRzLnNldFN0YXRlKCdlbmQnLCBlbmRWYWx1ZSk7XG4gICAgICB9LFxuICAgIH0pO1xuICAgIHNsaWRlci5yZW5kZXIoKTtcblxuICAgIHRoaXMuY2hhcnQgPSBjaGFydDtcbiAgICB0aGlzLnNsaWRlciA9IHNsaWRlcjtcbiAgfVxuXG4gIHByaXZhdGUgdW5pbnN0YWxsKCkge1xuICAgIGlmICh0aGlzLmNoYXJ0KSB0aGlzLmNoYXJ0LmRlc3Ryb3koKTtcbiAgICBpZiAodGhpcy5zbGlkZXIpIHRoaXMuc2xpZGVyLmRlc3Ryb3koKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmluaXRGbGFnKSB0aGlzLnJ1bkluc3RhbGwoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMudW5pbnN0YWxsKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRGVsb25VdGlsTW9kdWxlIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5pbXBvcnQgeyBHMlRpbWVsaW5lQ29tcG9uZW50IH0gZnJvbSAnLi90aW1lbGluZS5jb21wb25lbnQnO1xuXG5jb25zdCBDT01QT05FTlRTID0gW0cyVGltZWxpbmVDb21wb25lbnRdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBEZWxvblV0aWxNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5DT01QT05FTlRTXSxcbiAgZXhwb3J0czogWy4uLkNPTVBPTkVOVFNdLFxufSlcbmV4cG9ydCBjbGFzcyBHMlRpbWVsaW5lTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHsgbmdNb2R1bGU6IEcyVGltZWxpbmVNb2R1bGUsIHByb3ZpZGVyczogW10gfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsTUF5QmEsbUJBQW1COzs7OztJQTBEOUIsWUFBb0IsRUFBcUIsRUFBVSxJQUFZO1FBQTNDLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBUTs7UUF0RC9ELFdBQU0sR0FBRyxFQUFFLENBQUM7UUFrQlosYUFBUSxHQUErQixFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDO1FBR3hFLFNBQUksR0FBVyxPQUFPLENBQUM7UUFFdkIsYUFBUSxHQUF3QyxLQUFL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