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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWNlLWljb24tdGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvbm90aWNlLWljb24vIiwic291cmNlcyI6WyJub3RpY2UtaWNvbi10YWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7c0JBcUN2RCxFQUFFO3NCQUlQLElBQUksWUFBWSxFQUFvQjtxQkFFckMsSUFBSSxZQUFZLEVBQVU7Ozs7OztJQUVsQyx3Q0FBTzs7OztJQUFQLFVBQVEsSUFBZ0I7UUFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLG1CQUFtQjtZQUNqQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLO1lBQ3RCLElBQUksTUFBQTtTQUNMLEVBQUMsQ0FBQztLQUNKOzs7O0lBRUQsd0NBQU87OztJQUFQO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNsQzs7Z0JBbkRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixRQUFRLEVBQUUsaTNDQTJCVDtvQkFDRCxtQkFBbUIsRUFBRSxLQUFLO2lCQUMzQjs7O3lCQUVFLEtBQUs7dUJBRUwsS0FBSzt5QkFFTCxNQUFNO3dCQUVOLE1BQU07O2lDQTFDVDs7U0FtQ2Esc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTm90aWNlSXRlbSwgTm90aWNlSWNvblNlbGVjdCB9IGZyb20gJy4vbm90aWNlLWljb24udHlwZXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdub3RpY2UtaWNvbi10YWInLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPGRpdiAqbmdJZj1cImRhdGEubGlzdD8ubGVuZ3RoID09PSAwOyBlbHNlIGxpc3RUcGxcIiBjbGFzcz1cIm5vdGljZS1pY29uX19ub3Rmb3VuZFwiPlxyXG4gICAgPGltZyBjbGFzcz1cIm5vdGljZS1pY29uX19ub3Rmb3VuZC1pbWdcIiAqbmdJZj1cImRhdGEuZW1wdHlJbWFnZVwiIHNyYz1cInt7ZGF0YS5lbXB0eUltYWdlfX1cIiBhbHQ9XCJub3QgZm91bmRcIiAvPlxyXG4gICAgPHA+e3tkYXRhLmVtcHR5VGV4dCB8fCBsb2NhbGUuZW1wdHlUZXh0fX08L3A+XHJcbiAgPC9kaXY+XHJcbiAgPG5nLXRlbXBsYXRlICNsaXN0VHBsPlxyXG4gICAgPG56LWxpc3QgW256RGF0YVNvdXJjZV09XCJkYXRhLmxpc3RcIiBbbnpSZW5kZXJJdGVtXT1cIml0ZW1cIj5cclxuICAgICAgPG5nLXRlbXBsYXRlICNpdGVtIGxldC1pdGVtPlxyXG4gICAgICAgIDxuei1saXN0LWl0ZW0gKGNsaWNrKT1cIm9uQ2xpY2soaXRlbSlcIiBbbmdDbGFzc109XCJ7J25vdGljZS1pY29uX19pdGVtLXJlYWQnOiBpdGVtLnJlYWR9XCI+XHJcbiAgICAgICAgICA8bnotbGlzdC1pdGVtLW1ldGFcclxuICAgICAgICAgICAgW256VGl0bGVdPVwibnpUaXRsZVwiXHJcbiAgICAgICAgICAgIFtuekRlc2NyaXB0aW9uXT1cIm56RGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICBbbnpBdmF0YXJdPVwiaXRlbS5hdmF0YXJcIj5cclxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNuelRpdGxlPlxyXG4gICAgICAgICAgICAgIHt7aXRlbS50aXRsZX19XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdGljZS1pY29uX19pdGVtLWV4dHJhXCIgKm5nSWY9XCJpdGVtLmV4dHJhXCI+PG56LXRhZyBbbnpDb2xvcl09XCJpdGVtLmNvbG9yXCI+e3tpdGVtLmV4dHJhfX08L256LXRhZz48L2Rpdj5cclxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNuekRlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJpdGVtLmRlc2NyaXB0aW9uXCIgY2xhc3M9XCJub3RpY2UtaWNvbl9faXRlbS1kZXNjXCI+e3tpdGVtLmRlc2NyaXB0aW9ufX08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiaXRlbS5kYXRldGltZVwiIGNsYXNzPVwibm90aWNlLWljb25fX2l0ZW0tdGltZVwiPnt7aXRlbS5kYXRldGltZX19PC9kaXY+XHJcbiAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICA8L256LWxpc3QtaXRlbS1tZXRhPlxyXG4gICAgICAgIDwvbnotbGlzdC1pdGVtPlxyXG4gICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgPC9uei1saXN0PlxyXG4gICAgPGRpdiBjbGFzcz1cIm5vdGljZS1pY29uX19jbGVhclwiIChjbGljayk9XCJvbkNsZWFyKClcIj57eyBkYXRhLmNsZWFyVGV4dCB8fCBsb2NhbGUuY2xlYXJUZXh0IH19PC9kaXY+XHJcbiAgPC9uZy10ZW1wbGF0ZT5cclxuICBgLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTm90aWNlSWNvblRhYkNvbXBvbmVudCB7XHJcbiAgQElucHV0KClcclxuICBsb2NhbGU6IGFueSA9IHt9O1xyXG4gIEBJbnB1dCgpXHJcbiAgZGF0YTogTm90aWNlSXRlbTtcclxuICBAT3V0cHV0KClcclxuICBzZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPE5vdGljZUljb25TZWxlY3Q+KCk7XHJcbiAgQE91dHB1dCgpXHJcbiAgY2xlYXIgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuXHJcbiAgb25DbGljayhpdGVtOiBOb3RpY2VJdGVtKSB7XHJcbiAgICB0aGlzLnNlbGVjdC5lbWl0KDxOb3RpY2VJY29uU2VsZWN0PntcclxuICAgICAgdGl0bGU6IHRoaXMuZGF0YS50aXRsZSxcclxuICAgICAgaXRlbSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25DbGVhcigpIHtcclxuICAgIHRoaXMuY2xlYXIuZW1pdCh0aGlzLmRhdGEudGl0bGUpO1xyXG4gIH1cclxufVxyXG4iXX0=