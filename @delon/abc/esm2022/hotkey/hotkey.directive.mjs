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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: HotkeyDirective, deps: [{ token: i0.ElementRef }, { token: i0.NgZone }, { token: i1.Platform }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.0.2", type: HotkeyDirective, isStandalone: true, selector: "[hotkey]", inputs: { hotkey: "hotkey" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: HotkeyDirective, decorators: [{
            type: Directive,
            args: [{ selector: '[hotkey]', standalone: true }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i0.NgZone }, { type: i1.Platform }], propDecorators: { hotkey: [{
                type: Input,
                args: ['hotkey']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG90a2V5LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9ob3RrZXkvaG90a2V5LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFjLEtBQUssRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFFaEYsT0FBTyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBR3BELE1BQU0sT0FBTyxlQUFlO0lBQzFCOzs7O09BSUc7SUFDSCxJQUNJLE1BQU0sQ0FBQyxHQUFXO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVM7WUFBRSxPQUFPO1FBRXJDLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVELFlBQ1UsRUFBMkIsRUFDM0IsTUFBYyxFQUNkLFFBQWtCO1FBRmxCLE9BQUUsR0FBRixFQUFFLENBQXlCO1FBQzNCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQ3pCLENBQUM7SUFFSixXQUFXO1FBQ1QsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUztZQUFFLE9BQU87UUFFckMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7OEdBdkJVLGVBQWU7a0dBQWYsZUFBZTs7MkZBQWYsZUFBZTtrQkFEM0IsU0FBUzttQkFBQyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRTsySEFRL0MsTUFBTTtzQkFEVCxLQUFLO3VCQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBOZ1pvbmUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBpbnN0YWxsLCB1bmluc3RhbGwgfSBmcm9tICdAZ2l0aHViL2hvdGtleSc7XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tob3RrZXldJywgc3RhbmRhbG9uZTogdHJ1ZSB9KVxuZXhwb3J0IGNsYXNzIEhvdGtleURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBTcGVjaWZ5IFtob3RrZXkgZm9ybWF0XShodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2hvdGtleSNob3RrZXktc3RyaW5nLWZvcm1hdClcbiAgICpcbiAgICog5oyH5a6aW+eDremUruagvOW8j10oaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9ob3RrZXkjaG90a2V5LXN0cmluZy1mb3JtYXQpXG4gICAqL1xuICBASW5wdXQoJ2hvdGtleScpXG4gIHNldCBob3RrZXkoa2V5OiBzdHJpbmcpIHtcbiAgICBpZiAoIXRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSByZXR1cm47XG5cbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiBpbnN0YWxsKHRoaXMuZWwubmF0aXZlRWxlbWVudCwga2V5KSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtXG4gICkge31cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSByZXR1cm47XG5cbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB1bmluc3RhbGwodGhpcy5lbC5uYXRpdmVFbGVtZW50KSk7XG4gIH1cbn1cbiJdfQ==