/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OverlayModule } from '@angular/cdk/overlay';
import { WINDOW } from './win_tokens';
import { DelonLocaleModule } from './locale/locale.module';
import { ALAIN_I18N_TOKEN, AlainI18NServiceFake } from './services/i18n/i18n';
import { ModalHelper } from './services/modal/modal.helper';
import { DrawerHelper } from './services/drawer/drawer.helper';
/** @type {?} */
const HELPERS = [ModalHelper, DrawerHelper];
/** @type {?} */
const COMPONENTS = [];
import { DatePipe } from './pipes/date/date.pipe';
import { CNCurrencyPipe } from './pipes/currency/cn-currency.pipe';
import { KeysPipe } from './pipes/keys/keys.pipe';
import { YNPipe } from './pipes/yn/yn.pipe';
import { I18nPipe } from './services/i18n/i18n.pipe';
import { HTMLPipe } from './pipes/html/html.pipe';
/** @type {?} */
const PIPES = [DatePipe, CNCurrencyPipe, KeysPipe, YNPipe, I18nPipe, HTMLPipe];
import { NzIconService } from 'ng-zorro-antd';
import { BellOutline, FilterFill, CaretUpOutline, CaretDownOutline, DeleteOutline, PlusOutline, InboxOutline, } from '@ant-design/icons-angular/icons';
/** @type {?} */
const ICONS = [
    BellOutline,
    FilterFill,
    CaretUpOutline,
    CaretDownOutline,
    DeleteOutline,
    PlusOutline,
    InboxOutline,
];
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
            providers: [
                { provide: WINDOW, useValue: window },
                { provide: ALAIN_I18N_TOKEN, useClass: AlainI18NServiceFake },
                ...HELPERS,
            ],
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL3RoZW1lLyIsInNvdXJjZXMiOlsic3JjL3RoZW1lLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFckQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUV0QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUczRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUU5RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlDQUFpQyxDQUFDOztBQUMvRCxNQUFNLE9BQU8sR0FBRyxDQUFDLFdBQVcsRUFBRSxZQUFZLENBQUMsQ0FBQzs7QUFHNUMsTUFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDO0FBR3RCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDbkUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ2xELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDckQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQUNsRCxNQUFNLEtBQUssR0FBRyxDQUFDLFFBQVEsRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFNL0UsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5QyxPQUFPLEVBQ0wsV0FBVyxFQUNYLFVBQVUsRUFDVixjQUFjLEVBQ2QsZ0JBQWdCLEVBQ2hCLGFBQWEsRUFDYixXQUFXLEVBQ1gsWUFBWSxHQUNiLE1BQU0saUNBQWlDLENBQUM7O0FBQ3pDLE1BQU0sS0FBSyxHQUFHO0lBQ1osV0FBVztJQUNYLFVBQVU7SUFDVixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixXQUFXO0lBQ1gsWUFBWTtDQUNiLENBQUM7QUFTRixNQUFNOzs7O0lBQ0osWUFBWSxPQUFzQjtRQUNoQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUM7S0FDM0I7Ozs7SUFFRCxNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFNBQVMsRUFBRTtnQkFDVCxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRTtnQkFDckMsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLG9CQUFvQixFQUFFO2dCQUM3RCxHQUFHLE9BQU87YUFDWDtTQUNGLENBQUM7S0FDSDs7OztJQUVELE1BQU0sQ0FBQyxRQUFRO1FBQ2IsT0FBTztZQUNMLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsU0FBUyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUM7U0FDeEIsQ0FBQztLQUNIOzs7WUExQkYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsYUFBYSxDQUFDO2dCQUNwRCxZQUFZLEVBQUUsQ0FBQyxHQUFHLFVBQVUsRUFBRSxHQUFHLEtBQUssQ0FBQztnQkFDdkMsT0FBTyxFQUFFLENBQUMsR0FBRyxVQUFVLEVBQUUsR0FBRyxLQUFLLEVBQUUsaUJBQWlCLENBQUM7YUFDdEQ7Ozs7WUExQlEsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5cbmltcG9ydCB7IFdJTkRPVyB9IGZyb20gJy4vd2luX3Rva2Vucyc7XG5cbmltcG9ydCB7IERlbG9uTG9jYWxlTW9kdWxlIH0gZnJvbSAnLi9sb2NhbGUvbG9jYWxlLm1vZHVsZSc7XG5cbi8vICNyZWdpb24gaW1wb3J0XG5pbXBvcnQgeyBBTEFJTl9JMThOX1RPS0VOLCBBbGFpbkkxOE5TZXJ2aWNlRmFrZSB9IGZyb20gJy4vc2VydmljZXMvaTE4bi9pMThuJztcblxuaW1wb3J0IHsgTW9kYWxIZWxwZXIgfSBmcm9tICcuL3NlcnZpY2VzL21vZGFsL21vZGFsLmhlbHBlcic7XG5pbXBvcnQgeyBEcmF3ZXJIZWxwZXIgfSBmcm9tICcuL3NlcnZpY2VzL2RyYXdlci9kcmF3ZXIuaGVscGVyJztcbmNvbnN0IEhFTFBFUlMgPSBbTW9kYWxIZWxwZXIsIERyYXdlckhlbHBlcl07XG5cbi8vIGNvbXBvbmVudHNcbmNvbnN0IENPTVBPTkVOVFMgPSBbXTtcblxuLy8gcGlwZXNcbmltcG9ydCB7IERhdGVQaXBlIH0gZnJvbSAnLi9waXBlcy9kYXRlL2RhdGUucGlwZSc7XG5pbXBvcnQgeyBDTkN1cnJlbmN5UGlwZSB9IGZyb20gJy4vcGlwZXMvY3VycmVuY3kvY24tY3VycmVuY3kucGlwZSc7XG5pbXBvcnQgeyBLZXlzUGlwZSB9IGZyb20gJy4vcGlwZXMva2V5cy9rZXlzLnBpcGUnO1xuaW1wb3J0IHsgWU5QaXBlIH0gZnJvbSAnLi9waXBlcy95bi95bi5waXBlJztcbmltcG9ydCB7IEkxOG5QaXBlIH0gZnJvbSAnLi9zZXJ2aWNlcy9pMThuL2kxOG4ucGlwZSc7XG5pbXBvcnQgeyBIVE1MUGlwZSB9IGZyb20gJy4vcGlwZXMvaHRtbC9odG1sLnBpcGUnO1xuY29uc3QgUElQRVMgPSBbRGF0ZVBpcGUsIENOQ3VycmVuY3lQaXBlLCBLZXlzUGlwZSwgWU5QaXBlLCBJMThuUGlwZSwgSFRNTFBpcGVdO1xuXG4vLyAjZW5kcmVnaW9uXG5cbi8vICNyZWdpb24gYWxsIGRlbG9uIHVzZWQgaWNvbnNcblxuaW1wb3J0IHsgTnpJY29uU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xuaW1wb3J0IHtcbiAgQmVsbE91dGxpbmUsXG4gIEZpbHRlckZpbGwsXG4gIENhcmV0VXBPdXRsaW5lLFxuICBDYXJldERvd25PdXRsaW5lLFxuICBEZWxldGVPdXRsaW5lLFxuICBQbHVzT3V0bGluZSxcbiAgSW5ib3hPdXRsaW5lLFxufSBmcm9tICdAYW50LWRlc2lnbi9pY29ucy1hbmd1bGFyL2ljb25zJztcbmNvbnN0IElDT05TID0gW1xuICBCZWxsT3V0bGluZSxcbiAgRmlsdGVyRmlsbCxcbiAgQ2FyZXRVcE91dGxpbmUsXG4gIENhcmV0RG93bk91dGxpbmUsXG4gIERlbGV0ZU91dGxpbmUsXG4gIFBsdXNPdXRsaW5lLFxuICBJbmJveE91dGxpbmUsXG5dO1xuXG4vLyAjZW5kcmVnaW9uXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFJvdXRlck1vZHVsZSwgT3ZlcmxheU1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogWy4uLkNPTVBPTkVOVFMsIC4uLlBJUEVTXSxcbiAgZXhwb3J0czogWy4uLkNPTVBPTkVOVFMsIC4uLlBJUEVTLCBEZWxvbkxvY2FsZU1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIEFsYWluVGhlbWVNb2R1bGUge1xuICBjb25zdHJ1Y3RvcihpY29uU3J2OiBOekljb25TZXJ2aWNlKSB7XG4gICAgaWNvblNydi5hZGRJY29uKC4uLklDT05TKTtcbiAgfVxuXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQWxhaW5UaGVtZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6IFdJTkRPVywgdXNlVmFsdWU6IHdpbmRvdyB9LFxuICAgICAgICB7IHByb3ZpZGU6IEFMQUlOX0kxOE5fVE9LRU4sIHVzZUNsYXNzOiBBbGFpbkkxOE5TZXJ2aWNlRmFrZSB9LFxuICAgICAgICAuLi5IRUxQRVJTLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGZvckNoaWxkKCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQWxhaW5UaGVtZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogWy4uLkhFTFBFUlNdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==