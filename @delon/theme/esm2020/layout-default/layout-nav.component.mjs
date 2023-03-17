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
export class LayoutDefaultNavComponent {
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
}
LayoutDefaultNavComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: LayoutDefaultNavComponent, deps: [{ token: i1.MenuService }, { token: i1.SettingsService }, { token: i2.Router }, { token: i0.Renderer2 }, { token: i0.ChangeDetectorRef }, { token: i0.NgZone }, { token: i3.DomSanitizer }, { token: DOCUMENT }, { token: WINDOW }, { token: i4.Directionality, optional: true }], target: i0.ɵɵFactoryTarget.Component });
LayoutDefaultNavComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.3", type: LayoutDefaultNavComponent, selector: "layout-default-nav", inputs: { disabledAcl: "disabledAcl", autoCloseUnderPad: "autoCloseUnderPad", recursivePath: "recursivePath", openStrictly: "openStrictly", maxLevelIcon: "maxLevelIcon" }, outputs: { select: "select" }, host: { listeners: { "click": "_click()", "document:click": "closeSubMenu()" }, properties: { "class.d-block": "true" } }, ngImport: i0, template: "<ng-template #icon let-i>\n  <ng-container *ngIf=\"i\" [ngSwitch]=\"i.type\">\n    <i\n      *ngSwitchCase=\"'icon'\"\n      class=\"sidebar-nav__item-icon\"\n      nz-icon\n      [nzType]=\"i.value\"\n      [nzTheme]=\"i.theme\"\n      [nzSpin]=\"i.spin\"\n      [nzTwotoneColor]=\"i.twoToneColor\"\n      [nzIconfont]=\"i.iconfont\"\n      [nzRotate]=\"i.rotate\"\n    ></i>\n    <i *ngSwitchCase=\"'iconfont'\" class=\"sidebar-nav__item-icon\" nz-icon [nzIconfont]=\"i.iconfont\"></i>\n    <img *ngSwitchCase=\"'img'\" [src]=\"i.value\" class=\"sidebar-nav__item-icon sidebar-nav__item-img\" />\n    <span *ngSwitchCase=\"'svg'\" class=\"sidebar-nav__item-icon sidebar-nav__item-svg\" [innerHTML]=\"i.value\"></span>\n    <i *ngSwitchDefault class=\"sidebar-nav__item-icon {{ i.value }}\"></i>\n  </ng-container>\n</ng-template>\n<ng-template #tree let-ls>\n  <ng-container *ngFor=\"let i of ls\">\n    <li\n      *ngIf=\"i._hidden !== true\"\n      class=\"sidebar-nav__item\"\n      [class.sidebar-nav__selected]=\"i._selected\"\n      [class.sidebar-nav__open]=\"i.open\"\n    >\n      <!-- link -->\n      <a\n        *ngIf=\"i.children.length === 0\"\n        (click)=\"to(i)\"\n        [attr.data-id]=\"i._id\"\n        class=\"sidebar-nav__item-link\"\n        [ngClass]=\"{ 'sidebar-nav__item-disabled': i.disabled }\"\n        (mouseenter)=\"closeSubMenu()\"\n      >\n        <ng-container *ngIf=\"i._needIcon\">\n          <ng-container *ngIf=\"!collapsed\">\n            <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{ $implicit: i.icon }\"></ng-template>\n          </ng-container>\n          <span *ngIf=\"collapsed\" nz-tooltip nzTooltipPlacement=\"right\" [nzTooltipTitle]=\"i.text\">\n            <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{ $implicit: i.icon }\"></ng-template>\n          </span>\n        </ng-container>\n        <span class=\"sidebar-nav__item-text\" [innerHTML]=\"i._text\" [attr.title]=\"i.text\"></span>\n      </a>\n      <!-- has children link -->\n      <a\n        *ngIf=\"i.children.length > 0\"\n        (click)=\"toggleOpen(i)\"\n        (mouseenter)=\"showSubMenu($event, i)\"\n        class=\"sidebar-nav__item-link\"\n      >\n        <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{ $implicit: i.icon }\"></ng-template>\n        <span class=\"sidebar-nav__item-text\" [innerHTML]=\"i._text\" [attr.title]=\"i.text\"></span>\n        <i class=\"sidebar-nav__sub-arrow\"></i>\n      </a>\n      <!-- badge -->\n      <nz-badge *ngIf=\"i.badge\" [nzCount]=\"i.badge\" [nzDot]=\"i.badgeDot\" nzStandalone [nzOverflowCount]=\"9\"></nz-badge>\n      <ul *ngIf=\"i.children.length > 0\" class=\"sidebar-nav sidebar-nav__sub sidebar-nav__depth{{ i._depth }}\">\n        <ng-template [ngTemplateOutlet]=\"tree\" [ngTemplateOutletContext]=\"{ $implicit: i.children }\"></ng-template>\n      </ul>\n    </li>\n  </ng-container>\n</ng-template>\n<ul class=\"sidebar-nav\">\n  <ng-container *ngFor=\"let group of list\">\n    <li class=\"sidebar-nav__item sidebar-nav__group-title\" *ngIf=\"group.group\">\n      <span [innerHTML]=\"group._text\"></span>\n    </li>\n    <ng-template [ngTemplateOutlet]=\"tree\" [ngTemplateOutletContext]=\"{ $implicit: group.children }\"></ng-template>\n  </ng-container>\n</ul>\n", dependencies: [{ kind: "directive", type: i5.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i5.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i5.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i5.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: i5.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { kind: "directive", type: i5.NgSwitchDefault, selector: "[ngSwitchDefault]" }, { kind: "directive", type: i6.NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }, { kind: "directive", type: i7.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "component", type: i8.NzBadgeComponent, selector: "nz-badge", inputs: ["nzShowZero", "nzShowDot", "nzStandalone", "nzDot", "nzOverflowCount", "nzColor", "nzStyle", "nzText", "nzTitle", "nzStatus", "nzCount", "nzOffset", "nzSize"], exportAs: ["nzBadge"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: LayoutDefaultNavComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LW5hdi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90aGVtZS9sYXlvdXQtZGVmYXVsdC9sYXlvdXQtbmF2LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lL2xheW91dC1kZWZhdWx0L2xheW91dC1uYXYuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsdUJBQXVCLEVBRXZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFJTCxRQUFRLEVBQ1IsTUFBTSxFQUVOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsYUFBYSxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFDeEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBR2xELE9BQU8sRUFBZ0IsWUFBWSxFQUFFLFdBQVcsRUFBZSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7Ozs7Ozs7QUFRM0MsTUFBTSxPQUFPLEdBQUcsNEJBQTRCLENBQUM7QUFDN0MsTUFBTSxXQUFXLEdBQUcsdUJBQXVCLENBQUM7QUFjNUMsTUFBTSxPQUFPLHlCQUF5QjtJQWtCcEMsSUFBSSxZQUFZLENBQUMsS0FBYztRQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDcEMsQ0FBQztJQUlELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO0lBQ3hDLENBQUM7SUFFRCxZQUNVLE9BQW9CLEVBQ3BCLFFBQXlCLEVB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QVMsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7c0hBeFFVLHlCQUF5Qiw4TUFvQzFCLFFBQVEsYUFDUixNQUFNOzBHQXJDTCx5QkFBeUIsZ1lDOUN0Qyxnd0dBeUVBO0FEZDJCO0lBQWYsWUFBWSxFQUFFOzhEQUFxQjtBQUNwQjtJQUFmLFlBQVksRUFBRTtvRUFBMEI7QUFDekI7SUFBZixZQUFZLEVBQUU7Z0VBQXNCO0FBRzlDO0lBREMsWUFBWSxFQUFFOzZEQUdkO0FBQ3VCO0lBQWQsV0FBVyxFQUFFOytEQUFrQjtBQWdIekM7SUFEQyxXQUFXLEVBQUU7NERBWWI7MkZBaEpVLHlCQUF5QjtrQkFackMsU0FBUzsrQkFDRSxvQkFBb0IsUUFFeEI7d0JBQ0osU0FBUyxFQUFFLFVBQVU7d0JBQ3JCLGtCQUFrQixFQUFFLGdCQUFnQjt3QkFDcEMsaUJBQWlCLEVBQUUsTUFBTTtxQkFDMUIsdUJBQ29CLEtBQUssbUJBQ1QsdUJBQXVCLENBQUMsTUFBTSxpQkFDaEMsaUJBQWlCLENBQUMsSUFBSTs7MEJBc0NsQyxNQUFNOzJCQUFDLFFBQVE7OzBCQUNmLE1BQU07MkJBQUMsTUFBTTs7MEJBQ2IsUUFBUTs0Q0F6QmMsV0FBVztzQkFBbkMsS0FBSztnQkFDbUIsaUJBQWlCO3NCQUF6QyxLQUFLO2dCQUNtQixhQUFhO3NCQUFyQyxLQUFLO2dCQUdGLFlBQVk7c0JBRmYsS0FBSztnQkFLa0IsWUFBWTtzQkFBbkMsS0FBSztnQkFDYSxNQUFNO3NCQUF4QixNQUFNO2dCQStHUCxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uRW5kLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU3ViamVjdCwgZmlsdGVyLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTWVudSwgTWVudUljb24sIE1lbnVJbm5lciwgTWVudVNlcnZpY2UsIFNldHRpbmdzU2VydmljZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIsIE51bWJlcklucHV0LCBab25lT3V0c2lkZSB9IGZyb20gJ0BkZWxvbi91dGlsL2RlY29yYXRvcic7XG5pbXBvcnQgeyBXSU5ET1cgfSBmcm9tICdAZGVsb24vdXRpbC90b2tlbic7XG5pbXBvcnQgdHlwZSB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmF2IGV4dGVuZHMgTWVudUlubmVyIHtcbiAgX25lZWRJY29uPzogYm9vbGVhbjtcbiAgX3RleHQ/OiBTYWZlSHRtbDtcbn1cblxuY29uc3QgU0hPV0NMUyA9ICdzaWRlYmFyLW5hdl9fZmxvYXRpbmctc2hvdyc7XG5jb25zdCBGTE9BVElOR0NMUyA9ICdzaWRlYmFyLW5hdl9fZmxvYXRpbmcnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsYXlvdXQtZGVmYXVsdC1uYXYnLFxuICB0ZW1wbGF0ZVVybDogJy4vbGF5b3V0LW5hdi5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICAnKGNsaWNrKSc6ICdfY2xpY2soKScsXG4gICAgJyhkb2N1bWVudDpjbGljayknOiAnY2xvc2VTdWJNZW51KCknLFxuICAgICdbY2xhc3MuZC1ibG9ja10nOiBgdHJ1ZWBcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIExheW91dERlZmF1bHROYXZDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9kaXNhYmxlZEFjbDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfYXV0b0Nsb3NlVW5kZXJQYWQ6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3JlY3Vyc2l2ZVBhdGg6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX29wZW5TdHJpY3RseTogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbWF4TGV2ZWxJY29uOiBOdW1iZXJJbnB1dDtcblxuICBwcml2YXRlIGJvZHlFbCE6IEhUTUxCb2R5RWxlbWVudDtcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHByaXZhdGUgZmxvYXRpbmdFbCE6IEhUTUxEaXZFbGVtZW50O1xuICBkaXI6IERpcmVjdGlvbiA9ICdsdHInO1xuICBsaXN0OiBOYXZbXSA9IFtdO1xuXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkaXNhYmxlZEFjbCA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYXV0b0Nsb3NlVW5kZXJQYWQgPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgcmVjdXJzaXZlUGF0aCA9IHRydWU7XG4gIEBJbnB1dCgpXG4gIEBJbnB1dEJvb2xlYW4oKVxuICBzZXQgb3BlblN0cmljdGx5KHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5tZW51U3J2Lm9wZW5TdHJpY3RseSA9IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIG1heExldmVsSWNvbiA9IDM7XG4gIEBPdXRwdXQoKSByZWFkb25seSBzZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPE1lbnU+KCk7XG5cbiAgZ2V0IGNvbGxhcHNlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zZXR0aW5ncy5sYXlvdXQuY29sbGFwc2VkO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBtZW51U3J2OiBNZW51U2VydmljZSxcbiAgICBwcml2YXRlIHNldHRpbmdzOiBTZXR0aW5nc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIHJlbmRlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxuICAgIHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IE56U2FmZUFueSxcbiAgICBASW5qZWN0KFdJTkRPVykgcHJpdmF0ZSB3aW46IE56U2FmZUFueSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGRpcmVjdGlvbmFsaXR5OiBEaXJlY3Rpb25hbGl0eVxuICApIHt9XG5cbiAgcHJpdmF0ZSBnZXRMaW5rTm9kZShub2RlOiBIVE1MRWxlbWVudCk6IEhUTUxFbGVtZW50IHwgbnVsbCB7XG4gICAgbm9kZSA9IG5vZGUubm9kZU5hbWUgPT09ICdBJyA/IG5vZGUgOiAobm9kZS5wYXJlbnROb2RlIGFzIEhUTUxFbGVtZW50KTtcbiAgICByZXR1cm4gbm9kZS5ub2RlTmFtZSAhPT0gJ0EnID8gbnVsbCA6IG5vZGU7XG4gIH1cblxuICBwcml2YXRlIGZsb2F0aW5nQ2xpY2tIYW5kbGUoZTogTW91c2VFdmVudCk6IGJvb2xlYW4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY29uc3QgbGlua05vZGUgPSB0aGlzLmdldExpbmtOb2RlKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KTtcbiAgICBpZiAobGlua05vZGUgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBpZCA9ICtsaW5rTm9kZS5kYXRhc2V0IS5pZCE7XG4gICAgLy8gU2hvdWxkIGJlIGluZ29yZSBjaGlsZHJlbiB0aXRsZSB0cmlnZ2VyIGV2ZW50XG4gICAgaWYgKGlzTmFOKGlkKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGxldCBpdGVtOiBOYXY7XG4gICAgdGhpcy5tZW51U3J2LnZpc2l0KHRoaXMubGlzdCwgKGk6IE5hdikgPT4ge1xuICAgICAgaWYgKCFpdGVtICYmIGkuX2lkID09PSBpZCkge1xuICAgICAgICBpdGVtID0gaTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnRvKGl0ZW0hKTtcbiAgICB0aGlzLmhpZGVBbGwoKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBjbGVhckZsb2F0aW5nKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5mbG9hdGluZ0VsKSByZXR1cm47XG4gICAgdGhpcy5mbG9hdGluZ0VsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5mbG9hdGluZ0NsaWNrSGFuZGxlLmJpbmQodGhpcykpO1xuICAgIC8vIGZpeCBpZTogaHR0cHM6Ly9naXRodWIuY29tL25nLWFsYWluL2RlbG9uL2lzc3Vlcy81MlxuICAgIGlmICh0aGlzLmZsb2F0aW5nRWwuaGFzT3duUHJvcGVydHkoJ3JlbW92ZScpKSB7XG4gICAgICB0aGlzLmZsb2F0aW5nRWwucmVtb3ZlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmZsb2F0aW5nRWwucGFyZW50Tm9kZSkge1xuICAgICAgdGhpcy5mbG9hdGluZ0VsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5mbG9hdGluZ0VsKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdlbkZsb2F0aW5nKCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYXJGbG9hdGluZygpO1xuICAgIHRoaXMuZmxvYXRpbmdFbCA9IHRoaXMucmVuZGVyLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuZmxvYXRpbmdFbC5jbGFzc0xpc3QuYWRkKGAke0ZMT0FUSU5HQ0xTfS1jb250YWluZXJgKTtcbiAgICB0aGlzLmZsb2F0aW5nRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmZsb2F0aW5nQ2xpY2tIYW5kbGUuYmluZCh0aGlzKSwgZmFsc2UpO1xuICAgIHRoaXMuYm9keUVsLmFwcGVuZENoaWxkKHRoaXMuZmxvYXRpbmdFbCk7XG4gIH1cblxuICBwcml2YXRlIGdlblN1Yk5vZGUobGlua05vZGU6IEhUTUxMaW5rRWxlbWVudCwgaXRlbTogTmF2KTogSFRNTFVMaXN0RWxlbWVudCB7XG4gICAgY29uc3QgaWQgPSBgX3NpZGViYXItbmF2LSR7aXRlbS5faWR9YDtcbiAgICBjb25zdCBjaGlsZE5vZGUgPSBpdGVtLmJhZGdlID8gbGlua05vZGUubmV4dEVsZW1lbnRTaWJsaW5nIS5uZXh0RWxlbWVudFNpYmxpbmchIDogbGlua05vZGUubmV4dEVsZW1lbnRTaWJsaW5nITtcbiAgICBjb25zdCBub2RlID0gY2hpbGROb2RlLmNsb25lTm9kZSh0cnVlKSBhcyBIVE1MVUxpc3RFbGVtZW50O1xuICAgIG5vZGUuaWQgPSBpZDtcbiAgICBub2RlLmNsYXNzTGlzdC5hZGQoRkxPQVRJTkdDTFMpO1xuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdtb3VzZWxlYXZlJyxcbiAgICAgICgpID0+IHtcbiAgICAgICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKFNIT1dDTFMpO1xuICAgICAgfSxcbiAgICAgIGZhbHNlXG4gICAgKTtcbiAgICB0aGlzLmZsb2F0aW5nRWwuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBwcml2YXRlIGhpZGVBbGwoKTogdm9pZCB7XG4gICAgY29uc3QgYWxsTm9kZSA9IHRoaXMuZmxvYXRpbmdFbC5xdWVyeVNlbGVjdG9yQWxsKGAuJHtGTE9BVElOR0NMU31gKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbE5vZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFsbE5vZGVbaV0uY2xhc3NMaXN0LnJlbW92ZShTSE9XQ0xTKTtcbiAgICB9XG4gIH1cblxuICAvLyBjYWxjdWxhdGUgdGhlIG5vZGUgcG9zaXRpb24gdmFsdWVzLlxuICBwcml2YXRlIGNhbFBvcyhsaW5rTm9kZTogSFRNTExpbmtFbGVtZW50LCBub2RlOiBIVE1MVUxpc3RFbGVtZW50KTogdm9pZCB7XG4gICAgY29uc3QgcmVjdCA9IGxpbmtOb2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIC8vIGJ1ZzogaHR0cHM6Ly9kZXZlbG9wZXIubWljcm9zb2Z0LmNvbS9lbi11cy9taWNyb3NvZnQtZWRnZS9wbGF0Zm9ybS9pc3N1ZXMvMTQ3MjEwMTUvXG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gTWF0aC5tYXgodGhpcy5kb2MuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCwgdGhpcy5ib2R5RWwuc2Nyb2xsVG9wKTtcbiAgICBjb25zdCBkb2NIZWlnaHQgPSBNYXRoLm1heCh0aGlzLmRvYy5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LCB0aGlzLmJvZHlFbC5jbGllbnRIZWlnaHQpO1xuICAgIGNvbnN0IHNwYWNpbmcgPSA1O1xuICAgIGxldCBvZmZzZXRIZWlnaHQgPSAtc3BhY2luZztcbiAgICBpZiAoZG9jSGVpZ2h0IDwgcmVjdC50b3AgKyBub2RlLmNsaWVudEhlaWdodCkge1xuICAgICAgb2Zmc2V0SGVpZ2h0ID0gcmVjdC50b3AgKyBub2RlLmNsaWVudEhlaWdodCAtIGRvY0hlaWdodCArIHNwYWNpbmc7XG4gICAgfVxuICAgIG5vZGUuc3R5bGUudG9wID0gYCR7cmVjdC50b3AgKyBzY3JvbGxUb3AgLSBvZmZzZXRIZWlnaHR9cHhgO1xuICAgIGlmICh0aGlzLmRpciA9PT0gJ3J0bCcpIHtcbiAgICAgIG5vZGUuc3R5bGUucmlnaHQgPSBgJHtyZWN0LndpZHRoICsgc3BhY2luZ31weGA7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5vZGUuc3R5bGUubGVmdCA9IGAke3JlY3QucmlnaHQgKyBzcGFjaW5nfXB4YDtcbiAgICB9XG4gIH1cblxuICBAWm9uZU91dHNpZGUoKVxuICBzaG93U3ViTWVudShlOiBNb3VzZUV2ZW50LCBpdGVtOiBOYXYpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jb2xsYXBzZWQgIT09IHRydWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGxpbmtOb2RlID0gZS50YXJnZXQgYXMgRWxlbWVudDtcbiAgICB0aGlzLmdlbkZsb2F0aW5nKCk7XG4gICAgY29uc3Qgc3ViTm9kZSA9IHRoaXMuZ2VuU3ViTm9kZShsaW5rTm9kZSBhcyBIVE1MTGlua0VsZW1lbnQsIGl0ZW0pO1xuICAgIHRoaXMuaGlkZUFsbCgpO1xuICAgIHN1Yk5vZGUuY2xhc3NMaXN0LmFkZChTSE9XQ0xTKTtcbiAgICB0aGlzLmNhbFBvcyhsaW5rTm9kZSBhcyBIVE1MTGlua0VsZW1lbnQsIHN1Yk5vZGUpO1xuICB9XG5cbiAgdG8oaXRlbTogTWVudSk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0LmVtaXQoaXRlbSk7XG4gICAgaWYgKGl0ZW0uZGlzYWJsZWQpIHJldHVybjtcblxuICAgIGlmIChpdGVtLmV4dGVybmFsTGluaykge1xuICAgICAgaWYgKGl0ZW0udGFyZ2V0ID09PSAnX2JsYW5rJykge1xuICAgICAgICB0aGlzLndpbi5vcGVuKGl0ZW0uZXh0ZXJuYWxMaW5rKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMud2luLmxvY2F0aW9uLmhyZWYgPSBpdGVtLmV4dGVybmFsTGluaztcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoaXRlbS5saW5rISkpO1xuICB9XG5cbiAgdG9nZ2xlT3BlbihpdGVtOiBOYXYpOiB2b2lkIHtcbiAgICB0aGlzLm1lbnVTcnYudG9nZ2xlT3BlbihpdGVtKTtcbiAgfVxuXG4gIF9jbGljaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc1BhZCAmJiB0aGlzLmNvbGxhcHNlZCkge1xuICAgICAgdGhpcy5vcGVuQXNpZGUoZmFsc2UpO1xuICAgICAgdGhpcy5oaWRlQWxsKCk7XG4gICAgfVxuICB9XG5cbiAgY2xvc2VTdWJNZW51KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvbGxhcHNlZCkge1xuICAgICAgdGhpcy5oaWRlQWxsKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBvcGVuQnlVcmwodXJsOiBzdHJpbmcgfCBudWxsKTogdm9pZCB7XG4gICAgY29uc3QgeyBtZW51U3J2LCByZWN1cnNpdmVQYXRoIH0gPSB0aGlzO1xuICAgIHRoaXMubWVudVNydi5vcGVuKG1lbnVTcnYuZmluZCh7IHVybCwgcmVjdXJzaXZlOiByZWN1cnNpdmVQYXRoIH0pKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgZG9jLCByb3V0ZXIsIGRlc3Ryb3kkLCBtZW51U3J2LCBzZXR0aW5ncywgY2RyIH0gPSB0aGlzO1xuICAgIHRoaXMuYm9keUVsID0gZG9jLnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBtZW51U3J2LmNoYW5nZS5waXBlKHRha2VVbnRpbChkZXN0cm95JCkpLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgIG1lbnVTcnYudmlzaXQoZGF0YSwgKGk6IE5hdiwgX3AsIGRlcHRoKSA9PiB7XG4gICAgICAgIGkuX3RleHQgPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChpLnRleHQhKTtcbiAgICAgICAgaS5fbmVlZEljb24gPSBkZXB0aCEgPD0gdGhpcy5tYXhMZXZlbEljb24gJiYgISFpLmljb247XG4gICAgICAgIGlmICghaS5fYWNsUmVzdWx0KSB7XG4gICAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWRBY2wpIHtcbiAgICAgICAgICAgIGkuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpLl9oaWRkZW4gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpY29uID0gaS5pY29uIGFzIE1lbnVJY29uO1xuICAgICAgICBpZiAoaWNvbiAmJiBpY29uLnR5cGUgPT09ICdzdmcnICYmIHR5cGVvZiBpY29uLnZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGljb24udmFsdWUgPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChpY29uLnZhbHVlISEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuZml4SGlkZShkYXRhKTtcbiAgICAgIHRoaXMubGlzdCA9IGRhdGEuZmlsdGVyKCh3OiBOYXYpID0+IHcuX2hpZGRlbiAhPT0gdHJ1ZSk7XG4gICAgICBjZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuICAgIHJvdXRlci5ldmVudHMucGlwZSh0YWtlVW50aWwoZGVzdHJveSQpKS5zdWJzY3JpYmUoZSA9PiB7XG4gICAgICBpZiAoZSBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpIHtcbiAgICAgICAgdGhpcy5vcGVuQnlVcmwoZS51cmxBZnRlclJlZGlyZWN0cyk7XG4gICAgICAgIHRoaXMudW5kZXJQYWQoKTtcbiAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHNldHRpbmdzLm5vdGlmeVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRha2VVbnRpbChkZXN0cm95JCksXG4gICAgICAgIGZpbHRlcih0ID0+IHQudHlwZSA9PT0gJ2xheW91dCcgJiYgdC5uYW1lID09PSAnY29sbGFwc2VkJylcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jbGVhckZsb2F0aW5nKCkpO1xuICAgIHRoaXMudW5kZXJQYWQoKTtcblxuICAgIHRoaXMuZGlyID0gdGhpcy5kaXJlY3Rpb25hbGl0eS52YWx1ZTtcbiAgICB0aGlzLmRpcmVjdGlvbmFsaXR5LmNoYW5nZT8ucGlwZSh0YWtlVW50aWwoZGVzdHJveSQpKS5zdWJzY3JpYmUoKGRpcmVjdGlvbjogRGlyZWN0aW9uKSA9PiB7XG4gICAgICB0aGlzLmRpciA9IGRpcmVjdGlvbjtcbiAgICB9KTtcbiAgICB0aGlzLm9wZW5CeVVybChyb3V0ZXIudXJsKTtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLmdlbkZsb2F0aW5nKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBmaXhIaWRlKGxzOiBOYXZbXSk6IHZvaWQge1xuICAgIGNvbnN0IGluRm4gPSAobGlzdDogTmF2W10pOiB2b2lkID0+IHtcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBsaXN0KSB7XG4gICAgICAgIGlmIChpdGVtLmNoaWxkcmVuICYmIGl0ZW0uY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGluRm4oaXRlbS5jaGlsZHJlbik7XG4gICAgICAgICAgaWYgKCFpdGVtLl9oaWRkZW4pIHtcbiAgICAgICAgICAgIGl0ZW0uX2hpZGRlbiA9IGl0ZW0uY2hpbGRyZW4uZXZlcnkoKHY6IE5hdikgPT4gdi5faGlkZGVuKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaW5Gbihscyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5jbGVhckZsb2F0aW5nKCk7XG4gIH1cblxuICAvLyAjcmVnaW9uIFVuZGVyIHBhZFxuXG4gIHByaXZhdGUgZ2V0IGlzUGFkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmRvYy5kZWZhdWx0VmlldyEuaW5uZXJXaWR0aCA8IDc2ODtcbiAgfVxuXG4gIHByaXZhdGUgdW5kZXJQYWQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYXV0b0Nsb3NlVW5kZXJQYWQgJiYgdGhpcy5pc1BhZCAmJiAhdGhpcy5jb2xsYXBzZWQpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5vcGVuQXNpZGUodHJ1ZSkpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgb3BlbkFzaWRlKHN0YXR1czogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuc2V0dGluZ3Muc2V0TGF5b3V0KCdjb2xsYXBzZWQnLCBzdGF0dXMpO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxufVxuIiwiPG5nLXRlbXBsYXRlICNpY29uIGxldC1pPlxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiaVwiIFtuZ1N3aXRjaF09XCJpLnR5cGVcIj5cbiAgICA8aVxuICAgICAgKm5nU3dpdGNoQ2FzZT1cIidpY29uJ1wiXG4gICAgICBjbGFzcz1cInNpZGViYXItbmF2X19pdGVtLWljb25cIlxuICAgICAgbnotaWNvblxuICAgICAgW256VHlwZV09XCJpLnZhbHVlXCJcbiAgICAgIFtuelRoZW1lXT1cImkudGhlbWVcIlxuICAgICAgW256U3Bpbl09XCJpLnNwaW5cIlxuICAgICAgW256VHdvdG9uZUNvbG9yXT1cImkudHdvVG9uZUNvbG9yXCJcbiAgICAgIFtuekljb25mb250XT1cImkuaWNvbmZvbnRcIlxuICAgICAgW256Um90YXRlXT1cImkucm90YXRlXCJcbiAgICA+PC9pPlxuICAgIDxpICpuZ1N3aXRjaENhc2U9XCInaWNvbmZvbnQnXCIgY2xhc3M9XCJzaWRlYmFyLW5hdl9faXRlbS1pY29uXCIgbnotaWNvbiBbbnpJY29uZm9udF09XCJpLmljb25mb250XCI+PC9pPlxuICAgIDxpbWcgKm5nU3dpdGNoQ2FzZT1cIidpbWcnXCIgW3NyY109XCJpLnZhbHVlXCIgY2xhc3M9XCJzaWRlYmFyLW5hdl9faXRlbS1pY29uIHNpZGViYXItbmF2X19pdGVtLWltZ1wiIC8+XG4gICAgPHNwYW4gKm5nU3dpdGNoQ2FzZT1cIidzdmcnXCIgY2xhc3M9XCJzaWRlYmFyLW5hdl9faXRlbS1pY29uIHNpZGViYXItbmF2X19pdGVtLXN2Z1wiIFtpbm5lckhUTUxdPVwiaS52YWx1ZVwiPjwvc3Bhbj5cbiAgICA8aSAqbmdTd2l0Y2hEZWZhdWx0IGNsYXNzPVwic2lkZWJhci1uYXZfX2l0ZW0taWNvbiB7eyBpLnZhbHVlIH19XCI+PC9pPlxuICA8L25nLWNvbnRhaW5lcj5cbjwvbmctdGVtcGxhdGU+XG48bmctdGVtcGxhdGUgI3RyZWUgbGV0LWxzPlxuICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpIG9mIGxzXCI+XG4gICAgPGxpXG4gICAgICAqbmdJZj1cImkuX2hpZGRlbiAhPT0gdHJ1ZVwiXG4gICAgICBjbGFzcz1cInNpZGViYXItbmF2X19pdGVtXCJcbiAgICAgIFtjbGFzcy5zaWRlYmFyLW5hdl9fc2VsZWN0ZWRdPVwiaS5fc2VsZWN0ZWRcIlxuICAgICAgW2NsYXNzLnNpZGViYXItbmF2X19vcGVuXT1cImkub3BlblwiXG4gICAgPlxuICAgICAgPCEtLSBsaW5rIC0tPlxuICAgICAgPGFcbiAgICAgICAgKm5nSWY9XCJpLmNoaWxkcmVuLmxlbmd0aCA9PT0gMFwiXG4gICAgICAgIChjbGljayk9XCJ0byhpKVwiXG4gICAgICAgIFthdHRyLmRhdGEtaWRdPVwiaS5faWRcIlxuICAgICAgICBjbGFzcz1cInNpZGViYXItbmF2X19pdGVtLWxpbmtcIlxuICAgICAgICBbbmdDbGFzc109XCJ7ICdzaWRlYmFyLW5hdl9faXRlbS1kaXNhYmxlZCc6IGkuZGlzYWJsZWQgfVwiXG4gICAgICAgIChtb3VzZWVudGVyKT1cImNsb3NlU3ViTWVudSgpXCJcbiAgICAgID5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImkuX25lZWRJY29uXCI+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFjb2xsYXBzZWRcIj5cbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJpY29uXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBpLmljb24gfVwiPjwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPHNwYW4gKm5nSWY9XCJjb2xsYXBzZWRcIiBuei10b29sdGlwIG56VG9vbHRpcFBsYWNlbWVudD1cInJpZ2h0XCIgW256VG9vbHRpcFRpdGxlXT1cImkudGV4dFwiPlxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImljb25cIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IGkuaWNvbiB9XCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInNpZGViYXItbmF2X19pdGVtLXRleHRcIiBbaW5uZXJIVE1MXT1cImkuX3RleHRcIiBbYXR0ci50aXRsZV09XCJpLnRleHRcIj48L3NwYW4+XG4gICAgICA8L2E+XG4gICAgICA8IS0tIGhhcyBjaGlsZHJlbiBsaW5rIC0tPlxuICAgICAgPGFcbiAgICAgICAgKm5nSWY9XCJpLmNoaWxkcmVuLmxlbmd0aCA+IDBcIlxuICAgICAgICAoY2xpY2spPVwidG9nZ2xlT3BlbihpKVwiXG4gICAgICAgIChtb3VzZWVudGVyKT1cInNob3dTdWJNZW51KCRldmVudCwgaSlcIlxuICAgICAgICBjbGFzcz1cInNpZGViYXItbmF2X19pdGVtLWxpbmtcIlxuICAgICAgPlxuICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiaWNvblwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogaS5pY29uIH1cIj48L25nLXRlbXBsYXRlPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInNpZGViYXItbmF2X19pdGVtLXRleHRcIiBbaW5uZXJIVE1MXT1cImkuX3RleHRcIiBbYXR0ci50aXRsZV09XCJpLnRleHRcIj48L3NwYW4+XG4gICAgICAgIDxpIGNsYXNzPVwic2lkZWJhci1uYXZfX3N1Yi1hcnJvd1wiPjwvaT5cbiAgICAgIDwvYT5cbiAgICAgIDwhLS0gYmFkZ2UgLS0+XG4gICAgICA8bnotYmFkZ2UgKm5nSWY9XCJpLmJhZGdlXCIgW256Q291bnRdPVwiaS5iYWRnZVwiIFtuekRvdF09XCJpLmJhZGdlRG90XCIgbnpTdGFuZGFsb25lIFtuek92ZXJmbG93Q291bnRdPVwiOVwiPjwvbnotYmFkZ2U+XG4gICAgICA8dWwgKm5nSWY9XCJpLmNoaWxkcmVuLmxlbmd0aCA+IDBcIiBjbGFzcz1cInNpZGViYXItbmF2IHNpZGViYXItbmF2X19zdWIgc2lkZWJhci1uYXZfX2RlcHRoe3sgaS5fZGVwdGggfX1cIj5cbiAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRyZWVcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IGkuY2hpbGRyZW4gfVwiPjwvbmctdGVtcGxhdGU+XG4gICAgICA8L3VsPlxuICAgIDwvbGk+XG4gIDwvbmctY29udGFpbmVyPlxuPC9uZy10ZW1wbGF0ZT5cbjx1bCBjbGFzcz1cInNpZGViYXItbmF2XCI+XG4gIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGdyb3VwIG9mIGxpc3RcIj5cbiAgICA8bGkgY2xhc3M9XCJzaWRlYmFyLW5hdl9faXRlbSBzaWRlYmFyLW5hdl9fZ3JvdXAtdGl0bGVcIiAqbmdJZj1cImdyb3VwLmdyb3VwXCI+XG4gICAgICA8c3BhbiBbaW5uZXJIVE1MXT1cImdyb3VwLl90ZXh0XCI+PC9zcGFuPlxuICAgIDwvbGk+XG4gICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRyZWVcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IGdyb3VwLmNoaWxkcmVuIH1cIj48L25nLXRlbXBsYXRlPlxuICA8L25nLWNvbnRhaW5lcj5cbjwvdWw+XG4iXX0=