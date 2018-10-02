/**
 * @license ng-alain(cipchk@qq.com) v2.0.0-beta.3-ed90aa6
 * (c) 2018 Cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@delon/theme'), require('@delon/util'), require('@angular/common'), require('ng-zorro-antd')) :
    typeof define === 'function' && define.amd ? define('@delon/abc/notice-icon', ['exports', '@angular/core', '@delon/theme', '@delon/util', '@angular/common', 'ng-zorro-antd'], factory) :
    (factory((global.delon = global.delon || {}, global.delon.abc = global.delon.abc || {}, global.delon.abc['notice-icon'] = {}),global.ng.core,global.delon.theme,global.delon.util,global.ng.common,global.ngZorro.antd));
}(this, (function (exports,core,theme,util,common,ngZorroAntd) { 'use strict';

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
                        template: "\n  <nz-badge *ngIf=\"data?.length === 0\" [nzCount]=\"count\">\n    <i class=\"anticon anticon-bell\"></i>\n  </nz-badge>\n  <nz-popover *ngIf=\"data?.length > 0\"\n    [nzVisible]=\"popoverVisible\" (nzVisibleChange)=\"onVisibleChange($event)\" nzTrigger=\"click\"\n    nzPlacement=\"bottomRight\"\n    nzOverlayClassName=\"notice-icon\">\n    <div nz-popover class=\"alain-default__nav-item notice-icon__item\">\n      <nz-badge [nzCount]=\"count\">\n        <i class=\"anticon anticon-bell\"></i>\n      </nz-badge>\n    </div>\n    <ng-template #nzTemplate>\n      <nz-spin [nzSpinning]=\"loading\" [nzDelay]=\"0\">\n        <nz-tabset>\n          <nz-tab *ngFor=\"let i of data\" [nzTitle]=\"i.title\">\n            <notice-icon-tab\n              [locale]=\"locale\"\n              [data]=\"i\"\n              (select)=\"onSelect($event)\"\n              (clear)=\"onClear($event)\"></notice-icon-tab>\n          </nz-tab>\n        </nz-tabset>\n      </nz-spin>\n    </ng-template>\n  </nz-popover>\n  ",
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWNlSWNvbi51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BkZWxvbi9hYmMvbm90aWNlLWljb24vbm90aWNlLWljb24tdGFiLmNvbXBvbmVudC50cyIsIm5vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJuZzovL0BkZWxvbi9hYmMvbm90aWNlLWljb24vbm90aWNlLWljb24uY29tcG9uZW50LnRzIiwibmc6Ly9AZGVsb24vYWJjL25vdGljZS1pY29uL25vdGljZS1pY29uLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOb3RpY2VJdGVtLCBOb3RpY2VJY29uU2VsZWN0IH0gZnJvbSAnLi9ub3RpY2UtaWNvbi50eXBlcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25vdGljZS1pY29uLXRhYicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8ZGl2ICpuZ0lmPVwiZGF0YS5saXN0Py5sZW5ndGggPT09IDA7IGVsc2UgbGlzdFRwbFwiIGNsYXNzPVwibm90aWNlLWljb25fX25vdGZvdW5kXCI+XHJcbiAgICA8aW1nIGNsYXNzPVwibm90aWNlLWljb25fX25vdGZvdW5kLWltZ1wiICpuZ0lmPVwiZGF0YS5lbXB0eUltYWdlXCIgc3JjPVwie3tkYXRhLmVtcHR5SW1hZ2V9fVwiIGFsdD1cIm5vdCBmb3VuZFwiIC8+XHJcbiAgICA8cD57e2RhdGEuZW1wdHlUZXh0IHx8IGxvY2FsZS5lbXB0eVRleHR9fTwvcD5cclxuICA8L2Rpdj5cclxuICA8bmctdGVtcGxhdGUgI2xpc3RUcGw+XHJcbiAgICA8bnotbGlzdCBbbnpEYXRhU291cmNlXT1cImRhdGEubGlzdFwiIFtuelJlbmRlckl0ZW1dPVwiaXRlbVwiPlxyXG4gICAgICA8bmctdGVtcGxhdGUgI2l0ZW0gbGV0LWl0ZW0+XHJcbiAgICAgICAgPG56LWxpc3QtaXRlbSAoY2xpY2spPVwib25DbGljayhpdGVtKVwiIFtuZ0NsYXNzXT1cInsnbm90aWNlLWljb25fX2l0ZW0tcmVhZCc6IGl0ZW0ucmVhZH1cIj5cclxuICAgICAgICAgIDxuei1saXN0LWl0ZW0tbWV0YVxyXG4gICAgICAgICAgICBbbnpUaXRsZV09XCJuelRpdGxlXCJcclxuICAgICAgICAgICAgW256RGVzY3JpcHRpb25dPVwibnpEZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgIFtuekF2YXRhcl09XCJpdGVtLmF2YXRhclwiPlxyXG4gICAgICAgICAgICA8bmctdGVtcGxhdGUgI256VGl0bGU+XHJcbiAgICAgICAgICAgICAge3tpdGVtLnRpdGxlfX1cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm90aWNlLWljb25fX2l0ZW0tZXh0cmFcIiAqbmdJZj1cIml0ZW0uZXh0cmFcIj48bnotdGFnIFtuekNvbG9yXT1cIml0ZW0uY29sb3JcIj57e2l0ZW0uZXh0cmF9fTwvbnotdGFnPjwvZGl2PlxyXG4gICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgICA8bmctdGVtcGxhdGUgI256RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cIml0ZW0uZGVzY3JpcHRpb25cIiBjbGFzcz1cIm5vdGljZS1pY29uX19pdGVtLWRlc2NcIj57e2l0ZW0uZGVzY3JpcHRpb259fTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJpdGVtLmRhdGV0aW1lXCIgY2xhc3M9XCJub3RpY2UtaWNvbl9faXRlbS10aW1lXCI+e3tpdGVtLmRhdGV0aW1lfX08L2Rpdj5cclxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgIDwvbnotbGlzdC1pdGVtLW1ldGE+XHJcbiAgICAgICAgPC9uei1saXN0LWl0ZW0+XHJcbiAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICA8L256LWxpc3Q+XHJcbiAgICA8ZGl2IGNsYXNzPVwibm90aWNlLWljb25fX2NsZWFyXCIgKGNsaWNrKT1cIm9uQ2xlYXIoKVwiPnt7IGRhdGEuY2xlYXJUZXh0IHx8IGxvY2FsZS5jbGVhclRleHQgfX08L2Rpdj5cclxuICA8L25nLXRlbXBsYXRlPlxyXG4gIGAsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOb3RpY2VJY29uVGFiQ29tcG9uZW50IHtcclxuICBASW5wdXQoKVxyXG4gIGxvY2FsZTogYW55ID0ge307XHJcbiAgQElucHV0KClcclxuICBkYXRhOiBOb3RpY2VJdGVtO1xyXG4gIEBPdXRwdXQoKVxyXG4gIHNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8Tm90aWNlSWNvblNlbGVjdD4oKTtcclxuICBAT3V0cHV0KClcclxuICBjbGVhciA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG5cclxuICBvbkNsaWNrKGl0ZW06IE5vdGljZUl0ZW0pIHtcclxuICAgIHRoaXMuc2VsZWN0LmVtaXQoPE5vdGljZUljb25TZWxlY3Q+e1xyXG4gICAgICB0aXRsZTogdGhpcy5kYXRhLnRpdGxlLFxyXG4gICAgICBpdGVtLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvbkNsZWFyKCkge1xyXG4gICAgdGhpcy5jbGVhci5lbWl0KHRoaXMuZGF0YS50aXRsZSk7XHJcbiAgfVxyXG59XHJcbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBPbkRlc3Ryb3ksXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBEZWxvbkxvY2FsZVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xyXG5pbXBvcnQgeyBJbnB1dE51bWJlciwgSW5wdXRCb29sZWFuIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xyXG5cclxuaW1wb3J0IHsgTm90aWNlSXRlbSwgTm90aWNlSWNvblNlbGVjdCB9IGZyb20gJy4vbm90aWNlLWljb24udHlwZXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdub3RpY2UtaWNvbicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8bnotYmFkZ2UgKm5nSWY9XCJkYXRhPy5sZW5ndGggPT09IDBcIiBbbnpDb3VudF09XCJjb3VudFwiPlxyXG4gICAgPGkgY2xhc3M9XCJhbnRpY29uIGFudGljb24tYmVsbFwiPjwvaT5cclxuICA8L256LWJhZGdlPlxyXG4gIDxuei1wb3BvdmVyICpuZ0lmPVwiZGF0YT8ubGVuZ3RoID4gMFwiXHJcbiAgICBbbnpWaXNpYmxlXT1cInBvcG92ZXJWaXNpYmxlXCIgKG56VmlzaWJsZUNoYW5nZSk9XCJvblZpc2libGVDaGFuZ2UoJGV2ZW50KVwiIG56VHJpZ2dlcj1cImNsaWNrXCJcclxuICAgIG56UGxhY2VtZW50PVwiYm90dG9tUmlnaHRcIlxyXG4gICAgbnpPdmVybGF5Q2xhc3NOYW1lPVwibm90aWNlLWljb25cIj5cclxuICAgIDxkaXYgbnotcG9wb3ZlciBjbGFzcz1cImFsYWluLWRlZmF1bHRfX25hdi1pdGVtIG5vdGljZS1pY29uX19pdGVtXCI+XHJcbiAgICAgIDxuei1iYWRnZSBbbnpDb3VudF09XCJjb3VudFwiPlxyXG4gICAgICAgIDxpIGNsYXNzPVwiYW50aWNvbiBhbnRpY29uLWJlbGxcIj48L2k+XHJcbiAgICAgIDwvbnotYmFkZ2U+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxuZy10ZW1wbGF0ZSAjbnpUZW1wbGF0ZT5cclxuICAgICAgPG56LXNwaW4gW256U3Bpbm5pbmddPVwibG9hZGluZ1wiIFtuekRlbGF5XT1cIjBcIj5cclxuICAgICAgICA8bnotdGFic2V0PlxyXG4gICAgICAgICAgPG56LXRhYiAqbmdGb3I9XCJsZXQgaSBvZiBkYXRhXCIgW256VGl0bGVdPVwiaS50aXRsZVwiPlxyXG4gICAgICAgICAgICA8bm90aWNlLWljb24tdGFiXHJcbiAgICAgICAgICAgICAgW2xvY2FsZV09XCJsb2NhbGVcIlxyXG4gICAgICAgICAgICAgIFtkYXRhXT1cImlcIlxyXG4gICAgICAgICAgICAgIChzZWxlY3QpPVwib25TZWxlY3QoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgKGNsZWFyKT1cIm9uQ2xlYXIoJGV2ZW50KVwiPjwvbm90aWNlLWljb24tdGFiPlxyXG4gICAgICAgICAgPC9uei10YWI+XHJcbiAgICAgICAgPC9uei10YWJzZXQ+XHJcbiAgICAgIDwvbnotc3Bpbj5cclxuICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgPC9uei1wb3BvdmVyPlxyXG4gIGAsXHJcbiAgaG9zdDogeyAnW2NsYXNzLm5vdGljZS1pY29uX19idG5dJzogJ3RydWUnIH0sXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOb3RpY2VJY29uQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuICBwcml2YXRlIGkxOG4kOiBTdWJzY3JpcHRpb247XHJcbiAgbG9jYWxlOiBhbnkgPSB7fTtcclxuXHJcbiAgQElucHV0KClcclxuICBkYXRhOiBOb3RpY2VJdGVtW10gPSBbXTtcclxuXHJcbiAgLyoqIMOlwpvCvsOmwqDCh8OkwrjCisOnwprChMOmwrbCiMOmwoHCr8OmwoDCu8OmwpXCsCAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgQElucHV0TnVtYmVyKClcclxuICBjb3VudDogbnVtYmVyO1xyXG5cclxuICAvKiogw6XCvMK5w6XCh8K6w6XCjcKhw6fCicKHw6XCisKgw6jCvcK9w6fCisK2w6bCgMKBICovXHJcbiAgQElucHV0KClcclxuICBASW5wdXRCb29sZWFuKClcclxuICBsb2FkaW5nID0gZmFsc2U7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8Tm90aWNlSWNvblNlbGVjdD4oKTtcclxuICBAT3V0cHV0KClcclxuICBjbGVhciA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG5cclxuICAvKiogw6bCicKLw6XCisKow6bCjsKnw6XCiMK2UG9wb3ZlcsOmwpjCvsOnwqTCuiAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgQElucHV0Qm9vbGVhbigpXHJcbiAgcG9wb3ZlclZpc2libGUgPSBmYWxzZTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcG9wb3ZlclZpc2libGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaTE4bjogRGVsb25Mb2NhbGVTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLmkxOG4kID0gdGhpcy5pMThuLmNoYW5nZS5zdWJzY3JpYmUoXHJcbiAgICAgICgpID0+ICh0aGlzLmxvY2FsZSA9IHRoaXMuaTE4bi5nZXREYXRhKCdub3RpY2VJY29uJykpLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIG9uVmlzaWJsZUNoYW5nZShyZXN1bHQ6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMucG9wb3ZlclZpc2libGVDaGFuZ2UuZW1pdChyZXN1bHQpO1xyXG4gIH1cclxuXHJcbiAgb25TZWxlY3QoaTogYW55KSB7XHJcbiAgICB0aGlzLnNlbGVjdC5lbWl0KGkpO1xyXG4gIH1cclxuXHJcbiAgb25DbGVhcih0aXRsZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmNsZWFyLmVtaXQodGl0bGUpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmkxOG4kLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nWm9ycm9BbnRkTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XHJcbmltcG9ydCB7IERlbG9uTG9jYWxlTW9kdWxlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcclxuXHJcbmltcG9ydCB7IE5vdGljZUljb25Db21wb25lbnQgfSBmcm9tICcuL25vdGljZS1pY29uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5vdGljZUljb25UYWJDb21wb25lbnQgfSBmcm9tICcuL25vdGljZS1pY29uLXRhYi5jb21wb25lbnQnO1xyXG5cclxuY29uc3QgQ09NUE9ORU5UUyA9IFtOb3RpY2VJY29uQ29tcG9uZW50XTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRGVsb25Mb2NhbGVNb2R1bGUsIE5nWm9ycm9BbnRkTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFsuLi5DT01QT05FTlRTLCBOb3RpY2VJY29uVGFiQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbLi4uQ09NUE9ORU5UU10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOb3RpY2VJY29uTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7IG5nTW9kdWxlOiBOb3RpY2VJY29uTW9kdWxlLCBwcm92aWRlcnM6IFtdIH07XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJFdmVudEVtaXR0ZXIiLCJDb21wb25lbnQiLCJJbnB1dCIsIk91dHB1dCIsIkRlbG9uTG9jYWxlU2VydmljZSIsIklucHV0TnVtYmVyIiwiSW5wdXRCb29sZWFuIiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJEZWxvbkxvY2FsZU1vZHVsZSIsIk5nWm9ycm9BbnRkTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7OzBCQXFDZ0IsRUFBRTswQkFJUCxJQUFJQSxpQkFBWSxFQUFvQjt5QkFFckMsSUFBSUEsaUJBQVksRUFBVTs7Ozs7O1FBRWxDLHdDQUFPOzs7O1lBQVAsVUFBUSxJQUFnQjtnQkFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLG1CQUFtQjtvQkFDakMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSztvQkFDdEIsSUFBSSxNQUFBO2lCQUNMLEVBQUMsQ0FBQzthQUNKOzs7O1FBRUQsd0NBQU87OztZQUFQO2dCQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDbEM7O29CQW5ERkMsY0FBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxpQkFBaUI7d0JBQzNCLFFBQVEsRUFBRSxpM0NBMkJUO3dCQUNELG1CQUFtQixFQUFFLEtBQUs7cUJBQzNCOzs7NkJBRUVDLFVBQUs7MkJBRUxBLFVBQUs7NkJBRUxDLFdBQU07NEJBRU5BLFdBQU07O3FDQTFDVDs7O0lDQUE7Ozs7Ozs7Ozs7Ozs7O0FBY0Esd0JBb0MyQixVQUFVLEVBQUUsTUFBTSxFQUFFLEdBQUcs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