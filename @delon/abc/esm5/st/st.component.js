/**
 * @fileoverview added by tsickle
 * Generated from: st.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __assign, __awaiter, __decorate, __generator, __metadata } from "tslib";
import { DecimalPipe, DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Inject, Input, Optional, Output, TemplateRef, ViewChild, ViewEncapsulation, } from '@angular/core';
import { Router } from '@angular/router';
import { ALAIN_I18N_TOKEN, CNCurrencyPipe, DatePipe, DelonLocaleService, DrawerHelper, ModalHelper, YNPipe, } from '@delon/theme';
import { AlainConfigService, deepMergeKey, InputBoolean, InputNumber, toBoolean } from '@delon/util';
import { NzTableComponent, NzTableStyleService } from 'ng-zorro-antd/table';
import { from, of, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { STColumnSource } from './st-column-source';
import { STDataSource } from './st-data-source';
import { STExport } from './st-export';
import { STRowSource } from './st-row.directive';
import { ST_DEFULAT_CONFIG } from './st.config';
var STComponent = /** @class */ (function () {
    function STComponent(i18nSrv, cdr, router, el, exportSrv, modalHelper, drawerHelper, doc, columnSource, dataSource, delonI18n, configSrv) {
        var _this = this;
        this.cdr = cdr;
        this.router = router;
        this.el = el;
        this.exportSrv = exportSrv;
        this.modalHelper = modalHelper;
        this.drawerHelper = drawerHelper;
        this.doc = doc;
        this.columnSource = columnSource;
        this.dataSource = dataSource;
        this.delonI18n = delonI18n;
        this.unsubscribe$ = new Subject();
        this.totalTpl = "";
        this.rowClickCount = 0;
        this.locale = {};
        this._loading = false;
        this._data = [];
        this._statistical = {};
        this._isPagination = true;
        this._allChecked = false;
        this._allCheckedDisabled = false;
        this._indeterminate = false;
        this._columns = [];
        this.columns = [];
        this.ps = 10;
        this.pi = 1;
        this.total = 0;
        this.loading = null;
        this.loadingDelay = 0;
        this.bordered = false;
        this.expandRowByClick = false;
        this.expandAccordion = false;
        this.rowClickTime = 200;
        this.responsive = true;
        // tslint:disable-next-line:no-output-native
        this.error = new EventEmitter();
        // tslint:disable-next-line:no-output-native
        this.change = new EventEmitter();
        this.virtualScroll = false;
        this.virtualItemSize = 54;
        this.virtualMaxBufferPx = 200;
        this.virtualMinBufferPx = 100;
        this.virtualForTrackBy = (/**
         * @param {?} index
         * @return {?}
         */
        function (index) { return index; });
        this.setCog(configSrv.merge('st', ST_DEFULAT_CONFIG));
        this.delonI18n.change.pipe(takeUntil(this.unsubscribe$)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.locale = _this.delonI18n.getData('st');
            if (_this._columns.length > 0) {
                _this.updateTotalTpl();
                _this.cd();
            }
        }));
        i18nSrv.change
            .pipe(takeUntil(this.unsubscribe$), filter((/**
         * @return {?}
         */
        function () { return _this._columns.length > 0; })))
            .subscribe((/**
         * @template THIS
         * @this {THIS}
         * @return {THIS}
         */
        function () { return _this.refreshColumns(); }));
    }
    Object.defineProperty(STComponent.prototype, "req", {
        get: /**
         * @return {?}
         */
        function () {
            return this._req;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._req = deepMergeKey({}, true, this.cog.req, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(STComponent.prototype, "res", {
        /** 返回体配置 */
        get: /**
         * 返回体配置
         * @return {?}
         */
        function () {
            return this._res;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var item = (this._res = deepMergeKey({}, true, this.cog.res, value));
            /** @type {?} */
            var reName = (/** @type {?} */ (item.reName));
            if (!Array.isArray(reName.list))
                reName.list = (/** @type {?} */ (reName.list)).split('.');
            if (!Array.isArray(reName.total))
                reName.total = (/** @type {?} */ (reName.total)).split('.');
            this._res = item;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(STComponent.prototype, "page", {
        get: /**
         * @return {?}
         */
        function () {
            return this._page;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._page = __assign(__assign({}, this.cog.page), value);
            this.updateTotalTpl();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(STComponent.prototype, "multiSort", {
        get: /**
         * @return {?}
         */
        function () {
            return this._multiSort;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (typeof value === 'boolean' && !toBoolean(value)) {
                this._multiSort = undefined;
                return;
            }
            this._multiSort = __assign({}, (typeof value === 'object' ? value : {}));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(STComponent.prototype, "widthMode", {
        get: /**
         * @return {?}
         */
        function () {
            return this._widthMode;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._widthMode = __assign(__assign({}, this.cog.widthMode), value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(STComponent.prototype, "count", {
        /**
         * Get the number of the current page
         */
        get: /**
         * Get the number of the current page
         * @return {?}
         */
        function () {
            return this._data.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(STComponent.prototype, "list", {
        /**
         * Get the data of the current page
         */
        get: /**
         * Get the data of the current page
         * @return {?}
         */
        function () {
            return this._data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(STComponent.prototype, "routerState", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            var _a = this, pi = _a.pi, ps = _a.ps, total = _a.total;
            return { pi: pi, ps: ps, total: total };
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @param {?} cog
     * @return {?}
     */
    STComponent.prototype.setCog = /**
     * @private
     * @param {?} cog
     * @return {?}
     */
    function (cog) {
        /** @type {?} */
        var copyMultiSort = __assign({}, cog.multiSort);
        // Because multiSort.global will affect the result, it should be removed first, and multiSort will be operated again after processing.
        delete cog.multiSort;
        this.cog = cog;
        Object.assign(this, cog);
        if (copyMultiSort.global !== false) {
            this.multiSort = copyMultiSort;
        }
        this.columnSource.setCog(cog);
    };
    /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    STComponent.prototype.cd = /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    function () {
        (/** @type {?} */ (this)).cdr.detectChanges();
        return (/** @type {?} */ (this));
    };
    /**
     * @param {?} total
     * @param {?} range
     * @return {?}
     */
    STComponent.prototype.renderTotal = /**
     * @param {?} total
     * @param {?} range
     * @return {?}
     */
    function (total, range) {
        return this.totalTpl
            ? this.totalTpl.replace('{{total}}', total).replace('{{range[0]}}', range[0]).replace('{{range[1]}}', range[1])
            : '';
    };
    /**
     * @param {?} column
     * @return {?}
     */
    STComponent.prototype.isTruncate = /**
     * @param {?} column
     * @return {?}
     */
    function (column) {
        return !!column.width && this.widthMode.strictBehavior === 'truncate' && column.type !== 'img';
    };
    /**
     * @param {?} column
     * @return {?}
     */
    STComponent.prototype.columnClass = /**
     * @param {?} column
     * @return {?}
     */
    function (column) {
        return column.className || (this.isTruncate(column) ? 'text-truncate' : null);
    };
    /**
     * @private
     * @param {?} type
     * @param {?=} data
     * @return {?}
     */
    STComponent.prototype.changeEmit = /**
     * @private
     * @param {?} type
     * @param {?=} data
     * @return {?}
     */
    function (type, data) {
        /** @type {?} */
        var res = {
            type: type,
            pi: this.pi,
            ps: this.ps,
            total: this.total,
        };
        if (data != null) {
            res[type] = data;
        }
        this.change.emit(res);
    };
    Object.defineProperty(STComponent.prototype, "filteredData", {
        // #region data
        /**
         * 获取过滤后所有数据
         * - 本地数据：包含排序、过滤后不分页数据
         * - 远程数据：不传递 `pi`、`ps` 两个参数
         */
        get: 
        // #region data
        /**
         * 获取过滤后所有数据
         * - 本地数据：包含排序、过滤后不分页数据
         * - 远程数据：不传递 `pi`、`ps` 两个参数
         * @return {?}
         */
        function () {
            return this.loadData((/** @type {?} */ ({ paginator: false }))).then((/**
             * @param {?} res
             * @return {?}
             */
            function (res) { return res.list; }));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    STComponent.prototype.updateTotalTpl = /**
     * @private
     * @return {?}
     */
    function () {
        var total = this.page.total;
        if (typeof total === 'string' && total.length) {
            this.totalTpl = total;
        }
        else if (toBoolean(total)) {
            this.totalTpl = this.locale.total;
        }
        else {
            this.totalTpl = '';
        }
    };
    /**
     * @private
     * @param {?} val
     * @return {?}
     */
    STComponent.prototype.setLoading = /**
     * @private
     * @param {?} val
     * @return {?}
     */
    function (val) {
        if (this.loading == null) {
            this._loading = val;
        }
    };
    /**
     * @private
     * @param {?=} options
     * @return {?}
     */
    STComponent.prototype.loadData = /**
     * @private
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        var _this = this;
        var _a = this, pi = _a.pi, ps = _a.ps, data = _a.data, req = _a.req, res = _a.res, page = _a.page, total = _a.total, singleSort = _a.singleSort, multiSort = _a.multiSort, rowClassName = _a.rowClassName;
        return new Promise((/**
         * @param {?} resolvePromise
         * @param {?} rejectPromise
         * @return {?}
         */
        function (resolvePromise, rejectPromise) {
            if (_this.data$) {
                _this.data$.unsubscribe();
            }
            _this.data$ = _this.dataSource
                .process(__assign({ pi: pi,
                ps: ps,
                total: total,
                data: data,
                req: req,
                res: res,
                page: page, columns: _this._columns, singleSort: singleSort,
                multiSort: multiSort,
                rowClassName: rowClassName, paginator: true }, options))
                .pipe(takeUntil(_this.unsubscribe$))
                .subscribe((/**
             * @param {?} result
             * @return {?}
             */
            function (result) { return resolvePromise(result); }), (/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return rejectPromise(error); }));
        }));
    };
    /**
     * @private
     * @return {?}
     */
    STComponent.prototype.loadPageData = /**
     * @private
     * @return {?}
     */
    function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setLoading(true);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.loadData()];
                    case 2:
                        result = _a.sent();
                        this.setLoading(false);
                        if (typeof result.pi !== 'undefined') {
                            this.pi = result.pi;
                        }
                        if (typeof result.ps !== 'undefined') {
                            this.ps = result.ps;
                        }
                        if (typeof result.total !== 'undefined') {
                            this.total = result.total;
                        }
                        if (typeof result.pageShow !== 'undefined') {
                            this._isPagination = result.pageShow;
                        }
                        this._data = (/** @type {?} */ (result.list));
                        this._statistical = (/** @type {?} */ (result.statistical));
                        this.changeEmit('loaded', result.list);
                        return [2 /*return*/, this._refCheck()];
                    case 3:
                        error_1 = _a.sent();
                        this.setLoading(false);
                        if (!this.unsubscribe$.isStopped) {
                            this.cdr.detectChanges();
                            this.error.emit({ type: 'req', error: error_1 });
                        }
                        return [2 /*return*/, this];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /** 清空所有数据 */
    /**
     * 清空所有数据
     * @template THIS
     * @this {THIS}
     * @param {?=} cleanStatus
     * @return {THIS}
     */
    STComponent.prototype.clear = /**
     * 清空所有数据
     * @template THIS
     * @this {THIS}
     * @param {?=} cleanStatus
     * @return {THIS}
     */
    function (cleanStatus) {
        if (cleanStatus === void 0) { cleanStatus = true; }
        if (cleanStatus) {
            (/** @type {?} */ (this)).clearStatus();
        }
        (/** @type {?} */ (this))._data = [];
        return (/** @type {?} */ (this)).cd();
    };
    /** 清空所有状态 */
    /**
     * 清空所有状态
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    STComponent.prototype.clearStatus = /**
     * 清空所有状态
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    function () {
        return (/** @type {?} */ (this)).clearCheck().clearRadio().clearFilter().clearSort();
    };
    /**
     * 根据页码重新加载数据
     *
     * @param pi 指定当前页码，默认：`1`
     * @param extraParams 重新指定 `extraParams` 值
     * @param options 选项
     */
    /**
     * 根据页码重新加载数据
     *
     * @template THIS
     * @this {THIS}
     * @param {?=} pi 指定当前页码，默认：`1`
     * @param {?=} extraParams 重新指定 `extraParams` 值
     * @param {?=} options 选项
     * @return {THIS}
     */
    STComponent.prototype.load = /**
     * 根据页码重新加载数据
     *
     * @template THIS
     * @this {THIS}
     * @param {?=} pi 指定当前页码，默认：`1`
     * @param {?=} extraParams 重新指定 `extraParams` 值
     * @param {?=} options 选项
     * @return {THIS}
     */
    function (pi, extraParams, options) {
        if (pi === void 0) { pi = 1; }
        if (pi !== -1)
            (/** @type {?} */ (this)).pi = pi;
        if (typeof extraParams !== 'undefined') {
            (/** @type {?} */ (this)).req.params = options && options.merge ? __assign(__assign({}, (/** @type {?} */ (this)).req.params), extraParams) : extraParams;
        }
        (/** @type {?} */ (this))._change('pi', options);
        return (/** @type {?} */ (this));
    };
    /**
     * 重新刷新当前页
     * @param extraParams 重新指定 `extraParams` 值
     */
    /**
     * 重新刷新当前页
     * @template THIS
     * @this {THIS}
     * @param {?=} extraParams 重新指定 `extraParams` 值
     * @param {?=} options
     * @return {THIS}
     */
    STComponent.prototype.reload = /**
     * 重新刷新当前页
     * @template THIS
     * @this {THIS}
     * @param {?=} extraParams 重新指定 `extraParams` 值
     * @param {?=} options
     * @return {THIS}
     */
    function (extraParams, options) {
        return (/** @type {?} */ (this)).load(-1, extraParams, options);
    };
    /**
     * 重置且重新设置 `pi` 为 `1`，包含以下值：
     * - `check` 数据
     * - `radio` 数据
     * - `sort` 数据
     * - `fileter` 数据
     *
     * @param extraParams 重新指定 `extraParams` 值
     */
    /**
     * 重置且重新设置 `pi` 为 `1`，包含以下值：
     * - `check` 数据
     * - `radio` 数据
     * - `sort` 数据
     * - `fileter` 数据
     *
     * @template THIS
     * @this {THIS}
     * @param {?=} extraParams 重新指定 `extraParams` 值
     * @param {?=} options
     * @return {THIS}
     */
    STComponent.prototype.reset = /**
     * 重置且重新设置 `pi` 为 `1`，包含以下值：
     * - `check` 数据
     * - `radio` 数据
     * - `sort` 数据
     * - `fileter` 数据
     *
     * @template THIS
     * @this {THIS}
     * @param {?=} extraParams 重新指定 `extraParams` 值
     * @param {?=} options
     * @return {THIS}
     */
    function (extraParams, options) {
        (/** @type {?} */ (this)).clearStatus().load(1, extraParams, options);
        return (/** @type {?} */ (this));
    };
    /**
     * @private
     * @param {?=} enforce
     * @return {?}
     */
    STComponent.prototype._toTop = /**
     * @private
     * @param {?=} enforce
     * @return {?}
     */
    function (enforce) {
        if (!(enforce == null ? this.page.toTop : enforce))
            return;
        /** @type {?} */
        var el = (/** @type {?} */ (this.el.nativeElement));
        if (this.scroll) {
            (/** @type {?} */ (el.querySelector('.ant-table-body'))).scrollTo(0, 0);
            return;
        }
        el.scrollIntoView();
        // fix header height
        this.doc.documentElement.scrollTop -= (/** @type {?} */ (this.page.toTopOffset));
    };
    /**
     * @param {?} type
     * @param {?=} options
     * @return {?}
     */
    STComponent.prototype._change = /**
     * @param {?} type
     * @param {?=} options
     * @return {?}
     */
    function (type, options) {
        var _this = this;
        if (type === 'pi' || (type === 'ps' && this.pi <= Math.ceil(this.total / this.ps))) {
            this.loadPageData().then((/**
             * @return {?}
             */
            function () { return _this._toTop(options === null || options === void 0 ? void 0 : options.toTop); }));
        }
        this.changeEmit(type);
    };
    /**
     * @param {?} e
     * @param {?} item
     * @param {?} col
     * @return {?}
     */
    STComponent.prototype._click = /**
     * @param {?} e
     * @param {?} item
     * @param {?} col
     * @return {?}
     */
    function (e, item, col) {
        e.preventDefault();
        e.stopPropagation();
        /** @type {?} */
        var res = (/** @type {?} */ (col.click))(item, this);
        if (typeof res === 'string') {
            this.router.navigateByUrl(res, { state: this.routerState });
        }
        return false;
    };
    /**
     * @private
     * @param {?} item
     * @return {?}
     */
    STComponent.prototype.closeOtherExpand = /**
     * @private
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (this.expandAccordion === false)
            return;
        this._data.filter((/**
         * @param {?} i
         * @return {?}
         */
        function (i) { return i !== item; })).forEach((/**
         * @param {?} i
         * @return {?}
         */
        function (i) { return (i.expand = false); }));
    };
    /**
     * @param {?} e
     * @param {?} item
     * @param {?} index
     * @return {?}
     */
    STComponent.prototype._rowClick = /**
     * @param {?} e
     * @param {?} item
     * @param {?} index
     * @return {?}
     */
    function (e, item, index) {
        var _this = this;
        if (((/** @type {?} */ (e.target))).nodeName === 'INPUT')
            return;
        var _a = this, expand = _a.expand, expandRowByClick = _a.expandRowByClick, rowClickTime = _a.rowClickTime;
        if (!!expand && item.showExpand !== false && expandRowByClick) {
            item.expand = !item.expand;
            this.closeOtherExpand(item);
            this.changeEmit('expand', item);
            return;
        }
        ++this.rowClickCount;
        if (this.rowClickCount !== 1)
            return;
        setTimeout((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var data = { e: e, item: item, index: index };
            if (_this.rowClickCount === 1) {
                _this.changeEmit('click', data);
            }
            else {
                _this.changeEmit('dblClick', data);
            }
            _this.rowClickCount = 0;
        }), rowClickTime);
    };
    /**
     * @param {?} item
     * @param {?} expand
     * @return {?}
     */
    STComponent.prototype._expandChange = /**
     * @param {?} item
     * @param {?} expand
     * @return {?}
     */
    function (item, expand) {
        item.expand = expand;
        this.closeOtherExpand(item);
        this.changeEmit('expand', item);
    };
    /**
     * Remove a row in the table, like this:
     *
     * ```
     * this.st.removeRow(0)
     * this.st.removeRow(stDataItem)
     * ```
     */
    /**
     * Remove a row in the table, like this:
     *
     * ```
     * this.st.removeRow(0)
     * this.st.removeRow(stDataItem)
     * ```
     * @template THIS
     * @this {THIS}
     * @param {?} data
     * @return {THIS}
     */
    STComponent.prototype.removeRow = /**
     * Remove a row in the table, like this:
     *
     * ```
     * this.st.removeRow(0)
     * this.st.removeRow(stDataItem)
     * ```
     * @template THIS
     * @this {THIS}
     * @param {?} data
     * @return {THIS}
     */
    function (data) {
        var _this = this;
        if (typeof data === 'number') {
            (/** @type {?} */ (this))._data.splice(data, 1);
        }
        else {
            if (!Array.isArray(data)) {
                data = [data];
            }
            ((/** @type {?} */ (data)))
                .map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return (/** @type {?} */ (_this))._data.indexOf(item); }))
                .filter((/**
             * @param {?} pos
             * @return {?}
             */
            function (pos) { return pos !== -1; }))
                .forEach((/**
             * @param {?} pos
             * @return {?}
             */
            function (pos) { return (/** @type {?} */ (_this))._data.splice(pos, 1); }));
        }
        // recalculate no
        (/** @type {?} */ (this))._columns
            .filter((/**
         * @param {?} w
         * @return {?}
         */
        function (w) { return w.type === 'no'; }))
            .forEach((/**
         * @param {?} c
         * @return {?}
         */
        function (c) { return (/** @type {?} */ (_this))._data.forEach((/**
         * @param {?} i
         * @param {?} idx
         * @return {?}
         */
        function (i, idx) { return (i._values[c.__point] = { text: (/** @type {?} */ (_this)).dataSource.getNoIndex(i, c, idx), org: idx }); })); }));
        return (/** @type {?} */ (this)).cd();
    };
    /**
     * Sets the row value for the `index` in the table, like this:
     *
     * - `optinos.refreshSchema` Whether to refresh of st schemas
     * - `optinos.emitReload` Whether to trigger a reload http request when data is url
     *
     * ```
     * this.st.setRow(0, { price: 100 })
     * this.st.setRow(0, { price: 100, name: 'asdf' })
     * ```
     */
    /**
     * Sets the row value for the `index` in the table, like this:
     *
     * - `optinos.refreshSchema` Whether to refresh of st schemas
     * - `optinos.emitReload` Whether to trigger a reload http request when data is url
     *
     * ```
     * this.st.setRow(0, { price: 100 })
     * this.st.setRow(0, { price: 100, name: 'asdf' })
     * ```
     * @template THIS
     * @this {THIS}
     * @param {?} index
     * @param {?} item
     * @param {?=} options
     * @return {THIS}
     */
    STComponent.prototype.setRow = /**
     * Sets the row value for the `index` in the table, like this:
     *
     * - `optinos.refreshSchema` Whether to refresh of st schemas
     * - `optinos.emitReload` Whether to trigger a reload http request when data is url
     *
     * ```
     * this.st.setRow(0, { price: 100 })
     * this.st.setRow(0, { price: 100, name: 'asdf' })
     * ```
     * @template THIS
     * @this {THIS}
     * @param {?} index
     * @param {?} item
     * @param {?=} options
     * @return {THIS}
     */
    function (index, item, options) {
        options = __assign({ refreshSchema: false, emitReload: false }, options);
        (/** @type {?} */ (this))._data[index] = deepMergeKey((/** @type {?} */ (this))._data[index], false, item);
        (/** @type {?} */ (this))._data = (/** @type {?} */ (this)).dataSource.optimizeData({ columns: (/** @type {?} */ (this))._columns, result: (/** @type {?} */ (this))._data, rowClassName: (/** @type {?} */ (this)).rowClassName });
        if (options.refreshSchema) {
            (/** @type {?} */ (this)).resetColumns({ emitReload: options.emitReload });
            return (/** @type {?} */ (this));
        }
        (/** @type {?} */ (this)).cdr.detectChanges();
        return (/** @type {?} */ (this));
    };
    // #endregion
    // #region sort
    // #endregion
    // #region sort
    /**
     * @param {?} col
     * @param {?} idx
     * @param {?} value
     * @return {?}
     */
    STComponent.prototype.sort = 
    // #endregion
    // #region sort
    /**
     * @param {?} col
     * @param {?} idx
     * @param {?} value
     * @return {?}
     */
    function (col, idx, value) {
        if (this.multiSort) {
            (/** @type {?} */ (col._sort)).default = value;
            (/** @type {?} */ (col._sort)).tick = this.dataSource.nextSortTick;
        }
        else {
            this._columns.forEach((/**
             * @param {?} item
             * @param {?} index
             * @return {?}
             */
            function (item, index) { return ((/** @type {?} */ (item._sort)).default = index === idx ? value : null); }));
        }
        this.loadPageData();
        /** @type {?} */
        var res = {
            value: value,
            map: this.dataSource.getReqSortMap(this.singleSort, this.multiSort, this._columns),
            column: col,
        };
        this.changeEmit('sort', res);
    };
    /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    STComponent.prototype.clearSort = /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    function () {
        (/** @type {?} */ (this))._columns.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return ((/** @type {?} */ (item._sort)).default = null); }));
        return (/** @type {?} */ (this));
    };
    // #endregion
    // #region filter
    // #endregion
    // #region filter
    /**
     * @private
     * @param {?} col
     * @return {?}
     */
    STComponent.prototype.handleFilter = 
    // #endregion
    // #region filter
    /**
     * @private
     * @param {?} col
     * @return {?}
     */
    function (col) {
        this.columnSource.updateDefault((/** @type {?} */ (col.filter)));
        this.loadPageData();
        this.changeEmit('filter', col);
    };
    /**
     * @param {?} col
     * @return {?}
     */
    STComponent.prototype._filterConfirm = /**
     * @param {?} col
     * @return {?}
     */
    function (col) {
        this.handleFilter(col);
    };
    /**
     * @param {?} col
     * @param {?} item
     * @param {?} checked
     * @return {?}
     */
    STComponent.prototype._filterRadio = /**
     * @param {?} col
     * @param {?} item
     * @param {?} checked
     * @return {?}
     */
    function (col, item, checked) {
        (/** @type {?} */ ((/** @type {?} */ (col.filter)).menus)).forEach((/**
         * @param {?} i
         * @return {?}
         */
        function (i) { return (i.checked = false); }));
        item.checked = checked;
    };
    /**
     * @param {?} col
     * @return {?}
     */
    STComponent.prototype._filterClear = /**
     * @param {?} col
     * @return {?}
     */
    function (col) {
        this.columnSource.cleanFilter(col);
        this.handleFilter(col);
    };
    /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    STComponent.prototype.clearFilter = /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    function () {
        var _this = this;
        (/** @type {?} */ (this))._columns.filter((/**
         * @param {?} w
         * @return {?}
         */
        function (w) { return w.filter && w.filter.default === true; })).forEach((/**
         * @param {?} col
         * @return {?}
         */
        function (col) { return (/** @type {?} */ (_this)).columnSource.cleanFilter(col); }));
        return (/** @type {?} */ (this));
    };
    // #endregion
    // #region checkbox
    /** 清除所有 `checkbox` */
    // #endregion
    // #region checkbox
    /**
     * 清除所有 `checkbox`
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    STComponent.prototype.clearCheck = 
    // #endregion
    // #region checkbox
    /**
     * 清除所有 `checkbox`
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    function () {
        return (/** @type {?} */ (this))._checkAll(false);
    };
    /**
     * @private
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    STComponent.prototype._refCheck = /**
     * @private
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    function () {
        /** @type {?} */
        var validData = (/** @type {?} */ (this))._data.filter((/**
         * @param {?} w
         * @return {?}
         */
        function (w) { return !w.disabled; }));
        /** @type {?} */
        var checkedList = validData.filter((/**
         * @param {?} w
         * @return {?}
         */
        function (w) { return w.checked === true; }));
        (/** @type {?} */ (this))._allChecked = checkedList.length > 0 && checkedList.length === validData.length;
        /** @type {?} */
        var allUnChecked = validData.every((/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return !value.checked; }));
        (/** @type {?} */ (this))._indeterminate = !(/** @type {?} */ (this))._allChecked && !allUnChecked;
        (/** @type {?} */ (this))._allCheckedDisabled = (/** @type {?} */ (this))._data.length === (/** @type {?} */ (this))._data.filter((/**
         * @param {?} w
         * @return {?}
         */
        function (w) { return w.disabled; })).length;
        return (/** @type {?} */ (this)).cd();
    };
    /**
     * @template THIS
     * @this {THIS}
     * @param {?=} checked
     * @return {THIS}
     */
    STComponent.prototype._checkAll = /**
     * @template THIS
     * @this {THIS}
     * @param {?=} checked
     * @return {THIS}
     */
    function (checked) {
        checked = typeof checked === 'undefined' ? (/** @type {?} */ (this))._allChecked : checked;
        (/** @type {?} */ (this))._data.filter((/**
         * @param {?} w
         * @return {?}
         */
        function (w) { return !w.disabled; })).forEach((/**
         * @param {?} i
         * @return {?}
         */
        function (i) { return (i.checked = checked); }));
        return (/** @type {?} */ (this))._refCheck()._checkNotify();
    };
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} i
     * @param {?} value
     * @return {THIS}
     */
    STComponent.prototype._checkSelection = /**
     * @template THIS
     * @this {THIS}
     * @param {?} i
     * @param {?} value
     * @return {THIS}
     */
    function (i, value) {
        i.checked = value;
        return (/** @type {?} */ (this))._refCheck()._checkNotify();
    };
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} row
     * @return {THIS}
     */
    STComponent.prototype._rowSelection = /**
     * @template THIS
     * @this {THIS}
     * @param {?} row
     * @return {THIS}
     */
    function (row) {
        row.select((/** @type {?} */ (this))._data);
        return (/** @type {?} */ (this))._refCheck()._checkNotify();
    };
    /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    STComponent.prototype._checkNotify = /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    function () {
        /** @type {?} */
        var res = (/** @type {?} */ (this))._data.filter((/**
         * @param {?} w
         * @return {?}
         */
        function (w) { return !w.disabled && w.checked === true; }));
        (/** @type {?} */ (this)).changeEmit('checkbox', res);
        return (/** @type {?} */ (this));
    };
    // #endregion
    // #region radio
    /** 清除所有 `radio` */
    // #endregion
    // #region radio
    /**
     * 清除所有 `radio`
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    STComponent.prototype.clearRadio = 
    // #endregion
    // #region radio
    /**
     * 清除所有 `radio`
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    function () {
        (/** @type {?} */ (this))._data.filter((/**
         * @param {?} w
         * @return {?}
         */
        function (w) { return w.checked; })).forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return (item.checked = false); }));
        (/** @type {?} */ (this)).changeEmit('radio', null);
        return (/** @type {?} */ (this));
    };
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} checked
     * @param {?} item
     * @return {THIS}
     */
    STComponent.prototype._refRadio = /**
     * @template THIS
     * @this {THIS}
     * @param {?} checked
     * @param {?} item
     * @return {THIS}
     */
    function (checked, item) {
        // if (item.disabled === true) return;
        (/** @type {?} */ (this))._data.filter((/**
         * @param {?} w
         * @return {?}
         */
        function (w) { return !w.disabled; })).forEach((/**
         * @param {?} i
         * @return {?}
         */
        function (i) { return (i.checked = false); }));
        item.checked = checked;
        (/** @type {?} */ (this)).changeEmit('radio', item);
        return (/** @type {?} */ (this));
    };
    // #endregion
    // #region buttons
    // #endregion
    // #region buttons
    /**
     * @param {?} record
     * @param {?} btn
     * @param {?=} e
     * @return {?}
     */
    STComponent.prototype._btnClick = 
    // #endregion
    // #region buttons
    /**
     * @param {?} record
     * @param {?} btn
     * @param {?=} e
     * @return {?}
     */
    function (record, btn, e) {
        var _a, _b;
        var _this = this;
        // should be stop propagation when expandRowByClick is true
        if (e && this.expandRowByClick === true) {
            e.stopPropagation();
        }
        if (btn.type === 'modal' || btn.type === 'static') {
            var modal = btn.modal;
            /** @type {?} */
            var obj = (_a = {}, _a[(/** @type {?} */ ((/** @type {?} */ (modal)).paramsName))] = record, _a);
            ((/** @type {?} */ (this.modalHelper[btn.type === 'modal' ? 'create' : 'createStatic'])))((/** @type {?} */ (modal)).component, __assign(__assign({}, obj), ((/** @type {?} */ (modal)).params && (/** @type {?} */ ((/** @type {?} */ (modal)).params))(record))), deepMergeKey({}, true, this.cog.modal, modal))
                .pipe(filter((/**
             * @param {?} w
             * @return {?}
             */
            function (w) { return typeof w !== 'undefined'; })))
                .subscribe((/**
             * @param {?} res
             * @return {?}
             */
            function (res) { return _this.btnCallback(record, btn, res); }));
            return;
        }
        else if (btn.type === 'drawer') {
            var drawer = btn.drawer;
            /** @type {?} */
            var obj = (_b = {}, _b[(/** @type {?} */ ((/** @type {?} */ (drawer)).paramsName))] = record, _b);
            this.drawerHelper
                .create((/** @type {?} */ ((/** @type {?} */ (drawer)).title)), (/** @type {?} */ (drawer)).component, __assign(__assign({}, obj), ((/** @type {?} */ (drawer)).params && (/** @type {?} */ ((/** @type {?} */ (drawer)).params))(record))), deepMergeKey({}, true, this.cog.drawer, drawer))
                .pipe(filter((/**
             * @param {?} w
             * @return {?}
             */
            function (w) { return typeof w !== 'undefined'; })))
                .subscribe((/**
             * @param {?} res
             * @return {?}
             */
            function (res) { return _this.btnCallback(record, btn, res); }));
            return;
        }
        else if (btn.type === 'link') {
            /** @type {?} */
            var clickRes = this.btnCallback(record, btn);
            if (typeof clickRes === 'string') {
                this.router.navigateByUrl(clickRes, { state: this.routerState });
            }
            return;
        }
        this.btnCallback(record, btn);
    };
    /**
     * @private
     * @param {?} record
     * @param {?} btn
     * @param {?=} modal
     * @return {?}
     */
    STComponent.prototype.btnCallback = /**
     * @private
     * @param {?} record
     * @param {?} btn
     * @param {?=} modal
     * @return {?}
     */
    function (record, btn, modal) {
        if (!btn.click)
            return;
        if (typeof btn.click === 'string') {
            switch (btn.click) {
                case 'load':
                    this.load();
                    break;
                case 'reload':
                    this.reload();
                    break;
            }
        }
        else {
            return btn.click(record, modal, this);
        }
    };
    /**
     * @param {?} record
     * @param {?} btn
     * @return {?}
     */
    STComponent.prototype._btnText = /**
     * @param {?} record
     * @param {?} btn
     * @return {?}
     */
    function (record, btn) {
        return typeof btn.text === 'function' ? btn.text(record, btn) : btn.text || '';
    };
    /**
     * @param {?} btns
     * @param {?} item
     * @param {?} col
     * @return {?}
     */
    STComponent.prototype._validBtns = /**
     * @param {?} btns
     * @param {?} item
     * @param {?} col
     * @return {?}
     */
    function (btns, item, col) {
        return btns.filter((/**
         * @param {?} btn
         * @return {?}
         */
        function (btn) {
            /** @type {?} */
            var result = (/** @type {?} */ (btn.iif))(item, btn, col);
            /** @type {?} */
            var isRenderDisabled = btn.iifBehavior === 'disabled';
            btn._result = result;
            btn._disabled = !result && isRenderDisabled;
            return result || isRenderDisabled;
        }));
    };
    // #endregion
    // #region export
    /**
     * 导出当前页，确保已经注册 `XlsxModule`
     * @param newData 重新指定数据；若为 `true` 表示使用 `filteredData` 数据
     * @param opt 额外参数
     */
    // #endregion
    // #region export
    /**
     * 导出当前页，确保已经注册 `XlsxModule`
     * @param {?=} newData 重新指定数据；若为 `true` 表示使用 `filteredData` 数据
     * @param {?=} opt 额外参数
     * @return {?}
     */
    STComponent.prototype.export = 
    // #endregion
    // #region export
    /**
     * 导出当前页，确保已经注册 `XlsxModule`
     * @param {?=} newData 重新指定数据；若为 `true` 表示使用 `filteredData` 数据
     * @param {?=} opt 额外参数
     * @return {?}
     */
    function (newData, opt) {
        var _this = this;
        (newData === true ? from(this.filteredData) : of(newData || this._data)).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            return _this.exportSrv.export(__assign(__assign({}, opt), { _d: res, _c: _this._columns }));
        }));
    };
    Object.defineProperty(STComponent.prototype, "cdkVirtualScrollViewport", {
        // #endregion
        get: 
        // #endregion
        /**
         * @return {?}
         */
        function () {
            return this.orgTable.cdkVirtualScrollViewport;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?=} options
     * @return {?}
     */
    STComponent.prototype.resetColumns = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        options = __assign({ emitReload: true }, options);
        if (typeof options.columns !== 'undefined') {
            this.columns = options.columns;
        }
        if (typeof options.pi !== 'undefined') {
            this.pi = options.pi;
        }
        if (typeof options.ps !== 'undefined') {
            this.ps = options.ps;
        }
        this.refreshColumns();
        if (options.emitReload === true) {
            return this.loadPageData();
        }
        else {
            this.cd();
            return Promise.resolve(this);
        }
    };
    /**
     * @private
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    STComponent.prototype.refreshColumns = /**
     * @private
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    function () {
        (/** @type {?} */ (this))._columns = (/** @type {?} */ (this)).columnSource.process((/** @type {?} */ (this)).columns);
        return (/** @type {?} */ (this));
    };
    /**
     * @return {?}
     */
    STComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.columnSource.restoreAllRender(this._columns);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    STComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.columns) {
            this.refreshColumns();
        }
        /** @type {?} */
        var changeData = changes.data;
        if (changeData && changeData.currentValue && !(this.req.lazyLoad && changeData.firstChange)) {
            this.loadPageData();
        }
        if (changes.loading) {
            this._loading = changes.loading.currentValue;
        }
    };
    /**
     * @return {?}
     */
    STComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var unsubscribe$ = this.unsubscribe$;
        unsubscribe$.next();
        unsubscribe$.complete();
    };
    STComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st',
                    exportAs: 'st',
                    template: "<ng-template #btnTpl let-i let-btn=\"btn\">\n  <ng-container *ngIf=\"!btn.tooltip\">\n    <ng-template [ngTemplateOutlet]=\"btnItemTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n  </ng-container>\n  <span *ngIf=\"btn.tooltip\" nz-tooltip [nzTooltipTitle]=\"btn.tooltip\">\n    <ng-template [ngTemplateOutlet]=\"btnItemTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n  </span>\n</ng-template>\n<ng-template #btnItemTpl let-i let-btn=\"btn\">\n  <a *ngIf=\"btn.pop\" nz-popconfirm [nzPopconfirmTitle]=\"btn.pop.title\" [nzIcon]=\"btn.pop.icon\"\n    [nzCondition]=\"btn.pop.condition(i)\" [nzCancelText]=\"btn.pop.cancelText\" [nzOkText]=\"btn.pop.okText\"\n    [nzOkType]=\"btn.pop.okType\" (nzOnConfirm)=\"_btnClick(i, btn, $event)\" class=\"st__btn-text\">\n    <ng-template [ngTemplateOutlet]=\"btnTextTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n  </a>\n  <a *ngIf=\"!btn.pop\" (click)=\"_btnClick(i, btn, $event)\" class=\"st__btn-text\">\n    <ng-template [ngTemplateOutlet]=\"btnTextTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n  </a>\n</ng-template>\n<ng-template #btnTextTpl let-i let-btn=\"btn\">\n  <ng-container *ngIf=\"btn.icon\">\n    <i *ngIf=\"!btn.icon.iconfont\" nz-icon [nzType]=\"btn.icon.type\" [nzTheme]=\"btn.icon.theme\" [nzSpin]=\"btn.icon.spin\"\n      [nzTwotoneColor]=\"btn.icon.twoToneColor\"></i>\n    <i *ngIf=\"btn.icon.iconfont\" nz-icon [nzIconfont]=\"btn.icon.iconfont\"></i>\n  </ng-container>\n  <span [innerHTML]=\"_btnText(i, btn)\" [ngClass]=\"{'pl-xs': btn.icon}\"></span>\n</ng-template>\n<ng-template #titleTpl let-i>\n  <span [innerHTML]=\"i._text\"></span>\n  <small *ngIf=\"i.optional\" class=\"st__head-optional\" [innerHTML]=\"i.optional\"></small>\n  <i *ngIf=\"i.optionalHelp\" class=\"st__head-tip\" nz-tooltip [nzTooltipTitle]=\"i.optionalHelp\" nz-icon nzType=\"question-circle\"></i>\n</ng-template>\n<ng-template #chkAllTpl let-custom>\n  <label nz-checkbox class=\"st__checkall\" [nzDisabled]=\"_allCheckedDisabled\" [(ngModel)]=\"_allChecked\"\n    [nzIndeterminate]=\"_indeterminate\" (ngModelChange)=\"_checkAll()\"\n    [class.ant-table-selection-select-all-custom]=\"custom\"></label>\n</ng-template>\n<nz-table #table [nzData]=\"_data\" [(nzPageIndex)]=\"pi\" (nzPageIndexChange)=\"_change('pi')\" [(nzPageSize)]=\"ps\"\n  (nzPageSizeChange)=\"_change('ps')\" [nzTotal]=\"total\" [nzShowPagination]=\"_isPagination\" [nzFrontPagination]=\"false\"\n  [nzBordered]=\"bordered\" [nzSize]=\"size\" [nzLoading]=\"_loading\" [nzLoadingDelay]=\"loadingDelay\"\n  [nzLoadingIndicator]=\"loadingIndicator\" [nzTitle]=\"header\" [nzFooter]=\"footer\" [nzScroll]=\"scroll\"\n  [nzVirtualItemSize]=\"virtualItemSize\" [nzVirtualMaxBufferPx]=\"virtualMaxBufferPx\" [nzVirtualMinBufferPx]=\"virtualMinBufferPx\" [nzVirtualForTrackBy]=\"virtualForTrackBy\"\n  [nzNoResult]=\"noResult\" [nzPageSizeOptions]=\"page.pageSizes\" [nzShowQuickJumper]=\"page.showQuickJumper\" [nzShowSizeChanger]=\"page.showSize\" [nzPaginationPosition]=\"page.position\" [nzShowTotal]=\"totalTpl\">\n  <thead class=\"st__head\">\n    <tr>\n      <th *ngIf=\"expand\" nzWidth=\"50px\"></th>\n      <th *ngFor=\"let c of _columns; let index=index\" [nzWidth]=\"c.width\" [nzLeft]=\"c._left\" [nzRight]=\"c._right\"\n        [ngClass]=\"c.className\" [attr.colspan]=\"c.colSpan\" [attr.data-col]=\"c.indexKey\" [nzShowSort]=\"c._sort.enabled\"\n        [nzSortOrder]=\"c._sort.default\" (nzSortOrderChange)=\"sort(c, index, $event)\" [nzCustomFilter]=\"c.filter\">\n        <ng-template #renderTitle [ngTemplateOutlet]=\"c.__renderTitle\" [ngTemplateOutletContext]=\"{$implicit: c, index: index }\"></ng-template>\n        <ng-container *ngIf=\"!c.__renderTitle; else renderTitle\">\n          <ng-container [ngSwitch]=\"c.type\">\n            <ng-container *ngSwitchCase=\"'checkbox'\">\n              <ng-container *ngIf=\"c.selections.length === 0\">\n                <ng-template [ngTemplateOutlet]=\"chkAllTpl\" [ngTemplateOutletContext]=\"{$implicit: false }\">\n                </ng-template>\n              </ng-container>\n              <div *ngIf=\"c.selections.length > 0\" class=\"ant-table-selection\">\n                <ng-template [ngTemplateOutlet]=\"chkAllTpl\" [ngTemplateOutletContext]=\"{$implicit: true }\">\n                </ng-template>\n                <div *ngIf=\"c.selections.length\" nz-dropdown nzPlacement=\"bottomLeft\" [nzDropdownMenu]=\"selectionMenu\" class=\"ant-table-selection-down st__checkall-selection\">\n                  <i nz-icon nzType=\"down\"></i>\n                </div>\n                <nz-dropdown-menu #selectionMenu=\"nzDropdownMenu\">\n                  <ul nz-menu class=\"ant-table-selection-menu\">\n                    <li nz-menu-item *ngFor=\"let rw of c.selections\" (click)=\"_rowSelection(rw)\" [innerHTML]=\"rw.text\">\n                    </li>\n                  </ul>\n                </nz-dropdown-menu>\n              </div>\n            </ng-container>\n            <ng-container *ngSwitchDefault>\n              <ng-template [ngTemplateOutlet]=\"titleTpl\" [ngTemplateOutletContext]=\"{$implicit: c.title }\">\n              </ng-template>\n            </ng-container>\n          </ng-container>\n        </ng-container>\n        <div nz-th-extra *ngIf=\"c.filter\" class=\"ant-table-filter-trigger-container st__filter\" [class.ant-table-filter-trigger-container-open]=\"c.filter.visible\">\n          <span class=\"ant-table-filter-trigger\" [class.ant-table-filter-open]=\"c.filter.default\" [class.active]=\"c.filter.visible\"\n            nz-dropdown [nzDropdownMenu]=\"filterMenu\" nzTrigger=\"click\" [nzClickHide]=\"false\" [(nzVisible)]=\"c.filter.visible\" nzOverlayClassName=\"st__filter-wrap\">\n            <i nz-icon [nzType]=\"c.filter.icon.type\" [nzTheme]=\"c.filter.icon.theme\"></i>\n          </span>\n          <nz-dropdown-menu #filterMenu=\"nzDropdownMenu\">\n            <div class=\"ant-table-filter-dropdown\">\n              <ng-container [ngSwitch]=\"c.filter.type\">\n                <div *ngSwitchCase=\"'keyword'\" class=\"st__filter-keyword\">\n                  <input type=\"text\" nz-input [attr.placeholder]=\"c.filter.menus[0].text\"\n                    [(ngModel)]=\"c.filter.menus[0].value\" />\n                </div>\n                <ul *ngSwitchDefault nz-menu>\n                  <ng-container *ngIf=\"c.filter.multiple\">\n                    <li nz-menu-item *ngFor=\"let filter of c.filter.menus\">\n                      <label nz-checkbox [(ngModel)]=\"filter.checked\">{{filter.text}}</label>\n                    </li>\n                  </ng-container>\n                  <ng-container *ngIf=\"!c.filter.multiple\">\n                    <li nz-menu-item *ngFor=\"let filter of c.filter.menus\">\n                      <label nz-radio [ngModel]=\"filter.checked\"\n                        (ngModelChange)=\"_filterRadio(c, filter, $event)\">{{filter.text}}</label>\n                    </li>\n                  </ng-container>\n                </ul>\n              </ng-container>\n              <div class=\"ant-table-filter-dropdown-btns\">\n                <a class=\"ant-table-filter-dropdown-link confirm\" (click)=\"c.filter.visible = false\">\n                  <span (click)=\"_filterConfirm(c)\">{{c.filter.confirmText || locale.filterConfirm}}</span>\n                </a>\n                <a class=\"ant-table-filter-dropdown-link clear\" (click)=\"c.filter.visible = false\">\n                  <span (click)=\"_filterClear(c)\">{{c.filter.clearText || locale.filterReset}}</span>\n                </a>\n              </div>\n            </div>\n          </nz-dropdown-menu>\n        </div>\n      </th>\n    </tr>\n  </thead>\n  <tbody class=\"st__body\">\n    <ng-container *ngIf=\"!_loading\">\n      <ng-template [ngTemplateOutlet]=\"bodyHeader\" [ngTemplateOutletContext]=\"{$implicit: _statistical }\"></ng-template>\n    </ng-container>\n    <ng-template #bodyTpl let-i let-index=\"index\">\n      <tr [attr.data-index]=\"index\" (click)=\"_rowClick($event, i, index)\" [ngClass]=\"i._rowClassName\">\n        <td *ngIf=\"expand\" [nzShowExpand]=\"expand && i.showExpand !== false\" [nzExpand]=\"i.expand\" (nzExpandChange)=\"_expandChange(i, $event)\" nzWidth=\"50px\"></td>\n        <td *ngFor=\"let c of _columns; let cIdx=index\" [nzLeft]=\"c._left\" [nzRight]=\"c._right\" [ngClass]=\"columnClass(c)\" [attr.colspan]=\"c.colSpan\">\n          <span *ngIf=\"responsive\" class=\"ant-table-rep__title\">\n            <ng-template [ngTemplateOutlet]=\"titleTpl\" [ngTemplateOutletContext]=\"{$implicit: c.title }\"></ng-template>\n          </span>\n          <span>\n            <ng-template #render [ngTemplateOutlet]=\"c.__render\" [ngTemplateOutletContext]=\"{$implicit: i, index: index, column: c }\"></ng-template>\n            <ng-container *ngIf=\"!c.__render; else render\">\n              <ng-container [ngSwitch]=\"c.type\">\n                <label *ngSwitchCase=\"'checkbox'\" nz-checkbox [nzDisabled]=\"i.disabled\" [ngModel]=\"i.checked\" (ngModelChange)=\"_checkSelection(i, $event)\"></label>\n                <label *ngSwitchCase=\"'radio'\" nz-radio [nzDisabled]=\"i.disabled\" [ngModel]=\"i.checked\" (ngModelChange)=\"_refRadio($event, i)\"></label>\n                <a *ngSwitchCase=\"'link'\" (click)=\"_click($event, i, c)\" [innerHTML]=\"i._values[cIdx]._text\"></a>\n                <ng-container *ngIf=\"i._values[cIdx].text\">\n                  <nz-tag *ngSwitchCase=\"'tag'\" [nzColor]=\"i._values[cIdx].color\">\n                    <span [innerHTML]=\"i._values[cIdx]._text\"></span>\n                  </nz-tag>\n                  <nz-badge *ngSwitchCase=\"'badge'\" [nzStatus]=\"i._values[cIdx].color\" [nzText]=\"i._values[cIdx].text\"></nz-badge>\n                </ng-container>\n                <ng-template *ngSwitchCase=\"'widget'\" st-widget-host [record]=\"i\" [column]=\"c\"></ng-template>\n                <span *ngSwitchDefault [innerHTML]=\"i._values[cIdx]._text\" [attr.title]=\"isTruncate(c) ? i._values[cIdx].text : null\"></span>\n              </ng-container>\n              <ng-container *ngFor=\"let btn of _validBtns(c.buttons, i, c); let last=last\">\n                <a *ngIf=\"btn.children.length > 0\" nz-dropdown [nzDropdownMenu]=\"btnMenu\" nzOverlayClassName=\"st__btn-sub\">\n                  <span [innerHTML]=\"_btnText(i, btn)\"></span>\n                  <i nz-icon nzType=\"down\"></i>\n                </a>\n                <nz-dropdown-menu #btnMenu=\"nzDropdownMenu\">\n                  <ul nz-menu>\n                    <ng-container *ngFor=\"let subBtn of _validBtns(btn.children, i, c)\">\n                      <li *ngIf=\"subBtn.type !== 'divider'\" nz-menu-item [class.st__btn-disabled]=\"subBtn._disabled\">\n                        <ng-template [ngTemplateOutlet]=\"btnTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: subBtn }\">\n                        </ng-template>\n                      </li>\n                      <li *ngIf=\"subBtn.type === 'divider'\" nz-menu-divider></li>\n                    </ng-container>\n                  </ul>\n                </nz-dropdown-menu>\n                <span *ngIf=\"btn.children.length == 0\" [class.st__btn-disabled]=\"btn._disabled\">\n                  <ng-template [ngTemplateOutlet]=\"btnTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\">\n                  </ng-template>\n                </span>\n                <nz-divider *ngIf=\"!last\" nzType=\"vertical\"></nz-divider>\n              </ng-container>\n              <ng-template [ngIf]=\"!c.__renderExpanded\" [ngTemplateOutlet]=\"c.__renderExpanded\" [ngTemplateOutletContext]=\"{$implicit: i, index: index, column: c }\"></ng-template>\n            </ng-container>\n          </span>\n        </td>\n      </tr>\n      <tr [nzExpand]=\"i.expand\">\n        <td></td>\n        <td [attr.colspan]=\"_columns.length\">\n          <ng-template [ngTemplateOutlet]=\"expand\" [ngTemplateOutletContext]=\"{$implicit: i, index: index }\"></ng-template>\n        </td>\n      </tr>\n    </ng-template>\n    <ng-container *ngIf=\"!virtualScroll\">\n      <ng-container *ngFor=\"let i of _data; let index=index\">\n        <ng-template [ngTemplateOutlet]=\"bodyTpl\" [ngTemplateOutletContext]=\"{$implicit: i, index: index }\">\n        </ng-template>\n      </ng-container>\n    </ng-container>\n    <ng-container *ngIf=\"virtualScroll\">\n      <ng-template nz-virtual-scroll let-i let-index=\"index\">\n        <ng-template [ngTemplateOutlet]=\"bodyTpl\" [ngTemplateOutletContext]=\"{$implicit: i, index: index }\">\n        </ng-template>\n      </ng-template>\n    </ng-container>\n    <ng-container *ngIf=\"!_loading\">\n      <ng-template [ngTemplateOutlet]=\"body\" [ngTemplateOutletContext]=\"{$implicit: _statistical }\"></ng-template>\n    </ng-container>\n  </tbody>\n  <ng-template #totalTpl let-range=\"range\" let-total>{{ renderTotal(total, range) }}</ng-template>\n</nz-table>\n",
                    providers: [NzTableStyleService, STDataSource, STRowSource, STColumnSource, STExport, CNCurrencyPipe, DatePipe, YNPipe, DecimalPipe],
                    host: {
                        '[class.st]': "true",
                        '[class.st__p-left]': "page.placement === 'left'",
                        '[class.st__p-center]': "page.placement === 'center'",
                        '[class.st__width-strict]': "widthMode.type === 'strict'",
                        '[class.ant-table-rep]': "responsive",
                        '[class.ant-table-rep__hide-header-footer]': "responsiveHideHeaderFooter",
                    },
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    STComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [ALAIN_I18N_TOKEN,] }] },
        { type: ChangeDetectorRef },
        { type: Router },
        { type: ElementRef },
        { type: STExport },
        { type: ModalHelper },
        { type: DrawerHelper },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: STColumnSource },
        { type: STDataSource },
        { type: DelonLocaleService },
        { type: AlainConfigService }
    ]; };
    STComponent.propDecorators = {
        orgTable: [{ type: ViewChild, args: ['table', { static: false },] }],
        req: [{ type: Input }],
        res: [{ type: Input }],
        page: [{ type: Input }],
        data: [{ type: Input }],
        columns: [{ type: Input }],
        ps: [{ type: Input }],
        pi: [{ type: Input }],
        total: [{ type: Input }],
        loading: [{ type: Input }],
        loadingDelay: [{ type: Input }],
        loadingIndicator: [{ type: Input }],
        bordered: [{ type: Input }],
        size: [{ type: Input }],
        scroll: [{ type: Input }],
        singleSort: [{ type: Input }],
        multiSort: [{ type: Input }],
        rowClassName: [{ type: Input }],
        widthMode: [{ type: Input }],
        header: [{ type: Input }],
        footer: [{ type: Input }],
        bodyHeader: [{ type: Input }],
        body: [{ type: Input }],
        expandRowByClick: [{ type: Input }],
        expandAccordion: [{ type: Input }],
        expand: [{ type: Input }],
        noResult: [{ type: Input }],
        widthConfig: [{ type: Input }],
        rowClickTime: [{ type: Input }],
        responsive: [{ type: Input }],
        responsiveHideHeaderFooter: [{ type: Input }],
        error: [{ type: Output }],
        change: [{ type: Output }],
        virtualScroll: [{ type: Input }],
        virtualItemSize: [{ type: Input }],
        virtualMaxBufferPx: [{ type: Input }],
        virtualMinBufferPx: [{ type: Input }],
        virtualForTrackBy: [{ type: Input }]
    };
    __decorate([
        InputNumber(),
        __metadata("design:type", Object)
    ], STComponent.prototype, "ps", void 0);
    __decorate([
        InputNumber(),
        __metadata("design:type", Object)
    ], STComponent.prototype, "pi", void 0);
    __decorate([
        InputNumber(),
        __metadata("design:type", Object)
    ], STComponent.prototype, "total", void 0);
    __decorate([
        InputNumber(),
        __metadata("design:type", Object)
    ], STComponent.prototype, "loadingDelay", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], STComponent.prototype, "bordered", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], STComponent.prototype, "expandRowByClick", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], STComponent.prototype, "expandAccordion", void 0);
    __decorate([
        InputNumber(),
        __metadata("design:type", Object)
    ], STComponent.prototype, "rowClickTime", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], STComponent.prototype, "responsive", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], STComponent.prototype, "responsiveHideHeaderFooter", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], STComponent.prototype, "virtualScroll", void 0);
    __decorate([
        InputNumber(),
        __metadata("design:type", Object)
    ], STComponent.prototype, "virtualItemSize", void 0);
    __decorate([
        InputNumber(),
        __metadata("design:type", Object)
    ], STComponent.prototype, "virtualMaxBufferPx", void 0);
    __decorate([
        InputNumber(),
        __metadata("design:type", Object)
    ], STComponent.prototype, "virtualMinBufferPx", void 0);
    return STComponent;
}());
export { STComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    STComponent.prototype.unsubscribe$;
    /**
     * @type {?}
     * @private
     */
    STComponent.prototype.data$;
    /**
     * @type {?}
     * @private
     */
    STComponent.prototype.totalTpl;
    /**
     * @type {?}
     * @private
     */
    STComponent.prototype.cog;
    /**
     * @type {?}
     * @private
     */
    STComponent.prototype.rowClickCount;
    /**
     * @type {?}
     * @private
     */
    STComponent.prototype._req;
    /**
     * @type {?}
     * @private
     */
    STComponent.prototype._res;
    /**
     * @type {?}
     * @private
     */
    STComponent.prototype._page;
    /**
     * @type {?}
     * @private
     */
    STComponent.prototype._widthMode;
    /** @type {?} */
    STComponent.prototype.locale;
    /** @type {?} */
    STComponent.prototype._loading;
    /** @type {?} */
    STComponent.prototype._data;
    /** @type {?} */
    STComponent.prototype._statistical;
    /** @type {?} */
    STComponent.prototype._isPagination;
    /** @type {?} */
    STComponent.prototype._allChecked;
    /** @type {?} */
    STComponent.prototype._allCheckedDisabled;
    /** @type {?} */
    STComponent.prototype._indeterminate;
    /** @type {?} */
    STComponent.prototype._columns;
    /** @type {?} */
    STComponent.prototype.orgTable;
    /** @type {?} */
    STComponent.prototype.data;
    /** @type {?} */
    STComponent.prototype.columns;
    /** @type {?} */
    STComponent.prototype.ps;
    /** @type {?} */
    STComponent.prototype.pi;
    /** @type {?} */
    STComponent.prototype.total;
    /** @type {?} */
    STComponent.prototype.loading;
    /** @type {?} */
    STComponent.prototype.loadingDelay;
    /** @type {?} */
    STComponent.prototype.loadingIndicator;
    /** @type {?} */
    STComponent.prototype.bordered;
    /** @type {?} */
    STComponent.prototype.size;
    /** @type {?} */
    STComponent.prototype.scroll;
    /** @type {?} */
    STComponent.prototype.singleSort;
    /**
     * @type {?}
     * @private
     */
    STComponent.prototype._multiSort;
    /** @type {?} */
    STComponent.prototype.rowClassName;
    /** @type {?} */
    STComponent.prototype.header;
    /** @type {?} */
    STComponent.prototype.footer;
    /** @type {?} */
    STComponent.prototype.bodyHeader;
    /** @type {?} */
    STComponent.prototype.body;
    /** @type {?} */
    STComponent.prototype.expandRowByClick;
    /** @type {?} */
    STComponent.prototype.expandAccordion;
    /** @type {?} */
    STComponent.prototype.expand;
    /** @type {?} */
    STComponent.prototype.noResult;
    /** @type {?} */
    STComponent.prototype.widthConfig;
    /** @type {?} */
    STComponent.prototype.rowClickTime;
    /** @type {?} */
    STComponent.prototype.responsive;
    /** @type {?} */
    STComponent.prototype.responsiveHideHeaderFooter;
    /** @type {?} */
    STComponent.prototype.error;
    /** @type {?} */
    STComponent.prototype.change;
    /** @type {?} */
    STComponent.prototype.virtualScroll;
    /** @type {?} */
    STComponent.prototype.virtualItemSize;
    /** @type {?} */
    STComponent.prototype.virtualMaxBufferPx;
    /** @type {?} */
    STComponent.prototype.virtualMinBufferPx;
    /** @type {?} */
    STComponent.prototype.virtualForTrackBy;
    /**
     * @type {?}
     * @private
     */
    STComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    STComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    STComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    STComponent.prototype.exportSrv;
    /**
     * @type {?}
     * @private
     */
    STComponent.prototype.modalHelper;
    /**
     * @type {?}
     * @private
     */
    STComponent.prototype.drawerHelper;
    /**
     * @type {?}
     * @private
     */
    STComponent.prototype.doc;
    /**
     * @type {?}
     * @private
     */
    STComponent.prototype.columnSource;
    /**
     * @type {?}
     * @private
     */
    STComponent.prototype.dataSource;
    /**
     * @type {?}
     * @private
     */
    STComponent.prototype.delonI18n;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9zdC8iLCJzb3VyY2VzIjpbInN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3hELE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBR0wsUUFBUSxFQUNSLE1BQU0sRUFHTixXQUFXLEVBRVgsU0FBUyxFQUNULGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUVMLGdCQUFnQixFQUNoQixjQUFjLEVBQ2QsUUFBUSxFQUNSLGtCQUFrQixFQUNsQixZQUFZLEVBRVosV0FBVyxFQUNYLE1BQU0sR0FDUCxNQUFNLGNBQWMsQ0FBQztBQUN0QixPQUFPLEVBQUUsa0JBQWtCLEVBQWlCLFlBQVksRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUVwSCxPQUFPLEVBQUUsZ0JBQWdCLEVBQWUsbUJBQW1CLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN6RixPQUFPLEVBQUUsSUFBSSxFQUFjLEVBQUUsRUFBRSxPQUFPLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQ25FLE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxZQUFZLEVBQTJDLE1BQU0sa0JBQWtCLENBQUM7QUFDekYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN2QyxPQUFPLEVBQUUsV0FBVyxF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OlsiaW1wb3J0IHsgRGVjaW1hbFBpcGUsIERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2UsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBUcmFja0J5RnVuY3Rpb24sXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIEFsYWluSTE4TlNlcnZpY2UsXG4gIEFMQUlOX0kxOE5fVE9LRU4sXG4gIENOQ3VycmVuY3lQaXBlLFxuICBEYXRlUGlwZSxcbiAgRGVsb25Mb2NhbGVTZXJ2aWNlLFxuICBEcmF3ZXJIZWxwZXIsXG4gIExvY2FsZURhdGEsXG4gIE1vZGFsSGVscGVyLFxuICBZTlBpcGUsXG59IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UsIEFsYWluU1RDb25maWcsIGRlZXBNZXJnZUtleSwgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciwgdG9Cb29sZWFuIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IE56VGFibGVDb21wb25lbnQsIE56VGFibGVEYXRhLCBOelRhYmxlU3R5bGVTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC90YWJsZSc7XG5pbXBvcnQgeyBmcm9tLCBPYnNlcnZhYmxlLCBvZiwgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFNUQ29sdW1uU291cmNlIH0gZnJvbSAnLi9zdC1jb2x1bW4tc291cmNlJztcbmltcG9ydCB7IFNURGF0YVNvdXJjZSwgU1REYXRhU291cmNlT3B0aW9ucywgU1REYXRhU291cmNlUmVzdWx0IH0gZnJvbSAnLi9zdC1kYXRhLXNvdXJjZSc7XG5pbXBvcnQgeyBTVEV4cG9ydCB9IGZyb20gJy4vc3QtZXhwb3J0JztcbmltcG9ydCB7IFNUUm93U291cmNlIH0gZnJvbSAnLi9zdC1yb3cuZGlyZWN0aXZlJztcbmltcG9ydCB7IFNUX0RFRlVMQVRfQ09ORklHIH0gZnJvbSAnLi9zdC5jb25maWcnO1xuaW1wb3J0IHtcbiAgU1RDaGFuZ2UsXG4gIFNUQ2hhbmdlVHlwZSxcbiAgU1RDb2x1bW4sXG4gIFNUQ29sdW1uQnV0dG9uLFxuICBTVENvbHVtbkZpbHRlck1lbnUsXG4gIFNUQ29sdW1uU2VsZWN0aW9uLFxuICBTVERhdGEsXG4gIFNURXJyb3IsXG4gIFNURXhwb3J0T3B0aW9ucyxcbiAgU1RMb2FkT3B0aW9ucyxcbiAgU1RNdWx0aVNvcnQsXG4gIFNUUGFnZSxcbiAgU1RSZXEsXG4gIFNUUmVzLFxuICBTVFJlc2V0Q29sdW1uc09wdGlvbixcbiAgU1RSb3dDbGFzc05hbWUsXG4gIFNUU2luZ2xlU29ydCxcbiAgU1RTdGF0aXN0aWNhbFJlc3VsdHMsXG4gIFNUV2lkdGhNb2RlLFxufSBmcm9tICcuL3N0LmludGVyZmFjZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdCcsXG4gIGV4cG9ydEFzOiAnc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3QuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFtOelRhYmxlU3R5bGVTZXJ2aWNlLCBTVERhdGFTb3VyY2UsIFNUUm93U291cmNlLCBTVENvbHVtblNvdXJjZSwgU1RFeHBvcnQsIENOQ3VycmVuY3lQaXBlLCBEYXRlUGlwZSwgWU5QaXBlLCBEZWNpbWFsUGlwZV0sXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLnN0XSc6IGB0cnVlYCxcbiAgICAnW2NsYXNzLnN0X19wLWxlZnRdJzogYHBhZ2UucGxhY2VtZW50ID09PSAnbGVmdCdgLFxuICAgICdbY2xhc3Muc3RfX3AtY2VudGVyXSc6IGBwYWdlLnBsYWNlbWVudCA9PT0gJ2NlbnRlcidgLFxuICAgICdbY2xhc3Muc3RfX3dpZHRoLXN0cmljdF0nOiBgd2lkdGhNb2RlLnR5cGUgPT09ICdzdHJpY3QnYCxcbiAgICAnW2NsYXNzLmFudC10YWJsZS1yZXBdJzogYHJlc3BvbnNpdmVgLFxuICAgICdbY2xhc3MuYW50LXRhYmxlLXJlcF9faGlkZS1oZWFkZXItZm9vdGVyXSc6IGByZXNwb25zaXZlSGlkZUhlYWRlckZvb3RlcmAsXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgU1RDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgdW5zdWJzY3JpYmUkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSBkYXRhJDogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIHRvdGFsVHBsID0gYGA7XG4gIHByaXZhdGUgY29nOiBBbGFpblNUQ29uZmlnO1xuICBwcml2YXRlIHJvd0NsaWNrQ291bnQgPSAwO1xuICBwcml2YXRlIF9yZXE6IFNUUmVxO1xuICBwcml2YXRlIF9yZXM6IFNUUmVzO1xuICBwcml2YXRlIF9wYWdlOiBTVFBhZ2U7XG4gIHByaXZhdGUgX3dpZHRoTW9kZTogU1RXaWR0aE1vZGU7XG4gIGxvY2FsZTogTG9jYWxlRGF0YSA9IHt9O1xuICBfbG9hZGluZyA9IGZhbHNlO1xuICBfZGF0YTogU1REYXRhW10gPSBbXTtcbiAgX3N0YXRpc3RpY2FsOiBTVFN0YXRpc3RpY2FsUmVzdWx0cyA9IHt9O1xuICBfaXNQYWdpbmF0aW9uID0gdHJ1ZTtcbiAgX2FsbENoZWNrZWQgPSBmYWxzZTtcbiAgX2FsbENoZWNrZWREaXNhYmxlZCA9IGZhbHNlO1xuICBfaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICBfY29sdW1uczogU1RDb2x1bW5bXSA9IFtdO1xuICBAVmlld0NoaWxkKCd0YWJsZScsIHsgc3RhdGljOiBmYWxzZSB9KSByZWFkb25seSBvcmdUYWJsZTogTnpUYWJsZUNvbXBvbmVudDtcblxuICBASW5wdXQoKVxuICBnZXQgcmVxKCkge1xuICAgIHJldHVybiB0aGlzLl9yZXE7XG4gIH1cbiAgc2V0IHJlcSh2YWx1ZTogU1RSZXEpIHtcbiAgICB0aGlzLl9yZXEgPSBkZWVwTWVyZ2VLZXkoe30sIHRydWUsIHRoaXMuY29nLnJlcSwgdmFsdWUpO1xuICB9XG4gIC8qKiDov5Tlm57kvZPphY3nva4gKi9cbiAgQElucHV0KClcbiAgZ2V0IHJlcygpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzO1xuICB9XG4gIHNldCByZXModmFsdWU6IFNUUmVzKSB7XG4gICAgY29uc3QgaXRlbSA9ICh0aGlzLl9yZXMgPSBkZWVwTWVyZ2VLZXkoe30sIHRydWUsIHRoaXMuY29nLnJlcywgdmFsdWUpKTtcbiAgICBjb25zdCByZU5hbWUgPSBpdGVtLnJlTmFtZSE7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHJlTmFtZS5saXN0KSkgcmVOYW1lLmxpc3QgPSByZU5hbWUubGlzdCEuc3BsaXQoJy4nKTtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkocmVOYW1lLnRvdGFsKSkgcmVOYW1lLnRvdGFsID0gcmVOYW1lLnRvdGFsIS5zcGxpdCgnLicpO1xuICAgIHRoaXMuX3JlcyA9IGl0ZW07XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IHBhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhZ2U7XG4gIH1cbiAgc2V0IHBhZ2UodmFsdWU6IFNUUGFnZSkge1xuICAgIHRoaXMuX3BhZ2UgPSB7IC4uLnRoaXMuY29nLnBhZ2UsIC4uLnZhbHVlIH07XG4gICAgdGhpcy51cGRhdGVUb3RhbFRwbCgpO1xuICB9XG4gIEBJbnB1dCgpIGRhdGE6IHN0cmluZyB8IFNURGF0YVtdIHwgT2JzZXJ2YWJsZTxTVERhdGFbXT47XG4gIEBJbnB1dCgpIGNvbHVtbnM6IFNUQ29sdW1uW10gPSBbXTtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgcHMgPSAxMDtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgcGkgPSAxO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSB0b3RhbCA9IDA7XG4gIEBJbnB1dCgpIGxvYWRpbmc6IGJvb2xlYW4gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgbG9hZGluZ0RlbGF5ID0gMDtcbiAgQElucHV0KCkgbG9hZGluZ0luZGljYXRvcjogVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBib3JkZXJlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBzaXplOiAnc21hbGwnIHwgJ21pZGRsZScgfCAnZGVmYXVsdCc7XG4gIEBJbnB1dCgpIHNjcm9sbDogeyB5Pzogc3RyaW5nOyB4Pzogc3RyaW5nIH07XG4gIEBJbnB1dCgpIHNpbmdsZVNvcnQ6IFNUU2luZ2xlU29ydDtcbiAgcHJpdmF0ZSBfbXVsdGlTb3J0PzogU1RNdWx0aVNvcnQ7XG4gIEBJbnB1dCgpXG4gIGdldCBtdWx0aVNvcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX211bHRpU29ydDtcbiAgfVxuICBzZXQgbXVsdGlTb3J0KHZhbHVlOiBOelNhZmVBbnkpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicgJiYgIXRvQm9vbGVhbih2YWx1ZSkpIHtcbiAgICAgIHRoaXMuX211bHRpU29ydCA9IHVuZGVmaW5lZDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fbXVsdGlTb3J0ID0ge1xuICAgICAgLi4uKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgPyB2YWx1ZSA6IHt9KSxcbiAgICB9O1xuICB9XG4gIEBJbnB1dCgpIHJvd0NsYXNzTmFtZTogU1RSb3dDbGFzc05hbWU7XG4gIEBJbnB1dCgpXG4gIHNldCB3aWR0aE1vZGUodmFsdWU6IFNUV2lkdGhNb2RlKSB7XG4gICAgdGhpcy5fd2lkdGhNb2RlID0geyAuLi50aGlzLmNvZy53aWR0aE1vZGUsIC4uLnZhbHVlIH07XG4gIH1cbiAgZ2V0IHdpZHRoTW9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fd2lkdGhNb2RlO1xuICB9XG4gIEBJbnB1dCgpIGhlYWRlcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIGZvb3Rlcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIGJvZHlIZWFkZXI6IFRlbXBsYXRlUmVmPFNUU3RhdGlzdGljYWxSZXN1bHRzPjtcbiAgQElucHV0KCkgYm9keTogVGVtcGxhdGVSZWY8U1RTdGF0aXN0aWNhbFJlc3VsdHM+O1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZXhwYW5kUm93QnlDbGljayA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZXhwYW5kQWNjb3JkaW9uID0gZmFsc2U7XG4gIEBJbnB1dCgpIGV4cGFuZDogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IHt9OyBjb2x1bW46IFNUQ29sdW1uIH0+O1xuICBASW5wdXQoKSBub1Jlc3VsdDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIHdpZHRoQ29uZmlnOiBzdHJpbmdbXTtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgcm93Q2xpY2tUaW1lID0gMjAwO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgcmVzcG9uc2l2ZTogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSByZXNwb25zaXZlSGlkZUhlYWRlckZvb3RlcjogYm9vbGVhbjtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLW91dHB1dC1uYXRpdmVcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGVycm9yID0gbmV3IEV2ZW50RW1pdHRlcjxTVEVycm9yPigpO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tb3V0cHV0LW5hdGl2ZVxuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxTVENoYW5nZT4oKTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHZpcnR1YWxTY3JvbGwgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgdmlydHVhbEl0ZW1TaXplID0gNTQ7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHZpcnR1YWxNYXhCdWZmZXJQeCA9IDIwMDtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgdmlydHVhbE1pbkJ1ZmZlclB4ID0gMTAwO1xuICBASW5wdXQoKSB2aXJ0dWFsRm9yVHJhY2tCeTogVHJhY2tCeUZ1bmN0aW9uPE56VGFibGVEYXRhPiA9IGluZGV4ID0+IGluZGV4O1xuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG51bWJlciBvZiB0aGUgY3VycmVudCBwYWdlXG4gICAqL1xuICBnZXQgY291bnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YS5sZW5ndGg7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBkYXRhIG9mIHRoZSBjdXJyZW50IHBhZ2VcbiAgICovXG4gIGdldCBsaXN0KCk6IFNURGF0YVtdIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IHJvdXRlclN0YXRlKCkge1xuICAgIGNvbnN0IHsgcGksIHBzLCB0b3RhbCB9ID0gdGhpcztcbiAgICByZXR1cm4geyBwaSwgcHMsIHRvdGFsIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KEFMQUlOX0kxOE5fVE9LRU4pIGkxOG5TcnY6IEFsYWluSTE4TlNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGV4cG9ydFNydjogU1RFeHBvcnQsXG4gICAgcHJpdmF0ZSBtb2RhbEhlbHBlcjogTW9kYWxIZWxwZXIsXG4gICAgcHJpdmF0ZSBkcmF3ZXJIZWxwZXI6IERyYXdlckhlbHBlcixcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogYW55LFxuICAgIHByaXZhdGUgY29sdW1uU291cmNlOiBTVENvbHVtblNvdXJjZSxcbiAgICBwcml2YXRlIGRhdGFTb3VyY2U6IFNURGF0YVNvdXJjZSxcbiAgICBwcml2YXRlIGRlbG9uSTE4bjogRGVsb25Mb2NhbGVTZXJ2aWNlLFxuICAgIGNvbmZpZ1NydjogQWxhaW5Db25maWdTZXJ2aWNlLFxuICApIHtcbiAgICB0aGlzLnNldENvZyhjb25maWdTcnYubWVyZ2U8QWxhaW5TVENvbmZpZywgJ3N0Jz4oJ3N0JywgU1RfREVGVUxBVF9DT05GSUcpKTtcblxuICAgIHRoaXMuZGVsb25JMThuLmNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmxvY2FsZSA9IHRoaXMuZGVsb25JMThuLmdldERhdGEoJ3N0Jyk7XG4gICAgICBpZiAodGhpcy5fY29sdW1ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMudXBkYXRlVG90YWxUcGwoKTtcbiAgICAgICAgdGhpcy5jZCgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaTE4blNydi5jaGFuZ2VcbiAgICAgIC5waXBlKFxuICAgICAgICB0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpLFxuICAgICAgICBmaWx0ZXIoKCkgPT4gdGhpcy5fY29sdW1ucy5sZW5ndGggPiAwKSxcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5yZWZyZXNoQ29sdW1ucygpKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0Q29nKGNvZzogQWxhaW5TVENvbmZpZyk6IHZvaWQge1xuICAgIGNvbnN0IGNvcHlNdWx0aVNvcnQgPSB7IC4uLmNvZy5tdWx0aVNvcnQgfTtcbiAgICAvLyBCZWNhdXNlIG11bHRpU29ydC5nbG9iYWwgd2lsbCBhZmZlY3QgdGhlIHJlc3VsdCwgaXQgc2hvdWxkIGJlIHJlbW92ZWQgZmlyc3QsIGFuZCBtdWx0aVNvcnQgd2lsbCBiZSBvcGVyYXRlZCBhZ2FpbiBhZnRlciBwcm9jZXNzaW5nLlxuICAgIGRlbGV0ZSBjb2cubXVsdGlTb3J0O1xuICAgIHRoaXMuY29nID0gY29nO1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgY29nKTtcblxuICAgIGlmIChjb3B5TXVsdGlTb3J0Lmdsb2JhbCAhPT0gZmFsc2UpIHtcbiAgICAgIHRoaXMubXVsdGlTb3J0ID0gY29weU11bHRpU29ydDtcbiAgICB9XG4gICAgdGhpcy5jb2x1bW5Tb3VyY2Uuc2V0Q29nKGNvZyk7XG4gIH1cblxuICBjZCgpIHtcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZW5kZXJUb3RhbCh0b3RhbDogc3RyaW5nLCByYW5nZTogc3RyaW5nW10pIHtcbiAgICByZXR1cm4gdGhpcy50b3RhbFRwbFxuICAgICAgPyB0aGlzLnRvdGFsVHBsLnJlcGxhY2UoJ3t7dG90YWx9fScsIHRvdGFsKS5yZXBsYWNlKCd7e3JhbmdlWzBdfX0nLCByYW5nZVswXSkucmVwbGFjZSgne3tyYW5nZVsxXX19JywgcmFuZ2VbMV0pXG4gICAgICA6ICcnO1xuICB9XG5cbiAgaXNUcnVuY2F0ZShjb2x1bW46IFNUQ29sdW1uKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhY29sdW1uLndpZHRoICYmIHRoaXMud2lkdGhNb2RlLnN0cmljdEJlaGF2aW9yID09PSAndHJ1bmNhdGUnICYmIGNvbHVtbi50eXBlICE9PSAnaW1nJztcbiAgfVxuXG4gIGNvbHVtbkNsYXNzKGNvbHVtbjogU1RDb2x1bW4pOiBzdHJpbmcgfCBudWxsIHtcbiAgICByZXR1cm4gY29sdW1uLmNsYXNzTmFtZSB8fCAodGhpcy5pc1RydW5jYXRlKGNvbHVtbikgPyAndGV4dC10cnVuY2F0ZScgOiBudWxsKTtcbiAgfVxuXG4gIHByaXZhdGUgY2hhbmdlRW1pdCh0eXBlOiBTVENoYW5nZVR5cGUsIGRhdGE/OiBhbnkpIHtcbiAgICBjb25zdCByZXM6IFNUQ2hhbmdlID0ge1xuICAgICAgdHlwZSxcbiAgICAgIHBpOiB0aGlzLnBpLFxuICAgICAgcHM6IHRoaXMucHMsXG4gICAgICB0b3RhbDogdGhpcy50b3RhbCxcbiAgICB9O1xuICAgIGlmIChkYXRhICE9IG51bGwpIHtcbiAgICAgIHJlc1t0eXBlXSA9IGRhdGE7XG4gICAgfVxuICAgIHRoaXMuY2hhbmdlLmVtaXQocmVzKTtcbiAgfVxuXG4gIC8vICNyZWdpb24gZGF0YVxuXG4gIC8qKlxuICAgKiDojrflj5bov4fmu6TlkI7miYDmnInmlbDmja5cbiAgICogLSDmnKzlnLDmlbDmja7vvJrljIXlkKvmjpLluo/jgIHov4fmu6TlkI7kuI3liIbpobXmlbDmja5cbiAgICogLSDov5znqIvmlbDmja7vvJrkuI3kvKDpgJIgYHBpYOOAgWBwc2Ag5Lik5Liq5Y+C5pWwXG4gICAqL1xuICBnZXQgZmlsdGVyZWREYXRhKCk6IFByb21pc2U8U1REYXRhW10+IHtcbiAgICByZXR1cm4gdGhpcy5sb2FkRGF0YSh7IHBhZ2luYXRvcjogZmFsc2UgfSBhcyBhbnkpLnRoZW4ocmVzID0+IHJlcy5saXN0KTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlVG90YWxUcGwoKTogdm9pZCB7XG4gICAgY29uc3QgeyB0b3RhbCB9ID0gdGhpcy5wYWdlO1xuICAgIGlmICh0eXBlb2YgdG90YWwgPT09ICdzdHJpbmcnICYmIHRvdGFsLmxlbmd0aCkge1xuICAgICAgdGhpcy50b3RhbFRwbCA9IHRvdGFsO1xuICAgIH0gZWxzZSBpZiAodG9Cb29sZWFuKHRvdGFsKSkge1xuICAgICAgdGhpcy50b3RhbFRwbCA9IHRoaXMubG9jYWxlLnRvdGFsO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRvdGFsVHBsID0gJyc7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRMb2FkaW5nKHZhbDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICh0aGlzLmxvYWRpbmcgPT0gbnVsbCkge1xuICAgICAgdGhpcy5fbG9hZGluZyA9IHZhbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGxvYWREYXRhKG9wdGlvbnM/OiBTVERhdGFTb3VyY2VPcHRpb25zKTogUHJvbWlzZTxTVERhdGFTb3VyY2VSZXN1bHQ+IHtcbiAgICBjb25zdCB7IHBpLCBwcywgZGF0YSwgcmVxLCByZXMsIHBhZ2UsIHRvdGFsLCBzaW5nbGVTb3J0LCBtdWx0aVNvcnQsIHJvd0NsYXNzTmFtZSB9ID0gdGhpcztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmVQcm9taXNlLCByZWplY3RQcm9taXNlKSA9PiB7XG4gICAgICBpZiAodGhpcy5kYXRhJCkge1xuICAgICAgICB0aGlzLmRhdGEkLnVuc3Vic2NyaWJlKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZGF0YSQgPSB0aGlzLmRhdGFTb3VyY2VcbiAgICAgICAgLnByb2Nlc3Moe1xuICAgICAgICAgIHBpLFxuICAgICAgICAgIHBzLFxuICAgICAgICAgIHRvdGFsLFxuICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgcmVxLFxuICAgICAgICAgIHJlcyxcbiAgICAgICAgICBwYWdlLFxuICAgICAgICAgIGNvbHVtbnM6IHRoaXMuX2NvbHVtbnMsXG4gICAgICAgICAgc2luZ2xlU29ydCxcbiAgICAgICAgICBtdWx0aVNvcnQsXG4gICAgICAgICAgcm93Q2xhc3NOYW1lLFxuICAgICAgICAgIHBhZ2luYXRvcjogdHJ1ZSxcbiAgICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICB9KVxuICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKVxuICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgIHJlc3VsdCA9PiByZXNvbHZlUHJvbWlzZShyZXN1bHQpLFxuICAgICAgICAgIGVycm9yID0+IHJlamVjdFByb21pc2UoZXJyb3IpLFxuICAgICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBsb2FkUGFnZURhdGEoKTogUHJvbWlzZTx0aGlzPiB7XG4gICAgdGhpcy5zZXRMb2FkaW5nKHRydWUpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmxvYWREYXRhKCk7XG4gICAgICB0aGlzLnNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgaWYgKHR5cGVvZiByZXN1bHQucGkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMucGkgPSByZXN1bHQucGk7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHJlc3VsdC5wcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5wcyA9IHJlc3VsdC5wcztcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgcmVzdWx0LnRvdGFsICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLnRvdGFsID0gcmVzdWx0LnRvdGFsO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiByZXN1bHQucGFnZVNob3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMuX2lzUGFnaW5hdGlvbiA9IHJlc3VsdC5wYWdlU2hvdztcbiAgICAgIH1cbiAgICAgIHRoaXMuX2RhdGEgPSByZXN1bHQubGlzdCBhcyBTVERhdGFbXTtcbiAgICAgIHRoaXMuX3N0YXRpc3RpY2FsID0gcmVzdWx0LnN0YXRpc3RpY2FsIGFzIFNUU3RhdGlzdGljYWxSZXN1bHRzO1xuICAgICAgdGhpcy5jaGFuZ2VFbWl0KCdsb2FkZWQnLCByZXN1bHQubGlzdCk7XG4gICAgICByZXR1cm4gdGhpcy5fcmVmQ2hlY2soKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5zZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIGlmICghdGhpcy51bnN1YnNjcmliZSQuaXNTdG9wcGVkKSB7XG4gICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgdGhpcy5lcnJvci5lbWl0KHsgdHlwZTogJ3JlcScsIGVycm9yIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9XG5cbiAgLyoqIOa4heepuuaJgOacieaVsOaNriAqL1xuICBjbGVhcihjbGVhblN0YXR1cyA9IHRydWUpOiB0aGlzIHtcbiAgICBpZiAoY2xlYW5TdGF0dXMpIHtcbiAgICAgIHRoaXMuY2xlYXJTdGF0dXMoKTtcbiAgICB9XG4gICAgdGhpcy5fZGF0YSA9IFtdO1xuICAgIHJldHVybiB0aGlzLmNkKCk7XG4gIH1cblxuICAvKiog5riF56m65omA5pyJ54q25oCBICovXG4gIGNsZWFyU3RhdHVzKCk6IHRoaXMge1xuICAgIHJldHVybiB0aGlzLmNsZWFyQ2hlY2soKS5jbGVhclJhZGlvKCkuY2xlYXJGaWx0ZXIoKS5jbGVhclNvcnQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmoLnmja7pobXnoIHph43mlrDliqDovb3mlbDmja5cbiAgICpcbiAgICogQHBhcmFtIHBpIOaMh+WumuW9k+WJjemhteegge+8jOm7mOiupO+8mmAxYFxuICAgKiBAcGFyYW0gZXh0cmFQYXJhbXMg6YeN5paw5oyH5a6aIGBleHRyYVBhcmFtc2Ag5YC8XG4gICAqIEBwYXJhbSBvcHRpb25zIOmAiemhuVxuICAgKi9cbiAgbG9hZChwaSA9IDEsIGV4dHJhUGFyYW1zPzoge30sIG9wdGlvbnM/OiBTVExvYWRPcHRpb25zKSB7XG4gICAgaWYgKHBpICE9PSAtMSkgdGhpcy5waSA9IHBpO1xuICAgIGlmICh0eXBlb2YgZXh0cmFQYXJhbXMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlcS5wYXJhbXMgPSBvcHRpb25zICYmIG9wdGlvbnMubWVyZ2UgPyB7IC4uLnRoaXMucmVxLnBhcmFtcywgLi4uZXh0cmFQYXJhbXMgfSA6IGV4dHJhUGFyYW1zO1xuICAgIH1cbiAgICB0aGlzLl9jaGFuZ2UoJ3BpJywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICog6YeN5paw5Yi35paw5b2T5YmN6aG1XG4gICAqIEBwYXJhbSBleHRyYVBhcmFtcyDph43mlrDmjIflrpogYGV4dHJhUGFyYW1zYCDlgLxcbiAgICovXG4gIHJlbG9hZChleHRyYVBhcmFtcz86IHt9LCBvcHRpb25zPzogU1RMb2FkT3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLmxvYWQoLTEsIGV4dHJhUGFyYW1zLCBvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDph43nva7kuJTph43mlrDorr7nva4gYHBpYCDkuLogYDFg77yM5YyF5ZCr5Lul5LiL5YC877yaXG4gICAqIC0gYGNoZWNrYCDmlbDmja5cbiAgICogLSBgcmFkaW9gIOaVsOaNrlxuICAgKiAtIGBzb3J0YCDmlbDmja5cbiAgICogLSBgZmlsZXRlcmAg5pWw5o2uXG4gICAqXG4gICAqIEBwYXJhbSBleHRyYVBhcmFtcyDph43mlrDmjIflrpogYGV4dHJhUGFyYW1zYCDlgLxcbiAgICovXG4gIHJlc2V0KGV4dHJhUGFyYW1zPzoge30sIG9wdGlvbnM/OiBTVExvYWRPcHRpb25zKSB7XG4gICAgdGhpcy5jbGVhclN0YXR1cygpLmxvYWQoMSwgZXh0cmFQYXJhbXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHJpdmF0ZSBfdG9Ub3AoZW5mb3JjZT86IGJvb2xlYW4pIHtcbiAgICBpZiAoIShlbmZvcmNlID09IG51bGwgPyB0aGlzLnBhZ2UudG9Ub3AgOiBlbmZvcmNlKSkgcmV0dXJuO1xuICAgIGNvbnN0IGVsID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgIGlmICh0aGlzLnNjcm9sbCkge1xuICAgICAgZWwucXVlcnlTZWxlY3RvcignLmFudC10YWJsZS1ib2R5JykhLnNjcm9sbFRvKDAsIDApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbC5zY3JvbGxJbnRvVmlldygpO1xuICAgIC8vIGZpeCBoZWFkZXIgaGVpZ2h0XG4gICAgdGhpcy5kb2MuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCAtPSB0aGlzLnBhZ2UudG9Ub3BPZmZzZXQhO1xuICB9XG5cbiAgX2NoYW5nZSh0eXBlOiAncGknIHwgJ3BzJywgb3B0aW9ucz86IFNUTG9hZE9wdGlvbnMpIHtcbiAgICBpZiAodHlwZSA9PT0gJ3BpJyB8fCAodHlwZSA9PT0gJ3BzJyAmJiB0aGlzLnBpIDw9IE1hdGguY2VpbCh0aGlzLnRvdGFsIC8gdGhpcy5wcykpKSB7XG4gICAgICB0aGlzLmxvYWRQYWdlRGF0YSgpLnRoZW4oKCkgPT4gdGhpcy5fdG9Ub3Aob3B0aW9ucz8udG9Ub3ApKTtcbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZUVtaXQodHlwZSk7XG4gIH1cblxuICBfY2xpY2soZTogRXZlbnQsIGl0ZW06IFNURGF0YSwgY29sOiBTVENvbHVtbikge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IHJlcyA9IGNvbC5jbGljayEoaXRlbSwgdGhpcyk7XG4gICAgaWYgKHR5cGVvZiByZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHJlcywgeyBzdGF0ZTogdGhpcy5yb3V0ZXJTdGF0ZSB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHByaXZhdGUgY2xvc2VPdGhlckV4cGFuZChpdGVtOiBTVERhdGEpIHtcbiAgICBpZiAodGhpcy5leHBhbmRBY2NvcmRpb24gPT09IGZhbHNlKSByZXR1cm47XG4gICAgdGhpcy5fZGF0YS5maWx0ZXIoaSA9PiBpICE9PSBpdGVtKS5mb3JFYWNoKGkgPT4gKGkuZXhwYW5kID0gZmFsc2UpKTtcbiAgfVxuICBfcm93Q2xpY2soZTogRXZlbnQsIGl0ZW06IFNURGF0YSwgaW5kZXg6IG51bWJlcikge1xuICAgIGlmICgoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLm5vZGVOYW1lID09PSAnSU5QVVQnKSByZXR1cm47XG4gICAgY29uc3QgeyBleHBhbmQsIGV4cGFuZFJvd0J5Q2xpY2ssIHJvd0NsaWNrVGltZSB9ID0gdGhpcztcbiAgICBpZiAoISFleHBhbmQgJiYgaXRlbS5zaG93RXhwYW5kICE9PSBmYWxzZSAmJiBleHBhbmRSb3dCeUNsaWNrKSB7XG4gICAgICBpdGVtLmV4cGFuZCA9ICFpdGVtLmV4cGFuZDtcbiAgICAgIHRoaXMuY2xvc2VPdGhlckV4cGFuZChpdGVtKTtcbiAgICAgIHRoaXMuY2hhbmdlRW1pdCgnZXhwYW5kJywgaXRlbSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgICsrdGhpcy5yb3dDbGlja0NvdW50O1xuICAgIGlmICh0aGlzLnJvd0NsaWNrQ291bnQgIT09IDEpIHJldHVybjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IGRhdGEgPSB7IGUsIGl0ZW0sIGluZGV4IH07XG4gICAgICBpZiAodGhpcy5yb3dDbGlja0NvdW50ID09PSAxKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlRW1pdCgnY2xpY2snLCBkYXRhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2hhbmdlRW1pdCgnZGJsQ2xpY2snLCBkYXRhKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucm93Q2xpY2tDb3VudCA9IDA7XG4gICAgfSwgcm93Q2xpY2tUaW1lKTtcbiAgfVxuXG4gIF9leHBhbmRDaGFuZ2UoaXRlbTogU1REYXRhLCBleHBhbmQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpdGVtLmV4cGFuZCA9IGV4cGFuZDtcbiAgICB0aGlzLmNsb3NlT3RoZXJFeHBhbmQoaXRlbSk7XG4gICAgdGhpcy5jaGFuZ2VFbWl0KCdleHBhbmQnLCBpdGVtKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYSByb3cgaW4gdGhlIHRhYmxlLCBsaWtlIHRoaXM6XG4gICAqXG4gICAqIGBgYFxuICAgKiB0aGlzLnN0LnJlbW92ZVJvdygwKVxuICAgKiB0aGlzLnN0LnJlbW92ZVJvdyhzdERhdGFJdGVtKVxuICAgKiBgYGBcbiAgICovXG4gIHJlbW92ZVJvdyhkYXRhOiBTVERhdGEgfCBTVERhdGFbXSB8IG51bWJlcikge1xuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHRoaXMuX2RhdGEuc3BsaWNlKGRhdGEsIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgZGF0YSA9IFtkYXRhXTtcbiAgICAgIH1cblxuICAgICAgKGRhdGEgYXMgU1REYXRhW10pXG4gICAgICAgIC5tYXAoaXRlbSA9PiB0aGlzLl9kYXRhLmluZGV4T2YoaXRlbSkpXG4gICAgICAgIC5maWx0ZXIocG9zID0+IHBvcyAhPT0gLTEpXG4gICAgICAgIC5mb3JFYWNoKHBvcyA9PiB0aGlzLl9kYXRhLnNwbGljZShwb3MsIDEpKTtcbiAgICB9XG4gICAgLy8gcmVjYWxjdWxhdGUgbm9cbiAgICB0aGlzLl9jb2x1bW5zXG4gICAgICAuZmlsdGVyKHcgPT4gdy50eXBlID09PSAnbm8nKVxuICAgICAgLmZvckVhY2goYyA9PiB0aGlzLl9kYXRhLmZvckVhY2goKGksIGlkeCkgPT4gKGkuX3ZhbHVlc1tjLl9fcG9pbnRdID0geyB0ZXh0OiB0aGlzLmRhdGFTb3VyY2UuZ2V0Tm9JbmRleChpLCBjLCBpZHgpLCBvcmc6IGlkeCB9KSkpO1xuXG4gICAgcmV0dXJuIHRoaXMuY2QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSByb3cgdmFsdWUgZm9yIHRoZSBgaW5kZXhgIGluIHRoZSB0YWJsZSwgbGlrZSB0aGlzOlxuICAgKlxuICAgKiAtIGBvcHRpbm9zLnJlZnJlc2hTY2hlbWFgIFdoZXRoZXIgdG8gcmVmcmVzaCBvZiBzdCBzY2hlbWFzXG4gICAqIC0gYG9wdGlub3MuZW1pdFJlbG9hZGAgV2hldGhlciB0byB0cmlnZ2VyIGEgcmVsb2FkIGh0dHAgcmVxdWVzdCB3aGVuIGRhdGEgaXMgdXJsXG4gICAqXG4gICAqIGBgYFxuICAgKiB0aGlzLnN0LnNldFJvdygwLCB7IHByaWNlOiAxMDAgfSlcbiAgICogdGhpcy5zdC5zZXRSb3coMCwgeyBwcmljZTogMTAwLCBuYW1lOiAnYXNkZicgfSlcbiAgICogYGBgXG4gICAqL1xuICBzZXRSb3coaW5kZXg6IG51bWJlciwgaXRlbTogU1REYXRhLCBvcHRpb25zPzogeyByZWZyZXNoU2NoZW1hPzogYm9vbGVhbjsgZW1pdFJlbG9hZD86IGJvb2xlYW4gfSk6IHRoaXMge1xuICAgIG9wdGlvbnMgPSB7IHJlZnJlc2hTY2hlbWE6IGZhbHNlLCBlbWl0UmVsb2FkOiBmYWxzZSwgLi4ub3B0aW9ucyB9O1xuICAgIHRoaXMuX2RhdGFbaW5kZXhdID0gZGVlcE1lcmdlS2V5KHRoaXMuX2RhdGFbaW5kZXhdLCBmYWxzZSwgaXRlbSk7XG4gICAgdGhpcy5fZGF0YSA9IHRoaXMuZGF0YVNvdXJjZS5vcHRpbWl6ZURhdGEoeyBjb2x1bW5zOiB0aGlzLl9jb2x1bW5zLCByZXN1bHQ6IHRoaXMuX2RhdGEsIHJvd0NsYXNzTmFtZTogdGhpcy5yb3dDbGFzc05hbWUgfSk7XG4gICAgaWYgKG9wdGlvbnMucmVmcmVzaFNjaGVtYSkge1xuICAgICAgdGhpcy5yZXNldENvbHVtbnMoeyBlbWl0UmVsb2FkOiBvcHRpb25zLmVtaXRSZWxvYWQgfSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gc29ydFxuXG4gIHNvcnQoY29sOiBTVENvbHVtbiwgaWR4OiBudW1iZXIsIHZhbHVlOiBhbnkpIHtcbiAgICBpZiAodGhpcy5tdWx0aVNvcnQpIHtcbiAgICAgIGNvbC5fc29ydCEuZGVmYXVsdCA9IHZhbHVlO1xuICAgICAgY29sLl9zb3J0IS50aWNrID0gdGhpcy5kYXRhU291cmNlLm5leHRTb3J0VGljaztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY29sdW1ucy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4gKGl0ZW0uX3NvcnQhLmRlZmF1bHQgPSBpbmRleCA9PT0gaWR4ID8gdmFsdWUgOiBudWxsKSk7XG4gICAgfVxuICAgIHRoaXMubG9hZFBhZ2VEYXRhKCk7XG4gICAgY29uc3QgcmVzID0ge1xuICAgICAgdmFsdWUsXG4gICAgICBtYXA6IHRoaXMuZGF0YVNvdXJjZS5nZXRSZXFTb3J0TWFwKHRoaXMuc2luZ2xlU29ydCwgdGhpcy5tdWx0aVNvcnQsIHRoaXMuX2NvbHVtbnMpLFxuICAgICAgY29sdW1uOiBjb2wsXG4gICAgfTtcbiAgICB0aGlzLmNoYW5nZUVtaXQoJ3NvcnQnLCByZXMpO1xuICB9XG5cbiAgY2xlYXJTb3J0KCkge1xuICAgIHRoaXMuX2NvbHVtbnMuZm9yRWFjaChpdGVtID0+IChpdGVtLl9zb3J0IS5kZWZhdWx0ID0gbnVsbCkpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gZmlsdGVyXG5cbiAgcHJpdmF0ZSBoYW5kbGVGaWx0ZXIoY29sOiBTVENvbHVtbikge1xuICAgIHRoaXMuY29sdW1uU291cmNlLnVwZGF0ZURlZmF1bHQoY29sLmZpbHRlciEpO1xuICAgIHRoaXMubG9hZFBhZ2VEYXRhKCk7XG4gICAgdGhpcy5jaGFuZ2VFbWl0KCdmaWx0ZXInLCBjb2wpO1xuICB9XG5cbiAgX2ZpbHRlckNvbmZpcm0oY29sOiBTVENvbHVtbikge1xuICAgIHRoaXMuaGFuZGxlRmlsdGVyKGNvbCk7XG4gIH1cblxuICBfZmlsdGVyUmFkaW8oY29sOiBTVENvbHVtbiwgaXRlbTogU1RDb2x1bW5GaWx0ZXJNZW51LCBjaGVja2VkOiBib29sZWFuKSB7XG4gICAgY29sLmZpbHRlciEubWVudXMhLmZvckVhY2goaSA9PiAoaS5jaGVja2VkID0gZmFsc2UpKTtcbiAgICBpdGVtLmNoZWNrZWQgPSBjaGVja2VkO1xuICB9XG5cbiAgX2ZpbHRlckNsZWFyKGNvbDogU1RDb2x1bW4pIHtcbiAgICB0aGlzLmNvbHVtblNvdXJjZS5jbGVhbkZpbHRlcihjb2wpO1xuICAgIHRoaXMuaGFuZGxlRmlsdGVyKGNvbCk7XG4gIH1cblxuICBjbGVhckZpbHRlcigpIHtcbiAgICB0aGlzLl9jb2x1bW5zLmZpbHRlcih3ID0+IHcuZmlsdGVyICYmIHcuZmlsdGVyLmRlZmF1bHQgPT09IHRydWUpLmZvckVhY2goY29sID0+IHRoaXMuY29sdW1uU291cmNlLmNsZWFuRmlsdGVyKGNvbCkpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gY2hlY2tib3hcblxuICAvKiog5riF6Zmk5omA5pyJIGBjaGVja2JveGAgKi9cbiAgY2xlYXJDaGVjaygpOiB0aGlzIHtcbiAgICByZXR1cm4gdGhpcy5fY2hlY2tBbGwoZmFsc2UpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVmQ2hlY2soKTogdGhpcyB7XG4gICAgY29uc3QgdmFsaWREYXRhID0gdGhpcy5fZGF0YS5maWx0ZXIodyA9PiAhdy5kaXNhYmxlZCk7XG4gICAgY29uc3QgY2hlY2tlZExpc3QgPSB2YWxpZERhdGEuZmlsdGVyKHcgPT4gdy5jaGVja2VkID09PSB0cnVlKTtcbiAgICB0aGlzLl9hbGxDaGVja2VkID0gY2hlY2tlZExpc3QubGVuZ3RoID4gMCAmJiBjaGVja2VkTGlzdC5sZW5ndGggPT09IHZhbGlkRGF0YS5sZW5ndGg7XG4gICAgY29uc3QgYWxsVW5DaGVja2VkID0gdmFsaWREYXRhLmV2ZXJ5KHZhbHVlID0+ICF2YWx1ZS5jaGVja2VkKTtcbiAgICB0aGlzLl9pbmRldGVybWluYXRlID0gIXRoaXMuX2FsbENoZWNrZWQgJiYgIWFsbFVuQ2hlY2tlZDtcbiAgICB0aGlzLl9hbGxDaGVja2VkRGlzYWJsZWQgPSB0aGlzLl9kYXRhLmxlbmd0aCA9PT0gdGhpcy5fZGF0YS5maWx0ZXIodyA9PiB3LmRpc2FibGVkKS5sZW5ndGg7XG4gICAgcmV0dXJuIHRoaXMuY2QoKTtcbiAgfVxuXG4gIF9jaGVja0FsbChjaGVja2VkPzogYm9vbGVhbik6IHRoaXMge1xuICAgIGNoZWNrZWQgPSB0eXBlb2YgY2hlY2tlZCA9PT0gJ3VuZGVmaW5lZCcgPyB0aGlzLl9hbGxDaGVja2VkIDogY2hlY2tlZDtcbiAgICB0aGlzLl9kYXRhLmZpbHRlcih3ID0+ICF3LmRpc2FibGVkKS5mb3JFYWNoKGkgPT4gKGkuY2hlY2tlZCA9IGNoZWNrZWQpKTtcbiAgICByZXR1cm4gdGhpcy5fcmVmQ2hlY2soKS5fY2hlY2tOb3RpZnkoKTtcbiAgfVxuXG4gIF9jaGVja1NlbGVjdGlvbihpOiBTVERhdGEsIHZhbHVlOiBib29sZWFuKSB7XG4gICAgaS5jaGVja2VkID0gdmFsdWU7XG4gICAgcmV0dXJuIHRoaXMuX3JlZkNoZWNrKCkuX2NoZWNrTm90aWZ5KCk7XG4gIH1cblxuICBfcm93U2VsZWN0aW9uKHJvdzogU1RDb2x1bW5TZWxlY3Rpb24pOiB0aGlzIHtcbiAgICByb3cuc2VsZWN0KHRoaXMuX2RhdGEpO1xuICAgIHJldHVybiB0aGlzLl9yZWZDaGVjaygpLl9jaGVja05vdGlmeSgpO1xuICB9XG5cbiAgX2NoZWNrTm90aWZ5KCk6IHRoaXMge1xuICAgIGNvbnN0IHJlcyA9IHRoaXMuX2RhdGEuZmlsdGVyKHcgPT4gIXcuZGlzYWJsZWQgJiYgdy5jaGVja2VkID09PSB0cnVlKTtcbiAgICB0aGlzLmNoYW5nZUVtaXQoJ2NoZWNrYm94JywgcmVzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIHJhZGlvXG5cbiAgLyoqIOa4hemZpOaJgOaciSBgcmFkaW9gICovXG4gIGNsZWFyUmFkaW8oKTogdGhpcyB7XG4gICAgdGhpcy5fZGF0YS5maWx0ZXIodyA9PiB3LmNoZWNrZWQpLmZvckVhY2goaXRlbSA9PiAoaXRlbS5jaGVja2VkID0gZmFsc2UpKTtcbiAgICB0aGlzLmNoYW5nZUVtaXQoJ3JhZGlvJywgbnVsbCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBfcmVmUmFkaW8oY2hlY2tlZDogYm9vbGVhbiwgaXRlbTogU1REYXRhKTogdGhpcyB7XG4gICAgLy8gaWYgKGl0ZW0uZGlzYWJsZWQgPT09IHRydWUpIHJldHVybjtcbiAgICB0aGlzLl9kYXRhLmZpbHRlcih3ID0+ICF3LmRpc2FibGVkKS5mb3JFYWNoKGkgPT4gKGkuY2hlY2tlZCA9IGZhbHNlKSk7XG4gICAgaXRlbS5jaGVja2VkID0gY2hlY2tlZDtcbiAgICB0aGlzLmNoYW5nZUVtaXQoJ3JhZGlvJywgaXRlbSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiBidXR0b25zXG5cbiAgX2J0bkNsaWNrKHJlY29yZDogU1REYXRhLCBidG46IFNUQ29sdW1uQnV0dG9uLCBlPzogRXZlbnQpIHtcbiAgICAvLyBzaG91bGQgYmUgc3RvcCBwcm9wYWdhdGlvbiB3aGVuIGV4cGFuZFJvd0J5Q2xpY2sgaXMgdHJ1ZVxuICAgIGlmIChlICYmIHRoaXMuZXhwYW5kUm93QnlDbGljayA9PT0gdHJ1ZSkge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gICAgaWYgKGJ0bi50eXBlID09PSAnbW9kYWwnIHx8IGJ0bi50eXBlID09PSAnc3RhdGljJykge1xuICAgICAgY29uc3QgeyBtb2RhbCB9ID0gYnRuO1xuICAgICAgY29uc3Qgb2JqID0geyBbbW9kYWwhLnBhcmFtc05hbWUhXTogcmVjb3JkIH07XG4gICAgICAodGhpcy5tb2RhbEhlbHBlcltidG4udHlwZSA9PT0gJ21vZGFsJyA/ICdjcmVhdGUnIDogJ2NyZWF0ZVN0YXRpYyddIGFzIGFueSkoXG4gICAgICAgIG1vZGFsIS5jb21wb25lbnQsXG4gICAgICAgIHsgLi4ub2JqLCAuLi4obW9kYWwhLnBhcmFtcyAmJiBtb2RhbCEucGFyYW1zIShyZWNvcmQpKSB9LFxuICAgICAgICBkZWVwTWVyZ2VLZXkoe30sIHRydWUsIHRoaXMuY29nLm1vZGFsLCBtb2RhbCksXG4gICAgICApXG4gICAgICAgIC5waXBlKGZpbHRlcih3ID0+IHR5cGVvZiB3ICE9PSAndW5kZWZpbmVkJykpXG4gICAgICAgIC5zdWJzY3JpYmUoKHJlczogTnpTYWZlQW55KSA9PiB0aGlzLmJ0bkNhbGxiYWNrKHJlY29yZCwgYnRuLCByZXMpKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKGJ0bi50eXBlID09PSAnZHJhd2VyJykge1xuICAgICAgY29uc3QgeyBkcmF3ZXIgfSA9IGJ0bjtcbiAgICAgIGNvbnN0IG9iaiA9IHsgW2RyYXdlciEucGFyYW1zTmFtZSFdOiByZWNvcmQgfTtcbiAgICAgIHRoaXMuZHJhd2VySGVscGVyXG4gICAgICAgIC5jcmVhdGUoXG4gICAgICAgICAgZHJhd2VyIS50aXRsZSEsXG4gICAgICAgICAgZHJhd2VyIS5jb21wb25lbnQsXG4gICAgICAgICAgeyAuLi5vYmosIC4uLihkcmF3ZXIhLnBhcmFtcyAmJiBkcmF3ZXIhLnBhcmFtcyEocmVjb3JkKSkgfSxcbiAgICAgICAgICBkZWVwTWVyZ2VLZXkoe30sIHRydWUsIHRoaXMuY29nLmRyYXdlciwgZHJhd2VyKSxcbiAgICAgICAgKVxuICAgICAgICAucGlwZShmaWx0ZXIodyA9PiB0eXBlb2YgdyAhPT0gJ3VuZGVmaW5lZCcpKVxuICAgICAgICAuc3Vic2NyaWJlKHJlcyA9PiB0aGlzLmJ0bkNhbGxiYWNrKHJlY29yZCwgYnRuLCByZXMpKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKGJ0bi50eXBlID09PSAnbGluaycpIHtcbiAgICAgIGNvbnN0IGNsaWNrUmVzID0gdGhpcy5idG5DYWxsYmFjayhyZWNvcmQsIGJ0bik7XG4gICAgICBpZiAodHlwZW9mIGNsaWNrUmVzID09PSAnc3RyaW5nJykge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKGNsaWNrUmVzLCB7IHN0YXRlOiB0aGlzLnJvdXRlclN0YXRlIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmJ0bkNhbGxiYWNrKHJlY29yZCwgYnRuKTtcbiAgfVxuXG4gIHByaXZhdGUgYnRuQ2FsbGJhY2socmVjb3JkOiBTVERhdGEsIGJ0bjogU1RDb2x1bW5CdXR0b24sIG1vZGFsPzogYW55KSB7XG4gICAgaWYgKCFidG4uY2xpY2spIHJldHVybjtcbiAgICBpZiAodHlwZW9mIGJ0bi5jbGljayA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHN3aXRjaCAoYnRuLmNsaWNrKSB7XG4gICAgICAgIGNhc2UgJ2xvYWQnOlxuICAgICAgICAgIHRoaXMubG9hZCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdyZWxvYWQnOlxuICAgICAgICAgIHRoaXMucmVsb2FkKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBidG4uY2xpY2socmVjb3JkLCBtb2RhbCwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgX2J0blRleHQocmVjb3JkOiBTVERhdGEsIGJ0bjogU1RDb2x1bW5CdXR0b24pIHtcbiAgICByZXR1cm4gdHlwZW9mIGJ0bi50ZXh0ID09PSAnZnVuY3Rpb24nID8gYnRuLnRleHQocmVjb3JkLCBidG4pIDogYnRuLnRleHQgfHwgJyc7XG4gIH1cblxuICBfdmFsaWRCdG5zKGJ0bnM6IFNUQ29sdW1uQnV0dG9uW10sIGl0ZW06IFNURGF0YSwgY29sOiBTVENvbHVtbik6IFNUQ29sdW1uQnV0dG9uW10ge1xuICAgIHJldHVybiBidG5zLmZpbHRlcihidG4gPT4ge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYnRuLmlpZiEoaXRlbSwgYnRuLCBjb2wpO1xuICAgICAgY29uc3QgaXNSZW5kZXJEaXNhYmxlZCA9IGJ0bi5paWZCZWhhdmlvciA9PT0gJ2Rpc2FibGVkJztcbiAgICAgIGJ0bi5fcmVzdWx0ID0gcmVzdWx0O1xuICAgICAgYnRuLl9kaXNhYmxlZCA9ICFyZXN1bHQgJiYgaXNSZW5kZXJEaXNhYmxlZDtcbiAgICAgIHJldHVybiByZXN1bHQgfHwgaXNSZW5kZXJEaXNhYmxlZDtcbiAgICB9KTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIGV4cG9ydFxuXG4gIC8qKlxuICAgKiDlr7zlh7rlvZPliY3pobXvvIznoa7kv53lt7Lnu4/ms6jlhowgYFhsc3hNb2R1bGVgXG4gICAqIEBwYXJhbSBuZXdEYXRhIOmHjeaWsOaMh+WumuaVsOaNru+8m+iLpeS4uiBgdHJ1ZWAg6KGo56S65L2/55SoIGBmaWx0ZXJlZERhdGFgIOaVsOaNrlxuICAgKiBAcGFyYW0gb3B0IOmineWkluWPguaVsFxuICAgKi9cbiAgZXhwb3J0KG5ld0RhdGE/OiBTVERhdGFbXSB8IHRydWUsIG9wdD86IFNURXhwb3J0T3B0aW9ucykge1xuICAgIChuZXdEYXRhID09PSB0cnVlID8gZnJvbSh0aGlzLmZpbHRlcmVkRGF0YSkgOiBvZihuZXdEYXRhIHx8IHRoaXMuX2RhdGEpKS5zdWJzY3JpYmUoKHJlczogU1REYXRhW10pID0+XG4gICAgICB0aGlzLmV4cG9ydFNydi5leHBvcnQoe1xuICAgICAgICAuLi5vcHQsXG4gICAgICAgIF9kOiByZXMsXG4gICAgICAgIF9jOiB0aGlzLl9jb2x1bW5zLFxuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICBnZXQgY2RrVmlydHVhbFNjcm9sbFZpZXdwb3J0KCkge1xuICAgIHJldHVybiB0aGlzLm9yZ1RhYmxlLmNka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydDtcbiAgfVxuXG4gIHJlc2V0Q29sdW1ucyhvcHRpb25zPzogU1RSZXNldENvbHVtbnNPcHRpb24pOiBQcm9taXNlPHRoaXM+IHtcbiAgICBvcHRpb25zID0geyBlbWl0UmVsb2FkOiB0cnVlLCAuLi5vcHRpb25zIH07XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLmNvbHVtbnMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLmNvbHVtbnMgPSBvcHRpb25zLmNvbHVtbnM7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5waSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucGkgPSBvcHRpb25zLnBpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMucHMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnBzID0gb3B0aW9ucy5wcztcbiAgICB9XG4gICAgdGhpcy5yZWZyZXNoQ29sdW1ucygpO1xuICAgIGlmIChvcHRpb25zLmVtaXRSZWxvYWQgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiB0aGlzLmxvYWRQYWdlRGF0YSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNkKCk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVmcmVzaENvbHVtbnMoKTogdGhpcyB7XG4gICAgdGhpcy5fY29sdW1ucyA9IHRoaXMuY29sdW1uU291cmNlLnByb2Nlc3ModGhpcy5jb2x1bW5zKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmNvbHVtblNvdXJjZS5yZXN0b3JlQWxsUmVuZGVyKHRoaXMuX2NvbHVtbnMpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogeyBbUCBpbiBrZXlvZiB0aGlzXT86IFNpbXBsZUNoYW5nZSB9ICYgU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLmNvbHVtbnMpIHtcbiAgICAgIHRoaXMucmVmcmVzaENvbHVtbnMoKTtcbiAgICB9XG4gICAgY29uc3QgY2hhbmdlRGF0YSA9IGNoYW5nZXMuZGF0YTtcbiAgICBpZiAoY2hhbmdlRGF0YSAmJiBjaGFuZ2VEYXRhLmN1cnJlbnRWYWx1ZSAmJiAhKHRoaXMucmVxLmxhenlMb2FkICYmIGNoYW5nZURhdGEuZmlyc3RDaGFuZ2UpKSB7XG4gICAgICB0aGlzLmxvYWRQYWdlRGF0YSgpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5sb2FkaW5nKSB7XG4gICAgICB0aGlzLl9sb2FkaW5nID0gY2hhbmdlcy5sb2FkaW5nLmN1cnJlbnRWYWx1ZTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBjb25zdCB7IHVuc3Vic2NyaWJlJCB9ID0gdGhpcztcbiAgICB1bnN1YnNjcmliZSQubmV4dCgpO1xuICAgIHVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=