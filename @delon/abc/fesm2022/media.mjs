import { Platform } from '@angular/cdk/platform';
import * as i0 from '@angular/core';
import { inject, Injectable, ElementRef, Renderer2, NgZone, input, numberAttribute, output, afterNextRender, effect, ViewEncapsulation, ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Subject, share, take, delay } from 'rxjs';
import { AlainConfigService } from '@delon/util/config';
import { LazyService } from '@delon/util/other';
import { CommonModule } from '@angular/common';

class MediaService {
    cogSrv = inject(AlainConfigService);
    lazySrv = inject(LazyService);
    _cog;
    loading = false;
    loaded = false;
    notify$ = new Subject();
    get cog() {
        return this._cog;
    }
    set cog(val) {
        this._cog = this.cogSrv.merge('media', {
            urls: ['https://cdn.jsdelivr.net/npm/plyr/dist/plyr.min.js', 'https://cdn.jsdelivr.net/npm/plyr/dist/plyr.css']
        }, val);
    }
    load() {
        if (this.loading) {
            if (this.loaded) {
                this.notify$.next();
            }
            return this;
        }
        this.loading = true;
        this.lazySrv.load(this.cog.urls).then(() => {
            this.loaded = true;
            this.notify$.next();
        });
        return this;
    }
    notify() {
        return this.notify$.asObservable().pipe(share());
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.2", ngImport: i0, type: MediaService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "21.1.2", ngImport: i0, type: MediaService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.2", ngImport: i0, type: MediaService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });

class MediaComponent {
    el = inject(ElementRef).nativeElement;
    renderer = inject(Renderer2);
    ngZone = inject(NgZone);
    srv = inject(MediaService);
    platform = inject(Platform);
    _p;
    videoEl;
    type = input('video', ...(ngDevMode ? [{ debugName: "type" }] : []));
    source = input(...(ngDevMode ? [undefined, { debugName: "source" }] : []));
    options = input(...(ngDevMode ? [undefined, { debugName: "options" }] : []));
    delay = input(0, { ...(ngDevMode ? { debugName: "delay" } : {}), transform: numberAttribute });
    ready = output();
    get player() {
        return this._p;
    }
    constructor() {
        this.srv
            .notify()
            .pipe(takeUntilDestroyed(), take(1), delay(this.delay()))
            .subscribe(() => this.ngZone.runOutsideAngular(() => this.init()));
        afterNextRender(() => {
            if (!this.platform.isBrowser) {
                return;
            }
            this.srv.load();
        });
        effect(() => {
            this.srv.cog = { options: this.options };
            this.uploadSource();
        });
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
        player.on('ready', () => this.ngZone.run(() => this.ready.emit(player)));
        this.uploadSource();
    }
    ensureElement() {
        const type = this.type();
        let el = this.el.querySelector(type);
        if (!el) {
            el = this.renderer.createElement(type);
            el.controls = true;
            this.el.appendChild(el);
        }
        this.videoEl = el;
    }
    destroy() {
        this._p?.destroy();
    }
    uploadSource() {
        const source = this.source();
        const type = this.type();
        if (this._p == null)
            return;
        this._p.source = (typeof source === 'string' ? { type, sources: [{ src: source }] } : source);
    }
    ngOnDestroy() {
        this.destroy();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.2", ngImport: i0, type: MediaComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "21.1.2", type: MediaComponent, isStandalone: true, selector: "media, [media]", inputs: { type: { classPropertyName: "type", publicName: "type", isSignal: true, isRequired: false, transformFunction: null }, source: { classPropertyName: "source", publicName: "source", isSignal: true, isRequired: false, transformFunction: null }, options: { classPropertyName: "options", publicName: "options", isSignal: true, isRequired: false, transformFunction: null }, delay: { classPropertyName: "delay", publicName: "delay", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { ready: "ready" }, host: { classAttribute: "d-block" }, exportAs: ["mediaComponent"], ngImport: i0, template: `<ng-content />`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.2", ngImport: i0, type: MediaComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'media, [media]',
                    exportAs: 'mediaComponent',
                    template: `<ng-content />`,
                    host: {
                        class: 'd-block'
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: () => [], propDecorators: { type: [{ type: i0.Input, args: [{ isSignal: true, alias: "type", required: false }] }], source: [{ type: i0.Input, args: [{ isSignal: true, alias: "source", required: false }] }], options: [{ type: i0.Input, args: [{ isSignal: true, alias: "options", required: false }] }], delay: [{ type: i0.Input, args: [{ isSignal: true, alias: "delay", required: false }] }], ready: [{ type: i0.Output, args: ["ready"] }] } });

const COMPONENTS = [MediaComponent];
class MediaModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.2", ngImport: i0, type: MediaModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "21.1.2", ngImport: i0, type: MediaModule, imports: [CommonModule, MediaComponent], exports: [MediaComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "21.1.2", ngImport: i0, type: MediaModule, imports: [CommonModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.2", ngImport: i0, type: MediaModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, ...COMPONENTS],
                    exports: COMPONENTS
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { MediaComponent, MediaModule, MediaService };
//# sourceMappingURL=media.mjs.map
