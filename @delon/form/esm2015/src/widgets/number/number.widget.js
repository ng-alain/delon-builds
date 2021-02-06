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
                template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <nz-input-number\n    [nzId]=\"id\"\n    [ngModel]=\"value\"\n    (ngModelChange)=\"_setValue($event)\"\n    [nzDisabled]=\"disabled\"\n    [nzSize]=\"ui.size\"\n    [nzMin]=\"min\"\n    [nzMax]=\"max\"\n    [nzStep]=\"step\"\n    [nzFormatter]=\"formatter\"\n    [nzParser]=\"parser\"\n    [nzPrecision]=\"ui.precision\"\n    [nzPlaceHolder]=\"ui.placeholder || ''\"\n    [style.width.px]=\"ui.widgetWidth || 90\"\n  >\n  </nz-input-number>\n</sf-item-wrap>\n",
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm0vc3JjL3dpZGdldHMvbnVtYmVyL251bWJlci53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBUy9DLE1BQU0sT0FBTyxZQUFhLFNBQVEsZUFBcUM7SUFOdkU7O1FBVUUsY0FBUyxHQUF1QyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztRQUMvRCxXQUFNLEdBQXVDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO0lBaUM5RCxDQUFDO0lBL0JDLFFBQVE7UUFDTixNQUFNLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMvRixJQUFJLE9BQU8sT0FBTyxLQUFLLFdBQVcsRUFBRTtZQUNsQyxJQUFJLENBQUMsR0FBRyxHQUFHLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7U0FDckQ7UUFDRCxJQUFJLE9BQU8sT0FBTyxLQUFLLFdBQVcsRUFBRTtZQUNsQyxJQUFJLENBQUMsR0FBRyxHQUFHLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7U0FDckQ7UUFDRCxJQUFJLENBQUMsSUFBSSxHQUFHLFVBQVUsSUFBSSxDQUFDLENBQUM7UUFDNUIsSUFBSSxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ25DO1FBRUQsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNuQixJQUFJLEVBQUUsQ0FBQyxNQUFNLElBQUksSUFBSSxFQUFFO1lBQ3JCLEVBQUUsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxJQUFJLEtBQUssRUFBRSxDQUFDLENBQUM7WUFDdkUsRUFBRSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDekQ7UUFDRCxJQUFJLEVBQUUsQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFFO1lBQ25CLEVBQUUsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7WUFDckUsRUFBRSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDdkQ7UUFDRCxJQUFJLEVBQUUsQ0FBQyxTQUFTO1lBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDO1FBQ2hELElBQUksRUFBRSxDQUFDLE1BQU07WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUM7SUFDekMsQ0FBQztJQUVELFNBQVMsQ0FBQyxHQUFXO1FBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN4RSxDQUFDOzs7WUEzQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQiwrbEJBQW1DO2dCQUNuQyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFVJV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcbmltcG9ydCB7IFNGTnVtYmVyV2lkZ2V0U2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1udW1iZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vbnVtYmVyLndpZGdldC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIE51bWJlcldpZGdldCBleHRlbmRzIENvbnRyb2xVSVdpZGdldDxTRk51bWJlcldpZGdldFNjaGVtYT4gaW1wbGVtZW50cyBPbkluaXQge1xuICBtaW46IG51bWJlcjtcbiAgbWF4OiBudW1iZXI7XG4gIHN0ZXA6IG51bWJlcjtcbiAgZm9ybWF0dGVyOiAodmFsdWU6IG51bWJlcikgPT4gc3RyaW5nIHwgbnVtYmVyID0gdmFsdWUgPT4gdmFsdWU7XG4gIHBhcnNlcjogKHZhbHVlOiBzdHJpbmcpID0+IHN0cmluZyB8IG51bWJlciA9IHZhbHVlID0+IHZhbHVlO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgbWluaW11bSwgZXhjbHVzaXZlTWluaW11bSwgbWF4aW11bSwgZXhjbHVzaXZlTWF4aW11bSwgbXVsdGlwbGVPZiwgdHlwZSB9ID0gdGhpcy5zY2hlbWE7XG4gICAgaWYgKHR5cGVvZiBtaW5pbXVtICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5taW4gPSBleGNsdXNpdmVNaW5pbXVtID8gbWluaW11bSArIDEgOiBtaW5pbXVtO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG1heGltdW0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLm1heCA9IGV4Y2x1c2l2ZU1heGltdW0gPyBtYXhpbXVtIC0gMSA6IG1heGltdW07XG4gICAgfVxuICAgIHRoaXMuc3RlcCA9IG11bHRpcGxlT2YgfHwgMTtcbiAgICBpZiAodHlwZSA9PT0gJ2ludGVnZXInKSB7XG4gICAgICB0aGlzLm1pbiA9IE1hdGgudHJ1bmModGhpcy5taW4pO1xuICAgICAgdGhpcy5tYXggPSBNYXRoLnRydW5jKHRoaXMubWF4KTtcbiAgICAgIHRoaXMuc3RlcCA9IE1hdGgudHJ1bmModGhpcy5zdGVwKTtcbiAgICB9XG5cbiAgICBjb25zdCB1aSA9IHRoaXMudWk7XG4gICAgaWYgKHVpLnByZWZpeCAhPSBudWxsKSB7XG4gICAgICB1aS5mb3JtYXR0ZXIgPSB2YWx1ZSA9PiAodmFsdWUgPT0gbnVsbCA/ICcnIDogYCR7dWkucHJlZml4fSAke3ZhbHVlfWApO1xuICAgICAgdWkucGFyc2VyID0gdmFsdWUgPT4gdmFsdWUucmVwbGFjZShgJHt1aS5wcmVmaXh9IGAsICcnKTtcbiAgICB9XG4gICAgaWYgKHVpLnVuaXQgIT0gbnVsbCkge1xuICAgICAgdWkuZm9ybWF0dGVyID0gdmFsdWUgPT4gKHZhbHVlID09IG51bGwgPyAnJyA6IGAke3ZhbHVlfSAke3VpLnVuaXR9YCk7XG4gICAgICB1aS5wYXJzZXIgPSB2YWx1ZSA9PiB2YWx1ZS5yZXBsYWNlKGAgJHt1aS51bml0fWAsICcnKTtcbiAgICB9XG4gICAgaWYgKHVpLmZvcm1hdHRlcikgdGhpcy5mb3JtYXR0ZXIgPSB1aS5mb3JtYXR0ZXI7XG4gICAgaWYgKHVpLnBhcnNlcikgdGhpcy5wYXJzZXIgPSB1aS5wYXJzZXI7XG4gIH1cblxuICBfc2V0VmFsdWUodmFsOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnNldFZhbHVlKHRoaXMuc2NoZW1hLnR5cGUgPT09ICdpbnRlZ2VyJyA/IE1hdGguZmxvb3IodmFsKSA6IHZhbCk7XG4gIH1cbn1cbiJdfQ==