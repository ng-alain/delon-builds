/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var NoticeIconTabComponent = /** @class */ (function () {
    function NoticeIconTabComponent() {
        this.locale = {};
        this.select = new EventEmitter();
        this.clear = new EventEmitter();
    }
    /**
     * @param {?} item
     * @return {?}
     */
    NoticeIconTabComponent.prototype.onClick = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.select.emit(/** @type {?} */ ({
            title: this.data.title,
            item: item,
        }));
    };
    /**
     * @return {?}
     */
    NoticeIconTabComponent.prototype.onClear = /**
     * @return {?}
     */
    function () {
        this.clear.emit(this.data.title);
    };
    NoticeIconTabComponent.decorators = [
        { type: Component, args: [{
                    selector: 'notice-icon-tab',
                    template: "\n  <div *ngIf=\"data.list?.length === 0; else listTpl\" class=\"notice-icon__notfound\">\n    <img class=\"notice-icon__notfound-img\" *ngIf=\"data.emptyImage\" src=\"{{data.emptyImage}}\" alt=\"not found\" />\n    <p>{{data.emptyText || locale.emptyText}}</p>\n  </div>\n  <ng-template #listTpl>\n    <nz-list [nzDataSource]=\"data.list\" [nzRenderItem]=\"item\">\n      <ng-template #item let-item>\n        <nz-list-item (click)=\"onClick(item)\" [ngClass]=\"{'notice-icon__item-read': item.read}\">\n          <nz-list-item-meta\n            [nzTitle]=\"nzTitle\"\n            [nzDescription]=\"nzDescription\"\n            [nzAvatar]=\"item.avatar\">\n            <ng-template #nzTitle>\n              {{item.title}}\n              <div class=\"notice-icon__item-extra\" *ngIf=\"item.extra\"><nz-tag [nzColor]=\"item.color\">{{item.extra}}</nz-tag></div>\n            </ng-template>\n            <ng-template #nzDescription>\n              <div *ngIf=\"item.description\" class=\"notice-icon__item-desc\">{{item.description}}</div>\n              <div *ngIf=\"item.datetime\" class=\"notice-icon__item-time\">{{item.datetime}}</div>\n            </ng-template>\n          </nz-list-item-meta>\n        </nz-list-item>\n      </ng-template>\n    </nz-list>\n    <div class=\"notice-icon__clear\" (click)=\"onClear()\">{{ data.clearText || locale.clearText }}</div>\n  </ng-template>\n  ",
                    preserveWhitespaces: false
                }] }
    ];
    NoticeIconTabComponent.propDecorators = {
        locale: [{ type: Input }],
        data: [{ type: Input }],
        select: [{ type: Output }],
        clear: [{ type: Output }]
    };
    return NoticeIconTabComponent;
}());
export { NoticeIconTabComponent };
if (false) {
    /** @type {?} */
    NoticeIconTabComponent.prototype.locale;
    /** @type {?} */
    NoticeIconTabComponent.prototype.data;
    /** @type {?} */
    NoticeIconTabComponent.prototype.select;
    /** @type {?} */
    NoticeIconTabComponent.prototype.clear;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWNlLWljb24tdGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvbm90aWNlLWljb24vIiwic291cmNlcyI6WyJub3RpY2UtaWNvbi10YWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7c0JBcUN2RCxFQUFFO3NCQUlFLElBQUksWUFBWSxFQUFvQjtxQkFFckMsSUFBSSxZQUFZLEVBQVU7Ozs7OztJQUUzQyx3Q0FBTzs7OztJQUFQLFVBQVEsSUFBZ0I7UUFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLG1CQUFtQjtZQUNqQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLO1lBQ3RCLElBQUksTUFBQTtTQUNMLEVBQUMsQ0FBQztLQUNKOzs7O0lBRUQsd0NBQU87OztJQUFQO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNsQzs7Z0JBbkRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixRQUFRLEVBQUUsaTNDQTJCVDtvQkFDRCxtQkFBbUIsRUFBRSxLQUFLO2lCQUMzQjs7O3lCQUVFLEtBQUs7dUJBRUwsS0FBSzt5QkFFTCxNQUFNO3dCQUVOLE1BQU07O2lDQTFDVDs7U0FtQ2Esc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5vdGljZUl0ZW0sIE5vdGljZUljb25TZWxlY3QgfSBmcm9tICcuL25vdGljZS1pY29uLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm90aWNlLWljb24tdGFiJyxcbiAgdGVtcGxhdGU6IGBcbiAgPGRpdiAqbmdJZj1cImRhdGEubGlzdD8ubGVuZ3RoID09PSAwOyBlbHNlIGxpc3RUcGxcIiBjbGFzcz1cIm5vdGljZS1pY29uX19ub3Rmb3VuZFwiPlxuICAgIDxpbWcgY2xhc3M9XCJub3RpY2UtaWNvbl9fbm90Zm91bmQtaW1nXCIgKm5nSWY9XCJkYXRhLmVtcHR5SW1hZ2VcIiBzcmM9XCJ7e2RhdGEuZW1wdHlJbWFnZX19XCIgYWx0PVwibm90IGZvdW5kXCIgLz5cbiAgICA8cD57e2RhdGEuZW1wdHlUZXh0IHx8IGxvY2FsZS5lbXB0eVRleHR9fTwvcD5cbiAgPC9kaXY+XG4gIDxuZy10ZW1wbGF0ZSAjbGlzdFRwbD5cbiAgICA8bnotbGlzdCBbbnpEYXRhU291cmNlXT1cImRhdGEubGlzdFwiIFtuelJlbmRlckl0ZW1dPVwiaXRlbVwiPlxuICAgICAgPG5nLXRlbXBsYXRlICNpdGVtIGxldC1pdGVtPlxuICAgICAgICA8bnotbGlzdC1pdGVtIChjbGljayk9XCJvbkNsaWNrKGl0ZW0pXCIgW25nQ2xhc3NdPVwieydub3RpY2UtaWNvbl9faXRlbS1yZWFkJzogaXRlbS5yZWFkfVwiPlxuICAgICAgICAgIDxuei1saXN0LWl0ZW0tbWV0YVxuICAgICAgICAgICAgW256VGl0bGVdPVwibnpUaXRsZVwiXG4gICAgICAgICAgICBbbnpEZXNjcmlwdGlvbl09XCJuekRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgIFtuekF2YXRhcl09XCJpdGVtLmF2YXRhclwiPlxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNuelRpdGxlPlxuICAgICAgICAgICAgICB7e2l0ZW0udGl0bGV9fVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm90aWNlLWljb25fX2l0ZW0tZXh0cmFcIiAqbmdJZj1cIml0ZW0uZXh0cmFcIj48bnotdGFnIFtuekNvbG9yXT1cIml0ZW0uY29sb3JcIj57e2l0ZW0uZXh0cmF9fTwvbnotdGFnPjwvZGl2PlxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjbnpEZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cIml0ZW0uZGVzY3JpcHRpb25cIiBjbGFzcz1cIm5vdGljZS1pY29uX19pdGVtLWRlc2NcIj57e2l0ZW0uZGVzY3JpcHRpb259fTwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiaXRlbS5kYXRldGltZVwiIGNsYXNzPVwibm90aWNlLWljb25fX2l0ZW0tdGltZVwiPnt7aXRlbS5kYXRldGltZX19PC9kaXY+XG4gICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgIDwvbnotbGlzdC1pdGVtLW1ldGE+XG4gICAgICAgIDwvbnotbGlzdC1pdGVtPlxuICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8L256LWxpc3Q+XG4gICAgPGRpdiBjbGFzcz1cIm5vdGljZS1pY29uX19jbGVhclwiIChjbGljayk9XCJvbkNsZWFyKClcIj57eyBkYXRhLmNsZWFyVGV4dCB8fCBsb2NhbGUuY2xlYXJUZXh0IH19PC9kaXY+XG4gIDwvbmctdGVtcGxhdGU+XG4gIGAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBOb3RpY2VJY29uVGFiQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgbG9jYWxlOiBhbnkgPSB7fTtcbiAgQElucHV0KClcbiAgZGF0YTogTm90aWNlSXRlbTtcbiAgQE91dHB1dCgpXG4gIHJlYWRvbmx5IHNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8Tm90aWNlSWNvblNlbGVjdD4oKTtcbiAgQE91dHB1dCgpXG4gIHJlYWRvbmx5IGNsZWFyID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgb25DbGljayhpdGVtOiBOb3RpY2VJdGVtKSB7XG4gICAgdGhpcy5zZWxlY3QuZW1pdCg8Tm90aWNlSWNvblNlbGVjdD57XG4gICAgICB0aXRsZTogdGhpcy5kYXRhLnRpdGxlLFxuICAgICAgaXRlbSxcbiAgICB9KTtcbiAgfVxuXG4gIG9uQ2xlYXIoKSB7XG4gICAgdGhpcy5jbGVhci5lbWl0KHRoaXMuZGF0YS50aXRsZSk7XG4gIH1cbn1cbiJdfQ==