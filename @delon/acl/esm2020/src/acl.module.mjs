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
            providers: [ACLService]
        };
    }
}
DelonACLModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.7", ngImport: i0, type: DelonACLModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DelonACLModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.7", ngImport: i0, type: DelonACLModule, declarations: [ACLDirective, ACLIfDirective], imports: [CommonModule], exports: [ACLDirective, ACLIfDirective] });
DelonACLModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.7", ngImport: i0, type: DelonACLModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.7", ngImport: i0, type: DelonACLModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: COMPONENTS,
                    exports: COMPONENTS
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FjbC9zcmMvYWNsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUUzQyxNQUFNLFVBQVUsR0FBRyxDQUFDLFlBQVksRUFBRSxjQUFjLENBQUMsQ0FBQztBQU9sRCxNQUFNLE9BQU8sY0FBYztJQUN6QixNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsY0FBYztZQUN4QixTQUFTLEVBQUUsQ0FBQyxVQUFVLENBQUM7U0FDeEIsQ0FBQztJQUNKLENBQUM7OzJHQU5VLGNBQWM7NEdBQWQsY0FBYyxpQkFQUCxZQUFZLEVBQUUsY0FBYyxhQUdwQyxZQUFZLGFBSEosWUFBWSxFQUFFLGNBQWM7NEdBT25DLGNBQWMsWUFKZixZQUFZOzJGQUlYLGNBQWM7a0JBTDFCLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO29CQUN2QixZQUFZLEVBQUUsVUFBVTtvQkFDeEIsT0FBTyxFQUFFLFVBQVU7aUJBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFDTElmRGlyZWN0aXZlIH0gZnJvbSAnLi9hY2wtaWYuZGlyZWN0aXZlJztcbmltcG9ydCB7IEFDTERpcmVjdGl2ZSB9IGZyb20gJy4vYWNsLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBBQ0xTZXJ2aWNlIH0gZnJvbSAnLi9hY2wuc2VydmljZSc7XG5cbmNvbnN0IENPTVBPTkVOVFMgPSBbQUNMRGlyZWN0aXZlLCBBQ0xJZkRpcmVjdGl2ZV07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IENPTVBPTkVOVFMsXG4gIGV4cG9ydHM6IENPTVBPTkVOVFNcbn0pXG5leHBvcnQgY2xhc3MgRGVsb25BQ0xNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPERlbG9uQUNMTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBEZWxvbkFDTE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW0FDTFNlcnZpY2VdXG4gICAgfTtcbiAgfVxufVxuIl19