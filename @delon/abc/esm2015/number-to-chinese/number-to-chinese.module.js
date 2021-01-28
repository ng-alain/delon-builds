import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NaNumberToChinesePipe } from './number-to-chinese.pipe';
import * as i0 from "@angular/core";
const PIPES = [NaNumberToChinesePipe];
export class NumberToChineseModule {
}
/** @nocollapse */ NumberToChineseModule.ɵmod = i0.ɵɵdefineNgModule({ type: NumberToChineseModule });
/** @nocollapse */ NumberToChineseModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NumberToChineseModule_Factory(t) { return new (t || NumberToChineseModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NumberToChineseModule, { declarations: [NaNumberToChinesePipe], imports: [CommonModule], exports: [NaNumberToChinesePipe] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NumberToChineseModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: PIPES,
                exports: PIPES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLXRvLWNoaW5lc2UubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL251bWJlci10by1jaGluZXNlL251bWJlci10by1jaGluZXNlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7QUFFakUsTUFBTSxLQUFLLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBT3RDLE1BQU0sT0FBTyxxQkFBcUI7OzRFQUFyQixxQkFBcUI7NElBQXJCLHFCQUFxQixrQkFKdkIsQ0FBQyxZQUFZLENBQUM7d0ZBSVoscUJBQXFCLG1CQVBuQixxQkFBcUIsYUFHeEIsWUFBWSxhQUhULHFCQUFxQjt1RkFPdkIscUJBQXFCO2NBTGpDLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7Z0JBQ3ZCLFlBQVksRUFBRSxLQUFLO2dCQUNuQixPQUFPLEVBQUUsS0FBSzthQUNmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYU51bWJlclRvQ2hpbmVzZVBpcGUgfSBmcm9tICcuL251bWJlci10by1jaGluZXNlLnBpcGUnO1xuXG5jb25zdCBQSVBFUyA9IFtOYU51bWJlclRvQ2hpbmVzZVBpcGVdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBQSVBFUyxcbiAgZXhwb3J0czogUElQRVMsXG59KVxuZXhwb3J0IGNsYXNzIE51bWJlclRvQ2hpbmVzZU1vZHVsZSB7fVxuIl19