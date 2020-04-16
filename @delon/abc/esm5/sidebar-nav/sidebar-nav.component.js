/**
 * @fileoverview added by tsickle
 * Generated from: sidebar-nav.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Inject, Input, NgZone, Output, Renderer2, ViewEncapsulation, } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { MenuService, SettingsService, WINDOW } from '@delon/theme';
import { InputBoolean } from '@delon/util';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
/** @type {?} */
var SHOWCLS = 'sidebar-nav__floating-show';
/** @type {?} */
var FLOATINGCLS = 'sidebar-nav__floating';
var SidebarNavComponent = /** @class */ (function () {
    function SidebarNavComponent(menuSrv, settings, router, render, cdr, ngZone, sanitizer, doc, win) {
        this.menuSrv = menuSrv;
        this.settings = settings;
        this.router = router;
        this.render = render;
        this.cdr = cdr;
        this.ngZone = ngZone;
        this.sanitizer = sanitizer;
        this.doc = doc;
        this.win = win;
        this.unsubscribe$ = new Subject();
        this.list = [];
        this.disabledAcl = false;
        this.autoCloseUnderPad = true;
        this.recursivePath = true;
        this.openStrictly = false;
        // tslint:disable-next-line:no-output-native
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
     * @private
     * @param {?} node
     * @return {?}
     */
    SidebarNavComponent.prototype.getLinkNode = /**
     * @private
     * @param {?} node
     * @return {?}
     */
    function (node) {
        node = node.nodeName === 'A' ? node : ((/** @type {?} */ (node.parentNode)));
        return node.nodeName !== 'A' ? null : node;
    };
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
        var linkNode = this.getLinkNode((/** @type {?} */ (e.target)));
        if (linkNode == null) {
            return false;
        }
        /** @type {?} */
        var id = +(/** @type {?} */ ((/** @type {?} */ (linkNode.dataset)).id));
        // Should be ingore children title trigger event
        if (isNaN(id)) {
            return false;
        }
        /** @type {?} */
        var item;
        this.menuSrv.visit(this.list, (/**
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
        var childNode = item.badge ? (/** @type {?} */ ((/** @type {?} */ (linkNode.nextElementSibling)).nextElementSibling)) : (/** @type {?} */ (linkNode.nextElementSibling));
        /** @type {?} */
        var node = (/** @type {?} */ (childNode.cloneNode(true)));
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
            return;
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
            this.menuSrv.visit(this.list, (/**
             * @param {?} i
             * @return {?}
             */
            function (i) {
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
        if (this.collapsed) {
            this.hideAll();
        }
    };
    /**
     * @private
     * @param {?} url
     * @return {?}
     */
    SidebarNavComponent.prototype.openedByUrl = /**
     * @private
     * @param {?} url
     * @return {?}
     */
    function (url) {
        var _a = this, menuSrv = _a.menuSrv, recursivePath = _a.recursivePath, openStrictly = _a.openStrictly;
        /** @type {?} */
        var findItem = menuSrv.getHit(this.menuSrv.menus, (/** @type {?} */ (url)), recursivePath, (/**
         * @param {?} i
         * @return {?}
         */
        function (i) {
            i._selected = false;
            if (!openStrictly) {
                i._open = false;
            }
        }));
        if (findItem == null)
            return;
        do {
            findItem._selected = true;
            if (!openStrictly) {
                findItem._open = true;
            }
            findItem = findItem.__parent;
        } while (findItem);
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
        this.openedByUrl(router.url);
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
             * @param {?} _p
             * @param {?} depth
             * @return {?}
             */
            function (i, _p, depth) {
                i._text = _this.sanitizer.bypassSecurityTrustHtml((/** @type {?} */ (i.text)));
                i._needIcon = (/** @type {?} */ (depth)) <= 3 && !!i.icon;
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
                _this.openedByUrl(e.urlAfterRedirects);
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
                    exportAs: 'sidebarNav',
                    template: "<ng-template #icon let-i>\n  <ng-container *ngIf=\"i\" [ngSwitch]=\"i.type\">\n    <i *ngSwitchCase=\"'icon'\" class=\"sidebar-nav__item-icon\" nz-icon [nzType]=\"i.value\" [nzTheme]=\"i.theme\"\n      [nzSpin]=\"i.spin\" [nzTwotoneColor]=\"i.twoToneColor\" [nzIconfont]=\"i.iconfont\"></i>\n    <i *ngSwitchCase=\"'iconfont'\" class=\"sidebar-nav__item-icon\" nz-icon [nzIconfont]=\"i.iconfont\"></i>\n    <img *ngSwitchCase=\"'img'\" [src]=\"i.value\" class=\"sidebar-nav__item-icon sidebar-nav__item-img\">\n    <i *ngSwitchDefault class=\"sidebar-nav__item-icon {{ i.value }}\"></i>\n  </ng-container>\n</ng-template>\n<ng-template #item let-i>\n  <!-- link -->\n  <a *ngIf=\"i._type <= 2\" (click)=\"to(i)\" [attr.data-id]=\"i.__id\" class=\"sidebar-nav__item-link\"\n    [ngClass]=\"{'sidebar-nav__item-disabled': i.disabled}\">\n    <ng-container *ngIf=\"i._needIcon\">\n      <ng-container *ngIf=\"!collapsed\">\n        <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{$implicit: i.icon}\"></ng-template>\n      </ng-container>\n      <span *ngIf=\"collapsed\" nz-tooltip nzTooltipPlacement=\"right\" [nzTooltipTitle]=\"i.text\">\n        <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{$implicit: i.icon}\"></ng-template>\n      </span>\n    </ng-container>\n    <span class=\"sidebar-nav__item-text\" [innerHTML]=\"i._text\"></span>\n  </a>\n  <!-- has children link -->\n  <a *ngIf=\"i._type === 3\" (click)=\"toggleOpen(i)\" (mouseenter)=\"showSubMenu($event, i)\" class=\"sidebar-nav__item-link\">\n    <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{$implicit: i.icon}\"></ng-template>\n    <span class=\"sidebar-nav__item-text\" [innerHTML]=\"i._text\"></span>\n    <i class=\"sidebar-nav__sub-arrow\"></i>\n  </a>\n  <!-- badge -->\n  <div *ngIf=\"i.badge\" [attr.title]=\"i.badge\" class=\"badge badge-{{i.badgeStatus}}\" [class.badge-dot]=\"i.badgeDot\">\n    <em>{{i.badge}}</em>\n  </div>\n</ng-template>\n<ul class=\"sidebar-nav\">\n  <ng-container *ngFor=\"let group of list\">\n    <ng-container *ngIf=\"group._hidden !== true\">\n      <li class=\"sidebar-nav__item sidebar-nav__group-title\" *ngIf=\"group.group\">\n        <span [innerHTML]=\"group._text\"></span>\n      </li>\n      <ng-container *ngFor=\"let child1 of group.children\">\n        <li *ngIf=\"child1._hidden !== true\" class=\"sidebar-nav__item\" [class.sidebar-nav__selected]=\"child1._selected\"\n          [class.sidebar-nav__open]=\"child1._open\">\n          <ng-template [ngTemplateOutlet]=\"item\" [ngTemplateOutletContext]=\"{$implicit: child1}\"></ng-template>\n          <!-- Level 2 -->\n          <ul *ngIf=\"child1._type === 3\" class=\"sidebar-nav sidebar-nav__sub sidebar-nav__depth{{child1._depth}}\">\n            <ng-container *ngFor=\"let child2 of child1.children\">\n              <li *ngIf=\"child2._hidden !== true\" class=\"sidebar-nav__item\"\n                [class.sidebar-nav__selected]=\"child2._selected\" [class.sidebar-nav__open]=\"child2._open\">\n                <ng-template [ngTemplateOutlet]=\"item\" [ngTemplateOutletContext]=\"{$implicit: child2}\"></ng-template>\n                <!-- Level 3 -->\n                <ul *ngIf=\"child2._type === 3\" class=\"sidebar-nav sidebar-nav__sub sidebar-nav__depth{{child2._depth}}\">\n                  <ng-container *ngFor=\"let child3 of child2.children\">\n                    <li *ngIf=\"child3._hidden !== true\" class=\"sidebar-nav__item\"\n                      [class.sidebar-nav__selected]=\"child3._selected\" [class.sidebar-nav__open]=\"child3._open\">\n                      <ng-template [ngTemplateOutlet]=\"item\" [ngTemplateOutletContext]=\"{$implicit: child3}\">\n                      </ng-template>\n                    </li>\n                  </ng-container>\n                </ul>\n              </li>\n            </ng-container>\n          </ul>\n        </li>\n      </ng-container>\n    </ng-container>\n  </ng-container>\n</ul>\n",
                    host: {
                        '(click)': '_click()',
                        '(document:click)': '_docClick()',
                    },
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
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
        { type: DomSanitizer },
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
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], SidebarNavComponent.prototype, "disabledAcl", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], SidebarNavComponent.prototype, "autoCloseUnderPad", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], SidebarNavComponent.prototype, "recursivePath", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
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
    SidebarNavComponent.prototype.sanitizer;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci1uYXYuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9zaWRlYmFyLW5hdi8iLCJzb3VyY2VzIjpbInNpZGViYXItbmF2LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUNMLE1BQU0sRUFHTixNQUFNLEVBQ04sU0FBUyxFQUNULGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN4RCxPQUFPLEVBQVEsV0FBVyxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDMUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7SUFHckMsT0FBTyxHQUFHLDRCQUE0Qjs7SUFDdEMsV0FBVyxHQUFHLHVCQUF1QjtBQUUzQztJQTZCRSw2QkFDVSxPQUFvQixFQUNwQixRQUF5QixFQUN6QixNQUFjLEVBQ2QsTUFBaUIsRUFDakIsR0FBc0IsRUFDdEIsTUFBYyxFQUNkLFNBQXVCLEVBQ0wsR0FBUSxFQUNWLEdBQVc7UUFSM0IsWUFBTyxHQUFQLE9BQU8sQ0FBYTtRQUNwQixhQUFRLEdBQVIsUUFBUSxDQUFpQjtRQUN6QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUNqQixRQUFHLEdB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Z0JBRG5CLE1BQU07Z0JBSjVCLFNBQVM7Z0JBVFQsaUJBQWlCO2dCQUtqQixNQUFNO2dCQU9DLFlBQVk7Z0RBZ0RoQixNQUFNLFNBQUMsUUFBUTtnQkFDYSxNQUFNLHVCQUFsQyxNQUFNLFNBQUMsTUFBTTs7OzhCQXBCZixLQUFLO29DQUNMLEtBQUs7Z0NBQ0wsS0FBSzsrQkFDTCxLQUFLO3lCQUVMLE1BQU07O0lBTGtCO1FBQWYsWUFBWSxFQUFFOzs0REFBcUI7SUFDcEI7UUFBZixZQUFZLEVBQUU7O2tFQUEwQjtJQUN6QjtRQUFmLFlBQVksRUFBRTs7OERBQXNCO0lBQ3JCO1FBQWYsWUFBWSxFQUFFOzs2REFBc0I7SUFpUGhELDBCQUFDO0NBQUEsQUF0UUQsSUFzUUM7U0ExUFksbUJBQW1COzs7Ozs7SUFDOUIscUNBQWdDOzs7OztJQUNoQywyQ0FBMkM7Ozs7O0lBQzNDLHlDQUFtQzs7SUFDbkMsbUNBQWlCOztJQUVqQiwwQ0FBNkM7O0lBQzdDLGdEQUFrRDs7SUFDbEQsNENBQThDOztJQUM5QywyQ0FBOEM7O0lBRTlDLHFDQUFxRDs7Ozs7SUFPbkQsc0NBQTRCOzs7OztJQUM1Qix1Q0FBaUM7Ozs7O0lBQ2pDLHFDQUFzQjs7Ozs7SUFDdEIscUNBQXlCOzs7OztJQUN6QixrQ0FBOEI7Ozs7O0lBQzlCLHFDQUFzQjs7Ozs7SUFDdEIsd0NBQStCOzs7OztJQUMvQixrQ0FBa0M7Ozs7O0lBQ2xDLGtDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IE5hdmlnYXRpb25FbmQsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBNZW51LCBNZW51U2VydmljZSwgU2V0dGluZ3NTZXJ2aWNlLCBXSU5ET1cgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTmF2IH0gZnJvbSAnLi9zaWRlYmFyLW5hdi50eXBlcyc7XG5cbmNvbnN0IFNIT1dDTFMgPSAnc2lkZWJhci1uYXZfX2Zsb2F0aW5nLXNob3cnO1xuY29uc3QgRkxPQVRJTkdDTFMgPSAnc2lkZWJhci1uYXZfX2Zsb2F0aW5nJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2lkZWJhci1uYXYnLFxuICBleHBvcnRBczogJ3NpZGViYXJOYXYnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2lkZWJhci1uYXYuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7XG4gICAgJyhjbGljayknOiAnX2NsaWNrKCknLFxuICAgICcoZG9jdW1lbnQ6Y2xpY2spJzogJ19kb2NDbGljaygpJyxcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBTaWRlYmFyTmF2Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGJvZHlFbDogSFRNTEJvZHlFbGVtZW50O1xuICBwcml2YXRlIHVuc3Vic2NyaWJlJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHByaXZhdGUgZmxvYXRpbmdFbDogSFRNTERpdkVsZW1lbnQ7XG4gIGxpc3Q6IE5hdltdID0gW107XG5cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRpc2FibGVkQWNsID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBhdXRvQ2xvc2VVbmRlclBhZCA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSByZWN1cnNpdmVQYXRoID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG9wZW5TdHJpY3RseSA9IGZhbHNlO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tb3V0cHV0LW5hdGl2ZVxuICBAT3V0cHV0KCkgcmVhZG9ubHkgc2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxNZW51PigpO1xuXG4gIGdldCBjb2xsYXBzZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0dGluZ3MubGF5b3V0LmNvbGxhcHNlZDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbWVudVNydjogTWVudVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBzZXR0aW5nczogU2V0dGluZ3NTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSByZW5kZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBhbnksXG4gICAgQEluamVjdChXSU5ET1cpIHByaXZhdGUgd2luOiBXaW5kb3csXG4gICkge31cblxuICBwcml2YXRlIGdldExpbmtOb2RlKG5vZGU6IEhUTUxFbGVtZW50KTogSFRNTEVsZW1lbnQgfCBudWxsIHtcbiAgICBub2RlID0gbm9kZS5ub2RlTmFtZSA9PT0gJ0EnID8gbm9kZSA6IChub2RlLnBhcmVudE5vZGUgYXMgSFRNTEVsZW1lbnQpO1xuICAgIHJldHVybiBub2RlLm5vZGVOYW1lICE9PSAnQScgPyBudWxsIDogbm9kZTtcbiAgfVxuXG4gIHByaXZhdGUgZmxvYXRpbmdBcmVhQ2xpY2tIYW5kbGUoZTogTW91c2VFdmVudCkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY29uc3QgbGlua05vZGUgPSB0aGlzLmdldExpbmtOb2RlKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KTtcbiAgICBpZiAobGlua05vZGUgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBpZCA9ICtsaW5rTm9kZS5kYXRhc2V0IS5pZCE7XG4gICAgLy8gU2hvdWxkIGJlIGluZ29yZSBjaGlsZHJlbiB0aXRsZSB0cmlnZ2VyIGV2ZW50XG4gICAgaWYgKGlzTmFOKGlkKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGxldCBpdGVtOiBOYXY7XG4gICAgdGhpcy5tZW51U3J2LnZpc2l0KHRoaXMubGlzdCwgaSA9PiB7XG4gICAgICBpZiAoIWl0ZW0gJiYgaS5fX2lkID09PSBpZCkge1xuICAgICAgICBpdGVtID0gaTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnRvKGl0ZW0hKTtcbiAgICB0aGlzLmhpZGVBbGwoKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBjbGVhckZsb2F0aW5nQ29udGFpbmVyKCkge1xuICAgIGlmICghdGhpcy5mbG9hdGluZ0VsKSByZXR1cm47XG4gICAgdGhpcy5mbG9hdGluZ0VsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5mbG9hdGluZ0FyZWFDbGlja0hhbmRsZS5iaW5kKHRoaXMpKTtcbiAgICAvLyBmaXggaWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9uZy1hbGFpbi9kZWxvbi9pc3N1ZXMvNTJcbiAgICBpZiAodGhpcy5mbG9hdGluZ0VsLmhhc093blByb3BlcnR5KCdyZW1vdmUnKSkge1xuICAgICAgdGhpcy5mbG9hdGluZ0VsLnJlbW92ZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5mbG9hdGluZ0VsLnBhcmVudE5vZGUpIHtcbiAgICAgIHRoaXMuZmxvYXRpbmdFbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZmxvYXRpbmdFbCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZW5GbG9hdGluZ0NvbnRhaW5lcigpIHtcbiAgICB0aGlzLmNsZWFyRmxvYXRpbmdDb250YWluZXIoKTtcbiAgICB0aGlzLmZsb2F0aW5nRWwgPSB0aGlzLnJlbmRlci5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmZsb2F0aW5nRWwuY2xhc3NMaXN0LmFkZChGTE9BVElOR0NMUyArICctY29udGFpbmVyJyk7XG4gICAgdGhpcy5mbG9hdGluZ0VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5mbG9hdGluZ0FyZWFDbGlja0hhbmRsZS5iaW5kKHRoaXMpLCBmYWxzZSk7XG4gICAgdGhpcy5ib2R5RWwuYXBwZW5kQ2hpbGQodGhpcy5mbG9hdGluZ0VsKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuU3ViTm9kZShsaW5rTm9kZTogSFRNTExpbmtFbGVtZW50LCBpdGVtOiBOYXYpOiBIVE1MVUxpc3RFbGVtZW50IHtcbiAgICBjb25zdCBpZCA9IGBfc2lkZWJhci1uYXYtJHtpdGVtLl9faWR9YDtcbiAgICBjb25zdCBjaGlsZE5vZGUgPSBpdGVtLmJhZGdlID8gbGlua05vZGUubmV4dEVsZW1lbnRTaWJsaW5nIS5uZXh0RWxlbWVudFNpYmxpbmchIDogbGlua05vZGUubmV4dEVsZW1lbnRTaWJsaW5nITtcbiAgICBjb25zdCBub2RlID0gY2hpbGROb2RlLmNsb25lTm9kZSh0cnVlKSBhcyBIVE1MVUxpc3RFbGVtZW50O1xuICAgIG5vZGUuaWQgPSBpZDtcbiAgICBub2RlLmNsYXNzTGlzdC5hZGQoRkxPQVRJTkdDTFMpO1xuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdtb3VzZWxlYXZlJyxcbiAgICAgICgpID0+IHtcbiAgICAgICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKFNIT1dDTFMpO1xuICAgICAgfSxcbiAgICAgIGZhbHNlLFxuICAgICk7XG4gICAgdGhpcy5mbG9hdGluZ0VsLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgcHJpdmF0ZSBoaWRlQWxsKCkge1xuICAgIGNvbnN0IGFsbE5vZGUgPSB0aGlzLmZsb2F0aW5nRWwucXVlcnlTZWxlY3RvckFsbCgnLicgKyBGTE9BVElOR0NMUyk7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnByZWZlci1mb3Itb2ZcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbE5vZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFsbE5vZGVbaV0uY2xhc3NMaXN0LnJlbW92ZShTSE9XQ0xTKTtcbiAgICB9XG4gIH1cblxuICAvLyBjYWxjdWxhdGUgdGhlIG5vZGUgcG9zaXRpb24gdmFsdWVzLlxuICBwcml2YXRlIGNhbFBvcyhsaW5rTm9kZTogSFRNTExpbmtFbGVtZW50LCBub2RlOiBIVE1MVUxpc3RFbGVtZW50KSB7XG4gICAgY29uc3QgcmVjdCA9IGxpbmtOb2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIC8vIGJ1ZzogaHR0cHM6Ly9kZXZlbG9wZXIubWljcm9zb2Z0LmNvbS9lbi11cy9taWNyb3NvZnQtZWRnZS9wbGF0Zm9ybS9pc3N1ZXMvMTQ3MjEwMTUvXG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gTWF0aC5tYXgodGhpcy5kb2MuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCwgdGhpcy5ib2R5RWwuc2Nyb2xsVG9wKTtcbiAgICBjb25zdCBkb2NIZWlnaHQgPSBNYXRoLm1heCh0aGlzLmRvYy5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LCB0aGlzLmJvZHlFbC5jbGllbnRIZWlnaHQpO1xuICAgIGxldCBvZmZzZXRIZWlnaHQgPSAwO1xuICAgIGlmIChkb2NIZWlnaHQgPCByZWN0LnRvcCArIG5vZGUuY2xpZW50SGVpZ2h0KSB7XG4gICAgICBvZmZzZXRIZWlnaHQgPSByZWN0LnRvcCArIG5vZGUuY2xpZW50SGVpZ2h0IC0gZG9jSGVpZ2h0O1xuICAgIH1cbiAgICBub2RlLnN0eWxlLnRvcCA9IGAke3JlY3QudG9wICsgc2Nyb2xsVG9wIC0gb2Zmc2V0SGVpZ2h0fXB4YDtcbiAgICBub2RlLnN0eWxlLmxlZnQgPSBgJHtyZWN0LnJpZ2h0ICsgNX1weGA7XG4gIH1cblxuICBzaG93U3ViTWVudShlOiBNb3VzZUV2ZW50LCBpdGVtOiBOYXYpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jb2xsYXBzZWQgIT09IHRydWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgbGlua05vZGUgPSBlLnRhcmdldCBhcyBFbGVtZW50O1xuICAgICAgdGhpcy5nZW5GbG9hdGluZ0NvbnRhaW5lcigpO1xuICAgICAgY29uc3Qgc3ViTm9kZSA9IHRoaXMuZ2VuU3ViTm9kZShsaW5rTm9kZSBhcyBIVE1MTGlua0VsZW1lbnQsIGl0ZW0pO1xuICAgICAgdGhpcy5oaWRlQWxsKCk7XG4gICAgICBzdWJOb2RlLmNsYXNzTGlzdC5hZGQoU0hPV0NMUyk7XG4gICAgICB0aGlzLmNhbFBvcyhsaW5rTm9kZSBhcyBIVE1MTGlua0VsZW1lbnQsIHN1Yk5vZGUpO1xuICAgIH0pO1xuICB9XG5cbiAgdG8oaXRlbTogTWVudSk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0LmVtaXQoaXRlbSk7XG4gICAgaWYgKGl0ZW0uZGlzYWJsZWQpIHJldHVybjtcblxuICAgIGlmIChpdGVtLmV4dGVybmFsTGluaykge1xuICAgICAgaWYgKGl0ZW0udGFyZ2V0ID09PSAnX2JsYW5rJykge1xuICAgICAgICB0aGlzLndpbi5vcGVuKGl0ZW0uZXh0ZXJuYWxMaW5rKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMud2luLmxvY2F0aW9uLmhyZWYgPSBpdGVtLmV4dGVybmFsTGluaztcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoaXRlbS5saW5rISkpO1xuICB9XG5cbiAgdG9nZ2xlT3BlbihpdGVtOiBOYXYpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMub3BlblN0cmljdGx5KSB7XG4gICAgICB0aGlzLm1lbnVTcnYudmlzaXQodGhpcy5saXN0LCBpID0+IHtcbiAgICAgICAgaWYgKGkgIT09IGl0ZW0pIGkuX29wZW4gPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgICAgbGV0IHBJdGVtID0gaXRlbS5fX3BhcmVudDtcbiAgICAgIHdoaWxlIChwSXRlbSkge1xuICAgICAgICBwSXRlbS5fb3BlbiA9IHRydWU7XG4gICAgICAgIHBJdGVtID0gcEl0ZW0uX19wYXJlbnQ7XG4gICAgICB9XG4gICAgfVxuICAgIGl0ZW0uX29wZW4gPSAhaXRlbS5fb3BlbjtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIF9jbGljaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc1BhZCAmJiB0aGlzLmNvbGxhcHNlZCkge1xuICAgICAgdGhpcy5vcGVuQXNpZGUoZmFsc2UpO1xuICAgICAgdGhpcy5oaWRlQWxsKCk7XG4gICAgfVxuICB9XG5cbiAgX2RvY0NsaWNrKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvbGxhcHNlZCkge1xuICAgICAgdGhpcy5oaWRlQWxsKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBvcGVuZWRCeVVybCh1cmw6IHN0cmluZyB8IG51bGwpIHtcbiAgICBjb25zdCB7IG1lbnVTcnYsIHJlY3Vyc2l2ZVBhdGgsIG9wZW5TdHJpY3RseSB9ID0gdGhpcztcbiAgICBsZXQgZmluZEl0ZW0gPSBtZW51U3J2LmdldEhpdCh0aGlzLm1lbnVTcnYubWVudXMsIHVybCEsIHJlY3Vyc2l2ZVBhdGgsIGkgPT4ge1xuICAgICAgaS5fc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgIGlmICghb3BlblN0cmljdGx5KSB7XG4gICAgICAgIGkuX29wZW4gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoZmluZEl0ZW0gPT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgZG8ge1xuICAgICAgZmluZEl0ZW0uX3NlbGVjdGVkID0gdHJ1ZTtcbiAgICAgIGlmICghb3BlblN0cmljdGx5KSB7XG4gICAgICAgIGZpbmRJdGVtLl9vcGVuID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGZpbmRJdGVtID0gZmluZEl0ZW0uX19wYXJlbnQ7XG4gICAgfSB3aGlsZSAoZmluZEl0ZW0pO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3QgeyBkb2MsIHJvdXRlciwgdW5zdWJzY3JpYmUkLCBtZW51U3J2LCBjZHIgfSA9IHRoaXM7XG4gICAgdGhpcy5ib2R5RWwgPSBkb2MucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIHRoaXMub3BlbmVkQnlVcmwocm91dGVyLnVybCk7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5nZW5GbG9hdGluZ0NvbnRhaW5lcigpKTtcbiAgICBtZW51U3J2LmNoYW5nZS5waXBlKHRha2VVbnRpbCh1bnN1YnNjcmliZSQpKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICBtZW51U3J2LnZpc2l0KGRhdGEsIChpOiBOYXYsIF9wLCBkZXB0aCkgPT4ge1xuICAgICAgICBpLl90ZXh0ID0gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoaS50ZXh0ISk7XG4gICAgICAgIGkuX25lZWRJY29uID0gZGVwdGghIDw9IDMgJiYgISFpLmljb247XG4gICAgICAgIGlmICghaS5fYWNsUmVzdWx0KSB7XG4gICAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWRBY2wpIHtcbiAgICAgICAgICAgIGkuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpLl9oaWRkZW4gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vcGVuU3RyaWN0bHkpIHtcbiAgICAgICAgICBpLl9vcGVuID0gaS5vcGVuICE9IG51bGwgPyBpLm9wZW4gOiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLmxpc3QgPSBtZW51U3J2Lm1lbnVzO1xuICAgICAgY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgICByb3V0ZXIuZXZlbnRzLnBpcGUodGFrZVVudGlsKHVuc3Vic2NyaWJlJCkpLnN1YnNjcmliZShlID0+IHtcbiAgICAgIGlmIChlIGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCkge1xuICAgICAgICB0aGlzLm9wZW5lZEJ5VXJsKGUudXJsQWZ0ZXJSZWRpcmVjdHMpO1xuICAgICAgICB0aGlzLnVuZGVyUGFkKCk7XG4gICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnVuZGVyUGFkKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBjb25zdCB7IHVuc3Vic2NyaWJlJCB9ID0gdGhpcztcbiAgICB1bnN1YnNjcmliZSQubmV4dCgpO1xuICAgIHVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuICAgIHRoaXMuY2xlYXJGbG9hdGluZ0NvbnRhaW5lcigpO1xuICB9XG5cbiAgLy8gI3JlZ2lvbiBVbmRlciBwYWRcblxuICBwcml2YXRlIGdldCBpc1BhZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gd2luZG93LmlubmVyV2lkdGggPCA3Njg7XG4gIH1cblxuICBwcml2YXRlIHVuZGVyUGFkKCkge1xuICAgIGlmICh0aGlzLmF1dG9DbG9zZVVuZGVyUGFkICYmIHRoaXMuaXNQYWQgJiYgIXRoaXMuY29sbGFwc2VkKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMub3BlbkFzaWRlKHRydWUpKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG9wZW5Bc2lkZShzdGF0dXM6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnNldHRpbmdzLnNldExheW91dCgnY29sbGFwc2VkJywgc3RhdHVzKTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cbn1cbiJdfQ==