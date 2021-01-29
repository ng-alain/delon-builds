/**
 * @fileoverview added by tsickle
 * Generated from: media.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, NgZone, Output, Renderer2, ViewEncapsulation, } from '@angular/core';
import { InputNumber } from '@delon/util/decorator';
import { MediaService } from './media.service';
export class MediaComponent {
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
        this.type = 'video';
        this.delay = 0;
        this.ready = new EventEmitter();
        this.notify$ = this.srv.notify().subscribe((/**
         * @return {?}
         */
        () => this.initDelay()));
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL21lZGlhL21lZGlhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUdOLE1BQU0sRUFDTixTQUFTLEVBRVQsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQWUsTUFBTSx1QkFBdUIsQ0FBQztBQUdqRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFnQi9DLE1BQU0sT0FBTyxjQUFjOzs7Ozs7OztJQWtCekIsWUFDVSxFQUEyQixFQUMzQixRQUFtQixFQUNuQixHQUFpQixFQUNqQixNQUFjLEVBQ2QsUUFBa0I7UUFKbEIsT0FBRSxHQUFGLEVBQUUsQ0FBeUI7UUFDM0IsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixRQUFHLEdBQUgsR0FBRyxDQUFjO1FBQ2pCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBZm5CLFNBQUksR0FBa0IsT0FBTyxDQUFDO1FBR2YsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNmLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDO1FBYXZELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxTQUFTOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUMsQ0FBQztJQUNyRSxDQUFDOzs7O0lBWkQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQ2pC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QUNmLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ2YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7WUExR0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxPQUFPO2dCQUNqQixRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxJQUFJLEVBQUU7b0JBQ0osaUJBQWlCLEVBQUUsU0FBUztpQkFDN0I7Z0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3RDOzs7O1lBN0JDLFVBQVU7WUFPVixTQUFTO1lBT0YsWUFBWTtZQVhuQixNQUFNO1lBUkMsUUFBUTs7O21CQTJDZCxLQUFLO3FCQUNMLEtBQUs7c0JBQ0wsS0FBSztvQkFDTCxLQUFLO29CQUNMLE1BQU07O0FBRGlCO0lBQWQsV0FBVyxFQUFFOzs2Q0FBVzs7O0lBVmxDLHVDQUE0Qzs7Ozs7SUFFNUMsNEJBQXNCOzs7OztJQUN0QixpQ0FBNkI7Ozs7O0lBQzdCLDhCQUF3Qjs7Ozs7SUFDeEIsaUNBQThCOztJQUU5Qiw4QkFBdUM7O0lBQ3ZDLGdDQUEwQzs7SUFDMUMsaUNBQTRCOztJQUM1QiwrQkFBa0M7O0lBQ2xDLCtCQUF5RDs7Ozs7SUFPdkQsNEJBQW1DOzs7OztJQUNuQyxrQ0FBMkI7Ozs7O0lBQzNCLDZCQUF5Qjs7Ozs7SUFDekIsZ0NBQXNCOzs7OztJQUN0QixrQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbnB1dE51bWJlciwgTnVtYmVySW5wdXQgfSBmcm9tICdAZGVsb24vdXRpbC9kZWNvcmF0b3InO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTWVkaWFTZXJ2aWNlIH0gZnJvbSAnLi9tZWRpYS5zZXJ2aWNlJztcbmltcG9ydCB7IFBseXJNZWRpYVNvdXJjZSwgUGx5ck1lZGlhVHlwZSB9IGZyb20gJy4vcGx5ci50eXBlcyc7XG5cbmRlY2xhcmUgY29uc3QgUGx5cjogTnpTYWZlQW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZWRpYScsXG4gIGV4cG9ydEFzOiAnbWVkaWFDb21wb25lbnQnLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxuICBob3N0OiB7XG4gICAgJ1tzdHlsZS5kaXNwbGF5XSc6IGAnYmxvY2snYCxcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBNZWRpYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2RlbGF5OiBOdW1iZXJJbnB1dDtcblxuICBwcml2YXRlIF9wOiBOelNhZmVBbnk7XG4gIHByaXZhdGUgdmlkZW9FbDogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgdGltZTogTnpTYWZlQW55O1xuICBwcml2YXRlIG5vdGlmeSQ6IFN1YnNjcmlwdGlvbjtcblxuICBASW5wdXQoKSB0eXBlOiBQbHlyTWVkaWFUeXBlID0gJ3ZpZGVvJztcbiAgQElucHV0KCkgc291cmNlOiBzdHJpbmcgfCBQbHlyTWVkaWFTb3VyY2U7XG4gIEBJbnB1dCgpIG9wdGlvbnM6IE56U2FmZUFueTtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgZGVsYXkgPSAwO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgcmVhZHkgPSBuZXcgRXZlbnRFbWl0dGVyPE56U2FmZUFueT4oKTtcblxuICBnZXQgcGxheWVyKCk6IE56U2FmZUFueSB7XG4gICAgcmV0dXJuIHRoaXMuX3A7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBzcnY6IE1lZGlhU2VydmljZSxcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtLFxuICApIHtcbiAgICB0aGlzLm5vdGlmeSQgPSB0aGlzLnNydi5ub3RpZnkoKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5pbml0RGVsYXkoKSk7XG4gIH1cblxuICBwcml2YXRlIGluaXREZWxheSgpOiB2b2lkIHtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICB0aGlzLnRpbWUgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5pdCgpLCB0aGlzLmRlbGF5KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoISh3aW5kb3cgYXMgYW55KS5QbHlyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBObyB3aW5kb3cuUGx5ciBmb3VuZCwgcGxlYXNlIG1ha2Ugc3VyZSB0aGF0IGNkbiBvciBsb2NhbCBwYXRoIGV4aXN0cywgdGhlIGN1cnJlbnQgcmVmZXJlbmNlZCBwYXRoIGlzOiAke0pTT04uc3RyaW5naWZ5KFxuICAgICAgICAgIHRoaXMuc3J2LmNvZy51cmxzLFxuICAgICAgICApfWAsXG4gICAgICApO1xuICAgIH1cblxuICAgIHRoaXMuZW5zdXJlRWxlbWVudCgpO1xuXG4gICAgY29uc3QgcGxheWVyID0gKHRoaXMuX3AgPSBuZXcgUGx5cih0aGlzLnZpZGVvRWwsIHtcbiAgICAgIC4uLnRoaXMuc3J2LmNvZy5vcHRpb25zLFxuICAgIH0pKTtcblxuICAgIHBsYXllci5vbigncmVhZHknLCAoKSA9PiB0aGlzLnJlYWR5Lm5leHQocGxheWVyKSk7XG5cbiAgICB0aGlzLnVwbG9hZFNvdXJjZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBlbnN1cmVFbGVtZW50KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgdHlwZSB9ID0gdGhpcztcbiAgICBsZXQgZWwgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3Rvcih0eXBlKSBhcyBIVE1MRWxlbWVudDtcbiAgICBpZiAoIWVsKSB7XG4gICAgICBlbCA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICAgIChlbCBhcyBIVE1MVmlkZW9FbGVtZW50KS5jb250cm9scyA9IHRydWU7XG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZWwpO1xuICAgIH1cbiAgICB0aGlzLnZpZGVvRWwgPSBlbDtcbiAgfVxuXG4gIHByaXZhdGUgZGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fcCkge1xuICAgICAgdGhpcy5fcC5kZXN0cm95KCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1cGxvYWRTb3VyY2UoKTogdm9pZCB7XG4gICAgY29uc3QgeyBzb3VyY2UsIHR5cGUgfSA9IHRoaXM7XG4gICAgdGhpcy5fcC5zb3VyY2UgPSB0eXBlb2Ygc291cmNlID09PSAnc3RyaW5nJyA/IHsgdHlwZSwgc291cmNlczogW3sgc3JjOiBzb3VyY2UgfV0gfSA6IHNvdXJjZTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc3J2LmxvYWQoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgW3AgaW4ga2V5b2YgTWVkaWFDb21wb25lbnRdPzogU2ltcGxlQ2hhbmdlIH0pOiB2b2lkIHtcbiAgICB0aGlzLnNydi5jb2cgPSB7IG9wdGlvbnM6IHRoaXMub3B0aW9ucyB9O1xuICAgIGlmIChjaGFuZ2VzLnNvdXJjZSAmJiB0aGlzLl9wKSB7XG4gICAgICB0aGlzLnVwbG9hZFNvdXJjZSgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWUpO1xuICAgIHRoaXMuZGVzdHJveSgpO1xuICAgIHRoaXMuX3AgPSBudWxsO1xuICAgIHRoaXMubm90aWZ5JC51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=