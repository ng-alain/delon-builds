import { __decorate, __metadata } from "tslib";
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { InputNumber } from '@delon/util/decorator';
import * as i0 from "@angular/core";
export class SFFixedDirective {
    constructor(er, render) {
        this.render = render;
        this._inited = false;
        this.el = er.nativeElement;
    }
    init() {
        if (!this._inited || this.num == null || this.num <= 0)
            return;
        const widgetEl = this.el.querySelector('.ant-row') || this.el;
        this.render.addClass(widgetEl, 'sf__fixed');
        const labelEl = widgetEl.querySelector('.ant-form-item-label');
        const controlEl = widgetEl.querySelector('.ant-form-item-control');
        const unit = this.num + 'px';
        if (labelEl) {
            this.render.setStyle(labelEl, 'flex', `0 0 ${unit}`);
            this.render.setStyle(controlEl, 'max-width', `calc(100% - ${unit})`);
        }
        else {
            this.render.setStyle(controlEl, 'margin-left', unit);
        }
    }
    ngAfterViewInit() {
        this._inited = true;
        this.init();
    }
    ngOnChanges() {
        if (this._inited)
            this.init();
    }
}
/** @nocollapse */ SFFixedDirective.ɵfac = function SFFixedDirective_Factory(t) { return new (t || SFFixedDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
/** @nocollapse */ SFFixedDirective.ɵdir = i0.ɵɵngDeclareDirective({ version: "11.1.1", type: SFFixedDirective, selector: "[fixed-label]", inputs: { num: ["fixed-label", "num"] }, usesOnChanges: true, ngImport: i0 });
__decorate([
    InputNumber(),
    __metadata("design:type", Number)
], SFFixedDirective.prototype, "num", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SFFixedDirective, [{
        type: Directive,
        args: [{ selector: '[fixed-label]' }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { num: [{
            type: Input,
            args: ['fixed-label']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2YtZml4ZWQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS9zcmMvc2YtZml4ZWQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFhLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0FBR3BELE1BQU0sT0FBTyxnQkFBZ0I7SUFxQjNCLFlBQVksRUFBYyxFQUFVLE1BQWlCO1FBQWpCLFdBQU0sR0FBTixNQUFNLENBQVc7UUFuQjdDLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFvQnRCLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLGFBQStCLENBQUM7SUFDL0MsQ0FBQztJQWpCTyxJQUFJO1FBQ1YsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQUUsT0FBTztRQUMvRCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQzlELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUM1QyxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDL0QsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ25FLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDO1FBQzdCLElBQUksT0FBTyxFQUFFO1lBQ1gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLElBQUksRUFBRSxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLFdBQVcsRUFBRSxlQUFlLElBQUksR0FBRyxDQUFDLENBQUM7U0FDdEU7YUFBTTtZQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDdEQ7SUFDSCxDQUFDO0lBTUQsZUFBZTtRQUNiLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsT0FBTztZQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQyxDQUFDOzttR0FoQ1UsZ0JBQWdCOzhGQUFoQixnQkFBZ0I7QUFJVTtJQUFkLFdBQVcsRUFBRTs7NkNBQWE7dUZBSnRDLGdCQUFnQjtjQUQ1QixTQUFTO2VBQUMsRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFO3FGQUtELEdBQUc7a0JBQXZDLEtBQUs7bUJBQUMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbnB1dE51bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsL2RlY29yYXRvcic7XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tmaXhlZC1sYWJlbF0nIH0pXG5leHBvcnQgY2xhc3MgU0ZGaXhlZERpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB7XG4gIHByaXZhdGUgZWw6IEhUTUxEaXZFbGVtZW50O1xuICBwcml2YXRlIF9pbml0ZWQgPSBmYWxzZTtcblxuICBASW5wdXQoJ2ZpeGVkLWxhYmVsJykgQElucHV0TnVtYmVyKCkgbnVtOiBudW1iZXI7XG5cbiAgcHJpdmF0ZSBpbml0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5faW5pdGVkIHx8IHRoaXMubnVtID09IG51bGwgfHwgdGhpcy5udW0gPD0gMCkgcmV0dXJuO1xuICAgIGNvbnN0IHdpZGdldEVsID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yKCcuYW50LXJvdycpIHx8IHRoaXMuZWw7XG4gICAgdGhpcy5yZW5kZXIuYWRkQ2xhc3Mod2lkZ2V0RWwsICdzZl9fZml4ZWQnKTtcbiAgICBjb25zdCBsYWJlbEVsID0gd2lkZ2V0RWwucXVlcnlTZWxlY3RvcignLmFudC1mb3JtLWl0ZW0tbGFiZWwnKTtcbiAgICBjb25zdCBjb250cm9sRWwgPSB3aWRnZXRFbC5xdWVyeVNlbGVjdG9yKCcuYW50LWZvcm0taXRlbS1jb250cm9sJyk7XG4gICAgY29uc3QgdW5pdCA9IHRoaXMubnVtICsgJ3B4JztcbiAgICBpZiAobGFiZWxFbCkge1xuICAgICAgdGhpcy5yZW5kZXIuc2V0U3R5bGUobGFiZWxFbCwgJ2ZsZXgnLCBgMCAwICR7dW5pdH1gKTtcbiAgICAgIHRoaXMucmVuZGVyLnNldFN0eWxlKGNvbnRyb2xFbCwgJ21heC13aWR0aCcsIGBjYWxjKDEwMCUgLSAke3VuaXR9KWApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlci5zZXRTdHlsZShjb250cm9sRWwsICdtYXJnaW4tbGVmdCcsIHVuaXQpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGVyOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcjogUmVuZGVyZXIyKSB7XG4gICAgdGhpcy5lbCA9IGVyLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTERpdkVsZW1lbnQ7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5faW5pdGVkID0gdHJ1ZTtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9pbml0ZWQpIHRoaXMuaW5pdCgpO1xuICB9XG59XG4iXX0=