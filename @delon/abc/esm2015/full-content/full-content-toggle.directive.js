import { Directive } from '@angular/core';
import { FullContentComponent } from './full-content.component';
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
/** @nocollapse */ FullContentToggleDirective.ɵfac = function FullContentToggleDirective_Factory(t) { return new (t || FullContentToggleDirective)(i0.ɵɵdirectiveInject(i1.FullContentComponent)); };
/** @nocollapse */ FullContentToggleDirective.ɵdir = i0.ɵɵngDeclareDirective({ version: "11.1.1", type: FullContentToggleDirective, selector: "[full-toggle]", host: { listeners: { "click": "_click()" } }, exportAs: ["fullToggle"], ngImport: i0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FullContentToggleDirective, [{
        type: Directive,
        args: [{
                selector: '[full-toggle]',
                exportAs: 'fullToggle',
                host: {
                    '(click)': '_click()',
                },
            }]
    }], function () { return [{ type: i1.FullContentComponent }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbC1jb250ZW50LXRvZ2dsZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvZnVsbC1jb250ZW50L2Z1bGwtY29udGVudC10b2dnbGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7OztBQVNoRSxNQUFNLE9BQU8sMEJBQTBCO0lBQ3JDLFlBQW9CLE1BQTRCO1FBQTVCLFdBQU0sR0FBTixNQUFNLENBQXNCO0lBQUcsQ0FBQztJQUVwRCxNQUFNO1FBQ0osSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN2QixDQUFDOzt1SEFMVSwwQkFBMEI7d0dBQTFCLDBCQUEwQjt1RkFBMUIsMEJBQTBCO2NBUHRDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLElBQUksRUFBRTtvQkFDSixTQUFTLEVBQUUsVUFBVTtpQkFDdEI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRnVsbENvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuL2Z1bGwtY29udGVudC5jb21wb25lbnQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZnVsbC10b2dnbGVdJyxcbiAgZXhwb3J0QXM6ICdmdWxsVG9nZ2xlJyxcbiAgaG9zdDoge1xuICAgICcoY2xpY2spJzogJ19jbGljaygpJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgRnVsbENvbnRlbnRUb2dnbGVEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhcmVudDogRnVsbENvbnRlbnRDb21wb25lbnQpIHt9XG5cbiAgX2NsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMucGFyZW50LnRvZ2dsZSgpO1xuICB9XG59XG4iXX0=