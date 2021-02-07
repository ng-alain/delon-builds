/**
 * @license ng-alain(cipchk@qq.com) v11.6.0
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/bidi'), require('@angular/common'), require('@angular/core'), require('@angular/router'), require('@delon/theme'), require('@delon/util/config'), require('rxjs'), require('rxjs/operators'), require('@angular/cdk/platform'), require('ng-zorro-antd/button'), require('ng-zorro-antd/core/no-animation'), require('ng-zorro-antd/core/outlet'), require('ng-zorro-antd/popover')) :
    typeof define === 'function' && define.amd ? define('@delon/abc/onboarding', ['exports', '@angular/cdk/bidi', '@angular/common', '@angular/core', '@angular/router', '@delon/theme', '@delon/util/config', 'rxjs', 'rxjs/operators', '@angular/cdk/platform', 'ng-zorro-antd/button', 'ng-zorro-antd/core/no-animation', 'ng-zorro-antd/core/outlet', 'ng-zorro-antd/popover'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.delon = global.delon || {}, global.delon.abc = global.delon.abc || {}, global.delon.abc.onboarding = {}), global.ng.cdk.bidi, global.ng.common, global.ng.core, global.ng.router, global.delon.theme, global.i4, global.rxjs, global.rxjs.operators, global.ng.cdk.platform, global['ng-zorro-antd/button'], global['ng-zorro-antd/core/no-animation'], global['ng-zorro-antd/core/outlet'], global['ng-zorro-antd/popover']));
}(this, (function (exports, i5, i3, i0, i2, i1, i4, rxjs, operators, platform, button, noAnimation, outlet, popover) { 'use strict';

    var OnboardingComponent = /** @class */ (function () {
        function OnboardingComponent(el, doc, platform, cdr) {
            this.el = el;
            this.doc = doc;
            this.platform = platform;
            this.cdr = cdr;
            this.active = 0;
            this.max = 0;
            this.op = new i0.EventEmitter();
            this.running = false;
            this.dir = 'ltr';
        }
        Object.defineProperty(OnboardingComponent.prototype, "first", {
            get: function () {
                return this.active === 0;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(OnboardingComponent.prototype, "last", {
            get: function () {
                return this.active === this.max - 1;
            },
            enumerable: false,
            configurable: true
        });
        OnboardingComponent.prototype._getDoc = function () {
            return this.doc;
        };
        OnboardingComponent.prototype._getWin = function () {
            return this._getDoc().defaultView || window;
        };
        OnboardingComponent.prototype.getLightData = function () {
            var doc = this._getDoc();
            var win = this._getWin();
            var el = doc.querySelector(this.item.selectors);
            if (!el) {
                return null;
            }
            var scrollTop = win.pageYOffset || doc.documentElement.scrollTop || doc.body.scrollTop;
            var scrollLeft = win.pageXOffset || doc.documentElement.scrollLeft || doc.body.scrollLeft;
            var rect = el.getBoundingClientRect();
            var top = rect.top + scrollTop;
            var left = rect.left + scrollLeft;
            var padding = 8;
            var needPadding = top > padding && left > padding;
            var offsetPos = needPadding ? padding : 0;
            var offsetWH = needPadding ? padding * 2 : 0;
            return {
                top: top - offsetPos,
                left: left - offsetPos,
                width: rect.width + offsetWH,
                height: rect.height + offsetWH,
                el: el,
                clientWidth: doc.body.clientWidth,
                clientHeight: doc.body.clientHeight,
            };
        };
        OnboardingComponent.prototype.scroll = function (pos) {
            this.prevSelectorEl = pos.el;
            var scrollY = pos.top - (pos.clientHeight - pos.height) / 2;
            this._getWin().scrollTo({ top: scrollY });
            this.updatePrevElStatus(true);
        };
        OnboardingComponent.prototype.updateRunning = function (status) {
            this.running = status;
            this.cdr.detectChanges();
            if (!status) {
                this.updatePosition();
            }
        };
        OnboardingComponent.prototype.updatePosition = function () {
            if (!this.platform.isBrowser) {
                return;
            }
            var pos = this.getLightData();
            if (pos == null) {
                console.warn("Did not matches selectors [" + this.item.selectors + "]");
                return;
            }
            var lightStyle = this.el.nativeElement.querySelector('.onboarding__light').style;
            lightStyle.top = pos.top + "px";
            lightStyle.left = pos.left + "px";
            lightStyle.width = pos.width + "px";
            lightStyle.height = pos.height + "px";
            this.updatePrevElStatus(false);
            this.scroll(pos);
        };
        OnboardingComponent.prototype.updatePrevElStatus = function (status) {
            if (this.prevSelectorEl) {
                this.prevSelectorEl.classList[status ? 'add' : 'remove']('onboarding__light-el');
            }
        };
        OnboardingComponent.prototype.to = function (type) {
            this.op.emit(type);
        };
        OnboardingComponent.prototype.handleMask = function () {
            if (this.config.maskClosable === true) {
                this.to('done');
            }
        };
        OnboardingComponent.prototype.ngOnDestroy = function () {
            clearTimeout(this.time);
            this.updatePrevElStatus(false);
        };
        return OnboardingComponent;
    }());
    OnboardingComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'onboarding',
                    template: "<div *ngIf=\"!running && config.mask\" class=\"onboarding__mask\" (click)=\"handleMask()\"></div>\n<div\n  *ngIf=\"item\"\n  class=\"onboarding__light\"\n  [class.onboarding__light-hide]=\"running\"\n  [attr.style]=\"item.lightStyle\"\n  nz-popover\n  [nzPopoverTitle]=\"item.title\"\n  [nzPopoverContent]=\"content\"\n  [nzPopoverVisible]=\"!running\"\n  [nzPopoverTrigger]=\"null\"\n  [nzPopoverPlacement]=\"item.position\"\n  [nzPopoverOverlayClassName]=\"item.className\"\n  [nzPopoverOverlayStyle]=\"{ 'max-width.px': item.width, direction: dir }\"\n  [nzNoAnimation]=\"true\"\n></div>\n<ng-template #content>\n  <ng-container *nzStringTemplateOutlet=\"item.content\">\n    <div [innerHTML]=\"item.content\"></div>\n  </ng-container>\n  <div class=\"flex-center-between onboarding__footer\">\n    <span class=\"onboarding__total\">\n      <ng-container *ngIf=\"config.showTotal\">{{ active + 1 }}/{{ max }}</ng-container>\n    </span>\n    <div class=\"onboarding__btns\">\n      <a *ngIf=\"!last && item.skip !== null\" nz-button nzType=\"link\" (click)=\"to('skip')\" nzSize=\"small\" data-btnType=\"skip\">\n        <ng-container *nzStringTemplateOutlet=\"item.skip\">{{ item.skip }}</ng-container>\n      </a>\n      <a *ngIf=\"!first && item.prev !== null\" nz-button (click)=\"to('prev')\" nzSize=\"small\" data-btnType=\"prev\">\n        <ng-container *nzStringTemplateOutlet=\"item.prev\">{{ item.prev }}</ng-container>\n      </a>\n      <a *ngIf=\"!last && item.next !== null\" nz-button (click)=\"to('next')\" nzType=\"primary\" nzSize=\"small\" data-btnType=\"next\">\n        <ng-container *nzStringTemplateOutlet=\"item.next\">{{ item.next }}</ng-container>\n      </a>\n      <a *ngIf=\"last && item.done !== null\" nz-button (click)=\"to('done')\" nzType=\"primary\" nzSize=\"small\" data-btnType=\"done\">\n        <ng-container *nzStringTemplateOutlet=\"item.done\">{{ item.done }}</ng-container>\n      </a>\n    </div>\n  </div>\n</ng-template>\n",
                    host: {
                        '[class.onboarding]': "true",
                        '[class.onboarding-rtl]': "dir === 'rtl'",
                        '[attr.data-onboarding-active]': "active",
                    },
                    preserveWhitespaces: false,
                    changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    encapsulation: i0.ViewEncapsulation.None
                },] }
    ];
    /** @nocollapse */
    OnboardingComponent.ctorParameters = function () { return [
        { type: i0.ElementRef },
        { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [i3.DOCUMENT,] }] },
        { type: platform.Platform },
        { type: i0.ChangeDetectorRef }
    ]; };

    var OnboardingService = /** @class */ (function () {
        function OnboardingService(i18n, appRef, resolver, router, injector, doc, configSrv, directionality) {
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
        OnboardingService.prototype._getDoc = function () {
            return this.doc;
        };
        Object.defineProperty(OnboardingService.prototype, "running", {
            /**
             * Get whether it is booting
             *
             * 获取是否正在引导中
             */
            get: function () {
                return this._running;
            },
            enumerable: false,
            configurable: true
        });
        OnboardingService.prototype.attach = function () {
            var _this = this;
            var compRef = (this.compRef = this.resolver.resolveComponentFactory(OnboardingComponent).create(this.injector));
            this.appRef.attachView(compRef.hostView);
            var compNode = compRef.hostView.rootNodes[0];
            var doc = this._getDoc();
            var cdk = doc.querySelector('.cdk-overlay-container');
            if (cdk) {
                doc.body.insertBefore(compNode, cdk);
            }
            else {
                doc.body.appendChild(compNode);
            }
            this.op$ = this.compRef.instance.op.subscribe(function (type) {
                switch (type) {
                    case 'next':
                        _this.next();
                        break;
                    case 'prev':
                        _this.prev();
                        break;
                    default:
                        _this.done();
                        break;
                }
            });
        };
        OnboardingService.prototype.cancelRunning = function () {
            if (this.running$) {
                this.running$.unsubscribe();
                this.running$ = null;
            }
            return this;
        };
        OnboardingService.prototype.updateRunning = function (status) {
            this._running = status;
            this.compRef.instance.updateRunning(status);
            return this;
        };
        OnboardingService.prototype.destroy = function () {
            this.cancelRunning();
            if (this.compRef) {
                this.appRef.detachView(this.compRef.hostView);
                this.compRef.destroy();
                this.op$.unsubscribe();
            }
        };
        OnboardingService.prototype.showItem = function (isStart) {
            var _this = this;
            if (isStart === void 0) { isStart = false; }
            var items = this.config.items;
            var item = Object.assign(Object.assign({ position: 'bottomLeft', before: rxjs.of(true), after: rxjs.of(true) }, this.i18n.getData('onboarding')), items[this.active]);
            var dir = this.configSrv.get('onboarding').direction || this.directionality.value;
            Object.assign(this.compRef.instance, { item: item, config: this.config, active: this.active, max: items.length, dir: dir });
            var pipes = [
                operators.switchMap(function () { return (item.url ? _this.router.navigateByUrl(item.url) : rxjs.of(true)); }),
                operators.switchMap(function () {
                    var obs = _this.type === 'prev' ? item.after : item.before;
                    return typeof obs === 'number' ? rxjs.of(true).pipe(operators.delay(obs)) : obs;
                }),
            ];
            if (!isStart) {
                pipes.push(operators.delay(1));
            }
            this.updateRunning(true);
            this.running$ = rxjs.of(true)
                .pipe(rxjs.pipe.apply(this, pipes))
                .subscribe(function () { return _this.cancelRunning().updateRunning(false); }, function () { return _this.done(); });
        };
        /**
         * Start a new user guidance
         *
         * 开启新的用户引导流程
         */
        OnboardingService.prototype.start = function (config) {
            if (this.running) {
                return;
            }
            this.destroy();
            this.config = Object.assign({ items: [], mask: true, maskClosable: true, showTotal: false }, config);
            this.active = 0;
            this.type = null;
            this.attach();
            this.showItem(true);
        };
        /**
         * Next
         *
         * 下一步
         */
        OnboardingService.prototype.next = function () {
            if (this._running || this.active + 1 >= this.config.items.length) {
                this.done();
                return;
            }
            this.type = 'next';
            ++this.active;
            this.showItem();
        };
        /**
         * Prev
         *
         * 上一步
         */
        OnboardingService.prototype.prev = function () {
            if (this._running || this.active - 1 < 0) {
                return;
            }
            this.type = 'prev';
            --this.active;
            this.showItem();
        };
        /**
         * Done
         *
         * 完成
         */
        OnboardingService.prototype.done = function () {
            this.type = 'done';
            this.destroy();
        };
        OnboardingService.prototype.ngOnDestroy = function () {
            this.destroy();
        };
        return OnboardingService;
    }());
    /** @nocollapse */ OnboardingService.ɵprov = i0.ɵɵdefineInjectable({ factory: function OnboardingService_Factory() { return new OnboardingService(i0.ɵɵinject(i1.DelonLocaleService), i0.ɵɵinject(i0.ApplicationRef), i0.ɵɵinject(i0.ComponentFactoryResolver), i0.ɵɵinject(i2.Router), i0.ɵɵinject(i0.INJECTOR), i0.ɵɵinject(i3.DOCUMENT), i0.ɵɵinject(i4.AlainConfigService), i0.ɵɵinject(i5.Directionality, 8)); }, token: OnboardingService, providedIn: "root" });
    OnboardingService.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    OnboardingService.ctorParameters = function () { return [
        { type: i1.DelonLocaleService },
        { type: i0.ApplicationRef },
        { type: i0.ComponentFactoryResolver },
        { type: i2.Router },
        { type: i0.Injector },
        { type: undefined, decorators: [{ type: i0.Inject, args: [i3.DOCUMENT,] }] },
        { type: i4.AlainConfigService },
        { type: i5.Directionality, decorators: [{ type: i0.Optional }] }
    ]; };

    var COMPONENTS = [OnboardingComponent];
    var OnboardingModule = /** @class */ (function () {
        function OnboardingModule() {
        }
        return OnboardingModule;
    }());
    OnboardingModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [i3.CommonModule, i1.DelonLocaleModule, popover.NzPopoverModule, outlet.NzOutletModule, button.NzButtonModule, noAnimation.NzNoAnimationModule],
                    declarations: COMPONENTS,
                    entryComponents: COMPONENTS,
                    exports: COMPONENTS,
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.OnboardingComponent = OnboardingComponent;
    exports.OnboardingModule = OnboardingModule;
    exports.OnboardingService = OnboardingService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=onboarding.umd.js.map
