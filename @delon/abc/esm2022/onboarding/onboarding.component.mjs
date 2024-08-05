import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, ViewChild, ViewEncapsulation, inject } from '@angular/core';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core/no-animation';
import { NzStringTemplateOutletDirective } from 'ng-zorro-antd/core/outlet';
import { NzPopoverDirective } from 'ng-zorro-antd/popover';
import * as i0 from "@angular/core";
export class OnboardingComponent {
    constructor() {
        this.el = inject(ElementRef).nativeElement;
        this.platform = inject(Platform);
        this.cdr = inject(ChangeDetectorRef);
        this.doc = inject(DOCUMENT);
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
        const lightStyle = this.el.querySelector('.onboarding__light').style;
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.3", ngImport: i0, type: OnboardingComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.1.3", type: OnboardingComponent, isStandalone: true, selector: "onboarding", host: { properties: { "class.onboarding": "true", "class.onboarding-rtl": "dir === 'rtl'", "attr.data-onboarding-active": "active" } }, viewQueries: [{ propertyName: "popover", first: true, predicate: ["popover"], descendants: true }], ngImport: i0, template: "@if (!running && config.mask) {\n  <div class=\"onboarding__mask\" (click)=\"handleMask()\"></div>\n}\n@if (item) {\n  <div\n    class=\"onboarding__light\"\n    [class.onboarding__light-hide]=\"running\"\n    [attr.style]=\"item.lightStyle\"\n    nz-popover\n    #popover=\"nzPopover\"\n    [nzPopoverTitle]=\"item.title\"\n    [nzPopoverContent]=\"content\"\n    [nzPopoverVisible]=\"!running\"\n    [nzPopoverTrigger]=\"null\"\n    [nzPopoverPlacement]=\"item.position\"\n    [nzPopoverOverlayClassName]=\"item.className\"\n    [nzPopoverOverlayStyle]=\"{ 'max-width.px': item.width, direction: dir }\"\n    [nzNoAnimation]=\"true\"\n  ></div>\n  <ng-template #content>\n    <ng-container *nzStringTemplateOutlet=\"item.content\">\n      <div [innerHTML]=\"item.content\"></div>\n    </ng-container>\n    <div class=\"flex-center-between onboarding__footer\">\n      <span class=\"onboarding__total\">\n        @if (config.showTotal) {\n          {{ active + 1 }}/{{ max }}\n        }\n      </span>\n      <div class=\"onboarding__btns\">\n        @if (!last && item.skip !== null && item.skip !== undefined) {\n          <a nz-button nzType=\"link\" (click)=\"to('skip')\" nzSize=\"small\" data-btnType=\"skip\">\n            <ng-container *nzStringTemplateOutlet=\"item.skip\">{{ item.skip }}</ng-container>\n          </a>\n        }\n        @if (!first && item.prev !== null) {\n          <a nz-button (click)=\"to('prev')\" nzSize=\"small\" data-btnType=\"prev\">\n            <ng-container *nzStringTemplateOutlet=\"item.prev\">{{ item.prev }}</ng-container>\n          </a>\n        }\n        @if (!last && item.next !== null && item.next !== undefined) {\n          <a nz-button (click)=\"to('next')\" nzType=\"primary\" nzSize=\"small\" data-btnType=\"next\">\n            <ng-container *nzStringTemplateOutlet=\"item.next\">{{ item.next }}</ng-container>\n          </a>\n        }\n        @if (last && item.done !== null && item.done !== undefined) {\n          <a nz-button (click)=\"to('done')\" nzType=\"primary\" nzSize=\"small\" data-btnType=\"done\">\n            <ng-container *nzStringTemplateOutlet=\"item.done\">{{ item.done }}</ng-container>\n          </a>\n        }\n      </div>\n    </div>\n  </ng-template>\n}\n", dependencies: [{ kind: "directive", type: NzPopoverDirective, selector: "[nz-popover]", inputs: ["nzPopoverArrowPointAtCenter", "nzPopoverTitle", "nzPopoverContent", "nz-popover", "nzPopoverTrigger", "nzPopoverPlacement", "nzPopoverOrigin", "nzPopoverVisible", "nzPopoverMouseEnterDelay", "nzPopoverMouseLeaveDelay", "nzPopoverOverlayClassName", "nzPopoverOverlayStyle", "nzPopoverBackdrop"], outputs: ["nzPopoverVisibleChange"], exportAs: ["nzPopover"] }, { kind: "directive", type: NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { kind: "component", type: NzButtonComponent, selector: "button[nz-button], a[nz-button]", inputs: ["nzBlock", "nzGhost", "nzSearch", "nzLoading", "nzDanger", "disabled", "tabIndex", "nzType", "nzShape", "nzSize"], exportAs: ["nzButton"] }, { kind: "directive", type: NzNoAnimationDirective, selector: "[nzNoAnimation]", inputs: ["nzNoAnimation"], exportAs: ["nzNoAnimation"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.3", ngImport: i0, type: OnboardingComponent, decorators: [{
            type: Component,
            args: [{ selector: 'onboarding', host: {
                        '[class.onboarding]': `true`,
                        '[class.onboarding-rtl]': `dir === 'rtl'`,
                        '[attr.data-onboarding-active]': `active`
                    }, preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, standalone: true, imports: [NzPopoverDirective, NzStringTemplateOutletDirective, NzButtonComponent, NzNoAnimationDirective], template: "@if (!running && config.mask) {\n  <div class=\"onboarding__mask\" (click)=\"handleMask()\"></div>\n}\n@if (item) {\n  <div\n    class=\"onboarding__light\"\n    [class.onboarding__light-hide]=\"running\"\n    [attr.style]=\"item.lightStyle\"\n    nz-popover\n    #popover=\"nzPopover\"\n    [nzPopoverTitle]=\"item.title\"\n    [nzPopoverContent]=\"content\"\n    [nzPopoverVisible]=\"!running\"\n    [nzPopoverTrigger]=\"null\"\n    [nzPopoverPlacement]=\"item.position\"\n    [nzPopoverOverlayClassName]=\"item.className\"\n    [nzPopoverOverlayStyle]=\"{ 'max-width.px': item.width, direction: dir }\"\n    [nzNoAnimation]=\"true\"\n  ></div>\n  <ng-template #content>\n    <ng-container *nzStringTemplateOutlet=\"item.content\">\n      <div [innerHTML]=\"item.content\"></div>\n    </ng-container>\n    <div class=\"flex-center-between onboarding__footer\">\n      <span class=\"onboarding__total\">\n        @if (config.showTotal) {\n          {{ active + 1 }}/{{ max }}\n        }\n      </span>\n      <div class=\"onboarding__btns\">\n        @if (!last && item.skip !== null && item.skip !== undefined) {\n          <a nz-button nzType=\"link\" (click)=\"to('skip')\" nzSize=\"small\" data-btnType=\"skip\">\n            <ng-container *nzStringTemplateOutlet=\"item.skip\">{{ item.skip }}</ng-container>\n          </a>\n        }\n        @if (!first && item.prev !== null) {\n          <a nz-button (click)=\"to('prev')\" nzSize=\"small\" data-btnType=\"prev\">\n            <ng-container *nzStringTemplateOutlet=\"item.prev\">{{ item.prev }}</ng-container>\n          </a>\n        }\n        @if (!last && item.next !== null && item.next !== undefined) {\n          <a nz-button (click)=\"to('next')\" nzType=\"primary\" nzSize=\"small\" data-btnType=\"next\">\n            <ng-container *nzStringTemplateOutlet=\"item.next\">{{ item.next }}</ng-container>\n          </a>\n        }\n        @if (last && item.done !== null && item.done !== undefined) {\n          <a nz-button (click)=\"to('done')\" nzType=\"primary\" nzSize=\"small\" data-btnType=\"done\">\n            <ng-container *nzStringTemplateOutlet=\"item.done\">{{ item.done }}</ng-container>\n          </a>\n        }\n      </div>\n    </div>\n  </ng-template>\n}\n" }]
        }], propDecorators: { popover: [{
                type: ViewChild,
                args: ['popover', { static: false }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvb25ib2FyZGluZy9vbmJvYXJkaW5nLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9vbmJvYXJkaW5nL29uYm9hcmRpbmcuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFFWixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLE1BQU0sRUFDUCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUU1RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUE0QjNELE1BQU0sT0FBTyxtQkFBbUI7SUFkaEM7UUFlbUIsT0FBRSxHQUFnQixNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsYUFBYSxDQUFDO1FBQ25ELGFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUIsUUFBRyxHQUFHLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ2hDLFFBQUcsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFNeEMsV0FBTSxHQUFHLENBQUMsQ0FBQztRQUNYLFFBQUcsR0FBRyxDQUFDLENBQUM7UUFDQyxPQUFFLEdBQUcsSUFBSSxZQUFZLEVB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QWtCLEVBQUUsK0JBQStCLEVBQUUsaUJBQWlCLEVBQUUsc0JBQXNCLENBQUM7OEJBaUJ4RCxPQUFPO3NCQUF2RCxTQUFTO3VCQUFDLFNBQVMsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3Rpb24gfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkRlc3Ryb3ksXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIGluamVjdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTnpCdXR0b25Db21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL2J1dHRvbic7XG5pbXBvcnQgeyBOek5vQW5pbWF0aW9uRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL25vLWFuaW1hdGlvbic7XG5pbXBvcnQgeyBOelN0cmluZ1RlbXBsYXRlT3V0bGV0RGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL291dGxldCc7XG5pbXBvcnQgdHlwZSB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBOelBvcG92ZXJEaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL3BvcG92ZXInO1xuXG5pbXBvcnQgeyBPbmJvYXJkaW5nQ29uZmlnLCBPbmJvYXJkaW5nSXRlbSwgT25ib2FyZGluZ09wVHlwZSB9IGZyb20gJy4vb25ib2FyZGluZy50eXBlcyc7XG5cbmludGVyZmFjZSBPbmJvYXJkaW5nTGlnaHREYXRhIHtcbiAgZWw6IEhUTUxFbGVtZW50O1xuICB0b3A6IG51bWJlcjtcbiAgbGVmdDogbnVtYmVyO1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgY2xpZW50SGVpZ2h0OiBudW1iZXI7XG4gIGNsaWVudFdpZHRoOiBudW1iZXI7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ29uYm9hcmRpbmcnLFxuICB0ZW1wbGF0ZVVybDogJy4vb25ib2FyZGluZy5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLm9uYm9hcmRpbmddJzogYHRydWVgLFxuICAgICdbY2xhc3Mub25ib2FyZGluZy1ydGxdJzogYGRpciA9PT0gJ3J0bCdgLFxuICAgICdbYXR0ci5kYXRhLW9uYm9hcmRpbmctYWN0aXZlXSc6IGBhY3RpdmVgXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW056UG9wb3ZlckRpcmVjdGl2ZSwgTnpTdHJpbmdUZW1wbGF0ZU91dGxldERpcmVjdGl2ZSwgTnpCdXR0b25Db21wb25lbnQsIE56Tm9BbmltYXRpb25EaXJlY3RpdmVdXG59KVxuZXhwb3J0IGNsYXNzIE9uYm9hcmRpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xuICBwcml2YXRlIHJlYWRvbmx5IGVsOiBIVE1MRWxlbWVudCA9IGluamVjdChFbGVtZW50UmVmKS5uYXRpdmVFbGVtZW50O1xuICBwcml2YXRlIHJlYWRvbmx5IHBsYXRmb3JtID0gaW5qZWN0KFBsYXRmb3JtKTtcbiAgcHJpdmF0ZSByZWFkb25seSBjZHIgPSBpbmplY3QoQ2hhbmdlRGV0ZWN0b3JSZWYpO1xuICBwcml2YXRlIHJlYWRvbmx5IGRvYyA9IGluamVjdChET0NVTUVOVCk7XG5cbiAgcHJpdmF0ZSB0aW1lOiBOelNhZmVBbnk7XG4gIHByaXZhdGUgcHJldlNlbGVjdG9yRWw/OiBIVE1MRWxlbWVudDtcbiAgY29uZmlnITogT25ib2FyZGluZ0NvbmZpZztcbiAgaXRlbSE6IE9uYm9hcmRpbmdJdGVtO1xuICBhY3RpdmUgPSAwO1xuICBtYXggPSAwO1xuICByZWFkb25seSBvcCA9IG5ldyBFdmVudEVtaXR0ZXI8T25ib2FyZGluZ09wVHlwZT4oKTtcbiAgcnVubmluZyA9IGZhbHNlO1xuICBkaXI6IERpcmVjdGlvbiA9ICdsdHInO1xuICBAVmlld0NoaWxkKCdwb3BvdmVyJywgeyBzdGF0aWM6IGZhbHNlIH0pIHByaXZhdGUgcG9wb3ZlciE6IE56UG9wb3ZlckRpcmVjdGl2ZTtcblxuICBnZXQgZmlyc3QoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlID09PSAwO1xuICB9XG5cbiAgZ2V0IGxhc3QoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlID09PSB0aGlzLm1heCAtIDE7XG4gIH1cblxuICBwcml2YXRlIF9nZXREb2MoKTogRG9jdW1lbnQge1xuICAgIHJldHVybiB0aGlzLmRvYztcbiAgfVxuXG4gIHByaXZhdGUgX2dldFdpbigpOiBXaW5kb3cge1xuICAgIHJldHVybiB0aGlzLl9nZXREb2MoKS5kZWZhdWx0VmlldyB8fCB3aW5kb3c7XG4gIH1cblxuICBwcml2YXRlIGdldExpZ2h0RGF0YSgpOiBPbmJvYXJkaW5nTGlnaHREYXRhIHwgbnVsbCB7XG4gICAgY29uc3QgZG9jID0gdGhpcy5fZ2V0RG9jKCk7XG4gICAgY29uc3Qgd2luID0gdGhpcy5fZ2V0V2luKCk7XG4gICAgY29uc3QgZWwgPSBkb2MucXVlcnlTZWxlY3Rvcih0aGlzLml0ZW0uc2VsZWN0b3JzKSBhcyBIVE1MRWxlbWVudDtcbiAgICBpZiAoIWVsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxUb3AgPSB3aW4uc2Nyb2xsWSB8fCBkb2MuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2MuYm9keS5zY3JvbGxUb3A7XG4gICAgY29uc3Qgc2Nyb2xsTGVmdCA9IHdpbi5zY3JvbGxYIHx8IGRvYy5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCB8fCBkb2MuYm9keS5zY3JvbGxMZWZ0O1xuICAgIGNvbnN0IHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCB0b3AgPSByZWN0LnRvcCArIHNjcm9sbFRvcDtcbiAgICBjb25zdCBsZWZ0ID0gcmVjdC5sZWZ0ICsgc2Nyb2xsTGVmdDtcbiAgICBjb25zdCBwYWRkaW5nID0gODtcbiAgICBjb25zdCBuZWVkUGFkZGluZyA9IHRvcCA+IHBhZGRpbmcgJiYgbGVmdCA+IHBhZGRpbmc7XG4gICAgY29uc3Qgb2Zmc2V0UG9zID0gbmVlZFBhZGRpbmcgPyBwYWRkaW5nIDogMDtcbiAgICBjb25zdCBvZmZzZXRXSCA9IG5lZWRQYWRkaW5nID8gcGFkZGluZyAqIDIgOiAwO1xuICAgIHJldHVybiB7XG4gICAgICB0b3A6IHRvcCAtIG9mZnNldFBvcyxcbiAgICAgIGxlZnQ6IGxlZnQgLSBvZmZzZXRQb3MsXG4gICAgICB3aWR0aDogcmVjdC53aWR0aCArIG9mZnNldFdILFxuICAgICAgaGVpZ2h0OiByZWN0LmhlaWdodCArIG9mZnNldFdILFxuICAgICAgZWwsXG4gICAgICBjbGllbnRXaWR0aDogZG9jLmJvZHkuY2xpZW50V2lkdGgsXG4gICAgICBjbGllbnRIZWlnaHQ6IGRvYy5ib2R5LmNsaWVudEhlaWdodFxuICAgIH07XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgLy8gV2FpdGluZyBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9pc3N1ZXMvNjQ5MVxuICAgIHRoaXMucG9wb3Zlci5jb21wb25lbnQhLm9uQ2xpY2tPdXRzaWRlID0gKCkgPT4ge307XG4gIH1cblxuICBwcml2YXRlIHNjcm9sbChwb3M6IE9uYm9hcmRpbmdMaWdodERhdGEpOiB2b2lkIHtcbiAgICB0aGlzLnByZXZTZWxlY3RvckVsID0gcG9zLmVsO1xuICAgIGNvbnN0IHNjcm9sbFkgPSBwb3MudG9wIC0gKHBvcy5jbGllbnRIZWlnaHQgLSBwb3MuaGVpZ2h0KSAvIDI7XG4gICAgdGhpcy5fZ2V0V2luKCkuc2Nyb2xsVG8oeyB0b3A6IHNjcm9sbFkgfSk7XG4gICAgdGhpcy51cGRhdGVQcmV2RWxTdGF0dXModHJ1ZSk7XG4gIH1cblxuICB1cGRhdGVSdW5uaW5nKHN0YXR1czogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMucnVubmluZyA9IHN0YXR1cztcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgaWYgKCFzdGF0dXMpIHtcbiAgICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVBvc2l0aW9uKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBwb3MgPSB0aGlzLmdldExpZ2h0RGF0YSgpO1xuICAgIGlmIChwb3MgPT0gbnVsbCkge1xuICAgICAgaWYgKHR5cGVvZiBuZ0Rldk1vZGUgPT09ICd1bmRlZmluZWQnIHx8IG5nRGV2TW9kZSkge1xuICAgICAgICBjb25zb2xlLndhcm4oYERpZCBub3QgbWF0Y2hlcyBzZWxlY3RvcnMgWyR7dGhpcy5pdGVtLnNlbGVjdG9yc31dYCk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbGlnaHRTdHlsZSA9ICh0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJy5vbmJvYXJkaW5nX19saWdodCcpIGFzIEhUTUxFbGVtZW50KS5zdHlsZTtcbiAgICBsaWdodFN0eWxlLnRvcCA9IGAke3Bvcy50b3B9cHhgO1xuICAgIGxpZ2h0U3R5bGUubGVmdCA9IGAke3Bvcy5sZWZ0fXB4YDtcbiAgICBsaWdodFN0eWxlLndpZHRoID0gYCR7cG9zLndpZHRofXB4YDtcbiAgICBsaWdodFN0eWxlLmhlaWdodCA9IGAke3Bvcy5oZWlnaHR9cHhgO1xuXG4gICAgdGhpcy51cGRhdGVQcmV2RWxTdGF0dXMoZmFsc2UpO1xuICAgIHRoaXMuc2Nyb2xsKHBvcyk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVByZXZFbFN0YXR1cyhzdGF0dXM6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wcmV2U2VsZWN0b3JFbCkge1xuICAgICAgdGhpcy5wcmV2U2VsZWN0b3JFbC5jbGFzc0xpc3Rbc3RhdHVzID8gJ2FkZCcgOiAncmVtb3ZlJ10oJ29uYm9hcmRpbmdfX2xpZ2h0LWVsJyk7XG4gICAgfVxuICB9XG5cbiAgdG8odHlwZTogT25ib2FyZGluZ09wVHlwZSk6IHZvaWQge1xuICAgIHRoaXMub3AuZW1pdCh0eXBlKTtcbiAgfVxuXG4gIGhhbmRsZU1hc2soKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29uZmlnLm1hc2tDbG9zYWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5wb3BvdmVyLmNvbXBvbmVudCEuaGlkZSgpO1xuICAgICAgdGhpcy50bygnZG9uZScpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWUpO1xuICAgIHRoaXMudXBkYXRlUHJldkVsU3RhdHVzKGZhbHNlKTtcbiAgfVxufVxuIiwiQGlmICghcnVubmluZyAmJiBjb25maWcubWFzaykge1xuICA8ZGl2IGNsYXNzPVwib25ib2FyZGluZ19fbWFza1wiIChjbGljayk9XCJoYW5kbGVNYXNrKClcIj48L2Rpdj5cbn1cbkBpZiAoaXRlbSkge1xuICA8ZGl2XG4gICAgY2xhc3M9XCJvbmJvYXJkaW5nX19saWdodFwiXG4gICAgW2NsYXNzLm9uYm9hcmRpbmdfX2xpZ2h0LWhpZGVdPVwicnVubmluZ1wiXG4gICAgW2F0dHIuc3R5bGVdPVwiaXRlbS5saWdodFN0eWxlXCJcbiAgICBuei1wb3BvdmVyXG4gICAgI3BvcG92ZXI9XCJuelBvcG92ZXJcIlxuICAgIFtuelBvcG92ZXJUaXRsZV09XCJpdGVtLnRpdGxlXCJcbiAgICBbbnpQb3BvdmVyQ29udGVudF09XCJjb250ZW50XCJcbiAgICBbbnpQb3BvdmVyVmlzaWJsZV09XCIhcnVubmluZ1wiXG4gICAgW256UG9wb3ZlclRyaWdnZXJdPVwibnVsbFwiXG4gICAgW256UG9wb3ZlclBsYWNlbWVudF09XCJpdGVtLnBvc2l0aW9uXCJcbiAgICBbbnpQb3BvdmVyT3ZlcmxheUNsYXNzTmFtZV09XCJpdGVtLmNsYXNzTmFtZVwiXG4gICAgW256UG9wb3Zlck92ZXJsYXlTdHlsZV09XCJ7ICdtYXgtd2lkdGgucHgnOiBpdGVtLndpZHRoLCBkaXJlY3Rpb246IGRpciB9XCJcbiAgICBbbnpOb0FuaW1hdGlvbl09XCJ0cnVlXCJcbiAgPjwvZGl2PlxuICA8bmctdGVtcGxhdGUgI2NvbnRlbnQ+XG4gICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cIml0ZW0uY29udGVudFwiPlxuICAgICAgPGRpdiBbaW5uZXJIVE1MXT1cIml0ZW0uY29udGVudFwiPjwvZGl2PlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDxkaXYgY2xhc3M9XCJmbGV4LWNlbnRlci1iZXR3ZWVuIG9uYm9hcmRpbmdfX2Zvb3RlclwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJvbmJvYXJkaW5nX190b3RhbFwiPlxuICAgICAgICBAaWYgKGNvbmZpZy5zaG93VG90YWwpIHtcbiAgICAgICAgICB7eyBhY3RpdmUgKyAxIH19L3t7IG1heCB9fVxuICAgICAgICB9XG4gICAgICA8L3NwYW4+XG4gICAgICA8ZGl2IGNsYXNzPVwib25ib2FyZGluZ19fYnRuc1wiPlxuICAgICAgICBAaWYgKCFsYXN0ICYmIGl0ZW0uc2tpcCAhPT0gbnVsbCAmJiBpdGVtLnNraXAgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIDxhIG56LWJ1dHRvbiBuelR5cGU9XCJsaW5rXCIgKGNsaWNrKT1cInRvKCdza2lwJylcIiBuelNpemU9XCJzbWFsbFwiIGRhdGEtYnRuVHlwZT1cInNraXBcIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJpdGVtLnNraXBcIj57eyBpdGVtLnNraXAgfX08L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIH1cbiAgICAgICAgQGlmICghZmlyc3QgJiYgaXRlbS5wcmV2ICE9PSBudWxsKSB7XG4gICAgICAgICAgPGEgbnotYnV0dG9uIChjbGljayk9XCJ0bygncHJldicpXCIgbnpTaXplPVwic21hbGxcIiBkYXRhLWJ0blR5cGU9XCJwcmV2XCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiaXRlbS5wcmV2XCI+e3sgaXRlbS5wcmV2IH19PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPC9hPlxuICAgICAgICB9XG4gICAgICAgIEBpZiAoIWxhc3QgJiYgaXRlbS5uZXh0ICE9PSBudWxsICYmIGl0ZW0ubmV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgPGEgbnotYnV0dG9uIChjbGljayk9XCJ0bygnbmV4dCcpXCIgbnpUeXBlPVwicHJpbWFyeVwiIG56U2l6ZT1cInNtYWxsXCIgZGF0YS1idG5UeXBlPVwibmV4dFwiPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cIml0ZW0ubmV4dFwiPnt7IGl0ZW0ubmV4dCB9fTwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgfVxuICAgICAgICBAaWYgKGxhc3QgJiYgaXRlbS5kb25lICE9PSBudWxsICYmIGl0ZW0uZG9uZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgPGEgbnotYnV0dG9uIChjbGljayk9XCJ0bygnZG9uZScpXCIgbnpUeXBlPVwicHJpbWFyeVwiIG56U2l6ZT1cInNtYWxsXCIgZGF0YS1idG5UeXBlPVwiZG9uZVwiPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cIml0ZW0uZG9uZVwiPnt7IGl0ZW0uZG9uZSB9fTwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvbmctdGVtcGxhdGU+XG59XG4iXX0=