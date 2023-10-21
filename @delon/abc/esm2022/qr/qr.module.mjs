import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { QRComponent } from './qr.component';
import * as i0 from "@angular/core";
const COMPONENTS = [QRComponent];
/**
 * Will be removed in 18.0.0, please use [nz-qrcode](https://ng.ant.design/components/qr-code) instead.
 * @deprecated
 */
export class QRModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: QRModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.10", ngImport: i0, type: QRModule, declarations: [QRComponent], imports: [CommonModule], exports: [QRComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: QRModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: QRModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: COMPONENTS,
                    exports: COMPONENTS
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3FyL3FyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBRTdDLE1BQU0sVUFBVSxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7QUFFakM7OztHQUdHO0FBTUgsTUFBTSxPQUFPLFFBQVE7K0dBQVIsUUFBUTtnSEFBUixRQUFRLGlCQVhELFdBQVcsYUFPbkIsWUFBWSxhQVBKLFdBQVc7Z0hBV2xCLFFBQVEsWUFKVCxZQUFZOzs0RkFJWCxRQUFRO2tCQUxwQixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDdkIsWUFBWSxFQUFFLFVBQVU7b0JBQ3hCLE9BQU8sRUFBRSxVQUFVO2lCQUNwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBRUkNvbXBvbmVudCB9IGZyb20gJy4vcXIuY29tcG9uZW50JztcblxuY29uc3QgQ09NUE9ORU5UUyA9IFtRUkNvbXBvbmVudF07XG5cbi8qKlxuICogV2lsbCBiZSByZW1vdmVkIGluIDE4LjAuMCwgcGxlYXNlIHVzZSBbbnotcXJjb2RlXShodHRwczovL25nLmFudC5kZXNpZ24vY29tcG9uZW50cy9xci1jb2RlKSBpbnN0ZWFkLlxuICogQGRlcHJlY2F0ZWRcbiAqL1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogQ09NUE9ORU5UUyxcbiAgZXhwb3J0czogQ09NUE9ORU5UU1xufSlcbmV4cG9ydCBjbGFzcyBRUk1vZHVsZSB7fVxuIl19