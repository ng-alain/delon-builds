/**
 * @license ng-alain(cipchk@qq.com) v2.0.1
 * (c) 2018 Cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@delon/util'), require('@angular/core'), require('@angular/common'), require('ng-zorro-antd'), require('@delon/theme')) :
    typeof define === 'function' && define.amd ? define('@delon/abc/notice-icon', ['exports', '@delon/util', '@angular/core', '@angular/common', 'ng-zorro-antd', '@delon/theme'], factory) :
    (factory((global.delon = global.delon || {}, global.delon.abc = global.delon.abc || {}, global.delon.abc['notice-icon'] = {}),global.delon.util,global.ng.core,global.ng.common,global.ngZorro.antd,global.delon.theme));
}(this, (function (exports,util,core,common,ngZorroAntd,theme) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
                this.select.emit(/** @type {?} */ ({
                    title: this.data.title,
                    item: item,
                }));
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
                        template: "\n  <div *ngIf=\"data.list?.length === 0; else listTpl\" class=\"notice-icon__notfound\">\n    <img class=\"notice-icon__notfound-img\" *ngIf=\"data.emptyImage\" src=\"{{data.emptyImage}}\" alt=\"not found\" />\n    <p>{{data.emptyText || locale.emptyText}}</p>\n  </div>\n  <ng-template #listTpl>\n    <nz-list [nzDataSource]=\"data.list\" [nzRenderItem]=\"item\">\n      <ng-template #item let-item>\n        <nz-list-item (click)=\"onClick(item)\" [ngClass]=\"{'notice-icon__item-read': item.read}\">\n          <nz-list-item-meta\n            [nzTitle]=\"nzTitle\"\n            [nzDescription]=\"nzDescription\"\n            [nzAvatar]=\"item.avatar\">\n            <ng-template #nzTitle>\n              {{item.title}}\n              <div class=\"notice-icon__item-extra\" *ngIf=\"item.extra\"><nz-tag [nzColor]=\"item.color\">{{item.extra}}</nz-tag></div>\n            </ng-template>\n            <ng-template #nzDescription>\n              <div *ngIf=\"item.description\" class=\"notice-icon__item-desc\">{{item.description}}</div>\n              <div *ngIf=\"item.datetime\" class=\"notice-icon__item-time\">{{item.datetime}}</div>\n            </ng-template>\n          </nz-list-item-meta>\n        </nz-list-item>\n      </ng-template>\n    </nz-list>\n    <div class=\"notice-icon__clear\" (click)=\"onClear()\">{{ data.clearText || locale.clearText }}</div>\n  </ng-template>\n  ",
                        preserveWhitespaces: false
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
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NoticeIconComponent = /** @class */ (function () {
        function NoticeIconComponent(i18n) {
            var _this = this;
            this.i18n = i18n;
            this.locale = {};
            this.data = [];
            /**
             * 弹出卡片加载状态
             */
            this.loading = false;
            this.select = new core.EventEmitter();
            this.clear = new core.EventEmitter();
            /**
             * 手动控制Popover显示
             */
            this.popoverVisible = false;
            this.popoverVisibleChange = new core.EventEmitter();
            this.i18n$ = this.i18n.change.subscribe(function () { return (_this.locale = _this.i18n.getData('noticeIcon')); });
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
        NoticeIconComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.i18n$.unsubscribe();
            };
        NoticeIconComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'notice-icon',
                        template: "\n  <nz-badge *ngIf=\"data?.length === 0\" [nzCount]=\"count\">\n    <i nz-icon type=\"bell\"></i>\n  </nz-badge>\n  <nz-popover *ngIf=\"data?.length > 0\"\n    [nzVisible]=\"popoverVisible\" (nzVisibleChange)=\"onVisibleChange($event)\" nzTrigger=\"click\"\n    nzPlacement=\"bottomRight\"\n    nzOverlayClassName=\"notice-icon\">\n    <div nz-popover class=\"alain-default__nav-item notice-icon__item\">\n      <nz-badge [nzCount]=\"count\">\n        <i nz-icon type=\"bell\" class=\"alain-default__nav-item-icon\"></i>\n      </nz-badge>\n    </div>\n    <ng-template #nzTemplate>\n      <nz-spin [nzSpinning]=\"loading\" [nzDelay]=\"0\">\n        <nz-tabset>\n          <nz-tab *ngFor=\"let i of data\" [nzTitle]=\"i.title\">\n            <notice-icon-tab\n              [locale]=\"locale\"\n              [data]=\"i\"\n              (select)=\"onSelect($event)\"\n              (clear)=\"onClear($event)\"></notice-icon-tab>\n          </nz-tab>\n        </nz-tabset>\n      </nz-spin>\n    </ng-template>\n  </nz-popover>\n  ",
                        host: { '[class.notice-icon__btn]': 'true' },
                        preserveWhitespaces: false
                    }] }
        ];
        /** @nocollapse */
        NoticeIconComponent.ctorParameters = function () {
            return [
                { type: theme.DelonLocaleService }
            ];
        };
        NoticeIconComponent.propDecorators = {
            data: [{ type: core.Input }],
            count: [{ type: core.Input }],
            loading: [{ type: core.Input }],
            select: [{ type: core.Output }],
            clear: [{ type: core.Output }],
            popoverVisible: [{ type: core.Input }],
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var COMPONENTS = [NoticeIconComponent];
    var NoticeIconModule = /** @class */ (function () {
        function NoticeIconModule() {
        }
        /**
         * @return {?}
         */
        NoticeIconModule.forRoot = /**
         * @return {?}
         */
            function () {
                return { ngModule: NoticeIconModule, providers: [] };
            };
        NoticeIconModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, theme.DelonLocaleModule, ngZorroAntd.NgZorroAntdModule],
                        declarations: __spread(COMPONENTS, [NoticeIconTabComponent]),
                        exports: __spread(COMPONENTS),
                    },] }
        ];
        return NoticeIconModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.NoticeIconTabComponent = NoticeIconTabComponent;
    exports.NoticeIconComponent = NoticeIconComponent;
    exports.NoticeIconModule = NoticeIconModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=noticeIcon.umd.js.map