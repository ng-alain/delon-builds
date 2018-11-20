import { Directive, Input, TemplateRef, Injectable, Host, Optional, Inject, Component, Output, EventEmitter, Renderer2, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ACLService, DelonACLModule } from '@delon/acl';
import { ALAIN_I18N_TOKEN, CNCurrencyPipe, DatePipe, YNPipe, _HttpClient, ModalHelper, DrawerHelper, DelonLocaleService } from '@delon/theme';
import { deepCopy, deepGet, toBoolean, updateHostClass, InputBoolean, InputNumber, DelonUtilModule } from '@delon/util';
import { DecimalPipe, DOCUMENT, CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { of } from 'rxjs';
import { map, catchError, filter } from 'rxjs/operators';
import { XlsxService } from '@delon/abc/xlsx';
import { __decorate, __metadata } from 'tslib';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class STRowSource {
    constructor() {
        this.titles = {};
        this.rows = {};
    }
    /**
     * @param {?} type
     * @param {?} path
     * @param {?} ref
     * @return {?}
     */
    add(type, path, ref) {
        this[type === 'title' ? 'titles' : 'rows'][path] = ref;
    }
    /**
     * @param {?} path
     * @return {?}
     */
    getTitle(path) {
        return this.titles[path];
    }
    /**
     * @param {?} path
     * @return {?}
     */
    getRow(path) {
        return this.rows[path];
    }
}
STRowSource.decorators = [
    { type: Injectable }
];
class STRowDirective {
    /**
     * @param {?} ref
     * @param {?} source
     */
    constructor(ref, source) {
        this.ref = ref;
        this.source = source;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.source.add(this.type, this.id, this.ref);
    }
}
STRowDirective.decorators = [
    { type: Directive, args: [{ selector: '[st-row]' },] }
];
/** @nocollapse */
STRowDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: STRowSource, decorators: [{ type: Host }] }
];
STRowDirective.propDecorators = {
    id: [{ type: Input, args: ['st-row',] }],
    type: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class STConfig {
    constructor() {
        /**
         * table大小
         */
        this.size = 'default';
        /**
         * 是否隐藏头和尾，当小屏幕下才显示，默认：`false`
         */
        this.responsiveHideHeaderFooter = false;
        /**
         * 请求体配置
         */
        this.req = {
            method: 'GET',
            allInBody: false,
            reName: { pi: 'pi', ps: 'ps' },
        };
        /**
         * 返回体配置
         */
        this.res = {
            reName: { list: ['list'], total: ['total'] },
        };
        /**
         * 返回体配置
         */
        this.page = {
            front: true,
            zeroIndexed: false,
            placement: 'right',
            show: true,
            showSize: false,
            pageSizes: [10, 20, 30, 40, 50],
            showQuickJumper: false,
            total: true,
            indexReset: true,
            toTop: true,
            toTopOffset: 100,
        };
        /**
         * 单排序规则
         * - 若不指定，则返回：`columnName=ascend|descend`
         * - 若指定，则返回：`sort=columnName.(ascend|descend)`
         */
        this.singleSort = null;
        /**
         * 是否多排序，当 `sort` 多个相同值时自动合并，建议后端支持时使用
         */
        this.multiSort = false;
        /**
         * 按钮模态框配置
         */
        this.modal = {
            paramsName: 'record',
            size: 'lg',
            exact: true,
        };
        /**
         * 按钮抽屉配置
         */
        this.drawer = {
            paramsName: 'record',
            size: 'md',
            footer: true,
            footerHeight: 55,
        };
        /**
         * 气泡确认框内容
         */
        this.popTitle = '确认删除吗？';
        /**
         * 行单击多少时长之类为双击（单位：毫秒），默认：`200`
         */
        this.rowClickTime = 200;
        /**
         * 过滤按钮确认文本，默认：`确认`
         */
        this.filterConfirmText = '确认';
        /**
         * 过滤按钮重置文本，默认：`重置`
         */
        this.filterClearText = '重置';
        /**
         * 按钮图标
         */
        this.btnIcon = {
            type: '',
            theme: 'outline',
            spin: false,
        };
        /**
         * 行号索引，默认：`1`
         * - 计算规则为：`index + noIndex`
         */
        this.noIndex = 1;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class STColumnSource {
    /**
     * @param {?} rowSource
     * @param {?} acl
     * @param {?} i18nSrv
     * @param {?} cog
     */
    constructor(rowSource, acl, i18nSrv, cog) {
        this.rowSource = rowSource;
        this.acl = acl;
        this.i18nSrv = i18nSrv;
        this.cog = cog;
    }
    /**
     * @param {?} list
     * @return {?}
     */
    btnCoerce(list) {
        if (!list)
            return [];
        /** @type {?} */
        const ret = [];
        const { modal, drawer, popTitle, btnIcon } = this.cog;
        for (const item of list) {
            if (this.acl && item.acl && !this.acl.can(item.acl)) {
                continue;
            }
            if (item.type === 'modal' || item.type === 'static') {
                // compatible
                if (item.component != null) {
                    item.modal = {
                        component: item.component,
                        params: item.params,
                        paramsName: item.paramName || modal.paramsName,
                        size: item.size || modal.size,
                        modalOptions: item.modalOptions || modal.modalOptions,
                    };
                }
                if (item.modal == null || item.modal.component == null) {
                    console.warn(`[st] Should specify modal parameter`);
                    item.type = 'none';
                }
                else {
                    item.modal = Object.assign({}, modal, item.modal);
                }
            }
            if (item.type === 'drawer') {
                if (item.drawer == null || item.drawer.component == null) {
                    console.warn(`[st] Should specify drawer parameter`);
                    item.type = 'none';
                }
                else {
                    item.drawer = Object.assign({}, drawer, item.drawer);
                }
            }
            if (item.type === 'del' && typeof item.pop === 'undefined') {
                item.pop = true;
            }
            if (item.pop === true) {
                item.popTitle = item.popTitle || popTitle;
            }
            else {
                item.pop = false;
            }
            if (item.icon) {
                item.icon = Object.assign({}, btnIcon, typeof item.icon === 'string' ? { type: item.icon } : item.icon);
            }
            item.children = item.children && item.children.length > 0 ? this.btnCoerce(item.children) : [];
            // i18n
            if (item.i18n && this.i18nSrv) {
                item.text = this.i18nSrv.fanyi(item.i18n);
            }
            ret.push(item);
        }
        this.btnCoerceIf(ret);
        return ret;
    }
    /**
     * @param {?} list
     * @return {?}
     */
    btnCoerceIf(list) {
        for (const item of list) {
            if (!item.iif)
                item.iif = () => true;
            if (!item.children) {
                item.children = [];
            }
            else {
                this.btnCoerceIf(item.children);
            }
        }
    }
    /**
     * @param {?} list
     * @return {?}
     */
    fixedCoerce(list) {
        /** @type {?} */
        const countReduce = (a, b) => a + +b.width.toString().replace('px', '');
        // left width
        list
            .filter(w => w.fixed && w.fixed === 'left' && w.width)
            .forEach((item, idx) => (item._left = list.slice(0, idx).reduce(countReduce, 0) + 'px'));
        // right width
        list
            .filter(w => w.fixed && w.fixed === 'right' && w.width)
            .reverse()
            .forEach((item, idx) => (item._right =
            (idx > 0 ? list.slice(-idx).reduce(countReduce, 0) : 0) + 'px'));
    }
    /**
     * @param {?} item
     * @return {?}
     */
    sortCoerce(item) {
        // compatible
        if (item.sorter && typeof item.sorter === 'function') {
            return {
                enabled: true,
                default: (/** @type {?} */ (item.sort)),
                compare: item.sorter,
                key: item.sortKey || item.indexKey,
                reName: item.sortReName,
            };
        }
        if (typeof item.sort === 'undefined') {
            return { enabled: false };
        }
        /** @type {?} */
        let res = {};
        if (typeof item.sort === 'string') {
            res.key = item.sort;
        }
        else if (typeof item.sort !== 'boolean') {
            res = item.sort;
        }
        if (!res.key) {
            res.key = item.indexKey;
        }
        res.enabled = true;
        return res;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    filterCoerce(item) {
        /** @type {?} */
        let res = null;
        // compatible
        if (item.filters && item.filters.length > 0) {
            res = {
                confirmText: item.filterConfirmText,
                clearText: item.filterClearText,
                default: item.filtered,
                fn: (/** @type {?} */ (item.filter)),
                icon: item.filterIcon,
                key: item.filterKey || item.indexKey,
                menus: item.filters,
                multiple: item.filterMultiple,
                reName: item.filterReName,
            };
        }
        else {
            res = item.filter;
        }
        if (res == null || res.menus.length === 0) {
            return null;
        }
        if (typeof res.multiple === 'undefined') {
            res.multiple = true;
        }
        if (!res.confirmText) {
            res.confirmText = this.cog.filterConfirmText;
        }
        if (!res.clearText) {
            res.clearText = this.cog.filterClearText;
        }
        if (!res.icon) {
            res.icon = `filter`;
        }
        if (!res.key) {
            res.key = item.indexKey;
        }
        res.default = res.menus.findIndex(w => w.checked) !== -1;
        if (this.acl) {
            res.menus = res.menus.filter(w => this.acl.can(w.acl));
        }
        if (res.menus.length <= 0) {
            res = null;
        }
        return res;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    restoreRender(item) {
        if (item.renderTitle) {
            item.__renderTitle = this.rowSource.getTitle(item.renderTitle);
        }
        if (item.render) {
            item.__render = this.rowSource.getRow(item.render);
        }
    }
    /**
     * @param {?} list
     * @return {?}
     */
    process(list) {
        if (!list || list.length === 0)
            throw new Error(`[st]: the columns property muse be define!`);
        const { noIndex } = this.cog;
        /** @type {?} */
        let checkboxCount = 0;
        /** @type {?} */
        let radioCount = 0;
        /** @type {?} */
        const columns = [];
        /** @type {?} */
        const copyColumens = (/** @type {?} */ (deepCopy(list)));
        for (const item of copyColumens) {
            if (this.acl && item.acl && !this.acl.can(item.acl)) {
                continue;
            }
            // index
            if (item.index) {
                if (!Array.isArray(item.index)) {
                    item.index = item.index.split('.');
                }
                item.indexKey = item.index.join('.');
            }
            // title
            if (item.i18n && this.i18nSrv) {
                item.title = this.i18nSrv.fanyi(item.i18n);
            }
            // no
            if (item.type === 'no') {
                item.noIndex = item.noIndex == null ? noIndex : item.noIndex;
            }
            // checkbox
            if (item.selections == null) {
                item.selections = [];
            }
            if (item.type === 'checkbox') {
                ++checkboxCount;
                if (!item.width) {
                    item.width = `${item.selections.length > 0 ? 62 : 50}px`;
                }
            }
            if (this.acl) {
                item.selections = item.selections.filter(w => this.acl.can(w.acl));
            }
            // radio
            if (item.type === 'radio') {
                ++radioCount;
                item.selections = [];
                if (!item.width) {
                    item.width = '50px';
                }
            }
            // types
            if (item.type === 'yn') {
                item.yn = Object.assign({ truth: true }, item.yn);
                // compatible
                if (item.ynTruth != null)
                    item.yn.truth = item.ynTruth;
                if (item.ynYes != null)
                    item.yn.yes = item.ynYes;
                if (item.ynNo != null)
                    item.yn.no = item.ynNo;
            }
            if ((item.type === 'link' && typeof item.click !== 'function') ||
                (item.type === 'badge' && item.badge == null) ||
                (item.type === 'tag' && item.tag == null)) {
                ((/** @type {?} */ (item))).type = '';
            }
            // className
            if (!item.className) {
                item.className = {
                    number: 'text-right',
                    currency: 'text-right',
                    date: 'text-center',
                }[item.type];
            }
            // sorter
            item._sort = this.sortCoerce(item);
            // filter
            item.filter = this.filterCoerce(item);
            // buttons
            item.buttons = this.btnCoerce(item.buttons);
            // restore custom row
            this.restoreRender(item);
            columns.push(item);
        }
        if (checkboxCount > 1) {
            throw new Error(`[st]: just only one column checkbox`);
        }
        if (radioCount > 1) {
            throw new Error(`[st]: just only one column radio`);
        }
        this.fixedCoerce(columns);
        return columns;
    }
    /**
     * @param {?} columns
     * @return {?}
     */
    restoreAllRender(columns) {
        columns.forEach(i => this.restoreRender(i));
    }
}
STColumnSource.decorators = [
    { type: Injectable }
];
/** @nocollapse */
STColumnSource.ctorParameters = () => [
    { type: STRowSource, decorators: [{ type: Host }] },
    { type: ACLService, decorators: [{ type: Optional }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [ALAIN_I18N_TOKEN,] }] },
    { type: STConfig }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class STDataSource {
    /**
     * @param {?} http
     * @param {?} currenty
     * @param {?} date
     * @param {?} yn
     * @param {?} number
     * @param {?} dom
     */
    constructor(http, currenty, date, yn, number, dom) {
        this.http = http;
        this.currenty = currenty;
        this.date = date;
        this.yn = yn;
        this.number = number;
        this.dom = dom;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    process(options) {
        return new Promise((resolvePromise, rejectPromise) => {
            /** @type {?} */
            let data$;
            /** @type {?} */
            let isRemote = false;
            const { data, res, total, page, pi, ps, columns } = options;
            /** @type {?} */
            let retTotal;
            /** @type {?} */
            let retList;
            /** @type {?} */
            let retPi;
            if (typeof data === 'string') {
                isRemote = true;
                data$ = this.getByHttp(data, options).pipe(map((result) => {
                    // list
                    /** @type {?} */
                    let ret = deepGet(result, (/** @type {?} */ (res.reName.list)), []);
                    if (ret == null || !Array.isArray(ret)) {
                        ret = [];
                    }
                    // total
                    /** @type {?} */
                    const resultTotal = res.reName.total &&
                        deepGet(result, (/** @type {?} */ (res.reName.total)), null);
                    retTotal = resultTotal == null ? total || 0 : +resultTotal;
                    return (/** @type {?} */ (ret));
                }), catchError(err => {
                    rejectPromise(err);
                    return [];
                }));
            }
            else if (Array.isArray(data)) {
                data$ = of(data);
            }
            else {
                // a cold observable
                data$ = data;
            }
            if (!isRemote) {
                data$ = data$.pipe(
                // sort
                map((result) => {
                    /** @type {?} */
                    let copyResult = result.slice(0);
                    /** @type {?} */
                    const sorterFn = this.getSorterFn(columns);
                    if (sorterFn) {
                        copyResult = copyResult.sort(sorterFn);
                    }
                    return copyResult;
                }), 
                // filter
                map((result) => {
                    columns.filter(w => w.filter).forEach(c => {
                        /** @type {?} */
                        const values = c.filter.menus.filter(w => w.checked);
                        if (values.length === 0)
                            return;
                        /** @type {?} */
                        const onFilter = c.filter.fn;
                        if (typeof onFilter !== 'function') {
                            console.warn(`[st] Muse provide the fn function in filter`);
                            return;
                        }
                        result = result.filter(record => values.some(v => onFilter(v, record)));
                    });
                    return result;
                }), 
                // paging
                map((result) => {
                    if (page.front) {
                        /** @type {?} */
                        const maxPageIndex = Math.ceil(result.length / ps);
                        retPi = Math.max(1, pi > maxPageIndex ? maxPageIndex : pi);
                        retTotal = result.length;
                        if (page.show === true) {
                            return result.slice((retPi - 1) * ps, retPi * ps);
                        }
                    }
                    return result;
                }));
            }
            // pre-process
            if (typeof res.process === 'function') {
                data$ = data$.pipe(map(result => res.process(result)));
            }
            // data accelerator
            data$ = data$.pipe(map(result => {
                for (let i = 0, len = result.length; i < len; i++) {
                    result[i]._values = columns.map(c => this.get(result[i], c, i));
                    if (options.rowClassName) {
                        result[i]._rowClassName = options.rowClassName(result[i], i);
                    }
                }
                return result;
            }));
            data$.forEach((result) => (retList = result)).then(() => {
                resolvePromise({
                    pi: retPi,
                    total: retTotal,
                    list: retList,
                    pageShow: typeof page.show === 'undefined'
                        ? (retTotal || total) > ps
                        : page.show,
                });
            });
        });
    }
    /**
     * @param {?} item
     * @param {?} col
     * @param {?} idx
     * @return {?}
     */
    get(item, col, idx) {
        if (col.format) {
            /** @type {?} */
            const formatRes = (/** @type {?} */ (col.format(item, col)));
            if (~formatRes.indexOf('<')) {
                return this.dom.bypassSecurityTrustHtml(formatRes);
            }
            return formatRes;
        }
        /** @type {?} */
        const value = deepGet(item, (/** @type {?} */ (col.index)), col.default);
        /** @type {?} */
        let ret = value;
        switch (col.type) {
            case 'no':
                ret = col.noIndex + idx;
                break;
            case 'img':
                ret = value ? `<img src="${value}" class="img">` : '';
                break;
            case 'number':
                ret = this.number.transform(value, col.numberDigits);
                break;
            case 'currency':
                ret = this.currenty.transform(value);
                break;
            case 'date':
                ret = this.date.transform(value, col.dateFormat);
                break;
            case 'yn':
                ret = this.yn.transform(value === col.yn.truth, col.yn.yes, col.yn.no);
                break;
        }
        return ret == null ? '' : ret;
    }
    /**
     * @param {?} url
     * @param {?} options
     * @return {?}
     */
    getByHttp(url, options) {
        const { req, page, pi, ps, singleSort, multiSort, columns } = options;
        /** @type {?} */
        const method = (req.method || 'GET').toUpperCase();
        /** @type {?} */
        const params = Object.assign({
            [req.reName.pi]: page.zeroIndexed ? pi - 1 : pi,
            [req.reName.ps]: ps,
        }, req.params, this.getReqSortMap(singleSort, multiSort, columns), this.getReqFilterMap(columns));
        /** @type {?} */
        let reqOptions = {
            params,
            body: req.body,
            headers: req.headers,
        };
        if (method === 'POST' && req.allInBody === true) {
            reqOptions = {
                body: Object.assign({}, req.body, params),
                headers: req.headers,
            };
        }
        return this.http.request(method, url, reqOptions);
    }
    //#region sort
    /**
     * @param {?} columns
     * @return {?}
     */
    getValidSort(columns) {
        return columns
            .filter(item => item._sort && item._sort.enabled && item._sort.default)
            .map(item => item._sort);
    }
    /**
     * @param {?} columns
     * @return {?}
     */
    getSorterFn(columns) {
        /** @type {?} */
        const sortList = this.getValidSort(columns);
        if (sortList.length === 0) {
            return;
        }
        if (typeof sortList[0].compare !== 'function') {
            console.warn(`[st] Muse provide the compare function in sort`);
            return;
        }
        return (a, b) => {
            /** @type {?} */
            const result = sortList[0].compare(a, b);
            if (result !== 0) {
                return sortList[0].default === 'descend' ? -result : result;
            }
            return 0;
        };
    }
    /**
     * @param {?} singleSort
     * @param {?} multiSort
     * @param {?} columns
     * @return {?}
     */
    getReqSortMap(singleSort, multiSort, columns) {
        /** @type {?} */
        let ret = {};
        /** @type {?} */
        const sortList = this.getValidSort(columns);
        if (!multiSort && sortList.length === 0)
            return ret;
        if (multiSort) {
            sortList.forEach(item => {
                ret[item.key] = (item.reName || {})[item.default] || item.default;
            });
            // 合并处理
            ret = {
                [multiSort.key]: Object.keys(ret)
                    .map(key => key + multiSort.nameSeparator + ret[key])
                    .join(multiSort.separator),
            };
        }
        else {
            /** @type {?} */
            const mapData = sortList[0];
            /** @type {?} */
            let sortFiled = mapData.key;
            /** @type {?} */
            let sortValue = (sortList[0].reName || {})[mapData.default] || mapData.default;
            if (singleSort) {
                sortValue = sortFiled + (singleSort.nameSeparator || '.') + sortValue;
                sortFiled = singleSort.key || 'sort';
            }
            ret[sortFiled] = sortValue;
        }
        return ret;
    }
    //#endregion
    //#region filter
    /**
     * @param {?} columns
     * @return {?}
     */
    getReqFilterMap(columns) {
        /** @type {?} */
        let ret = {};
        columns.filter(w => w.filter && w.filter.default === true).forEach(col => {
            /** @type {?} */
            const values = col.filter.menus.filter(f => f.checked === true);
            /** @type {?} */
            let obj = {};
            if (col.filter.reName) {
                obj = col.filter.reName(col.filter.menus, col);
            }
            else {
                obj[col.filter.key] = values.map(i => i.value).join(',');
            }
            ret = Object.assign(ret, obj);
        });
        return ret;
    }
}
STDataSource.decorators = [
    { type: Injectable }
];
/** @nocollapse */
STDataSource.ctorParameters = () => [
    { type: _HttpClient },
    { type: CNCurrencyPipe, decorators: [{ type: Host }] },
    { type: DatePipe, decorators: [{ type: Host }] },
    { type: YNPipe, decorators: [{ type: Host }] },
    { type: DecimalPipe, decorators: [{ type: Host }] },
    { type: DomSanitizer }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class STExport {
    /**
     * @param {?} xlsxSrv
     */
    constructor(xlsxSrv) {
        this.xlsxSrv = xlsxSrv;
    }
    /**
     * @param {?} item
     * @param {?} col
     * @return {?}
     */
    _stGet(item, col) {
        /** @type {?} */
        const ret = { t: 's', v: '' };
        if (col.format) {
            ret.v = col.format(item, col);
        }
        else {
            /** @type {?} */
            const val = deepGet(item, (/** @type {?} */ (col.index)), '');
            ret.v = val;
            switch (col.type) {
                case 'currency':
                    ret.t = 'n';
                    break;
                case 'date':
                    ret.t = 'd';
                    break;
                case 'yn':
                    ret.v = ret.v === col.ynTruth ? col.ynYes || '是' : col.ynNo || '否';
                    break;
            }
        }
        return ret;
    }
    /**
     * @param {?} opt
     * @return {?}
     */
    genSheet(opt) {
        /** @type {?} */
        const sheets = {};
        /** @type {?} */
        const sheet = (sheets[opt.sheetname || 'Sheet1'] = {});
        /** @type {?} */
        const colData = opt._c.filter(w => w.exported !== false &&
            w.index &&
            (!w.buttons || w.buttons.length === 0));
        /** @type {?} */
        const cc = colData.length;
        /** @type {?} */
        const dc = opt._d.length;
        // column
        for (let i = 0; i < cc; i++) {
            sheet[`${String.fromCharCode(65 + i)}1`] = {
                t: 's',
                v: colData[i].title,
            };
        }
        // content
        for (let i = 0; i < dc; i++) {
            for (let j = 0; j < cc; j++) {
                sheet[`${String.fromCharCode(65 + j)}${i + 2}`] = this._stGet(opt._d[i], colData[j]);
            }
        }
        if (cc > 0 && dc > 0) {
            sheet['!ref'] = `A1:${String.fromCharCode(65 + cc - 1)}${dc + 1}`;
        }
        return sheets;
    }
    /**
     * @param {?} opt
     * @return {?}
     */
    export(opt) {
        if (!this.xlsxSrv)
            throw new Error(`muse be import 'XlsxModule' module, but got null`);
        /** @type {?} */
        const sheets = this.genSheet(opt);
        return this.xlsxSrv.export({
            sheets,
            filename: opt.filename,
            callback: opt.callback,
        });
    }
}
STExport.decorators = [
    { type: Injectable }
];
/** @nocollapse */
STExport.ctorParameters = () => [
    { type: XlsxService, decorators: [{ type: Optional }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class STComponent {
    // #endregion
    /**
     * @param {?} cdRef
     * @param {?} cog
     * @param {?} router
     * @param {?} el
     * @param {?} renderer
     * @param {?} exportSrv
     * @param {?} i18nSrv
     * @param {?} modalHelper
     * @param {?} drawerHelper
     * @param {?} doc
     * @param {?} columnSource
     * @param {?} dataSource
     * @param {?} delonI18n
     */
    constructor(cdRef, cog, router, el, renderer, exportSrv, i18nSrv, modalHelper, drawerHelper, doc, columnSource, dataSource, delonI18n) {
        this.cdRef = cdRef;
        this.cog = cog;
        this.router = router;
        this.el = el;
        this.renderer = renderer;
        this.exportSrv = exportSrv;
        this.modalHelper = modalHelper;
        this.drawerHelper = drawerHelper;
        this.doc = doc;
        this.columnSource = columnSource;
        this.dataSource = dataSource;
        this.delonI18n = delonI18n;
        this.totalTpl = ``;
        this.locale = {};
        this._data = [];
        this._isPagination = true;
        this._allChecked = false;
        this._indeterminate = false;
        this._columns = [];
        /**
         * 列描述
         */
        this.columns = [];
        /**
         * 每页数量，当设置为 `0` 表示不分页，默认：`10`
         */
        this.ps = 10;
        /**
         * 当前页码
         */
        this.pi = 1;
        /**
         * 数据总量
         */
        this.total = 0;
        /**
         * 是否显示Loading
         */
        this.loading = false;
        /**
         * 延迟显示加载效果的时间（防止闪烁）
         */
        this.loadingDelay = 0;
        /**
         * 是否显示边框
         */
        this.bordered = false;
        /**
         * 单排序规则
         * - 若不指定，则返回：`columnName=ascend|descend`
         * - 若指定，则返回：`sort=columnName.(ascend|descend)`
         */
        this.singleSort = null;
        /**
         * 请求异常时回调
         */
        this.error = new EventEmitter();
        /**
         * 变化时回调，包括：`pi`、`ps`、`checkbox`、`radio`、`sort`、`filter`、`click`、`dblClick` 变动
         */
        this.change = new EventEmitter();
        /**
         * 行单击多少时长之类为双击（单位：毫秒），默认：`200`
         */
        this.rowClickTime = 200;
        this.rowClickCount = 0;
        this.delonI18n$ = this.delonI18n.change.subscribe(() => {
            this.locale = this.delonI18n.getData('st');
            if (this._columns.length > 0) {
                this.page = this.clonePage;
                this.cd();
            }
        });
        Object.assign(this, deepCopy(cog));
        if (i18nSrv) {
            this.i18n$ = i18nSrv.change
                .pipe(filter(() => this._columns.length > 0))
                .subscribe(() => this.updateColumns());
        }
    }
    /**
     * 请求体配置
     * @return {?}
     */
    get req() {
        return this._req;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set req(value) {
        const { req } = this.cog;
        /** @type {?} */
        const item = Object.assign({}, req, value);
        if (item.reName == null) {
            item.reName = deepCopy(req.reName);
        }
        this._req = item;
    }
    /**
     * 返回体配置
     * @return {?}
     */
    get res() {
        return this._res;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set res(value) {
        const { res } = this.cog;
        /** @type {?} */
        const item = Object.assign({}, res, value);
        item.reName = Object.assign({}, res.reName, item.reName);
        if (!Array.isArray(item.reName.list))
            item.reName.list = item.reName.list.split('.');
        if (!Array.isArray(item.reName.total))
            item.reName.total = item.reName.total.split('.');
        this._res = item;
    }
    /**
     * 分页器配置
     * @return {?}
     */
    get page() {
        return this._page;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set page(value) {
        this.clonePage = value;
        const { page } = this.cog;
        /** @type {?} */
        const item = Object.assign({}, deepCopy(page), value);
        const { total } = item;
        if (typeof total === 'string' && total.length) {
            this.totalTpl = total;
        }
        else if (toBoolean(total)) {
            this.totalTpl = this.locale.total;
        }
        else {
            this.totalTpl = '';
        }
        this._page = item;
    }
    /**
     * 是否多排序，当 `sort` 多个相同值时自动合并，建议后端支持时使用
     * @return {?}
     */
    get multiSort() {
        return this._multiSort;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set multiSort(value) {
        if (typeof value === 'boolean' && !toBoolean(value)) {
            this._multiSort = null;
            return;
        }
        this._multiSort = Object.assign((/** @type {?} */ ({
            key: 'sort',
            separator: '-',
            nameSeparator: '.',
        })), typeof value === 'object' ? value : {});
    }
    /**
     * @return {?}
     */
    cd() {
        this.cdRef.detectChanges();
    }
    /**
     * @param {?} total
     * @param {?} range
     * @return {?}
     */
    renderTotal(total, range) {
        return this.totalTpl
            ? this.totalTpl
                .replace('{{total}}', total)
                .replace('{{range[0]}}', range[0])
                .replace('{{range[1]}}', range[1])
            : '';
    }
    /**
     * @param {?} type
     * @param {?=} data
     * @return {?}
     */
    changeEmit(type, data) {
        /** @type {?} */
        const res = {
            type,
            pi: this.pi,
            ps: this.ps,
            total: this.total,
        };
        if (data != null) {
            res[type] = data;
        }
        this.change.emit(res);
    }
    //#region data
    /**
     * @return {?}
     */
    _load() {
        const { pi, ps, data, req, res, page, total, singleSort, multiSort, rowClassName } = this;
        this.loading = true;
        return this.dataSource
            .process({
            pi,
            ps,
            total,
            data,
            req,
            res,
            page,
            columns: this._columns,
            singleSort,
            multiSort,
            rowClassName
        })
            .then(result => {
            this.loading = false;
            if (typeof result.pi !== 'undefined') {
                this.pi = result.pi;
            }
            if (typeof result.total !== 'undefined') {
                this.total = result.total;
            }
            if (typeof result.pageShow !== 'undefined') {
                this._isPagination = result.pageShow;
            }
            this._data = result.list;
            return this._data;
        })
            .then(() => this._refCheck())
            .catch(error => {
            this.loading = false;
            this.error.emit({ type: 'req', error });
        });
    }
    /**
     * 清空所有数据
     * @param {?=} cleanStatus
     * @return {?}
     */
    clear(cleanStatus = true) {
        if (cleanStatus) {
            this.clearStatus();
        }
        this._data.length = 0;
        this.cd();
    }
    /**
     * 清空所有状态
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    clearStatus() {
        return (/** @type {?} */ (this)).clearCheck()
            .clearRadio()
            .clearFilter()
            .clearSort();
    }
    /**
     * 根据页码重新加载数据
     *
     * @param {?=} pi 指定当前页码，默认：`1`
     * @param {?=} extraParams 重新指定 `extraParams` 值
     * @param {?=} options 选项
     * @return {?}
     */
    load(pi = 1, extraParams, options) {
        if (pi !== -1)
            this.pi = pi;
        if (typeof extraParams !== 'undefined') {
            this._req.params =
                options && options.merge
                    ? Object.assign(this._req.params, extraParams)
                    : extraParams;
        }
        this._change('pi');
    }
    /**
     * 重新刷新当前页
     * @param {?=} extraParams 重新指定 `extraParams` 值
     * @param {?=} options
     * @return {?}
     */
    reload(extraParams, options) {
        this.load(-1, extraParams, options);
    }
    /**
     * 重置且重新设置 `pi` 为 `1`，包含以下值：
     * - `check` 数据
     * - `radio` 数据
     * - `sort` 数据
     * - `fileter` 数据
     *
     * @param {?=} extraParams 重新指定 `extraParams` 值
     * @param {?=} options
     * @return {?}
     */
    reset(extraParams, options) {
        this.clearStatus().load(1, extraParams, options);
    }
    /**
     * @return {?}
     */
    _toTop() {
        if (!this.page.toTop)
            return;
        /** @type {?} */
        const el = (/** @type {?} */ (this.el.nativeElement));
        if (this.scroll) {
            el.querySelector('.ant-table-body').scrollTo(0, 0);
            return;
        }
        el.scrollIntoView();
        // fix header height
        this.doc.documentElement.scrollTop -= this.page.toTopOffset;
    }
    /**
     * @param {?} type
     * @return {?}
     */
    _change(type) {
        this._load().then(() => {
            this._toTop();
        });
        this.changeEmit(type);
    }
    /**
     * @param {?} e
     * @param {?} item
     * @param {?} col
     * @return {?}
     */
    _click(e, item, col) {
        e.preventDefault();
        e.stopPropagation();
        /** @type {?} */
        const res = col.click(item, this);
        if (typeof res === 'string') {
            this.router.navigateByUrl(res);
        }
        return false;
    }
    /**
     * @param {?} e
     * @param {?} item
     * @param {?} index
     * @return {?}
     */
    _rowClick(e, item, index) {
        if (((/** @type {?} */ (e.target))).nodeName === 'INPUT')
            return;
        ++this.rowClickCount;
        if (this.rowClickCount !== 1)
            return;
        setTimeout(() => {
            /** @type {?} */
            const data = { e, item, index };
            if (this.rowClickCount === 1) {
                this.changeEmit('click', data);
            }
            else {
                this.changeEmit('dblClick', data);
            }
            this.rowClickCount = 0;
        }, this.rowClickTime);
    }
    /**
     * 移除某行数据
     * @param {?} data
     * @return {?}
     */
    removeRow(data) {
        if (!Array.isArray(data)) {
            data = [data];
        }
        ((/** @type {?} */ (data))).map(item => this._data.indexOf(item))
            .filter(pos => pos !== -1)
            .forEach(pos => this._data.splice(pos, 1));
        this.cd();
    }
    //#endregion
    //#region sort
    /**
     * @param {?} col
     * @param {?} idx
     * @param {?} value
     * @return {?}
     */
    sort(col, idx, value) {
        if (this.multiSort) {
            col._sort.default = value;
        }
        else {
            this._columns.forEach((item, index) => (item._sort.default = index === idx ? value : null));
        }
        this._load();
        /** @type {?} */
        const res = {
            value,
            map: this.dataSource.getReqSortMap(this.singleSort, this.multiSort, this._columns),
            column: col,
        };
        this.changeEmit('sort', res);
    }
    /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    clearSort() {
        (/** @type {?} */ (this))._columns.forEach(item => (item._sort.default = null));
        return (/** @type {?} */ (this));
    }
    //#endregion
    //#region filter
    /**
     * @param {?} col
     * @return {?}
     */
    handleFilter(col) {
        col.filter.default = col.filter.menus.findIndex(w => w.checked) !== -1;
        this._load();
        this.changeEmit('filter', col);
    }
    /**
     * @param {?} col
     * @return {?}
     */
    _filterConfirm(col) {
        this.handleFilter(col);
    }
    /**
     * @param {?} col
     * @return {?}
     */
    _filterClear(col) {
        col.filter.menus.forEach(i => (i.checked = false));
        this.handleFilter(col);
    }
    /**
     * @param {?} col
     * @param {?} item
     * @param {?} checked
     * @return {?}
     */
    _filterRadio(col, item, checked) {
        col.filter.menus.forEach(i => (i.checked = false));
        item.checked = checked;
    }
    /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    clearFilter() {
        (/** @type {?} */ (this))._columns
            .filter(w => w.filter && w.filter.default === true)
            .forEach(col => {
            col.filter.default = false;
            col.filter.menus.forEach(f => (f.checked = false));
        });
        return (/** @type {?} */ (this));
    }
    //#endregion
    //#region checkbox
    /**
     * 清除所有 `checkbox`
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    clearCheck() {
        return (/** @type {?} */ (this))._checkAll(false);
    }
    /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    _refCheck() {
        /** @type {?} */
        const validData = (/** @type {?} */ (this))._data.filter(w => !w.disabled);
        /** @type {?} */
        const checkedList = validData.filter(w => w.checked === true);
        (/** @type {?} */ (this))._allChecked =
            checkedList.length > 0 && checkedList.length === validData.length;
        /** @type {?} */
        const allUnChecked = validData.every(value => !value.checked);
        (/** @type {?} */ (this))._indeterminate = !(/** @type {?} */ (this))._allChecked && !allUnChecked;
        (/** @type {?} */ (this)).cd();
        return (/** @type {?} */ (this));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?=} checked
     * @return {THIS}
     */
    _checkAll(checked) {
        checked = typeof checked === 'undefined' ? (/** @type {?} */ (this))._allChecked : checked;
        (/** @type {?} */ (this))._data.filter(w => !w.disabled).forEach(i => (i.checked = checked));
        return (/** @type {?} */ (this))._refCheck()._checkNotify();
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} i
     * @param {?} value
     * @return {THIS}
     */
    _checkSelection(i, value) {
        i.checked = value;
        return (/** @type {?} */ (this))._refCheck()._checkNotify();
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} row
     * @return {THIS}
     */
    _rowSelection(row) {
        row.select((/** @type {?} */ (this))._data);
        return (/** @type {?} */ (this))._refCheck()._checkNotify();
    }
    /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    _checkNotify() {
        /** @type {?} */
        const res = (/** @type {?} */ (this))._data.filter(w => !w.disabled && w.checked === true);
        (/** @type {?} */ (this)).changeEmit('checkbox', res);
        return (/** @type {?} */ (this));
    }
    //#endregion
    //#region radio
    /**
     * 清除所有 `radio`
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    clearRadio() {
        (/** @type {?} */ (this))._data.filter(w => w.checked).forEach(item => (item.checked = false));
        (/** @type {?} */ (this)).changeEmit('radio', null);
        return (/** @type {?} */ (this));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} checked
     * @param {?} item
     * @return {THIS}
     */
    _refRadio(checked, item) {
        // if (item.disabled === true) return;
        (/** @type {?} */ (this))._data.filter(w => !w.disabled).forEach(i => (i.checked = false));
        item.checked = checked;
        (/** @type {?} */ (this)).changeEmit('radio', item);
        return (/** @type {?} */ (this));
    }
    //#endregion
    //#region buttons
    /**
     * @param {?} e
     * @param {?} record
     * @param {?} btn
     * @return {?}
     */
    _btnClick(e, record, btn) {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        if (btn.type === 'modal' || btn.type === 'static') {
            /** @type {?} */
            const obj = {};
            const { modal } = btn;
            obj[modal.paramsName] = record;
            /** @type {?} */
            const options = Object.assign({}, modal);
            ((/** @type {?} */ (this.modalHelper[btn.type === 'modal' ? 'create' : 'createStatic'])))(modal.component, Object.assign(obj, modal.params && modal.params(record)), options)
                .pipe(filter(w => typeof w !== 'undefined'))
                .subscribe(res => this.btnCallback(record, btn, res));
            return;
        }
        else if (btn.type === 'drawer') {
            /** @type {?} */
            const obj = {};
            const { drawer } = btn;
            obj[drawer.paramsName] = record;
            this.drawerHelper
                .create(drawer.title, drawer.component, Object.assign(obj, drawer.params && drawer.params(record)), Object.assign({}, drawer))
                .pipe(filter(w => typeof w !== 'undefined'))
                .subscribe(res => this.btnCallback(record, btn, res));
            return;
        }
        else if (btn.type === 'link') {
            /** @type {?} */
            const clickRes = this.btnCallback(record, btn);
            if (typeof clickRes === 'string') {
                this.router.navigateByUrl(clickRes);
            }
            return;
        }
        this.btnCallback(record, btn);
    }
    /**
     * @param {?} record
     * @param {?} btn
     * @param {?=} modal
     * @return {?}
     */
    btnCallback(record, btn, modal) {
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
    }
    /**
     * @param {?} record
     * @param {?} btn
     * @return {?}
     */
    _btnText(record, btn) {
        if (btn.format)
            return btn.format(record, btn);
        return btn.text || '';
    }
    /**
     * @param {?} item
     * @param {?} col
     * @return {?}
     */
    _validBtns(item, col) {
        return col.buttons.filter(btn => btn.iif(item, btn, col));
    }
    //#endregion
    //#region export
    /**
     * 导出当前页，确保已经注册 `XlsxModule`
     * @param {?=} newData 重新指定数据，例如希望导出所有数据非常有用
     * @param {?=} opt 额外参数
     * @return {?}
     */
    export(newData, opt) {
        (newData ? of(newData) : of(this._data)).subscribe((res) => this.exportSrv.export(Object.assign({}, opt, (/** @type {?} */ ({
            _d: res,
            _c: this._columns,
        })))));
    }
    //#endregion
    /**
     * @return {?}
     */
    updateColumns() {
        this._columns = this.columnSource.process(this.columns);
    }
    /**
     * @return {?}
     */
    setClass() {
        updateHostClass(this.el.nativeElement, this.renderer, {
            [`st`]: true,
            [`st__p-${this.page.placement}`]: this.page.placement,
            [`ant-table-rep__hide-header-footer`]: this.responsiveHideHeaderFooter,
        });
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.columnSource.restoreAllRender(this._columns);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.columns) {
            this.updateColumns();
        }
        if (changes.data && changes.data.currentValue) {
            this._load();
        }
        this.setClass();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.delonI18n$.unsubscribe();
        if (this.i18n$)
            this.i18n$.unsubscribe();
    }
}
STComponent.decorators = [
    { type: Component, args: [{
                selector: 'st',
                template: "<ng-template #btnTpl let-i let-btn=\"btn\" let-sub=\"sub\">\n  <nz-popconfirm *ngIf=\"btn.pop === true\" [nzTitle]=\"btn.popTitle\" (nzOnConfirm)=\"_btnClick($event, i, btn)\">\n    <a *ngIf=\"!sub\" nz-popconfirm>\n      <ng-template [ngTemplateOutlet]=\"btnTextTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n    </a>\n    <span *ngIf=\"sub\" nz-popconfirm>\n      <ng-template [ngTemplateOutlet]=\"btnTextTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n    </span>\n  </nz-popconfirm>\n  <ng-container *ngIf=\"btn.pop !== true\">\n    <a *ngIf=\"!sub\" (click)=\"_btnClick($event, i, btn)\">\n      <ng-template [ngTemplateOutlet]=\"btnTextTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n    </a>\n    <span *ngIf=\"sub\" (click)=\"_btnClick($event, i, btn)\">\n      <ng-template [ngTemplateOutlet]=\"btnTextTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n    </span>\n  </ng-container>\n</ng-template>\n<ng-template #btnTextTpl let-i let-btn=\"btn\">\n  <i *ngIf=\"btn.icon\" nz-icon [type]=\"btn.icon.type\" [theme]=\"btn.icon.theme\" [spin]=\"btn.icon.spin\" [twoToneColor]=\"btn.icon.twoToneColor\" [iconfont]=\"btn.icon.iconfont\"></i>\n  <span [innerHTML]=\"_btnText(i, btn)\" [ngClass]=\"{'pl-xs': btn.icon}\"></span>\n</ng-template>\n<nz-table [nzData]=\"_data\"\n  [(nzPageIndex)]=\"pi\" (nzPageIndexChange)=\"_change('pi')\"\n  [(nzPageSize)]=\"ps\" (nzPageSizeChange)=\"_change('ps')\"\n  [nzTotal]=\"total\"\n  [nzShowPagination]=\"_isPagination\"\n  [nzFrontPagination]=\"false\"\n  [nzBordered]=\"bordered\"\n  [nzSize]=\"size\"\n  [nzLoading]=\"loading\"\n  [nzLoadingDelay]=\"loadingDelay\"\n  [nzScroll]=\"scroll\"\n  [nzTitle]=\"header\" [nzFooter]=\"footer\" [nzNoResult]=\"noResult\"\n  [nzPageSizeOptions]=\"page.pageSizes\"\n  [nzShowQuickJumper]=\"page.showQuickJumper\"\n  [nzShowSizeChanger]=\"page.showSize\"\n  [nzShowTotal]=\"totalTpl\">\n  <thead class=\"st__head\">\n    <tr>\n      <th *ngIf=\"expand\" [nzShowExpand]=\"expand\"></th>\n      <th *ngFor=\"let c of _columns; let index=index\" [nzWidth]=\"c.width\" [nzLeft]=\"c._left\" [nzRight]=\"c._right\" [ngClass]=\"c.className\"\n        [attr.colspan]=\"c.colSpan\" [attr.data-col]=\"c.indexKey\"\n        [nzShowSort]=\"c._sort.enabled\" [nzSort]=\"c._sort.default\" (nzSortChange)=\"sort(c, index, $event)\"\n        nzCustomFilter>\n        <ng-template #renderTitle [ngTemplateOutlet]=\"c.__renderTitle\" [ngTemplateOutletContext]=\"{$implicit: c, index: index }\"></ng-template>\n        <ng-container *ngIf=\"!c.__renderTitle; else renderTitle\">\n          <ng-container [ngSwitch]=\"c.type\">\n            <ng-container *ngSwitchCase=\"'checkbox'\">\n              <label nz-checkbox class=\"st__checkall\" [(ngModel)]=\"_allChecked\" [nzIndeterminate]=\"_indeterminate\" (ngModelChange)=\"_checkAll()\"></label>\n              <nz-dropdown *ngIf=\"c.selections.length\" class=\"st__selection\">\n                <span nz-dropdown>\n                  <i nz-icon type=\"down\"></i>\n                </span>\n                <ul nz-menu>\n                  <li nz-menu-item *ngFor=\"let rw of c.selections\" (click)=\"_rowSelection(rw)\" [innerHTML]=\"rw.text\">\n                  </li>\n                </ul>\n              </nz-dropdown>\n            </ng-container>\n            <ng-container *ngSwitchDefault>\n              <span [innerHTML]=\"c.title\"></span>\n            </ng-container>\n          </ng-container>\n          <nz-dropdown *ngIf=\"c.filter\"\n            class=\"st__filter\" nzTrigger=\"click\" [hasFilterButton]=\"true\" [nzClickHide]=\"false\"\n            [(nzVisible)]=\"c.filter.visible\">\n            <i nz-icon [type]=\"c.filter.icon\" theme=\"fill\"\n              [class.ant-table-filter-selected]=\"c.filter.default\"\n              [class.ant-table-filter-open]=\"c.filter.visible\" nz-dropdown></i>\n            <ul nz-menu>\n              <ng-container *ngIf=\"c.filter.multiple\">\n                <li nz-menu-item *ngFor=\"let filter of c.filter.menus\">\n                  <label nz-checkbox [(ngModel)]=\"filter.checked\">{{filter.text}}</label>\n                </li>\n              </ng-container>\n              <ng-container *ngIf=\"!c.filter.multiple\">\n                <li nz-menu-item *ngFor=\"let filter of c.filter.menus\">\n                  <label nz-radio [ngModel]=\"filter.checked\" (ngModelChange)=\"_filterRadio(c, filter, $event)\">{{filter.text}}</label>\n                </li>\n              </ng-container>\n            </ul>\n            <div class=\"ant-table-filter-dropdown-btns\">\n              <a class=\"ant-table-filter-dropdown-link confirm\" (click)=\"c.filter.visible = false\">\n                <span (click)=\"_filterConfirm(c)\">{{c.filter.confirmText}}</span>\n              </a>\n              <a class=\"ant-table-filter-dropdown-link clear\" (click)=\"c.filter.visible = false\">\n                <span (click)=\"_filterClear(c)\">{{c.filter.clearText}}</span>\n              </a>\n            </div>\n          </nz-dropdown>\n        </ng-container>\n      </th>\n    </tr>\n  </thead>\n  <tbody class=\"st__body\">\n    <ng-container *ngFor=\"let i of _data; let index=index\">\n      <tr [attr.data-index]=\"index\" (click)=\"_rowClick($event, i, index)\" [class]=\"i._rowClassName\">\n        <td *ngIf=\"expand\" [nzShowExpand]=\"expand\" [(nzExpand)]=\"i.expand\"></td>\n        <td *ngFor=\"let c of _columns; let cIdx=index\" [nzLeft]=\"c._left\" [nzRight]=\"c._right\" [nzCheckbox]=\"c.type === 'checkbox'\" [ngClass]=\"c.className\"\n          [attr.colspan]=\"c.colSpan\">\n          <span class=\"ant-table-rep__title\" [innerHTML]=\"c.title\"></span>\n          <span>\n            <ng-template #render [ngTemplateOutlet]=\"c.__render\" [ngTemplateOutletContext]=\"{$implicit: i, index: index, column: c }\"></ng-template>\n            <ng-container *ngIf=\"!c.__render; else render\">\n              <ng-container [ngSwitch]=\"c.type\">\n                <label *ngSwitchCase=\"'checkbox'\" nz-checkbox [nzDisabled]=\"i.disabled\" [ngModel]=\"i.checked\" (ngModelChange)=\"_checkSelection(i, $event)\"></label>\n                <label *ngSwitchCase=\"'radio'\" nz-radio [nzDisabled]=\"i.disabled\" [ngModel]=\"i.checked\" (ngModelChange)=\"_refRadio($event, i)\"></label>\n                <a *ngSwitchCase=\"'link'\" (click)=\"_click($event, i, c)\" [innerHTML]=\"i._values[cIdx]\"></a>\n                <nz-tag *ngSwitchCase=\"'tag'\" [nzColor]=\"c.tag[i._values[cIdx]].color\">{{c.tag[i._values[cIdx]].text || i._values[cIdx]}}</nz-tag>\n                <nz-badge *ngSwitchCase=\"'badge'\" [nzStatus]=\"c.badge[i._values[cIdx]].color\" [nzText]=\"c.badge[i._values[cIdx]].text || i._values[cIdx]\"></nz-badge>\n                <span *ngSwitchDefault [innerHTML]=\"i._values[cIdx]\"></span>\n              </ng-container>\n              <ng-container *ngFor=\"let btn of _validBtns(i, c); let last=last\">\n                <nz-dropdown *ngIf=\"btn.children.length > 0\">\n                  <a class=\"ant-dropdown-link\" nz-dropdown>\n                    <span [innerHTML]=\"_btnText(i, btn)\"></span>\n                    <i nz-icon type=\"down\"></i>\n                  </a>\n                  <ul nz-menu>\n                    <ng-container *ngFor=\"let subBtn of btn.children\">\n                      <li nz-menu-item *ngIf=\"subBtn.iif(i, subBtn, c)\">\n                        <ng-template [ngTemplateOutlet]=\"btnTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: subBtn, sub: true }\"></ng-template>\n                      </li>\n                    </ng-container>\n                  </ul>\n                </nz-dropdown>\n                <ng-container *ngIf=\"btn.children.length == 0\">\n                  <ng-template [ngTemplateOutlet]=\"btnTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn, sub: false }\"></ng-template>\n                </ng-container>\n                <nz-divider *ngIf=\"!last\" nzType=\"vertical\"></nz-divider>\n              </ng-container>\n              <ng-template [ngIf]=\"!c.__renderExpanded\" [ngTemplateOutlet]=\"c.__renderExpanded\" [ngTemplateOutletContext]=\"{$implicit: i, index: index, column: c }\"></ng-template>\n            </ng-container>\n          </span>\n        </td>\n      </tr>\n      <tr [nzExpand]=\"i.expand\">\n        <td></td>\n        <td [attr.colspan]=\"_columns.length\">\n          <ng-template [ngTemplateOutlet]=\"expand\" [ngTemplateOutletContext]=\"{$implicit: i, index: index }\"></ng-template>\n        </td>\n      </tr>\n    </ng-container>\n    <ng-template [ngIf]=\"!loading\" [ngTemplateOutlet]=\"body\"></ng-template>\n  </tbody>\n  <ng-template #totalTpl let-range=\"range\" let-total>{{ renderTotal(total, range) }}</ng-template>\n</nz-table>\n",
                providers: [
                    STDataSource,
                    STRowSource,
                    STColumnSource,
                    STExport,
                    CNCurrencyPipe,
                    DatePipe,
                    YNPipe,
                    DecimalPipe,
                ],
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
STComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: STConfig },
    { type: Router },
    { type: ElementRef },
    { type: Renderer2 },
    { type: STExport },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [ALAIN_I18N_TOKEN,] }] },
    { type: ModalHelper },
    { type: DrawerHelper },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: STColumnSource },
    { type: STDataSource },
    { type: DelonLocaleService }
];
STComponent.propDecorators = {
    data: [{ type: Input }],
    req: [{ type: Input }],
    res: [{ type: Input }],
    columns: [{ type: Input }],
    ps: [{ type: Input }],
    pi: [{ type: Input }],
    total: [{ type: Input }],
    page: [{ type: Input }],
    loading: [{ type: Input }],
    loadingDelay: [{ type: Input }],
    bordered: [{ type: Input }],
    size: [{ type: Input }],
    scroll: [{ type: Input }],
    singleSort: [{ type: Input }],
    multiSort: [{ type: Input }],
    rowClassName: [{ type: Input }],
    header: [{ type: Input }],
    footer: [{ type: Input }],
    body: [{ type: Input }],
    expand: [{ type: Input }],
    noResult: [{ type: Input }],
    widthConfig: [{ type: Input }],
    error: [{ type: Output }],
    change: [{ type: Output }],
    rowClickTime: [{ type: Input }],
    responsiveHideHeaderFooter: [{ type: Input }]
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
    InputBoolean(),
    __metadata("design:type", Object)
], STComponent.prototype, "loading", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], STComponent.prototype, "loadingDelay", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], STComponent.prototype, "bordered", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], STComponent.prototype, "rowClickTime", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], STComponent.prototype, "responsiveHideHeaderFooter", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [STComponent, STRowDirective];
class STModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: STModule, providers: [STConfig] };
    }
}
STModule.decorators = [
    { type: NgModule, args: [{
                schemas: [NO_ERRORS_SCHEMA],
                imports: [
                    CommonModule,
                    FormsModule,
                    DelonUtilModule,
                    DelonACLModule,
                    NgZorroAntdModule,
                ],
                declarations: [...COMPONENTS],
                exports: [...COMPONENTS],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { STComponent, STRowDirective, STConfig, STModule, STColumnSource, STDataSource, STExport, STRowSource as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BkZWxvbi9hYmMvdGFibGUvdGFibGUtcm93LmRpcmVjdGl2ZS50cyIsIm5nOi8vQGRlbG9uL2FiYy90YWJsZS90YWJsZS5jb25maWcudHMiLCJuZzovL0BkZWxvbi9hYmMvdGFibGUvdGFibGUtY29sdW1uLXNvdXJjZS50cyIsIm5nOi8vQGRlbG9uL2FiYy90YWJsZS90YWJsZS1kYXRhLXNvdXJjZS50cyIsIm5nOi8vQGRlbG9uL2FiYy90YWJsZS90YWJsZS1leHBvcnQudHMiLCJuZzovL0BkZWxvbi9hYmMvdGFibGUvdGFibGUuY29tcG9uZW50LnRzIiwibmc6Ly9AZGVsb24vYWJjL3RhYmxlL3RhYmxlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBUZW1wbGF0ZVJlZixcbiAgT25Jbml0LFxuICBJbmplY3RhYmxlLFxuICBIb3N0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNUUm93U291cmNlIHtcbiAgcHJpdmF0ZSB0aXRsZXM6IHsgW2tleTogc3RyaW5nXTogVGVtcGxhdGVSZWY8YW55PiB9ID0ge307XG4gIHByaXZhdGUgcm93czogeyBba2V5OiBzdHJpbmddOiBUZW1wbGF0ZVJlZjxhbnk+IH0gPSB7fTtcblxuICBhZGQodHlwZTogc3RyaW5nLCBwYXRoOiBzdHJpbmcsIHJlZjogVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIHRoaXNbdHlwZSA9PT0gJ3RpdGxlJyA/ICd0aXRsZXMnIDogJ3Jvd3MnXVtwYXRoXSA9IHJlZjtcbiAgfVxuXG4gIGdldFRpdGxlKHBhdGg6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnRpdGxlc1twYXRoXTtcbiAgfVxuXG4gIGdldFJvdyhwYXRoOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yb3dzW3BhdGhdO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tzdC1yb3ddJyB9KVxuZXhwb3J0IGNsYXNzIFNUUm93RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCdzdC1yb3cnKVxuICBpZDogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHR5cGU6ICd0aXRsZSc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWY6IFRlbXBsYXRlUmVmPGFueT4sXG4gICAgQEhvc3QoKSBwcml2YXRlIHNvdXJjZTogU1RSb3dTb3VyY2UsXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNvdXJjZS5hZGQodGhpcy50eXBlLCB0aGlzLmlkLCB0aGlzLnJlZik7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIFNUTXVsdGlTb3J0LFxuICBTVFJlcSxcbiAgU1RSZXMsXG4gIFNUUGFnZSxcbiAgU1RDb2x1bW5CdXR0b25Nb2RhbENvbmZpZyxcbiAgU1RDb2x1bW5CdXR0b25EcmF3ZXJDb25maWcsXG4gIFNUSWNvbixcbiAgU1RSb3dDbGFzc05hbWUsXG4gIFNUU2luZ2xlU29ydCxcbn0gZnJvbSAnLi90YWJsZS5pbnRlcmZhY2VzJztcblxuZXhwb3J0IGNsYXNzIFNUQ29uZmlnIHtcbiAgLyoqXG4gICAqIMOowrXCt8OlwqfCi8OpwqHCtcOnwqDCgcOvwrzCjMOpwrvCmMOowq7CpMOkwrjCusOvwrzCmmAxYFxuICAgKi9cbiAgcGk/OiBudW1iZXI7XG4gIC8qKlxuICAgKiDDpsKvwo/DqcKhwrXDpsKVwrDDqcKHwo/Dr8K8wozDpcK9wpPDqMKuwr7Dp8K9wq7DpMK4wrogYDBgIMOowqHCqMOnwqTCusOkwrjCjcOlwojChsOpwqHCtcOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmAxMGBcbiAgICovXG4gIHBzPzogbnVtYmVyO1xuICAvKipcbiAgICogw6bCmMKvw6XCkMKmw6bCmMK+w6fCpMK6w6jCvsK5w6bCocKGXG4gICAqL1xuICBib3JkZXJlZD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiB0YWJsZcOlwqTCp8OlwrDCj1xuICAgKi9cbiAgc2l6ZT86ICdzbWFsbCcgfCAnbWlkZGxlJyB8ICdkZWZhdWx0JyA9ICdkZWZhdWx0JztcbiAgLyoqXG4gICAqIMOmwpjCr8OlwpDCpsOpwprCkMOowpfCj8OlwqTCtMOlwpLCjMOlwrDCvsOvwrzCjMOlwr3Ck8OlwrDCj8OlwrHCj8OlwrnClcOkwrjCi8OmwonCjcOmwpjCvsOnwqTCusOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmBmYWxzZWBcbiAgICovXG4gIHJlc3BvbnNpdmVIaWRlSGVhZGVyRm9vdGVyPyA9IGZhbHNlO1xuICAvKiogw6jCr8K3w6bCscKCw6TCvcKTw6nChcKNw6fCvcKuICovXG4gIHJlcT86IFNUUmVxID0ge1xuICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgYWxsSW5Cb2R5OiBmYWxzZSxcbiAgICByZU5hbWU6IHsgcGk6ICdwaScsIHBzOiAncHMnIH0sXG4gIH07XG4gIC8qKiDDqMK/wpTDpcKbwp7DpMK9wpPDqcKFwo3Dp8K9wq4gKi9cbiAgcmVzPzogU1RSZXMgPSB7XG4gICAgcmVOYW1lOiB7IGxpc3Q6IFsnbGlzdCddLCB0b3RhbDogWyd0b3RhbCddIH0sXG4gIH07XG4gIC8qKiDDqMK/wpTDpcKbwp7DpMK9wpPDqcKFwo3Dp8K9wq4gKi9cbiAgcGFnZT86IFNUUGFnZSA9IHtcbiAgICBmcm9udDogdHJ1ZSxcbiAgICB6ZXJvSW5kZXhlZDogZmFsc2UsXG4gICAgcGxhY2VtZW50OiAncmlnaHQnLFxuICAgIHNob3c6IHRydWUsXG4gICAgc2hvd1NpemU6IGZhbHNlLFxuICAgIHBhZ2VTaXplczogWzEwLCAyMCwgMzAsIDQwLCA1MF0sXG4gICAgc2hvd1F1aWNrSnVtcGVyOiBmYWxzZSxcbiAgICB0b3RhbDogdHJ1ZSxcbiAgICBpbmRleFJlc2V0OiB0cnVlLFxuICAgIHRvVG9wOiB0cnVlLFxuICAgIHRvVG9wT2Zmc2V0OiAxMDAsXG4gIH07XG4gIC8qKlxuICAgKiDDqcKHwo3DpcKRwr3DpcKQwo3DpsKOwpLDpcK6wo/DpcKAwrzDr8K8woxgY29sdW1uc2Agw6fCmsKEw6nCh8KNw6XCkcK9w6XCkMKNw6nCq8KYw6TCusKOw6XCscKew6bCgMKnXG4gICAqL1xuICBzb3J0UmVOYW1lPzogeyBhc2NlbmQ/OiBzdHJpbmc7IGRlc2NlbmQ/OiBzdHJpbmcgfTtcbiAgLyoqXG4gICAqIMOlwo3ClcOmwo7CksOlwrrCj8OowqfChMOlwojCmVxuICAgKiAtIMOowovCpcOkwrjCjcOmwozCh8Olwq7CmsOvwrzCjMOlwojCmcOowr/ClMOlwpvCnsOvwrzCmmBjb2x1bW5OYW1lPWFzY2VuZHxkZXNjZW5kYFxuICAgKiAtIMOowovCpcOmwozCh8Olwq7CmsOvwrzCjMOlwojCmcOowr/ClMOlwpvCnsOvwrzCmmBzb3J0PWNvbHVtbk5hbWUuKGFzY2VuZHxkZXNjZW5kKWBcbiAgICovXG4gIHNpbmdsZVNvcnQ/OiBTVFNpbmdsZVNvcnQgPSBudWxsO1xuICAvKipcbiAgICogw6bCmMKvw6XCkMKmw6XCpMKaw6bCjsKSw6XCusKPw6/CvMKMw6XCvcKTIGBzb3J0YCDDpcKkwprDpMK4wqrDp8KbwrjDpcKQwozDpcKAwrzDpsKXwrbDqMKHwqrDpcKKwqjDpcKQwojDpcK5wrbDr8K8wozDpcK7wrrDqMKuwq7DpcKQwo7Dp8Krwq/DpsKUwq/DpsKMwoHDpsKXwrbDpMK9wr/Dp8KUwqhcbiAgICovXG4gIG11bHRpU29ydD86IGJvb2xlYW4gfCBTVE11bHRpU29ydCA9IGZhbHNlO1xuICAvKipcbiAgICogw6bCjMKJw6nCksKuw6bCqMKhw6bCgMKBw6bCocKGw6nChcKNw6fCvcKuXG4gICAqL1xuICBtb2RhbD86IFNUQ29sdW1uQnV0dG9uTW9kYWxDb25maWcgPSB7XG4gICAgcGFyYW1zTmFtZTogJ3JlY29yZCcsXG4gICAgc2l6ZTogJ2xnJyxcbiAgICBleGFjdDogdHJ1ZSxcbiAgfTtcbiAgLyoqXG4gICAqIMOmwozCicOpwpLCrsOmworCvcOlwrHCicOpwoXCjcOnwr3CrlxuICAgKi9cbiAgZHJhd2VyPzogU1RDb2x1bW5CdXR0b25EcmF3ZXJDb25maWcgPSB7XG4gICAgcGFyYW1zTmFtZTogJ3JlY29yZCcsXG4gICAgc2l6ZTogJ21kJyxcbiAgICBmb290ZXI6IHRydWUsXG4gICAgZm9vdGVySGVpZ2h0OiA1NSxcbiAgfTtcbiAgLyoqXG4gICAqIMOmwrDClMOmwrPCocOnwqHCrsOowq7CpMOmwqHChsOlwobChcOlwq7CuVxuICAgKi9cbiAgcG9wVGl0bGU/ID0gJ8OnwqHCrsOowq7CpMOlwojCoMOpwpnCpMOlwpDCl8OvwrzCnyc7XG4gIC8qKlxuICAgKiDDqMKhwozDpcKNwpXDpcKHwrvDpcKkwprDpcKwwpHDpsKXwrbDqcKVwr/DpMK5wovDp8KxwrvDpMK4wrrDpcKPwozDpcKHwrvDr8K8wojDpcKNwpXDpMK9wo3Dr8K8wprDpsKvwqvDp8KnwpLDr8K8wonDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgMjAwYFxuICAgKi9cbiAgcm93Q2xpY2tUaW1lPyA9IDIwMDtcbiAgLyoqXG4gICAqIMOowr/Ch8OmwrvCpMOmwozCicOpwpLCrsOnwqHCrsOowq7CpMOmwpbCh8OmwpzCrMOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmDDp8Khwq7DqMKuwqRgXG4gICAqL1xuICBmaWx0ZXJDb25maXJtVGV4dD8gPSAnw6fCocKuw6jCrsKkJztcbiAgLyoqXG4gICAqIMOowr/Ch8OmwrvCpMOmwozCicOpwpLCrsOpwofCjcOnwr3CrsOmwpbCh8OmwpzCrMOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmDDqcKHwo3Dp8K9wq5gXG4gICAqL1xuICBmaWx0ZXJDbGVhclRleHQ/ID0gJ8OpwofCjcOnwr3Cric7XG4gIC8qKlxuICAgKiDDpsKMwonDqcKSwq7DpcKbwr7DpsKgwodcbiAgICovXG4gIGJ0bkljb24/OiBTVEljb24gPSB7XG4gICAgdHlwZTogJycsXG4gICAgdGhlbWU6ICdvdXRsaW5lJyxcbiAgICBzcGluOiBmYWxzZSxcbiAgfTtcbiAgLyoqXG4gICAqIMOowqHCjMOlwo/Ct8OnwrTCosOlwrzClcOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmAxYFxuICAgKiAtIMOowq7CocOnwq7Cl8OowqfChMOlwojCmcOkwrjCusOvwrzCmmBpbmRleCArIG5vSW5kZXhgXG4gICAqL1xuICBub0luZGV4PyA9IDE7XG4gIC8qKlxuICAgKiDDqMKhwqjDpsKgwrzDqMKhwozDp8KawoTDp8KxwrvDpcKQwo1cbiAgICovXG4gIHJvd0NsYXNzTmFtZT86IFNUUm93Q2xhc3NOYW1lO1xufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwsIEluamVjdCwgSG9zdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQUNMU2VydmljZSB9IGZyb20gJ0BkZWxvbi9hY2wnO1xuaW1wb3J0IHsgQUxBSU5fSTE4Tl9UT0tFTiwgQWxhaW5JMThOU2VydmljZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBkZWVwQ29weSB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuaW1wb3J0IHtcbiAgU1RDb2x1bW4sXG4gIFNUQ29sdW1uQnV0dG9uLFxuICBTVENvbHVtblNvcnQsXG4gIFNUQ29sdW1uRmlsdGVyLFxufSBmcm9tICcuL3RhYmxlLmludGVyZmFjZXMnO1xuaW1wb3J0IHsgU1RSb3dTb3VyY2UgfSBmcm9tICcuL3RhYmxlLXJvdy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU1RDb25maWcgfSBmcm9tICcuL3RhYmxlLmNvbmZpZyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RTb3J0TWFwIGV4dGVuZHMgU1RDb2x1bW5Tb3J0IHtcbiAgLyoqIMOmwpjCr8OlwpDCpsOlwpDCr8OnwpTCqMOmwo7CksOlwrrCjyAqL1xuICBlbmFibGVkPzogYm9vbGVhbjtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNUQ29sdW1uU291cmNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgQEhvc3QoKSBwcml2YXRlIHJvd1NvdXJjZTogU1RSb3dTb3VyY2UsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBhY2w6IEFDTFNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KEFMQUlOX0kxOE5fVE9LRU4pXG4gICAgcHJpdmF0ZSBpMThuU3J2OiBBbGFpbkkxOE5TZXJ2aWNlLFxuICAgIHByaXZhdGUgY29nOiBTVENvbmZpZyxcbiAgKSB7fVxuXG4gIHByaXZhdGUgYnRuQ29lcmNlKGxpc3Q6IFNUQ29sdW1uQnV0dG9uW10pOiBTVENvbHVtbkJ1dHRvbltdIHtcbiAgICBpZiAoIWxpc3QpIHJldHVybiBbXTtcbiAgICBjb25zdCByZXQ6IFNUQ29sdW1uQnV0dG9uW10gPSBbXTtcbiAgICBjb25zdCB7IG1vZGFsLCBkcmF3ZXIsIHBvcFRpdGxlLCBidG5JY29uIH0gPSB0aGlzLmNvZztcblxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBsaXN0KSB7XG4gICAgICBpZiAodGhpcy5hY2wgJiYgaXRlbS5hY2wgJiYgIXRoaXMuYWNsLmNhbihpdGVtLmFjbCkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdtb2RhbCcgfHwgaXRlbS50eXBlID09PSAnc3RhdGljJykge1xuICAgICAgICAvLyBjb21wYXRpYmxlXG4gICAgICAgIGlmIChpdGVtLmNvbXBvbmVudCAhPSBudWxsKSB7XG4gICAgICAgICAgaXRlbS5tb2RhbCA9IHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogaXRlbS5jb21wb25lbnQsXG4gICAgICAgICAgICBwYXJhbXM6IGl0ZW0ucGFyYW1zLFxuICAgICAgICAgICAgcGFyYW1zTmFtZTogaXRlbS5wYXJhbU5hbWUgfHwgbW9kYWwucGFyYW1zTmFtZSxcbiAgICAgICAgICAgIHNpemU6IGl0ZW0uc2l6ZSB8fCBtb2RhbC5zaXplLFxuICAgICAgICAgICAgbW9kYWxPcHRpb25zOiBpdGVtLm1vZGFsT3B0aW9ucyB8fCBtb2RhbC5tb2RhbE9wdGlvbnMsXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXRlbS5tb2RhbCA9PSBudWxsIHx8IGl0ZW0ubW9kYWwuY29tcG9uZW50ID09IG51bGwpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oYFtzdF0gU2hvdWxkIHNwZWNpZnkgbW9kYWwgcGFyYW1ldGVyYCk7XG4gICAgICAgICAgaXRlbS50eXBlID0gJ25vbmUnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW0ubW9kYWwgPSBPYmplY3QuYXNzaWduKHt9LCBtb2RhbCwgaXRlbS5tb2RhbCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ2RyYXdlcicpIHtcbiAgICAgICAgaWYgKGl0ZW0uZHJhd2VyID09IG51bGwgfHwgaXRlbS5kcmF3ZXIuY29tcG9uZW50ID09IG51bGwpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oYFtzdF0gU2hvdWxkIHNwZWNpZnkgZHJhd2VyIHBhcmFtZXRlcmApO1xuICAgICAgICAgIGl0ZW0udHlwZSA9ICdub25lJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtLmRyYXdlciA9IE9iamVjdC5hc3NpZ24oe30sIGRyYXdlciwgaXRlbS5kcmF3ZXIpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdkZWwnICYmIHR5cGVvZiBpdGVtLnBvcCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgaXRlbS5wb3AgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbS5wb3AgPT09IHRydWUpIHtcbiAgICAgICAgaXRlbS5wb3BUaXRsZSA9IGl0ZW0ucG9wVGl0bGUgfHwgcG9wVGl0bGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpdGVtLnBvcCA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbS5pY29uKSB7XG4gICAgICAgIGl0ZW0uaWNvbiA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAge30sXG4gICAgICAgICAgYnRuSWNvbixcbiAgICAgICAgICB0eXBlb2YgaXRlbS5pY29uID09PSAnc3RyaW5nJyA/IHsgdHlwZTogaXRlbS5pY29uIH0gOiBpdGVtLmljb24sXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGl0ZW0uY2hpbGRyZW4gPSBpdGVtLmNoaWxkcmVuICYmIGl0ZW0uY2hpbGRyZW4ubGVuZ3RoID4gMCA/IHRoaXMuYnRuQ29lcmNlKGl0ZW0uY2hpbGRyZW4pIDogW107XG5cbiAgICAgIC8vIGkxOG5cbiAgICAgIGlmIChpdGVtLmkxOG4gJiYgdGhpcy5pMThuU3J2KSB7XG4gICAgICAgIGl0ZW0udGV4dCA9IHRoaXMuaTE4blNydi5mYW55aShpdGVtLmkxOG4pO1xuICAgICAgfVxuXG4gICAgICByZXQucHVzaChpdGVtKTtcbiAgICB9XG4gICAgdGhpcy5idG5Db2VyY2VJZihyZXQpO1xuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBwcml2YXRlIGJ0bkNvZXJjZUlmKGxpc3Q6IFNUQ29sdW1uQnV0dG9uW10pIHtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgbGlzdCkge1xuICAgICAgaWYgKCFpdGVtLmlpZikgaXRlbS5paWYgPSAoKSA9PiB0cnVlO1xuICAgICAgaWYgKCFpdGVtLmNoaWxkcmVuKSB7XG4gICAgICAgIGl0ZW0uY2hpbGRyZW4gPSBbXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYnRuQ29lcmNlSWYoaXRlbS5jaGlsZHJlbik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBmaXhlZENvZXJjZShsaXN0OiBTVENvbHVtbltdKSB7XG4gICAgY29uc3QgY291bnRSZWR1Y2UgPSAoYTogbnVtYmVyLCBiOiBTVENvbHVtbikgPT5cbiAgICAgIGEgKyArYi53aWR0aC50b1N0cmluZygpLnJlcGxhY2UoJ3B4JywgJycpO1xuICAgIC8vIGxlZnQgd2lkdGhcbiAgICBsaXN0XG4gICAgICAuZmlsdGVyKHcgPT4gdy5maXhlZCAmJiB3LmZpeGVkID09PSAnbGVmdCcgJiYgdy53aWR0aClcbiAgICAgIC5mb3JFYWNoKFxuICAgICAgICAoaXRlbSwgaWR4KSA9PlxuICAgICAgICAgIChpdGVtLl9sZWZ0ID0gbGlzdC5zbGljZSgwLCBpZHgpLnJlZHVjZShjb3VudFJlZHVjZSwgMCkgKyAncHgnKSxcbiAgICAgICk7XG4gICAgLy8gcmlnaHQgd2lkdGhcbiAgICBsaXN0XG4gICAgICAuZmlsdGVyKHcgPT4gdy5maXhlZCAmJiB3LmZpeGVkID09PSAncmlnaHQnICYmIHcud2lkdGgpXG4gICAgICAucmV2ZXJzZSgpXG4gICAgICAuZm9yRWFjaChcbiAgICAgICAgKGl0ZW0sIGlkeCkgPT5cbiAgICAgICAgICAoaXRlbS5fcmlnaHQgPVxuICAgICAgICAgICAgKGlkeCA+IDAgPyBsaXN0LnNsaWNlKC1pZHgpLnJlZHVjZShjb3VudFJlZHVjZSwgMCkgOiAwKSArICdweCcpLFxuICAgICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgc29ydENvZXJjZShpdGVtOiBTVENvbHVtbik6IFNUU29ydE1hcCB7XG4gICAgLy8gY29tcGF0aWJsZVxuICAgIGlmIChpdGVtLnNvcnRlciAmJiB0eXBlb2YgaXRlbS5zb3J0ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgIGRlZmF1bHQ6IGl0ZW0uc29ydCBhcyBhbnksXG4gICAgICAgIGNvbXBhcmU6IGl0ZW0uc29ydGVyLFxuICAgICAgICBrZXk6IGl0ZW0uc29ydEtleSB8fCBpdGVtLmluZGV4S2V5LFxuICAgICAgICByZU5hbWU6IGl0ZW0uc29ydFJlTmFtZSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBpdGVtLnNvcnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4geyBlbmFibGVkOiBmYWxzZSB9O1xuICAgIH1cblxuICAgIGxldCByZXM6IFNUU29ydE1hcCA9IHt9O1xuXG4gICAgaWYgKHR5cGVvZiBpdGVtLnNvcnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXMua2V5ID0gaXRlbS5zb3J0O1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGl0ZW0uc29ydCAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICByZXMgPSBpdGVtLnNvcnQ7XG4gICAgfVxuXG4gICAgaWYgKCFyZXMua2V5KSB7XG4gICAgICByZXMua2V5ID0gaXRlbS5pbmRleEtleTtcbiAgICB9XG5cbiAgICByZXMuZW5hYmxlZCA9IHRydWU7XG5cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgcHJpdmF0ZSBmaWx0ZXJDb2VyY2UoaXRlbTogU1RDb2x1bW4pOiBTVENvbHVtbkZpbHRlciB7XG4gICAgbGV0IHJlczogU1RDb2x1bW5GaWx0ZXIgPSBudWxsO1xuICAgIC8vIGNvbXBhdGlibGVcbiAgICBpZiAoaXRlbS5maWx0ZXJzICYmIGl0ZW0uZmlsdGVycy5sZW5ndGggPiAwKSB7XG4gICAgICByZXMgPSB7XG4gICAgICAgIGNvbmZpcm1UZXh0OiBpdGVtLmZpbHRlckNvbmZpcm1UZXh0LFxuICAgICAgICBjbGVhclRleHQ6IGl0ZW0uZmlsdGVyQ2xlYXJUZXh0LFxuICAgICAgICBkZWZhdWx0OiBpdGVtLmZpbHRlcmVkLFxuICAgICAgICBmbjogaXRlbS5maWx0ZXIgYXMgYW55LFxuICAgICAgICBpY29uOiBpdGVtLmZpbHRlckljb24sXG4gICAgICAgIGtleTogaXRlbS5maWx0ZXJLZXkgfHwgaXRlbS5pbmRleEtleSxcbiAgICAgICAgbWVudXM6IGl0ZW0uZmlsdGVycyxcbiAgICAgICAgbXVsdGlwbGU6IGl0ZW0uZmlsdGVyTXVsdGlwbGUsXG4gICAgICAgIHJlTmFtZTogaXRlbS5maWx0ZXJSZU5hbWUsXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXMgPSBpdGVtLmZpbHRlcjtcbiAgICB9XG5cbiAgICBpZiAocmVzID09IG51bGwgfHwgcmVzLm1lbnVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiByZXMubXVsdGlwbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXMubXVsdGlwbGUgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoIXJlcy5jb25maXJtVGV4dCkge1xuICAgICAgcmVzLmNvbmZpcm1UZXh0ID0gdGhpcy5jb2cuZmlsdGVyQ29uZmlybVRleHQ7XG4gICAgfVxuICAgIGlmICghcmVzLmNsZWFyVGV4dCkge1xuICAgICAgcmVzLmNsZWFyVGV4dCA9IHRoaXMuY29nLmZpbHRlckNsZWFyVGV4dDtcbiAgICB9XG4gICAgaWYgKCFyZXMuaWNvbikge1xuICAgICAgcmVzLmljb24gPSBgZmlsdGVyYDtcbiAgICB9XG4gICAgaWYgKCFyZXMua2V5KSB7XG4gICAgICByZXMua2V5ID0gaXRlbS5pbmRleEtleTtcbiAgICB9XG5cbiAgICByZXMuZGVmYXVsdCA9IHJlcy5tZW51cy5maW5kSW5kZXgodyA9PiB3LmNoZWNrZWQpICE9PSAtMTtcblxuICAgIGlmICh0aGlzLmFjbCkge1xuICAgICAgcmVzLm1lbnVzID0gcmVzLm1lbnVzLmZpbHRlcih3ID0+IHRoaXMuYWNsLmNhbih3LmFjbCkpO1xuICAgIH1cblxuICAgIGlmIChyZXMubWVudXMubGVuZ3RoIDw9IDApIHtcbiAgICAgIHJlcyA9IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIHByaXZhdGUgcmVzdG9yZVJlbmRlcihpdGVtOiBTVENvbHVtbikge1xuICAgIGlmIChpdGVtLnJlbmRlclRpdGxlKSB7XG4gICAgICBpdGVtLl9fcmVuZGVyVGl0bGUgPSB0aGlzLnJvd1NvdXJjZS5nZXRUaXRsZShpdGVtLnJlbmRlclRpdGxlKTtcbiAgICB9XG4gICAgaWYgKGl0ZW0ucmVuZGVyKSB7XG4gICAgICBpdGVtLl9fcmVuZGVyID0gdGhpcy5yb3dTb3VyY2UuZ2V0Um93KGl0ZW0ucmVuZGVyKTtcbiAgICB9XG4gIH1cblxuICBwcm9jZXNzKGxpc3Q6IFNUQ29sdW1uW10pOiBTVENvbHVtbltdIHtcbiAgICBpZiAoIWxpc3QgfHwgbGlzdC5sZW5ndGggPT09IDApXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFtzdF06IHRoZSBjb2x1bW5zIHByb3BlcnR5IG11c2UgYmUgZGVmaW5lIWApO1xuXG4gICAgY29uc3QgeyBub0luZGV4IH0gPSB0aGlzLmNvZztcbiAgICBsZXQgY2hlY2tib3hDb3VudCA9IDA7XG4gICAgbGV0IHJhZGlvQ291bnQgPSAwO1xuICAgIGNvbnN0IGNvbHVtbnM6IFNUQ29sdW1uW10gPSBbXTtcbiAgICBjb25zdCBjb3B5Q29sdW1lbnMgPSBkZWVwQ29weShsaXN0KSBhcyBTVENvbHVtbltdO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiBjb3B5Q29sdW1lbnMpIHtcbiAgICAgIGlmICh0aGlzLmFjbCAmJiBpdGVtLmFjbCAmJiAhdGhpcy5hY2wuY2FuKGl0ZW0uYWNsKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIC8vIGluZGV4XG4gICAgICBpZiAoaXRlbS5pbmRleCkge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoaXRlbS5pbmRleCkpIHtcbiAgICAgICAgICBpdGVtLmluZGV4ID0gaXRlbS5pbmRleC5zcGxpdCgnLicpO1xuICAgICAgICB9XG4gICAgICAgIGl0ZW0uaW5kZXhLZXkgPSBpdGVtLmluZGV4LmpvaW4oJy4nKTtcbiAgICAgIH1cbiAgICAgIC8vIHRpdGxlXG4gICAgICBpZiAoaXRlbS5pMThuICYmIHRoaXMuaTE4blNydikge1xuICAgICAgICBpdGVtLnRpdGxlID0gdGhpcy5pMThuU3J2LmZhbnlpKGl0ZW0uaTE4bik7XG4gICAgICB9XG4gICAgICAvLyBub1xuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ25vJykge1xuICAgICAgICBpdGVtLm5vSW5kZXggPSBpdGVtLm5vSW5kZXggPT0gbnVsbCA/IG5vSW5kZXggOiBpdGVtLm5vSW5kZXg7XG4gICAgICB9XG4gICAgICAvLyBjaGVja2JveFxuICAgICAgaWYgKGl0ZW0uc2VsZWN0aW9ucyA9PSBudWxsKSB7XG4gICAgICAgIGl0ZW0uc2VsZWN0aW9ucyA9IFtdO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICArK2NoZWNrYm94Q291bnQ7XG4gICAgICAgIGlmICghaXRlbS53aWR0aCkge1xuICAgICAgICAgIGl0ZW0ud2lkdGggPSBgJHtpdGVtLnNlbGVjdGlvbnMubGVuZ3RoID4gMCA/IDYyIDogNTB9cHhgO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5hY2wpIHtcbiAgICAgICAgaXRlbS5zZWxlY3Rpb25zID0gaXRlbS5zZWxlY3Rpb25zLmZpbHRlcih3ID0+IHRoaXMuYWNsLmNhbih3LmFjbCkpO1xuICAgICAgfVxuICAgICAgLy8gcmFkaW9cbiAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgICAgKytyYWRpb0NvdW50O1xuICAgICAgICBpdGVtLnNlbGVjdGlvbnMgPSBbXTtcbiAgICAgICAgaWYgKCFpdGVtLndpZHRoKSB7XG4gICAgICAgICAgaXRlbS53aWR0aCA9ICc1MHB4JztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gdHlwZXNcbiAgICAgIGlmIChpdGVtLnR5cGUgPT09ICd5bicpIHtcbiAgICAgICAgaXRlbS55biA9IE9iamVjdC5hc3NpZ24oeyB0cnV0aDogdHJ1ZSB9LCBpdGVtLnluKTtcbiAgICAgICAgLy8gY29tcGF0aWJsZVxuICAgICAgICBpZiAoaXRlbS55blRydXRoICE9IG51bGwpIGl0ZW0ueW4udHJ1dGggPSBpdGVtLnluVHJ1dGg7XG4gICAgICAgIGlmIChpdGVtLnluWWVzICE9IG51bGwpIGl0ZW0ueW4ueWVzID0gaXRlbS55blllcztcbiAgICAgICAgaWYgKGl0ZW0ueW5ObyAhPSBudWxsKSBpdGVtLnluLm5vID0gaXRlbS55bk5vO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICAoaXRlbS50eXBlID09PSAnbGluaycgJiYgdHlwZW9mIGl0ZW0uY2xpY2sgIT09ICdmdW5jdGlvbicpIHx8XG4gICAgICAgIChpdGVtLnR5cGUgPT09ICdiYWRnZScgJiYgaXRlbS5iYWRnZSA9PSBudWxsKSB8fFxuICAgICAgICAoaXRlbS50eXBlID09PSAndGFnJyAmJiBpdGVtLnRhZyA9PSBudWxsKVxuICAgICAgKSB7XG4gICAgICAgIChpdGVtIGFzIGFueSkudHlwZSA9ICcnO1xuICAgICAgfVxuICAgICAgLy8gY2xhc3NOYW1lXG4gICAgICBpZiAoIWl0ZW0uY2xhc3NOYW1lKSB7XG4gICAgICAgIGl0ZW0uY2xhc3NOYW1lID0ge1xuICAgICAgICAgIG51bWJlcjogJ3RleHQtcmlnaHQnLFxuICAgICAgICAgIGN1cnJlbmN5OiAndGV4dC1yaWdodCcsXG4gICAgICAgICAgZGF0ZTogJ3RleHQtY2VudGVyJyxcbiAgICAgICAgfVtpdGVtLnR5cGVdO1xuICAgICAgfVxuXG4gICAgICAvLyBzb3J0ZXJcbiAgICAgIGl0ZW0uX3NvcnQgPSB0aGlzLnNvcnRDb2VyY2UoaXRlbSk7XG4gICAgICAvLyBmaWx0ZXJcbiAgICAgIGl0ZW0uZmlsdGVyID0gdGhpcy5maWx0ZXJDb2VyY2UoaXRlbSk7XG4gICAgICAvLyBidXR0b25zXG4gICAgICBpdGVtLmJ1dHRvbnMgPSB0aGlzLmJ0bkNvZXJjZShpdGVtLmJ1dHRvbnMpO1xuICAgICAgLy8gcmVzdG9yZSBjdXN0b20gcm93XG4gICAgICB0aGlzLnJlc3RvcmVSZW5kZXIoaXRlbSk7XG5cbiAgICAgIGNvbHVtbnMucHVzaChpdGVtKTtcbiAgICB9XG4gICAgaWYgKGNoZWNrYm94Q291bnQgPiAxKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFtzdF06IGp1c3Qgb25seSBvbmUgY29sdW1uIGNoZWNrYm94YCk7XG4gICAgfVxuICAgIGlmIChyYWRpb0NvdW50ID4gMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBbc3RdOiBqdXN0IG9ubHkgb25lIGNvbHVtbiByYWRpb2ApO1xuICAgIH1cblxuICAgIHRoaXMuZml4ZWRDb2VyY2UoY29sdW1ucyk7XG5cbiAgICByZXR1cm4gY29sdW1ucztcbiAgfVxuXG4gIHJlc3RvcmVBbGxSZW5kZXIoY29sdW1uczogU1RDb2x1bW5bXSkge1xuICAgIGNvbHVtbnMuZm9yRWFjaChpID0+IHRoaXMucmVzdG9yZVJlbmRlcihpKSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUsIEhvc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERlY2ltYWxQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgZGVlcEdldCB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IENOQ3VycmVuY3lQaXBlLCBEYXRlUGlwZSwgWU5QaXBlLCBfSHR0cENsaWVudCB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5cbmltcG9ydCB7XG4gIFNURGF0YSxcbiAgU1RQYWdlLFxuICBTVFJlcSxcbiAgU1RSZXMsXG4gIFNUQ29sdW1uLFxuICBTVE11bHRpU29ydCxcbiAgU1RSb3dDbGFzc05hbWUsXG4gIFNUU2luZ2xlU29ydCxcbn0gZnJvbSAnLi90YWJsZS5pbnRlcmZhY2VzJztcbmltcG9ydCB7IFNUU29ydE1hcCB9IGZyb20gJy4vdGFibGUtY29sdW1uLXNvdXJjZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1REYXRhU291cmNlT3B0aW9ucyB7XG4gIHBpPzogbnVtYmVyO1xuICBwcz86IG51bWJlcjtcbiAgZGF0YT86IHN0cmluZyB8IFNURGF0YVtdIHwgT2JzZXJ2YWJsZTxTVERhdGFbXT47XG4gIHRvdGFsPzogbnVtYmVyO1xuICByZXE/OiBTVFJlcTtcbiAgcmVzPzogU1RSZXM7XG4gIHBhZ2U/OiBTVFBhZ2U7XG4gIGNvbHVtbnM/OiBTVENvbHVtbltdO1xuICBzaW5nbGVTb3J0PzogU1RTaW5nbGVTb3J0O1xuICBtdWx0aVNvcnQ/OiBTVE11bHRpU29ydDtcbiAgcm93Q2xhc3NOYW1lPzogU1RSb3dDbGFzc05hbWU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1REYXRhU291cmNlUmVzdWx0IHtcbiAgLyoqIMOmwpjCr8OlwpDCpsOpwpzCgMOowqbCgcOmwpjCvsOnwqTCusOlwojChsOpwqHCtcOlwpnCqCAqL1xuICBwYWdlU2hvdz86IGJvb2xlYW47XG4gIC8qKiDDpsKWwrAgYHBpYMOvwrzCjMOowovCpcOowr/ClMOlwpvCniBgdW5kZWZpbmVkYCDDqMKhwqjDp8KkwrrDp8KUwqjDpsKIwrfDpcKPwpfDpsKOwqcgKi9cbiAgcGk/OiBudW1iZXI7XG4gIC8qKiDDpsKWwrAgYHRvdGFsYMOvwrzCjMOowovCpcOowr/ClMOlwpvCniBgdW5kZWZpbmVkYCDDqMKhwqjDp8KkwrrDp8KUwqjDpsKIwrfDpcKPwpfDpsKOwqcgKi9cbiAgdG90YWw/OiBudW1iZXI7XG4gIC8qKiDDpsKVwrDDpsKNwq4gKi9cbiAgbGlzdD86IFNURGF0YVtdO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU1REYXRhU291cmNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBodHRwOiBfSHR0cENsaWVudCxcbiAgICBASG9zdCgpIHByaXZhdGUgY3VycmVudHk6IENOQ3VycmVuY3lQaXBlLFxuICAgIEBIb3N0KCkgcHJpdmF0ZSBkYXRlOiBEYXRlUGlwZSxcbiAgICBASG9zdCgpIHByaXZhdGUgeW46IFlOUGlwZSxcbiAgICBASG9zdCgpIHByaXZhdGUgbnVtYmVyOiBEZWNpbWFsUGlwZSxcbiAgICBwcml2YXRlIGRvbTogRG9tU2FuaXRpemVyLFxuICApIHt9XG5cbiAgcHJvY2VzcyhvcHRpb25zOiBTVERhdGFTb3VyY2VPcHRpb25zKTogUHJvbWlzZTxTVERhdGFTb3VyY2VSZXN1bHQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmVQcm9taXNlLCByZWplY3RQcm9taXNlKSA9PiB7XG4gICAgICBsZXQgZGF0YSQ6IE9ic2VydmFibGU8U1REYXRhW10+O1xuICAgICAgbGV0IGlzUmVtb3RlID0gZmFsc2U7XG4gICAgICBjb25zdCB7IGRhdGEsIHJlcywgdG90YWwsIHBhZ2UsIHBpLCBwcywgY29sdW1ucyB9ID0gb3B0aW9ucztcbiAgICAgIGxldCByZXRUb3RhbDogbnVtYmVyO1xuICAgICAgbGV0IHJldExpc3Q6IFNURGF0YVtdO1xuICAgICAgbGV0IHJldFBpOiBudW1iZXI7XG5cbiAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaXNSZW1vdGUgPSB0cnVlO1xuICAgICAgICBkYXRhJCA9IHRoaXMuZ2V0QnlIdHRwKGRhdGEsIG9wdGlvbnMpLnBpcGUoXG4gICAgICAgICAgbWFwKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgLy8gbGlzdFxuICAgICAgICAgICAgbGV0IHJldCA9IGRlZXBHZXQocmVzdWx0LCByZXMucmVOYW1lLmxpc3QgYXMgc3RyaW5nW10sIFtdKTtcbiAgICAgICAgICAgIGlmIChyZXQgPT0gbnVsbCB8fCAhQXJyYXkuaXNBcnJheShyZXQpKSB7XG4gICAgICAgICAgICAgIHJldCA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gdG90YWxcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdFRvdGFsID1cbiAgICAgICAgICAgICAgcmVzLnJlTmFtZS50b3RhbCAmJlxuICAgICAgICAgICAgICBkZWVwR2V0KHJlc3VsdCwgcmVzLnJlTmFtZS50b3RhbCBhcyBzdHJpbmdbXSwgbnVsbCk7XG4gICAgICAgICAgICByZXRUb3RhbCA9IHJlc3VsdFRvdGFsID09IG51bGwgPyB0b3RhbCB8fCAwIDogK3Jlc3VsdFRvdGFsO1xuICAgICAgICAgICAgcmV0dXJuIDxTVERhdGFbXT5yZXQ7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnIgPT4ge1xuICAgICAgICAgICAgcmVqZWN0UHJvbWlzZShlcnIpO1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICAgIH0pLFxuICAgICAgICApO1xuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgIGRhdGEkID0gb2YoZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBhIGNvbGQgb2JzZXJ2YWJsZVxuICAgICAgICBkYXRhJCA9IGRhdGE7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNSZW1vdGUpIHtcbiAgICAgICAgZGF0YSQgPSBkYXRhJC5waXBlKFxuICAgICAgICAgIC8vIHNvcnRcbiAgICAgICAgICBtYXAoKHJlc3VsdDogU1REYXRhW10pID0+IHtcbiAgICAgICAgICAgIGxldCBjb3B5UmVzdWx0ID0gcmVzdWx0LnNsaWNlKDApO1xuICAgICAgICAgICAgY29uc3Qgc29ydGVyRm4gPSB0aGlzLmdldFNvcnRlckZuKGNvbHVtbnMpO1xuICAgICAgICAgICAgaWYgKHNvcnRlckZuKSB7XG4gICAgICAgICAgICAgIGNvcHlSZXN1bHQgPSBjb3B5UmVzdWx0LnNvcnQoc29ydGVyRm4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNvcHlSZXN1bHQ7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgLy8gZmlsdGVyXG4gICAgICAgICAgbWFwKChyZXN1bHQ6IFNURGF0YVtdKSA9PiB7XG4gICAgICAgICAgICBjb2x1bW5zLmZpbHRlcih3ID0+IHcuZmlsdGVyKS5mb3JFYWNoKGMgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSBjLmZpbHRlci5tZW51cy5maWx0ZXIodyA9PiB3LmNoZWNrZWQpO1xuICAgICAgICAgICAgICBpZiAodmFsdWVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgICAgICAgICAgICBjb25zdCBvbkZpbHRlciA9IGMuZmlsdGVyLmZuO1xuICAgICAgICAgICAgICBpZiAodHlwZW9mIG9uRmlsdGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBbc3RdIE11c2UgcHJvdmlkZSB0aGUgZm4gZnVuY3Rpb24gaW4gZmlsdGVyYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5maWx0ZXIocmVjb3JkID0+XG4gICAgICAgICAgICAgICAgdmFsdWVzLnNvbWUodiA9PiBvbkZpbHRlcih2LCByZWNvcmQpKSxcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAvLyBwYWdpbmdcbiAgICAgICAgICBtYXAoKHJlc3VsdDogU1REYXRhW10pID0+IHtcbiAgICAgICAgICAgIGlmIChwYWdlLmZyb250KSB7XG4gICAgICAgICAgICAgIGNvbnN0IG1heFBhZ2VJbmRleCA9IE1hdGguY2VpbChyZXN1bHQubGVuZ3RoIC8gcHMpO1xuICAgICAgICAgICAgICByZXRQaSA9IE1hdGgubWF4KDEsIHBpID4gbWF4UGFnZUluZGV4ID8gbWF4UGFnZUluZGV4IDogcGkpO1xuICAgICAgICAgICAgICByZXRUb3RhbCA9IHJlc3VsdC5sZW5ndGg7XG4gICAgICAgICAgICAgIGlmIChwYWdlLnNob3cgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0LnNsaWNlKChyZXRQaSAtIDEpICogcHMsIHJldFBpICogcHMpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgIH0pLFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICAvLyBwcmUtcHJvY2Vzc1xuICAgICAgaWYgKHR5cGVvZiByZXMucHJvY2VzcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBkYXRhJCA9IGRhdGEkLnBpcGUobWFwKHJlc3VsdCA9PiByZXMucHJvY2VzcyhyZXN1bHQpKSk7XG4gICAgICB9XG4gICAgICAvLyBkYXRhIGFjY2VsZXJhdG9yXG4gICAgICBkYXRhJCA9IGRhdGEkLnBpcGUoXG4gICAgICAgIG1hcChyZXN1bHQgPT4ge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSByZXN1bHQubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIHJlc3VsdFtpXS5fdmFsdWVzID0gY29sdW1ucy5tYXAoYyA9PiB0aGlzLmdldChyZXN1bHRbaV0sIGMsIGkpKTtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnJvd0NsYXNzTmFtZSkge1xuICAgICAgICAgICAgICByZXN1bHRbaV0uX3Jvd0NsYXNzTmFtZSA9IG9wdGlvbnMucm93Q2xhc3NOYW1lKHJlc3VsdFtpXSwgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0pLFxuICAgICAgKTtcblxuICAgICAgZGF0YSQuZm9yRWFjaCgocmVzdWx0OiBTVERhdGFbXSkgPT4gKHJldExpc3QgPSByZXN1bHQpKS50aGVuKCgpID0+IHtcbiAgICAgICAgcmVzb2x2ZVByb21pc2Uoe1xuICAgICAgICAgIHBpOiByZXRQaSxcbiAgICAgICAgICB0b3RhbDogcmV0VG90YWwsXG4gICAgICAgICAgbGlzdDogcmV0TGlzdCxcbiAgICAgICAgICBwYWdlU2hvdzpcbiAgICAgICAgICAgIHR5cGVvZiBwYWdlLnNob3cgPT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAgID8gKHJldFRvdGFsIHx8IHRvdGFsKSA+IHBzXG4gICAgICAgICAgICAgIDogcGFnZS5zaG93LFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQoaXRlbTogYW55LCBjb2w6IFNUQ29sdW1uLCBpZHg6IG51bWJlcikge1xuICAgIGlmIChjb2wuZm9ybWF0KSB7XG4gICAgICBjb25zdCBmb3JtYXRSZXMgPSBjb2wuZm9ybWF0KGl0ZW0sIGNvbCkgYXMgc3RyaW5nO1xuICAgICAgaWYgKH5mb3JtYXRSZXMuaW5kZXhPZignPCcpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRvbS5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChmb3JtYXRSZXMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZvcm1hdFJlcztcbiAgICB9XG5cbiAgICBjb25zdCB2YWx1ZSA9IGRlZXBHZXQoaXRlbSwgY29sLmluZGV4IGFzIHN0cmluZ1tdLCBjb2wuZGVmYXVsdCk7XG5cbiAgICBsZXQgcmV0ID0gdmFsdWU7XG4gICAgc3dpdGNoIChjb2wudHlwZSkge1xuICAgICAgY2FzZSAnbm8nOlxuICAgICAgICByZXQgPSBjb2wubm9JbmRleCArIGlkeDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdpbWcnOlxuICAgICAgICByZXQgPSB2YWx1ZSA/IGA8aW1nIHNyYz1cIiR7dmFsdWV9XCIgY2xhc3M9XCJpbWdcIj5gIDogJyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgcmV0ID0gdGhpcy5udW1iZXIudHJhbnNmb3JtKHZhbHVlLCBjb2wubnVtYmVyRGlnaXRzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjdXJyZW5jeSc6XG4gICAgICAgIHJldCA9IHRoaXMuY3VycmVudHkudHJhbnNmb3JtKHZhbHVlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdkYXRlJzpcbiAgICAgICAgcmV0ID0gdGhpcy5kYXRlLnRyYW5zZm9ybSh2YWx1ZSwgY29sLmRhdGVGb3JtYXQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3luJzpcbiAgICAgICAgcmV0ID0gdGhpcy55bi50cmFuc2Zvcm0odmFsdWUgPT09IGNvbC55bi50cnV0aCwgY29sLnluLnllcywgY29sLnluLm5vKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiByZXQgPT0gbnVsbCA/ICcnIDogcmV0O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRCeUh0dHAoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgb3B0aW9uczogU1REYXRhU291cmNlT3B0aW9ucyxcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCB7IHJlcSwgcGFnZSwgcGksIHBzLCBzaW5nbGVTb3J0LCBtdWx0aVNvcnQsIGNvbHVtbnMgfSA9IG9wdGlvbnM7XG4gICAgY29uc3QgbWV0aG9kID0gKHJlcS5tZXRob2QgfHwgJ0dFVCcpLnRvVXBwZXJDYXNlKCk7XG4gICAgY29uc3QgcGFyYW1zOiBhbnkgPSBPYmplY3QuYXNzaWduKFxuICAgICAge1xuICAgICAgICBbcmVxLnJlTmFtZS5waV06IHBhZ2UuemVyb0luZGV4ZWQgPyBwaSAtIDEgOiBwaSxcbiAgICAgICAgW3JlcS5yZU5hbWUucHNdOiBwcyxcbiAgICAgIH0sXG4gICAgICByZXEucGFyYW1zLFxuICAgICAgdGhpcy5nZXRSZXFTb3J0TWFwKHNpbmdsZVNvcnQsIG11bHRpU29ydCwgY29sdW1ucyksXG4gICAgICB0aGlzLmdldFJlcUZpbHRlck1hcChjb2x1bW5zKSxcbiAgICApO1xuICAgIGxldCByZXFPcHRpb25zOiBhbnkgPSB7XG4gICAgICBwYXJhbXMsXG4gICAgICBib2R5OiByZXEuYm9keSxcbiAgICAgIGhlYWRlcnM6IHJlcS5oZWFkZXJzLFxuICAgIH07XG4gICAgaWYgKG1ldGhvZCA9PT0gJ1BPU1QnICYmIHJlcS5hbGxJbkJvZHkgPT09IHRydWUpIHtcbiAgICAgIHJlcU9wdGlvbnMgPSB7XG4gICAgICAgIGJvZHk6IE9iamVjdC5hc3NpZ24oe30sIHJlcS5ib2R5LCBwYXJhbXMpLFxuICAgICAgICBoZWFkZXJzOiByZXEuaGVhZGVycyxcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmh0dHAucmVxdWVzdChtZXRob2QsIHVybCwgcmVxT3B0aW9ucyk7XG4gIH1cblxuICAvLyNyZWdpb24gc29ydFxuXG4gIHByaXZhdGUgZ2V0VmFsaWRTb3J0KGNvbHVtbnM6IFNUQ29sdW1uW10pOiBTVFNvcnRNYXBbXSB7XG4gICAgcmV0dXJuIGNvbHVtbnNcbiAgICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtLl9zb3J0ICYmIGl0ZW0uX3NvcnQuZW5hYmxlZCAmJiBpdGVtLl9zb3J0LmRlZmF1bHQpXG4gICAgICAubWFwKGl0ZW0gPT4gaXRlbS5fc29ydCk7XG4gIH1cblxuICBwcml2YXRlIGdldFNvcnRlckZuKGNvbHVtbnM6IFNUQ29sdW1uW10pIHtcbiAgICBjb25zdCBzb3J0TGlzdCA9IHRoaXMuZ2V0VmFsaWRTb3J0KGNvbHVtbnMpO1xuICAgIGlmIChzb3J0TGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBzb3J0TGlzdFswXS5jb21wYXJlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLndhcm4oYFtzdF0gTXVzZSBwcm92aWRlIHRoZSBjb21wYXJlIGZ1bmN0aW9uIGluIHNvcnRgKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICByZXR1cm4gKGE6IFNURGF0YSwgYjogU1REYXRhKSA9PiB7XG4gICAgICBjb25zdCByZXN1bHQgPSBzb3J0TGlzdFswXS5jb21wYXJlKGEsIGIpO1xuICAgICAgaWYgKHJlc3VsdCAhPT0gMCkge1xuICAgICAgICByZXR1cm4gc29ydExpc3RbMF0uZGVmYXVsdCA9PT0gJ2Rlc2NlbmQnID8gLXJlc3VsdCA6IHJlc3VsdDtcbiAgICAgIH1cbiAgICAgIHJldHVybiAwO1xuICAgIH07XG4gIH1cblxuICBnZXRSZXFTb3J0TWFwKFxuICAgIHNpbmdsZVNvcnQ6IFNUU2luZ2xlU29ydCxcbiAgICBtdWx0aVNvcnQ6IFNUTXVsdGlTb3J0LFxuICAgIGNvbHVtbnM6IFNUQ29sdW1uW10sXG4gICk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0ge1xuICAgIGxldCByZXQ6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcbiAgICBjb25zdCBzb3J0TGlzdCA9IHRoaXMuZ2V0VmFsaWRTb3J0KGNvbHVtbnMpO1xuICAgIGlmICghbXVsdGlTb3J0ICYmIHNvcnRMaXN0Lmxlbmd0aCA9PT0gMCkgcmV0dXJuIHJldDtcblxuICAgIGlmIChtdWx0aVNvcnQpIHtcbiAgICAgIHNvcnRMaXN0LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIHJldFtpdGVtLmtleV0gPSAoaXRlbS5yZU5hbWUgfHwge30pW2l0ZW0uZGVmYXVsdF0gfHwgaXRlbS5kZWZhdWx0O1xuICAgICAgfSk7XG4gICAgICAvLyDDpcKQwojDpcK5wrbDpcKkwoTDp8KQwoZcbiAgICAgIHJldCA9IHtcbiAgICAgICAgW211bHRpU29ydC5rZXldOiBPYmplY3Qua2V5cyhyZXQpXG4gICAgICAgICAgLm1hcChrZXkgPT4ga2V5ICsgbXVsdGlTb3J0Lm5hbWVTZXBhcmF0b3IgKyByZXRba2V5XSlcbiAgICAgICAgICAuam9pbihtdWx0aVNvcnQuc2VwYXJhdG9yKSxcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1hcERhdGEgPSBzb3J0TGlzdFswXTtcbiAgICAgIGxldCBzb3J0RmlsZWQgPSBtYXBEYXRhLmtleTtcbiAgICAgIGxldCBzb3J0VmFsdWUgPSAoc29ydExpc3RbMF0ucmVOYW1lIHx8IHt9KVttYXBEYXRhLmRlZmF1bHRdIHx8IG1hcERhdGEuZGVmYXVsdDtcbiAgICAgIGlmIChzaW5nbGVTb3J0KSB7XG4gICAgICAgIHNvcnRWYWx1ZSA9IHNvcnRGaWxlZCArIChzaW5nbGVTb3J0Lm5hbWVTZXBhcmF0b3IgfHwgJy4nKSArIHNvcnRWYWx1ZTtcbiAgICAgICAgc29ydEZpbGVkID0gc2luZ2xlU29ydC5rZXkgfHwgJ3NvcnQnO1xuICAgICAgfVxuICAgICAgcmV0W3NvcnRGaWxlZF0gPSBzb3J0VmFsdWU7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvLyNlbmRyZWdpb25cblxuICAvLyNyZWdpb24gZmlsdGVyXG5cbiAgcHJpdmF0ZSBnZXRSZXFGaWx0ZXJNYXAoY29sdW1uczogU1RDb2x1bW5bXSk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0ge1xuICAgIGxldCByZXQgPSB7fTtcbiAgICBjb2x1bW5zLmZpbHRlcih3ID0+IHcuZmlsdGVyICYmIHcuZmlsdGVyLmRlZmF1bHQgPT09IHRydWUpLmZvckVhY2goY29sID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlcyA9IGNvbC5maWx0ZXIubWVudXMuZmlsdGVyKGYgPT4gZi5jaGVja2VkID09PSB0cnVlKTtcbiAgICAgIGxldCBvYmo6IE9iamVjdCA9IHt9O1xuICAgICAgaWYgKGNvbC5maWx0ZXIucmVOYW1lKSB7XG4gICAgICAgIG9iaiA9IGNvbC5maWx0ZXIucmVOYW1lKGNvbC5maWx0ZXIubWVudXMsIGNvbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvYmpbY29sLmZpbHRlci5rZXldID0gdmFsdWVzLm1hcChpID0+IGkudmFsdWUpLmpvaW4oJywnKTtcbiAgICAgIH1cbiAgICAgIHJldCA9IE9iamVjdC5hc3NpZ24ocmV0LCBvYmopO1xuICAgIH0pO1xuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvLyNlbmRyZWdpb25cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBkZWVwR2V0IH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgWGxzeFNlcnZpY2UgfSBmcm9tICdAZGVsb24vYWJjL3hsc3gnO1xuXG5pbXBvcnQgeyBTVENvbHVtbiwgU1RFeHBvcnRPcHRpb25zIH0gZnJvbSAnLi90YWJsZS5pbnRlcmZhY2VzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNURXhwb3J0IHtcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgcHJpdmF0ZSB4bHN4U3J2OiBYbHN4U2VydmljZSkge31cblxuICBwcml2YXRlIF9zdEdldChpdGVtOiBhbnksIGNvbDogU1RDb2x1bW4pOiBhbnkge1xuICAgIGNvbnN0IHJldDogYW55ID0geyB0OiAncycsIHY6ICcnIH07XG5cbiAgICBpZiAoY29sLmZvcm1hdCkge1xuICAgICAgcmV0LnYgPSBjb2wuZm9ybWF0KGl0ZW0sIGNvbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHZhbCA9IGRlZXBHZXQoaXRlbSwgY29sLmluZGV4IGFzIHN0cmluZ1tdLCAnJyk7XG4gICAgICByZXQudiA9IHZhbDtcbiAgICAgIHN3aXRjaCAoY29sLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnY3VycmVuY3knOlxuICAgICAgICAgIHJldC50ID0gJ24nO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdkYXRlJzpcbiAgICAgICAgICByZXQudCA9ICdkJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAneW4nOlxuICAgICAgICAgIHJldC52ID0gcmV0LnYgPT09IGNvbC55blRydXRoID8gY29sLnluWWVzIHx8ICfDpsKYwq8nIDogY29sLnluTm8gfHwgJ8OlwpDCpic7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuU2hlZXQob3B0OiBTVEV4cG9ydE9wdGlvbnMpOiB7IFtzaGVldDogc3RyaW5nXTogYW55IH0ge1xuICAgIGNvbnN0IHNoZWV0czogeyBbc2hlZXQ6IHN0cmluZ106IGFueSB9ID0ge307XG4gICAgY29uc3Qgc2hlZXQgPSAoc2hlZXRzW29wdC5zaGVldG5hbWUgfHwgJ1NoZWV0MSddID0ge30pO1xuICAgIGNvbnN0IGNvbERhdGEgPSBvcHQuX2MuZmlsdGVyKFxuICAgICAgdyA9PlxuICAgICAgICB3LmV4cG9ydGVkICE9PSBmYWxzZSAmJlxuICAgICAgICB3LmluZGV4ICYmXG4gICAgICAgICghdy5idXR0b25zIHx8IHcuYnV0dG9ucy5sZW5ndGggPT09IDApLFxuICAgICk7XG4gICAgY29uc3QgY2MgPSBjb2xEYXRhLmxlbmd0aCxcbiAgICAgIGRjID0gb3B0Ll9kLmxlbmd0aDtcblxuICAgIC8vIGNvbHVtblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2M7IGkrKykge1xuICAgICAgc2hlZXRbYCR7U3RyaW5nLmZyb21DaGFyQ29kZSg2NSArIGkpfTFgXSA9IHtcbiAgICAgICAgdDogJ3MnLFxuICAgICAgICB2OiBjb2xEYXRhW2ldLnRpdGxlLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBjb250ZW50XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYzsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNjOyBqKyspIHtcbiAgICAgICAgc2hlZXRbYCR7U3RyaW5nLmZyb21DaGFyQ29kZSg2NSArIGopfSR7aSArIDJ9YF0gPSB0aGlzLl9zdEdldChcbiAgICAgICAgICBvcHQuX2RbaV0sXG4gICAgICAgICAgY29sRGF0YVtqXSxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY2MgPiAwICYmIGRjID4gMCkge1xuICAgICAgc2hlZXRbJyFyZWYnXSA9IGBBMToke1N0cmluZy5mcm9tQ2hhckNvZGUoNjUgKyBjYyAtIDEpfSR7ZGMgKyAxfWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNoZWV0cztcbiAgfVxuXG4gIGV4cG9ydChvcHQ6IFNURXhwb3J0T3B0aW9ucykge1xuICAgIGlmICghdGhpcy54bHN4U3J2KVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBtdXNlIGJlIGltcG9ydCAnWGxzeE1vZHVsZScgbW9kdWxlLCBidXQgZ290IG51bGxgKTtcbiAgICBjb25zdCBzaGVldHMgPSB0aGlzLmdlblNoZWV0KG9wdCk7XG4gICAgcmV0dXJuIHRoaXMueGxzeFNydi5leHBvcnQoe1xuICAgICAgc2hlZXRzLFxuICAgICAgZmlsZW5hbWU6IG9wdC5maWxlbmFtZSxcbiAgICAgIGNhbGxiYWNrOiBvcHQuY2FsbGJhY2ssXG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgRXZlbnRFbWl0dGVyLFxuICBSZW5kZXJlcjIsXG4gIEVsZW1lbnRSZWYsXG4gIFRlbXBsYXRlUmVmLFxuICBTaW1wbGVDaGFuZ2UsXG4gIE9wdGlvbmFsLFxuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGVjaW1hbFBpcGUsIERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24sIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1xuICBDTkN1cnJlbmN5UGlwZSxcbiAgRGF0ZVBpcGUsXG4gIFlOUGlwZSxcbiAgTW9kYWxIZWxwZXIsXG4gIE1vZGFsSGVscGVyT3B0aW9ucyxcbiAgQUxBSU5fSTE4Tl9UT0tFTixcbiAgQWxhaW5JMThOU2VydmljZSxcbiAgRHJhd2VySGVscGVyLFxuICBEZWxvbkxvY2FsZVNlcnZpY2UsXG59IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQge1xuICBkZWVwQ29weSxcbiAgdG9Cb29sZWFuLFxuICB1cGRhdGVIb3N0Q2xhc3MsXG4gIElucHV0Qm9vbGVhbixcbiAgSW5wdXROdW1iZXIsXG59IGZyb20gJ0BkZWxvbi91dGlsJztcblxuaW1wb3J0IHtcbiAgU1RDb2x1bW4sXG4gIFNUQ2hhbmdlLFxuICBTVENvbHVtblNlbGVjdGlvbixcbiAgU1RDb2x1bW5GaWx0ZXJNZW51LFxuICBTVERhdGEsXG4gIFNUQ29sdW1uQnV0dG9uLFxuICBTVEV4cG9ydE9wdGlvbnMsXG4gIFNUTXVsdGlTb3J0LFxuICBTVFJlcSxcbiAgU1RFcnJvcixcbiAgU1RDaGFuZ2VUeXBlLFxuICBTVFJlcyxcbiAgU1RQYWdlLFxuICBTVExvYWRPcHRpb25zLFxuICBTVFJvd0NsYXNzTmFtZSxcbiAgU1RTaW5nbGVTb3J0LFxufSBmcm9tICcuL3RhYmxlLmludGVyZmFjZXMnO1xuaW1wb3J0IHsgU1RDb25maWcgfSBmcm9tICcuL3RhYmxlLmNvbmZpZyc7XG5pbXBvcnQgeyBTVEV4cG9ydCB9IGZyb20gJy4vdGFibGUtZXhwb3J0JztcbmltcG9ydCB7IFNUQ29sdW1uU291cmNlIH0gZnJvbSAnLi90YWJsZS1jb2x1bW4tc291cmNlJztcbmltcG9ydCB7IFNUUm93U291cmNlIH0gZnJvbSAnLi90YWJsZS1yb3cuZGlyZWN0aXZlJztcbmltcG9ydCB7IFNURGF0YVNvdXJjZSB9IGZyb20gJy4vdGFibGUtZGF0YS1zb3VyY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWJsZS5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW1xuICAgIFNURGF0YVNvdXJjZSxcbiAgICBTVFJvd1NvdXJjZSxcbiAgICBTVENvbHVtblNvdXJjZSxcbiAgICBTVEV4cG9ydCxcbiAgICBDTkN1cnJlbmN5UGlwZSxcbiAgICBEYXRlUGlwZSxcbiAgICBZTlBpcGUsXG4gICAgRGVjaW1hbFBpcGUsXG4gIF0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgU1RDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgaTE4biQ6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBkZWxvbkkxOG4kOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgdG90YWxUcGwgPSBgYDtcbiAgcHJpdmF0ZSBsb2NhbGU6IGFueSA9IHt9O1xuICBwcml2YXRlIGNsb25lUGFnZTogU1RQYWdlO1xuICBfZGF0YTogU1REYXRhW10gPSBbXTtcbiAgX2lzUGFnaW5hdGlvbiA9IHRydWU7XG4gIF9hbGxDaGVja2VkID0gZmFsc2U7XG4gIF9pbmRldGVybWluYXRlID0gZmFsc2U7XG4gIF9jb2x1bW5zOiBTVENvbHVtbltdID0gW107XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICAvKiogw6bClcKww6bCjcKuw6bCusKQICovXG4gIEBJbnB1dCgpXG4gIGRhdGE6IHN0cmluZyB8IFNURGF0YVtdIHwgT2JzZXJ2YWJsZTxTVERhdGFbXT47XG4gIC8qKiDDqMKvwrfDpsKxwoLDpMK9wpPDqcKFwo3Dp8K9wq4gKi9cbiAgQElucHV0KClcbiAgZ2V0IHJlcSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVxO1xuICB9XG4gIHNldCByZXEodmFsdWU6IFNUUmVxKSB7XG4gICAgY29uc3QgeyByZXEgfSA9IHRoaXMuY29nO1xuICAgIGNvbnN0IGl0ZW0gPSBPYmplY3QuYXNzaWduKHt9LCByZXEsIHZhbHVlKTtcbiAgICBpZiAoaXRlbS5yZU5hbWUgPT0gbnVsbCkge1xuICAgICAgaXRlbS5yZU5hbWUgPSBkZWVwQ29weShyZXEucmVOYW1lKTtcbiAgICB9XG4gICAgdGhpcy5fcmVxID0gaXRlbTtcbiAgfVxuICBwcml2YXRlIF9yZXE6IFNUUmVxO1xuICAvKiogw6jCv8KUw6XCm8Kew6TCvcKTw6nChcKNw6fCvcKuICovXG4gIEBJbnB1dCgpXG4gIGdldCByZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcztcbiAgfVxuICBzZXQgcmVzKHZhbHVlOiBTVFJlcykge1xuICAgIGNvbnN0IHsgcmVzIH0gPSB0aGlzLmNvZztcbiAgICBjb25zdCBpdGVtID0gT2JqZWN0LmFzc2lnbih7fSwgcmVzLCB2YWx1ZSk7XG4gICAgaXRlbS5yZU5hbWUgPSBPYmplY3QuYXNzaWduKHt9LCByZXMucmVOYW1lLCBpdGVtLnJlTmFtZSk7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGl0ZW0ucmVOYW1lLmxpc3QpKVxuICAgICAgaXRlbS5yZU5hbWUubGlzdCA9IGl0ZW0ucmVOYW1lLmxpc3Quc3BsaXQoJy4nKTtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoaXRlbS5yZU5hbWUudG90YWwpKVxuICAgICAgaXRlbS5yZU5hbWUudG90YWwgPSBpdGVtLnJlTmFtZS50b3RhbC5zcGxpdCgnLicpO1xuICAgIHRoaXMuX3JlcyA9IGl0ZW07XG4gIH1cbiAgcHJpdmF0ZSBfcmVzOiBTVFJlcztcbiAgLyoqIMOlwojCl8Omwo/Cj8Oowr/CsCAgKi9cbiAgQElucHV0KClcbiAgY29sdW1uczogU1RDb2x1bW5bXSA9IFtdO1xuICAvKiogw6bCr8KPw6nCocK1w6bClcKww6nCh8KPw6/CvMKMw6XCvcKTw6jCrsK+w6fCvcKuw6TCuMK6IGAwYCDDqMKhwqjDp8KkwrrDpMK4wo3DpcKIwobDqcKhwrXDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgMTBgICovXG4gIEBJbnB1dCgpXG4gIEBJbnB1dE51bWJlcigpXG4gIHBzID0gMTA7XG4gIC8qKiDDpcK9wpPDpcKJwo3DqcKhwrXDp8KgwoEgKi9cbiAgQElucHV0KClcbiAgQElucHV0TnVtYmVyKClcbiAgcGkgPSAxO1xuICAvKiogw6bClcKww6bCjcKuw6bCgMK7w6nCh8KPICovXG4gIEBJbnB1dCgpXG4gIEBJbnB1dE51bWJlcigpXG4gIHRvdGFsID0gMDtcbiAgLyoqIMOlwojChsOpwqHCtcOlwpnCqMOpwoXCjcOnwr3CriAqL1xuICBASW5wdXQoKVxuICBnZXQgcGFnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGFnZTtcbiAgfVxuICBzZXQgcGFnZSh2YWx1ZTogU1RQYWdlKSB7XG4gICAgdGhpcy5jbG9uZVBhZ2UgPSB2YWx1ZTtcbiAgICBjb25zdCB7IHBhZ2UgfSA9IHRoaXMuY29nO1xuICAgIGNvbnN0IGl0ZW0gPSBPYmplY3QuYXNzaWduKHt9LCBkZWVwQ29weShwYWdlKSwgdmFsdWUpO1xuICAgIGNvbnN0IHsgdG90YWwgfSA9IGl0ZW07XG4gICAgaWYgKHR5cGVvZiB0b3RhbCA9PT0gJ3N0cmluZycgJiYgdG90YWwubGVuZ3RoKSB7XG4gICAgICB0aGlzLnRvdGFsVHBsID0gdG90YWw7XG4gICAgfSBlbHNlIGlmICh0b0Jvb2xlYW4odG90YWwpKSB7XG4gICAgICB0aGlzLnRvdGFsVHBsID0gdGhpcy5sb2NhbGUudG90YWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudG90YWxUcGwgPSAnJztcbiAgICB9XG4gICAgdGhpcy5fcGFnZSA9IGl0ZW07XG4gIH1cbiAgcHJpdmF0ZSBfcGFnZTogU1RQYWdlO1xuICAvKiogw6bCmMKvw6XCkMKmw6bCmMK+w6fCpMK6TG9hZGluZyAqL1xuICBASW5wdXQoKVxuICBASW5wdXRCb29sZWFuKClcbiAgbG9hZGluZyA9IGZhbHNlO1xuICAvKiogw6XCu8K2w6jCv8Kfw6bCmMK+w6fCpMK6w6XCisKgw6jCvcK9w6bClcKIw6bCnsKcw6fCmsKEw6bCl8K2w6nCl8K0w6/CvMKIw6nCmMKyw6bCrcKiw6nCl8Kqw6fCg8KBw6/CvMKJICovXG4gIEBJbnB1dCgpXG4gIEBJbnB1dE51bWJlcigpXG4gIGxvYWRpbmdEZWxheSA9IDA7XG4gIC8qKiDDpsKYwq/DpcKQwqbDpsKYwr7Dp8KkwrrDqMK+wrnDpsKhwoYgKi9cbiAgQElucHV0KClcbiAgQElucHV0Qm9vbGVhbigpXG4gIGJvcmRlcmVkID0gZmFsc2U7XG4gIC8qKiB0YWJsZcOlwqTCp8OlwrDCjyAqL1xuICBASW5wdXQoKVxuICBzaXplOiAnc21hbGwnIHwgJ21pZGRsZScgfCAnZGVmYXVsdCc7XG4gIC8qKiDDp8K6wrXDpcKQwpHDpsKUwq/DpsKMwoHDpsK7wprDpcKKwqjDr8K8wozDpMK5wp/DpcKPwq/Dp8KUwqjDpMK6wo7DpsKMwofDpcKuwprDpsK7wprDpcKKwqjDpcKMwrrDpcKfwp/Dp8KawoTDqcKrwpjDpcK6wqbDr8K8wppgeyB5OiAnMzAwcHgnLCB4OiAnMzAwcHgnIH1gICovXG4gIEBJbnB1dCgpXG4gIHNjcm9sbDogeyB5Pzogc3RyaW5nOyB4Pzogc3RyaW5nIH07XG4gIC8qKlxuICAgKiDDpcKNwpXDpsKOwpLDpcK6wo/DqMKnwoTDpcKIwplcbiAgICogLSDDqMKLwqXDpMK4wo3DpsKMwofDpcKuwprDr8K8wozDpcKIwpnDqMK/wpTDpcKbwp7Dr8K8wppgY29sdW1uTmFtZT1hc2NlbmR8ZGVzY2VuZGBcbiAgICogLSDDqMKLwqXDpsKMwofDpcKuwprDr8K8wozDpcKIwpnDqMK/wpTDpcKbwp7Dr8K8wppgc29ydD1jb2x1bW5OYW1lLihhc2NlbmR8ZGVzY2VuZClgXG4gICAqL1xuICBASW5wdXQoKVxuICBzaW5nbGVTb3J0OiBTVFNpbmdsZVNvcnQgPSBudWxsO1xuICBwcml2YXRlIF9tdWx0aVNvcnQ6IFNUTXVsdGlTb3J0O1xuICAvKiogw6bCmMKvw6XCkMKmw6XCpMKaw6bCjsKSw6XCusKPw6/CvMKMw6XCvcKTIGBzb3J0YCDDpcKkwprDpMK4wqrDp8KbwrjDpcKQwozDpcKAwrzDpsKXwrbDqMKHwqrDpcKKwqjDpcKQwojDpcK5wrbDr8K8wozDpcK7wrrDqMKuwq7DpcKQwo7Dp8Krwq/DpsKUwq/DpsKMwoHDpsKXwrbDpMK9wr/Dp8KUwqggKi9cbiAgQElucHV0KClcbiAgZ2V0IG11bHRpU29ydCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbXVsdGlTb3J0O1xuICB9XG4gIHNldCBtdWx0aVNvcnQodmFsdWU6IGFueSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJyAmJiAhdG9Cb29sZWFuKHZhbHVlKSkge1xuICAgICAgdGhpcy5fbXVsdGlTb3J0ID0gbnVsbDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fbXVsdGlTb3J0ID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIDxTVE11bHRpU29ydD57XG4gICAgICAgIGtleTogJ3NvcnQnLFxuICAgICAgICBzZXBhcmF0b3I6ICctJyxcbiAgICAgICAgbmFtZVNlcGFyYXRvcjogJy4nLFxuICAgICAgfSxcbiAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgPyB2YWx1ZSA6IHt9LFxuICAgICk7XG4gIH1cbiAgQElucHV0KClcbiAgcm93Q2xhc3NOYW1lOiBTVFJvd0NsYXNzTmFtZTtcbiAgLyoqIGBoZWFkZXJgIMOmwqDCh8OpwqLCmCAqL1xuICBASW5wdXQoKVxuICBoZWFkZXI6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICAvKiogYGZvb3RlcmAgw6XCusKVw6nCg8KoICovXG4gIEBJbnB1dCgpXG4gIGZvb3Rlcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIC8qKiDDqcKiwp3DpcKkwpYgYGJvZHlgIMOlwobChcOlwq7CuSAqL1xuICBASW5wdXQoKVxuICBib2R5OiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgLyoqIGBleHBhbmRgIMOlwo/Cr8OlwrHClcOlwrzCgMOvwrzCjMOlwr3Ck8OmwpXCsMOmwo3CrsOmwrrCkMOkwrjCrcOlwozChcOmwovCrCBgZXhwYW5kYCDDqMKhwqjDp8KkwrrDpcKxwpXDpcK8woDDp8KKwrbDpsKAwoEgKi9cbiAgQElucHV0KClcbiAgZXhwYW5kOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogYW55OyBjb2x1bW46IFNUQ29sdW1uIH0+O1xuICBASW5wdXQoKVxuICBub1Jlc3VsdDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpXG4gIHdpZHRoQ29uZmlnOiBzdHJpbmdbXTtcbiAgLyoqIMOowq/Ct8OmwrHCgsOlwrzCgsOlwrjCuMOmwpfCtsOlwpvCnsOowrDCgyAqL1xuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgZXJyb3IgPSBuZXcgRXZlbnRFbWl0dGVyPFNURXJyb3I+KCk7XG4gIC8qKlxuICAgKiDDpcKPwpjDpcKMwpbDpsKXwrbDpcKbwp7DqMKwwoPDr8K8wozDpcKMwoXDpsKLwqzDr8K8wppgcGlgw6PCgMKBYHBzYMOjwoDCgWBjaGVja2JveGDDo8KAwoFgcmFkaW9gw6PCgMKBYHNvcnRgw6PCgMKBYGZpbHRlcmDDo8KAwoFgY2xpY2tgw6PCgMKBYGRibENsaWNrYCDDpcKPwpjDpcKKwqhcbiAgICovXG4gIEBPdXRwdXQoKVxuICByZWFkb25seSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFNUQ2hhbmdlPigpO1xuICAvKiogw6jCocKMw6XCjcKVw6XCh8K7w6XCpMKaw6XCsMKRw6bCl8K2w6nClcK/w6TCucKLw6fCscK7w6TCuMK6w6XCj8KMw6XCh8K7w6/CvMKIw6XCjcKVw6TCvcKNw6/CvMKaw6bCr8Krw6fCp8KSw6/CvMKJw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYDIwMGAgKi9cbiAgQElucHV0KClcbiAgQElucHV0TnVtYmVyKClcbiAgcm93Q2xpY2tUaW1lID0gMjAwO1xuXG4gIEBJbnB1dCgpXG4gIEBJbnB1dEJvb2xlYW4oKVxuICByZXNwb25zaXZlSGlkZUhlYWRlckZvb3RlcjogYm9vbGVhbjtcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBjb2c6IFNUQ29uZmlnLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBleHBvcnRTcnY6IFNURXhwb3J0LFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChBTEFJTl9JMThOX1RPS0VOKVxuICAgIGkxOG5TcnY6IEFsYWluSTE4TlNlcnZpY2UsXG4gICAgcHJpdmF0ZSBtb2RhbEhlbHBlcjogTW9kYWxIZWxwZXIsXG4gICAgcHJpdmF0ZSBkcmF3ZXJIZWxwZXI6IERyYXdlckhlbHBlcixcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogYW55LFxuICAgIHByaXZhdGUgY29sdW1uU291cmNlOiBTVENvbHVtblNvdXJjZSxcbiAgICBwcml2YXRlIGRhdGFTb3VyY2U6IFNURGF0YVNvdXJjZSxcbiAgICBwcml2YXRlIGRlbG9uSTE4bjogRGVsb25Mb2NhbGVTZXJ2aWNlLFxuICApIHtcbiAgICB0aGlzLmRlbG9uSTE4biQgPSB0aGlzLmRlbG9uSTE4bi5jaGFuZ2Uuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMubG9jYWxlID0gdGhpcy5kZWxvbkkxOG4uZ2V0RGF0YSgnc3QnKTtcbiAgICAgIGlmICh0aGlzLl9jb2x1bW5zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5wYWdlID0gdGhpcy5jbG9uZVBhZ2U7XG4gICAgICAgIHRoaXMuY2QoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRlZXBDb3B5KGNvZykpO1xuICAgIGlmIChpMThuU3J2KSB7XG4gICAgICB0aGlzLmkxOG4kID0gaTE4blNydi5jaGFuZ2VcbiAgICAgICAgLnBpcGUoZmlsdGVyKCgpID0+IHRoaXMuX2NvbHVtbnMubGVuZ3RoID4gMCkpXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy51cGRhdGVDb2x1bW5zKCkpO1xuICAgIH1cbiAgfVxuXG4gIGNkKCkge1xuICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgcmVuZGVyVG90YWwodG90YWw6IHN0cmluZywgcmFuZ2U6IHN0cmluZ1tdKSB7XG4gICAgcmV0dXJuIHRoaXMudG90YWxUcGxcbiAgICAgID8gdGhpcy50b3RhbFRwbFxuICAgICAgICAgIC5yZXBsYWNlKCd7e3RvdGFsfX0nLCB0b3RhbClcbiAgICAgICAgICAucmVwbGFjZSgne3tyYW5nZVswXX19JywgcmFuZ2VbMF0pXG4gICAgICAgICAgLnJlcGxhY2UoJ3t7cmFuZ2VbMV19fScsIHJhbmdlWzFdKVxuICAgICAgOiAnJztcbiAgfVxuXG4gIHByaXZhdGUgY2hhbmdlRW1pdCh0eXBlOiBTVENoYW5nZVR5cGUsIGRhdGE/OiBhbnkpIHtcbiAgICBjb25zdCByZXM6IFNUQ2hhbmdlID0ge1xuICAgICAgdHlwZSxcbiAgICAgIHBpOiB0aGlzLnBpLFxuICAgICAgcHM6IHRoaXMucHMsXG4gICAgICB0b3RhbDogdGhpcy50b3RhbCxcbiAgICB9O1xuICAgIGlmIChkYXRhICE9IG51bGwpIHtcbiAgICAgIHJlc1t0eXBlXSA9IGRhdGE7XG4gICAgfVxuICAgIHRoaXMuY2hhbmdlLmVtaXQocmVzKTtcbiAgfVxuXG4gIC8vI3JlZ2lvbiBkYXRhXG5cbiAgcHJpdmF0ZSBfbG9hZCgpIHtcbiAgICBjb25zdCB7IHBpLCBwcywgZGF0YSwgcmVxLCByZXMsIHBhZ2UsIHRvdGFsLCBzaW5nbGVTb3J0LCBtdWx0aVNvcnQsIHJvd0NsYXNzTmFtZSB9ID0gdGhpcztcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgIHJldHVybiB0aGlzLmRhdGFTb3VyY2VcbiAgICAgIC5wcm9jZXNzKHtcbiAgICAgICAgcGksXG4gICAgICAgIHBzLFxuICAgICAgICB0b3RhbCxcbiAgICAgICAgZGF0YSxcbiAgICAgICAgcmVxLFxuICAgICAgICByZXMsXG4gICAgICAgIHBhZ2UsXG4gICAgICAgIGNvbHVtbnM6IHRoaXMuX2NvbHVtbnMsXG4gICAgICAgIHNpbmdsZVNvcnQsXG4gICAgICAgIG11bHRpU29ydCxcbiAgICAgICAgcm93Q2xhc3NOYW1lXG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0LnBpICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRoaXMucGkgPSByZXN1bHQucGk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQudG90YWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhpcy50b3RhbCA9IHJlc3VsdC50b3RhbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdC5wYWdlU2hvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aGlzLl9pc1BhZ2luYXRpb24gPSByZXN1bHQucGFnZVNob3c7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZGF0YSA9IHJlc3VsdC5saXN0O1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgICAgIH0pXG4gICAgICAudGhlbigoKSA9PiB0aGlzLl9yZWZDaGVjaygpKVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZXJyb3IuZW1pdCh7IHR5cGU6ICdyZXEnLCBlcnJvciB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqIMOmwrjChcOnwqnCusOmwonCgMOmwpzCicOmwpXCsMOmwo3CriAqL1xuICBjbGVhcihjbGVhblN0YXR1cyA9IHRydWUpIHtcbiAgICBpZiAoY2xlYW5TdGF0dXMpIHtcbiAgICAgIHRoaXMuY2xlYXJTdGF0dXMoKTtcbiAgICB9XG4gICAgdGhpcy5fZGF0YS5sZW5ndGggPSAwO1xuICAgIHRoaXMuY2QoKTtcbiAgfVxuXG4gIC8qKiDDpsK4woXDp8KpwrrDpsKJwoDDpsKcwonDp8KKwrbDpsKAwoEgKi9cbiAgY2xlYXJTdGF0dXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xlYXJDaGVjaygpXG4gICAgICAuY2xlYXJSYWRpbygpXG4gICAgICAuY2xlYXJGaWx0ZXIoKVxuICAgICAgLmNsZWFyU29ydCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIMOmwqDCucOmwo3CrsOpwqHCtcOnwqDCgcOpwofCjcOmwpbCsMOlworCoMOowr3CvcOmwpXCsMOmwo3CrlxuICAgKlxuICAgKiBAcGFyYW0gcGkgw6bCjMKHw6XCrsKaw6XCvcKTw6XCicKNw6nCocK1w6fCoMKBw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYDFgXG4gICAqIEBwYXJhbSBleHRyYVBhcmFtcyDDqcKHwo3DpsKWwrDDpsKMwofDpcKuwpogYGV4dHJhUGFyYW1zYCDDpcKAwrxcbiAgICogQHBhcmFtIG9wdGlvbnMgw6nCgMKJw6nCocK5XG4gICAqL1xuICBsb2FkKHBpID0gMSwgZXh0cmFQYXJhbXM/OiBhbnksIG9wdGlvbnM/OiBTVExvYWRPcHRpb25zKSB7XG4gICAgaWYgKHBpICE9PSAtMSkgdGhpcy5waSA9IHBpO1xuICAgIGlmICh0eXBlb2YgZXh0cmFQYXJhbXMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLl9yZXEucGFyYW1zID1cbiAgICAgICAgb3B0aW9ucyAmJiBvcHRpb25zLm1lcmdlXG4gICAgICAgICAgPyBPYmplY3QuYXNzaWduKHRoaXMuX3JlcS5wYXJhbXMsIGV4dHJhUGFyYW1zKVxuICAgICAgICAgIDogZXh0cmFQYXJhbXM7XG4gICAgfVxuICAgIHRoaXMuX2NoYW5nZSgncGknKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDDqcKHwo3DpsKWwrDDpcKIwrfDpsKWwrDDpcK9wpPDpcKJwo3DqcKhwrVcbiAgICogQHBhcmFtIGV4dHJhUGFyYW1zIMOpwofCjcOmwpbCsMOmwozCh8Olwq7CmiBgZXh0cmFQYXJhbXNgIMOlwoDCvFxuICAgKi9cbiAgcmVsb2FkKGV4dHJhUGFyYW1zPzogYW55LCBvcHRpb25zPzogU1RMb2FkT3B0aW9ucykge1xuICAgIHRoaXMubG9hZCgtMSwgZXh0cmFQYXJhbXMsIG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIMOpwofCjcOnwr3CrsOkwrjClMOpwofCjcOmwpbCsMOowq7CvsOnwr3CriBgcGlgIMOkwrjCuiBgMWDDr8K8wozDpcKMwoXDpcKQwqvDpMK7wqXDpMK4wovDpcKAwrzDr8K8wppcbiAgICogLSBgY2hlY2tgIMOmwpXCsMOmwo3CrlxuICAgKiAtIGByYWRpb2Agw6bClcKww6bCjcKuXG4gICAqIC0gYHNvcnRgIMOmwpXCsMOmwo3CrlxuICAgKiAtIGBmaWxldGVyYCDDpsKVwrDDpsKNwq5cbiAgICpcbiAgICogQHBhcmFtIGV4dHJhUGFyYW1zIMOpwofCjcOmwpbCsMOmwozCh8Olwq7CmiBgZXh0cmFQYXJhbXNgIMOlwoDCvFxuICAgKi9cbiAgcmVzZXQoZXh0cmFQYXJhbXM/OiBhbnksIG9wdGlvbnM/OiBTVExvYWRPcHRpb25zKSB7XG4gICAgdGhpcy5jbGVhclN0YXR1cygpLmxvYWQoMSwgZXh0cmFQYXJhbXMsIG9wdGlvbnMpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdG9Ub3AoKSB7XG4gICAgaWYgKCF0aGlzLnBhZ2UudG9Ub3ApIHJldHVybjtcbiAgICBjb25zdCBlbCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICBpZiAodGhpcy5zY3JvbGwpIHtcbiAgICAgIGVsLnF1ZXJ5U2VsZWN0b3IoJy5hbnQtdGFibGUtYm9keScpLnNjcm9sbFRvKDAsIDApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbC5zY3JvbGxJbnRvVmlldygpO1xuICAgIC8vIGZpeCBoZWFkZXIgaGVpZ2h0XG4gICAgdGhpcy5kb2MuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCAtPSB0aGlzLnBhZ2UudG9Ub3BPZmZzZXQ7XG4gIH1cblxuICBfY2hhbmdlKHR5cGU6ICdwaScgfCAncHMnKSB7XG4gICAgdGhpcy5fbG9hZCgpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5fdG9Ub3AoKTtcbiAgICB9KTtcbiAgICB0aGlzLmNoYW5nZUVtaXQodHlwZSk7XG4gIH1cblxuICBfY2xpY2soZTogRXZlbnQsIGl0ZW06IFNURGF0YSwgY29sOiBTVENvbHVtbikge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IHJlcyA9IGNvbC5jbGljayhpdGVtLCB0aGlzKTtcbiAgICBpZiAodHlwZW9mIHJlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwocmVzKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSByb3dDbGlja0NvdW50ID0gMDtcbiAgX3Jvd0NsaWNrKGU6IEV2ZW50LCBpdGVtOiBTVERhdGEsIGluZGV4OiBudW1iZXIpIHtcbiAgICBpZiAoKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5ub2RlTmFtZSA9PT0gJ0lOUFVUJykgcmV0dXJuO1xuICAgICsrdGhpcy5yb3dDbGlja0NvdW50O1xuICAgIGlmICh0aGlzLnJvd0NsaWNrQ291bnQgIT09IDEpIHJldHVybjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IGRhdGEgPSB7IGUsIGl0ZW0sIGluZGV4IH07XG4gICAgICBpZiAodGhpcy5yb3dDbGlja0NvdW50ID09PSAxKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlRW1pdCgnY2xpY2snLCBkYXRhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2hhbmdlRW1pdCgnZGJsQ2xpY2snLCBkYXRhKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucm93Q2xpY2tDb3VudCA9IDA7XG4gICAgfSwgdGhpcy5yb3dDbGlja1RpbWUpO1xuICB9XG5cbiAgLyoqIMOnwqfCu8OpwpnCpMOmwp/CkMOowqHCjMOmwpXCsMOmwo3CriAqL1xuICByZW1vdmVSb3coZGF0YTogU1REYXRhIHwgU1REYXRhW10pIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgIGRhdGEgPSBbIGRhdGEgXTtcbiAgICB9XG5cbiAgICAoZGF0YSBhcyBTVERhdGFbXSkubWFwKGl0ZW0gPT4gdGhpcy5fZGF0YS5pbmRleE9mKGl0ZW0pKVxuICAgICAgICAuZmlsdGVyKHBvcyA9PiBwb3MgIT09IC0xKVxuICAgICAgICAuZm9yRWFjaChwb3MgPT4gdGhpcy5fZGF0YS5zcGxpY2UocG9zLCAxKSk7XG5cbiAgICB0aGlzLmNkKCk7XG4gIH1cblxuICAvLyNlbmRyZWdpb25cblxuICAvLyNyZWdpb24gc29ydFxuXG4gIHNvcnQoY29sOiBTVENvbHVtbiwgaWR4OiBudW1iZXIsIHZhbHVlOiBhbnkpIHtcbiAgICBpZiAodGhpcy5tdWx0aVNvcnQpIHtcbiAgICAgIGNvbC5fc29ydC5kZWZhdWx0ID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NvbHVtbnMuZm9yRWFjaChcbiAgICAgICAgKGl0ZW0sIGluZGV4KSA9PiAoaXRlbS5fc29ydC5kZWZhdWx0ID0gaW5kZXggPT09IGlkeCA/IHZhbHVlIDogbnVsbCksXG4gICAgICApO1xuICAgIH1cbiAgICB0aGlzLl9sb2FkKCk7XG4gICAgY29uc3QgcmVzID0ge1xuICAgICAgdmFsdWUsXG4gICAgICBtYXA6IHRoaXMuZGF0YVNvdXJjZS5nZXRSZXFTb3J0TWFwKHRoaXMuc2luZ2xlU29ydCwgdGhpcy5tdWx0aVNvcnQsIHRoaXMuX2NvbHVtbnMpLFxuICAgICAgY29sdW1uOiBjb2wsXG4gICAgfTtcbiAgICB0aGlzLmNoYW5nZUVtaXQoJ3NvcnQnLCByZXMpO1xuICB9XG5cbiAgY2xlYXJTb3J0KCkge1xuICAgIHRoaXMuX2NvbHVtbnMuZm9yRWFjaChpdGVtID0+IChpdGVtLl9zb3J0LmRlZmF1bHQgPSBudWxsKSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyNlbmRyZWdpb25cblxuICAvLyNyZWdpb24gZmlsdGVyXG5cbiAgcHJpdmF0ZSBoYW5kbGVGaWx0ZXIoY29sOiBTVENvbHVtbikge1xuICAgIGNvbC5maWx0ZXIuZGVmYXVsdCA9IGNvbC5maWx0ZXIubWVudXMuZmluZEluZGV4KHcgPT4gdy5jaGVja2VkKSAhPT0gLTE7XG4gICAgdGhpcy5fbG9hZCgpO1xuICAgIHRoaXMuY2hhbmdlRW1pdCgnZmlsdGVyJywgY29sKTtcbiAgfVxuXG4gIF9maWx0ZXJDb25maXJtKGNvbDogU1RDb2x1bW4pIHtcbiAgICB0aGlzLmhhbmRsZUZpbHRlcihjb2wpO1xuICB9XG5cbiAgX2ZpbHRlckNsZWFyKGNvbDogU1RDb2x1bW4pIHtcbiAgICBjb2wuZmlsdGVyLm1lbnVzLmZvckVhY2goaSA9PiAoaS5jaGVja2VkID0gZmFsc2UpKTtcbiAgICB0aGlzLmhhbmRsZUZpbHRlcihjb2wpO1xuICB9XG5cbiAgX2ZpbHRlclJhZGlvKGNvbDogU1RDb2x1bW4sIGl0ZW06IFNUQ29sdW1uRmlsdGVyTWVudSwgY2hlY2tlZDogYm9vbGVhbikge1xuICAgIGNvbC5maWx0ZXIubWVudXMuZm9yRWFjaChpID0+IChpLmNoZWNrZWQgPSBmYWxzZSkpO1xuICAgIGl0ZW0uY2hlY2tlZCA9IGNoZWNrZWQ7XG4gIH1cblxuICBjbGVhckZpbHRlcigpIHtcbiAgICB0aGlzLl9jb2x1bW5zXG4gICAgICAuZmlsdGVyKHcgPT4gdy5maWx0ZXIgJiYgdy5maWx0ZXIuZGVmYXVsdCA9PT0gdHJ1ZSlcbiAgICAgIC5mb3JFYWNoKGNvbCA9PiB7XG4gICAgICAgIGNvbC5maWx0ZXIuZGVmYXVsdCA9IGZhbHNlO1xuICAgICAgICBjb2wuZmlsdGVyLm1lbnVzLmZvckVhY2goZiA9PiAoZi5jaGVja2VkID0gZmFsc2UpKTtcbiAgICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8jZW5kcmVnaW9uXG5cbiAgLy8jcmVnaW9uIGNoZWNrYm94XG5cbiAgLyoqIMOmwrjChcOpwpnCpMOmwonCgMOmwpzCiSBgY2hlY2tib3hgICovXG4gIGNsZWFyQ2hlY2soKTogdGhpcyB7XG4gICAgcmV0dXJuIHRoaXMuX2NoZWNrQWxsKGZhbHNlKTtcbiAgfVxuXG4gIHByaXZhdGUgX3JlZkNoZWNrKCk6IHRoaXMge1xuICAgIGNvbnN0IHZhbGlkRGF0YSA9IHRoaXMuX2RhdGEuZmlsdGVyKHcgPT4gIXcuZGlzYWJsZWQpO1xuICAgIGNvbnN0IGNoZWNrZWRMaXN0ID0gdmFsaWREYXRhLmZpbHRlcih3ID0+IHcuY2hlY2tlZCA9PT0gdHJ1ZSk7XG4gICAgdGhpcy5fYWxsQ2hlY2tlZCA9XG4gICAgICBjaGVja2VkTGlzdC5sZW5ndGggPiAwICYmIGNoZWNrZWRMaXN0Lmxlbmd0aCA9PT0gdmFsaWREYXRhLmxlbmd0aDtcbiAgICBjb25zdCBhbGxVbkNoZWNrZWQgPSB2YWxpZERhdGEuZXZlcnkodmFsdWUgPT4gIXZhbHVlLmNoZWNrZWQpO1xuICAgIHRoaXMuX2luZGV0ZXJtaW5hdGUgPSAhdGhpcy5fYWxsQ2hlY2tlZCAmJiAhYWxsVW5DaGVja2VkO1xuICAgIHRoaXMuY2QoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIF9jaGVja0FsbChjaGVja2VkPzogYm9vbGVhbik6IHRoaXMge1xuICAgIGNoZWNrZWQgPSB0eXBlb2YgY2hlY2tlZCA9PT0gJ3VuZGVmaW5lZCcgPyB0aGlzLl9hbGxDaGVja2VkIDogY2hlY2tlZDtcbiAgICB0aGlzLl9kYXRhLmZpbHRlcih3ID0+ICF3LmRpc2FibGVkKS5mb3JFYWNoKGkgPT4gKGkuY2hlY2tlZCA9IGNoZWNrZWQpKTtcbiAgICByZXR1cm4gdGhpcy5fcmVmQ2hlY2soKS5fY2hlY2tOb3RpZnkoKTtcbiAgfVxuXG4gIF9jaGVja1NlbGVjdGlvbihpOiBTVERhdGEsIHZhbHVlOiBib29sZWFuKSB7XG4gICAgaS5jaGVja2VkID0gdmFsdWU7XG4gICAgcmV0dXJuIHRoaXMuX3JlZkNoZWNrKCkuX2NoZWNrTm90aWZ5KCk7XG4gIH1cblxuICBfcm93U2VsZWN0aW9uKHJvdzogU1RDb2x1bW5TZWxlY3Rpb24pOiB0aGlzIHtcbiAgICByb3cuc2VsZWN0KHRoaXMuX2RhdGEpO1xuICAgIHJldHVybiB0aGlzLl9yZWZDaGVjaygpLl9jaGVja05vdGlmeSgpO1xuICB9XG5cbiAgX2NoZWNrTm90aWZ5KCk6IHRoaXMge1xuICAgIGNvbnN0IHJlcyA9IHRoaXMuX2RhdGEuZmlsdGVyKHcgPT4gIXcuZGlzYWJsZWQgJiYgdy5jaGVja2VkID09PSB0cnVlKTtcbiAgICB0aGlzLmNoYW5nZUVtaXQoJ2NoZWNrYm94JywgcmVzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vI2VuZHJlZ2lvblxuXG4gIC8vI3JlZ2lvbiByYWRpb1xuXG4gIC8qKiDDpsK4woXDqcKZwqTDpsKJwoDDpsKcwokgYHJhZGlvYCAqL1xuICBjbGVhclJhZGlvKCk6IHRoaXMge1xuICAgIHRoaXMuX2RhdGEuZmlsdGVyKHcgPT4gdy5jaGVja2VkKS5mb3JFYWNoKGl0ZW0gPT4gKGl0ZW0uY2hlY2tlZCA9IGZhbHNlKSk7XG4gICAgdGhpcy5jaGFuZ2VFbWl0KCdyYWRpbycsIG51bGwpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgX3JlZlJhZGlvKGNoZWNrZWQ6IGJvb2xlYW4sIGl0ZW06IFNURGF0YSk6IHRoaXMge1xuICAgIC8vIGlmIChpdGVtLmRpc2FibGVkID09PSB0cnVlKSByZXR1cm47XG4gICAgdGhpcy5fZGF0YS5maWx0ZXIodyA9PiAhdy5kaXNhYmxlZCkuZm9yRWFjaChpID0+IChpLmNoZWNrZWQgPSBmYWxzZSkpO1xuICAgIGl0ZW0uY2hlY2tlZCA9IGNoZWNrZWQ7XG4gICAgdGhpcy5jaGFuZ2VFbWl0KCdyYWRpbycsIGl0ZW0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8jZW5kcmVnaW9uXG5cbiAgLy8jcmVnaW9uIGJ1dHRvbnNcblxuICBfYnRuQ2xpY2soZTogRXZlbnQsIHJlY29yZDogU1REYXRhLCBidG46IFNUQ29sdW1uQnV0dG9uKSB7XG4gICAgaWYgKGUpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgIGlmIChidG4udHlwZSA9PT0gJ21vZGFsJyB8fCBidG4udHlwZSA9PT0gJ3N0YXRpYycpIHtcbiAgICAgIGNvbnN0IG9iaiA9IHt9O1xuICAgICAgY29uc3QgeyBtb2RhbCB9ID0gYnRuO1xuICAgICAgb2JqW21vZGFsLnBhcmFtc05hbWVdID0gcmVjb3JkO1xuICAgICAgY29uc3Qgb3B0aW9uczogTW9kYWxIZWxwZXJPcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgbW9kYWwpO1xuICAgICAgKHRoaXMubW9kYWxIZWxwZXJbXG4gICAgICAgIGJ0bi50eXBlID09PSAnbW9kYWwnID8gJ2NyZWF0ZScgOiAnY3JlYXRlU3RhdGljJ1xuICAgICAgXSBhcyBhbnkpKFxuICAgICAgICBtb2RhbC5jb21wb25lbnQsXG4gICAgICAgIE9iamVjdC5hc3NpZ24ob2JqLCBtb2RhbC5wYXJhbXMgJiYgbW9kYWwucGFyYW1zKHJlY29yZCkpLFxuICAgICAgICBvcHRpb25zLFxuICAgICAgKVxuICAgICAgICAucGlwZShmaWx0ZXIodyA9PiB0eXBlb2YgdyAhPT0gJ3VuZGVmaW5lZCcpKVxuICAgICAgICAuc3Vic2NyaWJlKHJlcyA9PiB0aGlzLmJ0bkNhbGxiYWNrKHJlY29yZCwgYnRuLCByZXMpKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKGJ0bi50eXBlID09PSAnZHJhd2VyJykge1xuICAgICAgY29uc3Qgb2JqID0ge307XG4gICAgICBjb25zdCB7IGRyYXdlciB9ID0gYnRuO1xuICAgICAgb2JqW2RyYXdlci5wYXJhbXNOYW1lXSA9IHJlY29yZDtcbiAgICAgIHRoaXMuZHJhd2VySGVscGVyXG4gICAgICAgIC5jcmVhdGUoXG4gICAgICAgICAgZHJhd2VyLnRpdGxlLFxuICAgICAgICAgIGRyYXdlci5jb21wb25lbnQsXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihvYmosIGRyYXdlci5wYXJhbXMgJiYgZHJhd2VyLnBhcmFtcyhyZWNvcmQpKSxcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBkcmF3ZXIpLFxuICAgICAgICApXG4gICAgICAgIC5waXBlKGZpbHRlcih3ID0+IHR5cGVvZiB3ICE9PSAndW5kZWZpbmVkJykpXG4gICAgICAgIC5zdWJzY3JpYmUocmVzID0+IHRoaXMuYnRuQ2FsbGJhY2socmVjb3JkLCBidG4sIHJlcykpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoYnRuLnR5cGUgPT09ICdsaW5rJykge1xuICAgICAgY29uc3QgY2xpY2tSZXMgPSB0aGlzLmJ0bkNhbGxiYWNrKHJlY29yZCwgYnRuKTtcbiAgICAgIGlmICh0eXBlb2YgY2xpY2tSZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoY2xpY2tSZXMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmJ0bkNhbGxiYWNrKHJlY29yZCwgYnRuKTtcbiAgfVxuXG4gIHByaXZhdGUgYnRuQ2FsbGJhY2socmVjb3JkOiBTVERhdGEsIGJ0bjogU1RDb2x1bW5CdXR0b24sIG1vZGFsPzogYW55KSB7XG4gICAgaWYgKCFidG4uY2xpY2spIHJldHVybjtcbiAgICBpZiAodHlwZW9mIGJ0bi5jbGljayA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHN3aXRjaCAoYnRuLmNsaWNrKSB7XG4gICAgICAgIGNhc2UgJ2xvYWQnOlxuICAgICAgICAgIHRoaXMubG9hZCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdyZWxvYWQnOlxuICAgICAgICAgIHRoaXMucmVsb2FkKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBidG4uY2xpY2socmVjb3JkLCBtb2RhbCwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgX2J0blRleHQocmVjb3JkOiBhbnksIGJ0bjogU1RDb2x1bW5CdXR0b24pIHtcbiAgICBpZiAoYnRuLmZvcm1hdCkgcmV0dXJuIGJ0bi5mb3JtYXQocmVjb3JkLCBidG4pO1xuICAgIHJldHVybiBidG4udGV4dCB8fCAnJztcbiAgfVxuXG4gIF92YWxpZEJ0bnMoaXRlbTogU1REYXRhLCBjb2w6IFNUQ29sdW1uKTogU1RDb2x1bW5CdXR0b25bXSB7XG4gICAgcmV0dXJuIGNvbC5idXR0b25zLmZpbHRlcihidG4gPT4gYnRuLmlpZihpdGVtLCBidG4sIGNvbCkpO1xuICB9XG5cbiAgLy8jZW5kcmVnaW9uXG5cbiAgLy8jcmVnaW9uIGV4cG9ydFxuXG4gIC8qKlxuICAgKiDDpcKvwrzDpcKHwrrDpcK9wpPDpcKJwo3DqcKhwrXDr8K8wozDp8Khwq7DpMK/wp3DpcK3wrLDp8K7wo/DpsKzwqjDpcKGwowgYFhsc3hNb2R1bGVgXG4gICAqIEBwYXJhbSBuZXdEYXRhIMOpwofCjcOmwpbCsMOmwozCh8Olwq7CmsOmwpXCsMOmwo3CrsOvwrzCjMOkwr7Ci8OlwqbCgsOlwrjCjMOmwpzCm8Olwq/CvMOlwofCusOmwonCgMOmwpzCicOmwpXCsMOmwo3CrsOpwp3CnsOlwrjCuMOmwpzCicOnwpTCqFxuICAgKiBAcGFyYW0gb3B0IMOpwqLCncOlwqTClsOlwo/CgsOmwpXCsFxuICAgKi9cbiAgZXhwb3J0KG5ld0RhdGE/OiBhbnlbXSwgb3B0PzogU1RFeHBvcnRPcHRpb25zKSB7XG4gICAgKG5ld0RhdGEgPyBvZihuZXdEYXRhKSA6IG9mKHRoaXMuX2RhdGEpKS5zdWJzY3JpYmUoKHJlczogYW55W10pID0+XG4gICAgICB0aGlzLmV4cG9ydFNydi5leHBvcnQoXG4gICAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdCwgPFNURXhwb3J0T3B0aW9ucz57XG4gICAgICAgICAgX2Q6IHJlcyxcbiAgICAgICAgICBfYzogdGhpcy5fY29sdW1ucyxcbiAgICAgICAgfSksXG4gICAgICApLFxuICAgICk7XG4gIH1cblxuICAvLyNlbmRyZWdpb25cblxuICBwcml2YXRlIHVwZGF0ZUNvbHVtbnMoKSB7XG4gICAgdGhpcy5fY29sdW1ucyA9IHRoaXMuY29sdW1uU291cmNlLnByb2Nlc3ModGhpcy5jb2x1bW5zKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0Q2xhc3MoKSB7XG4gICAgdXBkYXRlSG9zdENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5yZW5kZXJlciwge1xuICAgICAgW2BzdGBdOiB0cnVlLFxuICAgICAgW2BzdF9fcC0ke3RoaXMucGFnZS5wbGFjZW1lbnR9YF06IHRoaXMucGFnZS5wbGFjZW1lbnQsXG4gICAgICBbYGFudC10YWJsZS1yZXBfX2hpZGUtaGVhZGVyLWZvb3RlcmBdOiB0aGlzLnJlc3BvbnNpdmVIaWRlSGVhZGVyRm9vdGVyLFxuICAgIH0pO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuY29sdW1uU291cmNlLnJlc3RvcmVBbGxSZW5kZXIodGhpcy5fY29sdW1ucyk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhcbiAgICBjaGFuZ2VzOiB7IFtQIGluIGtleW9mIHRoaXNdPzogU2ltcGxlQ2hhbmdlIH0gJiBTaW1wbGVDaGFuZ2VzLFxuICApOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5jb2x1bW5zKSB7XG4gICAgICB0aGlzLnVwZGF0ZUNvbHVtbnMoKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMuZGF0YSAmJiBjaGFuZ2VzLmRhdGEuY3VycmVudFZhbHVlKSB7XG4gICAgICB0aGlzLl9sb2FkKCk7XG4gICAgfVxuICAgIHRoaXMuc2V0Q2xhc3MoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVsb25JMThuJC51bnN1YnNjcmliZSgpO1xuICAgIGlmICh0aGlzLmkxOG4kKSB0aGlzLmkxOG4kLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOZ1pvcnJvQW50ZE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xuXG5pbXBvcnQgeyBEZWxvblV0aWxNb2R1bGUgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBEZWxvbkFDTE1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hY2wnO1xuXG5pbXBvcnQgeyBTVENvbXBvbmVudCB9IGZyb20gJy4vdGFibGUuY29tcG9uZW50JztcbmltcG9ydCB7IFNUUm93RGlyZWN0aXZlIH0gZnJvbSAnLi90YWJsZS1yb3cuZGlyZWN0aXZlJztcbmltcG9ydCB7IFNUQ29uZmlnIH0gZnJvbSAnLi90YWJsZS5jb25maWcnO1xuXG5jb25zdCBDT01QT05FTlRTID0gW1NUQ29tcG9uZW50LCBTVFJvd0RpcmVjdGl2ZV07XG5cbkBOZ01vZHVsZSh7XG4gIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBEZWxvblV0aWxNb2R1bGUsXG4gICAgRGVsb25BQ0xNb2R1bGUsXG4gICAgTmdab3Jyb0FudGRNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogWy4uLkNPTVBPTkVOVFNdLFxuICBleHBvcnRzOiBbLi4uQ09NUE9ORU5UU10sXG59KVxuZXhwb3J0IGNsYXNzIFNUTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHsgbmdNb2R1bGU6IFNUTW9kdWxlLCBwcm92aWRlcnM6IFtTVENvbmZpZ10gfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbInRzbGliXzEuX19kZWNvcmF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxNQVVhLFdBQVc7SUFEeEI7UUFFVSxXQUFNLEdBQXdDLEVBQUUsQ0FBQztRQUNqRCxTQUFJLEdBQXdDLEVBQUUsQ0FBQztLQWF4RDs7Ozs7OztJQVhDLEdBQUcsQ0FBQyxJQUFZLEVBQUUsSUFBWSxFQUFFLEdBQXFCO1FBQ25ELElBQUksQ0FBQyxJQUFJLEtBQUssT0FBTyxHQUFHLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUM7S0FDeEQ7Ozs7O0lBRUQsUUFBUSxDQUFDLElBQVk7UUFDbkIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzFCOzs7OztJQUVELE1BQU0sQ0FBQyxJQUFZO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLElB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