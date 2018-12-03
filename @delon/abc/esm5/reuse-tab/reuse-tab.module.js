/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DelonLocaleModule } from '@delon/theme';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ReuseTabContextMenuComponent } from './reuse-tab-context-menu.component';
import { ReuseTabContextComponent } from './reuse-tab-context.component';
import { ReuseTabContextDirective } from './reuse-tab-context.directive';
import { ReuseTabComponent } from './reuse-tab.component';
/** @type {?} */
var COMPONENTS = [ReuseTabComponent];
/** @type {?} */
var NOEXPORTS = [
    ReuseTabContextMenuComponent,
    ReuseTabContextComponent,
    ReuseTabContextDirective,
];
var ReuseTabModule = /** @class */ (function () {
    function ReuseTabModule() {
    }
    /**
     * @return {?}
     */
    ReuseTabModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: ReuseTabModule,
        };
    };
    ReuseTabModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        RouterModule,
                        DelonLocaleModule,
                        NgZorroAntdModule,
                        OverlayModule,
                    ],
                    declarations: tslib_1.__spread(COMPONENTS, NOEXPORTS),
                    entryComponents: [ReuseTabContextMenuComponent],
                    exports: tslib_1.__spread(COMPONENTS),
                },] }
    ];
    return ReuseTabModule;
}());
export { ReuseTabModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2UtdGFiLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvcmV1c2UtdGFiLyIsInNvdXJjZXMiOlsicmV1c2UtdGFiLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNqRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbEQsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDbEYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDekUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDekUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0lBRXBELFVBQVUsR0FBRyxDQUFDLGlCQUFpQixDQUFDOztJQUNoQyxTQUFTLEdBQUc7SUFDaEIsNEJBQTRCO0lBQzVCLHdCQUF3QjtJQUN4Qix3QkFBd0I7Q0FDekI7QUFFRDtJQUFBO0lBa0JBLENBQUM7Ozs7SUFMUSxzQkFBTzs7O0lBQWQ7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLGNBQWM7U0FDekIsQ0FBQztJQUNKLENBQUM7O2dCQWpCRixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osWUFBWTt3QkFDWixpQkFBaUI7d0JBQ2pCLGlCQUFpQjt3QkFDakIsYUFBYTtxQkFDZDtvQkFDRCxZQUFZLG1CQUFNLFVBQVUsRUFBSyxTQUFTLENBQUM7b0JBQzNDLGVBQWUsRUFBRSxDQUFDLDRCQUE0QixDQUFDO29CQUMvQyxPQUFPLG1CQUFNLFVBQVUsQ0FBQztpQkFDekI7O0lBT0QscUJBQUM7Q0FBQSxBQWxCRCxJQWtCQztTQU5ZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPdmVybGF5TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRGVsb25Mb2NhbGVNb2R1bGUgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgTmdab3Jyb0FudGRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkJztcblxuaW1wb3J0IHsgUmV1c2VUYWJDb250ZXh0TWVudUNvbXBvbmVudCB9IGZyb20gJy4vcmV1c2UtdGFiLWNvbnRleHQtbWVudS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmV1c2VUYWJDb250ZXh0Q29tcG9uZW50IH0gZnJvbSAnLi9yZXVzZS10YWItY29udGV4dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmV1c2VUYWJDb250ZXh0RGlyZWN0aXZlIH0gZnJvbSAnLi9yZXVzZS10YWItY29udGV4dC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgUmV1c2VUYWJDb21wb25lbnQgfSBmcm9tICcuL3JldXNlLXRhYi5jb21wb25lbnQnO1xuXG5jb25zdCBDT01QT05FTlRTID0gW1JldXNlVGFiQ29tcG9uZW50XTtcbmNvbnN0IE5PRVhQT1JUUyA9IFtcbiAgUmV1c2VUYWJDb250ZXh0TWVudUNvbXBvbmVudCxcbiAgUmV1c2VUYWJDb250ZXh0Q29tcG9uZW50LFxuICBSZXVzZVRhYkNvbnRleHREaXJlY3RpdmUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBEZWxvbkxvY2FsZU1vZHVsZSxcbiAgICBOZ1pvcnJvQW50ZE1vZHVsZSxcbiAgICBPdmVybGF5TW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5DT01QT05FTlRTLCAuLi5OT0VYUE9SVFNdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtSZXVzZVRhYkNvbnRleHRNZW51Q29tcG9uZW50XSxcbiAgZXhwb3J0czogWy4uLkNPTVBPTkVOVFNdLFxufSlcbmV4cG9ydCBjbGFzcyBSZXVzZVRhYk1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogUmV1c2VUYWJNb2R1bGUsXG4gICAgfTtcbiAgfVxufVxuIl19