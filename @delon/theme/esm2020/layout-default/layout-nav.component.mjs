import { __decorate } from "tslib";
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, Optional, Output, ViewEncapsulation } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { InputBoolean, InputNumber, ZoneOutside } from '@delon/util/decorator';
import { WINDOW } from '@delon/util/token';
import * as i0 from "@angular/core";
import * as i1 from "@delon/theme";
import * as i2 from "@angular/router";
import * as i3 from "@angular/platform-browser";
import * as i4 from "@angular/cdk/bidi";
import * as i5 from "ng-zorro-antd/badge";
import * as i6 from "@angular/common";
import * as i7 from "ng-zorro-antd/icon";
import * as i8 from "ng-zorro-antd/tooltip";
const SHOWCLS = 'sidebar-nav__floating-show';
const FLOATINGCLS = 'sidebar-nav__floating';
export class LayoutDefaultNavComponent {
    constructor(menuSrv, settings, router, render, cdr, ngZone, sanitizer, doc, win, directionality) {
        this.menuSrv = menuSrv;
        this.settings = settings;
        this.router = router;
        this.render = render;
        this.cdr = cdr;
        this.ngZone = ngZone;
        this.sanitizer = sanitizer;
        this.doc = doc;
        this.win = win;
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
    get collapsed() {
        return this.settings.layout.collapsed;
    }
    getLinkNode(node) {
        node = node.nodeName === 'A' ? node : node.parentNode;
        return node.nodeName !== 'A' ? null : node;
    }
    floatingClickHandle(e) {
        e.stopPropagation();
        const linkNode = this.getLinkNode(e.target);
        if (linkNode == null) {
            return false;
        }
        const id = +linkNode.dataset.id;
        // Should be ingore children title trigger event
        if (isNaN(id)) {
            return false;
        }
        let item;
        this.menuSrv.visit(this.list, (i) => {
            if (!item && i._id === id) {
                item = i;
            }
        });
        this.to(item);
        this.hideAll();
        e.preventDefault();
        return false;
    }
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
    genFloating() {
        this.clearFloating();
        this.floatingEl = this.render.createElement('div');
        this.floatingEl.classList.add(`${FLOATINGCLS}-container`);
        this.floatingEl.addEventListener('click', this.floatingClickHandle.bind(this), false);
        this.bodyEl.appendChild(this.floatingEl);
    }
    genSubNode(linkNode, item) {
        const id = `_sidebar-nav-${item._id}`;
        const childNode = item.badge ? linkNode.nextElementSibling.nextElementSibling : linkNode.nextElementSibling;
        const node = childNode.cloneNode(true);
        node.id = id;
        node.classList.add(FLOATINGCLS);
        node.addEventListener('mouseleave', () => {
            node.classList.remove(SHOWCLS);
        }, false);
        this.floatingEl.appendChild(node);
        return node;
    }
    hideAll() {
        const allNode = this.floatingEl.querySelectorAll(`.${FLOATINGCLS}`);
        for (let i = 0; i < allNode.length; i++) {
            allNode[i].classList.remove(SHOWCLS);
        }
    }
    // calculate the node position values.
    calPos(linkNode, node) {
        const rect = linkNode.getBoundingClientRect();
        // bug: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/14721015/
        const scrollTop = Math.max(this.doc.documentElement.scrollTop, this.bodyEl.scrollTop);
        const docHeight = Math.max(this.doc.documentElement.clientHeight, this.bodyEl.clientHeight);
        const spacing = 5;
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
    showSubMenu(e, item) {
        if (this.collapsed !== true) {
            return;
        }
        e.preventDefault();
        const linkNode = e.target;
        this.genFloating();
        const subNode = this.genSubNode(linkNode, item);
        this.hideAll();
        subNode.classList.add(SHOWCLS);
        this.calPos(linkNode, subNode);
    }
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
        this.ngZone.run(() => this.router.navigateByUrl(item.link));
    }
    toggleOpen(item) {
        if (!this.openStrictly) {
            this.menuSrv.visit(this.list, (i) => {
                if (i !== item)
                    i._open = false;
            });
            let pItem = item._parent;
            while (pItem) {
                pItem._open = true;
                pItem = pItem._parent;
            }
        }
        item._open = !item._open;
        this.cdr.markForCheck();
    }
    _click() {
        if (this.isPad && this.collapsed) {
            this.openAside(false);
            this.hideAll();
        }
    }
    closeSubMenu() {
        if (this.collapsed) {
            this.hideAll();
        }
    }
    openedByUrl(url) {
        const { menuSrv, recursivePath, openStrictly } = this;
        let findItem = menuSrv.getHit(this.menuSrv.menus, url, recursivePath, (i) => {
            i._selected = false;
            if (!openStrictly) {
                i._open = false;
            }
        });
        if (findItem == null)
            return;
        do {
            findItem._selected = true;
            if (!openStrictly) {
                findItem._open = true;
            }
            findItem = findItem._parent;
        } while (findItem);
    }
    ngOnInit() {
        const { doc, router, destroy$, menuSrv, settings, cdr } = this;
        this.bodyEl = doc.querySelector('body');
        this.openedByUrl(router.url);
        this.ngZone.runOutsideAngular(() => this.genFloating());
        menuSrv.change.pipe(takeUntil(destroy$)).subscribe(data => {
            menuSrv.visit(data, (i, _p, depth) => {
                i._text = this.sanitizer.bypassSecurityTrustHtml(i.text);
                i._needIcon = depth <= this.maxLevelIcon && !!i.icon;
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
                const icon = i.icon;
                if (icon && icon.type === 'svg' && typeof icon.value === 'string') {
                    icon.value = this.sanitizer.bypassSecurityTrustHtml(icon.value);
                }
            });
            this.list = menuSrv.menus.filter((w) => w._hidden !== true);
            cdr.detectChanges();
        });
        router.events.pipe(takeUntil(destroy$)).subscribe(e => {
            if (e instanceof NavigationEnd) {
                this.openedByUrl(e.urlAfterRedirects);
                this.underPad();
                this.cdr.detectChanges();
            }
        });
        settings.notify
            .pipe(takeUntil(destroy$), filter(t => t.type === 'layout' && t.name === 'collapsed'))
            .subscribe(() => this.clearFloating());
        this.underPad();
        this.dir = this.directionality.value;
        this.directionality.change?.pipe(takeUntil(destroy$)).subscribe((direction) => {
            this.dir = direction;
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this.clearFloating();
    }
    // #region Under pad
    get isPad() {
        return this.doc.defaultView.innerWidth < 768;
    }
    underPad() {
        if (this.autoCloseUnderPad && this.isPad && !this.collapsed) {
            setTimeout(() => this.openAside(true));
        }
    }
    openAside(status) {
        this.settings.setLayout('collapsed', status);
    }
}
LayoutDefaultNavComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.3", ngImport: i0, type: LayoutDefaultNavComponent, deps: [{ token: i1.MenuService }, { token: i1.SettingsService }, { token: i2.Router }, { token: i0.Renderer2 }, { token: i0.ChangeDetectorRef }, { token: i0.NgZone }, { token: i3.DomSanitizer }, { token: DOCUMENT }, { token: WINDOW }, { token: i4.Directionality, optional: true }], target: i0.ɵɵFactoryTarget.Component });
LayoutDefaultNavComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.3", type: LayoutDefaultNavComponent, selector: "layout-default-nav", inputs: { disabledAcl: "disabledAcl", autoCloseUnderPad: "autoCloseUnderPad", recursivePath: "recursivePath", openStrictly: "openStrictly", maxLevelIcon: "maxLevelIcon" }, outputs: { select: "select" }, host: { listeners: { "click": "_click()", "document:click": "closeSubMenu()" } }, ngImport: i0, template: "<ng-template #icon let-i>\n  <ng-container *ngIf=\"i\" [ngSwitch]=\"i.type\">\n    <i\n      *ngSwitchCase=\"'icon'\"\n      class=\"sidebar-nav__item-icon\"\n      nz-icon\n      [nzType]=\"i.value\"\n      [nzTheme]=\"i.theme\"\n      [nzSpin]=\"i.spin\"\n      [nzTwotoneColor]=\"i.twoToneColor\"\n      [nzIconfont]=\"i.iconfont\"\n      [nzRotate]=\"i.rotate\"\n    ></i>\n    <i *ngSwitchCase=\"'iconfont'\" class=\"sidebar-nav__item-icon\" nz-icon [nzIconfont]=\"i.iconfont\"></i>\n    <img *ngSwitchCase=\"'img'\" [src]=\"i.value\" class=\"sidebar-nav__item-icon sidebar-nav__item-img\" />\n    <span *ngSwitchCase=\"'svg'\" class=\"sidebar-nav__item-icon sidebar-nav__item-svg\" [innerHTML]=\"i.value\"></span>\n    <i *ngSwitchDefault class=\"sidebar-nav__item-icon {{ i.value }}\"></i>\n  </ng-container>\n</ng-template>\n<ng-template #tree let-ls>\n  <ng-container *ngFor=\"let i of ls\">\n    <li\n      *ngIf=\"i._hidden !== true\"\n      class=\"sidebar-nav__item\"\n      [class.sidebar-nav__selected]=\"i._selected\"\n      [class.sidebar-nav__open]=\"i._open\"\n    >\n      <!-- link -->\n      <a\n        *ngIf=\"i.children.length === 0\"\n        (click)=\"to(i)\"\n        [attr.data-id]=\"i._id\"\n        class=\"sidebar-nav__item-link\"\n        [ngClass]=\"{ 'sidebar-nav__item-disabled': i.disabled }\"\n        (mouseenter)=\"closeSubMenu()\"\n      >\n        <ng-container *ngIf=\"i._needIcon\">\n          <ng-container *ngIf=\"!collapsed\">\n            <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{ $implicit: i.icon }\"></ng-template>\n          </ng-container>\n          <span *ngIf=\"collapsed\" nz-tooltip nzTooltipPlacement=\"right\" [nzTooltipTitle]=\"i.text\">\n            <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{ $implicit: i.icon }\"></ng-template>\n          </span>\n        </ng-container>\n        <span class=\"sidebar-nav__item-text\" [innerHTML]=\"i._text\" [attr.title]=\"i.text\"></span>\n      </a>\n      <!-- has children link -->\n      <a\n        *ngIf=\"i.children.length > 0\"\n        (click)=\"toggleOpen(i)\"\n        (mouseenter)=\"showSubMenu($event, i)\"\n        class=\"sidebar-nav__item-link\"\n      >\n        <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{ $implicit: i.icon }\"></ng-template>\n        <span class=\"sidebar-nav__item-text\" [innerHTML]=\"i._text\" [attr.title]=\"i.text\"></span>\n        <i class=\"sidebar-nav__sub-arrow\"></i>\n      </a>\n      <!-- badge -->\n      <nz-badge *ngIf=\"i.badge\" [nzCount]=\"i.badge\" [nzDot]=\"i.badgeDot\" nzStandalone [nzOverflowCount]=\"9\"></nz-badge>\n      <ul *ngIf=\"i.children.length > 0\" class=\"sidebar-nav sidebar-nav__sub sidebar-nav__depth{{ i._depth }}\">\n        <ng-template [ngTemplateOutlet]=\"tree\" [ngTemplateOutletContext]=\"{ $implicit: i.children }\"></ng-template>\n      </ul>\n    </li>\n  </ng-container>\n</ng-template>\n<ul class=\"sidebar-nav\">\n  <ng-container *ngFor=\"let group of list\">\n    <li class=\"sidebar-nav__item sidebar-nav__group-title\" *ngIf=\"group.group\">\n      <span [innerHTML]=\"group._text\"></span>\n    </li>\n    <ng-template [ngTemplateOutlet]=\"tree\" [ngTemplateOutletContext]=\"{ $implicit: group.children }\"></ng-template>\n  </ng-container>\n</ul>\n", components: [{ type: i5.NzBadgeComponent, selector: "nz-badge", inputs: ["nzShowZero", "nzShowDot", "nzStandalone", "nzDot", "nzOverflowCount", "nzColor", "nzStyle", "nzText", "nzTitle", "nzStatus", "nzCount", "nzOffset"], exportAs: ["nzBadge"] }], directives: [{ type: i6.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i6.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { type: i6.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { type: i7.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { type: i6.NgSwitchDefault, selector: "[ngSwitchDefault]" }, { type: i6.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i6.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i6.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }, { type: i8.NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    InputBoolean()
], LayoutDefaultNavComponent.prototype, "disabledAcl", void 0);
__decorate([
    InputBoolean()
], LayoutDefaultNavComponent.prototype, "autoCloseUnderPad", void 0);
__decorate([
    InputBoolean()
], LayoutDefaultNavComponent.prototype, "recursivePath", void 0);
__decorate([
    InputBoolean()
], LayoutDefaultNavComponent.prototype, "openStrictly", void 0);
__decorate([
    InputNumber()
], LayoutDefaultNavComponent.prototype, "maxLevelIcon", void 0);
__decorate([
    ZoneOutside()
], LayoutDefaultNavComponent.prototype, "showSubMenu", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.3", ngImport: i0, type: LayoutDefaultNavComponent, decorators: [{
            type: Component,
            args: [{ selector: 'layout-default-nav', host: {
                        '(click)': '_click()',
                        '(document:click)': 'closeSubMenu()'
                    }, preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<ng-template #icon let-i>\n  <ng-container *ngIf=\"i\" [ngSwitch]=\"i.type\">\n    <i\n      *ngSwitchCase=\"'icon'\"\n      class=\"sidebar-nav__item-icon\"\n      nz-icon\n      [nzType]=\"i.value\"\n      [nzTheme]=\"i.theme\"\n      [nzSpin]=\"i.spin\"\n      [nzTwotoneColor]=\"i.twoToneColor\"\n      [nzIconfont]=\"i.iconfont\"\n      [nzRotate]=\"i.rotate\"\n    ></i>\n    <i *ngSwitchCase=\"'iconfont'\" class=\"sidebar-nav__item-icon\" nz-icon [nzIconfont]=\"i.iconfont\"></i>\n    <img *ngSwitchCase=\"'img'\" [src]=\"i.value\" class=\"sidebar-nav__item-icon sidebar-nav__item-img\" />\n    <span *ngSwitchCase=\"'svg'\" class=\"sidebar-nav__item-icon sidebar-nav__item-svg\" [innerHTML]=\"i.value\"></span>\n    <i *ngSwitchDefault class=\"sidebar-nav__item-icon {{ i.value }}\"></i>\n  </ng-container>\n</ng-template>\n<ng-template #tree let-ls>\n  <ng-container *ngFor=\"let i of ls\">\n    <li\n      *ngIf=\"i._hidden !== true\"\n      class=\"sidebar-nav__item\"\n      [class.sidebar-nav__selected]=\"i._selected\"\n      [class.sidebar-nav__open]=\"i._open\"\n    >\n      <!-- link -->\n      <a\n        *ngIf=\"i.children.length === 0\"\n        (click)=\"to(i)\"\n        [attr.data-id]=\"i._id\"\n        class=\"sidebar-nav__item-link\"\n        [ngClass]=\"{ 'sidebar-nav__item-disabled': i.disabled }\"\n        (mouseenter)=\"closeSubMenu()\"\n      >\n        <ng-container *ngIf=\"i._needIcon\">\n          <ng-container *ngIf=\"!collapsed\">\n            <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{ $implicit: i.icon }\"></ng-template>\n          </ng-container>\n          <span *ngIf=\"collapsed\" nz-tooltip nzTooltipPlacement=\"right\" [nzTooltipTitle]=\"i.text\">\n            <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{ $implicit: i.icon }\"></ng-template>\n          </span>\n        </ng-container>\n        <span class=\"sidebar-nav__item-text\" [innerHTML]=\"i._text\" [attr.title]=\"i.text\"></span>\n      </a>\n      <!-- has children link -->\n      <a\n        *ngIf=\"i.children.length > 0\"\n        (click)=\"toggleOpen(i)\"\n        (mouseenter)=\"showSubMenu($event, i)\"\n        class=\"sidebar-nav__item-link\"\n      >\n        <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{ $implicit: i.icon }\"></ng-template>\n        <span class=\"sidebar-nav__item-text\" [innerHTML]=\"i._text\" [attr.title]=\"i.text\"></span>\n        <i class=\"sidebar-nav__sub-arrow\"></i>\n      </a>\n      <!-- badge -->\n      <nz-badge *ngIf=\"i.badge\" [nzCount]=\"i.badge\" [nzDot]=\"i.badgeDot\" nzStandalone [nzOverflowCount]=\"9\"></nz-badge>\n      <ul *ngIf=\"i.children.length > 0\" class=\"sidebar-nav sidebar-nav__sub sidebar-nav__depth{{ i._depth }}\">\n        <ng-template [ngTemplateOutlet]=\"tree\" [ngTemplateOutletContext]=\"{ $implicit: i.children }\"></ng-template>\n      </ul>\n    </li>\n  </ng-container>\n</ng-template>\n<ul class=\"sidebar-nav\">\n  <ng-container *ngFor=\"let group of list\">\n    <li class=\"sidebar-nav__item sidebar-nav__group-title\" *ngIf=\"group.group\">\n      <span [innerHTML]=\"group._text\"></span>\n    </li>\n    <ng-template [ngTemplateOutlet]=\"tree\" [ngTemplateOutletContext]=\"{ $implicit: group.children }\"></ng-template>\n  </ng-container>\n</ul>\n" }]
        }], ctorParameters: function () { return [{ type: i1.MenuService }, { type: i1.SettingsService }, { type: i2.Router }, { type: i0.Renderer2 }, { type: i0.ChangeDetectorRef }, { type: i0.NgZone }, { type: i3.DomSanitizer }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [WINDOW]
                }] }, { type: i4.Directionality, decorators: [{
                    type: Optional
                }] }]; }, propDecorators: { disabledAcl: [{
                type: Input
            }], autoCloseUnderPad: [{
                type: Input
            }], recursivePath: [{
                type: Input
            }], openStrictly: [{
                type: Input
            }], maxLevelIcon: [{
                type: Input
            }], select: [{
                type: Output
            }], showSubMenu: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LW5hdi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90aGVtZS9sYXlvdXQtZGVmYXVsdC9sYXlvdXQtbmF2LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lL2xheW91dC1kZWZhdWx0L2xheW91dC1uYXYuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsdUJBQXVCLEVBRXZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFJTCxRQUFRLEVBQ1IsTUFBTSxFQUVOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsYUFBYSxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFDeEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR25ELE9BQU8sRUFBZ0IsWUFBWSxFQUFFLFdBQVcsRUFBZSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7Ozs7Ozs7QUFRM0MsTUFBTSxPQUFPLEdBQUcsNEJBQTRCLENBQUM7QUFDN0MsTUFBTSxXQUFXLEdBQUcsdUJBQXVCLENBQUM7QUFhNUMsTUFBTSxPQUFPLHlCQUF5QjtJQXdCcEMsWUFDVSxPQUFvQixFQUNwQixRQUF5QixFQUN6QixNQUFjLEVBQ2QsTUFBaUIsRUFDakIsR0FBc0IsRUFDdEIsTUFBYyxFQUNkLFNBQXVCLEVBQ0wsR0FBYyxFQUNoQixHQUFjLEVBQ2xCLGNBQThCO1FBVDFDLFlBQU8sR0FBUCxPQUFPLENBQWE7UUFDcEIsYUFBUSxH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O3NCQUFuQyxLQUFLO2dCQUNtQixpQkFBaUI7c0JBQXpDLEtBQUs7Z0JBQ21CLGFBQWE7c0JBQXJDLEtBQUs7Z0JBQ21CLFlBQVk7c0JBQXBDLEtBQUs7Z0JBQ2tCLFlBQVk7c0JBQW5DLEtBQUs7Z0JBQ2EsTUFBTTtzQkFBeEIsTUFBTTtnQkErR1AsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkVuZCwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBNZW51LCBNZW51SWNvbiwgTWVudUlubmVyLCBNZW51U2VydmljZSwgU2V0dGluZ3NTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciwgTnVtYmVySW5wdXQsIFpvbmVPdXRzaWRlIH0gZnJvbSAnQGRlbG9uL3V0aWwvZGVjb3JhdG9yJztcbmltcG9ydCB7IFdJTkRPVyB9IGZyb20gJ0BkZWxvbi91dGlsL3Rva2VuJztcbmltcG9ydCB0eXBlIHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBOYXYgZXh0ZW5kcyBNZW51SW5uZXIge1xuICBfbmVlZEljb24/OiBib29sZWFuO1xuICBfdGV4dD86IFNhZmVIdG1sO1xufVxuXG5jb25zdCBTSE9XQ0xTID0gJ3NpZGViYXItbmF2X19mbG9hdGluZy1zaG93JztcbmNvbnN0IEZMT0FUSU5HQ0xTID0gJ3NpZGViYXItbmF2X19mbG9hdGluZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xheW91dC1kZWZhdWx0LW5hdicsXG4gIHRlbXBsYXRlVXJsOiAnLi9sYXlvdXQtbmF2LmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgICcoY2xpY2spJzogJ19jbGljaygpJyxcbiAgICAnKGRvY3VtZW50OmNsaWNrKSc6ICdjbG9zZVN1Yk1lbnUoKSdcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIExheW91dERlZmF1bHROYXZDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9kaXNhYmxlZEFjbDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfYXV0b0Nsb3NlVW5kZXJQYWQ6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3JlY3Vyc2l2ZVBhdGg6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX29wZW5TdHJpY3RseTogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbWF4TGV2ZWxJY29uOiBOdW1iZXJJbnB1dDtcblxuICBwcml2YXRlIGJvZHlFbCE6IEhUTUxCb2R5RWxlbWVudDtcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHByaXZhdGUgZmxvYXRpbmdFbCE6IEhUTUxEaXZFbGVtZW50O1xuICBkaXI6IERpcmVjdGlvbiA9ICdsdHInO1xuICBsaXN0OiBOYXZbXSA9IFtdO1xuXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkaXNhYmxlZEFjbCA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYXV0b0Nsb3NlVW5kZXJQYWQgPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgcmVjdXJzaXZlUGF0aCA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBvcGVuU3RyaWN0bHkgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgbWF4TGV2ZWxJY29uID0gMztcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8TWVudT4oKTtcblxuICBnZXQgY29sbGFwc2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNldHRpbmdzLmxheW91dC5jb2xsYXBzZWQ7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG1lbnVTcnY6IE1lbnVTZXJ2aWNlLFxuICAgIHByaXZhdGUgc2V0dGluZ3M6IFNldHRpbmdzU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgcmVuZGVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcixcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogTnpTYWZlQW55LFxuICAgIEBJbmplY3QoV0lORE9XKSBwcml2YXRlIHdpbjogTnpTYWZlQW55LFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZGlyZWN0aW9uYWxpdHk6IERpcmVjdGlvbmFsaXR5XG4gICkge31cblxuICBwcml2YXRlIGdldExpbmtOb2RlKG5vZGU6IEhUTUxFbGVtZW50KTogSFRNTEVsZW1lbnQgfCBudWxsIHtcbiAgICBub2RlID0gbm9kZS5ub2RlTmFtZSA9PT0gJ0EnID8gbm9kZSA6IChub2RlLnBhcmVudE5vZGUgYXMgSFRNTEVsZW1lbnQpO1xuICAgIHJldHVybiBub2RlLm5vZGVOYW1lICE9PSAnQScgPyBudWxsIDogbm9kZTtcbiAgfVxuXG4gIHByaXZhdGUgZmxvYXRpbmdDbGlja0hhbmRsZShlOiBNb3VzZUV2ZW50KTogYm9vbGVhbiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCBsaW5rTm9kZSA9IHRoaXMuZ2V0TGlua05vZGUoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpO1xuICAgIGlmIChsaW5rTm9kZSA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IGlkID0gK2xpbmtOb2RlLmRhdGFzZXQhLmlkITtcbiAgICAvLyBTaG91bGQgYmUgaW5nb3JlIGNoaWxkcmVuIHRpdGxlIHRyaWdnZXIgZXZlbnRcbiAgICBpZiAoaXNOYU4oaWQpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbGV0IGl0ZW06IE5hdjtcbiAgICB0aGlzLm1lbnVTcnYudmlzaXQodGhpcy5saXN0LCAoaTogTmF2KSA9PiB7XG4gICAgICBpZiAoIWl0ZW0gJiYgaS5faWQgPT09IGlkKSB7XG4gICAgICAgIGl0ZW0gPSBpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMudG8oaXRlbSEpO1xuICAgIHRoaXMuaGlkZUFsbCgpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIGNsZWFyRmxvYXRpbmcoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmZsb2F0aW5nRWwpIHJldHVybjtcbiAgICB0aGlzLmZsb2F0aW5nRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmZsb2F0aW5nQ2xpY2tIYW5kbGUuYmluZCh0aGlzKSk7XG4gICAgLy8gZml4IGllOiBodHRwczovL2dpdGh1Yi5jb20vbmctYWxhaW4vZGVsb24vaXNzdWVzLzUyXG4gICAgaWYgKHRoaXMuZmxvYXRpbmdFbC5oYXNPd25Qcm9wZXJ0eSgncmVtb3ZlJykpIHtcbiAgICAgIHRoaXMuZmxvYXRpbmdFbC5yZW1vdmUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZmxvYXRpbmdFbC5wYXJlbnROb2RlKSB7XG4gICAgICB0aGlzLmZsb2F0aW5nRWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmZsb2F0aW5nRWwpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2VuRmxvYXRpbmcoKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhckZsb2F0aW5nKCk7XG4gICAgdGhpcy5mbG9hdGluZ0VsID0gdGhpcy5yZW5kZXIuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5mbG9hdGluZ0VsLmNsYXNzTGlzdC5hZGQoYCR7RkxPQVRJTkdDTFN9LWNvbnRhaW5lcmApO1xuICAgIHRoaXMuZmxvYXRpbmdFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZmxvYXRpbmdDbGlja0hhbmRsZS5iaW5kKHRoaXMpLCBmYWxzZSk7XG4gICAgdGhpcy5ib2R5RWwuYXBwZW5kQ2hpbGQodGhpcy5mbG9hdGluZ0VsKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuU3ViTm9kZShsaW5rTm9kZTogSFRNTExpbmtFbGVtZW50LCBpdGVtOiBOYXYpOiBIVE1MVUxpc3RFbGVtZW50IHtcbiAgICBjb25zdCBpZCA9IGBfc2lkZWJhci1uYXYtJHtpdGVtLl9pZH1gO1xuICAgIGNvbnN0IGNoaWxkTm9kZSA9IGl0ZW0uYmFkZ2UgPyBsaW5rTm9kZS5uZXh0RWxlbWVudFNpYmxpbmchLm5leHRFbGVtZW50U2libGluZyEgOiBsaW5rTm9kZS5uZXh0RWxlbWVudFNpYmxpbmchO1xuICAgIGNvbnN0IG5vZGUgPSBjaGlsZE5vZGUuY2xvbmVOb2RlKHRydWUpIGFzIEhUTUxVTGlzdEVsZW1lbnQ7XG4gICAgbm9kZS5pZCA9IGlkO1xuICAgIG5vZGUuY2xhc3NMaXN0LmFkZChGTE9BVElOR0NMUyk7XG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ21vdXNlbGVhdmUnLFxuICAgICAgKCkgPT4ge1xuICAgICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoU0hPV0NMUyk7XG4gICAgICB9LFxuICAgICAgZmFsc2VcbiAgICApO1xuICAgIHRoaXMuZmxvYXRpbmdFbC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHByaXZhdGUgaGlkZUFsbCgpOiB2b2lkIHtcbiAgICBjb25zdCBhbGxOb2RlID0gdGhpcy5mbG9hdGluZ0VsLnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke0ZMT0FUSU5HQ0xTfWApO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsTm9kZS5sZW5ndGg7IGkrKykge1xuICAgICAgYWxsTm9kZVtpXS5jbGFzc0xpc3QucmVtb3ZlKFNIT1dDTFMpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGNhbGN1bGF0ZSB0aGUgbm9kZSBwb3NpdGlvbiB2YWx1ZXMuXG4gIHByaXZhdGUgY2FsUG9zKGxpbmtOb2RlOiBIVE1MTGlua0VsZW1lbnQsIG5vZGU6IEhUTUxVTGlzdEVsZW1lbnQpOiB2b2lkIHtcbiAgICBjb25zdCByZWN0ID0gbGlua05vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgLy8gYnVnOiBodHRwczovL2RldmVsb3Blci5taWNyb3NvZnQuY29tL2VuLXVzL21pY3Jvc29mdC1lZGdlL3BsYXRmb3JtL2lzc3Vlcy8xNDcyMTAxNS9cbiAgICBjb25zdCBzY3JvbGxUb3AgPSBNYXRoLm1heCh0aGlzLmRvYy5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wLCB0aGlzLmJvZHlFbC5zY3JvbGxUb3ApO1xuICAgIGNvbnN0IGRvY0hlaWdodCA9IE1hdGgubWF4KHRoaXMuZG9jLmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsIHRoaXMuYm9keUVsLmNsaWVudEhlaWdodCk7XG4gICAgY29uc3Qgc3BhY2luZyA9IDU7XG4gICAgbGV0IG9mZnNldEhlaWdodCA9IC1zcGFjaW5nO1xuICAgIGlmIChkb2NIZWlnaHQgPCByZWN0LnRvcCArIG5vZGUuY2xpZW50SGVpZ2h0KSB7XG4gICAgICBvZmZzZXRIZWlnaHQgPSByZWN0LnRvcCArIG5vZGUuY2xpZW50SGVpZ2h0IC0gZG9jSGVpZ2h0ICsgc3BhY2luZztcbiAgICB9XG4gICAgbm9kZS5zdHlsZS50b3AgPSBgJHtyZWN0LnRvcCArIHNjcm9sbFRvcCAtIG9mZnNldEhlaWdodH1weGA7XG4gICAgaWYgKHRoaXMuZGlyID09PSAncnRsJykge1xuICAgICAgbm9kZS5zdHlsZS5yaWdodCA9IGAke3JlY3Qud2lkdGggKyBzcGFjaW5nfXB4YDtcbiAgICB9IGVsc2Uge1xuICAgICAgbm9kZS5zdHlsZS5sZWZ0ID0gYCR7cmVjdC5yaWdodCArIHNwYWNpbmd9cHhgO1xuICAgIH1cbiAgfVxuXG4gIEBab25lT3V0c2lkZSgpXG4gIHNob3dTdWJNZW51KGU6IE1vdXNlRXZlbnQsIGl0ZW06IE5hdik6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvbGxhcHNlZCAhPT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgbGlua05vZGUgPSBlLnRhcmdldCBhcyBFbGVtZW50O1xuICAgIHRoaXMuZ2VuRmxvYXRpbmcoKTtcbiAgICBjb25zdCBzdWJOb2RlID0gdGhpcy5nZW5TdWJOb2RlKGxpbmtOb2RlIGFzIEhUTUxMaW5rRWxlbWVudCwgaXRlbSk7XG4gICAgdGhpcy5oaWRlQWxsKCk7XG4gICAgc3ViTm9kZS5jbGFzc0xpc3QuYWRkKFNIT1dDTFMpO1xuICAgIHRoaXMuY2FsUG9zKGxpbmtOb2RlIGFzIEhUTUxMaW5rRWxlbWVudCwgc3ViTm9kZSk7XG4gIH1cblxuICB0byhpdGVtOiBNZW51KTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3QuZW1pdChpdGVtKTtcbiAgICBpZiAoaXRlbS5kaXNhYmxlZCkgcmV0dXJuO1xuXG4gICAgaWYgKGl0ZW0uZXh0ZXJuYWxMaW5rKSB7XG4gICAgICBpZiAoaXRlbS50YXJnZXQgPT09ICdfYmxhbmsnKSB7XG4gICAgICAgIHRoaXMud2luLm9wZW4oaXRlbS5leHRlcm5hbExpbmspO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy53aW4ubG9jYXRpb24uaHJlZiA9IGl0ZW0uZXh0ZXJuYWxMaW5rO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChpdGVtLmxpbmshKSk7XG4gIH1cblxuICB0b2dnbGVPcGVuKGl0ZW06IE5hdik6IHZvaWQge1xuICAgIGlmICghdGhpcy5vcGVuU3RyaWN0bHkpIHtcbiAgICAgIHRoaXMubWVudVNydi52aXNpdCh0aGlzLmxpc3QsIChpOiBOYXYpID0+IHtcbiAgICAgICAgaWYgKGkgIT09IGl0ZW0pIGkuX29wZW4gPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgICAgbGV0IHBJdGVtID0gaXRlbS5fcGFyZW50IGFzIE5hdjtcbiAgICAgIHdoaWxlIChwSXRlbSkge1xuICAgICAgICBwSXRlbS5fb3BlbiA9IHRydWU7XG4gICAgICAgIHBJdGVtID0gcEl0ZW0uX3BhcmVudCE7XG4gICAgICB9XG4gICAgfVxuICAgIGl0ZW0uX29wZW4gPSAhaXRlbS5fb3BlbjtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIF9jbGljaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc1BhZCAmJiB0aGlzLmNvbGxhcHNlZCkge1xuICAgICAgdGhpcy5vcGVuQXNpZGUoZmFsc2UpO1xuICAgICAgdGhpcy5oaWRlQWxsKCk7XG4gICAgfVxuICB9XG5cbiAgY2xvc2VTdWJNZW51KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvbGxhcHNlZCkge1xuICAgICAgdGhpcy5oaWRlQWxsKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBvcGVuZWRCeVVybCh1cmw6IHN0cmluZyB8IG51bGwpOiB2b2lkIHtcbiAgICBjb25zdCB7IG1lbnVTcnYsIHJlY3Vyc2l2ZVBhdGgsIG9wZW5TdHJpY3RseSB9ID0gdGhpcztcbiAgICBsZXQgZmluZEl0ZW06IE5hdiB8IG51bGwgPSBtZW51U3J2LmdldEhpdCh0aGlzLm1lbnVTcnYubWVudXMsIHVybCEsIHJlY3Vyc2l2ZVBhdGgsIChpOiBOYXYpID0+IHtcbiAgICAgIGkuX3NlbGVjdGVkID0gZmFsc2U7XG4gICAgICBpZiAoIW9wZW5TdHJpY3RseSkge1xuICAgICAgICBpLl9vcGVuID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKGZpbmRJdGVtID09IG51bGwpIHJldHVybjtcblxuICAgIGRvIHtcbiAgICAgIGZpbmRJdGVtLl9zZWxlY3RlZCA9IHRydWU7XG4gICAgICBpZiAoIW9wZW5TdHJpY3RseSkge1xuICAgICAgICBmaW5kSXRlbS5fb3BlbiA9IHRydWU7XG4gICAgICB9XG4gICAgICBmaW5kSXRlbSA9IGZpbmRJdGVtLl9wYXJlbnQhO1xuICAgIH0gd2hpbGUgKGZpbmRJdGVtKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgZG9jLCByb3V0ZXIsIGRlc3Ryb3kkLCBtZW51U3J2LCBzZXR0aW5ncywgY2RyIH0gPSB0aGlzO1xuICAgIHRoaXMuYm9keUVsID0gZG9jLnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICB0aGlzLm9wZW5lZEJ5VXJsKHJvdXRlci51cmwpO1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuZ2VuRmxvYXRpbmcoKSk7XG4gICAgbWVudVNydi5jaGFuZ2UucGlwZSh0YWtlVW50aWwoZGVzdHJveSQpKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICBtZW51U3J2LnZpc2l0KGRhdGEsIChpOiBOYXYsIF9wLCBkZXB0aCkgPT4ge1xuICAgICAgICBpLl90ZXh0ID0gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoaS50ZXh0ISk7XG4gICAgICAgIGkuX25lZWRJY29uID0gZGVwdGghIDw9IHRoaXMubWF4TGV2ZWxJY29uICYmICEhaS5pY29uO1xuICAgICAgICBpZiAoIWkuX2FjbFJlc3VsdCkge1xuICAgICAgICAgIGlmICh0aGlzLmRpc2FibGVkQWNsKSB7XG4gICAgICAgICAgICBpLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaS5faGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub3BlblN0cmljdGx5KSB7XG4gICAgICAgICAgaS5fb3BlbiA9IGkub3BlbiAhPSBudWxsID8gaS5vcGVuIDogZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaWNvbiA9IGkuaWNvbiBhcyBNZW51SWNvbjtcbiAgICAgICAgaWYgKGljb24gJiYgaWNvbi50eXBlID09PSAnc3ZnJyAmJiB0eXBlb2YgaWNvbi52YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBpY29uLnZhbHVlID0gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoaWNvbi52YWx1ZSEhKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLmxpc3QgPSBtZW51U3J2Lm1lbnVzLmZpbHRlcigodzogTmF2KSA9PiB3Ll9oaWRkZW4gIT09IHRydWUpO1xuICAgICAgY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgICByb3V0ZXIuZXZlbnRzLnBpcGUodGFrZVVudGlsKGRlc3Ryb3kkKSkuc3Vic2NyaWJlKGUgPT4ge1xuICAgICAgaWYgKGUgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSB7XG4gICAgICAgIHRoaXMub3BlbmVkQnlVcmwoZS51cmxBZnRlclJlZGlyZWN0cyk7XG4gICAgICAgIHRoaXMudW5kZXJQYWQoKTtcbiAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHNldHRpbmdzLm5vdGlmeVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRha2VVbnRpbChkZXN0cm95JCksXG4gICAgICAgIGZpbHRlcih0ID0+IHQudHlwZSA9PT0gJ2xheW91dCcgJiYgdC5uYW1lID09PSAnY29sbGFwc2VkJylcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jbGVhckZsb2F0aW5nKCkpO1xuICAgIHRoaXMudW5kZXJQYWQoKTtcblxuICAgIHRoaXMuZGlyID0gdGhpcy5kaXJlY3Rpb25hbGl0eS52YWx1ZTtcbiAgICB0aGlzLmRpcmVjdGlvbmFsaXR5LmNoYW5nZT8ucGlwZSh0YWtlVW50aWwoZGVzdHJveSQpKS5zdWJzY3JpYmUoKGRpcmVjdGlvbjogRGlyZWN0aW9uKSA9PiB7XG4gICAgICB0aGlzLmRpciA9IGRpcmVjdGlvbjtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgICB0aGlzLmNsZWFyRmxvYXRpbmcoKTtcbiAgfVxuXG4gIC8vICNyZWdpb24gVW5kZXIgcGFkXG5cbiAgcHJpdmF0ZSBnZXQgaXNQYWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZG9jLmRlZmF1bHRWaWV3IS5pbm5lcldpZHRoIDwgNzY4O1xuICB9XG5cbiAgcHJpdmF0ZSB1bmRlclBhZCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hdXRvQ2xvc2VVbmRlclBhZCAmJiB0aGlzLmlzUGFkICYmICF0aGlzLmNvbGxhcHNlZCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLm9wZW5Bc2lkZSh0cnVlKSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBvcGVuQXNpZGUoc3RhdHVzOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5zZXR0aW5ncy5zZXRMYXlvdXQoJ2NvbGxhcHNlZCcsIHN0YXR1cyk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG59XG4iLCI8bmctdGVtcGxhdGUgI2ljb24gbGV0LWk+XG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJpXCIgW25nU3dpdGNoXT1cImkudHlwZVwiPlxuICAgIDxpXG4gICAgICAqbmdTd2l0Y2hDYXNlPVwiJ2ljb24nXCJcbiAgICAgIGNsYXNzPVwic2lkZWJhci1uYXZfX2l0ZW0taWNvblwiXG4gICAgICBuei1pY29uXG4gICAgICBbbnpUeXBlXT1cImkudmFsdWVcIlxuICAgICAgW256VGhlbWVdPVwiaS50aGVtZVwiXG4gICAgICBbbnpTcGluXT1cImkuc3BpblwiXG4gICAgICBbbnpUd290b25lQ29sb3JdPVwiaS50d29Ub25lQ29sb3JcIlxuICAgICAgW256SWNvbmZvbnRdPVwiaS5pY29uZm9udFwiXG4gICAgICBbbnpSb3RhdGVdPVwiaS5yb3RhdGVcIlxuICAgID48L2k+XG4gICAgPGkgKm5nU3dpdGNoQ2FzZT1cIidpY29uZm9udCdcIiBjbGFzcz1cInNpZGViYXItbmF2X19pdGVtLWljb25cIiBuei1pY29uIFtuekljb25mb250XT1cImkuaWNvbmZvbnRcIj48L2k+XG4gICAgPGltZyAqbmdTd2l0Y2hDYXNlPVwiJ2ltZydcIiBbc3JjXT1cImkudmFsdWVcIiBjbGFzcz1cInNpZGViYXItbmF2X19pdGVtLWljb24gc2lkZWJhci1uYXZfX2l0ZW0taW1nXCIgLz5cbiAgICA8c3BhbiAqbmdTd2l0Y2hDYXNlPVwiJ3N2ZydcIiBjbGFzcz1cInNpZGViYXItbmF2X19pdGVtLWljb24gc2lkZWJhci1uYXZfX2l0ZW0tc3ZnXCIgW2lubmVySFRNTF09XCJpLnZhbHVlXCI+PC9zcGFuPlxuICAgIDxpICpuZ1N3aXRjaERlZmF1bHQgY2xhc3M9XCJzaWRlYmFyLW5hdl9faXRlbS1pY29uIHt7IGkudmFsdWUgfX1cIj48L2k+XG4gIDwvbmctY29udGFpbmVyPlxuPC9uZy10ZW1wbGF0ZT5cbjxuZy10ZW1wbGF0ZSAjdHJlZSBsZXQtbHM+XG4gIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGkgb2YgbHNcIj5cbiAgICA8bGlcbiAgICAgICpuZ0lmPVwiaS5faGlkZGVuICE9PSB0cnVlXCJcbiAgICAgIGNsYXNzPVwic2lkZWJhci1uYXZfX2l0ZW1cIlxuICAgICAgW2NsYXNzLnNpZGViYXItbmF2X19zZWxlY3RlZF09XCJpLl9zZWxlY3RlZFwiXG4gICAgICBbY2xhc3Muc2lkZWJhci1uYXZfX29wZW5dPVwiaS5fb3BlblwiXG4gICAgPlxuICAgICAgPCEtLSBsaW5rIC0tPlxuICAgICAgPGFcbiAgICAgICAgKm5nSWY9XCJpLmNoaWxkcmVuLmxlbmd0aCA9PT0gMFwiXG4gICAgICAgIChjbGljayk9XCJ0byhpKVwiXG4gICAgICAgIFthdHRyLmRhdGEtaWRdPVwiaS5faWRcIlxuICAgICAgICBjbGFzcz1cInNpZGViYXItbmF2X19pdGVtLWxpbmtcIlxuICAgICAgICBbbmdDbGFzc109XCJ7ICdzaWRlYmFyLW5hdl9faXRlbS1kaXNhYmxlZCc6IGkuZGlzYWJsZWQgfVwiXG4gICAgICAgIChtb3VzZWVudGVyKT1cImNsb3NlU3ViTWVudSgpXCJcbiAgICAgID5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImkuX25lZWRJY29uXCI+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFjb2xsYXBzZWRcIj5cbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJpY29uXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBpLmljb24gfVwiPjwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPHNwYW4gKm5nSWY9XCJjb2xsYXBzZWRcIiBuei10b29sdGlwIG56VG9vbHRpcFBsYWNlbWVudD1cInJpZ2h0XCIgW256VG9vbHRpcFRpdGxlXT1cImkudGV4dFwiPlxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImljb25cIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IGkuaWNvbiB9XCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInNpZGViYXItbmF2X19pdGVtLXRleHRcIiBbaW5uZXJIVE1MXT1cImkuX3RleHRcIiBbYXR0ci50aXRsZV09XCJpLnRleHRcIj48L3NwYW4+XG4gICAgICA8L2E+XG4gICAgICA8IS0tIGhhcyBjaGlsZHJlbiBsaW5rIC0tPlxuICAgICAgPGFcbiAgICAgICAgKm5nSWY9XCJpLmNoaWxkcmVuLmxlbmd0aCA+IDBcIlxuICAgICAgICAoY2xpY2spPVwidG9nZ2xlT3BlbihpKVwiXG4gICAgICAgIChtb3VzZWVudGVyKT1cInNob3dTdWJNZW51KCRldmVudCwgaSlcIlxuICAgICAgICBjbGFzcz1cInNpZGViYXItbmF2X19pdGVtLWxpbmtcIlxuICAgICAgPlxuICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiaWNvblwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogaS5pY29uIH1cIj48L25nLXRlbXBsYXRlPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInNpZGViYXItbmF2X19pdGVtLXRleHRcIiBbaW5uZXJIVE1MXT1cImkuX3RleHRcIiBbYXR0ci50aXRsZV09XCJpLnRleHRcIj48L3NwYW4+XG4gICAgICAgIDxpIGNsYXNzPVwic2lkZWJhci1uYXZfX3N1Yi1hcnJvd1wiPjwvaT5cbiAgICAgIDwvYT5cbiAgICAgIDwhLS0gYmFkZ2UgLS0+XG4gICAgICA8bnotYmFkZ2UgKm5nSWY9XCJpLmJhZGdlXCIgW256Q291bnRdPVwiaS5iYWRnZVwiIFtuekRvdF09XCJpLmJhZGdlRG90XCIgbnpTdGFuZGFsb25lIFtuek92ZXJmbG93Q291bnRdPVwiOVwiPjwvbnotYmFkZ2U+XG4gICAgICA8dWwgKm5nSWY9XCJpLmNoaWxkcmVuLmxlbmd0aCA+IDBcIiBjbGFzcz1cInNpZGViYXItbmF2IHNpZGViYXItbmF2X19zdWIgc2lkZWJhci1uYXZfX2RlcHRoe3sgaS5fZGVwdGggfX1cIj5cbiAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRyZWVcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IGkuY2hpbGRyZW4gfVwiPjwvbmctdGVtcGxhdGU+XG4gICAgICA8L3VsPlxuICAgIDwvbGk+XG4gIDwvbmctY29udGFpbmVyPlxuPC9uZy10ZW1wbGF0ZT5cbjx1bCBjbGFzcz1cInNpZGViYXItbmF2XCI+XG4gIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGdyb3VwIG9mIGxpc3RcIj5cbiAgICA8bGkgY2xhc3M9XCJzaWRlYmFyLW5hdl9faXRlbSBzaWRlYmFyLW5hdl9fZ3JvdXAtdGl0bGVcIiAqbmdJZj1cImdyb3VwLmdyb3VwXCI+XG4gICAgICA8c3BhbiBbaW5uZXJIVE1MXT1cImdyb3VwLl90ZXh0XCI+PC9zcGFuPlxuICAgIDwvbGk+XG4gICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRyZWVcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IGdyb3VwLmNoaWxkcmVuIH1cIj48L25nLXRlbXBsYXRlPlxuICA8L25nLWNvbnRhaW5lcj5cbjwvdWw+XG4iXX0=