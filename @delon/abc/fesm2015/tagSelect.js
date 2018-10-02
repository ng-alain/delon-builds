import { __decorate, __metadata } from 'tslib';
import { Component, HostBinding, Input, Output, EventEmitter, NgModule } from '@angular/core';
import { InputBoolean, DelonUtilModule } from '@delon/util';
import { DelonLocaleService, DelonLocaleModule } from '@delon/theme';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class TagSelectComponent {
    /**
     * @param {?} i18n
     */
    constructor(i18n) {
        this.i18n = i18n;
        this.locale = {};
        /**
         * 是否启用 `展开与收进`
         */
        this.expandable = true;
        this.expand = false;
        this.change = new EventEmitter();
        this.i18n$ = this.i18n.change.subscribe(() => (this.locale = this.i18n.getData('tagSelect')));
    }
    /**
     * @return {?}
     */
    trigger() {
        this.expand = !this.expand;
        this.change.emit(this.expand);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.i18n$.unsubscribe();
    }
}
TagSelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'tag-select',
                template: `
  <ng-content></ng-content>
  <a *ngIf="expandable" class="tag-select__trigger" (click)="trigger()">
    {{expand ? locale.collapse : locale.expand}}<i class="anticon anticon-{{expand ? 'up' : 'down'}} tag-select__trigger-icon"></i>
  </a>`,
                host: { '[class.tag-select]': 'true' },
                preserveWhitespaces: false
            }] }
];
/** @nocollapse */
TagSelectComponent.ctorParameters = () => [
    { type: DelonLocaleService }
];
TagSelectComponent.propDecorators = {
    expandable: [{ type: Input }, { type: HostBinding, args: ['class.tag-select__has-expand',] }],
    expand: [{ type: HostBinding, args: ['class.tag-select__expanded',] }],
    change: [{ type: Output }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], TagSelectComponent.prototype, "expandable", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [TagSelectComponent];
class TagSelectModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: TagSelectModule, providers: [] };
    }
}
TagSelectModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, DelonLocaleModule, DelonUtilModule],
                declarations: [...COMPONENTS],
                exports: [...COMPONENTS],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { TagSelectComponent, TagSelectModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnU2VsZWN0LmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AZGVsb24vYWJjL3RhZy1zZWxlY3QvdGFnLXNlbGVjdC5jb21wb25lbnQudHMiLCJuZzovL0BkZWxvbi9hYmMvdGFnLXNlbGVjdC90YWctc2VsZWN0Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBIb3N0QmluZGluZyxcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIE9uRGVzdHJveSxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICdAZGVsb24vdXRpbCc7XHJcbmltcG9ydCB7IERlbG9uTG9jYWxlU2VydmljZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3RhZy1zZWxlY3QnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIDxhICpuZ0lmPVwiZXhwYW5kYWJsZVwiIGNsYXNzPVwidGFnLXNlbGVjdF9fdHJpZ2dlclwiIChjbGljayk9XCJ0cmlnZ2VyKClcIj5cclxuICAgIHt7ZXhwYW5kID8gbG9jYWxlLmNvbGxhcHNlIDogbG9jYWxlLmV4cGFuZH19PGkgY2xhc3M9XCJhbnRpY29uIGFudGljb24te3tleHBhbmQgPyAndXAnIDogJ2Rvd24nfX0gdGFnLXNlbGVjdF9fdHJpZ2dlci1pY29uXCI+PC9pPlxyXG4gIDwvYT5gLFxyXG4gIGhvc3Q6IHsgJ1tjbGFzcy50YWctc2VsZWN0XSc6ICd0cnVlJyB9LFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFnU2VsZWN0Q29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuICBwcml2YXRlIGkxOG4kOiBTdWJzY3JpcHRpb247XHJcbiAgbG9jYWxlOiBhbnkgPSB7fTtcclxuXHJcbiAgLyoqIMOmwpjCr8OlwpDCpsOlwpDCr8OnwpTCqCBgw6XCscKVw6XCvMKAw6TCuMKOw6bClMK2w6jCv8KbYCAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgQElucHV0Qm9vbGVhbigpXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy50YWctc2VsZWN0X19oYXMtZXhwYW5kJylcclxuICBleHBhbmRhYmxlID0gdHJ1ZTtcclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy50YWctc2VsZWN0X19leHBhbmRlZCcpXHJcbiAgZXhwYW5kID0gZmFsc2U7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIGNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGkxOG46IERlbG9uTG9jYWxlU2VydmljZSkge1xyXG4gICAgdGhpcy5pMThuJCA9IHRoaXMuaTE4bi5jaGFuZ2Uuc3Vic2NyaWJlKFxyXG4gICAgICAoKSA9PiAodGhpcy5sb2NhbGUgPSB0aGlzLmkxOG4uZ2V0RGF0YSgndGFnU2VsZWN0JykpLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHRyaWdnZXIoKSB7XHJcbiAgICB0aGlzLmV4cGFuZCA9ICF0aGlzLmV4cGFuZDtcclxuICAgIHRoaXMuY2hhbmdlLmVtaXQodGhpcy5leHBhbmQpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmkxOG4kLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IERlbG9uTG9jYWxlTW9kdWxlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcclxuaW1wb3J0IHsgRGVsb25VdGlsTW9kdWxlIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xyXG5cclxuaW1wb3J0IHsgVGFnU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi90YWctc2VsZWN0LmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCBDT01QT05FTlRTID0gW1RhZ1NlbGVjdENvbXBvbmVudF07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIERlbG9uTG9jYWxlTW9kdWxlLCBEZWxvblV0aWxNb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogWy4uLkNPTVBPTkVOVFNdLFxyXG4gIGV4cG9ydHM6IFsuLi5DT01QT05FTlRTXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRhZ1NlbGVjdE1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4geyBuZ01vZHVsZTogVGFnU2VsZWN0TW9kdWxlLCBwcm92aWRlcnM6IFtdIH07XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztJQXVDRSxZQUFvQixJQUF3QjtRQUF4QixTQUFJLEdBQUosSUFBSSxDQUFvQjtzQkFkOUIsRUFBRTs7OzswQkFNSCxJQUFJO3NCQUdSLEtBQUs7c0JBR2tCLElBQUksWUFBWSxFQUFXO1FBR3pELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUNyQyxPQUFPLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FDckQsQ0FBQztLQUNIOzs7O0lBRUQsT0FBTztRQUNMLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUMvQjs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQzFCOzs7WUF2Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUU7Ozs7T0FJTDtnQkFDTCxJQUFJLEVBQUUsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUU7Z0JBQ3RDLG1CQUFtQixFQUFFLEtBQUs7YUFDM0I7Ozs7WUFYUSxrQkFBa0I7Ozt5QkFpQnhCLEtBQUssWUFFTCxXQUFXLFNBQUMsOEJBQThCO3FCQUcxQyxXQUFXLFNBQUMsNEJBQTRCO3FCQUd4QyxNQUFNOzs7SUFQTixZQUFZLEVBQUU7Ozs7Ozs7O0FDN0JqQjtBQU9BLE1BQU0sVUFBVSxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQU94Qzs7OztJQUNFLE9BQU8sT0FBTztRQUNaLE9BQU8sRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsQ0FBQztLQUNyRDs7O1lBUkYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxlQUFlLENBQUM7Z0JBQzNELFlBQVksRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDO2dCQUM3QixPQUFPLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQzthQUN6Qjs7Ozs7Ozs7Ozs7Ozs7OyJ9