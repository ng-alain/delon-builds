/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ViewChild } from '@angular/core';
import { tap, map } from 'rxjs/operators';
import { ControlWidget } from '../../widget';
import { getData, getEnum } from '../../utils';
import { NzMentionComponent } from 'ng-zorro-antd';
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
        this.i = {
            valueWith: this.ui["valueWith"] || (item => item.label),
            notFoundContent: this.ui["notFoundContent"] || '无匹配结果，轻敲空格完成输入',
            placement: this.ui["placement"] || 'bottom',
            prefix: this.ui["prefix"] || '@',
        };
        /** @type {?} */
        const min = typeof this.schema.minimum !== 'undefined' ? this.schema.minimum : -1;
        /** @type {?} */
        const max = typeof this.schema.maximum !== 'undefined' ? this.schema.maximum : -1;
        if (!this.ui.validator && (min !== -1 || max !== -1)) {
            this.ui.validator = (value, formProperty, form) => {
                /** @type {?} */
                const count = this.mentionChild.getMentions().length;
                if (min !== -1 && count < min) {
                    return [{ keyword: 'mention', message: `最少提及 ${min} 次` }];
                }
                if (max !== -1 && count > max) {
                    return [{ keyword: 'mention', message: `最多提及 ${max} 次` }];
                }
                return null;
            };
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    reset(value) {
        getData(this.schema, this.ui, null).subscribe(list => {
            this.data = list;
            this.detectChanges();
        });
    }
    /**
     * @param {?} options
     * @return {?}
     */
    _select(options) {
        if (this.ui["select"])
            this.ui["select"](options);
    }
    /**
     * @param {?} option
     * @return {?}
     */
    _search(option) {
        if (typeof this.ui["loadData"] !== 'function')
            return;
        this.loading = true;
        (/** @type {?} */ (this.ui["loadData"](option)))
            .pipe(tap(() => (this.loading = false)), map(res => getEnum(res, null, this.schema.readOnly)))
            .subscribe(res => {
            this.data = res;
            this.cd.detectChanges();
        });
    }
}
MentionWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-mention',
                template: `
    <sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title">

      <nz-mention #mentions
        [nzSuggestions]="data"
        [nzValueWith]="i.valueWith"
        [nzLoading]="loading"
        [nzNotFoundContent]="i.notFoundContent"
        [nzPlacement]="i.placement"
        [nzPrefix]="i.prefix"
        (nzOnSelect)="_select($event)"
        (nzOnSearchChange)="_search($event)">

        <ng-container *ngIf="ui.inputStyle !== 'textarea'">
          <input nzMentionTrigger nz-input
            [attr.id]="id"
            [disabled]="disabled"
            [attr.disabled]="disabled"
            [nzSize]="ui.size"
            [ngModel]="value"
            (ngModelChange)="setValue($event)"
            [attr.maxLength]="schema.maxLength || null"
            [attr.placeholder]="ui.placeholder"
            autocomplete="off">
        </ng-container>

        <ng-container *ngIf="ui.inputStyle === 'textarea'">
          <textarea nzMentionTrigger nz-input
            [attr.id]="id"
            [disabled]="disabled"
            [attr.disabled]="disabled"
            [nzSize]="ui.size"
            [ngModel]="value"
            (ngModelChange)="setValue($event)"
            [attr.maxLength]="schema.maxLength || null"
            [attr.placeholder]="ui.placeholder"
            [nzAutosize]="ui.autosize">
          </textarea>
        </ng-container>

      </nz-mention>

    </sf-item-wrap>
    `,
                preserveWhitespaces: false
            }] }
];
MentionWidget.propDecorators = {
    mentionChild: [{ type: ViewChild, args: ['mentions',] }]
};
if (false) {
    /** @type {?} */
    MentionWidget.prototype.mentionChild;
    /** @type {?} */
    MentionWidget.prototype.data;
    /** @type {?} */
    MentionWidget.prototype.i;
    /** @type {?} */
    MentionWidget.prototype.loading;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudGlvbi53aWRnZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vZm9ybS8iLCJzb3VyY2VzIjpbInNyYy93aWRnZXRzL21lbnRpb24vbWVudGlvbi53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdELE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDMUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUM3QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUcvQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFrRG5ELE1BQU0sb0JBQXFCLFNBQVEsYUFBYTs7O29CQUV2QixFQUFFO3VCQUVmLEtBQUs7Ozs7O0lBRWYsUUFBUTtRQUNOLElBQUksQ0FBQyxDQUFDLEdBQUc7WUFDUCxTQUFTLEVBQUUsSUFBSSxDQUFDLEVBQUUsaUJBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDcEQsZUFBZSxFQUNiLElBQUksQ0FBQyxFQUFFLHVCQUFvQixnQkFBZ0I7WUFDN0MsU0FBUyxFQUFFLElBQUksQ0FBQyxFQUFFLGlCQUFjLFFBQVE7WUFDeEMsTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFLGNBQVcsR0FBRztTQUM5QixDQUFDOztRQUNGLE1BQU0sR0FBRyxHQUNMLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBRUM7O1FBSDFFLE1BRUUsR0FBRyxHQUNELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3BELElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxHQUFHLENBQ2xCLEtBQVUsRUFDVixZQUEwQixFQUMxQixJQUFtQixFQUNuQixFQUFFOztnQkFDRixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLE1BQU0sQ0FBQztnQkFDckQsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLElBQUksS0FBSyxHQUFHLEdBQUcsRUFBRTtvQkFDN0IsT0FBTyxDQUFDLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsUUFBUSxHQUFHLElBQUksRUFBRSxDQUFDLENBQUM7aUJBQzNEO2dCQUNELElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxJQUFJLEtBQUssR0FBRyxHQUFHLEVBQUU7b0JBQzdCLE9BQU8sQ0FBQyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFFBQVEsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDO2lCQUMzRDtnQkFDRCxPQUFPLElBQUksQ0FBQzthQUNiLENBQUM7U0FDSDtLQUNGOzs7OztJQUVELEtBQUssQ0FBQyxLQUFVO1FBQ2QsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDbkQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDakIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3RCLENBQUMsQ0FBQztLQUNKOzs7OztJQUVELE9BQU8sQ0FBQyxPQUFZO1FBQ2xCLElBQUksSUFBSSxDQUFDLEVBQUU7WUFBUyxJQUFJLENBQUMsRUFBRSxXQUFRLE9BQU8sQ0FBQyxDQUFDO0tBQzdDOzs7OztJQUVELE9BQU8sQ0FBQyxNQUFXO1FBQ2pCLElBQUksT0FBTyxJQUFJLENBQUMsRUFBRSxZQUFTLEtBQUssVUFBVTtZQUFFLE9BQU87UUFFbkQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsbUJBQUMsSUFBSSxDQUFDLEVBQUUsYUFBVSxNQUFNLENBQW1DLEVBQUM7YUFDekQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7YUFDN0YsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2YsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7WUFDaEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN6QixDQUFDLENBQUM7S0FDTjs7O1lBekdGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBMkNQO2dCQUNILG1CQUFtQixFQUFFLEtBQUs7YUFDM0I7OzsyQkFFRSxTQUFTLFNBQUMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YXAsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XHJcbmltcG9ydCB7IGdldERhdGEsIGdldEVudW0gfSBmcm9tICcuLi8uLi91dGlscyc7XHJcbmltcG9ydCB7IFNGU2NoZW1hRW51bSwgU0ZTY2hlbWFFbnVtVHlwZSB9IGZyb20gJy4uLy4uL3NjaGVtYSc7XHJcbmltcG9ydCB7IEZvcm1Qcm9wZXJ0eSwgUHJvcGVydHlHcm91cCB9IGZyb20gJy4uLy4uL21vZGVsL2Zvcm0ucHJvcGVydHknO1xyXG5pbXBvcnQgeyBOek1lbnRpb25Db21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc2YtbWVudGlvbicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxzZi1pdGVtLXdyYXAgW2lkXT1cImlkXCIgW3NjaGVtYV09XCJzY2hlbWFcIiBbdWldPVwidWlcIiBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiIFtlcnJvcl09XCJlcnJvclwiIFtzaG93VGl0bGVdPVwic2NoZW1hLnRpdGxlXCI+XHJcblxyXG4gICAgICA8bnotbWVudGlvbiAjbWVudGlvbnNcclxuICAgICAgICBbbnpTdWdnZXN0aW9uc109XCJkYXRhXCJcclxuICAgICAgICBbbnpWYWx1ZVdpdGhdPVwiaS52YWx1ZVdpdGhcIlxyXG4gICAgICAgIFtuekxvYWRpbmddPVwibG9hZGluZ1wiXHJcbiAgICAgICAgW256Tm90Rm91bmRDb250ZW50XT1cImkubm90Rm91bmRDb250ZW50XCJcclxuICAgICAgICBbbnpQbGFjZW1lbnRdPVwiaS5wbGFjZW1lbnRcIlxyXG4gICAgICAgIFtuelByZWZpeF09XCJpLnByZWZpeFwiXHJcbiAgICAgICAgKG56T25TZWxlY3QpPVwiX3NlbGVjdCgkZXZlbnQpXCJcclxuICAgICAgICAobnpPblNlYXJjaENoYW5nZSk9XCJfc2VhcmNoKCRldmVudClcIj5cclxuXHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInVpLmlucHV0U3R5bGUgIT09ICd0ZXh0YXJlYSdcIj5cclxuICAgICAgICAgIDxpbnB1dCBuek1lbnRpb25UcmlnZ2VyIG56LWlucHV0XHJcbiAgICAgICAgICAgIFthdHRyLmlkXT1cImlkXCJcclxuICAgICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgICAgICAgW2F0dHIuZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICBbbnpTaXplXT1cInVpLnNpemVcIlxyXG4gICAgICAgICAgICBbbmdNb2RlbF09XCJ2YWx1ZVwiXHJcbiAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInNldFZhbHVlKCRldmVudClcIlxyXG4gICAgICAgICAgICBbYXR0ci5tYXhMZW5ndGhdPVwic2NoZW1hLm1heExlbmd0aCB8fCBudWxsXCJcclxuICAgICAgICAgICAgW2F0dHIucGxhY2Vob2xkZXJdPVwidWkucGxhY2Vob2xkZXJcIlxyXG4gICAgICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIj5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInVpLmlucHV0U3R5bGUgPT09ICd0ZXh0YXJlYSdcIj5cclxuICAgICAgICAgIDx0ZXh0YXJlYSBuek1lbnRpb25UcmlnZ2VyIG56LWlucHV0XHJcbiAgICAgICAgICAgIFthdHRyLmlkXT1cImlkXCJcclxuICAgICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgICAgICAgW2F0dHIuZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICBbbnpTaXplXT1cInVpLnNpemVcIlxyXG4gICAgICAgICAgICBbbmdNb2RlbF09XCJ2YWx1ZVwiXHJcbiAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInNldFZhbHVlKCRldmVudClcIlxyXG4gICAgICAgICAgICBbYXR0ci5tYXhMZW5ndGhdPVwic2NoZW1hLm1heExlbmd0aCB8fCBudWxsXCJcclxuICAgICAgICAgICAgW2F0dHIucGxhY2Vob2xkZXJdPVwidWkucGxhY2Vob2xkZXJcIlxyXG4gICAgICAgICAgICBbbnpBdXRvc2l6ZV09XCJ1aS5hdXRvc2l6ZVwiPlxyXG4gICAgICAgICAgPC90ZXh0YXJlYT5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICAgIDwvbnotbWVudGlvbj5cclxuXHJcbiAgICA8L3NmLWl0ZW0td3JhcD5cclxuICAgIGAsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNZW50aW9uV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQFZpZXdDaGlsZCgnbWVudGlvbnMnKSBtZW50aW9uQ2hpbGQ6IE56TWVudGlvbkNvbXBvbmVudDtcclxuICBkYXRhOiBTRlNjaGVtYUVudW1bXSA9IFtdO1xyXG4gIGk6IGFueTtcclxuICBsb2FkaW5nID0gZmFsc2U7XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pID0ge1xyXG4gICAgICB2YWx1ZVdpdGg6IHRoaXMudWkudmFsdWVXaXRoIHx8IChpdGVtID0+IGl0ZW0ubGFiZWwpLFxyXG4gICAgICBub3RGb3VuZENvbnRlbnQ6XHJcbiAgICAgICAgdGhpcy51aS5ub3RGb3VuZENvbnRlbnQgfHwgJ+aXoOWMuemFjee7k+aenO+8jOi9u+aVsuepuuagvOWujOaIkOi+k+WFpScsXHJcbiAgICAgIHBsYWNlbWVudDogdGhpcy51aS5wbGFjZW1lbnQgfHwgJ2JvdHRvbScsXHJcbiAgICAgIHByZWZpeDogdGhpcy51aS5wcmVmaXggfHwgJ0AnLFxyXG4gICAgfTtcclxuICAgIGNvbnN0IG1pbiA9XHJcbiAgICAgICAgdHlwZW9mIHRoaXMuc2NoZW1hLm1pbmltdW0gIT09ICd1bmRlZmluZWQnID8gdGhpcy5zY2hlbWEubWluaW11bSA6IC0xLFxyXG4gICAgICBtYXggPVxyXG4gICAgICAgIHR5cGVvZiB0aGlzLnNjaGVtYS5tYXhpbXVtICE9PSAndW5kZWZpbmVkJyA/IHRoaXMuc2NoZW1hLm1heGltdW0gOiAtMTtcclxuICAgIGlmICghdGhpcy51aS52YWxpZGF0b3IgJiYgKG1pbiAhPT0gLTEgfHwgbWF4ICE9PSAtMSkpIHtcclxuICAgICAgdGhpcy51aS52YWxpZGF0b3IgPSAoXHJcbiAgICAgICAgdmFsdWU6IGFueSxcclxuICAgICAgICBmb3JtUHJvcGVydHk6IEZvcm1Qcm9wZXJ0eSxcclxuICAgICAgICBmb3JtOiBQcm9wZXJ0eUdyb3VwLFxyXG4gICAgICApID0+IHtcclxuICAgICAgICBjb25zdCBjb3VudCA9IHRoaXMubWVudGlvbkNoaWxkLmdldE1lbnRpb25zKCkubGVuZ3RoO1xyXG4gICAgICAgIGlmIChtaW4gIT09IC0xICYmIGNvdW50IDwgbWluKSB7XHJcbiAgICAgICAgICByZXR1cm4gW3sga2V5d29yZDogJ21lbnRpb24nLCBtZXNzYWdlOiBg5pyA5bCR5o+Q5Y+KICR7bWlufSDmrKFgIH1dO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWF4ICE9PSAtMSAmJiBjb3VudCA+IG1heCkge1xyXG4gICAgICAgICAgcmV0dXJuIFt7IGtleXdvcmQ6ICdtZW50aW9uJywgbWVzc2FnZTogYOacgOWkmuaPkOWPiiAke21heH0g5qyhYCB9XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXNldCh2YWx1ZTogYW55KSB7XHJcbiAgICBnZXREYXRhKHRoaXMuc2NoZW1hLCB0aGlzLnVpLCBudWxsKS5zdWJzY3JpYmUobGlzdCA9PiB7XHJcbiAgICAgIHRoaXMuZGF0YSA9IGxpc3Q7XHJcbiAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBfc2VsZWN0KG9wdGlvbnM6IGFueSkge1xyXG4gICAgaWYgKHRoaXMudWkuc2VsZWN0KSB0aGlzLnVpLnNlbGVjdChvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIF9zZWFyY2gob3B0aW9uOiBhbnkpIHtcclxuICAgIGlmICh0eXBlb2YgdGhpcy51aS5sb2FkRGF0YSAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICAodGhpcy51aS5sb2FkRGF0YShvcHRpb24pIGFzIE9ic2VydmFibGU8U0ZTY2hlbWFFbnVtVHlwZVtdPilcclxuICAgICAgLnBpcGUodGFwKCgpID0+ICh0aGlzLmxvYWRpbmcgPSBmYWxzZSkpLCBtYXAocmVzID0+IGdldEVudW0ocmVzLCBudWxsLCB0aGlzLnNjaGVtYS5yZWFkT25seSkpKVxyXG4gICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gcmVzO1xyXG4gICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn1cclxuIl19