/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DelonUtilModule } from '@delon/util';
import { XlsxService } from './xlsx.service';
import { XlsxDirective } from './xlsx.directive';
import { XlsxConfig } from './xlsx.config';
/** @type {?} */
var COMPONENTS = [XlsxDirective];
var XlsxModule = /** @class */ (function () {
    function XlsxModule() {
    }
    /**
     * @return {?}
     */
    XlsxModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: XlsxModule,
            providers: [XlsxService, XlsxConfig],
        };
    };
    XlsxModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, DelonUtilModule],
                    declarations: tslib_1.__spread(COMPONENTS),
                    exports: tslib_1.__spread(COMPONENTS),
                },] }
    ];
    return XlsxModule;
}());
export { XlsxModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGxzeC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL3hsc3gvIiwic291cmNlcyI6WyJ4bHN4Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRTlDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFM0MsSUFBTSxVQUFVLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQzs7Ozs7OztJQVExQixrQkFBTzs7O0lBQWQ7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLFVBQVU7WUFDcEIsU0FBUyxFQUFFLENBQUMsV0FBVyxFQUFFLFVBQVUsQ0FBQztTQUNyQyxDQUFDO0tBQ0g7O2dCQVhGLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZUFBZSxDQUFDO29CQUN4QyxZQUFZLG1CQUFNLFVBQVUsQ0FBQztvQkFDN0IsT0FBTyxtQkFBTSxVQUFVLENBQUM7aUJBQ3pCOztxQkFkRDs7U0FlYSxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEZWxvblV0aWxNb2R1bGUgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbmltcG9ydCB7IFhsc3hTZXJ2aWNlIH0gZnJvbSAnLi94bHN4LnNlcnZpY2UnO1xuaW1wb3J0IHsgWGxzeERpcmVjdGl2ZSB9IGZyb20gJy4veGxzeC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgWGxzeENvbmZpZyB9IGZyb20gJy4veGxzeC5jb25maWcnO1xuXG5jb25zdCBDT01QT05FTlRTID0gW1hsc3hEaXJlY3RpdmVdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBEZWxvblV0aWxNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5DT01QT05FTlRTXSxcbiAgZXhwb3J0czogWy4uLkNPTVBPTkVOVFNdLFxufSlcbmV4cG9ydCBjbGFzcyBYbHN4TW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBYbHN4TW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbWGxzeFNlcnZpY2UsIFhsc3hDb25maWddLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==