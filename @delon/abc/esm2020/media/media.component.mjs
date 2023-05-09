import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { Subject, timer, takeUntil, take } from 'rxjs';
import { InputNumber, ZoneOutside } from '@delon/util/decorator';
import * as i0 from "@angular/core";
import * as i1 from "./media.service";
import * as i2 from "@angular/cdk/platform";
export class MediaComponent {
    get player() {
        return this._p;
    }
    constructor(el, renderer, srv, ngZone, platform) {
        this.el = el;
        this.renderer = renderer;
        this.srv = srv;
        this.ngZone = ngZone;
        this.platform = platform;
        this.destroy$ = new Subject();
        this.type = 'video';
        this.delay = 0;
        this.ready = new EventEmitter();
    }
    initDelay() {
        timer(this.delay)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => this.ngZone.runOutsideAngular(() => this.init()));
    }
    init() {
        const winPlyr = window.Plyr;
        if (!winPlyr) {
            throw new Error(`No window.Plyr found, please make sure that cdn or local path exists, the current referenced path is: ${JSON.stringify(this.srv.cog.urls)}`);
        }
        this.ensureElement();
        const player = (this._p = new winPlyr(this.videoEl, {
            ...this.srv.cog.options
        }));
        player.on('ready', () => this.ngZone.run(() => this.ready.next(player)));
        this.uploadSource();
    }
    ensureElement() {
        const { type } = this;
        let el = this.el.nativeElement.querySelector(type);
        if (!el) {
            el = this.renderer.createElement(type);
            el.controls = true;
            this.el.nativeElement.appendChild(el);
        }
        this.videoEl = el;
    }
    destroy() {
        if (this._p) {
            this._p.destroy();
        }
    }
    uploadSource() {
        if (this._p == null)
            return;
        const { source, type } = this;
        this._p.source = (typeof source === 'string' ? { type, sources: [{ src: source }] } : source);
    }
    ngAfterViewInit() {
        if (!this.platform.isBrowser) {
            return;
        }
        this.srv
            .notify()
            .pipe(takeUntil(this.destroy$), take(1))
            .subscribe(() => this.initDelay());
        this.srv.load();
    }
    ngOnChanges(changes) {
        this.srv.cog = { options: this.options };
        if (changes.source) {
            this.uploadSource();
        }
    }
    ngOnDestroy() {
        this.destroy();
        this._p = null;
        const { destroy$ } = this;
        destroy$.next();
        destroy$.complete();
    }
}
MediaComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: MediaComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i1.MediaService }, { token: i0.NgZone }, { token: i2.Platform }], target: i0.ɵɵFactoryTarget.Component });
MediaComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: MediaComponent, selector: "media", inputs: { type: "type", source: "source", options: "options", delay: "delay" }, outputs: { ready: "ready" }, host: { properties: { "style.display": "'block'" } }, exportAs: ["mediaComponent"], usesOnChanges: true, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    InputNumber()
], MediaComponent.prototype, "delay", void 0);
__decorate([
    ZoneOutside()
], MediaComponent.prototype, "initDelay", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: MediaComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'media',
                    exportAs: 'mediaComponent',
                    template: `<ng-content></ng-content>`,
                    host: {
                        '[style.display]': `'block'`
                    },
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.MediaService }, { type: i0.NgZone }, { type: i2.Platform }]; }, propDecorators: { type: [{
                type: Input
            }], source: [{
                type: Input
            }], options: [{
                type: Input
            }], delay: [{
                type: Input
            }], ready: [{
                type: Output
            }], initDelay: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL21lZGlhL21lZGlhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixTQUFTLEVBRVQsWUFBWSxFQUNaLEtBQUssRUFJTCxNQUFNLEVBR04saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFJdkQsT0FBTyxFQUFFLFdBQVcsRUFBZSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7OztBQWtCOUUsTUFBTSxPQUFPLGNBQWM7SUFhekIsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCxZQUNVLEVBQTJCLEVBQzNCLFFBQW1CLEVBQ25CLEdBQWlCLEVBQ2pCLE1BQWMsRUFDZCxRQUFrQjtRQUpsQixPQUFFLEdBQUYsRUFBRSxDQUF5QjtRQUMzQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLFFBQUcsR0FBSCxHQUFHLENBQWM7UUFDakIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGFBQVEsR0FBUixRQUFRLENBQVU7UUFqQnBCLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBRTlCLFNBQUksR0FBYyxPQUFPLENBQUM7UUFHWCxVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7SUFZakQsQ0FBQztJQUdJLFNBQVM7UUFDZixLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzthQUNkLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQzlCLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FB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ekMsSUFBSSxPQUFPLENBQUMsTUFBTSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNyQjtJQUNILENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFFZixNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQzFCLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNoQixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7MkdBdkdVLGNBQWM7K0ZBQWQsY0FBYyxtUUFSZiwyQkFBMkI7QUFrQmI7SUFBZCxXQUFXLEVBQUU7NkNBQVc7QUFnQmxDO0lBREMsV0FBVyxFQUFFOytDQUtiOzJGQTlCVSxjQUFjO2tCQVgxQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxPQUFPO29CQUNqQixRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxJQUFJLEVBQUU7d0JBQ0osaUJBQWlCLEVBQUUsU0FBUztxQkFDN0I7b0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUN0QztnTUFRVSxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUNHLE9BQU87c0JBQWYsS0FBSztnQkFDa0IsS0FBSztzQkFBNUIsS0FBSztnQkFDYSxLQUFLO3NCQUF2QixNQUFNO2dCQWVDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QsIHRpbWVyLCB0YWtlVW50aWwsIHRha2UgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHR5cGUgUGx5ciBmcm9tICdwbHlyJztcblxuaW1wb3J0IHsgSW5wdXROdW1iZXIsIE51bWJlcklucHV0LCBab25lT3V0c2lkZSB9IGZyb20gJ0BkZWxvbi91dGlsL2RlY29yYXRvcic7XG5pbXBvcnQgdHlwZSB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbmltcG9ydCB7IE1lZGlhU2VydmljZSB9IGZyb20gJy4vbWVkaWEuc2VydmljZSc7XG5cbmV4cG9ydCB0eXBlIE1lZGlhVHlwZSA9ICdodG1sNScgfCAneW91dHViZScgfCAndmlkZW8nIHwgJ2F1ZGlvJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWVkaWEnLFxuICBleHBvcnRBczogJ21lZGlhQ29tcG9uZW50JyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcbiAgaG9zdDoge1xuICAgICdbc3R5bGUuZGlzcGxheV0nOiBgJ2Jsb2NrJ2BcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIE1lZGlhQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZGVsYXk6IE51bWJlcklucHV0O1xuXG4gIHByaXZhdGUgX3A/OiBQbHlyIHwgbnVsbDtcbiAgcHJpdmF0ZSB2aWRlb0VsPzogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIEBJbnB1dCgpIHR5cGU6IE1lZGlhVHlwZSA9ICd2aWRlbyc7XG4gIEBJbnB1dCgpIHNvdXJjZT86IHN0cmluZyB8IFBseXIuU291cmNlSW5mbztcbiAgQElucHV0KCkgb3B0aW9ucz86IFBseXIuT3B0aW9ucztcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgZGVsYXkgPSAwO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgcmVhZHkgPSBuZXcgRXZlbnRFbWl0dGVyPFBseXI+KCk7XG5cbiAgZ2V0IHBsYXllcigpOiBQbHlyIHwgdW5kZWZpbmVkIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuX3A7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBzcnY6IE1lZGlhU2VydmljZSxcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtXG4gICkge31cblxuICBAWm9uZU91dHNpZGUoKVxuICBwcml2YXRlIGluaXREZWxheSgpOiB2b2lkIHtcbiAgICB0aW1lcih0aGlzLmRlbGF5KVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLmluaXQoKSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHdpblBseXIgPSAod2luZG93IGFzIE56U2FmZUFueSkuUGx5cjtcbiAgICBpZiAoIXdpblBseXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYE5vIHdpbmRvdy5QbHlyIGZvdW5kLCBwbGVhc2UgbWFrZSBzdXJlIHRoYXQgY2RuIG9yIGxvY2FsIHBhdGggZXhpc3RzLCB0aGUgY3VycmVudCByZWZlcmVuY2VkIHBhdGggaXM6ICR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgdGhpcy5zcnYuY29nLnVybHNcbiAgICAgICAgKX1gXG4gICAgICApO1xuICAgIH1cblxuICAgIHRoaXMuZW5zdXJlRWxlbWVudCgpO1xuXG4gICAgY29uc3QgcGxheWVyOiBQbHlyID0gKHRoaXMuX3AgPSBuZXcgd2luUGx5cih0aGlzLnZpZGVvRWwsIHtcbiAgICAgIC4uLnRoaXMuc3J2LmNvZy5vcHRpb25zXG4gICAgfSkpO1xuXG4gICAgcGxheWVyLm9uKCdyZWFkeScsICgpID0+IHRoaXMubmdab25lLnJ1bigoKSA9PiB0aGlzLnJlYWR5Lm5leHQocGxheWVyKSkpO1xuXG4gICAgdGhpcy51cGxvYWRTb3VyY2UoKTtcbiAgfVxuXG4gIHByaXZhdGUgZW5zdXJlRWxlbWVudCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IHR5cGUgfSA9IHRoaXM7XG4gICAgbGV0IGVsID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IodHlwZSkgYXMgSFRNTEVsZW1lbnQ7XG4gICAgaWYgKCFlbCkge1xuICAgICAgZWwgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgICAoZWwgYXMgSFRNTFZpZGVvRWxlbWVudCkuY29udHJvbHMgPSB0cnVlO1xuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmFwcGVuZENoaWxkKGVsKTtcbiAgICB9XG4gICAgdGhpcy52aWRlb0VsID0gZWw7XG4gIH1cblxuICBwcml2YXRlIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3ApIHtcbiAgICAgIHRoaXMuX3AuZGVzdHJveSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdXBsb2FkU291cmNlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9wID09IG51bGwpIHJldHVybjtcblxuICAgIGNvbnN0IHsgc291cmNlLCB0eXBlIH0gPSB0aGlzO1xuICAgIHRoaXMuX3Auc291cmNlID0gKHR5cGVvZiBzb3VyY2UgPT09ICdzdHJpbmcnID8geyB0eXBlLCBzb3VyY2VzOiBbeyBzcmM6IHNvdXJjZSB9XSB9IDogc291cmNlKSBhcyBQbHlyLlNvdXJjZUluZm87XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNydlxuICAgICAgLm5vdGlmeSgpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCksIHRha2UoMSkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuaW5pdERlbGF5KCkpO1xuXG4gICAgdGhpcy5zcnYubG9hZCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogeyBbcCBpbiBrZXlvZiBNZWRpYUNvbXBvbmVudF0/OiBTaW1wbGVDaGFuZ2UgfSk6IHZvaWQge1xuICAgIHRoaXMuc3J2LmNvZyA9IHsgb3B0aW9uczogdGhpcy5vcHRpb25zIH07XG4gICAgaWYgKGNoYW5nZXMuc291cmNlKSB7XG4gICAgICB0aGlzLnVwbG9hZFNvdXJjZSgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSgpO1xuICAgIHRoaXMuX3AgPSBudWxsO1xuXG4gICAgY29uc3QgeyBkZXN0cm95JCB9ID0gdGhpcztcbiAgICBkZXN0cm95JC5uZXh0KCk7XG4gICAgZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19