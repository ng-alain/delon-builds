import { ChangeDetectorRef, Directive, HostBinding, Inject, Injector } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { takeUntil } from 'rxjs';
import { SFItemComponent } from './sf-item.component';
import { SFComponent } from './sf.component';
import { di } from './utils';
import * as i0 from "@angular/core";
import * as i1 from "./sf-item.component";
import * as i2 from "./sf.component";
class Widget {
    get cls() {
        return this.ui.class || '';
    }
    get disabled() {
        if (this.schema.readOnly === true || this.sfComp.disabled) {
            return true;
        }
        return false;
    }
    get l() {
        return this.formProperty.root.widget.sfComp.locale;
    }
    get oh() {
        return this.ui.optionalHelp;
    }
    get dom() {
        return this.injector.get(DomSanitizer);
    }
    get cleanValue() {
        return this.sfComp?.cleanValue;
    }
    constructor(cd, injector, sfItemComp, sfComp) {
        this.cd = cd;
        this.injector = injector;
        this.sfItemComp = sfItemComp;
        this.sfComp = sfComp;
        this.showError = false;
        this.id = '';
    }
    ngAfterViewInit() {
        this.formProperty.errorsChanges
            .pipe(takeUntil(this.sfItemComp.destroy$))
            .subscribe((errors) => {
            if (errors == null)
                return;
            di(this.ui, 'errorsChanges', this.formProperty.path, errors);
            // 不显示首次校验视觉
            const firstVisual = this.sfComp?.firstVisual;
            if (firstVisual || (!firstVisual && this.sfComp?._inited)) {
                this.showError = errors.length > 0;
                this.error = this.showError ? errors[0].message : '';
                this.cd.detectChanges();
            }
        });
        this.afterViewInit();
    }
    setValue(value) {
        this.formProperty.setValue(value, false);
        di(this.ui, 'valueChanges', this.formProperty.path, this.formProperty);
    }
    get value() {
        return this.formProperty.value;
    }
    detectChanges(onlySelf = false) {
        if (onlySelf) {
            this.cd.markForCheck();
        }
        else {
            this.formProperty.root.widget?.cd.markForCheck();
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: Widget, deps: [{ token: ChangeDetectorRef }, { token: Injector }, { token: SFItemComponent }, { token: SFComponent }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.1", type: Widget, host: { properties: { "class": "this.cls" } }, ngImport: i0 }); }
}
export { Widget };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: Widget, decorators: [{
            type: Directive
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef, decorators: [{
                    type: Inject,
                    args: [ChangeDetectorRef]
                }] }, { type: i0.Injector, decorators: [{
                    type: Inject,
                    args: [Injector]
                }] }, { type: i1.SFItemComponent, decorators: [{
                    type: Inject,
                    args: [SFItemComponent]
                }] }, { type: i2.SFComponent, decorators: [{
                    type: Inject,
                    args: [SFComponent]
                }] }]; }, propDecorators: { cls: [{
                type: HostBinding,
                args: ['class']
            }] } });
class ControlWidget extends Widget {
    reset(_value) { }
    afterViewInit() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: ControlWidget, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.1", type: ControlWidget, usesInheritance: true, ngImport: i0 }); }
}
export { ControlWidget };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: ControlWidget, decorators: [{
            type: Directive
        }] });
class ControlUIWidget extends Widget {
    reset(_value) { }
    afterViewInit() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: ControlUIWidget, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.1", type: ControlUIWidget, usesInheritance: true, ngImport: i0 }); }
}
export { ControlUIWidget };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: ControlUIWidget, decorators: [{
            type: Directive
        }] });
class ArrayLayoutWidget extends Widget {
    reset(_value) { }
    afterViewInit() { }
    ngAfterViewInit() {
        this.formProperty.errorsChanges.pipe(takeUntil(this.sfItemComp.destroy$)).subscribe(() => this.cd.detectChanges());
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: ArrayLayoutWidget, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.1", type: ArrayLayoutWidget, usesInheritance: true, ngImport: i0 }); }
}
export { ArrayLayoutWidget };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: ArrayLayoutWidget, decorators: [{
            type: Directive
        }] });
class ObjectLayoutWidget extends Widget {
    reset(_value) { }
    afterViewInit() { }
    ngAfterViewInit() {
        this.formProperty.errorsChanges.pipe(takeUntil(this.sfItemComp.destroy$)).subscribe(() => this.cd.detectChanges());
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: ObjectLayoutWidget, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.1", type: ObjectLayoutWidget, usesInheritance: true, ngImport: i0 }); }
}
export { ObjectLayoutWidget };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: ObjectLayoutWidget, decorators: [{
            type: Directive
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS9zcmMvd2lkZ2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBaUIsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBWWpDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7OztBQUc3QixNQUNzQixNQUFNO0lBUTFCLElBQ0ksR0FBRztRQUNMLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCxJQUFJLFFBQVE7UUFDVixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTyxDQUFDLFFBQVEsRUFBRTtZQUMxRCxPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsSUFBSSxDQUFDO1FBQ0gsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFPLENBQUMsTUFBTyxDQUFDLE1BQU0sQ0FBQztJQUN2RCxDQUFDO0lBRUQsSUFBSSxFQUFFO1FBQ0osT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQThCLENBQUM7SUFDaEQsQ0FBQztJQUVELElBQUksR0FBRztRQUNMLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENB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QUFNVixNQUNhLGVBQTRDLFNBQVEsTUFBeUI7SUFDeEYsS0FBSyxDQUFDLE1BQWUsSUFBUyxDQUFDO0lBQy9CLGFBQWEsS0FBVSxDQUFDOzhHQUZiLGVBQWU7a0dBQWYsZUFBZTs7U0FBZixlQUFlOzJGQUFmLGVBQWU7a0JBRDNCLFNBQVM7O0FBTVYsTUFDYSxpQkFBa0IsU0FBUSxNQUEwQztJQUMvRSxLQUFLLENBQUMsTUFBZSxJQUFTLENBQUM7SUFDL0IsYUFBYSxLQUFVLENBQUM7SUFFeEIsZUFBZTtRQUNiLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7SUFDdEgsQ0FBQzs4R0FOVSxpQkFBaUI7a0dBQWpCLGlCQUFpQjs7U0FBakIsaUJBQWlCOzJGQUFqQixpQkFBaUI7a0JBRDdCLFNBQVM7O0FBVVYsTUFDYSxrQkFBbUIsU0FBUSxNQUE0QztJQUNsRixLQUFLLENBQUMsTUFBZSxJQUFTLENBQUM7SUFDL0IsYUFBYSxLQUFVLENBQUM7SUFFeEIsZUFBZTtRQUNiLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7SUFDdEgsQ0FBQzs4R0FOVSxrQkFBa0I7a0dBQWxCLGtCQUFrQjs7U0FBbEIsa0JBQWtCOzJGQUFsQixrQkFBa0I7a0JBRDlCLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3RvclJlZiwgRGlyZWN0aXZlLCBIb3N0QmluZGluZywgSW5qZWN0LCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBOZ0NsYXNzVHlwZSwgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuaW1wb3J0IHR5cGUgeyBFcnJvckRhdGEgfSBmcm9tICcuL2Vycm9ycyc7XG5pbXBvcnQgdHlwZSB7IFNGVmFsdWUgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBBcnJheVByb3BlcnR5IH0gZnJvbSAnLi9tb2RlbC9hcnJheS5wcm9wZXJ0eSc7XG5pbXBvcnQgeyBGb3JtUHJvcGVydHkgfSBmcm9tICcuL21vZGVsL2Zvcm0ucHJvcGVydHknO1xuaW1wb3J0IHsgT2JqZWN0UHJvcGVydHkgfSBmcm9tICcuL21vZGVsL29iamVjdC5wcm9wZXJ0eSc7XG5pbXBvcnQgdHlwZSB7IFNGU2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEnO1xuaW1wb3J0IHR5cGUgeyBTRk9wdGlvbmFsSGVscCwgU0ZVSVNjaGVtYUl0ZW0gfSBmcm9tICcuL3NjaGVtYS91aSc7XG5pbXBvcnQgeyBTRkl0ZW1Db21wb25lbnQgfSBmcm9tICcuL3NmLWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IFNGQ29tcG9uZW50IH0gZnJvbSAnLi9zZi5jb21wb25lbnQnO1xuaW1wb3J0IHsgZGkgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB0eXBlIHsgU0ZBcnJheVdpZGdldFNjaGVtYSwgU0ZPYmplY3RXaWRnZXRTY2hlbWEgfSBmcm9tICcuL3dpZGdldHMnO1xuXG5ARGlyZWN0aXZlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBXaWRnZXQ8VCBleHRlbmRzIEZvcm1Qcm9wZXJ0eSwgVUlUIGV4dGVuZHMgU0ZVSVNjaGVtYUl0ZW0+IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIGZvcm1Qcm9wZXJ0eSE6IFQ7XG4gIGVycm9yPzogc3RyaW5nO1xuICBzaG93RXJyb3IgPSBmYWxzZTtcbiAgaWQgPSAnJztcbiAgc2NoZW1hITogU0ZTY2hlbWE7XG4gIHVpITogVUlUO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgY2xzKCk6IE5nQ2xhc3NUeXBlIHtcbiAgICByZXR1cm4gdGhpcy51aS5jbGFzcyB8fCAnJztcbiAgfVxuXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5zY2hlbWEucmVhZE9ubHkgPT09IHRydWUgfHwgdGhpcy5zZkNvbXAhLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBnZXQgbCgpOiBMb2NhbGVEYXRhIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtUHJvcGVydHkucm9vdC53aWRnZXQhLnNmQ29tcCEubG9jYWxlO1xuICB9XG5cbiAgZ2V0IG9oKCk6IFNGT3B0aW9uYWxIZWxwIHtcbiAgICByZXR1cm4gdGhpcy51aS5vcHRpb25hbEhlbHAgYXMgU0ZPcHRpb25hbEhlbHA7XG4gIH1cblxuICBnZXQgZG9tKCk6IERvbVNhbml0aXplciB7XG4gICAgcmV0dXJuIHRoaXMuaW5qZWN0b3IuZ2V0KERvbVNhbml0aXplcik7XG4gIH1cblxuICBnZXQgY2xlYW5WYWx1ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zZkNvbXA/LmNsZWFuVmFsdWUhO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChDaGFuZ2VEZXRlY3RvclJlZikgcHVibGljIHJlYWRvbmx5IGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBASW5qZWN0KEluamVjdG9yKSBwdWJsaWMgcmVhZG9ubHkgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIEBJbmplY3QoU0ZJdGVtQ29tcG9uZW50KSBwdWJsaWMgcmVhZG9ubHkgc2ZJdGVtQ29tcD86IFNGSXRlbUNvbXBvbmVudCxcbiAgICBASW5qZWN0KFNGQ29tcG9uZW50KSBwdWJsaWMgcmVhZG9ubHkgc2ZDb21wPzogU0ZDb21wb25lbnRcbiAgKSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5lcnJvcnNDaGFuZ2VzXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5zZkl0ZW1Db21wIS5kZXN0cm95JCkpXG4gICAgICAuc3Vic2NyaWJlKChlcnJvcnM6IEVycm9yRGF0YVtdIHwgbnVsbCkgPT4ge1xuICAgICAgICBpZiAoZXJyb3JzID09IG51bGwpIHJldHVybjtcblxuICAgICAgICBkaSh0aGlzLnVpLCAnZXJyb3JzQ2hhbmdlcycsIHRoaXMuZm9ybVByb3BlcnR5LnBhdGgsIGVycm9ycyk7XG5cbiAgICAgICAgLy8g5LiN5pi+56S66aaW5qyh5qCh6aqM6KeG6KeJXG4gICAgICAgIGNvbnN0IGZpcnN0VmlzdWFsID0gdGhpcy5zZkNvbXA/LmZpcnN0VmlzdWFsO1xuICAgICAgICBpZiAoZmlyc3RWaXN1YWwgfHwgKCFmaXJzdFZpc3VhbCAmJiB0aGlzLnNmQ29tcD8uX2luaXRlZCkpIHtcbiAgICAgICAgICB0aGlzLnNob3dFcnJvciA9IGVycm9ycy5sZW5ndGggPiAwO1xuICAgICAgICAgIHRoaXMuZXJyb3IgPSB0aGlzLnNob3dFcnJvciA/IChlcnJvcnNbMF0ubWVzc2FnZSBhcyBzdHJpbmcpIDogJyc7XG5cbiAgICAgICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgdGhpcy5hZnRlclZpZXdJbml0KCk7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZTogU0ZWYWx1ZSk6IHZvaWQge1xuICAgIHRoaXMuZm9ybVByb3BlcnR5LnNldFZhbHVlKHZhbHVlLCBmYWxzZSk7XG4gICAgZGkodGhpcy51aSwgJ3ZhbHVlQ2hhbmdlcycsIHRoaXMuZm9ybVByb3BlcnR5LnBhdGgsIHRoaXMuZm9ybVByb3BlcnR5KTtcbiAgfVxuXG4gIGdldCB2YWx1ZSgpOiBOelNhZmVBbnkge1xuICAgIHJldHVybiB0aGlzLmZvcm1Qcm9wZXJ0eS52YWx1ZTtcbiAgfVxuXG4gIGRldGVjdENoYW5nZXMob25seVNlbGY6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgIGlmIChvbmx5U2VsZikge1xuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5mb3JtUHJvcGVydHkucm9vdC53aWRnZXQ/LmNkLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIGFic3RyYWN0IHJlc2V0KHZhbHVlOiBTRlZhbHVlKTogdm9pZDtcblxuICBhYnN0cmFjdCBhZnRlclZpZXdJbml0KCk6IHZvaWQ7XG59XG5cbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGNsYXNzIENvbnRyb2xXaWRnZXQgZXh0ZW5kcyBXaWRnZXQ8Rm9ybVByb3BlcnR5LCBTRlVJU2NoZW1hSXRlbT4ge1xuICByZXNldChfdmFsdWU6IFNGVmFsdWUpOiB2b2lkIHt9XG4gIGFmdGVyVmlld0luaXQoKTogdm9pZCB7fVxufVxuXG5ARGlyZWN0aXZlKClcbmV4cG9ydCBjbGFzcyBDb250cm9sVUlXaWRnZXQ8VUlUIGV4dGVuZHMgU0ZVSVNjaGVtYUl0ZW0+IGV4dGVuZHMgV2lkZ2V0PEZvcm1Qcm9wZXJ0eSwgVUlUPiB7XG4gIHJlc2V0KF92YWx1ZTogU0ZWYWx1ZSk6IHZvaWQge31cbiAgYWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHt9XG59XG5cbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGNsYXNzIEFycmF5TGF5b3V0V2lkZ2V0IGV4dGVuZHMgV2lkZ2V0PEFycmF5UHJvcGVydHksIFNGQXJyYXlXaWRnZXRTY2hlbWE+IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIHJlc2V0KF92YWx1ZTogU0ZWYWx1ZSk6IHZvaWQge31cbiAgYWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZm9ybVByb3BlcnR5LmVycm9yc0NoYW5nZXMucGlwZSh0YWtlVW50aWwodGhpcy5zZkl0ZW1Db21wIS5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNkLmRldGVjdENoYW5nZXMoKSk7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSgpXG5leHBvcnQgY2xhc3MgT2JqZWN0TGF5b3V0V2lkZ2V0IGV4dGVuZHMgV2lkZ2V0PE9iamVjdFByb3BlcnR5LCBTRk9iamVjdFdpZGdldFNjaGVtYT4gaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgcmVzZXQoX3ZhbHVlOiBTRlZhbHVlKTogdm9pZCB7fVxuICBhZnRlclZpZXdJbml0KCk6IHZvaWQge31cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5mb3JtUHJvcGVydHkuZXJyb3JzQ2hhbmdlcy5waXBlKHRha2VVbnRpbCh0aGlzLnNmSXRlbUNvbXAhLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpKTtcbiAgfVxufVxuIl19