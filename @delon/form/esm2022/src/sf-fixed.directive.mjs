import { Directive, Input, numberAttribute } from '@angular/core';
import * as i0 from "@angular/core";
export class SFFixedDirective {
    init() {
        if (!this._inited || this.num == null || this.num <= 0)
            return;
        const el = this.el.nativeElement;
        const widgetEl = el.querySelector('.ant-row') || el;
        this.render.addClass(widgetEl, 'sf__fixed');
        const labelEl = widgetEl.querySelector('.ant-form-item-label');
        const controlEl = widgetEl.querySelector('.ant-form-item-control-wrapper,.ant-form-item-control');
        const unit = `${this.num}px`;
        if (labelEl) {
            this.render.setStyle(labelEl, 'flex', `0 0 ${unit}`);
            this.render.setStyle(controlEl, 'max-width', `calc(100% - ${unit})`);
        }
        else {
            this.render.setStyle(controlEl, 'margin-left', unit);
        }
    }
    constructor(el, render) {
        this.el = el;
        this.render = render;
        this._inited = false;
    }
    ngAfterViewInit() {
        this._inited = true;
        this.init();
    }
    ngOnChanges() {
        if (this._inited)
            this.init();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: SFFixedDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "16.1.0", version: "17.1.0", type: SFFixedDirective, selector: "[fixed-label]", inputs: { num: ["fixed-label", "num", numberAttribute] }, usesOnChanges: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: SFFixedDirective, decorators: [{
            type: Directive,
            args: [{ selector: '[fixed-label]' }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i0.Renderer2 }], propDecorators: { num: [{
                type: Input,
                args: [{ alias: 'fixed-label', transform: numberAttribute }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2YtZml4ZWQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS9zcmMvc2YtZml4ZWQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFjLEtBQUssRUFBd0IsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUduSCxNQUFNLE9BQU8sZ0JBQWdCO0lBS25CLElBQUk7UUFDVixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7WUFBRSxPQUFPO1FBQy9ELE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDO1FBQ2pDLE1BQU0sUUFBUSxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQWMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2pFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUM1QyxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDL0QsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyx1REFBdUQsQ0FBQyxDQUFDO1FBQ2xHLE1BQU0sSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQzdCLElBQUksT0FBTyxFQUFFLENBQUM7WUFDWixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sSUFBSSxFQUFFLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsV0FBVyxFQUFFLGVBQWUsSUFBSSxHQUFHLENBQUMsQ0FBQztRQUN2RSxDQUFDO2FBQU0sQ0FBQztZQUNOLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkQsQ0FBQztJQUNILENBQUM7SUFFRCxZQUNVLEVBQTJCLEVBQzNCLE1BQWlCO1FBRGpCLE9BQUUsR0FBRixFQUFFLENBQXlCO1FBQzNCLFdBQU0sR0FBTixNQUFNLENBQVc7UUF0Qm5CLFlBQU8sR0FBRyxLQUFLLENBQUM7SUF1QnJCLENBQUM7SUFFSixlQUFlO1FBQ2IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxPQUFPO1lBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hDLENBQUM7OEdBakNVLGdCQUFnQjtrR0FBaEIsZ0JBQWdCLG1FQUdlLGVBQWU7OzJGQUg5QyxnQkFBZ0I7a0JBRDVCLFNBQVM7bUJBQUMsRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFO3VHQUl1QixHQUFHO3NCQUEvRCxLQUFLO3VCQUFDLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25DaGFuZ2VzLCBSZW5kZXJlcjIsIG51bWJlckF0dHJpYnV0ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbZml4ZWQtbGFiZWxdJyB9KVxuZXhwb3J0IGNsYXNzIFNGRml4ZWREaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xuICBwcml2YXRlIF9pbml0ZWQgPSBmYWxzZTtcblxuICBASW5wdXQoeyBhbGlhczogJ2ZpeGVkLWxhYmVsJywgdHJhbnNmb3JtOiBudW1iZXJBdHRyaWJ1dGUgfSkgbnVtPzogbnVtYmVyIHwgbnVsbDtcblxuICBwcml2YXRlIGluaXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9pbml0ZWQgfHwgdGhpcy5udW0gPT0gbnVsbCB8fCB0aGlzLm51bSA8PSAwKSByZXR1cm47XG4gICAgY29uc3QgZWwgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3Qgd2lkZ2V0RWwgPSBlbC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignLmFudC1yb3cnKSB8fCBlbDtcbiAgICB0aGlzLnJlbmRlci5hZGRDbGFzcyh3aWRnZXRFbCwgJ3NmX19maXhlZCcpO1xuICAgIGNvbnN0IGxhYmVsRWwgPSB3aWRnZXRFbC5xdWVyeVNlbGVjdG9yKCcuYW50LWZvcm0taXRlbS1sYWJlbCcpO1xuICAgIGNvbnN0IGNvbnRyb2xFbCA9IHdpZGdldEVsLnF1ZXJ5U2VsZWN0b3IoJy5hbnQtZm9ybS1pdGVtLWNvbnRyb2wtd3JhcHBlciwuYW50LWZvcm0taXRlbS1jb250cm9sJyk7XG4gICAgY29uc3QgdW5pdCA9IGAke3RoaXMubnVtfXB4YDtcbiAgICBpZiAobGFiZWxFbCkge1xuICAgICAgdGhpcy5yZW5kZXIuc2V0U3R5bGUobGFiZWxFbCwgJ2ZsZXgnLCBgMCAwICR7dW5pdH1gKTtcbiAgICAgIHRoaXMucmVuZGVyLnNldFN0eWxlKGNvbnRyb2xFbCwgJ21heC13aWR0aCcsIGBjYWxjKDEwMCUgLSAke3VuaXR9KWApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlci5zZXRTdHlsZShjb250cm9sRWwsICdtYXJnaW4tbGVmdCcsIHVuaXQpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIHByaXZhdGUgcmVuZGVyOiBSZW5kZXJlcjJcbiAgKSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9pbml0ZWQgPSB0cnVlO1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2luaXRlZCkgdGhpcy5pbml0KCk7XG4gIH1cbn1cbiJdfQ==