import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { AlainConfigService } from '@delon/util/config';
import { InputBoolean, InputNumber, toNumber } from '@delon/util/decorator';
export class SEContainerComponent {
    constructor(configSrv) {
        this.errorNotify$ = new BehaviorSubject(null);
        this.line = false;
        configSrv.attach(this, 'se', {
            size: 'default',
            nzLayout: 'horizontal',
            gutter: 32,
            col: 2,
            labelWidth: 150,
            firstVisual: false,
            ingoreDirty: false
        });
    }
    get gutter() {
        return this.nzLayout === 'horizontal' ? this._gutter : 0;
    }
    set gutter(value) {
        this._gutter = toNumber(value);
    }
    get nzLayout() {
        return this._nzLayout;
    }
    set nzLayout(value) {
        this._nzLayout = value;
        if (value === 'inline') {
            this.size = 'compact';
        }
    }
    set errors(val) {
        this.setErrors(val);
    }
    get margin() {
        return -(this.gutter / 2);
    }
    get errorNotify() {
        return this.errorNotify$.pipe(filter(v => v != null));
    }
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
                    '[style.margin-left.px]': `margin`,
                    '[style.margin-right.px]': `margin`
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            },] }
];
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
    InputNumber(null)
], SEContainerComponent.prototype, "colInCon", void 0);
__decorate([
    InputNumber(null)
], SEContainerComponent.prototype, "col", void 0);
__decorate([
    InputNumber(null)
], SEContainerComponent.prototype, "labelWidth", void 0);
__decorate([
    InputBoolean()
], SEContainerComponent.prototype, "firstVisual", void 0);
__decorate([
    InputBoolean()
], SEContainerComponent.prototype, "ingoreDirty", void 0);
__decorate([
    InputBoolean()
], SEContainerComponent.prototype, "line", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2UtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9zZS9zZS1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBZSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRyxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUt4QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RCxPQUFPLEVBQWdCLFlBQVksRUFBRSxXQUFXLEVBQWUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUEyQnZHLE1BQU0sT0FBTyxvQkFBb0I7SUFvRC9CLFlBQVksU0FBNkI7UUE1Q2pDLGlCQUFZLEdBQUcsSUFBSSxlQUFlLENBQWlCLElBQWlCLENBQUMsQ0FBQztRQThCckQsU0FBSSxHQUFHLEtBQUssQ0FBQztRQWVwQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUU7WUFDM0IsSUFBSSxFQUFFLFNBQVM7WUFDZixRQUFRLEVBQUUsWUFBWTtZQUN0QixNQUFNLEVBQUUsRUFBRTtZQUNWLEdBQUcsRUFBRSxDQUFDO1lBQ04sVUFBVSxFQUFFLEdBQUc7WUFDZixXQUFXLEVBQUUsS0FBSztZQUNsQixXQUFXLEVBQUUsS0FBSztTQUNuQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBaERELElBQ0ksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLFFBQVEsS0FBSyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBQ0QsSUFBSSxNQUFNLENBQUMsS0FBc0I7UUFDL0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUdELElBQ0ksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBQ0QsSUFBSSxRQUFRLENBQUMsS0FBZTtRQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDdEIsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7U0FDdkI7SUFDSCxDQUFDO0lBT0QsSUFDSSxNQUFNLENBQUMsR0FBcUI7UUFDOUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxDQUFDLENBQUUsSUFBSSxDQUFDLE1BQWlCLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQWNELFNBQVMsQ0FBQyxNQUF3QjtRQUNoQyxLQUFLLE1BQU0sS0FBSyxJQUFJLE1BQU0sRUFBRTtZQUMxQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMvQjtJQUNILENBQUM7OztZQTNGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDhCQUE4QjtnQkFDeEMsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFFBQVEsRUFBRTs7Ozs7R0FLVDtnQkFDRCxJQUFJLEVBQUU7b0JBQ0osaUJBQWlCLEVBQUUsTUFBTTtvQkFDekIsdUJBQXVCLEVBQUUsTUFBTTtvQkFDL0Isd0JBQXdCLEVBQUUsMkJBQTJCO29CQUNyRCxzQkFBc0IsRUFBRSx5QkFBeUI7b0JBQ2pELG9CQUFvQixFQUFFLHVCQUF1QjtvQkFDN0MscUJBQXFCLEVBQUUsb0JBQW9CO29CQUMzQyx3QkFBd0IsRUFBRSxRQUFRO29CQUNsQyx5QkFBeUIsRUFBRSxRQUFRO2lCQUNwQztnQkFDRCxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7OztZQTNCUSxrQkFBa0I7Ozt1QkFxQ3hCLEtBQUssU0FBQyxjQUFjO2tCQUNwQixLQUFLO3lCQUNMLEtBQUs7b0JBQ0wsS0FBSztxQkFFTCxLQUFLO3VCQVNMLEtBQUs7bUJBWUwsS0FBSzswQkFDTCxLQUFLOzBCQUNMLEtBQUs7bUJBQ0wsS0FBSztxQkFDTCxLQUFLOztBQTlCb0M7SUFBbEIsV0FBVyxDQUFDLElBQUksQ0FBQztzREFBb0I7QUFDakM7SUFBbEIsV0FBVyxDQUFDLElBQUksQ0FBQztpREFBZTtBQUNkO0lBQWxCLFdBQVcsQ0FBQyxJQUFJLENBQUM7d0RBQW9CO0FBeUJ0QjtJQUFmLFlBQVksRUFBRTt5REFBc0I7QUFDckI7SUFBZixZQUFZLEVBQUU7eURBQXNCO0FBQ3JCO0lBQWYsWUFBWSxFQUFFO2tEQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIFRlbXBsYXRlUmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcy9hbnknO1xuXG5pbXBvcnQgeyBSRVBfVFlQRSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UgfSBmcm9tICdAZGVsb24vdXRpbC9jb25maWcnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyLCBOdW1iZXJJbnB1dCwgdG9OdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbC9kZWNvcmF0b3InO1xuXG5pbXBvcnQgeyBTRUVycm9yUmVmcmVzaCwgU0VMYXlvdXQgfSBmcm9tICcuL3NlLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2UtY29udGFpbmVyLCBbc2UtY29udGFpbmVyXScsXG4gIGV4cG9ydEFzOiAnc2VDb250YWluZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgc2UtdGl0bGUgKm5nSWY9XCJ0aXRsZVwiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cInRpdGxlXCI+e3sgdGl0bGUgfX08L25nLWNvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC1yb3ddJzogYHRydWVgLFxuICAgICdbY2xhc3Muc2VfX2NvbnRhaW5lcl0nOiBgdHJ1ZWAsXG4gICAgJ1tjbGFzcy5zZV9faG9yaXpvbnRhbF0nOiBgbnpMYXlvdXQgPT09ICdob3Jpem9udGFsJ2AsXG4gICAgJ1tjbGFzcy5zZV9fdmVydGljYWxdJzogYG56TGF5b3V0ID09PSAndmVydGljYWwnYCxcbiAgICAnW2NsYXNzLnNlX19pbmxpbmVdJzogYG56TGF5b3V0ID09PSAnaW5saW5lJ2AsXG4gICAgJ1tjbGFzcy5zZV9fY29tcGFjdF0nOiBgc2l6ZSA9PT0gJ2NvbXBhY3QnYCxcbiAgICAnW3N0eWxlLm1hcmdpbi1sZWZ0LnB4XSc6IGBtYXJnaW5gLFxuICAgICdbc3R5bGUubWFyZ2luLXJpZ2h0LnB4XSc6IGBtYXJnaW5gXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTRUNvbnRhaW5lckNvbXBvbmVudCB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9jb2w6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfY29sSW5Db246IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbGFiZWxXaWR0aDogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9maXJzdFZpc3VhbDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfaW5nb3JlRGlydHk6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2xpbmU6IEJvb2xlYW5JbnB1dDtcblxuICBwcml2YXRlIGVycm9yTm90aWZ5JCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8U0VFcnJvclJlZnJlc2g+KG51bGwgYXMgTnpTYWZlQW55KTtcbiAgQElucHV0KCdzZS1jb250YWluZXInKSBASW5wdXROdW1iZXIobnVsbCkgY29sSW5Db246IFJFUF9UWVBFO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIobnVsbCkgY29sOiBSRVBfVFlQRTtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKG51bGwpIGxhYmVsV2lkdGg6IG51bWJlcjtcbiAgQElucHV0KCkgdGl0bGU/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGw7XG5cbiAgQElucHV0KClcbiAgZ2V0IGd1dHRlcigpOiBudW1iZXIgfCBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm56TGF5b3V0ID09PSAnaG9yaXpvbnRhbCcgPyB0aGlzLl9ndXR0ZXIgOiAwO1xuICB9XG4gIHNldCBndXR0ZXIodmFsdWU6IG51bWJlciB8IHN0cmluZykge1xuICAgIHRoaXMuX2d1dHRlciA9IHRvTnVtYmVyKHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF9ndXR0ZXI6IG51bWJlcjtcblxuICBASW5wdXQoKVxuICBnZXQgbnpMYXlvdXQoKTogU0VMYXlvdXQge1xuICAgIHJldHVybiB0aGlzLl9uekxheW91dDtcbiAgfVxuICBzZXQgbnpMYXlvdXQodmFsdWU6IFNFTGF5b3V0KSB7XG4gICAgdGhpcy5fbnpMYXlvdXQgPSB2YWx1ZTtcbiAgICBpZiAodmFsdWUgPT09ICdpbmxpbmUnKSB7XG4gICAgICB0aGlzLnNpemUgPSAnY29tcGFjdCc7XG4gICAgfVxuICB9XG4gIHByaXZhdGUgX256TGF5b3V0OiBTRUxheW91dDtcblxuICBASW5wdXQoKSBzaXplOiAnZGVmYXVsdCcgfCAnY29tcGFjdCc7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBmaXJzdFZpc3VhbDogYm9vbGVhbjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGluZ29yZURpcnR5OiBib29sZWFuO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbGluZSA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBzZXQgZXJyb3JzKHZhbDogU0VFcnJvclJlZnJlc2hbXSkge1xuICAgIHRoaXMuc2V0RXJyb3JzKHZhbCk7XG4gIH1cblxuICBnZXQgbWFyZ2luKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIC0oKHRoaXMuZ3V0dGVyIGFzIG51bWJlcikgLyAyKTtcbiAgfVxuXG4gIGdldCBlcnJvck5vdGlmeSgpOiBPYnNlcnZhYmxlPFNFRXJyb3JSZWZyZXNoPiB7XG4gICAgcmV0dXJuIHRoaXMuZXJyb3JOb3RpZnkkLnBpcGUoZmlsdGVyKHYgPT4gdiAhPSBudWxsKSk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihjb25maWdTcnY6IEFsYWluQ29uZmlnU2VydmljZSkge1xuICAgIGNvbmZpZ1Nydi5hdHRhY2godGhpcywgJ3NlJywge1xuICAgICAgc2l6ZTogJ2RlZmF1bHQnLFxuICAgICAgbnpMYXlvdXQ6ICdob3Jpem9udGFsJyxcbiAgICAgIGd1dHRlcjogMzIsXG4gICAgICBjb2w6IDIsXG4gICAgICBsYWJlbFdpZHRoOiAxNTAsXG4gICAgICBmaXJzdFZpc3VhbDogZmFsc2UsXG4gICAgICBpbmdvcmVEaXJ0eTogZmFsc2VcbiAgICB9KTtcbiAgfVxuXG4gIHNldEVycm9ycyhlcnJvcnM6IFNFRXJyb3JSZWZyZXNoW10pOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IGVycm9yIG9mIGVycm9ycykge1xuICAgICAgdGhpcy5lcnJvck5vdGlmeSQubmV4dChlcnJvcik7XG4gICAgfVxuICB9XG59XG4iXX0=