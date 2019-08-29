/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9hdmF0YXItbGlzdC8iLCJzb3VyY2VzIjpbImF2YXRhci1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsS0FBSyxFQUVMLFNBQVMsRUFDVCxpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUUxQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQVd2RSxNQUFNLE9BQU8sbUJBQW1COzs7O0lBMkI5QixZQUFvQixHQUFzQjtRQUF0QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQTFCbEMsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUl2QixVQUFLLEdBQThCLEVBQUUsQ0FBQztRQUN0QyxnQkFBVyxHQUFHLENBQUMsQ0FBQztRQUVoQixRQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ1QsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQWVRLGNBQVMsR0FBRyxDQUFDLENBQUM7SUFHTyxDQUFDOzs7OztJQWpCOUMsSUFDSSxJQUFJLENBQUMsS0FBNkM7UUFDcEQsSUFBSSxDQUFDLEdBQUcsR0FBRyxtQkFBbUIsR0FBRyxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDdkYsUUFBUSxLQUFLLEVBQUU7WUFDYixLQUFLLE9BQU8sQ0FBQztZQUNiLEtBQUssT0FBTyxDQUFDO1lBQ2IsS0FBSyxTQUFTO2dCQUNaLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO2dCQUN4QixNQUFNO1lBQ1I7Z0JBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUM7Z0JBQzFCLE1BQU07U0FDVDtJQUNILENBQUM7Ozs7O0lBTU8sR0FBRztjQUNILEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSTs7Y0FDakIsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTTs7Y0FDL0QsYUFBYSxHQUFHLE1BQU0sQ0FBQyxNQUFNOztjQUM3QixTQUFTLEdBQUcsU0FBUyxHQUFHLENBQUMsSUFBSSxTQUFTLElBQUksYUFBYSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLFNBQVM7UUFDekYsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3RSxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ1gsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDWjtJQUNILENBQUM7OztZQXpERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFFBQVEsRUFBRSxZQUFZO2dCQUN0QixnekJBQTJDO2dCQUMzQyxJQUFJLEVBQUUsRUFBRSxxQkFBcUIsRUFBRSxNQUFNLEVBQUU7Z0JBQ3ZDLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0Qzs7OztZQXBCQyxpQkFBaUI7OztxQkF1QmhCLGVBQWUsU0FBQyx1QkFBdUIsRUFBRSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUU7bUJBUS9ELEtBQUs7d0JBY0wsS0FBSzsrQkFDTCxLQUFLOztBQURrQjtJQUFkLFdBQVcsRUFBRTs7c0RBQWU7Ozs7OztJQXZCdEMscUNBQXVCOzs7OztJQUN2QixxQ0FDb0Q7O0lBRXBELG9DQUFzQzs7SUFDdEMsMENBQWdCOztJQUVoQixrQ0FBUzs7SUFDVCx5Q0FBZ0I7O0lBZWhCLHdDQUFzQzs7SUFDdEMsK0NBQThCOzs7OztJQUVsQixrQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBRdWVyeUxpc3QsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElucHV0TnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5pbXBvcnQgeyBBdmF0YXJMaXN0SXRlbUNvbXBvbmVudCB9IGZyb20gJy4vYXZhdGFyLWxpc3QtaXRlbS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhdmF0YXItbGlzdCcsXG4gIGV4cG9ydEFzOiAnYXZhdGFyTGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9hdmF0YXItbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHsgJ1tjbGFzcy5hdmF0YXItbGlzdF0nOiAndHJ1ZScgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBBdmF0YXJMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcbiAgcHJpdmF0ZSBpbml0ZWQgPSBmYWxzZTtcbiAgQENvbnRlbnRDaGlsZHJlbihBdmF0YXJMaXN0SXRlbUNvbXBvbmVudCwgeyBkZXNjZW5kYW50czogZmFsc2UgfSlcbiAgcHJpdmF0ZSBfaXRlbXMhOiBRdWVyeUxpc3Q8QXZhdGFyTGlzdEl0ZW1Db21wb25lbnQ+O1xuXG4gIGl0ZW1zOiBBdmF0YXJMaXN0SXRlbUNvbXBvbmVudFtdID0gW107XG4gIGV4Y2VlZENvdW50ID0gMDtcblxuICBjbHMgPSAnJztcbiAgYXZhdGFyU2l6ZSA9ICcnO1xuICBASW5wdXQoKVxuICBzZXQgc2l6ZSh2YWx1ZTogJ2xhcmdlJyB8ICdzbWFsbCcgfCAnbWluaScgfCAnZGVmYXVsdCcpIHtcbiAgICB0aGlzLmNscyA9ICdhdmF0YXItbGlzdF9faXRlbScgKyAodmFsdWUgPT09ICdkZWZhdWx0JyA/ICcnIDogYCBhdmF0YXItbGlzdF9fJHt2YWx1ZX1gKTtcbiAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICBjYXNlICdsYXJnZSc6XG4gICAgICBjYXNlICdzbWFsbCc6XG4gICAgICBjYXNlICdkZWZhdWx0JzpcbiAgICAgICAgdGhpcy5hdmF0YXJTaXplID0gdmFsdWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy5hdmF0YXJTaXplID0gJ3NtYWxsJztcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIG1heExlbmd0aCA9IDA7XG4gIEBJbnB1dCgpIGV4Y2Vzc0l0ZW1zU3R5bGU6IHt9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBwcml2YXRlIGdlbigpIHtcbiAgICBjb25zdCB7IF9pdGVtcyB9ID0gdGhpcztcbiAgICBjb25zdCBtYXhMZW5ndGggPSB0aGlzLm1heExlbmd0aCA+IDAgPyB0aGlzLm1heExlbmd0aCA6IF9pdGVtcy5sZW5ndGg7XG4gICAgY29uc3QgbnVtT2ZDaGlsZHJlbiA9IF9pdGVtcy5sZW5ndGg7XG4gICAgY29uc3QgbnVtVG9TaG93ID0gbWF4TGVuZ3RoID4gMCAmJiBtYXhMZW5ndGggPj0gbnVtT2ZDaGlsZHJlbiA/IG51bU9mQ2hpbGRyZW4gOiBtYXhMZW5ndGg7XG4gICAgdGhpcy5pdGVtcyA9IF9pdGVtcy50b0FycmF5KCkuc2xpY2UoMCwgbnVtVG9TaG93KTtcbiAgICB0aGlzLmV4Y2VlZENvdW50ID0gbnVtVG9TaG93IDwgbnVtT2ZDaGlsZHJlbiA/IG51bU9mQ2hpbGRyZW4gLSBtYXhMZW5ndGggOiAwO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmdlbigpO1xuICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIGlmICh0aGlzLmluaXRlZCkge1xuICAgICAgdGhpcy5nZW4oKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==