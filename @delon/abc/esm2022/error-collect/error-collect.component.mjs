import { __decorate } from "tslib";
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, Inject, Input, Optional, ViewEncapsulation, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { interval } from 'rxjs';
import { InputNumber } from '@delon/util/decorator';
import * as i0 from "@angular/core";
import * as i1 from "@delon/util/config";
import * as i2 from "@angular/cdk/bidi";
import * as i3 from "@angular/cdk/platform";
import * as i4 from "ng-zorro-antd/icon";
export class ErrorCollectComponent {
    constructor(el, cdr, doc, configSrv, directionality, platform) {
        this.el = el;
        this.cdr = cdr;
        this.doc = doc;
        this.directionality = directionality;
        this.platform = platform;
        this.formEl = null;
        this.destroy$ = inject(DestroyRef);
        this._hiden = true;
        this.count = 0;
        this.dir = 'ltr';
        configSrv.attach(this, 'errorCollect', { freq: 500, offsetTop: 65 + 64 + 8 * 2 });
    }
    get errEls() {
        return this.formEl.querySelectorAll('.ant-form-item-has-error');
    }
    update() {
        const count = this.errEls.length;
        if (count === this.count)
            return;
        this.count = count;
        this._hiden = count === 0;
        this.cdr.markForCheck();
    }
    _click() {
        if (this.count === 0)
            return false;
        // nz-form-control
        const els = this.errEls;
        const formItemEl = this.findParent(els[0], '[nz-form-control]') || els[0];
        formItemEl.scrollIntoView(true);
        // fix header height
        this.doc.documentElement.scrollTop -= this.offsetTop;
        return true;
    }
    install() {
        this.dir = this.directionality.value;
        this.directionality.change?.pipe(takeUntilDestroyed(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
        });
        interval(this.freq)
            .pipe(takeUntilDestroyed(this.destroy$))
            .subscribe(() => this.update());
        this.update();
    }
    findParent(el, selector) {
        let retEl = null;
        while (el) {
            if (el.querySelector(selector)) {
                retEl = el;
                break;
            }
            el = el.parentElement;
        }
        return retEl;
    }
    ngOnInit() {
        if (!this.platform.isBrowser)
            return;
        this.formEl = this.findParent(this.el.nativeElement, 'form');
        if (this.formEl === null)
            throw new Error('No found form element');
        this.install();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.7", ngImport: i0, type: ErrorCollectComponent, deps: [{ token: i0.ElementRef }, { token: i0.ChangeDetectorRef }, { token: DOCUMENT }, { token: i1.AlainConfigService }, { token: i2.Directionality, optional: true }, { token: i3.Platform }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.7", type: ErrorCollectComponent, selector: "error-collect, [error-collect]", inputs: { freq: "freq", offsetTop: "offsetTop" }, host: { listeners: { "click": "_click()" }, properties: { "class.error-collect": "true", "class.error-collect-rtl": "dir === 'rtl'", "class.d-none": "_hiden" } }, exportAs: ["errorCollect"], ngImport: i0, template: `
    <i nz-icon nzType="exclamation-circle"></i>
    <span class="error-collect__count">{{ count }}</span>
  `, isInline: true, dependencies: [{ kind: "directive", type: i4.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
__decorate([
    InputNumber()
], ErrorCollectComponent.prototype, "freq", void 0);
__decorate([
    InputNumber()
], ErrorCollectComponent.prototype, "offsetTop", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.7", ngImport: i0, type: ErrorCollectComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'error-collect, [error-collect]',
                    exportAs: 'errorCollect',
                    template: `
    <i nz-icon nzType="exclamation-circle"></i>
    <span class="error-collect__count">{{ count }}</span>
  `,
                    host: {
                        '[class.error-collect]': 'true',
                        '[class.error-collect-rtl]': `dir === 'rtl'`,
                        '[class.d-none]': '_hiden',
                        '(click)': '_click()'
                    },
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: i1.AlainConfigService }, { type: i2.Directionality, decorators: [{
                    type: Optional
                }] }, { type: i3.Platform }]; }, propDecorators: { freq: [{
                type: Input
            }], offsetTop: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItY29sbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvZXJyb3ItY29sbGVjdC9lcnJvci1jb2xsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFDTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUNULFVBQVUsRUFFVixNQUFNLEVBQ04sS0FBSyxFQUVMLFFBQVEsRUFDUixpQkFBaUIsRUFDakIsTUFBTSxFQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHaEMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7Ozs7QUFvQnBELE1BQU0sT0FBTyxxQkFBcUI7SUFXaEMsWUFDVSxFQUFjLEVBQ2QsR0FBc0IsRUFDSixHQUFjLEVBQ3hDLFNBQTZCLEVBQ1QsY0FBOEIsRUFDMUMsUUFBa0I7UUFMbEIsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNkLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ0osUUFBRyxHQUFILEdBQUcsQ0FBVztRQUVwQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDMUMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQWhCcEIsV0FBTSxHQUEyQixJQUFJLENBQUM7UUFDdEMsYUFBUSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUV0QyxXQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2QsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNWLFFBQUcsR0FBYyxLQUFLLENBQUM7UUFhckIsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsY0FBYyxFQUFFLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNwRixDQUFDO0lBRUQsSUFBWSxNQUFNO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLE1BQU8sQ0FBQyxnQkFBZ0IsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFTyxNQUFNO1FBQ1osTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDakMsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLEtBQUs7WUFBRSxPQUFPO1FBQ2pDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxLQUFLLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxNQUFNO1FBQ0osSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLENBQUM7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUNuQyxrQkFBa0I7UUFDbEIsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN4QixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxtQkFBbUIsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxRSxVQUFVLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hDLG9CQUFvQjtRQUNwQixJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNyRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTyxPQUFPO1FBQ2IsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQztRQUNyQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBb0IsRUFBRSxFQUFFO1lBQ3JHLElBQUksQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDaEIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUN2QyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFTyxVQUFVLENBQUMsRUFBVyxFQUFFLFFBQWdCO1FBQzlDLElBQUksS0FBSyxHQUEyQixJQUFJLENBQUM7UUFDekMsT0FBTyxFQUFFLEVBQUU7WUFDVCxJQUFJLEVBQUUsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQzlCLEtBQUssR0FBRyxFQUFxQixDQUFDO2dCQUM5QixNQUFNO2FBQ1A7WUFDRCxFQUFFLEdBQUcsRUFBRSxDQUFDLGFBQWdDLENBQUM7U0FDMUM7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUztZQUFFLE9BQU87UUFFckMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzdELElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxJQUFJO1lBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDOzhHQTFFVSxxQkFBcUIsNkVBY3RCLFFBQVE7a0dBZFAscUJBQXFCLHVUQWR0Qjs7O0dBR1Q7O0FBbUJ1QjtJQUFkLFdBQVcsRUFBRTttREFBZTtBQUNkO0lBQWQsV0FBVyxFQUFFO3dEQUFvQjsyRkFUaEMscUJBQXFCO2tCQWpCakMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsZ0NBQWdDO29CQUMxQyxRQUFRLEVBQUUsY0FBYztvQkFDeEIsUUFBUSxFQUFFOzs7R0FHVDtvQkFDRCxJQUFJLEVBQUU7d0JBQ0osdUJBQXVCLEVBQUUsTUFBTTt3QkFDL0IsMkJBQTJCLEVBQUUsZUFBZTt3QkFDNUMsZ0JBQWdCLEVBQUUsUUFBUTt3QkFDMUIsU0FBUyxFQUFFLFVBQVU7cUJBQ3RCO29CQUNELG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDdEM7OzBCQWVJLE1BQU07MkJBQUMsUUFBUTs7MEJBRWYsUUFBUTttRUFSYSxJQUFJO3NCQUEzQixLQUFLO2dCQUNrQixTQUFTO3NCQUFoQyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBEZXN0cm95UmVmLFxuICBFbGVtZW50UmVmLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgaW5qZWN0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdGFrZVVudGlsRGVzdHJveWVkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZS9yeGpzLWludGVyb3AnO1xuaW1wb3J0IHsgaW50ZXJ2YWwgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3V0aWwvY29uZmlnJztcbmltcG9ydCB7IElucHV0TnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwvZGVjb3JhdG9yJztcbmltcG9ydCB0eXBlIHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXJyb3ItY29sbGVjdCwgW2Vycm9yLWNvbGxlY3RdJyxcbiAgZXhwb3J0QXM6ICdlcnJvckNvbGxlY3QnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxpIG56LWljb24gbnpUeXBlPVwiZXhjbGFtYXRpb24tY2lyY2xlXCI+PC9pPlxuICAgIDxzcGFuIGNsYXNzPVwiZXJyb3ItY29sbGVjdF9fY291bnRcIj57eyBjb3VudCB9fTwvc3Bhbj5cbiAgYCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuZXJyb3ItY29sbGVjdF0nOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy5lcnJvci1jb2xsZWN0LXJ0bF0nOiBgZGlyID09PSAncnRsJ2AsXG4gICAgJ1tjbGFzcy5kLW5vbmVdJzogJ19oaWRlbicsXG4gICAgJyhjbGljayknOiAnX2NsaWNrKCknXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBFcnJvckNvbGxlY3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIGZvcm1FbDogSFRNTEZvcm1FbGVtZW50IHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgZGVzdHJveSQgPSBpbmplY3QoRGVzdHJveVJlZik7XG5cbiAgX2hpZGVuID0gdHJ1ZTtcbiAgY291bnQgPSAwO1xuICBkaXI6IERpcmVjdGlvbiA9ICdsdHInO1xuXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGZyZXEhOiBudW1iZXI7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIG9mZnNldFRvcCE6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogTnpTYWZlQW55LFxuICAgIGNvbmZpZ1NydjogQWxhaW5Db25maWdTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZGlyZWN0aW9uYWxpdHk6IERpcmVjdGlvbmFsaXR5LFxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtXG4gICkge1xuICAgIGNvbmZpZ1Nydi5hdHRhY2godGhpcywgJ2Vycm9yQ29sbGVjdCcsIHsgZnJlcTogNTAwLCBvZmZzZXRUb3A6IDY1ICsgNjQgKyA4ICogMiB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IGVyckVscygpOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PiB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybUVsIS5xdWVyeVNlbGVjdG9yQWxsKCcuYW50LWZvcm0taXRlbS1oYXMtZXJyb3InKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlKCk6IHZvaWQge1xuICAgIGNvbnN0IGNvdW50ID0gdGhpcy5lcnJFbHMubGVuZ3RoO1xuICAgIGlmIChjb3VudCA9PT0gdGhpcy5jb3VudCkgcmV0dXJuO1xuICAgIHRoaXMuY291bnQgPSBjb3VudDtcbiAgICB0aGlzLl9oaWRlbiA9IGNvdW50ID09PSAwO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgX2NsaWNrKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmNvdW50ID09PSAwKSByZXR1cm4gZmFsc2U7XG4gICAgLy8gbnotZm9ybS1jb250cm9sXG4gICAgY29uc3QgZWxzID0gdGhpcy5lcnJFbHM7XG4gICAgY29uc3QgZm9ybUl0ZW1FbCA9IHRoaXMuZmluZFBhcmVudChlbHNbMF0sICdbbnotZm9ybS1jb250cm9sXScpIHx8IGVsc1swXTtcbiAgICBmb3JtSXRlbUVsLnNjcm9sbEludG9WaWV3KHRydWUpO1xuICAgIC8vIGZpeCBoZWFkZXIgaGVpZ2h0XG4gICAgdGhpcy5kb2MuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCAtPSB0aGlzLm9mZnNldFRvcDtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgaW5zdGFsbCgpOiB2b2lkIHtcbiAgICB0aGlzLmRpciA9IHRoaXMuZGlyZWN0aW9uYWxpdHkudmFsdWU7XG4gICAgdGhpcy5kaXJlY3Rpb25hbGl0eS5jaGFuZ2U/LnBpcGUodGFrZVVudGlsRGVzdHJveWVkKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKGRpcmVjdGlvbjogRGlyZWN0aW9uKSA9PiB7XG4gICAgICB0aGlzLmRpciA9IGRpcmVjdGlvbjtcbiAgICB9KTtcbiAgICBpbnRlcnZhbCh0aGlzLmZyZXEpXG4gICAgICAucGlwZSh0YWtlVW50aWxEZXN0cm95ZWQodGhpcy5kZXN0cm95JCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMudXBkYXRlKCkpO1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBwcml2YXRlIGZpbmRQYXJlbnQoZWw6IEVsZW1lbnQsIHNlbGVjdG9yOiBzdHJpbmcpOiBIVE1MRm9ybUVsZW1lbnQgfCBudWxsIHtcbiAgICBsZXQgcmV0RWw6IEhUTUxGb3JtRWxlbWVudCB8IG51bGwgPSBudWxsO1xuICAgIHdoaWxlIChlbCkge1xuICAgICAgaWYgKGVsLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpKSB7XG4gICAgICAgIHJldEVsID0gZWwgYXMgSFRNTEZvcm1FbGVtZW50O1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGVsID0gZWwucGFyZW50RWxlbWVudCBhcyBIVE1MRm9ybUVsZW1lbnQ7XG4gICAgfVxuICAgIHJldHVybiByZXRFbDtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHJldHVybjtcblxuICAgIHRoaXMuZm9ybUVsID0gdGhpcy5maW5kUGFyZW50KHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2Zvcm0nKTtcbiAgICBpZiAodGhpcy5mb3JtRWwgPT09IG51bGwpIHRocm93IG5ldyBFcnJvcignTm8gZm91bmQgZm9ybSBlbGVtZW50Jyk7XG4gICAgdGhpcy5pbnN0YWxsKCk7XG4gIH1cbn1cbiJdfQ==