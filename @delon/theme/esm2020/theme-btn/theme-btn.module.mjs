import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { ALAIN_THEME_BTN_KEYS, ThemeBtnComponent } from './theme-btn.component';
import * as i0 from "@angular/core";
const COMPONENTS = [ThemeBtnComponent];
export class ThemeBtnModule {
}
ThemeBtnModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.5", ngImport: i0, type: ThemeBtnModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ThemeBtnModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.5", ngImport: i0, type: ThemeBtnModule, declarations: [ThemeBtnComponent], imports: [CommonModule, NzDropDownModule, NzToolTipModule], exports: [ThemeBtnComponent] });
ThemeBtnModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.5", ngImport: i0, type: ThemeBtnModule, providers: [
        {
            provide: ALAIN_THEME_BTN_KEYS,
            useValue: 'site-theme'
        }
    ], imports: [CommonModule, NzDropDownModule, NzToolTipModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.5", ngImport: i0, type: ThemeBtnModule, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnRuLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lL3RoZW1lLWJ0bi90aGVtZS1idG4ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzFELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUV4RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFFaEYsTUFBTSxVQUFVLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBYXZDLE1BQU0sT0FBTyxjQUFjOzsyR0FBZCxjQUFjOzRHQUFkLGNBQWMsaUJBYlAsaUJBQWlCLGFBR3pCLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLGFBSHZDLGlCQUFpQjs0R0FheEIsY0FBYyxhQVRkO1FBQ1Q7WUFDRSxPQUFPLEVBQUUsb0JBQW9CO1lBQzdCLFFBQVEsRUFBRSxZQUFZO1NBQ3ZCO0tBQ0YsWUFOUyxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZTsyRkFVOUMsY0FBYztrQkFYMUIsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxDQUFDO29CQUMxRCxTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLG9CQUFvQjs0QkFDN0IsUUFBUSxFQUFFLFlBQVk7eUJBQ3ZCO3FCQUNGO29CQUNELFlBQVksRUFBRSxVQUFVO29CQUN4QixPQUFPLEVBQUUsVUFBVTtpQkFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTnpEcm9wRG93bk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvZHJvcGRvd24nO1xuaW1wb3J0IHsgTnpUb29sVGlwTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC90b29sdGlwJztcblxuaW1wb3J0IHsgQUxBSU5fVEhFTUVfQlROX0tFWVMsIFRoZW1lQnRuQ29tcG9uZW50IH0gZnJvbSAnLi90aGVtZS1idG4uY29tcG9uZW50JztcblxuY29uc3QgQ09NUE9ORU5UUyA9IFtUaGVtZUJ0bkNvbXBvbmVudF07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE56RHJvcERvd25Nb2R1bGUsIE56VG9vbFRpcE1vZHVsZV0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IEFMQUlOX1RIRU1FX0JUTl9LRVlTLFxuICAgICAgdXNlVmFsdWU6ICdzaXRlLXRoZW1lJ1xuICAgIH1cbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBDT01QT05FTlRTLFxuICBleHBvcnRzOiBDT01QT05FTlRTXG59KVxuZXhwb3J0IGNsYXNzIFRoZW1lQnRuTW9kdWxlIHt9XG4iXX0=