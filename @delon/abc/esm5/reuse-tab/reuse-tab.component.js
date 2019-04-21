/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Inject, Input, Optional, Output, Renderer2, TemplateRef, } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { InputBoolean, InputNumber } from '@delon/util';
import { Subject } from 'rxjs';
import { debounceTime, filter, takeUntil } from 'rxjs/operators';
import { ReuseTabContextService } from './reuse-tab-context.service';
import { ReuseTabMatchMode, } from './reuse-tab.interfaces';
import { ReuseTabService } from './reuse-tab.service';
var ReuseTabComponent = /** @class */ (function () {
    // #endregion
    function ReuseTabComponent(el, srv, cdr, router, route, render, i18nSrv, doc) {
        this.srv = srv;
        this.cdr = cdr;
        this.router = router;
        this.route = route;
        this.render = render;
        this.i18nSrv = i18nSrv;
        this.doc = doc;
        this.unsubscribe$ = new Subject();
        this.list = [];
        this.pos = 0;
        // #region fields
        this.mode = ReuseTabMatchMode.Menu;
        this.debug = false;
        this.allowClose = true;
        this.showCurrent = true;
        this.keepingScroll = false;
        this.customContextMenu = [];
        this.change = new EventEmitter();
        this.close = new EventEmitter();
        this.el = el.nativeElement;
    }
    Object.defineProperty(ReuseTabComponent.prototype, "keepingScrollContainer", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._keepingScrollContainer =
                typeof value === 'string' ? this.doc.querySelector(value) : value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @param {?} title
     * @return {?}
     */
    ReuseTabComponent.prototype.genTit = /**
     * @private
     * @param {?} title
     * @return {?}
     */
    function (title) {
        return title.i18n && this.i18nSrv ? this.i18nSrv.fanyi(title.i18n) : title.text;
    };
    /**
     * @private
     * @param {?=} notify
     * @return {?}
     */
    ReuseTabComponent.prototype.genList = /**
     * @private
     * @param {?=} notify
     * @return {?}
     */
    function (notify) {
        var _this = this;
        /** @type {?} */
        var isClosed = notify && notify.active === 'close';
        /** @type {?} */
        var beforeClosePos = isClosed ? this.list.findIndex((/**
         * @param {?} w
         * @return {?}
         */
        function (w) { return w.url === (/** @type {?} */ (notify)).url; })) : -1;
        /** @type {?} */
        var ls = this.srv.items.map((/**
         * @param {?} item
         * @param {?} index
         * @return {?}
         */
        function (item, index) {
            return (/** @type {?} */ ({
                url: item.url,
                title: _this.genTit(item.title),
                closable: _this.allowClose && item.closable && _this.srv.count > 0,
                index: index,
                active: false,
                last: false,
            }));
        }));
        if (this.showCurrent) {
            /** @type {?} */
            var snapshot = this.route.snapshot;
            /** @type {?} */
            var url_1 = this.srv.getUrl(snapshot);
            /** @type {?} */
            var idx = ls.findIndex((/**
             * @param {?} w
             * @return {?}
             */
            function (w) { return w.url === url_1; }));
            // jump directly when the current exists in the list
            // or create a new current item and jump
            if (idx !== -1 || (isClosed && (/** @type {?} */ (notify)).url === url_1)) {
                this.pos = isClosed ? (idx >= beforeClosePos ? this.pos - 1 : this.pos) : idx;
            }
            else {
                /** @type {?} */
                var snapshotTrue = this.srv.getTruthRoute(snapshot);
                ls.push((/** @type {?} */ ({
                    url: url_1,
                    title: this.genTit(this.srv.getTitle(url_1, snapshotTrue)),
                    closable: this.allowClose && this.srv.count > 0 && this.srv.getClosable(url_1, snapshotTrue),
                    index: ls.length,
                    active: false,
                    last: false,
                })));
                this.pos = ls.length - 1;
            }
            // fix unabled close last item
            if (ls.length <= 1)
                ls[0].closable = false;
        }
        this.list = ls;
        if (ls.length && isClosed) {
            this.to(null, this.pos);
        }
        this.refStatus(false);
        this.visibility();
        this.cdr.detectChanges();
    };
    /**
     * @private
     * @return {?}
     */
    ReuseTabComponent.prototype.visibility = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.showCurrent)
            return;
        this.render.setStyle(this.el, 'display', this.list.length === 0 ? 'none' : 'block');
    };
    Object.defineProperty(ReuseTabComponent.prototype, "acitveIndex", {
        // #region UI
        get: 
        // #region UI
        /**
         * @private
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (this.list.find((/**
             * @param {?} w
             * @return {?}
             */
            function (w) { return w.active; })))).index;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} res
     * @return {?}
     */
    ReuseTabComponent.prototype.cmChange = /**
     * @param {?} res
     * @return {?}
     */
    function (res) {
        var _this = this;
        /** @type {?} */
        var fn = null;
        switch (res.type) {
            case 'close':
                this._close(null, res.item.index, res.includeNonCloseable);
                break;
            case 'closeRight':
                fn = (/**
                 * @return {?}
                 */
                function () {
                    _this.srv.closeRight(res.item.url, res.includeNonCloseable);
                    _this.close.emit(null);
                });
                break;
            case 'clear':
            case 'closeOther':
                fn = (/**
                 * @return {?}
                 */
                function () {
                    _this.srv.clear(res.includeNonCloseable);
                    _this.close.emit(null);
                });
                break;
        }
        if (!fn) {
            return;
        }
        if (!res.item.active && res.item.index <= this.acitveIndex) {
            this.to(null, res.item.index, fn);
        }
        else {
            fn();
        }
    };
    /**
     * @param {?=} dc
     * @return {?}
     */
    ReuseTabComponent.prototype.refStatus = /**
     * @param {?=} dc
     * @return {?}
     */
    function (dc) {
        var _this = this;
        if (dc === void 0) { dc = true; }
        if (this.list.length) {
            this.list[this.list.length - 1].last = true;
            this.list.forEach((/**
             * @param {?} i
             * @param {?} idx
             * @return {?}
             */
            function (i, idx) { return (i.active = _this.pos === idx); }));
        }
        if (dc)
            this.cdr.detectChanges();
    };
    /**
     * @param {?} e
     * @param {?} index
     * @param {?=} cb
     * @return {?}
     */
    ReuseTabComponent.prototype.to = /**
     * @param {?} e
     * @param {?} index
     * @param {?=} cb
     * @return {?}
     */
    function (e, index, cb) {
        var _this = this;
        if (e != null) {
            e.preventDefault();
            e.stopPropagation();
        }
        index = Math.max(0, Math.min(index, this.list.length - 1));
        /** @type {?} */
        var item = this.list[index];
        this.router.navigateByUrl(item.url).then((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            if (!res)
                return;
            _this.pos = index;
            _this.item = item;
            _this.refStatus();
            _this.change.emit(item);
            if (cb) {
                cb();
            }
        }));
    };
    /**
     * @param {?} e
     * @param {?} idx
     * @param {?} includeNonCloseable
     * @return {?}
     */
    ReuseTabComponent.prototype._close = /**
     * @param {?} e
     * @param {?} idx
     * @param {?} includeNonCloseable
     * @return {?}
     */
    function (e, idx, includeNonCloseable) {
        if (e != null) {
            e.preventDefault();
            e.stopPropagation();
        }
        /** @type {?} */
        var item = this.list[idx];
        this.srv.close(item.url, includeNonCloseable);
        this.close.emit(item);
        this.cdr.detectChanges();
        return false;
    };
    // #endregion
    // #endregion
    /**
     * @return {?}
     */
    ReuseTabComponent.prototype.ngOnInit = 
    // #endregion
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.router.events
            .pipe(takeUntil(this.unsubscribe$), filter((/**
         * @param {?} evt
         * @return {?}
         */
        function (evt) { return evt instanceof NavigationEnd; })))
            .subscribe((/**
         * @return {?}
         */
        function () { return _this.genList(); }));
        this.srv.change.pipe(takeUntil(this.unsubscribe$)).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return _this.genList((/** @type {?} */ (res))); }));
        this.i18nSrv.change
            .pipe(filter((/**
         * @return {?}
         */
        function () { return _this.srv.inited; })), takeUntil(this.unsubscribe$), debounceTime(100))
            .subscribe((/**
         * @return {?}
         */
        function () { return _this.genList(); }));
        this.genList();
        this.srv.init();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    ReuseTabComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.max)
            this.srv.max = this.max;
        if (changes.excludes)
            this.srv.excludes = this.excludes;
        if (changes.mode)
            this.srv.mode = this.mode;
        if (changes.keepingScroll) {
            this.srv.keepingScroll = this.keepingScroll;
            this.srv.keepingScrollContainer = this._keepingScrollContainer;
        }
        this.srv.debug = this.debug;
        this.cdr.detectChanges();
    };
    /**
     * @return {?}
     */
    ReuseTabComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var unsubscribe$ = this.unsubscribe$;
        unsubscribe$.next();
        unsubscribe$.complete();
    };
    ReuseTabComponent.decorators = [
        { type: Component, args: [{
                    selector: 'reuse-tab',
                    exportAs: 'reuseTab',
                    template: "<nz-tabset [nzSelectedIndex]=\"pos\" [nzAnimated]=\"false\" nzType=\"line\"\n  [nzTabBarExtraContent]=\"tabBarExtraContent\"\n  [nzTabBarGutter]=\"tabBarGutter\"\n  [nzTabBarStyle]=\"tabBarStyle\">\n  <nz-tab *ngFor=\"let i of list; let index = index\" [nzTitle]=\"titleTemplate\">\n    <ng-template #titleTemplate>\n      <span [reuse-tab-context-menu]=\"i\" [customContextMenu]=\"customContextMenu\" (click)=\"to($event, index)\" class=\"reuse-tab__name\">{{i.title}}</span>\n      <i *ngIf=\"i.closable\" nz-icon type=\"close\" class=\"reuse-tab__op\" (click)=\"_close($event, index, false)\"></i>\n    </ng-template>\n  </nz-tab>\n</nz-tabset>\n<reuse-tab-context [i18n]=\"i18n\" (change)=\"cmChange($event)\"></reuse-tab-context>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [ReuseTabContextService],
                    host: {
                        '[class.reuse-tab]': 'true',
                    }
                }] }
    ];
    /** @nocollapse */
    ReuseTabComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ReuseTabService },
        { type: ChangeDetectorRef },
        { type: Router },
        { type: ActivatedRoute },
        { type: Renderer2 },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [ALAIN_I18N_TOKEN,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    ReuseTabComponent.propDecorators = {
        mode: [{ type: Input }],
        i18n: [{ type: Input }],
        debug: [{ type: Input }],
        max: [{ type: Input }],
        excludes: [{ type: Input }],
        allowClose: [{ type: Input }],
        showCurrent: [{ type: Input }],
        keepingScroll: [{ type: Input }],
        keepingScrollContainer: [{ type: Input }],
        customContextMenu: [{ type: Input }],
        tabBarExtraContent: [{ type: Input }],
        tabBarGutter: [{ type: Input }],
        tabBarStyle: [{ type: Input }],
        change: [{ type: Output }],
        close: [{ type: Output }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], ReuseTabComponent.prototype, "debug", void 0);
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Number)
    ], ReuseTabComponent.prototype, "max", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], ReuseTabComponent.prototype, "allowClose", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], ReuseTabComponent.prototype, "showCurrent", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], ReuseTabComponent.prototype, "keepingScroll", void 0);
    return ReuseTabComponent;
}());
export { ReuseTabComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ReuseTabComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    ReuseTabComponent.prototype.unsubscribe$;
    /**
     * @type {?}
     * @private
     */
    ReuseTabComponent.prototype._keepingScrollContainer;
    /** @type {?} */
    ReuseTabComponent.prototype.list;
    /** @type {?} */
    ReuseTabComponent.prototype.item;
    /** @type {?} */
    ReuseTabComponent.prototype.pos;
    /** @type {?} */
    ReuseTabComponent.prototype.mode;
    /** @type {?} */
    ReuseTabComponent.prototype.i18n;
    /** @type {?} */
    ReuseTabComponent.prototype.debug;
    /** @type {?} */
    ReuseTabComponent.prototype.max;
    /** @type {?} */
    ReuseTabComponent.prototype.excludes;
    /** @type {?} */
    ReuseTabComponent.prototype.allowClose;
    /** @type {?} */
    ReuseTabComponent.prototype.showCurrent;
    /** @type {?} */
    ReuseTabComponent.prototype.keepingScroll;
    /** @type {?} */
    ReuseTabComponent.prototype.customContextMenu;
    /** @type {?} */
    ReuseTabComponent.prototype.tabBarExtraContent;
    /** @type {?} */
    ReuseTabComponent.prototype.tabBarGutter;
    /** @type {?} */
    ReuseTabComponent.prototype.tabBarStyle;
    /** @type {?} */
    ReuseTabComponent.prototype.change;
    /** @type {?} */
    ReuseTabComponent.prototype.close;
    /**
     * @type {?}
     * @private
     */
    ReuseTabComponent.prototype.srv;
    /**
     * @type {?}
     * @private
     */
    ReuseTabComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    ReuseTabComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    ReuseTabComponent.prototype.route;
    /**
     * @type {?}
     * @private
     */
    ReuseTabComponent.prototype.render;
    /**
     * @type {?}
     * @private
     */
    ReuseTabComponent.prototype.i18nSrv;
    /**
     * @type {?}
     * @private
     */
    ReuseTabComponent.prototype.doc;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2UtdGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvcmV1c2UtdGFiLyIsInNvdXJjZXMiOlsicmV1c2UtdGFiLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUlMLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUdULFdBQVcsR0FDWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN4RSxPQUFPLEVBQW9CLGdCQUFnQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFakUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQU1MLGlCQUFpQixHQUdsQixNQUFNLHdCQUF3QixDQUFDO0FBQ2hDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV0RDtJQXdDRSxhQUFhO0lBRWIsMkJBQ0UsRUFBYyxFQUNOLEdBQW9CLEVBQ3BCLEdBQXNCLEVBQ3RCLE1BQWMsRUFDZCxLQUFxQixFQUNyQixNQUFpQixFQUNxQixPQUF5QixFQUM3QyxHQUFRO1FBTjFCLFFBQUcsR0FBSCxHQUFHLENBQWlCO1FBQ3BCLFFBQUcsR0FBSCxHQUFHLENB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OEI7O0lBQzlCLHdDQUFnRDs7SUFDaEQsbUNBQTBEOztJQUMxRCxrQ0FBZ0U7Ozs7O0lBTTlELGdDQUE0Qjs7Ozs7SUFDNUIsZ0NBQThCOzs7OztJQUM5QixtQ0FBc0I7Ozs7O0lBQ3RCLGtDQUE2Qjs7Ozs7SUFDN0IsbUNBQXlCOzs7OztJQUN6QixvQ0FBdUU7Ozs7O0lBQ3ZFLGdDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgTmF2aWdhdGlvbkVuZCwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEFsYWluSTE4TlNlcnZpY2UsIEFMQUlOX0kxOE5fVE9LRU4gfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZmlsdGVyLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFJldXNlVGFiQ29udGV4dFNlcnZpY2UgfSBmcm9tICcuL3JldXNlLXRhYi1jb250ZXh0LnNlcnZpY2UnO1xuaW1wb3J0IHtcbiAgUmV1c2VDb250ZXh0Q2xvc2VFdmVudCxcbiAgUmV1c2VDb250ZXh0STE4bixcbiAgUmV1c2VDdXN0b21Db250ZXh0TWVudSxcbiAgUmV1c2VJdGVtLFxuICBSZXVzZVRhYkNhY2hlZCxcbiAgUmV1c2VUYWJNYXRjaE1vZGUsXG4gIFJldXNlVGFiTm90aWZ5LFxuICBSZXVzZVRpdGxlLFxufSBmcm9tICcuL3JldXNlLXRhYi5pbnRlcmZhY2VzJztcbmltcG9ydCB7IFJldXNlVGFiU2VydmljZSB9IGZyb20gJy4vcmV1c2UtdGFiLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdyZXVzZS10YWInLFxuICBleHBvcnRBczogJ3JldXNlVGFiJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JldXNlLXRhYi5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtSZXVzZVRhYkNvbnRleHRTZXJ2aWNlXSxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MucmV1c2UtdGFiXSc6ICd0cnVlJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgUmV1c2VUYWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBlbDogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgdW5zdWJzY3JpYmUkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSBfa2VlcGluZ1Njcm9sbENvbnRhaW5lcjogRWxlbWVudDtcbiAgbGlzdDogUmV1c2VJdGVtW10gPSBbXTtcbiAgaXRlbTogUmV1c2VJdGVtO1xuICBwb3MgPSAwO1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgQElucHV0KCkgbW9kZTogUmV1c2VUYWJNYXRjaE1vZGUgPSBSZXVzZVRhYk1hdGNoTW9kZS5NZW51O1xuICBASW5wdXQoKSBpMThuOiBSZXVzZUNvbnRleHRJMThuO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZGVidWcgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgbWF4OiBudW1iZXI7XG4gIEBJbnB1dCgpIGV4Y2x1ZGVzOiBSZWdFeHBbXTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGFsbG93Q2xvc2UgPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd0N1cnJlbnQgPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkga2VlcGluZ1Njcm9sbCA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBzZXQga2VlcGluZ1Njcm9sbENvbnRhaW5lcih2YWx1ZTogc3RyaW5nIHwgRWxlbWVudCkge1xuICAgIHRoaXMuX2tlZXBpbmdTY3JvbGxDb250YWluZXIgPVxuICAgICAgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHRoaXMuZG9jLnF1ZXJ5U2VsZWN0b3IodmFsdWUpIDogdmFsdWU7XG4gIH1cbiAgQElucHV0KCkgY3VzdG9tQ29udGV4dE1lbnU6IFJldXNlQ3VzdG9tQ29udGV4dE1lbnVbXSA9IFtdO1xuICBASW5wdXQoKSB0YWJCYXJFeHRyYUNvbnRlbnQ6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSB0YWJCYXJHdXR0ZXI6IG51bWJlcjtcbiAgQElucHV0KCkgdGFiQmFyU3R5bGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gIEBPdXRwdXQoKSByZWFkb25seSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFJldXNlSXRlbT4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjxSZXVzZUl0ZW0gfCBudWxsPigpO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3RvcihcbiAgICBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHNydjogUmV1c2VUYWJTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgcmVuZGVyOiBSZW5kZXJlcjIsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChBTEFJTl9JMThOX1RPS0VOKSBwcml2YXRlIGkxOG5TcnY6IEFsYWluSTE4TlNlcnZpY2UsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IGFueSxcbiAgKSB7XG4gICAgdGhpcy5lbCA9IGVsLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBwcml2YXRlIGdlblRpdCh0aXRsZTogUmV1c2VUaXRsZSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRpdGxlLmkxOG4gJiYgdGhpcy5pMThuU3J2ID8gdGhpcy5pMThuU3J2LmZhbnlpKHRpdGxlLmkxOG4pIDogdGl0bGUudGV4dDtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuTGlzdChub3RpZnk/OiBSZXVzZVRhYk5vdGlmeSkge1xuICAgIGNvbnN0IGlzQ2xvc2VkID0gbm90aWZ5ICYmIG5vdGlmeS5hY3RpdmUgPT09ICdjbG9zZSc7XG4gICAgY29uc3QgYmVmb3JlQ2xvc2VQb3MgPSBpc0Nsb3NlZCA/IHRoaXMubGlzdC5maW5kSW5kZXgodyA9PiB3LnVybCA9PT0gbm90aWZ5IS51cmwpIDogLTE7XG4gICAgY29uc3QgbHMgPSB0aGlzLnNydi5pdGVtcy5tYXAoKGl0ZW06IFJldXNlVGFiQ2FjaGVkLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB1cmw6IGl0ZW0udXJsLFxuICAgICAgICB0aXRsZTogdGhpcy5nZW5UaXQoaXRlbS50aXRsZSksXG4gICAgICAgIGNsb3NhYmxlOiB0aGlzLmFsbG93Q2xvc2UgJiYgaXRlbS5jbG9zYWJsZSAmJiB0aGlzLnNydi5jb3VudCA+IDAsXG4gICAgICAgIGluZGV4LFxuICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICBsYXN0OiBmYWxzZSxcbiAgICAgIH0gYXMgUmV1c2VJdGVtO1xuICAgIH0pO1xuICAgIGlmICh0aGlzLnNob3dDdXJyZW50KSB7XG4gICAgICBjb25zdCBzbmFwc2hvdCA9IHRoaXMucm91dGUuc25hcHNob3Q7XG4gICAgICBjb25zdCB1cmwgPSB0aGlzLnNydi5nZXRVcmwoc25hcHNob3QpO1xuICAgICAgY29uc3QgaWR4ID0gbHMuZmluZEluZGV4KHcgPT4gdy51cmwgPT09IHVybCk7XG4gICAgICAvLyBqdW1wIGRpcmVjdGx5IHdoZW4gdGhlIGN1cnJlbnQgZXhpc3RzIGluIHRoZSBsaXN0XG4gICAgICAvLyBvciBjcmVhdGUgYSBuZXcgY3VycmVudCBpdGVtIGFuZCBqdW1wXG4gICAgICBpZiAoaWR4ICE9PSAtMSB8fCAoaXNDbG9zZWQgJiYgbm90aWZ5IS51cmwgPT09IHVybCkpIHtcbiAgICAgICAgdGhpcy5wb3MgPSBpc0Nsb3NlZCA/IChpZHggPj0gYmVmb3JlQ2xvc2VQb3MgPyB0aGlzLnBvcyAtIDEgOiB0aGlzLnBvcykgOiBpZHg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBzbmFwc2hvdFRydWUgPSB0aGlzLnNydi5nZXRUcnV0aFJvdXRlKHNuYXBzaG90KTtcbiAgICAgICAgbHMucHVzaCh7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIHRpdGxlOiB0aGlzLmdlblRpdCh0aGlzLnNydi5nZXRUaXRsZSh1cmwsIHNuYXBzaG90VHJ1ZSkpLFxuICAgICAgICAgIGNsb3NhYmxlOlxuICAgICAgICAgICAgdGhpcy5hbGxvd0Nsb3NlICYmIHRoaXMuc3J2LmNvdW50ID4gMCAmJiB0aGlzLnNydi5nZXRDbG9zYWJsZSh1cmwsIHNuYXBzaG90VHJ1ZSksXG4gICAgICAgICAgaW5kZXg6IGxzLmxlbmd0aCxcbiAgICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICAgIGxhc3Q6IGZhbHNlLFxuICAgICAgICB9IGFzIFJldXNlSXRlbSk7XG4gICAgICAgIHRoaXMucG9zID0gbHMubGVuZ3RoIC0gMTtcbiAgICAgIH1cbiAgICAgIC8vIGZpeCB1bmFibGVkIGNsb3NlIGxhc3QgaXRlbVxuICAgICAgaWYgKGxzLmxlbmd0aCA8PSAxKSBsc1swXS5jbG9zYWJsZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHRoaXMubGlzdCA9IGxzO1xuXG4gICAgaWYgKGxzLmxlbmd0aCAmJiBpc0Nsb3NlZCkge1xuICAgICAgdGhpcy50byhudWxsLCB0aGlzLnBvcyk7XG4gICAgfVxuXG4gICAgdGhpcy5yZWZTdGF0dXMoZmFsc2UpO1xuICAgIHRoaXMudmlzaWJpbGl0eSgpO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgdmlzaWJpbGl0eSgpIHtcbiAgICBpZiAodGhpcy5zaG93Q3VycmVudCkgcmV0dXJuO1xuICAgIHRoaXMucmVuZGVyLnNldFN0eWxlKHRoaXMuZWwsICdkaXNwbGF5JywgdGhpcy5saXN0Lmxlbmd0aCA9PT0gMCA/ICdub25lJyA6ICdibG9jaycpO1xuICB9XG5cbiAgLy8gI3JlZ2lvbiBVSVxuXG4gIHByaXZhdGUgZ2V0IGFjaXR2ZUluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLmxpc3QuZmluZCh3ID0+IHcuYWN0aXZlKSEuaW5kZXg7XG4gIH1cblxuICBjbUNoYW5nZShyZXM6IFJldXNlQ29udGV4dENsb3NlRXZlbnQpIHtcbiAgICBsZXQgZm46ICgoKSA9PiB2b2lkKSB8IG51bGwgPSBudWxsO1xuICAgIHN3aXRjaCAocmVzLnR5cGUpIHtcbiAgICAgIGNhc2UgJ2Nsb3NlJzpcbiAgICAgICAgdGhpcy5fY2xvc2UobnVsbCwgcmVzLml0ZW0uaW5kZXgsIHJlcy5pbmNsdWRlTm9uQ2xvc2VhYmxlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjbG9zZVJpZ2h0JzpcbiAgICAgICAgZm4gPSAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5zcnYuY2xvc2VSaWdodChyZXMuaXRlbS51cmwsIHJlcy5pbmNsdWRlTm9uQ2xvc2VhYmxlKTtcbiAgICAgICAgICB0aGlzLmNsb3NlLmVtaXQobnVsbCk7XG4gICAgICAgIH07XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY2xlYXInOlxuICAgICAgY2FzZSAnY2xvc2VPdGhlcic6XG4gICAgICAgIGZuID0gKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc3J2LmNsZWFyKHJlcy5pbmNsdWRlTm9uQ2xvc2VhYmxlKTtcbiAgICAgICAgICB0aGlzLmNsb3NlLmVtaXQobnVsbCk7XG4gICAgICAgIH07XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZiAoIWZuKSB7XG4gICAgICByZXR1cm4gO1xuICAgIH1cbiAgICBpZiAoIXJlcy5pdGVtLmFjdGl2ZSAmJiByZXMuaXRlbS5pbmRleCA8PSB0aGlzLmFjaXR2ZUluZGV4KSB7XG4gICAgICB0aGlzLnRvKG51bGwsIHJlcy5pdGVtLmluZGV4LCBmbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZuKCk7XG4gICAgfVxuICB9XG5cbiAgcmVmU3RhdHVzKGRjID0gdHJ1ZSkge1xuICAgIGlmICh0aGlzLmxpc3QubGVuZ3RoKSB7XG4gICAgICB0aGlzLmxpc3RbdGhpcy5saXN0Lmxlbmd0aCAtIDFdLmxhc3QgPSB0cnVlO1xuICAgICAgdGhpcy5saXN0LmZvckVhY2goKGksIGlkeCkgPT4gKGkuYWN0aXZlID0gdGhpcy5wb3MgPT09IGlkeCkpO1xuICAgIH1cbiAgICBpZiAoZGMpIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHRvKGU6IEV2ZW50IHwgbnVsbCwgaW5kZXg6IG51bWJlciwgY2I/OiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKGUgIT0gbnVsbCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gICAgaW5kZXggPSBNYXRoLm1heCgwLCBNYXRoLm1pbihpbmRleCwgdGhpcy5saXN0Lmxlbmd0aCAtIDEpKTtcbiAgICBjb25zdCBpdGVtID0gdGhpcy5saXN0W2luZGV4XTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKGl0ZW0udXJsKS50aGVuKHJlcyA9PiB7XG4gICAgICBpZiAoIXJlcykgcmV0dXJuO1xuICAgICAgdGhpcy5wb3MgPSBpbmRleDtcbiAgICAgIHRoaXMuaXRlbSA9IGl0ZW07XG4gICAgICB0aGlzLnJlZlN0YXR1cygpO1xuICAgICAgdGhpcy5jaGFuZ2UuZW1pdChpdGVtKTtcbiAgICAgIGlmIChjYikge1xuICAgICAgICBjYigpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgX2Nsb3NlKGU6IEV2ZW50IHwgbnVsbCwgaWR4OiBudW1iZXIsIGluY2x1ZGVOb25DbG9zZWFibGU6IGJvb2xlYW4pIHtcbiAgICBpZiAoZSAhPSBudWxsKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgICBjb25zdCBpdGVtID0gdGhpcy5saXN0W2lkeF07XG4gICAgdGhpcy5zcnYuY2xvc2UoaXRlbS51cmwsIGluY2x1ZGVOb25DbG9zZWFibGUpO1xuICAgIHRoaXMuY2xvc2UuZW1pdChpdGVtKTtcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMucm91dGVyLmV2ZW50c1xuICAgICAgLnBpcGUoXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCksXG4gICAgICAgIGZpbHRlcihldnQgPT4gZXZ0IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCksXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuZ2VuTGlzdCgpKTtcblxuICAgIHRoaXMuc3J2LmNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpLnN1YnNjcmliZShyZXMgPT4gdGhpcy5nZW5MaXN0KHJlcyEpKTtcblxuICAgIHRoaXMuaTE4blNydi5jaGFuZ2VcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoKCkgPT4gdGhpcy5zcnYuaW5pdGVkKSxcbiAgICAgICAgdGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSxcbiAgICAgICAgZGVib3VuY2VUaW1lKDEwMCksXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuZ2VuTGlzdCgpKTtcblxuICAgIHRoaXMuZ2VuTGlzdCgpO1xuICAgIHRoaXMuc3J2LmluaXQoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgW1AgaW4ga2V5b2YgdGhpc10/OiBTaW1wbGVDaGFuZ2UgfSAmIFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5tYXgpIHRoaXMuc3J2Lm1heCA9IHRoaXMubWF4O1xuICAgIGlmIChjaGFuZ2VzLmV4Y2x1ZGVzKSB0aGlzLnNydi5leGNsdWRlcyA9IHRoaXMuZXhjbHVkZXM7XG4gICAgaWYgKGNoYW5nZXMubW9kZSkgdGhpcy5zcnYubW9kZSA9IHRoaXMubW9kZTtcbiAgICBpZiAoY2hhbmdlcy5rZWVwaW5nU2Nyb2xsKSB7XG4gICAgICB0aGlzLnNydi5rZWVwaW5nU2Nyb2xsID0gdGhpcy5rZWVwaW5nU2Nyb2xsO1xuICAgICAgdGhpcy5zcnYua2VlcGluZ1Njcm9sbENvbnRhaW5lciA9IHRoaXMuX2tlZXBpbmdTY3JvbGxDb250YWluZXI7XG4gICAgfVxuXG4gICAgdGhpcy5zcnYuZGVidWcgPSB0aGlzLmRlYnVnO1xuXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgY29uc3QgeyB1bnN1YnNjcmliZSQgfSA9IHRoaXM7XG4gICAgdW5zdWJzY3JpYmUkLm5leHQoKTtcbiAgICB1bnN1YnNjcmliZSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19