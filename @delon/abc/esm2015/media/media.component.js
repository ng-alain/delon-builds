/**
 * @fileoverview added by tsickle
 * Generated from: media.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, NgZone, Output, Renderer2, ViewEncapsulation, } from '@angular/core';
import { InputNumber } from '@delon/util';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL21lZGlhL21lZGlhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUdOLE1BQU0sRUFDTixTQUFTLEVBRVQsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFHMUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBZ0IvQyxNQUFNLE9BQU8sY0FBYzs7Ozs7Ozs7SUFvQnpCLFlBQ1UsRUFBMkIsRUFDM0IsUUFBbUIsRUFDbkIsR0FBaUIsRUFDakIsTUFBYyxFQUNkLFFBQWtCO1FBSmxCLE9BQUUsR0FBRixFQUFFLENBQXlCO1FBQzNCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsUUFBRyxHQUFILEdBQUcsQ0FBYztRQUNqQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsYUFBUSxHQUFSLFFBQVEsQ0FBVTs7UUFqQm5CLFNBQUksR0FBa0IsT0FBTyxDQUFDO1FBR2YsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNmLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDO1FBZXZELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxTQUFTOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUMsQ0FBQztJQUNyRSxDQUFDOzs7OztJQVpELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUNqQixDQUFDOzs7OztJQVlPLFNBQVM7UUFDZixJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQjs7O1FBQUMsR0FBRyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxJQUFJLEdBQUcsVUFBVTs7O1lBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4RCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRU8sSUFBSTtRQUNWLElBQUksQ0FBQyxDQUFDLG1CQUFBLE1BQU0sRUFBTyxDQUFDLENBQUMsSUFBSSxFQUFFO1lBQ3pCLE1BQU0sSUFBSSxLQUFLLENBQ2IseUdBQXlHLElBQUksQ0FBQyxTQUFTLENBQ3JILElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FDbEIsRUFBRSxDQUNKLENBQUM7U0FDSDtRQUVELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQzs7Y0FFZixNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLG9CQUMxQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQ3ZCLENBQUM7UUFFSCxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU87OztRQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFDLENBQUM7UUFFbEQsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRU8sYUFBYTtjQUNiLEVBQUUsSUFBSSxFQUFFLEdBQUcsSUFBSTs7WUFDakIsRUFBRSxHQUFHLG1CQUFBLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBZTtRQUNqRSxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ1AsRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZDLENBQUMsbUJBQUEsRUFBRSxFQUFvQixDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUN6QyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDdkM7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUNwQixDQUFDOzs7OztJQUVPLE9BQU87UUFDYixJQUFJLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDWCxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ25CO0lBQ0gsQ0FBQzs7Ozs7SUFFTyxZQUFZO2NBQ1osRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsSUFBSTtRQUM3QixJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sR0FBRyxPQUFPLE1BQU0sS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQzlGLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFO1lBQzVCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDbEIsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBdUQ7UUFDakUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3pDLElBQUksT0FBTyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQzdCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNyQjtJQUNILENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQztRQUNmLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7O1lBNUdGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsT0FBTztnQkFDakIsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsSUFBSSxFQUFFO29CQUNKLGlCQUFpQixFQUFFLFNBQVM7aUJBQzdCO2dCQUNELG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0Qzs7OztZQTdCQyxVQUFVO1lBT1YsU0FBUztZQU9GLFlBQVk7WUFYbkIsTUFBTTtZQVJDLFFBQVE7OzttQkEyQ2QsS0FBSztxQkFDTCxLQUFLO3NCQUNMLEtBQUs7b0JBQ0wsS0FBSztvQkFDTCxNQUFNOztBQURpQjtJQUFkLFdBQVcsRUFBRTs7NkNBQVc7Ozs7OztJQVZsQyw0QkFBc0I7Ozs7O0lBQ3RCLGlDQUE2Qjs7Ozs7SUFDN0IsOEJBQXdCOzs7OztJQUN4QixpQ0FBOEI7O0lBSTlCLDhCQUF1Qzs7SUFDdkMsZ0NBQTBDOztJQUMxQyxpQ0FBNEI7O0lBQzVCLCtCQUFrQzs7SUFDbEMsK0JBQXlEOzs7OztJQVN2RCw0QkFBbUM7Ozs7O0lBQ25DLGtDQUEyQjs7Ozs7SUFDM0IsNkJBQXlCOzs7OztJQUN6QixnQ0FBc0I7Ozs7O0lBQ3RCLGtDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2UsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElucHV0TnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTWVkaWFTZXJ2aWNlIH0gZnJvbSAnLi9tZWRpYS5zZXJ2aWNlJztcbmltcG9ydCB7IFBseXJNZWRpYVNvdXJjZSwgUGx5ck1lZGlhVHlwZSB9IGZyb20gJy4vcGx5ci50eXBlcyc7XG5cbmRlY2xhcmUgY29uc3QgUGx5cjogTnpTYWZlQW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZWRpYScsXG4gIGV4cG9ydEFzOiAnbWVkaWFDb21wb25lbnQnLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxuICBob3N0OiB7XG4gICAgJ1tzdHlsZS5kaXNwbGF5XSc6IGAnYmxvY2snYCxcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBNZWRpYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfcDogTnpTYWZlQW55O1xuICBwcml2YXRlIHZpZGVvRWw6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIHRpbWU6IE56U2FmZUFueTtcbiAgcHJpdmF0ZSBub3RpZnkkOiBTdWJzY3JpcHRpb247XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBASW5wdXQoKSB0eXBlOiBQbHlyTWVkaWFUeXBlID0gJ3ZpZGVvJztcbiAgQElucHV0KCkgc291cmNlOiBzdHJpbmcgfCBQbHlyTWVkaWFTb3VyY2U7XG4gIEBJbnB1dCgpIG9wdGlvbnM6IE56U2FmZUFueTtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgZGVsYXkgPSAwO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgcmVhZHkgPSBuZXcgRXZlbnRFbWl0dGVyPE56U2FmZUFueT4oKTtcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgZ2V0IHBsYXllcigpOiBOelNhZmVBbnkge1xuICAgIHJldHVybiB0aGlzLl9wO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgc3J2OiBNZWRpYVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSxcbiAgKSB7XG4gICAgdGhpcy5ub3RpZnkkID0gdGhpcy5zcnYubm90aWZ5KCkuc3Vic2NyaWJlKCgpID0+IHRoaXMuaW5pdERlbGF5KCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0RGVsYXkoKTogdm9pZCB7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgdGhpcy50aW1lID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLmluaXQoKSwgdGhpcy5kZWxheSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGluaXQoKTogdm9pZCB7XG4gICAgaWYgKCEod2luZG93IGFzIGFueSkuUGx5cikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgTm8gd2luZG93LlBseXIgZm91bmQsIHBsZWFzZSBtYWtlIHN1cmUgdGhhdCBjZG4gb3IgbG9jYWwgcGF0aCBleGlzdHMsIHRoZSBjdXJyZW50IHJlZmVyZW5jZWQgcGF0aCBpczogJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICB0aGlzLnNydi5jb2cudXJscyxcbiAgICAgICAgKX1gLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICB0aGlzLmVuc3VyZUVsZW1lbnQoKTtcblxuICAgIGNvbnN0IHBsYXllciA9ICh0aGlzLl9wID0gbmV3IFBseXIodGhpcy52aWRlb0VsLCB7XG4gICAgICAuLi50aGlzLnNydi5jb2cub3B0aW9ucyxcbiAgICB9KSk7XG5cbiAgICBwbGF5ZXIub24oJ3JlYWR5JywgKCkgPT4gdGhpcy5yZWFkeS5uZXh0KHBsYXllcikpO1xuXG4gICAgdGhpcy51cGxvYWRTb3VyY2UoKTtcbiAgfVxuXG4gIHByaXZhdGUgZW5zdXJlRWxlbWVudCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IHR5cGUgfSA9IHRoaXM7XG4gICAgbGV0IGVsID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IodHlwZSkgYXMgSFRNTEVsZW1lbnQ7XG4gICAgaWYgKCFlbCkge1xuICAgICAgZWwgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgICAoZWwgYXMgSFRNTFZpZGVvRWxlbWVudCkuY29udHJvbHMgPSB0cnVlO1xuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmFwcGVuZENoaWxkKGVsKTtcbiAgICB9XG4gICAgdGhpcy52aWRlb0VsID0gZWw7XG4gIH1cblxuICBwcml2YXRlIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3ApIHtcbiAgICAgIHRoaXMuX3AuZGVzdHJveSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdXBsb2FkU291cmNlKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgc291cmNlLCB0eXBlIH0gPSB0aGlzO1xuICAgIHRoaXMuX3Auc291cmNlID0gdHlwZW9mIHNvdXJjZSA9PT0gJ3N0cmluZycgPyB7IHR5cGUsIHNvdXJjZXM6IFt7IHNyYzogc291cmNlIH1dIH0gOiBzb3VyY2U7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNydi5sb2FkKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtwIGluIGtleW9mIE1lZGlhQ29tcG9uZW50XT86IFNpbXBsZUNoYW5nZSB9KTogdm9pZCB7XG4gICAgdGhpcy5zcnYuY29nID0geyBvcHRpb25zOiB0aGlzLm9wdGlvbnMgfTtcbiAgICBpZiAoY2hhbmdlcy5zb3VyY2UgJiYgdGhpcy5fcCkge1xuICAgICAgdGhpcy51cGxvYWRTb3VyY2UoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lKTtcbiAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICB0aGlzLl9wID0gbnVsbDtcbiAgICB0aGlzLm5vdGlmeSQudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19