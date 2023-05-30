import { Directive, Input } from '@angular/core';
import { SF_SEQ } from '../../const';
import * as i0 from "@angular/core";
import * as i1 from "../../sf.component";
class SFTemplateDirective {
    constructor(templateRef, table) {
        this.templateRef = templateRef;
        this.table = table;
    }
    ngOnInit() {
        this.table._addTpl(this.path.startsWith(SF_SEQ) ? this.path : SF_SEQ + this.path, this.templateRef);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.3", ngImport: i0, type: SFTemplateDirective, deps: [{ token: i0.TemplateRef }, { token: i1.SFComponent }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.0.3", type: SFTemplateDirective, selector: "[sf-template]", inputs: { path: ["sf-template", "path"] }, ngImport: i0 }); }
}
export { SFTemplateDirective };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.3", ngImport: i0, type: SFTemplateDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[sf-template]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i1.SFComponent }]; }, propDecorators: { path: [{
                type: Input,
                args: ['sf-template']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2YtdGVtcGxhdGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS9zcmMvd2lkZ2V0cy9jdXN0b20vc2YtdGVtcGxhdGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUV0RSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sYUFBYSxDQUFDOzs7QUFHckMsTUFHYSxtQkFBbUI7SUFHOUIsWUFBb0IsV0FBOEIsRUFBVSxLQUFrQjtRQUExRCxnQkFBVyxHQUFYLFdBQVcsQ0FBbUI7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFhO0lBQUcsQ0FBQztJQUVsRixRQUFRO1FBQ04sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN0RyxDQUFDOzhHQVBVLG1CQUFtQjtrR0FBbkIsbUJBQW1COztTQUFuQixtQkFBbUI7MkZBQW5CLG1CQUFtQjtrQkFIL0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtpQkFDMUI7NEhBRXVCLElBQUk7c0JBQXpCLEtBQUs7dUJBQUMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uSW5pdCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU0ZfU0VRIH0gZnJvbSAnLi4vLi4vY29uc3QnO1xuaW1wb3J0IHsgU0ZDb21wb25lbnQgfSBmcm9tICcuLi8uLi9zZi5jb21wb25lbnQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbc2YtdGVtcGxhdGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBTRlRlbXBsYXRlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCdzZi10ZW1wbGF0ZScpIHBhdGghOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8dm9pZD4sIHByaXZhdGUgdGFibGU6IFNGQ29tcG9uZW50KSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudGFibGUuX2FkZFRwbCh0aGlzLnBhdGguc3RhcnRzV2l0aChTRl9TRVEpID8gdGhpcy5wYXRoIDogU0ZfU0VRICsgdGhpcy5wYXRoLCB0aGlzLnRlbXBsYXRlUmVmKTtcbiAgfVxufVxuIl19