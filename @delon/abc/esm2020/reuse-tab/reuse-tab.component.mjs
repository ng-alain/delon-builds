import { __decorate } from "tslib";
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, Optional, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subject, debounceTime, filter, takeUntil } from 'rxjs';
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
import * as i5 from "ng-zorro-antd/tabs";
import * as i6 from "./reuse-tab-context.component";
import * as i7 from "@angular/common";
import * as i8 from "./reuse-tab-context.directive";
import * as i9 from "ng-zorro-antd/icon";
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
        this.srv.close(item.url, includeNonCloseable);
        this.close.emit(item);
        this.cdr.detectChanges();
        return false;
    }
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
ReuseTabComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ReuseTabComponent, deps: [{ token: i1.ReuseTabService }, { token: i0.ChangeDetectorRef }, { token: i2.Router }, { token: i2.ActivatedRoute }, { token: ALAIN_I18N_TOKEN, optional: true }, { token: DOCUMENT }, { token: i3.Platform }, { token: i4.Directionality, optional: true }, { token: REUSE_TAB_STORAGE_KEY, optional: true }, { token: REUSE_TAB_STORAGE_STATE, optional: true }], target: i0.ɵɵFactoryTarget.Component });
ReuseTabComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: ReuseTabComponent, selector: "reuse-tab, [reuse-tab]", inputs: { mode: "mode", i18n: "i18n", debug: "debug", max: "max", tabMaxWidth: "tabMaxWidth", excludes: "excludes", allowClose: "allowClose", keepingScroll: "keepingScroll", storageState: "storageState", keepingScrollContainer: "keepingScrollContainer", customContextMenu: "customContextMenu", tabBarExtraContent: "tabBarExtraContent", tabBarGutter: "tabBarGutter", tabBarStyle: "tabBarStyle", tabType: "tabType", routeParamMatchMode: "routeParamMatchMode", disabled: "disabled", titleRender: "titleRender" }, outputs: { change: "change", close: "close" }, host: { properties: { "class.reuse-tab": "true", "class.reuse-tab__line": "tabType === 'line'", "class.reuse-tab__card": "tabType === 'card'", "class.reuse-tab__disabled": "disabled", "class.reuse-tab-rtl": "dir === 'rtl'" } }, providers: [ReuseTabContextService], viewQueries: [{ propertyName: "tabset", first: true, predicate: ["tabset"], descendants: true }], exportAs: ["reuseTab"], usesOnChanges: true, ngImport: i0, template: "<nz-tabset\n  #tabset\n  [nzSelectedIndex]=\"pos\"\n  [nzAnimated]=\"false\"\n  [nzType]=\"tabType\"\n  [nzTabBarExtraContent]=\"tabBarExtraContent\"\n  [nzTabBarGutter]=\"tabBarGutter\"\n  [nzTabBarStyle]=\"tabBarStyle\"\n>\n  <nz-tab *ngFor=\"let i of list; let index = index\" [nzTitle]=\"titleTemplate\" (nzClick)=\"_to(index)\">\n    <ng-template #titleTemplate>\n      <div\n        [reuse-tab-context-menu]=\"i\"\n        [customContextMenu]=\"customContextMenu\"\n        class=\"reuse-tab__name\"\n        [attr.title]=\"i.title\"\n      >\n        <span [class.reuse-tab__name-width]=\"tabMaxWidth\" [style.max-width.px]=\"tabMaxWidth\">\n          <ng-container\n            *ngIf=\"titleRender; else defaultTitle\"\n            [ngTemplateOutlet]=\"titleRender\"\n            [ngTemplateOutletContext]=\"{ $implicit: i }\"\n          ></ng-container>\n          <ng-template #defaultTitle>{{ i.title }}</ng-template>\n        </span>\n      </div>\n      <i *ngIf=\"i.closable\" nz-icon nzType=\"close\" class=\"reuse-tab__op\" (click)=\"_close($event, index, false)\"></i>\n    </ng-template>\n  </nz-tab>\n</nz-tabset>\n<reuse-tab-context [i18n]=\"i18n\" (change)=\"contextMenuChange($event)\"></reuse-tab-context>\n", components: [{ type: i5.NzTabSetComponent, selector: "nz-tabset", inputs: ["nzSelectedIndex", "nzTabPosition", "nzTabBarExtraContent", "nzCanDeactivate", "nzAddIcon", "nzTabBarStyle", "nzType", "nzSize", "nzAnimated", "nzTabBarGutter", "nzHideAdd", "nzCentered", "nzHideAll", "nzLinkRouter", "nzLinkExact"], outputs: ["nzSelectChange", "nzSelectedIndexChange", "nzTabListScroll", "nzClose", "nzAdd"], exportAs: ["nzTabset"] }, { type: i5.NzTabComponent, selector: "nz-tab", inputs: ["nzTitle", "nzClosable", "nzCloseIcon", "nzDisabled", "nzForceRender"], outputs: ["nzSelect", "nzDeselect", "nzClick", "nzContextmenu"], exportAs: ["nzTab"] }, { type: i6.ReuseTabContextComponent, selector: "reuse-tab-context", inputs: ["i18n"], outputs: ["change"] }], directives: [{ type: i7.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i8.ReuseTabContextDirective, selector: "[reuse-tab-context-menu]", inputs: ["reuse-tab-context-menu", "customContextMenu"], exportAs: ["reuseTabContextMenu"] }, { type: i7.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i7.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }, { type: i9.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ReuseTabComponent, decorators: [{
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
            }], change: [{
                type: Output
            }], close: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2UtdGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9yZXVzZS10YWIvcmV1c2UtdGFiLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9yZXVzZS10YWIvcmV1c2UtdGFiLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUNMLHVCQUF1QixFQUV2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBSUwsUUFBUSxFQUNSLE1BQU0sRUFJTixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFaEUsT0FBTyxFQUFvQixnQkFBZ0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNsRSxPQUFPLEVBQWdCLFlBQVksRUFBRSxXQUFXLEVBQWUsTUFBTSx1QkFBdUIsQ0FBQztBQUk3RixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNyRSxPQUFPLEVBTUwsaUJBQWlCLEVBSWxCLE1BQU0sd0JBQXdCLENBQUM7QUFFaEMsT0FBTyxFQUF3QixxQkFBcUIsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7Ozs7Ozs7OztBQWtCekcsTUFBTSxPQUFPLGlCQUFpQjtJQTJDNUIsYUFBYTtJQUViLFlBQ1UsR0FBb0IsRUFDcEIsR0FBc0IsRUFDdEIsTUFBYyxFQUNkLEtBQXFCLEVBQ2lCLE9BQXlCLEVBQzdDLEdBQWMsRUFDaEMsUUFBa0IsRUFDTixjQUE4QixFQUNDLFFBQWdCLEVBQ2QsUUFBOEI7UUFUM0UsUUFBRyxHQUFILEdBQUcsQ0FB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bkIsS0FBSztnQkFDRyxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csbUJBQW1CO3NCQUEzQixLQUFLO2dCQUNtQixRQUFRO3NCQUFoQyxLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ2EsTUFBTTtzQkFBeEIsTUFBTTtnQkFDWSxLQUFLO3NCQUF2QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZSxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFN1YmplY3QsIGRlYm91bmNlVGltZSwgZmlsdGVyLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQWxhaW5JMThOU2VydmljZSwgQUxBSU5fSTE4Tl9UT0tFTiB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIsIE51bWJlcklucHV0IH0gZnJvbSAnQGRlbG9uL3V0aWwvZGVjb3JhdG9yJztcbmltcG9ydCB0eXBlIHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IE56VGFiU2V0Q29tcG9uZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC90YWJzJztcblxuaW1wb3J0IHsgUmV1c2VUYWJDb250ZXh0U2VydmljZSB9IGZyb20gJy4vcmV1c2UtdGFiLWNvbnRleHQuc2VydmljZSc7XG5pbXBvcnQge1xuICBSZXVzZUNvbnRleHRDbG9zZUV2ZW50LFxuICBSZXVzZUNvbnRleHRJMThuLFxuICBSZXVzZUN1c3RvbUNvbnRleHRNZW51LFxuICBSZXVzZUl0ZW0sXG4gIFJldXNlVGFiQ2FjaGVkLFxuICBSZXVzZVRhYk1hdGNoTW9kZSxcbiAgUmV1c2VUYWJOb3RpZnksXG4gIFJldXNlVGFiUm91dGVQYXJhbU1hdGNoTW9kZSxcbiAgUmV1c2VUaXRsZVxufSBmcm9tICcuL3JldXNlLXRhYi5pbnRlcmZhY2VzJztcbmltcG9ydCB7IFJldXNlVGFiU2VydmljZSB9IGZyb20gJy4vcmV1c2UtdGFiLnNlcnZpY2UnO1xuaW1wb3J0IHsgUmV1c2VUYWJTdG9yYWdlU3RhdGUsIFJFVVNFX1RBQl9TVE9SQUdFX0tFWSwgUkVVU0VfVEFCX1NUT1JBR0VfU1RBVEUgfSBmcm9tICcuL3JldXNlLXRhYi5zdGF0ZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3JldXNlLXRhYiwgW3JldXNlLXRhYl0nLFxuICBleHBvcnRBczogJ3JldXNlVGFiJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JldXNlLXRhYi5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLnJldXNlLXRhYl0nOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy5yZXVzZS10YWJfX2xpbmVdJzogYHRhYlR5cGUgPT09ICdsaW5lJ2AsXG4gICAgJ1tjbGFzcy5yZXVzZS10YWJfX2NhcmRdJzogYHRhYlR5cGUgPT09ICdjYXJkJ2AsXG4gICAgJ1tjbGFzcy5yZXVzZS10YWJfX2Rpc2FibGVkXSc6IGBkaXNhYmxlZGAsXG4gICAgJ1tjbGFzcy5yZXVzZS10YWItcnRsXSc6IGBkaXIgPT09ICdydGwnYFxuICB9LFxuICBwcm92aWRlcnM6IFtSZXVzZVRhYkNvbnRleHRTZXJ2aWNlXSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFJldXNlVGFiQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9kZWJ1ZzogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbWF4OiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3RhYk1heFdpZHRoOiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2FsbG93Q2xvc2U6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2tlZXBpbmdTY3JvbGw6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Rpc2FibGVkOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9zdG9yYWdlU3RhdGU6IEJvb2xlYW5JbnB1dDtcblxuICBAVmlld0NoaWxkKCd0YWJzZXQnKSBwcml2YXRlIHRhYnNldCE6IE56VGFiU2V0Q29tcG9uZW50O1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSBfa2VlcGluZ1Njcm9sbENvbnRhaW5lcj86IEVsZW1lbnQ7XG4gIGxpc3Q6IFJldXNlSXRlbVtdID0gW107XG4gIGl0ZW0/OiBSZXVzZUl0ZW07XG4gIHBvcyA9IDA7XG4gIGRpcjogRGlyZWN0aW9uID0gJ2x0cic7XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBASW5wdXQoKSBtb2RlOiBSZXVzZVRhYk1hdGNoTW9kZSA9IFJldXNlVGFiTWF0Y2hNb2RlLk1lbnU7XG4gIEBJbnB1dCgpIGkxOG4/OiBSZXVzZUNvbnRleHRJMThuO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZGVidWcgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgbWF4PzogbnVtYmVyO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSB0YWJNYXhXaWR0aD86IG51bWJlcjtcbiAgQElucHV0KCkgZXhjbHVkZXM/OiBSZWdFeHBbXTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGFsbG93Q2xvc2UgPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkga2VlcGluZ1Njcm9sbCA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc3RvcmFnZVN0YXRlID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIHNldCBrZWVwaW5nU2Nyb2xsQ29udGFpbmVyKHZhbHVlOiBzdHJpbmcgfCBFbGVtZW50KSB7XG4gICAgdGhpcy5fa2VlcGluZ1Njcm9sbENvbnRhaW5lciA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyB0aGlzLmRvYy5xdWVyeVNlbGVjdG9yKHZhbHVlKSA6IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpIGN1c3RvbUNvbnRleHRNZW51OiBSZXVzZUN1c3RvbUNvbnRleHRNZW51W10gPSBbXTtcbiAgQElucHV0KCkgdGFiQmFyRXh0cmFDb250ZW50PzogVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIHRhYkJhckd1dHRlcj86IG51bWJlcjtcbiAgQElucHV0KCkgdGFiQmFyU3R5bGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgdGFiVHlwZTogJ2xpbmUnIHwgJ2NhcmQnID0gJ2xpbmUnO1xuICBASW5wdXQoKSByb3V0ZVBhcmFtTWF0Y2hNb2RlOiBSZXVzZVRhYlJvdXRlUGFyYW1NYXRjaE1vZGUgPSAnc3RyaWN0JztcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIHRpdGxlUmVuZGVyPzogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IFJldXNlSXRlbSB9PjtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8UmV1c2VJdGVtPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPFJldXNlSXRlbSB8IG51bGw+KCk7XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc3J2OiBSZXVzZVRhYlNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChBTEFJTl9JMThOX1RPS0VOKSBwcml2YXRlIGkxOG5TcnY6IEFsYWluSTE4TlNlcnZpY2UsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IE56U2FmZUFueSxcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGRpcmVjdGlvbmFsaXR5OiBEaXJlY3Rpb25hbGl0eSxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KFJFVVNFX1RBQl9TVE9SQUdFX0tFWSkgcHJpdmF0ZSBzdGF0ZUtleTogc3RyaW5nLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoUkVVU0VfVEFCX1NUT1JBR0VfU1RBVEUpIHByaXZhdGUgc3RhdGVTcnY6IFJldXNlVGFiU3RvcmFnZVN0YXRlXG4gICkge31cblxuICBwcml2YXRlIGdlblRpdCh0aXRsZTogUmV1c2VUaXRsZSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRpdGxlLmkxOG4gJiYgdGhpcy5pMThuU3J2ID8gdGhpcy5pMThuU3J2LmZhbnlpKHRpdGxlLmkxOG4pIDogdGl0bGUudGV4dCE7XG4gIH1cblxuICBwcml2YXRlIGdldCBjdXJVcmwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5zcnYuZ2V0VXJsKHRoaXMucm91dGUuc25hcHNob3QpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5DdXJJdGVtKCk6IFJldXNlSXRlbSB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5jdXJVcmw7XG4gICAgY29uc3Qgc25hcHNob3RUcnVlID0gdGhpcy5zcnYuZ2V0VHJ1dGhSb3V0ZSh0aGlzLnJvdXRlLnNuYXBzaG90KTtcbiAgICByZXR1cm4ge1xuICAgICAgdXJsLFxuICAgICAgdGl0bGU6IHRoaXMuZ2VuVGl0KHRoaXMuc3J2LmdldFRpdGxlKHVybCwgc25hcHNob3RUcnVlKSksXG4gICAgICBjbG9zYWJsZTogdGhpcy5hbGxvd0Nsb3NlICYmIHRoaXMuc3J2LmNvdW50ID4gMCAmJiB0aGlzLnNydi5nZXRDbG9zYWJsZSh1cmwsIHNuYXBzaG90VHJ1ZSksXG4gICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgbGFzdDogZmFsc2UsXG4gICAgICBpbmRleDogMFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGdlbkxpc3Qobm90aWZ5OiBSZXVzZVRhYk5vdGlmeSB8IG51bGwpOiB2b2lkIHtcbiAgICBjb25zdCBscyA9IHRoaXMuc3J2Lml0ZW1zLm1hcChcbiAgICAgIChpdGVtOiBSZXVzZVRhYkNhY2hlZCwgaW5kZXg6IG51bWJlcikgPT5cbiAgICAgICAgKHtcbiAgICAgICAgICB1cmw6IGl0ZW0udXJsLFxuICAgICAgICAgIHRpdGxlOiB0aGlzLmdlblRpdChpdGVtLnRpdGxlKSxcbiAgICAgICAgICBjbG9zYWJsZTogdGhpcy5hbGxvd0Nsb3NlICYmIGl0ZW0uY2xvc2FibGUgJiYgdGhpcy5zcnYuY291bnQgPiAwLFxuICAgICAgICAgIHBvc2l0aW9uOiBpdGVtLnBvc2l0aW9uLFxuICAgICAgICAgIGluZGV4LFxuICAgICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgICAgbGFzdDogZmFsc2VcbiAgICAgICAgfSBhcyBSZXVzZUl0ZW0pXG4gICAgKTtcbiAgICAvLyBkZWJ1Z2dlcjtcblxuICAgIGNvbnN0IHVybCA9IHRoaXMuY3VyVXJsO1xuICAgIGxldCBhZGRDdXJyZW50ID0gbHMuZmluZEluZGV4KHcgPT4gdy51cmwgPT09IHVybCkgPT09IC0xO1xuICAgIGlmIChub3RpZnkgJiYgbm90aWZ5LmFjdGl2ZSA9PT0gJ2Nsb3NlJyAmJiBub3RpZnkudXJsID09PSB1cmwpIHtcbiAgICAgIGFkZEN1cnJlbnQgPSBmYWxzZTtcbiAgICAgIGxldCB0b1BvcyA9IDA7XG4gICAgICBjb25zdCBjdXJJdGVtID0gdGhpcy5saXN0LmZpbmQodyA9PiB3LnVybCA9PT0gdXJsKSE7XG4gICAgICBpZiAoY3VySXRlbS5pbmRleCA9PT0gbHMubGVuZ3RoKSB7XG4gICAgICAgIC8vIFdoZW4gY2xvc2VkIGlzIGxhc3RcbiAgICAgICAgdG9Qb3MgPSBscy5sZW5ndGggLSAxO1xuICAgICAgfSBlbHNlIGlmIChjdXJJdGVtLmluZGV4IDwgbHMubGVuZ3RoKSB7XG4gICAgICAgIC8vIFNob3VsZCBiZSBhY3RpdmVkIG5leHQgdGFiIHdoZW4gY2xvc2VkIGlzIG1pZGRsZVxuICAgICAgICB0b1BvcyA9IE1hdGgubWF4KDAsIGN1ckl0ZW0uaW5kZXgpO1xuICAgICAgfVxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChsc1t0b1Bvc10udXJsKTtcbiAgICB9XG5cbiAgICBpZiAoYWRkQ3VycmVudCkge1xuICAgICAgbHMuc3BsaWNlKHRoaXMucG9zICsgMSwgMCwgdGhpcy5nZW5DdXJJdGVtKCkpO1xuICAgIH1cblxuICAgIGxzLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiAoaXRlbS5pbmRleCA9IGluZGV4KSk7XG4gICAgaWYgKGxzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgbHNbMF0uY2xvc2FibGUgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5saXN0ID0gbHM7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHRoaXMudXBkYXRlUG9zKCk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVRpdGxlKHJlczogUmV1c2VUYWJOb3RpZnkpOiB2b2lkIHtcbiAgICBjb25zdCBpdGVtID0gdGhpcy5saXN0LmZpbmQodyA9PiB3LnVybCA9PT0gcmVzIS51cmwpO1xuICAgIGlmICghaXRlbSkgcmV0dXJuO1xuICAgIGl0ZW0udGl0bGUgPSB0aGlzLmdlblRpdChyZXMhLnRpdGxlISk7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSByZWZyZXNoKGl0ZW06IFJldXNlSXRlbSk6IHZvaWQge1xuICAgIHRoaXMuc3J2LnJ1bkhvb2soJ19vblJldXNlSW5pdCcsIHRoaXMucG9zID09PSBpdGVtLmluZGV4ID8gdGhpcy5zcnYuY29tcG9uZW50UmVmIDogaXRlbS5pbmRleCwgJ3JlZnJlc2gnKTtcbiAgfVxuXG4gIHByaXZhdGUgc2F2ZVN0YXRlKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5zcnYuaW5pdGVkIHx8ICF0aGlzLnN0b3JhZ2VTdGF0ZSkgcmV0dXJuO1xuXG4gICAgdGhpcy5zdGF0ZVNydi51cGRhdGUodGhpcy5zdGF0ZUtleSwgdGhpcy5saXN0KTtcbiAgfVxuXG4gIC8vICNyZWdpb24gVUlcblxuICBjb250ZXh0TWVudUNoYW5nZShyZXM6IFJldXNlQ29udGV4dENsb3NlRXZlbnQpOiB2b2lkIHtcbiAgICBsZXQgZm46ICgoKSA9PiB2b2lkKSB8IG51bGwgPSBudWxsO1xuICAgIHN3aXRjaCAocmVzLnR5cGUpIHtcbiAgICAgIGNhc2UgJ3JlZnJlc2gnOlxuICAgICAgICB0aGlzLnJlZnJlc2gocmVzLml0ZW0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2Nsb3NlJzpcbiAgICAgICAgdGhpcy5fY2xvc2UobnVsbCwgcmVzLml0ZW0uaW5kZXgsIHJlcy5pbmNsdWRlTm9uQ2xvc2VhYmxlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjbG9zZVJpZ2h0JzpcbiAgICAgICAgZm4gPSAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5zcnYuY2xvc2VSaWdodChyZXMuaXRlbS51cmwsIHJlcy5pbmNsdWRlTm9uQ2xvc2VhYmxlKTtcbiAgICAgICAgICB0aGlzLmNsb3NlLmVtaXQobnVsbCk7XG4gICAgICAgIH07XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY2xvc2VPdGhlcic6XG4gICAgICAgIGZuID0gKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc3J2LmNsZWFyKHJlcy5pbmNsdWRlTm9uQ2xvc2VhYmxlKTtcbiAgICAgICAgICB0aGlzLmNsb3NlLmVtaXQobnVsbCk7XG4gICAgICAgIH07XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZiAoIWZuKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghcmVzLml0ZW0uYWN0aXZlICYmIHJlcy5pdGVtLmluZGV4IDw9IHRoaXMubGlzdC5maW5kKHcgPT4gdy5hY3RpdmUpIS5pbmRleCkge1xuICAgICAgdGhpcy5fdG8ocmVzLml0ZW0uaW5kZXgsIGZuKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm4oKTtcbiAgICB9XG4gIH1cblxuICBfdG8oaW5kZXg6IG51bWJlciwgY2I/OiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgaW5kZXggPSBNYXRoLm1heCgwLCBNYXRoLm1pbihpbmRleCwgdGhpcy5saXN0Lmxlbmd0aCAtIDEpKTtcbiAgICBjb25zdCBpdGVtID0gdGhpcy5saXN0W2luZGV4XTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKGl0ZW0udXJsKS50aGVuKHJlcyA9PiB7XG4gICAgICBpZiAoIXJlcykgcmV0dXJuO1xuICAgICAgdGhpcy5pdGVtID0gaXRlbTtcbiAgICAgIHRoaXMuY2hhbmdlLmVtaXQoaXRlbSk7XG4gICAgICBpZiAoY2IpIHtcbiAgICAgICAgY2IoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIF9jbG9zZShlOiBFdmVudCB8IG51bGwsIGlkeDogbnVtYmVyLCBpbmNsdWRlTm9uQ2xvc2VhYmxlOiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgaWYgKGUgIT0gbnVsbCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gICAgY29uc3QgaXRlbSA9IHRoaXMubGlzdFtpZHhdO1xuICAgIHRoaXMuc3J2LmNsb3NlKGl0ZW0udXJsLCBpbmNsdWRlTm9uQ2xvc2VhYmxlKTtcbiAgICB0aGlzLmNsb3NlLmVtaXQoaXRlbSk7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGFjdGl2YXRlKGluc3RhbmNlOiBOelNhZmVBbnkpOiB2b2lkIHtcbiAgICB0aGlzLnNydi5jb21wb25lbnRSZWYgPSB7IGluc3RhbmNlIH07XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVBvcygpOiB2b2lkIHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLnNydi5nZXRVcmwodGhpcy5yb3V0ZS5zbmFwc2hvdCk7XG4gICAgY29uc3QgbHMgPSB0aGlzLmxpc3QuZmlsdGVyKHcgPT4gdy51cmwgPT09IHVybCB8fCAhdGhpcy5zcnYuaXNFeGNsdWRlKHcudXJsKSk7XG4gICAgaWYgKGxzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGxhc3QgPSBsc1tscy5sZW5ndGggLSAxXTtcbiAgICBjb25zdCBpdGVtID0gbHMuZmluZCh3ID0+IHcudXJsID09PSB1cmwpO1xuICAgIGxhc3QubGFzdCA9IHRydWU7XG4gICAgY29uc3QgcG9zID0gaXRlbSA9PSBudWxsID8gbGFzdC5pbmRleCA6IGl0ZW0uaW5kZXg7XG4gICAgbHMuZm9yRWFjaCgoaSwgaWR4KSA9PiAoaS5hY3RpdmUgPSBwb3MgPT09IGlkeCkpO1xuICAgIHRoaXMucG9zID0gcG9zO1xuICAgIC8vIFRPRE86IOebruWJjeaXoOazleefpemBk+S4uuS7gOS5iCBgcG9zYCDml6Dms5XpgJrov4cgYG56U2VsZWN0ZWRJbmRleGAg55Sf5pWI77yM5Zug5q2k5by65Yi25L2/55So57uE5Lu25a6e5L6L55qE5pa55byP5p2l5L+u5pS577yM6L+Z56eN5pa55byP5piv5a6J5YWo55qEXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL25nLWFsYWluL25nLWFsYWluL2lzc3Vlcy8xNzM2XG4gICAgdGhpcy50YWJzZXQubnpTZWxlY3RlZEluZGV4ID0gcG9zO1xuICAgIHRoaXMubGlzdCA9IGxzO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB0aGlzLnNhdmVTdGF0ZSgpO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZGlyID0gdGhpcy5kaXJlY3Rpb25hbGl0eS52YWx1ZTtcbiAgICB0aGlzLmRpcmVjdGlvbmFsaXR5LmNoYW5nZT8ucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoZGlyZWN0aW9uOiBEaXJlY3Rpb24pID0+IHtcbiAgICAgIHRoaXMuZGlyID0gZGlyZWN0aW9uO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuXG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc3J2LmNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICBzd2l0Y2ggKHJlcz8uYWN0aXZlKSB7XG4gICAgICAgIGNhc2UgJ3RpdGxlJzpcbiAgICAgICAgICB0aGlzLnVwZGF0ZVRpdGxlKHJlcyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjYXNlICdvdmVycmlkZSc6XG4gICAgICAgICAgaWYgKHJlcz8ubGlzdD8ubGVuZ3RoID09PSB0aGlzLmxpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVBvcygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHRoaXMuZ2VuTGlzdChyZXMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5pMThuU3J2LmNoYW5nZVxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcigoKSA9PiB0aGlzLnNydi5pbml0ZWQpLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXG4gICAgICAgIGRlYm91bmNlVGltZSgxMDApXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuZ2VuTGlzdCh7IGFjdGl2ZTogJ3RpdGxlJyB9KSk7XG5cbiAgICB0aGlzLnNydi5pbml0KCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtQIGluIGtleW9mIHRoaXNdPzogU2ltcGxlQ2hhbmdlIH0gJiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzLm1heCkgdGhpcy5zcnYubWF4ID0gdGhpcy5tYXghO1xuICAgIGlmIChjaGFuZ2VzLmV4Y2x1ZGVzKSB0aGlzLnNydi5leGNsdWRlcyA9IHRoaXMuZXhjbHVkZXMhO1xuICAgIGlmIChjaGFuZ2VzLm1vZGUpIHRoaXMuc3J2Lm1vZGUgPSB0aGlzLm1vZGU7XG4gICAgaWYgKGNoYW5nZXMucm91dGVQYXJhbU1hdGNoTW9kZSkgdGhpcy5zcnYucm91dGVQYXJhbU1hdGNoTW9kZSA9IHRoaXMucm91dGVQYXJhbU1hdGNoTW9kZTtcbiAgICBpZiAoY2hhbmdlcy5rZWVwaW5nU2Nyb2xsKSB7XG4gICAgICB0aGlzLnNydi5rZWVwaW5nU2Nyb2xsID0gdGhpcy5rZWVwaW5nU2Nyb2xsO1xuICAgICAgdGhpcy5zcnYua2VlcGluZ1Njcm9sbENvbnRhaW5lciA9IHRoaXMuX2tlZXBpbmdTY3JvbGxDb250YWluZXI7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLnN0b3JhZ2VTdGF0ZSkgdGhpcy5zcnYuc3RvcmFnZVN0YXRlID0gdGhpcy5zdG9yYWdlU3RhdGU7XG5cbiAgICB0aGlzLnNydi5kZWJ1ZyA9IHRoaXMuZGVidWc7XG5cbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBjb25zdCB7IGRlc3Ryb3kkIH0gPSB0aGlzO1xuICAgIGRlc3Ryb3kkLm5leHQoKTtcbiAgICBkZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG59XG4iLCI8bnotdGFic2V0XG4gICN0YWJzZXRcbiAgW256U2VsZWN0ZWRJbmRleF09XCJwb3NcIlxuICBbbnpBbmltYXRlZF09XCJmYWxzZVwiXG4gIFtuelR5cGVdPVwidGFiVHlwZVwiXG4gIFtuelRhYkJhckV4dHJhQ29udGVudF09XCJ0YWJCYXJFeHRyYUNvbnRlbnRcIlxuICBbbnpUYWJCYXJHdXR0ZXJdPVwidGFiQmFyR3V0dGVyXCJcbiAgW256VGFiQmFyU3R5bGVdPVwidGFiQmFyU3R5bGVcIlxuPlxuICA8bnotdGFiICpuZ0Zvcj1cImxldCBpIG9mIGxpc3Q7IGxldCBpbmRleCA9IGluZGV4XCIgW256VGl0bGVdPVwidGl0bGVUZW1wbGF0ZVwiIChuekNsaWNrKT1cIl90byhpbmRleClcIj5cbiAgICA8bmctdGVtcGxhdGUgI3RpdGxlVGVtcGxhdGU+XG4gICAgICA8ZGl2XG4gICAgICAgIFtyZXVzZS10YWItY29udGV4dC1tZW51XT1cImlcIlxuICAgICAgICBbY3VzdG9tQ29udGV4dE1lbnVdPVwiY3VzdG9tQ29udGV4dE1lbnVcIlxuICAgICAgICBjbGFzcz1cInJldXNlLXRhYl9fbmFtZVwiXG4gICAgICAgIFthdHRyLnRpdGxlXT1cImkudGl0bGVcIlxuICAgICAgPlxuICAgICAgICA8c3BhbiBbY2xhc3MucmV1c2UtdGFiX19uYW1lLXdpZHRoXT1cInRhYk1heFdpZHRoXCIgW3N0eWxlLm1heC13aWR0aC5weF09XCJ0YWJNYXhXaWR0aFwiPlxuICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICpuZ0lmPVwidGl0bGVSZW5kZXI7IGVsc2UgZGVmYXVsdFRpdGxlXCJcbiAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRpdGxlUmVuZGVyXCJcbiAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogaSB9XCJcbiAgICAgICAgICA+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPG5nLXRlbXBsYXRlICNkZWZhdWx0VGl0bGU+e3sgaS50aXRsZSB9fTwvbmctdGVtcGxhdGU+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGkgKm5nSWY9XCJpLmNsb3NhYmxlXCIgbnotaWNvbiBuelR5cGU9XCJjbG9zZVwiIGNsYXNzPVwicmV1c2UtdGFiX19vcFwiIChjbGljayk9XCJfY2xvc2UoJGV2ZW50LCBpbmRleCwgZmFsc2UpXCI+PC9pPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIDwvbnotdGFiPlxuPC9uei10YWJzZXQ+XG48cmV1c2UtdGFiLWNvbnRleHQgW2kxOG5dPVwiaTE4blwiIChjaGFuZ2UpPVwiY29udGV4dE1lbnVDaGFuZ2UoJGV2ZW50KVwiPjwvcmV1c2UtdGFiLWNvbnRleHQ+XG4iXX0=