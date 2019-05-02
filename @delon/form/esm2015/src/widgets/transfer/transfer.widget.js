/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { of } from 'rxjs';
import { getData } from '../../utils';
import { ControlWidget } from '../../widget';
export class TransferWidget extends ControlWidget {
    constructor() {
        super(...arguments);
        this.list = [];
        this._data = [];
        this._canMove = (/**
         * @param {?} arg
         * @return {?}
         */
        (arg) => {
            return this.ui.canMove ? this.ui.canMove(arg) : of(arg.list);
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.i = {
            titles: this.ui.titles || ['', ''],
            operations: this.ui.operations || ['', ''],
            itemUnit: this.ui.itemUnit || '项',
            itemsUnit: this.ui.itemsUnit || '项',
        };
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
            /** @type {?} */
            let formData = this.formProperty.formData;
            if (!Array.isArray(formData)) {
                formData = [formData];
            }
            list.forEach((/**
             * @param {?} item
             * @return {?}
             */
            (item) => {
                if (~((/** @type {?} */ (formData))).indexOf(item.value)) {
                    item.direction = 'right';
                }
            }));
            this.list = list;
            this._data = list.filter((/**
             * @param {?} w
             * @return {?}
             */
            w => w.direction === 'right'));
            this.notify();
            this.detectChanges();
        }));
    }
    /**
     * @private
     * @return {?}
     */
    notify() {
        this.formProperty.setValue(this._data.map((/**
         * @param {?} i
         * @return {?}
         */
        i => i.value)), false);
    }
    /**
     * @param {?} options
     * @return {?}
     */
    _change(options) {
        if (options.to === 'right') {
            this._data = this._data.concat(...options.list);
        }
        else {
            this._data = this._data.filter((/**
             * @param {?} w
             * @return {?}
             */
            (w) => options.list.indexOf(w) === -1));
        }
        if (this.ui.change)
            this.ui.change(options);
        this.notify();
    }
    /**
     * @param {?} options
     * @return {?}
     */
    _searchChange(options) {
        if (this.ui.searchChange)
            this.ui.searchChange(options);
        this.detectChanges();
    }
    /**
     * @param {?} options
     * @return {?}
     */
    _selectChange(options) {
        if (this.ui.selectChange)
            this.ui.selectChange(options);
        this.detectChanges();
    }
}
TransferWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-transfer',
                template: "<sf-item-wrap [id]=\"id\"\n              [schema]=\"schema\"\n              [ui]=\"ui\"\n              [showError]=\"showError\"\n              [error]=\"error\"\n              [showTitle]=\"schema.title\">\n\n  <nz-transfer [nzDataSource]=\"list\"\n               [nzTitles]=\"i.titles\"\n               [nzOperations]=\"i.operations\"\n               [nzListStyle]=\"ui.listStyle\"\n               [nzItemUnit]=\"i.itemUnit\"\n               [nzItemsUnit]=\"i.itemsUnit\"\n               [nzShowSearch]=\"ui.showSearch\"\n               [nzFilterOption]=\"ui.filterOption\"\n               [nzSearchPlaceholder]=\"ui.searchPlaceholder\"\n               [nzNotFoundContent]=\"ui.notFoundContent\"\n               [nzCanMove]=\"_canMove\"\n               (nzChange)=\"_change($event)\"\n               (nzSearchChange)=\"_searchChange($event)\"\n               (nzSelectChange)=\"_selectChange($event)\">\n  </nz-transfer>\n\n</sf-item-wrap>\n"
            }] }
];
if (false) {
    /** @type {?} */
    TransferWidget.prototype.list;
    /** @type {?} */
    TransferWidget.prototype.i;
    /**
     * @type {?}
     * @private
     */
    TransferWidget.prototype._data;
    /** @type {?} */
    TransferWidget.prototype._canMove;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmZXIud2lkZ2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0cy90cmFuc2Zlci90cmFuc2Zlci53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFRbEQsT0FBTyxFQUFFLEVBQUUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUd0QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFNN0MsTUFBTSxPQUFPLGNBQWUsU0FBUSxhQUFhO0lBSmpEOztRQUtFLFNBQUksR0FBbUIsRUFBRSxDQUFDO1FBRWxCLFVBQUssR0FBbUIsRUFBRSxDQUFDO1FBaUNuQyxhQUFROzs7O1FBQUcsQ0FBQyxHQUFvQixFQUE4QixFQUFFO1lBQzlELE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9ELENBQUMsRUFBQztJQXFCSixDQUFDOzs7O0lBdERDLFFBQVE7UUFDTixJQUFJLENBQUMsQ0FBQyxHQUFHO1lBQ1AsTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQztZQUNsQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO1lBQzFDLFFBQVEsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsSUFBSSxHQUFHO1lBQ2pDLFNBQVMsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsSUFBSSxHQUFHO1NBQ3BDLENBQUM7SUFDSixDQUFDOzs7OztJQUVELEtBQUssQ0FBQyxNQUFlO1FBQ25CLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUMsU0FBUzs7OztRQUFDLElBQUksQ0FBQyxFQUFFOztnQkFDL0MsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUTtZQUN6QyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDNUIsUUFBUSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDdkI7WUFDRCxJQUFJLENBQUMsT0FBTzs7OztZQUFDLENBQUMsSUFBa0IsRUFBRSxFQUFFO2dCQUNsQyxJQUFJLENBQUMsQ0FBQyxtQkFBQSxRQUFRLEVBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQzVDLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO2lCQUMxQjtZQUNILENBQUMsRUFBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTTs7OztZQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsS0FBSyxPQUFPLEVBQUMsQ0FBQztZQUN2RCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDZCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdkIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVPLE1BQU07UUFDWixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUc7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNsRSxDQUFDOzs7OztJQU1ELE9BQU8sQ0FBQyxPQUF1QjtRQUM3QixJQUFJLE9BQU8sQ0FBQyxFQUFFLEtBQUssT0FBTyxFQUFFO1lBQzFCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDakQ7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNOzs7O1lBQUMsQ0FBQyxDQUFNLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFDLENBQUM7U0FDNUU7UUFDRCxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTTtZQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxPQUE2QjtRQUN6QyxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWTtZQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxPQUE2QjtRQUN6QyxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWTtZQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7WUE5REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QiwyN0JBQXFDO2FBQ3RDOzs7O0lBRUMsOEJBQTBCOztJQUMxQiwyQkFBTzs7Ozs7SUFDUCwrQkFBbUM7O0lBaUNuQyxrQ0FFRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBUcmFuc2ZlckNhbk1vdmUsXG4gIFRyYW5zZmVyQ2hhbmdlLFxuICBUcmFuc2Zlckl0ZW0sXG4gIFRyYW5zZmVyU2VhcmNoQ2hhbmdlLFxuICBUcmFuc2ZlclNlbGVjdENoYW5nZSxcbn0gZnJvbSAnbmctem9ycm8tYW50ZC90cmFuc2Zlcic7XG5pbXBvcnQgeyBvZiwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU0ZWYWx1ZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBTRlNjaGVtYUVudW0gfSBmcm9tICcuLi8uLi9zY2hlbWEnO1xuaW1wb3J0IHsgZ2V0RGF0YSB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi10cmFuc2ZlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi90cmFuc2Zlci53aWRnZXQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRyYW5zZmVyV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGxpc3Q6IFNGU2NoZW1hRW51bVtdID0gW107XG4gIGk6IGFueTtcbiAgcHJpdmF0ZSBfZGF0YTogU0ZTY2hlbWFFbnVtW10gPSBbXTtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmkgPSB7XG4gICAgICB0aXRsZXM6IHRoaXMudWkudGl0bGVzIHx8IFsnJywgJyddLFxuICAgICAgb3BlcmF0aW9uczogdGhpcy51aS5vcGVyYXRpb25zIHx8IFsnJywgJyddLFxuICAgICAgaXRlbVVuaXQ6IHRoaXMudWkuaXRlbVVuaXQgfHwgJ+mhuScsXG4gICAgICBpdGVtc1VuaXQ6IHRoaXMudWkuaXRlbXNVbml0IHx8ICfpobknLFxuICAgIH07XG4gIH1cblxuICByZXNldChfdmFsdWU6IFNGVmFsdWUpIHtcbiAgICBnZXREYXRhKHRoaXMuc2NoZW1hLCB0aGlzLnVpLCBudWxsKS5zdWJzY3JpYmUobGlzdCA9PiB7XG4gICAgICBsZXQgZm9ybURhdGEgPSB0aGlzLmZvcm1Qcm9wZXJ0eS5mb3JtRGF0YTtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShmb3JtRGF0YSkpIHtcbiAgICAgICAgZm9ybURhdGEgPSBbZm9ybURhdGFdO1xuICAgICAgfVxuICAgICAgbGlzdC5mb3JFYWNoKChpdGVtOiBTRlNjaGVtYUVudW0pID0+IHtcbiAgICAgICAgaWYgKH4oZm9ybURhdGEgYXMgYW55W10pLmluZGV4T2YoaXRlbS52YWx1ZSkpIHtcbiAgICAgICAgICBpdGVtLmRpcmVjdGlvbiA9ICdyaWdodCc7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5saXN0ID0gbGlzdDtcbiAgICAgIHRoaXMuX2RhdGEgPSBsaXN0LmZpbHRlcih3ID0+IHcuZGlyZWN0aW9uID09PSAncmlnaHQnKTtcbiAgICAgIHRoaXMubm90aWZ5KCk7XG4gICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgbm90aWZ5KCkge1xuICAgIHRoaXMuZm9ybVByb3BlcnR5LnNldFZhbHVlKHRoaXMuX2RhdGEubWFwKGkgPT4gaS52YWx1ZSksIGZhbHNlKTtcbiAgfVxuXG4gIF9jYW5Nb3ZlID0gKGFyZzogVHJhbnNmZXJDYW5Nb3ZlKTogT2JzZXJ2YWJsZTxUcmFuc2Zlckl0ZW1bXT4gPT4ge1xuICAgIHJldHVybiB0aGlzLnVpLmNhbk1vdmUgPyB0aGlzLnVpLmNhbk1vdmUoYXJnKSA6IG9mKGFyZy5saXN0KTtcbiAgfTtcblxuICBfY2hhbmdlKG9wdGlvbnM6IFRyYW5zZmVyQ2hhbmdlKSB7XG4gICAgaWYgKG9wdGlvbnMudG8gPT09ICdyaWdodCcpIHtcbiAgICAgIHRoaXMuX2RhdGEgPSB0aGlzLl9kYXRhLmNvbmNhdCguLi5vcHRpb25zLmxpc3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9kYXRhID0gdGhpcy5fZGF0YS5maWx0ZXIoKHc6IGFueSkgPT4gb3B0aW9ucy5saXN0LmluZGV4T2YodykgPT09IC0xKTtcbiAgICB9XG4gICAgaWYgKHRoaXMudWkuY2hhbmdlKSB0aGlzLnVpLmNoYW5nZShvcHRpb25zKTtcbiAgICB0aGlzLm5vdGlmeSgpO1xuICB9XG5cbiAgX3NlYXJjaENoYW5nZShvcHRpb25zOiBUcmFuc2ZlclNlYXJjaENoYW5nZSkge1xuICAgIGlmICh0aGlzLnVpLnNlYXJjaENoYW5nZSkgdGhpcy51aS5zZWFyY2hDaGFuZ2Uob3B0aW9ucyk7XG4gICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBfc2VsZWN0Q2hhbmdlKG9wdGlvbnM6IFRyYW5zZmVyU2VsZWN0Q2hhbmdlKSB7XG4gICAgaWYgKHRoaXMudWkuc2VsZWN0Q2hhbmdlKSB0aGlzLnVpLnNlbGVjdENoYW5nZShvcHRpb25zKTtcbiAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgfVxufVxuIl19