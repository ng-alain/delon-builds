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
const SHOWCLS = 'sidebar-nav__floating-show';
/** @type {?} */
const FLOATINGCLS = 'sidebar-nav__floating';
export class SidebarNavComponent {
    /**
     * @param {?} menuSrv
     * @param {?} settings
     * @param {?} router
     * @param {?} locationStrategy
     * @param {?} render
     * @param {?} cd
     * @param {?} doc
     */
    constructor(menuSrv, settings, router, locationStrategy, render, cd, doc) {
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
    /**
     * @return {?}
     */
    get collapsed() {
        return this.settings.layout.collapsed;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.bodyEl = this.doc.querySelector('body');
        this.menuSrv.openedByUrl(this.router.url);
        this.genFloatingContainer();
        this.change$ = (/** @type {?} */ (this.menuSrv.change.subscribe(res => {
            this.list = res;
            this.cd.detectChanges();
        })));
        this.installUnderPad();
    }
    /**
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
        let url = linkNode.getAttribute('href');
        if (url && url.startsWith('#')) {
            url = url.slice(1);
        }
        if ((/** @type {?} */ (linkNode.dataset)).type === 'external') {
            return true;
        }
        // 如果配置了bashHref 则去掉baseHref
        /** @type {?} */
        const baseHerf = this.locationStrategy.getBaseHref();
        if (baseHerf) {
            url = url.slice(baseHerf.length);
        }
        this.router.navigateByUrl(url);
        this.onSelect(this.menuSrv.getPathByUrl(url).pop());
        this.hideAll();
        e.preventDefault();
        return false;
    }
    /**
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
     * @param {?} linkNode
     * @param {?} item
     * @return {?}
     */
    genSubNode(linkNode, item) {
        /** @type {?} */
        const id = `_sidebar-nav-${item.__id}`;
        /** @type {?} */
        const node = (/** @type {?} */ (linkNode.nextElementSibling.cloneNode(true)));
        node.id = id;
        node.classList.add(FLOATINGCLS);
        node.addEventListener('mouseleave', () => {
            node.classList.remove(SHOWCLS);
        }, false);
        this.floatingEl.appendChild(node);
        return node;
    }
    /**
     * @return {?}
     */
    hideAll() {
        /** @type {?} */
        const allNode = this.floatingEl.querySelectorAll('.' + FLOATINGCLS);
        for (let i = 0; i < allNode.length; i++) {
            allNode[i].classList.remove(SHOWCLS);
        }
    }
    // calculate the node position values.
    /**
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
        e.preventDefault();
        /** @type {?} */
        const linkNode = (/** @type {?} */ (e.target));
        this.genFloatingContainer();
        /** @type {?} */
        const subNode = this.genSubNode((/** @type {?} */ (linkNode)), item);
        this.hideAll();
        subNode.classList.add(SHOWCLS);
        this.calPos((/** @type {?} */ (linkNode)), subNode);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    onSelect(item) {
        this.select.emit(item);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    toggleOpen(item) {
        this.menuSrv.visit((i, p) => {
            if (i !== item)
                i._open = false;
        });
        /** @type {?} */
        let pItem = item.__parent;
        while (pItem) {
            pItem._open = true;
            pItem = pItem.__parent;
        }
        item._open = !item._open;
        this.cd.markForCheck();
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
    ngOnDestroy() {
        this.change$.unsubscribe();
        if (this.route$)
            this.route$.unsubscribe();
        this.clearFloatingContainer();
    }
    // #region Under pad
    /**
     * @return {?}
     */
    get isPad() {
        return window.innerWidth < 768;
    }
    /**
     * @return {?}
     */
    installUnderPad() {
        if (!this.autoCloseUnderPad)
            return;
        this.route$ = (/** @type {?} */ ((this.router.events
            .pipe(filter(e => e instanceof NavigationEnd))
            .subscribe(s => this.underPad()))));
        this.underPad();
    }
    /**
     * @return {?}
     */
    underPad() {
        if (this.isPad && !this.collapsed) {
            setTimeout(() => this.openAside(true));
        }
    }
    /**
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
                template: "<ng-template #icon let-i>\n  <ng-container *ngIf=\"i\" [ngSwitch]=\"i.type\">\n    <i *ngSwitchCase=\"'icon'\" class=\"sidebar-nav__item-icon\" nz-icon [type]=\"i.value\" [theme]=\"i.theme\" [spin]=\"i.spin\" [twoToneColor]=\"i.twoToneColor\" [iconfont]=\"i.iconfont\"></i>\n    <img *ngSwitchCase=\"'img'\" src=\"{{ i.value }}\" class=\"sidebar-nav__item-icon sidebar-nav__item-img\">\n    <i *ngSwitchDefault class=\"sidebar-nav__item-icon {{ i.value }}\"></i>\n  </ng-container>\n</ng-template>\n<ul class=\"sidebar-nav\">\n  <ng-container *ngFor=\"let group of list\">\n    <ng-container *ngIf=\"group._hidden !== true\">\n      <li class=\"sidebar-nav__item sidebar-nav__group-title\" *ngIf=\"group.group\">\n        <span>{{ group.text }}</span>\n      </li>\n      <ng-container *ngFor=\"let child1 of group.children\">\n        <li *ngIf=\"child1._hidden !== true\" routerLinkActive=\"sidebar-nav__selected\" [routerLinkActiveOptions]=\"{exact: child1.linkExact}\"\n          class=\"sidebar-nav__item\" [class.sidebar-nav__open]=\"child1._open\">\n          <!-- link -->\n          <a *ngIf=\"child1._type === 1\" (click)=\"onSelect(child1)\" [routerLink]=\"child1.link\" [target]=\"child1.target\"\n            class=\"sidebar-nav__item-link\">\n            <ng-container *ngIf=\"!collapsed\">\n              <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{$implicit: child1.icon}\"></ng-template>\n            </ng-container>\n            <nz-tooltip *ngIf=\"collapsed\" nzPlacement=\"right\" [nzTitle]=\"child1.text\">\n              <span nz-tooltip>\n                <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{$implicit: child1.icon}\"></ng-template>\n              </span>\n            </nz-tooltip>\n            <span class=\"sidebar-nav__item-text\">{{ child1.text }}</span>\n          </a>\n          <!-- external link -->\n          <a *ngIf=\"child1._type === 2\" href=\"{{ child1.externalLink }}\" target=\"{{child1.target}}\" data-type=\"external\"\n            class=\"sidebar-nav__item-link\">\n            <ng-container *ngIf=\"!collapsed\">\n              <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{$implicit: child1.icon}\"></ng-template>\n            </ng-container>\n            <nz-tooltip *ngIf=\"collapsed\" nzPlacement=\"right\" [nzTitle]=\"child1.text\">\n              <span nz-tooltip>\n                <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{$implicit: child1.icon}\"></ng-template>\n              </span>\n            </nz-tooltip>\n            <span class=\"sidebar-nav__item-text\">{{ child1.text }}</span>\n          </a>\n          <!-- has children link -->\n          <a *ngIf=\"child1._type === 3\" (click)=\"toggleOpen(child1)\" (mouseenter)=\"showSubMenu($event, child1)\" class=\"sidebar-nav__item-link\">\n            <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{$implicit: child1.icon}\"></ng-template>\n            <span class=\"sidebar-nav__item-text\">{{ child1.text }}</span>\n            <i class=\"sidebar-nav__sub-arrow\"></i>\n          </a>\n          <!-- badge -->\n          <div *ngIf=\"child1.badge\" title=\"{{child1.badge}}\" class=\"badge badge-{{child1.badgeStatus}}\"\n            [class.badge-dot]=\"child1.badgeDot\">\n            <em>{{child1.badge}}</em>\n          </div>\n          <!-- Level 2 -->\n          <ul *ngIf=\"child1._type === 3\" class=\"sidebar-nav sidebar-nav__sub sidebar-nav__depth{{child1._depth}}\">\n            <ng-container *ngFor=\"let child2 of child1.children\">\n              <li *ngIf=\"child2._hidden !== true\" routerLinkActive=\"sidebar-nav__selected\" [routerLinkActiveOptions]=\"{exact: child2.linkExact}\"\n                class=\"sidebar-nav__item\" [class.sidebar-nav__open]=\"child2._open\">\n                <!-- link -->\n                <a *ngIf=\"child2._type === 1\" (click)=\"onSelect(child2)\" [routerLink]=\"child2.link\" [target]=\"child2.target\"\n                  class=\"sidebar-nav__item-link\">{{ child2.text }}</a>\n                <!-- external link -->\n                <a *ngIf=\"child2._type === 2\" href=\"{{ child2.externalLink }}\" target=\"{{ child2.target }}\" data-type=\"external\"\n                  class=\"sidebar-nav__item-link\">{{ child2.text }}</a>\n                <!-- has children link -->\n                <a *ngIf=\"child2._type === 3\" (click)=\"toggleOpen(child2)\" class=\"sidebar-nav__item-link\">\n                  {{ child2.text }}\n                  <i class=\"sidebar-nav__sub-arrow\"></i>\n                </a>\n                <!-- badge -->\n                <div *ngIf=\"child2.badge\" title=\"{{child2.badge}}\" class=\"badge badge-{{child2.badgeStatus}}\"\n                  [class.badge-dot]=\"child2.badgeDot\">\n                  <em>{{child2.badge}}</em>\n                </div>\n                <!-- Level 3 -->\n                <ul *ngIf=\"child2._type === 3\" class=\"sidebar-nav sidebar-nav__sub sidebar-nav__depth{{child2._depth}}\">\n                  <ng-container *ngFor=\"let child3 of child2.children\">\n                    <li *ngIf=\"child3._hidden !== true\" routerLinkActive=\"sidebar-nav__selected\"\n                      [routerLinkActiveOptions]=\"{exact: child3.linkExact}\" class=\"sidebar-nav__item\"\n                      [class.sidebar-nav__open]=\"child3._open\">\n                      <!-- link -->\n                      <a *ngIf=\"child3._type === 1\" (click)=\"onSelect(child3)\" [routerLink]=\"child3.link\" [target]=\"child3.target\"\n                        class=\"sidebar-nav__item-link\">{{\n                        child3.text }}</a>\n                      <!-- external link -->\n                      <a *ngIf=\"child3._type === 2\" href=\"{{ child3.externalLink }}\" target=\"{{ child3.target }}\"\n                        data-type=\"external\" class=\"sidebar-nav__item-link\">{{\n                        child3.text }}</a>\n                      <!-- badge -->\n                      <div *ngIf=\"child3.badge\" title=\"{{child3.badge}}\" class=\"badge badge-{{child3.badgeStatus}}\"\n                        [class.badge-dot]=\"child3.badgeDot\">\n                        <em>{{child3.badge}}</em>\n                      </div>\n                    </li>\n                  </ng-container>\n                </ul>\n              </li>\n            </ng-container>\n          </ul>\n        </li>\n      </ng-container>\n    </ng-container>\n  </ng-container>\n</ul>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
SidebarNavComponent.ctorParameters = () => [
    { type: MenuService },
    { type: SettingsService },
    { type: Router },
    { type: LocationStrategy },
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci1uYXYuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9zaWRlYmFyLW5hdi8iLCJzb3VyY2VzIjpbInNpZGViYXItbmF2LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsU0FBUyxFQUNULE1BQU0sRUFHTixZQUFZLEVBQ1osdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksR0FDYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUU3RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEMsT0FBTyxFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQVEsTUFBTSxjQUFjLENBQUM7QUFDbEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGFBQWEsQ0FBQzs7TUFJckMsT0FBTyxHQUFHLDRCQUE0Qjs7TUFDdEMsV0FBVyxHQUFHLHVCQUF1QjtBQU8zQyxNQUFNLE9BQU8sbUJBQW1COzs7Ozs7Ozs7O0lBYzlCLFlBQ1UsT0FBb0IsRUFDcEIsUUFBeUIsRUFDekIsTUFBYyxFQUNkLGdCQUFrQyxFQUNsQyxNQUFpQixFQUNqQixFQUFxQixFQUNILEdBQVE7UUFOMUIsWUFBTyxHQUFQLE9BQU8sQ0FBYTtRQUNwQixhQUFRLEdBQVIsUUFBUSxDQUFpQjtRQUN6QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ2pCLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBQ0gsUUFBRyxHQUFILEdBQUcsQ0FBSztRQWhCcEMsU0FBSSxHQUFVLEVB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dkIsNjNNQUEyQztnQkFDM0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7WUFaUSxXQUFXO1lBQUUsZUFBZTtZQUw1QixNQUFNO1lBQ0ksZ0JBQWdCO1lBWmpDLFNBQVM7WUFNVCxpQkFBaUI7NENBNENkLE1BQU0sU0FBQyxRQUFROzs7Z0NBZGpCLEtBQUs7cUJBSUwsTUFBTTtxQkEySk4sWUFBWSxTQUFDLE9BQU87d0JBUXBCLFlBQVksU0FBQyxnQkFBZ0I7O0FBcks5QjtJQURDLFlBQVksRUFBRTs7OERBQ1U7OztJQVJ6QixxQ0FBZ0M7O0lBQ2hDLHNDQUE4Qjs7Ozs7SUFFOUIseUNBQTJCOztJQUMzQixtQ0FBaUI7O0lBRWpCLGdEQUV5Qjs7SUFFekIscUNBQzJDOztJQW1MM0MscUNBQTZCOztJQWhMM0Isc0NBQTRCOztJQUM1Qix1Q0FBaUM7O0lBQ2pDLHFDQUFzQjs7SUFDdEIsK0NBQTBDOztJQUMxQyxxQ0FBeUI7O0lBQ3pCLGlDQUE2Qjs7SUFDN0Isa0NBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBSZW5kZXJlcjIsXG4gIEluamVjdCxcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIEhvc3RMaXN0ZW5lcixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyLCBOYXZpZ2F0aW9uRW5kIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IERPQ1VNRU5ULCBMb2NhdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBNZW51U2VydmljZSwgU2V0dGluZ3NTZXJ2aWNlLCBNZW51IH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuaW1wb3J0IHsgTmF2IH0gZnJvbSAnLi9zaWRlYmFyLW5hdi50eXBlcyc7XG5cbmNvbnN0IFNIT1dDTFMgPSAnc2lkZWJhci1uYXZfX2Zsb2F0aW5nLXNob3cnO1xuY29uc3QgRkxPQVRJTkdDTFMgPSAnc2lkZWJhci1uYXZfX2Zsb2F0aW5nJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2lkZWJhci1uYXYnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2lkZWJhci1uYXYuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgU2lkZWJhck5hdkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBib2R5RWw6IEhUTUxCb2R5RWxlbWVudDtcbiAgcHJpdmF0ZSBjaGFuZ2UkOiBTdWJzY3JpcHRpb247XG4gIC8qKiBAaW5uZXIgKi9cbiAgZmxvYXRpbmdFbDogSFRNTERpdkVsZW1lbnQ7XG4gIGxpc3Q6IE5hdltdID0gW107XG5cbiAgQElucHV0KClcbiAgQElucHV0Qm9vbGVhbigpXG4gIGF1dG9DbG9zZVVuZGVyUGFkID0gdHJ1ZTtcblxuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgc2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxNZW51PigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbWVudVNydjogTWVudVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBzZXR0aW5nczogU2V0dGluZ3NTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBsb2NhdGlvblN0cmF0ZWd5OiBMb2NhdGlvblN0cmF0ZWd5LFxuICAgIHByaXZhdGUgcmVuZGVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IGFueSxcbiAgKSB7fVxuXG4gIGdldCBjb2xsYXBzZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0dGluZ3MubGF5b3V0LmNvbGxhcHNlZDtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYm9keUVsID0gdGhpcy5kb2MucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIHRoaXMubWVudVNydi5vcGVuZWRCeVVybCh0aGlzLnJvdXRlci51cmwpO1xuICAgIHRoaXMuZ2VuRmxvYXRpbmdDb250YWluZXIoKTtcbiAgICB0aGlzLmNoYW5nZSQgPSA8YW55PnRoaXMubWVudVNydi5jaGFuZ2Uuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICB0aGlzLmxpc3QgPSByZXM7XG4gICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgICB0aGlzLmluc3RhbGxVbmRlclBhZCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBmbG9hdGluZ0FyZWFDbGlja0hhbmRsZShlOiBNb3VzZUV2ZW50KSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCBsaW5rTm9kZSA9IGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgIGlmIChsaW5rTm9kZS5ub2RlTmFtZSAhPT0gJ0EnKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGxldCB1cmw6IHN0cmluZyA9IGxpbmtOb2RlLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgIGlmICh1cmwgJiYgdXJsLnN0YXJ0c1dpdGgoJyMnKSkge1xuICAgICAgdXJsID0gdXJsLnNsaWNlKDEpO1xuICAgIH1cbiAgICBpZiAobGlua05vZGUuZGF0YXNldCEudHlwZSA9PT0gJ2V4dGVybmFsJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8g5aaC5p6c6YWN572u5LqGYmFzaEhyZWYg5YiZ5Y675o6JYmFzZUhyZWZcbiAgICBjb25zdCBiYXNlSGVyZiA9IHRoaXMubG9jYXRpb25TdHJhdGVneS5nZXRCYXNlSHJlZigpO1xuICAgIGlmIChiYXNlSGVyZikge1xuICAgICAgdXJsID0gdXJsLnNsaWNlKGJhc2VIZXJmLmxlbmd0aCk7XG4gICAgfVxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwodXJsKTtcbiAgICB0aGlzLm9uU2VsZWN0KHRoaXMubWVudVNydi5nZXRQYXRoQnlVcmwodXJsKS5wb3AoKSk7XG4gICAgdGhpcy5oaWRlQWxsKCk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJGbG9hdGluZ0NvbnRhaW5lcigpIHtcbiAgICBpZiAoIXRoaXMuZmxvYXRpbmdFbCkgcmV0dXJuO1xuICAgIHRoaXMuZmxvYXRpbmdFbC5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgJ2NsaWNrJyxcbiAgICAgIHRoaXMuZmxvYXRpbmdBcmVhQ2xpY2tIYW5kbGUuYmluZCh0aGlzKSxcbiAgICApO1xuICAgIC8vIGZpeCBpZTogaHR0cHM6Ly9naXRodWIuY29tL25nLWFsYWluL2RlbG9uL2lzc3Vlcy81MlxuICAgIGlmICh0aGlzLmZsb2F0aW5nRWwuaGFzT3duUHJvcGVydHkoJ3JlbW92ZScpKSB7XG4gICAgICB0aGlzLmZsb2F0aW5nRWwucmVtb3ZlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmZsb2F0aW5nRWwucGFyZW50Tm9kZSkge1xuICAgICAgdGhpcy5mbG9hdGluZ0VsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5mbG9hdGluZ0VsKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdlbkZsb2F0aW5nQ29udGFpbmVyKCkge1xuICAgIHRoaXMuY2xlYXJGbG9hdGluZ0NvbnRhaW5lcigpO1xuICAgIHRoaXMuZmxvYXRpbmdFbCA9IHRoaXMucmVuZGVyLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuZmxvYXRpbmdFbC5jbGFzc0xpc3QuYWRkKEZMT0FUSU5HQ0xTICsgJy1jb250YWluZXInKTtcbiAgICB0aGlzLmZsb2F0aW5nRWwuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdjbGljaycsXG4gICAgICB0aGlzLmZsb2F0aW5nQXJlYUNsaWNrSGFuZGxlLmJpbmQodGhpcyksXG4gICAgICBmYWxzZSxcbiAgICApO1xuICAgIHRoaXMuYm9keUVsLmFwcGVuZENoaWxkKHRoaXMuZmxvYXRpbmdFbCk7XG4gIH1cblxuICBwcml2YXRlIGdlblN1Yk5vZGUobGlua05vZGU6IEhUTUxMaW5rRWxlbWVudCwgaXRlbTogTmF2KTogSFRNTFVMaXN0RWxlbWVudCB7XG4gICAgY29uc3QgaWQgPSBgX3NpZGViYXItbmF2LSR7aXRlbS5fX2lkfWA7XG4gICAgY29uc3Qgbm9kZSA9IGxpbmtOb2RlLm5leHRFbGVtZW50U2libGluZy5jbG9uZU5vZGUoXG4gICAgICB0cnVlLFxuICAgICkgYXMgSFRNTFVMaXN0RWxlbWVudDtcbiAgICBub2RlLmlkID0gaWQ7XG4gICAgbm9kZS5jbGFzc0xpc3QuYWRkKEZMT0FUSU5HQ0xTKTtcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAnbW91c2VsZWF2ZScsXG4gICAgICAoKSA9PiB7XG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZShTSE9XQ0xTKTtcbiAgICAgIH0sXG4gICAgICBmYWxzZSxcbiAgICApO1xuICAgIHRoaXMuZmxvYXRpbmdFbC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHByaXZhdGUgaGlkZUFsbCgpIHtcbiAgICBjb25zdCBhbGxOb2RlID0gdGhpcy5mbG9hdGluZ0VsLnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgRkxPQVRJTkdDTFMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsTm9kZS5sZW5ndGg7IGkrKykge1xuICAgICAgYWxsTm9kZVtpXS5jbGFzc0xpc3QucmVtb3ZlKFNIT1dDTFMpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGNhbGN1bGF0ZSB0aGUgbm9kZSBwb3NpdGlvbiB2YWx1ZXMuXG4gIHByaXZhdGUgY2FsUG9zKGxpbmtOb2RlOiBIVE1MTGlua0VsZW1lbnQsIG5vZGU6IEhUTUxVTGlzdEVsZW1lbnQpIHtcbiAgICBjb25zdCByZWN0ID0gbGlua05vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgLy8gYnVnOiBodHRwczovL2RldmVsb3Blci5taWNyb3NvZnQuY29tL2VuLXVzL21pY3Jvc29mdC1lZGdlL3BsYXRmb3JtL2lzc3Vlcy8xNDcyMTAxNS9cbiAgICBjb25zdCBzY3JvbGxUb3AgPSBNYXRoLm1heChcbiAgICAgIHRoaXMuZG9jLmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AsXG4gICAgICB0aGlzLmJvZHlFbC5zY3JvbGxUb3AsXG4gICAgKTtcbiAgICBjb25zdCBkb2NIZWlnaHQgPSBNYXRoLm1heChcbiAgICAgIHRoaXMuZG9jLmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsXG4gICAgICB0aGlzLmJvZHlFbC5jbGllbnRIZWlnaHQsXG4gICAgKTtcbiAgICBsZXQgb2Zmc2V0SGVpZ2h0ID0gMDtcbiAgICBpZiAoZG9jSGVpZ2h0IDwgcmVjdC50b3AgKyBub2RlLmNsaWVudEhlaWdodCkge1xuICAgICAgb2Zmc2V0SGVpZ2h0ID0gcmVjdC50b3AgKyBub2RlLmNsaWVudEhlaWdodCAtIGRvY0hlaWdodDtcbiAgICB9XG4gICAgbm9kZS5zdHlsZS50b3AgPSBgJHtyZWN0LnRvcCArIHNjcm9sbFRvcCAtIG9mZnNldEhlaWdodH1weGA7XG4gICAgbm9kZS5zdHlsZS5sZWZ0ID0gYCR7cmVjdC5yaWdodCArIDV9cHhgO1xuICB9XG5cbiAgc2hvd1N1Yk1lbnUoZTogTW91c2VFdmVudCwgaXRlbTogTmF2KSB7XG4gICAgaWYgKHRoaXMuY29sbGFwc2VkICE9PSB0cnVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBsaW5rTm9kZSA9IGUudGFyZ2V0IGFzIEVsZW1lbnQ7XG4gICAgdGhpcy5nZW5GbG9hdGluZ0NvbnRhaW5lcigpO1xuICAgIGNvbnN0IHN1Yk5vZGUgPSB0aGlzLmdlblN1Yk5vZGUobGlua05vZGUgYXMgSFRNTExpbmtFbGVtZW50LCBpdGVtKTtcbiAgICB0aGlzLmhpZGVBbGwoKTtcbiAgICBzdWJOb2RlLmNsYXNzTGlzdC5hZGQoU0hPV0NMUyk7XG4gICAgdGhpcy5jYWxQb3MobGlua05vZGUgYXMgSFRNTExpbmtFbGVtZW50LCBzdWJOb2RlKTtcbiAgfVxuXG4gIG9uU2VsZWN0KGl0ZW06IE1lbnUpIHtcbiAgICB0aGlzLnNlbGVjdC5lbWl0KGl0ZW0pO1xuICB9XG5cbiAgdG9nZ2xlT3BlbihpdGVtOiBOYXYpIHtcbiAgICB0aGlzLm1lbnVTcnYudmlzaXQoKGksIHApID0+IHtcbiAgICAgIGlmIChpICE9PSBpdGVtKSBpLl9vcGVuID0gZmFsc2U7XG4gICAgfSk7XG4gICAgbGV0IHBJdGVtID0gaXRlbS5fX3BhcmVudDtcbiAgICB3aGlsZSAocEl0ZW0pIHtcbiAgICAgIHBJdGVtLl9vcGVuID0gdHJ1ZTtcbiAgICAgIHBJdGVtID0gcEl0ZW0uX19wYXJlbnQ7XG4gICAgfVxuICAgIGl0ZW0uX29wZW4gPSAhaXRlbS5fb3BlbjtcbiAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBfY2xpY2soKSB7XG4gICAgaWYgKHRoaXMuaXNQYWQgJiYgdGhpcy5jb2xsYXBzZWQpIHtcbiAgICAgIHRoaXMub3BlbkFzaWRlKGZhbHNlKTtcbiAgICAgIHRoaXMuaGlkZUFsbCgpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmNsaWNrJylcbiAgX2RvY0NsaWNrKCkge1xuICAgIHRoaXMuaGlkZUFsbCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5jaGFuZ2UkLnVuc3Vic2NyaWJlKCk7XG4gICAgaWYgKHRoaXMucm91dGUkKSB0aGlzLnJvdXRlJC51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuY2xlYXJGbG9hdGluZ0NvbnRhaW5lcigpO1xuICB9XG5cbiAgLy8gI3JlZ2lvbiBVbmRlciBwYWRcblxuICBwcml2YXRlIGdldCBpc1BhZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gd2luZG93LmlubmVyV2lkdGggPCA3Njg7XG4gIH1cblxuICBwcml2YXRlIHJvdXRlJDogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIGluc3RhbGxVbmRlclBhZCgpIHtcbiAgICBpZiAoIXRoaXMuYXV0b0Nsb3NlVW5kZXJQYWQpIHJldHVybjtcbiAgICB0aGlzLnJvdXRlJCA9IDxhbnk+KFxuICAgICAgdGhpcy5yb3V0ZXIuZXZlbnRzXG4gICAgICAgIC5waXBlKGZpbHRlcihlID0+IGUgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSlcbiAgICAgICAgLnN1YnNjcmliZShzID0+IHRoaXMudW5kZXJQYWQoKSlcbiAgICApO1xuICAgIHRoaXMudW5kZXJQYWQoKTtcbiAgfVxuXG4gIHByaXZhdGUgdW5kZXJQYWQoKSB7XG4gICAgaWYgKHRoaXMuaXNQYWQgJiYgIXRoaXMuY29sbGFwc2VkKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMub3BlbkFzaWRlKHRydWUpKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG9wZW5Bc2lkZShzdGF0dXM6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnNldHRpbmdzLnNldExheW91dCgnY29sbGFwc2VkJywgc3RhdHVzKTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cbn1cbiJdfQ==