/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { of } from 'rxjs';
import { startWith, map, flatMap, debounceTime } from 'rxjs/operators';
import { ControlWidget } from '../../widget';
import { getCopyEnum, getEnum, toBool } from '../../utils';
/** @type {?} */
export const EMAILSUFFIX = [
    'qq.com',
    '163.com',
    'gmail.com',
    '126.com',
    'aliyun.com',
];
export class AutoCompleteWidget extends ControlWidget {
    constructor() {
        super(...arguments);
        this.fixData = [];
        this.isAsync = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.i = {
            backfill: toBool(this.ui["backfill"], false),
            defaultActiveFirstOption: toBool(this.ui["defaultActiveFirstOption"], true),
            width: this.ui.width || undefined,
        };
        this.filterOption = this.ui["filterOption"] == null ? true : this.ui["filterOption"];
        if (typeof this.filterOption === 'boolean') {
            this.filterOption = (input, option) => option.label.toLowerCase().indexOf((input || '').toLowerCase()) > -1;
        }
        this.isAsync = !!this.ui.asyncData;
        /** @type {?} */
        const orgTime = +(this.ui["debounceTime"] || 0);
        /** @type {?} */
        const time = Math.max(0, this.isAsync ? Math.max(50, orgTime) : orgTime);
        this.list = this.formProperty.valueChanges.pipe(debounceTime(time), startWith(''), flatMap(input => this.isAsync ? this.ui.asyncData(input) : this.filterData(input)), map(res => getEnum(res, null, this.schema.readOnly)));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    reset(value) {
        if (this.isAsync)
            return;
        switch (this.ui.type) {
            case 'email':
                this.fixData = getCopyEnum(EMAILSUFFIX, null, this.schema.readOnly);
                break;
            default:
                this.fixData = getCopyEnum(this.schema.enum, this.formProperty.formData, this.schema.readOnly);
                break;
        }
    }
    /**
     * @param {?} input
     * @return {?}
     */
    filterData(input) {
        switch (this.ui.type) {
            case 'email':
                return this.addEmailSuffix(input);
            default:
                return of(this.fixData.filter(option => this.filterOption(input, option)));
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    addEmailSuffix(value) {
        return of(!value || ~value.indexOf('@')
            ? []
            : this.fixData.map(domain => `${value}@${domain.label}`));
    }
}
AutoCompleteWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-autocomplete',
                template: `
    <sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title">
      <input nz-input [nzAutocomplete]="auto"
        [attr.id]="id"
        [disabled]="disabled"
        [attr.disabled]="disabled"
        [nzSize]="ui.size"
        [ngModel]="value"
        (ngModelChange)="setValue($event)"
        [attr.maxLength]="schema.maxLength || null"
        [attr.placeholder]="ui.placeholder"
        autocomplete="off">
      <nz-autocomplete #auto
        [nzBackfill]="i.backfill"
        [nzDefaultActiveFirstOption]="i.defaultActiveFirstOption"
        [nzWidth]="i.width"
        (selectionChange)="setValue($event?.nzValue)">
        <nz-auto-option *ngFor="let i of list | async" [nzValue]="i.label">{{i.label}}</nz-auto-option>
      </nz-autocomplete>
    </sf-item-wrap>
    `,
                preserveWhitespaces: false
            }] }
];
if (false) {
    /** @type {?} */
    AutoCompleteWidget.prototype.i;
    /** @type {?} */
    AutoCompleteWidget.prototype.fixData;
    /** @type {?} */
    AutoCompleteWidget.prototype.list;
    /** @type {?} */
    AutoCompleteWidget.prototype.filterOption;
    /** @type {?} */
    AutoCompleteWidget.prototype.isAsync;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9mb3JtLyIsInNvdXJjZXMiOlsic3JjL3dpZGdldHMvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdkUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUU3QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxhQUFhLENBQUM7O0FBRTNELGFBQWEsV0FBVyxHQUFHO0lBQ3pCLFFBQVE7SUFDUixTQUFTO0lBQ1QsV0FBVztJQUNYLFNBQVM7SUFDVCxZQUFZO0NBQ2IsQ0FBQztBQTJCRixNQUFNLHlCQUEwQixTQUFRLGFBQWE7Ozt1QkFFekIsRUFBRTt1QkFHVixLQUFLOzs7OztJQUV2QixRQUFRO1FBQ04sSUFBSSxDQUFDLENBQUMsR0FBRztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsY0FBVyxLQUFLLENBQUM7WUFDekMsd0JBQXdCLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLDhCQUEyQixJQUFJLENBQUM7WUFDeEUsS0FBSyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxJQUFJLFNBQVM7U0FDbEMsQ0FBQztRQUVGLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEVBQUUsb0JBQWlCLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxnQkFBYSxDQUFDO1FBQy9FLElBQUksT0FBTyxJQUFJLENBQUMsWUFBWSxLQUFLLFNBQVMsRUFBRTtZQUMxQyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsS0FBYSxFQUFFLE1BQW9CLEVBQUUsRUFBRSxDQUMxRCxNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3hFO1FBRUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7O1FBQ25DLE1BQU0sT0FBTyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxvQkFBaUIsQ0FBQyxDQUFDLENBQUM7O1FBQzdDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLElBQUksQ0FDN0MsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUNsQixTQUFTLENBQUMsRUFBRSxDQUFDLEVBQ2IsT0FBTyxDQUNMLEtBQUssQ0FBQyxFQUFFLENBQ04sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQ25FLEVBQ0QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUNyRCxDQUFDO0tBQ0g7Ozs7O0lBRUQsS0FBSyxDQUFDLEtBQVU7UUFDZCxJQUFJLElBQUksQ0FBQyxPQUFPO1lBQUUsT0FBTztRQUN6QixRQUFRLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFO1lBQ3BCLEtBQUssT0FBTztnQkFDVixJQUFJLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3BFLE1BQU07WUFDUjtnQkFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQ2hCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FDckIsQ0FBQztnQkFDRixNQUFNO1NBQ1Q7S0FDRjs7Ozs7SUFFTyxVQUFVLENBQUMsS0FBYTtRQUM5QixRQUFRLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFO1lBQ3BCLEtBQUssT0FBTztnQkFDVixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDcEM7Z0JBQ0UsT0FBTyxFQUFFLENBQ1AsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUNoRSxDQUFDO1NBQ0w7Ozs7OztJQUdLLGNBQWMsQ0FBQyxLQUFhO1FBQ2xDLE9BQU8sRUFBRSxDQUNQLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7WUFDM0IsQ0FBQyxDQUFDLEVBQUU7WUFDSixDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FDM0QsQ0FBQzs7OztZQTNGTCxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQW9CUDtnQkFDSCxtQkFBbUIsRUFBRSxLQUFLO2FBQzNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgc3RhcnRXaXRoLCBtYXAsIGZsYXRNYXAsIGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XHJcbmltcG9ydCB7IFNGU2NoZW1hRW51bSB9IGZyb20gJy4uLy4uL3NjaGVtYSc7XHJcbmltcG9ydCB7IGdldENvcHlFbnVtLCBnZXRFbnVtLCB0b0Jvb2wgfSBmcm9tICcuLi8uLi91dGlscyc7XHJcblxyXG5leHBvcnQgY29uc3QgRU1BSUxTVUZGSVggPSBbXHJcbiAgJ3FxLmNvbScsXHJcbiAgJzE2My5jb20nLFxyXG4gICdnbWFpbC5jb20nLFxyXG4gICcxMjYuY29tJyxcclxuICAnYWxpeXVuLmNvbScsXHJcbl07XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NmLWF1dG9jb21wbGV0ZScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxzZi1pdGVtLXdyYXAgW2lkXT1cImlkXCIgW3NjaGVtYV09XCJzY2hlbWFcIiBbdWldPVwidWlcIiBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiIFtlcnJvcl09XCJlcnJvclwiIFtzaG93VGl0bGVdPVwic2NoZW1hLnRpdGxlXCI+XHJcbiAgICAgIDxpbnB1dCBuei1pbnB1dCBbbnpBdXRvY29tcGxldGVdPVwiYXV0b1wiXHJcbiAgICAgICAgW2F0dHIuaWRdPVwiaWRcIlxyXG4gICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgICAgW2F0dHIuZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgIFtuelNpemVdPVwidWkuc2l6ZVwiXHJcbiAgICAgICAgW25nTW9kZWxdPVwidmFsdWVcIlxyXG4gICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInNldFZhbHVlKCRldmVudClcIlxyXG4gICAgICAgIFthdHRyLm1heExlbmd0aF09XCJzY2hlbWEubWF4TGVuZ3RoIHx8IG51bGxcIlxyXG4gICAgICAgIFthdHRyLnBsYWNlaG9sZGVyXT1cInVpLnBsYWNlaG9sZGVyXCJcclxuICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIj5cclxuICAgICAgPG56LWF1dG9jb21wbGV0ZSAjYXV0b1xyXG4gICAgICAgIFtuekJhY2tmaWxsXT1cImkuYmFja2ZpbGxcIlxyXG4gICAgICAgIFtuekRlZmF1bHRBY3RpdmVGaXJzdE9wdGlvbl09XCJpLmRlZmF1bHRBY3RpdmVGaXJzdE9wdGlvblwiXHJcbiAgICAgICAgW256V2lkdGhdPVwiaS53aWR0aFwiXHJcbiAgICAgICAgKHNlbGVjdGlvbkNoYW5nZSk9XCJzZXRWYWx1ZSgkZXZlbnQ/Lm56VmFsdWUpXCI+XHJcbiAgICAgICAgPG56LWF1dG8tb3B0aW9uICpuZ0Zvcj1cImxldCBpIG9mIGxpc3QgfCBhc3luY1wiIFtuelZhbHVlXT1cImkubGFiZWxcIj57e2kubGFiZWx9fTwvbnotYXV0by1vcHRpb24+XHJcbiAgICAgIDwvbnotYXV0b2NvbXBsZXRlPlxyXG4gICAgPC9zZi1pdGVtLXdyYXA+XHJcbiAgICBgLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXV0b0NvbXBsZXRlV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgaTogYW55O1xyXG4gIGZpeERhdGE6IFNGU2NoZW1hRW51bVtdID0gW107XHJcbiAgbGlzdDogT2JzZXJ2YWJsZTxTRlNjaGVtYUVudW1bXT47XHJcbiAgcHJpdmF0ZSBmaWx0ZXJPcHRpb246IChpbnB1dDogc3RyaW5nLCBvcHRpb246IFNGU2NoZW1hRW51bSkgPT4gYm9vbGVhbjtcclxuICBwcml2YXRlIGlzQXN5bmMgPSBmYWxzZTtcclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmkgPSB7XHJcbiAgICAgIGJhY2tmaWxsOiB0b0Jvb2wodGhpcy51aS5iYWNrZmlsbCwgZmFsc2UpLFxyXG4gICAgICBkZWZhdWx0QWN0aXZlRmlyc3RPcHRpb246IHRvQm9vbCh0aGlzLnVpLmRlZmF1bHRBY3RpdmVGaXJzdE9wdGlvbiwgdHJ1ZSksXHJcbiAgICAgIHdpZHRoOiB0aGlzLnVpLndpZHRoIHx8IHVuZGVmaW5lZCxcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5maWx0ZXJPcHRpb24gPSB0aGlzLnVpLmZpbHRlck9wdGlvbiA9PSBudWxsID8gdHJ1ZSA6IHRoaXMudWkuZmlsdGVyT3B0aW9uO1xyXG4gICAgaWYgKHR5cGVvZiB0aGlzLmZpbHRlck9wdGlvbiA9PT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgIHRoaXMuZmlsdGVyT3B0aW9uID0gKGlucHV0OiBzdHJpbmcsIG9wdGlvbjogU0ZTY2hlbWFFbnVtKSA9PlxyXG4gICAgICAgIG9wdGlvbi5sYWJlbC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoKGlucHV0IHx8ICcnKS50b0xvd2VyQ2FzZSgpKSA+IC0xO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaXNBc3luYyA9ICEhdGhpcy51aS5hc3luY0RhdGE7XHJcbiAgICBjb25zdCBvcmdUaW1lID0gKyh0aGlzLnVpLmRlYm91bmNlVGltZSB8fCAwKTtcclxuICAgIGNvbnN0IHRpbWUgPSBNYXRoLm1heCgwLCB0aGlzLmlzQXN5bmMgPyBNYXRoLm1heCg1MCwgb3JnVGltZSkgOiBvcmdUaW1lKTtcclxuICAgIHRoaXMubGlzdCA9IHRoaXMuZm9ybVByb3BlcnR5LnZhbHVlQ2hhbmdlcy5waXBlKFxyXG4gICAgICBkZWJvdW5jZVRpbWUodGltZSksXHJcbiAgICAgIHN0YXJ0V2l0aCgnJyksXHJcbiAgICAgIGZsYXRNYXAoXHJcbiAgICAgICAgaW5wdXQgPT5cclxuICAgICAgICAgIHRoaXMuaXNBc3luYyA/IHRoaXMudWkuYXN5bmNEYXRhKGlucHV0KSA6IHRoaXMuZmlsdGVyRGF0YShpbnB1dCksXHJcbiAgICAgICksXHJcbiAgICAgIG1hcChyZXMgPT4gZ2V0RW51bShyZXMsIG51bGwsIHRoaXMuc2NoZW1hLnJlYWRPbmx5KSksXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmVzZXQodmFsdWU6IGFueSkge1xyXG4gICAgaWYgKHRoaXMuaXNBc3luYykgcmV0dXJuO1xyXG4gICAgc3dpdGNoICh0aGlzLnVpLnR5cGUpIHtcclxuICAgICAgY2FzZSAnZW1haWwnOlxyXG4gICAgICAgIHRoaXMuZml4RGF0YSA9IGdldENvcHlFbnVtKEVNQUlMU1VGRklYLCBudWxsLCB0aGlzLnNjaGVtYS5yZWFkT25seSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgdGhpcy5maXhEYXRhID0gZ2V0Q29weUVudW0oXHJcbiAgICAgICAgICB0aGlzLnNjaGVtYS5lbnVtLFxyXG4gICAgICAgICAgdGhpcy5mb3JtUHJvcGVydHkuZm9ybURhdGEsXHJcbiAgICAgICAgICB0aGlzLnNjaGVtYS5yZWFkT25seVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZpbHRlckRhdGEoaW5wdXQ6IHN0cmluZykge1xyXG4gICAgc3dpdGNoICh0aGlzLnVpLnR5cGUpIHtcclxuICAgICAgY2FzZSAnZW1haWwnOlxyXG4gICAgICAgIHJldHVybiB0aGlzLmFkZEVtYWlsU3VmZml4KGlucHV0KTtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gb2YoXHJcbiAgICAgICAgICB0aGlzLmZpeERhdGEuZmlsdGVyKG9wdGlvbiA9PiB0aGlzLmZpbHRlck9wdGlvbihpbnB1dCwgb3B0aW9uKSksXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgYWRkRW1haWxTdWZmaXgodmFsdWU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIG9mKFxyXG4gICAgICAhdmFsdWUgfHwgfnZhbHVlLmluZGV4T2YoJ0AnKVxyXG4gICAgICAgID8gW11cclxuICAgICAgICA6IHRoaXMuZml4RGF0YS5tYXAoZG9tYWluID0+IGAke3ZhbHVlfUAke2RvbWFpbi5sYWJlbH1gKSxcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==