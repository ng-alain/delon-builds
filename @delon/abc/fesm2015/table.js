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
                for (const i of result) {
                    i["_values"] = columns.map(c => this.get(i, c));
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
     * @return {?}
     */
    get(item, col) {
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
        const { pi, ps, data, req, res, page, total, multiSort } = this;
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
                template: "<ng-template #btnTpl let-i let-btn=\"btn\" let-sub=\"sub\">\n  <nz-popconfirm *ngIf=\"btn.pop === true\" [nzTitle]=\"btn.popTitle\" (nzOnConfirm)=\"_btnClick($event, i, btn)\">\n    <a *ngIf=\"!sub\" nz-popconfirm>\n      <ng-template [ngTemplateOutlet]=\"btnTextTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n    </a>\n    <span *ngIf=\"sub\" nz-popconfirm>\n      <ng-template [ngTemplateOutlet]=\"btnTextTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n    </span>\n  </nz-popconfirm>\n  <ng-container *ngIf=\"btn.pop !== true\">\n    <a *ngIf=\"!sub\" (click)=\"_btnClick($event, i, btn)\">\n      <ng-template [ngTemplateOutlet]=\"btnTextTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n    </a>\n    <span *ngIf=\"sub\" (click)=\"_btnClick($event, i, btn)\">\n      <ng-template [ngTemplateOutlet]=\"btnTextTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n    </span>\n  </ng-container>\n</ng-template>\n<ng-template #btnTextTpl let-i let-btn=\"btn\">\n  <i *ngIf=\"btn.icon\" nz-icon [type]=\"btn.icon.type\" [theme]=\"btn.icon.theme\" [spin]=\"btn.icon.spin\" [twoToneColor]=\"btn.icon.twoToneColor\" [iconfont]=\"btn.icon.iconfont\"></i>\n  <span [innerHTML]=\"_btnText(i, btn)\" [ngClass]=\"{'pl-xs': btn.icon}\"></span>\n</ng-template>\n<nz-table [nzData]=\"_data\"\n  [(nzPageIndex)]=\"pi\" (nzPageIndexChange)=\"_change('pi')\"\n  [(nzPageSize)]=\"ps\" (nzPageSizeChange)=\"_change('ps')\"\n  [nzTotal]=\"total\"\n  [nzShowPagination]=\"_isPagination\"\n  [nzFrontPagination]=\"false\"\n  [nzBordered]=\"bordered\"\n  [nzSize]=\"size\"\n  [nzLoading]=\"loading\"\n  [nzLoadingDelay]=\"loadingDelay\"\n  [nzScroll]=\"scroll\"\n  [nzTitle]=\"header\" [nzFooter]=\"footer\" [nzNoResult]=\"noResult\"\n  [nzPageSizeOptions]=\"page.pageSizes\"\n  [nzShowQuickJumper]=\"page.showQuickJumper\"\n  [nzShowSizeChanger]=\"page.showSize\"\n  [nzShowTotal]=\"totalTpl\">\n  <thead class=\"st__head\">\n    <tr>\n      <th *ngIf=\"expand\" [nzShowExpand]=\"expand\"></th>\n      <th *ngFor=\"let c of _columns; let index=index\" [nzWidth]=\"c.width\" [nzLeft]=\"c._left\" [nzRight]=\"c._right\" [ngClass]=\"c.className\"\n        [attr.colspan]=\"c.colSpan\" [attr.data-col]=\"c.indexKey\"\n        [nzShowSort]=\"c._sort.enabled\" [nzSort]=\"c._sort.default\" (nzSortChange)=\"sort(c, index, $event)\"\n        nzCustomFilter>\n        <ng-template #renderTitle [ngTemplateOutlet]=\"c.__renderTitle\" [ngTemplateOutletContext]=\"{$implicit: c, index: index }\"></ng-template>\n        <ng-container *ngIf=\"!c.__renderTitle; else renderTitle\">\n          <ng-container [ngSwitch]=\"c.type\">\n            <ng-container *ngSwitchCase=\"'checkbox'\">\n              <label nz-checkbox class=\"st__checkall\" [(ngModel)]=\"_allChecked\" [nzIndeterminate]=\"_indeterminate\" (ngModelChange)=\"_checkAll()\"></label>\n              <nz-dropdown *ngIf=\"c.selections.length\" class=\"st__selection\">\n                <span nz-dropdown>\n                  <i nz-icon type=\"down\"></i>\n                </span>\n                <ul nz-menu>\n                  <li nz-menu-item *ngFor=\"let rw of c.selections\" (click)=\"_rowSelection(rw)\" [innerHTML]=\"rw.text\">\n                  </li>\n                </ul>\n              </nz-dropdown>\n            </ng-container>\n            <ng-container *ngSwitchDefault>\n              <span [innerHTML]=\"c.title\"></span>\n            </ng-container>\n          </ng-container>\n          <nz-dropdown *ngIf=\"c.filter\"\n            class=\"st__filter\" nzTrigger=\"click\" [hasFilterButton]=\"true\" [nzClickHide]=\"false\"\n            [(nzVisible)]=\"c.filter.visible\">\n            <i nz-icon [type]=\"c.filter.icon\" theme=\"fill\"\n              [class.ant-table-filter-selected]=\"c.filter.default\"\n              [class.ant-table-filter-open]=\"c.filter.visible\" nz-dropdown></i>\n            <ul nz-menu>\n              <ng-container *ngIf=\"c.filter.multiple\">\n                <li nz-menu-item *ngFor=\"let filter of c.filter.menus\">\n                  <label nz-checkbox [(ngModel)]=\"filter.checked\">{{filter.text}}</label>\n                </li>\n              </ng-container>\n              <ng-container *ngIf=\"!c.filter.multiple\">\n                <li nz-menu-item *ngFor=\"let filter of c.filter.menus\">\n                  <label nz-radio [ngModel]=\"filter.checked\" (ngModelChange)=\"_filterRadio(c, filter, $event)\">{{filter.text}}</label>\n                </li>\n              </ng-container>\n            </ul>\n            <div class=\"ant-table-filter-dropdown-btns\">\n              <a class=\"ant-table-filter-dropdown-link confirm\" (click)=\"c.filter.visible = false\">\n                <span (click)=\"_filterConfirm(c)\">{{c.filter.confirmText}}</span>\n              </a>\n              <a class=\"ant-table-filter-dropdown-link clear\" (click)=\"c.filter.visible = false\">\n                <span (click)=\"_filterClear(c)\">{{c.filter.clearText}}</span>\n              </a>\n            </div>\n          </nz-dropdown>\n        </ng-container>\n      </th>\n    </tr>\n  </thead>\n  <tbody class=\"st__body\">\n    <ng-container *ngFor=\"let i of _data; let index=index\">\n      <tr [attr.data-index]=\"index\" (click)=\"_rowClick($event, i, index)\">\n        <td *ngIf=\"expand\" [nzShowExpand]=\"expand\" [(nzExpand)]=\"i.expand\"></td>\n        <td *ngFor=\"let c of _columns; let cIdx=index\" [nzLeft]=\"c._left\" [nzRight]=\"c._right\" [nzCheckbox]=\"c.type === 'checkbox'\" [ngClass]=\"c.className\"\n          [attr.colspan]=\"c.colSpan\">\n          <span class=\"ant-table-rep__title\" [innerHTML]=\"c.title\"></span>\n          <ng-template #render [ngTemplateOutlet]=\"c.__render\" [ngTemplateOutletContext]=\"{$implicit: i, index: index, column: c }\"></ng-template>\n          <ng-container *ngIf=\"!c.__render; else render\">\n            <ng-container *ngIf=\"c.index\" [ngSwitch]=\"c.type\">\n              <ng-container *ngSwitchCase=\"'checkbox'\">\n                <label nz-checkbox [nzDisabled]=\"i.disabled\" [ngModel]=\"i.checked\" (ngModelChange)=\"_checkSelection(i, $event)\"></label>\n              </ng-container>\n              <ng-container *ngSwitchCase=\"'radio'\">\n                <label nz-radio [nzDisabled]=\"i.disabled\" [ngModel]=\"i.checked\" (ngModelChange)=\"_refRadio($event, i)\"></label>\n              </ng-container>\n              <ng-container *ngSwitchCase=\"'link'\">\n                <a (click)=\"_click($event, i, c)\" [innerHTML]=\"i._values[cIdx]\"></a>\n              </ng-container>\n              <ng-container *ngSwitchCase=\"'tag'\">\n                <nz-tag [nzColor]=\"c.tag[i._values[cIdx]].color\">{{c.tag[i._values[cIdx]].text || i._values[cIdx]}}</nz-tag>\n              </ng-container>\n              <ng-container *ngSwitchCase=\"'badge'\">\n                <nz-badge [nzStatus]=\"c.badge[i._values[cIdx]].color\" [nzText]=\"c.badge[i._values[cIdx]].text || i._values[cIdx]\"></nz-badge>\n              </ng-container>\n              <span *ngSwitchDefault [innerHTML]=\"i._values[cIdx]\"></span>\n            </ng-container>\n            <ng-container *ngFor=\"let btn of _validBtns(i, c); let last=last\">\n              <nz-dropdown *ngIf=\"btn.children.length > 0\">\n                <a class=\"ant-dropdown-link\" nz-dropdown>\n                  <span [innerHTML]=\"_btnText(i, btn)\"></span>\n                  <i nz-icon type=\"down\"></i>\n                </a>\n                <ul nz-menu>\n                  <ng-container *ngFor=\"let subBtn of btn.children\">\n                    <li nz-menu-item *ngIf=\"subBtn.iif(i, subBtn, c)\">\n                      <ng-template [ngTemplateOutlet]=\"btnTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: subBtn, sub: true }\"></ng-template>\n                    </li>\n                  </ng-container>\n                </ul>\n              </nz-dropdown>\n              <ng-container *ngIf=\"btn.children.length == 0\">\n                <ng-template [ngTemplateOutlet]=\"btnTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn, sub: false }\"></ng-template>\n              </ng-container>\n              <nz-divider *ngIf=\"!last\" nzType=\"vertical\"></nz-divider>\n            </ng-container>\n            <ng-template [ngIf]=\"!c.__renderExpanded\" [ngTemplateOutlet]=\"c.__renderExpanded\" [ngTemplateOutletContext]=\"{$implicit: i, index: index, column: c }\"></ng-template>\n          </ng-container>\n        </td>\n      </tr>\n      <tr [nzExpand]=\"i.expand\">\n        <td></td>\n        <td [attr.colspan]=\"_columns.length\">\n          <ng-template [ngTemplateOutlet]=\"expand\" [ngTemplateOutletContext]=\"{$implicit: i, index: index }\"></ng-template>\n        </td>\n      </tr>\n    </ng-container>\n    <ng-template [ngIf]=\"!loading\" [ngTemplateOutlet]=\"body\"></ng-template>\n  </tbody>\n  <ng-template #totalTpl let-range=\"range\" let-total>{{ renderTotal(total, range) }}</ng-template>\n</nz-table>\n",
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BkZWxvbi9hYmMvdGFibGUvdGFibGUtcm93LmRpcmVjdGl2ZS50cyIsIm5nOi8vQGRlbG9uL2FiYy90YWJsZS90YWJsZS5jb25maWcudHMiLCJuZzovL0BkZWxvbi9hYmMvdGFibGUvdGFibGUtY29sdW1uLXNvdXJjZS50cyIsIm5nOi8vQGRlbG9uL2FiYy90YWJsZS90YWJsZS1kYXRhLXNvdXJjZS50cyIsIm5nOi8vQGRlbG9uL2FiYy90YWJsZS90YWJsZS1leHBvcnQudHMiLCJuZzovL0BkZWxvbi9hYmMvdGFibGUvdGFibGUuY29tcG9uZW50LnRzIiwibmc6Ly9AZGVsb24vYWJjL3RhYmxlL3RhYmxlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBUZW1wbGF0ZVJlZixcbiAgT25Jbml0LFxuICBJbmplY3RhYmxlLFxuICBIb3N0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNUUm93U291cmNlIHtcbiAgcHJpdmF0ZSB0aXRsZXM6IHsgW2tleTogc3RyaW5nXTogVGVtcGxhdGVSZWY8YW55PiB9ID0ge307XG4gIHByaXZhdGUgcm93czogeyBba2V5OiBzdHJpbmddOiBUZW1wbGF0ZVJlZjxhbnk+IH0gPSB7fTtcblxuICBhZGQodHlwZTogc3RyaW5nLCBwYXRoOiBzdHJpbmcsIHJlZjogVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIHRoaXNbdHlwZSA9PT0gJ3RpdGxlJyA/ICd0aXRsZXMnIDogJ3Jvd3MnXVtwYXRoXSA9IHJlZjtcbiAgfVxuXG4gIGdldFRpdGxlKHBhdGg6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnRpdGxlc1twYXRoXTtcbiAgfVxuXG4gIGdldFJvdyhwYXRoOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yb3dzW3BhdGhdO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tzdC1yb3ddJyB9KVxuZXhwb3J0IGNsYXNzIFNUUm93RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCdzdC1yb3cnKVxuICBpZDogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHR5cGU6ICd0aXRsZSc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWY6IFRlbXBsYXRlUmVmPGFueT4sXG4gICAgQEhvc3QoKSBwcml2YXRlIHNvdXJjZTogU1RSb3dTb3VyY2UsXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNvdXJjZS5hZGQodGhpcy50eXBlLCB0aGlzLmlkLCB0aGlzLnJlZik7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIFNUTXVsdGlTb3J0LFxuICBTVFJlcSxcbiAgU1RSZXMsXG4gIFNUUGFnZSxcbiAgU1RDb2x1bW5CdXR0b25Nb2RhbENvbmZpZyxcbiAgU1RDb2x1bW5CdXR0b25EcmF3ZXJDb25maWcsXG4gIFNUSWNvbixcbn0gZnJvbSAnLi90YWJsZS5pbnRlcmZhY2VzJztcblxuZXhwb3J0IGNsYXNzIFNUQ29uZmlnIHtcbiAgLyoqXG4gICAqIMOowrXCt8OlwqfCi8OpwqHCtcOnwqDCgcOvwrzCjMOpwrvCmMOowq7CpMOkwrjCusOvwrzCmmAxYFxuICAgKi9cbiAgcGk/OiBudW1iZXI7XG4gIC8qKlxuICAgKiDDpsKvwo/DqcKhwrXDpsKVwrDDqcKHwo/Dr8K8wozDpcK9wpPDqMKuwr7Dp8K9wq7DpMK4wrogYDBgIMOowqHCqMOnwqTCusOkwrjCjcOlwojChsOpwqHCtcOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmAxMGBcbiAgICovXG4gIHBzPzogbnVtYmVyO1xuICAvKipcbiAgICogw6bCmMKvw6XCkMKmw6bCmMK+w6fCpMK6w6jCvsK5w6bCocKGXG4gICAqL1xuICBib3JkZXJlZD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiB0YWJsZcOlwqTCp8OlwrDCj1xuICAgKi9cbiAgc2l6ZT86ICdzbWFsbCcgfCAnbWlkZGxlJyB8ICdkZWZhdWx0JyA9ICdkZWZhdWx0JztcbiAgLyoqXG4gICAqIMOmwpjCr8OlwpDCpsOpwprCkMOowpfCj8OlwqTCtMOlwpLCjMOlwrDCvsOvwrzCjMOlwr3Ck8OlwrDCj8OlwrHCj8OlwrnClcOkwrjCi8OmwonCjcOmwpjCvsOnwqTCusOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmBmYWxzZWBcbiAgICovXG4gIHJlc3BvbnNpdmVIaWRlSGVhZGVyRm9vdGVyPyA9IGZhbHNlO1xuICAvKiogw6jCr8K3w6bCscKCw6TCvcKTw6nChcKNw6fCvcKuICovXG4gIHJlcT86IFNUUmVxID0ge1xuICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgYWxsSW5Cb2R5OiBmYWxzZSxcbiAgICByZU5hbWU6IHsgcGk6ICdwaScsIHBzOiAncHMnIH0sXG4gIH07XG4gIC8qKiDDqMK/wpTDpcKbwp7DpMK9wpPDqcKFwo3Dp8K9wq4gKi9cbiAgcmVzPzogU1RSZXMgPSB7XG4gICAgcmVOYW1lOiB7IGxpc3Q6IFsnbGlzdCddLCB0b3RhbDogWyd0b3RhbCddIH0sXG4gIH07XG4gIC8qKiDDqMK/wpTDpcKbwp7DpMK9wpPDqcKFwo3Dp8K9wq4gKi9cbiAgcGFnZT86IFNUUGFnZSA9IHtcbiAgICBmcm9udDogdHJ1ZSxcbiAgICB6ZXJvSW5kZXhlZDogZmFsc2UsXG4gICAgcGxhY2VtZW50OiAncmlnaHQnLFxuICAgIHNob3c6IHRydWUsXG4gICAgc2hvd1NpemU6IGZhbHNlLFxuICAgIHBhZ2VTaXplczogWzEwLCAyMCwgMzAsIDQwLCA1MF0sXG4gICAgc2hvd1F1aWNrSnVtcGVyOiBmYWxzZSxcbiAgICB0b3RhbDogdHJ1ZSxcbiAgICBpbmRleFJlc2V0OiB0cnVlLFxuICAgIHRvVG9wOiB0cnVlLFxuICAgIHRvVG9wT2Zmc2V0OiAxMDAsXG4gIH07XG4gIC8qKlxuICAgKiDDqcKHwo3DpcKRwr3DpcKQwo3DpsKOwpLDpcK6wo/DpcKAwrzDr8K8woxgY29sdW1uc2Agw6fCmsKEw6nCh8KNw6XCkcK9w6XCkMKNw6nCq8KYw6TCusKOw6XCscKew6bCgMKnXG4gICAqL1xuICBzb3J0UmVOYW1lPzogeyBhc2NlbmQ/OiBzdHJpbmc7IGRlc2NlbmQ/OiBzdHJpbmcgfTtcbiAgLyoqXG4gICAqIMOmwpjCr8OlwpDCpsOlwqTCmsOmwo7CksOlwrrCj8OvwrzCjMOlwr3CkyBgc29ydGAgw6XCpMKaw6TCuMKqw6fCm8K4w6XCkMKMw6XCgMK8w6bCl8K2w6jCh8Kqw6XCisKow6XCkMKIw6XCucK2w6/CvMKMw6XCu8K6w6jCrsKuw6XCkMKOw6fCq8Kvw6bClMKvw6bCjMKBw6bCl8K2w6TCvcK/w6fClMKoXG4gICAqL1xuICBtdWx0aVNvcnQ/OiBib29sZWFuIHwgU1RNdWx0aVNvcnQgPSBmYWxzZTtcbiAgLyoqXG4gICAqIMOmwozCicOpwpLCrsOmwqjCocOmwoDCgcOmwqHChsOpwoXCjcOnwr3CrlxuICAgKi9cbiAgbW9kYWw/OiBTVENvbHVtbkJ1dHRvbk1vZGFsQ29uZmlnID0ge1xuICAgIHBhcmFtc05hbWU6ICdyZWNvcmQnLFxuICAgIHNpemU6ICdsZycsXG4gICAgZXhhY3Q6IHRydWUsXG4gIH07XG4gIC8qKlxuICAgKiDDpsKMwonDqcKSwq7DpsKKwr3DpcKxwonDqcKFwo3Dp8K9wq5cbiAgICovXG4gIGRyYXdlcj86IFNUQ29sdW1uQnV0dG9uRHJhd2VyQ29uZmlnID0ge1xuICAgIHBhcmFtc05hbWU6ICdyZWNvcmQnLFxuICAgIHNpemU6ICdtZCcsXG4gICAgZm9vdGVyOiB0cnVlLFxuICAgIGZvb3RlckhlaWdodDogNTUsXG4gIH07XG4gIC8qKlxuICAgKiDDpsKwwpTDpsKzwqHDp8Khwq7DqMKuwqTDpsKhwobDpcKGwoXDpcKuwrlcbiAgICovXG4gIHBvcFRpdGxlPyA9ICfDp8Khwq7DqMKuwqTDpcKIwqDDqcKZwqTDpcKQwpfDr8K8wp8nO1xuICAvKipcbiAgICogw6jCocKMw6XCjcKVw6XCh8K7w6XCpMKaw6XCsMKRw6bCl8K2w6nClcK/w6TCucKLw6fCscK7w6TCuMK6w6XCj8KMw6XCh8K7w6/CvMKIw6XCjcKVw6TCvcKNw6/CvMKaw6bCr8Krw6fCp8KSw6/CvMKJw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYDIwMGBcbiAgICovXG4gIHJvd0NsaWNrVGltZT8gPSAyMDA7XG4gIC8qKlxuICAgKiDDqMK/wofDpsK7wqTDpsKMwonDqcKSwq7Dp8Khwq7DqMKuwqTDpsKWwofDpsKcwqzDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgw6fCocKuw6jCrsKkYFxuICAgKi9cbiAgZmlsdGVyQ29uZmlybVRleHQ/ID0gJ8OnwqHCrsOowq7CpCc7XG4gIC8qKlxuICAgKiDDqMK/wofDpsK7wqTDpsKMwonDqcKSwq7DqcKHwo3Dp8K9wq7DpsKWwofDpsKcwqzDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgw6nCh8KNw6fCvcKuYFxuICAgKi9cbiAgZmlsdGVyQ2xlYXJUZXh0PyA9ICfDqcKHwo3Dp8K9wq4nO1xuICAvKipcbiAgICogw6bCjMKJw6nCksKuw6XCm8K+w6bCoMKHXG4gICAqL1xuICBidG5JY29uPzogU1RJY29uID0ge1xuICAgIHR5cGU6ICcnLFxuICAgIHRoZW1lOiAnb3V0bGluZScsXG4gICAgc3BpbjogZmFsc2UsXG4gIH07XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCwgSW5qZWN0LCBIb3N0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBQ0xTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL2FjbCc7XG5pbXBvcnQgeyBBTEFJTl9JMThOX1RPS0VOLCBBbGFpbkkxOE5TZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IGRlZXBDb3B5IH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5pbXBvcnQge1xuICBTVENvbHVtbixcbiAgU1RDb2x1bW5CdXR0b24sXG4gIFNUQ29sdW1uU29ydCxcbiAgU1RDb2x1bW5GaWx0ZXIsXG59IGZyb20gJy4vdGFibGUuaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBTVFJvd1NvdXJjZSB9IGZyb20gJy4vdGFibGUtcm93LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBTVENvbmZpZyB9IGZyb20gJy4vdGFibGUuY29uZmlnJztcblxuZXhwb3J0IGludGVyZmFjZSBTVFNvcnRNYXAgZXh0ZW5kcyBTVENvbHVtblNvcnQge1xuICAvKiogw6bCmMKvw6XCkMKmw6XCkMKvw6fClMKow6bCjsKSw6XCusKPICovXG4gIGVuYWJsZWQ/OiBib29sZWFuO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU1RDb2x1bW5Tb3VyY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBASG9zdCgpIHByaXZhdGUgcm93U291cmNlOiBTVFJvd1NvdXJjZSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGFjbDogQUNMU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoQUxBSU5fSTE4Tl9UT0tFTilcbiAgICBwcml2YXRlIGkxOG5TcnY6IEFsYWluSTE4TlNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjb2c6IFNUQ29uZmlnLFxuICApIHt9XG5cbiAgcHJpdmF0ZSBidG5Db2VyY2UobGlzdDogU1RDb2x1bW5CdXR0b25bXSk6IFNUQ29sdW1uQnV0dG9uW10ge1xuICAgIGlmICghbGlzdCkgcmV0dXJuIFtdO1xuICAgIGNvbnN0IHJldDogU1RDb2x1bW5CdXR0b25bXSA9IFtdO1xuICAgIGNvbnN0IHsgbW9kYWwsIGRyYXdlciwgcG9wVGl0bGUsIGJ0bkljb24gfSA9IHRoaXMuY29nO1xuXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGxpc3QpIHtcbiAgICAgIGlmICh0aGlzLmFjbCAmJiBpdGVtLmFjbCAmJiAhdGhpcy5hY2wuY2FuKGl0ZW0uYWNsKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ21vZGFsJyB8fCBpdGVtLnR5cGUgPT09ICdzdGF0aWMnKSB7XG4gICAgICAgIC8vIGNvbXBhdGlibGVcbiAgICAgICAgaWYgKGl0ZW0uY29tcG9uZW50ICE9IG51bGwpIHtcbiAgICAgICAgICBpdGVtLm1vZGFsID0ge1xuICAgICAgICAgICAgY29tcG9uZW50OiBpdGVtLmNvbXBvbmVudCxcbiAgICAgICAgICAgIHBhcmFtczogaXRlbS5wYXJhbXMsXG4gICAgICAgICAgICBwYXJhbXNOYW1lOiBpdGVtLnBhcmFtTmFtZSB8fCBtb2RhbC5wYXJhbXNOYW1lLFxuICAgICAgICAgICAgc2l6ZTogaXRlbS5zaXplIHx8IG1vZGFsLnNpemUsXG4gICAgICAgICAgICBtb2RhbE9wdGlvbnM6IGl0ZW0ubW9kYWxPcHRpb25zIHx8IG1vZGFsLm1vZGFsT3B0aW9ucyxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChpdGVtLm1vZGFsID09IG51bGwgfHwgaXRlbS5tb2RhbC5jb21wb25lbnQgPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihgW3N0XSBTaG91bGQgc3BlY2lmeSBtb2RhbCBwYXJhbWV0ZXJgKTtcbiAgICAgICAgICBpdGVtLnR5cGUgPSAnbm9uZSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbS5tb2RhbCA9IE9iamVjdC5hc3NpZ24oe30sIG1vZGFsLCBpdGVtLm1vZGFsKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbS50eXBlID09PSAnZHJhd2VyJykge1xuICAgICAgICBpZiAoaXRlbS5kcmF3ZXIgPT0gbnVsbCB8fCBpdGVtLmRyYXdlci5jb21wb25lbnQgPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihgW3N0XSBTaG91bGQgc3BlY2lmeSBkcmF3ZXIgcGFyYW1ldGVyYCk7XG4gICAgICAgICAgaXRlbS50eXBlID0gJ25vbmUnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW0uZHJhd2VyID0gT2JqZWN0LmFzc2lnbih7fSwgZHJhd2VyLCBpdGVtLmRyYXdlcik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ2RlbCcgJiYgdHlwZW9mIGl0ZW0ucG9wID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBpdGVtLnBvcCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtLnBvcCA9PT0gdHJ1ZSkge1xuICAgICAgICBpdGVtLnBvcFRpdGxlID0gaXRlbS5wb3BUaXRsZSB8fCBwb3BUaXRsZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGl0ZW0ucG9wID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtLmljb24pIHtcbiAgICAgICAgaXRlbS5pY29uID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICB7fSxcbiAgICAgICAgICBidG5JY29uLFxuICAgICAgICAgIHR5cGVvZiBpdGVtLmljb24gPT09ICdzdHJpbmcnID8geyB0eXBlOiBpdGVtLmljb24gfSA6IGl0ZW0uaWNvbixcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaXRlbS5jaGlsZHJlbiA9IGl0ZW0uY2hpbGRyZW4gJiYgaXRlbS5jaGlsZHJlbi5sZW5ndGggPiAwID8gdGhpcy5idG5Db2VyY2UoaXRlbS5jaGlsZHJlbikgOiBbXTtcblxuICAgICAgLy8gaTE4blxuICAgICAgaWYgKGl0ZW0uaTE4biAmJiB0aGlzLmkxOG5TcnYpIHtcbiAgICAgICAgaXRlbS50ZXh0ID0gdGhpcy5pMThuU3J2LmZhbnlpKGl0ZW0uaTE4bik7XG4gICAgICB9XG5cbiAgICAgIHJldC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgICB0aGlzLmJ0bkNvZXJjZUlmKHJldCk7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIHByaXZhdGUgYnRuQ29lcmNlSWYobGlzdDogU1RDb2x1bW5CdXR0b25bXSkge1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiBsaXN0KSB7XG4gICAgICBpZiAoIWl0ZW0uaWlmKSBpdGVtLmlpZiA9ICgpID0+IHRydWU7XG4gICAgICBpZiAoIWl0ZW0uY2hpbGRyZW4pIHtcbiAgICAgICAgaXRlbS5jaGlsZHJlbiA9IFtdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5idG5Db2VyY2VJZihpdGVtLmNoaWxkcmVuKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGZpeGVkQ29lcmNlKGxpc3Q6IFNUQ29sdW1uW10pIHtcbiAgICBjb25zdCBjb3VudFJlZHVjZSA9IChhOiBudW1iZXIsIGI6IFNUQ29sdW1uKSA9PlxuICAgICAgYSArICtiLndpZHRoLnRvU3RyaW5nKCkucmVwbGFjZSgncHgnLCAnJyk7XG4gICAgLy8gbGVmdCB3aWR0aFxuICAgIGxpc3RcbiAgICAgIC5maWx0ZXIodyA9PiB3LmZpeGVkICYmIHcuZml4ZWQgPT09ICdsZWZ0JyAmJiB3LndpZHRoKVxuICAgICAgLmZvckVhY2goXG4gICAgICAgIChpdGVtLCBpZHgpID0+XG4gICAgICAgICAgKGl0ZW0uX2xlZnQgPSBsaXN0LnNsaWNlKDAsIGlkeCkucmVkdWNlKGNvdW50UmVkdWNlLCAwKSArICdweCcpLFxuICAgICAgKTtcbiAgICAvLyByaWdodCB3aWR0aFxuICAgIGxpc3RcbiAgICAgIC5maWx0ZXIodyA9PiB3LmZpeGVkICYmIHcuZml4ZWQgPT09ICdyaWdodCcgJiYgdy53aWR0aClcbiAgICAgIC5yZXZlcnNlKClcbiAgICAgIC5mb3JFYWNoKFxuICAgICAgICAoaXRlbSwgaWR4KSA9PlxuICAgICAgICAgIChpdGVtLl9yaWdodCA9XG4gICAgICAgICAgICAoaWR4ID4gMCA/IGxpc3Quc2xpY2UoLWlkeCkucmVkdWNlKGNvdW50UmVkdWNlLCAwKSA6IDApICsgJ3B4JyksXG4gICAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBzb3J0Q29lcmNlKGl0ZW06IFNUQ29sdW1uKTogU1RTb3J0TWFwIHtcbiAgICAvLyBjb21wYXRpYmxlXG4gICAgaWYgKGl0ZW0uc29ydGVyICYmIHR5cGVvZiBpdGVtLnNvcnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgZGVmYXVsdDogaXRlbS5zb3J0IGFzIGFueSxcbiAgICAgICAgY29tcGFyZTogaXRlbS5zb3J0ZXIsXG4gICAgICAgIGtleTogaXRlbS5zb3J0S2V5IHx8IGl0ZW0uaW5kZXhLZXksXG4gICAgICAgIHJlTmFtZTogaXRlbS5zb3J0UmVOYW1lLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGl0ZW0uc29ydCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiB7IGVuYWJsZWQ6IGZhbHNlIH07XG4gICAgfVxuXG4gICAgbGV0IHJlczogU1RTb3J0TWFwID0ge307XG5cbiAgICBpZiAodHlwZW9mIGl0ZW0uc29ydCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJlcy5rZXkgPSBpdGVtLnNvcnQ7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgaXRlbS5zb3J0ICE9PSAnYm9vbGVhbicpIHtcbiAgICAgIHJlcyA9IGl0ZW0uc29ydDtcbiAgICB9XG5cbiAgICBpZiAoIXJlcy5rZXkpIHtcbiAgICAgIHJlcy5rZXkgPSBpdGVtLmluZGV4S2V5O1xuICAgIH1cblxuICAgIHJlcy5lbmFibGVkID0gdHJ1ZTtcblxuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBwcml2YXRlIGZpbHRlckNvZXJjZShpdGVtOiBTVENvbHVtbik6IFNUQ29sdW1uRmlsdGVyIHtcbiAgICBsZXQgcmVzOiBTVENvbHVtbkZpbHRlciA9IG51bGw7XG4gICAgLy8gY29tcGF0aWJsZVxuICAgIGlmIChpdGVtLmZpbHRlcnMgJiYgaXRlbS5maWx0ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJlcyA9IHtcbiAgICAgICAgY29uZmlybVRleHQ6IGl0ZW0uZmlsdGVyQ29uZmlybVRleHQsXG4gICAgICAgIGNsZWFyVGV4dDogaXRlbS5maWx0ZXJDbGVhclRleHQsXG4gICAgICAgIGRlZmF1bHQ6IGl0ZW0uZmlsdGVyZWQsXG4gICAgICAgIGZuOiBpdGVtLmZpbHRlciBhcyBhbnksXG4gICAgICAgIGljb246IGl0ZW0uZmlsdGVySWNvbixcbiAgICAgICAga2V5OiBpdGVtLmZpbHRlcktleSB8fCBpdGVtLmluZGV4S2V5LFxuICAgICAgICBtZW51czogaXRlbS5maWx0ZXJzLFxuICAgICAgICBtdWx0aXBsZTogaXRlbS5maWx0ZXJNdWx0aXBsZSxcbiAgICAgICAgcmVOYW1lOiBpdGVtLmZpbHRlclJlTmFtZSxcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcyA9IGl0ZW0uZmlsdGVyO1xuICAgIH1cblxuICAgIGlmIChyZXMgPT0gbnVsbCB8fCByZXMubWVudXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHJlcy5tdWx0aXBsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJlcy5tdWx0aXBsZSA9IHRydWU7XG4gICAgfVxuICAgIGlmICghcmVzLmNvbmZpcm1UZXh0KSB7XG4gICAgICByZXMuY29uZmlybVRleHQgPSB0aGlzLmNvZy5maWx0ZXJDb25maXJtVGV4dDtcbiAgICB9XG4gICAgaWYgKCFyZXMuY2xlYXJUZXh0KSB7XG4gICAgICByZXMuY2xlYXJUZXh0ID0gdGhpcy5jb2cuZmlsdGVyQ2xlYXJUZXh0O1xuICAgIH1cbiAgICBpZiAoIXJlcy5pY29uKSB7XG4gICAgICByZXMuaWNvbiA9IGBmaWx0ZXJgO1xuICAgIH1cbiAgICBpZiAoIXJlcy5rZXkpIHtcbiAgICAgIHJlcy5rZXkgPSBpdGVtLmluZGV4S2V5O1xuICAgIH1cblxuICAgIHJlcy5kZWZhdWx0ID0gcmVzLm1lbnVzLmZpbmRJbmRleCh3ID0+IHcuY2hlY2tlZCkgIT09IC0xO1xuXG4gICAgaWYgKHRoaXMuYWNsKSB7XG4gICAgICByZXMubWVudXMgPSByZXMubWVudXMuZmlsdGVyKHcgPT4gdGhpcy5hY2wuY2FuKHcuYWNsKSk7XG4gICAgfVxuXG4gICAgaWYgKHJlcy5tZW51cy5sZW5ndGggPD0gMCkge1xuICAgICAgcmVzID0gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgcHJpdmF0ZSByZXN0b3JlUmVuZGVyKGl0ZW06IFNUQ29sdW1uKSB7XG4gICAgaWYgKGl0ZW0ucmVuZGVyVGl0bGUpIHtcbiAgICAgIGl0ZW0uX19yZW5kZXJUaXRsZSA9IHRoaXMucm93U291cmNlLmdldFRpdGxlKGl0ZW0ucmVuZGVyVGl0bGUpO1xuICAgIH1cbiAgICBpZiAoaXRlbS5yZW5kZXIpIHtcbiAgICAgIGl0ZW0uX19yZW5kZXIgPSB0aGlzLnJvd1NvdXJjZS5nZXRSb3coaXRlbS5yZW5kZXIpO1xuICAgIH1cbiAgfVxuXG4gIHByb2Nlc3MobGlzdDogU1RDb2x1bW5bXSk6IFNUQ29sdW1uW10ge1xuICAgIGlmICghbGlzdCB8fCBsaXN0Lmxlbmd0aCA9PT0gMClcbiAgICAgIHRocm93IG5ldyBFcnJvcihgW3N0XTogdGhlIGNvbHVtbnMgcHJvcGVydHkgbXVzZSBiZSBkZWZpbmUhYCk7XG5cbiAgICBsZXQgY2hlY2tib3hDb3VudCA9IDA7XG4gICAgbGV0IHJhZGlvQ291bnQgPSAwO1xuICAgIGNvbnN0IGNvbHVtbnM6IFNUQ29sdW1uW10gPSBbXTtcbiAgICBjb25zdCBjb3B5Q29sdW1lbnMgPSBkZWVwQ29weShsaXN0KSBhcyBTVENvbHVtbltdO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiBjb3B5Q29sdW1lbnMpIHtcbiAgICAgIGlmICh0aGlzLmFjbCAmJiBpdGVtLmFjbCAmJiAhdGhpcy5hY2wuY2FuKGl0ZW0uYWNsKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIC8vIGluZGV4XG4gICAgICBpZiAoaXRlbS5pbmRleCkge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoaXRlbS5pbmRleCkpIHtcbiAgICAgICAgICBpdGVtLmluZGV4ID0gaXRlbS5pbmRleC5zcGxpdCgnLicpO1xuICAgICAgICB9XG4gICAgICAgIGl0ZW0uaW5kZXhLZXkgPSBpdGVtLmluZGV4LmpvaW4oJy4nKTtcbiAgICAgIH1cbiAgICAgIC8vIHRpdGxlXG4gICAgICBpZiAoaXRlbS5pMThuICYmIHRoaXMuaTE4blNydikge1xuICAgICAgICBpdGVtLnRpdGxlID0gdGhpcy5pMThuU3J2LmZhbnlpKGl0ZW0uaTE4bik7XG4gICAgICB9XG4gICAgICAvLyBjaGVja2JveFxuICAgICAgaWYgKGl0ZW0uc2VsZWN0aW9ucyA9PSBudWxsKSB7XG4gICAgICAgIGl0ZW0uc2VsZWN0aW9ucyA9IFtdO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICArK2NoZWNrYm94Q291bnQ7XG4gICAgICAgIGlmICghaXRlbS53aWR0aCkge1xuICAgICAgICAgIGl0ZW0ud2lkdGggPSBgJHtpdGVtLnNlbGVjdGlvbnMubGVuZ3RoID4gMCA/IDYyIDogNTB9cHhgO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5hY2wpIHtcbiAgICAgICAgaXRlbS5zZWxlY3Rpb25zID0gaXRlbS5zZWxlY3Rpb25zLmZpbHRlcih3ID0+IHRoaXMuYWNsLmNhbih3LmFjbCkpO1xuICAgICAgfVxuICAgICAgLy8gcmFkaW9cbiAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgICAgKytyYWRpb0NvdW50O1xuICAgICAgICBpdGVtLnNlbGVjdGlvbnMgPSBbXTtcbiAgICAgICAgaWYgKCFpdGVtLndpZHRoKSB7XG4gICAgICAgICAgaXRlbS53aWR0aCA9ICc1MHB4JztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gdHlwZXNcbiAgICAgIGlmIChpdGVtLnR5cGUgPT09ICd5bicpIHtcbiAgICAgICAgaXRlbS55biA9IE9iamVjdC5hc3NpZ24oeyB0cnV0aDogdHJ1ZSB9LCBpdGVtLnluKTtcbiAgICAgICAgLy8gY29tcGF0aWJsZVxuICAgICAgICBpZiAoaXRlbS55blRydXRoICE9IG51bGwpIGl0ZW0ueW4udHJ1dGggPSBpdGVtLnluVHJ1dGg7XG4gICAgICAgIGlmIChpdGVtLnluWWVzICE9IG51bGwpIGl0ZW0ueW4ueWVzID0gaXRlbS55blllcztcbiAgICAgICAgaWYgKGl0ZW0ueW5ObyAhPSBudWxsKSBpdGVtLnluLm5vID0gaXRlbS55bk5vO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICAoaXRlbS50eXBlID09PSAnbGluaycgJiYgdHlwZW9mIGl0ZW0uY2xpY2sgIT09ICdmdW5jdGlvbicpIHx8XG4gICAgICAgIChpdGVtLnR5cGUgPT09ICdiYWRnZScgJiYgaXRlbS5iYWRnZSA9PSBudWxsKSB8fFxuICAgICAgICAoaXRlbS50eXBlID09PSAndGFnJyAmJiBpdGVtLnRhZyA9PSBudWxsKVxuICAgICAgKSB7XG4gICAgICAgIChpdGVtIGFzIGFueSkudHlwZSA9ICcnO1xuICAgICAgfVxuICAgICAgLy8gY2xhc3NOYW1lXG4gICAgICBpZiAoIWl0ZW0uY2xhc3NOYW1lKSB7XG4gICAgICAgIGl0ZW0uY2xhc3NOYW1lID0ge1xuICAgICAgICAgIG51bWJlcjogJ3RleHQtcmlnaHQnLFxuICAgICAgICAgIGN1cnJlbmN5OiAndGV4dC1yaWdodCcsXG4gICAgICAgICAgZGF0ZTogJ3RleHQtY2VudGVyJyxcbiAgICAgICAgfVtpdGVtLnR5cGVdO1xuICAgICAgfVxuXG4gICAgICAvLyBzb3J0ZXJcbiAgICAgIGl0ZW0uX3NvcnQgPSB0aGlzLnNvcnRDb2VyY2UoaXRlbSk7XG4gICAgICAvLyBmaWx0ZXJcbiAgICAgIGl0ZW0uZmlsdGVyID0gdGhpcy5maWx0ZXJDb2VyY2UoaXRlbSk7XG4gICAgICAvLyBidXR0b25zXG4gICAgICBpdGVtLmJ1dHRvbnMgPSB0aGlzLmJ0bkNvZXJjZShpdGVtLmJ1dHRvbnMpO1xuICAgICAgLy8gcmVzdG9yZSBjdXN0b20gcm93XG4gICAgICB0aGlzLnJlc3RvcmVSZW5kZXIoaXRlbSk7XG5cbiAgICAgIGNvbHVtbnMucHVzaChpdGVtKTtcbiAgICB9XG4gICAgaWYgKGNoZWNrYm94Q291bnQgPiAxKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFtzdF06IGp1c3Qgb25seSBvbmUgY29sdW1uIGNoZWNrYm94YCk7XG4gICAgfVxuICAgIGlmIChyYWRpb0NvdW50ID4gMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBbc3RdOiBqdXN0IG9ubHkgb25lIGNvbHVtbiByYWRpb2ApO1xuICAgIH1cblxuICAgIHRoaXMuZml4ZWRDb2VyY2UoY29sdW1ucyk7XG5cbiAgICByZXR1cm4gY29sdW1ucztcbiAgfVxuXG4gIHJlc3RvcmVBbGxSZW5kZXIoY29sdW1uczogU1RDb2x1bW5bXSkge1xuICAgIGNvbHVtbnMuZm9yRWFjaChpID0+IHRoaXMucmVzdG9yZVJlbmRlcihpKSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUsIEhvc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERlY2ltYWxQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgZGVlcEdldCB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IENOQ3VycmVuY3lQaXBlLCBEYXRlUGlwZSwgWU5QaXBlLCBfSHR0cENsaWVudCB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5cbmltcG9ydCB7XG4gIFNURGF0YSxcbiAgU1RQYWdlLFxuICBTVFJlcSxcbiAgU1RSZXMsXG4gIFNUQ29sdW1uLFxuICBTVE11bHRpU29ydCxcbn0gZnJvbSAnLi90YWJsZS5pbnRlcmZhY2VzJztcbmltcG9ydCB7IFNUU29ydE1hcCB9IGZyb20gJy4vdGFibGUtY29sdW1uLXNvdXJjZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1REYXRhU291cmNlT3B0aW9ucyB7XG4gIHBpPzogbnVtYmVyO1xuICBwcz86IG51bWJlcjtcbiAgZGF0YT86IHN0cmluZyB8IFNURGF0YVtdIHwgT2JzZXJ2YWJsZTxTVERhdGFbXT47XG4gIHRvdGFsPzogbnVtYmVyO1xuICByZXE/OiBTVFJlcTtcbiAgcmVzPzogU1RSZXM7XG4gIHBhZ2U/OiBTVFBhZ2U7XG4gIGNvbHVtbnM/OiBTVENvbHVtbltdO1xuICBtdWx0aVNvcnQ/OiBTVE11bHRpU29ydDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVERhdGFTb3VyY2VSZXN1bHQge1xuICAvKiogw6bCmMKvw6XCkMKmw6nCnMKAw6jCpsKBw6bCmMK+w6fCpMK6w6XCiMKGw6nCocK1w6XCmcKoICovXG4gIHBhZ2VTaG93PzogYm9vbGVhbjtcbiAgLyoqIMOmwpbCsCBgcGlgw6/CvMKMw6jCi8Klw6jCv8KUw6XCm8KeIGB1bmRlZmluZWRgIMOowqHCqMOnwqTCusOnwpTCqMOmwojCt8Olwo/Cl8Omwo7CpyAqL1xuICBwaT86IG51bWJlcjtcbiAgLyoqIMOmwpbCsCBgdG90YWxgw6/CvMKMw6jCi8Klw6jCv8KUw6XCm8KeIGB1bmRlZmluZWRgIMOowqHCqMOnwqTCusOnwpTCqMOmwojCt8Olwo/Cl8Omwo7CpyAqL1xuICB0b3RhbD86IG51bWJlcjtcbiAgLyoqIMOmwpXCsMOmwo3CriAqL1xuICBsaXN0PzogU1REYXRhW107XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTVERhdGFTb3VyY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6IF9IdHRwQ2xpZW50LFxuICAgIEBIb3N0KCkgcHJpdmF0ZSBjdXJyZW50eTogQ05DdXJyZW5jeVBpcGUsXG4gICAgQEhvc3QoKSBwcml2YXRlIGRhdGU6IERhdGVQaXBlLFxuICAgIEBIb3N0KCkgcHJpdmF0ZSB5bjogWU5QaXBlLFxuICAgIEBIb3N0KCkgcHJpdmF0ZSBudW1iZXI6IERlY2ltYWxQaXBlLFxuICAgIHByaXZhdGUgZG9tOiBEb21TYW5pdGl6ZXJcbiAgKSB7fVxuXG4gIHByb2Nlc3Mob3B0aW9uczogU1REYXRhU291cmNlT3B0aW9ucyk6IFByb21pc2U8U1REYXRhU291cmNlUmVzdWx0PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlUHJvbWlzZSwgcmVqZWN0UHJvbWlzZSkgPT4ge1xuICAgICAgbGV0IGRhdGEkOiBPYnNlcnZhYmxlPFNURGF0YVtdPjtcbiAgICAgIGxldCBpc1JlbW90ZSA9IGZhbHNlO1xuICAgICAgY29uc3QgeyBkYXRhLCByZXMsIHRvdGFsLCBwYWdlLCBwaSwgcHMsIGNvbHVtbnMgfSA9IG9wdGlvbnM7XG4gICAgICBsZXQgcmV0VG90YWw6IG51bWJlcjtcbiAgICAgIGxldCByZXRMaXN0OiBTVERhdGFbXTtcbiAgICAgIGxldCByZXRQaTogbnVtYmVyO1xuXG4gICAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlzUmVtb3RlID0gdHJ1ZTtcbiAgICAgICAgZGF0YSQgPSB0aGlzLmdldEJ5SHR0cChkYXRhLCBvcHRpb25zKS5waXBlKFxuICAgICAgICAgIG1hcCgocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgICAgICAgIC8vIGxpc3RcbiAgICAgICAgICAgIGxldCByZXQgPSBkZWVwR2V0KHJlc3VsdCwgcmVzLnJlTmFtZS5saXN0IGFzIHN0cmluZ1tdLCBbXSk7XG4gICAgICAgICAgICBpZiAocmV0ID09IG51bGwgfHwgIUFycmF5LmlzQXJyYXkocmV0KSkge1xuICAgICAgICAgICAgICByZXQgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHRvdGFsXG4gICAgICAgICAgICBjb25zdCByZXN1bHRUb3RhbCA9XG4gICAgICAgICAgICAgIHJlcy5yZU5hbWUudG90YWwgJiZcbiAgICAgICAgICAgICAgZGVlcEdldChyZXN1bHQsIHJlcy5yZU5hbWUudG90YWwgYXMgc3RyaW5nW10sIG51bGwpO1xuICAgICAgICAgICAgcmV0VG90YWwgPSByZXN1bHRUb3RhbCA9PSBudWxsID8gdG90YWwgfHwgMCA6ICtyZXN1bHRUb3RhbDtcbiAgICAgICAgICAgIHJldHVybiA8U1REYXRhW10+cmV0O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyID0+IHtcbiAgICAgICAgICAgIHJlamVjdFByb21pc2UoZXJyKTtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgICBkYXRhJCA9IG9mKGRhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gYSBjb2xkIG9ic2VydmFibGVcbiAgICAgICAgZGF0YSQgPSBkYXRhO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzUmVtb3RlKSB7XG4gICAgICAgIGRhdGEkID0gZGF0YSQucGlwZShcbiAgICAgICAgICAvLyBzb3J0XG4gICAgICAgICAgbWFwKChyZXN1bHQ6IFNURGF0YVtdKSA9PiB7XG4gICAgICAgICAgICBsZXQgY29weVJlc3VsdCA9IHJlc3VsdC5zbGljZSgwKTtcbiAgICAgICAgICAgIGNvbnN0IHNvcnRlckZuID0gdGhpcy5nZXRTb3J0ZXJGbihjb2x1bW5zKTtcbiAgICAgICAgICAgIGlmIChzb3J0ZXJGbikge1xuICAgICAgICAgICAgICBjb3B5UmVzdWx0ID0gY29weVJlc3VsdC5zb3J0KHNvcnRlckZuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjb3B5UmVzdWx0O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIC8vIGZpbHRlclxuICAgICAgICAgIG1hcCgocmVzdWx0OiBTVERhdGFbXSkgPT4ge1xuICAgICAgICAgICAgY29sdW1ucy5maWx0ZXIodyA9PiB3LmZpbHRlcikuZm9yRWFjaChjID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgdmFsdWVzID0gYy5maWx0ZXIubWVudXMuZmlsdGVyKHcgPT4gdy5jaGVja2VkKTtcbiAgICAgICAgICAgICAgaWYgKHZhbHVlcy5sZW5ndGggPT09IDApIHJldHVybjtcbiAgICAgICAgICAgICAgY29uc3Qgb25GaWx0ZXIgPSBjLmZpbHRlci5mbjtcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvbkZpbHRlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgW3N0XSBNdXNlIHByb3ZpZGUgdGhlIGZuIGZ1bmN0aW9uIGluIGZpbHRlcmApO1xuICAgICAgICAgICAgICAgIHJldHVybiA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmZpbHRlcihyZWNvcmQgPT5cbiAgICAgICAgICAgICAgICB2YWx1ZXMuc29tZSh2ID0+IG9uRmlsdGVyKHYsIHJlY29yZCkpLFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIC8vIHBhZ2luZ1xuICAgICAgICAgIG1hcCgocmVzdWx0OiBTVERhdGFbXSkgPT4ge1xuICAgICAgICAgICAgaWYgKHBhZ2UuZnJvbnQpIHtcbiAgICAgICAgICAgICAgY29uc3QgbWF4UGFnZUluZGV4ID0gTWF0aC5jZWlsKHJlc3VsdC5sZW5ndGggLyBwcyk7XG4gICAgICAgICAgICAgIHJldFBpID0gTWF0aC5tYXgoMSwgcGkgPiBtYXhQYWdlSW5kZXggPyBtYXhQYWdlSW5kZXggOiBwaSk7XG4gICAgICAgICAgICAgIHJldFRvdGFsID0gcmVzdWx0Lmxlbmd0aDtcbiAgICAgICAgICAgICAgaWYgKHBhZ2Uuc2hvdyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQuc2xpY2UoKHJldFBpIC0gMSkgKiBwcywgcmV0UGkgKiBwcyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgfSksXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIC8vIHByZS1wcm9jZXNzXG4gICAgICBpZiAodHlwZW9mIHJlcy5wcm9jZXNzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGRhdGEkID0gZGF0YSQucGlwZShtYXAocmVzdWx0ID0+IHJlcy5wcm9jZXNzKHJlc3VsdCkpKTtcbiAgICAgIH1cbiAgICAgIC8vIGRhdGEgYWNjZWxlcmF0b3JcbiAgICAgIGRhdGEkID0gZGF0YSQucGlwZShcbiAgICAgICAgbWFwKHJlc3VsdCA9PiB7XG4gICAgICAgICAgZm9yIChjb25zdCBpIG9mIHJlc3VsdCkge1xuICAgICAgICAgICAgaS5fdmFsdWVzID0gY29sdW1ucy5tYXAoYyA9PiB0aGlzLmdldChpLCBjKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0pLFxuICAgICAgKTtcblxuICAgICAgZGF0YSQuZm9yRWFjaCgocmVzdWx0OiBTVERhdGFbXSkgPT4gKHJldExpc3QgPSByZXN1bHQpKS50aGVuKCgpID0+IHtcbiAgICAgICAgcmVzb2x2ZVByb21pc2Uoe1xuICAgICAgICAgIHBpOiByZXRQaSxcbiAgICAgICAgICB0b3RhbDogcmV0VG90YWwsXG4gICAgICAgICAgbGlzdDogcmV0TGlzdCxcbiAgICAgICAgICBwYWdlU2hvdzpcbiAgICAgICAgICAgIHR5cGVvZiBwYWdlLnNob3cgPT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAgID8gKHJldFRvdGFsIHx8IHRvdGFsKSA+IHBzXG4gICAgICAgICAgICAgIDogcGFnZS5zaG93LFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQoaXRlbTogYW55LCBjb2w6IFNUQ29sdW1uKSB7XG4gICAgaWYgKGNvbC5mb3JtYXQpIHtcbiAgICAgIGNvbnN0IGZvcm1hdFJlcyA9IGNvbC5mb3JtYXQoaXRlbSwgY29sKSBhcyBzdHJpbmc7XG4gICAgICBpZiAofmZvcm1hdFJlcy5pbmRleE9mKCc8JykpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZG9tLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKGZvcm1hdFJlcyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZm9ybWF0UmVzO1xuICAgIH1cblxuICAgIGNvbnN0IHZhbHVlID0gZGVlcEdldChpdGVtLCBjb2wuaW5kZXggYXMgc3RyaW5nW10sIGNvbC5kZWZhdWx0KTtcblxuICAgIGxldCByZXQgPSB2YWx1ZTtcbiAgICBzd2l0Y2ggKGNvbC50eXBlKSB7XG4gICAgICBjYXNlICdpbWcnOlxuICAgICAgICByZXQgPSB2YWx1ZSA/IGA8aW1nIHNyYz1cIiR7dmFsdWV9XCIgY2xhc3M9XCJpbWdcIj5gIDogJyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgcmV0ID0gdGhpcy5udW1iZXIudHJhbnNmb3JtKHZhbHVlLCBjb2wubnVtYmVyRGlnaXRzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjdXJyZW5jeSc6XG4gICAgICAgIHJldCA9IHRoaXMuY3VycmVudHkudHJhbnNmb3JtKHZhbHVlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdkYXRlJzpcbiAgICAgICAgcmV0ID0gdGhpcy5kYXRlLnRyYW5zZm9ybSh2YWx1ZSwgY29sLmRhdGVGb3JtYXQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3luJzpcbiAgICAgICAgcmV0ID0gdGhpcy55bi50cmFuc2Zvcm0odmFsdWUgPT09IGNvbC55bi50cnV0aCwgY29sLnluLnllcywgY29sLnluLm5vKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBwcml2YXRlIGdldEJ5SHR0cChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBvcHRpb25zOiBTVERhdGFTb3VyY2VPcHRpb25zLFxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IHsgcmVxLCBwYWdlLCBwaSwgcHMsIG11bHRpU29ydCwgY29sdW1ucyB9ID0gb3B0aW9ucztcbiAgICBjb25zdCBtZXRob2QgPSAocmVxLm1ldGhvZCB8fCAnR0VUJykudG9VcHBlckNhc2UoKTtcbiAgICBjb25zdCBwYXJhbXM6IGFueSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7XG4gICAgICAgIFtyZXEucmVOYW1lLnBpXTogcGFnZS56ZXJvSW5kZXhlZCA/IHBpIC0gMSA6IHBpLFxuICAgICAgICBbcmVxLnJlTmFtZS5wc106IHBzLFxuICAgICAgfSxcbiAgICAgIHJlcS5wYXJhbXMsXG4gICAgICB0aGlzLmdldFJlcVNvcnRNYXAobXVsdGlTb3J0LCBjb2x1bW5zKSxcbiAgICAgIHRoaXMuZ2V0UmVxRmlsdGVyTWFwKGNvbHVtbnMpLFxuICAgICk7XG4gICAgbGV0IHJlcU9wdGlvbnM6IGFueSA9IHtcbiAgICAgIHBhcmFtcyxcbiAgICAgIGJvZHk6IHJlcS5ib2R5LFxuICAgICAgaGVhZGVyczogcmVxLmhlYWRlcnMsXG4gICAgfTtcbiAgICBpZiAobWV0aG9kID09PSAnUE9TVCcgJiYgcmVxLmFsbEluQm9keSA9PT0gdHJ1ZSkge1xuICAgICAgcmVxT3B0aW9ucyA9IHtcbiAgICAgICAgYm9keTogT2JqZWN0LmFzc2lnbih7fSwgcmVxLmJvZHksIHBhcmFtcyksXG4gICAgICAgIGhlYWRlcnM6IHJlcS5oZWFkZXJzLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5yZXF1ZXN0KG1ldGhvZCwgdXJsLCByZXFPcHRpb25zKTtcbiAgfVxuXG4gIC8vI3JlZ2lvbiBzb3J0XG5cbiAgcHJpdmF0ZSBnZXRWYWxpZFNvcnQoY29sdW1uczogU1RDb2x1bW5bXSk6IFNUU29ydE1hcFtdIHtcbiAgICByZXR1cm4gY29sdW1uc1xuICAgICAgLmZpbHRlcihpdGVtID0+IGl0ZW0uX3NvcnQgJiYgaXRlbS5fc29ydC5lbmFibGVkICYmIGl0ZW0uX3NvcnQuZGVmYXVsdClcbiAgICAgIC5tYXAoaXRlbSA9PiBpdGVtLl9zb3J0KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U29ydGVyRm4oY29sdW1uczogU1RDb2x1bW5bXSkge1xuICAgIGNvbnN0IHNvcnRMaXN0ID0gdGhpcy5nZXRWYWxpZFNvcnQoY29sdW1ucyk7XG4gICAgaWYgKHNvcnRMaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHNvcnRMaXN0WzBdLmNvbXBhcmUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnNvbGUud2FybihgW3N0XSBNdXNlIHByb3ZpZGUgdGhlIGNvbXBhcmUgZnVuY3Rpb24gaW4gc29ydGApO1xuICAgICAgcmV0dXJuIDtcbiAgICB9XG5cbiAgICByZXR1cm4gKGE6IGFueSwgYjogYW55KSA9PiB7XG4gICAgICBjb25zdCByZXN1bHQgPSBzb3J0TGlzdFswXS5jb21wYXJlKGEsIGIpO1xuICAgICAgaWYgKHJlc3VsdCAhPT0gMCkge1xuICAgICAgICByZXR1cm4gc29ydExpc3RbMF0uZGVmYXVsdCA9PT0gJ2Rlc2NlbmQnID8gLXJlc3VsdCA6IHJlc3VsdDtcbiAgICAgIH1cbiAgICAgIHJldHVybiAwO1xuICAgIH07XG4gIH1cblxuICBnZXRSZXFTb3J0TWFwKFxuICAgIG11bHRpU29ydDogU1RNdWx0aVNvcnQsXG4gICAgY29sdW1uczogU1RDb2x1bW5bXSxcbiAgKTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB7XG4gICAgbGV0IHJldDogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xuICAgIGNvbnN0IHNvcnRMaXN0ID0gdGhpcy5nZXRWYWxpZFNvcnQoY29sdW1ucyk7XG4gICAgaWYgKCFtdWx0aVNvcnQgJiYgc29ydExpc3QubGVuZ3RoID09PSAwKSByZXR1cm4gcmV0O1xuXG4gICAgaWYgKG11bHRpU29ydCkge1xuICAgICAgc29ydExpc3QuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgcmV0W2l0ZW0ua2V5XSA9IChpdGVtLnJlTmFtZSB8fCB7fSlbaXRlbS5kZWZhdWx0XSB8fCBpdGVtLmRlZmF1bHQ7XG4gICAgICB9KTtcbiAgICAgIC8vIMOlwpDCiMOlwrnCtsOlwqTChMOnwpDChlxuICAgICAgcmV0ID0ge1xuICAgICAgICBbbXVsdGlTb3J0LmtleV06IE9iamVjdC5rZXlzKHJldClcbiAgICAgICAgICAubWFwKGtleSA9PiBrZXkgKyBtdWx0aVNvcnQubmFtZVNlcGFyYXRvciArIHJldFtrZXldKVxuICAgICAgICAgIC5qb2luKG11bHRpU29ydC5zZXBhcmF0b3IpLFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWFwRGF0YSA9IHNvcnRMaXN0WzBdO1xuICAgICAgcmV0W21hcERhdGEua2V5XSA9XG4gICAgICAgIChzb3J0TGlzdFswXS5yZU5hbWUgfHwge30pW21hcERhdGEuZGVmYXVsdF0gfHwgbWFwRGF0YS5kZWZhdWx0O1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLy8jZW5kcmVnaW9uXG5cbiAgLy8jcmVnaW9uIGZpbHRlclxuXG4gIHByaXZhdGUgZ2V0UmVxRmlsdGVyTWFwKGNvbHVtbnM6IFNUQ29sdW1uW10pOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHtcbiAgICBsZXQgcmV0ID0ge307XG4gICAgY29sdW1ucy5maWx0ZXIodyA9PiB3LmZpbHRlciAmJiB3LmZpbHRlci5kZWZhdWx0ID09PSB0cnVlKS5mb3JFYWNoKGNvbCA9PiB7XG4gICAgICBjb25zdCB2YWx1ZXMgPSBjb2wuZmlsdGVyLm1lbnVzLmZpbHRlcihmID0+IGYuY2hlY2tlZCA9PT0gdHJ1ZSk7XG4gICAgICBsZXQgb2JqOiBPYmplY3QgPSB7fTtcbiAgICAgIGlmIChjb2wuZmlsdGVyLnJlTmFtZSkge1xuICAgICAgICBvYmogPSBjb2wuZmlsdGVyLnJlTmFtZShjb2wuZmlsdGVyLm1lbnVzLCBjb2wpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb2JqW2NvbC5maWx0ZXIua2V5XSA9IHZhbHVlcy5tYXAoaSA9PiBpLnZhbHVlKS5qb2luKCcsJyk7XG4gICAgICB9XG4gICAgICByZXQgPSBPYmplY3QuYXNzaWduKHJldCwgb2JqKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLy8jZW5kcmVnaW9uXG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZGVlcEdldCB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IFhsc3hTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL2FiYy94bHN4JztcblxuaW1wb3J0IHsgU1RDb2x1bW4sIFNURXhwb3J0T3B0aW9ucyB9IGZyb20gJy4vdGFibGUuaW50ZXJmYWNlcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTVEV4cG9ydCB7XG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIHByaXZhdGUgeGxzeFNydjogWGxzeFNlcnZpY2UpIHt9XG5cbiAgcHJpdmF0ZSBfc3RHZXQoaXRlbTogYW55LCBjb2w6IFNUQ29sdW1uKTogYW55IHtcbiAgICBjb25zdCByZXQ6IGFueSA9IHsgdDogJ3MnLCB2OiAnJyB9O1xuXG4gICAgaWYgKGNvbC5mb3JtYXQpIHtcbiAgICAgIHJldC52ID0gY29sLmZvcm1hdChpdGVtLCBjb2wpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB2YWwgPSBkZWVwR2V0KGl0ZW0sIGNvbC5pbmRleCBhcyBzdHJpbmdbXSwgJycpO1xuICAgICAgcmV0LnYgPSB2YWw7XG4gICAgICBzd2l0Y2ggKGNvbC50eXBlKSB7XG4gICAgICAgIGNhc2UgJ2N1cnJlbmN5JzpcbiAgICAgICAgICByZXQudCA9ICduJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICAgICAgcmV0LnQgPSAnZCc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3luJzpcbiAgICAgICAgICByZXQudiA9IHJldC52ID09PSBjb2wueW5UcnV0aCA/IGNvbC55blllcyB8fCAnw6bCmMKvJyA6IGNvbC55bk5vIHx8ICfDpcKQwqYnO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBwcml2YXRlIGdlblNoZWV0KG9wdDogU1RFeHBvcnRPcHRpb25zKTogeyBbc2hlZXQ6IHN0cmluZ106IGFueSB9IHtcbiAgICBjb25zdCBzaGVldHM6IHsgW3NoZWV0OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuICAgIGNvbnN0IHNoZWV0ID0gKHNoZWV0c1tvcHQuc2hlZXRuYW1lIHx8ICdTaGVldDEnXSA9IHt9KTtcbiAgICBjb25zdCBjb2xEYXRhID0gb3B0Ll9jLmZpbHRlcihcbiAgICAgIHcgPT5cbiAgICAgICAgdy5leHBvcnRlZCAhPT0gZmFsc2UgJiZcbiAgICAgICAgdy5pbmRleCAmJlxuICAgICAgICAoIXcuYnV0dG9ucyB8fCB3LmJ1dHRvbnMubGVuZ3RoID09PSAwKSxcbiAgICApO1xuICAgIGNvbnN0IGNjID0gY29sRGF0YS5sZW5ndGgsXG4gICAgICBkYyA9IG9wdC5fZC5sZW5ndGg7XG5cbiAgICAvLyBjb2x1bW5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNjOyBpKyspIHtcbiAgICAgIHNoZWV0W2Ake1N0cmluZy5mcm9tQ2hhckNvZGUoNjUgKyBpKX0xYF0gPSB7XG4gICAgICAgIHQ6ICdzJyxcbiAgICAgICAgdjogY29sRGF0YVtpXS50aXRsZSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gY29udGVudFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGM7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjYzsgaisrKSB7XG4gICAgICAgIHNoZWV0W2Ake1N0cmluZy5mcm9tQ2hhckNvZGUoNjUgKyBqKX0ke2kgKyAyfWBdID0gdGhpcy5fc3RHZXQoXG4gICAgICAgICAgb3B0Ll9kW2ldLFxuICAgICAgICAgIGNvbERhdGFbal0sXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNjID4gMCAmJiBkYyA+IDApIHtcbiAgICAgIHNoZWV0WychcmVmJ10gPSBgQTE6JHtTdHJpbmcuZnJvbUNoYXJDb2RlKDY1ICsgY2MgLSAxKX0ke2RjICsgMX1gO1xuICAgIH1cblxuICAgIHJldHVybiBzaGVldHM7XG4gIH1cblxuICBleHBvcnQob3B0OiBTVEV4cG9ydE9wdGlvbnMpIHtcbiAgICBpZiAoIXRoaXMueGxzeFNydilcbiAgICAgIHRocm93IG5ldyBFcnJvcihgbXVzZSBiZSBpbXBvcnQgJ1hsc3hNb2R1bGUnIG1vZHVsZSwgYnV0IGdvdCBudWxsYCk7XG4gICAgY29uc3Qgc2hlZXRzID0gdGhpcy5nZW5TaGVldChvcHQpO1xuICAgIHJldHVybiB0aGlzLnhsc3hTcnYuZXhwb3J0KHtcbiAgICAgIHNoZWV0cyxcbiAgICAgIGZpbGVuYW1lOiBvcHQuZmlsZW5hbWUsXG4gICAgICBjYWxsYmFjazogb3B0LmNhbGxiYWNrLFxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgT25EZXN0cm95LFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIEV2ZW50RW1pdHRlcixcbiAgUmVuZGVyZXIyLFxuICBFbGVtZW50UmVmLFxuICBUZW1wbGF0ZVJlZixcbiAgU2ltcGxlQ2hhbmdlLFxuICBPcHRpb25hbCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERlY2ltYWxQaXBlLCBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtcbiAgQ05DdXJyZW5jeVBpcGUsXG4gIERhdGVQaXBlLFxuICBZTlBpcGUsXG4gIE1vZGFsSGVscGVyLFxuICBNb2RhbEhlbHBlck9wdGlvbnMsXG4gIEFMQUlOX0kxOE5fVE9LRU4sXG4gIEFsYWluSTE4TlNlcnZpY2UsXG4gIERyYXdlckhlbHBlcixcbiAgRHJhd2VySGVscGVyT3B0aW9ucyxcbiAgRGVsb25Mb2NhbGVTZXJ2aWNlLFxufSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHtcbiAgZGVlcENvcHksXG4gIHRvQm9vbGVhbixcbiAgdXBkYXRlSG9zdENsYXNzLFxuICBJbnB1dEJvb2xlYW4sXG4gIElucHV0TnVtYmVyLFxufSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbmltcG9ydCB7XG4gIFNUQ29sdW1uLFxuICBTVENoYW5nZSxcbiAgU1RDb2x1bW5TZWxlY3Rpb24sXG4gIFNUQ29sdW1uRmlsdGVyTWVudSxcbiAgU1REYXRhLFxuICBTVENvbHVtbkJ1dHRvbixcbiAgU1RFeHBvcnRPcHRpb25zLFxuICBTVE11bHRpU29ydCxcbiAgU1RSZXEsXG4gIFNURXJyb3IsXG4gIFNUQ2hhbmdlVHlwZSxcbiAgU1RDaGFuZ2VSb3dDbGljayxcbiAgU1RSZXMsXG4gIFNUUGFnZSxcbiAgU1RMb2FkT3B0aW9ucyxcbn0gZnJvbSAnLi90YWJsZS5pbnRlcmZhY2VzJztcbmltcG9ydCB7IFNUQ29uZmlnIH0gZnJvbSAnLi90YWJsZS5jb25maWcnO1xuaW1wb3J0IHsgU1RFeHBvcnQgfSBmcm9tICcuL3RhYmxlLWV4cG9ydCc7XG5pbXBvcnQgeyBTVENvbHVtblNvdXJjZSB9IGZyb20gJy4vdGFibGUtY29sdW1uLXNvdXJjZSc7XG5pbXBvcnQgeyBTVFJvd1NvdXJjZSB9IGZyb20gJy4vdGFibGUtcm93LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBTVERhdGFTb3VyY2UgfSBmcm9tICcuL3RhYmxlLWRhdGEtc291cmNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFibGUuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFtcbiAgICBTVERhdGFTb3VyY2UsXG4gICAgU1RSb3dTb3VyY2UsXG4gICAgU1RDb2x1bW5Tb3VyY2UsXG4gICAgU1RFeHBvcnQsXG4gICAgQ05DdXJyZW5jeVBpcGUsXG4gICAgRGF0ZVBpcGUsXG4gICAgWU5QaXBlLFxuICAgIERlY2ltYWxQaXBlLFxuICBdLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFNUQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGkxOG4kOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgZGVsb25JMThuJDogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIHRvdGFsVHBsID0gYGA7XG4gIHByaXZhdGUgbG9jYWxlOiBhbnkgPSB7fTtcbiAgcHJpdmF0ZSBjbG9uZVBhZ2U6IFNUUGFnZTtcbiAgX2RhdGE6IFNURGF0YVtdID0gW107XG4gIF9pc1BhZ2luYXRpb24gPSB0cnVlO1xuICBfYWxsQ2hlY2tlZCA9IGZhbHNlO1xuICBfaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICBfY29sdW1uczogU1RDb2x1bW5bXSA9IFtdO1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgLyoqIMOmwpXCsMOmwo3CrsOmwrrCkCAqL1xuICBASW5wdXQoKVxuICBkYXRhOiBzdHJpbmcgfCBTVERhdGFbXSB8IE9ic2VydmFibGU8U1REYXRhW10+O1xuICAvKiogw6jCr8K3w6bCscKCw6TCvcKTw6nChcKNw6fCvcKuICovXG4gIEBJbnB1dCgpXG4gIGdldCByZXEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcTtcbiAgfVxuICBzZXQgcmVxKHZhbHVlOiBTVFJlcSkge1xuICAgIGNvbnN0IHsgcmVxIH0gPSB0aGlzLmNvZztcbiAgICBjb25zdCBpdGVtID0gT2JqZWN0LmFzc2lnbih7fSwgcmVxLCB2YWx1ZSk7XG4gICAgaWYgKGl0ZW0ucmVOYW1lID09IG51bGwpIHtcbiAgICAgIGl0ZW0ucmVOYW1lID0gZGVlcENvcHkocmVxLnJlTmFtZSk7XG4gICAgfVxuICAgIHRoaXMuX3JlcSA9IGl0ZW07XG4gIH1cbiAgcHJpdmF0ZSBfcmVxOiBTVFJlcTtcbiAgLyoqIMOowr/ClMOlwpvCnsOkwr3Ck8OpwoXCjcOnwr3CriAqL1xuICBASW5wdXQoKVxuICBnZXQgcmVzKCkge1xuICAgIHJldHVybiB0aGlzLl9yZXM7XG4gIH1cbiAgc2V0IHJlcyh2YWx1ZTogU1RSZXMpIHtcbiAgICBjb25zdCB7IHJlcyB9ID0gdGhpcy5jb2c7XG4gICAgY29uc3QgaXRlbSA9IE9iamVjdC5hc3NpZ24oe30sIHJlcywgdmFsdWUpO1xuICAgIGl0ZW0ucmVOYW1lID0gT2JqZWN0LmFzc2lnbih7fSwgcmVzLnJlTmFtZSwgaXRlbS5yZU5hbWUpO1xuICAgIGlmICghQXJyYXkuaXNBcnJheShpdGVtLnJlTmFtZS5saXN0KSlcbiAgICAgIGl0ZW0ucmVOYW1lLmxpc3QgPSBpdGVtLnJlTmFtZS5saXN0LnNwbGl0KCcuJyk7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGl0ZW0ucmVOYW1lLnRvdGFsKSlcbiAgICAgIGl0ZW0ucmVOYW1lLnRvdGFsID0gaXRlbS5yZU5hbWUudG90YWwuc3BsaXQoJy4nKTtcbiAgICB0aGlzLl9yZXMgPSBpdGVtO1xuICB9XG4gIHByaXZhdGUgX3JlczogU1RSZXM7XG4gIC8qKiDDpcKIwpfDpsKPwo/DqMK/wrAgICovXG4gIEBJbnB1dCgpXG4gIGNvbHVtbnM6IFNUQ29sdW1uW10gPSBbXTtcbiAgLyoqIMOmwq/Cj8OpwqHCtcOmwpXCsMOpwofCj8OvwrzCjMOlwr3Ck8Oowq7CvsOnwr3CrsOkwrjCuiBgMGAgw6jCocKow6fCpMK6w6TCuMKNw6XCiMKGw6nCocK1w6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYDEwYCAqL1xuICBASW5wdXQoKVxuICBASW5wdXROdW1iZXIoKVxuICBwcyA9IDEwO1xuICAvKiogw6XCvcKTw6XCicKNw6nCocK1w6fCoMKBICovXG4gIEBJbnB1dCgpXG4gIEBJbnB1dE51bWJlcigpXG4gIHBpID0gMTtcbiAgLyoqIMOmwpXCsMOmwo3CrsOmwoDCu8OpwofCjyAqL1xuICBASW5wdXQoKVxuICBASW5wdXROdW1iZXIoKVxuICB0b3RhbCA9IDA7XG4gIC8qKiDDpcKIwobDqcKhwrXDpcKZwqjDqcKFwo3Dp8K9wq4gKi9cbiAgQElucHV0KClcbiAgZ2V0IHBhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhZ2U7XG4gIH1cbiAgc2V0IHBhZ2UodmFsdWU6IFNUUGFnZSkge1xuICAgIHRoaXMuY2xvbmVQYWdlID0gdmFsdWU7XG4gICAgY29uc3QgeyBwYWdlIH0gPSB0aGlzLmNvZztcbiAgICBjb25zdCBpdGVtID0gT2JqZWN0LmFzc2lnbih7fSwgZGVlcENvcHkocGFnZSksIHZhbHVlKTtcbiAgICBjb25zdCB7IHRvdGFsIH0gPSBpdGVtO1xuICAgIGlmICh0eXBlb2YgdG90YWwgPT09ICdzdHJpbmcnICYmIHRvdGFsLmxlbmd0aCkge1xuICAgICAgdGhpcy50b3RhbFRwbCA9IHRvdGFsO1xuICAgIH0gZWxzZSBpZiAodG9Cb29sZWFuKHRvdGFsKSkge1xuICAgICAgdGhpcy50b3RhbFRwbCA9IHRoaXMubG9jYWxlLnRvdGFsO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRvdGFsVHBsID0gJyc7XG4gICAgfVxuICAgIHRoaXMuX3BhZ2UgPSBpdGVtO1xuICB9XG4gIHByaXZhdGUgX3BhZ2U6IFNUUGFnZTtcbiAgLyoqIMOmwpjCr8OlwpDCpsOmwpjCvsOnwqTCukxvYWRpbmcgKi9cbiAgQElucHV0KClcbiAgQElucHV0Qm9vbGVhbigpXG4gIGxvYWRpbmcgPSBmYWxzZTtcbiAgLyoqIMOlwrvCtsOowr/Cn8OmwpjCvsOnwqTCusOlworCoMOowr3CvcOmwpXCiMOmwp7CnMOnwprChMOmwpfCtsOpwpfCtMOvwrzCiMOpwpjCssOmwq3CosOpwpfCqsOnwoPCgcOvwrzCiSAqL1xuICBASW5wdXQoKVxuICBASW5wdXROdW1iZXIoKVxuICBsb2FkaW5nRGVsYXkgPSAwO1xuICAvKiogw6bCmMKvw6XCkMKmw6bCmMK+w6fCpMK6w6jCvsK5w6bCocKGICovXG4gIEBJbnB1dCgpXG4gIEBJbnB1dEJvb2xlYW4oKVxuICBib3JkZXJlZCA9IGZhbHNlO1xuICAvKiogdGFibGXDpcKkwqfDpcKwwo8gKi9cbiAgQElucHV0KClcbiAgc2l6ZTogJ3NtYWxsJyB8ICdtaWRkbGUnIHwgJ2RlZmF1bHQnO1xuICAvKiogw6fCusK1w6XCkMKRw6bClMKvw6bCjMKBw6bCu8Kaw6XCisKow6/CvMKMw6TCucKfw6XCj8Kvw6fClMKow6TCusKOw6bCjMKHw6XCrsKaw6bCu8Kaw6XCisKow6XCjMK6w6XCn8Kfw6fCmsKEw6nCq8KYw6XCusKmw6/CvMKaYHsgeTogJzMwMHB4JywgeDogJzMwMHB4JyB9YCAqL1xuICBASW5wdXQoKVxuICBzY3JvbGw6IHsgeT86IHN0cmluZzsgeD86IHN0cmluZyB9O1xuICAvKiogw6bCmMKvw6XCkMKmw6XCpMKaw6bCjsKSw6XCusKPw6/CvMKMw6XCvcKTIGBzb3J0YCDDpcKkwprDpMK4wqrDp8KbwrjDpcKQwozDpcKAwrzDpsKXwrbDqMKHwqrDpcKKwqjDpcKQwojDpcK5wrbDr8K8wozDpcK7wrrDqMKuwq7DpcKQwo7Dp8Krwq/DpsKUwq/DpsKMwoHDpsKXwrbDpMK9wr/Dp8KUwqggKi9cbiAgQElucHV0KClcbiAgZ2V0IG11bHRpU29ydCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbXVsdGlTb3J0O1xuICB9XG4gIHNldCBtdWx0aVNvcnQodmFsdWU6IGFueSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJyAmJiAhdG9Cb29sZWFuKHZhbHVlKSkge1xuICAgICAgdGhpcy5fbXVsdGlTb3J0ID0gbnVsbDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fbXVsdGlTb3J0ID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIDxTVE11bHRpU29ydD57XG4gICAgICAgIGtleTogJ3NvcnQnLFxuICAgICAgICBzZXBhcmF0b3I6ICctJyxcbiAgICAgICAgbmFtZVNlcGFyYXRvcjogJy4nLFxuICAgICAgfSxcbiAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgPyB2YWx1ZSA6IHt9LFxuICAgICk7XG4gIH1cbiAgcHJpdmF0ZSBfbXVsdGlTb3J0OiBTVE11bHRpU29ydDtcbiAgLyoqIGBoZWFkZXJgIMOmwqDCh8OpwqLCmCAqL1xuICBASW5wdXQoKVxuICBoZWFkZXI6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICAvKiogYGZvb3RlcmAgw6XCusKVw6nCg8KoICovXG4gIEBJbnB1dCgpXG4gIGZvb3Rlcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIC8qKiDDqcKiwp3DpcKkwpYgYGJvZHlgIMOlwobChcOlwq7CuSAqL1xuICBASW5wdXQoKVxuICBib2R5OiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgLyoqIGBleHBhbmRgIMOlwo/Cr8OlwrHClcOlwrzCgMOvwrzCjMOlwr3Ck8OmwpXCsMOmwo3CrsOmwrrCkMOkwrjCrcOlwozChcOmwovCrCBgZXhwYW5kYCDDqMKhwqjDp8KkwrrDpcKxwpXDpcK8woDDp8KKwrbDpsKAwoEgKi9cbiAgQElucHV0KClcbiAgZXhwYW5kOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogYW55OyBjb2x1bW46IFNUQ29sdW1uIH0+O1xuICBASW5wdXQoKVxuICBub1Jlc3VsdDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpXG4gIHdpZHRoQ29uZmlnOiBzdHJpbmdbXTtcbiAgLyoqIMOowq/Ct8OmwrHCgsOlwrzCgsOlwrjCuMOmwpfCtsOlwpvCnsOowrDCgyAqL1xuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgZXJyb3IgPSBuZXcgRXZlbnRFbWl0dGVyPFNURXJyb3I+KCk7XG4gIC8qKlxuICAgKiDDpcKPwpjDpcKMwpbDpsKXwrbDpcKbwp7DqMKwwoPDr8K8wozDpcKMwoXDpsKLwqzDr8K8wppgcGlgw6PCgMKBYHBzYMOjwoDCgWBjaGVja2JveGDDo8KAwoFgcmFkaW9gw6PCgMKBYHNvcnRgw6PCgMKBYGZpbHRlcmDDo8KAwoFgY2xpY2tgw6PCgMKBYGRibENsaWNrYCDDpcKPwpjDpcKKwqhcbiAgICovXG4gIEBPdXRwdXQoKVxuICByZWFkb25seSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFNUQ2hhbmdlPigpO1xuICAvKiogw6jCocKMw6XCjcKVw6XCh8K7w6XCpMKaw6XCsMKRw6bCl8K2w6nClcK/w6TCucKLw6fCscK7w6TCuMK6w6XCj8KMw6XCh8K7w6/CvMKIw6XCjcKVw6TCvcKNw6/CvMKaw6bCr8Krw6fCp8KSw6/CvMKJw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYDIwMGAgKi9cbiAgQElucHV0KClcbiAgQElucHV0TnVtYmVyKClcbiAgcm93Q2xpY2tUaW1lID0gMjAwO1xuXG4gIEBJbnB1dCgpXG4gIEBJbnB1dEJvb2xlYW4oKVxuICByZXNwb25zaXZlSGlkZUhlYWRlckZvb3RlcjogYm9vbGVhbjtcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiBjb21wYXRpYmxlXG5cbiAgLyoqXG4gICAqIGNoZWNrYm94w6XCj8KYw6XCjMKWw6bCl8K2w6XCm8Kew6jCsMKDw6/CvMKMw6XCj8KCw6bClcKww6TCuMK6w6XCvcKTw6XCicKNw6bCicKAw6nCgMKJw6bCuMKFw6XCjcKVXG4gICAqIEBkZXByZWNhdGVkIMOkwr3Cv8OnwpTCqCBgY2hhbmdlYCDDpsKbwr/DpMK7wqNcbiAgICogQGRlcHJlY2F0ZWQgYXMgb2YgdjNcbiAgICovXG4gIEBPdXRwdXQoKVxuICByZWFkb25seSBjaGVja2JveENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8U1REYXRhW10+KCk7XG4gIC8qKlxuICAgKiByYWRpb8Olwo/CmMOlwozClsOmwpfCtsOlwpvCnsOowrDCg8OvwrzCjMOlwo/CgsOmwpXCsMOkwrjCusOlwr3Ck8OlwonCjcOmwonCgMOpwoDCiVxuICAgKiBAZGVwcmVjYXRlZCDDpMK9wr/Dp8KUwqggYGNoYW5nZWAgw6bCm8K/w6TCu8KjXG4gICAqIEBkZXByZWNhdGVkIGFzIG9mIHYzXG4gICAqL1xuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgcmFkaW9DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFNURGF0YT4oKTtcbiAgLyoqXG4gICAqIMOmwo7CksOlwrrCj8OlwpvCnsOowrDCg1xuICAgKiBAZGVwcmVjYXRlZCDDpMK9wr/Dp8KUwqggYGNoYW5nZWAgw6bCm8K/w6TCu8KjXG4gICAqIEBkZXByZWNhdGVkIGFzIG9mIHYzXG4gICAqL1xuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgc29ydENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvKipcbiAgICogw6jCv8KHw6bCu8Kkw6XCj8KYw6XCjMKWw6bCl8K2w6XCm8Kew6jCsMKDXG4gICAqIEBkZXByZWNhdGVkIMOkwr3Cv8OnwpTCqCBgY2hhbmdlYCDDpsKbwr/DpMK7wqNcbiAgICogQGRlcHJlY2F0ZWQgYXMgb2YgdjNcbiAgICovXG4gIEBPdXRwdXQoKVxuICByZWFkb25seSBmaWx0ZXJDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFNUQ29sdW1uPigpO1xuICAvKipcbiAgICogw6jCocKMw6XCjcKVw6XCh8K7w6XCm8Kew6jCsMKDXG4gICAqIEBkZXByZWNhdGVkIMOkwr3Cv8OnwpTCqCBgY2hhbmdlYCDDpsKbwr/DpMK7wqNcbiAgICogQGRlcHJlY2F0ZWQgYXMgb2YgdjNcbiAgICovXG4gIEBPdXRwdXQoKVxuICByZWFkb25seSByb3dDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8U1RDaGFuZ2VSb3dDbGljaz4oKTtcbiAgLyoqXG4gICAqIMOowqHCjMOlwo/CjMOlwofCu8OlwpvCnsOowrDCg1xuICAgKiBAZGVwcmVjYXRlZCDDpMK9wr/Dp8KUwqggYGNoYW5nZWAgw6bCm8K/w6TCu8KjXG4gICAqIEBkZXByZWNhdGVkIGFzIG9mIHYzXG4gICAqL1xuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgcm93RGJsQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPFNUQ2hhbmdlUm93Q2xpY2s+KCk7XG4gIC8vI2VuZHJlZ2lvblxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgY29nOiBTVENvbmZpZyxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgZXhwb3J0U3J2OiBTVEV4cG9ydCxcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoQUxBSU5fSTE4Tl9UT0tFTilcbiAgICBpMThuU3J2OiBBbGFpbkkxOE5TZXJ2aWNlLFxuICAgIHByaXZhdGUgbW9kYWxIZWxwZXI6IE1vZGFsSGVscGVyLFxuICAgIHByaXZhdGUgZHJhd2VySGVscGVyOiBEcmF3ZXJIZWxwZXIsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IGFueSxcbiAgICBwcml2YXRlIGNvbHVtblNvdXJjZTogU1RDb2x1bW5Tb3VyY2UsXG4gICAgcHJpdmF0ZSBkYXRhU291cmNlOiBTVERhdGFTb3VyY2UsXG4gICAgcHJpdmF0ZSBkZWxvbkkxOG46IERlbG9uTG9jYWxlU2VydmljZSxcbiAgKSB7XG4gICAgdGhpcy5kZWxvbkkxOG4kID0gdGhpcy5kZWxvbkkxOG4uY2hhbmdlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmxvY2FsZSA9IHRoaXMuZGVsb25JMThuLmdldERhdGEoJ3N0Jyk7XG4gICAgICBpZiAodGhpcy5fY29sdW1ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMucGFnZSA9IHRoaXMuY2xvbmVQYWdlO1xuICAgICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRlZXBDb3B5KGNvZykpO1xuICAgIGlmIChpMThuU3J2KSB7XG4gICAgICB0aGlzLmkxOG4kID0gaTE4blNydi5jaGFuZ2VcbiAgICAgICAgLnBpcGUoZmlsdGVyKCgpID0+IHRoaXMuX2NvbHVtbnMubGVuZ3RoID4gMCkpXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy51cGRhdGVDb2x1bW5zKCkpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlclRvdGFsKHRvdGFsOiBzdHJpbmcsIHJhbmdlOiBzdHJpbmdbXSkge1xuICAgIHJldHVybiB0aGlzLnRvdGFsVHBsXG4gICAgICA/IHRoaXMudG90YWxUcGxcbiAgICAgICAgICAucmVwbGFjZSgne3t0b3RhbH19JywgdG90YWwpXG4gICAgICAgICAgLnJlcGxhY2UoJ3t7cmFuZ2VbMF19fScsIHJhbmdlWzBdKVxuICAgICAgICAgIC5yZXBsYWNlKCd7e3JhbmdlWzFdfX0nLCByYW5nZVsxXSlcbiAgICAgIDogJyc7XG4gIH1cblxuICBwcml2YXRlIGNoYW5nZUVtaXQodHlwZTogU1RDaGFuZ2VUeXBlLCBkYXRhPzogYW55KSB7XG4gICAgY29uc3QgcmVzOiBTVENoYW5nZSA9IHtcbiAgICAgIHR5cGUsXG4gICAgICBwaTogdGhpcy5waSxcbiAgICAgIHBzOiB0aGlzLnBzLFxuICAgICAgdG90YWw6IHRoaXMudG90YWwsXG4gICAgfTtcbiAgICBpZiAoZGF0YSAhPSBudWxsKSB7XG4gICAgICByZXNbdHlwZV0gPSBkYXRhO1xuICAgIH1cbiAgICB0aGlzLmNoYW5nZS5lbWl0KHJlcyk7XG4gIH1cblxuICAvLyNyZWdpb24gZGF0YVxuXG4gIHByaXZhdGUgX2xvYWQoKSB7XG4gICAgY29uc3QgeyBwaSwgcHMsIGRhdGEsIHJlcSwgcmVzLCBwYWdlLCB0b3RhbCwgbXVsdGlTb3J0IH0gPSB0aGlzO1xuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgcmV0dXJuIHRoaXMuZGF0YVNvdXJjZVxuICAgICAgLnByb2Nlc3Moe1xuICAgICAgICBwaSxcbiAgICAgICAgcHMsXG4gICAgICAgIHRvdGFsLFxuICAgICAgICBkYXRhLFxuICAgICAgICByZXEsXG4gICAgICAgIHJlcyxcbiAgICAgICAgcGFnZSxcbiAgICAgICAgY29sdW1uczogdGhpcy5fY29sdW1ucyxcbiAgICAgICAgbXVsdGlTb3J0LFxuICAgICAgfSlcbiAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdC5waSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aGlzLnBpID0gcmVzdWx0LnBpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0LnRvdGFsICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRoaXMudG90YWwgPSByZXN1bHQudG90YWw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQucGFnZVNob3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhpcy5faXNQYWdpbmF0aW9uID0gcmVzdWx0LnBhZ2VTaG93O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2RhdGEgPSByZXN1bHQubGlzdDtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5fcmVmQ2hlY2soKSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmVycm9yLmVtaXQoeyB0eXBlOiAncmVxJywgZXJyb3IgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiDDpsKgwrnDpsKNwq7DqcKhwrXDp8KgwoHDqcKHwo3DpsKWwrDDpcKKwqDDqMK9wr3DpsKVwrDDpsKNwq5cbiAgICpcbiAgICogQHBhcmFtIHBpIMOmwozCh8Olwq7CmsOlwr3Ck8OlwonCjcOpwqHCtcOnwqDCgcOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmAxYFxuICAgKiBAcGFyYW0gZXh0cmFQYXJhbXMgw6nCh8KNw6bClsKww6bCjMKHw6XCrsKaIGBleHRyYVBhcmFtc2Agw6XCgMK8XG4gICAqIEBwYXJhbSBvcHRpb25zIMOpwoDCicOpwqHCuVxuICAgKi9cbiAgbG9hZChwaSA9IDEsIGV4dHJhUGFyYW1zPzogYW55LCBvcHRpb25zPzogU1RMb2FkT3B0aW9ucykge1xuICAgIGlmIChwaSAhPT0gLTEpIHRoaXMucGkgPSBwaTtcbiAgICBpZiAodHlwZW9mIGV4dHJhUGFyYW1zICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5fcmVxLnBhcmFtcyA9XG4gICAgICAgIG9wdGlvbnMgJiYgb3B0aW9ucy5tZXJnZVxuICAgICAgICAgID8gT2JqZWN0LmFzc2lnbih0aGlzLl9yZXEucGFyYW1zLCBleHRyYVBhcmFtcylcbiAgICAgICAgICA6IGV4dHJhUGFyYW1zO1xuICAgIH1cbiAgICB0aGlzLl9jaGFuZ2UoJ3BpJyk7XG4gIH1cblxuICAvKipcbiAgICogw6nCh8KNw6bClsKww6XCiMK3w6bClsKww6XCvcKTw6XCicKNw6nCocK1XG4gICAqIEBwYXJhbSBleHRyYVBhcmFtcyDDqcKHwo3DpsKWwrDDpsKMwofDpcKuwpogYGV4dHJhUGFyYW1zYCDDpcKAwrxcbiAgICovXG4gIHJlbG9hZChleHRyYVBhcmFtcz86IGFueSwgb3B0aW9ucz86IFNUTG9hZE9wdGlvbnMpIHtcbiAgICB0aGlzLmxvYWQoLTEsIGV4dHJhUGFyYW1zLCBvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDDqcKHwo3Dp8K9wq7DpMK4wpTDqcKHwo3DpsKWwrDDqMKuwr7Dp8K9wq4gYHBpYCDDpMK4wrogYDFgw6/CvMKMw6XCjMKFw6XCkMKrw6TCu8Klw6TCuMKLw6XCgMK8w6/CvMKaXG4gICAqIC0gYGNoZWNrYCDDpsKVwrDDpsKNwq5cbiAgICogLSBgcmFkaW9gIMOmwpXCsMOmwo3CrlxuICAgKiAtIGBzb3J0YCDDpsKVwrDDpsKNwq5cbiAgICogLSBgZmlsZXRlcmAgw6bClcKww6bCjcKuXG4gICAqXG4gICAqIEBwYXJhbSBleHRyYVBhcmFtcyDDqcKHwo3DpsKWwrDDpsKMwofDpcKuwpogYGV4dHJhUGFyYW1zYCDDpcKAwrxcbiAgICovXG4gIHJlc2V0KGV4dHJhUGFyYW1zPzogYW55LCBvcHRpb25zPzogU1RMb2FkT3B0aW9ucykge1xuICAgIHRoaXMuY2xlYXJDaGVjaygpXG4gICAgICAuY2xlYXJSYWRpbygpXG4gICAgICAuY2xlYXJGaWx0ZXIoKVxuICAgICAgLmNsZWFyU29ydCgpO1xuICAgIHRoaXMubG9hZCgxLCBleHRyYVBhcmFtcywgb3B0aW9ucyk7XG4gIH1cblxuICBwcml2YXRlIF90b1RvcCgpIHtcbiAgICBpZiAoIXRoaXMucGFnZS50b1RvcCkgcmV0dXJuO1xuICAgIGNvbnN0IGVsID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgIGlmICh0aGlzLnNjcm9sbCkge1xuICAgICAgZWwucXVlcnlTZWxlY3RvcignLmFudC10YWJsZS1ib2R5Jykuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgLy8gZml4IGhlYWRlciBoZWlnaHRcbiAgICB0aGlzLmRvYy5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIC09IHRoaXMucGFnZS50b1RvcE9mZnNldDtcbiAgfVxuXG4gIF9jaGFuZ2UodHlwZTogJ3BpJyB8ICdwcycpIHtcbiAgICB0aGlzLl9sb2FkKCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLl90b1RvcCgpO1xuICAgIH0pO1xuICAgIHRoaXMuY2hhbmdlRW1pdCh0eXBlKTtcbiAgfVxuXG4gIF9jbGljayhlOiBFdmVudCwgaXRlbTogYW55LCBjb2w6IFNUQ29sdW1uKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY29uc3QgcmVzID0gY29sLmNsaWNrKGl0ZW0sIHRoaXMpO1xuICAgIGlmICh0eXBlb2YgcmVzID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChyZXMpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIHJvd0NsaWNrQ291bnQgPSAwO1xuICBfcm93Q2xpY2soZTogRXZlbnQsIGl0ZW06IGFueSwgaW5kZXg6IG51bWJlcikge1xuICAgIGlmICgoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLm5vZGVOYW1lID09PSAnSU5QVVQnKSByZXR1cm47XG4gICAgKyt0aGlzLnJvd0NsaWNrQ291bnQ7XG4gICAgaWYgKHRoaXMucm93Q2xpY2tDb3VudCAhPT0gMSkgcmV0dXJuO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgZGF0YSA9IHsgZSwgaXRlbSwgaW5kZXggfTtcbiAgICAgIGlmICh0aGlzLnJvd0NsaWNrQ291bnQgPT09IDEpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VFbWl0KCdjbGljaycsIGRhdGEpO1xuICAgICAgICAvLyBAZGVwcmVjYXRlZCBhcyBvZiB2M1xuICAgICAgICB0aGlzLnJvd0NsaWNrLmVtaXQoZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNoYW5nZUVtaXQoJ2RibENsaWNrJywgZGF0YSk7XG4gICAgICAgIC8vIEBkZXByZWNhdGVkIGFzIG9mIHYzXG4gICAgICAgIHRoaXMucm93RGJsQ2xpY2suZW1pdChkYXRhKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucm93Q2xpY2tDb3VudCA9IDA7XG4gICAgfSwgdGhpcy5yb3dDbGlja1RpbWUpO1xuICB9XG5cbiAgLyoqIMOnwqfCu8OpwpnCpMOmwp/CkMOowqHCjMOmwpXCsMOmwo3CriAqL1xuICByZW1vdmVSb3coZGF0YTogU1REYXRhIHwgU1REYXRhW10pIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgIGRhdGEgPSBbIGRhdGEgXTtcbiAgICB9XG5cbiAgICAoZGF0YSBhcyBTVERhdGFbXSkubWFwKGl0ZW0gPT4gdGhpcy5fZGF0YS5pbmRleE9mKGl0ZW0pKVxuICAgICAgICAuZmlsdGVyKHBvcyA9PiBwb3MgIT09IC0xKVxuICAgICAgICAuZm9yRWFjaChwb3MgPT4gdGhpcy5fZGF0YS5zcGxpY2UocG9zLCAxKSk7XG5cbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIC8vI2VuZHJlZ2lvblxuXG4gIC8vI3JlZ2lvbiBzb3J0XG5cbiAgc29ydChjb2w6IFNUQ29sdW1uLCBpZHg6IG51bWJlciwgdmFsdWU6IGFueSkge1xuICAgIGlmICh0aGlzLm11bHRpU29ydCkge1xuICAgICAgY29sLl9zb3J0LmRlZmF1bHQgPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY29sdW1ucy5mb3JFYWNoKFxuICAgICAgICAoaXRlbSwgaW5kZXgpID0+IChpdGVtLl9zb3J0LmRlZmF1bHQgPSBpbmRleCA9PT0gaWR4ID8gdmFsdWUgOiBudWxsKSxcbiAgICAgICk7XG4gICAgfVxuICAgIHRoaXMuX2xvYWQoKTtcbiAgICBjb25zdCByZXMgPSB7XG4gICAgICB2YWx1ZSxcbiAgICAgIG1hcDogdGhpcy5kYXRhU291cmNlLmdldFJlcVNvcnRNYXAodGhpcy5tdWx0aVNvcnQsIHRoaXMuX2NvbHVtbnMpLFxuICAgICAgY29sdW1uOiBjb2wsXG4gICAgfTtcbiAgICB0aGlzLmNoYW5nZUVtaXQoJ3NvcnQnLCByZXMpO1xuICAgIC8vIEBkZXByZWNhdGVkIGFzIG9mIHYzXG4gICAgdGhpcy5zb3J0Q2hhbmdlLmVtaXQocmVzKTtcbiAgfVxuXG4gIGNsZWFyU29ydCgpIHtcbiAgICB0aGlzLl9jb2x1bW5zLmZvckVhY2goaXRlbSA9PiAoaXRlbS5fc29ydC5kZWZhdWx0ID0gbnVsbCkpO1xuICB9XG5cbiAgLy8jZW5kcmVnaW9uXG5cbiAgLy8jcmVnaW9uIGZpbHRlclxuXG4gIHByaXZhdGUgaGFuZGxlRmlsdGVyKGNvbDogU1RDb2x1bW4pIHtcbiAgICBjb2wuZmlsdGVyLmRlZmF1bHQgPSBjb2wuZmlsdGVyLm1lbnVzLmZpbmRJbmRleCh3ID0+IHcuY2hlY2tlZCkgIT09IC0xO1xuICAgIHRoaXMuX2xvYWQoKTtcbiAgICB0aGlzLmNoYW5nZUVtaXQoJ2ZpbHRlcicsIGNvbCk7XG4gICAgLy8gQGRlcHJlY2F0ZWQgYXMgb2YgdjNcbiAgICB0aGlzLmZpbHRlckNoYW5nZS5lbWl0KGNvbCk7XG4gIH1cblxuICBfZmlsdGVyQ29uZmlybShjb2w6IFNUQ29sdW1uKSB7XG4gICAgdGhpcy5oYW5kbGVGaWx0ZXIoY29sKTtcbiAgfVxuXG4gIF9maWx0ZXJDbGVhcihjb2w6IFNUQ29sdW1uKSB7XG4gICAgY29sLmZpbHRlci5tZW51cy5mb3JFYWNoKGkgPT4gKGkuY2hlY2tlZCA9IGZhbHNlKSk7XG4gICAgdGhpcy5oYW5kbGVGaWx0ZXIoY29sKTtcbiAgfVxuXG4gIF9maWx0ZXJSYWRpbyhjb2w6IFNUQ29sdW1uLCBpdGVtOiBTVENvbHVtbkZpbHRlck1lbnUsIGNoZWNrZWQ6IGJvb2xlYW4pIHtcbiAgICBjb2wuZmlsdGVyLm1lbnVzLmZvckVhY2goaSA9PiAoaS5jaGVja2VkID0gZmFsc2UpKTtcbiAgICBpdGVtLmNoZWNrZWQgPSBjaGVja2VkO1xuICB9XG5cbiAgY2xlYXJGaWx0ZXIoKSB7XG4gICAgdGhpcy5fY29sdW1uc1xuICAgICAgLmZpbHRlcih3ID0+IHcuZmlsdGVyICYmIHcuZmlsdGVyLmRlZmF1bHQgPT09IHRydWUpXG4gICAgICAuZm9yRWFjaChjb2wgPT4ge1xuICAgICAgICBjb2wuZmlsdGVyLmRlZmF1bHQgPSBmYWxzZTtcbiAgICAgICAgY29sLmZpbHRlci5tZW51cy5mb3JFYWNoKGYgPT4gKGYuY2hlY2tlZCA9IGZhbHNlKSk7XG4gICAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vI2VuZHJlZ2lvblxuXG4gIC8vI3JlZ2lvbiBjaGVja2JveFxuXG4gIC8qKiDDpsK4woXDqcKZwqTDpsKJwoDDpsKcwokgYGNoZWNrYm94YCAqL1xuICBjbGVhckNoZWNrKCk6IHRoaXMge1xuICAgIHJldHVybiB0aGlzLl9jaGVja0FsbChmYWxzZSk7XG4gIH1cblxuICBwcml2YXRlIF9yZWZDaGVjaygpOiB0aGlzIHtcbiAgICBjb25zdCB2YWxpZERhdGEgPSB0aGlzLl9kYXRhLmZpbHRlcih3ID0+ICF3LmRpc2FibGVkKTtcbiAgICBjb25zdCBjaGVja2VkTGlzdCA9IHZhbGlkRGF0YS5maWx0ZXIodyA9PiB3LmNoZWNrZWQgPT09IHRydWUpO1xuICAgIHRoaXMuX2FsbENoZWNrZWQgPVxuICAgICAgY2hlY2tlZExpc3QubGVuZ3RoID4gMCAmJiBjaGVja2VkTGlzdC5sZW5ndGggPT09IHZhbGlkRGF0YS5sZW5ndGg7XG4gICAgY29uc3QgYWxsVW5DaGVja2VkID0gdmFsaWREYXRhLmV2ZXJ5KHZhbHVlID0+ICF2YWx1ZS5jaGVja2VkKTtcbiAgICB0aGlzLl9pbmRldGVybWluYXRlID0gIXRoaXMuX2FsbENoZWNrZWQgJiYgIWFsbFVuQ2hlY2tlZDtcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIF9jaGVja0FsbChjaGVja2VkPzogYm9vbGVhbik6IHRoaXMge1xuICAgIGNoZWNrZWQgPSB0eXBlb2YgY2hlY2tlZCA9PT0gJ3VuZGVmaW5lZCcgPyB0aGlzLl9hbGxDaGVja2VkIDogY2hlY2tlZDtcbiAgICB0aGlzLl9kYXRhLmZpbHRlcih3ID0+ICF3LmRpc2FibGVkKS5mb3JFYWNoKGkgPT4gKGkuY2hlY2tlZCA9IGNoZWNrZWQpKTtcbiAgICByZXR1cm4gdGhpcy5fcmVmQ2hlY2soKS5fY2hlY2tOb3RpZnkoKTtcbiAgfVxuXG4gIF9jaGVja1NlbGVjdGlvbihpOiBTVERhdGEsIHZhbHVlOiBib29sZWFuKSB7XG4gICAgaS5jaGVja2VkID0gdmFsdWU7XG4gICAgcmV0dXJuIHRoaXMuX3JlZkNoZWNrKCkuX2NoZWNrTm90aWZ5KCk7XG4gIH1cblxuICBfcm93U2VsZWN0aW9uKHJvdzogU1RDb2x1bW5TZWxlY3Rpb24pOiB0aGlzIHtcbiAgICByb3cuc2VsZWN0KHRoaXMuX2RhdGEpO1xuICAgIHJldHVybiB0aGlzLl9yZWZDaGVjaygpLl9jaGVja05vdGlmeSgpO1xuICB9XG5cbiAgX2NoZWNrTm90aWZ5KCk6IHRoaXMge1xuICAgIGNvbnN0IHJlcyA9IHRoaXMuX2RhdGEuZmlsdGVyKHcgPT4gIXcuZGlzYWJsZWQgJiYgdy5jaGVja2VkID09PSB0cnVlKTtcbiAgICB0aGlzLmNoYW5nZUVtaXQoJ2NoZWNrYm94JywgcmVzKTtcbiAgICAvLyBAZGVwcmVjYXRlZCBhcyBvZiB2M1xuICAgIHRoaXMuY2hlY2tib3hDaGFuZ2UuZW1pdChyZXMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8jZW5kcmVnaW9uXG5cbiAgLy8jcmVnaW9uIHJhZGlvXG5cbiAgLyoqIMOmwrjChcOpwpnCpMOmwonCgMOmwpzCiSBgcmFkaW9gICovXG4gIGNsZWFyUmFkaW8oKTogdGhpcyB7XG4gICAgdGhpcy5fZGF0YS5maWx0ZXIodyA9PiB3LmNoZWNrZWQpLmZvckVhY2goaXRlbSA9PiAoaXRlbS5jaGVja2VkID0gZmFsc2UpKTtcbiAgICB0aGlzLmNoYW5nZUVtaXQoJ3JhZGlvJywgbnVsbCk7XG4gICAgLy8gQGRlcHJlY2F0ZWQgYXMgb2YgdjNcbiAgICB0aGlzLnJhZGlvQ2hhbmdlLmVtaXQobnVsbCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBfcmVmUmFkaW8oY2hlY2tlZDogYm9vbGVhbiwgaXRlbTogU1REYXRhKTogdGhpcyB7XG4gICAgLy8gaWYgKGl0ZW0uZGlzYWJsZWQgPT09IHRydWUpIHJldHVybjtcbiAgICB0aGlzLl9kYXRhLmZpbHRlcih3ID0+ICF3LmRpc2FibGVkKS5mb3JFYWNoKGkgPT4gKGkuY2hlY2tlZCA9IGZhbHNlKSk7XG4gICAgaXRlbS5jaGVja2VkID0gY2hlY2tlZDtcbiAgICB0aGlzLmNoYW5nZUVtaXQoJ3JhZGlvJywgaXRlbSk7XG4gICAgLy8gQGRlcHJlY2F0ZWQgYXMgb2YgdjNcbiAgICB0aGlzLnJhZGlvQ2hhbmdlLmVtaXQoaXRlbSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyNlbmRyZWdpb25cblxuICAvLyNyZWdpb24gYnV0dG9uc1xuXG4gIF9idG5DbGljayhlOiBFdmVudCwgcmVjb3JkOiBhbnksIGJ0bjogU1RDb2x1bW5CdXR0b24pIHtcbiAgICBpZiAoZSkge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgaWYgKGJ0bi50eXBlID09PSAnbW9kYWwnIHx8IGJ0bi50eXBlID09PSAnc3RhdGljJykge1xuICAgICAgY29uc3Qgb2JqID0ge307XG4gICAgICBjb25zdCB7IG1vZGFsIH0gPSBidG47XG4gICAgICBvYmpbbW9kYWwucGFyYW1zTmFtZV0gPSByZWNvcmQ7XG4gICAgICBjb25zdCBvcHRpb25zOiBNb2RhbEhlbHBlck9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBtb2RhbCk7XG4gICAgICAodGhpcy5tb2RhbEhlbHBlcltcbiAgICAgICAgYnRuLnR5cGUgPT09ICdtb2RhbCcgPyAnY3JlYXRlJyA6ICdjcmVhdGVTdGF0aWMnXG4gICAgICBdIGFzIGFueSkoXG4gICAgICAgIG1vZGFsLmNvbXBvbmVudCxcbiAgICAgICAgT2JqZWN0LmFzc2lnbihvYmosIG1vZGFsLnBhcmFtcyAmJiBtb2RhbC5wYXJhbXMocmVjb3JkKSksXG4gICAgICAgIG9wdGlvbnMsXG4gICAgICApXG4gICAgICAgIC5waXBlKGZpbHRlcih3ID0+IHR5cGVvZiB3ICE9PSAndW5kZWZpbmVkJykpXG4gICAgICAgIC5zdWJzY3JpYmUocmVzID0+IHRoaXMuYnRuQ2FsbGJhY2socmVjb3JkLCBidG4sIHJlcykpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoYnRuLnR5cGUgPT09ICdkcmF3ZXInKSB7XG4gICAgICBjb25zdCBvYmogPSB7fTtcbiAgICAgIGNvbnN0IHsgZHJhd2VyIH0gPSBidG47XG4gICAgICBvYmpbZHJhd2VyLnBhcmFtc05hbWVdID0gcmVjb3JkO1xuICAgICAgdGhpcy5kcmF3ZXJIZWxwZXJcbiAgICAgICAgLmNyZWF0ZShcbiAgICAgICAgICBkcmF3ZXIudGl0bGUsXG4gICAgICAgICAgZHJhd2VyLmNvbXBvbmVudCxcbiAgICAgICAgICBPYmplY3QuYXNzaWduKG9iaiwgZHJhd2VyLnBhcmFtcyAmJiBkcmF3ZXIucGFyYW1zKHJlY29yZCkpLFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIGRyYXdlciksXG4gICAgICAgIClcbiAgICAgICAgLnBpcGUoZmlsdGVyKHcgPT4gdHlwZW9mIHcgIT09ICd1bmRlZmluZWQnKSlcbiAgICAgICAgLnN1YnNjcmliZShyZXMgPT4gdGhpcy5idG5DYWxsYmFjayhyZWNvcmQsIGJ0biwgcmVzKSk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChidG4udHlwZSA9PT0gJ2xpbmsnKSB7XG4gICAgICBjb25zdCBjbGlja1JlcyA9IHRoaXMuYnRuQ2FsbGJhY2socmVjb3JkLCBidG4pO1xuICAgICAgaWYgKHR5cGVvZiBjbGlja1JlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChjbGlja1Jlcyk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuYnRuQ2FsbGJhY2socmVjb3JkLCBidG4pO1xuICB9XG5cbiAgcHJpdmF0ZSBidG5DYWxsYmFjayhyZWNvcmQ6IGFueSwgYnRuOiBTVENvbHVtbkJ1dHRvbiwgbW9kYWw/OiBhbnkpIHtcbiAgICBpZiAoIWJ0bi5jbGljaykgcmV0dXJuO1xuICAgIGlmICh0eXBlb2YgYnRuLmNsaWNrID09PSAnc3RyaW5nJykge1xuICAgICAgc3dpdGNoIChidG4uY2xpY2spIHtcbiAgICAgICAgY2FzZSAnbG9hZCc6XG4gICAgICAgICAgdGhpcy5sb2FkKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3JlbG9hZCc6XG4gICAgICAgICAgdGhpcy5yZWxvYWQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGJ0bi5jbGljayhyZWNvcmQsIG1vZGFsLCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICBfYnRuVGV4dChyZWNvcmQ6IGFueSwgYnRuOiBTVENvbHVtbkJ1dHRvbikge1xuICAgIGlmIChidG4uZm9ybWF0KSByZXR1cm4gYnRuLmZvcm1hdChyZWNvcmQsIGJ0bik7XG4gICAgcmV0dXJuIGJ0bi50ZXh0O1xuICB9XG5cbiAgX3ZhbGlkQnRucyhpdGVtOiBTVERhdGEsIGNvbDogU1RDb2x1bW4pOiBTVENvbHVtbkJ1dHRvbltdIHtcbiAgICByZXR1cm4gY29sLmJ1dHRvbnMuZmlsdGVyKGJ0biA9PiBidG4uaWlmKGl0ZW0sIGJ0biwgY29sKSk7XG4gIH1cblxuICAvLyNlbmRyZWdpb25cblxuICAvLyNyZWdpb24gZXhwb3J0XG5cbiAgLyoqXG4gICAqIMOlwq/CvMOlwofCusOlwr3Ck8OlwonCjcOpwqHCtcOvwrzCjMOnwqHCrsOkwr/CncOlwrfCssOnwrvCj8OmwrPCqMOlwobCjCBgWGxzeE1vZHVsZWBcbiAgICogQHBhcmFtIG5ld0RhdGEgw6nCh8KNw6bClsKww6bCjMKHw6XCrsKaw6bClcKww6bCjcKuw6/CvMKMw6TCvsKLw6XCpsKCw6XCuMKMw6bCnMKbw6XCr8K8w6XCh8K6w6bCicKAw6bCnMKJw6bClcKww6bCjcKuw6nCncKew6XCuMK4w6bCnMKJw6fClMKoXG4gICAqIEBwYXJhbSBvcHQgw6nCosKdw6XCpMKWw6XCj8KCw6bClcKwXG4gICAqL1xuICBleHBvcnQobmV3RGF0YT86IGFueVtdLCBvcHQ/OiBTVEV4cG9ydE9wdGlvbnMpIHtcbiAgICAobmV3RGF0YSA/IG9mKG5ld0RhdGEpIDogb2YodGhpcy5fZGF0YSkpLnN1YnNjcmliZSgocmVzOiBhbnlbXSkgPT5cbiAgICAgIHRoaXMuZXhwb3J0U3J2LmV4cG9ydChcbiAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0LCA8U1RFeHBvcnRPcHRpb25zPntcbiAgICAgICAgICBfZDogcmVzLFxuICAgICAgICAgIF9jOiB0aGlzLl9jb2x1bW5zLFxuICAgICAgICB9KSxcbiAgICAgICksXG4gICAgKTtcbiAgfVxuXG4gIC8vI2VuZHJlZ2lvblxuXG4gIHByaXZhdGUgdXBkYXRlQ29sdW1ucygpIHtcbiAgICB0aGlzLl9jb2x1bW5zID0gdGhpcy5jb2x1bW5Tb3VyY2UucHJvY2Vzcyh0aGlzLmNvbHVtbnMpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDbGFzcygpIHtcbiAgICB1cGRhdGVIb3N0Q2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLnJlbmRlcmVyLCB7XG4gICAgICBbYHN0YF06IHRydWUsXG4gICAgICBbYHN0X19wLSR7dGhpcy5wYWdlLnBsYWNlbWVudH1gXTogdGhpcy5wYWdlLnBsYWNlbWVudCxcbiAgICAgIFtgYW50LXRhYmxlLXJlcF9faGlkZS1oZWFkZXItZm9vdGVyYF06IHRoaXMucmVzcG9uc2l2ZUhpZGVIZWFkZXJGb290ZXIsXG4gICAgfSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5jb2x1bW5Tb3VyY2UucmVzdG9yZUFsbFJlbmRlcih0aGlzLl9jb2x1bW5zKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKFxuICAgIGNoYW5nZXM6IHsgW1AgaW4ga2V5b2YgdGhpc10/OiBTaW1wbGVDaGFuZ2UgfSAmIFNpbXBsZUNoYW5nZXMsXG4gICk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLmNvbHVtbnMpIHtcbiAgICAgIHRoaXMudXBkYXRlQ29sdW1ucygpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5kYXRhICYmIGNoYW5nZXMuZGF0YS5jdXJyZW50VmFsdWUpIHtcbiAgICAgIHRoaXMuX2xvYWQoKTtcbiAgICB9XG4gICAgdGhpcy5zZXRDbGFzcygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZWxvbkkxOG4kLnVuc3Vic2NyaWJlKCk7XG4gICAgaWYgKHRoaXMuaTE4biQpIHRoaXMuaTE4biQudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5nWm9ycm9BbnRkTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XG5cbmltcG9ydCB7IERlbG9uVXRpbE1vZHVsZSB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IERlbG9uQUNMTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2FjbCc7XG5cbmltcG9ydCB7IFNUQ29tcG9uZW50IH0gZnJvbSAnLi90YWJsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU1RSb3dEaXJlY3RpdmUgfSBmcm9tICcuL3RhYmxlLXJvdy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU1RDb25maWcgfSBmcm9tICcuL3RhYmxlLmNvbmZpZyc7XG5cbmNvbnN0IENPTVBPTkVOVFMgPSBbU1RDb21wb25lbnQsIFNUUm93RGlyZWN0aXZlXTtcblxuQE5nTW9kdWxlKHtcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIERlbG9uVXRpbE1vZHVsZSxcbiAgICBEZWxvbkFDTE1vZHVsZSxcbiAgICBOZ1pvcnJvQW50ZE1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbLi4uQ09NUE9ORU5UU10sXG4gIGV4cG9ydHM6IFsuLi5DT01QT05FTlRTXSxcbn0pXG5leHBvcnQgY2xhc3MgU1RNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4geyBuZ01vZHVsZTogU1RNb2R1bGUsIHByb3ZpZGVyczogW1NUQ29uZmlnXSB9O1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O3NCQVd3RCxFQUFFO29CQUNKLEVBQUU7Ozs7Ozs7O0lBRXRELEdBQUcsQ0FBQyxJQUFZLEVBQUUsSUFBWSxFQUFFLEdBQXFCO1FBQ25ELElBQUksQ0FBQyxJQUFJLEtBQUssT0FBTyxHQUFHLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUM7S0FDeEQ7Ozs7O0lBRUQsUUFBUSxDQUFDLElBQVk7UUFDbkIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzFCOzs7OztJQUVELE1BQU0sQ0FBQyxJQUFZO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN4Qjs7O1lBZkYsVUFBVTs7Ozs7OztJQTBCVCxZQUNVLEtBQ1EsTUFBbUI7UUFEM0IsUUFBRyxHQUFILEdBQUc7UUFDSyxXQUFNLEdBQU4sTUFBTSxDQUFhO0tBQ2pDOzs7O0lBRUosUUFBUTtRQUNOLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDL0M7OztZQWZGLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUU7Ozs7WUF4QmpDLFdBQVc7WUFrQ2UsV0FBVyx1QkFBbEMsSUFBSTs7O2lCQVJOLEtBQUssU0FB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