import { Directive, Input } from '@angular/core';
import { filter } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "./acl.service";
export class ACLDirective {
    set acl(value) {
        this.set(value);
    }
    set ability(value) {
        this.set(this.srv.parseAbility(value));
    }
    set(value) {
        this._value = value;
        const CLS = 'acl__hide';
        const el = this.el.nativeElement;
        if (this.srv.can(this._value)) {
            this.renderer.removeClass(el, CLS);
        }
        else {
            this.renderer.addClass(el, CLS);
        }
    }
    constructor(el, renderer, srv) {
        this.el = el;
        this.renderer = renderer;
        this.srv = srv;
        this.change$ = this.srv.change.pipe(filter(r => r != null)).subscribe(() => this.set(this._value));
    }
    ngOnDestroy() {
        this.change$.unsubscribe();
    }
}
ACLDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.5", ngImport: i0, type: ACLDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i1.ACLService }], target: i0.ɵɵFactoryTarget.Directive });
ACLDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.5", type: ACLDirective, selector: "[acl]", inputs: { acl: "acl", ability: ["acl-ability", "ability"] }, exportAs: ["acl"], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.5", ngImport: i0, type: ACLDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[acl]',
                    exportAs: 'acl'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.ACLService }]; }, propDecorators: { acl: [{
                type: Input,
                args: ['acl']
            }], ability: [{
                type: Input,
                args: ['acl-ability']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNsLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FjbC9zcmMvYWNsLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLEtBQUssRUFBd0IsTUFBTSxlQUFlLENBQUM7QUFDbkYsT0FBTyxFQUFnQixNQUFNLEVBQUUsTUFBTSxNQUFNLENBQUM7OztBQVM1QyxNQUFNLE9BQU8sWUFBWTtJQUl2QixJQUNJLEdBQUcsQ0FBQyxLQUFpQjtRQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xCLENBQUM7SUFFRCxJQUNJLE9BQU8sQ0FBQyxLQUFpQjtRQUMzQixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVPLEdBQUcsQ0FBQyxLQUFpQjtRQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixNQUFNLEdBQUcsR0FBRyxXQUFXLENBQUM7UUFDeEIsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUM7UUFDakMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ3BDO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDakM7SUFDSCxDQUFDO0lBRUQsWUFBb0IsRUFBYyxFQUFVLFFBQW1CLEVBQVksR0FBZTtRQUF0RSxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFZLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFDeEYsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDckcsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzdCLENBQUM7O3lHQS9CVSxZQUFZOzZGQUFaLFlBQVk7MkZBQVosWUFBWTtrQkFKeEIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsT0FBTztvQkFDakIsUUFBUSxFQUFFLEtBQUs7aUJBQ2hCO2tKQU1LLEdBQUc7c0JBRE4sS0FBSzt1QkFBQyxLQUFLO2dCQU1SLE9BQU87c0JBRFYsS0FBSzt1QkFBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25EZXN0cm95LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgZmlsdGVyIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEFDTFNlcnZpY2UgfSBmcm9tICcuL2FjbC5zZXJ2aWNlJztcbmltcG9ydCB7IEFDTENhblR5cGUgfSBmcm9tICcuL2FjbC50eXBlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2FjbF0nLFxuICBleHBvcnRBczogJ2FjbCdcbn0pXG5leHBvcnQgY2xhc3MgQUNMRGlyZWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfdmFsdWUhOiBBQ0xDYW5UeXBlO1xuICBwcml2YXRlIGNoYW5nZSQ6IFN1YnNjcmlwdGlvbjtcblxuICBASW5wdXQoJ2FjbCcpXG4gIHNldCBhY2wodmFsdWU6IEFDTENhblR5cGUpIHtcbiAgICB0aGlzLnNldCh2YWx1ZSk7XG4gIH1cblxuICBASW5wdXQoJ2FjbC1hYmlsaXR5JylcbiAgc2V0IGFiaWxpdHkodmFsdWU6IEFDTENhblR5cGUpIHtcbiAgICB0aGlzLnNldCh0aGlzLnNydi5wYXJzZUFiaWxpdHkodmFsdWUpKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0KHZhbHVlOiBBQ0xDYW5UeXBlKTogdm9pZCB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICBjb25zdCBDTFMgPSAnYWNsX19oaWRlJztcbiAgICBjb25zdCBlbCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcbiAgICBpZiAodGhpcy5zcnYuY2FuKHRoaXMuX3ZhbHVlKSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhlbCwgQ0xTKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhlbCwgQ0xTKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByb3RlY3RlZCBzcnY6IEFDTFNlcnZpY2UpIHtcbiAgICB0aGlzLmNoYW5nZSQgPSB0aGlzLnNydi5jaGFuZ2UucGlwZShmaWx0ZXIociA9PiByICE9IG51bGwpKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5zZXQodGhpcy5fdmFsdWUpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuY2hhbmdlJC51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=