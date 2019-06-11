/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { getData, toBool } from '../../utils';
import { ControlWidget } from '../../widget';
var SelectWidget = /** @class */ (function (_super) {
    tslib_1.__extends(SelectWidget, _super);
    function SelectWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hasGroup = false;
        return _this;
    }
    /**
     * @private
     * @param {?} list
     * @return {?}
     */
    SelectWidget.prototype.checkGroup = /**
     * @private
     * @param {?} list
     * @return {?}
     */
    function (list) {
        this.hasGroup = (list || []).filter((/**
         * @param {?} w
         * @return {?}
         */
        function (w) { return w.group === true; })).length > 0;
    };
    /**
     * @return {?}
     */
    SelectWidget.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _a = this.ui, autoClearSearchValue = _a.autoClearSearchValue, allowClear = _a.allowClear, autoFocus = _a.autoFocus, dropdownClassName = _a.dropdownClassName, dropdownMatchSelectWidth = _a.dropdownMatchSelectWidth, serverSearch = _a.serverSearch, maxMultipleCount = _a.maxMultipleCount, mode = _a.mode, notFoundContent = _a.notFoundContent, showSearch = _a.showSearch, tokenSeparators = _a.tokenSeparators, maxTagCount = _a.maxTagCount, compareWith = _a.compareWith;
        this.i = {
            autoClearSearchValue: toBool(autoClearSearchValue, true),
            allowClear: allowClear,
            autoFocus: toBool(autoFocus, false),
            dropdownClassName: dropdownClassName || null,
            dropdownMatchSelectWidth: toBool(dropdownMatchSelectWidth, true),
            serverSearch: toBool(serverSearch, false),
            maxMultipleCount: maxMultipleCount || Infinity,
            mode: mode || 'default',
            notFoundContent: notFoundContent,
            showSearch: toBool(showSearch, true),
            tokenSeparators: tokenSeparators || [],
            maxTagCount: maxTagCount || undefined,
            compareWith: compareWith || ((/**
             * @param {?} o1
             * @param {?} o2
             * @return {?}
             */
            function (o1, o2) { return o1 === o2; })),
        };
    };
    /**
     * @param {?} value
     * @return {?}
     */
    SelectWidget.prototype.reset = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        getData(this.schema, this.ui, this.formProperty.formData).subscribe((/**
         * @param {?} list
         * @return {?}
         */
        function (list) {
            _this._value = value;
            _this.data = list;
            _this.checkGroup(list);
            _this.detectChanges();
        }));
    };
    /**
     * @param {?} values
     * @return {?}
     */
    SelectWidget.prototype.change = /**
     * @param {?} values
     * @return {?}
     */
    function (values) {
        if (this.ui.change) {
            this.ui.change(values);
        }
        this.setValue(values);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    SelectWidget.prototype.openChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.ui.openChange) {
            this.ui.openChange(value);
        }
    };
    /**
     * @param {?} text
     * @return {?}
     */
    SelectWidget.prototype.searchChange = /**
     * @param {?} text
     * @return {?}
     */
    function (text) {
        var _this = this;
        if (this.ui.onSearch) {
            this.ui.onSearch(text).then((/**
             * @param {?} list
             * @return {?}
             */
            function (list) {
                _this.data = list;
                _this.checkGroup(list);
                _this.detectChanges();
            }));
            return;
        }
        this.detectChanges();
    };
    /**
     * @return {?}
     */
    SelectWidget.prototype.scrollToBottom = /**
     * @return {?}
     */
    function () {
        if (this.ui.scrollToBottom) {
            this.ui.scrollToBottom();
        }
    };
    SelectWidget.decorators = [
        { type: Component, args: [{
                    selector: 'sf-select',
                    template: "<sf-item-wrap [id]=\"id\"\n              [schema]=\"schema\"\n              [ui]=\"ui\"\n              [showError]=\"showError\"\n              [error]=\"error\"\n              [showTitle]=\"schema.title\">\n  <nz-select [nzDisabled]=\"disabled\"\n             [nzSize]=\"ui.size\"\n             [(ngModel)]=\"_value\"\n             (ngModelChange)=\"change($event)\"\n             [nzPlaceHolder]=\"ui.placeholder\"\n             [nzAutoClearSearchValue]=\"i.autoClearSearchValue\"\n             [nzAllowClear]=\"i.allowClear\"\n             [nzAutoFocus]=\"i.autoFocus\"\n             [nzDropdownClassName]=\"i.dropdownClassName\"\n             [nzDropdownMatchSelectWidth]=\"i.dropdownMatchSelectWidth\"\n             [nzServerSearch]=\"i.serverSearch\"\n             [nzMaxMultipleCount]=\"i.maxMultipleCount\"\n             [nzMode]=\"i.mode\"\n             [nzNotFoundContent]=\"i.notFoundContent\"\n             [nzShowSearch]=\"i.showSearch\"\n             [nzTokenSeparators]=\"i.tokenSeparators\"\n             [nzMaxTagCount]=\"i.maxTagCount\"\n             [compareWith]=\"i.compareWith\"\n             (nzOpenChange)=\"openChange($event)\"\n             (nzOnSearch)=\"searchChange($event)\"\n             (nzScrollToBottom)=\"scrollToBottom()\">\n    <ng-container *ngIf=\"!hasGroup\">\n      <nz-option *ngFor=\"let o of data\"\n                 [nzLabel]=\"o.label\"\n                 [nzValue]=\"o.value\"\n                 [nzDisabled]=\"o.disabled\">\n      </nz-option>\n    </ng-container>\n    <ng-container *ngIf=\"hasGroup\">\n      <nz-option-group *ngFor=\"let i of data\"\n                       [nzLabel]=\"i.label\">\n        <nz-option *ngFor=\"let o of i.children\"\n                   [nzLabel]=\"o.label\"\n                   [nzValue]=\"o.value\"\n                   [nzDisabled]=\"o.disabled\">\n        </nz-option>\n      </nz-option-group>\n    </ng-container>\n  </nz-select>\n</sf-item-wrap>\n",
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    return SelectWidget;
}(ControlWidget));
export { SelectWidget };
if (false) {
    /** @type {?} */
    SelectWidget.prototype.i;
    /** @type {?} */
    SelectWidget.prototype.data;
    /** @type {?} */
    SelectWidget.prototype._value;
    /** @type {?} */
    SelectWidget.prototype.hasGroup;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9mb3JtLyIsInNvdXJjZXMiOlsic3JjL3dpZGdldHMvc2VsZWN0L3NlbGVjdC53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3JFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFN0M7SUFNa0Msd0NBQWE7SUFOL0M7UUFBQSxxRUF3RkM7UUE5RUMsY0FBUSxHQUFHLEtBQUssQ0FBQzs7SUE4RW5CLENBQUM7Ozs7OztJQTVFUyxpQ0FBVTs7Ozs7SUFBbEIsVUFBbUIsSUFBb0I7UUFDckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsS0FBSyxLQUFLLElBQUksRUFBaEIsQ0FBZ0IsRUFBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDeEUsQ0FBQzs7OztJQUVELCtCQUFROzs7SUFBUjtRQUNRLElBQUEsWUFjSyxFQWJULDhDQUFvQixFQUNwQiwwQkFBVSxFQUNWLHdCQUFTLEVBQ1Qsd0NBQWlCLEVBQ2pCLHNEQUF3QixFQUN4Qiw4QkFBWSxFQUNaLHNDQUFnQixFQUNoQixjQUFJLEVBQ0osb0NBQWUsRUFDZiwwQkFBVSxFQUNWLG9DQUFlLEVBQ2YsNEJBQVcsRUFDWCw0QkFDUztRQUNYLElBQUksQ0FBQyxDQUFDLEdBQUc7WUFDUCxvQkFBb0IsRUFBRSxNQUFNLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDO1lBQ3hELFVBQVUsWUFBQTtZQUNWLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQztZQUNuQyxpQkFBaUIsRUFBRSxpQkFBaUIsSUFBSSxJQUFJO1lBQzVDLHdCQUF3QixFQUFFLE1BQU0sQ0FBQyx3QkFBd0IsRUFBRSxJQUFJLENBQUM7WUFDaEUsWUFBWSxFQUFFLE1BQU0sQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDO1lBQ3pDLGdCQUFnQixFQUFFLGdCQUFnQixJQUFJLFFBQVE7WUFDOUMsSUFBSSxFQUFFLElBQUksSUFBSSxTQUFTO1lBQ3ZCLGVBQWUsaUJBQUE7WUFDZixVQUFVLEVBQUUsTUFBTSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUM7WUFDcEMsZUFBZSxFQUFFLGVBQWUsSUFBSSxFQUFFO1lBQ3RDLFdBQVcsRUFBRSxXQUFXLElBQUksU0FBUztZQUNyQyxXQUFXLEVBQUUsV0FBVyxJQUFJOzs7OztZQUFDLFVBQUMsRUFBTyxFQUFFLEVBQU8sSUFBSyxPQUFBLEVBQUUsS0FBSyxFQUFFLEVBQVQsQ0FBUyxFQUFDO1NBQzlELENBQUM7SUFDSixDQUFDOzs7OztJQUVELDRCQUFLOzs7O0lBQUwsVUFBTSxLQUFjO1FBQXBCLGlCQU9DO1FBTkMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLElBQUk7WUFDdEUsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDcEIsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDakIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0QixLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdkIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELDZCQUFNOzs7O0lBQU4sVUFBTyxNQUFlO1FBQ3BCLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUU7WUFDbEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDeEI7UUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRUQsaUNBQVU7Ozs7SUFBVixVQUFXLEtBQWM7UUFDdkIsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRTtZQUN0QixJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMzQjtJQUNILENBQUM7Ozs7O0lBRUQsbUNBQVk7Ozs7SUFBWixVQUFhLElBQVk7UUFBekIsaUJBVUM7UUFUQyxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUk7Ozs7WUFBQyxVQUFDLElBQW9CO2dCQUMvQyxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztnQkFDakIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdEIsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3ZCLENBQUMsRUFBQyxDQUFDO1lBQ0gsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFRCxxQ0FBYzs7O0lBQWQ7UUFDRSxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxFQUFFO1lBQzFCLElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDMUI7SUFDSCxDQUFDOztnQkF2RkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQix5NURBQW1DO29CQUNuQyxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDdEM7O0lBbUZELG1CQUFDO0NBQUEsQUF4RkQsQ0FNa0MsYUFBYSxHQWtGOUM7U0FsRlksWUFBWTs7O0lBQ3ZCLHlCQUFPOztJQUNQLDRCQUFxQjs7SUFDckIsOEJBQVk7O0lBQ1osZ0NBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTRlZhbHVlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlJztcbmltcG9ydCB7IFNGU2NoZW1hRW51bSB9IGZyb20gJy4uLy4uL3NjaGVtYSc7XG5pbXBvcnQgeyBnZXREYXRhLCB0b0Jvb2wgfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2Ytc2VsZWN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlbGVjdC53aWRnZXQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RXaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IGltcGxlbWVudHMgT25Jbml0IHtcbiAgaTogYW55O1xuICBkYXRhOiBTRlNjaGVtYUVudW1bXTtcbiAgX3ZhbHVlOiBhbnk7XG4gIGhhc0dyb3VwID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBjaGVja0dyb3VwKGxpc3Q6IFNGU2NoZW1hRW51bVtdKTogdm9pZCB7XG4gICAgdGhpcy5oYXNHcm91cCA9IChsaXN0IHx8IFtdKS5maWx0ZXIodyA9PiB3Lmdyb3VwID09PSB0cnVlKS5sZW5ndGggPiAwO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3Qge1xuICAgICAgYXV0b0NsZWFyU2VhcmNoVmFsdWUsXG4gICAgICBhbGxvd0NsZWFyLFxuICAgICAgYXV0b0ZvY3VzLFxuICAgICAgZHJvcGRvd25DbGFzc05hbWUsXG4gICAgICBkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGgsXG4gICAgICBzZXJ2ZXJTZWFyY2gsXG4gICAgICBtYXhNdWx0aXBsZUNvdW50LFxuICAgICAgbW9kZSxcbiAgICAgIG5vdEZvdW5kQ29udGVudCxcbiAgICAgIHNob3dTZWFyY2gsXG4gICAgICB0b2tlblNlcGFyYXRvcnMsXG4gICAgICBtYXhUYWdDb3VudCxcbiAgICAgIGNvbXBhcmVXaXRoLFxuICAgIH0gPSB0aGlzLnVpO1xuICAgIHRoaXMuaSA9IHtcbiAgICAgIGF1dG9DbGVhclNlYXJjaFZhbHVlOiB0b0Jvb2woYXV0b0NsZWFyU2VhcmNoVmFsdWUsIHRydWUpLFxuICAgICAgYWxsb3dDbGVhcixcbiAgICAgIGF1dG9Gb2N1czogdG9Cb29sKGF1dG9Gb2N1cywgZmFsc2UpLFxuICAgICAgZHJvcGRvd25DbGFzc05hbWU6IGRyb3Bkb3duQ2xhc3NOYW1lIHx8IG51bGwsXG4gICAgICBkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGg6IHRvQm9vbChkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGgsIHRydWUpLFxuICAgICAgc2VydmVyU2VhcmNoOiB0b0Jvb2woc2VydmVyU2VhcmNoLCBmYWxzZSksXG4gICAgICBtYXhNdWx0aXBsZUNvdW50OiBtYXhNdWx0aXBsZUNvdW50IHx8IEluZmluaXR5LFxuICAgICAgbW9kZTogbW9kZSB8fCAnZGVmYXVsdCcsXG4gICAgICBub3RGb3VuZENvbnRlbnQsXG4gICAgICBzaG93U2VhcmNoOiB0b0Jvb2woc2hvd1NlYXJjaCwgdHJ1ZSksXG4gICAgICB0b2tlblNlcGFyYXRvcnM6IHRva2VuU2VwYXJhdG9ycyB8fCBbXSxcbiAgICAgIG1heFRhZ0NvdW50OiBtYXhUYWdDb3VudCB8fCB1bmRlZmluZWQsXG4gICAgICBjb21wYXJlV2l0aDogY29tcGFyZVdpdGggfHwgKChvMTogYW55LCBvMjogYW55KSA9PiBvMSA9PT0gbzIpLFxuICAgIH07XG4gIH1cblxuICByZXNldCh2YWx1ZTogU0ZWYWx1ZSkge1xuICAgIGdldERhdGEodGhpcy5zY2hlbWEsIHRoaXMudWksIHRoaXMuZm9ybVByb3BlcnR5LmZvcm1EYXRhKS5zdWJzY3JpYmUobGlzdCA9PiB7XG4gICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5kYXRhID0gbGlzdDtcbiAgICAgIHRoaXMuY2hlY2tHcm91cChsaXN0KTtcbiAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuICB9XG5cbiAgY2hhbmdlKHZhbHVlczogU0ZWYWx1ZSkge1xuICAgIGlmICh0aGlzLnVpLmNoYW5nZSkge1xuICAgICAgdGhpcy51aS5jaGFuZ2UodmFsdWVzKTtcbiAgICB9XG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZXMpO1xuICB9XG5cbiAgb3BlbkNoYW5nZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLnVpLm9wZW5DaGFuZ2UpIHtcbiAgICAgIHRoaXMudWkub3BlbkNoYW5nZSh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgc2VhcmNoQ2hhbmdlKHRleHQ6IHN0cmluZykge1xuICAgIGlmICh0aGlzLnVpLm9uU2VhcmNoKSB7XG4gICAgICB0aGlzLnVpLm9uU2VhcmNoKHRleHQpLnRoZW4oKGxpc3Q6IFNGU2NoZW1hRW51bVtdKSA9PiB7XG4gICAgICAgIHRoaXMuZGF0YSA9IGxpc3Q7XG4gICAgICAgIHRoaXMuY2hlY2tHcm91cChsaXN0KTtcbiAgICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBzY3JvbGxUb0JvdHRvbSgpIHtcbiAgICBpZiAodGhpcy51aS5zY3JvbGxUb0JvdHRvbSkge1xuICAgICAgdGhpcy51aS5zY3JvbGxUb0JvdHRvbSgpO1xuICAgIH1cbiAgfVxufVxuIl19