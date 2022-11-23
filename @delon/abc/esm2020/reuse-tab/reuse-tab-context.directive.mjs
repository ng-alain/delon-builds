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
ReuseTabContextDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: ReuseTabContextDirective, deps: [{ token: i1.ReuseTabContextService }], target: i0.ɵɵFactoryTarget.Directive });
ReuseTabContextDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.12", type: ReuseTabContextDirective, selector: "[reuse-tab-context-menu]", inputs: { item: ["reuse-tab-context-menu", "item"], customContextMenu: "customContextMenu" }, host: { listeners: { "contextmenu": "_onContextMenu($event)" } }, exportAs: ["reuseTabContextMenu"], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: ReuseTabContextDirective, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2UtdGFiLWNvbnRleHQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3JldXNlLXRhYi9yZXVzZS10YWItY29udGV4dC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQVlqRCxNQUFNLE9BQU8sd0JBQXdCO0lBSW5DLFlBQW9CLEdBQTJCO1FBQTNCLFFBQUcsR0FBSCxHQUFHLENBQXdCO0lBQUcsQ0FBQztJQUVuRCxjQUFjLENBQUMsS0FBaUI7UUFDOUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ2pCLEtBQUs7WUFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixpQkFBaUIsRUFBRSxJQUFJLENBQUMsaUJBQWlCO1NBQzFDLENBQUMsQ0FBQztRQUNILEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7c0hBZFUsd0JBQXdCOzBHQUF4Qix3QkFBd0I7NEZBQXhCLHdCQUF3QjtrQkFQcEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsMEJBQTBCO29CQUNwQyxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixJQUFJLEVBQUU7d0JBQ0osZUFBZSxFQUFFLHdCQUF3QjtxQkFDMUM7aUJBQ0Y7NkdBRWtDLElBQUk7c0JBQXBDLEtBQUs7dUJBQUMsd0JBQXdCO2dCQUN0QixpQkFBaUI7c0JBQXpCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFJldXNlVGFiQ29udGV4dFNlcnZpY2UgfSBmcm9tICcuL3JldXNlLXRhYi1jb250ZXh0LnNlcnZpY2UnO1xuaW1wb3J0IHsgUmV1c2VDdXN0b21Db250ZXh0TWVudSwgUmV1c2VJdGVtIH0gZnJvbSAnLi9yZXVzZS10YWIuaW50ZXJmYWNlcyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tyZXVzZS10YWItY29udGV4dC1tZW51XScsXG4gIGV4cG9ydEFzOiAncmV1c2VUYWJDb250ZXh0TWVudScsXG4gIGhvc3Q6IHtcbiAgICAnKGNvbnRleHRtZW51KSc6ICdfb25Db250ZXh0TWVudSgkZXZlbnQpJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIFJldXNlVGFiQ29udGV4dERpcmVjdGl2ZSB7XG4gIEBJbnB1dCgncmV1c2UtdGFiLWNvbnRleHQtbWVudScpIGl0ZW0hOiBSZXVzZUl0ZW07XG4gIEBJbnB1dCgpIGN1c3RvbUNvbnRleHRNZW51ITogUmV1c2VDdXN0b21Db250ZXh0TWVudVtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3J2OiBSZXVzZVRhYkNvbnRleHRTZXJ2aWNlKSB7fVxuXG4gIF9vbkNvbnRleHRNZW51KGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5zcnYuc2hvdy5uZXh0KHtcbiAgICAgIGV2ZW50LFxuICAgICAgaXRlbTogdGhpcy5pdGVtLFxuICAgICAgY3VzdG9tQ29udGV4dE1lbnU6IHRoaXMuY3VzdG9tQ29udGV4dE1lbnVcbiAgICB9KTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG59XG4iXX0=