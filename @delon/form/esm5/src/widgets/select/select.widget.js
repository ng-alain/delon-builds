/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
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
     * @return {?}
     */
    SelectWidget.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.i = {
            autoClearSearchValue: toBool(this.ui.autoClearSearchValue, true),
            allowClear: this.ui.allowClear,
            autoFocus: toBool(this.ui.autoFocus, false),
            dropdownClassName: this.ui.dropdownClassName || null,
            dropdownMatchSelectWidth: toBool(this.ui.dropdownMatchSelectWidth, true),
            serverSearch: toBool(this.ui.serverSearch, false),
            maxMultipleCount: this.ui.maxMultipleCount || Infinity,
            mode: this.ui.mode || 'default',
            notFoundContent: this.ui.notFoundContent,
            showSearch: toBool(this.ui.showSearch, true),
            tokenSeparators: this.ui.tokenSeparators || [],
            maxTagCount: this.ui.maxTagCount || undefined,
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
            _this.hasGroup = list.filter((/**
             * @param {?} w
             * @return {?}
             */
            function (w) { return w.group === true; })).length > 0;
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
             * @param {?} res
             * @return {?}
             */
            function (res) {
                _this.data = res;
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
                    template: "<sf-item-wrap [id]=\"id\"\n              [schema]=\"schema\"\n              [ui]=\"ui\"\n              [showError]=\"showError\"\n              [error]=\"error\"\n              [showTitle]=\"schema.title\">\n  <nz-select [nzDisabled]=\"disabled\"\n             [nzSize]=\"ui.size\"\n             [(ngModel)]=\"_value\"\n             (ngModelChange)=\"change($event)\"\n             [nzPlaceHolder]=\"ui.placeholder\"\n             [nzAutoClearSearchValue]=\"i.autoClearSearchValue\"\n             [nzAllowClear]=\"i.allowClear\"\n             [nzAutoFocus]=\"i.autoFocus\"\n             [nzDropdownClassName]=\"i.dropdownClassName\"\n             [nzDropdownMatchSelectWidth]=\"i.dropdownMatchSelectWidth\"\n             [nzServerSearch]=\"i.serverSearch\"\n             [nzMaxMultipleCount]=\"i.maxMultipleCount\"\n             [nzMode]=\"i.mode\"\n             [nzNotFoundContent]=\"i.notFoundContent\"\n             [nzShowSearch]=\"i.showSearch\"\n             [nzTokenSeparators]=\"i.tokenSeparators\"\n             [nzMaxTagCount]=\"i.maxTagCount\"\n             (nzOpenChange)=\"openChange($event)\"\n             (nzOnSearch)=\"searchChange($event)\"\n             (nzScrollToBottom)=\"scrollToBottom()\">\n    <ng-container *ngIf=\"!hasGroup\">\n      <nz-option *ngFor=\"let o of data\"\n                 [nzLabel]=\"o.label\"\n                 [nzValue]=\"o.value\"\n                 [nzDisabled]=\"o.disabled\">\n      </nz-option>\n    </ng-container>\n    <ng-container *ngIf=\"hasGroup\">\n      <nz-option-group *ngFor=\"let i of data\"\n                       [nzLabel]=\"i.label\">\n        <nz-option *ngFor=\"let o of i.children\"\n                   [nzLabel]=\"o.label\"\n                   [nzValue]=\"o.value\"\n                   [nzDisabled]=\"o.disabled\">\n        </nz-option>\n      </nz-option-group>\n    </ng-container>\n  </nz-select>\n</sf-item-wrap>\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9mb3JtLyIsInNvdXJjZXMiOlsic3JjL3dpZGdldHMvc2VsZWN0L3NlbGVjdC53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBR2xELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFN0M7SUFJa0Msd0NBQWE7SUFKL0M7UUFBQSxxRUFpRUM7UUF6REMsY0FBUSxHQUFHLEtBQUssQ0FBQzs7SUF5RG5CLENBQUM7Ozs7SUF2REMsK0JBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLENBQUMsR0FBRztZQUNQLG9CQUFvQixFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLG9CQUFvQixFQUFFLElBQUksQ0FBQztZQUNoRSxVQUFVLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVO1lBQzlCLFNBQVMsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDO1lBQzNDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsaUJBQWlCLElBQUksSUFBSTtZQUNwRCx3QkFBd0IsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSxJQUFJLENBQUM7WUFDeEUsWUFBWSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUM7WUFDakQsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsSUFBSSxRQUFRO1lBQ3RELElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxTQUFTO1lBQy9CLGVBQWUsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLGVBQWU7WUFDeEMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUM7WUFDNUMsZUFBZSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsZUFBZSxJQUFJLEVBQUU7WUFDOUMsV0FBVyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxJQUFJLFNBQVM7U0FDOUMsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsNEJBQUs7Ozs7SUFBTCxVQUFNLEtBQWM7UUFBcEIsaUJBT0M7UUFOQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsSUFBSTtZQUN0RSxLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNwQixLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNqQixLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNOzs7O1lBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsS0FBSyxLQUFLLElBQUksRUFBaEIsQ0FBZ0IsRUFBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDOUQsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCw2QkFBTTs7OztJQUFOLFVBQU8sTUFBZTtRQUNwQixJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3hCO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN4QixDQUFDOzs7OztJQUVELGlDQUFVOzs7O0lBQVYsVUFBVyxLQUFjO1FBQ3ZCLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUU7WUFDdEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDM0I7SUFDSCxDQUFDOzs7OztJQUVELG1DQUFZOzs7O0lBQVosVUFBYSxJQUFZO1FBQXpCLGlCQVNDO1FBUkMsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRTtZQUNwQixJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJOzs7O1lBQUMsVUFBQyxHQUFtQjtnQkFDOUMsS0FBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7Z0JBQ2hCLEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUN2QixDQUFDLEVBQUMsQ0FBQztZQUNILE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQscUNBQWM7OztJQUFkO1FBQ0UsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLGNBQWMsRUFBRTtZQUMxQixJQUFJLENBQUMsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQzFCO0lBQ0gsQ0FBQzs7Z0JBaEVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsMjJEQUFtQztpQkFDcEM7O0lBOERELG1CQUFDO0NBQUEsQUFqRUQsQ0FJa0MsYUFBYSxHQTZEOUM7U0E3RFksWUFBWTs7O0lBQ3ZCLHlCQUFPOztJQUNQLDRCQUFxQjs7SUFDckIsOEJBQVk7O0lBQ1osZ0NBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNGVmFsdWUgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgU0ZTY2hlbWFFbnVtIH0gZnJvbSAnLi4vLi4vc2NoZW1hJztcbmltcG9ydCB7IGdldERhdGEsIHRvQm9vbCB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1zZWxlY3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2VsZWN0LndpZGdldC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0V2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGk6IGFueTtcbiAgZGF0YTogU0ZTY2hlbWFFbnVtW107XG4gIF92YWx1ZTogYW55O1xuICBoYXNHcm91cCA9IGZhbHNlO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaSA9IHtcbiAgICAgIGF1dG9DbGVhclNlYXJjaFZhbHVlOiB0b0Jvb2wodGhpcy51aS5hdXRvQ2xlYXJTZWFyY2hWYWx1ZSwgdHJ1ZSksXG4gICAgICBhbGxvd0NsZWFyOiB0aGlzLnVpLmFsbG93Q2xlYXIsXG4gICAgICBhdXRvRm9jdXM6IHRvQm9vbCh0aGlzLnVpLmF1dG9Gb2N1cywgZmFsc2UpLFxuICAgICAgZHJvcGRvd25DbGFzc05hbWU6IHRoaXMudWkuZHJvcGRvd25DbGFzc05hbWUgfHwgbnVsbCxcbiAgICAgIGRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aDogdG9Cb29sKHRoaXMudWkuZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoLCB0cnVlKSxcbiAgICAgIHNlcnZlclNlYXJjaDogdG9Cb29sKHRoaXMudWkuc2VydmVyU2VhcmNoLCBmYWxzZSksXG4gICAgICBtYXhNdWx0aXBsZUNvdW50OiB0aGlzLnVpLm1heE11bHRpcGxlQ291bnQgfHwgSW5maW5pdHksXG4gICAgICBtb2RlOiB0aGlzLnVpLm1vZGUgfHwgJ2RlZmF1bHQnLFxuICAgICAgbm90Rm91bmRDb250ZW50OiB0aGlzLnVpLm5vdEZvdW5kQ29udGVudCxcbiAgICAgIHNob3dTZWFyY2g6IHRvQm9vbCh0aGlzLnVpLnNob3dTZWFyY2gsIHRydWUpLFxuICAgICAgdG9rZW5TZXBhcmF0b3JzOiB0aGlzLnVpLnRva2VuU2VwYXJhdG9ycyB8fCBbXSxcbiAgICAgIG1heFRhZ0NvdW50OiB0aGlzLnVpLm1heFRhZ0NvdW50IHx8IHVuZGVmaW5lZCxcbiAgICB9O1xuICB9XG5cbiAgcmVzZXQodmFsdWU6IFNGVmFsdWUpIHtcbiAgICBnZXREYXRhKHRoaXMuc2NoZW1hLCB0aGlzLnVpLCB0aGlzLmZvcm1Qcm9wZXJ0eS5mb3JtRGF0YSkuc3Vic2NyaWJlKGxpc3QgPT4ge1xuICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMuZGF0YSA9IGxpc3Q7XG4gICAgICB0aGlzLmhhc0dyb3VwID0gbGlzdC5maWx0ZXIodyA9PiB3Lmdyb3VwID09PSB0cnVlKS5sZW5ndGggPiAwO1xuICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gIH1cblxuICBjaGFuZ2UodmFsdWVzOiBTRlZhbHVlKSB7XG4gICAgaWYgKHRoaXMudWkuY2hhbmdlKSB7XG4gICAgICB0aGlzLnVpLmNoYW5nZSh2YWx1ZXMpO1xuICAgIH1cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlcyk7XG4gIH1cblxuICBvcGVuQ2hhbmdlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMudWkub3BlbkNoYW5nZSkge1xuICAgICAgdGhpcy51aS5vcGVuQ2hhbmdlKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBzZWFyY2hDaGFuZ2UodGV4dDogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMudWkub25TZWFyY2gpIHtcbiAgICAgIHRoaXMudWkub25TZWFyY2godGV4dCkudGhlbigocmVzOiBTRlNjaGVtYUVudW1bXSkgPT4ge1xuICAgICAgICB0aGlzLmRhdGEgPSByZXM7XG4gICAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgc2Nyb2xsVG9Cb3R0b20oKSB7XG4gICAgaWYgKHRoaXMudWkuc2Nyb2xsVG9Cb3R0b20pIHtcbiAgICAgIHRoaXMudWkuc2Nyb2xsVG9Cb3R0b20oKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==