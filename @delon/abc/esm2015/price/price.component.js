import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, forwardRef, Input, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputBoolean, toNumber } from '@delon/util/decorator';
export class PriceComponent {
    constructor() {
        this.onChange = () => { };
        this.onTouched = () => { };
        this.value = null;
        this.nzId = null;
        this.size = 'default';
        this.min = -Infinity;
        this.max = Infinity;
        this.placeHolder = '';
        this.step = 1;
        this.disabled = false;
        this.autoFocus = false;
    }
    handlValue(val) {
        this.onChange(val);
    }
    writeValue(value) {
        this.value = toNumber(value, null);
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
}
PriceComponent.decorators = [
    { type: Component, args: [{
                selector: 'price',
                exportAs: 'price',
                template: `
    <nz-input-number
      [(ngModel)]="value"
      (ngModelChange)="handlValue($event)"
      [nzSize]="size"
      [nzMin]="min"
      [nzMax]="max"
      [nzPlaceHolder]="placeHolder"
      [nzStep]="step"
      [nzId]="nzId"
      [nzDisabled]="disabled"
      [nzAutoFocus]="autoFocus"
    ></nz-input-number>
  `,
                host: {
                    '[class.price]': `true`,
                },
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => PriceComponent),
                        multi: true,
                    },
                ],
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            },] }
];
PriceComponent.propDecorators = {
    nzId: [{ type: Input }],
    size: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    placeHolder: [{ type: Input }],
    step: [{ type: Input }],
    disabled: [{ type: Input }],
    autoFocus: [{ type: Input }]
};
__decorate([
    InputBoolean()
], PriceComponent.prototype, "disabled", void 0);
__decorate([
    InputBoolean()
], PriceComponent.prototype, "autoFocus", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpY2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3ByaWNlL3ByaWNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pHLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQWdCLFlBQVksRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQWtDN0UsTUFBTSxPQUFPLGNBQWM7SUEvQjNCO1FBbUNFLGFBQVEsR0FBaUIsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO1FBQ2xDLGNBQVMsR0FBa0IsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO1FBQ3BDLFVBQUssR0FBa0IsSUFBSSxDQUFDO1FBRW5CLFNBQUksR0FBa0IsSUFBSSxDQUFDO1FBQzNCLFNBQUksR0FBa0IsU0FBUyxDQUFDO1FBQ2hDLFFBQUcsR0FBVyxDQUFDLFFBQVEsQ0FBQztRQUN4QixRQUFHLEdBQVcsUUFBUSxDQUFDO1FBQ3ZCLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLFNBQUksR0FBRyxDQUFDLENBQUM7UUFDTyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGNBQVMsR0FBRyxLQUFLLENBQUM7SUFlN0MsQ0FBQztJQWJDLFVBQVUsQ0FBQyxHQUFXO1FBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUVELFVBQVUsQ0FBQyxLQUFhO1FBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBQ0QsZ0JBQWdCLENBQUMsRUFBZ0I7UUFDL0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUNELGlCQUFpQixDQUFDLEVBQWlCO1FBQ2pDLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7OztZQTVERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLFFBQVEsRUFBRSxPQUFPO2dCQUNqQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7R0FhVDtnQkFDRCxJQUFJLEVBQUU7b0JBQ0osZUFBZSxFQUFFLE1BQU07aUJBQ3hCO2dCQUNELFNBQVMsRUFBRTtvQkFDVDt3QkFDRSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQzt3QkFDN0MsS0FBSyxFQUFFLElBQUk7cUJBQ1o7aUJBQ0Y7Z0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3RDOzs7bUJBU0UsS0FBSzttQkFDTCxLQUFLO2tCQUNMLEtBQUs7a0JBQ0wsS0FBSzswQkFDTCxLQUFLO21CQUNMLEtBQUs7dUJBQ0wsS0FBSzt3QkFDTCxLQUFLOztBQURtQjtJQUFmLFlBQVksRUFBRTtnREFBa0I7QUFDakI7SUFBZixZQUFZLEVBQUU7aURBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgZm9yd2FyZFJlZiwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIElucHV0Qm9vbGVhbiwgdG9OdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbC9kZWNvcmF0b3InO1xuaW1wb3J0IHR5cGUgeyBOelNpemVMRFNUeXBlLCBPbkNoYW5nZVR5cGUsIE9uVG91Y2hlZFR5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwcmljZScsXG4gIGV4cG9ydEFzOiAncHJpY2UnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuei1pbnB1dC1udW1iZXJcbiAgICAgIFsobmdNb2RlbCldPVwidmFsdWVcIlxuICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiaGFuZGxWYWx1ZSgkZXZlbnQpXCJcbiAgICAgIFtuelNpemVdPVwic2l6ZVwiXG4gICAgICBbbnpNaW5dPVwibWluXCJcbiAgICAgIFtuek1heF09XCJtYXhcIlxuICAgICAgW256UGxhY2VIb2xkZXJdPVwicGxhY2VIb2xkZXJcIlxuICAgICAgW256U3RlcF09XCJzdGVwXCJcbiAgICAgIFtueklkXT1cIm56SWRcIlxuICAgICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgW256QXV0b0ZvY3VzXT1cImF1dG9Gb2N1c1wiXG4gICAgPjwvbnotaW5wdXQtbnVtYmVyPlxuICBgLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5wcmljZV0nOiBgdHJ1ZWAsXG4gIH0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUHJpY2VDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgXSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBQcmljZUNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Rpc2FibGVkOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9hdXRvRm9jdXM6IEJvb2xlYW5JbnB1dDtcblxuICBvbkNoYW5nZTogT25DaGFuZ2VUeXBlID0gKCkgPT4ge307XG4gIG9uVG91Y2hlZDogT25Ub3VjaGVkVHlwZSA9ICgpID0+IHt9O1xuICB2YWx1ZTogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG5cbiAgQElucHV0KCkgbnpJZDogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIHNpemU6IE56U2l6ZUxEU1R5cGUgPSAnZGVmYXVsdCc7XG4gIEBJbnB1dCgpIG1pbjogbnVtYmVyID0gLUluZmluaXR5O1xuICBASW5wdXQoKSBtYXg6IG51bWJlciA9IEluZmluaXR5O1xuICBASW5wdXQoKSBwbGFjZUhvbGRlciA9ICcnO1xuICBASW5wdXQoKSBzdGVwID0gMTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBhdXRvRm9jdXMgPSBmYWxzZTtcblxuICBoYW5kbFZhbHVlKHZhbDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSh2YWwpO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHRvTnVtYmVyKHZhbHVlLCBudWxsKTtcbiAgfVxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBPbkNoYW5nZVR5cGUpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IE9uVG91Y2hlZFR5cGUpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG59XG4iXX0=