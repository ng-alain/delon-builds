import { Directive, Inject, Input, TemplateRef, ViewContainerRef } from '@angular/core';
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
LetDirective.decorators = [
    { type: Directive, args: [{ selector: '[let]' },] }
];
LetDirective.ctorParameters = () => [
    { type: ViewContainerRef, decorators: [{ type: Inject, args: [ViewContainerRef,] }] },
    { type: TemplateRef, decorators: [{ type: Inject, args: [TemplateRef,] }] }
];
LetDirective.propDecorators = {
    let: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9sZXQvbGV0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSXhGLE1BQU0sT0FBTyxVQUFVO0lBQ3JCLFlBQTZCLEdBQW9CO1FBQXBCLFFBQUcsR0FBSCxHQUFHLENBQWlCO0lBQUcsQ0FBQztJQUVyRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxJQUFJLEdBQUc7UUFDTCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO0lBQ3RCLENBQUM7Q0FDRjtBQUdELE1BQU0sT0FBTyxZQUFZO0lBR3ZCLFlBQXNDLEVBQW9CLEVBQXVCLEdBQStCO1FBQzlHLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLEVBQUUsSUFBSSxVQUFVLENBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsTUFBTSxDQUFDLHNCQUFzQixDQUFJLElBQXFCLEVBQUUsSUFBZTtRQUNyRSxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7OztZQVZGLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUU7OztZQWhCZ0IsZ0JBQWdCLHVCQW9CakQsTUFBTSxTQUFDLGdCQUFnQjtZQXBCSCxXQUFXLHVCQW9CaUIsTUFBTSxTQUFDLFdBQVc7OztrQkFGOUUsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5qZWN0LCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5leHBvcnQgY2xhc3MgTGV0Q29udGV4dDxUPiB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZGlyOiBMZXREaXJlY3RpdmU8VD4pIHt9XG5cbiAgZ2V0ICRpbXBsaWNpdCgpOiBUIHtcbiAgICByZXR1cm4gdGhpcy5kaXIubGV0O1xuICB9XG5cbiAgZ2V0IGxldCgpOiBUIHtcbiAgICByZXR1cm4gdGhpcy5kaXIubGV0O1xuICB9XG59XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tsZXRdJyB9KVxuZXhwb3J0IGNsYXNzIExldERpcmVjdGl2ZTxUPiB7XG4gIEBJbnB1dCgpIGxldCE6IFQ7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChWaWV3Q29udGFpbmVyUmVmKSB2YzogVmlld0NvbnRhaW5lclJlZiwgQEluamVjdChUZW1wbGF0ZVJlZikgcmVmOiBUZW1wbGF0ZVJlZjxMZXRDb250ZXh0PFQ+Pikge1xuICAgIHZjLmNyZWF0ZUVtYmVkZGVkVmlldyhyZWYsIG5ldyBMZXRDb250ZXh0PFQ+KHRoaXMpKTtcbiAgfVxuXG4gIHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkPFQ+KF9kaXI6IExldERpcmVjdGl2ZTxUPiwgX2N0eDogTnpTYWZlQW55KTogX2N0eCBpcyBMZXREaXJlY3RpdmU8VD4ge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iXX0=