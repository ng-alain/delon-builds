/**
 * @license ng-alain(cipchk@qq.com) v8.7.3
 * (c) 2019 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@delon/theme'), require('@delon/util'), require('@angular/common'), require('ng-zorro-antd/badge'), require('ng-zorro-antd/dropdown'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/list'), require('ng-zorro-antd/spin'), require('ng-zorro-antd/tabs'), require('ng-zorro-antd/tag')) :
    typeof define === 'function' && define.amd ? define('@delon/abc/notice-icon', ['exports', '@angular/core', '@delon/theme', '@delon/util', '@angular/common', 'ng-zorro-antd/badge', 'ng-zorro-antd/dropdown', 'ng-zorro-antd/icon', 'ng-zorro-antd/list', 'ng-zorro-antd/spin', 'ng-zorro-antd/tabs', 'ng-zorro-antd/tag'], factory) :
    (global = global || self, factory((global.delon = global.delon || {}, global.delon.abc = global.delon.abc || {}, global.delon.abc['notice-icon'] = {}), global.ng.core, global.delon.theme, global.delon.util, global.ng.common, global['ng-zorro-antd/badge'], global['ng-zorro-antd/dropdown'], global['ng-zorro-antd/icon'], global['ng-zorro-antd/list'], global['ng-zorro-antd/spin'], global['ng-zorro-antd/tabs'], global['ng-zorro-antd/tag']));
}(this, (function (exports, core, theme, util, common, badge, dropdown, icon, list, spin, tabs, tag) { 'use strict';

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
     * Generated from: notice-icon.types.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function NoticeItem() { }
    if (false) {
        /** @type {?} */
        NoticeItem.prototype.title;
        /** @type {?} */
        NoticeItem.prototype.list;
        /**
         * 空列表文本，默认：`无通知`
         * @type {?|undefined}
         */
        NoticeItem.prototype.emptyText;
        /**
         * 空列表图像
         * @type {?|undefined}
         */
        NoticeItem.prototype.emptyImage;
        /**
         * 清空文本，默认：`清空`
         * @type {?|undefined}
         */
        NoticeItem.prototype.clearText;
    }
    /**
     * @record
     */
    function NoticeIconList() { }
    if (false) {
        /**
         * 头像图片链接
         * @type {?|undefined}
         */
        NoticeIconList.prototype.avatar;
        /**
         * 标题
         * @type {?|undefined}
         */
        NoticeIconList.prototype.title;
        /**
         * 描述信息
         * @type {?|undefined}
         */
        NoticeIconList.prototype.description;
        /**
         * 时间戳
         * @type {?|undefined}
         */
        NoticeIconList.prototype.datetime;
        /**
         * 额外信息，在列表项右上角
         * @type {?|undefined}
         */
        NoticeIconList.prototype.extra;
        /**
         * 是否已读状态
         * @type {?|undefined}
         */
        NoticeIconList.prototype.read;
        /* Skipping unhandled member: [key: string]: any;*/
    }
    /**
     * @record
     */
    function NoticeIconSelect() { }
    if (false) {
        /** @type {?} */
        NoticeIconSelect.prototype.title;
        /** @type {?} */
        NoticeIconSelect.prototype.item;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: notice-icon-tab.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NoticeIconTabComponent = /** @class */ (function () {
        function NoticeIconTabComponent() {
            this.locale = {};
            this.select = new core.EventEmitter();
            this.clear = new core.EventEmitter();
        }
        /**
         * @param {?} item
         * @return {?}
         */
        NoticeIconTabComponent.prototype.onClick = /**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            this.select.emit({ title: this.data.title, item: item });
        };
        /**
         * @return {?}
         */
        NoticeIconTabComponent.prototype.onClear = /**
         * @return {?}
         */
        function () {
            this.clear.emit(this.data.title);
        };
        NoticeIconTabComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'notice-icon-tab',
                        exportAs: 'noticeIconTab',
                        template: "<div *ngIf=\"data.list?.length === 0; else listTpl\" class=\"notice-icon__notfound\">\n  <img class=\"notice-icon__notfound-img\" *ngIf=\"data.emptyImage\" src=\"{{data.emptyImage}}\" alt=\"not found\" />\n  <p>{{data.emptyText || locale.emptyText}}</p>\n</div>\n<ng-template #listTpl>\n  <nz-list [nzDataSource]=\"data.list\" [nzRenderItem]=\"item\">\n    <ng-template #item let-item>\n      <nz-list-item (click)=\"onClick(item)\" [ngClass]=\"{'notice-icon__item-read': item.read}\">\n        <nz-list-item-meta [nzTitle]=\"nzTitle\" [nzDescription]=\"nzDescription\" [nzAvatar]=\"item.avatar\">\n          <ng-template #nzTitle>\n            {{item.title}}\n            <div class=\"notice-icon__item-extra\" *ngIf=\"item.extra\">\n              <nz-tag [nzColor]=\"item.color\">{{item.extra}}</nz-tag>\n            </div>\n          </ng-template>\n          <ng-template #nzDescription>\n            <div *ngIf=\"item.description\" class=\"notice-icon__item-desc\">{{item.description}}</div>\n            <div *ngIf=\"item.datetime\" class=\"notice-icon__item-time\">{{item.datetime}}</div>\n          </ng-template>\n        </nz-list-item-meta>\n      </nz-list-item>\n    </ng-template>\n  </nz-list>\n  <div class=\"notice-icon__clear\" (click)=\"onClear()\">{{ data.clearText || locale.clearText }}</div>\n</ng-template>\n",
                        preserveWhitespaces: false,
                        encapsulation: core.ViewEncapsulation.None
                    }] }
        ];
        NoticeIconTabComponent.propDecorators = {
            locale: [{ type: core.Input }],
            data: [{ type: core.Input }],
            select: [{ type: core.Output }],
            clear: [{ type: core.Output }]
        };
        return NoticeIconTabComponent;
    }());
    if (false) {
        /** @type {?} */
        NoticeIconTabComponent.prototype.locale;
        /** @type {?} */
        NoticeIconTabComponent.prototype.data;
        /** @type {?} */
        NoticeIconTabComponent.prototype.select;
        /** @type {?} */
        NoticeIconTabComponent.prototype.clear;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: notice-icon.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NoticeIconComponent = /** @class */ (function () {
        function NoticeIconComponent(i18n, cdr) {
            this.i18n = i18n;
            this.cdr = cdr;
            this.locale = {};
            this.data = [];
            this.loading = false;
            this.popoverVisible = false;
            this.btnClass = '';
            this.btnIconClass = '';
            this.select = new core.EventEmitter();
            this.clear = new core.EventEmitter();
            this.popoverVisibleChange = new core.EventEmitter();
        }
        /**
         * @param {?} result
         * @return {?}
         */
        NoticeIconComponent.prototype.onVisibleChange = /**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            this.popoverVisibleChange.emit(result);
        };
        /**
         * @param {?} i
         * @return {?}
         */
        NoticeIconComponent.prototype.onSelect = /**
         * @param {?} i
         * @return {?}
         */
        function (i) {
            this.select.emit(i);
        };
        /**
         * @param {?} title
         * @return {?}
         */
        NoticeIconComponent.prototype.onClear = /**
         * @param {?} title
         * @return {?}
         */
        function (title) {
            this.clear.emit(title);
        };
        /**
         * @return {?}
         */
        NoticeIconComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.i18n$ = this.i18n.change.subscribe((/**
             * @return {?}
             */
            function () {
                _this.locale = _this.i18n.getData('noticeIcon');
                _this.cdr.markForCheck();
            }));
        };
        /**
         * @return {?}
         */
        NoticeIconComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
        function () {
            this.cdr.markForCheck();
        };
        /**
         * @return {?}
         */
        NoticeIconComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.i18n$.unsubscribe();
        };
        NoticeIconComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'notice-icon',
                        exportAs: 'noticeIcon',
                        template: "<ng-template #badgeTpl>\n  <nz-badge [nzCount]=\"count\" [ngClass]=\"btnClass\" [nzStyle]=\"{ 'box-shadow': 'none' }\">\n    <i nz-icon nzType=\"bell\" [ngClass]=\"btnIconClass\"></i>\n  </nz-badge>\n</ng-template>\n<div *ngIf=\"data?.length === 0\">\n  <ng-template [ngTemplateOutlet]=\"badgeTpl\"></ng-template>\n</div>\n<div *ngIf=\"data?.length > 0\" nz-dropdown\n    [nzVisible]=\"popoverVisible\"\n    (nzVisibleChange)=\"onVisibleChange($event)\"\n    nzTrigger=\"click\"\n    nzPlacement=\"bottomRight\"\n    [nzOverlayClassName]=\"['header-dropdown', 'notice-icon']\"\n    [nzDropdownMenu]=\"noticeMenu\">\n  <ng-template [ngTemplateOutlet]=\"badgeTpl\"></ng-template>\n</div>\n<nz-dropdown-menu #noticeMenu=\"nzDropdownMenu\">\n  <nz-spin [nzSpinning]=\"loading\" [nzDelay]=\"0\">\n    <nz-tabset nzSelectedIndex=\"0\">\n      <nz-tab *ngFor=\"let i of data\" [nzTitle]=\"i.title\">\n        <notice-icon-tab [locale]=\"locale\" [data]=\"i\" (select)=\"onSelect($event)\" (clear)=\"onClear($event)\"></notice-icon-tab>\n      </nz-tab>\n    </nz-tabset>\n  </nz-spin>\n</nz-dropdown-menu>\n",
                        host: { '[class.notice-icon__btn]': 'true' },
                        preserveWhitespaces: false,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None
                    }] }
        ];
        /** @nocollapse */
        NoticeIconComponent.ctorParameters = function () { return [
            { type: theme.DelonLocaleService },
            { type: core.ChangeDetectorRef }
        ]; };
        NoticeIconComponent.propDecorators = {
            data: [{ type: core.Input }],
            count: [{ type: core.Input }],
            loading: [{ type: core.Input }],
            popoverVisible: [{ type: core.Input }],
            btnClass: [{ type: core.Input }],
            btnIconClass: [{ type: core.Input }],
            select: [{ type: core.Output }],
            clear: [{ type: core.Output }],
            popoverVisibleChange: [{ type: core.Output }]
        };
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Number)
        ], NoticeIconComponent.prototype, "count", void 0);
        __decorate([
            util.InputBoolean(),
            __metadata("design:type", Object)
        ], NoticeIconComponent.prototype, "loading", void 0);
        __decorate([
            util.InputBoolean(),
            __metadata("design:type", Object)
        ], NoticeIconComponent.prototype, "popoverVisible", void 0);
        return NoticeIconComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        NoticeIconComponent.prototype.i18n$;
        /** @type {?} */
        NoticeIconComponent.prototype.locale;
        /** @type {?} */
        NoticeIconComponent.prototype.data;
        /** @type {?} */
        NoticeIconComponent.prototype.count;
        /** @type {?} */
        NoticeIconComponent.prototype.loading;
        /** @type {?} */
        NoticeIconComponent.prototype.popoverVisible;
        /** @type {?} */
        NoticeIconComponent.prototype.btnClass;
        /** @type {?} */
        NoticeIconComponent.prototype.btnIconClass;
        /** @type {?} */
        NoticeIconComponent.prototype.select;
        /** @type {?} */
        NoticeIconComponent.prototype.clear;
        /** @type {?} */
        NoticeIconComponent.prototype.popoverVisibleChange;
        /**
         * @type {?}
         * @private
         */
        NoticeIconComponent.prototype.i18n;
        /**
         * @type {?}
         * @private
         */
        NoticeIconComponent.prototype.cdr;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: notice-icon.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var COMPONENTS = [NoticeIconComponent];
    var NoticeIconModule = /** @class */ (function () {
        function NoticeIconModule() {
        }
        NoticeIconModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            theme.DelonLocaleModule,
                            badge.NzBadgeModule,
                            dropdown.NzDropDownModule,
                            icon.NzIconModule,
                            list.NzListModule,
                            spin.NzSpinModule,
                            tabs.NzTabsModule,
                            tag.NzTagModule,
                        ],
                        declarations: __spread(COMPONENTS, [NoticeIconTabComponent]),
                        exports: __spread(COMPONENTS),
                    },] }
        ];
        return NoticeIconModule;
    }());

    exports.NoticeIconComponent = NoticeIconComponent;
    exports.NoticeIconModule = NoticeIconModule;
    exports.NoticeIconTabComponent = NoticeIconTabComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=noticeIcon.umd.js.map
