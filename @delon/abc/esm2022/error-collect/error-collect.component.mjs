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
            this.cdr.detectChanges();
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ErrorCollectComponent, deps: [{ token: i0.ElementRef }, { token: i0.ChangeDetectorRef }, { token: DOCUMENT }, { token: i1.AlainConfigService }, { token: i2.Directionality, optional: true }, { token: i3.Platform }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: ErrorCollectComponent, selector: "error-collect, [error-collect]", inputs: { freq: "freq", offsetTop: "offsetTop" }, host: { listeners: { "click": "_click()" }, properties: { "class.error-collect": "true", "class.error-collect-rtl": "dir === 'rtl'", "class.d-none": "_hiden" } }, exportAs: ["errorCollect"], ngImport: i0, template: `
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ErrorCollectComponent, decorators: [{
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
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: i1.AlainConfigService }, { type: i2.Directionality, decorators: [{
                    type: Optional
                }] }, { type: i3.Platform }], propDecorators: { freq: [{
                type: Input
            }], offsetTop: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItY29sbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvZXJyb3ItY29sbGVjdC9lcnJvci1jb2xsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFDTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUNULFVBQVUsRUFFVixNQUFNLEVBQ04sS0FBSyxFQUVMLFFBQVEsRUFDUixpQkFBaUIsRUFDakIsTUFBTSxFQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHaEMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7Ozs7QUFvQnBELE1BQU0sT0FBTyxxQkFBcUI7SUFXaEMsWUFDVSxFQUFjLEVBQ2QsR0FBc0IsRUFDSixHQUFjLEVBQ3hDLFNBQTZCLEVBQ1QsY0FBOEIsRUFDMUMsUUFBa0I7UUFMbEIsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNkLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ0osUUFBRyxHQUFILEdBQUcsQ0FBVztRQUVwQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDMUMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQWhCcEIsV0FBTSxHQUEyQixJQUFJLENBQUM7UUFDdEMsYUFBUSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUV0QyxXQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2QsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNWLFFBQUcsR0FBYyxLQUFLLENBQUM7UUFhckIsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsY0FBYyxFQUFFLEVBQUUsSUFBSSxFQUFFLEdB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R0FkUCxxQkFBcUIsdVRBZHRCOzs7R0FHVDs7QUFtQnVCO0lBQWQsV0FBVyxFQUFFO21EQUFlO0FBQ2Q7SUFBZCxXQUFXLEVBQUU7d0RBQW9COzJGQVRoQyxxQkFBcUI7a0JBakJqQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxnQ0FBZ0M7b0JBQzFDLFFBQVEsRUFBRSxjQUFjO29CQUN4QixRQUFRLEVBQUU7OztHQUdUO29CQUNELElBQUksRUFBRTt3QkFDSix1QkFBdUIsRUFBRSxNQUFNO3dCQUMvQiwyQkFBMkIsRUFBRSxlQUFlO3dCQUM1QyxnQkFBZ0IsRUFBRSxRQUFRO3dCQUMxQixTQUFTLEVBQUUsVUFBVTtxQkFDdEI7b0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUN0Qzs7MEJBZUksTUFBTTsyQkFBQyxRQUFROzswQkFFZixRQUFRO2dFQVJhLElBQUk7c0JBQTNCLEtBQUs7Z0JBQ2tCLFNBQVM7c0JBQWhDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3Rpb24sIERpcmVjdGlvbmFsaXR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIERlc3Ryb3lSZWYsXG4gIEVsZW1lbnRSZWYsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBpbmplY3Rcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0YWtlVW50aWxEZXN0cm95ZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlL3J4anMtaW50ZXJvcCc7XG5pbXBvcnQgeyBpbnRlcnZhbCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UgfSBmcm9tICdAZGVsb24vdXRpbC9jb25maWcnO1xuaW1wb3J0IHsgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbC9kZWNvcmF0b3InO1xuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlcnJvci1jb2xsZWN0LCBbZXJyb3ItY29sbGVjdF0nLFxuICBleHBvcnRBczogJ2Vycm9yQ29sbGVjdCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGkgbnotaWNvbiBuelR5cGU9XCJleGNsYW1hdGlvbi1jaXJjbGVcIj48L2k+XG4gICAgPHNwYW4gY2xhc3M9XCJlcnJvci1jb2xsZWN0X19jb3VudFwiPnt7IGNvdW50IH19PC9zcGFuPlxuICBgLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5lcnJvci1jb2xsZWN0XSc6ICd0cnVlJyxcbiAgICAnW2NsYXNzLmVycm9yLWNvbGxlY3QtcnRsXSc6IGBkaXIgPT09ICdydGwnYCxcbiAgICAnW2NsYXNzLmQtbm9uZV0nOiAnX2hpZGVuJyxcbiAgICAnKGNsaWNrKSc6ICdfY2xpY2soKSdcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEVycm9yQ29sbGVjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgZm9ybUVsOiBIVE1MRm9ybUVsZW1lbnQgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IGluamVjdChEZXN0cm95UmVmKTtcblxuICBfaGlkZW4gPSB0cnVlO1xuICBjb3VudCA9IDA7XG4gIGRpcjogRGlyZWN0aW9uID0gJ2x0cic7XG5cbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgZnJlcSE6IG51bWJlcjtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgb2Zmc2V0VG9wITogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBOelNhZmVBbnksXG4gICAgY29uZmlnU3J2OiBBbGFpbkNvbmZpZ1NlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBkaXJlY3Rpb25hbGl0eTogRGlyZWN0aW9uYWxpdHksXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm1cbiAgKSB7XG4gICAgY29uZmlnU3J2LmF0dGFjaCh0aGlzLCAnZXJyb3JDb2xsZWN0JywgeyBmcmVxOiA1MDAsIG9mZnNldFRvcDogNjUgKyA2NCArIDggKiAyIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgZXJyRWxzKCk6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+IHtcbiAgICByZXR1cm4gdGhpcy5mb3JtRWwhLnF1ZXJ5U2VsZWN0b3JBbGwoJy5hbnQtZm9ybS1pdGVtLWhhcy1lcnJvcicpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGUoKTogdm9pZCB7XG4gICAgY29uc3QgY291bnQgPSB0aGlzLmVyckVscy5sZW5ndGg7XG4gICAgaWYgKGNvdW50ID09PSB0aGlzLmNvdW50KSByZXR1cm47XG4gICAgdGhpcy5jb3VudCA9IGNvdW50O1xuICAgIHRoaXMuX2hpZGVuID0gY291bnQgPT09IDA7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBfY2xpY2soKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuY291bnQgPT09IDApIHJldHVybiBmYWxzZTtcbiAgICAvLyBuei1mb3JtLWNvbnRyb2xcbiAgICBjb25zdCBlbHMgPSB0aGlzLmVyckVscztcbiAgICBjb25zdCBmb3JtSXRlbUVsID0gdGhpcy5maW5kUGFyZW50KGVsc1swXSwgJ1tuei1mb3JtLWNvbnRyb2xdJykgfHwgZWxzWzBdO1xuICAgIGZvcm1JdGVtRWwuc2Nyb2xsSW50b1ZpZXcodHJ1ZSk7XG4gICAgLy8gZml4IGhlYWRlciBoZWlnaHRcbiAgICB0aGlzLmRvYy5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIC09IHRoaXMub2Zmc2V0VG9wO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBpbnN0YWxsKCk6IHZvaWQge1xuICAgIHRoaXMuZGlyID0gdGhpcy5kaXJlY3Rpb25hbGl0eS52YWx1ZTtcbiAgICB0aGlzLmRpcmVjdGlvbmFsaXR5LmNoYW5nZT8ucGlwZSh0YWtlVW50aWxEZXN0cm95ZWQodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoZGlyZWN0aW9uOiBEaXJlY3Rpb24pID0+IHtcbiAgICAgIHRoaXMuZGlyID0gZGlyZWN0aW9uO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuICAgIGludGVydmFsKHRoaXMuZnJlcSlcbiAgICAgIC5waXBlKHRha2VVbnRpbERlc3Ryb3llZCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy51cGRhdGUoKSk7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgZmluZFBhcmVudChlbDogRWxlbWVudCwgc2VsZWN0b3I6IHN0cmluZyk6IEhUTUxGb3JtRWxlbWVudCB8IG51bGwge1xuICAgIGxldCByZXRFbDogSFRNTEZvcm1FbGVtZW50IHwgbnVsbCA9IG51bGw7XG4gICAgd2hpbGUgKGVsKSB7XG4gICAgICBpZiAoZWwucXVlcnlTZWxlY3RvcihzZWxlY3RvcikpIHtcbiAgICAgICAgcmV0RWwgPSBlbCBhcyBIVE1MRm9ybUVsZW1lbnQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZWwgPSBlbC5wYXJlbnRFbGVtZW50IGFzIEhUTUxGb3JtRWxlbWVudDtcbiAgICB9XG4gICAgcmV0dXJuIHJldEVsO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3NlcikgcmV0dXJuO1xuXG4gICAgdGhpcy5mb3JtRWwgPSB0aGlzLmZpbmRQYXJlbnQodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnZm9ybScpO1xuICAgIGlmICh0aGlzLmZvcm1FbCA9PT0gbnVsbCkgdGhyb3cgbmV3IEVycm9yKCdObyBmb3VuZCBmb3JtIGVsZW1lbnQnKTtcbiAgICB0aGlzLmluc3RhbGwoKTtcbiAgfVxufVxuIl19