/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Inject, Input, NgZone, Output, Renderer2, } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MenuService, SettingsService, WINDOW } from '@delon/theme';
import { InputBoolean } from '@delon/util';
/** @type {?} */
var SHOWCLS = 'sidebar-nav__floating-show';
/** @type {?} */
var FLOATINGCLS = 'sidebar-nav__floating';
var SidebarNavComponent = /** @class */ (function () {
    function SidebarNavComponent(menuSrv, settings, router, render, cdr, ngZone, doc, win) {
        this.menuSrv = menuSrv;
        this.settings = settings;
        this.router = router;
        this.render = render;
        this.cdr = cdr;
        this.ngZone = ngZone;
        this.doc = doc;
        this.win = win;
        this.unsubscribe$ = new Subject();
        this.list = [];
        this.disabledAcl = false;
        this.autoCloseUnderPad = true;
        this.recursivePath = true;
        this.openStrictly = false;
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
    Object.defineProperty(SidebarNavComponent.prototype, "_d", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return this.menuSrv.menus;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    SidebarNavComponent.prototype.floatingAreaClickHandle = /**
     * @private
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
        var id = +(/** @type {?} */ ((/** @type {?} */ (linkNode.dataset)).id));
        /** @type {?} */
        var item;
        this.menuSrv.visit(this._d, (/**
         * @param {?} i
         * @return {?}
         */
        function (i) {
            if (!item && i.__id === id) {
                item = i;
            }
        }));
        this.to((/** @type {?} */ (item)));
        this.hideAll();
        e.preventDefault();
        return false;
    };
    /**
     * @private
     * @return {?}
     */
    SidebarNavComponent.prototype.clearFloatingContainer = /**
     * @private
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
     * @private
     * @return {?}
     */
    SidebarNavComponent.prototype.genFloatingContainer = /**
     * @private
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
     * @private
     * @param {?} linkNode
     * @param {?} item
     * @return {?}
     */
    SidebarNavComponent.prototype.genSubNode = /**
     * @private
     * @param {?} linkNode
     * @param {?} item
     * @return {?}
     */
    function (linkNode, item) {
        /** @type {?} */
        var id = "_sidebar-nav-" + item.__id;
        /** @type {?} */
        var node = (/** @type {?} */ ((/** @type {?} */ (linkNode.nextElementSibling)).cloneNode(true)));
        node.id = id;
        node.classList.add(FLOATINGCLS);
        node.addEventListener('mouseleave', (/**
         * @return {?}
         */
        function () {
            node.classList.remove(SHOWCLS);
        }), false);
        this.floatingEl.appendChild(node);
        return node;
    };
    /**
     * @private
     * @return {?}
     */
    SidebarNavComponent.prototype.hideAll = /**
     * @private
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
     * @private
     * @param {?} linkNode
     * @param {?} node
     * @return {?}
     */
    SidebarNavComponent.prototype.calPos = 
    // calculate the node position values.
    /**
     * @private
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
        var _this = this;
        if (this.collapsed !== true) {
            return;
        }
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            e.preventDefault();
            /** @type {?} */
            var linkNode = (/** @type {?} */ (e.target));
            _this.genFloatingContainer();
            /** @type {?} */
            var subNode = _this.genSubNode((/** @type {?} */ (linkNode)), item);
            _this.hideAll();
            subNode.classList.add(SHOWCLS);
            _this.calPos((/** @type {?} */ (linkNode)), subNode);
        }));
    };
    /**
     * @param {?} item
     * @return {?}
     */
    SidebarNavComponent.prototype.to = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var _this = this;
        this.select.emit(item);
        if (item.disabled)
            return;
        if (item.externalLink) {
            if (item.target === '_blank') {
                this.win.open(item.externalLink);
            }
            else {
                this.win.location.href = item.externalLink;
            }
            return false;
        }
        this.ngZone.run((/**
         * @return {?}
         */
        function () { return _this.router.navigateByUrl((/** @type {?} */ (item.link))); }));
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
        if (!this.openStrictly) {
            this.menuSrv.visit(this._d, (/**
             * @param {?} i
             * @param {?} p
             * @return {?}
             */
            function (i, p) {
                if (i !== item)
                    i._open = false;
            }));
            /** @type {?} */
            var pItem = item.__parent;
            while (pItem) {
                pItem._open = true;
                pItem = pItem.__parent;
            }
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
    SidebarNavComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var _a = this, doc = _a.doc, router = _a.router, unsubscribe$ = _a.unsubscribe$, menuSrv = _a.menuSrv, cdr = _a.cdr;
        this.bodyEl = doc.querySelector('body');
        menuSrv.openedByUrl(router.url, this.recursivePath);
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () { return _this.genFloatingContainer(); }));
        menuSrv.change.pipe(takeUntil(unsubscribe$)).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            menuSrv.visit(data, (/**
             * @param {?} i
             * @return {?}
             */
            function (i) {
                if (!i._aclResult) {
                    if (_this.disabledAcl) {
                        i.disabled = true;
                    }
                    else {
                        i._hidden = true;
                    }
                }
                if (_this.openStrictly) {
                    i._open = i.open != null ? i.open : false;
                }
            }));
            _this.list = menuSrv.menus;
            cdr.detectChanges();
        }));
        router.events.pipe(takeUntil(unsubscribe$)).subscribe((/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            if (e instanceof NavigationEnd) {
                _this.menuSrv.openedByUrl(e.urlAfterRedirects, _this.recursivePath);
                _this.underPad();
                _this.cdr.detectChanges();
            }
        }));
        this.underPad();
    };
    /**
     * @return {?}
     */
    SidebarNavComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var unsubscribe$ = this.unsubscribe$;
        unsubscribe$.next();
        unsubscribe$.complete();
        this.clearFloatingContainer();
    };
    Object.defineProperty(SidebarNavComponent.prototype, "isPad", {
        // #region Under pad
        get: 
        // #region Under pad
        /**
         * @private
         * @return {?}
         */
        function () {
            return window.innerWidth < 768;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    SidebarNavComponent.prototype.underPad = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.autoCloseUnderPad && this.isPad && !this.collapsed) {
            setTimeout((/**
             * @return {?}
             */
            function () { return _this.openAside(true); }));
        }
    };
    /**
     * @private
     * @param {?} status
     * @return {?}
     */
    SidebarNavComponent.prototype.openAside = /**
     * @private
     * @param {?} status
     * @return {?}
     */
    function (status) {
        this.settings.setLayout('collapsed', status);
    };
    SidebarNavComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sidebar-nav',
                    template: "<ng-template #icon\n             let-i>\n  <ng-container *ngIf=\"i\"\n                [ngSwitch]=\"i.type\">\n    <i *ngSwitchCase=\"'icon'\"\n       class=\"sidebar-nav__item-icon\"\n       nz-icon\n       [type]=\"i.value\"\n       [theme]=\"i.theme\"\n       [spin]=\"i.spin\"\n       [twoToneColor]=\"i.twoToneColor\"\n       [iconfont]=\"i.iconfont\"></i>\n    <img *ngSwitchCase=\"'img'\"\n         src=\"{{ i.value }}\"\n         class=\"sidebar-nav__item-icon sidebar-nav__item-img\">\n    <i *ngSwitchDefault\n       class=\"sidebar-nav__item-icon {{ i.value }}\"></i>\n  </ng-container>\n</ng-template>\n<ul class=\"sidebar-nav\">\n  <ng-container *ngFor=\"let group of list\">\n    <ng-container *ngIf=\"group._hidden !== true\">\n      <li class=\"sidebar-nav__item sidebar-nav__group-title\"\n          *ngIf=\"group.group\">\n        <span>{{ group.text }}</span>\n      </li>\n      <ng-container *ngFor=\"let child1 of group.children\">\n        <li *ngIf=\"child1._hidden !== true\"\n            class=\"sidebar-nav__item\"\n            [class.sidebar-nav__selected]=\"child1._selected\"\n            [class.sidebar-nav__open]=\"child1._open\">\n          <!-- link -->\n          <a *ngIf=\"child1._type <= 2\"\n             (click)=\"to(child1)\"\n             [attr.data-id]=\"child1.__id\"\n             class=\"sidebar-nav__item-link\"\n             [ngClass]=\"{'sidebar-nav__item-disabled': child1.disabled}\">\n            <ng-container *ngIf=\"!collapsed\">\n              <ng-template [ngTemplateOutlet]=\"icon\"\n                           [ngTemplateOutletContext]=\"{$implicit: child1.icon}\"></ng-template>\n            </ng-container>\n            <nz-tooltip *ngIf=\"collapsed\"\n                        nzPlacement=\"right\"\n                        [nzTitle]=\"child1.text\">\n              <span nz-tooltip>\n                <ng-template [ngTemplateOutlet]=\"icon\"\n                             [ngTemplateOutletContext]=\"{$implicit: child1.icon}\"></ng-template>\n              </span>\n            </nz-tooltip>\n            <span class=\"sidebar-nav__item-text\">{{ child1.text }}</span>\n          </a>\n          <!-- has children link -->\n          <a *ngIf=\"child1._type === 3\"\n             (click)=\"toggleOpen(child1)\"\n             (mouseenter)=\"showSubMenu($event, child1)\"\n             class=\"sidebar-nav__item-link\">\n            <ng-template [ngTemplateOutlet]=\"icon\"\n                         [ngTemplateOutletContext]=\"{$implicit: child1.icon}\"></ng-template>\n            <span class=\"sidebar-nav__item-text\">{{ child1.text }}</span>\n            <i class=\"sidebar-nav__sub-arrow\"></i>\n          </a>\n          <!-- badge -->\n          <div *ngIf=\"child1.badge\"\n               title=\"{{child1.badge}}\"\n               class=\"badge badge-{{child1.badgeStatus}}\"\n               [class.badge-dot]=\"child1.badgeDot\">\n            <em>{{child1.badge}}</em>\n          </div>\n          <!-- Level 2 -->\n          <ul *ngIf=\"child1._type === 3\"\n              class=\"sidebar-nav sidebar-nav__sub sidebar-nav__depth{{child1._depth}}\">\n            <ng-container *ngFor=\"let child2 of child1.children\">\n              <li *ngIf=\"child2._hidden !== true\"\n                  class=\"sidebar-nav__item\"\n                  [class.sidebar-nav__selected]=\"child2._selected\"\n                  [class.sidebar-nav__open]=\"child2._open\">\n                <!-- link -->\n                <a *ngIf=\"child2._type <= 2\"\n                   (click)=\"to(child2)\"\n                   [attr.data-id]=\"child2.__id\"\n                   class=\"sidebar-nav__item-link\"\n                   [ngClass]=\"{'sidebar-nav__item-disabled': child2.disabled}\">{{\n                  child2.text }}</a>\n                <!-- has children link -->\n                <a *ngIf=\"child2._type === 3\"\n                   (click)=\"toggleOpen(child2)\"\n                   class=\"sidebar-nav__item-link\">\n                  {{ child2.text }}\n                  <i class=\"sidebar-nav__sub-arrow\"></i>\n                </a>\n                <!-- badge -->\n                <div *ngIf=\"child2.badge\"\n                     title=\"{{child2.badge}}\"\n                     class=\"badge badge-{{child2.badgeStatus}}\"\n                     [class.badge-dot]=\"child2.badgeDot\">\n                  <em>{{child2.badge}}</em>\n                </div>\n                <!-- Level 3 -->\n                <ul *ngIf=\"child2._type === 3\"\n                    class=\"sidebar-nav sidebar-nav__sub sidebar-nav__depth{{child2._depth}}\">\n                  <ng-container *ngFor=\"let child3 of child2.children\">\n                    <li *ngIf=\"child3._hidden !== true\"\n                        class=\"sidebar-nav__item\"\n                        [class.sidebar-nav__selected]=\"child3._selected\"\n                        [class.sidebar-nav__open]=\"child3._open\">\n                      <!-- link -->\n                      <a *ngIf=\"child3._type <= 2\"\n                         (click)=\"to(child3)\"\n                         [attr.data-id]=\"child3.__id\"\n                         class=\"sidebar-nav__item-link\"\n                         [ngClass]=\"{'sidebar-nav__item-disabled': child3.disabled}\">{{ child3.text }}</a>\n                      <!-- external link -->\n                      <a *ngIf=\"child3._type === 2\"\n                         href=\"{{ child3.externalLink }}\"\n                         target=\"{{ child3.target }}\"\n                         data-type=\"external\"\n                         class=\"sidebar-nav__item-link\">{{ child3.text }}</a>\n                      <!-- badge -->\n                      <div *ngIf=\"child3.badge\"\n                           title=\"{{child3.badge}}\"\n                           class=\"badge badge-{{child3.badgeStatus}}\"\n                           [class.badge-dot]=\"child3.badgeDot\">\n                        <em>{{child3.badge}}</em>\n                      </div>\n                    </li>\n                  </ng-container>\n                </ul>\n              </li>\n            </ng-container>\n          </ul>\n        </li>\n      </ng-container>\n    </ng-container>\n  </ng-container>\n</ul>\n",
                    host: {
                        '(click)': '_click()',
                        '(document:click)': '_docClick()',
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    SidebarNavComponent.ctorParameters = function () { return [
        { type: MenuService },
        { type: SettingsService },
        { type: Router },
        { type: Renderer2 },
        { type: ChangeDetectorRef },
        { type: NgZone },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: Window, decorators: [{ type: Inject, args: [WINDOW,] }] }
    ]; };
    SidebarNavComponent.propDecorators = {
        disabledAcl: [{ type: Input }],
        autoCloseUnderPad: [{ type: Input }],
        recursivePath: [{ type: Input }],
        openStrictly: [{ type: Input }],
        select: [{ type: Output }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], SidebarNavComponent.prototype, "disabledAcl", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], SidebarNavComponent.prototype, "autoCloseUnderPad", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], SidebarNavComponent.prototype, "recursivePath", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], SidebarNavComponent.prototype, "openStrictly", void 0);
    return SidebarNavComponent;
}());
export { SidebarNavComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SidebarNavComponent.prototype.bodyEl;
    /**
     * @type {?}
     * @private
     */
    SidebarNavComponent.prototype.unsubscribe$;
    /**
     * @type {?}
     * @private
     */
    SidebarNavComponent.prototype.floatingEl;
    /** @type {?} */
    SidebarNavComponent.prototype.list;
    /** @type {?} */
    SidebarNavComponent.prototype.disabledAcl;
    /** @type {?} */
    SidebarNavComponent.prototype.autoCloseUnderPad;
    /** @type {?} */
    SidebarNavComponent.prototype.recursivePath;
    /** @type {?} */
    SidebarNavComponent.prototype.openStrictly;
    /** @type {?} */
    SidebarNavComponent.prototype.select;
    /**
     * @type {?}
     * @private
     */
    SidebarNavComponent.prototype.menuSrv;
    /**
     * @type {?}
     * @private
     */
    SidebarNavComponent.prototype.settings;
    /**
     * @type {?}
     * @private
     */
    SidebarNavComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    SidebarNavComponent.prototype.render;
    /**
     * @type {?}
     * @private
     */
    SidebarNavComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    SidebarNavComponent.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    SidebarNavComponent.prototype.doc;
    /**
     * @type {?}
     * @private
     */
    SidebarNavComponent.prototype.win;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci1uYXYuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9zaWRlYmFyLW5hdi8iLCJzb3VyY2VzIjpbInNpZGViYXItbmF2LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBQ0wsTUFBTSxFQUdOLE1BQU0sRUFDTixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBVSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVuRCxPQUFPLEVBQVEsV0FBVyxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDMUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGFBQWEsQ0FBQzs7SUFJckMsT0FBTyxHQUFHLDRCQUE0Qjs7SUFDdEMsV0FBVyxHQUFHLHVCQUF1QjtBQUUzQztJQTZCRSw2QkFDVSxPQUFvQixFQUNwQixRQUF5QixFQUN6QixNQUFjLEVBQ2QsTUFBaUIsRUFDakIsR0FBc0IsRUFDdEIsTUFBYyxFQUNJLEdBQVEsRUFDVixHQUFXO1FBUDNCLFlBQU8sR0FBUCxPQUFPLENBQWE7UUFDcEIsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7UUFDekIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFdBQU0sR0FBTixNQUFNLENBQVc7UUFDakIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDdEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNJLFFBQUcsR0FBSCxHQUFHLENBQUs7UUFD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MkNBQTJDOzs7OztJQUMzQyx5Q0FBbUM7O0lBQ25DLG1DQUFpQjs7SUFFakIsMENBQTZDOztJQUM3QyxnREFBa0Q7O0lBQ2xELDRDQUE4Qzs7SUFDOUMsMkNBQThDOztJQUM5QyxxQ0FBcUQ7Ozs7O0lBV25ELHNDQUE0Qjs7Ozs7SUFDNUIsdUNBQWlDOzs7OztJQUNqQyxxQ0FBc0I7Ozs7O0lBQ3RCLHFDQUF5Qjs7Ozs7SUFDekIsa0NBQThCOzs7OztJQUM5QixxQ0FBc0I7Ozs7O0lBQ3RCLGtDQUFrQzs7Ozs7SUFDbEMsa0NBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkVuZCwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBNZW51LCBNZW51U2VydmljZSwgU2V0dGluZ3NTZXJ2aWNlLCBXSU5ET1cgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5pbXBvcnQgeyBOYXYgfSBmcm9tICcuL3NpZGViYXItbmF2LnR5cGVzJztcblxuY29uc3QgU0hPV0NMUyA9ICdzaWRlYmFyLW5hdl9fZmxvYXRpbmctc2hvdyc7XG5jb25zdCBGTE9BVElOR0NMUyA9ICdzaWRlYmFyLW5hdl9fZmxvYXRpbmcnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzaWRlYmFyLW5hdicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWRlYmFyLW5hdi5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICAnKGNsaWNrKSc6ICdfY2xpY2soKScsXG4gICAgJyhkb2N1bWVudDpjbGljayknOiAnX2RvY0NsaWNrKCknLFxuICB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgU2lkZWJhck5hdkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBib2R5RWw6IEhUTUxCb2R5RWxlbWVudDtcbiAgcHJpdmF0ZSB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIGZsb2F0aW5nRWw6IEhUTUxEaXZFbGVtZW50O1xuICBsaXN0OiBOYXZbXSA9IFtdO1xuXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkaXNhYmxlZEFjbCA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYXV0b0Nsb3NlVW5kZXJQYWQgPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgcmVjdXJzaXZlUGF0aCA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBvcGVuU3RyaWN0bHkgPSBmYWxzZTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8TWVudT4oKTtcblxuICBnZXQgY29sbGFwc2VkKCkge1xuICAgIHJldHVybiB0aGlzLnNldHRpbmdzLmxheW91dC5jb2xsYXBzZWQ7XG4gIH1cblxuICBwcml2YXRlIGdldCBfZCgpIHtcbiAgICByZXR1cm4gdGhpcy5tZW51U3J2Lm1lbnVzO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBtZW51U3J2OiBNZW51U2VydmljZSxcbiAgICBwcml2YXRlIHNldHRpbmdzOiBTZXR0aW5nc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIHJlbmRlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBhbnksXG4gICAgQEluamVjdChXSU5ET1cpIHByaXZhdGUgd2luOiBXaW5kb3csXG4gICkge31cblxuICBwcml2YXRlIGZsb2F0aW5nQXJlYUNsaWNrSGFuZGxlKGU6IE1vdXNlRXZlbnQpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IGxpbmtOb2RlID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgaWYgKGxpbmtOb2RlLm5vZGVOYW1lICE9PSAnQScpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgaWQgPSArbGlua05vZGUuZGF0YXNldCEuaWQhO1xuICAgIGxldCBpdGVtOiBOYXY7XG4gICAgdGhpcy5tZW51U3J2LnZpc2l0KHRoaXMuX2QsIGkgPT4ge1xuICAgICAgaWYgKCFpdGVtICYmIGkuX19pZCA9PT0gaWQpIHtcbiAgICAgICAgaXRlbSA9IGk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy50byhpdGVtISk7XG4gICAgdGhpcy5oaWRlQWxsKCk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJGbG9hdGluZ0NvbnRhaW5lcigpIHtcbiAgICBpZiAoIXRoaXMuZmxvYXRpbmdFbCkgcmV0dXJuO1xuICAgIHRoaXMuZmxvYXRpbmdFbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZmxvYXRpbmdBcmVhQ2xpY2tIYW5kbGUuYmluZCh0aGlzKSk7XG4gICAgLy8gZml4IGllOiBodHRwczovL2dpdGh1Yi5jb20vbmctYWxhaW4vZGVsb24vaXNzdWVzLzUyXG4gICAgaWYgKHRoaXMuZmxvYXRpbmdFbC5oYXNPd25Qcm9wZXJ0eSgncmVtb3ZlJykpIHtcbiAgICAgIHRoaXMuZmxvYXRpbmdFbC5yZW1vdmUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZmxvYXRpbmdFbC5wYXJlbnROb2RlKSB7XG4gICAgICB0aGlzLmZsb2F0aW5nRWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmZsb2F0aW5nRWwpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2VuRmxvYXRpbmdDb250YWluZXIoKSB7XG4gICAgdGhpcy5jbGVhckZsb2F0aW5nQ29udGFpbmVyKCk7XG4gICAgdGhpcy5mbG9hdGluZ0VsID0gdGhpcy5yZW5kZXIuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5mbG9hdGluZ0VsLmNsYXNzTGlzdC5hZGQoRkxPQVRJTkdDTFMgKyAnLWNvbnRhaW5lcicpO1xuICAgIHRoaXMuZmxvYXRpbmdFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZmxvYXRpbmdBcmVhQ2xpY2tIYW5kbGUuYmluZCh0aGlzKSwgZmFsc2UpO1xuICAgIHRoaXMuYm9keUVsLmFwcGVuZENoaWxkKHRoaXMuZmxvYXRpbmdFbCk7XG4gIH1cblxuICBwcml2YXRlIGdlblN1Yk5vZGUobGlua05vZGU6IEhUTUxMaW5rRWxlbWVudCwgaXRlbTogTmF2KTogSFRNTFVMaXN0RWxlbWVudCB7XG4gICAgY29uc3QgaWQgPSBgX3NpZGViYXItbmF2LSR7aXRlbS5fX2lkfWA7XG4gICAgY29uc3Qgbm9kZSA9IGxpbmtOb2RlLm5leHRFbGVtZW50U2libGluZyEuY2xvbmVOb2RlKHRydWUpIGFzIEhUTUxVTGlzdEVsZW1lbnQ7XG4gICAgbm9kZS5pZCA9IGlkO1xuICAgIG5vZGUuY2xhc3NMaXN0LmFkZChGTE9BVElOR0NMUyk7XG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ21vdXNlbGVhdmUnLFxuICAgICAgKCkgPT4ge1xuICAgICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoU0hPV0NMUyk7XG4gICAgICB9LFxuICAgICAgZmFsc2UsXG4gICAgKTtcbiAgICB0aGlzLmZsb2F0aW5nRWwuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBwcml2YXRlIGhpZGVBbGwoKSB7XG4gICAgY29uc3QgYWxsTm9kZSA9IHRoaXMuZmxvYXRpbmdFbC5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIEZMT0FUSU5HQ0xTKTtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cHJlZmVyLWZvci1vZlxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsTm9kZS5sZW5ndGg7IGkrKykge1xuICAgICAgYWxsTm9kZVtpXS5jbGFzc0xpc3QucmVtb3ZlKFNIT1dDTFMpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGNhbGN1bGF0ZSB0aGUgbm9kZSBwb3NpdGlvbiB2YWx1ZXMuXG4gIHByaXZhdGUgY2FsUG9zKGxpbmtOb2RlOiBIVE1MTGlua0VsZW1lbnQsIG5vZGU6IEhUTUxVTGlzdEVsZW1lbnQpIHtcbiAgICBjb25zdCByZWN0ID0gbGlua05vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgLy8gYnVnOiBodHRwczovL2RldmVsb3Blci5taWNyb3NvZnQuY29tL2VuLXVzL21pY3Jvc29mdC1lZGdlL3BsYXRmb3JtL2lzc3Vlcy8xNDcyMTAxNS9cbiAgICBjb25zdCBzY3JvbGxUb3AgPSBNYXRoLm1heCh0aGlzLmRvYy5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wLCB0aGlzLmJvZHlFbC5zY3JvbGxUb3ApO1xuICAgIGNvbnN0IGRvY0hlaWdodCA9IE1hdGgubWF4KHRoaXMuZG9jLmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsIHRoaXMuYm9keUVsLmNsaWVudEhlaWdodCk7XG4gICAgbGV0IG9mZnNldEhlaWdodCA9IDA7XG4gICAgaWYgKGRvY0hlaWdodCA8IHJlY3QudG9wICsgbm9kZS5jbGllbnRIZWlnaHQpIHtcbiAgICAgIG9mZnNldEhlaWdodCA9IHJlY3QudG9wICsgbm9kZS5jbGllbnRIZWlnaHQgLSBkb2NIZWlnaHQ7XG4gICAgfVxuICAgIG5vZGUuc3R5bGUudG9wID0gYCR7cmVjdC50b3AgKyBzY3JvbGxUb3AgLSBvZmZzZXRIZWlnaHR9cHhgO1xuICAgIG5vZGUuc3R5bGUubGVmdCA9IGAke3JlY3QucmlnaHQgKyA1fXB4YDtcbiAgfVxuXG4gIHNob3dTdWJNZW51KGU6IE1vdXNlRXZlbnQsIGl0ZW06IE5hdikge1xuICAgIGlmICh0aGlzLmNvbGxhcHNlZCAhPT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBsaW5rTm9kZSA9IGUudGFyZ2V0IGFzIEVsZW1lbnQ7XG4gICAgICB0aGlzLmdlbkZsb2F0aW5nQ29udGFpbmVyKCk7XG4gICAgICBjb25zdCBzdWJOb2RlID0gdGhpcy5nZW5TdWJOb2RlKGxpbmtOb2RlIGFzIEhUTUxMaW5rRWxlbWVudCwgaXRlbSk7XG4gICAgICB0aGlzLmhpZGVBbGwoKTtcbiAgICAgIHN1Yk5vZGUuY2xhc3NMaXN0LmFkZChTSE9XQ0xTKTtcbiAgICAgIHRoaXMuY2FsUG9zKGxpbmtOb2RlIGFzIEhUTUxMaW5rRWxlbWVudCwgc3ViTm9kZSk7XG4gICAgfSk7XG4gIH1cblxuICB0byhpdGVtOiBNZW51KSB7XG4gICAgdGhpcy5zZWxlY3QuZW1pdChpdGVtKTtcbiAgICBpZiAoaXRlbS5kaXNhYmxlZCkgcmV0dXJuO1xuXG4gICAgaWYgKGl0ZW0uZXh0ZXJuYWxMaW5rKSB7XG4gICAgICBpZiAoaXRlbS50YXJnZXQgPT09ICdfYmxhbmsnKSB7XG4gICAgICAgIHRoaXMud2luLm9wZW4oaXRlbS5leHRlcm5hbExpbmspO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy53aW4ubG9jYXRpb24uaHJlZiA9IGl0ZW0uZXh0ZXJuYWxMaW5rO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChpdGVtLmxpbmshKSk7XG4gIH1cblxuICB0b2dnbGVPcGVuKGl0ZW06IE5hdikge1xuICAgIGlmICghdGhpcy5vcGVuU3RyaWN0bHkpIHtcbiAgICAgIHRoaXMubWVudVNydi52aXNpdCh0aGlzLl9kLCAoaSwgcCkgPT4ge1xuICAgICAgICBpZiAoaSAhPT0gaXRlbSkgaS5fb3BlbiA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgICBsZXQgcEl0ZW0gPSBpdGVtLl9fcGFyZW50O1xuICAgICAgd2hpbGUgKHBJdGVtKSB7XG4gICAgICAgIHBJdGVtLl9vcGVuID0gdHJ1ZTtcbiAgICAgICAgcEl0ZW0gPSBwSXRlbS5fX3BhcmVudDtcbiAgICAgIH1cbiAgICB9XG4gICAgaXRlbS5fb3BlbiA9ICFpdGVtLl9vcGVuO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgX2NsaWNrKCkge1xuICAgIGlmICh0aGlzLmlzUGFkICYmIHRoaXMuY29sbGFwc2VkKSB7XG4gICAgICB0aGlzLm9wZW5Bc2lkZShmYWxzZSk7XG4gICAgICB0aGlzLmhpZGVBbGwoKTtcbiAgICB9XG4gIH1cblxuICBfZG9jQ2xpY2soKSB7XG4gICAgdGhpcy5oaWRlQWxsKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCB7IGRvYywgcm91dGVyLCB1bnN1YnNjcmliZSQsIG1lbnVTcnYsIGNkciB9ID0gdGhpcztcbiAgICB0aGlzLmJvZHlFbCA9IGRvYy5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgbWVudVNydi5vcGVuZWRCeVVybChyb3V0ZXIudXJsLCB0aGlzLnJlY3Vyc2l2ZVBhdGgpO1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuZ2VuRmxvYXRpbmdDb250YWluZXIoKSk7XG4gICAgbWVudVNydi5jaGFuZ2UucGlwZSh0YWtlVW50aWwodW5zdWJzY3JpYmUkKSkuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgbWVudVNydi52aXNpdChkYXRhLCAoaTogTmF2KSA9PiB7XG4gICAgICAgIGlmICghaS5fYWNsUmVzdWx0KSB7XG4gICAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWRBY2wpIHtcbiAgICAgICAgICAgIGkuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpLl9oaWRkZW4gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vcGVuU3RyaWN0bHkpIHtcbiAgICAgICAgICBpLl9vcGVuID0gaS5vcGVuICE9IG51bGwgPyBpLm9wZW4gOiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLmxpc3QgPSBtZW51U3J2Lm1lbnVzO1xuICAgICAgY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgICByb3V0ZXIuZXZlbnRzLnBpcGUodGFrZVVudGlsKHVuc3Vic2NyaWJlJCkpLnN1YnNjcmliZShlID0+IHtcbiAgICAgIGlmIChlIGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCkge1xuICAgICAgICB0aGlzLm1lbnVTcnYub3BlbmVkQnlVcmwoZS51cmxBZnRlclJlZGlyZWN0cywgdGhpcy5yZWN1cnNpdmVQYXRoKTtcbiAgICAgICAgdGhpcy51bmRlclBhZCgpO1xuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy51bmRlclBhZCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgY29uc3QgeyB1bnN1YnNjcmliZSQgfSA9IHRoaXM7XG4gICAgdW5zdWJzY3JpYmUkLm5leHQoKTtcbiAgICB1bnN1YnNjcmliZSQuY29tcGxldGUoKTtcbiAgICB0aGlzLmNsZWFyRmxvYXRpbmdDb250YWluZXIoKTtcbiAgfVxuXG4gIC8vICNyZWdpb24gVW5kZXIgcGFkXG5cbiAgcHJpdmF0ZSBnZXQgaXNQYWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHdpbmRvdy5pbm5lcldpZHRoIDwgNzY4O1xuICB9XG5cbiAgcHJpdmF0ZSB1bmRlclBhZCgpIHtcbiAgICBpZiAodGhpcy5hdXRvQ2xvc2VVbmRlclBhZCAmJiB0aGlzLmlzUGFkICYmICF0aGlzLmNvbGxhcHNlZCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLm9wZW5Bc2lkZSh0cnVlKSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBvcGVuQXNpZGUoc3RhdHVzOiBib29sZWFuKSB7XG4gICAgdGhpcy5zZXR0aW5ncy5zZXRMYXlvdXQoJ2NvbGxhcHNlZCcsIHN0YXR1cyk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG59XG4iXX0=