import { Directive, Input, TemplateRef, Injectable, Host, Optional, Inject, Component, Output, EventEmitter, Renderer2, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ACLService, DelonACLModule } from '@delon/acl';
import { ALAIN_I18N_TOKEN, CNCurrencyPipe, DatePipe, YNPipe, _HttpClient, ModalHelper, DrawerHelper } from '@delon/theme';
import { deepCopy, deepGet, toBoolean, updateHostClass, InputBoolean, InputNumber, DelonUtilModule } from '@delon/util';
import { DecimalPipe, DOCUMENT, CommonModule } from '@angular/common';
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
            footerHeight: 55
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
        const { modal, drawer, popTitle } = this.cog;
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
                item["_type"] = 2;
                if (typeof item.popTitle === 'undefined') {
                    item.popTitle = popTitle;
                }
            }
            if (item.children && item.children.length > 0) {
                item["_type"] = 3;
                item.children = this.btnCoerce(item.children);
            }
            if (!item["_type"]) {
                item["_type"] = 1;
            }
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
            res.icon = `anticon anticon-filter`;
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
                    item.width = `${item.selections.length > 0 ? 60 : 50}px`;
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
        if (checkboxCount > 1)
            throw new Error(`[st]: just only one column checkbox`);
        if (radioCount > 1)
            throw new Error(`[st]: just only one column radio`);
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
     */
    constructor(http, currenty, date, yn, number) {
        this.http = http;
        this.currenty = currenty;
        this.date = date;
        this.yn = yn;
        this.number = number;
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
        if (col.format)
            return col.format(item, col);
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
    { type: DecimalPipe, decorators: [{ type: Host }] }
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
        // region: column
        for (let i = 0; i < cc; i++) {
            sheet[`${String.fromCharCode(65 + i)}1`] = {
                t: 's',
                v: colData[i].title,
            };
        }
        // endregion
        // region: content
        for (let i = 0; i < dc; i++) {
            for (let j = 0; j < cc; j++) {
                sheet[`${String.fromCharCode(65 + j)}${i + 2}`] = this._stGet(opt._d[i], colData[j]);
            }
        }
        // endregion
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
     */
    constructor(cd, cog, router, el, renderer, exportSrv, i18nSrv, modalHelper, drawerHelper, doc, columnSource, dataSource) {
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
        this.totalTpl = ``;
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
        const { page } = this.cog;
        /** @type {?} */
        const item = Object.assign({}, deepCopy(page), value);
        const { total } = item;
        if (typeof total === 'string' && total.length) {
            this.totalTpl = total;
        }
        else if (toBoolean(total)) {
            this.totalTpl = `共 {{total}} 条`;
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
        if (e)
            e.stopPropagation();
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
            /** @type {?} */
            const options = Object.assign({}, drawer);
            this.drawerHelper.create(drawer.title, drawer.component, Object.assign(obj, drawer.params && drawer.params(record)), Object.assign({}, drawer))
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
        if (this.i18n$)
            this.i18n$.unsubscribe();
    }
}
STComponent.decorators = [
    { type: Component, args: [{
                selector: 'st',
                template: "<nz-table [nzData]=\"_data\"\r\n  [(nzPageIndex)]=\"pi\" (nzPageIndexChange)=\"_change('pi')\"\r\n  [(nzPageSize)]=\"ps\" (nzPageSizeChange)=\"_change('ps')\"\r\n  [nzTotal]=\"total\"\r\n  [nzShowPagination]=\"_isPagination\"\r\n  [nzFrontPagination]=\"false\"\r\n  [nzBordered]=\"bordered\"\r\n  [nzSize]=\"size\"\r\n  [nzLoading]=\"loading\"\r\n  [nzLoadingDelay]=\"loadingDelay\"\r\n  [nzScroll]=\"scroll\"\r\n  [nzTitle]=\"header\" [nzFooter]=\"footer\" [nzNoResult]=\"noResult\"\r\n  [nzPageSizeOptions]=\"page.pageSizes\"\r\n  [nzShowQuickJumper]=\"page.showQuickJumper\"\r\n  [nzShowSizeChanger]=\"page.showSize\"\r\n  [nzShowTotal]=\"totalTpl\">\r\n  <thead class=\"st__head\">\r\n    <tr>\r\n      <th *ngIf=\"expand\" [nzShowExpand]=\"expand\"></th>\r\n      <th *ngFor=\"let c of _columns; let index=index\" [nzWidth]=\"c.width\" [nzLeft]=\"c._left\" [nzRight]=\"c._right\" [ngClass]=\"c.className\"\r\n        [attr.colspan]=\"c.colSpan\" [attr.data-col]=\"c.indexKey\" [nzShowSort]=\"c._sort.enabled\" [nzSort]=\"c._sort.default\"\r\n        (nzSortChange)=\"sort(c, index, $event)\">\r\n        <ng-template #renderTitle [ngTemplateOutlet]=\"c.__renderTitle\" [ngTemplateOutletContext]=\"{$implicit: c, index: index }\"></ng-template>\r\n        <ng-container *ngIf=\"!c.__renderTitle; else renderTitle\">\r\n          <ng-container [ngSwitch]=\"c.type\">\r\n            <ng-container *ngSwitchCase=\"'checkbox'\">\r\n              <label nz-checkbox class=\"st__checkall\" [(ngModel)]=\"_allChecked\" [nzIndeterminate]=\"_indeterminate\" (ngModelChange)=\"_checkAll()\"></label>\r\n              <nz-dropdown *ngIf=\"c.selections.length\" class=\"st__checkselection\">\r\n                <span nz-dropdown>\r\n                  <i class=\"anticon anticon-down\"></i>\r\n                </span>\r\n                <ul nz-menu>\r\n                  <li nz-menu-item *ngFor=\"let rw of c.selections\" (click)=\"_rowSelection(rw)\" [innerHTML]=\"rw.text\">\r\n                  </li>\r\n                </ul>\r\n              </nz-dropdown>\r\n            </ng-container>\r\n            <ng-container *ngSwitchDefault>\r\n              <span [innerHTML]=\"c.title\"></span>\r\n            </ng-container>\r\n          </ng-container>\r\n          <nz-dropdown *ngIf=\"c.filter\"\r\n            class=\"st__filter\" nzTrigger=\"click\" [hasFilterButton]=\"true\" [nzClickHide]=\"false\"\r\n            [(nzVisible)]=\"c.filter.visible\">\r\n            <i class=\"{{c.filter.icon}}\" [ngClass]=\"{'ant-table-filter-selected': c.filter.default}\" nz-dropdown></i>\r\n            <ul nz-menu>\r\n              <ng-container *ngIf=\"c.filter.multiple\">\r\n                <li nz-menu-item *ngFor=\"let filter of c.filter.menus\">\r\n                  <label nz-checkbox [(ngModel)]=\"filter.checked\">{{filter.text}}</label>\r\n                </li>\r\n              </ng-container>\r\n              <ng-container *ngIf=\"!c.filter.multiple\">\r\n                <li nz-menu-item *ngFor=\"let filter of c.filter.menus\">\r\n                  <label nz-radio [ngModel]=\"filter.checked\" (ngModelChange)=\"_filterRadio(c, filter, $event)\">{{filter.text}}</label>\r\n                </li>\r\n              </ng-container>\r\n            </ul>\r\n            <div class=\"ant-table-filter-dropdown-btns\">\r\n              <a class=\"ant-table-filter-dropdown-link confirm\" (click)=\"c.filter.visible = false\">\r\n                <span (click)=\"_filterConfirm(c)\">{{c.filter.confirmText}}</span>\r\n              </a>\r\n              <a class=\"ant-table-filter-dropdown-link clear\" (click)=\"c.filter.visible = false\">\r\n                <span (click)=\"_filterClear(c)\">{{c.filter.clearText}}</span>\r\n              </a>\r\n            </div>\r\n          </nz-dropdown>\r\n        </ng-container>\r\n      </th>\r\n    </tr>\r\n  </thead>\r\n  <tbody class=\"st__body\">\r\n    <ng-container *ngFor=\"let i of _data; let index=index\">\r\n      <tr [attr.data-index]=\"index\" (click)=\"_rowClick($event, i, index)\">\r\n        <td *ngIf=\"expand\" [nzShowExpand]=\"expand\" [(nzExpand)]=\"i.expand\"></td>\r\n        <td *ngFor=\"let c of _columns; let cIdx=index\" [nzLeft]=\"c._left\" [nzRight]=\"c._right\" [nzCheckbox]=\"c.type === 'checkbox'\" [ngClass]=\"c.className\"\r\n          [attr.colspan]=\"c.colSpan\">\r\n          <span class=\"ant-table-rep__title\" [innerHTML]=\"c.title\"></span>\r\n          <ng-template #render [ngTemplateOutlet]=\"c.__render\" [ngTemplateOutletContext]=\"{$implicit: i, index: index, column: c }\"></ng-template>\r\n          <ng-container *ngIf=\"!c.__render; else render\">\r\n            <ng-container *ngIf=\"c.index\" [ngSwitch]=\"c.type\">\r\n              <ng-container *ngSwitchCase=\"'checkbox'\">\r\n                <label nz-checkbox [nzDisabled]=\"i.disabled\" [ngModel]=\"i.checked\" (ngModelChange)=\"_checkSelection(i, $event)\"></label>\r\n              </ng-container>\r\n              <ng-container *ngSwitchCase=\"'radio'\">\r\n                <label nz-radio [nzDisabled]=\"i.disabled\" [ngModel]=\"i.checked\" (ngModelChange)=\"_refRadio($event, i)\"></label>\r\n              </ng-container>\r\n              <ng-container *ngSwitchCase=\"'link'\">\r\n                <a (click)=\"_click($event, i, c)\" [innerHTML]=\"i._values[cIdx]\"></a>\r\n              </ng-container>\r\n              <ng-container *ngSwitchCase=\"'tag'\">\r\n                <nz-tag [nzColor]=\"c.tag[i._values[cIdx]].color\">{{c.tag[i._values[cIdx]].text || i._values[cIdx]}}</nz-tag>\r\n              </ng-container>\r\n              <ng-container *ngSwitchCase=\"'badge'\">\r\n                <nz-badge [nzStatus]=\"c.badge[i._values[cIdx]].color\" [nzText]=\"c.badge[i._values[cIdx]].text || i._values[cIdx]\"></nz-badge>\r\n              </ng-container>\r\n              <span *ngSwitchDefault [innerHTML]=\"i._values[cIdx]\"></span>\r\n            </ng-container>\r\n            <ng-container *ngFor=\"let btn of c.buttons; let last=last\">\r\n              <ng-container *ngIf=\"btn.iif(i, btn, c)\" [ngSwitch]=\"btn._type\">\r\n                <ng-container *ngSwitchCase=\"2\">\r\n                  <nz-popconfirm [nzTitle]=\"btn.popTitle\" (nzOnConfirm)=\"_btnClick($event, i, btn)\">\r\n                    <a nz-popconfirm [innerHTML]=\"_btnText(i, btn)\"></a>\r\n                  </nz-popconfirm>\r\n                </ng-container>\r\n                <ng-container *ngSwitchCase=\"3\">\r\n                  <nz-dropdown>\r\n                    <a class=\"ant-dropdown-link\" nz-dropdown>\r\n                      <span [innerHTML]=\"_btnText(i, btn)\"></span>\r\n                      <i class=\"anticon anticon-down\"></i>\r\n                    </a>\r\n                    <ul nz-menu>\r\n                      <ng-container *ngFor=\"let subBtn of btn.children\">\r\n                        <li nz-menu-item *ngIf=\"subBtn.iif(i, subBtn, c)\">\r\n                          <nz-popconfirm *ngIf=\"subBtn._type === 2\" [nzTitle]=\"subBtn.popTitle\" (nzOnConfirm)=\"_btnClick($event, i, subBtn)\">\r\n                            <span nz-popconfirm [innerHTML]=\"_btnText(i, subBtn)\"></span>\r\n                          </nz-popconfirm>\r\n                          <span *ngIf=\"subBtn._type !== 2\" (click)=\"_btnClick($event, i, subBtn)\" [innerHTML]=\"_btnText(i, subBtn)\"></span>\r\n                        </li>\r\n                      </ng-container>\r\n                    </ul>\r\n                  </nz-dropdown>\r\n                </ng-container>\r\n                <a *ngSwitchDefault (click)=\"_btnClick($event, i, btn)\" [innerHTML]=\"_btnText(i, btn)\"></a>\r\n                <nz-divider *ngIf=\"!last\" nzType=\"vertical\"></nz-divider>\r\n              </ng-container>\r\n            </ng-container>\r\n            <ng-template [ngIf]=\"!c.__renderExpanded\" [ngTemplateOutlet]=\"c.__renderExpanded\" [ngTemplateOutletContext]=\"{$implicit: i, index: index, column: c }\"></ng-template>\r\n          </ng-container>\r\n        </td>\r\n      </tr>\r\n      <tr [nzExpand]=\"i.expand\">\r\n        <td></td>\r\n        <td [attr.colspan]=\"_columns.length\">\r\n          <ng-template [ngTemplateOutlet]=\"expand\" [ngTemplateOutletContext]=\"{$implicit: i, index: index }\"></ng-template>\r\n        </td>\r\n      </tr>\r\n    </ng-container>\r\n    <ng-template [ngIf]=\"!loading\" [ngTemplateOutlet]=\"body\"></ng-template>\r\n  </tbody>\r\n  <ng-template #totalTpl let-range=\"range\" let-total>{{ renderTotal(total, range) }}</ng-template>\r\n</nz-table>\r\n",
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
    { type: STDataSource }
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BkZWxvbi9hYmMvdGFibGUvdGFibGUtcm93LmRpcmVjdGl2ZS50cyIsIm5nOi8vQGRlbG9uL2FiYy90YWJsZS90YWJsZS5jb25maWcudHMiLCJuZzovL0BkZWxvbi9hYmMvdGFibGUvdGFibGUtY29sdW1uLXNvdXJjZS50cyIsIm5nOi8vQGRlbG9uL2FiYy90YWJsZS90YWJsZS1kYXRhLXNvdXJjZS50cyIsIm5nOi8vQGRlbG9uL2FiYy90YWJsZS90YWJsZS1leHBvcnQudHMiLCJuZzovL0BkZWxvbi9hYmMvdGFibGUvdGFibGUuY29tcG9uZW50LnRzIiwibmc6Ly9AZGVsb24vYWJjL3RhYmxlL3RhYmxlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIERpcmVjdGl2ZSxcclxuICBJbnB1dCxcclxuICBUZW1wbGF0ZVJlZixcclxuICBPbkluaXQsXHJcbiAgSW5qZWN0YWJsZSxcclxuICBIb3N0LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU1RSb3dTb3VyY2Uge1xyXG4gIHByaXZhdGUgdGl0bGVzOiB7IFtrZXk6IHN0cmluZ106IFRlbXBsYXRlUmVmPGFueT4gfSA9IHt9O1xyXG4gIHByaXZhdGUgcm93czogeyBba2V5OiBzdHJpbmddOiBUZW1wbGF0ZVJlZjxhbnk+IH0gPSB7fTtcclxuXHJcbiAgYWRkKHR5cGU6IHN0cmluZywgcGF0aDogc3RyaW5nLCByZWY6IFRlbXBsYXRlUmVmPGFueT4pIHtcclxuICAgIHRoaXNbdHlwZSA9PT0gJ3RpdGxlJyA/ICd0aXRsZXMnIDogJ3Jvd3MnXVtwYXRoXSA9IHJlZjtcclxuICB9XHJcblxyXG4gIGdldFRpdGxlKHBhdGg6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMudGl0bGVzW3BhdGhdO1xyXG4gIH1cclxuXHJcbiAgZ2V0Um93KHBhdGg6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMucm93c1twYXRoXTtcclxuICB9XHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tzdC1yb3ddJyB9KVxyXG5leHBvcnQgY2xhc3MgU1RSb3dEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgnc3Qtcm93JylcclxuICBpZDogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHR5cGU6ICd0aXRsZSc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByZWY6IFRlbXBsYXRlUmVmPGFueT4sXHJcbiAgICBASG9zdCgpIHByaXZhdGUgc291cmNlOiBTVFJvd1NvdXJjZSxcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zb3VyY2UuYWRkKHRoaXMudHlwZSwgdGhpcy5pZCwgdGhpcy5yZWYpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIFNUTXVsdGlTb3J0LFxyXG4gIFNUUmVxLFxyXG4gIFNUUmVzLFxyXG4gIFNUUGFnZSxcclxuICBTVENvbHVtbkJ1dHRvbk1vZGFsQ29uZmlnLFxyXG4gIFNUQ29sdW1uQnV0dG9uRHJhd2VyQ29uZmlnLFxyXG59IGZyb20gJy4vdGFibGUuaW50ZXJmYWNlcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgU1RDb25maWcge1xyXG4gIC8qKlxyXG4gICAqIMOowrXCt8OlwqfCi8OpwqHCtcOnwqDCgcOvwrzCjMOpwrvCmMOowq7CpMOkwrjCusOvwrzCmmAxYFxyXG4gICAqL1xyXG4gIHBpPzogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIMOmwq/Cj8OpwqHCtcOmwpXCsMOpwofCj8OvwrzCjMOlwr3Ck8Oowq7CvsOnwr3CrsOkwrjCuiBgMGAgw6jCocKow6fCpMK6w6TCuMKNw6XCiMKGw6nCocK1w6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYDEwYFxyXG4gICAqL1xyXG4gIHBzPzogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIMOmwpjCr8OlwpDCpsOmwpjCvsOnwqTCusOowr7CucOmwqHChlxyXG4gICAqL1xyXG4gIGJvcmRlcmVkPzogYm9vbGVhbjtcclxuICAvKipcclxuICAgKiB0YWJsZcOlwqTCp8OlwrDCj1xyXG4gICAqL1xyXG4gIHNpemU/OiAnc21hbGwnIHwgJ21pZGRsZScgfCAnZGVmYXVsdCcgPSAnZGVmYXVsdCc7XHJcbiAgLyoqXHJcbiAgICogw6bCmMKvw6XCkMKmw6nCmsKQw6jCl8KPw6XCpMK0w6XCksKMw6XCsMK+w6/CvMKMw6XCvcKTw6XCsMKPw6XCscKPw6XCucKVw6TCuMKLw6bCicKNw6bCmMK+w6fCpMK6w6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYGZhbHNlYFxyXG4gICAqL1xyXG4gIHJlc3BvbnNpdmVIaWRlSGVhZGVyRm9vdGVyPyA9IGZhbHNlO1xyXG4gIC8qKiDDqMKvwrfDpsKxwoLDpMK9wpPDqcKFwo3Dp8K9wq4gKi9cclxuICByZXE/OiBTVFJlcSA9IHtcclxuICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICBhbGxJbkJvZHk6IGZhbHNlLFxyXG4gICAgcmVOYW1lOiB7IHBpOiAncGknLCBwczogJ3BzJyB9LFxyXG4gIH07XHJcbiAgLyoqIMOowr/ClMOlwpvCnsOkwr3Ck8OpwoXCjcOnwr3CriAqL1xyXG4gIHJlcz86IFNUUmVzID0ge1xyXG4gICAgcmVOYW1lOiB7IGxpc3Q6IFsnbGlzdCddLCB0b3RhbDogWyd0b3RhbCddIH0sXHJcbiAgfTtcclxuICAvKiogw6jCv8KUw6XCm8Kew6TCvcKTw6nChcKNw6fCvcKuICovXHJcbiAgcGFnZT86IFNUUGFnZSA9IHtcclxuICAgIGZyb250OiB0cnVlLFxyXG4gICAgemVyb0luZGV4ZWQ6IGZhbHNlLFxyXG4gICAgcGxhY2VtZW50OiAncmlnaHQnLFxyXG4gICAgc2hvdzogdHJ1ZSxcclxuICAgIHNob3dTaXplOiBmYWxzZSxcclxuICAgIHBhZ2VTaXplczogWzEwLCAyMCwgMzAsIDQwLCA1MF0sXHJcbiAgICBzaG93UXVpY2tKdW1wZXI6IGZhbHNlLFxyXG4gICAgdG90YWw6IHRydWUsXHJcbiAgICBpbmRleFJlc2V0OiB0cnVlLFxyXG4gICAgdG9Ub3A6IHRydWUsXHJcbiAgICB0b1RvcE9mZnNldDogMTAwLFxyXG4gIH07XHJcbiAgLyoqXHJcbiAgICogw6nCh8KNw6XCkcK9w6XCkMKNw6bCjsKSw6XCusKPw6XCgMK8w6/CvMKMYGNvbHVtbnNgIMOnwprChMOpwofCjcOlwpHCvcOlwpDCjcOpwqvCmMOkwrrCjsOlwrHCnsOmwoDCp1xyXG4gICAqL1xyXG4gIHNvcnRSZU5hbWU/OiB7IGFzY2VuZD86IHN0cmluZzsgZGVzY2VuZD86IHN0cmluZyB9O1xyXG4gIC8qKlxyXG4gICAqIMOmwpjCr8OlwpDCpsOlwqTCmsOmwo7CksOlwrrCj8OvwrzCjMOlwr3CkyBgc29ydGAgw6XCpMKaw6TCuMKqw6fCm8K4w6XCkMKMw6XCgMK8w6bCl8K2w6jCh8Kqw6XCisKow6XCkMKIw6XCucK2w6/CvMKMw6XCu8K6w6jCrsKuw6XCkMKOw6fCq8Kvw6bClMKvw6bCjMKBw6bCl8K2w6TCvcK/w6fClMKoXHJcbiAgICovXHJcbiAgbXVsdGlTb3J0PzogYm9vbGVhbiB8IFNUTXVsdGlTb3J0ID0gZmFsc2U7XHJcbiAgLyoqXHJcbiAgICogw6bCjMKJw6nCksKuw6bCqMKhw6bCgMKBw6bCocKGw6nChcKNw6fCvcKuXHJcbiAgICovXHJcbiAgbW9kYWw/OiBTVENvbHVtbkJ1dHRvbk1vZGFsQ29uZmlnID0ge1xyXG4gICAgcGFyYW1zTmFtZTogJ3JlY29yZCcsXHJcbiAgICBzaXplOiAnbGcnLFxyXG4gICAgZXhhY3Q6IHRydWUsXHJcbiAgfTtcclxuICAvKipcclxuICAgKiDDpsKMwonDqcKSwq7DpsKKwr3DpcKxwonDqcKFwo3Dp8K9wq5cclxuICAgKi9cclxuICBkcmF3ZXI/OiBTVENvbHVtbkJ1dHRvbkRyYXdlckNvbmZpZyA9IHtcclxuICAgIHBhcmFtc05hbWU6ICdyZWNvcmQnLFxyXG4gICAgc2l6ZTogJ21kJyxcclxuICAgIGZvb3RlcjogdHJ1ZSxcclxuICAgIGZvb3RlckhlaWdodDogNTVcclxuICB9O1xyXG4gIC8qKlxyXG4gICAqIMOmwrDClMOmwrPCocOnwqHCrsOowq7CpMOmwqHChsOlwobChcOlwq7CuVxyXG4gICAqL1xyXG4gIHBvcFRpdGxlPyA9ICfDp8Khwq7DqMKuwqTDpcKIwqDDqcKZwqTDpcKQwpfDr8K8wp8nO1xyXG4gIC8qKlxyXG4gICAqIMOowqHCjMOlwo3ClcOlwofCu8OlwqTCmsOlwrDCkcOmwpfCtsOpwpXCv8OkwrnCi8OnwrHCu8OkwrjCusOlwo/CjMOlwofCu8OvwrzCiMOlwo3ClcOkwr3CjcOvwrzCmsOmwq/Cq8OnwqfCksOvwrzCicOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmAyMDBgXHJcbiAgICovXHJcbiAgcm93Q2xpY2tUaW1lPyA9IDIwMDtcclxuICAvKipcclxuICAgKiDDqMK/wofDpsK7wqTDpsKMwonDqcKSwq7Dp8Khwq7DqMKuwqTDpsKWwofDpsKcwqzDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgw6fCocKuw6jCrsKkYFxyXG4gICAqL1xyXG4gIGZpbHRlckNvbmZpcm1UZXh0PyA9ICfDp8Khwq7DqMKuwqQnO1xyXG4gIC8qKlxyXG4gICAqIMOowr/Ch8OmwrvCpMOmwozCicOpwpLCrsOpwofCjcOnwr3CrsOmwpbCh8OmwpzCrMOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmDDqcKHwo3Dp8K9wq5gXHJcbiAgICovXHJcbiAgZmlsdGVyQ2xlYXJUZXh0PyA9ICfDqcKHwo3Dp8K9wq4nO1xyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsLCBJbmplY3QsIEhvc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQUNMU2VydmljZSB9IGZyb20gJ0BkZWxvbi9hY2wnO1xyXG5pbXBvcnQgeyBBTEFJTl9JMThOX1RPS0VOLCBBbGFpbkkxOE5TZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcclxuaW1wb3J0IHsgZGVlcENvcHkgfSBmcm9tICdAZGVsb24vdXRpbCc7XHJcblxyXG5pbXBvcnQge1xyXG4gIFNUQ29sdW1uLFxyXG4gIFNUQ29sdW1uQnV0dG9uLFxyXG4gIFNUQ29sdW1uU29ydCxcclxuICBTVENvbHVtbkZpbHRlcixcclxufSBmcm9tICcuL3RhYmxlLmludGVyZmFjZXMnO1xyXG5pbXBvcnQgeyBTVFJvd1NvdXJjZSB9IGZyb20gJy4vdGFibGUtcm93LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFNUQ29uZmlnIH0gZnJvbSAnLi90YWJsZS5jb25maWcnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTVFNvcnRNYXAgZXh0ZW5kcyBTVENvbHVtblNvcnQge1xyXG4gIC8qKiDDpsKYwq/DpcKQwqbDpcKQwq/Dp8KUwqjDpsKOwpLDpcK6wo8gKi9cclxuICBlbmFibGVkPzogYm9vbGVhbjtcclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU1RDb2x1bW5Tb3VyY2Uge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQEhvc3QoKSBwcml2YXRlIHJvd1NvdXJjZTogU1RSb3dTb3VyY2UsXHJcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGFjbDogQUNMU2VydmljZSxcclxuICAgIEBPcHRpb25hbCgpXHJcbiAgICBASW5qZWN0KEFMQUlOX0kxOE5fVE9LRU4pXHJcbiAgICBwcml2YXRlIGkxOG5TcnY6IEFsYWluSTE4TlNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGNvZzogU1RDb25maWcsXHJcbiAgKSB7fVxyXG5cclxuICBwcml2YXRlIGJ0bkNvZXJjZShsaXN0OiBTVENvbHVtbkJ1dHRvbltdKTogU1RDb2x1bW5CdXR0b25bXSB7XHJcbiAgICBpZiAoIWxpc3QpIHJldHVybiBbXTtcclxuICAgIGNvbnN0IHJldDogU1RDb2x1bW5CdXR0b25bXSA9IFtdO1xyXG4gICAgY29uc3QgeyBtb2RhbCwgZHJhd2VyLCBwb3BUaXRsZSB9ID0gdGhpcy5jb2c7XHJcblxyXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGxpc3QpIHtcclxuICAgICAgaWYgKHRoaXMuYWNsICYmIGl0ZW0uYWNsICYmICF0aGlzLmFjbC5jYW4oaXRlbS5hY2wpKSB7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdtb2RhbCcgfHwgaXRlbS50eXBlID09PSAnc3RhdGljJykge1xyXG4gICAgICAgIC8vIGNvbXBhdGlibGVcclxuICAgICAgICBpZiAoaXRlbS5jb21wb25lbnQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgaXRlbS5tb2RhbCA9IHtcclxuICAgICAgICAgICAgY29tcG9uZW50OiBpdGVtLmNvbXBvbmVudCxcclxuICAgICAgICAgICAgcGFyYW1zOiBpdGVtLnBhcmFtcyxcclxuICAgICAgICAgICAgcGFyYW1zTmFtZTogaXRlbS5wYXJhbU5hbWUgfHwgbW9kYWwucGFyYW1zTmFtZSxcclxuICAgICAgICAgICAgc2l6ZTogaXRlbS5zaXplIHx8IG1vZGFsLnNpemUsXHJcbiAgICAgICAgICAgIG1vZGFsT3B0aW9uczogaXRlbS5tb2RhbE9wdGlvbnMgfHwgbW9kYWwubW9kYWxPcHRpb25zLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGl0ZW0ubW9kYWwgPT0gbnVsbCB8fCBpdGVtLm1vZGFsLmNvbXBvbmVudCA9PSBudWxsKSB7XHJcbiAgICAgICAgICBjb25zb2xlLndhcm4oYFtzdF0gU2hvdWxkIHNwZWNpZnkgbW9kYWwgcGFyYW1ldGVyYCk7XHJcbiAgICAgICAgICBpdGVtLnR5cGUgPSAnbm9uZSc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGl0ZW0ubW9kYWwgPSBPYmplY3QuYXNzaWduKHt9LCBtb2RhbCwgaXRlbS5tb2RhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoaXRlbS50eXBlID09PSAnZHJhd2VyJykge1xyXG4gICAgICAgIGlmIChpdGVtLmRyYXdlciA9PSBudWxsIHx8IGl0ZW0uZHJhd2VyLmNvbXBvbmVudCA9PSBudWxsKSB7XHJcbiAgICAgICAgICBjb25zb2xlLndhcm4oYFtzdF0gU2hvdWxkIHNwZWNpZnkgZHJhd2VyIHBhcmFtZXRlcmApO1xyXG4gICAgICAgICAgaXRlbS50eXBlID0gJ25vbmUnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpdGVtLmRyYXdlciA9IE9iamVjdC5hc3NpZ24oe30sIGRyYXdlciwgaXRlbS5kcmF3ZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ2RlbCcgJiYgdHlwZW9mIGl0ZW0ucG9wID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIGl0ZW0ucG9wID0gdHJ1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGl0ZW0ucG9wID09PSB0cnVlKSB7XHJcbiAgICAgICAgaXRlbS5fdHlwZSA9IDI7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtLnBvcFRpdGxlID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgaXRlbS5wb3BUaXRsZSA9IHBvcFRpdGxlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAoaXRlbS5jaGlsZHJlbiAmJiBpdGVtLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBpdGVtLl90eXBlID0gMztcclxuICAgICAgICBpdGVtLmNoaWxkcmVuID0gdGhpcy5idG5Db2VyY2UoaXRlbS5jaGlsZHJlbik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFpdGVtLl90eXBlKSB7XHJcbiAgICAgICAgaXRlbS5fdHlwZSA9IDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIGkxOG5cclxuICAgICAgaWYgKGl0ZW0uaTE4biAmJiB0aGlzLmkxOG5TcnYpIHtcclxuICAgICAgICBpdGVtLnRleHQgPSB0aGlzLmkxOG5TcnYuZmFueWkoaXRlbS5pMThuKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0LnB1c2goaXRlbSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmJ0bkNvZXJjZUlmKHJldCk7XHJcbiAgICByZXR1cm4gcmV0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBidG5Db2VyY2VJZihsaXN0OiBTVENvbHVtbkJ1dHRvbltdKSB7XHJcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgbGlzdCkge1xyXG4gICAgICBpZiAoIWl0ZW0uaWlmKSBpdGVtLmlpZiA9ICgpID0+IHRydWU7XHJcbiAgICAgIGlmICghaXRlbS5jaGlsZHJlbikge1xyXG4gICAgICAgIGl0ZW0uY2hpbGRyZW4gPSBbXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmJ0bkNvZXJjZUlmKGl0ZW0uY2hpbGRyZW4pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZpeGVkQ29lcmNlKGxpc3Q6IFNUQ29sdW1uW10pIHtcclxuICAgIGNvbnN0IGNvdW50UmVkdWNlID0gKGE6IG51bWJlciwgYjogU1RDb2x1bW4pID0+XHJcbiAgICAgIGEgKyArYi53aWR0aC50b1N0cmluZygpLnJlcGxhY2UoJ3B4JywgJycpO1xyXG4gICAgLy8gbGVmdCB3aWR0aFxyXG4gICAgbGlzdFxyXG4gICAgICAuZmlsdGVyKHcgPT4gdy5maXhlZCAmJiB3LmZpeGVkID09PSAnbGVmdCcgJiYgdy53aWR0aClcclxuICAgICAgLmZvckVhY2goXHJcbiAgICAgICAgKGl0ZW0sIGlkeCkgPT5cclxuICAgICAgICAgIChpdGVtLl9sZWZ0ID0gbGlzdC5zbGljZSgwLCBpZHgpLnJlZHVjZShjb3VudFJlZHVjZSwgMCkgKyAncHgnKSxcclxuICAgICAgKTtcclxuICAgIC8vIHJpZ2h0IHdpZHRoXHJcbiAgICBsaXN0XHJcbiAgICAgIC5maWx0ZXIodyA9PiB3LmZpeGVkICYmIHcuZml4ZWQgPT09ICdyaWdodCcgJiYgdy53aWR0aClcclxuICAgICAgLnJldmVyc2UoKVxyXG4gICAgICAuZm9yRWFjaChcclxuICAgICAgICAoaXRlbSwgaWR4KSA9PlxyXG4gICAgICAgICAgKGl0ZW0uX3JpZ2h0ID1cclxuICAgICAgICAgICAgKGlkeCA+IDAgPyBsaXN0LnNsaWNlKC1pZHgpLnJlZHVjZShjb3VudFJlZHVjZSwgMCkgOiAwKSArICdweCcpLFxyXG4gICAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzb3J0Q29lcmNlKGl0ZW06IFNUQ29sdW1uKTogU1RTb3J0TWFwIHtcclxuICAgIC8vIGNvbXBhdGlibGVcclxuICAgIGlmIChpdGVtLnNvcnRlciAmJiB0eXBlb2YgaXRlbS5zb3J0ZXIgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgIGRlZmF1bHQ6IGl0ZW0uc29ydCBhcyBhbnksXHJcbiAgICAgICAgY29tcGFyZTogaXRlbS5zb3J0ZXIsXHJcbiAgICAgICAga2V5OiBpdGVtLnNvcnRLZXkgfHwgaXRlbS5pbmRleEtleSxcclxuICAgICAgICByZU5hbWU6IGl0ZW0uc29ydFJlTmFtZSxcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZW9mIGl0ZW0uc29ydCA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgcmV0dXJuIHsgZW5hYmxlZDogZmFsc2UgfTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgcmVzOiBTVFNvcnRNYXAgPSB7fTtcclxuXHJcbiAgICBpZiAodHlwZW9mIGl0ZW0uc29ydCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgcmVzLmtleSA9IGl0ZW0uc29ydDtcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGl0ZW0uc29ydCAhPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgIHJlcyA9IGl0ZW0uc29ydDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXJlcy5rZXkpIHtcclxuICAgICAgcmVzLmtleSA9IGl0ZW0uaW5kZXhLZXk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzLmVuYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgIHJldHVybiByZXM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZpbHRlckNvZXJjZShpdGVtOiBTVENvbHVtbik6IFNUQ29sdW1uRmlsdGVyIHtcclxuICAgIGxldCByZXM6IFNUQ29sdW1uRmlsdGVyID0gbnVsbDtcclxuICAgIC8vIGNvbXBhdGlibGVcclxuICAgIGlmIChpdGVtLmZpbHRlcnMgJiYgaXRlbS5maWx0ZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgcmVzID0ge1xyXG4gICAgICAgIGNvbmZpcm1UZXh0OiBpdGVtLmZpbHRlckNvbmZpcm1UZXh0LFxyXG4gICAgICAgIGNsZWFyVGV4dDogaXRlbS5maWx0ZXJDbGVhclRleHQsXHJcbiAgICAgICAgZGVmYXVsdDogaXRlbS5maWx0ZXJlZCxcclxuICAgICAgICBmbjogaXRlbS5maWx0ZXIgYXMgYW55LFxyXG4gICAgICAgIGljb246IGl0ZW0uZmlsdGVySWNvbixcclxuICAgICAgICBrZXk6IGl0ZW0uZmlsdGVyS2V5IHx8IGl0ZW0uaW5kZXhLZXksXHJcbiAgICAgICAgbWVudXM6IGl0ZW0uZmlsdGVycyxcclxuICAgICAgICBtdWx0aXBsZTogaXRlbS5maWx0ZXJNdWx0aXBsZSxcclxuICAgICAgICByZU5hbWU6IGl0ZW0uZmlsdGVyUmVOYW1lLFxyXG4gICAgICB9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzID0gaXRlbS5maWx0ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHJlcyA9PSBudWxsIHx8IHJlcy5tZW51cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiByZXMubXVsdGlwbGUgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIHJlcy5tdWx0aXBsZSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAoIXJlcy5jb25maXJtVGV4dCkge1xyXG4gICAgICByZXMuY29uZmlybVRleHQgPSB0aGlzLmNvZy5maWx0ZXJDb25maXJtVGV4dDtcclxuICAgIH1cclxuICAgIGlmICghcmVzLmNsZWFyVGV4dCkge1xyXG4gICAgICByZXMuY2xlYXJUZXh0ID0gdGhpcy5jb2cuZmlsdGVyQ2xlYXJUZXh0O1xyXG4gICAgfVxyXG4gICAgaWYgKCFyZXMuaWNvbikge1xyXG4gICAgICByZXMuaWNvbiA9IGBhbnRpY29uIGFudGljb24tZmlsdGVyYDtcclxuICAgIH1cclxuICAgIGlmICghcmVzLmtleSkge1xyXG4gICAgICByZXMua2V5ID0gaXRlbS5pbmRleEtleTtcclxuICAgIH1cclxuXHJcbiAgICByZXMuZGVmYXVsdCA9IHJlcy5tZW51cy5maW5kSW5kZXgodyA9PiB3LmNoZWNrZWQpICE9PSAtMTtcclxuXHJcbiAgICBpZiAodGhpcy5hY2wpIHtcclxuICAgICAgcmVzLm1lbnVzID0gcmVzLm1lbnVzLmZpbHRlcih3ID0+IHRoaXMuYWNsLmNhbih3LmFjbCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChyZXMubWVudXMubGVuZ3RoIDw9IDApIHtcclxuICAgICAgcmVzID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZXN0b3JlUmVuZGVyKGl0ZW06IFNUQ29sdW1uKSB7XHJcbiAgICBpZiAoaXRlbS5yZW5kZXJUaXRsZSkge1xyXG4gICAgICBpdGVtLl9fcmVuZGVyVGl0bGUgPSB0aGlzLnJvd1NvdXJjZS5nZXRUaXRsZShpdGVtLnJlbmRlclRpdGxlKTtcclxuICAgIH1cclxuICAgIGlmIChpdGVtLnJlbmRlcikge1xyXG4gICAgICBpdGVtLl9fcmVuZGVyID0gdGhpcy5yb3dTb3VyY2UuZ2V0Um93KGl0ZW0ucmVuZGVyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByb2Nlc3MobGlzdDogU1RDb2x1bW5bXSk6IFNUQ29sdW1uW10ge1xyXG4gICAgaWYgKCFsaXN0IHx8IGxpc3QubGVuZ3RoID09PSAwKVxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFtzdF06IHRoZSBjb2x1bW5zIHByb3BlcnR5IG11c2UgYmUgZGVmaW5lIWApO1xyXG5cclxuICAgIGxldCBjaGVja2JveENvdW50ID0gMDtcclxuICAgIGxldCByYWRpb0NvdW50ID0gMDtcclxuICAgIGNvbnN0IGNvbHVtbnM6IFNUQ29sdW1uW10gPSBbXTtcclxuICAgIGNvbnN0IGNvcHlDb2x1bWVucyA9IGRlZXBDb3B5KGxpc3QpIGFzIFNUQ29sdW1uW107XHJcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgY29weUNvbHVtZW5zKSB7XHJcbiAgICAgIGlmICh0aGlzLmFjbCAmJiBpdGVtLmFjbCAmJiAhdGhpcy5hY2wuY2FuKGl0ZW0uYWNsKSkge1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIGluZGV4XHJcbiAgICAgIGlmIChpdGVtLmluZGV4KSB7XHJcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGl0ZW0uaW5kZXgpKSB7XHJcbiAgICAgICAgICBpdGVtLmluZGV4ID0gaXRlbS5pbmRleC5zcGxpdCgnLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpdGVtLmluZGV4S2V5ID0gaXRlbS5pbmRleC5qb2luKCcuJyk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gdGl0bGVcclxuICAgICAgaWYgKGl0ZW0uaTE4biAmJiB0aGlzLmkxOG5TcnYpIHtcclxuICAgICAgICBpdGVtLnRpdGxlID0gdGhpcy5pMThuU3J2LmZhbnlpKGl0ZW0uaTE4bik7XHJcbiAgICAgIH1cclxuICAgICAgLy8gY2hlY2tib3hcclxuICAgICAgaWYgKGl0ZW0uc2VsZWN0aW9ucyA9PSBudWxsKSB7XHJcbiAgICAgICAgaXRlbS5zZWxlY3Rpb25zID0gW107XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ2NoZWNrYm94Jykge1xyXG4gICAgICAgICsrY2hlY2tib3hDb3VudDtcclxuICAgICAgICBpZiAoIWl0ZW0ud2lkdGgpIHtcclxuICAgICAgICAgIGl0ZW0ud2lkdGggPSBgJHtpdGVtLnNlbGVjdGlvbnMubGVuZ3RoID4gMCA/IDYwIDogNTB9cHhgO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5hY2wpIHtcclxuICAgICAgICBpdGVtLnNlbGVjdGlvbnMgPSBpdGVtLnNlbGVjdGlvbnMuZmlsdGVyKHcgPT4gdGhpcy5hY2wuY2FuKHcuYWNsKSk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gcmFkaW9cclxuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ3JhZGlvJykge1xyXG4gICAgICAgICsrcmFkaW9Db3VudDtcclxuICAgICAgICBpdGVtLnNlbGVjdGlvbnMgPSBbXTtcclxuICAgICAgICBpZiAoIWl0ZW0ud2lkdGgpIHtcclxuICAgICAgICAgIGl0ZW0ud2lkdGggPSAnNTBweCc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC8vIHR5cGVzXHJcbiAgICAgIGlmIChpdGVtLnR5cGUgPT09ICd5bicpIHtcclxuICAgICAgICBpdGVtLnluID0gT2JqZWN0LmFzc2lnbih7IHRydXRoOiB0cnVlIH0sIGl0ZW0ueW4pO1xyXG4gICAgICAgIC8vIGNvbXBhdGlibGVcclxuICAgICAgICBpZiAoaXRlbS55blRydXRoICE9IG51bGwpIGl0ZW0ueW4udHJ1dGggPSBpdGVtLnluVHJ1dGg7XHJcbiAgICAgICAgaWYgKGl0ZW0ueW5ZZXMgIT0gbnVsbCkgaXRlbS55bi55ZXMgPSBpdGVtLnluWWVzO1xyXG4gICAgICAgIGlmIChpdGVtLnluTm8gIT0gbnVsbCkgaXRlbS55bi5ubyA9IGl0ZW0ueW5ObztcclxuICAgICAgfVxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgKGl0ZW0udHlwZSA9PT0gJ2xpbmsnICYmIHR5cGVvZiBpdGVtLmNsaWNrICE9PSAnZnVuY3Rpb24nKSB8fFxyXG4gICAgICAgIChpdGVtLnR5cGUgPT09ICdiYWRnZScgJiYgaXRlbS5iYWRnZSA9PSBudWxsKSB8fFxyXG4gICAgICAgIChpdGVtLnR5cGUgPT09ICd0YWcnICYmIGl0ZW0udGFnID09IG51bGwpXHJcbiAgICAgICkge1xyXG4gICAgICAgIChpdGVtIGFzIGFueSkudHlwZSA9ICcnO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIGNsYXNzTmFtZVxyXG4gICAgICBpZiAoIWl0ZW0uY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgaXRlbS5jbGFzc05hbWUgPSB7XHJcbiAgICAgICAgICBudW1iZXI6ICd0ZXh0LXJpZ2h0JyxcclxuICAgICAgICAgIGN1cnJlbmN5OiAndGV4dC1yaWdodCcsXHJcbiAgICAgICAgICBkYXRlOiAndGV4dC1jZW50ZXInLFxyXG4gICAgICAgIH1baXRlbS50eXBlXTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gc29ydGVyXHJcbiAgICAgIGl0ZW0uX3NvcnQgPSB0aGlzLnNvcnRDb2VyY2UoaXRlbSk7XHJcbiAgICAgIC8vIGZpbHRlclxyXG4gICAgICBpdGVtLmZpbHRlciA9IHRoaXMuZmlsdGVyQ29lcmNlKGl0ZW0pO1xyXG4gICAgICAvLyBidXR0b25zXHJcbiAgICAgIGl0ZW0uYnV0dG9ucyA9IHRoaXMuYnRuQ29lcmNlKGl0ZW0uYnV0dG9ucyk7XHJcbiAgICAgIC8vIHJlc3RvcmUgY3VzdG9tIHJvd1xyXG4gICAgICB0aGlzLnJlc3RvcmVSZW5kZXIoaXRlbSk7XHJcblxyXG4gICAgICBjb2x1bW5zLnB1c2goaXRlbSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hlY2tib3hDb3VudCA+IDEpXHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgW3N0XToganVzdCBvbmx5IG9uZSBjb2x1bW4gY2hlY2tib3hgKTtcclxuICAgIGlmIChyYWRpb0NvdW50ID4gMSlcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBbc3RdOiBqdXN0IG9ubHkgb25lIGNvbHVtbiByYWRpb2ApO1xyXG5cclxuICAgIHRoaXMuZml4ZWRDb2VyY2UoY29sdW1ucyk7XHJcblxyXG4gICAgcmV0dXJuIGNvbHVtbnM7XHJcbiAgfVxyXG5cclxuICByZXN0b3JlQWxsUmVuZGVyKGNvbHVtbnM6IFNUQ29sdW1uW10pIHtcclxuICAgIGNvbHVtbnMuZm9yRWFjaChpID0+IHRoaXMucmVzdG9yZVJlbmRlcihpKSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUsIEhvc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGVjaW1hbFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBkZWVwR2V0IH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xyXG5pbXBvcnQgeyBDTkN1cnJlbmN5UGlwZSwgRGF0ZVBpcGUsIFlOUGlwZSwgX0h0dHBDbGllbnQgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xyXG5cclxuaW1wb3J0IHtcclxuICBTVERhdGEsXHJcbiAgU1RQYWdlLFxyXG4gIFNUUmVxLFxyXG4gIFNUUmVzLFxyXG4gIFNUQ29sdW1uLFxyXG4gIFNUTXVsdGlTb3J0LFxyXG59IGZyb20gJy4vdGFibGUuaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7IFNUU29ydE1hcCB9IGZyb20gJy4vdGFibGUtY29sdW1uLXNvdXJjZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNURGF0YVNvdXJjZU9wdGlvbnMge1xyXG4gIHBpPzogbnVtYmVyO1xyXG4gIHBzPzogbnVtYmVyO1xyXG4gIGRhdGE/OiBzdHJpbmcgfCBTVERhdGFbXSB8IE9ic2VydmFibGU8U1REYXRhW10+O1xyXG4gIHRvdGFsPzogbnVtYmVyO1xyXG4gIHJlcT86IFNUUmVxO1xyXG4gIHJlcz86IFNUUmVzO1xyXG4gIHBhZ2U/OiBTVFBhZ2U7XHJcbiAgY29sdW1ucz86IFNUQ29sdW1uW107XHJcbiAgbXVsdGlTb3J0PzogU1RNdWx0aVNvcnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU1REYXRhU291cmNlUmVzdWx0IHtcclxuICAvKiogw6bCmMKvw6XCkMKmw6nCnMKAw6jCpsKBw6bCmMK+w6fCpMK6w6XCiMKGw6nCocK1w6XCmcKoICovXHJcbiAgcGFnZVNob3c/OiBib29sZWFuO1xyXG4gIC8qKiDDpsKWwrAgYHBpYMOvwrzCjMOowovCpcOowr/ClMOlwpvCniBgdW5kZWZpbmVkYCDDqMKhwqjDp8KkwrrDp8KUwqjDpsKIwrfDpcKPwpfDpsKOwqcgKi9cclxuICBwaT86IG51bWJlcjtcclxuICAvKiogw6bClsKwIGB0b3RhbGDDr8K8wozDqMKLwqXDqMK/wpTDpcKbwp4gYHVuZGVmaW5lZGAgw6jCocKow6fCpMK6w6fClMKow6bCiMK3w6XCj8KXw6bCjsKnICovXHJcbiAgdG90YWw/OiBudW1iZXI7XHJcbiAgLyoqIMOmwpXCsMOmwo3CriAqL1xyXG4gIGxpc3Q/OiBTVERhdGFbXTtcclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU1REYXRhU291cmNlIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgaHR0cDogX0h0dHBDbGllbnQsXHJcbiAgICBASG9zdCgpIHByaXZhdGUgY3VycmVudHk6IENOQ3VycmVuY3lQaXBlLFxyXG4gICAgQEhvc3QoKSBwcml2YXRlIGRhdGU6IERhdGVQaXBlLFxyXG4gICAgQEhvc3QoKSBwcml2YXRlIHluOiBZTlBpcGUsXHJcbiAgICBASG9zdCgpIHByaXZhdGUgbnVtYmVyOiBEZWNpbWFsUGlwZSxcclxuICApIHt9XHJcblxyXG4gIHByb2Nlc3Mob3B0aW9uczogU1REYXRhU291cmNlT3B0aW9ucyk6IFByb21pc2U8U1REYXRhU291cmNlUmVzdWx0PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmVQcm9taXNlLCByZWplY3RQcm9taXNlKSA9PiB7XHJcbiAgICAgIGxldCBkYXRhJDogT2JzZXJ2YWJsZTxTVERhdGFbXT47XHJcbiAgICAgIGxldCBpc1JlbW90ZSA9IGZhbHNlO1xyXG4gICAgICBjb25zdCB7IGRhdGEsIHJlcywgdG90YWwsIHBhZ2UsIHBpLCBwcywgY29sdW1ucyB9ID0gb3B0aW9ucztcclxuICAgICAgbGV0IHJldFRvdGFsOiBudW1iZXI7XHJcbiAgICAgIGxldCByZXRMaXN0OiBTVERhdGFbXTtcclxuICAgICAgbGV0IHJldFBpOiBudW1iZXI7XHJcblxyXG4gICAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgaXNSZW1vdGUgPSB0cnVlO1xyXG4gICAgICAgIGRhdGEkID0gdGhpcy5nZXRCeUh0dHAoZGF0YSwgb3B0aW9ucykucGlwZShcclxuICAgICAgICAgIG1hcCgocmVzdWx0OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgLy8gbGlzdFxyXG4gICAgICAgICAgICBsZXQgcmV0ID0gZGVlcEdldChyZXN1bHQsIHJlcy5yZU5hbWUubGlzdCBhcyBzdHJpbmdbXSwgW10pO1xyXG4gICAgICAgICAgICBpZiAocmV0ID09IG51bGwgfHwgIUFycmF5LmlzQXJyYXkocmV0KSkge1xyXG4gICAgICAgICAgICAgIHJldCA9IFtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIHRvdGFsXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdFRvdGFsID1cclxuICAgICAgICAgICAgICByZXMucmVOYW1lLnRvdGFsICYmXHJcbiAgICAgICAgICAgICAgZGVlcEdldChyZXN1bHQsIHJlcy5yZU5hbWUudG90YWwgYXMgc3RyaW5nW10sIG51bGwpO1xyXG4gICAgICAgICAgICByZXRUb3RhbCA9IHJlc3VsdFRvdGFsID09IG51bGwgPyB0b3RhbCB8fCAwIDogK3Jlc3VsdFRvdGFsO1xyXG4gICAgICAgICAgICByZXR1cm4gPFNURGF0YVtdPnJldDtcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnIgPT4ge1xyXG4gICAgICAgICAgICByZWplY3RQcm9taXNlKGVycik7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xyXG4gICAgICAgIGRhdGEkID0gb2YoZGF0YSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gYSBjb2xkIG9ic2VydmFibGVcclxuICAgICAgICBkYXRhJCA9IGRhdGE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghaXNSZW1vdGUpIHtcclxuICAgICAgICBkYXRhJCA9IGRhdGEkLnBpcGUoXHJcbiAgICAgICAgICAvLyBzb3J0XHJcbiAgICAgICAgICBtYXAoKHJlc3VsdDogU1REYXRhW10pID0+IHtcclxuICAgICAgICAgICAgbGV0IGNvcHlSZXN1bHQgPSByZXN1bHQuc2xpY2UoMCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNvcnRlckZuID0gdGhpcy5nZXRTb3J0ZXJGbihjb2x1bW5zKTtcclxuICAgICAgICAgICAgaWYgKHNvcnRlckZuKSB7XHJcbiAgICAgICAgICAgICAgY29weVJlc3VsdCA9IGNvcHlSZXN1bHQuc29ydChzb3J0ZXJGbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGNvcHlSZXN1bHQ7XHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICAgIC8vIGZpbHRlclxyXG4gICAgICAgICAgbWFwKChyZXN1bHQ6IFNURGF0YVtdKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbHVtbnMuZmlsdGVyKHcgPT4gdy5maWx0ZXIpLmZvckVhY2goYyA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgdmFsdWVzID0gYy5maWx0ZXIubWVudXMuZmlsdGVyKHcgPT4gdy5jaGVja2VkKTtcclxuICAgICAgICAgICAgICBpZiAodmFsdWVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgIGNvbnN0IG9uRmlsdGVyID0gYy5maWx0ZXIuZm47XHJcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvbkZpbHRlciAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBbc3RdIE11c2UgcHJvdmlkZSB0aGUgZm4gZnVuY3Rpb24gaW4gZmlsdGVyYCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQuZmlsdGVyKHJlY29yZCA9PlxyXG4gICAgICAgICAgICAgICAgdmFsdWVzLnNvbWUodiA9PiBvbkZpbHRlcih2LCByZWNvcmQpKSxcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgLy8gcGFnaW5nXHJcbiAgICAgICAgICBtYXAoKHJlc3VsdDogU1REYXRhW10pID0+IHtcclxuICAgICAgICAgICAgaWYgKHBhZ2UuZnJvbnQpIHtcclxuICAgICAgICAgICAgICBjb25zdCBtYXhQYWdlSW5kZXggPSBNYXRoLmNlaWwocmVzdWx0Lmxlbmd0aCAvIHBzKTtcclxuICAgICAgICAgICAgICByZXRQaSA9IE1hdGgubWF4KDEsIHBpID4gbWF4UGFnZUluZGV4ID8gbWF4UGFnZUluZGV4IDogcGkpO1xyXG4gICAgICAgICAgICAgIHJldFRvdGFsID0gcmVzdWx0Lmxlbmd0aDtcclxuICAgICAgICAgICAgICBpZiAocGFnZS5zaG93ID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0LnNsaWNlKChyZXRQaSAtIDEpICogcHMsIHJldFBpICogcHMpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gcHJlLXByb2Nlc3NcclxuICAgICAgaWYgKHR5cGVvZiByZXMucHJvY2VzcyA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIGRhdGEkID0gZGF0YSQucGlwZShtYXAocmVzdWx0ID0+IHJlcy5wcm9jZXNzKHJlc3VsdCkpKTtcclxuICAgICAgfVxyXG4gICAgICAvLyBkYXRhIGFjY2VsZXJhdG9yXHJcbiAgICAgIGRhdGEkID0gZGF0YSQucGlwZShcclxuICAgICAgICBtYXAocmVzdWx0ID0+IHtcclxuICAgICAgICAgIGZvciAoY29uc3QgaSBvZiByZXN1bHQpIHtcclxuICAgICAgICAgICAgaS5fdmFsdWVzID0gY29sdW1ucy5tYXAoYyA9PiB0aGlzLmdldChpLCBjKSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH0pLFxyXG4gICAgICApO1xyXG5cclxuICAgICAgZGF0YSQuZm9yRWFjaCgocmVzdWx0OiBTVERhdGFbXSkgPT4gKHJldExpc3QgPSByZXN1bHQpKS50aGVuKCgpID0+IHtcclxuICAgICAgICByZXNvbHZlUHJvbWlzZSh7XHJcbiAgICAgICAgICBwaTogcmV0UGksXHJcbiAgICAgICAgICB0b3RhbDogcmV0VG90YWwsXHJcbiAgICAgICAgICBsaXN0OiByZXRMaXN0LFxyXG4gICAgICAgICAgcGFnZVNob3c6XHJcbiAgICAgICAgICAgIHR5cGVvZiBwYWdlLnNob3cgPT09ICd1bmRlZmluZWQnXHJcbiAgICAgICAgICAgICAgPyAocmV0VG90YWwgfHwgdG90YWwpID4gcHNcclxuICAgICAgICAgICAgICA6IHBhZ2Uuc2hvdyxcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0KGl0ZW06IGFueSwgY29sOiBTVENvbHVtbikge1xyXG4gICAgaWYgKGNvbC5mb3JtYXQpIHJldHVybiBjb2wuZm9ybWF0KGl0ZW0sIGNvbCk7XHJcblxyXG4gICAgY29uc3QgdmFsdWUgPSBkZWVwR2V0KGl0ZW0sIGNvbC5pbmRleCBhcyBzdHJpbmdbXSwgY29sLmRlZmF1bHQpO1xyXG5cclxuICAgIGxldCByZXQgPSB2YWx1ZTtcclxuICAgIHN3aXRjaCAoY29sLnR5cGUpIHtcclxuICAgICAgY2FzZSAnaW1nJzpcclxuICAgICAgICByZXQgPSB2YWx1ZSA/IGA8aW1nIHNyYz1cIiR7dmFsdWV9XCIgY2xhc3M9XCJpbWdcIj5gIDogJyc7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ251bWJlcic6XHJcbiAgICAgICAgcmV0ID0gdGhpcy5udW1iZXIudHJhbnNmb3JtKHZhbHVlLCBjb2wubnVtYmVyRGlnaXRzKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnY3VycmVuY3knOlxyXG4gICAgICAgIHJldCA9IHRoaXMuY3VycmVudHkudHJhbnNmb3JtKHZhbHVlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnZGF0ZSc6XHJcbiAgICAgICAgcmV0ID0gdGhpcy5kYXRlLnRyYW5zZm9ybSh2YWx1ZSwgY29sLmRhdGVGb3JtYXQpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICd5bic6XHJcbiAgICAgICAgcmV0ID0gdGhpcy55bi50cmFuc2Zvcm0odmFsdWUgPT09IGNvbC55bi50cnV0aCwgY29sLnluLnllcywgY29sLnluLm5vKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIHJldHVybiByZXQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEJ5SHR0cChcclxuICAgIHVybDogc3RyaW5nLFxyXG4gICAgb3B0aW9uczogU1REYXRhU291cmNlT3B0aW9ucyxcclxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgY29uc3QgeyByZXEsIHBhZ2UsIHBpLCBwcywgbXVsdGlTb3J0LCBjb2x1bW5zIH0gPSBvcHRpb25zO1xyXG4gICAgY29uc3QgbWV0aG9kID0gKHJlcS5tZXRob2QgfHwgJ0dFVCcpLnRvVXBwZXJDYXNlKCk7XHJcbiAgICBjb25zdCBwYXJhbXM6IGFueSA9IE9iamVjdC5hc3NpZ24oXHJcbiAgICAgIHtcclxuICAgICAgICBbcmVxLnJlTmFtZS5waV06IHBhZ2UuemVyb0luZGV4ZWQgPyBwaSAtIDEgOiBwaSxcclxuICAgICAgICBbcmVxLnJlTmFtZS5wc106IHBzLFxyXG4gICAgICB9LFxyXG4gICAgICByZXEucGFyYW1zLFxyXG4gICAgICB0aGlzLmdldFJlcVNvcnRNYXAobXVsdGlTb3J0LCBjb2x1bW5zKSxcclxuICAgICAgdGhpcy5nZXRSZXFGaWx0ZXJNYXAoY29sdW1ucyksXHJcbiAgICApO1xyXG4gICAgbGV0IHJlcU9wdGlvbnM6IGFueSA9IHtcclxuICAgICAgcGFyYW1zLFxyXG4gICAgICBib2R5OiByZXEuYm9keSxcclxuICAgICAgaGVhZGVyczogcmVxLmhlYWRlcnMsXHJcbiAgICB9O1xyXG4gICAgaWYgKG1ldGhvZCA9PT0gJ1BPU1QnICYmIHJlcS5hbGxJbkJvZHkgPT09IHRydWUpIHtcclxuICAgICAgcmVxT3B0aW9ucyA9IHtcclxuICAgICAgICBib2R5OiBPYmplY3QuYXNzaWduKHt9LCByZXEuYm9keSwgcGFyYW1zKSxcclxuICAgICAgICBoZWFkZXJzOiByZXEuaGVhZGVycyxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmh0dHAucmVxdWVzdChtZXRob2QsIHVybCwgcmVxT3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICAvLyNyZWdpb24gc29ydFxyXG5cclxuICBwcml2YXRlIGdldFZhbGlkU29ydChjb2x1bW5zOiBTVENvbHVtbltdKTogU1RTb3J0TWFwW10ge1xyXG4gICAgcmV0dXJuIGNvbHVtbnNcclxuICAgICAgLmZpbHRlcihpdGVtID0+IGl0ZW0uX3NvcnQgJiYgaXRlbS5fc29ydC5lbmFibGVkICYmIGl0ZW0uX3NvcnQuZGVmYXVsdClcclxuICAgICAgLm1hcChpdGVtID0+IGl0ZW0uX3NvcnQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRTb3J0ZXJGbihjb2x1bW5zOiBTVENvbHVtbltdKSB7XHJcbiAgICBjb25zdCBzb3J0TGlzdCA9IHRoaXMuZ2V0VmFsaWRTb3J0KGNvbHVtbnMpO1xyXG4gICAgaWYgKHNvcnRMaXN0Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIHNvcnRMaXN0WzBdLmNvbXBhcmUgIT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgY29uc29sZS53YXJuKGBbc3RdIE11c2UgcHJvdmlkZSB0aGUgY29tcGFyZSBmdW5jdGlvbiBpbiBzb3J0YCk7XHJcbiAgICAgIHJldHVybiA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChhOiBhbnksIGI6IGFueSkgPT4ge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBzb3J0TGlzdFswXS5jb21wYXJlKGEsIGIpO1xyXG4gICAgICBpZiAocmVzdWx0ICE9PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHNvcnRMaXN0WzBdLmRlZmF1bHQgPT09ICdkZXNjZW5kJyA/IC1yZXN1bHQgOiByZXN1bHQ7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIDA7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZ2V0UmVxU29ydE1hcChcclxuICAgIG11bHRpU29ydDogU1RNdWx0aVNvcnQsXHJcbiAgICBjb2x1bW5zOiBTVENvbHVtbltdLFxyXG4gICk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0ge1xyXG4gICAgbGV0IHJldDogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xyXG4gICAgY29uc3Qgc29ydExpc3QgPSB0aGlzLmdldFZhbGlkU29ydChjb2x1bW5zKTtcclxuICAgIGlmICghbXVsdGlTb3J0ICYmIHNvcnRMaXN0Lmxlbmd0aCA9PT0gMCkgcmV0dXJuIHJldDtcclxuXHJcbiAgICBpZiAobXVsdGlTb3J0KSB7XHJcbiAgICAgIHNvcnRMaXN0LmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgcmV0W2l0ZW0ua2V5XSA9IChpdGVtLnJlTmFtZSB8fCB7fSlbaXRlbS5kZWZhdWx0XSB8fCBpdGVtLmRlZmF1bHQ7XHJcbiAgICAgIH0pO1xyXG4gICAgICAvLyDDpcKQwojDpcK5wrbDpcKkwoTDp8KQwoZcclxuICAgICAgcmV0ID0ge1xyXG4gICAgICAgIFttdWx0aVNvcnQua2V5XTogT2JqZWN0LmtleXMocmV0KVxyXG4gICAgICAgICAgLm1hcChrZXkgPT4ga2V5ICsgbXVsdGlTb3J0Lm5hbWVTZXBhcmF0b3IgKyByZXRba2V5XSlcclxuICAgICAgICAgIC5qb2luKG11bHRpU29ydC5zZXBhcmF0b3IpLFxyXG4gICAgICB9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgbWFwRGF0YSA9IHNvcnRMaXN0WzBdO1xyXG4gICAgICByZXRbbWFwRGF0YS5rZXldID1cclxuICAgICAgICAoc29ydExpc3RbMF0ucmVOYW1lIHx8IHt9KVttYXBEYXRhLmRlZmF1bHRdIHx8IG1hcERhdGEuZGVmYXVsdDtcclxuICAgIH1cclxuICAgIHJldHVybiByZXQ7XHJcbiAgfVxyXG5cclxuICAvLyNlbmRyZWdpb25cclxuXHJcbiAgLy8jcmVnaW9uIGZpbHRlclxyXG5cclxuICBwcml2YXRlIGdldFJlcUZpbHRlck1hcChjb2x1bW5zOiBTVENvbHVtbltdKTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB7XHJcbiAgICBsZXQgcmV0ID0ge307XHJcbiAgICBjb2x1bW5zLmZpbHRlcih3ID0+IHcuZmlsdGVyICYmIHcuZmlsdGVyLmRlZmF1bHQgPT09IHRydWUpLmZvckVhY2goY29sID0+IHtcclxuICAgICAgY29uc3QgdmFsdWVzID0gY29sLmZpbHRlci5tZW51cy5maWx0ZXIoZiA9PiBmLmNoZWNrZWQgPT09IHRydWUpO1xyXG4gICAgICBsZXQgb2JqOiBPYmplY3QgPSB7fTtcclxuICAgICAgaWYgKGNvbC5maWx0ZXIucmVOYW1lKSB7XHJcbiAgICAgICAgb2JqID0gY29sLmZpbHRlci5yZU5hbWUoY29sLmZpbHRlci5tZW51cywgY29sKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBvYmpbY29sLmZpbHRlci5rZXldID0gdmFsdWVzLm1hcChpID0+IGkudmFsdWUpLmpvaW4oJywnKTtcclxuICAgICAgfVxyXG4gICAgICByZXQgPSBPYmplY3QuYXNzaWduKHJldCwgb2JqKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJldDtcclxuICB9XHJcblxyXG4gIC8vI2VuZHJlZ2lvblxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGRlZXBHZXQgfSBmcm9tICdAZGVsb24vdXRpbCc7XHJcbmltcG9ydCB7IFhsc3hTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL2FiYy94bHN4JztcclxuXHJcbmltcG9ydCB7IFNUQ29sdW1uLCBTVEV4cG9ydE9wdGlvbnMgfSBmcm9tICcuL3RhYmxlLmludGVyZmFjZXMnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU1RFeHBvcnQge1xyXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIHByaXZhdGUgeGxzeFNydjogWGxzeFNlcnZpY2UpIHt9XHJcblxyXG4gIHByaXZhdGUgX3N0R2V0KGl0ZW06IGFueSwgY29sOiBTVENvbHVtbik6IGFueSB7XHJcbiAgICBjb25zdCByZXQ6IGFueSA9IHsgdDogJ3MnLCB2OiAnJyB9O1xyXG5cclxuICAgIGlmIChjb2wuZm9ybWF0KSB7XHJcbiAgICAgIHJldC52ID0gY29sLmZvcm1hdChpdGVtLCBjb2wpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgdmFsID0gZGVlcEdldChpdGVtLCBjb2wuaW5kZXggYXMgc3RyaW5nW10sICcnKTtcclxuICAgICAgcmV0LnYgPSB2YWw7XHJcbiAgICAgIHN3aXRjaCAoY29sLnR5cGUpIHtcclxuICAgICAgICBjYXNlICdjdXJyZW5jeSc6XHJcbiAgICAgICAgICByZXQudCA9ICduJztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2RhdGUnOlxyXG4gICAgICAgICAgcmV0LnQgPSAnZCc7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICd5bic6XHJcbiAgICAgICAgICByZXQudiA9IHJldC52ID09PSBjb2wueW5UcnV0aCA/IGNvbC55blllcyB8fCAnw6bCmMKvJyA6IGNvbC55bk5vIHx8ICfDpcKQwqYnO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmV0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZW5TaGVldChvcHQ6IFNURXhwb3J0T3B0aW9ucyk6IHsgW3NoZWV0OiBzdHJpbmddOiBhbnkgfSB7XHJcbiAgICBjb25zdCBzaGVldHM6IHsgW3NoZWV0OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xyXG4gICAgY29uc3Qgc2hlZXQgPSAoc2hlZXRzW29wdC5zaGVldG5hbWUgfHwgJ1NoZWV0MSddID0ge30pO1xyXG4gICAgY29uc3QgY29sRGF0YSA9IG9wdC5fYy5maWx0ZXIoXHJcbiAgICAgIHcgPT5cclxuICAgICAgICB3LmV4cG9ydGVkICE9PSBmYWxzZSAmJlxyXG4gICAgICAgIHcuaW5kZXggJiZcclxuICAgICAgICAoIXcuYnV0dG9ucyB8fCB3LmJ1dHRvbnMubGVuZ3RoID09PSAwKSxcclxuICAgICk7XHJcbiAgICBjb25zdCBjYyA9IGNvbERhdGEubGVuZ3RoLFxyXG4gICAgICBkYyA9IG9wdC5fZC5sZW5ndGg7XHJcbiAgICAvLyByZWdpb246IGNvbHVtblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYzsgaSsrKSB7XHJcbiAgICAgIHNoZWV0W2Ake1N0cmluZy5mcm9tQ2hhckNvZGUoNjUgKyBpKX0xYF0gPSB7XHJcbiAgICAgICAgdDogJ3MnLFxyXG4gICAgICAgIHY6IGNvbERhdGFbaV0udGl0bGUsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICAvLyBlbmRyZWdpb25cclxuXHJcbiAgICAvLyByZWdpb246IGNvbnRlbnRcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGM7IGkrKykge1xyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNjOyBqKyspIHtcclxuICAgICAgICBzaGVldFtgJHtTdHJpbmcuZnJvbUNoYXJDb2RlKDY1ICsgail9JHtpICsgMn1gXSA9IHRoaXMuX3N0R2V0KFxyXG4gICAgICAgICAgb3B0Ll9kW2ldLFxyXG4gICAgICAgICAgY29sRGF0YVtqXSxcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBlbmRyZWdpb25cclxuXHJcbiAgICBpZiAoY2MgPiAwICYmIGRjID4gMCkge1xyXG4gICAgICBzaGVldFsnIXJlZiddID0gYEExOiR7U3RyaW5nLmZyb21DaGFyQ29kZSg2NSArIGNjIC0gMSl9JHtkYyArIDF9YDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc2hlZXRzO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0KG9wdDogU1RFeHBvcnRPcHRpb25zKSB7XHJcbiAgICBpZiAoIXRoaXMueGxzeFNydilcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBtdXNlIGJlIGltcG9ydCAnWGxzeE1vZHVsZScgbW9kdWxlLCBidXQgZ290IG51bGxgKTtcclxuICAgIGNvbnN0IHNoZWV0cyA9IHRoaXMuZ2VuU2hlZXQob3B0KTtcclxuICAgIHJldHVybiB0aGlzLnhsc3hTcnYuZXhwb3J0KHtcclxuICAgICAgc2hlZXRzLFxyXG4gICAgICBmaWxlbmFtZTogb3B0LmZpbGVuYW1lLFxyXG4gICAgICBjYWxsYmFjazogb3B0LmNhbGxiYWNrLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIEluamVjdCxcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBSZW5kZXJlcjIsXHJcbiAgRWxlbWVudFJlZixcclxuICBUZW1wbGF0ZVJlZixcclxuICBTaW1wbGVDaGFuZ2UsXHJcbiAgQ29udGVudENoaWxkLFxyXG4gIE9wdGlvbmFsLFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERlY2ltYWxQaXBlLCBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiwgb2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQge1xyXG4gIENOQ3VycmVuY3lQaXBlLFxyXG4gIERhdGVQaXBlLFxyXG4gIFlOUGlwZSxcclxuICBNb2RhbEhlbHBlcixcclxuICBNb2RhbEhlbHBlck9wdGlvbnMsXHJcbiAgQUxBSU5fSTE4Tl9UT0tFTixcclxuICBBbGFpbkkxOE5TZXJ2aWNlLFxyXG4gIERyYXdlckhlbHBlcixcclxuICBEcmF3ZXJIZWxwZXJPcHRpb25zXHJcbn0gZnJvbSAnQGRlbG9uL3RoZW1lJztcclxuaW1wb3J0IHtcclxuICBkZWVwQ29weSxcclxuICB0b0Jvb2xlYW4sXHJcbiAgdXBkYXRlSG9zdENsYXNzLFxyXG4gIElucHV0Qm9vbGVhbixcclxuICBJbnB1dE51bWJlcixcclxufSBmcm9tICdAZGVsb24vdXRpbCc7XHJcblxyXG5pbXBvcnQge1xyXG4gIFNUQ29sdW1uLFxyXG4gIFNUQ2hhbmdlLFxyXG4gIFNUQ29sdW1uU2VsZWN0aW9uLFxyXG4gIFNUQ29sdW1uRmlsdGVyTWVudSxcclxuICBTVERhdGEsXHJcbiAgU1RDb2x1bW5CdXR0b24sXHJcbiAgU1RFeHBvcnRPcHRpb25zLFxyXG4gIFNUTXVsdGlTb3J0LFxyXG4gIFNUUmVxLFxyXG4gIFNURXJyb3IsXHJcbiAgU1RDaGFuZ2VUeXBlLFxyXG4gIFNUQ2hhbmdlUm93Q2xpY2ssXHJcbiAgU1RSZXMsXHJcbiAgU1RQYWdlLFxyXG4gIFNUTG9hZE9wdGlvbnMsXHJcbn0gZnJvbSAnLi90YWJsZS5pbnRlcmZhY2VzJztcclxuaW1wb3J0IHsgU1RDb25maWcgfSBmcm9tICcuL3RhYmxlLmNvbmZpZyc7XHJcbmltcG9ydCB7IFNURXhwb3J0IH0gZnJvbSAnLi90YWJsZS1leHBvcnQnO1xyXG5pbXBvcnQgeyBTVENvbHVtblNvdXJjZSB9IGZyb20gJy4vdGFibGUtY29sdW1uLXNvdXJjZSc7XHJcbmltcG9ydCB7IFNUUm93U291cmNlIH0gZnJvbSAnLi90YWJsZS1yb3cuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgU1REYXRhU291cmNlIH0gZnJvbSAnLi90YWJsZS1kYXRhLXNvdXJjZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3N0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdGFibGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgU1REYXRhU291cmNlLFxyXG4gICAgU1RSb3dTb3VyY2UsXHJcbiAgICBTVENvbHVtblNvdXJjZSxcclxuICAgIFNURXhwb3J0LFxyXG4gICAgQ05DdXJyZW5jeVBpcGUsXHJcbiAgICBEYXRlUGlwZSxcclxuICAgIFlOUGlwZSxcclxuICAgIERlY2ltYWxQaXBlLFxyXG4gIF0sXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTVENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICBwcml2YXRlIGkxOG4kOiBTdWJzY3JpcHRpb247XHJcbiAgcHJpdmF0ZSB0b3RhbFRwbCA9IGBgO1xyXG4gIF9kYXRhOiBTVERhdGFbXSA9IFtdO1xyXG4gIF9pc1BhZ2luYXRpb24gPSB0cnVlO1xyXG4gIF9hbGxDaGVja2VkID0gZmFsc2U7XHJcbiAgX2luZGV0ZXJtaW5hdGUgPSBmYWxzZTtcclxuICBfY29sdW1uczogU1RDb2x1bW5bXSA9IFtdO1xyXG5cclxuICAvLyAjcmVnaW9uIGZpZWxkc1xyXG5cclxuICAvKiogw6bClcKww6bCjcKuw6bCusKQICovXHJcbiAgQElucHV0KClcclxuICBkYXRhOiBzdHJpbmcgfCBTVERhdGFbXSB8IE9ic2VydmFibGU8U1REYXRhW10+O1xyXG4gIC8qKiDDqMKvwrfDpsKxwoLDpMK9wpPDqcKFwo3Dp8K9wq4gKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCByZXEoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcmVxO1xyXG4gIH1cclxuICBzZXQgcmVxKHZhbHVlOiBTVFJlcSkge1xyXG4gICAgY29uc3QgeyByZXEgfSA9IHRoaXMuY29nO1xyXG4gICAgY29uc3QgaXRlbSA9IE9iamVjdC5hc3NpZ24oe30sIHJlcSwgdmFsdWUpO1xyXG4gICAgaWYgKGl0ZW0ucmVOYW1lID09IG51bGwpIHtcclxuICAgICAgaXRlbS5yZU5hbWUgPSBkZWVwQ29weShyZXEucmVOYW1lKTtcclxuICAgIH1cclxuICAgIHRoaXMuX3JlcSA9IGl0ZW07XHJcbiAgfVxyXG4gIHByaXZhdGUgX3JlcTogU1RSZXE7XHJcbiAgLyoqIMOowr/ClMOlwpvCnsOkwr3Ck8OpwoXCjcOnwr3CriAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IHJlcygpIHtcclxuICAgIHJldHVybiB0aGlzLl9yZXM7XHJcbiAgfVxyXG4gIHNldCByZXModmFsdWU6IFNUUmVzKSB7XHJcbiAgICBjb25zdCB7IHJlcyB9ID0gdGhpcy5jb2c7XHJcbiAgICBjb25zdCBpdGVtID0gT2JqZWN0LmFzc2lnbih7fSwgcmVzLCB2YWx1ZSk7XHJcbiAgICBpdGVtLnJlTmFtZSA9IE9iamVjdC5hc3NpZ24oe30sIHJlcy5yZU5hbWUsIGl0ZW0ucmVOYW1lKTtcclxuICAgIGlmICghQXJyYXkuaXNBcnJheShpdGVtLnJlTmFtZS5saXN0KSlcclxuICAgICAgaXRlbS5yZU5hbWUubGlzdCA9IGl0ZW0ucmVOYW1lLmxpc3Quc3BsaXQoJy4nKTtcclxuICAgIGlmICghQXJyYXkuaXNBcnJheShpdGVtLnJlTmFtZS50b3RhbCkpXHJcbiAgICAgIGl0ZW0ucmVOYW1lLnRvdGFsID0gaXRlbS5yZU5hbWUudG90YWwuc3BsaXQoJy4nKTtcclxuICAgIHRoaXMuX3JlcyA9IGl0ZW07XHJcbiAgfVxyXG4gIHByaXZhdGUgX3JlczogU1RSZXM7XHJcbiAgLyoqIMOlwojCl8Omwo/Cj8Oowr/CsCAgKi9cclxuICBASW5wdXQoKVxyXG4gIGNvbHVtbnM6IFNUQ29sdW1uW10gPSBbXTtcclxuICAvKiogw6bCr8KPw6nCocK1w6bClcKww6nCh8KPw6/CvMKMw6XCvcKTw6jCrsK+w6fCvcKuw6TCuMK6IGAwYCDDqMKhwqjDp8KkwrrDpMK4wo3DpcKIwobDqcKhwrXDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgMTBgICovXHJcbiAgQElucHV0KClcclxuICBASW5wdXROdW1iZXIoKVxyXG4gIHBzID0gMTA7XHJcbiAgLyoqIMOlwr3Ck8OlwonCjcOpwqHCtcOnwqDCgSAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgQElucHV0TnVtYmVyKClcclxuICBwaSA9IDE7XHJcbiAgLyoqIMOmwpXCsMOmwo3CrsOmwoDCu8OpwofCjyAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgQElucHV0TnVtYmVyKClcclxuICB0b3RhbCA9IDA7XHJcbiAgLyoqIMOlwojChsOpwqHCtcOlwpnCqMOpwoXCjcOnwr3CriAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IHBhZ2UoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcGFnZTtcclxuICB9XHJcbiAgc2V0IHBhZ2UodmFsdWU6IFNUUGFnZSkge1xyXG4gICAgY29uc3QgeyBwYWdlIH0gPSB0aGlzLmNvZztcclxuICAgIGNvbnN0IGl0ZW0gPSBPYmplY3QuYXNzaWduKHt9LCBkZWVwQ29weShwYWdlKSwgdmFsdWUpO1xyXG4gICAgY29uc3QgeyB0b3RhbCB9ID0gaXRlbTtcclxuICAgIGlmICh0eXBlb2YgdG90YWwgPT09ICdzdHJpbmcnICYmIHRvdGFsLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLnRvdGFsVHBsID0gdG90YWw7XHJcbiAgICB9IGVsc2UgaWYgKHRvQm9vbGVhbih0b3RhbCkpIHtcclxuICAgICAgdGhpcy50b3RhbFRwbCA9IGDDpcKFwrEge3t0b3RhbH19IMOmwp3CoWA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnRvdGFsVHBsID0gJyc7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9wYWdlID0gaXRlbTtcclxuICB9XHJcbiAgcHJpdmF0ZSBfcGFnZTogU1RQYWdlO1xyXG4gIC8qKiDDpsKYwq/DpcKQwqbDpsKYwr7Dp8KkwrpMb2FkaW5nICovXHJcbiAgQElucHV0KClcclxuICBASW5wdXRCb29sZWFuKClcclxuICBsb2FkaW5nID0gZmFsc2U7XHJcbiAgLyoqIMOlwrvCtsOowr/Cn8OmwpjCvsOnwqTCusOlworCoMOowr3CvcOmwpXCiMOmwp7CnMOnwprChMOmwpfCtsOpwpfCtMOvwrzCiMOpwpjCssOmwq3CosOpwpfCqsOnwoPCgcOvwrzCiSAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgQElucHV0TnVtYmVyKClcclxuICBsb2FkaW5nRGVsYXkgPSAwO1xyXG4gIC8qKiDDpsKYwq/DpcKQwqbDpsKYwr7Dp8KkwrrDqMK+wrnDpsKhwoYgKi9cclxuICBASW5wdXQoKVxyXG4gIEBJbnB1dEJvb2xlYW4oKVxyXG4gIGJvcmRlcmVkID0gZmFsc2U7XHJcbiAgLyoqIHRhYmxlw6XCpMKnw6XCsMKPICovXHJcbiAgQElucHV0KClcclxuICBzaXplOiAnc21hbGwnIHwgJ21pZGRsZScgfCAnZGVmYXVsdCc7XHJcbiAgLyoqIMOnwrrCtcOlwpDCkcOmwpTCr8OmwozCgcOmwrvCmsOlworCqMOvwrzCjMOkwrnCn8Olwo/Cr8OnwpTCqMOkwrrCjsOmwozCh8Olwq7CmsOmwrvCmsOlworCqMOlwozCusOlwp/Cn8OnwprChMOpwqvCmMOlwrrCpsOvwrzCmmB7IHk6ICczMDBweCcsIHg6ICczMDBweCcgfWAgKi9cclxuICBASW5wdXQoKVxyXG4gIHNjcm9sbDogeyB5Pzogc3RyaW5nOyB4Pzogc3RyaW5nIH07XHJcbiAgLyoqIMOmwpjCr8OlwpDCpsOlwqTCmsOmwo7CksOlwrrCj8OvwrzCjMOlwr3CkyBgc29ydGAgw6XCpMKaw6TCuMKqw6fCm8K4w6XCkMKMw6XCgMK8w6bCl8K2w6jCh8Kqw6XCisKow6XCkMKIw6XCucK2w6/CvMKMw6XCu8K6w6jCrsKuw6XCkMKOw6fCq8Kvw6bClMKvw6bCjMKBw6bCl8K2w6TCvcK/w6fClMKoICovXHJcbiAgQElucHV0KClcclxuICBnZXQgbXVsdGlTb3J0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX211bHRpU29ydDtcclxuICB9XHJcbiAgc2V0IG11bHRpU29ydCh2YWx1ZTogYW55KSB7XHJcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicgJiYgIXRvQm9vbGVhbih2YWx1ZSkpIHtcclxuICAgICAgdGhpcy5fbXVsdGlTb3J0ID0gbnVsbDtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fbXVsdGlTb3J0ID0gT2JqZWN0LmFzc2lnbihcclxuICAgICAgPFNUTXVsdGlTb3J0PntcclxuICAgICAgICBrZXk6ICdzb3J0JyxcclxuICAgICAgICBzZXBhcmF0b3I6ICctJyxcclxuICAgICAgICBuYW1lU2VwYXJhdG9yOiAnLicsXHJcbiAgICAgIH0sXHJcbiAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgPyB2YWx1ZSA6IHt9LFxyXG4gICAgKTtcclxuICB9XHJcbiAgcHJpdmF0ZSBfbXVsdGlTb3J0OiBTVE11bHRpU29ydDtcclxuICAvKiogYGhlYWRlcmAgw6bCoMKHw6nCosKYICovXHJcbiAgQElucHV0KClcclxuICBoZWFkZXI6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIC8qKiBgZm9vdGVyYCDDpcK6wpXDqcKDwqggKi9cclxuICBASW5wdXQoKVxyXG4gIGZvb3Rlcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgLyoqIMOpwqLCncOlwqTCliBgYm9keWAgw6XChsKFw6XCrsK5ICovXHJcbiAgQElucHV0KClcclxuICBib2R5OiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICAvKiogYGV4cGFuZGAgw6XCj8Kvw6XCscKVw6XCvMKAw6/CvMKMw6XCvcKTw6bClcKww6bCjcKuw6bCusKQw6TCuMKtw6XCjMKFw6bCi8KsIGBleHBhbmRgIMOowqHCqMOnwqTCusOlwrHClcOlwrzCgMOnworCtsOmwoDCgSAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZXhwYW5kOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogYW55OyBjb2x1bW46IFNUQ29sdW1uIH0+O1xyXG4gIEBJbnB1dCgpXHJcbiAgbm9SZXN1bHQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpXHJcbiAgd2lkdGhDb25maWc6IHN0cmluZ1tdO1xyXG4gIC8qKiDDqMKvwrfDpsKxwoLDpcK8woLDpcK4wrjDpsKXwrbDpcKbwp7DqMKwwoMgKi9cclxuICBAT3V0cHV0KClcclxuICByZWFkb25seSBlcnJvcjogRXZlbnRFbWl0dGVyPFNURXJyb3I+ID0gbmV3IEV2ZW50RW1pdHRlcjxTVEVycm9yPigpO1xyXG4gIC8qKlxyXG4gICAqIMOlwo/CmMOlwozClsOmwpfCtsOlwpvCnsOowrDCg8OvwrzCjMOlwozChcOmwovCrMOvwrzCmmBwaWDDo8KAwoFgcHNgw6PCgMKBYGNoZWNrYm94YMOjwoDCgWByYWRpb2DDo8KAwoFgc29ydGDDo8KAwoFgZmlsdGVyYMOjwoDCgWBjbGlja2DDo8KAwoFgZGJsQ2xpY2tgIMOlwo/CmMOlworCqFxyXG4gICAqL1xyXG4gIEBPdXRwdXQoKVxyXG4gIHJlYWRvbmx5IGNoYW5nZTogRXZlbnRFbWl0dGVyPFNUQ2hhbmdlPiA9IG5ldyBFdmVudEVtaXR0ZXI8U1RDaGFuZ2U+KCk7XHJcbiAgLyoqIMOowqHCjMOlwo3ClcOlwofCu8OlwqTCmsOlwrDCkcOmwpfCtsOpwpXCv8OkwrnCi8OnwrHCu8OkwrjCusOlwo/CjMOlwofCu8OvwrzCiMOlwo3ClcOkwr3CjcOvwrzCmsOmwq/Cq8OnwqfCksOvwrzCicOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmAyMDBgICovXHJcbiAgQElucHV0KClcclxuICBASW5wdXROdW1iZXIoKVxyXG4gIHJvd0NsaWNrVGltZSA9IDIwMDtcclxuXHJcbiAgQElucHV0KClcclxuICBASW5wdXRCb29sZWFuKClcclxuICByZXNwb25zaXZlSGlkZUhlYWRlckZvb3RlcjogYm9vbGVhbjtcclxuXHJcbiAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICAvLyAjcmVnaW9uIGNvbXBhdGlibGVcclxuXHJcbiAgLyoqXHJcbiAgICogY2hlY2tib3jDpcKPwpjDpcKMwpbDpsKXwrbDpcKbwp7DqMKwwoPDr8K8wozDpcKPwoLDpsKVwrDDpMK4wrrDpcK9wpPDpcKJwo3DpsKJwoDDqcKAwonDpsK4woXDpcKNwpVcclxuICAgKiBAZGVwcmVjYXRlZCDDpMK9wr/Dp8KUwqggYGNoYW5nZWAgw6bCm8K/w6TCu8KjXHJcbiAgICogQGRlcHJlY2F0ZWQgYXMgb2YgdjNcclxuICAgKi9cclxuICBAT3V0cHV0KClcclxuICByZWFkb25seSBjaGVja2JveENoYW5nZTogRXZlbnRFbWl0dGVyPFNURGF0YVtdPiA9IG5ldyBFdmVudEVtaXR0ZXI8XHJcbiAgICBTVERhdGFbXVxyXG4gICAgPigpO1xyXG4gIC8qKlxyXG4gICAqIHJhZGlvw6XCj8KYw6XCjMKWw6bCl8K2w6XCm8Kew6jCsMKDw6/CvMKMw6XCj8KCw6bClcKww6TCuMK6w6XCvcKTw6XCicKNw6bCicKAw6nCgMKJXHJcbiAgICogQGRlcHJlY2F0ZWQgw6TCvcK/w6fClMKoIGBjaGFuZ2VgIMOmwpvCv8OkwrvCo1xyXG4gICAqIEBkZXByZWNhdGVkIGFzIG9mIHYzXHJcbiAgICovXHJcbiAgQE91dHB1dCgpXHJcbiAgcmVhZG9ubHkgcmFkaW9DaGFuZ2U6IEV2ZW50RW1pdHRlcjxTVERhdGE+ID0gbmV3IEV2ZW50RW1pdHRlcjxTVERhdGE+KCk7XHJcbiAgLyoqXHJcbiAgICogw6bCjsKSw6XCusKPw6XCm8Kew6jCsMKDXHJcbiAgICogQGRlcHJlY2F0ZWQgw6TCvcK/w6fClMKoIGBjaGFuZ2VgIMOmwpvCv8OkwrvCo1xyXG4gICAqIEBkZXByZWNhdGVkIGFzIG9mIHYzXHJcbiAgICovXHJcbiAgQE91dHB1dCgpXHJcbiAgcmVhZG9ubHkgc29ydENoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAvKipcclxuICAgKiDDqMK/wofDpsK7wqTDpcKPwpjDpcKMwpbDpsKXwrbDpcKbwp7DqMKwwoNcclxuICAgKiBAZGVwcmVjYXRlZCDDpMK9wr/Dp8KUwqggYGNoYW5nZWAgw6bCm8K/w6TCu8KjXHJcbiAgICogQGRlcHJlY2F0ZWQgYXMgb2YgdjNcclxuICAgKi9cclxuICBAT3V0cHV0KClcclxuICByZWFkb25seSBmaWx0ZXJDaGFuZ2U6IEV2ZW50RW1pdHRlcjxTVENvbHVtbj4gPSBuZXcgRXZlbnRFbWl0dGVyPFNUQ29sdW1uPigpO1xyXG4gIC8qKlxyXG4gICAqIMOowqHCjMOlwo3ClcOlwofCu8OlwpvCnsOowrDCg1xyXG4gICAqIEBkZXByZWNhdGVkIMOkwr3Cv8OnwpTCqCBgY2hhbmdlYCDDpsKbwr/DpMK7wqNcclxuICAgKiBAZGVwcmVjYXRlZCBhcyBvZiB2M1xyXG4gICAqL1xyXG4gIEBPdXRwdXQoKVxyXG4gIHJlYWRvbmx5IHJvd0NsaWNrOiBFdmVudEVtaXR0ZXI8U1RDaGFuZ2VSb3dDbGljaz4gPSBuZXcgRXZlbnRFbWl0dGVyPFxyXG4gICAgU1RDaGFuZ2VSb3dDbGlja1xyXG4gICAgPigpO1xyXG4gIC8qKlxyXG4gICAqIMOowqHCjMOlwo/CjMOlwofCu8OlwpvCnsOowrDCg1xyXG4gICAqIEBkZXByZWNhdGVkIMOkwr3Cv8OnwpTCqCBgY2hhbmdlYCDDpsKbwr/DpMK7wqNcclxuICAgKiBAZGVwcmVjYXRlZCBhcyBvZiB2M1xyXG4gICAqL1xyXG4gIEBPdXRwdXQoKVxyXG4gIHJlYWRvbmx5IHJvd0RibENsaWNrOiBFdmVudEVtaXR0ZXI8U1RDaGFuZ2VSb3dDbGljaz4gPSBuZXcgRXZlbnRFbWl0dGVyPFxyXG4gICAgU1RDaGFuZ2VSb3dDbGlja1xyXG4gICAgPigpO1xyXG4gIC8vI2VuZHJlZ2lvblxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBjb2c6IFNUQ29uZmlnLFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIGV4cG9ydFNydjogU1RFeHBvcnQsXHJcbiAgICBAT3B0aW9uYWwoKVxyXG4gICAgQEluamVjdChBTEFJTl9JMThOX1RPS0VOKVxyXG4gICAgaTE4blNydjogQWxhaW5JMThOU2VydmljZSxcclxuICAgIHByaXZhdGUgbW9kYWxIZWxwZXI6IE1vZGFsSGVscGVyLFxyXG4gICAgcHJpdmF0ZSBkcmF3ZXJIZWxwZXI6IERyYXdlckhlbHBlcixcclxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBhbnksXHJcbiAgICBwcml2YXRlIGNvbHVtblNvdXJjZTogU1RDb2x1bW5Tb3VyY2UsXHJcbiAgICBwcml2YXRlIGRhdGFTb3VyY2U6IFNURGF0YVNvdXJjZSxcclxuICApIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGVlcENvcHkoY29nKSk7XHJcbiAgICBpZiAoaTE4blNydikge1xyXG4gICAgICB0aGlzLmkxOG4kID0gaTE4blNydi5jaGFuZ2VcclxuICAgICAgICAucGlwZShmaWx0ZXIoKCkgPT4gdGhpcy5fY29sdW1ucy5sZW5ndGggPiAwKSlcclxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMudXBkYXRlQ29sdW1ucygpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlclRvdGFsKHRvdGFsOiBzdHJpbmcsIHJhbmdlOiBzdHJpbmdbXSkge1xyXG4gICAgcmV0dXJuIHRoaXMudG90YWxUcGxcclxuICAgICAgPyB0aGlzLnRvdGFsVHBsXHJcbiAgICAgICAgLnJlcGxhY2UoJ3t7dG90YWx9fScsIHRvdGFsKVxyXG4gICAgICAgIC5yZXBsYWNlKCd7e3JhbmdlWzBdfX0nLCByYW5nZVswXSlcclxuICAgICAgICAucmVwbGFjZSgne3tyYW5nZVsxXX19JywgcmFuZ2VbMV0pXHJcbiAgICAgIDogJyc7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNoYW5nZUVtaXQodHlwZTogU1RDaGFuZ2VUeXBlLCBkYXRhPzogYW55KSB7XHJcbiAgICBjb25zdCByZXM6IFNUQ2hhbmdlID0ge1xyXG4gICAgICB0eXBlLFxyXG4gICAgICBwaTogdGhpcy5waSxcclxuICAgICAgcHM6IHRoaXMucHMsXHJcbiAgICAgIHRvdGFsOiB0aGlzLnRvdGFsLFxyXG4gICAgfTtcclxuICAgIGlmIChkYXRhICE9IG51bGwpIHtcclxuICAgICAgcmVzW3R5cGVdID0gZGF0YTtcclxuICAgIH1cclxuICAgIHRoaXMuY2hhbmdlLmVtaXQocmVzKTtcclxuICB9XHJcblxyXG4gIC8vI3JlZ2lvbiBkYXRhXHJcblxyXG4gIHByaXZhdGUgX2xvYWQoKSB7XHJcbiAgICBjb25zdCB7IHBpLCBwcywgZGF0YSwgcmVxLCByZXMsIHBhZ2UsIHRvdGFsLCBtdWx0aVNvcnQgfSA9IHRoaXM7XHJcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgcmV0dXJuIHRoaXMuZGF0YVNvdXJjZVxyXG4gICAgICAucHJvY2Vzcyh7XHJcbiAgICAgICAgcGksXHJcbiAgICAgICAgcHMsXHJcbiAgICAgICAgdG90YWwsXHJcbiAgICAgICAgZGF0YSxcclxuICAgICAgICByZXEsXHJcbiAgICAgICAgcmVzLFxyXG4gICAgICAgIHBhZ2UsXHJcbiAgICAgICAgY29sdW1uczogdGhpcy5fY29sdW1ucyxcclxuICAgICAgICBtdWx0aVNvcnQsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQucGkgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICB0aGlzLnBpID0gcmVzdWx0LnBpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdC50b3RhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgIHRoaXMudG90YWwgPSByZXN1bHQudG90YWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0LnBhZ2VTaG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgdGhpcy5faXNQYWdpbmF0aW9uID0gcmVzdWx0LnBhZ2VTaG93O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9kYXRhID0gcmVzdWx0Lmxpc3Q7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGE7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IHRoaXMuX3JlZkNoZWNrKCkpXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5lcnJvci5lbWl0KHsgdHlwZTogJ3JlcScsIGVycm9yIH0pO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIMOmwqDCucOmwo3CrsOpwqHCtcOnwqDCgcOpwofCjcOmwpbCsMOlworCoMOowr3CvcOmwpXCsMOmwo3CrlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHBpIMOmwozCh8Olwq7CmsOlwr3Ck8OlwonCjcOpwqHCtcOnwqDCgcOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmAxYFxyXG4gICAqIEBwYXJhbSBleHRyYVBhcmFtcyDDqcKHwo3DpsKWwrDDpsKMwofDpcKuwpogYGV4dHJhUGFyYW1zYCDDpcKAwrxcclxuICAgKiBAcGFyYW0gb3B0aW9ucyDDqcKAwonDqcKhwrlcclxuICAgKi9cclxuICBsb2FkKHBpID0gMSwgZXh0cmFQYXJhbXM/OiBhbnksIG9wdGlvbnM/OiBTVExvYWRPcHRpb25zKSB7XHJcbiAgICBpZiAocGkgIT09IC0xKSB0aGlzLnBpID0gcGk7XHJcbiAgICBpZiAodHlwZW9mIGV4dHJhUGFyYW1zICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICB0aGlzLl9yZXEucGFyYW1zID1cclxuICAgICAgICBvcHRpb25zICYmIG9wdGlvbnMubWVyZ2VcclxuICAgICAgICAgID8gT2JqZWN0LmFzc2lnbih0aGlzLl9yZXEucGFyYW1zLCBleHRyYVBhcmFtcylcclxuICAgICAgICAgIDogZXh0cmFQYXJhbXM7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9jaGFuZ2UoJ3BpJyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDDqcKHwo3DpsKWwrDDpcKIwrfDpsKWwrDDpcK9wpPDpcKJwo3DqcKhwrVcclxuICAgKiBAcGFyYW0gZXh0cmFQYXJhbXMgw6nCh8KNw6bClsKww6bCjMKHw6XCrsKaIGBleHRyYVBhcmFtc2Agw6XCgMK8XHJcbiAgICovXHJcbiAgcmVsb2FkKGV4dHJhUGFyYW1zPzogYW55LCBvcHRpb25zPzogU1RMb2FkT3B0aW9ucykge1xyXG4gICAgdGhpcy5sb2FkKC0xLCBleHRyYVBhcmFtcywgb3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDDqcKHwo3Dp8K9wq7DpMK4wpTDqcKHwo3DpsKWwrDDqMKuwr7Dp8K9wq4gYHBpYCDDpMK4wrogYDFgw6/CvMKMw6XCjMKFw6XCkMKrw6TCu8Klw6TCuMKLw6XCgMK8w6/CvMKaXHJcbiAgICogLSBgY2hlY2tgIMOmwpXCsMOmwo3CrlxyXG4gICAqIC0gYHJhZGlvYCDDpsKVwrDDpsKNwq5cclxuICAgKiAtIGBzb3J0YCDDpsKVwrDDpsKNwq5cclxuICAgKiAtIGBmaWxldGVyYCDDpsKVwrDDpsKNwq5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBleHRyYVBhcmFtcyDDqcKHwo3DpsKWwrDDpsKMwofDpcKuwpogYGV4dHJhUGFyYW1zYCDDpcKAwrxcclxuICAgKi9cclxuICByZXNldChleHRyYVBhcmFtcz86IGFueSwgb3B0aW9ucz86IFNUTG9hZE9wdGlvbnMpIHtcclxuICAgIHRoaXMuY2xlYXJDaGVjaygpXHJcbiAgICAgIC5jbGVhclJhZGlvKClcclxuICAgICAgLmNsZWFyRmlsdGVyKClcclxuICAgICAgLmNsZWFyU29ydCgpO1xyXG4gICAgdGhpcy5sb2FkKDEsIGV4dHJhUGFyYW1zLCBvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3RvVG9wKCkge1xyXG4gICAgaWYgKCF0aGlzLnBhZ2UudG9Ub3ApIHJldHVybjtcclxuICAgIGNvbnN0IGVsID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgaWYgKHRoaXMuc2Nyb2xsKSB7XHJcbiAgICAgIGVsLnF1ZXJ5U2VsZWN0b3IoJy5hbnQtdGFibGUtYm9keScpLnNjcm9sbFRvKDAsIDApO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBlbC5zY3JvbGxJbnRvVmlldygpO1xyXG4gICAgLy8gZml4IGhlYWRlciBoZWlnaHRcclxuICAgIHRoaXMuZG9jLmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgLT0gdGhpcy5wYWdlLnRvVG9wT2Zmc2V0O1xyXG4gIH1cclxuXHJcbiAgX2NoYW5nZSh0eXBlOiAncGknIHwgJ3BzJykge1xyXG4gICAgdGhpcy5fbG9hZCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICB0aGlzLl90b1RvcCgpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmNoYW5nZUVtaXQodHlwZSk7XHJcbiAgfVxyXG5cclxuICBfY2xpY2soZTogRXZlbnQsIGl0ZW06IGFueSwgY29sOiBTVENvbHVtbikge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGNvbnN0IHJlcyA9IGNvbC5jbGljayhpdGVtLCB0aGlzKTtcclxuICAgIGlmICh0eXBlb2YgcmVzID09PSAnc3RyaW5nJykge1xyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHJlcyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJvd0NsaWNrQ291bnQgPSAwO1xyXG4gIF9yb3dDbGljayhlOiBFdmVudCwgaXRlbTogYW55LCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICBpZiAoKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5ub2RlTmFtZSA9PT0gJ0lOUFVUJykgcmV0dXJuO1xyXG4gICAgKyt0aGlzLnJvd0NsaWNrQ291bnQ7XHJcbiAgICBpZiAodGhpcy5yb3dDbGlja0NvdW50ICE9PSAxKSByZXR1cm47XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgY29uc3QgZGF0YSA9IHsgZSwgaXRlbSwgaW5kZXggfTtcclxuICAgICAgaWYgKHRoaXMucm93Q2xpY2tDb3VudCA9PT0gMSkge1xyXG4gICAgICAgIHRoaXMuY2hhbmdlRW1pdCgnY2xpY2snLCBkYXRhKTtcclxuICAgICAgICAvLyBAZGVwcmVjYXRlZCBhcyBvZiB2M1xyXG4gICAgICAgIHRoaXMucm93Q2xpY2suZW1pdChkYXRhKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmNoYW5nZUVtaXQoJ2RibENsaWNrJywgZGF0YSk7XHJcbiAgICAgICAgLy8gQGRlcHJlY2F0ZWQgYXMgb2YgdjNcclxuICAgICAgICB0aGlzLnJvd0RibENsaWNrLmVtaXQoZGF0YSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5yb3dDbGlja0NvdW50ID0gMDtcclxuICAgIH0sIHRoaXMucm93Q2xpY2tUaW1lKTtcclxuICB9XHJcblxyXG4gIC8vI2VuZHJlZ2lvblxyXG5cclxuICAvLyNyZWdpb24gc29ydFxyXG5cclxuICBzb3J0KGNvbDogU1RDb2x1bW4sIGlkeDogbnVtYmVyLCB2YWx1ZTogYW55KSB7XHJcbiAgICBpZiAodGhpcy5tdWx0aVNvcnQpIHtcclxuICAgICAgY29sLl9zb3J0LmRlZmF1bHQgPSB2YWx1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2NvbHVtbnMuZm9yRWFjaChcclxuICAgICAgICAoaXRlbSwgaW5kZXgpID0+IChpdGVtLl9zb3J0LmRlZmF1bHQgPSBpbmRleCA9PT0gaWR4ID8gdmFsdWUgOiBudWxsKSxcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHRoaXMuX2xvYWQoKTtcclxuICAgIGNvbnN0IHJlcyA9IHtcclxuICAgICAgdmFsdWUsXHJcbiAgICAgIG1hcDogdGhpcy5kYXRhU291cmNlLmdldFJlcVNvcnRNYXAodGhpcy5tdWx0aVNvcnQsIHRoaXMuX2NvbHVtbnMpLFxyXG4gICAgICBjb2x1bW46IGNvbCxcclxuICAgIH07XHJcbiAgICB0aGlzLmNoYW5nZUVtaXQoJ3NvcnQnLCByZXMpO1xyXG4gICAgLy8gQGRlcHJlY2F0ZWQgYXMgb2YgdjNcclxuICAgIHRoaXMuc29ydENoYW5nZS5lbWl0KHJlcyk7XHJcbiAgfVxyXG5cclxuICBjbGVhclNvcnQoKSB7XHJcbiAgICB0aGlzLl9jb2x1bW5zLmZvckVhY2goaXRlbSA9PiAoaXRlbS5fc29ydC5kZWZhdWx0ID0gbnVsbCkpO1xyXG4gIH1cclxuXHJcbiAgLy8jZW5kcmVnaW9uXHJcblxyXG4gIC8vI3JlZ2lvbiBmaWx0ZXJcclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVGaWx0ZXIoY29sOiBTVENvbHVtbikge1xyXG4gICAgY29sLmZpbHRlci5kZWZhdWx0ID0gY29sLmZpbHRlci5tZW51cy5maW5kSW5kZXgodyA9PiB3LmNoZWNrZWQpICE9PSAtMTtcclxuICAgIHRoaXMuX2xvYWQoKTtcclxuICAgIHRoaXMuY2hhbmdlRW1pdCgnZmlsdGVyJywgY29sKTtcclxuICAgIC8vIEBkZXByZWNhdGVkIGFzIG9mIHYzXHJcbiAgICB0aGlzLmZpbHRlckNoYW5nZS5lbWl0KGNvbCk7XHJcbiAgfVxyXG5cclxuICBfZmlsdGVyQ29uZmlybShjb2w6IFNUQ29sdW1uKSB7XHJcbiAgICB0aGlzLmhhbmRsZUZpbHRlcihjb2wpO1xyXG4gIH1cclxuXHJcbiAgX2ZpbHRlckNsZWFyKGNvbDogU1RDb2x1bW4pIHtcclxuICAgIGNvbC5maWx0ZXIubWVudXMuZm9yRWFjaChpID0+IChpLmNoZWNrZWQgPSBmYWxzZSkpO1xyXG4gICAgdGhpcy5oYW5kbGVGaWx0ZXIoY29sKTtcclxuICB9XHJcblxyXG4gIF9maWx0ZXJSYWRpbyhjb2w6IFNUQ29sdW1uLCBpdGVtOiBTVENvbHVtbkZpbHRlck1lbnUsIGNoZWNrZWQ6IGJvb2xlYW4pIHtcclxuICAgIGNvbC5maWx0ZXIubWVudXMuZm9yRWFjaChpID0+IChpLmNoZWNrZWQgPSBmYWxzZSkpO1xyXG4gICAgaXRlbS5jaGVja2VkID0gY2hlY2tlZDtcclxuICB9XHJcblxyXG4gIGNsZWFyRmlsdGVyKCkge1xyXG4gICAgdGhpcy5fY29sdW1uc1xyXG4gICAgICAuZmlsdGVyKHcgPT4gdy5maWx0ZXIgJiYgdy5maWx0ZXIuZGVmYXVsdCA9PT0gdHJ1ZSlcclxuICAgICAgLmZvckVhY2goY29sID0+IHtcclxuICAgICAgICBjb2wuZmlsdGVyLmRlZmF1bHQgPSBmYWxzZTtcclxuICAgICAgICBjb2wuZmlsdGVyLm1lbnVzLmZvckVhY2goZiA9PiAoZi5jaGVja2VkID0gZmFsc2UpKTtcclxuICAgICAgfSk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8vI2VuZHJlZ2lvblxyXG5cclxuICAvLyNyZWdpb24gY2hlY2tib3hcclxuXHJcbiAgLyoqIMOmwrjChcOpwpnCpMOmwonCgMOmwpzCiSBgY2hlY2tib3hgICovXHJcbiAgY2xlYXJDaGVjaygpOiB0aGlzIHtcclxuICAgIHJldHVybiB0aGlzLl9jaGVja0FsbChmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9yZWZDaGVjaygpOiB0aGlzIHtcclxuICAgIGNvbnN0IHZhbGlkRGF0YSA9IHRoaXMuX2RhdGEuZmlsdGVyKHcgPT4gIXcuZGlzYWJsZWQpO1xyXG4gICAgY29uc3QgY2hlY2tlZExpc3QgPSB2YWxpZERhdGEuZmlsdGVyKHcgPT4gdy5jaGVja2VkID09PSB0cnVlKTtcclxuICAgIHRoaXMuX2FsbENoZWNrZWQgPVxyXG4gICAgICBjaGVja2VkTGlzdC5sZW5ndGggPiAwICYmIGNoZWNrZWRMaXN0Lmxlbmd0aCA9PT0gdmFsaWREYXRhLmxlbmd0aDtcclxuICAgIGNvbnN0IGFsbFVuQ2hlY2tlZCA9IHZhbGlkRGF0YS5ldmVyeSh2YWx1ZSA9PiAhdmFsdWUuY2hlY2tlZCk7XHJcbiAgICB0aGlzLl9pbmRldGVybWluYXRlID0gIXRoaXMuX2FsbENoZWNrZWQgJiYgIWFsbFVuQ2hlY2tlZDtcclxuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBfY2hlY2tBbGwoY2hlY2tlZD86IGJvb2xlYW4pOiB0aGlzIHtcclxuICAgIGNoZWNrZWQgPSB0eXBlb2YgY2hlY2tlZCA9PT0gJ3VuZGVmaW5lZCcgPyB0aGlzLl9hbGxDaGVja2VkIDogY2hlY2tlZDtcclxuICAgIHRoaXMuX2RhdGEuZmlsdGVyKHcgPT4gIXcuZGlzYWJsZWQpLmZvckVhY2goaSA9PiAoaS5jaGVja2VkID0gY2hlY2tlZCkpO1xyXG4gICAgcmV0dXJuIHRoaXMuX3JlZkNoZWNrKCkuX2NoZWNrTm90aWZ5KCk7XHJcbiAgfVxyXG5cclxuICBfY2hlY2tTZWxlY3Rpb24oaTogU1REYXRhLCB2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgaS5jaGVja2VkID0gdmFsdWU7XHJcbiAgICByZXR1cm4gdGhpcy5fcmVmQ2hlY2soKS5fY2hlY2tOb3RpZnkoKTtcclxuICB9XHJcblxyXG4gIF9yb3dTZWxlY3Rpb24ocm93OiBTVENvbHVtblNlbGVjdGlvbik6IHRoaXMge1xyXG4gICAgcm93LnNlbGVjdCh0aGlzLl9kYXRhKTtcclxuICAgIHJldHVybiB0aGlzLl9yZWZDaGVjaygpLl9jaGVja05vdGlmeSgpO1xyXG4gIH1cclxuXHJcbiAgX2NoZWNrTm90aWZ5KCk6IHRoaXMge1xyXG4gICAgY29uc3QgcmVzID0gdGhpcy5fZGF0YS5maWx0ZXIodyA9PiAhdy5kaXNhYmxlZCAmJiB3LmNoZWNrZWQgPT09IHRydWUpO1xyXG4gICAgdGhpcy5jaGFuZ2VFbWl0KCdjaGVja2JveCcsIHJlcyk7XHJcbiAgICAvLyBAZGVwcmVjYXRlZCBhcyBvZiB2M1xyXG4gICAgdGhpcy5jaGVja2JveENoYW5nZS5lbWl0KHJlcyk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8vI2VuZHJlZ2lvblxyXG5cclxuICAvLyNyZWdpb24gcmFkaW9cclxuXHJcbiAgLyoqIMOmwrjChcOpwpnCpMOmwonCgMOmwpzCiSBgcmFkaW9gICovXHJcbiAgY2xlYXJSYWRpbygpOiB0aGlzIHtcclxuICAgIHRoaXMuX2RhdGEuZmlsdGVyKHcgPT4gdy5jaGVja2VkKS5mb3JFYWNoKGl0ZW0gPT4gKGl0ZW0uY2hlY2tlZCA9IGZhbHNlKSk7XHJcbiAgICB0aGlzLmNoYW5nZUVtaXQoJ3JhZGlvJywgbnVsbCk7XHJcbiAgICAvLyBAZGVwcmVjYXRlZCBhcyBvZiB2M1xyXG4gICAgdGhpcy5yYWRpb0NoYW5nZS5lbWl0KG51bGwpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBfcmVmUmFkaW8oY2hlY2tlZDogYm9vbGVhbiwgaXRlbTogU1REYXRhKTogdGhpcyB7XHJcbiAgICAvLyBpZiAoaXRlbS5kaXNhYmxlZCA9PT0gdHJ1ZSkgcmV0dXJuO1xyXG4gICAgdGhpcy5fZGF0YS5maWx0ZXIodyA9PiAhdy5kaXNhYmxlZCkuZm9yRWFjaChpID0+IChpLmNoZWNrZWQgPSBmYWxzZSkpO1xyXG4gICAgaXRlbS5jaGVja2VkID0gY2hlY2tlZDtcclxuICAgIHRoaXMuY2hhbmdlRW1pdCgncmFkaW8nLCBpdGVtKTtcclxuICAgIC8vIEBkZXByZWNhdGVkIGFzIG9mIHYzXHJcbiAgICB0aGlzLnJhZGlvQ2hhbmdlLmVtaXQoaXRlbSk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8vI2VuZHJlZ2lvblxyXG5cclxuICAvLyNyZWdpb24gYnV0dG9uc1xyXG5cclxuICBfYnRuQ2xpY2soZTogRXZlbnQsIHJlY29yZDogYW55LCBidG46IFNUQ29sdW1uQnV0dG9uKSB7XHJcbiAgICBpZiAoZSkgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGlmIChidG4udHlwZSA9PT0gJ21vZGFsJyB8fCBidG4udHlwZSA9PT0gJ3N0YXRpYycpIHtcclxuICAgICAgY29uc3Qgb2JqID0ge307XHJcbiAgICAgIGNvbnN0IHsgbW9kYWwgfSA9IGJ0bjtcclxuICAgICAgb2JqW21vZGFsLnBhcmFtc05hbWVdID0gcmVjb3JkO1xyXG4gICAgICBjb25zdCBvcHRpb25zOiBNb2RhbEhlbHBlck9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBtb2RhbCk7XHJcbiAgICAgICh0aGlzLm1vZGFsSGVscGVyW1xyXG4gICAgICAgIGJ0bi50eXBlID09PSAnbW9kYWwnID8gJ2NyZWF0ZScgOiAnY3JlYXRlU3RhdGljJ1xyXG4gICAgICBdIGFzIGFueSkoXHJcbiAgICAgICAgbW9kYWwuY29tcG9uZW50LFxyXG4gICAgICAgIE9iamVjdC5hc3NpZ24ob2JqLCBtb2RhbC5wYXJhbXMgJiYgbW9kYWwucGFyYW1zKHJlY29yZCkpLFxyXG4gICAgICAgIG9wdGlvbnMsXHJcbiAgICAgIClcclxuICAgICAgICAucGlwZShmaWx0ZXIodyA9PiB0eXBlb2YgdyAhPT0gJ3VuZGVmaW5lZCcpKVxyXG4gICAgICAgIC5zdWJzY3JpYmUocmVzID0+IHRoaXMuYnRuQ2FsbGJhY2socmVjb3JkLCBidG4sIHJlcykpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9IGVsc2UgaWYgKGJ0bi50eXBlID09PSAnZHJhd2VyJykge1xyXG4gICAgICBjb25zdCBvYmogPSB7fTtcclxuICAgICAgY29uc3QgeyBkcmF3ZXIgfSA9IGJ0bjtcclxuICAgICAgb2JqW2RyYXdlci5wYXJhbXNOYW1lXSA9IHJlY29yZDtcclxuICAgICAgY29uc3Qgb3B0aW9uczogRHJhd2VySGVscGVyT3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIGRyYXdlcik7XHJcbiAgICAgIHRoaXMuZHJhd2VySGVscGVyLmNyZWF0ZShcclxuICAgICAgICBkcmF3ZXIudGl0bGUsXHJcbiAgICAgICAgZHJhd2VyLmNvbXBvbmVudCxcclxuICAgICAgICBPYmplY3QuYXNzaWduKG9iaiwgZHJhd2VyLnBhcmFtcyAmJiBkcmF3ZXIucGFyYW1zKHJlY29yZCkpLFxyXG4gICAgICAgIE9iamVjdC5hc3NpZ24oe30sIGRyYXdlcilcclxuICAgICAgKVxyXG4gICAgICAgIC5waXBlKGZpbHRlcih3ID0+IHR5cGVvZiB3ICE9PSAndW5kZWZpbmVkJykpXHJcbiAgICAgICAgLnN1YnNjcmliZShyZXMgPT4gdGhpcy5idG5DYWxsYmFjayhyZWNvcmQsIGJ0biwgcmVzKSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH0gZWxzZSBpZiAoYnRuLnR5cGUgPT09ICdsaW5rJykge1xyXG4gICAgICBjb25zdCBjbGlja1JlcyA9IHRoaXMuYnRuQ2FsbGJhY2socmVjb3JkLCBidG4pO1xyXG4gICAgICBpZiAodHlwZW9mIGNsaWNrUmVzID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoY2xpY2tSZXMpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuYnRuQ2FsbGJhY2socmVjb3JkLCBidG4pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBidG5DYWxsYmFjayhyZWNvcmQ6IGFueSwgYnRuOiBTVENvbHVtbkJ1dHRvbiwgbW9kYWw/OiBhbnkpIHtcclxuICAgIGlmICghYnRuLmNsaWNrKSByZXR1cm47XHJcbiAgICBpZiAodHlwZW9mIGJ0bi5jbGljayA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgc3dpdGNoIChidG4uY2xpY2spIHtcclxuICAgICAgICBjYXNlICdsb2FkJzpcclxuICAgICAgICAgIHRoaXMubG9hZCgpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAncmVsb2FkJzpcclxuICAgICAgICAgIHRoaXMucmVsb2FkKCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGJ0bi5jbGljayhyZWNvcmQsIG1vZGFsLCB0aGlzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9idG5UZXh0KHJlY29yZDogYW55LCBidG46IFNUQ29sdW1uQnV0dG9uKSB7XHJcbiAgICBpZiAoYnRuLmZvcm1hdCkgcmV0dXJuIGJ0bi5mb3JtYXQocmVjb3JkLCBidG4pO1xyXG4gICAgcmV0dXJuIGJ0bi50ZXh0O1xyXG4gIH1cclxuXHJcbiAgLy8jZW5kcmVnaW9uXHJcblxyXG4gIC8vI3JlZ2lvbiBleHBvcnRcclxuXHJcbiAgLyoqXHJcbiAgICogw6XCr8K8w6XCh8K6w6XCvcKTw6XCicKNw6nCocK1w6/CvMKMw6fCocKuw6TCv8Kdw6XCt8Kyw6fCu8KPw6bCs8Kow6XChsKMIGBYbHN4TW9kdWxlYFxyXG4gICAqIEBwYXJhbSBuZXdEYXRhIMOpwofCjcOmwpbCsMOmwozCh8Olwq7CmsOmwpXCsMOmwo3CrsOvwrzCjMOkwr7Ci8OlwqbCgsOlwrjCjMOmwpzCm8Olwq/CvMOlwofCusOmwonCgMOmwpzCicOmwpXCsMOmwo3CrsOpwp3CnsOlwrjCuMOmwpzCicOnwpTCqFxyXG4gICAqIEBwYXJhbSBvcHQgw6nCosKdw6XCpMKWw6XCj8KCw6bClcKwXHJcbiAgICovXHJcbiAgZXhwb3J0KG5ld0RhdGE/OiBhbnlbXSwgb3B0PzogU1RFeHBvcnRPcHRpb25zKSB7XHJcbiAgICAobmV3RGF0YSA/IG9mKG5ld0RhdGEpIDogb2YodGhpcy5fZGF0YSkpLnN1YnNjcmliZSgocmVzOiBhbnlbXSkgPT5cclxuICAgICAgdGhpcy5leHBvcnRTcnYuZXhwb3J0KFxyXG4gICAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdCwgPFNURXhwb3J0T3B0aW9ucz57XHJcbiAgICAgICAgICBfZDogcmVzLFxyXG4gICAgICAgICAgX2M6IHRoaXMuX2NvbHVtbnMsXHJcbiAgICAgICAgfSksXHJcbiAgICAgICksXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLy8jZW5kcmVnaW9uXHJcblxyXG4gIHByaXZhdGUgdXBkYXRlQ29sdW1ucygpIHtcclxuICAgIHRoaXMuX2NvbHVtbnMgPSB0aGlzLmNvbHVtblNvdXJjZS5wcm9jZXNzKHRoaXMuY29sdW1ucyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldENsYXNzKCkge1xyXG4gICAgdXBkYXRlSG9zdENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5yZW5kZXJlciwge1xyXG4gICAgICBbYHN0YF06IHRydWUsXHJcbiAgICAgIFtgc3RfX3AtJHt0aGlzLnBhZ2UucGxhY2VtZW50fWBdOiB0aGlzLnBhZ2UucGxhY2VtZW50LFxyXG4gICAgICBbYGFudC10YWJsZS1yZXBfX2hpZGUtaGVhZGVyLWZvb3RlcmBdOiB0aGlzLnJlc3BvbnNpdmVIaWRlSGVhZGVyRm9vdGVyLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLmNvbHVtblNvdXJjZS5yZXN0b3JlQWxsUmVuZGVyKHRoaXMuX2NvbHVtbnMpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoXHJcbiAgICBjaGFuZ2VzOiB7IFtQIGluIGtleW9mIHRoaXNdPzogU2ltcGxlQ2hhbmdlIH0gJiBTaW1wbGVDaGFuZ2VzLFxyXG4gICk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMuY29sdW1ucykge1xyXG4gICAgICB0aGlzLnVwZGF0ZUNvbHVtbnMoKTtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzLmRhdGEgJiYgY2hhbmdlcy5kYXRhLmN1cnJlbnRWYWx1ZSkge1xyXG4gICAgICB0aGlzLl9sb2FkKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldENsYXNzKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmkxOG4kKSB0aGlzLmkxOG4kLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBOZ1pvcnJvQW50ZE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xyXG5cclxuaW1wb3J0IHsgRGVsb25VdGlsTW9kdWxlIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xyXG5pbXBvcnQgeyBEZWxvbkFDTE1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hY2wnO1xyXG5cclxuaW1wb3J0IHsgU1RDb21wb25lbnQgfSBmcm9tICcuL3RhYmxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNUUm93RGlyZWN0aXZlIH0gZnJvbSAnLi90YWJsZS1yb3cuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgU1RDb25maWcgfSBmcm9tICcuL3RhYmxlLmNvbmZpZyc7XHJcblxyXG5jb25zdCBDT01QT05FTlRTID0gW1NUQ29tcG9uZW50LCBTVFJvd0RpcmVjdGl2ZV07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIERlbG9uVXRpbE1vZHVsZSxcclxuICAgIERlbG9uQUNMTW9kdWxlLFxyXG4gICAgTmdab3Jyb0FudGRNb2R1bGUsXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFsuLi5DT01QT05FTlRTXSxcclxuICBleHBvcnRzOiBbLi4uQ09NUE9ORU5UU10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTVE1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4geyBuZ01vZHVsZTogU1RNb2R1bGUsIHByb3ZpZGVyczogW1NUQ29uZmlnXSB9O1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7c0JBV3dELEVBQUU7b0JBQ0osRUFBRTs7Ozs7Ozs7SUFFdEQsR0FBRyxDQUFDLElBQVksRUFBRSxJQUFZLEVBQUUsR0FBcUI7UUFDbkQsSUFBSSxDQUFDLElBQUksS0FBSyxPQUFPLEdBQUcsUUFBUSxHQUFHLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQztLQUN4RDs7Ozs7SUFFRCxRQUFRLENBQUMsSUFBWTtRQUNuQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDMUI7Ozs7O0lBRUQsTUFBTSxDQUFDLElBQVk7UUFDakIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3hCOzs7WUFmRixVQUFVOzs7Ozs7O0lBMEJULFlBQ1UsS0FDUSxNQUFtQjtRQUQzQixRQUFHLEdBQUgsR0FBRztRQUNLLFdBQU0sR0FBTixNQUFNLENBQWE7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