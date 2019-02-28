/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { getData } from '../../utils';
import { ControlWidget } from '../../widget';
export class TagWidget extends ControlWidget {
    /**
     * @param {?} value
     * @return {?}
     */
    reset(value) {
        getData(this.schema, this.ui, this.formProperty.formData).subscribe((/**
         * @param {?} list
         * @return {?}
         */
        list => {
            this.data = list;
            this.detectChanges();
        }));
    }
    /**
     * @param {?} item
     * @return {?}
     */
    onChange(item) {
        item.checked = !item.checked;
        this.updateValue();
        if (this.ui.checkedChange)
            this.ui.checkedChange(item.checked);
    }
    /**
     * @return {?}
     */
    _afterClose() {
        if (this.ui.afterClose)
            this.ui.afterClose();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    _close(e) {
        if (this.ui.onClose)
            this.ui.onClose(e);
    }
    /**
     * @private
     * @return {?}
     */
    updateValue() {
        this.formProperty.setValue(this.data.filter((/**
         * @param {?} w
         * @return {?}
         */
        w => w.checked)).map((/**
         * @param {?} i
         * @return {?}
         */
        i => i.value)), false);
    }
}
TagWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-tag',
                template: "<sf-item-wrap [id]=\"id\"\n              [schema]=\"schema\"\n              [ui]=\"ui\"\n              [showError]=\"showError\"\n              [error]=\"error\"\n              [showTitle]=\"schema.title\">\n\n  <nz-tag *ngFor=\"let i of data\"\n          [nzMode]=\"ui.mode || 'checkable'\"\n          [nzChecked]=\"i.checked\"\n          (nzAfterClose)=\"_afterClose()\"\n          (nzOnClose)=\"_close($event)\"\n          (nzCheckedChange)=\"onChange(i)\">\n    {{i.label}}\n  </nz-tag>\n\n</sf-item-wrap>\n"
            }] }
];
if (false) {
    /** @type {?} */
    TagWidget.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9mb3JtLyIsInNvdXJjZXMiOlsic3JjL3dpZGdldHMvdGFnL3RhZy53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHMUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN0QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBTTdDLE1BQU0sT0FBTyxTQUFVLFNBQVEsYUFBYTs7Ozs7SUFHMUMsS0FBSyxDQUFDLEtBQWM7UUFDbEIsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxJQUFJLENBQUMsRUFBRTtZQUN6RSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNqQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdkIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxJQUFrQjtRQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM3QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWE7WUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakUsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVTtZQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDL0MsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsQ0FBYTtRQUNsQixJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTztZQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7O0lBRU8sV0FBVztRQUNqQixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU07Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUMsQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDeEYsQ0FBQzs7O1lBOUJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsUUFBUTtnQkFDbEIsMmdCQUFnQzthQUNqQzs7OztJQUVDLHlCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU0ZWYWx1ZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBTRlNjaGVtYUVudW0gfSBmcm9tICcuLi8uLi9zY2hlbWEnO1xuaW1wb3J0IHsgZ2V0RGF0YSB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi10YWcnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFnLndpZGdldC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGFnV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCB7XG4gIGRhdGE6IFNGU2NoZW1hRW51bVtdO1xuXG4gIHJlc2V0KHZhbHVlOiBTRlZhbHVlKSB7XG4gICAgZ2V0RGF0YSh0aGlzLnNjaGVtYSwgdGhpcy51aSwgdGhpcy5mb3JtUHJvcGVydHkuZm9ybURhdGEpLnN1YnNjcmliZShsaXN0ID0+IHtcbiAgICAgIHRoaXMuZGF0YSA9IGxpc3Q7XG4gICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uQ2hhbmdlKGl0ZW06IFNGU2NoZW1hRW51bSkge1xuICAgIGl0ZW0uY2hlY2tlZCA9ICFpdGVtLmNoZWNrZWQ7XG4gICAgdGhpcy51cGRhdGVWYWx1ZSgpO1xuICAgIGlmICh0aGlzLnVpLmNoZWNrZWRDaGFuZ2UpIHRoaXMudWkuY2hlY2tlZENoYW5nZShpdGVtLmNoZWNrZWQpO1xuICB9XG5cbiAgX2FmdGVyQ2xvc2UoKSB7XG4gICAgaWYgKHRoaXMudWkuYWZ0ZXJDbG9zZSkgdGhpcy51aS5hZnRlckNsb3NlKCk7XG4gIH1cblxuICBfY2xvc2UoZTogTW91c2VFdmVudCkge1xuICAgIGlmICh0aGlzLnVpLm9uQ2xvc2UpIHRoaXMudWkub25DbG9zZShlKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlVmFsdWUoKSB7XG4gICAgdGhpcy5mb3JtUHJvcGVydHkuc2V0VmFsdWUodGhpcy5kYXRhLmZpbHRlcih3ID0+IHcuY2hlY2tlZCkubWFwKGkgPT4gaS52YWx1ZSksIGZhbHNlKTtcbiAgfVxufVxuIl19