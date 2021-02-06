import { Directive, Input, TemplateRef } from '@angular/core';
import { SF_SEQ } from '../../const';
import { SFComponent } from '../../sf.component';
export class SFTemplateDirective {
    constructor(templateRef, table) {
        this.templateRef = templateRef;
        this.table = table;
    }
    ngOnInit() {
        this.table._addTpl(this.path.startsWith(SF_SEQ) ? this.path : SF_SEQ + this.path, this.templateRef);
    }
}
SFTemplateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[sf-template]',
            },] }
];
/** @nocollapse */
SFTemplateDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: SFComponent }
];
SFTemplateDirective.propDecorators = {
    path: [{ type: Input, args: ['sf-template',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2YtdGVtcGxhdGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS9zcmMvd2lkZ2V0cy9jdXN0b20vc2YtdGVtcGxhdGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUtqRCxNQUFNLE9BQU8sbUJBQW1CO0lBRzlCLFlBQW9CLFdBQThCLEVBQVUsS0FBa0I7UUFBMUQsZ0JBQVcsR0FBWCxXQUFXLENBQW1CO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBYTtJQUFHLENBQUM7SUFFbEYsUUFBUTtRQUNOLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdEcsQ0FBQzs7O1lBVkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2FBQzFCOzs7O1lBTmtDLFdBQVc7WUFFckMsV0FBVzs7O21CQU1qQixLQUFLLFNBQUMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uSW5pdCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNGX1NFUSB9IGZyb20gJy4uLy4uL2NvbnN0JztcbmltcG9ydCB7IFNGQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vc2YuY29tcG9uZW50JztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3NmLXRlbXBsYXRlXScsXG59KVxuZXhwb3J0IGNsYXNzIFNGVGVtcGxhdGVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoJ3NmLXRlbXBsYXRlJykgcGF0aDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPHZvaWQ+LCBwcml2YXRlIHRhYmxlOiBTRkNvbXBvbmVudCkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnRhYmxlLl9hZGRUcGwodGhpcy5wYXRoLnN0YXJ0c1dpdGgoU0ZfU0VRKSA/IHRoaXMucGF0aCA6IFNGX1NFUSArIHRoaXMucGF0aCwgdGhpcy50ZW1wbGF0ZVJlZik7XG4gIH1cbn1cbiJdfQ==