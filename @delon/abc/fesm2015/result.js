import { Component, Input, TemplateRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

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
  <div class="result__icon"><i nz-icon class="anticon anticon-{{_icon}} result__icon-{{_type}}"></i></div>
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
                imports: [CommonModule, NgZorroAntdModule],
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdWx0LmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AZGVsb24vYWJjL3Jlc3VsdC9yZXN1bHQuY29tcG9uZW50LnRzIiwibmc6Ly9AZGVsb24vYWJjL3Jlc3VsdC9yZXN1bHQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Jlc3VsdCcsXG4gIHRlbXBsYXRlOiBgXG4gIDxkaXYgY2xhc3M9XCJyZXN1bHRfX2ljb25cIj48aSBuei1pY29uIGNsYXNzPVwiYW50aWNvbiBhbnRpY29uLXt7X2ljb259fSByZXN1bHRfX2ljb24te3tfdHlwZX19XCI+PC9pPjwvZGl2PlxuICA8ZGl2IGNsYXNzPVwicmVzdWx0X190aXRsZVwiPjxuZy1jb250YWluZXIgKm5nSWY9XCJfdGl0bGU7IGVsc2UgX3RpdGxlVHBsXCI+e3tfdGl0bGV9fTwvbmctY29udGFpbmVyPjwvZGl2PlxuICA8ZGl2ICpuZ0lmPVwiX2Rlc2NyaXB0aW9uIHx8IF9kZXNjcmlwdGlvblRwbFwiIGNsYXNzPVwicmVzdWx0X19kZXNjXCI+PG5nLWNvbnRhaW5lciAqbmdJZj1cIl9kZXNjcmlwdGlvbjsgZWxzZSBfZGVzY3JpcHRpb25UcGxcIj57e19kZXNjcmlwdGlvbn19PC9uZy1jb250YWluZXI+PC9kaXY+XG4gIDxkaXYgKm5nSWY9XCJfZXh0cmEgfHwgX2V4dHJhVHBsXCIgY2xhc3M9XCJyZXN1bHRfX2V4dHJhXCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIl9leHRyYTsgZWxzZSBfZXh0cmFUcGxcIj57e19leHRyYX19PC9uZy1jb250YWluZXI+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwicmVzdWx0X19hY3Rpb25zXCI+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvZGl2PlxuICBgLFxuICBob3N0OiB7ICdbY2xhc3MucmVzdWx0XSc6ICd0cnVlJyB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgUmVzdWx0Q29tcG9uZW50IHtcbiAgX3R5cGUgPSAnJztcbiAgX2ljb24gPSAnJztcbiAgQElucHV0KClcbiAgc2V0IHR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3R5cGUgPSB2YWx1ZTtcbiAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICBjYXNlICdzdWNjZXNzJzpcbiAgICAgICAgdGhpcy5faWNvbiA9ICdjaGVjay1jaXJjbGUnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgICAgdGhpcy5faWNvbiA9ICdjbG9zZS1jaXJjbGUnO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMuX2ljb24gPSB2YWx1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgX3RpdGxlID0gJyc7XG4gIF90aXRsZVRwbDogVGVtcGxhdGVSZWY8YW55PjtcbiAgQElucHV0KClcbiAgc2V0IHRpdGxlKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIHRoaXMuX3RpdGxlID0gbnVsbDtcbiAgICAgIHRoaXMuX3RpdGxlVHBsID0gdmFsdWU7XG4gICAgfSBlbHNlIHRoaXMuX3RpdGxlID0gdmFsdWU7XG4gIH1cblxuICBfZGVzY3JpcHRpb24gPSAnJztcbiAgX2Rlc2NyaXB0aW9uVHBsOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBASW5wdXQoKVxuICBzZXQgZGVzY3JpcHRpb24odmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4pIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgdGhpcy5fZGVzY3JpcHRpb24gPSBudWxsO1xuICAgICAgdGhpcy5fZGVzY3JpcHRpb25UcGwgPSB2YWx1ZTtcbiAgICB9IGVsc2UgdGhpcy5fZGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgfVxuXG4gIF9leHRyYSA9ICcnO1xuICBfZXh0cmFUcGw6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBJbnB1dCgpXG4gIHNldCBleHRyYSh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICB0aGlzLl9leHRyYSA9IG51bGw7XG4gICAgICB0aGlzLl9leHRyYVRwbCA9IHZhbHVlO1xuICAgIH0gZWxzZSB0aGlzLl9leHRyYSA9IHZhbHVlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nWm9ycm9BbnRkTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XG5cbmltcG9ydCB7IFJlc3VsdENvbXBvbmVudCB9IGZyb20gJy4vcmVzdWx0LmNvbXBvbmVudCc7XG5cbmNvbnN0IENPTVBPTkVOVFMgPSBbUmVzdWx0Q29tcG9uZW50XTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTmdab3Jyb0FudGRNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5DT01QT05FTlRTXSxcbiAgZXhwb3J0czogWy4uLkNPTVBPTkVOVFNdLFxufSlcbmV4cG9ydCBjbGFzcyBSZXN1bHRNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4geyBuZ01vZHVsZTogUmVzdWx0TW9kdWxlLCBwcm92aWRlcnM6IFtdIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztxQkFpQlUsRUFBRTtxQkFDRixFQUFFO3NCQWlCRCxFQUFFOzRCQVVJLEVBQUU7c0JBVVIsRUFBRTs7Ozs7O0lBcENYLElBQ0ksSUFBSSxDQUFDLEtBQWE7UUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsUUFBUSxLQUFLO1lBQ1gsS0FBSyxTQUFTO2dCQUNaLElBQUksQ0FBQyxLQUFLLEdBQUcsY0FBYyxDQUFDO2dCQUM1QixNQUFNO1lBQ1IsS0FBSyxPQUFPO2dCQUNWLElBQUksQ0FBQyxLQUFLLEdBQUcsY0FBYyxDQUFDO2dCQUM1QixNQUFNO1lBQ1I7Z0JBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7Z0JBQ25CLE1BQU07U0FDVDtLQUNGOzs7OztJQUlELElBQ0ksS0FBSyxDQUFDLEtBQWdDO1FBQ3hDLElBQUksS0FBSyxZQUFZLFdBQVcsRUFBRTtZQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztTQUN4Qjs7WUFBTSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztLQUM1Qjs7Ozs7SUFJRCxJQUNJLFdBQVcsQ0FBQyxLQUFnQztRQUM5QyxJQUFJLEtBQUssWUFBWSxXQUFXLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDekIsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7U0FDOUI7O1lBQU0sSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7S0FDbEM7Ozs7O0lBSUQsSUFDSSxLQUFLLENBQUMsS0FBZ0M7UUFDeEMsSUFBSSxLQUFLLFlBQVksV0FBVyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1NBQ3hCOztZQUFNLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0tBQzVCOzs7WUE3REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxRQUFRO2dCQUNsQixRQUFRLEVBQUU7Ozs7Ozs7O0dBUVQ7Z0JBQ0QsSUFBSSxFQUFFLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFO2dCQUNsQyxtQkFBbUIsRUFBRSxLQUFLO2FBQzNCOzs7bUJBSUUsS0FBSztvQkFrQkwsS0FBSzswQkFVTCxLQUFLO29CQVVMLEtBQUs7Ozs7Ozs7QUN6RFI7QUFNQSxNQUFNLFVBQVUsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBT3JDOzs7O0lBQ0UsT0FBTyxPQUFPO1FBQ1osT0FBTyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxDQUFDO0tBQ2xEOzs7WUFSRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGlCQUFpQixDQUFDO2dCQUMxQyxZQUFZLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQztnQkFDN0IsT0FBTyxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUM7YUFDekI7Ozs7Ozs7Ozs7Ozs7OzsifQ==