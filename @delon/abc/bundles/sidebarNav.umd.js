/**
 * @license ng-alain(cipchk@qq.com) v2.0.1
 * (c) 2018 Cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs/operators'), require('@delon/theme'), require('@angular/common'), require('@angular/core'), require('@angular/router'), require('@delon/util'), require('ng-zorro-antd')) :
    typeof define === 'function' && define.amd ? define('@delon/abc/sidebar-nav', ['exports', 'rxjs/operators', '@delon/theme', '@angular/common', '@angular/core', '@angular/router', '@delon/util', 'ng-zorro-antd'], factory) :
    (factory((global.delon = global.delon || {}, global.delon.abc = global.delon.abc || {}, global.delon.abc['sidebar-nav'] = {}),global.rxjs.operators,global.delon.theme,global.ng.common,global.ng.core,global.ng.router,global.delon.util,global.ngZorro.antd));
}(this, (function (exports,operators,theme,common,core,router,util,ngZorroAntd) { 'use strict';

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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var SHOWCLS = 'sidebar-nav__floating-show';
    /** @type {?} */
    var FLOATINGCLS = 'sidebar-nav__floating';
    var SidebarNavComponent = /** @class */ (function () {
        function SidebarNavComponent(menuSrv, settings, router$$1, locationStrategy, render, cdr, doc) {
            this.menuSrv = menuSrv;
            this.settings = settings;
            this.router = router$$1;
            this.locationStrategy = locationStrategy;
            this.render = render;
            this.cdr = cdr;
            this.doc = doc;
            this.list = [];
            this.autoCloseUnderPad = true;
            this.select = new core.EventEmitter();
        }
        Object.defineProperty(SidebarNavComponent.prototype, "collapsed", {
            get: /**
             * @return {?}
             */ function () {
                return this.settings.layout.collapsed;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        SidebarNavComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.bodyEl = this.doc.querySelector('body');
                this.menuSrv.openedByUrl(this.router.url);
                this.genFloatingContainer();
                this.change$ = this.menuSrv.change.subscribe(function (res) {
                    _this.list = res;
                    _this.cdr.detectChanges();
                });
                this.installUnderPad();
            };
        /**
         * @param {?} e
         * @return {?}
         */
        SidebarNavComponent.prototype.floatingAreaClickHandle = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
                e.stopPropagation();
                /** @type {?} */
                var linkNode = ( /** @type {?} */(e.target));
                if (linkNode.nodeName !== 'A') {
                    return false;
                }
                /** @type {?} */
                var url = linkNode.getAttribute('href');
                if (url && url.startsWith('#')) {
                    url = url.slice(1);
                }
                if (( /** @type {?} */(linkNode.dataset)).type === 'external') {
                    return true;
                }
                // 如果配置了bashHref 则去掉baseHref
                /** @type {?} */
                var baseHerf = this.locationStrategy.getBaseHref();
                if (baseHerf) {
                    url = url.slice(baseHerf.length);
                }
                this.router.navigateByUrl(url);
                this.onSelect(this.menuSrv.getPathByUrl(url).pop());
                this.hideAll();
                e.preventDefault();
                return false;
            };
        /**
         * @return {?}
         */
        SidebarNavComponent.prototype.clearFloatingContainer = /**
         * @return {?}
         */
            function () {
                if (!this.floatingEl)
                    return;
                this.floatingEl.removeEventListener('click', this.floatingAreaClickHandle.bind(this));
                // fix ie: https://github.com/ng-alain/delon/issues/52
                if (this.floatingEl.hasOwnProperty('remove')) {
                    this.floatingEl.remove();
                }
                else if (this.floatingEl.parentNode) {
                    this.floatingEl.parentNode.removeChild(this.floatingEl);
                }
            };
        /**
         * @return {?}
         */
        SidebarNavComponent.prototype.genFloatingContainer = /**
         * @return {?}
         */
            function () {
                this.clearFloatingContainer();
                this.floatingEl = this.render.createElement('div');
                this.floatingEl.classList.add(FLOATINGCLS + '-container');
                this.floatingEl.addEventListener('click', this.floatingAreaClickHandle.bind(this), false);
                this.bodyEl.appendChild(this.floatingEl);
            };
        /**
         * @param {?} linkNode
         * @param {?} item
         * @return {?}
         */
        SidebarNavComponent.prototype.genSubNode = /**
         * @param {?} linkNode
         * @param {?} item
         * @return {?}
         */
            function (linkNode, item) {
                /** @type {?} */
                var id = "_sidebar-nav-" + item.__id;
                /** @type {?} */
                var node = ( /** @type {?} */(linkNode.nextElementSibling.cloneNode(true)));
                node.id = id;
                node.classList.add(FLOATINGCLS);
                node.addEventListener('mouseleave', function () {
                    node.classList.remove(SHOWCLS);
                }, false);
                this.floatingEl.appendChild(node);
                return node;
            };
        /**
         * @return {?}
         */
        SidebarNavComponent.prototype.hideAll = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var allNode = this.floatingEl.querySelectorAll('.' + FLOATINGCLS);
                // tslint:disable-next-line:prefer-for-of
                for (var i = 0; i < allNode.length; i++) {
                    allNode[i].classList.remove(SHOWCLS);
                }
            };
        // calculate the node position values.
        // calculate the node position values.
        /**
         * @param {?} linkNode
         * @param {?} node
         * @return {?}
         */
        SidebarNavComponent.prototype.calPos =
            // calculate the node position values.
            /**
             * @param {?} linkNode
             * @param {?} node
             * @return {?}
             */
            function (linkNode, node) {
                /** @type {?} */
                var rect = linkNode.getBoundingClientRect();
                // bug: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/14721015/
                /** @type {?} */
                var scrollTop = Math.max(this.doc.documentElement.scrollTop, this.bodyEl.scrollTop);
                /** @type {?} */
                var docHeight = Math.max(this.doc.documentElement.clientHeight, this.bodyEl.clientHeight);
                /** @type {?} */
                var offsetHeight = 0;
                if (docHeight < rect.top + node.clientHeight) {
                    offsetHeight = rect.top + node.clientHeight - docHeight;
                }
                node.style.top = rect.top + scrollTop - offsetHeight + "px";
                node.style.left = rect.right + 5 + "px";
            };
        /**
         * @param {?} e
         * @param {?} item
         * @return {?}
         */
        SidebarNavComponent.prototype.showSubMenu = /**
         * @param {?} e
         * @param {?} item
         * @return {?}
         */
            function (e, item) {
                if (this.collapsed !== true) {
                    return;
                }
                e.preventDefault();
                /** @type {?} */
                var linkNode = ( /** @type {?} */(e.target));
                this.genFloatingContainer();
                /** @type {?} */
                var subNode = this.genSubNode(( /** @type {?} */(linkNode)), item);
                this.hideAll();
                subNode.classList.add(SHOWCLS);
                this.calPos(( /** @type {?} */(linkNode)), subNode);
            };
        /**
         * @param {?} item
         * @return {?}
         */
        SidebarNavComponent.prototype.onSelect = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                this.select.emit(item);
            };
        /**
         * @param {?} item
         * @return {?}
         */
        SidebarNavComponent.prototype.toggleOpen = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                this.menuSrv.visit(function (i, p) {
                    if (i !== item)
                        i._open = false;
                });
                /** @type {?} */
                var pItem = item.__parent;
                while (pItem) {
                    pItem._open = true;
                    pItem = pItem.__parent;
                }
                item._open = !item._open;
                this.cdr.markForCheck();
            };
        /**
         * @return {?}
         */
        SidebarNavComponent.prototype._click = /**
         * @return {?}
         */
            function () {
                if (this.isPad && this.collapsed) {
                    this.openAside(false);
                    this.hideAll();
                }
            };
        /**
         * @return {?}
         */
        SidebarNavComponent.prototype._docClick = /**
         * @return {?}
         */
            function () {
                this.hideAll();
            };
        /**
         * @return {?}
         */
        SidebarNavComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.change$.unsubscribe();
                if (this.route$)
                    this.route$.unsubscribe();
                this.clearFloatingContainer();
            };
        Object.defineProperty(SidebarNavComponent.prototype, "isPad", {
            // #region Under pad
            get: 
            // #region Under pad
            /**
             * @return {?}
             */
            function () {
                return window.innerWidth < 768;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        SidebarNavComponent.prototype.installUnderPad = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (!this.autoCloseUnderPad)
                    return;
                this.route$ = this.router.events
                    .pipe(operators.filter(function (e) { return e instanceof router.NavigationEnd; }))
                    .subscribe(function (s) { return _this.underPad(); });
                this.underPad();
            };
        /**
         * @return {?}
         */
        SidebarNavComponent.prototype.underPad = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.isPad && !this.collapsed) {
                    setTimeout(function () { return _this.openAside(true); });
                }
            };
        /**
         * @param {?} status
         * @return {?}
         */
        SidebarNavComponent.prototype.openAside = /**
         * @param {?} status
         * @return {?}
         */
            function (status) {
                this.settings.setLayout('collapsed', status);
            };
        SidebarNavComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'sidebar-nav',
                        template: "<ng-template #icon let-i>\n  <ng-container *ngIf=\"i\" [ngSwitch]=\"i.type\">\n    <i *ngSwitchCase=\"'icon'\" class=\"sidebar-nav__item-icon\" nz-icon [type]=\"i.value\" [theme]=\"i.theme\" [spin]=\"i.spin\" [twoToneColor]=\"i.twoToneColor\" [iconfont]=\"i.iconfont\"></i>\n    <img *ngSwitchCase=\"'img'\" src=\"{{ i.value }}\" class=\"sidebar-nav__item-icon sidebar-nav__item-img\">\n    <i *ngSwitchDefault class=\"sidebar-nav__item-icon {{ i.value }}\"></i>\n  </ng-container>\n</ng-template>\n<ul class=\"sidebar-nav\">\n  <ng-container *ngFor=\"let group of list\">\n    <ng-container *ngIf=\"group._hidden !== true\">\n      <li class=\"sidebar-nav__item sidebar-nav__group-title\" *ngIf=\"group.group\">\n        <span>{{ group.text }}</span>\n      </li>\n      <ng-container *ngFor=\"let child1 of group.children\">\n        <li *ngIf=\"child1._hidden !== true\" routerLinkActive=\"sidebar-nav__selected\" [routerLinkActiveOptions]=\"{exact: child1.linkExact}\"\n          class=\"sidebar-nav__item\" [class.sidebar-nav__open]=\"child1._open\">\n          <!-- link -->\n          <a *ngIf=\"child1._type === 1\" (click)=\"onSelect(child1)\" [routerLink]=\"child1.link\" [target]=\"child1.target\"\n            class=\"sidebar-nav__item-link\">\n            <ng-container *ngIf=\"!collapsed\">\n              <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{$implicit: child1.icon}\"></ng-template>\n            </ng-container>\n            <nz-tooltip *ngIf=\"collapsed\" nzPlacement=\"right\" [nzTitle]=\"child1.text\">\n              <span nz-tooltip>\n                <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{$implicit: child1.icon}\"></ng-template>\n              </span>\n            </nz-tooltip>\n            <span class=\"sidebar-nav__item-text\">{{ child1.text }}</span>\n          </a>\n          <!-- external link -->\n          <a *ngIf=\"child1._type === 2\" href=\"{{ child1.externalLink }}\" target=\"{{child1.target}}\" data-type=\"external\"\n            class=\"sidebar-nav__item-link\">\n            <ng-container *ngIf=\"!collapsed\">\n              <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{$implicit: child1.icon}\"></ng-template>\n            </ng-container>\n            <nz-tooltip *ngIf=\"collapsed\" nzPlacement=\"right\" [nzTitle]=\"child1.text\">\n              <span nz-tooltip>\n                <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{$implicit: child1.icon}\"></ng-template>\n              </span>\n            </nz-tooltip>\n            <span class=\"sidebar-nav__item-text\">{{ child1.text }}</span>\n          </a>\n          <!-- has children link -->\n          <a *ngIf=\"child1._type === 3\" (click)=\"toggleOpen(child1)\" (mouseenter)=\"showSubMenu($event, child1)\" class=\"sidebar-nav__item-link\">\n            <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{$implicit: child1.icon}\"></ng-template>\n            <span class=\"sidebar-nav__item-text\">{{ child1.text }}</span>\n            <i class=\"sidebar-nav__sub-arrow\"></i>\n          </a>\n          <!-- badge -->\n          <div *ngIf=\"child1.badge\" title=\"{{child1.badge}}\" class=\"badge badge-{{child1.badgeStatus}}\"\n            [class.badge-dot]=\"child1.badgeDot\">\n            <em>{{child1.badge}}</em>\n          </div>\n          <!-- Level 2 -->\n          <ul *ngIf=\"child1._type === 3\" class=\"sidebar-nav sidebar-nav__sub sidebar-nav__depth{{child1._depth}}\">\n            <ng-container *ngFor=\"let child2 of child1.children\">\n              <li *ngIf=\"child2._hidden !== true\" routerLinkActive=\"sidebar-nav__selected\" [routerLinkActiveOptions]=\"{exact: child2.linkExact}\"\n                class=\"sidebar-nav__item\" [class.sidebar-nav__open]=\"child2._open\">\n                <!-- link -->\n                <a *ngIf=\"child2._type === 1\" (click)=\"onSelect(child2)\" [routerLink]=\"child2.link\" [target]=\"child2.target\"\n                  class=\"sidebar-nav__item-link\">{{ child2.text }}</a>\n                <!-- external link -->\n                <a *ngIf=\"child2._type === 2\" href=\"{{ child2.externalLink }}\" target=\"{{ child2.target }}\" data-type=\"external\"\n                  class=\"sidebar-nav__item-link\">{{ child2.text }}</a>\n                <!-- has children link -->\n                <a *ngIf=\"child2._type === 3\" (click)=\"toggleOpen(child2)\" class=\"sidebar-nav__item-link\">\n                  {{ child2.text }}\n                  <i class=\"sidebar-nav__sub-arrow\"></i>\n                </a>\n                <!-- badge -->\n                <div *ngIf=\"child2.badge\" title=\"{{child2.badge}}\" class=\"badge badge-{{child2.badgeStatus}}\"\n                  [class.badge-dot]=\"child2.badgeDot\">\n                  <em>{{child2.badge}}</em>\n                </div>\n                <!-- Level 3 -->\n                <ul *ngIf=\"child2._type === 3\" class=\"sidebar-nav sidebar-nav__sub sidebar-nav__depth{{child2._depth}}\">\n                  <ng-container *ngFor=\"let child3 of child2.children\">\n                    <li *ngIf=\"child3._hidden !== true\" routerLinkActive=\"sidebar-nav__selected\"\n                      [routerLinkActiveOptions]=\"{exact: child3.linkExact}\" class=\"sidebar-nav__item\"\n                      [class.sidebar-nav__open]=\"child3._open\">\n                      <!-- link -->\n                      <a *ngIf=\"child3._type === 1\" (click)=\"onSelect(child3)\" [routerLink]=\"child3.link\" [target]=\"child3.target\"\n                        class=\"sidebar-nav__item-link\">{{\n                        child3.text }}</a>\n                      <!-- external link -->\n                      <a *ngIf=\"child3._type === 2\" href=\"{{ child3.externalLink }}\" target=\"{{ child3.target }}\"\n                        data-type=\"external\" class=\"sidebar-nav__item-link\">{{\n                        child3.text }}</a>\n                      <!-- badge -->\n                      <div *ngIf=\"child3.badge\" title=\"{{child3.badge}}\" class=\"badge badge-{{child3.badgeStatus}}\"\n                        [class.badge-dot]=\"child3.badgeDot\">\n                        <em>{{child3.badge}}</em>\n                      </div>\n                    </li>\n                  </ng-container>\n                </ul>\n              </li>\n            </ng-container>\n          </ul>\n        </li>\n      </ng-container>\n    </ng-container>\n  </ng-container>\n</ul>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        SidebarNavComponent.ctorParameters = function () {
            return [
                { type: theme.MenuService },
                { type: theme.SettingsService },
                { type: router.Router },
                { type: common.LocationStrategy },
                { type: core.Renderer2 },
                { type: core.ChangeDetectorRef },
                { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] }
            ];
        };
        SidebarNavComponent.propDecorators = {
            autoCloseUnderPad: [{ type: core.Input }],
            select: [{ type: core.Output }],
            _click: [{ type: core.HostListener, args: ['click',] }],
            _docClick: [{ type: core.HostListener, args: ['document:click',] }]
        };
        __decorate([
            util.InputBoolean(),
            __metadata("design:type", Object)
        ], SidebarNavComponent.prototype, "autoCloseUnderPad", void 0);
        return SidebarNavComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var SidebarNavModule = /** @class */ (function () {
        function SidebarNavModule() {
        }
        SidebarNavModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, router.RouterModule, ngZorroAntd.NgZorroAntdModule, util.DelonUtilModule],
                        declarations: [SidebarNavComponent],
                        exports: [SidebarNavComponent],
                    },] }
        ];
        return SidebarNavModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    exports.SidebarNavComponent = SidebarNavComponent;
    exports.SidebarNavModule = SidebarNavModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=sidebarNav.umd.js.map