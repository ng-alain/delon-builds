/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { NzMentionComponent } from 'ng-zorro-antd/mention';
import { map, tap } from 'rxjs/operators';
import { getData, getEnum } from '../../utils';
import { ControlWidget } from '../../widget';
export class MentionWidget extends ControlWidget {
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
        /** @type {?} */
        const min = typeof this.schema.minimum !== 'undefined' ? this.schema.minimum : -1;
        /** @type {?} */
        const max = typeof this.schema.maximum !== 'undefined' ? this.schema.maximum : -1;
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
        ((/** @type {?} */ (this.ui.loadData(option))))
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
            this.cd.detectChanges();
        }));
    }
}
MentionWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-mention',
                template: "<sf-item-wrap [id]=\"id\"\n              [schema]=\"schema\"\n              [ui]=\"ui\"\n              [showError]=\"showError\"\n              [error]=\"error\"\n              [showTitle]=\"schema.title\">\n  <nz-mention #mentions\n              [nzSuggestions]=\"data\"\n              [nzValueWith]=\"i.valueWith\"\n              [nzLoading]=\"loading\"\n              [nzNotFoundContent]=\"i.notFoundContent\"\n              [nzPlacement]=\"i.placement\"\n              [nzPrefix]=\"i.prefix\"\n              (nzOnSelect)=\"_select($event)\"\n              (nzOnSearchChange)=\"_search($event)\">\n    <ng-container *ngIf=\"ui.inputStyle !== 'textarea'\">\n      <input nzMentionTrigger\n             nz-input\n             [attr.id]=\"id\"\n             [disabled]=\"disabled\"\n             [attr.disabled]=\"disabled\"\n             [nzSize]=\"ui.size\"\n             [ngModel]=\"value\"\n             (ngModelChange)=\"setValue($event)\"\n             [attr.maxLength]=\"schema.maxLength || null\"\n             [attr.placeholder]=\"ui.placeholder\"\n             autocomplete=\"off\" />\n    </ng-container>\n\n    <ng-container *ngIf=\"ui.inputStyle === 'textarea'\">\n      <textarea nzMentionTrigger\n                nz-input\n                [attr.id]=\"id\"\n                [disabled]=\"disabled\"\n                [attr.disabled]=\"disabled\"\n                [nzSize]=\"ui.size\"\n                [ngModel]=\"value\"\n                (ngModelChange)=\"setValue($event)\"\n                [attr.maxLength]=\"schema.maxLength || null\"\n                [attr.placeholder]=\"ui.placeholder\"\n                [nzAutosize]=\"i.autosize\">\n        </textarea>\n    </ng-container>\n  </nz-mention>\n</sf-item-wrap>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudGlvbi53aWRnZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vZm9ybS8iLCJzb3VyY2VzIjpbInNyYy93aWRnZXRzL21lbnRpb24vbWVudGlvbi53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRTNELE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHMUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQVE3QyxNQUFNLE9BQU8sYUFBYyxTQUFRLGFBQWE7SUFOaEQ7O1FBUUUsU0FBSSxHQUFtQixFQUFFLENBQUM7UUFFMUIsWUFBTyxHQUFHLEtBQUssQ0FBQztJQXFEbEIsQ0FBQzs7OztJQW5EQyxRQUFRO2NBQ0EsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUU7UUFDM0UsSUFBSSxDQUFDLENBQUMsR0FBRztZQUNQLFNBQVMsRUFBRSxTQUFTLElBQUk7Ozs7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUM7WUFDNUMsZUFBZSxFQUFFLGVBQWUsSUFBSSxnQkFBZ0I7WUFDcEQsU0FBUyxFQUFFLFNBQVMsSUFBSSxRQUFRO1lBQ2hDLE1BQU0sRUFBRSxNQUFNLElBQUksR0FBRztZQUNyQixRQUFRLEVBQUUsT0FBTyxRQUFRLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUTtTQUNwRSxDQUFD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LElBQUk7YUFDdEM7OzsyQkFFRSxTQUFTLFNBQUMsVUFBVSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7Ozs7OztJQUF2QyxxQ0FBa0Y7O0lBQ2xGLDZCQUEwQjs7SUFDMUIsMEJBQU87O0lBQ1AsZ0NBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56TWVudGlvbkNvbXBvbmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQvbWVudGlvbic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFNGVmFsdWUgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgU0ZTY2hlbWFFbnVtLCBTRlNjaGVtYUVudW1UeXBlIH0gZnJvbSAnLi4vLi4vc2NoZW1hJztcbmltcG9ydCB7IGdldERhdGEsIGdldEVudW0gfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtbWVudGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9tZW50aW9uLndpZGdldC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIE1lbnRpb25XaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQFZpZXdDaGlsZCgnbWVudGlvbnMnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcml2YXRlIG1lbnRpb25DaGlsZDogTnpNZW50aW9uQ29tcG9uZW50O1xuICBkYXRhOiBTRlNjaGVtYUVudW1bXSA9IFtdO1xuICBpOiBhbnk7XG4gIGxvYWRpbmcgPSBmYWxzZTtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IHZhbHVlV2l0aCwgbm90Rm91bmRDb250ZW50LCBwbGFjZW1lbnQsIHByZWZpeCwgYXV0b3NpemUgfSA9IHRoaXMudWk7XG4gICAgdGhpcy5pID0ge1xuICAgICAgdmFsdWVXaXRoOiB2YWx1ZVdpdGggfHwgKGl0ZW0gPT4gaXRlbS5sYWJlbCksXG4gICAgICBub3RGb3VuZENvbnRlbnQ6IG5vdEZvdW5kQ29udGVudCB8fCAn5peg5Yy56YWN57uT5p6c77yM6L275pWy56m65qC85a6M5oiQ6L6T5YWlJyxcbiAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50IHx8ICdib3R0b20nLFxuICAgICAgcHJlZml4OiBwcmVmaXggfHwgJ0AnLFxuICAgICAgYXV0b3NpemU6IHR5cGVvZiBhdXRvc2l6ZSA9PT0gJ3VuZGVmaW5lZCcgPyB0cnVlIDogdGhpcy51aS5hdXRvc2l6ZSxcbiAgICB9O1xuICAgIGNvbnN0IG1pbiA9IHR5cGVvZiB0aGlzLnNjaGVtYS5taW5pbXVtICE9PSAndW5kZWZpbmVkJyA/IHRoaXMuc2NoZW1hLm1pbmltdW0gOiAtMTtcbiAgICBjb25zdCBtYXggPSB0eXBlb2YgdGhpcy5zY2hlbWEubWF4aW11bSAhPT0gJ3VuZGVmaW5lZCcgPyB0aGlzLnNjaGVtYS5tYXhpbXVtIDogLTE7XG5cbiAgICBpZiAoIXRoaXMudWkudmFsaWRhdG9yICYmIChtaW4gIT09IC0xIHx8IG1heCAhPT0gLTEpKSB7XG4gICAgICB0aGlzLnVpLnZhbGlkYXRvciA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvdW50ID0gdGhpcy5tZW50aW9uQ2hpbGQuZ2V0TWVudGlvbnMoKS5sZW5ndGg7XG4gICAgICAgIGlmIChtaW4gIT09IC0xICYmIGNvdW50IDwgbWluKSB7XG4gICAgICAgICAgcmV0dXJuIFt7IGtleXdvcmQ6ICdtZW50aW9uJywgbWVzc2FnZTogYOacgOWwkeaPkOWPiiAke21pbn0g5qyhYCB9XTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWF4ICE9PSAtMSAmJiBjb3VudCA+IG1heCkge1xuICAgICAgICAgIHJldHVybiBbeyBrZXl3b3JkOiAnbWVudGlvbicsIG1lc3NhZ2U6IGDmnIDlpJrmj5Dlj4ogJHttYXh9IOasoWAgfV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9KSBhcyBhbnk7XG4gICAgfVxuICB9XG5cbiAgcmVzZXQoX3ZhbHVlOiBTRlZhbHVlKSB7XG4gICAgZ2V0RGF0YSh0aGlzLnNjaGVtYSwgdGhpcy51aSwgbnVsbCkuc3Vic2NyaWJlKGxpc3QgPT4ge1xuICAgICAgdGhpcy5kYXRhID0gbGlzdDtcbiAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuICB9XG5cbiAgX3NlbGVjdChvcHRpb25zOiBhbnkpIHtcbiAgICBpZiAodGhpcy51aS5zZWxlY3QpIHRoaXMudWkuc2VsZWN0KG9wdGlvbnMpO1xuICB9XG5cbiAgX3NlYXJjaChvcHRpb246IGFueSkge1xuICAgIGlmICh0eXBlb2YgdGhpcy51aS5sb2FkRGF0YSAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuO1xuXG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAodGhpcy51aS5sb2FkRGF0YShvcHRpb24pIGFzIE9ic2VydmFibGU8U0ZTY2hlbWFFbnVtVHlwZVtdPilcbiAgICAgIC5waXBlKFxuICAgICAgICB0YXAoKCkgPT4gKHRoaXMubG9hZGluZyA9IGZhbHNlKSksXG4gICAgICAgIG1hcChyZXMgPT4gZ2V0RW51bShyZXMsIG51bGwsIHRoaXMuc2NoZW1hLnJlYWRPbmx5ISkpLFxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICB0aGlzLmRhdGEgPSByZXM7XG4gICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfSk7XG4gIH1cbn1cbiJdfQ==