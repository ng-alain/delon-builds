/**
 * @fileoverview added by tsickle
 * Generated from: media.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, NgZone, Output, Renderer2, ViewEncapsulation, } from '@angular/core';
import { InputNumber } from '@delon/util';
import { MediaService } from './media.service';
export class MediaComponent {
    /**
     * @param {?} el
     * @param {?} renderer
     * @param {?} srv
     * @param {?} ngZone
     */
    constructor(el, renderer, srv, ngZone) {
        this.el = el;
        this.renderer = renderer;
        this.srv = srv;
        this.ngZone = ngZone;
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
    { type: NgZone }
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9tZWRpYS8iLCJzb3VyY2VzIjpbIm1lZGlhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBR04sTUFBTSxFQUNOLFNBQVMsRUFFVCxpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUcxQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFnQi9DLE1BQU0sT0FBTyxjQUFjOzs7Ozs7O0lBb0J6QixZQUFvQixFQUEyQixFQUFVLFFBQW1CLEVBQVUsR0FBaUIsRUFBVSxNQUFjO1FBQTNHLE9BQUUsR0FBRixFQUFFLENBQXlCO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLFFBQUcsR0FBSCxHQUFHLENBQWM7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFROztRQVp0SCxTQUFJLEdBQWtCLE9BQU8sQ0FBQztRQUdmLFVBQUssR0FBRyxDQUFDLENBQUM7UUFDZixVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQWEsQ0FBQztRQVN2RCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsU0FBUzs7O1FBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFDLENBQUM7SUFDckUsQ0FBQzs7Ozs7SUFORCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDakIsQ0FBQzs7Ozs7SUFNTyxTQUFTO1FBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUI7OztRQUFDLEdBQUcsRUFBRTtZQUNqQyxJQUFJLENBQUMsSUFBSSxHQUFHLFVBQVU7OztZQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEQsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVPLElBQUk7UUFDVixJQUFJLENBQUMsQ0FBQyxtQkFBQSxNQUFNLEVBQU8sQ0FBQyxDQUFDLElBQUksRUFBRTtZQUN6QixNQUFNLElBQUksS0FBSyxDQUNiLHlHQUF5RyxJQUFJLENBQUMsU0FBUyxDQUNySCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQ2xCLEVBQUUsQ0FDSixDQUFDO1NBQ0g7UUFFRCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7O2NBRWYsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxvQkFDMUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUN2QixDQUFDO1FBRUgsTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPOzs7UUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBQyxDQUFDO1FBRWxELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7OztJQUVPLGFBQWE7Y0FDYixFQUFFLElBQUksRUFBRSxHQUFHLElBQUk7O1lBQ2pCLEVBQUUsR0FBRyxtQkFBQSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQWU7UUFDakUsSUFBSSxDQUFDLEVBQUUsRUFBRTtZQUNQLEVBQUUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2QyxDQUFDLG1CQUFBLEVBQUUsRUFBb0IsQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDekMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3ZDO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7Ozs7SUFFTyxPQUFPO1FBQ2IsSUFBSSxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ1gsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNuQjtJQUNILENBQUM7Ozs7O0lBRU8sWUFBWTtjQUNaLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLElBQUk7UUFDN0IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsT0FBTyxNQUFNLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUM5RixDQUFDOzs7O0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDbEIsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBdUQ7UUFDakUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3pDLElBQUksT0FBTyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQzdCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNyQjtJQUNILENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQztRQUNmLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7O1lBbkdGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsT0FBTztnQkFDakIsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsSUFBSSxFQUFFO29CQUNKLGlCQUFpQixFQUFFLFNBQVM7aUJBQzdCO2dCQUNELG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0Qzs7OztZQTdCQyxVQUFVO1lBT1YsU0FBUztZQU9GLFlBQVk7WUFYbkIsTUFBTTs7O21CQW1DTCxLQUFLO3FCQUNMLEtBQUs7c0JBQ0wsS0FBSztvQkFDTCxLQUFLO29CQUNMLE1BQU07O0FBRGlCO0lBQWQsV0FBVyxFQUFFOzs2Q0FBVzs7Ozs7O0lBVmxDLDRCQUFzQjs7Ozs7SUFDdEIsaUNBQTZCOzs7OztJQUM3Qiw4QkFBd0I7Ozs7O0lBQ3hCLGlDQUE4Qjs7SUFJOUIsOEJBQXVDOztJQUN2QyxnQ0FBMEM7O0lBQzFDLGlDQUE0Qjs7SUFDNUIsK0JBQWtDOztJQUNsQywrQkFBeUQ7Ozs7O0lBUTdDLDRCQUFtQzs7Ozs7SUFBRSxrQ0FBMkI7Ozs7O0lBQUUsNkJBQXlCOzs7OztJQUFFLGdDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2UsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElucHV0TnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTWVkaWFTZXJ2aWNlIH0gZnJvbSAnLi9tZWRpYS5zZXJ2aWNlJztcbmltcG9ydCB7IFBseXJNZWRpYVNvdXJjZSwgUGx5ck1lZGlhVHlwZSB9IGZyb20gJy4vcGx5ci50eXBlcyc7XG5cbmRlY2xhcmUgY29uc3QgUGx5cjogTnpTYWZlQW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZWRpYScsXG4gIGV4cG9ydEFzOiAnbWVkaWFDb21wb25lbnQnLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxuICBob3N0OiB7XG4gICAgJ1tzdHlsZS5kaXNwbGF5XSc6IGAnYmxvY2snYCxcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBNZWRpYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfcDogTnpTYWZlQW55O1xuICBwcml2YXRlIHZpZGVvRWw6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIHRpbWU6IE56U2FmZUFueTtcbiAgcHJpdmF0ZSBub3RpZnkkOiBTdWJzY3JpcHRpb247XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBASW5wdXQoKSB0eXBlOiBQbHlyTWVkaWFUeXBlID0gJ3ZpZGVvJztcbiAgQElucHV0KCkgc291cmNlOiBzdHJpbmcgfCBQbHlyTWVkaWFTb3VyY2U7XG4gIEBJbnB1dCgpIG9wdGlvbnM6IE56U2FmZUFueTtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgZGVsYXkgPSAwO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgcmVhZHkgPSBuZXcgRXZlbnRFbWl0dGVyPE56U2FmZUFueT4oKTtcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgZ2V0IHBsYXllcigpOiBOelNhZmVBbnkge1xuICAgIHJldHVybiB0aGlzLl9wO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBzcnY6IE1lZGlhU2VydmljZSwgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSkge1xuICAgIHRoaXMubm90aWZ5JCA9IHRoaXMuc3J2Lm5vdGlmeSgpLnN1YnNjcmliZSgoKSA9PiB0aGlzLmluaXREZWxheSgpKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdERlbGF5KCkge1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHRoaXMudGltZSA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5pbml0KCksIHRoaXMuZGVsYXkpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0KCk6IHZvaWQge1xuICAgIGlmICghKHdpbmRvdyBhcyBhbnkpLlBseXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYE5vIHdpbmRvdy5QbHlyIGZvdW5kLCBwbGVhc2UgbWFrZSBzdXJlIHRoYXQgY2RuIG9yIGxvY2FsIHBhdGggZXhpc3RzLCB0aGUgY3VycmVudCByZWZlcmVuY2VkIHBhdGggaXM6ICR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgdGhpcy5zcnYuY29nLnVybHMsXG4gICAgICAgICl9YCxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgdGhpcy5lbnN1cmVFbGVtZW50KCk7XG5cbiAgICBjb25zdCBwbGF5ZXIgPSAodGhpcy5fcCA9IG5ldyBQbHlyKHRoaXMudmlkZW9FbCwge1xuICAgICAgLi4udGhpcy5zcnYuY29nLm9wdGlvbnMsXG4gICAgfSkpO1xuXG4gICAgcGxheWVyLm9uKCdyZWFkeScsICgpID0+IHRoaXMucmVhZHkubmV4dChwbGF5ZXIpKTtcblxuICAgIHRoaXMudXBsb2FkU291cmNlKCk7XG4gIH1cblxuICBwcml2YXRlIGVuc3VyZUVsZW1lbnQoKSB7XG4gICAgY29uc3QgeyB0eXBlIH0gPSB0aGlzO1xuICAgIGxldCBlbCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKHR5cGUpIGFzIEhUTUxFbGVtZW50O1xuICAgIGlmICghZWwpIHtcbiAgICAgIGVsID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgICAgKGVsIGFzIEhUTUxWaWRlb0VsZW1lbnQpLmNvbnRyb2xzID0gdHJ1ZTtcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5hcHBlbmRDaGlsZChlbCk7XG4gICAgfVxuICAgIHRoaXMudmlkZW9FbCA9IGVsO1xuICB9XG5cbiAgcHJpdmF0ZSBkZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9wKSB7XG4gICAgICB0aGlzLl9wLmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHVwbG9hZFNvdXJjZSgpOiB2b2lkIHtcbiAgICBjb25zdCB7IHNvdXJjZSwgdHlwZSB9ID0gdGhpcztcbiAgICB0aGlzLl9wLnNvdXJjZSA9IHR5cGVvZiBzb3VyY2UgPT09ICdzdHJpbmcnID8geyB0eXBlLCBzb3VyY2VzOiBbeyBzcmM6IHNvdXJjZSB9XSB9IDogc291cmNlO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc3J2LmxvYWQoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgW3AgaW4ga2V5b2YgTWVkaWFDb21wb25lbnRdPzogU2ltcGxlQ2hhbmdlIH0pOiB2b2lkIHtcbiAgICB0aGlzLnNydi5jb2cgPSB7IG9wdGlvbnM6IHRoaXMub3B0aW9ucyB9O1xuICAgIGlmIChjaGFuZ2VzLnNvdXJjZSAmJiB0aGlzLl9wKSB7XG4gICAgICB0aGlzLnVwbG9hZFNvdXJjZSgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWUpO1xuICAgIHRoaXMuZGVzdHJveSgpO1xuICAgIHRoaXMuX3AgPSBudWxsO1xuICAgIHRoaXMubm90aWZ5JC51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=