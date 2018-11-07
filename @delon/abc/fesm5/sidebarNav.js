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
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
        this.change$ = (/** @type {?} */ (this.menuSrv.change.subscribe(function (res) {
            _this.list = res;
            _this.cd.detectChanges();
        })));
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
        var linkNode = (/** @type {?} */ (e.target));
        if (linkNode.nodeName !== 'A') {
            return false;
        }
        /** @type {?} */
        var url = linkNode.getAttribute('href');
        if (url && url.startsWith('#')) {
            url = url.slice(1);
        }
        if ((/** @type {?} */ (linkNode.dataset)).type === 'external') {
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
        var node = (/** @type {?} */ (linkNode.nextElementSibling.cloneNode(true)));
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
        var linkNode = (/** @type {?} */ (e.target));
        this.genFloatingContainer();
        /** @type {?} */
        var subNode = this.genSubNode((/** @type {?} */ (linkNode)), item);
        this.hideAll();
        subNode.classList.add(SHOWCLS);
        this.calPos((/** @type {?} */ (linkNode)), subNode);
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
        this.route$ = (/** @type {?} */ ((this.router.events
            .pipe(filter(function (e) { return e instanceof NavigationEnd; }))
            .subscribe(function (s) { return _this.underPad(); }))));
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
                    template: "<ng-template #icon let-i>\n  <ng-container *ngIf=\"i\" [ngSwitch]=\"i.type\">\n    <i *ngSwitchCase=\"'icon'\" class=\"sidebar-nav__item-icon\" nz-icon [type]=\"i.value\" [theme]=\"i.theme\" [spin]=\"i.spin\" [twoToneColor]=\"i.twoToneColor\" [iconfont]=\"i.iconfont\"></i>\n    <img *ngSwitchCase=\"'img'\" src=\"{{ i.value }}\" class=\"sidebar-nav__item-icon sidebar-nav__item-img\">\n    <i *ngSwitchDefault class=\"sidebar-nav__item-icon {{ i.value }}\"></i>\n  </ng-container>\n</ng-template>\n<ul class=\"sidebar-nav\">\n  <ng-container *ngFor=\"let group of list\">\n    <ng-container *ngIf=\"group._hidden !== true\">\n      <li class=\"sidebar-nav__item sidebar-nav__group-title\" *ngIf=\"group.group\">\n        <span>{{ group.text }}</span>\n      </li>\n      <ng-container *ngFor=\"let child1 of group.children\">\n        <li *ngIf=\"child1._hidden !== true\" routerLinkActive=\"sidebar-nav__selected\" [routerLinkActiveOptions]=\"{exact: child1.linkExact}\"\n          class=\"sidebar-nav__item\" [class.sidebar-nav__open]=\"child1._open\">\n          <!-- link -->\n          <a *ngIf=\"child1._type === 1\" (click)=\"onSelect(child1)\" [routerLink]=\"child1.link\" [target]=\"child1.target\"\n            class=\"sidebar-nav__item-link\">\n            <ng-container *ngIf=\"!collapsed\">\n              <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{$implicit: child1.icon}\"></ng-template>\n            </ng-container>\n            <nz-tooltip *ngIf=\"collapsed\" nzPlacement=\"right\" [nzTitle]=\"child1.text\">\n              <span nz-tooltip>\n                <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{$implicit: child1.icon}\"></ng-template>\n              </span>\n            </nz-tooltip>\n            <span class=\"sidebar-nav__item-text\">{{ child1.text }}</span>\n          </a>\n          <!-- external link -->\n          <a *ngIf=\"child1._type === 2\" href=\"{{ child1.externalLink }}\" target=\"{{child1.target}}\" data-type=\"external\"\n            class=\"sidebar-nav__item-link\">\n            <ng-container *ngIf=\"!collapsed\">\n              <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{$implicit: child1.icon}\"></ng-template>\n            </ng-container>\n            <nz-tooltip *ngIf=\"collapsed\" nzPlacement=\"right\" [nzTitle]=\"child1.text\">\n              <span nz-tooltip>\n                <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{$implicit: child1.icon}\"></ng-template>\n              </span>\n            </nz-tooltip>\n            <span class=\"sidebar-nav__item-text\">{{ child1.text }}</span>\n          </a>\n          <!-- has children link -->\n          <a *ngIf=\"child1._type === 3\" (click)=\"toggleOpen(child1)\" (mouseenter)=\"showSubMenu($event, child1)\" class=\"sidebar-nav__item-link\">\n            <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{$implicit: child1.icon}\"></ng-template>\n            <span class=\"sidebar-nav__item-text\">{{ child1.text }}</span>\n            <i class=\"sidebar-nav__sub-arrow\"></i>\n          </a>\n          <!-- badge -->\n          <div *ngIf=\"child1.badge\" title=\"{{child1.badge}}\" class=\"badge badge-{{child1.badgeStatus}}\"\n            [class.badge-dot]=\"child1.badgeDot\">\n            <em>{{child1.badge}}</em>\n          </div>\n          <!-- Level 2 -->\n          <ul *ngIf=\"child1._type === 3\" class=\"sidebar-nav sidebar-nav__sub sidebar-nav__depth{{child1._depth}}\">\n            <ng-container *ngFor=\"let child2 of child1.children\">\n              <li *ngIf=\"child2._hidden !== true\" routerLinkActive=\"sidebar-nav__selected\" [routerLinkActiveOptions]=\"{exact: child2.linkExact}\"\n                class=\"sidebar-nav__item\" [class.sidebar-nav__open]=\"child2._open\">\n                <!-- link -->\n                <a *ngIf=\"child2._type === 1\" (click)=\"onSelect(child2)\" [routerLink]=\"child2.link\" [target]=\"child2.target\"\n                  class=\"sidebar-nav__item-link\">{{ child2.text }}</a>\n                <!-- external link -->\n                <a *ngIf=\"child2._type === 2\" href=\"{{ child2.externalLink }}\" target=\"{{ child2.target }}\" data-type=\"external\"\n                  class=\"sidebar-nav__item-link\">{{ child2.text }}</a>\n                <!-- has children link -->\n                <a *ngIf=\"child2._type === 3\" (click)=\"toggleOpen(child2)\" class=\"sidebar-nav__item-link\">\n                  {{ child2.text }}\n                  <i class=\"sidebar-nav__sub-arrow\"></i>\n                </a>\n                <!-- badge -->\n                <div *ngIf=\"child2.badge\" title=\"{{child2.badge}}\" class=\"badge badge-{{child2.badgeStatus}}\"\n                  [class.badge-dot]=\"child2.badgeDot\">\n                  <em>{{child2.badge}}</em>\n                </div>\n                <!-- Level 3 -->\n                <ul *ngIf=\"child2._type === 3\" class=\"sidebar-nav sidebar-nav__sub sidebar-nav__depth{{child2._depth}}\">\n                  <ng-container *ngFor=\"let child3 of child2.children\">\n                    <li *ngIf=\"child3._hidden !== true\" routerLinkActive=\"sidebar-nav__selected\"\n                      [routerLinkActiveOptions]=\"{exact: child3.linkExact}\" class=\"sidebar-nav__item\"\n                      [class.sidebar-nav__open]=\"child3._open\">\n                      <!-- link -->\n                      <a *ngIf=\"child3._type === 1\" (click)=\"onSelect(child3)\" [routerLink]=\"child3.link\" [target]=\"child3.target\"\n                        class=\"sidebar-nav__item-link\">{{\n                        child3.text }}</a>\n                      <!-- external link -->\n                      <a *ngIf=\"child3._type === 2\" href=\"{{ child3.externalLink }}\" target=\"{{ child3.target }}\"\n                        data-type=\"external\" class=\"sidebar-nav__item-link\">{{\n                        child3.text }}</a>\n                      <!-- badge -->\n                      <div *ngIf=\"child3.badge\" title=\"{{child3.badge}}\" class=\"badge badge-{{child3.badgeStatus}}\"\n                        [class.badge-dot]=\"child3.badgeDot\">\n                        <em>{{child3.badge}}</em>\n                      </div>\n                    </li>\n                  </ng-container>\n                </ul>\n              </li>\n            </ng-container>\n          </ul>\n        </li>\n      </ng-container>\n    </ng-container>\n  </ng-container>\n</ul>\n",
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
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { SidebarNavComponent, SidebarNavModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhck5hdi5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGRlbG9uL2FiYy9zaWRlYmFyLW5hdi9zaWRlYmFyLW5hdi5jb21wb25lbnQudHMiLCJuZzovL0BkZWxvbi9hYmMvc2lkZWJhci1uYXYvc2lkZWJhci1uYXYubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgUmVuZGVyZXIyLFxuICBJbmplY3QsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxuICBIb3N0TGlzdGVuZXIsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgTmF2aWdhdGlvbkVuZCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBET0NVTUVOVCwgTG9jYXRpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgTWVudVNlcnZpY2UsIFNldHRpbmdzU2VydmljZSwgTWVudSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbmltcG9ydCB7IE5hdiB9IGZyb20gJy4vc2lkZWJhci1uYXYudHlwZXMnO1xuXG5jb25zdCBTSE9XQ0xTID0gJ3NpZGViYXItbmF2X19mbG9hdGluZy1zaG93JztcbmNvbnN0IEZMT0FUSU5HQ0xTID0gJ3NpZGViYXItbmF2X19mbG9hdGluZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NpZGViYXItbmF2JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NpZGViYXItbmF2LmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBTaWRlYmFyTmF2Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGJvZHlFbDogSFRNTEJvZHlFbGVtZW50O1xuICBwcml2YXRlIGNoYW5nZSQ6IFN1YnNjcmlwdGlvbjtcbiAgLyoqIEBpbm5lciAqL1xuICBmbG9hdGluZ0VsOiBIVE1MRGl2RWxlbWVudDtcbiAgbGlzdDogTmF2W10gPSBbXTtcblxuICBASW5wdXQoKVxuICBASW5wdXRCb29sZWFuKClcbiAgYXV0b0Nsb3NlVW5kZXJQYWQgPSB0cnVlO1xuXG4gIEBPdXRwdXQoKVxuICByZWFkb25seSBzZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPE1lbnU+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBtZW51U3J2OiBNZW51U2VydmljZSxcbiAgICBwcml2YXRlIHNldHRpbmdzOiBTZXR0aW5nc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIGxvY2F0aW9uU3RyYXRlZ3k6IExvY2F0aW9uU3RyYXRlZ3ksXG4gICAgcHJpdmF0ZSByZW5kZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogYW55LFxuICApIHt9XG5cbiAgZ2V0IGNvbGxhcHNlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5zZXR0aW5ncy5sYXlvdXQuY29sbGFwc2VkO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5ib2R5RWwgPSB0aGlzLmRvYy5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgdGhpcy5tZW51U3J2Lm9wZW5lZEJ5VXJsKHRoaXMucm91dGVyLnVybCk7XG4gICAgdGhpcy5nZW5GbG9hdGluZ0NvbnRhaW5lcigpO1xuICAgIHRoaXMuY2hhbmdlJCA9IDxhbnk+dGhpcy5tZW51U3J2LmNoYW5nZS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgIHRoaXMubGlzdCA9IHJlcztcbiAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuICAgIHRoaXMuaW5zdGFsbFVuZGVyUGFkKCk7XG4gIH1cblxuICBwcml2YXRlIGZsb2F0aW5nQXJlYUNsaWNrSGFuZGxlKGU6IE1vdXNlRXZlbnQpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IGxpbmtOb2RlID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgaWYgKGxpbmtOb2RlLm5vZGVOYW1lICE9PSAnQScpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgbGV0IHVybDogc3RyaW5nID0gbGlua05vZGUuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgaWYgKHVybCAmJiB1cmwuc3RhcnRzV2l0aCgnIycpKSB7XG4gICAgICB1cmwgPSB1cmwuc2xpY2UoMSk7XG4gICAgfVxuICAgIGlmIChsaW5rTm9kZS5kYXRhc2V0IS50eXBlID09PSAnZXh0ZXJuYWwnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyDDpcKmwoLDpsKewpzDqcKFwo3Dp8K9wq7DpMK6woZiYXNoSHJlZiDDpcKIwpnDpcKOwrvDpsKOwoliYXNlSHJlZlxuICAgIGNvbnN0IGJhc2VIZXJmID0gdGhpcy5sb2NhdGlvblN0cmF0ZWd5LmdldEJhc2VIcmVmKCk7XG4gICAgaWYgKGJhc2VIZXJmKSB7XG4gICAgICB1cmwgPSB1cmwuc2xpY2UoYmFzZUhlcmYubGVuZ3RoKTtcbiAgICB9XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCh1cmwpO1xuICAgIHRoaXMub25TZWxlY3QodGhpcy5tZW51U3J2LmdldFBhdGhCeVVybCh1cmwpLnBvcCgpKTtcbiAgICB0aGlzLmhpZGVBbGwoKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBjbGVhckZsb2F0aW5nQ29udGFpbmVyKCkge1xuICAgIGlmICghdGhpcy5mbG9hdGluZ0VsKSByZXR1cm47XG4gICAgdGhpcy5mbG9hdGluZ0VsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXG4gICAgICAnY2xpY2snLFxuICAgICAgdGhpcy5mbG9hdGluZ0FyZWFDbGlja0hhbmRsZS5iaW5kKHRoaXMpLFxuICAgICk7XG4gICAgLy8gZml4IGllOiBodHRwczovL2dpdGh1Yi5jb20vbmctYWxhaW4vZGVsb24vaXNzdWVzLzUyXG4gICAgaWYgKHRoaXMuZmxvYXRpbmdFbC5oYXNPd25Qcm9wZXJ0eSgncmVtb3ZlJykpIHtcbiAgICAgIHRoaXMuZmxvYXRpbmdFbC5yZW1vdmUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZmxvYXRpbmdFbC5wYXJlbnROb2RlKSB7XG4gICAgICB0aGlzLmZsb2F0aW5nRWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmZsb2F0aW5nRWwpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2VuRmxvYXRpbmdDb250YWluZXIoKSB7XG4gICAgdGhpcy5jbGVhckZsb2F0aW5nQ29udGFpbmVyKCk7XG4gICAgdGhpcy5mbG9hdGluZ0VsID0gdGhpcy5yZW5kZXIuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5mbG9hdGluZ0VsLmNsYXNzTGlzdC5hZGQoRkxPQVRJTkdDTFMgKyAnLWNvbnRhaW5lcicpO1xuICAgIHRoaXMuZmxvYXRpbmdFbC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ2NsaWNrJyxcbiAgICAgIHRoaXMuZmxvYXRpbmdBcmVhQ2xpY2tIYW5kbGUuYmluZCh0aGlzKSxcbiAgICAgIGZhbHNlLFxuICAgICk7XG4gICAgdGhpcy5ib2R5RWwuYXBwZW5kQ2hpbGQodGhpcy5mbG9hdGluZ0VsKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuU3ViTm9kZShsaW5rTm9kZTogSFRNTExpbmtFbGVtZW50LCBpdGVtOiBOYXYpOiBIVE1MVUxpc3RFbGVtZW50IHtcbiAgICBjb25zdCBpZCA9IGBfc2lkZWJhci1uYXYtJHtpdGVtLl9faWR9YDtcbiAgICBjb25zdCBub2RlID0gbGlua05vZGUubmV4dEVsZW1lbnRTaWJsaW5nLmNsb25lTm9kZShcbiAgICAgIHRydWUsXG4gICAgKSBhcyBIVE1MVUxpc3RFbGVtZW50O1xuICAgIG5vZGUuaWQgPSBpZDtcbiAgICBub2RlLmNsYXNzTGlzdC5hZGQoRkxPQVRJTkdDTFMpO1xuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdtb3VzZWxlYXZlJyxcbiAgICAgICgpID0+IHtcbiAgICAgICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKFNIT1dDTFMpO1xuICAgICAgfSxcbiAgICAgIGZhbHNlLFxuICAgICk7XG4gICAgdGhpcy5mbG9hdGluZ0VsLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgcHJpdmF0ZSBoaWRlQWxsKCkge1xuICAgIGNvbnN0IGFsbE5vZGUgPSB0aGlzLmZsb2F0aW5nRWwucXVlcnlTZWxlY3RvckFsbCgnLicgKyBGTE9BVElOR0NMUyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxOb2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhbGxOb2RlW2ldLmNsYXNzTGlzdC5yZW1vdmUoU0hPV0NMUyk7XG4gICAgfVxuICB9XG5cbiAgLy8gY2FsY3VsYXRlIHRoZSBub2RlIHBvc2l0aW9uIHZhbHVlcy5cbiAgcHJpdmF0ZSBjYWxQb3MobGlua05vZGU6IEhUTUxMaW5rRWxlbWVudCwgbm9kZTogSFRNTFVMaXN0RWxlbWVudCkge1xuICAgIGNvbnN0IHJlY3QgPSBsaW5rTm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAvLyBidWc6IGh0dHBzOi8vZGV2ZWxvcGVyLm1pY3Jvc29mdC5jb20vZW4tdXMvbWljcm9zb2Z0LWVkZ2UvcGxhdGZvcm0vaXNzdWVzLzE0NzIxMDE1L1xuICAgIGNvbnN0IHNjcm9sbFRvcCA9IE1hdGgubWF4KFxuICAgICAgdGhpcy5kb2MuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCxcbiAgICAgIHRoaXMuYm9keUVsLnNjcm9sbFRvcCxcbiAgICApO1xuICAgIGNvbnN0IGRvY0hlaWdodCA9IE1hdGgubWF4KFxuICAgICAgdGhpcy5kb2MuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCxcbiAgICAgIHRoaXMuYm9keUVsLmNsaWVudEhlaWdodCxcbiAgICApO1xuICAgIGxldCBvZmZzZXRIZWlnaHQgPSAwO1xuICAgIGlmIChkb2NIZWlnaHQgPCByZWN0LnRvcCArIG5vZGUuY2xpZW50SGVpZ2h0KSB7XG4gICAgICBvZmZzZXRIZWlnaHQgPSByZWN0LnRvcCArIG5vZGUuY2xpZW50SGVpZ2h0IC0gZG9jSGVpZ2h0O1xuICAgIH1cbiAgICBub2RlLnN0eWxlLnRvcCA9IGAke3JlY3QudG9wICsgc2Nyb2xsVG9wIC0gb2Zmc2V0SGVpZ2h0fXB4YDtcbiAgICBub2RlLnN0eWxlLmxlZnQgPSBgJHtyZWN0LnJpZ2h0ICsgNX1weGA7XG4gIH1cblxuICBzaG93U3ViTWVudShlOiBNb3VzZUV2ZW50LCBpdGVtOiBOYXYpIHtcbiAgICBpZiAodGhpcy5jb2xsYXBzZWQgIT09IHRydWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGxpbmtOb2RlID0gZS50YXJnZXQgYXMgRWxlbWVudDtcbiAgICB0aGlzLmdlbkZsb2F0aW5nQ29udGFpbmVyKCk7XG4gICAgY29uc3Qgc3ViTm9kZSA9IHRoaXMuZ2VuU3ViTm9kZShsaW5rTm9kZSBhcyBIVE1MTGlua0VsZW1lbnQsIGl0ZW0pO1xuICAgIHRoaXMuaGlkZUFsbCgpO1xuICAgIHN1Yk5vZGUuY2xhc3NMaXN0LmFkZChTSE9XQ0xTKTtcbiAgICB0aGlzLmNhbFBvcyhsaW5rTm9kZSBhcyBIVE1MTGlua0VsZW1lbnQsIHN1Yk5vZGUpO1xuICB9XG5cbiAgb25TZWxlY3QoaXRlbTogTWVudSkge1xuICAgIHRoaXMuc2VsZWN0LmVtaXQoaXRlbSk7XG4gIH1cblxuICB0b2dnbGVPcGVuKGl0ZW06IE5hdikge1xuICAgIHRoaXMubWVudVNydi52aXNpdCgoaSwgcCkgPT4ge1xuICAgICAgaWYgKGkgIT09IGl0ZW0pIGkuX29wZW4gPSBmYWxzZTtcbiAgICB9KTtcbiAgICBsZXQgcEl0ZW0gPSBpdGVtLl9fcGFyZW50O1xuICAgIHdoaWxlIChwSXRlbSkge1xuICAgICAgcEl0ZW0uX29wZW4gPSB0cnVlO1xuICAgICAgcEl0ZW0gPSBwSXRlbS5fX3BhcmVudDtcbiAgICB9XG4gICAgaXRlbS5fb3BlbiA9ICFpdGVtLl9vcGVuO1xuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIF9jbGljaygpIHtcbiAgICBpZiAodGhpcy5pc1BhZCAmJiB0aGlzLmNvbGxhcHNlZCkge1xuICAgICAgdGhpcy5vcGVuQXNpZGUoZmFsc2UpO1xuICAgICAgdGhpcy5oaWRlQWxsKCk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6Y2xpY2snKVxuICBfZG9jQ2xpY2soKSB7XG4gICAgdGhpcy5oaWRlQWxsKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmNoYW5nZSQudW5zdWJzY3JpYmUoKTtcbiAgICBpZiAodGhpcy5yb3V0ZSQpIHRoaXMucm91dGUkLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5jbGVhckZsb2F0aW5nQ29udGFpbmVyKCk7XG4gIH1cblxuICAvLyAjcmVnaW9uIFVuZGVyIHBhZFxuXG4gIHByaXZhdGUgZ2V0IGlzUGFkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB3aW5kb3cuaW5uZXJXaWR0aCA8IDc2ODtcbiAgfVxuXG4gIHByaXZhdGUgcm91dGUkOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgaW5zdGFsbFVuZGVyUGFkKCkge1xuICAgIGlmICghdGhpcy5hdXRvQ2xvc2VVbmRlclBhZCkgcmV0dXJuO1xuICAgIHRoaXMucm91dGUkID0gPGFueT4oXG4gICAgICB0aGlzLnJvdXRlci5ldmVudHNcbiAgICAgICAgLnBpcGUoZmlsdGVyKGUgPT4gZSBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpKVxuICAgICAgICAuc3Vic2NyaWJlKHMgPT4gdGhpcy51bmRlclBhZCgpKVxuICAgICk7XG4gICAgdGhpcy51bmRlclBhZCgpO1xuICB9XG5cbiAgcHJpdmF0ZSB1bmRlclBhZCgpIHtcbiAgICBpZiAodGhpcy5pc1BhZCAmJiAhdGhpcy5jb2xsYXBzZWQpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5vcGVuQXNpZGUodHJ1ZSkpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgb3BlbkFzaWRlKHN0YXR1czogYm9vbGVhbikge1xuICAgIHRoaXMuc2V0dGluZ3Muc2V0TGF5b3V0KCdjb2xsYXBzZWQnLCBzdGF0dXMpO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTmdab3Jyb0FudGRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkJztcbmltcG9ydCB7IERlbG9uVXRpbE1vZHVsZSB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuaW1wb3J0IHsgU2lkZWJhck5hdkNvbXBvbmVudCB9IGZyb20gJy4vc2lkZWJhci1uYXYuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgUm91dGVyTW9kdWxlLCBOZ1pvcnJvQW50ZE1vZHVsZSwgRGVsb25VdGlsTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbU2lkZWJhck5hdkNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtTaWRlYmFyTmF2Q29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgU2lkZWJhck5hdk1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7IG5nTW9kdWxlOiBTaWRlYmFyTmF2TW9kdWxlLCBwcm92aWRlcnM6IFtdIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJ0c2xpYl8xLl9fZGVjb3JhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0lBdUJNLE9BQU8sR0FBRyw0QkFBNEI7O0lBQ3RDLFdBQVcsR0FBRyx1QkFBdUI7QUFFM0M7SUFvQkUsNkJBQ1UsT0FBb0IsRUFDcEIsUUFBeUIsRUFDekIsTUFBYyxFQUNkLGdCQUFrQyxFQUNsQyxNQUFpQixFQUNqQixFQUFxQixFQUNILEdBQVE7UUFOMUIsWUFBTyxHQUFQLE9BQU8sQ0FBYTtRQUNwQixhQUFRLEdBQVIsUUFBUSxDQUFpQjtRQUN6QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ2pCLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBQ0gsUUFBRyxHQUFILEdBQUcsQ0FBSztRQWhCcEMsU0FBSSxHQUFVLEVBQUUsQ0FBQztRQUlqQixzQkFBaUIsR0FBRyxJQUFJLENBQUM7UUFHaEIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7S0FVdkM7SUFFSixzQkFBSSwwQ0FBUzs7OztRQUFiO1lBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7U0FDdkM7OztPQUFBOzs7O0lBRUQsc0NBQVE7OztJQUFSO1FBQUEsaUJBU0M7UUFSQyxJQUFJ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