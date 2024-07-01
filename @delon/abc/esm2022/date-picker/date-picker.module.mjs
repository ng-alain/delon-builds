import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { RangePickerShortcutTplComponent } from './range-shortcut.component';
import { RangePickerDirective } from './range.directive';
import * as i0 from "@angular/core";
const COMPONENTS = [RangePickerDirective, RangePickerShortcutTplComponent];
export class DatePickerModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: DatePickerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.1.0", ngImport: i0, type: DatePickerModule, imports: [CommonModule, FormsModule, NzDatePickerModule, RangePickerDirective, RangePickerShortcutTplComponent], exports: [RangePickerDirective, RangePickerShortcutTplComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: DatePickerModule, imports: [CommonModule, FormsModule, NzDatePickerModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: DatePickerModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, FormsModule, NzDatePickerModule, ...COMPONENTS],
                    exports: COMPONENTS
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL2RhdGUtcGlja2VyL2RhdGUtcGlja2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFL0QsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDN0UsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7O0FBRXpELE1BQU0sVUFBVSxHQUFHLENBQUMsb0JBQW9CLEVBQUUsK0JBQStCLENBQUMsQ0FBQztBQU0zRSxNQUFNLE9BQU8sZ0JBQWdCOzhHQUFoQixnQkFBZ0I7K0dBQWhCLGdCQUFnQixZQUhqQixZQUFZLEVBQUUsV0FBVyxFQUFFLGtCQUFrQixFQUhyQyxvQkFBb0IsRUFBRSwrQkFBK0IsYUFBckQsb0JBQW9CLEVBQUUsK0JBQStCOytHQU01RCxnQkFBZ0IsWUFIakIsWUFBWSxFQUFFLFdBQVcsRUFBRSxrQkFBa0I7OzJGQUc1QyxnQkFBZ0I7a0JBSjVCLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxrQkFBa0IsRUFBRSxHQUFHLFVBQVUsQ0FBQztvQkFDdkUsT0FBTyxFQUFFLFVBQVU7aUJBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgTnpEYXRlUGlja2VyTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9kYXRlLXBpY2tlcic7XG5cbmltcG9ydCB7IFJhbmdlUGlja2VyU2hvcnRjdXRUcGxDb21wb25lbnQgfSBmcm9tICcuL3JhbmdlLXNob3J0Y3V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSYW5nZVBpY2tlckRpcmVjdGl2ZSB9IGZyb20gJy4vcmFuZ2UuZGlyZWN0aXZlJztcblxuY29uc3QgQ09NUE9ORU5UUyA9IFtSYW5nZVBpY2tlckRpcmVjdGl2ZSwgUmFuZ2VQaWNrZXJTaG9ydGN1dFRwbENvbXBvbmVudF07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBOekRhdGVQaWNrZXJNb2R1bGUsIC4uLkNPTVBPTkVOVFNdLFxuICBleHBvcnRzOiBDT01QT05FTlRTXG59KVxuZXhwb3J0IGNsYXNzIERhdGVQaWNrZXJNb2R1bGUge31cbiJdfQ==