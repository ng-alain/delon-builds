/**
 * @fileoverview added by tsickle
 * Generated from: media.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __assign, __decorate, __metadata } from "tslib";
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, NgZone, Output, Renderer2, ViewEncapsulation, } from '@angular/core';
import { InputNumber } from '@delon/util';
import { MediaService } from './media.service';
var MediaComponent = /** @class */ (function () {
    function MediaComponent(el, renderer, srv, ngZone, platform) {
        var _this = this;
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
        function () { return _this.initDelay(); }));
    }
    Object.defineProperty(MediaComponent.prototype, "player", {
        // #endregion
        get: 
        // #endregion
        /**
         * @return {?}
         */
        function () {
            return this._p;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    MediaComponent.prototype.initDelay = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            _this.time = setTimeout((/**
             * @return {?}
             */
            function () { return _this.init(); }), _this.delay);
        }));
    };
    /**
     * @private
     * @return {?}
     */
    MediaComponent.prototype.init = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (!((/** @type {?} */ (window))).Plyr) {
            throw new Error("No window.Plyr found, please make sure that cdn or local path exists, the current referenced path is: " + JSON.stringify(this.srv.cog.urls));
        }
        this.ensureElement();
        /** @type {?} */
        var player = (this._p = new Plyr(this.videoEl, __assign({}, this.srv.cog.options)));
        player.on('ready', (/**
         * @return {?}
         */
        function () { return _this.ready.next(player); }));
        this.uploadSource();
    };
    /**
     * @private
     * @return {?}
     */
    MediaComponent.prototype.ensureElement = /**
     * @private
     * @return {?}
     */
    function () {
        var type = this.type;
        /** @type {?} */
        var el = (/** @type {?} */ (this.el.nativeElement.querySelector(type)));
        if (!el) {
            el = this.renderer.createElement(type);
            ((/** @type {?} */ (el))).controls = true;
            this.el.nativeElement.appendChild(el);
        }
        this.videoEl = el;
    };
    /**
     * @private
     * @return {?}
     */
    MediaComponent.prototype.destroy = /**
     * @private
     * @return {?}
     */
    function () {
        if (this._p) {
            this._p.destroy();
        }
    };
    /**
     * @private
     * @return {?}
     */
    MediaComponent.prototype.uploadSource = /**
     * @private
     * @return {?}
     */
    function () {
        var _a = this, source = _a.source, type = _a.type;
        this._p.source = typeof source === 'string' ? { type: type, sources: [{ src: source }] } : source;
    };
    /**
     * @return {?}
     */
    MediaComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (!this.platform.isBrowser) {
            return;
        }
        this.srv.load();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    MediaComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.srv.cog = { options: this.options };
        if (changes.source && this._p) {
            this.uploadSource();
        }
    };
    /**
     * @return {?}
     */
    MediaComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        clearTimeout(this.time);
        this.destroy();
        this._p = null;
        this.notify$.unsubscribe();
    };
    MediaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'media',
                    exportAs: 'mediaComponent',
                    template: "<ng-content></ng-content>",
                    host: {
                        '[style.display]': "'block'",
                    },
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    MediaComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: MediaService },
        { type: NgZone },
        { type: Platform }
    ]; };
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
    return MediaComponent;
}());
export { MediaComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9tZWRpYS8iLCJzb3VyY2VzIjpbIm1lZGlhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUdOLE1BQU0sRUFDTixTQUFTLEVBRVQsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFHMUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBSy9DO0lBK0JFLHdCQUNVLEVBQTJCLEVBQzNCLFFBQW1CLEVBQ25CLEdBQWlCLEVBQ2pCLE1BQWMsRUFDZCxRQUFrQjtRQUw1QixpQkFRQztRQVBTLE9BQUUsR0FBRixFQUFFLENBQXlCO1FBQzNCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsUUFBRyxHQUFILEdBQUcsQ0FBYztRQUNqQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsYUFBUSxHQUFSLFFBQVEsQ0FBVTs7UUFqQm5CLFNBQUksR0FBa0IsT0FBTyxDQUFDO1FBR2YsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNmLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDO1FBZXZELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxTQUFTOzs7UUFBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFNBQVMsRUFBRSxFQUFoQixDQUFnQixFQUFDLENBQUM7SUFDckUsQ0FBQztJQVpELHNCQUFJLGtDQUFNO1FBRlYsYUFBYTs7Ozs7O1FBRWI7WUFDRSxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUM7UUFD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SUFFRCxvQ0FBVzs7O0lBQVg7UUFDRSxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ2YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM3QixDQUFDOztnQkE1R0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxPQUFPO29CQUNqQixRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxJQUFJLEVBQUU7d0JBQ0osaUJBQWlCLEVBQUUsU0FBUztxQkFDN0I7b0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUN0Qzs7OztnQkE3QkMsVUFBVTtnQkFPVixTQUFTO2dCQU9GLFlBQVk7Z0JBWG5CLE1BQU07Z0JBUkMsUUFBUTs7O3VCQTJDZCxLQUFLO3lCQUNMLEtBQUs7MEJBQ0wsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLE1BQU07O0lBRGlCO1FBQWQsV0FBVyxFQUFFOztpREFBVztJQXVGcEMscUJBQUM7Q0FBQSxBQTdHRCxJQTZHQztTQWxHWSxjQUFjOzs7Ozs7SUFDekIsNEJBQXNCOzs7OztJQUN0QixpQ0FBNkI7Ozs7O0lBQzdCLDhCQUF3Qjs7Ozs7SUFDeEIsaUNBQThCOztJQUk5Qiw4QkFBdUM7O0lBQ3ZDLGdDQUEwQzs7SUFDMUMsaUNBQTRCOztJQUM1QiwrQkFBa0M7O0lBQ2xDLCtCQUF5RDs7Ozs7SUFTdkQsNEJBQW1DOzs7OztJQUNuQyxrQ0FBMkI7Ozs7O0lBQzNCLDZCQUF5Qjs7Ozs7SUFDekIsZ0NBQXNCOzs7OztJQUN0QixrQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbnB1dE51bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE1lZGlhU2VydmljZSB9IGZyb20gJy4vbWVkaWEuc2VydmljZSc7XG5pbXBvcnQgeyBQbHlyTWVkaWFTb3VyY2UsIFBseXJNZWRpYVR5cGUgfSBmcm9tICcuL3BseXIudHlwZXMnO1xuXG5kZWNsYXJlIGNvbnN0IFBseXI6IE56U2FmZUFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWVkaWEnLFxuICBleHBvcnRBczogJ21lZGlhQ29tcG9uZW50JyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcbiAgaG9zdDoge1xuICAgICdbc3R5bGUuZGlzcGxheV0nOiBgJ2Jsb2NrJ2AsXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgTWVkaWFDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX3A6IE56U2FmZUFueTtcbiAgcHJpdmF0ZSB2aWRlb0VsOiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSB0aW1lOiBOelNhZmVBbnk7XG4gIHByaXZhdGUgbm90aWZ5JDogU3Vic2NyaXB0aW9uO1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgQElucHV0KCkgdHlwZTogUGx5ck1lZGlhVHlwZSA9ICd2aWRlbyc7XG4gIEBJbnB1dCgpIHNvdXJjZTogc3RyaW5nIHwgUGx5ck1lZGlhU291cmNlO1xuICBASW5wdXQoKSBvcHRpb25zOiBOelNhZmVBbnk7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGRlbGF5ID0gMDtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHJlYWR5ID0gbmV3IEV2ZW50RW1pdHRlcjxOelNhZmVBbnk+KCk7XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGdldCBwbGF5ZXIoKTogTnpTYWZlQW55IHtcbiAgICByZXR1cm4gdGhpcy5fcDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIHNydjogTWVkaWFTZXJ2aWNlLFxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0sXG4gICkge1xuICAgIHRoaXMubm90aWZ5JCA9IHRoaXMuc3J2Lm5vdGlmeSgpLnN1YnNjcmliZSgoKSA9PiB0aGlzLmluaXREZWxheSgpKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdERlbGF5KCkge1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHRoaXMudGltZSA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5pbml0KCksIHRoaXMuZGVsYXkpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0KCk6IHZvaWQge1xuICAgIGlmICghKHdpbmRvdyBhcyBhbnkpLlBseXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYE5vIHdpbmRvdy5QbHlyIGZvdW5kLCBwbGVhc2UgbWFrZSBzdXJlIHRoYXQgY2RuIG9yIGxvY2FsIHBhdGggZXhpc3RzLCB0aGUgY3VycmVudCByZWZlcmVuY2VkIHBhdGggaXM6ICR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgdGhpcy5zcnYuY29nLnVybHMsXG4gICAgICAgICl9YCxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgdGhpcy5lbnN1cmVFbGVtZW50KCk7XG5cbiAgICBjb25zdCBwbGF5ZXIgPSAodGhpcy5fcCA9IG5ldyBQbHlyKHRoaXMudmlkZW9FbCwge1xuICAgICAgLi4udGhpcy5zcnYuY29nLm9wdGlvbnMsXG4gICAgfSkpO1xuXG4gICAgcGxheWVyLm9uKCdyZWFkeScsICgpID0+IHRoaXMucmVhZHkubmV4dChwbGF5ZXIpKTtcblxuICAgIHRoaXMudXBsb2FkU291cmNlKCk7XG4gIH1cblxuICBwcml2YXRlIGVuc3VyZUVsZW1lbnQoKSB7XG4gICAgY29uc3QgeyB0eXBlIH0gPSB0aGlzO1xuICAgIGxldCBlbCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKHR5cGUpIGFzIEhUTUxFbGVtZW50O1xuICAgIGlmICghZWwpIHtcbiAgICAgIGVsID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgICAgKGVsIGFzIEhUTUxWaWRlb0VsZW1lbnQpLmNvbnRyb2xzID0gdHJ1ZTtcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5hcHBlbmRDaGlsZChlbCk7XG4gICAgfVxuICAgIHRoaXMudmlkZW9FbCA9IGVsO1xuICB9XG5cbiAgcHJpdmF0ZSBkZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9wKSB7XG4gICAgICB0aGlzLl9wLmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHVwbG9hZFNvdXJjZSgpOiB2b2lkIHtcbiAgICBjb25zdCB7IHNvdXJjZSwgdHlwZSB9ID0gdGhpcztcbiAgICB0aGlzLl9wLnNvdXJjZSA9IHR5cGVvZiBzb3VyY2UgPT09ICdzdHJpbmcnID8geyB0eXBlLCBzb3VyY2VzOiBbeyBzcmM6IHNvdXJjZSB9XSB9IDogc291cmNlO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zcnYubG9hZCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogeyBbcCBpbiBrZXlvZiBNZWRpYUNvbXBvbmVudF0/OiBTaW1wbGVDaGFuZ2UgfSk6IHZvaWQge1xuICAgIHRoaXMuc3J2LmNvZyA9IHsgb3B0aW9uczogdGhpcy5vcHRpb25zIH07XG4gICAgaWYgKGNoYW5nZXMuc291cmNlICYmIHRoaXMuX3ApIHtcbiAgICAgIHRoaXMudXBsb2FkU291cmNlKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZSk7XG4gICAgdGhpcy5kZXN0cm95KCk7XG4gICAgdGhpcy5fcCA9IG51bGw7XG4gICAgdGhpcy5ub3RpZnkkLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==