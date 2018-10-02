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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGxzeC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL3hsc3gvIiwic291cmNlcyI6WyJ4bHN4Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRTlDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFM0MsSUFBTSxVQUFVLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQzs7Ozs7OztJQVExQixrQkFBTzs7O0lBQWQ7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLFVBQVU7WUFDcEIsU0FBUyxFQUFFLENBQUMsV0FBVyxFQUFFLFVBQVUsQ0FBQztTQUNyQyxDQUFDO0tBQ0g7O2dCQVhGLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZUFBZSxDQUFDO29CQUN4QyxZQUFZLG1CQUFNLFVBQVUsQ0FBQztvQkFDN0IsT0FBTyxtQkFBTSxVQUFVLENBQUM7aUJBQ3pCOztxQkFkRDs7U0FlYSxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRGVsb25VdGlsTW9kdWxlIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xyXG5cclxuaW1wb3J0IHsgWGxzeFNlcnZpY2UgfSBmcm9tICcuL3hsc3guc2VydmljZSc7XHJcbmltcG9ydCB7IFhsc3hEaXJlY3RpdmUgfSBmcm9tICcuL3hsc3guZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgWGxzeENvbmZpZyB9IGZyb20gJy4veGxzeC5jb25maWcnO1xyXG5cclxuY29uc3QgQ09NUE9ORU5UUyA9IFtYbHN4RGlyZWN0aXZlXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRGVsb25VdGlsTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFsuLi5DT01QT05FTlRTXSxcclxuICBleHBvcnRzOiBbLi4uQ09NUE9ORU5UU10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBYbHN4TW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBYbHN4TW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtYbHN4U2VydmljZSwgWGxzeENvbmZpZ10sXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=