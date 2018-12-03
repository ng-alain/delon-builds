/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Output, ChangeDetectionStrategy, ChangeDetectorRef, EventEmitter, ElementRef, Renderer2, Inject, Optional, } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';
import { filter, debounceTime } from 'rxjs/operators';
import { InputNumber, InputBoolean } from '@delon/util';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { ReuseTabService } from './reuse-tab.service';
import { ReuseTabMatchMode, } from './reuse-tab.interfaces';
import { ReuseTabContextService } from './reuse-tab-context.service';
var ReuseTabComponent = /** @class */ (function () {
    // #endregion
    function ReuseTabComponent(el, srv, cd, router, route, render, i18nSrv) {
        var _this = this;
        this.srv = srv;
        this.cd = cd;
        this.router = router;
        this.route = route;
        this.render = render;
        this.i18nSrv = i18nSrv;
        this.list = [];
        this.pos = 0;
        // #region fields
        /**
         * 设置匹配模式
         */
        this.mode = ReuseTabMatchMode.Menu;
        /**
         * 是否Debug模式
         */
        this.debug = false;
        /**
         * 允许关闭
         */
        this.allowClose = true;
        /**
         * 总是显示当前页
         */
        this.showCurrent = true;
        /**
         * 切换时回调
         */
        this.change = new EventEmitter();
        /**
         * 关闭回调
         */
        this.close = new EventEmitter();
        this.el = el.nativeElement;
        /** @type {?} */
        var route$ = this.router.events.pipe(filter(function (evt) { return evt instanceof NavigationEnd; }));
        this.sub$ = combineLatest(this.srv.change, route$).subscribe(function (_a) {
            var _b = tslib_1.__read(_a, 2), res = _b[0], e = _b[1];
            return _this.genList((/** @type {?} */ (res)));
        });
        if (this.i18nSrv) {
            this.i18n$ = this.i18nSrv.change
                .pipe(debounceTime(100))
                .subscribe(function () { return _this.genList(); });
        }
    }
    /**
     * @param {?} title
     * @return {?}
     */
    ReuseTabComponent.prototype.genTit = /**
     * @param {?} title
     * @return {?}
     */
    function (title) {
        return title.i18n && this.i18nSrv
            ? this.i18nSrv.fanyi(title.i18n)
            : title.text;
    };
    /**
     * @param {?=} notify
     * @return {?}
     */
    ReuseTabComponent.prototype.genList = /**
     * @param {?=} notify
     * @return {?}
     */
    function (notify) {
        var _this = this;
        /** @type {?} */
        var isClosed = notify && notify.active === 'close';
        /** @type {?} */
        var beforeClosePos = isClosed
            ? this.list.findIndex(function (w) { return w.url === notify.url; })
            : -1;
        /** @type {?} */
        var ls = this.srv.items.map(function (item, index) {
            return (/** @type {?} */ ({
                url: item.url,
                title: _this.genTit(item.title),
                closable: _this.allowClose && item.closable && _this.srv.count > 0,
                index: index,
                active: false,
                last: false,
            }));
        });
        if (this.showCurrent) {
            /** @type {?} */
            var snapshot = this.route.snapshot;
            /** @type {?} */
            var url_1 = this.srv.getUrl(snapshot);
            /** @type {?} */
            var idx = ls.findIndex(function (w) { return w.url === url_1; });
            // jump directly when the current exists in the list
            // or create a new current item and jump
            if (idx !== -1 || (isClosed && notify.url === url_1)) {
                this.pos = isClosed
                    ? idx >= beforeClosePos
                        ? this.pos - 1
                        : this.pos
                    : idx;
            }
            else {
                /** @type {?} */
                var snapshotTrue = this.srv.getTruthRoute(snapshot);
                ls.push((/** @type {?} */ ({
                    url: url_1,
                    title: this.genTit(this.srv.getTitle(url_1, snapshotTrue)),
                    closable: this.allowClose &&
                        this.srv.count > 0 &&
                        this.srv.getClosable(url_1, snapshotTrue),
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
        this.cd.detectChanges();
    };
    /**
     * @return {?}
     */
    ReuseTabComponent.prototype.visibility = /**
     * @return {?}
     */
    function () {
        if (this.showCurrent)
            return;
        this.render.setStyle(this.el, 'display', this.list.length === 0 ? 'none' : 'block');
    };
    // #region UI
    // #region UI
    /**
     * @param {?} res
     * @return {?}
     */
    ReuseTabComponent.prototype.cmChange = 
    // #region UI
    /**
     * @param {?} res
     * @return {?}
     */
    function (res) {
        switch (res.type) {
            case 'close':
                this._close(null, res.item.index, res.includeNonCloseable);
                break;
            case 'closeRight':
                this.srv.closeRight(res.item.url, res.includeNonCloseable);
                this.close.emit(null);
                break;
            case 'clear':
            case 'closeOther':
                this.srv.clear(res.includeNonCloseable);
                this.close.emit(null);
                break;
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
            this.list.forEach(function (i, idx) { return (i.active = _this.pos === idx); });
        }
        if (dc)
            this.cd.detectChanges();
    };
    /**
     * @param {?} e
     * @param {?} index
     * @return {?}
     */
    ReuseTabComponent.prototype.to = /**
     * @param {?} e
     * @param {?} index
     * @return {?}
     */
    function (e, index) {
        var _this = this;
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        index = Math.max(0, Math.min(index, this.list.length - 1));
        /** @type {?} */
        var item = this.list[index];
        this.router.navigateByUrl(item.url).then(function (res) {
            if (!res)
                return;
            _this.pos = index;
            _this.item = item;
            _this.refStatus();
            _this.change.emit(item);
        });
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
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        /** @type {?} */
        var item = this.list[idx];
        this.srv.close(item.url, includeNonCloseable);
        this.close.emit(item);
        this.cd.detectChanges();
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
        this.genList();
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
        this.srv.debug = this.debug;
        this.cd.detectChanges();
    };
    /**
     * @return {?}
     */
    ReuseTabComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var _a = this, i18n$ = _a.i18n$, sub$ = _a.sub$;
        sub$.unsubscribe();
        if (i18n$)
            i18n$.unsubscribe();
    };
    ReuseTabComponent.decorators = [
        { type: Component, args: [{
                    selector: 'reuse-tab',
                    template: "<nz-tabset [nzSelectedIndex]=\"pos\" [nzAnimated]=\"false\" nzType=\"line\">\n  <nz-tab *ngFor=\"let i of list; let index = index\" [nzTitle]=\"titleTemplate\">\n    <ng-template #titleTemplate>\n      <span [reuse-tab-context-menu]=\"i\" (click)=\"to($event, index)\" class=\"name\">{{i.title}}</span>\n      <i *ngIf=\"i.closable\" nz-icon type=\"close\" class=\"reuse-tab__op\" (click)=\"_close($event, index, false)\"></i>\n    </ng-template>\n  </nz-tab>\n</nz-tabset>\n<reuse-tab-context [i18n]=\"i18n\" (change)=\"cmChange($event)\"></reuse-tab-context>\n",
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
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [ALAIN_I18N_TOKEN,] }] }
    ]; };
    ReuseTabComponent.propDecorators = {
        mode: [{ type: Input }],
        i18n: [{ type: Input }],
        debug: [{ type: Input }],
        max: [{ type: Input }],
        excludes: [{ type: Input }],
        allowClose: [{ type: Input }],
        showCurrent: [{ type: Input }],
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
    return ReuseTabComponent;
}());
export { ReuseTabComponent };
if (false) {
    /** @type {?} */
    ReuseTabComponent.prototype.el;
    /** @type {?} */
    ReuseTabComponent.prototype.sub$;
    /** @type {?} */
    ReuseTabComponent.prototype.i18n$;
    /** @type {?} */
    ReuseTabComponent.prototype.list;
    /** @type {?} */
    ReuseTabComponent.prototype.item;
    /** @type {?} */
    ReuseTabComponent.prototype.pos;
    /**
     * 设置匹配模式
     * @type {?}
     */
    ReuseTabComponent.prototype.mode;
    /**
     * 选项文本国际化
     * @type {?}
     */
    ReuseTabComponent.prototype.i18n;
    /**
     * 是否Debug模式
     * @type {?}
     */
    ReuseTabComponent.prototype.debug;
    /**
     * 允许最多复用多少个页面
     * @type {?}
     */
    ReuseTabComponent.prototype.max;
    /**
     * 排除规则，限 `mode=URL`
     * @type {?}
     */
    ReuseTabComponent.prototype.excludes;
    /**
     * 允许关闭
     * @type {?}
     */
    ReuseTabComponent.prototype.allowClose;
    /**
     * 总是显示当前页
     * @type {?}
     */
    ReuseTabComponent.prototype.showCurrent;
    /**
     * 切换时回调
     * @type {?}
     */
    ReuseTabComponent.prototype.change;
    /**
     * 关闭回调
     * @type {?}
     */
    ReuseTabComponent.prototype.close;
    /** @type {?} */
    ReuseTabComponent.prototype.srv;
    /** @type {?} */
    ReuseTabComponent.prototype.cd;
    /** @type {?} */
    ReuseTabComponent.prototype.router;
    /** @type {?} */
    ReuseTabComponent.prototype.route;
    /** @type {?} */
    ReuseTabComponent.prototype.render;
    /** @type {?} */
    ReuseTabComponent.prototype.i18nSrv;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2UtdGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvcmV1c2UtdGFiLyIsInNvdXJjZXMiOlsicmV1c2UtdGFiLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFFTix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFlBQVksRUFLWixVQUFVLEVBQ1YsU0FBUyxFQUNULE1BQU0sRUFDTixRQUFRLEdBQ1QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDeEUsT0FBTyxFQUFnQixhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQW9CLE1BQU0sY0FBYyxDQUFDO0FBRWxFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBR0wsaUJBQWlCLEdBS2xCLE1BQU0sd0JBQXdCLENBQUM7QUFDaEMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFckU7SUFtREUsYUFBYTtJQUViLDJCQUNFLEVBQWMsRUFDTixHQUFvQixFQUNwQixFQUFxQixFQUNyQixNQUFjLEVBQ2QsS0FBcUIsRUFDckIsTUFBaUIsRUFHakIsT0FBeUI7UUFUbkMsaUJBdUJDO1FBckJTLFFBQUcsR0FBSCxHQUFHLENBQWlCO1FBQ3BCLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNy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QURDLFdBQVcsRUFBRTs7a0RBQ0Y7SUFPWjtRQURDLFlBQVksRUFBRTs7eURBQ0c7SUFJbEI7UUFEQyxZQUFZLEVBQUU7OzBEQUNJO0lBd0xyQix3QkFBQztDQUFBLEFBbk9ELElBbU9DO1NBMU5ZLGlCQUFpQjs7O0lBQzVCLCtCQUF3Qjs7SUFDeEIsaUNBQTJCOztJQUMzQixrQ0FBNEI7O0lBQzVCLGlDQUF1Qjs7SUFDdkIsaUNBQWdCOztJQUNoQixnQ0FBUTs7Ozs7SUFLUixpQ0FDaUQ7Ozs7O0lBRWpELGlDQUN1Qjs7Ozs7SUFFdkIsa0NBRWM7Ozs7O0lBRWQsZ0NBRVk7Ozs7O0lBRVoscUNBQ21COzs7OztJQUVuQix1Q0FFa0I7Ozs7O0lBRWxCLHdDQUVtQjs7Ozs7SUFFbkIsbUNBQ2dEOzs7OztJQUVoRCxrQ0FDK0M7O0lBTTdDLGdDQUE0Qjs7SUFDNUIsK0JBQTZCOztJQUM3QixtQ0FBc0I7O0lBQ3RCLGtDQUE2Qjs7SUFDN0IsbUNBQXlCOztJQUN6QixvQ0FFaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIE9uQ2hhbmdlcyxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIE9uSW5pdCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlLFxuICBPbkRlc3Ryb3ksXG4gIEVsZW1lbnRSZWYsXG4gIFJlbmRlcmVyMixcbiAgSW5qZWN0LFxuICBPcHRpb25hbCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIE5hdmlnYXRpb25FbmQsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgY29tYmluZUxhdGVzdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBJbnB1dE51bWJlciwgSW5wdXRCb29sZWFuIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgQUxBSU5fSTE4Tl9UT0tFTiwgQWxhaW5JMThOU2VydmljZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5cbmltcG9ydCB7IFJldXNlVGFiU2VydmljZSB9IGZyb20gJy4vcmV1c2UtdGFiLnNlcnZpY2UnO1xuaW1wb3J0IHtcbiAgUmV1c2VUYWJDYWNoZWQsXG4gIFJldXNlVGFiTm90aWZ5LFxuICBSZXVzZVRhYk1hdGNoTW9kZSxcbiAgUmV1c2VJdGVtLFxuICBSZXVzZUNvbnRleHRJMThuLFxuICBSZXVzZUNvbnRleHRDbG9zZUV2ZW50LFxuICBSZXVzZVRpdGxlLFxufSBmcm9tICcuL3JldXNlLXRhYi5pbnRlcmZhY2VzJztcbmltcG9ydCB7IFJldXNlVGFiQ29udGV4dFNlcnZpY2UgfSBmcm9tICcuL3JldXNlLXRhYi1jb250ZXh0LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdyZXVzZS10YWInLFxuICB0ZW1wbGF0ZVVybDogJy4vcmV1c2UtdGFiLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1JldXNlVGFiQ29udGV4dFNlcnZpY2VdLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5yZXVzZS10YWJdJzogJ3RydWUnLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBSZXVzZVRhYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGVsOiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBzdWIkOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgaTE4biQ6IFN1YnNjcmlwdGlvbjtcbiAgbGlzdDogUmV1c2VJdGVtW10gPSBbXTtcbiAgaXRlbTogUmV1c2VJdGVtO1xuICBwb3MgPSAwO1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgLyoqIOiuvue9ruWMuemFjeaooeW8jyAqL1xuICBASW5wdXQoKVxuICBtb2RlOiBSZXVzZVRhYk1hdGNoTW9kZSA9IFJldXNlVGFiTWF0Y2hNb2RlLk1lbnU7XG4gIC8qKiDpgInpobnmlofmnKzlm73pmYXljJYgKi9cbiAgQElucHV0KClcbiAgaTE4bjogUmV1c2VDb250ZXh0STE4bjtcbiAgLyoqIOaYr+WQpkRlYnVn5qih5byPICovXG4gIEBJbnB1dCgpXG4gIEBJbnB1dEJvb2xlYW4oKVxuICBkZWJ1ZyA9IGZhbHNlO1xuICAvKiog5YWB6K645pyA5aSa5aSN55So5aSa5bCR5Liq6aG16Z2iICovXG4gIEBJbnB1dCgpXG4gIEBJbnB1dE51bWJlcigpXG4gIG1heDogbnVtYmVyO1xuICAvKiog5o6S6Zmk6KeE5YiZ77yM6ZmQIGBtb2RlPVVSTGAgKi9cbiAgQElucHV0KClcbiAgZXhjbHVkZXM6IFJlZ0V4cFtdO1xuICAvKiog5YWB6K645YWz6ZetICovXG4gIEBJbnB1dCgpXG4gIEBJbnB1dEJvb2xlYW4oKVxuICBhbGxvd0Nsb3NlID0gdHJ1ZTtcbiAgLyoqIOaAu+aYr+aYvuekuuW9k+WJjemhtSAqL1xuICBASW5wdXQoKVxuICBASW5wdXRCb29sZWFuKClcbiAgc2hvd0N1cnJlbnQgPSB0cnVlO1xuICAvKiog5YiH5o2i5pe25Zue6LCDICovXG4gIEBPdXRwdXQoKVxuICByZWFkb25seSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFJldXNlSXRlbT4oKTtcbiAgLyoqIOWFs+mXreWbnuiwgyAqL1xuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgY2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPFJldXNlSXRlbT4oKTtcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgY29uc3RydWN0b3IoXG4gICAgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBzcnY6IFJldXNlVGFiU2VydmljZSxcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgcmVuZGVyOiBSZW5kZXJlcjIsXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KEFMQUlOX0kxOE5fVE9LRU4pXG4gICAgcHJpdmF0ZSBpMThuU3J2OiBBbGFpbkkxOE5TZXJ2aWNlLFxuICApIHtcbiAgICB0aGlzLmVsID0gZWwubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCByb3V0ZSQgPSB0aGlzLnJvdXRlci5ldmVudHMucGlwZShcbiAgICAgIGZpbHRlcihldnQgPT4gZXZ0IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCksXG4gICAgKTtcbiAgICB0aGlzLnN1YiQgPSBjb21iaW5lTGF0ZXN0KHRoaXMuc3J2LmNoYW5nZSwgcm91dGUkKS5zdWJzY3JpYmUoKFtyZXMsIGVdKSA9PlxuICAgICAgdGhpcy5nZW5MaXN0KHJlcyBhcyBhbnkpLFxuICAgICk7XG4gICAgaWYgKHRoaXMuaTE4blNydikge1xuICAgICAgdGhpcy5pMThuJCA9IHRoaXMuaTE4blNydi5jaGFuZ2VcbiAgICAgICAgLnBpcGUoZGVib3VuY2VUaW1lKDEwMCkpXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5nZW5MaXN0KCkpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2VuVGl0KHRpdGxlOiBSZXVzZVRpdGxlKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGl0bGUuaTE4biAmJiB0aGlzLmkxOG5TcnZcbiAgICAgID8gdGhpcy5pMThuU3J2LmZhbnlpKHRpdGxlLmkxOG4pXG4gICAgICA6IHRpdGxlLnRleHQ7XG4gIH1cblxuICBwcml2YXRlIGdlbkxpc3Qobm90aWZ5PzogUmV1c2VUYWJOb3RpZnkpIHtcbiAgICBjb25zdCBpc0Nsb3NlZCA9IG5vdGlmeSAmJiBub3RpZnkuYWN0aXZlID09PSAnY2xvc2UnO1xuICAgIGNvbnN0IGJlZm9yZUNsb3NlUG9zID0gaXNDbG9zZWRcbiAgICAgID8gdGhpcy5saXN0LmZpbmRJbmRleCh3ID0+IHcudXJsID09PSBub3RpZnkudXJsKVxuICAgICAgOiAtMTtcbiAgICBjb25zdCBscyA9IHRoaXMuc3J2Lml0ZW1zLm1hcCgoaXRlbTogUmV1c2VUYWJDYWNoZWQsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgIHJldHVybiA8UmV1c2VJdGVtPntcbiAgICAgICAgdXJsOiBpdGVtLnVybCxcbiAgICAgICAgdGl0bGU6IHRoaXMuZ2VuVGl0KGl0ZW0udGl0bGUpLFxuICAgICAgICBjbG9zYWJsZTogdGhpcy5hbGxvd0Nsb3NlICYmIGl0ZW0uY2xvc2FibGUgJiYgdGhpcy5zcnYuY291bnQgPiAwLFxuICAgICAgICBpbmRleCxcbiAgICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgbGFzdDogZmFsc2UsXG4gICAgICB9O1xuICAgIH0pO1xuICAgIGlmICh0aGlzLnNob3dDdXJyZW50KSB7XG4gICAgICBjb25zdCBzbmFwc2hvdCA9IHRoaXMucm91dGUuc25hcHNob3Q7XG4gICAgICBjb25zdCB1cmwgPSB0aGlzLnNydi5nZXRVcmwoc25hcHNob3QpO1xuICAgICAgY29uc3QgaWR4ID0gbHMuZmluZEluZGV4KHcgPT4gdy51cmwgPT09IHVybCk7XG4gICAgICAvLyBqdW1wIGRpcmVjdGx5IHdoZW4gdGhlIGN1cnJlbnQgZXhpc3RzIGluIHRoZSBsaXN0XG4gICAgICAvLyBvciBjcmVhdGUgYSBuZXcgY3VycmVudCBpdGVtIGFuZCBqdW1wXG4gICAgICBpZiAoaWR4ICE9PSAtMSB8fCAoaXNDbG9zZWQgJiYgbm90aWZ5LnVybCA9PT0gdXJsKSkge1xuICAgICAgICB0aGlzLnBvcyA9IGlzQ2xvc2VkXG4gICAgICAgICAgPyBpZHggPj0gYmVmb3JlQ2xvc2VQb3NcbiAgICAgICAgICAgID8gdGhpcy5wb3MgLSAxXG4gICAgICAgICAgICA6IHRoaXMucG9zXG4gICAgICAgICAgOiBpZHg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBzbmFwc2hvdFRydWUgPSB0aGlzLnNydi5nZXRUcnV0aFJvdXRlKHNuYXBzaG90KTtcbiAgICAgICAgbHMucHVzaCg8UmV1c2VJdGVtPntcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgdGl0bGU6IHRoaXMuZ2VuVGl0KHRoaXMuc3J2LmdldFRpdGxlKHVybCwgc25hcHNob3RUcnVlKSksXG4gICAgICAgICAgY2xvc2FibGU6XG4gICAgICAgICAgICB0aGlzLmFsbG93Q2xvc2UgJiZcbiAgICAgICAgICAgIHRoaXMuc3J2LmNvdW50ID4gMCAmJlxuICAgICAgICAgICAgdGhpcy5zcnYuZ2V0Q2xvc2FibGUodXJsLCBzbmFwc2hvdFRydWUpLFxuICAgICAgICAgIGluZGV4OiBscy5sZW5ndGgsXG4gICAgICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgICBsYXN0OiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucG9zID0gbHMubGVuZ3RoIC0gMTtcbiAgICAgIH1cbiAgICAgIC8vIGZpeCB1bmFibGVkIGNsb3NlIGxhc3QgaXRlbVxuICAgICAgaWYgKGxzLmxlbmd0aCA8PSAxKSBsc1swXS5jbG9zYWJsZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHRoaXMubGlzdCA9IGxzO1xuXG4gICAgaWYgKGxzLmxlbmd0aCAmJiBpc0Nsb3NlZCkge1xuICAgICAgdGhpcy50byhudWxsLCB0aGlzLnBvcyk7XG4gICAgfVxuXG4gICAgdGhpcy5yZWZTdGF0dXMoZmFsc2UpO1xuICAgIHRoaXMudmlzaWJpbGl0eSgpO1xuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSB2aXNpYmlsaXR5KCkge1xuICAgIGlmICh0aGlzLnNob3dDdXJyZW50KSByZXR1cm47XG4gICAgdGhpcy5yZW5kZXIuc2V0U3R5bGUoXG4gICAgICB0aGlzLmVsLFxuICAgICAgJ2Rpc3BsYXknLFxuICAgICAgdGhpcy5saXN0Lmxlbmd0aCA9PT0gMCA/ICdub25lJyA6ICdibG9jaycsXG4gICAgKTtcbiAgfVxuXG4gIC8vICNyZWdpb24gVUlcblxuICBjbUNoYW5nZShyZXM6IFJldXNlQ29udGV4dENsb3NlRXZlbnQpIHtcbiAgICBzd2l0Y2ggKHJlcy50eXBlKSB7XG4gICAgICBjYXNlICdjbG9zZSc6XG4gICAgICAgIHRoaXMuX2Nsb3NlKG51bGwsIHJlcy5pdGVtLmluZGV4LCByZXMuaW5jbHVkZU5vbkNsb3NlYWJsZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY2xvc2VSaWdodCc6XG4gICAgICAgIHRoaXMuc3J2LmNsb3NlUmlnaHQocmVzLml0ZW0udXJsLCByZXMuaW5jbHVkZU5vbkNsb3NlYWJsZSk7XG4gICAgICAgIHRoaXMuY2xvc2UuZW1pdChudWxsKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjbGVhcic6XG4gICAgICBjYXNlICdjbG9zZU90aGVyJzpcbiAgICAgICAgdGhpcy5zcnYuY2xlYXIocmVzLmluY2x1ZGVOb25DbG9zZWFibGUpO1xuICAgICAgICB0aGlzLmNsb3NlLmVtaXQobnVsbCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJlZlN0YXR1cyhkYyA9IHRydWUpIHtcbiAgICBpZiAodGhpcy5saXN0Lmxlbmd0aCkge1xuICAgICAgdGhpcy5saXN0W3RoaXMubGlzdC5sZW5ndGggLSAxXS5sYXN0ID0gdHJ1ZTtcbiAgICAgIHRoaXMubGlzdC5mb3JFYWNoKChpLCBpZHgpID0+IChpLmFjdGl2ZSA9IHRoaXMucG9zID09PSBpZHgpKTtcbiAgICB9XG4gICAgaWYgKGRjKSB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHRvKGU6IEV2ZW50LCBpbmRleDogbnVtYmVyKSB7XG4gICAgaWYgKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICAgIGluZGV4ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oaW5kZXgsIHRoaXMubGlzdC5sZW5ndGggLSAxKSk7XG4gICAgY29uc3QgaXRlbSA9IHRoaXMubGlzdFtpbmRleF07XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChpdGVtLnVybCkudGhlbihyZXMgPT4ge1xuICAgICAgaWYgKCFyZXMpIHJldHVybjtcbiAgICAgIHRoaXMucG9zID0gaW5kZXg7XG4gICAgICB0aGlzLml0ZW0gPSBpdGVtO1xuICAgICAgdGhpcy5yZWZTdGF0dXMoKTtcbiAgICAgIHRoaXMuY2hhbmdlLmVtaXQoaXRlbSk7XG4gICAgfSk7XG4gIH1cblxuICBfY2xvc2UoZTogRXZlbnQsIGlkeDogbnVtYmVyLCBpbmNsdWRlTm9uQ2xvc2VhYmxlOiBib29sZWFuKSB7XG4gICAgaWYgKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmxpc3RbaWR4XTtcbiAgICB0aGlzLnNydi5jbG9zZShpdGVtLnVybCwgaW5jbHVkZU5vbkNsb3NlYWJsZSk7XG4gICAgdGhpcy5jbG9zZS5lbWl0KGl0ZW0pO1xuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmdlbkxpc3QoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKFxuICAgIGNoYW5nZXM6IHsgW1AgaW4ga2V5b2YgdGhpc10/OiBTaW1wbGVDaGFuZ2UgfSAmIFNpbXBsZUNoYW5nZXMsXG4gICk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLm1heCkgdGhpcy5zcnYubWF4ID0gdGhpcy5tYXg7XG4gICAgaWYgKGNoYW5nZXMuZXhjbHVkZXMpIHRoaXMuc3J2LmV4Y2x1ZGVzID0gdGhpcy5leGNsdWRlcztcbiAgICBpZiAoY2hhbmdlcy5tb2RlKSB0aGlzLnNydi5tb2RlID0gdGhpcy5tb2RlO1xuICAgIHRoaXMuc3J2LmRlYnVnID0gdGhpcy5kZWJ1ZztcblxuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgY29uc3QgeyBpMThuJCwgc3ViJCB9ID0gdGhpcztcbiAgICBzdWIkLnVuc3Vic2NyaWJlKCk7XG4gICAgaWYgKGkxOG4kKSBpMThuJC51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=