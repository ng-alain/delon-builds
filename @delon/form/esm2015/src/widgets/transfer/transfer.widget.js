/**
 * @fileoverview added by tsickle
 * Generated from: src/widgets/transfer/transfer.widget.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { of } from 'rxjs';
import { getData } from '../../utils';
import { ControlUIWidget } from '../../widget';
export class TransferWidget extends ControlUIWidget {
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
        const { titles, operations, itemUnit, itemsUnit } = this.ui;
        this.i = {
            titles: titles || ['', ''],
            operations: operations || ['', ''],
            itemUnit: itemUnit || '项',
            itemsUnit: itemsUnit || '项',
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    reset(value) {
        getData(this.schema, this.ui, null).subscribe((/**
         * @param {?} list
         * @return {?}
         */
        list => {
            /** @type {?} */
            let formData = value;
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
                template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <nz-transfer\n    [nzDataSource]=\"list\"\n    [nzTitles]=\"i.titles\"\n    [nzOperations]=\"i.operations\"\n    [nzListStyle]=\"ui.listStyle\"\n    [nzItemUnit]=\"i.itemUnit\"\n    [nzItemsUnit]=\"i.itemsUnit\"\n    [nzShowSearch]=\"ui.showSearch\"\n    [nzFilterOption]=\"ui.filterOption\"\n    [nzSearchPlaceholder]=\"ui.searchPlaceholder\"\n    [nzNotFoundContent]=\"ui.notFoundContent\"\n    [nzCanMove]=\"_canMove\"\n    (nzChange)=\"_change($event)\"\n    (nzSearchChange)=\"_searchChange($event)\"\n    (nzSelectChange)=\"_selectChange($event)\"\n  >\n  </nz-transfer>\n</sf-item-wrap>\n",
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmZXIud2lkZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS9zcmMvd2lkZ2V0cy90cmFuc2Zlci90cmFuc2Zlci53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJFLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHdEMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN0QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBUy9DLE1BQU0sT0FBTyxjQUFlLFNBQVEsZUFBdUM7SUFOM0U7O1FBT0UsU0FBSSxHQUFtQixFQUFFLENBQUM7UUFFbEIsVUFBSyxHQUFtQixFQUFFLENBQUM7UUFxQ25DLGFBQVE7Ozs7UUFBRyxDQUFDLEdBQW9CLEVBQThCLEVBQUU7WUFDOUQsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0QsQ0FBQyxFQUFDO0lBcUJKLENBQUM7Ozs7SUExREMsUUFBUTtjQUNBLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUU7UUFDM0QsSUFBSSxDQUFDLENBQUMsR0FBRztZQUNQLE1BQU0sRUFBRSxNQUFNLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO1lBQzFCLFVBQVUsRUFBRSxVQUFVLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO1lBQ2xDLFFBQVEsRUFBRSxRQUFRLElBQUksR0FBRztZQUN6QixT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c0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUcmFuc2ZlckNhbk1vdmUsIFRyYW5zZmVyQ2hhbmdlLCBUcmFuc2Zlckl0ZW0sIFRyYW5zZmVyU2VhcmNoQ2hhbmdlLCBUcmFuc2ZlclNlbGVjdENoYW5nZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvdHJhbnNmZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFNGVmFsdWUgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgU0ZTY2hlbWFFbnVtIH0gZnJvbSAnLi4vLi4vc2NoZW1hJztcbmltcG9ydCB7IGdldERhdGEgfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgeyBDb250cm9sVUlXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuaW1wb3J0IHsgU0ZUcmFuc2ZlcldpZGdldFNjaGVtYSB9IGZyb20gJy4vc2NoZW1hJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtdHJhbnNmZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vdHJhbnNmZXIud2lkZ2V0Lmh0bWwnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgVHJhbnNmZXJXaWRnZXQgZXh0ZW5kcyBDb250cm9sVUlXaWRnZXQ8U0ZUcmFuc2ZlcldpZGdldFNjaGVtYT4gaW1wbGVtZW50cyBPbkluaXQge1xuICBsaXN0OiBTRlNjaGVtYUVudW1bXSA9IFtdO1xuICBpOiBhbnk7XG4gIHByaXZhdGUgX2RhdGE6IFNGU2NoZW1hRW51bVtdID0gW107XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3QgeyB0aXRsZXMsIG9wZXJhdGlvbnMsIGl0ZW1Vbml0LCBpdGVtc1VuaXQgfSA9IHRoaXMudWk7XG4gICAgdGhpcy5pID0ge1xuICAgICAgdGl0bGVzOiB0aXRsZXMgfHwgWycnLCAnJ10sXG4gICAgICBvcGVyYXRpb25zOiBvcGVyYXRpb25zIHx8IFsnJywgJyddLFxuICAgICAgaXRlbVVuaXQ6IGl0ZW1Vbml0IHx8ICfpobknLFxuICAgICAgaXRlbXNVbml0OiBpdGVtc1VuaXQgfHwgJ+mhuScsXG4gICAgfTtcbiAgfVxuXG4gIHJlc2V0KHZhbHVlOiBTRlZhbHVlKTogdm9pZCB7XG4gICAgZ2V0RGF0YSh0aGlzLnNjaGVtYSwgdGhpcy51aSwgbnVsbCkuc3Vic2NyaWJlKGxpc3QgPT4ge1xuICAgICAgbGV0IGZvcm1EYXRhID0gdmFsdWU7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZm9ybURhdGEpKSB7XG4gICAgICAgIGZvcm1EYXRhID0gW2Zvcm1EYXRhXTtcbiAgICAgIH1cbiAgICAgIGxpc3QuZm9yRWFjaCgoaXRlbTogU0ZTY2hlbWFFbnVtKSA9PiB7XG4gICAgICAgIGlmICh+KGZvcm1EYXRhIGFzIGFueVtdKS5pbmRleE9mKGl0ZW0udmFsdWUpKSB7XG4gICAgICAgICAgaXRlbS5kaXJlY3Rpb24gPSAncmlnaHQnO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMubGlzdCA9IGxpc3Q7XG4gICAgICB0aGlzLl9kYXRhID0gbGlzdC5maWx0ZXIodyA9PiB3LmRpcmVjdGlvbiA9PT0gJ3JpZ2h0Jyk7XG4gICAgICB0aGlzLm5vdGlmeSgpO1xuICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIG5vdGlmeSgpOiB2b2lkIHtcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5zZXRWYWx1ZShcbiAgICAgIHRoaXMuX2RhdGEubWFwKGkgPT4gaS52YWx1ZSksXG4gICAgICBmYWxzZSxcbiAgICApO1xuICB9XG5cbiAgX2Nhbk1vdmUgPSAoYXJnOiBUcmFuc2ZlckNhbk1vdmUpOiBPYnNlcnZhYmxlPFRyYW5zZmVySXRlbVtdPiA9PiB7XG4gICAgcmV0dXJuIHRoaXMudWkuY2FuTW92ZSA/IHRoaXMudWkuY2FuTW92ZShhcmcpIDogb2YoYXJnLmxpc3QpO1xuICB9O1xuXG4gIF9jaGFuZ2Uob3B0aW9uczogVHJhbnNmZXJDaGFuZ2UpOiB2b2lkIHtcbiAgICBpZiAob3B0aW9ucy50byA9PT0gJ3JpZ2h0Jykge1xuICAgICAgdGhpcy5fZGF0YSA9IHRoaXMuX2RhdGEuY29uY2F0KC4uLm9wdGlvbnMubGlzdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2RhdGEgPSB0aGlzLl9kYXRhLmZpbHRlcigodzogYW55KSA9PiBvcHRpb25zLmxpc3QuaW5kZXhPZih3KSA9PT0gLTEpO1xuICAgIH1cbiAgICBpZiAodGhpcy51aS5jaGFuZ2UpIHRoaXMudWkuY2hhbmdlKG9wdGlvbnMpO1xuICAgIHRoaXMubm90aWZ5KCk7XG4gIH1cblxuICBfc2VhcmNoQ2hhbmdlKG9wdGlvbnM6IFRyYW5zZmVyU2VhcmNoQ2hhbmdlKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudWkuc2VhcmNoQ2hhbmdlKSB0aGlzLnVpLnNlYXJjaENoYW5nZShvcHRpb25zKTtcbiAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIF9zZWxlY3RDaGFuZ2Uob3B0aW9uczogVHJhbnNmZXJTZWxlY3RDaGFuZ2UpOiB2b2lkIHtcbiAgICBpZiAodGhpcy51aS5zZWxlY3RDaGFuZ2UpIHRoaXMudWkuc2VsZWN0Q2hhbmdlKG9wdGlvbnMpO1xuICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG59XG4iXX0=