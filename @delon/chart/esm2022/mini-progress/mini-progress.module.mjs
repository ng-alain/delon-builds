import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DelonLocaleModule } from '@delon/theme';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { G2MiniProgressComponent } from './mini-progress.component';
import * as i0 from "@angular/core";
const COMPONENTS = [G2MiniProgressComponent];
export class G2MiniProgressModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: G2MiniProgressModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.0.4", ngImport: i0, type: G2MiniProgressModule, declarations: [G2MiniProgressComponent], imports: [CommonModule, DelonLocaleModule, NzToolTipModule], exports: [G2MiniProgressComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: G2MiniProgressModule, imports: [CommonModule, DelonLocaleModule, NzToolTipModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: G2MiniProgressModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, DelonLocaleModule, NzToolTipModule],
                    declarations: COMPONENTS,
                    exports: COMPONENTS
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluaS1wcm9ncmVzcy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jaGFydC9taW5pLXByb2dyZXNzL21pbmktcHJvZ3Jlc3MubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFeEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7O0FBRXBFLE1BQU0sVUFBVSxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQU83QyxNQUFNLE9BQU8sb0JBQW9COzhHQUFwQixvQkFBb0I7K0dBQXBCLG9CQUFvQixpQkFQYix1QkFBdUIsYUFHL0IsWUFBWSxFQUFFLGlCQUFpQixFQUFFLGVBQWUsYUFIeEMsdUJBQXVCOytHQU85QixvQkFBb0IsWUFKckIsWUFBWSxFQUFFLGlCQUFpQixFQUFFLGVBQWU7OzJGQUkvQyxvQkFBb0I7a0JBTGhDLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGlCQUFpQixFQUFFLGVBQWUsQ0FBQztvQkFDM0QsWUFBWSxFQUFFLFVBQVU7b0JBQ3hCLE9BQU8sRUFBRSxVQUFVO2lCQUNwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEZWxvbkxvY2FsZU1vZHVsZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBOelRvb2xUaXBNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3Rvb2x0aXAnO1xuXG5pbXBvcnQgeyBHMk1pbmlQcm9ncmVzc0NvbXBvbmVudCB9IGZyb20gJy4vbWluaS1wcm9ncmVzcy5jb21wb25lbnQnO1xuXG5jb25zdCBDT01QT05FTlRTID0gW0cyTWluaVByb2dyZXNzQ29tcG9uZW50XTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRGVsb25Mb2NhbGVNb2R1bGUsIE56VG9vbFRpcE1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogQ09NUE9ORU5UUyxcbiAgZXhwb3J0czogQ09NUE9ORU5UU1xufSlcbmV4cG9ydCBjbGFzcyBHMk1pbmlQcm9ncmVzc01vZHVsZSB7fVxuIl19