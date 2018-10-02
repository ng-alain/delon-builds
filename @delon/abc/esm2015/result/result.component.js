/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, TemplateRef } from '@angular/core';
export class ResultComponent {
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
if (false) {
    /** @type {?} */
    ResultComponent.prototype._type;
    /** @type {?} */
    ResultComponent.prototype._icon;
    /** @type {?} */
    ResultComponent.prototype._title;
    /** @type {?} */
    ResultComponent.prototype._titleTpl;
    /** @type {?} */
    ResultComponent.prototype._description;
    /** @type {?} */
    ResultComponent.prototype._descriptionTpl;
    /** @type {?} */
    ResultComponent.prototype._extra;
    /** @type {?} */
    ResultComponent.prototype._extraTpl;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdWx0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvcmVzdWx0LyIsInNvdXJjZXMiOlsicmVzdWx0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBZ0I5RCxNQUFNOztxQkFDSSxFQUFFO3FCQUNGLEVBQUU7c0JBaUJELEVBQUU7NEJBVUksRUFBRTtzQkFVUixFQUFFOzs7Ozs7SUFwQ1gsSUFDSSxJQUFJLENBQUMsS0FBYTtRQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixRQUFRLEtBQUssRUFBRTtZQUNiLEtBQUssU0FBUztnQkFDWixJQUFJLENBQUMsS0FBSyxHQUFHLGNBQWMsQ0FBQztnQkFDNUIsTUFBTTtZQUNSLEtBQUssT0FBTztnQkFDVixJQUFJLENBQUMsS0FBSyxHQUFHLGNBQWMsQ0FBQztnQkFDNUIsTUFBTTtZQUNSO2dCQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2dCQUNuQixNQUFNO1NBQ1Q7S0FDRjs7Ozs7SUFJRCxJQUNJLEtBQUssQ0FBQyxLQUFnQztRQUN4QyxJQUFJLEtBQUssWUFBWSxXQUFXLEVBQUU7WUFDaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7U0FDeEI7O1lBQU0sSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7S0FDNUI7Ozs7O0lBSUQsSUFDSSxXQUFXLENBQUMsS0FBZ0M7UUFDOUMsSUFBSSxLQUFLLFlBQVksV0FBVyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1NBQzlCOztZQUFNLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0tBQ2xDOzs7OztJQUlELElBQ0ksS0FBSyxDQUFDLEtBQWdDO1FBQ3hDLElBQUksS0FBSyxZQUFZLFdBQVcsRUFBRTtZQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztTQUN4Qjs7WUFBTSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztLQUM1Qjs7O1lBN0RGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsUUFBUTtnQkFDbEIsUUFBUSxFQUFFOzs7Ozs7OztHQVFUO2dCQUNELElBQUksRUFBRSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRTtnQkFDbEMsbUJBQW1CLEVBQUUsS0FBSzthQUMzQjs7O21CQUlFLEtBQUs7b0JBa0JMLEtBQUs7MEJBVUwsS0FBSztvQkFVTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncmVzdWx0JyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxkaXYgY2xhc3M9XCJyZXN1bHRfX2ljb25cIj48aSBjbGFzcz1cImFudGljb24gYW50aWNvbi17e19pY29ufX0gcmVzdWx0X19pY29uLXt7X3R5cGV9fVwiPjwvaT48L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwicmVzdWx0X190aXRsZVwiPjxuZy1jb250YWluZXIgKm5nSWY9XCJfdGl0bGU7IGVsc2UgX3RpdGxlVHBsXCI+e3tfdGl0bGV9fTwvbmctY29udGFpbmVyPjwvZGl2PlxyXG4gIDxkaXYgKm5nSWY9XCJfZGVzY3JpcHRpb24gfHwgX2Rlc2NyaXB0aW9uVHBsXCIgY2xhc3M9XCJyZXN1bHRfX2Rlc2NcIj48bmctY29udGFpbmVyICpuZ0lmPVwiX2Rlc2NyaXB0aW9uOyBlbHNlIF9kZXNjcmlwdGlvblRwbFwiPnt7X2Rlc2NyaXB0aW9ufX08L25nLWNvbnRhaW5lcj48L2Rpdj5cclxuICA8ZGl2ICpuZ0lmPVwiX2V4dHJhIHx8IF9leHRyYVRwbFwiIGNsYXNzPVwicmVzdWx0X19leHRyYVwiPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIl9leHRyYTsgZWxzZSBfZXh0cmFUcGxcIj57e19leHRyYX19PC9uZy1jb250YWluZXI+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cInJlc3VsdF9fYWN0aW9uc1wiPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2Rpdj5cclxuICBgLFxyXG4gIGhvc3Q6IHsgJ1tjbGFzcy5yZXN1bHRdJzogJ3RydWUnIH0sXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZXN1bHRDb21wb25lbnQge1xyXG4gIF90eXBlID0gJyc7XHJcbiAgX2ljb24gPSAnJztcclxuICBASW5wdXQoKVxyXG4gIHNldCB0eXBlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX3R5cGUgPSB2YWx1ZTtcclxuICAgIHN3aXRjaCAodmFsdWUpIHtcclxuICAgICAgY2FzZSAnc3VjY2Vzcyc6XHJcbiAgICAgICAgdGhpcy5faWNvbiA9ICdjaGVjay1jaXJjbGUnO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdlcnJvcic6XHJcbiAgICAgICAgdGhpcy5faWNvbiA9ICdjbG9zZS1jaXJjbGUnO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHRoaXMuX2ljb24gPSB2YWx1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF90aXRsZSA9ICcnO1xyXG4gIF90aXRsZVRwbDogVGVtcGxhdGVSZWY8YW55PjtcclxuICBASW5wdXQoKVxyXG4gIHNldCB0aXRsZSh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pikge1xyXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcclxuICAgICAgdGhpcy5fdGl0bGUgPSBudWxsO1xyXG4gICAgICB0aGlzLl90aXRsZVRwbCA9IHZhbHVlO1xyXG4gICAgfSBlbHNlIHRoaXMuX3RpdGxlID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBfZGVzY3JpcHRpb24gPSAnJztcclxuICBfZGVzY3JpcHRpb25UcGw6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgQElucHV0KClcclxuICBzZXQgZGVzY3JpcHRpb24odmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4pIHtcclxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XHJcbiAgICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gbnVsbDtcclxuICAgICAgdGhpcy5fZGVzY3JpcHRpb25UcGwgPSB2YWx1ZTtcclxuICAgIH0gZWxzZSB0aGlzLl9kZXNjcmlwdGlvbiA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgX2V4dHJhID0gJyc7XHJcbiAgX2V4dHJhVHBsOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGV4dHJhKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KSB7XHJcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xyXG4gICAgICB0aGlzLl9leHRyYSA9IG51bGw7XHJcbiAgICAgIHRoaXMuX2V4dHJhVHBsID0gdmFsdWU7XHJcbiAgICB9IGVsc2UgdGhpcy5fZXh0cmEgPSB2YWx1ZTtcclxuICB9XHJcbn1cclxuIl19