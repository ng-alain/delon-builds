import { Component, ViewEncapsulation } from '@angular/core';
import { ControlUIWidget } from '../../widget';
import * as i0 from "@angular/core";
export class SliderWidget extends ControlUIWidget {
    constructor() {
        super(...arguments);
        this._formatter = (value) => {
            const { formatter } = this.ui;
            if (formatter)
                return formatter(value);
            return value;
        };
    }
    ngOnInit() {
        const { minimum, maximum, multipleOf } = this.schema;
        this.min = minimum || 0;
        this.max = maximum || 100;
        this.step = multipleOf || 1;
        const { marks, included } = this.ui;
        this.marks = marks || null;
        this.included = typeof included === 'undefined' ? true : included;
    }
    _afterChange(value) {
        const { afterChange } = this.ui;
        if (afterChange)
            return afterChange(value);
    }
}
/** @nocollapse */ SliderWidget.ɵfac = function SliderWidget_Factory(t) { return ɵSliderWidget_BaseFactory(t || SliderWidget); };
/** @nocollapse */ SliderWidget.ɵcmp = i0.ɵɵngDeclareComponent({ version: "11.1.1", type: SliderWidget, selector: "sf-slider", usesInheritance: true, ngImport: i0, template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <nz-slider\n    [ngModel]=\"value\"\n    (ngModelChange)=\"setValue($event)\"\n    [nzDisabled]=\"disabled\"\n    [nzRange]=\"ui.range\"\n    [nzMin]=\"min\"\n    [nzMax]=\"max\"\n    [nzStep]=\"step\"\n    [nzMarks]=\"marks\"\n    [nzDots]=\"ui.dots\"\n    [nzIncluded]=\"included\"\n    [nzVertical]=\"ui.vertical\"\n    [nzTipFormatter]=\"_formatter\"\n    (nzOnAfterChange)=\"_afterChange($event)\"\n  >\n  </nz-slider>\n</sf-item-wrap>\n", encapsulation: i0.ViewEncapsulation.None });
const ɵSliderWidget_BaseFactory = /*@__PURE__*/ i0.ɵɵgetInheritedFactory(SliderWidget);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SliderWidget, [{
        type: Component,
        args: [{
                selector: 'sf-slider',
                templateUrl: './slider.widget.html',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm0vc3JjL3dpZGdldHMvc2xpZGVyL3NsaWRlci53aWRnZXQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3NyYy93aWRnZXRzL3NsaWRlci9zbGlkZXIud2lkZ2V0Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDOztBQVMvQyxNQUFNLE9BQU8sWUFBYSxTQUFRLGVBQXFDO0lBTnZFOztRQXdCRSxlQUFVLEdBQUcsQ0FBQyxLQUFhLEVBQUUsRUFBRTtZQUM3QixNQUFNLEVBQUUsU0FBUyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUM5QixJQUFJLFNBQVM7Z0JBQUUsT0FBTyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkMsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDLENBQUM7S0FNSDtJQXJCQyxRQUFRO1FBQ04sTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyRCxJQUFJLENBQUMsR0FBRyxHQUFHLE9BQU8sSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxPQUFPLElBQUksR0FBRyxDQUFDO1FBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsVUFBVSxJQUFJLENBQUMsQ0FBQztRQUU1QixNQUFNLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLElBQUksSUFBSSxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxRQUFRLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztJQUNwRSxDQUFDO0lBUUQsWUFBWSxDQUFDLEtBQW9CO1FBQy9CLE1BQU0sRUFBRSxXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ2hDLElBQUksV0FBVztZQUFFLE9BQU8sV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdDLENBQUM7O2dIQTNCVSxZQUFZOzBGQUFaLFlBQVksd0VDWHpCLG1rQkFrQkE7eUVEUGEsWUFBWTt1RkFBWixZQUFZO2NBTnhCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsV0FBVyxFQUFFLHNCQUFzQjtnQkFDbkMsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56TWFya3MsIE56U2xpZGVyVmFsdWUgfSBmcm9tICduZy16b3Jyby1hbnRkL3NsaWRlcic7XG5pbXBvcnQgeyBDb250cm9sVUlXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuaW1wb3J0IHsgU0ZTbGlkZXJXaWRnZXRTY2hlbWEgfSBmcm9tICcuL3NjaGVtYSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLXNsaWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zbGlkZXIud2lkZ2V0Lmh0bWwnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgU2xpZGVyV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFVJV2lkZ2V0PFNGU2xpZGVyV2lkZ2V0U2NoZW1hPiBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIG1pbjogbnVtYmVyO1xuICBtYXg6IG51bWJlcjtcbiAgc3RlcDogbnVtYmVyO1xuICBtYXJrczogTnpNYXJrcyB8IG51bGw7XG4gIGluY2x1ZGVkOiBib29sZWFuO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgbWluaW11bSwgbWF4aW11bSwgbXVsdGlwbGVPZiB9ID0gdGhpcy5zY2hlbWE7XG4gICAgdGhpcy5taW4gPSBtaW5pbXVtIHx8IDA7XG4gICAgdGhpcy5tYXggPSBtYXhpbXVtIHx8IDEwMDtcbiAgICB0aGlzLnN0ZXAgPSBtdWx0aXBsZU9mIHx8IDE7XG5cbiAgICBjb25zdCB7IG1hcmtzLCBpbmNsdWRlZCB9ID0gdGhpcy51aTtcbiAgICB0aGlzLm1hcmtzID0gbWFya3MgfHwgbnVsbDtcbiAgICB0aGlzLmluY2x1ZGVkID0gdHlwZW9mIGluY2x1ZGVkID09PSAndW5kZWZpbmVkJyA/IHRydWUgOiBpbmNsdWRlZDtcbiAgfVxuXG4gIF9mb3JtYXR0ZXIgPSAodmFsdWU6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHsgZm9ybWF0dGVyIH0gPSB0aGlzLnVpO1xuICAgIGlmIChmb3JtYXR0ZXIpIHJldHVybiBmb3JtYXR0ZXIodmFsdWUpO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcblxuICBfYWZ0ZXJDaGFuZ2UodmFsdWU6IE56U2xpZGVyVmFsdWUpOiB2b2lkIHtcbiAgICBjb25zdCB7IGFmdGVyQ2hhbmdlIH0gPSB0aGlzLnVpO1xuICAgIGlmIChhZnRlckNoYW5nZSkgcmV0dXJuIGFmdGVyQ2hhbmdlKHZhbHVlKTtcbiAgfVxufVxuIiwiPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cbiAgPG56LXNsaWRlclxuICAgIFtuZ01vZGVsXT1cInZhbHVlXCJcbiAgICAobmdNb2RlbENoYW5nZSk9XCJzZXRWYWx1ZSgkZXZlbnQpXCJcbiAgICBbbnpEaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgW256UmFuZ2VdPVwidWkucmFuZ2VcIlxuICAgIFtuek1pbl09XCJtaW5cIlxuICAgIFtuek1heF09XCJtYXhcIlxuICAgIFtuelN0ZXBdPVwic3RlcFwiXG4gICAgW256TWFya3NdPVwibWFya3NcIlxuICAgIFtuekRvdHNdPVwidWkuZG90c1wiXG4gICAgW256SW5jbHVkZWRdPVwiaW5jbHVkZWRcIlxuICAgIFtuelZlcnRpY2FsXT1cInVpLnZlcnRpY2FsXCJcbiAgICBbbnpUaXBGb3JtYXR0ZXJdPVwiX2Zvcm1hdHRlclwiXG4gICAgKG56T25BZnRlckNoYW5nZSk9XCJfYWZ0ZXJDaGFuZ2UoJGV2ZW50KVwiXG4gID5cbiAgPC9uei1zbGlkZXI+XG48L3NmLWl0ZW0td3JhcD5cbiJdfQ==