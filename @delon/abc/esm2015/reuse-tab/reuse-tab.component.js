import { __decorate, __metadata } from "tslib";
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Inject, Input, Optional, Output, TemplateRef, ViewChild, ViewEncapsulation, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { InputBoolean, InputNumber } from '@delon/util/decorator';
import { NzTabSetComponent } from 'ng-zorro-antd/tabs';
import { Subject } from 'rxjs';
import { debounceTime, filter, takeUntil } from 'rxjs/operators';
import { ReuseTabContextService } from './reuse-tab-context.service';
import { ReuseTabMatchMode, } from './reuse-tab.interfaces';
import { ReuseTabService } from './reuse-tab.service';
export class ReuseTabComponent {
    // #endregion
    constructor(srv, cdr, router, route, i18nSrv, doc) {
        this.srv = srv;
        this.cdr = cdr;
        this.router = router;
        this.route = route;
        this.i18nSrv = i18nSrv;
        this.doc = doc;
        this.unsubscribe$ = new Subject();
        this.updatePos$ = new Subject();
        this.list = [];
        this.pos = 0;
        // #region fields
        this.mode = ReuseTabMatchMode.Menu;
        this.debug = false;
        this.allowClose = true;
        this.keepingScroll = false;
        this.customContextMenu = [];
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
            index: 0,
        };
    }
    genList(notify) {
        const ls = this.srv.items.map((item, index) => ({
            url: item.url,
            title: this.genTit(item.title),
            closable: this.allowClose && item.closable && this.srv.count > 0,
            index,
            active: false,
            last: false,
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
            ls.push(this.genCurItem());
        }
        ls.forEach((item, index) => (item.index = index));
        if (ls.length === 1) {
            ls[0].closable = false;
        }
        this.list = ls;
        this.cdr.detectChanges();
        this.updatePos$.next();
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
    // #endregion
    ngOnInit() {
        this.updatePos$.pipe(takeUntil(this.unsubscribe$), debounceTime(50)).subscribe(() => {
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
        });
        this.srv.change.pipe(takeUntil(this.unsubscribe$)).subscribe(res => {
            var _a;
            switch (res === null || res === void 0 ? void 0 : res.active) {
                case 'title':
                    this.updateTitle(res);
                    return;
                case 'override':
                    if (((_a = res === null || res === void 0 ? void 0 : res.list) === null || _a === void 0 ? void 0 : _a.length) === this.list.length) {
                        this.updatePos$.next();
                        return;
                    }
                    break;
            }
            this.genList(res);
        });
        this.i18nSrv.change
            .pipe(filter(() => this.srv.inited), takeUntil(this.unsubscribe$), debounceTime(100))
            .subscribe(() => this.genList({ active: 'title' }));
        this.srv.init();
    }
    ngOnChanges(changes) {
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
        const { unsubscribe$ } = this;
        unsubscribe$.next();
        unsubscribe$.complete();
    }
}
ReuseTabComponent.decorators = [
    { type: Component, args: [{
                selector: 'reuse-tab, [reuse-tab]',
                exportAs: 'reuseTab',
                template: "<nz-tabset\n  #tabset\n  [nzSelectedIndex]=\"pos\"\n  [nzAnimated]=\"false\"\n  [nzType]=\"tabType\"\n  [nzTabBarExtraContent]=\"tabBarExtraContent\"\n  [nzTabBarGutter]=\"tabBarGutter\"\n  [nzTabBarStyle]=\"tabBarStyle\"\n>\n  <nz-tab *ngFor=\"let i of list; let index = index\" [nzTitle]=\"titleTemplate\" (nzClick)=\"_to(index)\">\n    <ng-template #titleTemplate>\n      <div [reuse-tab-context-menu]=\"i\" [customContextMenu]=\"customContextMenu\" class=\"reuse-tab__name\" [attr.title]=\"i.title\">\n        <span [class.reuse-tab__name-width]=\"tabMaxWidth\" [style.max-width.px]=\"tabMaxWidth\">\n          <ng-container *ngIf=\"titleRender; else defaultTitle\" [ngTemplateOutlet]=\"titleRender\" [ngTemplateOutletContext]=\"{ $implicit: i }\"></ng-container>\n          <ng-template #defaultTitle>{{ i.title }}</ng-template>\n        </span>\n      </div>\n      <i *ngIf=\"i.closable\" nz-icon nzType=\"close\" class=\"reuse-tab__op\" (click)=\"_close($event, index, false)\"></i>\n    </ng-template>\n  </nz-tab>\n</nz-tabset>\n<reuse-tab-context [i18n]=\"i18n\" (change)=\"contextMenuChange($event)\"></reuse-tab-context>\n",
                host: {
                    '[class.reuse-tab]': 'true',
                    '[class.reuse-tab__line]': `tabType === 'line'`,
                    '[class.reuse-tab__card]': `tabType === 'card'`,
                    '[class.reuse-tab__disabled]': `disabled`,
                },
                providers: [ReuseTabContextService],
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            },] }
];
/** @nocollapse */
ReuseTabComponent.ctorParameters = () => [
    { type: ReuseTabService },
    { type: ChangeDetectorRef },
    { type: Router },
    { type: ActivatedRoute },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [ALAIN_I18N_TOKEN,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
ReuseTabComponent.propDecorators = {
    tabset: [{ type: ViewChild, args: ['tabset',] }],
    mode: [{ type: Input }],
    i18n: [{ type: Input }],
    debug: [{ type: Input }],
    max: [{ type: Input }],
    tabMaxWidth: [{ type: Input }],
    excludes: [{ type: Input }],
    allowClose: [{ type: Input }],
    keepingScroll: [{ type: Input }],
    keepingScrollContainer: [{ type: Input }],
    customContextMenu: [{ type: Input }],
    tabBarExtraContent: [{ type: Input }],
    tabBarGutter: [{ type: Input }],
    tabBarStyle: [{ type: Input }],
    tabType: [{ type: Input }],
    routeParamMatchMode: [{ type: Input }],
    disabled: [{ type: Input }],
    titleRender: [{ type: Input }],
    change: [{ type: Output }],
    close: [{ type: Output }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], ReuseTabComponent.prototype, "debug", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Number)
], ReuseTabComponent.prototype, "max", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Number)
], ReuseTabComponent.prototype, "tabMaxWidth", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], ReuseTabComponent.prototype, "allowClose", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], ReuseTabComponent.prototype, "keepingScroll", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], ReuseTabComponent.prototype, "disabled", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2UtdGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9yZXVzZS10YWIvcmV1c2UtdGFiLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFJTCxRQUFRLEVBQ1IsTUFBTSxFQUdOLFdBQVcsRUFDWCxTQUFTLEVBQ1QsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFvQixnQkFBZ0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNsRSxPQUFPLEVBQWdCLFlBQVksRUFBRSxXQUFXLEVBQWUsTUFBTSx1QkFBdUIsQ0FBQztBQUM3RixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3JFLE9BQU8sRUFNTCxpQkFBaUIsR0FJbEIsTUFBTSx3QkFBd0IsQ0FBQztBQUNoQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFpQnRELE1BQU0sT0FBTyxpQkFBaUI7SUF5QzVCLGFBQWE7SUFFYixZQUNVLEdBQW9CLEVBQ3BCLEdBQXNCLEVBQ3RCLE1BQWMsRUFDZCxLQUFxQixFQUNpQixPQUF5QixFQUM3QyxHQUFRO1FBTDFC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Z3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZSxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBbGFpbkkxOE5TZXJ2aWNlLCBBTEFJTl9JMThOX1RPS0VOIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciwgTnVtYmVySW5wdXQgfSBmcm9tICdAZGVsb24vdXRpbC9kZWNvcmF0b3InO1xuaW1wb3J0IHsgTnpUYWJTZXRDb21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL3RhYnMnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBmaWx0ZXIsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFJldXNlVGFiQ29udGV4dFNlcnZpY2UgfSBmcm9tICcuL3JldXNlLXRhYi1jb250ZXh0LnNlcnZpY2UnO1xuaW1wb3J0IHtcbiAgUmV1c2VDb250ZXh0Q2xvc2VFdmVudCxcbiAgUmV1c2VDb250ZXh0STE4bixcbiAgUmV1c2VDdXN0b21Db250ZXh0TWVudSxcbiAgUmV1c2VJdGVtLFxuICBSZXVzZVRhYkNhY2hlZCxcbiAgUmV1c2VUYWJNYXRjaE1vZGUsXG4gIFJldXNlVGFiTm90aWZ5LFxuICBSZXVzZVRhYlJvdXRlUGFyYW1NYXRjaE1vZGUsXG4gIFJldXNlVGl0bGUsXG59IGZyb20gJy4vcmV1c2UtdGFiLmludGVyZmFjZXMnO1xuaW1wb3J0IHsgUmV1c2VUYWJTZXJ2aWNlIH0gZnJvbSAnLi9yZXVzZS10YWIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3JldXNlLXRhYiwgW3JldXNlLXRhYl0nLFxuICBleHBvcnRBczogJ3JldXNlVGFiJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JldXNlLXRhYi5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLnJldXNlLXRhYl0nOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy5yZXVzZS10YWJfX2xpbmVdJzogYHRhYlR5cGUgPT09ICdsaW5lJ2AsXG4gICAgJ1tjbGFzcy5yZXVzZS10YWJfX2NhcmRdJzogYHRhYlR5cGUgPT09ICdjYXJkJ2AsXG4gICAgJ1tjbGFzcy5yZXVzZS10YWJfX2Rpc2FibGVkXSc6IGBkaXNhYmxlZGAsXG4gIH0sXG4gIHByb3ZpZGVyczogW1JldXNlVGFiQ29udGV4dFNlcnZpY2VdLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIFJldXNlVGFiQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9kZWJ1ZzogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbWF4OiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3RhYk1heFdpZHRoOiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2FsbG93Q2xvc2U6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2tlZXBpbmdTY3JvbGw6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Rpc2FibGVkOiBCb29sZWFuSW5wdXQ7XG5cbiAgQFZpZXdDaGlsZCgndGFic2V0JykgcHJpdmF0ZSB0YWJzZXQ6IE56VGFiU2V0Q29tcG9uZW50O1xuICBwcml2YXRlIHVuc3Vic2NyaWJlJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHByaXZhdGUgdXBkYXRlUG9zJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHByaXZhdGUgX2tlZXBpbmdTY3JvbGxDb250YWluZXI6IEVsZW1lbnQ7XG4gIGxpc3Q6IFJldXNlSXRlbVtdID0gW107XG4gIGl0ZW06IFJldXNlSXRlbTtcbiAgcG9zID0gMDtcblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIEBJbnB1dCgpIG1vZGU6IFJldXNlVGFiTWF0Y2hNb2RlID0gUmV1c2VUYWJNYXRjaE1vZGUuTWVudTtcbiAgQElucHV0KCkgaTE4bjogUmV1c2VDb250ZXh0STE4bjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRlYnVnID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIG1heDogbnVtYmVyO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSB0YWJNYXhXaWR0aDogbnVtYmVyO1xuICBASW5wdXQoKSBleGNsdWRlczogUmVnRXhwW107XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBhbGxvd0Nsb3NlID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGtlZXBpbmdTY3JvbGwgPSBmYWxzZTtcbiAgQElucHV0KClcbiAgc2V0IGtlZXBpbmdTY3JvbGxDb250YWluZXIodmFsdWU6IHN0cmluZyB8IEVsZW1lbnQpIHtcbiAgICB0aGlzLl9rZWVwaW5nU2Nyb2xsQ29udGFpbmVyID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHRoaXMuZG9jLnF1ZXJ5U2VsZWN0b3IodmFsdWUpIDogdmFsdWU7XG4gIH1cbiAgQElucHV0KCkgY3VzdG9tQ29udGV4dE1lbnU6IFJldXNlQ3VzdG9tQ29udGV4dE1lbnVbXSA9IFtdO1xuICBASW5wdXQoKSB0YWJCYXJFeHRyYUNvbnRlbnQ6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSB0YWJCYXJHdXR0ZXI6IG51bWJlcjtcbiAgQElucHV0KCkgdGFiQmFyU3R5bGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gIEBJbnB1dCgpIHRhYlR5cGU6ICdsaW5lJyB8ICdjYXJkJyA9ICdsaW5lJztcbiAgQElucHV0KCkgcm91dGVQYXJhbU1hdGNoTW9kZTogUmV1c2VUYWJSb3V0ZVBhcmFtTWF0Y2hNb2RlID0gJ3N0cmljdCc7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSB0aXRsZVJlbmRlcj86IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBSZXVzZUl0ZW0gfT47XG4gIEBPdXRwdXQoKSByZWFkb25seSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFJldXNlSXRlbT4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjxSZXVzZUl0ZW0gfCBudWxsPigpO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHNydjogUmV1c2VUYWJTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoQUxBSU5fSTE4Tl9UT0tFTikgcHJpdmF0ZSBpMThuU3J2OiBBbGFpbkkxOE5TZXJ2aWNlLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBhbnksXG4gICkge31cblxuICBwcml2YXRlIGdlblRpdCh0aXRsZTogUmV1c2VUaXRsZSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRpdGxlLmkxOG4gJiYgdGhpcy5pMThuU3J2ID8gdGhpcy5pMThuU3J2LmZhbnlpKHRpdGxlLmkxOG4pIDogdGl0bGUudGV4dCE7XG4gIH1cblxuICBwcml2YXRlIGdldCBjdXJVcmwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5zcnYuZ2V0VXJsKHRoaXMucm91dGUuc25hcHNob3QpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5DdXJJdGVtKCk6IFJldXNlSXRlbSB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5jdXJVcmw7XG4gICAgY29uc3Qgc25hcHNob3RUcnVlID0gdGhpcy5zcnYuZ2V0VHJ1dGhSb3V0ZSh0aGlzLnJvdXRlLnNuYXBzaG90KTtcbiAgICByZXR1cm4ge1xuICAgICAgdXJsLFxuICAgICAgdGl0bGU6IHRoaXMuZ2VuVGl0KHRoaXMuc3J2LmdldFRpdGxlKHVybCwgc25hcHNob3RUcnVlKSksXG4gICAgICBjbG9zYWJsZTogdGhpcy5hbGxvd0Nsb3NlICYmIHRoaXMuc3J2LmNvdW50ID4gMCAmJiB0aGlzLnNydi5nZXRDbG9zYWJsZSh1cmwsIHNuYXBzaG90VHJ1ZSksXG4gICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgbGFzdDogZmFsc2UsXG4gICAgICBpbmRleDogMCxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5MaXN0KG5vdGlmeTogUmV1c2VUYWJOb3RpZnkgfCBudWxsKTogdm9pZCB7XG4gICAgY29uc3QgbHMgPSB0aGlzLnNydi5pdGVtcy5tYXAoXG4gICAgICAoaXRlbTogUmV1c2VUYWJDYWNoZWQsIGluZGV4OiBudW1iZXIpID0+XG4gICAgICAgICh7XG4gICAgICAgICAgdXJsOiBpdGVtLnVybCxcbiAgICAgICAgICB0aXRsZTogdGhpcy5nZW5UaXQoaXRlbS50aXRsZSksXG4gICAgICAgICAgY2xvc2FibGU6IHRoaXMuYWxsb3dDbG9zZSAmJiBpdGVtLmNsb3NhYmxlICYmIHRoaXMuc3J2LmNvdW50ID4gMCxcbiAgICAgICAgICBpbmRleCxcbiAgICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICAgIGxhc3Q6IGZhbHNlLFxuICAgICAgICB9IGFzIFJldXNlSXRlbSksXG4gICAgKTtcblxuICAgIGNvbnN0IHVybCA9IHRoaXMuY3VyVXJsO1xuICAgIGxldCBhZGRDdXJyZW50ID0gbHMuZmluZEluZGV4KHcgPT4gdy51cmwgPT09IHVybCkgPT09IC0xO1xuICAgIGlmIChub3RpZnkgJiYgbm90aWZ5LmFjdGl2ZSA9PT0gJ2Nsb3NlJyAmJiBub3RpZnkudXJsID09PSB1cmwpIHtcbiAgICAgIGFkZEN1cnJlbnQgPSBmYWxzZTtcbiAgICAgIGxldCB0b1BvcyA9IDA7XG4gICAgICBjb25zdCBjdXJJdGVtID0gdGhpcy5saXN0LmZpbmQodyA9PiB3LnVybCA9PT0gdXJsKSE7XG4gICAgICBpZiAoY3VySXRlbS5pbmRleCA9PT0gbHMubGVuZ3RoKSB7XG4gICAgICAgIC8vIFdoZW4gY2xvc2VkIGlzIGxhc3RcbiAgICAgICAgdG9Qb3MgPSBscy5sZW5ndGggLSAxO1xuICAgICAgfSBlbHNlIGlmIChjdXJJdGVtLmluZGV4IDwgbHMubGVuZ3RoKSB7XG4gICAgICAgIC8vIFNob3VsZCBiZSBhY3RpdmVkIG5leHQgdGFiIHdoZW4gY2xvc2VkIGlzIG1pZGRsZVxuICAgICAgICB0b1BvcyA9IE1hdGgubWF4KDAsIGN1ckl0ZW0uaW5kZXgpO1xuICAgICAgfVxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChsc1t0b1Bvc10udXJsKTtcbiAgICB9XG5cbiAgICBpZiAoYWRkQ3VycmVudCkge1xuICAgICAgbHMucHVzaCh0aGlzLmdlbkN1ckl0ZW0oKSk7XG4gICAgfVxuXG4gICAgbHMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IChpdGVtLmluZGV4ID0gaW5kZXgpKTtcbiAgICBpZiAobHMubGVuZ3RoID09PSAxKSB7XG4gICAgICBsc1swXS5jbG9zYWJsZSA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLmxpc3QgPSBscztcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgdGhpcy51cGRhdGVQb3MkLm5leHQoKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlVGl0bGUocmVzOiBSZXVzZVRhYk5vdGlmeSk6IHZvaWQge1xuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmxpc3QuZmluZCh3ID0+IHcudXJsID09PSByZXMhLnVybCk7XG4gICAgaWYgKCFpdGVtKSByZXR1cm47XG4gICAgaXRlbS50aXRsZSA9IHRoaXMuZ2VuVGl0KHJlcyEudGl0bGUhKTtcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBwcml2YXRlIHJlZnJlc2goaXRlbTogUmV1c2VJdGVtKTogdm9pZCB7XG4gICAgdGhpcy5zcnYucnVuSG9vaygnX29uUmV1c2VJbml0JywgdGhpcy5wb3MgPT09IGl0ZW0uaW5kZXggPyB0aGlzLnNydi5jb21wb25lbnRSZWYgOiBpdGVtLmluZGV4LCAncmVmcmVzaCcpO1xuICB9XG5cbiAgLy8gI3JlZ2lvbiBVSVxuXG4gIGNvbnRleHRNZW51Q2hhbmdlKHJlczogUmV1c2VDb250ZXh0Q2xvc2VFdmVudCk6IHZvaWQge1xuICAgIGxldCBmbjogKCgpID0+IHZvaWQpIHwgbnVsbCA9IG51bGw7XG4gICAgc3dpdGNoIChyZXMudHlwZSkge1xuICAgICAgY2FzZSAncmVmcmVzaCc6XG4gICAgICAgIHRoaXMucmVmcmVzaChyZXMuaXRlbSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY2xvc2UnOlxuICAgICAgICB0aGlzLl9jbG9zZShudWxsLCByZXMuaXRlbS5pbmRleCwgcmVzLmluY2x1ZGVOb25DbG9zZWFibGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2Nsb3NlUmlnaHQnOlxuICAgICAgICBmbiA9ICgpID0+IHtcbiAgICAgICAgICB0aGlzLnNydi5jbG9zZVJpZ2h0KHJlcy5pdGVtLnVybCwgcmVzLmluY2x1ZGVOb25DbG9zZWFibGUpO1xuICAgICAgICAgIHRoaXMuY2xvc2UuZW1pdChudWxsKTtcbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjbG9zZU90aGVyJzpcbiAgICAgICAgZm4gPSAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5zcnYuY2xlYXIocmVzLmluY2x1ZGVOb25DbG9zZWFibGUpO1xuICAgICAgICAgIHRoaXMuY2xvc2UuZW1pdChudWxsKTtcbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmICghZm4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFyZXMuaXRlbS5hY3RpdmUgJiYgcmVzLml0ZW0uaW5kZXggPD0gdGhpcy5saXN0LmZpbmQodyA9PiB3LmFjdGl2ZSkhLmluZGV4KSB7XG4gICAgICB0aGlzLl90byhyZXMuaXRlbS5pbmRleCwgZm4pO1xuICAgIH0gZWxzZSB7XG4gICAgICBmbigpO1xuICAgIH1cbiAgfVxuXG4gIF90byhpbmRleDogbnVtYmVyLCBjYj86ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICBpbmRleCA9IE1hdGgubWF4KDAsIE1hdGgubWluKGluZGV4LCB0aGlzLmxpc3QubGVuZ3RoIC0gMSkpO1xuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmxpc3RbaW5kZXhdO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoaXRlbS51cmwpLnRoZW4ocmVzID0+IHtcbiAgICAgIGlmICghcmVzKSByZXR1cm47XG4gICAgICB0aGlzLml0ZW0gPSBpdGVtO1xuICAgICAgdGhpcy5jaGFuZ2UuZW1pdChpdGVtKTtcbiAgICAgIGlmIChjYikge1xuICAgICAgICBjYigpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgX2Nsb3NlKGU6IEV2ZW50IHwgbnVsbCwgaWR4OiBudW1iZXIsIGluY2x1ZGVOb25DbG9zZWFibGU6IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICBpZiAoZSAhPSBudWxsKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgICBjb25zdCBpdGVtID0gdGhpcy5saXN0W2lkeF07XG4gICAgdGhpcy5zcnYuY2xvc2UoaXRlbS51cmwsIGluY2x1ZGVOb25DbG9zZWFibGUpO1xuICAgIHRoaXMuY2xvc2UuZW1pdChpdGVtKTtcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgYWN0aXZhdGUoaW5zdGFuY2U6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuc3J2LmNvbXBvbmVudFJlZiA9IHsgaW5zdGFuY2UgfTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZVBvcyQucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpLCBkZWJvdW5jZVRpbWUoNTApKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgY29uc3QgdXJsID0gdGhpcy5zcnYuZ2V0VXJsKHRoaXMucm91dGUuc25hcHNob3QpO1xuICAgICAgY29uc3QgbHMgPSB0aGlzLmxpc3QuZmlsdGVyKHcgPT4gdy51cmwgPT09IHVybCB8fCAhdGhpcy5zcnYuaXNFeGNsdWRlKHcudXJsKSk7XG4gICAgICBpZiAobHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbGFzdCA9IGxzW2xzLmxlbmd0aCAtIDFdO1xuICAgICAgY29uc3QgaXRlbSA9IGxzLmZpbmQodyA9PiB3LnVybCA9PT0gdXJsKTtcbiAgICAgIGxhc3QubGFzdCA9IHRydWU7XG4gICAgICBjb25zdCBwb3MgPSBpdGVtID09IG51bGwgPyBsYXN0LmluZGV4IDogaXRlbS5pbmRleDtcbiAgICAgIGxzLmZvckVhY2goKGksIGlkeCkgPT4gKGkuYWN0aXZlID0gcG9zID09PSBpZHgpKTtcbiAgICAgIHRoaXMucG9zID0gcG9zO1xuICAgICAgLy8gVE9ETzog55uu5YmN5peg5rOV55+l6YGT5Li65LuA5LmIIGBwb3NgIOaXoOazlemAmui/hyBgbnpTZWxlY3RlZEluZGV4YCDnlJ/mlYjvvIzlm6DmraTlvLrliLbkvb/nlKjnu4Tku7blrp7kvovnmoTmlrnlvI/mnaXkv67mlLnvvIzov5nnp43mlrnlvI/mmK/lronlhajnmoRcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9uZy1hbGFpbi9uZy1hbGFpbi9pc3N1ZXMvMTczNlxuICAgICAgdGhpcy50YWJzZXQubnpTZWxlY3RlZEluZGV4ID0gcG9zO1xuICAgICAgdGhpcy5saXN0ID0gbHM7XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNydi5jaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgIHN3aXRjaCAocmVzPy5hY3RpdmUpIHtcbiAgICAgICAgY2FzZSAndGl0bGUnOlxuICAgICAgICAgIHRoaXMudXBkYXRlVGl0bGUocmVzKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNhc2UgJ292ZXJyaWRlJzpcbiAgICAgICAgICBpZiAocmVzPy5saXN0Py5sZW5ndGggPT09IHRoaXMubGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUG9zJC5uZXh0KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgdGhpcy5nZW5MaXN0KHJlcyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmkxOG5TcnYuY2hhbmdlXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKCgpID0+IHRoaXMuc3J2LmluaXRlZCksXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCksXG4gICAgICAgIGRlYm91bmNlVGltZSgxMDApLFxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmdlbkxpc3QoeyBhY3RpdmU6ICd0aXRsZScgfSkpO1xuXG4gICAgdGhpcy5zcnYuaW5pdCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogeyBbUCBpbiBrZXlvZiB0aGlzXT86IFNpbXBsZUNoYW5nZSB9ICYgU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLm1heCkgdGhpcy5zcnYubWF4ID0gdGhpcy5tYXg7XG4gICAgaWYgKGNoYW5nZXMuZXhjbHVkZXMpIHRoaXMuc3J2LmV4Y2x1ZGVzID0gdGhpcy5leGNsdWRlcztcbiAgICBpZiAoY2hhbmdlcy5tb2RlKSB0aGlzLnNydi5tb2RlID0gdGhpcy5tb2RlO1xuICAgIGlmIChjaGFuZ2VzLnJvdXRlUGFyYW1NYXRjaE1vZGUpIHRoaXMuc3J2LnJvdXRlUGFyYW1NYXRjaE1vZGUgPSB0aGlzLnJvdXRlUGFyYW1NYXRjaE1vZGU7XG4gICAgaWYgKGNoYW5nZXMua2VlcGluZ1Njcm9sbCkge1xuICAgICAgdGhpcy5zcnYua2VlcGluZ1Njcm9sbCA9IHRoaXMua2VlcGluZ1Njcm9sbDtcbiAgICAgIHRoaXMuc3J2LmtlZXBpbmdTY3JvbGxDb250YWluZXIgPSB0aGlzLl9rZWVwaW5nU2Nyb2xsQ29udGFpbmVyO1xuICAgIH1cblxuICAgIHRoaXMuc3J2LmRlYnVnID0gdGhpcy5kZWJ1ZztcblxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgdW5zdWJzY3JpYmUkIH0gPSB0aGlzO1xuICAgIHVuc3Vic2NyaWJlJC5uZXh0KCk7XG4gICAgdW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==