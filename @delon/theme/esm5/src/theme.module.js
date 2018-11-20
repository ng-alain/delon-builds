/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OverlayModule } from '@angular/cdk/overlay';
import { WINDOW } from './win_tokens';
import { DelonLocaleModule } from './locale/locale.module';
// #region import
import { ALAIN_I18N_TOKEN, AlainI18NServiceFake } from './services/i18n/i18n';
import { ModalHelper } from './services/modal/modal.helper';
import { DrawerHelper } from './services/drawer/drawer.helper';
/** @type {?} */
var HELPERS = [ModalHelper, DrawerHelper];
// components
/** @type {?} */
var COMPONENTS = [];
// pipes
import { DatePipe } from './pipes/date/date.pipe';
import { CNCurrencyPipe } from './pipes/currency/cn-currency.pipe';
import { KeysPipe } from './pipes/keys/keys.pipe';
import { YNPipe } from './pipes/yn/yn.pipe';
import { I18nPipe } from './services/i18n/i18n.pipe';
import { HTMLPipe } from './pipes/safe/html.pipe';
import { URLPipe } from './pipes/safe/url.pipe';
/** @type {?} */
var PIPES = [DatePipe, CNCurrencyPipe, KeysPipe, YNPipe, I18nPipe, HTMLPipe, URLPipe];
// #endregion
// #region all delon used icons
import { NzIconService } from 'ng-zorro-antd';
import { BellOutline, FilterFill, CaretUpOutline, CaretDownOutline, DeleteOutline, PlusOutline, InboxOutline, } from '@ant-design/icons-angular/icons';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL3RoZW1lLyIsInNvdXJjZXMiOlsic3JjL3RoZW1lLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXJELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFdEMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBRzNELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRTlFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUNBQWlDLENBQUM7O0lBQ3pELE9BQU8sR0FBRyxDQUFDLFdBQVcsRUFBRSxZQUFZLENBQUM7OztJQUdyQyxVQUFVLEdBQUcsRUFBRTs7QUFHckIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ2xELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNuRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDbEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDbEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHVCQUF1QixDQUFDOztJQUMxQyxLQUFLLEdBQUcsQ0FBQyxRQUFRLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUM7OztBQU12RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlDLE9BQU8sRUFDTCxXQUFXLEVBQ1gsVUFBVSxFQUNWLGNBQWMsRUFDZCxnQkFBZ0IsRUFDaEIsYUFBYSxFQUNiLFdBQVcsRUFDWCxZQUFZLEdBQ2IsTUFBTSxpQ0FBaUMsQ0FBQzs7SUFDbkMsS0FBSyxHQUFHO0lBQ1osV0FBVztJQUNYLFVBQVU7SUFDVixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixXQUFXO0lBQ1gsWUFBWTtDQUNiOztBQUlEO0lBTUUsMEJBQVksT0FBc0I7UUFDaEMsT0FBTyxDQUFDLE9BQU8sT0FBZixPQUFPLG1CQUFZLEtBQUssR0FBRTtJQUM1QixDQUFDOzs7O0lBRU0sd0JBQU87OztJQUFkO1FBQ0UsT0FBTztZQUNMLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsU0FBUztnQkFDUCxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRTtnQkFDckMsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLG9CQUFvQixFQUFFO2VBQzFELE9BQU8sQ0FDWDtTQUNGLENBQUM7SUFDSixDQUFDOzs7O0lBRU0seUJBQVE7OztJQUFmO1FBQ0UsT0FBTztZQUNMLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsU0FBUyxtQkFBTSxPQUFPLENBQUM7U0FDeEIsQ0FBQztJQUNKLENBQUM7O2dCQTFCRixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxhQUFhLENBQUM7b0JBQ3BELFlBQVksbUJBQU0sVUFBVSxFQUFLLEtBQUssQ0FBQztvQkFDdkMsT0FBTyxtQkFBTSxVQUFVLEVBQUssS0FBSyxHQUFFLGlCQUFpQixFQUFDO2lCQUN0RDs7OztnQkExQlEsYUFBYTs7SUFpRHRCLHVCQUFDO0NBQUEsQUEzQkQsSUEyQkM7U0F0QlksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcblxuaW1wb3J0IHsgV0lORE9XIH0gZnJvbSAnLi93aW5fdG9rZW5zJztcblxuaW1wb3J0IHsgRGVsb25Mb2NhbGVNb2R1bGUgfSBmcm9tICcuL2xvY2FsZS9sb2NhbGUubW9kdWxlJztcblxuLy8gI3JlZ2lvbiBpbXBvcnRcbmltcG9ydCB7IEFMQUlOX0kxOE5fVE9LRU4sIEFsYWluSTE4TlNlcnZpY2VGYWtlIH0gZnJvbSAnLi9zZXJ2aWNlcy9pMThuL2kxOG4nO1xuXG5pbXBvcnQgeyBNb2RhbEhlbHBlciB9IGZyb20gJy4vc2VydmljZXMvbW9kYWwvbW9kYWwuaGVscGVyJztcbmltcG9ydCB7IERyYXdlckhlbHBlciB9IGZyb20gJy4vc2VydmljZXMvZHJhd2VyL2RyYXdlci5oZWxwZXInO1xuY29uc3QgSEVMUEVSUyA9IFtNb2RhbEhlbHBlciwgRHJhd2VySGVscGVyXTtcblxuLy8gY29tcG9uZW50c1xuY29uc3QgQ09NUE9ORU5UUyA9IFtdO1xuXG4vLyBwaXBlc1xuaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tICcuL3BpcGVzL2RhdGUvZGF0ZS5waXBlJztcbmltcG9ydCB7IENOQ3VycmVuY3lQaXBlIH0gZnJvbSAnLi9waXBlcy9jdXJyZW5jeS9jbi1jdXJyZW5jeS5waXBlJztcbmltcG9ydCB7IEtleXNQaXBlIH0gZnJvbSAnLi9waXBlcy9rZXlzL2tleXMucGlwZSc7XG5pbXBvcnQgeyBZTlBpcGUgfSBmcm9tICcuL3BpcGVzL3luL3luLnBpcGUnO1xuaW1wb3J0IHsgSTE4blBpcGUgfSBmcm9tICcuL3NlcnZpY2VzL2kxOG4vaTE4bi5waXBlJztcbmltcG9ydCB7IEhUTUxQaXBlIH0gZnJvbSAnLi9waXBlcy9zYWZlL2h0bWwucGlwZSc7XG5pbXBvcnQgeyBVUkxQaXBlIH0gZnJvbSAnLi9waXBlcy9zYWZlL3VybC5waXBlJztcbmNvbnN0IFBJUEVTID0gW0RhdGVQaXBlLCBDTkN1cnJlbmN5UGlwZSwgS2V5c1BpcGUsIFlOUGlwZSwgSTE4blBpcGUsIEhUTUxQaXBlLCBVUkxQaXBlXTtcblxuLy8gI2VuZHJlZ2lvblxuXG4vLyAjcmVnaW9uIGFsbCBkZWxvbiB1c2VkIGljb25zXG5cbmltcG9ydCB7IE56SWNvblNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkJztcbmltcG9ydCB7XG4gIEJlbGxPdXRsaW5lLFxuICBGaWx0ZXJGaWxsLFxuICBDYXJldFVwT3V0bGluZSxcbiAgQ2FyZXREb3duT3V0bGluZSxcbiAgRGVsZXRlT3V0bGluZSxcbiAgUGx1c091dGxpbmUsXG4gIEluYm94T3V0bGluZSxcbn0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMtYW5ndWxhci9pY29ucyc7XG5jb25zdCBJQ09OUyA9IFtcbiAgQmVsbE91dGxpbmUsXG4gIEZpbHRlckZpbGwsXG4gIENhcmV0VXBPdXRsaW5lLFxuICBDYXJldERvd25PdXRsaW5lLFxuICBEZWxldGVPdXRsaW5lLFxuICBQbHVzT3V0bGluZSxcbiAgSW5ib3hPdXRsaW5lLFxuXTtcblxuLy8gI2VuZHJlZ2lvblxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBSb3V0ZXJNb2R1bGUsIE92ZXJsYXlNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5DT01QT05FTlRTLCAuLi5QSVBFU10sXG4gIGV4cG9ydHM6IFsuLi5DT01QT05FTlRTLCAuLi5QSVBFUywgRGVsb25Mb2NhbGVNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBBbGFpblRoZW1lTW9kdWxlIHtcbiAgY29uc3RydWN0b3IoaWNvblNydjogTnpJY29uU2VydmljZSkge1xuICAgIGljb25TcnYuYWRkSWNvbiguLi5JQ09OUyk7XG4gIH1cblxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEFsYWluVGhlbWVNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgeyBwcm92aWRlOiBXSU5ET1csIHVzZVZhbHVlOiB3aW5kb3cgfSxcbiAgICAgICAgeyBwcm92aWRlOiBBTEFJTl9JMThOX1RPS0VOLCB1c2VDbGFzczogQWxhaW5JMThOU2VydmljZUZha2UgfSxcbiAgICAgICAgLi4uSEVMUEVSUyxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBmb3JDaGlsZCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEFsYWluVGhlbWVNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFsuLi5IRUxQRVJTXSxcbiAgICB9O1xuICB9XG59XG4iXX0=