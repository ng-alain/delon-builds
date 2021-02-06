import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Inject, Optional, ViewEncapsulation, } from '@angular/core';
export class OnboardingComponent {
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
OnboardingComponent.decorators = [
    { type: Component, args: [{
                selector: 'onboarding',
                template: "<div *ngIf=\"!running && config.mask\" class=\"onboarding__mask\" (click)=\"handleMask()\"></div>\n<div\n  *ngIf=\"item\"\n  class=\"onboarding__light\"\n  [class.onboarding__light-hide]=\"running\"\n  [attr.style]=\"item.lightStyle\"\n  nz-popover\n  [nzPopoverTitle]=\"item.title\"\n  [nzPopoverContent]=\"content\"\n  [nzPopoverVisible]=\"!running\"\n  [nzPopoverTrigger]=\"null\"\n  [nzPopoverPlacement]=\"item.position\"\n  [nzPopoverOverlayClassName]=\"item.className\"\n  [nzPopoverOverlayStyle]=\"{ 'max-width.px': item.width, direction: dir }\"\n  [nzNoAnimation]=\"true\"\n></div>\n<ng-template #content>\n  <ng-container *nzStringTemplateOutlet=\"item.content\">\n    <div [innerHTML]=\"item.content\"></div>\n  </ng-container>\n  <div class=\"flex-center-between onboarding__footer\">\n    <span class=\"onboarding__total\">\n      <ng-container *ngIf=\"config.showTotal\">{{ active + 1 }}/{{ max }}</ng-container>\n    </span>\n    <div class=\"onboarding__btns\">\n      <a *ngIf=\"!last && item.skip !== null\" nz-button nzType=\"link\" (click)=\"to('skip')\" nzSize=\"small\" data-btnType=\"skip\">\n        <ng-container *nzStringTemplateOutlet=\"item.skip\">{{ item.skip }}</ng-container>\n      </a>\n      <a *ngIf=\"!first && item.prev !== null\" nz-button (click)=\"to('prev')\" nzSize=\"small\" data-btnType=\"prev\">\n        <ng-container *nzStringTemplateOutlet=\"item.prev\">{{ item.prev }}</ng-container>\n      </a>\n      <a *ngIf=\"!last && item.next !== null\" nz-button (click)=\"to('next')\" nzType=\"primary\" nzSize=\"small\" data-btnType=\"next\">\n        <ng-container *nzStringTemplateOutlet=\"item.next\">{{ item.next }}</ng-container>\n      </a>\n      <a *ngIf=\"last && item.done !== null\" nz-button (click)=\"to('done')\" nzType=\"primary\" nzSize=\"small\" data-btnType=\"done\">\n        <ng-container *nzStringTemplateOutlet=\"item.done\">{{ item.done }}</ng-container>\n      </a>\n    </div>\n  </div>\n</ng-template>\n",
                host: {
                    '[class.onboarding]': `true`,
                    '[class.onboarding-rtl]': `dir === 'rtl'`,
                    '[attr.data-onboarding-active]': `active`,
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            },] }
];
/** @nocollapse */
OnboardingComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] },
    { type: Platform },
    { type: ChangeDetectorRef }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvb25ib2FyZGluZy9vbmJvYXJkaW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFFTixRQUFRLEVBQ1IsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBeUJ2QixNQUFNLE9BQU8sbUJBQW1CO0lBMkI5QixZQUNVLEVBQTJCLEVBQ0csR0FBUSxFQUN0QyxRQUFrQixFQUNsQixHQUFzQjtRQUh0QixPQUFFLEdBQUYsRUFBRSxDQUF5QjtRQUNHLFFBQUcsR0FBSCxHQUFHLENBQUs7UUFDdEMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQTFCaEMsV0FBTSxHQUFHLENBQUMsQ0FBQztRQUNYLFFBQUcsR0FBRyxDQUFDLENBQUM7UUFDQyxPQUFFLEdBQUcsSUFBSSxZQUFZLEVBQW9CLENBQUM7UUFDbkQsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixRQUFHLEdBQWMsS0FBSyxDQUFDO0lBdUJwQixDQUFDO0lBckJKLElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRU8sT0FBTztRQUNiLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNsQixD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QUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7OztZQWpJRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLCs3REFBMEM7Z0JBQzFDLElBQUksRUFBRTtvQkFDSixvQkFBb0IsRUFBRSxNQUFNO29CQUM1Qix3QkFBd0IsRUFBRSxlQUFlO29CQUN6QywrQkFBK0IsRUFBRSxRQUFRO2lCQUMxQztnQkFDRCxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7Ozs7WUE5QkMsVUFBVTs0Q0E0RFAsUUFBUSxZQUFJLE1BQU0sU0FBQyxRQUFRO1lBbEV2QixRQUFRO1lBSWYsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBPbkRlc3Ryb3ksXG4gIE9wdGlvbmFsLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPbmJvYXJkaW5nQ29uZmlnLCBPbmJvYXJkaW5nSXRlbSwgT25ib2FyZGluZ09wVHlwZSB9IGZyb20gJy4vb25ib2FyZGluZy50eXBlcyc7XG5cbmludGVyZmFjZSBPbmJvYXJkaW5nTGlnaHREYXRhIHtcbiAgZWw6IEhUTUxFbGVtZW50O1xuICB0b3A6IG51bWJlcjtcbiAgbGVmdDogbnVtYmVyO1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgY2xpZW50SGVpZ2h0OiBudW1iZXI7XG4gIGNsaWVudFdpZHRoOiBudW1iZXI7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ29uYm9hcmRpbmcnLFxuICB0ZW1wbGF0ZVVybDogJy4vb25ib2FyZGluZy5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLm9uYm9hcmRpbmddJzogYHRydWVgLFxuICAgICdbY2xhc3Mub25ib2FyZGluZy1ydGxdJzogYGRpciA9PT0gJ3J0bCdgLFxuICAgICdbYXR0ci5kYXRhLW9uYm9hcmRpbmctYWN0aXZlXSc6IGBhY3RpdmVgLFxuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIE9uYm9hcmRpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIHRpbWU6IGFueTtcbiAgcHJpdmF0ZSBwcmV2U2VsZWN0b3JFbDogSFRNTEVsZW1lbnQ7XG4gIGNvbmZpZzogT25ib2FyZGluZ0NvbmZpZztcbiAgaXRlbTogT25ib2FyZGluZ0l0ZW07XG4gIGFjdGl2ZSA9IDA7XG4gIG1heCA9IDA7XG4gIHJlYWRvbmx5IG9wID0gbmV3IEV2ZW50RW1pdHRlcjxPbmJvYXJkaW5nT3BUeXBlPigpO1xuICBydW5uaW5nID0gZmFsc2U7XG4gIGRpcjogRGlyZWN0aW9uID0gJ2x0cic7XG5cbiAgZ2V0IGZpcnN0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZSA9PT0gMDtcbiAgfVxuXG4gIGdldCBsYXN0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZSA9PT0gdGhpcy5tYXggLSAxO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0RG9jKCk6IERvY3VtZW50IHtcbiAgICByZXR1cm4gdGhpcy5kb2M7XG4gIH1cblxuICBwcml2YXRlIF9nZXRXaW4oKTogV2luZG93IHtcbiAgICByZXR1cm4gdGhpcy5fZ2V0RG9jKCkuZGVmYXVsdFZpZXcgfHwgd2luZG93O1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IGFueSxcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSxcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICkge31cblxuICBwcml2YXRlIGdldExpZ2h0RGF0YSgpOiBPbmJvYXJkaW5nTGlnaHREYXRhIHwgbnVsbCB7XG4gICAgY29uc3QgZG9jID0gdGhpcy5fZ2V0RG9jKCk7XG4gICAgY29uc3Qgd2luID0gdGhpcy5fZ2V0V2luKCk7XG4gICAgY29uc3QgZWwgPSBkb2MucXVlcnlTZWxlY3Rvcih0aGlzLml0ZW0uc2VsZWN0b3JzKSBhcyBIVE1MRWxlbWVudDtcbiAgICBpZiAoIWVsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxUb3AgPSB3aW4ucGFnZVlPZmZzZXQgfHwgZG9jLmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jLmJvZHkuc2Nyb2xsVG9wO1xuICAgIGNvbnN0IHNjcm9sbExlZnQgPSB3aW4ucGFnZVhPZmZzZXQgfHwgZG9jLmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0IHx8IGRvYy5ib2R5LnNjcm9sbExlZnQ7XG4gICAgY29uc3QgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHRvcCA9IHJlY3QudG9wICsgc2Nyb2xsVG9wO1xuICAgIGNvbnN0IGxlZnQgPSByZWN0LmxlZnQgKyBzY3JvbGxMZWZ0O1xuICAgIGNvbnN0IHBhZGRpbmcgPSA4O1xuICAgIGNvbnN0IG5lZWRQYWRkaW5nID0gdG9wID4gcGFkZGluZyAmJiBsZWZ0ID4gcGFkZGluZztcbiAgICBjb25zdCBvZmZzZXRQb3MgPSBuZWVkUGFkZGluZyA/IHBhZGRpbmcgOiAwO1xuICAgIGNvbnN0IG9mZnNldFdIID0gbmVlZFBhZGRpbmcgPyBwYWRkaW5nICogMiA6IDA7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRvcDogdG9wIC0gb2Zmc2V0UG9zLFxuICAgICAgbGVmdDogbGVmdCAtIG9mZnNldFBvcyxcbiAgICAgIHdpZHRoOiByZWN0LndpZHRoICsgb2Zmc2V0V0gsXG4gICAgICBoZWlnaHQ6IHJlY3QuaGVpZ2h0ICsgb2Zmc2V0V0gsXG4gICAgICBlbCxcbiAgICAgIGNsaWVudFdpZHRoOiBkb2MuYm9keS5jbGllbnRXaWR0aCxcbiAgICAgIGNsaWVudEhlaWdodDogZG9jLmJvZHkuY2xpZW50SGVpZ2h0LFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIHNjcm9sbChwb3M6IE9uYm9hcmRpbmdMaWdodERhdGEpOiB2b2lkIHtcbiAgICB0aGlzLnByZXZTZWxlY3RvckVsID0gcG9zLmVsO1xuICAgIGNvbnN0IHNjcm9sbFkgPSBwb3MudG9wIC0gKHBvcy5jbGllbnRIZWlnaHQgLSBwb3MuaGVpZ2h0KSAvIDI7XG4gICAgdGhpcy5fZ2V0V2luKCkuc2Nyb2xsVG8oeyB0b3A6IHNjcm9sbFkgfSk7XG4gICAgdGhpcy51cGRhdGVQcmV2RWxTdGF0dXModHJ1ZSk7XG4gIH1cblxuICB1cGRhdGVSdW5uaW5nKHN0YXR1czogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMucnVubmluZyA9IHN0YXR1cztcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgaWYgKCFzdGF0dXMpIHtcbiAgICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVBvc2l0aW9uKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBwb3MgPSB0aGlzLmdldExpZ2h0RGF0YSgpO1xuICAgIGlmIChwb3MgPT0gbnVsbCkge1xuICAgICAgY29uc29sZS53YXJuKGBEaWQgbm90IG1hdGNoZXMgc2VsZWN0b3JzIFske3RoaXMuaXRlbS5zZWxlY3RvcnN9XWApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGxpZ2h0U3R5bGUgPSAodGhpcy5lbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vbmJvYXJkaW5nX19saWdodCcpIGFzIEhUTUxFbGVtZW50KS5zdHlsZTtcbiAgICBsaWdodFN0eWxlLnRvcCA9IGAke3Bvcy50b3B9cHhgO1xuICAgIGxpZ2h0U3R5bGUubGVmdCA9IGAke3Bvcy5sZWZ0fXB4YDtcbiAgICBsaWdodFN0eWxlLndpZHRoID0gYCR7cG9zLndpZHRofXB4YDtcbiAgICBsaWdodFN0eWxlLmhlaWdodCA9IGAke3Bvcy5oZWlnaHR9cHhgO1xuXG4gICAgdGhpcy51cGRhdGVQcmV2RWxTdGF0dXMoZmFsc2UpO1xuICAgIHRoaXMuc2Nyb2xsKHBvcyk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVByZXZFbFN0YXR1cyhzdGF0dXM6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wcmV2U2VsZWN0b3JFbCkge1xuICAgICAgdGhpcy5wcmV2U2VsZWN0b3JFbC5jbGFzc0xpc3Rbc3RhdHVzID8gJ2FkZCcgOiAncmVtb3ZlJ10oJ29uYm9hcmRpbmdfX2xpZ2h0LWVsJyk7XG4gICAgfVxuICB9XG5cbiAgdG8odHlwZTogT25ib2FyZGluZ09wVHlwZSk6IHZvaWQge1xuICAgIHRoaXMub3AuZW1pdCh0eXBlKTtcbiAgfVxuXG4gIGhhbmRsZU1hc2soKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29uZmlnLm1hc2tDbG9zYWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy50bygnZG9uZScpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWUpO1xuICAgIHRoaXMudXBkYXRlUHJldkVsU3RhdHVzKGZhbHNlKTtcbiAgfVxufVxuIl19