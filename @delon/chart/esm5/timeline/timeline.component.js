/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// tslint:disable:no-any
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild, } from '@angular/core';
import { InputNumber } from '@delon/util';
var G2TimelineData = /** @class */ (function () {
    function G2TimelineData() {
    }
    return G2TimelineData;
}());
export { G2TimelineData };
if (false) {
    /**
     * 非 `Date` 格式，自动使用 `new Date` 转换，因此，支持时间格式字符串、数字型时间戳
     * @type {?}
     */
    G2TimelineData.prototype.x;
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
    /* Skipping unhandled member: [key: string]: any;*/
}
var G2TimelineComponent = /** @class */ (function () {
    function G2TimelineComponent() {
        // #region fields
        this.delay = 0;
        this.data = [];
        this.colorMap = { y1: '#1890FF', y2: '#2FC25B' };
        this.mask = 'HH:mm';
        this.position = 'top';
        this.height = 400;
        this.padding = [60, 20, 40, 40];
        this.borderWidth = 2;
    }
    // #endregion
    // #endregion
    /**
     * @return {?}
     */
    G2TimelineComponent.prototype.ngOnInit = 
    // #endregion
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout(function () { return _this.install(); }, this.delay);
    };
    /**
     * @return {?}
     */
    G2TimelineComponent.prototype.install = /**
     * @return {?}
     */
    function () {
        var _a = this, node = _a.node, sliderNode = _a.sliderNode, height = _a.height, padding = _a.padding, mask = _a.mask;
        /** @type {?} */
        var chart = this.chart = new G2.Chart({
            container: node.nativeElement,
            forceFit: true,
            height: height,
            padding: padding,
        });
        chart.axis('x', { title: false });
        chart.axis('y1', { title: false });
        chart.axis('y2', false);
        chart.line().position('x*y1');
        chart.line().position('x*y2');
        chart.render();
        /** @type {?} */
        var sliderPadding = tslib_1.__assign({}, [], padding);
        sliderPadding[0] = 0;
        /** @type {?} */
        var slider = this.slider = new Slider({
            container: sliderNode.nativeElement,
            width: 'auto',
            height: 26,
            padding: sliderPadding,
            scales: {
                x: {
                    type: 'time',
                    tickCount: 16,
                    mask: mask,
                },
            },
            backgroundChart: {
                type: 'line',
            },
            xAxis: 'x',
            yAxis: 'y1',
            data: [],
        });
        slider.render();
        this.attachChart();
    };
    /**
     * @return {?}
     */
    G2TimelineComponent.prototype.attachChart = /**
     * @return {?}
     */
    function () {
        var _a = this, chart = _a.chart, slider = _a.slider, height = _a.height, padding = _a.padding, data = _a.data, mask = _a.mask, titleMap = _a.titleMap, position = _a.position, colorMap = _a.colorMap, borderWidth = _a.borderWidth;
        if (!chart)
            return;
        chart.legend({
            position: position,
            custom: true,
            clickable: false,
            items: [
                { value: titleMap.y1, fill: colorMap.y1 },
                { value: titleMap.y2, fill: colorMap.y2 },
            ],
        });
        // border
        chart.get('geoms').forEach(function (v, idx) {
            v.color(colorMap["y" + (idx + 1)]).size(borderWidth);
        });
        data.filter(function (v) { return !(v.x instanceof Number); }).forEach(function (v) {
            v.x = +new Date(v.x);
        });
        chart.set('height', height);
        chart.set('padding', padding);
        /** @type {?} */
        var MAX = 8;
        /** @type {?} */
        var begin = Math.ceil(data.length > MAX ? (data.length - MAX) / 2 : 0);
        /** @type {?} */
        var ds = new DataSet({
            state: {
                start: data[begin - 1].x,
                end: data[begin - 1 + MAX].x,
            },
        });
        /** @type {?} */
        var dv = ds.createView().source(data);
        dv.source(data).transform({
            type: 'filter',
            callback: function (val) {
                /** @type {?} */
                var time = +val.x;
                return time >= ds.state.start && time <= ds.state.end;
            },
        });
        /** @type {?} */
        var max;
        if (data[0] && data[0].y1 && data[0].y2) {
            max = Math.max(data.sort(function (a, b) { return b.y1 - a.y1; })[0].y1, data.sort(function (a, b) { return b.y2 - a.y2; })[0].y2);
        }
        chart.source(dv, {
            x: {
                type: 'timeCat',
                tickCount: MAX,
                mask: mask,
                range: [0, 1],
            },
            y1: {
                alias: titleMap.y1,
                max: max,
                min: 0,
            },
            y2: {
                alias: titleMap.y2,
                max: max,
                min: 0,
            },
        });
        chart.repaint();
        slider.start = new Date(ds.state.start);
        slider.end = new Date(ds.state.end);
        slider.onChange = function (_a) {
            var startValue = _a.startValue, endValue = _a.endValue;
            ds.setState('start', startValue);
            ds.setState('end', endValue);
        },
            slider.changeData(data);
    };
    /**
     * @return {?}
     */
    G2TimelineComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.attachChart();
    };
    /**
     * @return {?}
     */
    G2TimelineComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.chart)
            this.chart.destroy();
        if (this.slider)
            this.slider.destroy();
    };
    G2TimelineComponent.decorators = [
        { type: Component, args: [{
                    selector: 'g2-timeline',
                    template: "<ng-container *stringTemplateOutlet=\"title\"><h4>{{title}}</h4></ng-container>\n<div #container></div>\n<div #slider></div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    G2TimelineComponent.propDecorators = {
        node: [{ type: ViewChild, args: ['container',] }],
        sliderNode: [{ type: ViewChild, args: ['slider',] }],
        delay: [{ type: Input }],
        title: [{ type: Input }],
        data: [{ type: Input }],
        titleMap: [{ type: Input }],
        colorMap: [{ type: Input }],
        mask: [{ type: Input }],
        position: [{ type: Input }],
        height: [{ type: Input }],
        padding: [{ type: Input }],
        borderWidth: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Object)
    ], G2TimelineComponent.prototype, "delay", void 0);
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Object)
    ], G2TimelineComponent.prototype, "height", void 0);
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Object)
    ], G2TimelineComponent.prototype, "borderWidth", void 0);
    return G2TimelineComponent;
}());
export { G2TimelineComponent };
if (false) {
    /** @type {?} */
    G2TimelineComponent.prototype.node;
    /** @type {?} */
    G2TimelineComponent.prototype.sliderNode;
    /** @type {?} */
    G2TimelineComponent.prototype.chart;
    /** @type {?} */
    G2TimelineComponent.prototype.slider;
    /** @type {?} */
    G2TimelineComponent.prototype.delay;
    /** @type {?} */
    G2TimelineComponent.prototype.title;
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NoYXJ0L3RpbWVsaW5lLyIsInNvdXJjZXMiOlsidGltZWxpbmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBS0wsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFNMUM7SUFBQTtJQVFBLENBQUM7SUFBRCxxQkFBQztBQUFELENBQUMsQUFSRCxJQVFDOzs7Ozs7O0lBTkMsMkJBQTBCOzs7OztJQUUxQiw0QkFBVzs7Ozs7SUFFWCw0QkFBVzs7O0FBSWI7SUFBQTs7UUFjMEIsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUV6QixTQUFJLEdBQXFCLEVBQUUsQ0FBQztRQUU1QixhQUFRLEdBQStCLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUM7UUFDeEUsU0FBSSxHQUFXLE9BQU8sQ0FBQztRQUN2QixhQUFRLEdBQXdDLEtBQUssQ0FBQztRQUN2QyxXQUFNLEdBQUcsR0FBRyxDQUFDO1FBQzVCLFlBQU8sR0FBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3RCLGdCQUFXLEdBQUcsQ0FBQyxDQUFDO0lBMkkxQyxDQUFDO0lBeklDLGFBQWE7Ozs7O0lBRWIsc0NBQVE7Ozs7O0lBQVI7UUFBQSxpQkFFQztRQURDLFVBQVUsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLE9BQU8sRUFBRSxFQUFkLENBQWMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7OztJQUVPLHFDQUFPOzs7SUFBZjtRQUNRLElBQUEsU0FBa0QsRUFBaEQsY0FBSSxFQUFFLDBCQUFVLEVBQUUs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QWtDOztJQUNsQyxvQ0FBMkM7O0lBQzNDLG1DQUFxQzs7SUFDckMsdUNBQThDOztJQUM5Qyx1Q0FBaUY7O0lBQ2pGLG1DQUFnQzs7SUFDaEMsdUNBQStEOztJQUMvRCxxQ0FBcUM7O0lBQ3JDLHNDQUE4Qzs7SUFDOUMsMENBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6bm8tYW55XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbnB1dE51bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuZGVjbGFyZSB2YXIgRzI6IGFueTtcbmRlY2xhcmUgdmFyIERhdGFTZXQ6IGFueTtcbmRlY2xhcmUgdmFyIFNsaWRlcjogYW55O1xuXG5leHBvcnQgY2xhc3MgRzJUaW1lbGluZURhdGEge1xuICAvKiog6Z2eIGBEYXRlYCDmoLzlvI/vvIzoh6rliqjkvb/nlKggYG5ldyBEYXRlYCDovazmjaLvvIzlm6DmraTvvIzmlK/mjIHml7bpl7TmoLzlvI/lrZfnrKbkuLLjgIHmlbDlrZflnovml7bpl7TmiLMgKi9cbiAgeDogRGF0ZSB8IHN0cmluZyB8IG51bWJlcjtcbiAgLyoqIOaMh+aghzHmlbDmja4gKi9cbiAgeTE6IG51bWJlcjtcbiAgLyoqIOaMh+aghzLmlbDmja4gKi9cbiAgeTI6IG51bWJlcjtcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnMi10aW1lbGluZScsXG4gIHRlbXBsYXRlVXJsOiAnLi90aW1lbGluZS5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBHMlRpbWVsaW5lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG5cbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJykgcHJpdmF0ZSBub2RlOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdzbGlkZXInKSBwcml2YXRlIHNsaWRlck5vZGU6IEVsZW1lbnRSZWY7XG4gIHByaXZhdGUgY2hhcnQ6IGFueTtcbiAgcHJpdmF0ZSBzbGlkZXI6IGFueTtcblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGRlbGF5ID0gMDtcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBkYXRhOiBHMlRpbWVsaW5lRGF0YVtdID0gW107XG4gIEBJbnB1dCgpIHRpdGxlTWFwOiB7IHkxOiBzdHJpbmc7IHkyOiBzdHJpbmcgfTtcbiAgQElucHV0KCkgY29sb3JNYXA6IHsgeTE6IHN0cmluZzsgeTI6IHN0cmluZyB9ID0geyB5MTogJyMxODkwRkYnLCB5MjogJyMyRkMyNUInIH07XG4gIEBJbnB1dCgpIG1hc2s6IHN0cmluZyA9ICdISDptbSc7XG4gIEBJbnB1dCgpIHBvc2l0aW9uOiAndG9wJyB8ICdyaWdodCcgfCAnYm90dG9tJyB8ICdsZWZ0JyA9ICd0b3AnO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBoZWlnaHQgPSA0MDA7XG4gIEBJbnB1dCgpIHBhZGRpbmc6IG51bWJlcltdID0gWzYwLCAyMCwgNDAsIDQwXTtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgYm9yZGVyV2lkdGggPSAyO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5zdGFsbCgpLCB0aGlzLmRlbGF5KTtcbiAgfVxuXG4gIHByaXZhdGUgaW5zdGFsbCgpIHtcbiAgICBjb25zdCB7IG5vZGUsIHNsaWRlck5vZGUsIGhlaWdodCwgcGFkZGluZywgbWFzayB9ID0gdGhpcztcbiAgICBjb25zdCBjaGFydCA9IHRoaXMuY2hhcnQgPSBuZXcgRzIuQ2hhcnQoe1xuICAgICAgY29udGFpbmVyOiBub2RlLm5hdGl2ZUVsZW1lbnQsXG4gICAgICBmb3JjZUZpdDogdHJ1ZSxcbiAgICAgIGhlaWdodCxcbiAgICAgIHBhZGRpbmcsXG4gICAgfSk7XG4gICAgY2hhcnQuYXhpcygneCcsIHsgdGl0bGU6IGZhbHNlIH0pO1xuICAgIGNoYXJ0LmF4aXMoJ3kxJywgeyB0aXRsZTogZmFsc2UgfSk7XG4gICAgY2hhcnQuYXhpcygneTInLCBmYWxzZSk7XG5cbiAgICBjaGFydC5saW5lKCkucG9zaXRpb24oJ3gqeTEnKTtcbiAgICBjaGFydC5saW5lKCkucG9zaXRpb24oJ3gqeTInKTtcblxuICAgIGNoYXJ0LnJlbmRlcigpO1xuXG4gICAgY29uc3Qgc2xpZGVyUGFkZGluZyA9IHsgLi4uW10sIC4uLnBhZGRpbmcgfTtcbiAgICBzbGlkZXJQYWRkaW5nWzBdID0gMDtcbiAgICBjb25zdCBzbGlkZXIgPSB0aGlzLnNsaWRlciA9IG5ldyBTbGlkZXIoe1xuICAgICAgY29udGFpbmVyOiBzbGlkZXJOb2RlLm5hdGl2ZUVsZW1lbnQsXG4gICAgICB3aWR0aDogJ2F1dG8nLFxuICAgICAgaGVpZ2h0OiAyNixcbiAgICAgIHBhZGRpbmc6IHNsaWRlclBhZGRpbmcsXG4gICAgICBzY2FsZXM6IHtcbiAgICAgICAgeDoge1xuICAgICAgICAgIHR5cGU6ICd0aW1lJyxcbiAgICAgICAgICB0aWNrQ291bnQ6IDE2LFxuICAgICAgICAgIG1hc2ssXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgYmFja2dyb3VuZENoYXJ0OiB7XG4gICAgICAgIHR5cGU6ICdsaW5lJyxcbiAgICAgIH0sXG4gICAgICB4QXhpczogJ3gnLFxuICAgICAgeUF4aXM6ICd5MScsXG4gICAgICBkYXRhOiBbXSxcbiAgICB9KTtcblxuICAgIHNsaWRlci5yZW5kZXIoKTtcblxuICAgIHRoaXMuYXR0YWNoQ2hhcnQoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXR0YWNoQ2hhcnQoKSB7XG4gICAgY29uc3QgeyBjaGFydCwgc2xpZGVyLCBoZWlnaHQsIHBhZGRpbmcsIGRhdGEsIG1hc2ssIHRpdGxlTWFwLCBwb3NpdGlvbiwgY29sb3JNYXAsIGJvcmRlcldpZHRoIH0gPSB0aGlzO1xuICAgIGlmICghY2hhcnQpIHJldHVybiA7XG5cbiAgICBjaGFydC5sZWdlbmQoe1xuICAgICAgcG9zaXRpb24sXG4gICAgICBjdXN0b206IHRydWUsXG4gICAgICBjbGlja2FibGU6IGZhbHNlLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB2YWx1ZTogdGl0bGVNYXAueTEsIGZpbGw6IGNvbG9yTWFwLnkxIH0sXG4gICAgICAgIHsgdmFsdWU6IHRpdGxlTWFwLnkyLCBmaWxsOiBjb2xvck1hcC55MiB9LFxuICAgICAgXSxcbiAgICB9KTtcblxuICAgIC8vIGJvcmRlclxuICAgIGNoYXJ0LmdldCgnZ2VvbXMnKS5mb3JFYWNoKCh2LCBpZHgpID0+IHtcbiAgICAgIHYuY29sb3IoY29sb3JNYXBbYHkke2lkeCArIDF9YF0pLnNpemUoYm9yZGVyV2lkdGgpO1xuICAgIH0pO1xuXG4gICAgZGF0YS5maWx0ZXIodiA9PiAhKHYueCBpbnN0YW5jZW9mIE51bWJlcikpLmZvckVhY2godiA9PiB7XG4gICAgICB2LnggPSArbmV3IERhdGUodi54KTtcbiAgICB9KTtcblxuICAgIGNoYXJ0LnNldCgnaGVpZ2h0JywgaGVpZ2h0KTtcbiAgICBjaGFydC5zZXQoJ3BhZGRpbmcnLCBwYWRkaW5nKTtcblxuICAgIGNvbnN0IE1BWCA9IDg7XG4gICAgY29uc3QgYmVnaW4gPSBNYXRoLmNlaWwoZGF0YS5sZW5ndGggPiBNQVggPyAoZGF0YS5sZW5ndGggLSBNQVgpIC8gMiA6IDApO1xuXG4gICAgY29uc3QgZHMgPSBuZXcgRGF0YVNldCh7XG4gICAgICBzdGF0ZToge1xuICAgICAgICBzdGFydDogZGF0YVtiZWdpbiAtIDFdLngsXG4gICAgICAgIGVuZDogZGF0YVtiZWdpbiAtIDEgKyBNQVhdLngsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGNvbnN0IGR2ID0gZHMuY3JlYXRlVmlldygpLnNvdXJjZShkYXRhKTtcbiAgICBkdi5zb3VyY2UoZGF0YSkudHJhbnNmb3JtKHtcbiAgICAgIHR5cGU6ICdmaWx0ZXInLFxuICAgICAgY2FsbGJhY2s6ICh2YWw6IEcyVGltZWxpbmVEYXRhKSA9PiB7XG4gICAgICAgIGNvbnN0IHRpbWUgPSArdmFsLng7IC8vICHms6jmhI/vvJrml7bpl7TmoLzlvI/vvIzlu7rorq7ovazmjaLkuLrml7bpl7TmiLPov5vooYzmr5TovoNcbiAgICAgICAgcmV0dXJuIHRpbWUgPj0gZHMuc3RhdGUuc3RhcnQgJiYgdGltZSA8PSBkcy5zdGF0ZS5lbmQ7XG4gICAgICB9LFxuICAgIH0pO1xuICAgIGxldCBtYXg7XG4gICAgaWYgKGRhdGFbMF0gJiYgZGF0YVswXS55MSAmJiBkYXRhWzBdLnkyKSB7XG4gICAgICBtYXggPSBNYXRoLm1heChcbiAgICAgICAgZGF0YS5zb3J0KChhLCBiKSA9PiBiLnkxIC0gYS55MSlbMF0ueTEsXG4gICAgICAgIGRhdGEuc29ydCgoYSwgYikgPT4gYi55MiAtIGEueTIpWzBdLnkyLFxuICAgICAgKTtcbiAgICB9XG4gICAgY2hhcnQuc291cmNlKGR2LCB7XG4gICAgICB4OiB7XG4gICAgICAgIHR5cGU6ICd0aW1lQ2F0JyxcbiAgICAgICAgdGlja0NvdW50OiBNQVgsXG4gICAgICAgIG1hc2ssXG4gICAgICAgIHJhbmdlOiBbMCwgMV0sXG4gICAgICB9LFxuICAgICAgeTE6IHtcbiAgICAgICAgYWxpYXM6IHRpdGxlTWFwLnkxLFxuICAgICAgICBtYXgsXG4gICAgICAgIG1pbjogMCxcbiAgICAgIH0sXG4gICAgICB5Mjoge1xuICAgICAgICBhbGlhczogdGl0bGVNYXAueTIsXG4gICAgICAgIG1heCxcbiAgICAgICAgbWluOiAwLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBjaGFydC5yZXBhaW50KCk7XG5cbiAgICBzbGlkZXIuc3RhcnQgPSBuZXcgRGF0ZShkcy5zdGF0ZS5zdGFydCk7XG4gICAgc2xpZGVyLmVuZCA9IG5ldyBEYXRlKGRzLnN0YXRlLmVuZCk7XG4gICAgc2xpZGVyLm9uQ2hhbmdlID0gKHsgc3RhcnRWYWx1ZSwgZW5kVmFsdWUgfSkgPT4ge1xuICAgICAgZHMuc2V0U3RhdGUoJ3N0YXJ0Jywgc3RhcnRWYWx1ZSk7XG4gICAgICBkcy5zZXRTdGF0ZSgnZW5kJywgZW5kVmFsdWUpO1xuICAgIH0sXG4gICAgc2xpZGVyLmNoYW5nZURhdGEoZGF0YSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLmF0dGFjaENoYXJ0KCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jaGFydCkgdGhpcy5jaGFydC5kZXN0cm95KCk7XG4gICAgaWYgKHRoaXMuc2xpZGVyKSB0aGlzLnNsaWRlci5kZXN0cm95KCk7XG4gIH1cbn1cbiJdfQ==