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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLWNsb3VkLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AZGVsb24vY2hhcnQvdGFnLWNsb3VkL3RhZy1jbG91ZC5jb21wb25lbnQudHMiLCJuZzovL0BkZWxvbi9jaGFydC90YWctY2xvdWQvdGFnLWNsb3VkLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBWaWV3Q2hpbGQsXHJcbiAgRWxlbWVudFJlZixcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE5nWm9uZSxcclxuICBPbkluaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHRvTnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xyXG5cclxuZGVjbGFyZSB2YXIgRzI6IGFueTtcclxuZGVjbGFyZSB2YXIgRGF0YVNldDogYW55O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnMi10YWctY2xvdWQnLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiAjY29udGFpbmVyIFtuZ1N0eWxlXT1cInsnaGVpZ2h0LnB4JzogaGVpZ2h0fVwiPjwvZGl2PmAsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHMlRhZ0Nsb3VkQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkNoYW5nZXMsIE9uSW5pdCB7XHJcbiAgLy8gI3JlZ2lvbiBmaWVsZHNcclxuXHJcbiAgQElucHV0KClcclxuICBnZXQgaGVpZ2h0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2hlaWdodDtcclxuICB9XHJcbiAgc2V0IGhlaWdodCh2YWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLl9oZWlnaHQgPSB0b051bWJlcih2YWx1ZSk7XHJcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcbiAgcHJpdmF0ZSBfaGVpZ2h0ID0gMDtcclxuXHJcbiAgQElucHV0KClcclxuICBwYWRkaW5nID0gMDtcclxuXHJcbiAgQElucHV0KClcclxuICBkYXRhOiB7IG5hbWU6IHN0cmluZzsgdmFsdWU6IG51bWJlcjsgY2F0ZWdvcnk/OiBhbnk7IFtrZXk6IHN0cmluZ106IGFueSB9W107XHJcblxyXG4gIC8vICNlbmRyZWdpb25cclxuXHJcbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJylcclxuICBwcml2YXRlIG5vZGU6IEVsZW1lbnRSZWY7XHJcblxyXG4gIHByaXZhdGUgY2hhcnQ6IGFueTtcclxuICBwcml2YXRlIGluaXRGbGFnID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSB6b25lOiBOZ1pvbmUsXHJcbiAgKSB7fVxyXG5cclxuICBwcml2YXRlIGluaXRUYWdDbG91ZCgpIHtcclxuICAgIC8vIMOnwrvCmXBvaW50w6bCs8Kow6XChsKMw6TCuMKAw6TCuMKqw6jCr8KNw6TCusKRw6fCmsKEc2hhcGVcclxuICAgIEcyLlNoYXBlLnJlZ2lzdGVyU2hhcGUoJ3BvaW50JywgJ2Nsb3VkJywge1xyXG4gICAgICBkcmF3U2hhcGUoY2ZnLCBjb250YWluZXIpIHtcclxuICAgICAgICBjb25zdCBhdHRycyA9IE9iamVjdC5hc3NpZ24oXHJcbiAgICAgICAgICB7fSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZmlsbE9wYWNpdHk6IGNmZy5vcGFjaXR5LFxyXG4gICAgICAgICAgICBmb250U2l6ZTogY2ZnLm9yaWdpbi5fb3JpZ2luLnNpemUsXHJcbiAgICAgICAgICAgIHJvdGF0ZTogY2ZnLm9yaWdpbi5fb3JpZ2luLnJvdGF0ZSxcclxuICAgICAgICAgICAgdGV4dDogY2ZnLm9yaWdpbi5fb3JpZ2luLnRleHQsXHJcbiAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IGNmZy5vcmlnaW4uX29yaWdpbi5mb250LFxyXG4gICAgICAgICAgICBmaWxsOiBjZmcuY29sb3IsXHJcbiAgICAgICAgICAgIHRleHRCYXNlbGluZTogJ0FscGhhYmV0aWMnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGNmZy5zdHlsZSxcclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiBjb250YWluZXIuYWRkU2hhcGUoJ3RleHQnLCB7XHJcbiAgICAgICAgICBhdHRyczogT2JqZWN0LmFzc2lnbihhdHRycywge1xyXG4gICAgICAgICAgICB4OiBjZmcueCxcclxuICAgICAgICAgICAgeTogY2ZnLnksXHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW5kZXJDaGFydCgpIHtcclxuICAgIGlmICghdGhpcy5kYXRhIHx8ICh0aGlzLmRhdGEgJiYgdGhpcy5kYXRhLmxlbmd0aCA8IDEpKSByZXR1cm47XHJcblxyXG4gICAgdGhpcy51bmluc3RhbGwoKTtcclxuICAgIHRoaXMubm9kZS5uYXRpdmVFbGVtZW50LmlubmVySFRNTCA9ICcnO1xyXG4gICAgY29uc3QgZHYgPSBuZXcgRGF0YVNldC5WaWV3KCkuc291cmNlKHRoaXMuZGF0YSk7XHJcbiAgICBjb25zdCByYW5nZSA9IGR2LnJhbmdlKCd2YWx1ZScpO1xyXG4gICAgY29uc3QgbWluID0gcmFuZ2VbMF07XHJcbiAgICBjb25zdCBtYXggPSByYW5nZVsxXTtcclxuICAgIGNvbnN0IGhlaWdodCA9ICt0aGlzLmhlaWdodDtcclxuICAgIGNvbnN0IHdpZHRoID0gK3RoaXMuZWwubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcclxuXHJcbiAgICBkdi50cmFuc2Zvcm0oe1xyXG4gICAgICB0eXBlOiAndGFnLWNsb3VkJyxcclxuICAgICAgZmllbGRzOiBbJ3gnLCAndmFsdWUnXSxcclxuICAgICAgc2l6ZTogW3dpZHRoLCBoZWlnaHRdLFxyXG4gICAgICBwYWRkaW5nOiB0aGlzLnBhZGRpbmcsXHJcbiAgICAgIHRpbWVJbnRlcnZhbDogNTAwMCwgLy8gbWF4IGV4ZWN1dGUgdGltZVxyXG4gICAgICByb3RhdGUoKSB7XHJcbiAgICAgICAgbGV0IHJhbmRvbSA9IH5+KE1hdGgucmFuZG9tKCkgKiA0KSAlIDQ7XHJcbiAgICAgICAgaWYgKHJhbmRvbSA9PT0gMikge1xyXG4gICAgICAgICAgcmFuZG9tID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJhbmRvbSAqIDkwOyAvLyAwLCA5MCwgMjcwXHJcbiAgICAgIH0sXHJcbiAgICAgIGZvbnRTaXplKGQpIHtcclxuICAgICAgICBpZiAoZC52YWx1ZSkge1xyXG4gICAgICAgICAgcmV0dXJuICgoZC52YWx1ZSAtIG1pbikgLyAobWF4IC0gbWluKSkgKiAoODAgLSAyNCkgKyAyNDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGNoYXJ0ID0gbmV3IEcyLkNoYXJ0KHtcclxuICAgICAgY29udGFpbmVyOiB0aGlzLm5vZGUubmF0aXZlRWxlbWVudCxcclxuICAgICAgd2lkdGg6IHdpZHRoLFxyXG4gICAgICBoZWlnaHQ6IGhlaWdodCxcclxuICAgICAgcGFkZGluZzogdGhpcy5wYWRkaW5nLFxyXG4gICAgICBmb3JjZUZpdDogdHJ1ZSxcclxuICAgIH0pO1xyXG4gICAgY2hhcnQuc291cmNlKGR2LCB7XHJcbiAgICAgIHg6IHsgbmljZTogZmFsc2UgfSxcclxuICAgICAgeTogeyBuaWNlOiBmYWxzZSB9LFxyXG4gICAgfSk7XHJcbiAgICBjaGFydC5sZWdlbmQoZmFsc2UpO1xyXG4gICAgY2hhcnQuYXhpcyhmYWxzZSk7XHJcbiAgICBjaGFydC50b29sdGlwKHtcclxuICAgICAgc2hvd1RpdGxlOiBmYWxzZSxcclxuICAgIH0pO1xyXG4gICAgY2hhcnQuY29vcmQoKS5yZWZsZWN0KCk7XHJcbiAgICBjaGFydFxyXG4gICAgICAucG9pbnQoKVxyXG4gICAgICAucG9zaXRpb24oJ3gqeScpXHJcbiAgICAgIC5jb2xvcignY2F0ZWdvcnknKVxyXG4gICAgICAuc2hhcGUoJ2Nsb3VkJylcclxuICAgICAgLnRvb2x0aXAoJ3ZhbHVlKmNhdGVnb3J5Jyk7XHJcblxyXG4gICAgY2hhcnQucmVuZGVyKCk7XHJcblxyXG4gICAgdGhpcy5jaGFydCA9IGNoYXJ0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBydW5JbnN0YWxsKCkge1xyXG4gICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5yZW5kZXJDaGFydCgpKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVuaW5zdGFsbCgpIHtcclxuICAgIGlmICh0aGlzLmNoYXJ0KSB7XHJcbiAgICAgIHRoaXMuY2hhcnQuZGVzdHJveSgpO1xyXG4gICAgICB0aGlzLmNoYXJ0ID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pbml0RmxhZyA9IHRydWU7XHJcbiAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT5cclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pbml0VGFnQ2xvdWQoKTtcclxuICAgICAgICB0aGlzLnJ1bkluc3RhbGwoKTtcclxuICAgICAgfSksXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pbml0RmxhZykge1xyXG4gICAgICB0aGlzLnJ1bkluc3RhbGwoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy51bmluc3RhbGwoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRGVsb25VdGlsTW9kdWxlIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xyXG5cclxuaW1wb3J0IHsgRzJUYWdDbG91ZENvbXBvbmVudCB9IGZyb20gJy4vdGFnLWNsb3VkLmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCBDT01QT05FTlRTID0gW0cyVGFnQ2xvdWRDb21wb25lbnRdO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBEZWxvblV0aWxNb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogWy4uLkNPTVBPTkVOVFNdLFxyXG4gIGV4cG9ydHM6IFsuLi5DT01QT05FTlRTXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEcyVGFnQ2xvdWRNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHsgbmdNb2R1bGU6IEcyVGFnQ2xvdWRNb2R1bGUsIHByb3ZpZGVyczogW10gfTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7OztJQWlERSxZQUNVLElBQ0EsSUFDQTtRQUZBLE9BQUUsR0FBRixFQUFFO1FBQ0YsT0FBRSxHQUFGLEVBQUU7UUFDRixTQUFJLEdBQUosSUFBSTt1QkFuQkksQ0FBQzt1QkFHVCxDQUFDO3dCQVdRLEtBQUs7S0FNcEI7Ozs7SUE1QkosSUFDSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0tBQ3JCOzs7OztJQUNELElBQUksTUFBTSxDQUFDLEtBQVU7UUFDbkIsSUFBSSxDQUFDLE9BQU8s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