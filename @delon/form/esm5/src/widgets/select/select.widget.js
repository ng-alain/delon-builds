/**
 * @fileoverview added by tsickle
 * Generated from: src/widgets/select/select.widget.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __extends } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { getData, toBool } from '../../utils';
import { ControlUIWidget } from '../../widget';
var SelectWidget = /** @class */ (function (_super) {
    __extends(SelectWidget, _super);
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
        getData(this.schema, this.ui, value).subscribe((/**
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
        this.setValue(values == null ? undefined : values);
    };
    /**
     * @param {?} status
     * @return {?}
     */
    SelectWidget.prototype.openChange = /**
     * @param {?} status
     * @return {?}
     */
    function (status) {
        if (this.ui.openChange) {
            this.ui.openChange(status);
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
}(ControlUIWidget));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9mb3JtLyIsInNvdXJjZXMiOlsic3JjL3dpZGdldHMvc2VsZWN0L3NlbGVjdC53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUdyRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM5QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRy9DO0lBTWtDLGdDQUFxQztJQU52RTtRQUFBLHFFQXdGQztRQTlFQyxjQUFRLEdBQUcsS0FBSyxDQUFDOztJQThFbkIsQ0FBQzs7Ozs7O0lBNUVTLGlDQUFVOzs7OztJQUFsQixVQUFtQixJQUFvQjtRQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU07Ozs7UUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxLQUFLLEtBQUssSUFBSSxFQUFoQixDQUFnQixFQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUN4RSxDQUFDOzs7O0lBRUQsK0JBQVE7OztJQUFSO1FBQ1EsSUFBQSxZQWNLLEVBYlQsOENBQW9CLEVBQ3BCLDBCQUFVLEVBQ1Ysd0JBQVMsRUFDVCx3Q0FBaUIsRUFDakIsc0RBQXdCLEVBQ3hCLDhCQUFZLEVBQ1osc0NBQWdCLEVBQ2hCLGNBQUksRUFDSixvQ0FBZSxFQUNmLDBCQUFVLEVBQ1Ysb0NBQWUsRUFDZiw0QkFBVyxFQUNYLDRCQUNTO1FBQ1gsSUFBSSxDQUFDLENBQUMsR0FBRztZQUNQLG9CQUFvQixFQUFFLE1BQU0sQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUM7WUFDeEQsVUFBVSxZQUFBO1lBQ1YsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDO1lB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SUFDWixnQ0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNGVmFsdWUgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgU0ZTY2hlbWFFbnVtIH0gZnJvbSAnLi4vLi4vc2NoZW1hJztcbmltcG9ydCB7IGdldERhdGEsIHRvQm9vbCB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IENvbnRyb2xVSVdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5pbXBvcnQgeyBTRlNlbGVjdFdpZGdldFNjaGVtYSB9IGZyb20gJy4vc2NoZW1hJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2Ytc2VsZWN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlbGVjdC53aWRnZXQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RXaWRnZXQgZXh0ZW5kcyBDb250cm9sVUlXaWRnZXQ8U0ZTZWxlY3RXaWRnZXRTY2hlbWE+IGltcGxlbWVudHMgT25Jbml0IHtcbiAgaTogYW55O1xuICBkYXRhOiBTRlNjaGVtYUVudW1bXTtcbiAgX3ZhbHVlOiBhbnk7XG4gIGhhc0dyb3VwID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBjaGVja0dyb3VwKGxpc3Q6IFNGU2NoZW1hRW51bVtdKTogdm9pZCB7XG4gICAgdGhpcy5oYXNHcm91cCA9IChsaXN0IHx8IFtdKS5maWx0ZXIodyA9PiB3Lmdyb3VwID09PSB0cnVlKS5sZW5ndGggPiAwO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3Qge1xuICAgICAgYXV0b0NsZWFyU2VhcmNoVmFsdWUsXG4gICAgICBhbGxvd0NsZWFyLFxuICAgICAgYXV0b0ZvY3VzLFxuICAgICAgZHJvcGRvd25DbGFzc05hbWUsXG4gICAgICBkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGgsXG4gICAgICBzZXJ2ZXJTZWFyY2gsXG4gICAgICBtYXhNdWx0aXBsZUNvdW50LFxuICAgICAgbW9kZSxcbiAgICAgIG5vdEZvdW5kQ29udGVudCxcbiAgICAgIHNob3dTZWFyY2gsXG4gICAgICB0b2tlblNlcGFyYXRvcnMsXG4gICAgICBtYXhUYWdDb3VudCxcbiAgICAgIGNvbXBhcmVXaXRoLFxuICAgIH0gPSB0aGlzLnVpO1xuICAgIHRoaXMuaSA9IHtcbiAgICAgIGF1dG9DbGVhclNlYXJjaFZhbHVlOiB0b0Jvb2woYXV0b0NsZWFyU2VhcmNoVmFsdWUsIHRydWUpLFxuICAgICAgYWxsb3dDbGVhcixcbiAgICAgIGF1dG9Gb2N1czogdG9Cb29sKGF1dG9Gb2N1cywgZmFsc2UpLFxuICAgICAgZHJvcGRvd25DbGFzc05hbWU6IGRyb3Bkb3duQ2xhc3NOYW1lIHx8IG51bGwsXG4gICAgICBkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGg6IHRvQm9vbChkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGgsIHRydWUpLFxuICAgICAgc2VydmVyU2VhcmNoOiB0b0Jvb2woc2VydmVyU2VhcmNoLCBmYWxzZSksXG4gICAgICBtYXhNdWx0aXBsZUNvdW50OiBtYXhNdWx0aXBsZUNvdW50IHx8IEluZmluaXR5LFxuICAgICAgbW9kZTogbW9kZSB8fCAnZGVmYXVsdCcsXG4gICAgICBub3RGb3VuZENvbnRlbnQsXG4gICAgICBzaG93U2VhcmNoOiB0b0Jvb2woc2hvd1NlYXJjaCwgdHJ1ZSksXG4gICAgICB0b2tlblNlcGFyYXRvcnM6IHRva2VuU2VwYXJhdG9ycyB8fCBbXSxcbiAgICAgIG1heFRhZ0NvdW50OiBtYXhUYWdDb3VudCB8fCB1bmRlZmluZWQsXG4gICAgICBjb21wYXJlV2l0aDogY29tcGFyZVdpdGggfHwgKChvMTogYW55LCBvMjogYW55KSA9PiBvMSA9PT0gbzIpLFxuICAgIH07XG4gIH1cblxuICByZXNldCh2YWx1ZTogU0ZWYWx1ZSkge1xuICAgIGdldERhdGEodGhpcy5zY2hlbWEsIHRoaXMudWksIHZhbHVlKS5zdWJzY3JpYmUobGlzdCA9PiB7XG4gICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5kYXRhID0gbGlzdDtcbiAgICAgIHRoaXMuY2hlY2tHcm91cChsaXN0KTtcbiAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuICB9XG5cbiAgY2hhbmdlKHZhbHVlczogU0ZWYWx1ZSkge1xuICAgIGlmICh0aGlzLnVpLmNoYW5nZSkge1xuICAgICAgdGhpcy51aS5jaGFuZ2UodmFsdWVzKTtcbiAgICB9XG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZXMgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IHZhbHVlcyk7XG4gIH1cblxuICBvcGVuQ2hhbmdlKHN0YXR1czogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLnVpLm9wZW5DaGFuZ2UpIHtcbiAgICAgIHRoaXMudWkub3BlbkNoYW5nZShzdGF0dXMpO1xuICAgIH1cbiAgfVxuXG4gIHNlYXJjaENoYW5nZSh0ZXh0OiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy51aS5vblNlYXJjaCkge1xuICAgICAgdGhpcy51aS5vblNlYXJjaCh0ZXh0KS50aGVuKChsaXN0OiBTRlNjaGVtYUVudW1bXSkgPT4ge1xuICAgICAgICB0aGlzLmRhdGEgPSBsaXN0O1xuICAgICAgICB0aGlzLmNoZWNrR3JvdXAobGlzdCk7XG4gICAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgc2Nyb2xsVG9Cb3R0b20oKSB7XG4gICAgaWYgKHRoaXMudWkuc2Nyb2xsVG9Cb3R0b20pIHtcbiAgICAgIHRoaXMudWkuc2Nyb2xsVG9Cb3R0b20oKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==