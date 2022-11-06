import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./st-widget";
export class STWidgetHostDirective {
    constructor(stWidgetRegistry, viewContainerRef) {
        this.stWidgetRegistry = stWidgetRegistry;
        this.viewContainerRef = viewContainerRef;
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
}
STWidgetHostDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.9", ngImport: i0, type: STWidgetHostDirective, deps: [{ token: i1.STWidgetRegistry }, { token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
STWidgetHostDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.9", type: STWidgetHostDirective, selector: "[st-widget-host]", inputs: { record: "record", column: "column" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.9", ngImport: i0, type: STWidgetHostDirective, decorators: [{
            type: Directive,
            args: [{ selector: '[st-widget-host]' }]
        }], ctorParameters: function () { return [{ type: i1.STWidgetRegistry }, { type: i0.ViewContainerRef }]; }, propDecorators: { record: [{
                type: Input
            }], column: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Qtd2lkZ2V0LWhvc3QuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3N0L3N0LXdpZGdldC1ob3N0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBNEIsTUFBTSxlQUFlLENBQUM7OztBQVEzRSxNQUFNLE9BQU8scUJBQXFCO0lBSWhDLFlBQW9CLGdCQUFrQyxFQUFVLGdCQUFrQztRQUE5RSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUFHLENBQUM7SUFFdEcsUUFBUTtRQUNOLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTyxDQUFDO1FBQ25DLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTdELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM5QixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ2hDLE1BQU0sSUFBSSxHQUFpQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUM7UUFDMUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDN0IsWUFBWSxDQUFDLFFBQXNCLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3hELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7a0hBakJVLHFCQUFxQjtzR0FBckIscUJBQXFCOzJGQUFyQixxQkFBcUI7a0JBRGpDLFNBQVM7bUJBQUMsRUFBRSxRQUFRLEVBQUUsa0JBQWtCLEVBQUU7c0lBRWhDLE1BQU07c0JBQWQsS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPbkluaXQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5pbXBvcnQgeyBTVFdpZGdldFJlZ2lzdHJ5IH0gZnJvbSAnLi9zdC13aWRnZXQnO1xuaW1wb3J0IHsgU1RDb2x1bW4sIFNURGF0YSB9IGZyb20gJy4vc3QuaW50ZXJmYWNlcyc7XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tzdC13aWRnZXQtaG9zdF0nIH0pXG5leHBvcnQgY2xhc3MgU1RXaWRnZXRIb3N0RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgcmVjb3JkITogU1REYXRhO1xuICBASW5wdXQoKSBjb2x1bW4hOiBTVENvbHVtbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0V2lkZ2V0UmVnaXN0cnk6IFNUV2lkZ2V0UmVnaXN0cnksIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCB3aWRnZXQgPSB0aGlzLmNvbHVtbi53aWRnZXQhO1xuICAgIGNvbnN0IGNvbXBvbmVudFR5cGUgPSB0aGlzLnN0V2lkZ2V0UmVnaXN0cnkuZ2V0KHdpZGdldC50eXBlKTtcblxuICAgIHRoaXMudmlld0NvbnRhaW5lclJlZi5jbGVhcigpO1xuICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMudmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50VHlwZSk7XG4gICAgY29uc3QgeyByZWNvcmQsIGNvbHVtbiB9ID0gdGhpcztcbiAgICBjb25zdCBkYXRhOiB7IFtrZXk6IHN0cmluZ106IE56U2FmZUFueSB9ID0gd2lkZ2V0LnBhcmFtcyA/IHdpZGdldC5wYXJhbXMoeyByZWNvcmQsIGNvbHVtbiB9KSA6IHsgcmVjb3JkIH07XG4gICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgKGNvbXBvbmVudFJlZi5pbnN0YW5jZSBhcyBOelNhZmVBbnkpW2tleV0gPSBkYXRhW2tleV07XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==