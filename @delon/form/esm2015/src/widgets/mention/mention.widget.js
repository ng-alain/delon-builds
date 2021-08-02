import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { getData, getEnum } from '../../utils';
import { ControlUIWidget } from '../../widget';
export class MentionWidget extends ControlUIWidget {
    constructor() {
        super(...arguments);
        this.data = [];
        this.loading = false;
    }
    ngOnInit() {
        const { valueWith, notFoundContent, placement, prefix, autosize } = this.ui;
        this.i = {
            valueWith: valueWith || (item => item.label),
            notFoundContent: notFoundContent || '无匹配结果，轻敲空格完成输入',
            placement: placement || 'bottom',
            prefix: prefix || '@',
            autosize: typeof autosize === 'undefined' ? true : this.ui.autosize
        };
        const { minimum, maximum } = this.schema;
        const min = typeof minimum !== 'undefined' ? minimum : -1;
        const max = typeof maximum !== 'undefined' ? maximum : -1;
        if (!this.ui.validator && (min !== -1 || max !== -1)) {
            this.ui.validator = (() => {
                const count = this.mentionChild.getMentions().length;
                if (min !== -1 && count < min) {
                    return [{ keyword: 'mention', message: `最少提及 ${min} 次` }];
                }
                if (max !== -1 && count > max) {
                    return [{ keyword: 'mention', message: `最多提及 ${max} 次` }];
                }
                return null;
            });
        }
    }
    reset(_value) {
        getData(this.schema, this.ui, null).subscribe(list => {
            this.data = list;
            this.detectChanges();
        });
    }
    _select(options) {
        if (this.ui.select)
            this.ui.select(options);
    }
    _search(option) {
        if (typeof this.ui.loadData !== 'function')
            return;
        this.loading = true;
        this.ui
            .loadData(option)
            .pipe(tap(() => (this.loading = false)), map(res => getEnum(res, null, this.schema.readOnly)))
            .subscribe(res => {
            this.data = res;
            this.detectChanges(true);
        });
    }
}
MentionWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-mention',
                template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <nz-mention\n    #mentions\n    [nzSuggestions]=\"data\"\n    [nzValueWith]=\"i.valueWith\"\n    [nzLoading]=\"loading\"\n    [nzNotFoundContent]=\"i.notFoundContent\"\n    [nzPlacement]=\"i.placement\"\n    [nzPrefix]=\"i.prefix\"\n    (nzOnSelect)=\"_select($event)\"\n    (nzOnSearchChange)=\"_search($event)\"\n  >\n    <input\n      *ngIf=\"ui.inputStyle !== 'textarea'\"\n      nzMentionTrigger\n      nz-input\n      [attr.id]=\"id\"\n      [disabled]=\"disabled\"\n      [attr.disabled]=\"disabled\"\n      [nzSize]=\"ui.size!\"\n      [ngModel]=\"value\"\n      (ngModelChange)=\"setValue($event)\"\n      [attr.maxLength]=\"schema.maxLength || null\"\n      [attr.placeholder]=\"ui.placeholder\"\n      autocomplete=\"off\"\n    />\n    <textarea\n      *ngIf=\"ui.inputStyle === 'textarea'\"\n      nzMentionTrigger\n      nz-input\n      [attr.id]=\"id\"\n      [disabled]=\"disabled\"\n      [attr.disabled]=\"disabled\"\n      [nzSize]=\"ui.size!\"\n      [ngModel]=\"value\"\n      (ngModelChange)=\"setValue($event)\"\n      [attr.maxLength]=\"schema.maxLength || null\"\n      [attr.placeholder]=\"ui.placeholder\"\n      [nzAutosize]=\"i.autosize\"\n    >\n    </textarea>\n  </nz-mention>\n</sf-item-wrap>\n",
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None
            },] }
];
MentionWidget.propDecorators = {
    mentionChild: [{ type: ViewChild, args: ['mentions', { static: true },] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudGlvbi53aWRnZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3NyYy93aWRnZXRzL21lbnRpb24vbWVudGlvbi53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEYsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU8xQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBUy9DLE1BQU0sT0FBTyxhQUFjLFNBQVEsZUFBc0M7SUFOekU7O1FBUUUsU0FBSSxHQUFtQixFQUFFLENBQUM7UUFFMUIsWUFBTyxHQUFHLEtBQUssQ0FBQztJQXdEbEIsQ0FBQztJQXREQyxRQUFRO1FBQ04sTUFBTSxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQzVFLElBQUksQ0FBQyxDQUFDLEdBQUc7WUFDUCxTQUFTLEVBQUUsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQzVDLGVBQWUsRUFBRSxlQUFlLElBQUksZ0JBQWdCO1lBQ3BELFNBQVMsRUFBRSxTQUFTLElBQUksUUFBUTtZQUNoQyxNQUFNLEVBQUUsTUFBTSxJQUFJLEdBQUc7WUFDckIsUUFBUSxFQUFFLE9BQU8sUUFBUSxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVE7U0FDcEUsQ0FBQztRQUVGLE1BQU0sRUFBRSxPQUFPLEVBQUUs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ImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgTWVudGlvbk9uU2VhcmNoVHlwZXMsIE56TWVudGlvbkNvbXBvbmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQvbWVudGlvbic7XG5cbmltcG9ydCB7IFNGVmFsdWUgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgU0ZTY2hlbWFFbnVtIH0gZnJvbSAnLi4vLi4vc2NoZW1hJztcbmltcG9ydCB7IGdldERhdGEsIGdldEVudW0gfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgeyBDb250cm9sVUlXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuaW1wb3J0IHsgU0ZNZW50aW9uV2lkZ2V0U2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1tZW50aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21lbnRpb24ud2lkZ2V0Lmh0bWwnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBNZW50aW9uV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFVJV2lkZ2V0PFNGTWVudGlvbldpZGdldFNjaGVtYT4gaW1wbGVtZW50cyBPbkluaXQge1xuICBAVmlld0NoaWxkKCdtZW50aW9ucycsIHsgc3RhdGljOiB0cnVlIH0pIHByaXZhdGUgbWVudGlvbkNoaWxkOiBOek1lbnRpb25Db21wb25lbnQ7XG4gIGRhdGE6IFNGU2NoZW1hRW51bVtdID0gW107XG4gIGk6IE56U2FmZUFueTtcbiAgbG9hZGluZyA9IGZhbHNlO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgdmFsdWVXaXRoLCBub3RGb3VuZENvbnRlbnQsIHBsYWNlbWVudCwgcHJlZml4LCBhdXRvc2l6ZSB9ID0gdGhpcy51aTtcbiAgICB0aGlzLmkgPSB7XG4gICAgICB2YWx1ZVdpdGg6IHZhbHVlV2l0aCB8fCAoaXRlbSA9PiBpdGVtLmxhYmVsKSxcbiAgICAgIG5vdEZvdW5kQ29udGVudDogbm90Rm91bmRDb250ZW50IHx8ICfml6DljLnphY3nu5PmnpzvvIzovbvmlbLnqbrmoLzlrozmiJDovpPlhaUnLFxuICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnQgfHwgJ2JvdHRvbScsXG4gICAgICBwcmVmaXg6IHByZWZpeCB8fCAnQCcsXG4gICAgICBhdXRvc2l6ZTogdHlwZW9mIGF1dG9zaXplID09PSAndW5kZWZpbmVkJyA/IHRydWUgOiB0aGlzLnVpLmF1dG9zaXplXG4gICAgfTtcblxuICAgIGNvbnN0IHsgbWluaW11bSwgbWF4aW11bSB9ID0gdGhpcy5zY2hlbWE7XG4gICAgY29uc3QgbWluID0gdHlwZW9mIG1pbmltdW0gIT09ICd1bmRlZmluZWQnID8gbWluaW11bSA6IC0xO1xuICAgIGNvbnN0IG1heCA9IHR5cGVvZiBtYXhpbXVtICE9PSAndW5kZWZpbmVkJyA/IG1heGltdW0gOiAtMTtcblxuICAgIGlmICghdGhpcy51aS52YWxpZGF0b3IgJiYgKG1pbiAhPT0gLTEgfHwgbWF4ICE9PSAtMSkpIHtcbiAgICAgIHRoaXMudWkudmFsaWRhdG9yID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgY291bnQgPSB0aGlzLm1lbnRpb25DaGlsZC5nZXRNZW50aW9ucygpLmxlbmd0aDtcbiAgICAgICAgaWYgKG1pbiAhPT0gLTEgJiYgY291bnQgPCBtaW4pIHtcbiAgICAgICAgICByZXR1cm4gW3sga2V5d29yZDogJ21lbnRpb24nLCBtZXNzYWdlOiBg5pyA5bCR5o+Q5Y+KICR7bWlufSDmrKFgIH1dO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtYXggIT09IC0xICYmIGNvdW50ID4gbWF4KSB7XG4gICAgICAgICAgcmV0dXJuIFt7IGtleXdvcmQ6ICdtZW50aW9uJywgbWVzc2FnZTogYOacgOWkmuaPkOWPiiAke21heH0g5qyhYCB9XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0pIGFzIE56U2FmZUFueTtcbiAgICB9XG4gIH1cblxuICByZXNldChfdmFsdWU6IFNGVmFsdWUpOiB2b2lkIHtcbiAgICBnZXREYXRhKHRoaXMuc2NoZW1hLCB0aGlzLnVpLCBudWxsKS5zdWJzY3JpYmUobGlzdCA9PiB7XG4gICAgICB0aGlzLmRhdGEgPSBsaXN0O1xuICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gIH1cblxuICBfc2VsZWN0KG9wdGlvbnM6IE56U2FmZUFueSk6IHZvaWQge1xuICAgIGlmICh0aGlzLnVpLnNlbGVjdCkgdGhpcy51aS5zZWxlY3Qob3B0aW9ucyk7XG4gIH1cblxuICBfc2VhcmNoKG9wdGlvbjogTWVudGlvbk9uU2VhcmNoVHlwZXMpOiB2b2lkIHtcbiAgICBpZiAodHlwZW9mIHRoaXMudWkubG9hZERhdGEgIT09ICdmdW5jdGlvbicpIHJldHVybjtcblxuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgdGhpcy51aVxuICAgICAgLmxvYWREYXRhKG9wdGlvbilcbiAgICAgIC5waXBlKFxuICAgICAgICB0YXAoKCkgPT4gKHRoaXMubG9hZGluZyA9IGZhbHNlKSksXG4gICAgICAgIG1hcChyZXMgPT4gZ2V0RW51bShyZXMsIG51bGwsIHRoaXMuc2NoZW1hLnJlYWRPbmx5ISkpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgIHRoaXMuZGF0YSA9IHJlcztcbiAgICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKHRydWUpO1xuICAgICAgfSk7XG4gIH1cbn1cbiJdfQ==