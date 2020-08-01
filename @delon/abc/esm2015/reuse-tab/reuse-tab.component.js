/**
 * @fileoverview added by tsickle
 * Generated from: reuse-tab.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Inject, Input, Optional, Output, TemplateRef, ViewChild, ViewEncapsulation, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { InputBoolean, InputNumber } from '@delon/util';
import { NzTabSetComponent } from 'ng-zorro-antd/tabs';
import { Subject } from 'rxjs';
import { debounceTime, filter, takeUntil } from 'rxjs/operators';
import { ReuseTabContextService } from './reuse-tab-context.service';
import { ReuseTabMatchMode, } from './reuse-tab.interfaces';
import { ReuseTabService } from './reuse-tab.service';
export class ReuseTabComponent {
    // #endregion
    /**
     * @param {?} srv
     * @param {?} cdr
     * @param {?} router
     * @param {?} route
     * @param {?} i18nSrv
     * @param {?} doc
     */
    constructor(srv, cdr, router, route, i18nSrv, doc) {
        this.srv = srv;
        this.cdr = cdr;
        this.router = router;
        this.route = route;
        this.i18nSrv = i18nSrv;
        this.doc = doc;
        this.unsubscribe$ = new Subject();
        this.updatePos$ = new Subject();
        this.list = [];
        this.pos = 0;
        // #region fields
        this.mode = ReuseTabMatchMode.Menu;
        this.debug = false;
        this.allowClose = true;
        this.keepingScroll = false;
        this.customContextMenu = [];
        this.tabType = 'line';
        this.routeParamMatchMode = 'strict';
        // tslint:disable-next-line:no-output-native
        this.change = new EventEmitter();
        // tslint:disable-next-line:no-output-native
        this.close = new EventEmitter();
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
        return title.i18n && this.i18nSrv ? this.i18nSrv.fanyi(title.i18n) : (/** @type {?} */ (title.text));
    }
    /**
     * @private
     * @return {?}
     */
    get curUrl() {
        return this.srv.getUrl(this.route.snapshot);
    }
    /**
     * @private
     * @return {?}
     */
    genCurItem() {
        /** @type {?} */
        const url = this.curUrl;
        /** @type {?} */
        const snapshotTrue = this.srv.getTruthRoute(this.route.snapshot);
        return {
            url,
            title: this.genTit(this.srv.getTitle(url, snapshotTrue)),
            closable: this.allowClose && this.srv.count > 0 && this.srv.getClosable(url, snapshotTrue),
            active: false,
            last: false,
            index: 0,
        };
    }
    /**
     * @private
     * @param {?} notify
     * @return {?}
     */
    genList(notify) {
        /** @type {?} */
        const ls = this.srv.items.map((/**
         * @param {?} item
         * @param {?} index
         * @return {?}
         */
        (item, index) => ((/** @type {?} */ ({
            url: item.url,
            title: this.genTit(item.title),
            closable: this.allowClose && item.closable && this.srv.count > 0,
            index,
            active: false,
            last: false,
        })))));
        /** @type {?} */
        const url = this.curUrl;
        /** @type {?} */
        let addCurrent = ls.findIndex((/**
         * @param {?} w
         * @return {?}
         */
        w => w.url === url)) === -1;
        if (notify && notify.active === 'close' && notify.url === url) {
            addCurrent = false;
            /** @type {?} */
            let toPos = 0;
            /** @type {?} */
            const curItem = (/** @type {?} */ (this.list.find((/**
             * @param {?} w
             * @return {?}
             */
            w => w.url === url))));
            if (curItem.index === ls.length) {
                // When closed is last
                toPos = ls.length - 1;
            }
            else if (curItem.index < ls.length) {
                // Should be actived next tab when closed is middle
                toPos = Math.max(0, curItem.index);
            }
            this.router.navigateByUrl(ls[toPos].url);
        }
        if (addCurrent) {
            ls.push(this.genCurItem());
        }
        ls.forEach((/**
         * @param {?} item
         * @param {?} index
         * @return {?}
         */
        (item, index) => (item.index = index)));
        if (ls.length === 1) {
            ls[0].closable = false;
        }
        this.list = ls;
        this.cdr.detectChanges();
        this.updatePos$.next();
    }
    /**
     * @private
     * @param {?} res
     * @return {?}
     */
    updateTitle(res) {
        /** @type {?} */
        const item = this.list.find((/**
         * @param {?} w
         * @return {?}
         */
        w => w.url === (/** @type {?} */ (res)).url));
        if (!item)
            return;
        item.title = this.genTit((/** @type {?} */ ((/** @type {?} */ (res)).title)));
        this.cdr.detectChanges();
    }
    /**
     * @private
     * @param {?} item
     * @return {?}
     */
    refresh(item) {
        this.srv.runHook('_onReuseInit', this.pos === item.index ? this.srv.componentRef : item.index);
    }
    // #region UI
    /**
     * @param {?} res
     * @return {?}
     */
    contextMenuChange(res) {
        /** @type {?} */
        let fn = null;
        switch (res.type) {
            case 'refresh':
                this.refresh(res.item);
                break;
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
        if (!res.item.active && res.item.index <= (/** @type {?} */ (this.list.find((/**
         * @param {?} w
         * @return {?}
         */
        w => w.active)))).index) {
            this._to(res.item.index, fn);
        }
        else {
            fn();
        }
    }
    /**
     * @param {?} index
     * @param {?=} cb
     * @return {?}
     */
    _to(index, cb) {
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
            this.item = item;
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
    /**
     * @param {?} instance
     * @return {?}
     */
    activate(instance) {
        this.srv.componentRef = { instance };
    }
    // #endregion
    /**
     * @return {?}
     */
    ngOnInit() {
        this.updatePos$.pipe(takeUntil(this.unsubscribe$), debounceTime(50)).subscribe((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const url = this.srv.getUrl(this.route.snapshot);
            /** @type {?} */
            const ls = this.list.filter((/**
             * @param {?} w
             * @return {?}
             */
            w => w.url === url || !this.srv.isExclude(w.url)));
            if (ls.length === 0) {
                return;
            }
            /** @type {?} */
            const last = ls[ls.length - 1];
            /** @type {?} */
            const item = ls.find((/**
             * @param {?} w
             * @return {?}
             */
            w => w.url === url));
            last.last = true;
            /** @type {?} */
            const pos = item == null ? last.index : item.index;
            ls.forEach((/**
             * @param {?} i
             * @param {?} idx
             * @return {?}
             */
            (i, idx) => (i.active = pos === idx)));
            this.pos = pos;
            // TODO: 目前无法知道为什么 `pos` 无法通过 `nzSelectedIndex` 生效，因此强制使用组件实例的方式来修改，这种方式是安全的
            // https://github.com/ng-alain/ng-alain/issues/1736
            this.tabset.nzSelectedIndex = pos;
            this.list = ls;
            this.cdr.detectChanges();
        }));
        this.srv.change.pipe(takeUntil(this.unsubscribe$)).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        res => {
            var _a;
            switch (res === null || res === void 0 ? void 0 : res.active) {
                case 'title':
                    this.updateTitle(res);
                    return;
                case 'override':
                    if (((_a = res === null || res === void 0 ? void 0 : res.list) === null || _a === void 0 ? void 0 : _a.length) === this.list.length) {
                        this.updatePos$.next();
                    }
                    return;
            }
            this.genList(res);
        }));
        this.i18nSrv.change
            .pipe(filter((/**
         * @return {?}
         */
        () => this.srv.inited)), takeUntil(this.unsubscribe$), debounceTime(100))
            .subscribe((/**
         * @return {?}
         */
        () => this.genList({ active: 'title' })));
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
        if (changes.routeParamMatchMode)
            this.srv.routeParamMatchMode = this.routeParamMatchMode;
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
                selector: 'reuse-tab, [reuse-tab]',
                exportAs: 'reuseTab',
                template: "<nz-tabset\n  #tabset\n  [nzSelectedIndex]=\"pos\"\n  [nzAnimated]=\"false\"\n  [nzType]=\"tabType\"\n  [nzTabBarExtraContent]=\"tabBarExtraContent\"\n  [nzTabBarGutter]=\"tabBarGutter\"\n  [nzTabBarStyle]=\"tabBarStyle\"\n>\n  <nz-tab *ngFor=\"let i of list; let index = index\" [nzTitle]=\"titleTemplate\" (nzClick)=\"_to(index)\">\n    <ng-template #titleTemplate>\n      <div [reuse-tab-context-menu]=\"i\" [customContextMenu]=\"customContextMenu\" class=\"reuse-tab__name\" [attr.title]=\"i.title\">\n        <span [class.reuse-tab__name-width]=\"tabMaxWidth\" [style.max-width.px]=\"tabMaxWidth\">\n          {{ i.title }}\n        </span>\n      </div>\n      <i *ngIf=\"i.closable\" nz-icon nzType=\"close\" class=\"reuse-tab__op\" (click)=\"_close($event, index, false)\"></i>\n    </ng-template>\n  </nz-tab>\n</nz-tabset>\n<reuse-tab-context [i18n]=\"i18n\" (change)=\"contextMenuChange($event)\"></reuse-tab-context>\n",
                host: {
                    '[class.reuse-tab]': 'true',
                    '[class.reuse-tab__line]': `tabType === 'line'`,
                    '[class.reuse-tab__card]': `tabType === 'card'`,
                },
                providers: [ReuseTabContextService],
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
ReuseTabComponent.ctorParameters = () => [
    { type: ReuseTabService },
    { type: ChangeDetectorRef },
    { type: Router },
    { type: ActivatedRoute },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [ALAIN_I18N_TOKEN,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
ReuseTabComponent.propDecorators = {
    tabset: [{ type: ViewChild, args: ['tabset',] }],
    mode: [{ type: Input }],
    i18n: [{ type: Input }],
    debug: [{ type: Input }],
    max: [{ type: Input }],
    tabMaxWidth: [{ type: Input }],
    excludes: [{ type: Input }],
    allowClose: [{ type: Input }],
    keepingScroll: [{ type: Input }],
    keepingScrollContainer: [{ type: Input }],
    customContextMenu: [{ type: Input }],
    tabBarExtraContent: [{ type: Input }],
    tabBarGutter: [{ type: Input }],
    tabBarStyle: [{ type: Input }],
    tabType: [{ type: Input }],
    routeParamMatchMode: [{ type: Input }],
    change: [{ type: Output }],
    close: [{ type: Output }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], ReuseTabComponent.prototype, "debug", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Number)
], ReuseTabComponent.prototype, "max", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Number)
], ReuseTabComponent.prototype, "tabMaxWidth", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], ReuseTabComponent.prototype, "allowClose", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], ReuseTabComponent.prototype, "keepingScroll", void 0);
if (false) {
    /**
     * @type {?}
     * @private
     */
    ReuseTabComponent.prototype.tabset;
    /**
     * @type {?}
     * @private
     */
    ReuseTabComponent.prototype.unsubscribe$;
    /**
     * @type {?}
     * @private
     */
    ReuseTabComponent.prototype.updatePos$;
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
    ReuseTabComponent.prototype.tabMaxWidth;
    /** @type {?} */
    ReuseTabComponent.prototype.excludes;
    /** @type {?} */
    ReuseTabComponent.prototype.allowClose;
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
    ReuseTabComponent.prototype.tabType;
    /** @type {?} */
    ReuseTabComponent.prototype.routeParamMatchMode;
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
    ReuseTabComponent.prototype.i18nSrv;
    /**
     * @type {?}
     * @private
     */
    ReuseTabComponent.prototype.doc;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2UtdGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9yZXVzZS10YWIvcmV1c2UtdGFiLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUlMLFFBQVEsRUFDUixNQUFNLEVBR04sV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQW9CLGdCQUFnQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQU1MLGlCQUFpQixHQUlsQixNQUFNLHdCQUF3QixDQUFDO0FBQ2hDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQWdCdEQsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7Ozs7OztJQW9DNUIsWUFDVSxHQUFvQixFQUNwQixHQUFzQixFQUN0QixNQUFjLEVBQ2QsS0FBcUIsRUFDaUIsT0FBeUIsRUFDN0MsR0FBUTtRQUwx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O0lBQ3ZDLGdDQUFvQzs7SUFDcEMsd0NBQTRDOztJQUM1QyxxQ0FBNEI7O0lBQzVCLHVDQUEyQzs7SUFDM0MsMENBQStDOztJQUsvQyw4Q0FBMEQ7O0lBQzFELCtDQUErQzs7SUFDL0MseUNBQThCOztJQUM5Qix3Q0FBZ0Q7O0lBQ2hELG9DQUEyQzs7SUFDM0MsZ0RBQXFFOztJQUVyRSxtQ0FBMEQ7O0lBRTFELGtDQUFnRTs7Ozs7SUFLOUQsZ0NBQTRCOzs7OztJQUM1QixnQ0FBOEI7Ozs7O0lBQzlCLG1DQUFzQjs7Ozs7SUFDdEIsa0NBQTZCOzs7OztJQUM3QixvQ0FBdUU7Ozs7O0lBQ3ZFLGdDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZSxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBbGFpbkkxOE5TZXJ2aWNlLCBBTEFJTl9JMThOX1RPS0VOIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBOelRhYlNldENvbXBvbmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQvdGFicyc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGZpbHRlciwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUmV1c2VUYWJDb250ZXh0U2VydmljZSB9IGZyb20gJy4vcmV1c2UtdGFiLWNvbnRleHQuc2VydmljZSc7XG5pbXBvcnQge1xuICBSZXVzZUNvbnRleHRDbG9zZUV2ZW50LFxuICBSZXVzZUNvbnRleHRJMThuLFxuICBSZXVzZUN1c3RvbUNvbnRleHRNZW51LFxuICBSZXVzZUl0ZW0sXG4gIFJldXNlVGFiQ2FjaGVkLFxuICBSZXVzZVRhYk1hdGNoTW9kZSxcbiAgUmV1c2VUYWJOb3RpZnksXG4gIFJldXNlVGFiUm91dGVQYXJhbU1hdGNoTW9kZSxcbiAgUmV1c2VUaXRsZSxcbn0gZnJvbSAnLi9yZXVzZS10YWIuaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBSZXVzZVRhYlNlcnZpY2UgfSBmcm9tICcuL3JldXNlLXRhYi5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncmV1c2UtdGFiLCBbcmV1c2UtdGFiXScsXG4gIGV4cG9ydEFzOiAncmV1c2VUYWInLFxuICB0ZW1wbGF0ZVVybDogJy4vcmV1c2UtdGFiLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MucmV1c2UtdGFiXSc6ICd0cnVlJyxcbiAgICAnW2NsYXNzLnJldXNlLXRhYl9fbGluZV0nOiBgdGFiVHlwZSA9PT0gJ2xpbmUnYCxcbiAgICAnW2NsYXNzLnJldXNlLXRhYl9fY2FyZF0nOiBgdGFiVHlwZSA9PT0gJ2NhcmQnYCxcbiAgfSxcbiAgcHJvdmlkZXJzOiBbUmV1c2VUYWJDb250ZXh0U2VydmljZV0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgUmV1c2VUYWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgQFZpZXdDaGlsZCgndGFic2V0JykgcHJpdmF0ZSB0YWJzZXQ6IE56VGFiU2V0Q29tcG9uZW50O1xuICBwcml2YXRlIHVuc3Vic2NyaWJlJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHByaXZhdGUgdXBkYXRlUG9zJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHByaXZhdGUgX2tlZXBpbmdTY3JvbGxDb250YWluZXI6IEVsZW1lbnQ7XG4gIGxpc3Q6IFJldXNlSXRlbVtdID0gW107XG4gIGl0ZW06IFJldXNlSXRlbTtcbiAgcG9zID0gMDtcblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIEBJbnB1dCgpIG1vZGU6IFJldXNlVGFiTWF0Y2hNb2RlID0gUmV1c2VUYWJNYXRjaE1vZGUuTWVudTtcbiAgQElucHV0KCkgaTE4bjogUmV1c2VDb250ZXh0STE4bjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRlYnVnID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIG1heDogbnVtYmVyO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSB0YWJNYXhXaWR0aDogbnVtYmVyO1xuICBASW5wdXQoKSBleGNsdWRlczogUmVnRXhwW107XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBhbGxvd0Nsb3NlID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGtlZXBpbmdTY3JvbGwgPSBmYWxzZTtcbiAgQElucHV0KClcbiAgc2V0IGtlZXBpbmdTY3JvbGxDb250YWluZXIodmFsdWU6IHN0cmluZyB8IEVsZW1lbnQpIHtcbiAgICB0aGlzLl9rZWVwaW5nU2Nyb2xsQ29udGFpbmVyID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHRoaXMuZG9jLnF1ZXJ5U2VsZWN0b3IodmFsdWUpIDogdmFsdWU7XG4gIH1cbiAgQElucHV0KCkgY3VzdG9tQ29udGV4dE1lbnU6IFJldXNlQ3VzdG9tQ29udGV4dE1lbnVbXSA9IFtdO1xuICBASW5wdXQoKSB0YWJCYXJFeHRyYUNvbnRlbnQ6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSB0YWJCYXJHdXR0ZXI6IG51bWJlcjtcbiAgQElucHV0KCkgdGFiQmFyU3R5bGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gIEBJbnB1dCgpIHRhYlR5cGU6ICdsaW5lJyB8ICdjYXJkJyA9ICdsaW5lJztcbiAgQElucHV0KCkgcm91dGVQYXJhbU1hdGNoTW9kZTogUmV1c2VUYWJSb3V0ZVBhcmFtTWF0Y2hNb2RlID0gJ3N0cmljdCc7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1vdXRwdXQtbmF0aXZlXG4gIEBPdXRwdXQoKSByZWFkb25seSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFJldXNlSXRlbT4oKTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLW91dHB1dC1uYXRpdmVcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjxSZXVzZUl0ZW0gfCBudWxsPigpO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHNydjogUmV1c2VUYWJTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoQUxBSU5fSTE4Tl9UT0tFTikgcHJpdmF0ZSBpMThuU3J2OiBBbGFpbkkxOE5TZXJ2aWNlLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBhbnksXG4gICkge31cblxuICBwcml2YXRlIGdlblRpdCh0aXRsZTogUmV1c2VUaXRsZSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRpdGxlLmkxOG4gJiYgdGhpcy5pMThuU3J2ID8gdGhpcy5pMThuU3J2LmZhbnlpKHRpdGxlLmkxOG4pIDogdGl0bGUudGV4dCE7XG4gIH1cblxuICBwcml2YXRlIGdldCBjdXJVcmwoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3J2LmdldFVybCh0aGlzLnJvdXRlLnNuYXBzaG90KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuQ3VySXRlbSgpOiBSZXVzZUl0ZW0ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuY3VyVXJsO1xuICAgIGNvbnN0IHNuYXBzaG90VHJ1ZSA9IHRoaXMuc3J2LmdldFRydXRoUm91dGUodGhpcy5yb3V0ZS5zbmFwc2hvdCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVybCxcbiAgICAgIHRpdGxlOiB0aGlzLmdlblRpdCh0aGlzLnNydi5nZXRUaXRsZSh1cmwsIHNuYXBzaG90VHJ1ZSkpLFxuICAgICAgY2xvc2FibGU6IHRoaXMuYWxsb3dDbG9zZSAmJiB0aGlzLnNydi5jb3VudCA+IDAgJiYgdGhpcy5zcnYuZ2V0Q2xvc2FibGUodXJsLCBzbmFwc2hvdFRydWUpLFxuICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgIGxhc3Q6IGZhbHNlLFxuICAgICAgaW5kZXg6IDAsXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuTGlzdChub3RpZnk6IFJldXNlVGFiTm90aWZ5IHwgbnVsbCk6IHZvaWQge1xuICAgIGNvbnN0IGxzID0gdGhpcy5zcnYuaXRlbXMubWFwKFxuICAgICAgKGl0ZW06IFJldXNlVGFiQ2FjaGVkLCBpbmRleDogbnVtYmVyKSA9PlxuICAgICAgICAoe1xuICAgICAgICAgIHVybDogaXRlbS51cmwsXG4gICAgICAgICAgdGl0bGU6IHRoaXMuZ2VuVGl0KGl0ZW0udGl0bGUpLFxuICAgICAgICAgIGNsb3NhYmxlOiB0aGlzLmFsbG93Q2xvc2UgJiYgaXRlbS5jbG9zYWJsZSAmJiB0aGlzLnNydi5jb3VudCA+IDAsXG4gICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgICBsYXN0OiBmYWxzZSxcbiAgICAgICAgfSBhcyBSZXVzZUl0ZW0pLFxuICAgICk7XG5cbiAgICBjb25zdCB1cmwgPSB0aGlzLmN1clVybDtcbiAgICBsZXQgYWRkQ3VycmVudCA9IGxzLmZpbmRJbmRleCh3ID0+IHcudXJsID09PSB1cmwpID09PSAtMTtcbiAgICBpZiAobm90aWZ5ICYmIG5vdGlmeS5hY3RpdmUgPT09ICdjbG9zZScgJiYgbm90aWZ5LnVybCA9PT0gdXJsKSB7XG4gICAgICBhZGRDdXJyZW50ID0gZmFsc2U7XG4gICAgICBsZXQgdG9Qb3MgPSAwO1xuICAgICAgY29uc3QgY3VySXRlbSA9IHRoaXMubGlzdC5maW5kKHcgPT4gdy51cmwgPT09IHVybCkhO1xuICAgICAgaWYgKGN1ckl0ZW0uaW5kZXggPT09IGxzLmxlbmd0aCkge1xuICAgICAgICAvLyBXaGVuIGNsb3NlZCBpcyBsYXN0XG4gICAgICAgIHRvUG9zID0gbHMubGVuZ3RoIC0gMTtcbiAgICAgIH0gZWxzZSBpZiAoY3VySXRlbS5pbmRleCA8IGxzLmxlbmd0aCkge1xuICAgICAgICAvLyBTaG91bGQgYmUgYWN0aXZlZCBuZXh0IHRhYiB3aGVuIGNsb3NlZCBpcyBtaWRkbGVcbiAgICAgICAgdG9Qb3MgPSBNYXRoLm1heCgwLCBjdXJJdGVtLmluZGV4KTtcbiAgICAgIH1cbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwobHNbdG9Qb3NdLnVybCk7XG4gICAgfVxuXG4gICAgaWYgKGFkZEN1cnJlbnQpIHtcbiAgICAgIGxzLnB1c2godGhpcy5nZW5DdXJJdGVtKCkpO1xuICAgIH1cblxuICAgIGxzLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiAoaXRlbS5pbmRleCA9IGluZGV4KSk7XG4gICAgaWYgKGxzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgbHNbMF0uY2xvc2FibGUgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5saXN0ID0gbHM7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHRoaXMudXBkYXRlUG9zJC5uZXh0KCk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVRpdGxlKHJlczogUmV1c2VUYWJOb3RpZnkpOiB2b2lkIHtcbiAgICBjb25zdCBpdGVtID0gdGhpcy5saXN0LmZpbmQodyA9PiB3LnVybCA9PT0gcmVzIS51cmwpO1xuICAgIGlmICghaXRlbSkgcmV0dXJuO1xuICAgIGl0ZW0udGl0bGUgPSB0aGlzLmdlblRpdChyZXMhLnRpdGxlISk7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSByZWZyZXNoKGl0ZW06IFJldXNlSXRlbSk6IHZvaWQge1xuICAgIHRoaXMuc3J2LnJ1bkhvb2soJ19vblJldXNlSW5pdCcsIHRoaXMucG9zID09PSBpdGVtLmluZGV4ID8gdGhpcy5zcnYuY29tcG9uZW50UmVmIDogaXRlbS5pbmRleCk7XG4gIH1cblxuICAvLyAjcmVnaW9uIFVJXG5cbiAgY29udGV4dE1lbnVDaGFuZ2UocmVzOiBSZXVzZUNvbnRleHRDbG9zZUV2ZW50KSB7XG4gICAgbGV0IGZuOiAoKCkgPT4gdm9pZCkgfCBudWxsID0gbnVsbDtcbiAgICBzd2l0Y2ggKHJlcy50eXBlKSB7XG4gICAgICBjYXNlICdyZWZyZXNoJzpcbiAgICAgICAgdGhpcy5yZWZyZXNoKHJlcy5pdGVtKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjbG9zZSc6XG4gICAgICAgIHRoaXMuX2Nsb3NlKG51bGwsIHJlcy5pdGVtLmluZGV4LCByZXMuaW5jbHVkZU5vbkNsb3NlYWJsZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY2xvc2VSaWdodCc6XG4gICAgICAgIGZuID0gKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc3J2LmNsb3NlUmlnaHQocmVzLml0ZW0udXJsLCByZXMuaW5jbHVkZU5vbkNsb3NlYWJsZSk7XG4gICAgICAgICAgdGhpcy5jbG9zZS5lbWl0KG51bGwpO1xuICAgICAgICB9O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2Nsb3NlT3RoZXInOlxuICAgICAgICBmbiA9ICgpID0+IHtcbiAgICAgICAgICB0aGlzLnNydi5jbGVhcihyZXMuaW5jbHVkZU5vbkNsb3NlYWJsZSk7XG4gICAgICAgICAgdGhpcy5jbG9zZS5lbWl0KG51bGwpO1xuICAgICAgICB9O1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgaWYgKCFmbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXJlcy5pdGVtLmFjdGl2ZSAmJiByZXMuaXRlbS5pbmRleCA8PSB0aGlzLmxpc3QuZmluZCh3ID0+IHcuYWN0aXZlKSEuaW5kZXgpIHtcbiAgICAgIHRoaXMuX3RvKHJlcy5pdGVtLmluZGV4LCBmbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZuKCk7XG4gICAgfVxuICB9XG5cbiAgX3RvKGluZGV4OiBudW1iZXIsIGNiPzogKCkgPT4gdm9pZCkge1xuICAgIGluZGV4ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oaW5kZXgsIHRoaXMubGlzdC5sZW5ndGggLSAxKSk7XG4gICAgY29uc3QgaXRlbSA9IHRoaXMubGlzdFtpbmRleF07XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChpdGVtLnVybCkudGhlbihyZXMgPT4ge1xuICAgICAgaWYgKCFyZXMpIHJldHVybjtcbiAgICAgIHRoaXMuaXRlbSA9IGl0ZW07XG4gICAgICB0aGlzLmNoYW5nZS5lbWl0KGl0ZW0pO1xuICAgICAgaWYgKGNiKSB7XG4gICAgICAgIGNiKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBfY2xvc2UoZTogRXZlbnQgfCBudWxsLCBpZHg6IG51bWJlciwgaW5jbHVkZU5vbkNsb3NlYWJsZTogYm9vbGVhbikge1xuICAgIGlmIChlICE9IG51bGwpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmxpc3RbaWR4XTtcbiAgICB0aGlzLnNydi5jbG9zZShpdGVtLnVybCwgaW5jbHVkZU5vbkNsb3NlYWJsZSk7XG4gICAgdGhpcy5jbG9zZS5lbWl0KGl0ZW0pO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBhY3RpdmF0ZShpbnN0YW5jZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5zcnYuY29tcG9uZW50UmVmID0geyBpbnN0YW5jZSB9O1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlUG9zJC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCksIGRlYm91bmNlVGltZSg1MCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBjb25zdCB1cmwgPSB0aGlzLnNydi5nZXRVcmwodGhpcy5yb3V0ZS5zbmFwc2hvdCk7XG4gICAgICBjb25zdCBscyA9IHRoaXMubGlzdC5maWx0ZXIodyA9PiB3LnVybCA9PT0gdXJsIHx8ICF0aGlzLnNydi5pc0V4Y2x1ZGUody51cmwpKTtcbiAgICAgIGlmIChscy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBsYXN0ID0gbHNbbHMubGVuZ3RoIC0gMV07XG4gICAgICBjb25zdCBpdGVtID0gbHMuZmluZCh3ID0+IHcudXJsID09PSB1cmwpO1xuICAgICAgbGFzdC5sYXN0ID0gdHJ1ZTtcbiAgICAgIGNvbnN0IHBvcyA9IGl0ZW0gPT0gbnVsbCA/IGxhc3QuaW5kZXggOiBpdGVtLmluZGV4O1xuICAgICAgbHMuZm9yRWFjaCgoaSwgaWR4KSA9PiAoaS5hY3RpdmUgPSBwb3MgPT09IGlkeCkpO1xuICAgICAgdGhpcy5wb3MgPSBwb3M7XG4gICAgICAvLyBUT0RPOiDnm67liY3ml6Dms5Xnn6XpgZPkuLrku4DkuYggYHBvc2Ag5peg5rOV6YCa6L+HIGBuelNlbGVjdGVkSW5kZXhgIOeUn+aViO+8jOWboOatpOW8uuWItuS9v+eUqOe7hOS7tuWunuS+i+eahOaWueW8j+adpeS/ruaUue+8jOi/meenjeaWueW8j+aYr+WuieWFqOeahFxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL25nLWFsYWluL25nLWFsYWluL2lzc3Vlcy8xNzM2XG4gICAgICB0aGlzLnRhYnNldC5uelNlbGVjdGVkSW5kZXggPSBwb3M7XG4gICAgICB0aGlzLmxpc3QgPSBscztcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc3J2LmNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgc3dpdGNoIChyZXM/LmFjdGl2ZSkge1xuICAgICAgICBjYXNlICd0aXRsZSc6XG4gICAgICAgICAgdGhpcy51cGRhdGVUaXRsZShyZXMpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY2FzZSAnb3ZlcnJpZGUnOlxuICAgICAgICAgIGlmIChyZXM/Lmxpc3Q/Lmxlbmd0aCA9PT0gdGhpcy5saXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQb3MkLm5leHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5nZW5MaXN0KHJlcyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmkxOG5TcnYuY2hhbmdlXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKCgpID0+IHRoaXMuc3J2LmluaXRlZCksXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCksXG4gICAgICAgIGRlYm91bmNlVGltZSgxMDApLFxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmdlbkxpc3QoeyBhY3RpdmU6ICd0aXRsZScgfSkpO1xuXG4gICAgdGhpcy5zcnYuaW5pdCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogeyBbUCBpbiBrZXlvZiB0aGlzXT86IFNpbXBsZUNoYW5nZSB9ICYgU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLm1heCkgdGhpcy5zcnYubWF4ID0gdGhpcy5tYXg7XG4gICAgaWYgKGNoYW5nZXMuZXhjbHVkZXMpIHRoaXMuc3J2LmV4Y2x1ZGVzID0gdGhpcy5leGNsdWRlcztcbiAgICBpZiAoY2hhbmdlcy5tb2RlKSB0aGlzLnNydi5tb2RlID0gdGhpcy5tb2RlO1xuICAgIGlmIChjaGFuZ2VzLnJvdXRlUGFyYW1NYXRjaE1vZGUpIHRoaXMuc3J2LnJvdXRlUGFyYW1NYXRjaE1vZGUgPSB0aGlzLnJvdXRlUGFyYW1NYXRjaE1vZGU7XG4gICAgaWYgKGNoYW5nZXMua2VlcGluZ1Njcm9sbCkge1xuICAgICAgdGhpcy5zcnYua2VlcGluZ1Njcm9sbCA9IHRoaXMua2VlcGluZ1Njcm9sbDtcbiAgICAgIHRoaXMuc3J2LmtlZXBpbmdTY3JvbGxDb250YWluZXIgPSB0aGlzLl9rZWVwaW5nU2Nyb2xsQ29udGFpbmVyO1xuICAgIH1cblxuICAgIHRoaXMuc3J2LmRlYnVnID0gdGhpcy5kZWJ1ZztcblxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgdW5zdWJzY3JpYmUkIH0gPSB0aGlzO1xuICAgIHVuc3Vic2NyaWJlJC5uZXh0KCk7XG4gICAgdW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==