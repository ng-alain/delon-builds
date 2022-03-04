import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/list";
import * as i2 from "ng-zorro-antd/tag";
import * as i3 from "@angular/common";
import * as i4 from "ng-zorro-antd/core/outlet";
export class NoticeIconTabComponent {
    constructor() {
        this.locale = {};
        this.select = new EventEmitter();
        this.clear = new EventEmitter();
    }
    onClick(item) {
        this.select.emit({ title: this.data.title, item });
    }
    onClear() {
        this.clear.emit(this.data.title);
    }
}
NoticeIconTabComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: NoticeIconTabComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NoticeIconTabComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.5", type: NoticeIconTabComponent, selector: "notice-icon-tab", inputs: { locale: "locale", data: "data" }, outputs: { select: "select", clear: "clear" }, exportAs: ["noticeIconTab"], ngImport: i0, template: "<div *ngIf=\"data.list?.length === 0; else listTpl\" class=\"notice-icon__notfound\">\n  <img class=\"notice-icon__notfound-img\" *ngIf=\"data.emptyImage\" [attr.src]=\"data.emptyImage\" alt=\"not found\" />\n  <p>\n    <ng-container *nzStringTemplateOutlet=\"data.emptyText\">\n      {{ data.emptyText || locale.emptyText }}\n    </ng-container>\n  </p>\n</div>\n<ng-template #listTpl>\n  <nz-list [nzDataSource]=\"data.list\" [nzRenderItem]=\"item\">\n    <ng-template #item let-item>\n      <nz-list-item (click)=\"onClick(item)\" [ngClass]=\"{ 'notice-icon__item-read': item.read }\">\n        <nz-list-item-meta [nzTitle]=\"nzTitle\" [nzDescription]=\"nzDescription\" [nzAvatar]=\"item.avatar\">\n          <ng-template #nzTitle>\n            <ng-container *nzStringTemplateOutlet=\"item.title; context: { $implicit: item }\">{{\n              item.title\n            }}</ng-container>\n            <div class=\"notice-icon__item-extra\" *ngIf=\"item.extra\">\n              <nz-tag [nzColor]=\"item.color\">{{ item.extra }}</nz-tag>\n            </div>\n          </ng-template>\n          <ng-template #nzDescription>\n            <div *ngIf=\"item.description\" class=\"notice-icon__item-desc\">\n              <ng-container *nzStringTemplateOutlet=\"item.description; context: { $implicit: item }\">{{\n                item.description\n              }}</ng-container>\n            </div>\n            <div *ngIf=\"item.datetime\" class=\"notice-icon__item-time\">{{ item.datetime }}</div>\n          </ng-template>\n        </nz-list-item-meta>\n      </nz-list-item>\n    </ng-template>\n  </nz-list>\n  <div class=\"notice-icon__clear\" (click)=\"onClear()\">{{ data.clearText || locale.clearText }}</div>\n</ng-template>\n", components: [{ type: i1.NzListComponent, selector: "nz-list, [nz-list]", inputs: ["nzDataSource", "nzBordered", "nzGrid", "nzHeader", "nzFooter", "nzItemLayout", "nzRenderItem", "nzLoading", "nzLoadMore", "nzPagination", "nzSize", "nzSplit", "nzNoResult"], exportAs: ["nzList"] }, { type: i1.NzListItemComponent, selector: "nz-list-item, [nz-list-item]", inputs: ["nzActions", "nzContent", "nzExtra", "nzNoFlex"], exportAs: ["nzListItem"] }, { type: i1.NzListItemMetaComponent, selector: "nz-list-item-meta, [nz-list-item-meta]", inputs: ["nzAvatar", "nzTitle", "nzDescription"], exportAs: ["nzListItemMeta"] }, { type: i2.NzTagComponent, selector: "nz-tag", inputs: ["nzMode", "nzColor", "nzChecked"], outputs: ["nzOnClose", "nzCheckedChange"], exportAs: ["nzTag"] }], directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i4.NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { type: i3.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: NoticeIconTabComponent, decorators: [{
            type: Component,
            args: [{ selector: 'notice-icon-tab', exportAs: 'noticeIconTab', preserveWhitespaces: false, encapsulation: ViewEncapsulation.None, template: "<div *ngIf=\"data.list?.length === 0; else listTpl\" class=\"notice-icon__notfound\">\n  <img class=\"notice-icon__notfound-img\" *ngIf=\"data.emptyImage\" [attr.src]=\"data.emptyImage\" alt=\"not found\" />\n  <p>\n    <ng-container *nzStringTemplateOutlet=\"data.emptyText\">\n      {{ data.emptyText || locale.emptyText }}\n    </ng-container>\n  </p>\n</div>\n<ng-template #listTpl>\n  <nz-list [nzDataSource]=\"data.list\" [nzRenderItem]=\"item\">\n    <ng-template #item let-item>\n      <nz-list-item (click)=\"onClick(item)\" [ngClass]=\"{ 'notice-icon__item-read': item.read }\">\n        <nz-list-item-meta [nzTitle]=\"nzTitle\" [nzDescription]=\"nzDescription\" [nzAvatar]=\"item.avatar\">\n          <ng-template #nzTitle>\n            <ng-container *nzStringTemplateOutlet=\"item.title; context: { $implicit: item }\">{{\n              item.title\n            }}</ng-container>\n            <div class=\"notice-icon__item-extra\" *ngIf=\"item.extra\">\n              <nz-tag [nzColor]=\"item.color\">{{ item.extra }}</nz-tag>\n            </div>\n          </ng-template>\n          <ng-template #nzDescription>\n            <div *ngIf=\"item.description\" class=\"notice-icon__item-desc\">\n              <ng-container *nzStringTemplateOutlet=\"item.description; context: { $implicit: item }\">{{\n                item.description\n              }}</ng-container>\n            </div>\n            <div *ngIf=\"item.datetime\" class=\"notice-icon__item-time\">{{ item.datetime }}</div>\n          </ng-template>\n        </nz-list-item-meta>\n      </nz-list-item>\n    </ng-template>\n  </nz-list>\n  <div class=\"notice-icon__clear\" (click)=\"onClear()\">{{ data.clearText || locale.clearText }}</div>\n</ng-template>\n" }]
        }], propDecorators: { locale: [{
                type: Input
            }], data: [{
                type: Input
            }], select: [{
                type: Output
            }], clear: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWNlLWljb24tdGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9ub3RpY2UtaWNvbi9ub3RpY2UtaWNvbi10YWIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL25vdGljZS1pY29uL25vdGljZS1pY29uLXRhYi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7QUFhMUYsTUFBTSxPQUFPLHNCQUFzQjtJQVBuQztRQVFXLFdBQU0sR0FBZSxFQUFFLENBQUM7UUFFZCxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQW9CLENBQUM7UUFDOUMsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7S0FTdkQ7SUFQQyxPQUFPLENBQUMsSUFBZ0I7UUFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsT0FBTztRQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7bUhBWlUsc0JBQXNCO3VHQUF0QixzQkFBc0IsK0tDYm5DLHlzREFtQ0E7MkZEdEJhLHNCQUFzQjtrQkFQbEMsU0FBUzsrQkFDRSxpQkFBaUIsWUFDakIsZUFBZSx1QkFFSixLQUFLLGlCQUNYLGlCQUFpQixDQUFDLElBQUk7OEJBRzVCLE1BQU07c0JBQWQsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ2EsTUFBTTtzQkFBeEIsTUFBTTtnQkFDWSxLQUFLO3NCQUF2QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuXG5pbXBvcnQgeyBOb3RpY2VJY29uU2VsZWN0LCBOb3RpY2VJdGVtIH0gZnJvbSAnLi9ub3RpY2UtaWNvbi50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdGljZS1pY29uLXRhYicsXG4gIGV4cG9ydEFzOiAnbm90aWNlSWNvblRhYicsXG4gIHRlbXBsYXRlVXJsOiAnLi9ub3RpY2UtaWNvbi10YWIuY29tcG9uZW50Lmh0bWwnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBOb3RpY2VJY29uVGFiQ29tcG9uZW50IHtcbiAgQElucHV0KCkgbG9jYWxlOiBMb2NhbGVEYXRhID0ge307XG4gIEBJbnB1dCgpIGRhdGEhOiBOb3RpY2VJdGVtO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgc2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxOb3RpY2VJY29uU2VsZWN0PigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2xlYXIgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICBvbkNsaWNrKGl0ZW06IE5vdGljZUl0ZW0pOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdC5lbWl0KHsgdGl0bGU6IHRoaXMuZGF0YS50aXRsZSwgaXRlbSB9KTtcbiAgfVxuXG4gIG9uQ2xlYXIoKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhci5lbWl0KHRoaXMuZGF0YS50aXRsZSk7XG4gIH1cbn1cbiIsIjxkaXYgKm5nSWY9XCJkYXRhLmxpc3Q/Lmxlbmd0aCA9PT0gMDsgZWxzZSBsaXN0VHBsXCIgY2xhc3M9XCJub3RpY2UtaWNvbl9fbm90Zm91bmRcIj5cbiAgPGltZyBjbGFzcz1cIm5vdGljZS1pY29uX19ub3Rmb3VuZC1pbWdcIiAqbmdJZj1cImRhdGEuZW1wdHlJbWFnZVwiIFthdHRyLnNyY109XCJkYXRhLmVtcHR5SW1hZ2VcIiBhbHQ9XCJub3QgZm91bmRcIiAvPlxuICA8cD5cbiAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiZGF0YS5lbXB0eVRleHRcIj5cbiAgICAgIHt7IGRhdGEuZW1wdHlUZXh0IHx8IGxvY2FsZS5lbXB0eVRleHQgfX1cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9wPlxuPC9kaXY+XG48bmctdGVtcGxhdGUgI2xpc3RUcGw+XG4gIDxuei1saXN0IFtuekRhdGFTb3VyY2VdPVwiZGF0YS5saXN0XCIgW256UmVuZGVySXRlbV09XCJpdGVtXCI+XG4gICAgPG5nLXRlbXBsYXRlICNpdGVtIGxldC1pdGVtPlxuICAgICAgPG56LWxpc3QtaXRlbSAoY2xpY2spPVwib25DbGljayhpdGVtKVwiIFtuZ0NsYXNzXT1cInsgJ25vdGljZS1pY29uX19pdGVtLXJlYWQnOiBpdGVtLnJlYWQgfVwiPlxuICAgICAgICA8bnotbGlzdC1pdGVtLW1ldGEgW256VGl0bGVdPVwibnpUaXRsZVwiIFtuekRlc2NyaXB0aW9uXT1cIm56RGVzY3JpcHRpb25cIiBbbnpBdmF0YXJdPVwiaXRlbS5hdmF0YXJcIj5cbiAgICAgICAgICA8bmctdGVtcGxhdGUgI256VGl0bGU+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiaXRlbS50aXRsZTsgY29udGV4dDogeyAkaW1wbGljaXQ6IGl0ZW0gfVwiPnt7XG4gICAgICAgICAgICAgIGl0ZW0udGl0bGVcbiAgICAgICAgICAgIH19PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm90aWNlLWljb25fX2l0ZW0tZXh0cmFcIiAqbmdJZj1cIml0ZW0uZXh0cmFcIj5cbiAgICAgICAgICAgICAgPG56LXRhZyBbbnpDb2xvcl09XCJpdGVtLmNvbG9yXCI+e3sgaXRlbS5leHRyYSB9fTwvbnotdGFnPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICA8bmctdGVtcGxhdGUgI256RGVzY3JpcHRpb24+XG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiaXRlbS5kZXNjcmlwdGlvblwiIGNsYXNzPVwibm90aWNlLWljb25fX2l0ZW0tZGVzY1wiPlxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiaXRlbS5kZXNjcmlwdGlvbjsgY29udGV4dDogeyAkaW1wbGljaXQ6IGl0ZW0gfVwiPnt7XG4gICAgICAgICAgICAgICAgaXRlbS5kZXNjcmlwdGlvblxuICAgICAgICAgICAgICB9fTwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiaXRlbS5kYXRldGltZVwiIGNsYXNzPVwibm90aWNlLWljb25fX2l0ZW0tdGltZVwiPnt7IGl0ZW0uZGF0ZXRpbWUgfX08L2Rpdj5cbiAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICA8L256LWxpc3QtaXRlbS1tZXRhPlxuICAgICAgPC9uei1saXN0LWl0ZW0+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgPC9uei1saXN0PlxuICA8ZGl2IGNsYXNzPVwibm90aWNlLWljb25fX2NsZWFyXCIgKGNsaWNrKT1cIm9uQ2xlYXIoKVwiPnt7IGRhdGEuY2xlYXJUZXh0IHx8IGxvY2FsZS5jbGVhclRleHQgfX08L2Rpdj5cbjwvbmctdGVtcGxhdGU+XG4iXX0=