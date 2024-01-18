import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FullContentToggleDirective } from './full-content-toggle.directive';
import { FullContentComponent } from './full-content.component';
import * as i0 from "@angular/core";
const COMPONENTS = [FullContentComponent, FullContentToggleDirective];
export class FullContentModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: FullContentModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.1.0", ngImport: i0, type: FullContentModule, imports: [CommonModule, FullContentComponent, FullContentToggleDirective], exports: [FullContentComponent, FullContentToggleDirective] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: FullContentModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: FullContentModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, ...COMPONENTS],
                    exports: COMPONENTS
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbC1jb250ZW50Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9mdWxsLWNvbnRlbnQvZnVsbC1jb250ZW50Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7QUFFaEUsTUFBTSxVQUFVLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSwwQkFBMEIsQ0FBQyxDQUFDO0FBTXRFLE1BQU0sT0FBTyxpQkFBaUI7OEdBQWpCLGlCQUFpQjsrR0FBakIsaUJBQWlCLFlBSGxCLFlBQVksRUFISixvQkFBb0IsRUFBRSwwQkFBMEIsYUFBaEQsb0JBQW9CLEVBQUUsMEJBQTBCOytHQU12RCxpQkFBaUIsWUFIbEIsWUFBWTs7MkZBR1gsaUJBQWlCO2tCQUo3QixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxHQUFHLFVBQVUsQ0FBQztvQkFDdEMsT0FBTyxFQUFFLFVBQVU7aUJBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZ1bGxDb250ZW50VG9nZ2xlRGlyZWN0aXZlIH0gZnJvbSAnLi9mdWxsLWNvbnRlbnQtdG9nZ2xlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBGdWxsQ29udGVudENvbXBvbmVudCB9IGZyb20gJy4vZnVsbC1jb250ZW50LmNvbXBvbmVudCc7XG5cbmNvbnN0IENPTVBPTkVOVFMgPSBbRnVsbENvbnRlbnRDb21wb25lbnQsIEZ1bGxDb250ZW50VG9nZ2xlRGlyZWN0aXZlXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgLi4uQ09NUE9ORU5UU10sXG4gIGV4cG9ydHM6IENPTVBPTkVOVFNcbn0pXG5leHBvcnQgY2xhc3MgRnVsbENvbnRlbnRNb2R1bGUge31cbiJdfQ==