/**
 * @license ng-alain(cipchk@qq.com) v7.2.0
 * (c) 2019 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@delon/util'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@delon/abc/image', ['exports', '@angular/core', '@delon/util', '@angular/common'], factory) :
    (global = global || self, factory((global.delon = global.delon || {}, global.delon.abc = global.delon.abc || {}, global.delon.abc.image = {}), global.ng.core, global.delon.util, global.ng.common));
}(this, function (exports, core, util, common) { 'use strict';

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

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ImageConfig = /** @class */ (function () {
        function ImageConfig() {
            /**
             * 默认大小，默认值：`64`，单位：px
             */
            this.size = 64;
            /**
             * 错误图片
             */
            this.error = './assets/img/logo.svg';
        }
        ImageConfig.decorators = [
            { type: core.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */ ImageConfig.ngInjectableDef = core.defineInjectable({ factory: function ImageConfig_Factory() { return new ImageConfig(); }, token: ImageConfig, providedIn: "root" });
        return ImageConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * img标签
     * + 支持微信、qq头像规则缩略图规则
     * + 支持移除http&https协议http
     * + 支持增加onerror事件
     */
    var ImageDirective = /** @class */ (function () {
        function ImageDirective(cog, el, render) {
            this.el = el;
            this.render = render;
            this.size = 64;
            this.error = './assets/img/logo.svg';
            this.inited = false;
            Object.assign(this, __assign({}, new ImageConfig(), cog));
        }
        /**
         * @return {?}
         */
        ImageDirective.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.update();
            this.updateError();
            this.inited = true;
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        ImageDirective.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (!this.inited)
                return;
            if (changes.error) {
                this.updateError();
            }
            else {
                this.update();
            }
        };
        /**
         * @private
         * @return {?}
         */
        ImageDirective.prototype.update = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var newSrc = this.src;
            var _a = this, size = _a.size, render = _a.render, el = _a.el;
            if (newSrc.includes('qlogo.cn')) {
                /** @type {?} */
                var arr = newSrc.split('/');
                /** @type {?} */
                var imgSize = arr[arr.length - 1];
                arr[arr.length - 1] = imgSize === '0' || +imgSize !== size ? size.toString() : imgSize;
                newSrc = arr.join('/');
            }
            /** @type {?} */
            var isHttp = newSrc.startsWith('http:');
            /** @type {?} */
            var isHttps = newSrc.startsWith('https:');
            if (isHttp || isHttps) {
                newSrc = newSrc.substr(isHttp ? 5 : 6);
            }
            render.setAttribute(el.nativeElement, 'src', newSrc);
            ['height', 'width'].forEach((/**
             * @param {?} v
             * @return {?}
             */
            function (v) {
                return render.setAttribute(_this.el.nativeElement, v, size.toString());
            }));
        };
        /**
         * @private
         * @return {?}
         */
        ImageDirective.prototype.updateError = /**
         * @private
         * @return {?}
         */
        function () {
            this.render.setAttribute(this.el.nativeElement, 'onerror', "this.src='" + this.error + "'");
        };
        ImageDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[_src]',
                        exportAs: 'srcDirective',
                    },] }
        ];
        /** @nocollapse */
        ImageDirective.ctorParameters = function () { return [
            { type: ImageConfig },
            { type: core.ElementRef },
            { type: core.Renderer2 }
        ]; };
        ImageDirective.propDecorators = {
            src: [{ type: core.Input, args: ['_src',] }],
            size: [{ type: core.Input }],
            error: [{ type: core.Input }]
        };
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Object)
        ], ImageDirective.prototype, "size", void 0);
        return ImageDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var DIRECTIVES = [ImageDirective];
    var ImageModule = /** @class */ (function () {
        function ImageModule() {
        }
        ImageModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, util.DelonUtilModule],
                        declarations: __spread(DIRECTIVES),
                        exports: __spread(DIRECTIVES),
                    },] }
        ];
        return ImageModule;
    }());

    exports.ImageConfig = ImageConfig;
    exports.ImageDirective = ImageDirective;
    exports.ImageModule = ImageModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=image.umd.js.map
