/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// tslint:disable:no-any
import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input, NgZone, } from '@angular/core';
import { InputNumber } from '@delon/util';
import { fromEvent } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';
/**
 * @record
 */
export function G2TagCloudData() { }
if (false) {
    /** @type {?|undefined} */
    G2TagCloudData.prototype.x;
    /** @type {?|undefined} */
    G2TagCloudData.prototype.value;
    /** @type {?|undefined} */
    G2TagCloudData.prototype.category;
    /* Skipping unhandled member: [key: string]: any;*/
}
var G2TagCloudComponent = /** @class */ (function () {
    // #endregion
    function G2TagCloudComponent(el, ngZone) {
        this.el = el;
        this.ngZone = ngZone;
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
        var chart = (this.chart = new G2.Chart({
            container: el.nativeElement,
            padding: padding,
            height: height,
        }));
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
        var _a = this, chart = _a.chart, height = _a.height, padding = _a.padding, data = _a.data;
        if (!chart || !data || data.length <= 0)
            return;
        chart.set('height', height);
        chart.set('padding', padding);
        chart.forceFit();
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
            size: [chart.get('width'), chart.get('height')],
            padding: padding,
            timeInterval: 5000,
            // max execute time
            rotate: function () {
                /** @type {?} */
                var random = ~~(Math.random() * 4) % 4;
                if (random === 2) {
                    random = 0;
                }
                return random * 90; // 0, 90, 270
            },
            fontSize: function (d) { return (d.value ? ((d.value - min) / (max - min)) * (80 - 24) + 24 : 0); },
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
    G2TagCloudComponent.prototype._attachChart = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.ngZone.runOutsideAngular(function () { return _this.attachChart(); });
    };
    /**
     * @return {?}
     */
    G2TagCloudComponent.prototype.installResizeEvent = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.resize$ = fromEvent(window, 'resize')
            .pipe(filter(function () { return _this.chart; }), debounceTime(200))
            .subscribe(function () { return _this._attachChart(); });
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
        this.installResizeEvent();
        this.ngZone.runOutsideAngular(function () { return setTimeout(function () { return _this.install(); }, _this.delay); });
    };
    /**
     * @return {?}
     */
    G2TagCloudComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this._attachChart();
    };
    /**
     * @return {?}
     */
    G2TagCloudComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.resize$.unsubscribe();
        if (this.chart) {
            this.ngZone.runOutsideAngular(function () { return _this.chart.destroy(); });
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
        { type: ElementRef },
        { type: NgZone }
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
    G2TagCloudComponent.prototype.resize$;
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
    /** @type {?} */
    G2TagCloudComponent.prototype.ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLWNsb3VkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9jaGFydC90YWctY2xvdWQvIiwic291cmNlcyI6WyJ0YWctY2xvdWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsS0FBSyxFQUNMLE1BQU0sR0FJUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxTQUFTLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFLdEQsb0NBS0M7OztJQUpDLDJCQUFXOztJQUNYLCtCQUFlOztJQUNmLGtDQUFlOzs7QUFJakI7SUFnQkUsYUFBYTtJQUViLDZCQUFvQixFQUFjLEVBQVUsTUFBYztRQUF0QyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTs7UUFQbEMsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNzQixXQUFNLEdBQUcsR0FBRyxDQUFDO1FBQzVELFlBQU8sR0FBRyxDQUFDLENBQUM7UUFDWixTQUFJLEdBQXFCLEVBQUUsQ0FBQztJQUl3QixDQUFDOzs7O0lBRXRELDBDQUFZOzs7SUFBcEI7UUFDRSxxQkFBcUI7UUFDckIsRUFBRSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRTtZQUN2QyxTQUFTOzs7OztzQkFBQyxHQUFHLEVBQUUsU0FBUzs7b0JBQ2hCLEtBQUssc0JBQ1QsV0FBVyxFQUFFLEdBQUcsQ0FBQyxPQUFPLEVBQ3hCLFFBQVEsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQ2pDLE1BQU0sRUFBRSxHQUFHLENBQUMsTUFB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cUNBQXFFOztJQUNyRSxzQ0FBcUI7O0lBQ3JCLG1DQUFxQzs7SUFJekIsaUNBQXNCOztJQUFFLHFDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOm5vLWFueVxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmRlY2xhcmUgdmFyIEcyOiBhbnk7XG5kZWNsYXJlIHZhciBEYXRhU2V0OiBhbnk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRzJUYWdDbG91ZERhdGEge1xuICB4Pzogc3RyaW5nO1xuICB2YWx1ZT86IG51bWJlcjtcbiAgY2F0ZWdvcnk/OiBhbnk7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZzItdGFnLWNsb3VkJyxcbiAgdGVtcGxhdGU6IGBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgRzJUYWdDbG91ZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBPbkluaXQge1xuICBwcml2YXRlIHJlc2l6ZSQ6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBjaGFydDogYW55O1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgZGVsYXkgPSAwO1xuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmhlaWdodC5weCcpIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGhlaWdodCA9IDEwMDtcbiAgQElucHV0KCkgcGFkZGluZyA9IDA7XG4gIEBJbnB1dCgpIGRhdGE6IEcyVGFnQ2xvdWREYXRhW10gPSBbXTtcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSkge31cblxuICBwcml2YXRlIGluaXRUYWdDbG91ZCgpIHtcbiAgICAvLyDnu5lwb2ludOazqOWGjOS4gOS4quivjeS6keeahHNoYXBlXG4gICAgRzIuU2hhcGUucmVnaXN0ZXJTaGFwZSgncG9pbnQnLCAnY2xvdWQnLCB7XG4gICAgICBkcmF3U2hhcGUoY2ZnLCBjb250YWluZXIpIHtcbiAgICAgICAgY29uc3QgYXR0cnMgPSB7XG4gICAgICAgICAgZmlsbE9wYWNpdHk6IGNmZy5vcGFjaXR5LFxuICAgICAgICAgIGZvbnRTaXplOiBjZmcub3JpZ2luLl9vcmlnaW4uc2l6ZSxcbiAgICAgICAgICByb3RhdGU6IGNmZy5vcmlnaW4uX29yaWdpbi5yb3RhdGUsXG4gICAgICAgICAgdGV4dDogY2ZnLm9yaWdpbi5fb3JpZ2luLnRleHQsXG4gICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICBmb250RmFtaWx5OiBjZmcub3JpZ2luLl9vcmlnaW4uZm9udCxcbiAgICAgICAgICBmaWxsOiBjZmcuY29sb3IsXG4gICAgICAgICAgdGV4dEJhc2VsaW5lOiAnQWxwaGFiZXRpYycsXG4gICAgICAgICAgLi4uY2ZnLnN0eWxlLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gY29udGFpbmVyLmFkZFNoYXBlKCd0ZXh0Jywge1xuICAgICAgICAgIGF0dHJzOiB7IC4uLmF0dHJzLCB4OiBjZmcueCwgeTogY2ZnLnkgfSxcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBpbnN0YWxsKCkge1xuICAgIGNvbnN0IHsgZWwsIHBhZGRpbmcsIGhlaWdodCB9ID0gdGhpcztcblxuICAgIGNvbnN0IGNoYXJ0ID0gKHRoaXMuY2hhcnQgPSBuZXcgRzIuQ2hhcnQoe1xuICAgICAgY29udGFpbmVyOiBlbC5uYXRpdmVFbGVtZW50LFxuICAgICAgcGFkZGluZyxcbiAgICAgIGhlaWdodCxcbiAgICB9KSk7XG4gICAgY2hhcnQubGVnZW5kKGZhbHNlKTtcbiAgICBjaGFydC5heGlzKGZhbHNlKTtcbiAgICBjaGFydC50b29sdGlwKHtcbiAgICAgIHNob3dUaXRsZTogZmFsc2UsXG4gICAgfSk7XG4gICAgY2hhcnQuY29vcmQoKS5yZWZsZWN0KCk7XG4gICAgY2hhcnRcbiAgICAgIC5wb2ludCgpXG4gICAgICAucG9zaXRpb24oJ3gqeScpXG4gICAgICAuY29sb3IoJ2NhdGVnb3J5JylcbiAgICAgIC5zaGFwZSgnY2xvdWQnKVxuICAgICAgLnRvb2x0aXAoJ3ZhbHVlKmNhdGVnb3J5Jyk7XG5cbiAgICBjaGFydC5yZW5kZXIoKTtcblxuICAgIHRoaXMuYXR0YWNoQ2hhcnQoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXR0YWNoQ2hhcnQoKSB7XG4gICAgY29uc3QgeyBjaGFydCwgaGVpZ2h0LCBwYWRkaW5nLCBkYXRhIH0gPSB0aGlzO1xuICAgIGlmICghY2hhcnQgfHwgIWRhdGEgfHwgZGF0YS5sZW5ndGggPD0gMCkgcmV0dXJuO1xuXG4gICAgY2hhcnQuc2V0KCdoZWlnaHQnLCBoZWlnaHQpO1xuICAgIGNoYXJ0LnNldCgncGFkZGluZycsIHBhZGRpbmcpO1xuICAgIGNoYXJ0LmZvcmNlRml0KCk7XG5cbiAgICBjb25zdCBkdiA9IG5ldyBEYXRhU2V0LlZpZXcoKS5zb3VyY2UoZGF0YSk7XG4gICAgY29uc3QgcmFuZ2UgPSBkdi5yYW5nZSgndmFsdWUnKTtcbiAgICBjb25zdCBtaW4gPSByYW5nZVswXTtcbiAgICBjb25zdCBtYXggPSByYW5nZVsxXTtcblxuICAgIGR2LnRyYW5zZm9ybSh7XG4gICAgICB0eXBlOiAndGFnLWNsb3VkJyxcbiAgICAgIGZpZWxkczogWyd4JywgJ3ZhbHVlJ10sXG4gICAgICBzaXplOiBbY2hhcnQuZ2V0KCd3aWR0aCcpLCBjaGFydC5nZXQoJ2hlaWdodCcpXSxcbiAgICAgIHBhZGRpbmcsXG4gICAgICB0aW1lSW50ZXJ2YWw6IDUwMDAsIC8vIG1heCBleGVjdXRlIHRpbWVcbiAgICAgIHJvdGF0ZTogKCkgPT4ge1xuICAgICAgICBsZXQgcmFuZG9tID0gfn4oTWF0aC5yYW5kb20oKSAqIDQpICUgNDtcbiAgICAgICAgaWYgKHJhbmRvbSA9PT0gMikge1xuICAgICAgICAgIHJhbmRvbSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJhbmRvbSAqIDkwOyAvLyAwLCA5MCwgMjcwXG4gICAgICB9LFxuICAgICAgZm9udFNpemU6IGQgPT4gKGQudmFsdWUgPyAoKGQudmFsdWUgLSBtaW4pIC8gKG1heCAtIG1pbikpICogKDgwIC0gMjQpICsgMjQgOiAwKSxcbiAgICB9KTtcbiAgICBjaGFydC5zb3VyY2UoZHYsIHtcbiAgICAgIHg6IHsgbmljZTogZmFsc2UgfSxcbiAgICAgIHk6IHsgbmljZTogZmFsc2UgfSxcbiAgICB9KTtcblxuICAgIGNoYXJ0LnJlcGFpbnQoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2F0dGFjaENoYXJ0KCkge1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuYXR0YWNoQ2hhcnQoKSk7XG4gIH1cblxuICBwcml2YXRlIGluc3RhbGxSZXNpemVFdmVudCgpIHtcbiAgICB0aGlzLnJlc2l6ZSQgPSBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJylcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoKCkgPT4gdGhpcy5jaGFydCksXG4gICAgICAgIGRlYm91bmNlVGltZSgyMDApLFxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLl9hdHRhY2hDaGFydCgpKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaW5pdFRhZ0Nsb3VkKCk7XG4gICAgdGhpcy5pbnN0YWxsUmVzaXplRXZlbnQoKTtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5zdGFsbCgpLCB0aGlzLmRlbGF5KSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLl9hdHRhY2hDaGFydCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5yZXNpemUkLnVuc3Vic2NyaWJlKCk7XG4gICAgaWYgKHRoaXMuY2hhcnQpIHtcbiAgICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuY2hhcnQuZGVzdHJveSgpKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==