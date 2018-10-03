/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OverlayModule } from '@angular/cdk/overlay';
import { WINDOW } from './win_tokens';
import { DelonLocaleModule } from './locale/locale.module';
import { ALAIN_I18N_TOKEN, AlainI18NServiceFake } from './services/i18n/i18n';
import { ModalHelper } from './services/modal/modal.helper';
/** @type {?} */
var HELPERS = [ModalHelper];
/** @type {?} */
var COMPONENTS = [];
import { DatePipe } from './pipes/date/date.pipe';
import { CNCurrencyPipe } from './pipes/currency/cn-currency.pipe';
import { KeysPipe } from './pipes/keys/keys.pipe';
import { YNPipe } from './pipes/yn/yn.pipe';
/** @type {?} */
var PIPES = [DatePipe, CNCurrencyPipe, KeysPipe, YNPipe];
var AlainThemeModule = /** @class */ (function () {
    function AlainThemeModule() {
    }
    /**
     * @return {?}
     */
    AlainThemeModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: AlainThemeModule,
            providers: tslib_1.__spread([
                { provide: WINDOW, useValue: window },
                { provide: ALAIN_I18N_TOKEN, useClass: AlainI18NServiceFake }
            ], HELPERS),
        };
    };
    /**
     * @return {?}
     */
    AlainThemeModule.forChild = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: AlainThemeModule,
            providers: tslib_1.__spread(HELPERS),
        };
    };
    AlainThemeModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, RouterModule, OverlayModule],
                    declarations: tslib_1.__spread(COMPONENTS, PIPES),
                    exports: tslib_1.__spread(COMPONENTS, PIPES, [DelonLocaleModule]),
                },] }
    ];
    return AlainThemeModule;
}());
export { AlainThemeModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL3RoZW1lLyIsInNvdXJjZXMiOlsic3JjL3RoZW1lLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXJELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFdEMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFHM0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLG9CQUFvQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFOUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLCtCQUErQixDQUFDOztBQUM1RCxJQUFNLE9BQU8sR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDOztBQUc5QixJQUFNLFVBQVUsR0FBRyxFQUFFLENBQUM7QUFHdEIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ2xELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNuRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDbEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG9CQUFvQixDQUFDOztBQUM1QyxJQUFNLEtBQUssR0FBRyxDQUFDLFFBQVEsRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDOzs7Ozs7O0lBVWxELHdCQUFPOzs7SUFBZDtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFNBQVM7Z0JBQ1AsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUU7Z0JBQ3JDLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxvQkFBb0IsRUFBRTtlQUMxRCxPQUFPLENBQ1g7U0FDRixDQUFDO0tBQ0g7Ozs7SUFFTSx5QkFBUTs7O0lBQWY7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixTQUFTLG1CQUFNLE9BQU8sQ0FBQztTQUN4QixDQUFDO0tBQ0g7O2dCQXRCRixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxhQUFhLENBQUM7b0JBQ3BELFlBQVksbUJBQU0sVUFBVSxFQUFLLEtBQUssQ0FBQztvQkFDdkMsT0FBTyxtQkFBTSxVQUFVLEVBQUssS0FBSyxHQUFFLGlCQUFpQixFQUFDO2lCQUN0RDs7MkJBL0JEOztTQWdDYSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPdmVybGF5TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuXG5pbXBvcnQgeyBXSU5ET1cgfSBmcm9tICcuL3dpbl90b2tlbnMnO1xuXG5pbXBvcnQgeyBEZWxvbkxvY2FsZU1vZHVsZSB9IGZyb20gJy4vbG9jYWxlL2xvY2FsZS5tb2R1bGUnO1xuXG4vLyByZWdpb246IGltcG9ydFxuaW1wb3J0IHsgQUxBSU5fSTE4Tl9UT0tFTiwgQWxhaW5JMThOU2VydmljZUZha2UgfSBmcm9tICcuL3NlcnZpY2VzL2kxOG4vaTE4bic7XG5cbmltcG9ydCB7IE1vZGFsSGVscGVyIH0gZnJvbSAnLi9zZXJ2aWNlcy9tb2RhbC9tb2RhbC5oZWxwZXInO1xuY29uc3QgSEVMUEVSUyA9IFtNb2RhbEhlbHBlcl07XG5cbi8vIGNvbXBvbmVudHNcbmNvbnN0IENPTVBPTkVOVFMgPSBbXTtcblxuLy8gcGlwZXNcbmltcG9ydCB7IERhdGVQaXBlIH0gZnJvbSAnLi9waXBlcy9kYXRlL2RhdGUucGlwZSc7XG5pbXBvcnQgeyBDTkN1cnJlbmN5UGlwZSB9IGZyb20gJy4vcGlwZXMvY3VycmVuY3kvY24tY3VycmVuY3kucGlwZSc7XG5pbXBvcnQgeyBLZXlzUGlwZSB9IGZyb20gJy4vcGlwZXMva2V5cy9rZXlzLnBpcGUnO1xuaW1wb3J0IHsgWU5QaXBlIH0gZnJvbSAnLi9waXBlcy95bi95bi5waXBlJztcbmNvbnN0IFBJUEVTID0gW0RhdGVQaXBlLCBDTkN1cnJlbmN5UGlwZSwgS2V5c1BpcGUsIFlOUGlwZV07XG5cbi8vIGVuZHJlZ2lvblxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBSb3V0ZXJNb2R1bGUsIE92ZXJsYXlNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5DT01QT05FTlRTLCAuLi5QSVBFU10sXG4gIGV4cG9ydHM6IFsuLi5DT01QT05FTlRTLCAuLi5QSVBFUywgRGVsb25Mb2NhbGVNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBBbGFpblRoZW1lTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBBbGFpblRoZW1lTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHsgcHJvdmlkZTogV0lORE9XLCB1c2VWYWx1ZTogd2luZG93IH0sXG4gICAgICAgIHsgcHJvdmlkZTogQUxBSU5fSTE4Tl9UT0tFTiwgdXNlQ2xhc3M6IEFsYWluSTE4TlNlcnZpY2VGYWtlIH0sXG4gICAgICAgIC4uLkhFTFBFUlMsXG4gICAgICBdLFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZm9yQ2hpbGQoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBBbGFpblRoZW1lTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbLi4uSEVMUEVSU10sXG4gICAgfTtcbiAgfVxufVxuIl19