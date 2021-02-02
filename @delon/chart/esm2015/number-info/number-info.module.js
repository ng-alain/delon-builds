import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NumberInfoComponent } from './number-info.component';
import * as i0 from "@angular/core";
const COMPONENTS = [NumberInfoComponent];
export class NumberInfoModule {
}
/** @nocollapse */ NumberInfoModule.ɵmod = i0.ɵɵdefineNgModule({ type: NumberInfoModule });
/** @nocollapse */ NumberInfoModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NumberInfoModule_Factory(t) { return new (t || NumberInfoModule)(); }, imports: [[CommonModule, NzIconModule, NzOutletModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NumberInfoModule, { declarations: [NumberInfoComponent], imports: [CommonModule, NzIconModule, NzOutletModule], exports: [NumberInfoComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NumberInfoModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, NzIconModule, NzOutletModule],
                declarations: COMPONENTS,
                exports: COMPONENTS,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWluZm8ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY2hhcnQvbnVtYmVyLWluZm8vbnVtYmVyLWluZm8ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7O0FBRTlELE1BQU0sVUFBVSxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQU96QyxNQUFNLE9BQU8sZ0JBQWdCOzt1RUFBaEIsZ0JBQWdCO2tJQUFoQixnQkFBZ0Isa0JBSmxCLENBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxjQUFjLENBQUM7d0ZBSTFDLGdCQUFnQixtQkFQVCxtQkFBbUIsYUFHM0IsWUFBWSxFQUFFLFlBQVksRUFBRSxjQUFjLGFBSGxDLG1CQUFtQjt1RkFPMUIsZ0JBQWdCO2NBTDVCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLGNBQWMsQ0FBQztnQkFDckQsWUFBWSxFQUFFLFVBQVU7Z0JBQ3hCLE9BQU8sRUFBRSxVQUFVO2FBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOek91dGxldE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9vdXRsZXQnO1xuaW1wb3J0IHsgTnpJY29uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pY29uJztcblxuaW1wb3J0IHsgTnVtYmVySW5mb0NvbXBvbmVudCB9IGZyb20gJy4vbnVtYmVyLWluZm8uY29tcG9uZW50JztcblxuY29uc3QgQ09NUE9ORU5UUyA9IFtOdW1iZXJJbmZvQ29tcG9uZW50XTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTnpJY29uTW9kdWxlLCBOek91dGxldE1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogQ09NUE9ORU5UUyxcbiAgZXhwb3J0czogQ09NUE9ORU5UUyxcbn0pXG5leHBvcnQgY2xhc3MgTnVtYmVySW5mb01vZHVsZSB7fVxuIl19