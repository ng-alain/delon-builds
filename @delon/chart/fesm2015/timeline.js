import { Component, Input, ViewChild, NgZone, TemplateRef, ChangeDetectionStrategy, ChangeDetectorRef, NgModule } from '@angular/core';
import { toNumber, DelonUtilModule } from '@delon/util';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
                const time = new Date(obj.x).getTime(); // !注意：时间格式，建议转换为时间戳进行比较
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
                template: `
  <ng-container *ngIf="_title; else _titleTpl"><h4>{{_title}}</h4></ng-container>
  <div #container></div>
  <div #slider></div>`,
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { G2TimelineComponent, G2TimelineModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BkZWxvbi9jaGFydC90aW1lbGluZS90aW1lbGluZS5jb21wb25lbnQudHMiLCJuZzovL0BkZWxvbi9jaGFydC90aW1lbGluZS90aW1lbGluZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgSW5wdXQsXHJcbiAgVmlld0NoaWxkLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBOZ1pvbmUsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgdG9OdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XHJcblxyXG5kZWNsYXJlIHZhciBHMjogYW55O1xyXG5kZWNsYXJlIHZhciBEYXRhU2V0OiBhbnk7XHJcbmRlY2xhcmUgdmFyIFNsaWRlcjogYW55O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnMi10aW1lbGluZScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiX3RpdGxlOyBlbHNlIF90aXRsZVRwbFwiPjxoND57e190aXRsZX19PC9oND48L25nLWNvbnRhaW5lcj5cclxuICA8ZGl2ICNjb250YWluZXI+PC9kaXY+XHJcbiAgPGRpdiAjc2xpZGVyPjwvZGl2PmAsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHMlRpbWVsaW5lQ29tcG9uZW50XHJcbiAgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgLy8gI3JlZ2lvbiBmaWVsZHNcclxuXHJcbiAgX3RpdGxlID0gJyc7XHJcbiAgX3RpdGxlVHBsOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHRpdGxlKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KSB7XHJcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xyXG4gICAgICB0aGlzLl90aXRsZSA9IG51bGw7XHJcbiAgICAgIHRoaXMuX3RpdGxlVHBsID0gdmFsdWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl90aXRsZSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIGRhdGE6IEFycmF5PHsgeDogRGF0ZTsgeTE6IG51bWJlcjsgeTI6IG51bWJlcjsgW2tleTogc3RyaW5nXTogYW55IH0+O1xyXG4gIEBJbnB1dCgpXHJcbiAgdGl0bGVNYXA6IHsgeTE6IHN0cmluZzsgeTI6IHN0cmluZyB9O1xyXG4gIEBJbnB1dCgpXHJcbiAgY29sb3JNYXA6IHsgeTE6IHN0cmluZzsgeTI6IHN0cmluZyB9ID0geyB5MTogJyMxODkwRkYnLCB5MjogJyMyRkMyNUInIH07XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgbWFzazogc3RyaW5nID0gJ0hIOm1tJztcclxuICBASW5wdXQoKVxyXG4gIHBvc2l0aW9uOiAndG9wJyB8ICdyaWdodCcgfCAnYm90dG9tJyB8ICdsZWZ0JyA9ICd0b3AnO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGdldCBoZWlnaHQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faGVpZ2h0O1xyXG4gIH1cclxuICBzZXQgaGVpZ2h0KHZhbHVlOiBhbnkpIHtcclxuICAgIHRoaXMuX2hlaWdodCA9IHRvTnVtYmVyKHZhbHVlKTtcclxuICB9XHJcbiAgcHJpdmF0ZSBfaGVpZ2h0ID0gNDAwO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHBhZGRpbmc6IG51bWJlcltdID0gWzYwLCAyMCwgNDAsIDQwXTtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgYm9yZGVyV2lkdGgodmFsdWU6IGFueSkge1xyXG4gICAgdGhpcy5fYm9yZGVyV2lkdGggPSB0b051bWJlcih2YWx1ZSk7XHJcbiAgfVxyXG4gIHByaXZhdGUgX2JvcmRlcldpZHRoID0gMjtcclxuXHJcbiAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICBAVmlld0NoaWxkKCdjb250YWluZXInKVxyXG4gIHByaXZhdGUgbm9kZTogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdzbGlkZXInKVxyXG4gIHByaXZhdGUgc2xpZGVyTm9kZTogRWxlbWVudFJlZjtcclxuXHJcbiAgcHJpdmF0ZSBjaGFydDogYW55O1xyXG4gIHByaXZhdGUgaW5pdEZsYWcgPSBmYWxzZTtcclxuICBwcml2YXRlIHNsaWRlcjogYW55O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSB6b25lOiBOZ1pvbmUpIHt9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaW5pdEZsYWcgPSB0cnVlO1xyXG4gICAgdGhpcy5ydW5JbnN0YWxsKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJ1bkluc3RhbGwoKSB7XHJcbiAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmluc3RhbGwoKSkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbnN0YWxsKCkge1xyXG4gICAgaWYgKCF0aGlzLmRhdGEgfHwgKHRoaXMuZGF0YSAmJiB0aGlzLmRhdGEubGVuZ3RoIDwgMSkpIHJldHVybjtcclxuXHJcbiAgICAvLyBjbGVhblxyXG4gICAgdGhpcy51bmluc3RhbGwoKTtcclxuICAgIHRoaXMuc2xpZGVyTm9kZS5uYXRpdmVFbGVtZW50LmlubmVySFRNTCA9ICcnO1xyXG4gICAgdGhpcy5ub2RlLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gICAgY29uc3QgTUFYID0gODtcclxuICAgIGNvbnN0IGJlZ2luID0gdGhpcy5kYXRhLmxlbmd0aCA+IE1BWCA/ICh0aGlzLmRhdGEubGVuZ3RoIC0gTUFYKSAvIDIgOiAwO1xyXG5cclxuICAgIGNvbnN0IGRzID0gbmV3IERhdGFTZXQoe1xyXG4gICAgICBzdGF0ZToge1xyXG4gICAgICAgIHN0YXJ0OiB0aGlzLmRhdGFbYmVnaW4gLSAxXS54LFxyXG4gICAgICAgIGVuZDogdGhpcy5kYXRhW2JlZ2luIC0gMSArIE1BWF0ueCxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgZHYgPSBkcy5jcmVhdGVWaWV3KCkuc291cmNlKHRoaXMuZGF0YSk7XHJcbiAgICBkdi5zb3VyY2UodGhpcy5kYXRhKS50cmFuc2Zvcm0oe1xyXG4gICAgICB0eXBlOiAnZmlsdGVyJyxcclxuICAgICAgY2FsbGJhY2sob2JqKSB7XHJcbiAgICAgICAgY29uc3QgdGltZSA9IG5ldyBEYXRlKG9iai54KS5nZXRUaW1lKCk7IC8vICHDpsKzwqjDpsKEwo/Dr8K8wprDpsKXwrbDqcKXwrTDpsKgwrzDpcK8wo/Dr8K8wozDpcK7wrrDqMKuwq7DqMK9wqzDpsKNwqLDpMK4wrrDpsKXwrbDqcKXwrTDpsKIwrPDqMK/wpvDqMKhwozDpsKvwpTDqMK+woNcclxuICAgICAgICByZXR1cm4gdGltZSA+PSBkcy5zdGF0ZS5zdGFydCAmJiB0aW1lIDw9IGRzLnN0YXRlLmVuZDtcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGNoYXJ0ID0gbmV3IEcyLkNoYXJ0KHtcclxuICAgICAgY29udGFpbmVyOiB0aGlzLm5vZGUubmF0aXZlRWxlbWVudCxcclxuICAgICAgZm9yY2VGaXQ6IHRydWUsXHJcbiAgICAgIGhlaWdodDogK3RoaXMuaGVpZ2h0LFxyXG4gICAgICBwYWRkaW5nOiB0aGlzLnBhZGRpbmcsXHJcbiAgICB9KTtcclxuICAgIGNoYXJ0LmF4aXMoJ3gnLCB7IHRpdGxlOiBmYWxzZSB9KTtcclxuICAgIGNoYXJ0LmF4aXMoJ3kxJywge1xyXG4gICAgICB0aXRsZTogZmFsc2UsXHJcbiAgICB9KTtcclxuICAgIGNoYXJ0LmF4aXMoJ3kyJywgZmFsc2UpO1xyXG5cclxuICAgIGxldCBtYXg7XHJcbiAgICBpZiAodGhpcy5kYXRhWzBdICYmIHRoaXMuZGF0YVswXS55MSAmJiB0aGlzLmRhdGFbMF0ueTIpIHtcclxuICAgICAgbWF4ID0gTWF0aC5tYXgoXHJcbiAgICAgICAgdGhpcy5kYXRhLnNvcnQoKGEsIGIpID0+IGIueTEgLSBhLnkxKVswXS55MSxcclxuICAgICAgICB0aGlzLmRhdGEuc29ydCgoYSwgYikgPT4gYi55MiAtIGEueTIpWzBdLnkyLFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgY2hhcnQuc291cmNlKGR2LCB7XHJcbiAgICAgIHg6IHtcclxuICAgICAgICB0eXBlOiAndGltZUNhdCcsXHJcbiAgICAgICAgdGlja0NvdW50OiBNQVgsXHJcbiAgICAgICAgbWFzazogdGhpcy5tYXNrLFxyXG4gICAgICAgIHJhbmdlOiBbMCwgMV0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHkxOiB7XHJcbiAgICAgICAgYWxpYXM6IHRoaXMudGl0bGVNYXAueTEsXHJcbiAgICAgICAgbWF4LFxyXG4gICAgICAgIG1pbjogMCxcclxuICAgICAgfSxcclxuICAgICAgeTI6IHtcclxuICAgICAgICBhbGlhczogdGhpcy50aXRsZU1hcC55MixcclxuICAgICAgICBtYXgsXHJcbiAgICAgICAgbWluOiAwLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgY2hhcnQubGVnZW5kKHtcclxuICAgICAgcG9zaXRpb246IHRoaXMucG9zaXRpb24sXHJcbiAgICAgIGN1c3RvbTogdHJ1ZSxcclxuICAgICAgY2xpY2thYmxlOiBmYWxzZSxcclxuICAgICAgaXRlbXM6IFtcclxuICAgICAgICB7IHZhbHVlOiB0aGlzLnRpdGxlTWFwLnkxLCBmaWxsOiB0aGlzLmNvbG9yTWFwLnkxIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogdGhpcy50aXRsZU1hcC55MiwgZmlsbDogdGhpcy5jb2xvck1hcC55MiB9LFxyXG4gICAgICBdLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY2hhcnRcclxuICAgICAgLmxpbmUoKVxyXG4gICAgICAucG9zaXRpb24oJ3gqeTEnKVxyXG4gICAgICAuY29sb3IodGhpcy5jb2xvck1hcC55MSlcclxuICAgICAgLnNpemUodGhpcy5fYm9yZGVyV2lkdGgpO1xyXG4gICAgY2hhcnRcclxuICAgICAgLmxpbmUoKVxyXG4gICAgICAucG9zaXRpb24oJ3gqeTInKVxyXG4gICAgICAuY29sb3IodGhpcy5jb2xvck1hcC55MilcclxuICAgICAgLnNpemUodGhpcy5fYm9yZGVyV2lkdGgpO1xyXG4gICAgY2hhcnQucmVuZGVyKCk7XHJcblxyXG4gICAgY29uc3Qgc2xpZGVyUGFkZGluZyA9IE9iamVjdC5hc3NpZ24oW10sIHRoaXMucGFkZGluZyk7XHJcbiAgICBzbGlkZXJQYWRkaW5nWzBdID0gMDtcclxuICAgIGNvbnN0IHNsaWRlciA9IG5ldyBTbGlkZXIoe1xyXG4gICAgICBjb250YWluZXI6IHRoaXMuc2xpZGVyTm9kZS5uYXRpdmVFbGVtZW50LFxyXG4gICAgICBoZWlnaHQ6IDI2LFxyXG4gICAgICBwYWRkaW5nOiBzbGlkZXJQYWRkaW5nLFxyXG4gICAgICBzY2FsZXM6IHtcclxuICAgICAgICB4OiB7XHJcbiAgICAgICAgICB0eXBlOiAndGltZScsXHJcbiAgICAgICAgICB0aWNrQ291bnQ6IDE2LFxyXG4gICAgICAgICAgbWFzazogdGhpcy5tYXNrLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIGJhY2tncm91bmRDaGFydDoge1xyXG4gICAgICAgIHR5cGU6ICdsaW5lJyxcclxuICAgICAgfSxcclxuICAgICAgc3RhcnQ6IGRzLnN0YXRlLnN0YXJ0LFxyXG4gICAgICBlbmQ6IGRzLnN0YXRlLmVuZCxcclxuICAgICAgeEF4aXM6ICd4JyxcclxuICAgICAgeUF4aXM6ICd5MScsXHJcbiAgICAgIGRhdGE6IHRoaXMuZGF0YSxcclxuICAgICAgb25DaGFuZ2UoeyBzdGFydFZhbHVlLCBlbmRWYWx1ZSB9KSB7XHJcbiAgICAgICAgZHMuc2V0U3RhdGUoJ3N0YXJ0Jywgc3RhcnRWYWx1ZSk7XHJcbiAgICAgICAgZHMuc2V0U3RhdGUoJ2VuZCcsIGVuZFZhbHVlKTtcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgc2xpZGVyLnJlbmRlcigpO1xyXG5cclxuICAgIHRoaXMuY2hhcnQgPSBjaGFydDtcclxuICAgIHRoaXMuc2xpZGVyID0gc2xpZGVyO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1bmluc3RhbGwoKSB7XHJcbiAgICBpZiAodGhpcy5jaGFydCkgdGhpcy5jaGFydC5kZXN0cm95KCk7XHJcbiAgICBpZiAodGhpcy5zbGlkZXIpIHRoaXMuc2xpZGVyLmRlc3Ryb3koKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaW5pdEZsYWcpIHRoaXMucnVuSW5zdGFsbCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLnVuaW5zdGFsbCgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBEZWxvblV0aWxNb2R1bGUgfSBmcm9tICdAZGVsb24vdXRpbCc7XHJcblxyXG5pbXBvcnQgeyBHMlRpbWVsaW5lQ29tcG9uZW50IH0gZnJvbSAnLi90aW1lbGluZS5jb21wb25lbnQnO1xyXG5cclxuY29uc3QgQ09NUE9ORU5UUyA9IFtHMlRpbWVsaW5lQ29tcG9uZW50XTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRGVsb25VdGlsTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFsuLi5DT01QT05FTlRTXSxcclxuICBleHBvcnRzOiBbLi4uQ09NUE9ORU5UU10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHMlRpbWVsaW5lTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7IG5nTW9kdWxlOiBHMlRpbWVsaW5lTW9kdWxlLCBwcm92aWRlcnM6IFtdIH07XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7OztJQXNGRSxZQUFvQixFQUFxQixFQUFVLElBQVk7UUFBM0MsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFROztzQkF0RHRELEVBQUU7d0JBa0I0QixFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRTtvQkFHeEQsT0FBTzt3QkFFMEIsS0FBSzt1QkFTbkMsR0FBRzt1QkFHRCxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQzs0QkFNYixDQUFDO3dCQVVMLEtBQUs7S0FHMkM7Ozs7O0lBcERuRSxJQUNJLEtBQUssQ0FBQyxLQUFnQztRQUN4QyxJQUFJLEtBQUssWUFBWSxXQUFXLEVBQUU7WUFDaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7U0FDeEI7YUFBTTtZQUNMLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3JCO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztLQUN6Qjs7OztJQWNELElBQ0ksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8s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