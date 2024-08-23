import { Directive, Injectable, Input, TemplateRef, inject } from '@angular/core';
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.1", ngImport: i0, type: STRowSource, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.1", ngImport: i0, type: STRowSource }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.1", ngImport: i0, type: STRowSource, decorators: [{
            type: Injectable
        }] });
export class STRowDirective {
    constructor() {
        this.source = inject(STRowSource, { host: true });
        this.ref = inject(TemplateRef);
    }
    ngOnInit() {
        this.source.add(this.type, this.id, this.ref);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.1", ngImport: i0, type: STRowDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.1", type: STRowDirective, selector: "[st-row]", inputs: { id: ["st-row", "id"], type: "type" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.1", ngImport: i0, type: STRowDirective, decorators: [{
            type: Directive,
            args: [{ selector: '[st-row]' }]
        }], propDecorators: { id: [{
                type: Input,
                args: ['st-row']
            }], type: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Qtcm93LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9zdC9zdC1yb3cuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUcxRixNQUFNLE9BQU8sV0FBVztJQUR4QjtRQUVVLFdBQU0sR0FBeUMsRUFBRSxDQUFDO1FBQ2xELFNBQUksR0FBeUMsRUFBRSxDQUFDO0tBYXpEO0lBWEMsR0FBRyxDQUFDLElBQXdCLEVBQUUsSUFBWSxFQUFFLEdBQXNCO1FBQ2hFLElBQUksQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUN6RCxDQUFDO0lBRUQsUUFBUSxDQUFDLElBQVk7UUFDbkIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCxNQUFNLENBQUMsSUFBWTtRQUNqQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekIsQ0FBQzs4R0FkVSxXQUFXO2tIQUFYLFdBQVc7OzJGQUFYLFdBQVc7a0JBRHZCLFVBQVU7O0FBbUJYLE1BQU0sT0FBTyxjQUFjO0lBRDNCO1FBRW1CLFdBQU0sR0FBRyxNQUFNLENBQUMsV0FBVyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDN0MsUUFBRyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztLQVE1QztJQUhDLFFBQVE7UUFDTixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2hELENBQUM7OEdBVFUsY0FBYztrR0FBZCxjQUFjOzsyRkFBZCxjQUFjO2tCQUQxQixTQUFTO21CQUFDLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRTs4QkFJaEIsRUFBRTtzQkFBbEIsS0FBSzt1QkFBQyxRQUFRO2dCQUVOLElBQUk7c0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5qZWN0YWJsZSwgSW5wdXQsIE9uSW5pdCwgVGVtcGxhdGVSZWYsIGluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU1RSb3dTb3VyY2Uge1xuICBwcml2YXRlIHRpdGxlczogeyBba2V5OiBzdHJpbmddOiBUZW1wbGF0ZVJlZjx2b2lkPiB9ID0ge307XG4gIHByaXZhdGUgcm93czogeyBba2V5OiBzdHJpbmddOiBUZW1wbGF0ZVJlZjx2b2lkPiB9ID0ge307XG5cbiAgYWRkKHR5cGU6IHN0cmluZyB8IHVuZGVmaW5lZCwgcGF0aDogc3RyaW5nLCByZWY6IFRlbXBsYXRlUmVmPHZvaWQ+KTogdm9pZCB7XG4gICAgdGhpc1t0eXBlID09PSAndGl0bGUnID8gJ3RpdGxlcycgOiAncm93cyddW3BhdGhdID0gcmVmO1xuICB9XG5cbiAgZ2V0VGl0bGUocGF0aDogc3RyaW5nKTogVGVtcGxhdGVSZWY8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnRpdGxlc1twYXRoXTtcbiAgfVxuXG4gIGdldFJvdyhwYXRoOiBzdHJpbmcpOiBUZW1wbGF0ZVJlZjx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMucm93c1twYXRoXTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbc3Qtcm93XScgfSlcbmV4cG9ydCBjbGFzcyBTVFJvd0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgcmVhZG9ubHkgc291cmNlID0gaW5qZWN0KFNUUm93U291cmNlLCB7IGhvc3Q6IHRydWUgfSk7XG4gIHByaXZhdGUgcmVhZG9ubHkgcmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmKTtcbiAgQElucHV0KCdzdC1yb3cnKSBpZCE6IHN0cmluZztcblxuICBASW5wdXQoKSB0eXBlPzogJ3RpdGxlJztcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNvdXJjZS5hZGQodGhpcy50eXBlLCB0aGlzLmlkLCB0aGlzLnJlZik7XG4gIH1cbn1cbiJdfQ==