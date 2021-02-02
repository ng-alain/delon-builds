import { Component, ViewEncapsulation } from '@angular/core';
import { toBool } from '../../utils';
import { ControlUIWidget } from '../../widget';
import * as i0 from "@angular/core";
export class RateWidget extends ControlUIWidget {
    constructor() {
        super(...arguments);
        this.hasText = false;
    }
    get text() {
        return this.ui.text.replace('{{value}}', this.formProperty.value);
    }
    ngOnInit() {
        const { schema, ui } = this;
        this.count = schema.maximum || 5;
        this.allowHalf = (schema.multipleOf || 0.5) === 0.5;
        this.allowClear = toBool(ui.allowClear, true);
        this.autoFocus = toBool(ui.autoFocus, false);
        this.hasText = !!ui.text;
    }
}
/** @nocollapse */ RateWidget.ɵfac = function RateWidget_Factory(t) { return ɵRateWidget_BaseFactory(t || RateWidget); };
/** @nocollapse */ RateWidget.ɵcmp = i0.ɵɵngDeclareComponent({ version: "11.1.1", type: RateWidget, selector: "sf-rate", usesInheritance: true, ngImport: i0, template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <nz-rate\n    [nzDisabled]=\"disabled\"\n    [ngModel]=\"value\"\n    (ngModelChange)=\"setValue($event)\"\n    [nzAllowClear]=\"allowClear\"\n    [nzAllowHalf]=\"allowHalf\"\n    [nzTooltips]=\"ui.tooltips || []\"\n    [nzAutoFocus]=\"autoFocus\"\n    [nzCount]=\"count\"\n  ></nz-rate>\n  <span *ngIf=\"hasText && formProperty.value\" class=\"ant-rate-text\">{{ text }}</span>\n</sf-item-wrap>\n", encapsulation: i0.ViewEncapsulation.None });
const ɵRateWidget_BaseFactory = /*@__PURE__*/ i0.ɵɵgetInheritedFactory(RateWidget);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RateWidget, [{
        type: Component,
        args: [{
                selector: 'sf-rate',
                templateUrl: './rate.widget.html',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0ZS53aWRnZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3NyYy93aWRnZXRzL3JhdGUvcmF0ZS53aWRnZXQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3NyYy93aWRnZXRzL3JhdGUvcmF0ZS53aWRnZXQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDckMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7QUFTL0MsTUFBTSxPQUFPLFVBQVcsU0FBUSxlQUFtQztJQU5uRTs7UUFXRSxZQUFPLEdBQUcsS0FBSyxDQUFDO0tBY2pCO0lBWkMsSUFBSSxJQUFJO1FBQ04sT0FBUSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQWUsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEYsQ0FBQztJQUVELFFBQVE7UUFDTixNQUFNLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxNQUFNLENBQUMsVUFBVSxJQUFJLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQztRQUNwRCxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztJQUMzQixDQUFDOzswR0FsQlUsVUFBVTt3RkFBVixVQUFVLHNFQ1h2QixzaEJBYUE7dUVERmEsVUFBVTt1RkFBVixVQUFVO2NBTnRCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsU0FBUztnQkFDbkIsV0FBVyxFQUFFLG9CQUFvQjtnQkFDakMsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRvQm9vbCB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IENvbnRyb2xVSVdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5pbXBvcnQgeyBTRlJhdGVXaWRnZXRTY2hlbWEgfSBmcm9tICcuL3NjaGVtYSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLXJhdGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vcmF0ZS53aWRnZXQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBSYXRlV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFVJV2lkZ2V0PFNGUmF0ZVdpZGdldFNjaGVtYT4gaW1wbGVtZW50cyBPbkluaXQge1xuICBjb3VudDogbnVtYmVyO1xuICBhbGxvd0hhbGY6IGJvb2xlYW47XG4gIGFsbG93Q2xlYXI6IGJvb2xlYW47XG4gIGF1dG9Gb2N1czogYm9vbGVhbjtcbiAgaGFzVGV4dCA9IGZhbHNlO1xuXG4gIGdldCB0ZXh0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICh0aGlzLnVpLnRleHQgYXMgc3RyaW5nKS5yZXBsYWNlKCd7e3ZhbHVlfX0nLCB0aGlzLmZvcm1Qcm9wZXJ0eS52YWx1ZSk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IHNjaGVtYSwgdWkgfSA9IHRoaXM7XG4gICAgdGhpcy5jb3VudCA9IHNjaGVtYS5tYXhpbXVtIHx8IDU7XG4gICAgdGhpcy5hbGxvd0hhbGYgPSAoc2NoZW1hLm11bHRpcGxlT2YgfHwgMC41KSA9PT0gMC41O1xuICAgIHRoaXMuYWxsb3dDbGVhciA9IHRvQm9vbCh1aS5hbGxvd0NsZWFyLCB0cnVlKTtcbiAgICB0aGlzLmF1dG9Gb2N1cyA9IHRvQm9vbCh1aS5hdXRvRm9jdXMsIGZhbHNlKTtcbiAgICB0aGlzLmhhc1RleHQgPSAhIXVpLnRleHQ7XG4gIH1cbn1cbiIsIjxzZi1pdGVtLXdyYXAgW2lkXT1cImlkXCIgW3NjaGVtYV09XCJzY2hlbWFcIiBbdWldPVwidWlcIiBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiIFtlcnJvcl09XCJlcnJvclwiIFtzaG93VGl0bGVdPVwic2NoZW1hLnRpdGxlXCI+XG4gIDxuei1yYXRlXG4gICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgIFtuZ01vZGVsXT1cInZhbHVlXCJcbiAgICAobmdNb2RlbENoYW5nZSk9XCJzZXRWYWx1ZSgkZXZlbnQpXCJcbiAgICBbbnpBbGxvd0NsZWFyXT1cImFsbG93Q2xlYXJcIlxuICAgIFtuekFsbG93SGFsZl09XCJhbGxvd0hhbGZcIlxuICAgIFtuelRvb2x0aXBzXT1cInVpLnRvb2x0aXBzIHx8IFtdXCJcbiAgICBbbnpBdXRvRm9jdXNdPVwiYXV0b0ZvY3VzXCJcbiAgICBbbnpDb3VudF09XCJjb3VudFwiXG4gID48L256LXJhdGU+XG4gIDxzcGFuICpuZ0lmPVwiaGFzVGV4dCAmJiBmb3JtUHJvcGVydHkudmFsdWVcIiBjbGFzcz1cImFudC1yYXRlLXRleHRcIj57eyB0ZXh0IH19PC9zcGFuPlxuPC9zZi1pdGVtLXdyYXA+XG4iXX0=