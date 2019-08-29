/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, NgZone, ViewEncapsulation, } from '@angular/core';
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
     * @private
     * @return {?}
     */
    G2TagCloudComponent.prototype.initTagCloud = /**
     * @private
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
     * @private
     * @return {?}
     */
    G2TagCloudComponent.prototype.install = /**
     * @private
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
     * @private
     * @return {?}
     */
    G2TagCloudComponent.prototype.attachChart = /**
     * @private
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
            rotate: (/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var random = ~~(Math.random() * 4) % 4;
                if (random === 2) {
                    random = 0;
                }
                return random * 90; // 0, 90, 270
            }),
            fontSize: (/**
             * @param {?} d
             * @return {?}
             */
            function (d) { return (d.value ? ((d.value - min) / (max - min)) * (80 - 24) + 24 : 0); }),
        });
        chart.source(dv, {
            x: { nice: false },
            y: { nice: false },
        });
        chart.repaint();
    };
    /**
     * @private
     * @return {?}
     */
    G2TagCloudComponent.prototype._attachChart = /**
     * @private
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
     * @private
     * @return {?}
     */
    G2TagCloudComponent.prototype.installResizeEvent = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.resize$ = fromEvent(window, 'resize')
            .pipe(filter((/**
         * @return {?}
         */
        function () { return _this.chart; })), debounceTime(200))
            .subscribe((/**
         * @return {?}
         */
        function () { return _this._attachChart(); }));
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
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () { return setTimeout((/**
         * @return {?}
         */
        function () { return _this.install(); }), _this.delay); }));
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
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () { return _this.chart.destroy(); }));
        }
    };
    G2TagCloudComponent.decorators = [
        { type: Component, args: [{
                    selector: 'g2-tag-cloud',
                    exportAs: 'g2TagCloud',
                    template: "",
                    host: {
                        '[style.height.px]': 'height',
                    },
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    G2TagCloudComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NgZone }
    ]; };
    G2TagCloudComponent.propDecorators = {
        delay: [{ type: Input }],
        height: [{ type: Input }],
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
    /**
     * @type {?}
     * @private
     */
    G2TagCloudComponent.prototype.resize$;
    /**
     * @type {?}
     * @private
     */
    G2TagCloudComponent.prototype.chart;
    /** @type {?} */
    G2TagCloudComponent.prototype.delay;
    /** @type {?} */
    G2TagCloudComponent.prototype.height;
    /** @type {?} */
    G2TagCloudComponent.prototype.padding;
    /** @type {?} */
    G2TagCloudComponent.prototype.data;
    /**
     * @type {?}
     * @private
     */
    G2TagCloudComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    G2TagCloudComponent.prototype.ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLWNsb3VkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9jaGFydC90YWctY2xvdWQvIiwic291cmNlcyI6WyJ0YWctY2xvdWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxNQUFNLEVBSU4saUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDMUMsT0FBTyxFQUFFLFNBQVMsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUt0RCxvQ0FLQzs7O0lBSkMsMkJBQVc7O0lBQ1gsK0JBQWU7O0lBQ2Ysa0NBQWU7OztBQUlqQjtJQXNCRSxhQUFhO0lBRWIsNkJBQW9CLEVBQWMsRUFBVSxNQUFjO1FBQXRDLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFROztRQVBsQyxVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsV0FBTSxHQUFHLEdBQUcsQ0FBQztRQUM1QixZQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osU0FBSSxHQUFxQixFQUFFLENBQUM7SUFJd0IsQ0FBQzs7Ozs7SUFFdEQsMENBQVk7Ozs7SUFBcEI7UUFDRSxxQkFBcUI7UUFDckIsRUFBRSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRTtZQUN2QyxTQUFTOzs7OztzQkFBQyxHQUFHLEVBQUUsU0FBUzs7b0JBQ2hCLEtBQUssc0JBQ1QsV0FBVyxFQUFFLEdBQUcsQ0FBQyxPQUFPLEVBQ3hCLFFBQVEsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQ2pDLE1BQU0sRUFBRSxHQUFHLENBQUMs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QWQsV0FBVyxFQUFFOztzREFBVztJQUNWO1FBQWQsV0FBVyxFQUFFOzt1REFBYztJQXlIdkMsMEJBQUM7Q0FBQSxBQTNJRCxJQTJJQztTQWhJWSxtQkFBbUI7Ozs7OztJQUM5QixzQ0FBOEI7Ozs7O0lBQzlCLG9DQUFtQjs7SUFJbkIsb0NBQWtDOztJQUNsQyxxQ0FBcUM7O0lBQ3JDLHNDQUFxQjs7SUFDckIsbUNBQXFDOzs7OztJQUl6QixpQ0FBc0I7Ozs7O0lBQUUscUNBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmRlY2xhcmUgdmFyIEcyOiBhbnk7XG5kZWNsYXJlIHZhciBEYXRhU2V0OiBhbnk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRzJUYWdDbG91ZERhdGEge1xuICB4Pzogc3RyaW5nO1xuICB2YWx1ZT86IG51bWJlcjtcbiAgY2F0ZWdvcnk/OiBhbnk7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZzItdGFnLWNsb3VkJyxcbiAgZXhwb3J0QXM6ICdnMlRhZ0Nsb3VkJyxcbiAgdGVtcGxhdGU6IGBgLFxuICBob3N0OiB7XG4gICAgJ1tzdHlsZS5oZWlnaHQucHhdJzogJ2hlaWdodCcsXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgRzJUYWdDbG91ZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBPbkluaXQge1xuICBwcml2YXRlIHJlc2l6ZSQ6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBjaGFydDogYW55O1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgZGVsYXkgPSAwO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBoZWlnaHQgPSAxMDA7XG4gIEBJbnB1dCgpIHBhZGRpbmcgPSAwO1xuICBASW5wdXQoKSBkYXRhOiBHMlRhZ0Nsb3VkRGF0YVtdID0gW107XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgbmdab25lOiBOZ1pvbmUpIHt9XG5cbiAgcHJpdmF0ZSBpbml0VGFnQ2xvdWQoKSB7XG4gICAgLy8g57uZcG9pbnTms6jlhozkuIDkuKror43kupHnmoRzaGFwZVxuICAgIEcyLlNoYXBlLnJlZ2lzdGVyU2hhcGUoJ3BvaW50JywgJ2Nsb3VkJywge1xuICAgICAgZHJhd1NoYXBlKGNmZywgY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnN0IGF0dHJzID0ge1xuICAgICAgICAgIGZpbGxPcGFjaXR5OiBjZmcub3BhY2l0eSxcbiAgICAgICAgICBmb250U2l6ZTogY2ZnLm9yaWdpbi5fb3JpZ2luLnNpemUsXG4gICAgICAgICAgcm90YXRlOiBjZmcub3JpZ2luLl9vcmlnaW4ucm90YXRlLFxuICAgICAgICAgIHRleHQ6IGNmZy5vcmlnaW4uX29yaWdpbi50ZXh0LFxuICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgZm9udEZhbWlseTogY2ZnLm9yaWdpbi5fb3JpZ2luLmZvbnQsXG4gICAgICAgICAgZmlsbDogY2ZnLmNvbG9yLFxuICAgICAgICAgIHRleHRCYXNlbGluZTogJ0FscGhhYmV0aWMnLFxuICAgICAgICAgIC4uLmNmZy5zdHlsZSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lci5hZGRTaGFwZSgndGV4dCcsIHtcbiAgICAgICAgICBhdHRyczogeyAuLi5hdHRycywgeDogY2ZnLngsIHk6IGNmZy55IH0sXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgaW5zdGFsbCgpIHtcbiAgICBjb25zdCB7IGVsLCBwYWRkaW5nLCBoZWlnaHQgfSA9IHRoaXM7XG5cbiAgICBjb25zdCBjaGFydCA9ICh0aGlzLmNoYXJ0ID0gbmV3IEcyLkNoYXJ0KHtcbiAgICAgIGNvbnRhaW5lcjogZWwubmF0aXZlRWxlbWVudCxcbiAgICAgIHBhZGRpbmcsXG4gICAgICBoZWlnaHQsXG4gICAgfSkpO1xuICAgIGNoYXJ0LmxlZ2VuZChmYWxzZSk7XG4gICAgY2hhcnQuYXhpcyhmYWxzZSk7XG4gICAgY2hhcnQudG9vbHRpcCh7XG4gICAgICBzaG93VGl0bGU6IGZhbHNlLFxuICAgIH0pO1xuICAgIGNoYXJ0LmNvb3JkKCkucmVmbGVjdCgpO1xuICAgIGNoYXJ0XG4gICAgICAucG9pbnQoKVxuICAgICAgLnBvc2l0aW9uKCd4KnknKVxuICAgICAgLmNvbG9yKCdjYXRlZ29yeScpXG4gICAgICAuc2hhcGUoJ2Nsb3VkJylcbiAgICAgIC50b29sdGlwKCd2YWx1ZSpjYXRlZ29yeScpO1xuXG4gICAgY2hhcnQucmVuZGVyKCk7XG5cbiAgICB0aGlzLmF0dGFjaENoYXJ0KCk7XG4gIH1cblxuICBwcml2YXRlIGF0dGFjaENoYXJ0KCkge1xuICAgIGNvbnN0IHsgY2hhcnQsIGhlaWdodCwgcGFkZGluZywgZGF0YSB9ID0gdGhpcztcbiAgICBpZiAoIWNoYXJ0IHx8ICFkYXRhIHx8IGRhdGEubGVuZ3RoIDw9IDApIHJldHVybjtcblxuICAgIGNoYXJ0LnNldCgnaGVpZ2h0JywgaGVpZ2h0KTtcbiAgICBjaGFydC5zZXQoJ3BhZGRpbmcnLCBwYWRkaW5nKTtcbiAgICBjaGFydC5mb3JjZUZpdCgpO1xuXG4gICAgY29uc3QgZHYgPSBuZXcgRGF0YVNldC5WaWV3KCkuc291cmNlKGRhdGEpO1xuICAgIGNvbnN0IHJhbmdlID0gZHYucmFuZ2UoJ3ZhbHVlJyk7XG4gICAgY29uc3QgbWluID0gcmFuZ2VbMF07XG4gICAgY29uc3QgbWF4ID0gcmFuZ2VbMV07XG5cbiAgICBkdi50cmFuc2Zvcm0oe1xuICAgICAgdHlwZTogJ3RhZy1jbG91ZCcsXG4gICAgICBmaWVsZHM6IFsneCcsICd2YWx1ZSddLFxuICAgICAgc2l6ZTogW2NoYXJ0LmdldCgnd2lkdGgnKSwgY2hhcnQuZ2V0KCdoZWlnaHQnKV0sXG4gICAgICBwYWRkaW5nLFxuICAgICAgdGltZUludGVydmFsOiA1MDAwLCAvLyBtYXggZXhlY3V0ZSB0aW1lXG4gICAgICByb3RhdGU6ICgpID0+IHtcbiAgICAgICAgbGV0IHJhbmRvbSA9IH5+KE1hdGgucmFuZG9tKCkgKiA0KSAlIDQ7XG4gICAgICAgIGlmIChyYW5kb20gPT09IDIpIHtcbiAgICAgICAgICByYW5kb20gPSAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByYW5kb20gKiA5MDsgLy8gMCwgOTAsIDI3MFxuICAgICAgfSxcbiAgICAgIGZvbnRTaXplOiBkID0+IChkLnZhbHVlID8gKChkLnZhbHVlIC0gbWluKSAvIChtYXggLSBtaW4pKSAqICg4MCAtIDI0KSArIDI0IDogMCksXG4gICAgfSk7XG4gICAgY2hhcnQuc291cmNlKGR2LCB7XG4gICAgICB4OiB7IG5pY2U6IGZhbHNlIH0sXG4gICAgICB5OiB7IG5pY2U6IGZhbHNlIH0sXG4gICAgfSk7XG5cbiAgICBjaGFydC5yZXBhaW50KCk7XG4gIH1cblxuICBwcml2YXRlIF9hdHRhY2hDaGFydCgpIHtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLmF0dGFjaENoYXJ0KCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbnN0YWxsUmVzaXplRXZlbnQoKSB7XG4gICAgdGhpcy5yZXNpemUkID0gZnJvbUV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScpXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKCgpID0+IHRoaXMuY2hhcnQpLFxuICAgICAgICBkZWJvdW5jZVRpbWUoMjAwKSxcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5fYXR0YWNoQ2hhcnQoKSk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmluaXRUYWdDbG91ZCgpO1xuICAgIHRoaXMuaW5zdGFsbFJlc2l6ZUV2ZW50KCk7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmluc3RhbGwoKSwgdGhpcy5kZWxheSkpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5fYXR0YWNoQ2hhcnQoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMucmVzaXplJC51bnN1YnNjcmliZSgpO1xuICAgIGlmICh0aGlzLmNoYXJ0KSB7XG4gICAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLmNoYXJ0LmRlc3Ryb3koKSk7XG4gICAgfVxuICB9XG59XG4iXX0=