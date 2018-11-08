/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { of } from 'rxjs';
import { ControlWidget } from '../../widget';
import { getData } from '../../utils';
export class TransferWidget extends ControlWidget {
    constructor() {
        super(...arguments);
        this.list = [];
        this._data = [];
        this._canMove = (arg) => {
            return this.ui.canMove ? this.ui.canMove(arg) : of(arg.list);
        };
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
     * @param {?} value
     * @return {?}
     */
    reset(value) {
        getData(this.schema, this.ui, null).subscribe(list => {
            /** @type {?} */
            let formData = this.formProperty.formData;
            if (!Array.isArray(formData))
                formData = [formData];
            list.forEach((item) => {
                if (~((/** @type {?} */ (formData))).indexOf(item.value))
                    item.direction = 'right';
            });
            this.list = list;
            this._data = list.filter(w => w.direction === 'right');
            this.notify();
            this.detectChanges();
        });
    }
    /**
     * @return {?}
     */
    notify() {
        this.formProperty.setValue(this._data.map(i => i.value), false);
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
            this._data = this._data.filter(w => options.list.indexOf(w) === -1);
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
    }
    /**
     * @param {?} options
     * @return {?}
     */
    _selectChange(options) {
        if (this.ui.selectChange)
            this.ui.selectChange(options);
        this.cd.detectChanges();
    }
}
TransferWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-transfer',
                template: `
  <sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title">

    <nz-transfer
      [nzDataSource]="list"
      [nzTitles]="i.titles"
      [nzOperations]="i.operations"
      [nzListStyle]="ui.listStyle"
      [nzItemUnit]="i.itemUnit"
      [nzItemsUnit]="i.itemsUnit"
      [nzShowSearch]="ui.showSearch"
      [nzFilterOption]="ui.filterOption"
      [nzSearchPlaceholder]="ui.searchPlaceholder"
      [nzNotFoundContent]="ui.notFoundContent"
      [nzCanMove]="_canMove"
      (nzChange)="_change($event)"
      (nzSearchChange)="_searchChange($event)"
      (nzSelectChange)="_selectChange($event)">
    </nz-transfer>

  </sf-item-wrap>
  `,
                preserveWhitespaces: false
            }] }
];
if (false) {
    /** @type {?} */
    TransferWidget.prototype.list;
    /** @type {?} */
    TransferWidget.prototype.i;
    /** @type {?} */
    TransferWidget.prototype._data;
    /** @type {?} */
    TransferWidget.prototype._canMove;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmZXIud2lkZ2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0cy90cmFuc2Zlci90cmFuc2Zlci53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzdDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxhQUFhLENBQUM7QUE2QnRDLE1BQU0sT0FBTyxjQUFlLFNBQVEsYUFBYTtJQTFCakQ7O1FBMkJFLFNBQUksR0FBVSxFQUFFLENBQUM7UUFFVCxVQUFLLEdBQVUsRUFBRSxDQUFDO1FBNkIxQixhQUFRLEdBQUcsQ0FBQyxHQUFRLEVBQXFCLEVBQUU7WUFDekMsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0QsQ0FBQyxDQUFDO0lBb0JKLENBQUM7Ozs7SUFqREMsUUFBUTtRQUNOLElBQUksQ0FBQyxDQUFDLEdBQUc7WUFDUCxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO1lBQ2xDLFVBQVUsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUM7WUFDMUMsUUFBUSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxJQUFJLEdBQUc7WUFDakMsU0FBUyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxJQUFJLEdBQUc7U0FDcEMsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsS0FBSyxDQUFDLEtBQVU7UUFDZCxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRTs7Z0JBQy9DLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVE7WUFDekMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO2dCQUFFLFFBQVEsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3BELElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFrQixFQUFFLEVBQUU7Z0JBQ2xDLElBQUksQ0FBQyxDQUFDLG1CQUFBLFFBQVEsRUFBUyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7b0JBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7WUFDekUsQ0FBQyxDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxLQUFLLE9BQU8sQ0FBQyxDQUFDO1lBQ3ZELElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNkLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFTyxNQUFNO1FBQ1osSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbEUsQ0FBQzs7Ozs7SUFNRCxPQUFPLENBQUMsT0FBWTtRQUNsQixJQUFJLE9BQU8sQ0FBQyxFQUFFLEtBQUssT0FBTyxFQUFFO1lBQzFCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDakQ7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3JFO1FBQ0QsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU07WUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsT0FBWTtRQUN4QixJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWTtZQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFELENBQUM7Ozs7O0lBRUQsYUFBYSxDQUFDLE9BQVk7UUFDeEIsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVk7WUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzFCLENBQUM7OztZQS9FRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBcUJUO2dCQUNELG1CQUFtQixFQUFFLEtBQUs7YUFDM0I7Ozs7SUFFQyw4QkFBaUI7O0lBQ2pCLDJCQUFPOztJQUNQLCtCQUEwQjs7SUE2QjFCLGtDQUVFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcbmltcG9ydCB7IGdldERhdGEgfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgeyBTRlNjaGVtYUVudW0gfSBmcm9tICcuLi8uLi9zY2hlbWEnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi10cmFuc2ZlcicsXG4gIHRlbXBsYXRlOiBgXG4gIDxzZi1pdGVtLXdyYXAgW2lkXT1cImlkXCIgW3NjaGVtYV09XCJzY2hlbWFcIiBbdWldPVwidWlcIiBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiIFtlcnJvcl09XCJlcnJvclwiIFtzaG93VGl0bGVdPVwic2NoZW1hLnRpdGxlXCI+XG5cbiAgICA8bnotdHJhbnNmZXJcbiAgICAgIFtuekRhdGFTb3VyY2VdPVwibGlzdFwiXG4gICAgICBbbnpUaXRsZXNdPVwiaS50aXRsZXNcIlxuICAgICAgW256T3BlcmF0aW9uc109XCJpLm9wZXJhdGlvbnNcIlxuICAgICAgW256TGlzdFN0eWxlXT1cInVpLmxpc3RTdHlsZVwiXG4gICAgICBbbnpJdGVtVW5pdF09XCJpLml0ZW1Vbml0XCJcbiAgICAgIFtuekl0ZW1zVW5pdF09XCJpLml0ZW1zVW5pdFwiXG4gICAgICBbbnpTaG93U2VhcmNoXT1cInVpLnNob3dTZWFyY2hcIlxuICAgICAgW256RmlsdGVyT3B0aW9uXT1cInVpLmZpbHRlck9wdGlvblwiXG4gICAgICBbbnpTZWFyY2hQbGFjZWhvbGRlcl09XCJ1aS5zZWFyY2hQbGFjZWhvbGRlclwiXG4gICAgICBbbnpOb3RGb3VuZENvbnRlbnRdPVwidWkubm90Rm91bmRDb250ZW50XCJcbiAgICAgIFtuekNhbk1vdmVdPVwiX2Nhbk1vdmVcIlxuICAgICAgKG56Q2hhbmdlKT1cIl9jaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAobnpTZWFyY2hDaGFuZ2UpPVwiX3NlYXJjaENoYW5nZSgkZXZlbnQpXCJcbiAgICAgIChuelNlbGVjdENoYW5nZSk9XCJfc2VsZWN0Q2hhbmdlKCRldmVudClcIj5cbiAgICA8L256LXRyYW5zZmVyPlxuXG4gIDwvc2YtaXRlbS13cmFwPlxuICBgLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgVHJhbnNmZXJXaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IGltcGxlbWVudHMgT25Jbml0IHtcbiAgbGlzdDogYW55W10gPSBbXTtcbiAgaTogYW55O1xuICBwcml2YXRlIF9kYXRhOiBhbnlbXSA9IFtdO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaSA9IHtcbiAgICAgIHRpdGxlczogdGhpcy51aS50aXRsZXMgfHwgWycnLCAnJ10sXG4gICAgICBvcGVyYXRpb25zOiB0aGlzLnVpLm9wZXJhdGlvbnMgfHwgWycnLCAnJ10sXG4gICAgICBpdGVtVW5pdDogdGhpcy51aS5pdGVtVW5pdCB8fCAn6aG5JyxcbiAgICAgIGl0ZW1zVW5pdDogdGhpcy51aS5pdGVtc1VuaXQgfHwgJ+mhuScsXG4gICAgfTtcbiAgfVxuXG4gIHJlc2V0KHZhbHVlOiBhbnkpIHtcbiAgICBnZXREYXRhKHRoaXMuc2NoZW1hLCB0aGlzLnVpLCBudWxsKS5zdWJzY3JpYmUobGlzdCA9PiB7XG4gICAgICBsZXQgZm9ybURhdGEgPSB0aGlzLmZvcm1Qcm9wZXJ0eS5mb3JtRGF0YTtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShmb3JtRGF0YSkpIGZvcm1EYXRhID0gW2Zvcm1EYXRhXTtcbiAgICAgIGxpc3QuZm9yRWFjaCgoaXRlbTogU0ZTY2hlbWFFbnVtKSA9PiB7XG4gICAgICAgIGlmICh+KGZvcm1EYXRhIGFzIGFueVtdKS5pbmRleE9mKGl0ZW0udmFsdWUpKSBpdGVtLmRpcmVjdGlvbiA9ICdyaWdodCc7XG4gICAgICB9KTtcbiAgICAgIHRoaXMubGlzdCA9IGxpc3Q7XG4gICAgICB0aGlzLl9kYXRhID0gbGlzdC5maWx0ZXIodyA9PiB3LmRpcmVjdGlvbiA9PT0gJ3JpZ2h0Jyk7XG4gICAgICB0aGlzLm5vdGlmeSgpO1xuICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIG5vdGlmeSgpIHtcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5zZXRWYWx1ZSh0aGlzLl9kYXRhLm1hcChpID0+IGkudmFsdWUpLCBmYWxzZSk7XG4gIH1cblxuICBfY2FuTW92ZSA9IChhcmc6IGFueSk6IE9ic2VydmFibGU8YW55W10+ID0+IHtcbiAgICByZXR1cm4gdGhpcy51aS5jYW5Nb3ZlID8gdGhpcy51aS5jYW5Nb3ZlKGFyZykgOiBvZihhcmcubGlzdCk7XG4gIH07XG5cbiAgX2NoYW5nZShvcHRpb25zOiBhbnkpIHtcbiAgICBpZiAob3B0aW9ucy50byA9PT0gJ3JpZ2h0Jykge1xuICAgICAgdGhpcy5fZGF0YSA9IHRoaXMuX2RhdGEuY29uY2F0KC4uLm9wdGlvbnMubGlzdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2RhdGEgPSB0aGlzLl9kYXRhLmZpbHRlcih3ID0+IG9wdGlvbnMubGlzdC5pbmRleE9mKHcpID09PSAtMSk7XG4gICAgfVxuICAgIGlmICh0aGlzLnVpLmNoYW5nZSkgdGhpcy51aS5jaGFuZ2Uob3B0aW9ucyk7XG4gICAgdGhpcy5ub3RpZnkoKTtcbiAgfVxuXG4gIF9zZWFyY2hDaGFuZ2Uob3B0aW9uczogYW55KSB7XG4gICAgaWYgKHRoaXMudWkuc2VhcmNoQ2hhbmdlKSB0aGlzLnVpLnNlYXJjaENoYW5nZShvcHRpb25zKTtcbiAgfVxuXG4gIF9zZWxlY3RDaGFuZ2Uob3B0aW9uczogYW55KSB7XG4gICAgaWYgKHRoaXMudWkuc2VsZWN0Q2hhbmdlKSB0aGlzLnVpLnNlbGVjdENoYW5nZShvcHRpb25zKTtcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgfVxufVxuIl19