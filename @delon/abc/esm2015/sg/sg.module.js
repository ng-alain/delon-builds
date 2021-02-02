import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SGContainerComponent } from './sg-container.component';
import { SGComponent } from './sg.component';
import * as i0 from "@angular/core";
const COMPONENTS = [SGContainerComponent, SGComponent];
export class SGModule {
}
/** @nocollapse */ SGModule.ɵmod = i0.ɵɵdefineNgModule({ type: SGModule });
/** @nocollapse */ SGModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SGModule_Factory(t) { return new (t || SGModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SGModule, { declarations: [SGContainerComponent, SGComponent], imports: [CommonModule], exports: [SGContainerComponent, SGComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SGModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: COMPONENTS,
                exports: COMPONENTS,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2cubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3NnL3NnLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBRTdDLE1BQU0sVUFBVSxHQUFHLENBQUMsb0JBQW9CLEVBQUUsV0FBVyxDQUFDLENBQUM7QUFPdkQsTUFBTSxPQUFPLFFBQVE7OytEQUFSLFFBQVE7a0hBQVIsUUFBUSxrQkFKVixDQUFDLFlBQVksQ0FBQzt3RkFJWixRQUFRLG1CQVBELG9CQUFvQixFQUFFLFdBQVcsYUFHekMsWUFBWSxhQUhKLG9CQUFvQixFQUFFLFdBQVc7dUZBT3hDLFFBQVE7Y0FMcEIsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDdkIsWUFBWSxFQUFFLFVBQVU7Z0JBQ3hCLE9BQU8sRUFBRSxVQUFVO2FBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTR0NvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vc2ctY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTR0NvbXBvbmVudCB9IGZyb20gJy4vc2cuY29tcG9uZW50JztcblxuY29uc3QgQ09NUE9ORU5UUyA9IFtTR0NvbnRhaW5lckNvbXBvbmVudCwgU0dDb21wb25lbnRdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBDT01QT05FTlRTLFxuICBleHBvcnRzOiBDT01QT05FTlRTLFxufSlcbmV4cG9ydCBjbGFzcyBTR01vZHVsZSB7fVxuIl19