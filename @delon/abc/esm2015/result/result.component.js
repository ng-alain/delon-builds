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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdWx0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvcmVzdWx0LyIsInNvdXJjZXMiOlsicmVzdWx0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBZ0I5RCxNQUFNOztxQkFDSSxFQUFFO3FCQUNGLEVBQUU7c0JBaUJELEVBQUU7NEJBVUksRUFBRTtzQkFVUixFQUFFOzs7Ozs7SUFwQ1gsSUFDSSxJQUFJLENBQUMsS0FBYTtRQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixRQUFRLEtBQUssRUFBRTtZQUNiLEtBQUssU0FBUztnQkFDWixJQUFJLENBQUMsS0FBSyxHQUFHLGNBQWMsQ0FBQztnQkFDNUIsTUFBTTtZQUNSLEtBQUssT0FBTztnQkFDVixJQUFJLENBQUMsS0FBSyxHQUFHLGNBQWMsQ0FBQztnQkFDNUIsTUFBTTtZQUNSO2dCQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2dCQUNuQixNQUFNO1NBQ1Q7S0FDRjs7Ozs7SUFJRCxJQUNJLEtBQUssQ0FBQyxLQUFnQztRQUN4QyxJQUFJLEtBQUssWUFBWSxXQUFXLEVBQUU7WUFDaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7U0FDeEI7O1lBQU0sSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7S0FDNUI7Ozs7O0lBSUQsSUFDSSxXQUFXLENBQUMsS0FBZ0M7UUFDOUMsSUFBSSxLQUFLLFlBQVksV0FBVyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1NBQzlCOztZQUFNLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0tBQ2xDOzs7OztJQUlELElBQ0ksS0FBSyxDQUFDLEtBQWdDO1FBQ3hDLElBQUksS0FBSyxZQUFZLFdBQVcsRUFBRTtZQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztTQUN4Qjs7WUFBTSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztLQUM1Qjs7O1lBN0RGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsUUFBUTtnQkFDbEIsUUFBUSxFQUFFOzs7Ozs7OztHQVFUO2dCQUNELElBQUksRUFBRSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRTtnQkFDbEMsbUJBQW1CLEVBQUUsS0FBSzthQUMzQjs7O21CQUlFLEtBQUs7b0JBa0JMLEtBQUs7MEJBVUwsS0FBSztvQkFVTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncmVzdWx0JyxcbiAgdGVtcGxhdGU6IGBcbiAgPGRpdiBjbGFzcz1cInJlc3VsdF9faWNvblwiPjxpIG56LWljb24gY2xhc3M9XCJhbnRpY29uIGFudGljb24te3tfaWNvbn19IHJlc3VsdF9faWNvbi17e190eXBlfX1cIj48L2k+PC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJyZXN1bHRfX3RpdGxlXCI+PG5nLWNvbnRhaW5lciAqbmdJZj1cIl90aXRsZTsgZWxzZSBfdGl0bGVUcGxcIj57e190aXRsZX19PC9uZy1jb250YWluZXI+PC9kaXY+XG4gIDxkaXYgKm5nSWY9XCJfZGVzY3JpcHRpb24gfHwgX2Rlc2NyaXB0aW9uVHBsXCIgY2xhc3M9XCJyZXN1bHRfX2Rlc2NcIj48bmctY29udGFpbmVyICpuZ0lmPVwiX2Rlc2NyaXB0aW9uOyBlbHNlIF9kZXNjcmlwdGlvblRwbFwiPnt7X2Rlc2NyaXB0aW9ufX08L25nLWNvbnRhaW5lcj48L2Rpdj5cbiAgPGRpdiAqbmdJZj1cIl9leHRyYSB8fCBfZXh0cmFUcGxcIiBjbGFzcz1cInJlc3VsdF9fZXh0cmFcIj5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiX2V4dHJhOyBlbHNlIF9leHRyYVRwbFwiPnt7X2V4dHJhfX08L25nLWNvbnRhaW5lcj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJyZXN1bHRfX2FjdGlvbnNcIj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9kaXY+XG4gIGAsXG4gIGhvc3Q6IHsgJ1tjbGFzcy5yZXN1bHRdJzogJ3RydWUnIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBSZXN1bHRDb21wb25lbnQge1xuICBfdHlwZSA9ICcnO1xuICBfaWNvbiA9ICcnO1xuICBASW5wdXQoKVxuICBzZXQgdHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdHlwZSA9IHZhbHVlO1xuICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxuICAgICAgICB0aGlzLl9pY29uID0gJ2NoZWNrLWNpcmNsZSc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZXJyb3InOlxuICAgICAgICB0aGlzLl9pY29uID0gJ2Nsb3NlLWNpcmNsZSc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy5faWNvbiA9IHZhbHVlO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBfdGl0bGUgPSAnJztcbiAgX3RpdGxlVHBsOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBASW5wdXQoKVxuICBzZXQgdGl0bGUodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4pIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgdGhpcy5fdGl0bGUgPSBudWxsO1xuICAgICAgdGhpcy5fdGl0bGVUcGwgPSB2YWx1ZTtcbiAgICB9IGVsc2UgdGhpcy5fdGl0bGUgPSB2YWx1ZTtcbiAgfVxuXG4gIF9kZXNjcmlwdGlvbiA9ICcnO1xuICBfZGVzY3JpcHRpb25UcGw6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBJbnB1dCgpXG4gIHNldCBkZXNjcmlwdGlvbih2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IG51bGw7XG4gICAgICB0aGlzLl9kZXNjcmlwdGlvblRwbCA9IHZhbHVlO1xuICAgIH0gZWxzZSB0aGlzLl9kZXNjcmlwdGlvbiA9IHZhbHVlO1xuICB9XG5cbiAgX2V4dHJhID0gJyc7XG4gIF9leHRyYVRwbDogVGVtcGxhdGVSZWY8YW55PjtcbiAgQElucHV0KClcbiAgc2V0IGV4dHJhKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIHRoaXMuX2V4dHJhID0gbnVsbDtcbiAgICAgIHRoaXMuX2V4dHJhVHBsID0gdmFsdWU7XG4gICAgfSBlbHNlIHRoaXMuX2V4dHJhID0gdmFsdWU7XG4gIH1cbn1cbiJdfQ==