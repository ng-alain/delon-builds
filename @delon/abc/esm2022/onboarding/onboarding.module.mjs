import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DelonLocaleModule } from '@delon/theme';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzNoAnimationModule } from 'ng-zorro-antd/core/no-animation';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { OnboardingComponent } from './onboarding.component';
import { OnboardingService } from './onboarding.service';
import * as i0 from "@angular/core";
const COMPONENTS = [OnboardingComponent];
class OnboardingModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: OnboardingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.1.5", ngImport: i0, type: OnboardingModule, declarations: [OnboardingComponent], imports: [CommonModule, DelonLocaleModule, NzPopoverModule, NzOutletModule, NzButtonModule, NzNoAnimationModule], exports: [OnboardingComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: OnboardingModule, providers: [OnboardingService], imports: [CommonModule, DelonLocaleModule, NzPopoverModule, NzOutletModule, NzButtonModule, NzNoAnimationModule] }); }
}
export { OnboardingModule };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: OnboardingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, DelonLocaleModule, NzPopoverModule, NzOutletModule, NzButtonModule, NzNoAnimationModule],
                    declarations: COMPONENTS,
                    providers: [OnboardingService],
                    exports: COMPONENTS
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvb25ib2FyZGluZy9vbmJvYXJkaW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDakQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFeEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBRXpELE1BQU0sVUFBVSxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUV6QyxNQU1hLGdCQUFnQjs4R0FBaEIsZ0JBQWdCOytHQUFoQixnQkFBZ0IsaUJBUlQsbUJBQW1CLGFBRzNCLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxtQkFBbUIsYUFIN0YsbUJBQW1COytHQVExQixnQkFBZ0IsYUFIaEIsQ0FBQyxpQkFBaUIsQ0FBQyxZQUZwQixZQUFZLEVBQUUsaUJBQWlCLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsbUJBQW1COztTQUtwRyxnQkFBZ0I7MkZBQWhCLGdCQUFnQjtrQkFONUIsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsbUJBQW1CLENBQUM7b0JBQ2hILFlBQVksRUFBRSxVQUFVO29CQUN4QixTQUFTLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztvQkFDOUIsT0FBTyxFQUFFLFVBQVU7aUJBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERlbG9uTG9jYWxlTW9kdWxlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IE56QnV0dG9uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9idXR0b24nO1xuaW1wb3J0IHsgTnpOb0FuaW1hdGlvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9uby1hbmltYXRpb24nO1xuaW1wb3J0IHsgTnpPdXRsZXRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvb3V0bGV0JztcbmltcG9ydCB7IE56UG9wb3Zlck1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvcG9wb3Zlcic7XG5cbmltcG9ydCB7IE9uYm9hcmRpbmdDb21wb25lbnQgfSBmcm9tICcuL29uYm9hcmRpbmcuY29tcG9uZW50JztcbmltcG9ydCB7IE9uYm9hcmRpbmdTZXJ2aWNlIH0gZnJvbSAnLi9vbmJvYXJkaW5nLnNlcnZpY2UnO1xuXG5jb25zdCBDT01QT05FTlRTID0gW09uYm9hcmRpbmdDb21wb25lbnRdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBEZWxvbkxvY2FsZU1vZHVsZSwgTnpQb3BvdmVyTW9kdWxlLCBOek91dGxldE1vZHVsZSwgTnpCdXR0b25Nb2R1bGUsIE56Tm9BbmltYXRpb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IENPTVBPTkVOVFMsXG4gIHByb3ZpZGVyczogW09uYm9hcmRpbmdTZXJ2aWNlXSxcbiAgZXhwb3J0czogQ09NUE9ORU5UU1xufSlcbmV4cG9ydCBjbGFzcyBPbmJvYXJkaW5nTW9kdWxlIHt9XG4iXX0=