import { __decorate, __metadata } from 'tslib';
import { Platform } from '@angular/cdk/platform';
import { Injectable, ɵɵdefineInjectable, ɵɵinject, EventEmitter, Component, ChangeDetectionStrategy, ViewEncapsulation, ElementRef, Renderer2, NgZone, Input, Output, NgModule } from '@angular/core';
import { AlainConfigService, LazyService, InputNumber, DelonUtilModule } from '@delon/util';
import { Subject } from 'rxjs';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: media.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MediaService {
    /**
     * @param {?} cogSrv
     * @param {?} lazySrv
     */
    constructor(cogSrv, lazySrv) {
        this.cogSrv = cogSrv;
        this.lazySrv = lazySrv;
        this.loading = false;
        this.loaded = false;
        this.notify$ = new Subject();
    }
    /**
     * @return {?}
     */
    get cog() {
        return this._cog;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set cog(val) {
        this._cog = (/** @type {?} */ (this.cogSrv.merge('media', {
            urls: ['https://cdn.bootcdn.net/ajax/libs/plyr/3.5.10/plyr.min.js', 'https://cdn.bootcdn.net/ajax/libs/plyr/3.5.10/plyr.css'],
        }, val)));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    load() {
        if ((/** @type {?} */ (this)).loading) {
            if ((/** @type {?} */ (this)).loaded) {
                (/** @type {?} */ (this)).notify$.next();
            }
            return (/** @type {?} */ (this));
        }
        (/** @type {?} */ (this)).loading = true;
        (/** @type {?} */ (this)).lazySrv.load((/** @type {?} */ ((/** @type {?} */ (this)).cog.urls))).then((/**
         * @return {?}
         */
        () => {
            (/** @type {?} */ (this)).loaded = true;
            (/** @type {?} */ (this)).notify$.next();
        }));
        return (/** @type {?} */ (this));
    }
    /**
     * @return {?}
     */
    notify() {
        return this.notify$.asObservable();
    }
}
MediaService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
MediaService.ctorParameters = () => [
    { type: AlainConfigService },
    { type: LazyService }
];
/** @nocollapse */ MediaService.ɵprov = ɵɵdefineInjectable({ factory: function MediaService_Factory() { return new MediaService(ɵɵinject(AlainConfigService), ɵɵinject(LazyService)); }, token: MediaService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    MediaService.prototype._cog;
    /**
     * @type {?}
     * @private
     */
    MediaService.prototype.loading;
    /**
     * @type {?}
     * @private
     */
    MediaService.prototype.loaded;
    /**
     * @type {?}
     * @private
     */
    MediaService.prototype.notify$;
    /**
     * @type {?}
     * @private
     */
    MediaService.prototype.cogSrv;
    /**
     * @type {?}
     * @private
     */
    MediaService.prototype.lazySrv;
}

/**
 * @fileoverview added by tsickle
 * Generated from: media.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MediaComponent {
    /**
     * @param {?} el
     * @param {?} renderer
     * @param {?} srv
     * @param {?} ngZone
     * @param {?} platform
     */
    constructor(el, renderer, srv, ngZone, platform) {
        this.el = el;
        this.renderer = renderer;
        this.srv = srv;
        this.ngZone = ngZone;
        this.platform = platform;
        // #region fields
        this.type = 'video';
        this.delay = 0;
        this.ready = new EventEmitter();
        this.notify$ = this.srv.notify().subscribe((/**
         * @return {?}
         */
        () => this.initDelay()));
    }
    // #endregion
    /**
     * @return {?}
     */
    get player() {
        return this._p;
    }
    /**
     * @private
     * @return {?}
     */
    initDelay() {
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this.time = setTimeout((/**
             * @return {?}
             */
            () => this.init()), this.delay);
        }));
    }
    /**
     * @private
     * @return {?}
     */
    init() {
        if (!((/** @type {?} */ (window))).Plyr) {
            throw new Error(`No window.Plyr found, please make sure that cdn or local path exists, the current referenced path is: ${JSON.stringify(this.srv.cog.urls)}`);
        }
        this.ensureElement();
        /** @type {?} */
        const player = (this._p = new Plyr(this.videoEl, Object.assign({}, this.srv.cog.options)));
        player.on('ready', (/**
         * @return {?}
         */
        () => this.ready.next(player)));
        this.uploadSource();
    }
    /**
     * @private
     * @return {?}
     */
    ensureElement() {
        const { type } = this;
        /** @type {?} */
        let el = (/** @type {?} */ (this.el.nativeElement.querySelector(type)));
        if (!el) {
            el = this.renderer.createElement(type);
            ((/** @type {?} */ (el))).controls = true;
            this.el.nativeElement.appendChild(el);
        }
        this.videoEl = el;
    }
    /**
     * @private
     * @return {?}
     */
    destroy() {
        if (this._p) {
            this._p.destroy();
        }
    }
    /**
     * @private
     * @return {?}
     */
    uploadSource() {
        const { source, type } = this;
        this._p.source = typeof source === 'string' ? { type, sources: [{ src: source }] } : source;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (!this.platform.isBrowser) {
            return;
        }
        this.srv.load();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.srv.cog = { options: this.options };
        if (changes.source && this._p) {
            this.uploadSource();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        clearTimeout(this.time);
        this.destroy();
        this._p = null;
        this.notify$.unsubscribe();
    }
}
MediaComponent.decorators = [
    { type: Component, args: [{
                selector: 'media',
                exportAs: 'mediaComponent',
                template: `<ng-content></ng-content>`,
                host: {
                    '[style.display]': `'block'`,
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
MediaComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: MediaService },
    { type: NgZone },
    { type: Platform }
];
MediaComponent.propDecorators = {
    type: [{ type: Input }],
    source: [{ type: Input }],
    options: [{ type: Input }],
    delay: [{ type: Input }],
    ready: [{ type: Output }]
};
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], MediaComponent.prototype, "delay", void 0);
if (false) {
    /** @type {?} */
    MediaComponent.ngAcceptInputType_delay;
    /**
     * @type {?}
     * @private
     */
    MediaComponent.prototype._p;
    /**
     * @type {?}
     * @private
     */
    MediaComponent.prototype.videoEl;
    /**
     * @type {?}
     * @private
     */
    MediaComponent.prototype.time;
    /**
     * @type {?}
     * @private
     */
    MediaComponent.prototype.notify$;
    /** @type {?} */
    MediaComponent.prototype.type;
    /** @type {?} */
    MediaComponent.prototype.source;
    /** @type {?} */
    MediaComponent.prototype.options;
    /** @type {?} */
    MediaComponent.prototype.delay;
    /** @type {?} */
    MediaComponent.prototype.ready;
    /**
     * @type {?}
     * @private
     */
    MediaComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    MediaComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    MediaComponent.prototype.srv;
    /**
     * @type {?}
     * @private
     */
    MediaComponent.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    MediaComponent.prototype.platform;
}

/**
 * @fileoverview added by tsickle
 * Generated from: media.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [MediaComponent];
class MediaModule {
}
MediaModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, DelonUtilModule],
                declarations: [...COMPONENTS],
                exports: [...COMPONENTS],
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: plyr.types.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function PlyrMediaSource() { }
if (false) {
    /**
     * Note: YouTube and Vimeo are currently not supported as audio sources.
     * @type {?}
     */
    PlyrMediaSource.prototype.type;
    /**
     * Title of the new media. Used for the aria-label attribute on the play button, and outer container. YouTube and Vimeo are populated automatically.
     * @type {?|undefined}
     */
    PlyrMediaSource.prototype.title;
    /**
     * This is an array of sources. For HTML5 media, the properties of this object are mapped directly to HTML attributes so more can be added to the object if required.
     * @type {?}
     */
    PlyrMediaSource.prototype.sources;
    /**
     * The URL for the poster image (HTML5 video only).
     * @type {?|undefined}
     */
    PlyrMediaSource.prototype.poster;
    /**
     * An array of track objects. Each element in the array is mapped directly to a track element and any keys mapped directly to HTML attributes so as in the example above,
     * it will render as <track kind="captions" label="English" srclang="en" src="https://cdn.selz.com/plyr/1.0/example_captions_en.vtt" default> and similar for the French version.
     * Booleans are converted to HTML5 value-less attributes.
     * @type {?|undefined}
     */
    PlyrMediaSource.prototype.tracks;
}
/**
 * @record
 */
function PlyrSource() { }
if (false) {
    /**
     * The URL of the media file (or YouTube/Vimeo URL).
     * @type {?}
     */
    PlyrSource.prototype.src;
    /**
     * The MIME type of the media file (if HTML5).
     * @type {?|undefined}
     */
    PlyrSource.prototype.type;
    /** @type {?|undefined} */
    PlyrSource.prototype.provider;
    /** @type {?|undefined} */
    PlyrSource.prototype.size;
}
/**
 * @record
 */
function PlyrTrack() { }
if (false) {
    /**
     * Indicates how the text track is meant to be used
     * @type {?}
     */
    PlyrTrack.prototype.kind;
    /**
     * Indicates a user-readable title for the track
     * @type {?}
     */
    PlyrTrack.prototype.label;
    /**
     * The language of the track text data. It must be a valid BCP 47 language tag. If the kind attribute is set to subtitles, then srclang must be defined.
     * @type {?|undefined}
     */
    PlyrTrack.prototype.srcLang;
    /**
     * The URL of the track (.vtt file).
     * @type {?}
     */
    PlyrTrack.prototype.src;
    /** @type {?|undefined} */
    PlyrTrack.prototype.default;
}

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: media.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { MediaComponent, MediaModule, MediaService };
//# sourceMappingURL=media.js.map
