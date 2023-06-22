import { __decorate } from "tslib";
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, Optional, Output, ViewEncapsulation } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { Subject, filter, takeUntil } from 'rxjs';
import { InputBoolean, InputNumber, ZoneOutside } from '@delon/util/decorator';
import { WINDOW } from '@delon/util/token';
import * as i0 from "@angular/core";
import * as i1 from "@delon/theme";
import * as i2 from "@angular/router";
import * as i3 from "@angular/platform-browser";
import * as i4 from "@angular/cdk/bidi";
import * as i5 from "@angular/common";
import * as i6 from "ng-zorro-antd/tooltip";
import * as i7 from "ng-zorro-antd/icon";
import * as i8 from "ng-zorro-antd/badge";
const SHOWCLS = 'sidebar-nav__floating-show';
const FLOATINGCLS = 'sidebar-nav__floating';
class LayoutDefaultNavComponent {
    set openStrictly(value) {
        this.menuSrv.openStrictly = value;
    }
    get collapsed() {
        return this.settings.layout.collapsed;
    }
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
        this.maxLevelIcon = 3;
        this.select = new EventEmitter();
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
        this.menuSrv.toggleOpen(item);
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
    openByUrl(url) {
        const { menuSrv, recursivePath } = this;
        this.menuSrv.open(menuSrv.find({ url, recursive: recursivePath }));
    }
    ngOnInit() {
        const { doc, router, destroy$, menuSrv, settings, cdr } = this;
        this.bodyEl = doc.querySelector('body');
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
                const icon = i.icon;
                if (icon && icon.type === 'svg' && typeof icon.value === 'string') {
                    icon.value = this.sanitizer.bypassSecurityTrustHtml(icon.value);
                }
            });
            this.fixHide(data);
            this.list = data.filter((w) => w._hidden !== true);
            cdr.detectChanges();
        });
        router.events.pipe(takeUntil(destroy$)).subscribe(e => {
            if (e instanceof NavigationEnd) {
                this.openByUrl(e.urlAfterRedirects);
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
        this.openByUrl(router.url);
        this.ngZone.runOutsideAngular(() => this.genFloating());
    }
    fixHide(ls) {
        const inFn = (list) => {
            for (const item of list) {
                if (item.children && item.children.length > 0) {
                    inFn(item.children);
                    if (!item._hidden) {
                        item._hidden = item.children.every((v) => v._hidden);
                    }
                }
            }
        };
        inFn(ls);
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.2", ngImport: i0, type: LayoutDefaultNavComponent, deps: [{ token: i1.MenuService }, { token: i1.SettingsService }, { token: i2.Router }, { token: i0.Renderer2 }, { token: i0.ChangeDetectorRef }, { token: i0.NgZone }, { token: i3.DomSanitizer }, { token: DOCUMENT }, { token: WINDOW }, { token: i4.Directionality, optional: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.2", type: LayoutDefaultNavComponent, selector: "layout-default-nav", inputs: { disabledAcl: "disabledAcl", autoCloseUnderPad: "autoCloseUnderPad", recursivePath: "recursivePath", openStrictly: "openStrictly", maxLevelIcon: "maxLevelIcon" }, outputs: { select: "select" }, host: { listeners: { "click": "_click()", "document:click": "closeSubMenu()" }, properties: { "class.d-block": "true" } }, ngImport: i0, template: "<ng-template #icon let-i>\n  <ng-container *ngIf=\"i\" [ngSwitch]=\"i.type\">\n    <i\n      *ngSwitchCase=\"'icon'\"\n      class=\"sidebar-nav__item-icon\"\n      nz-icon\n      [nzType]=\"i.value\"\n      [nzTheme]=\"i.theme\"\n      [nzSpin]=\"i.spin\"\n      [nzTwotoneColor]=\"i.twoToneColor\"\n      [nzIconfont]=\"i.iconfont\"\n      [nzRotate]=\"i.rotate\"\n    ></i>\n    <i *ngSwitchCase=\"'iconfont'\" class=\"sidebar-nav__item-icon\" nz-icon [nzIconfont]=\"i.iconfont\"></i>\n    <img *ngSwitchCase=\"'img'\" [src]=\"i.value\" class=\"sidebar-nav__item-icon sidebar-nav__item-img\" />\n    <span *ngSwitchCase=\"'svg'\" class=\"sidebar-nav__item-icon sidebar-nav__item-svg\" [innerHTML]=\"i.value\"></span>\n    <i *ngSwitchDefault class=\"sidebar-nav__item-icon {{ i.value }}\"></i>\n  </ng-container>\n</ng-template>\n<ng-template #tree let-ls>\n  <ng-container *ngFor=\"let i of ls\">\n    <li\n      *ngIf=\"i._hidden !== true\"\n      class=\"sidebar-nav__item\"\n      [class.sidebar-nav__selected]=\"i._selected\"\n      [class.sidebar-nav__open]=\"i.open\"\n    >\n      <!-- link -->\n      <a\n        *ngIf=\"i.children.length === 0\"\n        (click)=\"to(i)\"\n        [attr.data-id]=\"i._id\"\n        class=\"sidebar-nav__item-link\"\n        [ngClass]=\"{ 'sidebar-nav__item-disabled': i.disabled }\"\n        (mouseenter)=\"closeSubMenu()\"\n      >\n        <ng-container *ngIf=\"i._needIcon\">\n          <ng-container *ngIf=\"!collapsed\">\n            <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{ $implicit: i.icon }\"></ng-template>\n          </ng-container>\n          <span *ngIf=\"collapsed\" nz-tooltip nzTooltipPlacement=\"right\" [nzTooltipTitle]=\"i.text\">\n            <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{ $implicit: i.icon }\"></ng-template>\n          </span>\n        </ng-container>\n        <span class=\"sidebar-nav__item-text\" [innerHTML]=\"i._text\" [attr.title]=\"i.text\"></span>\n      </a>\n      <!-- has children link -->\n      <a\n        *ngIf=\"i.children.length > 0\"\n        (click)=\"toggleOpen(i)\"\n        (mouseenter)=\"showSubMenu($event, i)\"\n        class=\"sidebar-nav__item-link\"\n      >\n        <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{ $implicit: i.icon }\"></ng-template>\n        <span class=\"sidebar-nav__item-text\" [innerHTML]=\"i._text\" [attr.title]=\"i.text\"></span>\n        <i class=\"sidebar-nav__sub-arrow\"></i>\n      </a>\n      <!-- badge -->\n      <nz-badge *ngIf=\"i.badge\" [nzCount]=\"i.badge\" [nzDot]=\"i.badgeDot\" nzStandalone [nzOverflowCount]=\"9\"></nz-badge>\n      <ul *ngIf=\"i.children.length > 0\" class=\"sidebar-nav sidebar-nav__sub sidebar-nav__depth{{ i._depth }}\">\n        <ng-template [ngTemplateOutlet]=\"tree\" [ngTemplateOutletContext]=\"{ $implicit: i.children }\"></ng-template>\n      </ul>\n    </li>\n  </ng-container>\n</ng-template>\n<ul class=\"sidebar-nav\">\n  <ng-container *ngFor=\"let group of list\">\n    <li class=\"sidebar-nav__item sidebar-nav__group-title\" *ngIf=\"group.group\">\n      <span [innerHTML]=\"group._text\"></span>\n    </li>\n    <ng-template [ngTemplateOutlet]=\"tree\" [ngTemplateOutletContext]=\"{ $implicit: group.children }\"></ng-template>\n  </ng-container>\n</ul>\n", dependencies: [{ kind: "directive", type: i5.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i5.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i5.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i5.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: i5.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { kind: "directive", type: i5.NgSwitchDefault, selector: "[ngSwitchDefault]" }, { kind: "directive", type: i6.NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }, { kind: "directive", type: i7.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "component", type: i8.NzBadgeComponent, selector: "nz-badge", inputs: ["nzShowZero", "nzShowDot", "nzStandalone", "nzDot", "nzOverflowCount", "nzColor", "nzStyle", "nzText", "nzTitle", "nzStatus", "nzCount", "nzOffset", "nzSize"], exportAs: ["nzBadge"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
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
], LayoutDefaultNavComponent.prototype, "openStrictly", null);
__decorate([
    InputNumber()
], LayoutDefaultNavComponent.prototype, "maxLevelIcon", void 0);
__decorate([
    ZoneOutside()
], LayoutDefaultNavComponent.prototype, "showSubMenu", null);
export { LayoutDefaultNavComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.2", ngImport: i0, type: LayoutDefaultNavComponent, decorators: [{
            type: Component,
            args: [{ selector: 'layout-default-nav', host: {
                        '(click)': '_click()',
                        '(document:click)': 'closeSubMenu()',
                        '[class.d-block]': `true`
                    }, preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<ng-template #icon let-i>\n  <ng-container *ngIf=\"i\" [ngSwitch]=\"i.type\">\n    <i\n      *ngSwitchCase=\"'icon'\"\n      class=\"sidebar-nav__item-icon\"\n      nz-icon\n      [nzType]=\"i.value\"\n      [nzTheme]=\"i.theme\"\n      [nzSpin]=\"i.spin\"\n      [nzTwotoneColor]=\"i.twoToneColor\"\n      [nzIconfont]=\"i.iconfont\"\n      [nzRotate]=\"i.rotate\"\n    ></i>\n    <i *ngSwitchCase=\"'iconfont'\" class=\"sidebar-nav__item-icon\" nz-icon [nzIconfont]=\"i.iconfont\"></i>\n    <img *ngSwitchCase=\"'img'\" [src]=\"i.value\" class=\"sidebar-nav__item-icon sidebar-nav__item-img\" />\n    <span *ngSwitchCase=\"'svg'\" class=\"sidebar-nav__item-icon sidebar-nav__item-svg\" [innerHTML]=\"i.value\"></span>\n    <i *ngSwitchDefault class=\"sidebar-nav__item-icon {{ i.value }}\"></i>\n  </ng-container>\n</ng-template>\n<ng-template #tree let-ls>\n  <ng-container *ngFor=\"let i of ls\">\n    <li\n      *ngIf=\"i._hidden !== true\"\n      class=\"sidebar-nav__item\"\n      [class.sidebar-nav__selected]=\"i._selected\"\n      [class.sidebar-nav__open]=\"i.open\"\n    >\n      <!-- link -->\n      <a\n        *ngIf=\"i.children.length === 0\"\n        (click)=\"to(i)\"\n        [attr.data-id]=\"i._id\"\n        class=\"sidebar-nav__item-link\"\n        [ngClass]=\"{ 'sidebar-nav__item-disabled': i.disabled }\"\n        (mouseenter)=\"closeSubMenu()\"\n      >\n        <ng-container *ngIf=\"i._needIcon\">\n          <ng-container *ngIf=\"!collapsed\">\n            <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{ $implicit: i.icon }\"></ng-template>\n          </ng-container>\n          <span *ngIf=\"collapsed\" nz-tooltip nzTooltipPlacement=\"right\" [nzTooltipTitle]=\"i.text\">\n            <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{ $implicit: i.icon }\"></ng-template>\n          </span>\n        </ng-container>\n        <span class=\"sidebar-nav__item-text\" [innerHTML]=\"i._text\" [attr.title]=\"i.text\"></span>\n      </a>\n      <!-- has children link -->\n      <a\n        *ngIf=\"i.children.length > 0\"\n        (click)=\"toggleOpen(i)\"\n        (mouseenter)=\"showSubMenu($event, i)\"\n        class=\"sidebar-nav__item-link\"\n      >\n        <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{ $implicit: i.icon }\"></ng-template>\n        <span class=\"sidebar-nav__item-text\" [innerHTML]=\"i._text\" [attr.title]=\"i.text\"></span>\n        <i class=\"sidebar-nav__sub-arrow\"></i>\n      </a>\n      <!-- badge -->\n      <nz-badge *ngIf=\"i.badge\" [nzCount]=\"i.badge\" [nzDot]=\"i.badgeDot\" nzStandalone [nzOverflowCount]=\"9\"></nz-badge>\n      <ul *ngIf=\"i.children.length > 0\" class=\"sidebar-nav sidebar-nav__sub sidebar-nav__depth{{ i._depth }}\">\n        <ng-template [ngTemplateOutlet]=\"tree\" [ngTemplateOutletContext]=\"{ $implicit: i.children }\"></ng-template>\n      </ul>\n    </li>\n  </ng-container>\n</ng-template>\n<ul class=\"sidebar-nav\">\n  <ng-container *ngFor=\"let group of list\">\n    <li class=\"sidebar-nav__item sidebar-nav__group-title\" *ngIf=\"group.group\">\n      <span [innerHTML]=\"group._text\"></span>\n    </li>\n    <ng-template [ngTemplateOutlet]=\"tree\" [ngTemplateOutletContext]=\"{ $implicit: group.children }\"></ng-template>\n  </ng-container>\n</ul>\n" }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LW5hdi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90aGVtZS9sYXlvdXQtZGVmYXVsdC9sYXlvdXQtbmF2LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lL2xheW91dC1kZWZhdWx0L2xheW91dC1uYXYuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsdUJBQXVCLEVBRXZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFJTCxRQUFRLEVBQ1IsTUFBTSxFQUVOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsYUFBYSxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFDeEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBR2xELE9BQU8sRUFBZ0IsWUFBWSxFQUFFLFdBQVcsRUFBZSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7Ozs7Ozs7QUFRM0MsTUFBTSxPQUFPLEdBQUcsNEJBQTRCLENBQUM7QUFDN0MsTUFBTSxXQUFXLEdBQUcsdUJBQXVCLENBQUM7QUFFNUMsTUFZYSx5QkFBeUI7SUFrQnBDLElBQUksWUFBWSxDQUFDLEtBQWM7UUFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0lBQ3BDLENBQUM7SUFJRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsWUFDVSxPQUFvQixFQUNwQixRQUF5QixFQUN6QixN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QUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQy9DLENBQUM7OEdBeFFVLHlCQUF5Qiw4TUFvQzFCLFFBQVEsYUFDUixNQUFNO2tHQXJDTCx5QkFBeUIsZ1lDOUN0Qyxnd0dBeUVBOztBRGQyQjtJQUFmLFlBQVksRUFBRTs4REFBcUI7QUFDcEI7SUFBZixZQUFZLEVBQUU7b0VBQTBCO0FBQ3pCO0lBQWYsWUFBWSxFQUFFO2dFQUFzQjtBQUc5QztJQURDLFlBQVksRUFBRTs2REFHZDtBQUN1QjtJQUFkLFdBQVcsRUFBRTsrREFBa0I7QUFnSHpDO0lBREMsV0FBVyxFQUFFOzREQVliO1NBaEpVLHlCQUF5QjsyRkFBekIseUJBQXlCO2tCQVpyQyxTQUFTOytCQUNFLG9CQUFvQixRQUV4Qjt3QkFDSixTQUFTLEVBQUUsVUFBVTt3QkFDckIsa0JBQWtCLEVBQUUsZ0JBQWdCO3dCQUNwQyxpQkFBaUIsRUFBRSxNQUFNO3FCQUMxQix1QkFDb0IsS0FBSyxtQkFDVCx1QkFBdUIsQ0FBQyxNQUFNLGlCQUNoQyxpQkFBaUIsQ0FBQyxJQUFJOzswQkFzQ2xDLE1BQU07MkJBQUMsUUFBUTs7MEJBQ2YsTUFBTTsyQkFBQyxNQUFNOzswQkFDYixRQUFROzRDQXpCYyxXQUFXO3NCQUFuQyxLQUFLO2dCQUNtQixpQkFBaUI7c0JBQXpDLEtBQUs7Z0JBQ21CLGFBQWE7c0JBQXJDLEtBQUs7Z0JBR0YsWUFBWTtzQkFGZixLQUFLO2dCQUtrQixZQUFZO3NCQUFuQyxLQUFLO2dCQUNhLE1BQU07c0JBQXhCLE1BQU07Z0JBK0dQLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3Rpb24sIERpcmVjdGlvbmFsaXR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IE5hdmlnYXRpb25FbmQsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTdWJqZWN0LCBmaWx0ZXIsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBNZW51LCBNZW51SWNvbiwgTWVudUlubmVyLCBNZW51U2VydmljZSwgU2V0dGluZ3NTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciwgTnVtYmVySW5wdXQsIFpvbmVPdXRzaWRlIH0gZnJvbSAnQGRlbG9uL3V0aWwvZGVjb3JhdG9yJztcbmltcG9ydCB7IFdJTkRPVyB9IGZyb20gJ0BkZWxvbi91dGlsL3Rva2VuJztcbmltcG9ydCB0eXBlIHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBOYXYgZXh0ZW5kcyBNZW51SW5uZXIge1xuICBfbmVlZEljb24/OiBib29sZWFuO1xuICBfdGV4dD86IFNhZmVIdG1sO1xufVxuXG5jb25zdCBTSE9XQ0xTID0gJ3NpZGViYXItbmF2X19mbG9hdGluZy1zaG93JztcbmNvbnN0IEZMT0FUSU5HQ0xTID0gJ3NpZGViYXItbmF2X19mbG9hdGluZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xheW91dC1kZWZhdWx0LW5hdicsXG4gIHRlbXBsYXRlVXJsOiAnLi9sYXlvdXQtbmF2LmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgICcoY2xpY2spJzogJ19jbGljaygpJyxcbiAgICAnKGRvY3VtZW50OmNsaWNrKSc6ICdjbG9zZVN1Yk1lbnUoKScsXG4gICAgJ1tjbGFzcy5kLWJsb2NrXSc6IGB0cnVlYFxuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgTGF5b3V0RGVmYXVsdE5hdkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Rpc2FibGVkQWNsOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9hdXRvQ2xvc2VVbmRlclBhZDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfcmVjdXJzaXZlUGF0aDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfb3BlblN0cmljdGx5OiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9tYXhMZXZlbEljb246IE51bWJlcklucHV0O1xuXG4gIHByaXZhdGUgYm9keUVsITogSFRNTEJvZHlFbGVtZW50O1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSBmbG9hdGluZ0VsITogSFRNTERpdkVsZW1lbnQ7XG4gIGRpcjogRGlyZWN0aW9uID0gJ2x0cic7XG4gIGxpc3Q6IE5hdltdID0gW107XG5cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRpc2FibGVkQWNsID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBhdXRvQ2xvc2VVbmRlclBhZCA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSByZWN1cnNpdmVQYXRoID0gdHJ1ZTtcbiAgQElucHV0KClcbiAgQElucHV0Qm9vbGVhbigpXG4gIHNldCBvcGVuU3RyaWN0bHkodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLm1lbnVTcnYub3BlblN0cmljdGx5ID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgbWF4TGV2ZWxJY29uID0gMztcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8TWVudT4oKTtcblxuICBnZXQgY29sbGFwc2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNldHRpbmdzLmxheW91dC5jb2xsYXBzZWQ7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG1lbnVTcnY6IE1lbnVTZXJ2aWNlLFxuICAgIHByaXZhdGUgc2V0dGluZ3M6IFNldHRpbmdzU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgcmVuZGVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcixcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogTnpTYWZlQW55LFxuICAgIEBJbmplY3QoV0lORE9XKSBwcml2YXRlIHdpbjogTnpTYWZlQW55LFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZGlyZWN0aW9uYWxpdHk6IERpcmVjdGlvbmFsaXR5XG4gICkge31cblxuICBwcml2YXRlIGdldExpbmtOb2RlKG5vZGU6IEhUTUxFbGVtZW50KTogSFRNTEVsZW1lbnQgfCBudWxsIHtcbiAgICBub2RlID0gbm9kZS5ub2RlTmFtZSA9PT0gJ0EnID8gbm9kZSA6IChub2RlLnBhcmVudE5vZGUgYXMgSFRNTEVsZW1lbnQpO1xuICAgIHJldHVybiBub2RlLm5vZGVOYW1lICE9PSAnQScgPyBudWxsIDogbm9kZTtcbiAgfVxuXG4gIHByaXZhdGUgZmxvYXRpbmdDbGlja0hhbmRsZShlOiBNb3VzZUV2ZW50KTogYm9vbGVhbiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCBsaW5rTm9kZSA9IHRoaXMuZ2V0TGlua05vZGUoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpO1xuICAgIGlmIChsaW5rTm9kZSA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IGlkID0gK2xpbmtOb2RlLmRhdGFzZXQhLmlkITtcbiAgICAvLyBTaG91bGQgYmUgaW5nb3JlIGNoaWxkcmVuIHRpdGxlIHRyaWdnZXIgZXZlbnRcbiAgICBpZiAoaXNOYU4oaWQpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbGV0IGl0ZW06IE5hdjtcbiAgICB0aGlzLm1lbnVTcnYudmlzaXQodGhpcy5saXN0LCAoaTogTmF2KSA9PiB7XG4gICAgICBpZiAoIWl0ZW0gJiYgaS5faWQgPT09IGlkKSB7XG4gICAgICAgIGl0ZW0gPSBpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMudG8oaXRlbSEpO1xuICAgIHRoaXMuaGlkZUFsbCgpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIGNsZWFyRmxvYXRpbmcoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmZsb2F0aW5nRWwpIHJldHVybjtcbiAgICB0aGlzLmZsb2F0aW5nRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmZsb2F0aW5nQ2xpY2tIYW5kbGUuYmluZCh0aGlzKSk7XG4gICAgLy8gZml4IGllOiBodHRwczovL2dpdGh1Yi5jb20vbmctYWxhaW4vZGVsb24vaXNzdWVzLzUyXG4gICAgaWYgKHRoaXMuZmxvYXRpbmdFbC5oYXNPd25Qcm9wZXJ0eSgncmVtb3ZlJykpIHtcbiAgICAgIHRoaXMuZmxvYXRpbmdFbC5yZW1vdmUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZmxvYXRpbmdFbC5wYXJlbnROb2RlKSB7XG4gICAgICB0aGlzLmZsb2F0aW5nRWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmZsb2F0aW5nRWwpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2VuRmxvYXRpbmcoKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhckZsb2F0aW5nKCk7XG4gICAgdGhpcy5mbG9hdGluZ0VsID0gdGhpcy5yZW5kZXIuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5mbG9hdGluZ0VsLmNsYXNzTGlzdC5hZGQoYCR7RkxPQVRJTkdDTFN9LWNvbnRhaW5lcmApO1xuICAgIHRoaXMuZmxvYXRpbmdFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZmxvYXRpbmdDbGlja0hhbmRsZS5iaW5kKHRoaXMpLCBmYWxzZSk7XG4gICAgdGhpcy5ib2R5RWwuYXBwZW5kQ2hpbGQodGhpcy5mbG9hdGluZ0VsKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuU3ViTm9kZShsaW5rTm9kZTogSFRNTExpbmtFbGVtZW50LCBpdGVtOiBOYXYpOiBIVE1MVUxpc3RFbGVtZW50IHtcbiAgICBjb25zdCBpZCA9IGBfc2lkZWJhci1uYXYtJHtpdGVtLl9pZH1gO1xuICAgIGNvbnN0IGNoaWxkTm9kZSA9IGl0ZW0uYmFkZ2UgPyBsaW5rTm9kZS5uZXh0RWxlbWVudFNpYmxpbmchLm5leHRFbGVtZW50U2libGluZyEgOiBsaW5rTm9kZS5uZXh0RWxlbWVudFNpYmxpbmchO1xuICAgIGNvbnN0IG5vZGUgPSBjaGlsZE5vZGUuY2xvbmVOb2RlKHRydWUpIGFzIEhUTUxVTGlzdEVsZW1lbnQ7XG4gICAgbm9kZS5pZCA9IGlkO1xuICAgIG5vZGUuY2xhc3NMaXN0LmFkZChGTE9BVElOR0NMUyk7XG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ21vdXNlbGVhdmUnLFxuICAgICAgKCkgPT4ge1xuICAgICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoU0hPV0NMUyk7XG4gICAgICB9LFxuICAgICAgZmFsc2VcbiAgICApO1xuICAgIHRoaXMuZmxvYXRpbmdFbC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHByaXZhdGUgaGlkZUFsbCgpOiB2b2lkIHtcbiAgICBjb25zdCBhbGxOb2RlID0gdGhpcy5mbG9hdGluZ0VsLnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke0ZMT0FUSU5HQ0xTfWApO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsTm9kZS5sZW5ndGg7IGkrKykge1xuICAgICAgYWxsTm9kZVtpXS5jbGFzc0xpc3QucmVtb3ZlKFNIT1dDTFMpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGNhbGN1bGF0ZSB0aGUgbm9kZSBwb3NpdGlvbiB2YWx1ZXMuXG4gIHByaXZhdGUgY2FsUG9zKGxpbmtOb2RlOiBIVE1MTGlua0VsZW1lbnQsIG5vZGU6IEhUTUxVTGlzdEVsZW1lbnQpOiB2b2lkIHtcbiAgICBjb25zdCByZWN0ID0gbGlua05vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgLy8gYnVnOiBodHRwczovL2RldmVsb3Blci5taWNyb3NvZnQuY29tL2VuLXVzL21pY3Jvc29mdC1lZGdlL3BsYXRmb3JtL2lzc3Vlcy8xNDcyMTAxNS9cbiAgICBjb25zdCBzY3JvbGxUb3AgPSBNYXRoLm1heCh0aGlzLmRvYy5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wLCB0aGlzLmJvZHlFbC5zY3JvbGxUb3ApO1xuICAgIGNvbnN0IGRvY0hlaWdodCA9IE1hdGgubWF4KHRoaXMuZG9jLmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsIHRoaXMuYm9keUVsLmNsaWVudEhlaWdodCk7XG4gICAgY29uc3Qgc3BhY2luZyA9IDU7XG4gICAgbGV0IG9mZnNldEhlaWdodCA9IC1zcGFjaW5nO1xuICAgIGlmIChkb2NIZWlnaHQgPCByZWN0LnRvcCArIG5vZGUuY2xpZW50SGVpZ2h0KSB7XG4gICAgICBvZmZzZXRIZWlnaHQgPSByZWN0LnRvcCArIG5vZGUuY2xpZW50SGVpZ2h0IC0gZG9jSGVpZ2h0ICsgc3BhY2luZztcbiAgICB9XG4gICAgbm9kZS5zdHlsZS50b3AgPSBgJHtyZWN0LnRvcCArIHNjcm9sbFRvcCAtIG9mZnNldEhlaWdodH1weGA7XG4gICAgaWYgKHRoaXMuZGlyID09PSAncnRsJykge1xuICAgICAgbm9kZS5zdHlsZS5yaWdodCA9IGAke3JlY3Qud2lkdGggKyBzcGFjaW5nfXB4YDtcbiAgICB9IGVsc2Uge1xuICAgICAgbm9kZS5zdHlsZS5sZWZ0ID0gYCR7cmVjdC5yaWdodCArIHNwYWNpbmd9cHhgO1xuICAgIH1cbiAgfVxuXG4gIEBab25lT3V0c2lkZSgpXG4gIHNob3dTdWJNZW51KGU6IE1vdXNlRXZlbnQsIGl0ZW06IE5hdik6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvbGxhcHNlZCAhPT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgbGlua05vZGUgPSBlLnRhcmdldCBhcyBFbGVtZW50O1xuICAgIHRoaXMuZ2VuRmxvYXRpbmcoKTtcbiAgICBjb25zdCBzdWJOb2RlID0gdGhpcy5nZW5TdWJOb2RlKGxpbmtOb2RlIGFzIEhUTUxMaW5rRWxlbWVudCwgaXRlbSk7XG4gICAgdGhpcy5oaWRlQWxsKCk7XG4gICAgc3ViTm9kZS5jbGFzc0xpc3QuYWRkKFNIT1dDTFMpO1xuICAgIHRoaXMuY2FsUG9zKGxpbmtOb2RlIGFzIEhUTUxMaW5rRWxlbWVudCwgc3ViTm9kZSk7XG4gIH1cblxuICB0byhpdGVtOiBNZW51KTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3QuZW1pdChpdGVtKTtcbiAgICBpZiAoaXRlbS5kaXNhYmxlZCkgcmV0dXJuO1xuXG4gICAgaWYgKGl0ZW0uZXh0ZXJuYWxMaW5rKSB7XG4gICAgICBpZiAoaXRlbS50YXJnZXQgPT09ICdfYmxhbmsnKSB7XG4gICAgICAgIHRoaXMud2luLm9wZW4oaXRlbS5leHRlcm5hbExpbmspO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy53aW4ubG9jYXRpb24uaHJlZiA9IGl0ZW0uZXh0ZXJuYWxMaW5rO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChpdGVtLmxpbmshKSk7XG4gIH1cblxuICB0b2dnbGVPcGVuKGl0ZW06IE5hdik6IHZvaWQge1xuICAgIHRoaXMubWVudVNydi50b2dnbGVPcGVuKGl0ZW0pO1xuICB9XG5cbiAgX2NsaWNrKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzUGFkICYmIHRoaXMuY29sbGFwc2VkKSB7XG4gICAgICB0aGlzLm9wZW5Bc2lkZShmYWxzZSk7XG4gICAgICB0aGlzLmhpZGVBbGwoKTtcbiAgICB9XG4gIH1cblxuICBjbG9zZVN1Yk1lbnUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29sbGFwc2VkKSB7XG4gICAgICB0aGlzLmhpZGVBbGwoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG9wZW5CeVVybCh1cmw6IHN0cmluZyB8IG51bGwpOiB2b2lkIHtcbiAgICBjb25zdCB7IG1lbnVTcnYsIHJlY3Vyc2l2ZVBhdGggfSA9IHRoaXM7XG4gICAgdGhpcy5tZW51U3J2Lm9wZW4obWVudVNydi5maW5kKHsgdXJsLCByZWN1cnNpdmU6IHJlY3Vyc2l2ZVBhdGggfSkpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3QgeyBkb2MsIHJvdXRlciwgZGVzdHJveSQsIG1lbnVTcnYsIHNldHRpbmdzLCBjZHIgfSA9IHRoaXM7XG4gICAgdGhpcy5ib2R5RWwgPSBkb2MucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIG1lbnVTcnYuY2hhbmdlLnBpcGUodGFrZVVudGlsKGRlc3Ryb3kkKSkuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgbWVudVNydi52aXNpdChkYXRhLCAoaTogTmF2LCBfcCwgZGVwdGgpID0+IHtcbiAgICAgICAgaS5fdGV4dCA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKGkudGV4dCEpO1xuICAgICAgICBpLl9uZWVkSWNvbiA9IGRlcHRoISA8PSB0aGlzLm1heExldmVsSWNvbiAmJiAhIWkuaWNvbjtcbiAgICAgICAgaWYgKCFpLl9hY2xSZXN1bHQpIHtcbiAgICAgICAgICBpZiAodGhpcy5kaXNhYmxlZEFjbCkge1xuICAgICAgICAgICAgaS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGkuX2hpZGRlbiA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGljb24gPSBpLmljb24gYXMgTWVudUljb247XG4gICAgICAgIGlmIChpY29uICYmIGljb24udHlwZSA9PT0gJ3N2ZycgJiYgdHlwZW9mIGljb24udmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgaWNvbi52YWx1ZSA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKGljb24udmFsdWUhISk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5maXhIaWRlKGRhdGEpO1xuICAgICAgdGhpcy5saXN0ID0gZGF0YS5maWx0ZXIoKHc6IE5hdikgPT4gdy5faGlkZGVuICE9PSB0cnVlKTtcbiAgICAgIGNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gICAgcm91dGVyLmV2ZW50cy5waXBlKHRha2VVbnRpbChkZXN0cm95JCkpLnN1YnNjcmliZShlID0+IHtcbiAgICAgIGlmIChlIGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCkge1xuICAgICAgICB0aGlzLm9wZW5CeVVybChlLnVybEFmdGVyUmVkaXJlY3RzKTtcbiAgICAgICAgdGhpcy51bmRlclBhZCgpO1xuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgc2V0dGluZ3Mubm90aWZ5XG4gICAgICAucGlwZShcbiAgICAgICAgdGFrZVVudGlsKGRlc3Ryb3kkKSxcbiAgICAgICAgZmlsdGVyKHQgPT4gdC50eXBlID09PSAnbGF5b3V0JyAmJiB0Lm5hbWUgPT09ICdjb2xsYXBzZWQnKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNsZWFyRmxvYXRpbmcoKSk7XG4gICAgdGhpcy51bmRlclBhZCgpO1xuXG4gICAgdGhpcy5kaXIgPSB0aGlzLmRpcmVjdGlvbmFsaXR5LnZhbHVlO1xuICAgIHRoaXMuZGlyZWN0aW9uYWxpdHkuY2hhbmdlPy5waXBlKHRha2VVbnRpbChkZXN0cm95JCkpLnN1YnNjcmliZSgoZGlyZWN0aW9uOiBEaXJlY3Rpb24pID0+IHtcbiAgICAgIHRoaXMuZGlyID0gZGlyZWN0aW9uO1xuICAgIH0pO1xuICAgIHRoaXMub3BlbkJ5VXJsKHJvdXRlci51cmwpO1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuZ2VuRmxvYXRpbmcoKSk7XG4gIH1cblxuICBwcml2YXRlIGZpeEhpZGUobHM6IE5hdltdKTogdm9pZCB7XG4gICAgY29uc3QgaW5GbiA9IChsaXN0OiBOYXZbXSk6IHZvaWQgPT4ge1xuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGxpc3QpIHtcbiAgICAgICAgaWYgKGl0ZW0uY2hpbGRyZW4gJiYgaXRlbS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaW5GbihpdGVtLmNoaWxkcmVuKTtcbiAgICAgICAgICBpZiAoIWl0ZW0uX2hpZGRlbikge1xuICAgICAgICAgICAgaXRlbS5faGlkZGVuID0gaXRlbS5jaGlsZHJlbi5ldmVyeSgodjogTmF2KSA9PiB2Ll9oaWRkZW4pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBpbkZuKGxzKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgICB0aGlzLmNsZWFyRmxvYXRpbmcoKTtcbiAgfVxuXG4gIC8vICNyZWdpb24gVW5kZXIgcGFkXG5cbiAgcHJpdmF0ZSBnZXQgaXNQYWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZG9jLmRlZmF1bHRWaWV3IS5pbm5lcldpZHRoIDwgNzY4O1xuICB9XG5cbiAgcHJpdmF0ZSB1bmRlclBhZCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hdXRvQ2xvc2VVbmRlclBhZCAmJiB0aGlzLmlzUGFkICYmICF0aGlzLmNvbGxhcHNlZCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLm9wZW5Bc2lkZSh0cnVlKSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBvcGVuQXNpZGUoc3RhdHVzOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5zZXR0aW5ncy5zZXRMYXlvdXQoJ2NvbGxhcHNlZCcsIHN0YXR1cyk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG59XG4iLCI8bmctdGVtcGxhdGUgI2ljb24gbGV0LWk+XG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJpXCIgW25nU3dpdGNoXT1cImkudHlwZVwiPlxuICAgIDxpXG4gICAgICAqbmdTd2l0Y2hDYXNlPVwiJ2ljb24nXCJcbiAgICAgIGNsYXNzPVwic2lkZWJhci1uYXZfX2l0ZW0taWNvblwiXG4gICAgICBuei1pY29uXG4gICAgICBbbnpUeXBlXT1cImkudmFsdWVcIlxuICAgICAgW256VGhlbWVdPVwiaS50aGVtZVwiXG4gICAgICBbbnpTcGluXT1cImkuc3BpblwiXG4gICAgICBbbnpUd290b25lQ29sb3JdPVwiaS50d29Ub25lQ29sb3JcIlxuICAgICAgW256SWNvbmZvbnRdPVwiaS5pY29uZm9udFwiXG4gICAgICBbbnpSb3RhdGVdPVwiaS5yb3RhdGVcIlxuICAgID48L2k+XG4gICAgPGkgKm5nU3dpdGNoQ2FzZT1cIidpY29uZm9udCdcIiBjbGFzcz1cInNpZGViYXItbmF2X19pdGVtLWljb25cIiBuei1pY29uIFtuekljb25mb250XT1cImkuaWNvbmZvbnRcIj48L2k+XG4gICAgPGltZyAqbmdTd2l0Y2hDYXNlPVwiJ2ltZydcIiBbc3JjXT1cImkudmFsdWVcIiBjbGFzcz1cInNpZGViYXItbmF2X19pdGVtLWljb24gc2lkZWJhci1uYXZfX2l0ZW0taW1nXCIgLz5cbiAgICA8c3BhbiAqbmdTd2l0Y2hDYXNlPVwiJ3N2ZydcIiBjbGFzcz1cInNpZGViYXItbmF2X19pdGVtLWljb24gc2lkZWJhci1uYXZfX2l0ZW0tc3ZnXCIgW2lubmVySFRNTF09XCJpLnZhbHVlXCI+PC9zcGFuPlxuICAgIDxpICpuZ1N3aXRjaERlZmF1bHQgY2xhc3M9XCJzaWRlYmFyLW5hdl9faXRlbS1pY29uIHt7IGkudmFsdWUgfX1cIj48L2k+XG4gIDwvbmctY29udGFpbmVyPlxuPC9uZy10ZW1wbGF0ZT5cbjxuZy10ZW1wbGF0ZSAjdHJlZSBsZXQtbHM+XG4gIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGkgb2YgbHNcIj5cbiAgICA8bGlcbiAgICAgICpuZ0lmPVwiaS5faGlkZGVuICE9PSB0cnVlXCJcbiAgICAgIGNsYXNzPVwic2lkZWJhci1uYXZfX2l0ZW1cIlxuICAgICAgW2NsYXNzLnNpZGViYXItbmF2X19zZWxlY3RlZF09XCJpLl9zZWxlY3RlZFwiXG4gICAgICBbY2xhc3Muc2lkZWJhci1uYXZfX29wZW5dPVwiaS5vcGVuXCJcbiAgICA+XG4gICAgICA8IS0tIGxpbmsgLS0+XG4gICAgICA8YVxuICAgICAgICAqbmdJZj1cImkuY2hpbGRyZW4ubGVuZ3RoID09PSAwXCJcbiAgICAgICAgKGNsaWNrKT1cInRvKGkpXCJcbiAgICAgICAgW2F0dHIuZGF0YS1pZF09XCJpLl9pZFwiXG4gICAgICAgIGNsYXNzPVwic2lkZWJhci1uYXZfX2l0ZW0tbGlua1wiXG4gICAgICAgIFtuZ0NsYXNzXT1cInsgJ3NpZGViYXItbmF2X19pdGVtLWRpc2FibGVkJzogaS5kaXNhYmxlZCB9XCJcbiAgICAgICAgKG1vdXNlZW50ZXIpPVwiY2xvc2VTdWJNZW51KClcIlxuICAgICAgPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaS5fbmVlZEljb25cIj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWNvbGxhcHNlZFwiPlxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImljb25cIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IGkuaWNvbiB9XCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8c3BhbiAqbmdJZj1cImNvbGxhcHNlZFwiIG56LXRvb2x0aXAgbnpUb29sdGlwUGxhY2VtZW50PVwicmlnaHRcIiBbbnpUb29sdGlwVGl0bGVdPVwiaS50ZXh0XCI+XG4gICAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiaWNvblwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogaS5pY29uIH1cIj48L25nLXRlbXBsYXRlPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwic2lkZWJhci1uYXZfX2l0ZW0tdGV4dFwiIFtpbm5lckhUTUxdPVwiaS5fdGV4dFwiIFthdHRyLnRpdGxlXT1cImkudGV4dFwiPjwvc3Bhbj5cbiAgICAgIDwvYT5cbiAgICAgIDwhLS0gaGFzIGNoaWxkcmVuIGxpbmsgLS0+XG4gICAgICA8YVxuICAgICAgICAqbmdJZj1cImkuY2hpbGRyZW4ubGVuZ3RoID4gMFwiXG4gICAgICAgIChjbGljayk9XCJ0b2dnbGVPcGVuKGkpXCJcbiAgICAgICAgKG1vdXNlZW50ZXIpPVwic2hvd1N1Yk1lbnUoJGV2ZW50LCBpKVwiXG4gICAgICAgIGNsYXNzPVwic2lkZWJhci1uYXZfX2l0ZW0tbGlua1wiXG4gICAgICA+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJpY29uXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBpLmljb24gfVwiPjwvbmctdGVtcGxhdGU+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwic2lkZWJhci1uYXZfX2l0ZW0tdGV4dFwiIFtpbm5lckhUTUxdPVwiaS5fdGV4dFwiIFthdHRyLnRpdGxlXT1cImkudGV4dFwiPjwvc3Bhbj5cbiAgICAgICAgPGkgY2xhc3M9XCJzaWRlYmFyLW5hdl9fc3ViLWFycm93XCI+PC9pPlxuICAgICAgPC9hPlxuICAgICAgPCEtLSBiYWRnZSAtLT5cbiAgICAgIDxuei1iYWRnZSAqbmdJZj1cImkuYmFkZ2VcIiBbbnpDb3VudF09XCJpLmJhZGdlXCIgW256RG90XT1cImkuYmFkZ2VEb3RcIiBuelN0YW5kYWxvbmUgW256T3ZlcmZsb3dDb3VudF09XCI5XCI+PC9uei1iYWRnZT5cbiAgICAgIDx1bCAqbmdJZj1cImkuY2hpbGRyZW4ubGVuZ3RoID4gMFwiIGNsYXNzPVwic2lkZWJhci1uYXYgc2lkZWJhci1uYXZfX3N1YiBzaWRlYmFyLW5hdl9fZGVwdGh7eyBpLl9kZXB0aCB9fVwiPlxuICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwidHJlZVwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogaS5jaGlsZHJlbiB9XCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgIDwvdWw+XG4gICAgPC9saT5cbiAgPC9uZy1jb250YWluZXI+XG48L25nLXRlbXBsYXRlPlxuPHVsIGNsYXNzPVwic2lkZWJhci1uYXZcIj5cbiAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgZ3JvdXAgb2YgbGlzdFwiPlxuICAgIDxsaSBjbGFzcz1cInNpZGViYXItbmF2X19pdGVtIHNpZGViYXItbmF2X19ncm91cC10aXRsZVwiICpuZ0lmPVwiZ3JvdXAuZ3JvdXBcIj5cbiAgICAgIDxzcGFuIFtpbm5lckhUTUxdPVwiZ3JvdXAuX3RleHRcIj48L3NwYW4+XG4gICAgPC9saT5cbiAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwidHJlZVwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogZ3JvdXAuY2hpbGRyZW4gfVwiPjwvbmctdGVtcGxhdGU+XG4gIDwvbmctY29udGFpbmVyPlxuPC91bD5cbiJdfQ==