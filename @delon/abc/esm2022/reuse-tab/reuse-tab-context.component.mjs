import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ReuseTabContextService } from './reuse-tab-context.service';
import * as i0 from "@angular/core";
export class ReuseTabContextComponent {
    set i18n(value) {
        this.srv.i18n = value;
    }
    constructor() {
        this.srv = inject(ReuseTabContextService);
        this.change = new EventEmitter();
        this.srv.show.pipe(takeUntilDestroyed()).subscribe(context => this.srv.open(context));
        this.srv.close.pipe(takeUntilDestroyed()).subscribe(res => this.change.emit(res));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.1", ngImport: i0, type: ReuseTabContextComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.1", type: ReuseTabContextComponent, isStandalone: true, selector: "reuse-tab-context", inputs: { i18n: "i18n" }, outputs: { change: "change" }, ngImport: i0, template: ``, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.1", ngImport: i0, type: ReuseTabContextComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'reuse-tab-context',
                    template: ``,
                    standalone: true
                }]
        }], ctorParameters: () => [], propDecorators: { i18n: [{
                type: Input
            }], change: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2UtdGFiLWNvbnRleHQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3JldXNlLXRhYi9yZXVzZS10YWItY29udGV4dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFaEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7O0FBUXJFLE1BQU0sT0FBTyx3QkFBd0I7SUFHbkMsSUFDSSxJQUFJLENBQUMsS0FBbUM7UUFDMUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7SUFJRDtRQVRpQixRQUFHLEdBQUcsTUFBTSxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFPbkMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUEwQixDQUFDO1FBR3JFLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUN0RixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDcEYsQ0FBQzs4R0FiVSx3QkFBd0I7a0dBQXhCLHdCQUF3QixzSUFIekIsRUFBRTs7MkZBR0Qsd0JBQXdCO2tCQUxwQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLFFBQVEsRUFBRSxFQUFFO29CQUNaLFVBQVUsRUFBRSxJQUFJO2lCQUNqQjt3REFLSyxJQUFJO3NCQURQLEtBQUs7Z0JBS2EsTUFBTTtzQkFBeEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBpbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRha2VVbnRpbERlc3Ryb3llZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvcnhqcy1pbnRlcm9wJztcblxuaW1wb3J0IHsgUmV1c2VUYWJDb250ZXh0U2VydmljZSB9IGZyb20gJy4vcmV1c2UtdGFiLWNvbnRleHQuc2VydmljZSc7XG5pbXBvcnQgeyBSZXVzZUNvbnRleHRDbG9zZUV2ZW50LCBSZXVzZUNvbnRleHRJMThuIH0gZnJvbSAnLi9yZXVzZS10YWIuaW50ZXJmYWNlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3JldXNlLXRhYi1jb250ZXh0JyxcbiAgdGVtcGxhdGU6IGBgLFxuICBzdGFuZGFsb25lOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIFJldXNlVGFiQ29udGV4dENvbXBvbmVudCB7XG4gIHByaXZhdGUgcmVhZG9ubHkgc3J2ID0gaW5qZWN0KFJldXNlVGFiQ29udGV4dFNlcnZpY2UpO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBpMThuKHZhbHVlOiBSZXVzZUNvbnRleHRJMThuIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5zcnYuaTE4biA9IHZhbHVlO1xuICB9XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8UmV1c2VDb250ZXh0Q2xvc2VFdmVudD4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnNydi5zaG93LnBpcGUodGFrZVVudGlsRGVzdHJveWVkKCkpLnN1YnNjcmliZShjb250ZXh0ID0+IHRoaXMuc3J2Lm9wZW4oY29udGV4dCkpO1xuICAgIHRoaXMuc3J2LmNsb3NlLnBpcGUodGFrZVVudGlsRGVzdHJveWVkKCkpLnN1YnNjcmliZShyZXMgPT4gdGhpcy5jaGFuZ2UuZW1pdChyZXMpKTtcbiAgfVxufVxuIl19