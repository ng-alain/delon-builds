import { Directive } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./full-content.component";
export class FullContentToggleDirective {
    constructor(parent) {
        this.parent = parent;
    }
    _click() {
        this.parent.toggle();
    }
}
FullContentToggleDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.1", ngImport: i0, type: FullContentToggleDirective, deps: [{ token: i1.FullContentComponent }], target: i0.ɵɵFactoryTarget.Directive });
FullContentToggleDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.1", type: FullContentToggleDirective, selector: "[full-toggle]", host: { listeners: { "click": "_click()" } }, exportAs: ["fullToggle"], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.1", ngImport: i0, type: FullContentToggleDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[full-toggle]',
                    exportAs: 'fullToggle',
                    host: {
                        '(click)': '_click()'
                    }
                }]
        }], ctorParameters: function () { return [{ type: i1.FullContentComponent }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbC1jb250ZW50LXRvZ2dsZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvZnVsbC1jb250ZW50L2Z1bGwtY29udGVudC10b2dnbGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQVcxQyxNQUFNLE9BQU8sMEJBQTBCO0lBQ3JDLFlBQW9CLE1BQTRCO1FBQTVCLFdBQU0sR0FBTixNQUFNLENBQXNCO0lBQUcsQ0FBQztJQUVwRCxNQUFNO1FBQ0osSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN2QixDQUFDOzt1SEFMVSwwQkFBMEI7MkdBQTFCLDBCQUEwQjsyRkFBMUIsMEJBQTBCO2tCQVB0QyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QixRQUFRLEVBQUUsWUFBWTtvQkFDdEIsSUFBSSxFQUFFO3dCQUNKLFNBQVMsRUFBRSxVQUFVO3FCQUN0QjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBGdWxsQ29udGVudENvbXBvbmVudCB9IGZyb20gJy4vZnVsbC1jb250ZW50LmNvbXBvbmVudCc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tmdWxsLXRvZ2dsZV0nLFxuICBleHBvcnRBczogJ2Z1bGxUb2dnbGUnLFxuICBob3N0OiB7XG4gICAgJyhjbGljayknOiAnX2NsaWNrKCknXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgRnVsbENvbnRlbnRUb2dnbGVEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhcmVudDogRnVsbENvbnRlbnRDb21wb25lbnQpIHt9XG5cbiAgX2NsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMucGFyZW50LnRvZ2dsZSgpO1xuICB9XG59XG4iXX0=