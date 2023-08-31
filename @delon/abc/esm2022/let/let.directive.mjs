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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.3", ngImport: i0, type: LetDirective, deps: [{ token: ViewContainerRef }, { token: TemplateRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.3", type: LetDirective, selector: "[let]", inputs: { let: "let" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.3", ngImport: i0, type: LetDirective, decorators: [{
            type: Directive,
            args: [{ selector: '[let]' }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef, decorators: [{
                    type: Inject,
                    args: [ViewContainerRef]
                }] }, { type: i0.TemplateRef, decorators: [{
                    type: Inject,
                    args: [TemplateRef]
                }] }]; }, propDecorators: { let: [{
                type: Input,
                args: [{ required: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9sZXQvbGV0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUl4RixNQUFNLE9BQU8sVUFBVTtJQUNyQixZQUE2QixHQUFvQjtRQUFwQixRQUFHLEdBQUgsR0FBRyxDQUFpQjtJQUFHLENBQUM7SUFFckQsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztJQUN0QixDQUFDO0lBRUQsSUFBSSxHQUFHO1FBQ0wsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztJQUN0QixDQUFDO0NBQ0Y7QUFHRCxNQUFNLE9BQU8sWUFBWTtJQUd2QixZQUFzQyxFQUFvQixFQUF1QixHQUErQjtRQUM5RyxFQUFFLENBQUMsa0JBQWtCLENBQUMsR0FBRyxFQUFFLElBQUksVUFBVSxDQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELE1BQU0sQ0FBQyxzQkFBc0IsQ0FBSSxJQUFxQixFQUFFLElBQWU7UUFDckUsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzhHQVRVLFlBQVksa0JBR0gsZ0JBQWdCLGFBQWdDLFdBQVc7a0dBSHBFLFlBQVk7OzJGQUFaLFlBQVk7a0JBRHhCLFNBQVM7bUJBQUMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFOzswQkFJakIsTUFBTTsyQkFBQyxnQkFBZ0I7OzBCQUF5QixNQUFNOzJCQUFDLFdBQVc7NENBRnBELEdBQUc7c0JBQTdCLEtBQUs7dUJBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbmplY3QsIElucHV0LCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgdHlwZSB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbmV4cG9ydCBjbGFzcyBMZXRDb250ZXh0PFQ+IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBkaXI6IExldERpcmVjdGl2ZTxUPikge31cblxuICBnZXQgJGltcGxpY2l0KCk6IFQge1xuICAgIHJldHVybiB0aGlzLmRpci5sZXQ7XG4gIH1cblxuICBnZXQgbGV0KCk6IFQge1xuICAgIHJldHVybiB0aGlzLmRpci5sZXQ7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW2xldF0nIH0pXG5leHBvcnQgY2xhc3MgTGV0RGlyZWN0aXZlPFQ+IHtcbiAgQElucHV0KHsgcmVxdWlyZWQ6IHRydWUgfSkgbGV0ITogVDtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KFZpZXdDb250YWluZXJSZWYpIHZjOiBWaWV3Q29udGFpbmVyUmVmLCBASW5qZWN0KFRlbXBsYXRlUmVmKSByZWY6IFRlbXBsYXRlUmVmPExldENvbnRleHQ8VD4+KSB7XG4gICAgdmMuY3JlYXRlRW1iZWRkZWRWaWV3KHJlZiwgbmV3IExldENvbnRleHQ8VD4odGhpcykpO1xuICB9XG5cbiAgc3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQ8VD4oX2RpcjogTGV0RGlyZWN0aXZlPFQ+LCBfY3R4OiBOelNhZmVBbnkpOiBfY3R4IGlzIExldERpcmVjdGl2ZTxUPiB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiJdfQ==