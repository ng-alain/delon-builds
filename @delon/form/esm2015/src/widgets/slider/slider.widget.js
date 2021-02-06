import { Component, ViewEncapsulation } from '@angular/core';
import { ControlUIWidget } from '../../widget';
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
SliderWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-slider',
                template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <nz-slider\n    [ngModel]=\"value\"\n    (ngModelChange)=\"setValue($event)\"\n    [nzDisabled]=\"disabled\"\n    [nzRange]=\"ui.range\"\n    [nzMin]=\"min\"\n    [nzMax]=\"max\"\n    [nzStep]=\"step\"\n    [nzMarks]=\"marks\"\n    [nzDots]=\"ui.dots\"\n    [nzIncluded]=\"included\"\n    [nzVertical]=\"ui.vertical\"\n    [nzTipFormatter]=\"_formatter\"\n    (nzOnAfterChange)=\"_afterChange($event)\"\n  >\n  </nz-slider>\n</sf-item-wrap>\n",
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm0vc3JjL3dpZGdldHMvc2xpZGVyL3NsaWRlci53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBUy9DLE1BQU0sT0FBTyxZQUFhLFNBQVEsZUFBcUM7SUFOdkU7O1FBd0JFLGVBQVUsR0FBRyxDQUFDLEtBQWEsRUFBRSxFQUFFO1lBQzdCLE1BQU0sRUFBRSxTQUFTLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQzlCLElBQUksU0FBUztnQkFBRSxPQUFPLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN2QyxPQUFPLEtBQUssQ0FBQztRQUNmLENBQUMsQ0FBQztJQU1KLENBQUM7SUFyQkMsUUFBUTtRQUNOLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckQsSUFBSSxDQUFDLEdBQUcsR0FBRyxPQUFPLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxHQUFHLEdBQUcsT0FBTyxJQUFJLEdBQUcsQ0FBQztRQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLFVBQVUsSUFBSSxDQUFDLENBQUM7UUFFNUIsTUFBTSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxJQUFJLElBQUksQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sUUFBUSxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7SUFDcEUsQ0FBQztJQVFELFlBQVksQ0FBQyxLQUFvQjtRQUMvQixNQUFNLEVBQUUsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNoQyxJQUFJLFdBQVc7WUFBRSxPQUFPLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7WUFqQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQiw2a0JBQW1DO2dCQUNuQyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpNYXJrcywgTnpTbGlkZXJWYWx1ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvc2xpZGVyJztcbmltcG9ydCB7IENvbnRyb2xVSVdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5pbXBvcnQgeyBTRlNsaWRlcldpZGdldFNjaGVtYSB9IGZyb20gJy4vc2NoZW1hJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2Ytc2xpZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NsaWRlci53aWRnZXQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBTbGlkZXJXaWRnZXQgZXh0ZW5kcyBDb250cm9sVUlXaWRnZXQ8U0ZTbGlkZXJXaWRnZXRTY2hlbWE+IGltcGxlbWVudHMgT25Jbml0IHtcbiAgbWluOiBudW1iZXI7XG4gIG1heDogbnVtYmVyO1xuICBzdGVwOiBudW1iZXI7XG4gIG1hcmtzOiBOek1hcmtzIHwgbnVsbDtcbiAgaW5jbHVkZWQ6IGJvb2xlYW47XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3QgeyBtaW5pbXVtLCBtYXhpbXVtLCBtdWx0aXBsZU9mIH0gPSB0aGlzLnNjaGVtYTtcbiAgICB0aGlzLm1pbiA9IG1pbmltdW0gfHwgMDtcbiAgICB0aGlzLm1heCA9IG1heGltdW0gfHwgMTAwO1xuICAgIHRoaXMuc3RlcCA9IG11bHRpcGxlT2YgfHwgMTtcblxuICAgIGNvbnN0IHsgbWFya3MsIGluY2x1ZGVkIH0gPSB0aGlzLnVpO1xuICAgIHRoaXMubWFya3MgPSBtYXJrcyB8fCBudWxsO1xuICAgIHRoaXMuaW5jbHVkZWQgPSB0eXBlb2YgaW5jbHVkZWQgPT09ICd1bmRlZmluZWQnID8gdHJ1ZSA6IGluY2x1ZGVkO1xuICB9XG5cbiAgX2Zvcm1hdHRlciA9ICh2YWx1ZTogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgeyBmb3JtYXR0ZXIgfSA9IHRoaXMudWk7XG4gICAgaWYgKGZvcm1hdHRlcikgcmV0dXJuIGZvcm1hdHRlcih2YWx1ZSk7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xuXG4gIF9hZnRlckNoYW5nZSh2YWx1ZTogTnpTbGlkZXJWYWx1ZSk6IHZvaWQge1xuICAgIGNvbnN0IHsgYWZ0ZXJDaGFuZ2UgfSA9IHRoaXMudWk7XG4gICAgaWYgKGFmdGVyQ2hhbmdlKSByZXR1cm4gYWZ0ZXJDaGFuZ2UodmFsdWUpO1xuICB9XG59XG4iXX0=