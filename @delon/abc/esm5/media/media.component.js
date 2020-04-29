/**
 * @fileoverview added by tsickle
 * Generated from: media.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __assign, __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, NgZone, Output, Renderer2, ViewEncapsulation, } from '@angular/core';
import { InputNumber } from '@delon/util';
import { MediaService } from './media.service';
var MediaComponent = /** @class */ (function () {
    function MediaComponent(el, renderer, srv, ngZone) {
        this.el = el;
        this.renderer = renderer;
        this.srv = srv;
        this.ngZone = ngZone;
        // #region fields
        this.type = 'video';
        this.delay = 0;
        this.ready = new EventEmitter();
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
        function () { return setTimeout((/**
         * @return {?}
         */
        function () { return _this.init(); }), _this.delay); }));
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
        var player = (this._p = new Plyr(this.videoEl, __assign(__assign({}, this.srv.cog.options), { debug: true })));
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
        var _this = this;
        if (((/** @type {?} */ (window))).Plyr) {
            this.initDelay();
            return;
        }
        this.srv
            .load()
            .notify()
            .subscribe((/**
         * @return {?}
         */
        function () { return _this.initDelay(); }));
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
        this.destroy();
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
        { type: NgZone }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9tZWRpYS8iLCJzb3VyY2VzIjpbIm1lZGlhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBR04sTUFBTSxFQUNOLFNBQVMsRUFFVCxpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUUxQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFLL0M7SUE2QkUsd0JBQW9CLEVBQTJCLEVBQVUsUUFBbUIsRUFBVSxHQUFpQixFQUFVLE1BQWM7UUFBM0csT0FBRSxHQUFGLEVBQUUsQ0FBeUI7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBYztRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7O1FBWnRILFNBQUksR0FBa0IsT0FBTyxDQUFDO1FBR2YsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNmLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDO0lBUXlFLENBQUM7SUFKbkksc0JBQUksa0NBQU07UUFGVixhQUFhOzs7Ozs7UUFFYjtZQUNFLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNqQixDQUFDOzs7T0FBQTs7Ozs7SUFJTyxrQ0FBUzs7OztJQUFqQjtRQUFBLGlCQUVDO1FBREMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUI7OztRQUFDLGNBQU0sT0FBQSxVQUFVOzs7UUFBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLElBQUksRUFBRSxFQUFYLENBQVcsR0FBRSxLQUFJLENBQUMsS0FBSyxDQUFDLEVBQXpDLENBQXlDLEVBQUMsQ0FBQztJQUNqRixDQUFDOzs7OztJQUVPLDZC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RSxPQUFPO29CQUNqQixRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxJQUFJLEVBQUU7d0JBQ0osaUJBQWlCLEVBQUUsU0FBUztxQkFDN0I7b0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUN0Qzs7OztnQkE1QkMsVUFBVTtnQkFPVixTQUFTO2dCQU1GLFlBQVk7Z0JBVm5CLE1BQU07Ozt1QkFnQ0wsS0FBSzt5QkFDTCxLQUFLOzBCQUNMLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxNQUFNOztJQURpQjtRQUFkLFdBQVcsRUFBRTs7aURBQVc7SUFnRnBDLHFCQUFDO0NBQUEsQUFwR0QsSUFvR0M7U0F6RlksY0FBYzs7Ozs7O0lBQ3pCLDRCQUFzQjs7Ozs7SUFDdEIsaUNBQTZCOztJQUk3Qiw4QkFBdUM7O0lBQ3ZDLGdDQUFzQzs7SUFDdEMsaUNBQTRCOztJQUM1QiwrQkFBa0M7O0lBQ2xDLCtCQUF5RDs7Ozs7SUFRN0MsNEJBQW1DOzs7OztJQUFFLGtDQUEyQjs7Ozs7SUFBRSw2QkFBeUI7Ozs7O0lBQUUsZ0NBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFNpbXBsZUNoYW5nZSxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgTWVkaWFTZXJ2aWNlIH0gZnJvbSAnLi9tZWRpYS5zZXJ2aWNlJztcbmltcG9ydCB7IFBseXJNZWRpYVR5cGUgfSBmcm9tICcuL3BseXIudHlwZXMnO1xuXG5kZWNsYXJlIGNvbnN0IFBseXI6IE56U2FmZUFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWVkaWEnLFxuICBleHBvcnRBczogJ21lZGlhQ29tcG9uZW50JyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcbiAgaG9zdDoge1xuICAgICdbc3R5bGUuZGlzcGxheV0nOiBgJ2Jsb2NrJ2AsXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgTWVkaWFDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX3A6IE56U2FmZUFueTtcbiAgcHJpdmF0ZSB2aWRlb0VsOiBIVE1MRWxlbWVudDtcblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIEBJbnB1dCgpIHR5cGU6IFBseXJNZWRpYVR5cGUgPSAndmlkZW8nO1xuICBASW5wdXQoKSBzb3VyY2U6IHN0cmluZyB8IE1lZGlhU291cmNlO1xuICBASW5wdXQoKSBvcHRpb25zOiBOelNhZmVBbnk7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGRlbGF5ID0gMDtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHJlYWR5ID0gbmV3IEV2ZW50RW1pdHRlcjxOelNhZmVBbnk+KCk7XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGdldCBwbGF5ZXIoKTogTnpTYWZlQW55IHtcbiAgICByZXR1cm4gdGhpcy5fcDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgc3J2OiBNZWRpYVNlcnZpY2UsIHByaXZhdGUgbmdab25lOiBOZ1pvbmUpIHt9XG5cbiAgcHJpdmF0ZSBpbml0RGVsYXkoKSB7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmluaXQoKSwgdGhpcy5kZWxheSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0KCk6IHZvaWQge1xuICAgIGlmICghKHdpbmRvdyBhcyBhbnkpLlBseXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYE5vIHdpbmRvdy5QbHlyIGZvdW5kLCBwbGVhc2UgbWFrZSBzdXJlIHRoYXQgY2RuIG9yIGxvY2FsIHBhdGggZXhpc3RzLCB0aGUgY3VycmVudCByZWZlcmVuY2VkIHBhdGggaXM6ICR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgdGhpcy5zcnYuY29nLnVybHMsXG4gICAgICAgICl9YCxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgdGhpcy5lbnN1cmVFbGVtZW50KCk7XG5cbiAgICBjb25zdCBwbGF5ZXIgPSAodGhpcy5fcCA9IG5ldyBQbHlyKHRoaXMudmlkZW9FbCwge1xuICAgICAgLi4udGhpcy5zcnYuY29nLm9wdGlvbnMsXG4gICAgICBkZWJ1ZzogdHJ1ZSxcbiAgICB9KSk7XG5cbiAgICBwbGF5ZXIub24oJ3JlYWR5JywgKCkgPT4gdGhpcy5yZWFkeS5uZXh0KHBsYXllcikpO1xuXG4gICAgdGhpcy51cGxvYWRTb3VyY2UoKTtcbiAgfVxuXG4gIHByaXZhdGUgZW5zdXJlRWxlbWVudCgpIHtcbiAgICBjb25zdCB7IHR5cGUgfSA9IHRoaXM7XG4gICAgbGV0IGVsID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IodHlwZSkgYXMgSFRNTEVsZW1lbnQ7XG4gICAgaWYgKCFlbCkge1xuICAgICAgZWwgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgICAoZWwgYXMgSFRNTFZpZGVvRWxlbWVudCkuY29udHJvbHMgPSB0cnVlO1xuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmFwcGVuZENoaWxkKGVsKTtcbiAgICB9XG4gICAgdGhpcy52aWRlb0VsID0gZWw7XG4gIH1cblxuICBwcml2YXRlIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3ApIHtcbiAgICAgIHRoaXMuX3AuZGVzdHJveSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdXBsb2FkU291cmNlKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgc291cmNlLCB0eXBlIH0gPSB0aGlzO1xuICAgIHRoaXMuX3Auc291cmNlID0gdHlwZW9mIHNvdXJjZSA9PT0gJ3N0cmluZycgPyB7IHR5cGUsIHNvdXJjZXM6IFt7IHNyYzogc291cmNlIH1dIH0gOiBzb3VyY2U7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgaWYgKCh3aW5kb3cgYXMgYW55KS5QbHlyKSB7XG4gICAgICB0aGlzLmluaXREZWxheSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc3J2XG4gICAgICAubG9hZCgpXG4gICAgICAubm90aWZ5KClcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5pbml0RGVsYXkoKSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtwIGluIGtleW9mIE1lZGlhQ29tcG9uZW50XT86IFNpbXBsZUNoYW5nZSB9KTogdm9pZCB7XG4gICAgdGhpcy5zcnYuY29nID0geyBvcHRpb25zOiB0aGlzLm9wdGlvbnMgfTtcbiAgICBpZiAoY2hhbmdlcy5zb3VyY2UgJiYgdGhpcy5fcCkge1xuICAgICAgdGhpcy51cGxvYWRTb3VyY2UoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3koKTtcbiAgfVxufVxuIl19