/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DelonLocaleModule } from '@delon/theme';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NoticeIconTabComponent } from './notice-icon-tab.component';
import { NoticeIconComponent } from './notice-icon.component';
/** @type {?} */
var COMPONENTS = [NoticeIconComponent];
var NoticeIconModule = /** @class */ (function () {
    function NoticeIconModule() {
    }
    /**
     * @return {?}
     */
    NoticeIconModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: NoticeIconModule, providers: [] };
    };
    NoticeIconModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, DelonLocaleModule, NgZorroAntdModule],
                    declarations: tslib_1.__spread(COMPONENTS, [NoticeIconTabComponent]),
                    exports: tslib_1.__spread(COMPONENTS),
                },] }
    ];
    return NoticeIconModule;
}());
export { NoticeIconModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWNlLWljb24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9ub3RpY2UtaWNvbi8iLCJzb3VyY2VzIjpbIm5vdGljZS1pY29uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDakQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWxELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDOztJQUV4RCxVQUFVLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztBQUV4QztJQUFBO0lBU0EsQ0FBQzs7OztJQUhRLHdCQUFPOzs7SUFBZDtRQUNFLE9BQU8sRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxDQUFDO0lBQ3ZELENBQUM7O2dCQVJGLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLENBQUM7b0JBQzdELFlBQVksbUJBQU0sVUFBVSxHQUFFLHNCQUFzQixFQUFDO29CQUNyRCxPQUFPLG1CQUFNLFVBQVUsQ0FBQztpQkFDekI7O0lBS0QsdUJBQUM7Q0FBQSxBQVRELElBU0M7U0FKWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERlbG9uTG9jYWxlTW9kdWxlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IE5nWm9ycm9BbnRkTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XG5cbmltcG9ydCB7IE5vdGljZUljb25UYWJDb21wb25lbnQgfSBmcm9tICcuL25vdGljZS1pY29uLXRhYi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTm90aWNlSWNvbkNvbXBvbmVudCB9IGZyb20gJy4vbm90aWNlLWljb24uY29tcG9uZW50JztcblxuY29uc3QgQ09NUE9ORU5UUyA9IFtOb3RpY2VJY29uQ29tcG9uZW50XTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRGVsb25Mb2NhbGVNb2R1bGUsIE5nWm9ycm9BbnRkTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbLi4uQ09NUE9ORU5UUywgTm90aWNlSWNvblRhYkNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFsuLi5DT01QT05FTlRTXSxcbn0pXG5leHBvcnQgY2xhc3MgTm90aWNlSWNvbk1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7IG5nTW9kdWxlOiBOb3RpY2VJY29uTW9kdWxlLCBwcm92aWRlcnM6IFtdIH07XG4gIH1cbn1cbiJdfQ==