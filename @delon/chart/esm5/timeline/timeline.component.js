/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, ElementRef, NgZone, TemplateRef, ChangeDetectionStrategy, ChangeDetectorRef, } from '@angular/core';
import { toNumber } from '@delon/util';
var G2TimelineComponent = /** @class */ (function () {
    function G2TimelineComponent(cd, zone) {
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
    Object.defineProperty(G2TimelineComponent.prototype, "title", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value instanceof TemplateRef) {
                this._title = null;
                this._titleTpl = value;
            }
            else {
                this._title = value;
            }
            this.cd.detectChanges();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G2TimelineComponent.prototype, "height", {
        get: /**
         * @return {?}
         */
        function () {
            return this._height;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._height = toNumber(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G2TimelineComponent.prototype, "borderWidth", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._borderWidth = toNumber(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    G2TimelineComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.initFlag = true;
        this.runInstall();
    };
    /**
     * @return {?}
     */
    G2TimelineComponent.prototype.runInstall = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.zone.runOutsideAngular(function () { return setTimeout(function () { return _this.install(); }); });
    };
    /**
     * @return {?}
     */
    G2TimelineComponent.prototype.install = /**
     * @return {?}
     */
    function () {
        if (!this.data || (this.data && this.data.length < 1))
            return;
        // clean
        this.uninstall();
        this.sliderNode.nativeElement.innerHTML = '';
        this.node.nativeElement.innerHTML = '';
        /** @type {?} */
        var MAX = 8;
        /** @type {?} */
        var begin = this.data.length > MAX ? (this.data.length - MAX) / 2 : 0;
        /** @type {?} */
        var ds = new DataSet({
            state: {
                start: this.data[begin - 1].x,
                end: this.data[begin - 1 + MAX].x,
            },
        });
        /** @type {?} */
        var dv = ds.createView().source(this.data);
        dv.source(this.data).transform({
            type: 'filter',
            callback: /**
             * @param {?} obj
             * @return {?}
             */
            function (obj) {
                /** @type {?} */
                var time = new Date(obj.x).getTime();
                return time >= ds.state.start && time <= ds.state.end;
            },
        });
        /** @type {?} */
        var chart = new G2.Chart({
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
        var max;
        if (this.data[0] && this.data[0].y1 && this.data[0].y2) {
            max = Math.max(this.data.sort(function (a, b) { return b.y1 - a.y1; })[0].y1, this.data.sort(function (a, b) { return b.y2 - a.y2; })[0].y2);
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
                max: max,
                min: 0,
            },
            y2: {
                alias: this.titleMap.y2,
                max: max,
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
        var sliderPadding = Object.assign([], this.padding);
        sliderPadding[0] = 0;
        /** @type {?} */
        var slider = new Slider({
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
            onChange: /**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var startValue = _a.startValue, endValue = _a.endValue;
                ds.setState('start', startValue);
                ds.setState('end', endValue);
            },
        });
        slider.render();
        this.chart = chart;
        this.slider = slider;
    };
    /**
     * @return {?}
     */
    G2TimelineComponent.prototype.uninstall = /**
     * @return {?}
     */
    function () {
        if (this.chart)
            this.chart.destroy();
        if (this.slider)
            this.slider.destroy();
    };
    /**
     * @return {?}
     */
    G2TimelineComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (this.initFlag)
            this.runInstall();
    };
    /**
     * @return {?}
     */
    G2TimelineComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.uninstall();
    };
    G2TimelineComponent.decorators = [
        { type: Component, args: [{
                    selector: 'g2-timeline',
                    template: "<ng-container *ngIf=\"_title; else _titleTpl\">\n  <h4>{{_title}}</h4>\n</ng-container>\n<div #container></div>\n<div #slider></div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false
                }] }
    ];
    /** @nocollapse */
    G2TimelineComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: NgZone }
    ]; };
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
    return G2TimelineComponent;
}());
export { G2TimelineComponent };
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
    G2TimelineComponent.prototype._height;
    /** @type {?} */
    G2TimelineComponent.prototype.padding;
    /** @type {?} */
    G2TimelineComponent.prototype._borderWidth;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NoYXJ0L3RpbWVsaW5lLyIsInNvdXJjZXMiOlsidGltZWxpbmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUdWLE1BQU0sRUFDTixXQUFXLEVBQ1gsdUJBQXVCLEVBQ3ZCLGlCQUFpQixHQUVsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBTXZDO0lBZ0VFLDZCQUFvQixFQUFxQixFQUFVLElBQVk7UUFBM0MsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFROztRQXREL0QsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQWtCWixhQUFRLEdBQStCLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUM7UUFHeEUsU0FBSSxHQUFXLE9BQU8sQ0FBQztRQUV2QixhQUFRLEdBQXdDLEtBQUssQ0FBQztRQVM5QyxZQUFPLEdBQUcsR0FBRyxDQUFDO1FBR3RCLFlBQU8sR0FBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBTTdCLGlCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBVWpCLGFBQVEsR0FBRyxLQUFLLENBQUM7SUFHeUMsQ0FBQztJQXBEbkUsc0JBQ0ksc0NBQUs7Ozs7O1FBRFQsVUFDVSxLQUFnQztZQUN4QyxJQUFJLEtBQUssWUFBWSxXQUFXLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQzthQUN4QjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzthQUNyQjtZQUNE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QUFDO0lBQ3ZDLENBQUM7Ozs7SUFFRCx5Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7Z0JBNU1GLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsa0pBQXdDO29CQUN4QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsbUJBQW1CLEVBQUUsS0FBSztpQkFDM0I7Ozs7Z0JBZEMsaUJBQWlCO2dCQUhqQixNQUFNOzs7d0JBd0JMLEtBQUs7dUJBV0wsS0FBSzsyQkFFTCxLQUFLOzJCQUVMLEtBQUs7dUJBR0wsS0FBSzsyQkFFTCxLQUFLO3lCQUdMLEtBQUs7MEJBU0wsS0FBSzs4QkFHTCxLQUFLO3VCQVFMLFNBQVMsU0FBQyxXQUFXOzZCQUVyQixTQUFTLFNBQUMsUUFBUTs7SUFvSnJCLDBCQUFDO0NBQUEsQUE3TUQsSUE2TUM7U0F2TVksbUJBQW1COzs7SUFJOUIscUNBQVk7O0lBQ1osd0NBQTRCOztJQVk1QixtQ0FDcUU7O0lBQ3JFLHVDQUNxQzs7SUFDckMsdUNBQ3dFOztJQUV4RSxtQ0FDdUI7O0lBQ3ZCLHVDQUNzRDs7SUFTdEQsc0NBQXNCOztJQUV0QixzQ0FDcUM7O0lBTXJDLDJDQUF5Qjs7SUFJekIsbUNBQ3lCOztJQUN6Qix5Q0FDK0I7O0lBRS9CLG9DQUFtQjs7SUFDbkIsdUNBQXlCOztJQUN6QixxQ0FBb0I7O0lBRVIsaUNBQTZCOztJQUFFLG1DQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIFZpZXdDaGlsZCxcbiAgRWxlbWVudFJlZixcbiAgT25EZXN0cm95LFxuICBPbkNoYW5nZXMsXG4gIE5nWm9uZSxcbiAgVGVtcGxhdGVSZWYsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQWZ0ZXJWaWV3SW5pdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0b051bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuZGVjbGFyZSB2YXIgRzI6IGFueTtcbmRlY2xhcmUgdmFyIERhdGFTZXQ6IGFueTtcbmRlY2xhcmUgdmFyIFNsaWRlcjogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnMi10aW1lbGluZScsXG4gIHRlbXBsYXRlVXJsOiAnLi90aW1lbGluZS5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgRzJUaW1lbGluZUNvbXBvbmVudFxuICBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0IHtcbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBfdGl0bGUgPSAnJztcbiAgX3RpdGxlVHBsOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBASW5wdXQoKVxuICBzZXQgdGl0bGUodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4pIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgdGhpcy5fdGl0bGUgPSBudWxsO1xuICAgICAgdGhpcy5fdGl0bGVUcGwgPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fdGl0bGUgPSB2YWx1ZTtcbiAgICB9XG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBkYXRhOiBBcnJheTx7IHg6IERhdGU7IHkxOiBudW1iZXI7IHkyOiBudW1iZXI7IFtrZXk6IHN0cmluZ106IGFueSB9PjtcbiAgQElucHV0KClcbiAgdGl0bGVNYXA6IHsgeTE6IHN0cmluZzsgeTI6IHN0cmluZyB9O1xuICBASW5wdXQoKVxuICBjb2xvck1hcDogeyB5MTogc3RyaW5nOyB5Mjogc3RyaW5nIH0gPSB7IHkxOiAnIzE4OTBGRicsIHkyOiAnIzJGQzI1QicgfTtcblxuICBASW5wdXQoKVxuICBtYXNrOiBzdHJpbmcgPSAnSEg6bW0nO1xuICBASW5wdXQoKVxuICBwb3NpdGlvbjogJ3RvcCcgfCAncmlnaHQnIHwgJ2JvdHRvbScgfCAnbGVmdCcgPSAndG9wJztcblxuICBASW5wdXQoKVxuICBnZXQgaGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLl9oZWlnaHQ7XG4gIH1cbiAgc2V0IGhlaWdodCh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5faGVpZ2h0ID0gdG9OdW1iZXIodmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX2hlaWdodCA9IDQwMDtcblxuICBASW5wdXQoKVxuICBwYWRkaW5nOiBudW1iZXJbXSA9IFs2MCwgMjAsIDQwLCA0MF07XG5cbiAgQElucHV0KClcbiAgc2V0IGJvcmRlcldpZHRoKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl9ib3JkZXJXaWR0aCA9IHRvTnVtYmVyKHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF9ib3JkZXJXaWR0aCA9IDI7XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicpXG4gIHByaXZhdGUgbm9kZTogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnc2xpZGVyJylcbiAgcHJpdmF0ZSBzbGlkZXJOb2RlOiBFbGVtZW50UmVmO1xuXG4gIHByaXZhdGUgY2hhcnQ6IGFueTtcbiAgcHJpdmF0ZSBpbml0RmxhZyA9IGZhbHNlO1xuICBwcml2YXRlIHNsaWRlcjogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIHpvbmU6IE5nWm9uZSkge31cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pbml0RmxhZyA9IHRydWU7XG4gICAgdGhpcy5ydW5JbnN0YWxsKCk7XG4gIH1cblxuICBwcml2YXRlIHJ1bkluc3RhbGwoKSB7XG4gICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5pbnN0YWxsKCkpKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5zdGFsbCgpIHtcbiAgICBpZiAoIXRoaXMuZGF0YSB8fCAodGhpcy5kYXRhICYmIHRoaXMuZGF0YS5sZW5ndGggPCAxKSkgcmV0dXJuO1xuXG4gICAgLy8gY2xlYW5cbiAgICB0aGlzLnVuaW5zdGFsbCgpO1xuICAgIHRoaXMuc2xpZGVyTm9kZS5uYXRpdmVFbGVtZW50LmlubmVySFRNTCA9ICcnO1xuICAgIHRoaXMubm9kZS5uYXRpdmVFbGVtZW50LmlubmVySFRNTCA9ICcnO1xuXG4gICAgY29uc3QgTUFYID0gODtcbiAgICBjb25zdCBiZWdpbiA9IHRoaXMuZGF0YS5sZW5ndGggPiBNQVggPyAodGhpcy5kYXRhLmxlbmd0aCAtIE1BWCkgLyAyIDogMDtcblxuICAgIGNvbnN0IGRzID0gbmV3IERhdGFTZXQoe1xuICAgICAgc3RhdGU6IHtcbiAgICAgICAgc3RhcnQ6IHRoaXMuZGF0YVtiZWdpbiAtIDFdLngsXG4gICAgICAgIGVuZDogdGhpcy5kYXRhW2JlZ2luIC0gMSArIE1BWF0ueCxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgY29uc3QgZHYgPSBkcy5jcmVhdGVWaWV3KCkuc291cmNlKHRoaXMuZGF0YSk7XG4gICAgZHYuc291cmNlKHRoaXMuZGF0YSkudHJhbnNmb3JtKHtcbiAgICAgIHR5cGU6ICdmaWx0ZXInLFxuICAgICAgY2FsbGJhY2sob2JqKSB7XG4gICAgICAgIGNvbnN0IHRpbWUgPSBuZXcgRGF0ZShvYmoueCkuZ2V0VGltZSgpOyAvLyAh5rOo5oSP77ya5pe26Ze05qC85byP77yM5bu66K6u6L2s5o2i5Li65pe26Ze05oiz6L+b6KGM5q+U6L6DXG4gICAgICAgIHJldHVybiB0aW1lID49IGRzLnN0YXRlLnN0YXJ0ICYmIHRpbWUgPD0gZHMuc3RhdGUuZW5kO1xuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGNoYXJ0ID0gbmV3IEcyLkNoYXJ0KHtcbiAgICAgIGNvbnRhaW5lcjogdGhpcy5ub2RlLm5hdGl2ZUVsZW1lbnQsXG4gICAgICBmb3JjZUZpdDogdHJ1ZSxcbiAgICAgIGhlaWdodDogK3RoaXMuaGVpZ2h0LFxuICAgICAgcGFkZGluZzogdGhpcy5wYWRkaW5nLFxuICAgIH0pO1xuICAgIGNoYXJ0LmF4aXMoJ3gnLCB7IHRpdGxlOiBmYWxzZSB9KTtcbiAgICBjaGFydC5heGlzKCd5MScsIHtcbiAgICAgIHRpdGxlOiBmYWxzZSxcbiAgICB9KTtcbiAgICBjaGFydC5heGlzKCd5MicsIGZhbHNlKTtcblxuICAgIGxldCBtYXg7XG4gICAgaWYgKHRoaXMuZGF0YVswXSAmJiB0aGlzLmRhdGFbMF0ueTEgJiYgdGhpcy5kYXRhWzBdLnkyKSB7XG4gICAgICBtYXggPSBNYXRoLm1heChcbiAgICAgICAgdGhpcy5kYXRhLnNvcnQoKGEsIGIpID0+IGIueTEgLSBhLnkxKVswXS55MSxcbiAgICAgICAgdGhpcy5kYXRhLnNvcnQoKGEsIGIpID0+IGIueTIgLSBhLnkyKVswXS55MixcbiAgICAgICk7XG4gICAgfVxuICAgIGNoYXJ0LnNvdXJjZShkdiwge1xuICAgICAgeDoge1xuICAgICAgICB0eXBlOiAndGltZUNhdCcsXG4gICAgICAgIHRpY2tDb3VudDogTUFYLFxuICAgICAgICBtYXNrOiB0aGlzLm1hc2ssXG4gICAgICAgIHJhbmdlOiBbMCwgMV0sXG4gICAgICB9LFxuICAgICAgeTE6IHtcbiAgICAgICAgYWxpYXM6IHRoaXMudGl0bGVNYXAueTEsXG4gICAgICAgIG1heCxcbiAgICAgICAgbWluOiAwLFxuICAgICAgfSxcbiAgICAgIHkyOiB7XG4gICAgICAgIGFsaWFzOiB0aGlzLnRpdGxlTWFwLnkyLFxuICAgICAgICBtYXgsXG4gICAgICAgIG1pbjogMCxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBjaGFydC5sZWdlbmQoe1xuICAgICAgcG9zaXRpb246IHRoaXMucG9zaXRpb24sXG4gICAgICBjdXN0b206IHRydWUsXG4gICAgICBjbGlja2FibGU6IGZhbHNlLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB2YWx1ZTogdGhpcy50aXRsZU1hcC55MSwgZmlsbDogdGhpcy5jb2xvck1hcC55MSB9LFxuICAgICAgICB7IHZhbHVlOiB0aGlzLnRpdGxlTWFwLnkyLCBmaWxsOiB0aGlzLmNvbG9yTWFwLnkyIH0sXG4gICAgICBdLFxuICAgIH0pO1xuXG4gICAgY2hhcnRcbiAgICAgIC5saW5lKClcbiAgICAgIC5wb3NpdGlvbigneCp5MScpXG4gICAgICAuY29sb3IodGhpcy5jb2xvck1hcC55MSlcbiAgICAgIC5zaXplKHRoaXMuX2JvcmRlcldpZHRoKTtcbiAgICBjaGFydFxuICAgICAgLmxpbmUoKVxuICAgICAgLnBvc2l0aW9uKCd4KnkyJylcbiAgICAgIC5jb2xvcih0aGlzLmNvbG9yTWFwLnkyKVxuICAgICAgLnNpemUodGhpcy5fYm9yZGVyV2lkdGgpO1xuICAgIGNoYXJ0LnJlbmRlcigpO1xuXG4gICAgY29uc3Qgc2xpZGVyUGFkZGluZyA9IE9iamVjdC5hc3NpZ24oW10sIHRoaXMucGFkZGluZyk7XG4gICAgc2xpZGVyUGFkZGluZ1swXSA9IDA7XG4gICAgY29uc3Qgc2xpZGVyID0gbmV3IFNsaWRlcih7XG4gICAgICBjb250YWluZXI6IHRoaXMuc2xpZGVyTm9kZS5uYXRpdmVFbGVtZW50LFxuICAgICAgaGVpZ2h0OiAyNixcbiAgICAgIHBhZGRpbmc6IHNsaWRlclBhZGRpbmcsXG4gICAgICBzY2FsZXM6IHtcbiAgICAgICAgeDoge1xuICAgICAgICAgIHR5cGU6ICd0aW1lJyxcbiAgICAgICAgICB0aWNrQ291bnQ6IDE2LFxuICAgICAgICAgIG1hc2s6IHRoaXMubWFzayxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBiYWNrZ3JvdW5kQ2hhcnQ6IHtcbiAgICAgICAgdHlwZTogJ2xpbmUnLFxuICAgICAgfSxcbiAgICAgIHN0YXJ0OiBkcy5zdGF0ZS5zdGFydCxcbiAgICAgIGVuZDogZHMuc3RhdGUuZW5kLFxuICAgICAgeEF4aXM6ICd4JyxcbiAgICAgIHlBeGlzOiAneTEnLFxuICAgICAgZGF0YTogdGhpcy5kYXRhLFxuICAgICAgb25DaGFuZ2UoeyBzdGFydFZhbHVlLCBlbmRWYWx1ZSB9KSB7XG4gICAgICAgIGRzLnNldFN0YXRlKCdzdGFydCcsIHN0YXJ0VmFsdWUpO1xuICAgICAgICBkcy5zZXRTdGF0ZSgnZW5kJywgZW5kVmFsdWUpO1xuICAgICAgfSxcbiAgICB9KTtcbiAgICBzbGlkZXIucmVuZGVyKCk7XG5cbiAgICB0aGlzLmNoYXJ0ID0gY2hhcnQ7XG4gICAgdGhpcy5zbGlkZXIgPSBzbGlkZXI7XG4gIH1cblxuICBwcml2YXRlIHVuaW5zdGFsbCgpIHtcbiAgICBpZiAodGhpcy5jaGFydCkgdGhpcy5jaGFydC5kZXN0cm95KCk7XG4gICAgaWYgKHRoaXMuc2xpZGVyKSB0aGlzLnNsaWRlci5kZXN0cm95KCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pbml0RmxhZykgdGhpcy5ydW5JbnN0YWxsKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnVuaW5zdGFsbCgpO1xuICB9XG59XG4iXX0=