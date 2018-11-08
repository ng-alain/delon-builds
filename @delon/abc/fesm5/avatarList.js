import { Component, Input, ContentChildren, NgModule } from '@angular/core';
import { __spread } from 'tslib';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var AvatarListItemComponent = /** @class */ (function () {
    function AvatarListItemComponent() {
    }
    AvatarListItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'avatar-list-item, [avatar-list-item]',
                    template: "<ng-content></ng-content>"
                }] }
    ];
    AvatarListItemComponent.propDecorators = {
        src: [{ type: Input }],
        text: [{ type: Input }],
        icon: [{ type: Input }],
        tips: [{ type: Input }]
    };
    return AvatarListItemComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var AvatarListComponent = /** @class */ (function () {
    function AvatarListComponent() {
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
        },
        enumerable: true,
        configurable: true
    });
    AvatarListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'avatar-list',
                    template: "<ul class=\"avatar-list__wrap\">\n  <li *ngFor=\"let i of _items\" class=\"avatar-list__item{{_size ? ' avatar-list__item-' + _size : ''}}\">\n    <nz-tooltip *ngIf=\"i.tips\" [nzTitle]=\"i.tips\">\n      <nz-avatar nz-tooltip [nzSrc]=\"i.src\" [nzText]=\"i.text\" [nzIcon]=\"i.icon\" [nzSize]=\"_avatarSize\"></nz-avatar>\n    </nz-tooltip>\n    <nz-avatar *ngIf=\"!i.tips\" [nzSrc]=\"i.src\" [nzText]=\"i.text\" [nzIcon]=\"i.icon\" [nzSize]=\"_avatarSize\"></nz-avatar>\n  </li>\n</ul>\n",
                    host: { '[class.avatar-list]': 'true' },
                    preserveWhitespaces: false
                }] }
    ];
    AvatarListComponent.propDecorators = {
        size: [{ type: Input }],
        _items: [{ type: ContentChildren, args: [AvatarListItemComponent,] }]
    };
    return AvatarListComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var COMPONENTS = [AvatarListComponent, AvatarListItemComponent];
var AvatarListModule = /** @class */ (function () {
    function AvatarListModule() {
    }
    /**
     * @return {?}
     */
    AvatarListModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: AvatarListModule, providers: [] };
    };
    AvatarListModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, NgZorroAntdModule],
                    declarations: __spread(COMPONENTS),
                    exports: __spread(COMPONENTS),
                },] }
    ];
    return AvatarListModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { AvatarListItemComponent, AvatarListComponent, AvatarListModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyTGlzdC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGRlbG9uL2FiYy9hdmF0YXItbGlzdC9hdmF0YXItbGlzdC1pdGVtLmNvbXBvbmVudC50cyIsIm5nOi8vQGRlbG9uL2FiYy9hdmF0YXItbGlzdC9hdmF0YXItbGlzdC5jb21wb25lbnQudHMiLCJuZzovL0BkZWxvbi9hYmMvYXZhdGFyLWxpc3QvYXZhdGFyLWxpc3QubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXZhdGFyLWxpc3QtaXRlbSwgW2F2YXRhci1saXN0LWl0ZW1dJyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcbn0pXG5leHBvcnQgY2xhc3MgQXZhdGFyTGlzdEl0ZW1Db21wb25lbnQge1xuICBASW5wdXQoKSBzcmM6IHN0cmluZztcbiAgQElucHV0KCkgdGV4dDogc3RyaW5nO1xuICBASW5wdXQoKSBpY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRpcHM6IHN0cmluZztcbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFF1ZXJ5TGlzdCwgQ29udGVudENoaWxkcmVuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBdmF0YXJMaXN0SXRlbUNvbXBvbmVudCB9IGZyb20gJy4vYXZhdGFyLWxpc3QtaXRlbS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhdmF0YXItbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9hdmF0YXItbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHsgJ1tjbGFzcy5hdmF0YXItbGlzdF0nOiAndHJ1ZScgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIEF2YXRhckxpc3RDb21wb25lbnQge1xuICBfc2l6ZSA9ICcnO1xuXG4gIF9hdmF0YXJTaXplID0gJyc7XG5cbiAgQElucHV0KClcbiAgc2V0IHNpemUodmFsdWU6ICdsYXJnZScgfCAnc21hbGwnIHwgJ21pbmknIHwgJ2RlZmF1bHQnKSB7XG4gICAgdGhpcy5fc2l6ZSA9IHZhbHVlID09PSAnZGVmYXVsdCcgPyAnJyA6IHZhbHVlO1xuICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgIGNhc2UgJ2xhcmdlJzpcbiAgICAgIGNhc2UgJ3NtYWxsJzpcbiAgICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgICAgICB0aGlzLl9hdmF0YXJTaXplID0gdmFsdWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy5fYXZhdGFyU2l6ZSA9ICdzbWFsbCc7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIEBDb250ZW50Q2hpbGRyZW4oQXZhdGFyTGlzdEl0ZW1Db21wb25lbnQpXG4gIF9pdGVtczogUXVlcnlMaXN0PEF2YXRhckxpc3RJdGVtQ29tcG9uZW50Pjtcbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdab3Jyb0FudGRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkJztcblxuaW1wb3J0IHsgQXZhdGFyTGlzdENvbXBvbmVudCB9IGZyb20gJy4vYXZhdGFyLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IEF2YXRhckxpc3RJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9hdmF0YXItbGlzdC1pdGVtLmNvbXBvbmVudCc7XG5cbmNvbnN0IENPTVBPTkVOVFMgPSBbQXZhdGFyTGlzdENvbXBvbmVudCwgQXZhdGFyTGlzdEl0ZW1Db21wb25lbnRdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBOZ1pvcnJvQW50ZE1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogWy4uLkNPTVBPTkVOVFNdLFxuICBleHBvcnRzOiBbLi4uQ09NUE9ORU5UU10sXG59KVxuZXhwb3J0IGNsYXNzIEF2YXRhckxpc3RNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4geyBuZ01vZHVsZTogQXZhdGFyTGlzdE1vZHVsZSwgcHJvdmlkZXJzOiBbXSB9O1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7SUFFQTtLQVNDOztnQkFUQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHNDQUFzQztvQkFDaEQsUUFBUSxFQUFFLDJCQUEyQjtpQkFDdEM7OztzQkFFRSxLQUFLO3VCQUNMLEtBQUs7dUJBQ0wsS0FBSzt1QkFDTCxLQUFLOztJQUNSLDhCQUFDO0NBVEQ7Ozs7OztBQ0ZBO0lBR0E7UUFPRSxVQUFLLEdBQUcsRUFBRSxDQUFDO1FBRVgsZ0JBQVcsR0FBRyxFQUFFLENBQUM7S0FtQmxCO0lBakJDLHNCQUNJLHFDQUFJOzs7OztRQURSLFVBQ1MsS0FBNkM7WUFDcEQsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLEtBQUssU0FBUyxHQUFHLEVBQUUsR0FBRyxLQUFLLENBQUM7WUFDOUMsUUFBUSxLQUFLO2dCQUNYLEtBQUssT0FBTyxDQUFDO2dCQUNiLEtBQUssT0FBTyxDQUFDO2dCQUNiLEtBQUssU0FBUztvQkFDWixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztvQkFDekIsTUFBTTtnQkFDUjtvQkFDRSxJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQztvQkFDM0IsTUFBTTthQUNUO1NBQ0Y7OztPQUFBOztnQkF4QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2QixxZkFBMkM7b0JBQzNDLElBQUksRUFBRSxFQUFFLHFCQUFxQixFQUFFLE1BQU0sRUFBRTtvQkFDdkMsbUJBQW1CLEVBQUUsS0FBSztpQkFDM0I7Ozt1QkFNRSxLQUFLO3lCQWVMLGVBQWUsU0FBQyx1QkFBdUI7O0lBRTFDLDBCQUFDO0NBNUJEOzs7Ozs7O0lDSU0sVUFBVSxHQUFHLENBQUMsbUJBQW1CLEVBQUUsdUJBQXVCLENBQUM7QUFFakU7SUFBQTtLQVNDOzs7O0lBSFEsd0JBQU87OztJQUFkO1FBQ0UsT0FBTyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUM7S0FDdEQ7O2dCQVJGLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsaUJBQWlCLENBQUM7b0JBQzFDLFlBQVksV0FBTSxVQUFVLENBQUM7b0JBQzdCLE9BQU8sV0FBTSxVQUFVLENBQUM7aUJBQ3pCOztJQUtELHVCQUFDO0NBVEQ7Ozs7Ozs7Ozs7Ozs7OyJ9