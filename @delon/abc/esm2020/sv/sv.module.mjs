import { ObserversModule } from '@angular/cdk/observers';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { SVContainerComponent, SVTitleComponent } from './sv-container.component';
import { SVValueComponent } from './sv-value.component';
import { SVComponent } from './sv.component';
import * as i0 from "@angular/core";
const COMPONENTS = [SVContainerComponent, SVComponent, SVTitleComponent, SVValueComponent];
export class SVModule {
}
SVModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: SVModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SVModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: SVModule, declarations: [SVContainerComponent, SVComponent, SVTitleComponent, SVValueComponent], imports: [CommonModule, ObserversModule, NzToolTipModule, NzIconModule, NzOutletModule], exports: [SVContainerComponent, SVComponent, SVTitleComponent, SVValueComponent] });
SVModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: SVModule, imports: [[CommonModule, ObserversModule, NzToolTipModule, NzIconModule, NzOutletModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: SVModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, ObserversModule, NzToolTipModule, NzIconModule, NzOutletModule],
                    declarations: COMPONENTS,
                    exports: COMPONENTS
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3YubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3N2L3N2Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDekQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFeEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUU3QyxNQUFNLFVBQVUsR0FBRyxDQUFDLG9CQUFvQixFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0FBTzNGLE1BQU0sT0FBTyxRQUFROztxR0FBUixRQUFRO3NHQUFSLFFBQVEsaUJBUEQsb0JBQW9CLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLGdCQUFnQixhQUc3RSxZQUFZLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsY0FBYyxhQUhwRSxvQkFBb0IsRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsZ0JBQWdCO3NHQU81RSxRQUFRLFlBSlYsQ0FBQyxZQUFZLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsY0FBYyxDQUFDOzJGQUk1RSxRQUFRO2tCQUxwQixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxjQUFjLENBQUM7b0JBQ3ZGLFlBQVksRUFBRSxVQUFVO29CQUN4QixPQUFPLEVBQUUsVUFBVTtpQkFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZlcnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb2JzZXJ2ZXJzJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOek91dGxldE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9vdXRsZXQnO1xuaW1wb3J0IHsgTnpJY29uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pY29uJztcbmltcG9ydCB7IE56VG9vbFRpcE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvdG9vbHRpcCc7XG5cbmltcG9ydCB7IFNWQ29udGFpbmVyQ29tcG9uZW50LCBTVlRpdGxlQ29tcG9uZW50IH0gZnJvbSAnLi9zdi1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFNWVmFsdWVDb21wb25lbnQgfSBmcm9tICcuL3N2LXZhbHVlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTVkNvbXBvbmVudCB9IGZyb20gJy4vc3YuY29tcG9uZW50JztcblxuY29uc3QgQ09NUE9ORU5UUyA9IFtTVkNvbnRhaW5lckNvbXBvbmVudCwgU1ZDb21wb25lbnQsIFNWVGl0bGVDb21wb25lbnQsIFNWVmFsdWVDb21wb25lbnRdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBPYnNlcnZlcnNNb2R1bGUsIE56VG9vbFRpcE1vZHVsZSwgTnpJY29uTW9kdWxlLCBOek91dGxldE1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogQ09NUE9ORU5UUyxcbiAgZXhwb3J0czogQ09NUE9ORU5UU1xufSlcbmV4cG9ydCBjbGFzcyBTVk1vZHVsZSB7fVxuIl19