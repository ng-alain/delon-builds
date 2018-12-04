/**
 * @license ng-alain(cipchk@qq.com) v2.0.1
 * (c) 2018 Cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('ng-zorro-antd')) :
    typeof define === 'function' && define.amd ? define('@delon/abc/avatar-list', ['exports', '@angular/core', '@angular/common', 'ng-zorro-antd'], factory) :
    (factory((global.delon = global.delon || {}, global.delon.abc = global.delon.abc || {}, global.delon.abc['avatar-list'] = {}),global.ng.core,global.ng.common,global.ngZorro.antd));
}(this, (function (exports,core,common,ngZorroAntd) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var AvatarListItemComponent = /** @class */ (function () {
        function AvatarListItemComponent() {
        }
        AvatarListItemComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'avatar-list-item, [avatar-list-item]',
                        template: "<ng-content></ng-content>"
                    }] }
        ];
        AvatarListItemComponent.propDecorators = {
            src: [{ type: core.Input }],
            text: [{ type: core.Input }],
            icon: [{ type: core.Input }],
            tips: [{ type: core.Input }]
        };
        return AvatarListItemComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var AvatarListComponent = /** @class */ (function () {
        function AvatarListComponent() {
            this._size = '';
            this._avatarSize = '';
        }
        Object.defineProperty(AvatarListComponent.prototype, "size", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._size = value === 'default' ? '' : value;
                switch (value) {
                    case 'large':
                    case 'small':
                    case 'default':
                        this._avatarSize = value;
                        break;
                    default:
                        this._avatarSize = 'small';
                        break;
                }
            },
            enumerable: true,
            configurable: true
        });
        AvatarListComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'avatar-list',
                        template: "\n  <ul class=\"avatar-list__wrap\">\n    <li *ngFor=\"let i of _items\" class=\"avatar-list__item{{_size ? ' avatar-list__item-' + _size : ''}}\">\n      <nz-tooltip *ngIf=\"i.tips\" [nzTitle]=\"i.tips\">\n        <nz-avatar nz-tooltip [nzSrc]=\"i.src\" [nzText]=\"i.text\" [nzIcon]=\"i.icon\" [nzSize]=\"_avatarSize\"></nz-avatar>\n      </nz-tooltip>\n      <nz-avatar *ngIf=\"!i.tips\" [nzSrc]=\"i.src\" [nzText]=\"i.text\" [nzIcon]=\"i.icon\" [nzSize]=\"_avatarSize\"></nz-avatar>\n    </li>\n  </ul>\n  ",
                        host: { '[class.avatar-list]': 'true' },
                        preserveWhitespaces: false
                    }] }
        ];
        AvatarListComponent.propDecorators = {
            size: [{ type: core.Input }],
            _items: [{ type: core.ContentChildren, args: [AvatarListItemComponent,] }]
        };
        return AvatarListComponent;
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
    /** @type {?} */
    var COMPONENTS = [AvatarListComponent, AvatarListItemComponent];
    var AvatarListModule = /** @class */ (function () {
        function AvatarListModule() {
        }
        /**
         * @return {?}
         */
        AvatarListModule.forRoot = /**
         * @return {?}
         */
            function () {
                return { ngModule: AvatarListModule, providers: [] };
            };
        AvatarListModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, ngZorroAntd.NgZorroAntdModule],
                        declarations: __spread(COMPONENTS),
                        exports: __spread(COMPONENTS),
                    },] }
        ];
        return AvatarListModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.AvatarListItemComponent = AvatarListItemComponent;
    exports.AvatarListComponent = AvatarListComponent;
    exports.AvatarListModule = AvatarListModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=avatarList.umd.js.map