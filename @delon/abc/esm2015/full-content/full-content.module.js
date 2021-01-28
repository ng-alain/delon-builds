import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DelonUtilModule } from '@delon/util';
import { FullContentToggleDirective } from './full-content-toggle.directive';
import { FullContentComponent } from './full-content.component';
import * as i0 from "@angular/core";
const COMPONENTS = [FullContentComponent, FullContentToggleDirective];
export class FullContentModule {
}
/** @nocollapse */ FullContentModule.ɵmod = i0.ɵɵdefineNgModule({ type: FullContentModule });
/** @nocollapse */ FullContentModule.ɵinj = i0.ɵɵdefineInjector({ factory: function FullContentModule_Factory(t) { return new (t || FullContentModule)(); }, imports: [[CommonModule, DelonUtilModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FullContentModule, { declarations: [FullContentComponent, FullContentToggleDirective], imports: [CommonModule, DelonUtilModule], exports: [FullContentComponent, FullContentToggleDirective] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FullContentModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, DelonUtilModule],
                declarations: [...COMPONENTS],
                exports: [...COMPONENTS],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbC1jb250ZW50Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9mdWxsLWNvbnRlbnQvZnVsbC1jb250ZW50Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzlDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDOztBQUVoRSxNQUFNLFVBQVUsR0FBRyxDQUFDLG9CQUFvQixFQUFFLDBCQUEwQixDQUFDLENBQUM7QUFPdEUsTUFBTSxPQUFPLGlCQUFpQjs7d0VBQWpCLGlCQUFpQjtvSUFBakIsaUJBQWlCLGtCQUpuQixDQUFDLFlBQVksRUFBRSxlQUFlLENBQUM7d0ZBSTdCLGlCQUFpQixtQkFQVixvQkFBb0IsRUFBRSwwQkFBMEIsYUFHeEQsWUFBWSxFQUFFLGVBQWUsYUFIckIsb0JBQW9CLEVBQUUsMEJBQTBCO3VGQU92RCxpQkFBaUI7Y0FMN0IsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxlQUFlLENBQUM7Z0JBQ3hDLFlBQVksRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDO2dCQUM3QixPQUFPLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQzthQUN6QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGVsb25VdGlsTW9kdWxlIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgRnVsbENvbnRlbnRUb2dnbGVEaXJlY3RpdmUgfSBmcm9tICcuL2Z1bGwtY29udGVudC10b2dnbGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IEZ1bGxDb250ZW50Q29tcG9uZW50IH0gZnJvbSAnLi9mdWxsLWNvbnRlbnQuY29tcG9uZW50JztcblxuY29uc3QgQ09NUE9ORU5UUyA9IFtGdWxsQ29udGVudENvbXBvbmVudCwgRnVsbENvbnRlbnRUb2dnbGVEaXJlY3RpdmVdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBEZWxvblV0aWxNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5DT01QT05FTlRTXSxcbiAgZXhwb3J0czogWy4uLkNPTVBPTkVOVFNdLFxufSlcbmV4cG9ydCBjbGFzcyBGdWxsQ29udGVudE1vZHVsZSB7fVxuIl19