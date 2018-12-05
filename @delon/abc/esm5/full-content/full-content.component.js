/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, HostBinding, Inject, Input, Output, } from '@angular/core';
import { ActivationEnd, ActivationStart, Router } from '@angular/router';
import { InputBoolean, InputNumber } from '@delon/util';
import { fromEvent } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';
import { FullContentService } from './full-content.service';
/** @type {?} */
var wrapCls = "full-content__body";
/** @type {?} */
var openedCls = "full-content__opened";
/** @type {?} */
var hideTitleCls = "full-content__hidden-title";
var FullContentComponent = /** @class */ (function () {
    // #endregion
    function FullContentComponent(el, cdr, srv, router, doc) {
        this.el = el;
        this.cdr = cdr;
        this.srv = srv;
        this.router = router;
        this.doc = doc;
        this.inited = false;
        this.id = "_full-content-" + Math.random().toString(36).substring(2);
        this.scroll$ = null;
        this._height = 0;
        this.hideTitle = true;
        this.padding = 24;
        this.fullscreenChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    FullContentComponent.prototype.updateCls = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var clss = this.bodyEl.classList;
        if (this.fullscreen) {
            clss.add(openedCls);
            if (this.hideTitle) {
                clss.add(hideTitleCls);
            }
        }
        else {
            clss.remove(openedCls);
            if (this.hideTitle) {
                clss.remove(hideTitleCls);
            }
        }
    };
    /**
     * @return {?}
     */
    FullContentComponent.prototype.update = /**
     * @return {?}
     */
    function () {
        this.updateCls();
        this.updateHeight();
        this.fullscreenChange.emit(this.fullscreen);
    };
    /**
     * @return {?}
     */
    FullContentComponent.prototype.updateHeight = /**
     * @return {?}
     */
    function () {
        this._height = this.bodyEl.getBoundingClientRect().height - ((/** @type {?} */ (this.el.nativeElement))).getBoundingClientRect().top - this.padding;
        this.cdr.detectChanges();
    };
    /**
     * @return {?}
     */
    FullContentComponent.prototype.removeInBody = /**
     * @return {?}
     */
    function () {
        this.bodyEl.classList.remove(wrapCls, openedCls, hideTitleCls);
    };
    /**
     * @return {?}
     */
    FullContentComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.inited = true;
        this.bodyEl = this.doc.querySelector('body');
        this.bodyEl.classList.add(wrapCls);
        ((/** @type {?} */ (this.el.nativeElement))).id = this.id;
        this.updateCls();
        // when window resize
        this.scroll$ = fromEvent(window, 'resize')
            .pipe(debounceTime(200))
            .subscribe(function () { return _this.updateHeight(); });
        // when servier changed
        this.srv$ = this.srv.change
            .pipe(filter(function (res) { return res !== null; }))
            .subscribe(function () { return _this.toggle(); });
        // when router changed
        this.route$ = this.router.events
            .pipe(filter(function (e) { return e instanceof ActivationStart || e instanceof ActivationEnd; }), debounceTime(200))
            .subscribe(function () {
            if (!!_this.doc.querySelector('#' + _this.id)) {
                _this.bodyEl.classList.add(wrapCls);
                _this.updateCls();
            }
            else {
                _this.removeInBody();
            }
        });
    };
    /**
     * @return {?}
     */
    FullContentComponent.prototype.toggle = /**
     * @return {?}
     */
    function () {
        this.fullscreen = !this.fullscreen;
        this.update();
        this.updateHeight();
    };
    /**
     * @return {?}
     */
    FullContentComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout(function () { return _this.updateHeight(); });
    };
    /**
     * @return {?}
     */
    FullContentComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (this.inited)
            this.update();
    };
    /**
     * @return {?}
     */
    FullContentComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.removeInBody();
        this.scroll$.unsubscribe();
        this.srv$.unsubscribe();
        this.route$.unsubscribe();
    };
    FullContentComponent.decorators = [
        { type: Component, args: [{
                    selector: 'full-content',
                    template: "<ng-content></ng-content>",
                    host: { '[class.full-content]': 'true' },
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    FullContentComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: FullContentService },
        { type: Router },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    FullContentComponent.propDecorators = {
        _height: [{ type: HostBinding, args: ['style.height.px',] }],
        fullscreen: [{ type: Input }],
        hideTitle: [{ type: Input }],
        padding: [{ type: Input }],
        fullscreenChange: [{ type: Output }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], FullContentComponent.prototype, "fullscreen", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], FullContentComponent.prototype, "hideTitle", void 0);
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Object)
    ], FullContentComponent.prototype, "padding", void 0);
    return FullContentComponent;
}());
export { FullContentComponent };
if (false) {
    /** @type {?} */
    FullContentComponent.prototype.bodyEl;
    /** @type {?} */
    FullContentComponent.prototype.inited;
    /** @type {?} */
    FullContentComponent.prototype.srv$;
    /** @type {?} */
    FullContentComponent.prototype.route$;
    /** @type {?} */
    FullContentComponent.prototype.id;
    /** @type {?} */
    FullContentComponent.prototype.scroll$;
    /** @type {?} */
    FullContentComponent.prototype._height;
    /** @type {?} */
    FullContentComponent.prototype.fullscreen;
    /** @type {?} */
    FullContentComponent.prototype.hideTitle;
    /** @type {?} */
    FullContentComponent.prototype.padding;
    /** @type {?} */
    FullContentComponent.prototype.fullscreenChange;
    /** @type {?} */
    FullContentComponent.prototype.el;
    /** @type {?} */
    FullContentComponent.prototype.cdr;
    /** @type {?} */
    FullContentComponent.prototype.srv;
    /** @type {?} */
    FullContentComponent.prototype.router;
    /** @type {?} */
    FullContentComponent.prototype.doc;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbC1jb250ZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvZnVsbC1jb250ZW50LyIsInNvdXJjZXMiOlsiZnVsbC1jb250ZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixXQUFXLEVBQ1gsTUFBTSxFQUNOLEtBQUssRUFJTCxNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQVMsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEYsT0FBTyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDeEQsT0FBTyxFQUFFLFNBQVMsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7SUFFdEQsT0FBTyxHQUFHLG9CQUFvQjs7SUFDOUIsU0FBUyxHQUFHLHNCQUFzQjs7SUFDbEMsWUFBWSxHQUFHLDRCQUE0QjtBQUVqRDtJQXdCRSxhQUFhO0lBRWIsOEJBQ1UsRUFBYyxFQUNkLEdBQXNCLEVBQ3RCLEdBQXVCLEVBQ3ZCLE1BQWMsRUFFSSxHQUFRO1FBTDFCLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDZCxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN0QixRQUFHLEdBQUgsR0FBRyxDQUFvQjtRQUN2QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBRUksUUFBRyxHQUFILEdBQUcsQ0FBSztRQXhCNUIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUdmLE9BQUUs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QUMsV0FBVyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzVCLENBQUM7O2dCQXRIRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLElBQUksRUFBRSxFQUFFLHNCQUFzQixFQUFFLE1BQU0sRUFBRTtvQkFDeEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7O2dCQTFCQyxVQUFVO2dCQUZWLGlCQUFpQjtnQkFpQlYsa0JBQWtCO2dCQUxxQixNQUFNO2dEQTJDakQsTUFBTSxTQUFDLFFBQVE7OzswQkFsQmpCLFdBQVcsU0FBQyxpQkFBaUI7NkJBSzdCLEtBQUs7NEJBQ0wsS0FBSzswQkFDTCxLQUFLO21DQUNMLE1BQU07O0lBSGtCO1FBQWYsWUFBWSxFQUFFOzs0REFBcUI7SUFDcEI7UUFBZixZQUFZLEVBQUU7OzJEQUFrQjtJQUNsQjtRQUFkLFdBQVcsRUFBRTs7eURBQWM7SUFrR3ZDLDJCQUFDO0NBQUEsQUF2SEQsSUF1SEM7U0FqSFksb0JBQW9COzs7SUFDL0Isc0NBQTRCOztJQUM1QixzQ0FBdUI7O0lBQ3ZCLG9DQUEyQjs7SUFDM0Isc0NBQTZCOztJQUM3QixrQ0FBd0U7O0lBQ3hFLHVDQUFxQzs7SUFFckMsdUNBQ1k7O0lBSVosMENBQTZDOztJQUM3Qyx5Q0FBMEM7O0lBQzFDLHVDQUFxQzs7SUFDckMsZ0RBQWtFOztJQUtoRSxrQ0FBc0I7O0lBQ3RCLG1DQUE4Qjs7SUFDOUIsbUNBQStCOztJQUMvQixzQ0FBc0I7O0lBRXRCLG1DQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RCaW5kaW5nLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGlvbkVuZCwgQWN0aXZhdGlvblN0YXJ0LCBFdmVudCwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEZ1bGxDb250ZW50U2VydmljZSB9IGZyb20gJy4vZnVsbC1jb250ZW50LnNlcnZpY2UnO1xuXG5jb25zdCB3cmFwQ2xzID0gYGZ1bGwtY29udGVudF9fYm9keWA7XG5jb25zdCBvcGVuZWRDbHMgPSBgZnVsbC1jb250ZW50X19vcGVuZWRgO1xuY29uc3QgaGlkZVRpdGxlQ2xzID0gYGZ1bGwtY29udGVudF9faGlkZGVuLXRpdGxlYDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZnVsbC1jb250ZW50JyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcbiAgaG9zdDogeyAnW2NsYXNzLmZ1bGwtY29udGVudF0nOiAndHJ1ZScgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEZ1bGxDb250ZW50Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgYm9keUVsOiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBpbml0ZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBzcnYkOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgcm91dGUkOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgaWQgPSBgX2Z1bGwtY29udGVudC0ke01hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZygyKX1gO1xuICBwcml2YXRlIHNjcm9sbCQ6IFN1YnNjcmlwdGlvbiA9IG51bGw7XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5oZWlnaHQucHgnKVxuICBfaGVpZ2h0ID0gMDtcblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBmdWxsc2NyZWVuOiBib29sZWFuO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgaGlkZVRpdGxlID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgcGFkZGluZyA9IDI0O1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgZnVsbHNjcmVlbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBzcnY6IEZ1bGxDb250ZW50U2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogYW55LFxuICApIHsgfVxuXG4gIHByaXZhdGUgdXBkYXRlQ2xzKCkge1xuICAgIGNvbnN0IGNsc3MgPSB0aGlzLmJvZHlFbC5jbGFzc0xpc3Q7XG4gICAgaWYgKHRoaXMuZnVsbHNjcmVlbikge1xuICAgICAgY2xzcy5hZGQob3BlbmVkQ2xzKTtcbiAgICAgIGlmICh0aGlzLmhpZGVUaXRsZSkge1xuICAgICAgICBjbHNzLmFkZChoaWRlVGl0bGVDbHMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjbHNzLnJlbW92ZShvcGVuZWRDbHMpO1xuICAgICAgaWYgKHRoaXMuaGlkZVRpdGxlKSB7XG4gICAgICAgIGNsc3MucmVtb3ZlKGhpZGVUaXRsZUNscyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGUoKSB7XG4gICAgdGhpcy51cGRhdGVDbHMoKTtcbiAgICB0aGlzLnVwZGF0ZUhlaWdodCgpO1xuICAgIHRoaXMuZnVsbHNjcmVlbkNoYW5nZS5lbWl0KHRoaXMuZnVsbHNjcmVlbik7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUhlaWdodCgpIHtcbiAgICB0aGlzLl9oZWlnaHQgPSB0aGlzLmJvZHlFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQgLSAodGhpcy5lbC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgLSB0aGlzLnBhZGRpbmc7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVJbkJvZHkoKSB7XG4gICAgdGhpcy5ib2R5RWwuY2xhc3NMaXN0LnJlbW92ZSh3cmFwQ2xzLCBvcGVuZWRDbHMsIGhpZGVUaXRsZUNscyk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmluaXRlZCA9IHRydWU7XG4gICAgdGhpcy5ib2R5RWwgPSB0aGlzLmRvYy5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgdGhpcy5ib2R5RWwuY2xhc3NMaXN0LmFkZCh3cmFwQ2xzKTtcbiAgICAodGhpcy5lbC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5pZCA9IHRoaXMuaWQ7XG5cbiAgICB0aGlzLnVwZGF0ZUNscygpO1xuXG4gICAgLy8gd2hlbiB3aW5kb3cgcmVzaXplXG4gICAgdGhpcy5zY3JvbGwkID0gZnJvbUV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScpXG4gICAgICAucGlwZShkZWJvdW5jZVRpbWUoMjAwKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy51cGRhdGVIZWlnaHQoKSk7XG5cbiAgICAvLyB3aGVuIHNlcnZpZXIgY2hhbmdlZFxuICAgIHRoaXMuc3J2JCA9IHRoaXMuc3J2LmNoYW5nZVxuICAgICAgLnBpcGUoZmlsdGVyKHJlcyA9PiByZXMgIT09IG51bGwpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLnRvZ2dsZSgpKTtcblxuICAgIC8vIHdoZW4gcm91dGVyIGNoYW5nZWRcbiAgICB0aGlzLnJvdXRlJCA9IHRoaXMucm91dGVyLmV2ZW50c1xuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcigoZTogRXZlbnQpID0+IGUgaW5zdGFuY2VvZiBBY3RpdmF0aW9uU3RhcnQgfHwgZSBpbnN0YW5jZW9mIEFjdGl2YXRpb25FbmQpLFxuICAgICAgICBkZWJvdW5jZVRpbWUoMjAwKSxcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBpZiAoISF0aGlzLmRvYy5xdWVyeVNlbGVjdG9yKCcjJyArIHRoaXMuaWQpKSB7XG4gICAgICAgICAgdGhpcy5ib2R5RWwuY2xhc3NMaXN0LmFkZCh3cmFwQ2xzKTtcbiAgICAgICAgICB0aGlzLnVwZGF0ZUNscygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucmVtb3ZlSW5Cb2R5KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgdG9nZ2xlKCkge1xuICAgIHRoaXMuZnVsbHNjcmVlbiA9ICF0aGlzLmZ1bGxzY3JlZW47XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgICB0aGlzLnVwZGF0ZUhlaWdodCgpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy51cGRhdGVIZWlnaHQoKSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pbml0ZWQpIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnJlbW92ZUluQm9keSgpO1xuICAgIHRoaXMuc2Nyb2xsJC51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuc3J2JC51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMucm91dGUkLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==