/**
 * @fileoverview added by tsickle
 * Generated from: setting-drawer.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DelonUtilModule } from '@delon/util';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { SettingDrawerItemComponent } from './setting-drawer-item.component';
import { SettingDrawerComponent } from './setting-drawer.component';
/** @type {?} */
const COMPONENTS = [SettingDrawerItemComponent, SettingDrawerComponent];
export class SettingDrawerModule {
}
SettingDrawerModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    DelonUtilModule,
                    NzDrawerModule,
                    NzToolTipModule,
                    NzDividerModule,
                    NzTabsModule,
                    NzSwitchModule,
                    NzAlertModule,
                    NzIconModule,
                    NzInputModule,
                    NzInputNumberModule,
                    NzButtonModule,
                ],
                declarations: [...COMPONENTS],
                exports: [...COMPONENTS],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZy1kcmF3ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lL3NldHRpbmctZHJhd2VyLyIsInNvdXJjZXMiOlsic2V0dGluZy1kcmF3ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDOUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDcEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDakUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFeEQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7O01BRTlELFVBQVUsR0FBRyxDQUFDLDBCQUEwQixFQUFFLHNCQUFzQixDQUFDO0FBcUJ2RSxNQUFNLE9BQU8sbUJBQW1COzs7WUFuQi9CLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixXQUFXO29CQUNYLGVBQWU7b0JBQ2YsY0FBYztvQkFDZCxlQUFlO29CQUNmLGVBQWU7b0JBQ2YsWUFBWTtvQkFDWixjQUFjO29CQUNkLGFBQWE7b0JBQ2IsWUFBWTtvQkFDWixhQUFhO29CQUNiLG1CQUFtQjtvQkFDbkIsY0FBYztpQkFDZjtnQkFDRCxZQUFZLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQztnQkFDN0IsT0FBTyxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUM7YUFDekIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRGVsb25VdGlsTW9kdWxlIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgTnpBbGVydE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvYWxlcnQnO1xuaW1wb3J0IHsgTnpCdXR0b25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2J1dHRvbic7XG5pbXBvcnQgeyBOekRpdmlkZXJNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2RpdmlkZXInO1xuaW1wb3J0IHsgTnpEcmF3ZXJNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2RyYXdlcic7XG5pbXBvcnQgeyBOekljb25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2ljb24nO1xuaW1wb3J0IHsgTnpJbnB1dE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaW5wdXQnO1xuaW1wb3J0IHsgTnpJbnB1dE51bWJlck1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaW5wdXQtbnVtYmVyJztcbmltcG9ydCB7IE56U3dpdGNoTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9zd2l0Y2gnO1xuaW1wb3J0IHsgTnpUYWJzTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC90YWJzJztcbmltcG9ydCB7IE56VG9vbFRpcE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvdG9vbHRpcCc7XG5cbmltcG9ydCB7IFNldHRpbmdEcmF3ZXJJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9zZXR0aW5nLWRyYXdlci1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZXR0aW5nRHJhd2VyQ29tcG9uZW50IH0gZnJvbSAnLi9zZXR0aW5nLWRyYXdlci5jb21wb25lbnQnO1xuXG5jb25zdCBDT01QT05FTlRTID0gW1NldHRpbmdEcmF3ZXJJdGVtQ29tcG9uZW50LCBTZXR0aW5nRHJhd2VyQ29tcG9uZW50XTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBEZWxvblV0aWxNb2R1bGUsXG4gICAgTnpEcmF3ZXJNb2R1bGUsXG4gICAgTnpUb29sVGlwTW9kdWxlLFxuICAgIE56RGl2aWRlck1vZHVsZSxcbiAgICBOelRhYnNNb2R1bGUsXG4gICAgTnpTd2l0Y2hNb2R1bGUsXG4gICAgTnpBbGVydE1vZHVsZSxcbiAgICBOekljb25Nb2R1bGUsXG4gICAgTnpJbnB1dE1vZHVsZSxcbiAgICBOeklucHV0TnVtYmVyTW9kdWxlLFxuICAgIE56QnV0dG9uTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5DT01QT05FTlRTXSxcbiAgZXhwb3J0czogWy4uLkNPTVBPTkVOVFNdLFxufSlcbmV4cG9ydCBjbGFzcyBTZXR0aW5nRHJhd2VyTW9kdWxlIHt9XG4iXX0=