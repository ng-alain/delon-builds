/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, HostBinding, Input, Output, EventEmitter, } from '@angular/core';
import { InputBoolean } from '@delon/util';
import { DelonLocaleService } from '@delon/theme';
export class TagSelectComponent {
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
    {{expand ? locale.collapse : locale.expand}}<i nz-icon [type]="expand ? 'up' : 'down'" class="tag-select__trigger-icon"></i>
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
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], TagSelectComponent.prototype, "expandable", void 0);
if (false) {
    /** @type {?} */
    TagSelectComponent.prototype.i18n$;
    /** @type {?} */
    TagSelectComponent.prototype.locale;
    /**
     * 是否启用 `展开与收进`
     * @type {?}
     */
    TagSelectComponent.prototype.expandable;
    /** @type {?} */
    TagSelectComponent.prototype.expand;
    /** @type {?} */
    TagSelectComponent.prototype.change;
    /** @type {?} */
    TagSelectComponent.prototype.i18n;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL3RhZy1zZWxlY3QvIiwic291cmNlcyI6WyJ0YWctc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsV0FBVyxFQUNYLEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxHQUViLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDM0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBWWxELE1BQU07Ozs7SUFnQkosWUFBb0IsSUFBd0I7UUFBeEIsU0FBSSxHQUFKLElBQUksQ0FBb0I7c0JBZDlCLEVBQUU7Ozs7MEJBTUgsSUFBSTtzQkFHUixLQUFLO3NCQUdJLElBQUksWUFBWSxFQUFXO1FBRzNDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUNyQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FDckQsQ0FBQztLQUNIOzs7O0lBRUQsT0FBTztRQUNMLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUMvQjs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQzFCOzs7WUF2Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUU7Ozs7T0FJTDtnQkFDTCxJQUFJLEVBQUUsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUU7Z0JBQ3RDLG1CQUFtQixFQUFFLEtBQUs7YUFDM0I7Ozs7WUFYUSxrQkFBa0I7Ozt5QkFpQnhCLEtBQUssWUFFTCxXQUFXLFNBQUMsOEJBQThCO3FCQUcxQyxXQUFXLFNBQUMsNEJBQTRCO3FCQUd4QyxNQUFNOzs7SUFQTixZQUFZLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIE9uRGVzdHJveSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgRGVsb25Mb2NhbGVTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGFnLXNlbGVjdCcsXG4gIHRlbXBsYXRlOiBgXG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPGEgKm5nSWY9XCJleHBhbmRhYmxlXCIgY2xhc3M9XCJ0YWctc2VsZWN0X190cmlnZ2VyXCIgKGNsaWNrKT1cInRyaWdnZXIoKVwiPlxuICAgIHt7ZXhwYW5kID8gbG9jYWxlLmNvbGxhcHNlIDogbG9jYWxlLmV4cGFuZH19PGkgbnotaWNvbiBbdHlwZV09XCJleHBhbmQgPyAndXAnIDogJ2Rvd24nXCIgY2xhc3M9XCJ0YWctc2VsZWN0X190cmlnZ2VyLWljb25cIj48L2k+XG4gIDwvYT5gLFxuICBob3N0OiB7ICdbY2xhc3MudGFnLXNlbGVjdF0nOiAndHJ1ZScgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIFRhZ1NlbGVjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgaTE4biQ6IFN1YnNjcmlwdGlvbjtcbiAgbG9jYWxlOiBhbnkgPSB7fTtcblxuICAvKiog5piv5ZCm5ZCv55SoIGDlsZXlvIDkuI7mlLbov5tgICovXG4gIEBJbnB1dCgpXG4gIEBJbnB1dEJvb2xlYW4oKVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnRhZy1zZWxlY3RfX2hhcy1leHBhbmQnKVxuICBleHBhbmRhYmxlID0gdHJ1ZTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnRhZy1zZWxlY3RfX2V4cGFuZGVkJylcbiAgZXhwYW5kID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpXG4gIHJlYWRvbmx5IGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGkxOG46IERlbG9uTG9jYWxlU2VydmljZSkge1xuICAgIHRoaXMuaTE4biQgPSB0aGlzLmkxOG4uY2hhbmdlLnN1YnNjcmliZShcbiAgICAgICgpID0+ICh0aGlzLmxvY2FsZSA9IHRoaXMuaTE4bi5nZXREYXRhKCd0YWdTZWxlY3QnKSksXG4gICAgKTtcbiAgfVxuXG4gIHRyaWdnZXIoKSB7XG4gICAgdGhpcy5leHBhbmQgPSAhdGhpcy5leHBhbmQ7XG4gICAgdGhpcy5jaGFuZ2UuZW1pdCh0aGlzLmV4cGFuZCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmkxOG4kLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==