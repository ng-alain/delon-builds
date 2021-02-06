import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { AlainConfigService } from '@delon/util/config';
import { InputNumber } from '@delon/util/decorator';
export class SGContainerComponent {
    constructor(configSrv) {
        configSrv.attach(this, 'sg', {
            gutter: 32,
            col: 2,
        });
    }
    get marginValue() {
        return -(this.gutter / 2);
    }
}
SGContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'sg-container, [sg-container]',
                exportAs: 'sgContainer',
                template: ` <ng-content></ng-content> `,
                host: {
                    '[style.margin-left.px]': 'marginValue',
                    '[style.margin-right.px]': 'marginValue',
                    '[class.ant-row]': 'true',
                    '[class.sg__wrap]': 'true',
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            },] }
];
/** @nocollapse */
SGContainerComponent.ctorParameters = () => [
    { type: AlainConfigService }
];
SGContainerComponent.propDecorators = {
    gutter: [{ type: Input }],
    colInCon: [{ type: Input, args: ['sg-container',] }],
    col: [{ type: Input }]
};
__decorate([
    InputNumber(),
    __metadata("design:type", Number)
], SGContainerComponent.prototype, "gutter", void 0);
__decorate([
    InputNumber(null),
    __metadata("design:type", Number)
], SGContainerComponent.prototype, "colInCon", void 0);
__decorate([
    InputNumber(null),
    __metadata("design:type", Number)
], SGContainerComponent.prototype, "col", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ctY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9zZy9zZy1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsV0FBVyxFQUFlLE1BQU0sdUJBQXVCLENBQUM7QUFnQmpFLE1BQU0sT0FBTyxvQkFBb0I7SUFhL0IsWUFBWSxTQUE2QjtRQUN2QyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUU7WUFDM0IsTUFBTSxFQUFFLEVBQUU7WUFDVixHQUFHLEVBQUUsQ0FBQztTQUNQLENBQUMsQ0FBQztJQUNMLENBQUM7SUFURCxJQUFJLFdBQVc7UUFDYixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzVCLENBQUM7OztZQXpCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDhCQUE4QjtnQkFDeEMsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFFBQVEsRUFBRSw2QkFBNkI7Z0JBQ3ZDLElBQUksRUFBRTtvQkFDSix3QkFBd0IsRUFBRSxhQUFhO29CQUN2Qyx5QkFBeUIsRUFBRSxhQUFhO29CQUN4QyxpQkFBaUIsRUFBRSxNQUFNO29CQUN6QixrQkFBa0IsRUFBRSxNQUFNO2lCQUMzQjtnQkFDRCxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7Ozs7WUFoQlEsa0JBQWtCOzs7cUJBc0J4QixLQUFLO3VCQUNMLEtBQUssU0FBQyxjQUFjO2tCQUNwQixLQUFLOztBQUZrQjtJQUFkLFdBQVcsRUFBRTs7b0RBQWdCO0FBQ0c7SUFBbEIsV0FBVyxDQUFDLElBQUksQ0FBQzs7c0RBQW9CO0FBQ2pDO0lBQWxCLFdBQVcsQ0FBQyxJQUFJLENBQUM7O2lEQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSRVBfVFlQRSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UgfSBmcm9tICdAZGVsb24vdXRpbC9jb25maWcnO1xuaW1wb3J0IHsgSW5wdXROdW1iZXIsIE51bWJlcklucHV0IH0gZnJvbSAnQGRlbG9uL3V0aWwvZGVjb3JhdG9yJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2ctY29udGFpbmVyLCBbc2ctY29udGFpbmVyXScsXG4gIGV4cG9ydEFzOiAnc2dDb250YWluZXInLFxuICB0ZW1wbGF0ZTogYCA8bmctY29udGVudD48L25nLWNvbnRlbnQ+IGAsXG4gIGhvc3Q6IHtcbiAgICAnW3N0eWxlLm1hcmdpbi1sZWZ0LnB4XSc6ICdtYXJnaW5WYWx1ZScsXG4gICAgJ1tzdHlsZS5tYXJnaW4tcmlnaHQucHhdJzogJ21hcmdpblZhbHVlJyxcbiAgICAnW2NsYXNzLmFudC1yb3ddJzogJ3RydWUnLFxuICAgICdbY2xhc3Muc2dfX3dyYXBdJzogJ3RydWUnLFxuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIFNHQ29udGFpbmVyQ29tcG9uZW50IHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2d1dHRlcjogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9jb2xJbkNvbjogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9jb2w6IE51bWJlcklucHV0O1xuXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGd1dHRlcjogbnVtYmVyO1xuICBASW5wdXQoJ3NnLWNvbnRhaW5lcicpIEBJbnB1dE51bWJlcihudWxsKSBjb2xJbkNvbjogUkVQX1RZUEU7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcihudWxsKSBjb2w6IFJFUF9UWVBFO1xuXG4gIGdldCBtYXJnaW5WYWx1ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiAtKHRoaXMuZ3V0dGVyIC8gMik7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihjb25maWdTcnY6IEFsYWluQ29uZmlnU2VydmljZSkge1xuICAgIGNvbmZpZ1Nydi5hdHRhY2godGhpcywgJ3NnJywge1xuICAgICAgZ3V0dGVyOiAzMixcbiAgICAgIGNvbDogMixcbiAgICB9KTtcbiAgfVxufVxuIl19