/**
 * @fileoverview added by tsickle
 * Generated from: onboarding.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Inject, Optional, ViewEncapsulation, } from '@angular/core';
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
export { OnboardingComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL29uYm9hcmRpbmcvIiwic291cmNlcyI6WyJvbmJvYXJkaW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osTUFBTSxFQUVOLFFBQVEsRUFDUixpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7Ozs7QUFHdkIsa0NBUUM7OztJQVBDLGlDQUFnQjs7SUFDaEIsa0NBQVk7O0lBQ1osbUNBQWE7O0lBQ2Isb0NBQWM7O0lBQ2QscUNBQWU7O0lBQ2YsMkNBQXFCOztJQUNyQiwwQ0FBb0I7O0FBR3RCO0lBcUNFLDZCQUNVLEVBQTJCLEVBQ0csR0FBUSxFQUN0QyxRQUFrQixFQUNsQixHQUFzQjtRQUh0QixPQUFFLEdBQUYsRUFBRSxDQUF5QjtRQUNHLFFBQUcsR0FBSCxHQUFHLENBQUs7UUFDdEMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQXpCaEMsV0FBTSxHQUFHLENBQUMsQ0FBQztRQUNYLFFBQUcsR0FBRyxDQUFDLENBQUM7UUFDQyxPQUFFLEdBQUcsSUFBSSxZQUFZLEVBQW9CLENBQUM7UUFDbkQsWUFBTyxHQUFHLEtBQUssQ0FBQztJQXVCYixDQUFDO0lBckJKLHNCQUFJLHNDQUFLOzs7O1FBQVQ7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1FBQzNCLENBQUM7OztPQUFBO0lBRUQsc0JBQUkscUNBQUk7Ozs7UUFBUjtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxJQUFJLENB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QW1DOzs7OztJQUNuQyxrQ0FBOEM7Ozs7O0lBQzlDLHVDQUEwQjs7Ozs7SUFDMUIsa0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBPbkRlc3Ryb3ksXG4gIE9wdGlvbmFsLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPbmJvYXJkaW5nQ29uZmlnLCBPbmJvYXJkaW5nSXRlbSwgT25ib2FyZGluZ09wVHlwZSB9IGZyb20gJy4vb25ib2FyZGluZy50eXBlcyc7XG5cbmludGVyZmFjZSBPbmJvYXJkaW5nTGlnaHREYXRhIHtcbiAgZWw6IEhUTUxFbGVtZW50O1xuICB0b3A6IG51bWJlcjtcbiAgbGVmdDogbnVtYmVyO1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgY2xpZW50SGVpZ2h0OiBudW1iZXI7XG4gIGNsaWVudFdpZHRoOiBudW1iZXI7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ29uYm9hcmRpbmcnLFxuICB0ZW1wbGF0ZVVybDogJy4vb25ib2FyZGluZy5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLm9uYm9hcmRpbmddJzogYHRydWVgLFxuICAgICdbYXR0ci5kYXRhLW9uYm9hcmRpbmctYWN0aXZlXSc6IGBhY3RpdmVgLFxuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIE9uYm9hcmRpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIHRpbWU6IGFueTtcbiAgcHJpdmF0ZSBwcmV2U2VsZWN0b3JFbDogSFRNTEVsZW1lbnQ7XG4gIGNvbmZpZzogT25ib2FyZGluZ0NvbmZpZztcbiAgaXRlbTogT25ib2FyZGluZ0l0ZW07XG4gIGFjdGl2ZSA9IDA7XG4gIG1heCA9IDA7XG4gIHJlYWRvbmx5IG9wID0gbmV3IEV2ZW50RW1pdHRlcjxPbmJvYXJkaW5nT3BUeXBlPigpO1xuICB2aXNpYmxlID0gZmFsc2U7XG5cbiAgZ2V0IGZpcnN0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZSA9PT0gMDtcbiAgfVxuXG4gIGdldCBsYXN0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZSA9PT0gdGhpcy5tYXggLSAxO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0RG9jKCk6IERvY3VtZW50IHtcbiAgICByZXR1cm4gdGhpcy5kb2M7XG4gIH1cblxuICBwcml2YXRlIF9nZXRXaW4oKTogV2luZG93IHtcbiAgICByZXR1cm4gdGhpcy5fZ2V0RG9jKCkuZGVmYXVsdFZpZXcgfHwgd2luZG93O1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IGFueSxcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSxcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICkge31cblxuICBwcml2YXRlIGdldExpZ2h0RGF0YSgpOiBPbmJvYXJkaW5nTGlnaHREYXRhIHwgbnVsbCB7XG4gICAgY29uc3QgZG9jID0gdGhpcy5fZ2V0RG9jKCk7XG4gICAgY29uc3Qgd2luID0gdGhpcy5fZ2V0V2luKCk7XG4gICAgY29uc3QgZWwgPSBkb2MucXVlcnlTZWxlY3Rvcih0aGlzLml0ZW0uc2VsZWN0b3JzKSBhcyBIVE1MRWxlbWVudDtcbiAgICBpZiAoIWVsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxUb3AgPSB3aW4ucGFnZVlPZmZzZXQgfHwgZG9jLmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jLmJvZHkuc2Nyb2xsVG9wO1xuICAgIGNvbnN0IHNjcm9sbExlZnQgPSB3aW4ucGFnZVhPZmZzZXQgfHwgZG9jLmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0IHx8IGRvYy5ib2R5LnNjcm9sbExlZnQ7XG4gICAgY29uc3QgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHRvcCA9IHJlY3QudG9wICsgc2Nyb2xsVG9wO1xuICAgIGNvbnN0IGxlZnQgPSByZWN0LmxlZnQgKyBzY3JvbGxMZWZ0O1xuICAgIGNvbnN0IHBhZGRpbmcgPSA4O1xuICAgIGNvbnN0IG5lZWRQYWRkaW5nID0gdG9wID4gcGFkZGluZyAmJiBsZWZ0ID4gcGFkZGluZztcbiAgICBjb25zdCBvZmZzZXRQb3MgPSBuZWVkUGFkZGluZyA/IHBhZGRpbmcgOiAwO1xuICAgIGNvbnN0IG9mZnNldFdIID0gbmVlZFBhZGRpbmcgPyBwYWRkaW5nICogMiA6IDA7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRvcDogdG9wIC0gb2Zmc2V0UG9zLFxuICAgICAgbGVmdDogbGVmdCAtIG9mZnNldFBvcyxcbiAgICAgIHdpZHRoOiByZWN0LndpZHRoICsgb2Zmc2V0V0gsXG4gICAgICBoZWlnaHQ6IHJlY3QuaGVpZ2h0ICsgb2Zmc2V0V0gsXG4gICAgICBlbCxcbiAgICAgIGNsaWVudFdpZHRoOiBkb2MuYm9keS5jbGllbnRXaWR0aCxcbiAgICAgIGNsaWVudEhlaWdodDogZG9jLmJvZHkuY2xpZW50SGVpZ2h0LFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIHNjcm9sbChwb3M6IE9uYm9hcmRpbmdMaWdodERhdGEpOiB2b2lkIHtcbiAgICB0aGlzLnByZXZTZWxlY3RvckVsID0gcG9zLmVsO1xuICAgIGNvbnN0IHNjcm9sbFkgPSBwb3MudG9wIC0gKHBvcy5jbGllbnRIZWlnaHQgLSBwb3MuaGVpZ2h0KSAvIDI7XG4gICAgdGhpcy5fZ2V0V2luKCkuc2Nyb2xsVG8oeyB0b3A6IHNjcm9sbFkgfSk7XG4gICAgdGhpcy51cGRhdGVQcmV2RWxTdGF0dXModHJ1ZSk7XG4gICAgdGhpcy5zZXRWaXNpYmxlKHRydWUpO1xuICB9XG5cbiAgdXBkYXRlUG9zaXRpb24ob3B0aW9uczogeyB0aW1lPzogbnVtYmVyIH0gPSB7IHRpbWU6IDMwMCB9KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHBvcyA9IHRoaXMuZ2V0TGlnaHREYXRhKCk7XG4gICAgaWYgKHBvcyA9PSBudWxsKSB7XG4gICAgICB0aGlzLnNldFZpc2libGUoZmFsc2UpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGxpZ2h0U3R5bGUgPSAodGhpcy5lbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vbmJvYXJkaW5nX19saWdodCcpIGFzIEhUTUxFbGVtZW50KS5zdHlsZTtcbiAgICBsaWdodFN0eWxlLnRvcCA9IGAke3Bvcy50b3B9cHhgO1xuICAgIGxpZ2h0U3R5bGUubGVmdCA9IGAke3Bvcy5sZWZ0fXB4YDtcbiAgICBsaWdodFN0eWxlLndpZHRoID0gYCR7cG9zLndpZHRofXB4YDtcbiAgICBsaWdodFN0eWxlLmhlaWdodCA9IGAke3Bvcy5oZWlnaHR9cHhgO1xuXG4gICAgdGhpcy51cGRhdGVQcmV2RWxTdGF0dXMoZmFsc2UpO1xuICAgIHRoaXMuc2V0VmlzaWJsZShmYWxzZSk7XG5cbiAgICBpZiAob3B0aW9ucy50aW1lID09PSAwIHx8ICF0aGlzLmNvbmZpZy5hbmltYXRpb24pIHtcbiAgICAgIHRoaXMuc2Nyb2xsKHBvcyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy50aW1lID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLnNjcm9sbChwb3MpLCBvcHRpb25zLnRpbWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRWaXNpYmxlKHN0YXR1czogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMudmlzaWJsZSA9IHN0YXR1cztcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVByZXZFbFN0YXR1cyhzdGF0dXM6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wcmV2U2VsZWN0b3JFbCkge1xuICAgICAgdGhpcy5wcmV2U2VsZWN0b3JFbC5jbGFzc0xpc3Rbc3RhdHVzID8gJ2FkZCcgOiAncmVtb3ZlJ10oJ29uYm9hcmRpbmdfX2xpZ2h0LWVsJyk7XG4gICAgfVxuICB9XG5cbiAgdG8odHlwZTogT25ib2FyZGluZ09wVHlwZSk6IHZvaWQge1xuICAgIHRoaXMub3AuZW1pdCh0eXBlKTtcbiAgfVxuXG4gIGhhbmRsZU1hc2soKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29uZmlnLm1hc2tDbG9zYWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy50bygnZG9uZScpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWUpO1xuICAgIHRoaXMudXBkYXRlUHJldkVsU3RhdHVzKGZhbHNlKTtcbiAgfVxufVxuIl19