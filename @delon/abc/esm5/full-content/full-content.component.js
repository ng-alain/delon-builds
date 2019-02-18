/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Inject, Input, Output, } from '@angular/core';
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
                ((/** @type {?} */ (this.el.nativeElement))).getBoundingClientRect().top -
                this.padding;
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
        this.srv$ = this.srv.change.pipe(filter(function (res) { return res !== null; })).subscribe(function () { return _this.toggle(); });
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
                    template: "\n    <ng-content></ng-content>\n  ",
                    host: {
                        '[class.full-content]': 'true',
                        '[style.height.px]': '_height',
                    },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbC1jb250ZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvZnVsbC1jb250ZW50LyIsInNvdXJjZXMiOlsiZnVsbC1jb250ZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUlMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBUyxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRixPQUFPLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN4RCxPQUFPLEVBQUUsU0FBUyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXRELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztJQUV0RCxPQUFPLEdBQUcsb0JBQW9COztJQUM5QixTQUFTLEdBQUcsc0JBQXNCOztJQUNsQyxZQUFZLEdBQUcsNEJBQTRCO0FBRWpEO0lBOEJFLGFBQWE7SUFFYiw4QkFDVSxFQUFjLEVBQ2QsR0FBc0IsRUFDdEIsR0FBdUIsRUFDdkIsTUFBYyxFQUNJLEdBQVE7UUFKMUIsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNkLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3RCLFFBQUcsR0FBSCxHQUFHLENBQW9CO1FBQ3ZCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDSSxRQUFHLEdBQUgsR0FBRyxDQUFLO1FBeEI1QixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBR2YsT0FBRSxHQUFHLG1CQUFp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QUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzVCLENBQUM7O2dCQTVIRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFFBQVEsRUFBRSxxQ0FFVDtvQkFDRCxJQUFJLEVBQUU7d0JBQ0osc0JBQXNCLEVBQUUsTUFBTTt3QkFDOUIsbUJBQW1CLEVBQUUsU0FBUztxQkFDL0I7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7O2dCQTlCQyxVQUFVO2dCQUZWLGlCQUFpQjtnQkFnQlYsa0JBQWtCO2dCQUxxQixNQUFNO2dEQWdEakQsTUFBTSxTQUFDLFFBQVE7Ozs2QkFaakIsS0FBSzs0QkFDTCxLQUFLOzBCQUNMLEtBQUs7bUNBQ0wsTUFBTTs7SUFIa0I7UUFBZixZQUFZLEVBQUU7OzREQUFxQjtJQUNwQjtRQUFmLFlBQVksRUFBRTs7MkRBQWtCO0lBQ2xCO1FBQWQsV0FBVyxFQUFFOzt5REFBYztJQWtHdkMsMkJBQUM7Q0FBQSxBQTdIRCxJQTZIQztTQWxIWSxvQkFBb0I7OztJQUMvQixzQ0FBNEI7O0lBQzVCLHNDQUF1Qjs7SUFDdkIsb0NBQTJCOztJQUMzQixzQ0FBNkI7O0lBQzdCLGtDQUVrQjs7SUFDbEIsdUNBQXFDOztJQUVyQyx1Q0FBWTs7SUFJWiwwQ0FBNkM7O0lBQzdDLHlDQUEwQzs7SUFDMUMsdUNBQXFDOztJQUNyQyxnREFBa0U7O0lBS2hFLGtDQUFzQjs7SUFDdEIsbUNBQThCOztJQUM5QixtQ0FBK0I7O0lBQy9CLHNDQUFzQjs7SUFDdEIsbUNBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRpb25FbmQsIEFjdGl2YXRpb25TdGFydCwgRXZlbnQsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBGdWxsQ29udGVudFNlcnZpY2UgfSBmcm9tICcuL2Z1bGwtY29udGVudC5zZXJ2aWNlJztcblxuY29uc3Qgd3JhcENscyA9IGBmdWxsLWNvbnRlbnRfX2JvZHlgO1xuY29uc3Qgb3BlbmVkQ2xzID0gYGZ1bGwtY29udGVudF9fb3BlbmVkYDtcbmNvbnN0IGhpZGVUaXRsZUNscyA9IGBmdWxsLWNvbnRlbnRfX2hpZGRlbi10aXRsZWA7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Z1bGwtY29udGVudCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICBgLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5mdWxsLWNvbnRlbnRdJzogJ3RydWUnLFxuICAgICdbc3R5bGUuaGVpZ2h0LnB4XSc6ICdfaGVpZ2h0JyxcbiAgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEZ1bGxDb250ZW50Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgYm9keUVsOiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBpbml0ZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBzcnYkOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgcm91dGUkOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgaWQgPSBgX2Z1bGwtY29udGVudC0ke01hdGgucmFuZG9tKClcbiAgICAudG9TdHJpbmcoMzYpXG4gICAgLnN1YnN0cmluZygyKX1gO1xuICBwcml2YXRlIHNjcm9sbCQ6IFN1YnNjcmlwdGlvbiA9IG51bGw7XG5cbiAgX2hlaWdodCA9IDA7XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZnVsbHNjcmVlbjogYm9vbGVhbjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGhpZGVUaXRsZSA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHBhZGRpbmcgPSAyNDtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGZ1bGxzY3JlZW5DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgc3J2OiBGdWxsQ29udGVudFNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogYW55LFxuICApIHt9XG5cbiAgcHJpdmF0ZSB1cGRhdGVDbHMoKSB7XG4gICAgY29uc3QgY2xzcyA9IHRoaXMuYm9keUVsLmNsYXNzTGlzdDtcbiAgICBpZiAodGhpcy5mdWxsc2NyZWVuKSB7XG4gICAgICBjbHNzLmFkZChvcGVuZWRDbHMpO1xuICAgICAgaWYgKHRoaXMuaGlkZVRpdGxlKSB7XG4gICAgICAgIGNsc3MuYWRkKGhpZGVUaXRsZUNscyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNsc3MucmVtb3ZlKG9wZW5lZENscyk7XG4gICAgICBpZiAodGhpcy5oaWRlVGl0bGUpIHtcbiAgICAgICAgY2xzcy5yZW1vdmUoaGlkZVRpdGxlQ2xzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZSgpIHtcbiAgICB0aGlzLnVwZGF0ZUNscygpO1xuICAgIHRoaXMudXBkYXRlSGVpZ2h0KCk7XG4gICAgdGhpcy5mdWxsc2NyZWVuQ2hhbmdlLmVtaXQodGhpcy5mdWxsc2NyZWVuKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlSGVpZ2h0KCkge1xuICAgIHRoaXMuX2hlaWdodCA9XG4gICAgICB0aGlzLmJvZHlFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQgLVxuICAgICAgKHRoaXMuZWwubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIC1cbiAgICAgIHRoaXMucGFkZGluZztcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZUluQm9keSgpIHtcbiAgICB0aGlzLmJvZHlFbC5jbGFzc0xpc3QucmVtb3ZlKHdyYXBDbHMsIG9wZW5lZENscywgaGlkZVRpdGxlQ2xzKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcbiAgICB0aGlzLmJvZHlFbCA9IHRoaXMuZG9jLnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICB0aGlzLmJvZHlFbC5jbGFzc0xpc3QuYWRkKHdyYXBDbHMpO1xuICAgICh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLmlkID0gdGhpcy5pZDtcblxuICAgIHRoaXMudXBkYXRlQ2xzKCk7XG5cbiAgICAvLyB3aGVuIHdpbmRvdyByZXNpemVcbiAgICB0aGlzLnNjcm9sbCQgPSBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJylcbiAgICAgIC5waXBlKGRlYm91bmNlVGltZSgyMDApKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLnVwZGF0ZUhlaWdodCgpKTtcblxuICAgIC8vIHdoZW4gc2VydmllciBjaGFuZ2VkXG4gICAgdGhpcy5zcnYkID0gdGhpcy5zcnYuY2hhbmdlLnBpcGUoZmlsdGVyKHJlcyA9PiByZXMgIT09IG51bGwpKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy50b2dnbGUoKSk7XG5cbiAgICAvLyB3aGVuIHJvdXRlciBjaGFuZ2VkXG4gICAgdGhpcy5yb3V0ZSQgPSB0aGlzLnJvdXRlci5ldmVudHNcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoKGU6IEV2ZW50KSA9PiBlIGluc3RhbmNlb2YgQWN0aXZhdGlvblN0YXJ0IHx8IGUgaW5zdGFuY2VvZiBBY3RpdmF0aW9uRW5kKSxcbiAgICAgICAgZGVib3VuY2VUaW1lKDIwMCksXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgaWYgKCEhdGhpcy5kb2MucXVlcnlTZWxlY3RvcignIycgKyB0aGlzLmlkKSkge1xuICAgICAgICAgIHRoaXMuYm9keUVsLmNsYXNzTGlzdC5hZGQod3JhcENscyk7XG4gICAgICAgICAgdGhpcy51cGRhdGVDbHMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZUluQm9keSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIHRvZ2dsZSgpIHtcbiAgICB0aGlzLmZ1bGxzY3JlZW4gPSAhdGhpcy5mdWxsc2NyZWVuO1xuICAgIHRoaXMudXBkYXRlKCk7XG4gICAgdGhpcy51cGRhdGVIZWlnaHQoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMudXBkYXRlSGVpZ2h0KCkpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW5pdGVkKSB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5yZW1vdmVJbkJvZHkoKTtcbiAgICB0aGlzLnNjcm9sbCQudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLnNydiQudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLnJvdXRlJC51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=