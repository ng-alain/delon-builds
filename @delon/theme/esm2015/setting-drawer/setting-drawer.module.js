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
import * as i0 from "@angular/core";
const COMPONENTS = [SettingDrawerItemComponent, SettingDrawerComponent];
export class SettingDrawerModule {
}
/** @nocollapse */ SettingDrawerModule.ɵmod = i0.ɵɵdefineNgModule({ type: SettingDrawerModule });
/** @nocollapse */ SettingDrawerModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SettingDrawerModule_Factory(t) { return new (t || SettingDrawerModule)(); }, imports: [[
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
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SettingDrawerModule, { declarations: [SettingDrawerItemComponent, SettingDrawerComponent], imports: [CommonModule,
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
        NzButtonModule], exports: [SettingDrawerItemComponent, SettingDrawerComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SettingDrawerModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZy1kcmF3ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdGhlbWUvc2V0dGluZy1kcmF3ZXIvc2V0dGluZy1kcmF3ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXhELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDOztBQUVwRSxNQUFNLFVBQVUsR0FBRyxDQUFDLDBCQUEwQixFQUFFLHNCQUFzQixDQUFDLENBQUM7QUFxQnhFLE1BQU0sT0FBTyxtQkFBbUI7OzBFQUFuQixtQkFBbUI7d0lBQW5CLG1CQUFtQixrQkFsQnJCO1lBQ1AsWUFBWTtZQUNaLFdBQVc7WUFDWCxlQUFlO1lBQ2YsY0FBYztZQUNkLGVBQWU7WUFDZixlQUFlO1lBQ2YsWUFBWTtZQUNaLGNBQWM7WUFDZCxhQUFhO1lBQ2IsWUFBWTtZQUNaLGFBQWE7WUFDYixtQkFBbUI7WUFDbkIsY0FBYztTQUNmO3dGQUlVLG1CQUFtQixtQkFyQlosMEJBQTBCLEVBQUUsc0JBQXNCLGFBSWxFLFlBQVk7UUFDWixXQUFXO1FBQ1gsZUFBZTtRQUNmLGNBQWM7UUFDZCxlQUFlO1FBQ2YsZUFBZTtRQUNmLFlBQVk7UUFDWixjQUFjO1FBQ2QsYUFBYTtRQUNiLFlBQVk7UUFDWixhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLGNBQWMsYUFoQkUsMEJBQTBCLEVBQUUsc0JBQXNCO3VGQXFCekQsbUJBQW1CO2NBbkIvQixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxlQUFlO29CQUNmLGNBQWM7b0JBQ2QsZUFBZTtvQkFDZixlQUFlO29CQUNmLFlBQVk7b0JBQ1osY0FBYztvQkFDZCxhQUFhO29CQUNiLFlBQVk7b0JBQ1osYUFBYTtvQkFDYixtQkFBbUI7b0JBQ25CLGNBQWM7aUJBQ2Y7Z0JBQ0QsWUFBWSxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUM7Z0JBQzdCLE9BQU8sRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDO2FBQ3pCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IERlbG9uVXRpbE1vZHVsZSB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IE56QWxlcnRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2FsZXJ0JztcbmltcG9ydCB7IE56QnV0dG9uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9idXR0b24nO1xuaW1wb3J0IHsgTnpEaXZpZGVyTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9kaXZpZGVyJztcbmltcG9ydCB7IE56RHJhd2VyTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9kcmF3ZXInO1xuaW1wb3J0IHsgTnpJY29uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pY29uJztcbmltcG9ydCB7IE56SW5wdXRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2lucHV0JztcbmltcG9ydCB7IE56SW5wdXROdW1iZXJNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2lucHV0LW51bWJlcic7XG5pbXBvcnQgeyBOelN3aXRjaE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvc3dpdGNoJztcbmltcG9ydCB7IE56VGFic01vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvdGFicyc7XG5pbXBvcnQgeyBOelRvb2xUaXBNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3Rvb2x0aXAnO1xuXG5pbXBvcnQgeyBTZXR0aW5nRHJhd2VySXRlbUNvbXBvbmVudCB9IGZyb20gJy4vc2V0dGluZy1kcmF3ZXItaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2V0dGluZ0RyYXdlckNvbXBvbmVudCB9IGZyb20gJy4vc2V0dGluZy1kcmF3ZXIuY29tcG9uZW50JztcblxuY29uc3QgQ09NUE9ORU5UUyA9IFtTZXR0aW5nRHJhd2VySXRlbUNvbXBvbmVudCwgU2V0dGluZ0RyYXdlckNvbXBvbmVudF07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgRGVsb25VdGlsTW9kdWxlLFxuICAgIE56RHJhd2VyTW9kdWxlLFxuICAgIE56VG9vbFRpcE1vZHVsZSxcbiAgICBOekRpdmlkZXJNb2R1bGUsXG4gICAgTnpUYWJzTW9kdWxlLFxuICAgIE56U3dpdGNoTW9kdWxlLFxuICAgIE56QWxlcnRNb2R1bGUsXG4gICAgTnpJY29uTW9kdWxlLFxuICAgIE56SW5wdXRNb2R1bGUsXG4gICAgTnpJbnB1dE51bWJlck1vZHVsZSxcbiAgICBOekJ1dHRvbk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbLi4uQ09NUE9ORU5UU10sXG4gIGV4cG9ydHM6IFsuLi5DT01QT05FTlRTXSxcbn0pXG5leHBvcnQgY2xhc3MgU2V0dGluZ0RyYXdlck1vZHVsZSB7fVxuIl19