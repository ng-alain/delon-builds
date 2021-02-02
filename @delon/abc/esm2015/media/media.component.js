import { __decorate, __metadata } from "tslib";
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, NgZone, Output, Renderer2, ViewEncapsulation, } from '@angular/core';
import { InputNumber } from '@delon/util/decorator';
import { MediaService } from './media.service';
import * as i0 from "@angular/core";
import * as i1 from "./media.service";
import * as i2 from "@angular/cdk/platform";
export class MediaComponent {
    constructor(el, renderer, srv, ngZone, platform) {
        this.el = el;
        this.renderer = renderer;
        this.srv = srv;
        this.ngZone = ngZone;
        this.platform = platform;
        this.type = 'video';
        this.delay = 0;
        this.ready = new EventEmitter();
        this.notify$ = this.srv.notify().subscribe(() => this.initDelay());
    }
    get player() {
        return this._p;
    }
    initDelay() {
        this.ngZone.runOutsideAngular(() => {
            this.time = setTimeout(() => this.init(), this.delay);
        });
    }
    init() {
        if (!window.Plyr) {
            throw new Error(`No window.Plyr found, please make sure that cdn or local path exists, the current referenced path is: ${JSON.stringify(this.srv.cog.urls)}`);
        }
        this.ensureElement();
        const player = (this._p = new Plyr(this.videoEl, Object.assign({}, this.srv.cog.options)));
        player.on('ready', () => this.ready.next(player));
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
        const { source, type } = this;
        this._p.source = typeof source === 'string' ? { type, sources: [{ src: source }] } : source;
    }
    ngAfterViewInit() {
        if (!this.platform.isBrowser) {
            return;
        }
        this.srv.load();
    }
    ngOnChanges(changes) {
        this.srv.cog = { options: this.options };
        if (changes.source && this._p) {
            this.uploadSource();
        }
    }
    ngOnDestroy() {
        clearTimeout(this.time);
        this.destroy();
        this._p = null;
        this.notify$.unsubscribe();
    }
}
/** @nocollapse */ MediaComponent.ɵfac = function MediaComponent_Factory(t) { return new (t || MediaComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1.MediaService), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i2.Platform)); };
/** @nocollapse */ MediaComponent.ɵcmp = i0.ɵɵngDeclareComponent({ version: "11.1.1", type: MediaComponent, selector: "media", inputs: { type: "type", source: "source", options: "options", delay: "delay" }, outputs: { ready: "ready" }, host: { properties: { "style.display": "'block'" } }, exportAs: ["mediaComponent"], usesOnChanges: true, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], MediaComponent.prototype, "delay", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MediaComponent, [{
        type: Component,
        args: [{
                selector: 'media',
                exportAs: 'mediaComponent',
                template: `<ng-content></ng-content>`,
                host: {
                    '[style.display]': `'block'`,
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.MediaService }, { type: i0.NgZone }, { type: i2.Platform }]; }, { type: [{
            type: Input
        }], source: [{
            type: Input
        }], options: [{
            type: Input
        }], delay: [{
            type: Input
        }], ready: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL21lZGlhL21lZGlhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFHTixNQUFNLEVBQ04sU0FBUyxFQUVULGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFlLE1BQU0sdUJBQXVCLENBQUM7QUFHakUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7O0FBZ0IvQyxNQUFNLE9BQU8sY0FBYztJQWtCekIsWUFDVSxFQUEyQixFQUMzQixRQUFtQixFQUNuQixHQUFpQixFQUNqQixNQUFjLEVBQ2QsUUFBa0I7UUFKbEIsT0FBRSxHQUFGLEVBQUUsQ0FBeUI7UUFDM0IsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixRQUFHLEdBQUgsR0FBRyxDQUFjO1FBQ2pCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBZm5CLFNBQUksR0FBa0IsT0FBTyxDQUFDO1FBR2YsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNmLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDO1FBYXZELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFDckUsQ0FBQztJQVpELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBWU8sU0FBUztRQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sSUFBSTtRQUNWLElBQUksQ0FBRSxNQUFjLENBQUMsSUFBSSxFQUFFO1lBQ3pCLE1BQU0sSUFBSSxLQUFLLENBQ2IseUdBQXlHLElBQUksQ0FBQyxTQUFTLENBQ3JILElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FDbEIsRUFBRSxDQUNKLENBQUM7U0FDSDtRQUVELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUVyQixNQUFNLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sb0JBQzFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFDdkIsQ0FBQyxDQUFDO1FBRUosTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUVsRCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVPLGFBQWE7UUFDbkIsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFnQixDQUFDO1FBQ2xFLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDUCxFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEMsRUFBdUIsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3pDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUN2QztRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFTyxPQUFPO1FBQ2IsSUFBSSxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ1gsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNuQjtJQUNILENBQUM7SUFFTyxZQUFZO1FBQ2xCLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQzlCLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxHQUFHLE9BQU8sTUFBTSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDOUYsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDNUIsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXVEO1FBQ2pFLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN6QyxJQUFJLE9BQU8sQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLEVBQUUsRUFBRTtZQUM3QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDckI7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDZixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzdCLENBQUM7OytGQS9GVSxjQUFjOzRGQUFkLGNBQWMsbVFBUmYsMkJBQTJCO0FBbUJiO0lBQWQsV0FBVyxFQUFFOzs2Q0FBVzt1RkFYdkIsY0FBYztjQVgxQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLElBQUksRUFBRTtvQkFDSixpQkFBaUIsRUFBRSxTQUFTO2lCQUM3QjtnQkFDRCxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7NEpBU1UsSUFBSTtrQkFBWixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBQ2tCLEtBQUs7a0JBQTVCLEtBQUs7WUFDYSxLQUFLO2tCQUF2QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFNpbXBsZUNoYW5nZSxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXROdW1iZXIsIE51bWJlcklucHV0IH0gZnJvbSAnQGRlbG9uL3V0aWwvZGVjb3JhdG9yJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE1lZGlhU2VydmljZSB9IGZyb20gJy4vbWVkaWEuc2VydmljZSc7XG5pbXBvcnQgeyBQbHlyTWVkaWFTb3VyY2UsIFBseXJNZWRpYVR5cGUgfSBmcm9tICcuL3BseXIudHlwZXMnO1xuXG5kZWNsYXJlIGNvbnN0IFBseXI6IE56U2FmZUFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWVkaWEnLFxuICBleHBvcnRBczogJ21lZGlhQ29tcG9uZW50JyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcbiAgaG9zdDoge1xuICAgICdbc3R5bGUuZGlzcGxheV0nOiBgJ2Jsb2NrJ2AsXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgTWVkaWFDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9kZWxheTogTnVtYmVySW5wdXQ7XG5cbiAgcHJpdmF0ZSBfcDogTnpTYWZlQW55O1xuICBwcml2YXRlIHZpZGVvRWw6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIHRpbWU6IE56U2FmZUFueTtcbiAgcHJpdmF0ZSBub3RpZnkkOiBTdWJzY3JpcHRpb247XG5cbiAgQElucHV0KCkgdHlwZTogUGx5ck1lZGlhVHlwZSA9ICd2aWRlbyc7XG4gIEBJbnB1dCgpIHNvdXJjZTogc3RyaW5nIHwgUGx5ck1lZGlhU291cmNlO1xuICBASW5wdXQoKSBvcHRpb25zOiBOelNhZmVBbnk7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGRlbGF5ID0gMDtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHJlYWR5ID0gbmV3IEV2ZW50RW1pdHRlcjxOelNhZmVBbnk+KCk7XG5cbiAgZ2V0IHBsYXllcigpOiBOelNhZmVBbnkge1xuICAgIHJldHVybiB0aGlzLl9wO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgc3J2OiBNZWRpYVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSxcbiAgKSB7XG4gICAgdGhpcy5ub3RpZnkkID0gdGhpcy5zcnYubm90aWZ5KCkuc3Vic2NyaWJlKCgpID0+IHRoaXMuaW5pdERlbGF5KCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0RGVsYXkoKTogdm9pZCB7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgdGhpcy50aW1lID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLmluaXQoKSwgdGhpcy5kZWxheSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGluaXQoKTogdm9pZCB7XG4gICAgaWYgKCEod2luZG93IGFzIGFueSkuUGx5cikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgTm8gd2luZG93LlBseXIgZm91bmQsIHBsZWFzZSBtYWtlIHN1cmUgdGhhdCBjZG4gb3IgbG9jYWwgcGF0aCBleGlzdHMsIHRoZSBjdXJyZW50IHJlZmVyZW5jZWQgcGF0aCBpczogJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICB0aGlzLnNydi5jb2cudXJscyxcbiAgICAgICAgKX1gLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICB0aGlzLmVuc3VyZUVsZW1lbnQoKTtcblxuICAgIGNvbnN0IHBsYXllciA9ICh0aGlzLl9wID0gbmV3IFBseXIodGhpcy52aWRlb0VsLCB7XG4gICAgICAuLi50aGlzLnNydi5jb2cub3B0aW9ucyxcbiAgICB9KSk7XG5cbiAgICBwbGF5ZXIub24oJ3JlYWR5JywgKCkgPT4gdGhpcy5yZWFkeS5uZXh0KHBsYXllcikpO1xuXG4gICAgdGhpcy51cGxvYWRTb3VyY2UoKTtcbiAgfVxuXG4gIHByaXZhdGUgZW5zdXJlRWxlbWVudCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IHR5cGUgfSA9IHRoaXM7XG4gICAgbGV0IGVsID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IodHlwZSkgYXMgSFRNTEVsZW1lbnQ7XG4gICAgaWYgKCFlbCkge1xuICAgICAgZWwgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgICAoZWwgYXMgSFRNTFZpZGVvRWxlbWVudCkuY29udHJvbHMgPSB0cnVlO1xuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmFwcGVuZENoaWxkKGVsKTtcbiAgICB9XG4gICAgdGhpcy52aWRlb0VsID0gZWw7XG4gIH1cblxuICBwcml2YXRlIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3ApIHtcbiAgICAgIHRoaXMuX3AuZGVzdHJveSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdXBsb2FkU291cmNlKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgc291cmNlLCB0eXBlIH0gPSB0aGlzO1xuICAgIHRoaXMuX3Auc291cmNlID0gdHlwZW9mIHNvdXJjZSA9PT0gJ3N0cmluZycgPyB7IHR5cGUsIHNvdXJjZXM6IFt7IHNyYzogc291cmNlIH1dIH0gOiBzb3VyY2U7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNydi5sb2FkKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtwIGluIGtleW9mIE1lZGlhQ29tcG9uZW50XT86IFNpbXBsZUNoYW5nZSB9KTogdm9pZCB7XG4gICAgdGhpcy5zcnYuY29nID0geyBvcHRpb25zOiB0aGlzLm9wdGlvbnMgfTtcbiAgICBpZiAoY2hhbmdlcy5zb3VyY2UgJiYgdGhpcy5fcCkge1xuICAgICAgdGhpcy51cGxvYWRTb3VyY2UoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lKTtcbiAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICB0aGlzLl9wID0gbnVsbDtcbiAgICB0aGlzLm5vdGlmeSQudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19