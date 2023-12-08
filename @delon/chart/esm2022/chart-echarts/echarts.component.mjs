import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, DestroyRef, EventEmitter, Input, Output, ViewChild, ViewEncapsulation, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { fromEvent, debounceTime, filter } from 'rxjs';
import { ZoneOutside } from '@delon/util/decorator';
import * as i0 from "@angular/core";
import * as i1 from "./echarts.service";
import * as i2 from "@angular/cdk/platform";
import * as i3 from "ng-zorro-antd/skeleton";
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
        this.destroy$ = inject(DestroyRef);
        this._chart = null;
        this._width = '100%';
        this._height = '400px';
        this.on = [];
        this.events = new EventEmitter();
        this.loaded = false;
        this.srv.notify
            .pipe(takeUntilDestroyed(), filter(() => !this.loaded))
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
            .pipe(takeUntilDestroyed(this.destroy$), filter(() => !!this._chart), debounceTime(200))
            .subscribe(() => this._chart.resize());
    }
    ngOnDestroy() {
        this.on.forEach(item => this._chart?.off(item.eventName));
        this.destroy();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: ChartEChartsComponent, deps: [{ token: i1.ChartEChartsService }, { token: i0.ChangeDetectorRef }, { token: i0.NgZone }, { token: i2.Platform }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.6", type: ChartEChartsComponent, selector: "chart-echarts, [chart-echarts]", inputs: { width: "width", height: "height", theme: "theme", initOpt: "initOpt", option: "option", on: "on" }, outputs: { events: "events" }, host: { properties: { "style.display": "'inline-block'", "style.width": "_width", "style.height": "_height" } }, viewQueries: [{ propertyName: "node", first: true, predicate: ["container"], descendants: true, static: true }], exportAs: ["chartECharts"], ngImport: i0, template: `
    @if (!loaded) {
      <nz-skeleton />
    }
    <div #container [style.width]="_width" [style.height]="_height"></div>
  `, isInline: true, dependencies: [{ kind: "component", type: i3.NzSkeletonComponent, selector: "nz-skeleton", inputs: ["nzActive", "nzLoading", "nzRound", "nzTitle", "nzAvatar", "nzParagraph"], exportAs: ["nzSkeleton"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
__decorate([
    ZoneOutside()
], ChartEChartsComponent.prototype, "load", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: ChartEChartsComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'chart-echarts, [chart-echarts]',
                    exportAs: 'chartECharts',
                    template: `
    @if (!loaded) {
      <nz-skeleton />
    }
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
        }], ctorParameters: () => [{ type: i1.ChartEChartsService }, { type: i0.ChangeDetectorRef }, { type: i0.NgZone }, { type: i2.Platform }], propDecorators: { node: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWNoYXJ0cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jaGFydC9jaGFydC1lY2hhcnRzL2VjaGFydHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQ0wsdUJBQXVCLEVBRXZCLFNBQVMsRUFDVCxVQUFVLEVBRVYsWUFBWSxFQUNaLEtBQUssRUFJTCxNQUFNLEVBQ04sU0FBUyxFQUNULGlCQUFpQixFQUNqQixNQUFNLEVBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDaEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXZELE9BQU8sRUFBZSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7QUE4QmpFLE1BQU0sT0FBTyxxQkFBcUI7SUFtQmhDLElBQ0ksS0FBSyxDQUFDLEdBQWdCO1FBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxHQUFHLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO0lBQ2hFLENBQUM7SUFDRCxJQUFhLE1BQU0sQ0FBQyxHQUFnQjtRQUNsQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sR0FBRyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztJQUNqRSxDQUFDO0lBQ0QsSUFDSSxLQUFLLENBQUMsS0FBMEQ7UUFDbEUsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ2hCO0lBQ0gsQ0FB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QURSLEtBQUs7Z0JBUUYsT0FBTztzQkFEVixLQUFLO2dCQVFGLE1BQU07c0JBRFQsS0FBSztnQkFPRyxFQUFFO3NCQUFWLEtBQUs7Z0JBQ2EsTUFBTTtzQkFBeEIsTUFBTTtnQkE0QkMsSUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBEZXN0cm95UmVmLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIGluamVjdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRha2VVbnRpbERlc3Ryb3llZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvcnhqcy1pbnRlcm9wJztcbmltcG9ydCB7IGZyb21FdmVudCwgZGVib3VuY2VUaW1lLCBmaWx0ZXIgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTnVtYmVySW5wdXQsIFpvbmVPdXRzaWRlIH0gZnJvbSAnQGRlbG9uL3V0aWwvZGVjb3JhdG9yJztcbmltcG9ydCB0eXBlIHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuaW1wb3J0IHsgQ2hhcnRFQ2hhcnRzU2VydmljZSB9IGZyb20gJy4vZWNoYXJ0cy5zZXJ2aWNlJztcbmltcG9ydCB7XG4gIENoYXJ0RUNoYXJ0cyxcbiAgQ2hhcnRFQ2hhcnRzRXZlbnQsXG4gIENoYXJ0RUNoYXJ0c0V2ZW50VHlwZSxcbiAgQ2hhcnRFQ2hhcnRzT24sXG4gIENoYXJ0RUNoYXJ0c09wdGlvblxufSBmcm9tICcuL2VjaGFydHMudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjaGFydC1lY2hhcnRzLCBbY2hhcnQtZWNoYXJ0c10nLFxuICBleHBvcnRBczogJ2NoYXJ0RUNoYXJ0cycsXG4gIHRlbXBsYXRlOiBgXG4gICAgQGlmICghbG9hZGVkKSB7XG4gICAgICA8bnotc2tlbGV0b24gLz5cbiAgICB9XG4gICAgPGRpdiAjY29udGFpbmVyIFtzdHlsZS53aWR0aF09XCJfd2lkdGhcIiBbc3R5bGUuaGVpZ2h0XT1cIl9oZWlnaHRcIj48L2Rpdj5cbiAgYCxcbiAgaG9zdDoge1xuICAgICdbc3R5bGUuZGlzcGxheV0nOiBgJ2lubGluZS1ibG9jaydgLFxuICAgICdbc3R5bGUud2lkdGhdJzogYF93aWR0aGAsXG4gICAgJ1tzdHlsZS5oZWlnaHRdJzogYF9oZWlnaHRgXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBDaGFydEVDaGFydHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV93aWR0aDogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9oZWlnaHQ6IE51bWJlcklucHV0O1xuXG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicsIHsgc3RhdGljOiB0cnVlIH0pIHByaXZhdGUgbm9kZSE6IEVsZW1lbnRSZWY7XG4gIHByaXZhdGUgZGVzdHJveSQgPSBpbmplY3QoRGVzdHJveVJlZik7XG4gIHByaXZhdGUgX2NoYXJ0OiBDaGFydEVDaGFydHMgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBfdGhlbWU/OiBzdHJpbmcgfCBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB8IG51bGw7XG4gIHByaXZhdGUgX2luaXRPcHQ/OiB7XG4gICAgcmVuZGVyZXI/OiBOelNhZmVBbnk7XG4gICAgZGV2aWNlUGl4ZWxSYXRpbz86IG51bWJlcjtcbiAgICB3aWR0aD86IG51bWJlcjtcbiAgICBoZWlnaHQ/OiBudW1iZXI7XG4gICAgbG9jYWxlPzogTnpTYWZlQW55O1xuICB9O1xuICBwcml2YXRlIF9vcHRpb24hOiBDaGFydEVDaGFydHNPcHRpb247XG4gIF93aWR0aCA9ICcxMDAlJztcbiAgX2hlaWdodCA9ICc0MDBweCc7XG5cbiAgQElucHV0KClcbiAgc2V0IHdpZHRoKHZhbDogTnVtYmVySW5wdXQpIHtcbiAgICB0aGlzLl93aWR0aCA9IHR5cGVvZiB2YWwgPT09ICdudW1iZXInID8gYCR7dmFsfXB4YCA6IGAke3ZhbH1gO1xuICB9XG4gIEBJbnB1dCgpIHNldCBoZWlnaHQodmFsOiBOdW1iZXJJbnB1dCkge1xuICAgIHRoaXMuX2hlaWdodCA9IHR5cGVvZiB2YWwgPT09ICdudW1iZXInID8gYCR7dmFsfXB4YCA6IGAke3ZhbH1gO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCB0aGVtZSh2YWx1ZTogc3RyaW5nIHwgUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfCBudWxsIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdGhlbWUgPSB2YWx1ZTtcbiAgICBpZiAodGhpcy5fY2hhcnQpIHtcbiAgICAgIHRoaXMuaW5zdGFsbCgpO1xuICAgIH1cbiAgfVxuICBASW5wdXQoKVxuICBzZXQgaW5pdE9wdCh2YWx1ZTogTnpTYWZlQW55KSB7XG4gICAgdGhpcy5faW5pdE9wdCA9IHZhbHVlO1xuICAgIGlmICh0aGlzLl9jaGFydCkge1xuICAgICAgdGhpcy5pbnN0YWxsKCk7XG4gICAgfVxuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBvcHRpb24odmFsdWU6IENoYXJ0RUNoYXJ0c09wdGlvbikge1xuICAgIHRoaXMuX29wdGlvbiA9IHZhbHVlO1xuICAgIGlmICh0aGlzLl9jaGFydCkge1xuICAgICAgdGhpcy5zZXRPcHRpb24odmFsdWUsIHRydWUpO1xuICAgIH1cbiAgfVxuICBASW5wdXQoKSBvbjogQ2hhcnRFQ2hhcnRzT25bXSA9IFtdO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgZXZlbnRzID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEVDaGFydHNFdmVudD4oKTtcblxuICBnZXQgY2hhcnQoKTogQ2hhcnRFQ2hhcnRzIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuX2NoYXJ0O1xuICB9XG4gIGxvYWRlZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc3J2OiBDaGFydEVDaGFydHNTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtXG4gICkge1xuICAgIHRoaXMuc3J2Lm5vdGlmeVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRha2VVbnRpbERlc3Ryb3llZCgpLFxuICAgICAgICBmaWx0ZXIoKCkgPT4gIXRoaXMubG9hZGVkKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmxvYWQoKSk7XG5cbiAgICB0aGlzLnRoZW1lID0gc3J2LmNvZy5lY2hhcnRzVGhlbWU7XG4gIH1cblxuICBwcml2YXRlIGVtaXQodHlwZTogQ2hhcnRFQ2hhcnRzRXZlbnRUeXBlLCBvdGhlcj86IENoYXJ0RUNoYXJ0c0V2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5ldmVudHMuZW1pdCh7IHR5cGUsIGNoYXJ0OiB0aGlzLmNoYXJ0ISEsIC4uLm90aGVyIH0pO1xuICB9XG5cbiAgQFpvbmVPdXRzaWRlKClcbiAgcHJpdmF0ZSBsb2FkKCk6IHZvaWQge1xuICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICB0aGlzLmxvYWRlZCA9IHRydWU7XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gICAgdGhpcy5lbWl0KCdyZWFkeScpO1xuICAgIHRoaXMuaW5zdGFsbCgpO1xuICB9XG5cbiAgaW5zdGFsbCgpOiB0aGlzIHtcbiAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICBjb25zdCBjaGFydCA9ICh0aGlzLl9jaGFydCA9ICh3aW5kb3cgYXMgTnpTYWZlQW55KS5lY2hhcnRzLmluaXQoXG4gICAgICB0aGlzLm5vZGUubmF0aXZlRWxlbWVudCxcbiAgICAgIHRoaXMuX3RoZW1lLFxuICAgICAgdGhpcy5faW5pdE9wdFxuICAgICkpIGFzIENoYXJ0RUNoYXJ0cztcbiAgICB0aGlzLmVtaXQoJ2luaXQnKTtcbiAgICB0aGlzLnNldE9wdGlvbih0aGlzLl9vcHRpb24pO1xuICAgIC8vIG9uXG4gICAgdGhpcy5vbi5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaWYgKGl0ZW0ucXVlcnkgIT0gbnVsbCkge1xuICAgICAgICBjaGFydC5vbihpdGVtLmV2ZW50TmFtZSwgaXRlbS5xdWVyeSwgZXZlbnQgPT4gaXRlbS5oYW5kbGVyKHsgZXZlbnQsIGNoYXJ0IH0pKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoYXJ0Lm9uKGl0ZW0uZXZlbnROYW1lLCBldmVudCA9PiBpdGVtLmhhbmRsZXIoeyBldmVudCwgY2hhcnQgfSkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZGVzdHJveSgpOiB0aGlzIHtcbiAgICBpZiAodGhpcy5fY2hhcnQpIHtcbiAgICAgIHRoaXMuX2NoYXJ0LmRpc3Bvc2UoKTtcbiAgICAgIHRoaXMuZW1pdCgnZGVzdHJveScpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldE9wdGlvbihvcHRpb246IENoYXJ0RUNoYXJ0c09wdGlvbiwgbm90TWVyZ2U6IGJvb2xlYW4gPSBmYWxzZSwgbGF6eVVwZGF0ZTogYm9vbGVhbiA9IGZhbHNlKTogdGhpcyB7XG4gICAgaWYgKHRoaXMuX2NoYXJ0KSB7XG4gICAgICB0aGlzLl9jaGFydC5zZXRPcHRpb24ob3B0aW9uLCBub3RNZXJnZSwgbGF6eVVwZGF0ZSk7XG4gICAgICB0aGlzLmVtaXQoJ3NldC1vcHRpb24nLCB7IG9wdGlvbiB9IGFzIE56U2FmZUFueSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoKHdpbmRvdyBhcyBOelNhZmVBbnkpLmVjaGFydHMpIHtcbiAgICAgIHRoaXMubG9hZCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNydi5saWJMb2FkKCk7XG4gICAgfVxuXG4gICAgZnJvbUV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScpXG4gICAgICAucGlwZShcbiAgICAgICAgdGFrZVVudGlsRGVzdHJveWVkKHRoaXMuZGVzdHJveSQpLFxuICAgICAgICBmaWx0ZXIoKCkgPT4gISF0aGlzLl9jaGFydCksXG4gICAgICAgIGRlYm91bmNlVGltZSgyMDApXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuX2NoYXJ0ISEucmVzaXplKCkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5vbi5mb3JFYWNoKGl0ZW0gPT4gdGhpcy5fY2hhcnQ/Lm9mZihpdGVtLmV2ZW50TmFtZSkpO1xuICAgIHRoaXMuZGVzdHJveSgpO1xuICB9XG59XG4iXX0=