import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorCollectModule } from '@delon/abc/error-collect';
import { DelonUtilModule } from '@delon/util';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { FooterToolbarComponent } from './footer-toolbar.component';
import * as i0 from "@angular/core";
const COMPONENTS = [FooterToolbarComponent];
export class FooterToolbarModule {
}
/** @nocollapse */ FooterToolbarModule.ɵmod = i0.ɵɵdefineNgModule({ type: FooterToolbarModule });
/** @nocollapse */ FooterToolbarModule.ɵinj = i0.ɵɵdefineInjector({ factory: function FooterToolbarModule_Factory(t) { return new (t || FooterToolbarModule)(); }, imports: [[CommonModule, ErrorCollectModule, DelonUtilModule, NzOutletModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FooterToolbarModule, { declarations: [FooterToolbarComponent], imports: [CommonModule, ErrorCollectModule, DelonUtilModule, NzOutletModule], exports: [FooterToolbarComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FooterToolbarModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, ErrorCollectModule, DelonUtilModule, NzOutletModule],
                declarations: [...COMPONENTS],
                exports: [...COMPONENTS],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLXRvb2xiYXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL2Zvb3Rlci10b29sYmFyL2Zvb3Rlci10b29sYmFyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7QUFFcEUsTUFBTSxVQUFVLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBTzVDLE1BQU0sT0FBTyxtQkFBbUI7OzBFQUFuQixtQkFBbUI7d0lBQW5CLG1CQUFtQixrQkFKckIsQ0FBQyxZQUFZLEVBQUUsa0JBQWtCLEVBQUUsZUFBZSxFQUFFLGNBQWMsQ0FBQzt3RkFJakUsbUJBQW1CLG1CQVBaLHNCQUFzQixhQUc5QixZQUFZLEVBQUUsa0JBQWtCLEVBQUUsZUFBZSxFQUFFLGNBQWMsYUFIekQsc0JBQXNCO3VGQU83QixtQkFBbUI7Y0FML0IsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxrQkFBa0IsRUFBRSxlQUFlLEVBQUUsY0FBYyxDQUFDO2dCQUM1RSxZQUFZLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQztnQkFDN0IsT0FBTyxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUM7YUFDekIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVycm9yQ29sbGVjdE1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvZXJyb3ItY29sbGVjdCc7XG5pbXBvcnQgeyBEZWxvblV0aWxNb2R1bGUgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBOek91dGxldE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9vdXRsZXQnO1xuaW1wb3J0IHsgRm9vdGVyVG9vbGJhckNvbXBvbmVudCB9IGZyb20gJy4vZm9vdGVyLXRvb2xiYXIuY29tcG9uZW50JztcblxuY29uc3QgQ09NUE9ORU5UUyA9IFtGb290ZXJUb29sYmFyQ29tcG9uZW50XTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRXJyb3JDb2xsZWN0TW9kdWxlLCBEZWxvblV0aWxNb2R1bGUsIE56T3V0bGV0TW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbLi4uQ09NUE9ORU5UU10sXG4gIGV4cG9ydHM6IFsuLi5DT01QT05FTlRTXSxcbn0pXG5leHBvcnQgY2xhc3MgRm9vdGVyVG9vbGJhck1vZHVsZSB7fVxuIl19