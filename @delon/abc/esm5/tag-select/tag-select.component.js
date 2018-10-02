/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, HostBinding, Input, Output, EventEmitter, } from '@angular/core';
import { InputBoolean } from '@delon/util';
import { DelonLocaleService } from '@delon/theme';
var TagSelectComponent = /** @class */ (function () {
    function TagSelectComponent(i18n) {
        var _this = this;
        this.i18n = i18n;
        this.locale = {};
        /**
         * 是否启用 `展开与收进`
         */
        this.expandable = true;
        this.expand = false;
        this.change = new EventEmitter();
        this.i18n$ = this.i18n.change.subscribe(function () { return (_this.locale = _this.i18n.getData('tagSelect')); });
    }
    /**
     * @return {?}
     */
    TagSelectComponent.prototype.trigger = /**
     * @return {?}
     */
    function () {
        this.expand = !this.expand;
        this.change.emit(this.expand);
    };
    /**
     * @return {?}
     */
    TagSelectComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.i18n$.unsubscribe();
    };
    TagSelectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tag-select',
                    template: "\n  <ng-content></ng-content>\n  <a *ngIf=\"expandable\" class=\"tag-select__trigger\" (click)=\"trigger()\">\n    {{expand ? locale.collapse : locale.expand}}<i class=\"anticon anticon-{{expand ? 'up' : 'down'}} tag-select__trigger-icon\"></i>\n  </a>",
                    host: { '[class.tag-select]': 'true' },
                    preserveWhitespaces: false
                }] }
    ];
    /** @nocollapse */
    TagSelectComponent.ctorParameters = function () { return [
        { type: DelonLocaleService }
    ]; };
    TagSelectComponent.propDecorators = {
        expandable: [{ type: Input }, { type: HostBinding, args: ['class.tag-select__has-expand',] }],
        expand: [{ type: HostBinding, args: ['class.tag-select__expanded',] }],
        change: [{ type: Output }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], TagSelectComponent.prototype, "expandable", void 0);
    return TagSelectComponent;
}());
export { TagSelectComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL3RhZy1zZWxlY3QvIiwic291cmNlcyI6WyJ0YWctc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsV0FBVyxFQUNYLEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxHQUViLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDM0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sY0FBYyxDQUFDOztJQTRCaEQsNEJBQW9CLElBQXdCO1FBQTVDLGlCQUlDO1FBSm1CLFNBQUksR0FBSixJQUFJLENBQW9CO3NCQWQ5QixFQUFFOzs7OzBCQU1ILElBQUk7c0JBR1IsS0FBSztzQkFHa0IsSUFBSSxZQUFZLEVBQVc7UUFHekQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQ3JDLGNBQU0sT0FBQSxDQUFDLEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBOUMsQ0FBOEMsQ0FDckQsQ0FBQztLQUNIOzs7O0lBRUQsb0NBQU87OztJQUFQO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQy9COzs7O0lBRUQsd0NBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUMxQjs7Z0JBdkNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsUUFBUSxFQUFFLDhQQUlMO29CQUNMLElBQUksRUFBRSxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRTtvQkFDdEMsbUJBQW1CLEVBQUUsS0FBSztpQkFDM0I7Ozs7Z0JBWFEsa0JBQWtCOzs7NkJBaUJ4QixLQUFLLFlBRUwsV0FBVyxTQUFDLDhCQUE4Qjt5QkFHMUMsV0FBVyxTQUFDLDRCQUE0Qjt5QkFHeEMsTUFBTTs7O1FBUE4sWUFBWSxFQUFFOzs7NkJBN0JqQjs7U0F1QmEsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBPbkRlc3Ryb3ksXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xyXG5pbXBvcnQgeyBEZWxvbkxvY2FsZVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd0YWctc2VsZWN0JyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICA8YSAqbmdJZj1cImV4cGFuZGFibGVcIiBjbGFzcz1cInRhZy1zZWxlY3RfX3RyaWdnZXJcIiAoY2xpY2spPVwidHJpZ2dlcigpXCI+XHJcbiAgICB7e2V4cGFuZCA/IGxvY2FsZS5jb2xsYXBzZSA6IGxvY2FsZS5leHBhbmR9fTxpIGNsYXNzPVwiYW50aWNvbiBhbnRpY29uLXt7ZXhwYW5kID8gJ3VwJyA6ICdkb3duJ319IHRhZy1zZWxlY3RfX3RyaWdnZXItaWNvblwiPjwvaT5cclxuICA8L2E+YCxcclxuICBob3N0OiB7ICdbY2xhc3MudGFnLXNlbGVjdF0nOiAndHJ1ZScgfSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRhZ1NlbGVjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSBpMThuJDogU3Vic2NyaXB0aW9uO1xyXG4gIGxvY2FsZTogYW55ID0ge307XHJcblxyXG4gIC8qKiDmmK/lkKblkK/nlKggYOWxleW8gOS4juaUtui/m2AgKi9cclxuICBASW5wdXQoKVxyXG4gIEBJbnB1dEJvb2xlYW4oKVxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MudGFnLXNlbGVjdF9faGFzLWV4cGFuZCcpXHJcbiAgZXhwYW5kYWJsZSA9IHRydWU7XHJcblxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MudGFnLXNlbGVjdF9fZXhwYW5kZWQnKVxyXG4gIGV4cGFuZCA9IGZhbHNlO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpMThuOiBEZWxvbkxvY2FsZVNlcnZpY2UpIHtcclxuICAgIHRoaXMuaTE4biQgPSB0aGlzLmkxOG4uY2hhbmdlLnN1YnNjcmliZShcclxuICAgICAgKCkgPT4gKHRoaXMubG9jYWxlID0gdGhpcy5pMThuLmdldERhdGEoJ3RhZ1NlbGVjdCcpKSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICB0cmlnZ2VyKCkge1xyXG4gICAgdGhpcy5leHBhbmQgPSAhdGhpcy5leHBhbmQ7XHJcbiAgICB0aGlzLmNoYW5nZS5lbWl0KHRoaXMuZXhwYW5kKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5pMThuJC51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=