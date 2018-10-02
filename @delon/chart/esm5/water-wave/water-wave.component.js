/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, ElementRef, NgZone, TemplateRef, Renderer2, ChangeDetectionStrategy, ChangeDetectorRef, } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { toNumber } from '@delon/util';
var G2WaterWaveComponent = /** @class */ (function () {
    function G2WaterWaveComponent(el, renderer, cd, zone) {
        this.el = el;
        this.renderer = renderer;
        this.cd = cd;
        this.zone = zone;
        // #region fields
        this._title = '';
        this.color = '#1890FF';
        this._height = 160;
        this.resize$ = null;
        this.initFlag = false;
    }
    Object.defineProperty(G2WaterWaveComponent.prototype, "title", {
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
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G2WaterWaveComponent.prototype, "height", {
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
    Object.defineProperty(G2WaterWaveComponent.prototype, "percent", {
        get: /**
         * @return {?}
         */
        function () {
            return this._percent;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._percent = toNumber(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    G2WaterWaveComponent.prototype.renderChart = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var data = this.percent / 100;
        if (!data)
            return;
        this.node.nativeElement.innerHTML = '';
        /** @type {?} */
        var self = this;
        /** @type {?} */
        var canvas = /** @type {?} */ (this.node.nativeElement);
        /** @type {?} */
        var ctx = canvas.getContext('2d');
        /** @type {?} */
        var canvasWidth = canvas.width;
        /** @type {?} */
        var canvasHeight = canvas.height;
        /** @type {?} */
        var radius = canvasWidth / 2;
        /** @type {?} */
        var lineWidth = 2;
        /** @type {?} */
        var cR = radius - lineWidth;
        ctx.beginPath();
        ctx.lineWidth = lineWidth * 2;
        /** @type {?} */
        var axisLength = canvasWidth - lineWidth;
        /** @type {?} */
        var unit = axisLength / 8;
        /** @type {?} */
        var range = 0.2;
        /** @type {?} */
        var currRange = range;
        /** @type {?} */
        var xOffset = lineWidth;
        /** @type {?} */
        var sp = 0;
        /** @type {?} */
        var currData = 0;
        /** @type {?} */
        var waveupsp = 0.005;
        /** @type {?} */
        var arcStack = [];
        /** @type {?} */
        var bR = radius - lineWidth;
        /** @type {?} */
        var circleOffset = -(Math.PI / 2);
        /** @type {?} */
        var circleLock = true;
        for (var i = circleOffset; i < circleOffset + 2 * Math.PI; i += 1 / (8 * Math.PI)) {
            arcStack.push([radius + bR * Math.cos(i), radius + bR * Math.sin(i)]);
        }
        /** @type {?} */
        var cStartPoint = arcStack.shift();
        ctx.strokeStyle = this.color;
        ctx.moveTo(cStartPoint[0], cStartPoint[1]);
        /**
         * @return {?}
         */
        function drawSin() {
            ctx.beginPath();
            ctx.save();
            /** @type {?} */
            var sinStack = [];
            for (var i = xOffset; i <= xOffset + axisLength; i += 20 / axisLength) {
                /** @type {?} */
                var x = sp + (xOffset + i) / unit;
                /** @type {?} */
                var y = Math.sin(x) * currRange;
                /** @type {?} */
                var dx = i;
                /** @type {?} */
                var dy = 2 * cR * (1 - currData) + (radius - cR) - unit * y;
                ctx.lineTo(dx, dy);
                sinStack.push([dx, dy]);
            }
            /** @type {?} */
            var startPoint = sinStack.shift();
            ctx.lineTo(xOffset + axisLength, canvasHeight);
            ctx.lineTo(xOffset, canvasHeight);
            ctx.lineTo(startPoint[0], startPoint[1]);
            /** @type {?} */
            var gradient = ctx.createLinearGradient(0, 0, 0, canvasHeight);
            gradient.addColorStop(0, '#ffffff');
            gradient.addColorStop(1, '#1890FF');
            ctx.fillStyle = gradient;
            ctx.fill();
            ctx.restore();
        }
        /**
         * @return {?}
         */
        function render() {
            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
            if (circleLock) {
                if (arcStack.length) {
                    /** @type {?} */
                    var temp = arcStack.shift();
                    ctx.lineTo(temp[0], temp[1]);
                    ctx.stroke();
                }
                else {
                    circleLock = false;
                    ctx.lineTo(cStartPoint[0], cStartPoint[1]);
                    ctx.stroke();
                    arcStack = null;
                    ctx.globalCompositeOperation = 'destination-over';
                    ctx.beginPath();
                    ctx.lineWidth = lineWidth;
                    ctx.arc(radius, radius, bR, 0, 2 * Math.PI, true);
                    ctx.beginPath();
                    ctx.save();
                    ctx.arc(radius, radius, radius - 3 * lineWidth, 0, 2 * Math.PI, true);
                    ctx.restore();
                    ctx.clip();
                    ctx.fillStyle = '#1890FF';
                }
            }
            else {
                if (data >= 0.85) {
                    if (currRange > range / 4) {
                        /** @type {?} */
                        var t = range * 0.01;
                        currRange -= t;
                    }
                }
                else if (data <= 0.1) {
                    if (currRange < range * 1.5) {
                        /** @type {?} */
                        var t = range * 0.01;
                        currRange += t;
                    }
                }
                else {
                    if (currRange <= range) {
                        /** @type {?} */
                        var t = range * 0.01;
                        currRange += t;
                    }
                    if (currRange >= range) {
                        /** @type {?} */
                        var t = range * 0.01;
                        currRange -= t;
                    }
                }
                if (data - currData > 0) {
                    currData += waveupsp;
                }
                if (data - currData < 0) {
                    currData -= waveupsp;
                }
                sp += 0.07;
                drawSin();
            }
            self.timer = requestAnimationFrame(render);
        }
        render();
    };
    /**
     * @param {?} radio
     * @return {?}
     */
    G2WaterWaveComponent.prototype.updateRadio = /**
     * @param {?} radio
     * @return {?}
     */
    function (radio) {
        this.renderer.setStyle(this.el.nativeElement, 'transform', "scale(" + radio + ")");
    };
    /**
     * @return {?}
     */
    G2WaterWaveComponent.prototype.installResizeEvent = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.resize$)
            return;
        this.resize$ = fromEvent(window, 'resize')
            .pipe(debounceTime(500))
            .subscribe(function () { return _this.resize(); });
    };
    /**
     * @return {?}
     */
    G2WaterWaveComponent.prototype.resize = /**
     * @return {?}
     */
    function () {
        var offsetWidth = this.el.nativeElement.parentNode.offsetWidth;
        this.updateRadio(offsetWidth < this.height ? offsetWidth / this.height : 1);
        this.renderChart();
    };
    /**
     * @return {?}
     */
    G2WaterWaveComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.initFlag = true;
        this.cd.detectChanges();
        this.zone.runOutsideAngular(function () {
            _this.updateRadio(1);
            _this.installResizeEvent();
            setTimeout(function () { return _this.resize(); }, 130);
        });
    };
    /**
     * @return {?}
     */
    G2WaterWaveComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.initFlag) {
            this.cd.detectChanges();
            this.zone.runOutsideAngular(function () { return _this.renderChart(); });
        }
    };
    /**
     * @return {?}
     */
    G2WaterWaveComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.timer)
            cancelAnimationFrame(this.timer);
        if (this.resize$)
            this.resize$.unsubscribe();
    };
    G2WaterWaveComponent.decorators = [
        { type: Component, args: [{
                    selector: 'g2-water-wave',
                    template: "\n  <div [ngStyle]=\"{'height.px': height, 'width.px': height, 'overflow': 'hidden'}\">\n    <canvas #container class=\"g2-water-wave__canvas\" width=\"{{height*2}}\" height=\"{{height*2}}\"></canvas>\n  </div>\n  <div class=\"g2-water-wave__desc\" [ngStyle]=\"{'width.px': height}\">\n    <ng-container *ngIf=\"_title; else _titleTpl\"><span class=\"g2-water-wave__desc-title\">{{_title}}</span></ng-container>\n    <h4 class=\"g2-water-wave__desc-percent\">{{percent}}%</h4>\n  </div>",
                    host: { '[class.g2-water-wave]': 'true' },
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false
                }] }
    ];
    /** @nocollapse */
    G2WaterWaveComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: ChangeDetectorRef },
        { type: NgZone }
    ]; };
    G2WaterWaveComponent.propDecorators = {
        title: [{ type: Input }],
        color: [{ type: Input }],
        height: [{ type: Input }],
        percent: [{ type: Input }],
        node: [{ type: ViewChild, args: ['container',] }]
    };
    return G2WaterWaveComponent;
}());
export { G2WaterWaveComponent };
if (false) {
    /** @type {?} */
    G2WaterWaveComponent.prototype._title;
    /** @type {?} */
    G2WaterWaveComponent.prototype._titleTpl;
    /** @type {?} */
    G2WaterWaveComponent.prototype.color;
    /** @type {?} */
    G2WaterWaveComponent.prototype._height;
    /** @type {?} */
    G2WaterWaveComponent.prototype._percent;
    /** @type {?} */
    G2WaterWaveComponent.prototype.resize$;
    /** @type {?} */
    G2WaterWaveComponent.prototype.node;
    /** @type {?} */
    G2WaterWaveComponent.prototype.initFlag;
    /** @type {?} */
    G2WaterWaveComponent.prototype.timer;
    /** @type {?} */
    G2WaterWaveComponent.prototype.el;
    /** @type {?} */
    G2WaterWaveComponent.prototype.renderer;
    /** @type {?} */
    G2WaterWaveComponent.prototype.cd;
    /** @type {?} */
    G2WaterWaveComponent.prototype.zone;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2F0ZXItd2F2ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vY2hhcnQvd2F0ZXItd2F2ZS8iLCJzb3VyY2VzIjpbIndhdGVyLXdhdmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUdWLE1BQU0sRUFDTixXQUFXLEVBRVgsU0FBUyxFQUNULHVCQUF1QixFQUN2QixpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFnQixTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7O0lBNkRyQyw4QkFDVSxJQUNBLFVBQ0EsSUFDQTtRQUhBLE9BQUUsR0FBRixFQUFFO1FBQ0YsYUFBUSxHQUFSLFFBQVE7UUFDUixPQUFFLEdBQUYsRUFBRTtRQUNGLFNBQUksR0FBSixJQUFJOztzQkE5Q0wsRUFBRTtxQkFhSCxTQUFTO3VCQVNDLEdBQUc7dUJBYVcsSUFBSTt3QkFJakIsS0FBSztLQVFwQjtJQTdDSixzQkFDSSx1Q0FBSzs7Ozs7UUFEVCxVQUNVLEtBQWdDO1lBQ3hDLElBQUksS0FBSyxZQUFZLFdBQVcsRUFBRTtnQkFDaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2FBQ3hCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2FBQ3JCO1NBQ0Y7OztPQUFBO0lBS0Qsc0JBQ0ksd0NBQU07Ozs7UUFEVjtZQUVFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUNyQjs7Ozs7UUFDRCxVQUFXLEtBQVU7WUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFR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a0JBQWtCLEVBQUUsQ0FBQztZQUMxQixVQUFVLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxNQUFNLEVBQUUsRUFBYixDQUFhLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDdEMsQ0FBQyxDQUFDO0tBQ0o7Ozs7SUFFRCwwQ0FBVzs7O0lBQVg7UUFBQSxpQkFLQztRQUpDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxXQUFXLEVBQUUsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO1NBQ3ZEO0tBQ0Y7Ozs7SUFFRCwwQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxLQUFLO1lBQUUsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pELElBQUksSUFBSSxDQUFDLE9BQU87WUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQzlDOztnQkFyUEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QixRQUFRLEVBQUUsd2VBT0g7b0JBQ1AsSUFBSSxFQUFFLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxFQUFFO29CQUN6QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsbUJBQW1CLEVBQUUsS0FBSztpQkFDM0I7Ozs7Z0JBM0JDLFVBQVU7Z0JBTVYsU0FBUztnQkFFVCxpQkFBaUI7Z0JBTGpCLE1BQU07Ozt3QkE4QkwsS0FBSzt3QkFVTCxLQUFLO3lCQUdMLEtBQUs7MEJBU0wsS0FBSzt1QkFZTCxTQUFTLFNBQUMsV0FBVzs7K0JBdkV4Qjs7U0FnQ2Esb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgSW5wdXQsXHJcbiAgVmlld0NoaWxkLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBOZ1pvbmUsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgT25Jbml0LFxyXG4gIFJlbmRlcmVyMixcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyB0b051bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZzItd2F0ZXItd2F2ZScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8ZGl2IFtuZ1N0eWxlXT1cInsnaGVpZ2h0LnB4JzogaGVpZ2h0LCAnd2lkdGgucHgnOiBoZWlnaHQsICdvdmVyZmxvdyc6ICdoaWRkZW4nfVwiPlxyXG4gICAgPGNhbnZhcyAjY29udGFpbmVyIGNsYXNzPVwiZzItd2F0ZXItd2F2ZV9fY2FudmFzXCIgd2lkdGg9XCJ7e2hlaWdodCoyfX1cIiBoZWlnaHQ9XCJ7e2hlaWdodCoyfX1cIj48L2NhbnZhcz5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwiZzItd2F0ZXItd2F2ZV9fZGVzY1wiIFtuZ1N0eWxlXT1cInsnd2lkdGgucHgnOiBoZWlnaHR9XCI+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiX3RpdGxlOyBlbHNlIF90aXRsZVRwbFwiPjxzcGFuIGNsYXNzPVwiZzItd2F0ZXItd2F2ZV9fZGVzYy10aXRsZVwiPnt7X3RpdGxlfX08L3NwYW4+PC9uZy1jb250YWluZXI+XHJcbiAgICA8aDQgY2xhc3M9XCJnMi13YXRlci13YXZlX19kZXNjLXBlcmNlbnRcIj57e3BlcmNlbnR9fSU8L2g0PlxyXG4gIDwvZGl2PmAsXHJcbiAgaG9zdDogeyAnW2NsYXNzLmcyLXdhdGVyLXdhdmVdJzogJ3RydWUnIH0sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHMldhdGVyV2F2ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBPbkluaXQge1xyXG4gIC8vICNyZWdpb24gZmllbGRzXHJcblxyXG4gIF90aXRsZSA9ICcnO1xyXG4gIF90aXRsZVRwbDogVGVtcGxhdGVSZWY8YW55PjtcclxuICBASW5wdXQoKVxyXG4gIHNldCB0aXRsZSh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pikge1xyXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcclxuICAgICAgdGhpcy5fdGl0bGUgPSBudWxsO1xyXG4gICAgICB0aGlzLl90aXRsZVRwbCA9IHZhbHVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fdGl0bGUgPSB2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgY29sb3IgPSAnIzE4OTBGRic7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IGhlaWdodCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9oZWlnaHQ7XHJcbiAgfVxyXG4gIHNldCBoZWlnaHQodmFsdWU6IGFueSkge1xyXG4gICAgdGhpcy5faGVpZ2h0ID0gdG9OdW1iZXIodmFsdWUpO1xyXG4gIH1cclxuICBwcml2YXRlIF9oZWlnaHQgPSAxNjA7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IHBlcmNlbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcGVyY2VudDtcclxuICB9XHJcbiAgc2V0IHBlcmNlbnQodmFsdWU6IGFueSkge1xyXG4gICAgdGhpcy5fcGVyY2VudCA9IHRvTnVtYmVyKHZhbHVlKTtcclxuICB9XHJcbiAgcHJpdmF0ZSBfcGVyY2VudDogbnVtYmVyO1xyXG5cclxuICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gIHByaXZhdGUgcmVzaXplJDogU3Vic2NyaXB0aW9uID0gbnVsbDtcclxuICBAVmlld0NoaWxkKCdjb250YWluZXInKVxyXG4gIHByaXZhdGUgbm9kZTogRWxlbWVudFJlZjtcclxuXHJcbiAgcHJpdmF0ZSBpbml0RmxhZyA9IGZhbHNlO1xyXG4gIHByaXZhdGUgdGltZXI6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIHpvbmU6IE5nWm9uZSxcclxuICApIHt9XHJcblxyXG4gIHByaXZhdGUgcmVuZGVyQ2hhcnQoKSB7XHJcbiAgICBjb25zdCBkYXRhID0gdGhpcy5wZXJjZW50IC8gMTAwO1xyXG4gICAgaWYgKCFkYXRhKSByZXR1cm47XHJcblxyXG4gICAgdGhpcy5ub2RlLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBjb25zdCBzZWxmID0gdGhpcztcclxuXHJcbiAgICBjb25zdCBjYW52YXMgPSB0aGlzLm5vZGUubmF0aXZlRWxlbWVudCBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuICAgIGNvbnN0IGNhbnZhc1dpZHRoID0gY2FudmFzLndpZHRoO1xyXG4gICAgY29uc3QgY2FudmFzSGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcclxuICAgIGNvbnN0IHJhZGl1cyA9IGNhbnZhc1dpZHRoIC8gMjtcclxuICAgIGNvbnN0IGxpbmVXaWR0aCA9IDI7XHJcbiAgICBjb25zdCBjUiA9IHJhZGl1cyAtIGxpbmVXaWR0aDtcclxuXHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjdHgubGluZVdpZHRoID0gbGluZVdpZHRoICogMjtcclxuXHJcbiAgICBjb25zdCBheGlzTGVuZ3RoID0gY2FudmFzV2lkdGggLSBsaW5lV2lkdGg7XHJcbiAgICBjb25zdCB1bml0ID0gYXhpc0xlbmd0aCAvIDg7XHJcbiAgICBjb25zdCByYW5nZSA9IDAuMjsgLy8g5oyv5bmFXHJcbiAgICBsZXQgY3VyclJhbmdlID0gcmFuZ2U7XHJcbiAgICBjb25zdCB4T2Zmc2V0ID0gbGluZVdpZHRoO1xyXG4gICAgbGV0IHNwID0gMDsgLy8g5ZGo5pyf5YGP56e76YePXHJcbiAgICBsZXQgY3VyckRhdGEgPSAwO1xyXG4gICAgY29uc3Qgd2F2ZXVwc3AgPSAwLjAwNTsgLy8g5rC05rOi5LiK5rao6YCf5bqmXHJcblxyXG4gICAgbGV0IGFyY1N0YWNrID0gW107XHJcbiAgICBjb25zdCBiUiA9IHJhZGl1cyAtIGxpbmVXaWR0aDtcclxuICAgIGNvbnN0IGNpcmNsZU9mZnNldCA9IC0oTWF0aC5QSSAvIDIpO1xyXG4gICAgbGV0IGNpcmNsZUxvY2sgPSB0cnVlO1xyXG5cclxuICAgIGZvciAoXHJcbiAgICAgIGxldCBpID0gY2lyY2xlT2Zmc2V0O1xyXG4gICAgICBpIDwgY2lyY2xlT2Zmc2V0ICsgMiAqIE1hdGguUEk7XHJcbiAgICAgIGkgKz0gMSAvICg4ICogTWF0aC5QSSlcclxuICAgICkge1xyXG4gICAgICBhcmNTdGFjay5wdXNoKFtyYWRpdXMgKyBiUiAqIE1hdGguY29zKGkpLCByYWRpdXMgKyBiUiAqIE1hdGguc2luKGkpXSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY1N0YXJ0UG9pbnQgPSBhcmNTdGFjay5zaGlmdCgpO1xyXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5jb2xvcjtcclxuICAgIGN0eC5tb3ZlVG8oY1N0YXJ0UG9pbnRbMF0sIGNTdGFydFBvaW50WzFdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBkcmF3U2luKCkge1xyXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIGN0eC5zYXZlKCk7XHJcblxyXG4gICAgICBjb25zdCBzaW5TdGFjayA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBpID0geE9mZnNldDsgaSA8PSB4T2Zmc2V0ICsgYXhpc0xlbmd0aDsgaSArPSAyMCAvIGF4aXNMZW5ndGgpIHtcclxuICAgICAgICBjb25zdCB4ID0gc3AgKyAoeE9mZnNldCArIGkpIC8gdW5pdDtcclxuICAgICAgICBjb25zdCB5ID0gTWF0aC5zaW4oeCkgKiBjdXJyUmFuZ2U7XHJcbiAgICAgICAgY29uc3QgZHggPSBpO1xyXG4gICAgICAgIGNvbnN0IGR5ID0gMiAqIGNSICogKDEgLSBjdXJyRGF0YSkgKyAocmFkaXVzIC0gY1IpIC0gdW5pdCAqIHk7XHJcblxyXG4gICAgICAgIGN0eC5saW5lVG8oZHgsIGR5KTtcclxuICAgICAgICBzaW5TdGFjay5wdXNoKFtkeCwgZHldKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3Qgc3RhcnRQb2ludCA9IHNpblN0YWNrLnNoaWZ0KCk7XHJcblxyXG4gICAgICBjdHgubGluZVRvKHhPZmZzZXQgKyBheGlzTGVuZ3RoLCBjYW52YXNIZWlnaHQpO1xyXG4gICAgICBjdHgubGluZVRvKHhPZmZzZXQsIGNhbnZhc0hlaWdodCk7XHJcbiAgICAgIGN0eC5saW5lVG8oc3RhcnRQb2ludFswXSwgc3RhcnRQb2ludFsxXSk7XHJcblxyXG4gICAgICBjb25zdCBncmFkaWVudCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCAwLCAwLCBjYW52YXNIZWlnaHQpO1xyXG4gICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMCwgJyNmZmZmZmYnKTtcclxuICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDEsICcjMTg5MEZGJyk7XHJcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBncmFkaWVudDtcclxuICAgICAgY3R4LmZpbGwoKTtcclxuICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW5kZXIoKSB7XHJcbiAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCk7XHJcbiAgICAgIGlmIChjaXJjbGVMb2NrKSB7XHJcbiAgICAgICAgaWYgKGFyY1N0YWNrLmxlbmd0aCkge1xyXG4gICAgICAgICAgY29uc3QgdGVtcCA9IGFyY1N0YWNrLnNoaWZ0KCk7XHJcbiAgICAgICAgICBjdHgubGluZVRvKHRlbXBbMF0sIHRlbXBbMV0pO1xyXG4gICAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjaXJjbGVMb2NrID0gZmFsc2U7XHJcbiAgICAgICAgICBjdHgubGluZVRvKGNTdGFydFBvaW50WzBdLCBjU3RhcnRQb2ludFsxXSk7XHJcbiAgICAgICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgICBhcmNTdGFjayA9IG51bGw7XHJcblxyXG4gICAgICAgICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdkZXN0aW5hdGlvbi1vdmVyJztcclxuICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgIGN0eC5saW5lV2lkdGggPSBsaW5lV2lkdGg7XHJcbiAgICAgICAgICBjdHguYXJjKHJhZGl1cywgcmFkaXVzLCBiUiwgMCwgMiAqIE1hdGguUEksIHRydWUpO1xyXG5cclxuICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgICBjdHguYXJjKHJhZGl1cywgcmFkaXVzLCByYWRpdXMgLSAzICogbGluZVdpZHRoLCAwLCAyICogTWF0aC5QSSwgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgICAgICAgIGN0eC5jbGlwKCk7XHJcbiAgICAgICAgICBjdHguZmlsbFN0eWxlID0gJyMxODkwRkYnO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoZGF0YSA+PSAwLjg1KSB7XHJcbiAgICAgICAgICBpZiAoY3VyclJhbmdlID4gcmFuZ2UgLyA0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHQgPSByYW5nZSAqIDAuMDE7XHJcbiAgICAgICAgICAgIGN1cnJSYW5nZSAtPSB0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YSA8PSAwLjEpIHtcclxuICAgICAgICAgIGlmIChjdXJyUmFuZ2UgPCByYW5nZSAqIDEuNSkge1xyXG4gICAgICAgICAgICBjb25zdCB0ID0gcmFuZ2UgKiAwLjAxO1xyXG4gICAgICAgICAgICBjdXJyUmFuZ2UgKz0gdDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKGN1cnJSYW5nZSA8PSByYW5nZSkge1xyXG4gICAgICAgICAgICBjb25zdCB0ID0gcmFuZ2UgKiAwLjAxO1xyXG4gICAgICAgICAgICBjdXJyUmFuZ2UgKz0gdDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChjdXJyUmFuZ2UgPj0gcmFuZ2UpIHtcclxuICAgICAgICAgICAgY29uc3QgdCA9IHJhbmdlICogMC4wMTtcclxuICAgICAgICAgICAgY3VyclJhbmdlIC09IHQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkYXRhIC0gY3VyckRhdGEgPiAwKSB7XHJcbiAgICAgICAgICBjdXJyRGF0YSArPSB3YXZldXBzcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRhdGEgLSBjdXJyRGF0YSA8IDApIHtcclxuICAgICAgICAgIGN1cnJEYXRhIC09IHdhdmV1cHNwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3AgKz0gMC4wNztcclxuICAgICAgICBkcmF3U2luKCk7XHJcbiAgICAgIH1cclxuICAgICAgc2VsZi50aW1lciA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVSYWRpbyhyYWRpbzogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxyXG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICd0cmFuc2Zvcm0nLFxyXG4gICAgICBgc2NhbGUoJHtyYWRpb30pYCxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluc3RhbGxSZXNpemVFdmVudCgpIHtcclxuICAgIGlmICh0aGlzLnJlc2l6ZSQpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLnJlc2l6ZSQgPSBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJylcclxuICAgICAgLnBpcGUoZGVib3VuY2VUaW1lKDUwMCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5yZXNpemUoKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlc2l6ZSgpIHtcclxuICAgIGNvbnN0IHsgb2Zmc2V0V2lkdGggfSA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlO1xyXG4gICAgdGhpcy51cGRhdGVSYWRpbyhvZmZzZXRXaWR0aCA8IHRoaXMuaGVpZ2h0ID8gb2Zmc2V0V2lkdGggLyB0aGlzLmhlaWdodCA6IDEpO1xyXG4gICAgdGhpcy5yZW5kZXJDaGFydCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmluaXRGbGFnID0gdHJ1ZTtcclxuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuICAgICAgdGhpcy51cGRhdGVSYWRpbygxKTtcclxuICAgICAgdGhpcy5pbnN0YWxsUmVzaXplRXZlbnQoKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnJlc2l6ZSgpLCAxMzApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmluaXRGbGFnKSB7XHJcbiAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5yZW5kZXJDaGFydCgpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudGltZXIpIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMudGltZXIpO1xyXG4gICAgaWYgKHRoaXMucmVzaXplJCkgdGhpcy5yZXNpemUkLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==