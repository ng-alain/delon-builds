/**
 * @fileoverview added by tsickle
 * Generated from: avatar-list.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, Input, QueryList, ViewEncapsulation, } from '@angular/core';
import { InputNumber } from '@delon/util';
import { AvatarListItemComponent } from './avatar-list-item.component';
export class AvatarListComponent {
    /**
     * @param {?} cdr
     */
    constructor(cdr) {
        this.cdr = cdr;
        this.inited = false;
        this.items = [];
        this.exceedCount = 0;
        this.cls = '';
        this.avatarSize = '';
        this.maxLength = 0;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set size(value) {
        this.cls = 'avatar-list__item' + (value === 'default' ? '' : ` avatar-list__${value}`);
        switch (value) {
            case 'large':
            case 'small':
            case 'default':
                this.avatarSize = value;
                break;
            default:
                this.avatarSize = 'small';
                break;
        }
    }
    /**
     * @private
     * @return {?}
     */
    gen() {
        const { _items } = this;
        /** @type {?} */
        const maxLength = this.maxLength > 0 ? this.maxLength : _items.length;
        /** @type {?} */
        const numOfChildren = _items.length;
        /** @type {?} */
        const numToShow = maxLength > 0 && maxLength >= numOfChildren ? numOfChildren : maxLength;
        this.items = _items.toArray().slice(0, numToShow);
        this.exceedCount = numToShow < numOfChildren ? numOfChildren - maxLength : 0;
        this.cdr.detectChanges();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.gen();
        this.inited = true;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this.inited) {
            this.gen();
        }
    }
}
AvatarListComponent.decorators = [
    { type: Component, args: [{
                selector: 'avatar-list',
                exportAs: 'avatarList',
                template: "<ul class=\"avatar-list__wrap\">\n  <li *ngFor=\"let i of items\"\n      [class]=\"cls\">\n    <nz-avatar *ngIf=\"i.tips\"\n                nz-tooltip [nzTooltipTitle]=\"i.tips\"\n                [nzSrc]=\"i.src\"\n                [nzText]=\"i.text\"\n                [nzIcon]=\"i.icon\"\n                [nzSize]=\"avatarSize\"></nz-avatar>\n    <nz-avatar *ngIf=\"!i.tips\"\n               [nzSrc]=\"i.src\"\n               [nzText]=\"i.text\"\n               [nzIcon]=\"i.icon\"\n               [nzSize]=\"avatarSize\"></nz-avatar>\n  </li>\n  <li *ngIf=\"exceedCount > 0\"\n      [class]=\"cls\">\n    <nz-avatar [nzSize]=\"avatarSize\"\n               style=\"cursor: auto\"\n               [ngStyle]=\"excessItemsStyle\"\n               [nzText]=\"'+' + exceedCount\"></nz-avatar>\n  </li>\n</ul>\n",
                host: { '[class.avatar-list]': 'true' },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
AvatarListComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
AvatarListComponent.propDecorators = {
    _items: [{ type: ContentChildren, args: [AvatarListItemComponent, { descendants: false },] }],
    size: [{ type: Input }],
    maxLength: [{ type: Input }],
    excessItemsStyle: [{ type: Input }]
};
tslib_1.__decorate([
    InputNumber(),
    tslib_1.__metadata("design:type", Object)
], AvatarListComponent.prototype, "maxLength", void 0);
if (false) {
    /**
     * @type {?}
     * @private
     */
    AvatarListComponent.prototype.inited;
    /**
     * @type {?}
     * @private
     */
    AvatarListComponent.prototype._items;
    /** @type {?} */
    AvatarListComponent.prototype.items;
    /** @type {?} */
    AvatarListComponent.prototype.exceedCount;
    /** @type {?} */
    AvatarListComponent.prototype.cls;
    /** @type {?} */
    AvatarListComponent.prototype.avatarSize;
    /** @type {?} */
    AvatarListComponent.prototype.maxLength;
    /** @type {?} */
    AvatarListComponent.prototype.excessItemsStyle;
    /**
     * @type {?}
     * @private
     */
    AvatarListComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9hdmF0YXItbGlzdC8iLCJzb3VyY2VzIjpbImF2YXRhci1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsZUFBZSxFQUNmLEtBQUssRUFFTCxTQUFTLEVBQ1QsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFMUMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFXdkUsTUFBTSxPQUFPLG1CQUFtQjs7OztJQTJCOUIsWUFBb0IsR0FBc0I7UUFBdEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUExQmxDLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFJdkIsVUFBSyxHQUE4QixFQUFFLENBQUM7UUFDdEMsZ0JBQVcsR0FBRyxDQUFDLENBQUM7UUFFaEIsUUFBRyxHQUFHLEVBQUUsQ0FBQztRQUNULGVBQVUsR0FBRyxFQUFFLENBQUM7UUFlUSxjQUFTLEdBQUcsQ0FBQyxDQUFDO0lBR08sQ0FBQzs7Ozs7SUFqQjlDLElBQ0ksSUFBSSxDQUFDLEtBQTZDO1FBQ3BELElBQUksQ0FBQyxHQUFHLEdBQUcsbUJBQW1CLEdBQUcsQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZGLFFBQVEsS0FBSyxFQUFFO1lBQ2IsS0FBSyxPQUFPLENBQUM7WUFDYixLQUFLLE9BQU8sQ0FBQztZQUNiLEtBQUssU0FBUztnQkFDWixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztnQkFDeEIsTUFBTTtZQUNSO2dCQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDO2dCQUMxQixNQUFNO1NBQ1Q7SUFDSCxDQUFDOzs7OztJQU1PLEdBQUc7Y0FDSCxFQUFFLE1BQU0sRUFBRSxHQUFHLElBQUk7O2NBQ2pCLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU07O2NBQy9ELGFBQWEsR0FBRyxNQUFNLENBQUMsTUFBTTs7Y0FDN0IsU0FBUyxHQUFHLFNBQVMsR0FBRyxDQUFDLElBQUksU0FBUyxJQUFJLGFBQWEsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxTQUFTO1FBQ3pGLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNYLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQ1o7SUFDSCxDQUFDOzs7WUF6REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUUsWUFBWTtnQkFDdEIsZ3pCQUEyQztnQkFDM0MsSUFBSSxFQUFFLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxFQUFFO2dCQUN2QyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7Ozs7WUFwQkMsaUJBQWlCOzs7cUJBdUJoQixlQUFlLFNBQUMsdUJBQXVCLEVBQUUsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFO21CQVEvRCxLQUFLO3dCQWNMLEtBQUs7K0JBQ0wsS0FBSzs7QUFEa0I7SUFBZCxXQUFXLEVBQUU7O3NEQUFlOzs7Ozs7SUF2QnRDLHFDQUF1Qjs7Ozs7SUFDdkIscUNBQ29EOztJQUVwRCxvQ0FBc0M7O0lBQ3RDLDBDQUFnQjs7SUFFaEIsa0NBQVM7O0lBQ1QseUNBQWdCOztJQWVoQix3Q0FBc0M7O0lBQ3RDLCtDQUE4Qjs7Ozs7SUFFbEIsa0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgUXVlcnlMaXN0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbnB1dE51bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuaW1wb3J0IHsgQXZhdGFyTGlzdEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2F2YXRhci1saXN0LWl0ZW0uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXZhdGFyLWxpc3QnLFxuICBleHBvcnRBczogJ2F2YXRhckxpc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vYXZhdGFyLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7ICdbY2xhc3MuYXZhdGFyLWxpc3RdJzogJ3RydWUnIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgQXZhdGFyTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB7XG4gIHByaXZhdGUgaW5pdGVkID0gZmFsc2U7XG4gIEBDb250ZW50Q2hpbGRyZW4oQXZhdGFyTGlzdEl0ZW1Db21wb25lbnQsIHsgZGVzY2VuZGFudHM6IGZhbHNlIH0pXG4gIHByaXZhdGUgX2l0ZW1zITogUXVlcnlMaXN0PEF2YXRhckxpc3RJdGVtQ29tcG9uZW50PjtcblxuICBpdGVtczogQXZhdGFyTGlzdEl0ZW1Db21wb25lbnRbXSA9IFtdO1xuICBleGNlZWRDb3VudCA9IDA7XG5cbiAgY2xzID0gJyc7XG4gIGF2YXRhclNpemUgPSAnJztcbiAgQElucHV0KClcbiAgc2V0IHNpemUodmFsdWU6ICdsYXJnZScgfCAnc21hbGwnIHwgJ21pbmknIHwgJ2RlZmF1bHQnKSB7XG4gICAgdGhpcy5jbHMgPSAnYXZhdGFyLWxpc3RfX2l0ZW0nICsgKHZhbHVlID09PSAnZGVmYXVsdCcgPyAnJyA6IGAgYXZhdGFyLWxpc3RfXyR7dmFsdWV9YCk7XG4gICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgY2FzZSAnbGFyZ2UnOlxuICAgICAgY2FzZSAnc21hbGwnOlxuICAgICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgICAgIHRoaXMuYXZhdGFyU2l6ZSA9IHZhbHVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMuYXZhdGFyU2l6ZSA9ICdzbWFsbCc7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBtYXhMZW5ndGggPSAwO1xuICBASW5wdXQoKSBleGNlc3NJdGVtc1N0eWxlOiB7fTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgcHJpdmF0ZSBnZW4oKSB7XG4gICAgY29uc3QgeyBfaXRlbXMgfSA9IHRoaXM7XG4gICAgY29uc3QgbWF4TGVuZ3RoID0gdGhpcy5tYXhMZW5ndGggPiAwID8gdGhpcy5tYXhMZW5ndGggOiBfaXRlbXMubGVuZ3RoO1xuICAgIGNvbnN0IG51bU9mQ2hpbGRyZW4gPSBfaXRlbXMubGVuZ3RoO1xuICAgIGNvbnN0IG51bVRvU2hvdyA9IG1heExlbmd0aCA+IDAgJiYgbWF4TGVuZ3RoID49IG51bU9mQ2hpbGRyZW4gPyBudW1PZkNoaWxkcmVuIDogbWF4TGVuZ3RoO1xuICAgIHRoaXMuaXRlbXMgPSBfaXRlbXMudG9BcnJheSgpLnNsaWNlKDAsIG51bVRvU2hvdyk7XG4gICAgdGhpcy5leGNlZWRDb3VudCA9IG51bVRvU2hvdyA8IG51bU9mQ2hpbGRyZW4gPyBudW1PZkNoaWxkcmVuIC0gbWF4TGVuZ3RoIDogMDtcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5nZW4oKTtcbiAgICB0aGlzLmluaXRlZCA9IHRydWU7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICBpZiAodGhpcy5pbml0ZWQpIHtcbiAgICAgIHRoaXMuZ2VuKCk7XG4gICAgfVxuICB9XG59XG4iXX0=