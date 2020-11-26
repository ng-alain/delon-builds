/**
 * @license ng-alain(cipchk@qq.com) v10.1.2
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/router'), require('@delon/theme'), require('rxjs'), require('rxjs/operators'), require('@angular/cdk/platform'), require('@delon/util'), require('ng-zorro-antd/button'), require('ng-zorro-antd/core/no-animation'), require('ng-zorro-antd/core/outlet'), require('ng-zorro-antd/popover')) :
    typeof define === 'function' && define.amd ? define('@delon/abc/onboarding', ['exports', '@angular/common', '@angular/core', '@angular/router', '@delon/theme', 'rxjs', 'rxjs/operators', '@angular/cdk/platform', '@delon/util', 'ng-zorro-antd/button', 'ng-zorro-antd/core/no-animation', 'ng-zorro-antd/core/outlet', 'ng-zorro-antd/popover'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.delon = global.delon || {}, global.delon.abc = global.delon.abc || {}, global.delon.abc.onboarding = {}), global.ng.common, global.ng.core, global.ng.router, global.delon.theme, global.rxjs, global.rxjs.operators, global.ng.cdk.platform, global.delon.util, global['ng-zorro-antd/button'], global['ng-zorro-antd/core/no-animation'], global['ng-zorro-antd/core/outlet'], global['ng-zorro-antd/popover']));
}(this, (function (exports, i3, i0, i2, i1, rxjs, operators, platform, util, button, noAnimation, outlet, popover) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: onboarding.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function OnboardingLightData() { }
    if (false) {
        /** @type {?} */
        OnboardingLightData.prototype.el;
        /** @type {?} */
        OnboardingLightData.prototype.top;
        /** @type {?} */
        OnboardingLightData.prototype.left;
        /** @type {?} */
        OnboardingLightData.prototype.width;
        /** @type {?} */
        OnboardingLightData.prototype.height;
        /** @type {?} */
        OnboardingLightData.prototype.clientHeight;
        /** @type {?} */
        OnboardingLightData.prototype.clientWidth;
    }
    var OnboardingComponent = /** @class */ (function () {
        /**
         * @param {?} el
         * @param {?} doc
         * @param {?} platform
         * @param {?} cdr
         */
        function OnboardingComponent(el, doc, platform, cdr) {
            this.el = el;
            this.doc = doc;
            this.platform = platform;
            this.cdr = cdr;
            this.active = 0;
            this.max = 0;
            this.op = new i0.EventEmitter();
            this.running = false;
        }
        Object.defineProperty(OnboardingComponent.prototype, "first", {
            /**
             * @return {?}
             */
            get: function () {
                return this.active === 0;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(OnboardingComponent.prototype, "last", {
            /**
             * @return {?}
             */
            get: function () {
                return this.active === this.max - 1;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @private
         * @return {?}
         */
        OnboardingComponent.prototype._getDoc = function () {
            return this.doc;
        };
        /**
         * @private
         * @return {?}
         */
        OnboardingComponent.prototype._getWin = function () {
            return this._getDoc().defaultView || window;
        };
        /**
         * @private
         * @return {?}
         */
        OnboardingComponent.prototype.getLightData = function () {
            /** @type {?} */
            var doc = this._getDoc();
            /** @type {?} */
            var win = this._getWin();
            /** @type {?} */
            var el = ( /** @type {?} */(doc.querySelector(this.item.selectors)));
            if (!el) {
                return null;
            }
            /** @type {?} */
            var scrollTop = win.pageYOffset || doc.documentElement.scrollTop || doc.body.scrollTop;
            /** @type {?} */
            var scrollLeft = win.pageXOffset || doc.documentElement.scrollLeft || doc.body.scrollLeft;
            /** @type {?} */
            var rect = el.getBoundingClientRect();
            /** @type {?} */
            var top = rect.top + scrollTop;
            /** @type {?} */
            var left = rect.left + scrollLeft;
            /** @type {?} */
            var padding = 8;
            /** @type {?} */
            var needPadding = top > padding && left > padding;
            /** @type {?} */
            var offsetPos = needPadding ? padding : 0;
            /** @type {?} */
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
        /**
         * @private
         * @param {?} pos
         * @return {?}
         */
        OnboardingComponent.prototype.scroll = function (pos) {
            this.prevSelectorEl = pos.el;
            /** @type {?} */
            var scrollY = pos.top - (pos.clientHeight - pos.height) / 2;
            this._getWin().scrollTo({ top: scrollY });
            this.updatePrevElStatus(true);
        };
        /**
         * @param {?} status
         * @return {?}
         */
        OnboardingComponent.prototype.updateRunning = function (status) {
            this.running = status;
            this.cdr.detectChanges();
            if (!status) {
                this.updatePosition();
            }
        };
        /**
         * @private
         * @return {?}
         */
        OnboardingComponent.prototype.updatePosition = function () {
            if (!this.platform.isBrowser) {
                return;
            }
            /** @type {?} */
            var pos = this.getLightData();
            if (pos == null) {
                console.warn("Did not matches selectors [" + this.item.selectors + "]");
                return;
            }
            /** @type {?} */
            var lightStyle = (( /** @type {?} */(this.el.nativeElement.querySelector('.onboarding__light')))).style;
            lightStyle.top = pos.top + "px";
            lightStyle.left = pos.left + "px";
            lightStyle.width = pos.width + "px";
            lightStyle.height = pos.height + "px";
            this.updatePrevElStatus(false);
            this.scroll(pos);
        };
        /**
         * @private
         * @param {?} status
         * @return {?}
         */
        OnboardingComponent.prototype.updatePrevElStatus = function (status) {
            if (this.prevSelectorEl) {
                this.prevSelectorEl.classList[status ? 'add' : 'remove']('onboarding__light-el');
            }
        };
        /**
         * @param {?} type
         * @return {?}
         */
        OnboardingComponent.prototype.to = function (type) {
            this.op.emit(type);
        };
        /**
         * @return {?}
         */
        OnboardingComponent.prototype.handleMask = function () {
            if (this.config.maskClosable === true) {
                this.to('done');
            }
        };
        /**
         * @return {?}
         */
        OnboardingComponent.prototype.ngOnDestroy = function () {
            clearTimeout(this.time);
            this.updatePrevElStatus(false);
        };
        return OnboardingComponent;
    }());
    OnboardingComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'onboarding',
                    template: "<div *ngIf=\"!running && config.mask\" class=\"onboarding__mask\" (click)=\"handleMask()\"></div>\n<div\n  *ngIf=\"item\"\n  class=\"onboarding__light\"\n  [class.onboarding__light-hide]=\"running\"\n  [attr.style]=\"item.lightStyle\"\n  nz-popover\n  [nzPopoverTitle]=\"item.title\"\n  [nzPopoverContent]=\"content\"\n  [nzPopoverVisible]=\"!running\"\n  [nzPopoverTrigger]=\"null\"\n  [nzPopoverPlacement]=\"item.position\"\n  [nzPopoverOverlayClassName]=\"item.className\"\n  [nzPopoverOverlayStyle]=\"{ 'max-width.px': item.width }\"\n  [nzNoAnimation]=\"true\"\n></div>\n<ng-template #content>\n  <ng-container *nzStringTemplateOutlet=\"item.content\">\n    <div [innerHTML]=\"item.content\"></div>\n  </ng-container>\n  <div class=\"flex-center-between onboarding__footer\">\n    <span class=\"onboarding__total\">\n      <ng-container *ngIf=\"config.showTotal\">{{ active + 1 }}/{{ max }}</ng-container>\n    </span>\n    <div class=\"onboarding__btns\">\n      <a *ngIf=\"!last && item.skip !== null\" nz-button nzType=\"link\" (click)=\"to('skip')\" nzSize=\"small\" data-btnType=\"skip\">\n        <ng-container *nzStringTemplateOutlet=\"item.skip\">{{ item.skip }}</ng-container>\n      </a>\n      <a *ngIf=\"!first && item.prev !== null\" nz-button (click)=\"to('prev')\" nzSize=\"small\" data-btnType=\"prev\">\n        <ng-container *nzStringTemplateOutlet=\"item.prev\">{{ item.prev }}</ng-container>\n      </a>\n      <a *ngIf=\"!last && item.next !== null\" nz-button (click)=\"to('next')\" nzType=\"primary\" nzSize=\"small\" data-btnType=\"next\">\n        <ng-container *nzStringTemplateOutlet=\"item.next\">{{ item.next }}</ng-container>\n      </a>\n      <a *ngIf=\"last && item.done !== null\" nz-button (click)=\"to('done')\" nzType=\"primary\" nzSize=\"small\" data-btnType=\"done\">\n        <ng-container *nzStringTemplateOutlet=\"item.done\">{{ item.done }}</ng-container>\n      </a>\n    </div>\n  </div>\n</ng-template>\n",
                    host: {
                        '[class.onboarding]': "true",
                        '[attr.data-onboarding-active]': "active",
                    },
                    preserveWhitespaces: false,
                    changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    encapsulation: i0.ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    OnboardingComponent.ctorParameters = function () { return [
        { type: i0.ElementRef },
        { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [i3.DOCUMENT,] }] },
        { type: platform.Platform },
        { type: i0.ChangeDetectorRef }
    ]; };
    if (false) {
        /**
         * @type {?}
         * @private
         */
        OnboardingComponent.prototype.time;
        /**
         * @type {?}
         * @private
         */
        OnboardingComponent.prototype.prevSelectorEl;
        /** @type {?} */
        OnboardingComponent.prototype.config;
        /** @type {?} */
        OnboardingComponent.prototype.item;
        /** @type {?} */
        OnboardingComponent.prototype.active;
        /** @type {?} */
        OnboardingComponent.prototype.max;
        /** @type {?} */
        OnboardingComponent.prototype.op;
        /** @type {?} */
        OnboardingComponent.prototype.running;
        /**
         * @type {?}
         * @private
         */
        OnboardingComponent.prototype.el;
        /**
         * @type {?}
         * @private
         */
        OnboardingComponent.prototype.doc;
        /**
         * @type {?}
         * @private
         */
        OnboardingComponent.prototype.platform;
        /**
         * @type {?}
         * @private
         */
        OnboardingComponent.prototype.cdr;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: onboarding.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var OnboardingService = /** @class */ (function () {
        /**
         * @param {?} i18n
         * @param {?} appRef
         * @param {?} resolver
         * @param {?} router
         * @param {?} injector
         * @param {?} doc
         */
        function OnboardingService(i18n, appRef, resolver, router, injector, doc) {
            this.i18n = i18n;
            this.appRef = appRef;
            this.resolver = resolver;
            this.router = router;
            this.injector = injector;
            this.doc = doc;
            this.active = 0;
            this.running$ = null;
            this._running = false;
            this.type = null;
        }
        /**
         * @private
         * @return {?}
         */
        OnboardingService.prototype._getDoc = function () {
            return this.doc;
        };
        Object.defineProperty(OnboardingService.prototype, "running", {
            /**
             * @return {?}
             */
            get: function () {
                return this._running;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @private
         * @return {?}
         */
        OnboardingService.prototype.attach = function () {
            var _this = this;
            /** @type {?} */
            var compRef = (this.compRef = this.resolver.resolveComponentFactory(OnboardingComponent).create(this.injector));
            this.appRef.attachView(compRef.hostView);
            /** @type {?} */
            var compNode = (( /** @type {?} */(compRef.hostView))).rootNodes[0];
            /** @type {?} */
            var doc = this._getDoc();
            /** @type {?} */
            var cdk = ( /** @type {?} */(doc.querySelector('.cdk-overlay-container')));
            if (cdk) {
                doc.body.insertBefore(compNode, cdk);
            }
            else {
                doc.body.appendChild(compNode);
            }
            this.op$ = this.compRef.instance.op.subscribe(( /**
             * @param {?} type
             * @return {?}
             */function (type) {
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
            }));
        };
        /**
         * @private
         * @template THIS
         * @this {THIS}
         * @return {THIS}
         */
        OnboardingService.prototype.cancelRunning = function () {
            if (( /** @type {?} */(this)).running$) {
                ( /** @type {?} */(this)).running$.unsubscribe();
                ( /** @type {?} */(this)).running$ = null;
            }
            return ( /** @type {?} */(this));
        };
        /**
         * @private
         * @template THIS
         * @this {THIS}
         * @param {?} status
         * @return {THIS}
         */
        OnboardingService.prototype.updateRunning = function (status) {
            ( /** @type {?} */(this))._running = status;
            ( /** @type {?} */(( /** @type {?} */(this)).compRef)).instance.updateRunning(status);
            return ( /** @type {?} */(this));
        };
        /**
         * @private
         * @return {?}
         */
        OnboardingService.prototype.destroy = function () {
            this.cancelRunning();
            if (this.compRef) {
                this.appRef.detachView(this.compRef.hostView);
                this.compRef.destroy();
                this.op$.unsubscribe();
            }
        };
        /**
         * @private
         * @param {?=} isStart
         * @return {?}
         */
        OnboardingService.prototype.showItem = function (isStart) {
            var _this = this;
            if (isStart === void 0) { isStart = false; }
            /** @type {?} */
            var items = ( /** @type {?} */(this.config.items));
            /** @type {?} */
            var item = ( /** @type {?} */(Object.assign(Object.assign({ position: 'bottomLeft', before: rxjs.of(true), after: rxjs.of(true) }, this.i18n.getData('onboarding')), items[this.active])));
            Object.assign(this.compRef.instance, { item: item, config: this.config, active: this.active, max: items.length });
            /** @type {?} */
            var pipes = [
                operators.switchMap(( /**
                 * @return {?}
                 */function () { return (item.url ? _this.router.navigateByUrl(item.url) : rxjs.of(true)); })),
                operators.switchMap(( /**
                 * @return {?}
                 */function () {
                    /** @type {?} */
                    var obs = _this.type === 'prev' ? ( /** @type {?} */(item.after)) : ( /** @type {?} */(item.before));
                    return typeof obs === 'number' ? rxjs.of(true).pipe(operators.delay(obs)) : obs;
                })),
            ];
            if (!isStart) {
                pipes.push(operators.delay(1));
            }
            this.updateRunning(true);
            this.running$ = rxjs.of(true)
                .pipe(rxjs.pipe.apply(this, pipes))
                .subscribe(( /**
         * @template THIS
         * @this {THIS}
         * @return {THIS}
         */function () { return _this.cancelRunning().updateRunning(false); }), ( /**
             * @return {?}
             */function () { return _this.done(); }));
        };
        /**
         * @param {?} config
         * @return {?}
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
         * @return {?}
         */
        OnboardingService.prototype.next = function () {
            if (this._running || this.active + 1 >= ( /** @type {?} */(this.config.items)).length) {
                this.done();
                return;
            }
            this.type = 'next';
            ++this.active;
            this.showItem();
        };
        /**
         * @return {?}
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
         * @return {?}
         */
        OnboardingService.prototype.done = function () {
            this.type = 'done';
            this.destroy();
        };
        /**
         * @return {?}
         */
        OnboardingService.prototype.ngOnDestroy = function () {
            this.destroy();
        };
        return OnboardingService;
    }());
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
        { type: undefined, decorators: [{ type: i0.Inject, args: [i3.DOCUMENT,] }] }
    ]; };
    /** @nocollapse */ OnboardingService.ɵprov = i0.ɵɵdefineInjectable({ factory: function OnboardingService_Factory() { return new OnboardingService(i0.ɵɵinject(i1.DelonLocaleService), i0.ɵɵinject(i0.ApplicationRef), i0.ɵɵinject(i0.ComponentFactoryResolver), i0.ɵɵinject(i2.Router), i0.ɵɵinject(i0.INJECTOR), i0.ɵɵinject(i3.DOCUMENT)); }, token: OnboardingService, providedIn: "root" });
    if (false) {
        /**
         * @type {?}
         * @private
         */
        OnboardingService.prototype.compRef;
        /**
         * @type {?}
         * @private
         */
        OnboardingService.prototype.op$;
        /**
         * @type {?}
         * @private
         */
        OnboardingService.prototype.config;
        /**
         * @type {?}
         * @private
         */
        OnboardingService.prototype.active;
        /**
         * @type {?}
         * @private
         */
        OnboardingService.prototype.running$;
        /**
         * @type {?}
         * @private
         */
        OnboardingService.prototype._running;
        /**
         * @type {?}
         * @private
         */
        OnboardingService.prototype.type;
        /**
         * @type {?}
         * @private
         */
        OnboardingService.prototype.i18n;
        /**
         * @type {?}
         * @private
         */
        OnboardingService.prototype.appRef;
        /**
         * @type {?}
         * @private
         */
        OnboardingService.prototype.resolver;
        /**
         * @type {?}
         * @private
         */
        OnboardingService.prototype.router;
        /**
         * @type {?}
         * @private
         */
        OnboardingService.prototype.injector;
        /**
         * @type {?}
         * @private
         */
        OnboardingService.prototype.doc;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: onboarding.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var COMPONENTS = [OnboardingComponent];
    var OnboardingModule = /** @class */ (function () {
        function OnboardingModule() {
        }
        return OnboardingModule;
    }());
    OnboardingModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [i3.CommonModule, i1.DelonLocaleModule, util.DelonUtilModule, popover.NzPopoverModule, outlet.NzOutletModule, button.NzButtonModule, noAnimation.NzNoAnimationModule],
                    declarations: COMPONENTS,
                    entryComponents: COMPONENTS,
                    exports: COMPONENTS,
                },] }
    ];

    /**
     * @fileoverview added by tsickle
     * Generated from: public_api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: onboarding.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.OnboardingComponent = OnboardingComponent;
    exports.OnboardingModule = OnboardingModule;
    exports.OnboardingService = OnboardingService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=onboarding.umd.js.map
