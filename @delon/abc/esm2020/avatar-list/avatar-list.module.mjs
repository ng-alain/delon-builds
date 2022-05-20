import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { AvatarListItemComponent } from './avatar-list-item.component';
import { AvatarListComponent } from './avatar-list.component';
import * as i0 from "@angular/core";
const COMPONENTS = [AvatarListComponent, AvatarListItemComponent];
export class AvatarListModule {
}
AvatarListModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.9", ngImport: i0, type: AvatarListModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AvatarListModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.9", ngImport: i0, type: AvatarListModule, declarations: [AvatarListComponent, AvatarListItemComponent], imports: [CommonModule, NzAvatarModule, NzToolTipModule], exports: [AvatarListComponent, AvatarListItemComponent] });
AvatarListModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.9", ngImport: i0, type: AvatarListModule, imports: [[CommonModule, NzAvatarModule, NzToolTipModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.9", ngImport: i0, type: AvatarListModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, NzAvatarModule, NzToolTipModule],
                    declarations: COMPONENTS,
                    exports: COMPONENTS
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLWxpc3QubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL2F2YXRhci1saXN0L2F2YXRhci1saXN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXhELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDOztBQUU5RCxNQUFNLFVBQVUsR0FBRyxDQUFDLG1CQUFtQixFQUFFLHVCQUF1QixDQUFDLENBQUM7QUFPbEUsTUFBTSxPQUFPLGdCQUFnQjs7NkdBQWhCLGdCQUFnQjs4R0FBaEIsZ0JBQWdCLGlCQVBULG1CQUFtQixFQUFFLHVCQUF1QixhQUdwRCxZQUFZLEVBQUUsY0FBYyxFQUFFLGVBQWUsYUFIckMsbUJBQW1CLEVBQUUsdUJBQXVCOzhHQU9uRCxnQkFBZ0IsWUFKbEIsQ0FBQyxZQUFZLEVBQUUsY0FBYyxFQUFFLGVBQWUsQ0FBQzsyRkFJN0MsZ0JBQWdCO2tCQUw1QixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxjQUFjLEVBQUUsZUFBZSxDQUFDO29CQUN4RCxZQUFZLEVBQUUsVUFBVTtvQkFDeEIsT0FBTyxFQUFFLFVBQVU7aUJBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE56QXZhdGFyTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9hdmF0YXInO1xuaW1wb3J0IHsgTnpUb29sVGlwTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC90b29sdGlwJztcblxuaW1wb3J0IHsgQXZhdGFyTGlzdEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2F2YXRhci1saXN0LWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IEF2YXRhckxpc3RDb21wb25lbnQgfSBmcm9tICcuL2F2YXRhci1saXN0LmNvbXBvbmVudCc7XG5cbmNvbnN0IENPTVBPTkVOVFMgPSBbQXZhdGFyTGlzdENvbXBvbmVudCwgQXZhdGFyTGlzdEl0ZW1Db21wb25lbnRdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBOekF2YXRhck1vZHVsZSwgTnpUb29sVGlwTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBDT01QT05FTlRTLFxuICBleHBvcnRzOiBDT01QT05FTlRTXG59KVxuZXhwb3J0IGNsYXNzIEF2YXRhckxpc3RNb2R1bGUge31cbiJdfQ==