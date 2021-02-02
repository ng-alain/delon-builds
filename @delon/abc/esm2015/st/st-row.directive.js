import { Directive, Host, Injectable, Input, TemplateRef } from '@angular/core';
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
/** @nocollapse */ STRowSource.ɵfac = function STRowSource_Factory(t) { return new (t || STRowSource)(); };
/** @nocollapse */ STRowSource.ɵprov = i0.ɵɵdefineInjectable({ token: STRowSource, factory: STRowSource.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(STRowSource, [{
        type: Injectable
    }], null, null); })();
export class STRowDirective {
    constructor(ref, source) {
        this.ref = ref;
        this.source = source;
    }
    ngOnInit() {
        this.source.add(this.type, this.id, this.ref);
    }
}
/** @nocollapse */ STRowDirective.ɵfac = function STRowDirective_Factory(t) { return new (t || STRowDirective)(i0.ɵɵdirectiveInject(i0.TemplateRef), i0.ɵɵdirectiveInject(STRowSource, 1)); };
/** @nocollapse */ STRowDirective.ɵdir = i0.ɵɵngDeclareDirective({ version: "11.1.1", type: STRowDirective, selector: "[st-row]", inputs: { id: ["st-row", "id"], type: "type" }, ngImport: i0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(STRowDirective, [{
        type: Directive,
        args: [{ selector: '[st-row]' }]
    }], function () { return [{ type: i0.TemplateRef }, { type: STRowSource, decorators: [{
                type: Host
            }] }]; }, { id: [{
            type: Input,
            args: ['st-row']
        }], type: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Qtcm93LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9zdC9zdC1yb3cuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQVUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUd4RixNQUFNLE9BQU8sV0FBVztJQUR4QjtRQUVVLFdBQU0sR0FBeUMsRUFBRSxDQUFDO1FBQ2xELFNBQUksR0FBeUMsRUFBRSxDQUFDO0tBYXpEO0lBWEMsR0FBRyxDQUFDLElBQVksRUFBRSxJQUFZLEVBQUUsR0FBc0I7UUFDcEQsSUFBSSxDQUFDLElBQUksS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQ3pELENBQUM7SUFFRCxRQUFRLENBQUMsSUFBWTtRQUNuQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELE1BQU0sQ0FBQyxJQUFZO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDOzt5RkFkVSxXQUFXO3NFQUFYLFdBQVcsV0FBWCxXQUFXO3VGQUFYLFdBQVc7Y0FEdkIsVUFBVTs7QUFtQlgsTUFBTSxPQUFPLGNBQWM7SUFLekIsWUFBb0IsR0FBc0IsRUFBa0IsTUFBbUI7UUFBM0QsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFBa0IsV0FBTSxHQUFOLE1BQU0sQ0FBYTtJQUFHLENBQUM7SUFFbkYsUUFBUTtRQUNOLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7K0ZBVFUsY0FBYyw2REFLMkMsV0FBVzs0RkFMcEUsY0FBYzt1RkFBZCxjQUFjO2NBRDFCLFNBQVM7ZUFBQyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUU7Z0VBTW1DLFdBQVc7c0JBQWxDLElBQUk7d0JBSmhDLEVBQUU7a0JBQWxCLEtBQUs7bUJBQUMsUUFBUTtZQUVOLElBQUk7a0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdCwgSW5qZWN0YWJsZSwgSW5wdXQsIE9uSW5pdCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNUUm93U291cmNlIHtcbiAgcHJpdmF0ZSB0aXRsZXM6IHsgW2tleTogc3RyaW5nXTogVGVtcGxhdGVSZWY8dm9pZD4gfSA9IHt9O1xuICBwcml2YXRlIHJvd3M6IHsgW2tleTogc3RyaW5nXTogVGVtcGxhdGVSZWY8dm9pZD4gfSA9IHt9O1xuXG4gIGFkZCh0eXBlOiBzdHJpbmcsIHBhdGg6IHN0cmluZywgcmVmOiBUZW1wbGF0ZVJlZjx2b2lkPik6IHZvaWQge1xuICAgIHRoaXNbdHlwZSA9PT0gJ3RpdGxlJyA/ICd0aXRsZXMnIDogJ3Jvd3MnXVtwYXRoXSA9IHJlZjtcbiAgfVxuXG4gIGdldFRpdGxlKHBhdGg6IHN0cmluZyk6IFRlbXBsYXRlUmVmPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy50aXRsZXNbcGF0aF07XG4gIH1cblxuICBnZXRSb3cocGF0aDogc3RyaW5nKTogVGVtcGxhdGVSZWY8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnJvd3NbcGF0aF07XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW3N0LXJvd10nIH0pXG5leHBvcnQgY2xhc3MgU1RSb3dEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoJ3N0LXJvdycpIGlkOiBzdHJpbmc7XG5cbiAgQElucHV0KCkgdHlwZTogJ3RpdGxlJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlZjogVGVtcGxhdGVSZWY8dm9pZD4sIEBIb3N0KCkgcHJpdmF0ZSBzb3VyY2U6IFNUUm93U291cmNlKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc291cmNlLmFkZCh0aGlzLnR5cGUsIHRoaXMuaWQsIHRoaXMucmVmKTtcbiAgfVxufVxuIl19