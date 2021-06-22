import { __decorate, __metadata } from "tslib";
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, NgZone, Output, ViewChild, ViewEncapsulation, } from '@angular/core';
import { ZoneOutside } from '@delon/util/decorator';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { ChartEChartsService } from './echarts.service';
export class ChartEChartsComponent {
    constructor(srv, cdr, ngZone, platform) {
        this.srv = srv;
        this.cdr = cdr;
        this.ngZone = ngZone;
        this.platform = platform;
        this.destroy$ = new Subject();
        this._width = '100%';
        this._height = '400px';
        this.events = new EventEmitter();
        this.loaded = false;
        this.srv.notify
            .pipe(takeUntil(this.destroy$), filter(() => !this.loaded))
            .subscribe(() => this.load());
        this.theme = srv.cog.echartsTheme;
    }
    set width(val) {
        this._width = typeof val === 'number' ? val + 'px' : `${val}`;
    }
    set height(val) {
        this._height = typeof val === 'number' ? val + 'px' : `${val}`;
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
        this.events.emit(Object.assign({ type, chart: this.chart }, other));
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
        this._chart = window.echarts.init(this.node.nativeElement, this._theme, this._initOpt);
        this.emit('init');
        this.setOption(this._option);
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
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this.destroy();
    }
}
ChartEChartsComponent.decorators = [
    { type: Component, args: [{
                selector: 'chart-echarts, [chart-echarts]',
                exportAs: 'chartECharts',
                template: `
    <nz-skeleton *ngIf="!loaded"></nz-skeleton>
    <div #container [style.width]="_width" [style.height]="_height"></div>
  `,
                host: {
                    '[style.display]': `'inline-block'`,
                    '[style.width]': `_width`,
                    '[style.height]': `_height`,
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            },] }
];
/** @nocollapse */
ChartEChartsComponent.ctorParameters = () => [
    { type: ChartEChartsService },
    { type: ChangeDetectorRef },
    { type: NgZone },
    { type: Platform }
];
ChartEChartsComponent.propDecorators = {
    node: [{ type: ViewChild, args: ['container', { static: true },] }],
    width: [{ type: Input }],
    height: [{ type: Input }],
    theme: [{ type: Input }],
    initOpt: [{ type: Input }],
    option: [{ type: Input }],
    events: [{ type: Output }]
};
__decorate([
    ZoneOutside(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ChartEChartsComponent.prototype, "load", null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWNoYXJ0cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jaGFydC9jaGFydC1lY2hhcnRzL2VjaGFydHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFHTixNQUFNLEVBQ04sU0FBUyxFQUNULGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQWUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBbUJ4RCxNQUFNLE9BQU8scUJBQXFCO0lBc0RoQyxZQUFvQixHQUF3QixFQUFVLEdBQXNCLEVBQVUsTUFBYyxFQUFVLFFBQWtCO1FBQTVHLFFBQUcsR0FBSCxHQUFHLENBQXFCO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQWpEeEgsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFXdkMsV0FBTSxHQUFHLE1BQU0sQ0FBQztRQUNoQixZQUFPLEdBQUcsT0FBTyxDQUFDO1FBOEJSLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBcUIsQ0FBQztRQUt6RCxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBR2IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNO2FBQ1osSUFBSSxDQUNI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QUFtQjtZQWYxQixpQkFBaUI7WUFLakIsTUFBTTtZQVJDLFFBQVE7OzttQkF5Q2QsU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7b0JBZXZDLEtBQUs7cUJBSUwsS0FBSztvQkFHTCxLQUFLO3NCQU9MLEtBQUs7cUJBT0wsS0FBSztxQkFPTCxNQUFNOztBQXVCUDtJQURDLFdBQVcsRUFBRTs7OztpREFRYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnVtYmVySW5wdXQsIFpvbmVPdXRzaWRlIH0gZnJvbSAnQGRlbG9uL3V0aWwvZGVjb3JhdG9yJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ2hhcnRFQ2hhcnRzU2VydmljZSB9IGZyb20gJy4vZWNoYXJ0cy5zZXJ2aWNlJztcbmltcG9ydCB7IENoYXJ0RUNoYXJ0cywgQ2hhcnRFQ2hhcnRzRXZlbnQsIENoYXJ0RUNoYXJ0c0V2ZW50VHlwZSwgQ2hhcnRFQ2hhcnRzT3B0aW9uIH0gZnJvbSAnLi9lY2hhcnRzLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2hhcnQtZWNoYXJ0cywgW2NoYXJ0LWVjaGFydHNdJyxcbiAgZXhwb3J0QXM6ICdjaGFydEVDaGFydHMnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuei1za2VsZXRvbiAqbmdJZj1cIiFsb2FkZWRcIj48L256LXNrZWxldG9uPlxuICAgIDxkaXYgI2NvbnRhaW5lciBbc3R5bGUud2lkdGhdPVwiX3dpZHRoXCIgW3N0eWxlLmhlaWdodF09XCJfaGVpZ2h0XCI+PC9kaXY+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnW3N0eWxlLmRpc3BsYXldJzogYCdpbmxpbmUtYmxvY2snYCxcbiAgICAnW3N0eWxlLndpZHRoXSc6IGBfd2lkdGhgLFxuICAgICdbc3R5bGUuaGVpZ2h0XSc6IGBfaGVpZ2h0YCxcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBDaGFydEVDaGFydHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV93aWR0aDogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9oZWlnaHQ6IE51bWJlcklucHV0O1xuXG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicsIHsgc3RhdGljOiB0cnVlIH0pIHByaXZhdGUgbm9kZTogRWxlbWVudFJlZjtcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHByaXZhdGUgX2NoYXJ0OiBDaGFydEVDaGFydHM7XG4gIHByaXZhdGUgX3RoZW1lPzogc3RyaW5nIHwgb2JqZWN0IHwgbnVsbDtcbiAgcHJpdmF0ZSBfaW5pdE9wdD86IHtcbiAgICByZW5kZXJlcj86IGFueTtcbiAgICBkZXZpY2VQaXhlbFJhdGlvPzogbnVtYmVyO1xuICAgIHdpZHRoPzogbnVtYmVyO1xuICAgIGhlaWdodD86IG51bWJlcjtcbiAgICBsb2NhbGU/OiBhbnk7XG4gIH07XG4gIHByaXZhdGUgX29wdGlvbjogQ2hhcnRFQ2hhcnRzT3B0aW9uO1xuICBfd2lkdGggPSAnMTAwJSc7XG4gIF9oZWlnaHQgPSAnNDAwcHgnO1xuXG4gIEBJbnB1dCgpXG4gIHNldCB3aWR0aCh2YWw6IE51bWJlcklucHV0KSB7XG4gICAgdGhpcy5fd2lkdGggPSB0eXBlb2YgdmFsID09PSAnbnVtYmVyJyA/IHZhbCArICdweCcgOiBgJHt2YWx9YDtcbiAgfVxuICBASW5wdXQoKSBzZXQgaGVpZ2h0KHZhbDogTnVtYmVySW5wdXQpIHtcbiAgICB0aGlzLl9oZWlnaHQgPSB0eXBlb2YgdmFsID09PSAnbnVtYmVyJyA/IHZhbCArICdweCcgOiBgJHt2YWx9YDtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgdGhlbWUodmFsdWU6IHN0cmluZyB8IG9iamVjdCB8IG51bGwgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl90aGVtZSA9IHZhbHVlO1xuICAgIGlmICh0aGlzLl9jaGFydCkge1xuICAgICAgdGhpcy5pbnN0YWxsKCk7XG4gICAgfVxuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBpbml0T3B0KHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl9pbml0T3B0ID0gdmFsdWU7XG4gICAgaWYgKHRoaXMuX2NoYXJ0KSB7XG4gICAgICB0aGlzLmluc3RhbGwoKTtcbiAgICB9XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IG9wdGlvbih2YWx1ZTogQ2hhcnRFQ2hhcnRzT3B0aW9uKSB7XG4gICAgdGhpcy5fb3B0aW9uID0gdmFsdWU7XG4gICAgaWYgKHRoaXMuX2NoYXJ0KSB7XG4gICAgICB0aGlzLnNldE9wdGlvbih2YWx1ZSwgdHJ1ZSk7XG4gICAgfVxuICB9XG4gIEBPdXRwdXQoKSBldmVudHMgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RUNoYXJ0c0V2ZW50PigpO1xuXG4gIGdldCBjaGFydCgpOiBDaGFydEVDaGFydHMge1xuICAgIHJldHVybiB0aGlzLl9jaGFydDtcbiAgfVxuICBsb2FkZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNydjogQ2hhcnRFQ2hhcnRzU2VydmljZSwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIG5nWm9uZTogTmdab25lLCBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSkge1xuICAgIHRoaXMuc3J2Lm5vdGlmeVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcbiAgICAgICAgZmlsdGVyKCgpID0+ICF0aGlzLmxvYWRlZCksXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMubG9hZCgpKTtcblxuICAgIHRoaXMudGhlbWUgPSBzcnYuY29nLmVjaGFydHNUaGVtZTtcbiAgfVxuXG4gIHByaXZhdGUgZW1pdCh0eXBlOiBDaGFydEVDaGFydHNFdmVudFR5cGUsIG90aGVyPzogQ2hhcnRFQ2hhcnRzRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLmV2ZW50cy5lbWl0KHsgdHlwZSwgY2hhcnQ6IHRoaXMuY2hhcnQsIC4uLm90aGVyIH0pO1xuICB9XG5cbiAgQFpvbmVPdXRzaWRlKClcbiAgcHJpdmF0ZSBsb2FkKCk6IHZvaWQge1xuICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICB0aGlzLmxvYWRlZCA9IHRydWU7XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gICAgdGhpcy5lbWl0KCdyZWFkeScpO1xuICAgIHRoaXMuaW5zdGFsbCgpO1xuICB9XG5cbiAgaW5zdGFsbCgpOiB0aGlzIHtcbiAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICB0aGlzLl9jaGFydCA9ICh3aW5kb3cgYXMgYW55KS5lY2hhcnRzLmluaXQodGhpcy5ub2RlLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX3RoZW1lLCB0aGlzLl9pbml0T3B0KTtcbiAgICB0aGlzLmVtaXQoJ2luaXQnKTtcbiAgICB0aGlzLnNldE9wdGlvbih0aGlzLl9vcHRpb24hKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGRlc3Ryb3koKTogdGhpcyB7XG4gICAgaWYgKHRoaXMuX2NoYXJ0KSB7XG4gICAgICB0aGlzLl9jaGFydC5kaXNwb3NlKCk7XG4gICAgICB0aGlzLmVtaXQoJ2Rlc3Ryb3knKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRPcHRpb24ob3B0aW9uOiBDaGFydEVDaGFydHNPcHRpb24sIG5vdE1lcmdlOiBib29sZWFuID0gZmFsc2UsIGxhenlVcGRhdGU6IGJvb2xlYW4gPSBmYWxzZSk6IHRoaXMge1xuICAgIGlmICh0aGlzLl9jaGFydCkge1xuICAgICAgdGhpcy5fY2hhcnQuc2V0T3B0aW9uKG9wdGlvbiwgbm90TWVyZ2UsIGxhenlVcGRhdGUpO1xuICAgICAgdGhpcy5lbWl0KCdzZXQtb3B0aW9uJywgeyBvcHRpb24gfSBhcyBhbnkpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCh3aW5kb3cgYXMgYW55KS5lY2hhcnRzKSB7XG4gICAgICB0aGlzLmxvYWQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zcnYubGliTG9hZCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgICB0aGlzLmRlc3Ryb3koKTtcbiAgfVxufVxuIl19