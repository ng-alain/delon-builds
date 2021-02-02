import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { AlainConfigService } from '@delon/util/config';
import { InputBoolean, InputNumber, toNumber } from '@delon/util/decorator';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@delon/util/config";
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
            ingoreDirty: false,
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
    get errorNotify() {
        return this.errorNotify$.pipe(filter(v => v != null));
    }
    setErrors(errors) {
        for (const error of errors) {
            this.errorNotify$.next(error);
        }
    }
}
/** @nocollapse */ SEContainerComponent.ɵfac = function SEContainerComponent_Factory(t) { return new (t || SEContainerComponent)(i0.ɵɵdirectiveInject(i1.AlainConfigService)); };
/** @nocollapse */ SEContainerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ version: "11.1.1", type: SEContainerComponent, selector: "se-container, [se-container]", inputs: { colInCon: ["se-container", "colInCon"], col: "col", labelWidth: "labelWidth", title: "title", gutter: "gutter", nzLayout: "nzLayout", size: "size", firstVisual: "firstVisual", ingoreDirty: "ingoreDirty", line: "line", errors: "errors" }, host: { properties: { "class.ant-row": "true", "class.se__container": "true", "class.se__horizontal": "nzLayout === 'horizontal'", "class.se__vertical": "nzLayout === 'vertical'", "class.se__inline": "nzLayout === 'inline'", "class.se__compact": "size === 'compact'", "style.margin-left.px": "-(gutter / 2)", "style.margin-right.px": "-(gutter / 2)" } }, exportAs: ["seContainer"], ngImport: i0, template: `
    <div se-title *ngIf="title">
      <ng-container *nzStringTemplateOutlet="title">{{ title }}</ng-container>
    </div>
    <ng-content></ng-content>
  `, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SEContainerComponent, [{
        type: Component,
        args: [{
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
                encapsulation: ViewEncapsulation.None,
            }]
    }], function () { return [{ type: i1.AlainConfigService }]; }, { colInCon: [{
            type: Input,
            args: ['se-container']
        }], col: [{
            type: Input
        }], labelWidth: [{
            type: Input
        }], title: [{
            type: Input
        }], gutter: [{
            type: Input
        }], nzLayout: [{
            type: Input
        }], size: [{
            type: Input
        }], firstVisual: [{
            type: Input
        }], ingoreDirty: [{
            type: Input
        }], line: [{
            type: Input
        }], errors: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2UtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9zZS9zZS1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBZSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxRyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBZSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUV6RixPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBMEJ4QyxNQUFNLE9BQU8sb0JBQW9CO0lBNkMvQixZQUFZLFNBQTZCO1FBeENqQyxpQkFBWSxHQUFHLElBQUksZUFBZSxDQUFpQixJQUFpQixDQUFDLENBQUM7UUE4QnJELFNBQUksR0FBRyxLQUFLLENBQUM7UUFXcEMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFO1lBQzNCLElBQUksRUFBRSxTQUFTO1lBQ2YsUUFBUSxFQUFFLFlBQVk7WUFDdEIsTUFBTSxFQUFFLEVBQUU7WUFDVixHQUFHLEVBQUUsQ0FBQztZQUNOLFVBQVUsRUFBRSxHQUFHO1lBQ2YsV0FBVyxFQUFFLEtBQUs7WUFDbEIsV0FBVyxFQUFFLEtBQUs7U0FDbkIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQTVDRCxJQUNJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxRQUFRLEtBQUssWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUNELElBQUksTUFBTSxDQUFDLEtBQWE7UUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUdELElBQ0ksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBQ0QsSUFBSSxRQUFRLENBQUMsS0FBZTtRQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDdEIsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7U0FDdkI7SUFDSCxDQUFDO0lBT0QsSUFDSSxNQUFNLENBQUMsR0FBcUI7UUFDOUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRUQsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBY0QsU0FBUyxDQUFDLE1BQXdCO1FBQ2hDLEtBQUssTUFBTSxLQUFLLElBQUksTUFBTSxFQUFFO1lBQzFCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQy9CO0lBQ0gsQ0FBQzs7MkdBN0RVLG9CQUFvQjtrR0FBcEIsb0JBQW9CLDByQkFwQnJCOzs7OztHQUtUO0FBcUJ5QztJQUFsQixXQUFXLENBQUMsSUFBSSxDQUFDOztzREFBb0I7QUFDakM7SUFBbEIsV0FBVyxDQUFDLElBQUksQ0FBQzs7aURBQWU7QUFDZDtJQUFsQixXQUFXLENBQUMsSUFBSSxDQUFDOzt3REFBb0I7QUF5QnRCO0lBQWYsWUFBWSxFQUFFOzt5REFBc0I7QUFDckI7SUFBZixZQUFZLEVBQUU7O3lEQUFzQjtBQUNyQjtJQUFmLFlBQVksRUFBRTs7a0RBQWM7dUZBbkMzQixvQkFBb0I7Y0F2QmhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsOEJBQThCO2dCQUN4QyxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsUUFBUSxFQUFFOzs7OztHQUtUO2dCQUNELElBQUksRUFBRTtvQkFDSixpQkFBaUIsRUFBRSxNQUFNO29CQUN6Qix1QkFBdUIsRUFBRSxNQUFNO29CQUMvQix3QkFBd0IsRUFBRSwyQkFBMkI7b0JBQ3JELHNCQUFzQixFQUFFLHlCQUF5QjtvQkFDakQsb0JBQW9CLEVBQUUsdUJBQXVCO29CQUM3QyxxQkFBcUIsRUFBRSxvQkFBb0I7b0JBQzNDLHdCQUF3QixFQUFFLGVBQWU7b0JBQ3pDLHlCQUF5QixFQUFFLGVBQWU7aUJBQzNDO2dCQUNELG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0QztxRUFPMkMsUUFBUTtrQkFBakQsS0FBSzttQkFBQyxjQUFjO1lBQ08sR0FBRztrQkFBOUIsS0FBSztZQUNzQixVQUFVO2tCQUFyQyxLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBR0YsTUFBTTtrQkFEVCxLQUFLO1lBVUYsUUFBUTtrQkFEWCxLQUFLO1lBWUcsSUFBSTtrQkFBWixLQUFLO1lBQ21CLFdBQVc7a0JBQW5DLEtBQUs7WUFDbUIsV0FBVztrQkFBbkMsS0FBSztZQUNtQixJQUFJO2tCQUE1QixLQUFLO1lBRUYsTUFBTTtrQkFEVCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIFRlbXBsYXRlUmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUkVQX1RZUEUgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3V0aWwvY29uZmlnJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIsIE51bWJlcklucHV0LCB0b051bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsL2RlY29yYXRvcic7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMvYW55JztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU0VFcnJvclJlZnJlc2gsIFNFTGF5b3V0IH0gZnJvbSAnLi9zZS50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NlLWNvbnRhaW5lciwgW3NlLWNvbnRhaW5lcl0nLFxuICBleHBvcnRBczogJ3NlQ29udGFpbmVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IHNlLXRpdGxlICpuZ0lmPVwidGl0bGVcIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJ0aXRsZVwiPnt7IHRpdGxlIH19PC9uZy1jb250YWluZXI+XG4gICAgPC9kaXY+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICBgLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtcm93XSc6IGB0cnVlYCxcbiAgICAnW2NsYXNzLnNlX19jb250YWluZXJdJzogYHRydWVgLFxuICAgICdbY2xhc3Muc2VfX2hvcml6b250YWxdJzogYG56TGF5b3V0ID09PSAnaG9yaXpvbnRhbCdgLFxuICAgICdbY2xhc3Muc2VfX3ZlcnRpY2FsXSc6IGBuekxheW91dCA9PT0gJ3ZlcnRpY2FsJ2AsXG4gICAgJ1tjbGFzcy5zZV9faW5saW5lXSc6IGBuekxheW91dCA9PT0gJ2lubGluZSdgLFxuICAgICdbY2xhc3Muc2VfX2NvbXBhY3RdJzogYHNpemUgPT09ICdjb21wYWN0J2AsXG4gICAgJ1tzdHlsZS5tYXJnaW4tbGVmdC5weF0nOiBgLShndXR0ZXIgLyAyKWAsXG4gICAgJ1tzdHlsZS5tYXJnaW4tcmlnaHQucHhdJzogYC0oZ3V0dGVyIC8gMilgLFxuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIFNFQ29udGFpbmVyQ29tcG9uZW50IHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2NvbDogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9jb2xJbkNvbjogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9sYWJlbFdpZHRoOiBOdW1iZXJJbnB1dDtcblxuICBwcml2YXRlIGVycm9yTm90aWZ5JCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8U0VFcnJvclJlZnJlc2g+KG51bGwgYXMgTnpTYWZlQW55KTtcbiAgQElucHV0KCdzZS1jb250YWluZXInKSBASW5wdXROdW1iZXIobnVsbCkgY29sSW5Db246IFJFUF9UWVBFO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIobnVsbCkgY29sOiBSRVBfVFlQRTtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKG51bGwpIGxhYmVsV2lkdGg6IG51bWJlcjtcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG4gIEBJbnB1dCgpXG4gIGdldCBndXR0ZXIoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5uekxheW91dCA9PT0gJ2hvcml6b250YWwnID8gdGhpcy5fZ3V0dGVyIDogMDtcbiAgfVxuICBzZXQgZ3V0dGVyKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9ndXR0ZXIgPSB0b051bWJlcih2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfZ3V0dGVyOiBudW1iZXI7XG5cbiAgQElucHV0KClcbiAgZ2V0IG56TGF5b3V0KCk6IFNFTGF5b3V0IHtcbiAgICByZXR1cm4gdGhpcy5fbnpMYXlvdXQ7XG4gIH1cbiAgc2V0IG56TGF5b3V0KHZhbHVlOiBTRUxheW91dCkge1xuICAgIHRoaXMuX256TGF5b3V0ID0gdmFsdWU7XG4gICAgaWYgKHZhbHVlID09PSAnaW5saW5lJykge1xuICAgICAgdGhpcy5zaXplID0gJ2NvbXBhY3QnO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIF9uekxheW91dDogU0VMYXlvdXQ7XG5cbiAgQElucHV0KCkgc2l6ZTogJ2RlZmF1bHQnIHwgJ2NvbXBhY3QnO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZmlyc3RWaXN1YWw6IGJvb2xlYW47XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBpbmdvcmVEaXJ0eTogYm9vbGVhbjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGxpbmUgPSBmYWxzZTtcbiAgQElucHV0KClcbiAgc2V0IGVycm9ycyh2YWw6IFNFRXJyb3JSZWZyZXNoW10pIHtcbiAgICB0aGlzLnNldEVycm9ycyh2YWwpO1xuICB9XG5cbiAgZ2V0IGVycm9yTm90aWZ5KCk6IE9ic2VydmFibGU8U0VFcnJvclJlZnJlc2g+IHtcbiAgICByZXR1cm4gdGhpcy5lcnJvck5vdGlmeSQucGlwZShmaWx0ZXIodiA9PiB2ICE9IG51bGwpKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZ1NydjogQWxhaW5Db25maWdTZXJ2aWNlKSB7XG4gICAgY29uZmlnU3J2LmF0dGFjaCh0aGlzLCAnc2UnLCB7XG4gICAgICBzaXplOiAnZGVmYXVsdCcsXG4gICAgICBuekxheW91dDogJ2hvcml6b250YWwnLFxuICAgICAgZ3V0dGVyOiAzMixcbiAgICAgIGNvbDogMixcbiAgICAgIGxhYmVsV2lkdGg6IDE1MCxcbiAgICAgIGZpcnN0VmlzdWFsOiBmYWxzZSxcbiAgICAgIGluZ29yZURpcnR5OiBmYWxzZSxcbiAgICB9KTtcbiAgfVxuXG4gIHNldEVycm9ycyhlcnJvcnM6IFNFRXJyb3JSZWZyZXNoW10pOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IGVycm9yIG9mIGVycm9ycykge1xuICAgICAgdGhpcy5lcnJvck5vdGlmeSQubmV4dChlcnJvcik7XG4gICAgfVxuICB9XG59XG4iXX0=