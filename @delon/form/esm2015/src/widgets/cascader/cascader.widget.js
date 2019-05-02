/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { getData, toBool } from '../../utils';
import { ControlWidget } from '../../widget';
export class CascaderWidget extends ControlWidget {
    constructor() {
        super(...arguments);
        this.data = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.clearText = this.ui.clearText || '清除';
        this.showArrow = toBool(this.ui.showArrow, true);
        this.showInput = toBool(this.ui.showInput, true);
        this.triggerAction = this.ui.triggerAction || ['click'];
        if (!!this.ui.asyncData) {
            this.loadData = (/**
             * @param {?} node
             * @param {?} index
             * @return {?}
             */
            (node, index) => ((/** @type {?} */ (this.ui.asyncData)))(node, index, this));
        }
    }
    /**
     * @param {?} _value
     * @return {?}
     */
    reset(_value) {
        getData(this.schema, {}, this.formProperty.formData).subscribe((/**
         * @param {?} list
         * @return {?}
         */
        list => {
            this.data = list;
            this.detectChanges();
        }));
    }
    /**
     * @param {?} status
     * @return {?}
     */
    _visibleChange(status) {
        if (this.ui.visibleChange)
            this.ui.visibleChange(status);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    _change(value) {
        this.setValue(value);
        if (this.ui.change)
            this.ui.change(value);
    }
    /**
     * @param {?} options
     * @return {?}
     */
    _selectionChange(options) {
        if (this.ui.selectionChange)
            this.ui.selectionChange(options);
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
     * @param {?} options
     * @return {?}
     */
    _clear(options) {
        if (this.ui.clear)
            this.ui.clear(options);
    }
}
CascaderWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-cascader',
                template: "<sf-item-wrap [id]=\"id\"\n              [schema]=\"schema\"\n              [ui]=\"ui\"\n              [showError]=\"showError\"\n              [error]=\"error\"\n              [showTitle]=\"schema.title\">\n  <nz-cascader [nzDisabled]=\"disabled\"\n               [nzSize]=\"ui.size\"\n               [ngModel]=\"value\"\n               (ngModelChange)=\"_change($event)\"\n               [nzOptions]=\"data\"\n               [nzAllowClear]=\"ui.allowClear\"\n               [nzAutoFocus]=\"ui.autoFocus\"\n               [nzChangeOn]=\"ui.changeOn\"\n               [nzChangeOnSelect]=\"ui.changeOnSelect\"\n               [nzColumnClassName]=\"ui.columnClassName\"\n               [nzExpandTrigger]=\"ui.expandTrigger\"\n               [nzMenuClassName]=\"ui.menuClassName\"\n               [nzMenuStyle]=\"ui.menuStyle\"\n               [nzLabelProperty]=\"ui.labelProperty || 'label'\"\n               [nzValueProperty]=\"ui.valueProperty || 'value'\"\n               [nzLoadData]=\"loadData\"\n               [nzPlaceHolder]=\"ui.placeholder\"\n               [nzShowArrow]=\"showArrow\"\n               [nzShowInput]=\"showInput\"\n               [nzShowSearch]=\"ui.showSearch\"\n               (nzClear)=\"_clear($event)\"\n               (nzVisibleChange)=\"_visibleChange($event)\"\n               (nzSelect)=\"_select($event)\"\n               (nzSelectionChange)=\"_selectionChange($event)\">\n  </nz-cascader>\n</sf-item-wrap>\n"
            }] }
];
if (false) {
    /** @type {?} */
    CascaderWidget.prototype.clearText;
    /** @type {?} */
    CascaderWidget.prototype.showArrow;
    /** @type {?} */
    CascaderWidget.prototype.showInput;
    /** @type {?} */
    CascaderWidget.prototype.triggerAction;
    /** @type {?} */
    CascaderWidget.prototype.data;
    /** @type {?} */
    CascaderWidget.prototype.loadData;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FzY2FkZXIud2lkZ2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0cy9jYXNjYWRlci9jYXNjYWRlci53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFJbEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDOUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQU03QyxNQUFNLE9BQU8sY0FBZSxTQUFRLGFBQWE7SUFKakQ7O1FBU0UsU0FBSSxHQUFtQixFQUFFLENBQUM7SUF3QzVCLENBQUM7Ozs7SUFyQ0MsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDO1FBQzNDLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRTtZQUN2QixJQUFJLENBQUMsUUFBUTs7Ozs7WUFBRyxDQUFDLElBQVMsRUFBRSxLQUFhLEVBQUUsRUFBRSxDQUFDLENBQUMsbUJBQUEsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUEsQ0FBQztTQUM3RjtJQUNILENBQUM7Ozs7O0lBRUQsS0FBSyxDQUFDLE1BQWU7UUFDbkIsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUzs7OztRQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3BFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN2QixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLE1BQWU7UUFDNUIsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWE7WUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxLQUFhO1FBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckIsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU07WUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLE9BQVk7UUFDM0IsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLGVBQWU7WUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNoRSxDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxPQUFZO1FBQ2xCLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNO1lBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsT0FBWTtRQUNqQixJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSztZQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVDLENBQUM7OztZQWhERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLDg2Q0FBcUM7YUFDdEM7Ozs7SUFFQyxtQ0FBa0I7O0lBQ2xCLG1DQUFtQjs7SUFDbkIsbUNBQW1COztJQUNuQix1Q0FBd0I7O0lBQ3hCLDhCQUEwQjs7SUFDMUIsa0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBTRlZhbHVlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlJztcbmltcG9ydCB7IFNGU2NoZW1hRW51bSB9IGZyb20gJy4uLy4uL3NjaGVtYSc7XG5pbXBvcnQgeyBnZXREYXRhLCB0b0Jvb2wgfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtY2FzY2FkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FzY2FkZXIud2lkZ2V0Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBDYXNjYWRlcldpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjbGVhclRleHQ6IHN0cmluZztcbiAgc2hvd0Fycm93OiBib29sZWFuO1xuICBzaG93SW5wdXQ6IGJvb2xlYW47XG4gIHRyaWdnZXJBY3Rpb246IHN0cmluZ1tdO1xuICBkYXRhOiBTRlNjaGVtYUVudW1bXSA9IFtdO1xuICBsb2FkRGF0YTogYW55O1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYXJUZXh0ID0gdGhpcy51aS5jbGVhclRleHQgfHwgJ+a4hemZpCc7XG4gICAgdGhpcy5zaG93QXJyb3cgPSB0b0Jvb2wodGhpcy51aS5zaG93QXJyb3csIHRydWUpO1xuICAgIHRoaXMuc2hvd0lucHV0ID0gdG9Cb29sKHRoaXMudWkuc2hvd0lucHV0LCB0cnVlKTtcbiAgICB0aGlzLnRyaWdnZXJBY3Rpb24gPSB0aGlzLnVpLnRyaWdnZXJBY3Rpb24gfHwgWydjbGljayddO1xuICAgIGlmICghIXRoaXMudWkuYXN5bmNEYXRhKSB7XG4gICAgICB0aGlzLmxvYWREYXRhID0gKG5vZGU6IGFueSwgaW5kZXg6IG51bWJlcikgPT4gKHRoaXMudWkuYXN5bmNEYXRhIGFzIGFueSkobm9kZSwgaW5kZXgsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0KF92YWx1ZTogU0ZWYWx1ZSkge1xuICAgIGdldERhdGEodGhpcy5zY2hlbWEsIHt9LCB0aGlzLmZvcm1Qcm9wZXJ0eS5mb3JtRGF0YSkuc3Vic2NyaWJlKGxpc3QgPT4ge1xuICAgICAgdGhpcy5kYXRhID0gbGlzdDtcbiAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuICB9XG5cbiAgX3Zpc2libGVDaGFuZ2Uoc3RhdHVzOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMudWkudmlzaWJsZUNoYW5nZSkgdGhpcy51aS52aXNpYmxlQ2hhbmdlKHN0YXR1cyk7XG4gIH1cblxuICBfY2hhbmdlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgICBpZiAodGhpcy51aS5jaGFuZ2UpIHRoaXMudWkuY2hhbmdlKHZhbHVlKTtcbiAgfVxuXG4gIF9zZWxlY3Rpb25DaGFuZ2Uob3B0aW9uczogYW55KSB7XG4gICAgaWYgKHRoaXMudWkuc2VsZWN0aW9uQ2hhbmdlKSB0aGlzLnVpLnNlbGVjdGlvbkNoYW5nZShvcHRpb25zKTtcbiAgfVxuXG4gIF9zZWxlY3Qob3B0aW9uczogYW55KSB7XG4gICAgaWYgKHRoaXMudWkuc2VsZWN0KSB0aGlzLnVpLnNlbGVjdChvcHRpb25zKTtcbiAgfVxuXG4gIF9jbGVhcihvcHRpb25zOiBhbnkpIHtcbiAgICBpZiAodGhpcy51aS5jbGVhcikgdGhpcy51aS5jbGVhcihvcHRpb25zKTtcbiAgfVxufVxuIl19