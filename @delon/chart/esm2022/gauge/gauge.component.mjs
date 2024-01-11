import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { G2BaseComponent } from '@delon/chart/core';
import { InputNumber } from '@delon/util/decorator';
import { NzSkeletonComponent } from 'ng-zorro-antd/skeleton';
import * as i0 from "@angular/core";
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: G2GaugeComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.9", type: G2GaugeComponent, isStandalone: true, selector: "g2-gauge", inputs: { title: "title", height: "height", color: "color", bgColor: "bgColor", format: "format", percent: "percent", padding: "padding" }, host: { properties: { "class.g2-gauge": "true" } }, exportAs: ["g2Gauge"], usesInheritance: true, ngImport: i0, template: `@if (!loaded) {
    <nz-skeleton />
  }`, isInline: true, dependencies: [{ kind: "component", type: NzSkeletonComponent, selector: "nz-skeleton", inputs: ["nzActive", "nzLoading", "nzRound", "nzTitle", "nzAvatar", "nzParagraph"], exportAs: ["nzSkeleton"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
__decorate([
    InputNumber()
], G2GaugeComponent.prototype, "height", void 0);
__decorate([
    InputNumber()
], G2GaugeComponent.prototype, "percent", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: G2GaugeComponent, decorators: [{
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
                    encapsulation: ViewEncapsulation.None,
                    standalone: true,
                    imports: [NzSkeletonComponent]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F1Z2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY2hhcnQvZ2F1Z2UvZ2F1Z2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUk3RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUFFLFdBQVcsRUFBZSxNQUFNLHVCQUF1QixDQUFDO0FBRWpFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQWlCN0QsTUFBTSxPQUFPLGdCQUFpQixTQUFRLGVBQWU7SUFmckQ7O1FBdUJXLFVBQUssR0FBRyxTQUFTLENBQUM7UUFJbEIsWUFBTyxHQUErQixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0tBa0lqRTtJQWhJQyxhQUFhO0lBRWIsT0FBTztRQUNMLGNBQWM7UUFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFO1lBQzNDLElBQUksQ0FBQyxHQUFjLEVBQUUsU0FBb0I7Z0JBQ3ZDLE1BQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ3JDLGVBQWU7Z0JBQ2YsTUFBTSxNQUFNLEdBQUksSUFBa0IsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUM5RCxPQUFPO2dCQUNQLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFO29CQUNyQixLQUFLLEVBQUU7d0JBQ0wsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO3dCQUNaLEVBQUUsRUFBRSxNQUFNLENB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LEtBQUs7Z0JBQ2tCLE9BQU87c0JBQTlCLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB0eXBlIHsgQ2hhcnQgfSBmcm9tICdAYW50di9nMic7XG5cbmltcG9ydCB7IEcyQmFzZUNvbXBvbmVudCB9IGZyb20gJ0BkZWxvbi9jaGFydC9jb3JlJztcbmltcG9ydCB7IElucHV0TnVtYmVyLCBOdW1iZXJJbnB1dCB9IGZyb20gJ0BkZWxvbi91dGlsL2RlY29yYXRvcic7XG5pbXBvcnQgdHlwZSB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBOelNrZWxldG9uQ29tcG9uZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC9za2VsZXRvbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2cyLWdhdWdlJyxcbiAgZXhwb3J0QXM6ICdnMkdhdWdlJyxcbiAgdGVtcGxhdGU6IGBAaWYgKCFsb2FkZWQpIHtcbiAgICA8bnotc2tlbGV0b24gLz5cbiAgfWAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmcyLWdhdWdlXSc6ICd0cnVlJ1xuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtOelNrZWxldG9uQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBHMkdhdWdlQ29tcG9uZW50IGV4dGVuZHMgRzJCYXNlQ29tcG9uZW50IHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2hlaWdodDogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9wZXJjZW50OiBOdW1iZXJJbnB1dDtcblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIEBJbnB1dCgpIHRpdGxlPzogc3RyaW5nO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBoZWlnaHQ/OiBudW1iZXI7XG4gIEBJbnB1dCgpIGNvbG9yID0gJyMyZjljZmYnO1xuICBASW5wdXQoKSBiZ0NvbG9yPzogc3RyaW5nOyAvLyA9ICcjZjBmMmY1JztcbiAgQElucHV0KCkgZm9ybWF0PzogKHRleHQ6IHN0cmluZywgaXRlbTogTnpTYWZlQW55LCBpbmRleDogbnVtYmVyKSA9PiBzdHJpbmc7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHBlcmNlbnQ/OiBudW1iZXI7XG4gIEBJbnB1dCgpIHBhZGRpbmc6IG51bWJlciB8IG51bWJlcltdIHwgJ2F1dG8nID0gWzEwLCAxMCwgMzAsIDEwXTtcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgaW5zdGFsbCgpOiB2b2lkIHtcbiAgICAvLyDoh6rlrprkuYlTaGFwZSDpg6jliIZcbiAgICB0aGlzLndpbkcyLnJlZ2lzdGVyU2hhcGUoJ3BvaW50JywgJ3BvaW50ZXInLCB7XG4gICAgICBkcmF3KGNmZzogTnpTYWZlQW55LCBjb250YWluZXI6IE56U2FmZUFueSkge1xuICAgICAgICBjb25zdCBncm91cCA9IGNvbnRhaW5lci5hZGRHcm91cCh7fSk7XG4gICAgICAgIC8vIOiOt+WPluaegeWdkOagh+ezu+S4i+eUu+W4g+S4reW/g+eCuVxuICAgICAgICBjb25zdCBjZW50ZXIgPSAodGhpcyBhcyBOelNhZmVBbnkpLnBhcnNlUG9pbnQoeyB4OiAwLCB5OiAwIH0pO1xuICAgICAgICAvLyDnu5jliLbmjIfpkohcbiAgICAgICAgZ3JvdXAuYWRkU2hhcGUoJ2xpbmUnLCB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIHgxOiBjZW50ZXIueCxcbiAgICAgICAgICAgIHkxOiBjZW50ZXIueSxcbiAgICAgICAgICAgIHgyOiBjZmcueCxcbiAgICAgICAgICAgIHkyOiBjZmcueSxcbiAgICAgICAgICAgIHN0cm9rZTogY2ZnLmNvbG9yLFxuICAgICAgICAgICAgbGluZVdpZHRoOiAyLjUsXG4gICAgICAgICAgICBsaW5lQ2FwOiAncm91bmQnXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgZ3JvdXAuYWRkU2hhcGUoJ2NpcmNsZScsIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgeDogY2VudGVyLngsXG4gICAgICAgICAgICB5OiBjZW50ZXIueSxcbiAgICAgICAgICAgIHI6IDUuNzUsXG4gICAgICAgICAgICBzdHJva2U6IGNmZy5jb2xvcixcbiAgICAgICAgICAgIGxpbmVXaWR0aDogMixcbiAgICAgICAgICAgIGZpbGw6ICcjZmZmJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBncm91cDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHsgZWwsIGhlaWdodCwgcGFkZGluZywgZm9ybWF0LCB0aGVtZSB9ID0gdGhpcztcblxuICAgIGNvbnN0IGNoYXJ0OiBDaGFydCA9ICh0aGlzLl9jaGFydCA9IG5ldyB0aGlzLndpbkcyLkNoYXJ0KHtcbiAgICAgIGNvbnRhaW5lcjogZWwubmF0aXZlRWxlbWVudCxcbiAgICAgIGF1dG9GaXQ6IHRydWUsXG4gICAgICBoZWlnaHQsXG4gICAgICBwYWRkaW5nLFxuICAgICAgdGhlbWVcbiAgICB9KSk7XG4gICAgY2hhcnQubGVnZW5kKGZhbHNlKTtcbiAgICBjaGFydC5hbmltYXRlKGZhbHNlKTtcbiAgICBjaGFydC50b29sdGlwKGZhbHNlKTtcbiAgICBjaGFydC5jb29yZGluYXRlKCdwb2xhcicsIHtcbiAgICAgIHN0YXJ0QW5nbGU6ICgtOSAvIDgpICogTWF0aC5QSSxcbiAgICAgIGVuZEFuZ2xlOiAoMSAvIDgpICogTWF0aC5QSSxcbiAgICAgIHJhZGl1czogMC43NVxuICAgIH0pO1xuICAgIGNoYXJ0LnNjYWxlKCd2YWx1ZScsIHtcbiAgICAgIG1pbjogMCxcbiAgICAgIG1heDogMTAwLFxuICAgICAgbmljZTogdHJ1ZSxcbiAgICAgIHRpY2tDb3VudDogNlxuICAgIH0pO1xuICAgIGNoYXJ0LmF4aXMoJzEnLCBmYWxzZSk7XG4gICAgY2hhcnQuYXhpcygndmFsdWUnLCB7XG4gICAgICBsaW5lOiBudWxsLFxuICAgICAgbGFiZWw6IHtcbiAgICAgICAgb2Zmc2V0OiAtMTQsXG4gICAgICAgIGZvcm1hdHRlcjogZm9ybWF0XG4gICAgICB9LFxuICAgICAgdGlja0xpbmU6IG51bGwsXG4gICAgICBncmlkOiBudWxsXG4gICAgfSk7XG4gICAgY2hhcnQucG9pbnQoKS5wb3NpdGlvbigndmFsdWUqMScpLnNoYXBlKCdwb2ludGVyJyk7XG5cbiAgICB0aGlzLnJlYWR5Lm5leHQoY2hhcnQpO1xuXG4gICAgdGhpcy5jaGFuZ2VEYXRhKCk7XG5cbiAgICBjaGFydC5yZW5kZXIoKTtcbiAgfVxuXG4gIGNoYW5nZURhdGEoKTogdm9pZCB7XG4gICAgY29uc3QgeyBfY2hhcnQsIHBlcmNlbnQsIGNvbG9yLCBiZ0NvbG9yLCB0aXRsZSB9ID0gdGhpcztcbiAgICBpZiAoIV9jaGFydCkgcmV0dXJuO1xuXG4gICAgY29uc3QgZGF0YSA9IFt7IG5hbWU6IHRpdGxlLCB2YWx1ZTogcGVyY2VudCB9XTtcbiAgICBjb25zdCB2YWwgPSBkYXRhWzBdLnZhbHVlO1xuICAgIF9jaGFydC5hbm5vdGF0aW9uKCkuY2xlYXIodHJ1ZSk7XG4gICAgX2NoYXJ0Lmdlb21ldHJpZXNbMF0uY29sb3IoY29sb3IpO1xuICAgIC8vIOe7mOWItuS7quihqOebmOiDjOaZr1xuICAgIF9jaGFydC5hbm5vdGF0aW9uKCkuYXJjKHtcbiAgICAgIHRvcDogZmFsc2UsXG4gICAgICBzdGFydDogWzAsIDAuOTVdLFxuICAgICAgZW5kOiBbMTAwLCAwLjk1XSxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIHN0cm9rZTogYmdDb2xvcixcbiAgICAgICAgbGluZVdpZHRoOiAxMixcbiAgICAgICAgbGluZURhc2g6IG51bGxcbiAgICAgIH1cbiAgICB9KTtcbiAgICBfY2hhcnQuYW5ub3RhdGlvbigpLmFyYyh7XG4gICAgICBzdGFydDogWzAsIDAuOTVdLFxuICAgICAgZW5kOiBbZGF0YVswXS52YWx1ZSEsIDAuOTVdLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgc3Ryb2tlOiBjb2xvcixcbiAgICAgICAgbGluZVdpZHRoOiAxMixcbiAgICAgICAgbGluZURhc2g6IG51bGxcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIF9jaGFydC5hbm5vdGF0aW9uKCkudGV4dCh7XG4gICAgICBwb3NpdGlvbjogWyc1MCUnLCAnODUlJ10sXG4gICAgICBjb250ZW50OiB0aXRsZSxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGZvbnRTaXplOiAxMixcbiAgICAgICAgZmlsbDogdGhpcy50aGVtZSA9PT0gJ2RhcmsnID8gJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC40MyknIDogJ3JnYmEoMCwgMCwgMCwgMC40MyknLFxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInXG4gICAgICB9XG4gICAgfSk7XG4gICAgX2NoYXJ0LmFubm90YXRpb24oKS50ZXh0KHtcbiAgICAgIHBvc2l0aW9uOiBbJzUwJScsICc5MCUnXSxcbiAgICAgIGNvbnRlbnQ6IGAke3ZhbH0gJWAsXG4gICAgICBzdHlsZToge1xuICAgICAgICBmb250U2l6ZTogMjAsXG4gICAgICAgIGZpbGw6IHRoaXMudGhlbWUgPT09ICdkYXJrJyA/ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpJyA6ICdyZ2JhKDAsIDAsIDAsIDAuODUpJyxcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJ1xuICAgICAgfSxcbiAgICAgIG9mZnNldFk6IDE1XG4gICAgfSk7XG5cbiAgICBfY2hhcnQuY2hhbmdlRGF0YShkYXRhKTtcbiAgfVxufVxuIl19