/**
 * @fileoverview added by tsickle
 * Generated from: reuse-tab-context.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2UtdGFiLWNvbnRleHQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9yZXVzZS10YWIvIiwic291cmNlcyI6WyJyZXVzZS10YWItY29udGV4dC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQVVyRSxNQUFNLE9BQU8sd0JBQXdCOzs7O0lBSW5DLFlBQW9CLEdBQTJCO1FBQTNCLFFBQUcsR0FBSCxHQUFHLENBQXdCO0lBQUcsQ0FBQzs7Ozs7SUFFbkQsY0FBYyxDQUFDLEtBQWlCO1FBQzlCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNqQixLQUFLO1lBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGlCQUFpQjtTQUMxQyxDQUFDLENBQUM7UUFDSCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzFCLENBQUM7OztZQXJCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsSUFBSSxFQUFFO29CQUNKLGVBQWUsRUFBRSx3QkFBd0I7aUJBQzFDO2FBQ0Y7Ozs7WUFUUSxzQkFBc0I7OzttQkFXNUIsS0FBSyxTQUFDLHdCQUF3QjtnQ0FDOUIsS0FBSzs7OztJQUROLHdDQUFpRDs7SUFDakQscURBQXFEOzs7OztJQUV6Qyx1Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFJldXNlVGFiQ29udGV4dFNlcnZpY2UgfSBmcm9tICcuL3JldXNlLXRhYi1jb250ZXh0LnNlcnZpY2UnO1xuaW1wb3J0IHsgUmV1c2VDdXN0b21Db250ZXh0TWVudSwgUmV1c2VJdGVtIH0gZnJvbSAnLi9yZXVzZS10YWIuaW50ZXJmYWNlcyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tyZXVzZS10YWItY29udGV4dC1tZW51XScsXG4gIGV4cG9ydEFzOiAncmV1c2VUYWJDb250ZXh0TWVudScsXG4gIGhvc3Q6IHtcbiAgICAnKGNvbnRleHRtZW51KSc6ICdfb25Db250ZXh0TWVudSgkZXZlbnQpJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgUmV1c2VUYWJDb250ZXh0RGlyZWN0aXZlIHtcbiAgQElucHV0KCdyZXVzZS10YWItY29udGV4dC1tZW51JykgaXRlbTogUmV1c2VJdGVtO1xuICBASW5wdXQoKSBjdXN0b21Db250ZXh0TWVudTogUmV1c2VDdXN0b21Db250ZXh0TWVudVtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3J2OiBSZXVzZVRhYkNvbnRleHRTZXJ2aWNlKSB7fVxuXG4gIF9vbkNvbnRleHRNZW51KGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5zcnYuc2hvdy5uZXh0KHtcbiAgICAgIGV2ZW50LFxuICAgICAgaXRlbTogdGhpcy5pdGVtLFxuICAgICAgY3VzdG9tQ29udGV4dE1lbnU6IHRoaXMuY3VzdG9tQ29udGV4dE1lbnUsXG4gICAgfSk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxufVxuIl19