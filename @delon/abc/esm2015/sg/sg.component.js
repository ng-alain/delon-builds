/**
 * @fileoverview added by tsickle
 * Generated from: sg.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Host, Input, Optional, Renderer2, ViewEncapsulation, } from '@angular/core';
import { ResponsiveService } from '@delon/theme';
import { InputNumber } from '@delon/util';
import { SGContainerComponent } from './sg-container.component';
/** @type {?} */
const prefixCls = `sg`;
export class SGComponent {
    /**
     * @param {?} el
     * @param {?} ren
     * @param {?} parent
     * @param {?} rep
     */
    constructor(el, ren, parent, rep) {
        this.ren = ren;
        this.parent = parent;
        this.rep = rep;
        this.clsMap = [];
        this.inited = false;
        if (parent == null) {
            throw new Error(`[sg] must include 'sg-container' component`);
        }
        this.el = el.nativeElement;
    }
    /**
     * @return {?}
     */
    get paddingValue() {
        return this.parent.gutter / 2;
    }
    /**
     * @private
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    setClass() {
        const { el, ren, clsMap, col, parent } = (/** @type {?} */ (this));
        clsMap.forEach((/**
         * @param {?} cls
         * @return {?}
         */
        cls => ren.removeClass(el, cls)));
        clsMap.length = 0;
        clsMap.push(...(/** @type {?} */ (this)).rep.genCls(col != null ? col : parent.colInCon || parent.col), `${prefixCls}__item`);
        clsMap.forEach((/**
         * @param {?} cls
         * @return {?}
         */
        cls => ren.addClass(el, cls)));
        return (/** @type {?} */ (this));
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this.inited)
            this.setClass();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.setClass();
        this.inited = true;
    }
}
SGComponent.decorators = [
    { type: Component, args: [{
                selector: 'sg',
                exportAs: 'sg',
                template: ` <ng-content></ng-content> `,
                host: {
                    '[style.padding-left.px]': 'paddingValue',
                    '[style.padding-right.px]': 'paddingValue',
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
SGComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: SGContainerComponent, decorators: [{ type: Optional }, { type: Host }] },
    { type: ResponsiveService }
];
SGComponent.propDecorators = {
    col: [{ type: Input }]
};
__decorate([
    InputNumber(null),
    __metadata("design:type", Number)
], SGComponent.prototype, "col", void 0);
if (false) {
    /** @type {?} */
    SGComponent.ngAcceptInputType_col;
    /**
     * @type {?}
     * @private
     */
    SGComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    SGComponent.prototype.clsMap;
    /**
     * @type {?}
     * @private
     */
    SGComponent.prototype.inited;
    /** @type {?} */
    SGComponent.prototype.col;
    /**
     * @type {?}
     * @private
     */
    SGComponent.prototype.ren;
    /**
     * @type {?}
     * @private
     */
    SGComponent.prototype.parent;
    /**
     * @type {?}
     * @private
     */
    SGComponent.prototype.rep;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3NnL3NnLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsSUFBSSxFQUNKLEtBQUssRUFFTCxRQUFRLEVBQ1IsU0FBUyxFQUNULGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDakQsT0FBTyxFQUFFLFdBQVcsRUFBZSxNQUFNLGFBQWEsQ0FBQztBQUN2RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7TUFFMUQsU0FBUyxHQUFHLElBQUk7QUFjdEIsTUFBTSxPQUFPLFdBQVc7Ozs7Ozs7SUFhdEIsWUFDRSxFQUFjLEVBQ04sR0FBYyxFQUNNLE1BQTRCLEVBQ2hELEdBQXNCO1FBRnRCLFFBQUcsR0FBSCxHQUFHLENBQVc7UUFDTSxXQUFNLEdBQU4sTUFBTSxDQUFzQjtRQUNoRCxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQWJ4QixXQUFNLEdBQWEsRUFBRSxDQUFDO1FBQ3RCLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFjckIsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1lBQ2xCLE1BQU0sSUFBSSxLQUFLLENBQUMsNENBQTRDLENBQUMsQ0FBQztTQUMvRDtRQUNELElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQztJQUM3QixDQUFDOzs7O0lBZEQsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Ozs7OztJQWNPLFFBQVE7Y0FDUixFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxtQkFBQSxJQUFJLEVBQUE7UUFDN0MsTUFBTSxDQUFDLE9BQU87Ozs7UUFBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFDLENBQUM7UUFDaEQsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLG1CQUFBLElBQUksRUFBQSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLFNBQVMsUUFBUSxDQUFDLENBQUM7UUFDekcsTUFBTSxDQUFDLE9BQU87Ozs7UUFBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFDLENBQUM7UUFDN0MsT0FBTyxtQkFBQSxJQUFJLEVBQUEsQ0FBQztJQUNkLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsTUFBTTtZQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNuQyxDQUFDOzs7O0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDOzs7WUFyREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxJQUFJO2dCQUNkLFFBQVEsRUFBRSxJQUFJO2dCQUNkLFFBQVEsRUFBRSw2QkFBNkI7Z0JBQ3ZDLElBQUksRUFBRTtvQkFDSix5QkFBeUIsRUFBRSxjQUFjO29CQUN6QywwQkFBMEIsRUFBRSxjQUFjO2lCQUMzQztnQkFDRCxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7Ozs7WUF6QkMsVUFBVTtZQUtWLFNBQVM7WUFLRixvQkFBb0IsdUJBZ0N4QixRQUFRLFlBQUksSUFBSTtZQWxDWixpQkFBaUI7OztrQkF5QnZCLEtBQUs7O0FBQXNCO0lBQWxCLFdBQVcsQ0FBQyxJQUFJLENBQUM7O3dDQUFhOzs7SUFOeEMsa0NBQTBDOzs7OztJQUUxQyx5QkFBd0I7Ozs7O0lBQ3hCLDZCQUE4Qjs7Ozs7SUFDOUIsNkJBQXVCOztJQUV2QiwwQkFBd0M7Ozs7O0lBUXRDLDBCQUFzQjs7Ozs7SUFDdEIsNkJBQXdEOzs7OztJQUN4RCwwQkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBIb3N0LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPcHRpb25hbCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXNwb25zaXZlU2VydmljZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBJbnB1dE51bWJlciwgTnVtYmVySW5wdXQgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBTR0NvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vc2ctY29udGFpbmVyLmNvbXBvbmVudCc7XG5cbmNvbnN0IHByZWZpeENscyA9IGBzZ2A7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NnJyxcbiAgZXhwb3J0QXM6ICdzZycsXG4gIHRlbXBsYXRlOiBgIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gYCxcbiAgaG9zdDoge1xuICAgICdbc3R5bGUucGFkZGluZy1sZWZ0LnB4XSc6ICdwYWRkaW5nVmFsdWUnLFxuICAgICdbc3R5bGUucGFkZGluZy1yaWdodC5weF0nOiAncGFkZGluZ1ZhbHVlJyxcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBTR0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9jb2w6IE51bWJlcklucHV0O1xuXG4gIHByaXZhdGUgZWw6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIGNsc01hcDogc3RyaW5nW10gPSBbXTtcbiAgcHJpdmF0ZSBpbml0ZWQgPSBmYWxzZTtcblxuICBASW5wdXQoKSBASW5wdXROdW1iZXIobnVsbCkgY29sOiBudW1iZXI7XG5cbiAgZ2V0IHBhZGRpbmdWYWx1ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnBhcmVudC5ndXR0ZXIgLyAyO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW46IFJlbmRlcmVyMixcbiAgICBAT3B0aW9uYWwoKSBASG9zdCgpIHByaXZhdGUgcGFyZW50OiBTR0NvbnRhaW5lckNvbXBvbmVudCxcbiAgICBwcml2YXRlIHJlcDogUmVzcG9uc2l2ZVNlcnZpY2UsXG4gICkge1xuICAgIGlmIChwYXJlbnQgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBbc2ddIG11c3QgaW5jbHVkZSAnc2ctY29udGFpbmVyJyBjb21wb25lbnRgKTtcbiAgICB9XG4gICAgdGhpcy5lbCA9IGVsLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBwcml2YXRlIHNldENsYXNzKCk6IHRoaXMge1xuICAgIGNvbnN0IHsgZWwsIHJlbiwgY2xzTWFwLCBjb2wsIHBhcmVudCB9ID0gdGhpcztcbiAgICBjbHNNYXAuZm9yRWFjaChjbHMgPT4gcmVuLnJlbW92ZUNsYXNzKGVsLCBjbHMpKTtcbiAgICBjbHNNYXAubGVuZ3RoID0gMDtcbiAgICBjbHNNYXAucHVzaCguLi50aGlzLnJlcC5nZW5DbHMoY29sICE9IG51bGwgPyBjb2wgOiBwYXJlbnQuY29sSW5Db24gfHwgcGFyZW50LmNvbCksIGAke3ByZWZpeENsc31fX2l0ZW1gKTtcbiAgICBjbHNNYXAuZm9yRWFjaChjbHMgPT4gcmVuLmFkZENsYXNzKGVsLCBjbHMpKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmluaXRlZCkgdGhpcy5zZXRDbGFzcygpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0Q2xhc3MoKTtcbiAgICB0aGlzLmluaXRlZCA9IHRydWU7XG4gIH1cbn1cbiJdfQ==