/* eslint-disable import/order */
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// pipes
import { BellOutline, DeleteOutline, InboxOutline, PlusOutline } from '@ant-design/icons-angular/icons';
import { NzI18nModule } from 'ng-zorro-antd/i18n';
import { DelonLocaleModule } from './locale/locale.module';
import { DatePipe } from './pipes/date/date.pipe';
import { KeysPipe } from './pipes/keys/keys.pipe';
import { HTMLPipe } from './pipes/safe/html.pipe';
import { URLPipe } from './pipes/safe/url.pipe';
import { YNPipe } from './pipes/yn/yn.pipe';
import { I18nPipe } from './services/i18n/i18n.pipe';
// #endregion
// #region all delon used icons
// - zorro: https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/components/icon/icons.ts
import { DrawerHelper } from './services/drawer/drawer.helper';
import { ModalHelper } from './services/modal/modal.helper';
import { ALAIN_SETTING_KEYS } from './services/settings/settings.service';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/icon";
// #region import
const HELPERS = [ModalHelper, DrawerHelper];
const PIPES = [DatePipe, KeysPipe, YNPipe, I18nPipe, HTMLPipe, URLPipe];
const ICONS = [BellOutline, DeleteOutline, PlusOutline, InboxOutline];
// #endregion
export class AlainThemeModule {
    constructor(iconSrv) {
        iconSrv.addIcon(...ICONS);
    }
    static forRoot() {
        return {
            ngModule: AlainThemeModule,
            providers: HELPERS
        };
    }
    static forChild() {
        return {
            ngModule: AlainThemeModule,
            providers: HELPERS
        };
    }
}
AlainThemeModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.5", ngImport: i0, type: AlainThemeModule, deps: [{ token: i1.NzIconService }], target: i0.ɵɵFactoryTarget.NgModule });
AlainThemeModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.5", ngImport: i0, type: AlainThemeModule, declarations: [DatePipe, KeysPipe, YNPipe, I18nPipe, HTMLPipe, URLPipe], imports: [CommonModule, RouterModule, OverlayModule, NzI18nModule], exports: [DatePipe, KeysPipe, YNPipe, I18nPipe, HTMLPipe, URLPipe, DelonLocaleModule] });
AlainThemeModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.5", ngImport: i0, type: AlainThemeModule, providers: [
        {
            provide: ALAIN_SETTING_KEYS,
            useValue: {
                layout: 'layout',
                user: 'user',
                app: 'app'
            }
        }
    ], imports: [[CommonModule, RouterModule, OverlayModule, NzI18nModule], DelonLocaleModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.5", ngImport: i0, type: AlainThemeModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, RouterModule, OverlayModule, NzI18nModule],
                    declarations: PIPES,
                    providers: [
                        {
                            provide: ALAIN_SETTING_KEYS,
                            useValue: {
                                layout: 'layout',
                                user: 'user',
                                app: 'app'
                            }
                        }
                    ],
                    exports: [...PIPES, DelonLocaleModule]
                }]
        }], ctorParameters: function () { return [{ type: i1.NzIconService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdGhlbWUvc3JjL3RoZW1lLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQ0FBaUM7QUFDakMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFNL0MsUUFBUTtBQUNSLE9BQU8sRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUV4RyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHbEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDM0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ2xELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDbEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2hELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFHckQsYUFBYTtBQUViLCtCQUErQjtBQUUvQiwwRkFBMEY7QUFFMUYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQy9ELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7O0FBM0IxRSxpQkFBaUI7QUFFakIsTUFBTSxPQUFPLEdBQUcsQ0FBQyxXQUFXLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFlNUMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBV3hFLE1BQU0sS0FBSyxHQUFHLENBQUMsV0FBVyxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFFdEUsYUFBYTtBQWlCYixNQUFNLE9BQU8sZ0JBQWdCO0lBQzNCLFlBQVksT0FBc0I7UUFDaEMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFNBQVMsRUFBRSxPQUFPO1NBQ25CLENBQUM7SUFDSixDQUFDO0lBRUQsTUFBTSxDQUFDLFFBQVE7UUFDYixPQUFPO1lBQ0wsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixTQUFTLEVBQUUsT0FBTztTQUNuQixDQUFDO0lBQ0osQ0FBQzs7NkdBakJVLGdCQUFnQjs4R0FBaEIsZ0JBQWdCLGlCQTlCZCxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE9BQU8sYUFnQjFELFlBQVksRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLFlBQVksYUFoQnBELFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQTRCaEQsaUJBQWlCOzhHQUUxQixnQkFBZ0IsYUFaaEI7UUFDVDtZQUNFLE9BQU8sRUFBRSxrQkFBa0I7WUFDM0IsUUFBUSxFQUFFO2dCQUNSLE1BQU0sRUFBRSxRQUFRO2dCQUNoQixJQUFJLEVBQUUsTUFBTTtnQkFDWixHQUFHLEVBQUUsS0FBSzthQUNYO1NBQ0Y7S0FDRixZQVhRLENBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsWUFBWSxDQUFDLEVBWTlDLGlCQUFpQjsyRkFFMUIsZ0JBQWdCO2tCQWY1QixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLFlBQVksQ0FBQztvQkFDbEUsWUFBWSxFQUFFLEtBQUs7b0JBQ25CLFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsa0JBQWtCOzRCQUMzQixRQUFRLEVBQUU7Z0NBQ1IsTUFBTSxFQUFFLFFBQVE7Z0NBQ2hCLElBQUksRUFBRSxNQUFNO2dDQUNaLEdBQUcsRUFBRSxLQUFLOzZCQUNYO3lCQUNGO3FCQUNGO29CQUNELE9BQU8sRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLGlCQUFpQixDQUFDO2lCQUN2QyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9vcmRlciAqL1xuaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuLy8gI3JlZ2lvbiBpbXBvcnRcblxuY29uc3QgSEVMUEVSUyA9IFtNb2RhbEhlbHBlciwgRHJhd2VySGVscGVyXTtcblxuLy8gcGlwZXNcbmltcG9ydCB7IEJlbGxPdXRsaW5lLCBEZWxldGVPdXRsaW5lLCBJbmJveE91dGxpbmUsIFBsdXNPdXRsaW5lIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMtYW5ndWxhci9pY29ucyc7XG5cbmltcG9ydCB7IE56STE4bk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XG5pbXBvcnQgeyBOekljb25TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pY29uJztcblxuaW1wb3J0IHsgRGVsb25Mb2NhbGVNb2R1bGUgfSBmcm9tICcuL2xvY2FsZS9sb2NhbGUubW9kdWxlJztcbmltcG9ydCB7IERhdGVQaXBlIH0gZnJvbSAnLi9waXBlcy9kYXRlL2RhdGUucGlwZSc7XG5pbXBvcnQgeyBLZXlzUGlwZSB9IGZyb20gJy4vcGlwZXMva2V5cy9rZXlzLnBpcGUnO1xuaW1wb3J0IHsgSFRNTFBpcGUgfSBmcm9tICcuL3BpcGVzL3NhZmUvaHRtbC5waXBlJztcbmltcG9ydCB7IFVSTFBpcGUgfSBmcm9tICcuL3BpcGVzL3NhZmUvdXJsLnBpcGUnO1xuaW1wb3J0IHsgWU5QaXBlIH0gZnJvbSAnLi9waXBlcy95bi95bi5waXBlJztcbmltcG9ydCB7IEkxOG5QaXBlIH0gZnJvbSAnLi9zZXJ2aWNlcy9pMThuL2kxOG4ucGlwZSc7XG5jb25zdCBQSVBFUyA9IFtEYXRlUGlwZSwgS2V5c1BpcGUsIFlOUGlwZSwgSTE4blBpcGUsIEhUTUxQaXBlLCBVUkxQaXBlXTtcblxuLy8gI2VuZHJlZ2lvblxuXG4vLyAjcmVnaW9uIGFsbCBkZWxvbiB1c2VkIGljb25zXG5cbi8vIC0gem9ycm86IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL2NvbXBvbmVudHMvaWNvbi9pY29ucy50c1xuXG5pbXBvcnQgeyBEcmF3ZXJIZWxwZXIgfSBmcm9tICcuL3NlcnZpY2VzL2RyYXdlci9kcmF3ZXIuaGVscGVyJztcbmltcG9ydCB7IE1vZGFsSGVscGVyIH0gZnJvbSAnLi9zZXJ2aWNlcy9tb2RhbC9tb2RhbC5oZWxwZXInO1xuaW1wb3J0IHsgQUxBSU5fU0VUVElOR19LRVlTIH0gZnJvbSAnLi9zZXJ2aWNlcy9zZXR0aW5ncy9zZXR0aW5ncy5zZXJ2aWNlJztcbmNvbnN0IElDT05TID0gW0JlbGxPdXRsaW5lLCBEZWxldGVPdXRsaW5lLCBQbHVzT3V0bGluZSwgSW5ib3hPdXRsaW5lXTtcblxuLy8gI2VuZHJlZ2lvblxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBSb3V0ZXJNb2R1bGUsIE92ZXJsYXlNb2R1bGUsIE56STE4bk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogUElQRVMsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IEFMQUlOX1NFVFRJTkdfS0VZUyxcbiAgICAgIHVzZVZhbHVlOiB7XG4gICAgICAgIGxheW91dDogJ2xheW91dCcsXG4gICAgICAgIHVzZXI6ICd1c2VyJyxcbiAgICAgICAgYXBwOiAnYXBwJ1xuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgZXhwb3J0czogWy4uLlBJUEVTLCBEZWxvbkxvY2FsZU1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQWxhaW5UaGVtZU1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKGljb25TcnY6IE56SWNvblNlcnZpY2UpIHtcbiAgICBpY29uU3J2LmFkZEljb24oLi4uSUNPTlMpO1xuICB9XG5cbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxBbGFpblRoZW1lTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBBbGFpblRoZW1lTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBIRUxQRVJTXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBmb3JDaGlsZCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPEFsYWluVGhlbWVNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEFsYWluVGhlbWVNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IEhFTFBFUlNcbiAgICB9O1xuICB9XG59XG4iXX0=