/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, Input, Output, EventEmitter, Inject, HostBinding, } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router, ActivationStart, ActivationEnd } from '@angular/router';
import { fromEvent } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';
import { InputBoolean, InputNumber } from '@delon/util';
import { FullContentService } from './full-content.service';
/** @type {?} */
var wrapCls = "full-content__body";
/** @type {?} */
var openedCls = "full-content__opened";
/** @type {?} */
var hideTitleCls = "full-content__hidden-title";
var FullContentComponent = /** @class */ (function () {
    // #endregion
    function FullContentComponent(el, cd, srv, router, doc) {
        this.el = el;
        this.cd = cd;
        this.srv = srv;
        this.router = router;
        this.doc = doc;
        this.inited = false;
        this.id = "_full-content-" + Math.random()
            .toString(36)
            .substring(2);
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
        this._height =
            this.bodyEl.getBoundingClientRect().height -
                (/** @type {?} */ (this.el.nativeElement)).getBoundingClientRect().top -
                this.padding;
        this.cd.detectChanges();
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
        (/** @type {?} */ (this.el.nativeElement)).id = this.id;
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
            .pipe(filter(function (e) {
            return e instanceof ActivationStart || e instanceof ActivationEnd;
        }), debounceTime(200))
            .subscribe(function (e) {
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
    FullContentComponent.prototype.cd;
    /** @type {?} */
    FullContentComponent.prototype.srv;
    /** @type {?} */
    FullContentComponent.prototype.router;
    /** @type {?} */
    FullContentComponent.prototype.doc;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbC1jb250ZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvZnVsbC1jb250ZW50LyIsInNvdXJjZXMiOlsiZnVsbC1jb250ZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBR1osTUFBTSxFQUNOLFdBQVcsR0FHWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekUsT0FBTyxFQUFnQixTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUV4RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7QUFFNUQsSUFBTSxPQUFPLEdBQUcsb0JBQW9CLENBQUM7O0FBQ3JDLElBQU0sU0FBUyxHQUFHLHNCQUFzQixDQUFDOztBQUN6QyxJQUFNLFlBQVksR0FBRyw0QkFBNEIsQ0FBQzs7SUF1Q2hELGFBQWE7SUFFYiw4QkFDVSxJQUNBLElBQ0EsS0FDQSxRQUNrQixHQUFRO1FBSjFCLE9BQUUsR0FBRixFQUFFO1FBQ0YsT0FBRSxHQUFGLEVBQUU7UUFDRixRQUFHLEdBQUgsR0FBRztRQUNILFdBQU0sR0FBTixNQUFNO1FBQ1ksUUFBRyxHQUFILEdBQUcsQ0FBSztzQkFuQ25CLEtBQUs7a0JBR1QsbUJBQWlCLElBQUksQ0FBQyxNQUFNLEVBQUU7YUFDeEMsUUFBUSxD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Q0FBQyxNQUFNO2lCQUNoRDs7OztnQkE5QkMsVUFBVTtnQkFFVixpQkFBaUI7Z0JBaUJWLGtCQUFrQjtnQkFMbEIsTUFBTTtnREF1RFYsTUFBTSxTQUFDLFFBQVE7OzswQkEzQmpCLFdBQVcsU0FBQyxpQkFBaUI7NkJBSzdCLEtBQUs7NEJBSUwsS0FBSzswQkFJTCxLQUFLO21DQUlMLE1BQU07OztRQVhOLFlBQVksRUFBRTs7OztRQUlkLFlBQVksRUFBRTs7OztRQUlkLFdBQVcsRUFBRTs7OytCQTFEaEI7O1NBaUNhLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBPbkNoYW5nZXMsXHJcbiAgT25Jbml0LFxyXG4gIEluamVjdCxcclxuICBIb3N0QmluZGluZyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRpb25TdGFydCwgQWN0aXZhdGlvbkVuZCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xyXG5cclxuaW1wb3J0IHsgRnVsbENvbnRlbnRTZXJ2aWNlIH0gZnJvbSAnLi9mdWxsLWNvbnRlbnQuc2VydmljZSc7XHJcblxyXG5jb25zdCB3cmFwQ2xzID0gYGZ1bGwtY29udGVudF9fYm9keWA7XHJcbmNvbnN0IG9wZW5lZENscyA9IGBmdWxsLWNvbnRlbnRfX29wZW5lZGA7XHJcbmNvbnN0IGhpZGVUaXRsZUNscyA9IGBmdWxsLWNvbnRlbnRfX2hpZGRlbi10aXRsZWA7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Z1bGwtY29udGVudCcsXHJcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcclxuICBob3N0OiB7ICdbY2xhc3MuZnVsbC1jb250ZW50XSc6ICd0cnVlJyB9LFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRnVsbENvbnRlbnRDb21wb25lbnRcclxuICBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgYm9keUVsOiBIVE1MRWxlbWVudDtcclxuICBwcml2YXRlIGluaXRlZCA9IGZhbHNlO1xyXG4gIHByaXZhdGUgc3J2JDogU3Vic2NyaXB0aW9uO1xyXG4gIHByaXZhdGUgcm91dGUkOiBTdWJzY3JpcHRpb247XHJcbiAgcHJpdmF0ZSBpZCA9IGBfZnVsbC1jb250ZW50LSR7TWF0aC5yYW5kb20oKVxyXG4gICAgLnRvU3RyaW5nKDM2KVxyXG4gICAgLnN1YnN0cmluZygyKX1gO1xyXG4gIHByaXZhdGUgc2Nyb2xsJDogU3Vic2NyaXB0aW9uID0gbnVsbDtcclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5oZWlnaHQucHgnKVxyXG4gIF9oZWlnaHQgPSAwO1xyXG5cclxuICAvLyAjcmVnaW9uIGZpZWxkc1xyXG5cclxuICBASW5wdXQoKVxyXG4gIEBJbnB1dEJvb2xlYW4oKVxyXG4gIGZ1bGxzY3JlZW46IGJvb2xlYW47XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgQElucHV0Qm9vbGVhbigpXHJcbiAgaGlkZVRpdGxlID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBASW5wdXROdW1iZXIoKVxyXG4gIHBhZGRpbmcgPSAyNDtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgZnVsbHNjcmVlbkNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBzcnY6IEZ1bGxDb250ZW50U2VydmljZSxcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogYW55LFxyXG4gICkge31cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVDbHMoKSB7XHJcbiAgICBjb25zdCBjbHNzID0gdGhpcy5ib2R5RWwuY2xhc3NMaXN0O1xyXG4gICAgaWYgKHRoaXMuZnVsbHNjcmVlbikge1xyXG4gICAgICBjbHNzLmFkZChvcGVuZWRDbHMpO1xyXG4gICAgICBpZiAodGhpcy5oaWRlVGl0bGUpIHtcclxuICAgICAgICBjbHNzLmFkZChoaWRlVGl0bGVDbHMpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjbHNzLnJlbW92ZShvcGVuZWRDbHMpO1xyXG4gICAgICBpZiAodGhpcy5oaWRlVGl0bGUpIHtcclxuICAgICAgICBjbHNzLnJlbW92ZShoaWRlVGl0bGVDbHMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZSgpIHtcclxuICAgIHRoaXMudXBkYXRlQ2xzKCk7XHJcbiAgICB0aGlzLnVwZGF0ZUhlaWdodCgpO1xyXG4gICAgdGhpcy5mdWxsc2NyZWVuQ2hhbmdlLmVtaXQodGhpcy5mdWxsc2NyZWVuKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlSGVpZ2h0KCkge1xyXG4gICAgdGhpcy5faGVpZ2h0ID1cclxuICAgICAgdGhpcy5ib2R5RWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0IC1cclxuICAgICAgKHRoaXMuZWwubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIC1cclxuICAgICAgdGhpcy5wYWRkaW5nO1xyXG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbW92ZUluQm9keSgpIHtcclxuICAgIHRoaXMuYm9keUVsLmNsYXNzTGlzdC5yZW1vdmUod3JhcENscywgb3BlbmVkQ2xzLCBoaWRlVGl0bGVDbHMpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmluaXRlZCA9IHRydWU7XHJcbiAgICB0aGlzLmJvZHlFbCA9IHRoaXMuZG9jLnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICAgIHRoaXMuYm9keUVsLmNsYXNzTGlzdC5hZGQod3JhcENscyk7XHJcbiAgICAodGhpcy5lbC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5pZCA9IHRoaXMuaWQ7XHJcblxyXG4gICAgdGhpcy51cGRhdGVDbHMoKTtcclxuXHJcbiAgICAvLyB3aGVuIHdpbmRvdyByZXNpemVcclxuICAgIHRoaXMuc2Nyb2xsJCA9IGZyb21FdmVudCh3aW5kb3csICdyZXNpemUnKVxyXG4gICAgICAucGlwZShkZWJvdW5jZVRpbWUoMjAwKSlcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLnVwZGF0ZUhlaWdodCgpKTtcclxuXHJcbiAgICAvLyB3aGVuIHNlcnZpZXIgY2hhbmdlZFxyXG4gICAgdGhpcy5zcnYkID0gdGhpcy5zcnYuY2hhbmdlXHJcbiAgICAgIC5waXBlKGZpbHRlcihyZXMgPT4gcmVzICE9PSBudWxsKSlcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLnRvZ2dsZSgpKTtcclxuXHJcbiAgICAvLyB3aGVuIHJvdXRlciBjaGFuZ2VkXHJcbiAgICB0aGlzLnJvdXRlJCA9IHRoaXMucm91dGVyLmV2ZW50c1xyXG4gICAgICAucGlwZShcclxuICAgICAgICBmaWx0ZXIoXHJcbiAgICAgICAgICAoZTogYW55KSA9PlxyXG4gICAgICAgICAgICBlIGluc3RhbmNlb2YgQWN0aXZhdGlvblN0YXJ0IHx8IGUgaW5zdGFuY2VvZiBBY3RpdmF0aW9uRW5kLFxyXG4gICAgICAgICksXHJcbiAgICAgICAgZGVib3VuY2VUaW1lKDIwMCksXHJcbiAgICAgIClcclxuICAgICAgLnN1YnNjcmliZShlID0+IHtcclxuICAgICAgICBpZiAoISF0aGlzLmRvYy5xdWVyeVNlbGVjdG9yKCcjJyArIHRoaXMuaWQpKSB7XHJcbiAgICAgICAgICB0aGlzLmJvZHlFbC5jbGFzc0xpc3QuYWRkKHdyYXBDbHMpO1xyXG4gICAgICAgICAgdGhpcy51cGRhdGVDbHMoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5yZW1vdmVJbkJvZHkoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlKCkge1xyXG4gICAgdGhpcy5mdWxsc2NyZWVuID0gIXRoaXMuZnVsbHNjcmVlbjtcclxuICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICB0aGlzLnVwZGF0ZUhlaWdodCgpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnVwZGF0ZUhlaWdodCgpKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaW5pdGVkKSB0aGlzLnVwZGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlbW92ZUluQm9keSgpO1xyXG4gICAgdGhpcy5zY3JvbGwkLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB0aGlzLnNydiQudW5zdWJzY3JpYmUoKTtcclxuICAgIHRoaXMucm91dGUkLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==