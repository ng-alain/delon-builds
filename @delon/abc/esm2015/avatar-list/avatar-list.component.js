/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, Input, QueryList, } from '@angular/core';
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
                template: "<ul class=\"avatar-list__wrap\">\n  <li *ngFor=\"let i of items\" [class]=\"cls\">\n    <nz-tooltip *ngIf=\"i.tips\" [nzTitle]=\"i.tips\">\n      <nz-avatar nz-tooltip [nzSrc]=\"i.src\" [nzText]=\"i.text\" [nzIcon]=\"i.icon\" [nzSize]=\"avatarSize\"></nz-avatar>\n    </nz-tooltip>\n    <nz-avatar *ngIf=\"!i.tips\" [nzSrc]=\"i.src\" [nzText]=\"i.text\" [nzIcon]=\"i.icon\" [nzSize]=\"avatarSize\"></nz-avatar>\n  </li>\n  <li *ngIf=\"exceedCount > 0\" [class]=\"cls\">\n    <nz-avatar [nzSize]=\"avatarSize\" style=\"cursor: auto\" [ngStyle]=\"excessItemsStyle\" [nzText]=\"'+' + exceedCount\"></nz-avatar>\n  </li>\n</ul>",
                host: { '[class.avatar-list]': 'true' },
                changeDetection: ChangeDetectionStrategy.OnPush
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
    /** @type {?} */
    AvatarListComponent.prototype.inited;
    /** @type {?} */
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
    /** @type {?} */
    AvatarListComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9hdmF0YXItbGlzdC8iLCJzb3VyY2VzIjpbImF2YXRhci1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsS0FBSyxFQUVMLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRTFDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBUXZFLE1BQU0sT0FBTyxtQkFBbUI7Ozs7SUEyQjlCLFlBQW9CLEdBQXNCO1FBQXRCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBMUJsQyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBSXZCLFVBQUssR0FBOEIsRUFBRSxDQUFDO1FBQ3RDLGdCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBRWhCLFFBQUcsR0FBRyxFQUFFLENBQUM7UUFDVCxlQUFVLEdBQUcsRUFBRSxDQUFDO1FBZVEsY0FBUyxHQUFHLENBQUMsQ0FBQztJQUdRLENBQUM7Ozs7O0lBakIvQyxJQUNJLElBQUksQ0FBQyxLQUE2QztRQUNwRCxJQUFJLENBQUMsR0FBRyxHQUFHLG1CQUFtQixHQUFHLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUN2RixRQUFRLEtBQUssRUFBRTtZQUNiLEtBQUssT0FBTyxDQUFDO1lBQ2IsS0FBSyxPQUFPLENBQUM7WUFDYixLQUFLLFNBQVM7Z0JBQ1osSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7Z0JBQ3hCLE1BQU07WUFDUjtnQkFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQztnQkFDMUIsTUFBTTtTQUNUO0lBQ0gsQ0FBQzs7OztJQU1PLEdBQUc7Y0FDSCxFQUFFLE1BQU0sRUFBRSxHQUFHLElBQUk7O2NBQ2pCLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU07O2NBQy9ELGFBQWEsR0FBRyxNQUFNLENBQUMsTUFBTTs7Y0FDN0IsU0FBUyxHQUFHLFNBQVMsR0FBRyxDQUFDLElBQUksU0FBUyxJQUFJLGFBQWEsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxTQUFTO1FBQ3pGLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNYLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQ1o7SUFDSCxDQUFDOzs7WUF0REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QiwybkJBQTJDO2dCQUMzQyxJQUFJLEVBQUUsRUFBRSxxQkFBcUIsRUFBRSxNQUFNLEVBQUU7Z0JBQ3ZDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7O1lBaEJDLGlCQUFpQjs7O3FCQW1CaEIsZUFBZSxTQUFDLHVCQUF1QixFQUFFLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRTttQkFRL0QsS0FBSzt3QkFjTCxLQUFLOytCQUNMLEtBQUs7O0FBRGtCO0lBQWQsV0FBVyxFQUFFOztzREFBZTs7O0lBdkJ0QyxxQ0FBdUI7O0lBQ3ZCLHFDQUNxRDs7SUFFckQsb0NBQXNDOztJQUN0QywwQ0FBZ0I7O0lBRWhCLGtDQUFTOztJQUNULHlDQUFnQjs7SUFlaEIsd0NBQXNDOztJQUN0QywrQ0FBOEI7O0lBRWxCLGtDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIFF1ZXJ5TGlzdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbnB1dE51bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuaW1wb3J0IHsgQXZhdGFyTGlzdEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2F2YXRhci1saXN0LWl0ZW0uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXZhdGFyLWxpc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vYXZhdGFyLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7ICdbY2xhc3MuYXZhdGFyLWxpc3RdJzogJ3RydWUnIH0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBBdmF0YXJMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcbiAgcHJpdmF0ZSBpbml0ZWQgPSBmYWxzZTtcbiAgQENvbnRlbnRDaGlsZHJlbihBdmF0YXJMaXN0SXRlbUNvbXBvbmVudCwgeyBkZXNjZW5kYW50czogZmFsc2UgfSlcbiAgcHJpdmF0ZSBfaXRlbXMgITogUXVlcnlMaXN0PEF2YXRhckxpc3RJdGVtQ29tcG9uZW50PjtcblxuICBpdGVtczogQXZhdGFyTGlzdEl0ZW1Db21wb25lbnRbXSA9IFtdO1xuICBleGNlZWRDb3VudCA9IDA7XG5cbiAgY2xzID0gJyc7XG4gIGF2YXRhclNpemUgPSAnJztcbiAgQElucHV0KClcbiAgc2V0IHNpemUodmFsdWU6ICdsYXJnZScgfCAnc21hbGwnIHwgJ21pbmknIHwgJ2RlZmF1bHQnKSB7XG4gICAgdGhpcy5jbHMgPSAnYXZhdGFyLWxpc3RfX2l0ZW0nICsgKHZhbHVlID09PSAnZGVmYXVsdCcgPyAnJyA6IGAgYXZhdGFyLWxpc3RfXyR7dmFsdWV9YCk7XG4gICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgY2FzZSAnbGFyZ2UnOlxuICAgICAgY2FzZSAnc21hbGwnOlxuICAgICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgICAgIHRoaXMuYXZhdGFyU2l6ZSA9IHZhbHVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMuYXZhdGFyU2l6ZSA9ICdzbWFsbCc7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBtYXhMZW5ndGggPSAwO1xuICBASW5wdXQoKSBleGNlc3NJdGVtc1N0eWxlOiB7fTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxuXG4gIHByaXZhdGUgZ2VuKCkge1xuICAgIGNvbnN0IHsgX2l0ZW1zIH0gPSB0aGlzO1xuICAgIGNvbnN0IG1heExlbmd0aCA9IHRoaXMubWF4TGVuZ3RoID4gMCA/IHRoaXMubWF4TGVuZ3RoIDogX2l0ZW1zLmxlbmd0aDtcbiAgICBjb25zdCBudW1PZkNoaWxkcmVuID0gX2l0ZW1zLmxlbmd0aDtcbiAgICBjb25zdCBudW1Ub1Nob3cgPSBtYXhMZW5ndGggPiAwICYmIG1heExlbmd0aCA+PSBudW1PZkNoaWxkcmVuID8gbnVtT2ZDaGlsZHJlbiA6IG1heExlbmd0aDtcbiAgICB0aGlzLml0ZW1zID0gX2l0ZW1zLnRvQXJyYXkoKS5zbGljZSgwLCBudW1Ub1Nob3cpO1xuICAgIHRoaXMuZXhjZWVkQ291bnQgPSBudW1Ub1Nob3cgPCBudW1PZkNoaWxkcmVuID8gbnVtT2ZDaGlsZHJlbiAtIG1heExlbmd0aCA6IDA7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuZ2VuKCk7XG4gICAgdGhpcy5pbml0ZWQgPSB0cnVlO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgaWYgKHRoaXMuaW5pdGVkKSB7XG4gICAgICB0aGlzLmdlbigpO1xuICAgIH1cbiAgfVxufVxuIl19