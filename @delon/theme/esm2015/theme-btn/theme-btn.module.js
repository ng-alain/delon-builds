import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { ALAIN_THEME_BTN_KEYS, ThemeBtnComponent } from './theme-btn.component';
const COMPONENTS = [ThemeBtnComponent];
export class ThemeBtnModule {
}
ThemeBtnModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, NzDropDownModule, NzToolTipModule],
                providers: [
                    {
                        provide: ALAIN_THEME_BTN_KEYS,
                        useValue: 'site-theme',
                    },
                ],
                declarations: COMPONENTS,
                exports: COMPONENTS,
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnRuLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lL3RoZW1lLWJ0bi90aGVtZS1idG4ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzFELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUV4RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVoRixNQUFNLFVBQVUsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFhdkMsTUFBTSxPQUFPLGNBQWM7OztZQVgxQixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGdCQUFnQixFQUFFLGVBQWUsQ0FBQztnQkFDMUQsU0FBUyxFQUFFO29CQUNUO3dCQUNFLE9BQU8sRUFBRSxvQkFBb0I7d0JBQzdCLFFBQVEsRUFBRSxZQUFZO3FCQUN2QjtpQkFDRjtnQkFDRCxZQUFZLEVBQUUsVUFBVTtnQkFDeEIsT0FBTyxFQUFFLFVBQVU7YUFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56RHJvcERvd25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2Ryb3Bkb3duJztcbmltcG9ydCB7IE56VG9vbFRpcE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvdG9vbHRpcCc7XG5cbmltcG9ydCB7IEFMQUlOX1RIRU1FX0JUTl9LRVlTLCBUaGVtZUJ0bkNvbXBvbmVudCB9IGZyb20gJy4vdGhlbWUtYnRuLmNvbXBvbmVudCc7XG5cbmNvbnN0IENPTVBPTkVOVFMgPSBbVGhlbWVCdG5Db21wb25lbnRdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBOekRyb3BEb3duTW9kdWxlLCBOelRvb2xUaXBNb2R1bGVdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBBTEFJTl9USEVNRV9CVE5fS0VZUyxcbiAgICAgIHVzZVZhbHVlOiAnc2l0ZS10aGVtZScsXG4gICAgfSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBDT01QT05FTlRTLFxuICBleHBvcnRzOiBDT01QT05FTlRTLFxufSlcbmV4cG9ydCBjbGFzcyBUaGVtZUJ0bk1vZHVsZSB7fVxuIl19