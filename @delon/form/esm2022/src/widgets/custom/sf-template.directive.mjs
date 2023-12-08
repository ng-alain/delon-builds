import { Directive, Input } from '@angular/core';
import { SF_SEQ } from '../../const';
import * as i0 from "@angular/core";
import * as i1 from "../../sf.component";
export class SFTemplateDirective {
    constructor(templateRef, table) {
        this.templateRef = templateRef;
        this.table = table;
    }
    ngOnInit() {
        this.table._addTpl(this.path.startsWith(SF_SEQ) ? this.path : SF_SEQ + this.path, this.templateRef);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: SFTemplateDirective, deps: [{ token: i0.TemplateRef }, { token: i1.SFComponent }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.0.6", type: SFTemplateDirective, selector: "[sf-template]", inputs: { path: ["sf-template", "path"] }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: SFTemplateDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[sf-template]'
                }]
        }], ctorParameters: () => [{ type: i0.TemplateRef }, { type: i1.SFComponent }], propDecorators: { path: [{
                type: Input,
                args: ['sf-template']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2YtdGVtcGxhdGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS9zcmMvd2lkZ2V0cy9jdXN0b20vc2YtdGVtcGxhdGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUV0RSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sYUFBYSxDQUFDOzs7QUFNckMsTUFBTSxPQUFPLG1CQUFtQjtJQUc5QixZQUNVLFdBQThCLEVBQzlCLEtBQWtCO1FBRGxCLGdCQUFXLEdBQVgsV0FBVyxDQUFtQjtRQUM5QixVQUFLLEdBQUwsS0FBSyxDQUFhO0lBQ3pCLENBQUM7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN0RyxDQUFDOzhHQVZVLG1CQUFtQjtrR0FBbkIsbUJBQW1COzsyRkFBbkIsbUJBQW1CO2tCQUgvQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO2lCQUMxQjswR0FFdUIsSUFBSTtzQkFBekIsS0FBSzt1QkFBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25Jbml0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTRl9TRVEgfSBmcm9tICcuLi8uLi9jb25zdCc7XG5pbXBvcnQgeyBTRkNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3NmLmNvbXBvbmVudCc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tzZi10ZW1wbGF0ZV0nXG59KVxuZXhwb3J0IGNsYXNzIFNGVGVtcGxhdGVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoJ3NmLXRlbXBsYXRlJykgcGF0aCE6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjx2b2lkPixcbiAgICBwcml2YXRlIHRhYmxlOiBTRkNvbXBvbmVudFxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy50YWJsZS5fYWRkVHBsKHRoaXMucGF0aC5zdGFydHNXaXRoKFNGX1NFUSkgPyB0aGlzLnBhdGggOiBTRl9TRVEgKyB0aGlzLnBhdGgsIHRoaXMudGVtcGxhdGVSZWYpO1xuICB9XG59XG4iXX0=