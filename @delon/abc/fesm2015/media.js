import { __decorate, __metadata } from 'tslib';
import { Platform } from '@angular/cdk/platform';
import * as i0 from '@angular/core';
import { ɵɵinject, ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, EventEmitter, ɵɵdirectiveInject, ElementRef, Renderer2, NgZone, ɵɵngDeclareComponent, ChangeDetectionStrategy, ViewEncapsulation, Component, Input, Output, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { AlainConfigService, LazyService, InputNumber, DelonUtilModule } from '@delon/util';
import { Subject } from 'rxjs';
import { CommonModule } from '@angular/common';

class MediaService {
    constructor(cogSrv, lazySrv) {
        this.cogSrv = cogSrv;
        this.lazySrv = lazySrv;
        this.loading = false;
        this.loaded = false;
        this.notify$ = new Subject();
    }
    get cog() {
        return this._cog;
    }
    set cog(val) {
        this._cog = this.cogSrv.merge('media', {
            urls: ['https://cdn.bootcdn.net/ajax/libs/plyr/3.5.10/plyr.min.js', 'https://cdn.bootcdn.net/ajax/libs/plyr/3.5.10/plyr.css'],
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
        return this.notify$.asObservable();
    }
}
/** @nocollapse */ MediaService.ɵfac = function MediaService_Factory(t) { return new (t || MediaService)(ɵɵinject(AlainConfigService), ɵɵinject(LazyService)); };
/** @nocollapse */ MediaService.ɵprov = ɵɵdefineInjectable({ token: MediaService, factory: MediaService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(MediaService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: AlainConfigService }, { type: LazyService }]; }, null); })();

class MediaComponent {
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
/** @nocollapse */ MediaComponent.ɵfac = function MediaComponent_Factory(t) { return new (t || MediaComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(MediaService), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Platform)); };
/** @nocollapse */ MediaComponent.ɵcmp = ɵɵngDeclareComponent({ version: "11.1.1", type: MediaComponent, selector: "media", inputs: { type: "type", source: "source", options: "options", delay: "delay" }, outputs: { ready: "ready" }, host: { properties: { "style.display": "'block'" } }, exportAs: ["mediaComponent"], usesOnChanges: true, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], MediaComponent.prototype, "delay", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(MediaComponent, [{
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
    }], function () { return [{ type: ElementRef }, { type: Renderer2 }, { type: MediaService }, { type: NgZone }, { type: Platform }]; }, { type: [{
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

const COMPONENTS = [MediaComponent];
class MediaModule {
}
/** @nocollapse */ MediaModule.ɵmod = ɵɵdefineNgModule({ type: MediaModule });
/** @nocollapse */ MediaModule.ɵinj = ɵɵdefineInjector({ factory: function MediaModule_Factory(t) { return new (t || MediaModule)(); }, imports: [[CommonModule, DelonUtilModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(MediaModule, { declarations: [MediaComponent], imports: [CommonModule, DelonUtilModule], exports: [MediaComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(MediaModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, DelonUtilModule],
                declarations: [...COMPONENTS],
                exports: [...COMPONENTS],
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { MediaComponent, MediaModule, MediaService };
//# sourceMappingURL=media.js.map
