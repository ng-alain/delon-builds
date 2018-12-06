/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// tslint:disable:no-any
import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input, } from '@angular/core';
import { InputNumber } from '@delon/util';
/**
 * @record
 */
export function G2TagCloudData() { }
if (false) {
    /** @type {?} */
    G2TagCloudData.prototype.name;
    /** @type {?} */
    G2TagCloudData.prototype.value;
    /** @type {?|undefined} */
    G2TagCloudData.prototype.category;
    /* Skipping unhandled member: [key: string]: any;*/
}
var G2TagCloudComponent = /** @class */ (function () {
    // #endregion
    function G2TagCloudComponent(el) {
        this.el = el;
        // #region fields
        this.delay = 0;
        this.height = 100;
        this.padding = 0;
        this.data = [];
    }
    /**
     * @return {?}
     */
    G2TagCloudComponent.prototype.initTagCloud = /**
     * @return {?}
     */
    function () {
        // 给point注册一个词云的shape
        G2.Shape.registerShape('point', 'cloud', {
            drawShape: /**
             * @param {?} cfg
             * @param {?} container
             * @return {?}
             */
            function (cfg, container) {
                /** @type {?} */
                var attrs = tslib_1.__assign({ fillOpacity: cfg.opacity, fontSize: cfg.origin._origin.size, rotate: cfg.origin._origin.rotate, text: cfg.origin._origin.text, textAlign: 'center', fontFamily: cfg.origin._origin.font, fill: cfg.color, textBaseline: 'Alphabetic' }, cfg.style);
                return container.addShape('text', {
                    attrs: tslib_1.__assign({}, attrs, { x: cfg.x, y: cfg.y }),
                });
            },
        });
    };
    /**
     * @return {?}
     */
    G2TagCloudComponent.prototype.install = /**
     * @return {?}
     */
    function () {
        var _a = this, el = _a.el, padding = _a.padding, height = _a.height;
        /** @type {?} */
        var container = (/** @type {?} */ (el.nativeElement));
        /** @type {?} */
        var width = container.offsetWidth;
        /** @type {?} */
        var chart = this.chart = new G2.Chart({
            container: el.nativeElement,
            forceFit: true,
            padding: padding,
            width: width,
            height: height,
        });
        chart.legend(false);
        chart.axis(false);
        chart.tooltip({
            showTitle: false,
        });
        chart.coord().reflect();
        chart
            .point()
            .position('x*y')
            .color('category')
            .shape('cloud')
            .tooltip('value*category');
        chart.render();
        this.attachChart();
    };
    /**
     * @return {?}
     */
    G2TagCloudComponent.prototype.attachChart = /**
     * @return {?}
     */
    function () {
        var _a = this, chart = _a.chart, el = _a.el, height = _a.height, padding = _a.padding, data = _a.data;
        if (!chart)
            return;
        /** @type {?} */
        var container = (/** @type {?} */ (el.nativeElement));
        /** @type {?} */
        var width = container.offsetWidth;
        chart.set('height', height);
        chart.set('width', width);
        chart.set('padding', padding);
        /** @type {?} */
        var dv = new DataSet.View().source(data);
        /** @type {?} */
        var range = dv.range('value');
        /** @type {?} */
        var min = range[0];
        /** @type {?} */
        var max = range[1];
        dv.transform({
            type: 'tag-cloud',
            fields: ['x', 'value'],
            size: [width, height],
            padding: padding,
            timeInterval: 5000,
            rotate: 
            // max execute time
            /**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var random = ~~(Math.random() * 4) % 4;
                if (random === 2) {
                    random = 0;
                }
                return random * 90; // 0, 90, 270
            },
            fontSize: /**
             * @param {?} d
             * @return {?}
             */
            function (d) {
                if (d.value) {
                    return ((d.value - min) / (max - min)) * (80 - 24) + 24;
                }
                return 0;
            },
        });
        chart.source(dv, {
            x: { nice: false },
            y: { nice: false },
        });
        chart.repaint();
    };
    /**
     * @return {?}
     */
    G2TagCloudComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.initTagCloud();
        setTimeout(function () { return _this.install(); }, this.delay);
    };
    /**
     * @return {?}
     */
    G2TagCloudComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.attachChart();
    };
    /**
     * @return {?}
     */
    G2TagCloudComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.chart) {
            this.chart.destroy();
        }
    };
    G2TagCloudComponent.decorators = [
        { type: Component, args: [{
                    selector: 'g2-tag-cloud',
                    template: "",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    G2TagCloudComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    G2TagCloudComponent.propDecorators = {
        delay: [{ type: Input }],
        height: [{ type: HostBinding, args: ['style.height.px',] }, { type: Input }],
        padding: [{ type: Input }],
        data: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Object)
    ], G2TagCloudComponent.prototype, "delay", void 0);
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Object)
    ], G2TagCloudComponent.prototype, "height", void 0);
    return G2TagCloudComponent;
}());
export { G2TagCloudComponent };
if (false) {
    /** @type {?} */
    G2TagCloudComponent.prototype.chart;
    /** @type {?} */
    G2TagCloudComponent.prototype.delay;
    /** @type {?} */
    G2TagCloudComponent.prototype.height;
    /** @type {?} */
    G2TagCloudComponent.prototype.padding;
    /** @type {?} */
    G2TagCloudComponent.prototype.data;
    /** @type {?} */
    G2TagCloudComponent.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLWNsb3VkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9jaGFydC90YWctY2xvdWQvIiwic291cmNlcyI6WyJ0YWctY2xvdWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsS0FBSyxHQUlOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7QUFLMUMsb0NBS0M7OztJQUpDLDhCQUFhOztJQUNiLCtCQUFjOztJQUNkLGtDQUFlOzs7QUFJakI7SUFnQkUsYUFBYTtJQUViLDZCQUFvQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTs7UUFQVixVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ3NCLFdBQU0sR0FBRyxHQUFHLENBQUM7UUFDNUQsWUFBTyxHQUFHLENBQUMsQ0FBQztRQUNaLFNBQUksR0FBcUIsRUFBRSxDQUFDO0lBSUMsQ0FBQzs7OztJQUUvQiwwQ0FBWTs7O0lBQXBCO1FBQ0UscUJBQXFCO1FBQ3JCLEVBQUUsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUU7WUFDdkMsU0FBUzs7Ozs7c0JBQUMsR0FBRyxFQUFFLFNBQVM7O29CQUNoQixLQUFLLHNCQUNULFdBQVcsRUFBRSxHQUFHLENBQUMsT0FBTyxFQUN4QixRQUFRLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUNqQyxNQUFNLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUNqQyxJQUFJLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUM3QixTQUFTLEVBQUUsUUFBUSxFQUNuQixVQUFVLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFB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dUIsQ0FBQyxNQUFNO2lCQUNoRDs7OztnQkF2QkMsVUFBVTs7O3dCQThCVCxLQUFLO3lCQUNMLFdBQVcsU0FBQyxpQkFBaUIsY0FBRyxLQUFLOzBCQUNyQyxLQUFLO3VCQUNMLEtBQUs7O0lBSGtCO1FBQWQsV0FBVyxFQUFFOztzREFBVztJQUNzQjtRQUFkLFdBQVcsRUFBRTs7dURBQWM7SUFzSHZFLDBCQUFDO0NBQUEsQUFsSUQsSUFrSUM7U0E3SFksbUJBQW1COzs7SUFFOUIsb0NBQW1COztJQUluQixvQ0FBa0M7O0lBQ2xDLHFDQUFxRTs7SUFDckUsc0NBQXFCOztJQUNyQixtQ0FBcUM7O0lBSXpCLGlDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOm5vLWFueVxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElucHV0TnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5kZWNsYXJlIHZhciBHMjogYW55O1xuZGVjbGFyZSB2YXIgRGF0YVNldDogYW55O1xuXG5leHBvcnQgaW50ZXJmYWNlIEcyVGFnQ2xvdWREYXRhIHtcbiAgbmFtZTogc3RyaW5nO1xuICB2YWx1ZTogbnVtYmVyO1xuICBjYXRlZ29yeT86IGFueTtcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnMi10YWctY2xvdWQnLFxuICB0ZW1wbGF0ZTogYGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBHMlRhZ0Nsb3VkQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkNoYW5nZXMsIE9uSW5pdCB7XG5cbiAgcHJpdmF0ZSBjaGFydDogYW55O1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgZGVsYXkgPSAwO1xuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmhlaWdodC5weCcpIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGhlaWdodCA9IDEwMDtcbiAgQElucHV0KCkgcGFkZGluZyA9IDA7XG4gIEBJbnB1dCgpIGRhdGE6IEcyVGFnQ2xvdWREYXRhW10gPSBbXTtcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikgeyB9XG5cbiAgcHJpdmF0ZSBpbml0VGFnQ2xvdWQoKSB7XG4gICAgLy8g57uZcG9pbnTms6jlhozkuIDkuKror43kupHnmoRzaGFwZVxuICAgIEcyLlNoYXBlLnJlZ2lzdGVyU2hhcGUoJ3BvaW50JywgJ2Nsb3VkJywge1xuICAgICAgZHJhd1NoYXBlKGNmZywgY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnN0IGF0dHJzID0ge1xuICAgICAgICAgIGZpbGxPcGFjaXR5OiBjZmcub3BhY2l0eSxcbiAgICAgICAgICBmb250U2l6ZTogY2ZnLm9yaWdpbi5fb3JpZ2luLnNpemUsXG4gICAgICAgICAgcm90YXRlOiBjZmcub3JpZ2luLl9vcmlnaW4ucm90YXRlLFxuICAgICAgICAgIHRleHQ6IGNmZy5vcmlnaW4uX29yaWdpbi50ZXh0LFxuICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgZm9udEZhbWlseTogY2ZnLm9yaWdpbi5fb3JpZ2luLmZvbnQsXG4gICAgICAgICAgZmlsbDogY2ZnLmNvbG9yLFxuICAgICAgICAgIHRleHRCYXNlbGluZTogJ0FscGhhYmV0aWMnLFxuICAgICAgICAgIC4uLmNmZy5zdHlsZSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lci5hZGRTaGFwZSgndGV4dCcsIHtcbiAgICAgICAgICBhdHRyczogeyAuLi5hdHRycywgeDogY2ZnLngsIHk6IGNmZy55IH0sXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgaW5zdGFsbCgpIHtcbiAgICBjb25zdCB7IGVsLCBwYWRkaW5nLCBoZWlnaHQgfSA9IHRoaXM7XG4gICAgY29uc3QgY29udGFpbmVyID0gZWwubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCB3aWR0aCA9IGNvbnRhaW5lci5vZmZzZXRXaWR0aDtcblxuICAgIGNvbnN0IGNoYXJ0ID0gdGhpcy5jaGFydCA9IG5ldyBHMi5DaGFydCh7XG4gICAgICBjb250YWluZXI6IGVsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICBmb3JjZUZpdDogdHJ1ZSxcbiAgICAgIHBhZGRpbmcsXG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodCxcbiAgICB9KTtcbiAgICBjaGFydC5sZWdlbmQoZmFsc2UpO1xuICAgIGNoYXJ0LmF4aXMoZmFsc2UpO1xuICAgIGNoYXJ0LnRvb2x0aXAoe1xuICAgICAgc2hvd1RpdGxlOiBmYWxzZSxcbiAgICB9KTtcbiAgICBjaGFydC5jb29yZCgpLnJlZmxlY3QoKTtcbiAgICBjaGFydFxuICAgICAgLnBvaW50KClcbiAgICAgIC5wb3NpdGlvbigneCp5JylcbiAgICAgIC5jb2xvcignY2F0ZWdvcnknKVxuICAgICAgLnNoYXBlKCdjbG91ZCcpXG4gICAgICAudG9vbHRpcCgndmFsdWUqY2F0ZWdvcnknKTtcblxuICAgIGNoYXJ0LnJlbmRlcigpO1xuXG4gICAgdGhpcy5hdHRhY2hDaGFydCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBhdHRhY2hDaGFydCgpIHtcbiAgICBjb25zdCB7IGNoYXJ0LCBlbCwgaGVpZ2h0LCBwYWRkaW5nLCBkYXRhIH0gPSB0aGlzO1xuICAgIGlmICghY2hhcnQpIHJldHVybiA7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBlbC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IHdpZHRoID0gY29udGFpbmVyLm9mZnNldFdpZHRoO1xuXG4gICAgY2hhcnQuc2V0KCdoZWlnaHQnLCBoZWlnaHQpO1xuICAgIGNoYXJ0LnNldCgnd2lkdGgnLCB3aWR0aCk7XG4gICAgY2hhcnQuc2V0KCdwYWRkaW5nJywgcGFkZGluZyk7XG5cbiAgICBjb25zdCBkdiA9IG5ldyBEYXRhU2V0LlZpZXcoKS5zb3VyY2UoZGF0YSk7XG4gICAgY29uc3QgcmFuZ2UgPSBkdi5yYW5nZSgndmFsdWUnKTtcbiAgICBjb25zdCBtaW4gPSByYW5nZVswXTtcbiAgICBjb25zdCBtYXggPSByYW5nZVsxXTtcblxuICAgIGR2LnRyYW5zZm9ybSh7XG4gICAgICB0eXBlOiAndGFnLWNsb3VkJyxcbiAgICAgIGZpZWxkczogWyd4JywgJ3ZhbHVlJ10sXG4gICAgICBzaXplOiBbd2lkdGgsIGhlaWdodF0sXG4gICAgICBwYWRkaW5nLFxuICAgICAgdGltZUludGVydmFsOiA1MDAwLCAvLyBtYXggZXhlY3V0ZSB0aW1lXG4gICAgICByb3RhdGUoKSB7XG4gICAgICAgIGxldCByYW5kb20gPSB+fihNYXRoLnJhbmRvbSgpICogNCkgJSA0O1xuICAgICAgICBpZiAocmFuZG9tID09PSAyKSB7XG4gICAgICAgICAgcmFuZG9tID0gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmFuZG9tICogOTA7IC8vIDAsIDkwLCAyNzBcbiAgICAgIH0sXG4gICAgICBmb250U2l6ZShkKSB7XG4gICAgICAgIGlmIChkLnZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuICgoZC52YWx1ZSAtIG1pbikgLyAobWF4IC0gbWluKSkgKiAoODAgLSAyNCkgKyAyNDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgY2hhcnQuc291cmNlKGR2LCB7XG4gICAgICB4OiB7IG5pY2U6IGZhbHNlIH0sXG4gICAgICB5OiB7IG5pY2U6IGZhbHNlIH0sXG4gICAgfSk7XG5cbiAgICBjaGFydC5yZXBhaW50KCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmluaXRUYWdDbG91ZCgpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5pbnN0YWxsKCksIHRoaXMuZGVsYXkpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5hdHRhY2hDaGFydCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2hhcnQpIHtcbiAgICAgIHRoaXMuY2hhcnQuZGVzdHJveSgpO1xuICAgIH1cbiAgfVxufVxuIl19