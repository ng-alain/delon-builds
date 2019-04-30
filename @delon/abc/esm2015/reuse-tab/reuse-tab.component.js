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
export class ReuseTabComponent {
    // #endregion
    /**
     * @param {?} el
     * @param {?} srv
     * @param {?} cdr
     * @param {?} router
     * @param {?} route
     * @param {?} render
     * @param {?} i18nSrv
     * @param {?} doc
     */
    constructor(el, srv, cdr, router, route, render, i18nSrv, doc) {
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
    /**
     * @param {?} value
     * @return {?}
     */
    set keepingScrollContainer(value) {
        this._keepingScrollContainer = typeof value === 'string' ? this.doc.querySelector(value) : value;
    }
    /**
     * @private
     * @param {?} title
     * @return {?}
     */
    genTit(title) {
        return title.i18n && this.i18nSrv ? this.i18nSrv.fanyi(title.i18n) : title.text;
    }
    /**
     * @private
     * @param {?=} notify
     * @return {?}
     */
    genList(notify) {
        /** @type {?} */
        const isClosed = notify && notify.active === 'close';
        /** @type {?} */
        const beforeClosePos = isClosed ? this.list.findIndex((/**
         * @param {?} w
         * @return {?}
         */
        w => w.url === (/** @type {?} */ (notify)).url)) : -1;
        /** @type {?} */
        const ls = this.srv.items.map((/**
         * @param {?} item
         * @param {?} index
         * @return {?}
         */
        (item, index) => {
            return (/** @type {?} */ ({
                url: item.url,
                title: this.genTit(item.title),
                closable: this.allowClose && item.closable && this.srv.count > 0,
                index,
                active: false,
                last: false,
            }));
        }));
        if (this.showCurrent) {
            /** @type {?} */
            const snapshot = this.route.snapshot;
            /** @type {?} */
            const url = this.srv.getUrl(snapshot);
            /** @type {?} */
            const idx = ls.findIndex((/**
             * @param {?} w
             * @return {?}
             */
            w => w.url === url));
            // jump directly when the current exists in the list
            // or create a new current item and jump
            if (idx !== -1 || (isClosed && (/** @type {?} */ (notify)).url === url)) {
                this.pos = isClosed ? (idx >= beforeClosePos ? this.pos - 1 : this.pos) : idx;
            }
            else {
                /** @type {?} */
                const snapshotTrue = this.srv.getTruthRoute(snapshot);
                ls.push((/** @type {?} */ ({
                    url,
                    title: this.genTit(this.srv.getTitle(url, snapshotTrue)),
                    closable: this.allowClose && this.srv.count > 0 && this.srv.getClosable(url, snapshotTrue),
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
    }
    /**
     * @private
     * @return {?}
     */
    visibility() {
        if (this.showCurrent)
            return;
        this.render.setStyle(this.el, 'display', this.list.length === 0 ? 'none' : 'block');
    }
    // #region UI
    /**
     * @private
     * @return {?}
     */
    get acitveIndex() {
        return (/** @type {?} */ (this.list.find((/**
         * @param {?} w
         * @return {?}
         */
        w => w.active)))).index;
    }
    /**
     * @param {?} res
     * @return {?}
     */
    cmChange(res) {
        /** @type {?} */
        let fn = null;
        switch (res.type) {
            case 'close':
                this._close(null, res.item.index, res.includeNonCloseable);
                break;
            case 'closeRight':
                fn = (/**
                 * @return {?}
                 */
                () => {
                    this.srv.closeRight(res.item.url, res.includeNonCloseable);
                    this.close.emit(null);
                });
                break;
            case 'clear':
            case 'closeOther':
                fn = (/**
                 * @return {?}
                 */
                () => {
                    this.srv.clear(res.includeNonCloseable);
                    this.close.emit(null);
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
    }
    /**
     * @param {?=} dc
     * @return {?}
     */
    refStatus(dc = true) {
        if (this.list.length) {
            this.list[this.list.length - 1].last = true;
            this.list.forEach((/**
             * @param {?} i
             * @param {?} idx
             * @return {?}
             */
            (i, idx) => (i.active = this.pos === idx)));
        }
        if (dc)
            this.cdr.detectChanges();
    }
    /**
     * @param {?} e
     * @param {?} index
     * @param {?=} cb
     * @return {?}
     */
    to(e, index, cb) {
        if (e != null) {
            e.preventDefault();
            e.stopPropagation();
        }
        index = Math.max(0, Math.min(index, this.list.length - 1));
        /** @type {?} */
        const item = this.list[index];
        this.router.navigateByUrl(item.url).then((/**
         * @param {?} res
         * @return {?}
         */
        res => {
            if (!res)
                return;
            this.pos = index;
            this.item = item;
            this.refStatus();
            this.change.emit(item);
            if (cb) {
                cb();
            }
        }));
    }
    /**
     * @param {?} e
     * @param {?} idx
     * @param {?} includeNonCloseable
     * @return {?}
     */
    _close(e, idx, includeNonCloseable) {
        if (e != null) {
            e.preventDefault();
            e.stopPropagation();
        }
        /** @type {?} */
        const item = this.list[idx];
        this.srv.close(item.url, includeNonCloseable);
        this.close.emit(item);
        this.cdr.detectChanges();
        return false;
    }
    // #endregion
    /**
     * @return {?}
     */
    ngOnInit() {
        this.router.events
            .pipe(takeUntil(this.unsubscribe$), filter((/**
         * @param {?} evt
         * @return {?}
         */
        evt => evt instanceof NavigationEnd)))
            .subscribe((/**
         * @return {?}
         */
        () => this.genList()));
        this.srv.change.pipe(takeUntil(this.unsubscribe$)).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        res => this.genList((/** @type {?} */ (res)))));
        this.i18nSrv.change
            .pipe(filter((/**
         * @return {?}
         */
        () => this.srv.inited)), takeUntil(this.unsubscribe$), debounceTime(100))
            .subscribe((/**
         * @return {?}
         */
        () => this.genList()));
        this.genList();
        this.srv.init();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
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
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        const { unsubscribe$ } = this;
        unsubscribe$.next();
        unsubscribe$.complete();
    }
}
ReuseTabComponent.decorators = [
    { type: Component, args: [{
                selector: 'reuse-tab',
                exportAs: 'reuseTab',
                template: "<nz-tabset [nzSelectedIndex]=\"pos\" [nzAnimated]=\"false\" nzType=\"line\"\n  [nzTabBarExtraContent]=\"tabBarExtraContent\"\n  [nzTabBarGutter]=\"tabBarGutter\"\n  [nzTabBarStyle]=\"tabBarStyle\">\n  <nz-tab *ngFor=\"let i of list; let index = index\" [nzTitle]=\"titleTemplate\">\n    <ng-template #titleTemplate>\n      <span [reuse-tab-context-menu]=\"i\" [customContextMenu]=\"customContextMenu\" (click)=\"to($event, index)\" class=\"reuse-tab__name\">{{i.title}}</span>\n      <i *ngIf=\"i.closable\" nz-icon nzType=\"close\" class=\"reuse-tab__op\" (click)=\"_close($event, index, false)\"></i>\n    </ng-template>\n  </nz-tab>\n</nz-tabset>\n<reuse-tab-context [i18n]=\"i18n\" (change)=\"cmChange($event)\"></reuse-tab-context>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [ReuseTabContextService],
                host: {
                    '[class.reuse-tab]': 'true',
                }
            }] }
];
/** @nocollapse */
ReuseTabComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ReuseTabService },
    { type: ChangeDetectorRef },
    { type: Router },
    { type: ActivatedRoute },
    { type: Renderer2 },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [ALAIN_I18N_TOKEN,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2UtdGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvcmV1c2UtdGFiLyIsInNvdXJjZXMiOlsicmV1c2UtdGFiLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUlMLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUdULFdBQVcsR0FDWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN4RSxPQUFPLEVBQW9CLGdCQUFnQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFakUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQU1MLGlCQUFpQixHQUdsQixNQUFNLHdCQUF3QixDQUFDO0FBQ2hDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQVl0RCxNQUFNLE9BQU8saUJBQWlCOzs7Ozs7Ozs7Ozs7SUErQjVCLFlBQ0UsRUFBYyxFQUNOLEdBQW9CLEVBQ3BCLEdBQXNCLEVBQ3RCLE1BQWMsRUFDZCxLQUFxQixFQUNyQixNQUFpQixFQUNxQixPQUF5QixFQUM3QyxHQUFRO1FBTjFCLFFBQUcsR0FBSCxHQUFHLENBQWlCO1FBQ3BC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LFFBQVEsWUFBSSxNQUFNLFNBQUMsZ0JBQWdCOzRDQUNuQyxNQUFNLFNBQUMsUUFBUTs7O21CQTdCakIsS0FBSzttQkFDTCxLQUFLO29CQUNMLEtBQUs7a0JBQ0wsS0FBSzt1QkFDTCxLQUFLO3lCQUNMLEtBQUs7MEJBQ0wsS0FBSzs0QkFDTCxLQUFLO3FDQUNMLEtBQUs7Z0NBSUwsS0FBSztpQ0FDTCxLQUFLOzJCQUNMLEtBQUs7MEJBQ0wsS0FBSztxQkFDTCxNQUFNO29CQUNOLE1BQU07O0FBZmtCO0lBQWYsWUFBWSxFQUFFOztnREFBZTtBQUNmO0lBQWQsV0FBVyxFQUFFOzs4Q0FBYTtBQUVYO0lBQWYsWUFBWSxFQUFFOztxREFBbUI7QUFDbEI7SUFBZixZQUFZLEVBQUU7O3NEQUFvQjtBQUNuQjtJQUFmLFlBQVksRUFBRTs7d0RBQXVCOzs7Ozs7SUFoQi9DLCtCQUF3Qjs7Ozs7SUFDeEIseUNBQTJDOzs7OztJQUMzQyxvREFBeUM7O0lBQ3pDLGlDQUF1Qjs7SUFDdkIsaUNBQWdCOztJQUNoQixnQ0FBUTs7SUFJUixpQ0FBMEQ7O0lBQzFELGlDQUFnQzs7SUFDaEMsa0NBQXVDOztJQUN2QyxnQ0FBb0M7O0lBQ3BDLHFDQUE0Qjs7SUFDNUIsdUNBQTJDOztJQUMzQyx3Q0FBNEM7O0lBQzVDLDBDQUErQzs7SUFLL0MsOENBQTBEOztJQUMxRCwrQ0FBK0M7O0lBQy9DLHlDQUE4Qjs7SUFDOUIsd0NBQWdEOztJQUNoRCxtQ0FBMEQ7O0lBQzFELGtDQUFnRTs7Ozs7SUFNOUQsZ0NBQTRCOzs7OztJQUM1QixnQ0FBOEI7Ozs7O0lBQzlCLG1DQUFzQjs7Ozs7SUFDdEIsa0NBQTZCOzs7OztJQUM3QixtQ0FBeUI7Ozs7O0lBQ3pCLG9DQUF1RTs7Ozs7SUFDdkUsZ0NBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2UsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBOYXZpZ2F0aW9uRW5kLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQWxhaW5JMThOU2VydmljZSwgQUxBSU5fSTE4Tl9UT0tFTiB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBmaWx0ZXIsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgUmV1c2VUYWJDb250ZXh0U2VydmljZSB9IGZyb20gJy4vcmV1c2UtdGFiLWNvbnRleHQuc2VydmljZSc7XG5pbXBvcnQge1xuICBSZXVzZUNvbnRleHRDbG9zZUV2ZW50LFxuICBSZXVzZUNvbnRleHRJMThuLFxuICBSZXVzZUN1c3RvbUNvbnRleHRNZW51LFxuICBSZXVzZUl0ZW0sXG4gIFJldXNlVGFiQ2FjaGVkLFxuICBSZXVzZVRhYk1hdGNoTW9kZSxcbiAgUmV1c2VUYWJOb3RpZnksXG4gIFJldXNlVGl0bGUsXG59IGZyb20gJy4vcmV1c2UtdGFiLmludGVyZmFjZXMnO1xuaW1wb3J0IHsgUmV1c2VUYWJTZXJ2aWNlIH0gZnJvbSAnLi9yZXVzZS10YWIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3JldXNlLXRhYicsXG4gIGV4cG9ydEFzOiAncmV1c2VUYWInLFxuICB0ZW1wbGF0ZVVybDogJy4vcmV1c2UtdGFiLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1JldXNlVGFiQ29udGV4dFNlcnZpY2VdLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5yZXVzZS10YWJdJzogJ3RydWUnLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBSZXVzZVRhYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGVsOiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIF9rZWVwaW5nU2Nyb2xsQ29udGFpbmVyOiBFbGVtZW50O1xuICBsaXN0OiBSZXVzZUl0ZW1bXSA9IFtdO1xuICBpdGVtOiBSZXVzZUl0ZW07XG4gIHBvcyA9IDA7XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBASW5wdXQoKSBtb2RlOiBSZXVzZVRhYk1hdGNoTW9kZSA9IFJldXNlVGFiTWF0Y2hNb2RlLk1lbnU7XG4gIEBJbnB1dCgpIGkxOG46IFJldXNlQ29udGV4dEkxOG47XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkZWJ1ZyA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBtYXg6IG51bWJlcjtcbiAgQElucHV0KCkgZXhjbHVkZXM6IFJlZ0V4cFtdO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYWxsb3dDbG9zZSA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93Q3VycmVudCA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBrZWVwaW5nU2Nyb2xsID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIHNldCBrZWVwaW5nU2Nyb2xsQ29udGFpbmVyKHZhbHVlOiBzdHJpbmcgfCBFbGVtZW50KSB7XG4gICAgdGhpcy5fa2VlcGluZ1Njcm9sbENvbnRhaW5lciA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyB0aGlzLmRvYy5xdWVyeVNlbGVjdG9yKHZhbHVlKSA6IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpIGN1c3RvbUNvbnRleHRNZW51OiBSZXVzZUN1c3RvbUNvbnRleHRNZW51W10gPSBbXTtcbiAgQElucHV0KCkgdGFiQmFyRXh0cmFDb250ZW50OiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgdGFiQmFyR3V0dGVyOiBudW1iZXI7XG4gIEBJbnB1dCgpIHRhYkJhclN0eWxlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxSZXVzZUl0ZW0+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBjbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8UmV1c2VJdGVtIHwgbnVsbD4oKTtcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgY29uc3RydWN0b3IoXG4gICAgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBzcnY6IFJldXNlVGFiU2VydmljZSxcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIHJlbmRlcjogUmVuZGVyZXIyLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoQUxBSU5fSTE4Tl9UT0tFTikgcHJpdmF0ZSBpMThuU3J2OiBBbGFpbkkxOE5TZXJ2aWNlLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBhbnksXG4gICkge1xuICAgIHRoaXMuZWwgPSBlbC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5UaXQodGl0bGU6IFJldXNlVGl0bGUpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aXRsZS5pMThuICYmIHRoaXMuaTE4blNydiA/IHRoaXMuaTE4blNydi5mYW55aSh0aXRsZS5pMThuKSA6IHRpdGxlLnRleHQ7XG4gIH1cblxuICBwcml2YXRlIGdlbkxpc3Qobm90aWZ5PzogUmV1c2VUYWJOb3RpZnkpIHtcbiAgICBjb25zdCBpc0Nsb3NlZCA9IG5vdGlmeSAmJiBub3RpZnkuYWN0aXZlID09PSAnY2xvc2UnO1xuICAgIGNvbnN0IGJlZm9yZUNsb3NlUG9zID0gaXNDbG9zZWQgPyB0aGlzLmxpc3QuZmluZEluZGV4KHcgPT4gdy51cmwgPT09IG5vdGlmeSEudXJsKSA6IC0xO1xuICAgIGNvbnN0IGxzID0gdGhpcy5zcnYuaXRlbXMubWFwKChpdGVtOiBSZXVzZVRhYkNhY2hlZCwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdXJsOiBpdGVtLnVybCxcbiAgICAgICAgdGl0bGU6IHRoaXMuZ2VuVGl0KGl0ZW0udGl0bGUpLFxuICAgICAgICBjbG9zYWJsZTogdGhpcy5hbGxvd0Nsb3NlICYmIGl0ZW0uY2xvc2FibGUgJiYgdGhpcy5zcnYuY291bnQgPiAwLFxuICAgICAgICBpbmRleCxcbiAgICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgbGFzdDogZmFsc2UsXG4gICAgICB9IGFzIFJldXNlSXRlbTtcbiAgICB9KTtcbiAgICBpZiAodGhpcy5zaG93Q3VycmVudCkge1xuICAgICAgY29uc3Qgc25hcHNob3QgPSB0aGlzLnJvdXRlLnNuYXBzaG90O1xuICAgICAgY29uc3QgdXJsID0gdGhpcy5zcnYuZ2V0VXJsKHNuYXBzaG90KTtcbiAgICAgIGNvbnN0IGlkeCA9IGxzLmZpbmRJbmRleCh3ID0+IHcudXJsID09PSB1cmwpO1xuICAgICAgLy8ganVtcCBkaXJlY3RseSB3aGVuIHRoZSBjdXJyZW50IGV4aXN0cyBpbiB0aGUgbGlzdFxuICAgICAgLy8gb3IgY3JlYXRlIGEgbmV3IGN1cnJlbnQgaXRlbSBhbmQganVtcFxuICAgICAgaWYgKGlkeCAhPT0gLTEgfHwgKGlzQ2xvc2VkICYmIG5vdGlmeSEudXJsID09PSB1cmwpKSB7XG4gICAgICAgIHRoaXMucG9zID0gaXNDbG9zZWQgPyAoaWR4ID49IGJlZm9yZUNsb3NlUG9zID8gdGhpcy5wb3MgLSAxIDogdGhpcy5wb3MpIDogaWR4O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgc25hcHNob3RUcnVlID0gdGhpcy5zcnYuZ2V0VHJ1dGhSb3V0ZShzbmFwc2hvdCk7XG4gICAgICAgIGxzLnB1c2goe1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICB0aXRsZTogdGhpcy5nZW5UaXQodGhpcy5zcnYuZ2V0VGl0bGUodXJsLCBzbmFwc2hvdFRydWUpKSxcbiAgICAgICAgICBjbG9zYWJsZTogdGhpcy5hbGxvd0Nsb3NlICYmIHRoaXMuc3J2LmNvdW50ID4gMCAmJiB0aGlzLnNydi5nZXRDbG9zYWJsZSh1cmwsIHNuYXBzaG90VHJ1ZSksXG4gICAgICAgICAgaW5kZXg6IGxzLmxlbmd0aCxcbiAgICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICAgIGxhc3Q6IGZhbHNlLFxuICAgICAgICB9IGFzIFJldXNlSXRlbSk7XG4gICAgICAgIHRoaXMucG9zID0gbHMubGVuZ3RoIC0gMTtcbiAgICAgIH1cbiAgICAgIC8vIGZpeCB1bmFibGVkIGNsb3NlIGxhc3QgaXRlbVxuICAgICAgaWYgKGxzLmxlbmd0aCA8PSAxKSBsc1swXS5jbG9zYWJsZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHRoaXMubGlzdCA9IGxzO1xuXG4gICAgaWYgKGxzLmxlbmd0aCAmJiBpc0Nsb3NlZCkge1xuICAgICAgdGhpcy50byhudWxsLCB0aGlzLnBvcyk7XG4gICAgfVxuXG4gICAgdGhpcy5yZWZTdGF0dXMoZmFsc2UpO1xuICAgIHRoaXMudmlzaWJpbGl0eSgpO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgdmlzaWJpbGl0eSgpIHtcbiAgICBpZiAodGhpcy5zaG93Q3VycmVudCkgcmV0dXJuO1xuICAgIHRoaXMucmVuZGVyLnNldFN0eWxlKHRoaXMuZWwsICdkaXNwbGF5JywgdGhpcy5saXN0Lmxlbmd0aCA9PT0gMCA/ICdub25lJyA6ICdibG9jaycpO1xuICB9XG5cbiAgLy8gI3JlZ2lvbiBVSVxuXG4gIHByaXZhdGUgZ2V0IGFjaXR2ZUluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLmxpc3QuZmluZCh3ID0+IHcuYWN0aXZlKSEuaW5kZXg7XG4gIH1cblxuICBjbUNoYW5nZShyZXM6IFJldXNlQ29udGV4dENsb3NlRXZlbnQpIHtcbiAgICBsZXQgZm46ICgoKSA9PiB2b2lkKSB8IG51bGwgPSBudWxsO1xuICAgIHN3aXRjaCAocmVzLnR5cGUpIHtcbiAgICAgIGNhc2UgJ2Nsb3NlJzpcbiAgICAgICAgdGhpcy5fY2xvc2UobnVsbCwgcmVzLml0ZW0uaW5kZXgsIHJlcy5pbmNsdWRlTm9uQ2xvc2VhYmxlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjbG9zZVJpZ2h0JzpcbiAgICAgICAgZm4gPSAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5zcnYuY2xvc2VSaWdodChyZXMuaXRlbS51cmwsIHJlcy5pbmNsdWRlTm9uQ2xvc2VhYmxlKTtcbiAgICAgICAgICB0aGlzLmNsb3NlLmVtaXQobnVsbCk7XG4gICAgICAgIH07XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY2xlYXInOlxuICAgICAgY2FzZSAnY2xvc2VPdGhlcic6XG4gICAgICAgIGZuID0gKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc3J2LmNsZWFyKHJlcy5pbmNsdWRlTm9uQ2xvc2VhYmxlKTtcbiAgICAgICAgICB0aGlzLmNsb3NlLmVtaXQobnVsbCk7XG4gICAgICAgIH07XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZiAoIWZuKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghcmVzLml0ZW0uYWN0aXZlICYmIHJlcy5pdGVtLmluZGV4IDw9IHRoaXMuYWNpdHZlSW5kZXgpIHtcbiAgICAgIHRoaXMudG8obnVsbCwgcmVzLml0ZW0uaW5kZXgsIGZuKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm4oKTtcbiAgICB9XG4gIH1cblxuICByZWZTdGF0dXMoZGMgPSB0cnVlKSB7XG4gICAgaWYgKHRoaXMubGlzdC5sZW5ndGgpIHtcbiAgICAgIHRoaXMubGlzdFt0aGlzLmxpc3QubGVuZ3RoIC0gMV0ubGFzdCA9IHRydWU7XG4gICAgICB0aGlzLmxpc3QuZm9yRWFjaCgoaSwgaWR4KSA9PiAoaS5hY3RpdmUgPSB0aGlzLnBvcyA9PT0gaWR4KSk7XG4gICAgfVxuICAgIGlmIChkYykgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgdG8oZTogRXZlbnQgfCBudWxsLCBpbmRleDogbnVtYmVyLCBjYj86ICgpID0+IHZvaWQpIHtcbiAgICBpZiAoZSAhPSBudWxsKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgICBpbmRleCA9IE1hdGgubWF4KDAsIE1hdGgubWluKGluZGV4LCB0aGlzLmxpc3QubGVuZ3RoIC0gMSkpO1xuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmxpc3RbaW5kZXhdO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoaXRlbS51cmwpLnRoZW4ocmVzID0+IHtcbiAgICAgIGlmICghcmVzKSByZXR1cm47XG4gICAgICB0aGlzLnBvcyA9IGluZGV4O1xuICAgICAgdGhpcy5pdGVtID0gaXRlbTtcbiAgICAgIHRoaXMucmVmU3RhdHVzKCk7XG4gICAgICB0aGlzLmNoYW5nZS5lbWl0KGl0ZW0pO1xuICAgICAgaWYgKGNiKSB7XG4gICAgICAgIGNiKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBfY2xvc2UoZTogRXZlbnQgfCBudWxsLCBpZHg6IG51bWJlciwgaW5jbHVkZU5vbkNsb3NlYWJsZTogYm9vbGVhbikge1xuICAgIGlmIChlICE9IG51bGwpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmxpc3RbaWR4XTtcbiAgICB0aGlzLnNydi5jbG9zZShpdGVtLnVybCwgaW5jbHVkZU5vbkNsb3NlYWJsZSk7XG4gICAgdGhpcy5jbG9zZS5lbWl0KGl0ZW0pO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5yb3V0ZXIuZXZlbnRzXG4gICAgICAucGlwZShcbiAgICAgICAgdGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSxcbiAgICAgICAgZmlsdGVyKGV2dCA9PiBldnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSxcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5nZW5MaXN0KCkpO1xuXG4gICAgdGhpcy5zcnYuY2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSkuc3Vic2NyaWJlKHJlcyA9PiB0aGlzLmdlbkxpc3QocmVzISkpO1xuXG4gICAgdGhpcy5pMThuU3J2LmNoYW5nZVxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcigoKSA9PiB0aGlzLnNydi5pbml0ZWQpLFxuICAgICAgICB0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpLFxuICAgICAgICBkZWJvdW5jZVRpbWUoMTAwKSxcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5nZW5MaXN0KCkpO1xuXG4gICAgdGhpcy5nZW5MaXN0KCk7XG4gICAgdGhpcy5zcnYuaW5pdCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogeyBbUCBpbiBrZXlvZiB0aGlzXT86IFNpbXBsZUNoYW5nZSB9ICYgU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLm1heCkgdGhpcy5zcnYubWF4ID0gdGhpcy5tYXg7XG4gICAgaWYgKGNoYW5nZXMuZXhjbHVkZXMpIHRoaXMuc3J2LmV4Y2x1ZGVzID0gdGhpcy5leGNsdWRlcztcbiAgICBpZiAoY2hhbmdlcy5tb2RlKSB0aGlzLnNydi5tb2RlID0gdGhpcy5tb2RlO1xuICAgIGlmIChjaGFuZ2VzLmtlZXBpbmdTY3JvbGwpIHtcbiAgICAgIHRoaXMuc3J2LmtlZXBpbmdTY3JvbGwgPSB0aGlzLmtlZXBpbmdTY3JvbGw7XG4gICAgICB0aGlzLnNydi5rZWVwaW5nU2Nyb2xsQ29udGFpbmVyID0gdGhpcy5fa2VlcGluZ1Njcm9sbENvbnRhaW5lcjtcbiAgICB9XG5cbiAgICB0aGlzLnNydi5kZWJ1ZyA9IHRoaXMuZGVidWc7XG5cbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBjb25zdCB7IHVuc3Vic2NyaWJlJCB9ID0gdGhpcztcbiAgICB1bnN1YnNjcmliZSQubmV4dCgpO1xuICAgIHVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=