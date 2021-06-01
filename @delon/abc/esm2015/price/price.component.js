import { __decorate, __metadata } from "tslib";
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
    InputBoolean(),
    __metadata("design:type", Object)
], PriceComponent.prototype, "disabled", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], PriceComponent.prototype, "autoFocus", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpY2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3ByaWNlL3ByaWNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pHLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQWdCLFlBQVksRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQWtDN0UsTUFBTSxPQUFPLGNBQWM7SUEvQjNCO1FBbUNFLGFBQVEsR0FBaUIsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO1FBQ2xDLGNBQVMsR0FBa0IsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO1FBQ3BDLFVBQUssR0FBa0IsSUFBSSxDQUFDO1FBRW5CLFNBQUksR0FBa0IsSUFBSSxDQUFDO1FBQzNCLFNBQUksR0FBa0IsU0FBUyxDQUFDO1FBQ2hDLFFBQUcsR0FBVyxDQUFDLFFBQVEsQ0FBQztRQUN4QixRQUFHLEdBQVcsUUFBUSxDQUFDO1FBQ3ZCLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLFNBQUksR0FBRyxDQUFDLENBQUM7UUFDTyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGNBQVMsR0FBRyxLQUFLLENBQUM7SUFlN0MsQ0FBQztJQWJDLFVBQVUsQ0FBQyxHQUFXO1FBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUVELFVBQVUsQ0FBQyxLQUFhO1FBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBQ0QsZ0JBQWdCLENBQUMsRUFBZ0I7UUFDL0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUNELGlCQUFpQixDQUFDLEVBQWlCO1FBQ2pDLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7OztZQTVERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLFFBQVEsRUFBRSxPQUFPO2dCQUNqQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7R0FhVDtnQkFDRCxJQUFJLEVBQUU7b0JBQ0osZUFBZSxFQUFFLE1BQU07aUJBQ3hCO2dCQUNELFNBQVMsRUFBRTtvQkFDVDt3QkFDRSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQzt3QkFDN0MsS0FBSyxFQUFFLElBQUk7cUJBQ1o7aUJBQ0Y7Z0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3RDOzs7bUJBU0UsS0FBSzttQkFDTCxLQUFLO2tCQUNMLEtBQUs7a0JBQ0wsS0FBSzswQkFDTCxLQUFLO21CQUNMLEtBQUs7dUJBQ0wsS0FBSzt3QkFDTCxLQUFLOztBQURtQjtJQUFmLFlBQVksRUFBRTs7Z0RBQWtCO0FBQ2pCO0lBQWYsWUFBWSxFQUFFOztpREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBmb3J3YXJkUmVmLCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgSW5wdXRCb29sZWFuLCB0b051bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsL2RlY29yYXRvcic7XG5pbXBvcnQgdHlwZSB7IE56U2l6ZUxEU1R5cGUsIE9uQ2hhbmdlVHlwZSwgT25Ub3VjaGVkVHlwZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3ByaWNlJyxcbiAgZXhwb3J0QXM6ICdwcmljZScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG56LWlucHV0LW51bWJlclxuICAgICAgWyhuZ01vZGVsKV09XCJ2YWx1ZVwiXG4gICAgICAobmdNb2RlbENoYW5nZSk9XCJoYW5kbFZhbHVlKCRldmVudClcIlxuICAgICAgW256U2l6ZV09XCJzaXplXCJcbiAgICAgIFtuek1pbl09XCJtaW5cIlxuICAgICAgW256TWF4XT1cIm1heFwiXG4gICAgICBbbnpQbGFjZUhvbGRlcl09XCJwbGFjZUhvbGRlclwiXG4gICAgICBbbnpTdGVwXT1cInN0ZXBcIlxuICAgICAgW256SWRdPVwibnpJZFwiXG4gICAgICBbbnpEaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICBbbnpBdXRvRm9jdXNdPVwiYXV0b0ZvY3VzXCJcbiAgICA+PC9uei1pbnB1dC1udW1iZXI+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLnByaWNlXSc6IGB0cnVlYCxcbiAgfSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBQcmljZUNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICBdLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIFByaWNlQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZGlzYWJsZWQ6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2F1dG9Gb2N1czogQm9vbGVhbklucHV0O1xuXG4gIG9uQ2hhbmdlOiBPbkNoYW5nZVR5cGUgPSAoKSA9PiB7fTtcbiAgb25Ub3VjaGVkOiBPblRvdWNoZWRUeXBlID0gKCkgPT4ge307XG4gIHZhbHVlOiBudW1iZXIgfCBudWxsID0gbnVsbDtcblxuICBASW5wdXQoKSBueklkOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgc2l6ZTogTnpTaXplTERTVHlwZSA9ICdkZWZhdWx0JztcbiAgQElucHV0KCkgbWluOiBudW1iZXIgPSAtSW5maW5pdHk7XG4gIEBJbnB1dCgpIG1heDogbnVtYmVyID0gSW5maW5pdHk7XG4gIEBJbnB1dCgpIHBsYWNlSG9sZGVyID0gJyc7XG4gIEBJbnB1dCgpIHN0ZXAgPSAxO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGF1dG9Gb2N1cyA9IGZhbHNlO1xuXG4gIGhhbmRsVmFsdWUodmFsOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlKHZhbCk7XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gdG9OdW1iZXIodmFsdWUsIG51bGwpO1xuICB9XG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IE9uQ2hhbmdlVHlwZSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogT25Ub3VjaGVkVHlwZSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cbn1cbiJdfQ==