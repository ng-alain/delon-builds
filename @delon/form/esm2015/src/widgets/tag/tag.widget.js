import { Component, ViewEncapsulation } from '@angular/core';
import { getData } from '../../utils';
import { ControlUIWidget } from '../../widget';
import * as i0 from "@angular/core";
export class TagWidget extends ControlUIWidget {
    reset(value) {
        getData(this.schema, this.ui, value).subscribe(list => {
            this.data = list;
            this.detectChanges();
        });
    }
    onChange(item) {
        item.checked = !item.checked;
        this.updateValue();
        if (this.ui.checkedChange) {
            this.ui.checkedChange(item.checked);
        }
    }
    _close(e) {
        if (this.ui.onClose)
            this.ui.onClose(e);
    }
    updateValue() {
        this.formProperty.setValue(this.data.filter(w => w.checked).map(i => i.value), false);
    }
}
/** @nocollapse */ TagWidget.ɵfac = function TagWidget_Factory(t) { return ɵTagWidget_BaseFactory(t || TagWidget); };
/** @nocollapse */ TagWidget.ɵcmp = i0.ɵɵngDeclareComponent({ version: "11.1.1", type: TagWidget, selector: "sf-tag", usesInheritance: true, ngImport: i0, template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <ng-template #icon let-i>\n    <i nz-icon [nzType]=\"i.type\" [nzTheme]=\"i.theme\" [nzTwotoneColor]=\"i.twotoneColor\" [nzRotate]=\"i.rotate\" [nzIconfont]=\"i.iconfont\" [nzSpin]=\"i.spin\"></i>\n  </ng-template>\n  <nz-tag *ngFor=\"let i of data\" [nzMode]=\"ui.mode || 'checkable'\" [nzChecked]=\"i.checked\" (nzOnClose)=\"_close($event)\" (nzCheckedChange)=\"onChange(i)\">\n    <ng-container *ngIf=\"i.prefixIcon\">\n      <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{ $implicit: i.prefixIcon }\"></ng-template>\n    </ng-container>\n    <span>{{i.label}}</span>\n    <ng-container *ngIf=\"i.suffixIcon\">\n      <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{ $implicit: i.suffixIcon }\"></ng-template>\n    </ng-container>\n  </nz-tag>\n</sf-item-wrap>\n", encapsulation: i0.ViewEncapsulation.None });
const ɵTagWidget_BaseFactory = /*@__PURE__*/ i0.ɵɵgetInheritedFactory(TagWidget);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TagWidget, [{
        type: Component,
        args: [{
                selector: 'sf-tag',
                templateUrl: './tag.widget.html',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm0vc3JjL3dpZGdldHMvdGFnL3RhZy53aWRnZXQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3NyYy93aWRnZXRzL3RhZy90YWcud2lkZ2V0Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUc3RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxjQUFjLENBQUM7O0FBUy9DLE1BQU0sT0FBTyxTQUFVLFNBQVEsZUFBa0M7SUFHL0QsS0FBSyxDQUFDLEtBQWM7UUFDbEIsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDcEQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDakIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFFBQVEsQ0FBQyxJQUFrQjtRQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM3QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRTtZQUN6QixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDckM7SUFDSCxDQUFDO0lBRUQsTUFBTSxDQUFDLENBQWE7UUFDbEIsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU87WUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRU8sV0FBVztRQUNqQixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUNsRCxLQUFLLENBQ04sQ0FBQztJQUNKLENBQUM7O3VHQTNCVSxTQUFTO3VGQUFULFNBQVMscUVDYnRCLG03QkFjQTtzRUREYSxTQUFTO3VGQUFULFNBQVM7Y0FOckIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxRQUFRO2dCQUNsQixXQUFXLEVBQUUsbUJBQW1CO2dCQUNoQyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNGVmFsdWUgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgU0ZTY2hlbWFFbnVtIH0gZnJvbSAnLi4vLi4vc2NoZW1hJztcbmltcG9ydCB7IGdldERhdGEgfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgeyBDb250cm9sVUlXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuaW1wb3J0IHsgU0ZUYWdXaWRnZXRTY2hlbWEgfSBmcm9tICcuL3NjaGVtYSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLXRhZycsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWcud2lkZ2V0Lmh0bWwnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgVGFnV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFVJV2lkZ2V0PFNGVGFnV2lkZ2V0U2NoZW1hPiB7XG4gIGRhdGE6IFNGU2NoZW1hRW51bVtdO1xuXG4gIHJlc2V0KHZhbHVlOiBTRlZhbHVlKTogdm9pZCB7XG4gICAgZ2V0RGF0YSh0aGlzLnNjaGVtYSwgdGhpcy51aSwgdmFsdWUpLnN1YnNjcmliZShsaXN0ID0+IHtcbiAgICAgIHRoaXMuZGF0YSA9IGxpc3Q7XG4gICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uQ2hhbmdlKGl0ZW06IFNGU2NoZW1hRW51bSk6IHZvaWQge1xuICAgIGl0ZW0uY2hlY2tlZCA9ICFpdGVtLmNoZWNrZWQ7XG4gICAgdGhpcy51cGRhdGVWYWx1ZSgpO1xuICAgIGlmICh0aGlzLnVpLmNoZWNrZWRDaGFuZ2UpIHtcbiAgICAgIHRoaXMudWkuY2hlY2tlZENoYW5nZShpdGVtLmNoZWNrZWQpO1xuICAgIH1cbiAgfVxuXG4gIF9jbG9zZShlOiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMudWkub25DbG9zZSkgdGhpcy51aS5vbkNsb3NlKGUpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVWYWx1ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5zZXRWYWx1ZShcbiAgICAgIHRoaXMuZGF0YS5maWx0ZXIodyA9PiB3LmNoZWNrZWQpLm1hcChpID0+IGkudmFsdWUpLFxuICAgICAgZmFsc2UsXG4gICAgKTtcbiAgfVxufVxuIiwiPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cbiAgPG5nLXRlbXBsYXRlICNpY29uIGxldC1pPlxuICAgIDxpIG56LWljb24gW256VHlwZV09XCJpLnR5cGVcIiBbbnpUaGVtZV09XCJpLnRoZW1lXCIgW256VHdvdG9uZUNvbG9yXT1cImkudHdvdG9uZUNvbG9yXCIgW256Um90YXRlXT1cImkucm90YXRlXCIgW256SWNvbmZvbnRdPVwiaS5pY29uZm9udFwiIFtuelNwaW5dPVwiaS5zcGluXCI+PC9pPlxuICA8L25nLXRlbXBsYXRlPlxuICA8bnotdGFnICpuZ0Zvcj1cImxldCBpIG9mIGRhdGFcIiBbbnpNb2RlXT1cInVpLm1vZGUgfHwgJ2NoZWNrYWJsZSdcIiBbbnpDaGVja2VkXT1cImkuY2hlY2tlZFwiIChuek9uQ2xvc2UpPVwiX2Nsb3NlKCRldmVudClcIiAobnpDaGVja2VkQ2hhbmdlKT1cIm9uQ2hhbmdlKGkpXCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImkucHJlZml4SWNvblwiPlxuICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImljb25cIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IGkucHJlZml4SWNvbiB9XCI+PC9uZy10ZW1wbGF0ZT5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8c3Bhbj57e2kubGFiZWx9fTwvc3Bhbj5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaS5zdWZmaXhJY29uXCI+XG4gICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiaWNvblwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogaS5zdWZmaXhJY29uIH1cIj48L25nLXRlbXBsYXRlPlxuICAgIDwvbmctY29udGFpbmVyPlxuICA8L256LXRhZz5cbjwvc2YtaXRlbS13cmFwPlxuIl19