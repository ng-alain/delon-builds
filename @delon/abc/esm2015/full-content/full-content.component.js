/**
 * @fileoverview added by tsickle
 * Generated from: full-content.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Inject, Input, Output, ViewEncapsulation, } from '@angular/core';
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
     * @private
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
     * @private
     * @return {?}
     */
    update() {
        this.updateCls();
        this.updateHeight();
        this.fullscreenChange.emit(this.fullscreen);
    }
    /**
     * @private
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
     * @private
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
            .subscribe((/**
         * @return {?}
         */
        () => this.updateHeight()));
        // when servier changed
        this.srv$ = this.srv.change.pipe(filter((/**
         * @param {?} res
         * @return {?}
         */
        res => res !== null))).subscribe((/**
         * @return {?}
         */
        () => this.toggle()));
        // when router changed
        this.route$ = this.router.events
            .pipe(filter((/**
         * @param {?} e
         * @return {?}
         */
        (e) => e instanceof ActivationStart || e instanceof ActivationEnd)), debounceTime(200))
            .subscribe((/**
         * @return {?}
         */
        () => {
            if (!!this.doc.querySelector('#' + this.id)) {
                this.bodyEl.classList.add(wrapCls);
                this.updateCls();
            }
            else {
                this.removeInBody();
            }
        }));
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
        setTimeout((/**
         * @return {?}
         */
        () => this.updateHeight()));
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
        (/** @type {?} */ (this.scroll$)).unsubscribe();
        this.srv$.unsubscribe();
        this.route$.unsubscribe();
    }
}
FullContentComponent.decorators = [
    { type: Component, args: [{
                selector: 'full-content',
                exportAs: 'fullContent',
                template: `
    <ng-content></ng-content>
  `,
                host: {
                    '[class.full-content]': 'true',
                    '[style.height.px]': '_height',
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
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
    /**
     * @type {?}
     * @private
     */
    FullContentComponent.prototype.bodyEl;
    /**
     * @type {?}
     * @private
     */
    FullContentComponent.prototype.inited;
    /**
     * @type {?}
     * @private
     */
    FullContentComponent.prototype.srv$;
    /**
     * @type {?}
     * @private
     */
    FullContentComponent.prototype.route$;
    /**
     * @type {?}
     * @private
     */
    FullContentComponent.prototype.id;
    /**
     * @type {?}
     * @private
     */
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
    /**
     * @type {?}
     * @private
     */
    FullContentComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    FullContentComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    FullContentComponent.prototype.srv;
    /**
     * @type {?}
     * @private
     */
    FullContentComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    FullContentComponent.prototype.doc;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbC1jb250ZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvZnVsbC1jb250ZW50LyIsInNvdXJjZXMiOlsiZnVsbC1jb250ZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFJTCxNQUFNLEVBQ04saUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFTLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hGLE9BQU8sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxTQUFTLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7O01BRXRELE9BQU8sR0FBRyxvQkFBb0I7O01BQzlCLFNBQVMsR0FBRyxzQkFBc0I7O01BQ2xDLFlBQVksR0FBRyw0QkFBNEI7QUFnQmpELE1BQU0sT0FBTyxvQkFBb0I7Ozs7Ozs7OztJQXFCL0IsWUFDVSxFQUFjLEVBQ2QsR0FBc0IsRUFDdEIsR0FBdUIsRUFDdkIsTUFBYyxFQUNJLEdBQVE7UUFKMUIsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNkLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3RCLFFBQUcsR0FBSCxHQUFHLENBQW9CO1FBQ3ZCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDSSxRQUFHLEdBQUgsR0FBRyxDQUFLO1FBeEI1QixXQUFNLEdBQUcs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SSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM1QixDQUFDOzs7WUEvSEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixRQUFRLEVBQUUsYUFBYTtnQkFDdkIsUUFBUSxFQUFFOztHQUVUO2dCQUNELElBQUksRUFBRTtvQkFDSixzQkFBc0IsRUFBRSxNQUFNO29CQUM5QixtQkFBbUIsRUFBRSxTQUFTO2lCQUMvQjtnQkFDRCxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7Ozs7WUFsQ0MsVUFBVTtZQUZWLGlCQUFpQjtZQWlCVixrQkFBa0I7WUFMcUIsTUFBTTs0Q0FtRGpELE1BQU0sU0FBQyxRQUFROzs7eUJBWmpCLEtBQUs7d0JBQ0wsS0FBSztzQkFDTCxLQUFLOytCQUNMLE1BQU07O0FBSGtCO0lBQWYsWUFBWSxFQUFFOzt3REFBcUI7QUFDcEI7SUFBZixZQUFZLEVBQUU7O3VEQUFrQjtBQUNsQjtJQUFkLFdBQVcsRUFBRTs7cURBQWM7Ozs7OztJQWZyQyxzQ0FBNEI7Ozs7O0lBQzVCLHNDQUF1Qjs7Ozs7SUFDdkIsb0NBQTJCOzs7OztJQUMzQixzQ0FBNkI7Ozs7O0lBQzdCLGtDQUVrQjs7Ozs7SUFDbEIsdUNBQTRDOztJQUU1Qyx1Q0FBWTs7SUFJWiwwQ0FBNkM7O0lBQzdDLHlDQUEwQzs7SUFDMUMsdUNBQXFDOztJQUNyQyxnREFBa0U7Ozs7O0lBS2hFLGtDQUFzQjs7Ozs7SUFDdEIsbUNBQThCOzs7OztJQUM5QixtQ0FBK0I7Ozs7O0lBQy9CLHNDQUFzQjs7Ozs7SUFDdEIsbUNBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0aW9uRW5kLCBBY3RpdmF0aW9uU3RhcnQsIEV2ZW50LCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IGZyb21FdmVudCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRnVsbENvbnRlbnRTZXJ2aWNlIH0gZnJvbSAnLi9mdWxsLWNvbnRlbnQuc2VydmljZSc7XG5cbmNvbnN0IHdyYXBDbHMgPSBgZnVsbC1jb250ZW50X19ib2R5YDtcbmNvbnN0IG9wZW5lZENscyA9IGBmdWxsLWNvbnRlbnRfX29wZW5lZGA7XG5jb25zdCBoaWRlVGl0bGVDbHMgPSBgZnVsbC1jb250ZW50X19oaWRkZW4tdGl0bGVgO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmdWxsLWNvbnRlbnQnLFxuICBleHBvcnRBczogJ2Z1bGxDb250ZW50JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmZ1bGwtY29udGVudF0nOiAndHJ1ZScsXG4gICAgJ1tzdHlsZS5oZWlnaHQucHhdJzogJ19oZWlnaHQnLFxuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIEZ1bGxDb250ZW50Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgYm9keUVsOiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBpbml0ZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBzcnYkOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgcm91dGUkOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgaWQgPSBgX2Z1bGwtY29udGVudC0ke01hdGgucmFuZG9tKClcbiAgICAudG9TdHJpbmcoMzYpXG4gICAgLnN1YnN0cmluZygyKX1gO1xuICBwcml2YXRlIHNjcm9sbCQ6IFN1YnNjcmlwdGlvbiB8IG51bGwgPSBudWxsO1xuXG4gIF9oZWlnaHQgPSAwO1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGZ1bGxzY3JlZW46IGJvb2xlYW47XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBoaWRlVGl0bGUgPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBwYWRkaW5nID0gMjQ7XG4gIEBPdXRwdXQoKSByZWFkb25seSBmdWxsc2NyZWVuQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHNydjogRnVsbENvbnRlbnRTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IGFueSxcbiAgKSB7fVxuXG4gIHByaXZhdGUgdXBkYXRlQ2xzKCkge1xuICAgIGNvbnN0IGNsc3MgPSB0aGlzLmJvZHlFbC5jbGFzc0xpc3Q7XG4gICAgaWYgKHRoaXMuZnVsbHNjcmVlbikge1xuICAgICAgY2xzcy5hZGQob3BlbmVkQ2xzKTtcbiAgICAgIGlmICh0aGlzLmhpZGVUaXRsZSkge1xuICAgICAgICBjbHNzLmFkZChoaWRlVGl0bGVDbHMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjbHNzLnJlbW92ZShvcGVuZWRDbHMpO1xuICAgICAgaWYgKHRoaXMuaGlkZVRpdGxlKSB7XG4gICAgICAgIGNsc3MucmVtb3ZlKGhpZGVUaXRsZUNscyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGUoKSB7XG4gICAgdGhpcy51cGRhdGVDbHMoKTtcbiAgICB0aGlzLnVwZGF0ZUhlaWdodCgpO1xuICAgIHRoaXMuZnVsbHNjcmVlbkNoYW5nZS5lbWl0KHRoaXMuZnVsbHNjcmVlbik7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUhlaWdodCgpIHtcbiAgICB0aGlzLl9oZWlnaHQgPVxuICAgICAgdGhpcy5ib2R5RWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0IC1cbiAgICAgICh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtXG4gICAgICB0aGlzLnBhZGRpbmc7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVJbkJvZHkoKSB7XG4gICAgdGhpcy5ib2R5RWwuY2xhc3NMaXN0LnJlbW92ZSh3cmFwQ2xzLCBvcGVuZWRDbHMsIGhpZGVUaXRsZUNscyk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmluaXRlZCA9IHRydWU7XG4gICAgdGhpcy5ib2R5RWwgPSB0aGlzLmRvYy5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgdGhpcy5ib2R5RWwuY2xhc3NMaXN0LmFkZCh3cmFwQ2xzKTtcbiAgICAodGhpcy5lbC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5pZCA9IHRoaXMuaWQ7XG5cbiAgICB0aGlzLnVwZGF0ZUNscygpO1xuXG4gICAgLy8gd2hlbiB3aW5kb3cgcmVzaXplXG4gICAgdGhpcy5zY3JvbGwkID0gZnJvbUV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScpXG4gICAgICAucGlwZShkZWJvdW5jZVRpbWUoMjAwKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy51cGRhdGVIZWlnaHQoKSk7XG5cbiAgICAvLyB3aGVuIHNlcnZpZXIgY2hhbmdlZFxuICAgIHRoaXMuc3J2JCA9IHRoaXMuc3J2LmNoYW5nZS5waXBlKGZpbHRlcihyZXMgPT4gcmVzICE9PSBudWxsKSkuc3Vic2NyaWJlKCgpID0+IHRoaXMudG9nZ2xlKCkpO1xuXG4gICAgLy8gd2hlbiByb3V0ZXIgY2hhbmdlZFxuICAgIHRoaXMucm91dGUkID0gdGhpcy5yb3V0ZXIuZXZlbnRzXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKChlOiBFdmVudCkgPT4gZSBpbnN0YW5jZW9mIEFjdGl2YXRpb25TdGFydCB8fCBlIGluc3RhbmNlb2YgQWN0aXZhdGlvbkVuZCksXG4gICAgICAgIGRlYm91bmNlVGltZSgyMDApLFxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIGlmICghIXRoaXMuZG9jLnF1ZXJ5U2VsZWN0b3IoJyMnICsgdGhpcy5pZCkpIHtcbiAgICAgICAgICB0aGlzLmJvZHlFbC5jbGFzc0xpc3QuYWRkKHdyYXBDbHMpO1xuICAgICAgICAgIHRoaXMudXBkYXRlQ2xzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5yZW1vdmVJbkJvZHkoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICB0b2dnbGUoKSB7XG4gICAgdGhpcy5mdWxsc2NyZWVuID0gIXRoaXMuZnVsbHNjcmVlbjtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIHRoaXMudXBkYXRlSGVpZ2h0KCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnVwZGF0ZUhlaWdodCgpKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmluaXRlZCkgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMucmVtb3ZlSW5Cb2R5KCk7XG4gICAgdGhpcy5zY3JvbGwkIS51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuc3J2JC51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMucm91dGUkLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==