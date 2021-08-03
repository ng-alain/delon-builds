import { Component, ViewEncapsulation } from '@angular/core';
import { ControlUIWidget } from '../../widget';
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
NumberWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-number',
                template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <nz-input-number\n    [nzId]=\"id\"\n    [ngModel]=\"value\"\n    (ngModelChange)=\"_setValue($event)\"\n    [nzDisabled]=\"disabled\"\n    [nzSize]=\"ui.size!\"\n    [nzMin]=\"min\"\n    [nzMax]=\"max\"\n    [nzStep]=\"step\"\n    [nzFormatter]=\"formatter\"\n    [nzParser]=\"parser\"\n    [nzPrecision]=\"ui.precision\"\n    [nzPlaceHolder]=\"ui.placeholder || ''\"\n    [style.width.px]=\"ui.widgetWidth || 90\"\n    [ngClass]=\"{ 'ant-input-number__hide-step': ui.hideStep }\"\n  >\n  </nz-input-number>\n</sf-item-wrap>\n",
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm0vc3JjL3dpZGdldHMvbnVtYmVyL251bWJlci53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBUy9DLE1BQU0sT0FBTyxZQUFhLFNBQVEsZUFBcUM7SUFOdkU7O1FBVUUsY0FBUyxHQUF1QyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztRQUMvRCxXQUFNLEdBQThCLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO0lBaUNyRCxDQUFDO0lBL0JDLFFBQVE7UUFDTixNQUFNLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMvRixJQUFJLE9BQU8sT0FBTyxLQUFLLFdBQVcsRUFBRTtZQUNsQyxJQUFJLENBQUMsR0FBRyxHQUFHLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7U0FDckQ7UUFDRCxJQUFJLE9BQU8sT0FBTyxLQUFLLFdBQVcsRUFBRTtZQUNsQyxJQUFJLENBQUMsR0FBRyxHQUFHLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7U0FDckQ7UUFDRCxJQUFJLENBQUMsSUFBSSxHQUFHLFVBQVUsSUFBSSxDQUFDLENBQUM7UUFDNUIsSUFBSSxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ25DO1FBRUQsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNuQixJQUFJLEVBQUUsQ0FBQyxNQUFNLElBQUksSUFBSSxFQUFFO1lBQ3JCLEVBQUUsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxJQUFJLEtBQUssRUFBRSxDQUFDLENBQUM7WUFDdkUsRUFBRSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDekQ7UUFDRCxJQUFJLEVBQUUsQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFFO1lBQ25CLEVBQUUsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7WUFDckUsRUFBRSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDdkQ7UUFDRCxJQUFJLEVBQUUsQ0FBQyxTQUFTO1lBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDO1FBQ2hELElBQUksRUFBRSxDQUFDLE1BQU07WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUM7SUFDekMsQ0FBQztJQUVELFNBQVMsQ0FBQyxHQUFXO1FBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN4RSxDQUFDOzs7WUEzQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixrcUJBQW1DO2dCQUNuQyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb250cm9sVUlXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuaW1wb3J0IHsgU0ZOdW1iZXJXaWRnZXRTY2hlbWEgfSBmcm9tICcuL3NjaGVtYSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLW51bWJlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9udW1iZXIud2lkZ2V0Lmh0bWwnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBOdW1iZXJXaWRnZXQgZXh0ZW5kcyBDb250cm9sVUlXaWRnZXQ8U0ZOdW1iZXJXaWRnZXRTY2hlbWE+IGltcGxlbWVudHMgT25Jbml0IHtcbiAgbWluOiBudW1iZXI7XG4gIG1heDogbnVtYmVyO1xuICBzdGVwOiBudW1iZXI7XG4gIGZvcm1hdHRlcjogKHZhbHVlOiBudW1iZXIpID0+IHN0cmluZyB8IG51bWJlciA9IHZhbHVlID0+IHZhbHVlO1xuICBwYXJzZXI6ICh2YWx1ZTogc3RyaW5nKSA9PiBzdHJpbmcgPSB2YWx1ZSA9PiB2YWx1ZTtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IG1pbmltdW0sIGV4Y2x1c2l2ZU1pbmltdW0sIG1heGltdW0sIGV4Y2x1c2l2ZU1heGltdW0sIG11bHRpcGxlT2YsIHR5cGUgfSA9IHRoaXMuc2NoZW1hO1xuICAgIGlmICh0eXBlb2YgbWluaW11bSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMubWluID0gZXhjbHVzaXZlTWluaW11bSA/IG1pbmltdW0gKyAxIDogbWluaW11bTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBtYXhpbXVtICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5tYXggPSBleGNsdXNpdmVNYXhpbXVtID8gbWF4aW11bSAtIDEgOiBtYXhpbXVtO1xuICAgIH1cbiAgICB0aGlzLnN0ZXAgPSBtdWx0aXBsZU9mIHx8IDE7XG4gICAgaWYgKHR5cGUgPT09ICdpbnRlZ2VyJykge1xuICAgICAgdGhpcy5taW4gPSBNYXRoLnRydW5jKHRoaXMubWluKTtcbiAgICAgIHRoaXMubWF4ID0gTWF0aC50cnVuYyh0aGlzLm1heCk7XG4gICAgICB0aGlzLnN0ZXAgPSBNYXRoLnRydW5jKHRoaXMuc3RlcCk7XG4gICAgfVxuXG4gICAgY29uc3QgdWkgPSB0aGlzLnVpO1xuICAgIGlmICh1aS5wcmVmaXggIT0gbnVsbCkge1xuICAgICAgdWkuZm9ybWF0dGVyID0gdmFsdWUgPT4gKHZhbHVlID09IG51bGwgPyAnJyA6IGAke3VpLnByZWZpeH0gJHt2YWx1ZX1gKTtcbiAgICAgIHVpLnBhcnNlciA9IHZhbHVlID0+IHZhbHVlLnJlcGxhY2UoYCR7dWkucHJlZml4fSBgLCAnJyk7XG4gICAgfVxuICAgIGlmICh1aS51bml0ICE9IG51bGwpIHtcbiAgICAgIHVpLmZvcm1hdHRlciA9IHZhbHVlID0+ICh2YWx1ZSA9PSBudWxsID8gJycgOiBgJHt2YWx1ZX0gJHt1aS51bml0fWApO1xuICAgICAgdWkucGFyc2VyID0gdmFsdWUgPT4gdmFsdWUucmVwbGFjZShgICR7dWkudW5pdH1gLCAnJyk7XG4gICAgfVxuICAgIGlmICh1aS5mb3JtYXR0ZXIpIHRoaXMuZm9ybWF0dGVyID0gdWkuZm9ybWF0dGVyO1xuICAgIGlmICh1aS5wYXJzZXIpIHRoaXMucGFyc2VyID0gdWkucGFyc2VyO1xuICB9XG5cbiAgX3NldFZhbHVlKHZhbDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5zZXRWYWx1ZSh0aGlzLnNjaGVtYS50eXBlID09PSAnaW50ZWdlcicgPyBNYXRoLmZsb29yKHZhbCkgOiB2YWwpO1xuICB9XG59XG4iXX0=