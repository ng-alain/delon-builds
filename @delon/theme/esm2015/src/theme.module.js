/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DelonLocaleModule } from './locale/locale.module';
// #region import
import { DrawerHelper } from './services/drawer/drawer.helper';
import { ModalHelper } from './services/modal/modal.helper';
/** @type {?} */
const HELPERS = [ModalHelper, DrawerHelper];
// components
/** @type {?} */
const COMPONENTS = [];
// pipes
import { CNCurrencyPipe } from './pipes/currency/cn-currency.pipe';
import { DatePipe } from './pipes/date/date.pipe';
import { KeysPipe } from './pipes/keys/keys.pipe';
import { HTMLPipe } from './pipes/safe/html.pipe';
import { URLPipe } from './pipes/safe/url.pipe';
import { YNPipe } from './pipes/yn/yn.pipe';
import { I18nPipe } from './services/i18n/i18n.pipe';
/** @type {?} */
const PIPES = [DatePipe, CNCurrencyPipe, KeysPipe, YNPipe, I18nPipe, HTMLPipe, URLPipe];
// #endregion
// #region all delon used icons
// - zorro: https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/components/icon/nz-icon.service.ts#L6
import { BellOutline, CaretUpOutline, DeleteOutline, InboxOutline, PlusOutline } from '@ant-design/icons-angular/icons';
import { NzIconService } from 'ng-zorro-antd/icon';
/** @type {?} */
const ICONS = [BellOutline, CaretUpOutline, DeleteOutline, PlusOutline, InboxOutline];
// #endregion
export class AlainThemeModule {
    /**
     * @param {?} iconSrv
     */
    constructor(iconSrv) {
        iconSrv.addIcon(...ICONS);
    }
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: AlainThemeModule,
            providers: [...HELPERS],
        };
    }
    /**
     * @return {?}
     */
    static forChild() {
        return {
            ngModule: AlainThemeModule,
            providers: [...HELPERS],
        };
    }
}
AlainThemeModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, RouterModule, OverlayModule],
                declarations: [...COMPONENTS, ...PIPES],
                exports: [...COMPONENTS, ...PIPES, DelonLocaleModule],
            },] }
];
/** @nocollapse */
AlainThemeModule.ctorParameters = () => [
    { type: NzIconService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL3RoZW1lLyIsInNvdXJjZXMiOlsic3JjL3RoZW1lLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBSTNELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMvRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sK0JBQStCLENBQUM7O01BQ3RELE9BQU8sR0FBRyxDQUFDLFdBQVcsRUFBRSxZQUFZLENBQUM7OztNQUdyQyxVQUFVLEdBQUcsRUFBRTs7QUFHckIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ2xELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDNUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDJCQUEyQixDQUFDOztNQUMvQyxLQUFLLEdBQUcsQ0FBQyxRQUFRLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUM7Ozs7QUFRdkYsT0FBTyxFQUFFLFdBQVcsRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN4SCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7O01BQzdDLEtBQUssR0FBRyxDQUFDLFdBQVcsRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxZQUFZLENBQUM7O0FBU3JGLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7SUFDM0IsWUFBWSxPQUFzQjtRQUNoQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVELE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsU0FBUyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUM7U0FDeEIsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxNQUFNLENBQUMsUUFBUTtRQUNiLE9BQU87WUFDTCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFNBQVMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDO1NBQ3hCLENBQUM7SUFDSixDQUFDOzs7WUF0QkYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsYUFBYSxDQUFDO2dCQUNwRCxZQUFZLEVBQUUsQ0FBQyxHQUFHLFVBQVUsRUFBRSxHQUFHLEtBQUssQ0FBQztnQkFDdkMsT0FBTyxFQUFFLENBQUMsR0FBRyxVQUFVLEVBQUUsR0FBRyxLQUFLLEVBQUUsaUJBQWlCLENBQUM7YUFDdEQ7Ozs7WUFUUSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgRGVsb25Mb2NhbGVNb2R1bGUgfSBmcm9tICcuL2xvY2FsZS9sb2NhbGUubW9kdWxlJztcblxuLy8gI3JlZ2lvbiBpbXBvcnRcblxuaW1wb3J0IHsgRHJhd2VySGVscGVyIH0gZnJvbSAnLi9zZXJ2aWNlcy9kcmF3ZXIvZHJhd2VyLmhlbHBlcic7XG5pbXBvcnQgeyBNb2RhbEhlbHBlciB9IGZyb20gJy4vc2VydmljZXMvbW9kYWwvbW9kYWwuaGVscGVyJztcbmNvbnN0IEhFTFBFUlMgPSBbTW9kYWxIZWxwZXIsIERyYXdlckhlbHBlcl07XG5cbi8vIGNvbXBvbmVudHNcbmNvbnN0IENPTVBPTkVOVFMgPSBbXTtcblxuLy8gcGlwZXNcbmltcG9ydCB7IENOQ3VycmVuY3lQaXBlIH0gZnJvbSAnLi9waXBlcy9jdXJyZW5jeS9jbi1jdXJyZW5jeS5waXBlJztcbmltcG9ydCB7IERhdGVQaXBlIH0gZnJvbSAnLi9waXBlcy9kYXRlL2RhdGUucGlwZSc7XG5pbXBvcnQgeyBLZXlzUGlwZSB9IGZyb20gJy4vcGlwZXMva2V5cy9rZXlzLnBpcGUnO1xuaW1wb3J0IHsgSFRNTFBpcGUgfSBmcm9tICcuL3BpcGVzL3NhZmUvaHRtbC5waXBlJztcbmltcG9ydCB7IFVSTFBpcGUgfSBmcm9tICcuL3BpcGVzL3NhZmUvdXJsLnBpcGUnO1xuaW1wb3J0IHsgWU5QaXBlIH0gZnJvbSAnLi9waXBlcy95bi95bi5waXBlJztcbmltcG9ydCB7IEkxOG5QaXBlIH0gZnJvbSAnLi9zZXJ2aWNlcy9pMThuL2kxOG4ucGlwZSc7XG5jb25zdCBQSVBFUyA9IFtEYXRlUGlwZSwgQ05DdXJyZW5jeVBpcGUsIEtleXNQaXBlLCBZTlBpcGUsIEkxOG5QaXBlLCBIVE1MUGlwZSwgVVJMUGlwZV07XG5cbi8vICNlbmRyZWdpb25cblxuLy8gI3JlZ2lvbiBhbGwgZGVsb24gdXNlZCBpY29uc1xuXG4vLyAtIHpvcnJvOiBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9jb21wb25lbnRzL2ljb24vbnotaWNvbi5zZXJ2aWNlLnRzI0w2XG5cbmltcG9ydCB7IEJlbGxPdXRsaW5lLCBDYXJldFVwT3V0bGluZSwgRGVsZXRlT3V0bGluZSwgSW5ib3hPdXRsaW5lLCBQbHVzT3V0bGluZSB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zLWFuZ3VsYXIvaWNvbnMnO1xuaW1wb3J0IHsgTnpJY29uU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaWNvbic7XG5jb25zdCBJQ09OUyA9IFtCZWxsT3V0bGluZSwgQ2FyZXRVcE91dGxpbmUsIERlbGV0ZU91dGxpbmUsIFBsdXNPdXRsaW5lLCBJbmJveE91dGxpbmVdO1xuXG4vLyAjZW5kcmVnaW9uXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFJvdXRlck1vZHVsZSwgT3ZlcmxheU1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogWy4uLkNPTVBPTkVOVFMsIC4uLlBJUEVTXSxcbiAgZXhwb3J0czogWy4uLkNPTVBPTkVOVFMsIC4uLlBJUEVTLCBEZWxvbkxvY2FsZU1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIEFsYWluVGhlbWVNb2R1bGUge1xuICBjb25zdHJ1Y3RvcihpY29uU3J2OiBOekljb25TZXJ2aWNlKSB7XG4gICAgaWNvblNydi5hZGRJY29uKC4uLklDT05TKTtcbiAgfVxuXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQWxhaW5UaGVtZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogWy4uLkhFTFBFUlNdLFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZm9yQ2hpbGQoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBBbGFpblRoZW1lTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbLi4uSEVMUEVSU10sXG4gICAgfTtcbiAgfVxufVxuIl19