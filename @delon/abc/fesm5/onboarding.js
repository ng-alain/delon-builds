import { DOCUMENT, CommonModule } from '@angular/common';
import { EventEmitter, Component, ChangeDetectionStrategy, ViewEncapsulation, ElementRef, Optional, Inject, ChangeDetectorRef, NgModule, Injectable, ApplicationRef, ComponentFactoryResolver, Injector, ɵɵdefineInjectable, ɵɵinject, INJECTOR } from '@angular/core';
import { DelonLocaleModule, DelonLocaleService } from '@delon/theme';
import { DelonUtilModule } from '@delon/util';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzNoAnimationModule } from 'ng-zorro-antd/core/no-animation';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { Platform } from '@angular/cdk/platform';
import { __assign } from 'tslib';

/**
 * @fileoverview added by tsickle
 * Generated from: onboarding.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    function OnboardingComponent(el, doc, platform, cdr) {
        this.el = el;
        this.doc = doc;
        this.platform = platform;
        this.cdr = cdr;
        this.active = 0;
        this.max = 0;
        this.op = new EventEmitter();
        this.visible = false;
    }
    Object.defineProperty(OnboardingComponent.prototype, "first", {
        get: /**
         * @return {?}
         */
        function () {
            return this.active === 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OnboardingComponent.prototype, "last", {
        get: /**
         * @return {?}
         */
        function () {
            return this.active === this.max - 1;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    OnboardingComponent.prototype._getDoc = /**
     * @private
     * @return {?}
     */
    function () {
        return this.doc;
    };
    /**
     * @private
     * @return {?}
     */
    OnboardingComponent.prototype._getWin = /**
     * @private
     * @return {?}
     */
    function () {
        return this._getDoc().defaultView || window;
    };
    /**
     * @private
     * @return {?}
     */
    OnboardingComponent.prototype.getLightData = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var doc = this._getDoc();
        /** @type {?} */
        var win = this._getWin();
        /** @type {?} */
        var el = (/** @type {?} */ (doc.querySelector(this.item.selectors)));
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
    OnboardingComponent.prototype.scroll = /**
     * @private
     * @param {?} pos
     * @return {?}
     */
    function (pos) {
        this.prevSelectorEl = pos.el;
        /** @type {?} */
        var scrollY = pos.top - (pos.clientHeight - pos.height) / 2;
        this._getWin().scrollTo({ top: scrollY });
        this.updatePrevElStatus(true);
        this.setVisible(true);
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    OnboardingComponent.prototype.updatePosition = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        var _this = this;
        if (options === void 0) { options = { time: 300 }; }
        if (!this.platform.isBrowser) {
            return;
        }
        /** @type {?} */
        var pos = this.getLightData();
        if (pos == null) {
            this.setVisible(false);
            return;
        }
        /** @type {?} */
        var lightStyle = ((/** @type {?} */ (this.el.nativeElement.querySelector('.onboarding__light')))).style;
        lightStyle.top = pos.top + "px";
        lightStyle.left = pos.left + "px";
        lightStyle.width = pos.width + "px";
        lightStyle.height = pos.height + "px";
        this.updatePrevElStatus(false);
        this.setVisible(false);
        if (options.time === 0 || !this.config.animation) {
            this.scroll(pos);
            return;
        }
        this.time = setTimeout((/**
         * @return {?}
         */
        function () { return _this.scroll(pos); }), options.time);
    };
    /**
     * @private
     * @param {?} status
     * @return {?}
     */
    OnboardingComponent.prototype.setVisible = /**
     * @private
     * @param {?} status
     * @return {?}
     */
    function (status) {
        this.visible = status;
        this.cdr.detectChanges();
    };
    /**
     * @private
     * @param {?} status
     * @return {?}
     */
    OnboardingComponent.prototype.updatePrevElStatus = /**
     * @private
     * @param {?} status
     * @return {?}
     */
    function (status) {
        if (this.prevSelectorEl) {
            this.prevSelectorEl.classList[status ? 'add' : 'remove']('onboarding__light-el');
        }
    };
    /**
     * @param {?} type
     * @return {?}
     */
    OnboardingComponent.prototype.to = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        this.op.emit(type);
    };
    /**
     * @return {?}
     */
    OnboardingComponent.prototype.handleMask = /**
     * @return {?}
     */
    function () {
        if (this.config.maskClosable === true) {
            this.to('done');
        }
    };
    /**
     * @return {?}
     */
    OnboardingComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        clearTimeout(this.time);
        this.updatePrevElStatus(false);
    };
    OnboardingComponent.decorators = [
        { type: Component, args: [{
                    selector: 'onboarding',
                    template: "<div *ngIf=\"visible && config.mask\" class=\"onboarding__mask\" (click)=\"handleMask()\"></div>\n<div\n  *ngIf=\"item\"\n  class=\"onboarding__light\"\n  [class.onboarding__light-ant]=\"config.animation\"\n  [class.onboarding__light-hide]=\"!visible\"\n  nz-popover\n  [nzPopoverTitle]=\"item.title\"\n  [nzPopoverContent]=\"content\"\n  [nzVisible]=\"visible\"\n  [nzPopoverTrigger]=\"null\"\n  [nzPopoverPlacement]=\"item.position\"\n  [nzNoAnimation]=\"true\"\n  [nzOverlayClassName]=\"item.className\"\n  [nzOverlayStyle]=\"{ 'max-width.px': item.width }\"\n></div>\n<ng-template #content>\n  <ng-container *nzStringTemplateOutlet=\"item.content\">{{ item.content }}</ng-container>\n  <div class=\"flex-center-between onboarding__footer\">\n    <span class=\"onboarding__total\">\n      <ng-container *ngIf=\"config.showTotal\">{{ active + 1 }}/{{ max }}</ng-container>\n    </span>\n    <div class=\"onboarding__btns\">\n      <a *ngIf=\"!last && item.skip !== null\" nz-button nzType=\"link\" (click)=\"to('skip')\" nzSize=\"small\" data-btnType=\"skip\">\n        <ng-container *nzStringTemplateOutlet=\"item.skip\">{{ item.skip }}</ng-container>\n      </a>\n      <a *ngIf=\"!first && item.prev !== null\" nz-button (click)=\"to('prev')\" nzSize=\"small\" data-btnType=\"prev\">\n        <ng-container *nzStringTemplateOutlet=\"item.prev\">{{ item.prev }}</ng-container>\n      </a>\n      <a *ngIf=\"!last && item.next !== null\" nz-button (click)=\"to('next')\" nzType=\"primary\" nzSize=\"small\" data-btnType=\"next\">\n        <ng-container *nzStringTemplateOutlet=\"item.next\">{{ item.next }}</ng-container>\n      </a>\n      <a *ngIf=\"last && item.done !== null\" nz-button (click)=\"to('done')\" nzType=\"primary\" nzSize=\"small\" data-btnType=\"done\">\n        <ng-container *nzStringTemplateOutlet=\"item.done\">{{ item.done }}</ng-container>\n      </a>\n    </div>\n  </div>\n</ng-template>\n",
                    host: {
                        '[class.onboarding]': "true",
                        '[attr.data-onboarding-active]': "active",
                    },
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    OnboardingComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] },
        { type: Platform },
        { type: ChangeDetectorRef }
    ]; };
    return OnboardingComponent;
}());
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
    OnboardingComponent.prototype.visible;
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
 * Generated from: onboarding.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var OnboardingModule = /** @class */ (function () {
    function OnboardingModule() {
    }
    OnboardingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, DelonLocaleModule, DelonUtilModule, NzPopoverModule, NzOutletModule, NzButtonModule, NzNoAnimationModule],
                    declarations: [OnboardingComponent],
                    entryComponents: [OnboardingComponent],
                },] }
    ];
    return OnboardingModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: onboarding.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var OnboardingService = /** @class */ (function () {
    function OnboardingService(i18n, appRef, resolver, injector, doc) {
        this.i18n = i18n;
        this.appRef = appRef;
        this.resolver = resolver;
        this.injector = injector;
        this.doc = doc;
        this.active = 0;
    }
    /**
     * @private
     * @return {?}
     */
    OnboardingService.prototype._getDoc = /**
     * @private
     * @return {?}
     */
    function () {
        return this.doc;
    };
    /**
     * @private
     * @return {?}
     */
    OnboardingService.prototype.attach = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var compRef = (this.compRef = this.resolver.resolveComponentFactory(OnboardingComponent).create(this.injector));
        this.appRef.attachView(compRef.hostView);
        /** @type {?} */
        var compNode = ((/** @type {?} */ (compRef.hostView))).rootNodes[0];
        /** @type {?} */
        var doc = this._getDoc();
        /** @type {?} */
        var cdk = (/** @type {?} */ (doc.querySelector('.cdk-overlay-container')));
        if (cdk) {
            doc.body.insertBefore(compNode, cdk);
        }
        else {
            doc.body.appendChild(compNode);
        }
        this.op$ = this.compRef.instance.op.subscribe((/**
         * @param {?} type
         * @return {?}
         */
        function (type) {
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
     * @return {?}
     */
    OnboardingService.prototype.destroy = /**
     * @private
     * @return {?}
     */
    function () {
        this.appRef.detachView(this.compRef.hostView);
        this.compRef.destroy();
        this.op$.unsubscribe();
    };
    /**
     * @private
     * @param {?=} cleanTime
     * @return {?}
     */
    OnboardingService.prototype.showItem = /**
     * @private
     * @param {?=} cleanTime
     * @return {?}
     */
    function (cleanTime) {
        var _this = this;
        if (cleanTime === void 0) { cleanTime = false; }
        /** @type {?} */
        var items = (/** @type {?} */ (this.config.items));
        /** @type {?} */
        var item = (/** @type {?} */ (__assign(__assign({ position: 'bottomLeft' }, this.i18n.getData('onboarding')), items[this.active])));
        Object.assign(this.compRef.instance, { item: item, config: this.config, active: this.active, max: items.length });
        setTimeout((/**
         * @return {?}
         */
        function () { return _this.compRef.instance.updatePosition({ time: cleanTime ? 0 : 300 }); }));
    };
    /**
     * @param {?} config
     * @return {?}
     */
    OnboardingService.prototype.start = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        this.config = __assign({ items: [], mask: true, maskClosable: true, animation: false, showTotal: false }, config);
        this.active = 0;
        this.attach();
        this.showItem(true);
    };
    /**
     * @return {?}
     */
    OnboardingService.prototype.next = /**
     * @return {?}
     */
    function () {
        if (this.active + 1 >= (/** @type {?} */ (this.config.items)).length) {
            this.done();
            return;
        }
        ++this.active;
        this.showItem();
    };
    /**
     * @return {?}
     */
    OnboardingService.prototype.prev = /**
     * @return {?}
     */
    function () {
        if (this.active - 1 < 0) {
            return;
        }
        --this.active;
        this.showItem();
    };
    /**
     * @return {?}
     */
    OnboardingService.prototype.done = /**
     * @return {?}
     */
    function () {
        this.destroy();
    };
    /**
     * @return {?}
     */
    OnboardingService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy();
    };
    OnboardingService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    OnboardingService.ctorParameters = function () { return [
        { type: DelonLocaleService },
        { type: ApplicationRef },
        { type: ComponentFactoryResolver },
        { type: Injector },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    /** @nocollapse */ OnboardingService.ɵprov = ɵɵdefineInjectable({ factory: function OnboardingService_Factory() { return new OnboardingService(ɵɵinject(DelonLocaleService), ɵɵinject(ApplicationRef), ɵɵinject(ComponentFactoryResolver), ɵɵinject(INJECTOR), ɵɵinject(DOCUMENT)); }, token: OnboardingService, providedIn: "root" });
    return OnboardingService;
}());
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
    OnboardingService.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    OnboardingService.prototype.doc;
}

/**
 * @fileoverview added by tsickle
 * Generated from: onboarding.types.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function OnboardingConfig() { }
if (false) {
    /**
     * Onboarding items
     * @type {?|undefined}
     */
    OnboardingConfig.prototype.items;
    /**
     * Whether to show mask or not, Default: `true`
     * @type {?|undefined}
     */
    OnboardingConfig.prototype.mask;
    /**
     * Clicking on the mask (area outside the onboarding) to close the onboarding or not, Default: `true`
     * @type {?|undefined}
     */
    OnboardingConfig.prototype.maskClosable;
    /**
     * Whether to animate, Default: `false`
     * @type {?|undefined}
     */
    OnboardingConfig.prototype.animation;
    /**
     * Whether to show total, Default: `true`
     * @type {?|undefined}
     */
    OnboardingConfig.prototype.showTotal;
}
/**
 * @record
 */
function OnboardingItem() { }
if (false) {
    /**
     * The CSS selector, which identifies the html element you want to describe
     * @type {?}
     */
    OnboardingItem.prototype.selectors;
    /**
     * Positioning of the selector element, relative to the contents of the children, Default: `bottomLeft`
     * @type {?|undefined}
     */
    OnboardingItem.prototype.position;
    /**
     * Class name of the panel
     * @type {?|undefined}
     */
    OnboardingItem.prototype.className;
    /**
     * Width of the panel
     * @type {?|undefined}
     */
    OnboardingItem.prototype.width;
    /**
     * Title text of the panel
     * @type {?|undefined}
     */
    OnboardingItem.prototype.title;
    /**
     * Content text of the panel
     * @type {?|undefined}
     */
    OnboardingItem.prototype.content;
    /**
     * Skip button of the panel
     * - `null` Don't show
     * @type {?|undefined}
     */
    OnboardingItem.prototype.skip;
    /**
     * Prev button of the panel
     * - `null` Don't show
     * @type {?|undefined}
     */
    OnboardingItem.prototype.prev;
    /**
     * Next button of the panel
     * - `null` Don't show
     * @type {?|undefined}
     */
    OnboardingItem.prototype.next;
    /**
     * Done button of the panel
     * - `null` Don't show
     * @type {?|undefined}
     */
    OnboardingItem.prototype.done;
}

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: onboarding.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { OnboardingModule, OnboardingService, OnboardingComponent as ɵOnboardingComponent };
//# sourceMappingURL=onboarding.js.map
