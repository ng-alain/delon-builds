import { Directive, Host, Injectable, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class STRowSource {
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
}
STRowSource.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.1", ngImport: i0, type: STRowSource, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
STRowSource.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.2.1", ngImport: i0, type: STRowSource });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.1", ngImport: i0, type: STRowSource, decorators: [{
            type: Injectable
        }] });
export class STRowDirective {
    constructor(ref, source) {
        this.ref = ref;
        this.source = source;
    }
    ngOnInit() {
        this.source.add(this.type, this.id, this.ref);
    }
}
STRowDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.1", ngImport: i0, type: STRowDirective, deps: [{ token: i0.TemplateRef }, { token: STRowSource, host: true }], target: i0.ɵɵFactoryTarget.Directive });
STRowDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.2.1", type: STRowDirective, selector: "[st-row]", inputs: { id: ["st-row", "id"], type: "type" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.1", ngImport: i0, type: STRowDirective, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Qtcm93LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9zdC9zdC1yb3cuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQXVCLE1BQU0sZUFBZSxDQUFDOztBQUd4RixNQUFNLE9BQU8sV0FBVztJQUR4QjtRQUVVLFdBQU0sR0FBeUMsRUFBRSxDQUFDO1FBQ2xELFNBQUksR0FBeUMsRUFBRSxDQUFDO0tBYXpEO0lBWEMsR0FBRyxDQUFDLElBQXdCLEVBQUUsSUFBWSxFQUFFLEdBQXNCO1FBQ2hFLElBQUksQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUN6RCxDQUFDO0lBRUQsUUFBUSxDQUFDLElBQVk7UUFDbkIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCxNQUFNLENBQUMsSUFBWTtRQUNqQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekIsQ0FBQzs7d0dBZFUsV0FBVzs0R0FBWCxXQUFXOzJGQUFYLFdBQVc7a0JBRHZCLFVBQVU7O0FBbUJYLE1BQU0sT0FBTyxjQUFjO0lBS3pCLFlBQW9CLEdBQXNCLEVBQWtCLE1BQW1CO1FBQTNELFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQWtCLFdBQU0sR0FBTixNQUFNLENBQWE7SUFBRyxDQUFDO0lBRW5GLFFBQVE7UUFDTixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2hELENBQUM7OzJHQVRVLGNBQWMsNkNBSzJDLFdBQVc7K0ZBTHBFLGNBQWM7MkZBQWQsY0FBYztrQkFEMUIsU0FBUzttQkFBQyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUU7b0ZBTW1DLFdBQVc7MEJBQWxDLElBQUk7NENBSmhDLEVBQUU7c0JBQWxCLEtBQUs7dUJBQUMsUUFBUTtnQkFFTixJQUFJO3NCQUFaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3QsIEluamVjdGFibGUsIElucHV0LCBPbkluaXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTVFJvd1NvdXJjZSB7XG4gIHByaXZhdGUgdGl0bGVzOiB7IFtrZXk6IHN0cmluZ106IFRlbXBsYXRlUmVmPHZvaWQ+IH0gPSB7fTtcbiAgcHJpdmF0ZSByb3dzOiB7IFtrZXk6IHN0cmluZ106IFRlbXBsYXRlUmVmPHZvaWQ+IH0gPSB7fTtcblxuICBhZGQodHlwZTogc3RyaW5nIHwgdW5kZWZpbmVkLCBwYXRoOiBzdHJpbmcsIHJlZjogVGVtcGxhdGVSZWY8dm9pZD4pOiB2b2lkIHtcbiAgICB0aGlzW3R5cGUgPT09ICd0aXRsZScgPyAndGl0bGVzJyA6ICdyb3dzJ11bcGF0aF0gPSByZWY7XG4gIH1cblxuICBnZXRUaXRsZShwYXRoOiBzdHJpbmcpOiBUZW1wbGF0ZVJlZjx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMudGl0bGVzW3BhdGhdO1xuICB9XG5cbiAgZ2V0Um93KHBhdGg6IHN0cmluZyk6IFRlbXBsYXRlUmVmPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5yb3dzW3BhdGhdO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tzdC1yb3ddJyB9KVxuZXhwb3J0IGNsYXNzIFNUUm93RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCdzdC1yb3cnKSBpZCE6IHN0cmluZztcblxuICBASW5wdXQoKSB0eXBlPzogJ3RpdGxlJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlZjogVGVtcGxhdGVSZWY8dm9pZD4sIEBIb3N0KCkgcHJpdmF0ZSBzb3VyY2U6IFNUUm93U291cmNlKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc291cmNlLmFkZCh0aGlzLnR5cGUsIHRoaXMuaWQsIHRoaXMucmVmKTtcbiAgfVxufVxuIl19