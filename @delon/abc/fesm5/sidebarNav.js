import { __decorate, __metadata } from 'tslib';
import { Component, Renderer2, Inject, HostListener, ChangeDetectionStrategy, ChangeDetectorRef, Input, Output, EventEmitter, NgModule } from '@angular/core';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { DOCUMENT, LocationStrategy, CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';
import { MenuService, SettingsService } from '@delon/theme';
import { InputBoolean, DelonUtilModule } from '@delon/util';
import { NgZorroAntdModule } from 'ng-zorro-antd';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var SHOWCLS = 'sidebar-nav__floating-show';
/** @type {?} */
var FLOATINGCLS = 'sidebar-nav__floating';
var SidebarNavComponent = /** @class */ (function () {
    function SidebarNavComponent(menuSrv, settings, router, locationStrategy, render, cd, doc) {
        this.menuSrv = menuSrv;
        this.settings = settings;
        this.router = router;
        this.locationStrategy = locationStrategy;
        this.render = render;
        this.cd = cd;
        this.doc = doc;
        this.list = [];
        this.autoCloseUnderPad = true;
        this.select = new EventEmitter();
    }
    Object.defineProperty(SidebarNavComponent.prototype, "collapsed", {
        get: /**
         * @return {?}
         */
        function () {
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
        this.change$ = /** @type {?} */ (this.menuSrv.change.subscribe(function (res) {
            _this.list = res;
            _this.cd.detectChanges();
        }));
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
        var linkNode = /** @type {?} */ (e.target);
        if (linkNode.nodeName !== 'A') {
            return false;
        }
        /** @type {?} */
        var url = linkNode.getAttribute('href');
        if (url && url.startsWith('#')) {
            url = url.slice(1);
        }
        if (linkNode.dataset["type"] === 'external') {
            return true;
        }
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
        var id = "_sidebar-nav-" + item["__id"];
        /** @type {?} */
        var node = /** @type {?} */ (linkNode.nextElementSibling.cloneNode(true));
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
        for (var i = 0; i < allNode.length; i++) {
            allNode[i].classList.remove(SHOWCLS);
        }
    };
    /**
     * @param {?} linkNode
     * @param {?} node
     * @return {?}
     */
    SidebarNavComponent.prototype.calPos = /**
     * @param {?} linkNode
     * @param {?} node
     * @return {?}
     */
    function (linkNode, node) {
        /** @type {?} */
        var rect = linkNode.getBoundingClientRect();
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
        var linkNode = /** @type {?} */ (e.target);
        this.genFloatingContainer();
        /** @type {?} */
        var subNode = this.genSubNode(/** @type {?} */ (linkNode), item);
        this.hideAll();
        subNode.classList.add(SHOWCLS);
        this.calPos(/** @type {?} */ (linkNode), subNode);
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
                i["_open"] = false;
        });
        /** @type {?} */
        var pItem = item["__parent"];
        while (pItem) {
            pItem._open = true;
            pItem = pItem.__parent;
        }
        item._open = !item._open;
        this.cd.markForCheck();
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
        get: /**
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
        this.route$ = /** @type {?} */ ((this.router.events
            .pipe(filter(function (e) { return e instanceof NavigationEnd; }))
            .subscribe(function (s) { return _this.underPad(); })));
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
        { type: Component, args: [{
                    selector: 'sidebar-nav',
                    template: "<ul class=\"sidebar-nav\">\r\n  <ng-container *ngFor=\"let group of list\">\r\n    <ng-template [ngIf]=\"group._hidden !== true\">\r\n      <li class=\"sidebar-nav__item sidebar-nav__group-title\" *ngIf=\"group.group\">\r\n        <span>{{ group.text }}</span>\r\n      </li>\r\n      <ng-container *ngFor=\"let child1 of group.children\">\r\n        <li *ngIf=\"child1._hidden !== true\" routerLinkActive=\"sidebar-nav__selected\"\r\n            [routerLinkActiveOptions]=\"{exact: child1.linkExact}\" class=\"sidebar-nav__item\"\r\n            [class.sidebar-nav__open]=\"child1._open\">\r\n          <!-- link -->\r\n          <a *ngIf=\"child1._type === 1\" (click)=\"onSelect(child1)\" [routerLink]=\"child1.link\"\r\n             [target]=\"child1.target\">\r\n            <i *ngIf=\"!collapsed\" class=\"{{ child1.icon }}\"></i>\r\n            <nz-tooltip *ngIf=\"collapsed\" nzPlacement=\"right\" [nzTitle]=\"child1.text\">\r\n              <span nz-tooltip>\r\n                <i class=\"{{ child1.icon }}\"></i>\r\n              </span>\r\n            </nz-tooltip>\r\n            <span>{{ child1.text }}</span>\r\n          </a>\r\n          <!-- external link -->\r\n          <a *ngIf=\"child1._type === 2\" href=\"{{ child1.externalLink }}\" target=\"{{child1.target}}\"\r\n             data-type=\"external\">\r\n            <i *ngIf=\"!collapsed\" class=\"{{ child1.icon }}\"></i>\r\n            <nz-tooltip *ngIf=\"collapsed\" nzPlacement=\"right\" [nzTitle]=\"child1.text\">\r\n              <span nz-tooltip>\r\n                <i class=\"{{ child1.icon }}\"></i>\r\n              </span>\r\n            </nz-tooltip>\r\n            <span>{{ child1.text }}</span>\r\n          </a>\r\n          <!-- has children link -->\r\n          <a *ngIf=\"child1._type === 3\" class=\"sidebar-nav__sub-title\" (click)=\"toggleOpen(child1)\"\r\n             (mouseenter)=\"showSubMenu($event, child1)\">\r\n            <i class=\"{{ child1.icon }}\"></i>\r\n            <span>{{ child1.text }}</span>\r\n          </a>\r\n          <!-- badge -->\r\n          <div *ngIf=\"child1.badge\" title=\"{{child1.badge}}\" class=\"badge badge-{{child1.badgeStatus}}\"\r\n               [class.badge-dot]=\"child1.badgeDot\">\r\n            <em>{{child1.badge}}</em>\r\n          </div>\r\n          <!-- Level 2 -->\r\n          <ul *ngIf=\"child1._type === 3\" class=\"sidebar-nav sidebar-nav__sub sidebar-nav__depth{{child1._depth}}\">\r\n            <ng-container *ngFor=\"let child2 of child1.children\">\r\n              <li *ngIf=\"child2._hidden !== true\" routerLinkActive=\"sidebar-nav__selected\"\r\n                  [routerLinkActiveOptions]=\"{exact: child2.linkExact}\" class=\"sidebar-nav__item\"\r\n                  [class.sidebar-nav__open]=\"child2._open\">\r\n                <!-- link -->\r\n                <a *ngIf=\"child2._type === 1\" (click)=\"onSelect(child2)\" [routerLink]=\"child2.link\"\r\n                   [target]=\"child2.target\">{{\r\n                  child2.text }}</a>\r\n                <!-- external link -->\r\n                <a *ngIf=\"child2._type === 2\" href=\"{{ child2.externalLink }}\" target=\"{{ child2.target }}\"\r\n                   data-type=\"external\">{{\r\n                  child2.text }}</a>\r\n                <!-- has children link -->\r\n                <a *ngIf=\"child2._type === 3\" class=\"sidebar-nav__sub-title\" (click)=\"toggleOpen(child2)\">\r\n                  {{ child2.text }}\r\n                </a>\r\n                <!-- badge -->\r\n                <div *ngIf=\"child2.badge\" title=\"{{child2.badge}}\" class=\"badge badge-{{child2.badgeStatus}}\"\r\n                     [class.badge-dot]=\"child2.badgeDot\">\r\n                  <em>{{child2.badge}}</em>\r\n                </div>\r\n                <!-- Level 3 -->\r\n                <ul *ngIf=\"child2._type === 3\" class=\"sidebar-nav sidebar-nav__sub sidebar-nav__depth{{child2._depth}}\">\r\n                  <ng-container *ngFor=\"let child3 of child2.children\">\r\n                    <li *ngIf=\"child3._hidden !== true\" routerLinkActive=\"sidebar-nav__selected\"\r\n                        [routerLinkActiveOptions]=\"{exact: child3.linkExact}\" class=\"sidebar-nav__item\"\r\n                        [class.sidebar-nav__open]=\"child3._open\">\r\n                      <!-- link -->\r\n                      <a *ngIf=\"child3._type === 1\" (click)=\"onSelect(child3)\" [routerLink]=\"child3.link\"\r\n                         [target]=\"child3.target\">{{\r\n                        child3.text }}</a>\r\n                      <!-- external link -->\r\n                      <a *ngIf=\"child3._type === 2\" href=\"{{ child3.externalLink }}\" target=\"{{ child3.target }}\"\r\n                         data-type=\"external\">{{\r\n                        child3.text }}</a>\r\n                      <!-- badge -->\r\n                      <div *ngIf=\"child3.badge\" title=\"{{child3.badge}}\" class=\"badge badge-{{child3.badgeStatus}}\"\r\n                           [class.badge-dot]=\"child3.badgeDot\">\r\n                        <em>{{child3.badge}}</em>\r\n                      </div>\r\n                    </li>\r\n                  </ng-container>\r\n                </ul>\r\n              </li>\r\n            </ng-container>\r\n          </ul>\r\n        </li>\r\n      </ng-container>\r\n    </ng-template>\r\n  </ng-container>\r\n</ul>\r\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false
                }] }
    ];
    /** @nocollapse */
    SidebarNavComponent.ctorParameters = function () { return [
        { type: MenuService },
        { type: SettingsService },
        { type: Router },
        { type: LocationStrategy },
        { type: Renderer2 },
        { type: ChangeDetectorRef },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    SidebarNavComponent.propDecorators = {
        autoCloseUnderPad: [{ type: Input }],
        select: [{ type: Output }],
        _click: [{ type: HostListener, args: ['click',] }],
        _docClick: [{ type: HostListener, args: ['document:click',] }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], SidebarNavComponent.prototype, "autoCloseUnderPad", void 0);
    return SidebarNavComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SidebarNavModule = /** @class */ (function () {
    function SidebarNavModule() {
    }
    /**
     * @return {?}
     */
    SidebarNavModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: SidebarNavModule, providers: [] };
    };
    SidebarNavModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, RouterModule, NgZorroAntdModule, DelonUtilModule],
                    declarations: [SidebarNavComponent],
                    exports: [SidebarNavComponent],
                },] }
    ];
    return SidebarNavModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { SidebarNavComponent, SidebarNavModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhck5hdi5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGRlbG9uL2FiYy9zaWRlYmFyLW5hdi9zaWRlYmFyLW5hdi5jb21wb25lbnQudHMiLCJuZzovL0BkZWxvbi9hYmMvc2lkZWJhci1uYXYvc2lkZWJhci1uYXYubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIFJlbmRlcmVyMixcclxuICBJbmplY3QsXHJcbiAgT25Jbml0LFxyXG4gIE9uRGVzdHJveSxcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyLCBOYXZpZ2F0aW9uRW5kIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgRE9DVU1FTlQsIExvY2F0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgTWVudVNlcnZpY2UsIFNldHRpbmdzU2VydmljZSwgTWVudSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ0BkZWxvbi91dGlsJztcclxuXHJcbmltcG9ydCB7IE5hdiB9IGZyb20gJy4vc2lkZWJhci1uYXYudHlwZXMnO1xyXG5cclxuY29uc3QgU0hPV0NMUyA9ICdzaWRlYmFyLW5hdl9fZmxvYXRpbmctc2hvdyc7XHJcbmNvbnN0IEZMT0FUSU5HQ0xTID0gJ3NpZGViYXItbmF2X19mbG9hdGluZyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NpZGViYXItbmF2JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc2lkZWJhci1uYXYuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2lkZWJhck5hdkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBwcml2YXRlIGJvZHlFbDogSFRNTEJvZHlFbGVtZW50O1xyXG4gIHByaXZhdGUgY2hhbmdlJDogU3Vic2NyaXB0aW9uO1xyXG4gIC8qKiBAaW5uZXIgKi9cclxuICBmbG9hdGluZ0VsOiBIVE1MRGl2RWxlbWVudDtcclxuICBsaXN0OiBOYXZbXSA9IFtdO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIEBJbnB1dEJvb2xlYW4oKVxyXG4gIGF1dG9DbG9zZVVuZGVyUGFkID0gdHJ1ZTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgc2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxNZW51PigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgbWVudVNydjogTWVudVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHNldHRpbmdzOiBTZXR0aW5nc1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSBsb2NhdGlvblN0cmF0ZWd5OiBMb2NhdGlvblN0cmF0ZWd5LFxyXG4gICAgcHJpdmF0ZSByZW5kZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IGFueSxcclxuICApIHt9XHJcblxyXG4gIGdldCBjb2xsYXBzZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zZXR0aW5ncy5sYXlvdXQuY29sbGFwc2VkO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmJvZHlFbCA9IHRoaXMuZG9jLnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICAgIHRoaXMubWVudVNydi5vcGVuZWRCeVVybCh0aGlzLnJvdXRlci51cmwpO1xyXG4gICAgdGhpcy5nZW5GbG9hdGluZ0NvbnRhaW5lcigpO1xyXG4gICAgdGhpcy5jaGFuZ2UkID0gPGFueT50aGlzLm1lbnVTcnYuY2hhbmdlLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICB0aGlzLmxpc3QgPSByZXM7XHJcbiAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmluc3RhbGxVbmRlclBhZCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmbG9hdGluZ0FyZWFDbGlja0hhbmRsZShlOiBNb3VzZUV2ZW50KSB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgY29uc3QgbGlua05vZGUgPSBlLnRhcmdldCBhcyBIVE1MRWxlbWVudDtcclxuICAgIGlmIChsaW5rTm9kZS5ub2RlTmFtZSAhPT0gJ0EnKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGxldCB1cmw6IHN0cmluZyA9IGxpbmtOb2RlLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xyXG4gICAgaWYgKHVybCAmJiB1cmwuc3RhcnRzV2l0aCgnIycpKSB7XHJcbiAgICAgIHVybCA9IHVybC5zbGljZSgxKTtcclxuICAgIH1cclxuICAgIGlmIChsaW5rTm9kZS5kYXRhc2V0IS50eXBlID09PSAnZXh0ZXJuYWwnKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIMOlwqbCgsOmwp7CnMOpwoXCjcOnwr3CrsOkwrrChmJhc2hIcmVmIMOlwojCmcOlwo7Cu8Omwo7CiWJhc2VIcmVmXHJcbiAgICBjb25zdCBiYXNlSGVyZiA9IHRoaXMubG9jYXRpb25TdHJhdGVneS5nZXRCYXNlSHJlZigpO1xyXG4gICAgaWYgKGJhc2VIZXJmKSB7XHJcbiAgICAgIHVybCA9IHVybC5zbGljZShiYXNlSGVyZi5sZW5ndGgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCh1cmwpO1xyXG4gICAgdGhpcy5vblNlbGVjdCh0aGlzLm1lbnVTcnYuZ2V0UGF0aEJ5VXJsKHVybCkucG9wKCkpO1xyXG4gICAgdGhpcy5oaWRlQWxsKCk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNsZWFyRmxvYXRpbmdDb250YWluZXIoKSB7XHJcbiAgICBpZiAoIXRoaXMuZmxvYXRpbmdFbCkgcmV0dXJuO1xyXG4gICAgdGhpcy5mbG9hdGluZ0VsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICdjbGljaycsXHJcbiAgICAgIHRoaXMuZmxvYXRpbmdBcmVhQ2xpY2tIYW5kbGUuYmluZCh0aGlzKSxcclxuICAgICk7XHJcbiAgICAvLyBmaXggaWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9uZy1hbGFpbi9kZWxvbi9pc3N1ZXMvNTJcclxuICAgIGlmICh0aGlzLmZsb2F0aW5nRWwuaGFzT3duUHJvcGVydHkoJ3JlbW92ZScpKSB7XHJcbiAgICAgIHRoaXMuZmxvYXRpbmdFbC5yZW1vdmUoKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5mbG9hdGluZ0VsLnBhcmVudE5vZGUpIHtcclxuICAgICAgdGhpcy5mbG9hdGluZ0VsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5mbG9hdGluZ0VsKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2VuRmxvYXRpbmdDb250YWluZXIoKSB7XHJcbiAgICB0aGlzLmNsZWFyRmxvYXRpbmdDb250YWluZXIoKTtcclxuICAgIHRoaXMuZmxvYXRpbmdFbCA9IHRoaXMucmVuZGVyLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGhpcy5mbG9hdGluZ0VsLmNsYXNzTGlzdC5hZGQoRkxPQVRJTkdDTFMgKyAnLWNvbnRhaW5lcicpO1xyXG4gICAgdGhpcy5mbG9hdGluZ0VsLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICdjbGljaycsXHJcbiAgICAgIHRoaXMuZmxvYXRpbmdBcmVhQ2xpY2tIYW5kbGUuYmluZCh0aGlzKSxcclxuICAgICAgZmFsc2UsXHJcbiAgICApO1xyXG4gICAgdGhpcy5ib2R5RWwuYXBwZW5kQ2hpbGQodGhpcy5mbG9hdGluZ0VsKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2VuU3ViTm9kZShsaW5rTm9kZTogSFRNTExpbmtFbGVtZW50LCBpdGVtOiBOYXYpOiBIVE1MVUxpc3RFbGVtZW50IHtcclxuICAgIGNvbnN0IGlkID0gYF9zaWRlYmFyLW5hdi0ke2l0ZW0uX19pZH1gO1xyXG4gICAgY29uc3Qgbm9kZSA9IGxpbmtOb2RlLm5leHRFbGVtZW50U2libGluZy5jbG9uZU5vZGUoXHJcbiAgICAgIHRydWUsXHJcbiAgICApIGFzIEhUTUxVTGlzdEVsZW1lbnQ7XHJcbiAgICBub2RlLmlkID0gaWQ7XHJcbiAgICBub2RlLmNsYXNzTGlzdC5hZGQoRkxPQVRJTkdDTFMpO1xyXG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAnbW91c2VsZWF2ZScsXHJcbiAgICAgICgpID0+IHtcclxuICAgICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoU0hPV0NMUyk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGZhbHNlLFxyXG4gICAgKTtcclxuICAgIHRoaXMuZmxvYXRpbmdFbC5hcHBlbmRDaGlsZChub2RlKTtcclxuICAgIHJldHVybiBub2RlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoaWRlQWxsKCkge1xyXG4gICAgY29uc3QgYWxsTm9kZSA9IHRoaXMuZmxvYXRpbmdFbC5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIEZMT0FUSU5HQ0xTKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsTm9kZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBhbGxOb2RlW2ldLmNsYXNzTGlzdC5yZW1vdmUoU0hPV0NMUyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBjYWxjdWxhdGUgdGhlIG5vZGUgcG9zaXRpb24gdmFsdWVzLlxyXG4gIHByaXZhdGUgY2FsUG9zKGxpbmtOb2RlOiBIVE1MTGlua0VsZW1lbnQsIG5vZGU6IEhUTUxVTGlzdEVsZW1lbnQpIHtcclxuICAgIGNvbnN0IHJlY3QgPSBsaW5rTm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIC8vIGJ1ZzogaHR0cHM6Ly9kZXZlbG9wZXIubWljcm9zb2Z0LmNvbS9lbi11cy9taWNyb3NvZnQtZWRnZS9wbGF0Zm9ybS9pc3N1ZXMvMTQ3MjEwMTUvXHJcbiAgICBjb25zdCBzY3JvbGxUb3AgPSBNYXRoLm1heChcclxuICAgICAgdGhpcy5kb2MuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCxcclxuICAgICAgdGhpcy5ib2R5RWwuc2Nyb2xsVG9wLFxyXG4gICAgKTtcclxuICAgIGNvbnN0IGRvY0hlaWdodCA9IE1hdGgubWF4KFxyXG4gICAgICB0aGlzLmRvYy5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LFxyXG4gICAgICB0aGlzLmJvZHlFbC5jbGllbnRIZWlnaHQsXHJcbiAgICApO1xyXG4gICAgbGV0IG9mZnNldEhlaWdodCA9IDA7XHJcbiAgICBpZiAoZG9jSGVpZ2h0IDwgcmVjdC50b3AgKyBub2RlLmNsaWVudEhlaWdodCkge1xyXG4gICAgICBvZmZzZXRIZWlnaHQgPSByZWN0LnRvcCArIG5vZGUuY2xpZW50SGVpZ2h0IC0gZG9jSGVpZ2h0O1xyXG4gICAgfVxyXG4gICAgbm9kZS5zdHlsZS50b3AgPSBgJHtyZWN0LnRvcCArIHNjcm9sbFRvcCAtIG9mZnNldEhlaWdodH1weGA7XHJcbiAgICBub2RlLnN0eWxlLmxlZnQgPSBgJHtyZWN0LnJpZ2h0ICsgNX1weGA7XHJcbiAgfVxyXG5cclxuICBzaG93U3ViTWVudShlOiBNb3VzZUV2ZW50LCBpdGVtOiBOYXYpIHtcclxuICAgIGlmICh0aGlzLmNvbGxhcHNlZCAhPT0gdHJ1ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBsaW5rTm9kZSA9IGUudGFyZ2V0IGFzIEVsZW1lbnQ7XHJcbiAgICB0aGlzLmdlbkZsb2F0aW5nQ29udGFpbmVyKCk7XHJcbiAgICBjb25zdCBzdWJOb2RlID0gdGhpcy5nZW5TdWJOb2RlKGxpbmtOb2RlIGFzIEhUTUxMaW5rRWxlbWVudCwgaXRlbSk7XHJcbiAgICB0aGlzLmhpZGVBbGwoKTtcclxuICAgIHN1Yk5vZGUuY2xhc3NMaXN0LmFkZChTSE9XQ0xTKTtcclxuICAgIHRoaXMuY2FsUG9zKGxpbmtOb2RlIGFzIEhUTUxMaW5rRWxlbWVudCwgc3ViTm9kZSk7XHJcbiAgfVxyXG5cclxuICBvblNlbGVjdChpdGVtOiBNZW51KSB7XHJcbiAgICB0aGlzLnNlbGVjdC5lbWl0KGl0ZW0pO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlT3BlbihpdGVtOiBOYXYpIHtcclxuICAgIHRoaXMubWVudVNydi52aXNpdCgoaSwgcCkgPT4ge1xyXG4gICAgICBpZiAoaSAhPT0gaXRlbSkgaS5fb3BlbiA9IGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgICBsZXQgcEl0ZW0gPSBpdGVtLl9fcGFyZW50O1xyXG4gICAgd2hpbGUgKHBJdGVtKSB7XHJcbiAgICAgIHBJdGVtLl9vcGVuID0gdHJ1ZTtcclxuICAgICAgcEl0ZW0gPSBwSXRlbS5fX3BhcmVudDtcclxuICAgIH1cclxuICAgIGl0ZW0uX29wZW4gPSAhaXRlbS5fb3BlbjtcclxuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXHJcbiAgX2NsaWNrKCkge1xyXG4gICAgaWYgKHRoaXMuaXNQYWQgJiYgdGhpcy5jb2xsYXBzZWQpIHtcclxuICAgICAgdGhpcy5vcGVuQXNpZGUoZmFsc2UpO1xyXG4gICAgICB0aGlzLmhpZGVBbGwoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmNsaWNrJylcclxuICBfZG9jQ2xpY2soKSB7XHJcbiAgICB0aGlzLmhpZGVBbGwoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jaGFuZ2UkLnVuc3Vic2NyaWJlKCk7XHJcbiAgICBpZiAodGhpcy5yb3V0ZSQpIHRoaXMucm91dGUkLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB0aGlzLmNsZWFyRmxvYXRpbmdDb250YWluZXIoKTtcclxuICB9XHJcblxyXG4gIC8vIHJlZ2lvbjogVW5kZXIgcGFkXHJcblxyXG4gIHByaXZhdGUgZ2V0IGlzUGFkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHdpbmRvdy5pbm5lcldpZHRoIDwgNzY4O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByb3V0ZSQ6IFN1YnNjcmlwdGlvbjtcclxuICBwcml2YXRlIGluc3RhbGxVbmRlclBhZCgpIHtcclxuICAgIGlmICghdGhpcy5hdXRvQ2xvc2VVbmRlclBhZCkgcmV0dXJuO1xyXG4gICAgdGhpcy5yb3V0ZSQgPSA8YW55PihcclxuICAgICAgdGhpcy5yb3V0ZXIuZXZlbnRzXHJcbiAgICAgICAgLnBpcGUoZmlsdGVyKGUgPT4gZSBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpKVxyXG4gICAgICAgIC5zdWJzY3JpYmUocyA9PiB0aGlzLnVuZGVyUGFkKCkpXHJcbiAgICApO1xyXG4gICAgdGhpcy51bmRlclBhZCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1bmRlclBhZCgpIHtcclxuICAgIGlmICh0aGlzLmlzUGFkICYmICF0aGlzLmNvbGxhcHNlZCkge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMub3BlbkFzaWRlKHRydWUpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgb3BlbkFzaWRlKHN0YXR1czogYm9vbGVhbikge1xyXG4gICAgdGhpcy5zZXR0aW5ncy5zZXRMYXlvdXQoJ2NvbGxhcHNlZCcsIHN0YXR1cyk7XHJcbiAgfVxyXG5cclxuICAvLyBlbmRyZWdpb25cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBOZ1pvcnJvQW50ZE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xyXG5pbXBvcnQgeyBEZWxvblV0aWxNb2R1bGUgfSBmcm9tICdAZGVsb24vdXRpbCc7XHJcblxyXG5pbXBvcnQgeyBTaWRlYmFyTmF2Q29tcG9uZW50IH0gZnJvbSAnLi9zaWRlYmFyLW5hdi5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBSb3V0ZXJNb2R1bGUsIE5nWm9ycm9BbnRkTW9kdWxlLCBEZWxvblV0aWxNb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW1NpZGViYXJOYXZDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtTaWRlYmFyTmF2Q29tcG9uZW50XSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNpZGViYXJOYXZNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHsgbmdNb2R1bGU6IFNpZGViYXJOYXZNb2R1bGUsIHByb3ZpZGVyczogW10gfTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBdUJBLElBQU0sT0FBTyxHQUFHLDRCQUE0QixDQUFDOztBQUM3QyxJQUFNLFdBQVcsR0FBRyx1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