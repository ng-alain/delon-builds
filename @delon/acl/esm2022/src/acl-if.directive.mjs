import { Directive, Input } from '@angular/core';
import { filter } from 'rxjs';
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.3", ngImport: i0, type: ACLIfDirective, deps: [{ token: i0.TemplateRef }, { token: i1.ACLService }, { token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.3", type: ACLIfDirective, selector: "[aclIf]", inputs: { aclIf: "aclIf", aclIfThen: "aclIfThen", aclIfElse: "aclIfElse", except: "except" }, exportAs: ["aclIf"], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.3", ngImport: i0, type: ACLIfDirective, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNsLWlmLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FjbC9zcmMvYWNsLWlmLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFtQixLQUFLLEVBQTRDLE1BQU0sZUFBZSxDQUFDO0FBQzVHLE9BQU8sRUFBZ0IsTUFBTSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7QUFTNUMsTUFBTSxPQUFPLGNBQWM7SUFXekIsWUFDRSxXQUE4QixFQUN0QixHQUFlLEVBQ2YsY0FBZ0M7UUFEaEMsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUNmLG1CQUFjLEdBQWQsY0FBYyxDQUFrQjtRQVRsQyxxQkFBZ0IsR0FBNkIsSUFBSSxDQUFDO1FBQ2xELHFCQUFnQixHQUE2QixJQUFJLENBQUM7UUFDbEQsaUJBQVksR0FBaUMsSUFBSSxDQUFDO1FBQ2xELGlCQUFZLEdBQWlDLElBQUksQ0FBQztRQUNsRCxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBT3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUNqRyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsV0FBVyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxJQUNJLEtBQUssQ0FBQyxLQUFpQjtRQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELElBQ0ksU0FBUyxDQUFDLFdBQXFDO1FBQ2pELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxXQUFXLENBQUM7UUFDcEMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxJQUNJLFNBQVMsQ0FBQyxXQUFxQztRQUNqRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsV0FBVyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsSUFDSSxNQUFNLENBQUMsS0FBYztRQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssSUFBSSxJQUFJLElBQUksR0FBRyxLQUFLLEVBQUUsS0FBSyxPQUFPLENBQUM7SUFDekQsQ0FBQztJQUNELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0lBRVMsV0FBVztRQUNuQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNsRCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDdEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDNUIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQ3pCLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO29CQUN6QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7aUJBQ25GO2FBQ0Y7U0FDRjthQUFNO1lBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2dCQUN6QixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtvQkFDekIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2lCQUNuRjthQUNGO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDOUIsQ0FBQzs4R0F2RVUsY0FBYztrR0FBZCxjQUFjOzsyRkFBZCxjQUFjO2tCQUoxQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxTQUFTO29CQUNuQixRQUFRLEVBQUUsT0FBTztpQkFDbEI7MEpBc0JLLEtBQUs7c0JBRFIsS0FBSztnQkFPRixTQUFTO3NCQURaLEtBQUs7Z0JBUUYsU0FBUztzQkFEWixLQUFLO2dCQVFGLE1BQU07c0JBRFQsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRW1iZWRkZWRWaWV3UmVmLCBJbnB1dCwgT25EZXN0cm95LCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBmaWx0ZXIgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQUNMU2VydmljZSB9IGZyb20gJy4vYWNsLnNlcnZpY2UnO1xuaW1wb3J0IHsgQUNMQ2FuVHlwZSB9IGZyb20gJy4vYWNsLnR5cGUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYWNsSWZdJyxcbiAgZXhwb3J0QXM6ICdhY2xJZidcbn0pXG5leHBvcnQgY2xhc3MgQUNMSWZEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZXhjZXB0OiBib29sZWFuIHwgc3RyaW5nIHwgdW5kZWZpbmVkIHwgbnVsbDtcblxuICBwcml2YXRlIF92YWx1ZSE6IEFDTENhblR5cGU7XG4gIHByaXZhdGUgX2NoYW5nZSQ6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBfdGhlblRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIF9lbHNlVGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgX3RoZW5WaWV3UmVmOiBFbWJlZGRlZFZpZXdSZWY8dm9pZD4gfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBfZWxzZVZpZXdSZWY6IEVtYmVkZGVkVmlld1JlZjx2b2lkPiB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIF9leGNlcHQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8dm9pZD4sXG4gICAgcHJpdmF0ZSBzcnY6IEFDTFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZlxuICApIHtcbiAgICB0aGlzLl9jaGFuZ2UkID0gdGhpcy5zcnYuY2hhbmdlLnBpcGUoZmlsdGVyKHIgPT4gciAhPSBudWxsKSkuc3Vic2NyaWJlKCgpID0+IHRoaXMuX3VwZGF0ZVZpZXcoKSk7XG4gICAgdGhpcy5fdGhlblRlbXBsYXRlUmVmID0gdGVtcGxhdGVSZWY7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgYWNsSWYodmFsdWU6IEFDTENhblR5cGUpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuX3VwZGF0ZVZpZXcoKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBhY2xJZlRoZW4odGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbCkge1xuICAgIHRoaXMuX3RoZW5UZW1wbGF0ZVJlZiA9IHRlbXBsYXRlUmVmO1xuICAgIHRoaXMuX3RoZW5WaWV3UmVmID0gbnVsbDtcbiAgICB0aGlzLl91cGRhdGVWaWV3KCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgYWNsSWZFbHNlKHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGwpIHtcbiAgICB0aGlzLl9lbHNlVGVtcGxhdGVSZWYgPSB0ZW1wbGF0ZVJlZjtcbiAgICB0aGlzLl9lbHNlVmlld1JlZiA9IG51bGw7XG4gICAgdGhpcy5fdXBkYXRlVmlldygpO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGV4Y2VwdCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2V4Y2VwdCA9IHZhbHVlICE9IG51bGwgJiYgYCR7dmFsdWV9YCAhPT0gJ2ZhbHNlJztcbiAgfVxuICBnZXQgZXhjZXB0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9leGNlcHQ7XG4gIH1cblxuICBwcm90ZWN0ZWQgX3VwZGF0ZVZpZXcoKTogdm9pZCB7XG4gICAgY29uc3QgcmVzID0gdGhpcy5zcnYuY2FuKHRoaXMuX3ZhbHVlKTtcbiAgICBpZiAoKHJlcyAmJiAhdGhpcy5leGNlcHQpIHx8ICghcmVzICYmIHRoaXMuZXhjZXB0KSkge1xuICAgICAgaWYgKCF0aGlzLl90aGVuVmlld1JlZikge1xuICAgICAgICB0aGlzLl92aWV3Q29udGFpbmVyLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuX2Vsc2VWaWV3UmVmID0gbnVsbDtcbiAgICAgICAgaWYgKHRoaXMuX3RoZW5UZW1wbGF0ZVJlZikge1xuICAgICAgICAgIHRoaXMuX3RoZW5WaWV3UmVmID0gdGhpcy5fdmlld0NvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy5fdGhlblRlbXBsYXRlUmVmKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIXRoaXMuX2Vsc2VWaWV3UmVmKSB7XG4gICAgICAgIHRoaXMuX3ZpZXdDb250YWluZXIuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5fdGhlblZpZXdSZWYgPSBudWxsO1xuICAgICAgICBpZiAodGhpcy5fZWxzZVRlbXBsYXRlUmVmKSB7XG4gICAgICAgICAgdGhpcy5fZWxzZVZpZXdSZWYgPSB0aGlzLl92aWV3Q29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLl9lbHNlVGVtcGxhdGVSZWYpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fY2hhbmdlJC51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=