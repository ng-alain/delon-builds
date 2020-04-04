/**
 * @fileoverview added by tsickle
 * Generated from: src/widgets/mention/mention.widget.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __extends } from "tslib";
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { NzMentionComponent } from 'ng-zorro-antd/mention';
import { map, tap } from 'rxjs/operators';
import { getData, getEnum } from '../../utils';
import { ControlUIWidget } from '../../widget';
var MentionWidget = /** @class */ (function (_super) {
    __extends(MentionWidget, _super);
    function MentionWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.data = [];
        _this.loading = false;
        return _this;
    }
    /**
     * @return {?}
     */
    MentionWidget.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var _a = this.ui, valueWith = _a.valueWith, notFoundContent = _a.notFoundContent, placement = _a.placement, prefix = _a.prefix, autosize = _a.autosize;
        this.i = {
            valueWith: valueWith || ((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.label; })),
            notFoundContent: notFoundContent || '无匹配结果，轻敲空格完成输入',
            placement: placement || 'bottom',
            prefix: prefix || '@',
            autosize: typeof autosize === 'undefined' ? true : this.ui.autosize,
        };
        var _b = this.schema, minimum = _b.minimum, maximum = _b.maximum;
        /** @type {?} */
        var min = typeof minimum !== 'undefined' ? minimum : -1;
        /** @type {?} */
        var max = typeof maximum !== 'undefined' ? maximum : -1;
        if (!this.ui.validator && (min !== -1 || max !== -1)) {
            this.ui.validator = (/** @type {?} */ (((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var count = _this.mentionChild.getMentions().length;
                if (min !== -1 && count < min) {
                    return [{ keyword: 'mention', message: "\u6700\u5C11\u63D0\u53CA " + min + " \u6B21" }];
                }
                if (max !== -1 && count > max) {
                    return [{ keyword: 'mention', message: "\u6700\u591A\u63D0\u53CA " + max + " \u6B21" }];
                }
                return null;
            }))));
        }
    };
    /**
     * @param {?} _value
     * @return {?}
     */
    MentionWidget.prototype.reset = /**
     * @param {?} _value
     * @return {?}
     */
    function (_value) {
        var _this = this;
        getData(this.schema, this.ui, null).subscribe((/**
         * @param {?} list
         * @return {?}
         */
        function (list) {
            _this.data = list;
            _this.detectChanges();
        }));
    };
    /**
     * @param {?} options
     * @return {?}
     */
    MentionWidget.prototype._select = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        if (this.ui.select)
            this.ui.select(options);
    };
    /**
     * @param {?} option
     * @return {?}
     */
    MentionWidget.prototype._search = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        var _this = this;
        if (typeof this.ui.loadData !== 'function')
            return;
        this.loading = true;
        this.ui
            .loadData(option)
            .pipe(tap((/**
         * @return {?}
         */
        function () { return (_this.loading = false); })), map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return getEnum(res, null, (/** @type {?} */ (_this.schema.readOnly))); })))
            .subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            _this.data = res;
            _this.detectChanges(true);
        }));
    };
    MentionWidget.decorators = [
        { type: Component, args: [{
                    selector: 'sf-mention',
                    template: "<sf-item-wrap [id]=\"id\"\n              [schema]=\"schema\"\n              [ui]=\"ui\"\n              [showError]=\"showError\"\n              [error]=\"error\"\n              [showTitle]=\"schema.title\">\n  <nz-mention #mentions\n              [nzSuggestions]=\"data\"\n              [nzValueWith]=\"i.valueWith\"\n              [nzLoading]=\"loading\"\n              [nzNotFoundContent]=\"i.notFoundContent\"\n              [nzPlacement]=\"i.placement\"\n              [nzPrefix]=\"i.prefix\"\n              (nzOnSelect)=\"_select($event)\"\n              (nzOnSearchChange)=\"_search($event)\">\n      <input *ngIf=\"ui.inputStyle !== 'textarea'\" nzMentionTrigger\n             nz-input\n             [attr.id]=\"id\"\n             [disabled]=\"disabled\"\n             [attr.disabled]=\"disabled\"\n             [nzSize]=\"ui.size\"\n             [ngModel]=\"value\"\n             (ngModelChange)=\"setValue($event)\"\n             [attr.maxLength]=\"schema.maxLength || null\"\n             [attr.placeholder]=\"ui.placeholder\"\n             autocomplete=\"off\" />\n      <textarea *ngIf=\"ui.inputStyle === 'textarea'\" nzMentionTrigger\n                nz-input\n                [attr.id]=\"id\"\n                [disabled]=\"disabled\"\n                [attr.disabled]=\"disabled\"\n                [nzSize]=\"ui.size\"\n                [ngModel]=\"value\"\n                (ngModelChange)=\"setValue($event)\"\n                [attr.maxLength]=\"schema.maxLength || null\"\n                [attr.placeholder]=\"ui.placeholder\"\n                [nzAutosize]=\"i.autosize\">\n        </textarea>\n  </nz-mention>\n</sf-item-wrap>\n",
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    MentionWidget.propDecorators = {
        mentionChild: [{ type: ViewChild, args: ['mentions', { static: true },] }]
    };
    return MentionWidget;
}(ControlUIWidget));
export { MentionWidget };
if (false) {
    /**
     * @type {?}
     * @private
     */
    MentionWidget.prototype.mentionChild;
    /** @type {?} */
    MentionWidget.prototype.data;
    /** @type {?} */
    MentionWidget.prototype.i;
    /** @type {?} */
    MentionWidget.prototype.loading;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudGlvbi53aWRnZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vZm9ybS8iLCJzb3VyY2VzIjpbInNyYy93aWRnZXRzL21lbnRpb24vbWVudGlvbi53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEYsT0FBTyxFQUF3QixrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pGLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHMUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUcvQztJQU1tQyxpQ0FBc0M7SUFOekU7UUFBQSxxRUFrRUM7UUExREMsVUFBSSxHQUFtQixFQUFFLENBQUM7UUFFMUIsYUFBTyxHQUFHLEtBQUssQ0FBQzs7SUF3RGxCLENBQUM7Ozs7SUF0REMsZ0NBQVE7OztJQUFSO1FBQUEsaUJBMEJDO1FBekJPLElBQUEsWUFBcUUsRUFBbkUsd0JBQVMsRUFBRSxvQ0FBZSxFQUFFLHdCQUFTLEVBQUUsa0JBQU0sRUFBRSxzQkFBb0I7UUFDM0UsSUFBSSxDQUFDLENBQUMsR0FBRztZQUNQLFNBQVMsRUFBRSxTQUFTLElBQUk7Ozs7WUFBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxLQUFLLEVBQVYsQ0FBVSxFQUFDO1lBQzVDLGVBQWUsRUFBRSxlQUFlLElBQUksZ0JBQWdCO1lBQ3BELFNBQVMsRUFBRSxTQUFTLElBQUksUUFBUTtZQUNoQyxNQUFNLEVBQUUsTUFBTSxJQUFJLEdBQUc7WUFDckIsUUFBUSxFQUFFLE9BQU8sUUFBUSxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENB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YSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3RDOzs7K0JBRUUsU0FBUyxTQUFDLFVBQVUsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7O0lBMkR6QyxvQkFBQztDQUFBLEFBbEVELENBTW1DLGVBQWUsR0E0RGpEO1NBNURZLGFBQWE7Ozs7OztJQUN4QixxQ0FBa0Y7O0lBQ2xGLDZCQUEwQjs7SUFDMUIsMEJBQU87O0lBQ1AsZ0NBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1lbnRpb25PblNlYXJjaFR5cGVzLCBOek1lbnRpb25Db21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL21lbnRpb24nO1xuaW1wb3J0IHsgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTRlZhbHVlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlJztcbmltcG9ydCB7IFNGU2NoZW1hRW51bSB9IGZyb20gJy4uLy4uL3NjaGVtYSc7XG5pbXBvcnQgeyBnZXREYXRhLCBnZXRFbnVtIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHsgQ29udHJvbFVJV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcbmltcG9ydCB7IFNGTWVudGlvbldpZGdldFNjaGVtYSB9IGZyb20gJy4vc2NoZW1hJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtbWVudGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9tZW50aW9uLndpZGdldC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIE1lbnRpb25XaWRnZXQgZXh0ZW5kcyBDb250cm9sVUlXaWRnZXQ8U0ZNZW50aW9uV2lkZ2V0U2NoZW1hPiBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBWaWV3Q2hpbGQoJ21lbnRpb25zJywgeyBzdGF0aWM6IHRydWUgfSkgcHJpdmF0ZSBtZW50aW9uQ2hpbGQ6IE56TWVudGlvbkNvbXBvbmVudDtcbiAgZGF0YTogU0ZTY2hlbWFFbnVtW10gPSBbXTtcbiAgaTogYW55O1xuICBsb2FkaW5nID0gZmFsc2U7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3QgeyB2YWx1ZVdpdGgsIG5vdEZvdW5kQ29udGVudCwgcGxhY2VtZW50LCBwcmVmaXgsIGF1dG9zaXplIH0gPSB0aGlzLnVpO1xuICAgIHRoaXMuaSA9IHtcbiAgICAgIHZhbHVlV2l0aDogdmFsdWVXaXRoIHx8IChpdGVtID0+IGl0ZW0ubGFiZWwpLFxuICAgICAgbm90Rm91bmRDb250ZW50OiBub3RGb3VuZENvbnRlbnQgfHwgJ+aXoOWMuemFjee7k+aenO+8jOi9u+aVsuepuuagvOWujOaIkOi+k+WFpScsXG4gICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudCB8fCAnYm90dG9tJyxcbiAgICAgIHByZWZpeDogcHJlZml4IHx8ICdAJyxcbiAgICAgIGF1dG9zaXplOiB0eXBlb2YgYXV0b3NpemUgPT09ICd1bmRlZmluZWQnID8gdHJ1ZSA6IHRoaXMudWkuYXV0b3NpemUsXG4gICAgfTtcblxuICAgIGNvbnN0IHsgbWluaW11bSwgbWF4aW11bSB9ID0gdGhpcy5zY2hlbWE7XG4gICAgY29uc3QgbWluID0gdHlwZW9mIG1pbmltdW0gIT09ICd1bmRlZmluZWQnID8gbWluaW11bSA6IC0xO1xuICAgIGNvbnN0IG1heCA9IHR5cGVvZiBtYXhpbXVtICE9PSAndW5kZWZpbmVkJyA/IG1heGltdW0gOiAtMTtcblxuICAgIGlmICghdGhpcy51aS52YWxpZGF0b3IgJiYgKG1pbiAhPT0gLTEgfHwgbWF4ICE9PSAtMSkpIHtcbiAgICAgIHRoaXMudWkudmFsaWRhdG9yID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgY291bnQgPSB0aGlzLm1lbnRpb25DaGlsZC5nZXRNZW50aW9ucygpLmxlbmd0aDtcbiAgICAgICAgaWYgKG1pbiAhPT0gLTEgJiYgY291bnQgPCBtaW4pIHtcbiAgICAgICAgICByZXR1cm4gW3sga2V5d29yZDogJ21lbnRpb24nLCBtZXNzYWdlOiBg5pyA5bCR5o+Q5Y+KICR7bWlufSDmrKFgIH1dO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtYXggIT09IC0xICYmIGNvdW50ID4gbWF4KSB7XG4gICAgICAgICAgcmV0dXJuIFt7IGtleXdvcmQ6ICdtZW50aW9uJywgbWVzc2FnZTogYOacgOWkmuaPkOWPiiAke21heH0g5qyhYCB9XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0pIGFzIGFueTtcbiAgICB9XG4gIH1cblxuICByZXNldChfdmFsdWU6IFNGVmFsdWUpIHtcbiAgICBnZXREYXRhKHRoaXMuc2NoZW1hLCB0aGlzLnVpLCBudWxsKS5zdWJzY3JpYmUobGlzdCA9PiB7XG4gICAgICB0aGlzLmRhdGEgPSBsaXN0O1xuICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gIH1cblxuICBfc2VsZWN0KG9wdGlvbnM6IGFueSkge1xuICAgIGlmICh0aGlzLnVpLnNlbGVjdCkgdGhpcy51aS5zZWxlY3Qob3B0aW9ucyk7XG4gIH1cblxuICBfc2VhcmNoKG9wdGlvbjogTWVudGlvbk9uU2VhcmNoVHlwZXMpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMudWkubG9hZERhdGEgIT09ICdmdW5jdGlvbicpIHJldHVybjtcblxuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgdGhpcy51aVxuICAgICAgLmxvYWREYXRhKG9wdGlvbilcbiAgICAgIC5waXBlKFxuICAgICAgICB0YXAoKCkgPT4gKHRoaXMubG9hZGluZyA9IGZhbHNlKSksXG4gICAgICAgIG1hcChyZXMgPT4gZ2V0RW51bShyZXMsIG51bGwsIHRoaXMuc2NoZW1hLnJlYWRPbmx5ISkpLFxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICB0aGlzLmRhdGEgPSByZXM7XG4gICAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcyh0cnVlKTtcbiAgICAgIH0pO1xuICB9XG59XG4iXX0=