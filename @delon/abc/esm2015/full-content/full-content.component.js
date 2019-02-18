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
const wrapCls = `full-content__body`;
/** @type {?} */
const openedCls = `full-content__opened`;
/** @type {?} */
const hideTitleCls = `full-content__hidden-title`;
export class FullContentComponent {
    // #endregion
    /**
     * @param {?} el
     * @param {?} cdr
     * @param {?} srv
     * @param {?} router
     * @param {?} doc
     */
    constructor(el, cdr, srv, router, doc) {
        this.el = el;
        this.cdr = cdr;
        this.srv = srv;
        this.router = router;
        this.doc = doc;
        this.inited = false;
        this.id = `_full-content-${Math.random()
            .toString(36)
            .substring(2)}`;
        this.scroll$ = null;
        this._height = 0;
        this.hideTitle = true;
        this.padding = 24;
        this.fullscreenChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    updateCls() {
        /** @type {?} */
        const clss = this.bodyEl.classList;
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
    }
    /**
     * @return {?}
     */
    update() {
        this.updateCls();
        this.updateHeight();
        this.fullscreenChange.emit(this.fullscreen);
    }
    /**
     * @return {?}
     */
    updateHeight() {
        this._height =
            this.bodyEl.getBoundingClientRect().height -
                ((/** @type {?} */ (this.el.nativeElement))).getBoundingClientRect().top -
                this.padding;
        this.cdr.detectChanges();
    }
    /**
     * @return {?}
     */
    removeInBody() {
        this.bodyEl.classList.remove(wrapCls, openedCls, hideTitleCls);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.inited = true;
        this.bodyEl = this.doc.querySelector('body');
        this.bodyEl.classList.add(wrapCls);
        ((/** @type {?} */ (this.el.nativeElement))).id = this.id;
        this.updateCls();
        // when window resize
        this.scroll$ = fromEvent(window, 'resize')
            .pipe(debounceTime(200))
            .subscribe(() => this.updateHeight());
        // when servier changed
        this.srv$ = this.srv.change.pipe(filter(res => res !== null)).subscribe(() => this.toggle());
        // when router changed
        this.route$ = this.router.events
            .pipe(filter((e) => e instanceof ActivationStart || e instanceof ActivationEnd), debounceTime(200))
            .subscribe(() => {
            if (!!this.doc.querySelector('#' + this.id)) {
                this.bodyEl.classList.add(wrapCls);
                this.updateCls();
            }
            else {
                this.removeInBody();
            }
        });
    }
    /**
     * @return {?}
     */
    toggle() {
        this.fullscreen = !this.fullscreen;
        this.update();
        this.updateHeight();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        setTimeout(() => this.updateHeight());
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this.inited)
            this.update();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.removeInBody();
        this.scroll$.unsubscribe();
        this.srv$.unsubscribe();
        this.route$.unsubscribe();
    }
}
FullContentComponent.decorators = [
    { type: Component, args: [{
                selector: 'full-content',
                template: `
    <ng-content></ng-content>
  `,
                host: {
                    '[class.full-content]': 'true',
                    '[style.height.px]': '_height',
                },
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
FullContentComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: FullContentService },
    { type: Router },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbC1jb250ZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvZnVsbC1jb250ZW50LyIsInNvdXJjZXMiOlsiZnVsbC1jb250ZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUlMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBUyxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRixPQUFPLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN4RCxPQUFPLEVBQUUsU0FBUyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXRELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztNQUV0RCxPQUFPLEdBQUcsb0JBQW9COztNQUM5QixTQUFTLEdBQUcsc0JBQXNCOztNQUNsQyxZQUFZLEdBQUcsNEJBQTRCO0FBYWpELE1BQU0sT0FBTyxvQkFBb0I7Ozs7Ozs7OztJQXFCL0IsWUFDVSxFQUFjLEVBQ2QsR0FBc0IsRUFDdEIsR0FBdUIsRUFDdkIsTUFBYyxFQUNJLEdBQVE7UUFKMUIsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNkLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3RCLFFBQUcsR0FBSCxHQUFHLENBQW9CO1FBQ3ZCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDSSxRQUFHLEdBQUgsR0FBRyxDQUFLO1FBeEI1QixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBR2Ys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O1lBNUhGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsUUFBUSxFQUFFOztHQUVUO2dCQUNELElBQUksRUFBRTtvQkFDSixzQkFBc0IsRUFBRSxNQUFNO29CQUM5QixtQkFBbUIsRUFBRSxTQUFTO2lCQUMvQjtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7OztZQTlCQyxVQUFVO1lBRlYsaUJBQWlCO1lBZ0JWLGtCQUFrQjtZQUxxQixNQUFNOzRDQWdEakQsTUFBTSxTQUFDLFFBQVE7Ozt5QkFaakIsS0FBSzt3QkFDTCxLQUFLO3NCQUNMLEtBQUs7K0JBQ0wsTUFBTTs7QUFIa0I7SUFBZixZQUFZLEVBQUU7O3dEQUFxQjtBQUNwQjtJQUFmLFlBQVksRUFBRTs7dURBQWtCO0FBQ2xCO0lBQWQsV0FBVyxFQUFFOztxREFBYzs7O0lBZnJDLHNDQUE0Qjs7SUFDNUIsc0NBQXVCOztJQUN2QixvQ0FBMkI7O0lBQzNCLHNDQUE2Qjs7SUFDN0Isa0NBRWtCOztJQUNsQix1Q0FBcUM7O0lBRXJDLHVDQUFZOztJQUlaLDBDQUE2Qzs7SUFDN0MseUNBQTBDOztJQUMxQyx1Q0FBcUM7O0lBQ3JDLGdEQUFrRTs7SUFLaEUsa0NBQXNCOztJQUN0QixtQ0FBOEI7O0lBQzlCLG1DQUErQjs7SUFDL0Isc0NBQXNCOztJQUN0QixtQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGlvbkVuZCwgQWN0aXZhdGlvblN0YXJ0LCBFdmVudCwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEZ1bGxDb250ZW50U2VydmljZSB9IGZyb20gJy4vZnVsbC1jb250ZW50LnNlcnZpY2UnO1xuXG5jb25zdCB3cmFwQ2xzID0gYGZ1bGwtY29udGVudF9fYm9keWA7XG5jb25zdCBvcGVuZWRDbHMgPSBgZnVsbC1jb250ZW50X19vcGVuZWRgO1xuY29uc3QgaGlkZVRpdGxlQ2xzID0gYGZ1bGwtY29udGVudF9faGlkZGVuLXRpdGxlYDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZnVsbC1jb250ZW50JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmZ1bGwtY29udGVudF0nOiAndHJ1ZScsXG4gICAgJ1tzdHlsZS5oZWlnaHQucHhdJzogJ19oZWlnaHQnLFxuICB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgRnVsbENvbnRlbnRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBib2R5RWw6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIGluaXRlZCA9IGZhbHNlO1xuICBwcml2YXRlIHNydiQ6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSByb3V0ZSQ6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBpZCA9IGBfZnVsbC1jb250ZW50LSR7TWF0aC5yYW5kb20oKVxuICAgIC50b1N0cmluZygzNilcbiAgICAuc3Vic3RyaW5nKDIpfWA7XG4gIHByaXZhdGUgc2Nyb2xsJDogU3Vic2NyaXB0aW9uID0gbnVsbDtcblxuICBfaGVpZ2h0ID0gMDtcblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBmdWxsc2NyZWVuOiBib29sZWFuO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgaGlkZVRpdGxlID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgcGFkZGluZyA9IDI0O1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgZnVsbHNjcmVlbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBzcnY6IEZ1bGxDb250ZW50U2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBhbnksXG4gICkge31cblxuICBwcml2YXRlIHVwZGF0ZUNscygpIHtcbiAgICBjb25zdCBjbHNzID0gdGhpcy5ib2R5RWwuY2xhc3NMaXN0O1xuICAgIGlmICh0aGlzLmZ1bGxzY3JlZW4pIHtcbiAgICAgIGNsc3MuYWRkKG9wZW5lZENscyk7XG4gICAgICBpZiAodGhpcy5oaWRlVGl0bGUpIHtcbiAgICAgICAgY2xzcy5hZGQoaGlkZVRpdGxlQ2xzKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY2xzcy5yZW1vdmUob3BlbmVkQ2xzKTtcbiAgICAgIGlmICh0aGlzLmhpZGVUaXRsZSkge1xuICAgICAgICBjbHNzLnJlbW92ZShoaWRlVGl0bGVDbHMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlKCkge1xuICAgIHRoaXMudXBkYXRlQ2xzKCk7XG4gICAgdGhpcy51cGRhdGVIZWlnaHQoKTtcbiAgICB0aGlzLmZ1bGxzY3JlZW5DaGFuZ2UuZW1pdCh0aGlzLmZ1bGxzY3JlZW4pO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVIZWlnaHQoKSB7XG4gICAgdGhpcy5faGVpZ2h0ID1cbiAgICAgIHRoaXMuYm9keUVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCAtXG4gICAgICAodGhpcy5lbC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgLVxuICAgICAgdGhpcy5wYWRkaW5nO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlSW5Cb2R5KCkge1xuICAgIHRoaXMuYm9keUVsLmNsYXNzTGlzdC5yZW1vdmUod3JhcENscywgb3BlbmVkQ2xzLCBoaWRlVGl0bGVDbHMpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pbml0ZWQgPSB0cnVlO1xuICAgIHRoaXMuYm9keUVsID0gdGhpcy5kb2MucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIHRoaXMuYm9keUVsLmNsYXNzTGlzdC5hZGQod3JhcENscyk7XG4gICAgKHRoaXMuZWwubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuaWQgPSB0aGlzLmlkO1xuXG4gICAgdGhpcy51cGRhdGVDbHMoKTtcblxuICAgIC8vIHdoZW4gd2luZG93IHJlc2l6ZVxuICAgIHRoaXMuc2Nyb2xsJCA9IGZyb21FdmVudCh3aW5kb3csICdyZXNpemUnKVxuICAgICAgLnBpcGUoZGVib3VuY2VUaW1lKDIwMCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMudXBkYXRlSGVpZ2h0KCkpO1xuXG4gICAgLy8gd2hlbiBzZXJ2aWVyIGNoYW5nZWRcbiAgICB0aGlzLnNydiQgPSB0aGlzLnNydi5jaGFuZ2UucGlwZShmaWx0ZXIocmVzID0+IHJlcyAhPT0gbnVsbCkpLnN1YnNjcmliZSgoKSA9PiB0aGlzLnRvZ2dsZSgpKTtcblxuICAgIC8vIHdoZW4gcm91dGVyIGNoYW5nZWRcbiAgICB0aGlzLnJvdXRlJCA9IHRoaXMucm91dGVyLmV2ZW50c1xuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcigoZTogRXZlbnQpID0+IGUgaW5zdGFuY2VvZiBBY3RpdmF0aW9uU3RhcnQgfHwgZSBpbnN0YW5jZW9mIEFjdGl2YXRpb25FbmQpLFxuICAgICAgICBkZWJvdW5jZVRpbWUoMjAwKSxcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBpZiAoISF0aGlzLmRvYy5xdWVyeVNlbGVjdG9yKCcjJyArIHRoaXMuaWQpKSB7XG4gICAgICAgICAgdGhpcy5ib2R5RWwuY2xhc3NMaXN0LmFkZCh3cmFwQ2xzKTtcbiAgICAgICAgICB0aGlzLnVwZGF0ZUNscygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucmVtb3ZlSW5Cb2R5KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgdG9nZ2xlKCkge1xuICAgIHRoaXMuZnVsbHNjcmVlbiA9ICF0aGlzLmZ1bGxzY3JlZW47XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgICB0aGlzLnVwZGF0ZUhlaWdodCgpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy51cGRhdGVIZWlnaHQoKSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pbml0ZWQpIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnJlbW92ZUluQm9keSgpO1xuICAgIHRoaXMuc2Nyb2xsJC51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuc3J2JC51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMucm91dGUkLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==