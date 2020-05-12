/**
 * @fileoverview added by tsickle
 * Generated from: src/widgets/cascader/cascader.widget.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { getData, toBool } from '../../utils';
import { ControlUIWidget } from '../../widget';
export class CascaderWidget extends ControlUIWidget {
    constructor() {
        super(...arguments);
        this.data = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        const { clearText, showArrow, showInput, triggerAction, asyncData } = this.ui;
        this.clearText = clearText || '清除';
        this.showArrow = toBool(showArrow, true);
        this.showInput = toBool(showInput, true);
        this.triggerAction = triggerAction || ['click'];
        if (!!asyncData) {
            this.loadData = (/**
             * @param {?} node
             * @param {?} index
             * @return {?}
             */
            (node, index) => asyncData(node, index, this).then((/**
             * @return {?}
             */
            () => this.detectChanges())));
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    reset(value) {
        getData(this.schema, {}, value).subscribe((/**
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
        if (this.ui.change) {
            this.ui.change(value);
        }
    }
    /**
     * @param {?} options
     * @return {?}
     */
    _selectionChange(options) {
        if (this.ui.selectionChange) {
            this.ui.selectionChange(options);
        }
    }
    /**
     * @return {?}
     */
    _clear() {
        if (this.ui.clear)
            this.ui.clear();
    }
}
CascaderWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-cascader',
                template: "<sf-item-wrap [id]=\"id\"\n              [schema]=\"schema\"\n              [ui]=\"ui\"\n              [showError]=\"showError\"\n              [error]=\"error\"\n              [showTitle]=\"schema.title\">\n  <nz-cascader [nzDisabled]=\"disabled\"\n               [nzSize]=\"ui.size\"\n               [ngModel]=\"value\"\n               (ngModelChange)=\"_change($event)\"\n               [nzOptions]=\"data\"\n               [nzAllowClear]=\"ui.allowClear\"\n               [nzAutoFocus]=\"ui.autoFocus\"\n               [nzChangeOn]=\"ui.changeOn\"\n               [nzChangeOnSelect]=\"ui.changeOnSelect\"\n               [nzColumnClassName]=\"ui.columnClassName\"\n               [nzExpandTrigger]=\"ui.expandTrigger\"\n               [nzMenuClassName]=\"ui.menuClassName\"\n               [nzMenuStyle]=\"ui.menuStyle\"\n               [nzLabelProperty]=\"ui.labelProperty || 'label'\"\n               [nzValueProperty]=\"ui.valueProperty || 'value'\"\n               [nzLoadData]=\"loadData\"\n               [nzPlaceHolder]=\"ui.placeholder\"\n               [nzShowArrow]=\"showArrow\"\n               [nzShowInput]=\"showInput\"\n               [nzShowSearch]=\"ui.showSearch\"\n               (nzClear)=\"_clear()\"\n               (nzVisibleChange)=\"_visibleChange($event)\"\n               (nzSelectionChange)=\"_selectionChange($event)\">\n  </nz-cascader>\n</sf-item-wrap>\n",
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FzY2FkZXIud2lkZ2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0cy9jYXNjYWRlci9jYXNjYWRlci53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBS3JFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFRL0MsTUFBTSxPQUFPLGNBQWUsU0FBUSxlQUF1QztJQU4zRTs7UUFXRSxTQUFJLEdBQW1CLEVBQUUsQ0FBQztJQXlDNUIsQ0FBQzs7OztJQXRDQyxRQUFRO2NBQ0EsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUU7UUFDN0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLElBQUksSUFBSSxDQUFDO1FBQ25DLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsQ0FBQyxTQUFTLEVBQUU7WUFDZixJQUFJLENBQUMsUUFBUTs7Ozs7WUFBRyxDQUFDLElBQW9CLEVBQUUsS0FBYSxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJOzs7WUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUMsQ0FBQSxDQUFDO1NBQ3hIO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxLQUFLLENBQUMsS0FBYztRQUNsQixPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUMsU0FBUzs7OztRQUFDLElBQUksQ0FBQyxFQUFFO1lBQy9DLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN2QixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLE1BQWU7UUFDNUIsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWE7WUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxLQUFtQjtRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUU7WUFDbEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdkI7SUFDSCxDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLE9BQXlCO1FBQ3hDLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxlQUFlLEVBQUU7WUFDM0IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDbEM7SUFDSCxDQUFDOzs7O0lBRUQsTUFBTTtRQUNKLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLO1lBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNyQyxDQUFDOzs7WUFuREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2Qix5M0NBQXFDO2dCQUNyQyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0Qzs7OztJQUVDLG1DQUFrQjs7SUFDbEIsbUNBQW1COztJQUNuQixtQ0FBbUI7O0lBQ25CLHVDQUF3Qjs7SUFDeEIsOEJBQTBCOztJQUMxQixrQ0FBb0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhc2NhZGVyT3B0aW9uIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jYXNjYWRlcic7XG5pbXBvcnQgeyBTRkNhc2NhZGVyV2lkZ2V0U2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEnO1xuaW1wb3J0IHsgU0ZWYWx1ZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBTRlNjaGVtYUVudW0gfSBmcm9tICcuLi8uLi9zY2hlbWEnO1xuaW1wb3J0IHsgZ2V0RGF0YSwgdG9Cb29sIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHsgQ29udHJvbFVJV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtY2FzY2FkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FzY2FkZXIud2lkZ2V0Lmh0bWwnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgQ2FzY2FkZXJXaWRnZXQgZXh0ZW5kcyBDb250cm9sVUlXaWRnZXQ8U0ZDYXNjYWRlcldpZGdldFNjaGVtYT4gaW1wbGVtZW50cyBPbkluaXQge1xuICBjbGVhclRleHQ6IHN0cmluZztcbiAgc2hvd0Fycm93OiBib29sZWFuO1xuICBzaG93SW5wdXQ6IGJvb2xlYW47XG4gIHRyaWdnZXJBY3Rpb246IHN0cmluZ1tdO1xuICBkYXRhOiBTRlNjaGVtYUVudW1bXSA9IFtdO1xuICBsb2FkRGF0YTogKG5vZGU6IENhc2NhZGVyT3B0aW9uLCBpbmRleDogbnVtYmVyKSA9PiBQcm9taXNlTGlrZTxhbnk+O1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgY2xlYXJUZXh0LCBzaG93QXJyb3csIHNob3dJbnB1dCwgdHJpZ2dlckFjdGlvbiwgYXN5bmNEYXRhIH0gPSB0aGlzLnVpO1xuICAgIHRoaXMuY2xlYXJUZXh0ID0gY2xlYXJUZXh0IHx8ICfmuIXpmaQnO1xuICAgIHRoaXMuc2hvd0Fycm93ID0gdG9Cb29sKHNob3dBcnJvdywgdHJ1ZSk7XG4gICAgdGhpcy5zaG93SW5wdXQgPSB0b0Jvb2woc2hvd0lucHV0LCB0cnVlKTtcbiAgICB0aGlzLnRyaWdnZXJBY3Rpb24gPSB0cmlnZ2VyQWN0aW9uIHx8IFsnY2xpY2snXTtcbiAgICBpZiAoISFhc3luY0RhdGEpIHtcbiAgICAgIHRoaXMubG9hZERhdGEgPSAobm9kZTogQ2FzY2FkZXJPcHRpb24sIGluZGV4OiBudW1iZXIpID0+IGFzeW5jRGF0YShub2RlLCBpbmRleCwgdGhpcykudGhlbigoKSA9PiB0aGlzLmRldGVjdENoYW5nZXMoKSk7XG4gICAgfVxuICB9XG5cbiAgcmVzZXQodmFsdWU6IFNGVmFsdWUpIHtcbiAgICBnZXREYXRhKHRoaXMuc2NoZW1hLCB7fSwgdmFsdWUpLnN1YnNjcmliZShsaXN0ID0+IHtcbiAgICAgIHRoaXMuZGF0YSA9IGxpc3Q7XG4gICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIF92aXNpYmxlQ2hhbmdlKHN0YXR1czogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLnVpLnZpc2libGVDaGFuZ2UpIHRoaXMudWkudmlzaWJsZUNoYW5nZShzdGF0dXMpO1xuICB9XG5cbiAgX2NoYW5nZSh2YWx1ZTogYW55W10gfCBudWxsKSB7XG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgaWYgKHRoaXMudWkuY2hhbmdlKSB7XG4gICAgICB0aGlzLnVpLmNoYW5nZSh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgX3NlbGVjdGlvbkNoYW5nZShvcHRpb25zOiBDYXNjYWRlck9wdGlvbltdKSB7XG4gICAgaWYgKHRoaXMudWkuc2VsZWN0aW9uQ2hhbmdlKSB7XG4gICAgICB0aGlzLnVpLnNlbGVjdGlvbkNoYW5nZShvcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICBfY2xlYXIoKSB7XG4gICAgaWYgKHRoaXMudWkuY2xlYXIpIHRoaXMudWkuY2xlYXIoKTtcbiAgfVxufVxuIl19