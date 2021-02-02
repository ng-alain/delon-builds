import { DOCUMENT, NgForOf, NgTemplateOutlet, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, NgClass, CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { ɵɵngDeclareComponent, ɵsetClassMetadata, Component, ViewChild, Input, ɵɵdirectiveInject, ElementRef, Renderer2, Inject, ContentChildren, ɵɵngDeclareDirective, Directive, ChangeDetectorRef, ChangeDetectionStrategy, EventEmitter, NgZone, ViewEncapsulation, Optional, Output, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule, ɵɵsetComponentScope } from '@angular/core';
import { RouteConfigLoadStart, NavigationError, NavigationCancel, NavigationEnd, RouteConfigLoadEnd, Router, RouterLinkWithHref, RouterModule } from '@angular/router';
import { SettingsService, MenuService, WINDOW } from '@delon/theme';
import { updateHostClass } from '@delon/util/browser';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Subject } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';
import { NzTooltipDirective, NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { __decorate, __metadata } from 'tslib';
import { Directionality } from '@angular/cdk/bidi';
import { DomSanitizer } from '@angular/platform-browser';
import { InputBoolean, InputNumber } from '@delon/util/decorator';

class LayoutDefaultHeaderItemComponent {
    constructor() {
        this.hidden = 'none';
        this.direction = 'right';
    }
}
/** @nocollapse */ LayoutDefaultHeaderItemComponent.ɵfac = function LayoutDefaultHeaderItemComponent_Factory(t) { return new (t || LayoutDefaultHeaderItemComponent)(); };
/** @nocollapse */ LayoutDefaultHeaderItemComponent.ɵcmp = ɵɵngDeclareComponent({ version: "11.1.1", type: LayoutDefaultHeaderItemComponent, selector: "layout-default-header-item", inputs: { hidden: "hidden", direction: "direction" }, viewQueries: [{ propertyName: "host", first: true, predicate: ["host"], emitDistinctChangesOnly: false, descendants: true, static: true }], ngImport: i0, template: `
    <ng-template #host>
      <ng-content></ng-content>
    </ng-template>
  `, isInline: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(LayoutDefaultHeaderItemComponent, [{
        type: Component,
        args: [{
                selector: 'layout-default-header-item',
                template: `
    <ng-template #host>
      <ng-content></ng-content>
    </ng-template>
  `,
            }]
    }], null, { host: [{
            type: ViewChild,
            args: ['host', { static: true }]
        }], hidden: [{
            type: Input
        }], direction: [{
            type: Input
        }] }); })();

class LayoutDefaultComponent {
    constructor(router, msgSrv, settings, el, renderer, doc) {
        this.settings = settings;
        this.el = el;
        this.renderer = renderer;
        this.doc = doc;
        this.destroy$ = new Subject();
        this.isFetching = false;
        // scroll to top in change page
        router.events.pipe(takeUntil(this.destroy$)).subscribe(evt => {
            if (!this.isFetching && evt instanceof RouteConfigLoadStart) {
                this.isFetching = true;
            }
            if (evt instanceof NavigationError || evt instanceof NavigationCancel) {
                this.isFetching = false;
                if (evt instanceof NavigationError) {
                    msgSrv.error(`Could not load ${evt.url} route`, { nzDuration: 1000 * 3 });
                }
                return;
            }
            if (!(evt instanceof NavigationEnd || evt instanceof RouteConfigLoadEnd)) {
                return;
            }
            if (this.isFetching) {
                setTimeout(() => {
                    this.isFetching = false;
                }, 100);
            }
        });
    }
    setClass() {
        const { el, doc, renderer, settings } = this;
        const layout = settings.layout;
        updateHostClass(el.nativeElement, renderer, {
            ['alain-default']: true,
            [`alain-default__fixed`]: layout.fixed,
            [`alain-default__collapsed`]: layout.collapsed,
        });
        doc.body.classList[layout.colorWeak ? 'add' : 'remove']('color-weak');
    }
    ngOnInit() {
        if (this.options == null) {
            throw new Error(`Please specify the [options] parameter, otherwise the layout display cannot be completed`);
        }
        const { settings, destroy$ } = this;
        settings.notify.pipe(takeUntil(destroy$)).subscribe(() => this.setClass());
        this.setClass();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
/** @nocollapse */ LayoutDefaultComponent.ɵfac = function LayoutDefaultComponent_Factory(t) { return new (t || LayoutDefaultComponent)(ɵɵdirectiveInject(Router), ɵɵdirectiveInject(NzMessageService), ɵɵdirectiveInject(SettingsService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(DOCUMENT)); };
/** @nocollapse */ LayoutDefaultComponent.ɵcmp = ɵɵngDeclareComponent({ version: "11.1.1", type: LayoutDefaultComponent, selector: "layout-default", inputs: { options: "options", asideUser: "asideUser", nav: "nav", content: "content" }, queries: [{ propertyName: "headerItems", predicate: LayoutDefaultHeaderItemComponent, emitDistinctChangesOnly: false }], ngImport: i0, template: `
    <div class="alain-default__progress-bar" *ngIf="isFetching"></div>
    <layout-default-header></layout-default-header>
    <div class="alain-default__aside">
      <div class="alain-default__aside-inner">
        <ng-container *ngTemplateOutlet="asideUser"></ng-container>
        <ng-container *ngTemplateOutlet="nav"></ng-container>
        <layout-default-nav class="d-block py-lg"></layout-default-nav>
      </div>
    </div>
    <section class="alain-default__content">
      <ng-container *ngTemplateOutlet="content"></ng-container>
      <ng-content></ng-content>
    </section>
  `, isInline: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(LayoutDefaultComponent, [{
        type: Component,
        args: [{
                selector: 'layout-default',
                template: `
    <div class="alain-default__progress-bar" *ngIf="isFetching"></div>
    <layout-default-header></layout-default-header>
    <div class="alain-default__aside">
      <div class="alain-default__aside-inner">
        <ng-container *ngTemplateOutlet="asideUser"></ng-container>
        <ng-container *ngTemplateOutlet="nav"></ng-container>
        <layout-default-nav class="d-block py-lg"></layout-default-nav>
      </div>
    </div>
    <section class="alain-default__content">
      <ng-container *ngTemplateOutlet="content"></ng-container>
      <ng-content></ng-content>
    </section>
  `,
            }]
    }], function () { return [{ type: Router }, { type: NzMessageService }, { type: SettingsService }, { type: ElementRef }, { type: Renderer2 }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, { headerItems: [{
            type: ContentChildren,
            args: [LayoutDefaultHeaderItemComponent, { descendants: false }]
        }], options: [{
            type: Input
        }], asideUser: [{
            type: Input
        }], nav: [{
            type: Input
        }], content: [{
            type: Input
        }] }); })();

class LayoutDefaultHeaderItemTriggerDirective {
}
/** @nocollapse */ LayoutDefaultHeaderItemTriggerDirective.ɵfac = function LayoutDefaultHeaderItemTriggerDirective_Factory(t) { return new (t || LayoutDefaultHeaderItemTriggerDirective)(); };
/** @nocollapse */ LayoutDefaultHeaderItemTriggerDirective.ɵdir = ɵɵngDeclareDirective({ version: "11.1.1", type: LayoutDefaultHeaderItemTriggerDirective, selector: "[layout-default-header-item-trigger]", host: { properties: { "class.alain-default__nav-item": "true" } }, ngImport: i0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(LayoutDefaultHeaderItemTriggerDirective, [{
        type: Directive,
        args: [{
                selector: '[layout-default-header-item-trigger]',
                host: {
                    '[class.alain-default__nav-item]': `true`,
                },
            }]
    }], null, null); })();

class LayoutDefaultHeaderComponent {
    constructor(settings, parent, cdr) {
        this.settings = settings;
        this.parent = parent;
        this.cdr = cdr;
        this.destroy$ = new Subject();
        this.left = [];
        this.middle = [];
        this.right = [];
    }
    get options() {
        return this.parent.options;
    }
    get app() {
        return this.settings.app;
    }
    get collapsed() {
        return this.settings.layout.collapsed;
    }
    get collapsedIcon() {
        let type = this.collapsed ? 'unfold' : 'fold';
        if (this.settings.layout.direction === 'rtl') {
            type = this.collapsed ? 'fold' : 'unfold';
        }
        return `menu-${type}`;
    }
    refresh() {
        const arr = this.parent.headerItems.toArray();
        this.left = arr.filter(i => i.direction === 'left');
        this.middle = arr.filter(i => i.direction === 'middle');
        this.right = arr.filter(i => i.direction === 'right');
        this.cdr.detectChanges();
    }
    ngAfterViewInit() {
        this.parent.headerItems.changes.pipe(takeUntil(this.destroy$)).subscribe(() => this.refresh());
        this.refresh();
    }
    toggleCollapsed() {
        this.settings.setLayout('collapsed', !this.settings.layout.collapsed);
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
/** @nocollapse */ LayoutDefaultHeaderComponent.ɵfac = function LayoutDefaultHeaderComponent_Factory(t) { return new (t || LayoutDefaultHeaderComponent)(ɵɵdirectiveInject(SettingsService), ɵɵdirectiveInject(LayoutDefaultComponent), ɵɵdirectiveInject(ChangeDetectorRef)); };
/** @nocollapse */ LayoutDefaultHeaderComponent.ɵcmp = ɵɵngDeclareComponent({ version: "11.1.1", type: LayoutDefaultHeaderComponent, selector: "layout-default-header", host: { properties: { "class.alain-default__header": "true" } }, ngImport: i0, template: `
    <ng-template #render let-ls>
      <li *ngFor="let i of ls" [class.hidden-mobile]="i.hidden === 'mobile'" [class.hidden-pc]="i.hidden === 'pc'">
        <ng-container *ngTemplateOutlet="i.host"></ng-container>
      </li>
    </ng-template>
    <div class="alain-default__header-logo">
      <a [routerLink]="['/']" class="alain-default__header-logo-link">
        <img class="alain-default__header-logo-expanded" [attr.src]="options.logoExpanded" [attr.alt]="app.name" style="max-height: 40px" />
        <img
          class="alain-default__header-logo-collapsed"
          [attr.src]="options.logoCollapsed"
          [attr.alt]="app.name"
          style="max-height: 30px"
        />
      </a>
    </div>
    <div class="alain-default__nav-wrap">
      <ul class="alain-default__nav">
        <li>
          <div class="alain-default__nav-item" (click)="toggleCollapsed()">
            <i nz-icon [nzType]="collapsedIcon"></i>
          </div>
        </li>
        <ng-template [ngTemplateOutlet]="render" [ngTemplateOutletContext]="{ $implicit: left }"></ng-template>
      </ul>
      <div *ngIf="middle.length > 0" class="alain-default__nav alain-default__nav-middle">
        <ng-container *ngTemplateOutlet="middle[0].host"></ng-container>
      </div>
      <ul class="alain-default__nav">
        <ng-template [ngTemplateOutlet]="render" [ngTemplateOutletContext]="{ $implicit: right }"></ng-template>
      </ul>
    </div>
  `, isInline: true, directives: [{ type: NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }, { type: RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["routerLink", "target", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo"] }, { type: NzIconDirective, selector: "[nz-icon]", inputs: ["nzRotate", "nzSpin", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: ChangeDetectionStrategy.OnPush });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(LayoutDefaultHeaderComponent, [{
        type: Component,
        args: [{
                selector: 'layout-default-header',
                template: `
    <ng-template #render let-ls>
      <li *ngFor="let i of ls" [class.hidden-mobile]="i.hidden === 'mobile'" [class.hidden-pc]="i.hidden === 'pc'">
        <ng-container *ngTemplateOutlet="i.host"></ng-container>
      </li>
    </ng-template>
    <div class="alain-default__header-logo">
      <a [routerLink]="['/']" class="alain-default__header-logo-link">
        <img class="alain-default__header-logo-expanded" [attr.src]="options.logoExpanded" [attr.alt]="app.name" style="max-height: 40px" />
        <img
          class="alain-default__header-logo-collapsed"
          [attr.src]="options.logoCollapsed"
          [attr.alt]="app.name"
          style="max-height: 30px"
        />
      </a>
    </div>
    <div class="alain-default__nav-wrap">
      <ul class="alain-default__nav">
        <li>
          <div class="alain-default__nav-item" (click)="toggleCollapsed()">
            <i nz-icon [nzType]="collapsedIcon"></i>
          </div>
        </li>
        <ng-template [ngTemplateOutlet]="render" [ngTemplateOutletContext]="{ $implicit: left }"></ng-template>
      </ul>
      <div *ngIf="middle.length > 0" class="alain-default__nav alain-default__nav-middle">
        <ng-container *ngTemplateOutlet="middle[0].host"></ng-container>
      </div>
      <ul class="alain-default__nav">
        <ng-template [ngTemplateOutlet]="render" [ngTemplateOutletContext]="{ $implicit: right }"></ng-template>
      </ul>
    </div>
  `,
                host: {
                    '[class.alain-default__header]': `true`,
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: SettingsService }, { type: LayoutDefaultComponent }, { type: ChangeDetectorRef }]; }, null); })();

const SHOWCLS = 'sidebar-nav__floating-show';
const FLOATINGCLS = 'sidebar-nav__floating';
class LayoutDefaultNavComponent {
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
        this.floatingEl.classList.add(FLOATINGCLS + '-container');
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
        const allNode = this.floatingEl.querySelectorAll('.' + FLOATINGCLS);
        // tslint:disable-next-line:prefer-for-of
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
        this.ngZone.runOutsideAngular(() => {
            e.preventDefault();
            const linkNode = e.target;
            this.genFloating();
            const subNode = this.genSubNode(linkNode, item);
            this.hideAll();
            subNode.classList.add(SHOWCLS);
            this.calPos(linkNode, subNode);
        });
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
    _docClick() {
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
        var _a;
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
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(destroy$)).subscribe((direction) => {
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
/** @nocollapse */ LayoutDefaultNavComponent.ɵfac = function LayoutDefaultNavComponent_Factory(t) { return new (t || LayoutDefaultNavComponent)(ɵɵdirectiveInject(MenuService), ɵɵdirectiveInject(SettingsService), ɵɵdirectiveInject(Router), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(DomSanitizer), ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(WINDOW), ɵɵdirectiveInject(Directionality, 8)); };
/** @nocollapse */ LayoutDefaultNavComponent.ɵcmp = ɵɵngDeclareComponent({ version: "11.1.1", type: LayoutDefaultNavComponent, selector: "layout-default-nav", inputs: { disabledAcl: "disabledAcl", autoCloseUnderPad: "autoCloseUnderPad", recursivePath: "recursivePath", openStrictly: "openStrictly", maxLevelIcon: "maxLevelIcon" }, outputs: { select: "select" }, host: { listeners: { "click": "_click()", "document:click": "_docClick()" } }, ngImport: i0, template: "<ng-template #icon let-i>\n  <ng-container *ngIf=\"i\" [ngSwitch]=\"i.type\">\n    <i\n      *ngSwitchCase=\"'icon'\"\n      class=\"sidebar-nav__item-icon\"\n      nz-icon\n      [nzType]=\"i.value\"\n      [nzTheme]=\"i.theme\"\n      [nzSpin]=\"i.spin\"\n      [nzTwotoneColor]=\"i.twoToneColor\"\n      [nzIconfont]=\"i.iconfont\"\n      [nzRotate]=\"i.rotate\"\n    ></i>\n    <i *ngSwitchCase=\"'iconfont'\" class=\"sidebar-nav__item-icon\" nz-icon [nzIconfont]=\"i.iconfont\"></i>\n    <img *ngSwitchCase=\"'img'\" [src]=\"i.value\" class=\"sidebar-nav__item-icon sidebar-nav__item-img\" />\n    <i *ngSwitchDefault class=\"sidebar-nav__item-icon {{ i.value }}\"></i>\n  </ng-container>\n</ng-template>\n<ng-template #tree let-ls>\n  <ng-container *ngFor=\"let i of ls\">\n    <li *ngIf=\"i._hidden !== true\" class=\"sidebar-nav__item\" [class.sidebar-nav__selected]=\"i._selected\" [class.sidebar-nav__open]=\"i._open\">\n      <!-- link -->\n      <a\n        *ngIf=\"i.children.length === 0\"\n        (click)=\"to(i)\"\n        [attr.data-id]=\"i._id\"\n        class=\"sidebar-nav__item-link\"\n        [ngClass]=\"{ 'sidebar-nav__item-disabled': i.disabled }\"\n      >\n        <ng-container *ngIf=\"i._needIcon\">\n          <ng-container *ngIf=\"!collapsed\">\n            <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{ $implicit: i.icon }\"></ng-template>\n          </ng-container>\n          <span *ngIf=\"collapsed\" nz-tooltip nzTooltipPlacement=\"right\" [nzTooltipTitle]=\"i.text\">\n            <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{ $implicit: i.icon }\"></ng-template>\n          </span>\n        </ng-container>\n        <span class=\"sidebar-nav__item-text\" [innerHTML]=\"i._text\" [attr.title]=\"i.text\"></span>\n      </a>\n      <!-- has children link -->\n      <a *ngIf=\"i.children.length > 0\" (click)=\"toggleOpen(i)\" (mouseenter)=\"showSubMenu($event, i)\" class=\"sidebar-nav__item-link\">\n        <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{ $implicit: i.icon }\"></ng-template>\n        <span class=\"sidebar-nav__item-text\" [innerHTML]=\"i._text\" [attr.title]=\"i.text\"></span>\n        <i class=\"sidebar-nav__sub-arrow\"></i>\n      </a>\n      <!-- badge -->\n      <div *ngIf=\"i.badge\" [attr.title]=\"i.badge\" class=\"badge badge-{{ i.badgeStatus }}\" [class.badge-dot]=\"i.badgeDot\">\n        <em>{{ i.badge }}</em>\n      </div>\n      <ul *ngIf=\"i.children.length > 0\" class=\"sidebar-nav sidebar-nav__sub sidebar-nav__depth{{ i._depth }}\">\n        <ng-template [ngTemplateOutlet]=\"tree\" [ngTemplateOutletContext]=\"{ $implicit: i.children }\"></ng-template>\n      </ul>\n    </li>\n  </ng-container>\n</ng-template>\n<ul class=\"sidebar-nav\">\n  <ng-container *ngFor=\"let group of list\">\n    <li class=\"sidebar-nav__item sidebar-nav__group-title\" *ngIf=\"group.group\">\n      <span [innerHTML]=\"group._text\"></span>\n    </li>\n    <ng-template [ngTemplateOutlet]=\"tree\" [ngTemplateOutletContext]=\"{ $implicit: group.children }\"></ng-template>\n  </ng-container>\n</ul>\n", directives: [{ type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { type: NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { type: NzIconDirective, selector: "[nz-icon]", inputs: ["nzRotate", "nzSpin", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { type: NgSwitchDefault, selector: "[ngSwitchDefault]" }, { type: NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }, { type: NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipTitle", "nz-tooltip", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(LayoutDefaultNavComponent, [{
        type: Component,
        args: [{
                selector: 'layout-default-nav',
                templateUrl: './layout-nav.component.html',
                host: {
                    '(click)': '_click()',
                    '(document:click)': '_docClick()',
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], function () { return [{ type: MenuService }, { type: SettingsService }, { type: Router }, { type: Renderer2 }, { type: ChangeDetectorRef }, { type: NgZone }, { type: DomSanitizer }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: Window, decorators: [{
                type: Inject,
                args: [WINDOW]
            }] }, { type: Directionality, decorators: [{
                type: Optional
            }] }]; }, { disabledAcl: [{
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
        }] }); })();

const COMPONENTS = [
    LayoutDefaultComponent,
    LayoutDefaultNavComponent,
    LayoutDefaultHeaderComponent,
    LayoutDefaultHeaderItemComponent,
    LayoutDefaultHeaderItemTriggerDirective,
];
class LayoutDefaultModule {
}
/** @nocollapse */ LayoutDefaultModule.ɵmod = ɵɵdefineNgModule({ type: LayoutDefaultModule });
/** @nocollapse */ LayoutDefaultModule.ɵinj = ɵɵdefineInjector({ factory: function LayoutDefaultModule_Factory(t) { return new (t || LayoutDefaultModule)(); }, imports: [[CommonModule, RouterModule, NzToolTipModule, NzIconModule, NzAvatarModule, NzDropDownModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(LayoutDefaultModule, { declarations: [LayoutDefaultComponent,
        LayoutDefaultNavComponent,
        LayoutDefaultHeaderComponent,
        LayoutDefaultHeaderItemComponent,
        LayoutDefaultHeaderItemTriggerDirective], imports: [CommonModule, RouterModule, NzToolTipModule, NzIconModule, NzAvatarModule, NzDropDownModule], exports: [LayoutDefaultComponent,
        LayoutDefaultNavComponent,
        LayoutDefaultHeaderComponent,
        LayoutDefaultHeaderItemComponent,
        LayoutDefaultHeaderItemTriggerDirective] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(LayoutDefaultModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, RouterModule, NzToolTipModule, NzIconModule, NzAvatarModule, NzDropDownModule],
                declarations: COMPONENTS,
                exports: COMPONENTS,
            }]
    }], null, null); })();
ɵɵsetComponentScope(LayoutDefaultComponent, [NgIf, LayoutDefaultHeaderComponent, NgTemplateOutlet, LayoutDefaultNavComponent], []);

/**
 * Generated bundle index. Do not edit.
 */

export { LayoutDefaultComponent, LayoutDefaultHeaderComponent, LayoutDefaultHeaderItemComponent, LayoutDefaultHeaderItemTriggerDirective, LayoutDefaultModule, LayoutDefaultNavComponent };
//# sourceMappingURL=layout-default.js.map
