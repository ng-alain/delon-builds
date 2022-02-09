import { ChangeDetectorRef, Directive, HostBinding, Inject, Injector } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { takeUntil } from 'rxjs/operators';
import { SFItemComponent } from './sf-item.component';
import { SFComponent } from './sf.component';
import { di } from './utils';
import * as i0 from "@angular/core";
import * as i1 from "./sf-item.component";
import * as i2 from "./sf.component";
export class Widget {
    constructor(cd, injector, sfItemComp, sfComp) {
        this.cd = cd;
        this.injector = injector;
        this.sfItemComp = sfItemComp;
        this.sfComp = sfComp;
        this.showError = false;
        this.id = '';
        this.firstVisual = false;
    }
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
    ngAfterViewInit() {
        this.formProperty.errorsChanges
            .pipe(takeUntil(this.sfItemComp.unsubscribe$))
            .subscribe((errors) => {
            if (errors == null)
                return;
            di(this.ui, 'errorsChanges', this.formProperty.path, errors);
            // 不显示首次校验视觉
            if (this.firstVisual) {
                this.showError = errors.length > 0;
                this.error = this.showError ? errors[0].message : '';
                this.cd.detectChanges();
            }
            this.firstVisual = true;
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
            this.formProperty.root.widget.cd.markForCheck();
        }
    }
}
Widget.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: Widget, deps: [{ token: ChangeDetectorRef }, { token: Injector }, { token: SFItemComponent }, { token: SFComponent }], target: i0.ɵɵFactoryTarget.Directive });
Widget.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.2.2", type: Widget, host: { properties: { "class": "this.cls" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: Widget, decorators: [{
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
export class ControlWidget extends Widget {
    reset(_value) { }
    afterViewInit() { }
}
ControlWidget.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: ControlWidget, deps: null, target: i0.ɵɵFactoryTarget.Directive });
ControlWidget.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.2.2", type: ControlWidget, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: ControlWidget, decorators: [{
            type: Directive
        }] });
export class ControlUIWidget extends Widget {
    reset(_value) { }
    afterViewInit() { }
}
ControlUIWidget.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: ControlUIWidget, deps: null, target: i0.ɵɵFactoryTarget.Directive });
ControlUIWidget.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.2.2", type: ControlUIWidget, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: ControlUIWidget, decorators: [{
            type: Directive
        }] });
export class ArrayLayoutWidget extends Widget {
    reset(_value) { }
    afterViewInit() { }
    ngAfterViewInit() {
        this.formProperty.errorsChanges
            .pipe(takeUntil(this.sfItemComp.unsubscribe$))
            .subscribe(() => this.cd.detectChanges());
    }
}
ArrayLayoutWidget.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: ArrayLayoutWidget, deps: null, target: i0.ɵɵFactoryTarget.Directive });
ArrayLayoutWidget.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.2.2", type: ArrayLayoutWidget, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: ArrayLayoutWidget, decorators: [{
            type: Directive
        }] });
export class ObjectLayoutWidget extends Widget {
    reset(_value) { }
    afterViewInit() { }
    ngAfterViewInit() {
        this.formProperty.errorsChanges
            .pipe(takeUntil(this.sfItemComp.unsubscribe$))
            .subscribe(() => this.cd.detectChanges());
    }
}
ObjectLayoutWidget.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: ObjectLayoutWidget, deps: null, target: i0.ɵɵFactoryTarget.Directive });
ObjectLayoutWidget.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.2.2", type: ObjectLayoutWidget, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: ObjectLayoutWidget, decorators: [{
            type: Directive
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS9zcmMvd2lkZ2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBaUIsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFZM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sU0FBUyxDQUFDOzs7O0FBSTdCLE1BQU0sT0FBZ0IsTUFBTTtJQXNDMUIsWUFDNkMsRUFBcUIsRUFDOUIsUUFBa0IsRUFDWCxVQUE0QixFQUNoQyxNQUFvQjtRQUhkLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBQzlCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDWCxlQUFVLEdBQVYsVUFBVSxDQUFrQjtRQUNoQyxXQUFNLEdBQU4sTUFBTSxDQUFjO1FBdkMzRCxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLE9BQUUsR0FBRyxFQUFFLENBQUM7UUFHUixnQkFBVyxHQUFHLEtBQUssQ0FBQztJQW9DakIsQ0FBQztJQWxDSixJQUNJLEdBQUc7UUFDTCxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsSUFBSSxRQUFRO1FBQ1YsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU8sQ0FBQyxRQUFRLEVBQUU7WUFDMUQsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVE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QUFLLENBQUMsTUFBZSxJQUFTLENBQUM7SUFDL0IsYUFBYSxLQUFVLENBQUM7OzRHQUZiLGVBQWU7Z0dBQWYsZUFBZTsyRkFBZixlQUFlO2tCQUQzQixTQUFTOztBQU9WLE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxNQUEwQztJQUMvRSxLQUFLLENBQUMsTUFBZSxJQUFTLENBQUM7SUFDL0IsYUFBYSxLQUFVLENBQUM7SUFFeEIsZUFBZTtRQUNiLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYTthQUM1QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDOUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs4R0FSVSxpQkFBaUI7a0dBQWpCLGlCQUFpQjsyRkFBakIsaUJBQWlCO2tCQUQ3QixTQUFTOztBQWFWLE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxNQUE0QztJQUNsRixLQUFLLENBQUMsTUFBZSxJQUFTLENBQUM7SUFDL0IsYUFBYSxLQUFVLENBQUM7SUFFeEIsZUFBZTtRQUNiLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYTthQUM1QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDOUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztJQUM5QyxDQUFDOzsrR0FSVSxrQkFBa0I7bUdBQWxCLGtCQUFrQjsyRkFBbEIsa0JBQWtCO2tCQUQ5QixTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIEluamVjdCwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IE5nQ2xhc3NUeXBlLCBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5pbXBvcnQgeyBFcnJvckRhdGEgfSBmcm9tICcuL2Vycm9ycyc7XG5pbXBvcnQgeyBTRlZhbHVlIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQXJyYXlQcm9wZXJ0eSB9IGZyb20gJy4vbW9kZWwvYXJyYXkucHJvcGVydHknO1xuaW1wb3J0IHsgRm9ybVByb3BlcnR5IH0gZnJvbSAnLi9tb2RlbC9mb3JtLnByb3BlcnR5JztcbmltcG9ydCB7IE9iamVjdFByb3BlcnR5IH0gZnJvbSAnLi9tb2RlbC9vYmplY3QucHJvcGVydHknO1xuaW1wb3J0IHsgU0ZTY2hlbWEgfSBmcm9tICcuL3NjaGVtYSc7XG5pbXBvcnQgeyBTRk9wdGlvbmFsSGVscCwgU0ZVSVNjaGVtYUl0ZW0gfSBmcm9tICcuL3NjaGVtYS91aSc7XG5pbXBvcnQgeyBTRkl0ZW1Db21wb25lbnQgfSBmcm9tICcuL3NmLWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IFNGQ29tcG9uZW50IH0gZnJvbSAnLi9zZi5jb21wb25lbnQnO1xuaW1wb3J0IHsgZGkgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IFNGQXJyYXlXaWRnZXRTY2hlbWEsIFNGT2JqZWN0V2lkZ2V0U2NoZW1hIH0gZnJvbSAnLi93aWRnZXRzJztcblxuQERpcmVjdGl2ZSgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgV2lkZ2V0PFQgZXh0ZW5kcyBGb3JtUHJvcGVydHksIFVJVCBleHRlbmRzIFNGVUlTY2hlbWFJdGVtPiBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBmb3JtUHJvcGVydHkhOiBUO1xuICBlcnJvcj86IHN0cmluZztcbiAgc2hvd0Vycm9yID0gZmFsc2U7XG4gIGlkID0gJyc7XG4gIHNjaGVtYSE6IFNGU2NoZW1hO1xuICB1aSE6IFVJVDtcbiAgZmlyc3RWaXN1YWwgPSBmYWxzZTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGNscygpOiBOZ0NsYXNzVHlwZSB7XG4gICAgcmV0dXJuIHRoaXMudWkuY2xhc3MgfHwgJyc7XG4gIH1cblxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuc2NoZW1hLnJlYWRPbmx5ID09PSB0cnVlIHx8IHRoaXMuc2ZDb21wIS5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZ2V0IGwoKTogTG9jYWxlRGF0YSB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybVByb3BlcnR5LnJvb3Qud2lkZ2V0LnNmQ29tcCEubG9jYWxlO1xuICB9XG5cbiAgZ2V0IG9oKCk6IFNGT3B0aW9uYWxIZWxwIHtcbiAgICByZXR1cm4gdGhpcy51aS5vcHRpb25hbEhlbHAgYXMgU0ZPcHRpb25hbEhlbHA7XG4gIH1cblxuICBnZXQgZG9tKCk6IERvbVNhbml0aXplciB7XG4gICAgcmV0dXJuIHRoaXMuaW5qZWN0b3IuZ2V0KERvbVNhbml0aXplcik7XG4gIH1cblxuICBnZXQgY2xlYW5WYWx1ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zZkNvbXA/LmNsZWFuVmFsdWUhO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChDaGFuZ2VEZXRlY3RvclJlZikgcHVibGljIHJlYWRvbmx5IGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBASW5qZWN0KEluamVjdG9yKSBwdWJsaWMgcmVhZG9ubHkgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIEBJbmplY3QoU0ZJdGVtQ29tcG9uZW50KSBwdWJsaWMgcmVhZG9ubHkgc2ZJdGVtQ29tcD86IFNGSXRlbUNvbXBvbmVudCxcbiAgICBASW5qZWN0KFNGQ29tcG9uZW50KSBwdWJsaWMgcmVhZG9ubHkgc2ZDb21wPzogU0ZDb21wb25lbnRcbiAgKSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5lcnJvcnNDaGFuZ2VzXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5zZkl0ZW1Db21wIS51bnN1YnNjcmliZSQpKVxuICAgICAgLnN1YnNjcmliZSgoZXJyb3JzOiBFcnJvckRhdGFbXSB8IG51bGwpID0+IHtcbiAgICAgICAgaWYgKGVycm9ycyA9PSBudWxsKSByZXR1cm47XG4gICAgICAgIGRpKHRoaXMudWksICdlcnJvcnNDaGFuZ2VzJywgdGhpcy5mb3JtUHJvcGVydHkucGF0aCwgZXJyb3JzKTtcblxuICAgICAgICAvLyDkuI3mmL7npLrpppbmrKHmoKHpqozop4bop4lcbiAgICAgICAgaWYgKHRoaXMuZmlyc3RWaXN1YWwpIHtcbiAgICAgICAgICB0aGlzLnNob3dFcnJvciA9IGVycm9ycy5sZW5ndGggPiAwO1xuICAgICAgICAgIHRoaXMuZXJyb3IgPSB0aGlzLnNob3dFcnJvciA/IChlcnJvcnNbMF0ubWVzc2FnZSBhcyBzdHJpbmcpIDogJyc7XG5cbiAgICAgICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZpcnN0VmlzdWFsID0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIHRoaXMuYWZ0ZXJWaWV3SW5pdCgpO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWU6IFNGVmFsdWUpOiB2b2lkIHtcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5zZXRWYWx1ZSh2YWx1ZSwgZmFsc2UpO1xuICAgIGRpKHRoaXMudWksICd2YWx1ZUNoYW5nZXMnLCB0aGlzLmZvcm1Qcm9wZXJ0eS5wYXRoLCB0aGlzLmZvcm1Qcm9wZXJ0eSk7XG4gIH1cblxuICBnZXQgdmFsdWUoKTogTnpTYWZlQW55IHtcbiAgICByZXR1cm4gdGhpcy5mb3JtUHJvcGVydHkudmFsdWU7XG4gIH1cblxuICBkZXRlY3RDaGFuZ2VzKG9ubHlTZWxmOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcbiAgICBpZiAob25seVNlbGYpIHtcbiAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZm9ybVByb3BlcnR5LnJvb3Qud2lkZ2V0LmNkLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIGFic3RyYWN0IHJlc2V0KHZhbHVlOiBTRlZhbHVlKTogdm9pZDtcblxuICBhYnN0cmFjdCBhZnRlclZpZXdJbml0KCk6IHZvaWQ7XG59XG5cbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGNsYXNzIENvbnRyb2xXaWRnZXQgZXh0ZW5kcyBXaWRnZXQ8Rm9ybVByb3BlcnR5LCBTRlVJU2NoZW1hSXRlbT4ge1xuICByZXNldChfdmFsdWU6IFNGVmFsdWUpOiB2b2lkIHt9XG4gIGFmdGVyVmlld0luaXQoKTogdm9pZCB7fVxufVxuXG5ARGlyZWN0aXZlKClcbmV4cG9ydCBjbGFzcyBDb250cm9sVUlXaWRnZXQ8VUlUIGV4dGVuZHMgU0ZVSVNjaGVtYUl0ZW0+IGV4dGVuZHMgV2lkZ2V0PEZvcm1Qcm9wZXJ0eSwgVUlUPiB7XG4gIHJlc2V0KF92YWx1ZTogU0ZWYWx1ZSk6IHZvaWQge31cbiAgYWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHt9XG59XG5cbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGNsYXNzIEFycmF5TGF5b3V0V2lkZ2V0IGV4dGVuZHMgV2lkZ2V0PEFycmF5UHJvcGVydHksIFNGQXJyYXlXaWRnZXRTY2hlbWE+IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIHJlc2V0KF92YWx1ZTogU0ZWYWx1ZSk6IHZvaWQge31cbiAgYWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZm9ybVByb3BlcnR5LmVycm9yc0NoYW5nZXNcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLnNmSXRlbUNvbXAhLnVuc3Vic2NyaWJlJCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpKTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKClcbmV4cG9ydCBjbGFzcyBPYmplY3RMYXlvdXRXaWRnZXQgZXh0ZW5kcyBXaWRnZXQ8T2JqZWN0UHJvcGVydHksIFNGT2JqZWN0V2lkZ2V0U2NoZW1hPiBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICByZXNldChfdmFsdWU6IFNGVmFsdWUpOiB2b2lkIHt9XG4gIGFmdGVyVmlld0luaXQoKTogdm9pZCB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5lcnJvcnNDaGFuZ2VzXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5zZkl0ZW1Db21wIS51bnN1YnNjcmliZSQpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNkLmRldGVjdENoYW5nZXMoKSk7XG4gIH1cbn1cbiJdfQ==