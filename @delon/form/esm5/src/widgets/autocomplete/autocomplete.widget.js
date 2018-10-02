/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { of } from 'rxjs';
import { startWith, map, flatMap, debounceTime } from 'rxjs/operators';
import { ControlWidget } from '../../widget';
import { getCopyEnum, getEnum, toBool } from '../../utils';
/** @type {?} */
export var EMAILSUFFIX = [
    'qq.com',
    '163.com',
    'gmail.com',
    '126.com',
    'aliyun.com',
];
var AutoCompleteWidget = /** @class */ (function (_super) {
    tslib_1.__extends(AutoCompleteWidget, _super);
    function AutoCompleteWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fixData = [];
        _this.isAsync = false;
        return _this;
    }
    /**
     * @return {?}
     */
    AutoCompleteWidget.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.i = {
            backfill: toBool(this.ui["backfill"], false),
            defaultActiveFirstOption: toBool(this.ui["defaultActiveFirstOption"], true),
            width: this.ui.width || undefined,
        };
        this.filterOption = this.ui["filterOption"] == null ? true : this.ui["filterOption"];
        if (typeof this.filterOption === 'boolean') {
            this.filterOption = function (input, option) {
                return option.label.toLowerCase().indexOf((input || '').toLowerCase()) > -1;
            };
        }
        this.isAsync = !!this.ui.asyncData;
        /** @type {?} */
        var orgTime = +(this.ui["debounceTime"] || 0);
        /** @type {?} */
        var time = Math.max(0, this.isAsync ? Math.max(50, orgTime) : orgTime);
        this.list = this.formProperty.valueChanges.pipe(debounceTime(time), startWith(''), flatMap(function (input) {
            return _this.isAsync ? _this.ui.asyncData(input) : _this.filterData(input);
        }), map(function (res) { return getEnum(res, null, _this.schema.readOnly); }));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    AutoCompleteWidget.prototype.reset = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
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
    };
    /**
     * @param {?} input
     * @return {?}
     */
    AutoCompleteWidget.prototype.filterData = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        var _this = this;
        switch (this.ui.type) {
            case 'email':
                return this.addEmailSuffix(input);
            default:
                return of(this.fixData.filter(function (option) { return _this.filterOption(input, option); }));
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    AutoCompleteWidget.prototype.addEmailSuffix = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return of(!value || ~value.indexOf('@')
            ? []
            : this.fixData.map(function (domain) { return value + "@" + domain.label; }));
    };
    AutoCompleteWidget.decorators = [
        { type: Component, args: [{
                    selector: 'sf-autocomplete',
                    template: "\n    <sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n      <input nz-input [nzAutocomplete]=\"auto\"\n        [attr.id]=\"id\"\n        [disabled]=\"disabled\"\n        [attr.disabled]=\"disabled\"\n        [nzSize]=\"ui.size\"\n        [ngModel]=\"value\"\n        (ngModelChange)=\"setValue($event)\"\n        [attr.maxLength]=\"schema.maxLength || null\"\n        [attr.placeholder]=\"ui.placeholder\"\n        autocomplete=\"off\">\n      <nz-autocomplete #auto\n        [nzBackfill]=\"i.backfill\"\n        [nzDefaultActiveFirstOption]=\"i.defaultActiveFirstOption\"\n        [nzWidth]=\"i.width\"\n        (selectionChange)=\"setValue($event?.nzValue)\">\n        <nz-auto-option *ngFor=\"let i of list | async\" [nzValue]=\"i.label\">{{i.label}}</nz-auto-option>\n      </nz-autocomplete>\n    </sf-item-wrap>\n    ",
                    preserveWhitespaces: false
                }] }
    ];
    return AutoCompleteWidget;
}(ControlWidget));
export { AutoCompleteWidget };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9mb3JtLyIsInNvdXJjZXMiOlsic3JjL3dpZGdldHMvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFN0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sYUFBYSxDQUFDOztBQUUzRCxXQUFhLFdBQVcsR0FBRztJQUN6QixRQUFRO0lBQ1IsU0FBUztJQUNULFdBQVc7SUFDWCxTQUFTO0lBQ1QsWUFBWTtDQUNiLENBQUM7O0lBMkJzQyw4Q0FBYTs7O3dCQUV6QixFQUFFO3dCQUdWLEtBQUs7Ozs7OztJQUV2QixxQ0FBUTs7O0lBQVI7UUFBQSxpQkF5QkM7UUF4QkMsSUFBSSxDQUFDLENBQUMsR0FBRztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsY0FBVyxLQUFLLENBQUM7WUFDekMsd0JBQXdCLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLDhCQUEyQixJQUFJLENBQUM7WUFDeEUsS0FBSyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxJQUFJLFNBQVM7U0FDbEMsQ0FBQztRQUVGLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEVBQUUsb0JBQWlCLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxnQkFBYSxDQUFDO1FB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QUMsS0FBTyxFQUExQixDQUEwQixDQUFDLENBQzNELENBQUM7OztnQkEzRkwsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFFBQVEsRUFBRSw4NEJBb0JQO29CQUNILG1CQUFtQixFQUFFLEtBQUs7aUJBQzNCOzs2QkF2Q0Q7RUF3Q3dDLGFBQWE7U0FBeEMsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgc3RhcnRXaXRoLCBtYXAsIGZsYXRNYXAsIGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XHJcbmltcG9ydCB7IFNGU2NoZW1hRW51bSB9IGZyb20gJy4uLy4uL3NjaGVtYSc7XHJcbmltcG9ydCB7IGdldENvcHlFbnVtLCBnZXRFbnVtLCB0b0Jvb2wgfSBmcm9tICcuLi8uLi91dGlscyc7XHJcblxyXG5leHBvcnQgY29uc3QgRU1BSUxTVUZGSVggPSBbXHJcbiAgJ3FxLmNvbScsXHJcbiAgJzE2My5jb20nLFxyXG4gICdnbWFpbC5jb20nLFxyXG4gICcxMjYuY29tJyxcclxuICAnYWxpeXVuLmNvbScsXHJcbl07XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NmLWF1dG9jb21wbGV0ZScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxzZi1pdGVtLXdyYXAgW2lkXT1cImlkXCIgW3NjaGVtYV09XCJzY2hlbWFcIiBbdWldPVwidWlcIiBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiIFtlcnJvcl09XCJlcnJvclwiIFtzaG93VGl0bGVdPVwic2NoZW1hLnRpdGxlXCI+XHJcbiAgICAgIDxpbnB1dCBuei1pbnB1dCBbbnpBdXRvY29tcGxldGVdPVwiYXV0b1wiXHJcbiAgICAgICAgW2F0dHIuaWRdPVwiaWRcIlxyXG4gICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgICAgW2F0dHIuZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgIFtuelNpemVdPVwidWkuc2l6ZVwiXHJcbiAgICAgICAgW25nTW9kZWxdPVwidmFsdWVcIlxyXG4gICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInNldFZhbHVlKCRldmVudClcIlxyXG4gICAgICAgIFthdHRyLm1heExlbmd0aF09XCJzY2hlbWEubWF4TGVuZ3RoIHx8IG51bGxcIlxyXG4gICAgICAgIFthdHRyLnBsYWNlaG9sZGVyXT1cInVpLnBsYWNlaG9sZGVyXCJcclxuICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIj5cclxuICAgICAgPG56LWF1dG9jb21wbGV0ZSAjYXV0b1xyXG4gICAgICAgIFtuekJhY2tmaWxsXT1cImkuYmFja2ZpbGxcIlxyXG4gICAgICAgIFtuekRlZmF1bHRBY3RpdmVGaXJzdE9wdGlvbl09XCJpLmRlZmF1bHRBY3RpdmVGaXJzdE9wdGlvblwiXHJcbiAgICAgICAgW256V2lkdGhdPVwiaS53aWR0aFwiXHJcbiAgICAgICAgKHNlbGVjdGlvbkNoYW5nZSk9XCJzZXRWYWx1ZSgkZXZlbnQ/Lm56VmFsdWUpXCI+XHJcbiAgICAgICAgPG56LWF1dG8tb3B0aW9uICpuZ0Zvcj1cImxldCBpIG9mIGxpc3QgfCBhc3luY1wiIFtuelZhbHVlXT1cImkubGFiZWxcIj57e2kubGFiZWx9fTwvbnotYXV0by1vcHRpb24+XHJcbiAgICAgIDwvbnotYXV0b2NvbXBsZXRlPlxyXG4gICAgPC9zZi1pdGVtLXdyYXA+XHJcbiAgICBgLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXV0b0NvbXBsZXRlV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgaTogYW55O1xyXG4gIGZpeERhdGE6IFNGU2NoZW1hRW51bVtdID0gW107XHJcbiAgbGlzdDogT2JzZXJ2YWJsZTxTRlNjaGVtYUVudW1bXT47XHJcbiAgcHJpdmF0ZSBmaWx0ZXJPcHRpb246IChpbnB1dDogc3RyaW5nLCBvcHRpb246IFNGU2NoZW1hRW51bSkgPT4gYm9vbGVhbjtcclxuICBwcml2YXRlIGlzQXN5bmMgPSBmYWxzZTtcclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmkgPSB7XHJcbiAgICAgIGJhY2tmaWxsOiB0b0Jvb2wodGhpcy51aS5iYWNrZmlsbCwgZmFsc2UpLFxyXG4gICAgICBkZWZhdWx0QWN0aXZlRmlyc3RPcHRpb246IHRvQm9vbCh0aGlzLnVpLmRlZmF1bHRBY3RpdmVGaXJzdE9wdGlvbiwgdHJ1ZSksXHJcbiAgICAgIHdpZHRoOiB0aGlzLnVpLndpZHRoIHx8IHVuZGVmaW5lZCxcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5maWx0ZXJPcHRpb24gPSB0aGlzLnVpLmZpbHRlck9wdGlvbiA9PSBudWxsID8gdHJ1ZSA6IHRoaXMudWkuZmlsdGVyT3B0aW9uO1xyXG4gICAgaWYgKHR5cGVvZiB0aGlzLmZpbHRlck9wdGlvbiA9PT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgIHRoaXMuZmlsdGVyT3B0aW9uID0gKGlucHV0OiBzdHJpbmcsIG9wdGlvbjogU0ZTY2hlbWFFbnVtKSA9PlxyXG4gICAgICAgIG9wdGlvbi5sYWJlbC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoKGlucHV0IHx8ICcnKS50b0xvd2VyQ2FzZSgpKSA+IC0xO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaXNBc3luYyA9ICEhdGhpcy51aS5hc3luY0RhdGE7XHJcbiAgICBjb25zdCBvcmdUaW1lID0gKyh0aGlzLnVpLmRlYm91bmNlVGltZSB8fCAwKTtcclxuICAgIGNvbnN0IHRpbWUgPSBNYXRoLm1heCgwLCB0aGlzLmlzQXN5bmMgPyBNYXRoLm1heCg1MCwgb3JnVGltZSkgOiBvcmdUaW1lKTtcclxuICAgIHRoaXMubGlzdCA9IHRoaXMuZm9ybVByb3BlcnR5LnZhbHVlQ2hhbmdlcy5waXBlKFxyXG4gICAgICBkZWJvdW5jZVRpbWUodGltZSksXHJcbiAgICAgIHN0YXJ0V2l0aCgnJyksXHJcbiAgICAgIGZsYXRNYXAoXHJcbiAgICAgICAgaW5wdXQgPT5cclxuICAgICAgICAgIHRoaXMuaXNBc3luYyA/IHRoaXMudWkuYXN5bmNEYXRhKGlucHV0KSA6IHRoaXMuZmlsdGVyRGF0YShpbnB1dCksXHJcbiAgICAgICksXHJcbiAgICAgIG1hcChyZXMgPT4gZ2V0RW51bShyZXMsIG51bGwsIHRoaXMuc2NoZW1hLnJlYWRPbmx5KSksXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmVzZXQodmFsdWU6IGFueSkge1xyXG4gICAgaWYgKHRoaXMuaXNBc3luYykgcmV0dXJuO1xyXG4gICAgc3dpdGNoICh0aGlzLnVpLnR5cGUpIHtcclxuICAgICAgY2FzZSAnZW1haWwnOlxyXG4gICAgICAgIHRoaXMuZml4RGF0YSA9IGdldENvcHlFbnVtKEVNQUlMU1VGRklYLCBudWxsLCB0aGlzLnNjaGVtYS5yZWFkT25seSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgdGhpcy5maXhEYXRhID0gZ2V0Q29weUVudW0oXHJcbiAgICAgICAgICB0aGlzLnNjaGVtYS5lbnVtLFxyXG4gICAgICAgICAgdGhpcy5mb3JtUHJvcGVydHkuZm9ybURhdGEsXHJcbiAgICAgICAgICB0aGlzLnNjaGVtYS5yZWFkT25seVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZpbHRlckRhdGEoaW5wdXQ6IHN0cmluZykge1xyXG4gICAgc3dpdGNoICh0aGlzLnVpLnR5cGUpIHtcclxuICAgICAgY2FzZSAnZW1haWwnOlxyXG4gICAgICAgIHJldHVybiB0aGlzLmFkZEVtYWlsU3VmZml4KGlucHV0KTtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gb2YoXHJcbiAgICAgICAgICB0aGlzLmZpeERhdGEuZmlsdGVyKG9wdGlvbiA9PiB0aGlzLmZpbHRlck9wdGlvbihpbnB1dCwgb3B0aW9uKSksXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgYWRkRW1haWxTdWZmaXgodmFsdWU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIG9mKFxyXG4gICAgICAhdmFsdWUgfHwgfnZhbHVlLmluZGV4T2YoJ0AnKVxyXG4gICAgICAgID8gW11cclxuICAgICAgICA6IHRoaXMuZml4RGF0YS5tYXAoZG9tYWluID0+IGAke3ZhbHVlfUAke2RvbWFpbi5sYWJlbH1gKSxcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==