/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef, ViewEncapsulation, } from '@angular/core';
var AvatarListComponent = /** @class */ (function () {
    function AvatarListComponent(cdr) {
        this.cdr = cdr;
        this._size = '';
        this._avatarSize = '';
    }
    Object.defineProperty(AvatarListComponent.prototype, "size", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._size = value === 'default' ? '' : value;
            switch (value) {
                case 'large':
                case 'small':
                case 'default':
                    this._avatarSize = value;
                    break;
                default:
                    this._avatarSize = 'small';
                    break;
            }
            this.cdr.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    AvatarListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'avatar-list',
                    template: "<div class=\"avatar-list__wrap{{_size ? ' avatar-list__' + _size : ''}}\">\n  <ng-content></ng-content>\n</div>\n",
                    host: { '[class.avatar-list]': 'true' },
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    AvatarListComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    AvatarListComponent.propDecorators = {
        size: [{ type: Input }]
    };
    return AvatarListComponent;
}());
export { AvatarListComponent };
if (false) {
    /** @type {?} */
    AvatarListComponent.prototype._size;
    /** @type {?} */
    AvatarListComponent.prototype._avatarSize;
    /** @type {?} */
    AvatarListComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9hdmF0YXItbGlzdC8iLCJzb3VyY2VzIjpbImF2YXRhci1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkI7SUE0QkUsNkJBQW9CLEdBQXNCO1FBQXRCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBcEIxQyxVQUFLLEdBQUcsRUFBRSxDQUFDO1FBRVgsZ0JBQVcsR0FBRyxFQUFFLENBQUM7SUFrQjRCLENBQUM7SUFoQjlDLHNCQUNJLHFDQUFJOzs7OztRQURSLFVBQ1MsS0FBNkM7WUFDcEQsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUM5QyxRQUFRLEtBQUssRUFBRTtnQkFDYixLQUFLLE9BQU8sQ0FBQztnQkFDYixLQUFLLE9BQU8sQ0FBQztnQkFDYixLQUFLLFNBQVM7b0JBQ1osSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7b0JBQ3pCLE1BQU07Z0JBQ1I7b0JBQ0UsSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUM7b0JBQzNCLE1BQU07YUFDVDtZQUNELElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7O2dCQTFCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLDZIQUEyQztvQkFDM0MsSUFBSSxFQUFFLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxFQUFFO29CQUN2QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7O2dCQVZDLGlCQUFpQjs7O3VCQWdCaEIsS0FBSzs7SUFpQlIsMEJBQUM7Q0FBQSxBQTdCRCxJQTZCQztTQXRCWSxtQkFBbUI7OztJQUM5QixvQ0FBVzs7SUFFWCwwQ0FBaUI7O0lBa0JMLGtDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhdmF0YXItbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9hdmF0YXItbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHsgJ1tjbGFzcy5hdmF0YXItbGlzdF0nOiAndHJ1ZScgfSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEF2YXRhckxpc3RDb21wb25lbnQge1xuICBfc2l6ZSA9ICcnO1xuXG4gIF9hdmF0YXJTaXplID0gJyc7XG5cbiAgQElucHV0KClcbiAgc2V0IHNpemUodmFsdWU6ICdsYXJnZScgfCAnc21hbGwnIHwgJ21pbmknIHwgJ2RlZmF1bHQnKSB7XG4gICAgdGhpcy5fc2l6ZSA9IHZhbHVlID09PSAnZGVmYXVsdCcgPyAnJyA6IHZhbHVlO1xuICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgIGNhc2UgJ2xhcmdlJzpcbiAgICAgIGNhc2UgJ3NtYWxsJzpcbiAgICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgICAgICB0aGlzLl9hdmF0YXJTaXplID0gdmFsdWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy5fYXZhdGFyU2l6ZSA9ICdzbWFsbCc7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cbn1cbiJdfQ==