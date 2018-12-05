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
        this.id = `_full-content-${Math.random().toString(36).substring(2)}`;
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
        this._height = this.bodyEl.getBoundingClientRect().height - ((/** @type {?} */ (this.el.nativeElement))).getBoundingClientRect().top - this.padding;
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
        this.srv$ = this.srv.change
            .pipe(filter(res => res !== null))
            .subscribe(() => this.toggle());
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
                template: `<ng-content></ng-content>`,
                host: { '[class.full-content]': 'true' },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbC1jb250ZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvZnVsbC1jb250ZW50LyIsInNvdXJjZXMiOlsiZnVsbC1jb250ZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixXQUFXLEVBQ1gsTUFBTSxFQUNOLEtBQUssRUFJTCxNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQVMsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEYsT0FBTyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDeEQsT0FBTyxFQUFFLFNBQVMsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7TUFFdEQsT0FBTyxHQUFHLG9CQUFvQjs7TUFDOUIsU0FBUyxHQUFHLHNCQUFzQjs7TUFDbEMsWUFBWSxHQUFHLDRCQUE0QjtBQVFqRCxNQUFNLE9BQU8sb0JBQW9COzs7Ozs7Ozs7SUFvQi9CLFlBQ1UsRUFBYyxFQUNkLEdBQXNCLEVBQ3RCLEdBQXVCLEVBQ3ZCLE1BQWMsRUFFSSxHQUFRO1FBTDFCLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDZCxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN0QixRQUFHLEdBQUgsR0FBRyxDQUFvQjtRQUN2QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBRUksUUFBRyxHQUFILEdBQUcsQ0FBSztRQXhCNUIsV0FBTSxHQUFHLEtBQUss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NUIsQ0FBQzs7O1lBdEhGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsSUFBSSxFQUFFLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxFQUFFO2dCQUN4QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7OztZQTFCQyxVQUFVO1lBRlYsaUJBQWlCO1lBaUJWLGtCQUFrQjtZQUxxQixNQUFNOzRDQTJDakQsTUFBTSxTQUFDLFFBQVE7OztzQkFsQmpCLFdBQVcsU0FBQyxpQkFBaUI7eUJBSzdCLEtBQUs7d0JBQ0wsS0FBSztzQkFDTCxLQUFLOytCQUNMLE1BQU07O0FBSGtCO0lBQWYsWUFBWSxFQUFFOzt3REFBcUI7QUFDcEI7SUFBZixZQUFZLEVBQUU7O3VEQUFrQjtBQUNsQjtJQUFkLFdBQVcsRUFBRTs7cURBQWM7OztJQWRyQyxzQ0FBNEI7O0lBQzVCLHNDQUF1Qjs7SUFDdkIsb0NBQTJCOztJQUMzQixzQ0FBNkI7O0lBQzdCLGtDQUF3RTs7SUFDeEUsdUNBQXFDOztJQUVyQyx1Q0FDWTs7SUFJWiwwQ0FBNkM7O0lBQzdDLHlDQUEwQzs7SUFDMUMsdUNBQXFDOztJQUNyQyxnREFBa0U7O0lBS2hFLGtDQUFzQjs7SUFDdEIsbUNBQThCOztJQUM5QixtQ0FBK0I7O0lBQy9CLHNDQUFzQjs7SUFFdEIsbUNBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdEJpbmRpbmcsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0aW9uRW5kLCBBY3RpdmF0aW9uU3RhcnQsIEV2ZW50LCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IGZyb21FdmVudCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRnVsbENvbnRlbnRTZXJ2aWNlIH0gZnJvbSAnLi9mdWxsLWNvbnRlbnQuc2VydmljZSc7XG5cbmNvbnN0IHdyYXBDbHMgPSBgZnVsbC1jb250ZW50X19ib2R5YDtcbmNvbnN0IG9wZW5lZENscyA9IGBmdWxsLWNvbnRlbnRfX29wZW5lZGA7XG5jb25zdCBoaWRlVGl0bGVDbHMgPSBgZnVsbC1jb250ZW50X19oaWRkZW4tdGl0bGVgO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmdWxsLWNvbnRlbnQnLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxuICBob3N0OiB7ICdbY2xhc3MuZnVsbC1jb250ZW50XSc6ICd0cnVlJyB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgRnVsbENvbnRlbnRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBib2R5RWw6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIGluaXRlZCA9IGZhbHNlO1xuICBwcml2YXRlIHNydiQ6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSByb3V0ZSQ6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBpZCA9IGBfZnVsbC1jb250ZW50LSR7TWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIpfWA7XG4gIHByaXZhdGUgc2Nyb2xsJDogU3Vic2NyaXB0aW9uID0gbnVsbDtcblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmhlaWdodC5weCcpXG4gIF9oZWlnaHQgPSAwO1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGZ1bGxzY3JlZW46IGJvb2xlYW47XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBoaWRlVGl0bGUgPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBwYWRkaW5nID0gMjQ7XG4gIEBPdXRwdXQoKSByZWFkb25seSBmdWxsc2NyZWVuQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHNydjogRnVsbENvbnRlbnRTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBhbnksXG4gICkgeyB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVDbHMoKSB7XG4gICAgY29uc3QgY2xzcyA9IHRoaXMuYm9keUVsLmNsYXNzTGlzdDtcbiAgICBpZiAodGhpcy5mdWxsc2NyZWVuKSB7XG4gICAgICBjbHNzLmFkZChvcGVuZWRDbHMpO1xuICAgICAgaWYgKHRoaXMuaGlkZVRpdGxlKSB7XG4gICAgICAgIGNsc3MuYWRkKGhpZGVUaXRsZUNscyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNsc3MucmVtb3ZlKG9wZW5lZENscyk7XG4gICAgICBpZiAodGhpcy5oaWRlVGl0bGUpIHtcbiAgICAgICAgY2xzcy5yZW1vdmUoaGlkZVRpdGxlQ2xzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZSgpIHtcbiAgICB0aGlzLnVwZGF0ZUNscygpO1xuICAgIHRoaXMudXBkYXRlSGVpZ2h0KCk7XG4gICAgdGhpcy5mdWxsc2NyZWVuQ2hhbmdlLmVtaXQodGhpcy5mdWxsc2NyZWVuKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlSGVpZ2h0KCkge1xuICAgIHRoaXMuX2hlaWdodCA9IHRoaXMuYm9keUVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCAtICh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtIHRoaXMucGFkZGluZztcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZUluQm9keSgpIHtcbiAgICB0aGlzLmJvZHlFbC5jbGFzc0xpc3QucmVtb3ZlKHdyYXBDbHMsIG9wZW5lZENscywgaGlkZVRpdGxlQ2xzKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcbiAgICB0aGlzLmJvZHlFbCA9IHRoaXMuZG9jLnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICB0aGlzLmJvZHlFbC5jbGFzc0xpc3QuYWRkKHdyYXBDbHMpO1xuICAgICh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLmlkID0gdGhpcy5pZDtcblxuICAgIHRoaXMudXBkYXRlQ2xzKCk7XG5cbiAgICAvLyB3aGVuIHdpbmRvdyByZXNpemVcbiAgICB0aGlzLnNjcm9sbCQgPSBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJylcbiAgICAgIC5waXBlKGRlYm91bmNlVGltZSgyMDApKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLnVwZGF0ZUhlaWdodCgpKTtcblxuICAgIC8vIHdoZW4gc2VydmllciBjaGFuZ2VkXG4gICAgdGhpcy5zcnYkID0gdGhpcy5zcnYuY2hhbmdlXG4gICAgICAucGlwZShmaWx0ZXIocmVzID0+IHJlcyAhPT0gbnVsbCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMudG9nZ2xlKCkpO1xuXG4gICAgLy8gd2hlbiByb3V0ZXIgY2hhbmdlZFxuICAgIHRoaXMucm91dGUkID0gdGhpcy5yb3V0ZXIuZXZlbnRzXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKChlOiBFdmVudCkgPT4gZSBpbnN0YW5jZW9mIEFjdGl2YXRpb25TdGFydCB8fCBlIGluc3RhbmNlb2YgQWN0aXZhdGlvbkVuZCksXG4gICAgICAgIGRlYm91bmNlVGltZSgyMDApLFxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIGlmICghIXRoaXMuZG9jLnF1ZXJ5U2VsZWN0b3IoJyMnICsgdGhpcy5pZCkpIHtcbiAgICAgICAgICB0aGlzLmJvZHlFbC5jbGFzc0xpc3QuYWRkKHdyYXBDbHMpO1xuICAgICAgICAgIHRoaXMudXBkYXRlQ2xzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5yZW1vdmVJbkJvZHkoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICB0b2dnbGUoKSB7XG4gICAgdGhpcy5mdWxsc2NyZWVuID0gIXRoaXMuZnVsbHNjcmVlbjtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIHRoaXMudXBkYXRlSGVpZ2h0KCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnVwZGF0ZUhlaWdodCgpKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmluaXRlZCkgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMucmVtb3ZlSW5Cb2R5KCk7XG4gICAgdGhpcy5zY3JvbGwkLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5zcnYkLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5yb3V0ZSQudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19