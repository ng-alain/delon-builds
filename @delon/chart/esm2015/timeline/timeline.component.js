/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, ElementRef, NgZone, TemplateRef, ChangeDetectionStrategy, ChangeDetectorRef, } from '@angular/core';
import { toNumber } from '@delon/util';
export class G2TimelineComponent {
    /**
     * @param {?} cd
     * @param {?} zone
     */
    constructor(cd, zone) {
        this.cd = cd;
        this.zone = zone;
        // #region fields
        this._title = '';
        this.colorMap = { y1: '#1890FF', y2: '#2FC25B' };
        this.mask = 'HH:mm';
        this.position = 'top';
        this._height = 400;
        this.padding = [60, 20, 40, 40];
        this._borderWidth = 2;
        this.initFlag = false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set title(value) {
        if (value instanceof TemplateRef) {
            this._title = null;
            this._titleTpl = value;
        }
        else {
            this._title = value;
        }
        this.cd.detectChanges();
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
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set borderWidth(value) {
        this._borderWidth = toNumber(value);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.initFlag = true;
        this.runInstall();
    }
    /**
     * @return {?}
     */
    runInstall() {
        this.zone.runOutsideAngular(() => setTimeout(() => this.install()));
    }
    /**
     * @return {?}
     */
    install() {
        if (!this.data || (this.data && this.data.length < 1))
            return;
        // clean
        this.uninstall();
        this.sliderNode.nativeElement.innerHTML = '';
        this.node.nativeElement.innerHTML = '';
        /** @type {?} */
        const MAX = 8;
        /** @type {?} */
        const begin = this.data.length > MAX ? (this.data.length - MAX) / 2 : 0;
        /** @type {?} */
        const ds = new DataSet({
            state: {
                start: this.data[begin - 1].x,
                end: this.data[begin - 1 + MAX].x,
            },
        });
        /** @type {?} */
        const dv = ds.createView().source(this.data);
        dv.source(this.data).transform({
            type: 'filter',
            /**
             * @param {?} obj
             * @return {?}
             */
            callback(obj) {
                /** @type {?} */
                const time = new Date(obj.x).getTime(); // !注意：时间格式，建议转换为时间戳进行比较
                return time >= ds.state.start && time <= ds.state.end;
            },
        });
        /** @type {?} */
        const chart = new G2.Chart({
            container: this.node.nativeElement,
            forceFit: true,
            height: +this.height,
            padding: this.padding,
        });
        chart.axis('x', { title: false });
        chart.axis('y1', {
            title: false,
        });
        chart.axis('y2', false);
        /** @type {?} */
        let max;
        if (this.data[0] && this.data[0].y1 && this.data[0].y2) {
            max = Math.max(this.data.sort((a, b) => b.y1 - a.y1)[0].y1, this.data.sort((a, b) => b.y2 - a.y2)[0].y2);
        }
        chart.source(dv, {
            x: {
                type: 'timeCat',
                tickCount: MAX,
                mask: this.mask,
                range: [0, 1],
            },
            y1: {
                alias: this.titleMap.y1,
                max,
                min: 0,
            },
            y2: {
                alias: this.titleMap.y2,
                max,
                min: 0,
            },
        });
        chart.legend({
            position: this.position,
            custom: true,
            clickable: false,
            items: [
                { value: this.titleMap.y1, fill: this.colorMap.y1 },
                { value: this.titleMap.y2, fill: this.colorMap.y2 },
            ],
        });
        chart
            .line()
            .position('x*y1')
            .color(this.colorMap.y1)
            .size(this._borderWidth);
        chart
            .line()
            .position('x*y2')
            .color(this.colorMap.y2)
            .size(this._borderWidth);
        chart.render();
        /** @type {?} */
        const sliderPadding = Object.assign([], this.padding);
        sliderPadding[0] = 0;
        /** @type {?} */
        const slider = new Slider({
            container: this.sliderNode.nativeElement,
            height: 26,
            padding: sliderPadding,
            scales: {
                x: {
                    type: 'time',
                    tickCount: 16,
                    mask: this.mask,
                },
            },
            backgroundChart: {
                type: 'line',
            },
            start: ds.state.start,
            end: ds.state.end,
            xAxis: 'x',
            yAxis: 'y1',
            data: this.data,
            /**
             * @param {?} __0
             * @return {?}
             */
            onChange({ startValue, endValue }) {
                ds.setState('start', startValue);
                ds.setState('end', endValue);
            },
        });
        slider.render();
        this.chart = chart;
        this.slider = slider;
    }
    /**
     * @return {?}
     */
    uninstall() {
        if (this.chart)
            this.chart.destroy();
        if (this.slider)
            this.slider.destroy();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this.initFlag)
            this.runInstall();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.uninstall();
    }
}
G2TimelineComponent.decorators = [
    { type: Component, args: [{
                selector: 'g2-timeline',
                template: `
  <ng-container *ngIf="_title; else _titleTpl"><h4>{{_title}}</h4></ng-container>
  <div #container></div>
  <div #slider></div>`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false
            }] }
];
/** @nocollapse */
G2TimelineComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NgZone }
];
G2TimelineComponent.propDecorators = {
    title: [{ type: Input }],
    data: [{ type: Input }],
    titleMap: [{ type: Input }],
    colorMap: [{ type: Input }],
    mask: [{ type: Input }],
    position: [{ type: Input }],
    height: [{ type: Input }],
    padding: [{ type: Input }],
    borderWidth: [{ type: Input }],
    node: [{ type: ViewChild, args: ['container',] }],
    sliderNode: [{ type: ViewChild, args: ['slider',] }]
};
if (false) {
    /** @type {?} */
    G2TimelineComponent.prototype._title;
    /** @type {?} */
    G2TimelineComponent.prototype._titleTpl;
    /** @type {?} */
    G2TimelineComponent.prototype.data;
    /** @type {?} */
    G2TimelineComponent.prototype.titleMap;
    /** @type {?} */
    G2TimelineComponent.prototype.colorMap;
    /** @type {?} */
    G2TimelineComponent.prototype.mask;
    /** @type {?} */
    G2TimelineComponent.prototype.position;
    /** @type {?} */
    G2TimelineComponent.prototype._height;
    /** @type {?} */
    G2TimelineComponent.prototype.padding;
    /** @type {?} */
    G2TimelineComponent.prototype._borderWidth;
    /** @type {?} */
    G2TimelineComponent.prototype.node;
    /** @type {?} */
    G2TimelineComponent.prototype.sliderNode;
    /** @type {?} */
    G2TimelineComponent.prototype.chart;
    /** @type {?} */
    G2TimelineComponent.prototype.initFlag;
    /** @type {?} */
    G2TimelineComponent.prototype.slider;
    /** @type {?} */
    G2TimelineComponent.prototype.cd;
    /** @type {?} */
    G2TimelineComponent.prototype.zone;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NoYXJ0L3RpbWVsaW5lLyIsInNvdXJjZXMiOlsidGltZWxpbmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUdWLE1BQU0sRUFDTixXQUFXLEVBQ1gsdUJBQXVCLEVBQ3ZCLGlCQUFpQixHQUVsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBZXZDLE1BQU07Ozs7O0lBMERKLFlBQW9CLEVBQXFCLEVBQVUsSUFBWTtRQUEzQyxPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUFVLFNBQUksR0FBSixJQUFJLENBQVE7O3NCQXREdEQsRUFBRTt3QkFrQjRCLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFO29CQUd4RCxPQUFPO3dCQUUwQixLQUFLO3VCQVNuQyxHQUFHO3VCQUdELENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDOzRCQU1iLENBQUM7d0JBVUwsS0FBSztLQUcyQzs7Ozs7SUFwRG5FLElBQ0ksS0FBSyxDQUFDLEtBQWdDO1FBQ3hDLElBQUksS0FBSyxZQUFZLFdBQVcsRUFBRTtZQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztTQUN4QjthQUFNO1lBQ0wsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDckI7UUFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO0tBQ3pCOzs7O0lBY0QsSUFDSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0tBQ3JCOzs7OztJQUNELElBQUksTUFBTSxDQUFDLEtBQVU7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TCxLQUFLO21CQVdMLEtBQUs7dUJBRUwsS0FBSzt1QkFFTCxLQUFLO21CQUdMLEtBQUs7dUJBRUwsS0FBSztxQkFHTCxLQUFLO3NCQVNMLEtBQUs7MEJBR0wsS0FBSzttQkFRTCxTQUFTLFNBQUMsV0FBVzt5QkFFckIsU0FBUyxTQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBWaWV3Q2hpbGQsXHJcbiAgRWxlbWVudFJlZixcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE5nWm9uZSxcclxuICBUZW1wbGF0ZVJlZixcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBBZnRlclZpZXdJbml0LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyB0b051bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsJztcclxuXHJcbmRlY2xhcmUgdmFyIEcyOiBhbnk7XHJcbmRlY2xhcmUgdmFyIERhdGFTZXQ6IGFueTtcclxuZGVjbGFyZSB2YXIgU2xpZGVyOiBhbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2cyLXRpbWVsaW5lJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJfdGl0bGU7IGVsc2UgX3RpdGxlVHBsXCI+PGg0Pnt7X3RpdGxlfX08L2g0PjwvbmctY29udGFpbmVyPlxyXG4gIDxkaXYgI2NvbnRhaW5lcj48L2Rpdj5cclxuICA8ZGl2ICNzbGlkZXI+PC9kaXY+YCxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEcyVGltZWxpbmVDb21wb25lbnRcclxuICBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0IHtcclxuICAvLyAjcmVnaW9uIGZpZWxkc1xyXG5cclxuICBfdGl0bGUgPSAnJztcclxuICBfdGl0bGVUcGw6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgQElucHV0KClcclxuICBzZXQgdGl0bGUodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4pIHtcclxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XHJcbiAgICAgIHRoaXMuX3RpdGxlID0gbnVsbDtcclxuICAgICAgdGhpcy5fdGl0bGVUcGwgPSB2YWx1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX3RpdGxlID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZGF0YTogQXJyYXk8eyB4OiBEYXRlOyB5MTogbnVtYmVyOyB5MjogbnVtYmVyOyBba2V5OiBzdHJpbmddOiBhbnkgfT47XHJcbiAgQElucHV0KClcclxuICB0aXRsZU1hcDogeyB5MTogc3RyaW5nOyB5Mjogc3RyaW5nIH07XHJcbiAgQElucHV0KClcclxuICBjb2xvck1hcDogeyB5MTogc3RyaW5nOyB5Mjogc3RyaW5nIH0gPSB7IHkxOiAnIzE4OTBGRicsIHkyOiAnIzJGQzI1QicgfTtcclxuXHJcbiAgQElucHV0KClcclxuICBtYXNrOiBzdHJpbmcgPSAnSEg6bW0nO1xyXG4gIEBJbnB1dCgpXHJcbiAgcG9zaXRpb246ICd0b3AnIHwgJ3JpZ2h0JyB8ICdib3R0b20nIHwgJ2xlZnQnID0gJ3RvcCc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IGhlaWdodCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9oZWlnaHQ7XHJcbiAgfVxyXG4gIHNldCBoZWlnaHQodmFsdWU6IGFueSkge1xyXG4gICAgdGhpcy5faGVpZ2h0ID0gdG9OdW1iZXIodmFsdWUpO1xyXG4gIH1cclxuICBwcml2YXRlIF9oZWlnaHQgPSA0MDA7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcGFkZGluZzogbnVtYmVyW10gPSBbNjAsIDIwLCA0MCwgNDBdO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBib3JkZXJXaWR0aCh2YWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLl9ib3JkZXJXaWR0aCA9IHRvTnVtYmVyKHZhbHVlKTtcclxuICB9XHJcbiAgcHJpdmF0ZSBfYm9yZGVyV2lkdGggPSAyO1xyXG5cclxuICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicpXHJcbiAgcHJpdmF0ZSBub2RlOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ3NsaWRlcicpXHJcbiAgcHJpdmF0ZSBzbGlkZXJOb2RlOiBFbGVtZW50UmVmO1xyXG5cclxuICBwcml2YXRlIGNoYXJ0OiBhbnk7XHJcbiAgcHJpdmF0ZSBpbml0RmxhZyA9IGZhbHNlO1xyXG4gIHByaXZhdGUgc2xpZGVyOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIHpvbmU6IE5nWm9uZSkge31cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pbml0RmxhZyA9IHRydWU7XHJcbiAgICB0aGlzLnJ1bkluc3RhbGwoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcnVuSW5zdGFsbCgpIHtcclxuICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5zdGFsbCgpKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluc3RhbGwoKSB7XHJcbiAgICBpZiAoIXRoaXMuZGF0YSB8fCAodGhpcy5kYXRhICYmIHRoaXMuZGF0YS5sZW5ndGggPCAxKSkgcmV0dXJuO1xyXG5cclxuICAgIC8vIGNsZWFuXHJcbiAgICB0aGlzLnVuaW5zdGFsbCgpO1xyXG4gICAgdGhpcy5zbGlkZXJOb2RlLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICB0aGlzLm5vZGUubmF0aXZlRWxlbWVudC5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICBjb25zdCBNQVggPSA4O1xyXG4gICAgY29uc3QgYmVnaW4gPSB0aGlzLmRhdGEubGVuZ3RoID4gTUFYID8gKHRoaXMuZGF0YS5sZW5ndGggLSBNQVgpIC8gMiA6IDA7XHJcblxyXG4gICAgY29uc3QgZHMgPSBuZXcgRGF0YVNldCh7XHJcbiAgICAgIHN0YXRlOiB7XHJcbiAgICAgICAgc3RhcnQ6IHRoaXMuZGF0YVtiZWdpbiAtIDFdLngsXHJcbiAgICAgICAgZW5kOiB0aGlzLmRhdGFbYmVnaW4gLSAxICsgTUFYXS54LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBkdiA9IGRzLmNyZWF0ZVZpZXcoKS5zb3VyY2UodGhpcy5kYXRhKTtcclxuICAgIGR2LnNvdXJjZSh0aGlzLmRhdGEpLnRyYW5zZm9ybSh7XHJcbiAgICAgIHR5cGU6ICdmaWx0ZXInLFxyXG4gICAgICBjYWxsYmFjayhvYmopIHtcclxuICAgICAgICBjb25zdCB0aW1lID0gbmV3IERhdGUob2JqLngpLmdldFRpbWUoKTsgLy8gIeazqOaEj++8muaXtumXtOagvOW8j++8jOW7uuiurui9rOaNouS4uuaXtumXtOaIs+i/m+ihjOavlOi+g1xyXG4gICAgICAgIHJldHVybiB0aW1lID49IGRzLnN0YXRlLnN0YXJ0ICYmIHRpbWUgPD0gZHMuc3RhdGUuZW5kO1xyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgY2hhcnQgPSBuZXcgRzIuQ2hhcnQoe1xyXG4gICAgICBjb250YWluZXI6IHRoaXMubm9kZS5uYXRpdmVFbGVtZW50LFxyXG4gICAgICBmb3JjZUZpdDogdHJ1ZSxcclxuICAgICAgaGVpZ2h0OiArdGhpcy5oZWlnaHQsXHJcbiAgICAgIHBhZGRpbmc6IHRoaXMucGFkZGluZyxcclxuICAgIH0pO1xyXG4gICAgY2hhcnQuYXhpcygneCcsIHsgdGl0bGU6IGZhbHNlIH0pO1xyXG4gICAgY2hhcnQuYXhpcygneTEnLCB7XHJcbiAgICAgIHRpdGxlOiBmYWxzZSxcclxuICAgIH0pO1xyXG4gICAgY2hhcnQuYXhpcygneTInLCBmYWxzZSk7XHJcblxyXG4gICAgbGV0IG1heDtcclxuICAgIGlmICh0aGlzLmRhdGFbMF0gJiYgdGhpcy5kYXRhWzBdLnkxICYmIHRoaXMuZGF0YVswXS55Mikge1xyXG4gICAgICBtYXggPSBNYXRoLm1heChcclxuICAgICAgICB0aGlzLmRhdGEuc29ydCgoYSwgYikgPT4gYi55MSAtIGEueTEpWzBdLnkxLFxyXG4gICAgICAgIHRoaXMuZGF0YS5zb3J0KChhLCBiKSA9PiBiLnkyIC0gYS55MilbMF0ueTIsXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBjaGFydC5zb3VyY2UoZHYsIHtcclxuICAgICAgeDoge1xyXG4gICAgICAgIHR5cGU6ICd0aW1lQ2F0JyxcclxuICAgICAgICB0aWNrQ291bnQ6IE1BWCxcclxuICAgICAgICBtYXNrOiB0aGlzLm1hc2ssXHJcbiAgICAgICAgcmFuZ2U6IFswLCAxXSxcclxuICAgICAgfSxcclxuICAgICAgeTE6IHtcclxuICAgICAgICBhbGlhczogdGhpcy50aXRsZU1hcC55MSxcclxuICAgICAgICBtYXgsXHJcbiAgICAgICAgbWluOiAwLFxyXG4gICAgICB9LFxyXG4gICAgICB5Mjoge1xyXG4gICAgICAgIGFsaWFzOiB0aGlzLnRpdGxlTWFwLnkyLFxyXG4gICAgICAgIG1heCxcclxuICAgICAgICBtaW46IDAsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBjaGFydC5sZWdlbmQoe1xyXG4gICAgICBwb3NpdGlvbjogdGhpcy5wb3NpdGlvbixcclxuICAgICAgY3VzdG9tOiB0cnVlLFxyXG4gICAgICBjbGlja2FibGU6IGZhbHNlLFxyXG4gICAgICBpdGVtczogW1xyXG4gICAgICAgIHsgdmFsdWU6IHRoaXMudGl0bGVNYXAueTEsIGZpbGw6IHRoaXMuY29sb3JNYXAueTEgfSxcclxuICAgICAgICB7IHZhbHVlOiB0aGlzLnRpdGxlTWFwLnkyLCBmaWxsOiB0aGlzLmNvbG9yTWFwLnkyIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBjaGFydFxyXG4gICAgICAubGluZSgpXHJcbiAgICAgIC5wb3NpdGlvbigneCp5MScpXHJcbiAgICAgIC5jb2xvcih0aGlzLmNvbG9yTWFwLnkxKVxyXG4gICAgICAuc2l6ZSh0aGlzLl9ib3JkZXJXaWR0aCk7XHJcbiAgICBjaGFydFxyXG4gICAgICAubGluZSgpXHJcbiAgICAgIC5wb3NpdGlvbigneCp5MicpXHJcbiAgICAgIC5jb2xvcih0aGlzLmNvbG9yTWFwLnkyKVxyXG4gICAgICAuc2l6ZSh0aGlzLl9ib3JkZXJXaWR0aCk7XHJcbiAgICBjaGFydC5yZW5kZXIoKTtcclxuXHJcbiAgICBjb25zdCBzbGlkZXJQYWRkaW5nID0gT2JqZWN0LmFzc2lnbihbXSwgdGhpcy5wYWRkaW5nKTtcclxuICAgIHNsaWRlclBhZGRpbmdbMF0gPSAwO1xyXG4gICAgY29uc3Qgc2xpZGVyID0gbmV3IFNsaWRlcih7XHJcbiAgICAgIGNvbnRhaW5lcjogdGhpcy5zbGlkZXJOb2RlLm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgIGhlaWdodDogMjYsXHJcbiAgICAgIHBhZGRpbmc6IHNsaWRlclBhZGRpbmcsXHJcbiAgICAgIHNjYWxlczoge1xyXG4gICAgICAgIHg6IHtcclxuICAgICAgICAgIHR5cGU6ICd0aW1lJyxcclxuICAgICAgICAgIHRpY2tDb3VudDogMTYsXHJcbiAgICAgICAgICBtYXNrOiB0aGlzLm1hc2ssXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgYmFja2dyb3VuZENoYXJ0OiB7XHJcbiAgICAgICAgdHlwZTogJ2xpbmUnLFxyXG4gICAgICB9LFxyXG4gICAgICBzdGFydDogZHMuc3RhdGUuc3RhcnQsXHJcbiAgICAgIGVuZDogZHMuc3RhdGUuZW5kLFxyXG4gICAgICB4QXhpczogJ3gnLFxyXG4gICAgICB5QXhpczogJ3kxJyxcclxuICAgICAgZGF0YTogdGhpcy5kYXRhLFxyXG4gICAgICBvbkNoYW5nZSh7IHN0YXJ0VmFsdWUsIGVuZFZhbHVlIH0pIHtcclxuICAgICAgICBkcy5zZXRTdGF0ZSgnc3RhcnQnLCBzdGFydFZhbHVlKTtcclxuICAgICAgICBkcy5zZXRTdGF0ZSgnZW5kJywgZW5kVmFsdWUpO1xyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBzbGlkZXIucmVuZGVyKCk7XHJcblxyXG4gICAgdGhpcy5jaGFydCA9IGNoYXJ0O1xyXG4gICAgdGhpcy5zbGlkZXIgPSBzbGlkZXI7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVuaW5zdGFsbCgpIHtcclxuICAgIGlmICh0aGlzLmNoYXJ0KSB0aGlzLmNoYXJ0LmRlc3Ryb3koKTtcclxuICAgIGlmICh0aGlzLnNsaWRlcikgdGhpcy5zbGlkZXIuZGVzdHJveSgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pbml0RmxhZykgdGhpcy5ydW5JbnN0YWxsKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMudW5pbnN0YWxsKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==