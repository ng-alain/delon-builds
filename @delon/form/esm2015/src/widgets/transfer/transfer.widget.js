/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                template: "<sf-item-wrap [id]=\"id\"\n              [schema]=\"schema\"\n              [ui]=\"ui\"\n              [showError]=\"showError\"\n              [error]=\"error\"\n              [showTitle]=\"schema.title\">\n\n  <nz-transfer [nzDataSource]=\"list\"\n               [nzTitles]=\"i.titles\"\n               [nzOperations]=\"i.operations\"\n               [nzListStyle]=\"ui.listStyle\"\n               [nzItemUnit]=\"i.itemUnit\"\n               [nzItemsUnit]=\"i.itemsUnit\"\n               [nzShowSearch]=\"ui.showSearch\"\n               [nzFilterOption]=\"ui.filterOption\"\n               [nzSearchPlaceholder]=\"ui.searchPlaceholder\"\n               [nzNotFoundContent]=\"ui.notFoundContent\"\n               [nzCanMove]=\"_canMove\"\n               (nzChange)=\"_change($event)\"\n               (nzSearchChange)=\"_searchChange($event)\"\n               (nzSelectChange)=\"_selectChange($event)\">\n  </nz-transfer>\n\n</sf-item-wrap>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmZXIud2lkZ2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0cy90cmFuc2Zlci90cmFuc2Zlci53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFckUsT0FBTyxFQUFFLEVBQUUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUd0QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFTL0MsTUFBTSxPQUFPLGNBQWUsU0FBUSxlQUF1QztJQU4zRTs7UUFPRSxTQUFJLEdBQW1CLEVBQUUsQ0FBQztRQUVsQixVQUFLLEdBQW1CLEVBQUUsQ0FBQztRQWtDbkMsYUFBUTs7OztRQUFHLENBQUMsR0FBb0IsRUFBOEIsRUFBRTtZQUM5RCxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvRCxDQUFDLEVBQUM7SUFxQkosQ0FBQzs7OztJQXZEQyxRQUFRO2NBQ0EsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRTtRQUMzRCxJQUFJLENBQUMsQ0FBQyxHQUFHO1lBQ1AsTUFBTSxFQUFFLE1BQU0sSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUM7WUFDMUIsVUFBVSxFQUFFLFVBQVUsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUM7WUFDbEMsUUFBUSxFQUFFLFFBQVEsSUFBSSxHQUFHO1lBQ3pCLFNBQVMsRUFBRSxTQUFTLElBQUks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IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJhbnNmZXJDYW5Nb3ZlLCBUcmFuc2ZlckNoYW5nZSwgVHJhbnNmZXJJdGVtLCBUcmFuc2ZlclNlYXJjaENoYW5nZSwgVHJhbnNmZXJTZWxlY3RDaGFuZ2UgfSBmcm9tICduZy16b3Jyby1hbnRkL3RyYW5zZmVyJztcbmltcG9ydCB7IG9mLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTRlZhbHVlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlJztcbmltcG9ydCB7IFNGU2NoZW1hRW51bSB9IGZyb20gJy4uLy4uL3NjaGVtYSc7XG5pbXBvcnQgeyBnZXREYXRhIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHsgQ29udHJvbFVJV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcbmltcG9ydCB7IFNGVHJhbnNmZXJXaWRnZXRTY2hlbWEgfSBmcm9tICcuL3NjaGVtYSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLXRyYW5zZmVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RyYW5zZmVyLndpZGdldC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIFRyYW5zZmVyV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFVJV2lkZ2V0PFNGVHJhbnNmZXJXaWRnZXRTY2hlbWE+IGltcGxlbWVudHMgT25Jbml0IHtcbiAgbGlzdDogU0ZTY2hlbWFFbnVtW10gPSBbXTtcbiAgaTogYW55O1xuICBwcml2YXRlIF9kYXRhOiBTRlNjaGVtYUVudW1bXSA9IFtdO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgdGl0bGVzLCBvcGVyYXRpb25zLCBpdGVtVW5pdCwgaXRlbXNVbml0IH0gPSB0aGlzLnVpO1xuICAgIHRoaXMuaSA9IHtcbiAgICAgIHRpdGxlczogdGl0bGVzIHx8IFsnJywgJyddLFxuICAgICAgb3BlcmF0aW9uczogb3BlcmF0aW9ucyB8fCBbJycsICcnXSxcbiAgICAgIGl0ZW1Vbml0OiBpdGVtVW5pdCB8fCAn6aG5JyxcbiAgICAgIGl0ZW1zVW5pdDogaXRlbXNVbml0IHx8ICfpobknLFxuICAgIH07XG4gIH1cblxuICByZXNldCh2YWx1ZTogU0ZWYWx1ZSkge1xuICAgIGdldERhdGEodGhpcy5zY2hlbWEsIHRoaXMudWksIG51bGwpLnN1YnNjcmliZShsaXN0ID0+IHtcbiAgICAgIGxldCBmb3JtRGF0YSA9IHZhbHVlO1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGZvcm1EYXRhKSkge1xuICAgICAgICBmb3JtRGF0YSA9IFtmb3JtRGF0YV07XG4gICAgICB9XG4gICAgICBsaXN0LmZvckVhY2goKGl0ZW06IFNGU2NoZW1hRW51bSkgPT4ge1xuICAgICAgICBpZiAofihmb3JtRGF0YSBhcyBhbnlbXSkuaW5kZXhPZihpdGVtLnZhbHVlKSkge1xuICAgICAgICAgIGl0ZW0uZGlyZWN0aW9uID0gJ3JpZ2h0JztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLmxpc3QgPSBsaXN0O1xuICAgICAgdGhpcy5fZGF0YSA9IGxpc3QuZmlsdGVyKHcgPT4gdy5kaXJlY3Rpb24gPT09ICdyaWdodCcpO1xuICAgICAgdGhpcy5ub3RpZnkoKTtcbiAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBub3RpZnkoKSB7XG4gICAgdGhpcy5mb3JtUHJvcGVydHkuc2V0VmFsdWUodGhpcy5fZGF0YS5tYXAoaSA9PiBpLnZhbHVlKSwgZmFsc2UpO1xuICB9XG5cbiAgX2Nhbk1vdmUgPSAoYXJnOiBUcmFuc2ZlckNhbk1vdmUpOiBPYnNlcnZhYmxlPFRyYW5zZmVySXRlbVtdPiA9PiB7XG4gICAgcmV0dXJuIHRoaXMudWkuY2FuTW92ZSA/IHRoaXMudWkuY2FuTW92ZShhcmcpIDogb2YoYXJnLmxpc3QpO1xuICB9O1xuXG4gIF9jaGFuZ2Uob3B0aW9uczogVHJhbnNmZXJDaGFuZ2UpIHtcbiAgICBpZiAob3B0aW9ucy50byA9PT0gJ3JpZ2h0Jykge1xuICAgICAgdGhpcy5fZGF0YSA9IHRoaXMuX2RhdGEuY29uY2F0KC4uLm9wdGlvbnMubGlzdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2RhdGEgPSB0aGlzLl9kYXRhLmZpbHRlcigodzogYW55KSA9PiBvcHRpb25zLmxpc3QuaW5kZXhPZih3KSA9PT0gLTEpO1xuICAgIH1cbiAgICBpZiAodGhpcy51aS5jaGFuZ2UpIHRoaXMudWkuY2hhbmdlKG9wdGlvbnMpO1xuICAgIHRoaXMubm90aWZ5KCk7XG4gIH1cblxuICBfc2VhcmNoQ2hhbmdlKG9wdGlvbnM6IFRyYW5zZmVyU2VhcmNoQ2hhbmdlKSB7XG4gICAgaWYgKHRoaXMudWkuc2VhcmNoQ2hhbmdlKSB0aGlzLnVpLnNlYXJjaENoYW5nZShvcHRpb25zKTtcbiAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIF9zZWxlY3RDaGFuZ2Uob3B0aW9uczogVHJhbnNmZXJTZWxlY3RDaGFuZ2UpIHtcbiAgICBpZiAodGhpcy51aS5zZWxlY3RDaGFuZ2UpIHRoaXMudWkuc2VsZWN0Q2hhbmdlKG9wdGlvbnMpO1xuICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG59XG4iXX0=