import { __decorate } from 'tslib';
import { Platform } from '@angular/cdk/platform';
import * as i0 from '@angular/core';
import { inject, Injectable, DestroyRef, ElementRef, Renderer2, NgZone, EventEmitter, numberAttribute, Output, Input, ViewEncapsulation, ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Subject, share, timer, take } from 'rxjs';
import { ZoneOutside } from '@delon/util/decorator';
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.2", ngImport: i0, type: MediaService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.1.2", ngImport: i0, type: MediaService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.2", ngImport: i0, type: MediaService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });

class MediaComponent {
    destroy$ = inject(DestroyRef);
    el = inject(ElementRef).nativeElement;
    renderer = inject(Renderer2);
    ngZone = inject(NgZone);
    srv = inject(MediaService);
    platform = inject(Platform);
    _p;
    videoEl;
    type = 'video';
    source;
    options;
    delay = 0;
    ready = new EventEmitter();
    get player() {
        return this._p;
    }
    initDelay() {
        timer(this.delay)
            .pipe(takeUntilDestroyed(this.destroy$))
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
        let el = this.el.querySelector(type);
        if (!el) {
            el = this.renderer.createElement(type);
            el.controls = true;
            this.el.appendChild(el);
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
            .pipe(takeUntilDestroyed(this.destroy$), take(1))
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
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.2", ngImport: i0, type: MediaComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "20.1.2", type: MediaComponent, isStandalone: true, selector: "media, [media]", inputs: { type: "type", source: "source", options: "options", delay: ["delay", "delay", numberAttribute] }, outputs: { ready: "ready" }, host: { classAttribute: "d-block" }, exportAs: ["mediaComponent"], usesOnChanges: true, ngImport: i0, template: `<ng-content />`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
__decorate([
    ZoneOutside()
], MediaComponent.prototype, "initDelay", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.2", ngImport: i0, type: MediaComponent, decorators: [{
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
        }], propDecorators: { type: [{
                type: Input
            }], source: [{
                type: Input
            }], options: [{
                type: Input
            }], delay: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], ready: [{
                type: Output
            }], initDelay: [] } });

const COMPONENTS = [MediaComponent];
class MediaModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.2", ngImport: i0, type: MediaModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "20.1.2", ngImport: i0, type: MediaModule, imports: [CommonModule, MediaComponent], exports: [MediaComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "20.1.2", ngImport: i0, type: MediaModule, imports: [CommonModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.2", ngImport: i0, type: MediaModule, decorators: [{
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
