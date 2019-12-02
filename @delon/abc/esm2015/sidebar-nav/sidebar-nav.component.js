/**
 * @fileoverview added by tsickle
 * Generated from: sidebar-nav.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DomSanitizer } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Inject, Input, NgZone, Output, Renderer2, ViewEncapsulation, } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MenuService, SettingsService, WINDOW } from '@delon/theme';
import { InputBoolean } from '@delon/util';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
/** @type {?} */
const SHOWCLS = 'sidebar-nav__floating-show';
/** @type {?} */
const FLOATINGCLS = 'sidebar-nav__floating';
export class SidebarNavComponent {
    /**
     * @param {?} menuSrv
     * @param {?} settings
     * @param {?} router
     * @param {?} render
     * @param {?} cdr
     * @param {?} ngZone
     * @param {?} sanitizer
     * @param {?} doc
     * @param {?} win
     */
    constructor(menuSrv, settings, router, render, cdr, ngZone, sanitizer, doc, win) {
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
        this.select = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get collapsed() {
        return this.settings.layout.collapsed;
    }
    /**
     * @private
     * @return {?}
     */
    get _d() {
        return this.menuSrv.menus;
    }
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    floatingAreaClickHandle(e) {
        e.stopPropagation();
        /** @type {?} */
        const linkNode = (/** @type {?} */ (e.target));
        if (linkNode.nodeName !== 'A') {
            return false;
        }
        /** @type {?} */
        const id = +(/** @type {?} */ ((/** @type {?} */ (linkNode.dataset)).id));
        // Should be ingore children title trigger event
        if (isNaN(id)) {
            return false;
        }
        /** @type {?} */
        let item;
        this.menuSrv.visit(this._d, (/**
         * @param {?} i
         * @return {?}
         */
        i => {
            if (!item && i.__id === id) {
                item = i;
            }
        }));
        this.to((/** @type {?} */ (item)));
        this.hideAll();
        e.preventDefault();
        return false;
    }
    /**
     * @private
     * @return {?}
     */
    clearFloatingContainer() {
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
    }
    /**
     * @private
     * @return {?}
     */
    genFloatingContainer() {
        this.clearFloatingContainer();
        this.floatingEl = this.render.createElement('div');
        this.floatingEl.classList.add(FLOATINGCLS + '-container');
        this.floatingEl.addEventListener('click', this.floatingAreaClickHandle.bind(this), false);
        this.bodyEl.appendChild(this.floatingEl);
    }
    /**
     * @private
     * @param {?} linkNode
     * @param {?} item
     * @return {?}
     */
    genSubNode(linkNode, item) {
        /** @type {?} */
        const id = `_sidebar-nav-${item.__id}`;
        /** @type {?} */
        const childNode = item.badge ? (/** @type {?} */ ((/** @type {?} */ (linkNode.nextElementSibling)).nextElementSibling)) : (/** @type {?} */ (linkNode.nextElementSibling));
        /** @type {?} */
        const node = (/** @type {?} */ (childNode.cloneNode(true)));
        node.id = id;
        node.classList.add(FLOATINGCLS);
        node.addEventListener('mouseleave', (/**
         * @return {?}
         */
        () => {
            node.classList.remove(SHOWCLS);
        }), false);
        this.floatingEl.appendChild(node);
        return node;
    }
    /**
     * @private
     * @return {?}
     */
    hideAll() {
        /** @type {?} */
        const allNode = this.floatingEl.querySelectorAll('.' + FLOATINGCLS);
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < allNode.length; i++) {
            allNode[i].classList.remove(SHOWCLS);
        }
    }
    // calculate the node position values.
    /**
     * @private
     * @param {?} linkNode
     * @param {?} node
     * @return {?}
     */
    calPos(linkNode, node) {
        /** @type {?} */
        const rect = linkNode.getBoundingClientRect();
        // bug: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/14721015/
        /** @type {?} */
        const scrollTop = Math.max(this.doc.documentElement.scrollTop, this.bodyEl.scrollTop);
        /** @type {?} */
        const docHeight = Math.max(this.doc.documentElement.clientHeight, this.bodyEl.clientHeight);
        /** @type {?} */
        let offsetHeight = 0;
        if (docHeight < rect.top + node.clientHeight) {
            offsetHeight = rect.top + node.clientHeight - docHeight;
        }
        node.style.top = `${rect.top + scrollTop - offsetHeight}px`;
        node.style.left = `${rect.right + 5}px`;
    }
    /**
     * @param {?} e
     * @param {?} item
     * @return {?}
     */
    showSubMenu(e, item) {
        if (this.collapsed !== true) {
            return;
        }
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            e.preventDefault();
            /** @type {?} */
            const linkNode = (/** @type {?} */ (e.target));
            this.genFloatingContainer();
            /** @type {?} */
            const subNode = this.genSubNode((/** @type {?} */ (linkNode)), item);
            this.hideAll();
            subNode.classList.add(SHOWCLS);
            this.calPos((/** @type {?} */ (linkNode)), subNode);
        }));
    }
    /**
     * @param {?} item
     * @return {?}
     */
    to(item) {
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
        () => this.router.navigateByUrl((/** @type {?} */ (item.link)))));
    }
    /**
     * @param {?} item
     * @return {?}
     */
    toggleOpen(item) {
        if (!this.openStrictly) {
            this.menuSrv.visit(this._d, (/**
             * @param {?} i
             * @return {?}
             */
            i => {
                if (i !== item)
                    i._open = false;
            }));
            /** @type {?} */
            let pItem = item.__parent;
            while (pItem) {
                pItem._open = true;
                pItem = pItem.__parent;
            }
        }
        item._open = !item._open;
        this.cdr.markForCheck();
    }
    /**
     * @return {?}
     */
    _click() {
        if (this.isPad && this.collapsed) {
            this.openAside(false);
            this.hideAll();
        }
    }
    /**
     * @return {?}
     */
    _docClick() {
        this.hideAll();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        const { doc, router, unsubscribe$, menuSrv, cdr } = this;
        this.bodyEl = doc.querySelector('body');
        menuSrv.openedByUrl(router.url, this.recursivePath);
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => this.genFloatingContainer()));
        menuSrv.change.pipe(takeUntil(unsubscribe$)).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            menuSrv.visit(data, (/**
             * @param {?} i
             * @return {?}
             */
            (i) => {
                i._text = this.sanitizer.bypassSecurityTrustHtml((/** @type {?} */ (i.text)));
                if (!i._aclResult) {
                    if (this.disabledAcl) {
                        i.disabled = true;
                    }
                    else {
                        i._hidden = true;
                    }
                }
                if (this.openStrictly) {
                    i._open = i.open != null ? i.open : false;
                }
            }));
            this.list = menuSrv.menus;
            cdr.detectChanges();
        }));
        router.events.pipe(takeUntil(unsubscribe$)).subscribe((/**
         * @param {?} e
         * @return {?}
         */
        e => {
            if (e instanceof NavigationEnd) {
                this.menuSrv.openedByUrl(e.urlAfterRedirects, this.recursivePath);
                this.underPad();
                this.cdr.detectChanges();
            }
        }));
        this.underPad();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        const { unsubscribe$ } = this;
        unsubscribe$.next();
        unsubscribe$.complete();
        this.clearFloatingContainer();
    }
    // #region Under pad
    /**
     * @private
     * @return {?}
     */
    get isPad() {
        return window.innerWidth < 768;
    }
    /**
     * @private
     * @return {?}
     */
    underPad() {
        if (this.autoCloseUnderPad && this.isPad && !this.collapsed) {
            setTimeout((/**
             * @return {?}
             */
            () => this.openAside(true)));
        }
    }
    /**
     * @private
     * @param {?} status
     * @return {?}
     */
    openAside(status) {
        this.settings.setLayout('collapsed', status);
    }
}
SidebarNavComponent.decorators = [
    { type: Component, args: [{
                selector: 'sidebar-nav',
                exportAs: 'sidebarNav',
                template: "<ng-template #icon let-i>\n  <ng-container *ngIf=\"i\" [ngSwitch]=\"i.type\">\n    <i *ngSwitchCase=\"'icon'\" class=\"sidebar-nav__item-icon\" nz-icon [nzType]=\"i.value\" [nzTheme]=\"i.theme\"\n      [nzSpin]=\"i.spin\" [nzTwotoneColor]=\"i.twoToneColor\" [nzIconfont]=\"i.iconfont\"></i>\n    <i *ngSwitchCase=\"'iconfont'\" class=\"sidebar-nav__item-icon\" nz-icon [nzIconfont]=\"i.iconfont\"></i>\n    <img *ngSwitchCase=\"'img'\" [src]=\"i.value\" class=\"sidebar-nav__item-icon sidebar-nav__item-img\">\n    <i *ngSwitchDefault class=\"sidebar-nav__item-icon {{ i.value }}\"></i>\n  </ng-container>\n</ng-template>\n<ul class=\"sidebar-nav\">\n  <ng-container *ngFor=\"let group of list\">\n    <ng-container *ngIf=\"group._hidden !== true\">\n      <li class=\"sidebar-nav__item sidebar-nav__group-title\" *ngIf=\"group.group\">\n        <span [innerHTML]=\"group._text\"></span>\n      </li>\n      <ng-container *ngFor=\"let child1 of group.children\">\n        <li *ngIf=\"child1._hidden !== true\" class=\"sidebar-nav__item\" [class.sidebar-nav__selected]=\"child1._selected\"\n          [class.sidebar-nav__open]=\"child1._open\">\n          <!-- link -->\n          <a *ngIf=\"child1._type <= 2\" (click)=\"to(child1)\" [attr.data-id]=\"child1.__id\" class=\"sidebar-nav__item-link\"\n            [ngClass]=\"{'sidebar-nav__item-disabled': child1.disabled}\">\n            <ng-container *ngIf=\"!collapsed\">\n              <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{$implicit: child1.icon}\"></ng-template>\n            </ng-container>\n            <span *ngIf=\"collapsed\" nz-tooltip nzTooltipPlacement=\"right\" [nzTooltipTitle]=\"child1._text\">\n              <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{$implicit: child1.icon}\"></ng-template>\n            </span>\n            <span class=\"sidebar-nav__item-text\" [innerHTML]=\"child1._text\"></span>\n          </a>\n          <!-- has children link -->\n          <a *ngIf=\"child1._type === 3\" (click)=\"toggleOpen(child1)\" (mouseenter)=\"showSubMenu($event, child1)\"\n            class=\"sidebar-nav__item-link\">\n            <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{$implicit: child1.icon}\"></ng-template>\n            <span class=\"sidebar-nav__item-text\" [innerHTML]=\"child1._text\"></span>\n            <i class=\"sidebar-nav__sub-arrow\"></i>\n          </a>\n          <!-- badge -->\n          <div *ngIf=\"child1.badge\" [attr.title]=\"child1.badge\" class=\"badge badge-{{child1.badgeStatus}}\"\n            [class.badge-dot]=\"child1.badgeDot\">\n            <em>{{child1.badge}}</em>\n          </div>\n          <!-- Level 2 -->\n          <ul *ngIf=\"child1._type === 3\" class=\"sidebar-nav sidebar-nav__sub sidebar-nav__depth{{child1._depth}}\">\n            <ng-container *ngFor=\"let child2 of child1.children\">\n              <li *ngIf=\"child2._hidden !== true\" class=\"sidebar-nav__item\"\n                [class.sidebar-nav__selected]=\"child2._selected\" [class.sidebar-nav__open]=\"child2._open\">\n                <!-- link -->\n                <a *ngIf=\"child2._type <= 2\" (click)=\"to(child2)\" [attr.data-id]=\"child2.__id\"\n                  class=\"sidebar-nav__item-link\" [ngClass]=\"{'sidebar-nav__item-disabled': child2.disabled}\"\n                  [innerHTML]=\"child2._text\">\n                </a>\n                <!-- has children link -->\n                <a *ngIf=\"child2._type === 3\" (click)=\"toggleOpen(child2)\" class=\"sidebar-nav__item-link\">\n                  <span [innerHTML]=\"child2._text\"></span>\n                  <i class=\"sidebar-nav__sub-arrow\"></i>\n                </a>\n                <!-- badge -->\n                <div *ngIf=\"child2.badge\" [attr.title]=\"child2.badge\" class=\"badge badge-{{child2.badgeStatus}}\"\n                  [class.badge-dot]=\"child2.badgeDot\">\n                  <em>{{child2.badge}}</em>\n                </div>\n                <!-- Level 3 -->\n                <ul *ngIf=\"child2._type === 3\" class=\"sidebar-nav sidebar-nav__sub sidebar-nav__depth{{child2._depth}}\">\n                  <ng-container *ngFor=\"let child3 of child2.children\">\n                    <li *ngIf=\"child3._hidden !== true\" class=\"sidebar-nav__item\"\n                      [class.sidebar-nav__selected]=\"child3._selected\" [class.sidebar-nav__open]=\"child3._open\">\n                      <!-- link -->\n                      <a *ngIf=\"child3._type === 1\" (click)=\"to(child3)\" [attr.data-id]=\"child3.__id\"\n                        class=\"sidebar-nav__item-link\" [ngClass]=\"{'sidebar-nav__item-disabled': child3.disabled}\"\n                        [innerHTML]=\"child3._text\"></a>\n                      <!-- external link -->\n                      <a *ngIf=\"child3._type === 2\" [attr.href]=\"child3.externalLink\" [attr.target]=\"child3.target\"\n                        data-type=\"external\" class=\"sidebar-nav__item-link\" [innerHTML]=\"child3._text\"></a>\n                      <!-- badge -->\n                      <div *ngIf=\"child3.badge\" [attr.title]=\"child3.badge\" class=\"badge badge-{{child3.badgeStatus}}\"\n                        [class.badge-dot]=\"child3.badgeDot\">\n                        <em>{{child3.badge}}</em>\n                      </div>\n                    </li>\n                  </ng-container>\n                </ul>\n              </li>\n            </ng-container>\n          </ul>\n        </li>\n      </ng-container>\n    </ng-container>\n  </ng-container>\n</ul>\n",
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
SidebarNavComponent.ctorParameters = () => [
    { type: MenuService },
    { type: SettingsService },
    { type: Router },
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: NgZone },
    { type: DomSanitizer },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Window, decorators: [{ type: Inject, args: [WINDOW,] }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci1uYXYuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9zaWRlYmFyLW5hdi8iLCJzb3VyY2VzIjpbInNpZGViYXItbmF2LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDekQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFDTCxNQUFNLEVBR04sTUFBTSxFQUNOLFNBQVMsRUFDVCxpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN4RCxPQUFPLEVBQVEsV0FBVyxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDMUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7TUFJckMsT0FBTyxHQUFHLDRCQUE0Qjs7TUFDdEMsV0FBVyxHQUFHLHVCQUF1QjtBQWMzQyxNQUFNLE9BQU8sbUJBQW1COzs7Ozs7Ozs7Ozs7SUFvQjlCLFlBQ1UsT0FBb0IsRUFDcEIsUUFBeUIsRUFDekIsTUFBYyxFQUNkLE1BQWlCLEVBQ2pCLEdBQXNCLEVBQ3RCLE1BQWMsRUFDZCxTQUF1QixFQUNMLEdBQVEsRUFDVixHQUFXO1FBUjNCLFlBQU8sR0FBUCxPQUFPLENBQWE7UUFDcEIsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7UUFDekIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFdBQU0s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QUNhLE1BQU0sdUJBQWxDLE1BQU0sU0FBQyxNQUFNOzs7MEJBdkJmLEtBQUs7Z0NBQ0wsS0FBSzs0QkFDTCxLQUFLOzJCQUNMLEtBQUs7cUJBQ0wsTUFBTTs7QUFKa0I7SUFBZixZQUFZLEVBQUU7O3dEQUFxQjtBQUNwQjtJQUFmLFlBQVksRUFBRTs7OERBQTBCO0FBQ3pCO0lBQWYsWUFBWSxFQUFFOzswREFBc0I7QUFDckI7SUFBZixZQUFZLEVBQUU7O3lEQUFzQjs7Ozs7O0lBUjlDLHFDQUFnQzs7Ozs7SUFDaEMsMkNBQTJDOzs7OztJQUMzQyx5Q0FBbUM7O0lBQ25DLG1DQUFpQjs7SUFFakIsMENBQTZDOztJQUM3QyxnREFBa0Q7O0lBQ2xELDRDQUE4Qzs7SUFDOUMsMkNBQThDOztJQUM5QyxxQ0FBcUQ7Ozs7O0lBV25ELHNDQUE0Qjs7Ozs7SUFDNUIsdUNBQWlDOzs7OztJQUNqQyxxQ0FBc0I7Ozs7O0lBQ3RCLHFDQUF5Qjs7Ozs7SUFDekIsa0NBQThCOzs7OztJQUM5QixxQ0FBc0I7Ozs7O0lBQ3RCLHdDQUErQjs7Ozs7SUFDL0Isa0NBQWtDOzs7OztJQUNsQyxrQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uRW5kLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTWVudSwgTWVudVNlcnZpY2UsIFNldHRpbmdzU2VydmljZSwgV0lORE9XIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgTmF2IH0gZnJvbSAnLi9zaWRlYmFyLW5hdi50eXBlcyc7XG5cbmNvbnN0IFNIT1dDTFMgPSAnc2lkZWJhci1uYXZfX2Zsb2F0aW5nLXNob3cnO1xuY29uc3QgRkxPQVRJTkdDTFMgPSAnc2lkZWJhci1uYXZfX2Zsb2F0aW5nJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2lkZWJhci1uYXYnLFxuICBleHBvcnRBczogJ3NpZGViYXJOYXYnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2lkZWJhci1uYXYuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7XG4gICAgJyhjbGljayknOiAnX2NsaWNrKCknLFxuICAgICcoZG9jdW1lbnQ6Y2xpY2spJzogJ19kb2NDbGljaygpJyxcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBTaWRlYmFyTmF2Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGJvZHlFbDogSFRNTEJvZHlFbGVtZW50O1xuICBwcml2YXRlIHVuc3Vic2NyaWJlJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHByaXZhdGUgZmxvYXRpbmdFbDogSFRNTERpdkVsZW1lbnQ7XG4gIGxpc3Q6IE5hdltdID0gW107XG5cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRpc2FibGVkQWNsID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBhdXRvQ2xvc2VVbmRlclBhZCA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSByZWN1cnNpdmVQYXRoID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG9wZW5TdHJpY3RseSA9IGZhbHNlO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgc2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxNZW51PigpO1xuXG4gIGdldCBjb2xsYXBzZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0dGluZ3MubGF5b3V0LmNvbGxhcHNlZDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IF9kKCkge1xuICAgIHJldHVybiB0aGlzLm1lbnVTcnYubWVudXM7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG1lbnVTcnY6IE1lbnVTZXJ2aWNlLFxuICAgIHByaXZhdGUgc2V0dGluZ3M6IFNldHRpbmdzU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgcmVuZGVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcixcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogYW55LFxuICAgIEBJbmplY3QoV0lORE9XKSBwcml2YXRlIHdpbjogV2luZG93LFxuICApIHsgfVxuXG4gIHByaXZhdGUgZmxvYXRpbmdBcmVhQ2xpY2tIYW5kbGUoZTogTW91c2VFdmVudCkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY29uc3QgbGlua05vZGUgPSBlLnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICBpZiAobGlua05vZGUubm9kZU5hbWUgIT09ICdBJykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBpZCA9ICtsaW5rTm9kZS5kYXRhc2V0IS5pZCE7XG4gICAgLy8gU2hvdWxkIGJlIGluZ29yZSBjaGlsZHJlbiB0aXRsZSB0cmlnZ2VyIGV2ZW50XG4gICAgaWYgKGlzTmFOKGlkKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGxldCBpdGVtOiBOYXY7XG4gICAgdGhpcy5tZW51U3J2LnZpc2l0KHRoaXMuX2QsIGkgPT4ge1xuICAgICAgaWYgKCFpdGVtICYmIGkuX19pZCA9PT0gaWQpIHtcbiAgICAgICAgaXRlbSA9IGk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy50byhpdGVtISk7XG4gICAgdGhpcy5oaWRlQWxsKCk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJGbG9hdGluZ0NvbnRhaW5lcigpIHtcbiAgICBpZiAoIXRoaXMuZmxvYXRpbmdFbCkgcmV0dXJuO1xuICAgIHRoaXMuZmxvYXRpbmdFbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZmxvYXRpbmdBcmVhQ2xpY2tIYW5kbGUuYmluZCh0aGlzKSk7XG4gICAgLy8gZml4IGllOiBodHRwczovL2dpdGh1Yi5jb20vbmctYWxhaW4vZGVsb24vaXNzdWVzLzUyXG4gICAgaWYgKHRoaXMuZmxvYXRpbmdFbC5oYXNPd25Qcm9wZXJ0eSgncmVtb3ZlJykpIHtcbiAgICAgIHRoaXMuZmxvYXRpbmdFbC5yZW1vdmUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZmxvYXRpbmdFbC5wYXJlbnROb2RlKSB7XG4gICAgICB0aGlzLmZsb2F0aW5nRWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmZsb2F0aW5nRWwpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2VuRmxvYXRpbmdDb250YWluZXIoKSB7XG4gICAgdGhpcy5jbGVhckZsb2F0aW5nQ29udGFpbmVyKCk7XG4gICAgdGhpcy5mbG9hdGluZ0VsID0gdGhpcy5yZW5kZXIuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5mbG9hdGluZ0VsLmNsYXNzTGlzdC5hZGQoRkxPQVRJTkdDTFMgKyAnLWNvbnRhaW5lcicpO1xuICAgIHRoaXMuZmxvYXRpbmdFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZmxvYXRpbmdBcmVhQ2xpY2tIYW5kbGUuYmluZCh0aGlzKSwgZmFsc2UpO1xuICAgIHRoaXMuYm9keUVsLmFwcGVuZENoaWxkKHRoaXMuZmxvYXRpbmdFbCk7XG4gIH1cblxuICBwcml2YXRlIGdlblN1Yk5vZGUobGlua05vZGU6IEhUTUxMaW5rRWxlbWVudCwgaXRlbTogTmF2KTogSFRNTFVMaXN0RWxlbWVudCB7XG4gICAgY29uc3QgaWQgPSBgX3NpZGViYXItbmF2LSR7aXRlbS5fX2lkfWA7XG4gICAgY29uc3QgY2hpbGROb2RlID0gaXRlbS5iYWRnZSA/IGxpbmtOb2RlLm5leHRFbGVtZW50U2libGluZyEubmV4dEVsZW1lbnRTaWJsaW5nISA6IGxpbmtOb2RlLm5leHRFbGVtZW50U2libGluZyE7XG4gICAgY29uc3Qgbm9kZSA9IGNoaWxkTm9kZS5jbG9uZU5vZGUodHJ1ZSkgYXMgSFRNTFVMaXN0RWxlbWVudDtcbiAgICBub2RlLmlkID0gaWQ7XG4gICAgbm9kZS5jbGFzc0xpc3QuYWRkKEZMT0FUSU5HQ0xTKTtcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAnbW91c2VsZWF2ZScsXG4gICAgICAoKSA9PiB7XG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZShTSE9XQ0xTKTtcbiAgICAgIH0sXG4gICAgICBmYWxzZSxcbiAgICApO1xuICAgIHRoaXMuZmxvYXRpbmdFbC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHByaXZhdGUgaGlkZUFsbCgpIHtcbiAgICBjb25zdCBhbGxOb2RlID0gdGhpcy5mbG9hdGluZ0VsLnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgRkxPQVRJTkdDTFMpO1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpwcmVmZXItZm9yLW9mXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxOb2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhbGxOb2RlW2ldLmNsYXNzTGlzdC5yZW1vdmUoU0hPV0NMUyk7XG4gICAgfVxuICB9XG5cbiAgLy8gY2FsY3VsYXRlIHRoZSBub2RlIHBvc2l0aW9uIHZhbHVlcy5cbiAgcHJpdmF0ZSBjYWxQb3MobGlua05vZGU6IEhUTUxMaW5rRWxlbWVudCwgbm9kZTogSFRNTFVMaXN0RWxlbWVudCkge1xuICAgIGNvbnN0IHJlY3QgPSBsaW5rTm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAvLyBidWc6IGh0dHBzOi8vZGV2ZWxvcGVyLm1pY3Jvc29mdC5jb20vZW4tdXMvbWljcm9zb2Z0LWVkZ2UvcGxhdGZvcm0vaXNzdWVzLzE0NzIxMDE1L1xuICAgIGNvbnN0IHNjcm9sbFRvcCA9IE1hdGgubWF4KHRoaXMuZG9jLmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AsIHRoaXMuYm9keUVsLnNjcm9sbFRvcCk7XG4gICAgY29uc3QgZG9jSGVpZ2h0ID0gTWF0aC5tYXgodGhpcy5kb2MuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCwgdGhpcy5ib2R5RWwuY2xpZW50SGVpZ2h0KTtcbiAgICBsZXQgb2Zmc2V0SGVpZ2h0ID0gMDtcbiAgICBpZiAoZG9jSGVpZ2h0IDwgcmVjdC50b3AgKyBub2RlLmNsaWVudEhlaWdodCkge1xuICAgICAgb2Zmc2V0SGVpZ2h0ID0gcmVjdC50b3AgKyBub2RlLmNsaWVudEhlaWdodCAtIGRvY0hlaWdodDtcbiAgICB9XG4gICAgbm9kZS5zdHlsZS50b3AgPSBgJHtyZWN0LnRvcCArIHNjcm9sbFRvcCAtIG9mZnNldEhlaWdodH1weGA7XG4gICAgbm9kZS5zdHlsZS5sZWZ0ID0gYCR7cmVjdC5yaWdodCArIDV9cHhgO1xuICB9XG5cbiAgc2hvd1N1Yk1lbnUoZTogTW91c2VFdmVudCwgaXRlbTogTmF2KSB7XG4gICAgaWYgKHRoaXMuY29sbGFwc2VkICE9PSB0cnVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IGxpbmtOb2RlID0gZS50YXJnZXQgYXMgRWxlbWVudDtcbiAgICAgIHRoaXMuZ2VuRmxvYXRpbmdDb250YWluZXIoKTtcbiAgICAgIGNvbnN0IHN1Yk5vZGUgPSB0aGlzLmdlblN1Yk5vZGUobGlua05vZGUgYXMgSFRNTExpbmtFbGVtZW50LCBpdGVtKTtcbiAgICAgIHRoaXMuaGlkZUFsbCgpO1xuICAgICAgc3ViTm9kZS5jbGFzc0xpc3QuYWRkKFNIT1dDTFMpO1xuICAgICAgdGhpcy5jYWxQb3MobGlua05vZGUgYXMgSFRNTExpbmtFbGVtZW50LCBzdWJOb2RlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHRvKGl0ZW06IE1lbnUpIHtcbiAgICB0aGlzLnNlbGVjdC5lbWl0KGl0ZW0pO1xuICAgIGlmIChpdGVtLmRpc2FibGVkKSByZXR1cm47XG5cbiAgICBpZiAoaXRlbS5leHRlcm5hbExpbmspIHtcbiAgICAgIGlmIChpdGVtLnRhcmdldCA9PT0gJ19ibGFuaycpIHtcbiAgICAgICAgdGhpcy53aW4ub3BlbihpdGVtLmV4dGVybmFsTGluayk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLndpbi5sb2NhdGlvbi5ocmVmID0gaXRlbS5leHRlcm5hbExpbms7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKGl0ZW0ubGluayEpKTtcbiAgfVxuXG4gIHRvZ2dsZU9wZW4oaXRlbTogTmF2KSB7XG4gICAgaWYgKCF0aGlzLm9wZW5TdHJpY3RseSkge1xuICAgICAgdGhpcy5tZW51U3J2LnZpc2l0KHRoaXMuX2QsIGkgPT4ge1xuICAgICAgICBpZiAoaSAhPT0gaXRlbSkgaS5fb3BlbiA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgICBsZXQgcEl0ZW0gPSBpdGVtLl9fcGFyZW50O1xuICAgICAgd2hpbGUgKHBJdGVtKSB7XG4gICAgICAgIHBJdGVtLl9vcGVuID0gdHJ1ZTtcbiAgICAgICAgcEl0ZW0gPSBwSXRlbS5fX3BhcmVudDtcbiAgICAgIH1cbiAgICB9XG4gICAgaXRlbS5fb3BlbiA9ICFpdGVtLl9vcGVuO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgX2NsaWNrKCkge1xuICAgIGlmICh0aGlzLmlzUGFkICYmIHRoaXMuY29sbGFwc2VkKSB7XG4gICAgICB0aGlzLm9wZW5Bc2lkZShmYWxzZSk7XG4gICAgICB0aGlzLmhpZGVBbGwoKTtcbiAgICB9XG4gIH1cblxuICBfZG9jQ2xpY2soKSB7XG4gICAgdGhpcy5oaWRlQWxsKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCB7IGRvYywgcm91dGVyLCB1bnN1YnNjcmliZSQsIG1lbnVTcnYsIGNkciB9ID0gdGhpcztcbiAgICB0aGlzLmJvZHlFbCA9IGRvYy5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgbWVudVNydi5vcGVuZWRCeVVybChyb3V0ZXIudXJsLCB0aGlzLnJlY3Vyc2l2ZVBhdGgpO1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuZ2VuRmxvYXRpbmdDb250YWluZXIoKSk7XG4gICAgbWVudVNydi5jaGFuZ2UucGlwZSh0YWtlVW50aWwodW5zdWJzY3JpYmUkKSkuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgbWVudVNydi52aXNpdChkYXRhLCAoaTogTmF2KSA9PiB7XG4gICAgICAgIGkuX3RleHQgPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChpLnRleHQhKTtcbiAgICAgICAgaWYgKCFpLl9hY2xSZXN1bHQpIHtcbiAgICAgICAgICBpZiAodGhpcy5kaXNhYmxlZEFjbCkge1xuICAgICAgICAgICAgaS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGkuX2hpZGRlbiA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9wZW5TdHJpY3RseSkge1xuICAgICAgICAgIGkuX29wZW4gPSBpLm9wZW4gIT0gbnVsbCA/IGkub3BlbiA6IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMubGlzdCA9IG1lbnVTcnYubWVudXM7XG4gICAgICBjZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuICAgIHJvdXRlci5ldmVudHMucGlwZSh0YWtlVW50aWwodW5zdWJzY3JpYmUkKSkuc3Vic2NyaWJlKGUgPT4ge1xuICAgICAgaWYgKGUgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSB7XG4gICAgICAgIHRoaXMubWVudVNydi5vcGVuZWRCeVVybChlLnVybEFmdGVyUmVkaXJlY3RzLCB0aGlzLnJlY3Vyc2l2ZVBhdGgpO1xuICAgICAgICB0aGlzLnVuZGVyUGFkKCk7XG4gICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnVuZGVyUGFkKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBjb25zdCB7IHVuc3Vic2NyaWJlJCB9ID0gdGhpcztcbiAgICB1bnN1YnNjcmliZSQubmV4dCgpO1xuICAgIHVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuICAgIHRoaXMuY2xlYXJGbG9hdGluZ0NvbnRhaW5lcigpO1xuICB9XG5cbiAgLy8gI3JlZ2lvbiBVbmRlciBwYWRcblxuICBwcml2YXRlIGdldCBpc1BhZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gd2luZG93LmlubmVyV2lkdGggPCA3Njg7XG4gIH1cblxuICBwcml2YXRlIHVuZGVyUGFkKCkge1xuICAgIGlmICh0aGlzLmF1dG9DbG9zZVVuZGVyUGFkICYmIHRoaXMuaXNQYWQgJiYgIXRoaXMuY29sbGFwc2VkKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMub3BlbkFzaWRlKHRydWUpKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG9wZW5Bc2lkZShzdGF0dXM6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnNldHRpbmdzLnNldExheW91dCgnY29sbGFwc2VkJywgc3RhdHVzKTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cbn1cbiJdfQ==