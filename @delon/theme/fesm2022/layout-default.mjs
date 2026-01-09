import { NgTemplateOutlet, DOCUMENT, CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { viewChild, input, Component, inject, signal, Injectable, computed, ChangeDetectionStrategy, Renderer2, booleanAttribute, numberAttribute, output, effect, afterNextRender, ViewEncapsulation, contentChildren, Directive, NgModule } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterLink, Router, NavigationEnd, RouteConfigLoadStart, NavigationError, NavigationCancel, RouteConfigLoadEnd, RouterModule } from '@angular/router';
import { filter, map } from 'rxjs';
import { SettingsService, MenuService } from '@delon/theme';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';
import { NzMessageService } from 'ng-zorro-antd/message';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Directionality } from '@angular/cdk/bidi';
import { DomSanitizer } from '@angular/platform-browser';
import { WINDOW } from '@delon/util/token';
import { NzBadgeComponent, NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzTooltipDirective, NzTooltipModule } from 'ng-zorro-antd/tooltip';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDropdownModule } from 'ng-zorro-antd/dropdown';

class LayoutDefaultHeaderItemComponent {
    host = viewChild('host', ...(ngDevMode ? [{ debugName: "host" }] : []));
    hidden = input('none', ...(ngDevMode ? [{ debugName: "hidden" }] : []));
    direction = input('right', ...(ngDevMode ? [{ debugName: "direction" }] : []));
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.0.8", ngImport: i0, type: LayoutDefaultHeaderItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.2.0", version: "21.0.8", type: LayoutDefaultHeaderItemComponent, isStandalone: true, selector: "layout-default-header-item", inputs: { hidden: { classPropertyName: "hidden", publicName: "hidden", isSignal: true, isRequired: false, transformFunction: null }, direction: { classPropertyName: "direction", publicName: "direction", isSignal: true, isRequired: false, transformFunction: null } }, viewQueries: [{ propertyName: "host", first: true, predicate: ["host"], descendants: true, isSignal: true }], ngImport: i0, template: `
    <ng-template #host>
      <ng-content />
    </ng-template>
  `, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.0.8", ngImport: i0, type: LayoutDefaultHeaderItemComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'layout-default-header-item',
                    template: `
    <ng-template #host>
      <ng-content />
    </ng-template>
  `
                }]
        }], propDecorators: { host: [{ type: i0.ViewChild, args: ['host', { isSignal: true }] }], hidden: [{ type: i0.Input, args: [{ isSignal: true, alias: "hidden", required: false }] }], direction: [{ type: i0.Input, args: [{ isSignal: true, alias: "direction", required: false }] }] } });

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
    options = signal(DEFAULT, ...(ngDevMode ? [{ debugName: "options" }] : []));
    collapsedIcon = signal('', ...(ngDevMode ? [{ debugName: "collapsedIcon" }] : []));
    constructor() {
        const mobileMedia = 'only screen and (max-width: 767.99px)';
        this.bm
            .observe(mobileMedia)
            .pipe(takeUntilDestroyed())
            .subscribe(state => this.checkMedia(state.matches));
        this.checkMedia(this.bm.isMatched(mobileMedia));
        const settings = this.settings;
        settings.notify
            .pipe(filter(w => w.type === 'layout'), map(() => {
            const collapsed = settings.layout.collapsed;
            const ret = settings.layout.direction === 'rtl' ? (collapsed ? 'fold' : 'unfold') : collapsed ? 'unfold' : 'fold';
            return ret;
        }), takeUntilDestroyed())
            .subscribe(type => this.collapsedIcon.set(`menu-${type}`));
    }
    checkMedia(value) {
        this.settings.setLayout('collapsed', value);
    }
    /**
     * Set layout configuration
     *
     * 设置布局配置
     */
    setOptions(options) {
        this.options.set({
            ...DEFAULT,
            ...options
        });
    }
    /**
     * Toggle the collapsed state of the sidebar menu bar
     *
     * 切换侧边栏菜单栏折叠状态
     */
    toggleCollapsed(status) {
        this.settings.setLayout('collapsed', status != null ? status : !this.settings.layout.collapsed);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.0.8", ngImport: i0, type: LayoutDefaultService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "21.0.8", ngImport: i0, type: LayoutDefaultService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.0.8", ngImport: i0, type: LayoutDefaultService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: () => [] });

class LayoutDefaultHeaderComponent {
    app = inject(SettingsService).app;
    srv = inject(LayoutDefaultService);
    items = input.required(...(ngDevMode ? [{ debugName: "items" }] : []));
    left = computed(() => this.items().filter(i => i.direction() === 'left'), ...(ngDevMode ? [{ debugName: "left" }] : []));
    middle = computed(() => this.items().filter(i => i.direction() === 'middle'), ...(ngDevMode ? [{ debugName: "middle" }] : []));
    right = computed(() => this.items().filter(i => i.direction() === 'right'), ...(ngDevMode ? [{ debugName: "right" }] : []));
    opt = this.srv.options;
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.0.8", ngImport: i0, type: LayoutDefaultHeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.0.8", type: LayoutDefaultHeaderComponent, isStandalone: true, selector: "layout-default-header", inputs: { items: { classPropertyName: "items", publicName: "items", isSignal: true, isRequired: true, transformFunction: null } }, host: { classAttribute: "alain-default__header" }, ngImport: i0, template: `
    <ng-template #render let-ls>
      @for (i of ls; track $index) {
        <li [class.hidden-mobile]="i.hidden() === 'mobile'" [class.hidden-pc]="i.hidden() === 'pc'">
          <ng-container *ngTemplateOutlet="i.host()" />
        </li>
      }
    </ng-template>
    @let _opt = opt();
    <div class="alain-default__header-logo" [style.width.px]="_opt.logoFixWidth">
      @if (_opt.logo) {
        <ng-container *ngTemplateOutlet="_opt.logo" />
      } @else {
        <a [routerLink]="_opt.logoLink" class="alain-default__header-logo-link">
          <img class="alain-default__header-logo-expanded" [attr.src]="_opt.logoExpanded" [attr.alt]="app.name" />
          <img class="alain-default__header-logo-collapsed" [attr.src]="_opt.logoCollapsed" [attr.alt]="app.name" />
        </a>
      }
    </div>
    <div class="alain-default__nav-wrap">
      <ul class="alain-default__nav">
        @if (!_opt.hideAside && _opt.showHeaderCollapse) {
          <li>
            <div class="alain-default__nav-item alain-default__nav-item--collapse" (click)="srv.toggleCollapsed()">
              <nz-icon [nzType]="srv.collapsedIcon()" />
            </div>
          </li>
        }
        <ng-template [ngTemplateOutlet]="render" [ngTemplateOutletContext]="{ $implicit: left() }" />
      </ul>
      @if (middle().length > 0) {
        <div class="alain-default__nav alain-default__nav-middle">
          <ng-container *ngTemplateOutlet="middle()[0].host()" />
        </div>
      }
      <ul class="alain-default__nav">
        <ng-template [ngTemplateOutlet]="render" [ngTemplateOutletContext]="{ $implicit: right() }" />
      </ul>
    </div>
  `, isInline: true, dependencies: [{ kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "info", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "directive", type: NzIconDirective, selector: "nz-icon,[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.0.8", ngImport: i0, type: LayoutDefaultHeaderComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'layout-default-header',
                    template: `
    <ng-template #render let-ls>
      @for (i of ls; track $index) {
        <li [class.hidden-mobile]="i.hidden() === 'mobile'" [class.hidden-pc]="i.hidden() === 'pc'">
          <ng-container *ngTemplateOutlet="i.host()" />
        </li>
      }
    </ng-template>
    @let _opt = opt();
    <div class="alain-default__header-logo" [style.width.px]="_opt.logoFixWidth">
      @if (_opt.logo) {
        <ng-container *ngTemplateOutlet="_opt.logo" />
      } @else {
        <a [routerLink]="_opt.logoLink" class="alain-default__header-logo-link">
          <img class="alain-default__header-logo-expanded" [attr.src]="_opt.logoExpanded" [attr.alt]="app.name" />
          <img class="alain-default__header-logo-collapsed" [attr.src]="_opt.logoCollapsed" [attr.alt]="app.name" />
        </a>
      }
    </div>
    <div class="alain-default__nav-wrap">
      <ul class="alain-default__nav">
        @if (!_opt.hideAside && _opt.showHeaderCollapse) {
          <li>
            <div class="alain-default__nav-item alain-default__nav-item--collapse" (click)="srv.toggleCollapsed()">
              <nz-icon [nzType]="srv.collapsedIcon()" />
            </div>
          </li>
        }
        <ng-template [ngTemplateOutlet]="render" [ngTemplateOutletContext]="{ $implicit: left() }" />
      </ul>
      @if (middle().length > 0) {
        <div class="alain-default__nav alain-default__nav-middle">
          <ng-container *ngTemplateOutlet="middle()[0].host()" />
        </div>
      }
      <ul class="alain-default__nav">
        <ng-template [ngTemplateOutlet]="render" [ngTemplateOutletContext]="{ $implicit: right() }" />
      </ul>
    </div>
  `,
                    host: { class: 'alain-default__header' },
                    imports: [NgTemplateOutlet, RouterLink, NzIconDirective],
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], propDecorators: { items: [{ type: i0.Input, args: [{ isSignal: true, alias: "items", required: true }] }] } });

const SHOWCLS = 'sidebar-nav__floating-show';
const FLOATINGCLS = 'sidebar-nav__floating';
class LayoutDefaultNavComponent {
    doc = inject(DOCUMENT);
    win = inject(WINDOW);
    router = inject(Router);
    render = inject(Renderer2);
    menuSrv = inject(MenuService);
    settings = inject(SettingsService);
    sanitizer = inject(DomSanitizer);
    bodyEl = this.doc.querySelector('body');
    floatingEl;
    dir = inject(Directionality).valueSignal;
    list = signal([], ...(ngDevMode ? [{ debugName: "list" }] : []));
    disabledAcl = input(false, { ...(ngDevMode ? { debugName: "disabledAcl" } : {}), transform: booleanAttribute });
    autoCloseUnderPad = input(true, { ...(ngDevMode ? { debugName: "autoCloseUnderPad" } : {}), transform: booleanAttribute });
    recursivePath = input(true, { ...(ngDevMode ? { debugName: "recursivePath" } : {}), transform: booleanAttribute });
    hideEmptyChildren = input(true, { ...(ngDevMode ? { debugName: "hideEmptyChildren" } : {}), transform: booleanAttribute });
    openStrictly = input(...(ngDevMode ? [undefined, { debugName: "openStrictly" }] : []));
    maxLevelIcon = input(3, { ...(ngDevMode ? { debugName: "maxLevelIcon" } : {}), transform: numberAttribute });
    select = output();
    get collapsed() {
        return this.settings.layout.collapsed;
    }
    constructor() {
        effect(() => {
            const openStrictly = this.openStrictly();
            if (openStrictly != null) {
                this.menuSrv.openStrictly = openStrictly;
            }
        });
        this.menuSrv.change.pipe(takeUntilDestroyed()).subscribe(data => {
            this.menuSrv.visit(data, (i, _p, depth) => {
                i._text = this.sanitizer.bypassSecurityTrustHtml(i.text);
                i._needIcon = depth <= this.maxLevelIcon() && !!i.icon;
                if (!i._aclResult) {
                    if (this.disabledAcl()) {
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
            if (this.hideEmptyChildren())
                this.fixHide(data);
            this.list.set(data.filter((w) => w._hidden !== true));
        });
        this.router.events.pipe(takeUntilDestroyed()).subscribe(e => {
            if (e instanceof NavigationEnd) {
                this.openByUrl(e.urlAfterRedirects);
                this.underPad();
            }
        });
        this.settings.notify
            .pipe(takeUntilDestroyed(), filter(t => t.type === 'layout' && t.name === 'collapsed'))
            .subscribe(() => this.clearFloating());
        afterNextRender(() => {
            this.underPad();
            this.openByUrl(this.router.url);
            this.genFloating();
        });
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
        this.menuSrv.visit(this.list(), (i) => {
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
        this.router.navigateByUrl(item.link);
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
        this.menuSrv.open(menuSrv.find({ url, recursive: recursivePath() }));
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
    // #region Under pad
    get isPad() {
        return this.doc.defaultView.innerWidth < 768;
    }
    underPad() {
        if (this.autoCloseUnderPad() && this.isPad && !this.collapsed) {
            setTimeout(() => this.openAside(true));
        }
    }
    openAside(status) {
        this.settings.setLayout('collapsed', status);
    }
    // #endregion
    ngOnDestroy() {
        this.clearFloating();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.0.8", ngImport: i0, type: LayoutDefaultNavComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.0.8", type: LayoutDefaultNavComponent, isStandalone: true, selector: "layout-default-nav", inputs: { disabledAcl: { classPropertyName: "disabledAcl", publicName: "disabledAcl", isSignal: true, isRequired: false, transformFunction: null }, autoCloseUnderPad: { classPropertyName: "autoCloseUnderPad", publicName: "autoCloseUnderPad", isSignal: true, isRequired: false, transformFunction: null }, recursivePath: { classPropertyName: "recursivePath", publicName: "recursivePath", isSignal: true, isRequired: false, transformFunction: null }, hideEmptyChildren: { classPropertyName: "hideEmptyChildren", publicName: "hideEmptyChildren", isSignal: true, isRequired: false, transformFunction: null }, openStrictly: { classPropertyName: "openStrictly", publicName: "openStrictly", isSignal: true, isRequired: false, transformFunction: null }, maxLevelIcon: { classPropertyName: "maxLevelIcon", publicName: "maxLevelIcon", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { select: "select" }, host: { listeners: { "click": "_click()", "document:click": "closeSubMenu()" }, classAttribute: "d-block" }, ngImport: i0, template: `
    <ng-template #icon let-i>
      @if (i) {
        @switch (i.type) {
          @case ('icon') {
            <nz-icon
              class="sidebar-nav__item-icon"
              [nzType]="i.value"
              [nzTheme]="i.theme"
              [nzSpin]="i.spin"
              [nzTwotoneColor]="i.twoToneColor"
              [nzIconfont]="i.iconfont"
              [nzRotate]="i.rotate"
            />
          }
          @case ('iconfont') {
            <nz-icon class="sidebar-nav__item-icon" [nzIconfont]="i.iconfont" />
          }
          @case ('img') {
            <img [src]="i.value" class="sidebar-nav__item-icon sidebar-nav__item-img" />
          }
          @case ('svg') {
            <span class="sidebar-nav__item-icon sidebar-nav__item-svg" [innerHTML]="i.value"></span>
          }
          @default {
            <i class="sidebar-nav__item-icon {{ i.value }}"></i>
          }
        }
      }
    </ng-template>
    <ng-template #tree let-ls>
      @for (i of ls; track $index) {
        @if (i._hidden !== true) {
          @if (i.render_type === 'divider') {
            <li class="sidebar-nav__divider"></li>
          } @else {
            <li
              class="sidebar-nav__item"
              [class.sidebar-nav__selected]="i._selected"
              [class.sidebar-nav__open]="i.open"
            >
              <!-- link -->
              @if (i.children.length === 0) {
                <a
                  (click)="to(i)"
                  [attr.data-id]="i._id"
                  class="sidebar-nav__item-link"
                  [class.sidebar-nav__item-disabled]="i.disabled"
                  (mouseenter)="closeSubMenu()"
                >
                  @if (i._needIcon) {
                    @if (collapsed) {
                      <span nz-tooltip nzTooltipPlacement="right" [nzTooltipTitle]="i.text">
                        <ng-template [ngTemplateOutlet]="icon" [ngTemplateOutletContext]="{ $implicit: i.icon }" />
                      </span>
                    } @else {
                      <ng-template [ngTemplateOutlet]="icon" [ngTemplateOutletContext]="{ $implicit: i.icon }" />
                    }
                  }
                  <span class="sidebar-nav__item-text" [innerHTML]="i._text" [attr.title]="i.text"></span>
                </a>
              }
              <!-- has children link -->
              @if (i.children.length > 0) {
                <a (click)="toggleOpen(i)" (mouseenter)="showSubMenu($event, i)" class="sidebar-nav__item-link">
                  <ng-template [ngTemplateOutlet]="icon" [ngTemplateOutletContext]="{ $implicit: i.icon }" />
                  <span class="sidebar-nav__item-text" [innerHTML]="i._text" [attr.title]="i.text"></span>
                  <i class="sidebar-nav__sub-arrow"></i>
                </a>
              }
              <!-- badge -->
              @if (i.badge) {
                <nz-badge
                  [nzCount]="i.badge"
                  [nzDot]="i.badgeDot"
                  nzStandalone
                  [nzOverflowCount]="i.badgeOverflowCount ? i.badgeOverflowCount : 9"
                />
              }
              @if (i.children.length > 0) {
                <ul class="sidebar-nav sidebar-nav__sub sidebar-nav__depth{{ i._depth }}">
                  <ng-template [ngTemplateOutlet]="tree" [ngTemplateOutletContext]="{ $implicit: i.children }" />
                </ul>
              }
            </li>
          }
        }
      }
    </ng-template>
    <ul class="sidebar-nav">
      @for (group of list(); track $index) {
        @if (group.group) {
          <li class="sidebar-nav__item sidebar-nav__group-title">
            <span [innerHTML]="group._text"></span>
          </li>
        }
        <ng-template [ngTemplateOutlet]="tree" [ngTemplateOutletContext]="{ $implicit: group.children }" />
      }
    </ul>
  `, isInline: true, dependencies: [{ kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: NzIconDirective, selector: "nz-icon,[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "directive", type: NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "cdkConnectedOverlayPush", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }, { kind: "component", type: NzBadgeComponent, selector: "nz-badge", inputs: ["nzShowZero", "nzShowDot", "nzStandalone", "nzDot", "nzOverflowCount", "nzColor", "nzStyle", "nzText", "nzTitle", "nzStatus", "nzCount", "nzOffset", "nzSize"], exportAs: ["nzBadge"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.0.8", ngImport: i0, type: LayoutDefaultNavComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'layout-default-nav',
                    template: `
    <ng-template #icon let-i>
      @if (i) {
        @switch (i.type) {
          @case ('icon') {
            <nz-icon
              class="sidebar-nav__item-icon"
              [nzType]="i.value"
              [nzTheme]="i.theme"
              [nzSpin]="i.spin"
              [nzTwotoneColor]="i.twoToneColor"
              [nzIconfont]="i.iconfont"
              [nzRotate]="i.rotate"
            />
          }
          @case ('iconfont') {
            <nz-icon class="sidebar-nav__item-icon" [nzIconfont]="i.iconfont" />
          }
          @case ('img') {
            <img [src]="i.value" class="sidebar-nav__item-icon sidebar-nav__item-img" />
          }
          @case ('svg') {
            <span class="sidebar-nav__item-icon sidebar-nav__item-svg" [innerHTML]="i.value"></span>
          }
          @default {
            <i class="sidebar-nav__item-icon {{ i.value }}"></i>
          }
        }
      }
    </ng-template>
    <ng-template #tree let-ls>
      @for (i of ls; track $index) {
        @if (i._hidden !== true) {
          @if (i.render_type === 'divider') {
            <li class="sidebar-nav__divider"></li>
          } @else {
            <li
              class="sidebar-nav__item"
              [class.sidebar-nav__selected]="i._selected"
              [class.sidebar-nav__open]="i.open"
            >
              <!-- link -->
              @if (i.children.length === 0) {
                <a
                  (click)="to(i)"
                  [attr.data-id]="i._id"
                  class="sidebar-nav__item-link"
                  [class.sidebar-nav__item-disabled]="i.disabled"
                  (mouseenter)="closeSubMenu()"
                >
                  @if (i._needIcon) {
                    @if (collapsed) {
                      <span nz-tooltip nzTooltipPlacement="right" [nzTooltipTitle]="i.text">
                        <ng-template [ngTemplateOutlet]="icon" [ngTemplateOutletContext]="{ $implicit: i.icon }" />
                      </span>
                    } @else {
                      <ng-template [ngTemplateOutlet]="icon" [ngTemplateOutletContext]="{ $implicit: i.icon }" />
                    }
                  }
                  <span class="sidebar-nav__item-text" [innerHTML]="i._text" [attr.title]="i.text"></span>
                </a>
              }
              <!-- has children link -->
              @if (i.children.length > 0) {
                <a (click)="toggleOpen(i)" (mouseenter)="showSubMenu($event, i)" class="sidebar-nav__item-link">
                  <ng-template [ngTemplateOutlet]="icon" [ngTemplateOutletContext]="{ $implicit: i.icon }" />
                  <span class="sidebar-nav__item-text" [innerHTML]="i._text" [attr.title]="i.text"></span>
                  <i class="sidebar-nav__sub-arrow"></i>
                </a>
              }
              <!-- badge -->
              @if (i.badge) {
                <nz-badge
                  [nzCount]="i.badge"
                  [nzDot]="i.badgeDot"
                  nzStandalone
                  [nzOverflowCount]="i.badgeOverflowCount ? i.badgeOverflowCount : 9"
                />
              }
              @if (i.children.length > 0) {
                <ul class="sidebar-nav sidebar-nav__sub sidebar-nav__depth{{ i._depth }}">
                  <ng-template [ngTemplateOutlet]="tree" [ngTemplateOutletContext]="{ $implicit: i.children }" />
                </ul>
              }
            </li>
          }
        }
      }
    </ng-template>
    <ul class="sidebar-nav">
      @for (group of list(); track $index) {
        @if (group.group) {
          <li class="sidebar-nav__item sidebar-nav__group-title">
            <span [innerHTML]="group._text"></span>
          </li>
        }
        <ng-template [ngTemplateOutlet]="tree" [ngTemplateOutletContext]="{ $implicit: group.children }" />
      }
    </ul>
  `,
                    host: {
                        class: 'd-block',
                        '(click)': '_click()',
                        '(document:click)': 'closeSubMenu()'
                    },
                    imports: [NgTemplateOutlet, NzIconDirective, NzTooltipDirective, NzBadgeComponent],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: () => [], propDecorators: { disabledAcl: [{ type: i0.Input, args: [{ isSignal: true, alias: "disabledAcl", required: false }] }], autoCloseUnderPad: [{ type: i0.Input, args: [{ isSignal: true, alias: "autoCloseUnderPad", required: false }] }], recursivePath: [{ type: i0.Input, args: [{ isSignal: true, alias: "recursivePath", required: false }] }], hideEmptyChildren: [{ type: i0.Input, args: [{ isSignal: true, alias: "hideEmptyChildren", required: false }] }], openStrictly: [{ type: i0.Input, args: [{ isSignal: true, alias: "openStrictly", required: false }] }], maxLevelIcon: [{ type: i0.Input, args: [{ isSignal: true, alias: "maxLevelIcon", required: false }] }], select: [{ type: i0.Output, args: ["select"] }] } });

class LayoutDefaultComponent {
    router = inject(Router);
    msgSrv = inject(NzMessageService);
    settings = inject(SettingsService);
    doc = inject(DOCUMENT);
    srv = inject(LayoutDefaultService);
    headerItems = contentChildren(LayoutDefaultHeaderItemComponent, { ...(ngDevMode ? { debugName: "headerItems" } : {}), descendants: false });
    opt = this.srv.options;
    layout = this.settings.layoutSignal;
    options = input(...(ngDevMode ? [undefined, { debugName: "options" }] : []));
    asideUser = input(...(ngDevMode ? [undefined, { debugName: "asideUser" }] : []));
    asideBottom = input(...(ngDevMode ? [undefined, { debugName: "asideBottom" }] : []));
    nav = input(...(ngDevMode ? [undefined, { debugName: "nav" }] : []));
    content = input(...(ngDevMode ? [undefined, { debugName: "content" }] : []));
    customError = input(...(ngDevMode ? [undefined, { debugName: "customError" }] : []));
    fetchingStrictly = input(false, { ...(ngDevMode ? { debugName: "fetchingStrictly" } : {}), transform: booleanAttribute });
    fetching = input(false, { ...(ngDevMode ? { debugName: "fetching" } : {}), transform: booleanAttribute });
    isFetching = signal(false, ...(ngDevMode ? [{ debugName: "isFetching" }] : []));
    showFetching = computed(() => {
        if (this.fetchingStrictly())
            return this.fetching();
        return this.isFetching();
    }, ...(ngDevMode ? [{ debugName: "showFetching" }] : []));
    constructor() {
        this.router.events
            .pipe(takeUntilDestroyed(), filter(() => !this.fetchingStrictly()))
            .subscribe(ev => this.processEv(ev));
        effect(() => {
            const opt = this.options();
            this.srv.setOptions(opt);
        });
        effect(() => {
            this.doc.body.classList[this.layout().colorWeak ? 'add' : 'remove']('color-weak');
        });
    }
    processEv(ev) {
        if (!this.isFetching() && ev instanceof RouteConfigLoadStart) {
            this.isFetching.set(true);
        }
        if (ev instanceof NavigationError || ev instanceof NavigationCancel) {
            this.isFetching.set(false);
            const customError = this.customError();
            const err = customError === null ? null : (customError ?? `Could not load ${ev.url} route`);
            if (err && ev instanceof NavigationError) {
                this.msgSrv.error(err, { nzDuration: 1000 * 3 });
            }
            return;
        }
        if (!(ev instanceof NavigationEnd || ev instanceof RouteConfigLoadEnd)) {
            return;
        }
        if (this.isFetching()) {
            setTimeout(() => {
                this.isFetching.set(false);
            }, 100);
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.0.8", ngImport: i0, type: LayoutDefaultComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.0.8", type: LayoutDefaultComponent, isStandalone: true, selector: "layout-default", inputs: { options: { classPropertyName: "options", publicName: "options", isSignal: true, isRequired: false, transformFunction: null }, asideUser: { classPropertyName: "asideUser", publicName: "asideUser", isSignal: true, isRequired: false, transformFunction: null }, asideBottom: { classPropertyName: "asideBottom", publicName: "asideBottom", isSignal: true, isRequired: false, transformFunction: null }, nav: { classPropertyName: "nav", publicName: "nav", isSignal: true, isRequired: false, transformFunction: null }, content: { classPropertyName: "content", publicName: "content", isSignal: true, isRequired: false, transformFunction: null }, customError: { classPropertyName: "customError", publicName: "customError", isSignal: true, isRequired: false, transformFunction: null }, fetchingStrictly: { classPropertyName: "fetchingStrictly", publicName: "fetchingStrictly", isSignal: true, isRequired: false, transformFunction: null }, fetching: { classPropertyName: "fetching", publicName: "fetching", isSignal: true, isRequired: false, transformFunction: null } }, host: { properties: { "class.alain-default__fixed": "layout().fixed", "class.alain-default__collapsed": "layout().collapsed", "class.alain-default__hide-aside": "opt().hideAside", "class.alain-default__hide-header": "opt().hideHeader" }, classAttribute: "alain-default" }, queries: [{ propertyName: "headerItems", predicate: LayoutDefaultHeaderItemComponent, isSignal: true }], exportAs: ["layoutDefault"], ngImport: i0, template: `
    @let _opt = opt();
    @if (showFetching()) {
      <div class="alain-default__progress-bar"></div>
    }
    @if (!_opt.hideHeader) {
      <layout-default-header [items]="headerItems()" />
    }
    @if (!_opt.hideAside) {
      <div class="alain-default__aside">
        <div class="alain-default__aside-wrap">
          <div class="alain-default__aside-inner">
            <ng-container *ngTemplateOutlet="asideUser()" />
            <ng-container *ngTemplateOutlet="nav()" />
            @if (!nav()) {
              <layout-default-nav />
            }
          </div>
          @if (_opt.showSiderCollapse) {
            <div class="alain-default__aside-link">
              @if (asideBottom()) {
                <ng-container *ngTemplateOutlet="asideBottom()" />
              } @else {
                <div class="alain-default__aside-link-collapsed" (click)="srv.toggleCollapsed()">
                  <nz-icon [nzType]="srv.collapsedIcon()" />
                </div>
              }
            </div>
          }
        </div>
      </div>
    }
    <section class="alain-default__content">
      <ng-container *ngTemplateOutlet="content()" />
      <ng-content />
    </section>
  `, isInline: true, dependencies: [{ kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: LayoutDefaultHeaderComponent, selector: "layout-default-header", inputs: ["items"] }, { kind: "component", type: LayoutDefaultNavComponent, selector: "layout-default-nav", inputs: ["disabledAcl", "autoCloseUnderPad", "recursivePath", "hideEmptyChildren", "openStrictly", "maxLevelIcon"], outputs: ["select"] }, { kind: "directive", type: NzIconDirective, selector: "nz-icon,[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.0.8", ngImport: i0, type: LayoutDefaultComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'layout-default',
                    exportAs: 'layoutDefault',
                    template: `
    @let _opt = opt();
    @if (showFetching()) {
      <div class="alain-default__progress-bar"></div>
    }
    @if (!_opt.hideHeader) {
      <layout-default-header [items]="headerItems()" />
    }
    @if (!_opt.hideAside) {
      <div class="alain-default__aside">
        <div class="alain-default__aside-wrap">
          <div class="alain-default__aside-inner">
            <ng-container *ngTemplateOutlet="asideUser()" />
            <ng-container *ngTemplateOutlet="nav()" />
            @if (!nav()) {
              <layout-default-nav />
            }
          </div>
          @if (_opt.showSiderCollapse) {
            <div class="alain-default__aside-link">
              @if (asideBottom()) {
                <ng-container *ngTemplateOutlet="asideBottom()" />
              } @else {
                <div class="alain-default__aside-link-collapsed" (click)="srv.toggleCollapsed()">
                  <nz-icon [nzType]="srv.collapsedIcon()" />
                </div>
              }
            </div>
          }
        </div>
      </div>
    }
    <section class="alain-default__content">
      <ng-container *ngTemplateOutlet="content()" />
      <ng-content />
    </section>
  `,
                    host: {
                        class: 'alain-default',
                        '[class.alain-default__fixed]': 'layout().fixed',
                        '[class.alain-default__collapsed]': 'layout().collapsed',
                        '[class.alain-default__hide-aside]': 'opt().hideAside',
                        '[class.alain-default__hide-header]': 'opt().hideHeader'
                    },
                    imports: [NgTemplateOutlet, LayoutDefaultHeaderComponent, LayoutDefaultNavComponent, NzIconDirective]
                }]
        }], ctorParameters: () => [], propDecorators: { headerItems: [{ type: i0.ContentChildren, args: [i0.forwardRef(() => LayoutDefaultHeaderItemComponent), { ...{ descendants: false }, isSignal: true }] }], options: [{ type: i0.Input, args: [{ isSignal: true, alias: "options", required: false }] }], asideUser: [{ type: i0.Input, args: [{ isSignal: true, alias: "asideUser", required: false }] }], asideBottom: [{ type: i0.Input, args: [{ isSignal: true, alias: "asideBottom", required: false }] }], nav: [{ type: i0.Input, args: [{ isSignal: true, alias: "nav", required: false }] }], content: [{ type: i0.Input, args: [{ isSignal: true, alias: "content", required: false }] }], customError: [{ type: i0.Input, args: [{ isSignal: true, alias: "customError", required: false }] }], fetchingStrictly: [{ type: i0.Input, args: [{ isSignal: true, alias: "fetchingStrictly", required: false }] }], fetching: [{ type: i0.Input, args: [{ isSignal: true, alias: "fetching", required: false }] }] } });

class LayoutDefaultHeaderItemTriggerDirective {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.0.8", ngImport: i0, type: LayoutDefaultHeaderItemTriggerDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.0.8", type: LayoutDefaultHeaderItemTriggerDirective, isStandalone: true, selector: "[layout-default-header-item-trigger]", host: { classAttribute: "alain-default__nav-item" }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.0.8", ngImport: i0, type: LayoutDefaultHeaderItemTriggerDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[layout-default-header-item-trigger]',
                    host: { class: 'alain-default__nav-item' }
                }]
        }] });

class LayoutDefaultTopMenuItemComponent {
    selected = input(false, { ...(ngDevMode ? { debugName: "selected" } : {}), transform: booleanAttribute });
    disabled = input(false, { ...(ngDevMode ? { debugName: "disabled" } : {}), transform: booleanAttribute });
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.0.8", ngImport: i0, type: LayoutDefaultTopMenuItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "21.0.8", type: LayoutDefaultTopMenuItemComponent, isStandalone: true, selector: "layout-default-top-menu-item", inputs: { selected: { classPropertyName: "selected", publicName: "selected", isSignal: true, isRequired: false, transformFunction: null }, disabled: { classPropertyName: "disabled", publicName: "disabled", isSignal: true, isRequired: false, transformFunction: null } }, host: { properties: { "class.alain-default__nav-item": "true", "class.alain-default__top-menu-item": "true", "class.alain-default__top-menu-item-selected": "selected()", "class.alain-default__top-menu-item-disabled": "disabled()" } }, ngImport: i0, template: `<ng-content />`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.0.8", ngImport: i0, type: LayoutDefaultTopMenuItemComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'layout-default-top-menu-item',
                    template: `<ng-content />`,
                    host: {
                        '[class.alain-default__nav-item]': `true`,
                        '[class.alain-default__top-menu-item]': `true`,
                        '[class.alain-default__top-menu-item-selected]': `selected()`,
                        '[class.alain-default__top-menu-item-disabled]': `disabled()`
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }], propDecorators: { selected: [{ type: i0.Input, args: [{ isSignal: true, alias: "selected", required: false }] }], disabled: [{ type: i0.Input, args: [{ isSignal: true, alias: "disabled", required: false }] }] } });

const COMPONENTS = [
    LayoutDefaultComponent,
    LayoutDefaultNavComponent,
    LayoutDefaultHeaderComponent,
    LayoutDefaultHeaderItemComponent,
    LayoutDefaultHeaderItemTriggerDirective,
    LayoutDefaultTopMenuItemComponent
];
class LayoutDefaultModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.0.8", ngImport: i0, type: LayoutDefaultModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "21.0.8", ngImport: i0, type: LayoutDefaultModule, imports: [CommonModule,
            RouterModule,
            NzTooltipModule,
            NzIconModule,
            NzAvatarModule,
            NzDropdownModule,
            NzBadgeModule, LayoutDefaultComponent,
            LayoutDefaultNavComponent,
            LayoutDefaultHeaderComponent,
            LayoutDefaultHeaderItemComponent,
            LayoutDefaultHeaderItemTriggerDirective,
            LayoutDefaultTopMenuItemComponent], exports: [LayoutDefaultComponent,
            LayoutDefaultNavComponent,
            LayoutDefaultHeaderComponent,
            LayoutDefaultHeaderItemComponent,
            LayoutDefaultHeaderItemTriggerDirective,
            LayoutDefaultTopMenuItemComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "21.0.8", ngImport: i0, type: LayoutDefaultModule, imports: [CommonModule,
            RouterModule,
            NzTooltipModule,
            NzIconModule,
            NzAvatarModule,
            NzDropdownModule,
            NzBadgeModule, LayoutDefaultComponent,
            LayoutDefaultNavComponent] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.0.8", ngImport: i0, type: LayoutDefaultModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        RouterModule,
                        NzTooltipModule,
                        NzIconModule,
                        NzAvatarModule,
                        NzDropdownModule,
                        NzBadgeModule,
                        ...COMPONENTS
                    ],
                    exports: COMPONENTS
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { LayoutDefaultComponent, LayoutDefaultHeaderComponent, LayoutDefaultHeaderItemComponent, LayoutDefaultHeaderItemTriggerDirective, LayoutDefaultModule, LayoutDefaultNavComponent, LayoutDefaultService, LayoutDefaultTopMenuItemComponent };
//# sourceMappingURL=layout-default.mjs.map
