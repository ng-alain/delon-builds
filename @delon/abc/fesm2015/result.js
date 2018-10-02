import { Component, Input, TemplateRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ResultComponent {
    constructor() {
        this._type = '';
        this._icon = '';
        this._title = '';
        this._description = '';
        this._extra = '';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set type(value) {
        this._type = value;
        switch (value) {
            case 'success':
                this._icon = 'check-circle';
                break;
            case 'error':
                this._icon = 'close-circle';
                break;
            default:
                this._icon = value;
                break;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set title(value) {
        if (value instanceof TemplateRef) {
            this._title = null;
            this._titleTpl = value;
        }
        else
            this._title = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set description(value) {
        if (value instanceof TemplateRef) {
            this._description = null;
            this._descriptionTpl = value;
        }
        else
            this._description = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set extra(value) {
        if (value instanceof TemplateRef) {
            this._extra = null;
            this._extraTpl = value;
        }
        else
            this._extra = value;
    }
}
ResultComponent.decorators = [
    { type: Component, args: [{
                selector: 'result',
                template: `
  <div class="result__icon"><i class="anticon anticon-{{_icon}} result__icon-{{_type}}"></i></div>
  <div class="result__title"><ng-container *ngIf="_title; else _titleTpl">{{_title}}</ng-container></div>
  <div *ngIf="_description || _descriptionTpl" class="result__desc"><ng-container *ngIf="_description; else _descriptionTpl">{{_description}}</ng-container></div>
  <div *ngIf="_extra || _extraTpl" class="result__extra">
    <ng-container *ngIf="_extra; else _extraTpl">{{_extra}}</ng-container>
  </div>
  <div class="result__actions"><ng-content></ng-content></div>
  `,
                host: { '[class.result]': 'true' },
                preserveWhitespaces: false
            }] }
];
ResultComponent.propDecorators = {
    type: [{ type: Input }],
    title: [{ type: Input }],
    description: [{ type: Input }],
    extra: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [ResultComponent];
class ResultModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: ResultModule, providers: [] };
    }
}
ResultModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [...COMPONENTS],
                exports: [...COMPONENTS],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { ResultComponent, ResultModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdWx0LmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AZGVsb24vYWJjL3Jlc3VsdC9yZXN1bHQuY29tcG9uZW50LnRzIiwibmc6Ly9AZGVsb24vYWJjL3Jlc3VsdC9yZXN1bHQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3Jlc3VsdCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8ZGl2IGNsYXNzPVwicmVzdWx0X19pY29uXCI+PGkgY2xhc3M9XCJhbnRpY29uIGFudGljb24te3tfaWNvbn19IHJlc3VsdF9faWNvbi17e190eXBlfX1cIj48L2k+PC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cInJlc3VsdF9fdGl0bGVcIj48bmctY29udGFpbmVyICpuZ0lmPVwiX3RpdGxlOyBlbHNlIF90aXRsZVRwbFwiPnt7X3RpdGxlfX08L25nLWNvbnRhaW5lcj48L2Rpdj5cclxuICA8ZGl2ICpuZ0lmPVwiX2Rlc2NyaXB0aW9uIHx8IF9kZXNjcmlwdGlvblRwbFwiIGNsYXNzPVwicmVzdWx0X19kZXNjXCI+PG5nLWNvbnRhaW5lciAqbmdJZj1cIl9kZXNjcmlwdGlvbjsgZWxzZSBfZGVzY3JpcHRpb25UcGxcIj57e19kZXNjcmlwdGlvbn19PC9uZy1jb250YWluZXI+PC9kaXY+XHJcbiAgPGRpdiAqbmdJZj1cIl9leHRyYSB8fCBfZXh0cmFUcGxcIiBjbGFzcz1cInJlc3VsdF9fZXh0cmFcIj5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJfZXh0cmE7IGVsc2UgX2V4dHJhVHBsXCI+e3tfZXh0cmF9fTwvbmctY29udGFpbmVyPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJyZXN1bHRfX2FjdGlvbnNcIj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9kaXY+XHJcbiAgYCxcclxuICBob3N0OiB7ICdbY2xhc3MucmVzdWx0XSc6ICd0cnVlJyB9LFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVzdWx0Q29tcG9uZW50IHtcclxuICBfdHlwZSA9ICcnO1xyXG4gIF9pY29uID0gJyc7XHJcbiAgQElucHV0KClcclxuICBzZXQgdHlwZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl90eXBlID0gdmFsdWU7XHJcbiAgICBzd2l0Y2ggKHZhbHVlKSB7XHJcbiAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxyXG4gICAgICAgIHRoaXMuX2ljb24gPSAnY2hlY2stY2lyY2xlJztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnZXJyb3InOlxyXG4gICAgICAgIHRoaXMuX2ljb24gPSAnY2xvc2UtY2lyY2xlJztcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICB0aGlzLl9pY29uID0gdmFsdWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfdGl0bGUgPSAnJztcclxuICBfdGl0bGVUcGw6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgQElucHV0KClcclxuICBzZXQgdGl0bGUodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4pIHtcclxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XHJcbiAgICAgIHRoaXMuX3RpdGxlID0gbnVsbDtcclxuICAgICAgdGhpcy5fdGl0bGVUcGwgPSB2YWx1ZTtcclxuICAgIH0gZWxzZSB0aGlzLl90aXRsZSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgX2Rlc2NyaXB0aW9uID0gJyc7XHJcbiAgX2Rlc2NyaXB0aW9uVHBsOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGRlc2NyaXB0aW9uKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KSB7XHJcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xyXG4gICAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IG51bGw7XHJcbiAgICAgIHRoaXMuX2Rlc2NyaXB0aW9uVHBsID0gdmFsdWU7XHJcbiAgICB9IGVsc2UgdGhpcy5fZGVzY3JpcHRpb24gPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIF9leHRyYSA9ICcnO1xyXG4gIF9leHRyYVRwbDogVGVtcGxhdGVSZWY8YW55PjtcclxuICBASW5wdXQoKVxyXG4gIHNldCBleHRyYSh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pikge1xyXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcclxuICAgICAgdGhpcy5fZXh0cmEgPSBudWxsO1xyXG4gICAgICB0aGlzLl9leHRyYVRwbCA9IHZhbHVlO1xyXG4gICAgfSBlbHNlIHRoaXMuX2V4dHJhID0gdmFsdWU7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBSZXN1bHRDb21wb25lbnQgfSBmcm9tICcuL3Jlc3VsdC5jb21wb25lbnQnO1xyXG5cclxuY29uc3QgQ09NUE9ORU5UUyA9IFtSZXN1bHRDb21wb25lbnRdO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFsuLi5DT01QT05FTlRTXSxcclxuICBleHBvcnRzOiBbLi4uQ09NUE9ORU5UU10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZXN1bHRNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHsgbmdNb2R1bGU6IFJlc3VsdE1vZHVsZSwgcHJvdmlkZXJzOiBbXSB9O1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztxQkFpQlUsRUFBRTtxQkFDRixFQUFFO3NCQWlCRCxFQUFFOzRCQVVJLEVBQUU7c0JBVVIsRUFBRTs7Ozs7O0lBcENYLElBQ0ksSUFBSSxDQUFDLEtBQWE7UUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsUUFBUSxLQUFLO1lBQ1gsS0FBSyxTQUFTO2dCQUNaLElBQUksQ0FBQyxLQUFLLEdBQUcsY0FBYyxDQUFDO2dCQUM1QixNQUFNO1lBQ1IsS0FBSyxPQUFPO2dCQUNWLElBQUksQ0FBQyxLQUFLLEdBQUcsY0FBYyxDQUFDO2dCQUM1QixNQUFNO1lBQ1I7Z0JBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7Z0JBQ25CLE1BQU07U0FDVDtLQUNGOzs7OztJQUlELElBQ0ksS0FBSyxDQUFDLEtBQWdDO1FBQ3hDLElBQUksS0FBSyxZQUFZLFdBQVcsRUFBRTtZQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztTQUN4Qjs7WUFBTSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztLQUM1Qjs7Ozs7SUFJRCxJQUNJLFdBQVcsQ0FBQyxLQUFnQztRQUM5QyxJQUFJLEtBQUssWUFBWSxXQUFXLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDekIsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7U0FDOUI7O1lBQU0sSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7S0FDbEM7Ozs7O0lBSUQsSUFDSSxLQUFLLENBQUMsS0FBZ0M7UUFDeEMsSUFBSSxLQUFLLFlBQVksV0FBVyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1NBQ3hCOztZQUFNLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0tBQzVCOzs7WUE3REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxRQUFRO2dCQUNsQixRQUFRLEVBQUU7Ozs7Ozs7O0dBUVQ7Z0JBQ0QsSUFBSSxFQUFFLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFO2dCQUNsQyxtQkFBbUIsRUFBRSxLQUFLO2FBQzNCOzs7bUJBSUUsS0FBSztvQkFrQkwsS0FBSzswQkFVTCxLQUFLO29CQVVMLEtBQUs7Ozs7Ozs7QUN6RFI7QUFLQSxNQUFNLFVBQVUsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBT3JDOzs7O0lBQ0UsT0FBTyxPQUFPO1FBQ1osT0FBTyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxDQUFDO0tBQ2xEOzs7WUFSRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2dCQUN2QixZQUFZLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQztnQkFDN0IsT0FBTyxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUM7YUFDekI7Ozs7Ozs7Ozs7Ozs7OzsifQ==