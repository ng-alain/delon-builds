import { Directive, Inject, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import * as i0 from "@angular/core";
export class LetContext {
    constructor(dir) {
        this.dir = dir;
    }
    get $implicit() {
        return this.dir.let;
    }
    get let() {
        return this.dir.let;
    }
}
export class LetDirective {
    constructor(vc, ref) {
        vc.createEmbeddedView(ref, new LetContext(this));
    }
    static ngTemplateContextGuard(_dir, _ctx) {
        return true;
    }
}
LetDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.10", ngImport: i0, type: LetDirective, deps: [{ token: ViewContainerRef }, { token: TemplateRef }], target: i0.ɵɵFactoryTarget.Directive });
LetDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.10", type: LetDirective, selector: "[let]", inputs: { let: "let" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.10", ngImport: i0, type: LetDirective, decorators: [{
            type: Directive,
            args: [{ selector: '[let]' }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef, decorators: [{
                    type: Inject,
                    args: [ViewContainerRef]
                }] }, { type: i0.TemplateRef, decorators: [{
                    type: Inject,
                    args: [TemplateRef]
                }] }]; }, propDecorators: { let: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9sZXQvbGV0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUl4RixNQUFNLE9BQU8sVUFBVTtJQUNyQixZQUE2QixHQUFvQjtRQUFwQixRQUFHLEdBQUgsR0FBRyxDQUFpQjtJQUFHLENBQUM7SUFFckQsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztJQUN0QixDQUFDO0lBRUQsSUFBSSxHQUFHO1FBQ0wsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztJQUN0QixDQUFDO0NBQ0Y7QUFHRCxNQUFNLE9BQU8sWUFBWTtJQUd2QixZQUFzQyxFQUFvQixFQUF1QixHQUErQjtRQUM5RyxFQUFFLENBQUMsa0JBQWtCLENBQUMsR0FBRyxFQUFFLElBQUksVUFBVSxDQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELE1BQU0sQ0FBQyxzQkFBc0IsQ0FBSSxJQUFxQixFQUFFLElBQWU7UUFDckUsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzswR0FUVSxZQUFZLGtCQUdILGdCQUFnQixhQUFnQyxXQUFXOzhGQUhwRSxZQUFZOzRGQUFaLFlBQVk7a0JBRHhCLFNBQVM7bUJBQUMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFOzswQkFJakIsTUFBTTsyQkFBQyxnQkFBZ0I7OzBCQUF5QixNQUFNOzJCQUFDLFdBQVc7NENBRnRFLEdBQUc7c0JBQVgsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5qZWN0LCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5leHBvcnQgY2xhc3MgTGV0Q29udGV4dDxUPiB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZGlyOiBMZXREaXJlY3RpdmU8VD4pIHt9XG5cbiAgZ2V0ICRpbXBsaWNpdCgpOiBUIHtcbiAgICByZXR1cm4gdGhpcy5kaXIubGV0O1xuICB9XG5cbiAgZ2V0IGxldCgpOiBUIHtcbiAgICByZXR1cm4gdGhpcy5kaXIubGV0O1xuICB9XG59XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tsZXRdJyB9KVxuZXhwb3J0IGNsYXNzIExldERpcmVjdGl2ZTxUPiB7XG4gIEBJbnB1dCgpIGxldCE6IFQ7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChWaWV3Q29udGFpbmVyUmVmKSB2YzogVmlld0NvbnRhaW5lclJlZiwgQEluamVjdChUZW1wbGF0ZVJlZikgcmVmOiBUZW1wbGF0ZVJlZjxMZXRDb250ZXh0PFQ+Pikge1xuICAgIHZjLmNyZWF0ZUVtYmVkZGVkVmlldyhyZWYsIG5ldyBMZXRDb250ZXh0PFQ+KHRoaXMpKTtcbiAgfVxuXG4gIHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkPFQ+KF9kaXI6IExldERpcmVjdGl2ZTxUPiwgX2N0eDogTnpTYWZlQW55KTogX2N0eCBpcyBMZXREaXJlY3RpdmU8VD4ge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iXX0=