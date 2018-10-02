/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, ElementRef, NgZone, ChangeDetectionStrategy, ChangeDetectorRef, } from '@angular/core';
import { toNumber } from '@delon/util';
export class G2TagCloudComponent {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLWNsb3VkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9jaGFydC90YWctY2xvdWQvIiwic291cmNlcyI6WyJ0YWctY2xvdWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUdWLE1BQU0sRUFFTix1QkFBdUIsRUFDdkIsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFVdkMsTUFBTTs7Ozs7O0lBMkJKLFlBQ1UsSUFDQSxJQUNBO1FBRkEsT0FBRSxHQUFGLEVBQUU7UUFDRixPQUFFLEdBQUYsRUFBRTtRQUNGLFNBQUksR0FBSixJQUFJO3VCQW5CSSxDQUFDO3VCQUdULENBQUM7d0JBV1EsS0FBSztLQU1wQjs7OztJQTVCSixJQUNJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7S0FDckI7Ozs7O0lBQ0QsSUFBSSxNQUFNLENBQUMsS0FBVTtRQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO0tBQ3pCOzs7O0lBdUJPLFlBQVk7O1FBRWxCLEVBQUUsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUU7Ozs7OztZQUN2QyxTQUFTLENBQUMsR0FBRyxFQUFFLFNBQVM7O2dCQUN0QixNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxDQUN6QixFQUFFLEVBQ0Y7b0JBQ0UsV0FBVyxFQUFFLEdBQUcsQ0FBQyxPQUFPO29CQUN4QixRQUFRLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSTtvQkFDakMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU07b0JBQ2pDLElBQUksRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJO29CQUM3QixTQUFTLEVBQUUsUUFBUTtvQkFDbkIsVUFBVSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUk7b0JBQ25DLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSztvQkFDZixZQUFZLEVBQUUsWUFBWTtpQkFDM0IsRUFDRCxHQUFHLENBQUMsS0FBSyxDQUNWLENBQUM7Z0JBQ0YsT0FBTyxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRTtvQkFDaEMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFO3dCQUMxQixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7d0JBQ1IsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO3FCQUNULENBQUM7aUJBQ0gsQ0FBQyxDQUFDO2FBQ0o7U0FDRixDQUFDLENBQUM7Ozs7O0lBR0csV0FBVztRQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQUUsT0FBTztRQUU5RCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQzs7UUFDdkMsTUFBTSxFQUFFLEdBQUcsSUFBSSxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzs7UUFDaEQsTUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQzs7UUFDaEMsTUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDOztRQUNyQixNQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7O1FBQ3JCLE1BQU0sTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQzs7UUFDNUIsTUFBTSxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7UUFFakQsRUFBRSxDQUFDLFNBQVMsQ0FBQztZQUNYLElBQUksRUFBRSxXQUFXO1lBQ2pCLE1BQU0sRUFBRSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUM7WUFDdEIsSUFBSSxFQUFFLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQztZQUNyQixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsWUFBWSxFQUFFLElBQUk7Ozs7WUFDbEIsTUFBTTs7Z0JBQ0osSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDdkMsSUFBSSxNQUFNLEtBQUssQ0FBQyxFQUFFO29CQUNoQixNQUFNLEdBQUcsQ0FBQyxDQUFDO2lCQUNaO2dCQUNELE9BQU8sTUFBTSxHQUFHLEVBQUUsQ0FBQzthQUNwQjs7Ozs7WUFDRCxRQUFRLENBQUMsQ0FBQztnQkFDUixJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUU7b0JBQ1gsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztpQkFDekQ7Z0JBQ0QsT0FBTyxDQUFDLENBQUM7YUFDVjtTQUNGLENBQUMsQ0FBQzs7UUFDSCxNQUFNLEtBQUssR0FBRyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDekIsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYTtZQUNsQyxLQUFLLEVBQUUsS0FBSztZQUNaLE1BQU0sRUFBRSxNQUFNO1lBQ2QsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3JCLFFBQVEsRUFBRSxJQUFJO1NBQ2YsQ0FBQyxDQUFDO1FBQ0gsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUU7WUFDZixDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFO1lBQ2xCLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7U0FDbkIsQ0FBQyxDQUFDO1FBQ0gsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwQixLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xCLEtBQUssQ0FBQyxPQUFPLENBQUM7WUFDWixTQUFTLEVBQUUsS0FBSztTQUNqQixDQUFDLENBQUM7UUFDSCxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDeEIsS0FBSzthQUNGLEtBQUssRUFBRTthQUNQLFFBQVEsQ0FBQyxLQUFLLENBQUM7YUFDZixLQUFLLENBQUMsVUFBVSxDQUFDO2FBQ2pCLEtBQUssQ0FBQyxPQUFPLENBQUM7YUFDZCxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUU3QixLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFZixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQzs7Ozs7SUFHYixVQUFVO1FBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7Ozs7O0lBR2xFLFNBQVM7UUFDZixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1NBQ25COzs7OztJQUdILFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxDQUMvQixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNuQixDQUFDLENBQ0gsQ0FBQztLQUNIOzs7O0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDbkI7S0FDRjs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7S0FDbEI7OztZQTVKRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFFBQVEsRUFBRSwwREFBMEQ7Z0JBQ3BFLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7O1lBakJDLFVBQVU7WUFNVixpQkFBaUI7WUFIakIsTUFBTTs7O3FCQWtCTCxLQUFLO3NCQVVMLEtBQUs7bUJBR0wsS0FBSzttQkFLTCxTQUFTLFNBQUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIFZpZXdDaGlsZCxcclxuICBFbGVtZW50UmVmLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkNoYW5nZXMsXHJcbiAgTmdab25lLFxyXG4gIE9uSW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgdG9OdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XHJcblxyXG5kZWNsYXJlIHZhciBHMjogYW55O1xyXG5kZWNsYXJlIHZhciBEYXRhU2V0OiBhbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2cyLXRhZy1jbG91ZCcsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2ICNjb250YWluZXIgW25nU3R5bGVdPVwieydoZWlnaHQucHgnOiBoZWlnaHR9XCI+PC9kaXY+YCxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEcyVGFnQ2xvdWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uQ2hhbmdlcywgT25Jbml0IHtcclxuICAvLyAjcmVnaW9uIGZpZWxkc1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGdldCBoZWlnaHQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faGVpZ2h0O1xyXG4gIH1cclxuICBzZXQgaGVpZ2h0KHZhbHVlOiBhbnkpIHtcclxuICAgIHRoaXMuX2hlaWdodCA9IHRvTnVtYmVyKHZhbHVlKTtcclxuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuICBwcml2YXRlIF9oZWlnaHQgPSAwO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHBhZGRpbmcgPSAwO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGRhdGE6IHsgbmFtZTogc3RyaW5nOyB2YWx1ZTogbnVtYmVyOyBjYXRlZ29yeT86IGFueTsgW2tleTogc3RyaW5nXTogYW55IH1bXTtcclxuXHJcbiAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICBAVmlld0NoaWxkKCdjb250YWluZXInKVxyXG4gIHByaXZhdGUgbm9kZTogRWxlbWVudFJlZjtcclxuXHJcbiAgcHJpdmF0ZSBjaGFydDogYW55O1xyXG4gIHByaXZhdGUgaW5pdEZsYWcgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIHpvbmU6IE5nWm9uZSxcclxuICApIHt9XHJcblxyXG4gIHByaXZhdGUgaW5pdFRhZ0Nsb3VkKCkge1xyXG4gICAgLy8g57uZcG9pbnTms6jlhozkuIDkuKror43kupHnmoRzaGFwZVxyXG4gICAgRzIuU2hhcGUucmVnaXN0ZXJTaGFwZSgncG9pbnQnLCAnY2xvdWQnLCB7XHJcbiAgICAgIGRyYXdTaGFwZShjZmcsIGNvbnRhaW5lcikge1xyXG4gICAgICAgIGNvbnN0IGF0dHJzID0gT2JqZWN0LmFzc2lnbihcclxuICAgICAgICAgIHt9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBmaWxsT3BhY2l0eTogY2ZnLm9wYWNpdHksXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBjZmcub3JpZ2luLl9vcmlnaW4uc2l6ZSxcclxuICAgICAgICAgICAgcm90YXRlOiBjZmcub3JpZ2luLl9vcmlnaW4ucm90YXRlLFxyXG4gICAgICAgICAgICB0ZXh0OiBjZmcub3JpZ2luLl9vcmlnaW4udGV4dCxcclxuICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgZm9udEZhbWlseTogY2ZnLm9yaWdpbi5fb3JpZ2luLmZvbnQsXHJcbiAgICAgICAgICAgIGZpbGw6IGNmZy5jb2xvcixcclxuICAgICAgICAgICAgdGV4dEJhc2VsaW5lOiAnQWxwaGFiZXRpYycsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgY2ZnLnN0eWxlLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lci5hZGRTaGFwZSgndGV4dCcsIHtcclxuICAgICAgICAgIGF0dHJzOiBPYmplY3QuYXNzaWduKGF0dHJzLCB7XHJcbiAgICAgICAgICAgIHg6IGNmZy54LFxyXG4gICAgICAgICAgICB5OiBjZmcueSxcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbmRlckNoYXJ0KCkge1xyXG4gICAgaWYgKCF0aGlzLmRhdGEgfHwgKHRoaXMuZGF0YSAmJiB0aGlzLmRhdGEubGVuZ3RoIDwgMSkpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLnVuaW5zdGFsbCgpO1xyXG4gICAgdGhpcy5ub2RlLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBjb25zdCBkdiA9IG5ldyBEYXRhU2V0LlZpZXcoKS5zb3VyY2UodGhpcy5kYXRhKTtcclxuICAgIGNvbnN0IHJhbmdlID0gZHYucmFuZ2UoJ3ZhbHVlJyk7XHJcbiAgICBjb25zdCBtaW4gPSByYW5nZVswXTtcclxuICAgIGNvbnN0IG1heCA9IHJhbmdlWzFdO1xyXG4gICAgY29uc3QgaGVpZ2h0ID0gK3RoaXMuaGVpZ2h0O1xyXG4gICAgY29uc3Qgd2lkdGggPSArdGhpcy5lbC5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xyXG5cclxuICAgIGR2LnRyYW5zZm9ybSh7XHJcbiAgICAgIHR5cGU6ICd0YWctY2xvdWQnLFxyXG4gICAgICBmaWVsZHM6IFsneCcsICd2YWx1ZSddLFxyXG4gICAgICBzaXplOiBbd2lkdGgsIGhlaWdodF0sXHJcbiAgICAgIHBhZGRpbmc6IHRoaXMucGFkZGluZyxcclxuICAgICAgdGltZUludGVydmFsOiA1MDAwLCAvLyBtYXggZXhlY3V0ZSB0aW1lXHJcbiAgICAgIHJvdGF0ZSgpIHtcclxuICAgICAgICBsZXQgcmFuZG9tID0gfn4oTWF0aC5yYW5kb20oKSAqIDQpICUgNDtcclxuICAgICAgICBpZiAocmFuZG9tID09PSAyKSB7XHJcbiAgICAgICAgICByYW5kb20gPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmFuZG9tICogOTA7IC8vIDAsIDkwLCAyNzBcclxuICAgICAgfSxcclxuICAgICAgZm9udFNpemUoZCkge1xyXG4gICAgICAgIGlmIChkLnZhbHVlKSB7XHJcbiAgICAgICAgICByZXR1cm4gKChkLnZhbHVlIC0gbWluKSAvIChtYXggLSBtaW4pKSAqICg4MCAtIDI0KSArIDI0O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMDtcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgY2hhcnQgPSBuZXcgRzIuQ2hhcnQoe1xyXG4gICAgICBjb250YWluZXI6IHRoaXMubm9kZS5uYXRpdmVFbGVtZW50LFxyXG4gICAgICB3aWR0aDogd2lkdGgsXHJcbiAgICAgIGhlaWdodDogaGVpZ2h0LFxyXG4gICAgICBwYWRkaW5nOiB0aGlzLnBhZGRpbmcsXHJcbiAgICAgIGZvcmNlRml0OiB0cnVlLFxyXG4gICAgfSk7XHJcbiAgICBjaGFydC5zb3VyY2UoZHYsIHtcclxuICAgICAgeDogeyBuaWNlOiBmYWxzZSB9LFxyXG4gICAgICB5OiB7IG5pY2U6IGZhbHNlIH0sXHJcbiAgICB9KTtcclxuICAgIGNoYXJ0LmxlZ2VuZChmYWxzZSk7XHJcbiAgICBjaGFydC5heGlzKGZhbHNlKTtcclxuICAgIGNoYXJ0LnRvb2x0aXAoe1xyXG4gICAgICBzaG93VGl0bGU6IGZhbHNlLFxyXG4gICAgfSk7XHJcbiAgICBjaGFydC5jb29yZCgpLnJlZmxlY3QoKTtcclxuICAgIGNoYXJ0XHJcbiAgICAgIC5wb2ludCgpXHJcbiAgICAgIC5wb3NpdGlvbigneCp5JylcclxuICAgICAgLmNvbG9yKCdjYXRlZ29yeScpXHJcbiAgICAgIC5zaGFwZSgnY2xvdWQnKVxyXG4gICAgICAudG9vbHRpcCgndmFsdWUqY2F0ZWdvcnknKTtcclxuXHJcbiAgICBjaGFydC5yZW5kZXIoKTtcclxuXHJcbiAgICB0aGlzLmNoYXJ0ID0gY2hhcnQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJ1bkluc3RhbGwoKSB7XHJcbiAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLnJlbmRlckNoYXJ0KCkpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdW5pbnN0YWxsKCkge1xyXG4gICAgaWYgKHRoaXMuY2hhcnQpIHtcclxuICAgICAgdGhpcy5jaGFydC5kZXN0cm95KCk7XHJcbiAgICAgIHRoaXMuY2hhcnQgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmluaXRGbGFnID0gdHJ1ZTtcclxuICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PlxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLmluaXRUYWdDbG91ZCgpO1xyXG4gICAgICAgIHRoaXMucnVuSW5zdGFsbCgpO1xyXG4gICAgICB9KSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmluaXRGbGFnKSB7XHJcbiAgICAgIHRoaXMucnVuSW5zdGFsbCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLnVuaW5zdGFsbCgpO1xyXG4gIH1cclxufVxyXG4iXX0=