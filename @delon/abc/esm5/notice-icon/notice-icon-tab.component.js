/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
var NoticeIconTabComponent = /** @class */ (function () {
    function NoticeIconTabComponent() {
        // tslint:disable-next-line:no-any
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
                    changeDetection: ChangeDetectionStrategy.OnPush
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWNlLWljb24tdGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvbm90aWNlLWljb24vIiwic291cmNlcyI6WyJub3RpY2UtaWNvbi10YWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUd2QjtJQUFBOztRQU9XLFdBQU0sR0FBUSxFQUFFLENBQUM7UUFFUCxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQW9CLENBQUM7UUFDOUMsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7SUFZeEQsQ0FBQzs7Ozs7SUFWQyx3Q0FBTzs7OztJQUFQLFVBQVEsSUFBZ0I7UUFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQUE7WUFDZixLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLO1lBQ3RCLElBQUksTUFBQTtTQUNMLEVBQW9CLENBQUMsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsd0NBQU87OztJQUFQO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDOztnQkFyQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLGcwQ0FBK0M7b0JBQy9DLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7O3lCQUdFLEtBQUs7dUJBQ0wsS0FBSzt5QkFDTCxNQUFNO3dCQUNOLE1BQU07O0lBWVQsNkJBQUM7Q0FBQSxBQXRCRCxJQXNCQztTQWpCWSxzQkFBc0I7OztJQUVqQyx3Q0FBMEI7O0lBQzFCLHNDQUEwQjs7SUFDMUIsd0NBQWlFOztJQUNqRSx1Q0FBc0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPdXRwdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTm90aWNlSWNvblNlbGVjdCwgTm90aWNlSXRlbSB9IGZyb20gJy4vbm90aWNlLWljb24udHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3RpY2UtaWNvbi10YWInLFxuICB0ZW1wbGF0ZVVybDogJy4vbm90aWNlLWljb24tdGFiLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5vdGljZUljb25UYWJDb21wb25lbnQge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIEBJbnB1dCgpIGxvY2FsZTogYW55ID0ge307XG4gIEBJbnB1dCgpIGRhdGE6IE5vdGljZUl0ZW07XG4gIEBPdXRwdXQoKSByZWFkb25seSBzZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPE5vdGljZUljb25TZWxlY3Q+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBjbGVhciA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIG9uQ2xpY2soaXRlbTogTm90aWNlSXRlbSkge1xuICAgIHRoaXMuc2VsZWN0LmVtaXQoe1xuICAgICAgdGl0bGU6IHRoaXMuZGF0YS50aXRsZSxcbiAgICAgIGl0ZW0sXG4gICAgfSBhcyBOb3RpY2VJY29uU2VsZWN0KTtcbiAgfVxuXG4gIG9uQ2xlYXIoKSB7XG4gICAgdGhpcy5jbGVhci5lbWl0KHRoaXMuZGF0YS50aXRsZSk7XG4gIH1cbn1cbiJdfQ==