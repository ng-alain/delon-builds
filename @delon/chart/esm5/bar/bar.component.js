/**
 * @fileoverview added by tsickle
 * Generated from: bar.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, NgZone, Output, ViewChild, ViewEncapsulation, } from '@angular/core';
import { Chart } from '@antv/g2';
import { AlainConfigService, InputBoolean, InputNumber } from '@delon/util';
import { fromEvent } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';
/** @type {?} */
var TITLE_HEIGHT = 41;
/**
 * @record
 */
export function G2BarData() { }
if (false) {
    /** @type {?} */
    G2BarData.prototype.x;
    /** @type {?} */
    G2BarData.prototype.y;
    /** @type {?|undefined} */
    G2BarData.prototype.color;
    /* Skipping unhandled member: [key: string]: NzSafeAny;*/
}
/**
 * @record
 */
export function G2BarClickItem() { }
if (false) {
    /** @type {?} */
    G2BarClickItem.prototype.item;
    /** @type {?} */
    G2BarClickItem.prototype.ev;
}
var G2BarComponent = /** @class */ (function () {
    // #endregion
    function G2BarComponent(ngZone, configSrv) {
        this.ngZone = ngZone;
        // #region fields
        this.delay = 0;
        this.color = 'rgba(24, 144, 255, 0.85)';
        this.height = 0;
        this.padding = 'auto';
        this.data = [];
        this.autoLabel = true;
        this.interaction = 'none';
        this.clickItem = new EventEmitter();
        configSrv.attachKey(this, 'chart', 'theme');
    }
    /**
     * @private
     * @return {?}
     */
    G2BarComponent.prototype.getHeight = /**
     * @private
     * @return {?}
     */
    function () {
        return this.title ? this.height - TITLE_HEIGHT : this.height;
    };
    /**
     * @private
     * @return {?}
     */
    G2BarComponent.prototype.install = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        var _a = this, node = _a.node, padding = _a.padding, interaction = _a.interaction, theme = _a.theme;
        /** @type {?} */
        var container = (/** @type {?} */ (node.nativeElement));
        /** @type {?} */
        var chart = (this.chart = new Chart({
            container: container,
            autoFit: true,
            height: this.getHeight(),
            padding: padding,
            theme: theme,
        }));
        this.updatelabel();
        chart.axis('y', {
            title: null,
            line: null,
            tickLine: null,
        });
        chart.scale({
            x: {
                type: 'cat',
            },
            y: {
                min: 0,
            },
        });
        chart.tooltip({
            showTitle: false,
        });
        if (interaction !== 'none') {
            chart.interaction(interaction);
        }
        chart.legend(false);
        chart
            .interval()
            .position('x*y')
            .color('x*y', (/**
         * @param {?} x
         * @param {?} y
         * @return {?}
         */
        function (x, y) {
            /** @type {?} */
            var colorItem = _this.data.find((/**
             * @param {?} w
             * @return {?}
             */
            function (w) { return w.x === x && w.y === y; }));
            return colorItem && colorItem.color ? colorItem.color : _this.color;
        }))
            .tooltip('x*y', (/**
         * @param {?} x
         * @param {?} y
         * @return {?}
         */
        function (x, y) { return ({ name: x, value: y }); }));
        chart.on("interval:click", (/**
         * @param {?} ev
         * @return {?}
         */
        function (ev) {
            _this.ngZone.run((/**
             * @return {?}
             */
            function () { var _a; return _this.clickItem.emit({ item: (_a = ev.data) === null || _a === void 0 ? void 0 : _a.data, ev: ev }); }));
        }));
        this.attachChart();
    };
    /**
     * @private
     * @return {?}
     */
    G2BarComponent.prototype.attachChart = /**
     * @private
     * @return {?}
     */
    function () {
        var _a = this, chart = _a.chart, padding = _a.padding, data = _a.data;
        if (!chart || !data || data.length <= 0)
            return;
        this.installResizeEvent();
        /** @type {?} */
        var height = this.getHeight();
        if (chart.height !== height) {
            chart.height = height;
        }
        chart.padding = padding;
        chart.data(data);
        chart.render();
    };
    /**
     * @private
     * @return {?}
     */
    G2BarComponent.prototype.updatelabel = /**
     * @private
     * @return {?}
     */
    function () {
        var _a = this, node = _a.node, data = _a.data, chart = _a.chart;
        /** @type {?} */
        var canvasWidth = node.nativeElement.clientWidth;
        /** @type {?} */
        var minWidth = data.length * 30;
        chart.axis('x', canvasWidth > minWidth).render();
    };
    /**
     * @private
     * @return {?}
     */
    G2BarComponent.prototype.installResizeEvent = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.autoLabel || this.resize$)
            return;
        this.resize$ = fromEvent(window, 'resize')
            .pipe(filter((/**
         * @return {?}
         */
        function () { return !!_this.chart; })), debounceTime(200))
            .subscribe((/**
         * @return {?}
         */
        function () { return _this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () { return _this.updatelabel(); })); }));
    };
    /**
     * @return {?}
     */
    G2BarComponent.prototype.ngOnInit = /**
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
     * @return {?}
     */
    G2BarComponent.prototype.ngOnChanges = /**
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
    G2BarComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.resize$) {
            this.resize$.unsubscribe();
        }
        if (this.chart) {
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () { return _this.chart.destroy(); }));
        }
    };
    G2BarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'g2-bar',
                    exportAs: 'g2Bar',
                    template: "<ng-container *nzStringTemplateOutlet=\"title\">\n  <h4 style=\"margin-bottom: 20px;\">{{ title }}</h4>\n</ng-container>\n<div #container></div>\n",
                    host: {
                        '[style.height.px]': 'height',
                    },
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    G2BarComponent.ctorParameters = function () { return [
        { type: NgZone },
        { type: AlainConfigService }
    ]; };
    G2BarComponent.propDecorators = {
        node: [{ type: ViewChild, args: ['container', { static: true },] }],
        delay: [{ type: Input }],
        title: [{ type: Input }],
        color: [{ type: Input }],
        height: [{ type: Input }],
        padding: [{ type: Input }],
        data: [{ type: Input }],
        autoLabel: [{ type: Input }],
        interaction: [{ type: Input }],
        theme: [{ type: Input }],
        clickItem: [{ type: Output }]
    };
    __decorate([
        InputNumber(),
        __metadata("design:type", Object)
    ], G2BarComponent.prototype, "delay", void 0);
    __decorate([
        InputNumber(),
        __metadata("design:type", Object)
    ], G2BarComponent.prototype, "height", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], G2BarComponent.prototype, "autoLabel", void 0);
    return G2BarComponent;
}());
export { G2BarComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    G2BarComponent.prototype.resize$;
    /**
     * @type {?}
     * @private
     */
    G2BarComponent.prototype.chart;
    /**
     * @type {?}
     * @private
     */
    G2BarComponent.prototype.node;
    /** @type {?} */
    G2BarComponent.prototype.delay;
    /** @type {?} */
    G2BarComponent.prototype.title;
    /** @type {?} */
    G2BarComponent.prototype.color;
    /** @type {?} */
    G2BarComponent.prototype.height;
    /** @type {?} */
    G2BarComponent.prototype.padding;
    /** @type {?} */
    G2BarComponent.prototype.data;
    /** @type {?} */
    G2BarComponent.prototype.autoLabel;
    /** @type {?} */
    G2BarComponent.prototype.interaction;
    /** @type {?} */
    G2BarComponent.prototype.theme;
    /** @type {?} */
    G2BarComponent.prototype.clickItem;
    /**
     * @type {?}
     * @private
     */
    G2BarComponent.prototype.ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9jaGFydC9iYXIvIiwic291cmNlcyI6WyJiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFJTixNQUFNLEVBRU4sU0FBUyxFQUNULGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsS0FBSyxFQUFnQixNQUFNLFVBQVUsQ0FBQztBQUUvQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU1RSxPQUFPLEVBQUUsU0FBUyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDOztJQUVoRCxZQUFZLEdBQUcsRUFBRTs7OztBQUV2QiwrQkFLQzs7O0lBSkMsc0JBQWE7O0lBQ2Isc0JBQWE7O0lBQ2IsMEJBQWU7Ozs7OztBQUlqQixvQ0FHQzs7O0lBRkMsOEJBQWdCOztJQUNoQiw0QkFBVTs7QUFHWjtJQTZCRSxhQUFhO0lBRWIsd0JBQW9CLE1BQWMsRUFBRSxTQUE2QjtRQUE3QyxXQUFNLEdBQU4sTUFBTSxDQUFROztRQWJWLFVBQUssR0FBRyxDQUFDLENBQUM7UUFFekIsVUFBSyxHQUFHLDBCQUEwQixDQUFDO1FBQ3BCLFdBQU0sR0FBRyxDQUFDLENBQUM7UUFDMUIsWUFBTyxHQUErQixNQUFNLENBQUM7UUFDN0MsU0FBSSxHQUFnQixFQUFFLENBQUM7UUFDUCxjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLGdCQUFXLEdBQXNCLE1BQU0sQ0FBQztRQUV2QyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQWtCLENBQUM7UUFLdkQsU0FBUyxDQUFDLFNBQVMsQ0FB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QUFrQjs7O3VCQWlDeEIsU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7d0JBSXZDLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3lCQUNMLEtBQUs7MEJBQ0wsS0FBSzt1QkFDTCxLQUFLOzRCQUNMLEtBQUs7OEJBQ0wsS0FBSzt3QkFDTCxLQUFLOzRCQUNMLE1BQU07O0lBVGlCO1FBQWQsV0FBVyxFQUFFOztpREFBVztJQUdWO1FBQWQsV0FBVyxFQUFFOztrREFBWTtJQUdWO1FBQWYsWUFBWSxFQUFFOztxREFBa0I7SUErRzVDLHFCQUFDO0NBQUEsQUF2SUQsSUF1SUM7U0E1SFksY0FBYzs7Ozs7O0lBQ3pCLGlDQUE4Qjs7Ozs7SUFDOUIsK0JBQXFCOzs7OztJQUNyQiw4QkFBbUU7O0lBSW5FLCtCQUFrQzs7SUFDbEMsK0JBQTJDOztJQUMzQywrQkFBNEM7O0lBQzVDLGdDQUFtQzs7SUFDbkMsaUNBQXNEOztJQUN0RCw4QkFBZ0M7O0lBQ2hDLG1DQUEwQzs7SUFDMUMscUNBQWlEOztJQUNqRCwrQkFBMkM7O0lBQzNDLG1DQUF5RDs7Ozs7SUFJN0MsZ0NBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENoYXJ0LCBFdmVudCwgVHlwZXMgfSBmcm9tICdAYW50di9nMic7XG5pbXBvcnQgeyBHMkludGVyYWN0aW9uVHlwZSB9IGZyb20gJ0BkZWxvbi9jaGFydC9jb3JlJztcbmltcG9ydCB7IEFsYWluQ29uZmlnU2VydmljZSwgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmNvbnN0IFRJVExFX0hFSUdIVCA9IDQxO1xuXG5leHBvcnQgaW50ZXJmYWNlIEcyQmFyRGF0YSB7XG4gIHg6IE56U2FmZUFueTtcbiAgeTogTnpTYWZlQW55O1xuICBjb2xvcj86IHN0cmluZztcbiAgW2tleTogc3RyaW5nXTogTnpTYWZlQW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEcyQmFyQ2xpY2tJdGVtIHtcbiAgaXRlbTogRzJCYXJEYXRhO1xuICBldjogRXZlbnQ7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2cyLWJhcicsXG4gIGV4cG9ydEFzOiAnZzJCYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vYmFyLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgICdbc3R5bGUuaGVpZ2h0LnB4XSc6ICdoZWlnaHQnLFxuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIEcyQmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgcmVzaXplJDogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIGNoYXJ0OiBDaGFydDtcbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJywgeyBzdGF0aWM6IHRydWUgfSkgcHJpdmF0ZSBub2RlOiBFbGVtZW50UmVmO1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgZGVsYXkgPSAwO1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIGNvbG9yID0gJ3JnYmEoMjQsIDE0NCwgMjU1LCAwLjg1KSc7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGhlaWdodCA9IDA7XG4gIEBJbnB1dCgpIHBhZGRpbmc6IG51bWJlciB8IG51bWJlcltdIHwgJ2F1dG8nID0gJ2F1dG8nO1xuICBASW5wdXQoKSBkYXRhOiBHMkJhckRhdGFbXSA9IFtdO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYXV0b0xhYmVsID0gdHJ1ZTtcbiAgQElucHV0KCkgaW50ZXJhY3Rpb246IEcySW50ZXJhY3Rpb25UeXBlID0gJ25vbmUnO1xuICBASW5wdXQoKSB0aGVtZTogc3RyaW5nIHwgVHlwZXMuTG9vc2VPYmplY3Q7XG4gIEBPdXRwdXQoKSBjbGlja0l0ZW0gPSBuZXcgRXZlbnRFbWl0dGVyPEcyQmFyQ2xpY2tJdGVtPigpO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5nWm9uZTogTmdab25lLCBjb25maWdTcnY6IEFsYWluQ29uZmlnU2VydmljZSkge1xuICAgIGNvbmZpZ1Nydi5hdHRhY2hLZXkodGhpcywgJ2NoYXJ0JywgJ3RoZW1lJyk7XG4gIH1cblxuICBwcml2YXRlIGdldEhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy50aXRsZSA/IHRoaXMuaGVpZ2h0IC0gVElUTEVfSEVJR0hUIDogdGhpcy5oZWlnaHQ7XG4gIH1cblxuICBwcml2YXRlIGluc3RhbGwoKSB7XG4gICAgY29uc3QgeyBub2RlLCBwYWRkaW5nLCBpbnRlcmFjdGlvbiwgdGhlbWUgfSA9IHRoaXM7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBub2RlLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgY2hhcnQgPSAodGhpcy5jaGFydCA9IG5ldyBDaGFydCh7XG4gICAgICBjb250YWluZXIsXG4gICAgICBhdXRvRml0OiB0cnVlLFxuICAgICAgaGVpZ2h0OiB0aGlzLmdldEhlaWdodCgpLFxuICAgICAgcGFkZGluZyxcbiAgICAgIHRoZW1lLFxuICAgIH0pKTtcbiAgICB0aGlzLnVwZGF0ZWxhYmVsKCk7XG4gICAgY2hhcnQuYXhpcygneScsIHtcbiAgICAgIHRpdGxlOiBudWxsLFxuICAgICAgbGluZTogbnVsbCxcbiAgICAgIHRpY2tMaW5lOiBudWxsLFxuICAgIH0pO1xuICAgIGNoYXJ0LnNjYWxlKHtcbiAgICAgIHg6IHtcbiAgICAgICAgdHlwZTogJ2NhdCcsXG4gICAgICB9LFxuICAgICAgeToge1xuICAgICAgICBtaW46IDAsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGNoYXJ0LnRvb2x0aXAoe1xuICAgICAgc2hvd1RpdGxlOiBmYWxzZSxcbiAgICB9KTtcbiAgICBpZiAoaW50ZXJhY3Rpb24gIT09ICdub25lJykge1xuICAgICAgY2hhcnQuaW50ZXJhY3Rpb24oaW50ZXJhY3Rpb24pO1xuICAgIH1cbiAgICBjaGFydC5sZWdlbmQoZmFsc2UpO1xuICAgIGNoYXJ0XG4gICAgICAuaW50ZXJ2YWwoKVxuICAgICAgLnBvc2l0aW9uKCd4KnknKVxuICAgICAgLmNvbG9yKCd4KnknLCAoeCwgeSkgPT4ge1xuICAgICAgICBjb25zdCBjb2xvckl0ZW0gPSB0aGlzLmRhdGEuZmluZCh3ID0+IHcueCA9PT0geCAmJiB3LnkgPT09IHkpO1xuICAgICAgICByZXR1cm4gY29sb3JJdGVtICYmIGNvbG9ySXRlbS5jb2xvciA/IGNvbG9ySXRlbS5jb2xvciA6IHRoaXMuY29sb3I7XG4gICAgICB9KVxuICAgICAgLnRvb2x0aXAoJ3gqeScsICh4LCB5KSA9PiAoeyBuYW1lOiB4LCB2YWx1ZTogeSB9KSk7XG5cbiAgICBjaGFydC5vbihgaW50ZXJ2YWw6Y2xpY2tgLCAoZXY6IEV2ZW50KSA9PiB7XG4gICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gdGhpcy5jbGlja0l0ZW0uZW1pdCh7IGl0ZW06IGV2LmRhdGE/LmRhdGEsIGV2IH0pKTtcbiAgICB9KTtcblxuICAgIHRoaXMuYXR0YWNoQ2hhcnQoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXR0YWNoQ2hhcnQoKSB7XG4gICAgY29uc3QgeyBjaGFydCwgcGFkZGluZywgZGF0YSB9ID0gdGhpcztcbiAgICBpZiAoIWNoYXJ0IHx8ICFkYXRhIHx8IGRhdGEubGVuZ3RoIDw9IDApIHJldHVybjtcbiAgICB0aGlzLmluc3RhbGxSZXNpemVFdmVudCgpO1xuICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KCk7XG4gICAgaWYgKGNoYXJ0LmhlaWdodCAhPT0gaGVpZ2h0KSB7XG4gICAgICBjaGFydC5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgfVxuICAgIGNoYXJ0LnBhZGRpbmcgPSBwYWRkaW5nO1xuXG4gICAgY2hhcnQuZGF0YShkYXRhKTtcbiAgICBjaGFydC5yZW5kZXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlbGFiZWwoKSB7XG4gICAgY29uc3QgeyBub2RlLCBkYXRhLCBjaGFydCB9ID0gdGhpcztcbiAgICBjb25zdCBjYW52YXNXaWR0aCA9IG5vZGUubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aDtcbiAgICBjb25zdCBtaW5XaWR0aCA9IGRhdGEubGVuZ3RoICogMzA7XG4gICAgY2hhcnQuYXhpcygneCcsIGNhbnZhc1dpZHRoID4gbWluV2lkdGgpLnJlbmRlcigpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbnN0YWxsUmVzaXplRXZlbnQoKSB7XG4gICAgaWYgKCF0aGlzLmF1dG9MYWJlbCB8fCB0aGlzLnJlc2l6ZSQpIHJldHVybjtcblxuICAgIHRoaXMucmVzaXplJCA9IGZyb21FdmVudCh3aW5kb3csICdyZXNpemUnKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcigoKSA9PiAhIXRoaXMuY2hhcnQpLFxuICAgICAgICBkZWJvdW5jZVRpbWUoMjAwKSxcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy51cGRhdGVsYWJlbCgpKSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5zdGFsbCgpLCB0aGlzLmRlbGF5KSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLmF0dGFjaENoYXJ0KCkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucmVzaXplJCkge1xuICAgICAgdGhpcy5yZXNpemUkLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmNoYXJ0KSB7XG4gICAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLmNoYXJ0LmRlc3Ryb3koKSk7XG4gICAgfVxuICB9XG59XG4iXX0=