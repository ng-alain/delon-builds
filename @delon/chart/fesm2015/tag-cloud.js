import { Component, Input, ViewChild, ElementRef, NgZone, ChangeDetectionStrategy, ChangeDetectorRef, NgModule } from '@angular/core';
import { toNumber, DelonUtilModule } from '@delon/util';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class G2TagCloudComponent {
    /**
     * @param {?} el
     * @param {?} cd
     * @param {?} zone
     */
    constructor(el, cd, zone) {
        this.el = el;
        this.cd = cd;
        this.zone = zone;
        this._height = 0;
        this.padding = 0;
        this.initFlag = false;
    }
    /**
     * @return {?}
     */
    get height() {
        return this._height;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set height(value) {
        this._height = toNumber(value);
        this.cd.detectChanges();
    }
    /**
     * @return {?}
     */
    initTagCloud() {
        // 给point注册一个词云的shape
        G2.Shape.registerShape('point', 'cloud', {
            /**
             * @param {?} cfg
             * @param {?} container
             * @return {?}
             */
            drawShape(cfg, container) {
                /** @type {?} */
                const attrs = Object.assign({}, {
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
    }
    /**
     * @return {?}
     */
    renderChart() {
        if (!this.data || (this.data && this.data.length < 1))
            return;
        this.uninstall();
        this.node.nativeElement.innerHTML = '';
        /** @type {?} */
        const dv = new DataSet.View().source(this.data);
        /** @type {?} */
        const range = dv.range('value');
        /** @type {?} */
        const min = range[0];
        /** @type {?} */
        const max = range[1];
        /** @type {?} */
        const height = +this.height;
        /** @type {?} */
        const width = +this.el.nativeElement.offsetWidth;
        dv.transform({
            type: 'tag-cloud',
            fields: ['x', 'value'],
            size: [width, height],
            padding: this.padding,
            timeInterval: 5000,
            /**
             * @return {?}
             */
            rotate() {
                /** @type {?} */
                let random = ~~(Math.random() * 4) % 4;
                if (random === 2) {
                    random = 0;
                }
                return random * 90; // 0, 90, 270
            },
            /**
             * @param {?} d
             * @return {?}
             */
            fontSize(d) {
                if (d.value) {
                    return ((d.value - min) / (max - min)) * (80 - 24) + 24;
                }
                return 0;
            },
        });
        /** @type {?} */
        const chart = new G2.Chart({
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
    }
    /**
     * @return {?}
     */
    runInstall() {
        this.zone.runOutsideAngular(() => setTimeout(() => this.renderChart()));
    }
    /**
     * @return {?}
     */
    uninstall() {
        if (this.chart) {
            this.chart.destroy();
            this.chart = null;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initFlag = true;
        this.zone.runOutsideAngular(() => setTimeout(() => {
            this.initTagCloud();
            this.runInstall();
        }));
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this.initFlag) {
            this.runInstall();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.uninstall();
    }
}
G2TagCloudComponent.decorators = [
    { type: Component, args: [{
                selector: 'g2-tag-cloud',
                template: `<div #container [ngStyle]="{'height.px': height}"></div>`,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
G2TagCloudComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: NgZone }
];
G2TagCloudComponent.propDecorators = {
    height: [{ type: Input }],
    padding: [{ type: Input }],
    data: [{ type: Input }],
    node: [{ type: ViewChild, args: ['container',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [G2TagCloudComponent];
class G2TagCloudModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: G2TagCloudModule, providers: [] };
    }
}
G2TagCloudModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, DelonUtilModule],
                declarations: [...COMPONENTS],
                exports: [...COMPONENTS],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { G2TagCloudComponent, G2TagCloudModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLWNsb3VkLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AZGVsb24vY2hhcnQvdGFnLWNsb3VkL3RhZy1jbG91ZC5jb21wb25lbnQudHMiLCJuZzovL0BkZWxvbi9jaGFydC90YWctY2xvdWQvdGFnLWNsb3VkLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBWaWV3Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG4gIE9uRGVzdHJveSxcbiAgT25DaGFuZ2VzLFxuICBOZ1pvbmUsXG4gIE9uSW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRvTnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5kZWNsYXJlIHZhciBHMjogYW55O1xuZGVjbGFyZSB2YXIgRGF0YVNldDogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnMi10YWctY2xvdWQnLFxuICB0ZW1wbGF0ZTogYDxkaXYgI2NvbnRhaW5lciBbbmdTdHlsZV09XCJ7J2hlaWdodC5weCc6IGhlaWdodH1cIj48L2Rpdj5gLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgRzJUYWdDbG91ZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBPbkluaXQge1xuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIEBJbnB1dCgpXG4gIGdldCBoZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hlaWdodDtcbiAgfVxuICBzZXQgaGVpZ2h0KHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl9oZWlnaHQgPSB0b051bWJlcih2YWx1ZSk7XG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cbiAgcHJpdmF0ZSBfaGVpZ2h0ID0gMDtcblxuICBASW5wdXQoKVxuICBwYWRkaW5nID0gMDtcblxuICBASW5wdXQoKVxuICBkYXRhOiB7IG5hbWU6IHN0cmluZzsgdmFsdWU6IG51bWJlcjsgY2F0ZWdvcnk/OiBhbnk7IFtrZXk6IHN0cmluZ106IGFueSB9W107XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicpXG4gIHByaXZhdGUgbm9kZTogRWxlbWVudFJlZjtcblxuICBwcml2YXRlIGNoYXJ0OiBhbnk7XG4gIHByaXZhdGUgaW5pdEZsYWcgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgem9uZTogTmdab25lLFxuICApIHt9XG5cbiAgcHJpdmF0ZSBpbml0VGFnQ2xvdWQoKSB7XG4gICAgLy8gw6fCu8KZcG9pbnTDpsKzwqjDpcKGwozDpMK4woDDpMK4wqrDqMKvwo3DpMK6wpHDp8KawoRzaGFwZVxuICAgIEcyLlNoYXBlLnJlZ2lzdGVyU2hhcGUoJ3BvaW50JywgJ2Nsb3VkJywge1xuICAgICAgZHJhd1NoYXBlKGNmZywgY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnN0IGF0dHJzID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICB7fSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBmaWxsT3BhY2l0eTogY2ZnLm9wYWNpdHksXG4gICAgICAgICAgICBmb250U2l6ZTogY2ZnLm9yaWdpbi5fb3JpZ2luLnNpemUsXG4gICAgICAgICAgICByb3RhdGU6IGNmZy5vcmlnaW4uX29yaWdpbi5yb3RhdGUsXG4gICAgICAgICAgICB0ZXh0OiBjZmcub3JpZ2luLl9vcmlnaW4udGV4dCxcbiAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICBmb250RmFtaWx5OiBjZmcub3JpZ2luLl9vcmlnaW4uZm9udCxcbiAgICAgICAgICAgIGZpbGw6IGNmZy5jb2xvcixcbiAgICAgICAgICAgIHRleHRCYXNlbGluZTogJ0FscGhhYmV0aWMnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgY2ZnLnN0eWxlLFxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gY29udGFpbmVyLmFkZFNoYXBlKCd0ZXh0Jywge1xuICAgICAgICAgIGF0dHJzOiBPYmplY3QuYXNzaWduKGF0dHJzLCB7XG4gICAgICAgICAgICB4OiBjZmcueCxcbiAgICAgICAgICAgIHk6IGNmZy55LFxuICAgICAgICAgIH0pLFxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlckNoYXJ0KCkge1xuICAgIGlmICghdGhpcy5kYXRhIHx8ICh0aGlzLmRhdGEgJiYgdGhpcy5kYXRhLmxlbmd0aCA8IDEpKSByZXR1cm47XG5cbiAgICB0aGlzLnVuaW5zdGFsbCgpO1xuICAgIHRoaXMubm9kZS5uYXRpdmVFbGVtZW50LmlubmVySFRNTCA9ICcnO1xuICAgIGNvbnN0IGR2ID0gbmV3IERhdGFTZXQuVmlldygpLnNvdXJjZSh0aGlzLmRhdGEpO1xuICAgIGNvbnN0IHJhbmdlID0gZHYucmFuZ2UoJ3ZhbHVlJyk7XG4gICAgY29uc3QgbWluID0gcmFuZ2VbMF07XG4gICAgY29uc3QgbWF4ID0gcmFuZ2VbMV07XG4gICAgY29uc3QgaGVpZ2h0ID0gK3RoaXMuaGVpZ2h0O1xuICAgIGNvbnN0IHdpZHRoID0gK3RoaXMuZWwubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcblxuICAgIGR2LnRyYW5zZm9ybSh7XG4gICAgICB0eXBlOiAndGFnLWNsb3VkJyxcbiAgICAgIGZpZWxkczogWyd4JywgJ3ZhbHVlJ10sXG4gICAgICBzaXplOiBbd2lkdGgsIGhlaWdodF0sXG4gICAgICBwYWRkaW5nOiB0aGlzLnBhZGRpbmcsXG4gICAgICB0aW1lSW50ZXJ2YWw6IDUwMDAsIC8vIG1heCBleGVjdXRlIHRpbWVcbiAgICAgIHJvdGF0ZSgpIHtcbiAgICAgICAgbGV0IHJhbmRvbSA9IH5+KE1hdGgucmFuZG9tKCkgKiA0KSAlIDQ7XG4gICAgICAgIGlmIChyYW5kb20gPT09IDIpIHtcbiAgICAgICAgICByYW5kb20gPSAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByYW5kb20gKiA5MDsgLy8gMCwgOTAsIDI3MFxuICAgICAgfSxcbiAgICAgIGZvbnRTaXplKGQpIHtcbiAgICAgICAgaWYgKGQudmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gKChkLnZhbHVlIC0gbWluKSAvIChtYXggLSBtaW4pKSAqICg4MCAtIDI0KSArIDI0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfSxcbiAgICB9KTtcbiAgICBjb25zdCBjaGFydCA9IG5ldyBHMi5DaGFydCh7XG4gICAgICBjb250YWluZXI6IHRoaXMubm9kZS5uYXRpdmVFbGVtZW50LFxuICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICBwYWRkaW5nOiB0aGlzLnBhZGRpbmcsXG4gICAgICBmb3JjZUZpdDogdHJ1ZSxcbiAgICB9KTtcbiAgICBjaGFydC5zb3VyY2UoZHYsIHtcbiAgICAgIHg6IHsgbmljZTogZmFsc2UgfSxcbiAgICAgIHk6IHsgbmljZTogZmFsc2UgfSxcbiAgICB9KTtcbiAgICBjaGFydC5sZWdlbmQoZmFsc2UpO1xuICAgIGNoYXJ0LmF4aXMoZmFsc2UpO1xuICAgIGNoYXJ0LnRvb2x0aXAoe1xuICAgICAgc2hvd1RpdGxlOiBmYWxzZSxcbiAgICB9KTtcbiAgICBjaGFydC5jb29yZCgpLnJlZmxlY3QoKTtcbiAgICBjaGFydFxuICAgICAgLnBvaW50KClcbiAgICAgIC5wb3NpdGlvbigneCp5JylcbiAgICAgIC5jb2xvcignY2F0ZWdvcnknKVxuICAgICAgLnNoYXBlKCdjbG91ZCcpXG4gICAgICAudG9vbHRpcCgndmFsdWUqY2F0ZWdvcnknKTtcblxuICAgIGNoYXJ0LnJlbmRlcigpO1xuXG4gICAgdGhpcy5jaGFydCA9IGNoYXJ0O1xuICB9XG5cbiAgcHJpdmF0ZSBydW5JbnN0YWxsKCkge1xuICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMucmVuZGVyQ2hhcnQoKSkpO1xuICB9XG5cbiAgcHJpdmF0ZSB1bmluc3RhbGwoKSB7XG4gICAgaWYgKHRoaXMuY2hhcnQpIHtcbiAgICAgIHRoaXMuY2hhcnQuZGVzdHJveSgpO1xuICAgICAgdGhpcy5jaGFydCA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pbml0RmxhZyA9IHRydWU7XG4gICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5pbml0VGFnQ2xvdWQoKTtcbiAgICAgICAgdGhpcy5ydW5JbnN0YWxsKCk7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW5pdEZsYWcpIHtcbiAgICAgIHRoaXMucnVuSW5zdGFsbCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMudW5pbnN0YWxsKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRGVsb25VdGlsTW9kdWxlIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5pbXBvcnQgeyBHMlRhZ0Nsb3VkQ29tcG9uZW50IH0gZnJvbSAnLi90YWctY2xvdWQuY29tcG9uZW50JztcblxuY29uc3QgQ09NUE9ORU5UUyA9IFtHMlRhZ0Nsb3VkQ29tcG9uZW50XTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRGVsb25VdGlsTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbLi4uQ09NUE9ORU5UU10sXG4gIGV4cG9ydHM6IFsuLi5DT01QT05FTlRTXSxcbn0pXG5leHBvcnQgY2xhc3MgRzJUYWdDbG91ZE1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7IG5nTW9kdWxlOiBHMlRhZ0Nsb3VkTW9kdWxlLCBwcm92aWRlcnM6IFtdIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7SUFpREUsWUFDVSxJQUNBLElBQ0E7UUFGQSxPQUFFLEdBQUYsRUFBRTtRQUNGLE9BQUUsR0FBRixFQUFFO1FBQ0YsU0FBSSxHQUFKLElBQUk7dUJBbkJJLENBQUM7dUJBR1QsQ0FBQzt3QkFXUSxLQUFLO0tBTXBCOzs7O0lBNUJKLElBQ0ksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztLQUNyQjs7Ozs7SUFDRCxJQUFJLE1BQU0sQ0FBQyxLQUFVO1FBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7S0FDekI7Ozs7SUF1Qk8sWUFBWTs7UUFFbEIsRUFBRSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRTs7Ozs7O1lBQ3ZDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsU0FBUzs7Z0JBQ3RCLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQ3pCLEVBQUUsRUFDRjtvQkFDRSxXQUFXLEVBQUUsR0FBRyxDQUFDLE9BQU87b0JBQ3hCLFFBQVEsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJO29CQUNqQyxNQUFNLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTTtvQkFDakMsSUFBSSxF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