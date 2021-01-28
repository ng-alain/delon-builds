/**
 * @fileoverview added by tsickle
 * Generated from: reuse-tab-context.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input } from '@angular/core';
import { ReuseTabContextService } from './reuse-tab-context.service';
export class ReuseTabContextDirective {
    /**
     * @param {?} srv
     */
    constructor(srv) {
        this.srv = srv;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _onContextMenu(event) {
        this.srv.show.next({
            event,
            item: this.item,
            customContextMenu: this.customContextMenu,
        });
        event.preventDefault();
        event.stopPropagation();
    }
}
ReuseTabContextDirective.decorators = [
    { type: Directive, args: [{
                selector: '[reuse-tab-context-menu]',
                exportAs: 'reuseTabContextMenu',
                host: {
                    '(contextmenu)': '_onContextMenu($event)',
                },
            },] }
];
/** @nocollapse */
ReuseTabContextDirective.ctorParameters = () => [
    { type: ReuseTabContextService }
];
ReuseTabContextDirective.propDecorators = {
    item: [{ type: Input, args: ['reuse-tab-context-menu',] }],
    customContextMenu: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ReuseTabContextDirective.prototype.item;
    /** @type {?} */
    ReuseTabContextDirective.prototype.customContextMenu;
    /**
     * @type {?}
     * @private
     */
    ReuseTabContextDirective.prototype.srv;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2UtdGFiLWNvbnRleHQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3JldXNlLXRhYi9yZXVzZS10YWItY29udGV4dC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQVVyRSxNQUFNLE9BQU8sd0JBQXdCOzs7O0lBSW5DLFlBQW9CLEdBQTJCO1FBQTNCLFFBQUcsR0FBSCxHQUFHLENBQXdCO0lBQUcsQ0FBQzs7Ozs7SUFFbkQsY0FBYyxDQUFDLEtBQWlCO1FBQzlCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNqQixLQUFLO1lBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGlCQUFpQjtTQUMxQyxDQUFDLENBQUM7UUFDSCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzFCLENBQUM7OztZQXJCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsSUFBSSxFQUFFO29CQUNKLGVBQWUsRUFBRSx3QkFBd0I7aUJBQzFDO2FBQ0Y7Ozs7WUFUUSxzQkFBc0I7OzttQkFXNUIsS0FBSyxTQUFDLHdCQUF3QjtnQ0FDOUIsS0FBSzs7OztJQUROLHdDQUFpRDs7SUFDakQscURBQXFEOzs7OztJQUV6Qyx1Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXVzZVRhYkNvbnRleHRTZXJ2aWNlIH0gZnJvbSAnLi9yZXVzZS10YWItY29udGV4dC5zZXJ2aWNlJztcbmltcG9ydCB7IFJldXNlQ3VzdG9tQ29udGV4dE1lbnUsIFJldXNlSXRlbSB9IGZyb20gJy4vcmV1c2UtdGFiLmludGVyZmFjZXMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbcmV1c2UtdGFiLWNvbnRleHQtbWVudV0nLFxuICBleHBvcnRBczogJ3JldXNlVGFiQ29udGV4dE1lbnUnLFxuICBob3N0OiB7XG4gICAgJyhjb250ZXh0bWVudSknOiAnX29uQ29udGV4dE1lbnUoJGV2ZW50KScsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIFJldXNlVGFiQ29udGV4dERpcmVjdGl2ZSB7XG4gIEBJbnB1dCgncmV1c2UtdGFiLWNvbnRleHQtbWVudScpIGl0ZW06IFJldXNlSXRlbTtcbiAgQElucHV0KCkgY3VzdG9tQ29udGV4dE1lbnU6IFJldXNlQ3VzdG9tQ29udGV4dE1lbnVbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNydjogUmV1c2VUYWJDb250ZXh0U2VydmljZSkge31cblxuICBfb25Db250ZXh0TWVudShldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuc3J2LnNob3cubmV4dCh7XG4gICAgICBldmVudCxcbiAgICAgIGl0ZW06IHRoaXMuaXRlbSxcbiAgICAgIGN1c3RvbUNvbnRleHRNZW51OiB0aGlzLmN1c3RvbUNvbnRleHRNZW51LFxuICAgIH0pO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbn1cbiJdfQ==