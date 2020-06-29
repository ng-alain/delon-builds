/**
 * @fileoverview added by tsickle
 * Generated from: reuse-tab.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
var ReuseTabComponent = /** @class */ (function () {
    // #endregion
    function ReuseTabComponent(srv, cdr, router, route, i18nSrv, doc) {
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
        // tslint:disable-next-line:no-output-native
        this.change = new EventEmitter();
        // tslint:disable-next-line:no-output-native
        this.close = new EventEmitter();
    }
    Object.defineProperty(ReuseTabComponent.prototype, "keepingScrollContainer", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._keepingScrollContainer = typeof value === 'string' ? this.doc.querySelector(value) : value;
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
        return title.i18n && this.i18nSrv ? this.i18nSrv.fanyi(title.i18n) : (/** @type {?} */ (title.text));
    };
    Object.defineProperty(ReuseTabComponent.prototype, "curUrl", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return this.srv.getUrl(this.route.snapshot);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    ReuseTabComponent.prototype.genCurItem = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var url = this.curUrl;
        /** @type {?} */
        var snapshotTrue = this.srv.getTruthRoute(this.route.snapshot);
        return {
            url: url,
            title: this.genTit(this.srv.getTitle(url, snapshotTrue)),
            closable: this.allowClose && this.srv.count > 0 && this.srv.getClosable(url, snapshotTrue),
            active: false,
            last: false,
            index: 0,
        };
    };
    /**
     * @private
     * @param {?} notify
     * @return {?}
     */
    ReuseTabComponent.prototype.genList = /**
     * @private
     * @param {?} notify
     * @return {?}
     */
    function (notify) {
        var _this = this;
        /** @type {?} */
        var ls = this.srv.items.map((/**
         * @param {?} item
         * @param {?} index
         * @return {?}
         */
        function (item, index) {
            return ((/** @type {?} */ ({
                url: item.url,
                title: _this.genTit(item.title),
                closable: _this.allowClose && item.closable && _this.srv.count > 0,
                index: index,
                active: false,
                last: false,
            })));
        }));
        /** @type {?} */
        var url = this.curUrl;
        /** @type {?} */
        var addCurrent = ls.findIndex((/**
         * @param {?} w
         * @return {?}
         */
        function (w) { return w.url === url; })) === -1;
        if (notify.active === 'close' && notify.url === url) {
            addCurrent = false;
            /** @type {?} */
            var toPos = 0;
            /** @type {?} */
            var curItem = (/** @type {?} */ (this.list.find((/**
             * @param {?} w
             * @return {?}
             */
            function (w) { return w.url === url; }))));
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
        function (item, index) { return (item.index = index); }));
        if (ls.length === 1) {
            ls[0].closable = false;
        }
        this.list = ls;
        this.updatePos$.next();
    };
    /**
     * @private
     * @param {?} res
     * @return {?}
     */
    ReuseTabComponent.prototype.updateTitle = /**
     * @private
     * @param {?} res
     * @return {?}
     */
    function (res) {
        /** @type {?} */
        var item = this.list.find((/**
         * @param {?} w
         * @return {?}
         */
        function (w) { return w.url === (/** @type {?} */ (res)).url; }));
        if (!item)
            return;
        item.title = this.genTit((/** @type {?} */ ((/** @type {?} */ (res)).title)));
        this.cdr.detectChanges();
    };
    /**
     * @private
     * @param {?} item
     * @return {?}
     */
    ReuseTabComponent.prototype.refresh = /**
     * @private
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.srv.runHook('_onReuseInit', this.pos === item.index ? this.srv.componentRef : item.index);
    };
    // #region UI
    // #region UI
    /**
     * @param {?} res
     * @return {?}
     */
    ReuseTabComponent.prototype.contextMenuChange = 
    // #region UI
    /**
     * @param {?} res
     * @return {?}
     */
    function (res) {
        var _this = this;
        /** @type {?} */
        var fn = null;
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
                function () {
                    _this.srv.closeRight(res.item.url, res.includeNonCloseable);
                    _this.close.emit(null);
                });
                break;
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
        if (!res.item.active && res.item.index <= (/** @type {?} */ (this.list.find((/**
         * @param {?} w
         * @return {?}
         */
        function (w) { return w.active; })))).index) {
            this._to(res.item.index, fn);
        }
        else {
            fn();
        }
    };
    /**
     * @param {?} index
     * @param {?=} cb
     * @return {?}
     */
    ReuseTabComponent.prototype._to = /**
     * @param {?} index
     * @param {?=} cb
     * @return {?}
     */
    function (index, cb) {
        var _this = this;
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
            _this.item = item;
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
    /**
     * @param {?} instance
     * @return {?}
     */
    ReuseTabComponent.prototype.activate = /**
     * @param {?} instance
     * @return {?}
     */
    function (instance) {
        this.srv.componentRef = { instance: instance };
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
        this.updatePos$.pipe(takeUntil(this.unsubscribe$), debounceTime(50)).subscribe((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var url = _this.srv.getUrl(_this.route.snapshot);
            /** @type {?} */
            var ls = _this.list.filter((/**
             * @param {?} w
             * @return {?}
             */
            function (w) { return w.url === url || !_this.srv.isExclude(w.url); }));
            if (ls.length === 0) {
                _this.cdr.detectChanges();
                return;
            }
            /** @type {?} */
            var last = ls[ls.length - 1];
            /** @type {?} */
            var item = ls.find((/**
             * @param {?} w
             * @return {?}
             */
            function (w) { return w.url === url; }));
            last.last = true;
            /** @type {?} */
            var pos = item == null ? last.index : item.index;
            ls.forEach((/**
             * @param {?} i
             * @param {?} idx
             * @return {?}
             */
            function (i, idx) { return (i.active = pos === idx); }));
            // this.pos = pos;
            // TODO: 目前无法知道为什么 `pos` 无法通过 `nzSelectedIndex` 生效，因此强制使用组件实例的方式来修改，这种方式是安全的
            // https://github.com/ng-alain/ng-alain/issues/1736
            _this.tabset.nzSelectedIndex = pos;
            _this.list = ls;
            _this.cdr.detectChanges();
        }));
        this.srv.change.pipe(takeUntil(this.unsubscribe$)).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            var _a;
            switch (res === null || res === void 0 ? void 0 : res.active) {
                case 'title':
                    _this.updateTitle(res);
                    return;
                case 'override':
                    if (((_a = res === null || res === void 0 ? void 0 : res.list) === null || _a === void 0 ? void 0 : _a.length) === _this.list.length) {
                        _this.updatePos$.next();
                    }
                    return;
            }
            _this.genList((/** @type {?} */ (res)));
        }));
        this.i18nSrv.change
            .pipe(filter((/**
         * @return {?}
         */
        function () { return _this.srv.inited; })), takeUntil(this.unsubscribe$), debounceTime(100))
            .subscribe((/**
         * @return {?}
         */
        function () { return _this.genList({ active: 'title' }); }));
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
                    selector: 'reuse-tab, [reuse-tab]',
                    exportAs: 'reuseTab',
                    template: "<nz-tabset\n  #tabset\n  [nzSelectedIndex]=\"pos\"\n  [nzAnimated]=\"false\"\n  [nzType]=\"tabType\"\n  [nzTabBarExtraContent]=\"tabBarExtraContent\"\n  [nzTabBarGutter]=\"tabBarGutter\"\n  [nzTabBarStyle]=\"tabBarStyle\"\n>\n  <nz-tab *ngFor=\"let i of list; let index = index\" [nzTitle]=\"titleTemplate\" (nzClick)=\"_to(index)\">\n    <ng-template #titleTemplate>\n      <div [reuse-tab-context-menu]=\"i\" [customContextMenu]=\"customContextMenu\" class=\"reuse-tab__name\" [attr.title]=\"i.title\">\n        <span [class.reuse-tab__name-width]=\"tabMaxWidth\" [style.max-width.px]=\"tabMaxWidth\">\n          {{ i.title }}\n        </span>\n      </div>\n      <i *ngIf=\"i.closable\" nz-icon nzType=\"close\" class=\"reuse-tab__op\" (click)=\"_close($event, index, false)\"></i>\n    </ng-template>\n  </nz-tab>\n</nz-tabset>\n<reuse-tab-context [i18n]=\"i18n\" (change)=\"contextMenuChange($event)\"></reuse-tab-context>\n",
                    host: {
                        '[class.reuse-tab]': 'true',
                        '[class.reuse-tab__line]': "tabType === 'line'",
                        '[class.reuse-tab__card]': "tabType === 'card'",
                    },
                    providers: [ReuseTabContextService],
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    ReuseTabComponent.ctorParameters = function () { return [
        { type: ReuseTabService },
        { type: ChangeDetectorRef },
        { type: Router },
        { type: ActivatedRoute },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [ALAIN_I18N_TOKEN,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
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
    return ReuseTabComponent;
}());
export { ReuseTabComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2UtdGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvcmV1c2UtdGFiLyIsInNvdXJjZXMiOlsicmV1c2UtdGFiLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUlMLFFBQVEsRUFDUixNQUFNLEVBR04sV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQW9CLGdCQUFnQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQU1MLGlCQUFpQixHQUdsQixNQUFNLHdCQUF3QixDQUFDO0FBQ2hDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV0RDtJQStDRSxhQUFhO0lBRWIsMkJBQ1UsR0FBb0IsRUFDcEIsR0FBc0IsRUFDdEIsTUFBYyxFQUNkLEtBQXFCLEVBQ2lCLE9BQXlCLEVBQzdDLEdBQVE7UUFMMUIsUUFBRyxHQUFILEdBQUcsQ0FBaUI7UUFDcEIs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QWlCOzs7Ozs7SUFDNUIsbUNBQXVEOzs7OztJQUN2RCx5Q0FBMkM7Ozs7O0lBQzNDLHVDQUF5Qzs7Ozs7SUFDekMsb0RBQXlDOztJQUN6QyxpQ0FBdUI7O0lBQ3ZCLGlDQUFnQjs7SUFDaEIsZ0NBQVE7O0lBSVIsaUNBQTBEOztJQUMxRCxpQ0FBZ0M7O0lBQ2hDLGtDQUF1Qzs7SUFDdkMsZ0NBQW9DOztJQUNwQyx3Q0FBNEM7O0lBQzVDLHFDQUE0Qjs7SUFDNUIsdUNBQTJDOztJQUMzQywwQ0FBK0M7O0lBSy9DLDhDQUEwRDs7SUFDMUQsK0NBQStDOztJQUMvQyx5Q0FBOEI7O0lBQzlCLHdDQUFnRDs7SUFDaEQsb0NBQTJDOztJQUUzQyxtQ0FBMEQ7O0lBRTFELGtDQUFnRTs7Ozs7SUFLOUQsZ0NBQTRCOzs7OztJQUM1QixnQ0FBOEI7Ozs7O0lBQzlCLG1DQUFzQjs7Ozs7SUFDdEIsa0NBQTZCOzs7OztJQUM3QixvQ0FBdUU7Ozs7O0lBQ3ZFLGdDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZSxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBbGFpbkkxOE5TZXJ2aWNlLCBBTEFJTl9JMThOX1RPS0VOIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBOelRhYlNldENvbXBvbmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQvdGFicyc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGZpbHRlciwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUmV1c2VUYWJDb250ZXh0U2VydmljZSB9IGZyb20gJy4vcmV1c2UtdGFiLWNvbnRleHQuc2VydmljZSc7XG5pbXBvcnQge1xuICBSZXVzZUNvbnRleHRDbG9zZUV2ZW50LFxuICBSZXVzZUNvbnRleHRJMThuLFxuICBSZXVzZUN1c3RvbUNvbnRleHRNZW51LFxuICBSZXVzZUl0ZW0sXG4gIFJldXNlVGFiQ2FjaGVkLFxuICBSZXVzZVRhYk1hdGNoTW9kZSxcbiAgUmV1c2VUYWJOb3RpZnksXG4gIFJldXNlVGl0bGUsXG59IGZyb20gJy4vcmV1c2UtdGFiLmludGVyZmFjZXMnO1xuaW1wb3J0IHsgUmV1c2VUYWJTZXJ2aWNlIH0gZnJvbSAnLi9yZXVzZS10YWIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3JldXNlLXRhYiwgW3JldXNlLXRhYl0nLFxuICBleHBvcnRBczogJ3JldXNlVGFiJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JldXNlLXRhYi5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLnJldXNlLXRhYl0nOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy5yZXVzZS10YWJfX2xpbmVdJzogYHRhYlR5cGUgPT09ICdsaW5lJ2AsXG4gICAgJ1tjbGFzcy5yZXVzZS10YWJfX2NhcmRdJzogYHRhYlR5cGUgPT09ICdjYXJkJ2AsXG4gIH0sXG4gIHByb3ZpZGVyczogW1JldXNlVGFiQ29udGV4dFNlcnZpY2VdLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIFJldXNlVGFiQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIEBWaWV3Q2hpbGQoJ3RhYnNldCcpIHByaXZhdGUgdGFic2V0OiBOelRhYlNldENvbXBvbmVudDtcbiAgcHJpdmF0ZSB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIHVwZGF0ZVBvcyQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIF9rZWVwaW5nU2Nyb2xsQ29udGFpbmVyOiBFbGVtZW50O1xuICBsaXN0OiBSZXVzZUl0ZW1bXSA9IFtdO1xuICBpdGVtOiBSZXVzZUl0ZW07XG4gIHBvcyA9IDA7XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBASW5wdXQoKSBtb2RlOiBSZXVzZVRhYk1hdGNoTW9kZSA9IFJldXNlVGFiTWF0Y2hNb2RlLk1lbnU7XG4gIEBJbnB1dCgpIGkxOG46IFJldXNlQ29udGV4dEkxOG47XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkZWJ1ZyA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBtYXg6IG51bWJlcjtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgdGFiTWF4V2lkdGg6IG51bWJlcjtcbiAgQElucHV0KCkgZXhjbHVkZXM6IFJlZ0V4cFtdO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYWxsb3dDbG9zZSA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBrZWVwaW5nU2Nyb2xsID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIHNldCBrZWVwaW5nU2Nyb2xsQ29udGFpbmVyKHZhbHVlOiBzdHJpbmcgfCBFbGVtZW50KSB7XG4gICAgdGhpcy5fa2VlcGluZ1Njcm9sbENvbnRhaW5lciA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyB0aGlzLmRvYy5xdWVyeVNlbGVjdG9yKHZhbHVlKSA6IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpIGN1c3RvbUNvbnRleHRNZW51OiBSZXVzZUN1c3RvbUNvbnRleHRNZW51W10gPSBbXTtcbiAgQElucHV0KCkgdGFiQmFyRXh0cmFDb250ZW50OiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgdGFiQmFyR3V0dGVyOiBudW1iZXI7XG4gIEBJbnB1dCgpIHRhYkJhclN0eWxlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICBASW5wdXQoKSB0YWJUeXBlOiAnbGluZScgfCAnY2FyZCcgPSAnbGluZSc7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1vdXRwdXQtbmF0aXZlXG4gIEBPdXRwdXQoKSByZWFkb25seSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFJldXNlSXRlbT4oKTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLW91dHB1dC1uYXRpdmVcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjxSZXVzZUl0ZW0gfCBudWxsPigpO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHNydjogUmV1c2VUYWJTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoQUxBSU5fSTE4Tl9UT0tFTikgcHJpdmF0ZSBpMThuU3J2OiBBbGFpbkkxOE5TZXJ2aWNlLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBhbnksXG4gICkge31cblxuICBwcml2YXRlIGdlblRpdCh0aXRsZTogUmV1c2VUaXRsZSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRpdGxlLmkxOG4gJiYgdGhpcy5pMThuU3J2ID8gdGhpcy5pMThuU3J2LmZhbnlpKHRpdGxlLmkxOG4pIDogdGl0bGUudGV4dCE7XG4gIH1cblxuICBwcml2YXRlIGdldCBjdXJVcmwoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3J2LmdldFVybCh0aGlzLnJvdXRlLnNuYXBzaG90KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuQ3VySXRlbSgpOiBSZXVzZUl0ZW0ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuY3VyVXJsO1xuICAgIGNvbnN0IHNuYXBzaG90VHJ1ZSA9IHRoaXMuc3J2LmdldFRydXRoUm91dGUodGhpcy5yb3V0ZS5zbmFwc2hvdCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVybCxcbiAgICAgIHRpdGxlOiB0aGlzLmdlblRpdCh0aGlzLnNydi5nZXRUaXRsZSh1cmwsIHNuYXBzaG90VHJ1ZSkpLFxuICAgICAgY2xvc2FibGU6IHRoaXMuYWxsb3dDbG9zZSAmJiB0aGlzLnNydi5jb3VudCA+IDAgJiYgdGhpcy5zcnYuZ2V0Q2xvc2FibGUodXJsLCBzbmFwc2hvdFRydWUpLFxuICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgIGxhc3Q6IGZhbHNlLFxuICAgICAgaW5kZXg6IDAsXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuTGlzdChub3RpZnk6IFJldXNlVGFiTm90aWZ5KTogdm9pZCB7XG4gICAgY29uc3QgbHMgPSB0aGlzLnNydi5pdGVtcy5tYXAoXG4gICAgICAoaXRlbTogUmV1c2VUYWJDYWNoZWQsIGluZGV4OiBudW1iZXIpID0+XG4gICAgICAgICh7XG4gICAgICAgICAgdXJsOiBpdGVtLnVybCxcbiAgICAgICAgICB0aXRsZTogdGhpcy5nZW5UaXQoaXRlbS50aXRsZSksXG4gICAgICAgICAgY2xvc2FibGU6IHRoaXMuYWxsb3dDbG9zZSAmJiBpdGVtLmNsb3NhYmxlICYmIHRoaXMuc3J2LmNvdW50ID4gMCxcbiAgICAgICAgICBpbmRleCxcbiAgICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICAgIGxhc3Q6IGZhbHNlLFxuICAgICAgICB9IGFzIFJldXNlSXRlbSksXG4gICAgKTtcblxuICAgIGNvbnN0IHVybCA9IHRoaXMuY3VyVXJsO1xuICAgIGxldCBhZGRDdXJyZW50ID0gbHMuZmluZEluZGV4KHcgPT4gdy51cmwgPT09IHVybCkgPT09IC0xO1xuICAgIGlmIChub3RpZnkuYWN0aXZlID09PSAnY2xvc2UnICYmIG5vdGlmeS51cmwgPT09IHVybCkge1xuICAgICAgYWRkQ3VycmVudCA9IGZhbHNlO1xuICAgICAgbGV0IHRvUG9zID0gMDtcbiAgICAgIGNvbnN0IGN1ckl0ZW0gPSB0aGlzLmxpc3QuZmluZCh3ID0+IHcudXJsID09PSB1cmwpITtcbiAgICAgIGlmIChjdXJJdGVtLmluZGV4ID09PSBscy5sZW5ndGgpIHtcbiAgICAgICAgLy8gV2hlbiBjbG9zZWQgaXMgbGFzdFxuICAgICAgICB0b1BvcyA9IGxzLmxlbmd0aCAtIDE7XG4gICAgICB9IGVsc2UgaWYgKGN1ckl0ZW0uaW5kZXggPCBscy5sZW5ndGgpIHtcbiAgICAgICAgLy8gU2hvdWxkIGJlIGFjdGl2ZWQgbmV4dCB0YWIgd2hlbiBjbG9zZWQgaXMgbWlkZGxlXG4gICAgICAgIHRvUG9zID0gTWF0aC5tYXgoMCwgY3VySXRlbS5pbmRleCk7XG4gICAgICB9XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKGxzW3RvUG9zXS51cmwpO1xuICAgIH1cblxuICAgIGlmIChhZGRDdXJyZW50KSB7XG4gICAgICBscy5wdXNoKHRoaXMuZ2VuQ3VySXRlbSgpKTtcbiAgICB9XG5cbiAgICBscy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4gKGl0ZW0uaW5kZXggPSBpbmRleCkpO1xuICAgIGlmIChscy5sZW5ndGggPT09IDEpIHtcbiAgICAgIGxzWzBdLmNsb3NhYmxlID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMubGlzdCA9IGxzO1xuICAgIHRoaXMudXBkYXRlUG9zJC5uZXh0KCk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVRpdGxlKHJlczogUmV1c2VUYWJOb3RpZnkpOiB2b2lkIHtcbiAgICBjb25zdCBpdGVtID0gdGhpcy5saXN0LmZpbmQodyA9PiB3LnVybCA9PT0gcmVzIS51cmwpO1xuICAgIGlmICghaXRlbSkgcmV0dXJuO1xuICAgIGl0ZW0udGl0bGUgPSB0aGlzLmdlblRpdChyZXMhLnRpdGxlISk7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSByZWZyZXNoKGl0ZW06IFJldXNlSXRlbSk6IHZvaWQge1xuICAgIHRoaXMuc3J2LnJ1bkhvb2soJ19vblJldXNlSW5pdCcsIHRoaXMucG9zID09PSBpdGVtLmluZGV4ID8gdGhpcy5zcnYuY29tcG9uZW50UmVmIDogaXRlbS5pbmRleCk7XG4gIH1cblxuICAvLyAjcmVnaW9uIFVJXG5cbiAgY29udGV4dE1lbnVDaGFuZ2UocmVzOiBSZXVzZUNvbnRleHRDbG9zZUV2ZW50KSB7XG4gICAgbGV0IGZuOiAoKCkgPT4gdm9pZCkgfCBudWxsID0gbnVsbDtcbiAgICBzd2l0Y2ggKHJlcy50eXBlKSB7XG4gICAgICBjYXNlICdyZWZyZXNoJzpcbiAgICAgICAgdGhpcy5yZWZyZXNoKHJlcy5pdGVtKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjbG9zZSc6XG4gICAgICAgIHRoaXMuX2Nsb3NlKG51bGwsIHJlcy5pdGVtLmluZGV4LCByZXMuaW5jbHVkZU5vbkNsb3NlYWJsZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY2xvc2VSaWdodCc6XG4gICAgICAgIGZuID0gKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc3J2LmNsb3NlUmlnaHQocmVzLml0ZW0udXJsLCByZXMuaW5jbHVkZU5vbkNsb3NlYWJsZSk7XG4gICAgICAgICAgdGhpcy5jbG9zZS5lbWl0KG51bGwpO1xuICAgICAgICB9O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2Nsb3NlT3RoZXInOlxuICAgICAgICBmbiA9ICgpID0+IHtcbiAgICAgICAgICB0aGlzLnNydi5jbGVhcihyZXMuaW5jbHVkZU5vbkNsb3NlYWJsZSk7XG4gICAgICAgICAgdGhpcy5jbG9zZS5lbWl0KG51bGwpO1xuICAgICAgICB9O1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgaWYgKCFmbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXJlcy5pdGVtLmFjdGl2ZSAmJiByZXMuaXRlbS5pbmRleCA8PSB0aGlzLmxpc3QuZmluZCh3ID0+IHcuYWN0aXZlKSEuaW5kZXgpIHtcbiAgICAgIHRoaXMuX3RvKHJlcy5pdGVtLmluZGV4LCBmbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZuKCk7XG4gICAgfVxuICB9XG5cbiAgX3RvKGluZGV4OiBudW1iZXIsIGNiPzogKCkgPT4gdm9pZCkge1xuICAgIGluZGV4ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oaW5kZXgsIHRoaXMubGlzdC5sZW5ndGggLSAxKSk7XG4gICAgY29uc3QgaXRlbSA9IHRoaXMubGlzdFtpbmRleF07XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChpdGVtLnVybCkudGhlbihyZXMgPT4ge1xuICAgICAgaWYgKCFyZXMpIHJldHVybjtcbiAgICAgIHRoaXMuaXRlbSA9IGl0ZW07XG4gICAgICB0aGlzLmNoYW5nZS5lbWl0KGl0ZW0pO1xuICAgICAgaWYgKGNiKSB7XG4gICAgICAgIGNiKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBfY2xvc2UoZTogRXZlbnQgfCBudWxsLCBpZHg6IG51bWJlciwgaW5jbHVkZU5vbkNsb3NlYWJsZTogYm9vbGVhbikge1xuICAgIGlmIChlICE9IG51bGwpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmxpc3RbaWR4XTtcbiAgICB0aGlzLnNydi5jbG9zZShpdGVtLnVybCwgaW5jbHVkZU5vbkNsb3NlYWJsZSk7XG4gICAgdGhpcy5jbG9zZS5lbWl0KGl0ZW0pO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBhY3RpdmF0ZShpbnN0YW5jZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5zcnYuY29tcG9uZW50UmVmID0geyBpbnN0YW5jZSB9O1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlUG9zJC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCksIGRlYm91bmNlVGltZSg1MCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBjb25zdCB1cmwgPSB0aGlzLnNydi5nZXRVcmwodGhpcy5yb3V0ZS5zbmFwc2hvdCk7XG4gICAgICBjb25zdCBscyA9IHRoaXMubGlzdC5maWx0ZXIodyA9PiB3LnVybCA9PT0gdXJsIHx8ICF0aGlzLnNydi5pc0V4Y2x1ZGUody51cmwpKTtcbiAgICAgIGlmIChscy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGxhc3QgPSBsc1tscy5sZW5ndGggLSAxXTtcbiAgICAgIGNvbnN0IGl0ZW0gPSBscy5maW5kKHcgPT4gdy51cmwgPT09IHVybCk7XG4gICAgICBsYXN0Lmxhc3QgPSB0cnVlO1xuICAgICAgY29uc3QgcG9zID0gaXRlbSA9PSBudWxsID8gbGFzdC5pbmRleCA6IGl0ZW0uaW5kZXg7XG4gICAgICBscy5mb3JFYWNoKChpLCBpZHgpID0+IChpLmFjdGl2ZSA9IHBvcyA9PT0gaWR4KSk7XG4gICAgICAvLyB0aGlzLnBvcyA9IHBvcztcbiAgICAgIC8vIFRPRE86IOebruWJjeaXoOazleefpemBk+S4uuS7gOS5iCBgcG9zYCDml6Dms5XpgJrov4cgYG56U2VsZWN0ZWRJbmRleGAg55Sf5pWI77yM5Zug5q2k5by65Yi25L2/55So57uE5Lu25a6e5L6L55qE5pa55byP5p2l5L+u5pS577yM6L+Z56eN5pa55byP5piv5a6J5YWo55qEXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbmctYWxhaW4vbmctYWxhaW4vaXNzdWVzLzE3MzZcbiAgICAgIHRoaXMudGFic2V0Lm56U2VsZWN0ZWRJbmRleCA9IHBvcztcbiAgICAgIHRoaXMubGlzdCA9IGxzO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zcnYuY2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICBzd2l0Y2ggKHJlcz8uYWN0aXZlKSB7XG4gICAgICAgIGNhc2UgJ3RpdGxlJzpcbiAgICAgICAgICB0aGlzLnVwZGF0ZVRpdGxlKHJlcyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjYXNlICdvdmVycmlkZSc6XG4gICAgICAgICAgaWYgKHJlcz8ubGlzdD8ubGVuZ3RoID09PSB0aGlzLmxpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVBvcyQubmV4dCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLmdlbkxpc3QocmVzISk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmkxOG5TcnYuY2hhbmdlXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKCgpID0+IHRoaXMuc3J2LmluaXRlZCksXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCksXG4gICAgICAgIGRlYm91bmNlVGltZSgxMDApLFxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmdlbkxpc3QoeyBhY3RpdmU6ICd0aXRsZScgfSkpO1xuXG4gICAgdGhpcy5zcnYuaW5pdCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogeyBbUCBpbiBrZXlvZiB0aGlzXT86IFNpbXBsZUNoYW5nZSB9ICYgU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLm1heCkgdGhpcy5zcnYubWF4ID0gdGhpcy5tYXg7XG4gICAgaWYgKGNoYW5nZXMuZXhjbHVkZXMpIHRoaXMuc3J2LmV4Y2x1ZGVzID0gdGhpcy5leGNsdWRlcztcbiAgICBpZiAoY2hhbmdlcy5tb2RlKSB0aGlzLnNydi5tb2RlID0gdGhpcy5tb2RlO1xuICAgIGlmIChjaGFuZ2VzLmtlZXBpbmdTY3JvbGwpIHtcbiAgICAgIHRoaXMuc3J2LmtlZXBpbmdTY3JvbGwgPSB0aGlzLmtlZXBpbmdTY3JvbGw7XG4gICAgICB0aGlzLnNydi5rZWVwaW5nU2Nyb2xsQ29udGFpbmVyID0gdGhpcy5fa2VlcGluZ1Njcm9sbENvbnRhaW5lcjtcbiAgICB9XG5cbiAgICB0aGlzLnNydi5kZWJ1ZyA9IHRoaXMuZGVidWc7XG5cbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBjb25zdCB7IHVuc3Vic2NyaWJlJCB9ID0gdGhpcztcbiAgICB1bnN1YnNjcmliZSQubmV4dCgpO1xuICAgIHVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=