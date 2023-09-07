import { Directive, Input } from '@angular/core';
import { install, uninstall } from '@github/hotkey';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/platform";
export class HotkeyDirective {
    /**
     * Specify [hotkey format](https://github.com/github/hotkey#hotkey-string-format)
     *
     * 指定[热键格式](https://github.com/github/hotkey#hotkey-string-format)
     */
    set hotkey(key) {
        if (!this.platform.isBrowser)
            return;
        this.ngZone.runOutsideAngular(() => install(this.el.nativeElement, key));
    }
    constructor(el, ngZone, platform) {
        this.el = el;
        this.ngZone = ngZone;
        this.platform = platform;
    }
    ngOnDestroy() {
        if (!this.platform.isBrowser)
            return;
        this.ngZone.runOutsideAngular(() => uninstall(this.el.nativeElement));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.4", ngImport: i0, type: HotkeyDirective, deps: [{ token: i0.ElementRef }, { token: i0.NgZone }, { token: i1.Platform }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.4", type: HotkeyDirective, selector: "[hotkey]", inputs: { hotkey: "hotkey" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.4", ngImport: i0, type: HotkeyDirective, decorators: [{
            type: Directive,
            args: [{ selector: '[hotkey]' }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.NgZone }, { type: i1.Platform }]; }, propDecorators: { hotkey: [{
                type: Input,
                args: ['hotkey']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG90a2V5LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9ob3RrZXkvaG90a2V5LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFjLEtBQUssRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFFaEYsT0FBTyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBR3BELE1BQU0sT0FBTyxlQUFlO0lBQzFCOzs7O09BSUc7SUFDSCxJQUNJLE1BQU0sQ0FBQyxHQUFXO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVM7WUFBRSxPQUFPO1FBRXJDLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVELFlBQ1UsRUFBMkIsRUFDM0IsTUFBYyxFQUNkLFFBQWtCO1FBRmxCLE9BQUUsR0FBRixFQUFFLENBQXlCO1FBQzNCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQ3pCLENBQUM7SUFFSixXQUFXO1FBQ1QsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUztZQUFFLE9BQU87UUFFckMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7OEdBdkJVLGVBQWU7a0dBQWYsZUFBZTs7MkZBQWYsZUFBZTtrQkFEM0IsU0FBUzttQkFBQyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUU7NklBUTdCLE1BQU07c0JBRFQsS0FBSzt1QkFBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgTmdab25lLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgaW5zdGFsbCwgdW5pbnN0YWxsIH0gZnJvbSAnQGdpdGh1Yi9ob3RrZXknO1xuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbaG90a2V5XScgfSlcbmV4cG9ydCBjbGFzcyBIb3RrZXlEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAvKipcbiAgICogU3BlY2lmeSBbaG90a2V5IGZvcm1hdF0oaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9ob3RrZXkjaG90a2V5LXN0cmluZy1mb3JtYXQpXG4gICAqXG4gICAqIOaMh+Wumlvng63plK7moLzlvI9dKGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvaG90a2V5I2hvdGtleS1zdHJpbmctZm9ybWF0KVxuICAgKi9cbiAgQElucHV0KCdob3RrZXknKVxuICBzZXQgaG90a2V5KGtleTogc3RyaW5nKSB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3NlcikgcmV0dXJuO1xuXG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gaW5zdGFsbCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIGtleSkpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybVxuICApIHt9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3NlcikgcmV0dXJuO1xuXG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdW5pbnN0YWxsKHRoaXMuZWwubmF0aXZlRWxlbWVudCkpO1xuICB9XG59XG4iXX0=