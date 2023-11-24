import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Optional, ViewChild, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/platform";
import * as i2 from "ng-zorro-antd/popover";
import * as i3 from "ng-zorro-antd/core/outlet";
import * as i4 from "ng-zorro-antd/button";
import * as i5 from "ng-zorro-antd/core/transition-patch";
import * as i6 from "ng-zorro-antd/core/no-animation";
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: OnboardingComponent, selector: "onboarding", host: { properties: { "class.onboarding": "true", "class.onboarding-rtl": "dir === 'rtl'", "attr.data-onboarding-active": "active" } }, viewQueries: [{ propertyName: "popover", first: true, predicate: ["popover"], descendants: true }], ngImport: i0, template: "@if (!running && config.mask) {\n  <div class=\"onboarding__mask\" (click)=\"handleMask()\"></div>\n}\n@if (item) {\n  <div\n    class=\"onboarding__light\"\n    [class.onboarding__light-hide]=\"running\"\n    [attr.style]=\"item.lightStyle\"\n    nz-popover\n    #popover=\"nzPopover\"\n    [nzPopoverTitle]=\"item.title\"\n    [nzPopoverContent]=\"content\"\n    [nzPopoverVisible]=\"!running\"\n    [nzPopoverTrigger]=\"null\"\n    [nzPopoverPlacement]=\"item.position\"\n    [nzPopoverOverlayClassName]=\"item.className\"\n    [nzPopoverOverlayStyle]=\"{ 'max-width.px': item.width, direction: dir }\"\n    [nzNoAnimation]=\"true\"\n  ></div>\n  <ng-template #content>\n    <ng-container *nzStringTemplateOutlet=\"item.content\">\n      <div [innerHTML]=\"item.content\"></div>\n    </ng-container>\n    <div class=\"flex-center-between onboarding__footer\">\n      <span class=\"onboarding__total\">\n        @if (config.showTotal) {\n          {{ active + 1 }}/{{ max }}\n        }\n      </span>\n      <div class=\"onboarding__btns\">\n        @if (!last && item.skip !== null && item.skip !== undefined) {\n          <a nz-button nzType=\"link\" (click)=\"to('skip')\" nzSize=\"small\" data-btnType=\"skip\">\n            <ng-container *nzStringTemplateOutlet=\"item.skip\">{{ item.skip }}</ng-container>\n          </a>\n        }\n        @if (!first && item.prev !== null) {\n          <a nz-button (click)=\"to('prev')\" nzSize=\"small\" data-btnType=\"prev\">\n            <ng-container *nzStringTemplateOutlet=\"item.prev\">{{ item.prev }}</ng-container>\n          </a>\n        }\n        @if (!last && item.next !== null && item.next !== undefined) {\n          <a nz-button (click)=\"to('next')\" nzType=\"primary\" nzSize=\"small\" data-btnType=\"next\">\n            <ng-container *nzStringTemplateOutlet=\"item.next\">{{ item.next }}</ng-container>\n          </a>\n        }\n        @if (last && item.done !== null && item.done !== undefined) {\n          <a nz-button (click)=\"to('done')\" nzType=\"primary\" nzSize=\"small\" data-btnType=\"done\">\n            <ng-container *nzStringTemplateOutlet=\"item.done\">{{ item.done }}</ng-container>\n          </a>\n        }\n      </div>\n    </div>\n  </ng-template>\n}\n", dependencies: [{ kind: "directive", type: i2.NzPopoverDirective, selector: "[nz-popover]", inputs: ["nzPopoverArrowPointAtCenter", "nzPopoverTitle", "nzPopoverContent", "nz-popover", "nzPopoverTrigger", "nzPopoverPlacement", "nzPopoverOrigin", "nzPopoverVisible", "nzPopoverMouseEnterDelay", "nzPopoverMouseLeaveDelay", "nzPopoverOverlayClassName", "nzPopoverOverlayStyle", "nzPopoverBackdrop"], outputs: ["nzPopoverVisibleChange"], exportAs: ["nzPopover"] }, { kind: "directive", type: i3.NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { kind: "component", type: i4.NzButtonComponent, selector: "button[nz-button], a[nz-button]", inputs: ["nzBlock", "nzGhost", "nzSearch", "nzLoading", "nzDanger", "disabled", "tabIndex", "nzType", "nzShape", "nzSize"], exportAs: ["nzButton"] }, { kind: "directive", type: i5.ɵNzTransitionPatchDirective, selector: "[nz-button], nz-button-group, [nz-icon], [nz-menu-item], [nz-submenu], nz-select-top-control, nz-select-placeholder, nz-input-group", inputs: ["hidden"] }, { kind: "directive", type: i6.NzNoAnimationDirective, selector: "[nzNoAnimation]", inputs: ["nzNoAnimation"], exportAs: ["nzNoAnimation"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: OnboardingComponent, decorators: [{
            type: Component,
            args: [{ selector: 'onboarding', host: {
                        '[class.onboarding]': `true`,
                        '[class.onboarding-rtl]': `dir === 'rtl'`,
                        '[attr.data-onboarding-active]': `active`
                    }, preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "@if (!running && config.mask) {\n  <div class=\"onboarding__mask\" (click)=\"handleMask()\"></div>\n}\n@if (item) {\n  <div\n    class=\"onboarding__light\"\n    [class.onboarding__light-hide]=\"running\"\n    [attr.style]=\"item.lightStyle\"\n    nz-popover\n    #popover=\"nzPopover\"\n    [nzPopoverTitle]=\"item.title\"\n    [nzPopoverContent]=\"content\"\n    [nzPopoverVisible]=\"!running\"\n    [nzPopoverTrigger]=\"null\"\n    [nzPopoverPlacement]=\"item.position\"\n    [nzPopoverOverlayClassName]=\"item.className\"\n    [nzPopoverOverlayStyle]=\"{ 'max-width.px': item.width, direction: dir }\"\n    [nzNoAnimation]=\"true\"\n  ></div>\n  <ng-template #content>\n    <ng-container *nzStringTemplateOutlet=\"item.content\">\n      <div [innerHTML]=\"item.content\"></div>\n    </ng-container>\n    <div class=\"flex-center-between onboarding__footer\">\n      <span class=\"onboarding__total\">\n        @if (config.showTotal) {\n          {{ active + 1 }}/{{ max }}\n        }\n      </span>\n      <div class=\"onboarding__btns\">\n        @if (!last && item.skip !== null && item.skip !== undefined) {\n          <a nz-button nzType=\"link\" (click)=\"to('skip')\" nzSize=\"small\" data-btnType=\"skip\">\n            <ng-container *nzStringTemplateOutlet=\"item.skip\">{{ item.skip }}</ng-container>\n          </a>\n        }\n        @if (!first && item.prev !== null) {\n          <a nz-button (click)=\"to('prev')\" nzSize=\"small\" data-btnType=\"prev\">\n            <ng-container *nzStringTemplateOutlet=\"item.prev\">{{ item.prev }}</ng-container>\n          </a>\n        }\n        @if (!last && item.next !== null && item.next !== undefined) {\n          <a nz-button (click)=\"to('next')\" nzType=\"primary\" nzSize=\"small\" data-btnType=\"next\">\n            <ng-container *nzStringTemplateOutlet=\"item.next\">{{ item.next }}</ng-container>\n          </a>\n        }\n        @if (last && item.done !== null && item.done !== undefined) {\n          <a nz-button (click)=\"to('done')\" nzType=\"primary\" nzSize=\"small\" data-btnType=\"done\">\n            <ng-container *nzStringTemplateOutlet=\"item.done\">{{ item.done }}</ng-container>\n          </a>\n        }\n      </div>\n    </div>\n  </ng-template>\n}\n" }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: i1.Platform }, { type: i0.ChangeDetectorRef }], propDecorators: { popover: [{
                type: ViewChild,
                args: ['popover', { static: false }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvb25ib2FyZGluZy9vbmJvYXJkaW5nLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9vbmJvYXJkaW5nL29uYm9hcmRpbmcuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFFTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUVULFlBQVksRUFDWixNQUFNLEVBRU4sUUFBUSxFQUNSLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7O0FBNkJ2QixNQUFNLE9BQU8sbUJBQW1CO0lBWTlCLElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRU8sT0FBTztRQUNiLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNsQixDQUFDO0lBRU8sT0FBTztRQUNiLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLFdBQVcsSUFBSSxNQUFNLENBQUM7SUFDOUMsQ0FBQztJQUVELFlBQ1UsRUFBMkIsRUFDRyxHQUFjLEVBQzVDLFFBQWtCLEVBQ2xCLEdBQXNCO1FBSHRCLE9BQUUsR0FBRixFQUFFLENBQXlCO1FBQ0csUUFBRyxHQUFILEdBQUcsQ0FBVztRQUM1QyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBM0JoQyxXQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsUUFBRyxHQUFHLENBQUMsQ0FBQztRQUND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QUM7SUFDckIsQ0FBQztJQUVELFVBQVU7UUFDUixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxLQUFLLElBQUksRUFBRTtZQUNyQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUMvQixJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2pCO0lBQ0gsQ0FBQztJQUVELFdBQVc7UUFDVCxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDOzhHQTlIVSxtQkFBbUIsNENBOEJSLFFBQVE7a0dBOUJuQixtQkFBbUIsOFJDNUNoQyx3c0VBc0RBOzsyRkRWYSxtQkFBbUI7a0JBWi9CLFNBQVM7K0JBQ0UsWUFBWSxRQUVoQjt3QkFDSixvQkFBb0IsRUFBRSxNQUFNO3dCQUM1Qix3QkFBd0IsRUFBRSxlQUFlO3dCQUN6QywrQkFBK0IsRUFBRSxRQUFRO3FCQUMxQyx1QkFDb0IsS0FBSyxtQkFDVCx1QkFBdUIsQ0FBQyxNQUFNLGlCQUNoQyxpQkFBaUIsQ0FBQyxJQUFJOzswQkFnQ2xDLFFBQVE7OzBCQUFJLE1BQU07MkJBQUMsUUFBUTtnR0FwQm1CLE9BQU87c0JBQXZELFNBQVM7dUJBQUMsU0FBUyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEluamVjdCxcbiAgT25EZXN0cm95LFxuICBPcHRpb25hbCxcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgTnpQb3BvdmVyRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9wb3BvdmVyJztcblxuaW1wb3J0IHsgT25ib2FyZGluZ0NvbmZpZywgT25ib2FyZGluZ0l0ZW0sIE9uYm9hcmRpbmdPcFR5cGUgfSBmcm9tICcuL29uYm9hcmRpbmcudHlwZXMnO1xuXG5pbnRlcmZhY2UgT25ib2FyZGluZ0xpZ2h0RGF0YSB7XG4gIGVsOiBIVE1MRWxlbWVudDtcbiAgdG9wOiBudW1iZXI7XG4gIGxlZnQ6IG51bWJlcjtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIGNsaWVudEhlaWdodDogbnVtYmVyO1xuICBjbGllbnRXaWR0aDogbnVtYmVyO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdvbmJvYXJkaW5nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL29uYm9hcmRpbmcuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5vbmJvYXJkaW5nXSc6IGB0cnVlYCxcbiAgICAnW2NsYXNzLm9uYm9hcmRpbmctcnRsXSc6IGBkaXIgPT09ICdydGwnYCxcbiAgICAnW2F0dHIuZGF0YS1vbmJvYXJkaW5nLWFjdGl2ZV0nOiBgYWN0aXZlYFxuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgT25ib2FyZGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XG4gIHByaXZhdGUgdGltZTogTnpTYWZlQW55O1xuICBwcml2YXRlIHByZXZTZWxlY3RvckVsPzogSFRNTEVsZW1lbnQ7XG4gIGNvbmZpZyE6IE9uYm9hcmRpbmdDb25maWc7XG4gIGl0ZW0hOiBPbmJvYXJkaW5nSXRlbTtcbiAgYWN0aXZlID0gMDtcbiAgbWF4ID0gMDtcbiAgcmVhZG9ubHkgb3AgPSBuZXcgRXZlbnRFbWl0dGVyPE9uYm9hcmRpbmdPcFR5cGU+KCk7XG4gIHJ1bm5pbmcgPSBmYWxzZTtcbiAgZGlyOiBEaXJlY3Rpb24gPSAnbHRyJztcbiAgQFZpZXdDaGlsZCgncG9wb3ZlcicsIHsgc3RhdGljOiBmYWxzZSB9KSBwcml2YXRlIHBvcG92ZXIhOiBOelBvcG92ZXJEaXJlY3RpdmU7XG5cbiAgZ2V0IGZpcnN0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZSA9PT0gMDtcbiAgfVxuXG4gIGdldCBsYXN0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZSA9PT0gdGhpcy5tYXggLSAxO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0RG9jKCk6IERvY3VtZW50IHtcbiAgICByZXR1cm4gdGhpcy5kb2M7XG4gIH1cblxuICBwcml2YXRlIF9nZXRXaW4oKTogV2luZG93IHtcbiAgICByZXR1cm4gdGhpcy5fZ2V0RG9jKCkuZGVmYXVsdFZpZXcgfHwgd2luZG93O1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IE56U2FmZUFueSxcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSxcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7fVxuXG4gIHByaXZhdGUgZ2V0TGlnaHREYXRhKCk6IE9uYm9hcmRpbmdMaWdodERhdGEgfCBudWxsIHtcbiAgICBjb25zdCBkb2MgPSB0aGlzLl9nZXREb2MoKTtcbiAgICBjb25zdCB3aW4gPSB0aGlzLl9nZXRXaW4oKTtcbiAgICBjb25zdCBlbCA9IGRvYy5xdWVyeVNlbGVjdG9yKHRoaXMuaXRlbS5zZWxlY3RvcnMpIGFzIEhUTUxFbGVtZW50O1xuICAgIGlmICghZWwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHNjcm9sbFRvcCA9IHdpbi5zY3JvbGxZIHx8IGRvYy5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IGRvYy5ib2R5LnNjcm9sbFRvcDtcbiAgICBjb25zdCBzY3JvbGxMZWZ0ID0gd2luLnNjcm9sbFggfHwgZG9jLmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0IHx8IGRvYy5ib2R5LnNjcm9sbExlZnQ7XG4gICAgY29uc3QgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHRvcCA9IHJlY3QudG9wICsgc2Nyb2xsVG9wO1xuICAgIGNvbnN0IGxlZnQgPSByZWN0LmxlZnQgKyBzY3JvbGxMZWZ0O1xuICAgIGNvbnN0IHBhZGRpbmcgPSA4O1xuICAgIGNvbnN0IG5lZWRQYWRkaW5nID0gdG9wID4gcGFkZGluZyAmJiBsZWZ0ID4gcGFkZGluZztcbiAgICBjb25zdCBvZmZzZXRQb3MgPSBuZWVkUGFkZGluZyA/IHBhZGRpbmcgOiAwO1xuICAgIGNvbnN0IG9mZnNldFdIID0gbmVlZFBhZGRpbmcgPyBwYWRkaW5nICogMiA6IDA7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRvcDogdG9wIC0gb2Zmc2V0UG9zLFxuICAgICAgbGVmdDogbGVmdCAtIG9mZnNldFBvcyxcbiAgICAgIHdpZHRoOiByZWN0LndpZHRoICsgb2Zmc2V0V0gsXG4gICAgICBoZWlnaHQ6IHJlY3QuaGVpZ2h0ICsgb2Zmc2V0V0gsXG4gICAgICBlbCxcbiAgICAgIGNsaWVudFdpZHRoOiBkb2MuYm9keS5jbGllbnRXaWR0aCxcbiAgICAgIGNsaWVudEhlaWdodDogZG9jLmJvZHkuY2xpZW50SGVpZ2h0XG4gICAgfTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICAvLyBXYWl0aW5nIGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2lzc3Vlcy82NDkxXG4gICAgdGhpcy5wb3BvdmVyLmNvbXBvbmVudCEub25DbGlja091dHNpZGUgPSAoKSA9PiB7fTtcbiAgfVxuXG4gIHByaXZhdGUgc2Nyb2xsKHBvczogT25ib2FyZGluZ0xpZ2h0RGF0YSk6IHZvaWQge1xuICAgIHRoaXMucHJldlNlbGVjdG9yRWwgPSBwb3MuZWw7XG4gICAgY29uc3Qgc2Nyb2xsWSA9IHBvcy50b3AgLSAocG9zLmNsaWVudEhlaWdodCAtIHBvcy5oZWlnaHQpIC8gMjtcbiAgICB0aGlzLl9nZXRXaW4oKS5zY3JvbGxUbyh7IHRvcDogc2Nyb2xsWSB9KTtcbiAgICB0aGlzLnVwZGF0ZVByZXZFbFN0YXR1cyh0cnVlKTtcbiAgfVxuXG4gIHVwZGF0ZVJ1bm5pbmcoc3RhdHVzOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5ydW5uaW5nID0gc3RhdHVzO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICBpZiAoIXN0YXR1cykge1xuICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlUG9zaXRpb24oKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHBvcyA9IHRoaXMuZ2V0TGlnaHREYXRhKCk7XG4gICAgaWYgKHBvcyA9PSBudWxsKSB7XG4gICAgICBpZiAodHlwZW9mIG5nRGV2TW9kZSA9PT0gJ3VuZGVmaW5lZCcgfHwgbmdEZXZNb2RlKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihgRGlkIG5vdCBtYXRjaGVzIHNlbGVjdG9ycyBbJHt0aGlzLml0ZW0uc2VsZWN0b3JzfV1gKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBsaWdodFN0eWxlID0gKHRoaXMuZWwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcub25ib2FyZGluZ19fbGlnaHQnKSBhcyBIVE1MRWxlbWVudCkuc3R5bGU7XG4gICAgbGlnaHRTdHlsZS50b3AgPSBgJHtwb3MudG9wfXB4YDtcbiAgICBsaWdodFN0eWxlLmxlZnQgPSBgJHtwb3MubGVmdH1weGA7XG4gICAgbGlnaHRTdHlsZS53aWR0aCA9IGAke3Bvcy53aWR0aH1weGA7XG4gICAgbGlnaHRTdHlsZS5oZWlnaHQgPSBgJHtwb3MuaGVpZ2h0fXB4YDtcblxuICAgIHRoaXMudXBkYXRlUHJldkVsU3RhdHVzKGZhbHNlKTtcbiAgICB0aGlzLnNjcm9sbChwb3MpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVQcmV2RWxTdGF0dXMoc3RhdHVzOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucHJldlNlbGVjdG9yRWwpIHtcbiAgICAgIHRoaXMucHJldlNlbGVjdG9yRWwuY2xhc3NMaXN0W3N0YXR1cyA/ICdhZGQnIDogJ3JlbW92ZSddKCdvbmJvYXJkaW5nX19saWdodC1lbCcpO1xuICAgIH1cbiAgfVxuXG4gIHRvKHR5cGU6IE9uYm9hcmRpbmdPcFR5cGUpOiB2b2lkIHtcbiAgICB0aGlzLm9wLmVtaXQodHlwZSk7XG4gIH1cblxuICBoYW5kbGVNYXNrKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvbmZpZy5tYXNrQ2xvc2FibGUgPT09IHRydWUpIHtcbiAgICAgIHRoaXMucG9wb3Zlci5jb21wb25lbnQhLmhpZGUoKTtcbiAgICAgIHRoaXMudG8oJ2RvbmUnKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lKTtcbiAgICB0aGlzLnVwZGF0ZVByZXZFbFN0YXR1cyhmYWxzZSk7XG4gIH1cbn1cbiIsIkBpZiAoIXJ1bm5pbmcgJiYgY29uZmlnLm1hc2spIHtcbiAgPGRpdiBjbGFzcz1cIm9uYm9hcmRpbmdfX21hc2tcIiAoY2xpY2spPVwiaGFuZGxlTWFzaygpXCI+PC9kaXY+XG59XG5AaWYgKGl0ZW0pIHtcbiAgPGRpdlxuICAgIGNsYXNzPVwib25ib2FyZGluZ19fbGlnaHRcIlxuICAgIFtjbGFzcy5vbmJvYXJkaW5nX19saWdodC1oaWRlXT1cInJ1bm5pbmdcIlxuICAgIFthdHRyLnN0eWxlXT1cIml0ZW0ubGlnaHRTdHlsZVwiXG4gICAgbnotcG9wb3ZlclxuICAgICNwb3BvdmVyPVwibnpQb3BvdmVyXCJcbiAgICBbbnpQb3BvdmVyVGl0bGVdPVwiaXRlbS50aXRsZVwiXG4gICAgW256UG9wb3ZlckNvbnRlbnRdPVwiY29udGVudFwiXG4gICAgW256UG9wb3ZlclZpc2libGVdPVwiIXJ1bm5pbmdcIlxuICAgIFtuelBvcG92ZXJUcmlnZ2VyXT1cIm51bGxcIlxuICAgIFtuelBvcG92ZXJQbGFjZW1lbnRdPVwiaXRlbS5wb3NpdGlvblwiXG4gICAgW256UG9wb3Zlck92ZXJsYXlDbGFzc05hbWVdPVwiaXRlbS5jbGFzc05hbWVcIlxuICAgIFtuelBvcG92ZXJPdmVybGF5U3R5bGVdPVwieyAnbWF4LXdpZHRoLnB4JzogaXRlbS53aWR0aCwgZGlyZWN0aW9uOiBkaXIgfVwiXG4gICAgW256Tm9BbmltYXRpb25dPVwidHJ1ZVwiXG4gID48L2Rpdj5cbiAgPG5nLXRlbXBsYXRlICNjb250ZW50PlxuICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJpdGVtLmNvbnRlbnRcIj5cbiAgICAgIDxkaXYgW2lubmVySFRNTF09XCJpdGVtLmNvbnRlbnRcIj48L2Rpdj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8ZGl2IGNsYXNzPVwiZmxleC1jZW50ZXItYmV0d2VlbiBvbmJvYXJkaW5nX19mb290ZXJcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwib25ib2FyZGluZ19fdG90YWxcIj5cbiAgICAgICAgQGlmIChjb25maWcuc2hvd1RvdGFsKSB7XG4gICAgICAgICAge3sgYWN0aXZlICsgMSB9fS97eyBtYXggfX1cbiAgICAgICAgfVxuICAgICAgPC9zcGFuPlxuICAgICAgPGRpdiBjbGFzcz1cIm9uYm9hcmRpbmdfX2J0bnNcIj5cbiAgICAgICAgQGlmICghbGFzdCAmJiBpdGVtLnNraXAgIT09IG51bGwgJiYgaXRlbS5za2lwICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICA8YSBuei1idXR0b24gbnpUeXBlPVwibGlua1wiIChjbGljayk9XCJ0bygnc2tpcCcpXCIgbnpTaXplPVwic21hbGxcIiBkYXRhLWJ0blR5cGU9XCJza2lwXCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiaXRlbS5za2lwXCI+e3sgaXRlbS5za2lwIH19PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPC9hPlxuICAgICAgICB9XG4gICAgICAgIEBpZiAoIWZpcnN0ICYmIGl0ZW0ucHJldiAhPT0gbnVsbCkge1xuICAgICAgICAgIDxhIG56LWJ1dHRvbiAoY2xpY2spPVwidG8oJ3ByZXYnKVwiIG56U2l6ZT1cInNtYWxsXCIgZGF0YS1idG5UeXBlPVwicHJldlwiPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cIml0ZW0ucHJldlwiPnt7IGl0ZW0ucHJldiB9fTwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgfVxuICAgICAgICBAaWYgKCFsYXN0ICYmIGl0ZW0ubmV4dCAhPT0gbnVsbCAmJiBpdGVtLm5leHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIDxhIG56LWJ1dHRvbiAoY2xpY2spPVwidG8oJ25leHQnKVwiIG56VHlwZT1cInByaW1hcnlcIiBuelNpemU9XCJzbWFsbFwiIGRhdGEtYnRuVHlwZT1cIm5leHRcIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJpdGVtLm5leHRcIj57eyBpdGVtLm5leHQgfX08L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIH1cbiAgICAgICAgQGlmIChsYXN0ICYmIGl0ZW0uZG9uZSAhPT0gbnVsbCAmJiBpdGVtLmRvbmUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIDxhIG56LWJ1dHRvbiAoY2xpY2spPVwidG8oJ2RvbmUnKVwiIG56VHlwZT1cInByaW1hcnlcIiBuelNpemU9XCJzbWFsbFwiIGRhdGEtYnRuVHlwZT1cImRvbmVcIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJpdGVtLmRvbmVcIj57eyBpdGVtLmRvbmUgfX08L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L25nLXRlbXBsYXRlPlxufVxuIl19