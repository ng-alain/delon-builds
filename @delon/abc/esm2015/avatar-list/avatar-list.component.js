/**
 * @fileoverview added by tsickle
 * Generated from: avatar-list.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
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
                template: "<ul class=\"avatar-list__wrap\">\n  <li *ngFor=\"let i of items\" [ngClass]=\"cls\">\n    <nz-avatar *ngIf=\"i.tips\"\n                nz-tooltip [nzTooltipTitle]=\"i.tips\"\n                [nzSrc]=\"i.src\"\n                [nzText]=\"i.text\"\n                [nzIcon]=\"i.icon\"\n                [nzSize]=\"avatarSize\"></nz-avatar>\n    <nz-avatar *ngIf=\"!i.tips\"\n               [nzSrc]=\"i.src\"\n               [nzText]=\"i.text\"\n               [nzIcon]=\"i.icon\"\n               [nzSize]=\"avatarSize\"></nz-avatar>\n  </li>\n  <li *ngIf=\"exceedCount > 0\" [ngClass]=\"cls\">\n    <nz-avatar [nzSize]=\"avatarSize\"\n               style=\"cursor: auto\"\n               [ngStyle]=\"excessItemsStyle\"\n               [nzText]=\"'+' + exceedCount\"></nz-avatar>\n  </li>\n</ul>\n",
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
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9hdmF0YXItbGlzdC8iLCJzb3VyY2VzIjpbImF2YXRhci1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsZUFBZSxFQUNmLEtBQUssRUFFTCxTQUFTLEVBQ1QsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDMUMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFXdkUsTUFBTSxPQUFPLG1CQUFtQjs7OztJQTJCOUIsWUFBb0IsR0FBc0I7UUFBdEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUExQmxDLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFJdkIsVUFBSyxHQUE4QixFQUFFLENBQUM7UUFDdEMsZ0JBQVcsR0FBRyxDQUFDLENBQUM7UUFFaEIsUUFBRyxHQUFHLEVBQUUsQ0FBQztRQUNULGVBQVUsR0FBRyxFQUFFLENBQUM7UUFlUSxjQUFTLEdBQUcsQ0FBQyxDQUFDO0lBR08sQ0FBQzs7Ozs7SUFqQjlDLElBQ0ksSUFBSSxDQUFDLEtBQTZDO1FBQ3BELElBQUksQ0FBQyxHQUFHLEdBQUcsbUJBQW1CLEdBQUcsQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZGLFFBQVEsS0FBSyxFQUFFO1lBQ2IsS0FBSyxPQUFPLENBQUM7WUFDYixLQUFLLE9BQU8sQ0FBQztZQUNiLEtBQUssU0FBUztnQkFDWixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztnQkFDeEIsTUFBTTtZQUNSO2dCQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDO2dCQUMxQixNQUFNO1NBQ1Q7SUFDSCxDQUFDOzs7OztJQU1PLEdBQUc7Y0FDSCxFQUFFLE1BQU0sRUFBRSxHQUFHLElBQUk7O2NBQ2pCLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU07O2NBQy9ELGFBQWEsR0FBRyxNQUFNLENBQUMsTUFBTTs7Y0FDN0IsU0FBUyxHQUFHLFNBQVMsR0FBRyxDQUFDLElBQUksU0FBUyxJQUFJLGFBQWEsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxTQUFTO1FBQ3pGLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNYLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQ1o7SUFDSCxDQUFDOzs7WUF6REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUUsWUFBWTtnQkFDdEIsc3lCQUEyQztnQkFDM0MsSUFBSSxFQUFFLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxFQUFFO2dCQUN2QyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7Ozs7WUFuQkMsaUJBQWlCOzs7cUJBc0JoQixlQUFlLFNBQUMsdUJBQXVCLEVBQUUsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFO21CQVEvRCxLQUFLO3dCQWNMLEtBQUs7K0JBQ0wsS0FBSzs7QUFEa0I7SUFBZCxXQUFXLEVBQUU7O3NEQUFlOzs7Ozs7SUF2QnRDLHFDQUF1Qjs7Ozs7SUFDdkIscUNBQ29EOztJQUVwRCxvQ0FBc0M7O0lBQ3RDLDBDQUFnQjs7SUFFaEIsa0NBQVM7O0lBQ1QseUNBQWdCOztJQWVoQix3Q0FBc0M7O0lBQ3RDLCtDQUE4Qjs7Ozs7SUFFbEIsa0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgUXVlcnlMaXN0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbnB1dE51bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IEF2YXRhckxpc3RJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9hdmF0YXItbGlzdC1pdGVtLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F2YXRhci1saXN0JyxcbiAgZXhwb3J0QXM6ICdhdmF0YXJMaXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2F2YXRhci1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDogeyAnW2NsYXNzLmF2YXRhci1saXN0XSc6ICd0cnVlJyB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIEF2YXRhckxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xuICBwcml2YXRlIGluaXRlZCA9IGZhbHNlO1xuICBAQ29udGVudENoaWxkcmVuKEF2YXRhckxpc3RJdGVtQ29tcG9uZW50LCB7IGRlc2NlbmRhbnRzOiBmYWxzZSB9KVxuICBwcml2YXRlIF9pdGVtcyE6IFF1ZXJ5TGlzdDxBdmF0YXJMaXN0SXRlbUNvbXBvbmVudD47XG5cbiAgaXRlbXM6IEF2YXRhckxpc3RJdGVtQ29tcG9uZW50W10gPSBbXTtcbiAgZXhjZWVkQ291bnQgPSAwO1xuXG4gIGNscyA9ICcnO1xuICBhdmF0YXJTaXplID0gJyc7XG4gIEBJbnB1dCgpXG4gIHNldCBzaXplKHZhbHVlOiAnbGFyZ2UnIHwgJ3NtYWxsJyB8ICdtaW5pJyB8ICdkZWZhdWx0Jykge1xuICAgIHRoaXMuY2xzID0gJ2F2YXRhci1saXN0X19pdGVtJyArICh2YWx1ZSA9PT0gJ2RlZmF1bHQnID8gJycgOiBgIGF2YXRhci1saXN0X18ke3ZhbHVlfWApO1xuICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgIGNhc2UgJ2xhcmdlJzpcbiAgICAgIGNhc2UgJ3NtYWxsJzpcbiAgICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgICAgICB0aGlzLmF2YXRhclNpemUgPSB2YWx1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLmF2YXRhclNpemUgPSAnc21hbGwnO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgbWF4TGVuZ3RoID0gMDtcbiAgQElucHV0KCkgZXhjZXNzSXRlbXNTdHlsZToge307XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIHByaXZhdGUgZ2VuKCkge1xuICAgIGNvbnN0IHsgX2l0ZW1zIH0gPSB0aGlzO1xuICAgIGNvbnN0IG1heExlbmd0aCA9IHRoaXMubWF4TGVuZ3RoID4gMCA/IHRoaXMubWF4TGVuZ3RoIDogX2l0ZW1zLmxlbmd0aDtcbiAgICBjb25zdCBudW1PZkNoaWxkcmVuID0gX2l0ZW1zLmxlbmd0aDtcbiAgICBjb25zdCBudW1Ub1Nob3cgPSBtYXhMZW5ndGggPiAwICYmIG1heExlbmd0aCA+PSBudW1PZkNoaWxkcmVuID8gbnVtT2ZDaGlsZHJlbiA6IG1heExlbmd0aDtcbiAgICB0aGlzLml0ZW1zID0gX2l0ZW1zLnRvQXJyYXkoKS5zbGljZSgwLCBudW1Ub1Nob3cpO1xuICAgIHRoaXMuZXhjZWVkQ291bnQgPSBudW1Ub1Nob3cgPCBudW1PZkNoaWxkcmVuID8gbnVtT2ZDaGlsZHJlbiAtIG1heExlbmd0aCA6IDA7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuZ2VuKCk7XG4gICAgdGhpcy5pbml0ZWQgPSB0cnVlO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgaWYgKHRoaXMuaW5pdGVkKSB7XG4gICAgICB0aGlzLmdlbigpO1xuICAgIH1cbiAgfVxufVxuIl19