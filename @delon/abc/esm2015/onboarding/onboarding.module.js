import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzNoAnimationModule } from 'ng-zorro-antd/core/no-animation';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { DelonLocaleModule } from '@delon/theme';
import { OnboardingComponent } from './onboarding.component';
const COMPONENTS = [OnboardingComponent];
export class OnboardingModule {
}
OnboardingModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, DelonLocaleModule, NzPopoverModule, NzOutletModule, NzButtonModule, NzNoAnimationModule],
                declarations: COMPONENTS,
                entryComponents: COMPONENTS,
                exports: COMPONENTS
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvb25ib2FyZGluZy9vbmJvYXJkaW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUV4RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFakQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFN0QsTUFBTSxVQUFVLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBUXpDLE1BQU0sT0FBTyxnQkFBZ0I7OztZQU41QixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGlCQUFpQixFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLG1CQUFtQixDQUFDO2dCQUNoSCxZQUFZLEVBQUUsVUFBVTtnQkFDeEIsZUFBZSxFQUFFLFVBQVU7Z0JBQzNCLE9BQU8sRUFBRSxVQUFVO2FBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE56QnV0dG9uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9idXR0b24nO1xuaW1wb3J0IHsgTnpOb0FuaW1hdGlvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9uby1hbmltYXRpb24nO1xuaW1wb3J0IHsgTnpPdXRsZXRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvb3V0bGV0JztcbmltcG9ydCB7IE56UG9wb3Zlck1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvcG9wb3Zlcic7XG5cbmltcG9ydCB7IERlbG9uTG9jYWxlTW9kdWxlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcblxuaW1wb3J0IHsgT25ib2FyZGluZ0NvbXBvbmVudCB9IGZyb20gJy4vb25ib2FyZGluZy5jb21wb25lbnQnO1xuXG5jb25zdCBDT01QT05FTlRTID0gW09uYm9hcmRpbmdDb21wb25lbnRdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBEZWxvbkxvY2FsZU1vZHVsZSwgTnpQb3BvdmVyTW9kdWxlLCBOek91dGxldE1vZHVsZSwgTnpCdXR0b25Nb2R1bGUsIE56Tm9BbmltYXRpb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IENPTVBPTkVOVFMsXG4gIGVudHJ5Q29tcG9uZW50czogQ09NUE9ORU5UUyxcbiAgZXhwb3J0czogQ09NUE9ORU5UU1xufSlcbmV4cG9ydCBjbGFzcyBPbmJvYXJkaW5nTW9kdWxlIHt9XG4iXX0=