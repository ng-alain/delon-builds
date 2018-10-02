/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, ElementRef, NgZone, ChangeDetectionStrategy, ChangeDetectorRef, } from '@angular/core';
import { toNumber } from '@delon/util';
var G2TagCloudComponent = /** @class */ (function () {
    function G2TagCloudComponent(el, cd, zone) {
        this.el = el;
        this.cd = cd;
        this.zone = zone;
        this._height = 0;
        this.padding = 0;
        this.initFlag = false;
    }
    Object.defineProperty(G2TagCloudComponent.prototype, "height", {
        // #region fields
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
            this.cd.detectChanges();
        },
        enumerable: true,
        configurable: true
    });
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
                var attrs = Object.assign({}, {
                    fillOpacity: cfg.opacity,
                    fontSize: cfg.origin._origin.size,
                    rotate: cfg.origin._origin.rotate,
                    text: cfg.origin._origin.text,
                    textAlign: 'center',
                    fontFamily: cfg.origin._origin.font,
                    fill: cfg.color,
                    textBaseline: 'Alphabetic',
                }, cfg.style);
                return container.addShape('text', {
                    attrs: Object.assign(attrs, {
                        x: cfg.x,
                        y: cfg.y,
                    }),
                });
            },
        });
    };
    /**
     * @return {?}
     */
    G2TagCloudComponent.prototype.renderChart = /**
     * @return {?}
     */
    function () {
        if (!this.data || (this.data && this.data.length < 1))
            return;
        this.uninstall();
        this.node.nativeElement.innerHTML = '';
        /** @type {?} */
        var dv = new DataSet.View().source(this.data);
        /** @type {?} */
        var range = dv.range('value');
        /** @type {?} */
        var min = range[0];
        /** @type {?} */
        var max = range[1];
        /** @type {?} */
        var height = +this.height;
        /** @type {?} */
        var width = +this.el.nativeElement.offsetWidth;
        dv.transform({
            type: 'tag-cloud',
            fields: ['x', 'value'],
            size: [width, height],
            padding: this.padding,
            timeInterval: 5000,
            rotate: /**
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
        /** @type {?} */
        var chart = new G2.Chart({
            container: this.node.nativeElement,
            width: width,
            height: height,
            padding: this.padding,
            forceFit: true,
        });
        chart.source(dv, {
            x: { nice: false },
            y: { nice: false },
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
        this.chart = chart;
    };
    /**
     * @return {?}
     */
    G2TagCloudComponent.prototype.runInstall = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.zone.runOutsideAngular(function () { return setTimeout(function () { return _this.renderChart(); }); });
    };
    /**
     * @return {?}
     */
    G2TagCloudComponent.prototype.uninstall = /**
     * @return {?}
     */
    function () {
        if (this.chart) {
            this.chart.destroy();
            this.chart = null;
        }
    };
    /**
     * @return {?}
     */
    G2TagCloudComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.initFlag = true;
        this.zone.runOutsideAngular(function () {
            return setTimeout(function () {
                _this.initTagCloud();
                _this.runInstall();
            });
        });
    };
    /**
     * @return {?}
     */
    G2TagCloudComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (this.initFlag) {
            this.runInstall();
        }
    };
    /**
     * @return {?}
     */
    G2TagCloudComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.uninstall();
    };
    G2TagCloudComponent.decorators = [
        { type: Component, args: [{
                    selector: 'g2-tag-cloud',
                    template: "<div #container [ngStyle]=\"{'height.px': height}\"></div>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    G2TagCloudComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: NgZone }
    ]; };
    G2TagCloudComponent.propDecorators = {
        height: [{ type: Input }],
        padding: [{ type: Input }],
        data: [{ type: Input }],
        node: [{ type: ViewChild, args: ['container',] }]
    };
    return G2TagCloudComponent;
}());
export { G2TagCloudComponent };
if (false) {
    /** @type {?} */
    G2TagCloudComponent.prototype._height;
    /** @type {?} */
    G2TagCloudComponent.prototype.padding;
    /** @type {?} */
    G2TagCloudComponent.prototype.data;
    /** @type {?} */
    G2TagCloudComponent.prototype.node;
    /** @type {?} */
    G2TagCloudComponent.prototype.chart;
    /** @type {?} */
    G2TagCloudComponent.prototype.initFlag;
    /** @type {?} */
    G2TagCloudComponent.prototype.el;
    /** @type {?} */
    G2TagCloudComponent.prototype.cd;
    /** @type {?} */
    G2TagCloudComponent.prototype.zone;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLWNsb3VkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9jaGFydC90YWctY2xvdWQvIiwic291cmNlcyI6WyJ0YWctY2xvdWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUdWLE1BQU0sRUFFTix1QkFBdUIsRUFDdkIsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7O0lBcUNyQyw2QkFDVSxJQUNBLElBQ0E7UUFGQSxPQUFFLEdBQUYsRUFBRTtRQUNGLE9BQUUsR0FBRixFQUFFO1FBQ0YsU0FBSSxHQUFKLElBQUk7dUJBbkJJLENBQUM7dUJBR1QsQ0FBQzt3QkFXUSxLQUFLO0tBTXBCO0lBNUJKLHNCQUNJLHVDQUFNO1FBSFYsaUJBQWlCOzs7O1FBRWpCO1lBRUUsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3JCOzs7OztRQUNELFVBQVcsS0FBVTtZQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3pCOzs7T0FKQTs7OztJQTJCTywwQ0FBWTs7Ozs7UUFFbEIsRUFBRSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRTtZQUN2QyxTQUFTOzs7OztzQkFBQyxHQUFHLEVBQUUsU0FBUzs7Z0JBQ3RCLElBQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQ3pCLEVBQUUsRUFDRjtvQkFDRSxXQUFXLEVBQUUsR0FBRyxDQUFDLE9BQU87b0JBQ3hCLFFBQVEsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJO29CQUNqQyxNQUFNLEVBQUUsR0FBRyxDQUFDLE1B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SSxDQUFDLGlCQUFpQixDQUFDO1lBQzFCLE9BQUEsVUFBVSxDQUFDO2dCQUNULEtBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztnQkFDcEIsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2FBQ25CLENBQUM7UUFIRixDQUdFLENBQ0gsQ0FBQztLQUNIOzs7O0lBRUQseUNBQVc7OztJQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNuQjtLQUNGOzs7O0lBRUQseUNBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0tBQ2xCOztnQkE1SkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4QixRQUFRLEVBQUUsNERBQTBEO29CQUNwRSxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7Ozs7Z0JBakJDLFVBQVU7Z0JBTVYsaUJBQWlCO2dCQUhqQixNQUFNOzs7eUJBa0JMLEtBQUs7MEJBVUwsS0FBSzt1QkFHTCxLQUFLO3VCQUtMLFNBQVMsU0FBQyxXQUFXOzs4QkEzQ3hCOztTQXNCYSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBWaWV3Q2hpbGQsXHJcbiAgRWxlbWVudFJlZixcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE5nWm9uZSxcclxuICBPbkluaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHRvTnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xyXG5cclxuZGVjbGFyZSB2YXIgRzI6IGFueTtcclxuZGVjbGFyZSB2YXIgRGF0YVNldDogYW55O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnMi10YWctY2xvdWQnLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiAjY29udGFpbmVyIFtuZ1N0eWxlXT1cInsnaGVpZ2h0LnB4JzogaGVpZ2h0fVwiPjwvZGl2PmAsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHMlRhZ0Nsb3VkQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkNoYW5nZXMsIE9uSW5pdCB7XHJcbiAgLy8gI3JlZ2lvbiBmaWVsZHNcclxuXHJcbiAgQElucHV0KClcclxuICBnZXQgaGVpZ2h0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2hlaWdodDtcclxuICB9XHJcbiAgc2V0IGhlaWdodCh2YWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLl9oZWlnaHQgPSB0b051bWJlcih2YWx1ZSk7XHJcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcbiAgcHJpdmF0ZSBfaGVpZ2h0ID0gMDtcclxuXHJcbiAgQElucHV0KClcclxuICBwYWRkaW5nID0gMDtcclxuXHJcbiAgQElucHV0KClcclxuICBkYXRhOiB7IG5hbWU6IHN0cmluZzsgdmFsdWU6IG51bWJlcjsgY2F0ZWdvcnk/OiBhbnk7IFtrZXk6IHN0cmluZ106IGFueSB9W107XHJcblxyXG4gIC8vICNlbmRyZWdpb25cclxuXHJcbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJylcclxuICBwcml2YXRlIG5vZGU6IEVsZW1lbnRSZWY7XHJcblxyXG4gIHByaXZhdGUgY2hhcnQ6IGFueTtcclxuICBwcml2YXRlIGluaXRGbGFnID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSB6b25lOiBOZ1pvbmUsXHJcbiAgKSB7fVxyXG5cclxuICBwcml2YXRlIGluaXRUYWdDbG91ZCgpIHtcclxuICAgIC8vIOe7mXBvaW505rOo5YaM5LiA5Liq6K+N5LqR55qEc2hhcGVcclxuICAgIEcyLlNoYXBlLnJlZ2lzdGVyU2hhcGUoJ3BvaW50JywgJ2Nsb3VkJywge1xyXG4gICAgICBkcmF3U2hhcGUoY2ZnLCBjb250YWluZXIpIHtcclxuICAgICAgICBjb25zdCBhdHRycyA9IE9iamVjdC5hc3NpZ24oXHJcbiAgICAgICAgICB7fSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZmlsbE9wYWNpdHk6IGNmZy5vcGFjaXR5LFxyXG4gICAgICAgICAgICBmb250U2l6ZTogY2ZnLm9yaWdpbi5fb3JpZ2luLnNpemUsXHJcbiAgICAgICAgICAgIHJvdGF0ZTogY2ZnLm9yaWdpbi5fb3JpZ2luLnJvdGF0ZSxcclxuICAgICAgICAgICAgdGV4dDogY2ZnLm9yaWdpbi5fb3JpZ2luLnRleHQsXHJcbiAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IGNmZy5vcmlnaW4uX29yaWdpbi5mb250LFxyXG4gICAgICAgICAgICBmaWxsOiBjZmcuY29sb3IsXHJcbiAgICAgICAgICAgIHRleHRCYXNlbGluZTogJ0FscGhhYmV0aWMnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGNmZy5zdHlsZSxcclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiBjb250YWluZXIuYWRkU2hhcGUoJ3RleHQnLCB7XHJcbiAgICAgICAgICBhdHRyczogT2JqZWN0LmFzc2lnbihhdHRycywge1xyXG4gICAgICAgICAgICB4OiBjZmcueCxcclxuICAgICAgICAgICAgeTogY2ZnLnksXHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW5kZXJDaGFydCgpIHtcclxuICAgIGlmICghdGhpcy5kYXRhIHx8ICh0aGlzLmRhdGEgJiYgdGhpcy5kYXRhLmxlbmd0aCA8IDEpKSByZXR1cm47XHJcblxyXG4gICAgdGhpcy51bmluc3RhbGwoKTtcclxuICAgIHRoaXMubm9kZS5uYXRpdmVFbGVtZW50LmlubmVySFRNTCA9ICcnO1xyXG4gICAgY29uc3QgZHYgPSBuZXcgRGF0YVNldC5WaWV3KCkuc291cmNlKHRoaXMuZGF0YSk7XHJcbiAgICBjb25zdCByYW5nZSA9IGR2LnJhbmdlKCd2YWx1ZScpO1xyXG4gICAgY29uc3QgbWluID0gcmFuZ2VbMF07XHJcbiAgICBjb25zdCBtYXggPSByYW5nZVsxXTtcclxuICAgIGNvbnN0IGhlaWdodCA9ICt0aGlzLmhlaWdodDtcclxuICAgIGNvbnN0IHdpZHRoID0gK3RoaXMuZWwubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcclxuXHJcbiAgICBkdi50cmFuc2Zvcm0oe1xyXG4gICAgICB0eXBlOiAndGFnLWNsb3VkJyxcclxuICAgICAgZmllbGRzOiBbJ3gnLCAndmFsdWUnXSxcclxuICAgICAgc2l6ZTogW3dpZHRoLCBoZWlnaHRdLFxyXG4gICAgICBwYWRkaW5nOiB0aGlzLnBhZGRpbmcsXHJcbiAgICAgIHRpbWVJbnRlcnZhbDogNTAwMCwgLy8gbWF4IGV4ZWN1dGUgdGltZVxyXG4gICAgICByb3RhdGUoKSB7XHJcbiAgICAgICAgbGV0IHJhbmRvbSA9IH5+KE1hdGgucmFuZG9tKCkgKiA0KSAlIDQ7XHJcbiAgICAgICAgaWYgKHJhbmRvbSA9PT0gMikge1xyXG4gICAgICAgICAgcmFuZG9tID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJhbmRvbSAqIDkwOyAvLyAwLCA5MCwgMjcwXHJcbiAgICAgIH0sXHJcbiAgICAgIGZvbnRTaXplKGQpIHtcclxuICAgICAgICBpZiAoZC52YWx1ZSkge1xyXG4gICAgICAgICAgcmV0dXJuICgoZC52YWx1ZSAtIG1pbikgLyAobWF4IC0gbWluKSkgKiAoODAgLSAyNCkgKyAyNDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGNoYXJ0ID0gbmV3IEcyLkNoYXJ0KHtcclxuICAgICAgY29udGFpbmVyOiB0aGlzLm5vZGUubmF0aXZlRWxlbWVudCxcclxuICAgICAgd2lkdGg6IHdpZHRoLFxyXG4gICAgICBoZWlnaHQ6IGhlaWdodCxcclxuICAgICAgcGFkZGluZzogdGhpcy5wYWRkaW5nLFxyXG4gICAgICBmb3JjZUZpdDogdHJ1ZSxcclxuICAgIH0pO1xyXG4gICAgY2hhcnQuc291cmNlKGR2LCB7XHJcbiAgICAgIHg6IHsgbmljZTogZmFsc2UgfSxcclxuICAgICAgeTogeyBuaWNlOiBmYWxzZSB9LFxyXG4gICAgfSk7XHJcbiAgICBjaGFydC5sZWdlbmQoZmFsc2UpO1xyXG4gICAgY2hhcnQuYXhpcyhmYWxzZSk7XHJcbiAgICBjaGFydC50b29sdGlwKHtcclxuICAgICAgc2hvd1RpdGxlOiBmYWxzZSxcclxuICAgIH0pO1xyXG4gICAgY2hhcnQuY29vcmQoKS5yZWZsZWN0KCk7XHJcbiAgICBjaGFydFxyXG4gICAgICAucG9pbnQoKVxyXG4gICAgICAucG9zaXRpb24oJ3gqeScpXHJcbiAgICAgIC5jb2xvcignY2F0ZWdvcnknKVxyXG4gICAgICAuc2hhcGUoJ2Nsb3VkJylcclxuICAgICAgLnRvb2x0aXAoJ3ZhbHVlKmNhdGVnb3J5Jyk7XHJcblxyXG4gICAgY2hhcnQucmVuZGVyKCk7XHJcblxyXG4gICAgdGhpcy5jaGFydCA9IGNoYXJ0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBydW5JbnN0YWxsKCkge1xyXG4gICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5yZW5kZXJDaGFydCgpKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVuaW5zdGFsbCgpIHtcclxuICAgIGlmICh0aGlzLmNoYXJ0KSB7XHJcbiAgICAgIHRoaXMuY2hhcnQuZGVzdHJveSgpO1xyXG4gICAgICB0aGlzLmNoYXJ0ID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pbml0RmxhZyA9IHRydWU7XHJcbiAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT5cclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pbml0VGFnQ2xvdWQoKTtcclxuICAgICAgICB0aGlzLnJ1bkluc3RhbGwoKTtcclxuICAgICAgfSksXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pbml0RmxhZykge1xyXG4gICAgICB0aGlzLnJ1bkluc3RhbGwoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy51bmluc3RhbGwoKTtcclxuICB9XHJcbn1cclxuIl19