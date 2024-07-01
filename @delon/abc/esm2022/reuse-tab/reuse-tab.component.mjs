import { Directionality } from '@angular/cdk/bidi';
import { Platform } from '@angular/cdk/platform';
import { DOCUMENT, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, EventEmitter, Input, Output, ViewChild, ViewEncapsulation, booleanAttribute, inject, numberAttribute } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, filter, of } from 'rxjs';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { NzTabComponent, NzTabSetComponent } from 'ng-zorro-antd/tabs';
import { ReuseTabContextMenuComponent } from './reuse-tab-context-menu.component';
import { ReuseTabContextComponent } from './reuse-tab-context.component';
import { ReuseTabContextDirective } from './reuse-tab-context.directive';
import { ReuseTabContextService } from './reuse-tab-context.service';
import { ReuseTabMatchMode } from './reuse-tab.interfaces';
import { ReuseTabService } from './reuse-tab.service';
import { REUSE_TAB_STORAGE_KEY, REUSE_TAB_STORAGE_STATE } from './reuse-tab.state';
import * as i0 from "@angular/core";
export class ReuseTabComponent {
    constructor() {
        this.srv = inject(ReuseTabService, { optional: true });
        this.cdr = inject(ChangeDetectorRef);
        this.router = inject(Router);
        this.route = inject(ActivatedRoute);
        this.i18nSrv = inject(ALAIN_I18N_TOKEN);
        this.doc = inject(DOCUMENT);
        this.platform = inject(Platform);
        this.directionality = inject(Directionality);
        this.stateKey = inject(REUSE_TAB_STORAGE_KEY);
        this.stateSrv = inject(REUSE_TAB_STORAGE_STATE);
        this.destroy$ = inject(DestroyRef);
        this.list = [];
        this.pos = 0;
        this.dir = 'ltr';
        // #region fields
        this.mode = ReuseTabMatchMode.Menu;
        this.debug = false;
        this.allowClose = true;
        this.keepingScroll = false;
        this.storageState = false;
        this.customContextMenu = [];
        this.tabBarStyle = null;
        this.tabType = 'line';
        this.routeParamMatchMode = 'strict';
        this.disabled = false;
        this.change = new EventEmitter();
        this.close = new EventEmitter();
    }
    set keepingScrollContainer(value) {
        this._keepingScrollContainer = typeof value === 'string' ? this.doc.querySelector(value) : value;
    }
    // #endregion
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
            closable: this.allowClose && this.srv.count > 0 && this.srv.getClosable(url, snapshotTrue),
            active: false,
            last: false,
            index: 0
        };
    }
    genList(notify) {
        const ls = this.srv.items.map((item, index) => ({
            url: item.url,
            title: this.genTit(item.title),
            closable: this.allowClose && this.srv.count > 0 && this.srv.getClosable(item.url, item._snapshot),
            position: item.position,
            index,
            active: false,
            last: false
        }));
        const url = this.curUrl;
        let addCurrent = ls.findIndex(w => w.url === url) === -1;
        if (notify && notify.active === 'close' && notify.url === url) {
            addCurrent = false;
            let toPos = 0;
            const curItem = this.list.find(w => w.url === url);
            if (curItem.index === ls.length) {
                // When closed is last
                toPos = ls.length - 1;
            }
            else if (curItem.index < ls.length) {
                // Should be actived next tab when closed is middle
                toPos = Math.max(0, curItem.index);
            }
            this.router.navigateByUrl(ls[toPos].url);
        }
        if (addCurrent) {
            const addPos = this.pos + 1;
            ls.splice(addPos, 0, this.genCurItem());
            // Attach to cache
            this.srv.saveCache(this.route.snapshot, null, addPos);
        }
        ls.forEach((item, index) => (item.index = index));
        if (ls.length === 1) {
            ls[0].closable = false;
        }
        this.list = ls;
        this.cdr.detectChanges();
        this.updatePos();
    }
    updateTitle(res) {
        const item = this.list.find(w => w.url === res.url);
        if (!item)
            return;
        item.title = this.genTit(res.title);
        this.cdr.detectChanges();
    }
    refresh(item) {
        this.srv.runHook('_onReuseInit', this.pos === item.index ? this.srv.componentRef : item.index, 'refresh');
    }
    saveState() {
        if (!this.srv.inited || !this.storageState)
            return;
        this.stateSrv?.update(this.stateKey, this.list);
    }
    // #region UI
    contextMenuChange(res) {
        let fn = null;
        switch (res.type) {
            case 'refresh':
                this.refresh(res.item);
                break;
            case 'close':
                this._close(null, res.item.index, res.includeNonCloseable);
                break;
            case 'closeRight':
                fn = () => {
                    this.srv.closeRight(res.item.url, res.includeNonCloseable);
                    this.close.emit(null);
                };
                break;
            case 'closeOther':
                fn = () => {
                    this.srv.clear(res.includeNonCloseable);
                    this.close.emit(null);
                };
                break;
        }
        if (!fn) {
            return;
        }
        if (!res.item.active && res.item.index <= this.list.find(w => w.active).index) {
            this._to(res.item.index, fn);
        }
        else {
            fn();
        }
    }
    _to(index, cb) {
        index = Math.max(0, Math.min(index, this.list.length - 1));
        const item = this.list[index];
        this.router.navigateByUrl(item.url).then(res => {
            if (!res)
                return;
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
        const item = this.list[idx];
        (this.canClose ? this.canClose({ item, includeNonCloseable }) : of(true)).pipe(filter(v => v)).subscribe(() => {
            this.srv.close(item.url, includeNonCloseable);
            this.close.emit(item);
            this.cdr.detectChanges();
        });
        return false;
    }
    /**
     * 设置激活路由的实例，在 `src/app/layout/basic/basic.component.ts` 修改：
     *
     * @example
     * <reuse-tab #reuseTab></reuse-tab>
     * <router-outlet (activate)="reuseTab.activate($event)" (attach)="reuseTab.activate($event)"></router-outlet>
     */
    activate(instance) {
        if (this.srv == null)
            return;
        this.srv.componentRef = { instance };
    }
    updatePos() {
        const url = this.srv.getUrl(this.route.snapshot);
        const ls = this.list.filter(w => w.url === url || !this.srv.isExclude(w.url));
        if (ls.length === 0) {
            return;
        }
        const last = ls[ls.length - 1];
        const item = ls.find(w => w.url === url);
        last.last = true;
        const pos = item == null ? last.index : item.index;
        ls.forEach((i, idx) => (i.active = pos === idx));
        this.pos = pos;
        // TODO: 目前无法知道为什么 `pos` 无法通过 `nzSelectedIndex` 生效，因此强制使用组件实例的方式来修改，这种方式是安全的
        // https://github.com/ng-alain/ng-alain/issues/1736
        this.tabset.nzSelectedIndex = pos;
        this.list = ls;
        this.cdr.detectChanges();
        this.saveState();
    }
    // #endregion
    ngOnInit() {
        this.dir = this.directionality.value;
        this.directionality.change.pipe(takeUntilDestroyed(this.destroy$)).subscribe(direction => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        if (!this.platform.isBrowser || this.srv == null) {
            return;
        }
        this.srv.change.pipe(takeUntilDestroyed(this.destroy$)).subscribe(res => {
            switch (res?.active) {
                case 'title':
                    this.updateTitle(res);
                    return;
                case 'override':
                    if (res?.list?.length === this.list.length) {
                        this.updatePos();
                        return;
                    }
                    break;
            }
            this.genList(res);
        });
        this.i18nSrv.change
            .pipe(filter(() => this.srv.inited), takeUntilDestroyed(this.destroy$), debounceTime(100))
            .subscribe(() => this.genList({ active: 'title' }));
        this.srv.init();
    }
    ngOnChanges(changes) {
        if (!this.platform.isBrowser || this.srv == null) {
            return;
        }
        if (changes.max)
            this.srv.max = this.max;
        if (changes.excludes)
            this.srv.excludes = this.excludes;
        if (changes.mode)
            this.srv.mode = this.mode;
        if (changes.routeParamMatchMode)
            this.srv.routeParamMatchMode = this.routeParamMatchMode;
        if (changes.keepingScroll) {
            this.srv.keepingScroll = this.keepingScroll;
            this.srv.keepingScrollContainer = this._keepingScrollContainer;
        }
        if (changes.storageState)
            this.srv.storageState = this.storageState;
        this.srv.debug = this.debug;
        this.cdr.detectChanges();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.5", ngImport: i0, type: ReuseTabComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.0.5", type: ReuseTabComponent, isStandalone: true, selector: "reuse-tab, [reuse-tab]", inputs: { mode: "mode", i18n: "i18n", debug: ["debug", "debug", booleanAttribute], max: ["max", "max", numberAttribute], tabMaxWidth: ["tabMaxWidth", "tabMaxWidth", numberAttribute], excludes: "excludes", allowClose: ["allowClose", "allowClose", booleanAttribute], keepingScroll: ["keepingScroll", "keepingScroll", booleanAttribute], storageState: ["storageState", "storageState", booleanAttribute], keepingScrollContainer: "keepingScrollContainer", customContextMenu: "customContextMenu", tabBarExtraContent: "tabBarExtraContent", tabBarGutter: "tabBarGutter", tabBarStyle: "tabBarStyle", tabType: "tabType", routeParamMatchMode: "routeParamMatchMode", disabled: ["disabled", "disabled", booleanAttribute], titleRender: "titleRender", canClose: "canClose" }, outputs: { change: "change", close: "close" }, host: { properties: { "class.reuse-tab": "true", "class.reuse-tab__line": "tabType === 'line'", "class.reuse-tab__card": "tabType === 'card'", "class.reuse-tab__disabled": "disabled", "class.reuse-tab-rtl": "dir === 'rtl'" } }, providers: [ReuseTabContextService], viewQueries: [{ propertyName: "tabset", first: true, predicate: ["tabset"], descendants: true }], exportAs: ["reuseTab"], usesOnChanges: true, ngImport: i0, template: "<nz-tabset\n  #tabset\n  [nzSelectedIndex]=\"pos\"\n  [nzAnimated]=\"false\"\n  [nzType]=\"tabType\"\n  [nzTabBarExtraContent]=\"tabBarExtraContent\"\n  [nzTabBarGutter]=\"tabBarGutter\"\n  [nzTabBarStyle]=\"tabBarStyle\"\n>\n  @for (i of list; track $index) {\n    <nz-tab [nzTitle]=\"titleTemplate\" (nzClick)=\"_to($index)\">\n      <ng-template #titleTemplate>\n        <div\n          [reuse-tab-context-menu]=\"i\"\n          [customContextMenu]=\"customContextMenu\"\n          class=\"reuse-tab__name\"\n          [attr.title]=\"i.title\"\n        >\n          <span [class.reuse-tab__name-width]=\"tabMaxWidth\" [style.max-width.px]=\"tabMaxWidth\">\n            @if (titleRender) {\n              <ng-template [ngTemplateOutlet]=\"titleRender\" [ngTemplateOutletContext]=\"{ $implicit: i }\" />\n            } @else {\n              {{ i.title }}\n            }\n          </span>\n        </div>\n        @if (i.closable) {\n          <i nz-icon nzType=\"close\" class=\"reuse-tab__op\" (click)=\"_close($event, $index, false)\"></i>\n        }\n      </ng-template>\n    </nz-tab>\n  }\n</nz-tabset>\n<reuse-tab-context [i18n]=\"i18n\" (change)=\"contextMenuChange($event)\" />\n", dependencies: [{ kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: NzTabSetComponent, selector: "nz-tabset", inputs: ["nzSelectedIndex", "nzTabPosition", "nzTabBarExtraContent", "nzCanDeactivate", "nzAddIcon", "nzTabBarStyle", "nzType", "nzSize", "nzAnimated", "nzTabBarGutter", "nzHideAdd", "nzCentered", "nzHideAll", "nzLinkRouter", "nzLinkExact"], outputs: ["nzSelectChange", "nzSelectedIndexChange", "nzTabListScroll", "nzClose", "nzAdd"], exportAs: ["nzTabset"] }, { kind: "component", type: NzTabComponent, selector: "nz-tab", inputs: ["nzTitle", "nzClosable", "nzCloseIcon", "nzDisabled", "nzForceRender"], outputs: ["nzSelect", "nzDeselect", "nzClick", "nzContextmenu"], exportAs: ["nzTab"] }, { kind: "directive", type: ReuseTabContextDirective, selector: "[reuse-tab-context-menu]", inputs: ["reuse-tab-context-menu", "customContextMenu"], exportAs: ["reuseTabContextMenu"] }, { kind: "component", type: ReuseTabContextComponent, selector: "reuse-tab-context", inputs: ["i18n"], outputs: ["change"] }, { kind: "directive", type: NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.5", ngImport: i0, type: ReuseTabComponent, decorators: [{
            type: Component,
            args: [{ selector: 'reuse-tab, [reuse-tab]', exportAs: 'reuseTab', host: {
                        '[class.reuse-tab]': 'true',
                        '[class.reuse-tab__line]': `tabType === 'line'`,
                        '[class.reuse-tab__card]': `tabType === 'card'`,
                        '[class.reuse-tab__disabled]': `disabled`,
                        '[class.reuse-tab-rtl]': `dir === 'rtl'`
                    }, providers: [ReuseTabContextService], preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, standalone: true, imports: [
                        NgTemplateOutlet,
                        NzTabSetComponent,
                        NzTabComponent,
                        ReuseTabContextMenuComponent,
                        ReuseTabContextDirective,
                        ReuseTabContextComponent,
                        NzIconDirective
                    ], template: "<nz-tabset\n  #tabset\n  [nzSelectedIndex]=\"pos\"\n  [nzAnimated]=\"false\"\n  [nzType]=\"tabType\"\n  [nzTabBarExtraContent]=\"tabBarExtraContent\"\n  [nzTabBarGutter]=\"tabBarGutter\"\n  [nzTabBarStyle]=\"tabBarStyle\"\n>\n  @for (i of list; track $index) {\n    <nz-tab [nzTitle]=\"titleTemplate\" (nzClick)=\"_to($index)\">\n      <ng-template #titleTemplate>\n        <div\n          [reuse-tab-context-menu]=\"i\"\n          [customContextMenu]=\"customContextMenu\"\n          class=\"reuse-tab__name\"\n          [attr.title]=\"i.title\"\n        >\n          <span [class.reuse-tab__name-width]=\"tabMaxWidth\" [style.max-width.px]=\"tabMaxWidth\">\n            @if (titleRender) {\n              <ng-template [ngTemplateOutlet]=\"titleRender\" [ngTemplateOutletContext]=\"{ $implicit: i }\" />\n            } @else {\n              {{ i.title }}\n            }\n          </span>\n        </div>\n        @if (i.closable) {\n          <i nz-icon nzType=\"close\" class=\"reuse-tab__op\" (click)=\"_close($event, $index, false)\"></i>\n        }\n      </ng-template>\n    </nz-tab>\n  }\n</nz-tabset>\n<reuse-tab-context [i18n]=\"i18n\" (change)=\"contextMenuChange($event)\" />\n" }]
        }], propDecorators: { tabset: [{
                type: ViewChild,
                args: ['tabset']
            }], mode: [{
                type: Input
            }], i18n: [{
                type: Input
            }], debug: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], max: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], tabMaxWidth: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], excludes: [{
                type: Input
            }], allowClose: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], keepingScroll: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], storageState: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], keepingScrollContainer: [{
                type: Input
            }], customContextMenu: [{
                type: Input
            }], tabBarExtraContent: [{
                type: Input
            }], tabBarGutter: [{
                type: Input
            }], tabBarStyle: [{
                type: Input
            }], tabType: [{
                type: Input
            }], routeParamMatchMode: [{
                type: Input
            }], disabled: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], titleRender: [{
                type: Input
            }], canClose: [{
                type: Input
            }], change: [{
                type: Output
            }], close: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2UtdGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9yZXVzZS10YWIvcmV1c2UtdGFiLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9yZXVzZS10YWIvcmV1c2UtdGFiLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBYSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzdELE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBSU4sU0FBUyxFQUNULGlCQUFpQixFQUNqQixnQkFBZ0IsRUFDaEIsTUFBTSxFQUNOLGVBQWUsRUFDaEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFaEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRWhELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsY0FBYyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdkUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDbEYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDekUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDekUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQU9MLGlCQUFpQixFQUlsQixNQUFNLHdCQUF3QixDQUFDO0FBQ2hDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7QUE0Qm5GLE1BQU0sT0FBTyxpQkFBaUI7SUExQjlCO1FBMkJtQixRQUFHLEdBQUcsTUFBTSxDQUFDLGVBQWUsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBRSxDQUFDO1FBQ25ELFFBQUcsR0FBRyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNoQyxXQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hCLFVBQUssR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDL0IsWUFBTyxHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ25DLFFBQUcsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdkIsYUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1QixtQkFBYyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN4QyxhQUFRLEdBQUcsTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDekMsYUFBUSxHQUFHLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBR3BELGFBQVEsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFdEMsU0FBSSxHQUFnQixFQUFFLENBQUM7UUFFdkIsUUFBRyxHQUFHLENBQUMsQ0FBQztRQUNSLFFBQUcsR0FBZSxLQUFLLENBQUM7UUFFeEIsaUJBQWlCO1FBRVIsU0FBSSxHQUFzQixpQkFBaUIsQ0FBQyxJQUFJLENBQUM7UUFFbEIsVUFBSyxHQUFHLEtBQUssQ0FBQztRQUlkLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFDdEIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFLcEQsc0JBQWlCLEdBQTZCLEVBQUUsQ0FBQztRQUdqRCxnQkFBVyxHQUFxQyxJQUFJLENBQUM7UUFDckQsWUFBTyxHQUFvQixNQUFNLENBQUM7UUFDbEMsd0JBQW1CLEdBQWdDLFFBQVEsQ0FBQztRQUM3QixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBR3RDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDO1FBQ3ZDLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBb0IsQ0FBQztLQThPakU7SUE1UEMsSUFDSSxzQkFBc0IsQ0FBQyxLQUF1QjtRQUNoRCxJQUFJLENBQUMsdUJBQXVCLEdBQUcsT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ25HLENBQUM7SUFhRCxhQUFhO0lBRUwsTUFBTSxDQUFDLEtBQWlCO1FBQzlCLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSyxDQUFDO0lBQ25FLENBQUM7SUFFRCxJQUFZLE1BQU07UUFDaEIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFTyxVQUFVO1FBQ2hCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDeEIsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNqRSxPQUFPO1lBQ0wsR0FBRztZQUNILEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxZQUFZLENBQUMsQ0FBQztZQUN4RCxRQUFRLEVBQUUsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLFlBQVksQ0FBQztZQUMxRixNQUFNLEVBQUUsS0FBSztZQUNiLElBQUksRUFBRSxLQUFLO1lBQ1gsS0FBSyxFQUFFLENBQUM7U0FDVCxDQUFDO0lBQ0osQ0FBQztJQUVPLE9BQU8sQ0FBQyxNQUE2QjtRQUMzQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQzNCLENBQUMsSUFBb0IsRUFBRSxLQUFhLEVBQUUsRUFBRSxDQUN0QyxDQUFDO1lBQ0MsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHO1lBQ2IsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUM5QixRQUFRLEVBQUUsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ2pHLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixLQUFLO1lBQ0wsTUFBTSxFQUFFLEtBQUs7WUFDYixJQUFJLEVBQUUsS0FBSztTQUNaLENBQWMsQ0FDbEIsQ0FBQztRQUVGLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDeEIsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDekQsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxPQUFPLElBQUksTUFBTSxDQUFDLEdBQUcsS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUM5RCxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ25CLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztZQUNkLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUUsQ0FBQztZQUNwRCxJQUFJLE9BQU8sQ0FBQyxLQUFLLEtBQUssRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUNoQyxzQkFBc0I7Z0JBQ3RCLEtBQUssR0FBRyxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUN4QixDQUFDO2lCQUFNLElBQUksT0FBTyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ3JDLG1EQUFtRDtnQkFDbkQsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNyQyxDQUFDO1lBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzNDLENBQUM7UUFFRCxJQUFJLFVBQVUsRUFBRSxDQUFDO1lBQ2YsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDNUIsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO1lBQ3hDLGtCQUFrQjtZQUNsQixJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDeEQsQ0FBQztRQUVELEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNsRCxJQUFJLEVBQUUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFLENBQUM7WUFDcEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDekIsQ0FBQztRQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVPLFdBQVcsQ0FBQyxHQUFtQjtRQUNyQyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUNsQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBSSxDQUFDLEtBQU0sQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVPLE9BQU8sQ0FBQyxJQUFlO1FBQzdCLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsR0FBRyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQzVHLENBQUM7SUFFTyxTQUFTO1FBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVk7WUFBRSxPQUFPO1FBRW5ELElBQUksQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxhQUFhO0lBRWIsaUJBQWlCLENBQUMsR0FBMkI7UUFDM0MsSUFBSSxFQUFFLEdBQXdCLElBQUksQ0FBQztRQUNuQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNqQixLQUFLLFNBQVM7Z0JBQ1osSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3ZCLE1BQU07WUFDUixLQUFLLE9BQU87Z0JBQ1YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7Z0JBQzNELE1BQU07WUFDUixLQUFLLFlBQVk7Z0JBQ2YsRUFBRSxHQUFHLEdBQUcsRUFBRTtvQkFDUixJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztvQkFDM0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3hCLENBQUMsQ0FBQztnQkFDRixNQUFNO1lBQ1IsS0FBSyxZQUFZO2dCQUNmLEVBQUUsR0FBRyxHQUFHLEVBQUU7b0JBQ1IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7b0JBQ3hDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN4QixDQUFDLENBQUM7Z0JBQ0YsTUFBTTtRQUNWLENBQUM7UUFDRCxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDUixPQUFPO1FBQ1QsQ0FBQztRQUNELElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUMvRSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQy9CLENBQUM7YUFBTSxDQUFDO1lBQ04sRUFBRSxFQUFFLENBQUM7UUFDUCxDQUFDO0lBQ0gsQ0FBQztJQUVELEdBQUcsQ0FBQyxLQUFhLEVBQUUsRUFBZTtRQUNoQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzRCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDN0MsSUFBSSxDQUFDLEdBQUc7Z0JBQUUsT0FBTztZQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2QixFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ1QsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsTUFBTSxDQUFDLENBQWUsRUFBRSxHQUFXLEVBQUUsbUJBQTRCO1FBQy9ELElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO1lBQ2QsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ25CLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN0QixDQUFDO1FBQ0QsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1QixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQzVHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsUUFBUSxDQUFDLFFBQW1CO1FBQzFCLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJO1lBQUUsT0FBTztRQUM3QixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBRyxFQUFFLFFBQVEsRUFBRSxDQUFDO0lBQ3ZDLENBQUM7SUFFTyxTQUFTO1FBQ2YsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNqRCxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDOUUsSUFBSSxFQUFFLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQ3BCLE9BQU87UUFDVCxDQUFDO1FBRUQsTUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDL0IsTUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsTUFBTSxHQUFHLEdBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNuRCxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsNEVBQTRFO1FBQzVFLG1EQUFtRDtRQUNuRCxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsR0FBRyxHQUFHLENBQUM7UUFDbEMsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsYUFBYTtJQUViLFFBQVE7UUFDTixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDdkYsSUFBSSxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUM7WUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1lBQ2pELE9BQU87UUFDVCxDQUFDO1FBRUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN0RSxRQUFRLEdBQUcsRUFBRSxNQUFNLEVBQUUsQ0FBQztnQkFDcEIsS0FBSyxPQUFPO29CQUNWLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3RCLE9BQU87Z0JBQ1QsS0FBSyxVQUFVO29CQUNiLElBQUksR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzt3QkFDM0MsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO3dCQUNqQixPQUFPO29CQUNULENBQUM7b0JBQ0QsTUFBTTtZQUNWLENBQUM7WUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNO2FBQ2hCLElBQUksQ0FDSCxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFDN0Isa0JBQWtCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUNqQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQ2xCO2FBQ0EsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRXRELElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUE2RDtRQUN2RSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUNqRCxPQUFPO1FBQ1QsQ0FBQztRQUVELElBQUksT0FBTyxDQUFDLEdBQUc7WUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBSSxDQUFDO1FBQzFDLElBQUksT0FBTyxDQUFDLFFBQVE7WUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUyxDQUFDO1FBQ3pELElBQUksT0FBTyxDQUFDLElBQUk7WUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzVDLElBQUksT0FBTyxDQUFDLG1CQUFtQjtZQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDO1FBQ3pGLElBQUksT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQzFCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7WUFDNUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUM7UUFDakUsQ0FBQztRQUNELElBQUksT0FBTyxDQUFDLFlBQVk7WUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBRXBFLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFFNUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzQixDQUFDOzhHQTFSVSxpQkFBaUI7a0dBQWpCLGlCQUFpQiwwSEF3QlIsZ0JBQWdCLHVCQUNoQixlQUFlLCtDQUNmLGVBQWUsa0VBRWYsZ0JBQWdCLHFEQUNoQixnQkFBZ0Isa0RBQ2hCLGdCQUFnQixvU0FXaEIsZ0JBQWdCLHFWQXhEekIsQ0FBQyxzQkFBc0IsQ0FBQyx5S0M3RHJDLHlxQ0FrQ0EsNENEaUNJLGdCQUFnQixvSkFDaEIsaUJBQWlCLDZaQUNqQixjQUFjLDBOQUVkLHdCQUF3QixpS0FDeEIsd0JBQXdCLHFHQUN4QixlQUFlOzsyRkFHTixpQkFBaUI7a0JBMUI3QixTQUFTOytCQUNFLHdCQUF3QixZQUN4QixVQUFVLFFBRWQ7d0JBQ0osbUJBQW1CLEVBQUUsTUFBTTt3QkFDM0IseUJBQXlCLEVBQUUsb0JBQW9CO3dCQUMvQyx5QkFBeUIsRUFBRSxvQkFBb0I7d0JBQy9DLDZCQUE2QixFQUFFLFVBQVU7d0JBQ3pDLHVCQUF1QixFQUFFLGVBQWU7cUJBQ3pDLGFBQ1UsQ0FBQyxzQkFBc0IsQ0FBQyx1QkFDZCxLQUFLLG1CQUNULHVCQUF1QixDQUFDLE1BQU0saUJBQ2hDLGlCQUFpQixDQUFDLElBQUksY0FDekIsSUFBSSxXQUNQO3dCQUNQLGdCQUFnQjt3QkFDaEIsaUJBQWlCO3dCQUNqQixjQUFjO3dCQUNkLDRCQUE0Qjt3QkFDNUIsd0JBQXdCO3dCQUN4Qix3QkFBd0I7d0JBQ3hCLGVBQWU7cUJBQ2hCOzhCQWM0QixNQUFNO3NCQUFsQyxTQUFTO3VCQUFDLFFBQVE7Z0JBVVYsSUFBSTtzQkFBWixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDa0MsS0FBSztzQkFBNUMsS0FBSzt1QkFBQyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRTtnQkFDQyxHQUFHO3NCQUF6QyxLQUFLO3VCQUFDLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRTtnQkFDRSxXQUFXO3NCQUFqRCxLQUFLO3VCQUFDLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRTtnQkFDNUIsUUFBUTtzQkFBaEIsS0FBSztnQkFDa0MsVUFBVTtzQkFBakQsS0FBSzt1QkFBQyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRTtnQkFDRSxhQUFhO3NCQUFwRCxLQUFLO3VCQUFDLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFO2dCQUNFLFlBQVk7c0JBQW5ELEtBQUs7dUJBQUMsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUU7Z0JBRWxDLHNCQUFzQjtzQkFEekIsS0FBSztnQkFJRyxpQkFBaUI7c0JBQXpCLEtBQUs7Z0JBQ0csa0JBQWtCO3NCQUExQixLQUFLO2dCQUNHLFlBQVk7c0JBQXBCLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFDRyxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csbUJBQW1CO3NCQUEzQixLQUFLO2dCQUNrQyxRQUFRO3NCQUEvQyxLQUFLO3VCQUFDLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFO2dCQUM3QixXQUFXO3NCQUFuQixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ2EsTUFBTTtzQkFBeEIsTUFBTTtnQkFDWSxLQUFLO3NCQUF2QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7IERPQ1VNRU5ULCBOZ1RlbXBsYXRlT3V0bGV0IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBEZXN0cm95UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2UsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBib29sZWFuQXR0cmlidXRlLFxuICBpbmplY3QsXG4gIG51bWJlckF0dHJpYnV0ZVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRha2VVbnRpbERlc3Ryb3llZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvcnhqcy1pbnRlcm9wJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBmaWx0ZXIsIG9mIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEFMQUlOX0kxOE5fVE9LRU4gfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgTnpJY29uRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pY29uJztcbmltcG9ydCB7IE56VGFiQ29tcG9uZW50LCBOelRhYlNldENvbXBvbmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQvdGFicyc7XG5cbmltcG9ydCB7IFJldXNlVGFiQ29udGV4dE1lbnVDb21wb25lbnQgfSBmcm9tICcuL3JldXNlLXRhYi1jb250ZXh0LW1lbnUuY29tcG9uZW50JztcbmltcG9ydCB7IFJldXNlVGFiQ29udGV4dENvbXBvbmVudCB9IGZyb20gJy4vcmV1c2UtdGFiLWNvbnRleHQuY29tcG9uZW50JztcbmltcG9ydCB7IFJldXNlVGFiQ29udGV4dERpcmVjdGl2ZSB9IGZyb20gJy4vcmV1c2UtdGFiLWNvbnRleHQuZGlyZWN0aXZlJztcbmltcG9ydCB7IFJldXNlVGFiQ29udGV4dFNlcnZpY2UgfSBmcm9tICcuL3JldXNlLXRhYi1jb250ZXh0LnNlcnZpY2UnO1xuaW1wb3J0IHtcbiAgUmV1c2VDYW5DbG9zZSxcbiAgUmV1c2VDb250ZXh0Q2xvc2VFdmVudCxcbiAgUmV1c2VDb250ZXh0STE4bixcbiAgUmV1c2VDdXN0b21Db250ZXh0TWVudSxcbiAgUmV1c2VJdGVtLFxuICBSZXVzZVRhYkNhY2hlZCxcbiAgUmV1c2VUYWJNYXRjaE1vZGUsXG4gIFJldXNlVGFiTm90aWZ5LFxuICBSZXVzZVRhYlJvdXRlUGFyYW1NYXRjaE1vZGUsXG4gIFJldXNlVGl0bGVcbn0gZnJvbSAnLi9yZXVzZS10YWIuaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBSZXVzZVRhYlNlcnZpY2UgfSBmcm9tICcuL3JldXNlLXRhYi5zZXJ2aWNlJztcbmltcG9ydCB7IFJFVVNFX1RBQl9TVE9SQUdFX0tFWSwgUkVVU0VfVEFCX1NUT1JBR0VfU1RBVEUgfSBmcm9tICcuL3JldXNlLXRhYi5zdGF0ZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3JldXNlLXRhYiwgW3JldXNlLXRhYl0nLFxuICBleHBvcnRBczogJ3JldXNlVGFiJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JldXNlLXRhYi5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLnJldXNlLXRhYl0nOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy5yZXVzZS10YWJfX2xpbmVdJzogYHRhYlR5cGUgPT09ICdsaW5lJ2AsXG4gICAgJ1tjbGFzcy5yZXVzZS10YWJfX2NhcmRdJzogYHRhYlR5cGUgPT09ICdjYXJkJ2AsXG4gICAgJ1tjbGFzcy5yZXVzZS10YWJfX2Rpc2FibGVkXSc6IGBkaXNhYmxlZGAsXG4gICAgJ1tjbGFzcy5yZXVzZS10YWItcnRsXSc6IGBkaXIgPT09ICdydGwnYFxuICB9LFxuICBwcm92aWRlcnM6IFtSZXVzZVRhYkNvbnRleHRTZXJ2aWNlXSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXG4gICAgTmdUZW1wbGF0ZU91dGxldCxcbiAgICBOelRhYlNldENvbXBvbmVudCxcbiAgICBOelRhYkNvbXBvbmVudCxcbiAgICBSZXVzZVRhYkNvbnRleHRNZW51Q29tcG9uZW50LFxuICAgIFJldXNlVGFiQ29udGV4dERpcmVjdGl2ZSxcbiAgICBSZXVzZVRhYkNvbnRleHRDb21wb25lbnQsXG4gICAgTnpJY29uRGlyZWN0aXZlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgUmV1c2VUYWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIHByaXZhdGUgcmVhZG9ubHkgc3J2ID0gaW5qZWN0KFJldXNlVGFiU2VydmljZSwgeyBvcHRpb25hbDogdHJ1ZSB9KSE7XG4gIHByaXZhdGUgcmVhZG9ubHkgY2RyID0gaW5qZWN0KENoYW5nZURldGVjdG9yUmVmKTtcbiAgcHJpdmF0ZSByZWFkb25seSByb3V0ZXIgPSBpbmplY3QoUm91dGVyKTtcbiAgcHJpdmF0ZSByZWFkb25seSByb3V0ZSA9IGluamVjdChBY3RpdmF0ZWRSb3V0ZSk7XG4gIHByaXZhdGUgcmVhZG9ubHkgaTE4blNydiA9IGluamVjdChBTEFJTl9JMThOX1RPS0VOKTtcbiAgcHJpdmF0ZSByZWFkb25seSBkb2MgPSBpbmplY3QoRE9DVU1FTlQpO1xuICBwcml2YXRlIHJlYWRvbmx5IHBsYXRmb3JtID0gaW5qZWN0KFBsYXRmb3JtKTtcbiAgcHJpdmF0ZSByZWFkb25seSBkaXJlY3Rpb25hbGl0eSA9IGluamVjdChEaXJlY3Rpb25hbGl0eSk7XG4gIHByaXZhdGUgcmVhZG9ubHkgc3RhdGVLZXkgPSBpbmplY3QoUkVVU0VfVEFCX1NUT1JBR0VfS0VZKTtcbiAgcHJpdmF0ZSByZWFkb25seSBzdGF0ZVNydiA9IGluamVjdChSRVVTRV9UQUJfU1RPUkFHRV9TVEFURSk7XG5cbiAgQFZpZXdDaGlsZCgndGFic2V0JykgcHJpdmF0ZSB0YWJzZXQhOiBOelRhYlNldENvbXBvbmVudDtcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IGluamVjdChEZXN0cm95UmVmKTtcbiAgcHJpdmF0ZSBfa2VlcGluZ1Njcm9sbENvbnRhaW5lcj86IEVsZW1lbnQgfCBudWxsO1xuICBsaXN0OiBSZXVzZUl0ZW1bXSA9IFtdO1xuICBpdGVtPzogUmV1c2VJdGVtO1xuICBwb3MgPSAwO1xuICBkaXI/OiBEaXJlY3Rpb24gPSAnbHRyJztcblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIEBJbnB1dCgpIG1vZGU6IFJldXNlVGFiTWF0Y2hNb2RlID0gUmV1c2VUYWJNYXRjaE1vZGUuTWVudTtcbiAgQElucHV0KCkgaTE4bj86IFJldXNlQ29udGV4dEkxOG47XG4gIEBJbnB1dCh7IHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZSB9KSBkZWJ1ZyA9IGZhbHNlO1xuICBASW5wdXQoeyB0cmFuc2Zvcm06IG51bWJlckF0dHJpYnV0ZSB9KSBtYXg/OiBudW1iZXI7XG4gIEBJbnB1dCh7IHRyYW5zZm9ybTogbnVtYmVyQXR0cmlidXRlIH0pIHRhYk1heFdpZHRoPzogbnVtYmVyO1xuICBASW5wdXQoKSBleGNsdWRlcz86IFJlZ0V4cFtdO1xuICBASW5wdXQoeyB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGUgfSkgYWxsb3dDbG9zZSA9IHRydWU7XG4gIEBJbnB1dCh7IHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZSB9KSBrZWVwaW5nU2Nyb2xsID0gZmFsc2U7XG4gIEBJbnB1dCh7IHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZSB9KSBzdG9yYWdlU3RhdGUgPSBmYWxzZTtcbiAgQElucHV0KClcbiAgc2V0IGtlZXBpbmdTY3JvbGxDb250YWluZXIodmFsdWU6IHN0cmluZyB8IEVsZW1lbnQpIHtcbiAgICB0aGlzLl9rZWVwaW5nU2Nyb2xsQ29udGFpbmVyID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHRoaXMuZG9jLnF1ZXJ5U2VsZWN0b3IodmFsdWUpIDogdmFsdWU7XG4gIH1cbiAgQElucHV0KCkgY3VzdG9tQ29udGV4dE1lbnU6IFJldXNlQ3VzdG9tQ29udGV4dE1lbnVbXSA9IFtdO1xuICBASW5wdXQoKSB0YWJCYXJFeHRyYUNvbnRlbnQ/OiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgdGFiQmFyR3V0dGVyPzogbnVtYmVyO1xuICBASW5wdXQoKSB0YWJCYXJTdHlsZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSB0YWJUeXBlOiAnbGluZScgfCAnY2FyZCcgPSAnbGluZSc7XG4gIEBJbnB1dCgpIHJvdXRlUGFyYW1NYXRjaE1vZGU6IFJldXNlVGFiUm91dGVQYXJhbU1hdGNoTW9kZSA9ICdzdHJpY3QnO1xuICBASW5wdXQoeyB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGUgfSkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgdGl0bGVSZW5kZXI/OiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogUmV1c2VJdGVtIH0+O1xuICBASW5wdXQoKSBjYW5DbG9zZT86IFJldXNlQ2FuQ2xvc2U7XG4gIEBPdXRwdXQoKSByZWFkb25seSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFJldXNlSXRlbT4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjxSZXVzZUl0ZW0gfCBudWxsPigpO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBwcml2YXRlIGdlblRpdCh0aXRsZTogUmV1c2VUaXRsZSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRpdGxlLmkxOG4gPyB0aGlzLmkxOG5TcnYuZmFueWkodGl0bGUuaTE4bikgOiB0aXRsZS50ZXh0ITtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IGN1clVybCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnNydi5nZXRVcmwodGhpcy5yb3V0ZS5zbmFwc2hvdCk7XG4gIH1cblxuICBwcml2YXRlIGdlbkN1ckl0ZW0oKTogUmV1c2VJdGVtIHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmN1clVybDtcbiAgICBjb25zdCBzbmFwc2hvdFRydWUgPSB0aGlzLnNydi5nZXRUcnV0aFJvdXRlKHRoaXMucm91dGUuc25hcHNob3QpO1xuICAgIHJldHVybiB7XG4gICAgICB1cmwsXG4gICAgICB0aXRsZTogdGhpcy5nZW5UaXQodGhpcy5zcnYuZ2V0VGl0bGUodXJsLCBzbmFwc2hvdFRydWUpKSxcbiAgICAgIGNsb3NhYmxlOiB0aGlzLmFsbG93Q2xvc2UgJiYgdGhpcy5zcnYuY291bnQgPiAwICYmIHRoaXMuc3J2LmdldENsb3NhYmxlKHVybCwgc25hcHNob3RUcnVlKSxcbiAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICBsYXN0OiBmYWxzZSxcbiAgICAgIGluZGV4OiAwXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuTGlzdChub3RpZnk6IFJldXNlVGFiTm90aWZ5IHwgbnVsbCk6IHZvaWQge1xuICAgIGNvbnN0IGxzID0gdGhpcy5zcnYuaXRlbXMubWFwKFxuICAgICAgKGl0ZW06IFJldXNlVGFiQ2FjaGVkLCBpbmRleDogbnVtYmVyKSA9PlxuICAgICAgICAoe1xuICAgICAgICAgIHVybDogaXRlbS51cmwsXG4gICAgICAgICAgdGl0bGU6IHRoaXMuZ2VuVGl0KGl0ZW0udGl0bGUpLFxuICAgICAgICAgIGNsb3NhYmxlOiB0aGlzLmFsbG93Q2xvc2UgJiYgdGhpcy5zcnYuY291bnQgPiAwICYmIHRoaXMuc3J2LmdldENsb3NhYmxlKGl0ZW0udXJsLCBpdGVtLl9zbmFwc2hvdCksXG4gICAgICAgICAgcG9zaXRpb246IGl0ZW0ucG9zaXRpb24sXG4gICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgICBsYXN0OiBmYWxzZVxuICAgICAgICB9KSBhcyBSZXVzZUl0ZW1cbiAgICApO1xuXG4gICAgY29uc3QgdXJsID0gdGhpcy5jdXJVcmw7XG4gICAgbGV0IGFkZEN1cnJlbnQgPSBscy5maW5kSW5kZXgodyA9PiB3LnVybCA9PT0gdXJsKSA9PT0gLTE7XG4gICAgaWYgKG5vdGlmeSAmJiBub3RpZnkuYWN0aXZlID09PSAnY2xvc2UnICYmIG5vdGlmeS51cmwgPT09IHVybCkge1xuICAgICAgYWRkQ3VycmVudCA9IGZhbHNlO1xuICAgICAgbGV0IHRvUG9zID0gMDtcbiAgICAgIGNvbnN0IGN1ckl0ZW0gPSB0aGlzLmxpc3QuZmluZCh3ID0+IHcudXJsID09PSB1cmwpITtcbiAgICAgIGlmIChjdXJJdGVtLmluZGV4ID09PSBscy5sZW5ndGgpIHtcbiAgICAgICAgLy8gV2hlbiBjbG9zZWQgaXMgbGFzdFxuICAgICAgICB0b1BvcyA9IGxzLmxlbmd0aCAtIDE7XG4gICAgICB9IGVsc2UgaWYgKGN1ckl0ZW0uaW5kZXggPCBscy5sZW5ndGgpIHtcbiAgICAgICAgLy8gU2hvdWxkIGJlIGFjdGl2ZWQgbmV4dCB0YWIgd2hlbiBjbG9zZWQgaXMgbWlkZGxlXG4gICAgICAgIHRvUG9zID0gTWF0aC5tYXgoMCwgY3VySXRlbS5pbmRleCk7XG4gICAgICB9XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKGxzW3RvUG9zXS51cmwpO1xuICAgIH1cblxuICAgIGlmIChhZGRDdXJyZW50KSB7XG4gICAgICBjb25zdCBhZGRQb3MgPSB0aGlzLnBvcyArIDE7XG4gICAgICBscy5zcGxpY2UoYWRkUG9zLCAwLCB0aGlzLmdlbkN1ckl0ZW0oKSk7XG4gICAgICAvLyBBdHRhY2ggdG8gY2FjaGVcbiAgICAgIHRoaXMuc3J2LnNhdmVDYWNoZSh0aGlzLnJvdXRlLnNuYXBzaG90LCBudWxsLCBhZGRQb3MpO1xuICAgIH1cblxuICAgIGxzLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiAoaXRlbS5pbmRleCA9IGluZGV4KSk7XG4gICAgaWYgKGxzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgbHNbMF0uY2xvc2FibGUgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5saXN0ID0gbHM7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHRoaXMudXBkYXRlUG9zKCk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVRpdGxlKHJlczogUmV1c2VUYWJOb3RpZnkpOiB2b2lkIHtcbiAgICBjb25zdCBpdGVtID0gdGhpcy5saXN0LmZpbmQodyA9PiB3LnVybCA9PT0gcmVzIS51cmwpO1xuICAgIGlmICghaXRlbSkgcmV0dXJuO1xuICAgIGl0ZW0udGl0bGUgPSB0aGlzLmdlblRpdChyZXMhLnRpdGxlISk7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSByZWZyZXNoKGl0ZW06IFJldXNlSXRlbSk6IHZvaWQge1xuICAgIHRoaXMuc3J2LnJ1bkhvb2soJ19vblJldXNlSW5pdCcsIHRoaXMucG9zID09PSBpdGVtLmluZGV4ID8gdGhpcy5zcnYuY29tcG9uZW50UmVmIDogaXRlbS5pbmRleCwgJ3JlZnJlc2gnKTtcbiAgfVxuXG4gIHByaXZhdGUgc2F2ZVN0YXRlKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5zcnYuaW5pdGVkIHx8ICF0aGlzLnN0b3JhZ2VTdGF0ZSkgcmV0dXJuO1xuXG4gICAgdGhpcy5zdGF0ZVNydj8udXBkYXRlKHRoaXMuc3RhdGVLZXkhLCB0aGlzLmxpc3QpO1xuICB9XG5cbiAgLy8gI3JlZ2lvbiBVSVxuXG4gIGNvbnRleHRNZW51Q2hhbmdlKHJlczogUmV1c2VDb250ZXh0Q2xvc2VFdmVudCk6IHZvaWQge1xuICAgIGxldCBmbjogKCgpID0+IHZvaWQpIHwgbnVsbCA9IG51bGw7XG4gICAgc3dpdGNoIChyZXMudHlwZSkge1xuICAgICAgY2FzZSAncmVmcmVzaCc6XG4gICAgICAgIHRoaXMucmVmcmVzaChyZXMuaXRlbSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY2xvc2UnOlxuICAgICAgICB0aGlzLl9jbG9zZShudWxsLCByZXMuaXRlbS5pbmRleCwgcmVzLmluY2x1ZGVOb25DbG9zZWFibGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2Nsb3NlUmlnaHQnOlxuICAgICAgICBmbiA9ICgpID0+IHtcbiAgICAgICAgICB0aGlzLnNydi5jbG9zZVJpZ2h0KHJlcy5pdGVtLnVybCwgcmVzLmluY2x1ZGVOb25DbG9zZWFibGUpO1xuICAgICAgICAgIHRoaXMuY2xvc2UuZW1pdChudWxsKTtcbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjbG9zZU90aGVyJzpcbiAgICAgICAgZm4gPSAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5zcnYuY2xlYXIocmVzLmluY2x1ZGVOb25DbG9zZWFibGUpO1xuICAgICAgICAgIHRoaXMuY2xvc2UuZW1pdChudWxsKTtcbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmICghZm4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFyZXMuaXRlbS5hY3RpdmUgJiYgcmVzLml0ZW0uaW5kZXggPD0gdGhpcy5saXN0LmZpbmQodyA9PiB3LmFjdGl2ZSkhLmluZGV4KSB7XG4gICAgICB0aGlzLl90byhyZXMuaXRlbS5pbmRleCwgZm4pO1xuICAgIH0gZWxzZSB7XG4gICAgICBmbigpO1xuICAgIH1cbiAgfVxuXG4gIF90byhpbmRleDogbnVtYmVyLCBjYj86ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICBpbmRleCA9IE1hdGgubWF4KDAsIE1hdGgubWluKGluZGV4LCB0aGlzLmxpc3QubGVuZ3RoIC0gMSkpO1xuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmxpc3RbaW5kZXhdO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoaXRlbS51cmwpLnRoZW4ocmVzID0+IHtcbiAgICAgIGlmICghcmVzKSByZXR1cm47XG4gICAgICB0aGlzLml0ZW0gPSBpdGVtO1xuICAgICAgdGhpcy5jaGFuZ2UuZW1pdChpdGVtKTtcbiAgICAgIGNiPy4oKTtcbiAgICB9KTtcbiAgfVxuXG4gIF9jbG9zZShlOiBFdmVudCB8IG51bGwsIGlkeDogbnVtYmVyLCBpbmNsdWRlTm9uQ2xvc2VhYmxlOiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgaWYgKGUgIT0gbnVsbCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gICAgY29uc3QgaXRlbSA9IHRoaXMubGlzdFtpZHhdO1xuICAgICh0aGlzLmNhbkNsb3NlID8gdGhpcy5jYW5DbG9zZSh7IGl0ZW0sIGluY2x1ZGVOb25DbG9zZWFibGUgfSkgOiBvZih0cnVlKSkucGlwZShmaWx0ZXIodiA9PiB2KSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuc3J2LmNsb3NlKGl0ZW0udXJsLCBpbmNsdWRlTm9uQ2xvc2VhYmxlKTtcbiAgICAgIHRoaXMuY2xvc2UuZW1pdChpdGVtKTtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICog6K6+572u5r+A5rS76Lev55Sx55qE5a6e5L6L77yM5ZyoIGBzcmMvYXBwL2xheW91dC9iYXNpYy9iYXNpYy5jb21wb25lbnQudHNgIOS/ruaUue+8mlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiA8cmV1c2UtdGFiICNyZXVzZVRhYj48L3JldXNlLXRhYj5cbiAgICogPHJvdXRlci1vdXRsZXQgKGFjdGl2YXRlKT1cInJldXNlVGFiLmFjdGl2YXRlKCRldmVudClcIiAoYXR0YWNoKT1cInJldXNlVGFiLmFjdGl2YXRlKCRldmVudClcIj48L3JvdXRlci1vdXRsZXQ+XG4gICAqL1xuICBhY3RpdmF0ZShpbnN0YW5jZTogTnpTYWZlQW55KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc3J2ID09IG51bGwpIHJldHVybjtcbiAgICB0aGlzLnNydi5jb21wb25lbnRSZWYgPSB7IGluc3RhbmNlIH07XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVBvcygpOiB2b2lkIHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLnNydi5nZXRVcmwodGhpcy5yb3V0ZS5zbmFwc2hvdCk7XG4gICAgY29uc3QgbHMgPSB0aGlzLmxpc3QuZmlsdGVyKHcgPT4gdy51cmwgPT09IHVybCB8fCAhdGhpcy5zcnYuaXNFeGNsdWRlKHcudXJsKSk7XG4gICAgaWYgKGxzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGxhc3QgPSBsc1tscy5sZW5ndGggLSAxXTtcbiAgICBjb25zdCBpdGVtID0gbHMuZmluZCh3ID0+IHcudXJsID09PSB1cmwpO1xuICAgIGxhc3QubGFzdCA9IHRydWU7XG4gICAgY29uc3QgcG9zID0gaXRlbSA9PSBudWxsID8gbGFzdC5pbmRleCA6IGl0ZW0uaW5kZXg7XG4gICAgbHMuZm9yRWFjaCgoaSwgaWR4KSA9PiAoaS5hY3RpdmUgPSBwb3MgPT09IGlkeCkpO1xuICAgIHRoaXMucG9zID0gcG9zO1xuICAgIC8vIFRPRE86IOebruWJjeaXoOazleefpemBk+S4uuS7gOS5iCBgcG9zYCDml6Dms5XpgJrov4cgYG56U2VsZWN0ZWRJbmRleGAg55Sf5pWI77yM5Zug5q2k5by65Yi25L2/55So57uE5Lu25a6e5L6L55qE5pa55byP5p2l5L+u5pS577yM6L+Z56eN5pa55byP5piv5a6J5YWo55qEXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL25nLWFsYWluL25nLWFsYWluL2lzc3Vlcy8xNzM2XG4gICAgdGhpcy50YWJzZXQubnpTZWxlY3RlZEluZGV4ID0gcG9zO1xuICAgIHRoaXMubGlzdCA9IGxzO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB0aGlzLnNhdmVTdGF0ZSgpO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZGlyID0gdGhpcy5kaXJlY3Rpb25hbGl0eS52YWx1ZTtcbiAgICB0aGlzLmRpcmVjdGlvbmFsaXR5LmNoYW5nZS5waXBlKHRha2VVbnRpbERlc3Ryb3llZCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKGRpcmVjdGlvbiA9PiB7XG4gICAgICB0aGlzLmRpciA9IGRpcmVjdGlvbjtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcblxuICAgIGlmICghdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIgfHwgdGhpcy5zcnYgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc3J2LmNoYW5nZS5waXBlKHRha2VVbnRpbERlc3Ryb3llZCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICBzd2l0Y2ggKHJlcz8uYWN0aXZlKSB7XG4gICAgICAgIGNhc2UgJ3RpdGxlJzpcbiAgICAgICAgICB0aGlzLnVwZGF0ZVRpdGxlKHJlcyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjYXNlICdvdmVycmlkZSc6XG4gICAgICAgICAgaWYgKHJlcz8ubGlzdD8ubGVuZ3RoID09PSB0aGlzLmxpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVBvcygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHRoaXMuZ2VuTGlzdChyZXMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5pMThuU3J2LmNoYW5nZVxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcigoKSA9PiB0aGlzLnNydi5pbml0ZWQpLFxuICAgICAgICB0YWtlVW50aWxEZXN0cm95ZWQodGhpcy5kZXN0cm95JCksXG4gICAgICAgIGRlYm91bmNlVGltZSgxMDApXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuZ2VuTGlzdCh7IGFjdGl2ZTogJ3RpdGxlJyB9KSk7XG5cbiAgICB0aGlzLnNydi5pbml0KCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtQIGluIGtleW9mIHRoaXNdPzogU2ltcGxlQ2hhbmdlIH0gJiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3NlciB8fCB0aGlzLnNydiA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXMubWF4KSB0aGlzLnNydi5tYXggPSB0aGlzLm1heCE7XG4gICAgaWYgKGNoYW5nZXMuZXhjbHVkZXMpIHRoaXMuc3J2LmV4Y2x1ZGVzID0gdGhpcy5leGNsdWRlcyE7XG4gICAgaWYgKGNoYW5nZXMubW9kZSkgdGhpcy5zcnYubW9kZSA9IHRoaXMubW9kZTtcbiAgICBpZiAoY2hhbmdlcy5yb3V0ZVBhcmFtTWF0Y2hNb2RlKSB0aGlzLnNydi5yb3V0ZVBhcmFtTWF0Y2hNb2RlID0gdGhpcy5yb3V0ZVBhcmFtTWF0Y2hNb2RlO1xuICAgIGlmIChjaGFuZ2VzLmtlZXBpbmdTY3JvbGwpIHtcbiAgICAgIHRoaXMuc3J2LmtlZXBpbmdTY3JvbGwgPSB0aGlzLmtlZXBpbmdTY3JvbGw7XG4gICAgICB0aGlzLnNydi5rZWVwaW5nU2Nyb2xsQ29udGFpbmVyID0gdGhpcy5fa2VlcGluZ1Njcm9sbENvbnRhaW5lcjtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMuc3RvcmFnZVN0YXRlKSB0aGlzLnNydi5zdG9yYWdlU3RhdGUgPSB0aGlzLnN0b3JhZ2VTdGF0ZTtcblxuICAgIHRoaXMuc3J2LmRlYnVnID0gdGhpcy5kZWJ1ZztcblxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxufVxuIiwiPG56LXRhYnNldFxuICAjdGFic2V0XG4gIFtuelNlbGVjdGVkSW5kZXhdPVwicG9zXCJcbiAgW256QW5pbWF0ZWRdPVwiZmFsc2VcIlxuICBbbnpUeXBlXT1cInRhYlR5cGVcIlxuICBbbnpUYWJCYXJFeHRyYUNvbnRlbnRdPVwidGFiQmFyRXh0cmFDb250ZW50XCJcbiAgW256VGFiQmFyR3V0dGVyXT1cInRhYkJhckd1dHRlclwiXG4gIFtuelRhYkJhclN0eWxlXT1cInRhYkJhclN0eWxlXCJcbj5cbiAgQGZvciAoaSBvZiBsaXN0OyB0cmFjayAkaW5kZXgpIHtcbiAgICA8bnotdGFiIFtuelRpdGxlXT1cInRpdGxlVGVtcGxhdGVcIiAobnpDbGljayk9XCJfdG8oJGluZGV4KVwiPlxuICAgICAgPG5nLXRlbXBsYXRlICN0aXRsZVRlbXBsYXRlPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgW3JldXNlLXRhYi1jb250ZXh0LW1lbnVdPVwiaVwiXG4gICAgICAgICAgW2N1c3RvbUNvbnRleHRNZW51XT1cImN1c3RvbUNvbnRleHRNZW51XCJcbiAgICAgICAgICBjbGFzcz1cInJldXNlLXRhYl9fbmFtZVwiXG4gICAgICAgICAgW2F0dHIudGl0bGVdPVwiaS50aXRsZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBbY2xhc3MucmV1c2UtdGFiX19uYW1lLXdpZHRoXT1cInRhYk1heFdpZHRoXCIgW3N0eWxlLm1heC13aWR0aC5weF09XCJ0YWJNYXhXaWR0aFwiPlxuICAgICAgICAgICAgQGlmICh0aXRsZVJlbmRlcikge1xuICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwidGl0bGVSZW5kZXJcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IGkgfVwiIC8+XG4gICAgICAgICAgICB9IEBlbHNlIHtcbiAgICAgICAgICAgICAge3sgaS50aXRsZSB9fVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIEBpZiAoaS5jbG9zYWJsZSkge1xuICAgICAgICAgIDxpIG56LWljb24gbnpUeXBlPVwiY2xvc2VcIiBjbGFzcz1cInJldXNlLXRhYl9fb3BcIiAoY2xpY2spPVwiX2Nsb3NlKCRldmVudCwgJGluZGV4LCBmYWxzZSlcIj48L2k+XG4gICAgICAgIH1cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPC9uei10YWI+XG4gIH1cbjwvbnotdGFic2V0PlxuPHJldXNlLXRhYi1jb250ZXh0IFtpMThuXT1cImkxOG5cIiAoY2hhbmdlKT1cImNvbnRleHRNZW51Q2hhbmdlKCRldmVudClcIiAvPlxuIl19