/**
 * @fileoverview added by tsickle
 * Generated from: se-container.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { AlainConfigService } from '@delon/util/config';
import { InputBoolean, InputNumber, toNumber } from '@delon/util/other';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
export class SEContainerComponent {
    /**
     * @param {?} configSrv
     */
    constructor(configSrv) {
        this.errorNotify$ = new BehaviorSubject((/** @type {?} */ (null)));
        this.line = false;
        configSrv.attach(this, 'se', {
            size: 'default',
            nzLayout: 'horizontal',
            gutter: 32,
            col: 2,
            labelWidth: 150,
            firstVisual: false,
            ingoreDirty: false,
        });
    }
    /**
     * @return {?}
     */
    get gutter() {
        return this.nzLayout === 'horizontal' ? this._gutter : 0;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set gutter(value) {
        this._gutter = toNumber(value);
    }
    /**
     * @return {?}
     */
    get nzLayout() {
        return this._nzLayout;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzLayout(value) {
        this._nzLayout = value;
        if (value === 'inline') {
            this.size = 'compact';
        }
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set errors(val) {
        this.setErrors(val);
    }
    /**
     * @return {?}
     */
    get errorNotify() {
        return this.errorNotify$.pipe(filter((/**
         * @param {?} v
         * @return {?}
         */
        v => v != null)));
    }
    /**
     * @param {?} errors
     * @return {?}
     */
    setErrors(errors) {
        for (const error of errors) {
            this.errorNotify$.next(error);
        }
    }
}
SEContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'se-container, [se-container]',
                exportAs: 'seContainer',
                template: `
    <div se-title *ngIf="title">
      <ng-container *nzStringTemplateOutlet="title">{{ title }}</ng-container>
    </div>
    <ng-content></ng-content>
  `,
                host: {
                    '[class.ant-row]': `true`,
                    '[class.se__container]': `true`,
                    '[class.se__horizontal]': `nzLayout === 'horizontal'`,
                    '[class.se__vertical]': `nzLayout === 'vertical'`,
                    '[class.se__inline]': `nzLayout === 'inline'`,
                    '[class.se__compact]': `size === 'compact'`,
                    '[style.margin-left.px]': `-(gutter / 2)`,
                    '[style.margin-right.px]': `-(gutter / 2)`,
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
SEContainerComponent.ctorParameters = () => [
    { type: AlainConfigService }
];
SEContainerComponent.propDecorators = {
    colInCon: [{ type: Input, args: ['se-container',] }],
    col: [{ type: Input }],
    labelWidth: [{ type: Input }],
    title: [{ type: Input }],
    gutter: [{ type: Input }],
    nzLayout: [{ type: Input }],
    size: [{ type: Input }],
    firstVisual: [{ type: Input }],
    ingoreDirty: [{ type: Input }],
    line: [{ type: Input }],
    errors: [{ type: Input }]
};
__decorate([
    InputNumber(null),
    __metadata("design:type", Number)
], SEContainerComponent.prototype, "colInCon", void 0);
__decorate([
    InputNumber(null),
    __metadata("design:type", Number)
], SEContainerComponent.prototype, "col", void 0);
__decorate([
    InputNumber(null),
    __metadata("design:type", Number)
], SEContainerComponent.prototype, "labelWidth", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], SEContainerComponent.prototype, "firstVisual", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], SEContainerComponent.prototype, "ingoreDirty", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], SEContainerComponent.prototype, "line", void 0);
if (false) {
    /** @type {?} */
    SEContainerComponent.ngAcceptInputType_col;
    /** @type {?} */
    SEContainerComponent.ngAcceptInputType_colInCon;
    /** @type {?} */
    SEContainerComponent.ngAcceptInputType_labelWidth;
    /**
     * @type {?}
     * @private
     */
    SEContainerComponent.prototype.errorNotify$;
    /** @type {?} */
    SEContainerComponent.prototype.colInCon;
    /** @type {?} */
    SEContainerComponent.prototype.col;
    /** @type {?} */
    SEContainerComponent.prototype.labelWidth;
    /** @type {?} */
    SEContainerComponent.prototype.title;
    /**
     * @type {?}
     * @private
     */
    SEContainerComponent.prototype._gutter;
    /**
     * @type {?}
     * @private
     */
    SEContainerComponent.prototype._nzLayout;
    /** @type {?} */
    SEContainerComponent.prototype.size;
    /** @type {?} */
    SEContainerComponent.prototype.firstVisual;
    /** @type {?} */
    SEContainerComponent.prototype.ingoreDirty;
    /** @type {?} */
    SEContainerComponent.prototype.line;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2UtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9zZS9zZS1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFlLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFlLFFBQVEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXJGLE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBMEJ4QyxNQUFNLE9BQU8sb0JBQW9COzs7O0lBNkMvQixZQUFZLFNBQTZCO1FBeENqQyxpQkFBWSxHQUFHLElBQUksZUFBZSxDQUFpQixtQkFBQSxJQUFJLEVBQWEsQ0FBQyxDQUFDO1FBOEJyRCxTQUFJLEdBQUcsS0FBSyxDQUFDO1FBV3BDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRTtZQUMzQixJQUFJLEVBQUUsU0FBUztZQUNmLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLE1BQU0sRUFBRSxFQUFFO1lBQ1YsR0FBRyxFQUFFLENBQUM7WUFDTixVQUFVLEVBQUUsR0FBRztZQUNmLFdBQVcsRUFBRSxLQUFLO1lBQ2xCLFdBQVcsRUFBRSxLQUFLO1NBQ25CLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUE1Q0QsSUFDSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsUUFBUSxLQUFLLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7Ozs7O0lBQ0QsSUFBSSxNQUFNLENBQUMsS0FBYTtRQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7O0lBR0QsSUFDSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBQ0QsSUFBSSxRQUFRLENBQUMsS0FBZTtRQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDdEIsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7U0FDdkI7SUFDSCxDQUFDOzs7OztJQU9ELElBQ0ksTUFBTSxDQUFDLEdBQXFCO1FBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTTs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7Ozs7SUFjRCxTQUFTLENBQUMsTUFBd0I7UUFDaEMsS0FBSyxNQUFNLEtBQUssSUFBSSxNQUFNLEVBQUU7WUFDMUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDL0I7SUFDSCxDQUFDOzs7WUFwRkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw4QkFBOEI7Z0JBQ3hDLFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUU7Ozs7O0dBS1Q7Z0JBQ0QsSUFBSSxFQUFFO29CQUNKLGlCQUFpQixFQUFFLE1BQU07b0JBQ3pCLHVCQUF1QixFQUFFLE1BQU07b0JBQy9CLHdCQUF3QixFQUFFLDJCQUEyQjtvQkFDckQsc0JBQXNCLEVBQUUseUJBQXlCO29CQUNqRCxvQkFBb0IsRUFBRSx1QkFBdUI7b0JBQzdDLHFCQUFxQixFQUFFLG9CQUFvQjtvQkFDM0Msd0JBQXdCLEVBQUUsZUFBZTtvQkFDekMseUJBQXlCLEVBQUUsZUFBZTtpQkFDM0M7Z0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3RDOzs7O1lBN0JRLGtCQUFrQjs7O3VCQW9DeEIsS0FBSyxTQUFDLGNBQWM7a0JBQ3BCLEtBQUs7eUJBQ0wsS0FBSztvQkFDTCxLQUFLO3FCQUVMLEtBQUs7dUJBU0wsS0FBSzttQkFZTCxLQUFLOzBCQUNMLEtBQUs7MEJBQ0wsS0FBSzttQkFDTCxLQUFLO3FCQUNMLEtBQUs7O0FBOUJvQztJQUFsQixXQUFXLENBQUMsSUFBSSxDQUFDOztzREFBb0I7QUFDakM7SUFBbEIsV0FBVyxDQUFDLElBQUksQ0FBQzs7aURBQWU7QUFDZDtJQUFsQixXQUFXLENBQUMsSUFBSSxDQUFDOzt3REFBb0I7QUF5QnRCO0lBQWYsWUFBWSxFQUFFOzt5REFBc0I7QUFDckI7SUFBZixZQUFZLEVBQUU7O3lEQUFzQjtBQUNyQjtJQUFmLFlBQVksRUFBRTs7a0RBQWM7OztJQWxDdEMsMkNBQTBDOztJQUMxQyxnREFBK0M7O0lBQy9DLGtEQUFpRDs7Ozs7SUFFakQsNENBQThFOztJQUM5RSx3Q0FBNkQ7O0lBQzdELG1DQUEwQzs7SUFDMUMsMENBQStDOztJQUMvQyxxQ0FBMkM7Ozs7O0lBUzNDLHVDQUF3Qjs7Ozs7SUFZeEIseUNBQTRCOztJQUU1QixvQ0FBcUM7O0lBQ3JDLDJDQUE4Qzs7SUFDOUMsMkNBQThDOztJQUM5QyxvQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSRVBfVFlQRSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UgfSBmcm9tICdAZGVsb24vdXRpbC9jb25maWcnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciwgTnVtYmVySW5wdXQsIHRvTnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwvb3RoZXInO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzL2FueSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFNFRXJyb3JSZWZyZXNoLCBTRUxheW91dCB9IGZyb20gJy4vc2UudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZS1jb250YWluZXIsIFtzZS1jb250YWluZXJdJyxcbiAgZXhwb3J0QXM6ICdzZUNvbnRhaW5lcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBzZS10aXRsZSAqbmdJZj1cInRpdGxlXCI+XG4gICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwidGl0bGVcIj57eyB0aXRsZSB9fTwvbmctY29udGFpbmVyPlxuICAgIDwvZGl2PlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgYCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LXJvd10nOiBgdHJ1ZWAsXG4gICAgJ1tjbGFzcy5zZV9fY29udGFpbmVyXSc6IGB0cnVlYCxcbiAgICAnW2NsYXNzLnNlX19ob3Jpem9udGFsXSc6IGBuekxheW91dCA9PT0gJ2hvcml6b250YWwnYCxcbiAgICAnW2NsYXNzLnNlX192ZXJ0aWNhbF0nOiBgbnpMYXlvdXQgPT09ICd2ZXJ0aWNhbCdgLFxuICAgICdbY2xhc3Muc2VfX2lubGluZV0nOiBgbnpMYXlvdXQgPT09ICdpbmxpbmUnYCxcbiAgICAnW2NsYXNzLnNlX19jb21wYWN0XSc6IGBzaXplID09PSAnY29tcGFjdCdgLFxuICAgICdbc3R5bGUubWFyZ2luLWxlZnQucHhdJzogYC0oZ3V0dGVyIC8gMilgLFxuICAgICdbc3R5bGUubWFyZ2luLXJpZ2h0LnB4XSc6IGAtKGd1dHRlciAvIDIpYCxcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBTRUNvbnRhaW5lckNvbXBvbmVudCB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9jb2w6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfY29sSW5Db246IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbGFiZWxXaWR0aDogTnVtYmVySW5wdXQ7XG5cbiAgcHJpdmF0ZSBlcnJvck5vdGlmeSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFNFRXJyb3JSZWZyZXNoPihudWxsIGFzIE56U2FmZUFueSk7XG4gIEBJbnB1dCgnc2UtY29udGFpbmVyJykgQElucHV0TnVtYmVyKG51bGwpIGNvbEluQ29uOiBSRVBfVFlQRTtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKG51bGwpIGNvbDogUkVQX1RZUEU7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcihudWxsKSBsYWJlbFdpZHRoOiBudW1iZXI7XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcblxuICBASW5wdXQoKVxuICBnZXQgZ3V0dGVyKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMubnpMYXlvdXQgPT09ICdob3Jpem9udGFsJyA/IHRoaXMuX2d1dHRlciA6IDA7XG4gIH1cbiAgc2V0IGd1dHRlcih2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fZ3V0dGVyID0gdG9OdW1iZXIodmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX2d1dHRlcjogbnVtYmVyO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBuekxheW91dCgpOiBTRUxheW91dCB7XG4gICAgcmV0dXJuIHRoaXMuX256TGF5b3V0O1xuICB9XG4gIHNldCBuekxheW91dCh2YWx1ZTogU0VMYXlvdXQpIHtcbiAgICB0aGlzLl9uekxheW91dCA9IHZhbHVlO1xuICAgIGlmICh2YWx1ZSA9PT0gJ2lubGluZScpIHtcbiAgICAgIHRoaXMuc2l6ZSA9ICdjb21wYWN0JztcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBfbnpMYXlvdXQ6IFNFTGF5b3V0O1xuXG4gIEBJbnB1dCgpIHNpemU6ICdkZWZhdWx0JyB8ICdjb21wYWN0JztcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGZpcnN0VmlzdWFsOiBib29sZWFuO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgaW5nb3JlRGlydHk6IGJvb2xlYW47XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBsaW5lID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIHNldCBlcnJvcnModmFsOiBTRUVycm9yUmVmcmVzaFtdKSB7XG4gICAgdGhpcy5zZXRFcnJvcnModmFsKTtcbiAgfVxuXG4gIGdldCBlcnJvck5vdGlmeSgpOiBPYnNlcnZhYmxlPFNFRXJyb3JSZWZyZXNoPiB7XG4gICAgcmV0dXJuIHRoaXMuZXJyb3JOb3RpZnkkLnBpcGUoZmlsdGVyKHYgPT4gdiAhPSBudWxsKSk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihjb25maWdTcnY6IEFsYWluQ29uZmlnU2VydmljZSkge1xuICAgIGNvbmZpZ1Nydi5hdHRhY2godGhpcywgJ3NlJywge1xuICAgICAgc2l6ZTogJ2RlZmF1bHQnLFxuICAgICAgbnpMYXlvdXQ6ICdob3Jpem9udGFsJyxcbiAgICAgIGd1dHRlcjogMzIsXG4gICAgICBjb2w6IDIsXG4gICAgICBsYWJlbFdpZHRoOiAxNTAsXG4gICAgICBmaXJzdFZpc3VhbDogZmFsc2UsXG4gICAgICBpbmdvcmVEaXJ0eTogZmFsc2UsXG4gICAgfSk7XG4gIH1cblxuICBzZXRFcnJvcnMoZXJyb3JzOiBTRUVycm9yUmVmcmVzaFtdKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBlcnJvciBvZiBlcnJvcnMpIHtcbiAgICAgIHRoaXMuZXJyb3JOb3RpZnkkLm5leHQoZXJyb3IpO1xuICAgIH1cbiAgfVxufVxuIl19