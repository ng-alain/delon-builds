import { __decorate, __metadata } from 'tslib';
import { DomSanitizer } from '@angular/platform-browser';
import { DOCUMENT, CommonModule } from '@angular/common';
import { EventEmitter, Component, ChangeDetectionStrategy, ViewEncapsulation, Renderer2, ChangeDetectorRef, NgZone, Inject, Input, Output, NgModule } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { MenuService, SettingsService, WINDOW } from '@delon/theme';
import { InputBoolean, DelonUtilModule } from '@delon/util';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

/**
 * @fileoverview added by tsickle
 * Generated from: sidebar-nav.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const SHOWCLS = 'sidebar-nav__floating-show';
/** @type {?} */
const FLOATINGCLS = 'sidebar-nav__floating';
class SidebarNavComponent {
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
        this.menuSrv.visit(this.list, (/**
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
            return;
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
            this.menuSrv.visit(this.list, (/**
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
             * @param {?} _p
             * @param {?} depth
             * @return {?}
             */
            (i, _p, depth) => {
                i._text = this.sanitizer.bypassSecurityTrustHtml((/** @type {?} */ (i.text)));
                i._needIcon = (/** @type {?} */ (depth)) <= 1;
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
                template: "<ng-template #icon let-i>\n  <ng-container *ngIf=\"i\" [ngSwitch]=\"i.type\">\n    <i *ngSwitchCase=\"'icon'\" class=\"sidebar-nav__item-icon\" nz-icon [nzType]=\"i.value\" [nzTheme]=\"i.theme\"\n      [nzSpin]=\"i.spin\" [nzTwotoneColor]=\"i.twoToneColor\" [nzIconfont]=\"i.iconfont\"></i>\n    <i *ngSwitchCase=\"'iconfont'\" class=\"sidebar-nav__item-icon\" nz-icon [nzIconfont]=\"i.iconfont\"></i>\n    <img *ngSwitchCase=\"'img'\" [src]=\"i.value\" class=\"sidebar-nav__item-icon sidebar-nav__item-img\">\n    <i *ngSwitchDefault class=\"sidebar-nav__item-icon {{ i.value }}\"></i>\n  </ng-container>\n</ng-template>\n<ng-template #item let-i>\n  <!-- link -->\n  <a *ngIf=\"i._type <= 2\" (click)=\"to(i)\" [attr.data-id]=\"i.__id\" class=\"sidebar-nav__item-link\"\n    [ngClass]=\"{'sidebar-nav__item-disabled': i.disabled}\">\n    <ng-container *ngIf=\"i._needIcon\">\n      <ng-container *ngIf=\"!collapsed\">\n        <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{$implicit: i.icon}\"></ng-template>\n      </ng-container>\n      <span *ngIf=\"collapsed\" nz-tooltip nzTooltipPlacement=\"right\" [nzTooltipTitle]=\"i._text\">\n        <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{$implicit: i.icon}\"></ng-template>\n      </span>\n    </ng-container>\n    <span class=\"sidebar-nav__item-text\" [innerHTML]=\"i._text\"></span>\n  </a>\n  <!-- has children link -->\n  <a *ngIf=\"i._type === 3\" (click)=\"toggleOpen(i)\" (mouseenter)=\"showSubMenu($event, i)\" class=\"sidebar-nav__item-link\">\n    <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{$implicit: i.icon}\"></ng-template>\n    <span class=\"sidebar-nav__item-text\" [innerHTML]=\"i._text\"></span>\n    <i class=\"sidebar-nav__sub-arrow\"></i>\n  </a>\n  <!-- badge -->\n  <div *ngIf=\"i.badge\" [attr.title]=\"i.badge\" class=\"badge badge-{{i.badgeStatus}}\" [class.badge-dot]=\"i.badgeDot\">\n    <em>{{i.badge}}</em>\n  </div>\n</ng-template>\n<ul class=\"sidebar-nav\">\n  <ng-container *ngFor=\"let group of list\">\n    <ng-container *ngIf=\"group._hidden !== true\">\n      <li class=\"sidebar-nav__item sidebar-nav__group-title\" *ngIf=\"group.group\">\n        <span [innerHTML]=\"group._text\"></span>\n      </li>\n      <ng-container *ngFor=\"let child1 of group.children\">\n        <li *ngIf=\"child1._hidden !== true\" class=\"sidebar-nav__item\" [class.sidebar-nav__selected]=\"child1._selected\"\n          [class.sidebar-nav__open]=\"child1._open\">\n          <ng-template [ngTemplateOutlet]=\"item\" [ngTemplateOutletContext]=\"{$implicit: child1}\"></ng-template>\n          <!-- Level 2 -->\n          <ul *ngIf=\"child1._type === 3\" class=\"sidebar-nav sidebar-nav__sub sidebar-nav__depth{{child1._depth}}\">\n            <ng-container *ngFor=\"let child2 of child1.children\">\n              <li *ngIf=\"child2._hidden !== true\" class=\"sidebar-nav__item\"\n                [class.sidebar-nav__selected]=\"child2._selected\" [class.sidebar-nav__open]=\"child2._open\">\n                <ng-template [ngTemplateOutlet]=\"item\" [ngTemplateOutletContext]=\"{$implicit: child2}\"></ng-template>\n                <!-- Level 3 -->\n                <ul *ngIf=\"child2._type === 3\" class=\"sidebar-nav sidebar-nav__sub sidebar-nav__depth{{child2._depth}}\">\n                  <ng-container *ngFor=\"let child3 of child2.children\">\n                    <li *ngIf=\"child3._hidden !== true\" class=\"sidebar-nav__item\"\n                      [class.sidebar-nav__selected]=\"child3._selected\" [class.sidebar-nav__open]=\"child3._open\">\n                      <ng-template [ngTemplateOutlet]=\"item\" [ngTemplateOutletContext]=\"{$implicit: child3}\">\n                      </ng-template>\n                    </li>\n                  </ng-container>\n                </ul>\n              </li>\n            </ng-container>\n          </ul>\n        </li>\n      </ng-container>\n    </ng-container>\n  </ng-container>\n</ul>\n",
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

/**
 * @fileoverview added by tsickle
 * Generated from: sidebar-nav.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SidebarNavModule {
}
SidebarNavModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, RouterModule, NzIconModule, NzToolTipModule, DelonUtilModule],
                declarations: [SidebarNavComponent],
                exports: [SidebarNavComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: sidebarNav.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { SidebarNavComponent, SidebarNavModule };
//# sourceMappingURL=sidebarNav.js.map
