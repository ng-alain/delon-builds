/**
 * @fileoverview added by tsickle
 * Generated from: timeline.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __assign, __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, NgZone, ViewChild, ViewEncapsulation, } from '@angular/core';
import { Chart } from '@antv/g2';
import { deprecation10, InputBoolean, InputNumber } from '@delon/util';
var G2TimelineData = /** @class */ (function () {
    function G2TimelineData() {
    }
    return G2TimelineData;
}());
export { G2TimelineData };
if (false) {
    /**
     * 时间值
     * @deprecated Use `time` instead
     * @type {?}
     */
    G2TimelineData.prototype.x;
    /**
     * 时间值
     * @type {?}
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
    /* Skipping unhandled member: [key: string]: any;*/
}
var G2TimelineComponent = /** @class */ (function () {
    // #endregion
    function G2TimelineComponent(ngZone) {
        this.ngZone = ngZone;
        // #region fields
        this.delay = 0;
        this.data = [];
        this.colorMap = { y1: '#1890FF', y2: '#2FC25B' };
        this.mask = 'HH:mm';
        this.position = 'top';
        this.height = 450;
        this.padding = [60, 20, 64, 40];
        this.borderWidth = 2;
        this.slider = true;
        this.initialRange = null;
    }
    /**
     * @return {?}
     */
    G2TimelineComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () { return setTimeout((/**
         * @return {?}
         */
        function () { return _this.install(); }), _this.delay); }));
    };
    /**
     * @private
     * @return {?}
     */
    G2TimelineComponent.prototype.install = /**
     * @private
     * @return {?}
     */
    function () {
        var _a = this, node = _a.node, height = _a.height, padding = _a.padding, slider = _a.slider;
        /** @type {?} */
        var chart = (this.chart = new Chart({
            container: node.nativeElement,
            autoFit: true,
            height: height,
            padding: padding,
        }));
        chart.axis('time', { title: null });
        chart.axis('y1', { title: null });
        chart.axis('y2', false);
        chart.line().position('time*y1');
        chart.line().position('time*y2');
        /** @type {?} */
        var sliderPadding = __assign(__assign({}, []), padding);
        sliderPadding[0] = 0;
        if (slider) {
            chart.option('slider', {
                height: 26,
                start: 0.1,
                end: 0.8,
                trendCfg: {
                    isArea: false,
                },
                minLimit: 2,
            });
        }
        this.attachChart();
    };
    /**
     * @private
     * @return {?}
     */
    G2TimelineComponent.prototype.attachChart = /**
     * @private
     * @return {?}
     */
    function () {
        var _a = this, chart = _a.chart, height = _a.height, padding = _a.padding, data = _a.data, mask = _a.mask, titleMap = _a.titleMap, position = _a.position, colorMap = _a.colorMap, borderWidth = _a.borderWidth;
        if (!chart || !data || data.length <= 0)
            return;
        chart.legend({
            position: position,
            custom: true,
            items: [
                { name: titleMap.y1, value: titleMap.y1, marker: { style: { fill: colorMap.y1 } } },
                { name: titleMap.y1, value: titleMap.y2, marker: { style: { fill: colorMap.y2 } } },
            ],
        });
        // border
        chart.geometries.forEach((/**
         * @param {?} v
         * @param {?} idx
         * @return {?}
         */
        function (v, idx) {
            v.color(((/** @type {?} */ (colorMap)))["y" + (idx + 1)]).size(borderWidth);
        }));
        chart.height = height;
        chart.padding = padding;
        // TODO: compatible
        if (data.find((/**
         * @param {?} w
         * @return {?}
         */
        function (w) { return !!w.x; })) != null) {
            deprecation10('g2-timeline', 'x', 'time');
            data.forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                item.time = new Date((/** @type {?} */ (item.x)));
            }));
        }
        /** @type {?} */
        var max = Math.max(data.sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        function (a, b) { return b.y1 - a.y1; }))[0].y1, data.sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        function (a, b) { return b.y2 - a.y2; }))[0].y2);
        chart.scale({
            time: {
                type: 'time',
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
        /** @type {?} */
        var initialRange = __assign({ start: new Date((/** @type {?} */ (data[0].time))), end: new Date((/** @type {?} */ (data[data.length - 1].time))) }, this.initialRange);
        chart.changeData(data.filter((/**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            /** @type {?} */
            var time = +new Date((/** @type {?} */ (val.time)));
            return time >= +initialRange.start && time <= +initialRange.end;
        })));
    };
    /**
     * @return {?}
     */
    G2TimelineComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () { return _this.attachChart(); }));
    };
    /**
     * @return {?}
     */
    G2TimelineComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.chart) {
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () { return _this.chart.destroy(); }));
        }
    };
    G2TimelineComponent.decorators = [
        { type: Component, args: [{
                    selector: 'g2-timeline',
                    exportAs: 'g2Timeline',
                    template: "<ng-container *nzStringTemplateOutlet=\"title\">\n  <h4>{{title}}</h4>\n</ng-container>\n<div #container></div>\n",
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    G2TimelineComponent.ctorParameters = function () { return [
        { type: NgZone }
    ]; };
    G2TimelineComponent.propDecorators = {
        node: [{ type: ViewChild, args: ['container', { static: false },] }],
        delay: [{ type: Input }],
        title: [{ type: Input }],
        data: [{ type: Input }],
        titleMap: [{ type: Input }],
        colorMap: [{ type: Input }],
        mask: [{ type: Input }],
        position: [{ type: Input }],
        height: [{ type: Input }],
        padding: [{ type: Input }],
        borderWidth: [{ type: Input }],
        slider: [{ type: Input }],
        initialRange: [{ type: Input }]
    };
    __decorate([
        InputNumber(),
        __metadata("design:type", Object)
    ], G2TimelineComponent.prototype, "delay", void 0);
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
    return G2TimelineComponent;
}());
export { G2TimelineComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    G2TimelineComponent.prototype.node;
    /**
     * @type {?}
     * @private
     */
    G2TimelineComponent.prototype.chart;
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
    /** @type {?} */
    G2TimelineComponent.prototype.slider;
    /** @type {?} */
    G2TimelineComponent.prototype.initialRange;
    /**
     * @type {?}
     * @private
     */
    G2TimelineComponent.prototype.ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NoYXJ0L3RpbWVsaW5lLyIsInNvdXJjZXMiOlsidGltZWxpbmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUtOLFNBQVMsRUFDVCxpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNqQyxPQUFPLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFHdkU7SUFBQTtJQWVBLENBQUM7SUFBRCxxQkFBQztBQUFELENBQUMsQUFmRCxJQWVDOzs7Ozs7OztJQVZDLDJCQUEyQjs7Ozs7SUFJM0IsOEJBQThCOzs7OztJQUU5Qiw0QkFBVzs7Ozs7SUFFWCw0QkFBVzs7O0FBSWI7SUEyQkUsYUFBYTtJQUViLDZCQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTs7UUFmVixVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBRXpCLFNBQUksR0FBcUIsRUFBRSxDQUFDO1FBRTVCLGFBQVEsR0FBK0IsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQztRQUN4RSxTQUFJLEdBQVcsT0FBTyxDQUFDO1FBQ3ZCLGFBQVEsR0FBd0MsS0FBSyxDQUFDO1FBQ3ZDLFdBQU0sR0FBRyxHQUFHLENBQUM7UUFDNUIsWUFBTyxHQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDdEIsZ0JBQVcsR0FBRyxDQUFDLENBQUM7UUFDZixXQUFNLEdBQUcsSUFBSSxDQUFDO1FBQzlCLGlCQUFZLEdBQXNDLElBQUksQ0FBQztJQUkzQixDQUFDOzs7O0lB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QXBCLENBQW9CLEVBQUMsQ0FBQztTQUMzRDtJQUNILENBQUM7O2dCQXhJRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLFFBQVEsRUFBRSxZQUFZO29CQUN0Qiw2SEFBd0M7b0JBQ3hDLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDdEM7Ozs7Z0JBcENDLE1BQU07Ozt1QkFzQ0wsU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7d0JBS3hDLEtBQUs7d0JBQ0wsS0FBSzt1QkFDTCxLQUFLOzJCQUNMLEtBQUs7MkJBQ0wsS0FBSzt1QkFDTCxLQUFLOzJCQUNMLEtBQUs7eUJBQ0wsS0FBSzswQkFDTCxLQUFLOzhCQUNMLEtBQUs7eUJBQ0wsS0FBSzsrQkFDTCxLQUFLOztJQVhrQjtRQUFkLFdBQVcsRUFBRTs7c0RBQVc7SUFPVjtRQUFkLFdBQVcsRUFBRTs7dURBQWM7SUFFYjtRQUFkLFdBQVcsRUFBRTs7NERBQWlCO0lBQ2Y7UUFBZixZQUFZLEVBQUU7O3VEQUFlO0lBaUh6QywwQkFBQztDQUFBLEFBeklELElBeUlDO1NBaklZLG1CQUFtQjs7Ozs7O0lBQzlCLG1DQUFvRTs7Ozs7SUFDcEUsb0NBQXFCOztJQUlyQixvQ0FBa0M7O0lBQ2xDLG9DQUEyQzs7SUFDM0MsbUNBQXFDOztJQUNyQyx1Q0FBOEM7O0lBQzlDLHVDQUFpRjs7SUFDakYsbUNBQWdDOztJQUNoQyx1Q0FBK0Q7O0lBQy9ELHFDQUFxQzs7SUFDckMsc0NBQThDOztJQUM5QywwQ0FBd0M7O0lBQ3hDLHFDQUF1Qzs7SUFDdkMsMkNBQWdFOzs7OztJQUlwRCxxQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDaGFydCB9IGZyb20gJ0BhbnR2L2cyJztcbmltcG9ydCB7IGRlcHJlY2F0aW9uMTAsIElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5leHBvcnQgY2xhc3MgRzJUaW1lbGluZURhdGEge1xuICAvKipcbiAgICog5pe26Ze05YC8XG4gICAqIEBkZXByZWNhdGVkIFVzZSBgdGltZWAgaW5zdGVhZFxuICAgKi9cbiAgeD86IERhdGUgfCBzdHJpbmcgfCBudW1iZXI7XG4gIC8qKlxuICAgKiDml7bpl7TlgLxcbiAgICovXG4gIHRpbWU/OiBEYXRlIHwgc3RyaW5nIHwgbnVtYmVyO1xuICAvKiog5oyH5qCHMeaVsOaNriAqL1xuICB5MTogbnVtYmVyO1xuICAvKiog5oyH5qCHMuaVsOaNriAqL1xuICB5MjogbnVtYmVyO1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2cyLXRpbWVsaW5lJyxcbiAgZXhwb3J0QXM6ICdnMlRpbWVsaW5lJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RpbWVsaW5lLmNvbXBvbmVudC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBHMlRpbWVsaW5lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicsIHsgc3RhdGljOiBmYWxzZSB9KSBwcml2YXRlIG5vZGU6IEVsZW1lbnRSZWY7XG4gIHByaXZhdGUgY2hhcnQ6IENoYXJ0O1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgZGVsYXkgPSAwO1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIGRhdGE6IEcyVGltZWxpbmVEYXRhW10gPSBbXTtcbiAgQElucHV0KCkgdGl0bGVNYXA6IHsgeTE6IHN0cmluZzsgeTI6IHN0cmluZyB9O1xuICBASW5wdXQoKSBjb2xvck1hcDogeyB5MTogc3RyaW5nOyB5Mjogc3RyaW5nIH0gPSB7IHkxOiAnIzE4OTBGRicsIHkyOiAnIzJGQzI1QicgfTtcbiAgQElucHV0KCkgbWFzazogc3RyaW5nID0gJ0hIOm1tJztcbiAgQElucHV0KCkgcG9zaXRpb246ICd0b3AnIHwgJ3JpZ2h0JyB8ICdib3R0b20nIHwgJ2xlZnQnID0gJ3RvcCc7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGhlaWdodCA9IDQ1MDtcbiAgQElucHV0KCkgcGFkZGluZzogbnVtYmVyW10gPSBbNjAsIDIwLCA2NCwgNDBdO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBib3JkZXJXaWR0aCA9IDI7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzbGlkZXIgPSB0cnVlO1xuICBASW5wdXQoKSBpbml0aWFsUmFuZ2U6IHsgc3RhcnQ6IERhdGU7IGVuZDogRGF0ZSB9IHwgbnVsbCA9IG51bGw7XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbmdab25lOiBOZ1pvbmUpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmluc3RhbGwoKSwgdGhpcy5kZWxheSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbnN0YWxsKCkge1xuICAgIGNvbnN0IHsgbm9kZSwgaGVpZ2h0LCBwYWRkaW5nLCBzbGlkZXIgfSA9IHRoaXM7XG4gICAgY29uc3QgY2hhcnQgPSAodGhpcy5jaGFydCA9IG5ldyBDaGFydCh7XG4gICAgICBjb250YWluZXI6IG5vZGUubmF0aXZlRWxlbWVudCxcbiAgICAgIGF1dG9GaXQ6IHRydWUsXG4gICAgICBoZWlnaHQsXG4gICAgICBwYWRkaW5nLFxuICAgIH0pKTtcbiAgICBjaGFydC5heGlzKCd0aW1lJywgeyB0aXRsZTogbnVsbCB9KTtcbiAgICBjaGFydC5heGlzKCd5MScsIHsgdGl0bGU6IG51bGwgfSk7XG4gICAgY2hhcnQuYXhpcygneTInLCBmYWxzZSk7XG5cbiAgICBjaGFydC5saW5lKCkucG9zaXRpb24oJ3RpbWUqeTEnKTtcbiAgICBjaGFydC5saW5lKCkucG9zaXRpb24oJ3RpbWUqeTInKTtcblxuICAgIGNvbnN0IHNsaWRlclBhZGRpbmcgPSB7IC4uLltdLCAuLi5wYWRkaW5nIH07XG4gICAgc2xpZGVyUGFkZGluZ1swXSA9IDA7XG4gICAgaWYgKHNsaWRlcikge1xuICAgICAgY2hhcnQub3B0aW9uKCdzbGlkZXInLCB7XG4gICAgICAgIGhlaWdodDogMjYsXG4gICAgICAgIHN0YXJ0OiAwLjEsXG4gICAgICAgIGVuZDogMC44LFxuICAgICAgICB0cmVuZENmZzoge1xuICAgICAgICAgIGlzQXJlYTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIG1pbkxpbWl0OiAyLFxuICAgICAgICAvLyBUcmFja2luZyBodHRwczovL2dpdGh1Yi5jb20vYW50dmlzL0cyL2lzc3Vlcy8yMzMyXG4gICAgICAgIC8vIG1hc2ssXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmF0dGFjaENoYXJ0KCk7XG4gIH1cblxuICBwcml2YXRlIGF0dGFjaENoYXJ0KCkge1xuICAgIGNvbnN0IHsgY2hhcnQsIGhlaWdodCwgcGFkZGluZywgZGF0YSwgbWFzaywgdGl0bGVNYXAsIHBvc2l0aW9uLCBjb2xvck1hcCwgYm9yZGVyV2lkdGggfSA9IHRoaXM7XG4gICAgaWYgKCFjaGFydCB8fCAhZGF0YSB8fCBkYXRhLmxlbmd0aCA8PSAwKSByZXR1cm47XG5cbiAgICBjaGFydC5sZWdlbmQoe1xuICAgICAgcG9zaXRpb24sXG4gICAgICBjdXN0b206IHRydWUsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IG5hbWU6IHRpdGxlTWFwLnkxLCB2YWx1ZTogdGl0bGVNYXAueTEsIG1hcmtlcjogeyBzdHlsZTogeyBmaWxsOiBjb2xvck1hcC55MSB9IH0gfSxcbiAgICAgICAgeyBuYW1lOiB0aXRsZU1hcC55MSwgdmFsdWU6IHRpdGxlTWFwLnkyLCBtYXJrZXI6IHsgc3R5bGU6IHsgZmlsbDogY29sb3JNYXAueTIgfSB9IH0sXG4gICAgICBdLFxuICAgIH0pO1xuXG4gICAgLy8gYm9yZGVyXG4gICAgY2hhcnQuZ2VvbWV0cmllcy5mb3JFYWNoKCh2LCBpZHg6IG51bWJlcikgPT4ge1xuICAgICAgdi5jb2xvcigoY29sb3JNYXAgYXMgTnpTYWZlQW55KVtgeSR7aWR4ICsgMX1gXSkuc2l6ZShib3JkZXJXaWR0aCk7XG4gICAgfSk7XG4gICAgY2hhcnQuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIGNoYXJ0LnBhZGRpbmcgPSBwYWRkaW5nO1xuXG4gICAgLy8gVE9ETzogY29tcGF0aWJsZVxuICAgIGlmIChkYXRhLmZpbmQodyA9PiAhIXcueCkgIT0gbnVsbCkge1xuICAgICAgZGVwcmVjYXRpb24xMCgnZzItdGltZWxpbmUnLCAneCcsICd0aW1lJyk7XG4gICAgICBkYXRhLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGl0ZW0udGltZSA9IG5ldyBEYXRlKGl0ZW0ueCEpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgbWF4ID0gTWF0aC5tYXgoZGF0YS5zb3J0KChhLCBiKSA9PiBiLnkxIC0gYS55MSlbMF0ueTEsIGRhdGEuc29ydCgoYSwgYikgPT4gYi55MiAtIGEueTIpWzBdLnkyKTtcbiAgICBjaGFydC5zY2FsZSh7XG4gICAgICB0aW1lOiB7XG4gICAgICAgIHR5cGU6ICd0aW1lJyxcbiAgICAgICAgbWFzayxcbiAgICAgICAgcmFuZ2U6IFswLCAxXSxcbiAgICAgIH0sXG4gICAgICB5MToge1xuICAgICAgICBhbGlhczogdGl0bGVNYXAueTEsXG4gICAgICAgIG1heCxcbiAgICAgICAgbWluOiAwLFxuICAgICAgfSxcbiAgICAgIHkyOiB7XG4gICAgICAgIGFsaWFzOiB0aXRsZU1hcC55MixcbiAgICAgICAgbWF4LFxuICAgICAgICBtaW46IDAsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGNvbnN0IGluaXRpYWxSYW5nZSA9IHtcbiAgICAgIHN0YXJ0OiBuZXcgRGF0ZShkYXRhWzBdLnRpbWUhKSxcbiAgICAgIGVuZDogbmV3IERhdGUoZGF0YVtkYXRhLmxlbmd0aCAtIDFdLnRpbWUhKSxcbiAgICAgIC4uLnRoaXMuaW5pdGlhbFJhbmdlLFxuICAgIH07XG4gICAgY2hhcnQuY2hhbmdlRGF0YShcbiAgICAgIGRhdGEuZmlsdGVyKCh2YWw6IEcyVGltZWxpbmVEYXRhKSA9PiB7XG4gICAgICAgIGNvbnN0IHRpbWUgPSArbmV3IERhdGUodmFsLnRpbWUhKTtcbiAgICAgICAgcmV0dXJuIHRpbWUgPj0gK2luaXRpYWxSYW5nZS5zdGFydCAmJiB0aW1lIDw9ICtpbml0aWFsUmFuZ2UuZW5kO1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuYXR0YWNoQ2hhcnQoKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jaGFydCkge1xuICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5jaGFydC5kZXN0cm95KCkpO1xuICAgIH1cbiAgfVxufVxuIl19