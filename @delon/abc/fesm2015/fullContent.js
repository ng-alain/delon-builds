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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbENvbnRlbnQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BkZWxvbi9hYmMvZnVsbC1jb250ZW50L2Z1bGwtY29udGVudC5zZXJ2aWNlLnRzIiwibmc6Ly9AZGVsb24vYWJjL2Z1bGwtY29udGVudC9mdWxsLWNvbnRlbnQuY29tcG9uZW50LnRzIiwibmc6Ly9AZGVsb24vYWJjL2Z1bGwtY29udGVudC9mdWxsLWNvbnRlbnQtdG9nZ2xlLmRpcmVjdGl2ZS50cyIsIm5nOi8vQGRlbG9uL2FiYy9mdWxsLWNvbnRlbnQvZnVsbC1jb250ZW50Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBzaGFyZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEZ1bGxDb250ZW50U2VydmljZSB7XHJcbiAgcHJpdmF0ZSBfY2hhbmdlOiBCZWhhdmlvclN1YmplY3Q8YW55PiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8YW55PihudWxsKTtcclxuXHJcbiAgLyoqIMOlwojCh8Omwo3CosOlwoXCqMOlwrHCj8OlwrfCpcOkwr3CnMOlwozCusOnworCtsOmwoDCgSAqL1xyXG4gIHRvZ2dsZSgpIHtcclxuICAgIHRoaXMuX2NoYW5nZS5uZXh0KHRydWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNoYW5nZSgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybiB0aGlzLl9jaGFuZ2UucGlwZShzaGFyZSgpKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkluaXQsXHJcbiAgSW5qZWN0LFxyXG4gIEhvc3RCaW5kaW5nLFxyXG4gIE9uRGVzdHJveSxcclxuICBBZnRlclZpZXdJbml0LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGlvblN0YXJ0LCBBY3RpdmF0aW9uRW5kIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XHJcblxyXG5pbXBvcnQgeyBGdWxsQ29udGVudFNlcnZpY2UgfSBmcm9tICcuL2Z1bGwtY29udGVudC5zZXJ2aWNlJztcclxuXHJcbmNvbnN0IHdyYXBDbHMgPSBgZnVsbC1jb250ZW50X19ib2R5YDtcclxuY29uc3Qgb3BlbmVkQ2xzID0gYGZ1bGwtY29udGVudF9fb3BlbmVkYDtcclxuY29uc3QgaGlkZVRpdGxlQ2xzID0gYGZ1bGwtY29udGVudF9faGlkZGVuLXRpdGxlYDtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZnVsbC1jb250ZW50JyxcclxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxyXG4gIGhvc3Q6IHsgJ1tjbGFzcy5mdWxsLWNvbnRlbnRdJzogJ3RydWUnIH0sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGdWxsQ29udGVudENvbXBvbmVudFxyXG4gIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSBib2R5RWw6IEhUTUxFbGVtZW50O1xyXG4gIHByaXZhdGUgaW5pdGVkID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBzcnYkOiBTdWJzY3JpcHRpb247XHJcbiAgcHJpdmF0ZSByb3V0ZSQ6IFN1YnNjcmlwdGlvbjtcclxuICBwcml2YXRlIGlkID0gYF9mdWxsLWNvbnRlbnQtJHtNYXRoLnJhbmRvbSgpXHJcbiAgICAudG9TdHJpbmcoMzYpXHJcbiAgICAuc3Vic3RyaW5nKDIpfWA7XHJcbiAgcHJpdmF0ZSBzY3JvbGwkOiBTdWJzY3JpcHRpb24gPSBudWxsO1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmhlaWdodC5weCcpXHJcbiAgX2hlaWdodCA9IDA7XHJcblxyXG4gIC8vICNyZWdpb24gZmllbGRzXHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgQElucHV0Qm9vbGVhbigpXHJcbiAgZnVsbHNjcmVlbjogYm9vbGVhbjtcclxuXHJcbiAgQElucHV0KClcclxuICBASW5wdXRCb29sZWFuKClcclxuICBoaWRlVGl0bGUgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIEBJbnB1dE51bWJlcigpXHJcbiAgcGFkZGluZyA9IDI0O1xyXG5cclxuICBAT3V0cHV0KClcclxuICBmdWxsc2NyZWVuQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIC8vICNlbmRyZWdpb25cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIHNydjogRnVsbENvbnRlbnRTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBhbnksXHJcbiAgKSB7fVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZUNscygpIHtcclxuICAgIGNvbnN0IGNsc3MgPSB0aGlzLmJvZHlFbC5jbGFzc0xpc3Q7XHJcbiAgICBpZiAodGhpcy5mdWxsc2NyZWVuKSB7XHJcbiAgICAgIGNsc3MuYWRkKG9wZW5lZENscyk7XHJcbiAgICAgIGlmICh0aGlzLmhpZGVUaXRsZSkge1xyXG4gICAgICAgIGNsc3MuYWRkKGhpZGVUaXRsZUNscyk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNsc3MucmVtb3ZlKG9wZW5lZENscyk7XHJcbiAgICAgIGlmICh0aGlzLmhpZGVUaXRsZSkge1xyXG4gICAgICAgIGNsc3MucmVtb3ZlKGhpZGVUaXRsZUNscyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlKCkge1xyXG4gICAgdGhpcy51cGRhdGVDbHMoKTtcclxuICAgIHRoaXMudXBkYXRlSGVpZ2h0KCk7XHJcbiAgICB0aGlzLmZ1bGxzY3JlZW5DaGFuZ2UuZW1pdCh0aGlzLmZ1bGxzY3JlZW4pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVIZWlnaHQoKSB7XHJcbiAgICB0aGlzLl9oZWlnaHQgPVxyXG4gICAgICB0aGlzLmJvZHlFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQgLVxyXG4gICAgICAodGhpcy5lbC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgLVxyXG4gICAgICB0aGlzLnBhZGRpbmc7XHJcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVtb3ZlSW5Cb2R5KCkge1xyXG4gICAgdGhpcy5ib2R5RWwuY2xhc3NMaXN0LnJlbW92ZSh3cmFwQ2xzLCBvcGVuZWRDbHMsIGhpZGVUaXRsZUNscyk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcclxuICAgIHRoaXMuYm9keUVsID0gdGhpcy5kb2MucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gICAgdGhpcy5ib2R5RWwuY2xhc3NMaXN0LmFkZCh3cmFwQ2xzKTtcclxuICAgICh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLmlkID0gdGhpcy5pZDtcclxuXHJcbiAgICB0aGlzLnVwZGF0ZUNscygpO1xyXG5cclxuICAgIC8vIHdoZW4gd2luZG93IHJlc2l6ZVxyXG4gICAgdGhpcy5zY3JvbGwkID0gZnJvbUV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScpXHJcbiAgICAgIC5waXBlKGRlYm91bmNlVGltZSgyMDApKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMudXBkYXRlSGVpZ2h0KCkpO1xyXG5cclxuICAgIC8vIHdoZW4gc2VydmllciBjaGFuZ2VkXHJcbiAgICB0aGlzLnNydiQgPSB0aGlzLnNydi5jaGFuZ2VcclxuICAgICAgLnBpcGUoZmlsdGVyKHJlcyA9PiByZXMgIT09IG51bGwpKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMudG9nZ2xlKCkpO1xyXG5cclxuICAgIC8vIHdoZW4gcm91dGVyIGNoYW5nZWRcclxuICAgIHRoaXMucm91dGUkID0gdGhpcy5yb3V0ZXIuZXZlbnRzXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIGZpbHRlcihcclxuICAgICAgICAgIChlOiBhbnkpID0+XHJcbiAgICAgICAgICAgIGUgaW5zdGFuY2VvZiBBY3RpdmF0aW9uU3RhcnQgfHwgZSBpbnN0YW5jZW9mIEFjdGl2YXRpb25FbmQsXHJcbiAgICAgICAgKSxcclxuICAgICAgICBkZWJvdW5jZVRpbWUoMjAwKSxcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKGUgPT4ge1xyXG4gICAgICAgIGlmICghIXRoaXMuZG9jLnF1ZXJ5U2VsZWN0b3IoJyMnICsgdGhpcy5pZCkpIHtcclxuICAgICAgICAgIHRoaXMuYm9keUVsLmNsYXNzTGlzdC5hZGQod3JhcENscyk7XHJcbiAgICAgICAgICB0aGlzLnVwZGF0ZUNscygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnJlbW92ZUluQm9keSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICB0b2dnbGUoKSB7XHJcbiAgICB0aGlzLmZ1bGxzY3JlZW4gPSAhdGhpcy5mdWxsc2NyZWVuO1xyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICAgIHRoaXMudXBkYXRlSGVpZ2h0KCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMudXBkYXRlSGVpZ2h0KCkpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pbml0ZWQpIHRoaXMudXBkYXRlKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMucmVtb3ZlSW5Cb2R5KCk7XHJcbiAgICB0aGlzLnNjcm9sbCQudW5zdWJzY3JpYmUoKTtcclxuICAgIHRoaXMuc3J2JC51bnN1YnNjcmliZSgpO1xyXG4gICAgdGhpcy5yb3V0ZSQudW5zdWJzY3JpYmUoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRnVsbENvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuL2Z1bGwtY29udGVudC5jb21wb25lbnQnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbZnVsbC10b2dnbGVdJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIEZ1bGxDb250ZW50VG9nZ2xlRGlyZWN0aXZlIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhcmVudDogRnVsbENvbnRlbnRDb21wb25lbnQpIHt9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcclxuICBfY2xpY2soKSB7XHJcbiAgICB0aGlzLnBhcmVudC50b2dnbGUoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRGVsb25VdGlsTW9kdWxlIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xyXG5cclxuaW1wb3J0IHsgRnVsbENvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuL2Z1bGwtY29udGVudC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGdWxsQ29udGVudFRvZ2dsZURpcmVjdGl2ZSB9IGZyb20gJy4vZnVsbC1jb250ZW50LXRvZ2dsZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBGdWxsQ29udGVudFNlcnZpY2UgfSBmcm9tICcuL2Z1bGwtY29udGVudC5zZXJ2aWNlJztcclxuXHJcbmNvbnN0IENPTVBPTkVOVFMgPSBbRnVsbENvbnRlbnRDb21wb25lbnQsIEZ1bGxDb250ZW50VG9nZ2xlRGlyZWN0aXZlXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRGVsb25VdGlsTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFsuLi5DT01QT05FTlRTXSxcclxuICBleHBvcnRzOiBbLi4uQ09NUE9ORU5UU10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGdWxsQ29udGVudE1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogRnVsbENvbnRlbnRNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW0Z1bGxDb250ZW50U2VydmljZV0sXHJc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