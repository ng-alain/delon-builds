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
        return null;
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
        var _a;
        return (_a = this.sfComp) === null || _a === void 0 ? void 0 : _a.cleanValue;
    }
    ngAfterViewInit() {
        this.formProperty.errorsChanges.pipe(takeUntil(this.sfItemComp.unsubscribe$)).subscribe((errors) => {
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
/** @nocollapse */ Widget.ɵfac = function Widget_Factory(t) { return new (t || Widget)(i0.ɵɵdirectiveInject(ChangeDetectorRef), i0.ɵɵdirectiveInject(Injector), i0.ɵɵdirectiveInject(SFItemComponent), i0.ɵɵdirectiveInject(SFComponent)); };
/** @nocollapse */ Widget.ɵdir = i0.ɵɵngDeclareDirective({ version: "11.1.1", type: Widget, host: { properties: { "class": "this.cls" } }, ngImport: i0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Widget, [{
        type: Directive
    }], function () { return [{ type: i0.ChangeDetectorRef, decorators: [{
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
            }] }]; }, { cls: [{
            type: HostBinding,
            args: ['class']
        }] }); })();
export class ControlWidget extends Widget {
    reset(_value) { }
    afterViewInit() { }
}
/** @nocollapse */ ControlWidget.ɵfac = function ControlWidget_Factory(t) { return ɵControlWidget_BaseFactory(t || ControlWidget); };
/** @nocollapse */ ControlWidget.ɵdir = i0.ɵɵngDeclareDirective({ version: "11.1.1", type: ControlWidget, usesInheritance: true, ngImport: i0 });
const ɵControlWidget_BaseFactory = /*@__PURE__*/ i0.ɵɵgetInheritedFactory(ControlWidget);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ControlWidget, [{
        type: Directive
    }], null, null); })();
export class ControlUIWidget extends Widget {
    reset(_value) { }
    afterViewInit() { }
}
/** @nocollapse */ ControlUIWidget.ɵfac = function ControlUIWidget_Factory(t) { return ɵControlUIWidget_BaseFactory(t || ControlUIWidget); };
/** @nocollapse */ ControlUIWidget.ɵdir = i0.ɵɵngDeclareDirective({ version: "11.1.1", type: ControlUIWidget, usesInheritance: true, ngImport: i0 });
const ɵControlUIWidget_BaseFactory = /*@__PURE__*/ i0.ɵɵgetInheritedFactory(ControlUIWidget);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ControlUIWidget, [{
        type: Directive
    }], null, null); })();
export class ArrayLayoutWidget extends Widget {
    reset(_value) { }
    afterViewInit() { }
    ngAfterViewInit() {
        this.formProperty.errorsChanges.pipe(takeUntil(this.sfItemComp.unsubscribe$)).subscribe(() => this.cd.detectChanges());
    }
}
/** @nocollapse */ ArrayLayoutWidget.ɵfac = function ArrayLayoutWidget_Factory(t) { return ɵArrayLayoutWidget_BaseFactory(t || ArrayLayoutWidget); };
/** @nocollapse */ ArrayLayoutWidget.ɵdir = i0.ɵɵngDeclareDirective({ version: "11.1.1", type: ArrayLayoutWidget, usesInheritance: true, ngImport: i0 });
const ɵArrayLayoutWidget_BaseFactory = /*@__PURE__*/ i0.ɵɵgetInheritedFactory(ArrayLayoutWidget);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ArrayLayoutWidget, [{
        type: Directive
    }], null, null); })();
export class ObjectLayoutWidget extends Widget {
    reset(_value) { }
    afterViewInit() { }
    ngAfterViewInit() {
        this.formProperty.errorsChanges.pipe(takeUntil(this.sfItemComp.unsubscribe$)).subscribe(() => this.cd.detectChanges());
    }
}
/** @nocollapse */ ObjectLayoutWidget.ɵfac = function ObjectLayoutWidget_Factory(t) { return ɵObjectLayoutWidget_BaseFactory(t || ObjectLayoutWidget); };
/** @nocollapse */ ObjectLayoutWidget.ɵdir = i0.ɵɵngDeclareDirective({ version: "11.1.1", type: ObjectLayoutWidget, usesInheritance: true, ngImport: i0 });
const ɵObjectLayoutWidget_BaseFactory = /*@__PURE__*/ i0.ɵɵgetInheritedFactory(ObjectLayoutWidget);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ObjectLayoutWidget, [{
        type: Directive
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS9zcmMvd2lkZ2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBaUIsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUV6RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFRM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sU0FBUyxDQUFDOzs7O0FBSTdCLE1BQU0sT0FBZ0IsTUFBTTtJQXNDMUIsWUFDNkMsRUFBcUIsRUFDOUIsUUFBa0IsRUFDWCxVQUE0QixFQUNoQyxNQUFvQjtRQUhkLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBQzlCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDWCxlQUFVLEdBQVYsVUFBVSxDQUFrQjtRQUNoQyxXQUFNLEdBQU4sTUFBTSxDQUFjO1FBdkMzRCxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLE9BQUUsR0FBRyxFQUFFLENBQUM7UUFHUixnQkFBVyxHQUFHLEtBQUssQ0FBQztJQW9DakIsQ0FBQztJQWxDSixJQUNJLEdBQUc7UUFDTCxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsSUFBSSxRQUFRO1FBQ1YsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU8sQ0FBQyxRQUFRLEVBQUU7WUFDMUQsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVE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QUFRLE1BQXlCO0lBQ3hGLEtBQUssQ0FBQyxNQUFlLElBQVMsQ0FBQztJQUMvQixhQUFhLEtBQVUsQ0FBQzs7eUhBRmIsZUFBZTs2RkFBZixlQUFlOzRFQUFmLGVBQWU7dUZBQWYsZUFBZTtjQUQzQixTQUFTOztBQU9WLE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxNQUEwQztJQUMvRSxLQUFLLENBQUMsTUFBZSxJQUFTLENBQUM7SUFDL0IsYUFBYSxLQUFVLENBQUM7SUFFeEIsZUFBZTtRQUNiLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7SUFDMUgsQ0FBQzs7K0hBTlUsaUJBQWlCOytGQUFqQixpQkFBaUI7OEVBQWpCLGlCQUFpQjt1RkFBakIsaUJBQWlCO2NBRDdCLFNBQVM7O0FBV1YsTUFBTSxPQUFPLGtCQUFtQixTQUFRLE1BQTRDO0lBQ2xGLEtBQUssQ0FBQyxNQUFlLElBQVMsQ0FBQztJQUMvQixhQUFhLEtBQVUsQ0FBQztJQUV4QixlQUFlO1FBQ2IsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztJQUMxSCxDQUFDOztrSUFOVSxrQkFBa0I7Z0dBQWxCLGtCQUFrQjsrRUFBbEIsa0JBQWtCO3VGQUFsQixrQkFBa0I7Y0FEOUIsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdG9yUmVmLCBEaXJlY3RpdmUsIEhvc3RCaW5kaW5nLCBJbmplY3QsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRXJyb3JEYXRhIH0gZnJvbSAnLi9lcnJvcnMnO1xuaW1wb3J0IHsgU0ZWYWx1ZSB9IGZyb20gJy4vaW50ZXJmYWNlJztcbmltcG9ydCB7IEFycmF5UHJvcGVydHkgfSBmcm9tICcuL21vZGVsL2FycmF5LnByb3BlcnR5JztcbmltcG9ydCB7IEZvcm1Qcm9wZXJ0eSB9IGZyb20gJy4vbW9kZWwvZm9ybS5wcm9wZXJ0eSc7XG5pbXBvcnQgeyBPYmplY3RQcm9wZXJ0eSB9IGZyb20gJy4vbW9kZWwvb2JqZWN0LnByb3BlcnR5JztcbmltcG9ydCB7IFNGU2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEnO1xuaW1wb3J0IHsgU0ZPcHRpb25hbEhlbHAsIFNGVUlTY2hlbWFJdGVtIH0gZnJvbSAnLi9zY2hlbWEvdWknO1xuaW1wb3J0IHsgU0ZJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9zZi1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTRkNvbXBvbmVudCB9IGZyb20gJy4vc2YuY29tcG9uZW50JztcbmltcG9ydCB7IGRpIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBTRkFycmF5V2lkZ2V0U2NoZW1hLCBTRk9iamVjdFdpZGdldFNjaGVtYSB9IGZyb20gJy4vd2lkZ2V0cyc7XG5cbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFdpZGdldDxUIGV4dGVuZHMgRm9ybVByb3BlcnR5LCBVSVQgZXh0ZW5kcyBTRlVJU2NoZW1hSXRlbT4gaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgZm9ybVByb3BlcnR5OiBUO1xuICBlcnJvcjogc3RyaW5nO1xuICBzaG93RXJyb3IgPSBmYWxzZTtcbiAgaWQgPSAnJztcbiAgc2NoZW1hOiBTRlNjaGVtYTtcbiAgdWk6IFVJVDtcbiAgZmlyc3RWaXN1YWwgPSBmYWxzZTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGNscygpOiBzdHJpbmcgfCBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMudWkuY2xhc3MgfHwgJyc7XG4gIH1cblxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB8IG51bGwge1xuICAgIGlmICh0aGlzLnNjaGVtYS5yZWFkT25seSA9PT0gdHJ1ZSB8fCB0aGlzLnNmQ29tcCEuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZ2V0IGwoKTogTG9jYWxlRGF0YSB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybVByb3BlcnR5LnJvb3Qud2lkZ2V0LnNmQ29tcCEubG9jYWxlO1xuICB9XG5cbiAgZ2V0IG9oKCk6IFNGT3B0aW9uYWxIZWxwIHtcbiAgICByZXR1cm4gdGhpcy51aS5vcHRpb25hbEhlbHAgYXMgU0ZPcHRpb25hbEhlbHA7XG4gIH1cblxuICBnZXQgZG9tKCk6IERvbVNhbml0aXplciB7XG4gICAgcmV0dXJuIHRoaXMuaW5qZWN0b3IuZ2V0KERvbVNhbml0aXplcik7XG4gIH1cblxuICBnZXQgY2xlYW5WYWx1ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zZkNvbXA/LmNsZWFuVmFsdWUhO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChDaGFuZ2VEZXRlY3RvclJlZikgcHVibGljIHJlYWRvbmx5IGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBASW5qZWN0KEluamVjdG9yKSBwdWJsaWMgcmVhZG9ubHkgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIEBJbmplY3QoU0ZJdGVtQ29tcG9uZW50KSBwdWJsaWMgcmVhZG9ubHkgc2ZJdGVtQ29tcD86IFNGSXRlbUNvbXBvbmVudCxcbiAgICBASW5qZWN0KFNGQ29tcG9uZW50KSBwdWJsaWMgcmVhZG9ubHkgc2ZDb21wPzogU0ZDb21wb25lbnQsXG4gICkge31cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5mb3JtUHJvcGVydHkuZXJyb3JzQ2hhbmdlcy5waXBlKHRha2VVbnRpbCh0aGlzLnNmSXRlbUNvbXAhLnVuc3Vic2NyaWJlJCkpLnN1YnNjcmliZSgoZXJyb3JzOiBFcnJvckRhdGFbXSB8IG51bGwpID0+IHtcbiAgICAgIGlmIChlcnJvcnMgPT0gbnVsbCkgcmV0dXJuO1xuICAgICAgZGkodGhpcy51aSwgJ2Vycm9yc0NoYW5nZXMnLCB0aGlzLmZvcm1Qcm9wZXJ0eS5wYXRoLCBlcnJvcnMpO1xuXG4gICAgICAvLyDkuI3mmL7npLrpppbmrKHmoKHpqozop4bop4lcbiAgICAgIGlmICh0aGlzLmZpcnN0VmlzdWFsKSB7XG4gICAgICAgIHRoaXMuc2hvd0Vycm9yID0gZXJyb3JzLmxlbmd0aCA+IDA7XG4gICAgICAgIHRoaXMuZXJyb3IgPSB0aGlzLnNob3dFcnJvciA/IChlcnJvcnNbMF0ubWVzc2FnZSBhcyBzdHJpbmcpIDogJyc7XG5cbiAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmZpcnN0VmlzdWFsID0gdHJ1ZTtcbiAgICB9KTtcbiAgICB0aGlzLmFmdGVyVmlld0luaXQoKTtcbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlOiBTRlZhbHVlKTogdm9pZCB7XG4gICAgdGhpcy5mb3JtUHJvcGVydHkuc2V0VmFsdWUodmFsdWUsIGZhbHNlKTtcbiAgICBkaSh0aGlzLnVpLCAndmFsdWVDaGFuZ2VzJywgdGhpcy5mb3JtUHJvcGVydHkucGF0aCwgdGhpcy5mb3JtUHJvcGVydHkpO1xuICB9XG5cbiAgZ2V0IHZhbHVlKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybVByb3BlcnR5LnZhbHVlO1xuICB9XG5cbiAgZGV0ZWN0Q2hhbmdlcyhvbmx5U2VsZjogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgaWYgKG9ubHlTZWxmKSB7XG4gICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5yb290LndpZGdldC5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICBhYnN0cmFjdCByZXNldCh2YWx1ZTogU0ZWYWx1ZSk6IHZvaWQ7XG5cbiAgYWJzdHJhY3QgYWZ0ZXJWaWV3SW5pdCgpOiB2b2lkO1xufVxuXG5ARGlyZWN0aXZlKClcbmV4cG9ydCBjbGFzcyBDb250cm9sV2lkZ2V0IGV4dGVuZHMgV2lkZ2V0PEZvcm1Qcm9wZXJ0eSwgU0ZVSVNjaGVtYUl0ZW0+IHtcbiAgcmVzZXQoX3ZhbHVlOiBTRlZhbHVlKTogdm9pZCB7fVxuICBhZnRlclZpZXdJbml0KCk6IHZvaWQge31cbn1cblxuQERpcmVjdGl2ZSgpXG5leHBvcnQgY2xhc3MgQ29udHJvbFVJV2lkZ2V0PFVJVCBleHRlbmRzIFNGVUlTY2hlbWFJdGVtPiBleHRlbmRzIFdpZGdldDxGb3JtUHJvcGVydHksIFVJVD4ge1xuICByZXNldChfdmFsdWU6IFNGVmFsdWUpOiB2b2lkIHt9XG4gIGFmdGVyVmlld0luaXQoKTogdm9pZCB7fVxufVxuXG5ARGlyZWN0aXZlKClcbmV4cG9ydCBjbGFzcyBBcnJheUxheW91dFdpZGdldCBleHRlbmRzIFdpZGdldDxBcnJheVByb3BlcnR5LCBTRkFycmF5V2lkZ2V0U2NoZW1hPiBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICByZXNldChfdmFsdWU6IFNGVmFsdWUpOiB2b2lkIHt9XG4gIGFmdGVyVmlld0luaXQoKTogdm9pZCB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5lcnJvcnNDaGFuZ2VzLnBpcGUodGFrZVVudGlsKHRoaXMuc2ZJdGVtQ29tcCEudW5zdWJzY3JpYmUkKSkuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpKTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKClcbmV4cG9ydCBjbGFzcyBPYmplY3RMYXlvdXRXaWRnZXQgZXh0ZW5kcyBXaWRnZXQ8T2JqZWN0UHJvcGVydHksIFNGT2JqZWN0V2lkZ2V0U2NoZW1hPiBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICByZXNldChfdmFsdWU6IFNGVmFsdWUpOiB2b2lkIHt9XG4gIGFmdGVyVmlld0luaXQoKTogdm9pZCB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5lcnJvcnNDaGFuZ2VzLnBpcGUodGFrZVVudGlsKHRoaXMuc2ZJdGVtQ29tcCEudW5zdWJzY3JpYmUkKSkuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpKTtcbiAgfVxufVxuIl19