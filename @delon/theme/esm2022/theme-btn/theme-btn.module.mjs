import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { ALAIN_THEME_BTN_KEYS, ThemeBtnComponent } from './theme-btn.component';
import * as i0 from "@angular/core";
const COMPONENTS = [ThemeBtnComponent];
export class ThemeBtnModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.9", ngImport: i0, type: ThemeBtnModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.9", ngImport: i0, type: ThemeBtnModule, declarations: [ThemeBtnComponent], imports: [CommonModule, NzDropDownModule, NzToolTipModule], exports: [ThemeBtnComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.9", ngImport: i0, type: ThemeBtnModule, providers: [
            {
                provide: ALAIN_THEME_BTN_KEYS,
                useValue: 'site-theme'
            }
        ], imports: [CommonModule, NzDropDownModule, NzToolTipModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.9", ngImport: i0, type: ThemeBtnModule, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnRuLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lL3RoZW1lLWJ0bi90aGVtZS1idG4ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzFELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUV4RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFFaEYsTUFBTSxVQUFVLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBYXZDLE1BQU0sT0FBTyxjQUFjOzhHQUFkLGNBQWM7K0dBQWQsY0FBYyxpQkFiUCxpQkFBaUIsYUFHekIsWUFBWSxFQUFFLGdCQUFnQixFQUFFLGVBQWUsYUFIdkMsaUJBQWlCOytHQWF4QixjQUFjLGFBVGQ7WUFDVDtnQkFDRSxPQUFPLEVBQUUsb0JBQW9CO2dCQUM3QixRQUFRLEVBQUUsWUFBWTthQUN2QjtTQUNGLFlBTlMsWUFBWSxFQUFFLGdCQUFnQixFQUFFLGVBQWU7OzJGQVU5QyxjQUFjO2tCQVgxQixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLENBQUM7b0JBQzFELFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsb0JBQW9COzRCQUM3QixRQUFRLEVBQUUsWUFBWTt5QkFDdkI7cUJBQ0Y7b0JBQ0QsWUFBWSxFQUFFLFVBQVU7b0JBQ3hCLE9BQU8sRUFBRSxVQUFVO2lCQUNwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOekRyb3BEb3duTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9kcm9wZG93bic7XG5pbXBvcnQgeyBOelRvb2xUaXBNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3Rvb2x0aXAnO1xuXG5pbXBvcnQgeyBBTEFJTl9USEVNRV9CVE5fS0VZUywgVGhlbWVCdG5Db21wb25lbnQgfSBmcm9tICcuL3RoZW1lLWJ0bi5jb21wb25lbnQnO1xuXG5jb25zdCBDT01QT05FTlRTID0gW1RoZW1lQnRuQ29tcG9uZW50XTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTnpEcm9wRG93bk1vZHVsZSwgTnpUb29sVGlwTW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogQUxBSU5fVEhFTUVfQlROX0tFWVMsXG4gICAgICB1c2VWYWx1ZTogJ3NpdGUtdGhlbWUnXG4gICAgfVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IENPTVBPTkVOVFMsXG4gIGV4cG9ydHM6IENPTVBPTkVOVFNcbn0pXG5leHBvcnQgY2xhc3MgVGhlbWVCdG5Nb2R1bGUge31cbiJdfQ==