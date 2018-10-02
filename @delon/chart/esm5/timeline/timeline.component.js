/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
                var time = new Date(obj.x).getTime(); // !注意：时间格式，建议转换为时间戳进行比较
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
                    template: "\n  <ng-container *ngIf=\"_title; else _titleTpl\"><h4>{{_title}}</h4></ng-container>\n  <div #container></div>\n  <div #slider></div>",
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NoYXJ0L3RpbWVsaW5lLyIsInNvdXJjZXMiOlsidGltZWxpbmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUdWLE1BQU0sRUFDTixXQUFXLEVBQ1gsdUJBQXVCLEVBQ3ZCLGlCQUFpQixHQUVsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDOztJQXlFckMsNkJBQW9CLEVBQXFCLEVBQVUsSUFBWTtRQUEzQyxPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUFVLFNBQUksR0FBSixJQUFJLENBQVE7O3NCQXREdEQsRUFBRTt3QkFrQjRCLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFO29CQUd4RCxPQUFPO3dCQUUwQixLQUFLO3VCQVNuQyxHQUFHO3VCQUdELENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDOzRCQU1iLENBQUM7d0JBVUwsS0FBSztLQUcyQztJQXBEbkUsc0JBQ0ksc0NBQUs7Ozs7O1FBRFQsVUFDVSxLQUFnQztZQUN4QyxJQUFJLEtBQUssWUFBWSxXQUFXLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQzthQUN4QjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzthQUNyQjtZQUNELElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDekI7OztPQUFBO0lBY0Qsc0JBQ0ksdUNBQU07Ozs7UUFEVjtZQUVFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUNyQjs7Ozs7UUFDRCxVQUFXLEtB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QkFDcEIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLG1CQUFtQixFQUFFLEtBQUs7aUJBQzNCOzs7O2dCQWpCQyxpQkFBaUI7Z0JBSGpCLE1BQU07Ozt3QkEyQkwsS0FBSzt1QkFXTCxLQUFLOzJCQUVMLEtBQUs7MkJBRUwsS0FBSzt1QkFHTCxLQUFLOzJCQUVMLEtBQUs7eUJBR0wsS0FBSzswQkFTTCxLQUFLOzhCQUdMLEtBQUs7dUJBUUwsU0FBUyxTQUFDLFdBQVc7NkJBRXJCLFNBQVMsU0FBQyxRQUFROzs4QkEvRXJCOztTQTRCYSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBWaWV3Q2hpbGQsXHJcbiAgRWxlbWVudFJlZixcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE5nWm9uZSxcclxuICBUZW1wbGF0ZVJlZixcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBBZnRlclZpZXdJbml0LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyB0b051bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsJztcclxuXHJcbmRlY2xhcmUgdmFyIEcyOiBhbnk7XHJcbmRlY2xhcmUgdmFyIERhdGFTZXQ6IGFueTtcclxuZGVjbGFyZSB2YXIgU2xpZGVyOiBhbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2cyLXRpbWVsaW5lJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJfdGl0bGU7IGVsc2UgX3RpdGxlVHBsXCI+PGg0Pnt7X3RpdGxlfX08L2g0PjwvbmctY29udGFpbmVyPlxyXG4gIDxkaXYgI2NvbnRhaW5lcj48L2Rpdj5cclxuICA8ZGl2ICNzbGlkZXI+PC9kaXY+YCxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEcyVGltZWxpbmVDb21wb25lbnRcclxuICBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0IHtcclxuICAvLyAjcmVnaW9uIGZpZWxkc1xyXG5cclxuICBfdGl0bGUgPSAnJztcclxuICBfdGl0bGVUcGw6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgQElucHV0KClcclxuICBzZXQgdGl0bGUodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4pIHtcclxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XHJcbiAgICAgIHRoaXMuX3RpdGxlID0gbnVsbDtcclxuICAgICAgdGhpcy5fdGl0bGVUcGwgPSB2YWx1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX3RpdGxlID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZGF0YTogQXJyYXk8eyB4OiBEYXRlOyB5MTogbnVtYmVyOyB5MjogbnVtYmVyOyBba2V5OiBzdHJpbmddOiBhbnkgfT47XHJcbiAgQElucHV0KClcclxuICB0aXRsZU1hcDogeyB5MTogc3RyaW5nOyB5Mjogc3RyaW5nIH07XHJcbiAgQElucHV0KClcclxuICBjb2xvck1hcDogeyB5MTogc3RyaW5nOyB5Mjogc3RyaW5nIH0gPSB7IHkxOiAnIzE4OTBGRicsIHkyOiAnIzJGQzI1QicgfTtcclxuXHJcbiAgQElucHV0KClcclxuICBtYXNrOiBzdHJpbmcgPSAnSEg6bW0nO1xyXG4gIEBJbnB1dCgpXHJcbiAgcG9zaXRpb246ICd0b3AnIHwgJ3JpZ2h0JyB8ICdib3R0b20nIHwgJ2xlZnQnID0gJ3RvcCc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IGhlaWdodCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9oZWlnaHQ7XHJcbiAgfVxyXG4gIHNldCBoZWlnaHQodmFsdWU6IGFueSkge1xyXG4gICAgdGhpcy5faGVpZ2h0ID0gdG9OdW1iZXIodmFsdWUpO1xyXG4gIH1cclxuICBwcml2YXRlIF9oZWlnaHQgPSA0MDA7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcGFkZGluZzogbnVtYmVyW10gPSBbNjAsIDIwLCA0MCwgNDBdO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBib3JkZXJXaWR0aCh2YWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLl9ib3JkZXJXaWR0aCA9IHRvTnVtYmVyKHZhbHVlKTtcclxuICB9XHJcbiAgcHJpdmF0ZSBfYm9yZGVyV2lkdGggPSAyO1xyXG5cclxuICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicpXHJcbiAgcHJpdmF0ZSBub2RlOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ3NsaWRlcicpXHJcbiAgcHJpdmF0ZSBzbGlkZXJOb2RlOiBFbGVtZW50UmVmO1xyXG5cclxuICBwcml2YXRlIGNoYXJ0OiBhbnk7XHJcbiAgcHJpdmF0ZSBpbml0RmxhZyA9IGZhbHNlO1xyXG4gIHByaXZhdGUgc2xpZGVyOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIHpvbmU6IE5nWm9uZSkge31cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pbml0RmxhZyA9IHRydWU7XHJcbiAgICB0aGlzLnJ1bkluc3RhbGwoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcnVuSW5zdGFsbCgpIHtcclxuICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5zdGFsbCgpKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluc3RhbGwoKSB7XHJcbiAgICBpZiAoIXRoaXMuZGF0YSB8fCAodGhpcy5kYXRhICYmIHRoaXMuZGF0YS5sZW5ndGggPCAxKSkgcmV0dXJuO1xyXG5cclxuICAgIC8vIGNsZWFuXHJcbiAgICB0aGlzLnVuaW5zdGFsbCgpO1xyXG4gICAgdGhpcy5zbGlkZXJOb2RlLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICB0aGlzLm5vZGUubmF0aXZlRWxlbWVudC5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICBjb25zdCBNQVggPSA4O1xyXG4gICAgY29uc3QgYmVnaW4gPSB0aGlzLmRhdGEubGVuZ3RoID4gTUFYID8gKHRoaXMuZGF0YS5sZW5ndGggLSBNQVgpIC8gMiA6IDA7XHJcblxyXG4gICAgY29uc3QgZHMgPSBuZXcgRGF0YVNldCh7XHJcbiAgICAgIHN0YXRlOiB7XHJcbiAgICAgICAgc3RhcnQ6IHRoaXMuZGF0YVtiZWdpbiAtIDFdLngsXHJcbiAgICAgICAgZW5kOiB0aGlzLmRhdGFbYmVnaW4gLSAxICsgTUFYXS54LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBkdiA9IGRzLmNyZWF0ZVZpZXcoKS5zb3VyY2UodGhpcy5kYXRhKTtcclxuICAgIGR2LnNvdXJjZSh0aGlzLmRhdGEpLnRyYW5zZm9ybSh7XHJcbiAgICAgIHR5cGU6ICdmaWx0ZXInLFxyXG4gICAgICBjYWxsYmFjayhvYmopIHtcclxuICAgICAgICBjb25zdCB0aW1lID0gbmV3IERhdGUob2JqLngpLmdldFRpbWUoKTsgLy8gIeazqOaEj++8muaXtumXtOagvOW8j++8jOW7uuiurui9rOaNouS4uuaXtumXtOaIs+i/m+ihjOavlOi+g1xyXG4gICAgICAgIHJldHVybiB0aW1lID49IGRzLnN0YXRlLnN0YXJ0ICYmIHRpbWUgPD0gZHMuc3RhdGUuZW5kO1xyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgY2hhcnQgPSBuZXcgRzIuQ2hhcnQoe1xyXG4gICAgICBjb250YWluZXI6IHRoaXMubm9kZS5uYXRpdmVFbGVtZW50LFxyXG4gICAgICBmb3JjZUZpdDogdHJ1ZSxcclxuICAgICAgaGVpZ2h0OiArdGhpcy5oZWlnaHQsXHJcbiAgICAgIHBhZGRpbmc6IHRoaXMucGFkZGluZyxcclxuICAgIH0pO1xyXG4gICAgY2hhcnQuYXhpcygneCcsIHsgdGl0bGU6IGZhbHNlIH0pO1xyXG4gICAgY2hhcnQuYXhpcygneTEnLCB7XHJcbiAgICAgIHRpdGxlOiBmYWxzZSxcclxuICAgIH0pO1xyXG4gICAgY2hhcnQuYXhpcygneTInLCBmYWxzZSk7XHJcblxyXG4gICAgbGV0IG1heDtcclxuICAgIGlmICh0aGlzLmRhdGFbMF0gJiYgdGhpcy5kYXRhWzBdLnkxICYmIHRoaXMuZGF0YVswXS55Mikge1xyXG4gICAgICBtYXggPSBNYXRoLm1heChcclxuICAgICAgICB0aGlzLmRhdGEuc29ydCgoYSwgYikgPT4gYi55MSAtIGEueTEpWzBdLnkxLFxyXG4gICAgICAgIHRoaXMuZGF0YS5zb3J0KChhLCBiKSA9PiBiLnkyIC0gYS55MilbMF0ueTIsXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBjaGFydC5zb3VyY2UoZHYsIHtcclxuICAgICAgeDoge1xyXG4gICAgICAgIHR5cGU6ICd0aW1lQ2F0JyxcclxuICAgICAgICB0aWNrQ291bnQ6IE1BWCxcclxuICAgICAgICBtYXNrOiB0aGlzLm1hc2ssXHJcbiAgICAgICAgcmFuZ2U6IFswLCAxXSxcclxuICAgICAgfSxcclxuICAgICAgeTE6IHtcclxuICAgICAgICBhbGlhczogdGhpcy50aXRsZU1hcC55MSxcclxuICAgICAgICBtYXgsXHJcbiAgICAgICAgbWluOiAwLFxyXG4gICAgICB9LFxyXG4gICAgICB5Mjoge1xyXG4gICAgICAgIGFsaWFzOiB0aGlzLnRpdGxlTWFwLnkyLFxyXG4gICAgICAgIG1heCxcclxuICAgICAgICBtaW46IDAsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBjaGFydC5sZWdlbmQoe1xyXG4gICAgICBwb3NpdGlvbjogdGhpcy5wb3NpdGlvbixcclxuICAgICAgY3VzdG9tOiB0cnVlLFxyXG4gICAgICBjbGlja2FibGU6IGZhbHNlLFxyXG4gICAgICBpdGVtczogW1xyXG4gICAgICAgIHsgdmFsdWU6IHRoaXMudGl0bGVNYXAueTEsIGZpbGw6IHRoaXMuY29sb3JNYXAueTEgfSxcclxuICAgICAgICB7IHZhbHVlOiB0aGlzLnRpdGxlTWFwLnkyLCBmaWxsOiB0aGlzLmNvbG9yTWFwLnkyIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBjaGFydFxyXG4gICAgICAubGluZSgpXHJcbiAgICAgIC5wb3NpdGlvbigneCp5MScpXHJcbiAgICAgIC5jb2xvcih0aGlzLmNvbG9yTWFwLnkxKVxyXG4gICAgICAuc2l6ZSh0aGlzLl9ib3JkZXJXaWR0aCk7XHJcbiAgICBjaGFydFxyXG4gICAgICAubGluZSgpXHJcbiAgICAgIC5wb3NpdGlvbigneCp5MicpXHJcbiAgICAgIC5jb2xvcih0aGlzLmNvbG9yTWFwLnkyKVxyXG4gICAgICAuc2l6ZSh0aGlzLl9ib3JkZXJXaWR0aCk7XHJcbiAgICBjaGFydC5yZW5kZXIoKTtcclxuXHJcbiAgICBjb25zdCBzbGlkZXJQYWRkaW5nID0gT2JqZWN0LmFzc2lnbihbXSwgdGhpcy5wYWRkaW5nKTtcclxuICAgIHNsaWRlclBhZGRpbmdbMF0gPSAwO1xyXG4gICAgY29uc3Qgc2xpZGVyID0gbmV3IFNsaWRlcih7XHJcbiAgICAgIGNvbnRhaW5lcjogdGhpcy5zbGlkZXJOb2RlLm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgIGhlaWdodDogMjYsXHJcbiAgICAgIHBhZGRpbmc6IHNsaWRlclBhZGRpbmcsXHJcbiAgICAgIHNjYWxlczoge1xyXG4gICAgICAgIHg6IHtcclxuICAgICAgICAgIHR5cGU6ICd0aW1lJyxcclxuICAgICAgICAgIHRpY2tDb3VudDogMTYsXHJcbiAgICAgICAgICBtYXNrOiB0aGlzLm1hc2ssXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgYmFja2dyb3VuZENoYXJ0OiB7XHJcbiAgICAgICAgdHlwZTogJ2xpbmUnLFxyXG4gICAgICB9LFxyXG4gICAgICBzdGFydDogZHMuc3RhdGUuc3RhcnQsXHJcbiAgICAgIGVuZDogZHMuc3RhdGUuZW5kLFxyXG4gICAgICB4QXhpczogJ3gnLFxyXG4gICAgICB5QXhpczogJ3kxJyxcclxuICAgICAgZGF0YTogdGhpcy5kYXRhLFxyXG4gICAgICBvbkNoYW5nZSh7IHN0YXJ0VmFsdWUsIGVuZFZhbHVlIH0pIHtcclxuICAgICAgICBkcy5zZXRTdGF0ZSgnc3RhcnQnLCBzdGFydFZhbHVlKTtcclxuICAgICAgICBkcy5zZXRTdGF0ZSgnZW5kJywgZW5kVmFsdWUpO1xyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBzbGlkZXIucmVuZGVyKCk7XHJcblxyXG4gICAgdGhpcy5jaGFydCA9IGNoYXJ0O1xyXG4gICAgdGhpcy5zbGlkZXIgPSBzbGlkZXI7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVuaW5zdGFsbCgpIHtcclxuICAgIGlmICh0aGlzLmNoYXJ0KSB0aGlzLmNoYXJ0LmRlc3Ryb3koKTtcclxuICAgIGlmICh0aGlzLnNsaWRlcikgdGhpcy5zbGlkZXIuZGVzdHJveSgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pbml0RmxhZykgdGhpcy5ydW5JbnN0YWxsKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMudW5pbnN0YWxsKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==