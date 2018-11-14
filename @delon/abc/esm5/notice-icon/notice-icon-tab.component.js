/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
        this.select.emit((/** @type {?} */ ({
            title: this.data.title,
            item: item,
        })));
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
                    template: "<div *ngIf=\"data.list?.length === 0; else listTpl\" class=\"notice-icon__notfound\">\n  <img class=\"notice-icon__notfound-img\" *ngIf=\"data.emptyImage\" src=\"{{data.emptyImage}}\" alt=\"not found\" />\n  <p>{{data.emptyText || locale.emptyText}}</p>\n</div>\n<ng-template #listTpl>\n  <nz-list [nzDataSource]=\"data.list\" [nzRenderItem]=\"item\">\n    <ng-template #item let-item>\n      <nz-list-item (click)=\"onClick(item)\" [ngClass]=\"{'notice-icon__item-read': item.read}\">\n        <nz-list-item-meta [nzTitle]=\"nzTitle\" [nzDescription]=\"nzDescription\" [nzAvatar]=\"item.avatar\">\n          <ng-template #nzTitle>\n            {{item.title}}\n            <div class=\"notice-icon__item-extra\" *ngIf=\"item.extra\">\n              <nz-tag [nzColor]=\"item.color\">{{item.extra}}</nz-tag>\n            </div>\n          </ng-template>\n          <ng-template #nzDescription>\n            <div *ngIf=\"item.description\" class=\"notice-icon__item-desc\">{{item.description}}</div>\n            <div *ngIf=\"item.datetime\" class=\"notice-icon__item-time\">{{item.datetime}}</div>\n          </ng-template>\n        </nz-list-item-meta>\n      </nz-list-item>\n    </ng-template>\n  </nz-list>\n  <div class=\"notice-icon__clear\" (click)=\"onClear()\">{{ data.clearText || locale.clearText }}</div>\n</ng-template>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWNlLWljb24tdGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvbm90aWNlLWljb24vIiwic291cmNlcyI6WyJub3RpY2UtaWNvbi10YWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3ZFO0lBQUE7UUFPRSxXQUFNLEdBQVEsRUFBRSxDQUFDO1FBSVIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFvQixDQUFDO1FBRTlDLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0lBWTlDLENBQUM7Ozs7O0lBVkMsd0NBQU87Ozs7SUFBUCxVQUFRLElBQWdCO1FBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFrQjtZQUNqQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLO1lBQ3RCLElBQUksTUFBQTtTQUNMLEVBQUEsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELHdDQUFPOzs7SUFBUDtRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7Z0JBeEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixnMENBQStDO29CQUMvQyxtQkFBbUIsRUFBRSxLQUFLO2lCQUMzQjs7O3lCQUVFLEtBQUs7dUJBRUwsS0FBSzt5QkFFTCxNQUFNO3dCQUVOLE1BQU07O0lBYVQsNkJBQUM7Q0FBQSxBQXpCRCxJQXlCQztTQXBCWSxzQkFBc0I7OztJQUNqQyx3Q0FDaUI7O0lBQ2pCLHNDQUNpQjs7SUFDakIsd0NBQ3VEOztJQUN2RCx1Q0FDNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTm90aWNlSXRlbSwgTm90aWNlSWNvblNlbGVjdCB9IGZyb20gJy4vbm90aWNlLWljb24udHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3RpY2UtaWNvbi10YWInLFxuICB0ZW1wbGF0ZVVybDogJy4vbm90aWNlLWljb24tdGFiLmNvbXBvbmVudC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIE5vdGljZUljb25UYWJDb21wb25lbnQge1xuICBASW5wdXQoKVxuICBsb2NhbGU6IGFueSA9IHt9O1xuICBASW5wdXQoKVxuICBkYXRhOiBOb3RpY2VJdGVtO1xuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgc2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxOb3RpY2VJY29uU2VsZWN0PigpO1xuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgY2xlYXIgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICBvbkNsaWNrKGl0ZW06IE5vdGljZUl0ZW0pIHtcbiAgICB0aGlzLnNlbGVjdC5lbWl0KDxOb3RpY2VJY29uU2VsZWN0PntcbiAgICAgIHRpdGxlOiB0aGlzLmRhdGEudGl0bGUsXG4gICAgICBpdGVtLFxuICAgIH0pO1xuICB9XG5cbiAgb25DbGVhcigpIHtcbiAgICB0aGlzLmNsZWFyLmVtaXQodGhpcy5kYXRhLnRpdGxlKTtcbiAgfVxufVxuIl19