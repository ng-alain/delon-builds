import { __decorate } from "tslib";
import { Directionality } from '@angular/cdk/bidi';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, EventEmitter, Input, NgZone, Output, Renderer2, ViewEncapsulation, booleanAttribute, inject, numberAttribute } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DomSanitizer } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { MenuService, SettingsService } from '@delon/theme';
import { ZoneOutside } from '@delon/util/decorator';
import { WINDOW } from '@delon/util/token';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/tooltip";
import * as i3 from "ng-zorro-antd/icon";
import * as i4 from "ng-zorro-antd/badge";
const SHOWCLS = 'sidebar-nav__floating-show';
const FLOATINGCLS = 'sidebar-nav__floating';
export class LayoutDefaultNavComponent {
    constructor() {
        this.doc = inject(DOCUMENT);
        this.win = inject(WINDOW);
        this.router = inject(Router);
        this.render = inject(Renderer2);
        this.menuSrv = inject(MenuService);
        this.settings = inject(SettingsService);
        this.cdr = inject(ChangeDetectorRef);
        this.ngZone = inject(NgZone);
        this.sanitizer = inject(DomSanitizer);
        this.directionality = inject(Directionality, { optional: true });
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
    set openStrictly(value) {
        this.menuSrv.openStrictly = value;
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
        this.dir = this.directionality?.value;
        this.directionality?.change.pipe(takeUntilDestroyed(this.destroy$)).subscribe(direction => {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.5", ngImport: i0, type: LayoutDefaultNavComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.0.5", type: LayoutDefaultNavComponent, selector: "layout-default-nav", inputs: { disabledAcl: ["disabledAcl", "disabledAcl", booleanAttribute], autoCloseUnderPad: ["autoCloseUnderPad", "autoCloseUnderPad", booleanAttribute], recursivePath: ["recursivePath", "recursivePath", booleanAttribute], hideEmptyChildren: ["hideEmptyChildren", "hideEmptyChildren", booleanAttribute], openStrictly: ["openStrictly", "openStrictly", booleanAttribute], maxLevelIcon: ["maxLevelIcon", "maxLevelIcon", numberAttribute] }, outputs: { select: "select" }, host: { listeners: { "click": "_click()", "document:click": "closeSubMenu()" }, properties: { "class.d-block": "true" } }, ngImport: i0, template: "<ng-template #icon let-i>\n  @if (i) {\n    @switch (i.type) {\n      @case ('icon') {\n        <i\n          class=\"sidebar-nav__item-icon\"\n          nz-icon\n          [nzType]=\"i.value\"\n          [nzTheme]=\"i.theme\"\n          [nzSpin]=\"i.spin\"\n          [nzTwotoneColor]=\"i.twoToneColor\"\n          [nzIconfont]=\"i.iconfont\"\n          [nzRotate]=\"i.rotate\"\n        ></i>\n      }\n      @case ('iconfont') {\n        <i class=\"sidebar-nav__item-icon\" nz-icon [nzIconfont]=\"i.iconfont\"></i>\n      }\n      @case ('img') {\n        <img [src]=\"i.value\" class=\"sidebar-nav__item-icon sidebar-nav__item-img\" />\n      }\n      @case ('svg') {\n        <span class=\"sidebar-nav__item-icon sidebar-nav__item-svg\" [innerHTML]=\"i.value\"></span>\n      }\n      @default {\n        <i class=\"sidebar-nav__item-icon {{ i.value }}\"></i>\n      }\n    }\n  }\n</ng-template>\n<ng-template #tree let-ls>\n  @for (i of ls; track $index) {\n    @if (i._hidden !== true) {\n      <li class=\"sidebar-nav__item\" [class.sidebar-nav__selected]=\"i._selected\" [class.sidebar-nav__open]=\"i.open\">\n        <!-- link -->\n        @if (i.children.length === 0) {\n          <a\n            (click)=\"to(i)\"\n            [attr.data-id]=\"i._id\"\n            class=\"sidebar-nav__item-link\"\n            [ngClass]=\"{ 'sidebar-nav__item-disabled': i.disabled }\"\n            (mouseenter)=\"closeSubMenu()\"\n          >\n            @if (i._needIcon) {\n              @if (collapsed) {\n                <span nz-tooltip nzTooltipPlacement=\"right\" [nzTooltipTitle]=\"i.text\">\n                  <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{ $implicit: i.icon }\" />\n                </span>\n              } @else {\n                <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{ $implicit: i.icon }\" />\n              }\n            }\n            <span class=\"sidebar-nav__item-text\" [innerHTML]=\"i._text\" [attr.title]=\"i.text\"></span>\n          </a>\n        }\n        <!-- has children link -->\n        @if (i.children.length > 0) {\n          <a (click)=\"toggleOpen(i)\" (mouseenter)=\"showSubMenu($event, i)\" class=\"sidebar-nav__item-link\">\n            <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{ $implicit: i.icon }\" />\n            <span class=\"sidebar-nav__item-text\" [innerHTML]=\"i._text\" [attr.title]=\"i.text\"></span>\n            <i class=\"sidebar-nav__sub-arrow\"></i>\n          </a>\n        }\n        <!-- badge -->\n        @if (i.badge) {\n          <nz-badge [nzCount]=\"i.badge\" [nzDot]=\"i.badgeDot\" nzStandalone [nzOverflowCount]=\"9\" />\n        }\n        @if (i.children.length > 0) {\n          <ul class=\"sidebar-nav sidebar-nav__sub sidebar-nav__depth{{ i._depth }}\">\n            <ng-template [ngTemplateOutlet]=\"tree\" [ngTemplateOutletContext]=\"{ $implicit: i.children }\" />\n          </ul>\n        }\n      </li>\n    }\n  }\n</ng-template>\n<ul class=\"sidebar-nav\">\n  @for (group of list; track $index) {\n    @if (group.group) {\n      <li class=\"sidebar-nav__item sidebar-nav__group-title\">\n        <span [innerHTML]=\"group._text\"></span>\n      </li>\n    }\n    <ng-template [ngTemplateOutlet]=\"tree\" [ngTemplateOutletContext]=\"{ $implicit: group.children }\" />\n  }\n</ul>\n", dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i2.NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "cdkConnectedOverlayPush", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }, { kind: "directive", type: i3.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "component", type: i4.NzBadgeComponent, selector: "nz-badge", inputs: ["nzShowZero", "nzShowDot", "nzStandalone", "nzDot", "nzOverflowCount", "nzColor", "nzStyle", "nzText", "nzTitle", "nzStatus", "nzCount", "nzOffset", "nzSize"], exportAs: ["nzBadge"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
__decorate([
    ZoneOutside()
], LayoutDefaultNavComponent.prototype, "showSubMenu", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.5", ngImport: i0, type: LayoutDefaultNavComponent, decorators: [{
            type: Component,
            args: [{ selector: 'layout-default-nav', host: {
                        '(click)': '_click()',
                        '(document:click)': 'closeSubMenu()',
                        '[class.d-block]': `true`
                    }, preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<ng-template #icon let-i>\n  @if (i) {\n    @switch (i.type) {\n      @case ('icon') {\n        <i\n          class=\"sidebar-nav__item-icon\"\n          nz-icon\n          [nzType]=\"i.value\"\n          [nzTheme]=\"i.theme\"\n          [nzSpin]=\"i.spin\"\n          [nzTwotoneColor]=\"i.twoToneColor\"\n          [nzIconfont]=\"i.iconfont\"\n          [nzRotate]=\"i.rotate\"\n        ></i>\n      }\n      @case ('iconfont') {\n        <i class=\"sidebar-nav__item-icon\" nz-icon [nzIconfont]=\"i.iconfont\"></i>\n      }\n      @case ('img') {\n        <img [src]=\"i.value\" class=\"sidebar-nav__item-icon sidebar-nav__item-img\" />\n      }\n      @case ('svg') {\n        <span class=\"sidebar-nav__item-icon sidebar-nav__item-svg\" [innerHTML]=\"i.value\"></span>\n      }\n      @default {\n        <i class=\"sidebar-nav__item-icon {{ i.value }}\"></i>\n      }\n    }\n  }\n</ng-template>\n<ng-template #tree let-ls>\n  @for (i of ls; track $index) {\n    @if (i._hidden !== true) {\n      <li class=\"sidebar-nav__item\" [class.sidebar-nav__selected]=\"i._selected\" [class.sidebar-nav__open]=\"i.open\">\n        <!-- link -->\n        @if (i.children.length === 0) {\n          <a\n            (click)=\"to(i)\"\n            [attr.data-id]=\"i._id\"\n            class=\"sidebar-nav__item-link\"\n            [ngClass]=\"{ 'sidebar-nav__item-disabled': i.disabled }\"\n            (mouseenter)=\"closeSubMenu()\"\n          >\n            @if (i._needIcon) {\n              @if (collapsed) {\n                <span nz-tooltip nzTooltipPlacement=\"right\" [nzTooltipTitle]=\"i.text\">\n                  <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{ $implicit: i.icon }\" />\n                </span>\n              } @else {\n                <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{ $implicit: i.icon }\" />\n              }\n            }\n            <span class=\"sidebar-nav__item-text\" [innerHTML]=\"i._text\" [attr.title]=\"i.text\"></span>\n          </a>\n        }\n        <!-- has children link -->\n        @if (i.children.length > 0) {\n          <a (click)=\"toggleOpen(i)\" (mouseenter)=\"showSubMenu($event, i)\" class=\"sidebar-nav__item-link\">\n            <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{ $implicit: i.icon }\" />\n            <span class=\"sidebar-nav__item-text\" [innerHTML]=\"i._text\" [attr.title]=\"i.text\"></span>\n            <i class=\"sidebar-nav__sub-arrow\"></i>\n          </a>\n        }\n        <!-- badge -->\n        @if (i.badge) {\n          <nz-badge [nzCount]=\"i.badge\" [nzDot]=\"i.badgeDot\" nzStandalone [nzOverflowCount]=\"9\" />\n        }\n        @if (i.children.length > 0) {\n          <ul class=\"sidebar-nav sidebar-nav__sub sidebar-nav__depth{{ i._depth }}\">\n            <ng-template [ngTemplateOutlet]=\"tree\" [ngTemplateOutletContext]=\"{ $implicit: i.children }\" />\n          </ul>\n        }\n      </li>\n    }\n  }\n</ng-template>\n<ul class=\"sidebar-nav\">\n  @for (group of list; track $index) {\n    @if (group.group) {\n      <li class=\"sidebar-nav__item sidebar-nav__group-title\">\n        <span [innerHTML]=\"group._text\"></span>\n      </li>\n    }\n    <ng-template [ngTemplateOutlet]=\"tree\" [ngTemplateOutletContext]=\"{ $implicit: group.children }\" />\n  }\n</ul>\n" }]
        }], propDecorators: { disabledAcl: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], autoCloseUnderPad: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], recursivePath: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], hideEmptyChildren: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], openStrictly: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], maxLevelIcon: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], select: [{
                type: Output
            }], showSubMenu: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LW5hdi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90aGVtZS9sYXlvdXQtZGVmYXVsdC9sYXlvdXQtbmF2LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lL2xheW91dC1kZWZhdWx0L2xheW91dC1uYXYuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBYSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFHTixNQUFNLEVBQ04sU0FBUyxFQUNULGlCQUFpQixFQUNqQixnQkFBZ0IsRUFDaEIsTUFBTSxFQUNOLGVBQWUsRUFDaEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDaEUsT0FBTyxFQUFFLFlBQVksRUFBWSxNQUFNLDJCQUEyQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDeEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUU5QixPQUFPLEVBQTZCLFdBQVcsRUFBRSxlQUFlLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDdkYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7O0FBTzNDLE1BQU0sT0FBTyxHQUFHLDRCQUE0QixDQUFDO0FBQzdDLE1BQU0sV0FBVyxHQUFHLHVCQUF1QixDQUFDO0FBYzVDLE1B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Q1QsdUJBQXVCLENBQUMsTUFBTSxpQkFDaEMsaUJBQWlCLENBQUMsSUFBSTs4QkFvQkcsV0FBVztzQkFBbEQsS0FBSzt1QkFBQyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRTtnQkFDRSxpQkFBaUI7c0JBQXhELEtBQUs7dUJBQUMsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUU7Z0JBQ0UsYUFBYTtzQkFBcEQsS0FBSzt1QkFBQyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRTtnQkFDRSxpQkFBaUI7c0JBQXhELEtBQUs7dUJBQUMsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUU7Z0JBRWxDLFlBQVk7c0JBRGYsS0FBSzt1QkFBQyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRTtnQkFJQyxZQUFZO3NCQUFsRCxLQUFLO3VCQUFDLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRTtnQkFDbEIsTUFBTTtzQkFBeEIsTUFBTTtnQkFrR1AsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRGVzdHJveVJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBib29sZWFuQXR0cmlidXRlLFxuICBpbmplY3QsXG4gIG51bWJlckF0dHJpYnV0ZVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRha2VVbnRpbERlc3Ryb3llZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvcnhqcy1pbnRlcm9wJztcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IE5hdmlnYXRpb25FbmQsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTWVudSwgTWVudUljb24sIE1lbnVJbm5lciwgTWVudVNlcnZpY2UsIFNldHRpbmdzU2VydmljZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBab25lT3V0c2lkZSB9IGZyb20gJ0BkZWxvbi91dGlsL2RlY29yYXRvcic7XG5pbXBvcnQgeyBXSU5ET1cgfSBmcm9tICdAZGVsb24vdXRpbC90b2tlbic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmF2IGV4dGVuZHMgTWVudUlubmVyIHtcbiAgX25lZWRJY29uPzogYm9vbGVhbjtcbiAgX3RleHQ/OiBTYWZlSHRtbDtcbn1cblxuY29uc3QgU0hPV0NMUyA9ICdzaWRlYmFyLW5hdl9fZmxvYXRpbmctc2hvdyc7XG5jb25zdCBGTE9BVElOR0NMUyA9ICdzaWRlYmFyLW5hdl9fZmxvYXRpbmcnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsYXlvdXQtZGVmYXVsdC1uYXYnLFxuICB0ZW1wbGF0ZVVybDogJy4vbGF5b3V0LW5hdi5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICAnKGNsaWNrKSc6ICdfY2xpY2soKScsXG4gICAgJyhkb2N1bWVudDpjbGljayknOiAnY2xvc2VTdWJNZW51KCknLFxuICAgICdbY2xhc3MuZC1ibG9ja10nOiBgdHJ1ZWBcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIExheW91dERlZmF1bHROYXZDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgZG9jID0gaW5qZWN0KERPQ1VNRU5UKTtcbiAgcHJpdmF0ZSByZWFkb25seSB3aW4gPSBpbmplY3QoV0lORE9XKTtcbiAgcHJpdmF0ZSByZWFkb25seSByb3V0ZXIgPSBpbmplY3QoUm91dGVyKTtcbiAgcHJpdmF0ZSByZWFkb25seSByZW5kZXIgPSBpbmplY3QoUmVuZGVyZXIyKTtcbiAgcHJpdmF0ZSByZWFkb25seSBtZW51U3J2ID0gaW5qZWN0KE1lbnVTZXJ2aWNlKTtcbiAgcHJpdmF0ZSByZWFkb25seSBzZXR0aW5ncyA9IGluamVjdChTZXR0aW5nc1NlcnZpY2UpO1xuICBwcml2YXRlIHJlYWRvbmx5IGNkciA9IGluamVjdChDaGFuZ2VEZXRlY3RvclJlZik7XG4gIHByaXZhdGUgcmVhZG9ubHkgbmdab25lID0gaW5qZWN0KE5nWm9uZSk7XG4gIHByaXZhdGUgcmVhZG9ubHkgc2FuaXRpemVyID0gaW5qZWN0KERvbVNhbml0aXplcik7XG4gIHByaXZhdGUgcmVhZG9ubHkgZGlyZWN0aW9uYWxpdHkgPSBpbmplY3QoRGlyZWN0aW9uYWxpdHksIHsgb3B0aW9uYWw6IHRydWUgfSk7XG5cbiAgcHJpdmF0ZSBib2R5RWwhOiBIVE1MQm9keUVsZW1lbnQ7XG4gIHByaXZhdGUgZGVzdHJveSQgPSBpbmplY3QoRGVzdHJveVJlZik7XG4gIHByaXZhdGUgZmxvYXRpbmdFbCE6IEhUTUxEaXZFbGVtZW50O1xuICBkaXI/OiBEaXJlY3Rpb24gPSAnbHRyJztcbiAgbGlzdDogTmF2W10gPSBbXTtcblxuICBASW5wdXQoeyB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGUgfSkgZGlzYWJsZWRBY2wgPSBmYWxzZTtcbiAgQElucHV0KHsgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlIH0pIGF1dG9DbG9zZVVuZGVyUGFkID0gdHJ1ZTtcbiAgQElucHV0KHsgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlIH0pIHJlY3Vyc2l2ZVBhdGggPSB0cnVlO1xuICBASW5wdXQoeyB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGUgfSkgaGlkZUVtcHR5Q2hpbGRyZW4gPSB0cnVlO1xuICBASW5wdXQoeyB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGUgfSlcbiAgc2V0IG9wZW5TdHJpY3RseSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMubWVudVNydi5vcGVuU3RyaWN0bHkgPSB2YWx1ZTtcbiAgfVxuICBASW5wdXQoeyB0cmFuc2Zvcm06IG51bWJlckF0dHJpYnV0ZSB9KSBtYXhMZXZlbEljb24gPSAzO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgc2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxNZW51PigpO1xuXG4gIGdldCBjb2xsYXBzZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2V0dGluZ3MubGF5b3V0LmNvbGxhcHNlZDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TGlua05vZGUobm9kZTogSFRNTEVsZW1lbnQpOiBIVE1MRWxlbWVudCB8IG51bGwge1xuICAgIG5vZGUgPSBub2RlLm5vZGVOYW1lID09PSAnQScgPyBub2RlIDogKG5vZGUucGFyZW50Tm9kZSBhcyBIVE1MRWxlbWVudCk7XG4gICAgcmV0dXJuIG5vZGUubm9kZU5hbWUgIT09ICdBJyA/IG51bGwgOiBub2RlO1xuICB9XG5cbiAgcHJpdmF0ZSBmbG9hdGluZ0NsaWNrSGFuZGxlKGU6IE1vdXNlRXZlbnQpOiBib29sZWFuIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IGxpbmtOb2RlID0gdGhpcy5nZXRMaW5rTm9kZShlLnRhcmdldCBhcyBIVE1MRWxlbWVudCk7XG4gICAgaWYgKGxpbmtOb2RlID09IG51bGwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgaWQgPSArbGlua05vZGUuZGF0YXNldCEuaWQhO1xuICAgIC8vIFNob3VsZCBiZSBpbmdvcmUgY2hpbGRyZW4gdGl0bGUgdHJpZ2dlciBldmVudFxuICAgIGlmIChpc05hTihpZCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBsZXQgaXRlbTogTmF2O1xuICAgIHRoaXMubWVudVNydi52aXNpdCh0aGlzLmxpc3QsIChpOiBOYXYpID0+IHtcbiAgICAgIGlmICghaXRlbSAmJiBpLl9pZCA9PT0gaWQpIHtcbiAgICAgICAgaXRlbSA9IGk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy50byhpdGVtISk7XG4gICAgdGhpcy5oaWRlQWxsKCk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJGbG9hdGluZygpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZmxvYXRpbmdFbCkgcmV0dXJuO1xuICAgIHRoaXMuZmxvYXRpbmdFbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZmxvYXRpbmdDbGlja0hhbmRsZS5iaW5kKHRoaXMpKTtcbiAgICAvLyBmaXggaWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9uZy1hbGFpbi9kZWxvbi9pc3N1ZXMvNTJcbiAgICBpZiAodGhpcy5mbG9hdGluZ0VsLmhhc093blByb3BlcnR5KCdyZW1vdmUnKSkge1xuICAgICAgdGhpcy5mbG9hdGluZ0VsLnJlbW92ZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5mbG9hdGluZ0VsLnBhcmVudE5vZGUpIHtcbiAgICAgIHRoaXMuZmxvYXRpbmdFbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZmxvYXRpbmdFbCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZW5GbG9hdGluZygpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFyRmxvYXRpbmcoKTtcbiAgICB0aGlzLmZsb2F0aW5nRWwgPSB0aGlzLnJlbmRlci5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmZsb2F0aW5nRWwuY2xhc3NMaXN0LmFkZChgJHtGTE9BVElOR0NMU30tY29udGFpbmVyYCk7XG4gICAgdGhpcy5mbG9hdGluZ0VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5mbG9hdGluZ0NsaWNrSGFuZGxlLmJpbmQodGhpcyksIGZhbHNlKTtcbiAgICB0aGlzLmJvZHlFbC5hcHBlbmRDaGlsZCh0aGlzLmZsb2F0aW5nRWwpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5TdWJOb2RlKGxpbmtOb2RlOiBIVE1MTGlua0VsZW1lbnQsIGl0ZW06IE5hdik6IEhUTUxVTGlzdEVsZW1lbnQge1xuICAgIGNvbnN0IGlkID0gYF9zaWRlYmFyLW5hdi0ke2l0ZW0uX2lkfWA7XG4gICAgY29uc3QgY2hpbGROb2RlID0gaXRlbS5iYWRnZSA/IGxpbmtOb2RlLm5leHRFbGVtZW50U2libGluZyEubmV4dEVsZW1lbnRTaWJsaW5nISA6IGxpbmtOb2RlLm5leHRFbGVtZW50U2libGluZyE7XG4gICAgY29uc3Qgbm9kZSA9IGNoaWxkTm9kZS5jbG9uZU5vZGUodHJ1ZSkgYXMgSFRNTFVMaXN0RWxlbWVudDtcbiAgICBub2RlLmlkID0gaWQ7XG4gICAgbm9kZS5jbGFzc0xpc3QuYWRkKEZMT0FUSU5HQ0xTKTtcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAnbW91c2VsZWF2ZScsXG4gICAgICAoKSA9PiB7XG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZShTSE9XQ0xTKTtcbiAgICAgIH0sXG4gICAgICBmYWxzZVxuICAgICk7XG4gICAgdGhpcy5mbG9hdGluZ0VsLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgcHJpdmF0ZSBoaWRlQWxsKCk6IHZvaWQge1xuICAgIGNvbnN0IGFsbE5vZGUgPSB0aGlzLmZsb2F0aW5nRWwucXVlcnlTZWxlY3RvckFsbChgLiR7RkxPQVRJTkdDTFN9YCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxOb2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhbGxOb2RlW2ldLmNsYXNzTGlzdC5yZW1vdmUoU0hPV0NMUyk7XG4gICAgfVxuICB9XG5cbiAgLy8gY2FsY3VsYXRlIHRoZSBub2RlIHBvc2l0aW9uIHZhbHVlcy5cbiAgcHJpdmF0ZSBjYWxQb3MobGlua05vZGU6IEhUTUxMaW5rRWxlbWVudCwgbm9kZTogSFRNTFVMaXN0RWxlbWVudCk6IHZvaWQge1xuICAgIGNvbnN0IHJlY3QgPSBsaW5rTm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAvLyBidWc6IGh0dHBzOi8vZGV2ZWxvcGVyLm1pY3Jvc29mdC5jb20vZW4tdXMvbWljcm9zb2Z0LWVkZ2UvcGxhdGZvcm0vaXNzdWVzLzE0NzIxMDE1L1xuICAgIGNvbnN0IHNjcm9sbFRvcCA9IE1hdGgubWF4KHRoaXMuZG9jLmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AsIHRoaXMuYm9keUVsLnNjcm9sbFRvcCk7XG4gICAgY29uc3QgZG9jSGVpZ2h0ID0gTWF0aC5tYXgodGhpcy5kb2MuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCwgdGhpcy5ib2R5RWwuY2xpZW50SGVpZ2h0KTtcbiAgICBjb25zdCBzcGFjaW5nID0gNTtcbiAgICBsZXQgb2Zmc2V0SGVpZ2h0ID0gLXNwYWNpbmc7XG4gICAgaWYgKGRvY0hlaWdodCA8IHJlY3QudG9wICsgbm9kZS5jbGllbnRIZWlnaHQpIHtcbiAgICAgIG9mZnNldEhlaWdodCA9IHJlY3QudG9wICsgbm9kZS5jbGllbnRIZWlnaHQgLSBkb2NIZWlnaHQgKyBzcGFjaW5nO1xuICAgIH1cbiAgICBub2RlLnN0eWxlLnRvcCA9IGAke3JlY3QudG9wICsgc2Nyb2xsVG9wIC0gb2Zmc2V0SGVpZ2h0fXB4YDtcbiAgICBpZiAodGhpcy5kaXIgPT09ICdydGwnKSB7XG4gICAgICBub2RlLnN0eWxlLnJpZ2h0ID0gYCR7cmVjdC53aWR0aCArIHNwYWNpbmd9cHhgO1xuICAgIH0gZWxzZSB7XG4gICAgICBub2RlLnN0eWxlLmxlZnQgPSBgJHtyZWN0LnJpZ2h0ICsgc3BhY2luZ31weGA7XG4gICAgfVxuICB9XG5cbiAgQFpvbmVPdXRzaWRlKClcbiAgc2hvd1N1Yk1lbnUoZTogTW91c2VFdmVudCwgaXRlbTogTmF2KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29sbGFwc2VkICE9PSB0cnVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBsaW5rTm9kZSA9IGUudGFyZ2V0IGFzIEVsZW1lbnQ7XG4gICAgdGhpcy5nZW5GbG9hdGluZygpO1xuICAgIGNvbnN0IHN1Yk5vZGUgPSB0aGlzLmdlblN1Yk5vZGUobGlua05vZGUgYXMgSFRNTExpbmtFbGVtZW50LCBpdGVtKTtcbiAgICB0aGlzLmhpZGVBbGwoKTtcbiAgICBzdWJOb2RlLmNsYXNzTGlzdC5hZGQoU0hPV0NMUyk7XG4gICAgdGhpcy5jYWxQb3MobGlua05vZGUgYXMgSFRNTExpbmtFbGVtZW50LCBzdWJOb2RlKTtcbiAgfVxuXG4gIHRvKGl0ZW06IE1lbnUpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdC5lbWl0KGl0ZW0pO1xuICAgIGlmIChpdGVtLmRpc2FibGVkKSByZXR1cm47XG5cbiAgICBpZiAoaXRlbS5leHRlcm5hbExpbmspIHtcbiAgICAgIGlmIChpdGVtLnRhcmdldCA9PT0gJ19ibGFuaycpIHtcbiAgICAgICAgdGhpcy53aW4ub3BlbihpdGVtLmV4dGVybmFsTGluayk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLndpbi5sb2NhdGlvbi5ocmVmID0gaXRlbS5leHRlcm5hbExpbms7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKGl0ZW0ubGluayEpKTtcbiAgfVxuXG4gIHRvZ2dsZU9wZW4oaXRlbTogTmF2KTogdm9pZCB7XG4gICAgdGhpcy5tZW51U3J2LnRvZ2dsZU9wZW4oaXRlbSk7XG4gIH1cblxuICBfY2xpY2soKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNQYWQgJiYgdGhpcy5jb2xsYXBzZWQpIHtcbiAgICAgIHRoaXMub3BlbkFzaWRlKGZhbHNlKTtcbiAgICAgIHRoaXMuaGlkZUFsbCgpO1xuICAgIH1cbiAgfVxuXG4gIGNsb3NlU3ViTWVudSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jb2xsYXBzZWQpIHtcbiAgICAgIHRoaXMuaGlkZUFsbCgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgb3BlbkJ5VXJsKHVybDogc3RyaW5nIHwgbnVsbCk6IHZvaWQge1xuICAgIGNvbnN0IHsgbWVudVNydiwgcmVjdXJzaXZlUGF0aCB9ID0gdGhpcztcbiAgICB0aGlzLm1lbnVTcnYub3BlbihtZW51U3J2LmZpbmQoeyB1cmwsIHJlY3Vyc2l2ZTogcmVjdXJzaXZlUGF0aCB9KSk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IGRvYywgcm91dGVyLCBtZW51U3J2LCBzZXR0aW5ncywgY2RyIH0gPSB0aGlzO1xuICAgIHRoaXMuYm9keUVsID0gZG9jLnF1ZXJ5U2VsZWN0b3I8SFRNTEJvZHlFbGVtZW50PignYm9keScpITtcbiAgICBtZW51U3J2LmNoYW5nZS5waXBlKHRha2VVbnRpbERlc3Ryb3llZCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgbWVudVNydi52aXNpdChkYXRhLCAoaTogTmF2LCBfcCwgZGVwdGgpID0+IHtcbiAgICAgICAgaS5fdGV4dCA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKGkudGV4dCEpO1xuICAgICAgICBpLl9uZWVkSWNvbiA9IGRlcHRoISA8PSB0aGlzLm1heExldmVsSWNvbiAmJiAhIWkuaWNvbjtcbiAgICAgICAgaWYgKCFpLl9hY2xSZXN1bHQpIHtcbiAgICAgICAgICBpZiAodGhpcy5kaXNhYmxlZEFjbCkge1xuICAgICAgICAgICAgaS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGkuX2hpZGRlbiA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGljb24gPSBpLmljb24gYXMgTWVudUljb247XG4gICAgICAgIGlmIChpY29uICYmIGljb24udHlwZSA9PT0gJ3N2ZycgJiYgdHlwZW9mIGljb24udmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgaWNvbi52YWx1ZSA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKGljb24udmFsdWUhISk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKHRoaXMuaGlkZUVtcHR5Q2hpbGRyZW4pIHRoaXMuZml4SGlkZShkYXRhKTtcbiAgICAgIHRoaXMubGlzdCA9IGRhdGEuZmlsdGVyKCh3OiBOYXYpID0+IHcuX2hpZGRlbiAhPT0gdHJ1ZSk7XG4gICAgICBjZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuICAgIHJvdXRlci5ldmVudHMucGlwZSh0YWtlVW50aWxEZXN0cm95ZWQodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZShlID0+IHtcbiAgICAgIGlmIChlIGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCkge1xuICAgICAgICB0aGlzLm9wZW5CeVVybChlLnVybEFmdGVyUmVkaXJlY3RzKTtcbiAgICAgICAgdGhpcy51bmRlclBhZCgpO1xuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgc2V0dGluZ3Mubm90aWZ5XG4gICAgICAucGlwZShcbiAgICAgICAgdGFrZVVudGlsRGVzdHJveWVkKHRoaXMuZGVzdHJveSQpLFxuICAgICAgICBmaWx0ZXIodCA9PiB0LnR5cGUgPT09ICdsYXlvdXQnICYmIHQubmFtZSA9PT0gJ2NvbGxhcHNlZCcpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2xlYXJGbG9hdGluZygpKTtcbiAgICB0aGlzLnVuZGVyUGFkKCk7XG5cbiAgICB0aGlzLmRpciA9IHRoaXMuZGlyZWN0aW9uYWxpdHk/LnZhbHVlO1xuICAgIHRoaXMuZGlyZWN0aW9uYWxpdHk/LmNoYW5nZS5waXBlKHRha2VVbnRpbERlc3Ryb3llZCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKGRpcmVjdGlvbiA9PiB7XG4gICAgICB0aGlzLmRpciA9IGRpcmVjdGlvbjtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgICB0aGlzLm9wZW5CeVVybChyb3V0ZXIudXJsKTtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLmdlbkZsb2F0aW5nKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBmaXhIaWRlKGxzOiBOYXZbXSk6IHZvaWQge1xuICAgIGNvbnN0IGluRm4gPSAobGlzdDogTmF2W10pOiB2b2lkID0+IHtcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBsaXN0KSB7XG4gICAgICAgIGlmIChpdGVtLmNoaWxkcmVuICYmIGl0ZW0uY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGluRm4oaXRlbS5jaGlsZHJlbik7XG4gICAgICAgICAgaWYgKCFpdGVtLl9oaWRkZW4pIHtcbiAgICAgICAgICAgIGl0ZW0uX2hpZGRlbiA9IGl0ZW0uY2hpbGRyZW4uZXZlcnkoKHY6IE5hdikgPT4gdi5faGlkZGVuKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaW5Gbihscyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFyRmxvYXRpbmcoKTtcbiAgfVxuXG4gIC8vICNyZWdpb24gVW5kZXIgcGFkXG5cbiAgcHJpdmF0ZSBnZXQgaXNQYWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZG9jLmRlZmF1bHRWaWV3IS5pbm5lcldpZHRoIDwgNzY4O1xuICB9XG5cbiAgcHJpdmF0ZSB1bmRlclBhZCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hdXRvQ2xvc2VVbmRlclBhZCAmJiB0aGlzLmlzUGFkICYmICF0aGlzLmNvbGxhcHNlZCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLm9wZW5Bc2lkZSh0cnVlKSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBvcGVuQXNpZGUoc3RhdHVzOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5zZXR0aW5ncy5zZXRMYXlvdXQoJ2NvbGxhcHNlZCcsIHN0YXR1cyk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG59XG4iLCI8bmctdGVtcGxhdGUgI2ljb24gbGV0LWk+XG4gIEBpZiAoaSkge1xuICAgIEBzd2l0Y2ggKGkudHlwZSkge1xuICAgICAgQGNhc2UgKCdpY29uJykge1xuICAgICAgICA8aVxuICAgICAgICAgIGNsYXNzPVwic2lkZWJhci1uYXZfX2l0ZW0taWNvblwiXG4gICAgICAgICAgbnotaWNvblxuICAgICAgICAgIFtuelR5cGVdPVwiaS52YWx1ZVwiXG4gICAgICAgICAgW256VGhlbWVdPVwiaS50aGVtZVwiXG4gICAgICAgICAgW256U3Bpbl09XCJpLnNwaW5cIlxuICAgICAgICAgIFtuelR3b3RvbmVDb2xvcl09XCJpLnR3b1RvbmVDb2xvclwiXG4gICAgICAgICAgW256SWNvbmZvbnRdPVwiaS5pY29uZm9udFwiXG4gICAgICAgICAgW256Um90YXRlXT1cImkucm90YXRlXCJcbiAgICAgICAgPjwvaT5cbiAgICAgIH1cbiAgICAgIEBjYXNlICgnaWNvbmZvbnQnKSB7XG4gICAgICAgIDxpIGNsYXNzPVwic2lkZWJhci1uYXZfX2l0ZW0taWNvblwiIG56LWljb24gW256SWNvbmZvbnRdPVwiaS5pY29uZm9udFwiPjwvaT5cbiAgICAgIH1cbiAgICAgIEBjYXNlICgnaW1nJykge1xuICAgICAgICA8aW1nIFtzcmNdPVwiaS52YWx1ZVwiIGNsYXNzPVwic2lkZWJhci1uYXZfX2l0ZW0taWNvbiBzaWRlYmFyLW5hdl9faXRlbS1pbWdcIiAvPlxuICAgICAgfVxuICAgICAgQGNhc2UgKCdzdmcnKSB7XG4gICAgICAgIDxzcGFuIGNsYXNzPVwic2lkZWJhci1uYXZfX2l0ZW0taWNvbiBzaWRlYmFyLW5hdl9faXRlbS1zdmdcIiBbaW5uZXJIVE1MXT1cImkudmFsdWVcIj48L3NwYW4+XG4gICAgICB9XG4gICAgICBAZGVmYXVsdCB7XG4gICAgICAgIDxpIGNsYXNzPVwic2lkZWJhci1uYXZfX2l0ZW0taWNvbiB7eyBpLnZhbHVlIH19XCI+PC9pPlxuICAgICAgfVxuICAgIH1cbiAgfVxuPC9uZy10ZW1wbGF0ZT5cbjxuZy10ZW1wbGF0ZSAjdHJlZSBsZXQtbHM+XG4gIEBmb3IgKGkgb2YgbHM7IHRyYWNrICRpbmRleCkge1xuICAgIEBpZiAoaS5faGlkZGVuICE9PSB0cnVlKSB7XG4gICAgICA8bGkgY2xhc3M9XCJzaWRlYmFyLW5hdl9faXRlbVwiIFtjbGFzcy5zaWRlYmFyLW5hdl9fc2VsZWN0ZWRdPVwiaS5fc2VsZWN0ZWRcIiBbY2xhc3Muc2lkZWJhci1uYXZfX29wZW5dPVwiaS5vcGVuXCI+XG4gICAgICAgIDwhLS0gbGluayAtLT5cbiAgICAgICAgQGlmIChpLmNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIDxhXG4gICAgICAgICAgICAoY2xpY2spPVwidG8oaSlcIlxuICAgICAgICAgICAgW2F0dHIuZGF0YS1pZF09XCJpLl9pZFwiXG4gICAgICAgICAgICBjbGFzcz1cInNpZGViYXItbmF2X19pdGVtLWxpbmtcIlxuICAgICAgICAgICAgW25nQ2xhc3NdPVwieyAnc2lkZWJhci1uYXZfX2l0ZW0tZGlzYWJsZWQnOiBpLmRpc2FibGVkIH1cIlxuICAgICAgICAgICAgKG1vdXNlZW50ZXIpPVwiY2xvc2VTdWJNZW51KClcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIEBpZiAoaS5fbmVlZEljb24pIHtcbiAgICAgICAgICAgICAgQGlmIChjb2xsYXBzZWQpIHtcbiAgICAgICAgICAgICAgICA8c3BhbiBuei10b29sdGlwIG56VG9vbHRpcFBsYWNlbWVudD1cInJpZ2h0XCIgW256VG9vbHRpcFRpdGxlXT1cImkudGV4dFwiPlxuICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImljb25cIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IGkuaWNvbiB9XCIgLz5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIH0gQGVsc2Uge1xuICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJpY29uXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBpLmljb24gfVwiIC8+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2lkZWJhci1uYXZfX2l0ZW0tdGV4dFwiIFtpbm5lckhUTUxdPVwiaS5fdGV4dFwiIFthdHRyLnRpdGxlXT1cImkudGV4dFwiPjwvc3Bhbj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIH1cbiAgICAgICAgPCEtLSBoYXMgY2hpbGRyZW4gbGluayAtLT5cbiAgICAgICAgQGlmIChpLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICA8YSAoY2xpY2spPVwidG9nZ2xlT3BlbihpKVwiIChtb3VzZWVudGVyKT1cInNob3dTdWJNZW51KCRldmVudCwgaSlcIiBjbGFzcz1cInNpZGViYXItbmF2X19pdGVtLWxpbmtcIj5cbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJpY29uXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBpLmljb24gfVwiIC8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNpZGViYXItbmF2X19pdGVtLXRleHRcIiBbaW5uZXJIVE1MXT1cImkuX3RleHRcIiBbYXR0ci50aXRsZV09XCJpLnRleHRcIj48L3NwYW4+XG4gICAgICAgICAgICA8aSBjbGFzcz1cInNpZGViYXItbmF2X19zdWItYXJyb3dcIj48L2k+XG4gICAgICAgICAgPC9hPlxuICAgICAgICB9XG4gICAgICAgIDwhLS0gYmFkZ2UgLS0+XG4gICAgICAgIEBpZiAoaS5iYWRnZSkge1xuICAgICAgICAgIDxuei1iYWRnZSBbbnpDb3VudF09XCJpLmJhZGdlXCIgW256RG90XT1cImkuYmFkZ2VEb3RcIiBuelN0YW5kYWxvbmUgW256T3ZlcmZsb3dDb3VudF09XCI5XCIgLz5cbiAgICAgICAgfVxuICAgICAgICBAaWYgKGkuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgIDx1bCBjbGFzcz1cInNpZGViYXItbmF2IHNpZGViYXItbmF2X19zdWIgc2lkZWJhci1uYXZfX2RlcHRoe3sgaS5fZGVwdGggfX1cIj5cbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJ0cmVlXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBpLmNoaWxkcmVuIH1cIiAvPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIH1cbiAgICAgIDwvbGk+XG4gICAgfVxuICB9XG48L25nLXRlbXBsYXRlPlxuPHVsIGNsYXNzPVwic2lkZWJhci1uYXZcIj5cbiAgQGZvciAoZ3JvdXAgb2YgbGlzdDsgdHJhY2sgJGluZGV4KSB7XG4gICAgQGlmIChncm91cC5ncm91cCkge1xuICAgICAgPGxpIGNsYXNzPVwic2lkZWJhci1uYXZfX2l0ZW0gc2lkZWJhci1uYXZfX2dyb3VwLXRpdGxlXCI+XG4gICAgICAgIDxzcGFuIFtpbm5lckhUTUxdPVwiZ3JvdXAuX3RleHRcIj48L3NwYW4+XG4gICAgICA8L2xpPlxuICAgIH1cbiAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwidHJlZVwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogZ3JvdXAuY2hpbGRyZW4gfVwiIC8+XG4gIH1cbjwvdWw+XG4iXX0=