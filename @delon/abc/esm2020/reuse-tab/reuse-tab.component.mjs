import { __decorate } from "tslib";
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, Optional, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subject, debounceTime, filter, takeUntil, of } from 'rxjs';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { InputBoolean, InputNumber } from '@delon/util/decorator';
import { ReuseTabContextService } from './reuse-tab-context.service';
import { ReuseTabMatchMode } from './reuse-tab.interfaces';
import { REUSE_TAB_STORAGE_KEY, REUSE_TAB_STORAGE_STATE } from './reuse-tab.state';
import * as i0 from "@angular/core";
import * as i1 from "./reuse-tab.service";
import * as i2 from "@angular/router";
import * as i3 from "@angular/cdk/platform";
import * as i4 from "@angular/cdk/bidi";
import * as i5 from "@angular/common";
import * as i6 from "ng-zorro-antd/tabs";
import * as i7 from "ng-zorro-antd/icon";
import * as i8 from "./reuse-tab-context.component";
import * as i9 from "./reuse-tab-context.directive";
export class ReuseTabComponent {
    // #endregion
    constructor(srv, cdr, router, route, i18nSrv, doc, platform, directionality, stateKey, stateSrv) {
        this.srv = srv;
        this.cdr = cdr;
        this.router = router;
        this.route = route;
        this.i18nSrv = i18nSrv;
        this.doc = doc;
        this.platform = platform;
        this.directionality = directionality;
        this.stateKey = stateKey;
        this.stateSrv = stateSrv;
        this.destroy$ = new Subject();
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
    genTit(title) {
        return title.i18n && this.i18nSrv ? this.i18nSrv.fanyi(title.i18n) : title.text;
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
            closable: this.allowClose && item.closable && this.srv.count > 0,
            position: item.position,
            index,
            active: false,
            last: false
        }));
        // debugger;
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
            ls.splice(this.pos + 1, 0, this.genCurItem());
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
        this.stateSrv.update(this.stateKey, this.list);
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
            if (cb) {
                cb();
            }
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
        this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        if (!this.platform.isBrowser) {
            return;
        }
        this.srv.change.pipe(takeUntil(this.destroy$)).subscribe(res => {
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
            .pipe(filter(() => this.srv.inited), takeUntil(this.destroy$), debounceTime(100))
            .subscribe(() => this.genList({ active: 'title' }));
        this.srv.init();
    }
    ngOnChanges(changes) {
        if (!this.platform.isBrowser) {
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
    ngOnDestroy() {
        const { destroy$ } = this;
        destroy$.next();
        destroy$.complete();
    }
}
ReuseTabComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.11", ngImport: i0, type: ReuseTabComponent, deps: [{ token: i1.ReuseTabService }, { token: i0.ChangeDetectorRef }, { token: i2.Router }, { token: i2.ActivatedRoute }, { token: ALAIN_I18N_TOKEN, optional: true }, { token: DOCUMENT }, { token: i3.Platform }, { token: i4.Directionality, optional: true }, { token: REUSE_TAB_STORAGE_KEY, optional: true }, { token: REUSE_TAB_STORAGE_STATE, optional: true }], target: i0.ɵɵFactoryTarget.Component });
ReuseTabComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.11", type: ReuseTabComponent, selector: "reuse-tab, [reuse-tab]", inputs: { mode: "mode", i18n: "i18n", debug: "debug", max: "max", tabMaxWidth: "tabMaxWidth", excludes: "excludes", allowClose: "allowClose", keepingScroll: "keepingScroll", storageState: "storageState", keepingScrollContainer: "keepingScrollContainer", customContextMenu: "customContextMenu", tabBarExtraContent: "tabBarExtraContent", tabBarGutter: "tabBarGutter", tabBarStyle: "tabBarStyle", tabType: "tabType", routeParamMatchMode: "routeParamMatchMode", disabled: "disabled", titleRender: "titleRender", canClose: "canClose" }, outputs: { change: "change", close: "close" }, host: { properties: { "class.reuse-tab": "true", "class.reuse-tab__line": "tabType === 'line'", "class.reuse-tab__card": "tabType === 'card'", "class.reuse-tab__disabled": "disabled", "class.reuse-tab-rtl": "dir === 'rtl'" } }, providers: [ReuseTabContextService], viewQueries: [{ propertyName: "tabset", first: true, predicate: ["tabset"], descendants: true }], exportAs: ["reuseTab"], usesOnChanges: true, ngImport: i0, template: "<nz-tabset\n  #tabset\n  [nzSelectedIndex]=\"pos\"\n  [nzAnimated]=\"false\"\n  [nzType]=\"tabType\"\n  [nzTabBarExtraContent]=\"tabBarExtraContent\"\n  [nzTabBarGutter]=\"tabBarGutter\"\n  [nzTabBarStyle]=\"tabBarStyle\"\n>\n  <nz-tab *ngFor=\"let i of list; let index = index\" [nzTitle]=\"titleTemplate\" (nzClick)=\"_to(index)\">\n    <ng-template #titleTemplate>\n      <div\n        [reuse-tab-context-menu]=\"i\"\n        [customContextMenu]=\"customContextMenu\"\n        class=\"reuse-tab__name\"\n        [attr.title]=\"i.title\"\n      >\n        <span [class.reuse-tab__name-width]=\"tabMaxWidth\" [style.max-width.px]=\"tabMaxWidth\">\n          <ng-container\n            *ngIf=\"titleRender; else defaultTitle\"\n            [ngTemplateOutlet]=\"titleRender\"\n            [ngTemplateOutletContext]=\"{ $implicit: i }\"\n          ></ng-container>\n          <ng-template #defaultTitle>{{ i.title }}</ng-template>\n        </span>\n      </div>\n      <i *ngIf=\"i.closable\" nz-icon nzType=\"close\" class=\"reuse-tab__op\" (click)=\"_close($event, index, false)\"></i>\n    </ng-template>\n  </nz-tab>\n</nz-tabset>\n<reuse-tab-context [i18n]=\"i18n\" (change)=\"contextMenuChange($event)\"></reuse-tab-context>\n", dependencies: [{ kind: "directive", type: i5.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i5.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: i6.NzTabSetComponent, selector: "nz-tabset", inputs: ["nzSelectedIndex", "nzTabPosition", "nzTabBarExtraContent", "nzCanDeactivate", "nzAddIcon", "nzTabBarStyle", "nzType", "nzSize", "nzAnimated", "nzTabBarGutter", "nzHideAdd", "nzCentered", "nzHideAll", "nzLinkRouter", "nzLinkExact"], outputs: ["nzSelectChange", "nzSelectedIndexChange", "nzTabListScroll", "nzClose", "nzAdd"], exportAs: ["nzTabset"] }, { kind: "component", type: i6.NzTabComponent, selector: "nz-tab", inputs: ["nzTitle", "nzClosable", "nzCloseIcon", "nzDisabled", "nzForceRender"], outputs: ["nzSelect", "nzDeselect", "nzClick", "nzContextmenu"], exportAs: ["nzTab"] }, { kind: "directive", type: i7.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "component", type: i8.ReuseTabContextComponent, selector: "reuse-tab-context", inputs: ["i18n"], outputs: ["change"] }, { kind: "directive", type: i9.ReuseTabContextDirective, selector: "[reuse-tab-context-menu]", inputs: ["reuse-tab-context-menu", "customContextMenu"], exportAs: ["reuseTabContextMenu"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    InputBoolean()
], ReuseTabComponent.prototype, "debug", void 0);
__decorate([
    InputNumber()
], ReuseTabComponent.prototype, "max", void 0);
__decorate([
    InputNumber()
], ReuseTabComponent.prototype, "tabMaxWidth", void 0);
__decorate([
    InputBoolean()
], ReuseTabComponent.prototype, "allowClose", void 0);
__decorate([
    InputBoolean()
], ReuseTabComponent.prototype, "keepingScroll", void 0);
__decorate([
    InputBoolean()
], ReuseTabComponent.prototype, "storageState", void 0);
__decorate([
    InputBoolean()
], ReuseTabComponent.prototype, "disabled", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.11", ngImport: i0, type: ReuseTabComponent, decorators: [{
            type: Component,
            args: [{ selector: 'reuse-tab, [reuse-tab]', exportAs: 'reuseTab', host: {
                        '[class.reuse-tab]': 'true',
                        '[class.reuse-tab__line]': `tabType === 'line'`,
                        '[class.reuse-tab__card]': `tabType === 'card'`,
                        '[class.reuse-tab__disabled]': `disabled`,
                        '[class.reuse-tab-rtl]': `dir === 'rtl'`
                    }, providers: [ReuseTabContextService], preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<nz-tabset\n  #tabset\n  [nzSelectedIndex]=\"pos\"\n  [nzAnimated]=\"false\"\n  [nzType]=\"tabType\"\n  [nzTabBarExtraContent]=\"tabBarExtraContent\"\n  [nzTabBarGutter]=\"tabBarGutter\"\n  [nzTabBarStyle]=\"tabBarStyle\"\n>\n  <nz-tab *ngFor=\"let i of list; let index = index\" [nzTitle]=\"titleTemplate\" (nzClick)=\"_to(index)\">\n    <ng-template #titleTemplate>\n      <div\n        [reuse-tab-context-menu]=\"i\"\n        [customContextMenu]=\"customContextMenu\"\n        class=\"reuse-tab__name\"\n        [attr.title]=\"i.title\"\n      >\n        <span [class.reuse-tab__name-width]=\"tabMaxWidth\" [style.max-width.px]=\"tabMaxWidth\">\n          <ng-container\n            *ngIf=\"titleRender; else defaultTitle\"\n            [ngTemplateOutlet]=\"titleRender\"\n            [ngTemplateOutletContext]=\"{ $implicit: i }\"\n          ></ng-container>\n          <ng-template #defaultTitle>{{ i.title }}</ng-template>\n        </span>\n      </div>\n      <i *ngIf=\"i.closable\" nz-icon nzType=\"close\" class=\"reuse-tab__op\" (click)=\"_close($event, index, false)\"></i>\n    </ng-template>\n  </nz-tab>\n</nz-tabset>\n<reuse-tab-context [i18n]=\"i18n\" (change)=\"contextMenuChange($event)\"></reuse-tab-context>\n" }]
        }], ctorParameters: function () { return [{ type: i1.ReuseTabService }, { type: i0.ChangeDetectorRef }, { type: i2.Router }, { type: i2.ActivatedRoute }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [ALAIN_I18N_TOKEN]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: i3.Platform }, { type: i4.Directionality, decorators: [{
                    type: Optional
                }] }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [REUSE_TAB_STORAGE_KEY]
                }] }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [REUSE_TAB_STORAGE_STATE]
                }] }]; }, propDecorators: { tabset: [{
                type: ViewChild,
                args: ['tabset']
            }], mode: [{
                type: Input
            }], i18n: [{
                type: Input
            }], debug: [{
                type: Input
            }], max: [{
                type: Input
            }], tabMaxWidth: [{
                type: Input
            }], excludes: [{
                type: Input
            }], allowClose: [{
                type: Input
            }], keepingScroll: [{
                type: Input
            }], storageState: [{
                type: Input
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
                type: Input
            }], titleRender: [{
                type: Input
            }], canClose: [{
                type: Input
            }], change: [{
                type: Output
            }], close: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2UtdGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9yZXVzZS10YWIvcmV1c2UtdGFiLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9yZXVzZS10YWIvcmV1c2UtdGFiLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUNMLHVCQUF1QixFQUV2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBSUwsUUFBUSxFQUNSLE1BQU0sRUFJTixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXBFLE9BQU8sRUFBb0IsZ0JBQWdCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDbEUsT0FBTyxFQUFnQixZQUFZLEVBQUUsV0FBVyxFQUFlLE1BQU0sdUJBQXVCLENBQUM7QUFJN0YsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQU9MLGlCQUFpQixFQUlsQixNQUFNLHdCQUF3QixDQUFDO0FBRWhDLE9BQU8sRUFBd0IscUJBQXFCLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7Ozs7QUFrQnpHLE1BQU0sT0FBTyxpQkFBaUI7SUE0QzVCLGFBQWE7SUFFYixZQUNVLEdBQW9CLEVBQ3BCLEdBQXNCLEVBQ3RCLE1BQWMsRUFDZCxLQUFxQixFQUNpQixPQUF5QixFQUM3QyxHQUFjLEVBQ2hDLFFBQWtCLEVBQ04sY0FBOEIsRUFDQyxRQUFnQixFQUNkLFFBQThCO1FBVDNFLFFBQUcsR0FB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QixLQUFLO2dCQUNrQixHQUFHO3NCQUExQixLQUFLO2dCQUNrQixXQUFXO3NCQUFsQyxLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ21CLFVBQVU7c0JBQWxDLEtBQUs7Z0JBQ21CLGFBQWE7c0JBQXJDLEtBQUs7Z0JBQ21CLFlBQVk7c0JBQXBDLEtBQUs7Z0JBRUYsc0JBQXNCO3NCQUR6QixLQUFLO2dCQUlHLGlCQUFpQjtzQkFBekIsS0FBSztnQkFDRyxrQkFBa0I7c0JBQTFCLEtBQUs7Z0JBQ0csWUFBWTtzQkFBcEIsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUNHLE9BQU87c0JBQWYsS0FBSztnQkFDRyxtQkFBbUI7c0JBQTNCLEtBQUs7Z0JBQ21CLFFBQVE7c0JBQWhDLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNhLE1BQU07c0JBQXhCLE1BQU07Z0JBQ1ksS0FBSztzQkFBdkIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2UsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTdWJqZWN0LCBkZWJvdW5jZVRpbWUsIGZpbHRlciwgdGFrZVVudGlsLCBvZiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBBbGFpbkkxOE5TZXJ2aWNlLCBBTEFJTl9JMThOX1RPS0VOIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciwgTnVtYmVySW5wdXQgfSBmcm9tICdAZGVsb24vdXRpbC9kZWNvcmF0b3InO1xuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgTnpUYWJTZXRDb21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL3RhYnMnO1xuXG5pbXBvcnQgeyBSZXVzZVRhYkNvbnRleHRTZXJ2aWNlIH0gZnJvbSAnLi9yZXVzZS10YWItY29udGV4dC5zZXJ2aWNlJztcbmltcG9ydCB7XG4gIFJldXNlQ2FuQ2xvc2UsXG4gIFJldXNlQ29udGV4dENsb3NlRXZlbnQsXG4gIFJldXNlQ29udGV4dEkxOG4sXG4gIFJldXNlQ3VzdG9tQ29udGV4dE1lbnUsXG4gIFJldXNlSXRlbSxcbiAgUmV1c2VUYWJDYWNoZWQsXG4gIFJldXNlVGFiTWF0Y2hNb2RlLFxuICBSZXVzZVRhYk5vdGlmeSxcbiAgUmV1c2VUYWJSb3V0ZVBhcmFtTWF0Y2hNb2RlLFxuICBSZXVzZVRpdGxlXG59IGZyb20gJy4vcmV1c2UtdGFiLmludGVyZmFjZXMnO1xuaW1wb3J0IHsgUmV1c2VUYWJTZXJ2aWNlIH0gZnJvbSAnLi9yZXVzZS10YWIuc2VydmljZSc7XG5pbXBvcnQgeyBSZXVzZVRhYlN0b3JhZ2VTdGF0ZSwgUkVVU0VfVEFCX1NUT1JBR0VfS0VZLCBSRVVTRV9UQUJfU1RPUkFHRV9TVEFURSB9IGZyb20gJy4vcmV1c2UtdGFiLnN0YXRlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncmV1c2UtdGFiLCBbcmV1c2UtdGFiXScsXG4gIGV4cG9ydEFzOiAncmV1c2VUYWInLFxuICB0ZW1wbGF0ZVVybDogJy4vcmV1c2UtdGFiLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MucmV1c2UtdGFiXSc6ICd0cnVlJyxcbiAgICAnW2NsYXNzLnJldXNlLXRhYl9fbGluZV0nOiBgdGFiVHlwZSA9PT0gJ2xpbmUnYCxcbiAgICAnW2NsYXNzLnJldXNlLXRhYl9fY2FyZF0nOiBgdGFiVHlwZSA9PT0gJ2NhcmQnYCxcbiAgICAnW2NsYXNzLnJldXNlLXRhYl9fZGlzYWJsZWRdJzogYGRpc2FibGVkYCxcbiAgICAnW2NsYXNzLnJldXNlLXRhYi1ydGxdJzogYGRpciA9PT0gJ3J0bCdgXG4gIH0sXG4gIHByb3ZpZGVyczogW1JldXNlVGFiQ29udGV4dFNlcnZpY2VdLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgUmV1c2VUYWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2RlYnVnOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9tYXg6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfdGFiTWF4V2lkdGg6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfYWxsb3dDbG9zZTogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfa2VlcGluZ1Njcm9sbDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZGlzYWJsZWQ6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3N0b3JhZ2VTdGF0ZTogQm9vbGVhbklucHV0O1xuXG4gIEBWaWV3Q2hpbGQoJ3RhYnNldCcpIHByaXZhdGUgdGFic2V0ITogTnpUYWJTZXRDb21wb25lbnQ7XG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIF9rZWVwaW5nU2Nyb2xsQ29udGFpbmVyPzogRWxlbWVudDtcbiAgbGlzdDogUmV1c2VJdGVtW10gPSBbXTtcbiAgaXRlbT86IFJldXNlSXRlbTtcbiAgcG9zID0gMDtcbiAgZGlyOiBEaXJlY3Rpb24gPSAnbHRyJztcblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIEBJbnB1dCgpIG1vZGU6IFJldXNlVGFiTWF0Y2hNb2RlID0gUmV1c2VUYWJNYXRjaE1vZGUuTWVudTtcbiAgQElucHV0KCkgaTE4bj86IFJldXNlQ29udGV4dEkxOG47XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkZWJ1ZyA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBtYXg/OiBudW1iZXI7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHRhYk1heFdpZHRoPzogbnVtYmVyO1xuICBASW5wdXQoKSBleGNsdWRlcz86IFJlZ0V4cFtdO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYWxsb3dDbG9zZSA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBrZWVwaW5nU2Nyb2xsID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzdG9yYWdlU3RhdGUgPSBmYWxzZTtcbiAgQElucHV0KClcbiAgc2V0IGtlZXBpbmdTY3JvbGxDb250YWluZXIodmFsdWU6IHN0cmluZyB8IEVsZW1lbnQpIHtcbiAgICB0aGlzLl9rZWVwaW5nU2Nyb2xsQ29udGFpbmVyID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHRoaXMuZG9jLnF1ZXJ5U2VsZWN0b3IodmFsdWUpIDogdmFsdWU7XG4gIH1cbiAgQElucHV0KCkgY3VzdG9tQ29udGV4dE1lbnU6IFJldXNlQ3VzdG9tQ29udGV4dE1lbnVbXSA9IFtdO1xuICBASW5wdXQoKSB0YWJCYXJFeHRyYUNvbnRlbnQ/OiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgdGFiQmFyR3V0dGVyPzogbnVtYmVyO1xuICBASW5wdXQoKSB0YWJCYXJTdHlsZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSB0YWJUeXBlOiAnbGluZScgfCAnY2FyZCcgPSAnbGluZSc7XG4gIEBJbnB1dCgpIHJvdXRlUGFyYW1NYXRjaE1vZGU6IFJldXNlVGFiUm91dGVQYXJhbU1hdGNoTW9kZSA9ICdzdHJpY3QnO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgdGl0bGVSZW5kZXI/OiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogUmV1c2VJdGVtIH0+O1xuICBASW5wdXQoKSBjYW5DbG9zZT86IFJldXNlQ2FuQ2xvc2U7XG4gIEBPdXRwdXQoKSByZWFkb25seSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFJldXNlSXRlbT4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjxSZXVzZUl0ZW0gfCBudWxsPigpO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHNydjogUmV1c2VUYWJTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoQUxBSU5fSTE4Tl9UT0tFTikgcHJpdmF0ZSBpMThuU3J2OiBBbGFpbkkxOE5TZXJ2aWNlLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBOelNhZmVBbnksXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0sXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBkaXJlY3Rpb25hbGl0eTogRGlyZWN0aW9uYWxpdHksXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChSRVVTRV9UQUJfU1RPUkFHRV9LRVkpIHByaXZhdGUgc3RhdGVLZXk6IHN0cmluZyxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KFJFVVNFX1RBQl9TVE9SQUdFX1NUQVRFKSBwcml2YXRlIHN0YXRlU3J2OiBSZXVzZVRhYlN0b3JhZ2VTdGF0ZVxuICApIHt9XG5cbiAgcHJpdmF0ZSBnZW5UaXQodGl0bGU6IFJldXNlVGl0bGUpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aXRsZS5pMThuICYmIHRoaXMuaTE4blNydiA/IHRoaXMuaTE4blNydi5mYW55aSh0aXRsZS5pMThuKSA6IHRpdGxlLnRleHQhO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgY3VyVXJsKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuc3J2LmdldFVybCh0aGlzLnJvdXRlLnNuYXBzaG90KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuQ3VySXRlbSgpOiBSZXVzZUl0ZW0ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuY3VyVXJsO1xuICAgIGNvbnN0IHNuYXBzaG90VHJ1ZSA9IHRoaXMuc3J2LmdldFRydXRoUm91dGUodGhpcy5yb3V0ZS5zbmFwc2hvdCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVybCxcbiAgICAgIHRpdGxlOiB0aGlzLmdlblRpdCh0aGlzLnNydi5nZXRUaXRsZSh1cmwsIHNuYXBzaG90VHJ1ZSkpLFxuICAgICAgY2xvc2FibGU6IHRoaXMuYWxsb3dDbG9zZSAmJiB0aGlzLnNydi5jb3VudCA+IDAgJiYgdGhpcy5zcnYuZ2V0Q2xvc2FibGUodXJsLCBzbmFwc2hvdFRydWUpLFxuICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgIGxhc3Q6IGZhbHNlLFxuICAgICAgaW5kZXg6IDBcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5MaXN0KG5vdGlmeTogUmV1c2VUYWJOb3RpZnkgfCBudWxsKTogdm9pZCB7XG4gICAgY29uc3QgbHMgPSB0aGlzLnNydi5pdGVtcy5tYXAoXG4gICAgICAoaXRlbTogUmV1c2VUYWJDYWNoZWQsIGluZGV4OiBudW1iZXIpID0+XG4gICAgICAgICh7XG4gICAgICAgICAgdXJsOiBpdGVtLnVybCxcbiAgICAgICAgICB0aXRsZTogdGhpcy5nZW5UaXQoaXRlbS50aXRsZSksXG4gICAgICAgICAgY2xvc2FibGU6IHRoaXMuYWxsb3dDbG9zZSAmJiBpdGVtLmNsb3NhYmxlICYmIHRoaXMuc3J2LmNvdW50ID4gMCxcbiAgICAgICAgICBwb3NpdGlvbjogaXRlbS5wb3NpdGlvbixcbiAgICAgICAgICBpbmRleCxcbiAgICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICAgIGxhc3Q6IGZhbHNlXG4gICAgICAgIH0gYXMgUmV1c2VJdGVtKVxuICAgICk7XG4gICAgLy8gZGVidWdnZXI7XG5cbiAgICBjb25zdCB1cmwgPSB0aGlzLmN1clVybDtcbiAgICBsZXQgYWRkQ3VycmVudCA9IGxzLmZpbmRJbmRleCh3ID0+IHcudXJsID09PSB1cmwpID09PSAtMTtcbiAgICBpZiAobm90aWZ5ICYmIG5vdGlmeS5hY3RpdmUgPT09ICdjbG9zZScgJiYgbm90aWZ5LnVybCA9PT0gdXJsKSB7XG4gICAgICBhZGRDdXJyZW50ID0gZmFsc2U7XG4gICAgICBsZXQgdG9Qb3MgPSAwO1xuICAgICAgY29uc3QgY3VySXRlbSA9IHRoaXMubGlzdC5maW5kKHcgPT4gdy51cmwgPT09IHVybCkhO1xuICAgICAgaWYgKGN1ckl0ZW0uaW5kZXggPT09IGxzLmxlbmd0aCkge1xuICAgICAgICAvLyBXaGVuIGNsb3NlZCBpcyBsYXN0XG4gICAgICAgIHRvUG9zID0gbHMubGVuZ3RoIC0gMTtcbiAgICAgIH0gZWxzZSBpZiAoY3VySXRlbS5pbmRleCA8IGxzLmxlbmd0aCkge1xuICAgICAgICAvLyBTaG91bGQgYmUgYWN0aXZlZCBuZXh0IHRhYiB3aGVuIGNsb3NlZCBpcyBtaWRkbGVcbiAgICAgICAgdG9Qb3MgPSBNYXRoLm1heCgwLCBjdXJJdGVtLmluZGV4KTtcbiAgICAgIH1cbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwobHNbdG9Qb3NdLnVybCk7XG4gICAgfVxuXG4gICAgaWYgKGFkZEN1cnJlbnQpIHtcbiAgICAgIGxzLnNwbGljZSh0aGlzLnBvcyArIDEsIDAsIHRoaXMuZ2VuQ3VySXRlbSgpKTtcbiAgICB9XG5cbiAgICBscy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4gKGl0ZW0uaW5kZXggPSBpbmRleCkpO1xuICAgIGlmIChscy5sZW5ndGggPT09IDEpIHtcbiAgICAgIGxzWzBdLmNsb3NhYmxlID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMubGlzdCA9IGxzO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB0aGlzLnVwZGF0ZVBvcygpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVUaXRsZShyZXM6IFJldXNlVGFiTm90aWZ5KTogdm9pZCB7XG4gICAgY29uc3QgaXRlbSA9IHRoaXMubGlzdC5maW5kKHcgPT4gdy51cmwgPT09IHJlcyEudXJsKTtcbiAgICBpZiAoIWl0ZW0pIHJldHVybjtcbiAgICBpdGVtLnRpdGxlID0gdGhpcy5nZW5UaXQocmVzIS50aXRsZSEpO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVmcmVzaChpdGVtOiBSZXVzZUl0ZW0pOiB2b2lkIHtcbiAgICB0aGlzLnNydi5ydW5Ib29rKCdfb25SZXVzZUluaXQnLCB0aGlzLnBvcyA9PT0gaXRlbS5pbmRleCA/IHRoaXMuc3J2LmNvbXBvbmVudFJlZiA6IGl0ZW0uaW5kZXgsICdyZWZyZXNoJyk7XG4gIH1cblxuICBwcml2YXRlIHNhdmVTdGF0ZSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuc3J2LmluaXRlZCB8fCAhdGhpcy5zdG9yYWdlU3RhdGUpIHJldHVybjtcblxuICAgIHRoaXMuc3RhdGVTcnYudXBkYXRlKHRoaXMuc3RhdGVLZXksIHRoaXMubGlzdCk7XG4gIH1cblxuICAvLyAjcmVnaW9uIFVJXG5cbiAgY29udGV4dE1lbnVDaGFuZ2UocmVzOiBSZXVzZUNvbnRleHRDbG9zZUV2ZW50KTogdm9pZCB7XG4gICAgbGV0IGZuOiAoKCkgPT4gdm9pZCkgfCBudWxsID0gbnVsbDtcbiAgICBzd2l0Y2ggKHJlcy50eXBlKSB7XG4gICAgICBjYXNlICdyZWZyZXNoJzpcbiAgICAgICAgdGhpcy5yZWZyZXNoKHJlcy5pdGVtKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjbG9zZSc6XG4gICAgICAgIHRoaXMuX2Nsb3NlKG51bGwsIHJlcy5pdGVtLmluZGV4LCByZXMuaW5jbHVkZU5vbkNsb3NlYWJsZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY2xvc2VSaWdodCc6XG4gICAgICAgIGZuID0gKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc3J2LmNsb3NlUmlnaHQocmVzLml0ZW0udXJsLCByZXMuaW5jbHVkZU5vbkNsb3NlYWJsZSk7XG4gICAgICAgICAgdGhpcy5jbG9zZS5lbWl0KG51bGwpO1xuICAgICAgICB9O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2Nsb3NlT3RoZXInOlxuICAgICAgICBmbiA9ICgpID0+IHtcbiAgICAgICAgICB0aGlzLnNydi5jbGVhcihyZXMuaW5jbHVkZU5vbkNsb3NlYWJsZSk7XG4gICAgICAgICAgdGhpcy5jbG9zZS5lbWl0KG51bGwpO1xuICAgICAgICB9O1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgaWYgKCFmbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXJlcy5pdGVtLmFjdGl2ZSAmJiByZXMuaXRlbS5pbmRleCA8PSB0aGlzLmxpc3QuZmluZCh3ID0+IHcuYWN0aXZlKSEuaW5kZXgpIHtcbiAgICAgIHRoaXMuX3RvKHJlcy5pdGVtLmluZGV4LCBmbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZuKCk7XG4gICAgfVxuICB9XG5cbiAgX3RvKGluZGV4OiBudW1iZXIsIGNiPzogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIGluZGV4ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oaW5kZXgsIHRoaXMubGlzdC5sZW5ndGggLSAxKSk7XG4gICAgY29uc3QgaXRlbSA9IHRoaXMubGlzdFtpbmRleF07XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChpdGVtLnVybCkudGhlbihyZXMgPT4ge1xuICAgICAgaWYgKCFyZXMpIHJldHVybjtcbiAgICAgIHRoaXMuaXRlbSA9IGl0ZW07XG4gICAgICB0aGlzLmNoYW5nZS5lbWl0KGl0ZW0pO1xuICAgICAgaWYgKGNiKSB7XG4gICAgICAgIGNiKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBfY2xvc2UoZTogRXZlbnQgfCBudWxsLCBpZHg6IG51bWJlciwgaW5jbHVkZU5vbkNsb3NlYWJsZTogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgIGlmIChlICE9IG51bGwpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmxpc3RbaWR4XTtcbiAgICAodGhpcy5jYW5DbG9zZSA/IHRoaXMuY2FuQ2xvc2UoeyBpdGVtLCBpbmNsdWRlTm9uQ2xvc2VhYmxlIH0pIDogb2YodHJ1ZSkpLnBpcGUoZmlsdGVyKHYgPT4gdikpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnNydi5jbG9zZShpdGVtLnVybCwgaW5jbHVkZU5vbkNsb3NlYWJsZSk7XG4gICAgICB0aGlzLmNsb3NlLmVtaXQoaXRlbSk7XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIOiuvue9rua/gOa0u+i3r+eUseeahOWunuS+i++8jOWcqCBgc3JjL2FwcC9sYXlvdXQvYmFzaWMvYmFzaWMuY29tcG9uZW50LnRzYCDkv67mlLnvvJpcbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogPHJldXNlLXRhYiAjcmV1c2VUYWI+PC9yZXVzZS10YWI+XG4gICAqIDxyb3V0ZXItb3V0bGV0IChhY3RpdmF0ZSk9XCJyZXVzZVRhYi5hY3RpdmF0ZSgkZXZlbnQpXCIgKGF0dGFjaCk9XCJyZXVzZVRhYi5hY3RpdmF0ZSgkZXZlbnQpXCI+PC9yb3V0ZXItb3V0bGV0PlxuICAgKi9cbiAgYWN0aXZhdGUoaW5zdGFuY2U6IE56U2FmZUFueSk6IHZvaWQge1xuICAgIHRoaXMuc3J2LmNvbXBvbmVudFJlZiA9IHsgaW5zdGFuY2UgfTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlUG9zKCk6IHZvaWQge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuc3J2LmdldFVybCh0aGlzLnJvdXRlLnNuYXBzaG90KTtcbiAgICBjb25zdCBscyA9IHRoaXMubGlzdC5maWx0ZXIodyA9PiB3LnVybCA9PT0gdXJsIHx8ICF0aGlzLnNydi5pc0V4Y2x1ZGUody51cmwpKTtcbiAgICBpZiAobHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbGFzdCA9IGxzW2xzLmxlbmd0aCAtIDFdO1xuICAgIGNvbnN0IGl0ZW0gPSBscy5maW5kKHcgPT4gdy51cmwgPT09IHVybCk7XG4gICAgbGFzdC5sYXN0ID0gdHJ1ZTtcbiAgICBjb25zdCBwb3MgPSBpdGVtID09IG51bGwgPyBsYXN0LmluZGV4IDogaXRlbS5pbmRleDtcbiAgICBscy5mb3JFYWNoKChpLCBpZHgpID0+IChpLmFjdGl2ZSA9IHBvcyA9PT0gaWR4KSk7XG4gICAgdGhpcy5wb3MgPSBwb3M7XG4gICAgLy8gVE9ETzog55uu5YmN5peg5rOV55+l6YGT5Li65LuA5LmIIGBwb3NgIOaXoOazlemAmui/hyBgbnpTZWxlY3RlZEluZGV4YCDnlJ/mlYjvvIzlm6DmraTlvLrliLbkvb/nlKjnu4Tku7blrp7kvovnmoTmlrnlvI/mnaXkv67mlLnvvIzov5nnp43mlrnlvI/mmK/lronlhajnmoRcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbmctYWxhaW4vbmctYWxhaW4vaXNzdWVzLzE3MzZcbiAgICB0aGlzLnRhYnNldC5uelNlbGVjdGVkSW5kZXggPSBwb3M7XG4gICAgdGhpcy5saXN0ID0gbHM7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHRoaXMuc2F2ZVN0YXRlKCk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5kaXIgPSB0aGlzLmRpcmVjdGlvbmFsaXR5LnZhbHVlO1xuICAgIHRoaXMuZGlyZWN0aW9uYWxpdHkuY2hhbmdlPy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKChkaXJlY3Rpb246IERpcmVjdGlvbikgPT4ge1xuICAgICAgdGhpcy5kaXIgPSBkaXJlY3Rpb247XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG5cbiAgICBpZiAoIXRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zcnYuY2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgIHN3aXRjaCAocmVzPy5hY3RpdmUpIHtcbiAgICAgICAgY2FzZSAndGl0bGUnOlxuICAgICAgICAgIHRoaXMudXBkYXRlVGl0bGUocmVzKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNhc2UgJ292ZXJyaWRlJzpcbiAgICAgICAgICBpZiAocmVzPy5saXN0Py5sZW5ndGggPT09IHRoaXMubGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUG9zKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgdGhpcy5nZW5MaXN0KHJlcyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmkxOG5TcnYuY2hhbmdlXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKCgpID0+IHRoaXMuc3J2LmluaXRlZCksXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcbiAgICAgICAgZGVib3VuY2VUaW1lKDEwMClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5nZW5MaXN0KHsgYWN0aXZlOiAndGl0bGUnIH0pKTtcblxuICAgIHRoaXMuc3J2LmluaXQoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgW1AgaW4ga2V5b2YgdGhpc10/OiBTaW1wbGVDaGFuZ2UgfSAmIFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXMubWF4KSB0aGlzLnNydi5tYXggPSB0aGlzLm1heCE7XG4gICAgaWYgKGNoYW5nZXMuZXhjbHVkZXMpIHRoaXMuc3J2LmV4Y2x1ZGVzID0gdGhpcy5leGNsdWRlcyE7XG4gICAgaWYgKGNoYW5nZXMubW9kZSkgdGhpcy5zcnYubW9kZSA9IHRoaXMubW9kZTtcbiAgICBpZiAoY2hhbmdlcy5yb3V0ZVBhcmFtTWF0Y2hNb2RlKSB0aGlzLnNydi5yb3V0ZVBhcmFtTWF0Y2hNb2RlID0gdGhpcy5yb3V0ZVBhcmFtTWF0Y2hNb2RlO1xuICAgIGlmIChjaGFuZ2VzLmtlZXBpbmdTY3JvbGwpIHtcbiAgICAgIHRoaXMuc3J2LmtlZXBpbmdTY3JvbGwgPSB0aGlzLmtlZXBpbmdTY3JvbGw7XG4gICAgICB0aGlzLnNydi5rZWVwaW5nU2Nyb2xsQ29udGFpbmVyID0gdGhpcy5fa2VlcGluZ1Njcm9sbENvbnRhaW5lcjtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMuc3RvcmFnZVN0YXRlKSB0aGlzLnNydi5zdG9yYWdlU3RhdGUgPSB0aGlzLnN0b3JhZ2VTdGF0ZTtcblxuICAgIHRoaXMuc3J2LmRlYnVnID0gdGhpcy5kZWJ1ZztcblxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgZGVzdHJveSQgfSA9IHRoaXM7XG4gICAgZGVzdHJveSQubmV4dCgpO1xuICAgIGRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiIsIjxuei10YWJzZXRcbiAgI3RhYnNldFxuICBbbnpTZWxlY3RlZEluZGV4XT1cInBvc1wiXG4gIFtuekFuaW1hdGVkXT1cImZhbHNlXCJcbiAgW256VHlwZV09XCJ0YWJUeXBlXCJcbiAgW256VGFiQmFyRXh0cmFDb250ZW50XT1cInRhYkJhckV4dHJhQ29udGVudFwiXG4gIFtuelRhYkJhckd1dHRlcl09XCJ0YWJCYXJHdXR0ZXJcIlxuICBbbnpUYWJCYXJTdHlsZV09XCJ0YWJCYXJTdHlsZVwiXG4+XG4gIDxuei10YWIgKm5nRm9yPVwibGV0IGkgb2YgbGlzdDsgbGV0IGluZGV4ID0gaW5kZXhcIiBbbnpUaXRsZV09XCJ0aXRsZVRlbXBsYXRlXCIgKG56Q2xpY2spPVwiX3RvKGluZGV4KVwiPlxuICAgIDxuZy10ZW1wbGF0ZSAjdGl0bGVUZW1wbGF0ZT5cbiAgICAgIDxkaXZcbiAgICAgICAgW3JldXNlLXRhYi1jb250ZXh0LW1lbnVdPVwiaVwiXG4gICAgICAgIFtjdXN0b21Db250ZXh0TWVudV09XCJjdXN0b21Db250ZXh0TWVudVwiXG4gICAgICAgIGNsYXNzPVwicmV1c2UtdGFiX19uYW1lXCJcbiAgICAgICAgW2F0dHIudGl0bGVdPVwiaS50aXRsZVwiXG4gICAgICA+XG4gICAgICAgIDxzcGFuIFtjbGFzcy5yZXVzZS10YWJfX25hbWUtd2lkdGhdPVwidGFiTWF4V2lkdGhcIiBbc3R5bGUubWF4LXdpZHRoLnB4XT1cInRhYk1heFdpZHRoXCI+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgKm5nSWY9XCJ0aXRsZVJlbmRlcjsgZWxzZSBkZWZhdWx0VGl0bGVcIlxuICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwidGl0bGVSZW5kZXJcIlxuICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBpIH1cIlxuICAgICAgICAgID48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8bmctdGVtcGxhdGUgI2RlZmF1bHRUaXRsZT57eyBpLnRpdGxlIH19PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8aSAqbmdJZj1cImkuY2xvc2FibGVcIiBuei1pY29uIG56VHlwZT1cImNsb3NlXCIgY2xhc3M9XCJyZXVzZS10YWJfX29wXCIgKGNsaWNrKT1cIl9jbG9zZSgkZXZlbnQsIGluZGV4LCBmYWxzZSlcIj48L2k+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgPC9uei10YWI+XG48L256LXRhYnNldD5cbjxyZXVzZS10YWItY29udGV4dCBbaTE4bl09XCJpMThuXCIgKGNoYW5nZSk9XCJjb250ZXh0TWVudUNoYW5nZSgkZXZlbnQpXCI+PC9yZXVzZS10YWItY29udGV4dD5cbiJdfQ==