import * as i0 from "@angular/core";
import { ChangeDetectionStrategy, Component, DestroyRef, Directive, EventEmitter, Injectable, InjectionToken, Injector, Input, NgModule, Output, ViewEncapsulation, booleanAttribute, inject, input, makeEnvironmentProviders, numberAttribute, output, provideEnvironmentInitializer, signal, viewChild } from "@angular/core";
import { ALAIN_I18N_TOKEN, DelonLocaleModule, DelonLocaleService, MenuService } from "@delon/theme";
import { NzMenuDirective, NzMenuItemComponent, NzMenuModule } from "ng-zorro-antd/menu";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { ConnectionPositionPair, Overlay, OverlayModule } from "@angular/cdk/overlay";
import { ComponentPortal } from "@angular/cdk/portal";
import { BehaviorSubject, Subject, Subscription, debounceTime, filter, of, take, timer } from "rxjs";
import { Directionality } from "@angular/cdk/bidi";
import { Platform } from "@angular/cdk/platform";
import { CommonModule, DOCUMENT, NgTemplateOutlet } from "@angular/common";
import { ActivatedRoute, NavigationEnd, NavigationStart, ROUTER_CONFIGURATION, RouteReuseStrategy, Router, RouterModule } from "@angular/router";
import { NzIconDirective, NzIconModule } from "ng-zorro-antd/icon";
import { NzTabComponent, NzTabsComponent, NzTabsModule } from "ng-zorro-antd/tabs";
import { ScrollService } from "@delon/util/browser";
var ReuseTabContextMenuComponent = class ReuseTabContextMenuComponent {
	locale = inject(DelonLocaleService).valueSignal("reuseTab");
	_i18n;
	set i18n(value) {
		this._i18n = {
			...this.locale(),
			...value
		};
	}
	get i18n() {
		return this._i18n;
	}
	item;
	event;
	customContextMenu;
	close = new EventEmitter();
	get includeNonCloseable() {
		return this.event.ctrlKey;
	}
	notify(type) {
		this.close.next({
			type,
			item: this.item,
			includeNonCloseable: this.includeNonCloseable
		});
	}
	ngOnInit() {
		if (this.includeNonCloseable) this.item.closable = true;
	}
	click(e, type, custom) {
		e.preventDefault();
		e.stopPropagation();
		if (type === "close" && !this.item.closable) return;
		if (type === "closeRight" && this.item.last) return;
		if (custom) {
			if (this.isDisabled(custom)) return;
			custom.fn(this.item, custom);
		}
		this.notify(type);
	}
	isDisabled(custom) {
		return custom.disabled ? custom.disabled(this.item) : false;
	}
	closeMenu(event) {
		if (event.type === "click" && event.button === 2) return;
		this.notify(null);
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: ReuseTabContextMenuComponent,
		deps: [],
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "17.0.0",
		version: "22.2.0",
		type: ReuseTabContextMenuComponent,
		isStandalone: true,
		selector: "reuse-tab-context-menu",
		inputs: {
			i18n: "i18n",
			item: "item",
			event: "event",
			customContextMenu: "customContextMenu"
		},
		outputs: { close: "close" },
		host: { listeners: {
			"document:click": "closeMenu($event)",
			"document:contextmenu": "closeMenu($event)"
		} },
		ngImport: i0,
		template: `
    <ul nz-menu>
      @if (item.active) {
        <li nz-menu-item (click)="click($event, 'refresh')" data-type="refresh" [innerHTML]="i18n.refresh"></li>
      }
      <li
        nz-menu-item
        (click)="click($event, 'close')"
        data-type="close"
        [nzDisabled]="!item.closable"
        [innerHTML]="i18n.close"
      ></li>
      <li nz-menu-item (click)="click($event, 'closeOther')" data-type="closeOther" [innerHTML]="i18n.closeOther"></li>
      <li
        nz-menu-item
        (click)="click($event, 'closeRight')"
        data-type="closeRight"
        [nzDisabled]="item.last"
        [innerHTML]="i18n.closeRight"
      ></li>
      @if (customContextMenu!.length > 0) {
        <li nz-menu-divider></li>
        @for (i of customContextMenu; track $index) {
          <li
            nz-menu-item
            [attr.data-type]="i.id"
            [nzDisabled]="isDisabled(i)"
            (click)="click($event, 'custom', i)"
            [innerHTML]="i.title"
          ></li>
        }
      }
    </ul>
  `,
		isInline: true,
		dependencies: [{
			kind: "directive",
			type: NzMenuDirective,
			selector: "[nz-menu]",
			inputs: [
				"nzInlineIndent",
				"nzTheme",
				"nzMode",
				"nzInlineCollapsed",
				"nzSelectable"
			],
			outputs: ["nzClick"],
			exportAs: ["nzMenu"]
		}, {
			kind: "component",
			type: NzMenuItemComponent,
			selector: "[nz-menu-item]",
			inputs: [
				"nzPaddingLeft",
				"nzDisabled",
				"nzSelected",
				"nzDanger",
				"nzMatchRouterExact",
				"nzMatchRouter"
			],
			exportAs: ["nzMenuItem"]
		}],
		changeDetection: i0.ChangeDetectionStrategy.OnPush,
		encapsulation: i0.ViewEncapsulation.None
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: ReuseTabContextMenuComponent,
	decorators: [{
		type: Component,
		args: [{
			selector: "reuse-tab-context-menu",
			template: `
    <ul nz-menu>
      @if (item.active) {
        <li nz-menu-item (click)="click($event, 'refresh')" data-type="refresh" [innerHTML]="i18n.refresh"></li>
      }
      <li
        nz-menu-item
        (click)="click($event, 'close')"
        data-type="close"
        [nzDisabled]="!item.closable"
        [innerHTML]="i18n.close"
      ></li>
      <li nz-menu-item (click)="click($event, 'closeOther')" data-type="closeOther" [innerHTML]="i18n.closeOther"></li>
      <li
        nz-menu-item
        (click)="click($event, 'closeRight')"
        data-type="closeRight"
        [nzDisabled]="item.last"
        [innerHTML]="i18n.closeRight"
      ></li>
      @if (customContextMenu!.length > 0) {
        <li nz-menu-divider></li>
        @for (i of customContextMenu; track $index) {
          <li
            nz-menu-item
            [attr.data-type]="i.id"
            [nzDisabled]="isDisabled(i)"
            (click)="click($event, 'custom', i)"
            [innerHTML]="i.title"
          ></li>
        }
      }
    </ul>
  `,
			host: {
				"(document:click)": "closeMenu($event)",
				"(document:contextmenu)": "closeMenu($event)"
			},
			changeDetection: ChangeDetectionStrategy.OnPush,
			encapsulation: ViewEncapsulation.None,
			imports: [NzMenuDirective, NzMenuItemComponent]
		}]
	}],
	propDecorators: {
		i18n: [{ type: Input }],
		item: [{ type: Input }],
		event: [{ type: Input }],
		customContextMenu: [{ type: Input }],
		close: [{ type: Output }]
	}
});
var ReuseTabContextService = class ReuseTabContextService {
	overlay = inject(Overlay);
	ref = null;
	i18n;
	show = new Subject();
	close = new Subject();
	remove() {
		if (!this.ref) return;
		this.ref.detach();
		this.ref.dispose();
		this.ref = null;
	}
	open(context) {
		this.remove();
		const { event, item, customContextMenu } = context;
		const { x, y } = event;
		const positions = [new ConnectionPositionPair({
			originX: "start",
			originY: "bottom"
		}, {
			overlayX: "start",
			overlayY: "top"
		}), new ConnectionPositionPair({
			originX: "start",
			originY: "top"
		}, {
			overlayX: "start",
			overlayY: "bottom"
		})];
		const positionStrategy = this.overlay.position().flexibleConnectedTo({
			x,
			y
		}).withPositions(positions);
		this.ref = this.overlay.create({
			positionStrategy,
			panelClass: "reuse-tab__cm",
			scrollStrategy: this.overlay.scrollStrategies.close()
		});
		const comp = this.ref.attach(new ComponentPortal(ReuseTabContextMenuComponent));
		const instance = comp.instance;
		instance.i18n = this.i18n;
		instance.item = { ...item };
		instance.customContextMenu = customContextMenu;
		instance.event = event;
		const sub$ = new Subscription();
		sub$.add(instance.close.subscribe((res) => {
			this.close.next(res);
			this.remove();
		}));
		comp.onDestroy(() => sub$.unsubscribe());
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: ReuseTabContextService,
		deps: [],
		target: i0.ɵɵFactoryTarget.Injectable
	});
	static ɵprov = i0.ɵɵngDeclareInjectable({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: ReuseTabContextService
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: ReuseTabContextService,
	decorators: [{ type: Injectable }]
});
var ReuseTabContextComponent = class ReuseTabContextComponent {
	srv = inject(ReuseTabContextService);
	set i18n(value) {
		this.srv.i18n = value;
	}
	change = new EventEmitter();
	constructor() {
		this.srv.show.pipe(takeUntilDestroyed()).subscribe((context) => this.srv.open(context));
		this.srv.close.pipe(takeUntilDestroyed()).subscribe((res) => this.change.emit(res));
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: ReuseTabContextComponent,
		deps: [],
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "14.0.0",
		version: "22.2.0",
		type: ReuseTabContextComponent,
		isStandalone: true,
		selector: "reuse-tab-context",
		inputs: { i18n: "i18n" },
		outputs: { change: "change" },
		ngImport: i0,
		template: ``,
		isInline: true
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: ReuseTabContextComponent,
	decorators: [{
		type: Component,
		args: [{
			selector: "reuse-tab-context",
			template: ``
		}]
	}],
	ctorParameters: () => [],
	propDecorators: {
		i18n: [{ type: Input }],
		change: [{ type: Output }]
	}
});
var ReuseTabContextDirective = class ReuseTabContextDirective {
	srv = inject(ReuseTabContextService);
	item = input.required({
		...ngDevMode ? { debugName: "item" } : /* istanbul ignore next */ {},
		alias: "reuse-tab-context-menu"
	});
	customContextMenu = input.required(...ngDevMode ? [{ debugName: "customContextMenu" }] : /* istanbul ignore next */ []);
	_onContextMenu(event) {
		this.srv.show.next({
			event,
			item: this.item(),
			customContextMenu: this.customContextMenu()
		});
		event.preventDefault();
		event.stopPropagation();
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: ReuseTabContextDirective,
		deps: [],
		target: i0.ɵɵFactoryTarget.Directive
	});
	static ɵdir = i0.ɵɵngDeclareDirective({
		minVersion: "17.1.0",
		version: "22.2.0",
		type: ReuseTabContextDirective,
		isStandalone: true,
		selector: "[reuse-tab-context-menu]",
		inputs: {
			item: {
				classPropertyName: "item",
				publicName: "reuse-tab-context-menu",
				isSignal: true,
				isRequired: true,
				transformFunction: null
			},
			customContextMenu: {
				classPropertyName: "customContextMenu",
				publicName: "customContextMenu",
				isSignal: true,
				isRequired: true,
				transformFunction: null
			}
		},
		host: { listeners: { "contextmenu": "_onContextMenu($event)" } },
		exportAs: ["reuseTabContextMenu"],
		ngImport: i0
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: ReuseTabContextDirective,
	decorators: [{
		type: Directive,
		args: [{
			selector: "[reuse-tab-context-menu]",
			exportAs: "reuseTabContextMenu",
			host: { "(contextmenu)": "_onContextMenu($event)" }
		}]
	}],
	propDecorators: {
		item: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "reuse-tab-context-menu",
				required: true
			}]
		}],
		customContextMenu: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "customContextMenu",
				required: true
			}]
		}]
	}
});
var ReuseTabMatchMode;
(function(ReuseTabMatchMode) {
	ReuseTabMatchMode[ReuseTabMatchMode["Menu"] = 0] = "Menu";
	ReuseTabMatchMode[ReuseTabMatchMode["MenuForce"] = 1] = "MenuForce";
	ReuseTabMatchMode[ReuseTabMatchMode["URL"] = 2] = "URL";
})(ReuseTabMatchMode || (ReuseTabMatchMode = {}));
const REUSE_TAB_CACHED_MANAGER = new InjectionToken("REUSE_TAB_CACHED_MANAGER");
var ReuseTabCachedManagerFactory = class {
	list = [];
	title = {};
	closable = {};
};
const REUSE_TAB_STORAGE_KEY = new InjectionToken("REUSE_TAB_STORAGE_KEY");
const REUSE_TAB_STORAGE_STATE = new InjectionToken("REUSE_TAB_STORAGE_STATE");
var ReuseTabLocalStorageState = class {
	get(key) {
		return JSON.parse(localStorage.getItem(key) ?? "[]") ?? [];
	}
	update(key, value) {
		localStorage.setItem(key, JSON.stringify(value));
		return true;
	}
	remove(key) {
		localStorage.removeItem(key);
	}
};
var ReuseTabService = class ReuseTabService {
	injector = inject(Injector);
	menuService = inject(MenuService);
	cached = inject(REUSE_TAB_CACHED_MANAGER);
	stateKey = inject(REUSE_TAB_STORAGE_KEY);
	stateSrv = inject(REUSE_TAB_STORAGE_STATE);
	_inited = false;
	_max = 10;
	_keepingScroll = false;
	_cachedChange = new BehaviorSubject(null);
	_router$;
	removeUrlBuffer = null;
	positionBuffer = {};
	componentRef;
	debug = false;
	routeParamMatchMode = "strict";
	mode = ReuseTabMatchMode.Menu;
	excludes = [];
	storageState = false;
	get snapshot() {
		return this.injector.get(ActivatedRoute).snapshot;
	}
	get inited() {
		return this._inited;
	}
	get curUrl() {
		return this.getUrl(this.snapshot);
	}
	set max(value) {
		this._max = Math.min(Math.max(value, 2), 100);
		for (let i = this.cached.list.length; i > this._max; i--) this.cached.list.pop();
	}
	set keepingScroll(value) {
		this._keepingScroll = value;
		this.initScroll();
	}
	get keepingScroll() {
		return this._keepingScroll;
	}
	keepingScrollContainer;
	get items() {
		return this.cached.list;
	}
	get count() {
		return this.cached.list.length;
	}
	get change() {
		return this._cachedChange.asObservable();
	}
	set title(value) {
		const url = this.curUrl;
		if (typeof value === "string") value = { text: value };
		this.cached.title[url] = value;
		this.di("update current tag title: ", value);
		this._cachedChange.next({
			active: "title",
			url,
			title: value,
			list: this.cached.list
		});
	}
	index(url) {
		return this.cached.list.findIndex((w) => w.url === url);
	}
	exists(url) {
		return this.index(url) !== -1;
	}
	get(url) {
		return url ? this.cached.list.find((w) => w.url === url) ?? null : null;
	}
	remove(url, includeNonCloseable) {
		const idx = typeof url === "string" ? this.index(url) : url;
		const item = idx !== -1 ? this.cached.list[idx] : null;
		if (!item || !includeNonCloseable && !item.closable) return false;
		this.destroy(item._handle);
		this.cached.list.splice(idx, 1);
		delete this.cached.title[url];
		return true;
	}
	close(url, includeNonCloseable = false) {
		this.removeUrlBuffer = url;
		this.remove(url, includeNonCloseable);
		this._cachedChange.next({
			active: "close",
			url,
			list: this.cached.list
		});
		this.di("close tag", url);
		return true;
	}
	closeRight(url, includeNonCloseable = false) {
		const start = this.index(url);
		for (let i = this.count - 1; i > start; i--) this.remove(i, includeNonCloseable);
		this.removeUrlBuffer = null;
		this._cachedChange.next({
			active: "closeRight",
			url,
			list: this.cached.list
		});
		this.di("close right tages", url);
		return true;
	}
	clear(includeNonCloseable = false) {
		this.cached.list.forEach((w) => {
			if (!includeNonCloseable && w.closable) this.destroy(w._handle);
		});
		this.cached.list = this.cached.list.filter((w) => !includeNonCloseable && !w.closable);
		this.removeUrlBuffer = null;
		this._cachedChange.next({
			active: "clear",
			list: this.cached.list
		});
		this.di("clear all catch");
	}
	move(url, position) {
		const start = this.cached.list.findIndex((w) => w.url === url);
		if (start === -1) return;
		const data = this.cached.list.slice();
		data.splice(position < 0 ? data.length + position : position, 0, data.splice(start, 1)[0]);
		this.cached.list = data;
		this._cachedChange.next({
			active: "move",
			url,
			position,
			list: this.cached.list
		});
	}
	replace(newUrl) {
		const url = this.curUrl;
		this.injector.get(Router).navigateByUrl(newUrl).then(() => {
			if (this.exists(url)) this.close(url, true);
			else this.removeUrlBuffer = url;
		});
	}
	getTitle(url, route) {
		if (this.cached.title[url]) return this.cached.title[url];
		if (route && route.data && (route.data.titleI18n || route.data.title)) return {
			text: route.data.title,
			i18n: route.data.titleI18n
		};
		const menu = this.getMenu(url);
		return menu ? {
			text: menu.text,
			i18n: menu.i18n
		} : { text: url };
	}
	clearTitleCached() {
		this.cached.title = {};
	}
	set closable(value) {
		const url = this.curUrl;
		this.cached.closable[url] = value;
		this.di("update current tag closable: ", value);
		this._cachedChange.next({
			active: "closable",
			closable: value,
			list: this.cached.list
		});
	}
	getClosable(url, route) {
		if (typeof this.cached.closable[url] !== "undefined") return this.cached.closable[url];
		if (route && route.data && typeof route.data.reuseClosable === "boolean") return route.data.reuseClosable;
		const menu = this.mode !== ReuseTabMatchMode.URL ? this.getMenu(url) : null;
		if (menu && typeof menu.reuseClosable === "boolean") return menu.reuseClosable;
		return true;
	}
	clearClosableCached() {
		this.cached.closable = {};
	}
	getTruthRoute(route) {
		let next = route;
		while (next.firstChild) next = next.firstChild;
		return next;
	}
	getUrl(route) {
		let next = this.getTruthRoute(route);
		const segments = [];
		while (next) {
			segments.push(next.url.join("/"));
			next = next.parent;
		}
		return `/${segments.filter((i) => i).reverse().join("/")}`;
	}
	can(route) {
		const url = this.getUrl(route);
		if (url === this.removeUrlBuffer) return false;
		if (route.data && typeof route.data.reuse === "boolean") return route.data.reuse;
		if (this.mode !== ReuseTabMatchMode.URL) {
			const menu = this.getMenu(url);
			if (!menu) return false;
			if (this.mode === ReuseTabMatchMode.Menu) {
				if (menu.reuse === false) return false;
			} else if (!menu.reuse || menu.reuse !== true) return false;
			return true;
		}
		return !this.isExclude(url);
	}
	isExclude(url) {
		return this.excludes.findIndex((r) => r.test(url)) !== -1;
	}
	refresh(data) {
		this._cachedChange.next({
			active: "refresh",
			data
		});
	}
	destroy(_handle) {
		if (_handle && _handle.componentRef && _handle.componentRef.destroy) _handle.componentRef.destroy();
	}
	di(...args) {
		if (typeof ngDevMode === "undefined" || ngDevMode) {
			if (!this.debug) return;
			console.warn(...args);
		}
	}
	constructor() {
		if (this.cached == null) this.cached = {
			list: [],
			title: {},
			closable: {}
		};
	}
	init() {
		this.initScroll();
		this._inited = true;
		this.loadState();
	}
	loadState() {
		if (!this.storageState) return;
		this.cached.list = this.stateSrv.get(this.stateKey).map((v) => ({
			...v,
			title: { text: v.title },
			url: v.url,
			position: v.position
		}));
		this._cachedChange.next({ active: "loadState" });
	}
	getMenu(url) {
		const menus = this.menuService.getPathByUrl(url);
		if (!menus || menus.length === 0) return null;
		return menus.pop();
	}
	runHook(method, comp, type = "init") {
		if (typeof comp === "number") comp = this.cached.list[comp]._handle?.componentRef;
		if (comp == null || !comp.instance) return;
		const compThis = comp.instance;
		const fn = compThis[method];
		if (typeof fn !== "function") return;
		if (method === "_onReuseInit") fn.call(compThis, type);
		else fn.call(compThis);
	}
	hasInValidRoute(route) {
		return !route.routeConfig || !!route.routeConfig.loadChildren || !!route.routeConfig.children;
	}
	shouldDetach(route) {
		if (this.hasInValidRoute(route)) return false;
		this.di("#shouldDetach", this.can(route), this.getUrl(route));
		return this.can(route);
	}
	saveCache(snapshot, _handle, pos) {
		const snapshotTrue = this.getTruthRoute(snapshot);
		const url = this.getUrl(snapshot);
		const idx = this.index(url);
		const item = {
			title: this.getTitle(url, snapshotTrue),
			url,
			closable: this.getClosable(url, snapshot),
			_snapshot: snapshot,
			_handle
		};
		if (idx < 0) {
			this.items.splice(pos ?? this.items.length, 0, item);
			if (this.count > this._max) {
				const closeIdx = this.items.findIndex((w) => w.url !== url && w.closable);
				if (closeIdx !== -1) {
					const closeItem = this.items[closeIdx];
					this.remove(closeIdx, false);
					timer(1).pipe(take(1)).subscribe(() => this._cachedChange.next({
						active: "close",
						url: closeItem.url,
						list: this.cached.list
					}));
				}
			}
		} else this.items[idx] = item;
	}
	store(_snapshot, _handle) {
		const url = this.getUrl(_snapshot);
		if (_handle != null) this.saveCache(_snapshot, _handle);
		const list = this.cached.list;
		const item = {
			title: this.getTitle(url, _snapshot),
			closable: this.getClosable(url, _snapshot),
			position: this.getKeepingScroll(url, _snapshot) ? this.positionBuffer[url] : null,
			url,
			_snapshot,
			_handle
		};
		const idx = this.index(url);
		const cahcedComponentRef = list[idx]?._handle?.componentRef;
		if (_handle == null && cahcedComponentRef != null) timer(100).pipe(take(1)).subscribe(() => this.runHook("_onReuseInit", cahcedComponentRef));
		list[idx] = item;
		this.removeUrlBuffer = null;
		this.di("#store", "[override]", url);
		if (_handle && _handle.componentRef) this.runHook("_onReuseDestroy", _handle.componentRef);
		this._cachedChange.next({
			active: "override",
			item,
			list
		});
	}
	shouldAttach(route) {
		if (this.hasInValidRoute(route)) return false;
		const url = this.getUrl(route);
		const data = this.get(url);
		const ret = !!(data && data._handle);
		this.di("#shouldAttach", ret, url);
		if (!ret) this._cachedChange.next({
			active: "add",
			url,
			list: this.cached.list
		});
		return ret;
	}
	retrieve(route) {
		if (this.hasInValidRoute(route)) return null;
		const url = this.getUrl(route);
		const data = this.get(url);
		const ret = data && data._handle;
		this.di("#retrieve", url, ret);
		return ret;
	}
	shouldReuseRoute(future, curr) {
		let ret = future.routeConfig === curr.routeConfig;
		if (!ret) return false;
		const path = (future.routeConfig && future.routeConfig.path) ?? "";
		if (path.length > 0 && ~path.indexOf(":")) {
			const mode = this.routeParamMatchMode;
			if (typeof mode === "function") ret = mode(future, curr);
			else if (mode === "strict") ret = this.getUrl(future) === this.getUrl(curr);
			else ret = path === ((curr.routeConfig && curr.routeConfig.path) ?? "");
		}
		this.di("=====================");
		this.di("#shouldReuseRoute", ret, `${this.getUrl(curr)}=>${this.getUrl(future)}`, future, curr);
		return ret;
	}
	getKeepingScroll(url, route) {
		if (route && route.data && typeof route.data.keepingScroll === "boolean") return route.data.keepingScroll;
		const menu = this.mode !== ReuseTabMatchMode.URL ? this.getMenu(url) : null;
		if (menu && typeof menu.keepingScroll === "boolean") return menu.keepingScroll;
		return this.keepingScroll;
	}
	get isDisabledInRouter() {
		return this.injector.get(ROUTER_CONFIGURATION, {}).scrollPositionRestoration === "disabled";
	}
	get ss() {
		return this.injector.get(ScrollService);
	}
	initScroll() {
		if (this._router$) this._router$.unsubscribe();
		this._router$ = this.injector.get(Router).events.subscribe((e) => {
			if (e instanceof NavigationStart) {
				const url = this.curUrl;
				if (this.getKeepingScroll(url, this.getTruthRoute(this.snapshot))) this.positionBuffer[url] = this.ss.getScrollPosition(this.keepingScrollContainer);
				else delete this.positionBuffer[url];
			} else if (e instanceof NavigationEnd) {
				const url = this.curUrl;
				const item = this.get(url);
				if (item && item.position && this.getKeepingScroll(url, this.getTruthRoute(this.snapshot))) {
					if (this.isDisabledInRouter) this.ss.scrollToPosition(this.keepingScrollContainer, item.position);
					else setTimeout(() => this.ss.scrollToPosition(this.keepingScrollContainer, item.position), 1);
				}
			}
		});
	}
	ngOnDestroy() {
		const { _cachedChange, _router$ } = this;
		this.clear();
		this.cached.list = [];
		_cachedChange.complete();
		if (_router$) _router$.unsubscribe();
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: ReuseTabService,
		deps: [],
		target: i0.ɵɵFactoryTarget.Injectable
	});
	static ɵprov = i0.ɵɵngDeclareInjectable({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: ReuseTabService
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: ReuseTabService,
	decorators: [{ type: Injectable }],
	ctorParameters: () => []
});
var ReuseTabComponent = class ReuseTabComponent {
	srv = inject(ReuseTabService, { optional: true });
	router = inject(Router);
	route = inject(ActivatedRoute);
	i18nSrv = inject(ALAIN_I18N_TOKEN);
	doc = inject(DOCUMENT);
	platform = inject(Platform);
	stateKey = inject(REUSE_TAB_STORAGE_KEY);
	stateSrv = inject(REUSE_TAB_STORAGE_STATE);
	tabset = viewChild.required(NzTabsComponent, ...ngDevMode ? [{ debugName: "tabset" }] : /* istanbul ignore next */ []);
	destroy$ = inject(DestroyRef);
	dir = inject(Directionality).valueSignal;
	list = signal([], ...ngDevMode ? [{ debugName: "list" }] : /* istanbul ignore next */ []);
	item;
	pos = signal(0, ...ngDevMode ? [{ debugName: "pos" }] : /* istanbul ignore next */ []);
	mode = input(ReuseTabMatchMode.Menu, ...ngDevMode ? [{ debugName: "mode" }] : /* istanbul ignore next */ []);
	i18n = input(...ngDevMode ? [void 0, { debugName: "i18n" }] : /* istanbul ignore next */ []);
	debug = input(false, {
		...ngDevMode ? { debugName: "debug" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	max = input(void 0, {
		...ngDevMode ? { debugName: "max" } : /* istanbul ignore next */ {},
		transform: numberAttribute
	});
	tabMaxWidth = input(void 0, {
		...ngDevMode ? { debugName: "tabMaxWidth" } : /* istanbul ignore next */ {},
		transform: numberAttribute
	});
	excludes = input(...ngDevMode ? [void 0, { debugName: "excludes" }] : /* istanbul ignore next */ []);
	allowClose = input(true, {
		...ngDevMode ? { debugName: "allowClose" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	keepingScroll = input(false, {
		...ngDevMode ? { debugName: "keepingScroll" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	storageState = input(false, {
		...ngDevMode ? { debugName: "storageState" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	keepingScrollContainer = input(...ngDevMode ? [void 0, { debugName: "keepingScrollContainer" }] : /* istanbul ignore next */ []);
	customContextMenu = input([], ...ngDevMode ? [{ debugName: "customContextMenu" }] : /* istanbul ignore next */ []);
	tabBarExtraContent = input(...ngDevMode ? [void 0, { debugName: "tabBarExtraContent" }] : /* istanbul ignore next */ []);
	tabBarGutter = input(...ngDevMode ? [void 0, { debugName: "tabBarGutter" }] : /* istanbul ignore next */ []);
	tabBarStyle = input(null, ...ngDevMode ? [{ debugName: "tabBarStyle" }] : /* istanbul ignore next */ []);
	tabType = input("line", ...ngDevMode ? [{ debugName: "tabType" }] : /* istanbul ignore next */ []);
	routeParamMatchMode = input("strict", ...ngDevMode ? [{ debugName: "routeParamMatchMode" }] : /* istanbul ignore next */ []);
	disabled = input(false, {
		...ngDevMode ? { debugName: "disabled" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	titleRender = input(...ngDevMode ? [void 0, { debugName: "titleRender" }] : /* istanbul ignore next */ []);
	canClose = input(...ngDevMode ? [void 0, { debugName: "canClose" }] : /* istanbul ignore next */ []);
	trackByFn = input((item) => item.url, ...ngDevMode ? [{ debugName: "trackByFn" }] : /* istanbul ignore next */ []);
	change = output();
	close = output();
	genTit(title) {
		return title.i18n ? this.i18nSrv.fanyi(title.i18n) : title.text;
	}
	get curUrl() {
		return this.srv.getUrl(this.route.snapshot);
	}
	genCurItem() {
		const url = this.curUrl;
		const snapshotTrue = this.srv.getTruthRoute(this.route.snapshot);
		return {
			url,
			title: this.genTit(this.srv.getTitle(url, snapshotTrue)),
			closable: this.allowClose() && this.srv.count > 0 && this.srv.getClosable(url, snapshotTrue),
			active: false,
			last: false,
			index: 0
		};
	}
	genList(notify) {
		const ls = this.srv.items.map((item, index) => ({
			url: item.url,
			title: this.genTit(item.title),
			closable: this.allowClose() && this.srv.count > 0 && this.srv.getClosable(item.url, item._snapshot),
			position: item.position,
			index,
			active: false,
			last: false
		}));
		const url = this.curUrl;
		let addCurrent = ls.findIndex((w) => w.url === url) === -1;
		if (notify && notify.active === "close" && notify.url === url) {
			addCurrent = false;
			let toPos = 0;
			const curItem = this.list().find((w) => w.url === url);
			if (curItem.index === ls.length) toPos = ls.length - 1;
			else if (curItem.index < ls.length) toPos = Math.max(0, curItem.index);
			this.router.navigateByUrl(ls[toPos].url);
		}
		if (addCurrent) {
			const addPos = this.pos() + 1;
			ls.splice(addPos, 0, this.genCurItem());
			this.srv.saveCache(this.route.snapshot, null, addPos);
		}
		ls.forEach((item, index) => item.index = index);
		if (ls.length === 1) ls[0].closable = false;
		this.list.set(ls);
		this.updatePos();
	}
	updateTitle(res) {
		this.list.update((ls) => {
			const item = ls.find((w) => w.url === res.url);
			if (!item) return ls;
			item.title = this.genTit(res.title);
			return [...ls];
		});
	}
	refresh(item) {
		this.srv.runHook("_onReuseInit", this.pos() === item.index ? this.srv.componentRef : item.index, "refresh");
	}
	saveState() {
		if (!this.srv.inited || !this.storageState()) return;
		this.stateSrv?.update(this.stateKey, this.list());
	}
	contextMenuChange(res) {
		let fn = null;
		switch (res.type) {
			case "refresh":
				this.refresh(res.item);
				break;
			case "close":
				this._close(null, res.item.index, res.includeNonCloseable);
				break;
			case "closeRight":
				fn = () => {
					this.srv.closeRight(res.item.url, res.includeNonCloseable);
					this.close.emit(null);
				};
				break;
			case "closeOther": fn = () => {
				this.srv.clear(res.includeNonCloseable);
				this.close.emit(null);
			};
		}
		if (!fn) return;
		if (!res.item.active && res.item.index <= this.list().find((w) => w.active).index) this._to(res.item.index, fn);
		else fn();
	}
	_to(index, cb) {
		index = Math.max(0, Math.min(index, this.list().length - 1));
		const item = this.list()[index];
		this.router.navigateByUrl(item.url).then((res) => {
			if (!res) return;
			this.item = item;
			this.change.emit(item);
			cb?.();
		});
	}
	_close(e, idx, includeNonCloseable) {
		if (e != null) {
			e.preventDefault();
			e.stopPropagation();
		}
		const item = this.list()[idx];
		const canClose = this.canClose();
		(canClose ? canClose({
			item,
			includeNonCloseable
		}) : of(true)).pipe(filter((v) => v)).subscribe(() => {
			this.srv.close(item.url, includeNonCloseable);
			this.close.emit(item);
		});
		return false;
	}
	activate(instance) {
		if (this.srv == null) return;
		this.srv.componentRef = { instance };
	}
	updatePos() {
		const url = this.srv.getUrl(this.route.snapshot);
		const ls = this.list().filter((w) => w.url === url || !this.srv.isExclude(w.url));
		if (ls.length === 0) return;
		const last = ls[ls.length - 1];
		const item = ls.find((w) => w.url === url);
		last.last = true;
		const pos = item == null ? last.index : item.index;
		ls.forEach((i, idx) => i.active = pos === idx);
		this.pos.set(pos);
		this.tabset().nzSelectedIndex = pos;
		this.list.set(ls);
		this.saveState();
	}
	ngOnInit() {
		if (!this.platform.isBrowser || this.srv == null) return;
		this.srv.change.pipe(takeUntilDestroyed(this.destroy$)).subscribe((res) => {
			switch (res?.active) {
				case "title":
					this.updateTitle(res);
					return;
				case "override": if (res?.list?.length === this.list.length) {
					this.updatePos();
					return;
				}
			}
			this.genList(res);
		});
		this.i18nSrv.change.pipe(filter(() => this.srv.inited), takeUntilDestroyed(this.destroy$), debounceTime(100)).subscribe(() => this.genList({ active: "title" }));
		this.srv.init();
	}
	ngOnChanges(changes) {
		if (!this.platform.isBrowser || this.srv == null) return;
		if (changes.max) this.srv.max = this.max();
		if (changes.excludes) this.srv.excludes = this.excludes();
		if (changes.mode) this.srv.mode = this.mode();
		if (changes.routeParamMatchMode) this.srv.routeParamMatchMode = this.routeParamMatchMode();
		if (changes.keepingScroll) {
			this.srv.keepingScroll = this.keepingScroll();
			const keepingScrollContainer = this.keepingScrollContainer();
			this.srv.keepingScrollContainer = typeof keepingScrollContainer === "string" ? this.doc.querySelector(keepingScrollContainer) : keepingScrollContainer;
		}
		if (changes.storageState) this.srv.storageState = this.storageState();
		this.srv.debug = this.debug();
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: ReuseTabComponent,
		deps: [],
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "17.0.0",
		version: "22.2.0",
		type: ReuseTabComponent,
		isStandalone: true,
		selector: "reuse-tab, [reuse-tab]",
		inputs: {
			mode: {
				classPropertyName: "mode",
				publicName: "mode",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			i18n: {
				classPropertyName: "i18n",
				publicName: "i18n",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			debug: {
				classPropertyName: "debug",
				publicName: "debug",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			max: {
				classPropertyName: "max",
				publicName: "max",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			tabMaxWidth: {
				classPropertyName: "tabMaxWidth",
				publicName: "tabMaxWidth",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			excludes: {
				classPropertyName: "excludes",
				publicName: "excludes",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			allowClose: {
				classPropertyName: "allowClose",
				publicName: "allowClose",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			keepingScroll: {
				classPropertyName: "keepingScroll",
				publicName: "keepingScroll",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			storageState: {
				classPropertyName: "storageState",
				publicName: "storageState",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			keepingScrollContainer: {
				classPropertyName: "keepingScrollContainer",
				publicName: "keepingScrollContainer",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			customContextMenu: {
				classPropertyName: "customContextMenu",
				publicName: "customContextMenu",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			tabBarExtraContent: {
				classPropertyName: "tabBarExtraContent",
				publicName: "tabBarExtraContent",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			tabBarGutter: {
				classPropertyName: "tabBarGutter",
				publicName: "tabBarGutter",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			tabBarStyle: {
				classPropertyName: "tabBarStyle",
				publicName: "tabBarStyle",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			tabType: {
				classPropertyName: "tabType",
				publicName: "tabType",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			routeParamMatchMode: {
				classPropertyName: "routeParamMatchMode",
				publicName: "routeParamMatchMode",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			disabled: {
				classPropertyName: "disabled",
				publicName: "disabled",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			titleRender: {
				classPropertyName: "titleRender",
				publicName: "titleRender",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			canClose: {
				classPropertyName: "canClose",
				publicName: "canClose",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			trackByFn: {
				classPropertyName: "trackByFn",
				publicName: "trackByFn",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			}
		},
		outputs: {
			change: "change",
			close: "close"
		},
		host: {
			properties: {
				"class.reuse-tab__line": "tabType() === 'line'",
				"class.reuse-tab__card": "tabType() === 'card'",
				"class.reuse-tab__disabled": "disabled()",
				"class.reuse-tab-rtl": "dir() === 'rtl'"
			},
			classAttribute: "reuse-tab"
		},
		providers: [ReuseTabContextService],
		viewQueries: [{
			propertyName: "tabset",
			first: true,
			predicate: NzTabsComponent,
			descendants: true,
			isSignal: true
		}],
		exportAs: ["reuseTab"],
		usesOnChanges: true,
		ngImport: i0,
		template: `
    <nz-tabs
      [nzSelectedIndex]="pos()"
      [nzAnimated]="false"
      [nzType]="tabType()"
      [nzTabBarExtraContent]="tabBarExtraContent()"
      [nzTabBarGutter]="tabBarGutter()"
      [nzTabBarStyle]="tabBarStyle()"
    >
      @for (i of list(); track trackByFn()(i)) {
        <nz-tab [nzTitle]="titleTemplate" (nzClick)="_to($index)">
          <ng-template #titleTemplate>
            <div
              [reuse-tab-context-menu]="i"
              [customContextMenu]="customContextMenu()"
              class="reuse-tab__name"
              [attr.title]="i.title"
            >
              <span [class.reuse-tab__name-width]="tabMaxWidth()" [style.max-width.px]="tabMaxWidth()">
                @if (titleRender()) {
                  <ng-template [ngTemplateOutlet]="titleRender()" [ngTemplateOutletContext]="{ $implicit: i }" />
                } @else {
                  {{ i.title }}
                }
              </span>
            </div>
            @if (i.closable) {
              <nz-icon nzType="close" class="reuse-tab__op" (click)="_close($event, $index, false)" />
            }
          </ng-template>
        </nz-tab>
      }
    </nz-tabs>
    <reuse-tab-context [i18n]="i18n()" (change)="contextMenuChange($event)" />
  `,
		isInline: true,
		dependencies: [
			{
				kind: "directive",
				type: NgTemplateOutlet,
				selector: "[ngTemplateOutlet]",
				inputs: [
					"ngTemplateOutletContext",
					"ngTemplateOutlet",
					"ngTemplateOutletInjector"
				]
			},
			{
				kind: "component",
				type: NzTabsComponent,
				selector: "nz-tabs",
				inputs: [
					"nzSelectedIndex",
					"nzTabPosition",
					"nzTabBarExtraContent",
					"nzCanDeactivate",
					"nzAddIcon",
					"nzTabBarStyle",
					"nzType",
					"nzSize",
					"nzAnimated",
					"nzTabBarGutter",
					"nzHideAdd",
					"nzCentered",
					"nzHideAll",
					"nzLinkRouter",
					"nzLinkExact",
					"nzDestroyInactiveTabPane",
					"nzIndicator"
				],
				outputs: [
					"nzSelectChange",
					"nzSelectedIndexChange",
					"nzTabListScroll",
					"nzClose",
					"nzAdd"
				],
				exportAs: ["nzTabs"]
			},
			{
				kind: "component",
				type: NzTabComponent,
				selector: "nz-tab",
				inputs: [
					"nzTitle",
					"nzClosable",
					"nzCloseIcon",
					"nzDisabled",
					"nzForceRender"
				],
				outputs: [
					"nzSelect",
					"nzDeselect",
					"nzClick",
					"nzContextmenu"
				],
				exportAs: ["nzTab"]
			},
			{
				kind: "directive",
				type: ReuseTabContextDirective,
				selector: "[reuse-tab-context-menu]",
				inputs: ["reuse-tab-context-menu", "customContextMenu"],
				exportAs: ["reuseTabContextMenu"]
			},
			{
				kind: "component",
				type: ReuseTabContextComponent,
				selector: "reuse-tab-context",
				inputs: ["i18n"],
				outputs: ["change"]
			},
			{
				kind: "directive",
				type: NzIconDirective,
				selector: "nz-icon,[nz-icon]",
				inputs: [
					"nzType",
					"nzTheme",
					"nzTwotoneColor",
					"nzSpin",
					"nzRotate",
					"nzIconfont",
					"aria-label"
				],
				exportAs: ["nzIcon"]
			}
		],
		changeDetection: i0.ChangeDetectionStrategy.OnPush,
		encapsulation: i0.ViewEncapsulation.None
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: ReuseTabComponent,
	decorators: [{
		type: Component,
		args: [{
			selector: "reuse-tab, [reuse-tab]",
			exportAs: "reuseTab",
			template: `
    <nz-tabs
      [nzSelectedIndex]="pos()"
      [nzAnimated]="false"
      [nzType]="tabType()"
      [nzTabBarExtraContent]="tabBarExtraContent()"
      [nzTabBarGutter]="tabBarGutter()"
      [nzTabBarStyle]="tabBarStyle()"
    >
      @for (i of list(); track trackByFn()(i)) {
        <nz-tab [nzTitle]="titleTemplate" (nzClick)="_to($index)">
          <ng-template #titleTemplate>
            <div
              [reuse-tab-context-menu]="i"
              [customContextMenu]="customContextMenu()"
              class="reuse-tab__name"
              [attr.title]="i.title"
            >
              <span [class.reuse-tab__name-width]="tabMaxWidth()" [style.max-width.px]="tabMaxWidth()">
                @if (titleRender()) {
                  <ng-template [ngTemplateOutlet]="titleRender()" [ngTemplateOutletContext]="{ $implicit: i }" />
                } @else {
                  {{ i.title }}
                }
              </span>
            </div>
            @if (i.closable) {
              <nz-icon nzType="close" class="reuse-tab__op" (click)="_close($event, $index, false)" />
            }
          </ng-template>
        </nz-tab>
      }
    </nz-tabs>
    <reuse-tab-context [i18n]="i18n()" (change)="contextMenuChange($event)" />
  `,
			host: {
				class: "reuse-tab",
				"[class.reuse-tab__line]": `tabType() === 'line'`,
				"[class.reuse-tab__card]": `tabType() === 'card'`,
				"[class.reuse-tab__disabled]": `disabled()`,
				"[class.reuse-tab-rtl]": `dir() === 'rtl'`
			},
			providers: [ReuseTabContextService],
			changeDetection: ChangeDetectionStrategy.OnPush,
			encapsulation: ViewEncapsulation.None,
			imports: [
				NgTemplateOutlet,
				NzTabsComponent,
				NzTabComponent,
				ReuseTabContextDirective,
				ReuseTabContextComponent,
				NzIconDirective
			]
		}]
	}],
	propDecorators: {
		tabset: [{
			type: i0.ViewChild,
			args: [i0.forwardRef(() => NzTabsComponent), { isSignal: true }]
		}],
		mode: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "mode",
				required: false
			}]
		}],
		i18n: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "i18n",
				required: false
			}]
		}],
		debug: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "debug",
				required: false
			}]
		}],
		max: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "max",
				required: false
			}]
		}],
		tabMaxWidth: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "tabMaxWidth",
				required: false
			}]
		}],
		excludes: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "excludes",
				required: false
			}]
		}],
		allowClose: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "allowClose",
				required: false
			}]
		}],
		keepingScroll: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "keepingScroll",
				required: false
			}]
		}],
		storageState: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "storageState",
				required: false
			}]
		}],
		keepingScrollContainer: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "keepingScrollContainer",
				required: false
			}]
		}],
		customContextMenu: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "customContextMenu",
				required: false
			}]
		}],
		tabBarExtraContent: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "tabBarExtraContent",
				required: false
			}]
		}],
		tabBarGutter: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "tabBarGutter",
				required: false
			}]
		}],
		tabBarStyle: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "tabBarStyle",
				required: false
			}]
		}],
		tabType: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "tabType",
				required: false
			}]
		}],
		routeParamMatchMode: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "routeParamMatchMode",
				required: false
			}]
		}],
		disabled: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "disabled",
				required: false
			}]
		}],
		titleRender: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "titleRender",
				required: false
			}]
		}],
		canClose: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "canClose",
				required: false
			}]
		}],
		trackByFn: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "trackByFn",
				required: false
			}]
		}],
		change: [{
			type: i0.Output,
			args: ["change"]
		}],
		close: [{
			type: i0.Output,
			args: ["close"]
		}]
	}
});
var ReuseTabStrategy = class {
	srv = inject(ReuseTabService);
	shouldDetach(route) {
		return this.srv.shouldDetach(route);
	}
	store(route, handle) {
		this.srv.store(route, handle);
	}
	shouldAttach(route) {
		return this.srv.shouldAttach(route);
	}
	retrieve(route) {
		return this.srv.retrieve(route);
	}
	shouldReuseRoute(future, curr) {
		return this.srv.shouldReuseRoute(future, curr);
	}
};
const COMPONENTS = [ReuseTabComponent];
const NOEXPORTS = [
	ReuseTabContextMenuComponent,
	ReuseTabContextComponent,
	ReuseTabContextDirective
];
var ReuseTabModule = class ReuseTabModule {
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: ReuseTabModule,
		deps: [],
		target: i0.ɵɵFactoryTarget.NgModule
	});
	static ɵmod = i0.ɵɵngDeclareNgModule({
		minVersion: "14.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: ReuseTabModule,
		imports: [
			CommonModule,
			RouterModule,
			DelonLocaleModule,
			NzMenuModule,
			NzTabsModule,
			NzIconModule,
			OverlayModule,
			ReuseTabComponent,
			ReuseTabContextMenuComponent,
			ReuseTabContextComponent,
			ReuseTabContextDirective
		],
		exports: [ReuseTabComponent]
	});
	static ɵinj = i0.ɵɵngDeclareInjector({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: ReuseTabModule,
		providers: [
			{
				provide: REUSE_TAB_STORAGE_KEY,
				useValue: "_reuse-tab-state"
			},
			{
				provide: REUSE_TAB_STORAGE_STATE,
				useFactory: () => new ReuseTabLocalStorageState()
			},
			{
				provide: REUSE_TAB_CACHED_MANAGER,
				useFactory: () => new ReuseTabCachedManagerFactory()
			}
		],
		imports: [
			CommonModule,
			RouterModule,
			DelonLocaleModule,
			NzMenuModule,
			NzTabsModule,
			NzIconModule,
			OverlayModule,
			COMPONENTS,
			ReuseTabContextMenuComponent
		]
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: ReuseTabModule,
	decorators: [{
		type: NgModule,
		args: [{
			imports: [
				CommonModule,
				RouterModule,
				DelonLocaleModule,
				NzMenuModule,
				NzTabsModule,
				NzIconModule,
				OverlayModule,
				...COMPONENTS,
				...NOEXPORTS
			],
			providers: [
				{
					provide: REUSE_TAB_STORAGE_KEY,
					useValue: "_reuse-tab-state"
				},
				{
					provide: REUSE_TAB_STORAGE_STATE,
					useFactory: () => new ReuseTabLocalStorageState()
				},
				{
					provide: REUSE_TAB_CACHED_MANAGER,
					useFactory: () => new ReuseTabCachedManagerFactory()
				}
			],
			exports: COMPONENTS
		}]
	}]
});
var ReuseTabFeatureKind;
(function(ReuseTabFeatureKind) {
	ReuseTabFeatureKind[ReuseTabFeatureKind["CacheManager"] = 0] = "CacheManager";
	ReuseTabFeatureKind[ReuseTabFeatureKind["Store"] = 1] = "Store";
})(ReuseTabFeatureKind || (ReuseTabFeatureKind = {}));
function makeFeature(kind, providers) {
	return {
		ɵkind: kind,
		ɵproviders: providers
	};
}
function provideReuseTabConfig(options) {
	return makeEnvironmentProviders([
		ReuseTabService,
		{
			provide: REUSE_TAB_STORAGE_KEY,
			useValue: options?.storeKey ?? "_reuse-tab-state"
		},
		(options?.cacheManager ?? withCacheManager()).ɵproviders,
		(options?.store ?? withLocalStorage()).ɵproviders,
		{
			provide: RouteReuseStrategy,
			useClass: ReuseTabStrategy,
			deps: [ReuseTabService]
		},
		provideEnvironmentInitializer(() => {
			const srv = inject(ReuseTabService);
			if (options?.debug) srv.debug = options.debug;
			if (options?.mode) srv.mode = options.mode;
			if (options?.routeParamMatchMode) srv.routeParamMatchMode = options.routeParamMatchMode;
			if (options?.max) srv.max = options.max;
			if (options?.excludes) srv.excludes = options.excludes;
		})
	]);
}
function withCacheManager() {
	return makeFeature(ReuseTabFeatureKind.CacheManager, [{
		provide: REUSE_TAB_CACHED_MANAGER,
		useFactory: () => new ReuseTabCachedManagerFactory()
	}]);
}
function withLocalStorage() {
	return makeFeature(ReuseTabFeatureKind.Store, [{
		provide: REUSE_TAB_STORAGE_STATE,
		useFactory: () => new ReuseTabLocalStorageState()
	}]);
}
export { REUSE_TAB_CACHED_MANAGER, REUSE_TAB_STORAGE_KEY, REUSE_TAB_STORAGE_STATE, ReuseTabComponent, ReuseTabContextComponent, ReuseTabContextDirective, ReuseTabContextMenuComponent, ReuseTabContextService, ReuseTabFeatureKind, ReuseTabLocalStorageState, ReuseTabMatchMode, ReuseTabModule, ReuseTabService, ReuseTabStrategy, provideReuseTabConfig, withCacheManager, withLocalStorage };

//# sourceMappingURL=reuse-tab.mjs.map