import { __decorate } from "tslib";
import { Directive, EventEmitter, Input, Output, ViewChild, booleanAttribute, numberAttribute } from '@angular/core';
import { Subject, filter, takeUntil } from 'rxjs';
import { ZoneOutside } from '@delon/util/decorator';
import * as i0 from "@angular/core";
import * as i1 from "./g2.servicce";
import * as i2 from "@angular/cdk/platform";
export class G2BaseComponent {
    get chart() {
        return this._chart;
    }
    get winG2() {
        return window.G2;
    }
    constructor(srv, el, ngZone, platform, cdr) {
        this.srv = srv;
        this.el = el;
        this.ngZone = ngZone;
        this.platform = platform;
        this.cdr = cdr;
        this.repaint = true;
        this.destroy$ = new Subject();
        this.loaded = false;
        this.delay = 0;
        this.ready = new EventEmitter();
        this.theme = srv.cog.theme;
        this.srv.notify
            .pipe(takeUntil(this.destroy$), filter(() => !this.loaded))
            .subscribe(() => this.load());
    }
    /** G2数据变更 */
    changeData() { }
    /** 等同 `ngOnInit` */
    onInit() { }
    /** 等同 `ngOnChanges` */
    onChanges(_) { }
    load() {
        this.ngZone.run(() => {
            this.loaded = true;
            this.cdr.detectChanges();
        });
        setTimeout(() => this.install(), this.delay);
    }
    ngOnInit() {
        if (!this.platform.isBrowser) {
            return;
        }
        this.onInit();
        if (this.winG2) {
            this.load();
        }
        else {
            this.srv.libLoad();
        }
    }
    ngOnChanges(changes) {
        this.onChanges(changes);
        const isOnlyChangeData = this.onlyChangeData
            ? this.onlyChangeData(changes)
            : Object.keys(changes).length === 1 && !!changes.data;
        if (isOnlyChangeData) {
            this.changeData();
            return;
        }
        if (!this.chart || !this.repaint)
            return;
        this.ngZone.runOutsideAngular(() => {
            this.destroyChart().install();
        });
    }
    destroyChart() {
        if (this._chart) {
            this._chart.destroy();
        }
        return this;
    }
    ngOnDestroy() {
        if (this.resize$) {
            this.resize$.unsubscribe();
        }
        this.destroy$.next();
        this.destroy$.complete();
        this.destroyChart();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: G2BaseComponent, deps: [{ token: i1.G2Service }, { token: i0.ElementRef }, { token: i0.NgZone }, { token: i2.Platform }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "16.1.0", version: "17.1.0", type: G2BaseComponent, inputs: { repaint: ["repaint", "repaint", booleanAttribute], delay: ["delay", "delay", numberAttribute], theme: "theme" }, outputs: { ready: "ready" }, viewQueries: [{ propertyName: "node", first: true, predicate: ["container"], descendants: true, static: true }], usesOnChanges: true, ngImport: i0 }); }
}
__decorate([
    ZoneOutside()
], G2BaseComponent.prototype, "load", null);
__decorate([
    ZoneOutside()
], G2BaseComponent.prototype, "destroyChart", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: G2BaseComponent, decorators: [{
            type: Directive
        }], ctorParameters: () => [{ type: i1.G2Service }, { type: i0.ElementRef }, { type: i0.NgZone }, { type: i2.Platform }, { type: i0.ChangeDetectorRef }], propDecorators: { repaint: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], node: [{
                type: ViewChild,
                args: ['container', { static: true }]
            }], delay: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], theme: [{
                type: Input
            }], ready: [{
                type: Output
            }], load: [], destroyChart: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZzIuYmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jaGFydC9jb3JlL2cyLmJhc2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBRUwsU0FBUyxFQUVULFlBQVksRUFDWixLQUFLLEVBS0wsTUFBTSxFQUVOLFNBQVMsRUFDVCxnQkFBZ0IsRUFDaEIsZUFBZSxFQUNoQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFnQixNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBSWhFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7OztBQU1wRCxNQUFNLE9BQWdCLGVBQWU7SUFDbkMsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxJQUFJLEtBQUs7UUFDUCxPQUFRLE1BQW9CLENBQUMsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRCxZQUNZLEdBQWMsRUFDZCxFQUEyQixFQUMzQixNQUFjLEVBQ2QsUUFBa0IsRUFDbEIsR0FBc0I7UUFKdEIsUUFBRyxHQUFILEdBQUcsQ0FBVztRQUNkLE9BQUUsR0FBRixFQUFFLENBQXlCO1FBQzNCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBVU0sWUFBTyxHQUFHLElBQUksQ0FBQztRQUk3QyxhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUV6QyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBRXdCLFVBQUssR0FBRyxDQUFDLENBQUM7UUFFOUIsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFTLENBQUM7UUFsQm5ELElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFNLENBQUM7UUFD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ZTtrQkFEcEMsU0FBUzttTEF5QmdDLE9BQU87c0JBQTlDLEtBQUs7dUJBQUMsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUU7Z0JBRWMsSUFBSTtzQkFBdkQsU0FBUzt1QkFBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2dCQU1ELEtBQUs7c0JBQTNDLEtBQUs7dUJBQUMsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFO2dCQUM1QixLQUFLO3NCQUFiLEtBQUs7Z0JBQ2EsS0FBSztzQkFBdkIsTUFBTTtnQkFpQkMsSUFBSSxNQXFDRixZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdDaGlsZCxcbiAgYm9vbGVhbkF0dHJpYnV0ZSxcbiAgbnVtYmVyQXR0cmlidXRlXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCwgU3Vic2NyaXB0aW9uLCBmaWx0ZXIsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgdHlwZSB7IENoYXJ0LCBUeXBlcyB9IGZyb20gJ0BhbnR2L2cyJztcblxuaW1wb3J0IHsgWm9uZU91dHNpZGUgfSBmcm9tICdAZGVsb24vdXRpbC9kZWNvcmF0b3InO1xuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5pbXBvcnQgeyBHMlNlcnZpY2UgfSBmcm9tICcuL2cyLnNlcnZpY2NlJztcblxuQERpcmVjdGl2ZSgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRzJCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIGdldCBjaGFydCgpOiBDaGFydCB7XG4gICAgcmV0dXJuIHRoaXMuX2NoYXJ0O1xuICB9XG5cbiAgZ2V0IHdpbkcyKCk6IE56U2FmZUFueSB7XG4gICAgcmV0dXJuICh3aW5kb3cgYXMgTnpTYWZlQW55KS5HMjtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzcnY6IEcyU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZWw6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIHByb3RlY3RlZCBuZ1pvbmU6IE5nWm9uZSxcbiAgICBwcm90ZWN0ZWQgcGxhdGZvcm06IFBsYXRmb3JtLFxuICAgIHByb3RlY3RlZCBjZHI6IENoYW5nZURldGVjdG9yUmVmXG4gICkge1xuICAgIHRoaXMudGhlbWUgPSBzcnYuY29nLnRoZW1lITtcbiAgICB0aGlzLnNydi5ub3RpZnlcbiAgICAgIC5waXBlKFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXG4gICAgICAgIGZpbHRlcigoKSA9PiAhdGhpcy5sb2FkZWQpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMubG9hZCgpKTtcbiAgfVxuICBASW5wdXQoeyB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGUgfSkgcmVwYWludCA9IHRydWU7XG5cbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJywgeyBzdGF0aWM6IHRydWUgfSkgcHJvdGVjdGVkIG5vZGUhOiBFbGVtZW50UmVmO1xuICBwcm90ZWN0ZWQgcmVzaXplJD86IFN1YnNjcmlwdGlvbjtcbiAgcHJvdGVjdGVkIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJvdGVjdGVkIF9jaGFydCE6IENoYXJ0O1xuICBsb2FkZWQgPSBmYWxzZTtcblxuICBASW5wdXQoeyB0cmFuc2Zvcm06IG51bWJlckF0dHJpYnV0ZSB9KSBkZWxheSA9IDA7XG4gIEBJbnB1dCgpIHRoZW1lOiBzdHJpbmcgfCBUeXBlcy5Mb29zZU9iamVjdDtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHJlYWR5ID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydD4oKTtcblxuICAvKiog5qOA5p+l5piv5ZCm5Y+q5Y+Y5pu05pWw5o2uICovXG4gIG9ubHlDaGFuZ2VEYXRhPzogKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpID0+IGJvb2xlYW47XG5cbiAgYWJzdHJhY3QgaW5zdGFsbCgpOiB2b2lkO1xuXG4gIC8qKiBHMuaVsOaNruWPmOabtCAqL1xuICBjaGFuZ2VEYXRhKCk6IHZvaWQge31cblxuICAvKiog562J5ZCMIGBuZ09uSW5pdGAgKi9cbiAgb25Jbml0KCk6IHZvaWQge31cblxuICAvKiog562J5ZCMIGBuZ09uQ2hhbmdlc2AgKi9cbiAgb25DaGFuZ2VzKF86IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHt9XG5cbiAgQFpvbmVPdXRzaWRlKClcbiAgcHJpdmF0ZSBsb2FkKCk6IHZvaWQge1xuICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICB0aGlzLmxvYWRlZCA9IHRydWU7XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmluc3RhbGwoKSwgdGhpcy5kZWxheSk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMub25Jbml0KCk7XG4gICAgaWYgKHRoaXMud2luRzIpIHtcbiAgICAgIHRoaXMubG9hZCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNydi5saWJMb2FkKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2VzKGNoYW5nZXMpO1xuXG4gICAgY29uc3QgaXNPbmx5Q2hhbmdlRGF0YSA9IHRoaXMub25seUNoYW5nZURhdGFcbiAgICAgID8gdGhpcy5vbmx5Q2hhbmdlRGF0YShjaGFuZ2VzKVxuICAgICAgOiBPYmplY3Qua2V5cyhjaGFuZ2VzKS5sZW5ndGggPT09IDEgJiYgISFjaGFuZ2VzLmRhdGE7XG4gICAgaWYgKGlzT25seUNoYW5nZURhdGEpIHtcbiAgICAgIHRoaXMuY2hhbmdlRGF0YSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuY2hhcnQgfHwgIXRoaXMucmVwYWludCkgcmV0dXJuO1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHRoaXMuZGVzdHJveUNoYXJ0KCkuaW5zdGFsbCgpO1xuICAgIH0pO1xuICB9XG5cbiAgQFpvbmVPdXRzaWRlKClcbiAgcHJvdGVjdGVkIGRlc3Ryb3lDaGFydCgpOiB0aGlzIHtcbiAgICBpZiAodGhpcy5fY2hhcnQpIHtcbiAgICAgIHRoaXMuX2NoYXJ0LmRlc3Ryb3koKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5yZXNpemUkKSB7XG4gICAgICB0aGlzLnJlc2l6ZSQudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICAgIHRoaXMuZGVzdHJveUNoYXJ0KCk7XG4gIH1cbn1cbiJdfQ==