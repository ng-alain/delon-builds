import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { debounceTime, filter, takeUntil } from 'rxjs/operators';
import { ZoneOutside } from '@delon/util/decorator';
import * as i0 from "@angular/core";
import * as i1 from "./echarts.service";
import * as i2 from "@angular/cdk/platform";
import * as i3 from "ng-zorro-antd/skeleton";
import * as i4 from "@angular/common";
export class ChartEChartsComponent {
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
ChartEChartsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: ChartEChartsComponent, deps: [{ token: i1.ChartEChartsService }, { token: i0.ChangeDetectorRef }, { token: i0.NgZone }, { token: i2.Platform }], target: i0.ɵɵFactoryTarget.Component });
ChartEChartsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.1", type: ChartEChartsComponent, selector: "chart-echarts, [chart-echarts]", inputs: { width: "width", height: "height", theme: "theme", initOpt: "initOpt", option: "option", on: "on" }, outputs: { events: "events" }, host: { properties: { "style.display": "'inline-block'", "style.width": "_width", "style.height": "_height" } }, viewQueries: [{ propertyName: "node", first: true, predicate: ["container"], descendants: true, static: true }], exportAs: ["chartECharts"], ngImport: i0, template: `
    <nz-skeleton *ngIf="!loaded"></nz-skeleton>
    <div #container [style.width]="_width" [style.height]="_height"></div>
  `, isInline: true, components: [{ type: i3.NzSkeletonComponent, selector: "nz-skeleton", inputs: ["nzActive", "nzLoading", "nzRound", "nzTitle", "nzAvatar", "nzParagraph"], exportAs: ["nzSkeleton"] }], directives: [{ type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    ZoneOutside()
], ChartEChartsComponent.prototype, "load", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: ChartEChartsComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWNoYXJ0cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jaGFydC9jaGFydC1lY2hhcnRzL2VjaGFydHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQ0wsdUJBQXVCLEVBRXZCLFNBQVMsRUFFVCxZQUFZLEVBQ1osS0FBSyxFQUlMLE1BQU0sRUFDTixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWpFLE9BQU8sRUFBZSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7O0FBNEJqRSxNQUFNLE9BQU8scUJBQXFCO0lBdURoQyxZQUNVLEdBQXdCLEVBQ3hCLEdBQXNCLEVBQ3RCLE1BQWMsRUFDZCxRQUFrQjtRQUhsQixRQUFHLEdBQUgsR0FBRyxDQUFxQjtRQUN4QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN0QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQXREcEIsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFDL0IsV0FBTSxHQUF3QixJQUFJLENBQUM7UUFVM0MsV0FBTSxHQUFHLE1BQU0sQ0FBQztRQUNoQixZQUFPLEdBQUcsT0FBTyxDQUFDO1FBOEJULE9BQUUsR0FBcUIsRUFBRSxDQUFDO1FBQ2hCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBcUIsQ0FBQztRQUtsRSxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBUWIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNO2FBQ1osSUFBSSxDQUNILFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQ3hCLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FDM0I7YUFDQSxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFFaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQztJQUNwQyxDQUFDO0lBbERELElBQ0ksS0FBSyxDQUFDLEdBQWdCO1FBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxHQUFHLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO0lBQ2hFLENBQUM7SUFDRCxJQUFhLE1BQU0sQ0FBQyxHQUFnQjtRQUNsQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sR0FBRyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztJQUNqRSxDQUFDO0lBQ0QsSUFDSSxLQUFLLENBQUMsS0FBMEQ7UUFDbEUsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ2hCO0lBQ0gsQ0FBQztJQUNELElBQ0ksT0FBTyxDQUFDLEtBQWdCO1FBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNoQjtJQUNILENBQUM7SUFDRCxJQUNJLE1BQU0sQ0FBQyxLQUF5QjtRQUNsQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztTQUM3QjtJQUNILENBQUM7SUFJRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQW1CTyxJQUFJLENBQUMsSUFBMkIsRUFBRSxLQUF5QjtRQUNqRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQU8sRUFBRSxHQUFHLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUdPLElBQUk7UUFDVixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7WUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2YsTUFBTSxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFJLE1BQW9CLENBQUMsT0FBTyxDQUFDLElBQUksQ0FDN0QsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQ3ZCLElBQUksQ0FBQyxNQUFNLEVBQ1gsSUFBSSxDQUFDLFFBQVEsQ0FDZCxDQUFpQixDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBUSxDQUFDLENBQUM7UUFDOUIsS0FBSztRQUNMLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3JCLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLEVBQUU7Z0JBQ3RCLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDL0U7aUJBQU07Z0JBQ0wsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDbkU7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELE9BQU87UUFDTCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDdEI7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxTQUFTLENBQUMsTUFBMEIsRUFBRSxXQUFvQixLQUFLLEVBQUUsYUFBc0IsS0FBSztRQUMxRixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQ3BELElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQUUsTUFBTSxFQUFlLENBQUMsQ0FBQztTQUNsRDtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDNUIsT0FBTztTQUNSO1FBQ0QsSUFBSyxNQUFvQixDQUFDLE9BQU8sRUFBRTtZQUNqQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDYjthQUFNO1lBQ0wsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNwQjtRQUVELFNBQVMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDO2FBQ3hCLElBQUksQ0FDSCxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUN4QixNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFDM0IsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUNsQjthQUNBLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQzs7a0hBakpVLHFCQUFxQjtzR0FBckIscUJBQXFCLGlkQWJ0Qjs7O0dBR1Q7QUFzRkQ7SUFEQyxXQUFXLEVBQUU7aURBUWI7MkZBbkZVLHFCQUFxQjtrQkFoQmpDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGdDQUFnQztvQkFDMUMsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFFBQVEsRUFBRTs7O0dBR1Q7b0JBQ0QsSUFBSSxFQUFFO3dCQUNKLGlCQUFpQixFQUFFLGdCQUFnQjt3QkFDbkMsZUFBZSxFQUFFLFFBQVE7d0JBQ3pCLGdCQUFnQixFQUFFLFNBQVM7cUJBQzVCO29CQUNELG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDdEM7c0xBS21ELElBQUk7c0JBQXJELFNBQVM7dUJBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtnQkFnQnBDLEtBQUs7c0JBRFIsS0FBSztnQkFJTyxNQUFNO3NCQUFsQixLQUFLO2dCQUlGLEtBQUs7c0JBRFIsS0FBSztnQkFRRixPQUFPO3NCQURWLEtBQUs7Z0JBUUYsTUFBTTtzQkFEVCxLQUFLO2dCQU9HLEVBQUU7c0JBQVYsS0FBSztnQkFDYSxNQUFNO3NCQUF4QixNQUFNO2dCQTRCQyxJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZyb21FdmVudCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBmaWx0ZXIsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgTnVtYmVySW5wdXQsIFpvbmVPdXRzaWRlIH0gZnJvbSAnQGRlbG9uL3V0aWwvZGVjb3JhdG9yJztcbmltcG9ydCB0eXBlIHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuaW1wb3J0IHsgQ2hhcnRFQ2hhcnRzU2VydmljZSB9IGZyb20gJy4vZWNoYXJ0cy5zZXJ2aWNlJztcbmltcG9ydCB7XG4gIENoYXJ0RUNoYXJ0cyxcbiAgQ2hhcnRFQ2hhcnRzRXZlbnQsXG4gIENoYXJ0RUNoYXJ0c0V2ZW50VHlwZSxcbiAgQ2hhcnRFQ2hhcnRzT24sXG4gIENoYXJ0RUNoYXJ0c09wdGlvblxufSBmcm9tICcuL2VjaGFydHMudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjaGFydC1lY2hhcnRzLCBbY2hhcnQtZWNoYXJ0c10nLFxuICBleHBvcnRBczogJ2NoYXJ0RUNoYXJ0cycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG56LXNrZWxldG9uICpuZ0lmPVwiIWxvYWRlZFwiPjwvbnotc2tlbGV0b24+XG4gICAgPGRpdiAjY29udGFpbmVyIFtzdHlsZS53aWR0aF09XCJfd2lkdGhcIiBbc3R5bGUuaGVpZ2h0XT1cIl9oZWlnaHRcIj48L2Rpdj5cbiAgYCxcbiAgaG9zdDoge1xuICAgICdbc3R5bGUuZGlzcGxheV0nOiBgJ2lubGluZS1ibG9jaydgLFxuICAgICdbc3R5bGUud2lkdGhdJzogYF93aWR0aGAsXG4gICAgJ1tzdHlsZS5oZWlnaHRdJzogYF9oZWlnaHRgXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBDaGFydEVDaGFydHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV93aWR0aDogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9oZWlnaHQ6IE51bWJlcklucHV0O1xuXG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicsIHsgc3RhdGljOiB0cnVlIH0pIHByaXZhdGUgbm9kZTogRWxlbWVudFJlZjtcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHByaXZhdGUgX2NoYXJ0OiBDaGFydEVDaGFydHMgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBfdGhlbWU/OiBzdHJpbmcgfCBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB8IG51bGw7XG4gIHByaXZhdGUgX2luaXRPcHQ/OiB7XG4gICAgcmVuZGVyZXI/OiBOelNhZmVBbnk7XG4gICAgZGV2aWNlUGl4ZWxSYXRpbz86IG51bWJlcjtcbiAgICB3aWR0aD86IG51bWJlcjtcbiAgICBoZWlnaHQ/OiBudW1iZXI7XG4gICAgbG9jYWxlPzogTnpTYWZlQW55O1xuICB9O1xuICBwcml2YXRlIF9vcHRpb246IENoYXJ0RUNoYXJ0c09wdGlvbjtcbiAgX3dpZHRoID0gJzEwMCUnO1xuICBfaGVpZ2h0ID0gJzQwMHB4JztcblxuICBASW5wdXQoKVxuICBzZXQgd2lkdGgodmFsOiBOdW1iZXJJbnB1dCkge1xuICAgIHRoaXMuX3dpZHRoID0gdHlwZW9mIHZhbCA9PT0gJ251bWJlcicgPyBgJHt2YWx9cHhgIDogYCR7dmFsfWA7XG4gIH1cbiAgQElucHV0KCkgc2V0IGhlaWdodCh2YWw6IE51bWJlcklucHV0KSB7XG4gICAgdGhpcy5faGVpZ2h0ID0gdHlwZW9mIHZhbCA9PT0gJ251bWJlcicgPyBgJHt2YWx9cHhgIDogYCR7dmFsfWA7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IHRoZW1lKHZhbHVlOiBzdHJpbmcgfCBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB8IG51bGwgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl90aGVtZSA9IHZhbHVlO1xuICAgIGlmICh0aGlzLl9jaGFydCkge1xuICAgICAgdGhpcy5pbnN0YWxsKCk7XG4gICAgfVxuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBpbml0T3B0KHZhbHVlOiBOelNhZmVBbnkpIHtcbiAgICB0aGlzLl9pbml0T3B0ID0gdmFsdWU7XG4gICAgaWYgKHRoaXMuX2NoYXJ0KSB7XG4gICAgICB0aGlzLmluc3RhbGwoKTtcbiAgICB9XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IG9wdGlvbih2YWx1ZTogQ2hhcnRFQ2hhcnRzT3B0aW9uKSB7XG4gICAgdGhpcy5fb3B0aW9uID0gdmFsdWU7XG4gICAgaWYgKHRoaXMuX2NoYXJ0KSB7XG4gICAgICB0aGlzLnNldE9wdGlvbih2YWx1ZSwgdHJ1ZSk7XG4gICAgfVxuICB9XG4gIEBJbnB1dCgpIG9uOiBDaGFydEVDaGFydHNPbltdID0gW107XG4gIEBPdXRwdXQoKSByZWFkb25seSBldmVudHMgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RUNoYXJ0c0V2ZW50PigpO1xuXG4gIGdldCBjaGFydCgpOiBDaGFydEVDaGFydHMgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5fY2hhcnQ7XG4gIH1cbiAgbG9hZGVkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzcnY6IENoYXJ0RUNoYXJ0c1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm1cbiAgKSB7XG4gICAgdGhpcy5zcnYubm90aWZ5XG4gICAgICAucGlwZShcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpLFxuICAgICAgICBmaWx0ZXIoKCkgPT4gIXRoaXMubG9hZGVkKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmxvYWQoKSk7XG5cbiAgICB0aGlzLnRoZW1lID0gc3J2LmNvZy5lY2hhcnRzVGhlbWU7XG4gIH1cblxuICBwcml2YXRlIGVtaXQodHlwZTogQ2hhcnRFQ2hhcnRzRXZlbnRUeXBlLCBvdGhlcj86IENoYXJ0RUNoYXJ0c0V2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5ldmVudHMuZW1pdCh7IHR5cGUsIGNoYXJ0OiB0aGlzLmNoYXJ0ISEsIC4uLm90aGVyIH0pO1xuICB9XG5cbiAgQFpvbmVPdXRzaWRlKClcbiAgcHJpdmF0ZSBsb2FkKCk6IHZvaWQge1xuICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICB0aGlzLmxvYWRlZCA9IHRydWU7XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gICAgdGhpcy5lbWl0KCdyZWFkeScpO1xuICAgIHRoaXMuaW5zdGFsbCgpO1xuICB9XG5cbiAgaW5zdGFsbCgpOiB0aGlzIHtcbiAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICBjb25zdCBjaGFydCA9ICh0aGlzLl9jaGFydCA9ICh3aW5kb3cgYXMgTnpTYWZlQW55KS5lY2hhcnRzLmluaXQoXG4gICAgICB0aGlzLm5vZGUubmF0aXZlRWxlbWVudCxcbiAgICAgIHRoaXMuX3RoZW1lLFxuICAgICAgdGhpcy5faW5pdE9wdFxuICAgICkpIGFzIENoYXJ0RUNoYXJ0cztcbiAgICB0aGlzLmVtaXQoJ2luaXQnKTtcbiAgICB0aGlzLnNldE9wdGlvbih0aGlzLl9vcHRpb24hKTtcbiAgICAvLyBvblxuICAgIHRoaXMub24uZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGlmIChpdGVtLnF1ZXJ5ICE9IG51bGwpIHtcbiAgICAgICAgY2hhcnQub24oaXRlbS5ldmVudE5hbWUsIGl0ZW0ucXVlcnksIGV2ZW50ID0+IGl0ZW0uaGFuZGxlcih7IGV2ZW50LCBjaGFydCB9KSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGFydC5vbihpdGVtLmV2ZW50TmFtZSwgZXZlbnQgPT4gaXRlbS5oYW5kbGVyKHsgZXZlbnQsIGNoYXJ0IH0pKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGRlc3Ryb3koKTogdGhpcyB7XG4gICAgaWYgKHRoaXMuX2NoYXJ0KSB7XG4gICAgICB0aGlzLl9jaGFydC5kaXNwb3NlKCk7XG4gICAgICB0aGlzLmVtaXQoJ2Rlc3Ryb3knKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRPcHRpb24ob3B0aW9uOiBDaGFydEVDaGFydHNPcHRpb24sIG5vdE1lcmdlOiBib29sZWFuID0gZmFsc2UsIGxhenlVcGRhdGU6IGJvb2xlYW4gPSBmYWxzZSk6IHRoaXMge1xuICAgIGlmICh0aGlzLl9jaGFydCkge1xuICAgICAgdGhpcy5fY2hhcnQuc2V0T3B0aW9uKG9wdGlvbiwgbm90TWVyZ2UsIGxhenlVcGRhdGUpO1xuICAgICAgdGhpcy5lbWl0KCdzZXQtb3B0aW9uJywgeyBvcHRpb24gfSBhcyBOelNhZmVBbnkpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCh3aW5kb3cgYXMgTnpTYWZlQW55KS5lY2hhcnRzKSB7XG4gICAgICB0aGlzLmxvYWQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zcnYubGliTG9hZCgpO1xuICAgIH1cblxuICAgIGZyb21FdmVudCh3aW5kb3csICdyZXNpemUnKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcbiAgICAgICAgZmlsdGVyKCgpID0+ICEhdGhpcy5fY2hhcnQpLFxuICAgICAgICBkZWJvdW5jZVRpbWUoMjAwKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLl9jaGFydCEhLnJlc2l6ZSgpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMub24uZm9yRWFjaChpdGVtID0+IHRoaXMuX2NoYXJ0Py5vZmYoaXRlbS5ldmVudE5hbWUpKTtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5kZXN0cm95KCk7XG4gIH1cbn1cbiJdfQ==