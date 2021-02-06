import { Directive, Host, Injectable, Input, TemplateRef } from '@angular/core';
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
STRowSource.decorators = [
    { type: Injectable }
];
export class STRowDirective {
    constructor(ref, source) {
        this.ref = ref;
        this.source = source;
    }
    ngOnInit() {
        this.source.add(this.type, this.id, this.ref);
    }
}
STRowDirective.decorators = [
    { type: Directive, args: [{ selector: '[st-row]' },] }
];
/** @nocollapse */
STRowDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: STRowSource, decorators: [{ type: Host }] }
];
STRowDirective.propDecorators = {
    id: [{ type: Input, args: ['st-row',] }],
    type: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Qtcm93LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9zdC9zdC1yb3cuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQVUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3hGLE1BQU0sT0FBTyxXQUFXO0lBRHhCO1FBRVUsV0FBTSxHQUF5QyxFQUFFLENBQUM7UUFDbEQsU0FBSSxHQUF5QyxFQUFFLENBQUM7SUFhMUQsQ0FBQztJQVhDLEdBQUcsQ0FBQyxJQUFZLEVBQUUsSUFBWSxFQUFFLEdBQXNCO1FBQ3BELElBQUksQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUN6RCxDQUFDO0lBRUQsUUFBUSxDQUFDLElBQVk7UUFDbkIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCxNQUFNLENBQUMsSUFBWTtRQUNqQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekIsQ0FBQzs7O1lBZkYsVUFBVTs7QUFtQlgsTUFBTSxPQUFPLGNBQWM7SUFLekIsWUFBb0IsR0FBc0IsRUFBa0IsTUFBbUI7UUFBM0QsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFBa0IsV0FBTSxHQUFOLE1BQU0sQ0FBYTtJQUFHLENBQUM7SUFFbkYsUUFBUTtRQUNOLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7O1lBVkYsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRTs7OztZQXBCa0IsV0FBVztZQTBCTSxXQUFXLHVCQUFsQyxJQUFJOzs7aUJBSmhELEtBQUssU0FBQyxRQUFRO21CQUVkLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3QsIEluamVjdGFibGUsIElucHV0LCBPbkluaXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTVFJvd1NvdXJjZSB7XG4gIHByaXZhdGUgdGl0bGVzOiB7IFtrZXk6IHN0cmluZ106IFRlbXBsYXRlUmVmPHZvaWQ+IH0gPSB7fTtcbiAgcHJpdmF0ZSByb3dzOiB7IFtrZXk6IHN0cmluZ106IFRlbXBsYXRlUmVmPHZvaWQ+IH0gPSB7fTtcblxuICBhZGQodHlwZTogc3RyaW5nLCBwYXRoOiBzdHJpbmcsIHJlZjogVGVtcGxhdGVSZWY8dm9pZD4pOiB2b2lkIHtcbiAgICB0aGlzW3R5cGUgPT09ICd0aXRsZScgPyAndGl0bGVzJyA6ICdyb3dzJ11bcGF0aF0gPSByZWY7XG4gIH1cblxuICBnZXRUaXRsZShwYXRoOiBzdHJpbmcpOiBUZW1wbGF0ZVJlZjx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMudGl0bGVzW3BhdGhdO1xuICB9XG5cbiAgZ2V0Um93KHBhdGg6IHN0cmluZyk6IFRlbXBsYXRlUmVmPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5yb3dzW3BhdGhdO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tzdC1yb3ddJyB9KVxuZXhwb3J0IGNsYXNzIFNUUm93RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCdzdC1yb3cnKSBpZDogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIHR5cGU6ICd0aXRsZSc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWY6IFRlbXBsYXRlUmVmPHZvaWQ+LCBASG9zdCgpIHByaXZhdGUgc291cmNlOiBTVFJvd1NvdXJjZSkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNvdXJjZS5hZGQodGhpcy50eXBlLCB0aGlzLmlkLCB0aGlzLnJlZik7XG4gIH1cbn1cbiJdfQ==