import { __decorate } from "tslib";
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, Optional, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, filter, takeUntil } from 'rxjs/operators';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { InputBoolean, InputNumber } from '@delon/util/decorator';
import { ReuseTabContextService } from './reuse-tab-context.service';
import { ReuseTabMatchMode } from './reuse-tab.interfaces';
import * as i0 from "@angular/core";
import * as i1 from "./reuse-tab.service";
import * as i2 from "@angular/router";
import * as i3 from "@angular/cdk/platform";
import * as i4 from "ng-zorro-antd/tabs";
import * as i5 from "./reuse-tab-context.component";
import * as i6 from "@angular/common";
import * as i7 from "./reuse-tab-context.directive";
import * as i8 from "ng-zorro-antd/icon";
export class ReuseTabComponent {
    // #endregion
    constructor(srv, cdr, router, route, i18nSrv, doc, platform) {
        this.srv = srv;
        this.cdr = cdr;
        this.router = router;
        this.route = route;
        this.i18nSrv = i18nSrv;
        this.doc = doc;
        this.platform = platform;
        this.destroy$ = new Subject();
        this.list = [];
        this.pos = 0;
        // #region fields
        this.mode = ReuseTabMatchMode.Menu;
        this.debug = false;
        this.allowClose = true;
        this.keepingScroll = false;
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
    }
    // #endregion
    ngOnInit() {
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
        this.srv.debug = this.debug;
        this.cdr.detectChanges();
    }
    ngOnDestroy() {
        const { destroy$ } = this;
        destroy$.next();
        destroy$.complete();
    }
}
ReuseTabComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: ReuseTabComponent, deps: [{ token: i1.ReuseTabService }, { token: i0.ChangeDetectorRef }, { token: i2.Router }, { token: i2.ActivatedRoute }, { token: ALAIN_I18N_TOKEN, optional: true }, { token: DOCUMENT }, { token: i3.Platform }], target: i0.ɵɵFactoryTarget.Component });
ReuseTabComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: ReuseTabComponent, selector: "reuse-tab, [reuse-tab]", inputs: { mode: "mode", i18n: "i18n", debug: "debug", max: "max", tabMaxWidth: "tabMaxWidth", excludes: "excludes", allowClose: "allowClose", keepingScroll: "keepingScroll", keepingScrollContainer: "keepingScrollContainer", customContextMenu: "customContextMenu", tabBarExtraContent: "tabBarExtraContent", tabBarGutter: "tabBarGutter", tabBarStyle: "tabBarStyle", tabType: "tabType", routeParamMatchMode: "routeParamMatchMode", disabled: "disabled", titleRender: "titleRender" }, outputs: { change: "change", close: "close" }, host: { properties: { "class.reuse-tab": "true", "class.reuse-tab__line": "tabType === 'line'", "class.reuse-tab__card": "tabType === 'card'", "class.reuse-tab__disabled": "disabled" } }, providers: [ReuseTabContextService], viewQueries: [{ propertyName: "tabset", first: true, predicate: ["tabset"], descendants: true }], exportAs: ["reuseTab"], usesOnChanges: true, ngImport: i0, template: "<nz-tabset\n  #tabset\n  [nzSelectedIndex]=\"pos\"\n  [nzAnimated]=\"false\"\n  [nzType]=\"tabType\"\n  [nzTabBarExtraContent]=\"tabBarExtraContent\"\n  [nzTabBarGutter]=\"tabBarGutter\"\n  [nzTabBarStyle]=\"tabBarStyle\"\n>\n  <nz-tab *ngFor=\"let i of list; let index = index\" [nzTitle]=\"titleTemplate\" (nzClick)=\"_to(index)\">\n    <ng-template #titleTemplate>\n      <div\n        [reuse-tab-context-menu]=\"i\"\n        [customContextMenu]=\"customContextMenu\"\n        class=\"reuse-tab__name\"\n        [attr.title]=\"i.title\"\n      >\n        <span [class.reuse-tab__name-width]=\"tabMaxWidth\" [style.max-width.px]=\"tabMaxWidth\">\n          <ng-container\n            *ngIf=\"titleRender; else defaultTitle\"\n            [ngTemplateOutlet]=\"titleRender\"\n            [ngTemplateOutletContext]=\"{ $implicit: i }\"\n          ></ng-container>\n          <ng-template #defaultTitle>{{ i.title }}</ng-template>\n        </span>\n      </div>\n      <i *ngIf=\"i.closable\" nz-icon nzType=\"close\" class=\"reuse-tab__op\" (click)=\"_close($event, index, false)\"></i>\n    </ng-template>\n  </nz-tab>\n</nz-tabset>\n<reuse-tab-context [i18n]=\"i18n\" (change)=\"contextMenuChange($event)\"></reuse-tab-context>\n", components: [{ type: i4.NzTabSetComponent, selector: "nz-tabset", inputs: ["nzSelectedIndex", "nzTabPosition", "nzTabBarExtraContent", "nzCanDeactivate", "nzAddIcon", "nzTabBarStyle", "nzType", "nzSize", "nzAnimated", "nzTabBarGutter", "nzHideAdd", "nzCentered", "nzHideAll", "nzLinkRouter", "nzLinkExact"], outputs: ["nzSelectChange", "nzSelectedIndexChange", "nzTabListScroll", "nzClose", "nzAdd"], exportAs: ["nzTabset"] }, { type: i4.NzTabComponent, selector: "nz-tab", inputs: ["nzTitle", "nzClosable", "nzCloseIcon", "nzDisabled", "nzForceRender"], outputs: ["nzSelect", "nzDeselect", "nzClick", "nzContextmenu"], exportAs: ["nzTab"] }, { type: i5.ReuseTabContextComponent, selector: "reuse-tab-context", inputs: ["i18n"], outputs: ["change"] }], directives: [{ type: i6.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i7.ReuseTabContextDirective, selector: "[reuse-tab-context-menu]", inputs: ["reuse-tab-context-menu", "customContextMenu"], exportAs: ["reuseTabContextMenu"] }, { type: i6.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i6.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }, { type: i8.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
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
], ReuseTabComponent.prototype, "disabled", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: ReuseTabComponent, decorators: [{
            type: Component,
            args: [{ selector: 'reuse-tab, [reuse-tab]', exportAs: 'reuseTab', host: {
                        '[class.reuse-tab]': 'true',
                        '[class.reuse-tab__line]': `tabType === 'line'`,
                        '[class.reuse-tab__card]': `tabType === 'card'`,
                        '[class.reuse-tab__disabled]': `disabled`
                    }, providers: [ReuseTabContextService], preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<nz-tabset\n  #tabset\n  [nzSelectedIndex]=\"pos\"\n  [nzAnimated]=\"false\"\n  [nzType]=\"tabType\"\n  [nzTabBarExtraContent]=\"tabBarExtraContent\"\n  [nzTabBarGutter]=\"tabBarGutter\"\n  [nzTabBarStyle]=\"tabBarStyle\"\n>\n  <nz-tab *ngFor=\"let i of list; let index = index\" [nzTitle]=\"titleTemplate\" (nzClick)=\"_to(index)\">\n    <ng-template #titleTemplate>\n      <div\n        [reuse-tab-context-menu]=\"i\"\n        [customContextMenu]=\"customContextMenu\"\n        class=\"reuse-tab__name\"\n        [attr.title]=\"i.title\"\n      >\n        <span [class.reuse-tab__name-width]=\"tabMaxWidth\" [style.max-width.px]=\"tabMaxWidth\">\n          <ng-container\n            *ngIf=\"titleRender; else defaultTitle\"\n            [ngTemplateOutlet]=\"titleRender\"\n            [ngTemplateOutletContext]=\"{ $implicit: i }\"\n          ></ng-container>\n          <ng-template #defaultTitle>{{ i.title }}</ng-template>\n        </span>\n      </div>\n      <i *ngIf=\"i.closable\" nz-icon nzType=\"close\" class=\"reuse-tab__op\" (click)=\"_close($event, index, false)\"></i>\n    </ng-template>\n  </nz-tab>\n</nz-tabset>\n<reuse-tab-context [i18n]=\"i18n\" (change)=\"contextMenuChange($event)\"></reuse-tab-context>\n" }]
        }], ctorParameters: function () { return [{ type: i1.ReuseTabService }, { type: i0.ChangeDetectorRef }, { type: i2.Router }, { type: i2.ActivatedRoute }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [ALAIN_I18N_TOKEN]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: i3.Platform }]; }, propDecorators: { tabset: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2UtdGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9yZXVzZS10YWIvcmV1c2UtdGFiLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9yZXVzZS10YWIvcmV1c2UtdGFiLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUNMLHVCQUF1QixFQUV2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBSUwsUUFBUSxFQUNSLE1BQU0sRUFJTixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFakUsT0FBTyxFQUFvQixnQkFBZ0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNsRSxPQUFPLEVBQWdCLFlBQVksRUFBRSxXQUFXLEVBQWUsTUFBTSx1QkFBdUIsQ0FBQztBQUk3RixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNyRSxPQUFPLEVBTUwsaUJBQWlCLEVBSWxCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7QUFrQmhDLE1BQU0sT0FBTyxpQkFBaUI7SUF3QzVCLGFBQWE7SUFFYixZQUNVLEdBQW9CLEVBQ3BCLEdBQXNCLEVBQ3RCLE1BQWMsRUFDZCxLQUFxQixFQUNpQixPQUF5QixFQUM3QyxHQUFjLEVBQ2hDLFFBQWtCO1FBTmxCLFFBQUcsR0FBSCxHQUFHLENBQWlCO1FBQ3BCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3RCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNpQixZQUFPLEdBQVAsT0FBTyxDQUFrQjtRQUM3QyxRQUFHLEdBQUgsR0FBRyxDQUFXO1FBQ2hDLGFBQVEsR0FBUixRQUFRLENBQVU7UUF4Q3BCLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBRXZDLFNBQUksR0FBZ0IsRUFBRSxDQUFDO1FBRXZCLFFBQUcsR0FBRyxDQUFDLENBQUM7UUFFUixpQkFBaUI7UUFFUixTQUFJLEdBQXNCLGlCQUFpQixDQUFDLElBQUksQ0FBQztRQUVqQyxVQUFLLEdBQUcsS0FBSyxDQUFDO1FBSWQsZUFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUt0QyxzQkFBaUIsR0FBNkIsRUFBRSxDQUFDO1FBR2pELGdCQUFXLEdBQXFDLElBQUksQ0FBQztRQUNyRCxZQUFPLEdBQW9CLE1BQU0sQ0FBQztRQUNsQyx3QkFBbUIsR0FBZ0MsUUFBUSxDQUFDO1FBQzVDLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFdkIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFhLENBQUM7UUFDdkMsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFvQixDQUFDO0lBWTdELENBQUM7SUF6QkosSUFDSSxzQkFBc0IsQ0FBQyxLQUF1QjtRQUNoRCxJQUFJLENBQUMsdUJBQXVCLEdBQUcsT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ25HLENBQUM7SUF3Qk8sTUFBTSxDQUFDLEtBQWlCO1FBQzlCLE9BQU8sS0FBSyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFLLENBQUM7SUFDbkYsQ0FBQztJQUVELElBQVksTUFBTTtRQUNoQixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVPLFVBQVU7UUFDaEIsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN4QixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2pFLE9BQU87WUFDTCxHQUFHO1lBQ0gsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLFlBQVksQ0FBQyxDQUFDO1lBQ3hELFFBQVEsRUFBRSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsWUFBWSxDQUFDO1lBQzFGLE1BQU0sRUFBRSxLQUFLO1lBQ2IsSUFBSSxFQUFFLEtBQUs7WUFDWCxLQUFLLEVBQUUsQ0FBQztTQUNULENBQUM7SUFDSixDQUFDO0lBRU8sT0FBTyxDQUFDLE1BQTZCO1FBQzNDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FDM0IsQ0FBQyxJQUFvQixFQUFFLEtBQWEsRUFBRSxFQUFFLENBQ3RDLENBQUM7WUFDQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUc7WUFDYixLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQzlCLFFBQVEsRUFBRSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQztZQUNoRSxLQUFLO1lBQ0wsTUFBTSxFQUFFLEtBQUs7WUFDYixJQUFJLEVBQUUsS0FBSztTQUNFLENBQUEsQ0FDbEIsQ0FBQztRQUNGLFlBQVk7UUFFWixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3hCLElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3pELElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssT0FBTyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEtBQUssR0FBRyxFQUFFO1lBQzdELFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDbkIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQ2QsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBRSxDQUFDO1lBQ3BELElBQUksT0FBTyxDQUFDLEtBQUssS0FBSyxFQUFFLENBQUMsTUFBTSxFQUFFO2dCQUMvQixzQkFBc0I7Z0JBQ3RCLEtBQUssR0FBRyxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzthQUN2QjtpQkFBTSxJQUFJLE9BQU8sQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLE1BQU0sRUFBRTtnQkFDcEMsbURBQW1EO2dCQUNuRCxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3BDO1lBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzFDO1FBRUQsSUFBSSxVQUFVLEVBQUU7WUFDZCxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztTQUMvQztRQUVELEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNsRCxJQUFJLEVBQUUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ25CLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1NBQ3hCO1FBQ0QsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRU8sV0FBVyxDQUFDLEdBQW1CO1FBQ3JDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ2xCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFJLENBQUMsS0FBTSxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRU8sT0FBTyxDQUFDLElBQWU7UUFDN0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDNUcsQ0FBQztJQUVELGFBQWE7SUFFYixpQkFBaUIsQ0FBQyxHQUEyQjtRQUMzQyxJQUFJLEVBQUUsR0FBd0IsSUFBSSxDQUFDO1FBQ25DLFFBQVEsR0FBRyxDQUFDLElBQUksRUFBRTtZQUNoQixLQUFLLFNBQVM7Z0JBQ1osSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3ZCLE1BQU07WUFDUixLQUFLLE9BQU87Z0JBQ1YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7Z0JBQzNELE1BQU07WUFDUixLQUFLLFlBQVk7Z0JBQ2YsRUFBRSxHQUFHLEdBQUcsRUFBRTtvQkFDUixJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztvQkFDM0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3hCLENBQUMsQ0FBQztnQkFDRixNQUFNO1lBQ1IsS0FBSyxZQUFZO2dCQUNmLEVBQUUsR0FBRyxHQUFHLEVBQUU7b0JBQ1IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7b0JBQ3hDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN4QixDQUFDLENBQUM7Z0JBQ0YsTUFBTTtTQUNUO1FBQ0QsSUFBSSxDQUFDLEVBQUUsRUFBRTtZQUNQLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUUsQ0FBQyxLQUFLLEVBQUU7WUFDOUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztTQUM5QjthQUFNO1lBQ0wsRUFBRSxFQUFFLENBQUM7U0FDTjtJQUNILENBQUM7SUFFRCxHQUFHLENBQUMsS0FBYSxFQUFFLEVBQWU7UUFDaEMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0QsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzdDLElBQUksQ0FBQyxHQUFHO2dCQUFFLE9BQU87WUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkIsSUFBSSxFQUFFLEVBQUU7Z0JBQ04sRUFBRSxFQUFFLENBQUM7YUFDTjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELE1BQU0sQ0FBQyxDQUFlLEVBQUUsR0FBVyxFQUFFLG1CQUE0QjtRQUMvRCxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUU7WUFDYixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDbkIsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3JCO1FBQ0QsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLG1CQUFtQixDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN6QixPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRCxRQUFRLENBQUMsUUFBbUI7UUFDMUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEdBQUcsRUFBRSxRQUFRLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBRU8sU0FBUztRQUNmLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDakQsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzlFLElBQUksRUFBRSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDbkIsT0FBTztTQUNSO1FBRUQsTUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDL0IsTUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsTUFBTSxHQUFHLEdBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNuRCxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsNEVBQTRFO1FBQzVFLG1EQUFtRDtRQUNuRCxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsR0FBRyxHQUFHLENBQUM7UUFDbEMsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxhQUFhO0lBRWIsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUM1QixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUM3RCxRQUFRLEdBQUcsRUFBRSxNQUFNLEVBQUU7Z0JBQ25CLEtBQUssT0FBTztvQkFDVixJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUN0QixPQUFPO2dCQUNULEtBQUssVUFBVTtvQkFDYixJQUFJLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO3dCQUMxQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7d0JBQ2pCLE9BQU87cUJBQ1I7b0JBQ0QsTUFBTTthQUNUO1lBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTTthQUNoQixJQUFJLENBQ0gsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQzdCLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQ3hCLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FDbEI7YUFDQSxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFdEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQTZEO1FBQ3ZFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUM1QixPQUFPO1NBQ1I7UUFFRCxJQUFJLE9BQU8sQ0FBQyxHQUFHO1lBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUksQ0FBQztRQUMxQyxJQUFJLE9BQU8sQ0FBQyxRQUFRO1lBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVMsQ0FBQztRQUN6RCxJQUFJLE9BQU8sQ0FBQyxJQUFJO1lBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUM1QyxJQUFJLE9BQU8sQ0FBQyxtQkFBbUI7WUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztRQUN6RixJQUFJLE9BQU8sQ0FBQyxhQUFhLEVBQUU7WUFDekIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUM1QyxJQUFJLENBQUMsR0FBRyxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQztTQUNoRTtRQUVELElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFFNUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsV0FBVztRQUNULE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDMUIsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2hCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs4R0ExUVUsaUJBQWlCLHNJQStDTixnQkFBZ0IsNkJBQzVCLFFBQVE7a0dBaERQLGlCQUFpQiw0dkJBTGpCLENBQUMsc0JBQXNCLENBQUMseUtDckRyQyxndENBK0JBO0FEOEMyQjtJQUFmLFlBQVksRUFBRTtnREFBZTtBQUNmO0lBQWQsV0FBVyxFQUFFOzhDQUFjO0FBQ2I7SUFBZCxXQUFXLEVBQUU7c0RBQXNCO0FBRXBCO0lBQWYsWUFBWSxFQUFFO3FEQUFtQjtBQUNsQjtJQUFmLFlBQVksRUFBRTt3REFBdUI7QUFXdEI7SUFBZixZQUFZLEVBQUU7bURBQWtCOzJGQW5DL0IsaUJBQWlCO2tCQWY3QixTQUFTOytCQUNFLHdCQUF3QixZQUN4QixVQUFVLFFBRWQ7d0JBQ0osbUJBQW1CLEVBQUUsTUFBTTt3QkFDM0IseUJBQXlCLEVBQUUsb0JBQW9CO3dCQUMvQyx5QkFBeUIsRUFBRSxvQkFBb0I7d0JBQy9DLDZCQUE2QixFQUFFLFVBQVU7cUJBQzFDLGFBQ1UsQ0FBQyxzQkFBc0IsQ0FBQyx1QkFDZCxLQUFLLG1CQUNULHVCQUF1QixDQUFDLE1BQU0saUJBQ2hDLGlCQUFpQixDQUFDLElBQUk7OzBCQWlEbEMsUUFBUTs7MEJBQUksTUFBTTsyQkFBQyxnQkFBZ0I7OzBCQUNuQyxNQUFNOzJCQUFDLFFBQVE7bUVBeENXLE1BQU07c0JBQWxDLFNBQVM7dUJBQUMsUUFBUTtnQkFTVixJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNtQixLQUFLO3NCQUE3QixLQUFLO2dCQUNrQixHQUFHO3NCQUExQixLQUFLO2dCQUNrQixXQUFXO3NCQUFsQyxLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ21CLFVBQVU7c0JBQWxDLEtBQUs7Z0JBQ21CLGFBQWE7c0JBQXJDLEtBQUs7Z0JBRUYsc0JBQXNCO3NCQUR6QixLQUFLO2dCQUlHLGlCQUFpQjtzQkFBekIsS0FBSztnQkFDRyxrQkFBa0I7c0JBQTFCLEtBQUs7Z0JBQ0csWUFBWTtzQkFBcEIsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUNHLE9BQU87c0JBQWYsS0FBSztnQkFDRyxtQkFBbUI7c0JBQTNCLEtBQUs7Z0JBQ21CLFFBQVE7c0JBQWhDLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFDYSxNQUFNO3NCQUF4QixNQUFNO2dCQUNZLEtBQUs7c0JBQXZCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2UsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGZpbHRlciwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBBbGFpbkkxOE5TZXJ2aWNlLCBBTEFJTl9JMThOX1RPS0VOIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciwgTnVtYmVySW5wdXQgfSBmcm9tICdAZGVsb24vdXRpbC9kZWNvcmF0b3InO1xuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgTnpUYWJTZXRDb21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL3RhYnMnO1xuXG5pbXBvcnQgeyBSZXVzZVRhYkNvbnRleHRTZXJ2aWNlIH0gZnJvbSAnLi9yZXVzZS10YWItY29udGV4dC5zZXJ2aWNlJztcbmltcG9ydCB7XG4gIFJldXNlQ29udGV4dENsb3NlRXZlbnQsXG4gIFJldXNlQ29udGV4dEkxOG4sXG4gIFJldXNlQ3VzdG9tQ29udGV4dE1lbnUsXG4gIFJldXNlSXRlbSxcbiAgUmV1c2VUYWJDYWNoZWQsXG4gIFJldXNlVGFiTWF0Y2hNb2RlLFxuICBSZXVzZVRhYk5vdGlmeSxcbiAgUmV1c2VUYWJSb3V0ZVBhcmFtTWF0Y2hNb2RlLFxuICBSZXVzZVRpdGxlXG59IGZyb20gJy4vcmV1c2UtdGFiLmludGVyZmFjZXMnO1xuaW1wb3J0IHsgUmV1c2VUYWJTZXJ2aWNlIH0gZnJvbSAnLi9yZXVzZS10YWIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3JldXNlLXRhYiwgW3JldXNlLXRhYl0nLFxuICBleHBvcnRBczogJ3JldXNlVGFiJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JldXNlLXRhYi5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLnJldXNlLXRhYl0nOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy5yZXVzZS10YWJfX2xpbmVdJzogYHRhYlR5cGUgPT09ICdsaW5lJ2AsXG4gICAgJ1tjbGFzcy5yZXVzZS10YWJfX2NhcmRdJzogYHRhYlR5cGUgPT09ICdjYXJkJ2AsXG4gICAgJ1tjbGFzcy5yZXVzZS10YWJfX2Rpc2FibGVkXSc6IGBkaXNhYmxlZGBcbiAgfSxcbiAgcHJvdmlkZXJzOiBbUmV1c2VUYWJDb250ZXh0U2VydmljZV0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBSZXVzZVRhYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZGVidWc6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX21heDogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV90YWJNYXhXaWR0aDogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9hbGxvd0Nsb3NlOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9rZWVwaW5nU2Nyb2xsOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9kaXNhYmxlZDogQm9vbGVhbklucHV0O1xuXG4gIEBWaWV3Q2hpbGQoJ3RhYnNldCcpIHByaXZhdGUgdGFic2V0ITogTnpUYWJTZXRDb21wb25lbnQ7XG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIF9rZWVwaW5nU2Nyb2xsQ29udGFpbmVyPzogRWxlbWVudDtcbiAgbGlzdDogUmV1c2VJdGVtW10gPSBbXTtcbiAgaXRlbT86IFJldXNlSXRlbTtcbiAgcG9zID0gMDtcblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIEBJbnB1dCgpIG1vZGU6IFJldXNlVGFiTWF0Y2hNb2RlID0gUmV1c2VUYWJNYXRjaE1vZGUuTWVudTtcbiAgQElucHV0KCkgaTE4bj86IFJldXNlQ29udGV4dEkxOG47XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkZWJ1ZyA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBtYXg/OiBudW1iZXI7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHRhYk1heFdpZHRoPzogbnVtYmVyO1xuICBASW5wdXQoKSBleGNsdWRlcz86IFJlZ0V4cFtdO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYWxsb3dDbG9zZSA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBrZWVwaW5nU2Nyb2xsID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIHNldCBrZWVwaW5nU2Nyb2xsQ29udGFpbmVyKHZhbHVlOiBzdHJpbmcgfCBFbGVtZW50KSB7XG4gICAgdGhpcy5fa2VlcGluZ1Njcm9sbENvbnRhaW5lciA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyB0aGlzLmRvYy5xdWVyeVNlbGVjdG9yKHZhbHVlKSA6IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpIGN1c3RvbUNvbnRleHRNZW51OiBSZXVzZUN1c3RvbUNvbnRleHRNZW51W10gPSBbXTtcbiAgQElucHV0KCkgdGFiQmFyRXh0cmFDb250ZW50PzogVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIHRhYkJhckd1dHRlcj86IG51bWJlcjtcbiAgQElucHV0KCkgdGFiQmFyU3R5bGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgdGFiVHlwZTogJ2xpbmUnIHwgJ2NhcmQnID0gJ2xpbmUnO1xuICBASW5wdXQoKSByb3V0ZVBhcmFtTWF0Y2hNb2RlOiBSZXVzZVRhYlJvdXRlUGFyYW1NYXRjaE1vZGUgPSAnc3RyaWN0JztcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIHRpdGxlUmVuZGVyPzogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IFJldXNlSXRlbSB9PjtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8UmV1c2VJdGVtPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPFJldXNlSXRlbSB8IG51bGw+KCk7XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc3J2OiBSZXVzZVRhYlNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChBTEFJTl9JMThOX1RPS0VOKSBwcml2YXRlIGkxOG5TcnY6IEFsYWluSTE4TlNlcnZpY2UsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IE56U2FmZUFueSxcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybVxuICApIHt9XG5cbiAgcHJpdmF0ZSBnZW5UaXQodGl0bGU6IFJldXNlVGl0bGUpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aXRsZS5pMThuICYmIHRoaXMuaTE4blNydiA/IHRoaXMuaTE4blNydi5mYW55aSh0aXRsZS5pMThuKSA6IHRpdGxlLnRleHQhO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgY3VyVXJsKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuc3J2LmdldFVybCh0aGlzLnJvdXRlLnNuYXBzaG90KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuQ3VySXRlbSgpOiBSZXVzZUl0ZW0ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuY3VyVXJsO1xuICAgIGNvbnN0IHNuYXBzaG90VHJ1ZSA9IHRoaXMuc3J2LmdldFRydXRoUm91dGUodGhpcy5yb3V0ZS5zbmFwc2hvdCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVybCxcbiAgICAgIHRpdGxlOiB0aGlzLmdlblRpdCh0aGlzLnNydi5nZXRUaXRsZSh1cmwsIHNuYXBzaG90VHJ1ZSkpLFxuICAgICAgY2xvc2FibGU6IHRoaXMuYWxsb3dDbG9zZSAmJiB0aGlzLnNydi5jb3VudCA+IDAgJiYgdGhpcy5zcnYuZ2V0Q2xvc2FibGUodXJsLCBzbmFwc2hvdFRydWUpLFxuICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgIGxhc3Q6IGZhbHNlLFxuICAgICAgaW5kZXg6IDBcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5MaXN0KG5vdGlmeTogUmV1c2VUYWJOb3RpZnkgfCBudWxsKTogdm9pZCB7XG4gICAgY29uc3QgbHMgPSB0aGlzLnNydi5pdGVtcy5tYXAoXG4gICAgICAoaXRlbTogUmV1c2VUYWJDYWNoZWQsIGluZGV4OiBudW1iZXIpID0+XG4gICAgICAgICh7XG4gICAgICAgICAgdXJsOiBpdGVtLnVybCxcbiAgICAgICAgICB0aXRsZTogdGhpcy5nZW5UaXQoaXRlbS50aXRsZSksXG4gICAgICAgICAgY2xvc2FibGU6IHRoaXMuYWxsb3dDbG9zZSAmJiBpdGVtLmNsb3NhYmxlICYmIHRoaXMuc3J2LmNvdW50ID4gMCxcbiAgICAgICAgICBpbmRleCxcbiAgICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICAgIGxhc3Q6IGZhbHNlXG4gICAgICAgIH0gYXMgUmV1c2VJdGVtKVxuICAgICk7XG4gICAgLy8gZGVidWdnZXI7XG5cbiAgICBjb25zdCB1cmwgPSB0aGlzLmN1clVybDtcbiAgICBsZXQgYWRkQ3VycmVudCA9IGxzLmZpbmRJbmRleCh3ID0+IHcudXJsID09PSB1cmwpID09PSAtMTtcbiAgICBpZiAobm90aWZ5ICYmIG5vdGlmeS5hY3RpdmUgPT09ICdjbG9zZScgJiYgbm90aWZ5LnVybCA9PT0gdXJsKSB7XG4gICAgICBhZGRDdXJyZW50ID0gZmFsc2U7XG4gICAgICBsZXQgdG9Qb3MgPSAwO1xuICAgICAgY29uc3QgY3VySXRlbSA9IHRoaXMubGlzdC5maW5kKHcgPT4gdy51cmwgPT09IHVybCkhO1xuICAgICAgaWYgKGN1ckl0ZW0uaW5kZXggPT09IGxzLmxlbmd0aCkge1xuICAgICAgICAvLyBXaGVuIGNsb3NlZCBpcyBsYXN0XG4gICAgICAgIHRvUG9zID0gbHMubGVuZ3RoIC0gMTtcbiAgICAgIH0gZWxzZSBpZiAoY3VySXRlbS5pbmRleCA8IGxzLmxlbmd0aCkge1xuICAgICAgICAvLyBTaG91bGQgYmUgYWN0aXZlZCBuZXh0IHRhYiB3aGVuIGNsb3NlZCBpcyBtaWRkbGVcbiAgICAgICAgdG9Qb3MgPSBNYXRoLm1heCgwLCBjdXJJdGVtLmluZGV4KTtcbiAgICAgIH1cbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwobHNbdG9Qb3NdLnVybCk7XG4gICAgfVxuXG4gICAgaWYgKGFkZEN1cnJlbnQpIHtcbiAgICAgIGxzLnNwbGljZSh0aGlzLnBvcyArIDEsIDAsIHRoaXMuZ2VuQ3VySXRlbSgpKTtcbiAgICB9XG5cbiAgICBscy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4gKGl0ZW0uaW5kZXggPSBpbmRleCkpO1xuICAgIGlmIChscy5sZW5ndGggPT09IDEpIHtcbiAgICAgIGxzWzBdLmNsb3NhYmxlID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMubGlzdCA9IGxzO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB0aGlzLnVwZGF0ZVBvcygpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVUaXRsZShyZXM6IFJldXNlVGFiTm90aWZ5KTogdm9pZCB7XG4gICAgY29uc3QgaXRlbSA9IHRoaXMubGlzdC5maW5kKHcgPT4gdy51cmwgPT09IHJlcyEudXJsKTtcbiAgICBpZiAoIWl0ZW0pIHJldHVybjtcbiAgICBpdGVtLnRpdGxlID0gdGhpcy5nZW5UaXQocmVzIS50aXRsZSEpO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVmcmVzaChpdGVtOiBSZXVzZUl0ZW0pOiB2b2lkIHtcbiAgICB0aGlzLnNydi5ydW5Ib29rKCdfb25SZXVzZUluaXQnLCB0aGlzLnBvcyA9PT0gaXRlbS5pbmRleCA/IHRoaXMuc3J2LmNvbXBvbmVudFJlZiA6IGl0ZW0uaW5kZXgsICdyZWZyZXNoJyk7XG4gIH1cblxuICAvLyAjcmVnaW9uIFVJXG5cbiAgY29udGV4dE1lbnVDaGFuZ2UocmVzOiBSZXVzZUNvbnRleHRDbG9zZUV2ZW50KTogdm9pZCB7XG4gICAgbGV0IGZuOiAoKCkgPT4gdm9pZCkgfCBudWxsID0gbnVsbDtcbiAgICBzd2l0Y2ggKHJlcy50eXBlKSB7XG4gICAgICBjYXNlICdyZWZyZXNoJzpcbiAgICAgICAgdGhpcy5yZWZyZXNoKHJlcy5pdGVtKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjbG9zZSc6XG4gICAgICAgIHRoaXMuX2Nsb3NlKG51bGwsIHJlcy5pdGVtLmluZGV4LCByZXMuaW5jbHVkZU5vbkNsb3NlYWJsZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY2xvc2VSaWdodCc6XG4gICAgICAgIGZuID0gKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc3J2LmNsb3NlUmlnaHQocmVzLml0ZW0udXJsLCByZXMuaW5jbHVkZU5vbkNsb3NlYWJsZSk7XG4gICAgICAgICAgdGhpcy5jbG9zZS5lbWl0KG51bGwpO1xuICAgICAgICB9O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2Nsb3NlT3RoZXInOlxuICAgICAgICBmbiA9ICgpID0+IHtcbiAgICAgICAgICB0aGlzLnNydi5jbGVhcihyZXMuaW5jbHVkZU5vbkNsb3NlYWJsZSk7XG4gICAgICAgICAgdGhpcy5jbG9zZS5lbWl0KG51bGwpO1xuICAgICAgICB9O1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgaWYgKCFmbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXJlcy5pdGVtLmFjdGl2ZSAmJiByZXMuaXRlbS5pbmRleCA8PSB0aGlzLmxpc3QuZmluZCh3ID0+IHcuYWN0aXZlKSEuaW5kZXgpIHtcbiAgICAgIHRoaXMuX3RvKHJlcy5pdGVtLmluZGV4LCBmbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZuKCk7XG4gICAgfVxuICB9XG5cbiAgX3RvKGluZGV4OiBudW1iZXIsIGNiPzogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIGluZGV4ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oaW5kZXgsIHRoaXMubGlzdC5sZW5ndGggLSAxKSk7XG4gICAgY29uc3QgaXRlbSA9IHRoaXMubGlzdFtpbmRleF07XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChpdGVtLnVybCkudGhlbihyZXMgPT4ge1xuICAgICAgaWYgKCFyZXMpIHJldHVybjtcbiAgICAgIHRoaXMuaXRlbSA9IGl0ZW07XG4gICAgICB0aGlzLmNoYW5nZS5lbWl0KGl0ZW0pO1xuICAgICAgaWYgKGNiKSB7XG4gICAgICAgIGNiKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBfY2xvc2UoZTogRXZlbnQgfCBudWxsLCBpZHg6IG51bWJlciwgaW5jbHVkZU5vbkNsb3NlYWJsZTogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgIGlmIChlICE9IG51bGwpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmxpc3RbaWR4XTtcbiAgICB0aGlzLnNydi5jbG9zZShpdGVtLnVybCwgaW5jbHVkZU5vbkNsb3NlYWJsZSk7XG4gICAgdGhpcy5jbG9zZS5lbWl0KGl0ZW0pO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBhY3RpdmF0ZShpbnN0YW5jZTogTnpTYWZlQW55KTogdm9pZCB7XG4gICAgdGhpcy5zcnYuY29tcG9uZW50UmVmID0geyBpbnN0YW5jZSB9O1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVQb3MoKTogdm9pZCB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5zcnYuZ2V0VXJsKHRoaXMucm91dGUuc25hcHNob3QpO1xuICAgIGNvbnN0IGxzID0gdGhpcy5saXN0LmZpbHRlcih3ID0+IHcudXJsID09PSB1cmwgfHwgIXRoaXMuc3J2LmlzRXhjbHVkZSh3LnVybCkpO1xuICAgIGlmIChscy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBsYXN0ID0gbHNbbHMubGVuZ3RoIC0gMV07XG4gICAgY29uc3QgaXRlbSA9IGxzLmZpbmQodyA9PiB3LnVybCA9PT0gdXJsKTtcbiAgICBsYXN0Lmxhc3QgPSB0cnVlO1xuICAgIGNvbnN0IHBvcyA9IGl0ZW0gPT0gbnVsbCA/IGxhc3QuaW5kZXggOiBpdGVtLmluZGV4O1xuICAgIGxzLmZvckVhY2goKGksIGlkeCkgPT4gKGkuYWN0aXZlID0gcG9zID09PSBpZHgpKTtcbiAgICB0aGlzLnBvcyA9IHBvcztcbiAgICAvLyBUT0RPOiDnm67liY3ml6Dms5Xnn6XpgZPkuLrku4DkuYggYHBvc2Ag5peg5rOV6YCa6L+HIGBuelNlbGVjdGVkSW5kZXhgIOeUn+aViO+8jOWboOatpOW8uuWItuS9v+eUqOe7hOS7tuWunuS+i+eahOaWueW8j+adpeS/ruaUue+8jOi/meenjeaWueW8j+aYr+WuieWFqOeahFxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9uZy1hbGFpbi9uZy1hbGFpbi9pc3N1ZXMvMTczNlxuICAgIHRoaXMudGFic2V0Lm56U2VsZWN0ZWRJbmRleCA9IHBvcztcbiAgICB0aGlzLmxpc3QgPSBscztcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc3J2LmNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICBzd2l0Y2ggKHJlcz8uYWN0aXZlKSB7XG4gICAgICAgIGNhc2UgJ3RpdGxlJzpcbiAgICAgICAgICB0aGlzLnVwZGF0ZVRpdGxlKHJlcyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjYXNlICdvdmVycmlkZSc6XG4gICAgICAgICAgaWYgKHJlcz8ubGlzdD8ubGVuZ3RoID09PSB0aGlzLmxpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVBvcygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHRoaXMuZ2VuTGlzdChyZXMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5pMThuU3J2LmNoYW5nZVxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcigoKSA9PiB0aGlzLnNydi5pbml0ZWQpLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXG4gICAgICAgIGRlYm91bmNlVGltZSgxMDApXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuZ2VuTGlzdCh7IGFjdGl2ZTogJ3RpdGxlJyB9KSk7XG5cbiAgICB0aGlzLnNydi5pbml0KCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtQIGluIGtleW9mIHRoaXNdPzogU2ltcGxlQ2hhbmdlIH0gJiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzLm1heCkgdGhpcy5zcnYubWF4ID0gdGhpcy5tYXghO1xuICAgIGlmIChjaGFuZ2VzLmV4Y2x1ZGVzKSB0aGlzLnNydi5leGNsdWRlcyA9IHRoaXMuZXhjbHVkZXMhO1xuICAgIGlmIChjaGFuZ2VzLm1vZGUpIHRoaXMuc3J2Lm1vZGUgPSB0aGlzLm1vZGU7XG4gICAgaWYgKGNoYW5nZXMucm91dGVQYXJhbU1hdGNoTW9kZSkgdGhpcy5zcnYucm91dGVQYXJhbU1hdGNoTW9kZSA9IHRoaXMucm91dGVQYXJhbU1hdGNoTW9kZTtcbiAgICBpZiAoY2hhbmdlcy5rZWVwaW5nU2Nyb2xsKSB7XG4gICAgICB0aGlzLnNydi5rZWVwaW5nU2Nyb2xsID0gdGhpcy5rZWVwaW5nU2Nyb2xsO1xuICAgICAgdGhpcy5zcnYua2VlcGluZ1Njcm9sbENvbnRhaW5lciA9IHRoaXMuX2tlZXBpbmdTY3JvbGxDb250YWluZXI7XG4gICAgfVxuXG4gICAgdGhpcy5zcnYuZGVidWcgPSB0aGlzLmRlYnVnO1xuXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgY29uc3QgeyBkZXN0cm95JCB9ID0gdGhpcztcbiAgICBkZXN0cm95JC5uZXh0KCk7XG4gICAgZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuIiwiPG56LXRhYnNldFxuICAjdGFic2V0XG4gIFtuelNlbGVjdGVkSW5kZXhdPVwicG9zXCJcbiAgW256QW5pbWF0ZWRdPVwiZmFsc2VcIlxuICBbbnpUeXBlXT1cInRhYlR5cGVcIlxuICBbbnpUYWJCYXJFeHRyYUNvbnRlbnRdPVwidGFiQmFyRXh0cmFDb250ZW50XCJcbiAgW256VGFiQmFyR3V0dGVyXT1cInRhYkJhckd1dHRlclwiXG4gIFtuelRhYkJhclN0eWxlXT1cInRhYkJhclN0eWxlXCJcbj5cbiAgPG56LXRhYiAqbmdGb3I9XCJsZXQgaSBvZiBsaXN0OyBsZXQgaW5kZXggPSBpbmRleFwiIFtuelRpdGxlXT1cInRpdGxlVGVtcGxhdGVcIiAobnpDbGljayk9XCJfdG8oaW5kZXgpXCI+XG4gICAgPG5nLXRlbXBsYXRlICN0aXRsZVRlbXBsYXRlPlxuICAgICAgPGRpdlxuICAgICAgICBbcmV1c2UtdGFiLWNvbnRleHQtbWVudV09XCJpXCJcbiAgICAgICAgW2N1c3RvbUNvbnRleHRNZW51XT1cImN1c3RvbUNvbnRleHRNZW51XCJcbiAgICAgICAgY2xhc3M9XCJyZXVzZS10YWJfX25hbWVcIlxuICAgICAgICBbYXR0ci50aXRsZV09XCJpLnRpdGxlXCJcbiAgICAgID5cbiAgICAgICAgPHNwYW4gW2NsYXNzLnJldXNlLXRhYl9fbmFtZS13aWR0aF09XCJ0YWJNYXhXaWR0aFwiIFtzdHlsZS5tYXgtd2lkdGgucHhdPVwidGFiTWF4V2lkdGhcIj5cbiAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAqbmdJZj1cInRpdGxlUmVuZGVyOyBlbHNlIGRlZmF1bHRUaXRsZVwiXG4gICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJ0aXRsZVJlbmRlclwiXG4gICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IGkgfVwiXG4gICAgICAgICAgPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjZGVmYXVsdFRpdGxlPnt7IGkudGl0bGUgfX08L25nLXRlbXBsYXRlPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxpICpuZ0lmPVwiaS5jbG9zYWJsZVwiIG56LWljb24gbnpUeXBlPVwiY2xvc2VcIiBjbGFzcz1cInJldXNlLXRhYl9fb3BcIiAoY2xpY2spPVwiX2Nsb3NlKCRldmVudCwgaW5kZXgsIGZhbHNlKVwiPjwvaT5cbiAgICA8L25nLXRlbXBsYXRlPlxuICA8L256LXRhYj5cbjwvbnotdGFic2V0PlxuPHJldXNlLXRhYi1jb250ZXh0IFtpMThuXT1cImkxOG5cIiAoY2hhbmdlKT1cImNvbnRleHRNZW51Q2hhbmdlKCRldmVudClcIj48L3JldXNlLXRhYi1jb250ZXh0PlxuIl19