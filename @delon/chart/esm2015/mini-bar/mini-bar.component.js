/**
 * @fileoverview added by tsickle
 * Generated from: mini-bar.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, NgZone, Output, ViewEncapsulation, } from '@angular/core';
import { Chart } from '@antv/g2';
import { AlainConfigService, InputNumber } from '@delon/util';
/**
 * @record
 */
export function G2MiniBarData() { }
if (false) {
    /** @type {?} */
    G2MiniBarData.prototype.x;
    /** @type {?} */
    G2MiniBarData.prototype.y;
    /* Skipping unhandled member: [key: string]: any;*/
}
/**
 * @record
 */
export function G2MiniBarClickItem() { }
if (false) {
    /** @type {?} */
    G2MiniBarClickItem.prototype.item;
    /** @type {?} */
    G2MiniBarClickItem.prototype.ev;
}
export class G2MiniBarComponent {
    // #endregion
    /**
     * @param {?} el
     * @param {?} ngZone
     * @param {?} configSrv
     * @param {?} platform
     */
    constructor(el, ngZone, configSrv, platform) {
        this.el = el;
        this.ngZone = ngZone;
        this.platform = platform;
        // #region fields
        this.delay = 0;
        this.color = '#1890FF';
        this.height = 0;
        this.borderWidth = 5;
        this.padding = [8, 8, 8, 8];
        this.data = [];
        this.yTooltipSuffix = '';
        this.tooltipType = 'default';
        this.clickItem = new EventEmitter();
        configSrv.attachKey(this, 'chart', 'theme');
    }
    /**
     * @return {?}
     */
    get chart() {
        return this._chart;
    }
    /**
     * @private
     * @return {?}
     */
    install() {
        const { el, height, padding, yTooltipSuffix, tooltipType, theme } = this;
        /** @type {?} */
        const chart = (this._chart = new Chart({
            container: el.nativeElement,
            autoFit: true,
            height,
            padding,
            theme,
        }));
        chart.scale({
            x: {
                type: 'cat',
            },
            y: {
                min: 0,
            },
        });
        chart.legend(false);
        chart.axis(false);
        /** @type {?} */
        const tooltipOption = {
            showTitle: false,
            showMarkers: true,
            showCrosshairs: false,
            enterable: true,
            domStyles: {
                'g2-tooltip': { padding: '0px' },
                'g2-tooltip-title': { display: 'none' },
                'g2-tooltip-list-item': { margin: '4px' },
            },
        };
        if (tooltipType === 'mini') {
            tooltipOption.position = 'top';
            (/** @type {?} */ (tooltipOption.domStyles))['g2-tooltip'] = { padding: '0px', backgroundColor: 'transparent', boxShadow: 'none' };
            tooltipOption.itemTpl = `<li>{value}</li>`;
            tooltipOption.offset = 0;
        }
        chart.tooltip(tooltipOption);
        chart
            .interval()
            .position('x*y')
            .tooltip('x*y', (/**
         * @param {?} x
         * @param {?} y
         * @return {?}
         */
        (x, y) => ({ name: x, value: y + yTooltipSuffix })));
        chart.on(`interval:click`, (/**
         * @param {?} ev
         * @return {?}
         */
        (ev) => {
            this.ngZone.run((/**
             * @return {?}
             */
            () => { var _a; return this.clickItem.emit({ item: (_a = ev.data) === null || _a === void 0 ? void 0 : _a.data, ev }); }));
        }));
        chart.render();
        this.attachChart();
    }
    /**
     * @private
     * @return {?}
     */
    attachChart() {
        const { _chart, height, padding, data, color, borderWidth } = this;
        if (!_chart || !data || data.length <= 0)
            return;
        _chart.geometries[0].size(borderWidth).color(color);
        _chart.height = height;
        _chart.padding = padding;
        _chart.changeData(data);
        _chart.render();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.platform.isBrowser) {
            return;
        }
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => setTimeout((/**
         * @return {?}
         */
        () => this.install()), this.delay)));
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => this.attachChart()));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._chart) {
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            () => this._chart.destroy()));
        }
    }
}
G2MiniBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'g2-mini-bar',
                exportAs: 'g2MiniBar',
                template: ``,
                host: {
                    '[style.height.px]': 'height',
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
G2MiniBarComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone },
    { type: AlainConfigService },
    { type: Platform }
];
G2MiniBarComponent.propDecorators = {
    delay: [{ type: Input }],
    color: [{ type: Input }],
    height: [{ type: Input }],
    borderWidth: [{ type: Input }],
    padding: [{ type: Input }],
    data: [{ type: Input }],
    yTooltipSuffix: [{ type: Input }],
    tooltipType: [{ type: Input }],
    theme: [{ type: Input }],
    clickItem: [{ type: Output }]
};
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2MiniBarComponent.prototype, "delay", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2MiniBarComponent.prototype, "height", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2MiniBarComponent.prototype, "borderWidth", void 0);
if (false) {
    /** @type {?} */
    G2MiniBarComponent.ngAcceptInputType_delay;
    /** @type {?} */
    G2MiniBarComponent.ngAcceptInputType_height;
    /** @type {?} */
    G2MiniBarComponent.ngAcceptInputType_borderWidth;
    /**
     * @type {?}
     * @private
     */
    G2MiniBarComponent.prototype._chart;
    /** @type {?} */
    G2MiniBarComponent.prototype.delay;
    /** @type {?} */
    G2MiniBarComponent.prototype.color;
    /** @type {?} */
    G2MiniBarComponent.prototype.height;
    /** @type {?} */
    G2MiniBarComponent.prototype.borderWidth;
    /** @type {?} */
    G2MiniBarComponent.prototype.padding;
    /** @type {?} */
    G2MiniBarComponent.prototype.data;
    /** @type {?} */
    G2MiniBarComponent.prototype.yTooltipSuffix;
    /** @type {?} */
    G2MiniBarComponent.prototype.tooltipType;
    /** @type {?} */
    G2MiniBarComponent.prototype.theme;
    /** @type {?} */
    G2MiniBarComponent.prototype.clickItem;
    /**
     * @type {?}
     * @private
     */
    G2MiniBarComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    G2MiniBarComponent.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    G2MiniBarComponent.prototype.platform;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluaS1iYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NoYXJ0L21pbmktYmFyLyIsInNvdXJjZXMiOlsibWluaS1iYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBSU4sTUFBTSxFQUNOLGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsS0FBSyxFQUFnQixNQUFNLFVBQVUsQ0FBQztBQUMvQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsV0FBVyxFQUFlLE1BQU0sYUFBYSxDQUFDOzs7O0FBRzNFLG1DQUlDOzs7SUFIQywwQkFBTzs7SUFDUCwwQkFBTzs7Ozs7O0FBSVQsd0NBR0M7OztJQUZDLGtDQUFvQjs7SUFDcEIsZ0NBQVU7O0FBY1osTUFBTSxPQUFPLGtCQUFrQjs7Ozs7Ozs7SUEwQjdCLFlBQW9CLEVBQWMsRUFBVSxNQUFjLEVBQUUsU0FBNkIsRUFBVSxRQUFrQjtRQUFqRyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUF5QyxhQUFRLEdBQVIsUUFBUSxDQUFVOztRQWI3RixVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLFVBQUssR0FBRyxTQUFTLENBQUM7UUFDSCxXQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsZ0JBQVcsR0FBRyxDQUFDLENBQUM7UUFDL0IsWUFBTyxHQUErQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ25ELFNBQUksR0FBb0IsRUFBRSxDQUFDO1FBQzNCLG1CQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLGdCQUFXLEdBQXVC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RUFBRTtvQkFDSixtQkFBbUIsRUFBRSxRQUFRO2lCQUM5QjtnQkFDRCxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7Ozs7WUFuQ0MsVUFBVTtZQUdWLE1BQU07WUFRQyxrQkFBa0I7WUFmbEIsUUFBUTs7O29CQXFEZCxLQUFLO29CQUNMLEtBQUs7cUJBQ0wsS0FBSzswQkFDTCxLQUFLO3NCQUNMLEtBQUs7bUJBQ0wsS0FBSzs2QkFDTCxLQUFLOzBCQUNMLEtBQUs7b0JBQ0wsS0FBSzt3QkFDTCxNQUFNOztBQVRpQjtJQUFkLFdBQVcsRUFBRTs7aURBQVc7QUFFVjtJQUFkLFdBQVcsRUFBRTs7a0RBQVk7QUFDWDtJQUFkLFdBQVcsRUFBRTs7dURBQWlCOzs7SUFmeEMsMkNBQTRDOztJQUM1Qyw0Q0FBNkM7O0lBQzdDLGlEQUFrRDs7Ozs7SUFFbEQsb0NBQXNCOztJQVF0QixtQ0FBa0M7O0lBQ2xDLG1DQUEyQjs7SUFDM0Isb0NBQW1DOztJQUNuQyx5Q0FBd0M7O0lBQ3hDLHFDQUE0RDs7SUFDNUQsa0NBQW9DOztJQUNwQyw0Q0FBNkI7O0lBQzdCLHlDQUFxRDs7SUFDckQsbUNBQTJDOztJQUMzQyx1Q0FBNkQ7Ozs7O0lBSWpELGdDQUFzQjs7Ozs7SUFBRSxvQ0FBc0I7Ozs7O0lBQWlDLHNDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDaGFydCwgRXZlbnQsIFR5cGVzIH0gZnJvbSAnQGFudHYvZzInO1xuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlLCBJbnB1dE51bWJlciwgTnVtYmVySW5wdXQgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEcyTWluaUJhckRhdGEge1xuICB4OiBhbnk7XG4gIHk6IGFueTtcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEcyTWluaUJhckNsaWNrSXRlbSB7XG4gIGl0ZW06IEcyTWluaUJhckRhdGE7XG4gIGV2OiBFdmVudDtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZzItbWluaS1iYXInLFxuICBleHBvcnRBczogJ2cyTWluaUJhcicsXG4gIHRlbXBsYXRlOiBgYCxcbiAgaG9zdDoge1xuICAgICdbc3R5bGUuaGVpZ2h0LnB4XSc6ICdoZWlnaHQnLFxuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIEcyTWluaUJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZGVsYXk6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfaGVpZ2h0OiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2JvcmRlcldpZHRoOiBOdW1iZXJJbnB1dDtcblxuICBwcml2YXRlIF9jaGFydDogQ2hhcnQ7XG5cbiAgZ2V0IGNoYXJ0KCk6IENoYXJ0IHtcbiAgICByZXR1cm4gdGhpcy5fY2hhcnQ7XG4gIH1cblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGRlbGF5ID0gMDtcbiAgQElucHV0KCkgY29sb3IgPSAnIzE4OTBGRic7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGhlaWdodCA9IDA7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGJvcmRlcldpZHRoID0gNTtcbiAgQElucHV0KCkgcGFkZGluZzogbnVtYmVyIHwgbnVtYmVyW10gfCAnYXV0bycgPSBbOCwgOCwgOCwgOF07XG4gIEBJbnB1dCgpIGRhdGE6IEcyTWluaUJhckRhdGFbXSA9IFtdO1xuICBASW5wdXQoKSB5VG9vbHRpcFN1ZmZpeCA9ICcnO1xuICBASW5wdXQoKSB0b29sdGlwVHlwZTogJ21pbmknIHwgJ2RlZmF1bHQnID0gJ2RlZmF1bHQnO1xuICBASW5wdXQoKSB0aGVtZTogc3RyaW5nIHwgVHlwZXMuTG9vc2VPYmplY3Q7XG4gIEBPdXRwdXQoKSBjbGlja0l0ZW0gPSBuZXcgRXZlbnRFbWl0dGVyPEcyTWluaUJhckNsaWNrSXRlbT4oKTtcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSwgY29uZmlnU3J2OiBBbGFpbkNvbmZpZ1NlcnZpY2UsIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtKSB7XG4gICAgY29uZmlnU3J2LmF0dGFjaEtleSh0aGlzLCAnY2hhcnQnLCAndGhlbWUnKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5zdGFsbCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IGVsLCBoZWlnaHQsIHBhZGRpbmcsIHlUb29sdGlwU3VmZml4LCB0b29sdGlwVHlwZSwgdGhlbWUgfSA9IHRoaXM7XG4gICAgY29uc3QgY2hhcnQgPSAodGhpcy5fY2hhcnQgPSBuZXcgQ2hhcnQoe1xuICAgICAgY29udGFpbmVyOiBlbC5uYXRpdmVFbGVtZW50LFxuICAgICAgYXV0b0ZpdDogdHJ1ZSxcbiAgICAgIGhlaWdodCxcbiAgICAgIHBhZGRpbmcsXG4gICAgICB0aGVtZSxcbiAgICB9KSk7XG4gICAgY2hhcnQuc2NhbGUoe1xuICAgICAgeDoge1xuICAgICAgICB0eXBlOiAnY2F0JyxcbiAgICAgIH0sXG4gICAgICB5OiB7XG4gICAgICAgIG1pbjogMCxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgY2hhcnQubGVnZW5kKGZhbHNlKTtcbiAgICBjaGFydC5heGlzKGZhbHNlKTtcbiAgICBjb25zdCB0b29sdGlwT3B0aW9uOiBUeXBlcy5Ub29sdGlwT3B0aW9uID0ge1xuICAgICAgc2hvd1RpdGxlOiBmYWxzZSxcbiAgICAgIHNob3dNYXJrZXJzOiB0cnVlLFxuICAgICAgc2hvd0Nyb3NzaGFpcnM6IGZhbHNlLFxuICAgICAgZW50ZXJhYmxlOiB0cnVlLFxuICAgICAgZG9tU3R5bGVzOiB7XG4gICAgICAgICdnMi10b29sdGlwJzogeyBwYWRkaW5nOiAnMHB4JyB9LFxuICAgICAgICAnZzItdG9vbHRpcC10aXRsZSc6IHsgZGlzcGxheTogJ25vbmUnIH0sXG4gICAgICAgICdnMi10b29sdGlwLWxpc3QtaXRlbSc6IHsgbWFyZ2luOiAnNHB4JyB9LFxuICAgICAgfSxcbiAgICB9O1xuICAgIGlmICh0b29sdGlwVHlwZSA9PT0gJ21pbmknKSB7XG4gICAgICB0b29sdGlwT3B0aW9uLnBvc2l0aW9uID0gJ3RvcCc7XG4gICAgICB0b29sdGlwT3B0aW9uLmRvbVN0eWxlcyFbJ2cyLXRvb2x0aXAnXSA9IHsgcGFkZGluZzogJzBweCcsIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JywgYm94U2hhZG93OiAnbm9uZScgfTtcbiAgICAgIHRvb2x0aXBPcHRpb24uaXRlbVRwbCA9IGA8bGk+e3ZhbHVlfTwvbGk+YDtcbiAgICAgIHRvb2x0aXBPcHRpb24ub2Zmc2V0ID0gMDtcbiAgICB9XG4gICAgY2hhcnQudG9vbHRpcCh0b29sdGlwT3B0aW9uKTtcbiAgICBjaGFydFxuICAgICAgLmludGVydmFsKClcbiAgICAgIC5wb3NpdGlvbigneCp5JylcbiAgICAgIC50b29sdGlwKCd4KnknLCAoeDogTnpTYWZlQW55LCB5OiBOelNhZmVBbnkpID0+ICh7IG5hbWU6IHgsIHZhbHVlOiB5ICsgeVRvb2x0aXBTdWZmaXggfSkpO1xuXG4gICAgY2hhcnQub24oYGludGVydmFsOmNsaWNrYCwgKGV2OiBFdmVudCkgPT4ge1xuICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMuY2xpY2tJdGVtLmVtaXQoeyBpdGVtOiBldi5kYXRhPy5kYXRhLCBldiB9KSk7XG4gICAgfSk7XG5cbiAgICBjaGFydC5yZW5kZXIoKTtcblxuICAgIHRoaXMuYXR0YWNoQ2hhcnQoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXR0YWNoQ2hhcnQoKTogdm9pZCB7XG4gICAgY29uc3QgeyBfY2hhcnQsIGhlaWdodCwgcGFkZGluZywgZGF0YSwgY29sb3IsIGJvcmRlcldpZHRoIH0gPSB0aGlzO1xuICAgIGlmICghX2NoYXJ0IHx8ICFkYXRhIHx8IGRhdGEubGVuZ3RoIDw9IDApIHJldHVybjtcbiAgICBfY2hhcnQuZ2VvbWV0cmllc1swXS5zaXplKGJvcmRlcldpZHRoKS5jb2xvcihjb2xvcik7XG4gICAgX2NoYXJ0LmhlaWdodCA9IGhlaWdodDtcbiAgICBfY2hhcnQucGFkZGluZyA9IHBhZGRpbmc7XG4gICAgX2NoYXJ0LmNoYW5nZURhdGEoZGF0YSk7XG4gICAgX2NoYXJ0LnJlbmRlcigpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5zdGFsbCgpLCB0aGlzLmRlbGF5KSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLmF0dGFjaENoYXJ0KCkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2NoYXJ0KSB7XG4gICAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLl9jaGFydC5kZXN0cm95KCkpO1xuICAgIH1cbiAgfVxufVxuIl19