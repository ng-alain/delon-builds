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
}
ReuseTabContextDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: ReuseTabContextDirective, deps: [{ token: i1.ReuseTabContextService }], target: i0.ɵɵFactoryTarget.Directive });
ReuseTabContextDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.1.1", type: ReuseTabContextDirective, selector: "[reuse-tab-context-menu]", inputs: { item: ["reuse-tab-context-menu", "item"], customContextMenu: "customContextMenu" }, host: { listeners: { "contextmenu": "_onContextMenu($event)" } }, exportAs: ["reuseTabContextMenu"], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: ReuseTabContextDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[reuse-tab-context-menu]',
                    exportAs: 'reuseTabContextMenu',
                    host: {
                        '(contextmenu)': '_onContextMenu($event)'
                    }
                }]
        }], ctorParameters: function () { return [{ type: i1.ReuseTabContextService }]; }, propDecorators: { item: [{
                type: Input,
                args: ['reuse-tab-context-menu']
            }], customContextMenu: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2UtdGFiLWNvbnRleHQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3JldXNlLXRhYi9yZXVzZS10YWItY29udGV4dC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQVlqRCxNQUFNLE9BQU8sd0JBQXdCO0lBSW5DLFlBQW9CLEdBQTJCO1FBQTNCLFFBQUcsR0FBSCxHQUFHLENBQXdCO0lBQUcsQ0FBQztJQUVuRCxjQUFjLENBQUMsS0FBaUI7UUFDOUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ2pCLEtBQUs7WUFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixpQkFBaUIsRUFBRSxJQUFJLENBQUMsaUJBQWlCO1NBQzFDLENBQUMsQ0FBQztRQUNILEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7cUhBZFUsd0JBQXdCO3lHQUF4Qix3QkFBd0I7MkZBQXhCLHdCQUF3QjtrQkFQcEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsMEJBQTBCO29CQUNwQyxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixJQUFJLEVBQUU7d0JBQ0osZUFBZSxFQUFFLHdCQUF3QjtxQkFDMUM7aUJBQ0Y7NkdBRWtDLElBQUk7c0JBQXBDLEtBQUs7dUJBQUMsd0JBQXdCO2dCQUN0QixpQkFBaUI7c0JBQXpCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFJldXNlVGFiQ29udGV4dFNlcnZpY2UgfSBmcm9tICcuL3JldXNlLXRhYi1jb250ZXh0LnNlcnZpY2UnO1xuaW1wb3J0IHsgUmV1c2VDdXN0b21Db250ZXh0TWVudSwgUmV1c2VJdGVtIH0gZnJvbSAnLi9yZXVzZS10YWIuaW50ZXJmYWNlcyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tyZXVzZS10YWItY29udGV4dC1tZW51XScsXG4gIGV4cG9ydEFzOiAncmV1c2VUYWJDb250ZXh0TWVudScsXG4gIGhvc3Q6IHtcbiAgICAnKGNvbnRleHRtZW51KSc6ICdfb25Db250ZXh0TWVudSgkZXZlbnQpJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIFJldXNlVGFiQ29udGV4dERpcmVjdGl2ZSB7XG4gIEBJbnB1dCgncmV1c2UtdGFiLWNvbnRleHQtbWVudScpIGl0ZW06IFJldXNlSXRlbTtcbiAgQElucHV0KCkgY3VzdG9tQ29udGV4dE1lbnU6IFJldXNlQ3VzdG9tQ29udGV4dE1lbnVbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNydjogUmV1c2VUYWJDb250ZXh0U2VydmljZSkge31cblxuICBfb25Db250ZXh0TWVudShldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuc3J2LnNob3cubmV4dCh7XG4gICAgICBldmVudCxcbiAgICAgIGl0ZW06IHRoaXMuaXRlbSxcbiAgICAgIGN1c3RvbUNvbnRleHRNZW51OiB0aGlzLmN1c3RvbUNvbnRleHRNZW51XG4gICAgfSk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxufVxuIl19