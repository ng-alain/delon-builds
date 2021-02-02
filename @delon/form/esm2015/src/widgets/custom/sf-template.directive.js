import { Directive, Input, TemplateRef } from '@angular/core';
import { SF_SEQ } from '../../const';
import { SFComponent } from '../../sf.component';
import * as i0 from "@angular/core";
import * as i1 from "../../sf.component";
export class SFTemplateDirective {
    constructor(templateRef, table) {
        this.templateRef = templateRef;
        this.table = table;
    }
    ngOnInit() {
        this.table._addTpl(this.path.startsWith(SF_SEQ) ? this.path : SF_SEQ + this.path, this.templateRef);
    }
}
/** @nocollapse */ SFTemplateDirective.ɵfac = function SFTemplateDirective_Factory(t) { return new (t || SFTemplateDirective)(i0.ɵɵdirectiveInject(i0.TemplateRef), i0.ɵɵdirectiveInject(i1.SFComponent)); };
/** @nocollapse */ SFTemplateDirective.ɵdir = i0.ɵɵngDeclareDirective({ version: "11.1.1", type: SFTemplateDirective, selector: "[sf-template]", inputs: { path: ["sf-template", "path"] }, ngImport: i0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SFTemplateDirective, [{
        type: Directive,
        args: [{
                selector: '[sf-template]',
            }]
    }], function () { return [{ type: i0.TemplateRef }, { type: i1.SFComponent }]; }, { path: [{
            type: Input,
            args: ['sf-template']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2YtdGVtcGxhdGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS9zcmMvd2lkZ2V0cy9jdXN0b20vc2YtdGVtcGxhdGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7O0FBS2pELE1BQU0sT0FBTyxtQkFBbUI7SUFHOUIsWUFBb0IsV0FBOEIsRUFBVSxLQUFrQjtRQUExRCxnQkFBVyxHQUFYLFdBQVcsQ0FBbUI7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFhO0lBQUcsQ0FBQztJQUVsRixRQUFRO1FBQ04sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN0RyxDQUFDOzt5R0FQVSxtQkFBbUI7aUdBQW5CLG1CQUFtQjt1RkFBbkIsbUJBQW1CO2NBSC9CLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTthQUMxQjt3RkFFdUIsSUFBSTtrQkFBekIsS0FBSzttQkFBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25Jbml0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU0ZfU0VRIH0gZnJvbSAnLi4vLi4vY29uc3QnO1xuaW1wb3J0IHsgU0ZDb21wb25lbnQgfSBmcm9tICcuLi8uLi9zZi5jb21wb25lbnQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbc2YtdGVtcGxhdGVdJyxcbn0pXG5leHBvcnQgY2xhc3MgU0ZUZW1wbGF0ZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgnc2YtdGVtcGxhdGUnKSBwYXRoOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8dm9pZD4sIHByaXZhdGUgdGFibGU6IFNGQ29tcG9uZW50KSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudGFibGUuX2FkZFRwbCh0aGlzLnBhdGguc3RhcnRzV2l0aChTRl9TRVEpID8gdGhpcy5wYXRoIDogU0ZfU0VRICsgdGhpcy5wYXRoLCB0aGlzLnRlbXBsYXRlUmVmKTtcbiAgfVxufVxuIl19