/**
 * @fileoverview added by tsickle
 * Generated from: reuse-tab.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Inject, Input, Optional, Output, TemplateRef, ViewEncapsulation, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
            if (ls.length === 0)
                return;
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
                template: "<nz-tabset\n  [nzSelectedIndex]=\"pos\"\n  [nzAnimated]=\"false\"\n  [nzType]=\"tabType\"\n  [nzTabBarExtraContent]=\"tabBarExtraContent\"\n  [nzTabBarGutter]=\"tabBarGutter\"\n  [nzTabBarStyle]=\"tabBarStyle\"\n>\n  <nz-tab *ngFor=\"let i of list; let index = index\" [nzTitle]=\"titleTemplate\" (nzClick)=\"_to(index)\">\n    <ng-template #titleTemplate>\n      <div [reuse-tab-context-menu]=\"i\" [customContextMenu]=\"customContextMenu\" class=\"reuse-tab__name\" [attr.title]=\"i.title\">\n        <span [class.reuse-tab__name-width]=\"tabMaxWidth\" [style.max-width.px]=\"tabMaxWidth\">\n          {{ i.title }}\n        </span>\n      </div>\n      <i *ngIf=\"i.closable\" nz-icon nzType=\"close\" class=\"reuse-tab__op\" (click)=\"_close($event, index, false)\"></i>\n    </ng-template>\n  </nz-tab>\n</nz-tabset>\n<reuse-tab-context [i18n]=\"i18n\" (change)=\"contextMenuChange($event)\"></reuse-tab-context>\n",
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
if (false) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2UtdGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvcmV1c2UtdGFiLyIsInNvdXJjZXMiOlsicmV1c2UtdGFiLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUlMLFFBQVEsRUFDUixNQUFNLEVBR04sV0FBVyxFQUNYLGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFBb0IsZ0JBQWdCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDbEUsT0FBTyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDeEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNyRSxPQUFPLEVBTUwsaUJBQWlCLEdBR2xCLE1BQU0sd0JBQXdCLENBQUM7QUFDaEMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBZ0J0RCxNQUFNLE9BQU8saUJBQWlCOzs7Ozs7Ozs7O0lBa0M1QixZQUNVLEdBQW9CLEVBQ3BCLEdBQXNCLEVBQ3RCLE1BQWMsRUFDZCxLQUFxQixFQUNpQixPQUF5QixFQUM3QyxHQUFRO1FBTDFCLFFBQUcsR0FBSCxHQUFHLENBQWlCO1FBQ3BCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3RCLFdBQU0sR0FBTixN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QGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZSxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQWxhaW5JMThOU2VydmljZSwgQUxBSU5fSTE4Tl9UT0tFTiB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBmaWx0ZXIsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFJldXNlVGFiQ29udGV4dFNlcnZpY2UgfSBmcm9tICcuL3JldXNlLXRhYi1jb250ZXh0LnNlcnZpY2UnO1xuaW1wb3J0IHtcbiAgUmV1c2VDb250ZXh0Q2xvc2VFdmVudCxcbiAgUmV1c2VDb250ZXh0STE4bixcbiAgUmV1c2VDdXN0b21Db250ZXh0TWVudSxcbiAgUmV1c2VJdGVtLFxuICBSZXVzZVRhYkNhY2hlZCxcbiAgUmV1c2VUYWJNYXRjaE1vZGUsXG4gIFJldXNlVGFiTm90aWZ5LFxuICBSZXVzZVRpdGxlLFxufSBmcm9tICcuL3JldXNlLXRhYi5pbnRlcmZhY2VzJztcbmltcG9ydCB7IFJldXNlVGFiU2VydmljZSB9IGZyb20gJy4vcmV1c2UtdGFiLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdyZXVzZS10YWIsIFtyZXVzZS10YWJdJyxcbiAgZXhwb3J0QXM6ICdyZXVzZVRhYicsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZXVzZS10YWIuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5yZXVzZS10YWJdJzogJ3RydWUnLFxuICAgICdbY2xhc3MucmV1c2UtdGFiX19saW5lXSc6IGB0YWJUeXBlID09PSAnbGluZSdgLFxuICAgICdbY2xhc3MucmV1c2UtdGFiX19jYXJkXSc6IGB0YWJUeXBlID09PSAnY2FyZCdgLFxuICB9LFxuICBwcm92aWRlcnM6IFtSZXVzZVRhYkNvbnRleHRTZXJ2aWNlXSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBSZXVzZVRhYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIHVuc3Vic2NyaWJlJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHByaXZhdGUgdXBkYXRlUG9zJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHByaXZhdGUgX2tlZXBpbmdTY3JvbGxDb250YWluZXI6IEVsZW1lbnQ7XG4gIGxpc3Q6IFJldXNlSXRlbVtdID0gW107XG4gIGl0ZW06IFJldXNlSXRlbTtcbiAgcG9zID0gMDtcblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIEBJbnB1dCgpIG1vZGU6IFJldXNlVGFiTWF0Y2hNb2RlID0gUmV1c2VUYWJNYXRjaE1vZGUuTWVudTtcbiAgQElucHV0KCkgaTE4bjogUmV1c2VDb250ZXh0STE4bjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRlYnVnID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIG1heDogbnVtYmVyO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSB0YWJNYXhXaWR0aDogbnVtYmVyO1xuICBASW5wdXQoKSBleGNsdWRlczogUmVnRXhwW107XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBhbGxvd0Nsb3NlID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGtlZXBpbmdTY3JvbGwgPSBmYWxzZTtcbiAgQElucHV0KClcbiAgc2V0IGtlZXBpbmdTY3JvbGxDb250YWluZXIodmFsdWU6IHN0cmluZyB8IEVsZW1lbnQpIHtcbiAgICB0aGlzLl9rZWVwaW5nU2Nyb2xsQ29udGFpbmVyID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHRoaXMuZG9jLnF1ZXJ5U2VsZWN0b3IodmFsdWUpIDogdmFsdWU7XG4gIH1cbiAgQElucHV0KCkgY3VzdG9tQ29udGV4dE1lbnU6IFJldXNlQ3VzdG9tQ29udGV4dE1lbnVbXSA9IFtdO1xuICBASW5wdXQoKSB0YWJCYXJFeHRyYUNvbnRlbnQ6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSB0YWJCYXJHdXR0ZXI6IG51bWJlcjtcbiAgQElucHV0KCkgdGFiQmFyU3R5bGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gIEBJbnB1dCgpIHRhYlR5cGU6ICdsaW5lJyB8ICdjYXJkJyA9ICdsaW5lJztcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLW91dHB1dC1uYXRpdmVcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8UmV1c2VJdGVtPigpO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tb3V0cHV0LW5hdGl2ZVxuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPFJldXNlSXRlbSB8IG51bGw+KCk7XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc3J2OiBSZXVzZVRhYlNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChBTEFJTl9JMThOX1RPS0VOKSBwcml2YXRlIGkxOG5TcnY6IEFsYWluSTE4TlNlcnZpY2UsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IGFueSxcbiAgKSB7fVxuXG4gIHByaXZhdGUgZ2VuVGl0KHRpdGxlOiBSZXVzZVRpdGxlKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGl0bGUuaTE4biAmJiB0aGlzLmkxOG5TcnYgPyB0aGlzLmkxOG5TcnYuZmFueWkodGl0bGUuaTE4bikgOiB0aXRsZS50ZXh0ITtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IGN1clVybCgpIHtcbiAgICByZXR1cm4gdGhpcy5zcnYuZ2V0VXJsKHRoaXMucm91dGUuc25hcHNob3QpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5DdXJJdGVtKCk6IFJldXNlSXRlbSB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5jdXJVcmw7XG4gICAgY29uc3Qgc25hcHNob3RUcnVlID0gdGhpcy5zcnYuZ2V0VHJ1dGhSb3V0ZSh0aGlzLnJvdXRlLnNuYXBzaG90KTtcbiAgICByZXR1cm4ge1xuICAgICAgdXJsLFxuICAgICAgdGl0bGU6IHRoaXMuZ2VuVGl0KHRoaXMuc3J2LmdldFRpdGxlKHVybCwgc25hcHNob3RUcnVlKSksXG4gICAgICBjbG9zYWJsZTogdGhpcy5hbGxvd0Nsb3NlICYmIHRoaXMuc3J2LmNvdW50ID4gMCAmJiB0aGlzLnNydi5nZXRDbG9zYWJsZSh1cmwsIHNuYXBzaG90VHJ1ZSksXG4gICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgbGFzdDogZmFsc2UsXG4gICAgICBpbmRleDogMCxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5MaXN0KG5vdGlmeTogUmV1c2VUYWJOb3RpZnkgfCBudWxsKTogdm9pZCB7XG4gICAgY29uc3QgbHMgPSB0aGlzLnNydi5pdGVtcy5tYXAoXG4gICAgICAoaXRlbTogUmV1c2VUYWJDYWNoZWQsIGluZGV4OiBudW1iZXIpID0+XG4gICAgICAgICh7XG4gICAgICAgICAgdXJsOiBpdGVtLnVybCxcbiAgICAgICAgICB0aXRsZTogdGhpcy5nZW5UaXQoaXRlbS50aXRsZSksXG4gICAgICAgICAgY2xvc2FibGU6IHRoaXMuYWxsb3dDbG9zZSAmJiBpdGVtLmNsb3NhYmxlICYmIHRoaXMuc3J2LmNvdW50ID4gMCxcbiAgICAgICAgICBpbmRleCxcbiAgICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICAgIGxhc3Q6IGZhbHNlLFxuICAgICAgICB9IGFzIFJldXNlSXRlbSksXG4gICAgKTtcblxuICAgIGNvbnN0IHVybCA9IHRoaXMuY3VyVXJsO1xuICAgIGxldCBhZGRDdXJyZW50ID0gbHMuZmluZEluZGV4KHcgPT4gdy51cmwgPT09IHVybCkgPT09IC0xO1xuICAgIGlmIChub3RpZnkgJiYgbm90aWZ5LmFjdGl2ZSA9PT0gJ2Nsb3NlJyAmJiBub3RpZnkudXJsID09PSB1cmwpIHtcbiAgICAgIGFkZEN1cnJlbnQgPSBmYWxzZTtcbiAgICAgIGxldCB0b1BvcyA9IDA7XG4gICAgICBjb25zdCBjdXJJdGVtID0gdGhpcy5saXN0LmZpbmQodyA9PiB3LnVybCA9PT0gdXJsKSE7XG4gICAgICBpZiAoY3VySXRlbS5pbmRleCA9PT0gbHMubGVuZ3RoKSB7XG4gICAgICAgIC8vIFdoZW4gY2xvc2VkIGlzIGxhc3RcbiAgICAgICAgdG9Qb3MgPSBscy5sZW5ndGggLSAxO1xuICAgICAgfSBlbHNlIGlmIChjdXJJdGVtLmluZGV4IDwgbHMubGVuZ3RoKSB7XG4gICAgICAgIC8vIFNob3VsZCBiZSBhY3RpdmVkIG5leHQgdGFiIHdoZW4gY2xvc2VkIGlzIG1pZGRsZVxuICAgICAgICB0b1BvcyA9IE1hdGgubWF4KDAsIGN1ckl0ZW0uaW5kZXgpO1xuICAgICAgfVxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChsc1t0b1Bvc10udXJsKTtcbiAgICB9XG5cbiAgICBpZiAoYWRkQ3VycmVudCkge1xuICAgICAgbHMucHVzaCh0aGlzLmdlbkN1ckl0ZW0oKSk7XG4gICAgfVxuXG4gICAgbHMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IChpdGVtLmluZGV4ID0gaW5kZXgpKTtcbiAgICBpZiAobHMubGVuZ3RoID09PSAxKSB7XG4gICAgICBsc1swXS5jbG9zYWJsZSA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLmxpc3QgPSBscztcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgdGhpcy51cGRhdGVQb3MkLm5leHQoKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlVGl0bGUocmVzOiBSZXVzZVRhYk5vdGlmeSk6IHZvaWQge1xuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmxpc3QuZmluZCh3ID0+IHcudXJsID09PSByZXMhLnVybCk7XG4gICAgaWYgKCFpdGVtKSByZXR1cm47XG4gICAgaXRlbS50aXRsZSA9IHRoaXMuZ2VuVGl0KHJlcyEudGl0bGUhKTtcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBwcml2YXRlIHJlZnJlc2goaXRlbTogUmV1c2VJdGVtKTogdm9pZCB7XG4gICAgdGhpcy5zcnYucnVuSG9vaygnX29uUmV1c2VJbml0JywgdGhpcy5wb3MgPT09IGl0ZW0uaW5kZXggPyB0aGlzLnNydi5jb21wb25lbnRSZWYgOiBpdGVtLmluZGV4KTtcbiAgfVxuXG4gIC8vICNyZWdpb24gVUlcblxuICBjb250ZXh0TWVudUNoYW5nZShyZXM6IFJldXNlQ29udGV4dENsb3NlRXZlbnQpIHtcbiAgICBsZXQgZm46ICgoKSA9PiB2b2lkKSB8IG51bGwgPSBudWxsO1xuICAgIHN3aXRjaCAocmVzLnR5cGUpIHtcbiAgICAgIGNhc2UgJ3JlZnJlc2gnOlxuICAgICAgICB0aGlzLnJlZnJlc2gocmVzLml0ZW0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2Nsb3NlJzpcbiAgICAgICAgdGhpcy5fY2xvc2UobnVsbCwgcmVzLml0ZW0uaW5kZXgsIHJlcy5pbmNsdWRlTm9uQ2xvc2VhYmxlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjbG9zZVJpZ2h0JzpcbiAgICAgICAgZm4gPSAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5zcnYuY2xvc2VSaWdodChyZXMuaXRlbS51cmwsIHJlcy5pbmNsdWRlTm9uQ2xvc2VhYmxlKTtcbiAgICAgICAgICB0aGlzLmNsb3NlLmVtaXQobnVsbCk7XG4gICAgICAgIH07XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY2xvc2VPdGhlcic6XG4gICAgICAgIGZuID0gKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc3J2LmNsZWFyKHJlcy5pbmNsdWRlTm9uQ2xvc2VhYmxlKTtcbiAgICAgICAgICB0aGlzLmNsb3NlLmVtaXQobnVsbCk7XG4gICAgICAgIH07XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZiAoIWZuKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghcmVzLml0ZW0uYWN0aXZlICYmIHJlcy5pdGVtLmluZGV4IDw9IHRoaXMubGlzdC5maW5kKHcgPT4gdy5hY3RpdmUpIS5pbmRleCkge1xuICAgICAgdGhpcy5fdG8ocmVzLml0ZW0uaW5kZXgsIGZuKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm4oKTtcbiAgICB9XG4gIH1cblxuICBfdG8oaW5kZXg6IG51bWJlciwgY2I/OiAoKSA9PiB2b2lkKSB7XG4gICAgaW5kZXggPSBNYXRoLm1heCgwLCBNYXRoLm1pbihpbmRleCwgdGhpcy5saXN0Lmxlbmd0aCAtIDEpKTtcbiAgICBjb25zdCBpdGVtID0gdGhpcy5saXN0W2luZGV4XTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKGl0ZW0udXJsKS50aGVuKHJlcyA9PiB7XG4gICAgICBpZiAoIXJlcykgcmV0dXJuO1xuICAgICAgdGhpcy5pdGVtID0gaXRlbTtcbiAgICAgIHRoaXMuY2hhbmdlLmVtaXQoaXRlbSk7XG4gICAgICBpZiAoY2IpIHtcbiAgICAgICAgY2IoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIF9jbG9zZShlOiBFdmVudCB8IG51bGwsIGlkeDogbnVtYmVyLCBpbmNsdWRlTm9uQ2xvc2VhYmxlOiBib29sZWFuKSB7XG4gICAgaWYgKGUgIT0gbnVsbCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gICAgY29uc3QgaXRlbSA9IHRoaXMubGlzdFtpZHhdO1xuICAgIHRoaXMuc3J2LmNsb3NlKGl0ZW0udXJsLCBpbmNsdWRlTm9uQ2xvc2VhYmxlKTtcbiAgICB0aGlzLmNsb3NlLmVtaXQoaXRlbSk7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGFjdGl2YXRlKGluc3RhbmNlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnNydi5jb21wb25lbnRSZWYgPSB7IGluc3RhbmNlIH07XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVQb3MkLnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSwgZGVib3VuY2VUaW1lKDUwKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGNvbnN0IHVybCA9IHRoaXMuc3J2LmdldFVybCh0aGlzLnJvdXRlLnNuYXBzaG90KTtcbiAgICAgIGNvbnN0IGxzID0gdGhpcy5saXN0LmZpbHRlcih3ID0+IHcudXJsID09PSB1cmwgfHwgIXRoaXMuc3J2LmlzRXhjbHVkZSh3LnVybCkpO1xuICAgICAgaWYgKGxzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuXG4gICAgICBjb25zdCBsYXN0ID0gbHNbbHMubGVuZ3RoIC0gMV07XG4gICAgICBjb25zdCBpdGVtID0gbHMuZmluZCh3ID0+IHcudXJsID09PSB1cmwpO1xuICAgICAgbGFzdC5sYXN0ID0gdHJ1ZTtcbiAgICAgIGNvbnN0IHBvcyA9IGl0ZW0gPT0gbnVsbCA/IGxhc3QuaW5kZXggOiBpdGVtLmluZGV4O1xuICAgICAgbHMuZm9yRWFjaCgoaSwgaWR4KSA9PiAoaS5hY3RpdmUgPSBwb3MgPT09IGlkeCkpO1xuICAgICAgdGhpcy5wb3MgPSBwb3M7XG4gICAgICB0aGlzLmxpc3QgPSBscztcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc3J2LmNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgc3dpdGNoIChyZXM/LmFjdGl2ZSkge1xuICAgICAgICBjYXNlICd0aXRsZSc6XG4gICAgICAgICAgdGhpcy51cGRhdGVUaXRsZShyZXMpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY2FzZSAnb3ZlcnJpZGUnOlxuICAgICAgICAgIGlmIChyZXM/Lmxpc3Q/Lmxlbmd0aCA9PT0gdGhpcy5saXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQb3MkLm5leHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5nZW5MaXN0KHJlcyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmkxOG5TcnYuY2hhbmdlXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKCgpID0+IHRoaXMuc3J2LmluaXRlZCksXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCksXG4gICAgICAgIGRlYm91bmNlVGltZSgxMDApLFxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmdlbkxpc3QoeyBhY3RpdmU6ICd0aXRsZScgfSkpO1xuXG4gICAgdGhpcy5zcnYuaW5pdCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogeyBbUCBpbiBrZXlvZiB0aGlzXT86IFNpbXBsZUNoYW5nZSB9ICYgU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLm1heCkgdGhpcy5zcnYubWF4ID0gdGhpcy5tYXg7XG4gICAgaWYgKGNoYW5nZXMuZXhjbHVkZXMpIHRoaXMuc3J2LmV4Y2x1ZGVzID0gdGhpcy5leGNsdWRlcztcbiAgICBpZiAoY2hhbmdlcy5tb2RlKSB0aGlzLnNydi5tb2RlID0gdGhpcy5tb2RlO1xuICAgIGlmIChjaGFuZ2VzLmtlZXBpbmdTY3JvbGwpIHtcbiAgICAgIHRoaXMuc3J2LmtlZXBpbmdTY3JvbGwgPSB0aGlzLmtlZXBpbmdTY3JvbGw7XG4gICAgICB0aGlzLnNydi5rZWVwaW5nU2Nyb2xsQ29udGFpbmVyID0gdGhpcy5fa2VlcGluZ1Njcm9sbENvbnRhaW5lcjtcbiAgICB9XG5cbiAgICB0aGlzLnNydi5kZWJ1ZyA9IHRoaXMuZGVidWc7XG5cbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBjb25zdCB7IHVuc3Vic2NyaWJlJCB9ID0gdGhpcztcbiAgICB1bnN1YnNjcmliZSQubmV4dCgpO1xuICAgIHVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=