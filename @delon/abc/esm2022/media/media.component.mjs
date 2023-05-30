import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { Subject, timer, takeUntil, take } from 'rxjs';
import { InputNumber, ZoneOutside } from '@delon/util/decorator';
import * as i0 from "@angular/core";
import * as i1 from "./media.service";
import * as i2 from "@angular/cdk/platform";
class MediaComponent {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.3", ngImport: i0, type: MediaComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i1.MediaService }, { token: i0.NgZone }, { token: i2.Platform }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.3", type: MediaComponent, selector: "media", inputs: { type: "type", source: "source", options: "options", delay: "delay" }, outputs: { ready: "ready" }, host: { properties: { "style.display": "'block'" } }, exportAs: ["mediaComponent"], usesOnChanges: true, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
__decorate([
    InputNumber()
], MediaComponent.prototype, "delay", void 0);
__decorate([
    ZoneOutside()
], MediaComponent.prototype, "initDelay", null);
export { MediaComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.3", ngImport: i0, type: MediaComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL21lZGlhL21lZGlhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixTQUFTLEVBRVQsWUFBWSxFQUNaLEtBQUssRUFJTCxNQUFNLEVBR04saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFJdkQsT0FBTyxFQUFFLFdBQVcsRUFBZSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7OztBQU85RSxNQVdhLGNBQWM7SUFhekIsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCxZQUNVLEVBQTJCLEVBQzNCLFFBQW1CLEVBQ25CLEdBQWlCLEVBQ2pCLE1BQWMsRUFDZCxRQUFrQjtRQUpsQixPQUFFLEdBQUYsRUFBRSxDQUF5QjtRQUMzQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLFFBQUcsR0FBSCxHQUFHLENBQWM7UUFDakIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGFBQVEsR0FBUixRQUFRLENBQVU7UUFqQnBCLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBRTlCLFNBQUksR0FBYyxPQUFPLENBQUM7UUFHWCxVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7SUFZakQsQ0FBQztJQUdJLFNBQVM7UUFDZixLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzthQUNkLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQzlCLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJ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SSxPQUFPLENBQUMsTUFBTSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNyQjtJQUNILENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFFZixNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQzFCLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNoQixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDdEIsQ0FBQzs4R0F2R1UsY0FBYztrR0FBZCxjQUFjLG1RQVJmLDJCQUEyQjs7QUFrQmI7SUFBZCxXQUFXLEVBQUU7NkNBQVc7QUFnQjFCO0lBRFAsV0FBVyxFQUFFOytDQUtiO1NBOUJVLGNBQWM7MkZBQWQsY0FBYztrQkFYMUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsT0FBTztvQkFDakIsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMsSUFBSSxFQUFFO3dCQUNKLGlCQUFpQixFQUFFLFNBQVM7cUJBQzdCO29CQUNELG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDdEM7Z01BUVUsSUFBSTtzQkFBWixLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSztnQkFDRyxPQUFPO3NCQUFmLEtBQUs7Z0JBQ2tCLEtBQUs7c0JBQTVCLEtBQUs7Z0JBQ2EsS0FBSztzQkFBdkIsTUFBTTtnQkFlQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFNpbXBsZUNoYW5nZSxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0LCB0aW1lciwgdGFrZVVudGlsLCB0YWtlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB0eXBlIFBseXIgZnJvbSAncGx5cic7XG5cbmltcG9ydCB7IElucHV0TnVtYmVyLCBOdW1iZXJJbnB1dCwgWm9uZU91dHNpZGUgfSBmcm9tICdAZGVsb24vdXRpbC9kZWNvcmF0b3InO1xuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5pbXBvcnQgeyBNZWRpYVNlcnZpY2UgfSBmcm9tICcuL21lZGlhLnNlcnZpY2UnO1xuXG5leHBvcnQgdHlwZSBNZWRpYVR5cGUgPSAnaHRtbDUnIHwgJ3lvdXR1YmUnIHwgJ3ZpZGVvJyB8ICdhdWRpbyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21lZGlhJyxcbiAgZXhwb3J0QXM6ICdtZWRpYUNvbXBvbmVudCcsXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmAsXG4gIGhvc3Q6IHtcbiAgICAnW3N0eWxlLmRpc3BsYXldJzogYCdibG9jaydgXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBNZWRpYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2RlbGF5OiBOdW1iZXJJbnB1dDtcblxuICBwcml2YXRlIF9wPzogUGx5ciB8IG51bGw7XG4gIHByaXZhdGUgdmlkZW9FbD86IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBASW5wdXQoKSB0eXBlOiBNZWRpYVR5cGUgPSAndmlkZW8nO1xuICBASW5wdXQoKSBzb3VyY2U/OiBzdHJpbmcgfCBQbHlyLlNvdXJjZUluZm87XG4gIEBJbnB1dCgpIG9wdGlvbnM/OiBQbHlyLk9wdGlvbnM7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGRlbGF5ID0gMDtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHJlYWR5ID0gbmV3IEV2ZW50RW1pdHRlcjxQbHlyPigpO1xuXG4gIGdldCBwbGF5ZXIoKTogUGx5ciB8IHVuZGVmaW5lZCB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLl9wO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgc3J2OiBNZWRpYVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybVxuICApIHt9XG5cbiAgQFpvbmVPdXRzaWRlKClcbiAgcHJpdmF0ZSBpbml0RGVsYXkoKTogdm9pZCB7XG4gICAgdGltZXIodGhpcy5kZWxheSlcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5pbml0KCkpKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCB3aW5QbHlyID0gKHdpbmRvdyBhcyBOelNhZmVBbnkpLlBseXI7XG4gICAgaWYgKCF3aW5QbHlyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBObyB3aW5kb3cuUGx5ciBmb3VuZCwgcGxlYXNlIG1ha2Ugc3VyZSB0aGF0IGNkbiBvciBsb2NhbCBwYXRoIGV4aXN0cywgdGhlIGN1cnJlbnQgcmVmZXJlbmNlZCBwYXRoIGlzOiAke0pTT04uc3RyaW5naWZ5KFxuICAgICAgICAgIHRoaXMuc3J2LmNvZy51cmxzXG4gICAgICAgICl9YFxuICAgICAgKTtcbiAgICB9XG5cbiAgICB0aGlzLmVuc3VyZUVsZW1lbnQoKTtcblxuICAgIGNvbnN0IHBsYXllcjogUGx5ciA9ICh0aGlzLl9wID0gbmV3IHdpblBseXIodGhpcy52aWRlb0VsLCB7XG4gICAgICAuLi50aGlzLnNydi5jb2cub3B0aW9uc1xuICAgIH0pKTtcblxuICAgIHBsYXllci5vbigncmVhZHknLCAoKSA9PiB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gdGhpcy5yZWFkeS5uZXh0KHBsYXllcikpKTtcblxuICAgIHRoaXMudXBsb2FkU291cmNlKCk7XG4gIH1cblxuICBwcml2YXRlIGVuc3VyZUVsZW1lbnQoKTogdm9pZCB7XG4gICAgY29uc3QgeyB0eXBlIH0gPSB0aGlzO1xuICAgIGxldCBlbCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKHR5cGUpIGFzIEhUTUxFbGVtZW50O1xuICAgIGlmICghZWwpIHtcbiAgICAgIGVsID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgICAgKGVsIGFzIEhUTUxWaWRlb0VsZW1lbnQpLmNvbnRyb2xzID0gdHJ1ZTtcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5hcHBlbmRDaGlsZChlbCk7XG4gICAgfVxuICAgIHRoaXMudmlkZW9FbCA9IGVsO1xuICB9XG5cbiAgcHJpdmF0ZSBkZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9wKSB7XG4gICAgICB0aGlzLl9wLmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHVwbG9hZFNvdXJjZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fcCA9PSBudWxsKSByZXR1cm47XG5cbiAgICBjb25zdCB7IHNvdXJjZSwgdHlwZSB9ID0gdGhpcztcbiAgICB0aGlzLl9wLnNvdXJjZSA9ICh0eXBlb2Ygc291cmNlID09PSAnc3RyaW5nJyA/IHsgdHlwZSwgc291cmNlczogW3sgc3JjOiBzb3VyY2UgfV0gfSA6IHNvdXJjZSkgYXMgUGx5ci5Tb3VyY2VJbmZvO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zcnZcbiAgICAgIC5ub3RpZnkoKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpLCB0YWtlKDEpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmluaXREZWxheSgpKTtcblxuICAgIHRoaXMuc3J2LmxvYWQoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgW3AgaW4ga2V5b2YgTWVkaWFDb21wb25lbnRdPzogU2ltcGxlQ2hhbmdlIH0pOiB2b2lkIHtcbiAgICB0aGlzLnNydi5jb2cgPSB7IG9wdGlvbnM6IHRoaXMub3B0aW9ucyB9O1xuICAgIGlmIChjaGFuZ2VzLnNvdXJjZSkge1xuICAgICAgdGhpcy51cGxvYWRTb3VyY2UoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICB0aGlzLl9wID0gbnVsbDtcblxuICAgIGNvbnN0IHsgZGVzdHJveSQgfSA9IHRoaXM7XG4gICAgZGVzdHJveSQubmV4dCgpO1xuICAgIGRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==