import { __decorate, __metadata } from 'tslib';
import { Platform } from '@angular/cdk/platform';
import { EventEmitter, Component, ChangeDetectionStrategy, ViewEncapsulation, ElementRef, Input, Output, NgModule } from '@angular/core';
import { G2Service } from '@delon/chart/core';
import { InputNumber, DelonUtilModule } from '@delon/util';
import { Subject, fromEvent } from 'rxjs';
import { takeUntil, filter, debounceTime } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: custom.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class G2CustomComponent {
    // #endregion
    /**
     * @param {?} el
     * @param {?} srv
     * @param {?} platform
     */
    constructor(el, srv, platform) {
        this.el = el;
        this.srv = srv;
        this.platform = platform;
        this.destroy$ = new Subject();
        this._install = false;
        // #region fields
        this.delay = 0;
        this.resizeTime = 0;
        this.render = new EventEmitter();
        this.resize = new EventEmitter();
        this.destroy = new EventEmitter();
        this.theme = (/** @type {?} */ (srv.cog.theme));
        this.srv.notify
            .pipe(takeUntil(this.destroy$), filter((/**
         * @return {?}
         */
        () => !this._install)))
            .subscribe((/**
         * @return {?}
         */
        () => this.load()));
    }
    /**
     * @private
     * @return {?}
     */
    load() {
        this._install = true;
        setTimeout((/**
         * @return {?}
         */
        () => this.renderChart()), this.delay);
    }
    /**
     * @private
     * @return {?}
     */
    renderChart() {
        this.el.nativeElement.innerHTML = '';
        this.render.emit(this.el);
        this.installResizeEvent();
    }
    /**
     * @private
     * @return {?}
     */
    installResizeEvent() {
        if (this.resizeTime <= 0)
            return;
        fromEvent(window, 'resize')
            .pipe(takeUntil(this.destroy$), debounceTime(Math.min(200, this.resizeTime)))
            .subscribe((/**
         * @return {?}
         */
        () => this.resize.emit(this.el)));
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (!this.platform.isBrowser) {
            return;
        }
        if (((/** @type {?} */ (window))).G2.Chart) {
            this.load();
        }
        else {
            this.srv.libLoad();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy.emit(this.el);
        this.destroy$.next();
        this.destroy$.complete();
    }
}
G2CustomComponent.decorators = [
    { type: Component, args: [{
                selector: 'g2,g2-custom',
                exportAs: 'g2Custom',
                template: ` <ng-content></ng-content> `,
                host: {
                    '[style.height.px]': 'height',
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
G2CustomComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: G2Service },
    { type: Platform }
];
G2CustomComponent.propDecorators = {
    delay: [{ type: Input }],
    height: [{ type: Input }],
    resizeTime: [{ type: Input }],
    theme: [{ type: Input }],
    render: [{ type: Output }],
    resize: [{ type: Output }],
    destroy: [{ type: Output }]
};
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2CustomComponent.prototype, "delay", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Number)
], G2CustomComponent.prototype, "height", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2CustomComponent.prototype, "resizeTime", void 0);
if (false) {
    /** @type {?} */
    G2CustomComponent.ngAcceptInputType_delay;
    /** @type {?} */
    G2CustomComponent.ngAcceptInputType_height;
    /** @type {?} */
    G2CustomComponent.ngAcceptInputType_resizeTime;
    /**
     * @type {?}
     * @private
     */
    G2CustomComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    G2CustomComponent.prototype._install;
    /** @type {?} */
    G2CustomComponent.prototype.delay;
    /** @type {?} */
    G2CustomComponent.prototype.height;
    /** @type {?} */
    G2CustomComponent.prototype.resizeTime;
    /** @type {?} */
    G2CustomComponent.prototype.theme;
    /** @type {?} */
    G2CustomComponent.prototype.render;
    /** @type {?} */
    G2CustomComponent.prototype.resize;
    /** @type {?} */
    G2CustomComponent.prototype.destroy;
    /**
     * @type {?}
     * @private
     */
    G2CustomComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    G2CustomComponent.prototype.srv;
    /**
     * @type {?}
     * @private
     */
    G2CustomComponent.prototype.platform;
}

/**
 * @fileoverview added by tsickle
 * Generated from: custom.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [G2CustomComponent];
class G2CustomModule {
}
G2CustomModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, DelonUtilModule],
                declarations: [...COMPONENTS],
                exports: [...COMPONENTS],
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: g2Custom.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { G2CustomComponent, G2CustomModule };
//# sourceMappingURL=g2Custom.js.map
