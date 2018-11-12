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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
                if (item["component"] != null) {
                    item.modal = {
                        component: item["component"],
                        params: item["params"],
                        paramsName: item["paramName"] || modal.paramsName,
                        size: item["size"] || modal.size,
                        modalOptions: item["modalOptions"] || modal.modalOptions,
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
            .forEach((item, idx) => (item["_left"] = list.slice(0, idx).reduce(countReduce, 0) + 'px'));
        // right width
        list
            .filter(w => w.fixed && w.fixed === 'right' && w.width)
            .reverse()
            .forEach((item, idx) => (item["_right"] =
            (idx > 0 ? list.slice(-idx).reduce(countReduce, 0) : 0) + 'px'));
    }
    /**
     * @param {?} item
     * @return {?}
     */
    sortCoerce(item) {
        // compatible
        if (item["sorter"] && typeof item["sorter"] === 'function') {
            return {
                enabled: true,
                default: /** @type {?} */ (item.sort),
                compare: item["sorter"],
                key: item["sortKey"] || item["indexKey"],
                reName: item["sortReName"],
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
            res.key = item["indexKey"];
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
        if (item["filters"] && item["filters"].length > 0) {
            res = {
                confirmText: item["filterConfirmText"],
                clearText: item["filterClearText"],
                default: item["filtered"],
                fn: /** @type {?} */ (item.filter),
                icon: item["filterIcon"],
                key: item["filterKey"] || item["indexKey"],
                menus: item["filters"],
                multiple: item["filterMultiple"],
                reName: item["filterReName"],
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
            res.key = item["indexKey"];
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
            item["__renderTitle"] = this.rowSource.getTitle(item.renderTitle);
        }
        if (item.render) {
            item["__render"] = this.rowSource.getRow(item.render);
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
        const copyColumens = /** @type {?} */ (deepCopy(list));
        for (const item of copyColumens) {
            if (this.acl && item.acl && !this.acl.can(item.acl)) {
                continue;
            }
            // index
            if (item.index) {
                if (!Array.isArray(item.index)) {
                    item.index = item.index.split('.');
                }
                item["indexKey"] = item.index.join('.');
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
                if (item["ynTruth"] != null)
                    item.yn.truth = item["ynTruth"];
                if (item["ynYes"] != null)
                    item.yn.yes = item["ynYes"];
                if (item["ynNo"] != null)
                    item.yn.no = item["ynNo"];
            }
            if ((item.type === 'link' && typeof item.click !== 'function') ||
                (item.type === 'badge' && item.badge == null) ||
                (item.type === 'tag' && item.tag == null)) {
                (/** @type {?} */ (item)).type = '';
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
            item["_sort"] = this.sortCoerce(item);
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
                    /** @type {?} */
                    let ret = deepGet(result, /** @type {?} */ (res.reName.list), []);
                    if (ret == null || !Array.isArray(ret)) {
                        ret = [];
                    }
                    /** @type {?} */
                    const resultTotal = res.reName.total &&
                        deepGet(result, /** @type {?} */ (res.reName.total), null);
                    retTotal = resultTotal == null ? total || 0 : +resultTotal;
                    return /** @type {?} */ (ret);
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
                    result[i]["_values"] = columns.map(c => this.get(result[i], c, i));
                    if (options.rowClassName) {
                        result[i]["_rowClassName"] = options.rowClassName(result[i], i);
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
            const formatRes = /** @type {?} */ (col.format(item, col));
            if (~formatRes.indexOf('<')) {
                return this.dom.bypassSecurityTrustHtml(formatRes);
            }
            return formatRes;
        }
        /** @type {?} */
        const value = deepGet(item, /** @type {?} */ (col.index), col.default);
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
        return ret;
    }
    /**
     * @param {?} url
     * @param {?} options
     * @return {?}
     */
    getByHttp(url, options) {
        const { req, page, pi, ps, multiSort, columns } = options;
        /** @type {?} */
        const method = (req.method || 'GET').toUpperCase();
        /** @type {?} */
        const params = Object.assign({
            [req.reName.pi]: page.zeroIndexed ? pi - 1 : pi,
            [req.reName.ps]: ps,
        }, req.params, this.getReqSortMap(multiSort, columns), this.getReqFilterMap(columns));
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
    /**
     * @param {?} columns
     * @return {?}
     */
    getValidSort(columns) {
        return columns
            .filter(item => item["_sort"] && item["_sort"].enabled && item["_sort"].default)
            .map(item => item["_sort"]);
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
     * @param {?} multiSort
     * @param {?} columns
     * @return {?}
     */
    getReqSortMap(multiSort, columns) {
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
            ret[mapData.key] =
                (sortList[0].reName || {})[mapData.default] || mapData.default;
        }
        return ret;
    }
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
            const val = deepGet(item, /** @type {?} */ (col.index), '');
            ret.v = val;
            switch (col.type) {
                case 'currency':
                    ret.t = 'n';
                    break;
                case 'date':
                    ret.t = 'd';
                    break;
                case 'yn':
                    ret.v = ret.v === col["ynTruth"] ? col["ynYes"] || '是' : col["ynNo"] || '否';
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class STComponent {
    /**
     * @param {?} cd
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
    constructor(cd, cog, router, el, renderer, exportSrv, i18nSrv, modalHelper, drawerHelper, doc, columnSource, dataSource, delonI18n) {
        this.cd = cd;
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
        /**
         * checkbox变化时回调，参数为当前所选清单
         * @deprecated 使用 `change` 替代
         */
        this.checkboxChange = new EventEmitter();
        /**
         * radio变化时回调，参数为当前所选
         * @deprecated 使用 `change` 替代
         */
        this.radioChange = new EventEmitter();
        /**
         * 排序回调
         * @deprecated 使用 `change` 替代
         */
        this.sortChange = new EventEmitter();
        /**
         * 过滤变化时回调
         * @deprecated 使用 `change` 替代
         */
        this.filterChange = new EventEmitter();
        /**
         * 行单击回调
         * @deprecated 使用 `change` 替代
         */
        this.rowClick = new EventEmitter();
        /**
         * 行双击回调
         * @deprecated 使用 `change` 替代
         */
        this.rowDblClick = new EventEmitter();
        this.rowClickCount = 0;
        this.delonI18n$ = this.delonI18n.change.subscribe(() => {
            this.locale = this.delonI18n.getData('st');
            if (this._columns.length > 0) {
                this.page = this.clonePage;
                this.cd.detectChanges();
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
        this._multiSort = Object.assign(/** @type {?} */ ({
            key: 'sort',
            separator: '-',
            nameSeparator: '.',
        }), typeof value === 'object' ? value : {});
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
    /**
     * @return {?}
     */
    _load() {
        const { pi, ps, data, req, res, page, total, multiSort, rowClassName } = this;
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
        this.clearCheck()
            .clearRadio()
            .clearFilter()
            .clearSort();
        this.load(1, extraParams, options);
    }
    /**
     * @return {?}
     */
    _toTop() {
        if (!this.page.toTop)
            return;
        /** @type {?} */
        const el = /** @type {?} */ (this.el.nativeElement);
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
        if ((/** @type {?} */ (e.target)).nodeName === 'INPUT')
            return;
        ++this.rowClickCount;
        if (this.rowClickCount !== 1)
            return;
        setTimeout(() => {
            /** @type {?} */
            const data = { e, item, index };
            if (this.rowClickCount === 1) {
                this.changeEmit('click', data);
                // @deprecated as of v3
                this.rowClick.emit(data);
            }
            else {
                this.changeEmit('dblClick', data);
                // @deprecated as of v3
                this.rowDblClick.emit(data);
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
        (/** @type {?} */ (data)).map(item => this._data.indexOf(item))
            .filter(pos => pos !== -1)
            .forEach(pos => this._data.splice(pos, 1));
        this.cd.detectChanges();
    }
    /**
     * @param {?} col
     * @param {?} idx
     * @param {?} value
     * @return {?}
     */
    sort(col, idx, value) {
        if (this.multiSort) {
            col["_sort"].default = value;
        }
        else {
            this._columns.forEach((item, index) => (item["_sort"].default = index === idx ? value : null));
        }
        this._load();
        /** @type {?} */
        const res = {
            value,
            map: this.dataSource.getReqSortMap(this.multiSort, this._columns),
            column: col,
        };
        this.changeEmit('sort', res);
        // @deprecated as of v3
        this.sortChange.emit(res);
    }
    /**
     * @return {?}
     */
    clearSort() {
        this._columns.forEach(item => (item["_sort"].default = null));
    }
    /**
     * @param {?} col
     * @return {?}
     */
    handleFilter(col) {
        col.filter.default = col.filter.menus.findIndex(w => w.checked) !== -1;
        this._load();
        this.changeEmit('filter', col);
        // @deprecated as of v3
        this.filterChange.emit(col);
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
     * @return {?}
     */
    clearFilter() {
        this._columns
            .filter(w => w.filter && w.filter.default === true)
            .forEach(col => {
            col.filter.default = false;
            col.filter.menus.forEach(f => (f.checked = false));
        });
        return this;
    }
    /**
     * 清除所有 `checkbox`
     * @return {?}
     */
    clearCheck() {
        return this._checkAll(false);
    }
    /**
     * @return {?}
     */
    _refCheck() {
        /** @type {?} */
        const validData = this._data.filter(w => !w.disabled);
        /** @type {?} */
        const checkedList = validData.filter(w => w.checked === true);
        this._allChecked =
            checkedList.length > 0 && checkedList.length === validData.length;
        /** @type {?} */
        const allUnChecked = validData.every(value => !value.checked);
        this._indeterminate = !this._allChecked && !allUnChecked;
        this.cd.detectChanges();
        return this;
    }
    /**
     * @param {?=} checked
     * @return {?}
     */
    _checkAll(checked) {
        checked = typeof checked === 'undefined' ? this._allChecked : checked;
        this._data.filter(w => !w.disabled).forEach(i => (i.checked = checked));
        return this._refCheck()._checkNotify();
    }
    /**
     * @param {?} i
     * @param {?} value
     * @return {?}
     */
    _checkSelection(i, value) {
        i.checked = value;
        return this._refCheck()._checkNotify();
    }
    /**
     * @param {?} row
     * @return {?}
     */
    _rowSelection(row) {
        row.select(this._data);
        return this._refCheck()._checkNotify();
    }
    /**
     * @return {?}
     */
    _checkNotify() {
        /** @type {?} */
        const res = this._data.filter(w => !w.disabled && w.checked === true);
        this.changeEmit('checkbox', res);
        // @deprecated as of v3
        this.checkboxChange.emit(res);
        return this;
    }
    /**
     * 清除所有 `radio`
     * @return {?}
     */
    clearRadio() {
        this._data.filter(w => w.checked).forEach(item => (item.checked = false));
        this.changeEmit('radio', null);
        // @deprecated as of v3
        this.radioChange.emit(null);
        return this;
    }
    /**
     * @param {?} checked
     * @param {?} item
     * @return {?}
     */
    _refRadio(checked, item) {
        // if (item.disabled === true) return;
        this._data.filter(w => !w.disabled).forEach(i => (i.checked = false));
        item.checked = checked;
        this.changeEmit('radio', item);
        // @deprecated as of v3
        this.radioChange.emit(item);
        return this;
    }
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
            (/** @type {?} */ (this.modalHelper[btn.type === 'modal' ? 'create' : 'createStatic']))(modal.component, Object.assign(obj, modal.params && modal.params(record)), options)
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
        return btn.text;
    }
    /**
     * @param {?} item
     * @param {?} col
     * @return {?}
     */
    _validBtns(item, col) {
        return col.buttons.filter(btn => btn.iif(item, btn, col));
    }
    /**
     * 导出当前页，确保已经注册 `XlsxModule`
     * @param {?=} newData 重新指定数据，例如希望导出所有数据非常有用
     * @param {?=} opt 额外参数
     * @return {?}
     */
    export(newData, opt) {
        (newData ? of(newData) : of(this._data)).subscribe((res) => this.exportSrv.export(Object.assign({}, opt, /** @type {?} */ ({
            _d: res,
            _c: this._columns,
        }))));
    }
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
    responsiveHideHeaderFooter: [{ type: Input }],
    checkboxChange: [{ type: Output }],
    radioChange: [{ type: Output }],
    sortChange: [{ type: Output }],
    filterChange: [{ type: Output }],
    rowClick: [{ type: Output }],
    rowDblClick: [{ type: Output }]
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { STComponent, STRowDirective, STConfig, STModule, STColumnSource, STDataSource, STExport, STRowSource as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BkZWxvbi9hYmMvdGFibGUvdGFibGUtcm93LmRpcmVjdGl2ZS50cyIsIm5nOi8vQGRlbG9uL2FiYy90YWJsZS90YWJsZS5jb25maWcudHMiLCJuZzovL0BkZWxvbi9hYmMvdGFibGUvdGFibGUtY29sdW1uLXNvdXJjZS50cyIsIm5nOi8vQGRlbG9uL2FiYy90YWJsZS90YWJsZS1kYXRhLXNvdXJjZS50cyIsIm5nOi8vQGRlbG9uL2FiYy90YWJsZS90YWJsZS1leHBvcnQudHMiLCJuZzovL0BkZWxvbi9hYmMvdGFibGUvdGFibGUuY29tcG9uZW50LnRzIiwibmc6Ly9AZGVsb24vYWJjL3RhYmxlL3RhYmxlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBUZW1wbGF0ZVJlZixcbiAgT25Jbml0LFxuICBJbmplY3RhYmxlLFxuICBIb3N0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNUUm93U291cmNlIHtcbiAgcHJpdmF0ZSB0aXRsZXM6IHsgW2tleTogc3RyaW5nXTogVGVtcGxhdGVSZWY8YW55PiB9ID0ge307XG4gIHByaXZhdGUgcm93czogeyBba2V5OiBzdHJpbmddOiBUZW1wbGF0ZVJlZjxhbnk+IH0gPSB7fTtcblxuICBhZGQodHlwZTogc3RyaW5nLCBwYXRoOiBzdHJpbmcsIHJlZjogVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIHRoaXNbdHlwZSA9PT0gJ3RpdGxlJyA/ICd0aXRsZXMnIDogJ3Jvd3MnXVtwYXRoXSA9IHJlZjtcbiAgfVxuXG4gIGdldFRpdGxlKHBhdGg6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnRpdGxlc1twYXRoXTtcbiAgfVxuXG4gIGdldFJvdyhwYXRoOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yb3dzW3BhdGhdO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tzdC1yb3ddJyB9KVxuZXhwb3J0IGNsYXNzIFNUUm93RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCdzdC1yb3cnKVxuICBpZDogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHR5cGU6ICd0aXRsZSc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWY6IFRlbXBsYXRlUmVmPGFueT4sXG4gICAgQEhvc3QoKSBwcml2YXRlIHNvdXJjZTogU1RSb3dTb3VyY2UsXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNvdXJjZS5hZGQodGhpcy50eXBlLCB0aGlzLmlkLCB0aGlzLnJlZik7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIFNUTXVsdGlTb3J0LFxuICBTVFJlcSxcbiAgU1RSZXMsXG4gIFNUUGFnZSxcbiAgU1RDb2x1bW5CdXR0b25Nb2RhbENvbmZpZyxcbiAgU1RDb2x1bW5CdXR0b25EcmF3ZXJDb25maWcsXG4gIFNUSWNvbixcbiAgU1RSb3dDbGFzc05hbWUsXG59IGZyb20gJy4vdGFibGUuaW50ZXJmYWNlcyc7XG5cbmV4cG9ydCBjbGFzcyBTVENvbmZpZyB7XG4gIC8qKlxuICAgKiDDqMK1wrfDpcKnwovDqcKhwrXDp8KgwoHDr8K8wozDqcK7wpjDqMKuwqTDpMK4wrrDr8K8wppgMWBcbiAgICovXG4gIHBpPzogbnVtYmVyO1xuICAvKipcbiAgICogw6bCr8KPw6nCocK1w6bClcKww6nCh8KPw6/CvMKMw6XCvcKTw6jCrsK+w6fCvcKuw6TCuMK6IGAwYCDDqMKhwqjDp8KkwrrDpMK4wo3DpcKIwobDqcKhwrXDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgMTBgXG4gICAqL1xuICBwcz86IG51bWJlcjtcbiAgLyoqXG4gICAqIMOmwpjCr8OlwpDCpsOmwpjCvsOnwqTCusOowr7CucOmwqHChlxuICAgKi9cbiAgYm9yZGVyZWQ/OiBib29sZWFuO1xuICAvKipcbiAgICogdGFibGXDpcKkwqfDpcKwwo9cbiAgICovXG4gIHNpemU/OiAnc21hbGwnIHwgJ21pZGRsZScgfCAnZGVmYXVsdCcgPSAnZGVmYXVsdCc7XG4gIC8qKlxuICAgKiDDpsKYwq/DpcKQwqbDqcKawpDDqMKXwo/DpcKkwrTDpcKSwozDpcKwwr7Dr8K8wozDpcK9wpPDpcKwwo/DpcKxwo/DpcK5wpXDpMK4wovDpsKJwo3DpsKYwr7Dp8KkwrrDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgZmFsc2VgXG4gICAqL1xuICByZXNwb25zaXZlSGlkZUhlYWRlckZvb3Rlcj8gPSBmYWxzZTtcbiAgLyoqIMOowq/Ct8OmwrHCgsOkwr3Ck8OpwoXCjcOnwr3CriAqL1xuICByZXE/OiBTVFJlcSA9IHtcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIGFsbEluQm9keTogZmFsc2UsXG4gICAgcmVOYW1lOiB7IHBpOiAncGknLCBwczogJ3BzJyB9LFxuICB9O1xuICAvKiogw6jCv8KUw6XCm8Kew6TCvcKTw6nChcKNw6fCvcKuICovXG4gIHJlcz86IFNUUmVzID0ge1xuICAgIHJlTmFtZTogeyBsaXN0OiBbJ2xpc3QnXSwgdG90YWw6IFsndG90YWwnXSB9LFxuICB9O1xuICAvKiogw6jCv8KUw6XCm8Kew6TCvcKTw6nChcKNw6fCvcKuICovXG4gIHBhZ2U/OiBTVFBhZ2UgPSB7XG4gICAgZnJvbnQ6IHRydWUsXG4gICAgemVyb0luZGV4ZWQ6IGZhbHNlLFxuICAgIHBsYWNlbWVudDogJ3JpZ2h0JyxcbiAgICBzaG93OiB0cnVlLFxuICAgIHNob3dTaXplOiBmYWxzZSxcbiAgICBwYWdlU2l6ZXM6IFsxMCwgMjAsIDMwLCA0MCwgNTBdLFxuICAgIHNob3dRdWlja0p1bXBlcjogZmFsc2UsXG4gICAgdG90YWw6IHRydWUsXG4gICAgaW5kZXhSZXNldDogdHJ1ZSxcbiAgICB0b1RvcDogdHJ1ZSxcbiAgICB0b1RvcE9mZnNldDogMTAwLFxuICB9O1xuICAvKipcbiAgICogw6nCh8KNw6XCkcK9w6XCkMKNw6bCjsKSw6XCusKPw6XCgMK8w6/CvMKMYGNvbHVtbnNgIMOnwprChMOpwofCjcOlwpHCvcOlwpDCjcOpwqvCmMOkwrrCjsOlwrHCnsOmwoDCp1xuICAgKi9cbiAgc29ydFJlTmFtZT86IHsgYXNjZW5kPzogc3RyaW5nOyBkZXNjZW5kPzogc3RyaW5nIH07XG4gIC8qKlxuICAgKiDDpsKYwq/DpcKQwqbDpcKkwprDpsKOwpLDpcK6wo/Dr8K8wozDpcK9wpMgYHNvcnRgIMOlwqTCmsOkwrjCqsOnwpvCuMOlwpDCjMOlwoDCvMOmwpfCtsOowofCqsOlworCqMOlwpDCiMOlwrnCtsOvwrzCjMOlwrvCusOowq7CrsOlwpDCjsOnwqvCr8OmwpTCr8OmwozCgcOmwpfCtsOkwr3Cv8OnwpTCqFxuICAgKi9cbiAgbXVsdGlTb3J0PzogYm9vbGVhbiB8IFNUTXVsdGlTb3J0ID0gZmFsc2U7XG4gIC8qKlxuICAgKiDDpsKMwonDqcKSwq7DpsKowqHDpsKAwoHDpsKhwobDqcKFwo3Dp8K9wq5cbiAgICovXG4gIG1vZGFsPzogU1RDb2x1bW5CdXR0b25Nb2RhbENvbmZpZyA9IHtcbiAgICBwYXJhbXNOYW1lOiAncmVjb3JkJyxcbiAgICBzaXplOiAnbGcnLFxuICAgIGV4YWN0OiB0cnVlLFxuICB9O1xuICAvKipcbiAgICogw6bCjMKJw6nCksKuw6bCisK9w6XCscKJw6nChcKNw6fCvcKuXG4gICAqL1xuICBkcmF3ZXI/OiBTVENvbHVtbkJ1dHRvbkRyYXdlckNvbmZpZyA9IHtcbiAgICBwYXJhbXNOYW1lOiAncmVjb3JkJyxcbiAgICBzaXplOiAnbWQnLFxuICAgIGZvb3RlcjogdHJ1ZSxcbiAgICBmb290ZXJIZWlnaHQ6IDU1LFxuICB9O1xuICAvKipcbiAgICogw6bCsMKUw6bCs8Khw6fCocKuw6jCrsKkw6bCocKGw6XChsKFw6XCrsK5XG4gICAqL1xuICBwb3BUaXRsZT8gPSAnw6fCocKuw6jCrsKkw6XCiMKgw6nCmcKkw6XCkMKXw6/CvMKfJztcbiAgLyoqXG4gICAqIMOowqHCjMOlwo3ClcOlwofCu8OlwqTCmsOlwrDCkcOmwpfCtsOpwpXCv8OkwrnCi8OnwrHCu8OkwrjCusOlwo/CjMOlwofCu8OvwrzCiMOlwo3ClcOkwr3CjcOvwrzCmsOmwq/Cq8OnwqfCksOvwrzCicOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmAyMDBgXG4gICAqL1xuICByb3dDbGlja1RpbWU/ID0gMjAwO1xuICAvKipcbiAgICogw6jCv8KHw6bCu8Kkw6bCjMKJw6nCksKuw6fCocKuw6jCrsKkw6bClsKHw6bCnMKsw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYMOnwqHCrsOowq7CpGBcbiAgICovXG4gIGZpbHRlckNvbmZpcm1UZXh0PyA9ICfDp8Khwq7DqMKuwqQnO1xuICAvKipcbiAgICogw6jCv8KHw6bCu8Kkw6bCjMKJw6nCksKuw6nCh8KNw6fCvcKuw6bClsKHw6bCnMKsw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYMOpwofCjcOnwr3CrmBcbiAgICovXG4gIGZpbHRlckNsZWFyVGV4dD8gPSAnw6nCh8KNw6fCvcKuJztcbiAgLyoqXG4gICAqIMOmwozCicOpwpLCrsOlwpvCvsOmwqDCh1xuICAgKi9cbiAgYnRuSWNvbj86IFNUSWNvbiA9IHtcbiAgICB0eXBlOiAnJyxcbiAgICB0aGVtZTogJ291dGxpbmUnLFxuICAgIHNwaW46IGZhbHNlLFxuICB9O1xuICAvKipcbiAgICogw6jCocKMw6XCj8K3w6fCtMKiw6XCvMKVw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYDFgXG4gICAqIC0gw6jCrsKhw6fCrsKXw6jCp8KEw6XCiMKZw6TCuMK6w6/CvMKaYGluZGV4ICsgbm9JbmRleGBcbiAgICovXG4gIG5vSW5kZXg/ID0gMTtcbiAgLyoqXG4gICAqIMOowqHCqMOmwqDCvMOowqHCjMOnwprChMOnwrHCu8OlwpDCjVxuICAgKi9cbiAgcm93Q2xhc3NOYW1lPzogU1RSb3dDbGFzc05hbWU7XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCwgSW5qZWN0LCBIb3N0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBQ0xTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL2FjbCc7XG5pbXBvcnQgeyBBTEFJTl9JMThOX1RPS0VOLCBBbGFpbkkxOE5TZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IGRlZXBDb3B5IH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5pbXBvcnQge1xuICBTVENvbHVtbixcbiAgU1RDb2x1bW5CdXR0b24sXG4gIFNUQ29sdW1uU29ydCxcbiAgU1RDb2x1bW5GaWx0ZXIsXG59IGZyb20gJy4vdGFibGUuaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBTVFJvd1NvdXJjZSB9IGZyb20gJy4vdGFibGUtcm93LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBTVENvbmZpZyB9IGZyb20gJy4vdGFibGUuY29uZmlnJztcblxuZXhwb3J0IGludGVyZmFjZSBTVFNvcnRNYXAgZXh0ZW5kcyBTVENvbHVtblNvcnQge1xuICAvKiogw6bCmMKvw6XCkMKmw6XCkMKvw6fClMKow6bCjsKSw6XCusKPICovXG4gIGVuYWJsZWQ/OiBib29sZWFuO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU1RDb2x1bW5Tb3VyY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBASG9zdCgpIHByaXZhdGUgcm93U291cmNlOiBTVFJvd1NvdXJjZSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGFjbDogQUNMU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoQUxBSU5fSTE4Tl9UT0tFTilcbiAgICBwcml2YXRlIGkxOG5TcnY6IEFsYWluSTE4TlNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjb2c6IFNUQ29uZmlnLFxuICApIHt9XG5cbiAgcHJpdmF0ZSBidG5Db2VyY2UobGlzdDogU1RDb2x1bW5CdXR0b25bXSk6IFNUQ29sdW1uQnV0dG9uW10ge1xuICAgIGlmICghbGlzdCkgcmV0dXJuIFtdO1xuICAgIGNvbnN0IHJldDogU1RDb2x1bW5CdXR0b25bXSA9IFtdO1xuICAgIGNvbnN0IHsgbW9kYWwsIGRyYXdlciwgcG9wVGl0bGUsIGJ0bkljb24gfSA9IHRoaXMuY29nO1xuXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGxpc3QpIHtcbiAgICAgIGlmICh0aGlzLmFjbCAmJiBpdGVtLmFjbCAmJiAhdGhpcy5hY2wuY2FuKGl0ZW0uYWNsKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ21vZGFsJyB8fCBpdGVtLnR5cGUgPT09ICdzdGF0aWMnKSB7XG4gICAgICAgIC8vIGNvbXBhdGlibGVcbiAgICAgICAgaWYgKGl0ZW0uY29tcG9uZW50ICE9IG51bGwpIHtcbiAgICAgICAgICBpdGVtLm1vZGFsID0ge1xuICAgICAgICAgICAgY29tcG9uZW50OiBpdGVtLmNvbXBvbmVudCxcbiAgICAgICAgICAgIHBhcmFtczogaXRlbS5wYXJhbXMsXG4gICAgICAgICAgICBwYXJhbXNOYW1lOiBpdGVtLnBhcmFtTmFtZSB8fCBtb2RhbC5wYXJhbXNOYW1lLFxuICAgICAgICAgICAgc2l6ZTogaXRlbS5zaXplIHx8IG1vZGFsLnNpemUsXG4gICAgICAgICAgICBtb2RhbE9wdGlvbnM6IGl0ZW0ubW9kYWxPcHRpb25zIHx8IG1vZGFsLm1vZGFsT3B0aW9ucyxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChpdGVtLm1vZGFsID09IG51bGwgfHwgaXRlbS5tb2RhbC5jb21wb25lbnQgPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihgW3N0XSBTaG91bGQgc3BlY2lmeSBtb2RhbCBwYXJhbWV0ZXJgKTtcbiAgICAgICAgICBpdGVtLnR5cGUgPSAnbm9uZSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbS5tb2RhbCA9IE9iamVjdC5hc3NpZ24oe30sIG1vZGFsLCBpdGVtLm1vZGFsKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbS50eXBlID09PSAnZHJhd2VyJykge1xuICAgICAgICBpZiAoaXRlbS5kcmF3ZXIgPT0gbnVsbCB8fCBpdGVtLmRyYXdlci5jb21wb25lbnQgPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihgW3N0XSBTaG91bGQgc3BlY2lmeSBkcmF3ZXIgcGFyYW1ldGVyYCk7XG4gICAgICAgICAgaXRlbS50eXBlID0gJ25vbmUnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW0uZHJhd2VyID0gT2JqZWN0LmFzc2lnbih7fSwgZHJhd2VyLCBpdGVtLmRyYXdlcik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ2RlbCcgJiYgdHlwZW9mIGl0ZW0ucG9wID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBpdGVtLnBvcCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtLnBvcCA9PT0gdHJ1ZSkge1xuICAgICAgICBpdGVtLnBvcFRpdGxlID0gaXRlbS5wb3BUaXRsZSB8fCBwb3BUaXRsZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGl0ZW0ucG9wID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtLmljb24pIHtcbiAgICAgICAgaXRlbS5pY29uID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICB7fSxcbiAgICAgICAgICBidG5JY29uLFxuICAgICAgICAgIHR5cGVvZiBpdGVtLmljb24gPT09ICdzdHJpbmcnID8geyB0eXBlOiBpdGVtLmljb24gfSA6IGl0ZW0uaWNvbixcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaXRlbS5jaGlsZHJlbiA9IGl0ZW0uY2hpbGRyZW4gJiYgaXRlbS5jaGlsZHJlbi5sZW5ndGggPiAwID8gdGhpcy5idG5Db2VyY2UoaXRlbS5jaGlsZHJlbikgOiBbXTtcblxuICAgICAgLy8gaTE4blxuICAgICAgaWYgKGl0ZW0uaTE4biAmJiB0aGlzLmkxOG5TcnYpIHtcbiAgICAgICAgaXRlbS50ZXh0ID0gdGhpcy5pMThuU3J2LmZhbnlpKGl0ZW0uaTE4bik7XG4gICAgICB9XG5cbiAgICAgIHJldC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgICB0aGlzLmJ0bkNvZXJjZUlmKHJldCk7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIHByaXZhdGUgYnRuQ29lcmNlSWYobGlzdDogU1RDb2x1bW5CdXR0b25bXSkge1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiBsaXN0KSB7XG4gICAgICBpZiAoIWl0ZW0uaWlmKSBpdGVtLmlpZiA9ICgpID0+IHRydWU7XG4gICAgICBpZiAoIWl0ZW0uY2hpbGRyZW4pIHtcbiAgICAgICAgaXRlbS5jaGlsZHJlbiA9IFtdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5idG5Db2VyY2VJZihpdGVtLmNoaWxkcmVuKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGZpeGVkQ29lcmNlKGxpc3Q6IFNUQ29sdW1uW10pIHtcbiAgICBjb25zdCBjb3VudFJlZHVjZSA9IChhOiBudW1iZXIsIGI6IFNUQ29sdW1uKSA9PlxuICAgICAgYSArICtiLndpZHRoLnRvU3RyaW5nKCkucmVwbGFjZSgncHgnLCAnJyk7XG4gICAgLy8gbGVmdCB3aWR0aFxuICAgIGxpc3RcbiAgICAgIC5maWx0ZXIodyA9PiB3LmZpeGVkICYmIHcuZml4ZWQgPT09ICdsZWZ0JyAmJiB3LndpZHRoKVxuICAgICAgLmZvckVhY2goXG4gICAgICAgIChpdGVtLCBpZHgpID0+XG4gICAgICAgICAgKGl0ZW0uX2xlZnQgPSBsaXN0LnNsaWNlKDAsIGlkeCkucmVkdWNlKGNvdW50UmVkdWNlLCAwKSArICdweCcpLFxuICAgICAgKTtcbiAgICAvLyByaWdodCB3aWR0aFxuICAgIGxpc3RcbiAgICAgIC5maWx0ZXIodyA9PiB3LmZpeGVkICYmIHcuZml4ZWQgPT09ICdyaWdodCcgJiYgdy53aWR0aClcbiAgICAgIC5yZXZlcnNlKClcbiAgICAgIC5mb3JFYWNoKFxuICAgICAgICAoaXRlbSwgaWR4KSA9PlxuICAgICAgICAgIChpdGVtLl9yaWdodCA9XG4gICAgICAgICAgICAoaWR4ID4gMCA/IGxpc3Quc2xpY2UoLWlkeCkucmVkdWNlKGNvdW50UmVkdWNlLCAwKSA6IDApICsgJ3B4JyksXG4gICAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBzb3J0Q29lcmNlKGl0ZW06IFNUQ29sdW1uKTogU1RTb3J0TWFwIHtcbiAgICAvLyBjb21wYXRpYmxlXG4gICAgaWYgKGl0ZW0uc29ydGVyICYmIHR5cGVvZiBpdGVtLnNvcnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgZGVmYXVsdDogaXRlbS5zb3J0IGFzIGFueSxcbiAgICAgICAgY29tcGFyZTogaXRlbS5zb3J0ZXIsXG4gICAgICAgIGtleTogaXRlbS5zb3J0S2V5IHx8IGl0ZW0uaW5kZXhLZXksXG4gICAgICAgIHJlTmFtZTogaXRlbS5zb3J0UmVOYW1lLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGl0ZW0uc29ydCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiB7IGVuYWJsZWQ6IGZhbHNlIH07XG4gICAgfVxuXG4gICAgbGV0IHJlczogU1RTb3J0TWFwID0ge307XG5cbiAgICBpZiAodHlwZW9mIGl0ZW0uc29ydCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJlcy5rZXkgPSBpdGVtLnNvcnQ7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgaXRlbS5zb3J0ICE9PSAnYm9vbGVhbicpIHtcbiAgICAgIHJlcyA9IGl0ZW0uc29ydDtcbiAgICB9XG5cbiAgICBpZiAoIXJlcy5rZXkpIHtcbiAgICAgIHJlcy5rZXkgPSBpdGVtLmluZGV4S2V5O1xuICAgIH1cblxuICAgIHJlcy5lbmFibGVkID0gdHJ1ZTtcblxuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBwcml2YXRlIGZpbHRlckNvZXJjZShpdGVtOiBTVENvbHVtbik6IFNUQ29sdW1uRmlsdGVyIHtcbiAgICBsZXQgcmVzOiBTVENvbHVtbkZpbHRlciA9IG51bGw7XG4gICAgLy8gY29tcGF0aWJsZVxuICAgIGlmIChpdGVtLmZpbHRlcnMgJiYgaXRlbS5maWx0ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJlcyA9IHtcbiAgICAgICAgY29uZmlybVRleHQ6IGl0ZW0uZmlsdGVyQ29uZmlybVRleHQsXG4gICAgICAgIGNsZWFyVGV4dDogaXRlbS5maWx0ZXJDbGVhclRleHQsXG4gICAgICAgIGRlZmF1bHQ6IGl0ZW0uZmlsdGVyZWQsXG4gICAgICAgIGZuOiBpdGVtLmZpbHRlciBhcyBhbnksXG4gICAgICAgIGljb246IGl0ZW0uZmlsdGVySWNvbixcbiAgICAgICAga2V5OiBpdGVtLmZpbHRlcktleSB8fCBpdGVtLmluZGV4S2V5LFxuICAgICAgICBtZW51czogaXRlbS5maWx0ZXJzLFxuICAgICAgICBtdWx0aXBsZTogaXRlbS5maWx0ZXJNdWx0aXBsZSxcbiAgICAgICAgcmVOYW1lOiBpdGVtLmZpbHRlclJlTmFtZSxcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcyA9IGl0ZW0uZmlsdGVyO1xuICAgIH1cblxuICAgIGlmIChyZXMgPT0gbnVsbCB8fCByZXMubWVudXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHJlcy5tdWx0aXBsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJlcy5tdWx0aXBsZSA9IHRydWU7XG4gICAgfVxuICAgIGlmICghcmVzLmNvbmZpcm1UZXh0KSB7XG4gICAgICByZXMuY29uZmlybVRleHQgPSB0aGlzLmNvZy5maWx0ZXJDb25maXJtVGV4dDtcbiAgICB9XG4gICAgaWYgKCFyZXMuY2xlYXJUZXh0KSB7XG4gICAgICByZXMuY2xlYXJUZXh0ID0gdGhpcy5jb2cuZmlsdGVyQ2xlYXJUZXh0O1xuICAgIH1cbiAgICBpZiAoIXJlcy5pY29uKSB7XG4gICAgICByZXMuaWNvbiA9IGBmaWx0ZXJgO1xuICAgIH1cbiAgICBpZiAoIXJlcy5rZXkpIHtcbiAgICAgIHJlcy5rZXkgPSBpdGVtLmluZGV4S2V5O1xuICAgIH1cblxuICAgIHJlcy5kZWZhdWx0ID0gcmVzLm1lbnVzLmZpbmRJbmRleCh3ID0+IHcuY2hlY2tlZCkgIT09IC0xO1xuXG4gICAgaWYgKHRoaXMuYWNsKSB7XG4gICAgICByZXMubWVudXMgPSByZXMubWVudXMuZmlsdGVyKHcgPT4gdGhpcy5hY2wuY2FuKHcuYWNsKSk7XG4gICAgfVxuXG4gICAgaWYgKHJlcy5tZW51cy5sZW5ndGggPD0gMCkge1xuICAgICAgcmVzID0gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgcHJpdmF0ZSByZXN0b3JlUmVuZGVyKGl0ZW06IFNUQ29sdW1uKSB7XG4gICAgaWYgKGl0ZW0ucmVuZGVyVGl0bGUpIHtcbiAgICAgIGl0ZW0uX19yZW5kZXJUaXRsZSA9IHRoaXMucm93U291cmNlLmdldFRpdGxlKGl0ZW0ucmVuZGVyVGl0bGUpO1xuICAgIH1cbiAgICBpZiAoaXRlbS5yZW5kZXIpIHtcbiAgICAgIGl0ZW0uX19yZW5kZXIgPSB0aGlzLnJvd1NvdXJjZS5nZXRSb3coaXRlbS5yZW5kZXIpO1xuICAgIH1cbiAgfVxuXG4gIHByb2Nlc3MobGlzdDogU1RDb2x1bW5bXSk6IFNUQ29sdW1uW10ge1xuICAgIGlmICghbGlzdCB8fCBsaXN0Lmxlbmd0aCA9PT0gMClcbiAgICAgIHRocm93IG5ldyBFcnJvcihgW3N0XTogdGhlIGNvbHVtbnMgcHJvcGVydHkgbXVzZSBiZSBkZWZpbmUhYCk7XG5cbiAgICBjb25zdCB7IG5vSW5kZXggfSA9IHRoaXMuY29nO1xuICAgIGxldCBjaGVja2JveENvdW50ID0gMDtcbiAgICBsZXQgcmFkaW9Db3VudCA9IDA7XG4gICAgY29uc3QgY29sdW1uczogU1RDb2x1bW5bXSA9IFtdO1xuICAgIGNvbnN0IGNvcHlDb2x1bWVucyA9IGRlZXBDb3B5KGxpc3QpIGFzIFNUQ29sdW1uW107XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGNvcHlDb2x1bWVucykge1xuICAgICAgaWYgKHRoaXMuYWNsICYmIGl0ZW0uYWNsICYmICF0aGlzLmFjbC5jYW4oaXRlbS5hY2wpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgLy8gaW5kZXhcbiAgICAgIGlmIChpdGVtLmluZGV4KSB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShpdGVtLmluZGV4KSkge1xuICAgICAgICAgIGl0ZW0uaW5kZXggPSBpdGVtLmluZGV4LnNwbGl0KCcuJyk7XG4gICAgICAgIH1cbiAgICAgICAgaXRlbS5pbmRleEtleSA9IGl0ZW0uaW5kZXguam9pbignLicpO1xuICAgICAgfVxuICAgICAgLy8gdGl0bGVcbiAgICAgIGlmIChpdGVtLmkxOG4gJiYgdGhpcy5pMThuU3J2KSB7XG4gICAgICAgIGl0ZW0udGl0bGUgPSB0aGlzLmkxOG5TcnYuZmFueWkoaXRlbS5pMThuKTtcbiAgICAgIH1cbiAgICAgIC8vIG5vXG4gICAgICBpZiAoaXRlbS50eXBlID09PSAnbm8nKSB7XG4gICAgICAgIGl0ZW0ubm9JbmRleCA9IGl0ZW0ubm9JbmRleCA9PSBudWxsID8gbm9JbmRleCA6IGl0ZW0ubm9JbmRleDtcbiAgICAgIH1cbiAgICAgIC8vIGNoZWNrYm94XG4gICAgICBpZiAoaXRlbS5zZWxlY3Rpb25zID09IG51bGwpIHtcbiAgICAgICAgaXRlbS5zZWxlY3Rpb25zID0gW107XG4gICAgICB9XG4gICAgICBpZiAoaXRlbS50eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgICsrY2hlY2tib3hDb3VudDtcbiAgICAgICAgaWYgKCFpdGVtLndpZHRoKSB7XG4gICAgICAgICAgaXRlbS53aWR0aCA9IGAke2l0ZW0uc2VsZWN0aW9ucy5sZW5ndGggPiAwID8gNjIgOiA1MH1weGA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmFjbCkge1xuICAgICAgICBpdGVtLnNlbGVjdGlvbnMgPSBpdGVtLnNlbGVjdGlvbnMuZmlsdGVyKHcgPT4gdGhpcy5hY2wuY2FuKHcuYWNsKSk7XG4gICAgICB9XG4gICAgICAvLyByYWRpb1xuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgICArK3JhZGlvQ291bnQ7XG4gICAgICAgIGl0ZW0uc2VsZWN0aW9ucyA9IFtdO1xuICAgICAgICBpZiAoIWl0ZW0ud2lkdGgpIHtcbiAgICAgICAgICBpdGVtLndpZHRoID0gJzUwcHgnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyB0eXBlc1xuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ3luJykge1xuICAgICAgICBpdGVtLnluID0gT2JqZWN0LmFzc2lnbih7IHRydXRoOiB0cnVlIH0sIGl0ZW0ueW4pO1xuICAgICAgICAvLyBjb21wYXRpYmxlXG4gICAgICAgIGlmIChpdGVtLnluVHJ1dGggIT0gbnVsbCkgaXRlbS55bi50cnV0aCA9IGl0ZW0ueW5UcnV0aDtcbiAgICAgICAgaWYgKGl0ZW0ueW5ZZXMgIT0gbnVsbCkgaXRlbS55bi55ZXMgPSBpdGVtLnluWWVzO1xuICAgICAgICBpZiAoaXRlbS55bk5vICE9IG51bGwpIGl0ZW0ueW4ubm8gPSBpdGVtLnluTm87XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIChpdGVtLnR5cGUgPT09ICdsaW5rJyAmJiB0eXBlb2YgaXRlbS5jbGljayAhPT0gJ2Z1bmN0aW9uJykgfHxcbiAgICAgICAgKGl0ZW0udHlwZSA9PT0gJ2JhZGdlJyAmJiBpdGVtLmJhZGdlID09IG51bGwpIHx8XG4gICAgICAgIChpdGVtLnR5cGUgPT09ICd0YWcnICYmIGl0ZW0udGFnID09IG51bGwpXG4gICAgICApIHtcbiAgICAgICAgKGl0ZW0gYXMgYW55KS50eXBlID0gJyc7XG4gICAgICB9XG4gICAgICAvLyBjbGFzc05hbWVcbiAgICAgIGlmICghaXRlbS5jbGFzc05hbWUpIHtcbiAgICAgICAgaXRlbS5jbGFzc05hbWUgPSB7XG4gICAgICAgICAgbnVtYmVyOiAndGV4dC1yaWdodCcsXG4gICAgICAgICAgY3VycmVuY3k6ICd0ZXh0LXJpZ2h0JyxcbiAgICAgICAgICBkYXRlOiAndGV4dC1jZW50ZXInLFxuICAgICAgICB9W2l0ZW0udHlwZV07XG4gICAgICB9XG5cbiAgICAgIC8vIHNvcnRlclxuICAgICAgaXRlbS5fc29ydCA9IHRoaXMuc29ydENvZXJjZShpdGVtKTtcbiAgICAgIC8vIGZpbHRlclxuICAgICAgaXRlbS5maWx0ZXIgPSB0aGlzLmZpbHRlckNvZXJjZShpdGVtKTtcbiAgICAgIC8vIGJ1dHRvbnNcbiAgICAgIGl0ZW0uYnV0dG9ucyA9IHRoaXMuYnRuQ29lcmNlKGl0ZW0uYnV0dG9ucyk7XG4gICAgICAvLyByZXN0b3JlIGN1c3RvbSByb3dcbiAgICAgIHRoaXMucmVzdG9yZVJlbmRlcihpdGVtKTtcblxuICAgICAgY29sdW1ucy5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgICBpZiAoY2hlY2tib3hDb3VudCA+IDEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgW3N0XToganVzdCBvbmx5IG9uZSBjb2x1bW4gY2hlY2tib3hgKTtcbiAgICB9XG4gICAgaWYgKHJhZGlvQ291bnQgPiAxKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFtzdF06IGp1c3Qgb25seSBvbmUgY29sdW1uIHJhZGlvYCk7XG4gICAgfVxuXG4gICAgdGhpcy5maXhlZENvZXJjZShjb2x1bW5zKTtcblxuICAgIHJldHVybiBjb2x1bW5zO1xuICB9XG5cbiAgcmVzdG9yZUFsbFJlbmRlcihjb2x1bW5zOiBTVENvbHVtbltdKSB7XG4gICAgY29sdW1ucy5mb3JFYWNoKGkgPT4gdGhpcy5yZXN0b3JlUmVuZGVyKGkpKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSG9zdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGVjaW1hbFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBkZWVwR2V0IH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgQ05DdXJyZW5jeVBpcGUsIERhdGVQaXBlLCBZTlBpcGUsIF9IdHRwQ2xpZW50IH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcblxuaW1wb3J0IHtcbiAgU1REYXRhLFxuICBTVFBhZ2UsXG4gIFNUUmVxLFxuICBTVFJlcyxcbiAgU1RDb2x1bW4sXG4gIFNUTXVsdGlTb3J0LFxuICBTVFJvd0NsYXNzTmFtZSxcbn0gZnJvbSAnLi90YWJsZS5pbnRlcmZhY2VzJztcbmltcG9ydCB7IFNUU29ydE1hcCB9IGZyb20gJy4vdGFibGUtY29sdW1uLXNvdXJjZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1REYXRhU291cmNlT3B0aW9ucyB7XG4gIHBpPzogbnVtYmVyO1xuICBwcz86IG51bWJlcjtcbiAgZGF0YT86IHN0cmluZyB8IFNURGF0YVtdIHwgT2JzZXJ2YWJsZTxTVERhdGFbXT47XG4gIHRvdGFsPzogbnVtYmVyO1xuICByZXE/OiBTVFJlcTtcbiAgcmVzPzogU1RSZXM7XG4gIHBhZ2U/OiBTVFBhZ2U7XG4gIGNvbHVtbnM/OiBTVENvbHVtbltdO1xuICBtdWx0aVNvcnQ/OiBTVE11bHRpU29ydDtcbiAgcm93Q2xhc3NOYW1lPzogU1RSb3dDbGFzc05hbWU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1REYXRhU291cmNlUmVzdWx0IHtcbiAgLyoqIMOmwpjCr8OlwpDCpsOpwpzCgMOowqbCgcOmwpjCvsOnwqTCusOlwojChsOpwqHCtcOlwpnCqCAqL1xuICBwYWdlU2hvdz86IGJvb2xlYW47XG4gIC8qKiDDpsKWwrAgYHBpYMOvwrzCjMOowovCpcOowr/ClMOlwpvCniBgdW5kZWZpbmVkYCDDqMKhwqjDp8KkwrrDp8KUwqjDpsKIwrfDpcKPwpfDpsKOwqcgKi9cbiAgcGk/OiBudW1iZXI7XG4gIC8qKiDDpsKWwrAgYHRvdGFsYMOvwrzCjMOowovCpcOowr/ClMOlwpvCniBgdW5kZWZpbmVkYCDDqMKhwqjDp8KkwrrDp8KUwqjDpsKIwrfDpcKPwpfDpsKOwqcgKi9cbiAgdG90YWw/OiBudW1iZXI7XG4gIC8qKiDDpsKVwrDDpsKNwq4gKi9cbiAgbGlzdD86IFNURGF0YVtdO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU1REYXRhU291cmNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBodHRwOiBfSHR0cENsaWVudCxcbiAgICBASG9zdCgpIHByaXZhdGUgY3VycmVudHk6IENOQ3VycmVuY3lQaXBlLFxuICAgIEBIb3N0KCkgcHJpdmF0ZSBkYXRlOiBEYXRlUGlwZSxcbiAgICBASG9zdCgpIHByaXZhdGUgeW46IFlOUGlwZSxcbiAgICBASG9zdCgpIHByaXZhdGUgbnVtYmVyOiBEZWNpbWFsUGlwZSxcbiAgICBwcml2YXRlIGRvbTogRG9tU2FuaXRpemVyLFxuICApIHt9XG5cbiAgcHJvY2VzcyhvcHRpb25zOiBTVERhdGFTb3VyY2VPcHRpb25zKTogUHJvbWlzZTxTVERhdGFTb3VyY2VSZXN1bHQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmVQcm9taXNlLCByZWplY3RQcm9taXNlKSA9PiB7XG4gICAgICBsZXQgZGF0YSQ6IE9ic2VydmFibGU8U1REYXRhW10+O1xuICAgICAgbGV0IGlzUmVtb3RlID0gZmFsc2U7XG4gICAgICBjb25zdCB7IGRhdGEsIHJlcywgdG90YWwsIHBhZ2UsIHBpLCBwcywgY29sdW1ucyB9ID0gb3B0aW9ucztcbiAgICAgIGxldCByZXRUb3RhbDogbnVtYmVyO1xuICAgICAgbGV0IHJldExpc3Q6IFNURGF0YVtdO1xuICAgICAgbGV0IHJldFBpOiBudW1iZXI7XG5cbiAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaXNSZW1vdGUgPSB0cnVlO1xuICAgICAgICBkYXRhJCA9IHRoaXMuZ2V0QnlIdHRwKGRhdGEsIG9wdGlvbnMpLnBpcGUoXG4gICAgICAgICAgbWFwKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgLy8gbGlzdFxuICAgICAgICAgICAgbGV0IHJldCA9IGRlZXBHZXQocmVzdWx0LCByZXMucmVOYW1lLmxpc3QgYXMgc3RyaW5nW10sIFtdKTtcbiAgICAgICAgICAgIGlmIChyZXQgPT0gbnVsbCB8fCAhQXJyYXkuaXNBcnJheShyZXQpKSB7XG4gICAgICAgICAgICAgIHJldCA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gdG90YWxcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdFRvdGFsID1cbiAgICAgICAgICAgICAgcmVzLnJlTmFtZS50b3RhbCAmJlxuICAgICAgICAgICAgICBkZWVwR2V0KHJlc3VsdCwgcmVzLnJlTmFtZS50b3RhbCBhcyBzdHJpbmdbXSwgbnVsbCk7XG4gICAgICAgICAgICByZXRUb3RhbCA9IHJlc3VsdFRvdGFsID09IG51bGwgPyB0b3RhbCB8fCAwIDogK3Jlc3VsdFRvdGFsO1xuICAgICAgICAgICAgcmV0dXJuIDxTVERhdGFbXT5yZXQ7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnIgPT4ge1xuICAgICAgICAgICAgcmVqZWN0UHJvbWlzZShlcnIpO1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICAgIH0pLFxuICAgICAgICApO1xuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgIGRhdGEkID0gb2YoZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBhIGNvbGQgb2JzZXJ2YWJsZVxuICAgICAgICBkYXRhJCA9IGRhdGE7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNSZW1vdGUpIHtcbiAgICAgICAgZGF0YSQgPSBkYXRhJC5waXBlKFxuICAgICAgICAgIC8vIHNvcnRcbiAgICAgICAgICBtYXAoKHJlc3VsdDogU1REYXRhW10pID0+IHtcbiAgICAgICAgICAgIGxldCBjb3B5UmVzdWx0ID0gcmVzdWx0LnNsaWNlKDApO1xuICAgICAgICAgICAgY29uc3Qgc29ydGVyRm4gPSB0aGlzLmdldFNvcnRlckZuKGNvbHVtbnMpO1xuICAgICAgICAgICAgaWYgKHNvcnRlckZuKSB7XG4gICAgICAgICAgICAgIGNvcHlSZXN1bHQgPSBjb3B5UmVzdWx0LnNvcnQoc29ydGVyRm4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNvcHlSZXN1bHQ7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgLy8gZmlsdGVyXG4gICAgICAgICAgbWFwKChyZXN1bHQ6IFNURGF0YVtdKSA9PiB7XG4gICAgICAgICAgICBjb2x1bW5zLmZpbHRlcih3ID0+IHcuZmlsdGVyKS5mb3JFYWNoKGMgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSBjLmZpbHRlci5tZW51cy5maWx0ZXIodyA9PiB3LmNoZWNrZWQpO1xuICAgICAgICAgICAgICBpZiAodmFsdWVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgICAgICAgICAgICBjb25zdCBvbkZpbHRlciA9IGMuZmlsdGVyLmZuO1xuICAgICAgICAgICAgICBpZiAodHlwZW9mIG9uRmlsdGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBbc3RdIE11c2UgcHJvdmlkZSB0aGUgZm4gZnVuY3Rpb24gaW4gZmlsdGVyYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5maWx0ZXIocmVjb3JkID0+XG4gICAgICAgICAgICAgICAgdmFsdWVzLnNvbWUodiA9PiBvbkZpbHRlcih2LCByZWNvcmQpKSxcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAvLyBwYWdpbmdcbiAgICAgICAgICBtYXAoKHJlc3VsdDogU1REYXRhW10pID0+IHtcbiAgICAgICAgICAgIGlmIChwYWdlLmZyb250KSB7XG4gICAgICAgICAgICAgIGNvbnN0IG1heFBhZ2VJbmRleCA9IE1hdGguY2VpbChyZXN1bHQubGVuZ3RoIC8gcHMpO1xuICAgICAgICAgICAgICByZXRQaSA9IE1hdGgubWF4KDEsIHBpID4gbWF4UGFnZUluZGV4ID8gbWF4UGFnZUluZGV4IDogcGkpO1xuICAgICAgICAgICAgICByZXRUb3RhbCA9IHJlc3VsdC5sZW5ndGg7XG4gICAgICAgICAgICAgIGlmIChwYWdlLnNob3cgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0LnNsaWNlKChyZXRQaSAtIDEpICogcHMsIHJldFBpICogcHMpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgIH0pLFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICAvLyBwcmUtcHJvY2Vzc1xuICAgICAgaWYgKHR5cGVvZiByZXMucHJvY2VzcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBkYXRhJCA9IGRhdGEkLnBpcGUobWFwKHJlc3VsdCA9PiByZXMucHJvY2VzcyhyZXN1bHQpKSk7XG4gICAgICB9XG4gICAgICAvLyBkYXRhIGFjY2VsZXJhdG9yXG4gICAgICBkYXRhJCA9IGRhdGEkLnBpcGUoXG4gICAgICAgIG1hcChyZXN1bHQgPT4ge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSByZXN1bHQubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIHJlc3VsdFtpXS5fdmFsdWVzID0gY29sdW1ucy5tYXAoYyA9PiB0aGlzLmdldChyZXN1bHRbaV0sIGMsIGkpKTtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnJvd0NsYXNzTmFtZSkge1xuICAgICAgICAgICAgICByZXN1bHRbaV0uX3Jvd0NsYXNzTmFtZSA9IG9wdGlvbnMucm93Q2xhc3NOYW1lKHJlc3VsdFtpXSwgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0pLFxuICAgICAgKTtcblxuICAgICAgZGF0YSQuZm9yRWFjaCgocmVzdWx0OiBTVERhdGFbXSkgPT4gKHJldExpc3QgPSByZXN1bHQpKS50aGVuKCgpID0+IHtcbiAgICAgICAgcmVzb2x2ZVByb21pc2Uoe1xuICAgICAgICAgIHBpOiByZXRQaSxcbiAgICAgICAgICB0b3RhbDogcmV0VG90YWwsXG4gICAgICAgICAgbGlzdDogcmV0TGlzdCxcbiAgICAgICAgICBwYWdlU2hvdzpcbiAgICAgICAgICAgIHR5cGVvZiBwYWdlLnNob3cgPT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAgID8gKHJldFRvdGFsIHx8IHRvdGFsKSA+IHBzXG4gICAgICAgICAgICAgIDogcGFnZS5zaG93LFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQoaXRlbTogYW55LCBjb2w6IFNUQ29sdW1uLCBpZHg6IG51bWJlcikge1xuICAgIGlmIChjb2wuZm9ybWF0KSB7XG4gICAgICBjb25zdCBmb3JtYXRSZXMgPSBjb2wuZm9ybWF0KGl0ZW0sIGNvbCkgYXMgc3RyaW5nO1xuICAgICAgaWYgKH5mb3JtYXRSZXMuaW5kZXhPZignPCcpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRvbS5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChmb3JtYXRSZXMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZvcm1hdFJlcztcbiAgICB9XG5cbiAgICBjb25zdCB2YWx1ZSA9IGRlZXBHZXQoaXRlbSwgY29sLmluZGV4IGFzIHN0cmluZ1tdLCBjb2wuZGVmYXVsdCk7XG5cbiAgICBsZXQgcmV0ID0gdmFsdWU7XG4gICAgc3dpdGNoIChjb2wudHlwZSkge1xuICAgICAgY2FzZSAnbm8nOlxuICAgICAgICByZXQgPSBjb2wubm9JbmRleCArIGlkeDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdpbWcnOlxuICAgICAgICByZXQgPSB2YWx1ZSA/IGA8aW1nIHNyYz1cIiR7dmFsdWV9XCIgY2xhc3M9XCJpbWdcIj5gIDogJyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgcmV0ID0gdGhpcy5udW1iZXIudHJhbnNmb3JtKHZhbHVlLCBjb2wubnVtYmVyRGlnaXRzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjdXJyZW5jeSc6XG4gICAgICAgIHJldCA9IHRoaXMuY3VycmVudHkudHJhbnNmb3JtKHZhbHVlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdkYXRlJzpcbiAgICAgICAgcmV0ID0gdGhpcy5kYXRlLnRyYW5zZm9ybSh2YWx1ZSwgY29sLmRhdGVGb3JtYXQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3luJzpcbiAgICAgICAgcmV0ID0gdGhpcy55bi50cmFuc2Zvcm0odmFsdWUgPT09IGNvbC55bi50cnV0aCwgY29sLnluLnllcywgY29sLnluLm5vKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBwcml2YXRlIGdldEJ5SHR0cChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBvcHRpb25zOiBTVERhdGFTb3VyY2VPcHRpb25zLFxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IHsgcmVxLCBwYWdlLCBwaSwgcHMsIG11bHRpU29ydCwgY29sdW1ucyB9ID0gb3B0aW9ucztcbiAgICBjb25zdCBtZXRob2QgPSAocmVxLm1ldGhvZCB8fCAnR0VUJykudG9VcHBlckNhc2UoKTtcbiAgICBjb25zdCBwYXJhbXM6IGFueSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7XG4gICAgICAgIFtyZXEucmVOYW1lLnBpXTogcGFnZS56ZXJvSW5kZXhlZCA/IHBpIC0gMSA6IHBpLFxuICAgICAgICBbcmVxLnJlTmFtZS5wc106IHBzLFxuICAgICAgfSxcbiAgICAgIHJlcS5wYXJhbXMsXG4gICAgICB0aGlzLmdldFJlcVNvcnRNYXAobXVsdGlTb3J0LCBjb2x1bW5zKSxcbiAgICAgIHRoaXMuZ2V0UmVxRmlsdGVyTWFwKGNvbHVtbnMpLFxuICAgICk7XG4gICAgbGV0IHJlcU9wdGlvbnM6IGFueSA9IHtcbiAgICAgIHBhcmFtcyxcbiAgICAgIGJvZHk6IHJlcS5ib2R5LFxuICAgICAgaGVhZGVyczogcmVxLmhlYWRlcnMsXG4gICAgfTtcbiAgICBpZiAobWV0aG9kID09PSAnUE9TVCcgJiYgcmVxLmFsbEluQm9keSA9PT0gdHJ1ZSkge1xuICAgICAgcmVxT3B0aW9ucyA9IHtcbiAgICAgICAgYm9keTogT2JqZWN0LmFzc2lnbih7fSwgcmVxLmJvZHksIHBhcmFtcyksXG4gICAgICAgIGhlYWRlcnM6IHJlcS5oZWFkZXJzLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5yZXF1ZXN0KG1ldGhvZCwgdXJsLCByZXFPcHRpb25zKTtcbiAgfVxuXG4gIC8vI3JlZ2lvbiBzb3J0XG5cbiAgcHJpdmF0ZSBnZXRWYWxpZFNvcnQoY29sdW1uczogU1RDb2x1bW5bXSk6IFNUU29ydE1hcFtdIHtcbiAgICByZXR1cm4gY29sdW1uc1xuICAgICAgLmZpbHRlcihpdGVtID0+IGl0ZW0uX3NvcnQgJiYgaXRlbS5fc29ydC5lbmFibGVkICYmIGl0ZW0uX3NvcnQuZGVmYXVsdClcbiAgICAgIC5tYXAoaXRlbSA9PiBpdGVtLl9zb3J0KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U29ydGVyRm4oY29sdW1uczogU1RDb2x1bW5bXSkge1xuICAgIGNvbnN0IHNvcnRMaXN0ID0gdGhpcy5nZXRWYWxpZFNvcnQoY29sdW1ucyk7XG4gICAgaWYgKHNvcnRMaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHNvcnRMaXN0WzBdLmNvbXBhcmUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnNvbGUud2FybihgW3N0XSBNdXNlIHByb3ZpZGUgdGhlIGNvbXBhcmUgZnVuY3Rpb24gaW4gc29ydGApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHJldHVybiAoYTogU1REYXRhLCBiOiBTVERhdGEpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHNvcnRMaXN0WzBdLmNvbXBhcmUoYSwgYik7XG4gICAgICBpZiAocmVzdWx0ICE9PSAwKSB7XG4gICAgICAgIHJldHVybiBzb3J0TGlzdFswXS5kZWZhdWx0ID09PSAnZGVzY2VuZCcgPyAtcmVzdWx0IDogcmVzdWx0O1xuICAgICAgfVxuICAgICAgcmV0dXJuIDA7XG4gICAgfTtcbiAgfVxuXG4gIGdldFJlcVNvcnRNYXAoXG4gICAgbXVsdGlTb3J0OiBTVE11bHRpU29ydCxcbiAgICBjb2x1bW5zOiBTVENvbHVtbltdLFxuICApOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHtcbiAgICBsZXQgcmV0OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XG4gICAgY29uc3Qgc29ydExpc3QgPSB0aGlzLmdldFZhbGlkU29ydChjb2x1bW5zKTtcbiAgICBpZiAoIW11bHRpU29ydCAmJiBzb3J0TGlzdC5sZW5ndGggPT09IDApIHJldHVybiByZXQ7XG5cbiAgICBpZiAobXVsdGlTb3J0KSB7XG4gICAgICBzb3J0TGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICByZXRbaXRlbS5rZXldID0gKGl0ZW0ucmVOYW1lIHx8IHt9KVtpdGVtLmRlZmF1bHRdIHx8IGl0ZW0uZGVmYXVsdDtcbiAgICAgIH0pO1xuICAgICAgLy8gw6XCkMKIw6XCucK2w6XCpMKEw6fCkMKGXG4gICAgICByZXQgPSB7XG4gICAgICAgIFttdWx0aVNvcnQua2V5XTogT2JqZWN0LmtleXMocmV0KVxuICAgICAgICAgIC5tYXAoa2V5ID0+IGtleSArIG11bHRpU29ydC5uYW1lU2VwYXJhdG9yICsgcmV0W2tleV0pXG4gICAgICAgICAgLmpvaW4obXVsdGlTb3J0LnNlcGFyYXRvciksXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtYXBEYXRhID0gc29ydExpc3RbMF07XG4gICAgICByZXRbbWFwRGF0YS5rZXldID1cbiAgICAgICAgKHNvcnRMaXN0WzBdLnJlTmFtZSB8fCB7fSlbbWFwRGF0YS5kZWZhdWx0XSB8fCBtYXBEYXRhLmRlZmF1bHQ7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvLyNlbmRyZWdpb25cblxuICAvLyNyZWdpb24gZmlsdGVyXG5cbiAgcHJpdmF0ZSBnZXRSZXFGaWx0ZXJNYXAoY29sdW1uczogU1RDb2x1bW5bXSk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0ge1xuICAgIGxldCByZXQgPSB7fTtcbiAgICBjb2x1bW5zLmZpbHRlcih3ID0+IHcuZmlsdGVyICYmIHcuZmlsdGVyLmRlZmF1bHQgPT09IHRydWUpLmZvckVhY2goY29sID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlcyA9IGNvbC5maWx0ZXIubWVudXMuZmlsdGVyKGYgPT4gZi5jaGVja2VkID09PSB0cnVlKTtcbiAgICAgIGxldCBvYmo6IE9iamVjdCA9IHt9O1xuICAgICAgaWYgKGNvbC5maWx0ZXIucmVOYW1lKSB7XG4gICAgICAgIG9iaiA9IGNvbC5maWx0ZXIucmVOYW1lKGNvbC5maWx0ZXIubWVudXMsIGNvbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvYmpbY29sLmZpbHRlci5rZXldID0gdmFsdWVzLm1hcChpID0+IGkudmFsdWUpLmpvaW4oJywnKTtcbiAgICAgIH1cbiAgICAgIHJldCA9IE9iamVjdC5hc3NpZ24ocmV0LCBvYmopO1xuICAgIH0pO1xuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvLyNlbmRyZWdpb25cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBkZWVwR2V0IH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgWGxzeFNlcnZpY2UgfSBmcm9tICdAZGVsb24vYWJjL3hsc3gnO1xuXG5pbXBvcnQgeyBTVENvbHVtbiwgU1RFeHBvcnRPcHRpb25zIH0gZnJvbSAnLi90YWJsZS5pbnRlcmZhY2VzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNURXhwb3J0IHtcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgcHJpdmF0ZSB4bHN4U3J2OiBYbHN4U2VydmljZSkge31cblxuICBwcml2YXRlIF9zdEdldChpdGVtOiBhbnksIGNvbDogU1RDb2x1bW4pOiBhbnkge1xuICAgIGNvbnN0IHJldDogYW55ID0geyB0OiAncycsIHY6ICcnIH07XG5cbiAgICBpZiAoY29sLmZvcm1hdCkge1xuICAgICAgcmV0LnYgPSBjb2wuZm9ybWF0KGl0ZW0sIGNvbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHZhbCA9IGRlZXBHZXQoaXRlbSwgY29sLmluZGV4IGFzIHN0cmluZ1tdLCAnJyk7XG4gICAgICByZXQudiA9IHZhbDtcbiAgICAgIHN3aXRjaCAoY29sLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnY3VycmVuY3knOlxuICAgICAgICAgIHJldC50ID0gJ24nO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdkYXRlJzpcbiAgICAgICAgICByZXQudCA9ICdkJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAneW4nOlxuICAgICAgICAgIHJldC52ID0gcmV0LnYgPT09IGNvbC55blRydXRoID8gY29sLnluWWVzIHx8ICfDpsKYwq8nIDogY29sLnluTm8gfHwgJ8OlwpDCpic7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuU2hlZXQob3B0OiBTVEV4cG9ydE9wdGlvbnMpOiB7IFtzaGVldDogc3RyaW5nXTogYW55IH0ge1xuICAgIGNvbnN0IHNoZWV0czogeyBbc2hlZXQ6IHN0cmluZ106IGFueSB9ID0ge307XG4gICAgY29uc3Qgc2hlZXQgPSAoc2hlZXRzW29wdC5zaGVldG5hbWUgfHwgJ1NoZWV0MSddID0ge30pO1xuICAgIGNvbnN0IGNvbERhdGEgPSBvcHQuX2MuZmlsdGVyKFxuICAgICAgdyA9PlxuICAgICAgICB3LmV4cG9ydGVkICE9PSBmYWxzZSAmJlxuICAgICAgICB3LmluZGV4ICYmXG4gICAgICAgICghdy5idXR0b25zIHx8IHcuYnV0dG9ucy5sZW5ndGggPT09IDApLFxuICAgICk7XG4gICAgY29uc3QgY2MgPSBjb2xEYXRhLmxlbmd0aCxcbiAgICAgIGRjID0gb3B0Ll9kLmxlbmd0aDtcblxuICAgIC8vIGNvbHVtblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2M7IGkrKykge1xuICAgICAgc2hlZXRbYCR7U3RyaW5nLmZyb21DaGFyQ29kZSg2NSArIGkpfTFgXSA9IHtcbiAgICAgICAgdDogJ3MnLFxuICAgICAgICB2OiBjb2xEYXRhW2ldLnRpdGxlLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBjb250ZW50XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYzsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNjOyBqKyspIHtcbiAgICAgICAgc2hlZXRbYCR7U3RyaW5nLmZyb21DaGFyQ29kZSg2NSArIGopfSR7aSArIDJ9YF0gPSB0aGlzLl9zdEdldChcbiAgICAgICAgICBvcHQuX2RbaV0sXG4gICAgICAgICAgY29sRGF0YVtqXSxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY2MgPiAwICYmIGRjID4gMCkge1xuICAgICAgc2hlZXRbJyFyZWYnXSA9IGBBMToke1N0cmluZy5mcm9tQ2hhckNvZGUoNjUgKyBjYyAtIDEpfSR7ZGMgKyAxfWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNoZWV0cztcbiAgfVxuXG4gIGV4cG9ydChvcHQ6IFNURXhwb3J0T3B0aW9ucykge1xuICAgIGlmICghdGhpcy54bHN4U3J2KVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBtdXNlIGJlIGltcG9ydCAnWGxzeE1vZHVsZScgbW9kdWxlLCBidXQgZ290IG51bGxgKTtcbiAgICBjb25zdCBzaGVldHMgPSB0aGlzLmdlblNoZWV0KG9wdCk7XG4gICAgcmV0dXJuIHRoaXMueGxzeFNydi5leHBvcnQoe1xuICAgICAgc2hlZXRzLFxuICAgICAgZmlsZW5hbWU6IG9wdC5maWxlbmFtZSxcbiAgICAgIGNhbGxiYWNrOiBvcHQuY2FsbGJhY2ssXG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgRXZlbnRFbWl0dGVyLFxuICBSZW5kZXJlcjIsXG4gIEVsZW1lbnRSZWYsXG4gIFRlbXBsYXRlUmVmLFxuICBTaW1wbGVDaGFuZ2UsXG4gIE9wdGlvbmFsLFxuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGVjaW1hbFBpcGUsIERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24sIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1xuICBDTkN1cnJlbmN5UGlwZSxcbiAgRGF0ZVBpcGUsXG4gIFlOUGlwZSxcbiAgTW9kYWxIZWxwZXIsXG4gIE1vZGFsSGVscGVyT3B0aW9ucyxcbiAgQUxBSU5fSTE4Tl9UT0tFTixcbiAgQWxhaW5JMThOU2VydmljZSxcbiAgRHJhd2VySGVscGVyLFxuICBEcmF3ZXJIZWxwZXJPcHRpb25zLFxuICBEZWxvbkxvY2FsZVNlcnZpY2UsXG59IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQge1xuICBkZWVwQ29weSxcbiAgdG9Cb29sZWFuLFxuICB1cGRhdGVIb3N0Q2xhc3MsXG4gIElucHV0Qm9vbGVhbixcbiAgSW5wdXROdW1iZXIsXG59IGZyb20gJ0BkZWxvbi91dGlsJztcblxuaW1wb3J0IHtcbiAgU1RDb2x1bW4sXG4gIFNUQ2hhbmdlLFxuICBTVENvbHVtblNlbGVjdGlvbixcbiAgU1RDb2x1bW5GaWx0ZXJNZW51LFxuICBTVERhdGEsXG4gIFNUQ29sdW1uQnV0dG9uLFxuICBTVEV4cG9ydE9wdGlvbnMsXG4gIFNUTXVsdGlTb3J0LFxuICBTVFJlcSxcbiAgU1RFcnJvcixcbiAgU1RDaGFuZ2VUeXBlLFxuICBTVENoYW5nZVJvd0NsaWNrLFxuICBTVFJlcyxcbiAgU1RQYWdlLFxuICBTVExvYWRPcHRpb25zLFxuICBTVFJvd0NsYXNzTmFtZSxcbn0gZnJvbSAnLi90YWJsZS5pbnRlcmZhY2VzJztcbmltcG9ydCB7IFNUQ29uZmlnIH0gZnJvbSAnLi90YWJsZS5jb25maWcnO1xuaW1wb3J0IHsgU1RFeHBvcnQgfSBmcm9tICcuL3RhYmxlLWV4cG9ydCc7XG5pbXBvcnQgeyBTVENvbHVtblNvdXJjZSB9IGZyb20gJy4vdGFibGUtY29sdW1uLXNvdXJjZSc7XG5pbXBvcnQgeyBTVFJvd1NvdXJjZSB9IGZyb20gJy4vdGFibGUtcm93LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBTVERhdGFTb3VyY2UgfSBmcm9tICcuL3RhYmxlLWRhdGEtc291cmNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFibGUuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFtcbiAgICBTVERhdGFTb3VyY2UsXG4gICAgU1RSb3dTb3VyY2UsXG4gICAgU1RDb2x1bW5Tb3VyY2UsXG4gICAgU1RFeHBvcnQsXG4gICAgQ05DdXJyZW5jeVBpcGUsXG4gICAgRGF0ZVBpcGUsXG4gICAgWU5QaXBlLFxuICAgIERlY2ltYWxQaXBlLFxuICBdLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFNUQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGkxOG4kOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgZGVsb25JMThuJDogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIHRvdGFsVHBsID0gYGA7XG4gIHByaXZhdGUgbG9jYWxlOiBhbnkgPSB7fTtcbiAgcHJpdmF0ZSBjbG9uZVBhZ2U6IFNUUGFnZTtcbiAgX2RhdGE6IFNURGF0YVtdID0gW107XG4gIF9pc1BhZ2luYXRpb24gPSB0cnVlO1xuICBfYWxsQ2hlY2tlZCA9IGZhbHNlO1xuICBfaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICBfY29sdW1uczogU1RDb2x1bW5bXSA9IFtdO1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgLyoqIMOmwpXCsMOmwo3CrsOmwrrCkCAqL1xuICBASW5wdXQoKVxuICBkYXRhOiBzdHJpbmcgfCBTVERhdGFbXSB8IE9ic2VydmFibGU8U1REYXRhW10+O1xuICAvKiogw6jCr8K3w6bCscKCw6TCvcKTw6nChcKNw6fCvcKuICovXG4gIEBJbnB1dCgpXG4gIGdldCByZXEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcTtcbiAgfVxuICBzZXQgcmVxKHZhbHVlOiBTVFJlcSkge1xuICAgIGNvbnN0IHsgcmVxIH0gPSB0aGlzLmNvZztcbiAgICBjb25zdCBpdGVtID0gT2JqZWN0LmFzc2lnbih7fSwgcmVxLCB2YWx1ZSk7XG4gICAgaWYgKGl0ZW0ucmVOYW1lID09IG51bGwpIHtcbiAgICAgIGl0ZW0ucmVOYW1lID0gZGVlcENvcHkocmVxLnJlTmFtZSk7XG4gICAgfVxuICAgIHRoaXMuX3JlcSA9IGl0ZW07XG4gIH1cbiAgcHJpdmF0ZSBfcmVxOiBTVFJlcTtcbiAgLyoqIMOowr/ClMOlwpvCnsOkwr3Ck8OpwoXCjcOnwr3CriAqL1xuICBASW5wdXQoKVxuICBnZXQgcmVzKCkge1xuICAgIHJldHVybiB0aGlzLl9yZXM7XG4gIH1cbiAgc2V0IHJlcyh2YWx1ZTogU1RSZXMpIHtcbiAgICBjb25zdCB7IHJlcyB9ID0gdGhpcy5jb2c7XG4gICAgY29uc3QgaXRlbSA9IE9iamVjdC5hc3NpZ24oe30sIHJlcywgdmFsdWUpO1xuICAgIGl0ZW0ucmVOYW1lID0gT2JqZWN0LmFzc2lnbih7fSwgcmVzLnJlTmFtZSwgaXRlbS5yZU5hbWUpO1xuICAgIGlmICghQXJyYXkuaXNBcnJheShpdGVtLnJlTmFtZS5saXN0KSlcbiAgICAgIGl0ZW0ucmVOYW1lLmxpc3QgPSBpdGVtLnJlTmFtZS5saXN0LnNwbGl0KCcuJyk7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGl0ZW0ucmVOYW1lLnRvdGFsKSlcbiAgICAgIGl0ZW0ucmVOYW1lLnRvdGFsID0gaXRlbS5yZU5hbWUudG90YWwuc3BsaXQoJy4nKTtcbiAgICB0aGlzLl9yZXMgPSBpdGVtO1xuICB9XG4gIHByaXZhdGUgX3JlczogU1RSZXM7XG4gIC8qKiDDpcKIwpfDpsKPwo/DqMK/wrAgICovXG4gIEBJbnB1dCgpXG4gIGNvbHVtbnM6IFNUQ29sdW1uW10gPSBbXTtcbiAgLyoqIMOmwq/Cj8OpwqHCtcOmwpXCsMOpwofCj8OvwrzCjMOlwr3Ck8Oowq7CvsOnwr3CrsOkwrjCuiBgMGAgw6jCocKow6fCpMK6w6TCuMKNw6XCiMKGw6nCocK1w6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYDEwYCAqL1xuICBASW5wdXQoKVxuICBASW5wdXROdW1iZXIoKVxuICBwcyA9IDEwO1xuICAvKiogw6XCvcKTw6XCicKNw6nCocK1w6fCoMKBICovXG4gIEBJbnB1dCgpXG4gIEBJbnB1dE51bWJlcigpXG4gIHBpID0gMTtcbiAgLyoqIMOmwpXCsMOmwo3CrsOmwoDCu8OpwofCjyAqL1xuICBASW5wdXQoKVxuICBASW5wdXROdW1iZXIoKVxuICB0b3RhbCA9IDA7XG4gIC8qKiDDpcKIwobDqcKhwrXDpcKZwqjDqcKFwo3Dp8K9wq4gKi9cbiAgQElucHV0KClcbiAgZ2V0IHBhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhZ2U7XG4gIH1cbiAgc2V0IHBhZ2UodmFsdWU6IFNUUGFnZSkge1xuICAgIHRoaXMuY2xvbmVQYWdlID0gdmFsdWU7XG4gICAgY29uc3QgeyBwYWdlIH0gPSB0aGlzLmNvZztcbiAgICBjb25zdCBpdGVtID0gT2JqZWN0LmFzc2lnbih7fSwgZGVlcENvcHkocGFnZSksIHZhbHVlKTtcbiAgICBjb25zdCB7IHRvdGFsIH0gPSBpdGVtO1xuICAgIGlmICh0eXBlb2YgdG90YWwgPT09ICdzdHJpbmcnICYmIHRvdGFsLmxlbmd0aCkge1xuICAgICAgdGhpcy50b3RhbFRwbCA9IHRvdGFsO1xuICAgIH0gZWxzZSBpZiAodG9Cb29sZWFuKHRvdGFsKSkge1xuICAgICAgdGhpcy50b3RhbFRwbCA9IHRoaXMubG9jYWxlLnRvdGFsO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRvdGFsVHBsID0gJyc7XG4gICAgfVxuICAgIHRoaXMuX3BhZ2UgPSBpdGVtO1xuICB9XG4gIHByaXZhdGUgX3BhZ2U6IFNUUGFnZTtcbiAgLyoqIMOmwpjCr8OlwpDCpsOmwpjCvsOnwqTCukxvYWRpbmcgKi9cbiAgQElucHV0KClcbiAgQElucHV0Qm9vbGVhbigpXG4gIGxvYWRpbmcgPSBmYWxzZTtcbiAgLyoqIMOlwrvCtsOowr/Cn8OmwpjCvsOnwqTCusOlworCoMOowr3CvcOmwpXCiMOmwp7CnMOnwprChMOmwpfCtsOpwpfCtMOvwrzCiMOpwpjCssOmwq3CosOpwpfCqsOnwoPCgcOvwrzCiSAqL1xuICBASW5wdXQoKVxuICBASW5wdXROdW1iZXIoKVxuICBsb2FkaW5nRGVsYXkgPSAwO1xuICAvKiogw6bCmMKvw6XCkMKmw6bCmMK+w6fCpMK6w6jCvsK5w6bCocKGICovXG4gIEBJbnB1dCgpXG4gIEBJbnB1dEJvb2xlYW4oKVxuICBib3JkZXJlZCA9IGZhbHNlO1xuICAvKiogdGFibGXDpcKkwqfDpcKwwo8gKi9cbiAgQElucHV0KClcbiAgc2l6ZTogJ3NtYWxsJyB8ICdtaWRkbGUnIHwgJ2RlZmF1bHQnO1xuICAvKiogw6fCusK1w6XCkMKRw6bClMKvw6bCjMKBw6bCu8Kaw6XCisKow6/CvMKMw6TCucKfw6XCj8Kvw6fClMKow6TCusKOw6bCjMKHw6XCrsKaw6bCu8Kaw6XCisKow6XCjMK6w6XCn8Kfw6fCmsKEw6nCq8KYw6XCusKmw6/CvMKaYHsgeTogJzMwMHB4JywgeDogJzMwMHB4JyB9YCAqL1xuICBASW5wdXQoKVxuICBzY3JvbGw6IHsgeT86IHN0cmluZzsgeD86IHN0cmluZyB9O1xuICAvKiogw6bCmMKvw6XCkMKmw6XCpMKaw6bCjsKSw6XCusKPw6/CvMKMw6XCvcKTIGBzb3J0YCDDpcKkwprDpMK4wqrDp8KbwrjDpcKQwozDpcKAwrzDpsKXwrbDqMKHwqrDpcKKwqjDpcKQwojDpcK5wrbDr8K8wozDpcK7wrrDqMKuwq7DpcKQwo7Dp8Krwq/DpsKUwq/DpsKMwoHDpsKXwrbDpMK9wr/Dp8KUwqggKi9cbiAgQElucHV0KClcbiAgZ2V0IG11bHRpU29ydCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbXVsdGlTb3J0O1xuICB9XG4gIHNldCBtdWx0aVNvcnQodmFsdWU6IGFueSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJyAmJiAhdG9Cb29sZWFuKHZhbHVlKSkge1xuICAgICAgdGhpcy5fbXVsdGlTb3J0ID0gbnVsbDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fbXVsdGlTb3J0ID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIDxTVE11bHRpU29ydD57XG4gICAgICAgIGtleTogJ3NvcnQnLFxuICAgICAgICBzZXBhcmF0b3I6ICctJyxcbiAgICAgICAgbmFtZVNlcGFyYXRvcjogJy4nLFxuICAgICAgfSxcbiAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgPyB2YWx1ZSA6IHt9LFxuICAgICk7XG4gIH1cbiAgcHJpdmF0ZSBfbXVsdGlTb3J0OiBTVE11bHRpU29ydDtcbiAgQElucHV0KClcbiAgcm93Q2xhc3NOYW1lOiBTVFJvd0NsYXNzTmFtZTtcbiAgLyoqIGBoZWFkZXJgIMOmwqDCh8OpwqLCmCAqL1xuICBASW5wdXQoKVxuICBoZWFkZXI6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICAvKiogYGZvb3RlcmAgw6XCusKVw6nCg8KoICovXG4gIEBJbnB1dCgpXG4gIGZvb3Rlcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIC8qKiDDqcKiwp3DpcKkwpYgYGJvZHlgIMOlwobChcOlwq7CuSAqL1xuICBASW5wdXQoKVxuICBib2R5OiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgLyoqIGBleHBhbmRgIMOlwo/Cr8OlwrHClcOlwrzCgMOvwrzCjMOlwr3Ck8OmwpXCsMOmwo3CrsOmwrrCkMOkwrjCrcOlwozChcOmwovCrCBgZXhwYW5kYCDDqMKhwqjDp8KkwrrDpcKxwpXDpcK8woDDp8KKwrbDpsKAwoEgKi9cbiAgQElucHV0KClcbiAgZXhwYW5kOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogYW55OyBjb2x1bW46IFNUQ29sdW1uIH0+O1xuICBASW5wdXQoKVxuICBub1Jlc3VsdDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpXG4gIHdpZHRoQ29uZmlnOiBzdHJpbmdbXTtcbiAgLyoqIMOowq/Ct8OmwrHCgsOlwrzCgsOlwrjCuMOmwpfCtsOlwpvCnsOowrDCgyAqL1xuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgZXJyb3IgPSBuZXcgRXZlbnRFbWl0dGVyPFNURXJyb3I+KCk7XG4gIC8qKlxuICAgKiDDpcKPwpjDpcKMwpbDpsKXwrbDpcKbwp7DqMKwwoPDr8K8wozDpcKMwoXDpsKLwqzDr8K8wppgcGlgw6PCgMKBYHBzYMOjwoDCgWBjaGVja2JveGDDo8KAwoFgcmFkaW9gw6PCgMKBYHNvcnRgw6PCgMKBYGZpbHRlcmDDo8KAwoFgY2xpY2tgw6PCgMKBYGRibENsaWNrYCDDpcKPwpjDpcKKwqhcbiAgICovXG4gIEBPdXRwdXQoKVxuICByZWFkb25seSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFNUQ2hhbmdlPigpO1xuICAvKiogw6jCocKMw6XCjcKVw6XCh8K7w6XCpMKaw6XCsMKRw6bCl8K2w6nClcK/w6TCucKLw6fCscK7w6TCuMK6w6XCj8KMw6XCh8K7w6/CvMKIw6XCjcKVw6TCvcKNw6/CvMKaw6bCr8Krw6fCp8KSw6/CvMKJw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYDIwMGAgKi9cbiAgQElucHV0KClcbiAgQElucHV0TnVtYmVyKClcbiAgcm93Q2xpY2tUaW1lID0gMjAwO1xuXG4gIEBJbnB1dCgpXG4gIEBJbnB1dEJvb2xlYW4oKVxuICByZXNwb25zaXZlSGlkZUhlYWRlckZvb3RlcjogYm9vbGVhbjtcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiBjb21wYXRpYmxlXG5cbiAgLyoqXG4gICAqIGNoZWNrYm94w6XCj8KYw6XCjMKWw6bCl8K2w6XCm8Kew6jCsMKDw6/CvMKMw6XCj8KCw6bClcKww6TCuMK6w6XCvcKTw6XCicKNw6bCicKAw6nCgMKJw6bCuMKFw6XCjcKVXG4gICAqIEBkZXByZWNhdGVkIMOkwr3Cv8OnwpTCqCBgY2hhbmdlYCDDpsKbwr/DpMK7wqNcbiAgICogQGRlcHJlY2F0ZWQgYXMgb2YgdjNcbiAgICovXG4gIEBPdXRwdXQoKVxuICByZWFkb25seSBjaGVja2JveENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8U1REYXRhW10+KCk7XG4gIC8qKlxuICAgKiByYWRpb8Olwo/CmMOlwozClsOmwpfCtsOlwpvCnsOowrDCg8OvwrzCjMOlwo/CgsOmwpXCsMOkwrjCusOlwr3Ck8OlwonCjcOmwonCgMOpwoDCiVxuICAgKiBAZGVwcmVjYXRlZCDDpMK9wr/Dp8KUwqggYGNoYW5nZWAgw6bCm8K/w6TCu8KjXG4gICAqIEBkZXByZWNhdGVkIGFzIG9mIHYzXG4gICAqL1xuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgcmFkaW9DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFNURGF0YT4oKTtcbiAgLyoqXG4gICAqIMOmwo7CksOlwrrCj8OlwpvCnsOowrDCg1xuICAgKiBAZGVwcmVjYXRlZCDDpMK9wr/Dp8KUwqggYGNoYW5nZWAgw6bCm8K/w6TCu8KjXG4gICAqIEBkZXByZWNhdGVkIGFzIG9mIHYzXG4gICAqL1xuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgc29ydENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvKipcbiAgICogw6jCv8KHw6bCu8Kkw6XCj8KYw6XCjMKWw6bCl8K2w6XCm8Kew6jCsMKDXG4gICAqIEBkZXByZWNhdGVkIMOkwr3Cv8OnwpTCqCBgY2hhbmdlYCDDpsKbwr/DpMK7wqNcbiAgICogQGRlcHJlY2F0ZWQgYXMgb2YgdjNcbiAgICovXG4gIEBPdXRwdXQoKVxuICByZWFkb25seSBmaWx0ZXJDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFNUQ29sdW1uPigpO1xuICAvKipcbiAgICogw6jCocKMw6XCjcKVw6XCh8K7w6XCm8Kew6jCsMKDXG4gICAqIEBkZXByZWNhdGVkIMOkwr3Cv8OnwpTCqCBgY2hhbmdlYCDDpsKbwr/DpMK7wqNcbiAgICogQGRlcHJlY2F0ZWQgYXMgb2YgdjNcbiAgICovXG4gIEBPdXRwdXQoKVxuICByZWFkb25seSByb3dDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8U1RDaGFuZ2VSb3dDbGljaz4oKTtcbiAgLyoqXG4gICAqIMOowqHCjMOlwo/CjMOlwofCu8OlwpvCnsOowrDCg1xuICAgKiBAZGVwcmVjYXRlZCDDpMK9wr/Dp8KUwqggYGNoYW5nZWAgw6bCm8K/w6TCu8KjXG4gICAqIEBkZXByZWNhdGVkIGFzIG9mIHYzXG4gICAqL1xuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgcm93RGJsQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPFNUQ2hhbmdlUm93Q2xpY2s+KCk7XG4gIC8vI2VuZHJlZ2lvblxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgY29nOiBTVENvbmZpZyxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgZXhwb3J0U3J2OiBTVEV4cG9ydCxcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoQUxBSU5fSTE4Tl9UT0tFTilcbiAgICBpMThuU3J2OiBBbGFpbkkxOE5TZXJ2aWNlLFxuICAgIHByaXZhdGUgbW9kYWxIZWxwZXI6IE1vZGFsSGVscGVyLFxuICAgIHByaXZhdGUgZHJhd2VySGVscGVyOiBEcmF3ZXJIZWxwZXIsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IGFueSxcbiAgICBwcml2YXRlIGNvbHVtblNvdXJjZTogU1RDb2x1bW5Tb3VyY2UsXG4gICAgcHJpdmF0ZSBkYXRhU291cmNlOiBTVERhdGFTb3VyY2UsXG4gICAgcHJpdmF0ZSBkZWxvbkkxOG46IERlbG9uTG9jYWxlU2VydmljZSxcbiAgKSB7XG4gICAgdGhpcy5kZWxvbkkxOG4kID0gdGhpcy5kZWxvbkkxOG4uY2hhbmdlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmxvY2FsZSA9IHRoaXMuZGVsb25JMThuLmdldERhdGEoJ3N0Jyk7XG4gICAgICBpZiAodGhpcy5fY29sdW1ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMucGFnZSA9IHRoaXMuY2xvbmVQYWdlO1xuICAgICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRlZXBDb3B5KGNvZykpO1xuICAgIGlmIChpMThuU3J2KSB7XG4gICAgICB0aGlzLmkxOG4kID0gaTE4blNydi5jaGFuZ2VcbiAgICAgICAgLnBpcGUoZmlsdGVyKCgpID0+IHRoaXMuX2NvbHVtbnMubGVuZ3RoID4gMCkpXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy51cGRhdGVDb2x1bW5zKCkpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlclRvdGFsKHRvdGFsOiBzdHJpbmcsIHJhbmdlOiBzdHJpbmdbXSkge1xuICAgIHJldHVybiB0aGlzLnRvdGFsVHBsXG4gICAgICA/IHRoaXMudG90YWxUcGxcbiAgICAgICAgICAucmVwbGFjZSgne3t0b3RhbH19JywgdG90YWwpXG4gICAgICAgICAgLnJlcGxhY2UoJ3t7cmFuZ2VbMF19fScsIHJhbmdlWzBdKVxuICAgICAgICAgIC5yZXBsYWNlKCd7e3JhbmdlWzFdfX0nLCByYW5nZVsxXSlcbiAgICAgIDogJyc7XG4gIH1cblxuICBwcml2YXRlIGNoYW5nZUVtaXQodHlwZTogU1RDaGFuZ2VUeXBlLCBkYXRhPzogYW55KSB7XG4gICAgY29uc3QgcmVzOiBTVENoYW5nZSA9IHtcbiAgICAgIHR5cGUsXG4gICAgICBwaTogdGhpcy5waSxcbiAgICAgIHBzOiB0aGlzLnBzLFxuICAgICAgdG90YWw6IHRoaXMudG90YWwsXG4gICAgfTtcbiAgICBpZiAoZGF0YSAhPSBudWxsKSB7XG4gICAgICByZXNbdHlwZV0gPSBkYXRhO1xuICAgIH1cbiAgICB0aGlzLmNoYW5nZS5lbWl0KHJlcyk7XG4gIH1cblxuICAvLyNyZWdpb24gZGF0YVxuXG4gIHByaXZhdGUgX2xvYWQoKSB7XG4gICAgY29uc3QgeyBwaSwgcHMsIGRhdGEsIHJlcSwgcmVzLCBwYWdlLCB0b3RhbCwgbXVsdGlTb3J0LCByb3dDbGFzc05hbWUgfSA9IHRoaXM7XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICByZXR1cm4gdGhpcy5kYXRhU291cmNlXG4gICAgICAucHJvY2Vzcyh7XG4gICAgICAgIHBpLFxuICAgICAgICBwcyxcbiAgICAgICAgdG90YWwsXG4gICAgICAgIGRhdGEsXG4gICAgICAgIHJlcSxcbiAgICAgICAgcmVzLFxuICAgICAgICBwYWdlLFxuICAgICAgICBjb2x1bW5zOiB0aGlzLl9jb2x1bW5zLFxuICAgICAgICBtdWx0aVNvcnQsXG4gICAgICAgIHJvd0NsYXNzTmFtZVxuICAgICAgfSlcbiAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdC5waSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aGlzLnBpID0gcmVzdWx0LnBpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0LnRvdGFsICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRoaXMudG90YWwgPSByZXN1bHQudG90YWw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQucGFnZVNob3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhpcy5faXNQYWdpbmF0aW9uID0gcmVzdWx0LnBhZ2VTaG93O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2RhdGEgPSByZXN1bHQubGlzdDtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5fcmVmQ2hlY2soKSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmVycm9yLmVtaXQoeyB0eXBlOiAncmVxJywgZXJyb3IgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiDDpsKgwrnDpsKNwq7DqcKhwrXDp8KgwoHDqcKHwo3DpsKWwrDDpcKKwqDDqMK9wr3DpsKVwrDDpsKNwq5cbiAgICpcbiAgICogQHBhcmFtIHBpIMOmwozCh8Olwq7CmsOlwr3Ck8OlwonCjcOpwqHCtcOnwqDCgcOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmAxYFxuICAgKiBAcGFyYW0gZXh0cmFQYXJhbXMgw6nCh8KNw6bClsKww6bCjMKHw6XCrsKaIGBleHRyYVBhcmFtc2Agw6XCgMK8XG4gICAqIEBwYXJhbSBvcHRpb25zIMOpwoDCicOpwqHCuVxuICAgKi9cbiAgbG9hZChwaSA9IDEsIGV4dHJhUGFyYW1zPzogYW55LCBvcHRpb25zPzogU1RMb2FkT3B0aW9ucykge1xuICAgIGlmIChwaSAhPT0gLTEpIHRoaXMucGkgPSBwaTtcbiAgICBpZiAodHlwZW9mIGV4dHJhUGFyYW1zICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5fcmVxLnBhcmFtcyA9XG4gICAgICAgIG9wdGlvbnMgJiYgb3B0aW9ucy5tZXJnZVxuICAgICAgICAgID8gT2JqZWN0LmFzc2lnbih0aGlzLl9yZXEucGFyYW1zLCBleHRyYVBhcmFtcylcbiAgICAgICAgICA6IGV4dHJhUGFyYW1zO1xuICAgIH1cbiAgICB0aGlzLl9jaGFuZ2UoJ3BpJyk7XG4gIH1cblxuICAvKipcbiAgICogw6nCh8KNw6bClsKww6XCiMK3w6bClsKww6XCvcKTw6XCicKNw6nCocK1XG4gICAqIEBwYXJhbSBleHRyYVBhcmFtcyDDqcKHwo3DpsKWwrDDpsKMwofDpcKuwpogYGV4dHJhUGFyYW1zYCDDpcKAwrxcbiAgICovXG4gIHJlbG9hZChleHRyYVBhcmFtcz86IGFueSwgb3B0aW9ucz86IFNUTG9hZE9wdGlvbnMpIHtcbiAgICB0aGlzLmxvYWQoLTEsIGV4dHJhUGFyYW1zLCBvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDDqcKHwo3Dp8K9wq7DpMK4wpTDqcKHwo3DpsKWwrDDqMKuwr7Dp8K9wq4gYHBpYCDDpMK4wrogYDFgw6/CvMKMw6XCjMKFw6XCkMKrw6TCu8Klw6TCuMKLw6XCgMK8w6/CvMKaXG4gICAqIC0gYGNoZWNrYCDDpsKVwrDDpsKNwq5cbiAgICogLSBgcmFkaW9gIMOmwpXCsMOmwo3CrlxuICAgKiAtIGBzb3J0YCDDpsKVwrDDpsKNwq5cbiAgICogLSBgZmlsZXRlcmAgw6bClcKww6bCjcKuXG4gICAqXG4gICAqIEBwYXJhbSBleHRyYVBhcmFtcyDDqcKHwo3DpsKWwrDDpsKMwofDpcKuwpogYGV4dHJhUGFyYW1zYCDDpcKAwrxcbiAgICovXG4gIHJlc2V0KGV4dHJhUGFyYW1zPzogYW55LCBvcHRpb25zPzogU1RMb2FkT3B0aW9ucykge1xuICAgIHRoaXMuY2xlYXJDaGVjaygpXG4gICAgICAuY2xlYXJSYWRpbygpXG4gICAgICAuY2xlYXJGaWx0ZXIoKVxuICAgICAgLmNsZWFyU29ydCgpO1xuICAgIHRoaXMubG9hZCgxLCBleHRyYVBhcmFtcywgb3B0aW9ucyk7XG4gIH1cblxuICBwcml2YXRlIF90b1RvcCgpIHtcbiAgICBpZiAoIXRoaXMucGFnZS50b1RvcCkgcmV0dXJuO1xuICAgIGNvbnN0IGVsID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgIGlmICh0aGlzLnNjcm9sbCkge1xuICAgICAgZWwucXVlcnlTZWxlY3RvcignLmFudC10YWJsZS1ib2R5Jykuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgLy8gZml4IGhlYWRlciBoZWlnaHRcbiAgICB0aGlzLmRvYy5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIC09IHRoaXMucGFnZS50b1RvcE9mZnNldDtcbiAgfVxuXG4gIF9jaGFuZ2UodHlwZTogJ3BpJyB8ICdwcycpIHtcbiAgICB0aGlzLl9sb2FkKCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLl90b1RvcCgpO1xuICAgIH0pO1xuICAgIHRoaXMuY2hhbmdlRW1pdCh0eXBlKTtcbiAgfVxuXG4gIF9jbGljayhlOiBFdmVudCwgaXRlbTogU1REYXRhLCBjb2w6IFNUQ29sdW1uKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY29uc3QgcmVzID0gY29sLmNsaWNrKGl0ZW0sIHRoaXMpO1xuICAgIGlmICh0eXBlb2YgcmVzID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChyZXMpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIHJvd0NsaWNrQ291bnQgPSAwO1xuICBfcm93Q2xpY2soZTogRXZlbnQsIGl0ZW06IFNURGF0YSwgaW5kZXg6IG51bWJlcikge1xuICAgIGlmICgoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLm5vZGVOYW1lID09PSAnSU5QVVQnKSByZXR1cm47XG4gICAgKyt0aGlzLnJvd0NsaWNrQ291bnQ7XG4gICAgaWYgKHRoaXMucm93Q2xpY2tDb3VudCAhPT0gMSkgcmV0dXJuO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgZGF0YSA9IHsgZSwgaXRlbSwgaW5kZXggfTtcbiAgICAgIGlmICh0aGlzLnJvd0NsaWNrQ291bnQgPT09IDEpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VFbWl0KCdjbGljaycsIGRhdGEpO1xuICAgICAgICAvLyBAZGVwcmVjYXRlZCBhcyBvZiB2M1xuICAgICAgICB0aGlzLnJvd0NsaWNrLmVtaXQoZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNoYW5nZUVtaXQoJ2RibENsaWNrJywgZGF0YSk7XG4gICAgICAgIC8vIEBkZXByZWNhdGVkIGFzIG9mIHYzXG4gICAgICAgIHRoaXMucm93RGJsQ2xpY2suZW1pdChkYXRhKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucm93Q2xpY2tDb3VudCA9IDA7XG4gICAgfSwgdGhpcy5yb3dDbGlja1RpbWUpO1xuICB9XG5cbiAgLyoqIMOnwqfCu8OpwpnCpMOmwp/CkMOowqHCjMOmwpXCsMOmwo3CriAqL1xuICByZW1vdmVSb3coZGF0YTogU1REYXRhIHwgU1REYXRhW10pIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgIGRhdGEgPSBbIGRhdGEgXTtcbiAgICB9XG5cbiAgICAoZGF0YSBhcyBTVERhdGFbXSkubWFwKGl0ZW0gPT4gdGhpcy5fZGF0YS5pbmRleE9mKGl0ZW0pKVxuICAgICAgICAuZmlsdGVyKHBvcyA9PiBwb3MgIT09IC0xKVxuICAgICAgICAuZm9yRWFjaChwb3MgPT4gdGhpcy5fZGF0YS5zcGxpY2UocG9zLCAxKSk7XG5cbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIC8vI2VuZHJlZ2lvblxuXG4gIC8vI3JlZ2lvbiBzb3J0XG5cbiAgc29ydChjb2w6IFNUQ29sdW1uLCBpZHg6IG51bWJlciwgdmFsdWU6IGFueSkge1xuICAgIGlmICh0aGlzLm11bHRpU29ydCkge1xuICAgICAgY29sLl9zb3J0LmRlZmF1bHQgPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY29sdW1ucy5mb3JFYWNoKFxuICAgICAgICAoaXRlbSwgaW5kZXgpID0+IChpdGVtLl9zb3J0LmRlZmF1bHQgPSBpbmRleCA9PT0gaWR4ID8gdmFsdWUgOiBudWxsKSxcbiAgICAgICk7XG4gICAgfVxuICAgIHRoaXMuX2xvYWQoKTtcbiAgICBjb25zdCByZXMgPSB7XG4gICAgICB2YWx1ZSxcbiAgICAgIG1hcDogdGhpcy5kYXRhU291cmNlLmdldFJlcVNvcnRNYXAodGhpcy5tdWx0aVNvcnQsIHRoaXMuX2NvbHVtbnMpLFxuICAgICAgY29sdW1uOiBjb2wsXG4gICAgfTtcbiAgICB0aGlzLmNoYW5nZUVtaXQoJ3NvcnQnLCByZXMpO1xuICAgIC8vIEBkZXByZWNhdGVkIGFzIG9mIHYzXG4gICAgdGhpcy5zb3J0Q2hhbmdlLmVtaXQocmVzKTtcbiAgfVxuXG4gIGNsZWFyU29ydCgpIHtcbiAgICB0aGlzLl9jb2x1bW5zLmZvckVhY2goaXRlbSA9PiAoaXRlbS5fc29ydC5kZWZhdWx0ID0gbnVsbCkpO1xuICB9XG5cbiAgLy8jZW5kcmVnaW9uXG5cbiAgLy8jcmVnaW9uIGZpbHRlclxuXG4gIHByaXZhdGUgaGFuZGxlRmlsdGVyKGNvbDogU1RDb2x1bW4pIHtcbiAgICBjb2wuZmlsdGVyLmRlZmF1bHQgPSBjb2wuZmlsdGVyLm1lbnVzLmZpbmRJbmRleCh3ID0+IHcuY2hlY2tlZCkgIT09IC0xO1xuICAgIHRoaXMuX2xvYWQoKTtcbiAgICB0aGlzLmNoYW5nZUVtaXQoJ2ZpbHRlcicsIGNvbCk7XG4gICAgLy8gQGRlcHJlY2F0ZWQgYXMgb2YgdjNcbiAgICB0aGlzLmZpbHRlckNoYW5nZS5lbWl0KGNvbCk7XG4gIH1cblxuICBfZmlsdGVyQ29uZmlybShjb2w6IFNUQ29sdW1uKSB7XG4gICAgdGhpcy5oYW5kbGVGaWx0ZXIoY29sKTtcbiAgfVxuXG4gIF9maWx0ZXJDbGVhcihjb2w6IFNUQ29sdW1uKSB7XG4gICAgY29sLmZpbHRlci5tZW51cy5mb3JFYWNoKGkgPT4gKGkuY2hlY2tlZCA9IGZhbHNlKSk7XG4gICAgdGhpcy5oYW5kbGVGaWx0ZXIoY29sKTtcbiAgfVxuXG4gIF9maWx0ZXJSYWRpbyhjb2w6IFNUQ29sdW1uLCBpdGVtOiBTVENvbHVtbkZpbHRlck1lbnUsIGNoZWNrZWQ6IGJvb2xlYW4pIHtcbiAgICBjb2wuZmlsdGVyLm1lbnVzLmZvckVhY2goaSA9PiAoaS5jaGVja2VkID0gZmFsc2UpKTtcbiAgICBpdGVtLmNoZWNrZWQgPSBjaGVja2VkO1xuICB9XG5cbiAgY2xlYXJGaWx0ZXIoKSB7XG4gICAgdGhpcy5fY29sdW1uc1xuICAgICAgLmZpbHRlcih3ID0+IHcuZmlsdGVyICYmIHcuZmlsdGVyLmRlZmF1bHQgPT09IHRydWUpXG4gICAgICAuZm9yRWFjaChjb2wgPT4ge1xuICAgICAgICBjb2wuZmlsdGVyLmRlZmF1bHQgPSBmYWxzZTtcbiAgICAgICAgY29sLmZpbHRlci5tZW51cy5mb3JFYWNoKGYgPT4gKGYuY2hlY2tlZCA9IGZhbHNlKSk7XG4gICAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vI2VuZHJlZ2lvblxuXG4gIC8vI3JlZ2lvbiBjaGVja2JveFxuXG4gIC8qKiDDpsK4woXDqcKZwqTDpsKJwoDDpsKcwokgYGNoZWNrYm94YCAqL1xuICBjbGVhckNoZWNrKCk6IHRoaXMge1xuICAgIHJldHVybiB0aGlzLl9jaGVja0FsbChmYWxzZSk7XG4gIH1cblxuICBwcml2YXRlIF9yZWZDaGVjaygpOiB0aGlzIHtcbiAgICBjb25zdCB2YWxpZERhdGEgPSB0aGlzLl9kYXRhLmZpbHRlcih3ID0+ICF3LmRpc2FibGVkKTtcbiAgICBjb25zdCBjaGVja2VkTGlzdCA9IHZhbGlkRGF0YS5maWx0ZXIodyA9PiB3LmNoZWNrZWQgPT09IHRydWUpO1xuICAgIHRoaXMuX2FsbENoZWNrZWQgPVxuICAgICAgY2hlY2tlZExpc3QubGVuZ3RoID4gMCAmJiBjaGVja2VkTGlzdC5sZW5ndGggPT09IHZhbGlkRGF0YS5sZW5ndGg7XG4gICAgY29uc3QgYWxsVW5DaGVja2VkID0gdmFsaWREYXRhLmV2ZXJ5KHZhbHVlID0+ICF2YWx1ZS5jaGVja2VkKTtcbiAgICB0aGlzLl9pbmRldGVybWluYXRlID0gIXRoaXMuX2FsbENoZWNrZWQgJiYgIWFsbFVuQ2hlY2tlZDtcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIF9jaGVja0FsbChjaGVja2VkPzogYm9vbGVhbik6IHRoaXMge1xuICAgIGNoZWNrZWQgPSB0eXBlb2YgY2hlY2tlZCA9PT0gJ3VuZGVmaW5lZCcgPyB0aGlzLl9hbGxDaGVja2VkIDogY2hlY2tlZDtcbiAgICB0aGlzLl9kYXRhLmZpbHRlcih3ID0+ICF3LmRpc2FibGVkKS5mb3JFYWNoKGkgPT4gKGkuY2hlY2tlZCA9IGNoZWNrZWQpKTtcbiAgICByZXR1cm4gdGhpcy5fcmVmQ2hlY2soKS5fY2hlY2tOb3RpZnkoKTtcbiAgfVxuXG4gIF9jaGVja1NlbGVjdGlvbihpOiBTVERhdGEsIHZhbHVlOiBib29sZWFuKSB7XG4gICAgaS5jaGVja2VkID0gdmFsdWU7XG4gICAgcmV0dXJuIHRoaXMuX3JlZkNoZWNrKCkuX2NoZWNrTm90aWZ5KCk7XG4gIH1cblxuICBfcm93U2VsZWN0aW9uKHJvdzogU1RDb2x1bW5TZWxlY3Rpb24pOiB0aGlzIHtcbiAgICByb3cuc2VsZWN0KHRoaXMuX2RhdGEpO1xuICAgIHJldHVybiB0aGlzLl9yZWZDaGVjaygpLl9jaGVja05vdGlmeSgpO1xuICB9XG5cbiAgX2NoZWNrTm90aWZ5KCk6IHRoaXMge1xuICAgIGNvbnN0IHJlcyA9IHRoaXMuX2RhdGEuZmlsdGVyKHcgPT4gIXcuZGlzYWJsZWQgJiYgdy5jaGVja2VkID09PSB0cnVlKTtcbiAgICB0aGlzLmNoYW5nZUVtaXQoJ2NoZWNrYm94JywgcmVzKTtcbiAgICAvLyBAZGVwcmVjYXRlZCBhcyBvZiB2M1xuICAgIHRoaXMuY2hlY2tib3hDaGFuZ2UuZW1pdChyZXMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8jZW5kcmVnaW9uXG5cbiAgLy8jcmVnaW9uIHJhZGlvXG5cbiAgLyoqIMOmwrjChcOpwpnCpMOmwonCgMOmwpzCiSBgcmFkaW9gICovXG4gIGNsZWFyUmFkaW8oKTogdGhpcyB7XG4gICAgdGhpcy5fZGF0YS5maWx0ZXIodyA9PiB3LmNoZWNrZWQpLmZvckVhY2goaXRlbSA9PiAoaXRlbS5jaGVja2VkID0gZmFsc2UpKTtcbiAgICB0aGlzLmNoYW5nZUVtaXQoJ3JhZGlvJywgbnVsbCk7XG4gICAgLy8gQGRlcHJlY2F0ZWQgYXMgb2YgdjNcbiAgICB0aGlzLnJhZGlvQ2hhbmdlLmVtaXQobnVsbCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBfcmVmUmFkaW8oY2hlY2tlZDogYm9vbGVhbiwgaXRlbTogU1REYXRhKTogdGhpcyB7XG4gICAgLy8gaWYgKGl0ZW0uZGlzYWJsZWQgPT09IHRydWUpIHJldHVybjtcbiAgICB0aGlzLl9kYXRhLmZpbHRlcih3ID0+ICF3LmRpc2FibGVkKS5mb3JFYWNoKGkgPT4gKGkuY2hlY2tlZCA9IGZhbHNlKSk7XG4gICAgaXRlbS5jaGVja2VkID0gY2hlY2tlZDtcbiAgICB0aGlzLmNoYW5nZUVtaXQoJ3JhZGlvJywgaXRlbSk7XG4gICAgLy8gQGRlcHJlY2F0ZWQgYXMgb2YgdjNcbiAgICB0aGlzLnJhZGlvQ2hhbmdlLmVtaXQoaXRlbSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyNlbmRyZWdpb25cblxuICAvLyNyZWdpb24gYnV0dG9uc1xuXG4gIF9idG5DbGljayhlOiBFdmVudCwgcmVjb3JkOiBTVERhdGEsIGJ0bjogU1RDb2x1bW5CdXR0b24pIHtcbiAgICBpZiAoZSkge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgaWYgKGJ0bi50eXBlID09PSAnbW9kYWwnIHx8IGJ0bi50eXBlID09PSAnc3RhdGljJykge1xuICAgICAgY29uc3Qgb2JqID0ge307XG4gICAgICBjb25zdCB7IG1vZGFsIH0gPSBidG47XG4gICAgICBvYmpbbW9kYWwucGFyYW1zTmFtZV0gPSByZWNvcmQ7XG4gICAgICBjb25zdCBvcHRpb25zOiBNb2RhbEhlbHBlck9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBtb2RhbCk7XG4gICAgICAodGhpcy5tb2RhbEhlbHBlcltcbiAgICAgICAgYnRuLnR5cGUgPT09ICdtb2RhbCcgPyAnY3JlYXRlJyA6ICdjcmVhdGVTdGF0aWMnXG4gICAgICBdIGFzIGFueSkoXG4gICAgICAgIG1vZGFsLmNvbXBvbmVudCxcbiAgICAgICAgT2JqZWN0LmFzc2lnbihvYmosIG1vZGFsLnBhcmFtcyAmJiBtb2RhbC5wYXJhbXMocmVjb3JkKSksXG4gICAgICAgIG9wdGlvbnMsXG4gICAgICApXG4gICAgICAgIC5waXBlKGZpbHRlcih3ID0+IHR5cGVvZiB3ICE9PSAndW5kZWZpbmVkJykpXG4gICAgICAgIC5zdWJzY3JpYmUocmVzID0+IHRoaXMuYnRuQ2FsbGJhY2socmVjb3JkLCBidG4sIHJlcykpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoYnRuLnR5cGUgPT09ICdkcmF3ZXInKSB7XG4gICAgICBjb25zdCBvYmogPSB7fTtcbiAgICAgIGNvbnN0IHsgZHJhd2VyIH0gPSBidG47XG4gICAgICBvYmpbZHJhd2VyLnBhcmFtc05hbWVdID0gcmVjb3JkO1xuICAgICAgdGhpcy5kcmF3ZXJIZWxwZXJcbiAgICAgICAgLmNyZWF0ZShcbiAgICAgICAgICBkcmF3ZXIudGl0bGUsXG4gICAgICAgICAgZHJhd2VyLmNvbXBvbmVudCxcbiAgICAgICAgICBPYmplY3QuYXNzaWduKG9iaiwgZHJhd2VyLnBhcmFtcyAmJiBkcmF3ZXIucGFyYW1zKHJlY29yZCkpLFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIGRyYXdlciksXG4gICAgICAgIClcbiAgICAgICAgLnBpcGUoZmlsdGVyKHcgPT4gdHlwZW9mIHcgIT09ICd1bmRlZmluZWQnKSlcbiAgICAgICAgLnN1YnNjcmliZShyZXMgPT4gdGhpcy5idG5DYWxsYmFjayhyZWNvcmQsIGJ0biwgcmVzKSk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChidG4udHlwZSA9PT0gJ2xpbmsnKSB7XG4gICAgICBjb25zdCBjbGlja1JlcyA9IHRoaXMuYnRuQ2FsbGJhY2socmVjb3JkLCBidG4pO1xuICAgICAgaWYgKHR5cGVvZiBjbGlja1JlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChjbGlja1Jlcyk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuYnRuQ2FsbGJhY2socmVjb3JkLCBidG4pO1xuICB9XG5cbiAgcHJpdmF0ZSBidG5DYWxsYmFjayhyZWNvcmQ6IFNURGF0YSwgYnRuOiBTVENvbHVtbkJ1dHRvbiwgbW9kYWw/OiBhbnkpIHtcbiAgICBpZiAoIWJ0bi5jbGljaykgcmV0dXJuO1xuICAgIGlmICh0eXBlb2YgYnRuLmNsaWNrID09PSAnc3RyaW5nJykge1xuICAgICAgc3dpdGNoIChidG4uY2xpY2spIHtcbiAgICAgICAgY2FzZSAnbG9hZCc6XG4gICAgICAgICAgdGhpcy5sb2FkKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3JlbG9hZCc6XG4gICAgICAgICAgdGhpcy5yZWxvYWQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGJ0bi5jbGljayhyZWNvcmQsIG1vZGFsLCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICBfYnRuVGV4dChyZWNvcmQ6IGFueSwgYnRuOiBTVENvbHVtbkJ1dHRvbikge1xuICAgIGlmIChidG4uZm9ybWF0KSByZXR1cm4gYnRuLmZvcm1hdChyZWNvcmQsIGJ0bik7XG4gICAgcmV0dXJuIGJ0bi50ZXh0O1xuICB9XG5cbiAgX3ZhbGlkQnRucyhpdGVtOiBTVERhdGEsIGNvbDogU1RDb2x1bW4pOiBTVENvbHVtbkJ1dHRvbltdIHtcbiAgICByZXR1cm4gY29sLmJ1dHRvbnMuZmlsdGVyKGJ0biA9PiBidG4uaWlmKGl0ZW0sIGJ0biwgY29sKSk7XG4gIH1cblxuICAvLyNlbmRyZWdpb25cblxuICAvLyNyZWdpb24gZXhwb3J0XG5cbiAgLyoqXG4gICAqIMOlwq/CvMOlwofCusOlwr3Ck8OlwonCjcOpwqHCtcOvwrzCjMOnwqHCrsOkwr/CncOlwrfCssOnwrvCj8OmwrPCqMOlwobCjCBgWGxzeE1vZHVsZWBcbiAgICogQHBhcmFtIG5ld0RhdGEgw6nCh8KNw6bClsKww6bCjMKHw6XCrsKaw6bClcKww6bCjcKuw6/CvMKMw6TCvsKLw6XCpsKCw6XCuMKMw6bCnMKbw6XCr8K8w6XCh8K6w6bCicKAw6bCnMKJw6bClcKww6bCjcKuw6nCncKew6XCuMK4w6bCnMKJw6fClMKoXG4gICAqIEBwYXJhbSBvcHQgw6nCosKdw6XCpMKWw6XCj8KCw6bClcKwXG4gICAqL1xuICBleHBvcnQobmV3RGF0YT86IGFueVtdLCBvcHQ/OiBTVEV4cG9ydE9wdGlvbnMpIHtcbiAgICAobmV3RGF0YSA/IG9mKG5ld0RhdGEpIDogb2YodGhpcy5fZGF0YSkpLnN1YnNjcmliZSgocmVzOiBhbnlbXSkgPT5cbiAgICAgIHRoaXMuZXhwb3J0U3J2LmV4cG9ydChcbiAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0LCA8U1RFeHBvcnRPcHRpb25zPntcbiAgICAgICAgICBfZDogcmVzLFxuICAgICAgICAgIF9jOiB0aGlzLl9jb2x1bW5zLFxuICAgICAgICB9KSxcbiAgICAgICksXG4gICAgKTtcbiAgfVxuXG4gIC8vI2VuZHJlZ2lvblxuXG4gIHByaXZhdGUgdXBkYXRlQ29sdW1ucygpIHtcbiAgICB0aGlzLl9jb2x1bW5zID0gdGhpcy5jb2x1bW5Tb3VyY2UucHJvY2Vzcyh0aGlzLmNvbHVtbnMpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDbGFzcygpIHtcbiAgICB1cGRhdGVIb3N0Q2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLnJlbmRlcmVyLCB7XG4gICAgICBbYHN0YF06IHRydWUsXG4gICAgICBbYHN0X19wLSR7dGhpcy5wYWdlLnBsYWNlbWVudH1gXTogdGhpcy5wYWdlLnBsYWNlbWVudCxcbiAgICAgIFtgYW50LXRhYmxlLXJlcF9faGlkZS1oZWFkZXItZm9vdGVyYF06IHRoaXMucmVzcG9uc2l2ZUhpZGVIZWFkZXJGb290ZXIsXG4gICAgfSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5jb2x1bW5Tb3VyY2UucmVzdG9yZUFsbFJlbmRlcih0aGlzLl9jb2x1bW5zKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKFxuICAgIGNoYW5nZXM6IHsgW1AgaW4ga2V5b2YgdGhpc10/OiBTaW1wbGVDaGFuZ2UgfSAmIFNpbXBsZUNoYW5nZXMsXG4gICk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLmNvbHVtbnMpIHtcbiAgICAgIHRoaXMudXBkYXRlQ29sdW1ucygpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5kYXRhICYmIGNoYW5nZXMuZGF0YS5jdXJyZW50VmFsdWUpIHtcbiAgICAgIHRoaXMuX2xvYWQoKTtcbiAgICB9XG4gICAgdGhpcy5zZXRDbGFzcygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZWxvbkkxOG4kLnVuc3Vic2NyaWJlKCk7XG4gICAgaWYgKHRoaXMuaTE4biQpIHRoaXMuaTE4biQudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5nWm9ycm9BbnRkTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XG5cbmltcG9ydCB7IERlbG9uVXRpbE1vZHVsZSB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IERlbG9uQUNMTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2FjbCc7XG5cbmltcG9ydCB7IFNUQ29tcG9uZW50IH0gZnJvbSAnLi90YWJsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU1RSb3dEaXJlY3RpdmUgfSBmcm9tICcuL3RhYmxlLXJvdy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU1RDb25maWcgfSBmcm9tICcuL3RhYmxlLmNvbmZpZyc7XG5cbmNvbnN0IENPTVBPTkVOVFMgPSBbU1RDb21wb25lbnQsIFNUUm93RGlyZWN0aXZlXTtcblxuQE5nTW9kdWxlKHtcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIERlbG9uVXRpbE1vZHVsZSxcbiAgICBEZWxvbkFDTE1vZHVsZSxcbiAgICBOZ1pvcnJvQW50ZE1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbLi4uQ09NUE9ORU5UU10sXG4gIGV4cG9ydHM6IFsuLi5DT01QT05FTlRTXSxcbn0pXG5leHBvcnQgY2xhc3MgU1RNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4geyBuZ01vZHVsZTogU1RNb2R1bGUsIHByb3ZpZGVyczogW1NUQ29uZmlnXSB9O1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O3NCQVd3RCxFQUFFO29CQUNKLEVBQUU7Ozs7Ozs7O0lBRXRELEdBQUcsQ0FBQyxJQUFZLEVBQUUsSUFBWSxFQUFFLEdBQXFCO1FBQ25ELElBQUksQ0FBQyxJQUFJLEtBQUssT0FBTyxHQUFHLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUM7S0FDeEQ7Ozs7O0lBRUQsUUFBUSxDQUFDLElBQVk7UUFDbkIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzFCOzs7OztJQUVELE1BQU0sQ0FBQyxJQUFZO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN4Qjs7O1lBZkYsVUFBVTs7Ozs7OztJQTBCVCxZQUNVLEtBQ1EsTUFBbUI7UUFEM0IsUUFBRyxHQUFILEdBQUc7UUFDSyxXQUFNLEdBQU4sTUFBTSxDQUFhO0tBQ2pDOzs7O0lBRUosUUFBUTtRQUNOLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDL0M7OztZQWZGLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUU7Ozs7WUF4QmpDLFdBQVc7WUFrQ2UsV0FBVyx1QkFBbEMsSUFBSTs7O2lCQVJOLEtBQUssU0FBQyxRQUFRO21CQUdkLEtBQUs7Ozs7Ozs7QUNyQlI7Ozs7O29CQWdCMEMsU0FBUzs7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