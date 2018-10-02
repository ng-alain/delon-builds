/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci1uYXYuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9zaWRlYmFyLW5hdi8iLCJzb3VyY2VzIjpbInNpZGViYXItbmF2LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsU0FBUyxFQUNULE1BQU0sRUFHTixZQUFZLEVBQ1osdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksR0FDYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUU3RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEMsT0FBTyxFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQVEsTUFBTSxjQUFjLENBQUM7QUFDbEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGFBQWEsQ0FBQzs7QUFJM0MsSUFBTSxPQUFPLEdBQUcsNEJBQTRCLENBQUM7O0FBQzdDLElBQU0sV0FBVyxHQUFHLHVCQUF1QixDQUFDOztJQXNCMUMsNkJBQ1UsU0FDQSxVQUNBLFFBQ0Esa0JBQ0EsUUFDQSxJQUNrQixHQUFRO1FBTjFCLFlBQU8sR0FBUCxPQUFPO1FBQ1AsYUFBUSxHQUFSLFFBQVE7UUFDUixXQUFNLEdBQU4sTUFBTTtRQUNOLHFCQUFnQixHQUFoQixnQkFBZ0I7UUFDaEIsV0FBTSxHQUFOLE1BQU07UUFDTixPQUFFLEdBQUYsRUFBRTtRQUNnQixRQUFHLEdBQUgsR0FBRyxDQUFLO29CQWhCdEIsRUFBRTtpQ0FJSSxJQUFJO3NCQUdmLElBQUksWUFBWSxFQUFRO0tBVTdCO0lBRUosc0JBQUksMENBQVM7Ozs7UUFBYjtZQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEs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ZCxNQUFNLFNBQUMsUUFBUTs7O29DQWRqQixLQUFLO3lCQUlMLE1BQU07eUJBMkpOLFlBQVksU0FBQyxPQUFPOzRCQVFwQixZQUFZLFNBQUMsZ0JBQWdCOzs7UUF0SzdCLFlBQVksRUFBRTs7OzhCQXhDakI7O1NBZ0NhLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIFJlbmRlcmVyMixcclxuICBJbmplY3QsXHJcbiAgT25Jbml0LFxyXG4gIE9uRGVzdHJveSxcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyLCBOYXZpZ2F0aW9uRW5kIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgRE9DVU1FTlQsIExvY2F0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgTWVudVNlcnZpY2UsIFNldHRpbmdzU2VydmljZSwgTWVudSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ0BkZWxvbi91dGlsJztcclxuXHJcbmltcG9ydCB7IE5hdiB9IGZyb20gJy4vc2lkZWJhci1uYXYudHlwZXMnO1xyXG5cclxuY29uc3QgU0hPV0NMUyA9ICdzaWRlYmFyLW5hdl9fZmxvYXRpbmctc2hvdyc7XHJcbmNvbnN0IEZMT0FUSU5HQ0xTID0gJ3NpZGViYXItbmF2X19mbG9hdGluZyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NpZGViYXItbmF2JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc2lkZWJhci1uYXYuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2lkZWJhck5hdkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBwcml2YXRlIGJvZHlFbDogSFRNTEJvZHlFbGVtZW50O1xyXG4gIHByaXZhdGUgY2hhbmdlJDogU3Vic2NyaXB0aW9uO1xyXG4gIC8qKiBAaW5uZXIgKi9cclxuICBmbG9hdGluZ0VsOiBIVE1MRGl2RWxlbWVudDtcclxuICBsaXN0OiBOYXZbXSA9IFtdO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIEBJbnB1dEJvb2xlYW4oKVxyXG4gIGF1dG9DbG9zZVVuZGVyUGFkID0gdHJ1ZTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgc2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxNZW51PigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgbWVudVNydjogTWVudVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHNldHRpbmdzOiBTZXR0aW5nc1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSBsb2NhdGlvblN0cmF0ZWd5OiBMb2NhdGlvblN0cmF0ZWd5LFxyXG4gICAgcHJpdmF0ZSByZW5kZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IGFueSxcclxuICApIHt9XHJcblxyXG4gIGdldCBjb2xsYXBzZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zZXR0aW5ncy5sYXlvdXQuY29sbGFwc2VkO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmJvZHlFbCA9IHRoaXMuZG9jLnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICAgIHRoaXMubWVudVNydi5vcGVuZWRCeVVybCh0aGlzLnJvdXRlci51cmwpO1xyXG4gICAgdGhpcy5nZW5GbG9hdGluZ0NvbnRhaW5lcigpO1xyXG4gICAgdGhpcy5jaGFuZ2UkID0gPGFueT50aGlzLm1lbnVTcnYuY2hhbmdlLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICB0aGlzLmxpc3QgPSByZXM7XHJcbiAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmluc3RhbGxVbmRlclBhZCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmbG9hdGluZ0FyZWFDbGlja0hhbmRsZShlOiBNb3VzZUV2ZW50KSB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgY29uc3QgbGlua05vZGUgPSBlLnRhcmdldCBhcyBIVE1MRWxlbWVudDtcclxuICAgIGlmIChsaW5rTm9kZS5ub2RlTmFtZSAhPT0gJ0EnKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGxldCB1cmw6IHN0cmluZyA9IGxpbmtOb2RlLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xyXG4gICAgaWYgKHVybCAmJiB1cmwuc3RhcnRzV2l0aCgnIycpKSB7XHJcbiAgICAgIHVybCA9IHVybC5zbGljZSgxKTtcclxuICAgIH1cclxuICAgIGlmIChsaW5rTm9kZS5kYXRhc2V0IS50eXBlID09PSAnZXh0ZXJuYWwnKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOWmguaenOmFjee9ruS6hmJhc2hIcmVmIOWImeWOu+aOiWJhc2VIcmVmXHJcbiAgICBjb25zdCBiYXNlSGVyZiA9IHRoaXMubG9jYXRpb25TdHJhdGVneS5nZXRCYXNlSHJlZigpO1xyXG4gICAgaWYgKGJhc2VIZXJmKSB7XHJcbiAgICAgIHVybCA9IHVybC5zbGljZShiYXNlSGVyZi5sZW5ndGgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCh1cmwpO1xyXG4gICAgdGhpcy5vblNlbGVjdCh0aGlzLm1lbnVTcnYuZ2V0UGF0aEJ5VXJsKHVybCkucG9wKCkpO1xyXG4gICAgdGhpcy5oaWRlQWxsKCk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNsZWFyRmxvYXRpbmdDb250YWluZXIoKSB7XHJcbiAgICBpZiAoIXRoaXMuZmxvYXRpbmdFbCkgcmV0dXJuO1xyXG4gICAgdGhpcy5mbG9hdGluZ0VsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICdjbGljaycsXHJcbiAgICAgIHRoaXMuZmxvYXRpbmdBcmVhQ2xpY2tIYW5kbGUuYmluZCh0aGlzKSxcclxuICAgICk7XHJcbiAgICAvLyBmaXggaWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9uZy1hbGFpbi9kZWxvbi9pc3N1ZXMvNTJcclxuICAgIGlmICh0aGlzLmZsb2F0aW5nRWwuaGFzT3duUHJvcGVydHkoJ3JlbW92ZScpKSB7XHJcbiAgICAgIHRoaXMuZmxvYXRpbmdFbC5yZW1vdmUoKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5mbG9hdGluZ0VsLnBhcmVudE5vZGUpIHtcclxuICAgICAgdGhpcy5mbG9hdGluZ0VsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5mbG9hdGluZ0VsKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2VuRmxvYXRpbmdDb250YWluZXIoKSB7XHJcbiAgICB0aGlzLmNsZWFyRmxvYXRpbmdDb250YWluZXIoKTtcclxuICAgIHRoaXMuZmxvYXRpbmdFbCA9IHRoaXMucmVuZGVyLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGhpcy5mbG9hdGluZ0VsLmNsYXNzTGlzdC5hZGQoRkxPQVRJTkdDTFMgKyAnLWNvbnRhaW5lcicpO1xyXG4gICAgdGhpcy5mbG9hdGluZ0VsLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICdjbGljaycsXHJcbiAgICAgIHRoaXMuZmxvYXRpbmdBcmVhQ2xpY2tIYW5kbGUuYmluZCh0aGlzKSxcclxuICAgICAgZmFsc2UsXHJcbiAgICApO1xyXG4gICAgdGhpcy5ib2R5RWwuYXBwZW5kQ2hpbGQodGhpcy5mbG9hdGluZ0VsKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2VuU3ViTm9kZShsaW5rTm9kZTogSFRNTExpbmtFbGVtZW50LCBpdGVtOiBOYXYpOiBIVE1MVUxpc3RFbGVtZW50IHtcclxuICAgIGNvbnN0IGlkID0gYF9zaWRlYmFyLW5hdi0ke2l0ZW0uX19pZH1gO1xyXG4gICAgY29uc3Qgbm9kZSA9IGxpbmtOb2RlLm5leHRFbGVtZW50U2libGluZy5jbG9uZU5vZGUoXHJcbiAgICAgIHRydWUsXHJcbiAgICApIGFzIEhUTUxVTGlzdEVsZW1lbnQ7XHJcbiAgICBub2RlLmlkID0gaWQ7XHJcbiAgICBub2RlLmNsYXNzTGlzdC5hZGQoRkxPQVRJTkdDTFMpO1xyXG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAnbW91c2VsZWF2ZScsXHJcbiAgICAgICgpID0+IHtcclxuICAgICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoU0hPV0NMUyk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGZhbHNlLFxyXG4gICAgKTtcclxuICAgIHRoaXMuZmxvYXRpbmdFbC5hcHBlbmRDaGlsZChub2RlKTtcclxuICAgIHJldHVybiBub2RlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoaWRlQWxsKCkge1xyXG4gICAgY29uc3QgYWxsTm9kZSA9IHRoaXMuZmxvYXRpbmdFbC5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIEZMT0FUSU5HQ0xTKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsTm9kZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBhbGxOb2RlW2ldLmNsYXNzTGlzdC5yZW1vdmUoU0hPV0NMUyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBjYWxjdWxhdGUgdGhlIG5vZGUgcG9zaXRpb24gdmFsdWVzLlxyXG4gIHByaXZhdGUgY2FsUG9zKGxpbmtOb2RlOiBIVE1MTGlua0VsZW1lbnQsIG5vZGU6IEhUTUxVTGlzdEVsZW1lbnQpIHtcclxuICAgIGNvbnN0IHJlY3QgPSBsaW5rTm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIC8vIGJ1ZzogaHR0cHM6Ly9kZXZlbG9wZXIubWljcm9zb2Z0LmNvbS9lbi11cy9taWNyb3NvZnQtZWRnZS9wbGF0Zm9ybS9pc3N1ZXMvMTQ3MjEwMTUvXHJcbiAgICBjb25zdCBzY3JvbGxUb3AgPSBNYXRoLm1heChcclxuICAgICAgdGhpcy5kb2MuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCxcclxuICAgICAgdGhpcy5ib2R5RWwuc2Nyb2xsVG9wLFxyXG4gICAgKTtcclxuICAgIGNvbnN0IGRvY0hlaWdodCA9IE1hdGgubWF4KFxyXG4gICAgICB0aGlzLmRvYy5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LFxyXG4gICAgICB0aGlzLmJvZHlFbC5jbGllbnRIZWlnaHQsXHJcbiAgICApO1xyXG4gICAgbGV0IG9mZnNldEhlaWdodCA9IDA7XHJcbiAgICBpZiAoZG9jSGVpZ2h0IDwgcmVjdC50b3AgKyBub2RlLmNsaWVudEhlaWdodCkge1xyXG4gICAgICBvZmZzZXRIZWlnaHQgPSByZWN0LnRvcCArIG5vZGUuY2xpZW50SGVpZ2h0IC0gZG9jSGVpZ2h0O1xyXG4gICAgfVxyXG4gICAgbm9kZS5zdHlsZS50b3AgPSBgJHtyZWN0LnRvcCArIHNjcm9sbFRvcCAtIG9mZnNldEhlaWdodH1weGA7XHJcbiAgICBub2RlLnN0eWxlLmxlZnQgPSBgJHtyZWN0LnJpZ2h0ICsgNX1weGA7XHJcbiAgfVxyXG5cclxuICBzaG93U3ViTWVudShlOiBNb3VzZUV2ZW50LCBpdGVtOiBOYXYpIHtcclxuICAgIGlmICh0aGlzLmNvbGxhcHNlZCAhPT0gdHJ1ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBsaW5rTm9kZSA9IGUudGFyZ2V0IGFzIEVsZW1lbnQ7XHJcbiAgICB0aGlzLmdlbkZsb2F0aW5nQ29udGFpbmVyKCk7XHJcbiAgICBjb25zdCBzdWJOb2RlID0gdGhpcy5nZW5TdWJOb2RlKGxpbmtOb2RlIGFzIEhUTUxMaW5rRWxlbWVudCwgaXRlbSk7XHJcbiAgICB0aGlzLmhpZGVBbGwoKTtcclxuICAgIHN1Yk5vZGUuY2xhc3NMaXN0LmFkZChTSE9XQ0xTKTtcclxuICAgIHRoaXMuY2FsUG9zKGxpbmtOb2RlIGFzIEhUTUxMaW5rRWxlbWVudCwgc3ViTm9kZSk7XHJcbiAgfVxyXG5cclxuICBvblNlbGVjdChpdGVtOiBNZW51KSB7XHJcbiAgICB0aGlzLnNlbGVjdC5lbWl0KGl0ZW0pO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlT3BlbihpdGVtOiBOYXYpIHtcclxuICAgIHRoaXMubWVudVNydi52aXNpdCgoaSwgcCkgPT4ge1xyXG4gICAgICBpZiAoaSAhPT0gaXRlbSkgaS5fb3BlbiA9IGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgICBsZXQgcEl0ZW0gPSBpdGVtLl9fcGFyZW50O1xyXG4gICAgd2hpbGUgKHBJdGVtKSB7XHJcbiAgICAgIHBJdGVtLl9vcGVuID0gdHJ1ZTtcclxuICAgICAgcEl0ZW0gPSBwSXRlbS5fX3BhcmVudDtcclxuICAgIH1cclxuICAgIGl0ZW0uX29wZW4gPSAhaXRlbS5fb3BlbjtcclxuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXHJcbiAgX2NsaWNrKCkge1xyXG4gICAgaWYgKHRoaXMuaXNQYWQgJiYgdGhpcy5jb2xsYXBzZWQpIHtcclxuICAgICAgdGhpcy5vcGVuQXNpZGUoZmFsc2UpO1xyXG4gICAgICB0aGlzLmhpZGVBbGwoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmNsaWNrJylcclxuICBfZG9jQ2xpY2soKSB7XHJcbiAgICB0aGlzLmhpZGVBbGwoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jaGFuZ2UkLnVuc3Vic2NyaWJlKCk7XHJcbiAgICBpZiAodGhpcy5yb3V0ZSQpIHRoaXMucm91dGUkLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB0aGlzLmNsZWFyRmxvYXRpbmdDb250YWluZXIoKTtcclxuICB9XHJcblxyXG4gIC8vIHJlZ2lvbjogVW5kZXIgcGFkXHJcblxyXG4gIHByaXZhdGUgZ2V0IGlzUGFkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHdpbmRvdy5pbm5lcldpZHRoIDwgNzY4O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByb3V0ZSQ6IFN1YnNjcmlwdGlvbjtcclxuICBwcml2YXRlIGluc3RhbGxVbmRlclBhZCgpIHtcclxuICAgIGlmICghdGhpcy5hdXRvQ2xvc2VVbmRlclBhZCkgcmV0dXJuO1xyXG4gICAgdGhpcy5yb3V0ZSQgPSA8YW55PihcclxuICAgICAgdGhpcy5yb3V0ZXIuZXZlbnRzXHJcbiAgICAgICAgLnBpcGUoZmlsdGVyKGUgPT4gZSBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpKVxyXG4gICAgICAgIC5zdWJzY3JpYmUocyA9PiB0aGlzLnVuZGVyUGFkKCkpXHJcbiAgICApO1xyXG4gICAgdGhpcy51bmRlclBhZCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1bmRlclBhZCgpIHtcclxuICAgIGlmICh0aGlzLmlzUGFkICYmICF0aGlzLmNvbGxhcHNlZCkge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMub3BlbkFzaWRlKHRydWUpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgb3BlbkFzaWRlKHN0YXR1czogYm9vbGVhbikge1xyXG4gICAgdGhpcy5zZXR0aW5ncy5zZXRMYXlvdXQoJ2NvbGxhcHNlZCcsIHN0YXR1cyk7XHJcbiAgfVxyXG5cclxuICAvLyBlbmRyZWdpb25cclxufVxyXG4iXX0=