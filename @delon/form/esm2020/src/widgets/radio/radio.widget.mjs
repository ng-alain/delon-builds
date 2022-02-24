import { Component, ViewEncapsulation } from '@angular/core';
import { getData } from '../../utils';
import { ControlUIWidget } from '../../widget';
import * as i0 from "@angular/core";
import * as i1 from "../../sf-item-wrap.component";
import * as i2 from "ng-zorro-antd/radio";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/common";
export class RadioWidget extends ControlUIWidget {
    constructor() {
        super(...arguments);
        this.data = [];
    }
    reset(value) {
        this.styleType = (this.ui.styleType || 'default') === 'default';
        getData(this.schema, this.ui, value).subscribe(list => {
            this.data = list.map(i => {
                i.label = this.dom.bypassSecurityTrustHtml(i.label);
                return i;
            });
            this.detectChanges();
        });
    }
    _setValue(value) {
        this.setValue(value);
        if (this.ui.change)
            this.ui.change(value);
    }
}
RadioWidget.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.4", ngImport: i0, type: RadioWidget, deps: null, target: i0.ɵɵFactoryTarget.Component });
RadioWidget.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.4", type: RadioWidget, selector: "sf-radio", usesInheritance: true, ngImport: i0, template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <nz-radio-group\n    [nzSize]=\"ui.size!\"\n    [nzName]=\"id\"\n    [ngModel]=\"value\"\n    (ngModelChange)=\"_setValue($event)\"\n    [nzButtonStyle]=\"ui.buttonStyle || 'outline'\"\n  >\n    <ng-container *ngIf=\"styleType\">\n      <label *ngFor=\"let option of data\" nz-radio [nzValue]=\"option.value\" [nzDisabled]=\"disabled || option.disabled\">\n        <span [innerHTML]=\"option.label\"></span>\n      </label>\n    </ng-container>\n    <ng-container *ngIf=\"!styleType\">\n      <label\n        *ngFor=\"let option of data\"\n        nz-radio-button\n        [nzValue]=\"option.value\"\n        [nzDisabled]=\"disabled || option.disabled\"\n      >\n        <span [innerHTML]=\"option.label\"></span>\n      </label>\n    </ng-container>\n  </nz-radio-group>\n</sf-item-wrap>\n", components: [{ type: i1.SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }, { type: i2.NzRadioGroupComponent, selector: "nz-radio-group", inputs: ["nzDisabled", "nzButtonStyle", "nzSize", "nzName"], exportAs: ["nzRadioGroup"] }, { type: i2.NzRadioComponent, selector: "[nz-radio],[nz-radio-button]", inputs: ["nzValue", "nzDisabled", "nzAutoFocus"], exportAs: ["nzRadio"] }], directives: [{ type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i3.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i2.NzRadioButtonDirective, selector: "[nz-radio-button]" }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.4", ngImport: i0, type: RadioWidget, decorators: [{
            type: Component,
            args: [{ selector: 'sf-radio', preserveWhitespaces: false, encapsulation: ViewEncapsulation.None, template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <nz-radio-group\n    [nzSize]=\"ui.size!\"\n    [nzName]=\"id\"\n    [ngModel]=\"value\"\n    (ngModelChange)=\"_setValue($event)\"\n    [nzButtonStyle]=\"ui.buttonStyle || 'outline'\"\n  >\n    <ng-container *ngIf=\"styleType\">\n      <label *ngFor=\"let option of data\" nz-radio [nzValue]=\"option.value\" [nzDisabled]=\"disabled || option.disabled\">\n        <span [innerHTML]=\"option.label\"></span>\n      </label>\n    </ng-container>\n    <ng-container *ngIf=\"!styleType\">\n      <label\n        *ngFor=\"let option of data\"\n        nz-radio-button\n        [nzValue]=\"option.value\"\n        [nzDisabled]=\"disabled || option.disabled\"\n      >\n        <span [innerHTML]=\"option.label\"></span>\n      </label>\n    </ng-container>\n  </nz-radio-group>\n</sf-item-wrap>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8ud2lkZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS9zcmMvd2lkZ2V0cy9yYWRpby9yYWRpby53aWRnZXQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3NyYy93aWRnZXRzL3JhZGlvL3JhZGlvLndpZGdldC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJN0QsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN0QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7Ozs7QUFTL0MsTUFBTSxPQUFPLFdBQVksU0FBUSxlQUFvQztJQU5yRTs7UUFPRSxTQUFJLEdBQW1CLEVBQUUsQ0FBQztLQWtCM0I7SUFmQyxLQUFLLENBQUMsS0FBYztRQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLElBQUksU0FBUyxDQUFDLEtBQUssU0FBUyxDQUFDO1FBQ2hFLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3BELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDdkIsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDcEQsT0FBTyxDQUFDLENBQUM7WUFDWCxDQUFDLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxTQUFTLENBQUMsS0FBYztRQUN0QixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNO1lBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7d0dBbEJVLFdBQVc7NEZBQVgsV0FBVyx1RUNkeEIsZzZCQXlCQTsyRkRYYSxXQUFXO2tCQU52QixTQUFTOytCQUNFLFVBQVUsdUJBRUMsS0FBSyxpQkFDWCxpQkFBaUIsQ0FBQyxJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTRlZhbHVlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlJztcbmltcG9ydCB7IFNGU2NoZW1hRW51bSB9IGZyb20gJy4uLy4uL3NjaGVtYS9pbmRleCc7XG5pbXBvcnQgeyBnZXREYXRhIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHsgQ29udHJvbFVJV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcbmltcG9ydCB7IFNGUmFkaW9XaWRnZXRTY2hlbWEgfSBmcm9tICcuL3NjaGVtYSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLXJhZGlvJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JhZGlvLndpZGdldC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgUmFkaW9XaWRnZXQgZXh0ZW5kcyBDb250cm9sVUlXaWRnZXQ8U0ZSYWRpb1dpZGdldFNjaGVtYT4ge1xuICBkYXRhOiBTRlNjaGVtYUVudW1bXSA9IFtdO1xuICBzdHlsZVR5cGUhOiBib29sZWFuO1xuXG4gIHJlc2V0KHZhbHVlOiBTRlZhbHVlKTogdm9pZCB7XG4gICAgdGhpcy5zdHlsZVR5cGUgPSAodGhpcy51aS5zdHlsZVR5cGUgfHwgJ2RlZmF1bHQnKSA9PT0gJ2RlZmF1bHQnO1xuICAgIGdldERhdGEodGhpcy5zY2hlbWEsIHRoaXMudWksIHZhbHVlKS5zdWJzY3JpYmUobGlzdCA9PiB7XG4gICAgICB0aGlzLmRhdGEgPSBsaXN0Lm1hcChpID0+IHtcbiAgICAgICAgaS5sYWJlbCA9IHRoaXMuZG9tLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKGkubGFiZWwpO1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gIH1cblxuICBfc2V0VmFsdWUodmFsdWU6IFNGVmFsdWUpOiB2b2lkIHtcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgICBpZiAodGhpcy51aS5jaGFuZ2UpIHRoaXMudWkuY2hhbmdlKHZhbHVlKTtcbiAgfVxufVxuIiwiPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cbiAgPG56LXJhZGlvLWdyb3VwXG4gICAgW256U2l6ZV09XCJ1aS5zaXplIVwiXG4gICAgW256TmFtZV09XCJpZFwiXG4gICAgW25nTW9kZWxdPVwidmFsdWVcIlxuICAgIChuZ01vZGVsQ2hhbmdlKT1cIl9zZXRWYWx1ZSgkZXZlbnQpXCJcbiAgICBbbnpCdXR0b25TdHlsZV09XCJ1aS5idXR0b25TdHlsZSB8fCAnb3V0bGluZSdcIlxuICA+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInN0eWxlVHlwZVwiPlxuICAgICAgPGxhYmVsICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgZGF0YVwiIG56LXJhZGlvIFtuelZhbHVlXT1cIm9wdGlvbi52YWx1ZVwiIFtuekRpc2FibGVkXT1cImRpc2FibGVkIHx8IG9wdGlvbi5kaXNhYmxlZFwiPlxuICAgICAgICA8c3BhbiBbaW5uZXJIVE1MXT1cIm9wdGlvbi5sYWJlbFwiPjwvc3Bhbj5cbiAgICAgIDwvbGFiZWw+XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFzdHlsZVR5cGVcIj5cbiAgICAgIDxsYWJlbFxuICAgICAgICAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGRhdGFcIlxuICAgICAgICBuei1yYWRpby1idXR0b25cbiAgICAgICAgW256VmFsdWVdPVwib3B0aW9uLnZhbHVlXCJcbiAgICAgICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWQgfHwgb3B0aW9uLmRpc2FibGVkXCJcbiAgICAgID5cbiAgICAgICAgPHNwYW4gW2lubmVySFRNTF09XCJvcHRpb24ubGFiZWxcIj48L3NwYW4+XG4gICAgICA8L2xhYmVsPlxuICAgIDwvbmctY29udGFpbmVyPlxuICA8L256LXJhZGlvLWdyb3VwPlxuPC9zZi1pdGVtLXdyYXA+XG4iXX0=