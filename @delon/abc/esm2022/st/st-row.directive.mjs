import { Directive, Host, Injectable, Input } from '@angular/core';
import * as i0 from "@angular/core";
class STRowSource {
    constructor() {
        this.titles = {};
        this.rows = {};
    }
    add(type, path, ref) {
        this[type === 'title' ? 'titles' : 'rows'][path] = ref;
    }
    getTitle(path) {
        return this.titles[path];
    }
    getRow(path) {
        return this.rows[path];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.2", ngImport: i0, type: STRowSource, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.1.2", ngImport: i0, type: STRowSource }); }
}
export { STRowSource };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.2", ngImport: i0, type: STRowSource, decorators: [{
            type: Injectable
        }] });
class STRowDirective {
    constructor(ref, source) {
        this.ref = ref;
        this.source = source;
    }
    ngOnInit() {
        this.source.add(this.type, this.id, this.ref);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.2", ngImport: i0, type: STRowDirective, deps: [{ token: i0.TemplateRef }, { token: STRowSource, host: true }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.2", type: STRowDirective, selector: "[st-row]", inputs: { id: ["st-row", "id"], type: "type" }, ngImport: i0 }); }
}
export { STRowDirective };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.2", ngImport: i0, type: STRowDirective, decorators: [{
            type: Directive,
            args: [{ selector: '[st-row]' }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: STRowSource, decorators: [{
                    type: Host
                }] }]; }, propDecorators: { id: [{
                type: Input,
                args: ['st-row']
            }], type: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Qtcm93LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9zdC9zdC1yb3cuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQXVCLE1BQU0sZUFBZSxDQUFDOztBQUV4RixNQUNhLFdBQVc7SUFEeEI7UUFFVSxXQUFNLEdBQXlDLEVBQUUsQ0FBQztRQUNsRCxTQUFJLEdBQXlDLEVBQUUsQ0FBQztLQWF6RDtJQVhDLEdBQUcsQ0FBQyxJQUF3QixFQUFFLElBQVksRUFBRSxHQUFzQjtRQUNoRSxJQUFJLENBQUMsSUFBSSxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDekQsQ0FBQztJQUVELFFBQVEsQ0FBQyxJQUFZO1FBQ25CLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsTUFBTSxDQUFDLElBQVk7UUFDakIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pCLENBQUM7OEdBZFUsV0FBVztrSEFBWCxXQUFXOztTQUFYLFdBQVc7MkZBQVgsV0FBVztrQkFEdkIsVUFBVTs7QUFrQlgsTUFDYSxjQUFjO0lBS3pCLFlBQW9CLEdBQXNCLEVBQWtCLE1BQW1CO1FBQTNELFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQWtCLFdBQU0sR0FBTixNQUFNLENBQWE7SUFBRyxDQUFDO0lBRW5GLFFBQVE7UUFDTixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2hELENBQUM7OEdBVFUsY0FBYztrR0FBZCxjQUFjOztTQUFkLGNBQWM7MkZBQWQsY0FBYztrQkFEMUIsU0FBUzttQkFBQyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUU7OzBCQU1ZLElBQUk7NENBSmhDLEVBQUU7c0JBQWxCLEtBQUs7dUJBQUMsUUFBUTtnQkFFTixJQUFJO3NCQUFaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3QsIEluamVjdGFibGUsIElucHV0LCBPbkluaXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTVFJvd1NvdXJjZSB7XG4gIHByaXZhdGUgdGl0bGVzOiB7IFtrZXk6IHN0cmluZ106IFRlbXBsYXRlUmVmPHZvaWQ+IH0gPSB7fTtcbiAgcHJpdmF0ZSByb3dzOiB7IFtrZXk6IHN0cmluZ106IFRlbXBsYXRlUmVmPHZvaWQ+IH0gPSB7fTtcblxuICBhZGQodHlwZTogc3RyaW5nIHwgdW5kZWZpbmVkLCBwYXRoOiBzdHJpbmcsIHJlZjogVGVtcGxhdGVSZWY8dm9pZD4pOiB2b2lkIHtcbiAgICB0aGlzW3R5cGUgPT09ICd0aXRsZScgPyAndGl0bGVzJyA6ICdyb3dzJ11bcGF0aF0gPSByZWY7XG4gIH1cblxuICBnZXRUaXRsZShwYXRoOiBzdHJpbmcpOiBUZW1wbGF0ZVJlZjx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMudGl0bGVzW3BhdGhdO1xuICB9XG5cbiAgZ2V0Um93KHBhdGg6IHN0cmluZyk6IFRlbXBsYXRlUmVmPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5yb3dzW3BhdGhdO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tzdC1yb3ddJyB9KVxuZXhwb3J0IGNsYXNzIFNUUm93RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCdzdC1yb3cnKSBpZCE6IHN0cmluZztcblxuICBASW5wdXQoKSB0eXBlPzogJ3RpdGxlJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlZjogVGVtcGxhdGVSZWY8dm9pZD4sIEBIb3N0KCkgcHJpdmF0ZSBzb3VyY2U6IFNUUm93U291cmNlKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc291cmNlLmFkZCh0aGlzLnR5cGUsIHRoaXMuaWQsIHRoaXMucmVmKTtcbiAgfVxufVxuIl19