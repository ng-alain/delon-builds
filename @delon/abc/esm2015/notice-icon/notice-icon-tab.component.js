/**
 * @fileoverview added by tsickle
 * Generated from: notice-icon-tab.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
export class NoticeIconTabComponent {
    constructor() {
        this.locale = {};
        // tslint:disable-next-line:no-output-native
        this.select = new EventEmitter();
        this.clear = new EventEmitter();
    }
    /**
     * @param {?} item
     * @return {?}
     */
    onClick(item) {
        this.select.emit({ title: this.data.title, item });
    }
    /**
     * @return {?}
     */
    onClear() {
        this.clear.emit(this.data.title);
    }
}
NoticeIconTabComponent.decorators = [
    { type: Component, args: [{
                selector: 'notice-icon-tab',
                exportAs: 'noticeIconTab',
                template: "<div *ngIf=\"data.list?.length === 0; else listTpl\" class=\"notice-icon__notfound\">\n  <img class=\"notice-icon__notfound-img\" *ngIf=\"data.emptyImage\" src=\"{{ data.emptyImage }}\" alt=\"not found\" />\n  <p>{{ data.emptyText || locale.emptyText }}</p>\n</div>\n<ng-template #listTpl>\n  <nz-list [nzDataSource]=\"data.list\" [nzRenderItem]=\"item\">\n    <ng-template #item let-item>\n      <nz-list-item (click)=\"onClick(item)\" [ngClass]=\"{ 'notice-icon__item-read': item.read }\">\n        <nz-list-item-meta [nzTitle]=\"nzTitle\" [nzDescription]=\"nzDescription\" [nzAvatar]=\"item.avatar\">\n          <ng-template #nzTitle>\n            {{ item.title }}\n            <div class=\"notice-icon__item-extra\" *ngIf=\"item.extra\">\n              <nz-tag [nzColor]=\"item.color\">{{ item.extra }}</nz-tag>\n            </div>\n          </ng-template>\n          <ng-template #nzDescription>\n            <div *ngIf=\"item.description\" class=\"notice-icon__item-desc\">{{ item.description }}</div>\n            <div *ngIf=\"item.datetime\" class=\"notice-icon__item-time\">{{ item.datetime }}</div>\n          </ng-template>\n        </nz-list-item-meta>\n      </nz-list-item>\n    </ng-template>\n  </nz-list>\n  <div class=\"notice-icon__clear\" (click)=\"onClear()\">{{ data.clearText || locale.clearText }}</div>\n</ng-template>\n",
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None
            }] }
];
NoticeIconTabComponent.propDecorators = {
    locale: [{ type: Input }],
    data: [{ type: Input }],
    select: [{ type: Output }],
    clear: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWNlLWljb24tdGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9ub3RpY2UtaWNvbi9ub3RpY2UtaWNvbi10YWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVcxRixNQUFNLE9BQU8sc0JBQXNCO0lBUG5DO1FBUVcsV0FBTSxHQUFlLEVBQUUsQ0FBQzs7UUFHZCxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQW9CLENBQUM7UUFDOUMsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7SUFTeEQsQ0FBQzs7Ozs7SUFQQyxPQUFPLENBQUMsSUFBZ0I7UUFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNyRCxDQUFDOzs7O0lBRUQsT0FBTztRQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7O1lBcEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixRQUFRLEVBQUUsZUFBZTtnQkFDekIsODBDQUErQztnQkFDL0MsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7OztxQkFFRSxLQUFLO21CQUNMLEtBQUs7cUJBRUwsTUFBTTtvQkFDTixNQUFNOzs7O0lBSlAsd0NBQWlDOztJQUNqQyxzQ0FBMEI7O0lBRTFCLHdDQUFpRTs7SUFDakUsdUNBQXNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IE5vdGljZUljb25TZWxlY3QsIE5vdGljZUl0ZW0gfSBmcm9tICcuL25vdGljZS1pY29uLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm90aWNlLWljb24tdGFiJyxcbiAgZXhwb3J0QXM6ICdub3RpY2VJY29uVGFiJyxcbiAgdGVtcGxhdGVVcmw6ICcuL25vdGljZS1pY29uLXRhYi5jb21wb25lbnQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBOb3RpY2VJY29uVGFiQ29tcG9uZW50IHtcbiAgQElucHV0KCkgbG9jYWxlOiBMb2NhbGVEYXRhID0ge307XG4gIEBJbnB1dCgpIGRhdGE6IE5vdGljZUl0ZW07XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1vdXRwdXQtbmF0aXZlXG4gIEBPdXRwdXQoKSByZWFkb25seSBzZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPE5vdGljZUljb25TZWxlY3Q+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBjbGVhciA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIG9uQ2xpY2soaXRlbTogTm90aWNlSXRlbSkge1xuICAgIHRoaXMuc2VsZWN0LmVtaXQoeyB0aXRsZTogdGhpcy5kYXRhLnRpdGxlLCBpdGVtIH0pO1xuICB9XG5cbiAgb25DbGVhcigpIHtcbiAgICB0aGlzLmNsZWFyLmVtaXQodGhpcy5kYXRhLnRpdGxlKTtcbiAgfVxufVxuIl19