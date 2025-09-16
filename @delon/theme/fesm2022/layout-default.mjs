import * as i1 from '@angular/common';
import { DOCUMENT, CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Input, ViewChild, Component, inject, Injectable, Renderer2, ChangeDetectorRef, NgZone, DestroyRef, EventEmitter, numberAttribute, booleanAttribute, Output, ViewEncapsulation, ChangeDetectionStrategy, ElementRef, ContentChildren, Directive, NgModule } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import * as i2$1 from '@angular/router';
import { Router, NavigationEnd, RouteConfigLoadStart, NavigationError, NavigationCancel, RouteConfigLoadEnd, RouterModule } from '@angular/router';
import { BehaviorSubject, filter } from 'rxjs';
import { SettingsService, MenuService } from '@delon/theme';
import { updateHostClass } from '@delon/util/browser';
import { NzMessageService } from 'ng-zorro-antd/message';
import { BreakpointObserver } from '@angular/cdk/layout';
import * as i3 from 'ng-zorro-antd/icon';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { __decorate } from 'tslib';
import { Directionality } from '@angular/cdk/bidi';
import { DomSanitizer } from '@angular/platform-browser';
import { ZoneOutside } from '@delon/util/decorator';
import { WINDOW } from '@delon/util/token';
import * as i2 from 'ng-zorro-antd/tooltip';
import { NzTooltipModule } from 'ng-zorro-antd/tooltip';
import * as i4 from 'ng-zorro-antd/badge';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

class LayoutDefaultHeaderItemComponent {
    host;
    hidden = 'none';
    direction = 'right';
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.2", ngImport: i0, type: LayoutDefaultHeaderItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.1.2", type: LayoutDefaultHeaderItemComponent, isStandalone: false, selector: "layout-default-header-item", inputs: { hidden: "hidden", direction: "direction" }, viewQueries: [{ propertyName: "host", first: true, predicate: ["host"], descendants: true, static: true }], ngImport: i0, template: `
    <ng-template #host>
      <ng-content />
    </ng-template>
  `, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.2", ngImport: i0, type: LayoutDefaultHeaderItemComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'layout-default-header-item',
                    template: `
    <ng-template #host>
      <ng-content />
    </ng-template>
  `,
                    // eslint-disable-next-line @angular-eslint/prefer-standalone
                    standalone: false
                }]
        }], propDecorators: { host: [{
                type: ViewChild,
                args: ['host', { static: true }]
            }], hidden: [{
                type: Input
            }], direction: [{
                type: Input
            }] } });

const DEFAULT = {
    logoExpanded: `./assets/logo-full.svg`,
    logoCollapsed: `./assets/logo.svg`,
    logoLink: `/`,
    showHeaderCollapse: true,
    showSiderCollapse: false,
    hideAside: false,
    hideHeader: false
};
class LayoutDefaultService {
    settings = inject(SettingsService);
    bm = inject(BreakpointObserver);
    _options$ = new BehaviorSubject(DEFAULT);
    _options = DEFAULT;
    get options() {
        return this._options;
    }
    get options$() {
        return this._options$.asObservable();
    }
    get collapsedIcon() {
        const collapsed = this.settings.layout.collapsed;
        let type = collapsed ? 'unfold' : 'fold';
        if (this.settings.layout.direction === 'rtl') {
            type = collapsed ? 'fold' : 'unfold';
        }
        return `menu-${type}`;
    }
    constructor() {
        const mobileMedia = 'only screen and (max-width: 767.99px)';
        this.bm
            .observe(mobileMedia)
            .pipe(takeUntilDestroyed())
            .subscribe(state => this.checkMedia(state.matches));
        this.checkMedia(this.bm.isMatched(mobileMedia));
    }
    checkMedia(value) {
        this.settings.setLayout('collapsed', value);
    }
    notify() {
        this._options$.next(this._options);
    }
    /**
     * Set layout configuration
     *
     * 设置布局配置
     */
    setOptions(options) {
        this._options = {
            ...DEFAULT,
            ...options
        };
        this.notify();
    }
    /**
     * Toggle the collapsed state of the sidebar menu bar
     *
     * 切换侧边栏菜单栏折叠状态
     */
    toggleCollapsed(status) {
        this.settings.setLayout('collapsed', status != null ? status : !this.settings.layout.collapsed);
        this.notify();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.2", ngImport: i0, type: LayoutDefaultService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.1.2", ngImport: i0, type: LayoutDefaultService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.2", ngImport: i0, type: LayoutDefaultService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: () => [] });

const SHOWCLS = 'sidebar-nav__floating-show';
const FLOATINGCLS = 'sidebar-nav__floating';
class LayoutDefaultNavComponent {
    doc = inject(DOCUMENT);
    win = inject(WINDOW);
    router = inject(Router);
    render = inject(Renderer2);
    menuSrv = inject(MenuService);
    settings = inject(SettingsService);
    cdr = inject(ChangeDetectorRef);
    ngZone = inject(NgZone);
    sanitizer = inject(DomSanitizer);
    bodyEl;
    destroy$ = inject(DestroyRef);
    floatingEl;
    dir = inject(Directionality).valueSignal;
    list = [];
    disabledAcl = false;
    autoCloseUnderPad = true;
    recursivePath = true;
    hideEmptyChildren = true;
    set openStrictly(value) {
        this.menuSrv.openStrictly = value;
    }
    maxLevelIcon = 3;
    select = new EventEmitter();
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
        this.floatingEl.parentNode?.removeChild(this.floatingEl);
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
        allNode.forEach(node => node.classList.remove(SHOWCLS));
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
        if (this.dir() === 'rtl') {
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.2", ngImport: i0, type: LayoutDefaultNavComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.1.2", type: LayoutDefaultNavComponent, isStandalone: false, selector: "layout-default-nav", inputs: { disabledAcl: ["disabledAcl", "disabledAcl", booleanAttribute], autoCloseUnderPad: ["autoCloseUnderPad", "autoCloseUnderPad", booleanAttribute], recursivePath: ["recursivePath", "recursivePath", booleanAttribute], hideEmptyChildren: ["hideEmptyChildren", "hideEmptyChildren", booleanAttribute], openStrictly: ["openStrictly", "openStrictly", booleanAttribute], maxLevelIcon: ["maxLevelIcon", "maxLevelIcon", numberAttribute] }, outputs: { select: "select" }, host: { listeners: { "click": "_click()", "document:click": "closeSubMenu()" }, properties: { "class.d-block": "true" } }, ngImport: i0, template: "<ng-template #icon let-i>\n  @if (i) {\n    @switch (i.type) {\n      @case ('icon') {\n        <nz-icon\n          class=\"sidebar-nav__item-icon\"\n          [nzType]=\"i.value\"\n          [nzTheme]=\"i.theme\"\n          [nzSpin]=\"i.spin\"\n          [nzTwotoneColor]=\"i.twoToneColor\"\n          [nzIconfont]=\"i.iconfont\"\n          [nzRotate]=\"i.rotate\"\n        />\n      }\n      @case ('iconfont') {\n        <nz-icon class=\"sidebar-nav__item-icon\" [nzIconfont]=\"i.iconfont\" />\n      }\n      @case ('img') {\n        <img [src]=\"i.value\" class=\"sidebar-nav__item-icon sidebar-nav__item-img\" />\n      }\n      @case ('svg') {\n        <span class=\"sidebar-nav__item-icon sidebar-nav__item-svg\" [innerHTML]=\"i.value\"></span>\n      }\n      @default {\n        <i class=\"sidebar-nav__item-icon {{ i.value }}\"></i>\n      }\n    }\n  }\n</ng-template>\n<ng-template #tree let-ls>\n  @for (i of ls; track $index) {\n    @if (i._hidden !== true) {\n      @if (i.render_type === 'divider') {\n        <li class=\"sidebar-nav__divider\"></li>\n      }@else {\n        <li class=\"sidebar-nav__item\" [class.sidebar-nav__selected]=\"i._selected\" [class.sidebar-nav__open]=\"i.open\">\n          <!-- link -->\n          @if (i.children.length === 0) {\n            <a\n              (click)=\"to(i)\"\n              [attr.data-id]=\"i._id\"\n              class=\"sidebar-nav__item-link\"\n              [class.sidebar-nav__item-disabled]=\"i.disabled\"\n              (mouseenter)=\"closeSubMenu()\"\n            >\n              @if (i._needIcon) {\n                @if (collapsed) {\n                  <span nz-tooltip nzTooltipPlacement=\"right\" [nzTooltipTitle]=\"i.text\">\n                    <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{ $implicit: i.icon }\" />\n                  </span>\n                } @else {\n                  <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{ $implicit: i.icon }\" />\n                }\n              }\n              <span class=\"sidebar-nav__item-text\" [innerHTML]=\"i._text\" [attr.title]=\"i.text\"></span>\n            </a>\n          }\n          <!-- has children link -->\n          @if (i.children.length > 0) {\n            <a (click)=\"toggleOpen(i)\" (mouseenter)=\"showSubMenu($event, i)\" class=\"sidebar-nav__item-link\">\n              <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{ $implicit: i.icon }\" />\n              <span class=\"sidebar-nav__item-text\" [innerHTML]=\"i._text\" [attr.title]=\"i.text\"></span>\n              <i class=\"sidebar-nav__sub-arrow\"></i>\n            </a>\n          }\n          <!-- badge -->\n          @if (i.badge) {\n            <nz-badge\n              [nzCount]=\"i.badge\"\n              [nzDot]=\"i.badgeDot\"\n              nzStandalone\n              [nzOverflowCount]=\"i.badgeOverflowCount ? i.badgeOverflowCount : 9\"\n            />\n          }\n          @if (i.children.length > 0) {\n            <ul class=\"sidebar-nav sidebar-nav__sub sidebar-nav__depth{{ i._depth }}\">\n              <ng-template [ngTemplateOutlet]=\"tree\" [ngTemplateOutletContext]=\"{ $implicit: i.children }\" />\n            </ul>\n          }\n        </li>\n      }\n    }\n  }\n</ng-template>\n<ul class=\"sidebar-nav\">\n  @for (group of list; track $index) {\n    @if (group.group) {\n      <li class=\"sidebar-nav__item sidebar-nav__group-title\">\n        <span [innerHTML]=\"group._text\"></span>\n      </li>\n    }\n    <ng-template [ngTemplateOutlet]=\"tree\" [ngTemplateOutletContext]=\"{ $implicit: group.children }\" />\n  }\n</ul>\n", dependencies: [{ kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i2.NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "cdkConnectedOverlayPush", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }, { kind: "directive", type: i3.NzIconDirective, selector: "nz-icon,[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "component", type: i4.NzBadgeComponent, selector: "nz-badge", inputs: ["nzShowZero", "nzShowDot", "nzStandalone", "nzDot", "nzOverflowCount", "nzColor", "nzStyle", "nzText", "nzTitle", "nzStatus", "nzCount", "nzOffset", "nzSize"], exportAs: ["nzBadge"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
__decorate([
    ZoneOutside()
], LayoutDefaultNavComponent.prototype, "showSubMenu", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.2", ngImport: i0, type: LayoutDefaultNavComponent, decorators: [{
            type: Component,
            args: [{ selector: 'layout-default-nav', host: {
                        '(click)': '_click()',
                        '(document:click)': 'closeSubMenu()',
                        '[class.d-block]': `true`
                    }, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, standalone: false, template: "<ng-template #icon let-i>\n  @if (i) {\n    @switch (i.type) {\n      @case ('icon') {\n        <nz-icon\n          class=\"sidebar-nav__item-icon\"\n          [nzType]=\"i.value\"\n          [nzTheme]=\"i.theme\"\n          [nzSpin]=\"i.spin\"\n          [nzTwotoneColor]=\"i.twoToneColor\"\n          [nzIconfont]=\"i.iconfont\"\n          [nzRotate]=\"i.rotate\"\n        />\n      }\n      @case ('iconfont') {\n        <nz-icon class=\"sidebar-nav__item-icon\" [nzIconfont]=\"i.iconfont\" />\n      }\n      @case ('img') {\n        <img [src]=\"i.value\" class=\"sidebar-nav__item-icon sidebar-nav__item-img\" />\n      }\n      @case ('svg') {\n        <span class=\"sidebar-nav__item-icon sidebar-nav__item-svg\" [innerHTML]=\"i.value\"></span>\n      }\n      @default {\n        <i class=\"sidebar-nav__item-icon {{ i.value }}\"></i>\n      }\n    }\n  }\n</ng-template>\n<ng-template #tree let-ls>\n  @for (i of ls; track $index) {\n    @if (i._hidden !== true) {\n      @if (i.render_type === 'divider') {\n        <li class=\"sidebar-nav__divider\"></li>\n      }@else {\n        <li class=\"sidebar-nav__item\" [class.sidebar-nav__selected]=\"i._selected\" [class.sidebar-nav__open]=\"i.open\">\n          <!-- link -->\n          @if (i.children.length === 0) {\n            <a\n              (click)=\"to(i)\"\n              [attr.data-id]=\"i._id\"\n              class=\"sidebar-nav__item-link\"\n              [class.sidebar-nav__item-disabled]=\"i.disabled\"\n              (mouseenter)=\"closeSubMenu()\"\n            >\n              @if (i._needIcon) {\n                @if (collapsed) {\n                  <span nz-tooltip nzTooltipPlacement=\"right\" [nzTooltipTitle]=\"i.text\">\n                    <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{ $implicit: i.icon }\" />\n                  </span>\n                } @else {\n                  <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{ $implicit: i.icon }\" />\n                }\n              }\n              <span class=\"sidebar-nav__item-text\" [innerHTML]=\"i._text\" [attr.title]=\"i.text\"></span>\n            </a>\n          }\n          <!-- has children link -->\n          @if (i.children.length > 0) {\n            <a (click)=\"toggleOpen(i)\" (mouseenter)=\"showSubMenu($event, i)\" class=\"sidebar-nav__item-link\">\n              <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{ $implicit: i.icon }\" />\n              <span class=\"sidebar-nav__item-text\" [innerHTML]=\"i._text\" [attr.title]=\"i.text\"></span>\n              <i class=\"sidebar-nav__sub-arrow\"></i>\n            </a>\n          }\n          <!-- badge -->\n          @if (i.badge) {\n            <nz-badge\n              [nzCount]=\"i.badge\"\n              [nzDot]=\"i.badgeDot\"\n              nzStandalone\n              [nzOverflowCount]=\"i.badgeOverflowCount ? i.badgeOverflowCount : 9\"\n            />\n          }\n          @if (i.children.length > 0) {\n            <ul class=\"sidebar-nav sidebar-nav__sub sidebar-nav__depth{{ i._depth }}\">\n              <ng-template [ngTemplateOutlet]=\"tree\" [ngTemplateOutletContext]=\"{ $implicit: i.children }\" />\n            </ul>\n          }\n        </li>\n      }\n    }\n  }\n</ng-template>\n<ul class=\"sidebar-nav\">\n  @for (group of list; track $index) {\n    @if (group.group) {\n      <li class=\"sidebar-nav__item sidebar-nav__group-title\">\n        <span [innerHTML]=\"group._text\"></span>\n      </li>\n    }\n    <ng-template [ngTemplateOutlet]=\"tree\" [ngTemplateOutletContext]=\"{ $implicit: group.children }\" />\n  }\n</ul>\n" }]
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

class LayoutDefaultHeaderComponent {
    settings = inject(SettingsService);
    srv = inject(LayoutDefaultService);
    cdr = inject(ChangeDetectorRef);
    destroy$ = inject(DestroyRef);
    items;
    left = [];
    middle = [];
    right = [];
    get opt() {
        return this.srv.options;
    }
    get app() {
        return this.settings.app;
    }
    get collapsed() {
        return this.settings.layout.collapsed;
    }
    get collapsedIcon() {
        return this.srv.collapsedIcon;
    }
    refresh() {
        const arr = this.items.toArray();
        this.left = arr.filter(i => i.direction === 'left');
        this.middle = arr.filter(i => i.direction === 'middle');
        this.right = arr.filter(i => i.direction === 'right');
        this.cdr.detectChanges();
    }
    ngAfterViewInit() {
        this.items.changes.pipe(takeUntilDestroyed(this.destroy$)).subscribe(() => this.refresh());
        this.srv.options$.pipe(takeUntilDestroyed(this.destroy$)).subscribe(() => this.cdr.detectChanges());
        this.refresh();
    }
    toggleCollapsed() {
        this.srv.toggleCollapsed();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.2", ngImport: i0, type: LayoutDefaultHeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.1.2", type: LayoutDefaultHeaderComponent, isStandalone: false, selector: "layout-default-header", inputs: { items: "items" }, host: { properties: { "class.alain-default__header": "true" } }, ngImport: i0, template: `
    <ng-template #render let-ls>
      @for (i of ls; track $index) {
        <li [class.hidden-mobile]="i.hidden === 'mobile'" [class.hidden-pc]="i.hidden === 'pc'">
          <ng-container *ngTemplateOutlet="i.host" />
        </li>
      }
    </ng-template>
    <div class="alain-default__header-logo" [style.width.px]="opt.logoFixWidth">
      @if (opt.logo) {
        <ng-container *ngTemplateOutlet="opt.logo" />
      } @else {
        <a [routerLink]="opt.logoLink" class="alain-default__header-logo-link">
          <img class="alain-default__header-logo-expanded" [attr.src]="opt.logoExpanded" [attr.alt]="app.name" />
          <img class="alain-default__header-logo-collapsed" [attr.src]="opt.logoCollapsed" [attr.alt]="app.name" />
        </a>
      }
    </div>
    <div class="alain-default__nav-wrap">
      <ul class="alain-default__nav">
        @if (!opt.hideAside && opt.showHeaderCollapse) {
          <li>
            <div class="alain-default__nav-item alain-default__nav-item--collapse" (click)="toggleCollapsed()">
              <nz-icon [nzType]="collapsedIcon" />
            </div>
          </li>
        }
        <ng-template [ngTemplateOutlet]="render" [ngTemplateOutletContext]="{ $implicit: left }" />
      </ul>
      @if (middle.length > 0) {
        <div class="alain-default__nav alain-default__nav-middle">
          <ng-container *ngTemplateOutlet="middle[0].host" />
        </div>
      }
      <ul class="alain-default__nav">
        <ng-template [ngTemplateOutlet]="render" [ngTemplateOutletContext]="{ $implicit: right }" />
      </ul>
    </div>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i2$1.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "info", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "directive", type: i3.NzIconDirective, selector: "nz-icon,[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.2", ngImport: i0, type: LayoutDefaultHeaderComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'layout-default-header',
                    template: `
    <ng-template #render let-ls>
      @for (i of ls; track $index) {
        <li [class.hidden-mobile]="i.hidden === 'mobile'" [class.hidden-pc]="i.hidden === 'pc'">
          <ng-container *ngTemplateOutlet="i.host" />
        </li>
      }
    </ng-template>
    <div class="alain-default__header-logo" [style.width.px]="opt.logoFixWidth">
      @if (opt.logo) {
        <ng-container *ngTemplateOutlet="opt.logo" />
      } @else {
        <a [routerLink]="opt.logoLink" class="alain-default__header-logo-link">
          <img class="alain-default__header-logo-expanded" [attr.src]="opt.logoExpanded" [attr.alt]="app.name" />
          <img class="alain-default__header-logo-collapsed" [attr.src]="opt.logoCollapsed" [attr.alt]="app.name" />
        </a>
      }
    </div>
    <div class="alain-default__nav-wrap">
      <ul class="alain-default__nav">
        @if (!opt.hideAside && opt.showHeaderCollapse) {
          <li>
            <div class="alain-default__nav-item alain-default__nav-item--collapse" (click)="toggleCollapsed()">
              <nz-icon [nzType]="collapsedIcon" />
            </div>
          </li>
        }
        <ng-template [ngTemplateOutlet]="render" [ngTemplateOutletContext]="{ $implicit: left }" />
      </ul>
      @if (middle.length > 0) {
        <div class="alain-default__nav alain-default__nav-middle">
          <ng-container *ngTemplateOutlet="middle[0].host" />
        </div>
      }
      <ul class="alain-default__nav">
        <ng-template [ngTemplateOutlet]="render" [ngTemplateOutletContext]="{ $implicit: right }" />
      </ul>
    </div>
  `,
                    host: {
                        '[class.alain-default__header]': `true`
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    // eslint-disable-next-line @angular-eslint/prefer-standalone
                    standalone: false
                }]
        }], propDecorators: { items: [{
                type: Input
            }] } });

class LayoutDefaultComponent {
    headerItems;
    get opt() {
        return this.srv.options;
    }
    set options(value) {
        this.srv.setOptions(value);
    }
    asideUser = null;
    asideBottom = null;
    nav = null;
    content = null;
    customError;
    fetchingStrictly = false;
    fetching = false;
    isFetching = false;
    get showFetching() {
        if (this.fetchingStrictly)
            return this.fetching;
        return this.isFetching;
    }
    get collapsed() {
        return this.settings.layout.collapsed;
    }
    get collapsedIcon() {
        return this.srv.collapsedIcon;
    }
    toggleCollapsed() {
        this.srv.toggleCollapsed();
    }
    router = inject(Router);
    msgSrv = inject(NzMessageService);
    settings = inject(SettingsService);
    el = inject(ElementRef);
    renderer = inject(Renderer2);
    doc = inject(DOCUMENT);
    srv = inject(LayoutDefaultService);
    constructor() {
        this.router.events
            .pipe(takeUntilDestroyed(), filter(() => !this.fetchingStrictly))
            .subscribe(ev => this.processEv(ev));
        this.srv.options$.pipe(takeUntilDestroyed()).subscribe(() => this.setClass());
        this.settings.notify.pipe(takeUntilDestroyed()).subscribe(() => this.setClass());
    }
    processEv(ev) {
        if (!this.isFetching && ev instanceof RouteConfigLoadStart) {
            this.isFetching = true;
        }
        if (ev instanceof NavigationError || ev instanceof NavigationCancel) {
            this.isFetching = false;
            const err = this.customError === null ? null : (this.customError ?? `Could not load ${ev.url} route`);
            if (err && ev instanceof NavigationError) {
                this.msgSrv.error(err, { nzDuration: 1000 * 3 });
            }
            return;
        }
        if (!(ev instanceof NavigationEnd || ev instanceof RouteConfigLoadEnd)) {
            return;
        }
        if (this.isFetching) {
            setTimeout(() => {
                this.isFetching = false;
            }, 100);
        }
    }
    setClass() {
        const { el, doc, renderer, settings } = this;
        const layout = settings.layout;
        updateHostClass(el.nativeElement, renderer, {
            ['alain-default']: true,
            [`alain-default__fixed`]: layout.fixed,
            [`alain-default__collapsed`]: layout.collapsed,
            [`alain-default__hide-aside`]: this.opt.hideAside,
            [`alain-default__hide-header`]: this.opt.hideHeader
        });
        doc.body.classList[layout.colorWeak ? 'add' : 'remove']('color-weak');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.2", ngImport: i0, type: LayoutDefaultComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.1.2", type: LayoutDefaultComponent, isStandalone: false, selector: "layout-default", inputs: { options: "options", asideUser: "asideUser", asideBottom: "asideBottom", nav: "nav", content: "content", customError: "customError", fetchingStrictly: ["fetchingStrictly", "fetchingStrictly", booleanAttribute], fetching: ["fetching", "fetching", booleanAttribute] }, queries: [{ propertyName: "headerItems", predicate: LayoutDefaultHeaderItemComponent }], exportAs: ["layoutDefault"], ngImport: i0, template: `
    @if (showFetching) {
      <div class="alain-default__progress-bar"></div>
    }
    @if (!opt.hideHeader) {
      <layout-default-header [items]="headerItems" />
    }
    @if (!opt.hideAside) {
      <div class="alain-default__aside">
        <div class="alain-default__aside-wrap">
          <div class="alain-default__aside-inner">
            <ng-container *ngTemplateOutlet="asideUser" />
            <ng-container *ngTemplateOutlet="nav" />
            @if (!nav) {
              <layout-default-nav />
            }
          </div>
          @if (opt.showSiderCollapse) {
            <div class="alain-default__aside-link">
              @if (asideBottom) {
                <ng-container *ngTemplateOutlet="asideBottom" />
              } @else {
                <div class="alain-default__aside-link-collapsed" (click)="toggleCollapsed()">
                  <nz-icon [nzType]="collapsedIcon" />
                </div>
              }
            </div>
          }
        </div>
      </div>
    }
    <section class="alain-default__content">
      <ng-container *ngTemplateOutlet="content" />
      <ng-content />
    </section>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i3.NzIconDirective, selector: "nz-icon,[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "component", type: LayoutDefaultNavComponent, selector: "layout-default-nav", inputs: ["disabledAcl", "autoCloseUnderPad", "recursivePath", "hideEmptyChildren", "openStrictly", "maxLevelIcon"], outputs: ["select"] }, { kind: "component", type: LayoutDefaultHeaderComponent, selector: "layout-default-header", inputs: ["items"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.2", ngImport: i0, type: LayoutDefaultComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'layout-default',
                    exportAs: 'layoutDefault',
                    template: `
    @if (showFetching) {
      <div class="alain-default__progress-bar"></div>
    }
    @if (!opt.hideHeader) {
      <layout-default-header [items]="headerItems" />
    }
    @if (!opt.hideAside) {
      <div class="alain-default__aside">
        <div class="alain-default__aside-wrap">
          <div class="alain-default__aside-inner">
            <ng-container *ngTemplateOutlet="asideUser" />
            <ng-container *ngTemplateOutlet="nav" />
            @if (!nav) {
              <layout-default-nav />
            }
          </div>
          @if (opt.showSiderCollapse) {
            <div class="alain-default__aside-link">
              @if (asideBottom) {
                <ng-container *ngTemplateOutlet="asideBottom" />
              } @else {
                <div class="alain-default__aside-link-collapsed" (click)="toggleCollapsed()">
                  <nz-icon [nzType]="collapsedIcon" />
                </div>
              }
            </div>
          }
        </div>
      </div>
    }
    <section class="alain-default__content">
      <ng-container *ngTemplateOutlet="content" />
      <ng-content />
    </section>
  `,
                    // eslint-disable-next-line @angular-eslint/prefer-standalone
                    standalone: false
                }]
        }], ctorParameters: () => [], propDecorators: { headerItems: [{
                type: ContentChildren,
                args: [LayoutDefaultHeaderItemComponent, { descendants: false }]
            }], options: [{
                type: Input
            }], asideUser: [{
                type: Input
            }], asideBottom: [{
                type: Input
            }], nav: [{
                type: Input
            }], content: [{
                type: Input
            }], customError: [{
                type: Input
            }], fetchingStrictly: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], fetching: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }] } });

class LayoutDefaultHeaderItemTriggerDirective {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.2", ngImport: i0, type: LayoutDefaultHeaderItemTriggerDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "20.1.2", type: LayoutDefaultHeaderItemTriggerDirective, isStandalone: false, selector: "[layout-default-header-item-trigger]", host: { properties: { "class.alain-default__nav-item": "true" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.2", ngImport: i0, type: LayoutDefaultHeaderItemTriggerDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[layout-default-header-item-trigger]',
                    host: {
                        '[class.alain-default__nav-item]': `true`
                    },
                    // eslint-disable-next-line @angular-eslint/prefer-standalone
                    standalone: false
                }]
        }] });

class LayoutDefaultTopMenuItemComponent {
    selected = false;
    disabled = false;
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.2", ngImport: i0, type: LayoutDefaultTopMenuItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "20.1.2", type: LayoutDefaultTopMenuItemComponent, isStandalone: false, selector: "layout-default-top-menu-item", inputs: { selected: ["selected", "selected", booleanAttribute], disabled: ["disabled", "disabled", booleanAttribute] }, host: { properties: { "class.alain-default__nav-item": "true", "class.alain-default__top-menu-item": "true", "class.alain-default__top-menu-item-selected": "selected", "class.alain-default__top-menu-item-disabled": "disabled" } }, ngImport: i0, template: `<ng-content />`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.2", ngImport: i0, type: LayoutDefaultTopMenuItemComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'layout-default-top-menu-item',
                    template: `<ng-content />`,
                    host: {
                        '[class.alain-default__nav-item]': `true`,
                        '[class.alain-default__top-menu-item]': `true`,
                        '[class.alain-default__top-menu-item-selected]': `selected`,
                        '[class.alain-default__top-menu-item-disabled]': `disabled`
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    // eslint-disable-next-line @angular-eslint/prefer-standalone
                    standalone: false
                }]
        }], propDecorators: { selected: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], disabled: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }] } });

const COMPONENTS = [
    LayoutDefaultComponent,
    LayoutDefaultNavComponent,
    LayoutDefaultHeaderComponent,
    LayoutDefaultHeaderItemComponent,
    LayoutDefaultHeaderItemTriggerDirective,
    LayoutDefaultTopMenuItemComponent
];
class LayoutDefaultModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.2", ngImport: i0, type: LayoutDefaultModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "20.1.2", ngImport: i0, type: LayoutDefaultModule, declarations: [LayoutDefaultComponent,
            LayoutDefaultNavComponent,
            LayoutDefaultHeaderComponent,
            LayoutDefaultHeaderItemComponent,
            LayoutDefaultHeaderItemTriggerDirective,
            LayoutDefaultTopMenuItemComponent], imports: [CommonModule, RouterModule, NzTooltipModule, NzIconModule, NzAvatarModule, NzDropDownModule, NzBadgeModule], exports: [LayoutDefaultComponent,
            LayoutDefaultNavComponent,
            LayoutDefaultHeaderComponent,
            LayoutDefaultHeaderItemComponent,
            LayoutDefaultHeaderItemTriggerDirective,
            LayoutDefaultTopMenuItemComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "20.1.2", ngImport: i0, type: LayoutDefaultModule, imports: [CommonModule, RouterModule, NzTooltipModule, NzIconModule, NzAvatarModule, NzDropDownModule, NzBadgeModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.2", ngImport: i0, type: LayoutDefaultModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, RouterModule, NzTooltipModule, NzIconModule, NzAvatarModule, NzDropDownModule, NzBadgeModule],
                    declarations: COMPONENTS,
                    exports: COMPONENTS
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { LayoutDefaultComponent, LayoutDefaultHeaderComponent, LayoutDefaultHeaderItemComponent, LayoutDefaultHeaderItemTriggerDirective, LayoutDefaultModule, LayoutDefaultNavComponent, LayoutDefaultService, LayoutDefaultTopMenuItemComponent };
//# sourceMappingURL=layout-default.mjs.map
