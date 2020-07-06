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
export class OnboardingComponent {
    /**
     * @param {?} el
     * @param {?} doc
     * @param {?} platform
     * @param {?} cdr
     */
    constructor(el, doc, platform, cdr) {
        this.el = el;
        this.doc = doc;
        this.platform = platform;
        this.cdr = cdr;
        this.active = 0;
        this.max = 0;
        this.op = new EventEmitter();
        this.visible = false;
    }
    /**
     * @return {?}
     */
    get first() {
        return this.active === 0;
    }
    /**
     * @return {?}
     */
    get last() {
        return this.active === this.max - 1;
    }
    /**
     * @private
     * @return {?}
     */
    _getDoc() {
        return this.doc;
    }
    /**
     * @private
     * @return {?}
     */
    _getWin() {
        return this._getDoc().defaultView || window;
    }
    /**
     * @private
     * @return {?}
     */
    getLightData() {
        /** @type {?} */
        const doc = this._getDoc();
        /** @type {?} */
        const win = this._getWin();
        /** @type {?} */
        const el = (/** @type {?} */ (doc.querySelector(this.item.selector)));
        if (!el) {
            return null;
        }
        /** @type {?} */
        const scrollTop = win.pageYOffset || doc.documentElement.scrollTop || doc.body.scrollTop;
        /** @type {?} */
        const scrollLeft = win.pageXOffset || doc.documentElement.scrollLeft || doc.body.scrollLeft;
        /** @type {?} */
        const rect = el.getBoundingClientRect();
        /** @type {?} */
        const top = rect.top + scrollTop;
        /** @type {?} */
        const left = rect.left + scrollLeft;
        /** @type {?} */
        const padding = 8;
        /** @type {?} */
        const needPadding = top > padding && left > padding;
        /** @type {?} */
        const offsetPos = needPadding ? padding : 0;
        /** @type {?} */
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
    /**
     * @private
     * @param {?} pos
     * @return {?}
     */
    scroll(pos) {
        this.prevSelectorEl = pos.el;
        /** @type {?} */
        const scrollY = pos.top - (pos.clientHeight - pos.height) / 2;
        this._getWin().scrollTo({ top: scrollY });
        this.updatePrevElStatus(true);
        this.setVisible(true);
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    updatePosition(options = { time: 300 }) {
        if (!this.platform.isBrowser) {
            return;
        }
        /** @type {?} */
        const pos = this.getLightData();
        if (pos == null) {
            this.setVisible(false);
            return;
        }
        /** @type {?} */
        const lightStyle = ((/** @type {?} */ (this.el.nativeElement.querySelector('.onboarding__light')))).style;
        lightStyle.top = `${pos.top}px`;
        lightStyle.left = `${pos.left}px`;
        lightStyle.width = `${pos.width}px`;
        lightStyle.height = `${pos.height}px`;
        this.updatePrevElStatus(false);
        this.setVisible(false);
        if (options.time === 0 || !this.data.animation) {
            this.scroll(pos);
            return;
        }
        this.time = setTimeout((/**
         * @return {?}
         */
        () => this.scroll(pos)), options.time);
    }
    /**
     * @private
     * @param {?} status
     * @return {?}
     */
    setVisible(status) {
        this.visible = status;
        this.cdr.detectChanges();
    }
    /**
     * @private
     * @param {?} status
     * @return {?}
     */
    updatePrevElStatus(status) {
        if (this.prevSelectorEl) {
            this.prevSelectorEl.classList[status ? 'add' : 'remove']('onboarding__light-el');
        }
    }
    /**
     * @param {?} type
     * @return {?}
     */
    to(type) {
        this.op.emit(type);
    }
    /**
     * @return {?}
     */
    handleMask() {
        if (this.data.maskClosable === true) {
            this.to('done');
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        clearTimeout(this.time);
        this.updatePrevElStatus(false);
    }
}
OnboardingComponent.decorators = [
    { type: Component, args: [{
                selector: 'onboarding',
                template: "<div *ngIf=\"visible && data.mask\" class=\"onboarding__mask\" (click)=\"handleMask()\"></div>\n<div\n  *ngIf=\"item\"\n  class=\"onboarding__light\"\n  [class.onboarding__light-ant]=\"data.animation\"\n  [class.onboarding__light-hide]=\"!visible\"\n  nz-popover\n  [nzPopoverTitle]=\"item.headline\"\n  [nzPopoverContent]=\"content\"\n  [nzVisible]=\"visible\"\n  [nzPopoverTrigger]=\"null\"\n  [nzPopoverPlacement]=\"item.position\"\n  [nzNoAnimation]=\"true\"\n  [nzOverlayClassName]=\"item.className\"\n  [nzOverlayStyle]=\"{ 'max-width.px': item.width }\"\n></div>\n<ng-template #content>\n  <ng-container *nzStringTemplateOutlet=\"item.detail\">{{ item.detail }}</ng-container>\n  <div class=\"flex-center-between onboarding__footer\">\n    <span class=\"onboarding__total\">\n      <ng-container *ngIf=\"data.showTotal\">{{ active + 1 }}/{{ max }}</ng-container>\n    </span>\n    <div class=\"onboarding__btns\">\n      <a *ngIf=\"!last && item.skip !== null\" nz-button nzType=\"link\" (click)=\"to('skip')\" nzSize=\"small\" data-btnType=\"skip\">\n        <ng-container *nzStringTemplateOutlet=\"item.skip\">{{ item.skip }}</ng-container>\n      </a>\n      <a *ngIf=\"!first && item.prev !== null\" nz-button (click)=\"to('prev')\" nzSize=\"small\" data-btnType=\"prev\">\n        <ng-container *nzStringTemplateOutlet=\"item.prev\">{{ item.prev }}</ng-container>\n      </a>\n      <a *ngIf=\"!last && item.next !== null\" nz-button (click)=\"to('next')\" nzType=\"primary\" nzSize=\"small\" data-btnType=\"next\">\n        <ng-container *nzStringTemplateOutlet=\"item.next\">{{ item.next }}</ng-container>\n      </a>\n      <a *ngIf=\"last && item.done !== null\" nz-button (click)=\"to('done')\" nzType=\"primary\" nzSize=\"small\" data-btnType=\"done\">\n        <ng-container *nzStringTemplateOutlet=\"item.done\">{{ item.done }}</ng-container>\n      </a>\n    </div>\n  </div>\n</ng-template>\n",
                host: {
                    '[class.onboarding]': `true`,
                    '[attr.data-onboarding-active]': `active`,
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
OnboardingComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] },
    { type: Platform },
    { type: ChangeDetectorRef }
];
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
    OnboardingComponent.prototype.data;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL29uYm9hcmRpbmcvIiwic291cmNlcyI6WyJvbmJvYXJkaW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osTUFBTSxFQUVOLFFBQVEsRUFDUixpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7Ozs7QUFHdkIsa0NBUUM7OztJQVBDLGlDQUFnQjs7SUFDaEIsa0NBQVk7O0lBQ1osbUNBQWE7O0lBQ2Isb0NBQWM7O0lBQ2QscUNBQWU7O0lBQ2YsMkNBQXFCOztJQUNyQiwwQ0FBb0I7O0FBY3RCLE1BQU0sT0FBTyxtQkFBbUI7Ozs7Ozs7SUEwQjlCLFlBQ1UsRUFBMkIsRUFDRyxHQUFRLEVBQ3RDLFFBQWtCLEVBQ2xCLEdBQXNCO1FBSHRCLE9BQUUsR0FBRixFQUFFLENBQXlCO1FBQ0csUUFBRyxHQUFILEdBQUcsQ0FBSztRQUN0QyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBekJoQyxXQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsUUFBRyxHQUFHLENBQUMsQ0FBQztRQUNDLE9BQUUsR0FBRyxJQUFJLFlBQVksRUFBb0IsQ0FBQztRQUNuRCxZQUFPLEdBQUcsS0FBSyxDQUFDO0lBdUJiLENBQUM7Ozs7SUFyQkosSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsTUFBTSxLQUFLLElBQUks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QUVELEVBQUUsQ0FBQyxJQUFzQjtRQUN2QixJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQsVUFBVTtRQUNSLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEtBQUssSUFBSSxFQUFFO1lBQ25DLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDakI7SUFDSCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7OztZQXBJRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLHM0REFBMEM7Z0JBQzFDLElBQUksRUFBRTtvQkFDSixvQkFBb0IsRUFBRSxNQUFNO29CQUM1QiwrQkFBK0IsRUFBRSxRQUFRO2lCQUMxQztnQkFDRCxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7Ozs7WUE3QkMsVUFBVTs0Q0EwRFAsUUFBUSxZQUFJLE1BQU0sU0FBQyxRQUFRO1lBaEV2QixRQUFRO1lBSWYsaUJBQWlCOzs7Ozs7O0lBaUNqQixtQ0FBa0I7Ozs7O0lBQ2xCLDZDQUFvQzs7SUFDcEMsbUNBQXFCOztJQUNyQixtQ0FBcUI7O0lBQ3JCLHFDQUFXOztJQUNYLGtDQUFROztJQUNSLGlDQUFtRDs7SUFDbkQsc0NBQWdCOzs7OztJQW1CZCxpQ0FBbUM7Ozs7O0lBQ25DLGtDQUE4Qzs7Ozs7SUFDOUMsdUNBQTBCOzs7OztJQUMxQixrQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbmplY3QsXG4gIE9uRGVzdHJveSxcbiAgT3B0aW9uYWwsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9uYm9hcmRpbmdEYXRhLCBPbmJvYXJkaW5nSXRlbSwgT25ib2FyZGluZ09wVHlwZSB9IGZyb20gJy4vb25ib2FyZGluZy50eXBlcyc7XG5cbmludGVyZmFjZSBPbmJvYXJkaW5nTGlnaHREYXRhIHtcbiAgZWw6IEhUTUxFbGVtZW50O1xuICB0b3A6IG51bWJlcjtcbiAgbGVmdDogbnVtYmVyO1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgY2xpZW50SGVpZ2h0OiBudW1iZXI7XG4gIGNsaWVudFdpZHRoOiBudW1iZXI7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ29uYm9hcmRpbmcnLFxuICB0ZW1wbGF0ZVVybDogJy4vb25ib2FyZGluZy5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLm9uYm9hcmRpbmddJzogYHRydWVgLFxuICAgICdbYXR0ci5kYXRhLW9uYm9hcmRpbmctYWN0aXZlXSc6IGBhY3RpdmVgLFxuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIE9uYm9hcmRpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIHRpbWU6IGFueTtcbiAgcHJpdmF0ZSBwcmV2U2VsZWN0b3JFbDogSFRNTEVsZW1lbnQ7XG4gIGRhdGE6IE9uYm9hcmRpbmdEYXRhO1xuICBpdGVtOiBPbmJvYXJkaW5nSXRlbTtcbiAgYWN0aXZlID0gMDtcbiAgbWF4ID0gMDtcbiAgcmVhZG9ubHkgb3AgPSBuZXcgRXZlbnRFbWl0dGVyPE9uYm9hcmRpbmdPcFR5cGU+KCk7XG4gIHZpc2libGUgPSBmYWxzZTtcblxuICBnZXQgZmlyc3QoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlID09PSAwO1xuICB9XG5cbiAgZ2V0IGxhc3QoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlID09PSB0aGlzLm1heCAtIDE7XG4gIH1cblxuICBwcml2YXRlIF9nZXREb2MoKTogRG9jdW1lbnQge1xuICAgIHJldHVybiB0aGlzLmRvYztcbiAgfVxuXG4gIHByaXZhdGUgX2dldFdpbigpOiBXaW5kb3cge1xuICAgIHJldHVybiB0aGlzLl9nZXREb2MoKS5kZWZhdWx0VmlldyB8fCB3aW5kb3c7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogYW55LFxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgKSB7fVxuXG4gIHByaXZhdGUgZ2V0TGlnaHREYXRhKCk6IE9uYm9hcmRpbmdMaWdodERhdGEgfCBudWxsIHtcbiAgICBjb25zdCBkb2MgPSB0aGlzLl9nZXREb2MoKTtcbiAgICBjb25zdCB3aW4gPSB0aGlzLl9nZXRXaW4oKTtcbiAgICBjb25zdCBlbCA9IGRvYy5xdWVyeVNlbGVjdG9yKHRoaXMuaXRlbS5zZWxlY3RvcikgYXMgSFRNTEVsZW1lbnQ7XG4gICAgaWYgKCFlbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gd2luLnBhZ2VZT2Zmc2V0IHx8IGRvYy5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IGRvYy5ib2R5LnNjcm9sbFRvcDtcbiAgICBjb25zdCBzY3JvbGxMZWZ0ID0gd2luLnBhZ2VYT2Zmc2V0IHx8IGRvYy5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCB8fCBkb2MuYm9keS5zY3JvbGxMZWZ0O1xuICAgIGNvbnN0IHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCB0b3AgPSByZWN0LnRvcCArIHNjcm9sbFRvcDtcbiAgICBjb25zdCBsZWZ0ID0gcmVjdC5sZWZ0ICsgc2Nyb2xsTGVmdDtcbiAgICBjb25zdCBwYWRkaW5nID0gODtcbiAgICBjb25zdCBuZWVkUGFkZGluZyA9IHRvcCA+IHBhZGRpbmcgJiYgbGVmdCA+IHBhZGRpbmc7XG4gICAgY29uc3Qgb2Zmc2V0UG9zID0gbmVlZFBhZGRpbmcgPyBwYWRkaW5nIDogMDtcbiAgICBjb25zdCBvZmZzZXRXSCA9IG5lZWRQYWRkaW5nID8gcGFkZGluZyAqIDIgOiAwO1xuICAgIHJldHVybiB7XG4gICAgICB0b3A6IHRvcCAtIG9mZnNldFBvcyxcbiAgICAgIGxlZnQ6IGxlZnQgLSBvZmZzZXRQb3MsXG4gICAgICB3aWR0aDogcmVjdC53aWR0aCArIG9mZnNldFdILFxuICAgICAgaGVpZ2h0OiByZWN0LmhlaWdodCArIG9mZnNldFdILFxuICAgICAgZWwsXG4gICAgICBjbGllbnRXaWR0aDogZG9jLmJvZHkuY2xpZW50V2lkdGgsXG4gICAgICBjbGllbnRIZWlnaHQ6IGRvYy5ib2R5LmNsaWVudEhlaWdodCxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBzY3JvbGwocG9zOiBPbmJvYXJkaW5nTGlnaHREYXRhKTogdm9pZCB7XG4gICAgdGhpcy5wcmV2U2VsZWN0b3JFbCA9IHBvcy5lbDtcbiAgICBjb25zdCBzY3JvbGxZID0gcG9zLnRvcCAtIChwb3MuY2xpZW50SGVpZ2h0IC0gcG9zLmhlaWdodCkgLyAyO1xuICAgIHRoaXMuX2dldFdpbigpLnNjcm9sbFRvKHsgdG9wOiBzY3JvbGxZIH0pO1xuICAgIHRoaXMudXBkYXRlUHJldkVsU3RhdHVzKHRydWUpO1xuICAgIHRoaXMuc2V0VmlzaWJsZSh0cnVlKTtcbiAgfVxuXG4gIHVwZGF0ZVBvc2l0aW9uKG9wdGlvbnM6IHsgdGltZT86IG51bWJlciB9ID0geyB0aW1lOiAzMDAgfSk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBwb3MgPSB0aGlzLmdldExpZ2h0RGF0YSgpO1xuICAgIGlmIChwb3MgPT0gbnVsbCkge1xuICAgICAgdGhpcy5zZXRWaXNpYmxlKGZhbHNlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBsaWdodFN0eWxlID0gKHRoaXMuZWwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcub25ib2FyZGluZ19fbGlnaHQnKSBhcyBIVE1MRWxlbWVudCkuc3R5bGU7XG4gICAgbGlnaHRTdHlsZS50b3AgPSBgJHtwb3MudG9wfXB4YDtcbiAgICBsaWdodFN0eWxlLmxlZnQgPSBgJHtwb3MubGVmdH1weGA7XG4gICAgbGlnaHRTdHlsZS53aWR0aCA9IGAke3Bvcy53aWR0aH1weGA7XG4gICAgbGlnaHRTdHlsZS5oZWlnaHQgPSBgJHtwb3MuaGVpZ2h0fXB4YDtcblxuICAgIHRoaXMudXBkYXRlUHJldkVsU3RhdHVzKGZhbHNlKTtcbiAgICB0aGlzLnNldFZpc2libGUoZmFsc2UpO1xuXG4gICAgaWYgKG9wdGlvbnMudGltZSA9PT0gMCB8fCAhdGhpcy5kYXRhLmFuaW1hdGlvbikge1xuICAgICAgdGhpcy5zY3JvbGwocG9zKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnRpbWUgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2Nyb2xsKHBvcyksIG9wdGlvbnMudGltZSk7XG4gIH1cblxuICBwcml2YXRlIHNldFZpc2libGUoc3RhdHVzOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy52aXNpYmxlID0gc3RhdHVzO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlUHJldkVsU3RhdHVzKHN0YXR1czogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICh0aGlzLnByZXZTZWxlY3RvckVsKSB7XG4gICAgICB0aGlzLnByZXZTZWxlY3RvckVsLmNsYXNzTGlzdFtzdGF0dXMgPyAnYWRkJyA6ICdyZW1vdmUnXSgnb25ib2FyZGluZ19fbGlnaHQtZWwnKTtcbiAgICB9XG4gIH1cblxuICB0byh0eXBlOiBPbmJvYXJkaW5nT3BUeXBlKTogdm9pZCB7XG4gICAgdGhpcy5vcC5lbWl0KHR5cGUpO1xuICB9XG5cbiAgaGFuZGxlTWFzaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kYXRhLm1hc2tDbG9zYWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy50bygnZG9uZScpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWUpO1xuICAgIHRoaXMudXBkYXRlUHJldkVsU3RhdHVzKGZhbHNlKTtcbiAgfVxufVxuIl19