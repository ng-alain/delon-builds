/**
 * @fileoverview added by tsickle
 * Generated from: src/widgets/mention/mention.widget.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { NzMentionComponent } from 'ng-zorro-antd/mention';
import { map, tap } from 'rxjs/operators';
import { getData, getEnum } from '../../utils';
import { ControlUIWidget } from '../../widget';
export class MentionWidget extends ControlUIWidget {
    constructor() {
        super(...arguments);
        this.data = [];
        this.loading = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        const { valueWith, notFoundContent, placement, prefix, autosize } = this.ui;
        this.i = {
            valueWith: valueWith || ((/**
             * @param {?} item
             * @return {?}
             */
            item => item.label)),
            notFoundContent: notFoundContent || '无匹配结果，轻敲空格完成输入',
            placement: placement || 'bottom',
            prefix: prefix || '@',
            autosize: typeof autosize === 'undefined' ? true : this.ui.autosize,
        };
        const { minimum, maximum } = this.schema;
        /** @type {?} */
        const min = typeof minimum !== 'undefined' ? minimum : -1;
        /** @type {?} */
        const max = typeof maximum !== 'undefined' ? maximum : -1;
        if (!this.ui.validator && (min !== -1 || max !== -1)) {
            this.ui.validator = (/** @type {?} */ (((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const count = this.mentionChild.getMentions().length;
                if (min !== -1 && count < min) {
                    return [{ keyword: 'mention', message: `最少提及 ${min} 次` }];
                }
                if (max !== -1 && count > max) {
                    return [{ keyword: 'mention', message: `最多提及 ${max} 次` }];
                }
                return null;
            }))));
        }
    }
    /**
     * @param {?} _value
     * @return {?}
     */
    reset(_value) {
        getData(this.schema, this.ui, null).subscribe((/**
         * @param {?} list
         * @return {?}
         */
        list => {
            this.data = list;
            this.detectChanges();
        }));
    }
    /**
     * @param {?} options
     * @return {?}
     */
    _select(options) {
        if (this.ui.select)
            this.ui.select(options);
    }
    /**
     * @param {?} option
     * @return {?}
     */
    _search(option) {
        if (typeof this.ui.loadData !== 'function')
            return;
        this.loading = true;
        this.ui
            .loadData(option)
            .pipe(tap((/**
         * @return {?}
         */
        () => (this.loading = false))), map((/**
         * @param {?} res
         * @return {?}
         */
        res => getEnum(res, null, (/** @type {?} */ (this.schema.readOnly))))))
            .subscribe((/**
         * @param {?} res
         * @return {?}
         */
        res => {
            this.data = res;
            this.detectChanges(true);
        }));
    }
}
MentionWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-mention',
                template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <nz-mention\n    #mentions\n    [nzSuggestions]=\"data\"\n    [nzValueWith]=\"i.valueWith\"\n    [nzLoading]=\"loading\"\n    [nzNotFoundContent]=\"i.notFoundContent\"\n    [nzPlacement]=\"i.placement\"\n    [nzPrefix]=\"i.prefix\"\n    (nzOnSelect)=\"_select($event)\"\n    (nzOnSearchChange)=\"_search($event)\"\n  >\n    <input\n      *ngIf=\"ui.inputStyle !== 'textarea'\"\n      nzMentionTrigger\n      nz-input\n      [attr.id]=\"id\"\n      [disabled]=\"disabled\"\n      [attr.disabled]=\"disabled\"\n      [nzSize]=\"ui.size\"\n      [ngModel]=\"value\"\n      (ngModelChange)=\"setValue($event)\"\n      [attr.maxLength]=\"schema.maxLength || null\"\n      [attr.placeholder]=\"ui.placeholder\"\n      autocomplete=\"off\"\n    />\n    <textarea\n      *ngIf=\"ui.inputStyle === 'textarea'\"\n      nzMentionTrigger\n      nz-input\n      [attr.id]=\"id\"\n      [disabled]=\"disabled\"\n      [attr.disabled]=\"disabled\"\n      [nzSize]=\"ui.size\"\n      [ngModel]=\"value\"\n      (ngModelChange)=\"setValue($event)\"\n      [attr.maxLength]=\"schema.maxLength || null\"\n      [attr.placeholder]=\"ui.placeholder\"\n      [nzAutosize]=\"i.autosize\"\n    >\n    </textarea>\n  </nz-mention>\n</sf-item-wrap>\n",
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None
            }] }
];
MentionWidget.propDecorators = {
    mentionChild: [{ type: ViewChild, args: ['mentions', { static: true },] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudGlvbi53aWRnZXQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS8iLCJzb3VyY2VzIjpbInNyYy93aWRnZXRzL21lbnRpb24vbWVudGlvbi53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQXdCLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakYsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUcxQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBUy9DLE1BQU0sT0FBTyxhQUFjLFNBQVEsZUFBc0M7SUFOekU7O1FBUUUsU0FBSSxHQUFtQixFQUFFLENBQUM7UUFFMUIsWUFBTyxHQUFHLEtBQUssQ0FBQztJQXdEbEIsQ0FBQzs7OztJQXREQyxRQUFRO2NBQ0EsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUU7UUFDM0UsSUFBSSxDQUFDLENBQUMsR0FBRztZQUNQLFNBQVMsRUFBRSxTQUFTLElBQUk7Ozs7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUM7WUFDNUMsZUFBZSxFQUFFLGVBQWUsSUFBSSxnQkFBZ0I7WUFDcEQsU0FBUyxFQUFFLFNBQVMsSUFBSSxRQUFRO1lBQ2hDLE1BQU0sRUFBRSxNQUFNLElBQUksR0FBRztZQUNyQixRQUFRLEVBQUUsT0FBTyxRQUFRLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsUUFB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RSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Ozs7Ozs7SUFBdkMscUNBQWtGOztJQUNsRiw2QkFBMEI7O0lBQzFCLDBCQUFPOztJQUNQLGdDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNZW50aW9uT25TZWFyY2hUeXBlcywgTnpNZW50aW9uQ29tcG9uZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC9tZW50aW9uJztcbmltcG9ydCB7IG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU0ZWYWx1ZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBTRlNjaGVtYUVudW0gfSBmcm9tICcuLi8uLi9zY2hlbWEnO1xuaW1wb3J0IHsgZ2V0RGF0YSwgZ2V0RW51bSB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IENvbnRyb2xVSVdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5pbXBvcnQgeyBTRk1lbnRpb25XaWRnZXRTY2hlbWEgfSBmcm9tICcuL3NjaGVtYSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLW1lbnRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vbWVudGlvbi53aWRnZXQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBNZW50aW9uV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFVJV2lkZ2V0PFNGTWVudGlvbldpZGdldFNjaGVtYT4gaW1wbGVtZW50cyBPbkluaXQge1xuICBAVmlld0NoaWxkKCdtZW50aW9ucycsIHsgc3RhdGljOiB0cnVlIH0pIHByaXZhdGUgbWVudGlvbkNoaWxkOiBOek1lbnRpb25Db21wb25lbnQ7XG4gIGRhdGE6IFNGU2NoZW1hRW51bVtdID0gW107XG4gIGk6IGFueTtcbiAgbG9hZGluZyA9IGZhbHNlO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgdmFsdWVXaXRoLCBub3RGb3VuZENvbnRlbnQsIHBsYWNlbWVudCwgcHJlZml4LCBhdXRvc2l6ZSB9ID0gdGhpcy51aTtcbiAgICB0aGlzLmkgPSB7XG4gICAgICB2YWx1ZVdpdGg6IHZhbHVlV2l0aCB8fCAoaXRlbSA9PiBpdGVtLmxhYmVsKSxcbiAgICAgIG5vdEZvdW5kQ29udGVudDogbm90Rm91bmRDb250ZW50IHx8ICfml6DljLnphY3nu5PmnpzvvIzovbvmlbLnqbrmoLzlrozmiJDovpPlhaUnLFxuICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnQgfHwgJ2JvdHRvbScsXG4gICAgICBwcmVmaXg6IHByZWZpeCB8fCAnQCcsXG4gICAgICBhdXRvc2l6ZTogdHlwZW9mIGF1dG9zaXplID09PSAndW5kZWZpbmVkJyA/IHRydWUgOiB0aGlzLnVpLmF1dG9zaXplLFxuICAgIH07XG5cbiAgICBjb25zdCB7IG1pbmltdW0sIG1heGltdW0gfSA9IHRoaXMuc2NoZW1hO1xuICAgIGNvbnN0IG1pbiA9IHR5cGVvZiBtaW5pbXVtICE9PSAndW5kZWZpbmVkJyA/IG1pbmltdW0gOiAtMTtcbiAgICBjb25zdCBtYXggPSB0eXBlb2YgbWF4aW11bSAhPT0gJ3VuZGVmaW5lZCcgPyBtYXhpbXVtIDogLTE7XG5cbiAgICBpZiAoIXRoaXMudWkudmFsaWRhdG9yICYmIChtaW4gIT09IC0xIHx8IG1heCAhPT0gLTEpKSB7XG4gICAgICB0aGlzLnVpLnZhbGlkYXRvciA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvdW50ID0gdGhpcy5tZW50aW9uQ2hpbGQuZ2V0TWVudGlvbnMoKS5sZW5ndGg7XG4gICAgICAgIGlmIChtaW4gIT09IC0xICYmIGNvdW50IDwgbWluKSB7XG4gICAgICAgICAgcmV0dXJuIFt7IGtleXdvcmQ6ICdtZW50aW9uJywgbWVzc2FnZTogYOacgOWwkeaPkOWPiiAke21pbn0g5qyhYCB9XTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWF4ICE9PSAtMSAmJiBjb3VudCA+IG1heCkge1xuICAgICAgICAgIHJldHVybiBbeyBrZXl3b3JkOiAnbWVudGlvbicsIG1lc3NhZ2U6IGDmnIDlpJrmj5Dlj4ogJHttYXh9IOasoWAgfV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9KSBhcyBhbnk7XG4gICAgfVxuICB9XG5cbiAgcmVzZXQoX3ZhbHVlOiBTRlZhbHVlKTogdm9pZCB7XG4gICAgZ2V0RGF0YSh0aGlzLnNjaGVtYSwgdGhpcy51aSwgbnVsbCkuc3Vic2NyaWJlKGxpc3QgPT4ge1xuICAgICAgdGhpcy5kYXRhID0gbGlzdDtcbiAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuICB9XG5cbiAgX3NlbGVjdChvcHRpb25zOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodGhpcy51aS5zZWxlY3QpIHRoaXMudWkuc2VsZWN0KG9wdGlvbnMpO1xuICB9XG5cbiAgX3NlYXJjaChvcHRpb246IE1lbnRpb25PblNlYXJjaFR5cGVzKTogdm9pZCB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLnVpLmxvYWREYXRhICE9PSAnZnVuY3Rpb24nKSByZXR1cm47XG5cbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMudWlcbiAgICAgIC5sb2FkRGF0YShvcHRpb24pXG4gICAgICAucGlwZShcbiAgICAgICAgdGFwKCgpID0+ICh0aGlzLmxvYWRpbmcgPSBmYWxzZSkpLFxuICAgICAgICBtYXAocmVzID0+IGdldEVudW0ocmVzLCBudWxsLCB0aGlzLnNjaGVtYS5yZWFkT25seSEpKSxcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgdGhpcy5kYXRhID0gcmVzO1xuICAgICAgICB0aGlzLmRldGVjdENoYW5nZXModHJ1ZSk7XG4gICAgICB9KTtcbiAgfVxufVxuIl19