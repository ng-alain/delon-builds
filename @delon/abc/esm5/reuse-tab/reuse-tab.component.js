/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
            return _this.genList(/** @type {?} */ (res));
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
            ? this.list.findIndex(function (w) { return w.url === notify["url"]; })
            : -1;
        /** @type {?} */
        var ls = this.srv.items.map(function (item, index) {
            return /** @type {?} */ ({
                url: item.url,
                title: _this.genTit(item.title),
                closable: _this.allowClose && item.closable && _this.srv.count > 0,
                index: index,
                active: false,
                last: false,
            });
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
            if (idx !== -1 || (isClosed && notify["url"] === url_1)) {
                this.pos = isClosed
                    ? idx >= beforeClosePos
                        ? this.pos - 1
                        : this.pos
                    : idx;
            }
            else {
                /** @type {?} */
                var snapshotTrue = this.srv.getTruthRoute(snapshot);
                ls.push(/** @type {?} */ ({
                    url: url_1,
                    title: this.genTit(this.srv.getTitle(url_1, snapshotTrue)),
                    closable: this.allowClose &&
                        this.srv.count > 0 &&
                        this.srv.getClosable(url_1, snapshotTrue),
                    index: ls.length,
                    active: false,
                    last: false,
                }));
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
    /**
     * @param {?} res
     * @return {?}
     */
    ReuseTabComponent.prototype.cmChange = /**
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
    /**
     * @return {?}
     */
    ReuseTabComponent.prototype.ngOnInit = /**
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
                    template: "<nz-tabset [nzSelectedIndex]=\"pos\" [nzAnimated]=\"false\" nzType=\"line\">\r\n  <nz-tab *ngFor=\"let i of list; let index = index\" [nzTitle]=\"titleTemplate\">\r\n    <ng-template #titleTemplate>\r\n      <span [reuse-tab-context-menu]=\"i\" (click)=\"to($event, index)\" class=\"name\">{{i.title}}</span>\r\n      <i *ngIf=\"i.closable\" class=\"anticon anticon-close op\" (click)=\"_close($event, index, false)\"></i>\r\n    </ng-template>\r\n  </nz-tab>\r\n</nz-tabset>\r\n<reuse-tab-context [i18n]=\"i18n\" (change)=\"cmChange($event)\"></reuse-tab-context>\r\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2UtdGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvcmV1c2UtdGFiLyIsInNvdXJjZXMiOlsicmV1c2UtdGFiLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFFTix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFlBQVksRUFLWixVQUFVLEVBQ1YsU0FBUyxFQUNULE1BQU0sRUFDTixRQUFRLEdBQ1QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDeEUsT0FBTyxFQUFnQixhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQW9CLE1BQU0sY0FBYyxDQUFDO0FBRWxFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBR0wsaUJBQWlCLEdBS2xCLE1BQU0sd0JBQXdCLENBQUM7QUFDaEMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7O0lBc0RuRSxhQUFhO0lBRWIsMkJBQ0UsRUFBYyxFQUNOLEtBQ0EsSUFDQSxRQUNBLE9BQ0EsUUFHQSxPQUF5QjtRQVRuQyxpQkF1QkM7UUFyQlMsUUFBRyxHQUFILEdBQUc7UUFDSCxPQUFFLEdBQUYsRUFBRTtRQUNGLFdBQU0sR0FBTixNQUFNO1FBQ04sVUFBSyxHQUFMLEtBQUs7UUFDTCxXQUFNLEdBQU4sTUFBTTtRQUdOLFlBQU8sR0FBUCxPQUFPLENBQWtCO29CQWpEZixFQUFFO21CQUVoQixD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S0FBSyxDQUFDO1FBRTVCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7S0FDekI7Ozs7SUFFRCx1Q0FBVzs7O0lBQVg7UUFDRSxlQUFRLGdCQUFLLEVBQUUsY0FBSSxDQUFVO1FBQzdCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLEtBQUs7WUFBRSxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDaEM7O2dCQW5PRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLG9rQkFBeUM7b0JBQ3pDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztvQkFDbkMsSUFBSSxFQUFFO3dCQUNKLG1CQUFtQixFQUFFLE1BQU07cUJBQzVCO2lCQUNGOzs7O2dCQWhDQyxVQUFVO2dCQVdILGVBQWU7Z0JBakJ0QixpQkFBaUI7Z0JBV1YsTUFBTTtnQkFBaUIsY0FBYztnQkFKNUMsU0FBUztnREFtRk4sUUFBUSxZQUNSLE1BQU0sU0FBQyxnQkFBZ0I7Ozt1QkF6Q3pCLEtBQUs7dUJBR0wsS0FBSzt3QkFHTCxLQUFLO3NCQUlMLEtBQUs7MkJBSUwsS0FBSzs2QkFHTCxLQUFLOzhCQUlMLEtBQUs7eUJBSUwsTUFBTTt3QkFHTixNQUFNOzs7UUFyQk4sWUFBWSxFQUFFOzs7O1FBSWQsV0FBVyxFQUFFOzs7O1FBT2IsWUFBWSxFQUFFOzs7O1FBSWQsWUFBWSxFQUFFOzs7NEJBOUVqQjs7U0E2Q2EsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgT25Jbml0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgU2ltcGxlQ2hhbmdlLFxyXG4gIE9uRGVzdHJveSxcclxuICBFbGVtZW50UmVmLFxyXG4gIFJlbmRlcmVyMixcclxuICBJbmplY3QsXHJcbiAgT3B0aW9uYWwsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciwgTmF2aWdhdGlvbkVuZCwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24sIGNvbWJpbmVMYXRlc3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmlsdGVyLCBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IElucHV0TnVtYmVyLCBJbnB1dEJvb2xlYW4gfSBmcm9tICdAZGVsb24vdXRpbCc7XHJcbmltcG9ydCB7IEFMQUlOX0kxOE5fVE9LRU4sIEFsYWluSTE4TlNlcnZpY2UgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xyXG5cclxuaW1wb3J0IHsgUmV1c2VUYWJTZXJ2aWNlIH0gZnJvbSAnLi9yZXVzZS10YWIuc2VydmljZSc7XHJcbmltcG9ydCB7XHJcbiAgUmV1c2VUYWJDYWNoZWQsXHJcbiAgUmV1c2VUYWJOb3RpZnksXHJcbiAgUmV1c2VUYWJNYXRjaE1vZGUsXHJcbiAgUmV1c2VJdGVtLFxyXG4gIFJldXNlQ29udGV4dEkxOG4sXHJcbiAgUmV1c2VDb250ZXh0Q2xvc2VFdmVudCxcclxuICBSZXVzZVRpdGxlLFxyXG59IGZyb20gJy4vcmV1c2UtdGFiLmludGVyZmFjZXMnO1xyXG5pbXBvcnQgeyBSZXVzZVRhYkNvbnRleHRTZXJ2aWNlIH0gZnJvbSAnLi9yZXVzZS10YWItY29udGV4dC5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncmV1c2UtdGFiJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcmV1c2UtdGFiLmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBwcm92aWRlcnM6IFtSZXVzZVRhYkNvbnRleHRTZXJ2aWNlXSxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLnJldXNlLXRhYl0nOiAndHJ1ZScsXHJcbiAgfSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFJldXNlVGFiQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSBlbDogSFRNTEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBzdWIkOiBTdWJzY3JpcHRpb247XHJcbiAgcHJpdmF0ZSBpMThuJDogU3Vic2NyaXB0aW9uO1xyXG4gIGxpc3Q6IFJldXNlSXRlbVtdID0gW107XHJcbiAgaXRlbTogUmV1c2VJdGVtO1xyXG4gIHBvcyA9IDA7XHJcblxyXG4gIC8vICNyZWdpb24gZmllbGRzXHJcblxyXG4gIC8qKiDorr7nva7ljLnphY3mqKHlvI8gKi9cclxuICBASW5wdXQoKVxyXG4gIG1vZGU6IFJldXNlVGFiTWF0Y2hNb2RlID0gUmV1c2VUYWJNYXRjaE1vZGUuTWVudTtcclxuICAvKiog6YCJ6aG55paH5pys5Zu96ZmF5YyWICovXHJcbiAgQElucHV0KClcclxuICBpMThuOiBSZXVzZUNvbnRleHRJMThuO1xyXG4gIC8qKiDmmK/lkKZEZWJ1Z+aooeW8jyAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgQElucHV0Qm9vbGVhbigpXHJcbiAgZGVidWcgPSBmYWxzZTtcclxuICAvKiog5YWB6K645pyA5aSa5aSN55So5aSa5bCR5Liq6aG16Z2iICovXHJcbiAgQElucHV0KClcclxuICBASW5wdXROdW1iZXIoKVxyXG4gIG1heDogbnVtYmVyO1xyXG4gIC8qKiDmjpLpmaTop4TliJnvvIzpmZAgYG1vZGU9VVJMYCAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZXhjbHVkZXM6IFJlZ0V4cFtdO1xyXG4gIC8qKiDlhYHorrjlhbPpl60gKi9cclxuICBASW5wdXQoKVxyXG4gIEBJbnB1dEJvb2xlYW4oKVxyXG4gIGFsbG93Q2xvc2UgPSB0cnVlO1xyXG4gIC8qKiDmgLvmmK/mmL7npLrlvZPliY3pobUgKi9cclxuICBASW5wdXQoKVxyXG4gIEBJbnB1dEJvb2xlYW4oKVxyXG4gIHNob3dDdXJyZW50ID0gdHJ1ZTtcclxuICAvKiog5YiH5o2i5pe25Zue6LCDICovXHJcbiAgQE91dHB1dCgpXHJcbiAgY2hhbmdlOiBFdmVudEVtaXR0ZXI8UmV1c2VJdGVtPiA9IG5ldyBFdmVudEVtaXR0ZXI8UmV1c2VJdGVtPigpO1xyXG4gIC8qKiDlhbPpl63lm57osIMgKi9cclxuICBAT3V0cHV0KClcclxuICBjbG9zZTogRXZlbnRFbWl0dGVyPFJldXNlSXRlbT4gPSBuZXcgRXZlbnRFbWl0dGVyPFJldXNlSXRlbT4oKTtcclxuXHJcbiAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGVsOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSBzcnY6IFJldXNlVGFiU2VydmljZSxcclxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgcHJpdmF0ZSByZW5kZXI6IFJlbmRlcmVyMixcclxuICAgIEBPcHRpb25hbCgpXHJcbiAgICBASW5qZWN0KEFMQUlOX0kxOE5fVE9LRU4pXHJcbiAgICBwcml2YXRlIGkxOG5TcnY6IEFsYWluSTE4TlNlcnZpY2UsXHJcbiAgKSB7XHJcbiAgICB0aGlzLmVsID0gZWwubmF0aXZlRWxlbWVudDtcclxuICAgIGNvbnN0IHJvdXRlJCA9IHRoaXMucm91dGVyLmV2ZW50cy5waXBlKFxyXG4gICAgICBmaWx0ZXIoZXZ0ID0+IGV2dCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpLFxyXG4gICAgKTtcclxuICAgIHRoaXMuc3ViJCA9IGNvbWJpbmVMYXRlc3QodGhpcy5zcnYuY2hhbmdlLCByb3V0ZSQpLnN1YnNjcmliZSgoW3JlcywgZV0pID0+XHJcbiAgICAgIHRoaXMuZ2VuTGlzdChyZXMgYXMgYW55KSxcclxuICAgICk7XHJcbiAgICBpZiAodGhpcy5pMThuU3J2KSB7XHJcbiAgICAgIHRoaXMuaTE4biQgPSB0aGlzLmkxOG5TcnYuY2hhbmdlXHJcbiAgICAgICAgLnBpcGUoZGVib3VuY2VUaW1lKDEwMCkpXHJcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmdlbkxpc3QoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdlblRpdCh0aXRsZTogUmV1c2VUaXRsZSk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGl0bGUuaTE4biAmJiB0aGlzLmkxOG5TcnZcclxuICAgICAgPyB0aGlzLmkxOG5TcnYuZmFueWkodGl0bGUuaTE4bilcclxuICAgICAgOiB0aXRsZS50ZXh0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZW5MaXN0KG5vdGlmeT86IFJldXNlVGFiTm90aWZ5KSB7XHJcbiAgICBjb25zdCBpc0Nsb3NlZCA9IG5vdGlmeSAmJiBub3RpZnkuYWN0aXZlID09PSAnY2xvc2UnO1xyXG4gICAgY29uc3QgYmVmb3JlQ2xvc2VQb3MgPSBpc0Nsb3NlZFxyXG4gICAgICA/IHRoaXMubGlzdC5maW5kSW5kZXgodyA9PiB3LnVybCA9PT0gbm90aWZ5LnVybClcclxuICAgICAgOiAtMTtcclxuICAgIGNvbnN0IGxzID0gdGhpcy5zcnYuaXRlbXMubWFwKChpdGVtOiBSZXVzZVRhYkNhY2hlZCwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICByZXR1cm4gPFJldXNlSXRlbT57XHJcbiAgICAgICAgdXJsOiBpdGVtLnVybCxcclxuICAgICAgICB0aXRsZTogdGhpcy5nZW5UaXQoaXRlbS50aXRsZSksXHJcbiAgICAgICAgY2xvc2FibGU6IHRoaXMuYWxsb3dDbG9zZSAmJiBpdGVtLmNsb3NhYmxlICYmIHRoaXMuc3J2LmNvdW50ID4gMCxcclxuICAgICAgICBpbmRleCxcclxuICAgICAgICBhY3RpdmU6IGZhbHNlLFxyXG4gICAgICAgIGxhc3Q6IGZhbHNlLFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgICBpZiAodGhpcy5zaG93Q3VycmVudCkge1xyXG4gICAgICBjb25zdCBzbmFwc2hvdCA9IHRoaXMucm91dGUuc25hcHNob3Q7XHJcbiAgICAgIGNvbnN0IHVybCA9IHRoaXMuc3J2LmdldFVybChzbmFwc2hvdCk7XHJcbiAgICAgIGNvbnN0IGlkeCA9IGxzLmZpbmRJbmRleCh3ID0+IHcudXJsID09PSB1cmwpO1xyXG4gICAgICAvLyBqdW1wIGRpcmVjdGx5IHdoZW4gdGhlIGN1cnJlbnQgZXhpc3RzIGluIHRoZSBsaXN0XHJcbiAgICAgIC8vIG9yIGNyZWF0ZSBhIG5ldyBjdXJyZW50IGl0ZW0gYW5kIGp1bXBcclxuICAgICAgaWYgKGlkeCAhPT0gLTEgfHwgKGlzQ2xvc2VkICYmIG5vdGlmeS51cmwgPT09IHVybCkpIHtcclxuICAgICAgICB0aGlzLnBvcyA9IGlzQ2xvc2VkXHJcbiAgICAgICAgICA/IGlkeCA+PSBiZWZvcmVDbG9zZVBvc1xyXG4gICAgICAgICAgICA/IHRoaXMucG9zIC0gMVxyXG4gICAgICAgICAgICA6IHRoaXMucG9zXHJcbiAgICAgICAgICA6IGlkeDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBzbmFwc2hvdFRydWUgPSB0aGlzLnNydi5nZXRUcnV0aFJvdXRlKHNuYXBzaG90KTtcclxuICAgICAgICBscy5wdXNoKDxSZXVzZUl0ZW0+e1xyXG4gICAgICAgICAgdXJsLFxyXG4gICAgICAgICAgdGl0bGU6IHRoaXMuZ2VuVGl0KHRoaXMuc3J2LmdldFRpdGxlKHVybCwgc25hcHNob3RUcnVlKSksXHJcbiAgICAgICAgICBjbG9zYWJsZTpcclxuICAgICAgICAgICAgdGhpcy5hbGxvd0Nsb3NlICYmXHJcbiAgICAgICAgICAgIHRoaXMuc3J2LmNvdW50ID4gMCAmJlxyXG4gICAgICAgICAgICB0aGlzLnNydi5nZXRDbG9zYWJsZSh1cmwsIHNuYXBzaG90VHJ1ZSksXHJcbiAgICAgICAgICBpbmRleDogbHMubGVuZ3RoLFxyXG4gICAgICAgICAgYWN0aXZlOiBmYWxzZSxcclxuICAgICAgICAgIGxhc3Q6IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucG9zID0gbHMubGVuZ3RoIC0gMTtcclxuICAgICAgfVxyXG4gICAgICAvLyBmaXggdW5hYmxlZCBjbG9zZSBsYXN0IGl0ZW1cclxuICAgICAgaWYgKGxzLmxlbmd0aCA8PSAxKSBsc1swXS5jbG9zYWJsZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubGlzdCA9IGxzO1xyXG5cclxuICAgIGlmIChscy5sZW5ndGggJiYgaXNDbG9zZWQpIHtcclxuICAgICAgdGhpcy50byhudWxsLCB0aGlzLnBvcyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5yZWZTdGF0dXMoZmFsc2UpO1xyXG4gICAgdGhpcy52aXNpYmlsaXR5KCk7XHJcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdmlzaWJpbGl0eSgpIHtcclxuICAgIGlmICh0aGlzLnNob3dDdXJyZW50KSByZXR1cm47XHJcbiAgICB0aGlzLnJlbmRlci5zZXRTdHlsZShcclxuICAgICAgdGhpcy5lbCxcclxuICAgICAgJ2Rpc3BsYXknLFxyXG4gICAgICB0aGlzLmxpc3QubGVuZ3RoID09PSAwID8gJ25vbmUnIDogJ2Jsb2NrJyxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvLyAjcmVnaW9uIFVJXHJcblxyXG4gIGNtQ2hhbmdlKHJlczogUmV1c2VDb250ZXh0Q2xvc2VFdmVudCkge1xyXG4gICAgc3dpdGNoIChyZXMudHlwZSkge1xyXG4gICAgICBjYXNlICdjbG9zZSc6XHJcbiAgICAgICAgdGhpcy5fY2xvc2UobnVsbCwgcmVzLml0ZW0uaW5kZXgsIHJlcy5pbmNsdWRlTm9uQ2xvc2VhYmxlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnY2xvc2VSaWdodCc6XHJcbiAgICAgICAgdGhpcy5zcnYuY2xvc2VSaWdodChyZXMuaXRlbS51cmwsIHJlcy5pbmNsdWRlTm9uQ2xvc2VhYmxlKTtcclxuICAgICAgICB0aGlzLmNsb3NlLmVtaXQobnVsbCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2NsZWFyJzpcclxuICAgICAgY2FzZSAnY2xvc2VPdGhlcic6XHJcbiAgICAgICAgdGhpcy5zcnYuY2xlYXIocmVzLmluY2x1ZGVOb25DbG9zZWFibGUpO1xyXG4gICAgICAgIHRoaXMuY2xvc2UuZW1pdChudWxsKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlZlN0YXR1cyhkYyA9IHRydWUpIHtcclxuICAgIGlmICh0aGlzLmxpc3QubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMubGlzdFt0aGlzLmxpc3QubGVuZ3RoIC0gMV0ubGFzdCA9IHRydWU7XHJcbiAgICAgIHRoaXMubGlzdC5mb3JFYWNoKChpLCBpZHgpID0+IChpLmFjdGl2ZSA9IHRoaXMucG9zID09PSBpZHgpKTtcclxuICAgIH1cclxuICAgIGlmIChkYykgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICB0byhlOiBFdmVudCwgaW5kZXg6IG51bWJlcikge1xyXG4gICAgaWYgKGUpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG4gICAgaW5kZXggPSBNYXRoLm1heCgwLCBNYXRoLm1pbihpbmRleCwgdGhpcy5saXN0Lmxlbmd0aCAtIDEpKTtcclxuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmxpc3RbaW5kZXhdO1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChpdGVtLnVybCkudGhlbihyZXMgPT4ge1xyXG4gICAgICBpZiAoIXJlcykgcmV0dXJuO1xyXG4gICAgICB0aGlzLnBvcyA9IGluZGV4O1xyXG4gICAgICB0aGlzLml0ZW0gPSBpdGVtO1xyXG4gICAgICB0aGlzLnJlZlN0YXR1cygpO1xyXG4gICAgICB0aGlzLmNoYW5nZS5lbWl0KGl0ZW0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBfY2xvc2UoZTogRXZlbnQsIGlkeDogbnVtYmVyLCBpbmNsdWRlTm9uQ2xvc2VhYmxlOiBib29sZWFuKSB7XHJcbiAgICBpZiAoZSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBpdGVtID0gdGhpcy5saXN0W2lkeF07XHJcbiAgICB0aGlzLnNydi5jbG9zZShpdGVtLnVybCwgaW5jbHVkZU5vbkNsb3NlYWJsZSk7XHJcbiAgICB0aGlzLmNsb3NlLmVtaXQoaXRlbSk7XHJcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIC8vICNlbmRyZWdpb25cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmdlbkxpc3QoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKFxyXG4gICAgY2hhbmdlczogeyBbUCBpbiBrZXlvZiB0aGlzXT86IFNpbXBsZUNoYW5nZSB9ICYgU2ltcGxlQ2hhbmdlcyxcclxuICApOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLm1heCkgdGhpcy5zcnYubWF4ID0gdGhpcy5tYXg7XHJcbiAgICBpZiAoY2hhbmdlcy5leGNsdWRlcykgdGhpcy5zcnYuZXhjbHVkZXMgPSB0aGlzLmV4Y2x1ZGVzO1xyXG4gICAgaWYgKGNoYW5nZXMubW9kZSkgdGhpcy5zcnYubW9kZSA9IHRoaXMubW9kZTtcclxuICAgIHRoaXMuc3J2LmRlYnVnID0gdGhpcy5kZWJ1ZztcclxuXHJcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgY29uc3QgeyBpMThuJCwgc3ViJCB9ID0gdGhpcztcclxuICAgIHN1YiQudW5zdWJzY3JpYmUoKTtcclxuICAgIGlmIChpMThuJCkgaTE4biQudW5zdWJzY3JpYmUoKTtcclxuICB9XHJcbn1cclxuIl19