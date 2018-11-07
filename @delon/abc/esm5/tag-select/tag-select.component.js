/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
                    template: "\n  <ng-content></ng-content>\n  <a *ngIf=\"expandable\" class=\"tag-select__trigger\" (click)=\"trigger()\">\n    {{expand ? locale.collapse : locale.expand}}<i nz-icon [type]=\"expand ? 'up' : 'down'\" class=\"tag-select__trigger-icon\"></i>\n  </a>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL3RhZy1zZWxlY3QvIiwic291cmNlcyI6WyJ0YWctc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsV0FBVyxFQUNYLEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxHQUViLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDM0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRWxEO0lBMEJFLDRCQUFvQixJQUF3QjtRQUE1QyxpQkFJQztRQUptQixTQUFJLEdBQUosSUFBSSxDQUFvQjtRQWQ1QyxXQUFNLEdBQVEsRUFBRSxDQUFDOzs7O1FBTWpCLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFHbEIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUdOLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBRzVDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUNyQyxjQUFNLE9BQUEsQ0FBQyxLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQTlDLENBQThDLENBQ3JELENBQUM7SUFDSixDQUFDOzs7O0lBRUQsb0NBQU87OztJQUFQO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFFRCx3Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzNCLENBQUM7O2dCQXZDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFFBQVEsRUFBRSw2UEFJTDtvQkFDTCxJQUFJLEVBQUUsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUU7b0JBQ3RDLG1CQUFtQixFQUFFLEtBQUs7aUJBQzNCOzs7O2dCQVhRLGtCQUFrQjs7OzZCQWlCeEIsS0FBSyxZQUVMLFdBQVcsU0FBQyw4QkFBOEI7eUJBRzFDLFdBQVcsU0FBQyw0QkFBNEI7eUJBR3hDLE1BQU07O0lBTFA7UUFGQyxZQUFZLEVBQUU7OzBEQUVHO0lBc0JwQix5QkFBQztDQUFBLEFBeENELElBd0NDO1NBOUJZLGtCQUFrQjs7O0lBQzdCLG1DQUE0Qjs7SUFDNUIsb0NBQWlCOzs7OztJQUdqQix3Q0FHa0I7O0lBRWxCLG9DQUNlOztJQUVmLG9DQUM4Qzs7SUFFbEMsa0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IERlbG9uTG9jYWxlU2VydmljZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhZy1zZWxlY3QnLFxuICB0ZW1wbGF0ZTogYFxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDxhICpuZ0lmPVwiZXhwYW5kYWJsZVwiIGNsYXNzPVwidGFnLXNlbGVjdF9fdHJpZ2dlclwiIChjbGljayk9XCJ0cmlnZ2VyKClcIj5cbiAgICB7e2V4cGFuZCA/IGxvY2FsZS5jb2xsYXBzZSA6IGxvY2FsZS5leHBhbmR9fTxpIG56LWljb24gW3R5cGVdPVwiZXhwYW5kID8gJ3VwJyA6ICdkb3duJ1wiIGNsYXNzPVwidGFnLXNlbGVjdF9fdHJpZ2dlci1pY29uXCI+PC9pPlxuICA8L2E+YCxcbiAgaG9zdDogeyAnW2NsYXNzLnRhZy1zZWxlY3RdJzogJ3RydWUnIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBUYWdTZWxlY3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGkxOG4kOiBTdWJzY3JpcHRpb247XG4gIGxvY2FsZTogYW55ID0ge307XG5cbiAgLyoqIOaYr+WQpuWQr+eUqCBg5bGV5byA5LiO5pS26L+bYCAqL1xuICBASW5wdXQoKVxuICBASW5wdXRCb29sZWFuKClcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy50YWctc2VsZWN0X19oYXMtZXhwYW5kJylcbiAgZXhwYW5kYWJsZSA9IHRydWU7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy50YWctc2VsZWN0X19leHBhbmRlZCcpXG4gIGV4cGFuZCA9IGZhbHNlO1xuXG4gIEBPdXRwdXQoKVxuICByZWFkb25seSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpMThuOiBEZWxvbkxvY2FsZVNlcnZpY2UpIHtcbiAgICB0aGlzLmkxOG4kID0gdGhpcy5pMThuLmNoYW5nZS5zdWJzY3JpYmUoXG4gICAgICAoKSA9PiAodGhpcy5sb2NhbGUgPSB0aGlzLmkxOG4uZ2V0RGF0YSgndGFnU2VsZWN0JykpLFxuICAgICk7XG4gIH1cblxuICB0cmlnZ2VyKCkge1xuICAgIHRoaXMuZXhwYW5kID0gIXRoaXMuZXhwYW5kO1xuICAgIHRoaXMuY2hhbmdlLmVtaXQodGhpcy5leHBhbmQpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5pMThuJC51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=