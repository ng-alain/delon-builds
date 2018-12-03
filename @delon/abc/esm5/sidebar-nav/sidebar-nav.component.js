/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Renderer2, Inject, HostListener, ChangeDetectionStrategy, ChangeDetectorRef, Input, Output, EventEmitter, } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DOCUMENT, LocationStrategy } from '@angular/common';
import { filter } from 'rxjs/operators';
import { MenuService, SettingsService } from '@delon/theme';
import { InputBoolean } from '@delon/util';
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
                    changeDetection: ChangeDetectionStrategy.OnPush
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
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], SidebarNavComponent.prototype, "autoCloseUnderPad", void 0);
    return SidebarNavComponent;
}());
export { SidebarNavComponent };
if (false) {
    /** @type {?} */
    SidebarNavComponent.prototype.bodyEl;
    /** @type {?} */
    SidebarNavComponent.prototype.change$;
    /**
     * \@inner
     * @type {?}
     */
    SidebarNavComponent.prototype.floatingEl;
    /** @type {?} */
    SidebarNavComponent.prototype.list;
    /** @type {?} */
    SidebarNavComponent.prototype.autoCloseUnderPad;
    /** @type {?} */
    SidebarNavComponent.prototype.select;
    /** @type {?} */
    SidebarNavComponent.prototype.route$;
    /** @type {?} */
    SidebarNavComponent.prototype.menuSrv;
    /** @type {?} */
    SidebarNavComponent.prototype.settings;
    /** @type {?} */
    SidebarNavComponent.prototype.router;
    /** @type {?} */
    SidebarNavComponent.prototype.locationStrategy;
    /** @type {?} */
    SidebarNavComponent.prototype.render;
    /** @type {?} */
    SidebarNavComponent.prototype.cd;
    /** @type {?} */
    SidebarNavComponent.prototype.doc;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci1uYXYuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9zaWRlYmFyLW5hdi8iLCJzb3VyY2VzIjpbInNpZGViYXItbmF2LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsU0FBUyxFQUNULE1BQU0sRUFHTixZQUFZLEVBQ1osdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksR0FDYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUU3RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEMsT0FBTyxFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQVEsTUFBTSxjQUFjLENBQUM7QUFDbEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGFBQWEsQ0FBQzs7SUFJckMsT0FBTyxHQUFHLDRCQUE0Qjs7SUFDdEMsV0FBVyxHQUFHLHVCQUF1QjtBQUUzQztJQW1CRSw2QkFDVSxPQUFvQixFQUNwQixRQUF5QixFQUN6QixNQUFjLEVBQ2QsZ0JBQWtDLEVBQ2xDLE1BQWlCLEVBQ2pCLEVBQXFCLEVBQ0gsR0FBUTtRQU4xQixZQUFPLEdBQVAsT0FBTyxDQUFhO1FBQ3BCLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBQ3pCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLFdBQU0sR0FBTixNQUFNLENBQVc7UUFDakIsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFDSCxRQUFHLEdBQUgsR0FBRyxDQUFLO1FBaEJwQyxTQUFJLEdBQVUsRUFBRSxDQUFDO1FBSWpCLHNCQUFpQixHQUFH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QUFJLENBQUMsRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDO1NBQ3hDO0lBQ0gsQ0FBQzs7Ozs7SUFFTyx1Q0FBUzs7OztJQUFqQixVQUFrQixNQUFlO1FBQy9CLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUMvQyxDQUFDOztnQkF2TkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2Qiw2M01BQTJDO29CQUMzQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7Ozs7Z0JBWlEsV0FBVztnQkFBRSxlQUFlO2dCQUw1QixNQUFNO2dCQUNJLGdCQUFnQjtnQkFaakMsU0FBUztnQkFNVCxpQkFBaUI7Z0RBNENkLE1BQU0sU0FBQyxRQUFROzs7b0NBZGpCLEtBQUs7eUJBSUwsTUFBTTt5QkEySk4sWUFBWSxTQUFDLE9BQU87NEJBUXBCLFlBQVksU0FBQyxnQkFBZ0I7O0lBcks5QjtRQURDLFlBQVksRUFBRTs7a0VBQ1U7SUE0TTNCLDBCQUFDO0NBQUEsQUExTkQsSUEwTkM7U0FyTlksbUJBQW1COzs7SUFDOUIscUNBQWdDOztJQUNoQyxzQ0FBOEI7Ozs7O0lBRTlCLHlDQUEyQjs7SUFDM0IsbUNBQWlCOztJQUVqQixnREFFeUI7O0lBRXpCLHFDQUMyQzs7SUFtTDNDLHFDQUE2Qjs7SUFoTDNCLHNDQUE0Qjs7SUFDNUIsdUNBQWlDOztJQUNqQyxxQ0FBc0I7O0lBQ3RCLCtDQUEwQzs7SUFDMUMscUNBQXlCOztJQUN6QixpQ0FBNkI7O0lBQzdCLGtDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgUmVuZGVyZXIyLFxuICBJbmplY3QsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxuICBIb3N0TGlzdGVuZXIsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgTmF2aWdhdGlvbkVuZCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBET0NVTUVOVCwgTG9jYXRpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgTWVudVNlcnZpY2UsIFNldHRpbmdzU2VydmljZSwgTWVudSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbmltcG9ydCB7IE5hdiB9IGZyb20gJy4vc2lkZWJhci1uYXYudHlwZXMnO1xuXG5jb25zdCBTSE9XQ0xTID0gJ3NpZGViYXItbmF2X19mbG9hdGluZy1zaG93JztcbmNvbnN0IEZMT0FUSU5HQ0xTID0gJ3NpZGViYXItbmF2X19mbG9hdGluZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NpZGViYXItbmF2JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NpZGViYXItbmF2LmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFNpZGViYXJOYXZDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgYm9keUVsOiBIVE1MQm9keUVsZW1lbnQ7XG4gIHByaXZhdGUgY2hhbmdlJDogU3Vic2NyaXB0aW9uO1xuICAvKiogQGlubmVyICovXG4gIGZsb2F0aW5nRWw6IEhUTUxEaXZFbGVtZW50O1xuICBsaXN0OiBOYXZbXSA9IFtdO1xuXG4gIEBJbnB1dCgpXG4gIEBJbnB1dEJvb2xlYW4oKVxuICBhdXRvQ2xvc2VVbmRlclBhZCA9IHRydWU7XG5cbiAgQE91dHB1dCgpXG4gIHJlYWRvbmx5IHNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8TWVudT4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG1lbnVTcnY6IE1lbnVTZXJ2aWNlLFxuICAgIHByaXZhdGUgc2V0dGluZ3M6IFNldHRpbmdzU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgbG9jYXRpb25TdHJhdGVneTogTG9jYXRpb25TdHJhdGVneSxcbiAgICBwcml2YXRlIHJlbmRlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBhbnksXG4gICkge31cblxuICBnZXQgY29sbGFwc2VkKCkge1xuICAgIHJldHVybiB0aGlzLnNldHRpbmdzLmxheW91dC5jb2xsYXBzZWQ7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmJvZHlFbCA9IHRoaXMuZG9jLnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICB0aGlzLm1lbnVTcnYub3BlbmVkQnlVcmwodGhpcy5yb3V0ZXIudXJsKTtcbiAgICB0aGlzLmdlbkZsb2F0aW5nQ29udGFpbmVyKCk7XG4gICAgdGhpcy5jaGFuZ2UkID0gPGFueT50aGlzLm1lbnVTcnYuY2hhbmdlLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgdGhpcy5saXN0ID0gcmVzO1xuICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gICAgdGhpcy5pbnN0YWxsVW5kZXJQYWQoKTtcbiAgfVxuXG4gIHByaXZhdGUgZmxvYXRpbmdBcmVhQ2xpY2tIYW5kbGUoZTogTW91c2VFdmVudCkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY29uc3QgbGlua05vZGUgPSBlLnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICBpZiAobGlua05vZGUubm9kZU5hbWUgIT09ICdBJykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBsZXQgdXJsOiBzdHJpbmcgPSBsaW5rTm9kZS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICBpZiAodXJsICYmIHVybC5zdGFydHNXaXRoKCcjJykpIHtcbiAgICAgIHVybCA9IHVybC5zbGljZSgxKTtcbiAgICB9XG4gICAgaWYgKGxpbmtOb2RlLmRhdGFzZXQhLnR5cGUgPT09ICdleHRlcm5hbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIOWmguaenOmFjee9ruS6hmJhc2hIcmVmIOWImeWOu+aOiWJhc2VIcmVmXG4gICAgY29uc3QgYmFzZUhlcmYgPSB0aGlzLmxvY2F0aW9uU3RyYXRlZ3kuZ2V0QmFzZUhyZWYoKTtcbiAgICBpZiAoYmFzZUhlcmYpIHtcbiAgICAgIHVybCA9IHVybC5zbGljZShiYXNlSGVyZi5sZW5ndGgpO1xuICAgIH1cbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHVybCk7XG4gICAgdGhpcy5vblNlbGVjdCh0aGlzLm1lbnVTcnYuZ2V0UGF0aEJ5VXJsKHVybCkucG9wKCkpO1xuICAgIHRoaXMuaGlkZUFsbCgpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIGNsZWFyRmxvYXRpbmdDb250YWluZXIoKSB7XG4gICAgaWYgKCF0aGlzLmZsb2F0aW5nRWwpIHJldHVybjtcbiAgICB0aGlzLmZsb2F0aW5nRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICdjbGljaycsXG4gICAgICB0aGlzLmZsb2F0aW5nQXJlYUNsaWNrSGFuZGxlLmJpbmQodGhpcyksXG4gICAgKTtcbiAgICAvLyBmaXggaWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9uZy1hbGFpbi9kZWxvbi9pc3N1ZXMvNTJcbiAgICBpZiAodGhpcy5mbG9hdGluZ0VsLmhhc093blByb3BlcnR5KCdyZW1vdmUnKSkge1xuICAgICAgdGhpcy5mbG9hdGluZ0VsLnJlbW92ZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5mbG9hdGluZ0VsLnBhcmVudE5vZGUpIHtcbiAgICAgIHRoaXMuZmxvYXRpbmdFbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZmxvYXRpbmdFbCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZW5GbG9hdGluZ0NvbnRhaW5lcigpIHtcbiAgICB0aGlzLmNsZWFyRmxvYXRpbmdDb250YWluZXIoKTtcbiAgICB0aGlzLmZsb2F0aW5nRWwgPSB0aGlzLnJlbmRlci5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmZsb2F0aW5nRWwuY2xhc3NMaXN0LmFkZChGTE9BVElOR0NMUyArICctY29udGFpbmVyJyk7XG4gICAgdGhpcy5mbG9hdGluZ0VsLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAnY2xpY2snLFxuICAgICAgdGhpcy5mbG9hdGluZ0FyZWFDbGlja0hhbmRsZS5iaW5kKHRoaXMpLFxuICAgICAgZmFsc2UsXG4gICAgKTtcbiAgICB0aGlzLmJvZHlFbC5hcHBlbmRDaGlsZCh0aGlzLmZsb2F0aW5nRWwpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5TdWJOb2RlKGxpbmtOb2RlOiBIVE1MTGlua0VsZW1lbnQsIGl0ZW06IE5hdik6IEhUTUxVTGlzdEVsZW1lbnQge1xuICAgIGNvbnN0IGlkID0gYF9zaWRlYmFyLW5hdi0ke2l0ZW0uX19pZH1gO1xuICAgIGNvbnN0IG5vZGUgPSBsaW5rTm9kZS5uZXh0RWxlbWVudFNpYmxpbmcuY2xvbmVOb2RlKFxuICAgICAgdHJ1ZSxcbiAgICApIGFzIEhUTUxVTGlzdEVsZW1lbnQ7XG4gICAgbm9kZS5pZCA9IGlkO1xuICAgIG5vZGUuY2xhc3NMaXN0LmFkZChGTE9BVElOR0NMUyk7XG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ21vdXNlbGVhdmUnLFxuICAgICAgKCkgPT4ge1xuICAgICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoU0hPV0NMUyk7XG4gICAgICB9LFxuICAgICAgZmFsc2UsXG4gICAgKTtcbiAgICB0aGlzLmZsb2F0aW5nRWwuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBwcml2YXRlIGhpZGVBbGwoKSB7XG4gICAgY29uc3QgYWxsTm9kZSA9IHRoaXMuZmxvYXRpbmdFbC5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIEZMT0FUSU5HQ0xTKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbE5vZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFsbE5vZGVbaV0uY2xhc3NMaXN0LnJlbW92ZShTSE9XQ0xTKTtcbiAgICB9XG4gIH1cblxuICAvLyBjYWxjdWxhdGUgdGhlIG5vZGUgcG9zaXRpb24gdmFsdWVzLlxuICBwcml2YXRlIGNhbFBvcyhsaW5rTm9kZTogSFRNTExpbmtFbGVtZW50LCBub2RlOiBIVE1MVUxpc3RFbGVtZW50KSB7XG4gICAgY29uc3QgcmVjdCA9IGxpbmtOb2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIC8vIGJ1ZzogaHR0cHM6Ly9kZXZlbG9wZXIubWljcm9zb2Z0LmNvbS9lbi11cy9taWNyb3NvZnQtZWRnZS9wbGF0Zm9ybS9pc3N1ZXMvMTQ3MjEwMTUvXG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gTWF0aC5tYXgoXG4gICAgICB0aGlzLmRvYy5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wLFxuICAgICAgdGhpcy5ib2R5RWwuc2Nyb2xsVG9wLFxuICAgICk7XG4gICAgY29uc3QgZG9jSGVpZ2h0ID0gTWF0aC5tYXgoXG4gICAgICB0aGlzLmRvYy5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LFxuICAgICAgdGhpcy5ib2R5RWwuY2xpZW50SGVpZ2h0LFxuICAgICk7XG4gICAgbGV0IG9mZnNldEhlaWdodCA9IDA7XG4gICAgaWYgKGRvY0hlaWdodCA8IHJlY3QudG9wICsgbm9kZS5jbGllbnRIZWlnaHQpIHtcbiAgICAgIG9mZnNldEhlaWdodCA9IHJlY3QudG9wICsgbm9kZS5jbGllbnRIZWlnaHQgLSBkb2NIZWlnaHQ7XG4gICAgfVxuICAgIG5vZGUuc3R5bGUudG9wID0gYCR7cmVjdC50b3AgKyBzY3JvbGxUb3AgLSBvZmZzZXRIZWlnaHR9cHhgO1xuICAgIG5vZGUuc3R5bGUubGVmdCA9IGAke3JlY3QucmlnaHQgKyA1fXB4YDtcbiAgfVxuXG4gIHNob3dTdWJNZW51KGU6IE1vdXNlRXZlbnQsIGl0ZW06IE5hdikge1xuICAgIGlmICh0aGlzLmNvbGxhcHNlZCAhPT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgbGlua05vZGUgPSBlLnRhcmdldCBhcyBFbGVtZW50O1xuICAgIHRoaXMuZ2VuRmxvYXRpbmdDb250YWluZXIoKTtcbiAgICBjb25zdCBzdWJOb2RlID0gdGhpcy5nZW5TdWJOb2RlKGxpbmtOb2RlIGFzIEhUTUxMaW5rRWxlbWVudCwgaXRlbSk7XG4gICAgdGhpcy5oaWRlQWxsKCk7XG4gICAgc3ViTm9kZS5jbGFzc0xpc3QuYWRkKFNIT1dDTFMpO1xuICAgIHRoaXMuY2FsUG9zKGxpbmtOb2RlIGFzIEhUTUxMaW5rRWxlbWVudCwgc3ViTm9kZSk7XG4gIH1cblxuICBvblNlbGVjdChpdGVtOiBNZW51KSB7XG4gICAgdGhpcy5zZWxlY3QuZW1pdChpdGVtKTtcbiAgfVxuXG4gIHRvZ2dsZU9wZW4oaXRlbTogTmF2KSB7XG4gICAgdGhpcy5tZW51U3J2LnZpc2l0KChpLCBwKSA9PiB7XG4gICAgICBpZiAoaSAhPT0gaXRlbSkgaS5fb3BlbiA9IGZhbHNlO1xuICAgIH0pO1xuICAgIGxldCBwSXRlbSA9IGl0ZW0uX19wYXJlbnQ7XG4gICAgd2hpbGUgKHBJdGVtKSB7XG4gICAgICBwSXRlbS5fb3BlbiA9IHRydWU7XG4gICAgICBwSXRlbSA9IHBJdGVtLl9fcGFyZW50O1xuICAgIH1cbiAgICBpdGVtLl9vcGVuID0gIWl0ZW0uX29wZW47XG4gICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgX2NsaWNrKCkge1xuICAgIGlmICh0aGlzLmlzUGFkICYmIHRoaXMuY29sbGFwc2VkKSB7XG4gICAgICB0aGlzLm9wZW5Bc2lkZShmYWxzZSk7XG4gICAgICB0aGlzLmhpZGVBbGwoKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDpjbGljaycpXG4gIF9kb2NDbGljaygpIHtcbiAgICB0aGlzLmhpZGVBbGwoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuY2hhbmdlJC51bnN1YnNjcmliZSgpO1xuICAgIGlmICh0aGlzLnJvdXRlJCkgdGhpcy5yb3V0ZSQudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLmNsZWFyRmxvYXRpbmdDb250YWluZXIoKTtcbiAgfVxuXG4gIC8vICNyZWdpb24gVW5kZXIgcGFkXG5cbiAgcHJpdmF0ZSBnZXQgaXNQYWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHdpbmRvdy5pbm5lcldpZHRoIDwgNzY4O1xuICB9XG5cbiAgcHJpdmF0ZSByb3V0ZSQ6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBpbnN0YWxsVW5kZXJQYWQoKSB7XG4gICAgaWYgKCF0aGlzLmF1dG9DbG9zZVVuZGVyUGFkKSByZXR1cm47XG4gICAgdGhpcy5yb3V0ZSQgPSA8YW55PihcbiAgICAgIHRoaXMucm91dGVyLmV2ZW50c1xuICAgICAgICAucGlwZShmaWx0ZXIoZSA9PiBlIGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCkpXG4gICAgICAgIC5zdWJzY3JpYmUocyA9PiB0aGlzLnVuZGVyUGFkKCkpXG4gICAgKTtcbiAgICB0aGlzLnVuZGVyUGFkKCk7XG4gIH1cblxuICBwcml2YXRlIHVuZGVyUGFkKCkge1xuICAgIGlmICh0aGlzLmlzUGFkICYmICF0aGlzLmNvbGxhcHNlZCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLm9wZW5Bc2lkZSh0cnVlKSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBvcGVuQXNpZGUoc3RhdHVzOiBib29sZWFuKSB7XG4gICAgdGhpcy5zZXR0aW5ncy5zZXRMYXlvdXQoJ2NvbGxhcHNlZCcsIHN0YXR1cyk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG59XG4iXX0=