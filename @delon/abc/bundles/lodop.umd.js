/**
 * @license ng-alain(cipchk@qq.com) v8.8.0
 * (c) 2019 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@delon/util')) :
    typeof define === 'function' && define.amd ? define('@delon/abc/lodop', ['exports', '@angular/core', 'rxjs', '@delon/util'], factory) :
    (global = global || self, factory((global.delon = global.delon || {}, global.delon.abc = global.delon.abc || {}, global.delon.abc.lodop = {}), global.ng.core, global.rxjs, global.delon.util));
}(this, (function (exports, core, rxjs, util) { 'use strict';

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
     * Generated from: lodop.types.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function CLodop() { }
    if (false) {
        /**
         * 判断是否支持https协议的属性
         *
         * - 0 不支持
         * - 1 支持
         * - 2 支持且已启动（https服务需单独启动)
         * @type {?}
         */
        CLodop.prototype.HTTPS_STATUS;
        /**
         * 结果回调函数保留
         * @type {?}
         */
        CLodop.prototype.On_Return_Remain;
        /**
         * 结果回调函数
         * @type {?}
         */
        CLodop.prototype.On_Return;
        /**
         * 建立打印机名单
         * @param {?} el
         * @return {?}
         */
        CLodop.prototype.Create_Printer_List = function (el) { };
        /**
         * 建立纸张类型名单
         * @param {?} el
         * @param {?} iPrintIndex
         * @return {?}
         */
        CLodop.prototype.Create_PageSize_List = function (el, iPrintIndex) { };
    }
    /**
     * @record
     */
    function Lodop() { }
    if (false) {
        /**
         * 获得软件版本号
         * @type {?}
         */
        Lodop.prototype.VERSION;
        /** @type {?} */
        Lodop.prototype.webskt;
        /* Skipping unhandled member: [key: string]: any;*/
        /**
         * 打印初始化。初始化运行环境，清理异常打印遗留的系统资源，设定打印任务名。
         *
         * **建议或要求：**该函数与PRINT_INITA都有初始化功能，每个打印事务至少初始化一次，建议打印程序首先调用该函数。任务名要尽量区别于其它打印任务，譬如用“XX单位_XX管理信息系统_XX子系统_XX模块_XX打印作业”字样。
         * 不希望最终用户更改打印布局时，则设strTaskName空。
         *
         * @param {?} strTaskName 打印任务名
         * @return {?} 返回逻辑真表示初始化成功，逻辑假表示初始化失败，失败原因有：前一个打印事务没有完成；操作系统没有添加打印机(驱动)等
         */
        Lodop.prototype.PRINT_INIT = function (strTaskName) { };
        /**
         * 设定纸张大小
         * @param {?} intOrient
         * @param {?} PageWidth
         * @param {?} PageHeight
         * @param {?} strPageName
         * @return {?}
         */
        Lodop.prototype.SET_PRINT_PAGESIZE = function (intOrient, PageWidth, PageHeight, strPageName) { };
        /**
         * 增加超文本打印项(普通模式)
         * @param {?} Top
         * @param {?} Left
         * @param {?} Width
         * @param {?} Height
         * @param {?} strHtmlContent
         * @return {?}
         */
        Lodop.prototype.ADD_PRINT_HTM = function (Top, Left, Width, Height, strHtmlContent) { };
        /**
         * 增加表格打印项（超文本模式）
         * @param {?} Top
         * @param {?} Left
         * @param {?} Width
         * @param {?} Height
         * @param {?} strHtml
         * @return {?}
         */
        Lodop.prototype.ADD_PRINT_TABLE = function (Top, Left, Width, Height, strHtml) { };
        /**
         * 增加表格打印项（超文本模式）
         * @param {?} Top
         * @param {?} Left
         * @param {?} Width
         * @param {?} Height
         * @param {?} strHtml
         * @return {?}
         */
        Lodop.prototype.ADD_PRINT_TABLE = function (Top, Left, Width, Height, strHtml) { };
        /**
         * 增加超文本打印项（URL模式）
         * @param {?} Top
         * @param {?} Left
         * @param {?} Width
         * @param {?} Height
         * @param {?} strURL
         * @return {?}
         */
        Lodop.prototype.ADD_PRINT_URL = function (Top, Left, Width, Height, strURL) { };
        /**
         * 增加纯文本打印项
         * @param {?} Top
         * @param {?} Left
         * @param {?} Width
         * @param {?} Height
         * @param {?} strContent
         * @return {?}
         */
        Lodop.prototype.ADD_PRINT_TEXT = function (Top, Left, Width, Height, strContent) { };
        /**
         * 增加图片打印项
         * @param {?} Top
         * @param {?} Left
         * @param {?} Width
         * @param {?} Height
         * @param {?} strHtmlContent
         * @return {?}
         */
        Lodop.prototype.ADD_PRINT_IMAGE = function (Top, Left, Width, Height, strHtmlContent) { };
        /**
         * 增加矩形线
         * @param {?} Top
         * @param {?} Left
         * @param {?} Width
         * @param {?} Height
         * @param {?} intLineStyle
         * @param {?} intLineWidth
         * @return {?}
         */
        Lodop.prototype.ADD_PRINT_RECT = function (Top, Left, Width, Height, intLineStyle, intLineWidth) { };
        /**
         * 增加椭圆线
         * @param {?} Top
         * @param {?} Left
         * @param {?} Width
         * @param {?} Height
         * @param {?} intLineStyle
         * @param {?} intLineWidth
         * @return {?}
         */
        Lodop.prototype.ADD_PRINT_ELLIPSE = function (Top, Left, Width, Height, intLineStyle, intLineWidth) { };
        /**
         * 增加直线
         * @param {?} Top1
         * @param {?} Left1
         * @param {?} Top2
         * @param {?} Left2
         * @param {?} intLineStyle
         * @param {?} intLineWidth
         * @return {?}
         */
        Lodop.prototype.ADD_PRINT_LINE = function (Top1, Left1, Top2, Left2, intLineStyle, intLineWidth) { };
        /**
         * 增加条形码
         * @param {?} Top
         * @param {?} Left
         * @param {?} Width
         * @param {?} Height
         * @param {?} CodeType
         * @param {?} CodeValue
         * @return {?}
         */
        Lodop.prototype.ADD_PRINT_BARCODE = function (Top, Left, Width, Height, CodeType, CodeValue) { };
        /**
         * 增加图表
         * @param {?} Top
         * @param {?} Left
         * @param {?} Width
         * @param {?} Height
         * @param {?} ChartType
         * @param {?} strHtml
         * @return {?}
         */
        Lodop.prototype.ADD_PRINT_CHART = function (Top, Left, Width, Height, ChartType, strHtml) { };
        /**
         * 装载文档式模板
         * @param {?} strDataStyle
         * @param {?} varDataValue
         * @return {?}
         */
        Lodop.prototype.ADD_PRINT_DATA = function (strDataStyle, varDataValue) { };
        /**
         * 设置打印项风格
         * @param {?} strStyleName
         * @param {?} varStyleValue
         * @return {?}
         */
        Lodop.prototype.SET_PRINT_STYLE = function (strStyleName, varStyleValue) { };
        /**
         * 打印预览
         * @return {?}
         */
        Lodop.prototype.PREVIEW = function () { };
        /**
         * 直接打印
         * @return {?}
         */
        Lodop.prototype.PRINT = function () { };
        /**
         * 打印维护
         * @return {?}
         */
        Lodop.prototype.PRINT_SETUP = function () { };
        /**
         * 打印设计
         * @return {?}
         */
        Lodop.prototype.PRINT_DESIGN = function () { };
        /**
         * 强制分页
         * @return {?}
         */
        Lodop.prototype.NEWPAGE = function () { };
        /**
         * 获得打印设备个数
         * @return {?}
         */
        Lodop.prototype.GET_PRINTER_COUNT = function () { };
        /**
         * 获得打印设备名称
         * @param {?} strPrinterIDandType
         * @return {?}
         */
        Lodop.prototype.GET_PRINTER_NAME = function (strPrinterIDandType) { };
        /**
         * 指定打印设备
         * @param {?} oIndexOrName
         * @return {?}
         */
        Lodop.prototype.SET_PRINTER_INDEX = function (oIndexOrName) { };
        /**
         * 【CLodop】指定打印机
         * @param {?} DriverIndex
         * @param {?} PrinterIDandName
         * @param {?} SubDevIndex
         * @return {?}
         */
        Lodop.prototype.SET_PRINTER_INDEX = function (DriverIndex, PrinterIDandName, SubDevIndex) { };
        /**
         * 选择打印设备
         * @return {?}
         */
        Lodop.prototype.SELECT_PRINTER = function () { };
        /**
         * 设置显示模式
         * @param {?} strModeType
         * @param {?} varModeValue
         * @return {?}
         */
        Lodop.prototype.SET_SHOW_MODE = function (strModeType, varModeValue) { };
        /**
         * 设置打印模式
         * @param {?} strModeType
         * @param {?} varModeValue
         * @return {?}
         */
        Lodop.prototype.SET_PRINT_MODE = function (strModeType, varModeValue) { };
        /**
         * 设置打印份数
         * @param {?} intCopies
         * @return {?}
         */
        Lodop.prototype.SET_PRINT_COPIES = function (intCopies) { };
        /**
         * 设置预览窗口
         * @param {?} intDispMode
         * @param {?} intToolMode
         * @param {?} blDirectPrint
         * @param {?} inWidth
         * @param {?} intHeight
         * @param {?} strTitleButtonCaptoin
         * @return {?}
         */
        Lodop.prototype.SET_PREVIEW_WINDOW = function (intDispMode, intToolMode, blDirectPrint, inWidth, intHeight, strTitleButtonCaptoin) { };
        /**
         * 指定背景图
         * @param {?} strImgHtml
         * @return {?}
         */
        Lodop.prototype.ADD_PRINT_SETUP_BKIMG = function (strImgHtml) { };
        /**
         * 发送原始数据
         * @param {?} strRawData
         * @return {?}
         */
        Lodop.prototype.SEND_PRINT_RAWDATA = function (strRawData) { };
        /**
         * 写端口数据
         * @param {?} strPortName
         * @param {?} strData
         * @return {?}
         */
        Lodop.prototype.WRITE_PORT_DATA = function (strPortName, strData) { };
        /**
         * 读端口数据
         * @param {?} strPortName
         * @return {?}
         */
        Lodop.prototype.READ_PORT_DATA = function (strPortName) { };
        /**
         * 获得配置文件名
         * @param {?} strPrintTask
         * @return {?}
         */
        Lodop.prototype.GET_PRINT_INIFFNAME = function (strPrintTask) { };
        /**
         * 获得纸张类型名清单
         * @param {?} oPrinterName
         * @param {?} strSplit
         * @return {?}
         */
        Lodop.prototype.GET_PAGESIZES_LIST = function (oPrinterName, strSplit) { };
        /**
         * 写本地文件内容
         * @param {?} intWriteMode
         * @param {?} strFileName
         * @param {?} strText
         * @return {?}
         */
        Lodop.prototype.WRITE_FILE_TEXT = function (intWriteMode, strFileName, strText) { };
        /**
         * 读本地文件内容
         * @param {?} strFileName
         * @return {?}
         */
        Lodop.prototype.GET_FILE_TEXT = function (strFileName) { };
        /**
         * 读本地文件时间
         * @param {?} strFileName
         * @return {?}
         */
        Lodop.prototype.GET_FILE_TIME = function (strFileName) { };
        /**
         * 判断本地文件是否存在
         * @param {?} strFileName
         * @return {?}
         */
        Lodop.prototype.IS_FILE_EXIST = function (strFileName) { };
        /**
         * 获得系统信息
         * @param {?} strInfoType
         * @return {?}
         */
        Lodop.prototype.GET_SYSTEM_INFO = function (strInfoType) { };
        /**
         * 获得数据值
         * @param {?} ValueType
         * @param {?} ValueIndex
         * @return {?}
         */
        Lodop.prototype.GET_VALUE = function (ValueType, ValueIndex) { };
        /**
         * 数据格式转换
         * @param {?} oType
         * @param {?} oValue
         * @return {?}
         */
        Lodop.prototype.FORMAT = function (oType, oValue) { };
        /**
         * 获得对话框结果值
         * @param {?} oType
         * @param {?} oPreValue
         * @return {?}
         */
        Lodop.prototype.GET_DIALOG_VALUE = function (oType, oPreValue) { };
        /**
         * (增强型)打印初始化
         * @param {?} Top
         * @param {?} Left
         * @param {?} Width
         * @param {?} Height
         * @param {?} strPrintName
         * @return {?}
         */
        Lodop.prototype.PRINT_INITA = function (Top, Left, Width, Height, strPrintName) { };
        /**
         * (增强型)增加超文本打印项(图形模式)
         * @param {?} Top
         * @param {?} Left
         * @param {?} Width
         * @param {?} Height
         * @param {?} strHtmlContent
         * @return {?}
         */
        Lodop.prototype.ADD_PRINT_HTML = function (Top, Left, Width, Height, strHtmlContent) { };
        /**
         * (增强型)增加表格打印项（URL模式）
         * @param {?} Top
         * @param {?} Left
         * @param {?} Width
         * @param {?} Height
         * @param {?} strURL
         * @return {?}
         */
        Lodop.prototype.ADD_PRINT_TBURL = function (Top, Left, Width, Height, strURL) { };
        /**
         * (增强型)增加纯文本打印项
         * @param {?} Top
         * @param {?} Left
         * @param {?} Width
         * @param {?} Height
         * @param {?} strContent
         * @return {?}
         */
        Lodop.prototype.ADD_PRINT_TEXTA = function (Top, Left, Width, Height, strContent) { };
        /**
         * (增强型)设置打印项风格A, 继承 `SET_PRINT_STYLE` 的所有属性
         * @param {?} varItemNameID
         * @param {?} strStyleName
         * @param {?} varStyleValue
         * @return {?}
         */
        Lodop.prototype.SET_PRINT_STYLEA = function (varItemNameID, strStyleName, varStyleValue) { };
        /**
         * (增强型)导出数据到文件
         * @param {?} strFileName
         * @return {?}
         */
        Lodop.prototype.SAVE_TO_FILE = function (strFileName) { };
        /**
         * (增强型)设置保存模式
         * @param {?} varModeName
         * @param {?} varModeValue
         * @return {?}
         */
        Lodop.prototype.SET_SAVE_MODE = function (varModeName, varModeValue) { };
        /**
         * (增强型)增加图形
         * @param {?} intShapeType
         * @param {?} Top
         * @param {?} Left
         * @param {?} Width
         * @param {?} Height
         * @param {?} intLineStyle
         * @param {?} intLineWidth
         * @param {?} varColor
         * @return {?}
         */
        Lodop.prototype.ADD_PRINT_SHAPE = function (intShapeType, Top, Left, Width, Height, intLineStyle, intLineWidth, varColor) { };
        /**
         * (增强型)指定打印设备
         * @param {?} oIndexOrName
         * @return {?}
         */
        Lodop.prototype.SET_PRINTER_INDEXA = function (oIndexOrName) { };
        /**
         * (增强型)强制分页
         * @return {?}
         */
        Lodop.prototype.NEWPAGEA = function () { };
        /**
         * (增强型)打印预览A
         * @return {?}
         */
        Lodop.prototype.PREVIEWA = function () { };
        /**
         * (增强型)打印预览B
         * @return {?}
         */
        Lodop.prototype.PREVIEWB = function () { };
        /**
         * 直接打印A
         * @return {?}
         */
        Lodop.prototype.PRINTA = function () { };
        /**
         * 直接打印B
         * @return {?}
         */
        Lodop.prototype.PRINTB = function () { };
        /**
         * 显示图表
         * @return {?}
         */
        Lodop.prototype.SHOW_CHART = function () { };
        /**
         * 控制界面动作
         * @param {?} ActName
         * @param {?} ActValue
         * @return {?}
         */
        Lodop.prototype.DO_ACTION = function (ActName, ActValue) { };
        /**
         * 设置软件产品注册信息
         *
         * @param {?} strCompanyName 注册单位名称，用途与控件参数CompanyName一样。
         * @param {?} strLicense 主注册号，用途与控件参数License一样。
         * @param {?=} strLicenseA 附加注册号A，用途与控件参数LicenseA一样。
         * @param {?=} strLicenseB 附加注册号B，用途与控件参数LicenseB一样。
         * @return {?}
         */
        Lodop.prototype.SET_LICENSES = function (strCompanyName, strLicense, strLicenseA, strLicenseB) { };
    }
    /**
     * @record
     */
    function LodopResult() { }
    if (false) {
        /**
         * 是否成功
         * @type {?}
         */
        LodopResult.prototype.ok;
        /**
         * 错误码
         * @type {?|undefined}
         */
        LodopResult.prototype.status;
        /**
         * 成功时携带 LODOP 对象
         * @type {?|undefined}
         */
        LodopResult.prototype.lodop;
        /**
         * 错误信息
         * @type {?|undefined}
         */
        LodopResult.prototype.error;
    }
    /**
     * @record
     */
    function LodopPrintResult() { }
    if (false) {
        /**
         * 是否成功
         * @type {?}
         */
        LodopPrintResult.prototype.ok;
        /**
         * 错误信息
         * @type {?|undefined}
         */
        LodopPrintResult.prototype.error;
        /**
         * 代码
         * @type {?}
         */
        LodopPrintResult.prototype.code;
        /**
         * 动态参数上下文对象
         * @type {?}
         */
        LodopPrintResult.prototype.item;
        /**
         * 代码解析表达式
         * @type {?|undefined}
         */
        LodopPrintResult.prototype.parser;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lodop.config.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LodopConfig = /** @class */ (function () {
        function LodopConfig() {
        }
        LodopConfig.decorators = [
            { type: core.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */ LodopConfig.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function LodopConfig_Factory() { return new LodopConfig(); }, token: LodopConfig, providedIn: "root" });
        return LodopConfig;
    }());
    if (false) {
        /**
         * 注册信息：主注册号
         * @type {?}
         */
        LodopConfig.prototype.license;
        /**
         * 注册信息：附加注册号A
         * @type {?}
         */
        LodopConfig.prototype.licenseA;
        /**
         * 注册信息：附加注册号B
         * @type {?}
         */
        LodopConfig.prototype.licenseB;
        /**
         * 注册信息：注册单位名称
         * @type {?}
         */
        LodopConfig.prototype.companyName;
        /**
         * Lodop 远程脚本URL地址，**注意**务必使用 `name` 属性指定变量值
         *
         * - http://localhost:18000/CLodopfuncs.js
         * - https://localhost:8443/CLodopfuncs.js [默认]
         * @type {?}
         */
        LodopConfig.prototype.url;
        /**
         * Lodop 变量名，默认：`CLODOP`
         * @type {?}
         */
        LodopConfig.prototype.name;
        /**
         * 检查次数，默认 `100`，当检查超过时视为异常，这是因为 Lodop 需要连接 WebSocket
         * @type {?}
         */
        LodopConfig.prototype.checkMaxCount;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lodop.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LodopService = /** @class */ (function () {
        function LodopService(defCog, scriptSrv) {
            this.defCog = defCog;
            this.scriptSrv = scriptSrv;
            this.pending = false;
            this._lodop = null;
            this._init = new rxjs.Subject();
            this._events = new rxjs.Subject();
            this.printBuffer = [];
            this.cog = defCog;
        }
        Object.defineProperty(LodopService.prototype, "cog", {
            /**
             * 获取或重新设置配置
             *
             * **注：**重新设置会倒置重新加载脚本资源
             */
            get: /**
             * 获取或重新设置配置
             *
             * **注：**重新设置会倒置重新加载脚本资源
             * @return {?}
             */
            function () {
                return this._cog;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._cog = __assign({ url: 'https://localhost:8443/CLodopfuncs.js', name: 'CLODOP', companyName: '', checkMaxCount: 100 }, this.defCog, value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LodopService.prototype, "events", {
            /** 事件变更通知 */
            get: /**
             * 事件变更通知
             * @return {?}
             */
            function () {
                return this._events.asObservable();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LodopService.prototype, "lodop", {
            /** 获取 lodop 对象 */
            get: /**
             * 获取 lodop 对象
             * @return {?}
             */
            function () {
                if (this._lodop)
                    return rxjs.of((/** @type {?} */ ({ ok: true, lodop: this._lodop })));
                if (this.pending)
                    return this._init.asObservable();
                this.request();
                return this._init.asObservable();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LodopService.prototype, "printer", {
            /** 获取打印机列表 */
            get: /**
             * 获取打印机列表
             * @return {?}
             */
            function () {
                this.check();
                /** @type {?} */
                var ret = [];
                /** @type {?} */
                var count = (/** @type {?} */ (this._lodop)).GET_PRINTER_COUNT();
                for (var index = 0; index < count; index++) {
                    ret.push((/** @type {?} */ (this._lodop)).GET_PRINTER_NAME(index));
                }
                return ret;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @private
         * @return {?}
         */
        LodopService.prototype.check = /**
         * @private
         * @return {?}
         */
        function () {
            if (!this._lodop)
                throw new Error("\u8BF7\u52A1\u5FC5\u5148\u8C03\u7528 lodop \u83B7\u53D6\u5BF9\u8C61");
        };
        /**
         * @private
         * @return {?}
         */
        LodopService.prototype.request = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            this.pending = true;
            /** @type {?} */
            var url = this.cog.url + "?name=" + this.cog.name;
            /** @type {?} */
            var checkMaxCount = (/** @type {?} */ (this.cog.checkMaxCount));
            /** @type {?} */
            var onResolve = (/**
             * @param {?} status
             * @param {?=} error
             * @return {?}
             */
            function (status, error) {
                _this._init.next({
                    ok: status === 'ok',
                    status: status,
                    error: error,
                    lodop: (/** @type {?} */ (_this._lodop)),
                });
            });
            /** @type {?} */
            var checkStatus = (/**
             * @return {?}
             */
            function () {
                --checkMaxCount;
                if ((/** @type {?} */ (_this._lodop)).webskt && (/** @type {?} */ (_this._lodop)).webskt.readyState === 1) {
                    onResolve('ok');
                }
                else {
                    if (checkMaxCount < 0) {
                        onResolve('check-limit');
                        return;
                    }
                    setTimeout((/**
                     * @return {?}
                     */
                    function () { return checkStatus(); }), 100);
                }
            });
            this.scriptSrv.loadScript(url).then((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                if (res.status !== 'ok') {
                    _this.pending = false;
                    onResolve('script-load-error', res[0]);
                    return;
                }
                if (window.hasOwnProperty((/** @type {?} */ (_this.cog.name)))) {
                    _this._lodop = (/** @type {?} */ (window[(/** @type {?} */ (_this.cog.name))]));
                }
                if (_this._lodop === null) {
                    onResolve('load-variable-name-error', { name: _this.cog.name });
                    return;
                }
                _this._lodop.SET_LICENSES((/** @type {?} */ (_this.cog.companyName)), _this.cog.license, _this.cog.licenseA, _this.cog.licenseB);
                checkStatus();
            }));
        };
        /** 重置 lodop 对象 */
        /**
         * 重置 lodop 对象
         * @return {?}
         */
        LodopService.prototype.reset = /**
         * 重置 lodop 对象
         * @return {?}
         */
        function () {
            this._lodop = null;
            this.pending = false;
            this.request();
        };
        /**
         * 附加代码至 `lodop` 对象上，字符串类支持 `{{key}}` 的动态参数
         *
         * **注：** 代码是指打印设计所产生字符串数据
         *
         * @param code 代码
         * @param contextObj 动态参数上下文对象
         * @param parser 自定义解析表达式，默认：`/LODOP\.([^(]+)\(([^\n]+)\);/i`
         */
        /**
         * 附加代码至 `lodop` 对象上，字符串类支持 `{{key}}` 的动态参数
         *
         * **注：** 代码是指打印设计所产生字符串数据
         *
         * @param {?} code 代码
         * @param {?=} contextObj 动态参数上下文对象
         * @param {?=} parser 自定义解析表达式，默认：`/LODOP\.([^(]+)\(([^\n]+)\);/i`
         * @return {?}
         */
        LodopService.prototype.attachCode = /**
         * 附加代码至 `lodop` 对象上，字符串类支持 `{{key}}` 的动态参数
         *
         * **注：** 代码是指打印设计所产生字符串数据
         *
         * @param {?} code 代码
         * @param {?=} contextObj 动态参数上下文对象
         * @param {?=} parser 自定义解析表达式，默认：`/LODOP\.([^(]+)\(([^\n]+)\);/i`
         * @return {?}
         */
        function (code, contextObj, parser) {
            var _this = this;
            this.check();
            if (!parser)
                parser = /LODOP\.([^(]+)\(([^\n]+)\);/i;
            code.split('\n').forEach((/**
             * @param {?} line
             * @return {?}
             */
            function (line) {
                /** @type {?} */
                var res = (/** @type {?} */ (parser)).exec(line.trim());
                if (!res)
                    return;
                /** @type {?} */
                var fn = (/** @type {?} */ (_this._lodop))[res[1]];
                if (fn) {
                    /** @type {?} */
                    var arr = null;
                    try {
                        // tslint:disable-next-line: function-constructor
                        /** @type {?} */
                        var fakeFn = new Function("return [" + res[2] + "]");
                        arr = fakeFn();
                    }
                    catch (_a) { }
                    if (arr != null && Array.isArray(arr) && contextObj) {
                        for (var i = 0; i < arr.length; i++) {
                            if (typeof arr[i] === 'string') {
                                arr[i] = ((/** @type {?} */ (arr[i]))).replace(/{{(.*?)}}/g, (/**
                                 * @param {?} _match
                                 * @param {?} key
                                 * @return {?}
                                 */
                                function (_match, key) { return contextObj[key.trim()] || ''; }));
                            }
                        }
                    }
                    fn.apply(_this._lodop, (/** @type {?} */ (arr)));
                }
            }));
        };
        /**
         * 打开打印设计关闭后自动返回代码
         *
         * **注：** 自动监听 `On_Return` 事件，运行后会移除
         */
        /**
         * 打开打印设计关闭后自动返回代码
         *
         * **注：** 自动监听 `On_Return` 事件，运行后会移除
         * @return {?}
         */
        LodopService.prototype.design = /**
         * 打开打印设计关闭后自动返回代码
         *
         * **注：** 自动监听 `On_Return` 事件，运行后会移除
         * @return {?}
         */
        function () {
            var _this = this;
            this.check();
            /** @type {?} */
            var tid = (/** @type {?} */ (this._lodop)).PRINT_DESIGN();
            return new Promise((/**
             * @param {?} resolve
             * @return {?}
             */
            function (resolve) {
                (/** @type {?} */ (_this._lodop)).On_Return = (/**
                 * @param {?} taskID
                 * @param {?} value
                 * @return {?}
                 */
                function (taskID, value) {
                    if (tid !== taskID)
                        return;
                    (/** @type {?} */ (_this._lodop)).On_Return = null;
                    resolve('' + value);
                });
            }));
        };
        /**
         * @private
         * @return {?}
         */
        LodopService.prototype.printDo = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var data = this.printBuffer.shift();
            if (!data)
                return;
            this.attachCode(data.code, data.item, data.parser);
            /** @type {?} */
            var tid = (/** @type {?} */ (this._lodop)).PRINT();
            (/** @type {?} */ (this._lodop)).On_Return = (/**
             * @param {?} taskID
             * @param {?} value
             * @return {?}
             */
            function (taskID, value) {
                if (tid !== taskID)
                    return;
                (/** @type {?} */ (_this._lodop)).On_Return = null;
                _this._events.next(__assign({ ok: value === true, error: value === true ? null : value }, data));
                _this.printDo();
            });
        };
        /**
         * 立即打印，一般用于批量套打
         *
         * @param code 代码
         * @param contextObj 动态参数上下文对象
         * @param parser 自定义解析表达式，默认：`/LODOP\.([^(]+)\(([^\n]+)\);/i`
         */
        /**
         * 立即打印，一般用于批量套打
         *
         * @param {?} code 代码
         * @param {?} contextObj 动态参数上下文对象
         * @param {?=} parser 自定义解析表达式，默认：`/LODOP\.([^(]+)\(([^\n]+)\);/i`
         * @return {?}
         */
        LodopService.prototype.print = /**
         * 立即打印，一般用于批量套打
         *
         * @param {?} code 代码
         * @param {?} contextObj 动态参数上下文对象
         * @param {?=} parser 自定义解析表达式，默认：`/LODOP\.([^(]+)\(([^\n]+)\);/i`
         * @return {?}
         */
        function (code, contextObj, parser) {
            var _a;
            this.check();
            if (contextObj) {
                (_a = this.printBuffer).push.apply(_a, __spread((Array.isArray(contextObj) ? contextObj : [contextObj]).map((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) {
                    return { code: code, parser: parser, item: item };
                }))));
            }
            this.printDo();
        };
        /**
         * @return {?}
         */
        LodopService.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this._init.unsubscribe();
            this._events.unsubscribe();
        };
        LodopService.decorators = [
            { type: core.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */
        LodopService.ctorParameters = function () { return [
            { type: LodopConfig },
            { type: util.LazyService }
        ]; };
        /** @nocollapse */ LodopService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function LodopService_Factory() { return new LodopService(core.ɵɵinject(LodopConfig), core.ɵɵinject(util.LazyService)); }, token: LodopService, providedIn: "root" });
        return LodopService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        LodopService.prototype._cog;
        /**
         * @type {?}
         * @private
         */
        LodopService.prototype.pending;
        /**
         * @type {?}
         * @private
         */
        LodopService.prototype._lodop;
        /**
         * @type {?}
         * @private
         */
        LodopService.prototype._init;
        /**
         * @type {?}
         * @private
         */
        LodopService.prototype._events;
        /**
         * @type {?}
         * @private
         */
        LodopService.prototype.printBuffer;
        /**
         * @type {?}
         * @private
         */
        LodopService.prototype.defCog;
        /**
         * @type {?}
         * @private
         */
        LodopService.prototype.scriptSrv;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lodop.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LodopModule = /** @class */ (function () {
        function LodopModule() {
        }
        LodopModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [util.DelonUtilModule],
                    },] }
        ];
        return LodopModule;
    }());

    exports.LodopConfig = LodopConfig;
    exports.LodopModule = LodopModule;
    exports.LodopService = LodopService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=lodop.umd.js.map
