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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BkZWxvbi9jaGFydC90aW1lbGluZS90aW1lbGluZS5jb21wb25lbnQudHMiLCJuZzovL0BkZWxvbi9jaGFydC90aW1lbGluZS90aW1lbGluZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgVmlld0NoaWxkLFxuICBFbGVtZW50UmVmLFxuICBPbkRlc3Ryb3ksXG4gIE9uQ2hhbmdlcyxcbiAgTmdab25lLFxuICBUZW1wbGF0ZVJlZixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBBZnRlclZpZXdJbml0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRvTnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5kZWNsYXJlIHZhciBHMjogYW55O1xuZGVjbGFyZSB2YXIgRGF0YVNldDogYW55O1xuZGVjbGFyZSB2YXIgU2xpZGVyOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2cyLXRpbWVsaW5lJyxcbiAgdGVtcGxhdGU6IGBcbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIl90aXRsZTsgZWxzZSBfdGl0bGVUcGxcIj48aDQ+e3tfdGl0bGV9fTwvaDQ+PC9uZy1jb250YWluZXI+XG4gIDxkaXYgI2NvbnRhaW5lcj48L2Rpdj5cbiAgPGRpdiAjc2xpZGVyPjwvZGl2PmAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgRzJUaW1lbGluZUNvbXBvbmVudFxuICBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0IHtcbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBfdGl0bGUgPSAnJztcbiAgX3RpdGxlVHBsOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBASW5wdXQoKVxuICBzZXQgdGl0bGUodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4pIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgdGhpcy5fdGl0bGUgPSBudWxsO1xuICAgICAgdGhpcy5fdGl0bGVUcGwgPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fdGl0bGUgPSB2YWx1ZTtcbiAgICB9XG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBkYXRhOiBBcnJheTx7IHg6IERhdGU7IHkxOiBudW1iZXI7IHkyOiBudW1iZXI7IFtrZXk6IHN0cmluZ106IGFueSB9PjtcbiAgQElucHV0KClcbiAgdGl0bGVNYXA6IHsgeTE6IHN0cmluZzsgeTI6IHN0cmluZyB9O1xuICBASW5wdXQoKVxuICBjb2xvck1hcDogeyB5MTogc3RyaW5nOyB5Mjogc3RyaW5nIH0gPSB7IHkxOiAnIzE4OTBGRicsIHkyOiAnIzJGQzI1QicgfTtcblxuICBASW5wdXQoKVxuICBtYXNrOiBzdHJpbmcgPSAnSEg6bW0nO1xuICBASW5wdXQoKVxuICBwb3NpdGlvbjogJ3RvcCcgfCAncmlnaHQnIHwgJ2JvdHRvbScgfCAnbGVmdCcgPSAndG9wJztcblxuICBASW5wdXQoKVxuICBnZXQgaGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLl9oZWlnaHQ7XG4gIH1cbiAgc2V0IGhlaWdodCh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5faGVpZ2h0ID0gdG9OdW1iZXIodmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX2hlaWdodCA9IDQwMDtcblxuICBASW5wdXQoKVxuICBwYWRkaW5nOiBudW1iZXJbXSA9IFs2MCwgMjAsIDQwLCA0MF07XG5cbiAgQElucHV0KClcbiAgc2V0IGJvcmRlcldpZHRoKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl9ib3JkZXJXaWR0aCA9IHRvTnVtYmVyKHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF9ib3JkZXJXaWR0aCA9IDI7XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicpXG4gIHByaXZhdGUgbm9kZTogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnc2xpZGVyJylcbiAgcHJpdmF0ZSBzbGlkZXJOb2RlOiBFbGVtZW50UmVmO1xuXG4gIHByaXZhdGUgY2hhcnQ6IGFueTtcbiAgcHJpdmF0ZSBpbml0RmxhZyA9IGZhbHNlO1xuICBwcml2YXRlIHNsaWRlcjogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIHpvbmU6IE5nWm9uZSkge31cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pbml0RmxhZyA9IHRydWU7XG4gICAgdGhpcy5ydW5JbnN0YWxsKCk7XG4gIH1cblxuICBwcml2YXRlIHJ1bkluc3RhbGwoKSB7XG4gICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5pbnN0YWxsKCkpKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5zdGFsbCgpIHtcbiAgICBpZiAoIXRoaXMuZGF0YSB8fCAodGhpcy5kYXRhICYmIHRoaXMuZGF0YS5sZW5ndGggPCAxKSkgcmV0dXJuO1xuXG4gICAgLy8gY2xlYW5cbiAgICB0aGlzLnVuaW5zdGFsbCgpO1xuICAgIHRoaXMuc2xpZGVyTm9kZS5uYXRpdmVFbGVtZW50LmlubmVySFRNTCA9ICcnO1xuICAgIHRoaXMubm9kZS5uYXRpdmVFbGVtZW50LmlubmVySFRNTCA9ICcnO1xuXG4gICAgY29uc3QgTUFYID0gODtcbiAgICBjb25zdCBiZWdpbiA9IHRoaXMuZGF0YS5sZW5ndGggPiBNQVggPyAodGhpcy5kYXRhLmxlbmd0aCAtIE1BWCkgLyAyIDogMDtcblxuICAgIGNvbnN0IGRzID0gbmV3IERhdGFTZXQoe1xuICAgICAgc3RhdGU6IHtcbiAgICAgICAgc3RhcnQ6IHRoaXMuZGF0YVtiZWdpbiAtIDFdLngsXG4gICAgICAgIGVuZDogdGhpcy5kYXRhW2JlZ2luIC0gMSArIE1BWF0ueCxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgY29uc3QgZHYgPSBkcy5jcmVhdGVWaWV3KCkuc291cmNlKHRoaXMuZGF0YSk7XG4gICAgZHYuc291cmNlKHRoaXMuZGF0YSkudHJhbnNmb3JtKHtcbiAgICAgIHR5cGU6ICdmaWx0ZXInLFxuICAgICAgY2FsbGJhY2sob2JqKSB7XG4gICAgICAgIGNvbnN0IHRpbWUgPSBuZXcgRGF0ZShvYmoueCkuZ2V0VGltZSgpOyAvLyAhw6bCs8Kow6bChMKPw6/CvMKaw6bCl8K2w6nCl8K0w6bCoMK8w6XCvMKPw6/CvMKMw6XCu8K6w6jCrsKuw6jCvcKsw6bCjcKiw6TCuMK6w6bCl8K2w6nCl8K0w6bCiMKzw6jCv8Kbw6jCocKMw6bCr8KUw6jCvsKDXG4gICAgICAgIHJldHVybiB0aW1lID49IGRzLnN0YXRlLnN0YXJ0ICYmIHRpbWUgPD0gZHMuc3RhdGUuZW5kO1xuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGNoYXJ0ID0gbmV3IEcyLkNoYXJ0KHtcbiAgICAgIGNvbnRhaW5lcjogdGhpcy5ub2RlLm5hdGl2ZUVsZW1lbnQsXG4gICAgICBmb3JjZUZpdDogdHJ1ZSxcbiAgICAgIGhlaWdodDogK3RoaXMuaGVpZ2h0LFxuICAgICAgcGFkZGluZzogdGhpcy5wYWRkaW5nLFxuICAgIH0pO1xuICAgIGNoYXJ0LmF4aXMoJ3gnLCB7IHRpdGxlOiBmYWxzZSB9KTtcbiAgICBjaGFydC5heGlzKCd5MScsIHtcbiAgICAgIHRpdGxlOiBmYWxzZSxcbiAgICB9KTtcbiAgICBjaGFydC5heGlzKCd5MicsIGZhbHNlKTtcblxuICAgIGxldCBtYXg7XG4gICAgaWYgKHRoaXMuZGF0YVswXSAmJiB0aGlzLmRhdGFbMF0ueTEgJiYgdGhpcy5kYXRhWzBdLnkyKSB7XG4gICAgICBtYXggPSBNYXRoLm1heChcbiAgICAgICAgdGhpcy5kYXRhLnNvcnQoKGEsIGIpID0+IGIueTEgLSBhLnkxKVswXS55MSxcbiAgICAgICAgdGhpcy5kYXRhLnNvcnQoKGEsIGIpID0+IGIueTIgLSBhLnkyKVswXS55MixcbiAgICAgICk7XG4gICAgfVxuICAgIGNoYXJ0LnNvdXJjZShkdiwge1xuICAgICAgeDoge1xuICAgICAgICB0eXBlOiAndGltZUNhdCcsXG4gICAgICAgIHRpY2tDb3VudDogTUFYLFxuICAgICAgICBtYXNrOiB0aGlzLm1hc2ssXG4gICAgICAgIHJhbmdlOiBbMCwgMV0sXG4gICAgICB9LFxuICAgICAgeTE6IHtcbiAgICAgICAgYWxpYXM6IHRoaXMudGl0bGVNYXAueTEsXG4gICAgICAgIG1heCxcbiAgICAgICAgbWluOiAwLFxuICAgICAgfSxcbiAgICAgIHkyOiB7XG4gICAgICAgIGFsaWFzOiB0aGlzLnRpdGxlTWFwLnkyLFxuICAgICAgICBtYXgsXG4gICAgICAgIG1pbjogMCxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBjaGFydC5sZWdlbmQoe1xuICAgICAgcG9zaXRpb246IHRoaXMucG9zaXRpb24sXG4gICAgICBjdXN0b206IHRydWUsXG4gICAgICBjbGlja2FibGU6IGZhbHNlLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB2YWx1ZTogdGhpcy50aXRsZU1hcC55MSwgZmlsbDogdGhpcy5jb2xvck1hcC55MSB9LFxuICAgICAgICB7IHZhbHVlOiB0aGlzLnRpdGxlTWFwLnkyLCBmaWxsOiB0aGlzLmNvbG9yTWFwLnkyIH0sXG4gICAgICBdLFxuICAgIH0pO1xuXG4gICAgY2hhcnRcbiAgICAgIC5saW5lKClcbiAgICAgIC5wb3NpdGlvbigneCp5MScpXG4gICAgICAuY29sb3IodGhpcy5jb2xvck1hcC55MSlcbiAgICAgIC5zaXplKHRoaXMuX2JvcmRlcldpZHRoKTtcbiAgICBjaGFydFxuICAgICAgLmxpbmUoKVxuICAgICAgLnBvc2l0aW9uKCd4KnkyJylcbiAgICAgIC5jb2xvcih0aGlzLmNvbG9yTWFwLnkyKVxuICAgICAgLnNpemUodGhpcy5fYm9yZGVyV2lkdGgpO1xuICAgIGNoYXJ0LnJlbmRlcigpO1xuXG4gICAgY29uc3Qgc2xpZGVyUGFkZGluZyA9IE9iamVjdC5hc3NpZ24oW10sIHRoaXMucGFkZGluZyk7XG4gICAgc2xpZGVyUGFkZGluZ1swXSA9IDA7XG4gICAgY29uc3Qgc2xpZGVyID0gbmV3IFNsaWRlcih7XG4gICAgICBjb250YWluZXI6IHRoaXMuc2xpZGVyTm9kZS5uYXRpdmVFbGVtZW50LFxuICAgICAgaGVpZ2h0OiAyNixcbiAgICAgIHBhZGRpbmc6IHNsaWRlclBhZGRpbmcsXG4gICAgICBzY2FsZXM6IHtcbiAgICAgICAgeDoge1xuICAgICAgICAgIHR5cGU6ICd0aW1lJyxcbiAgICAgICAgICB0aWNrQ291bnQ6IDE2LFxuICAgICAgICAgIG1hc2s6IHRoaXMubWFzayxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBiYWNrZ3JvdW5kQ2hhcnQ6IHtcbiAgICAgICAgdHlwZTogJ2xpbmUnLFxuICAgICAgfSxcbiAgICAgIHN0YXJ0OiBkcy5zdGF0ZS5zdGFydCxcbiAgICAgIGVuZDogZHMuc3RhdGUuZW5kLFxuICAgICAgeEF4aXM6ICd4JyxcbiAgICAgIHlBeGlzOiAneTEnLFxuICAgICAgZGF0YTogdGhpcy5kYXRhLFxuICAgICAgb25DaGFuZ2UoeyBzdGFydFZhbHVlLCBlbmRWYWx1ZSB9KSB7XG4gICAgICAgIGRzLnNldFN0YXRlKCdzdGFydCcsIHN0YXJ0VmFsdWUpO1xuICAgICAgICBkcy5zZXRTdGF0ZSgnZW5kJywgZW5kVmFsdWUpO1xuICAgICAgfSxcbiAgICB9KTtcbiAgICBzbGlkZXIucmVuZGVyKCk7XG5cbiAgICB0aGlzLmNoYXJ0ID0gY2hhcnQ7XG4gICAgdGhpcy5zbGlkZXIgPSBzbGlkZXI7XG4gIH1cblxuICBwcml2YXRlIHVuaW5zdGFsbCgpIHtcbiAgICBpZiAodGhpcy5jaGFydCkgdGhpcy5jaGFydC5kZXN0cm95KCk7XG4gICAgaWYgKHRoaXMuc2xpZGVyKSB0aGlzLnNsaWRlci5kZXN0cm95KCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pbml0RmxhZykgdGhpcy5ydW5JbnN0YWxsKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnVuaW5zdGFsbCgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IERlbG9uVXRpbE1vZHVsZSB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuaW1wb3J0IHsgRzJUaW1lbGluZUNvbXBvbmVudCB9IGZyb20gJy4vdGltZWxpbmUuY29tcG9uZW50JztcblxuY29uc3QgQ09NUE9ORU5UUyA9IFtHMlRpbWVsaW5lQ29tcG9uZW50XTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRGVsb25VdGlsTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbLi4uQ09NUE9ORU5UU10sXG4gIGV4cG9ydHM6IFsuLi5DT01QT05FTlRTXSxcbn0pXG5leHBvcnQgY2xhc3MgRzJUaW1lbGluZU1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7IG5nTW9kdWxlOiBHMlRpbWVsaW5lTW9kdWxlLCBwcm92aWRlcnM6IFtdIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLE1BNEJhLG1CQUFtQjs7Ozs7SUEwRDlCLFlBQW9CLEVBQXFCLEVBQVUsSUFBWTtRQUEzQyxPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUFVLFNBQUksR0FBSixJQUFJLENBQVE7O1FBdEQvRCxXQUFNLEdBQUcsRUFBRSxDQUFDO1FBa0JaLGFB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