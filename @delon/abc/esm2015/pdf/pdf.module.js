import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DelonUtilModule } from '@delon/util';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { PdfComponent } from './pdf.component';
import * as i0 from "@angular/core";
const COMPONENTS = [PdfComponent];
export class PdfModule {
}
/** @nocollapse */ PdfModule.ɵmod = i0.ɵɵdefineNgModule({ type: PdfModule });
/** @nocollapse */ PdfModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PdfModule_Factory(t) { return new (t || PdfModule)(); }, imports: [[CommonModule, DelonUtilModule, NzSkeletonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PdfModule, { declarations: [PdfComponent], imports: [CommonModule, DelonUtilModule, NzSkeletonModule], exports: [PdfComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, DelonUtilModule, NzSkeletonModule],
                declarations: [...COMPONENTS],
                exports: [...COMPONENTS],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9wZGYvcGRmLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzFELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFFL0MsTUFBTSxVQUFVLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQU9sQyxNQUFNLE9BQU8sU0FBUzs7Z0VBQVQsU0FBUztvSEFBVCxTQUFTLGtCQUpYLENBQUMsWUFBWSxFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsQ0FBQzt3RkFJL0MsU0FBUyxtQkFQRixZQUFZLGFBR3BCLFlBQVksRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLGFBSHZDLFlBQVk7dUZBT25CLFNBQVM7Y0FMckIsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLENBQUM7Z0JBQzFELFlBQVksRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDO2dCQUM3QixPQUFPLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQzthQUN6QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGVsb25VdGlsTW9kdWxlIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgTnpTa2VsZXRvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvc2tlbGV0b24nO1xuaW1wb3J0IHsgUGRmQ29tcG9uZW50IH0gZnJvbSAnLi9wZGYuY29tcG9uZW50JztcblxuY29uc3QgQ09NUE9ORU5UUyA9IFtQZGZDb21wb25lbnRdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBEZWxvblV0aWxNb2R1bGUsIE56U2tlbGV0b25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5DT01QT05FTlRTXSxcbiAgZXhwb3J0czogWy4uLkNPTVBPTkVOVFNdLFxufSlcbmV4cG9ydCBjbGFzcyBQZGZNb2R1bGUge31cbiJdfQ==