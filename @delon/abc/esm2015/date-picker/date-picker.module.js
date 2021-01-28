import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { RangePickerComponent } from './range.component';
import * as i0 from "@angular/core";
const COMPONENTS = [RangePickerComponent];
export class DatePickerModule {
}
/** @nocollapse */ DatePickerModule.ɵmod = i0.ɵɵdefineNgModule({ type: DatePickerModule });
/** @nocollapse */ DatePickerModule.ɵinj = i0.ɵɵdefineInjector({ factory: function DatePickerModule_Factory(t) { return new (t || DatePickerModule)(); }, imports: [[CommonModule, FormsModule, NzDatePickerModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(DatePickerModule, { declarations: [RangePickerComponent], imports: [CommonModule, FormsModule, NzDatePickerModule], exports: [RangePickerComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DatePickerModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, FormsModule, NzDatePickerModule],
                declarations: [...COMPONENTS],
                exports: [...COMPONENTS],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL2RhdGUtcGlja2VyL2RhdGUtcGlja2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFL0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7O0FBRXpELE1BQU0sVUFBVSxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQU8xQyxNQUFNLE9BQU8sZ0JBQWdCOzt1RUFBaEIsZ0JBQWdCO2tJQUFoQixnQkFBZ0Isa0JBSmxCLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxrQkFBa0IsQ0FBQzt3RkFJN0MsZ0JBQWdCLG1CQVBULG9CQUFvQixhQUc1QixZQUFZLEVBQUUsV0FBVyxFQUFFLGtCQUFrQixhQUhyQyxvQkFBb0I7dUZBTzNCLGdCQUFnQjtjQUw1QixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxrQkFBa0IsQ0FBQztnQkFDeEQsWUFBWSxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUM7Z0JBQzdCLE9BQU8sRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDO2FBQ3pCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE56RGF0ZVBpY2tlck1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvZGF0ZS1waWNrZXInO1xuXG5pbXBvcnQgeyBSYW5nZVBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vcmFuZ2UuY29tcG9uZW50JztcblxuY29uc3QgQ09NUE9ORU5UUyA9IFtSYW5nZVBpY2tlckNvbXBvbmVudF07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBOekRhdGVQaWNrZXJNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5DT01QT05FTlRTXSxcbiAgZXhwb3J0czogWy4uLkNPTVBPTkVOVFNdLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlUGlja2VyTW9kdWxlIHt9XG4iXX0=