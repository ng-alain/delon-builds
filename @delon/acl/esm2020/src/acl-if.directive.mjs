import { Directive, Input } from '@angular/core';
import { filter } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "./acl.service";
export class ACLIfDirective {
    constructor(templateRef, srv, _viewContainer) {
        this.srv = srv;
        this._viewContainer = _viewContainer;
        this._thenTemplateRef = null;
        this._elseTemplateRef = null;
        this._thenViewRef = null;
        this._elseViewRef = null;
        this._except = false;
        this._change$ = this.srv.change.pipe(filter(r => r != null)).subscribe(() => this._updateView());
        this._thenTemplateRef = templateRef;
    }
    set aclIf(value) {
        this._value = value;
        this._updateView();
    }
    set aclIfThen(templateRef) {
        this._thenTemplateRef = templateRef;
        this._thenViewRef = null;
        this._updateView();
    }
    set aclIfElse(templateRef) {
        this._elseTemplateRef = templateRef;
        this._elseViewRef = null;
        this._updateView();
    }
    set except(value) {
        this._except = value != null && `${value}` !== 'false';
    }
    get except() {
        return this._except;
    }
    _updateView() {
        const res = this.srv.can(this._value);
        if ((res && !this.except) || (!res && this.except)) {
            if (!this._thenViewRef) {
                this._viewContainer.clear();
                this._elseViewRef = null;
                if (this._thenTemplateRef) {
                    this._thenViewRef = this._viewContainer.createEmbeddedView(this._thenTemplateRef);
                }
            }
        }
        else {
            if (!this._elseViewRef) {
                this._viewContainer.clear();
                this._thenViewRef = null;
                if (this._elseTemplateRef) {
                    this._elseViewRef = this._viewContainer.createEmbeddedView(this._elseTemplateRef);
                }
            }
        }
    }
    ngOnDestroy() {
        this._change$.unsubscribe();
    }
}
ACLIfDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.5", ngImport: i0, type: ACLIfDirective, deps: [{ token: i0.TemplateRef }, { token: i1.ACLService }, { token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
ACLIfDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.5", type: ACLIfDirective, selector: "[aclIf]", inputs: { aclIf: "aclIf", aclIfThen: "aclIfThen", aclIfElse: "aclIfElse", except: "except" }, exportAs: ["aclIf"], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.5", ngImport: i0, type: ACLIfDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[aclIf]',
                    exportAs: 'aclIf'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i1.ACLService }, { type: i0.ViewContainerRef }]; }, propDecorators: { aclIf: [{
                type: Input
            }], aclIfThen: [{
                type: Input
            }], aclIfElse: [{
                type: Input
            }], except: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNsLWlmLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FjbC9zcmMvYWNsLWlmLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFtQixLQUFLLEVBQTRDLE1BQU0sZUFBZSxDQUFDO0FBRTVHLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBU3hDLE1BQU0sT0FBTyxjQUFjO0lBV3pCLFlBQVksV0FBOEIsRUFBVSxHQUFlLEVBQVUsY0FBZ0M7UUFBekQsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFrQjtRQU5yRyxxQkFBZ0IsR0FBNkIsSUFBSSxDQUFDO1FBQ2xELHFCQUFnQixHQUE2QixJQUFJLENBQUM7UUFDbEQsaUJBQVksR0FBaUMsSUFBSSxDQUFDO1FBQ2xELGlCQUFZLEdBQWlDLElBQUksQ0FBQztRQUNsRCxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBR3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUNqRyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsV0FBVyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxJQUNJLEtBQUssQ0FBQyxLQUFpQjtRQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELElBQ0ksU0FBUyxDQUFDLFdBQXFDO1FBQ2pELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxXQUFXLENBQUM7UUFDcEMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxJQUNJLFNBQVMsQ0FBQyxXQUFxQztRQUNqRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsV0FBVyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsSUFDSSxNQUFNLENBQUMsS0FBYztRQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssSUFBSSxJQUFJLElBQUksR0FBRyxLQUFLLEVBQUUsS0FBSyxPQUFPLENBQUM7SUFDekQsQ0FBQztJQUNELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0lBRVMsV0FBVztRQUNuQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNsRCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDdEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDNUIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQ3pCLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO29CQUN6QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7aUJBQ25GO2FBQ0Y7U0FDRjthQUFNO1lBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2dCQUN6QixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtvQkFDekIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2lCQUNuRjthQUNGO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDOUIsQ0FBQzs7MkdBbkVVLGNBQWM7K0ZBQWQsY0FBYzsyRkFBZCxjQUFjO2tCQUoxQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxTQUFTO29CQUNuQixRQUFRLEVBQUUsT0FBTztpQkFDbEI7MEpBa0JLLEtBQUs7c0JBRFIsS0FBSztnQkFPRixTQUFTO3NCQURaLEtBQUs7Z0JBUUYsU0FBUztzQkFEWixLQUFLO2dCQVFGLE1BQU07c0JBRFQsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRW1iZWRkZWRWaWV3UmVmLCBJbnB1dCwgT25EZXN0cm95LCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEFDTFNlcnZpY2UgfSBmcm9tICcuL2FjbC5zZXJ2aWNlJztcbmltcG9ydCB7IEFDTENhblR5cGUgfSBmcm9tICcuL2FjbC50eXBlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2FjbElmXScsXG4gIGV4cG9ydEFzOiAnYWNsSWYnXG59KVxuZXhwb3J0IGNsYXNzIEFDTElmRGlyZWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2V4Y2VwdDogYm9vbGVhbiB8IHN0cmluZyB8IHVuZGVmaW5lZCB8IG51bGw7XG5cbiAgcHJpdmF0ZSBfdmFsdWUhOiBBQ0xDYW5UeXBlO1xuICBwcml2YXRlIF9jaGFuZ2UkOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX3RoZW5UZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBfZWxzZVRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIF90aGVuVmlld1JlZjogRW1iZWRkZWRWaWV3UmVmPHZvaWQ+IHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgX2Vsc2VWaWV3UmVmOiBFbWJlZGRlZFZpZXdSZWY8dm9pZD4gfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBfZXhjZXB0ID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IodGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPHZvaWQ+LCBwcml2YXRlIHNydjogQUNMU2VydmljZSwgcHJpdmF0ZSBfdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZikge1xuICAgIHRoaXMuX2NoYW5nZSQgPSB0aGlzLnNydi5jaGFuZ2UucGlwZShmaWx0ZXIociA9PiByICE9IG51bGwpKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5fdXBkYXRlVmlldygpKTtcbiAgICB0aGlzLl90aGVuVGVtcGxhdGVSZWYgPSB0ZW1wbGF0ZVJlZjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBhY2xJZih2YWx1ZTogQUNMQ2FuVHlwZSkge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5fdXBkYXRlVmlldygpO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGFjbElmVGhlbih0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsKSB7XG4gICAgdGhpcy5fdGhlblRlbXBsYXRlUmVmID0gdGVtcGxhdGVSZWY7XG4gICAgdGhpcy5fdGhlblZpZXdSZWYgPSBudWxsO1xuICAgIHRoaXMuX3VwZGF0ZVZpZXcoKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBhY2xJZkVsc2UodGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbCkge1xuICAgIHRoaXMuX2Vsc2VUZW1wbGF0ZVJlZiA9IHRlbXBsYXRlUmVmO1xuICAgIHRoaXMuX2Vsc2VWaWV3UmVmID0gbnVsbDtcbiAgICB0aGlzLl91cGRhdGVWaWV3KCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZXhjZXB0KHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZXhjZXB0ID0gdmFsdWUgIT0gbnVsbCAmJiBgJHt2YWx1ZX1gICE9PSAnZmFsc2UnO1xuICB9XG4gIGdldCBleGNlcHQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2V4Y2VwdDtcbiAgfVxuXG4gIHByb3RlY3RlZCBfdXBkYXRlVmlldygpOiB2b2lkIHtcbiAgICBjb25zdCByZXMgPSB0aGlzLnNydi5jYW4odGhpcy5fdmFsdWUpO1xuICAgIGlmICgocmVzICYmICF0aGlzLmV4Y2VwdCkgfHwgKCFyZXMgJiYgdGhpcy5leGNlcHQpKSB7XG4gICAgICBpZiAoIXRoaXMuX3RoZW5WaWV3UmVmKSB7XG4gICAgICAgIHRoaXMuX3ZpZXdDb250YWluZXIuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5fZWxzZVZpZXdSZWYgPSBudWxsO1xuICAgICAgICBpZiAodGhpcy5fdGhlblRlbXBsYXRlUmVmKSB7XG4gICAgICAgICAgdGhpcy5fdGhlblZpZXdSZWYgPSB0aGlzLl92aWV3Q29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLl90aGVuVGVtcGxhdGVSZWYpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghdGhpcy5fZWxzZVZpZXdSZWYpIHtcbiAgICAgICAgdGhpcy5fdmlld0NvbnRhaW5lci5jbGVhcigpO1xuICAgICAgICB0aGlzLl90aGVuVmlld1JlZiA9IG51bGw7XG4gICAgICAgIGlmICh0aGlzLl9lbHNlVGVtcGxhdGVSZWYpIHtcbiAgICAgICAgICB0aGlzLl9lbHNlVmlld1JlZiA9IHRoaXMuX3ZpZXdDb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMuX2Vsc2VUZW1wbGF0ZVJlZik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9jaGFuZ2UkLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==