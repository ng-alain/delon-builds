import { __decorate } from "tslib";
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, EventEmitter, Input, NgZone, Output, ViewChild, ViewEncapsulation, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { fromEvent, debounceTime, filter } from 'rxjs';
import { ZoneOutside } from '@delon/util/decorator';
import { NzSkeletonComponent } from 'ng-zorro-antd/skeleton';
import { ChartEChartsService } from './echarts.service';
import * as i0 from "@angular/core";
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
    constructor() {
        this.srv = inject(ChartEChartsService);
        this.cdr = inject(ChangeDetectorRef);
        this.ngZone = inject(NgZone);
        this.platform = inject(Platform);
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
        this.theme = this.srv.cog.echartsTheme;
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.5", ngImport: i0, type: ChartEChartsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.0.5", type: ChartEChartsComponent, isStandalone: true, selector: "chart-echarts, [chart-echarts]", inputs: { width: "width", height: "height", theme: "theme", initOpt: "initOpt", option: "option", on: "on" }, outputs: { events: "events" }, host: { properties: { "style.display": "'inline-block'", "style.width": "_width", "style.height": "_height" } }, viewQueries: [{ propertyName: "node", first: true, predicate: ["container"], descendants: true, static: true }], exportAs: ["chartECharts"], ngImport: i0, template: `
    @if (!loaded) {
      <nz-skeleton />
    }
    <div #container [style.width]="_width" [style.height]="_height"></div>
  `, isInline: true, dependencies: [{ kind: "component", type: NzSkeletonComponent, selector: "nz-skeleton", inputs: ["nzActive", "nzLoading", "nzRound", "nzTitle", "nzAvatar", "nzParagraph"], exportAs: ["nzSkeleton"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
__decorate([
    ZoneOutside()
], ChartEChartsComponent.prototype, "load", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.5", ngImport: i0, type: ChartEChartsComponent, decorators: [{
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
                    encapsulation: ViewEncapsulation.None,
                    standalone: true,
                    imports: [NzSkeletonComponent]
                }]
        }], ctorParameters: () => [], propDecorators: { node: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWNoYXJ0cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jaGFydC9jaGFydC1lY2hhcnRzL2VjaGFydHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFFVixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFHTixNQUFNLEVBQ04sU0FBUyxFQUNULGlCQUFpQixFQUNqQixNQUFNLEVBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDaEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXZELE9BQU8sRUFBZSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVqRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUU3RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7QUE2QnhELE1BQU0sT0FBTyxxQkFBcUI7SUF3QmhDLElBQ0ksS0FBSyxDQUFDLEdBQWdCO1FBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxHQUFHLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO0lBQ2hFLENBQUM7SUFDRCxJQUFhLE1BQU0sQ0FBQyxHQUFnQjtRQUNsQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sR0FBRyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUs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d0JBQ0osaUJBQWlCLEVBQUUsZ0JBQWdCO3dCQUNuQyxlQUFlLEVBQUUsUUFBUTt3QkFDekIsZ0JBQWdCLEVBQUUsU0FBUztxQkFDNUI7b0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxVQUFVLEVBQUUsSUFBSTtvQkFDaEIsT0FBTyxFQUFFLENBQUMsbUJBQW1CLENBQUM7aUJBQy9CO3dEQVVtRCxJQUFJO3NCQUFyRCxTQUFTO3VCQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Z0JBZ0JwQyxLQUFLO3NCQURSLEtBQUs7Z0JBSU8sTUFBTTtzQkFBbEIsS0FBSztnQkFJRixLQUFLO3NCQURSLEtBQUs7Z0JBUUYsT0FBTztzQkFEVixLQUFLO2dCQVFGLE1BQU07c0JBRFQsS0FBSztnQkFPRyxFQUFFO3NCQUFWLEtBQUs7Z0JBQ2EsTUFBTTtzQkFBeEIsTUFBTTtnQkF1QkMsSUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBEZXN0cm95UmVmLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIGluamVjdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRha2VVbnRpbERlc3Ryb3llZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvcnhqcy1pbnRlcm9wJztcbmltcG9ydCB7IGZyb21FdmVudCwgZGVib3VuY2VUaW1lLCBmaWx0ZXIgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTnVtYmVySW5wdXQsIFpvbmVPdXRzaWRlIH0gZnJvbSAnQGRlbG9uL3V0aWwvZGVjb3JhdG9yJztcbmltcG9ydCB0eXBlIHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IE56U2tlbGV0b25Db21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL3NrZWxldG9uJztcblxuaW1wb3J0IHsgQ2hhcnRFQ2hhcnRzU2VydmljZSB9IGZyb20gJy4vZWNoYXJ0cy5zZXJ2aWNlJztcbmltcG9ydCB7XG4gIENoYXJ0RUNoYXJ0cyxcbiAgQ2hhcnRFQ2hhcnRzRXZlbnQsXG4gIENoYXJ0RUNoYXJ0c0V2ZW50VHlwZSxcbiAgQ2hhcnRFQ2hhcnRzT24sXG4gIENoYXJ0RUNoYXJ0c09wdGlvblxufSBmcm9tICcuL2VjaGFydHMudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjaGFydC1lY2hhcnRzLCBbY2hhcnQtZWNoYXJ0c10nLFxuICBleHBvcnRBczogJ2NoYXJ0RUNoYXJ0cycsXG4gIHRlbXBsYXRlOiBgXG4gICAgQGlmICghbG9hZGVkKSB7XG4gICAgICA8bnotc2tlbGV0b24gLz5cbiAgICB9XG4gICAgPGRpdiAjY29udGFpbmVyIFtzdHlsZS53aWR0aF09XCJfd2lkdGhcIiBbc3R5bGUuaGVpZ2h0XT1cIl9oZWlnaHRcIj48L2Rpdj5cbiAgYCxcbiAgaG9zdDoge1xuICAgICdbc3R5bGUuZGlzcGxheV0nOiBgJ2lubGluZS1ibG9jaydgLFxuICAgICdbc3R5bGUud2lkdGhdJzogYF93aWR0aGAsXG4gICAgJ1tzdHlsZS5oZWlnaHRdJzogYF9oZWlnaHRgXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW056U2tlbGV0b25Db21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIENoYXJ0RUNoYXJ0c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3dpZHRoOiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2hlaWdodDogTnVtYmVySW5wdXQ7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBzcnYgPSBpbmplY3QoQ2hhcnRFQ2hhcnRzU2VydmljZSk7XG4gIHByaXZhdGUgcmVhZG9ubHkgY2RyID0gaW5qZWN0KENoYW5nZURldGVjdG9yUmVmKTtcbiAgcHJpdmF0ZSByZWFkb25seSBuZ1pvbmUgPSBpbmplY3QoTmdab25lKTtcbiAgcHJpdmF0ZSByZWFkb25seSBwbGF0Zm9ybSA9IGluamVjdChQbGF0Zm9ybSk7XG5cbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJywgeyBzdGF0aWM6IHRydWUgfSkgcHJpdmF0ZSBub2RlITogRWxlbWVudFJlZjtcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IGluamVjdChEZXN0cm95UmVmKTtcbiAgcHJpdmF0ZSBfY2hhcnQ6IENoYXJ0RUNoYXJ0cyB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIF90aGVtZT86IHN0cmluZyB8IFJlY29yZDxzdHJpbmcsIHVua25vd24+IHwgbnVsbDtcbiAgcHJpdmF0ZSBfaW5pdE9wdD86IHtcbiAgICByZW5kZXJlcj86IE56U2FmZUFueTtcbiAgICBkZXZpY2VQaXhlbFJhdGlvPzogbnVtYmVyO1xuICAgIHdpZHRoPzogbnVtYmVyO1xuICAgIGhlaWdodD86IG51bWJlcjtcbiAgICBsb2NhbGU/OiBOelNhZmVBbnk7XG4gIH07XG4gIHByaXZhdGUgX29wdGlvbiE6IENoYXJ0RUNoYXJ0c09wdGlvbjtcbiAgX3dpZHRoID0gJzEwMCUnO1xuICBfaGVpZ2h0ID0gJzQwMHB4JztcblxuICBASW5wdXQoKVxuICBzZXQgd2lkdGgodmFsOiBOdW1iZXJJbnB1dCkge1xuICAgIHRoaXMuX3dpZHRoID0gdHlwZW9mIHZhbCA9PT0gJ251bWJlcicgPyBgJHt2YWx9cHhgIDogYCR7dmFsfWA7XG4gIH1cbiAgQElucHV0KCkgc2V0IGhlaWdodCh2YWw6IE51bWJlcklucHV0KSB7XG4gICAgdGhpcy5faGVpZ2h0ID0gdHlwZW9mIHZhbCA9PT0gJ251bWJlcicgPyBgJHt2YWx9cHhgIDogYCR7dmFsfWA7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IHRoZW1lKHZhbHVlOiBzdHJpbmcgfCBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB8IG51bGwgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl90aGVtZSA9IHZhbHVlO1xuICAgIGlmICh0aGlzLl9jaGFydCkge1xuICAgICAgdGhpcy5pbnN0YWxsKCk7XG4gICAgfVxuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBpbml0T3B0KHZhbHVlOiBOelNhZmVBbnkpIHtcbiAgICB0aGlzLl9pbml0T3B0ID0gdmFsdWU7XG4gICAgaWYgKHRoaXMuX2NoYXJ0KSB7XG4gICAgICB0aGlzLmluc3RhbGwoKTtcbiAgICB9XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IG9wdGlvbih2YWx1ZTogQ2hhcnRFQ2hhcnRzT3B0aW9uKSB7XG4gICAgdGhpcy5fb3B0aW9uID0gdmFsdWU7XG4gICAgaWYgKHRoaXMuX2NoYXJ0KSB7XG4gICAgICB0aGlzLnNldE9wdGlvbih2YWx1ZSwgdHJ1ZSk7XG4gICAgfVxuICB9XG4gIEBJbnB1dCgpIG9uOiBDaGFydEVDaGFydHNPbltdID0gW107XG4gIEBPdXRwdXQoKSByZWFkb25seSBldmVudHMgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RUNoYXJ0c0V2ZW50PigpO1xuXG4gIGdldCBjaGFydCgpOiBDaGFydEVDaGFydHMgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5fY2hhcnQ7XG4gIH1cbiAgbG9hZGVkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5zcnYubm90aWZ5XG4gICAgICAucGlwZShcbiAgICAgICAgdGFrZVVudGlsRGVzdHJveWVkKCksXG4gICAgICAgIGZpbHRlcigoKSA9PiAhdGhpcy5sb2FkZWQpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMubG9hZCgpKTtcblxuICAgIHRoaXMudGhlbWUgPSB0aGlzLnNydi5jb2cuZWNoYXJ0c1RoZW1lO1xuICB9XG5cbiAgcHJpdmF0ZSBlbWl0KHR5cGU6IENoYXJ0RUNoYXJ0c0V2ZW50VHlwZSwgb3RoZXI/OiBDaGFydEVDaGFydHNFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuZXZlbnRzLmVtaXQoeyB0eXBlLCBjaGFydDogdGhpcy5jaGFydCEhLCAuLi5vdGhlciB9KTtcbiAgfVxuXG4gIEBab25lT3V0c2lkZSgpXG4gIHByaXZhdGUgbG9hZCgpOiB2b2lkIHtcbiAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgdGhpcy5sb2FkZWQgPSB0cnVlO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuICAgIHRoaXMuZW1pdCgncmVhZHknKTtcbiAgICB0aGlzLmluc3RhbGwoKTtcbiAgfVxuXG4gIGluc3RhbGwoKTogdGhpcyB7XG4gICAgdGhpcy5kZXN0cm95KCk7XG4gICAgY29uc3QgY2hhcnQgPSAodGhpcy5fY2hhcnQgPSAod2luZG93IGFzIE56U2FmZUFueSkuZWNoYXJ0cy5pbml0KFxuICAgICAgdGhpcy5ub2RlLm5hdGl2ZUVsZW1lbnQsXG4gICAgICB0aGlzLl90aGVtZSxcbiAgICAgIHRoaXMuX2luaXRPcHRcbiAgICApKSBhcyBDaGFydEVDaGFydHM7XG4gICAgdGhpcy5lbWl0KCdpbml0Jyk7XG4gICAgdGhpcy5zZXRPcHRpb24odGhpcy5fb3B0aW9uKTtcbiAgICAvLyBvblxuICAgIHRoaXMub24uZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGlmIChpdGVtLnF1ZXJ5ICE9IG51bGwpIHtcbiAgICAgICAgY2hhcnQub24oaXRlbS5ldmVudE5hbWUsIGl0ZW0ucXVlcnksIGV2ZW50ID0+IGl0ZW0uaGFuZGxlcih7IGV2ZW50LCBjaGFydCB9KSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGFydC5vbihpdGVtLmV2ZW50TmFtZSwgZXZlbnQgPT4gaXRlbS5oYW5kbGVyKHsgZXZlbnQsIGNoYXJ0IH0pKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGRlc3Ryb3koKTogdGhpcyB7XG4gICAgaWYgKHRoaXMuX2NoYXJ0KSB7XG4gICAgICB0aGlzLl9jaGFydC5kaXNwb3NlKCk7XG4gICAgICB0aGlzLmVtaXQoJ2Rlc3Ryb3knKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRPcHRpb24ob3B0aW9uOiBDaGFydEVDaGFydHNPcHRpb24sIG5vdE1lcmdlOiBib29sZWFuID0gZmFsc2UsIGxhenlVcGRhdGU6IGJvb2xlYW4gPSBmYWxzZSk6IHRoaXMge1xuICAgIGlmICh0aGlzLl9jaGFydCkge1xuICAgICAgdGhpcy5fY2hhcnQuc2V0T3B0aW9uKG9wdGlvbiwgbm90TWVyZ2UsIGxhenlVcGRhdGUpO1xuICAgICAgdGhpcy5lbWl0KCdzZXQtb3B0aW9uJywgeyBvcHRpb24gfSBhcyBOelNhZmVBbnkpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCh3aW5kb3cgYXMgTnpTYWZlQW55KS5lY2hhcnRzKSB7XG4gICAgICB0aGlzLmxvYWQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zcnYubGliTG9hZCgpO1xuICAgIH1cblxuICAgIGZyb21FdmVudCh3aW5kb3csICdyZXNpemUnKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRha2VVbnRpbERlc3Ryb3llZCh0aGlzLmRlc3Ryb3kkKSxcbiAgICAgICAgZmlsdGVyKCgpID0+ICEhdGhpcy5fY2hhcnQpLFxuICAgICAgICBkZWJvdW5jZVRpbWUoMjAwKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLl9jaGFydCEhLnJlc2l6ZSgpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMub24uZm9yRWFjaChpdGVtID0+IHRoaXMuX2NoYXJ0Py5vZmYoaXRlbS5ldmVudE5hbWUpKTtcbiAgICB0aGlzLmRlc3Ryb3koKTtcbiAgfVxufVxuIl19