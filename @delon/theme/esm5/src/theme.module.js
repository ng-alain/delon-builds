/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WINDOW } from './win_tokens';
import { DelonLocaleModule } from './locale/locale.module';
// #region import
import { AlainI18NServiceFake, ALAIN_I18N_TOKEN } from './services/i18n/i18n';
import { DrawerHelper } from './services/drawer/drawer.helper';
import { ModalHelper } from './services/modal/modal.helper';
/** @type {?} */
var HELPERS = [ModalHelper, DrawerHelper];
// components
/** @type {?} */
var COMPONENTS = [];
// pipes
import { CNCurrencyPipe } from './pipes/currency/cn-currency.pipe';
import { DatePipe } from './pipes/date/date.pipe';
import { KeysPipe } from './pipes/keys/keys.pipe';
import { HTMLPipe } from './pipes/safe/html.pipe';
import { URLPipe } from './pipes/safe/url.pipe';
import { YNPipe } from './pipes/yn/yn.pipe';
import { I18nPipe } from './services/i18n/i18n.pipe';
/** @type {?} */
var PIPES = [DatePipe, CNCurrencyPipe, KeysPipe, YNPipe, I18nPipe, HTMLPipe, URLPipe];
// #endregion
// #region all delon used icons
import { BellOutline, CaretDownOutline, CaretUpOutline, DeleteOutline, FilterFill, InboxOutline, PlusOutline, } from '@ant-design/icons-angular/icons';
import { NzIconService } from 'ng-zorro-antd';
/** @type {?} */
var ICONS = [
    BellOutline,
    FilterFill,
    CaretUpOutline,
    CaretDownOutline,
    DeleteOutline,
    PlusOutline,
    InboxOutline,
];
// #endregion
var AlainThemeModule = /** @class */ (function () {
    function AlainThemeModule(iconSrv) {
        iconSrv.addIcon.apply(iconSrv, tslib_1.__spread(ICONS));
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
    /** @nocollapse */
    AlainThemeModule.ctorParameters = function () { return [
        { type: NzIconService }
    ]; };
    return AlainThemeModule;
}());
export { AlainThemeModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL3RoZW1lLyIsInNvdXJjZXMiOlsic3JjL3RoZW1lLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFdEMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBRzNELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRTlFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMvRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sK0JBQStCLENBQUM7O0lBQ3RELE9BQU8sR0FBRyxDQUFDLFdBQVcsRUFBRSxZQUFZLENBQUM7OztJQUdyQyxVQUFVLEdBQUcsRUFBRTs7QUFHckIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ2xELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDNUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDJCQUEyQixDQUFDOztJQUMvQyxLQUFLLEdBQUcsQ0FBQyxRQUFRLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUM7OztBQU12RixPQUFPLEVBQ0wsV0FBVyxFQUNYLGdCQUFnQixFQUNoQixjQUFjLEVBQ2QsYUFBYSxFQUNiLFVBQVUsRUFDVixZQUFZLEVBQ1osV0FBVyxHQUNaLE1BQU0saUNBQWlDLENBQUM7QUFDekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7SUFDeEMsS0FBSyxHQUFHO0lBQ1osV0FBVztJQUNYLFVBQVU7SUFDVixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixXQUFXO0lBQ1gsWUFBWTtDQUNiOztBQUlEO0lBTUUsMEJBQVksT0FBc0I7UUFDaEMsT0FBTyxDQUFDLE9BQU8sT0FBZixPQUFPLG1CQUFZLEtBQUssR0FBRTtJQUM1QixDQUFDOzs7O0lBRU0sd0JBQU87OztJQUFkO1FBQ0UsT0FBTztZQUNMLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsU0FBUztnQkFDUCxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRTtnQkFDckMsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLG9CQUFvQixFQUFFO2VBQzFELE9BQU8sQ0FDWDtTQUNGLENBQUM7SUFDSixDQUFDOzs7O0lBRU0seUJBQVE7OztJQUFmO1FBQ0UsT0FBTztZQUNMLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsU0FBUyxtQkFBTSxPQUFPLENBQUM7U0FDeEIsQ0FBQztJQUNKLENBQUM7O2dCQTFCRixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxhQUFhLENBQUM7b0JBQ3BELFlBQVksbUJBQU0sVUFBVSxFQUFLLEtBQUssQ0FBQztvQkFDdkMsT0FBTyxtQkFBTSxVQUFVLEVBQUssS0FBSyxHQUFFLGlCQUFpQixFQUFDO2lCQUN0RDs7OztnQkFqQlEsYUFBYTs7SUF3Q3RCLHVCQUFDO0NBQUEsQUEzQkQsSUEyQkM7U0F0QlksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgV0lORE9XIH0gZnJvbSAnLi93aW5fdG9rZW5zJztcblxuaW1wb3J0IHsgRGVsb25Mb2NhbGVNb2R1bGUgfSBmcm9tICcuL2xvY2FsZS9sb2NhbGUubW9kdWxlJztcblxuLy8gI3JlZ2lvbiBpbXBvcnRcbmltcG9ydCB7IEFsYWluSTE4TlNlcnZpY2VGYWtlLCBBTEFJTl9JMThOX1RPS0VOIH0gZnJvbSAnLi9zZXJ2aWNlcy9pMThuL2kxOG4nO1xuXG5pbXBvcnQgeyBEcmF3ZXJIZWxwZXIgfSBmcm9tICcuL3NlcnZpY2VzL2RyYXdlci9kcmF3ZXIuaGVscGVyJztcbmltcG9ydCB7IE1vZGFsSGVscGVyIH0gZnJvbSAnLi9zZXJ2aWNlcy9tb2RhbC9tb2RhbC5oZWxwZXInO1xuY29uc3QgSEVMUEVSUyA9IFtNb2RhbEhlbHBlciwgRHJhd2VySGVscGVyXTtcblxuLy8gY29tcG9uZW50c1xuY29uc3QgQ09NUE9ORU5UUyA9IFtdO1xuXG4vLyBwaXBlc1xuaW1wb3J0IHsgQ05DdXJyZW5jeVBpcGUgfSBmcm9tICcuL3BpcGVzL2N1cnJlbmN5L2NuLWN1cnJlbmN5LnBpcGUnO1xuaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tICcuL3BpcGVzL2RhdGUvZGF0ZS5waXBlJztcbmltcG9ydCB7IEtleXNQaXBlIH0gZnJvbSAnLi9waXBlcy9rZXlzL2tleXMucGlwZSc7XG5pbXBvcnQgeyBIVE1MUGlwZSB9IGZyb20gJy4vcGlwZXMvc2FmZS9odG1sLnBpcGUnO1xuaW1wb3J0IHsgVVJMUGlwZSB9IGZyb20gJy4vcGlwZXMvc2FmZS91cmwucGlwZSc7XG5pbXBvcnQgeyBZTlBpcGUgfSBmcm9tICcuL3BpcGVzL3luL3luLnBpcGUnO1xuaW1wb3J0IHsgSTE4blBpcGUgfSBmcm9tICcuL3NlcnZpY2VzL2kxOG4vaTE4bi5waXBlJztcbmNvbnN0IFBJUEVTID0gW0RhdGVQaXBlLCBDTkN1cnJlbmN5UGlwZSwgS2V5c1BpcGUsIFlOUGlwZSwgSTE4blBpcGUsIEhUTUxQaXBlLCBVUkxQaXBlXTtcblxuLy8gI2VuZHJlZ2lvblxuXG4vLyAjcmVnaW9uIGFsbCBkZWxvbiB1c2VkIGljb25zXG5cbmltcG9ydCB7XG4gIEJlbGxPdXRsaW5lLFxuICBDYXJldERvd25PdXRsaW5lLFxuICBDYXJldFVwT3V0bGluZSxcbiAgRGVsZXRlT3V0bGluZSxcbiAgRmlsdGVyRmlsbCxcbiAgSW5ib3hPdXRsaW5lLFxuICBQbHVzT3V0bGluZSxcbn0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMtYW5ndWxhci9pY29ucyc7XG5pbXBvcnQgeyBOekljb25TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XG5jb25zdCBJQ09OUyA9IFtcbiAgQmVsbE91dGxpbmUsXG4gIEZpbHRlckZpbGwsXG4gIENhcmV0VXBPdXRsaW5lLFxuICBDYXJldERvd25PdXRsaW5lLFxuICBEZWxldGVPdXRsaW5lLFxuICBQbHVzT3V0bGluZSxcbiAgSW5ib3hPdXRsaW5lLFxuXTtcblxuLy8gI2VuZHJlZ2lvblxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBSb3V0ZXJNb2R1bGUsIE92ZXJsYXlNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5DT01QT05FTlRTLCAuLi5QSVBFU10sXG4gIGV4cG9ydHM6IFsuLi5DT01QT05FTlRTLCAuLi5QSVBFUywgRGVsb25Mb2NhbGVNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBBbGFpblRoZW1lTW9kdWxlIHtcbiAgY29uc3RydWN0b3IoaWNvblNydjogTnpJY29uU2VydmljZSkge1xuICAgIGljb25TcnYuYWRkSWNvbiguLi5JQ09OUyk7XG4gIH1cblxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEFsYWluVGhlbWVNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgeyBwcm92aWRlOiBXSU5ET1csIHVzZVZhbHVlOiB3aW5kb3cgfSxcbiAgICAgICAgeyBwcm92aWRlOiBBTEFJTl9JMThOX1RPS0VOLCB1c2VDbGFzczogQWxhaW5JMThOU2VydmljZUZha2UgfSxcbiAgICAgICAgLi4uSEVMUEVSUyxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBmb3JDaGlsZCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEFsYWluVGhlbWVNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFsuLi5IRUxQRVJTXSxcbiAgICB9O1xuICB9XG59XG4iXX0=