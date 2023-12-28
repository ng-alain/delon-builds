import { __decorate } from "tslib";
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, EventEmitter, Inject, Input, Optional, Output, ViewEncapsulation, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
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
        this.destroy$ = inject(DestroyRef);
        this.dir = 'ltr';
        this.list = [];
        this.disabledAcl = false;
        this.autoCloseUnderPad = true;
        this.recursivePath = true;
        this.hideEmptyChildren = true;
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
        const { doc, router, menuSrv, settings, cdr } = this;
        this.bodyEl = doc.querySelector('body');
        menuSrv.change.pipe(takeUntilDestroyed(this.destroy$)).subscribe(data => {
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
            if (this.hideEmptyChildren)
                this.fixHide(data);
            this.list = data.filter((w) => w._hidden !== true);
            cdr.detectChanges();
        });
        router.events.pipe(takeUntilDestroyed(this.destroy$)).subscribe(e => {
            if (e instanceof NavigationEnd) {
                this.openByUrl(e.urlAfterRedirects);
                this.underPad();
                this.cdr.detectChanges();
            }
        });
        settings.notify
            .pipe(takeUntilDestroyed(this.destroy$), filter(t => t.type === 'layout' && t.name === 'collapsed'))
            .subscribe(() => this.clearFloating());
        this.underPad();
        this.dir = this.directionality.value;
        this.directionality.change?.pipe(takeUntilDestroyed(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: LayoutDefaultNavComponent, deps: [{ token: i1.MenuService }, { token: i1.SettingsService }, { token: i2.Router }, { token: i0.Renderer2 }, { token: i0.ChangeDetectorRef }, { token: i0.NgZone }, { token: i3.DomSanitizer }, { token: DOCUMENT }, { token: WINDOW }, { token: i4.Directionality, optional: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.2", type: LayoutDefaultNavComponent, selector: "layout-default-nav", inputs: { disabledAcl: "disabledAcl", autoCloseUnderPad: "autoCloseUnderPad", recursivePath: "recursivePath", hideEmptyChildren: "hideEmptyChildren", openStrictly: "openStrictly", maxLevelIcon: "maxLevelIcon" }, outputs: { select: "select" }, host: { listeners: { "click": "_click()", "document:click": "closeSubMenu()" }, properties: { "class.d-block": "true" } }, ngImport: i0, template: "<ng-template #icon let-i>\n  @if (i) {\n    @switch (i.type) {\n      @case ('icon') {\n        <i\n          class=\"sidebar-nav__item-icon\"\n          nz-icon\n          [nzType]=\"i.value\"\n          [nzTheme]=\"i.theme\"\n          [nzSpin]=\"i.spin\"\n          [nzTwotoneColor]=\"i.twoToneColor\"\n          [nzIconfont]=\"i.iconfont\"\n          [nzRotate]=\"i.rotate\"\n        ></i>\n      }\n      @case ('iconfont') {\n        <i class=\"sidebar-nav__item-icon\" nz-icon [nzIconfont]=\"i.iconfont\"></i>\n      }\n      @case ('img') {\n        <img [src]=\"i.value\" class=\"sidebar-nav__item-icon sidebar-nav__item-img\" />\n      }\n      @case ('svg') {\n        <span class=\"sidebar-nav__item-icon sidebar-nav__item-svg\" [innerHTML]=\"i.value\"></span>\n      }\n      @default {\n        <i class=\"sidebar-nav__item-icon {{ i.value }}\"></i>\n      }\n    }\n  }\n</ng-template>\n<ng-template #tree let-ls>\n  @for (i of ls; track $index) {\n    @if (i._hidden !== true) {\n      <li class=\"sidebar-nav__item\" [class.sidebar-nav__selected]=\"i._selected\" [class.sidebar-nav__open]=\"i.open\">\n        <!-- link -->\n        @if (i.children.length === 0) {\n          <a\n            (click)=\"to(i)\"\n            [attr.data-id]=\"i._id\"\n            class=\"sidebar-nav__item-link\"\n            [ngClass]=\"{ 'sidebar-nav__item-disabled': i.disabled }\"\n            (mouseenter)=\"closeSubMenu()\"\n          >\n            @if (i._needIcon) {\n              @if (collapsed) {\n                <span nz-tooltip nzTooltipPlacement=\"right\" [nzTooltipTitle]=\"i.text\">\n                  <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{ $implicit: i.icon }\" />\n                </span>\n              } @else {\n                <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{ $implicit: i.icon }\" />\n              }\n            }\n            <span class=\"sidebar-nav__item-text\" [innerHTML]=\"i._text\" [attr.title]=\"i.text\"></span>\n          </a>\n        }\n        <!-- has children link -->\n        @if (i.children.length > 0) {\n          <a (click)=\"toggleOpen(i)\" (mouseenter)=\"showSubMenu($event, i)\" class=\"sidebar-nav__item-link\">\n            <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{ $implicit: i.icon }\" />\n            <span class=\"sidebar-nav__item-text\" [innerHTML]=\"i._text\" [attr.title]=\"i.text\"></span>\n            <i class=\"sidebar-nav__sub-arrow\"></i>\n          </a>\n        }\n        <!-- badge -->\n        @if (i.badge) {\n          <nz-badge [nzCount]=\"i.badge\" [nzDot]=\"i.badgeDot\" nzStandalone [nzOverflowCount]=\"9\" />\n        }\n        @if (i.children.length > 0) {\n          <ul class=\"sidebar-nav sidebar-nav__sub sidebar-nav__depth{{ i._depth }}\">\n            <ng-template [ngTemplateOutlet]=\"tree\" [ngTemplateOutletContext]=\"{ $implicit: i.children }\" />\n          </ul>\n        }\n      </li>\n    }\n  }\n</ng-template>\n<ul class=\"sidebar-nav\">\n  @for (group of list; track $index) {\n    @if (group.group) {\n      <li class=\"sidebar-nav__item sidebar-nav__group-title\">\n        <span [innerHTML]=\"group._text\"></span>\n      </li>\n    }\n    <ng-template [ngTemplateOutlet]=\"tree\" [ngTemplateOutletContext]=\"{ $implicit: group.children }\" />\n  }\n</ul>\n", dependencies: [{ kind: "directive", type: i5.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i5.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i6.NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "cdkConnectedOverlayPush", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }, { kind: "directive", type: i7.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "component", type: i8.NzBadgeComponent, selector: "nz-badge", inputs: ["nzShowZero", "nzShowDot", "nzStandalone", "nzDot", "nzOverflowCount", "nzColor", "nzStyle", "nzText", "nzTitle", "nzStatus", "nzCount", "nzOffset", "nzSize"], exportAs: ["nzBadge"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
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
], LayoutDefaultNavComponent.prototype, "hideEmptyChildren", void 0);
__decorate([
    InputBoolean()
], LayoutDefaultNavComponent.prototype, "openStrictly", null);
__decorate([
    InputNumber()
], LayoutDefaultNavComponent.prototype, "maxLevelIcon", void 0);
__decorate([
    ZoneOutside()
], LayoutDefaultNavComponent.prototype, "showSubMenu", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: LayoutDefaultNavComponent, decorators: [{
            type: Component,
            args: [{ selector: 'layout-default-nav', host: {
                        '(click)': '_click()',
                        '(document:click)': 'closeSubMenu()',
                        '[class.d-block]': `true`
                    }, preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<ng-template #icon let-i>\n  @if (i) {\n    @switch (i.type) {\n      @case ('icon') {\n        <i\n          class=\"sidebar-nav__item-icon\"\n          nz-icon\n          [nzType]=\"i.value\"\n          [nzTheme]=\"i.theme\"\n          [nzSpin]=\"i.spin\"\n          [nzTwotoneColor]=\"i.twoToneColor\"\n          [nzIconfont]=\"i.iconfont\"\n          [nzRotate]=\"i.rotate\"\n        ></i>\n      }\n      @case ('iconfont') {\n        <i class=\"sidebar-nav__item-icon\" nz-icon [nzIconfont]=\"i.iconfont\"></i>\n      }\n      @case ('img') {\n        <img [src]=\"i.value\" class=\"sidebar-nav__item-icon sidebar-nav__item-img\" />\n      }\n      @case ('svg') {\n        <span class=\"sidebar-nav__item-icon sidebar-nav__item-svg\" [innerHTML]=\"i.value\"></span>\n      }\n      @default {\n        <i class=\"sidebar-nav__item-icon {{ i.value }}\"></i>\n      }\n    }\n  }\n</ng-template>\n<ng-template #tree let-ls>\n  @for (i of ls; track $index) {\n    @if (i._hidden !== true) {\n      <li class=\"sidebar-nav__item\" [class.sidebar-nav__selected]=\"i._selected\" [class.sidebar-nav__open]=\"i.open\">\n        <!-- link -->\n        @if (i.children.length === 0) {\n          <a\n            (click)=\"to(i)\"\n            [attr.data-id]=\"i._id\"\n            class=\"sidebar-nav__item-link\"\n            [ngClass]=\"{ 'sidebar-nav__item-disabled': i.disabled }\"\n            (mouseenter)=\"closeSubMenu()\"\n          >\n            @if (i._needIcon) {\n              @if (collapsed) {\n                <span nz-tooltip nzTooltipPlacement=\"right\" [nzTooltipTitle]=\"i.text\">\n                  <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{ $implicit: i.icon }\" />\n                </span>\n              } @else {\n                <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{ $implicit: i.icon }\" />\n              }\n            }\n            <span class=\"sidebar-nav__item-text\" [innerHTML]=\"i._text\" [attr.title]=\"i.text\"></span>\n          </a>\n        }\n        <!-- has children link -->\n        @if (i.children.length > 0) {\n          <a (click)=\"toggleOpen(i)\" (mouseenter)=\"showSubMenu($event, i)\" class=\"sidebar-nav__item-link\">\n            <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{ $implicit: i.icon }\" />\n            <span class=\"sidebar-nav__item-text\" [innerHTML]=\"i._text\" [attr.title]=\"i.text\"></span>\n            <i class=\"sidebar-nav__sub-arrow\"></i>\n          </a>\n        }\n        <!-- badge -->\n        @if (i.badge) {\n          <nz-badge [nzCount]=\"i.badge\" [nzDot]=\"i.badgeDot\" nzStandalone [nzOverflowCount]=\"9\" />\n        }\n        @if (i.children.length > 0) {\n          <ul class=\"sidebar-nav sidebar-nav__sub sidebar-nav__depth{{ i._depth }}\">\n            <ng-template [ngTemplateOutlet]=\"tree\" [ngTemplateOutletContext]=\"{ $implicit: i.children }\" />\n          </ul>\n        }\n      </li>\n    }\n  }\n</ng-template>\n<ul class=\"sidebar-nav\">\n  @for (group of list; track $index) {\n    @if (group.group) {\n      <li class=\"sidebar-nav__item sidebar-nav__group-title\">\n        <span [innerHTML]=\"group._text\"></span>\n      </li>\n    }\n    <ng-template [ngTemplateOutlet]=\"tree\" [ngTemplateOutletContext]=\"{ $implicit: group.children }\" />\n  }\n</ul>\n" }]
        }], ctorParameters: () => [{ type: i1.MenuService }, { type: i1.SettingsService }, { type: i2.Router }, { type: i0.Renderer2 }, { type: i0.ChangeDetectorRef }, { type: i0.NgZone }, { type: i3.DomSanitizer }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [WINDOW]
                }] }, { type: i4.Directionality, decorators: [{
                    type: Optional
                }] }], propDecorators: { disabledAcl: [{
                type: Input
            }], autoCloseUnderPad: [{
                type: Input
            }], recursivePath: [{
                type: Input
            }], hideEmptyChildren: [{
                type: Input
            }], openStrictly: [{
                type: Input
            }], maxLevelIcon: [{
                type: Input
            }], select: [{
                type: Output
            }], showSubMenu: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LW5hdi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90aGVtZS9sYXlvdXQtZGVmYXVsdC9sYXlvdXQtbmF2LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lL2xheW91dC1kZWZhdWx0L2xheW91dC1uYXYuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsdUJBQXVCLEVBRXZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBSUwsUUFBUSxFQUNSLE1BQU0sRUFFTixpQkFBaUIsRUFDakIsTUFBTSxFQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRWhFLE9BQU8sRUFBRSxhQUFhLEVBQVUsTUFBTSxpQkFBaUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRzlCLE9BQU8sRUFBZ0IsWUFBWSxFQUFFLFdBQVcsRUFBZSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7Ozs7Ozs7QUFRM0MsTUFBTSxPQUFPLEdBQUcsNEJBQTRCLENBQUM7QUFDN0MsTUFBTSxXQUFXLEdBQUcsdUJBQXVCLENBQUM7QUFjNUMsTUFBTSxPQUFPLHlCQUF5QjtJQW9CcEMsSUFBSSxZQUFZLENBQUMsS0FBYztRQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDcEMsQ0FBQztJQUlELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO0lBQ3hDLENBQUM7SUFFRCxZQUNVLE9BQW9CLEVBQ3BCLFFBQXlCLEVBQ3pCLE1BQWMsRUFDZCxNQUFpQixFQUNqQixHQUFzQixFQUN0QixNQUFjLEVBQ2QsU0FBdUIsRUFDTCxHQUFjLEVBQ2hCLEdBQWMsRUFDbEIsY0FBOEI7UUFUMUMsWUFBTyxHQUFQLE9BQU8sQ0FBYTtRQUNwQixhQUFRLEdBQVIsUUFBUSxDQUFpQjtRQUN6QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUNqQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN0QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsY0FBUyxHQUFULFNBQVMsQ0FBYztRQUNMLFFBQUcsR0FBSCxHQUFHLENBQVc7UUFDaEIsUUFBRyxHQUFILEdBQUcsQ0FBVztRQUNsQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUEvQjVDLGFBQVEsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFdEMsUUFBRyxHQUFjLEtBQUssQ0FBQztRQUN2QixTQUFJLEdBQVUsRUFBRSxDQUFDO1FBRVEsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIsc0JBQWlCLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLGtCQUFhLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLHNCQUFpQixHQUFHLElBQUksQ0FBQztRQU0xQixpQkFBWSxHQUFHLENBQUMsQ0FBQztRQUN0QixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztJQWlCbEQsQ0FBQztJQUVJLFdBQVcsQ0FBQyxJQUFpQjtRQUNuQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUUsSUFBSSxDQUFDLFVBQTBCLENBQUM7UUFDdkUsT0FBTyxJQUFJLENBQUMsUUFBUSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDN0MsQ0FBQztJQUVPLG1CQUFtQixDQUFDLENBQWE7UUFDdkMsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3BCLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLE1BQXFCLENBQUMsQ0FBQztRQUMzRCxJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFDcEIsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELE1BQU0sRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQVEsQ0FBQyxFQUFHLENBQUM7UUFDbEMsZ0RBQWdEO1FBQ2hELElBQUksS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQ2IsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELElBQUksSUFBUyxDQUFDO1FBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQU0sRUFBRSxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxFQUFFLEVBQUU7Z0JBQ3pCLElBQUksR0FBRyxDQUFDLENBQUM7YUFDVjtRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFLLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNuQixPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFTyxhQUFhO1FBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVTtZQUFFLE9BQU87UUFDN0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2xGLHNEQUFzRDtRQUN0RCxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQzVDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDMUI7YUFBTSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFO1lBQ3JDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDekQ7SUFDSCxDQUFDO0lBRU8sV0FBVztRQUNqQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxXQUFXLFlBQVksQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDdEYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFTyxVQUFVLENBQUMsUUFBeUIsRUFBRSxJQUFTO1FBQ3JELE1BQU0sRUFBRSxHQUFHLGdCQUFnQixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDdEMsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLGtCQUFtQixDQUFDLGtCQUFtQixDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsa0JBQW1CLENBQUM7UUFDL0csTUFBTSxJQUFJLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQXFCLENBQUM7UUFDM0QsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsZ0JBQWdCLENBQ25CLFlBQVksRUFDWixHQUFHLEVBQUU7WUFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqQyxDQUFDLEVBQ0QsS0FBSyxDQUNOLENBQUM7UUFDRixJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTyxPQUFPO1FBQ2IsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDcEUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdkMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDdEM7SUFDSCxDQUFDO0lBRUQsc0NBQXNDO0lBQzlCLE1BQU0sQ0FBQyxRQUF5QixFQUFFLElBQXNCO1FBQzlELE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQzlDLHNGQUFzRjtRQUN0RixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3RGLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDNUYsTUFBTSxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLElBQUksWUFBWSxHQUFHLENBQUMsT0FBTyxDQUFDO1FBQzVCLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUM1QyxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsR0FBRyxPQUFPLENBQUM7U0FDbkU7UUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsU0FBUyxHQUFHLFlBQVksSUFBSSxDQUFDO1FBQzVELElBQUksSUFBSSxDQUFDLEdBQUcsS0FBSyxLQUFLLEVBQUU7WUFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sSUFBSSxDQUFDO1NBQ2hEO2FBQU07WUFDTCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxJQUFJLENBQUM7U0FDL0M7SUFDSCxDQUFDO0lBR0QsV0FBVyxDQUFDLENBQWEsRUFBRSxJQUFTO1FBQ2xDLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxJQUFJLEVBQUU7WUFDM0IsT0FBTztTQUNSO1FBQ0QsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25CLE1BQU0sUUFBUSxHQUFHLENBQUMsQ0FBQyxNQUFpQixDQUFDO1FBQ3JDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQTJCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2YsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUEyQixFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCxFQUFFLENBQUMsSUFBVTtRQUNYLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLElBQUksSUFBSSxDQUFDLFFBQVE7WUFBRSxPQUFPO1FBRTFCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssUUFBUSxFQUFFO2dCQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDbEM7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7YUFDNUM7WUFDRCxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSyxDQUFDLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQsVUFBVSxDQUFDLElBQVM7UUFDbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELE1BQU07UUFDSixJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNoQjtJQUNILENBQUM7SUFFRCxZQUFZO1FBQ1YsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNoQjtJQUNILENBQUM7SUFFTyxTQUFTLENBQUMsR0FBa0I7UUFDbEMsTUFBTSxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDeEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFRCxRQUFRO1FBQ04sTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDckQsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN0RSxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQU0sRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUU7Z0JBQ3hDLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsSUFBSyxDQUFDLENBQUM7Z0JBQzFELENBQUMsQ0FBQyxTQUFTLEdBQUcsS0FBTSxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ3RELElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFO29CQUNqQixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7d0JBQ3BCLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO3FCQUNuQjt5QkFBTTt3QkFDTCxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztxQkFDbEI7aUJBQ0Y7Z0JBQ0QsTUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQWdCLENBQUM7Z0JBQ2hDLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssS0FBSyxJQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssS0FBSyxRQUFRLEVBQUU7b0JBQ2pFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsS0FBTyxDQUFDLENBQUM7aUJBQ25FO1lBQ0gsQ0FBQyxDQUFDLENBQUM7WUFDSCxJQUFJLElBQUksQ0FBQyxpQkFBaUI7Z0JBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMvQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFNLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLENBQUM7WUFDeEQsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2xFLElBQUksQ0FBQyxZQUFZLGFBQWEsRUFBRTtnQkFDOUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQztnQkFDcEMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNoQixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO2FBQzFCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDSCxRQUFRLENBQUMsTUFBTTthQUNaLElBQUksQ0FDSCxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQ2pDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssUUFBUSxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssV0FBVyxDQUFDLENBQzNEO2FBQ0EsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUVoQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxTQUFvQixFQUFFLEVBQUU7WUFDckcsSUFBSSxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUM7WUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVPLE9BQU8sQ0FBQyxFQUFTO1FBQ3ZCLE1BQU0sSUFBSSxHQUFHLENBQUMsSUFBVyxFQUFRLEVBQUU7WUFDakMsS0FBSyxNQUFNLElBQUksSUFBSSxJQUFJLEVBQUU7Z0JBQ3ZCLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO3dCQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7cUJBQzNEO2lCQUNGO2FBQ0Y7UUFDSCxDQUFDLENBQUM7UUFFRixJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsb0JBQW9CO0lBRXBCLElBQVksS0FBSztRQUNmLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFZLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztJQUNoRCxDQUFDO0lBRU8sUUFBUTtRQUNkLElBQUksSUFBSSxDQUFDLGlCQUFpQixJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQzNELFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDeEM7SUFDSCxDQUFDO0lBRU8sU0FBUyxDQUFDLE1BQWU7UUFDL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQy9DLENBQUM7OEdBelFVLHlCQUF5Qiw4TUFzQzFCLFFBQVEsYUFDUixNQUFNO2tHQXZDTCx5QkFBeUIsd2FDakR0QywreEdBc0ZBOztBRHZCMkI7SUFBZixZQUFZLEVBQUU7OERBQXFCO0FBQ3BCO0lBQWYsWUFBWSxFQUFFO29FQUEwQjtBQUN6QjtJQUFmLFlBQVksRUFBRTtnRUFBc0I7QUFDckI7SUFBZixZQUFZLEVBQUU7b0VBQTBCO0FBR2xEO0lBREMsWUFBWSxFQUFFOzZEQUdkO0FBQ3VCO0lBQWQsV0FBVyxFQUFFOytEQUFrQjtBQWdIekM7SUFEQyxXQUFXLEVBQUU7NERBWWI7MkZBbEpVLHlCQUF5QjtrQkFackMsU0FBUzsrQkFDRSxvQkFBb0IsUUFFeEI7d0JBQ0osU0FBUyxFQUFFLFVBQVU7d0JBQ3JCLGtCQUFrQixFQUFFLGdCQUFnQjt3QkFDcEMsaUJBQWlCLEVBQUUsTUFBTTtxQkFDMUIsdUJBQ29CLEtBQUssbUJBQ1QsdUJBQXVCLENBQUMsTUFBTSxpQkFDaEMsaUJBQWlCLENBQUMsSUFBSTs7MEJBd0NsQyxNQUFNOzJCQUFDLFFBQVE7OzBCQUNmLE1BQU07MkJBQUMsTUFBTTs7MEJBQ2IsUUFBUTt5Q0ExQmMsV0FBVztzQkFBbkMsS0FBSztnQkFDbUIsaUJBQWlCO3NCQUF6QyxLQUFLO2dCQUNtQixhQUFhO3NCQUFyQyxLQUFLO2dCQUNtQixpQkFBaUI7c0JBQXpDLEtBQUs7Z0JBR0YsWUFBWTtzQkFGZixLQUFLO2dCQUtrQixZQUFZO3NCQUFuQyxLQUFLO2dCQUNhLE1BQU07c0JBQXhCLE1BQU07Z0JBK0dQLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3Rpb24sIERpcmVjdGlvbmFsaXR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIERlc3Ryb3lSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgaW5qZWN0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdGFrZVVudGlsRGVzdHJveWVkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZS9yeGpzLWludGVyb3AnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkVuZCwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBNZW51LCBNZW51SWNvbiwgTWVudUlubmVyLCBNZW51U2VydmljZSwgU2V0dGluZ3NTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciwgTnVtYmVySW5wdXQsIFpvbmVPdXRzaWRlIH0gZnJvbSAnQGRlbG9uL3V0aWwvZGVjb3JhdG9yJztcbmltcG9ydCB7IFdJTkRPVyB9IGZyb20gJ0BkZWxvbi91dGlsL3Rva2VuJztcbmltcG9ydCB0eXBlIHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBOYXYgZXh0ZW5kcyBNZW51SW5uZXIge1xuICBfbmVlZEljb24/OiBib29sZWFuO1xuICBfdGV4dD86IFNhZmVIdG1sO1xufVxuXG5jb25zdCBTSE9XQ0xTID0gJ3NpZGViYXItbmF2X19mbG9hdGluZy1zaG93JztcbmNvbnN0IEZMT0FUSU5HQ0xTID0gJ3NpZGViYXItbmF2X19mbG9hdGluZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xheW91dC1kZWZhdWx0LW5hdicsXG4gIHRlbXBsYXRlVXJsOiAnLi9sYXlvdXQtbmF2LmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgICcoY2xpY2spJzogJ19jbGljaygpJyxcbiAgICAnKGRvY3VtZW50OmNsaWNrKSc6ICdjbG9zZVN1Yk1lbnUoKScsXG4gICAgJ1tjbGFzcy5kLWJsb2NrXSc6IGB0cnVlYFxuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgTGF5b3V0RGVmYXVsdE5hdkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Rpc2FibGVkQWNsOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9hdXRvQ2xvc2VVbmRlclBhZDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfcmVjdXJzaXZlUGF0aDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfaGlkZUVtcHR5Q2hpbGRyZW46IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX29wZW5TdHJpY3RseTogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbWF4TGV2ZWxJY29uOiBOdW1iZXJJbnB1dDtcblxuICBwcml2YXRlIGJvZHlFbCE6IEhUTUxCb2R5RWxlbWVudDtcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IGluamVjdChEZXN0cm95UmVmKTtcbiAgcHJpdmF0ZSBmbG9hdGluZ0VsITogSFRNTERpdkVsZW1lbnQ7XG4gIGRpcjogRGlyZWN0aW9uID0gJ2x0cic7XG4gIGxpc3Q6IE5hdltdID0gW107XG5cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRpc2FibGVkQWNsID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBhdXRvQ2xvc2VVbmRlclBhZCA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSByZWN1cnNpdmVQYXRoID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGhpZGVFbXB0eUNoaWxkcmVuID0gdHJ1ZTtcbiAgQElucHV0KClcbiAgQElucHV0Qm9vbGVhbigpXG4gIHNldCBvcGVuU3RyaWN0bHkodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLm1lbnVTcnYub3BlblN0cmljdGx5ID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgbWF4TGV2ZWxJY29uID0gMztcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8TWVudT4oKTtcblxuICBnZXQgY29sbGFwc2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNldHRpbmdzLmxheW91dC5jb2xsYXBzZWQ7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG1lbnVTcnY6IE1lbnVTZXJ2aWNlLFxuICAgIHByaXZhdGUgc2V0dGluZ3M6IFNldHRpbmdzU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgcmVuZGVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcixcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogTnpTYWZlQW55LFxuICAgIEBJbmplY3QoV0lORE9XKSBwcml2YXRlIHdpbjogTnpTYWZlQW55LFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZGlyZWN0aW9uYWxpdHk6IERpcmVjdGlvbmFsaXR5XG4gICkge31cblxuICBwcml2YXRlIGdldExpbmtOb2RlKG5vZGU6IEhUTUxFbGVtZW50KTogSFRNTEVsZW1lbnQgfCBudWxsIHtcbiAgICBub2RlID0gbm9kZS5ub2RlTmFtZSA9PT0gJ0EnID8gbm9kZSA6IChub2RlLnBhcmVudE5vZGUgYXMgSFRNTEVsZW1lbnQpO1xuICAgIHJldHVybiBub2RlLm5vZGVOYW1lICE9PSAnQScgPyBudWxsIDogbm9kZTtcbiAgfVxuXG4gIHByaXZhdGUgZmxvYXRpbmdDbGlja0hhbmRsZShlOiBNb3VzZUV2ZW50KTogYm9vbGVhbiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCBsaW5rTm9kZSA9IHRoaXMuZ2V0TGlua05vZGUoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpO1xuICAgIGlmIChsaW5rTm9kZSA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IGlkID0gK2xpbmtOb2RlLmRhdGFzZXQhLmlkITtcbiAgICAvLyBTaG91bGQgYmUgaW5nb3JlIGNoaWxkcmVuIHRpdGxlIHRyaWdnZXIgZXZlbnRcbiAgICBpZiAoaXNOYU4oaWQpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbGV0IGl0ZW06IE5hdjtcbiAgICB0aGlzLm1lbnVTcnYudmlzaXQodGhpcy5saXN0LCAoaTogTmF2KSA9PiB7XG4gICAgICBpZiAoIWl0ZW0gJiYgaS5faWQgPT09IGlkKSB7XG4gICAgICAgIGl0ZW0gPSBpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMudG8oaXRlbSEpO1xuICAgIHRoaXMuaGlkZUFsbCgpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIGNsZWFyRmxvYXRpbmcoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmZsb2F0aW5nRWwpIHJldHVybjtcbiAgICB0aGlzLmZsb2F0aW5nRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmZsb2F0aW5nQ2xpY2tIYW5kbGUuYmluZCh0aGlzKSk7XG4gICAgLy8gZml4IGllOiBodHRwczovL2dpdGh1Yi5jb20vbmctYWxhaW4vZGVsb24vaXNzdWVzLzUyXG4gICAgaWYgKHRoaXMuZmxvYXRpbmdFbC5oYXNPd25Qcm9wZXJ0eSgncmVtb3ZlJykpIHtcbiAgICAgIHRoaXMuZmxvYXRpbmdFbC5yZW1vdmUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZmxvYXRpbmdFbC5wYXJlbnROb2RlKSB7XG4gICAgICB0aGlzLmZsb2F0aW5nRWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmZsb2F0aW5nRWwpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2VuRmxvYXRpbmcoKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhckZsb2F0aW5nKCk7XG4gICAgdGhpcy5mbG9hdGluZ0VsID0gdGhpcy5yZW5kZXIuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5mbG9hdGluZ0VsLmNsYXNzTGlzdC5hZGQoYCR7RkxPQVRJTkdDTFN9LWNvbnRhaW5lcmApO1xuICAgIHRoaXMuZmxvYXRpbmdFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZmxvYXRpbmdDbGlja0hhbmRsZS5iaW5kKHRoaXMpLCBmYWxzZSk7XG4gICAgdGhpcy5ib2R5RWwuYXBwZW5kQ2hpbGQodGhpcy5mbG9hdGluZ0VsKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuU3ViTm9kZShsaW5rTm9kZTogSFRNTExpbmtFbGVtZW50LCBpdGVtOiBOYXYpOiBIVE1MVUxpc3RFbGVtZW50IHtcbiAgICBjb25zdCBpZCA9IGBfc2lkZWJhci1uYXYtJHtpdGVtLl9pZH1gO1xuICAgIGNvbnN0IGNoaWxkTm9kZSA9IGl0ZW0uYmFkZ2UgPyBsaW5rTm9kZS5uZXh0RWxlbWVudFNpYmxpbmchLm5leHRFbGVtZW50U2libGluZyEgOiBsaW5rTm9kZS5uZXh0RWxlbWVudFNpYmxpbmchO1xuICAgIGNvbnN0IG5vZGUgPSBjaGlsZE5vZGUuY2xvbmVOb2RlKHRydWUpIGFzIEhUTUxVTGlzdEVsZW1lbnQ7XG4gICAgbm9kZS5pZCA9IGlkO1xuICAgIG5vZGUuY2xhc3NMaXN0LmFkZChGTE9BVElOR0NMUyk7XG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ21vdXNlbGVhdmUnLFxuICAgICAgKCkgPT4ge1xuICAgICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoU0hPV0NMUyk7XG4gICAgICB9LFxuICAgICAgZmFsc2VcbiAgICApO1xuICAgIHRoaXMuZmxvYXRpbmdFbC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHByaXZhdGUgaGlkZUFsbCgpOiB2b2lkIHtcbiAgICBjb25zdCBhbGxOb2RlID0gdGhpcy5mbG9hdGluZ0VsLnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke0ZMT0FUSU5HQ0xTfWApO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsTm9kZS5sZW5ndGg7IGkrKykge1xuICAgICAgYWxsTm9kZVtpXS5jbGFzc0xpc3QucmVtb3ZlKFNIT1dDTFMpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGNhbGN1bGF0ZSB0aGUgbm9kZSBwb3NpdGlvbiB2YWx1ZXMuXG4gIHByaXZhdGUgY2FsUG9zKGxpbmtOb2RlOiBIVE1MTGlua0VsZW1lbnQsIG5vZGU6IEhUTUxVTGlzdEVsZW1lbnQpOiB2b2lkIHtcbiAgICBjb25zdCByZWN0ID0gbGlua05vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgLy8gYnVnOiBodHRwczovL2RldmVsb3Blci5taWNyb3NvZnQuY29tL2VuLXVzL21pY3Jvc29mdC1lZGdlL3BsYXRmb3JtL2lzc3Vlcy8xNDcyMTAxNS9cbiAgICBjb25zdCBzY3JvbGxUb3AgPSBNYXRoLm1heCh0aGlzLmRvYy5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wLCB0aGlzLmJvZHlFbC5zY3JvbGxUb3ApO1xuICAgIGNvbnN0IGRvY0hlaWdodCA9IE1hdGgubWF4KHRoaXMuZG9jLmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsIHRoaXMuYm9keUVsLmNsaWVudEhlaWdodCk7XG4gICAgY29uc3Qgc3BhY2luZyA9IDU7XG4gICAgbGV0IG9mZnNldEhlaWdodCA9IC1zcGFjaW5nO1xuICAgIGlmIChkb2NIZWlnaHQgPCByZWN0LnRvcCArIG5vZGUuY2xpZW50SGVpZ2h0KSB7XG4gICAgICBvZmZzZXRIZWlnaHQgPSByZWN0LnRvcCArIG5vZGUuY2xpZW50SGVpZ2h0IC0gZG9jSGVpZ2h0ICsgc3BhY2luZztcbiAgICB9XG4gICAgbm9kZS5zdHlsZS50b3AgPSBgJHtyZWN0LnRvcCArIHNjcm9sbFRvcCAtIG9mZnNldEhlaWdodH1weGA7XG4gICAgaWYgKHRoaXMuZGlyID09PSAncnRsJykge1xuICAgICAgbm9kZS5zdHlsZS5yaWdodCA9IGAke3JlY3Qud2lkdGggKyBzcGFjaW5nfXB4YDtcbiAgICB9IGVsc2Uge1xuICAgICAgbm9kZS5zdHlsZS5sZWZ0ID0gYCR7cmVjdC5yaWdodCArIHNwYWNpbmd9cHhgO1xuICAgIH1cbiAgfVxuXG4gIEBab25lT3V0c2lkZSgpXG4gIHNob3dTdWJNZW51KGU6IE1vdXNlRXZlbnQsIGl0ZW06IE5hdik6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvbGxhcHNlZCAhPT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgbGlua05vZGUgPSBlLnRhcmdldCBhcyBFbGVtZW50O1xuICAgIHRoaXMuZ2VuRmxvYXRpbmcoKTtcbiAgICBjb25zdCBzdWJOb2RlID0gdGhpcy5nZW5TdWJOb2RlKGxpbmtOb2RlIGFzIEhUTUxMaW5rRWxlbWVudCwgaXRlbSk7XG4gICAgdGhpcy5oaWRlQWxsKCk7XG4gICAgc3ViTm9kZS5jbGFzc0xpc3QuYWRkKFNIT1dDTFMpO1xuICAgIHRoaXMuY2FsUG9zKGxpbmtOb2RlIGFzIEhUTUxMaW5rRWxlbWVudCwgc3ViTm9kZSk7XG4gIH1cblxuICB0byhpdGVtOiBNZW51KTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3QuZW1pdChpdGVtKTtcbiAgICBpZiAoaXRlbS5kaXNhYmxlZCkgcmV0dXJuO1xuXG4gICAgaWYgKGl0ZW0uZXh0ZXJuYWxMaW5rKSB7XG4gICAgICBpZiAoaXRlbS50YXJnZXQgPT09ICdfYmxhbmsnKSB7XG4gICAgICAgIHRoaXMud2luLm9wZW4oaXRlbS5leHRlcm5hbExpbmspO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy53aW4ubG9jYXRpb24uaHJlZiA9IGl0ZW0uZXh0ZXJuYWxMaW5rO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChpdGVtLmxpbmshKSk7XG4gIH1cblxuICB0b2dnbGVPcGVuKGl0ZW06IE5hdik6IHZvaWQge1xuICAgIHRoaXMubWVudVNydi50b2dnbGVPcGVuKGl0ZW0pO1xuICB9XG5cbiAgX2NsaWNrKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzUGFkICYmIHRoaXMuY29sbGFwc2VkKSB7XG4gICAgICB0aGlzLm9wZW5Bc2lkZShmYWxzZSk7XG4gICAgICB0aGlzLmhpZGVBbGwoKTtcbiAgICB9XG4gIH1cblxuICBjbG9zZVN1Yk1lbnUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29sbGFwc2VkKSB7XG4gICAgICB0aGlzLmhpZGVBbGwoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG9wZW5CeVVybCh1cmw6IHN0cmluZyB8IG51bGwpOiB2b2lkIHtcbiAgICBjb25zdCB7IG1lbnVTcnYsIHJlY3Vyc2l2ZVBhdGggfSA9IHRoaXM7XG4gICAgdGhpcy5tZW51U3J2Lm9wZW4obWVudVNydi5maW5kKHsgdXJsLCByZWN1cnNpdmU6IHJlY3Vyc2l2ZVBhdGggfSkpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3QgeyBkb2MsIHJvdXRlciwgbWVudVNydiwgc2V0dGluZ3MsIGNkciB9ID0gdGhpcztcbiAgICB0aGlzLmJvZHlFbCA9IGRvYy5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgbWVudVNydi5jaGFuZ2UucGlwZSh0YWtlVW50aWxEZXN0cm95ZWQodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgIG1lbnVTcnYudmlzaXQoZGF0YSwgKGk6IE5hdiwgX3AsIGRlcHRoKSA9PiB7XG4gICAgICAgIGkuX3RleHQgPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChpLnRleHQhKTtcbiAgICAgICAgaS5fbmVlZEljb24gPSBkZXB0aCEgPD0gdGhpcy5tYXhMZXZlbEljb24gJiYgISFpLmljb247XG4gICAgICAgIGlmICghaS5fYWNsUmVzdWx0KSB7XG4gICAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWRBY2wpIHtcbiAgICAgICAgICAgIGkuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpLl9oaWRkZW4gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpY29uID0gaS5pY29uIGFzIE1lbnVJY29uO1xuICAgICAgICBpZiAoaWNvbiAmJiBpY29uLnR5cGUgPT09ICdzdmcnICYmIHR5cGVvZiBpY29uLnZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGljb24udmFsdWUgPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChpY29uLnZhbHVlISEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmICh0aGlzLmhpZGVFbXB0eUNoaWxkcmVuKSB0aGlzLmZpeEhpZGUoZGF0YSk7XG4gICAgICB0aGlzLmxpc3QgPSBkYXRhLmZpbHRlcigodzogTmF2KSA9PiB3Ll9oaWRkZW4gIT09IHRydWUpO1xuICAgICAgY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgICByb3V0ZXIuZXZlbnRzLnBpcGUodGFrZVVudGlsRGVzdHJveWVkKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoZSA9PiB7XG4gICAgICBpZiAoZSBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpIHtcbiAgICAgICAgdGhpcy5vcGVuQnlVcmwoZS51cmxBZnRlclJlZGlyZWN0cyk7XG4gICAgICAgIHRoaXMudW5kZXJQYWQoKTtcbiAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHNldHRpbmdzLm5vdGlmeVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRha2VVbnRpbERlc3Ryb3llZCh0aGlzLmRlc3Ryb3kkKSxcbiAgICAgICAgZmlsdGVyKHQgPT4gdC50eXBlID09PSAnbGF5b3V0JyAmJiB0Lm5hbWUgPT09ICdjb2xsYXBzZWQnKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNsZWFyRmxvYXRpbmcoKSk7XG4gICAgdGhpcy51bmRlclBhZCgpO1xuXG4gICAgdGhpcy5kaXIgPSB0aGlzLmRpcmVjdGlvbmFsaXR5LnZhbHVlO1xuICAgIHRoaXMuZGlyZWN0aW9uYWxpdHkuY2hhbmdlPy5waXBlKHRha2VVbnRpbERlc3Ryb3llZCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKChkaXJlY3Rpb246IERpcmVjdGlvbikgPT4ge1xuICAgICAgdGhpcy5kaXIgPSBkaXJlY3Rpb247XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gICAgdGhpcy5vcGVuQnlVcmwocm91dGVyLnVybCk7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5nZW5GbG9hdGluZygpKTtcbiAgfVxuXG4gIHByaXZhdGUgZml4SGlkZShsczogTmF2W10pOiB2b2lkIHtcbiAgICBjb25zdCBpbkZuID0gKGxpc3Q6IE5hdltdKTogdm9pZCA9PiB7XG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgbGlzdCkge1xuICAgICAgICBpZiAoaXRlbS5jaGlsZHJlbiAmJiBpdGVtLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpbkZuKGl0ZW0uY2hpbGRyZW4pO1xuICAgICAgICAgIGlmICghaXRlbS5faGlkZGVuKSB7XG4gICAgICAgICAgICBpdGVtLl9oaWRkZW4gPSBpdGVtLmNoaWxkcmVuLmV2ZXJ5KCh2OiBOYXYpID0+IHYuX2hpZGRlbik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGluRm4obHMpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhckZsb2F0aW5nKCk7XG4gIH1cblxuICAvLyAjcmVnaW9uIFVuZGVyIHBhZFxuXG4gIHByaXZhdGUgZ2V0IGlzUGFkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmRvYy5kZWZhdWx0VmlldyEuaW5uZXJXaWR0aCA8IDc2ODtcbiAgfVxuXG4gIHByaXZhdGUgdW5kZXJQYWQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYXV0b0Nsb3NlVW5kZXJQYWQgJiYgdGhpcy5pc1BhZCAmJiAhdGhpcy5jb2xsYXBzZWQpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5vcGVuQXNpZGUodHJ1ZSkpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgb3BlbkFzaWRlKHN0YXR1czogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuc2V0dGluZ3Muc2V0TGF5b3V0KCdjb2xsYXBzZWQnLCBzdGF0dXMpO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxufVxuIiwiPG5nLXRlbXBsYXRlICNpY29uIGxldC1pPlxuICBAaWYgKGkpIHtcbiAgICBAc3dpdGNoIChpLnR5cGUpIHtcbiAgICAgIEBjYXNlICgnaWNvbicpIHtcbiAgICAgICAgPGlcbiAgICAgICAgICBjbGFzcz1cInNpZGViYXItbmF2X19pdGVtLWljb25cIlxuICAgICAgICAgIG56LWljb25cbiAgICAgICAgICBbbnpUeXBlXT1cImkudmFsdWVcIlxuICAgICAgICAgIFtuelRoZW1lXT1cImkudGhlbWVcIlxuICAgICAgICAgIFtuelNwaW5dPVwiaS5zcGluXCJcbiAgICAgICAgICBbbnpUd290b25lQ29sb3JdPVwiaS50d29Ub25lQ29sb3JcIlxuICAgICAgICAgIFtuekljb25mb250XT1cImkuaWNvbmZvbnRcIlxuICAgICAgICAgIFtuelJvdGF0ZV09XCJpLnJvdGF0ZVwiXG4gICAgICAgID48L2k+XG4gICAgICB9XG4gICAgICBAY2FzZSAoJ2ljb25mb250Jykge1xuICAgICAgICA8aSBjbGFzcz1cInNpZGViYXItbmF2X19pdGVtLWljb25cIiBuei1pY29uIFtuekljb25mb250XT1cImkuaWNvbmZvbnRcIj48L2k+XG4gICAgICB9XG4gICAgICBAY2FzZSAoJ2ltZycpIHtcbiAgICAgICAgPGltZyBbc3JjXT1cImkudmFsdWVcIiBjbGFzcz1cInNpZGViYXItbmF2X19pdGVtLWljb24gc2lkZWJhci1uYXZfX2l0ZW0taW1nXCIgLz5cbiAgICAgIH1cbiAgICAgIEBjYXNlICgnc3ZnJykge1xuICAgICAgICA8c3BhbiBjbGFzcz1cInNpZGViYXItbmF2X19pdGVtLWljb24gc2lkZWJhci1uYXZfX2l0ZW0tc3ZnXCIgW2lubmVySFRNTF09XCJpLnZhbHVlXCI+PC9zcGFuPlxuICAgICAgfVxuICAgICAgQGRlZmF1bHQge1xuICAgICAgICA8aSBjbGFzcz1cInNpZGViYXItbmF2X19pdGVtLWljb24ge3sgaS52YWx1ZSB9fVwiPjwvaT5cbiAgICAgIH1cbiAgICB9XG4gIH1cbjwvbmctdGVtcGxhdGU+XG48bmctdGVtcGxhdGUgI3RyZWUgbGV0LWxzPlxuICBAZm9yIChpIG9mIGxzOyB0cmFjayAkaW5kZXgpIHtcbiAgICBAaWYgKGkuX2hpZGRlbiAhPT0gdHJ1ZSkge1xuICAgICAgPGxpIGNsYXNzPVwic2lkZWJhci1uYXZfX2l0ZW1cIiBbY2xhc3Muc2lkZWJhci1uYXZfX3NlbGVjdGVkXT1cImkuX3NlbGVjdGVkXCIgW2NsYXNzLnNpZGViYXItbmF2X19vcGVuXT1cImkub3BlblwiPlxuICAgICAgICA8IS0tIGxpbmsgLS0+XG4gICAgICAgIEBpZiAoaS5jaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICA8YVxuICAgICAgICAgICAgKGNsaWNrKT1cInRvKGkpXCJcbiAgICAgICAgICAgIFthdHRyLmRhdGEtaWRdPVwiaS5faWRcIlxuICAgICAgICAgICAgY2xhc3M9XCJzaWRlYmFyLW5hdl9faXRlbS1saW5rXCJcbiAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsgJ3NpZGViYXItbmF2X19pdGVtLWRpc2FibGVkJzogaS5kaXNhYmxlZCB9XCJcbiAgICAgICAgICAgIChtb3VzZWVudGVyKT1cImNsb3NlU3ViTWVudSgpXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBAaWYgKGkuX25lZWRJY29uKSB7XG4gICAgICAgICAgICAgIEBpZiAoY29sbGFwc2VkKSB7XG4gICAgICAgICAgICAgICAgPHNwYW4gbnotdG9vbHRpcCBuelRvb2x0aXBQbGFjZW1lbnQ9XCJyaWdodFwiIFtuelRvb2x0aXBUaXRsZV09XCJpLnRleHRcIj5cbiAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJpY29uXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBpLmljb24gfVwiIC8+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICB9IEBlbHNlIHtcbiAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiaWNvblwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogaS5pY29uIH1cIiAvPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNpZGViYXItbmF2X19pdGVtLXRleHRcIiBbaW5uZXJIVE1MXT1cImkuX3RleHRcIiBbYXR0ci50aXRsZV09XCJpLnRleHRcIj48L3NwYW4+XG4gICAgICAgICAgPC9hPlxuICAgICAgICB9XG4gICAgICAgIDwhLS0gaGFzIGNoaWxkcmVuIGxpbmsgLS0+XG4gICAgICAgIEBpZiAoaS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgPGEgKGNsaWNrKT1cInRvZ2dsZU9wZW4oaSlcIiAobW91c2VlbnRlcik9XCJzaG93U3ViTWVudSgkZXZlbnQsIGkpXCIgY2xhc3M9XCJzaWRlYmFyLW5hdl9faXRlbS1saW5rXCI+XG4gICAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiaWNvblwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogaS5pY29uIH1cIiAvPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzaWRlYmFyLW5hdl9faXRlbS10ZXh0XCIgW2lubmVySFRNTF09XCJpLl90ZXh0XCIgW2F0dHIudGl0bGVdPVwiaS50ZXh0XCI+PC9zcGFuPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJzaWRlYmFyLW5hdl9fc3ViLWFycm93XCI+PC9pPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgfVxuICAgICAgICA8IS0tIGJhZGdlIC0tPlxuICAgICAgICBAaWYgKGkuYmFkZ2UpIHtcbiAgICAgICAgICA8bnotYmFkZ2UgW256Q291bnRdPVwiaS5iYWRnZVwiIFtuekRvdF09XCJpLmJhZGdlRG90XCIgbnpTdGFuZGFsb25lIFtuek92ZXJmbG93Q291bnRdPVwiOVwiIC8+XG4gICAgICAgIH1cbiAgICAgICAgQGlmIChpLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICA8dWwgY2xhc3M9XCJzaWRlYmFyLW5hdiBzaWRlYmFyLW5hdl9fc3ViIHNpZGViYXItbmF2X19kZXB0aHt7IGkuX2RlcHRoIH19XCI+XG4gICAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwidHJlZVwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogaS5jaGlsZHJlbiB9XCIgLz5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICB9XG4gICAgICA8L2xpPlxuICAgIH1cbiAgfVxuPC9uZy10ZW1wbGF0ZT5cbjx1bCBjbGFzcz1cInNpZGViYXItbmF2XCI+XG4gIEBmb3IgKGdyb3VwIG9mIGxpc3Q7IHRyYWNrICRpbmRleCkge1xuICAgIEBpZiAoZ3JvdXAuZ3JvdXApIHtcbiAgICAgIDxsaSBjbGFzcz1cInNpZGViYXItbmF2X19pdGVtIHNpZGViYXItbmF2X19ncm91cC10aXRsZVwiPlxuICAgICAgICA8c3BhbiBbaW5uZXJIVE1MXT1cImdyb3VwLl90ZXh0XCI+PC9zcGFuPlxuICAgICAgPC9saT5cbiAgICB9XG4gICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRyZWVcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IGdyb3VwLmNoaWxkcmVuIH1cIiAvPlxuICB9XG48L3VsPlxuIl19