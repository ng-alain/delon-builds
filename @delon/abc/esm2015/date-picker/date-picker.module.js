import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { RangePickerShortcutTplComponent } from './range-shortcut.component';
import { RangePickerComponent } from './range.component';
import { RangePickerDirective } from './range.directive';
const COMPONENTS = [RangePickerComponent, RangePickerDirective, RangePickerShortcutTplComponent];
export class DatePickerModule {
}
DatePickerModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FormsModule, NzDatePickerModule],
                declarations: COMPONENTS,
                exports: COMPONENTS,
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL2RhdGUtcGlja2VyL2RhdGUtcGlja2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDL0QsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDN0UsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDekQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFekQsTUFBTSxVQUFVLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxvQkFBb0IsRUFBRSwrQkFBK0IsQ0FBQyxDQUFDO0FBT2pHLE1BQU0sT0FBTyxnQkFBZ0I7OztZQUw1QixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxrQkFBa0IsQ0FBQztnQkFDeEQsWUFBWSxFQUFFLFVBQVU7Z0JBQ3hCLE9BQU8sRUFBRSxVQUFVO2FBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE56RGF0ZVBpY2tlck1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvZGF0ZS1waWNrZXInO1xuaW1wb3J0IHsgUmFuZ2VQaWNrZXJTaG9ydGN1dFRwbENvbXBvbmVudCB9IGZyb20gJy4vcmFuZ2Utc2hvcnRjdXQuY29tcG9uZW50JztcbmltcG9ydCB7IFJhbmdlUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9yYW5nZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmFuZ2VQaWNrZXJEaXJlY3RpdmUgfSBmcm9tICcuL3JhbmdlLmRpcmVjdGl2ZSc7XG5cbmNvbnN0IENPTVBPTkVOVFMgPSBbUmFuZ2VQaWNrZXJDb21wb25lbnQsIFJhbmdlUGlja2VyRGlyZWN0aXZlLCBSYW5nZVBpY2tlclNob3J0Y3V0VHBsQ29tcG9uZW50XTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIE56RGF0ZVBpY2tlck1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogQ09NUE9ORU5UUyxcbiAgZXhwb3J0czogQ09NUE9ORU5UUyxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZVBpY2tlck1vZHVsZSB7fVxuIl19