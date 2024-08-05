import { Directive, Input, inject } from '@angular/core';
import { ReuseTabContextService } from './reuse-tab-context.service';
import * as i0 from "@angular/core";
export class ReuseTabContextDirective {
    constructor() {
        this.srv = inject(ReuseTabContextService);
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.3", ngImport: i0, type: ReuseTabContextDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.1.3", type: ReuseTabContextDirective, isStandalone: true, selector: "[reuse-tab-context-menu]", inputs: { item: ["reuse-tab-context-menu", "item"], customContextMenu: "customContextMenu" }, host: { listeners: { "contextmenu": "_onContextMenu($event)" } }, exportAs: ["reuseTabContextMenu"], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.3", ngImport: i0, type: ReuseTabContextDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[reuse-tab-context-menu]',
                    exportAs: 'reuseTabContextMenu',
                    host: {
                        '(contextmenu)': '_onContextMenu($event)'
                    },
                    standalone: true
                }]
        }], propDecorators: { item: [{
                type: Input,
                args: ['reuse-tab-context-menu']
            }], customContextMenu: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2UtdGFiLWNvbnRleHQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3JldXNlLXRhYi9yZXVzZS10YWItY29udGV4dC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDOztBQVdyRSxNQUFNLE9BQU8sd0JBQXdCO0lBUnJDO1FBU21CLFFBQUcsR0FBRyxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQztLQWN2RDtJQVRDLGNBQWMsQ0FBQyxLQUFpQjtRQUM5QixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDakIsS0FBSztZQUNMLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLGlCQUFpQixFQUFFLElBQUksQ0FBQyxpQkFBaUI7U0FDMUMsQ0FBQyxDQUFDO1FBQ0gsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUMxQixDQUFDOzhHQWRVLHdCQUF3QjtrR0FBeEIsd0JBQXdCOzsyRkFBeEIsd0JBQXdCO2tCQVJwQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSwwQkFBMEI7b0JBQ3BDLFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLElBQUksRUFBRTt3QkFDSixlQUFlLEVBQUUsd0JBQXdCO3FCQUMxQztvQkFDRCxVQUFVLEVBQUUsSUFBSTtpQkFDakI7OEJBSWtDLElBQUk7c0JBQXBDLEtBQUs7dUJBQUMsd0JBQXdCO2dCQUN0QixpQkFBaUI7c0JBQXpCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBpbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUmV1c2VUYWJDb250ZXh0U2VydmljZSB9IGZyb20gJy4vcmV1c2UtdGFiLWNvbnRleHQuc2VydmljZSc7XG5pbXBvcnQgeyBSZXVzZUN1c3RvbUNvbnRleHRNZW51LCBSZXVzZUl0ZW0gfSBmcm9tICcuL3JldXNlLXRhYi5pbnRlcmZhY2VzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3JldXNlLXRhYi1jb250ZXh0LW1lbnVdJyxcbiAgZXhwb3J0QXM6ICdyZXVzZVRhYkNvbnRleHRNZW51JyxcbiAgaG9zdDoge1xuICAgICcoY29udGV4dG1lbnUpJzogJ19vbkNvbnRleHRNZW51KCRldmVudCknXG4gIH0sXG4gIHN0YW5kYWxvbmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgUmV1c2VUYWJDb250ZXh0RGlyZWN0aXZlIHtcbiAgcHJpdmF0ZSByZWFkb25seSBzcnYgPSBpbmplY3QoUmV1c2VUYWJDb250ZXh0U2VydmljZSk7XG5cbiAgQElucHV0KCdyZXVzZS10YWItY29udGV4dC1tZW51JykgaXRlbSE6IFJldXNlSXRlbTtcbiAgQElucHV0KCkgY3VzdG9tQ29udGV4dE1lbnUhOiBSZXVzZUN1c3RvbUNvbnRleHRNZW51W107XG5cbiAgX29uQ29udGV4dE1lbnUoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLnNydi5zaG93Lm5leHQoe1xuICAgICAgZXZlbnQsXG4gICAgICBpdGVtOiB0aGlzLml0ZW0sXG4gICAgICBjdXN0b21Db250ZXh0TWVudTogdGhpcy5jdXN0b21Db250ZXh0TWVudVxuICAgIH0pO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbn1cbiJdfQ==