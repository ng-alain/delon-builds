import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { RangePickerShortcutTplComponent } from './range-shortcut.component';
import { RangePickerDirective } from './range.directive';
import * as i0 from "@angular/core";
const COMPONENTS = [RangePickerDirective, RangePickerShortcutTplComponent];
class DatePickerModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: DatePickerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.1.1", ngImport: i0, type: DatePickerModule, declarations: [RangePickerDirective, RangePickerShortcutTplComponent], imports: [CommonModule, FormsModule, NzDatePickerModule], exports: [RangePickerDirective, RangePickerShortcutTplComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: DatePickerModule, imports: [CommonModule, FormsModule, NzDatePickerModule] }); }
}
export { DatePickerModule };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: DatePickerModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, FormsModule, NzDatePickerModule],
                    declarations: COMPONENTS,
                    exports: COMPONENTS
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL2RhdGUtcGlja2VyL2RhdGUtcGlja2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFL0QsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDN0UsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7O0FBRXpELE1BQU0sVUFBVSxHQUFHLENBQUMsb0JBQW9CLEVBQUUsK0JBQStCLENBQUMsQ0FBQztBQUUzRSxNQUthLGdCQUFnQjs4R0FBaEIsZ0JBQWdCOytHQUFoQixnQkFBZ0IsaUJBUFQsb0JBQW9CLEVBQUUsK0JBQStCLGFBRzdELFlBQVksRUFBRSxXQUFXLEVBQUUsa0JBQWtCLGFBSHJDLG9CQUFvQixFQUFFLCtCQUErQjsrR0FPNUQsZ0JBQWdCLFlBSmpCLFlBQVksRUFBRSxXQUFXLEVBQUUsa0JBQWtCOztTQUk1QyxnQkFBZ0I7MkZBQWhCLGdCQUFnQjtrQkFMNUIsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLGtCQUFrQixDQUFDO29CQUN4RCxZQUFZLEVBQUUsVUFBVTtvQkFDeEIsT0FBTyxFQUFFLFVBQVU7aUJBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgTnpEYXRlUGlja2VyTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9kYXRlLXBpY2tlcic7XG5cbmltcG9ydCB7IFJhbmdlUGlja2VyU2hvcnRjdXRUcGxDb21wb25lbnQgfSBmcm9tICcuL3JhbmdlLXNob3J0Y3V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSYW5nZVBpY2tlckRpcmVjdGl2ZSB9IGZyb20gJy4vcmFuZ2UuZGlyZWN0aXZlJztcblxuY29uc3QgQ09NUE9ORU5UUyA9IFtSYW5nZVBpY2tlckRpcmVjdGl2ZSwgUmFuZ2VQaWNrZXJTaG9ydGN1dFRwbENvbXBvbmVudF07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBOekRhdGVQaWNrZXJNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IENPTVBPTkVOVFMsXG4gIGV4cG9ydHM6IENPTVBPTkVOVFNcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZVBpY2tlck1vZHVsZSB7fVxuIl19