import { __decorate } from "tslib";
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, Output, ViewEncapsulation } from '@angular/core';
import { ActivationEnd, ActivationStart } from '@angular/router';
import { fromEvent } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';
import { InputBoolean, InputNumber } from '@delon/util/decorator';
import * as i0 from "@angular/core";
import * as i1 from "./full-content.service";
import * as i2 from "@angular/router";
const wrapCls = `full-content__body`;
const openedCls = `full-content__opened`;
const hideTitleCls = `full-content__hidden-title`;
export class FullContentComponent {
    constructor(el, cdr, srv, router, doc) {
        this.el = el;
        this.cdr = cdr;
        this.srv = srv;
        this.router = router;
        this.doc = doc;
        this.inited = false;
        this.id = `_full-content-${Math.random().toString(36).substring(2)}`;
        this.scroll$ = null;
        this._height = 0;
        this.hideTitle = true;
        this.padding = 24;
        this.fullscreenChange = new EventEmitter();
    }
    updateCls() {
        const clss = this.bodyEl.classList;
        if (this.fullscreen) {
            clss.add(openedCls);
            if (this.hideTitle) {
                clss.add(hideTitleCls);
            }
        }
        else {
            clss.remove(openedCls);
            if (this.hideTitle) {
                clss.remove(hideTitleCls);
            }
        }
    }
    update() {
        this.updateCls();
        this.updateHeight();
        this.fullscreenChange.emit(this.fullscreen);
    }
    updateHeight() {
        this._height =
            this.bodyEl.getBoundingClientRect().height - this.el.nativeElement.getBoundingClientRect().top - this.padding;
        this.cdr.detectChanges();
    }
    removeInBody() {
        this.bodyEl.classList.remove(wrapCls, openedCls, hideTitleCls);
    }
    ngOnInit() {
        this.inited = true;
        this.bodyEl = this.doc.querySelector('body');
        this.bodyEl.classList.add(wrapCls);
        this.el.nativeElement.id = this.id;
        this.updateCls();
        // when window resize
        this.scroll$ = fromEvent(window, 'resize')
            .pipe(debounceTime(200))
            .subscribe(() => this.updateHeight());
        // when servier changed
        this.srv$ = this.srv.change.pipe(filter(res => res !== null)).subscribe(() => this.toggle());
        // when router changed
        this.route$ = this.router.events
            .pipe(filter((e) => e instanceof ActivationStart || e instanceof ActivationEnd), debounceTime(200))
            .subscribe(() => {
            if (!!this.doc.querySelector(`#${this.id}`)) {
                this.bodyEl.classList.add(wrapCls);
                this.updateCls();
            }
            else {
                this.removeInBody();
            }
        });
    }
    toggle() {
        this.fullscreen = !this.fullscreen;
        this.update();
        this.updateHeight();
    }
    ngAfterViewInit() {
        setTimeout(() => this.updateHeight());
    }
    ngOnChanges() {
        if (this.inited)
            this.update();
    }
    ngOnDestroy() {
        this.removeInBody();
        this.scroll$.unsubscribe();
        this.srv$.unsubscribe();
        this.route$.unsubscribe();
    }
}
FullContentComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: FullContentComponent, deps: [{ token: i0.ElementRef }, { token: i0.ChangeDetectorRef }, { token: i1.FullContentService }, { token: i2.Router }, { token: DOCUMENT }], target: i0.ɵɵFactoryTarget.Component });
FullContentComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.1", type: FullContentComponent, selector: "full-content", inputs: { fullscreen: "fullscreen", hideTitle: "hideTitle", padding: "padding" }, outputs: { fullscreenChange: "fullscreenChange" }, host: { properties: { "class.full-content": "true", "style.height.px": "_height" } }, exportAs: ["fullContent"], usesOnChanges: true, ngImport: i0, template: ` <ng-content></ng-content> `, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    InputBoolean()
], FullContentComponent.prototype, "fullscreen", void 0);
__decorate([
    InputBoolean()
], FullContentComponent.prototype, "hideTitle", void 0);
__decorate([
    InputNumber()
], FullContentComponent.prototype, "padding", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: FullContentComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'full-content',
                    exportAs: 'fullContent',
                    template: ` <ng-content></ng-content> `,
                    host: {
                        '[class.full-content]': 'true',
                        '[style.height.px]': '_height'
                    },
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i1.FullContentService }, { type: i2.Router }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }]; }, propDecorators: { fullscreen: [{
                type: Input
            }], hideTitle: [{
                type: Input
            }], padding: [{
                type: Input
            }], fullscreenChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbC1jb250ZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9mdWxsLWNvbnRlbnQvZnVsbC1jb250ZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFFTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUVULFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUlMLE1BQU0sRUFDTixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQWlCLE1BQU0saUJBQWlCLENBQUM7QUFDaEYsT0FBTyxFQUFFLFNBQVMsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0RCxPQUFPLEVBQWdCLFlBQVksRUFBRSxXQUFXLEVBQWUsTUFBTSx1QkFBdUIsQ0FBQzs7OztBQUs3RixNQUFNLE9BQU8sR0FBRyxvQkFBb0IsQ0FBQztBQUNyQyxNQUFNLFNBQVMsR0FBRyxzQkFBc0IsQ0FBQztBQUN6QyxNQUFNLFlBQVksR0FBRyw0QkFBNEIsQ0FBQztBQWNsRCxNQUFNLE9BQU8sb0JBQW9CO0lBbUIvQixZQUNVLEVBQTJCLEVBQzNCLEdBQXNCLEVBQ3RCLEdBQXVCLEVBQ3ZCLE1BQWMsRUFDSSxHQUFjO1FBSmhDLE9BQUUsR0FBRixFQUFFLENBQXlCO1FBQzNCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3RCLFFBQUcsR0FBSCxHQUFHLENBQW9CO1FBQ3ZCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDSSxRQUFHLEdBQUgsR0FBRyxDQUFXO1FBbEJsQyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBR2YsT0FBRSxHQUFHLGlCQUFpQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ2hFLFlBQU8sR0FBd0IsSUFBSSxDQUFDO1FBRTVDLFlBQU8sR0FBRyxDQUFDLENBQUM7UUFHYSxjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztJQVEvRCxDQUFDO0lBRUksU0FBUztRQUNmLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ25DLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3BCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDbEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUN4QjtTQUNGO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3ZCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUMzQjtTQUNGO0lBQ0gsQ0FBQztJQUVPLE1BQU07UUFDWixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFTyxZQUFZO1FBQ2xCLElBQUksQ0FBQyxPQUFPO1lBQ1YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ2hILElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVPLFlBQVk7UUFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUVuQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFakIscUJBQXFCO1FBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUM7YUFDdkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUN2QixTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7UUFFeEMsdUJBQXVCO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUU3RixzQkFBc0I7UUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07YUFDN0IsSUFBSSxDQUNILE1BQU0sQ0FBQyxDQUFDLENBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQyxZQUFZLGVBQWUsSUFBSSxDQUFDLFlBQVksYUFBYSxDQUFDLEVBQ2hGLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FDbEI7YUFDQSxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRTtnQkFDM0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNuQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDbEI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2FBQ3JCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ25DLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNkLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsZUFBZTtRQUNiLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLE1BQU07WUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLE9BQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDNUIsQ0FBQzs7aUhBN0dVLG9CQUFvQixxSUF3QnJCLFFBQVE7cUdBeEJQLG9CQUFvQiwrVEFUckIsNkJBQTZCO0FBdUJkO0lBQWYsWUFBWSxFQUFFO3dEQUFxQjtBQUNwQjtJQUFmLFlBQVksRUFBRTt1REFBa0I7QUFDbEI7SUFBZCxXQUFXLEVBQUU7cURBQWM7MkZBaEIxQixvQkFBb0I7a0JBWmhDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFFBQVEsRUFBRSxhQUFhO29CQUN2QixRQUFRLEVBQUUsNkJBQTZCO29CQUN2QyxJQUFJLEVBQUU7d0JBQ0osc0JBQXNCLEVBQUUsTUFBTTt3QkFDOUIsbUJBQW1CLEVBQUUsU0FBUztxQkFDL0I7b0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUN0Qzs7MEJBeUJJLE1BQU07MkJBQUMsUUFBUTs0Q0FWTyxVQUFVO3NCQUFsQyxLQUFLO2dCQUNtQixTQUFTO3NCQUFqQyxLQUFLO2dCQUNrQixPQUFPO3NCQUE5QixLQUFLO2dCQUNhLGdCQUFnQjtzQkFBbEMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0aW9uRW5kLCBBY3RpdmF0aW9uU3RhcnQsIEV2ZW50LCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIsIE51bWJlcklucHV0IH0gZnJvbSAnQGRlbG9uL3V0aWwvZGVjb3JhdG9yJztcbmltcG9ydCB0eXBlIHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuaW1wb3J0IHsgRnVsbENvbnRlbnRTZXJ2aWNlIH0gZnJvbSAnLi9mdWxsLWNvbnRlbnQuc2VydmljZSc7XG5cbmNvbnN0IHdyYXBDbHMgPSBgZnVsbC1jb250ZW50X19ib2R5YDtcbmNvbnN0IG9wZW5lZENscyA9IGBmdWxsLWNvbnRlbnRfX29wZW5lZGA7XG5jb25zdCBoaWRlVGl0bGVDbHMgPSBgZnVsbC1jb250ZW50X19oaWRkZW4tdGl0bGVgO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmdWxsLWNvbnRlbnQnLFxuICBleHBvcnRBczogJ2Z1bGxDb250ZW50JyxcbiAgdGVtcGxhdGU6IGAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiBgLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5mdWxsLWNvbnRlbnRdJzogJ3RydWUnLFxuICAgICdbc3R5bGUuaGVpZ2h0LnB4XSc6ICdfaGVpZ2h0J1xuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRnVsbENvbnRlbnRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Z1bGxzY3JlZW46IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2hpZGVUaXRsZTogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfcGFkZGluZzogTnVtYmVySW5wdXQ7XG5cbiAgcHJpdmF0ZSBib2R5RWw6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIGluaXRlZCA9IGZhbHNlO1xuICBwcml2YXRlIHNydiQ6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSByb3V0ZSQ6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBpZCA9IGBfZnVsbC1jb250ZW50LSR7TWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIpfWA7XG4gIHByaXZhdGUgc2Nyb2xsJDogU3Vic2NyaXB0aW9uIHwgbnVsbCA9IG51bGw7XG5cbiAgX2hlaWdodCA9IDA7XG5cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGZ1bGxzY3JlZW46IGJvb2xlYW47XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBoaWRlVGl0bGUgPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBwYWRkaW5nID0gMjQ7XG4gIEBPdXRwdXQoKSByZWFkb25seSBmdWxsc2NyZWVuQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHNydjogRnVsbENvbnRlbnRTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IE56U2FmZUFueVxuICApIHt9XG5cbiAgcHJpdmF0ZSB1cGRhdGVDbHMoKTogdm9pZCB7XG4gICAgY29uc3QgY2xzcyA9IHRoaXMuYm9keUVsLmNsYXNzTGlzdDtcbiAgICBpZiAodGhpcy5mdWxsc2NyZWVuKSB7XG4gICAgICBjbHNzLmFkZChvcGVuZWRDbHMpO1xuICAgICAgaWYgKHRoaXMuaGlkZVRpdGxlKSB7XG4gICAgICAgIGNsc3MuYWRkKGhpZGVUaXRsZUNscyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNsc3MucmVtb3ZlKG9wZW5lZENscyk7XG4gICAgICBpZiAodGhpcy5oaWRlVGl0bGUpIHtcbiAgICAgICAgY2xzcy5yZW1vdmUoaGlkZVRpdGxlQ2xzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZUNscygpO1xuICAgIHRoaXMudXBkYXRlSGVpZ2h0KCk7XG4gICAgdGhpcy5mdWxsc2NyZWVuQ2hhbmdlLmVtaXQodGhpcy5mdWxsc2NyZWVuKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlSGVpZ2h0KCk6IHZvaWQge1xuICAgIHRoaXMuX2hlaWdodCA9XG4gICAgICB0aGlzLmJvZHlFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQgLSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIC0gdGhpcy5wYWRkaW5nO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlSW5Cb2R5KCk6IHZvaWQge1xuICAgIHRoaXMuYm9keUVsLmNsYXNzTGlzdC5yZW1vdmUod3JhcENscywgb3BlbmVkQ2xzLCBoaWRlVGl0bGVDbHMpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pbml0ZWQgPSB0cnVlO1xuICAgIHRoaXMuYm9keUVsID0gdGhpcy5kb2MucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIHRoaXMuYm9keUVsLmNsYXNzTGlzdC5hZGQod3JhcENscyk7XG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmlkID0gdGhpcy5pZDtcblxuICAgIHRoaXMudXBkYXRlQ2xzKCk7XG5cbiAgICAvLyB3aGVuIHdpbmRvdyByZXNpemVcbiAgICB0aGlzLnNjcm9sbCQgPSBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJylcbiAgICAgIC5waXBlKGRlYm91bmNlVGltZSgyMDApKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLnVwZGF0ZUhlaWdodCgpKTtcblxuICAgIC8vIHdoZW4gc2VydmllciBjaGFuZ2VkXG4gICAgdGhpcy5zcnYkID0gdGhpcy5zcnYuY2hhbmdlLnBpcGUoZmlsdGVyKHJlcyA9PiByZXMgIT09IG51bGwpKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy50b2dnbGUoKSk7XG5cbiAgICAvLyB3aGVuIHJvdXRlciBjaGFuZ2VkXG4gICAgdGhpcy5yb3V0ZSQgPSB0aGlzLnJvdXRlci5ldmVudHNcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoKGU6IEV2ZW50KSA9PiBlIGluc3RhbmNlb2YgQWN0aXZhdGlvblN0YXJ0IHx8IGUgaW5zdGFuY2VvZiBBY3RpdmF0aW9uRW5kKSxcbiAgICAgICAgZGVib3VuY2VUaW1lKDIwMClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBpZiAoISF0aGlzLmRvYy5xdWVyeVNlbGVjdG9yKGAjJHt0aGlzLmlkfWApKSB7XG4gICAgICAgICAgdGhpcy5ib2R5RWwuY2xhc3NMaXN0LmFkZCh3cmFwQ2xzKTtcbiAgICAgICAgICB0aGlzLnVwZGF0ZUNscygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucmVtb3ZlSW5Cb2R5KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgdG9nZ2xlKCk6IHZvaWQge1xuICAgIHRoaXMuZnVsbHNjcmVlbiA9ICF0aGlzLmZ1bGxzY3JlZW47XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgICB0aGlzLnVwZGF0ZUhlaWdodCgpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy51cGRhdGVIZWlnaHQoKSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pbml0ZWQpIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnJlbW92ZUluQm9keSgpO1xuICAgIHRoaXMuc2Nyb2xsJCEudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLnNydiQudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLnJvdXRlJC51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=