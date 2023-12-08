import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { G2BaseComponent } from '@delon/chart/core';
import { InputNumber } from '@delon/util/decorator';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/skeleton";
export class G2GaugeComponent extends G2BaseComponent {
    constructor() {
        super(...arguments);
        this.color = '#2f9cff';
        this.padding = [10, 10, 30, 10];
    }
    // #endregion
    install() {
        // 自定义Shape 部分
        this.winG2.registerShape('point', 'pointer', {
            draw(cfg, container) {
                const group = container.addGroup({});
                // 获取极坐标系下画布中心点
                const center = this.parsePoint({ x: 0, y: 0 });
                // 绘制指针
                group.addShape('line', {
                    attrs: {
                        x1: center.x,
                        y1: center.y,
                        x2: cfg.x,
                        y2: cfg.y,
                        stroke: cfg.color,
                        lineWidth: 2.5,
                        lineCap: 'round'
                    }
                });
                group.addShape('circle', {
                    attrs: {
                        x: center.x,
                        y: center.y,
                        r: 5.75,
                        stroke: cfg.color,
                        lineWidth: 2,
                        fill: '#fff'
                    }
                });
                return group;
            }
        });
        const { el, height, padding, format, theme } = this;
        const chart = (this._chart = new this.winG2.Chart({
            container: el.nativeElement,
            autoFit: true,
            height,
            padding,
            theme
        }));
        chart.legend(false);
        chart.animate(false);
        chart.tooltip(false);
        chart.coordinate('polar', {
            startAngle: (-9 / 8) * Math.PI,
            endAngle: (1 / 8) * Math.PI,
            radius: 0.75
        });
        chart.scale('value', {
            min: 0,
            max: 100,
            nice: true,
            tickCount: 6
        });
        chart.axis('1', false);
        chart.axis('value', {
            line: null,
            label: {
                offset: -14,
                formatter: format
            },
            tickLine: null,
            grid: null
        });
        chart.point().position('value*1').shape('pointer');
        this.ready.next(chart);
        this.changeData();
        chart.render();
    }
    changeData() {
        const { _chart, percent, color, bgColor, title } = this;
        if (!_chart)
            return;
        const data = [{ name: title, value: percent }];
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
                lineDash: null
            }
        });
        _chart.annotation().arc({
            start: [0, 0.95],
            end: [data[0].value, 0.95],
            style: {
                stroke: color,
                lineWidth: 12,
                lineDash: null
            }
        });
        _chart.annotation().text({
            position: ['50%', '85%'],
            content: title,
            style: {
                fontSize: 12,
                fill: this.theme === 'dark' ? 'rgba(255, 255, 255, 0.43)' : 'rgba(0, 0, 0, 0.43)',
                textAlign: 'center'
            }
        });
        _chart.annotation().text({
            position: ['50%', '90%'],
            content: `${val} %`,
            style: {
                fontSize: 20,
                fill: this.theme === 'dark' ? 'rgba(255, 255, 255, 0.85)' : 'rgba(0, 0, 0, 0.85)',
                textAlign: 'center'
            },
            offsetY: 15
        });
        _chart.changeData(data);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: G2GaugeComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.2", type: G2GaugeComponent, selector: "g2-gauge", inputs: { title: "title", height: "height", color: "color", bgColor: "bgColor", format: "format", percent: "percent", padding: "padding" }, host: { properties: { "class.g2-gauge": "true" } }, exportAs: ["g2Gauge"], usesInheritance: true, ngImport: i0, template: `@if (!loaded) {
    <nz-skeleton />
  }`, isInline: true, dependencies: [{ kind: "component", type: i1.NzSkeletonComponent, selector: "nz-skeleton", inputs: ["nzActive", "nzLoading", "nzRound", "nzTitle", "nzAvatar", "nzParagraph"], exportAs: ["nzSkeleton"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
__decorate([
    InputNumber()
], G2GaugeComponent.prototype, "height", void 0);
__decorate([
    InputNumber()
], G2GaugeComponent.prototype, "percent", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: G2GaugeComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'g2-gauge',
                    exportAs: 'g2Gauge',
                    template: `@if (!loaded) {
    <nz-skeleton />
  }`,
                    host: {
                        '[class.g2-gauge]': 'true'
                    },
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }], propDecorators: { title: [{
                type: Input
            }], height: [{
                type: Input
            }], color: [{
                type: Input
            }], bgColor: [{
                type: Input
            }], format: [{
                type: Input
            }], percent: [{
                type: Input
            }], padding: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F1Z2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY2hhcnQvZ2F1Z2UvZ2F1Z2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUk3RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUFFLFdBQVcsRUFBZSxNQUFNLHVCQUF1QixDQUFDOzs7QUFnQmpFLE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxlQUFlO0lBYnJEOztRQXFCVyxVQUFLLEdBQUcsU0FBUyxDQUFDO1FBSWxCLFlBQU8sR0FBK0IsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztLQWtJakU7SUFoSUMsYUFBYTtJQUViLE9BQU87UUFDTCxjQUFjO1FBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRTtZQUMzQyxJQUFJLENBQUMsR0FBYyxFQUFFLFNBQW9CO2dCQUN2QyxNQUFNLEtBQUssR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNyQyxlQUFlO2dCQUNmLE1BQU0sTUFBTSxHQUFJLElBQWtCLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDOUQsT0FBTztnQkFDUCxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRTtvQkFDckIsS0FBSyxFQUFFO3dCQUNMLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQzt3QkFDWixFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7d0JBQ1osRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO3dCQUNU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ZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHR5cGUgeyBDaGFydCB9IGZyb20gJ0BhbnR2L2cyJztcblxuaW1wb3J0IHsgRzJCYXNlQ29tcG9uZW50IH0gZnJvbSAnQGRlbG9uL2NoYXJ0L2NvcmUnO1xuaW1wb3J0IHsgSW5wdXROdW1iZXIsIE51bWJlcklucHV0IH0gZnJvbSAnQGRlbG9uL3V0aWwvZGVjb3JhdG9yJztcbmltcG9ydCB0eXBlIHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZzItZ2F1Z2UnLFxuICBleHBvcnRBczogJ2cyR2F1Z2UnLFxuICB0ZW1wbGF0ZTogYEBpZiAoIWxvYWRlZCkge1xuICAgIDxuei1za2VsZXRvbiAvPlxuICB9YCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuZzItZ2F1Z2VdJzogJ3RydWUnXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBHMkdhdWdlQ29tcG9uZW50IGV4dGVuZHMgRzJCYXNlQ29tcG9uZW50IHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2hlaWdodDogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9wZXJjZW50OiBOdW1iZXJJbnB1dDtcblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIEBJbnB1dCgpIHRpdGxlPzogc3RyaW5nO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBoZWlnaHQ/OiBudW1iZXI7XG4gIEBJbnB1dCgpIGNvbG9yID0gJyMyZjljZmYnO1xuICBASW5wdXQoKSBiZ0NvbG9yPzogc3RyaW5nOyAvLyA9ICcjZjBmMmY1JztcbiAgQElucHV0KCkgZm9ybWF0PzogKHRleHQ6IHN0cmluZywgaXRlbTogTnpTYWZlQW55LCBpbmRleDogbnVtYmVyKSA9PiBzdHJpbmc7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHBlcmNlbnQ/OiBudW1iZXI7XG4gIEBJbnB1dCgpIHBhZGRpbmc6IG51bWJlciB8IG51bWJlcltdIHwgJ2F1dG8nID0gWzEwLCAxMCwgMzAsIDEwXTtcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgaW5zdGFsbCgpOiB2b2lkIHtcbiAgICAvLyDoh6rlrprkuYlTaGFwZSDpg6jliIZcbiAgICB0aGlzLndpbkcyLnJlZ2lzdGVyU2hhcGUoJ3BvaW50JywgJ3BvaW50ZXInLCB7XG4gICAgICBkcmF3KGNmZzogTnpTYWZlQW55LCBjb250YWluZXI6IE56U2FmZUFueSkge1xuICAgICAgICBjb25zdCBncm91cCA9IGNvbnRhaW5lci5hZGRHcm91cCh7fSk7XG4gICAgICAgIC8vIOiOt+WPluaegeWdkOagh+ezu+S4i+eUu+W4g+S4reW/g+eCuVxuICAgICAgICBjb25zdCBjZW50ZXIgPSAodGhpcyBhcyBOelNhZmVBbnkpLnBhcnNlUG9pbnQoeyB4OiAwLCB5OiAwIH0pO1xuICAgICAgICAvLyDnu5jliLbmjIfpkohcbiAgICAgICAgZ3JvdXAuYWRkU2hhcGUoJ2xpbmUnLCB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIHgxOiBjZW50ZXIueCxcbiAgICAgICAgICAgIHkxOiBjZW50ZXIueSxcbiAgICAgICAgICAgIHgyOiBjZmcueCxcbiAgICAgICAgICAgIHkyOiBjZmcueSxcbiAgICAgICAgICAgIHN0cm9rZTogY2ZnLmNvbG9yLFxuICAgICAgICAgICAgbGluZVdpZHRoOiAyLjUsXG4gICAgICAgICAgICBsaW5lQ2FwOiAncm91bmQnXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgZ3JvdXAuYWRkU2hhcGUoJ2NpcmNsZScsIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgeDogY2VudGVyLngsXG4gICAgICAgICAgICB5OiBjZW50ZXIueSxcbiAgICAgICAgICAgIHI6IDUuNzUsXG4gICAgICAgICAgICBzdHJva2U6IGNmZy5jb2xvcixcbiAgICAgICAgICAgIGxpbmVXaWR0aDogMixcbiAgICAgICAgICAgIGZpbGw6ICcjZmZmJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBncm91cDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHsgZWwsIGhlaWdodCwgcGFkZGluZywgZm9ybWF0LCB0aGVtZSB9ID0gdGhpcztcblxuICAgIGNvbnN0IGNoYXJ0OiBDaGFydCA9ICh0aGlzLl9jaGFydCA9IG5ldyB0aGlzLndpbkcyLkNoYXJ0KHtcbiAgICAgIGNvbnRhaW5lcjogZWwubmF0aXZlRWxlbWVudCxcbiAgICAgIGF1dG9GaXQ6IHRydWUsXG4gICAgICBoZWlnaHQsXG4gICAgICBwYWRkaW5nLFxuICAgICAgdGhlbWVcbiAgICB9KSk7XG4gICAgY2hhcnQubGVnZW5kKGZhbHNlKTtcbiAgICBjaGFydC5hbmltYXRlKGZhbHNlKTtcbiAgICBjaGFydC50b29sdGlwKGZhbHNlKTtcbiAgICBjaGFydC5jb29yZGluYXRlKCdwb2xhcicsIHtcbiAgICAgIHN0YXJ0QW5nbGU6ICgtOSAvIDgpICogTWF0aC5QSSxcbiAgICAgIGVuZEFuZ2xlOiAoMSAvIDgpICogTWF0aC5QSSxcbiAgICAgIHJhZGl1czogMC43NVxuICAgIH0pO1xuICAgIGNoYXJ0LnNjYWxlKCd2YWx1ZScsIHtcbiAgICAgIG1pbjogMCxcbiAgICAgIG1heDogMTAwLFxuICAgICAgbmljZTogdHJ1ZSxcbiAgICAgIHRpY2tDb3VudDogNlxuICAgIH0pO1xuICAgIGNoYXJ0LmF4aXMoJzEnLCBmYWxzZSk7XG4gICAgY2hhcnQuYXhpcygndmFsdWUnLCB7XG4gICAgICBsaW5lOiBudWxsLFxuICAgICAgbGFiZWw6IHtcbiAgICAgICAgb2Zmc2V0OiAtMTQsXG4gICAgICAgIGZvcm1hdHRlcjogZm9ybWF0XG4gICAgICB9LFxuICAgICAgdGlja0xpbmU6IG51bGwsXG4gICAgICBncmlkOiBudWxsXG4gICAgfSk7XG4gICAgY2hhcnQucG9pbnQoKS5wb3NpdGlvbigndmFsdWUqMScpLnNoYXBlKCdwb2ludGVyJyk7XG5cbiAgICB0aGlzLnJlYWR5Lm5leHQoY2hhcnQpO1xuXG4gICAgdGhpcy5jaGFuZ2VEYXRhKCk7XG5cbiAgICBjaGFydC5yZW5kZXIoKTtcbiAgfVxuXG4gIGNoYW5nZURhdGEoKTogdm9pZCB7XG4gICAgY29uc3QgeyBfY2hhcnQsIHBlcmNlbnQsIGNvbG9yLCBiZ0NvbG9yLCB0aXRsZSB9ID0gdGhpcztcbiAgICBpZiAoIV9jaGFydCkgcmV0dXJuO1xuXG4gICAgY29uc3QgZGF0YSA9IFt7IG5hbWU6IHRpdGxlLCB2YWx1ZTogcGVyY2VudCB9XTtcbiAgICBjb25zdCB2YWwgPSBkYXRhWzBdLnZhbHVlO1xuICAgIF9jaGFydC5hbm5vdGF0aW9uKCkuY2xlYXIodHJ1ZSk7XG4gICAgX2NoYXJ0Lmdlb21ldHJpZXNbMF0uY29sb3IoY29sb3IpO1xuICAgIC8vIOe7mOWItuS7quihqOebmOiDjOaZr1xuICAgIF9jaGFydC5hbm5vdGF0aW9uKCkuYXJjKHtcbiAgICAgIHRvcDogZmFsc2UsXG4gICAgICBzdGFydDogWzAsIDAuOTVdLFxuICAgICAgZW5kOiBbMTAwLCAwLjk1XSxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIHN0cm9rZTogYmdDb2xvcixcbiAgICAgICAgbGluZVdpZHRoOiAxMixcbiAgICAgICAgbGluZURhc2g6IG51bGxcbiAgICAgIH1cbiAgICB9KTtcbiAgICBfY2hhcnQuYW5ub3RhdGlvbigpLmFyYyh7XG4gICAgICBzdGFydDogWzAsIDAuOTVdLFxuICAgICAgZW5kOiBbZGF0YVswXS52YWx1ZSEsIDAuOTVdLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgc3Ryb2tlOiBjb2xvcixcbiAgICAgICAgbGluZVdpZHRoOiAxMixcbiAgICAgICAgbGluZURhc2g6IG51bGxcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIF9jaGFydC5hbm5vdGF0aW9uKCkudGV4dCh7XG4gICAgICBwb3NpdGlvbjogWyc1MCUnLCAnODUlJ10sXG4gICAgICBjb250ZW50OiB0aXRsZSxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGZvbnRTaXplOiAxMixcbiAgICAgICAgZmlsbDogdGhpcy50aGVtZSA9PT0gJ2RhcmsnID8gJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC40MyknIDogJ3JnYmEoMCwgMCwgMCwgMC40MyknLFxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInXG4gICAgICB9XG4gICAgfSk7XG4gICAgX2NoYXJ0LmFubm90YXRpb24oKS50ZXh0KHtcbiAgICAgIHBvc2l0aW9uOiBbJzUwJScsICc5MCUnXSxcbiAgICAgIGNvbnRlbnQ6IGAke3ZhbH0gJWAsXG4gICAgICBzdHlsZToge1xuICAgICAgICBmb250U2l6ZTogMjAsXG4gICAgICAgIGZpbGw6IHRoaXMudGhlbWUgPT09ICdkYXJrJyA/ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpJyA6ICdyZ2JhKDAsIDAsIDAsIDAuODUpJyxcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJ1xuICAgICAgfSxcbiAgICAgIG9mZnNldFk6IDE1XG4gICAgfSk7XG5cbiAgICBfY2hhcnQuY2hhbmdlRGF0YShkYXRhKTtcbiAgfVxufVxuIl19