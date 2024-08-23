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
/**
 * @deprecated Will be removed in v19, Please use `@let` instead.
 */
export class LetDirective {
    constructor(vc, ref) {
        vc.createEmbeddedView(ref, new LetContext(this));
    }
    static ngTemplateContextGuard(_dir, _ctx) {
        return true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.1", ngImport: i0, type: LetDirective, deps: [{ token: ViewContainerRef }, { token: TemplateRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.1", type: LetDirective, isStandalone: true, selector: "[let]", inputs: { let: "let" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.1", ngImport: i0, type: LetDirective, decorators: [{
            type: Directive,
            args: [{ selector: '[let]', standalone: true }]
        }], ctorParameters: () => [{ type: i0.ViewContainerRef, decorators: [{
                    type: Inject,
                    args: [ViewContainerRef]
                }] }, { type: i0.TemplateRef, decorators: [{
                    type: Inject,
                    args: [TemplateRef]
                }] }], propDecorators: { let: [{
                type: Input,
                args: [{ required: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9sZXQvbGV0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUl4RixNQUFNLE9BQU8sVUFBVTtJQUNyQixZQUE2QixHQUFvQjtRQUFwQixRQUFHLEdBQUgsR0FBRyxDQUFpQjtJQUFHLENBQUM7SUFFckQsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztJQUN0QixDQUFDO0lBRUQsSUFBSSxHQUFHO1FBQ0wsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztJQUN0QixDQUFDO0NBQ0Y7QUFFRDs7R0FFRztBQUVILE1BQU0sT0FBTyxZQUFZO0lBR3ZCLFlBQXNDLEVBQW9CLEVBQXVCLEdBQStCO1FBQzlHLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLEVBQUUsSUFBSSxVQUFVLENBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsTUFBTSxDQUFDLHNCQUFzQixDQUFJLElBQXFCLEVBQUUsSUFBZTtRQUNyRSxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7OEdBVFUsWUFBWSxrQkFHSCxnQkFBZ0IsYUFBZ0MsV0FBVztrR0FIcEUsWUFBWTs7MkZBQVosWUFBWTtrQkFEeEIsU0FBUzttQkFBQyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRTs7MEJBSW5DLE1BQU07MkJBQUMsZ0JBQWdCOzswQkFBeUIsTUFBTTsyQkFBQyxXQUFXO3lDQUZwRCxHQUFHO3NCQUE3QixLQUFLO3VCQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5qZWN0LCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5leHBvcnQgY2xhc3MgTGV0Q29udGV4dDxUPiB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZGlyOiBMZXREaXJlY3RpdmU8VD4pIHt9XG5cbiAgZ2V0ICRpbXBsaWNpdCgpOiBUIHtcbiAgICByZXR1cm4gdGhpcy5kaXIubGV0O1xuICB9XG5cbiAgZ2V0IGxldCgpOiBUIHtcbiAgICByZXR1cm4gdGhpcy5kaXIubGV0O1xuICB9XG59XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgV2lsbCBiZSByZW1vdmVkIGluIHYxOSwgUGxlYXNlIHVzZSBgQGxldGAgaW5zdGVhZC5cbiAqL1xuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW2xldF0nLCBzdGFuZGFsb25lOiB0cnVlIH0pXG5leHBvcnQgY2xhc3MgTGV0RGlyZWN0aXZlPFQ+IHtcbiAgQElucHV0KHsgcmVxdWlyZWQ6IHRydWUgfSkgbGV0ITogVDtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KFZpZXdDb250YWluZXJSZWYpIHZjOiBWaWV3Q29udGFpbmVyUmVmLCBASW5qZWN0KFRlbXBsYXRlUmVmKSByZWY6IFRlbXBsYXRlUmVmPExldENvbnRleHQ8VD4+KSB7XG4gICAgdmMuY3JlYXRlRW1iZWRkZWRWaWV3KHJlZiwgbmV3IExldENvbnRleHQ8VD4odGhpcykpO1xuICB9XG5cbiAgc3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQ8VD4oX2RpcjogTGV0RGlyZWN0aXZlPFQ+LCBfY3R4OiBOelNhZmVBbnkpOiBfY3R4IGlzIExldERpcmVjdGl2ZTxUPiB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiJdfQ==