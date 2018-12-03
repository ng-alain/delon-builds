/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// tslint:disable:no-any
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, NgZone, TemplateRef, ViewChild, } from '@angular/core';
import { InputNumber } from '@delon/util';
export class G2TimelineComponent {
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
        this.height = 400;
        this.padding = [60, 20, 40, 40];
        this.borderWidth = 2;
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
            .size(this.borderWidth);
        chart
            .line()
            .position('x*y2')
            .color(this.colorMap.y2)
            .size(this.borderWidth);
        chart.render();
        /** @type {?} */
        const sliderPadding = Object.assign({}, [], this.padding);
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
                changeDetection: ChangeDetectionStrategy.OnPush
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
tslib_1.__decorate([
    InputNumber(),
    tslib_1.__metadata("design:type", Object)
], G2TimelineComponent.prototype, "height", void 0);
tslib_1.__decorate([
    InputNumber(),
    tslib_1.__metadata("design:type", Object)
], G2TimelineComponent.prototype, "borderWidth", void 0);
if (false) {
    /** @type {?} */
    G2TimelineComponent.prototype._title;
    /** @type {?} */
    G2TimelineComponent.prototype._titleTpl;
    /** @type {?} */
    G2TimelineComponent.prototype.data;
    /** @type {?} */
    G2TimelineComponent.prototype.titleMap;
    /** @type {?} */
    G2TimelineComponent.prototype.colorMap;
    /** @type {?} */
    G2TimelineComponent.prototype.mask;
    /** @type {?} */
    G2TimelineComponent.prototype.position;
    /** @type {?} */
    G2TimelineComponent.prototype.height;
    /** @type {?} */
    G2TimelineComponent.prototype.padding;
    /** @type {?} */
    G2TimelineComponent.prototype.borderWidth;
    /** @type {?} */
    G2TimelineComponent.prototype.node;
    /** @type {?} */
    G2TimelineComponent.prototype.sliderNode;
    /** @type {?} */
    G2TimelineComponent.prototype.chart;
    /** @type {?} */
    G2TimelineComponent.prototype.initFlag;
    /** @type {?} */
    G2TimelineComponent.prototype.slider;
    /** @type {?} */
    G2TimelineComponent.prototype.cd;
    /** @type {?} */
    G2TimelineComponent.prototype.zone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NoYXJ0L3RpbWVsaW5lLyIsInNvdXJjZXMiOlsidGltZWxpbmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFHTixXQUFXLEVBQ1gsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFXMUMsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7SUErQzlCLFlBQW9CLEVBQXFCLEVBQVUsSUFBWTtRQUEzQyxPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUFVLFNBQUksR0FBSixJQUFJLENBQVE7O1FBM0MvRCxXQUFNLEdBQUcsRUFBRSxDQUFDO1FBa0JaLGFBQVEsR0FBK0IsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQztRQUd4RSxTQUFJLEdBQVcsT0FBTyxDQUFDO1FBRXZCLGFBQVEsR0FBd0MsS0FBSyxDQUFDO1FBRTlCLFdBQU0sR0FBRyxHQUFHLENBQUM7UUFHckMsWUFBTyxHQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFYixnQkFBVyxHQUFHLENBQUMsQ0FBQztRQVVoQyxhQUFRLEdBQUcsS0FBSyxDQUFDO0lBRzBDLENBQUM7Ozs7O0lBekNwRSxJQUNJLEtBQUssQ0FBQyxLQUFpQztRQUN6QyxJQUFJLEtBQUssWUFBWSxXQUFXLEVBQUU7WUFDaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7U0FDeEI7YUFBTTtZQUNMLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFD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S2I7SUFBZCxXQUFXLEVBQUU7O3dEQUFpQjs7O0lBOUJ4QyxxQ0FBWTs7SUFDWix3Q0FBNkI7O0lBWTdCLG1DQUNxRTs7SUFDckUsdUNBQ3FDOztJQUNyQyx1Q0FDd0U7O0lBRXhFLG1DQUN1Qjs7SUFDdkIsdUNBQ3NEOztJQUV0RCxxQ0FBcUM7O0lBRXJDLHNDQUNxQzs7SUFFckMsMENBQXdDOztJQUl4QyxtQ0FDeUI7O0lBQ3pCLHlDQUMrQjs7SUFFL0Isb0NBQW1COztJQUNuQix1Q0FBeUI7O0lBQ3pCLHFDQUFvQjs7SUFFUixpQ0FBNkI7O0lBQUUsbUNBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6bm8tYW55XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbmRlY2xhcmUgdmFyIEcyOiBhbnk7XG5kZWNsYXJlIHZhciBEYXRhU2V0OiBhbnk7XG5kZWNsYXJlIHZhciBTbGlkZXI6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZzItdGltZWxpbmUnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGltZWxpbmUuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgRzJUaW1lbGluZUNvbXBvbmVudFxuICBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0IHtcbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBfdGl0bGUgPSAnJztcbiAgX3RpdGxlVHBsOiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KClcbiAgc2V0IHRpdGxlKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPikge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICB0aGlzLl90aXRsZSA9IG51bGw7XG4gICAgICB0aGlzLl90aXRsZVRwbCA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl90aXRsZSA9IHZhbHVlO1xuICAgIH1cbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGRhdGE6IEFycmF5PHsgeDogRGF0ZTsgeTE6IG51bWJlcjsgeTI6IG51bWJlcjsgW2tleTogc3RyaW5nXTogYW55IH0+O1xuICBASW5wdXQoKVxuICB0aXRsZU1hcDogeyB5MTogc3RyaW5nOyB5Mjogc3RyaW5nIH07XG4gIEBJbnB1dCgpXG4gIGNvbG9yTWFwOiB7IHkxOiBzdHJpbmc7IHkyOiBzdHJpbmcgfSA9IHsgeTE6ICcjMTg5MEZGJywgeTI6ICcjMkZDMjVCJyB9O1xuXG4gIEBJbnB1dCgpXG4gIG1hc2s6IHN0cmluZyA9ICdISDptbSc7XG4gIEBJbnB1dCgpXG4gIHBvc2l0aW9uOiAndG9wJyB8ICdyaWdodCcgfCAnYm90dG9tJyB8ICdsZWZ0JyA9ICd0b3AnO1xuXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGhlaWdodCA9IDQwMDtcblxuICBASW5wdXQoKVxuICBwYWRkaW5nOiBudW1iZXJbXSA9IFs2MCwgMjAsIDQwLCA0MF07XG5cbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgYm9yZGVyV2lkdGggPSAyO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBAVmlld0NoaWxkKCdjb250YWluZXInKVxuICBwcml2YXRlIG5vZGU6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3NsaWRlcicpXG4gIHByaXZhdGUgc2xpZGVyTm9kZTogRWxlbWVudFJlZjtcblxuICBwcml2YXRlIGNoYXJ0OiBhbnk7XG4gIHByaXZhdGUgaW5pdEZsYWcgPSBmYWxzZTtcbiAgcHJpdmF0ZSBzbGlkZXI6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSB6b25lOiBOZ1pvbmUpIHsgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmluaXRGbGFnID0gdHJ1ZTtcbiAgICB0aGlzLnJ1bkluc3RhbGwoKTtcbiAgfVxuXG4gIHByaXZhdGUgcnVuSW5zdGFsbCgpIHtcbiAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmluc3RhbGwoKSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbnN0YWxsKCkge1xuICAgIGlmICghdGhpcy5kYXRhIHx8ICh0aGlzLmRhdGEgJiYgdGhpcy5kYXRhLmxlbmd0aCA8IDEpKSByZXR1cm47XG5cbiAgICAvLyBjbGVhblxuICAgIHRoaXMudW5pbnN0YWxsKCk7XG4gICAgdGhpcy5zbGlkZXJOb2RlLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgdGhpcy5ub2RlLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBjb25zdCBNQVggPSA4O1xuICAgIGNvbnN0IGJlZ2luID0gdGhpcy5kYXRhLmxlbmd0aCA+IE1BWCA/ICh0aGlzLmRhdGEubGVuZ3RoIC0gTUFYKSAvIDIgOiAwO1xuXG4gICAgY29uc3QgZHMgPSBuZXcgRGF0YVNldCh7XG4gICAgICBzdGF0ZToge1xuICAgICAgICBzdGFydDogdGhpcy5kYXRhW2JlZ2luIC0gMV0ueCxcbiAgICAgICAgZW5kOiB0aGlzLmRhdGFbYmVnaW4gLSAxICsgTUFYXS54LFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBjb25zdCBkdiA9IGRzLmNyZWF0ZVZpZXcoKS5zb3VyY2UodGhpcy5kYXRhKTtcbiAgICBkdi5zb3VyY2UodGhpcy5kYXRhKS50cmFuc2Zvcm0oe1xuICAgICAgdHlwZTogJ2ZpbHRlcicsXG4gICAgICBjYWxsYmFjayhvYmopIHtcbiAgICAgICAgY29uc3QgdGltZSA9IG5ldyBEYXRlKG9iai54KS5nZXRUaW1lKCk7IC8vICHms6jmhI/vvJrml7bpl7TmoLzlvI/vvIzlu7rorq7ovazmjaLkuLrml7bpl7TmiLPov5vooYzmr5TovoNcbiAgICAgICAgcmV0dXJuIHRpbWUgPj0gZHMuc3RhdGUuc3RhcnQgJiYgdGltZSA8PSBkcy5zdGF0ZS5lbmQ7XG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgY29uc3QgY2hhcnQgPSBuZXcgRzIuQ2hhcnQoe1xuICAgICAgY29udGFpbmVyOiB0aGlzLm5vZGUubmF0aXZlRWxlbWVudCxcbiAgICAgIGZvcmNlRml0OiB0cnVlLFxuICAgICAgaGVpZ2h0OiArdGhpcy5oZWlnaHQsXG4gICAgICBwYWRkaW5nOiB0aGlzLnBhZGRpbmcsXG4gICAgfSk7XG4gICAgY2hhcnQuYXhpcygneCcsIHsgdGl0bGU6IGZhbHNlIH0pO1xuICAgIGNoYXJ0LmF4aXMoJ3kxJywge1xuICAgICAgdGl0bGU6IGZhbHNlLFxuICAgIH0pO1xuICAgIGNoYXJ0LmF4aXMoJ3kyJywgZmFsc2UpO1xuXG4gICAgbGV0IG1heDtcbiAgICBpZiAodGhpcy5kYXRhWzBdICYmIHRoaXMuZGF0YVswXS55MSAmJiB0aGlzLmRhdGFbMF0ueTIpIHtcbiAgICAgIG1heCA9IE1hdGgubWF4KFxuICAgICAgICB0aGlzLmRhdGEuc29ydCgoYSwgYikgPT4gYi55MSAtIGEueTEpWzBdLnkxLFxuICAgICAgICB0aGlzLmRhdGEuc29ydCgoYSwgYikgPT4gYi55MiAtIGEueTIpWzBdLnkyLFxuICAgICAgKTtcbiAgICB9XG4gICAgY2hhcnQuc291cmNlKGR2LCB7XG4gICAgICB4OiB7XG4gICAgICAgIHR5cGU6ICd0aW1lQ2F0JyxcbiAgICAgICAgdGlja0NvdW50OiBNQVgsXG4gICAgICAgIG1hc2s6IHRoaXMubWFzayxcbiAgICAgICAgcmFuZ2U6IFswLCAxXSxcbiAgICAgIH0sXG4gICAgICB5MToge1xuICAgICAgICBhbGlhczogdGhpcy50aXRsZU1hcC55MSxcbiAgICAgICAgbWF4LFxuICAgICAgICBtaW46IDAsXG4gICAgICB9LFxuICAgICAgeTI6IHtcbiAgICAgICAgYWxpYXM6IHRoaXMudGl0bGVNYXAueTIsXG4gICAgICAgIG1heCxcbiAgICAgICAgbWluOiAwLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGNoYXJ0LmxlZ2VuZCh7XG4gICAgICBwb3NpdGlvbjogdGhpcy5wb3NpdGlvbixcbiAgICAgIGN1c3RvbTogdHJ1ZSxcbiAgICAgIGNsaWNrYWJsZTogZmFsc2UsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHZhbHVlOiB0aGlzLnRpdGxlTWFwLnkxLCBmaWxsOiB0aGlzLmNvbG9yTWFwLnkxIH0sXG4gICAgICAgIHsgdmFsdWU6IHRoaXMudGl0bGVNYXAueTIsIGZpbGw6IHRoaXMuY29sb3JNYXAueTIgfSxcbiAgICAgIF0sXG4gICAgfSk7XG5cbiAgICBjaGFydFxuICAgICAgLmxpbmUoKVxuICAgICAgLnBvc2l0aW9uKCd4KnkxJylcbiAgICAgIC5jb2xvcih0aGlzLmNvbG9yTWFwLnkxKVxuICAgICAgLnNpemUodGhpcy5ib3JkZXJXaWR0aCk7XG4gICAgY2hhcnRcbiAgICAgIC5saW5lKClcbiAgICAgIC5wb3NpdGlvbigneCp5MicpXG4gICAgICAuY29sb3IodGhpcy5jb2xvck1hcC55MilcbiAgICAgIC5zaXplKHRoaXMuYm9yZGVyV2lkdGgpO1xuICAgIGNoYXJ0LnJlbmRlcigpO1xuXG4gICAgY29uc3Qgc2xpZGVyUGFkZGluZyA9IHsgLi4uW10sIC4uLnRoaXMucGFkZGluZyB9O1xuICAgIHNsaWRlclBhZGRpbmdbMF0gPSAwO1xuICAgIGNvbnN0IHNsaWRlciA9IG5ldyBTbGlkZXIoe1xuICAgICAgY29udGFpbmVyOiB0aGlzLnNsaWRlck5vZGUubmF0aXZlRWxlbWVudCxcbiAgICAgIGhlaWdodDogMjYsXG4gICAgICBwYWRkaW5nOiBzbGlkZXJQYWRkaW5nLFxuICAgICAgc2NhbGVzOiB7XG4gICAgICAgIHg6IHtcbiAgICAgICAgICB0eXBlOiAndGltZScsXG4gICAgICAgICAgdGlja0NvdW50OiAxNixcbiAgICAgICAgICBtYXNrOiB0aGlzLm1hc2ssXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgYmFja2dyb3VuZENoYXJ0OiB7XG4gICAgICAgIHR5cGU6ICdsaW5lJyxcbiAgICAgIH0sXG4gICAgICBzdGFydDogZHMuc3RhdGUuc3RhcnQsXG4gICAgICBlbmQ6IGRzLnN0YXRlLmVuZCxcbiAgICAgIHhBeGlzOiAneCcsXG4gICAgICB5QXhpczogJ3kxJyxcbiAgICAgIGRhdGE6IHRoaXMuZGF0YSxcbiAgICAgIG9uQ2hhbmdlKHsgc3RhcnRWYWx1ZSwgZW5kVmFsdWUgfSkge1xuICAgICAgICBkcy5zZXRTdGF0ZSgnc3RhcnQnLCBzdGFydFZhbHVlKTtcbiAgICAgICAgZHMuc2V0U3RhdGUoJ2VuZCcsIGVuZFZhbHVlKTtcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgc2xpZGVyLnJlbmRlcigpO1xuXG4gICAgdGhpcy5jaGFydCA9IGNoYXJ0O1xuICAgIHRoaXMuc2xpZGVyID0gc2xpZGVyO1xuICB9XG5cbiAgcHJpdmF0ZSB1bmluc3RhbGwoKSB7XG4gICAgaWYgKHRoaXMuY2hhcnQpIHRoaXMuY2hhcnQuZGVzdHJveSgpO1xuICAgIGlmICh0aGlzLnNsaWRlcikgdGhpcy5zbGlkZXIuZGVzdHJveSgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW5pdEZsYWcpIHRoaXMucnVuSW5zdGFsbCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy51bmluc3RhbGwoKTtcbiAgfVxufVxuIl19