import { Injectable, Component, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, Input, Output, EventEmitter, Inject, HostBinding, Directive, HostListener, NgModule } from '@angular/core';
import { BehaviorSubject, fromEvent } from 'rxjs';
import { share, debounceTime, filter } from 'rxjs/operators';
import { __decorate, __metadata } from 'tslib';
import { DOCUMENT, CommonModule } from '@angular/common';
import { Router, ActivationStart, ActivationEnd } from '@angular/router';
import { InputBoolean, InputNumber, DelonUtilModule } from '@delon/util';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class FullContentService {
    constructor() {
        this._change = new BehaviorSubject(null);
    }
    /**
     * 切换全屏工作区状态
     * @return {?}
     */
    toggle() {
        this._change.next(true);
    }
    /**
     * @return {?}
     */
    get change() {
        return this._change.pipe(share());
    }
}
FullContentService.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const wrapCls = `full-content__body`;
/** @type {?} */
const openedCls = `full-content__opened`;
/** @type {?} */
const hideTitleCls = `full-content__hidden-title`;
class FullContentComponent {
    /**
     * @param {?} el
     * @param {?} cd
     * @param {?} srv
     * @param {?} router
     * @param {?} doc
     */
    constructor(el, cd, srv, router, doc) {
        this.el = el;
        this.cd = cd;
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
                (/** @type {?} */ (this.el.nativeElement)).getBoundingClientRect().top -
                this.padding;
        this.cd.detectChanges();
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
        (/** @type {?} */ (this.el.nativeElement)).id = this.id;
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
            .subscribe(e => {
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
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], FullContentComponent.prototype, "fullscreen", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], FullContentComponent.prototype, "hideTitle", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], FullContentComponent.prototype, "padding", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class FullContentToggleDirective {
    /**
     * @param {?} parent
     */
    constructor(parent) {
        this.parent = parent;
    }
    /**
     * @return {?}
     */
    _click() {
        this.parent.toggle();
    }
}
FullContentToggleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[full-toggle]',
            },] }
];
/** @nocollapse */
FullContentToggleDirective.ctorParameters = () => [
    { type: FullContentComponent }
];
FullContentToggleDirective.propDecorators = {
    _click: [{ type: HostListener, args: ['click',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [FullContentComponent, FullContentToggleDirective];
class FullContentModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: FullContentModule,
            providers: [FullContentService],
        };
    }
}
FullContentModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, DelonUtilModule],
                declarations: [...COMPONENTS],
                exports: [...COMPONENTS],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { FullContentComponent, FullContentService, FullContentToggleDirective, FullContentModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbENvbnRlbnQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BkZWxvbi9hYmMvZnVsbC1jb250ZW50L2Z1bGwtY29udGVudC5zZXJ2aWNlLnRzIiwibmc6Ly9AZGVsb24vYWJjL2Z1bGwtY29udGVudC9mdWxsLWNvbnRlbnQuY29tcG9uZW50LnRzIiwibmc6Ly9AZGVsb24vYWJjL2Z1bGwtY29udGVudC9mdWxsLWNvbnRlbnQtdG9nZ2xlLmRpcmVjdGl2ZS50cyIsIm5nOi8vQGRlbG9uL2FiYy9mdWxsLWNvbnRlbnQvZnVsbC1jb250ZW50Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHNoYXJlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRnVsbENvbnRlbnRTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfY2hhbmdlOiBCZWhhdmlvclN1YmplY3Q8YW55PiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8YW55PihudWxsKTtcblxuICAvKiogw6XCiMKHw6bCjcKiw6XChcKow6XCscKPw6XCt8Klw6TCvcKcw6XCjMK6w6fCisK2w6bCgMKBICovXG4gIHRvZ2dsZSgpIHtcbiAgICB0aGlzLl9jaGFuZ2UubmV4dCh0cnVlKTtcbiAgfVxuXG4gIGdldCBjaGFuZ2UoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuX2NoYW5nZS5waXBlKHNoYXJlKCkpO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgSW5qZWN0LFxuICBIb3N0QmluZGluZyxcbiAgT25EZXN0cm95LFxuICBBZnRlclZpZXdJbml0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGlvblN0YXJ0LCBBY3RpdmF0aW9uRW5kIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbmltcG9ydCB7IEZ1bGxDb250ZW50U2VydmljZSB9IGZyb20gJy4vZnVsbC1jb250ZW50LnNlcnZpY2UnO1xuXG5jb25zdCB3cmFwQ2xzID0gYGZ1bGwtY29udGVudF9fYm9keWA7XG5jb25zdCBvcGVuZWRDbHMgPSBgZnVsbC1jb250ZW50X19vcGVuZWRgO1xuY29uc3QgaGlkZVRpdGxlQ2xzID0gYGZ1bGwtY29udGVudF9faGlkZGVuLXRpdGxlYDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZnVsbC1jb250ZW50JyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcbiAgaG9zdDogeyAnW2NsYXNzLmZ1bGwtY29udGVudF0nOiAndHJ1ZScgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEZ1bGxDb250ZW50Q29tcG9uZW50XG4gIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgYm9keUVsOiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBpbml0ZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBzcnYkOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgcm91dGUkOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgaWQgPSBgX2Z1bGwtY29udGVudC0ke01hdGgucmFuZG9tKClcbiAgICAudG9TdHJpbmcoMzYpXG4gICAgLnN1YnN0cmluZygyKX1gO1xuICBwcml2YXRlIHNjcm9sbCQ6IFN1YnNjcmlwdGlvbiA9IG51bGw7XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5oZWlnaHQucHgnKVxuICBfaGVpZ2h0ID0gMDtcblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIEBJbnB1dCgpXG4gIEBJbnB1dEJvb2xlYW4oKVxuICBmdWxsc2NyZWVuOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIEBJbnB1dEJvb2xlYW4oKVxuICBoaWRlVGl0bGUgPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIEBJbnB1dE51bWJlcigpXG4gIHBhZGRpbmcgPSAyNDtcblxuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgZnVsbHNjcmVlbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHNydjogRnVsbENvbnRlbnRTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IGFueSxcbiAgKSB7fVxuXG4gIHByaXZhdGUgdXBkYXRlQ2xzKCkge1xuICAgIGNvbnN0IGNsc3MgPSB0aGlzLmJvZHlFbC5jbGFzc0xpc3Q7XG4gICAgaWYgKHRoaXMuZnVsbHNjcmVlbikge1xuICAgICAgY2xzcy5hZGQob3BlbmVkQ2xzKTtcbiAgICAgIGlmICh0aGlzLmhpZGVUaXRsZSkge1xuICAgICAgICBjbHNzLmFkZChoaWRlVGl0bGVDbHMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjbHNzLnJlbW92ZShvcGVuZWRDbHMpO1xuICAgICAgaWYgKHRoaXMuaGlkZVRpdGxlKSB7XG4gICAgICAgIGNsc3MucmVtb3ZlKGhpZGVUaXRsZUNscyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGUoKSB7XG4gICAgdGhpcy51cGRhdGVDbHMoKTtcbiAgICB0aGlzLnVwZGF0ZUhlaWdodCgpO1xuICAgIHRoaXMuZnVsbHNjcmVlbkNoYW5nZS5lbWl0KHRoaXMuZnVsbHNjcmVlbik7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUhlaWdodCgpIHtcbiAgICB0aGlzLl9oZWlnaHQgPVxuICAgICAgdGhpcy5ib2R5RWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0IC1cbiAgICAgICh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtXG4gICAgICB0aGlzLnBhZGRpbmc7XG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZUluQm9keSgpIHtcbiAgICB0aGlzLmJvZHlFbC5jbGFzc0xpc3QucmVtb3ZlKHdyYXBDbHMsIG9wZW5lZENscywgaGlkZVRpdGxlQ2xzKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcbiAgICB0aGlzLmJvZHlFbCA9IHRoaXMuZG9jLnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICB0aGlzLmJvZHlFbC5jbGFzc0xpc3QuYWRkKHdyYXBDbHMpO1xuICAgICh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLmlkID0gdGhpcy5pZDtcblxuICAgIHRoaXMudXBkYXRlQ2xzKCk7XG5cbiAgICAvLyB3aGVuIHdpbmRvdyByZXNpemVcbiAgICB0aGlzLnNjcm9sbCQgPSBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJylcbiAgICAgIC5waXBlKGRlYm91bmNlVGltZSgyMDApKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLnVwZGF0ZUhlaWdodCgpKTtcblxuICAgIC8vIHdoZW4gc2VydmllciBjaGFuZ2VkXG4gICAgdGhpcy5zcnYkID0gdGhpcy5zcnYuY2hhbmdlXG4gICAgICAucGlwZShmaWx0ZXIocmVzID0+IHJlcyAhPT0gbnVsbCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMudG9nZ2xlKCkpO1xuXG4gICAgLy8gd2hlbiByb3V0ZXIgY2hhbmdlZFxuICAgIHRoaXMucm91dGUkID0gdGhpcy5yb3V0ZXIuZXZlbnRzXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKFxuICAgICAgICAgIChlOiBhbnkpID0+XG4gICAgICAgICAgICBlIGluc3RhbmNlb2YgQWN0aXZhdGlvblN0YXJ0IHx8IGUgaW5zdGFuY2VvZiBBY3RpdmF0aW9uRW5kLFxuICAgICAgICApLFxuICAgICAgICBkZWJvdW5jZVRpbWUoMjAwKSxcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoZSA9PiB7XG4gICAgICAgIGlmICghIXRoaXMuZG9jLnF1ZXJ5U2VsZWN0b3IoJyMnICsgdGhpcy5pZCkpIHtcbiAgICAgICAgICB0aGlzLmJvZHlFbC5jbGFzc0xpc3QuYWRkKHdyYXBDbHMpO1xuICAgICAgICAgIHRoaXMudXBkYXRlQ2xzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5yZW1vdmVJbkJvZHkoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICB0b2dnbGUoKSB7XG4gICAgdGhpcy5mdWxsc2NyZWVuID0gIXRoaXMuZnVsbHNjcmVlbjtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIHRoaXMudXBkYXRlSGVpZ2h0KCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnVwZGF0ZUhlaWdodCgpKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmluaXRlZCkgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMucmVtb3ZlSW5Cb2R5KCk7XG4gICAgdGhpcy5zY3JvbGwkLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5zcnYkLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5yb3V0ZSQudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZ1bGxDb250ZW50Q29tcG9uZW50IH0gZnJvbSAnLi9mdWxsLWNvbnRlbnQuY29tcG9uZW50JztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2Z1bGwtdG9nZ2xlXScsXG59KVxuZXhwb3J0IGNsYXNzIEZ1bGxDb250ZW50VG9nZ2xlRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwYXJlbnQ6IEZ1bGxDb250ZW50Q29tcG9uZW50KSB7fVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgX2NsaWNrKCkge1xuICAgIHRoaXMucGFyZW50LnRvZ2dsZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IERlbG9uVXRpbE1vZHVsZSB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuaW1wb3J0IHsgRnVsbENvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuL2Z1bGwtY29udGVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRnVsbENvbnRlbnRUb2dnbGVEaXJlY3RpdmUgfSBmcm9tICcuL2Z1bGwtY29udGVudC10b2dnbGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IEZ1bGxDb250ZW50U2VydmljZSB9IGZyb20gJy4vZnVsbC1jb250ZW50LnNlcnZpY2UnO1xuXG5jb25zdCBDT01QT05FTlRTID0gW0Z1bGxDb250ZW50Q29tcG9uZW50LCBGdWxsQ29udGVudFRvZ2dsZURpcmVjdGl2ZV07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIERlbG9uVXRpbE1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogWy4uLkNPTVBPTkVOVFNdLFxuICBleHBvcnRzOiBbLi4uQ09NUE9ORU5UU10sXG59KVxuZXhwb3J0IGNsYXNzIEZ1bGxDb250ZW50TW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBGdWxsQ29udGVudE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW0Z1bGxDb250ZW50U2VydmljZV0sXG4gICAgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzt1QkFNMEMsSUFBSSxlQUFlLENBQU0sSUFBSSxDQUFDOzs7Ozs7SUFHdEUsTUFBTTtRQUNKLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3pCOzs7O0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0tBQ25DOzs7WUFYRixVQUFVOzs7Ozs7OztBQ21CWCxNQUFNLE9BQU8sR0FBRyxvQkFBb0IsQ0FBQzs7QUFDckMsTUFBTSxTQUFTLEdBQUcsc0JBQXNCLENBQUM7O0FBQ3pDLE1BQU0sWUFBWSxHQUFHLDRCQUE0QixDQUFDO0FBUWxEOzs7Ozs7OztJQWlDRSxZQUNVLElBQ0EsSUFDQSxLQUNBLFFBQ2tCLEdBQVE7UUFKMUIsT0FBRSxHQUFGLEVBQUU7UUFDRixP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