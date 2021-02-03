/**
 * @fileoverview added by tsickle
 * Generated from: layout-nav.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { Directionality } from '@angular/cdk/bidi';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Inject, Input, NgZone, Optional, Output, Renderer2, ViewEncapsulation, } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { MenuService, SettingsService } from '@delon/theme';
import { InputBoolean, InputNumber } from '@delon/util/decorator';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
/**
 * @record
 */
export function Nav() { }
if (false) {
    /** @type {?|undefined} */
    Nav.prototype._needIcon;
    /** @type {?|undefined} */
    Nav.prototype._text;
}
/** @type {?} */
const SHOWCLS = 'sidebar-nav__floating-show';
/** @type {?} */
const FLOATINGCLS = 'sidebar-nav__floating';
export class LayoutDefaultNavComponent {
    /**
     * @param {?} menuSrv
     * @param {?} settings
     * @param {?} router
     * @param {?} render
     * @param {?} cdr
     * @param {?} ngZone
     * @param {?} sanitizer
     * @param {?} doc
     * @param {?} directionality
     */
    constructor(menuSrv, settings, router, render, cdr, ngZone, sanitizer, doc, directionality) {
        this.menuSrv = menuSrv;
        this.settings = settings;
        this.router = router;
        this.render = render;
        this.cdr = cdr;
        this.ngZone = ngZone;
        this.sanitizer = sanitizer;
        this.doc = doc;
        this.directionality = directionality;
        this.destroy$ = new Subject();
        this.dir = 'ltr';
        this.list = [];
        this.disabledAcl = false;
        this.autoCloseUnderPad = true;
        this.recursivePath = true;
        this.openStrictly = false;
        this.maxLevelIcon = 3;
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
     * @param {?} node
     * @return {?}
     */
    getLinkNode(node) {
        node = node.nodeName === 'A' ? node : ((/** @type {?} */ (node.parentNode)));
        return node.nodeName !== 'A' ? null : node;
    }
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    floatingClickHandle(e) {
        e.stopPropagation();
        /** @type {?} */
        const linkNode = this.getLinkNode((/** @type {?} */ (e.target)));
        if (linkNode == null) {
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
        (i) => {
            if (!item && i._id === id) {
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
    clearFloating() {
        if (!this.floatingEl)
            return;
        this.floatingEl.removeEventListener('click', this.floatingClickHandle.bind(this));
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
    genFloating() {
        this.clearFloating();
        this.floatingEl = this.render.createElement('div');
        this.floatingEl.classList.add(FLOATINGCLS + '-container');
        this.floatingEl.addEventListener('click', this.floatingClickHandle.bind(this), false);
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
        const id = `_sidebar-nav-${item._id}`;
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
        const spacing = 5;
        /** @type {?} */
        let offsetHeight = -spacing;
        if (docHeight < rect.top + node.clientHeight) {
            offsetHeight = rect.top + node.clientHeight - docHeight + spacing;
        }
        node.style.top = `${rect.top + scrollTop - offsetHeight}px`;
        if (this.dir === 'rtl') {
            node.style.right = `${rect.width + spacing}px`;
        }
        else {
            node.style.left = `${rect.right + spacing}px`;
        }
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
            this.genFloating();
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
            const { defaultView } = this.doc;
            if (item.target === '_blank') {
                defaultView.open(item.externalLink);
            }
            else {
                defaultView.location.href = item.externalLink;
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
            (i) => {
                if (i !== item)
                    i._open = false;
            }));
            /** @type {?} */
            let pItem = (/** @type {?} */ (item._parent));
            while (pItem) {
                pItem._open = true;
                pItem = (/** @type {?} */ (pItem._parent));
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
        if (this.collapsed) {
            this.hideAll();
        }
    }
    /**
     * @private
     * @param {?} url
     * @return {?}
     */
    openedByUrl(url) {
        const { menuSrv, recursivePath, openStrictly } = this;
        /** @type {?} */
        let findItem = menuSrv.getHit(this.menuSrv.menus, (/** @type {?} */ (url)), recursivePath, (/**
         * @param {?} i
         * @return {?}
         */
        (i) => {
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
            findItem = (/** @type {?} */ (findItem._parent));
        } while (findItem);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        var _a;
        const { doc, router, destroy$, menuSrv, settings, cdr } = this;
        this.bodyEl = doc.querySelector('body');
        this.openedByUrl(router.url);
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => this.genFloating()));
        menuSrv.change.pipe(takeUntil(destroy$)).subscribe((/**
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
                i._needIcon = (/** @type {?} */ (depth)) <= this.maxLevelIcon && !!i.icon;
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
            this.list = menuSrv.menus.filter((/**
             * @param {?} w
             * @return {?}
             */
            (w) => w._hidden !== true));
            cdr.detectChanges();
        }));
        router.events.pipe(takeUntil(destroy$)).subscribe((/**
         * @param {?} e
         * @return {?}
         */
        e => {
            if (e instanceof NavigationEnd) {
                this.openedByUrl(e.urlAfterRedirects);
                this.underPad();
                this.cdr.detectChanges();
            }
        }));
        settings.notify
            .pipe(takeUntil(destroy$), filter((/**
         * @param {?} t
         * @return {?}
         */
        t => t.type === 'layout' && t.name === 'collapsed')))
            .subscribe((/**
         * @return {?}
         */
        () => this.clearFloating()));
        this.underPad();
        this.dir = this.directionality.value;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(destroy$)).subscribe((/**
         * @param {?} direction
         * @return {?}
         */
        (direction) => {
            this.dir = direction;
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this.clearFloating();
    }
    // #region Under pad
    /**
     * @private
     * @return {?}
     */
    get isPad() {
        return (/** @type {?} */ (this.doc.defaultView)).innerWidth < 768;
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
LayoutDefaultNavComponent.decorators = [
    { type: Component, args: [{
                selector: 'layout-default-nav',
                template: "<ng-template #icon let-i>\n  <ng-container *ngIf=\"i\" [ngSwitch]=\"i.type\">\n    <i\n      *ngSwitchCase=\"'icon'\"\n      class=\"sidebar-nav__item-icon\"\n      nz-icon\n      [nzType]=\"i.value\"\n      [nzTheme]=\"i.theme\"\n      [nzSpin]=\"i.spin\"\n      [nzTwotoneColor]=\"i.twoToneColor\"\n      [nzIconfont]=\"i.iconfont\"\n      [nzRotate]=\"i.rotate\"\n    ></i>\n    <i *ngSwitchCase=\"'iconfont'\" class=\"sidebar-nav__item-icon\" nz-icon [nzIconfont]=\"i.iconfont\"></i>\n    <img *ngSwitchCase=\"'img'\" [src]=\"i.value\" class=\"sidebar-nav__item-icon sidebar-nav__item-img\" />\n    <i *ngSwitchDefault class=\"sidebar-nav__item-icon {{ i.value }}\"></i>\n  </ng-container>\n</ng-template>\n<ng-template #tree let-ls>\n  <ng-container *ngFor=\"let i of ls\">\n    <li *ngIf=\"i._hidden !== true\" class=\"sidebar-nav__item\" [class.sidebar-nav__selected]=\"i._selected\" [class.sidebar-nav__open]=\"i._open\">\n      <!-- link -->\n      <a\n        *ngIf=\"i.children.length === 0\"\n        (click)=\"to(i)\"\n        [attr.data-id]=\"i._id\"\n        class=\"sidebar-nav__item-link\"\n        [ngClass]=\"{ 'sidebar-nav__item-disabled': i.disabled }\"\n      >\n        <ng-container *ngIf=\"i._needIcon\">\n          <ng-container *ngIf=\"!collapsed\">\n            <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{ $implicit: i.icon }\"></ng-template>\n          </ng-container>\n          <span *ngIf=\"collapsed\" nz-tooltip nzTooltipPlacement=\"right\" [nzTooltipTitle]=\"i.text\">\n            <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{ $implicit: i.icon }\"></ng-template>\n          </span>\n        </ng-container>\n        <span class=\"sidebar-nav__item-text\" [innerHTML]=\"i._text\" [attr.title]=\"i.text\"></span>\n      </a>\n      <!-- has children link -->\n      <a *ngIf=\"i.children.length > 0\" (click)=\"toggleOpen(i)\" (mouseenter)=\"showSubMenu($event, i)\" class=\"sidebar-nav__item-link\">\n        <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{ $implicit: i.icon }\"></ng-template>\n        <span class=\"sidebar-nav__item-text\" [innerHTML]=\"i._text\" [attr.title]=\"i.text\"></span>\n        <i class=\"sidebar-nav__sub-arrow\"></i>\n      </a>\n      <!-- badge -->\n      <div *ngIf=\"i.badge\" [attr.title]=\"i.badge\" class=\"badge badge-{{ i.badgeStatus }}\" [class.badge-dot]=\"i.badgeDot\">\n        <em>{{ i.badge }}</em>\n      </div>\n      <ul *ngIf=\"i.children.length > 0\" class=\"sidebar-nav sidebar-nav__sub sidebar-nav__depth{{ i._depth }}\">\n        <ng-template [ngTemplateOutlet]=\"tree\" [ngTemplateOutletContext]=\"{ $implicit: i.children }\"></ng-template>\n      </ul>\n    </li>\n  </ng-container>\n</ng-template>\n<ul class=\"sidebar-nav\">\n  <ng-container *ngFor=\"let group of list\">\n    <li class=\"sidebar-nav__item sidebar-nav__group-title\" *ngIf=\"group.group\">\n      <span [innerHTML]=\"group._text\"></span>\n    </li>\n    <ng-template [ngTemplateOutlet]=\"tree\" [ngTemplateOutletContext]=\"{ $implicit: group.children }\"></ng-template>\n  </ng-container>\n</ul>\n",
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
LayoutDefaultNavComponent.ctorParameters = () => [
    { type: MenuService },
    { type: SettingsService },
    { type: Router },
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: NgZone },
    { type: DomSanitizer },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Directionality, decorators: [{ type: Optional }] }
];
LayoutDefaultNavComponent.propDecorators = {
    disabledAcl: [{ type: Input }],
    autoCloseUnderPad: [{ type: Input }],
    recursivePath: [{ type: Input }],
    openStrictly: [{ type: Input }],
    maxLevelIcon: [{ type: Input }],
    select: [{ type: Output }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], LayoutDefaultNavComponent.prototype, "disabledAcl", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], LayoutDefaultNavComponent.prototype, "autoCloseUnderPad", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], LayoutDefaultNavComponent.prototype, "recursivePath", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], LayoutDefaultNavComponent.prototype, "openStrictly", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], LayoutDefaultNavComponent.prototype, "maxLevelIcon", void 0);
if (false) {
    /** @type {?} */
    LayoutDefaultNavComponent.ngAcceptInputType_disabledAcl;
    /** @type {?} */
    LayoutDefaultNavComponent.ngAcceptInputType_autoCloseUnderPad;
    /** @type {?} */
    LayoutDefaultNavComponent.ngAcceptInputType_recursivePath;
    /** @type {?} */
    LayoutDefaultNavComponent.ngAcceptInputType_openStrictly;
    /** @type {?} */
    LayoutDefaultNavComponent.ngAcceptInputType_maxLevelIcon;
    /**
     * @type {?}
     * @private
     */
    LayoutDefaultNavComponent.prototype.bodyEl;
    /**
     * @type {?}
     * @private
     */
    LayoutDefaultNavComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    LayoutDefaultNavComponent.prototype.floatingEl;
    /** @type {?} */
    LayoutDefaultNavComponent.prototype.dir;
    /** @type {?} */
    LayoutDefaultNavComponent.prototype.list;
    /** @type {?} */
    LayoutDefaultNavComponent.prototype.disabledAcl;
    /** @type {?} */
    LayoutDefaultNavComponent.prototype.autoCloseUnderPad;
    /** @type {?} */
    LayoutDefaultNavComponent.prototype.recursivePath;
    /** @type {?} */
    LayoutDefaultNavComponent.prototype.openStrictly;
    /** @type {?} */
    LayoutDefaultNavComponent.prototype.maxLevelIcon;
    /** @type {?} */
    LayoutDefaultNavComponent.prototype.select;
    /**
     * @type {?}
     * @private
     */
    LayoutDefaultNavComponent.prototype.menuSrv;
    /**
     * @type {?}
     * @private
     */
    LayoutDefaultNavComponent.prototype.settings;
    /**
     * @type {?}
     * @private
     */
    LayoutDefaultNavComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    LayoutDefaultNavComponent.prototype.render;
    /**
     * @type {?}
     * @private
     */
    LayoutDefaultNavComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    LayoutDefaultNavComponent.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    LayoutDefaultNavComponent.prototype.sanitizer;
    /**
     * @type {?}
     * @private
     */
    LayoutDefaultNavComponent.prototype.doc;
    /**
     * @type {?}
     * @private
     */
    LayoutDefaultNavComponent.prototype.directionality;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LW5hdi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90aGVtZS9sYXlvdXQtZGVmYXVsdC9sYXlvdXQtbmF2LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQWEsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFDTCxNQUFNLEVBR04sUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBQ1QsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQVksTUFBTSwyQkFBMkIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3hELE9BQU8sRUFBbUIsV0FBVyxFQUFFLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUM3RSxPQUFPLEVBQWdCLFlBQVksRUFBRSxXQUFXLEVBQWUsTUFBTSx1QkFBdUIsQ0FBQztBQUM3RixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFFbkQseUJBR0M7OztJQUZDLHdCQUFvQjs7SUFDcEIsb0JBQWlCOzs7TUFHYixPQUFPLEdBQUcsNEJBQTRCOztNQUN0QyxXQUFXLEdBQUcsdUJBQXVCO0FBYTNDLE1BQU0sT0FBTyx5QkFBeUI7Ozs7Ozs7Ozs7OztJQXdCcEMsWUFDVSxPQUFvQixFQUNwQixRQUF5QixFQUN6QixNQUFjLEVBQ2QsTUFBaUIsRUFDakIsR0FBc0IsRUFDdEIs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S0FBSzsyQkFDTCxLQUFLO3FCQUNMLE1BQU07O0FBTGtCO0lBQWYsWUFBWSxFQUFFOzs4REFBcUI7QUFDcEI7SUFBZixZQUFZLEVBQUU7O29FQUEwQjtBQUN6QjtJQUFmLFlBQVksRUFBRTs7Z0VBQXNCO0FBQ3JCO0lBQWYsWUFBWSxFQUFFOzsrREFBc0I7QUFDdEI7SUFBZCxXQUFXLEVBQUU7OytEQUFrQjs7O0lBaEJ6Qyx3REFBbUQ7O0lBQ25ELDhEQUF5RDs7SUFDekQsMERBQXFEOztJQUNyRCx5REFBb0Q7O0lBQ3BELHlEQUFtRDs7Ozs7SUFFbkQsMkNBQWdDOzs7OztJQUNoQyw2Q0FBdUM7Ozs7O0lBQ3ZDLCtDQUFtQzs7SUFDbkMsd0NBQXVCOztJQUN2Qix5Q0FBaUI7O0lBRWpCLGdEQUE2Qzs7SUFDN0Msc0RBQWtEOztJQUNsRCxrREFBOEM7O0lBQzlDLGlEQUE4Qzs7SUFDOUMsaURBQXlDOztJQUN6QywyQ0FBcUQ7Ozs7O0lBT25ELDRDQUE0Qjs7Ozs7SUFDNUIsNkNBQWlDOzs7OztJQUNqQywyQ0FBc0I7Ozs7O0lBQ3RCLDJDQUF5Qjs7Ozs7SUFDekIsd0NBQThCOzs7OztJQUM5QiwyQ0FBc0I7Ozs7O0lBQ3RCLDhDQUErQjs7Ozs7SUFDL0Isd0NBQWtDOzs7OztJQUNsQyxtREFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3Rpb24sIERpcmVjdGlvbmFsaXR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uRW5kLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTWVudSwgTWVudUlubmVyLCBNZW51U2VydmljZSwgU2V0dGluZ3NTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciwgTnVtYmVySW5wdXQgfSBmcm9tICdAZGVsb24vdXRpbC9kZWNvcmF0b3InO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmF2IGV4dGVuZHMgTWVudUlubmVyIHtcbiAgX25lZWRJY29uPzogYm9vbGVhbjtcbiAgX3RleHQ/OiBTYWZlSHRtbDtcbn1cblxuY29uc3QgU0hPV0NMUyA9ICdzaWRlYmFyLW5hdl9fZmxvYXRpbmctc2hvdyc7XG5jb25zdCBGTE9BVElOR0NMUyA9ICdzaWRlYmFyLW5hdl9fZmxvYXRpbmcnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsYXlvdXQtZGVmYXVsdC1uYXYnLFxuICB0ZW1wbGF0ZVVybDogJy4vbGF5b3V0LW5hdi5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICAnKGNsaWNrKSc6ICdfY2xpY2soKScsXG4gICAgJyhkb2N1bWVudDpjbGljayknOiAnX2RvY0NsaWNrKCknLFxuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIExheW91dERlZmF1bHROYXZDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9kaXNhYmxlZEFjbDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfYXV0b0Nsb3NlVW5kZXJQYWQ6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3JlY3Vyc2l2ZVBhdGg6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX29wZW5TdHJpY3RseTogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbWF4TGV2ZWxJY29uOiBOdW1iZXJJbnB1dDtcblxuICBwcml2YXRlIGJvZHlFbDogSFRNTEJvZHlFbGVtZW50O1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSBmbG9hdGluZ0VsOiBIVE1MRGl2RWxlbWVudDtcbiAgZGlyOiBEaXJlY3Rpb24gPSAnbHRyJztcbiAgbGlzdDogTmF2W10gPSBbXTtcblxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZGlzYWJsZWRBY2wgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGF1dG9DbG9zZVVuZGVyUGFkID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHJlY3Vyc2l2ZVBhdGggPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgb3BlblN0cmljdGx5ID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIG1heExldmVsSWNvbiA9IDM7XG4gIEBPdXRwdXQoKSByZWFkb25seSBzZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPE1lbnU+KCk7XG5cbiAgZ2V0IGNvbGxhcHNlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zZXR0aW5ncy5sYXlvdXQuY29sbGFwc2VkO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBtZW51U3J2OiBNZW51U2VydmljZSxcbiAgICBwcml2YXRlIHNldHRpbmdzOiBTZXR0aW5nc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIHJlbmRlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxuICAgIHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IGFueSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGRpcmVjdGlvbmFsaXR5OiBEaXJlY3Rpb25hbGl0eSxcbiAgKSB7fVxuXG4gIHByaXZhdGUgZ2V0TGlua05vZGUobm9kZTogSFRNTEVsZW1lbnQpOiBIVE1MRWxlbWVudCB8IG51bGwge1xuICAgIG5vZGUgPSBub2RlLm5vZGVOYW1lID09PSAnQScgPyBub2RlIDogKG5vZGUucGFyZW50Tm9kZSBhcyBIVE1MRWxlbWVudCk7XG4gICAgcmV0dXJuIG5vZGUubm9kZU5hbWUgIT09ICdBJyA/IG51bGwgOiBub2RlO1xuICB9XG5cbiAgcHJpdmF0ZSBmbG9hdGluZ0NsaWNrSGFuZGxlKGU6IE1vdXNlRXZlbnQpOiBib29sZWFuIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IGxpbmtOb2RlID0gdGhpcy5nZXRMaW5rTm9kZShlLnRhcmdldCBhcyBIVE1MRWxlbWVudCk7XG4gICAgaWYgKGxpbmtOb2RlID09IG51bGwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgaWQgPSArbGlua05vZGUuZGF0YXNldCEuaWQhO1xuICAgIC8vIFNob3VsZCBiZSBpbmdvcmUgY2hpbGRyZW4gdGl0bGUgdHJpZ2dlciBldmVudFxuICAgIGlmIChpc05hTihpZCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBsZXQgaXRlbTogTmF2O1xuICAgIHRoaXMubWVudVNydi52aXNpdCh0aGlzLmxpc3QsIChpOiBOYXYpID0+IHtcbiAgICAgIGlmICghaXRlbSAmJiBpLl9pZCA9PT0gaWQpIHtcbiAgICAgICAgaXRlbSA9IGk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy50byhpdGVtISk7XG4gICAgdGhpcy5oaWRlQWxsKCk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJGbG9hdGluZygpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZmxvYXRpbmdFbCkgcmV0dXJuO1xuICAgIHRoaXMuZmxvYXRpbmdFbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZmxvYXRpbmdDbGlja0hhbmRsZS5iaW5kKHRoaXMpKTtcbiAgICAvLyBmaXggaWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9uZy1hbGFpbi9kZWxvbi9pc3N1ZXMvNTJcbiAgICBpZiAodGhpcy5mbG9hdGluZ0VsLmhhc093blByb3BlcnR5KCdyZW1vdmUnKSkge1xuICAgICAgdGhpcy5mbG9hdGluZ0VsLnJlbW92ZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5mbG9hdGluZ0VsLnBhcmVudE5vZGUpIHtcbiAgICAgIHRoaXMuZmxvYXRpbmdFbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZmxvYXRpbmdFbCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZW5GbG9hdGluZygpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFyRmxvYXRpbmcoKTtcbiAgICB0aGlzLmZsb2F0aW5nRWwgPSB0aGlzLnJlbmRlci5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmZsb2F0aW5nRWwuY2xhc3NMaXN0LmFkZChGTE9BVElOR0NMUyArICctY29udGFpbmVyJyk7XG4gICAgdGhpcy5mbG9hdGluZ0VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5mbG9hdGluZ0NsaWNrSGFuZGxlLmJpbmQodGhpcyksIGZhbHNlKTtcbiAgICB0aGlzLmJvZHlFbC5hcHBlbmRDaGlsZCh0aGlzLmZsb2F0aW5nRWwpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5TdWJOb2RlKGxpbmtOb2RlOiBIVE1MTGlua0VsZW1lbnQsIGl0ZW06IE5hdik6IEhUTUxVTGlzdEVsZW1lbnQge1xuICAgIGNvbnN0IGlkID0gYF9zaWRlYmFyLW5hdi0ke2l0ZW0uX2lkfWA7XG4gICAgY29uc3QgY2hpbGROb2RlID0gaXRlbS5iYWRnZSA/IGxpbmtOb2RlLm5leHRFbGVtZW50U2libGluZyEubmV4dEVsZW1lbnRTaWJsaW5nISA6IGxpbmtOb2RlLm5leHRFbGVtZW50U2libGluZyE7XG4gICAgY29uc3Qgbm9kZSA9IGNoaWxkTm9kZS5jbG9uZU5vZGUodHJ1ZSkgYXMgSFRNTFVMaXN0RWxlbWVudDtcbiAgICBub2RlLmlkID0gaWQ7XG4gICAgbm9kZS5jbGFzc0xpc3QuYWRkKEZMT0FUSU5HQ0xTKTtcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAnbW91c2VsZWF2ZScsXG4gICAgICAoKSA9PiB7XG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZShTSE9XQ0xTKTtcbiAgICAgIH0sXG4gICAgICBmYWxzZSxcbiAgICApO1xuICAgIHRoaXMuZmxvYXRpbmdFbC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHByaXZhdGUgaGlkZUFsbCgpOiB2b2lkIHtcbiAgICBjb25zdCBhbGxOb2RlID0gdGhpcy5mbG9hdGluZ0VsLnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgRkxPQVRJTkdDTFMpO1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpwcmVmZXItZm9yLW9mXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxOb2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhbGxOb2RlW2ldLmNsYXNzTGlzdC5yZW1vdmUoU0hPV0NMUyk7XG4gICAgfVxuICB9XG5cbiAgLy8gY2FsY3VsYXRlIHRoZSBub2RlIHBvc2l0aW9uIHZhbHVlcy5cbiAgcHJpdmF0ZSBjYWxQb3MobGlua05vZGU6IEhUTUxMaW5rRWxlbWVudCwgbm9kZTogSFRNTFVMaXN0RWxlbWVudCk6IHZvaWQge1xuICAgIGNvbnN0IHJlY3QgPSBsaW5rTm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAvLyBidWc6IGh0dHBzOi8vZGV2ZWxvcGVyLm1pY3Jvc29mdC5jb20vZW4tdXMvbWljcm9zb2Z0LWVkZ2UvcGxhdGZvcm0vaXNzdWVzLzE0NzIxMDE1L1xuICAgIGNvbnN0IHNjcm9sbFRvcCA9IE1hdGgubWF4KHRoaXMuZG9jLmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AsIHRoaXMuYm9keUVsLnNjcm9sbFRvcCk7XG4gICAgY29uc3QgZG9jSGVpZ2h0ID0gTWF0aC5tYXgodGhpcy5kb2MuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCwgdGhpcy5ib2R5RWwuY2xpZW50SGVpZ2h0KTtcbiAgICBjb25zdCBzcGFjaW5nID0gNTtcbiAgICBsZXQgb2Zmc2V0SGVpZ2h0ID0gLXNwYWNpbmc7XG4gICAgaWYgKGRvY0hlaWdodCA8IHJlY3QudG9wICsgbm9kZS5jbGllbnRIZWlnaHQpIHtcbiAgICAgIG9mZnNldEhlaWdodCA9IHJlY3QudG9wICsgbm9kZS5jbGllbnRIZWlnaHQgLSBkb2NIZWlnaHQgKyBzcGFjaW5nO1xuICAgIH1cbiAgICBub2RlLnN0eWxlLnRvcCA9IGAke3JlY3QudG9wICsgc2Nyb2xsVG9wIC0gb2Zmc2V0SGVpZ2h0fXB4YDtcbiAgICBpZiAodGhpcy5kaXIgPT09ICdydGwnKSB7XG4gICAgICBub2RlLnN0eWxlLnJpZ2h0ID0gYCR7cmVjdC53aWR0aCArIHNwYWNpbmd9cHhgO1xuICAgIH0gZWxzZSB7XG4gICAgICBub2RlLnN0eWxlLmxlZnQgPSBgJHtyZWN0LnJpZ2h0ICsgc3BhY2luZ31weGA7XG4gICAgfVxuICB9XG5cbiAgc2hvd1N1Yk1lbnUoZTogTW91c2VFdmVudCwgaXRlbTogTmF2KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29sbGFwc2VkICE9PSB0cnVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IGxpbmtOb2RlID0gZS50YXJnZXQgYXMgRWxlbWVudDtcbiAgICAgIHRoaXMuZ2VuRmxvYXRpbmcoKTtcbiAgICAgIGNvbnN0IHN1Yk5vZGUgPSB0aGlzLmdlblN1Yk5vZGUobGlua05vZGUgYXMgSFRNTExpbmtFbGVtZW50LCBpdGVtKTtcbiAgICAgIHRoaXMuaGlkZUFsbCgpO1xuICAgICAgc3ViTm9kZS5jbGFzc0xpc3QuYWRkKFNIT1dDTFMpO1xuICAgICAgdGhpcy5jYWxQb3MobGlua05vZGUgYXMgSFRNTExpbmtFbGVtZW50LCBzdWJOb2RlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHRvKGl0ZW06IE1lbnUpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdC5lbWl0KGl0ZW0pO1xuICAgIGlmIChpdGVtLmRpc2FibGVkKSByZXR1cm47XG5cbiAgICBpZiAoaXRlbS5leHRlcm5hbExpbmspIHtcbiAgICAgIGNvbnN0IHsgZGVmYXVsdFZpZXcgfSA9IHRoaXMuZG9jO1xuICAgICAgaWYgKGl0ZW0udGFyZ2V0ID09PSAnX2JsYW5rJykge1xuICAgICAgICBkZWZhdWx0Vmlldy5vcGVuKGl0ZW0uZXh0ZXJuYWxMaW5rKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlZmF1bHRWaWV3LmxvY2F0aW9uLmhyZWYgPSBpdGVtLmV4dGVybmFsTGluaztcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoaXRlbS5saW5rISkpO1xuICB9XG5cbiAgdG9nZ2xlT3BlbihpdGVtOiBOYXYpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMub3BlblN0cmljdGx5KSB7XG4gICAgICB0aGlzLm1lbnVTcnYudmlzaXQodGhpcy5saXN0LCAoaTogTmF2KSA9PiB7XG4gICAgICAgIGlmIChpICE9PSBpdGVtKSBpLl9vcGVuID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICAgIGxldCBwSXRlbSA9IGl0ZW0uX3BhcmVudCBhcyBOYXY7XG4gICAgICB3aGlsZSAocEl0ZW0pIHtcbiAgICAgICAgcEl0ZW0uX29wZW4gPSB0cnVlO1xuICAgICAgICBwSXRlbSA9IHBJdGVtLl9wYXJlbnQhO1xuICAgICAgfVxuICAgIH1cbiAgICBpdGVtLl9vcGVuID0gIWl0ZW0uX29wZW47XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBfY2xpY2soKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNQYWQgJiYgdGhpcy5jb2xsYXBzZWQpIHtcbiAgICAgIHRoaXMub3BlbkFzaWRlKGZhbHNlKTtcbiAgICAgIHRoaXMuaGlkZUFsbCgpO1xuICAgIH1cbiAgfVxuXG4gIF9kb2NDbGljaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jb2xsYXBzZWQpIHtcbiAgICAgIHRoaXMuaGlkZUFsbCgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgb3BlbmVkQnlVcmwodXJsOiBzdHJpbmcgfCBudWxsKTogdm9pZCB7XG4gICAgY29uc3QgeyBtZW51U3J2LCByZWN1cnNpdmVQYXRoLCBvcGVuU3RyaWN0bHkgfSA9IHRoaXM7XG4gICAgbGV0IGZpbmRJdGVtOiBOYXYgfCBudWxsID0gbWVudVNydi5nZXRIaXQodGhpcy5tZW51U3J2Lm1lbnVzLCB1cmwhLCByZWN1cnNpdmVQYXRoLCAoaTogTmF2KSA9PiB7XG4gICAgICBpLl9zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgaWYgKCFvcGVuU3RyaWN0bHkpIHtcbiAgICAgICAgaS5fb3BlbiA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChmaW5kSXRlbSA9PSBudWxsKSByZXR1cm47XG5cbiAgICBkbyB7XG4gICAgICBmaW5kSXRlbS5fc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgaWYgKCFvcGVuU3RyaWN0bHkpIHtcbiAgICAgICAgZmluZEl0ZW0uX29wZW4gPSB0cnVlO1xuICAgICAgfVxuICAgICAgZmluZEl0ZW0gPSBmaW5kSXRlbS5fcGFyZW50ITtcbiAgICB9IHdoaWxlIChmaW5kSXRlbSk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IGRvYywgcm91dGVyLCBkZXN0cm95JCwgbWVudVNydiwgc2V0dGluZ3MsIGNkciB9ID0gdGhpcztcbiAgICB0aGlzLmJvZHlFbCA9IGRvYy5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgdGhpcy5vcGVuZWRCeVVybChyb3V0ZXIudXJsKTtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLmdlbkZsb2F0aW5nKCkpO1xuICAgIG1lbnVTcnYuY2hhbmdlLnBpcGUodGFrZVVudGlsKGRlc3Ryb3kkKSkuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgbWVudVNydi52aXNpdChkYXRhLCAoaTogTmF2LCBfcCwgZGVwdGgpID0+IHtcbiAgICAgICAgaS5fdGV4dCA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKGkudGV4dCEpO1xuICAgICAgICBpLl9uZWVkSWNvbiA9IGRlcHRoISA8PSB0aGlzLm1heExldmVsSWNvbiAmJiAhIWkuaWNvbjtcbiAgICAgICAgaWYgKCFpLl9hY2xSZXN1bHQpIHtcbiAgICAgICAgICBpZiAodGhpcy5kaXNhYmxlZEFjbCkge1xuICAgICAgICAgICAgaS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGkuX2hpZGRlbiA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9wZW5TdHJpY3RseSkge1xuICAgICAgICAgIGkuX29wZW4gPSBpLm9wZW4gIT0gbnVsbCA/IGkub3BlbiA6IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMubGlzdCA9IG1lbnVTcnYubWVudXMuZmlsdGVyKCh3OiBOYXYpID0+IHcuX2hpZGRlbiAhPT0gdHJ1ZSk7XG4gICAgICBjZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuICAgIHJvdXRlci5ldmVudHMucGlwZSh0YWtlVW50aWwoZGVzdHJveSQpKS5zdWJzY3JpYmUoZSA9PiB7XG4gICAgICBpZiAoZSBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpIHtcbiAgICAgICAgdGhpcy5vcGVuZWRCeVVybChlLnVybEFmdGVyUmVkaXJlY3RzKTtcbiAgICAgICAgdGhpcy51bmRlclBhZCgpO1xuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgc2V0dGluZ3Mubm90aWZ5XG4gICAgICAucGlwZShcbiAgICAgICAgdGFrZVVudGlsKGRlc3Ryb3kkKSxcbiAgICAgICAgZmlsdGVyKHQgPT4gdC50eXBlID09PSAnbGF5b3V0JyAmJiB0Lm5hbWUgPT09ICdjb2xsYXBzZWQnKSxcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jbGVhckZsb2F0aW5nKCkpO1xuICAgIHRoaXMudW5kZXJQYWQoKTtcblxuICAgIHRoaXMuZGlyID0gdGhpcy5kaXJlY3Rpb25hbGl0eS52YWx1ZTtcbiAgICB0aGlzLmRpcmVjdGlvbmFsaXR5LmNoYW5nZT8ucGlwZSh0YWtlVW50aWwoZGVzdHJveSQpKS5zdWJzY3JpYmUoKGRpcmVjdGlvbjogRGlyZWN0aW9uKSA9PiB7XG4gICAgICB0aGlzLmRpciA9IGRpcmVjdGlvbjtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgICB0aGlzLmNsZWFyRmxvYXRpbmcoKTtcbiAgfVxuXG4gIC8vICNyZWdpb24gVW5kZXIgcGFkXG5cbiAgcHJpdmF0ZSBnZXQgaXNQYWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZG9jLmRlZmF1bHRWaWV3IS5pbm5lcldpZHRoIDwgNzY4O1xuICB9XG5cbiAgcHJpdmF0ZSB1bmRlclBhZCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hdXRvQ2xvc2VVbmRlclBhZCAmJiB0aGlzLmlzUGFkICYmICF0aGlzLmNvbGxhcHNlZCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLm9wZW5Bc2lkZSh0cnVlKSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBvcGVuQXNpZGUoc3RhdHVzOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5zZXR0aW5ncy5zZXRMYXlvdXQoJ2NvbGxhcHNlZCcsIHN0YXR1cyk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG59XG4iXX0=