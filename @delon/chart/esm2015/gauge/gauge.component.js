/**
 * @fileoverview added by tsickle
 * Generated from: gauge.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { G2BaseComponent } from '@delon/chart/core';
import { InputNumber } from '@delon/util/other';
export class G2GaugeComponent extends G2BaseComponent {
    constructor() {
        super(...arguments);
        this.color = '#2f9cff';
        this.padding = [10, 10, 30, 10];
    }
    // #endregion
    /**
     * @return {?}
     */
    install() {
        // 自定义Shape 部分
        ((/** @type {?} */ (window))).G2.registerShape('point', 'pointer', {
            // tslint:disable-next-line: typedef
            /**
             * @param {?} cfg
             * @param {?} container
             * @return {?}
             */
            draw(cfg, container) {
                /** @type {?} */
                const group = container.addGroup({});
                // 获取极坐标系下画布中心点
                /** @type {?} */
                const center = ((/** @type {?} */ (this))).parsePoint({ x: 0, y: 0 });
                // 绘制指针
                group.addShape('line', {
                    attrs: {
                        x1: center.x,
                        y1: center.y,
                        x2: cfg.x,
                        y2: cfg.y,
                        stroke: cfg.color,
                        lineWidth: 2.5,
                        lineCap: 'round',
                    },
                });
                group.addShape('circle', {
                    attrs: {
                        x: center.x,
                        y: center.y,
                        r: 5.75,
                        stroke: cfg.color,
                        lineWidth: 2,
                        fill: '#fff',
                    },
                });
                return group;
            },
        });
        const { el, height, padding, format, theme } = this;
        /** @type {?} */
        const chart = (this._chart = new ((/** @type {?} */ (window))).G2.Chart({
            container: el.nativeElement,
            autoFit: true,
            height,
            padding,
            theme,
        }));
        chart.legend(false);
        chart.animate(false);
        chart.tooltip(false);
        chart.coordinate('polar', {
            startAngle: (-9 / 8) * Math.PI,
            endAngle: (1 / 8) * Math.PI,
            radius: 0.75,
        });
        chart.scale('value', {
            min: 0,
            max: 100,
            nice: true,
            tickCount: 6,
        });
        chart.axis('1', false);
        chart.axis('value', {
            line: null,
            label: {
                offset: -14,
                formatter: format,
            },
            tickLine: null,
            grid: null,
        });
        chart.point().position('value*1').shape('pointer');
        this.attachChart();
    }
    /**
     * @return {?}
     */
    attachChart() {
        const { _chart, percent, color, bgColor, title } = this;
        if (!_chart)
            return;
        /** @type {?} */
        const data = [{ name: title, value: percent }];
        /** @type {?} */
        const val = data[0].value;
        _chart.annotation().clear(true);
        _chart.geometries[0].color(color);
        // 绘制仪表盘背景
        _chart.annotation().arc({
            top: false,
            start: [0, 0.95],
            end: [100, 0.95],
            style: {
                stroke: bgColor,
                lineWidth: 12,
                lineDash: null,
            },
        });
        _chart.annotation().arc({
            start: [0, 0.95],
            end: [data[0].value, 0.95],
            style: {
                stroke: color,
                lineWidth: 12,
                lineDash: null,
            },
        });
        _chart.annotation().text({
            position: ['50%', '85%'],
            content: title,
            style: {
                fontSize: 12,
                fill: 'rgba(0, 0, 0, 0.43)',
                textAlign: 'center',
            },
        });
        _chart.annotation().text({
            position: ['50%', '90%'],
            content: `${val} %`,
            style: {
                fontSize: 20,
                fill: 'rgba(0, 0, 0, 0.85)',
                textAlign: 'center',
            },
            offsetY: 15,
        });
        _chart.changeData(data);
        _chart.render();
    }
}
G2GaugeComponent.decorators = [
    { type: Component, args: [{
                selector: 'g2-gauge',
                exportAs: 'g2Gauge',
                template: `<nz-skeleton *ngIf="!loaded"></nz-skeleton>`,
                host: {
                    '[class.g2-gauge]': 'true',
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
G2GaugeComponent.propDecorators = {
    title: [{ type: Input }],
    height: [{ type: Input }],
    color: [{ type: Input }],
    bgColor: [{ type: Input }],
    format: [{ type: Input }],
    percent: [{ type: Input }],
    padding: [{ type: Input }]
};
__decorate([
    InputNumber(),
    __metadata("design:type", Number)
], G2GaugeComponent.prototype, "height", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Number)
], G2GaugeComponent.prototype, "percent", void 0);
if (false) {
    /** @type {?} */
    G2GaugeComponent.ngAcceptInputType_height;
    /** @type {?} */
    G2GaugeComponent.ngAcceptInputType_percent;
    /** @type {?} */
    G2GaugeComponent.prototype.title;
    /** @type {?} */
    G2GaugeComponent.prototype.height;
    /** @type {?} */
    G2GaugeComponent.prototype.color;
    /** @type {?} */
    G2GaugeComponent.prototype.bgColor;
    /** @type {?} */
    G2GaugeComponent.prototype.format;
    /** @type {?} */
    G2GaugeComponent.prototype.percent;
    /** @type {?} */
    G2GaugeComponent.prototype.padding;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F1Z2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY2hhcnQvZ2F1Z2UvZ2F1Z2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsV0FBVyxFQUFlLE1BQU0sbUJBQW1CLENBQUM7QUFjN0QsTUFBTSxPQUFPLGdCQUFpQixTQUFRLGVBQWU7SUFYckQ7O1FBbUJXLFVBQUssR0FBRyxTQUFTLENBQUM7UUFJbEIsWUFBTyxHQUErQixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBZ0lsRSxDQUFDOzs7OztJQTVIQyxPQUFPO1FBQ0wsY0FBYztRQUNkLENBQUMsbUJBQUEsTUFBTSxFQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUU7Ozs7Ozs7WUFFbkQsSUFBSSxDQUFDLEdBQVEsRUFBRSxTQUFjOztzQkFDckIsS0FBSyxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDOzs7c0JBRTlCLE1BQU0sR0FBRyxDQUFDLG1CQUFBLElBQUksRUFBYSxDQUFDLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7Z0JBQzdELE9BQU87Z0JBQ1AsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUU7b0JBQ3JCLEtBQUssRUFBRTt3QkFDTCxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7d0JBQ1osRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO3dCQUNaLEVBQUUsRUFBRSxH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SUFBSSxFQUFFLHFCQUFxQjtnQkFDM0IsU0FBUyxFQUFFLFFBQVE7YUFDcEI7WUFDRCxPQUFPLEVBQUUsRUFBRTtTQUNaLENBQUMsQ0FBQztRQUVILE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7OztZQXRKRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLFFBQVEsRUFBRSxTQUFTO2dCQUNuQixRQUFRLEVBQUUsNkNBQTZDO2dCQUN2RCxJQUFJLEVBQUU7b0JBQ0osa0JBQWtCLEVBQUUsTUFBTTtpQkFDM0I7Z0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3RDOzs7b0JBT0UsS0FBSztxQkFDTCxLQUFLO29CQUNMLEtBQUs7c0JBQ0wsS0FBSztxQkFDTCxLQUFLO3NCQUNMLEtBQUs7c0JBQ0wsS0FBSzs7QUFMa0I7SUFBZCxXQUFXLEVBQUU7O2dEQUFnQjtBQUlmO0lBQWQsV0FBVyxFQUFFOztpREFBaUI7OztJQVZ4QywwQ0FBNkM7O0lBQzdDLDJDQUE4Qzs7SUFJOUMsaUNBQXVCOztJQUN2QixrQ0FBdUM7O0lBQ3ZDLGlDQUEyQjs7SUFDM0IsbUNBQXlCOztJQUN6QixrQ0FBbUU7O0lBQ25FLG1DQUF3Qzs7SUFDeEMsbUNBQWdFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDaGFydCB9IGZyb20gJ0BhbnR2L2cyJztcbmltcG9ydCB7IEcyQmFzZUNvbXBvbmVudCB9IGZyb20gJ0BkZWxvbi9jaGFydC9jb3JlJztcbmltcG9ydCB7IElucHV0TnVtYmVyLCBOdW1iZXJJbnB1dCB9IGZyb20gJ0BkZWxvbi91dGlsL290aGVyJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2cyLWdhdWdlJyxcbiAgZXhwb3J0QXM6ICdnMkdhdWdlJyxcbiAgdGVtcGxhdGU6IGA8bnotc2tlbGV0b24gKm5nSWY9XCIhbG9hZGVkXCI+PC9uei1za2VsZXRvbj5gLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5nMi1nYXVnZV0nOiAndHJ1ZScsXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgRzJHYXVnZUNvbXBvbmVudCBleHRlbmRzIEcyQmFzZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9oZWlnaHQ6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfcGVyY2VudDogTnVtYmVySW5wdXQ7XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBoZWlnaHQ6IG51bWJlcjtcbiAgQElucHV0KCkgY29sb3IgPSAnIzJmOWNmZic7XG4gIEBJbnB1dCgpIGJnQ29sb3I6IHN0cmluZzsgLy8gPSAnI2YwZjJmNSc7XG4gIEBJbnB1dCgpIGZvcm1hdDogKHRleHQ6IHN0cmluZywgaXRlbToge30sIGluZGV4OiBudW1iZXIpID0+IHN0cmluZztcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgcGVyY2VudDogbnVtYmVyO1xuICBASW5wdXQoKSBwYWRkaW5nOiBudW1iZXIgfCBudW1iZXJbXSB8ICdhdXRvJyA9IFsxMCwgMTAsIDMwLCAxMF07XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGluc3RhbGwoKTogdm9pZCB7XG4gICAgLy8g6Ieq5a6a5LmJU2hhcGUg6YOo5YiGXG4gICAgKHdpbmRvdyBhcyBhbnkpLkcyLnJlZ2lzdGVyU2hhcGUoJ3BvaW50JywgJ3BvaW50ZXInLCB7XG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHR5cGVkZWZcbiAgICAgIGRyYXcoY2ZnOiBhbnksIGNvbnRhaW5lcjogYW55KSB7XG4gICAgICAgIGNvbnN0IGdyb3VwID0gY29udGFpbmVyLmFkZEdyb3VwKHt9KTtcbiAgICAgICAgLy8g6I635Y+W5p6B5Z2Q5qCH57O75LiL55S75biD5Lit5b+D54K5XG4gICAgICAgIGNvbnN0IGNlbnRlciA9ICh0aGlzIGFzIE56U2FmZUFueSkucGFyc2VQb2ludCh7IHg6IDAsIHk6IDAgfSk7XG4gICAgICAgIC8vIOe7mOWItuaMh+mSiFxuICAgICAgICBncm91cC5hZGRTaGFwZSgnbGluZScsIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgeDE6IGNlbnRlci54LFxuICAgICAgICAgICAgeTE6IGNlbnRlci55LFxuICAgICAgICAgICAgeDI6IGNmZy54LFxuICAgICAgICAgICAgeTI6IGNmZy55LFxuICAgICAgICAgICAgc3Ryb2tlOiBjZmcuY29sb3IsXG4gICAgICAgICAgICBsaW5lV2lkdGg6IDIuNSxcbiAgICAgICAgICAgIGxpbmVDYXA6ICdyb3VuZCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIGdyb3VwLmFkZFNoYXBlKCdjaXJjbGUnLCB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIHg6IGNlbnRlci54LFxuICAgICAgICAgICAgeTogY2VudGVyLnksXG4gICAgICAgICAgICByOiA1Ljc1LFxuICAgICAgICAgICAgc3Ryb2tlOiBjZmcuY29sb3IsXG4gICAgICAgICAgICBsaW5lV2lkdGg6IDIsXG4gICAgICAgICAgICBmaWxsOiAnI2ZmZicsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBncm91cDtcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBjb25zdCB7IGVsLCBoZWlnaHQsIHBhZGRpbmcsIGZvcm1hdCwgdGhlbWUgfSA9IHRoaXM7XG5cbiAgICBjb25zdCBjaGFydDogQ2hhcnQgPSAodGhpcy5fY2hhcnQgPSBuZXcgKHdpbmRvdyBhcyBhbnkpLkcyLkNoYXJ0KHtcbiAgICAgIGNvbnRhaW5lcjogZWwubmF0aXZlRWxlbWVudCxcbiAgICAgIGF1dG9GaXQ6IHRydWUsXG4gICAgICBoZWlnaHQsXG4gICAgICBwYWRkaW5nLFxuICAgICAgdGhlbWUsXG4gICAgfSkpO1xuICAgIGNoYXJ0LmxlZ2VuZChmYWxzZSk7XG4gICAgY2hhcnQuYW5pbWF0ZShmYWxzZSk7XG4gICAgY2hhcnQudG9vbHRpcChmYWxzZSk7XG4gICAgY2hhcnQuY29vcmRpbmF0ZSgncG9sYXInLCB7XG4gICAgICBzdGFydEFuZ2xlOiAoLTkgLyA4KSAqIE1hdGguUEksXG4gICAgICBlbmRBbmdsZTogKDEgLyA4KSAqIE1hdGguUEksXG4gICAgICByYWRpdXM6IDAuNzUsXG4gICAgfSk7XG4gICAgY2hhcnQuc2NhbGUoJ3ZhbHVlJywge1xuICAgICAgbWluOiAwLFxuICAgICAgbWF4OiAxMDAsXG4gICAgICBuaWNlOiB0cnVlLFxuICAgICAgdGlja0NvdW50OiA2LFxuICAgIH0pO1xuICAgIGNoYXJ0LmF4aXMoJzEnLCBmYWxzZSk7XG4gICAgY2hhcnQuYXhpcygndmFsdWUnLCB7XG4gICAgICBsaW5lOiBudWxsLFxuICAgICAgbGFiZWw6IHtcbiAgICAgICAgb2Zmc2V0OiAtMTQsXG4gICAgICAgIGZvcm1hdHRlcjogZm9ybWF0LFxuICAgICAgfSxcbiAgICAgIHRpY2tMaW5lOiBudWxsLFxuICAgICAgZ3JpZDogbnVsbCxcbiAgICB9KTtcbiAgICBjaGFydC5wb2ludCgpLnBvc2l0aW9uKCd2YWx1ZSoxJykuc2hhcGUoJ3BvaW50ZXInKTtcblxuICAgIHRoaXMuYXR0YWNoQ2hhcnQoKTtcbiAgfVxuXG4gIGF0dGFjaENoYXJ0KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgX2NoYXJ0LCBwZXJjZW50LCBjb2xvciwgYmdDb2xvciwgdGl0bGUgfSA9IHRoaXM7XG4gICAgaWYgKCFfY2hhcnQpIHJldHVybjtcblxuICAgIGNvbnN0IGRhdGEgPSBbeyBuYW1lOiB0aXRsZSwgdmFsdWU6IHBlcmNlbnQgfV07XG4gICAgY29uc3QgdmFsID0gZGF0YVswXS52YWx1ZTtcbiAgICBfY2hhcnQuYW5ub3RhdGlvbigpLmNsZWFyKHRydWUpO1xuICAgIF9jaGFydC5nZW9tZXRyaWVzWzBdLmNvbG9yKGNvbG9yKTtcbiAgICAvLyDnu5jliLbku6rooajnm5jog4zmma9cbiAgICBfY2hhcnQuYW5ub3RhdGlvbigpLmFyYyh7XG4gICAgICB0b3A6IGZhbHNlLFxuICAgICAgc3RhcnQ6IFswLCAwLjk1XSxcbiAgICAgIGVuZDogWzEwMCwgMC45NV0sXG4gICAgICBzdHlsZToge1xuICAgICAgICBzdHJva2U6IGJnQ29sb3IsXG4gICAgICAgIGxpbmVXaWR0aDogMTIsXG4gICAgICAgIGxpbmVEYXNoOiBudWxsLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBfY2hhcnQuYW5ub3RhdGlvbigpLmFyYyh7XG4gICAgICBzdGFydDogWzAsIDAuOTVdLFxuICAgICAgZW5kOiBbZGF0YVswXS52YWx1ZSwgMC45NV0sXG4gICAgICBzdHlsZToge1xuICAgICAgICBzdHJva2U6IGNvbG9yLFxuICAgICAgICBsaW5lV2lkdGg6IDEyLFxuICAgICAgICBsaW5lRGFzaDogbnVsbCxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBfY2hhcnQuYW5ub3RhdGlvbigpLnRleHQoe1xuICAgICAgcG9zaXRpb246IFsnNTAlJywgJzg1JSddLFxuICAgICAgY29udGVudDogdGl0bGUsXG4gICAgICBzdHlsZToge1xuICAgICAgICBmb250U2l6ZTogMTIsXG4gICAgICAgIGZpbGw6ICdyZ2JhKDAsIDAsIDAsIDAuNDMpJyxcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgX2NoYXJ0LmFubm90YXRpb24oKS50ZXh0KHtcbiAgICAgIHBvc2l0aW9uOiBbJzUwJScsICc5MCUnXSxcbiAgICAgIGNvbnRlbnQ6IGAke3ZhbH0gJWAsXG4gICAgICBzdHlsZToge1xuICAgICAgICBmb250U2l6ZTogMjAsXG4gICAgICAgIGZpbGw6ICdyZ2JhKDAsIDAsIDAsIDAuODUpJyxcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgIH0sXG4gICAgICBvZmZzZXRZOiAxNSxcbiAgICB9KTtcblxuICAgIF9jaGFydC5jaGFuZ2VEYXRhKGRhdGEpO1xuICAgIF9jaGFydC5yZW5kZXIoKTtcbiAgfVxufVxuIl19