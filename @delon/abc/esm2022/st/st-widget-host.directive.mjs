import { Directive, Input, ViewContainerRef, inject } from '@angular/core';
import { STWidgetRegistry } from './st-widget';
import * as i0 from "@angular/core";
export class STWidgetHostDirective {
    constructor() {
        this.stWidgetRegistry = inject(STWidgetRegistry);
        this.viewContainerRef = inject(ViewContainerRef);
    }
    ngOnInit() {
        const widget = this.column.widget;
        const componentType = this.stWidgetRegistry.get(widget.type);
        this.viewContainerRef.clear();
        const componentRef = this.viewContainerRef.createComponent(componentType);
        const { record, column } = this;
        const data = widget.params ? widget.params({ record, column }) : { record };
        Object.keys(data).forEach(key => {
            componentRef.instance[key] = data[key];
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.1", ngImport: i0, type: STWidgetHostDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.1", type: STWidgetHostDirective, selector: "[st-widget-host]", inputs: { record: "record", column: "column" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.1", ngImport: i0, type: STWidgetHostDirective, decorators: [{
            type: Directive,
            args: [{ selector: '[st-widget-host]' }]
        }], propDecorators: { record: [{
                type: Input
            }], column: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Qtd2lkZ2V0LWhvc3QuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3N0L3N0LXdpZGdldC1ob3N0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJbkYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sYUFBYSxDQUFDOztBQUkvQyxNQUFNLE9BQU8scUJBQXFCO0lBRGxDO1FBRW1CLHFCQUFnQixHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzVDLHFCQUFnQixHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0tBaUI5RDtJQVpDLFFBQVE7UUFDTixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU8sQ0FBQztRQUNuQyxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU3RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDOUIsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMxRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQztRQUNoQyxNQUFNLElBQUksR0FBaUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDO1FBQzFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzdCLFlBQVksQ0FBQyxRQUFzQixDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN4RCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7OEdBbEJVLHFCQUFxQjtrR0FBckIscUJBQXFCOzsyRkFBckIscUJBQXFCO2tCQURqQyxTQUFTO21CQUFDLEVBQUUsUUFBUSxFQUFFLGtCQUFrQixFQUFFOzhCQUtoQyxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25Jbml0LCBWaWV3Q29udGFpbmVyUmVmLCBpbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5pbXBvcnQgeyBTVFdpZGdldFJlZ2lzdHJ5IH0gZnJvbSAnLi9zdC13aWRnZXQnO1xuaW1wb3J0IHsgU1RDb2x1bW4sIFNURGF0YSB9IGZyb20gJy4vc3QuaW50ZXJmYWNlcyc7XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tzdC13aWRnZXQtaG9zdF0nIH0pXG5leHBvcnQgY2xhc3MgU1RXaWRnZXRIb3N0RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSByZWFkb25seSBzdFdpZGdldFJlZ2lzdHJ5ID0gaW5qZWN0KFNUV2lkZ2V0UmVnaXN0cnkpO1xuICBwcml2YXRlIHJlYWRvbmx5IHZpZXdDb250YWluZXJSZWYgPSBpbmplY3QoVmlld0NvbnRhaW5lclJlZik7XG5cbiAgQElucHV0KCkgcmVjb3JkITogU1REYXRhO1xuICBASW5wdXQoKSBjb2x1bW4hOiBTVENvbHVtbjtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCB3aWRnZXQgPSB0aGlzLmNvbHVtbi53aWRnZXQhO1xuICAgIGNvbnN0IGNvbXBvbmVudFR5cGUgPSB0aGlzLnN0V2lkZ2V0UmVnaXN0cnkuZ2V0KHdpZGdldC50eXBlKTtcblxuICAgIHRoaXMudmlld0NvbnRhaW5lclJlZi5jbGVhcigpO1xuICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMudmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50VHlwZSk7XG4gICAgY29uc3QgeyByZWNvcmQsIGNvbHVtbiB9ID0gdGhpcztcbiAgICBjb25zdCBkYXRhOiB7IFtrZXk6IHN0cmluZ106IE56U2FmZUFueSB9ID0gd2lkZ2V0LnBhcmFtcyA/IHdpZGdldC5wYXJhbXMoeyByZWNvcmQsIGNvbHVtbiB9KSA6IHsgcmVjb3JkIH07XG4gICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgKGNvbXBvbmVudFJlZi5pbnN0YW5jZSBhcyBOelNhZmVBbnkpW2tleV0gPSBkYXRhW2tleV07XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==