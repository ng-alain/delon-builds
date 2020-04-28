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
        function () {
            if (_this.delay > 0) {
                setTimeout((/**
                 * @return {?}
                 */
                function () { return _this.init(); }), _this.delay);
            }
            else {
                _this.init();
            }
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
        if (!Plyr) {
            throw new Error("No Plyr object was found, please make sure that cdn or local path exists, the current referenced path is: " + JSON.stringify(this.srv.cog.urls));
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
        var _this = this;
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            var _a = _this, source = _a.source, type = _a.type;
            _this._p.source = typeof source === 'string' ? { type: type, sources: [{ source: source }] } : source;
        }));
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
                    template: "",
                    host: {
                        '[class.d-block]': 'true',
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
        source: [{ type: Input }],
        type: [{ type: Input }],
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
    MediaComponent.prototype.source;
    /** @type {?} */
    MediaComponent.prototype.type;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9tZWRpYS8iLCJzb3VyY2VzIjpbIm1lZGlhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBR04sTUFBTSxFQUNOLFNBQVMsRUFFVCxpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUUxQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFLL0M7SUE2QkUsd0JBQW9CLEVBQTJCLEVBQVUsUUFBbUIsRUFBVSxHQUFpQixFQUFVLE1BQWM7UUFBM0csT0FBRSxHQUFGLEVBQUUsQ0FBeUI7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBYztRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFYdEgsU0FBSSxHQUFrQixPQUFPLENBQUM7UUFFZixVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFhLENBQUM7SUFReUUsQ0FBQztJQUpuSSxzQkFBSSxrQ0FBTTtRQUZWLGFBQWE7Ozs7OztRQUViO1lBQ0UsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ2pCLENBQUM7OztPQUFBOzs7OztJQUlPLGtDQUFTOzs7O0lBQWpCO1FBQUEsaUJBUUM7UUFQQyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQjs7O1FBQUM7WUFDNUIsSUFBSSxLQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRTtnQkFDbEIsVUFBVTs7O2dCQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsSUFBSSxFQUFFLEVBQVgsQ0FBVyxHQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzth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SCxDQUFDOzs7O0lBRUQsb0NBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7O2dCQXpHRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLE9BQU87b0JBQ2pCLFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFFBQVEsRUFBRSxFQUFFO29CQUNaLElBQUksRUFBRTt3QkFDSixpQkFBaUIsRUFBRSxNQUFNO3FCQUMxQjtvQkFDRCxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3RDOzs7O2dCQTVCQyxVQUFVO2dCQU9WLFNBQVM7Z0JBTUYsWUFBWTtnQkFWbkIsTUFBTTs7O3lCQWdDTCxLQUFLO3VCQUNMLEtBQUs7MEJBQ0wsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLE1BQU07O0lBRGlCO1FBQWQsV0FBVyxFQUFFOztpREFBVztJQXNGcEMscUJBQUM7Q0FBQSxBQTFHRCxJQTBHQztTQS9GWSxjQUFjOzs7Ozs7SUFDekIsNEJBQXNCOzs7OztJQUN0QixpQ0FBNkI7O0lBSTdCLGdDQUFzQzs7SUFDdEMsOEJBQXVDOztJQUN2QyxpQ0FBNEI7O0lBQzVCLCtCQUFrQzs7SUFDbEMsK0JBQXlEOzs7OztJQVE3Qyw0QkFBbUM7Ozs7O0lBQUUsa0NBQTJCOzs7OztJQUFFLDZCQUF5Qjs7Ozs7SUFBRSxnQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbnB1dE51bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBNZWRpYVNlcnZpY2UgfSBmcm9tICcuL21lZGlhLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGx5ck1lZGlhVHlwZSB9IGZyb20gJy4vcGx5ci50eXBlcyc7XG5cbmRlY2xhcmUgY29uc3QgUGx5cjogTnpTYWZlQW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZWRpYScsXG4gIGV4cG9ydEFzOiAnbWVkaWFDb21wb25lbnQnLFxuICB0ZW1wbGF0ZTogYGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmQtYmxvY2tdJzogJ3RydWUnLFxuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIE1lZGlhQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9wOiBOelNhZmVBbnk7XG4gIHByaXZhdGUgdmlkZW9FbDogSFRNTEVsZW1lbnQ7XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBASW5wdXQoKSBzb3VyY2U6IHN0cmluZyB8IE1lZGlhU291cmNlO1xuICBASW5wdXQoKSB0eXBlOiBQbHlyTWVkaWFUeXBlID0gJ3ZpZGVvJztcbiAgQElucHV0KCkgb3B0aW9uczogTnpTYWZlQW55O1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBkZWxheSA9IDA7XG4gIEBPdXRwdXQoKSByZWFkb25seSByZWFkeSA9IG5ldyBFdmVudEVtaXR0ZXI8TnpTYWZlQW55PigpO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBnZXQgcGxheWVyKCk6IE56U2FmZUFueSB7XG4gICAgcmV0dXJuIHRoaXMuX3A7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIHNydjogTWVkaWFTZXJ2aWNlLCBwcml2YXRlIG5nWm9uZTogTmdab25lKSB7fVxuXG4gIHByaXZhdGUgaW5pdERlbGF5KCkge1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLmRlbGF5ID4gMCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5pdCgpLCB0aGlzLmRlbGF5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0KCk6IHZvaWQge1xuICAgIGlmICghUGx5cikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgTm8gUGx5ciBvYmplY3Qgd2FzIGZvdW5kLCBwbGVhc2UgbWFrZSBzdXJlIHRoYXQgY2RuIG9yIGxvY2FsIHBhdGggZXhpc3RzLCB0aGUgY3VycmVudCByZWZlcmVuY2VkIHBhdGggaXM6ICR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgdGhpcy5zcnYuY29nLnVybHMsXG4gICAgICAgICl9YCxcbiAgICAgICk7XG4gICAgfVxuICAgIHRoaXMuZW5zdXJlRWxlbWVudCgpO1xuXG4gICAgY29uc3QgcGxheWVyID0gKHRoaXMuX3AgPSBuZXcgUGx5cih0aGlzLnZpZGVvRWwsIHtcbiAgICAgIC4uLnRoaXMuc3J2LmNvZy5vcHRpb25zLFxuICAgIH0pKTtcblxuICAgIHBsYXllci5vbigncmVhZHknLCAoKSA9PiB0aGlzLnJlYWR5Lm5leHQocGxheWVyKSk7XG5cbiAgICB0aGlzLnVwbG9hZFNvdXJjZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBlbnN1cmVFbGVtZW50KCkge1xuICAgIGNvbnN0IHsgdHlwZSB9ID0gdGhpcztcbiAgICBsZXQgZWwgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3Rvcih0eXBlKSBhcyBIVE1MRWxlbWVudDtcbiAgICBpZiAoIWVsKSB7XG4gICAgICBlbCA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICAgIChlbCBhcyBIVE1MVmlkZW9FbGVtZW50KS5jb250cm9scyA9IHRydWU7XG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZWwpO1xuICAgIH1cbiAgICB0aGlzLnZpZGVvRWwgPSBlbDtcbiAgfVxuXG4gIHByaXZhdGUgZGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fcCkge1xuICAgICAgdGhpcy5fcC5kZXN0cm95KCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1cGxvYWRTb3VyY2UoKTogdm9pZCB7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgY29uc3QgeyBzb3VyY2UsIHR5cGUgfSA9IHRoaXM7XG4gICAgICB0aGlzLl9wLnNvdXJjZSA9IHR5cGVvZiBzb3VyY2UgPT09ICdzdHJpbmcnID8geyB0eXBlLCBzb3VyY2VzOiBbeyBzb3VyY2UgfV0gfSA6IHNvdXJjZTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoKHdpbmRvdyBhcyBhbnkpLlBseXIpIHtcbiAgICAgIHRoaXMuaW5pdERlbGF5KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zcnZcbiAgICAgIC5sb2FkKClcbiAgICAgIC5ub3RpZnkoKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmluaXREZWxheSgpKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgW3AgaW4ga2V5b2YgTWVkaWFDb21wb25lbnRdPzogU2ltcGxlQ2hhbmdlIH0pOiB2b2lkIHtcbiAgICB0aGlzLnNydi5jb2cgPSB7IG9wdGlvbnM6IHRoaXMub3B0aW9ucyB9O1xuICAgIGlmIChjaGFuZ2VzLnNvdXJjZSAmJiB0aGlzLl9wKSB7XG4gICAgICB0aGlzLnVwbG9hZFNvdXJjZSgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSgpO1xuICB9XG59XG4iXX0=