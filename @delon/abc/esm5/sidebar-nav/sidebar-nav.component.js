/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, HostListener, Inject, Input, Output, Renderer2, } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { MenuService, SettingsService, WINDOW } from '@delon/theme';
import { InputBoolean } from '@delon/util';
/** @type {?} */
var SHOWCLS = 'sidebar-nav__floating-show';
/** @type {?} */
var FLOATINGCLS = 'sidebar-nav__floating';
var SidebarNavComponent = /** @class */ (function () {
    function SidebarNavComponent(menuSrv, settings, router, render, cdr, doc, win) {
        this.menuSrv = menuSrv;
        this.settings = settings;
        this.router = router;
        this.render = render;
        this.cdr = cdr;
        this.doc = doc;
        this.win = win;
        this.unsubscribe$ = new Subject();
        this.list = [];
        this.disabledAcl = false;
        this.autoCloseUnderPad = true;
        this.recursivePath = true;
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
         * @return {?}
         */
        function () {
            return this.menuSrv.menus;
        },
        enumerable: true,
        configurable: true
    });
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
        var id = +(/** @type {?} */ (linkNode.dataset)).id;
        /** @type {?} */
        var item;
        this.menuSrv.visit(this._d, function (i) {
            if (!item && i.__id === id) {
                item = i;
            }
        });
        this.to(item);
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
    SidebarNavComponent.prototype.to = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
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
        this.router.navigateByUrl(item.link);
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
        this.menuSrv.visit(this._d, function (i, p) {
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
    SidebarNavComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var _a = this, doc = _a.doc, router = _a.router, unsubscribe$ = _a.unsubscribe$, menuSrv = _a.menuSrv, cdr = _a.cdr;
        this.bodyEl = doc.querySelector('body');
        menuSrv.openedByUrl(router.url, this.recursivePath);
        this.genFloatingContainer();
        menuSrv.change.pipe(takeUntil(unsubscribe$)).subscribe(function (data) {
            menuSrv.visit(data, function (i) {
                if (i._aclResult)
                    return;
                if (_this.disabledAcl) {
                    i.disabled = true;
                }
                else {
                    i._hidden = true;
                }
            });
            _this.list = menuSrv.menus;
            cdr.detectChanges();
        });
        router.events
            .pipe(takeUntil(unsubscribe$), filter(function (e) { return e instanceof NavigationEnd; }))
            .subscribe(function (e) {
            _this.menuSrv.openedByUrl(e.urlAfterRedirects, _this.recursivePath);
            _this.underPad();
            _this.cdr.detectChanges();
        });
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
    SidebarNavComponent.prototype.underPad = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.autoCloseUnderPad && this.isPad && !this.collapsed) {
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
                    template: "<ng-template #icon let-i>\n  <ng-container *ngIf=\"i\" [ngSwitch]=\"i.type\">\n    <i *ngSwitchCase=\"'icon'\" class=\"sidebar-nav__item-icon\" nz-icon [type]=\"i.value\" [theme]=\"i.theme\" [spin]=\"i.spin\" [twoToneColor]=\"i.twoToneColor\" [iconfont]=\"i.iconfont\"></i>\n    <img *ngSwitchCase=\"'img'\" src=\"{{ i.value }}\" class=\"sidebar-nav__item-icon sidebar-nav__item-img\">\n    <i *ngSwitchDefault class=\"sidebar-nav__item-icon {{ i.value }}\"></i>\n  </ng-container>\n</ng-template>\n<ul class=\"sidebar-nav\">\n  <ng-container *ngFor=\"let group of list\">\n    <ng-container *ngIf=\"group._hidden !== true\">\n      <li class=\"sidebar-nav__item sidebar-nav__group-title\" *ngIf=\"group.group\">\n        <span>{{ group.text }}</span>\n      </li>\n      <ng-container *ngFor=\"let child1 of group.children\">\n        <li *ngIf=\"child1._hidden !== true\" class=\"sidebar-nav__item\" [class.sidebar-nav__selected]=\"child1._selected\" [class.sidebar-nav__open]=\"child1._open\">\n          <!-- link -->\n          <a *ngIf=\"child1._type <= 2\" (click)=\"to(child1)\" [attr.data-id]=\"child1.__id\" class=\"sidebar-nav__item-link\" [ngClass]=\"{'sidebar-nav__item-disabled': child1.disabled}\">\n            <ng-container *ngIf=\"!collapsed\">\n              <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{$implicit: child1.icon}\"></ng-template>\n            </ng-container>\n            <nz-tooltip *ngIf=\"collapsed\" nzPlacement=\"right\" [nzTitle]=\"child1.text\">\n              <span nz-tooltip>\n                <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{$implicit: child1.icon}\"></ng-template>\n              </span>\n            </nz-tooltip>\n            <span class=\"sidebar-nav__item-text\">{{ child1.text }}</span>\n          </a>\n          <!-- has children link -->\n          <a *ngIf=\"child1._type === 3\" (click)=\"toggleOpen(child1)\" (mouseenter)=\"showSubMenu($event, child1)\" class=\"sidebar-nav__item-link\">\n            <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{$implicit: child1.icon}\"></ng-template>\n            <span class=\"sidebar-nav__item-text\">{{ child1.text }}</span>\n            <i class=\"sidebar-nav__sub-arrow\"></i>\n          </a>\n          <!-- badge -->\n          <div *ngIf=\"child1.badge\" title=\"{{child1.badge}}\" class=\"badge badge-{{child1.badgeStatus}}\"\n            [class.badge-dot]=\"child1.badgeDot\">\n            <em>{{child1.badge}}</em>\n          </div>\n          <!-- Level 2 -->\n          <ul *ngIf=\"child1._type === 3\" class=\"sidebar-nav sidebar-nav__sub sidebar-nav__depth{{child1._depth}}\">\n            <ng-container *ngFor=\"let child2 of child1.children\">\n              <li *ngIf=\"child2._hidden !== true\" class=\"sidebar-nav__item\" [class.sidebar-nav__selected]=\"child2._selected\" [class.sidebar-nav__open]=\"child2._open\">\n                <!-- link -->\n                <a *ngIf=\"child2._type <= 2\" (click)=\"to(child2)\" [attr.data-id]=\"child2.__id\" class=\"sidebar-nav__item-link\" [ngClass]=\"{'sidebar-nav__item-disabled': child2.disabled}\">{{ child2.text }}</a>\n                <!-- has children link -->\n                <a *ngIf=\"child2._type === 3\" (click)=\"toggleOpen(child2)\" class=\"sidebar-nav__item-link\">\n                  {{ child2.text }}\n                  <i class=\"sidebar-nav__sub-arrow\"></i>\n                </a>\n                <!-- badge -->\n                <div *ngIf=\"child2.badge\" title=\"{{child2.badge}}\" class=\"badge badge-{{child2.badgeStatus}}\"\n                  [class.badge-dot]=\"child2.badgeDot\">\n                  <em>{{child2.badge}}</em>\n                </div>\n                <!-- Level 3 -->\n                <ul *ngIf=\"child2._type === 3\" class=\"sidebar-nav sidebar-nav__sub sidebar-nav__depth{{child2._depth}}\">\n                  <ng-container *ngFor=\"let child3 of child2.children\">\n                    <li *ngIf=\"child3._hidden !== true\" class=\"sidebar-nav__item\" [class.sidebar-nav__selected]=\"child3._selected\" [class.sidebar-nav__open]=\"child3._open\">\n                      <!-- link -->\n                      <a *ngIf=\"child3._type <= 2\" (click)=\"to(child3)\" [attr.data-id]=\"child3.__id\" class=\"sidebar-nav__item-link\" [ngClass]=\"{'sidebar-nav__item-disabled': child3.disabled}\">{{ child3.text }}</a>\n                      <!-- external link -->\n                      <a *ngIf=\"child3._type === 2\" href=\"{{ child3.externalLink }}\" target=\"{{ child3.target }}\"\n                        data-type=\"external\" class=\"sidebar-nav__item-link\">{{ child3.text }}</a>\n                      <!-- badge -->\n                      <div *ngIf=\"child3.badge\" title=\"{{child3.badge}}\" class=\"badge badge-{{child3.badgeStatus}}\"\n                        [class.badge-dot]=\"child3.badgeDot\">\n                        <em>{{child3.badge}}</em>\n                      </div>\n                    </li>\n                  </ng-container>\n                </ul>\n              </li>\n            </ng-container>\n          </ul>\n        </li>\n      </ng-container>\n    </ng-container>\n  </ng-container>\n</ul>\n",
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
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: Window, decorators: [{ type: Inject, args: [WINDOW,] }] }
    ]; };
    SidebarNavComponent.propDecorators = {
        disabledAcl: [{ type: Input }],
        autoCloseUnderPad: [{ type: Input }],
        recursivePath: [{ type: Input }],
        select: [{ type: Output }],
        _click: [{ type: HostListener, args: ['click',] }],
        _docClick: [{ type: HostListener, args: ['document:click',] }]
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
    return SidebarNavComponent;
}());
export { SidebarNavComponent };
if (false) {
    /** @type {?} */
    SidebarNavComponent.prototype.bodyEl;
    /** @type {?} */
    SidebarNavComponent.prototype.unsubscribe$;
    /**
     * \@inner
     * @type {?}
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
    SidebarNavComponent.prototype.select;
    /** @type {?} */
    SidebarNavComponent.prototype.menuSrv;
    /** @type {?} */
    SidebarNavComponent.prototype.settings;
    /** @type {?} */
    SidebarNavComponent.prototype.router;
    /** @type {?} */
    SidebarNavComponent.prototype.render;
    /** @type {?} */
    SidebarNavComponent.prototype.cdr;
    /** @type {?} */
    SidebarNavComponent.prototype.doc;
    /** @type {?} */
    SidebarNavComponent.prototype.win;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci1uYXYuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9zaWRlYmFyLW5hdi8iLCJzb3VyY2VzIjpbInNpZGViYXItbmF2LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUdMLE1BQU0sRUFDTixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkQsT0FBTyxFQUFRLFdBQVcsRUFBRSxlQUFlLEVBQUUsTUFBTSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxhQUFhLENBQUM7O0lBSXJDLE9BQU8sR0FBRyw0QkFBNEI7O0lBQ3RDLFdBQVcsR0FBRyx1QkFBdUI7QUFFM0M7SUF5QkUsNkJBQ1UsT0FBb0IsRUFDcEIsUUFBeUIsRUFDekIsTUFBYyxFQUNkLE1BQWlCLEVBQ2pCLEdBQXNCLEVBRUosR0FBUSxFQUNWLEdBQVc7UUFQM0IsWUFBTyxHQUFQLE9BQU8sQ0FBYTtRQUNwQixhQUFRLEdBQVIsUUFBUSxDQUFpQjtRQUN6QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUNqQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUVKLFFBQUcsR0FBSCxHQUFHLENBQUs7UUFDVixRQUFHLEdBQUgsR0FBRyxDQUFRO1FBMUI3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NUIsU0FBUztnQkFUVCxpQkFBaUI7Z0RBdURkLE1BQU0sU0FBQyxRQUFRO2dCQUNhLE1BQU0sdUJBQWxDLE1BQU0sU0FBQyxNQUFNOzs7OEJBckJmLEtBQUs7b0NBQ0wsS0FBSztnQ0FDTCxLQUFLO3lCQUNMLE1BQU07eUJBeUpOLFlBQVksU0FBQyxPQUFPOzRCQVFwQixZQUFZLFNBQUMsZ0JBQWdCOztJQXBLTDtRQUFmLFlBQVksRUFBRTs7NERBQXFCO0lBQ3BCO1FBQWYsWUFBWSxFQUFFOztrRUFBMEI7SUFDekI7UUFBZixZQUFZLEVBQUU7OzhEQUFzQjtJQTZOaEQsMEJBQUM7Q0FBQSxBQTNPRCxJQTJPQztTQXRPWSxtQkFBbUI7OztJQUM5QixxQ0FBZ0M7O0lBQ2hDLDJDQUEyQzs7Ozs7SUFFM0MseUNBQTJCOztJQUMzQixtQ0FBaUI7O0lBRWpCLDBDQUE2Qzs7SUFDN0MsZ0RBQWtEOztJQUNsRCw0Q0FBOEM7O0lBQzlDLHFDQUFxRDs7SUFXbkQsc0NBQTRCOztJQUM1Qix1Q0FBaUM7O0lBQ2pDLHFDQUFzQjs7SUFDdEIscUNBQXlCOztJQUN6QixrQ0FBOEI7O0lBRTlCLGtDQUFrQzs7SUFDbEMsa0NBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdExpc3RlbmVyLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkVuZCwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBNZW51LCBNZW51U2VydmljZSwgU2V0dGluZ3NTZXJ2aWNlLCBXSU5ET1cgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5pbXBvcnQgeyBOYXYgfSBmcm9tICcuL3NpZGViYXItbmF2LnR5cGVzJztcblxuY29uc3QgU0hPV0NMUyA9ICdzaWRlYmFyLW5hdl9fZmxvYXRpbmctc2hvdyc7XG5jb25zdCBGTE9BVElOR0NMUyA9ICdzaWRlYmFyLW5hdl9fZmxvYXRpbmcnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzaWRlYmFyLW5hdicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWRlYmFyLW5hdi5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBTaWRlYmFyTmF2Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGJvZHlFbDogSFRNTEJvZHlFbGVtZW50O1xuICBwcml2YXRlIHVuc3Vic2NyaWJlJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIC8qKiBAaW5uZXIgKi9cbiAgZmxvYXRpbmdFbDogSFRNTERpdkVsZW1lbnQ7XG4gIGxpc3Q6IE5hdltdID0gW107XG5cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRpc2FibGVkQWNsID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBhdXRvQ2xvc2VVbmRlclBhZCA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSByZWN1cnNpdmVQYXRoID0gdHJ1ZTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8TWVudT4oKTtcblxuICBnZXQgY29sbGFwc2VkKCkge1xuICAgIHJldHVybiB0aGlzLnNldHRpbmdzLmxheW91dC5jb2xsYXBzZWQ7XG4gIH1cblxuICBwcml2YXRlIGdldCBfZCgpIHtcbiAgICByZXR1cm4gdGhpcy5tZW51U3J2Lm1lbnVzO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBtZW51U3J2OiBNZW51U2VydmljZSxcbiAgICBwcml2YXRlIHNldHRpbmdzOiBTZXR0aW5nc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIHJlbmRlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IGFueSxcbiAgICBASW5qZWN0KFdJTkRPVykgcHJpdmF0ZSB3aW46IFdpbmRvdyxcbiAgKSB7fVxuXG4gIHByaXZhdGUgZmxvYXRpbmdBcmVhQ2xpY2tIYW5kbGUoZTogTW91c2VFdmVudCkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY29uc3QgbGlua05vZGUgPSBlLnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICBpZiAobGlua05vZGUubm9kZU5hbWUgIT09ICdBJykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBpZCA9ICtsaW5rTm9kZS5kYXRhc2V0IS5pZDtcbiAgICBsZXQgaXRlbTogTmF2O1xuICAgIHRoaXMubWVudVNydi52aXNpdCh0aGlzLl9kLCBpID0+IHtcbiAgICAgIGlmICghaXRlbSAmJiBpLl9faWQgPT09IGlkKSB7XG4gICAgICAgIGl0ZW0gPSBpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMudG8oaXRlbSk7XG4gICAgdGhpcy5oaWRlQWxsKCk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJGbG9hdGluZ0NvbnRhaW5lcigpIHtcbiAgICBpZiAoIXRoaXMuZmxvYXRpbmdFbCkgcmV0dXJuO1xuICAgIHRoaXMuZmxvYXRpbmdFbC5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgJ2NsaWNrJyxcbiAgICAgIHRoaXMuZmxvYXRpbmdBcmVhQ2xpY2tIYW5kbGUuYmluZCh0aGlzKSxcbiAgICApO1xuICAgIC8vIGZpeCBpZTogaHR0cHM6Ly9naXRodWIuY29tL25nLWFsYWluL2RlbG9uL2lzc3Vlcy81MlxuICAgIGlmICh0aGlzLmZsb2F0aW5nRWwuaGFzT3duUHJvcGVydHkoJ3JlbW92ZScpKSB7XG4gICAgICB0aGlzLmZsb2F0aW5nRWwucmVtb3ZlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmZsb2F0aW5nRWwucGFyZW50Tm9kZSkge1xuICAgICAgdGhpcy5mbG9hdGluZ0VsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5mbG9hdGluZ0VsKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdlbkZsb2F0aW5nQ29udGFpbmVyKCkge1xuICAgIHRoaXMuY2xlYXJGbG9hdGluZ0NvbnRhaW5lcigpO1xuICAgIHRoaXMuZmxvYXRpbmdFbCA9IHRoaXMucmVuZGVyLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuZmxvYXRpbmdFbC5jbGFzc0xpc3QuYWRkKEZMT0FUSU5HQ0xTICsgJy1jb250YWluZXInKTtcbiAgICB0aGlzLmZsb2F0aW5nRWwuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdjbGljaycsXG4gICAgICB0aGlzLmZsb2F0aW5nQXJlYUNsaWNrSGFuZGxlLmJpbmQodGhpcyksXG4gICAgICBmYWxzZSxcbiAgICApO1xuICAgIHRoaXMuYm9keUVsLmFwcGVuZENoaWxkKHRoaXMuZmxvYXRpbmdFbCk7XG4gIH1cblxuICBwcml2YXRlIGdlblN1Yk5vZGUobGlua05vZGU6IEhUTUxMaW5rRWxlbWVudCwgaXRlbTogTmF2KTogSFRNTFVMaXN0RWxlbWVudCB7XG4gICAgY29uc3QgaWQgPSBgX3NpZGViYXItbmF2LSR7aXRlbS5fX2lkfWA7XG4gICAgY29uc3Qgbm9kZSA9IGxpbmtOb2RlLm5leHRFbGVtZW50U2libGluZy5jbG9uZU5vZGUoXG4gICAgICB0cnVlLFxuICAgICkgYXMgSFRNTFVMaXN0RWxlbWVudDtcbiAgICBub2RlLmlkID0gaWQ7XG4gICAgbm9kZS5jbGFzc0xpc3QuYWRkKEZMT0FUSU5HQ0xTKTtcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAnbW91c2VsZWF2ZScsXG4gICAgICAoKSA9PiB7XG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZShTSE9XQ0xTKTtcbiAgICAgIH0sXG4gICAgICBmYWxzZSxcbiAgICApO1xuICAgIHRoaXMuZmxvYXRpbmdFbC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHByaXZhdGUgaGlkZUFsbCgpIHtcbiAgICBjb25zdCBhbGxOb2RlID0gdGhpcy5mbG9hdGluZ0VsLnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgRkxPQVRJTkdDTFMpO1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpwcmVmZXItZm9yLW9mXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxOb2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhbGxOb2RlW2ldLmNsYXNzTGlzdC5yZW1vdmUoU0hPV0NMUyk7XG4gICAgfVxuICB9XG5cbiAgLy8gY2FsY3VsYXRlIHRoZSBub2RlIHBvc2l0aW9uIHZhbHVlcy5cbiAgcHJpdmF0ZSBjYWxQb3MobGlua05vZGU6IEhUTUxMaW5rRWxlbWVudCwgbm9kZTogSFRNTFVMaXN0RWxlbWVudCkge1xuICAgIGNvbnN0IHJlY3QgPSBsaW5rTm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAvLyBidWc6IGh0dHBzOi8vZGV2ZWxvcGVyLm1pY3Jvc29mdC5jb20vZW4tdXMvbWljcm9zb2Z0LWVkZ2UvcGxhdGZvcm0vaXNzdWVzLzE0NzIxMDE1L1xuICAgIGNvbnN0IHNjcm9sbFRvcCA9IE1hdGgubWF4KFxuICAgICAgdGhpcy5kb2MuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCxcbiAgICAgIHRoaXMuYm9keUVsLnNjcm9sbFRvcCxcbiAgICApO1xuICAgIGNvbnN0IGRvY0hlaWdodCA9IE1hdGgubWF4KFxuICAgICAgdGhpcy5kb2MuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCxcbiAgICAgIHRoaXMuYm9keUVsLmNsaWVudEhlaWdodCxcbiAgICApO1xuICAgIGxldCBvZmZzZXRIZWlnaHQgPSAwO1xuICAgIGlmIChkb2NIZWlnaHQgPCByZWN0LnRvcCArIG5vZGUuY2xpZW50SGVpZ2h0KSB7XG4gICAgICBvZmZzZXRIZWlnaHQgPSByZWN0LnRvcCArIG5vZGUuY2xpZW50SGVpZ2h0IC0gZG9jSGVpZ2h0O1xuICAgIH1cbiAgICBub2RlLnN0eWxlLnRvcCA9IGAke3JlY3QudG9wICsgc2Nyb2xsVG9wIC0gb2Zmc2V0SGVpZ2h0fXB4YDtcbiAgICBub2RlLnN0eWxlLmxlZnQgPSBgJHtyZWN0LnJpZ2h0ICsgNX1weGA7XG4gIH1cblxuICBzaG93U3ViTWVudShlOiBNb3VzZUV2ZW50LCBpdGVtOiBOYXYpIHtcbiAgICBpZiAodGhpcy5jb2xsYXBzZWQgIT09IHRydWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGxpbmtOb2RlID0gZS50YXJnZXQgYXMgRWxlbWVudDtcbiAgICB0aGlzLmdlbkZsb2F0aW5nQ29udGFpbmVyKCk7XG4gICAgY29uc3Qgc3ViTm9kZSA9IHRoaXMuZ2VuU3ViTm9kZShsaW5rTm9kZSBhcyBIVE1MTGlua0VsZW1lbnQsIGl0ZW0pO1xuICAgIHRoaXMuaGlkZUFsbCgpO1xuICAgIHN1Yk5vZGUuY2xhc3NMaXN0LmFkZChTSE9XQ0xTKTtcbiAgICB0aGlzLmNhbFBvcyhsaW5rTm9kZSBhcyBIVE1MTGlua0VsZW1lbnQsIHN1Yk5vZGUpO1xuICB9XG5cbiAgdG8oaXRlbTogTWVudSkge1xuICAgIHRoaXMuc2VsZWN0LmVtaXQoaXRlbSk7XG4gICAgaWYgKGl0ZW0uZGlzYWJsZWQpIHJldHVybiA7XG5cbiAgICBpZiAoaXRlbS5leHRlcm5hbExpbmspIHtcbiAgICAgIGlmIChpdGVtLnRhcmdldCA9PT0gJ19ibGFuaycpIHtcbiAgICAgICAgdGhpcy53aW4ub3BlbihpdGVtLmV4dGVybmFsTGluayk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLndpbi5sb2NhdGlvbi5ocmVmID0gaXRlbS5leHRlcm5hbExpbms7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoaXRlbS5saW5rKTtcbiAgfVxuXG4gIHRvZ2dsZU9wZW4oaXRlbTogTmF2KSB7XG4gICAgdGhpcy5tZW51U3J2LnZpc2l0KHRoaXMuX2QsIChpLCBwKSA9PiB7XG4gICAgICBpZiAoaSAhPT0gaXRlbSkgaS5fb3BlbiA9IGZhbHNlO1xuICAgIH0pO1xuICAgIGxldCBwSXRlbSA9IGl0ZW0uX19wYXJlbnQ7XG4gICAgd2hpbGUgKHBJdGVtKSB7XG4gICAgICBwSXRlbS5fb3BlbiA9IHRydWU7XG4gICAgICBwSXRlbSA9IHBJdGVtLl9fcGFyZW50O1xuICAgIH1cbiAgICBpdGVtLl9vcGVuID0gIWl0ZW0uX29wZW47XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIF9jbGljaygpIHtcbiAgICBpZiAodGhpcy5pc1BhZCAmJiB0aGlzLmNvbGxhcHNlZCkge1xuICAgICAgdGhpcy5vcGVuQXNpZGUoZmFsc2UpO1xuICAgICAgdGhpcy5oaWRlQWxsKCk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6Y2xpY2snKVxuICBfZG9jQ2xpY2soKSB7XG4gICAgdGhpcy5oaWRlQWxsKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCB7IGRvYywgcm91dGVyLCB1bnN1YnNjcmliZSQsIG1lbnVTcnYsIGNkciB9ID0gdGhpcztcbiAgICB0aGlzLmJvZHlFbCA9IGRvYy5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgbWVudVNydi5vcGVuZWRCeVVybChyb3V0ZXIudXJsLCB0aGlzLnJlY3Vyc2l2ZVBhdGgpO1xuICAgIHRoaXMuZ2VuRmxvYXRpbmdDb250YWluZXIoKTtcbiAgICBtZW51U3J2LmNoYW5nZS5waXBlKHRha2VVbnRpbCh1bnN1YnNjcmliZSQpKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICBtZW51U3J2LnZpc2l0KGRhdGEsIGkgPT4ge1xuICAgICAgICBpZiAoaS5fYWNsUmVzdWx0KSByZXR1cm47XG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkQWNsKSB7XG4gICAgICAgICAgaS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaS5faGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLmxpc3QgPSBtZW51U3J2Lm1lbnVzO1xuICAgICAgY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgICByb3V0ZXIuZXZlbnRzXG4gICAgICAucGlwZShcbiAgICAgICAgdGFrZVVudGlsKHVuc3Vic2NyaWJlJCksXG4gICAgICAgIGZpbHRlcihlID0+IGUgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSxcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKGU6IE5hdmlnYXRpb25FbmQpID0+IHtcbiAgICAgICAgdGhpcy5tZW51U3J2Lm9wZW5lZEJ5VXJsKGUudXJsQWZ0ZXJSZWRpcmVjdHMsIHRoaXMucmVjdXJzaXZlUGF0aCk7XG4gICAgICAgIHRoaXMudW5kZXJQYWQoKTtcbiAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfSk7XG4gICAgdGhpcy51bmRlclBhZCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgY29uc3QgeyB1bnN1YnNjcmliZSQgfSA9IHRoaXM7XG4gICAgdW5zdWJzY3JpYmUkLm5leHQoKTtcbiAgICB1bnN1YnNjcmliZSQuY29tcGxldGUoKTtcbiAgICB0aGlzLmNsZWFyRmxvYXRpbmdDb250YWluZXIoKTtcbiAgfVxuXG4gIC8vICNyZWdpb24gVW5kZXIgcGFkXG5cbiAgcHJpdmF0ZSBnZXQgaXNQYWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHdpbmRvdy5pbm5lcldpZHRoIDwgNzY4O1xuICB9XG5cbiAgcHJpdmF0ZSB1bmRlclBhZCgpIHtcbiAgICBpZiAodGhpcy5hdXRvQ2xvc2VVbmRlclBhZCAmJiB0aGlzLmlzUGFkICYmICF0aGlzLmNvbGxhcHNlZCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLm9wZW5Bc2lkZSh0cnVlKSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBvcGVuQXNpZGUoc3RhdHVzOiBib29sZWFuKSB7XG4gICAgdGhpcy5zZXR0aW5ncy5zZXRMYXlvdXQoJ2NvbGxhcHNlZCcsIHN0YXR1cyk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG59XG4iXX0=