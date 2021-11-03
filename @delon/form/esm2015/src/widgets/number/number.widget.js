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
        this.step = multipleOf || 1;
        if (typeof minimum !== 'undefined') {
            this.min = exclusiveMinimum ? minimum + this.step : minimum;
        }
        if (typeof maximum !== 'undefined') {
            this.max = exclusiveMaximum ? maximum - this.step : maximum;
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm0vc3JjL3dpZGdldHMvbnVtYmVyL251bWJlci53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBUy9DLE1BQU0sT0FBTyxZQUFhLFNBQVEsZUFBcUM7SUFOdkU7O1FBVUUsY0FBUyxHQUF1QyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztRQUMvRCxXQUFNLEdBQThCLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO0lBaUNyRCxDQUFDO0lBL0JDLFFBQVE7UUFDTixNQUFNLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMvRixJQUFJLENBQUMsSUFBSSxHQUFHLFVBQVUsSUFBSSxDQUFDLENBQUM7UUFDNUIsSUFBSSxPQUFPLE9BQU8sS0FBSyxXQUFXLEVBQUU7WUFDbEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztTQUM3RDtRQUNELElBQUksT0FBTyxPQUFPLEtBQUssV0FBVyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxHQUFHLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7U0FDN0Q7UUFDRCxJQUFJLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDdEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbkM7UUFFRCxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ25CLElBQUksRUFBRSxDQUFDLE1BQU0sSUFBSSxJQUFJLEVBQUU7WUFDckIsRUFBRSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLElBQUksS0FBSyxFQUFFLENBQUMsQ0FBQztZQUN2RSxFQUFFLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztTQUN6RDtRQUNELElBQUksRUFBRSxDQUFDLElBQUksSUFBSSxJQUFJLEVBQUU7WUFDbkIsRUFBRSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUNyRSxFQUFFLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztTQUN2RDtRQUNELElBQUksRUFBRSxDQUFDLFNBQVM7WUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUM7UUFDaEQsSUFBSSxFQUFFLENBQUMsTUFBTTtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQztJQUN6QyxDQUFDO0lBRUQsU0FBUyxDQUFDLEdBQVc7UUFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7OztZQTNDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLGtxQkFBbUM7Z0JBQ25DLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbnRyb2xVSVdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5pbXBvcnQgeyBTRk51bWJlcldpZGdldFNjaGVtYSB9IGZyb20gJy4vc2NoZW1hJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtbnVtYmVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL251bWJlci53aWRnZXQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIE51bWJlcldpZGdldCBleHRlbmRzIENvbnRyb2xVSVdpZGdldDxTRk51bWJlcldpZGdldFNjaGVtYT4gaW1wbGVtZW50cyBPbkluaXQge1xuICBtaW46IG51bWJlcjtcbiAgbWF4OiBudW1iZXI7XG4gIHN0ZXA6IG51bWJlcjtcbiAgZm9ybWF0dGVyOiAodmFsdWU6IG51bWJlcikgPT4gc3RyaW5nIHwgbnVtYmVyID0gdmFsdWUgPT4gdmFsdWU7XG4gIHBhcnNlcjogKHZhbHVlOiBzdHJpbmcpID0+IHN0cmluZyA9IHZhbHVlID0+IHZhbHVlO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgbWluaW11bSwgZXhjbHVzaXZlTWluaW11bSwgbWF4aW11bSwgZXhjbHVzaXZlTWF4aW11bSwgbXVsdGlwbGVPZiwgdHlwZSB9ID0gdGhpcy5zY2hlbWE7XG4gICAgdGhpcy5zdGVwID0gbXVsdGlwbGVPZiB8fCAxO1xuICAgIGlmICh0eXBlb2YgbWluaW11bSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMubWluID0gZXhjbHVzaXZlTWluaW11bSA/IG1pbmltdW0gKyB0aGlzLnN0ZXAgOiBtaW5pbXVtO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG1heGltdW0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLm1heCA9IGV4Y2x1c2l2ZU1heGltdW0gPyBtYXhpbXVtIC0gdGhpcy5zdGVwIDogbWF4aW11bTtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09ICdpbnRlZ2VyJykge1xuICAgICAgdGhpcy5taW4gPSBNYXRoLnRydW5jKHRoaXMubWluKTtcbiAgICAgIHRoaXMubWF4ID0gTWF0aC50cnVuYyh0aGlzLm1heCk7XG4gICAgICB0aGlzLnN0ZXAgPSBNYXRoLnRydW5jKHRoaXMuc3RlcCk7XG4gICAgfVxuXG4gICAgY29uc3QgdWkgPSB0aGlzLnVpO1xuICAgIGlmICh1aS5wcmVmaXggIT0gbnVsbCkge1xuICAgICAgdWkuZm9ybWF0dGVyID0gdmFsdWUgPT4gKHZhbHVlID09IG51bGwgPyAnJyA6IGAke3VpLnByZWZpeH0gJHt2YWx1ZX1gKTtcbiAgICAgIHVpLnBhcnNlciA9IHZhbHVlID0+IHZhbHVlLnJlcGxhY2UoYCR7dWkucHJlZml4fSBgLCAnJyk7XG4gICAgfVxuICAgIGlmICh1aS51bml0ICE9IG51bGwpIHtcbiAgICAgIHVpLmZvcm1hdHRlciA9IHZhbHVlID0+ICh2YWx1ZSA9PSBudWxsID8gJycgOiBgJHt2YWx1ZX0gJHt1aS51bml0fWApO1xuICAgICAgdWkucGFyc2VyID0gdmFsdWUgPT4gdmFsdWUucmVwbGFjZShgICR7dWkudW5pdH1gLCAnJyk7XG4gICAgfVxuICAgIGlmICh1aS5mb3JtYXR0ZXIpIHRoaXMuZm9ybWF0dGVyID0gdWkuZm9ybWF0dGVyO1xuICAgIGlmICh1aS5wYXJzZXIpIHRoaXMucGFyc2VyID0gdWkucGFyc2VyO1xuICB9XG5cbiAgX3NldFZhbHVlKHZhbDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5zZXRWYWx1ZSh0aGlzLnNjaGVtYS50eXBlID09PSAnaW50ZWdlcicgPyBNYXRoLmZsb29yKHZhbCkgOiB2YWwpO1xuICB9XG59XG4iXX0=