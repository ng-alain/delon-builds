import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { fromEvent, debounceTime, filter } from 'rxjs';
import { G2BaseComponent } from '@delon/chart/core';
import { InputNumber } from '@delon/util/decorator';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/skeleton";
class G2TagCloudComponent extends G2BaseComponent {
    constructor() {
        super(...arguments);
        // #region fields
        this.width = 0;
        this.height = 200;
        this.padding = 0;
        this.data = [];
        this.clickItem = new EventEmitter();
    }
    // #endregion
    initTagCloud() {
        const winG2 = this.winG2;
        winG2.registerShape('point', 'cloud', {
            draw(cfg, container) {
                const data = cfg.data;
                const textShape = container.addShape({
                    type: 'text',
                    name: 'tag-cloud-text',
                    attrs: {
                        ...cfg.style,
                        fontSize: data.size,
                        text: data.text,
                        textAlign: 'center',
                        fontFamily: data.font,
                        fill: cfg.color,
                        textBaseline: 'Alphabetic',
                        x: cfg.x,
                        y: cfg.y
                    }
                });
                if (data.rotate) {
                    winG2.Util.rotate(textShape, (data.rotate * Math.PI) / 180);
                }
                return textShape;
            }
        });
    }
    install() {
        this.initTagCloud();
        const { el, padding, theme } = this;
        if (this.height === 0) {
            this.height = this.el.nativeElement.clientHeight;
        }
        if (this.width === 0) {
            this.width = this.el.nativeElement.clientWidth;
        }
        const chart = (this._chart = new this.winG2.Chart({
            container: el.nativeElement,
            autoFit: false,
            padding,
            height: this.height,
            width: this.width,
            theme
        }));
        chart.scale({
            x: { nice: false },
            y: { nice: false }
        });
        chart.legend(false);
        chart.axis(false);
        chart.tooltip({
            showTitle: false,
            showMarkers: false
        });
        chart.coordinate().reflect();
        chart
            .point()
            .position('x*y')
            .color('text')
            .shape('cloud')
            .state({
            active: {
                style: {
                    fillOpacity: 0.4
                }
            }
        });
        chart.interaction('element-active');
        chart.on('tag-cloud-text:click', (ev) => {
            this.ngZone.run(() => this.clickItem.emit({ item: ev.data?.data, ev }));
        });
        this.ready.next(chart);
        this.changeData();
        chart.render();
    }
    changeData() {
        const { _chart, data } = this;
        if (!_chart || !Array.isArray(data) || data.length <= 0)
            return;
        const dv = new window.DataSet.View().source(data);
        const range = dv.range('value');
        const min = range[0];
        const max = range[1];
        dv.transform({
            type: 'tag-cloud',
            fields: ['name', 'value'],
            // imageMask,
            font: 'Verdana',
            size: [this.width, this.height],
            padding: 0,
            timeInterval: 5000,
            rotate() {
                let random = ~~(Math.random() * 4) % 4;
                if (random === 2) {
                    random = 0;
                }
                return random * 90; // 0, 90, 270
            },
            fontSize(d) {
                return ((d.value - min) / (max - min)) * (32 - 8) + 8;
            }
        });
        _chart.changeData(dv.rows);
    }
    installResizeEvent() {
        this.resize$ = fromEvent(window, 'resize')
            .pipe(filter(() => !!this._chart), debounceTime(200))
            .subscribe(() => this.changeData());
    }
    onInit() {
        this.installResizeEvent();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.4", ngImport: i0, type: G2TagCloudComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.4", type: G2TagCloudComponent, selector: "g2-tag-cloud", inputs: { width: "width", height: "height", padding: "padding", data: "data" }, outputs: { clickItem: "clickItem" }, exportAs: ["g2TagCloud"], usesInheritance: true, ngImport: i0, template: `<nz-skeleton *ngIf="!loaded"></nz-skeleton>`, isInline: true, dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.NzSkeletonComponent, selector: "nz-skeleton", inputs: ["nzActive", "nzLoading", "nzRound", "nzTitle", "nzAvatar", "nzParagraph"], exportAs: ["nzSkeleton"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
__decorate([
    InputNumber()
], G2TagCloudComponent.prototype, "width", void 0);
__decorate([
    InputNumber()
], G2TagCloudComponent.prototype, "height", void 0);
export { G2TagCloudComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.4", ngImport: i0, type: G2TagCloudComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'g2-tag-cloud',
                    exportAs: 'g2TagCloud',
                    template: `<nz-skeleton *ngIf="!loaded"></nz-skeleton>`,
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }], propDecorators: { width: [{
                type: Input
            }], height: [{
                type: Input
            }], padding: [{
                type: Input
            }], data: [{
                type: Input
            }], clickItem: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLWNsb3VkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NoYXJ0L3RhZy1jbG91ZC90YWctY2xvdWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ILE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUl2RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUFFLFdBQVcsRUFBZSxNQUFNLHVCQUF1QixDQUFDOzs7O0FBY2pFLE1BUWEsbUJBQW9CLFNBQVEsZUFBZTtJQVJ4RDs7UUFZRSxpQkFBaUI7UUFFTyxVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsV0FBTSxHQUFHLEdBQUcsQ0FBQztRQUM1QixZQUFPLEdBQStCLENBQUMsQ0FBQztRQUN4QyxTQUFJLEdBQXFCLEVBQUUsQ0FBQztRQUNsQixjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQXVCLENBQUM7S0FrSXhFO0lBaElDLGFBQWE7SUFFTCxZQUFZO1FBQ2xCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDekIsS0FBSyxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFO1lBQ3BDLElBQUksQ0FBQyxHQUFjLEVBQUUsU0FBb0I7Z0JBQ3ZDLE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFpQixDQUFDO2dCQUNuQyxNQUFNLFNBQVMsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDO29CQUNuQyxJQUFJLEVBQUUsTUFBTTtvQkFDWixJQUFJLEVBQUUsZ0JBQWdCO29CQUN0QixLQUFLLEVBQUU7d0JBQ0wsR0FBRyxH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QUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDdEM7OEJBT3lCLEtBQUs7c0JBQTVCLEtBQUs7Z0JBQ2tCLE1BQU07c0JBQTdCLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDYSxTQUFTO3NCQUEzQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBkZWJvdW5jZVRpbWUsIGZpbHRlciB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgdHlwZSB7IENoYXJ0LCBFdmVudCB9IGZyb20gJ0BhbnR2L2cyJztcblxuaW1wb3J0IHsgRzJCYXNlQ29tcG9uZW50IH0gZnJvbSAnQGRlbG9uL2NoYXJ0L2NvcmUnO1xuaW1wb3J0IHsgSW5wdXROdW1iZXIsIE51bWJlcklucHV0IH0gZnJvbSAnQGRlbG9uL3V0aWwvZGVjb3JhdG9yJztcbmltcG9ydCB0eXBlIHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBHMlRhZ0Nsb3VkRGF0YSB7XG4gIHZhbHVlPzogbnVtYmVyO1xuICBuYW1lPzogc3RyaW5nO1xuICBba2V5OiBzdHJpbmddOiBOelNhZmVBbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRzJUYWdDbG91ZENsaWNrSXRlbSB7XG4gIGl0ZW06IEcyVGFnQ2xvdWREYXRhO1xuICBldjogRXZlbnQ7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2cyLXRhZy1jbG91ZCcsXG4gIGV4cG9ydEFzOiAnZzJUYWdDbG91ZCcsXG4gIHRlbXBsYXRlOiBgPG56LXNrZWxldG9uICpuZ0lmPVwiIWxvYWRlZFwiPjwvbnotc2tlbGV0b24+YCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEcyVGFnQ2xvdWRDb21wb25lbnQgZXh0ZW5kcyBHMkJhc2VDb21wb25lbnQge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfaGVpZ2h0OiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3dpZHRoOiBOdW1iZXJJbnB1dDtcblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHdpZHRoID0gMDtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgaGVpZ2h0ID0gMjAwO1xuICBASW5wdXQoKSBwYWRkaW5nOiBudW1iZXIgfCBudW1iZXJbXSB8ICdhdXRvJyA9IDA7XG4gIEBJbnB1dCgpIGRhdGE6IEcyVGFnQ2xvdWREYXRhW10gPSBbXTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNsaWNrSXRlbSA9IG5ldyBFdmVudEVtaXR0ZXI8RzJUYWdDbG91ZENsaWNrSXRlbT4oKTtcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgcHJpdmF0ZSBpbml0VGFnQ2xvdWQoKTogdm9pZCB7XG4gICAgY29uc3Qgd2luRzIgPSB0aGlzLndpbkcyO1xuICAgIHdpbkcyLnJlZ2lzdGVyU2hhcGUoJ3BvaW50JywgJ2Nsb3VkJywge1xuICAgICAgZHJhdyhjZmc6IE56U2FmZUFueSwgY29udGFpbmVyOiBOelNhZmVBbnkpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IGNmZy5kYXRhIGFzIE56U2FmZUFueTtcbiAgICAgICAgY29uc3QgdGV4dFNoYXBlID0gY29udGFpbmVyLmFkZFNoYXBlKHtcbiAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgbmFtZTogJ3RhZy1jbG91ZC10ZXh0JyxcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgLi4uY2ZnLnN0eWxlLFxuICAgICAgICAgICAgZm9udFNpemU6IGRhdGEuc2l6ZSxcbiAgICAgICAgICAgIHRleHQ6IGRhdGEudGV4dCxcbiAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICBmb250RmFtaWx5OiBkYXRhLmZvbnQsXG4gICAgICAgICAgICBmaWxsOiBjZmcuY29sb3IsXG4gICAgICAgICAgICB0ZXh0QmFzZWxpbmU6ICdBbHBoYWJldGljJyxcbiAgICAgICAgICAgIHg6IGNmZy54LFxuICAgICAgICAgICAgeTogY2ZnLnlcbiAgICAgICAgICB9IGFzIE56U2FmZUFueVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGRhdGEucm90YXRlKSB7XG4gICAgICAgICAgd2luRzIuVXRpbC5yb3RhdGUodGV4dFNoYXBlLCAoZGF0YS5yb3RhdGUgKiBNYXRoLlBJKSAvIDE4MCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRleHRTaGFwZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGluc3RhbGwoKTogdm9pZCB7XG4gICAgdGhpcy5pbml0VGFnQ2xvdWQoKTtcblxuICAgIGNvbnN0IHsgZWwsIHBhZGRpbmcsIHRoZW1lIH0gPSB0aGlzO1xuICAgIGlmICh0aGlzLmhlaWdodCA9PT0gMCkge1xuICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICAgIH1cbiAgICBpZiAodGhpcy53aWR0aCA9PT0gMCkge1xuICAgICAgdGhpcy53aWR0aCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aDtcbiAgICB9XG5cbiAgICBjb25zdCBjaGFydDogQ2hhcnQgPSAodGhpcy5fY2hhcnQgPSBuZXcgdGhpcy53aW5HMi5DaGFydCh7XG4gICAgICBjb250YWluZXI6IGVsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICBhdXRvRml0OiBmYWxzZSxcbiAgICAgIHBhZGRpbmcsXG4gICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxuICAgICAgd2lkdGg6IHRoaXMud2lkdGgsXG4gICAgICB0aGVtZVxuICAgIH0pKTtcbiAgICBjaGFydC5zY2FsZSh7XG4gICAgICB4OiB7IG5pY2U6IGZhbHNlIH0sXG4gICAgICB5OiB7IG5pY2U6IGZhbHNlIH1cbiAgICB9KTtcbiAgICBjaGFydC5sZWdlbmQoZmFsc2UpO1xuICAgIGNoYXJ0LmF4aXMoZmFsc2UpO1xuICAgIGNoYXJ0LnRvb2x0aXAoe1xuICAgICAgc2hvd1RpdGxlOiBmYWxzZSxcbiAgICAgIHNob3dNYXJrZXJzOiBmYWxzZVxuICAgIH0pO1xuICAgIChjaGFydC5jb29yZGluYXRlKCkgYXMgTnpTYWZlQW55KS5yZWZsZWN0KCk7XG4gICAgY2hhcnRcbiAgICAgIC5wb2ludCgpXG4gICAgICAucG9zaXRpb24oJ3gqeScpXG4gICAgICAuY29sb3IoJ3RleHQnKVxuICAgICAgLnNoYXBlKCdjbG91ZCcpXG4gICAgICAuc3RhdGUoe1xuICAgICAgICBhY3RpdmU6IHtcbiAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgZmlsbE9wYWNpdHk6IDAuNFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgY2hhcnQuaW50ZXJhY3Rpb24oJ2VsZW1lbnQtYWN0aXZlJyk7XG5cbiAgICBjaGFydC5vbigndGFnLWNsb3VkLXRleHQ6Y2xpY2snLCAoZXY6IEV2ZW50KSA9PiB7XG4gICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gdGhpcy5jbGlja0l0ZW0uZW1pdCh7IGl0ZW06IGV2LmRhdGE/LmRhdGEsIGV2IH0pKTtcbiAgICB9KTtcblxuICAgIHRoaXMucmVhZHkubmV4dChjaGFydCk7XG5cbiAgICB0aGlzLmNoYW5nZURhdGEoKTtcbiAgICBjaGFydC5yZW5kZXIoKTtcbiAgfVxuXG4gIGNoYW5nZURhdGEoKTogdm9pZCB7XG4gICAgY29uc3QgeyBfY2hhcnQsIGRhdGEgfSA9IHRoaXM7XG4gICAgaWYgKCFfY2hhcnQgfHwgIUFycmF5LmlzQXJyYXkoZGF0YSkgfHwgZGF0YS5sZW5ndGggPD0gMCkgcmV0dXJuO1xuXG4gICAgY29uc3QgZHYgPSBuZXcgKHdpbmRvdyBhcyBOelNhZmVBbnkpLkRhdGFTZXQuVmlldygpLnNvdXJjZShkYXRhKTtcbiAgICBjb25zdCByYW5nZSA9IGR2LnJhbmdlKCd2YWx1ZScpO1xuICAgIGNvbnN0IG1pbiA9IHJhbmdlWzBdO1xuICAgIGNvbnN0IG1heCA9IHJhbmdlWzFdO1xuXG4gICAgZHYudHJhbnNmb3JtKHtcbiAgICAgIHR5cGU6ICd0YWctY2xvdWQnLFxuICAgICAgZmllbGRzOiBbJ25hbWUnLCAndmFsdWUnXSxcbiAgICAgIC8vIGltYWdlTWFzayxcbiAgICAgIGZvbnQ6ICdWZXJkYW5hJyxcbiAgICAgIHNpemU6IFt0aGlzLndpZHRoLCB0aGlzLmhlaWdodF0sIC8vIOWuvemrmOiuvue9ruacgOWlveagueaNriBpbWFnZU1hc2sg5YGa6LCD5pW0XG4gICAgICBwYWRkaW5nOiAwLFxuICAgICAgdGltZUludGVydmFsOiA1MDAwLCAvLyBtYXggZXhlY3V0ZSB0aW1lXG4gICAgICByb3RhdGUoKSB7XG4gICAgICAgIGxldCByYW5kb20gPSB+fihNYXRoLnJhbmRvbSgpICogNCkgJSA0O1xuICAgICAgICBpZiAocmFuZG9tID09PSAyKSB7XG4gICAgICAgICAgcmFuZG9tID0gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmFuZG9tICogOTA7IC8vIDAsIDkwLCAyNzBcbiAgICAgIH0sXG4gICAgICBmb250U2l6ZShkOiBOelNhZmVBbnkpIHtcbiAgICAgICAgcmV0dXJuICgoZC52YWx1ZSAtIG1pbikgLyAobWF4IC0gbWluKSkgKiAoMzIgLSA4KSArIDg7XG4gICAgICB9XG4gICAgfSBhcyBOelNhZmVBbnkpO1xuXG4gICAgX2NoYXJ0LmNoYW5nZURhdGEoZHYucm93cyk7XG4gIH1cblxuICBwcml2YXRlIGluc3RhbGxSZXNpemVFdmVudCgpOiB2b2lkIHtcbiAgICB0aGlzLnJlc2l6ZSQgPSBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJylcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoKCkgPT4gISF0aGlzLl9jaGFydCksXG4gICAgICAgIGRlYm91bmNlVGltZSgyMDApXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2hhbmdlRGF0YSgpKTtcbiAgfVxuXG4gIG9uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmluc3RhbGxSZXNpemVFdmVudCgpO1xuICB9XG59XG4iXX0=