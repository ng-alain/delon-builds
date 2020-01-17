/**
 * @license ng-alain(cipchk@qq.com) v8.8.0
 * (c) 2019 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@delon/acl'), require('@delon/theme'), require('@delon/util'), require('@angular/common'), require('@angular/platform-browser'), require('rxjs'), require('rxjs/operators'), require('@delon/abc/xlsx'), require('@angular/router'), require('ng-zorro-antd/table'), require('@angular/forms'), require('ng-zorro-antd/badge'), require('ng-zorro-antd/checkbox'), require('ng-zorro-antd/divider'), require('ng-zorro-antd/dropdown'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/menu'), require('ng-zorro-antd/popconfirm'), require('ng-zorro-antd/radio'), require('ng-zorro-antd/tag'), require('ng-zorro-antd/input'), require('ng-zorro-antd/tooltip')) :
    typeof define === 'function' && define.amd ? define('@delon/abc/table', ['exports', '@angular/core', '@delon/acl', '@delon/theme', '@delon/util', '@angular/common', '@angular/platform-browser', 'rxjs', 'rxjs/operators', '@delon/abc/xlsx', '@angular/router', 'ng-zorro-antd/table', '@angular/forms', 'ng-zorro-antd/badge', 'ng-zorro-antd/checkbox', 'ng-zorro-antd/divider', 'ng-zorro-antd/dropdown', 'ng-zorro-antd/icon', 'ng-zorro-antd/menu', 'ng-zorro-antd/popconfirm', 'ng-zorro-antd/radio', 'ng-zorro-antd/tag', 'ng-zorro-antd/input', 'ng-zorro-antd/tooltip'], factory) :
    (global = global || self, factory((global.delon = global.delon || {}, global.delon.abc = global.delon.abc || {}, global.delon.abc.table = {}), global.ng.core, global.delon.acl, global.delon.theme, global.delon.util, global.ng.common, global.ng.platformBrowser, global.rxjs, global.rxjs.operators, global.delon.abc.xlsx, global.ng.router, global['ng-zorro-antd/table'], global.ng.forms, global['ng-zorro-antd/badge'], global['ng-zorro-antd/checkbox'], global['ng-zorro-antd/divider'], global['ng-zorro-antd/dropdown'], global['ng-zorro-antd/icon'], global['ng-zorro-antd/menu'], global['ng-zorro-antd/popconfirm'], global['ng-zorro-antd/radio'], global['ng-zorro-antd/tag'], global['ng-zorro-antd/input'], global['ng-zorro-antd/tooltip']));
}(this, (function (exports, core, acl, theme, util, common, platformBrowser, rxjs, operators, xlsx, router, table, forms, badge, checkbox, divider, dropdown, icon, menu, popconfirm, radio, tag, input, tooltip) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: table.interfaces.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function STWidthMode() { }
    if (false) {
        /**
         * 宽度类型
         * - `default` 默认行为
         * - `strict` 严格模式，即强制按 `width` 指定的宽度呈现，并根据 `strictBehavior` 类型处理
         * @type {?|undefined}
         */
        STWidthMode.prototype.type;
        /**
         * 严格模式的处理行为
         * - `wrap` 强制换行
         * - `truncate` 截短
         * @type {?|undefined}
         */
        STWidthMode.prototype.strictBehavior;
    }
    /**
     * @record
     */
    function STResetColumnsOption() { }
    if (false) {
        /** @type {?|undefined} */
        STResetColumnsOption.prototype.pi;
        /** @type {?|undefined} */
        STResetColumnsOption.prototype.ps;
        /** @type {?|undefined} */
        STResetColumnsOption.prototype.columns;
        /**
         * Whether to trigger a data load, default: `true`
         * @type {?|undefined}
         */
        STResetColumnsOption.prototype.emitReload;
    }
    /**
     * @record
     */
    function STReq() { }
    if (false) {
        /**
         * 分页类型，默认：`page`
         * - `page` 使用 `pi`，`ps` 组合
         * - `skip` 使用 `skip`，`limit` 组合
         * @type {?|undefined}
         */
        STReq.prototype.type;
        /**
         * 额外请求参数，默认自动附加 `pi`、`ps` 至URL
         * - `{ status: 'new' }` => `url?pi=1&ps=10&status=new`
         * @type {?|undefined}
         */
        STReq.prototype.params;
        /**
         * 请求方法，默认：`GET`
         * @type {?|undefined}
         */
        STReq.prototype.method;
        /**
         * 请求体 `body`
         * @type {?|undefined}
         */
        STReq.prototype.body;
        /**
         * 请求体 `Header`
         * @type {?|undefined}
         */
        STReq.prototype.headers;
        /**
         * 重命名参数 `pi`、`ps`，默认：`{ pi: 'pi', ps: 'ps' }`
         * - `{ pi: 'Page' }` => `pi` 会被替换成 Page
         * @type {?|undefined}
         */
        STReq.prototype.reName;
        /**
         * 是否将请求所有参数数据都放入 `body` 当中（`url` 地址本身参数除外），仅当 `method: 'POST'` 时有效，默认：`false`
         * @type {?|undefined}
         */
        STReq.prototype.allInBody;
        /**
         * 是否延迟加载数据，即渲染结束后不会主动发起请求，默认：`false`
         * @type {?|undefined}
         */
        STReq.prototype.lazyLoad;
        /**
         * 请求前数据处理
         * @type {?|undefined}
         */
        STReq.prototype.process;
    }
    /**
     * @record
     */
    function STRequestOptions() { }
    if (false) {
        /** @type {?|undefined} */
        STRequestOptions.prototype.body;
        /** @type {?|undefined} */
        STRequestOptions.prototype.headers;
        /** @type {?|undefined} */
        STRequestOptions.prototype.params;
        /** @type {?|undefined} */
        STRequestOptions.prototype.observe;
        /** @type {?|undefined} */
        STRequestOptions.prototype.reportProgress;
        /** @type {?|undefined} */
        STRequestOptions.prototype.responseType;
        /** @type {?|undefined} */
        STRequestOptions.prototype.withCredentials;
    }
    /**
     * @record
     */
    function STLoadOptions() { }
    if (false) {
        /**
         * 是否合并，默认：`false`
         * @type {?|undefined}
         */
        STLoadOptions.prototype.merge;
    }
    /**
     * @record
     */
    function STRes() { }
    if (false) {
        /**
         * 重命名返回参数 `total`、`list`
         * - `{ total: 'Total' }` => Total 会被当作 `total`
         * @type {?|undefined}
         */
        STRes.prototype.reName;
        /**
         * 数据预处理
         * @type {?|undefined}
         */
        STRes.prototype.process;
    }
    /**
     * @record
     */
    function STPage() { }
    if (false) {
        /**
         * 前端分页，当 `data` 为`any[]` 或 `Observable<any[]>` 有效，默认：`true`
         * - `true` 由 `st` 根据 `data` 长度受控分页，包括：排序、过滤等
         * - `false` 由用户通过 `total` 和 `data` 参数受控分页，并维护 `(change)` 当分页变更时重新加载数据
         * @type {?|undefined}
         */
        STPage.prototype.front;
        /**
         * 后端分页是否采用`0`基索引，只在`data`类型为`string`时有效，默认：`false`
         * @type {?|undefined}
         */
        STPage.prototype.zeroIndexed;
        /**
         * 指定分页显示的位置，默认：`bottom`
         * @type {?|undefined}
         */
        STPage.prototype.position;
        /**
         * 指定分页分页方向，默认：`right`
         * @type {?|undefined}
         */
        STPage.prototype.placement;
        /**
         * 是否显示分页器，默认：`true`
         * @type {?|undefined}
         */
        STPage.prototype.show;
        /**
         * 是否显示分页器中改变页数，默认：`false`
         * @type {?|undefined}
         */
        STPage.prototype.showSize;
        /**
         * 分页器中每页显示条目数下拉框值，默认：`[10, 20, 30, 40, 50]`
         * @type {?|undefined}
         */
        STPage.prototype.pageSizes;
        /**
         * 是否显示分页器中快速跳转，默认：`false`
         * @type {?|undefined}
         */
        STPage.prototype.showQuickJumper;
        /**
         * 是否显示总数据量
         * - `boolean` 类型显示与否，默认模板：`共 {{total}} 条`
         * - `string` 自定义模板，模板变量：
         *  - `{{total}}` 表示数据总量
         *  - `{{range[0]}}` 表示当前页开始数量值
         *  - `{{range[1]}}` 表示当前页结束数量值
         * @type {?|undefined}
         */
        STPage.prototype.total;
        /**
         * @deprecated 9.0.0. This is deprecated and going to be removed in 9.0.0.
         * 数据变更后是否保留在数据变更前的页码，默认：`true`
         * @type {?|undefined}
         */
        STPage.prototype.indexReset;
        /**
         * 切换分页时返回顶部，默认：`true`
         * @type {?|undefined}
         */
        STPage.prototype.toTop;
        /**
         * 返回顶部偏移值，默认：`100`
         * @type {?|undefined}
         */
        STPage.prototype.toTopOffset;
    }
    /**
     * 数据源
     * @record
     */
    function STData() { }
    if (false) {
        /**
         * 选择框或单选框状态值
         * @type {?|undefined}
         */
        STData.prototype.checked;
        /**
         * 选择框或单选框 `disabled` 值
         * @type {?|undefined}
         */
        STData.prototype.disabled;
        /**
         * 是否展开状态
         * @type {?|undefined}
         */
        STData.prototype.expand;
        /**
         * 是否显示展开按钮
         * @type {?|undefined}
         */
        STData.prototype.showExpand;
        /* Skipping unhandled member: [key: string]: any;*/
    }
    /**
     * 列描述
     * @record
     */
    function STColumn() { }
    if (false) {
        /**
         * 用于定义数据源主键，例如：`STStatistical`
         * @type {?|undefined}
         */
        STColumn.prototype.key;
        /**
         * 列标题
         * @type {?|undefined}
         */
        STColumn.prototype.title;
        /**
         * 列标题 i18n
         * @deprecated 使用 `title: { i18n: 'value' }` 代替
         * @type {?|undefined}
         */
        STColumn.prototype.i18n;
        /**
         * 列数据在数据项中对应的 key，支持 `a.b.c` 的嵌套写法，例如：
         * - `id`
         * - `price.market`
         * - `[ 'price', 'market' ]`
         * @type {?|undefined}
         */
        STColumn.prototype.index;
        /**
         * 类型
         * - `no` 行号，计算规则：`index + noIndex`
         * - `checkbox` 多选
         * - `radio` 单选
         * - `link` 链接，务必指定 `click`
         * - `badge` [徽标](https://ng.ant.design/components/badge/zh)，务必指定 `badge` 参数配置徽标对应值
         * - `tag` [标签](https://ng.ant.design/components/tag/zh)，务必指定 `tag` 参数配置标签对应值
         * - `img` 图片且居中(若 `className` 存在则优先)
         * - `number` 数字且居右(若 `className` 存在则优先)
         * - `currency` 货币且居右(若 `className` 存在则优先)
         * - `date` 日期格式且居中(若 `className` 存在则优先)，使用 `dateFormat` 自定义格式
         * - `yn` 将`boolean`类型徽章化 [document](https://ng-alain.com/docs/data-render#yn)
         * @type {?|undefined}
         */
        STColumn.prototype.type;
        /**
         * 链接回调，若返回一个字符串表示导航URL会自动触发 `router.navigateByUrl`
         * @type {?|undefined}
         */
        STColumn.prototype.click;
        /**
         * 按钮组
         * @type {?|undefined}
         */
        STColumn.prototype.buttons;
        /**
         * 自定义渲染ID
         * \@example
         * <ng-template st-row="custom" let-item let-index="index" let-column="column">
         *  {{ c.title }}
         * </ng-template>
         * @type {?|undefined}
         */
        STColumn.prototype.render;
        /**
         * 标题自定义渲染ID
         * \@example
         * <ng-template st-row="custom" type="title" let-c>
         *  {{ item | json }}
         * </ng-template>
         * @type {?|undefined}
         */
        STColumn.prototype.renderTitle;
        /**
         * 列宽（数字型表示 `px` 值），例如：`100`、`10%`、`100px`
         *
         * **注意：** 若固定列必须是数字
         * @type {?|undefined}
         */
        STColumn.prototype.width;
        /**
         * 排序配置项，远程数据配置**优先**规则：
         * - `true` 表示允许排序
         * - `string` 表示远程数据排序相对应 `key` 值
         * @type {?|undefined}
         */
        STColumn.prototype.sort;
        /**
         * 过滤配置项
         * @type {?|undefined}
         */
        STColumn.prototype.filter;
        /**
         * 格式化列值
         * @type {?|undefined}
         */
        STColumn.prototype.format;
        /**
         * 自定义全/反选选择项
         * @type {?|undefined}
         */
        STColumn.prototype.selections;
        /**
         * 列 `class` 属性值（注：无须 `.` 点），例如：
         * - `text-center` 居中
         * - `text-right` 居右
         * - `text-success` 成功色
         * - `text-danger` 异常色
         * @type {?|undefined}
         */
        STColumn.prototype.className;
        /**
         * 合并列
         * @type {?|undefined}
         */
        STColumn.prototype.colSpan;
        /**
         * 数字格式，`type=number` 有效
         * @type {?|undefined}
         */
        STColumn.prototype.numberDigits;
        /**
         * 日期格式，`type=date` 有效，（默认：`YYYY-MM-DD HH:mm`）
         * @type {?|undefined}
         */
        STColumn.prototype.dateFormat;
        /**
         * 当 `type=yn` 有效
         * @type {?|undefined}
         */
        STColumn.prototype.yn;
        /**
         * 是否允许导出，默认 `true`
         * @type {?|undefined}
         */
        STColumn.prototype.exported;
        /**
         * 权限，等同 [ACLCanType](https://ng-alain.com/acl/getting-started/#ACLCanType) 参数值
         * @type {?|undefined}
         */
        STColumn.prototype.acl;
        /**
         * 当不存在数据时以默认值替代
         * @type {?|undefined}
         */
        STColumn.prototype.default;
        /**
         * 固定前后列，当指定时务必指定 `width` 否则视为无效，有若干 **注意：** 项：
         *
         * - 若列头与内容不对齐或出现列重复，请指定列的宽度 `width`
         * - 建议指定 `scroll.x` 为大于表格宽度的固定值或百分比。注意，且非固定列宽度之和不要超过 `scroll.x`
         * @type {?|undefined}
         */
        STColumn.prototype.fixed;
        /**
         * 徽标配置项
         * @type {?|undefined}
         */
        STColumn.prototype.badge;
        /**
         * 标签配置项
         * @type {?|undefined}
         */
        STColumn.prototype.tag;
        /**
         * 行号索引，默认：`1`
         * - 计算规则为：`index + noIndex`
         * - 支持自定义方法
         * @type {?|undefined}
         */
        STColumn.prototype.noIndex;
        /**
         * 条件表达式
         * - 仅赋值 `columns` 时执行一次
         * - 可调用 `resetColumns()` 再一次触发
         * @type {?|undefined}
         */
        STColumn.prototype.iif;
        /**
         * 统计
         * @type {?|undefined}
         */
        STColumn.prototype.statistical;
        /**
         * @ignore internal property
         * @type {?|undefined}
         */
        STColumn.prototype._sort;
        /* Skipping unhandled member: [key: string]: any;*/
    }
    /**
     * @record
     */
    function STColumnTitle() { }
    if (false) {
        /**
         * Text of header, can be choose one of `text` or `i18n`
         * @type {?|undefined}
         */
        STColumnTitle.prototype.text;
        /**
         * I18n key of header, can be choose one of `text` or `i18n`
         * @type {?|undefined}
         */
        STColumnTitle.prototype.i18n;
        /**
         * Optional information of header
         * @type {?|undefined}
         */
        STColumnTitle.prototype.optional;
        /**
         * Optional help of header
         * @type {?|undefined}
         */
        STColumnTitle.prototype.optionalHelp;
    }
    /**
     * @record
     */
    function STStatistical() { }
    if (false) {
        /** @type {?} */
        STStatistical.prototype.type;
        /**
         * 保留小数位数，默认：`2`
         * @type {?|undefined}
         */
        STStatistical.prototype.digits;
        /**
         * 是否需要货币格式化，默认以下情况为 `true`
         * - `type` 为 `STStatisticalFn`、 `sum`、`average`、`max`、`min`
         * @type {?|undefined}
         */
        STStatistical.prototype.currency;
    }
    /**
     * @record
     */
    function STStatisticalResults() { }
    /**
     * @record
     */
    function STStatisticalResult() { }
    if (false) {
        /** @type {?} */
        STStatisticalResult.prototype.value;
        /** @type {?|undefined} */
        STStatisticalResult.prototype.text;
    }
    /**
     * @record
     */
    function STColumnSort() { }
    if (false) {
        /**
         * 排序的默认受控属性
         * @type {?|undefined}
         */
        STColumnSort.prototype.default;
        /**
         * 本地数据的排序函数，使用一个函数(参考 [Array.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) 的 compareFunction)
         * - `null` 忽略本地排序，但保持排序功能
         * @type {?|undefined}
         */
        STColumnSort.prototype.compare;
        /**
         * 远程数据的排序时后端相对应的KEY，默认使用 `index` 属性
         * - 若 `multiSort: false` 时：`key: 'name' => ?name=1&pi=1`
         * - 若 `multiSort: true` 允许多个排序 key 存在，或使用 `STMultiSort` 指定多列排序key合并规则
         * @type {?|undefined}
         */
        STColumnSort.prototype.key;
        /**
         * 远程数据的排序时后端相对应的VALUE
         * - `{ ascend: '0', descend: '1' }` 结果 `?name=1&pi=1`
         * - `{ ascend: 'asc', descend: 'desc' }` 结果 `?name=desc&pi=1`
         * @type {?|undefined}
         */
        STColumnSort.prototype.reName;
    }
    /**
     * @record
     */
    function STSortMap() { }
    if (false) {
        /**
         * 是否启用排序
         * @type {?|undefined}
         */
        STSortMap.prototype.enabled;
        /* Skipping unhandled member: [key: string]: any;*/
    }
    /**
     * @record
     */
    function STColumnFilter() { }
    if (false) {
        /**
         * 搜索方式
         * - `defualt` 默认形式
         * - `keyword` 文本框形式
         * @type {?|undefined}
         */
        STColumnFilter.prototype.type;
        /**
         * 表头的筛选菜单项，至少一项才会生效
         * - 当 `type='keyword'` 时可为空
         * @type {?|undefined}
         */
        STColumnFilter.prototype.menus;
        /**
         * 本地数据的筛选函数
         * @type {?|undefined}
         */
        STColumnFilter.prototype.fn;
        /**
         * 标识数据是否已过滤，筛选图标会高亮
         * @type {?|undefined}
         */
        STColumnFilter.prototype.default;
        /**
         * 自定义 filter 图标
         * - 当 `type='default'` 默认 `filter`
         * - 当 `type='keyword'` 默认 `search`
         * @type {?|undefined}
         */
        STColumnFilter.prototype.icon;
        /**
         * 确认按钮文本，默认 `确认`
         * @type {?|undefined}
         */
        STColumnFilter.prototype.confirmText;
        /**
         * 清除按钮文本，默认 `重置`
         * @type {?|undefined}
         */
        STColumnFilter.prototype.clearText;
        /**
         * 是否多选，默认 `true`
         * @type {?|undefined}
         */
        STColumnFilter.prototype.multiple;
        /**
         * 远程数据的过滤时后端相对应的KEY，默认使用 `index` 属性
         * `key: 'name'` 结果 `?name=1&pi=1`
         * @type {?|undefined}
         */
        STColumnFilter.prototype.key;
        /**
         * 远程数据的过滤时后端相对应的VALUE
         * - 默认当 `multiple: true` 时以英文逗号拼接的字符串
         * \@return 返回为 Object 对象
         * @type {?|undefined}
         */
        STColumnFilter.prototype.reName;
    }
    /**
     * @record
     */
    function STColumnFilterMenu() { }
    if (false) {
        /**
         * 文本
         * - 当 `type: 'keyword'` 时表示 `placeholder`
         * @type {?|undefined}
         */
        STColumnFilterMenu.prototype.text;
        /**
         * 值
         * @type {?|undefined}
         */
        STColumnFilterMenu.prototype.value;
        /**
         * 是否选中
         * @type {?|undefined}
         */
        STColumnFilterMenu.prototype.checked;
        /**
         * 权限，等同 [ACLCanType](https://ng-alain.com/acl/getting-started/#ACLCanType) 参数值
         * @type {?|undefined}
         */
        STColumnFilterMenu.prototype.acl;
        /* Skipping unhandled member: [key: string]: any;*/
    }
    /**
     * @record
     */
    function STColumnSelection() { }
    if (false) {
        /**
         * 选择项显示的文字
         * @type {?}
         */
        STColumnSelection.prototype.text;
        /**
         * 选择项点击回调，允许对参数 `data.checked` 进行操作
         * @type {?}
         */
        STColumnSelection.prototype.select;
        /**
         * 权限，等同 `can()` 参数值
         * @type {?|undefined}
         */
        STColumnSelection.prototype.acl;
    }
    /**
     * 当 `type=yn` 有效
     * @record
     */
    function STColumnYn() { }
    if (false) {
        /**
         * 真值条件，（默认：`true`）
         * @type {?|undefined}
         */
        STColumnYn.prototype.truth;
        /**
         * 徽章 `true` 时文本，（默认：`是`）
         * @type {?|undefined}
         */
        STColumnYn.prototype.yes;
        /**
         * 徽章 `false` 时文本，（默认：`否`）
         * @type {?|undefined}
         */
        STColumnYn.prototype.no;
        /**
         * 徽章显示风格
         * - `full` 图标和文本
         * - `icon` 图标
         * - `text` 文本
         * @type {?|undefined}
         */
        STColumnYn.prototype.mode;
    }
    /**
     * @record
     */
    function STIcon() { }
    if (false) {
        /**
         * 图标类型
         * @type {?}
         */
        STIcon.prototype.type;
        /**
         * 图标主题风格，默认：`outline`
         * @type {?|undefined}
         */
        STIcon.prototype.theme;
        /**
         * 是否有旋转动画，默认：`false`
         * @type {?|undefined}
         */
        STIcon.prototype.spin;
        /**
         * 仅适用双色图标，设置双色图标的主要颜色，仅对当前 icon 生效
         * @type {?|undefined}
         */
        STIcon.prototype.twoToneColor;
        /**
         * 指定来自 IconFont 的图标类型
         * @type {?|undefined}
         */
        STIcon.prototype.iconfont;
    }
    /**
     * 按钮配置
     * @record
     */
    function STColumnButton() { }
    if (false) {
        /**
         * 文本
         * @type {?|undefined}
         */
        STColumnButton.prototype.text;
        /**
         * 文本 i18n
         * @type {?|undefined}
         */
        STColumnButton.prototype.i18n;
        /**
         * 图标
         * @type {?|undefined}
         */
        STColumnButton.prototype.icon;
        /**
         * 格式化文本
         * @deprecated 使用 `text` 代替
         * @type {?|undefined}
         */
        STColumnButton.prototype.format;
        /**
         * 按钮类型
         * - `none` 无任何互动
         * - `del` 删除，默认开启 `pop: true`
         * - `modal` 对话框，需要指定 `component` 才会生效
         * - `static` 静态对话框，需要指定 `component` 才会生效
         * - `drawer` 抽屉，需要指定 `component` 才会生效
         * - `link` 链接，当 `click` 返回字符串时自动调用 `navigateByUrl` 导航
         * - `divider` 分割线
         * @type {?|undefined}
         */
        STColumnButton.prototype.type;
        /**
         * 点击回调
         * - Function
         *  - `type=modal` 只会在当有传回值时才会触发回调
         * - reload：重新刷新当前页
         * - load：重新加载数据，并重置页码为：`1`
         *
         * \@todo Bad parameter design
         * @type {?|undefined}
         */
        STColumnButton.prototype.click;
        /**
         * 气泡确认框参数，若 `string` 类型表示标题
         * @type {?|undefined}
         */
        STColumnButton.prototype.pop;
        /**
         * 气泡确认框内容，默认 `确认删除吗？`
         *
         * @deprecated 已过期，请使用 `pop.title` 替代
         * @type {?|undefined}
         */
        STColumnButton.prototype.popTitle;
        /**
         * 对话框参数
         * @type {?|undefined}
         */
        STColumnButton.prototype.modal;
        /**
         * 抽屉参数
         * @type {?|undefined}
         */
        STColumnButton.prototype.drawer;
        /**
         * 下拉菜单，当存在时以 `dropdown` 形式渲染
         * - 只支持一级
         * @type {?|undefined}
         */
        STColumnButton.prototype.children;
        /**
         * 权限，等同 [ACLCanType](https://ng-alain.com/acl/getting-started/#ACLCanType) 参数值
         * @type {?|undefined}
         */
        STColumnButton.prototype.acl;
        /**
         * Conditional expression
         *
         * \@todo Bad parameter design
         * @type {?|undefined}
         */
        STColumnButton.prototype.iif;
        /**
         * Conditional expression rendering behavior, can be set to `hide` (default) or `disabled`
         * @type {?|undefined}
         */
        STColumnButton.prototype.iifBehavior;
        /** @type {?|undefined} */
        STColumnButton.prototype.tooltip;
        /**
         * @deprecated 9.0.0. This is deprecated and going to be removed in 9.0.0.
         * @type {?|undefined}
         */
        STColumnButton.prototype.component;
        /* Skipping unhandled member: [key: string]: any;*/
    }
    /**
     * @record
     */
    function STColumnButtonOK() { }
    if (false) {
        /** @type {?} */
        STColumnButtonOK.prototype.record;
        /**
         * Modal or drawer return value when trigger confirm.
         * @type {?|undefined}
         */
        STColumnButtonOK.prototype.ret;
        /** @type {?|undefined} */
        STColumnButtonOK.prototype.instance;
        /** @type {?} */
        STColumnButtonOK.prototype.event;
    }
    /**
     * @record
     */
    function STColumnButtonModal() { }
    if (false) {
        /**
         * 对话框组件对象，务必在 `entryComponents` 注册
         * @type {?|undefined}
         */
        STColumnButtonModal.prototype.component;
        /**
         * 对话框参数
         * @type {?|undefined}
         */
        STColumnButtonModal.prototype.params;
        /**
         * 对话框目标组件的接收参数名，默认：`record`
         * @type {?|undefined}
         */
        STColumnButtonModal.prototype.paramsName;
    }
    /**
     * @record
     */
    function STColumnButtonModalConfig() { }
    if (false) {
        /**
         * 指定模态框目标组件的接收参数名，默认：`record`
         * @type {?|undefined}
         */
        STColumnButtonModalConfig.prototype.paramsName;
        /**
         * 大小；例如：lg、600，默认：`lg`
         * @type {?|undefined}
         */
        STColumnButtonModalConfig.prototype.size;
        /**
         * 对话框 [ModalOptionsForService](https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/components/modal/nz-modal.type.ts) 参数
         * @type {?|undefined}
         */
        STColumnButtonModalConfig.prototype.modalOptions;
        /**
         * 是否精准（默认：`true`），若返回值非空值（`null`或`undefined`）视为成功，否则视为错误
         * @type {?|undefined}
         */
        STColumnButtonModalConfig.prototype.exact;
    }
    /**
     * @record
     */
    function STColumnButtonDrawer() { }
    if (false) {
        /**
         * 标题
         * @type {?|undefined}
         */
        STColumnButtonDrawer.prototype.title;
        /**
         * 抽屉组件对象，务必在 `entryComponents` 注册
         * @type {?|undefined}
         */
        STColumnButtonDrawer.prototype.component;
        /**
         * 抽屉参数
         * @type {?|undefined}
         */
        STColumnButtonDrawer.prototype.params;
        /**
         * 抽屉目标组件的接收参数名，默认：`record`
         * @type {?|undefined}
         */
        STColumnButtonDrawer.prototype.paramsName;
    }
    /**
     * @record
     */
    function STColumnButtonDrawerConfig() { }
    if (false) {
        /**
         * 抽屉目标组件的接收参数名，默认：`record`
         * @type {?|undefined}
         */
        STColumnButtonDrawerConfig.prototype.paramsName;
        /**
         * 大小；例如：lg、600，默认：`md`
         *
         * | 类型 | 默认大小 |
         * | --- | ------ |
         * | `sm` | `300` |
         * | `md` | `600` |
         * | `lg` | `900` |
         * | `xl` | `1200` |
         *
         * > 以上值，可通过覆盖相应的LESS参数自行调整
         * @type {?|undefined}
         */
        STColumnButtonDrawerConfig.prototype.size;
        /**
         * 是否包含底部工具条，默认：`true`
         * @type {?|undefined}
         */
        STColumnButtonDrawerConfig.prototype.footer;
        /**
         * 底部工具条高度，默认：`55`
         * @type {?|undefined}
         */
        STColumnButtonDrawerConfig.prototype.footerHeight;
        /**
         * 抽屉 [NzDrawerOptions](https://ng.ant.design/components/drawer/zh#nzdraweroptions) 参数
         * @type {?|undefined}
         */
        STColumnButtonDrawerConfig.prototype.drawerOptions;
    }
    /**
     * @record
     */
    function STColumnButtonPop() { }
    if (false) {
        /**
         * Title of the popover, default: `确认删除吗？`
         * @type {?|undefined}
         */
        STColumnButtonPop.prototype.title;
        /**
         * Popover trigger mode, default: `click`
         * @type {?|undefined}
         */
        STColumnButtonPop.prototype.trigger;
        /**
         * The position of the popover relative to the target, default: `top`
         * @type {?|undefined}
         */
        STColumnButtonPop.prototype.placement;
        /**
         * Class name of the popover card
         * @type {?|undefined}
         */
        STColumnButtonPop.prototype.overlayClassName;
        /**
         * Style of the popover card
         * @type {?|undefined}
         */
        STColumnButtonPop.prototype.overlayStyle;
        /**
         * Text of the Cancel button
         * @type {?|undefined}
         */
        STColumnButtonPop.prototype.cancelText;
        /**
         * Text of the Confirm button
         * @type {?|undefined}
         */
        STColumnButtonPop.prototype.okText;
        /**
         * Button `type` of the Confirm button
         * @type {?|undefined}
         */
        STColumnButtonPop.prototype.okType;
        /**
         * Customize icon of confirmation
         * @type {?|undefined}
         */
        STColumnButtonPop.prototype.icon;
        /**
         * Whether to directly emit `onConfirm` without showing Popconfirm, default: `() => false`
         * @type {?|undefined}
         */
        STColumnButtonPop.prototype.condition;
    }
    /**
     * @record
     */
    function STReqReNameType() { }
    if (false) {
        /** @type {?|undefined} */
        STReqReNameType.prototype.pi;
        /** @type {?|undefined} */
        STReqReNameType.prototype.ps;
        /** @type {?|undefined} */
        STReqReNameType.prototype.skip;
        /** @type {?|undefined} */
        STReqReNameType.prototype.limit;
    }
    /**
     * @record
     */
    function STResReNameType() { }
    if (false) {
        /** @type {?|undefined} */
        STResReNameType.prototype.total;
        /** @type {?|undefined} */
        STResReNameType.prototype.list;
    }
    /**
     * @record
     */
    function STExportOptions() { }
    if (false) {
        /**
         * @ignore internal property
         * @type {?|undefined}
         */
        STExportOptions.prototype._d;
        /**
         * @ignore internal property
         * @type {?|undefined}
         */
        STExportOptions.prototype._c;
        /**
         * 工作溥名
         * @type {?|undefined}
         */
        STExportOptions.prototype.sheetname;
        /**
         * 文件名
         * @type {?|undefined}
         */
        STExportOptions.prototype.filename;
        /**
         * triggers when saveas
         * @type {?|undefined}
         */
        STExportOptions.prototype.callback;
    }
    /**
     * 单排序规则
     * - 若不指定，则返回：`columnName=ascend|descend`
     * - 若指定，则返回：`sort=columnName.(ascend|descend)`
     * @record
     */
    function STSingleSort() { }
    if (false) {
        /**
         * 请求参数名，默认：`sort`
         * @type {?|undefined}
         */
        STSingleSort.prototype.key;
        /**
         * 列名与状态间分隔符，默认：`.`
         * @type {?|undefined}
         */
        STSingleSort.prototype.nameSeparator;
    }
    /**
     * 多排序相同排序 key 时合并规则
     * @record
     */
    function STMultiSort() { }
    if (false) {
        /**
         * 请求参数名，默认：`sort`
         * @type {?|undefined}
         */
        STMultiSort.prototype.key;
        /**
         * 不同属性间分隔符，默认：`-`
         * @type {?|undefined}
         */
        STMultiSort.prototype.separator;
        /**
         * 列名与状态间分隔符，默认：`.`
         * @type {?|undefined}
         */
        STMultiSort.prototype.nameSeparator;
        /**
         * 是否全局多排序模式，默认：`true`
         * - `true` 表示所有 `st` 默认为多排序
         * - `false` 表示需要为每个 `st` 添加 `multiSort` 才会视为多排序模式
         * @type {?|undefined}
         */
        STMultiSort.prototype.global;
        /**
         * 是否保持空值的键名，默认：`true`
         * - `true` 表示不管是否有排序都会发送 `key` 键名
         * - `false` 表示无排序动作时不会发送 `key` 键名
         * @type {?|undefined}
         */
        STMultiSort.prototype.keepEmptyKey;
    }
    /**
     * 徽标信息
     * @record
     */
    function STColumnBadge() { }
    /**
     * @record
     */
    function STColumnBadgeValue() { }
    if (false) {
        /**
         * 文本
         * @type {?|undefined}
         */
        STColumnBadgeValue.prototype.text;
        /**
         * 徽标颜色值
         * @type {?|undefined}
         */
        STColumnBadgeValue.prototype.color;
    }
    /**
     * 标签信息
     * @record
     */
    function STColumnTag() { }
    /**
     * @record
     */
    function STColumnTagValue() { }
    if (false) {
        /**
         * 文本
         * @type {?|undefined}
         */
        STColumnTagValue.prototype.text;
        /**
         * 颜色值，支持预设和色值
         * - 预设：geekblue,blue,purple,success,red,volcano,orange,gold,lime,green,cyan
         * - 色值：#f50,#ff0
         * @type {?|undefined}
         */
        STColumnTagValue.prototype.color;
    }
    /**
     * 回调数据
     * @record
     */
    function STChange() { }
    if (false) {
        /**
         * 回调类型
         * @type {?}
         */
        STChange.prototype.type;
        /**
         * 当前页码
         * @type {?}
         */
        STChange.prototype.pi;
        /**
         * 每页数量
         * @type {?}
         */
        STChange.prototype.ps;
        /**
         * 数据总量
         * @type {?}
         */
        STChange.prototype.total;
        /**
         * `loaded` 参数
         * @type {?|undefined}
         */
        STChange.prototype.loaded;
        /**
         * `checkbox` 参数
         * @type {?|undefined}
         */
        STChange.prototype.checkbox;
        /**
         * `radio` 参数
         * @type {?|undefined}
         */
        STChange.prototype.radio;
        /**
         * 排序参数
         * @type {?|undefined}
         */
        STChange.prototype.sort;
        /**
         * 过滤参数
         * @type {?|undefined}
         */
        STChange.prototype.filter;
        /**
         * 行点击参数
         * @type {?|undefined}
         */
        STChange.prototype.click;
        /**
         * 行双击参数
         * @type {?|undefined}
         */
        STChange.prototype.dblClick;
        /**
         * `expand` 参数
         * @type {?|undefined}
         */
        STChange.prototype.expand;
    }
    /**
     * 行单击参数
     * @record
     */
    function STChangeSort() { }
    if (false) {
        /** @type {?|undefined} */
        STChangeSort.prototype.value;
        /** @type {?|undefined} */
        STChangeSort.prototype.map;
        /** @type {?|undefined} */
        STChangeSort.prototype.column;
    }
    /**
     * 行单击参数
     * @record
     */
    function STChangeRowClick() { }
    if (false) {
        /** @type {?|undefined} */
        STChangeRowClick.prototype.e;
        /** @type {?|undefined} */
        STChangeRowClick.prototype.item;
        /** @type {?|undefined} */
        STChangeRowClick.prototype.index;
    }
    /**
     * @record
     */
    function STError() { }
    if (false) {
        /** @type {?|undefined} */
        STError.prototype.type;
        /** @type {?|undefined} */
        STError.prototype.error;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: table-row.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var STRowSource = /** @class */ (function () {
        function STRowSource() {
            this.titles = {};
            this.rows = {};
        }
        /**
         * @param {?} type
         * @param {?} path
         * @param {?} ref
         * @return {?}
         */
        STRowSource.prototype.add = /**
         * @param {?} type
         * @param {?} path
         * @param {?} ref
         * @return {?}
         */
        function (type, path, ref) {
            this[type === 'title' ? 'titles' : 'rows'][path] = ref;
        };
        /**
         * @param {?} path
         * @return {?}
         */
        STRowSource.prototype.getTitle = /**
         * @param {?} path
         * @return {?}
         */
        function (path) {
            return this.titles[path];
        };
        /**
         * @param {?} path
         * @return {?}
         */
        STRowSource.prototype.getRow = /**
         * @param {?} path
         * @return {?}
         */
        function (path) {
            return this.rows[path];
        };
        STRowSource.decorators = [
            { type: core.Injectable }
        ];
        return STRowSource;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        STRowSource.prototype.titles;
        /**
         * @type {?}
         * @private
         */
        STRowSource.prototype.rows;
    }
    var STRowDirective = /** @class */ (function () {
        function STRowDirective(ref, source) {
            this.ref = ref;
            this.source = source;
        }
        /**
         * @return {?}
         */
        STRowDirective.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.source.add(this.type, this.id, this.ref);
        };
        STRowDirective.decorators = [
            { type: core.Directive, args: [{ selector: '[st-row]' },] }
        ];
        /** @nocollapse */
        STRowDirective.ctorParameters = function () { return [
            { type: core.TemplateRef },
            { type: STRowSource, decorators: [{ type: core.Host }] }
        ]; };
        STRowDirective.propDecorators = {
            id: [{ type: core.Input, args: ['st-row',] }],
            type: [{ type: core.Input }]
        };
        return STRowDirective;
    }());
    if (false) {
        /** @type {?} */
        STRowDirective.prototype.id;
        /** @type {?} */
        STRowDirective.prototype.type;
        /**
         * @type {?}
         * @private
         */
        STRowDirective.prototype.ref;
        /**
         * @type {?}
         * @private
         */
        STRowDirective.prototype.source;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: table.config.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var STConfig = /** @class */ (function () {
        function STConfig() {
            /**
             * table大小
             */
            this.size = 'default';
            /**
             * 是否开启响应式，默认：`true`
             */
            this.responsive = true;
            /**
             * 是否在小屏幕下才显示顶部与底部，默认：`false`
             */
            this.responsiveHideHeaderFooter = false;
            /**
             * 请求体配置
             */
            this.req = {
                type: 'page',
                method: 'GET',
                allInBody: false,
                lazyLoad: false,
                reName: { pi: 'pi', ps: 'ps', skip: 'skip', limit: 'limit' },
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
                position: 'bottom',
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
            this.multiSort = null;
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
             * 气泡参数
             */
            this.pop = {
                title: '确认删除吗？',
            };
            /**
             * 行单击多少时长之类为双击（单位：毫秒），默认：`200`
             */
            this.rowClickTime = 200;
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
            /**
             * 通过点击行来展开子行
             */
            this.expandRowByClick = false;
            /**
             * 手风琴模式
             */
            this.expandAccordion = false;
            /**
             * 指定 `width` 模式
             */
            this.widthMode = {
                type: 'default',
                strictBehavior: 'truncate',
            };
            this.virtualItemSize = 54;
            this.virtualMaxBufferPx = 200;
            this.virtualMinBufferPx = 100;
            /**
             * Conditional expression rendering behavior, can be set to `hide` (default) or `disabled`
             */
            this.iifBehavior = 'hide';
        }
        STConfig.decorators = [
            { type: core.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */ STConfig.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function STConfig_Factory() { return new STConfig(); }, token: STConfig, providedIn: "root" });
        return STConfig;
    }());
    if (false) {
        /**
         * 起始页码，默认为：`1`
         * @type {?}
         */
        STConfig.prototype.pi;
        /**
         * 每页数量，当设置为 `0` 表示不分页，默认：`10`
         * @type {?}
         */
        STConfig.prototype.ps;
        /**
         * 是否显示边框
         * @type {?}
         */
        STConfig.prototype.bordered;
        /**
         * table大小
         * @type {?}
         */
        STConfig.prototype.size;
        /**
         * 是否开启响应式，默认：`true`
         * @type {?}
         */
        STConfig.prototype.responsive;
        /**
         * 是否在小屏幕下才显示顶部与底部，默认：`false`
         * @type {?}
         */
        STConfig.prototype.responsiveHideHeaderFooter;
        /**
         * 请求体配置
         * @type {?}
         */
        STConfig.prototype.req;
        /**
         * 返回体配置
         * @type {?}
         */
        STConfig.prototype.res;
        /**
         * 返回体配置
         * @type {?}
         */
        STConfig.prototype.page;
        /**
         * 重命名排序值，`columns` 的重命名高于属性
         * @type {?}
         */
        STConfig.prototype.sortReName;
        /**
         * 单排序规则
         * - 若不指定，则返回：`columnName=ascend|descend`
         * - 若指定，则返回：`sort=columnName.(ascend|descend)`
         * @type {?}
         */
        STConfig.prototype.singleSort;
        /**
         * 是否多排序，当 `sort` 多个相同值时自动合并，建议后端支持时使用
         * @type {?}
         */
        STConfig.prototype.multiSort;
        /**
         * 按钮模态框配置
         * @type {?}
         */
        STConfig.prototype.modal;
        /**
         * 按钮抽屉配置
         * @type {?}
         */
        STConfig.prototype.drawer;
        /**
         * 气泡参数
         * @type {?}
         */
        STConfig.prototype.pop;
        /**
         * 行单击多少时长之类为双击（单位：毫秒），默认：`200`
         * @type {?}
         */
        STConfig.prototype.rowClickTime;
        /**
         * 过滤按钮确认文本
         * @type {?}
         */
        STConfig.prototype.filterConfirmText;
        /**
         * 过滤按钮重置文本
         * @type {?}
         */
        STConfig.prototype.filterClearText;
        /**
         * 按钮图标
         * @type {?}
         */
        STConfig.prototype.btnIcon;
        /**
         * 行号索引，默认：`1`
         * - 计算规则为：`index + noIndex`
         * @type {?}
         */
        STConfig.prototype.noIndex;
        /**
         * 表格行的类名
         * @type {?}
         */
        STConfig.prototype.rowClassName;
        /**
         * 通过点击行来展开子行
         * @type {?}
         */
        STConfig.prototype.expandRowByClick;
        /**
         * 手风琴模式
         * @type {?}
         */
        STConfig.prototype.expandAccordion;
        /**
         * 指定 `width` 模式
         * @type {?}
         */
        STConfig.prototype.widthMode;
        /** @type {?} */
        STConfig.prototype.virtualItemSize;
        /** @type {?} */
        STConfig.prototype.virtualMaxBufferPx;
        /** @type {?} */
        STConfig.prototype.virtualMinBufferPx;
        /**
         * Conditional expression rendering behavior, can be set to `hide` (default) or `disabled`
         * @type {?}
         */
        STConfig.prototype.iifBehavior;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: table-column-source.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var STColumnSource = /** @class */ (function () {
        function STColumnSource(rowSource, acl, i18nSrv, cog) {
            this.rowSource = rowSource;
            this.acl = acl;
            this.i18nSrv = i18nSrv;
            this.cog = cog;
        }
        /**
         * @private
         * @param {?} i
         * @param {?} def
         * @return {?}
         */
        STColumnSource.prototype.fixPop = /**
         * @private
         * @param {?} i
         * @param {?} def
         * @return {?}
         */
        function (i, def) {
            if (i.pop == null || i.pop === false) {
                i.pop = false;
                return;
            }
            /** @type {?} */
            var pop = __assign({}, def);
            // compatible
            // tslint:disable-next-line: deprecation
            if (i.popTitle) {
                // tslint:disable-next-line: deprecation
                pop.title = i.popTitle;
            }
            else if (typeof i.pop === 'string') {
                pop.title = i.pop;
            }
            else if (typeof i.pop === 'object') {
                pop = __assign({}, pop, i.pop);
            }
            if (typeof pop.condition !== 'function') {
                pop.condition = (/**
                 * @return {?}
                 */
                function () { return false; });
            }
            i.pop = pop;
        };
        /**
         * @private
         * @param {?} list
         * @return {?}
         */
        STColumnSource.prototype.btnCoerce = /**
         * @private
         * @param {?} list
         * @return {?}
         */
        function (list) {
            var e_1, _a;
            if (!list)
                return [];
            /** @type {?} */
            var ret = [];
            var _b = this.cog, modal = _b.modal, drawer = _b.drawer, pop = _b.pop, btnIcon = _b.btnIcon;
            try {
                for (var list_1 = __values(list), list_1_1 = list_1.next(); !list_1_1.done; list_1_1 = list_1.next()) {
                    var item = list_1_1.value;
                    if (this.acl && item.acl && !this.acl.can(item.acl)) {
                        continue;
                    }
                    if (item.type === 'modal' || item.type === 'static') {
                        // compatible
                        // tslint:disable-next-line: deprecation
                        if (item.component != null) {
                            item.modal = {
                                // tslint:disable-next-line: deprecation
                                component: item.component,
                                params: item.params,
                                paramsName: item.paramName || (/** @type {?} */ (modal)).paramsName,
                                size: item.size || (/** @type {?} */ (modal)).size,
                                modalOptions: item.modalOptions || (/** @type {?} */ (modal)).modalOptions,
                            };
                        }
                        if (item.modal == null || item.modal.component == null) {
                            console.warn("[st] Should specify modal parameter");
                            item.type = 'none';
                        }
                        else {
                            item.modal = __assign({ paramsName: 'record', size: 'lg' }, modal, item.modal);
                        }
                    }
                    if (item.type === 'drawer') {
                        if (item.drawer == null || item.drawer.component == null) {
                            console.warn("[st] Should specify drawer parameter");
                            item.type = 'none';
                        }
                        else {
                            item.drawer = __assign({ paramsName: 'record', size: 'lg' }, drawer, item.drawer);
                        }
                    }
                    if (item.type === 'del' && typeof item.pop === 'undefined') {
                        item.pop = true;
                    }
                    // pop
                    this.fixPop(item, (/** @type {?} */ (pop)));
                    if (item.icon) {
                        item.icon = __assign({}, btnIcon, (typeof item.icon === 'string' ? { type: item.icon } : item.icon));
                    }
                    item.children = item.children && item.children.length > 0 ? this.btnCoerce(item.children) : [];
                    // i18n
                    if (item.i18n && this.i18nSrv) {
                        item.text = this.i18nSrv.fanyi(item.i18n);
                    }
                    ret.push(item);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (list_1_1 && !list_1_1.done && (_a = list_1.return)) _a.call(list_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            this.btnCoerceIf(ret);
            return ret;
        };
        /**
         * @private
         * @param {?} list
         * @return {?}
         */
        STColumnSource.prototype.btnCoerceIf = /**
         * @private
         * @param {?} list
         * @return {?}
         */
        function (list) {
            var e_2, _a;
            try {
                for (var list_2 = __values(list), list_2_1 = list_2.next(); !list_2_1.done; list_2_1 = list_2.next()) {
                    var item = list_2_1.value;
                    if (!item.iif)
                        item.iif = (/**
                         * @return {?}
                         */
                        function () { return true; });
                    item.iifBehavior = item.iifBehavior || this.cog.iifBehavior;
                    if (item.children && item.children.length > 0) {
                        this.btnCoerceIf(item.children);
                    }
                    else {
                        item.children = [];
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (list_2_1 && !list_2_1.done && (_a = list_2.return)) _a.call(list_2);
                }
                finally { if (e_2) throw e_2.error; }
            }
        };
        /**
         * @private
         * @param {?} list
         * @return {?}
         */
        STColumnSource.prototype.fixedCoerce = /**
         * @private
         * @param {?} list
         * @return {?}
         */
        function (list) {
            /** @type {?} */
            var countReduce = (/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            function (a, b) { return a + +(/** @type {?} */ (b.width)).toString().replace('px', ''); });
            // left width
            list
                .filter((/**
             * @param {?} w
             * @return {?}
             */
            function (w) { return w.fixed && w.fixed === 'left' && w.width; }))
                .forEach((/**
             * @param {?} item
             * @param {?} idx
             * @return {?}
             */
            function (item, idx) { return (item._left = list.slice(0, idx).reduce(countReduce, 0) + 'px'); }));
            // right width
            list
                .filter((/**
             * @param {?} w
             * @return {?}
             */
            function (w) { return w.fixed && w.fixed === 'right' && w.width; }))
                .reverse()
                .forEach((/**
             * @param {?} item
             * @param {?} idx
             * @return {?}
             */
            function (item, idx) { return (item._right = (idx > 0 ? list.slice(-idx).reduce(countReduce, 0) : 0) + 'px'); }));
        };
        /**
         * @private
         * @param {?} item
         * @return {?}
         */
        STColumnSource.prototype.sortCoerce = /**
         * @private
         * @param {?} item
         * @return {?}
         */
        function (item) {
            /** @type {?} */
            var res = this.fixCoerce(item);
            res.reName = __assign({}, this.cog.sortReName, res.reName);
            return res;
        };
        /**
         * @private
         * @param {?} item
         * @return {?}
         */
        STColumnSource.prototype.fixCoerce = /**
         * @private
         * @param {?} item
         * @return {?}
         */
        function (item) {
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
            var res = {};
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
        };
        /**
         * @private
         * @param {?} item
         * @return {?}
         */
        STColumnSource.prototype.filterCoerce = /**
         * @private
         * @param {?} item
         * @return {?}
         */
        function (item) {
            var _this = this;
            /** @type {?} */
            var res = null;
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
                res = (/** @type {?} */ (item.filter));
            }
            if (res == null) {
                return null;
            }
            res.type = res.type || 'default';
            /** @type {?} */
            var icon = 'filter';
            /** @type {?} */
            var iconTheme = 'fill';
            if (res.type === 'keyword') {
                if (res.menus == null || (/** @type {?} */ (res.menus)).length === 0) {
                    res.menus = [{ value: '' }];
                }
                icon = 'search';
                iconTheme = 'outline';
            }
            if ((/** @type {?} */ (res.menus)).length === 0) {
                return null;
            }
            if (typeof res.multiple === 'undefined') {
                res.multiple = true;
            }
            res.confirmText = res.confirmText || this.cog.filterConfirmText;
            res.clearText = res.clearText || this.cog.filterClearText;
            res.key = res.key || item.indexKey;
            res.icon = res.icon || icon;
            /** @type {?} */
            var baseIcon = (/** @type {?} */ ({ type: icon, theme: iconTheme }));
            if (typeof res.icon === 'string') {
                res.icon = (/** @type {?} */ (__assign({}, baseIcon, { type: res.icon })));
            }
            else {
                res.icon = __assign({}, baseIcon, res.icon);
            }
            this.updateDefault(res);
            if (this.acl) {
                res.menus = (/** @type {?} */ (res.menus)).filter((/**
                 * @param {?} w
                 * @return {?}
                 */
                function (w) { return _this.acl.can(w.acl); }));
            }
            if ((/** @type {?} */ (res.menus)).length <= 0) {
                res = null;
            }
            return res;
        };
        /**
         * @private
         * @param {?} item
         * @return {?}
         */
        STColumnSource.prototype.restoreRender = /**
         * @private
         * @param {?} item
         * @return {?}
         */
        function (item) {
            if (item.renderTitle) {
                item.__renderTitle = this.rowSource.getTitle(item.renderTitle);
            }
            if (item.render) {
                item.__render = this.rowSource.getRow(item.render);
            }
        };
        /**
         * @param {?} list
         * @return {?}
         */
        STColumnSource.prototype.process = /**
         * @param {?} list
         * @return {?}
         */
        function (list) {
            var e_3, _a;
            var _this = this;
            if (!list || list.length === 0)
                throw new Error("[st]: the columns property muse be define!");
            var noIndex = this.cog.noIndex;
            /** @type {?} */
            var checkboxCount = 0;
            /** @type {?} */
            var radioCount = 0;
            /** @type {?} */
            var point = 0;
            /** @type {?} */
            var columns = [];
            /** @type {?} */
            var copyColumens = (/** @type {?} */ (util.deepCopy(list)));
            try {
                for (var copyColumens_1 = __values(copyColumens), copyColumens_1_1 = copyColumens_1.next(); !copyColumens_1_1.done; copyColumens_1_1 = copyColumens_1.next()) {
                    var item = copyColumens_1_1.value;
                    if (item.iif && !item.iif(item)) {
                        continue;
                    }
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
                    // #region title
                    if (typeof item.title === 'string') {
                        item.title = { text: item.title };
                    }
                    if (!item.title) {
                        item.title = {};
                    }
                    // Compatible
                    // tslint:disable-next-line: deprecation
                    if (item.i18n) {
                        // tslint:disable-next-line: deprecation
                        (/** @type {?} */ (item.title)).i18n = item.i18n;
                    }
                    if ((/** @type {?} */ (item.title)).i18n && this.i18nSrv) {
                        (/** @type {?} */ (item.title)).text = this.i18nSrv.fanyi((/** @type {?} */ (item.title)).i18n);
                    }
                    // #endregion
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
                            item.width = (item.selections.length > 0 ? 62 : 50) + "px";
                        }
                    }
                    if (this.acl) {
                        item.selections = item.selections.filter((/**
                         * @param {?} w
                         * @return {?}
                         */
                        function (w) { return _this.acl.can(w.acl); }));
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
                        item.yn = __assign({ truth: true }, item.yn);
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
                        }[(/** @type {?} */ (item.type))];
                    }
                    // width
                    if (typeof item.width === 'number') {
                        item.width = item.width + "px";
                    }
                    // sorter
                    item._sort = this.sortCoerce(item);
                    // filter
                    item.filter = (/** @type {?} */ (this.filterCoerce(item)));
                    // buttons
                    item.buttons = this.btnCoerce((/** @type {?} */ (item.buttons)));
                    // restore custom row
                    this.restoreRender(item);
                    item.__point = point++;
                    columns.push(item);
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (copyColumens_1_1 && !copyColumens_1_1.done && (_a = copyColumens_1.return)) _a.call(copyColumens_1);
                }
                finally { if (e_3) throw e_3.error; }
            }
            if (checkboxCount > 1) {
                throw new Error("[st]: just only one column checkbox");
            }
            if (radioCount > 1) {
                throw new Error("[st]: just only one column radio");
            }
            this.fixedCoerce(columns);
            return columns;
        };
        /**
         * @param {?} columns
         * @return {?}
         */
        STColumnSource.prototype.restoreAllRender = /**
         * @param {?} columns
         * @return {?}
         */
        function (columns) {
            var _this = this;
            columns.forEach((/**
             * @param {?} i
             * @return {?}
             */
            function (i) { return _this.restoreRender(i); }));
        };
        /**
         * @template THIS
         * @this {THIS}
         * @param {?} filter
         * @return {THIS}
         */
        STColumnSource.prototype.updateDefault = /**
         * @template THIS
         * @this {THIS}
         * @param {?} filter
         * @return {THIS}
         */
        function (filter) {
            if (filter.type === 'default') {
                filter.default = (/** @type {?} */ (filter.menus)).findIndex((/**
                 * @param {?} w
                 * @return {?}
                 */
                function (w) { return (/** @type {?} */ (w.checked)); })) !== -1;
            }
            else {
                filter.default = !!(/** @type {?} */ (filter.menus))[0].value;
            }
            return (/** @type {?} */ (this));
        };
        /**
         * @template THIS
         * @this {THIS}
         * @param {?} col
         * @return {THIS}
         */
        STColumnSource.prototype.cleanFilter = /**
         * @template THIS
         * @this {THIS}
         * @param {?} col
         * @return {THIS}
         */
        function (col) {
            /** @type {?} */
            var f = (/** @type {?} */ (col.filter));
            f.default = false;
            if (f.type === 'default') {
                (/** @type {?} */ (f.menus)).forEach((/**
                 * @param {?} i
                 * @return {?}
                 */
                function (i) { return (i.checked = false); }));
            }
            else {
                (/** @type {?} */ (f.menus))[0].value = undefined;
            }
            return (/** @type {?} */ (this));
        };
        STColumnSource.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        STColumnSource.ctorParameters = function () { return [
            { type: STRowSource, decorators: [{ type: core.Host }] },
            { type: acl.ACLService, decorators: [{ type: core.Optional }] },
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [theme.ALAIN_I18N_TOKEN,] }] },
            { type: STConfig }
        ]; };
        return STColumnSource;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        STColumnSource.prototype.rowSource;
        /**
         * @type {?}
         * @private
         */
        STColumnSource.prototype.acl;
        /**
         * @type {?}
         * @private
         */
        STColumnSource.prototype.i18nSrv;
        /**
         * @type {?}
         * @private
         */
        STColumnSource.prototype.cog;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: table-data-source.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function STDataSourceOptions() { }
    if (false) {
        /** @type {?} */
        STDataSourceOptions.prototype.pi;
        /** @type {?} */
        STDataSourceOptions.prototype.ps;
        /** @type {?} */
        STDataSourceOptions.prototype.paginator;
        /** @type {?} */
        STDataSourceOptions.prototype.data;
        /** @type {?} */
        STDataSourceOptions.prototype.total;
        /** @type {?} */
        STDataSourceOptions.prototype.req;
        /** @type {?} */
        STDataSourceOptions.prototype.res;
        /** @type {?} */
        STDataSourceOptions.prototype.page;
        /** @type {?} */
        STDataSourceOptions.prototype.columns;
        /** @type {?|undefined} */
        STDataSourceOptions.prototype.singleSort;
        /** @type {?|undefined} */
        STDataSourceOptions.prototype.multiSort;
        /** @type {?|undefined} */
        STDataSourceOptions.prototype.rowClassName;
    }
    /**
     * @record
     */
    function STDataSourceResult() { }
    if (false) {
        /**
         * 是否需要显示分页器
         * @type {?}
         */
        STDataSourceResult.prototype.pageShow;
        /**
         * 新 `pi`，若返回 `undefined` 表示用户受控
         * @type {?}
         */
        STDataSourceResult.prototype.pi;
        /**
         * 新 `ps`，若返回 `undefined` 表示用户受控
         * @type {?}
         */
        STDataSourceResult.prototype.ps;
        /**
         * 新 `total`，若返回 `undefined` 表示用户受控
         * @type {?}
         */
        STDataSourceResult.prototype.total;
        /**
         * 数据
         * @type {?}
         */
        STDataSourceResult.prototype.list;
        /**
         * 统计数据
         * @type {?}
         */
        STDataSourceResult.prototype.statistical;
    }
    var STDataSource = /** @class */ (function () {
        function STDataSource(http, currentyPipe, datePipe, ynPipe, numberPipe, dom) {
            this.http = http;
            this.currentyPipe = currentyPipe;
            this.datePipe = datePipe;
            this.ynPipe = ynPipe;
            this.numberPipe = numberPipe;
            this.dom = dom;
            this.sortTick = 0;
        }
        /**
         * @param {?} options
         * @return {?}
         */
        STDataSource.prototype.process = /**
         * @param {?} options
         * @return {?}
         */
        function (options) {
            var _this = this;
            /** @type {?} */
            var data$;
            /** @type {?} */
            var isRemote = false;
            var data = options.data, res = options.res, total = options.total, page = options.page, pi = options.pi, ps = options.ps, paginator = options.paginator, columns = options.columns;
            /** @type {?} */
            var retTotal;
            /** @type {?} */
            var retPs;
            /** @type {?} */
            var retList;
            /** @type {?} */
            var retPi;
            /** @type {?} */
            var rawData;
            /** @type {?} */
            var showPage = page.show;
            if (typeof data === 'string') {
                isRemote = true;
                data$ = this.getByHttp(data, options).pipe(operators.map((/**
                 * @param {?} result
                 * @return {?}
                 */
                function (result) {
                    rawData = result;
                    /** @type {?} */
                    var ret;
                    if (Array.isArray(result)) {
                        ret = result;
                        retTotal = ret.length;
                        retPs = retTotal;
                        showPage = false;
                    }
                    else {
                        // list
                        ret = util.deepGet(result, (/** @type {?} */ ((/** @type {?} */ (res.reName)).list)), []);
                        if (ret == null || !Array.isArray(ret)) {
                            ret = [];
                        }
                        // total
                        /** @type {?} */
                        var resultTotal = (/** @type {?} */ (res.reName)).total && util.deepGet(result, (/** @type {?} */ ((/** @type {?} */ (res.reName)).total)), null);
                        retTotal = resultTotal == null ? total || 0 : +resultTotal;
                    }
                    return util.deepCopy(ret);
                })));
            }
            else if (Array.isArray(data)) {
                data$ = rxjs.of(data);
            }
            else {
                // a cold observable
                data$ = data;
            }
            if (!isRemote) {
                data$ = data$.pipe(
                // sort
                operators.map((/**
                 * @param {?} result
                 * @return {?}
                 */
                function (result) {
                    rawData = result;
                    /** @type {?} */
                    var copyResult = util.deepCopy(result);
                    /** @type {?} */
                    var sorterFn = _this.getSorterFn(columns);
                    if (sorterFn) {
                        copyResult = copyResult.sort(sorterFn);
                    }
                    return copyResult;
                })), 
                // filter
                operators.map((/**
                 * @param {?} result
                 * @return {?}
                 */
                function (result) {
                    columns
                        .filter((/**
                     * @param {?} w
                     * @return {?}
                     */
                    function (w) { return w.filter; }))
                        .forEach((/**
                     * @param {?} c
                     * @return {?}
                     */
                    function (c) {
                        /** @type {?} */
                        var filter = (/** @type {?} */ (c.filter));
                        /** @type {?} */
                        var values = _this.getFilteredData(filter);
                        if (values.length === 0)
                            return;
                        /** @type {?} */
                        var onFilter = filter.fn;
                        if (typeof onFilter !== 'function') {
                            console.warn("[st] Muse provide the fn function in filter");
                            return;
                        }
                        result = result.filter((/**
                         * @param {?} record
                         * @return {?}
                         */
                        function (record) { return values.some((/**
                         * @param {?} v
                         * @return {?}
                         */
                        function (v) { return onFilter(v, record); })); }));
                    }));
                    return result;
                })), 
                // paging
                operators.map((/**
                 * @param {?} result
                 * @return {?}
                 */
                function (result) {
                    if (paginator && page.front) {
                        /** @type {?} */
                        var maxPageIndex = Math.ceil(result.length / ps);
                        retPi = Math.max(1, pi > maxPageIndex ? maxPageIndex : pi);
                        retTotal = result.length;
                        if (page.show === true) {
                            return result.slice((retPi - 1) * ps, retPi * ps);
                        }
                    }
                    return result;
                })));
            }
            // pre-process
            if (typeof res.process === 'function') {
                data$ = data$.pipe(operators.map((/**
                 * @param {?} result
                 * @return {?}
                 */
                function (result) { return (/** @type {?} */ (res.process))(result, rawData); })));
            }
            data$ = data$.pipe(operators.map((/**
             * @param {?} result
             * @return {?}
             */
            function (result) { return _this.optimizeData({ result: result, columns: columns, rowClassName: options.rowClassName }); })));
            return data$.pipe(operators.map((/**
             * @param {?} result
             * @return {?}
             */
            function (result) {
                retList = result;
                /** @type {?} */
                var realTotal = retTotal || total;
                /** @type {?} */
                var realPs = retPs || ps;
                return (/** @type {?} */ ({
                    pi: retPi,
                    ps: retPs,
                    total: retTotal,
                    list: retList,
                    statistical: _this.genStatistical(columns, retList, rawData),
                    pageShow: typeof showPage === 'undefined' ? realTotal > realPs : showPage,
                }));
            })));
        };
        /**
         * @private
         * @param {?} item
         * @param {?} col
         * @param {?} idx
         * @return {?}
         */
        STDataSource.prototype.get = /**
         * @private
         * @param {?} item
         * @param {?} col
         * @param {?} idx
         * @return {?}
         */
        function (item, col, idx) {
            if (col.format) {
                /** @type {?} */
                var formatRes = col.format(item, col, idx);
                if (formatRes && ~formatRes.indexOf('</')) {
                    return { text: this.dom.bypassSecurityTrustHtml(formatRes), org: formatRes };
                }
                return { text: formatRes == null ? '' : formatRes, org: formatRes };
            }
            /** @type {?} */
            var value = util.deepGet(item, (/** @type {?} */ (col.index)), col.default);
            /** @type {?} */
            var text = value;
            /** @type {?} */
            var color;
            switch (col.type) {
                case 'no':
                    text = this.getNoIndex(item, col, idx);
                    break;
                case 'img':
                    text = value ? "<img src=\"" + value + "\" class=\"img\">" : '';
                    break;
                case 'number':
                    text = this.numberPipe.transform(value, col.numberDigits);
                    break;
                case 'currency':
                    text = this.currentyPipe.transform(value);
                    break;
                case 'date':
                    text = value === col.default ? col.default : this.datePipe.transform(value, col.dateFormat);
                    break;
                case 'yn':
                    text = this.ynPipe.transform(value === (/** @type {?} */ (col.yn)).truth, (/** @type {?} */ ((/** @type {?} */ (col.yn)).yes)), (/** @type {?} */ ((/** @type {?} */ (col.yn)).no)), (/** @type {?} */ ((/** @type {?} */ (col.yn)).mode)));
                    break;
                case 'tag':
                case 'badge':
                    /** @type {?} */
                    var data = col.type === 'tag' ? col.tag : col.badge;
                    if (data && data[text]) {
                        /** @type {?} */
                        var dataItem = data[text];
                        text = dataItem.text;
                        color = dataItem.color;
                    }
                    else {
                        text = '';
                    }
                    break;
            }
            return { text: text == null ? '' : text, org: value, color: color };
        };
        /**
         * @private
         * @param {?} url
         * @param {?} options
         * @return {?}
         */
        STDataSource.prototype.getByHttp = /**
         * @private
         * @param {?} url
         * @param {?} options
         * @return {?}
         */
        function (url, options) {
            var _a, _b;
            var req = options.req, page = options.page, paginator = options.paginator, pi = options.pi, ps = options.ps, singleSort = options.singleSort, multiSort = options.multiSort, columns = options.columns;
            /** @type {?} */
            var method = (req.method || 'GET').toUpperCase();
            /** @type {?} */
            var params = {};
            /** @type {?} */
            var reName = (/** @type {?} */ (req.reName));
            if (paginator) {
                if (req.type === 'page') {
                    params = (_a = {},
                        _a[(/** @type {?} */ (reName.pi))] = page.zeroIndexed ? pi - 1 : pi,
                        _a[(/** @type {?} */ (reName.ps))] = ps,
                        _a);
                }
                else {
                    params = (_b = {},
                        _b[(/** @type {?} */ (reName.skip))] = (pi - 1) * ps,
                        _b[(/** @type {?} */ (reName.limit))] = ps,
                        _b);
                }
            }
            params = __assign({}, params, req.params, this.getReqSortMap(singleSort, multiSort, columns), this.getReqFilterMap(columns));
            /** @type {?} */
            var reqOptions = {
                params: params,
                body: req.body,
                headers: req.headers,
            };
            if (method === 'POST' && req.allInBody === true) {
                reqOptions = {
                    body: __assign({}, req.body, params),
                    headers: req.headers,
                };
            }
            if (typeof req.process === 'function') {
                reqOptions = req.process(reqOptions);
            }
            return this.http.request(method, url, reqOptions);
        };
        /**
         * @param {?} options
         * @return {?}
         */
        STDataSource.prototype.optimizeData = /**
         * @param {?} options
         * @return {?}
         */
        function (options) {
            var _this = this;
            var result = options.result, columns = options.columns, rowClassName = options.rowClassName;
            var _loop_1 = function (i, len) {
                result[i]._values = columns.map((/**
                 * @param {?} c
                 * @return {?}
                 */
                function (c) { return _this.get(result[i], c, i); }));
                if (rowClassName) {
                    result[i]._rowClassName = rowClassName(result[i], i);
                }
            };
            for (var i = 0, len = result.length; i < len; i++) {
                _loop_1(i, len);
            }
            return result;
        };
        /**
         * @param {?} item
         * @param {?} col
         * @param {?} idx
         * @return {?}
         */
        STDataSource.prototype.getNoIndex = /**
         * @param {?} item
         * @param {?} col
         * @param {?} idx
         * @return {?}
         */
        function (item, col, idx) {
            return typeof col.noIndex === 'function' ? col.noIndex(item, col, idx) : (/** @type {?} */ (col.noIndex)) + idx;
        };
        // #region sort
        // #region sort
        /**
         * @private
         * @param {?} columns
         * @return {?}
         */
        STDataSource.prototype.getValidSort = 
        // #region sort
        /**
         * @private
         * @param {?} columns
         * @return {?}
         */
        function (columns) {
            return columns.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item._sort && item._sort.enabled && item._sort.default; })).map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return (/** @type {?} */ (item._sort)); }));
        };
        /**
         * @private
         * @param {?} columns
         * @return {?}
         */
        STDataSource.prototype.getSorterFn = /**
         * @private
         * @param {?} columns
         * @return {?}
         */
        function (columns) {
            /** @type {?} */
            var sortList = this.getValidSort(columns);
            if (sortList.length === 0) {
                return;
            }
            /** @type {?} */
            var sortItem = sortList[0];
            if (sortItem.compare === null) {
                return;
            }
            if (typeof sortItem.compare !== 'function') {
                console.warn("[st] Muse provide the compare function in sort");
                return;
            }
            return (/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            function (a, b) {
                /** @type {?} */
                var result = (/** @type {?} */ (sortItem.compare))(a, b);
                if (result !== 0) {
                    return sortItem.default === 'descend' ? -result : result;
                }
                return 0;
            });
        };
        Object.defineProperty(STDataSource.prototype, "nextSortTick", {
            get: /**
             * @return {?}
             */
            function () {
                return ++this.sortTick;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} singleSort
         * @param {?} multiSort
         * @param {?} columns
         * @return {?}
         */
        STDataSource.prototype.getReqSortMap = /**
         * @param {?} singleSort
         * @param {?} multiSort
         * @param {?} columns
         * @return {?}
         */
        function (singleSort, multiSort, columns) {
            var _a;
            /** @type {?} */
            var ret = {};
            /** @type {?} */
            var sortList = this.getValidSort(columns);
            if (!multiSort && sortList.length === 0)
                return ret;
            if (multiSort) {
                /** @type {?} */
                var ms_1 = __assign({ key: 'sort', separator: '-', nameSeparator: '.' }, multiSort);
                ret = (_a = {},
                    _a[ms_1.key] = sortList
                        .sort((/**
                     * @param {?} a
                     * @param {?} b
                     * @return {?}
                     */
                    function (a, b) { return a.tick - b.tick; }))
                        .map((/**
                     * @param {?} item
                     * @return {?}
                     */
                    function (item) { return item.key + ms_1.nameSeparator + ((item.reName || {})[(/** @type {?} */ (item.default))] || item.default); }))
                        .join(ms_1.separator),
                    _a);
                if (multiSort.keepEmptyKey === false && ret[ms_1.key].length === 0) {
                    ret = {};
                }
            }
            else {
                /** @type {?} */
                var mapData = sortList[0];
                /** @type {?} */
                var sortFiled = mapData.key;
                /** @type {?} */
                var sortValue = (sortList[0].reName || {})[(/** @type {?} */ (mapData.default))] || mapData.default;
                if (singleSort) {
                    sortValue = sortFiled + (singleSort.nameSeparator || '.') + sortValue;
                    sortFiled = singleSort.key || 'sort';
                }
                ret[(/** @type {?} */ (sortFiled))] = (/** @type {?} */ (sortValue));
            }
            return ret;
        };
        // #endregion
        // #region filter
        // #endregion
        // #region filter
        /**
         * @private
         * @param {?} filter
         * @return {?}
         */
        STDataSource.prototype.getFilteredData = 
        // #endregion
        // #region filter
        /**
         * @private
         * @param {?} filter
         * @return {?}
         */
        function (filter) {
            return filter.type === 'default' ? (/** @type {?} */ (filter.menus)).filter((/**
             * @param {?} f
             * @return {?}
             */
            function (f) { return f.checked === true; })) : (/** @type {?} */ (filter.menus)).slice(0, 1);
        };
        /**
         * @private
         * @param {?} columns
         * @return {?}
         */
        STDataSource.prototype.getReqFilterMap = /**
         * @private
         * @param {?} columns
         * @return {?}
         */
        function (columns) {
            var _this = this;
            /** @type {?} */
            var ret = {};
            columns
                .filter((/**
             * @param {?} w
             * @return {?}
             */
            function (w) { return w.filter && w.filter.default === true; }))
                .forEach((/**
             * @param {?} col
             * @return {?}
             */
            function (col) {
                /** @type {?} */
                var filter = (/** @type {?} */ (col.filter));
                /** @type {?} */
                var values = _this.getFilteredData(filter);
                /** @type {?} */
                var obj = {};
                if (filter.reName) {
                    obj = (/** @type {?} */ (filter.reName))((/** @type {?} */ (filter.menus)), col);
                }
                else {
                    obj[(/** @type {?} */ (filter.key))] = values.map((/**
                     * @param {?} i
                     * @return {?}
                     */
                    function (i) { return i.value; })).join(',');
                }
                ret = __assign({}, ret, obj);
            }));
            return ret;
        };
        // #endregion
        // #region statistical
        // #endregion
        // #region statistical
        /**
         * @private
         * @param {?} columns
         * @param {?} list
         * @param {?} rawData
         * @return {?}
         */
        STDataSource.prototype.genStatistical = 
        // #endregion
        // #region statistical
        /**
         * @private
         * @param {?} columns
         * @param {?} list
         * @param {?} rawData
         * @return {?}
         */
        function (columns, list, rawData) {
            var _this = this;
            /** @type {?} */
            var res = {};
            columns.forEach((/**
             * @param {?} col
             * @param {?} index
             * @return {?}
             */
            function (col, index) {
                res[col.key ? col.key : index] = col.statistical == null ? {} : _this.getStatistical(col, index, list, rawData);
            }));
            return res;
        };
        /**
         * @private
         * @param {?} col
         * @param {?} index
         * @param {?} list
         * @param {?} rawData
         * @return {?}
         */
        STDataSource.prototype.getStatistical = /**
         * @private
         * @param {?} col
         * @param {?} index
         * @param {?} list
         * @param {?} rawData
         * @return {?}
         */
        function (col, index, list, rawData) {
            /** @type {?} */
            var val = col.statistical;
            /** @type {?} */
            var item = __assign({ digits: 2, currency: undefined }, (typeof val === 'string' ? { type: (/** @type {?} */ (val)) } : ((/** @type {?} */ (val)))));
            /** @type {?} */
            var res = { value: 0 };
            /** @type {?} */
            var currency = false;
            if (typeof item.type === 'function') {
                res = item.type(this.getValues(index, list), col, list, rawData);
                currency = true;
            }
            else {
                switch (item.type) {
                    case 'count':
                        res.value = list.length;
                        break;
                    case 'distinctCount':
                        res.value = this.getValues(index, list).filter((/**
                         * @param {?} value
                         * @param {?} idx
                         * @param {?} self
                         * @return {?}
                         */
                        function (value, idx, self) { return self.indexOf(value) === idx; })).length;
                        break;
                    case 'sum':
                        res.value = this.toFixed(this.getSum(index, list), (/** @type {?} */ (item.digits)));
                        currency = true;
                        break;
                    case 'average':
                        res.value = this.toFixed(this.getSum(index, list) / list.length, (/** @type {?} */ (item.digits)));
                        currency = true;
                        break;
                    case 'max':
                        res.value = Math.max.apply(Math, __spread(this.getValues(index, list)));
                        currency = true;
                        break;
                    case 'min':
                        res.value = Math.min.apply(Math, __spread(this.getValues(index, list)));
                        currency = true;
                        break;
                }
            }
            if (item.currency === true || (item.currency == null && currency === true)) {
                res.text = (/** @type {?} */ (this.currentyPipe.transform(res.value)));
            }
            else {
                res.text = String(res.value);
            }
            return res;
        };
        /**
         * @private
         * @param {?} val
         * @param {?} digits
         * @return {?}
         */
        STDataSource.prototype.toFixed = /**
         * @private
         * @param {?} val
         * @param {?} digits
         * @return {?}
         */
        function (val, digits) {
            if (isNaN(val) || !isFinite(val)) {
                return 0;
            }
            return parseFloat(val.toFixed(digits));
        };
        /**
         * @private
         * @param {?} index
         * @param {?} list
         * @return {?}
         */
        STDataSource.prototype.getValues = /**
         * @private
         * @param {?} index
         * @param {?} list
         * @return {?}
         */
        function (index, list) {
            return list.map((/**
             * @param {?} i
             * @return {?}
             */
            function (i) { return i._values[index].org; })).map((/**
             * @param {?} i
             * @return {?}
             */
            function (i) { return (i === '' || i == null ? 0 : i); }));
        };
        /**
         * @private
         * @param {?} index
         * @param {?} list
         * @return {?}
         */
        STDataSource.prototype.getSum = /**
         * @private
         * @param {?} index
         * @param {?} list
         * @return {?}
         */
        function (index, list) {
            return this.getValues(index, list).reduce((/**
             * @param {?} p
             * @param {?} i
             * @return {?}
             */
            function (p, i) { return (p += parseFloat(String(i))); }), 0);
        };
        STDataSource.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        STDataSource.ctorParameters = function () { return [
            { type: theme._HttpClient },
            { type: theme.CNCurrencyPipe, decorators: [{ type: core.Host }] },
            { type: theme.DatePipe, decorators: [{ type: core.Host }] },
            { type: theme.YNPipe, decorators: [{ type: core.Host }] },
            { type: common.DecimalPipe, decorators: [{ type: core.Host }] },
            { type: platformBrowser.DomSanitizer }
        ]; };
        return STDataSource;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        STDataSource.prototype.sortTick;
        /**
         * @type {?}
         * @private
         */
        STDataSource.prototype.http;
        /**
         * @type {?}
         * @private
         */
        STDataSource.prototype.currentyPipe;
        /**
         * @type {?}
         * @private
         */
        STDataSource.prototype.datePipe;
        /**
         * @type {?}
         * @private
         */
        STDataSource.prototype.ynPipe;
        /**
         * @type {?}
         * @private
         */
        STDataSource.prototype.numberPipe;
        /**
         * @type {?}
         * @private
         */
        STDataSource.prototype.dom;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: table-export.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var STExport = /** @class */ (function () {
        function STExport(xlsxSrv) {
            this.xlsxSrv = xlsxSrv;
        }
        /**
         * @private
         * @param {?} item
         * @param {?} col
         * @param {?} index
         * @return {?}
         */
        STExport.prototype._stGet = /**
         * @private
         * @param {?} item
         * @param {?} col
         * @param {?} index
         * @return {?}
         */
        function (item, col, index) {
            /** @type {?} */
            var ret = { t: 's', v: '' };
            if (col.format) {
                ret.v = col.format(item, col, index);
            }
            else {
                /** @type {?} */
                var val = util.deepGet(item, (/** @type {?} */ (col.index)), '');
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
            ret.v = ret.v || '';
            return ret;
        };
        /**
         * @private
         * @param {?} opt
         * @return {?}
         */
        STExport.prototype.genSheet = /**
         * @private
         * @param {?} opt
         * @return {?}
         */
        function (opt) {
            /** @type {?} */
            var sheets = {};
            /** @type {?} */
            var sheet = (sheets[opt.sheetname || 'Sheet1'] = {});
            /** @type {?} */
            var colData = (/** @type {?} */ (opt._c)).filter((/**
             * @param {?} w
             * @return {?}
             */
            function (w) { return w.exported !== false && w.index && (!w.buttons || w.buttons.length === 0); }));
            /** @type {?} */
            var cc = colData.length;
            /** @type {?} */
            var dc = (/** @type {?} */ (opt._d)).length;
            // column
            for (var i = 0; i < cc; i++) {
                /** @type {?} */
                var tit = colData[i].title;
                sheet[String.fromCharCode(i + 65) + "1"] = {
                    t: 's',
                    v: typeof tit === 'object' ? tit.text : tit,
                };
            }
            // content
            for (var i = 0; i < dc; i++) {
                for (var j = 0; j < cc; j++) {
                    sheet["" + String.fromCharCode(j + 65) + (i + 2)] = this._stGet((/** @type {?} */ (opt._d))[i], colData[j], i);
                }
            }
            if (cc > 0 && dc > 0) {
                sheet['!ref'] = "A1:" + String.fromCharCode(cc + 65 - 1) + (dc + 1);
            }
            return sheets;
        };
        /**
         * @param {?} opt
         * @return {?}
         */
        STExport.prototype.export = /**
         * @param {?} opt
         * @return {?}
         */
        function (opt) {
            /** @type {?} */
            var sheets = this.genSheet(opt);
            return this.xlsxSrv.export({
                sheets: sheets,
                filename: opt.filename,
                callback: opt.callback,
            });
        };
        STExport.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        STExport.ctorParameters = function () { return [
            { type: xlsx.XlsxService, decorators: [{ type: core.Optional }] }
        ]; };
        return STExport;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        STExport.prototype.xlsxSrv;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: table.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var STComponent = /** @class */ (function () {
        function STComponent(i18nSrv, cdr, cog, router, el, renderer, exportSrv, modalHelper, drawerHelper, doc, columnSource, dataSource, delonI18n) {
            var _this = this;
            this.cdr = cdr;
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
            this.unsubscribe$ = new rxjs.Subject();
            this.totalTpl = "";
            this.locale = {};
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
            this._loading = false;
            /**
             * 是否显示Loading
             */
            this.loading = null;
            /**
             * 延迟显示加载效果的时间（防止闪烁）
             */
            this.loadingDelay = 0;
            /**
             * 是否显示边框
             */
            this.bordered = false;
            this.virtualScroll = false;
            this.virtualItemSize = 54;
            this.virtualMaxBufferPx = 200;
            this.virtualMinBufferPx = 100;
            /**
             * 单排序规则
             * - 若不指定，则返回：`columnName=ascend|descend`
             * - 若指定，则返回：`sort=columnName.(ascend|descend)`
             */
            this.singleSort = null;
            this.expandRowByClick = false;
            this.expandAccordion = false;
            /**
             * 行单击多少时长之类为双击（单位：毫秒），默认：`200`
             */
            this.rowClickTime = 200;
            this.responsive = true;
            /**
             * 请求异常时回调
             */
            this.error = new core.EventEmitter();
            /**
             * 变化时回调，包括：`pi`、`ps`、`checkbox`、`radio`、`sort`、`filter`、`click`、`dblClick` 变动
             */
            this.change = new core.EventEmitter();
            this.rowClickCount = 0;
            this.delonI18n.change.pipe(operators.takeUntil(this.unsubscribe$)).subscribe((/**
             * @return {?}
             */
            function () {
                _this.locale = _this.delonI18n.getData('st');
                if (_this._columns.length > 0) {
                    _this.page = _this.clonePage;
                    _this.cd();
                }
            }));
            this.copyCog = util.deepMergeKey(new STConfig(), true, cog);
            delete this.copyCog.multiSort;
            Object.assign(this, this.copyCog);
            if (cog.multiSort && cog.multiSort.global !== false) {
                this.multiSort = __assign({}, cog.multiSort);
            }
            i18nSrv.change
                .pipe(operators.takeUntil(this.unsubscribe$), operators.filter((/**
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
            /** 请求体配置 */
            get: /**
             * 请求体配置
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
                this._req = util.deepMerge({}, this._req, this.cog.req, value);
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
                var item = util.deepMergeKey({}, true, this.cog.res, value);
                /** @type {?} */
                var reName = item.reName;
                if (!Array.isArray(reName.list))
                    reName.list = reName.list.split('.');
                if (!Array.isArray(reName.total))
                    reName.total = reName.total.split('.');
                this._res = item;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(STComponent.prototype, "page", {
            /** 分页器配置 */
            get: /**
             * 分页器配置
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
                this.clonePage = value;
                /** @type {?} */
                var item = util.deepMergeKey({}, true, new STConfig().page, this.cog.page, value);
                var total = item.total;
                if (typeof total === 'string' && total.length) {
                    this.totalTpl = total;
                }
                else if (util.toBoolean(total)) {
                    this.totalTpl = this.locale.total;
                }
                else {
                    this.totalTpl = '';
                }
                this._page = item;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(STComponent.prototype, "multiSort", {
            /** 是否多排序，当 `sort` 多个相同值时自动合并，建议后端支持时使用 */
            get: /**
             * 是否多排序，当 `sort` 多个相同值时自动合并，建议后端支持时使用
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
                if (typeof value === 'boolean' && !util.toBoolean(value)) {
                    this._multiSort = null;
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
                this._widthMode = __assign({ type: 'default', strictBehavior: 'truncate' }, value);
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
                ? this.totalTpl
                    .replace('{{total}}', total)
                    .replace('{{range[0]}}', range[0])
                    .replace('{{range[1]}}', range[1])
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
                    .pipe(operators.takeUntil(_this.unsubscribe$))
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
                            this.cdr.detectChanges();
                            this.error.emit({ type: 'req', error: error_1 });
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
            return (/** @type {?} */ (this)).clearCheck()
                .clearRadio()
                .clearFilter()
                .clearSort();
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
                (/** @type {?} */ (this))._req.params = options && options.merge ? __assign({}, (/** @type {?} */ (this))._req.params, extraParams) : extraParams;
            }
            (/** @type {?} */ (this))._change('pi');
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
         * @return {?}
         */
        STComponent.prototype._toTop = /**
         * @private
         * @return {?}
         */
        function () {
            if (!this.page.toTop)
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
         * @return {?}
         */
        STComponent.prototype._change = /**
         * @param {?} type
         * @return {?}
         */
        function (type) {
            var _this = this;
            if (type === 'pi' || (type === 'ps' && this.pi <= Math.ceil(this.total / this.ps))) {
                this.loadPageData().then((/**
                 * @return {?}
                 */
                function () { return _this._toTop(); }));
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
         * @return {?}
         */
        STComponent.prototype._expandChange = /**
         * @param {?} item
         * @return {?}
         */
        function (item) {
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
         * ```
         * this.st.setRow(0, { price: 100 })
         * this.st.setRow(0, { price: 100, name: 'asdf' })
         * ```
         */
        /**
         * Sets the row value for the `index` in the table, like this:
         *
         * ```
         * this.st.setRow(0, { price: 100 })
         * this.st.setRow(0, { price: 100, name: 'asdf' })
         * ```
         * @template THIS
         * @this {THIS}
         * @param {?} index
         * @param {?} item
         * @return {THIS}
         */
        STComponent.prototype.setRow = /**
         * Sets the row value for the `index` in the table, like this:
         *
         * ```
         * this.st.setRow(0, { price: 100 })
         * this.st.setRow(0, { price: 100, name: 'asdf' })
         * ```
         * @template THIS
         * @this {THIS}
         * @param {?} index
         * @param {?} item
         * @return {THIS}
         */
        function (index, item) {
            (/** @type {?} */ (this))._data[index] = util.deepMergeKey((/** @type {?} */ (this))._data[index], false, item);
            (/** @type {?} */ (this))._data = (/** @type {?} */ (this)).dataSource.optimizeData({ columns: (/** @type {?} */ (this))._columns, result: (/** @type {?} */ (this))._data, rowClassName: (/** @type {?} */ (this)).rowClassName });
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
                ((/** @type {?} */ (this.modalHelper[btn.type === 'modal' ? 'create' : 'createStatic'])))((/** @type {?} */ (modal)).component, __assign({}, obj, ((/** @type {?} */ (modal)).params && (/** @type {?} */ ((/** @type {?} */ (modal)).params))(record))), util.deepMergeKey({}, true, this.copyCog.modal, modal))
                    .pipe(operators.filter((/**
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
                    .create((/** @type {?} */ ((/** @type {?} */ (drawer)).title)), (/** @type {?} */ (drawer)).component, __assign({}, obj, ((/** @type {?} */ (drawer)).params && (/** @type {?} */ ((/** @type {?} */ (drawer)).params))(record))), util.deepMergeKey({}, true, this.copyCog.drawer, drawer))
                    .pipe(operators.filter((/**
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
            // tslint:disable-next-line: deprecation
            if (btn.format) {
                // tslint:disable-next-line: deprecation
                return btn.format(record, btn);
            }
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
            (newData === true ? rxjs.from(this.filteredData) : rxjs.of(newData || this._data)).subscribe((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                return _this.exportSrv.export(__assign({}, opt, { _d: res, _c: _this._columns }));
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
         * @private
         * @return {?}
         */
        STComponent.prototype.setClass = /**
         * @private
         * @return {?}
         */
        function () {
            var _a;
            var _b = this.widthMode, type = _b.type, strictBehavior = _b.strictBehavior;
            util.updateHostClass(this.el.nativeElement, this.renderer, (_a = {},
                _a["st"] = true,
                _a["st__p-" + this.page.placement] = this.page.placement,
                _a["st__width-" + type] = true,
                _a["st__width-strict-" + strictBehavior] = type === 'strict',
                _a["ant-table-rep"] = this.responsive,
                _a["ant-table-rep__hide-header-footer"] = this.responsiveHideHeaderFooter,
                _a));
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
            this.setClass();
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
            { type: core.Component, args: [{
                        selector: 'st',
                        exportAs: 'st',
                        template: "<ng-template #btnTpl let-i let-btn=\"btn\">\n  <ng-container *ngIf=\"!btn.tooltip\">\n    <ng-template [ngTemplateOutlet]=\"btnItemTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n  </ng-container>\n  <span *ngIf=\"btn.tooltip\" nz-tooltip [nzTitle]=\"btn.tooltip\">\n    <ng-template [ngTemplateOutlet]=\"btnItemTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n  </span>\n</ng-template>\n<ng-template #btnItemTpl let-i let-btn=\"btn\">\n  <a *ngIf=\"btn.pop\" nz-popconfirm [nzPopconfirmTitle]=\"btn.pop.title\" [nzIcon]=\"btn.pop.icon\"\n    [nzCondition]=\"btn.pop.condition(i)\" [nzCancelText]=\"btn.pop.cancelText\" [nzOkText]=\"btn.pop.okText\"\n    [nzOkType]=\"btn.pop.okType\" (nzOnConfirm)=\"_btnClick(i, btn, $event)\" class=\"st__btn-text\">\n    <ng-template [ngTemplateOutlet]=\"btnTextTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n  </a>\n  <a *ngIf=\"!btn.pop\" (click)=\"_btnClick(i, btn, $event)\" class=\"st__btn-text\">\n    <ng-template [ngTemplateOutlet]=\"btnTextTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n  </a>\n</ng-template>\n<ng-template #btnTextTpl let-i let-btn=\"btn\">\n  <ng-container *ngIf=\"btn.icon\">\n    <i *ngIf=\"!btn.icon.iconfont\" nz-icon [nzType]=\"btn.icon.type\" [nzTheme]=\"btn.icon.theme\" [nzSpin]=\"btn.icon.spin\"\n      [nzTwotoneColor]=\"btn.icon.twoToneColor\"></i>\n    <i *ngIf=\"btn.icon.iconfont\" nz-icon [nzIconfont]=\"btn.icon.iconfont\"></i>\n  </ng-container>\n  <span [innerHTML]=\"_btnText(i, btn)\" [ngClass]=\"{'pl-xs': btn.icon}\"></span>\n</ng-template>\n<ng-template #titleTpl let-i>\n  <span [innerHTML]=\"i.text\"></span>\n  <small *ngIf=\"i.optional\" class=\"st__head-optional\" [innerHTML]=\"i.optional\"></small>\n  <i *ngIf=\"i.optionalHelp\" class=\"st__head-tip\" nz-tooltip [nzTitle]=\"i.optionalHelp\" nz-icon\n    nzType=\"question-circle\"></i>\n</ng-template>\n<ng-template #bodyTpl let-i let-index=\"index\">\n  <tr [attr.data-index]=\"index\" (click)=\"_rowClick($event, i, index)\" [class]=\"i._rowClassName\">\n    <td *ngIf=\"expand\" [nzShowExpand]=\"expand && i.showExpand !== false\" [(nzExpand)]=\"i.expand\"\n      (nzExpandChange)=\"_expandChange(i)\" nzWidth=\"50px\"></td>\n    <td *ngFor=\"let c of _columns; let cIdx=index\" [nzLeft]=\"c._left\" [nzRight]=\"c._right\"\n      [nzCheckbox]=\"c.type === 'checkbox'\" [ngClass]=\"columnClass(c)\" [attr.colspan]=\"c.colSpan\">\n      <span *ngIf=\"responsive\" class=\"ant-table-rep__title\">\n        <ng-template [ngTemplateOutlet]=\"titleTpl\" [ngTemplateOutletContext]=\"{$implicit: c.title }\"></ng-template>\n      </span>\n      <span>\n        <ng-template #render [ngTemplateOutlet]=\"c.__render\"\n          [ngTemplateOutletContext]=\"{$implicit: i, index: index, column: c }\"></ng-template>\n        <ng-container *ngIf=\"!c.__render; else render\">\n          <ng-container [ngSwitch]=\"c.type\">\n            <label *ngSwitchCase=\"'checkbox'\" nz-checkbox [nzDisabled]=\"i.disabled\" [ngModel]=\"i.checked\"\n              (ngModelChange)=\"_checkSelection(i, $event)\"></label>\n            <label *ngSwitchCase=\"'radio'\" nz-radio [nzDisabled]=\"i.disabled\" [ngModel]=\"i.checked\"\n              (ngModelChange)=\"_refRadio($event, i)\"></label>\n            <a *ngSwitchCase=\"'link'\" (click)=\"_click($event, i, c)\" [innerHTML]=\"i._values[cIdx].text\"></a>\n            <ng-conntainer *ngIf=\"i._values[cIdx].text\">\n              <nz-tag *ngSwitchCase=\"'tag'\" [nzColor]=\"i._values[cIdx].color\">\n                {{i._values[cIdx].text}}\n              </nz-tag>\n              <nz-badge *ngSwitchCase=\"'badge'\" [nzStatus]=\"i._values[cIdx].color\" [nzText]=\"i._values[cIdx].text\">\n              </nz-badge>\n            </ng-conntainer>\n            <span *ngSwitchDefault [innerHTML]=\"i._values[cIdx].text\"\n              [attr.title]=\"isTruncate(c) ? i._values[cIdx].text : null\"></span>\n          </ng-container>\n          <ng-container *ngFor=\"let btn of _validBtns(c.buttons, i, c); let last=last\">\n            <a *ngIf=\"btn.children.length > 0\" nz-dropdown [nzDropdownMenu]=\"btnMenu\" nzOverlayClassName=\"st__btn-sub\">\n              <span [innerHTML]=\"_btnText(i, btn)\"></span>\n              <i nz-icon nzType=\"down\"></i>\n            </a>\n            <nz-dropdown-menu #btnMenu=\"nzDropdownMenu\">\n              <ul nz-menu>\n                <ng-container *ngFor=\"let subBtn of _validBtns(btn.children, i, c)\">\n                  <li *ngIf=\"subBtn.type !== 'divider'\" nz-menu-item [class.st__btn-disabled]=\"subBtn._disabled\">\n                    <ng-template [ngTemplateOutlet]=\"btnTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: subBtn }\">\n                    </ng-template>\n                  </li>\n                  <li *ngIf=\"subBtn.type === 'divider'\" nz-menu-divider></li>\n                </ng-container>\n              </ul>\n            </nz-dropdown-menu>\n            <span *ngIf=\"btn.children.length == 0\" [class.st__btn-disabled]=\"btn._disabled\">\n              <ng-template [ngTemplateOutlet]=\"btnTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\">\n              </ng-template>\n            </span>\n            <nz-divider *ngIf=\"!last\" nzType=\"vertical\"></nz-divider>\n          </ng-container>\n          <ng-template [ngIf]=\"!c.__renderExpanded\" [ngTemplateOutlet]=\"c.__renderExpanded\"\n            [ngTemplateOutletContext]=\"{$implicit: i, index: index, column: c }\"></ng-template>\n        </ng-container>\n      </span>\n    </td>\n  </tr>\n  <tr [nzExpand]=\"i.expand\">\n    <td></td>\n    <td [attr.colspan]=\"_columns.length\">\n      <ng-template [ngTemplateOutlet]=\"expand\" [ngTemplateOutletContext]=\"{$implicit: i, index: index }\"></ng-template>\n    </td>\n  </tr>\n</ng-template>\n<ng-template #chkAllTpl let-custom>\n  <label nz-checkbox class=\"st__checkall\" [nzDisabled]=\"_allCheckedDisabled\" [(ngModel)]=\"_allChecked\"\n    [nzIndeterminate]=\"_indeterminate\" (ngModelChange)=\"_checkAll()\"\n    [class.ant-table-selection-select-all-custom]=\"custom\"></label>\n</ng-template>\n<nz-table #table [nzData]=\"_data\" [(nzPageIndex)]=\"pi\" (nzPageIndexChange)=\"_change('pi')\" [(nzPageSize)]=\"ps\"\n  (nzPageSizeChange)=\"_change('ps')\" [nzTotal]=\"total\" [nzShowPagination]=\"_isPagination\" [nzFrontPagination]=\"false\"\n  [nzBordered]=\"bordered\" [nzSize]=\"size\" [nzLoading]=\"_loading\" [nzLoadingDelay]=\"loadingDelay\"\n  [nzLoadingIndicator]=\"loadingIndicator\" [nzTitle]=\"header\" [nzFooter]=\"footer\" [nzScroll]=\"scroll\"\n  [nzVirtualScroll]=\"virtualScroll\" [nzVirtualItemSize]=\"virtualItemSize\" [nzVirtualMaxBufferPx]=\"virtualMaxBufferPx\"\n  [nzVirtualMinBufferPx]=\"virtualMinBufferPx\" [nzNoResult]=\"noResult\" [nzPageSizeOptions]=\"page.pageSizes\"\n  [nzShowQuickJumper]=\"page.showQuickJumper\" [nzShowSizeChanger]=\"page.showSize\" [nzPaginationPosition]=\"page.position\"\n  [nzShowTotal]=\"totalTpl\">\n  <thead class=\"st__head\">\n    <tr>\n      <th *ngIf=\"expand\" [nzShowExpand]=\"expand\" nzWidth=\"50px\"></th>\n      <th *ngFor=\"let c of _columns; let index=index\" [nzWidth]=\"c.width\" [nzLeft]=\"c._left\" [nzRight]=\"c._right\"\n        [ngClass]=\"c.className\" [attr.colspan]=\"c.colSpan\" [attr.data-col]=\"c.indexKey\" [nzShowSort]=\"c._sort.enabled\"\n        [nzSort]=\"c._sort.default\" (nzSortChange)=\"sort(c, index, $event)\" [nzCustomFilter]=\"c.filter\">\n        <ng-template #renderTitle [ngTemplateOutlet]=\"c.__renderTitle\"\n          [ngTemplateOutletContext]=\"{$implicit: c, index: index }\"></ng-template>\n        <ng-container *ngIf=\"!c.__renderTitle; else renderTitle\">\n          <ng-container [ngSwitch]=\"c.type\">\n            <ng-container *ngSwitchCase=\"'checkbox'\">\n              <ng-container *ngIf=\"c.selections.length === 0\">\n                <ng-template [ngTemplateOutlet]=\"chkAllTpl\" [ngTemplateOutletContext]=\"{$implicit: false }\">\n                </ng-template>\n              </ng-container>\n              <div *ngIf=\"c.selections.length > 0\" class=\"ant-table-selection\">\n                <ng-template [ngTemplateOutlet]=\"chkAllTpl\" [ngTemplateOutletContext]=\"{$implicit: true }\">\n                </ng-template>\n                <div *ngIf=\"c.selections.length\" nz-dropdown nzPlacement=\"bottomLeft\" [nzDropdownMenu]=\"selectionMenu\"\n                  class=\"ant-table-selection-down\">\n                  <i nz-icon nzType=\"down\"></i>\n                </div>\n                <nz-dropdown-menu #selectionMenu=\"nzDropdownMenu\">\n                  <ul nz-menu class=\"ant-table-selection-menu\">\n                    <li nz-menu-item *ngFor=\"let rw of c.selections\" (click)=\"_rowSelection(rw)\" [innerHTML]=\"rw.text\">\n                    </li>\n                  </ul>\n                </nz-dropdown-menu>\n              </div>\n            </ng-container>\n            <ng-container *ngSwitchDefault>\n              <ng-template [ngTemplateOutlet]=\"titleTpl\" [ngTemplateOutletContext]=\"{$implicit: c.title }\">\n              </ng-template>\n            </ng-container>\n          </ng-container>\n        </ng-container>\n        <div nz-th-extra *ngIf=\"c.filter\">\n          <i nz-icon [nzType]=\"c.filter.icon.type\" [nzTheme]=\"c.filter.icon.theme\"\n            class=\"st__filter ant-table-filter-icon\" [class.ant-table-filter-selected]=\"c.filter.default\"\n            [class.ant-table-filter-open]=\"c.filter.visible\" nz-dropdown [nzDropdownMenu]=\"filterMenu\"\n            nzTrigger=\"click\" nzTableFilter [hasFilterButton]=\"true\" [nzClickHide]=\"false\"\n            [(nzVisible)]=\"c.filter.visible\" nzOverlayClassName=\"st__filter-wrap\"></i>\n          <nz-dropdown-menu #filterMenu=\"nzDropdownMenu\">\n            <ng-container [ngSwitch]=\"c.filter.type\">\n              <div *ngSwitchCase=\"'keyword'\" class=\"st__filter-keyword\">\n                <input type=\"text\" nz-input [attr.placeholder]=\"c.filter.menus[0].text\"\n                  [(ngModel)]=\"c.filter.menus[0].value\" />\n              </div>\n              <ul *ngSwitchDefault nz-menu>\n                <ng-container *ngIf=\"c.filter.multiple\">\n                  <li nz-menu-item *ngFor=\"let filter of c.filter.menus\">\n                    <label nz-checkbox [(ngModel)]=\"filter.checked\">{{filter.text}}</label>\n                  </li>\n                </ng-container>\n                <ng-container *ngIf=\"!c.filter.multiple\">\n                  <li nz-menu-item *ngFor=\"let filter of c.filter.menus\">\n                    <label nz-radio [ngModel]=\"filter.checked\"\n                      (ngModelChange)=\"_filterRadio(c, filter, $event)\">{{filter.text}}</label>\n                  </li>\n                </ng-container>\n              </ul>\n            </ng-container>\n            <div class=\"ant-table-filter-dropdown-btns\">\n              <a class=\"ant-table-filter-dropdown-link confirm\" (click)=\"c.filter.visible = false\">\n                <span (click)=\"_filterConfirm(c)\">{{c.filter.confirmText || locale.filterConfirm}}</span>\n              </a>\n              <a class=\"ant-table-filter-dropdown-link clear\" (click)=\"c.filter.visible = false\">\n                <span (click)=\"_filterClear(c)\">{{c.filter.clearText || locale.filterReset}}</span>\n              </a>\n            </div>\n          </nz-dropdown-menu>\n        </div>\n      </th>\n    </tr>\n  </thead>\n  <tbody class=\"st__body\">\n    <ng-container *ngIf=\"!_loading\">\n      <ng-template [ngTemplateOutlet]=\"bodyHeader\" [ngTemplateOutletContext]=\"{$implicit: _statistical }\"></ng-template>\n    </ng-container>\n    <ng-container *ngIf=\"!virtualScroll\">\n      <ng-container *ngFor=\"let i of _data; let index=index\">\n        <ng-template [ngTemplateOutlet]=\"bodyTpl\" [ngTemplateOutletContext]=\"{$implicit: i, index: index }\">\n        </ng-template>\n      </ng-container>\n    </ng-container>\n    <ng-container *ngIf=\"virtualScroll\">\n      <ng-template nz-virtual-scroll let-i let-index=\"index\">\n        <ng-template [ngTemplateOutlet]=\"bodyTpl\" [ngTemplateOutletContext]=\"{$implicit: i, index: index }\">\n        </ng-template>\n      </ng-template>\n    </ng-container>\n    <ng-container *ngIf=\"!_loading\">\n      <ng-template [ngTemplateOutlet]=\"body\" [ngTemplateOutletContext]=\"{$implicit: _statistical }\"></ng-template>\n    </ng-container>\n  </tbody>\n  <ng-template #totalTpl let-range=\"range\" let-total>{{ renderTotal(total, range) }}</ng-template>\n</nz-table>\n",
                        providers: [STDataSource, STRowSource, STColumnSource, STExport, theme.CNCurrencyPipe, theme.DatePipe, theme.YNPipe, common.DecimalPipe],
                        preserveWhitespaces: false,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None
                    }] }
        ];
        /** @nocollapse */
        STComponent.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [theme.ALAIN_I18N_TOKEN,] }] },
            { type: core.ChangeDetectorRef },
            { type: STConfig },
            { type: router.Router },
            { type: core.ElementRef },
            { type: core.Renderer2 },
            { type: STExport },
            { type: theme.ModalHelper },
            { type: theme.DrawerHelper },
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
            { type: STColumnSource },
            { type: STDataSource },
            { type: theme.DelonLocaleService }
        ]; };
        STComponent.propDecorators = {
            orgTable: [{ type: core.ViewChild, args: ['table', { static: false },] }],
            req: [{ type: core.Input }],
            res: [{ type: core.Input }],
            page: [{ type: core.Input }],
            multiSort: [{ type: core.Input }],
            widthMode: [{ type: core.Input }],
            data: [{ type: core.Input }],
            columns: [{ type: core.Input }],
            ps: [{ type: core.Input }],
            pi: [{ type: core.Input }],
            total: [{ type: core.Input }],
            loading: [{ type: core.Input }],
            loadingDelay: [{ type: core.Input }],
            loadingIndicator: [{ type: core.Input }],
            bordered: [{ type: core.Input }],
            size: [{ type: core.Input }],
            scroll: [{ type: core.Input }],
            virtualScroll: [{ type: core.Input }],
            virtualItemSize: [{ type: core.Input }],
            virtualMaxBufferPx: [{ type: core.Input }],
            virtualMinBufferPx: [{ type: core.Input }],
            singleSort: [{ type: core.Input }],
            rowClassName: [{ type: core.Input }],
            header: [{ type: core.Input }],
            footer: [{ type: core.Input }],
            bodyHeader: [{ type: core.Input }],
            body: [{ type: core.Input }],
            expandRowByClick: [{ type: core.Input }],
            expandAccordion: [{ type: core.Input }],
            expand: [{ type: core.Input }],
            noResult: [{ type: core.Input }],
            widthConfig: [{ type: core.Input }],
            rowClickTime: [{ type: core.Input }],
            responsive: [{ type: core.Input }],
            responsiveHideHeaderFooter: [{ type: core.Input }],
            error: [{ type: core.Output }],
            change: [{ type: core.Output }]
        };
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Object)
        ], STComponent.prototype, "ps", void 0);
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Object)
        ], STComponent.prototype, "pi", void 0);
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Object)
        ], STComponent.prototype, "total", void 0);
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Object)
        ], STComponent.prototype, "loadingDelay", void 0);
        __decorate([
            util.InputBoolean(),
            __metadata("design:type", Object)
        ], STComponent.prototype, "bordered", void 0);
        __decorate([
            util.InputBoolean(),
            __metadata("design:type", Object)
        ], STComponent.prototype, "virtualScroll", void 0);
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Object)
        ], STComponent.prototype, "virtualItemSize", void 0);
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Object)
        ], STComponent.prototype, "virtualMaxBufferPx", void 0);
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Object)
        ], STComponent.prototype, "virtualMinBufferPx", void 0);
        __decorate([
            util.InputBoolean(),
            __metadata("design:type", Object)
        ], STComponent.prototype, "expandRowByClick", void 0);
        __decorate([
            util.InputBoolean(),
            __metadata("design:type", Object)
        ], STComponent.prototype, "expandAccordion", void 0);
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Object)
        ], STComponent.prototype, "rowClickTime", void 0);
        __decorate([
            util.InputBoolean(),
            __metadata("design:type", Boolean)
        ], STComponent.prototype, "responsive", void 0);
        __decorate([
            util.InputBoolean(),
            __metadata("design:type", Boolean)
        ], STComponent.prototype, "responsiveHideHeaderFooter", void 0);
        return STComponent;
    }());
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
        STComponent.prototype.clonePage;
        /**
         * @type {?}
         * @private
         */
        STComponent.prototype.copyCog;
        /** @type {?} */
        STComponent.prototype.locale;
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
        /** @type {?} */
        STComponent.prototype.columns;
        /** @type {?} */
        STComponent.prototype.ps;
        /** @type {?} */
        STComponent.prototype.pi;
        /** @type {?} */
        STComponent.prototype.total;
        /**
         * @type {?}
         * @private
         */
        STComponent.prototype._page;
        /** @type {?} */
        STComponent.prototype._loading;
        /**
         * 是否显示Loading
         * @type {?}
         */
        STComponent.prototype.loading;
        /**
         * 延迟显示加载效果的时间（防止闪烁）
         * @type {?}
         */
        STComponent.prototype.loadingDelay;
        /** @type {?} */
        STComponent.prototype.loadingIndicator;
        /**
         * 是否显示边框
         * @type {?}
         */
        STComponent.prototype.bordered;
        /**
         * table大小
         * @type {?}
         */
        STComponent.prototype.size;
        /**
         * 纵向支持滚动，也可用于指定滚动区域的高度：`{ y: '300px', x: '300px' }`
         * @type {?}
         */
        STComponent.prototype.scroll;
        /** @type {?} */
        STComponent.prototype.virtualScroll;
        /** @type {?} */
        STComponent.prototype.virtualItemSize;
        /** @type {?} */
        STComponent.prototype.virtualMaxBufferPx;
        /** @type {?} */
        STComponent.prototype.virtualMinBufferPx;
        /**
         * 单排序规则
         * - 若不指定，则返回：`columnName=ascend|descend`
         * - 若指定，则返回：`sort=columnName.(ascend|descend)`
         * @type {?}
         */
        STComponent.prototype.singleSort;
        /**
         * @type {?}
         * @private
         */
        STComponent.prototype._multiSort;
        /** @type {?} */
        STComponent.prototype.rowClassName;
        /**
         * @type {?}
         * @private
         */
        STComponent.prototype._widthMode;
        /**
         * `header` 标题
         * @type {?}
         */
        STComponent.prototype.header;
        /**
         * `footer` 底部
         * @type {?}
         */
        STComponent.prototype.footer;
        /**
         * 额外 `body` 顶部内容
         * @type {?}
         */
        STComponent.prototype.bodyHeader;
        /**
         * 额外 `body` 内容
         * @type {?}
         */
        STComponent.prototype.body;
        /** @type {?} */
        STComponent.prototype.expandRowByClick;
        /** @type {?} */
        STComponent.prototype.expandAccordion;
        /**
         * `expand` 可展开，当数据源中包括 `expand` 表示展开状态
         * @type {?}
         */
        STComponent.prototype.expand;
        /** @type {?} */
        STComponent.prototype.noResult;
        /** @type {?} */
        STComponent.prototype.widthConfig;
        /**
         * 行单击多少时长之类为双击（单位：毫秒），默认：`200`
         * @type {?}
         */
        STComponent.prototype.rowClickTime;
        /** @type {?} */
        STComponent.prototype.responsive;
        /** @type {?} */
        STComponent.prototype.responsiveHideHeaderFooter;
        /**
         * 请求异常时回调
         * @type {?}
         */
        STComponent.prototype.error;
        /**
         * 变化时回调，包括：`pi`、`ps`、`checkbox`、`radio`、`sort`、`filter`、`click`、`dblClick` 变动
         * @type {?}
         */
        STComponent.prototype.change;
        /**
         * @type {?}
         * @private
         */
        STComponent.prototype.rowClickCount;
        /**
         * @type {?}
         * @private
         */
        STComponent.prototype.cdr;
        /**
         * @type {?}
         * @private
         */
        STComponent.prototype.cog;
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
        STComponent.prototype.renderer;
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

    /**
     * @fileoverview added by tsickle
     * Generated from: table.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var COMPONENTS = [STComponent, STRowDirective];
    var STModule = /** @class */ (function () {
        function STModule() {
        }
        STModule.decorators = [
            { type: core.NgModule, args: [{
                        schemas: [core.NO_ERRORS_SCHEMA],
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            util.DelonUtilModule,
                            acl.DelonACLModule,
                            popconfirm.NzPopconfirmModule,
                            table.NzTableModule,
                            icon.NzIconModule,
                            badge.NzBadgeModule,
                            checkbox.NzCheckboxModule,
                            divider.NzDividerModule,
                            dropdown.NzDropDownModule,
                            menu.NzMenuModule,
                            radio.NzRadioModule,
                            tag.NzTagModule,
                            input.NzInputModule,
                            tooltip.NzToolTipModule,
                        ],
                        declarations: __spread(COMPONENTS),
                        exports: __spread(COMPONENTS),
                    },] }
        ];
        return STModule;
    }());

    exports.STColumnSource = STColumnSource;
    exports.STComponent = STComponent;
    exports.STConfig = STConfig;
    exports.STDataSource = STDataSource;
    exports.STExport = STExport;
    exports.STModule = STModule;
    exports.STRowDirective = STRowDirective;
    exports.ɵa = STRowSource;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=table.umd.js.map
