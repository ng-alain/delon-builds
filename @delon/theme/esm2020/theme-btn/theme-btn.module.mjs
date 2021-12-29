import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { ALAIN_THEME_BTN_KEYS, ThemeBtnComponent } from './theme-btn.component';
import * as i0 from "@angular/core";
const COMPONENTS = [ThemeBtnComponent];
export class ThemeBtnModule {
}
ThemeBtnModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: ThemeBtnModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ThemeBtnModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: ThemeBtnModule, declarations: [ThemeBtnComponent], imports: [CommonModule, NzDropDownModule, NzToolTipModule], exports: [ThemeBtnComponent] });
ThemeBtnModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: ThemeBtnModule, providers: [
        {
            provide: ALAIN_THEME_BTN_KEYS,
            useValue: 'site-theme'
        }
    ], imports: [[CommonModule, NzDropDownModule, NzToolTipModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: ThemeBtnModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, NzDropDownModule, NzToolTipModule],
                    providers: [
                        {
                            provide: ALAIN_THEME_BTN_KEYS,
                            useValue: 'site-theme'
                        }
                    ],
                    declarations: COMPONENTS,
                    exports: COMPONENTS
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnRuLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lL3RoZW1lLWJ0bi90aGVtZS1idG4ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzFELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUV4RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFFaEYsTUFBTSxVQUFVLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBYXZDLE1BQU0sT0FBTyxjQUFjOzsyR0FBZCxjQUFjOzRHQUFkLGNBQWMsaUJBYlAsaUJBQWlCLGFBR3pCLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLGFBSHZDLGlCQUFpQjs0R0FheEIsY0FBYyxhQVRkO1FBQ1Q7WUFDRSxPQUFPLEVBQUUsb0JBQW9CO1lBQzdCLFFBQVEsRUFBRSxZQUFZO1NBQ3ZCO0tBQ0YsWUFOUSxDQUFDLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLENBQUM7MkZBVS9DLGNBQWM7a0JBWDFCLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGdCQUFnQixFQUFFLGVBQWUsQ0FBQztvQkFDMUQsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxvQkFBb0I7NEJBQzdCLFFBQVEsRUFBRSxZQUFZO3lCQUN2QjtxQkFDRjtvQkFDRCxZQUFZLEVBQUUsVUFBVTtvQkFDeEIsT0FBTyxFQUFFLFVBQVU7aUJBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE56RHJvcERvd25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2Ryb3Bkb3duJztcbmltcG9ydCB7IE56VG9vbFRpcE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvdG9vbHRpcCc7XG5cbmltcG9ydCB7IEFMQUlOX1RIRU1FX0JUTl9LRVlTLCBUaGVtZUJ0bkNvbXBvbmVudCB9IGZyb20gJy4vdGhlbWUtYnRuLmNvbXBvbmVudCc7XG5cbmNvbnN0IENPTVBPTkVOVFMgPSBbVGhlbWVCdG5Db21wb25lbnRdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBOekRyb3BEb3duTW9kdWxlLCBOelRvb2xUaXBNb2R1bGVdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBBTEFJTl9USEVNRV9CVE5fS0VZUyxcbiAgICAgIHVzZVZhbHVlOiAnc2l0ZS10aGVtZSdcbiAgICB9XG4gIF0sXG4gIGRlY2xhcmF0aW9uczogQ09NUE9ORU5UUyxcbiAgZXhwb3J0czogQ09NUE9ORU5UU1xufSlcbmV4cG9ydCBjbGFzcyBUaGVtZUJ0bk1vZHVsZSB7fVxuIl19