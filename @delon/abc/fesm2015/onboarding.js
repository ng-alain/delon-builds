import { Directionality } from '@angular/cdk/bidi';
import { DOCUMENT, NgIf, CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { EventEmitter, ɵɵdirectiveInject, ElementRef, ChangeDetectorRef, ɵɵngDeclareComponent, ChangeDetectionStrategy, ViewEncapsulation, ɵsetClassMetadata, Component, Optional, Inject, ɵɵinject, ApplicationRef, ComponentFactoryResolver, Injector, ɵɵdefineInjectable, Injectable, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { DelonLocaleService, DelonLocaleModule } from '@delon/theme';
import { AlainConfigService } from '@delon/util/config';
import { of, pipe } from 'rxjs';
import { switchMap, delay } from 'rxjs/operators';
import { Platform } from '@angular/cdk/platform';
import { NzPopoverDirective, NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzNoAnimationDirective, NzNoAnimationModule } from 'ng-zorro-antd/core/no-animation';
import { NzStringTemplateOutletDirective, NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzButtonComponent, NzButtonModule } from 'ng-zorro-antd/button';
import { ɵNzTransitionPatchDirective } from 'ng-zorro-antd/core/transition-patch';

class OnboardingComponent {
    constructor(el, doc, platform, cdr) {
        this.el = el;
        this.doc = doc;
        this.platform = platform;
        this.cdr = cdr;
        this.active = 0;
        this.max = 0;
        this.op = new EventEmitter();
        this.running = false;
        this.dir = 'ltr';
    }
    get first() {
        return this.active === 0;
    }
    get last() {
        return this.active === this.max - 1;
    }
    _getDoc() {
        return this.doc;
    }
    _getWin() {
        return this._getDoc().defaultView || window;
    }
    getLightData() {
        const doc = this._getDoc();
        const win = this._getWin();
        const el = doc.querySelector(this.item.selectors);
        if (!el) {
            return null;
        }
        const scrollTop = win.pageYOffset || doc.documentElement.scrollTop || doc.body.scrollTop;
        const scrollLeft = win.pageXOffset || doc.documentElement.scrollLeft || doc.body.scrollLeft;
        const rect = el.getBoundingClientRect();
        const top = rect.top + scrollTop;
        const left = rect.left + scrollLeft;
        const padding = 8;
        const needPadding = top > padding && left > padding;
        const offsetPos = needPadding ? padding : 0;
        const offsetWH = needPadding ? padding * 2 : 0;
        return {
            top: top - offsetPos,
            left: left - offsetPos,
            width: rect.width + offsetWH,
            height: rect.height + offsetWH,
            el,
            clientWidth: doc.body.clientWidth,
            clientHeight: doc.body.clientHeight,
        };
    }
    scroll(pos) {
        this.prevSelectorEl = pos.el;
        const scrollY = pos.top - (pos.clientHeight - pos.height) / 2;
        this._getWin().scrollTo({ top: scrollY });
        this.updatePrevElStatus(true);
    }
    updateRunning(status) {
        this.running = status;
        this.cdr.detectChanges();
        if (!status) {
            this.updatePosition();
        }
    }
    updatePosition() {
        if (!this.platform.isBrowser) {
            return;
        }
        const pos = this.getLightData();
        if (pos == null) {
            console.warn(`Did not matches selectors [${this.item.selectors}]`);
            return;
        }
        const lightStyle = this.el.nativeElement.querySelector('.onboarding__light').style;
        lightStyle.top = `${pos.top}px`;
        lightStyle.left = `${pos.left}px`;
        lightStyle.width = `${pos.width}px`;
        lightStyle.height = `${pos.height}px`;
        this.updatePrevElStatus(false);
        this.scroll(pos);
    }
    updatePrevElStatus(status) {
        if (this.prevSelectorEl) {
            this.prevSelectorEl.classList[status ? 'add' : 'remove']('onboarding__light-el');
        }
    }
    to(type) {
        this.op.emit(type);
    }
    handleMask() {
        if (this.config.maskClosable === true) {
            this.to('done');
        }
    }
    ngOnDestroy() {
        clearTimeout(this.time);
        this.updatePrevElStatus(false);
    }
}
/** @nocollapse */ OnboardingComponent.ɵfac = function OnboardingComponent_Factory(t) { return new (t || OnboardingComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(DOCUMENT, 8), ɵɵdirectiveInject(Platform), ɵɵdirectiveInject(ChangeDetectorRef)); };
/** @nocollapse */ OnboardingComponent.ɵcmp = ɵɵngDeclareComponent({ version: "11.1.1", type: OnboardingComponent, selector: "onboarding", host: { properties: { "class.onboarding": "true", "class.onboarding-rtl": "dir === 'rtl'", "attr.data-onboarding-active": "active" } }, ngImport: i0, template: "<div *ngIf=\"!running && config.mask\" class=\"onboarding__mask\" (click)=\"handleMask()\"></div>\n<div\n  *ngIf=\"item\"\n  class=\"onboarding__light\"\n  [class.onboarding__light-hide]=\"running\"\n  [attr.style]=\"item.lightStyle\"\n  nz-popover\n  [nzPopoverTitle]=\"item.title\"\n  [nzPopoverContent]=\"content\"\n  [nzPopoverVisible]=\"!running\"\n  [nzPopoverTrigger]=\"null\"\n  [nzPopoverPlacement]=\"item.position\"\n  [nzPopoverOverlayClassName]=\"item.className\"\n  [nzPopoverOverlayStyle]=\"{ 'max-width.px': item.width, direction: dir }\"\n  [nzNoAnimation]=\"true\"\n></div>\n<ng-template #content>\n  <ng-container *nzStringTemplateOutlet=\"item.content\">\n    <div [innerHTML]=\"item.content\"></div>\n  </ng-container>\n  <div class=\"flex-center-between onboarding__footer\">\n    <span class=\"onboarding__total\">\n      <ng-container *ngIf=\"config.showTotal\">{{ active + 1 }}/{{ max }}</ng-container>\n    </span>\n    <div class=\"onboarding__btns\">\n      <a *ngIf=\"!last && item.skip !== null\" nz-button nzType=\"link\" (click)=\"to('skip')\" nzSize=\"small\" data-btnType=\"skip\">\n        <ng-container *nzStringTemplateOutlet=\"item.skip\">{{ item.skip }}</ng-container>\n      </a>\n      <a *ngIf=\"!first && item.prev !== null\" nz-button (click)=\"to('prev')\" nzSize=\"small\" data-btnType=\"prev\">\n        <ng-container *nzStringTemplateOutlet=\"item.prev\">{{ item.prev }}</ng-container>\n      </a>\n      <a *ngIf=\"!last && item.next !== null\" nz-button (click)=\"to('next')\" nzType=\"primary\" nzSize=\"small\" data-btnType=\"next\">\n        <ng-container *nzStringTemplateOutlet=\"item.next\">{{ item.next }}</ng-container>\n      </a>\n      <a *ngIf=\"last && item.done !== null\" nz-button (click)=\"to('done')\" nzType=\"primary\" nzSize=\"small\" data-btnType=\"done\">\n        <ng-container *nzStringTemplateOutlet=\"item.done\">{{ item.done }}</ng-container>\n      </a>\n    </div>\n  </div>\n</ng-template>\n", directives: [{ type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: NzPopoverDirective, selector: "[nz-popover]", inputs: ["nzPopoverTrigger", "nzPopoverPlacement", "nzPopoverTitle", "nzPopoverContent", "nz-popover", "nzPopoverOrigin", "nzPopoverVisible", "nzPopoverMouseEnterDelay", "nzPopoverMouseLeaveDelay", "nzPopoverOverlayClassName", "nzPopoverOverlayStyle"], outputs: ["nzPopoverVisibleChange"], exportAs: ["nzPopover"] }, { type: NzNoAnimationDirective, selector: "[nzNoAnimation]", inputs: ["nzNoAnimation"], exportAs: ["nzNoAnimation"] }, { type: NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { type: NzButtonComponent, selector: "button[nz-button], a[nz-button]", inputs: ["nzBlock", "nzGhost", "nzSearch", "nzLoading", "nzDanger", "disabled", "tabIndex", "nzType", "nzShape", "nzSize"], exportAs: ["nzButton"] }, { type: ɵNzTransitionPatchDirective, selector: "[nz-button], nz-button-group, [nz-icon], [nz-menu-item], [nz-submenu], nz-select-top-control, nz-select-placeholder, nz-input-group", inputs: ["hidden"] }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(OnboardingComponent, [{
        type: Component,
        args: [{
                selector: 'onboarding',
                templateUrl: './onboarding.component.html',
                host: {
                    '[class.onboarding]': `true`,
                    '[class.onboarding-rtl]': `dir === 'rtl'`,
                    '[attr.data-onboarding-active]': `active`,
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], function () { return [{ type: ElementRef }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: Platform }, { type: ChangeDetectorRef }]; }, null); })();

class OnboardingService {
    constructor(i18n, appRef, resolver, router, injector, doc, configSrv, directionality) {
        this.i18n = i18n;
        this.appRef = appRef;
        this.resolver = resolver;
        this.router = router;
        this.injector = injector;
        this.doc = doc;
        this.configSrv = configSrv;
        this.directionality = directionality;
        this.active = 0;
        this.running$ = null;
        this._running = false;
        this.type = null;
    }
    _getDoc() {
        return this.doc;
    }
    /**
     * Get whether it is booting
     *
     * 获取是否正在引导中
     */
    get running() {
        return this._running;
    }
    attach() {
        const compRef = (this.compRef = this.resolver.resolveComponentFactory(OnboardingComponent).create(this.injector));
        this.appRef.attachView(compRef.hostView);
        const compNode = compRef.hostView.rootNodes[0];
        const doc = this._getDoc();
        const cdk = doc.querySelector('.cdk-overlay-container');
        if (cdk) {
            doc.body.insertBefore(compNode, cdk);
        }
        else {
            doc.body.appendChild(compNode);
        }
        this.op$ = this.compRef.instance.op.subscribe((type) => {
            switch (type) {
                case 'next':
                    this.next();
                    break;
                case 'prev':
                    this.prev();
                    break;
                default:
                    this.done();
                    break;
            }
        });
    }
    cancelRunning() {
        if (this.running$) {
            this.running$.unsubscribe();
            this.running$ = null;
        }
        return this;
    }
    updateRunning(status) {
        this._running = status;
        this.compRef.instance.updateRunning(status);
        return this;
    }
    destroy() {
        this.cancelRunning();
        if (this.compRef) {
            this.appRef.detachView(this.compRef.hostView);
            this.compRef.destroy();
            this.op$.unsubscribe();
        }
    }
    showItem(isStart = false) {
        const items = this.config.items;
        const item = Object.assign(Object.assign({ position: 'bottomLeft', before: of(true), after: of(true) }, this.i18n.getData('onboarding')), items[this.active]);
        const dir = this.configSrv.get('onboarding').direction || this.directionality.value;
        Object.assign(this.compRef.instance, { item, config: this.config, active: this.active, max: items.length, dir });
        const pipes = [
            switchMap(() => (item.url ? this.router.navigateByUrl(item.url) : of(true))),
            switchMap(() => {
                const obs = this.type === 'prev' ? item.after : item.before;
                return typeof obs === 'number' ? of(true).pipe(delay(obs)) : obs;
            }),
        ];
        if (!isStart) {
            pipes.push(delay(1));
        }
        this.updateRunning(true);
        this.running$ = of(true)
            .pipe(pipe.apply(this, pipes))
            .subscribe(() => this.cancelRunning().updateRunning(false), () => this.done());
    }
    /**
     * Start a new user guidance
     *
     * 开启新的用户引导流程
     */
    start(config) {
        if (this.running) {
            return;
        }
        this.destroy();
        this.config = Object.assign({ items: [], mask: true, maskClosable: true, showTotal: false }, config);
        this.active = 0;
        this.type = null;
        this.attach();
        this.showItem(true);
    }
    /**
     * Next
     *
     * 下一步
     */
    next() {
        if (this._running || this.active + 1 >= this.config.items.length) {
            this.done();
            return;
        }
        this.type = 'next';
        ++this.active;
        this.showItem();
    }
    /**
     * Prev
     *
     * 上一步
     */
    prev() {
        if (this._running || this.active - 1 < 0) {
            return;
        }
        this.type = 'prev';
        --this.active;
        this.showItem();
    }
    /**
     * Done
     *
     * 完成
     */
    done() {
        this.type = 'done';
        this.destroy();
    }
    ngOnDestroy() {
        this.destroy();
    }
}
/** @nocollapse */ OnboardingService.ɵfac = function OnboardingService_Factory(t) { return new (t || OnboardingService)(ɵɵinject(DelonLocaleService), ɵɵinject(ApplicationRef), ɵɵinject(ComponentFactoryResolver), ɵɵinject(Router), ɵɵinject(Injector), ɵɵinject(DOCUMENT), ɵɵinject(AlainConfigService), ɵɵinject(Directionality, 8)); };
/** @nocollapse */ OnboardingService.ɵprov = ɵɵdefineInjectable({ token: OnboardingService, factory: OnboardingService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(OnboardingService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: DelonLocaleService }, { type: ApplicationRef }, { type: ComponentFactoryResolver }, { type: Router }, { type: Injector }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: AlainConfigService }, { type: Directionality, decorators: [{
                type: Optional
            }] }]; }, null); })();

const COMPONENTS = [OnboardingComponent];
class OnboardingModule {
}
/** @nocollapse */ OnboardingModule.ɵmod = ɵɵdefineNgModule({ type: OnboardingModule });
/** @nocollapse */ OnboardingModule.ɵinj = ɵɵdefineInjector({ factory: function OnboardingModule_Factory(t) { return new (t || OnboardingModule)(); }, imports: [[CommonModule, DelonLocaleModule, NzPopoverModule, NzOutletModule, NzButtonModule, NzNoAnimationModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(OnboardingModule, { declarations: [OnboardingComponent], imports: [CommonModule, DelonLocaleModule, NzPopoverModule, NzOutletModule, NzButtonModule, NzNoAnimationModule], exports: [OnboardingComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(OnboardingModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, DelonLocaleModule, NzPopoverModule, NzOutletModule, NzButtonModule, NzNoAnimationModule],
                declarations: COMPONENTS,
                entryComponents: COMPONENTS,
                exports: COMPONENTS,
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { OnboardingComponent, OnboardingModule, OnboardingService };
//# sourceMappingURL=onboarding.js.map
