/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// tslint:disable:no-any
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostBinding, Input, NgZone, TemplateRef, ViewChild, } from '@angular/core';
import { InputBoolean, InputNumber } from '@delon/util';
export class G2RadarComponent {
    /**
     * @param {?} cdr
     * @param {?} zone
     */
    constructor(cdr, zone) {
        this.cdr = cdr;
        this.zone = zone;
        // #region fields
        this._title = '';
        this.height = 0;
        this.padding = [44, 30, 16, 30];
        this.hasLegend = true;
        this.tickCount = 4;
        this.data = [];
        this.colors = [
            '#1890FF',
            '#FACC14',
            '#2FC25B',
            '#8543E0',
            '#F04864',
            '#13C2C2',
            '#fa8c16',
            '#a0d911',
        ];
        this.legendData = [];
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
        else
            this._title = value;
    }
    /**
     * @param {?} i
     * @return {?}
     */
    _click(i) {
        this.legendData[i].checked = !this.legendData[i].checked;
        if (this.chart) {
            // const filterItem = this.legendData.filter(l => l.checked).map(l => l.name);
            this.chart.filter('name', (val) => this.legendData.find(w => w.name === val).checked);
            this.chart.repaint();
        }
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
        this.uninstall();
        this.node.nativeElement.innerHTML = '';
        /** @type {?} */
        const chart = new G2.Chart({
            container: this.node.nativeElement,
            forceFit: true,
            height: +this.height - (this.hasLegend ? 80 : 22),
            padding: this.padding,
        });
        chart.source(this.data, {
            value: {
                min: 0,
                tickCount: this.tickCount,
            },
        });
        chart.coord('polar');
        chart.legend(false);
        chart.axis('label', {
            line: null,
            labelOffset: 8,
            labels: {
                label: {
                    fill: 'rgba(0, 0, 0, .65)',
                },
            },
            grid: {
                line: {
                    stroke: '#e9e9e9',
                    lineWidth: 1,
                    lineDash: [0, 0],
                },
            },
        });
        chart.axis('value', {
            grid: {
                type: 'polygon',
                line: {
                    stroke: '#e9e9e9',
                    lineWidth: 1,
                    lineDash: [0, 0],
                },
            },
            labels: {
                label: {
                    fill: 'rgba(0, 0, 0, .65)',
                },
            },
        });
        chart
            .line()
            .position('label*value')
            .color('name', this.colors);
        chart
            .point()
            .position('label*value')
            .color('name', this.colors)
            .shape('circle')
            .size(3);
        chart.render();
        this.chart = chart;
        if (this.hasLegend) {
            this.zone.run(() => {
                this.legendData = chart
                    .getAllGeoms()[0]
                    ._attrs.dataArray.map((item) => {
                    /** @type {?} */
                    const origin = item[0]._origin;
                    /** @type {?} */
                    const result = {
                        name: origin.name,
                        color: item[0].color,
                        checked: true,
                        value: item.reduce((p, n) => p + n._origin.value, 0),
                    };
                    return result;
                });
                this.cdr.detectChanges();
            });
        }
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
    ngOnChanges() {
        this.runInstall();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.uninstall();
    }
}
G2RadarComponent.decorators = [
    { type: Component, args: [{
                selector: 'g2-radar',
                template: "<h4 *ngIf=\"_title; else _titleTpl\">\n  {{ _title }}</h4>\n<div #container></div>\n<div nz-row class=\"g2-radar__legend\" *ngIf=\"hasLegend\">\n  <div nz-col [nzSpan]=\"24 / legendData.length\" *ngFor=\"let i of legendData; let idx = index\" (click)=\"_click(idx)\"\n    class=\"g2-radar__legend-item\">\n    <i class=\"g2-radar__legend-dot\" [ngStyle]=\"{'background-color': !i.checked ? '#aaa' : i.color}\"></i>\n    {{i.name}}\n    <h6 class=\"g2-radar__legend-title\">{{i.value}}</h6>\n  </div>\n</div>\n",
                host: { '[class.g2-radar]': 'true' },
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
G2RadarComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NgZone }
];
G2RadarComponent.propDecorators = {
    title: [{ type: Input }],
    height: [{ type: HostBinding, args: ['style.height.px',] }, { type: Input }],
    padding: [{ type: Input }],
    hasLegend: [{ type: Input }],
    tickCount: [{ type: Input }],
    data: [{ type: Input }],
    colors: [{ type: Input }],
    node: [{ type: ViewChild, args: ['container',] }]
};
tslib_1.__decorate([
    InputNumber(),
    tslib_1.__metadata("design:type", Object)
], G2RadarComponent.prototype, "height", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], G2RadarComponent.prototype, "hasLegend", void 0);
tslib_1.__decorate([
    InputNumber(),
    tslib_1.__metadata("design:type", Object)
], G2RadarComponent.prototype, "tickCount", void 0);
if (false) {
    /** @type {?} */
    G2RadarComponent.prototype._title;
    /** @type {?} */
    G2RadarComponent.prototype._titleTpl;
    /** @type {?} */
    G2RadarComponent.prototype.height;
    /** @type {?} */
    G2RadarComponent.prototype.padding;
    /** @type {?} */
    G2RadarComponent.prototype.hasLegend;
    /** @type {?} */
    G2RadarComponent.prototype.tickCount;
    /** @type {?} */
    G2RadarComponent.prototype.data;
    /** @type {?} */
    G2RadarComponent.prototype.colors;
    /** @type {?} */
    G2RadarComponent.prototype.node;
    /** @type {?} */
    G2RadarComponent.prototype.chart;
    /** @type {?} */
    G2RadarComponent.prototype.legendData;
    /** @type {?} */
    G2RadarComponent.prototype.cdr;
    /** @type {?} */
    G2RadarComponent.prototype.zone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NoYXJ0L3JhZGFyLyIsInNvdXJjZXMiOlsicmFkYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsV0FBVyxFQUNYLEtBQUssRUFDTCxNQUFNLEVBR04sV0FBVyxFQUNYLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQVksWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQVVsRSxNQUFNLE9BQU8sZ0JBQWdCOzs7OztJQWtEM0IsWUFBb0IsR0FBc0IsRUFBVSxJQUFZO1FBQTVDLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBUTs7UUEvQ2hFLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFXWSxXQUFNLEdBQUcsQ0FBQyxDQUFDO1FBR25DLFlBQU8sR0FBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRVosY0FBUyxHQUFHLElBQUksQ0FBQztRQUVsQixjQUFTLEdBQUcsQ0FBQyxDQUFDO1FBR3RDLFNBQUksR0FLQyxFQUFFLENBQUM7UUFFQyxXQUFNLEdBQUc7WUFDaEIsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7U0FDVixDQUFDO1FBUUYsZUFBVSxHQUFVLEVBQUUsQ0FBQztJQUU2QyxDQUFDOzs7OztJQTdDckUsSUFDSSxLQUFLLENBQUMsS0FBaUM7UUFDekMsSUFBSSxLQUFLLFlBQVksV0FBVyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFD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ZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdG9OdW1iZXIsIElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbmRlY2xhcmUgdmFyIEcyOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2cyLXJhZGFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JhZGFyLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDogeyAnW2NsYXNzLmcyLXJhZGFyXSc6ICd0cnVlJyB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgRzJSYWRhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBfdGl0bGUgPSAnJztcbiAgX3RpdGxlVHBsOiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KClcbiAgc2V0IHRpdGxlKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPikge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICB0aGlzLl90aXRsZSA9IG51bGw7XG4gICAgICB0aGlzLl90aXRsZVRwbCA9IHZhbHVlO1xuICAgIH0gZWxzZSB0aGlzLl90aXRsZSA9IHZhbHVlO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5oZWlnaHQucHgnKVxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBoZWlnaHQgPSAwO1xuXG4gIEBJbnB1dCgpXG4gIHBhZGRpbmc6IG51bWJlcltdID0gWzQ0LCAzMCwgMTYsIDMwXTtcblxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgaGFzTGVnZW5kID0gdHJ1ZTtcblxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSB0aWNrQ291bnQgPSA0O1xuXG4gIEBJbnB1dCgpXG4gIGRhdGE6IEFycmF5PHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICB2YWx1ZTogbnVtYmVyO1xuICAgIFtrZXk6IHN0cmluZ106IGFueTtcbiAgfT4gPSBbXTtcblxuICBASW5wdXQoKSBjb2xvcnMgPSBbXG4gICAgJyMxODkwRkYnLFxuICAgICcjRkFDQzE0JyxcbiAgICAnIzJGQzI1QicsXG4gICAgJyM4NTQzRTAnLFxuICAgICcjRjA0ODY0JyxcbiAgICAnIzEzQzJDMicsXG4gICAgJyNmYThjMTYnLFxuICAgICcjYTBkOTExJyxcbiAgXTtcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJylcbiAgcHJpdmF0ZSBub2RlOiBFbGVtZW50UmVmO1xuXG4gIHByaXZhdGUgY2hhcnQ6IGFueTtcbiAgbGVnZW5kRGF0YTogYW55W10gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgem9uZTogTmdab25lKSB7IH1cblxuICBfY2xpY2soaTogbnVtYmVyKSB7XG4gICAgdGhpcy5sZWdlbmREYXRhW2ldLmNoZWNrZWQgPSAhdGhpcy5sZWdlbmREYXRhW2ldLmNoZWNrZWQ7XG5cbiAgICBpZiAodGhpcy5jaGFydCkge1xuICAgICAgLy8gY29uc3QgZmlsdGVySXRlbSA9IHRoaXMubGVnZW5kRGF0YS5maWx0ZXIobCA9PiBsLmNoZWNrZWQpLm1hcChsID0+IGwubmFtZSk7XG4gICAgICB0aGlzLmNoYXJ0LmZpbHRlcihcbiAgICAgICAgJ25hbWUnLFxuICAgICAgICAodmFsOiBhbnkpID0+IHRoaXMubGVnZW5kRGF0YS5maW5kKHcgPT4gdy5uYW1lID09PSB2YWwpLmNoZWNrZWQsXG4gICAgICApO1xuICAgICAgdGhpcy5jaGFydC5yZXBhaW50KCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBydW5JbnN0YWxsKCkge1xuICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5zdGFsbCgpKSk7XG4gIH1cblxuICBwcml2YXRlIGluc3RhbGwoKSB7XG4gICAgaWYgKCF0aGlzLmRhdGEgfHwgKHRoaXMuZGF0YSAmJiB0aGlzLmRhdGEubGVuZ3RoIDwgMSkpIHJldHVybjtcblxuICAgIHRoaXMudW5pbnN0YWxsKCk7XG4gICAgdGhpcy5ub2RlLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBjb25zdCBjaGFydCA9IG5ldyBHMi5DaGFydCh7XG4gICAgICBjb250YWluZXI6IHRoaXMubm9kZS5uYXRpdmVFbGVtZW50LFxuICAgICAgZm9yY2VGaXQ6IHRydWUsXG4gICAgICBoZWlnaHQ6ICt0aGlzLmhlaWdodCAtICh0aGlzLmhhc0xlZ2VuZCA/IDgwIDogMjIpLFxuICAgICAgcGFkZGluZzogdGhpcy5wYWRkaW5nLFxuICAgIH0pO1xuICAgIGNoYXJ0LnNvdXJjZSh0aGlzLmRhdGEsIHtcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIG1pbjogMCxcbiAgICAgICAgdGlja0NvdW50OiB0aGlzLnRpY2tDb3VudCxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBjaGFydC5jb29yZCgncG9sYXInKTtcbiAgICBjaGFydC5sZWdlbmQoZmFsc2UpO1xuXG4gICAgY2hhcnQuYXhpcygnbGFiZWwnLCB7XG4gICAgICBsaW5lOiBudWxsLFxuICAgICAgbGFiZWxPZmZzZXQ6IDgsXG4gICAgICBsYWJlbHM6IHtcbiAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICBmaWxsOiAncmdiYSgwLCAwLCAwLCAuNjUpJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBncmlkOiB7XG4gICAgICAgIGxpbmU6IHtcbiAgICAgICAgICBzdHJva2U6ICcjZTllOWU5JyxcbiAgICAgICAgICBsaW5lV2lkdGg6IDEsXG4gICAgICAgICAgbGluZURhc2g6IFswLCAwXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBjaGFydC5heGlzKCd2YWx1ZScsIHtcbiAgICAgIGdyaWQ6IHtcbiAgICAgICAgdHlwZTogJ3BvbHlnb24nLFxuICAgICAgICBsaW5lOiB7XG4gICAgICAgICAgc3Ryb2tlOiAnI2U5ZTllOScsXG4gICAgICAgICAgbGluZVdpZHRoOiAxLFxuICAgICAgICAgIGxpbmVEYXNoOiBbMCwgMF0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgbGFiZWxzOiB7XG4gICAgICAgIGxhYmVsOiB7XG4gICAgICAgICAgZmlsbDogJ3JnYmEoMCwgMCwgMCwgLjY1KScsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgY2hhcnRcbiAgICAgIC5saW5lKClcbiAgICAgIC5wb3NpdGlvbignbGFiZWwqdmFsdWUnKVxuICAgICAgLmNvbG9yKCduYW1lJywgdGhpcy5jb2xvcnMpO1xuICAgIGNoYXJ0XG4gICAgICAucG9pbnQoKVxuICAgICAgLnBvc2l0aW9uKCdsYWJlbCp2YWx1ZScpXG4gICAgICAuY29sb3IoJ25hbWUnLCB0aGlzLmNvbG9ycylcbiAgICAgIC5zaGFwZSgnY2lyY2xlJylcbiAgICAgIC5zaXplKDMpO1xuXG4gICAgY2hhcnQucmVuZGVyKCk7XG5cbiAgICB0aGlzLmNoYXJ0ID0gY2hhcnQ7XG5cbiAgICBpZiAodGhpcy5oYXNMZWdlbmQpIHtcbiAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmxlZ2VuZERhdGEgPSBjaGFydFxuICAgICAgICAgIC5nZXRBbGxHZW9tcygpWzBdXG4gICAgICAgICAgLl9hdHRycy5kYXRhQXJyYXkubWFwKChpdGVtOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbiA9IGl0ZW1bMF0uX29yaWdpbjtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgICAgICAgICAgbmFtZTogb3JpZ2luLm5hbWUsXG4gICAgICAgICAgICAgIGNvbG9yOiBpdGVtWzBdLmNvbG9yLFxuICAgICAgICAgICAgICBjaGVja2VkOiB0cnVlLFxuICAgICAgICAgICAgICB2YWx1ZTogaXRlbS5yZWR1Y2UoKHAsIG4pID0+IHAgKyBuLl9vcmlnaW4udmFsdWUsIDApLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1bmluc3RhbGwoKSB7XG4gICAgaWYgKHRoaXMuY2hhcnQpIHtcbiAgICAgIHRoaXMuY2hhcnQuZGVzdHJveSgpO1xuICAgICAgdGhpcy5jaGFydCA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5ydW5JbnN0YWxsKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnVuaW5zdGFsbCgpO1xuICB9XG59XG4iXX0=