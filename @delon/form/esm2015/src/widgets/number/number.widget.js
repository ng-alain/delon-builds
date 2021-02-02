import { Component, ViewEncapsulation } from '@angular/core';
import { ControlUIWidget } from '../../widget';
import * as i0 from "@angular/core";
export class NumberWidget extends ControlUIWidget {
    constructor() {
        super(...arguments);
        this.formatter = value => value;
        this.parser = value => value;
    }
    ngOnInit() {
        const { minimum, exclusiveMinimum, maximum, exclusiveMaximum, multipleOf, type } = this.schema;
        if (typeof minimum !== 'undefined') {
            this.min = exclusiveMinimum ? minimum + 1 : minimum;
        }
        if (typeof maximum !== 'undefined') {
            this.max = exclusiveMaximum ? maximum - 1 : maximum;
        }
        this.step = multipleOf || 1;
        if (type === 'integer') {
            this.min = Math.trunc(this.min);
            this.max = Math.trunc(this.max);
            this.step = Math.trunc(this.step);
        }
        const ui = this.ui;
        if (ui.prefix != null) {
            ui.formatter = value => (value == null ? '' : `${ui.prefix} ${value}`);
            ui.parser = value => value.replace(`${ui.prefix} `, '');
        }
        if (ui.unit != null) {
            ui.formatter = value => (value == null ? '' : `${value} ${ui.unit}`);
            ui.parser = value => value.replace(` ${ui.unit}`, '');
        }
        if (ui.formatter)
            this.formatter = ui.formatter;
        if (ui.parser)
            this.parser = ui.parser;
    }
    _setValue(val) {
        this.setValue(this.schema.type === 'integer' ? Math.floor(val) : val);
    }
}
/** @nocollapse */ NumberWidget.ɵfac = function NumberWidget_Factory(t) { return ɵNumberWidget_BaseFactory(t || NumberWidget); };
/** @nocollapse */ NumberWidget.ɵcmp = i0.ɵɵngDeclareComponent({ version: "11.1.1", type: NumberWidget, selector: "sf-number", usesInheritance: true, ngImport: i0, template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <nz-input-number\n    [nzId]=\"id\"\n    [ngModel]=\"value\"\n    (ngModelChange)=\"_setValue($event)\"\n    [nzDisabled]=\"disabled\"\n    [nzSize]=\"ui.size\"\n    [nzMin]=\"min\"\n    [nzMax]=\"max\"\n    [nzStep]=\"step\"\n    [nzFormatter]=\"formatter\"\n    [nzParser]=\"parser\"\n    [nzPrecision]=\"ui.precision\"\n    [nzPlaceHolder]=\"ui.placeholder || ''\"\n    [style.width.px]=\"ui.widgetWidth || 90\"\n  >\n  </nz-input-number>\n</sf-item-wrap>\n", encapsulation: i0.ViewEncapsulation.None });
const ɵNumberWidget_BaseFactory = /*@__PURE__*/ i0.ɵɵgetInheritedFactory(NumberWidget);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NumberWidget, [{
        type: Component,
        args: [{
                selector: 'sf-number',
                templateUrl: './number.widget.html',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm0vc3JjL3dpZGdldHMvbnVtYmVyL251bWJlci53aWRnZXQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3NyYy93aWRnZXRzL251bWJlci9udW1iZXIud2lkZ2V0Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDOztBQVMvQyxNQUFNLE9BQU8sWUFBYSxTQUFRLGVBQXFDO0lBTnZFOztRQVVFLGNBQVMsR0FBdUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7UUFDL0QsV0FBTSxHQUF1QyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztLQWlDN0Q7SUEvQkMsUUFBUTtRQUNOLE1BQU0sRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQy9GLElBQUksT0FBTyxPQUFPLEtBQUssV0FBVyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxHQUFHLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztTQUNyRDtRQUNELElBQUksT0FBTyxPQUFPLEtBQUssV0FBVyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxHQUFHLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztTQUNyRDtRQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsVUFBVSxJQUFJLENBQUMsQ0FBQztRQUM1QixJQUFJLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDdEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbkM7UUFFRCxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ25CLElBQUksRUFBRSxDQUFDLE1BQU0sSUFBSSxJQUFJLEVBQUU7WUFDckIsRUFBRSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLElBQUksS0FBSyxFQUFFLENBQUMsQ0FBQztZQUN2RSxFQUFFLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztTQUN6RDtRQUNELElBQUksRUFBRSxDQUFDLElBQUksSUFBSSxJQUFJLEVBQUU7WUFDbkIsRUFBRSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUNyRSxFQUFFLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztTQUN2RDtRQUNELElBQUksRUFBRSxDQUFDLFNBQVM7WUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUM7UUFDaEQsSUFBSSxFQUFFLENBQUMsTUFBTTtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQztJQUN6QyxDQUFDO0lBRUQsU0FBUyxDQUFDLEdBQVc7UUFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7O2dIQXJDVSxZQUFZOzBGQUFaLFlBQVksd0VDVnpCLHFsQkFrQkE7eUVEUmEsWUFBWTt1RkFBWixZQUFZO2NBTnhCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsV0FBVyxFQUFFLHNCQUFzQjtnQkFDbkMsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xVSVdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5pbXBvcnQgeyBTRk51bWJlcldpZGdldFNjaGVtYSB9IGZyb20gJy4vc2NoZW1hJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtbnVtYmVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL251bWJlci53aWRnZXQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBOdW1iZXJXaWRnZXQgZXh0ZW5kcyBDb250cm9sVUlXaWRnZXQ8U0ZOdW1iZXJXaWRnZXRTY2hlbWE+IGltcGxlbWVudHMgT25Jbml0IHtcbiAgbWluOiBudW1iZXI7XG4gIG1heDogbnVtYmVyO1xuICBzdGVwOiBudW1iZXI7XG4gIGZvcm1hdHRlcjogKHZhbHVlOiBudW1iZXIpID0+IHN0cmluZyB8IG51bWJlciA9IHZhbHVlID0+IHZhbHVlO1xuICBwYXJzZXI6ICh2YWx1ZTogc3RyaW5nKSA9PiBzdHJpbmcgfCBudW1iZXIgPSB2YWx1ZSA9PiB2YWx1ZTtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IG1pbmltdW0sIGV4Y2x1c2l2ZU1pbmltdW0sIG1heGltdW0sIGV4Y2x1c2l2ZU1heGltdW0sIG11bHRpcGxlT2YsIHR5cGUgfSA9IHRoaXMuc2NoZW1hO1xuICAgIGlmICh0eXBlb2YgbWluaW11bSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMubWluID0gZXhjbHVzaXZlTWluaW11bSA/IG1pbmltdW0gKyAxIDogbWluaW11bTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBtYXhpbXVtICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5tYXggPSBleGNsdXNpdmVNYXhpbXVtID8gbWF4aW11bSAtIDEgOiBtYXhpbXVtO1xuICAgIH1cbiAgICB0aGlzLnN0ZXAgPSBtdWx0aXBsZU9mIHx8IDE7XG4gICAgaWYgKHR5cGUgPT09ICdpbnRlZ2VyJykge1xuICAgICAgdGhpcy5taW4gPSBNYXRoLnRydW5jKHRoaXMubWluKTtcbiAgICAgIHRoaXMubWF4ID0gTWF0aC50cnVuYyh0aGlzLm1heCk7XG4gICAgICB0aGlzLnN0ZXAgPSBNYXRoLnRydW5jKHRoaXMuc3RlcCk7XG4gICAgfVxuXG4gICAgY29uc3QgdWkgPSB0aGlzLnVpO1xuICAgIGlmICh1aS5wcmVmaXggIT0gbnVsbCkge1xuICAgICAgdWkuZm9ybWF0dGVyID0gdmFsdWUgPT4gKHZhbHVlID09IG51bGwgPyAnJyA6IGAke3VpLnByZWZpeH0gJHt2YWx1ZX1gKTtcbiAgICAgIHVpLnBhcnNlciA9IHZhbHVlID0+IHZhbHVlLnJlcGxhY2UoYCR7dWkucHJlZml4fSBgLCAnJyk7XG4gICAgfVxuICAgIGlmICh1aS51bml0ICE9IG51bGwpIHtcbiAgICAgIHVpLmZvcm1hdHRlciA9IHZhbHVlID0+ICh2YWx1ZSA9PSBudWxsID8gJycgOiBgJHt2YWx1ZX0gJHt1aS51bml0fWApO1xuICAgICAgdWkucGFyc2VyID0gdmFsdWUgPT4gdmFsdWUucmVwbGFjZShgICR7dWkudW5pdH1gLCAnJyk7XG4gICAgfVxuICAgIGlmICh1aS5mb3JtYXR0ZXIpIHRoaXMuZm9ybWF0dGVyID0gdWkuZm9ybWF0dGVyO1xuICAgIGlmICh1aS5wYXJzZXIpIHRoaXMucGFyc2VyID0gdWkucGFyc2VyO1xuICB9XG5cbiAgX3NldFZhbHVlKHZhbDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5zZXRWYWx1ZSh0aGlzLnNjaGVtYS50eXBlID09PSAnaW50ZWdlcicgPyBNYXRoLmZsb29yKHZhbCkgOiB2YWwpO1xuICB9XG59XG4iLCI8c2YtaXRlbS13cmFwIFtpZF09XCJpZFwiIFtzY2hlbWFdPVwic2NoZW1hXCIgW3VpXT1cInVpXCIgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIiBbZXJyb3JdPVwiZXJyb3JcIiBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiPlxuICA8bnotaW5wdXQtbnVtYmVyXG4gICAgW256SWRdPVwiaWRcIlxuICAgIFtuZ01vZGVsXT1cInZhbHVlXCJcbiAgICAobmdNb2RlbENoYW5nZSk9XCJfc2V0VmFsdWUoJGV2ZW50KVwiXG4gICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgIFtuelNpemVdPVwidWkuc2l6ZVwiXG4gICAgW256TWluXT1cIm1pblwiXG4gICAgW256TWF4XT1cIm1heFwiXG4gICAgW256U3RlcF09XCJzdGVwXCJcbiAgICBbbnpGb3JtYXR0ZXJdPVwiZm9ybWF0dGVyXCJcbiAgICBbbnpQYXJzZXJdPVwicGFyc2VyXCJcbiAgICBbbnpQcmVjaXNpb25dPVwidWkucHJlY2lzaW9uXCJcbiAgICBbbnpQbGFjZUhvbGRlcl09XCJ1aS5wbGFjZWhvbGRlciB8fCAnJ1wiXG4gICAgW3N0eWxlLndpZHRoLnB4XT1cInVpLndpZGdldFdpZHRoIHx8IDkwXCJcbiAgPlxuICA8L256LWlucHV0LW51bWJlcj5cbjwvc2YtaXRlbS13cmFwPlxuIl19