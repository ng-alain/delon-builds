import { Directive, Inject, Input, TemplateRef, ViewContainerRef } from '@angular/core';
export class LetContext {
    constructor(internalDirectiveInstance) {
        this.internalDirectiveInstance = internalDirectiveInstance;
    }
    get $implicit() {
        return this.internalDirectiveInstance.let;
    }
    get let() {
        return this.internalDirectiveInstance.let;
    }
}
export class LetDirective {
    constructor(viewContainer, ref) {
        viewContainer.createEmbeddedView(ref, new LetContext(this));
    }
    static ngTemplateContextGuard(_dir, _ctx) {
        return true;
    }
}
LetDirective.decorators = [
    { type: Directive, args: [{ selector: '[let]' },] }
];
/** @nocollapse */
LetDirective.ctorParameters = () => [
    { type: ViewContainerRef, decorators: [{ type: Inject, args: [ViewContainerRef,] }] },
    { type: TemplateRef, decorators: [{ type: Inject, args: [TemplateRef,] }] }
];
LetDirective.propDecorators = {
    let: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9sZXQvbGV0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXhGLE1BQU0sT0FBTyxVQUFVO0lBQ3JCLFlBQTZCLHlCQUEwQztRQUExQyw4QkFBeUIsR0FBekIseUJBQXlCLENBQWlCO0lBQUcsQ0FBQztJQUUzRSxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxHQUFHLENBQUM7SUFDNUMsQ0FBQztJQUVELElBQUksR0FBRztRQUNMLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLEdBQUcsQ0FBQztJQUM1QyxDQUFDO0NBQ0Y7QUFHRCxNQUFNLE9BQU8sWUFBWTtJQUd2QixZQUFzQyxhQUErQixFQUF1QixHQUErQjtRQUN6SCxhQUFhLENBQUMsa0JBQWtCLENBQUMsR0FBRyxFQUFFLElBQUksVUFBVSxDQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVELE1BQU0sQ0FBQyxzQkFBc0IsQ0FBSSxJQUFxQixFQUFFLElBQVM7UUFDL0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7WUFWRixTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFOzs7O1lBZGdCLGdCQUFnQix1QkFrQmpELE1BQU0sU0FBQyxnQkFBZ0I7WUFsQkgsV0FBVyx1QkFrQjRCLE1BQU0sU0FBQyxXQUFXOzs7a0JBRnpGLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEluamVjdCwgSW5wdXQsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBMZXRDb250ZXh0PFQ+IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBpbnRlcm5hbERpcmVjdGl2ZUluc3RhbmNlOiBMZXREaXJlY3RpdmU8VD4pIHt9XG5cbiAgZ2V0ICRpbXBsaWNpdCgpOiBUIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcm5hbERpcmVjdGl2ZUluc3RhbmNlLmxldDtcbiAgfVxuXG4gIGdldCBsZXQoKTogVCB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxEaXJlY3RpdmVJbnN0YW5jZS5sZXQ7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW2xldF0nIH0pXG5leHBvcnQgY2xhc3MgTGV0RGlyZWN0aXZlPFQ+IHtcbiAgQElucHV0KCkgbGV0ITogVDtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KFZpZXdDb250YWluZXJSZWYpIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsIEBJbmplY3QoVGVtcGxhdGVSZWYpIHJlZjogVGVtcGxhdGVSZWY8TGV0Q29udGV4dDxUPj4pIHtcbiAgICB2aWV3Q29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyhyZWYsIG5ldyBMZXRDb250ZXh0PFQ+KHRoaXMpKTtcbiAgfVxuXG4gIHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkPFQ+KF9kaXI6IExldERpcmVjdGl2ZTxUPiwgX2N0eDogYW55KTogX2N0eCBpcyBMZXREaXJlY3RpdmU8VD4ge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iXX0=