import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ACLIfDirective } from './acl-if.directive';
import { ACLDirective } from './acl.directive';
import { ACLService } from './acl.service';
import * as i0 from "@angular/core";
const COMPONENTS = [ACLDirective, ACLIfDirective];
export class DelonACLModule {
    static forRoot() {
        return {
            ngModule: DelonACLModule,
            providers: [ACLService],
        };
    }
}
/** @nocollapse */ DelonACLModule.ɵmod = i0.ɵɵdefineNgModule({ type: DelonACLModule });
/** @nocollapse */ DelonACLModule.ɵinj = i0.ɵɵdefineInjector({ factory: function DelonACLModule_Factory(t) { return new (t || DelonACLModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(DelonACLModule, { declarations: [ACLDirective, ACLIfDirective], imports: [CommonModule], exports: [ACLDirective, ACLIfDirective] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DelonACLModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: COMPONENTS,
                exports: COMPONENTS,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FjbC9zcmMvYWNsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUUzQyxNQUFNLFVBQVUsR0FBRyxDQUFDLFlBQVksRUFBRSxjQUFjLENBQUMsQ0FBQztBQU9sRCxNQUFNLE9BQU8sY0FBYztJQUN6QixNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsY0FBYztZQUN4QixTQUFTLEVBQUUsQ0FBQyxVQUFVLENBQUM7U0FDeEIsQ0FBQztJQUNKLENBQUM7O3FFQU5VLGNBQWM7OEhBQWQsY0FBYyxrQkFKaEIsQ0FBQyxZQUFZLENBQUM7d0ZBSVosY0FBYyxtQkFQUCxZQUFZLEVBQUUsY0FBYyxhQUdwQyxZQUFZLGFBSEosWUFBWSxFQUFFLGNBQWM7dUZBT25DLGNBQWM7Y0FMMUIsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDdkIsWUFBWSxFQUFFLFVBQVU7Z0JBQ3hCLE9BQU8sRUFBRSxVQUFVO2FBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBQ0xJZkRpcmVjdGl2ZSB9IGZyb20gJy4vYWNsLWlmLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBBQ0xEaXJlY3RpdmUgfSBmcm9tICcuL2FjbC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQUNMU2VydmljZSB9IGZyb20gJy4vYWNsLnNlcnZpY2UnO1xuXG5jb25zdCBDT01QT05FTlRTID0gW0FDTERpcmVjdGl2ZSwgQUNMSWZEaXJlY3RpdmVdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBDT01QT05FTlRTLFxuICBleHBvcnRzOiBDT01QT05FTlRTLFxufSlcbmV4cG9ydCBjbGFzcyBEZWxvbkFDTE1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8RGVsb25BQ0xNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IERlbG9uQUNMTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbQUNMU2VydmljZV0sXG4gICAgfTtcbiAgfVxufVxuIl19