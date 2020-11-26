/**
 * @fileoverview added by tsickle
 * Generated from: src/widgets/tree-select/tree-select.widget.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { getData, toBool } from '../../utils';
import { ControlUIWidget } from '../../widget';
export class TreeSelectWidget extends ControlUIWidget {
    constructor() {
        super(...arguments);
        this.data = [];
        this.asyncData = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        const { ui } = this;
        this.i = {
            allowClear: ui.allowClear,
            showSearch: toBool(ui.showSearch, false),
            dropdownMatchSelectWidth: toBool(ui.dropdownMatchSelectWidth, true),
            multiple: toBool(ui.multiple, false),
            checkable: toBool(ui.checkable, false),
            showIcon: toBool(ui.showIcon, false),
            showExpand: toBool(ui.showExpand, true),
            showLine: toBool(ui.showLine, false),
            checkStrictly: toBool(ui.checkStrictly, false),
            hideUnMatched: toBool(ui.hideUnMatched, false),
            defaultExpandAll: toBool(ui.defaultExpandAll, false),
            displayWith: ui.displayWith || ((/**
             * @param {?} node
             * @return {?}
             */
            (node) => node.title)),
        };
        this.asyncData = typeof ui.expandChange === 'function';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    reset(value) {
        getData(this.schema, this.ui, value).subscribe((/**
         * @param {?} list
         * @return {?}
         */
        list => {
            this.data = list;
            this.detectChanges();
        }));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    change(value) {
        if (this.ui.change)
            this.ui.change(value);
        this.setValue(value);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    expandChange(e) {
        const { ui } = this;
        if (typeof ui.expandChange !== 'function')
            return;
        ui.expandChange(e).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        res => {
            (/** @type {?} */ (e.node)).clearChildren();
            (/** @type {?} */ (e.node)).addChildren(res);
            this.detectChanges();
        }));
    }
}
TreeSelectWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-tree-select',
                template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <nz-tree-select\n    [nzAllowClear]=\"i.allowClear\"\n    [nzPlaceHolder]=\"ui.placeholder\"\n    [nzDropdownStyle]=\"ui.dropdownStyle\"\n    [nzDropdownClassName]=\"ui.dropdownClassName\"\n    [nzSize]=\"ui.size\"\n    [nzExpandedKeys]=\"ui.expandedKeys\"\n    [nzNotFoundContent]=\"ui.notFoundContent\"\n    [nzMaxTagCount]=\"ui.maxTagCount\"\n    [nzMaxTagPlaceholder]=\"ui.maxTagPlaceholder || null\"\n    [nzTreeTemplate]=\"ui.treeTemplate || null\"\n    [nzDisabled]=\"disabled\"\n    [nzShowSearch]=\"i.showSearch\"\n    [nzShowIcon]=\"i.showIcon\"\n    [nzDropdownMatchSelectWidth]=\"i.dropdownMatchSelectWidth\"\n    [nzMultiple]=\"i.multiple\"\n    [nzHideUnMatched]=\"i.hideUnMatched\"\n    [nzCheckable]=\"i.checkable\"\n    [nzShowExpand]=\"i.showExpand\"\n    [nzShowLine]=\"i.showLine\"\n    [nzCheckStrictly]=\"i.checkStrictly\"\n    [nzAsyncData]=\"asyncData\"\n    [nzNodes]=\"data\"\n    [nzDefaultExpandAll]=\"i.defaultExpandAll\"\n    [nzDisplayWith]=\"i.displayWith\"\n    [ngModel]=\"value\"\n    [nzVirtualHeight]=\"ui.virtualHeight\"\n    [nzVirtualItemSize]=\"ui.virtualItemSize || 28\"\n    [nzVirtualMaxBufferPx]=\"ui.virtualMaxBufferPx || 500\"\n    [nzVirtualMinBufferPx]=\"ui.virtualMinBufferPx || 28\"\n    (ngModelChange)=\"change($event)\"\n    (nzExpandChange)=\"expandChange($event)\"\n  >\n  </nz-tree-select>\n</sf-item-wrap>\n",
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None
            }] }
];
if (false) {
    /** @type {?} */
    TreeSelectWidget.prototype.i;
    /** @type {?} */
    TreeSelectWidget.prototype.data;
    /** @type {?} */
    TreeSelectWidget.prototype.asyncData;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1zZWxlY3Qud2lkZ2V0LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3ZzdHMvd29yay8xL3MvcGFja2FnZXMvZm9ybS8iLCJzb3VyY2VzIjpbInNyYy93aWRnZXRzL3RyZWUtc2VsZWN0L3RyZWUtc2VsZWN0LndpZGdldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJckUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDOUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQVMvQyxNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsZUFBeUM7SUFOL0U7O1FBUUUsU0FBSSxHQUFtQixFQUFFLENBQUM7UUFDMUIsY0FBUyxHQUFHLEtBQUssQ0FBQztJQTBDcEIsQ0FBQzs7OztJQXhDQyxRQUFRO2NBQ0EsRUFBRSxFQUFFLEVBQUUsR0FBRyxJQUFJO1FBQ25CLElBQUksQ0FBQyxDQUFDLEdBQUc7WUFDUCxVQUFVLEVBQUUsRUFBRSxDQUFDLFVBQVU7WUFDekIsVUFBVSxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQztZQUN4Qyx3QkFBd0IsRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLHdCQUF3QixFQUFFLElBQUksQ0FBQztZQUNuRSxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDO1lBQ3BDLFNBQVMsRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUM7WUFDdEMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQztZQUNwQyxVQUFVLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDO1lBQ3ZDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUM7WUFDcEMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQztZQUM5QyxhQUFhLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDO1lBQzlDLGdCQUFnQixFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDO1lBQ3BELFdBQVcsRUFBRSxFQUFFLENBQUMsV0FBVyxJQUFJOzs7O1lBQUMsQ0FBQyxJQUFTLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUM7U0FDM0QsQ0FBQztRQUNGLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxFQUFFLENBQUMsWUFBWSxLQUFLLFVBQVUsQ0FBQztJQUN6RCxDQUFDOzs7OztJQUVELEtBQUssQ0FBQyxLQUFjO1FBQ2xCLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUMsU0FBUzs7OztRQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3BELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN2QixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLEtBQXdCO1FBQzdCLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNO1lBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QixDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxDQUFvQjtjQUN6QixFQUFFLEVBQUUsRUFBRSxHQUFHLElBQUk7UUFDbkIsSUFBSSxPQUFPLEVBQUUsQ0FBQyxZQUFZLEtBQUssVUFBVTtZQUFFLE9BQU87UUFDbEQsRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTOzs7O1FBQUMsR0FBRyxDQUFDLEVBQUU7WUFDakMsbUJBQUEsQ0FBQyxDQUFDLElBQUksRUFBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3hCLG1CQUFBLENBQUMsQ0FBQyxJQUFJLEVBQUMsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBbERGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQix3K0NBQXdDO2dCQUN4QyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0Qzs7OztJQUVDLDZCQUE0Qjs7SUFDNUIsZ0NBQTBCOztJQUMxQixxQ0FBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56Rm9ybWF0RW1pdEV2ZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3RyZWUnO1xuaW1wb3J0IHsgU0ZWYWx1ZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBTRlNjaGVtYUVudW0gfSBmcm9tICcuLi8uLi9zY2hlbWEnO1xuaW1wb3J0IHsgZ2V0RGF0YSwgdG9Cb29sIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHsgQ29udHJvbFVJV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcbmltcG9ydCB7IFNGVHJlZVNlbGVjdFdpZGdldFNjaGVtYSB9IGZyb20gJy4vc2NoZW1hJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtdHJlZS1zZWxlY3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vdHJlZS1zZWxlY3Qud2lkZ2V0Lmh0bWwnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgVHJlZVNlbGVjdFdpZGdldCBleHRlbmRzIENvbnRyb2xVSVdpZGdldDxTRlRyZWVTZWxlY3RXaWRnZXRTY2hlbWE+IGltcGxlbWVudHMgT25Jbml0IHtcbiAgaTogU0ZUcmVlU2VsZWN0V2lkZ2V0U2NoZW1hO1xuICBkYXRhOiBTRlNjaGVtYUVudW1bXSA9IFtdO1xuICBhc3luY0RhdGEgPSBmYWxzZTtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IHVpIH0gPSB0aGlzO1xuICAgIHRoaXMuaSA9IHtcbiAgICAgIGFsbG93Q2xlYXI6IHVpLmFsbG93Q2xlYXIsXG4gICAgICBzaG93U2VhcmNoOiB0b0Jvb2wodWkuc2hvd1NlYXJjaCwgZmFsc2UpLFxuICAgICAgZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoOiB0b0Jvb2wodWkuZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoLCB0cnVlKSxcbiAgICAgIG11bHRpcGxlOiB0b0Jvb2wodWkubXVsdGlwbGUsIGZhbHNlKSxcbiAgICAgIGNoZWNrYWJsZTogdG9Cb29sKHVpLmNoZWNrYWJsZSwgZmFsc2UpLFxuICAgICAgc2hvd0ljb246IHRvQm9vbCh1aS5zaG93SWNvbiwgZmFsc2UpLFxuICAgICAgc2hvd0V4cGFuZDogdG9Cb29sKHVpLnNob3dFeHBhbmQsIHRydWUpLFxuICAgICAgc2hvd0xpbmU6IHRvQm9vbCh1aS5zaG93TGluZSwgZmFsc2UpLFxuICAgICAgY2hlY2tTdHJpY3RseTogdG9Cb29sKHVpLmNoZWNrU3RyaWN0bHksIGZhbHNlKSxcbiAgICAgIGhpZGVVbk1hdGNoZWQ6IHRvQm9vbCh1aS5oaWRlVW5NYXRjaGVkLCBmYWxzZSksXG4gICAgICBkZWZhdWx0RXhwYW5kQWxsOiB0b0Jvb2wodWkuZGVmYXVsdEV4cGFuZEFsbCwgZmFsc2UpLFxuICAgICAgZGlzcGxheVdpdGg6IHVpLmRpc3BsYXlXaXRoIHx8ICgobm9kZTogYW55KSA9PiBub2RlLnRpdGxlKSxcbiAgICB9O1xuICAgIHRoaXMuYXN5bmNEYXRhID0gdHlwZW9mIHVpLmV4cGFuZENoYW5nZSA9PT0gJ2Z1bmN0aW9uJztcbiAgfVxuXG4gIHJlc2V0KHZhbHVlOiBTRlZhbHVlKTogdm9pZCB7XG4gICAgZ2V0RGF0YSh0aGlzLnNjaGVtYSwgdGhpcy51aSwgdmFsdWUpLnN1YnNjcmliZShsaXN0ID0+IHtcbiAgICAgIHRoaXMuZGF0YSA9IGxpc3Q7XG4gICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNoYW5nZSh2YWx1ZTogc3RyaW5nW10gfCBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy51aS5jaGFuZ2UpIHRoaXMudWkuY2hhbmdlKHZhbHVlKTtcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIGV4cGFuZENoYW5nZShlOiBOekZvcm1hdEVtaXRFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IHsgdWkgfSA9IHRoaXM7XG4gICAgaWYgKHR5cGVvZiB1aS5leHBhbmRDaGFuZ2UgIT09ICdmdW5jdGlvbicpIHJldHVybjtcbiAgICB1aS5leHBhbmRDaGFuZ2UoZSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICBlLm5vZGUhLmNsZWFyQ2hpbGRyZW4oKTtcbiAgICAgIGUubm9kZSEuYWRkQ2hpbGRyZW4ocmVzKTtcbiAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=