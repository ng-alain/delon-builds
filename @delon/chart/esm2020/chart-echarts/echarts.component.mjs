import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { fromEvent, Subject, debounceTime, filter, takeUntil } from 'rxjs';
import { ZoneOutside } from '@delon/util/decorator';
import * as i0 from "@angular/core";
import * as i1 from "./echarts.service";
import * as i2 from "@angular/cdk/platform";
import * as i3 from "@angular/common";
import * as i4 from "ng-zorro-antd/skeleton";
export class ChartEChartsComponent {
    set width(val) {
        this._width = typeof val === 'number' ? `${val}px` : `${val}`;
    }
    set height(val) {
        this._height = typeof val === 'number' ? `${val}px` : `${val}`;
    }
    set theme(value) {
        this._theme = value;
        if (this._chart) {
            this.install();
        }
    }
    set initOpt(value) {
        this._initOpt = value;
        if (this._chart) {
            this.install();
        }
    }
    set option(value) {
        this._option = value;
        if (this._chart) {
            this.setOption(value, true);
        }
    }
    get chart() {
        return this._chart;
    }
    constructor(srv, cdr, ngZone, platform) {
        this.srv = srv;
        this.cdr = cdr;
        this.ngZone = ngZone;
        this.platform = platform;
        this.destroy$ = new Subject();
        this._chart = null;
        this._width = '100%';
        this._height = '400px';
        this.on = [];
        this.events = new EventEmitter();
        this.loaded = false;
        this.srv.notify
            .pipe(takeUntil(this.destroy$), filter(() => !this.loaded))
            .subscribe(() => this.load());
        this.theme = srv.cog.echartsTheme;
    }
    emit(type, other) {
        this.events.emit({ type, chart: this.chart, ...other });
    }
    load() {
        this.ngZone.run(() => {
            this.loaded = true;
            this.cdr.detectChanges();
        });
        this.emit('ready');
        this.install();
    }
    install() {
        this.destroy();
        const chart = (this._chart = window.echarts.init(this.node.nativeElement, this._theme, this._initOpt));
        this.emit('init');
        this.setOption(this._option);
        // on
        this.on.forEach(item => {
            if (item.query != null) {
                chart.on(item.eventName, item.query, event => item.handler({ event, chart }));
            }
            else {
                chart.on(item.eventName, event => item.handler({ event, chart }));
            }
        });
        return this;
    }
    destroy() {
        if (this._chart) {
            this._chart.dispose();
            this.emit('destroy');
        }
        return this;
    }
    setOption(option, notMerge = false, lazyUpdate = false) {
        if (this._chart) {
            this._chart.setOption(option, notMerge, lazyUpdate);
            this.emit('set-option', { option });
        }
        return this;
    }
    ngOnInit() {
        if (!this.platform.isBrowser) {
            return;
        }
        if (window.echarts) {
            this.load();
        }
        else {
            this.srv.libLoad();
        }
        fromEvent(window, 'resize')
            .pipe(takeUntil(this.destroy$), filter(() => !!this._chart), debounceTime(200))
            .subscribe(() => this._chart.resize());
    }
    ngOnDestroy() {
        this.on.forEach(item => this._chart?.off(item.eventName));
        this.destroy$.next();
        this.destroy$.complete();
        this.destroy();
    }
}
ChartEChartsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ChartEChartsComponent, deps: [{ token: i1.ChartEChartsService }, { token: i0.ChangeDetectorRef }, { token: i0.NgZone }, { token: i2.Platform }], target: i0.ɵɵFactoryTarget.Component });
ChartEChartsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ChartEChartsComponent, selector: "chart-echarts, [chart-echarts]", inputs: { width: "width", height: "height", theme: "theme", initOpt: "initOpt", option: "option", on: "on" }, outputs: { events: "events" }, host: { properties: { "style.display": "'inline-block'", "style.width": "_width", "style.height": "_height" } }, viewQueries: [{ propertyName: "node", first: true, predicate: ["container"], descendants: true, static: true }], exportAs: ["chartECharts"], ngImport: i0, template: `
    <nz-skeleton *ngIf="!loaded"></nz-skeleton>
    <div #container [style.width]="_width" [style.height]="_height"></div>
  `, isInline: true, dependencies: [{ kind: "directive", type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i4.NzSkeletonComponent, selector: "nz-skeleton", inputs: ["nzActive", "nzLoading", "nzRound", "nzTitle", "nzAvatar", "nzParagraph"], exportAs: ["nzSkeleton"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    ZoneOutside()
], ChartEChartsComponent.prototype, "load", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ChartEChartsComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'chart-echarts, [chart-echarts]',
                    exportAs: 'chartECharts',
                    template: `
    <nz-skeleton *ngIf="!loaded"></nz-skeleton>
    <div #container [style.width]="_width" [style.height]="_height"></div>
  `,
                    host: {
                        '[style.display]': `'inline-block'`,
                        '[style.width]': `_width`,
                        '[style.height]': `_height`
                    },
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: function () { return [{ type: i1.ChartEChartsService }, { type: i0.ChangeDetectorRef }, { type: i0.NgZone }, { type: i2.Platform }]; }, propDecorators: { node: [{
                type: ViewChild,
                args: ['container', { static: true }]
            }], width: [{
                type: Input
            }], height: [{
                type: Input
            }], theme: [{
                type: Input
            }], initOpt: [{
                type: Input
            }], option: [{
                type: Input
            }], on: [{
                type: Input
            }], events: [{
                type: Output
            }], load: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWNoYXJ0cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jaGFydC9jaGFydC1lY2hhcnRzL2VjaGFydHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQ0wsdUJBQXVCLEVBRXZCLFNBQVMsRUFFVCxZQUFZLEVBQ1osS0FBSyxFQUlMLE1BQU0sRUFDTixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTNFLE9BQU8sRUFBZSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7O0FBNEJqRSxNQUFNLE9BQU8scUJBQXFCO0lBbUJoQyxJQUNJLEtBQUssQ0FBQyxHQUFnQjtRQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sR0FBRyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztJQUNoRSxDQUFDO0lBQ0QsSUFBYSxNQUFNLENBQUMsR0FBZ0I7UUFDbEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLEdBQUcsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7SUFDakUsQ0FBQztJQUNELElBQ0ksS0FBSyxDQUFDLEtBQTBEO1FBQ2xFLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNoQjtJQUNILENBQUM7SUFDRCxJQUNJLE9BQU8sQ0FBQyxLQUFnQjtRQUMxQixJQUFJLENBQUMs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QURSLEtBQUs7Z0JBSU8sTUFBTTtzQkFBbEIsS0FBSztnQkFJRixLQUFLO3NCQURSLEtBQUs7Z0JBUUYsT0FBTztzQkFEVixLQUFLO2dCQVFGLE1BQU07c0JBRFQsS0FBSztnQkFPRyxFQUFFO3NCQUFWLEtBQUs7Z0JBQ2EsTUFBTTtzQkFBeEIsTUFBTTtnQkE0QkMsSUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YmplY3QsIGRlYm91bmNlVGltZSwgZmlsdGVyLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTnVtYmVySW5wdXQsIFpvbmVPdXRzaWRlIH0gZnJvbSAnQGRlbG9uL3V0aWwvZGVjb3JhdG9yJztcbmltcG9ydCB0eXBlIHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuaW1wb3J0IHsgQ2hhcnRFQ2hhcnRzU2VydmljZSB9IGZyb20gJy4vZWNoYXJ0cy5zZXJ2aWNlJztcbmltcG9ydCB7XG4gIENoYXJ0RUNoYXJ0cyxcbiAgQ2hhcnRFQ2hhcnRzRXZlbnQsXG4gIENoYXJ0RUNoYXJ0c0V2ZW50VHlwZSxcbiAgQ2hhcnRFQ2hhcnRzT24sXG4gIENoYXJ0RUNoYXJ0c09wdGlvblxufSBmcm9tICcuL2VjaGFydHMudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjaGFydC1lY2hhcnRzLCBbY2hhcnQtZWNoYXJ0c10nLFxuICBleHBvcnRBczogJ2NoYXJ0RUNoYXJ0cycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG56LXNrZWxldG9uICpuZ0lmPVwiIWxvYWRlZFwiPjwvbnotc2tlbGV0b24+XG4gICAgPGRpdiAjY29udGFpbmVyIFtzdHlsZS53aWR0aF09XCJfd2lkdGhcIiBbc3R5bGUuaGVpZ2h0XT1cIl9oZWlnaHRcIj48L2Rpdj5cbiAgYCxcbiAgaG9zdDoge1xuICAgICdbc3R5bGUuZGlzcGxheV0nOiBgJ2lubGluZS1ibG9jaydgLFxuICAgICdbc3R5bGUud2lkdGhdJzogYF93aWR0aGAsXG4gICAgJ1tzdHlsZS5oZWlnaHRdJzogYF9oZWlnaHRgXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBDaGFydEVDaGFydHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV93aWR0aDogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9oZWlnaHQ6IE51bWJlcklucHV0O1xuXG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicsIHsgc3RhdGljOiB0cnVlIH0pIHByaXZhdGUgbm9kZSE6IEVsZW1lbnRSZWY7XG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIF9jaGFydDogQ2hhcnRFQ2hhcnRzIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgX3RoZW1lPzogc3RyaW5nIHwgUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfCBudWxsO1xuICBwcml2YXRlIF9pbml0T3B0Pzoge1xuICAgIHJlbmRlcmVyPzogTnpTYWZlQW55O1xuICAgIGRldmljZVBpeGVsUmF0aW8/OiBudW1iZXI7XG4gICAgd2lkdGg/OiBudW1iZXI7XG4gICAgaGVpZ2h0PzogbnVtYmVyO1xuICAgIGxvY2FsZT86IE56U2FmZUFueTtcbiAgfTtcbiAgcHJpdmF0ZSBfb3B0aW9uITogQ2hhcnRFQ2hhcnRzT3B0aW9uO1xuICBfd2lkdGggPSAnMTAwJSc7XG4gIF9oZWlnaHQgPSAnNDAwcHgnO1xuXG4gIEBJbnB1dCgpXG4gIHNldCB3aWR0aCh2YWw6IE51bWJlcklucHV0KSB7XG4gICAgdGhpcy5fd2lkdGggPSB0eXBlb2YgdmFsID09PSAnbnVtYmVyJyA/IGAke3ZhbH1weGAgOiBgJHt2YWx9YDtcbiAgfVxuICBASW5wdXQoKSBzZXQgaGVpZ2h0KHZhbDogTnVtYmVySW5wdXQpIHtcbiAgICB0aGlzLl9oZWlnaHQgPSB0eXBlb2YgdmFsID09PSAnbnVtYmVyJyA/IGAke3ZhbH1weGAgOiBgJHt2YWx9YDtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgdGhlbWUodmFsdWU6IHN0cmluZyB8IFJlY29yZDxzdHJpbmcsIHVua25vd24+IHwgbnVsbCB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3RoZW1lID0gdmFsdWU7XG4gICAgaWYgKHRoaXMuX2NoYXJ0KSB7XG4gICAgICB0aGlzLmluc3RhbGwoKTtcbiAgICB9XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGluaXRPcHQodmFsdWU6IE56U2FmZUFueSkge1xuICAgIHRoaXMuX2luaXRPcHQgPSB2YWx1ZTtcbiAgICBpZiAodGhpcy5fY2hhcnQpIHtcbiAgICAgIHRoaXMuaW5zdGFsbCgpO1xuICAgIH1cbiAgfVxuICBASW5wdXQoKVxuICBzZXQgb3B0aW9uKHZhbHVlOiBDaGFydEVDaGFydHNPcHRpb24pIHtcbiAgICB0aGlzLl9vcHRpb24gPSB2YWx1ZTtcbiAgICBpZiAodGhpcy5fY2hhcnQpIHtcbiAgICAgIHRoaXMuc2V0T3B0aW9uKHZhbHVlLCB0cnVlKTtcbiAgICB9XG4gIH1cbiAgQElucHV0KCkgb246IENoYXJ0RUNoYXJ0c09uW10gPSBbXTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGV2ZW50cyA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFQ2hhcnRzRXZlbnQ+KCk7XG5cbiAgZ2V0IGNoYXJ0KCk6IENoYXJ0RUNoYXJ0cyB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLl9jaGFydDtcbiAgfVxuICBsb2FkZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHNydjogQ2hhcnRFQ2hhcnRzU2VydmljZSxcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybVxuICApIHtcbiAgICB0aGlzLnNydi5ub3RpZnlcbiAgICAgIC5waXBlKFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXG4gICAgICAgIGZpbHRlcigoKSA9PiAhdGhpcy5sb2FkZWQpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMubG9hZCgpKTtcblxuICAgIHRoaXMudGhlbWUgPSBzcnYuY29nLmVjaGFydHNUaGVtZTtcbiAgfVxuXG4gIHByaXZhdGUgZW1pdCh0eXBlOiBDaGFydEVDaGFydHNFdmVudFR5cGUsIG90aGVyPzogQ2hhcnRFQ2hhcnRzRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLmV2ZW50cy5lbWl0KHsgdHlwZSwgY2hhcnQ6IHRoaXMuY2hhcnQhISwgLi4ub3RoZXIgfSk7XG4gIH1cblxuICBAWm9uZU91dHNpZGUoKVxuICBwcml2YXRlIGxvYWQoKTogdm9pZCB7XG4gICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgICB0aGlzLmVtaXQoJ3JlYWR5Jyk7XG4gICAgdGhpcy5pbnN0YWxsKCk7XG4gIH1cblxuICBpbnN0YWxsKCk6IHRoaXMge1xuICAgIHRoaXMuZGVzdHJveSgpO1xuICAgIGNvbnN0IGNoYXJ0ID0gKHRoaXMuX2NoYXJ0ID0gKHdpbmRvdyBhcyBOelNhZmVBbnkpLmVjaGFydHMuaW5pdChcbiAgICAgIHRoaXMubm9kZS5uYXRpdmVFbGVtZW50LFxuICAgICAgdGhpcy5fdGhlbWUsXG4gICAgICB0aGlzLl9pbml0T3B0XG4gICAgKSkgYXMgQ2hhcnRFQ2hhcnRzO1xuICAgIHRoaXMuZW1pdCgnaW5pdCcpO1xuICAgIHRoaXMuc2V0T3B0aW9uKHRoaXMuX29wdGlvbik7XG4gICAgLy8gb25cbiAgICB0aGlzLm9uLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpZiAoaXRlbS5xdWVyeSAhPSBudWxsKSB7XG4gICAgICAgIGNoYXJ0Lm9uKGl0ZW0uZXZlbnROYW1lLCBpdGVtLnF1ZXJ5LCBldmVudCA9PiBpdGVtLmhhbmRsZXIoeyBldmVudCwgY2hhcnQgfSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hhcnQub24oaXRlbS5ldmVudE5hbWUsIGV2ZW50ID0+IGl0ZW0uaGFuZGxlcih7IGV2ZW50LCBjaGFydCB9KSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBkZXN0cm95KCk6IHRoaXMge1xuICAgIGlmICh0aGlzLl9jaGFydCkge1xuICAgICAgdGhpcy5fY2hhcnQuZGlzcG9zZSgpO1xuICAgICAgdGhpcy5lbWl0KCdkZXN0cm95Jyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0T3B0aW9uKG9wdGlvbjogQ2hhcnRFQ2hhcnRzT3B0aW9uLCBub3RNZXJnZTogYm9vbGVhbiA9IGZhbHNlLCBsYXp5VXBkYXRlOiBib29sZWFuID0gZmFsc2UpOiB0aGlzIHtcbiAgICBpZiAodGhpcy5fY2hhcnQpIHtcbiAgICAgIHRoaXMuX2NoYXJ0LnNldE9wdGlvbihvcHRpb24sIG5vdE1lcmdlLCBsYXp5VXBkYXRlKTtcbiAgICAgIHRoaXMuZW1pdCgnc2V0LW9wdGlvbicsIHsgb3B0aW9uIH0gYXMgTnpTYWZlQW55KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICgod2luZG93IGFzIE56U2FmZUFueSkuZWNoYXJ0cykge1xuICAgICAgdGhpcy5sb2FkKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3J2LmxpYkxvYWQoKTtcbiAgICB9XG5cbiAgICBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJylcbiAgICAgIC5waXBlKFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXG4gICAgICAgIGZpbHRlcigoKSA9PiAhIXRoaXMuX2NoYXJ0KSxcbiAgICAgICAgZGVib3VuY2VUaW1lKDIwMClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5fY2hhcnQhIS5yZXNpemUoKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLm9uLmZvckVhY2goaXRlbSA9PiB0aGlzLl9jaGFydD8ub2ZmKGl0ZW0uZXZlbnROYW1lKSk7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICAgIHRoaXMuZGVzdHJveSgpO1xuICB9XG59XG4iXX0=