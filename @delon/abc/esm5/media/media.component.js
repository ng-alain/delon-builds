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
        var _this = this;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9tZWRpYS8iLCJzb3VyY2VzIjpbIm1lZGlhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBR04sTUFBTSxFQUNOLFNBQVMsRUFFVCxpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUcxQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFLL0M7SUErQkUsd0JBQW9CLEVBQTJCLEVBQVUsUUFBbUIsRUFBVSxHQUFpQixFQUFVLE1BQWM7UUFBL0gsaUJBRUM7UUFGbUIsT0FBRSxHQUFGLEVBQUUsQ0FBeUI7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBYztRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7O1FBWnRILFNBQUksR0FBa0IsT0FBTyxDQUFDO1FBR2YsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNmLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDO1FBU3ZELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxTQUFTOzs7UUFBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFNBQVMsRUFBRSxFQUFoQixDQUFnQixFQUFDLENBQUM7SUFDckUsQ0FBQztJQU5ELHNCQUFJLGtDQUFNO1FBRlYsYUFBYTs7Ozs7O1FBRWI7WUFDRSxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDakIsQ0FBQzs7O09BQUE7Ozs7O0lBTU8sa0NBQVM7Ozs7SUFBakI7UUFBQSxpQkFJQztRQUhDLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCOzs7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QUFDLFdBQVcsRUFBRSxDQUFDO0lBQzdCLENBQUM7O2dCQW5HRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLE9BQU87b0JBQ2pCLFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLElBQUksRUFBRTt3QkFDSixpQkFBaUIsRUFBRSxTQUFTO3FCQUM3QjtvQkFDRCxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3RDOzs7O2dCQTdCQyxVQUFVO2dCQU9WLFNBQVM7Z0JBT0YsWUFBWTtnQkFYbkIsTUFBTTs7O3VCQW1DTCxLQUFLO3lCQUNMLEtBQUs7MEJBQ0wsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLE1BQU07O0lBRGlCO1FBQWQsV0FBVyxFQUFFOztpREFBVztJQThFcEMscUJBQUM7Q0FBQSxBQXBHRCxJQW9HQztTQXpGWSxjQUFjOzs7Ozs7SUFDekIsNEJBQXNCOzs7OztJQUN0QixpQ0FBNkI7Ozs7O0lBQzdCLDhCQUF3Qjs7Ozs7SUFDeEIsaUNBQThCOztJQUk5Qiw4QkFBdUM7O0lBQ3ZDLGdDQUEwQzs7SUFDMUMsaUNBQTRCOztJQUM1QiwrQkFBa0M7O0lBQ2xDLCtCQUF5RDs7Ozs7SUFRN0MsNEJBQW1DOzs7OztJQUFFLGtDQUEyQjs7Ozs7SUFBRSw2QkFBeUI7Ozs7O0lBQUUsZ0NBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFNpbXBsZUNoYW5nZSxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBNZWRpYVNlcnZpY2UgfSBmcm9tICcuL21lZGlhLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGx5ck1lZGlhU291cmNlLCBQbHlyTWVkaWFUeXBlIH0gZnJvbSAnLi9wbHlyLnR5cGVzJztcblxuZGVjbGFyZSBjb25zdCBQbHlyOiBOelNhZmVBbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21lZGlhJyxcbiAgZXhwb3J0QXM6ICdtZWRpYUNvbXBvbmVudCcsXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmAsXG4gIGhvc3Q6IHtcbiAgICAnW3N0eWxlLmRpc3BsYXldJzogYCdibG9jaydgLFxuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIE1lZGlhQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9wOiBOelNhZmVBbnk7XG4gIHByaXZhdGUgdmlkZW9FbDogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgdGltZTogTnpTYWZlQW55O1xuICBwcml2YXRlIG5vdGlmeSQ6IFN1YnNjcmlwdGlvbjtcblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIEBJbnB1dCgpIHR5cGU6IFBseXJNZWRpYVR5cGUgPSAndmlkZW8nO1xuICBASW5wdXQoKSBzb3VyY2U6IHN0cmluZyB8IFBseXJNZWRpYVNvdXJjZTtcbiAgQElucHV0KCkgb3B0aW9uczogTnpTYWZlQW55O1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBkZWxheSA9IDA7XG4gIEBPdXRwdXQoKSByZWFkb25seSByZWFkeSA9IG5ldyBFdmVudEVtaXR0ZXI8TnpTYWZlQW55PigpO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBnZXQgcGxheWVyKCk6IE56U2FmZUFueSB7XG4gICAgcmV0dXJuIHRoaXMuX3A7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIHNydjogTWVkaWFTZXJ2aWNlLCBwcml2YXRlIG5nWm9uZTogTmdab25lKSB7XG4gICAgdGhpcy5ub3RpZnkkID0gdGhpcy5zcnYubm90aWZ5KCkuc3Vic2NyaWJlKCgpID0+IHRoaXMuaW5pdERlbGF5KCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0RGVsYXkoKSB7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgdGhpcy50aW1lID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLmluaXQoKSwgdGhpcy5kZWxheSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGluaXQoKTogdm9pZCB7XG4gICAgaWYgKCEod2luZG93IGFzIGFueSkuUGx5cikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgTm8gd2luZG93LlBseXIgZm91bmQsIHBsZWFzZSBtYWtlIHN1cmUgdGhhdCBjZG4gb3IgbG9jYWwgcGF0aCBleGlzdHMsIHRoZSBjdXJyZW50IHJlZmVyZW5jZWQgcGF0aCBpczogJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICB0aGlzLnNydi5jb2cudXJscyxcbiAgICAgICAgKX1gLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICB0aGlzLmVuc3VyZUVsZW1lbnQoKTtcblxuICAgIGNvbnN0IHBsYXllciA9ICh0aGlzLl9wID0gbmV3IFBseXIodGhpcy52aWRlb0VsLCB7XG4gICAgICAuLi50aGlzLnNydi5jb2cub3B0aW9ucyxcbiAgICB9KSk7XG5cbiAgICBwbGF5ZXIub24oJ3JlYWR5JywgKCkgPT4gdGhpcy5yZWFkeS5uZXh0KHBsYXllcikpO1xuXG4gICAgdGhpcy51cGxvYWRTb3VyY2UoKTtcbiAgfVxuXG4gIHByaXZhdGUgZW5zdXJlRWxlbWVudCgpIHtcbiAgICBjb25zdCB7IHR5cGUgfSA9IHRoaXM7XG4gICAgbGV0IGVsID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IodHlwZSkgYXMgSFRNTEVsZW1lbnQ7XG4gICAgaWYgKCFlbCkge1xuICAgICAgZWwgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgICAoZWwgYXMgSFRNTFZpZGVvRWxlbWVudCkuY29udHJvbHMgPSB0cnVlO1xuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmFwcGVuZENoaWxkKGVsKTtcbiAgICB9XG4gICAgdGhpcy52aWRlb0VsID0gZWw7XG4gIH1cblxuICBwcml2YXRlIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3ApIHtcbiAgICAgIHRoaXMuX3AuZGVzdHJveSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdXBsb2FkU291cmNlKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgc291cmNlLCB0eXBlIH0gPSB0aGlzO1xuICAgIHRoaXMuX3Auc291cmNlID0gdHlwZW9mIHNvdXJjZSA9PT0gJ3N0cmluZycgPyB7IHR5cGUsIHNvdXJjZXM6IFt7IHNyYzogc291cmNlIH1dIH0gOiBzb3VyY2U7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zcnYubG9hZCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogeyBbcCBpbiBrZXlvZiBNZWRpYUNvbXBvbmVudF0/OiBTaW1wbGVDaGFuZ2UgfSk6IHZvaWQge1xuICAgIHRoaXMuc3J2LmNvZyA9IHsgb3B0aW9uczogdGhpcy5vcHRpb25zIH07XG4gICAgaWYgKGNoYW5nZXMuc291cmNlICYmIHRoaXMuX3ApIHtcbiAgICAgIHRoaXMudXBsb2FkU291cmNlKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZSk7XG4gICAgdGhpcy5kZXN0cm95KCk7XG4gICAgdGhpcy5fcCA9IG51bGw7XG4gICAgdGhpcy5ub3RpZnkkLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==