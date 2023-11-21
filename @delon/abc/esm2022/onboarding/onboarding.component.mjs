import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Optional, ViewChild, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/platform";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/popover";
import * as i4 from "ng-zorro-antd/core/outlet";
import * as i5 from "ng-zorro-antd/button";
import * as i6 from "ng-zorro-antd/core/transition-patch";
import * as i7 from "ng-zorro-antd/core/no-animation";
export class OnboardingComponent {
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
    getLightData() {
        const doc = this._getDoc();
        const win = this._getWin();
        const el = doc.querySelector(this.item.selectors);
        if (!el) {
            return null;
        }
        const scrollTop = win.scrollY || doc.documentElement.scrollTop || doc.body.scrollTop;
        const scrollLeft = win.scrollX || doc.documentElement.scrollLeft || doc.body.scrollLeft;
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
            clientHeight: doc.body.clientHeight
        };
    }
    ngAfterViewInit() {
        // Waiting https://github.com/NG-ZORRO/ng-zorro-antd/issues/6491
        this.popover.component.onClickOutside = () => { };
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
            if (typeof ngDevMode === 'undefined' || ngDevMode) {
                console.warn(`Did not matches selectors [${this.item.selectors}]`);
            }
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
            this.popover.component.hide();
            this.to('done');
        }
    }
    ngOnDestroy() {
        clearTimeout(this.time);
        this.updatePrevElStatus(false);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: OnboardingComponent, deps: [{ token: i0.ElementRef }, { token: DOCUMENT, optional: true }, { token: i1.Platform }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: OnboardingComponent, selector: "onboarding", host: { properties: { "class.onboarding": "true", "class.onboarding-rtl": "dir === 'rtl'", "attr.data-onboarding-active": "active" } }, viewQueries: [{ propertyName: "popover", first: true, predicate: ["popover"], descendants: true }], ngImport: i0, template: "<div *ngIf=\"!running && config.mask\" class=\"onboarding__mask\" (click)=\"handleMask()\"></div>\n<div\n  *ngIf=\"item\"\n  class=\"onboarding__light\"\n  [class.onboarding__light-hide]=\"running\"\n  [attr.style]=\"item.lightStyle\"\n  nz-popover\n  #popover=\"nzPopover\"\n  [nzPopoverTitle]=\"item.title\"\n  [nzPopoverContent]=\"content\"\n  [nzPopoverVisible]=\"!running\"\n  [nzPopoverTrigger]=\"null\"\n  [nzPopoverPlacement]=\"item.position\"\n  [nzPopoverOverlayClassName]=\"item.className\"\n  [nzPopoverOverlayStyle]=\"{ 'max-width.px': item.width, direction: dir }\"\n  [nzNoAnimation]=\"true\"\n></div>\n<ng-template #content>\n  <ng-container *nzStringTemplateOutlet=\"item.content\">\n    <div [innerHTML]=\"item.content\"></div>\n  </ng-container>\n  <div class=\"flex-center-between onboarding__footer\">\n    <span class=\"onboarding__total\">\n      <ng-container *ngIf=\"config.showTotal\">{{ active + 1 }}/{{ max }}</ng-container>\n    </span>\n    <div class=\"onboarding__btns\">\n      <a\n        *ngIf=\"!last && item.skip !== null && item.skip !== undefined\"\n        nz-button\n        nzType=\"link\"\n        (click)=\"to('skip')\"\n        nzSize=\"small\"\n        data-btnType=\"skip\"\n      >\n        <ng-container *nzStringTemplateOutlet=\"item.skip\">{{ item.skip }}</ng-container>\n      </a>\n      <a *ngIf=\"!first && item.prev !== null\" nz-button (click)=\"to('prev')\" nzSize=\"small\" data-btnType=\"prev\">\n        <ng-container *nzStringTemplateOutlet=\"item.prev\">{{ item.prev }}</ng-container>\n      </a>\n      <a\n        *ngIf=\"!last && item.next !== null && item.next !== undefined\"\n        nz-button\n        (click)=\"to('next')\"\n        nzType=\"primary\"\n        nzSize=\"small\"\n        data-btnType=\"next\"\n      >\n        <ng-container *nzStringTemplateOutlet=\"item.next\">{{ item.next }}</ng-container>\n      </a>\n      <a\n        *ngIf=\"last && item.done !== null && item.done !== undefined\"\n        nz-button\n        (click)=\"to('done')\"\n        nzType=\"primary\"\n        nzSize=\"small\"\n        data-btnType=\"done\"\n      >\n        <ng-container *nzStringTemplateOutlet=\"item.done\">{{ item.done }}</ng-container>\n      </a>\n    </div>\n  </div>\n</ng-template>\n", dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i3.NzPopoverDirective, selector: "[nz-popover]", inputs: ["nzPopoverArrowPointAtCenter", "nzPopoverTitle", "nzPopoverContent", "nz-popover", "nzPopoverTrigger", "nzPopoverPlacement", "nzPopoverOrigin", "nzPopoverVisible", "nzPopoverMouseEnterDelay", "nzPopoverMouseLeaveDelay", "nzPopoverOverlayClassName", "nzPopoverOverlayStyle", "nzPopoverBackdrop"], outputs: ["nzPopoverVisibleChange"], exportAs: ["nzPopover"] }, { kind: "directive", type: i4.NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { kind: "component", type: i5.NzButtonComponent, selector: "button[nz-button], a[nz-button]", inputs: ["nzBlock", "nzGhost", "nzSearch", "nzLoading", "nzDanger", "disabled", "tabIndex", "nzType", "nzShape", "nzSize"], exportAs: ["nzButton"] }, { kind: "directive", type: i6.ɵNzTransitionPatchDirective, selector: "[nz-button], nz-button-group, [nz-icon], [nz-menu-item], [nz-submenu], nz-select-top-control, nz-select-placeholder, nz-input-group", inputs: ["hidden"] }, { kind: "directive", type: i7.NzNoAnimationDirective, selector: "[nzNoAnimation]", inputs: ["nzNoAnimation"], exportAs: ["nzNoAnimation"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: OnboardingComponent, decorators: [{
            type: Component,
            args: [{ selector: 'onboarding', host: {
                        '[class.onboarding]': `true`,
                        '[class.onboarding-rtl]': `dir === 'rtl'`,
                        '[attr.data-onboarding-active]': `active`
                    }, preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div *ngIf=\"!running && config.mask\" class=\"onboarding__mask\" (click)=\"handleMask()\"></div>\n<div\n  *ngIf=\"item\"\n  class=\"onboarding__light\"\n  [class.onboarding__light-hide]=\"running\"\n  [attr.style]=\"item.lightStyle\"\n  nz-popover\n  #popover=\"nzPopover\"\n  [nzPopoverTitle]=\"item.title\"\n  [nzPopoverContent]=\"content\"\n  [nzPopoverVisible]=\"!running\"\n  [nzPopoverTrigger]=\"null\"\n  [nzPopoverPlacement]=\"item.position\"\n  [nzPopoverOverlayClassName]=\"item.className\"\n  [nzPopoverOverlayStyle]=\"{ 'max-width.px': item.width, direction: dir }\"\n  [nzNoAnimation]=\"true\"\n></div>\n<ng-template #content>\n  <ng-container *nzStringTemplateOutlet=\"item.content\">\n    <div [innerHTML]=\"item.content\"></div>\n  </ng-container>\n  <div class=\"flex-center-between onboarding__footer\">\n    <span class=\"onboarding__total\">\n      <ng-container *ngIf=\"config.showTotal\">{{ active + 1 }}/{{ max }}</ng-container>\n    </span>\n    <div class=\"onboarding__btns\">\n      <a\n        *ngIf=\"!last && item.skip !== null && item.skip !== undefined\"\n        nz-button\n        nzType=\"link\"\n        (click)=\"to('skip')\"\n        nzSize=\"small\"\n        data-btnType=\"skip\"\n      >\n        <ng-container *nzStringTemplateOutlet=\"item.skip\">{{ item.skip }}</ng-container>\n      </a>\n      <a *ngIf=\"!first && item.prev !== null\" nz-button (click)=\"to('prev')\" nzSize=\"small\" data-btnType=\"prev\">\n        <ng-container *nzStringTemplateOutlet=\"item.prev\">{{ item.prev }}</ng-container>\n      </a>\n      <a\n        *ngIf=\"!last && item.next !== null && item.next !== undefined\"\n        nz-button\n        (click)=\"to('next')\"\n        nzType=\"primary\"\n        nzSize=\"small\"\n        data-btnType=\"next\"\n      >\n        <ng-container *nzStringTemplateOutlet=\"item.next\">{{ item.next }}</ng-container>\n      </a>\n      <a\n        *ngIf=\"last && item.done !== null && item.done !== undefined\"\n        nz-button\n        (click)=\"to('done')\"\n        nzType=\"primary\"\n        nzSize=\"small\"\n        data-btnType=\"done\"\n      >\n        <ng-container *nzStringTemplateOutlet=\"item.done\">{{ item.done }}</ng-container>\n      </a>\n    </div>\n  </div>\n</ng-template>\n" }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: i1.Platform }, { type: i0.ChangeDetectorRef }], propDecorators: { popover: [{
                type: ViewChild,
                args: ['popover', { static: false }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvb25ib2FyZGluZy9vbmJvYXJkaW5nLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9vbmJvYXJkaW5nL29uYm9hcmRpbmcuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFFTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUVULFlBQVksRUFDWixNQUFNLEVBRU4sUUFBUSxFQUNSLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7OztBQTZCdkIsTUFBTSxPQUFPLG1CQUFtQjtJQVk5QixJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVPLE9BQU87UUFDYixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDbEIsQ0FBQztJQUVPLE9BQU87UUFDYixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxXQUFXLElBQUksTUFBTSxDQUFDO0lBQzlDLENBQUM7SUFFRCxZQUNVLEVBQTJCLEVBQ0csR0FBYyxFQUM1QyxRQUFrQixFQUNsQixHQUFzQjtRQUh0QixPQUFFLEdBQUYsRUFBRSxDQUF5QjtRQUNHLFFBQUcsR0FBSCxHQUFHLENBQVc7UUFDNUMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQTNCaEMsV0FBTSxHQUFHLENBQUMsQ0FBQztRQUNYLFFBQUcsR0FBRyxDQUFDLENBQUM7UUFD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QUFDO0lBQ3JCLENBQUM7SUFFRCxVQUFVO1FBQ1IsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksS0FBSyxJQUFJLEVBQUU7WUFDckMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDL0IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNqQjtJQUNILENBQUM7SUFFRCxXQUFXO1FBQ1QsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQzs4R0E5SFUsbUJBQW1CLDRDQThCUixRQUFRO2tHQTlCbkIsbUJBQW1CLDhSQzVDaEMsMHRFQThEQTs7MkZEbEJhLG1CQUFtQjtrQkFaL0IsU0FBUzsrQkFDRSxZQUFZLFFBRWhCO3dCQUNKLG9CQUFvQixFQUFFLE1BQU07d0JBQzVCLHdCQUF3QixFQUFFLGVBQWU7d0JBQ3pDLCtCQUErQixFQUFFLFFBQVE7cUJBQzFDLHVCQUNvQixLQUFLLG1CQUNULHVCQUF1QixDQUFDLE1BQU0saUJBQ2hDLGlCQUFpQixDQUFDLElBQUk7OzBCQWdDbEMsUUFBUTs7MEJBQUksTUFBTTsyQkFBQyxRQUFRO2dHQXBCbUIsT0FBTztzQkFBdkQsU0FBUzt1QkFBQyxTQUFTLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBPbkRlc3Ryb3ksXG4gIE9wdGlvbmFsLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgdHlwZSB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBOelBvcG92ZXJEaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL3BvcG92ZXInO1xuXG5pbXBvcnQgeyBPbmJvYXJkaW5nQ29uZmlnLCBPbmJvYXJkaW5nSXRlbSwgT25ib2FyZGluZ09wVHlwZSB9IGZyb20gJy4vb25ib2FyZGluZy50eXBlcyc7XG5cbmludGVyZmFjZSBPbmJvYXJkaW5nTGlnaHREYXRhIHtcbiAgZWw6IEhUTUxFbGVtZW50O1xuICB0b3A6IG51bWJlcjtcbiAgbGVmdDogbnVtYmVyO1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgY2xpZW50SGVpZ2h0OiBudW1iZXI7XG4gIGNsaWVudFdpZHRoOiBudW1iZXI7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ29uYm9hcmRpbmcnLFxuICB0ZW1wbGF0ZVVybDogJy4vb25ib2FyZGluZy5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLm9uYm9hcmRpbmddJzogYHRydWVgLFxuICAgICdbY2xhc3Mub25ib2FyZGluZy1ydGxdJzogYGRpciA9PT0gJ3J0bCdgLFxuICAgICdbYXR0ci5kYXRhLW9uYm9hcmRpbmctYWN0aXZlXSc6IGBhY3RpdmVgXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBPbmJvYXJkaW5nQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcbiAgcHJpdmF0ZSB0aW1lOiBOelNhZmVBbnk7XG4gIHByaXZhdGUgcHJldlNlbGVjdG9yRWw/OiBIVE1MRWxlbWVudDtcbiAgY29uZmlnITogT25ib2FyZGluZ0NvbmZpZztcbiAgaXRlbSE6IE9uYm9hcmRpbmdJdGVtO1xuICBhY3RpdmUgPSAwO1xuICBtYXggPSAwO1xuICByZWFkb25seSBvcCA9IG5ldyBFdmVudEVtaXR0ZXI8T25ib2FyZGluZ09wVHlwZT4oKTtcbiAgcnVubmluZyA9IGZhbHNlO1xuICBkaXI6IERpcmVjdGlvbiA9ICdsdHInO1xuICBAVmlld0NoaWxkKCdwb3BvdmVyJywgeyBzdGF0aWM6IGZhbHNlIH0pIHByaXZhdGUgcG9wb3ZlciE6IE56UG9wb3ZlckRpcmVjdGl2ZTtcblxuICBnZXQgZmlyc3QoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlID09PSAwO1xuICB9XG5cbiAgZ2V0IGxhc3QoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlID09PSB0aGlzLm1heCAtIDE7XG4gIH1cblxuICBwcml2YXRlIF9nZXREb2MoKTogRG9jdW1lbnQge1xuICAgIHJldHVybiB0aGlzLmRvYztcbiAgfVxuXG4gIHByaXZhdGUgX2dldFdpbigpOiBXaW5kb3cge1xuICAgIHJldHVybiB0aGlzLl9nZXREb2MoKS5kZWZhdWx0VmlldyB8fCB3aW5kb3c7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogTnpTYWZlQW55LFxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHt9XG5cbiAgcHJpdmF0ZSBnZXRMaWdodERhdGEoKTogT25ib2FyZGluZ0xpZ2h0RGF0YSB8IG51bGwge1xuICAgIGNvbnN0IGRvYyA9IHRoaXMuX2dldERvYygpO1xuICAgIGNvbnN0IHdpbiA9IHRoaXMuX2dldFdpbigpO1xuICAgIGNvbnN0IGVsID0gZG9jLnF1ZXJ5U2VsZWN0b3IodGhpcy5pdGVtLnNlbGVjdG9ycykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgaWYgKCFlbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gd2luLnNjcm9sbFkgfHwgZG9jLmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jLmJvZHkuc2Nyb2xsVG9wO1xuICAgIGNvbnN0IHNjcm9sbExlZnQgPSB3aW4uc2Nyb2xsWCB8fCBkb2MuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQgfHwgZG9jLmJvZHkuc2Nyb2xsTGVmdDtcbiAgICBjb25zdCByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgdG9wID0gcmVjdC50b3AgKyBzY3JvbGxUb3A7XG4gICAgY29uc3QgbGVmdCA9IHJlY3QubGVmdCArIHNjcm9sbExlZnQ7XG4gICAgY29uc3QgcGFkZGluZyA9IDg7XG4gICAgY29uc3QgbmVlZFBhZGRpbmcgPSB0b3AgPiBwYWRkaW5nICYmIGxlZnQgPiBwYWRkaW5nO1xuICAgIGNvbnN0IG9mZnNldFBvcyA9IG5lZWRQYWRkaW5nID8gcGFkZGluZyA6IDA7XG4gICAgY29uc3Qgb2Zmc2V0V0ggPSBuZWVkUGFkZGluZyA/IHBhZGRpbmcgKiAyIDogMDtcbiAgICByZXR1cm4ge1xuICAgICAgdG9wOiB0b3AgLSBvZmZzZXRQb3MsXG4gICAgICBsZWZ0OiBsZWZ0IC0gb2Zmc2V0UG9zLFxuICAgICAgd2lkdGg6IHJlY3Qud2lkdGggKyBvZmZzZXRXSCxcbiAgICAgIGhlaWdodDogcmVjdC5oZWlnaHQgKyBvZmZzZXRXSCxcbiAgICAgIGVsLFxuICAgICAgY2xpZW50V2lkdGg6IGRvYy5ib2R5LmNsaWVudFdpZHRoLFxuICAgICAgY2xpZW50SGVpZ2h0OiBkb2MuYm9keS5jbGllbnRIZWlnaHRcbiAgICB9O1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIC8vIFdhaXRpbmcgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvaXNzdWVzLzY0OTFcbiAgICB0aGlzLnBvcG92ZXIuY29tcG9uZW50IS5vbkNsaWNrT3V0c2lkZSA9ICgpID0+IHt9O1xuICB9XG5cbiAgcHJpdmF0ZSBzY3JvbGwocG9zOiBPbmJvYXJkaW5nTGlnaHREYXRhKTogdm9pZCB7XG4gICAgdGhpcy5wcmV2U2VsZWN0b3JFbCA9IHBvcy5lbDtcbiAgICBjb25zdCBzY3JvbGxZID0gcG9zLnRvcCAtIChwb3MuY2xpZW50SGVpZ2h0IC0gcG9zLmhlaWdodCkgLyAyO1xuICAgIHRoaXMuX2dldFdpbigpLnNjcm9sbFRvKHsgdG9wOiBzY3JvbGxZIH0pO1xuICAgIHRoaXMudXBkYXRlUHJldkVsU3RhdHVzKHRydWUpO1xuICB9XG5cbiAgdXBkYXRlUnVubmluZyhzdGF0dXM6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLnJ1bm5pbmcgPSBzdGF0dXM7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIGlmICghc3RhdHVzKSB7XG4gICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVQb3NpdGlvbigpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcG9zID0gdGhpcy5nZXRMaWdodERhdGEoKTtcbiAgICBpZiAocG9zID09IG51bGwpIHtcbiAgICAgIGlmICh0eXBlb2YgbmdEZXZNb2RlID09PSAndW5kZWZpbmVkJyB8fCBuZ0Rldk1vZGUpIHtcbiAgICAgICAgY29uc29sZS53YXJuKGBEaWQgbm90IG1hdGNoZXMgc2VsZWN0b3JzIFske3RoaXMuaXRlbS5zZWxlY3RvcnN9XWApO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGxpZ2h0U3R5bGUgPSAodGhpcy5lbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vbmJvYXJkaW5nX19saWdodCcpIGFzIEhUTUxFbGVtZW50KS5zdHlsZTtcbiAgICBsaWdodFN0eWxlLnRvcCA9IGAke3Bvcy50b3B9cHhgO1xuICAgIGxpZ2h0U3R5bGUubGVmdCA9IGAke3Bvcy5sZWZ0fXB4YDtcbiAgICBsaWdodFN0eWxlLndpZHRoID0gYCR7cG9zLndpZHRofXB4YDtcbiAgICBsaWdodFN0eWxlLmhlaWdodCA9IGAke3Bvcy5oZWlnaHR9cHhgO1xuXG4gICAgdGhpcy51cGRhdGVQcmV2RWxTdGF0dXMoZmFsc2UpO1xuICAgIHRoaXMuc2Nyb2xsKHBvcyk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVByZXZFbFN0YXR1cyhzdGF0dXM6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wcmV2U2VsZWN0b3JFbCkge1xuICAgICAgdGhpcy5wcmV2U2VsZWN0b3JFbC5jbGFzc0xpc3Rbc3RhdHVzID8gJ2FkZCcgOiAncmVtb3ZlJ10oJ29uYm9hcmRpbmdfX2xpZ2h0LWVsJyk7XG4gICAgfVxuICB9XG5cbiAgdG8odHlwZTogT25ib2FyZGluZ09wVHlwZSk6IHZvaWQge1xuICAgIHRoaXMub3AuZW1pdCh0eXBlKTtcbiAgfVxuXG4gIGhhbmRsZU1hc2soKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29uZmlnLm1hc2tDbG9zYWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5wb3BvdmVyLmNvbXBvbmVudCEuaGlkZSgpO1xuICAgICAgdGhpcy50bygnZG9uZScpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWUpO1xuICAgIHRoaXMudXBkYXRlUHJldkVsU3RhdHVzKGZhbHNlKTtcbiAgfVxufVxuIiwiPGRpdiAqbmdJZj1cIiFydW5uaW5nICYmIGNvbmZpZy5tYXNrXCIgY2xhc3M9XCJvbmJvYXJkaW5nX19tYXNrXCIgKGNsaWNrKT1cImhhbmRsZU1hc2soKVwiPjwvZGl2PlxuPGRpdlxuICAqbmdJZj1cIml0ZW1cIlxuICBjbGFzcz1cIm9uYm9hcmRpbmdfX2xpZ2h0XCJcbiAgW2NsYXNzLm9uYm9hcmRpbmdfX2xpZ2h0LWhpZGVdPVwicnVubmluZ1wiXG4gIFthdHRyLnN0eWxlXT1cIml0ZW0ubGlnaHRTdHlsZVwiXG4gIG56LXBvcG92ZXJcbiAgI3BvcG92ZXI9XCJuelBvcG92ZXJcIlxuICBbbnpQb3BvdmVyVGl0bGVdPVwiaXRlbS50aXRsZVwiXG4gIFtuelBvcG92ZXJDb250ZW50XT1cImNvbnRlbnRcIlxuICBbbnpQb3BvdmVyVmlzaWJsZV09XCIhcnVubmluZ1wiXG4gIFtuelBvcG92ZXJUcmlnZ2VyXT1cIm51bGxcIlxuICBbbnpQb3BvdmVyUGxhY2VtZW50XT1cIml0ZW0ucG9zaXRpb25cIlxuICBbbnpQb3BvdmVyT3ZlcmxheUNsYXNzTmFtZV09XCJpdGVtLmNsYXNzTmFtZVwiXG4gIFtuelBvcG92ZXJPdmVybGF5U3R5bGVdPVwieyAnbWF4LXdpZHRoLnB4JzogaXRlbS53aWR0aCwgZGlyZWN0aW9uOiBkaXIgfVwiXG4gIFtuek5vQW5pbWF0aW9uXT1cInRydWVcIlxuPjwvZGl2PlxuPG5nLXRlbXBsYXRlICNjb250ZW50PlxuICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiaXRlbS5jb250ZW50XCI+XG4gICAgPGRpdiBbaW5uZXJIVE1MXT1cIml0ZW0uY29udGVudFwiPjwvZGl2PlxuICA8L25nLWNvbnRhaW5lcj5cbiAgPGRpdiBjbGFzcz1cImZsZXgtY2VudGVyLWJldHdlZW4gb25ib2FyZGluZ19fZm9vdGVyXCI+XG4gICAgPHNwYW4gY2xhc3M9XCJvbmJvYXJkaW5nX190b3RhbFwiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbmZpZy5zaG93VG90YWxcIj57eyBhY3RpdmUgKyAxIH19L3t7IG1heCB9fTwvbmctY29udGFpbmVyPlxuICAgIDwvc3Bhbj5cbiAgICA8ZGl2IGNsYXNzPVwib25ib2FyZGluZ19fYnRuc1wiPlxuICAgICAgPGFcbiAgICAgICAgKm5nSWY9XCIhbGFzdCAmJiBpdGVtLnNraXAgIT09IG51bGwgJiYgaXRlbS5za2lwICE9PSB1bmRlZmluZWRcIlxuICAgICAgICBuei1idXR0b25cbiAgICAgICAgbnpUeXBlPVwibGlua1wiXG4gICAgICAgIChjbGljayk9XCJ0bygnc2tpcCcpXCJcbiAgICAgICAgbnpTaXplPVwic21hbGxcIlxuICAgICAgICBkYXRhLWJ0blR5cGU9XCJza2lwXCJcbiAgICAgID5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cIml0ZW0uc2tpcFwiPnt7IGl0ZW0uc2tpcCB9fTwvbmctY29udGFpbmVyPlxuICAgICAgPC9hPlxuICAgICAgPGEgKm5nSWY9XCIhZmlyc3QgJiYgaXRlbS5wcmV2ICE9PSBudWxsXCIgbnotYnV0dG9uIChjbGljayk9XCJ0bygncHJldicpXCIgbnpTaXplPVwic21hbGxcIiBkYXRhLWJ0blR5cGU9XCJwcmV2XCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJpdGVtLnByZXZcIj57eyBpdGVtLnByZXYgfX08L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvYT5cbiAgICAgIDxhXG4gICAgICAgICpuZ0lmPVwiIWxhc3QgJiYgaXRlbS5uZXh0ICE9PSBudWxsICYmIGl0ZW0ubmV4dCAhPT0gdW5kZWZpbmVkXCJcbiAgICAgICAgbnotYnV0dG9uXG4gICAgICAgIChjbGljayk9XCJ0bygnbmV4dCcpXCJcbiAgICAgICAgbnpUeXBlPVwicHJpbWFyeVwiXG4gICAgICAgIG56U2l6ZT1cInNtYWxsXCJcbiAgICAgICAgZGF0YS1idG5UeXBlPVwibmV4dFwiXG4gICAgICA+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJpdGVtLm5leHRcIj57eyBpdGVtLm5leHQgfX08L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvYT5cbiAgICAgIDxhXG4gICAgICAgICpuZ0lmPVwibGFzdCAmJiBpdGVtLmRvbmUgIT09IG51bGwgJiYgaXRlbS5kb25lICE9PSB1bmRlZmluZWRcIlxuICAgICAgICBuei1idXR0b25cbiAgICAgICAgKGNsaWNrKT1cInRvKCdkb25lJylcIlxuICAgICAgICBuelR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgbnpTaXplPVwic21hbGxcIlxuICAgICAgICBkYXRhLWJ0blR5cGU9XCJkb25lXCJcbiAgICAgID5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cIml0ZW0uZG9uZVwiPnt7IGl0ZW0uZG9uZSB9fTwvbmctY29udGFpbmVyPlxuICAgICAgPC9hPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvbmctdGVtcGxhdGU+XG4iXX0=