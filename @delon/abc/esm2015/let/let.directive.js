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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9sZXQvbGV0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXhGLE1BQU0sT0FBTyxVQUFVO0lBQ3JCLFlBQTZCLEdBQW9CO1FBQXBCLFFBQUcsR0FBSCxHQUFHLENBQWlCO0lBQUcsQ0FBQztJQUVyRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxJQUFJLEdBQUc7UUFDTCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO0lBQ3RCLENBQUM7Q0FDRjtBQUdELE1BQU0sT0FBTyxZQUFZO0lBR3ZCLFlBQXNDLGFBQStCLEVBQXVCLEdBQStCO1FBQ3pILGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLEVBQUUsSUFBSSxVQUFVLENBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRUQsTUFBTSxDQUFDLHNCQUFzQixDQUFJLElBQXFCLEVBQUUsSUFBUztRQUMvRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7OztZQVZGLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUU7Ozs7WUFkZ0IsZ0JBQWdCLHVCQWtCakQsTUFBTSxTQUFDLGdCQUFnQjtZQWxCSCxXQUFXLHVCQWtCNEIsTUFBTSxTQUFDLFdBQVc7OztrQkFGekYsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5qZWN0LCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGNsYXNzIExldENvbnRleHQ8VD4ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGRpcjogTGV0RGlyZWN0aXZlPFQ+KSB7fVxuXG4gIGdldCAkaW1wbGljaXQoKTogVCB7XG4gICAgcmV0dXJuIHRoaXMuZGlyLmxldDtcbiAgfVxuXG4gIGdldCBsZXQoKTogVCB7XG4gICAgcmV0dXJuIHRoaXMuZGlyLmxldDtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbbGV0XScgfSlcbmV4cG9ydCBjbGFzcyBMZXREaXJlY3RpdmU8VD4ge1xuICBASW5wdXQoKSBsZXQhOiBUO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoVmlld0NvbnRhaW5lclJlZikgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZiwgQEluamVjdChUZW1wbGF0ZVJlZikgcmVmOiBUZW1wbGF0ZVJlZjxMZXRDb250ZXh0PFQ+Pikge1xuICAgIHZpZXdDb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KHJlZiwgbmV3IExldENvbnRleHQ8VD4odGhpcykpO1xuICB9XG5cbiAgc3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQ8VD4oX2RpcjogTGV0RGlyZWN0aXZlPFQ+LCBfY3R4OiBhbnkpOiBfY3R4IGlzIExldERpcmVjdGl2ZTxUPiB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiJdfQ==