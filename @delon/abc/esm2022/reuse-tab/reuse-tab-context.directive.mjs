import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./reuse-tab-context.service";
export class ReuseTabContextDirective {
    constructor(srv) {
        this.srv = srv;
    }
    _onContextMenu(event) {
        this.srv.show.next({
            event,
            item: this.item,
            customContextMenu: this.customContextMenu
        });
        event.preventDefault();
        event.stopPropagation();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ReuseTabContextDirective, deps: [{ token: i1.ReuseTabContextService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.0.4", type: ReuseTabContextDirective, isStandalone: true, selector: "[reuse-tab-context-menu]", inputs: { item: ["reuse-tab-context-menu", "item"], customContextMenu: "customContextMenu" }, host: { listeners: { "contextmenu": "_onContextMenu($event)" } }, exportAs: ["reuseTabContextMenu"], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ReuseTabContextDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[reuse-tab-context-menu]',
                    exportAs: 'reuseTabContextMenu',
                    host: {
                        '(contextmenu)': '_onContextMenu($event)'
                    },
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i1.ReuseTabContextService }], propDecorators: { item: [{
                type: Input,
                args: ['reuse-tab-context-menu']
            }], customContextMenu: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2UtdGFiLWNvbnRleHQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3JldXNlLXRhYi9yZXVzZS10YWItY29udGV4dC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQWFqRCxNQUFNLE9BQU8sd0JBQXdCO0lBSW5DLFlBQW9CLEdBQTJCO1FBQTNCLFFBQUcsR0FBSCxHQUFHLENBQXdCO0lBQUcsQ0FBQztJQUVuRCxjQUFjLENBQUMsS0FBaUI7UUFDOUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ2pCLEtBQUs7WUFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixpQkFBaUIsRUFBRSxJQUFJLENBQUMsaUJBQWlCO1NBQzFDLENBQUMsQ0FBQztRQUNILEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs4R0FkVSx3QkFBd0I7a0dBQXhCLHdCQUF3Qjs7MkZBQXhCLHdCQUF3QjtrQkFScEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsMEJBQTBCO29CQUNwQyxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixJQUFJLEVBQUU7d0JBQ0osZUFBZSxFQUFFLHdCQUF3QjtxQkFDMUM7b0JBQ0QsVUFBVSxFQUFFLElBQUk7aUJBQ2pCOzJGQUVrQyxJQUFJO3NCQUFwQyxLQUFLO3VCQUFDLHdCQUF3QjtnQkFDdEIsaUJBQWlCO3NCQUF6QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBSZXVzZVRhYkNvbnRleHRTZXJ2aWNlIH0gZnJvbSAnLi9yZXVzZS10YWItY29udGV4dC5zZXJ2aWNlJztcbmltcG9ydCB7IFJldXNlQ3VzdG9tQ29udGV4dE1lbnUsIFJldXNlSXRlbSB9IGZyb20gJy4vcmV1c2UtdGFiLmludGVyZmFjZXMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbcmV1c2UtdGFiLWNvbnRleHQtbWVudV0nLFxuICBleHBvcnRBczogJ3JldXNlVGFiQ29udGV4dE1lbnUnLFxuICBob3N0OiB7XG4gICAgJyhjb250ZXh0bWVudSknOiAnX29uQ29udGV4dE1lbnUoJGV2ZW50KSdcbiAgfSxcbiAgc3RhbmRhbG9uZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBSZXVzZVRhYkNvbnRleHREaXJlY3RpdmUge1xuICBASW5wdXQoJ3JldXNlLXRhYi1jb250ZXh0LW1lbnUnKSBpdGVtITogUmV1c2VJdGVtO1xuICBASW5wdXQoKSBjdXN0b21Db250ZXh0TWVudSE6IFJldXNlQ3VzdG9tQ29udGV4dE1lbnVbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNydjogUmV1c2VUYWJDb250ZXh0U2VydmljZSkge31cblxuICBfb25Db250ZXh0TWVudShldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuc3J2LnNob3cubmV4dCh7XG4gICAgICBldmVudCxcbiAgICAgIGl0ZW06IHRoaXMuaXRlbSxcbiAgICAgIGN1c3RvbUNvbnRleHRNZW51OiB0aGlzLmN1c3RvbUNvbnRleHRNZW51XG4gICAgfSk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxufVxuIl19