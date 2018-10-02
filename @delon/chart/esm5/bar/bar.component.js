/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, HostBinding, ViewChild, ElementRef, NgZone, TemplateRef, ChangeDetectionStrategy, ChangeDetectorRef, } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { toBoolean, toNumber } from '@delon/util';
var G2BarComponent = /** @class */ (function () {
    function G2BarComponent(el, cd, zone) {
        this.el = el;
        this.cd = cd;
        this.zone = zone;
        this.autoHideXLabels = false;
        this.resize$ = null;
        // #region fields
        this._title = '';
        this.color = 'rgba(24, 144, 255, 0.85)';
        this._height = 0;
        this._autoLabel = true;
    }
    Object.defineProperty(G2BarComponent.prototype, "title", {
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
    Object.defineProperty(G2BarComponent.prototype, "height", {
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
    Object.defineProperty(G2BarComponent.prototype, "autoLabel", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._autoLabel = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    G2BarComponent.prototype.runInstall = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.zone.runOutsideAngular(function () { return setTimeout(function () { return _this.install(); }); });
    };
    /**
     * @return {?}
     */
    G2BarComponent.prototype.install = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var canvasWidth = this.el.nativeElement.clientWidth;
        /** @type {?} */
        var minWidth = this.data.length * 30;
        if (canvasWidth <= minWidth) {
            if (!this.autoHideXLabels) {
                this.autoHideXLabels = true;
            }
        }
        else if (this.autoHideXLabels) {
            this.autoHideXLabels = false;
        }
        if (!this.data || (this.data && this.data.length < 1))
            return;
        this.node.nativeElement.innerHTML = '';
        /** @type {?} */
        var chart = new G2.Chart({
            container: this.node.nativeElement,
            forceFit: true,
            height: this._title || this._titleTpl ? this.height - 41 : this.height,
            legend: null,
            padding: this.padding || 'auto',
        });
        chart.axis('x', !this.autoHideXLabels);
        chart.axis('y', {
            title: false,
            line: false,
            tickLine: false,
        });
        chart.source(this.data, {
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
        chart
            .interval()
            .position('x*y')
            .color(this.color)
            .tooltip('x*y', function (x, y) {
            return {
                name: x,
                value: y,
            };
        });
        chart.render();
        this.chart = chart;
    };
    /**
     * @return {?}
     */
    G2BarComponent.prototype.installResizeEvent = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this._autoLabel || this.resize$)
            return;
        this.resize$ = fromEvent(window, 'resize')
            .pipe(debounceTime(200))
            .subscribe(function () { return _this.runInstall(); });
    };
    /**
     * @return {?}
     */
    G2BarComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.installResizeEvent();
        this.runInstall();
    };
    /**
     * @return {?}
     */
    G2BarComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.resize$)
            this.resize$.unsubscribe();
        if (this.chart) {
            this.chart.destroy();
            this.chart = null;
        }
    };
    G2BarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'g2-bar',
                    template: "\n  <ng-container *ngIf=\"_title; else _titleTpl\"><h4 style=\"margin-bottom:20px\">{{_title}}</h4></ng-container>\n  <div #container></div>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false
                }] }
    ];
    /** @nocollapse */
    G2BarComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: NgZone }
    ]; };
    G2BarComponent.propDecorators = {
        title: [{ type: Input }],
        color: [{ type: Input }],
        height: [{ type: HostBinding, args: ['style.height.px',] }, { type: Input }],
        padding: [{ type: Input }],
        data: [{ type: Input }],
        autoLabel: [{ type: Input }],
        node: [{ type: ViewChild, args: ['container',] }]
    };
    return G2BarComponent;
}());
export { G2BarComponent };
if (false) {
    /** @type {?} */
    G2BarComponent.prototype.autoHideXLabels;
    /** @type {?} */
    G2BarComponent.prototype.resize$;
    /** @type {?} */
    G2BarComponent.prototype.chart;
    /** @type {?} */
    G2BarComponent.prototype._title;
    /** @type {?} */
    G2BarComponent.prototype._titleTpl;
    /** @type {?} */
    G2BarComponent.prototype.color;
    /** @type {?} */
    G2BarComponent.prototype._height;
    /** @type {?} */
    G2BarComponent.prototype.padding;
    /** @type {?} */
    G2BarComponent.prototype.data;
    /** @type {?} */
    G2BarComponent.prototype._autoLabel;
    /** @type {?} */
    G2BarComponent.prototype.node;
    /** @type {?} */
    G2BarComponent.prototype.el;
    /** @type {?} */
    G2BarComponent.prototype.cd;
    /** @type {?} */
    G2BarComponent.prototype.zone;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9jaGFydC9iYXIvIiwic291cmNlcyI6WyJiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxXQUFXLEVBQ1gsU0FBUyxFQUNULFVBQVUsRUFHVixNQUFNLEVBQ04sV0FBVyxFQUNYLHVCQUF1QixFQUN2QixpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFnQixTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDOztJQXdEaEQsd0JBQ1UsSUFDQSxJQUNBO1FBRkEsT0FBRSxHQUFGLEVBQUU7UUFDRixPQUFFLEdBQUYsRUFBRTtRQUNGLFNBQUksR0FBSixJQUFJOytCQTlDWSxLQUFLO3VCQUNDLElBQUk7O3NCQUkzQixFQUFFO3FCQWFNLDBCQUEwQjt1QkFVekIsQ0FBQzswQkFTRSxJQUFJO0tBVXJCO0lBeENKLHNCQUNJLGlDQUFLOzs7OztRQURULFVBQ1UsS0FBZ0M7WUFDeEMsSUFBSSxLQUFLLFlBQVksV0FBVyxFQUFFO2dCQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7YUFDeEI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7YUFDckI7WUFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3pCOzs7T0FBQTtJQUlELHNCQUVJLGtDQUFNOzs7O1FBRlY7WUFHRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDckI7Ozs7O1FBQ0QsVUFBVyxLQUFVO1lBQ25CLElBQUks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QVUsSUFBSSxJQUFJLENBQUMsT0FBTztZQUFFLE9BQU87UUFFN0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQzthQUN2QyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3ZCLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFVBQVUsRUFBRSxFQUFqQixDQUFpQixDQUFDLENBQUM7Ozs7O0lBR3hDLG9DQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztLQUNuQjs7OztJQUVELG9DQUFXOzs7SUFBWDtRQUNFLElBQUksSUFBSSxDQUFDLE9BQU87WUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzdDLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7U0FDbkI7S0FDRjs7Z0JBeklGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsUUFBUTtvQkFDbEIsUUFBUSxFQUFFLDhJQUVhO29CQUN2QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsbUJBQW1CLEVBQUUsS0FBSztpQkFDM0I7Ozs7Z0JBckJDLFVBQVU7Z0JBTVYsaUJBQWlCO2dCQUhqQixNQUFNOzs7d0JBMkJMLEtBQUs7d0JBV0wsS0FBSzt5QkFFTCxXQUFXLFNBQUMsaUJBQWlCLGNBQzdCLEtBQUs7MEJBU0wsS0FBSzt1QkFDTCxLQUFLOzRCQUVMLEtBQUs7dUJBUUwsU0FBUyxTQUFDLFdBQVc7O3lCQXJFeEI7O1NBMkJhLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBIb3N0QmluZGluZyxcclxuICBWaWV3Q2hpbGQsXHJcbiAgRWxlbWVudFJlZixcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE5nWm9uZSxcclxuICBUZW1wbGF0ZVJlZixcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyB0b0Jvb2xlYW4sIHRvTnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xyXG5cclxuZGVjbGFyZSB2YXIgRzI6IGFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZzItYmFyJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJfdGl0bGU7IGVsc2UgX3RpdGxlVHBsXCI+PGg0IHN0eWxlPVwibWFyZ2luLWJvdHRvbToyMHB4XCI+e3tfdGl0bGV9fTwvaDQ+PC9uZy1jb250YWluZXI+XHJcbiAgPGRpdiAjY29udGFpbmVyPjwvZGl2PmAsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHMkJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcclxuICBwcml2YXRlIGF1dG9IaWRlWExhYmVscyA9IGZhbHNlO1xyXG4gIHByaXZhdGUgcmVzaXplJDogU3Vic2NyaXB0aW9uID0gbnVsbDtcclxuICBwcml2YXRlIGNoYXJ0OiBhbnk7XHJcblxyXG4gIC8vICNyZWdpb24gZmllbGRzXHJcbiAgX3RpdGxlID0gJyc7XHJcbiAgX3RpdGxlVHBsOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHRpdGxlKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KSB7XHJcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xyXG4gICAgICB0aGlzLl90aXRsZSA9IG51bGw7XHJcbiAgICAgIHRoaXMuX3RpdGxlVHBsID0gdmFsdWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl90aXRsZSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKSBjb2xvciA9ICdyZ2JhKDI0LCAxNDQsIDI1NSwgMC44NSknO1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmhlaWdodC5weCcpXHJcbiAgQElucHV0KClcclxuICBnZXQgaGVpZ2h0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2hlaWdodDtcclxuICB9XHJcbiAgc2V0IGhlaWdodCh2YWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLl9oZWlnaHQgPSB0b051bWJlcih2YWx1ZSk7XHJcbiAgfVxyXG4gIHByaXZhdGUgX2hlaWdodCA9IDA7XHJcblxyXG4gIEBJbnB1dCgpIHBhZGRpbmc6IG51bWJlcltdO1xyXG4gIEBJbnB1dCgpIGRhdGE6IEFycmF5PHsgeDogYW55OyB5OiBhbnk7IFtrZXk6IHN0cmluZ106IGFueSB9PjtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgYXV0b0xhYmVsKHZhbHVlOiBhbnkpIHtcclxuICAgIHRoaXMuX2F1dG9MYWJlbCA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG4gIHByaXZhdGUgX2F1dG9MYWJlbCA9IHRydWU7XHJcblxyXG4gIC8vICNlbmRyZWdpb25cclxuXHJcbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJykgcHJpdmF0ZSBub2RlOiBFbGVtZW50UmVmO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgem9uZTogTmdab25lLFxyXG4gICkge31cclxuXHJcbiAgcHJpdmF0ZSBydW5JbnN0YWxsKCkge1xyXG4gICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5pbnN0YWxsKCkpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5zdGFsbCgpIHtcclxuICAgIGNvbnN0IGNhbnZhc1dpZHRoID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoO1xyXG4gICAgY29uc3QgbWluV2lkdGggPSB0aGlzLmRhdGEubGVuZ3RoICogMzA7XHJcblxyXG4gICAgaWYgKGNhbnZhc1dpZHRoIDw9IG1pbldpZHRoKSB7XHJcbiAgICAgIGlmICghdGhpcy5hdXRvSGlkZVhMYWJlbHMpIHtcclxuICAgICAgICB0aGlzLmF1dG9IaWRlWExhYmVscyA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAodGhpcy5hdXRvSGlkZVhMYWJlbHMpIHtcclxuICAgICAgdGhpcy5hdXRvSGlkZVhMYWJlbHMgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMuZGF0YSB8fCAodGhpcy5kYXRhICYmIHRoaXMuZGF0YS5sZW5ndGggPCAxKSkgcmV0dXJuO1xyXG4gICAgdGhpcy5ub2RlLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gICAgY29uc3QgY2hhcnQgPSBuZXcgRzIuQ2hhcnQoe1xyXG4gICAgICBjb250YWluZXI6IHRoaXMubm9kZS5uYXRpdmVFbGVtZW50LFxyXG4gICAgICBmb3JjZUZpdDogdHJ1ZSxcclxuICAgICAgaGVpZ2h0OiB0aGlzLl90aXRsZSB8fCB0aGlzLl90aXRsZVRwbCA/IHRoaXMuaGVpZ2h0IC0gNDEgOiB0aGlzLmhlaWdodCxcclxuICAgICAgbGVnZW5kOiBudWxsLFxyXG4gICAgICBwYWRkaW5nOiB0aGlzLnBhZGRpbmcgfHwgJ2F1dG8nLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY2hhcnQuYXhpcygneCcsICF0aGlzLmF1dG9IaWRlWExhYmVscyk7XHJcbiAgICBjaGFydC5heGlzKCd5Jywge1xyXG4gICAgICB0aXRsZTogZmFsc2UsXHJcbiAgICAgIGxpbmU6IGZhbHNlLFxyXG4gICAgICB0aWNrTGluZTogZmFsc2UsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjaGFydC5zb3VyY2UodGhpcy5kYXRhLCB7XHJcbiAgICAgIHg6IHtcclxuICAgICAgICB0eXBlOiAnY2F0JyxcclxuICAgICAgfSxcclxuICAgICAgeToge1xyXG4gICAgICAgIG1pbjogMCxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNoYXJ0LnRvb2x0aXAoe1xyXG4gICAgICBzaG93VGl0bGU6IGZhbHNlLFxyXG4gICAgfSk7XHJcbiAgICBjaGFydFxyXG4gICAgICAuaW50ZXJ2YWwoKVxyXG4gICAgICAucG9zaXRpb24oJ3gqeScpXHJcbiAgICAgIC5jb2xvcih0aGlzLmNvbG9yKVxyXG4gICAgICAudG9vbHRpcCgneCp5JywgKHgsIHkpID0+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgbmFtZTogeCxcclxuICAgICAgICAgIHZhbHVlOiB5LFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0pO1xyXG4gICAgY2hhcnQucmVuZGVyKCk7XHJcbiAgICB0aGlzLmNoYXJ0ID0gY2hhcnQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluc3RhbGxSZXNpemVFdmVudCgpIHtcclxuICAgIGlmICghdGhpcy5fYXV0b0xhYmVsIHx8IHRoaXMucmVzaXplJCkgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMucmVzaXplJCA9IGZyb21FdmVudCh3aW5kb3csICdyZXNpemUnKVxyXG4gICAgICAucGlwZShkZWJvdW5jZVRpbWUoMjAwKSlcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLnJ1bkluc3RhbGwoKSk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcclxuICAgIHRoaXMuaW5zdGFsbFJlc2l6ZUV2ZW50KCk7XHJcbiAgICB0aGlzLnJ1bkluc3RhbGwoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMucmVzaXplJCkgdGhpcy5yZXNpemUkLnVuc3Vic2NyaWJlKCk7XHJcbiAgICBpZiAodGhpcy5jaGFydCkge1xyXG4gICAgICB0aGlzLmNoYXJ0LmRlc3Ryb3koKTtcclxuICAgICAgdGhpcy5jaGFydCA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==