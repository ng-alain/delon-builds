import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NaNumberToChinesePipe } from './number-to-chinese.pipe';
const PIPES = [NaNumberToChinesePipe];
/**
 * @deprecated Will be removed in 12.0.0, Pls used `CurrencyService.cny` instead
 */
export class NumberToChineseModule {
}
NumberToChineseModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: PIPES,
                exports: PIPES
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLXRvLWNoaW5lc2UubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL251bWJlci10by1jaGluZXNlL251bWJlci10by1jaGluZXNlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUVqRSxNQUFNLEtBQUssR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFFdEM7O0dBRUc7QUFNSCxNQUFNLE9BQU8scUJBQXFCOzs7WUFMakMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDdkIsWUFBWSxFQUFFLEtBQUs7Z0JBQ25CLE9BQU8sRUFBRSxLQUFLO2FBQ2YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmFOdW1iZXJUb0NoaW5lc2VQaXBlIH0gZnJvbSAnLi9udW1iZXItdG8tY2hpbmVzZS5waXBlJztcblxuY29uc3QgUElQRVMgPSBbTmFOdW1iZXJUb0NoaW5lc2VQaXBlXTtcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBXaWxsIGJlIHJlbW92ZWQgaW4gMTIuMC4wLCBQbHMgdXNlZCBgQ3VycmVuY3lTZXJ2aWNlLmNueWAgaW5zdGVhZFxuICovXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBQSVBFUyxcbiAgZXhwb3J0czogUElQRVNcbn0pXG5leHBvcnQgY2xhc3MgTnVtYmVyVG9DaGluZXNlTW9kdWxlIHt9XG4iXX0=