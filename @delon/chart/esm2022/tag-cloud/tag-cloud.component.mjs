import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { fromEvent, debounceTime, filter } from 'rxjs';
import { G2BaseComponent } from '@delon/chart/core';
import { InputNumber } from '@delon/util/decorator';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/skeleton";
export class G2TagCloudComponent extends G2BaseComponent {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: G2TagCloudComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: G2TagCloudComponent, selector: "g2-tag-cloud", inputs: { width: "width", height: "height", padding: "padding", data: "data" }, outputs: { clickItem: "clickItem" }, exportAs: ["g2TagCloud"], usesInheritance: true, ngImport: i0, template: `@if (!loaded) {
    <nz-skeleton />
  }`, isInline: true, dependencies: [{ kind: "component", type: i1.NzSkeletonComponent, selector: "nz-skeleton", inputs: ["nzActive", "nzLoading", "nzRound", "nzTitle", "nzAvatar", "nzParagraph"], exportAs: ["nzSkeleton"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
__decorate([
    InputNumber()
], G2TagCloudComponent.prototype, "width", void 0);
__decorate([
    InputNumber()
], G2TagCloudComponent.prototype, "height", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: G2TagCloudComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'g2-tag-cloud',
                    exportAs: 'g2TagCloud',
                    template: `@if (!loaded) {
    <nz-skeleton />
  }`,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLWNsb3VkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NoYXJ0L3RhZy1jbG91ZC90YWctY2xvdWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ILE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUl2RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUFFLFdBQVcsRUFBZSxNQUFNLHVCQUF1QixDQUFDOzs7QUF3QmpFLE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxlQUFlO0lBVnhEOztRQWNFLGlCQUFpQjtRQUVPLFVBQUssR0FBRyxDQUFDLENBQUM7UUFDVixXQUFNLEdBQUcsR0FBRyxDQUFDO1FBQzVCLFlBQU8sR0FBK0IsQ0FBQyxDQUFDO1FBQ3hDLFNBQUksR0FBcUIsRUFBRSxDQUFDO1FBQ2xCLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBdUIsQ0FBQztLQWtJeEU7SUFoSUMsYUFBYTtJQUVMLFlBQVk7UUFDbEIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN6QixLQUFLLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUU7WUFDcEMsSUFBSSxDQUFDLEdBQWMsRUFBRSxTQUFvQjtnQkFDdkMsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQWlCLENBQUM7Z0JBQ25DLE1BQU0sU0FBUyxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUM7b0JBQ25DLElBQUksRUFBRSxNQUFNO29CQUNaLElBQUksRUFBRSxnQkFBZ0I7b0JBQ3RCLEtBQUssRUFBRTt3QkFDTCxH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QUFDLElBQUk7aUJBQ3RDOzhCQU95QixLQUFLO3NCQUE1QixLQUFLO2dCQUNrQixNQUFNO3NCQUE3QixLQUFLO2dCQUNHLE9BQU87c0JBQWYsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ2EsU0FBUztzQkFBM0IsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZyb21FdmVudCwgZGVib3VuY2VUaW1lLCBmaWx0ZXIgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHR5cGUgeyBDaGFydCwgRXZlbnQgfSBmcm9tICdAYW50di9nMic7XG5cbmltcG9ydCB7IEcyQmFzZUNvbXBvbmVudCB9IGZyb20gJ0BkZWxvbi9jaGFydC9jb3JlJztcbmltcG9ydCB7IElucHV0TnVtYmVyLCBOdW1iZXJJbnB1dCB9IGZyb20gJ0BkZWxvbi91dGlsL2RlY29yYXRvcic7XG5pbXBvcnQgdHlwZSB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRzJUYWdDbG91ZERhdGEge1xuICB2YWx1ZT86IG51bWJlcjtcbiAgbmFtZT86IHN0cmluZztcbiAgW2tleTogc3RyaW5nXTogTnpTYWZlQW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEcyVGFnQ2xvdWRDbGlja0l0ZW0ge1xuICBpdGVtOiBHMlRhZ0Nsb3VkRGF0YTtcbiAgZXY6IEV2ZW50O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnMi10YWctY2xvdWQnLFxuICBleHBvcnRBczogJ2cyVGFnQ2xvdWQnLFxuICB0ZW1wbGF0ZTogYEBpZiAoIWxvYWRlZCkge1xuICAgIDxuei1za2VsZXRvbiAvPlxuICB9YCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEcyVGFnQ2xvdWRDb21wb25lbnQgZXh0ZW5kcyBHMkJhc2VDb21wb25lbnQge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfaGVpZ2h0OiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3dpZHRoOiBOdW1iZXJJbnB1dDtcblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHdpZHRoID0gMDtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgaGVpZ2h0ID0gMjAwO1xuICBASW5wdXQoKSBwYWRkaW5nOiBudW1iZXIgfCBudW1iZXJbXSB8ICdhdXRvJyA9IDA7XG4gIEBJbnB1dCgpIGRhdGE6IEcyVGFnQ2xvdWREYXRhW10gPSBbXTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNsaWNrSXRlbSA9IG5ldyBFdmVudEVtaXR0ZXI8RzJUYWdDbG91ZENsaWNrSXRlbT4oKTtcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgcHJpdmF0ZSBpbml0VGFnQ2xvdWQoKTogdm9pZCB7XG4gICAgY29uc3Qgd2luRzIgPSB0aGlzLndpbkcyO1xuICAgIHdpbkcyLnJlZ2lzdGVyU2hhcGUoJ3BvaW50JywgJ2Nsb3VkJywge1xuICAgICAgZHJhdyhjZmc6IE56U2FmZUFueSwgY29udGFpbmVyOiBOelNhZmVBbnkpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IGNmZy5kYXRhIGFzIE56U2FmZUFueTtcbiAgICAgICAgY29uc3QgdGV4dFNoYXBlID0gY29udGFpbmVyLmFkZFNoYXBlKHtcbiAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgbmFtZTogJ3RhZy1jbG91ZC10ZXh0JyxcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgLi4uY2ZnLnN0eWxlLFxuICAgICAgICAgICAgZm9udFNpemU6IGRhdGEuc2l6ZSxcbiAgICAgICAgICAgIHRleHQ6IGRhdGEudGV4dCxcbiAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICBmb250RmFtaWx5OiBkYXRhLmZvbnQsXG4gICAgICAgICAgICBmaWxsOiBjZmcuY29sb3IsXG4gICAgICAgICAgICB0ZXh0QmFzZWxpbmU6ICdBbHBoYWJldGljJyxcbiAgICAgICAgICAgIHg6IGNmZy54LFxuICAgICAgICAgICAgeTogY2ZnLnlcbiAgICAgICAgICB9IGFzIE56U2FmZUFueVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGRhdGEucm90YXRlKSB7XG4gICAgICAgICAgd2luRzIuVXRpbC5yb3RhdGUodGV4dFNoYXBlLCAoZGF0YS5yb3RhdGUgKiBNYXRoLlBJKSAvIDE4MCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRleHRTaGFwZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGluc3RhbGwoKTogdm9pZCB7XG4gICAgdGhpcy5pbml0VGFnQ2xvdWQoKTtcblxuICAgIGNvbnN0IHsgZWwsIHBhZGRpbmcsIHRoZW1lIH0gPSB0aGlzO1xuICAgIGlmICh0aGlzLmhlaWdodCA9PT0gMCkge1xuICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICAgIH1cbiAgICBpZiAodGhpcy53aWR0aCA9PT0gMCkge1xuICAgICAgdGhpcy53aWR0aCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aDtcbiAgICB9XG5cbiAgICBjb25zdCBjaGFydDogQ2hhcnQgPSAodGhpcy5fY2hhcnQgPSBuZXcgdGhpcy53aW5HMi5DaGFydCh7XG4gICAgICBjb250YWluZXI6IGVsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICBhdXRvRml0OiBmYWxzZSxcbiAgICAgIHBhZGRpbmcsXG4gICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxuICAgICAgd2lkdGg6IHRoaXMud2lkdGgsXG4gICAgICB0aGVtZVxuICAgIH0pKTtcbiAgICBjaGFydC5zY2FsZSh7XG4gICAgICB4OiB7IG5pY2U6IGZhbHNlIH0sXG4gICAgICB5OiB7IG5pY2U6IGZhbHNlIH1cbiAgICB9KTtcbiAgICBjaGFydC5sZWdlbmQoZmFsc2UpO1xuICAgIGNoYXJ0LmF4aXMoZmFsc2UpO1xuICAgIGNoYXJ0LnRvb2x0aXAoe1xuICAgICAgc2hvd1RpdGxlOiBmYWxzZSxcbiAgICAgIHNob3dNYXJrZXJzOiBmYWxzZVxuICAgIH0pO1xuICAgIChjaGFydC5jb29yZGluYXRlKCkgYXMgTnpTYWZlQW55KS5yZWZsZWN0KCk7XG4gICAgY2hhcnRcbiAgICAgIC5wb2ludCgpXG4gICAgICAucG9zaXRpb24oJ3gqeScpXG4gICAgICAuY29sb3IoJ3RleHQnKVxuICAgICAgLnNoYXBlKCdjbG91ZCcpXG4gICAgICAuc3RhdGUoe1xuICAgICAgICBhY3RpdmU6IHtcbiAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgZmlsbE9wYWNpdHk6IDAuNFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgY2hhcnQuaW50ZXJhY3Rpb24oJ2VsZW1lbnQtYWN0aXZlJyk7XG5cbiAgICBjaGFydC5vbigndGFnLWNsb3VkLXRleHQ6Y2xpY2snLCAoZXY6IEV2ZW50KSA9PiB7XG4gICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gdGhpcy5jbGlja0l0ZW0uZW1pdCh7IGl0ZW06IGV2LmRhdGE/LmRhdGEsIGV2IH0pKTtcbiAgICB9KTtcblxuICAgIHRoaXMucmVhZHkubmV4dChjaGFydCk7XG5cbiAgICB0aGlzLmNoYW5nZURhdGEoKTtcbiAgICBjaGFydC5yZW5kZXIoKTtcbiAgfVxuXG4gIGNoYW5nZURhdGEoKTogdm9pZCB7XG4gICAgY29uc3QgeyBfY2hhcnQsIGRhdGEgfSA9IHRoaXM7XG4gICAgaWYgKCFfY2hhcnQgfHwgIUFycmF5LmlzQXJyYXkoZGF0YSkgfHwgZGF0YS5sZW5ndGggPD0gMCkgcmV0dXJuO1xuXG4gICAgY29uc3QgZHYgPSBuZXcgKHdpbmRvdyBhcyBOelNhZmVBbnkpLkRhdGFTZXQuVmlldygpLnNvdXJjZShkYXRhKTtcbiAgICBjb25zdCByYW5nZSA9IGR2LnJhbmdlKCd2YWx1ZScpO1xuICAgIGNvbnN0IG1pbiA9IHJhbmdlWzBdO1xuICAgIGNvbnN0IG1heCA9IHJhbmdlWzFdO1xuXG4gICAgZHYudHJhbnNmb3JtKHtcbiAgICAgIHR5cGU6ICd0YWctY2xvdWQnLFxuICAgICAgZmllbGRzOiBbJ25hbWUnLCAndmFsdWUnXSxcbiAgICAgIC8vIGltYWdlTWFzayxcbiAgICAgIGZvbnQ6ICdWZXJkYW5hJyxcbiAgICAgIHNpemU6IFt0aGlzLndpZHRoLCB0aGlzLmhlaWdodF0sIC8vIOWuvemrmOiuvue9ruacgOWlveagueaNriBpbWFnZU1hc2sg5YGa6LCD5pW0XG4gICAgICBwYWRkaW5nOiAwLFxuICAgICAgdGltZUludGVydmFsOiA1MDAwLCAvLyBtYXggZXhlY3V0ZSB0aW1lXG4gICAgICByb3RhdGUoKSB7XG4gICAgICAgIGxldCByYW5kb20gPSB+fihNYXRoLnJhbmRvbSgpICogNCkgJSA0O1xuICAgICAgICBpZiAocmFuZG9tID09PSAyKSB7XG4gICAgICAgICAgcmFuZG9tID0gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmFuZG9tICogOTA7IC8vIDAsIDkwLCAyNzBcbiAgICAgIH0sXG4gICAgICBmb250U2l6ZShkOiBOelNhZmVBbnkpIHtcbiAgICAgICAgcmV0dXJuICgoZC52YWx1ZSAtIG1pbikgLyAobWF4IC0gbWluKSkgKiAoMzIgLSA4KSArIDg7XG4gICAgICB9XG4gICAgfSBhcyBOelNhZmVBbnkpO1xuXG4gICAgX2NoYXJ0LmNoYW5nZURhdGEoZHYucm93cyk7XG4gIH1cblxuICBwcml2YXRlIGluc3RhbGxSZXNpemVFdmVudCgpOiB2b2lkIHtcbiAgICB0aGlzLnJlc2l6ZSQgPSBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJylcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoKCkgPT4gISF0aGlzLl9jaGFydCksXG4gICAgICAgIGRlYm91bmNlVGltZSgyMDApXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2hhbmdlRGF0YSgpKTtcbiAgfVxuXG4gIG9uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmluc3RhbGxSZXNpemVFdmVudCgpO1xuICB9XG59XG4iXX0=