/**
 * @license ng-alain(cipchk@qq.com) v2.0.1
 * (c) 2018 Cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('ng-zorro-antd'), require('@delon/theme'), require('@delon/util')) :
    typeof define === 'function' && define.amd ? define('@delon/abc/tag-select', ['exports', '@angular/core', '@angular/common', 'ng-zorro-antd', '@delon/theme', '@delon/util'], factory) :
    (factory((global.delon = global.delon || {}, global.delon.abc = global.delon.abc || {}, global.delon.abc['tag-select'] = {}),global.ng.core,global.ng.common,global.ngZorroAntd,global.delon.theme,global.delon.util));
}(this, (function (exports,core,common,ngZorroAntd,theme,util) { 'use strict';

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
    var TagSelectComponent = /** @class */ (function () {
        function TagSelectComponent(i18n) {
            var _this = this;
            this.i18n = i18n;
            this.locale = {};
            /**
             * 是否启用 `展开与收进`
             */
            this.expandable = true;
            this.expand = false;
            this.change = new core.EventEmitter();
            this.i18n$ = this.i18n.change.subscribe(function () { return (_this.locale = _this.i18n.getData('tagSelect')); });
        }
        /**
         * @return {?}
         */
        TagSelectComponent.prototype.trigger = /**
         * @return {?}
         */
            function () {
                this.expand = !this.expand;
                this.change.emit(this.expand);
            };
        /**
         * @return {?}
         */
        TagSelectComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.i18n$.unsubscribe();
            };
        TagSelectComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'tag-select',
                        template: "\n  <ng-content></ng-content>\n  <a *ngIf=\"expandable\" class=\"tag-select__trigger\" (click)=\"trigger()\">\n    {{expand ? locale.collapse : locale.expand}}<i nz-icon [type]=\"expand ? 'up' : 'down'\" class=\"tag-select__trigger-icon\"></i>\n  </a>",
                        host: { '[class.tag-select]': 'true' },
                        preserveWhitespaces: false
                    }] }
        ];
        /** @nocollapse */
        TagSelectComponent.ctorParameters = function () {
            return [
                { type: theme.DelonLocaleService }
            ];
        };
        TagSelectComponent.propDecorators = {
            expandable: [{ type: core.Input }, { type: core.HostBinding, args: ['class.tag-select__has-expand',] }],
            expand: [{ type: core.HostBinding, args: ['class.tag-select__expanded',] }],
            change: [{ type: core.Output }]
        };
        __decorate([
            util.InputBoolean(),
            __metadata("design:type", Object)
        ], TagSelectComponent.prototype, "expandable", void 0);
        return TagSelectComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var COMPONENTS = [TagSelectComponent];
    var TagSelectModule = /** @class */ (function () {
        function TagSelectModule() {
        }
        /**
         * @return {?}
         */
        TagSelectModule.forRoot = /**
         * @return {?}
         */
            function () {
                return { ngModule: TagSelectModule, providers: [] };
            };
        TagSelectModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, ngZorroAntd.NgZorroAntdModule, theme.DelonLocaleModule, util.DelonUtilModule],
                        declarations: __spread(COMPONENTS),
                        exports: __spread(COMPONENTS),
                    },] }
        ];
        return TagSelectModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.TagSelectComponent = TagSelectComponent;
    exports.TagSelectModule = TagSelectModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=tagSelect.umd.js.map