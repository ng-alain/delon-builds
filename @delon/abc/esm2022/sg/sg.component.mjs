import { ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, ViewEncapsulation, inject, numberAttribute } from '@angular/core';
import { ResponsiveService } from '@delon/theme';
import { SGContainerComponent } from './sg-container.component';
import * as i0 from "@angular/core";
const prefixCls = `sg`;
export class SGComponent {
    get paddingValue() {
        return this.parentComp.gutter / 2;
    }
    constructor() {
        this.el = inject(ElementRef).nativeElement;
        this.ren = inject(Renderer2);
        this.rep = inject(ResponsiveService);
        this.parentComp = inject(SGContainerComponent, { host: true, optional: true });
        this.clsMap = [];
        this.inited = false;
        this.col = null;
        if (this.parentComp == null) {
            throw new Error(`[sg] must include 'sg-container' component`);
        }
    }
    setClass() {
        const { el, ren, clsMap, col, parentComp: parent } = this;
        clsMap.forEach(cls => ren.removeClass(el, cls));
        clsMap.length = 0;
        const parentCol = parent.colInCon || parent.col;
        clsMap.push(...this.rep.genCls(col != null ? col : parentCol, parentCol), `${prefixCls}__item`);
        clsMap.forEach(cls => ren.addClass(el, cls));
        return this;
    }
    ngOnChanges() {
        if (this.inited)
            this.setClass();
    }
    ngAfterViewInit() {
        this.setClass();
        this.inited = true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: SGComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "17.1.0", type: SGComponent, isStandalone: true, selector: "sg", inputs: { col: ["col", "col", (v) => (v == null ? null : numberAttribute(v))] }, host: { properties: { "style.padding-left.px": "paddingValue", "style.padding-right.px": "paddingValue" } }, exportAs: ["sg"], usesOnChanges: true, ngImport: i0, template: ` <ng-content /> `, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: SGComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'sg',
                    exportAs: 'sg',
                    template: ` <ng-content /> `,
                    host: {
                        '[style.padding-left.px]': 'paddingValue',
                        '[style.padding-right.px]': 'paddingValue'
                    },
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    standalone: true
                }]
        }], ctorParameters: () => [], propDecorators: { col: [{
                type: Input,
                args: [{ transform: (v) => (v == null ? null : numberAttribute(v)) }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3NnL3NnLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUVMLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsTUFBTSxFQUNOLGVBQWUsRUFDaEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRWpELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDOztBQUVoRSxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUM7QUFldkIsTUFBTSxPQUFPLFdBQVc7SUFXdEIsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVEO1FBZGlCLE9BQUUsR0FBZ0IsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLGFBQWEsQ0FBQztRQUNuRCxRQUFHLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3hCLFFBQUcsR0FBRyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNoQyxlQUFVLEdBQUcsTUFBTSxDQUFDLG9CQUFvQixFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUUsQ0FBQztRQUVwRixXQUFNLEdBQWEsRUFBRSxDQUFDO1FBQ3RCLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFFd0QsUUFBRyxHQUFrQixJQUFJLENBQUM7UUFPdkcsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksRUFBRSxDQUFDO1lBQzVCLE1BQU0sSUFBSSxLQUFLLENBQUMsNENBQTRDLENBQUMsQ0FBQztRQUNoRSxDQUFDO0lBQ0gsQ0FBQztJQUVPLFFBQVE7UUFDZCxNQUFNLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDMUQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDaEQsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDbEIsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLFFBQVEsSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDO1FBQ2hELE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsRUFBRSxHQUFHLFNBQVMsUUFBUSxDQUFDLENBQUM7UUFDaEcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0MsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLE1BQU07WUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQzs4R0F0Q1UsV0FBVztrR0FBWCxXQUFXLG9FQVNGLENBQUMsQ0FBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLGlMQW5CakUsa0JBQWtCOzsyRkFVakIsV0FBVztrQkFidkIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsSUFBSTtvQkFDZCxRQUFRLEVBQUUsSUFBSTtvQkFDZCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixJQUFJLEVBQUU7d0JBQ0oseUJBQXlCLEVBQUUsY0FBYzt3QkFDekMsMEJBQTBCLEVBQUUsY0FBYztxQkFDM0M7b0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxVQUFVLEVBQUUsSUFBSTtpQkFDakI7d0RBVWdGLEdBQUc7c0JBQWpGLEtBQUs7dUJBQUMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFVLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIFJlbmRlcmVyMixcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIGluamVjdCxcbiAgbnVtYmVyQXR0cmlidXRlXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBSZXNwb25zaXZlU2VydmljZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5cbmltcG9ydCB7IFNHQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9zZy1jb250YWluZXIuY29tcG9uZW50JztcblxuY29uc3QgcHJlZml4Q2xzID0gYHNnYDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2cnLFxuICBleHBvcnRBczogJ3NnJyxcbiAgdGVtcGxhdGU6IGAgPG5nLWNvbnRlbnQgLz4gYCxcbiAgaG9zdDoge1xuICAgICdbc3R5bGUucGFkZGluZy1sZWZ0LnB4XSc6ICdwYWRkaW5nVmFsdWUnLFxuICAgICdbc3R5bGUucGFkZGluZy1yaWdodC5weF0nOiAncGFkZGluZ1ZhbHVlJ1xuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHN0YW5kYWxvbmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgU0dDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQge1xuICBwcml2YXRlIHJlYWRvbmx5IGVsOiBIVE1MRWxlbWVudCA9IGluamVjdChFbGVtZW50UmVmKS5uYXRpdmVFbGVtZW50O1xuICBwcml2YXRlIHJlYWRvbmx5IHJlbiA9IGluamVjdChSZW5kZXJlcjIpO1xuICBwcml2YXRlIHJlYWRvbmx5IHJlcCA9IGluamVjdChSZXNwb25zaXZlU2VydmljZSk7XG4gIHByaXZhdGUgcmVhZG9ubHkgcGFyZW50Q29tcCA9IGluamVjdChTR0NvbnRhaW5lckNvbXBvbmVudCwgeyBob3N0OiB0cnVlLCBvcHRpb25hbDogdHJ1ZSB9KSE7XG5cbiAgcHJpdmF0ZSBjbHNNYXA6IHN0cmluZ1tdID0gW107XG4gIHByaXZhdGUgaW5pdGVkID0gZmFsc2U7XG5cbiAgQElucHV0KHsgdHJhbnNmb3JtOiAodjogdW5rbm93bikgPT4gKHYgPT0gbnVsbCA/IG51bGwgOiBudW1iZXJBdHRyaWJ1dGUodikpIH0pIGNvbDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG5cbiAgZ2V0IHBhZGRpbmdWYWx1ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnBhcmVudENvbXAuZ3V0dGVyIC8gMjtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGlmICh0aGlzLnBhcmVudENvbXAgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBbc2ddIG11c3QgaW5jbHVkZSAnc2ctY29udGFpbmVyJyBjb21wb25lbnRgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldENsYXNzKCk6IHRoaXMge1xuICAgIGNvbnN0IHsgZWwsIHJlbiwgY2xzTWFwLCBjb2wsIHBhcmVudENvbXA6IHBhcmVudCB9ID0gdGhpcztcbiAgICBjbHNNYXAuZm9yRWFjaChjbHMgPT4gcmVuLnJlbW92ZUNsYXNzKGVsLCBjbHMpKTtcbiAgICBjbHNNYXAubGVuZ3RoID0gMDtcbiAgICBjb25zdCBwYXJlbnRDb2wgPSBwYXJlbnQuY29sSW5Db24gfHwgcGFyZW50LmNvbDtcbiAgICBjbHNNYXAucHVzaCguLi50aGlzLnJlcC5nZW5DbHMoY29sICE9IG51bGwgPyBjb2wgOiBwYXJlbnRDb2wsIHBhcmVudENvbCksIGAke3ByZWZpeENsc31fX2l0ZW1gKTtcbiAgICBjbHNNYXAuZm9yRWFjaChjbHMgPT4gcmVuLmFkZENsYXNzKGVsLCBjbHMpKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmluaXRlZCkgdGhpcy5zZXRDbGFzcygpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0Q2xhc3MoKTtcbiAgICB0aGlzLmluaXRlZCA9IHRydWU7XG4gIH1cbn1cbiJdfQ==