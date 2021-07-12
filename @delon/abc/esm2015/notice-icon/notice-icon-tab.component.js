import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
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
NoticeIconTabComponent.decorators = [
    { type: Component, args: [{
                selector: 'notice-icon-tab',
                exportAs: 'noticeIconTab',
                template: "<div *ngIf=\"data.list?.length === 0; else listTpl\" class=\"notice-icon__notfound\">\n  <img class=\"notice-icon__notfound-img\" *ngIf=\"data.emptyImage\" [attr.src]=\"data.emptyImage\" alt=\"not found\" />\n  <p>\n    <ng-container *nzStringTemplateOutlet=\"data.emptyText\">\n      {{ data.emptyText || locale.emptyText }}\n    </ng-container>\n  </p>\n</div>\n<ng-template #listTpl>\n  <nz-list [nzDataSource]=\"data.list\" [nzRenderItem]=\"item\">\n    <ng-template #item let-item>\n      <nz-list-item (click)=\"onClick(item)\" [ngClass]=\"{ 'notice-icon__item-read': item.read }\">\n        <nz-list-item-meta [nzTitle]=\"nzTitle\" [nzDescription]=\"nzDescription\" [nzAvatar]=\"item.avatar\">\n          <ng-template #nzTitle>\n            <ng-container *nzStringTemplateOutlet=\"item.title; context: { $implicit: item }\">{{ item.title }}</ng-container>\n            <div class=\"notice-icon__item-extra\" *ngIf=\"item.extra\">\n              <nz-tag [nzColor]=\"item.color\">{{ item.extra }}</nz-tag>\n            </div>\n          </ng-template>\n          <ng-template #nzDescription>\n            <div *ngIf=\"item.description\" class=\"notice-icon__item-desc\">\n              <ng-container *nzStringTemplateOutlet=\"item.description; context: { $implicit: item }\">{{ item.description }}</ng-container>\n            </div>\n            <div *ngIf=\"item.datetime\" class=\"notice-icon__item-time\">{{ item.datetime }}</div>\n          </ng-template>\n        </nz-list-item-meta>\n      </nz-list-item>\n    </ng-template>\n  </nz-list>\n  <div class=\"notice-icon__clear\" (click)=\"onClear()\">{{ data.clearText || locale.clearText }}</div>\n</ng-template>\n",
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None
            },] }
];
NoticeIconTabComponent.propDecorators = {
    locale: [{ type: Input }],
    data: [{ type: Input }],
    select: [{ type: Output }],
    clear: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWNlLWljb24tdGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9ub3RpY2UtaWNvbi9ub3RpY2UtaWNvbi10YWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFXMUYsTUFBTSxPQUFPLHNCQUFzQjtJQVBuQztRQVFXLFdBQU0sR0FBZSxFQUFFLENBQUM7UUFFZCxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQW9CLENBQUM7UUFDOUMsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7SUFTeEQsQ0FBQztJQVBDLE9BQU8sQ0FBQyxJQUFnQjtRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7WUFuQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRSxlQUFlO2dCQUN6Qix1cERBQStDO2dCQUMvQyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0Qzs7O3FCQUVFLEtBQUs7bUJBQ0wsS0FBSztxQkFDTCxNQUFNO29CQUNOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgTm90aWNlSWNvblNlbGVjdCwgTm90aWNlSXRlbSB9IGZyb20gJy4vbm90aWNlLWljb24udHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3RpY2UtaWNvbi10YWInLFxuICBleHBvcnRBczogJ25vdGljZUljb25UYWInLFxuICB0ZW1wbGF0ZVVybDogJy4vbm90aWNlLWljb24tdGFiLmNvbXBvbmVudC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIE5vdGljZUljb25UYWJDb21wb25lbnQge1xuICBASW5wdXQoKSBsb2NhbGU6IExvY2FsZURhdGEgPSB7fTtcbiAgQElucHV0KCkgZGF0YTogTm90aWNlSXRlbTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8Tm90aWNlSWNvblNlbGVjdD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNsZWFyID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgb25DbGljayhpdGVtOiBOb3RpY2VJdGVtKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3QuZW1pdCh7IHRpdGxlOiB0aGlzLmRhdGEudGl0bGUsIGl0ZW0gfSk7XG4gIH1cblxuICBvbkNsZWFyKCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYXIuZW1pdCh0aGlzLmRhdGEudGl0bGUpO1xuICB9XG59XG4iXX0=