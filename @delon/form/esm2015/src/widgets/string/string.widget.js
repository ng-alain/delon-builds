/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { ControlWidget } from '../../widget';
export class StringWidget extends ControlWidget {
    /**
     * @return {?}
     */
    ngOnInit() {
        this.type = !!(this.ui.addOnAfter ||
            this.ui.addOnBefore ||
            this.ui.addOnAfterIcon ||
            this.ui.addOnBeforeIcon ||
            this.ui.prefix ||
            this.ui.prefixIcon ||
            this.ui.suffix ||
            this.ui.suffixIcon)
            ? 'addon'
            : '';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    reset(value) {
        if (this.schema.format === 'color' && !value) {
            this.setValue('#000000');
        }
    }
}
StringWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-string',
                template: `
  <sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title">

    <ng-template #ipt>
      <input nz-input
        [attr.id]="id"
        [disabled]="disabled"
        [attr.disabled]="disabled"
        [nzSize]="ui.size"
        [ngModel]="value"
        (ngModelChange)="setValue($event)"
        [attr.maxLength]="schema.maxLength || null"
        [attr.type]="ui.type || 'text'"
        [attr.placeholder]="ui.placeholder"
        [attr.autocomplete]="ui.autocomplete"
        [attr.autoFocus]="ui.autofocus">
    </ng-template>

    <ng-container *ngIf="type === 'addon'; else ipt">
      <nz-input-group
        [nzAddOnBefore]="ui.addOnBefore" [nzAddOnAfter]="ui.addOnAfter"
        [nzAddOnBeforeIcon]="ui.addOnBeforeIcon" [nzAddOnAfterIcon]="ui.addOnAfterIcon"
        [nzPrefix]="ui.prefix" [nzPrefixIcon]="ui.prefixIcon"
        [nzSuffix]="ui.suffix" [nzSuffixIcon]="ui.suffixIcon">
        <ng-template [ngTemplateOutlet]="ipt"></ng-template>
      </nz-input-group>
    </ng-container>
  </sf-item-wrap>
  `
            }] }
];
if (false) {
    /** @type {?} */
    StringWidget.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9mb3JtLyIsInNvdXJjZXMiOlsic3JjL3dpZGdldHMvc3RyaW5nL3N0cmluZy53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQWtDN0MsTUFBTSxPQUFPLFlBQWEsU0FBUSxhQUFhOzs7O0lBRzdDLFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUNaLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVTtZQUNsQixJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVc7WUFDbkIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFjO1lBQ3RCLElBQUksQ0FBQyxFQUFFLENBQUMsZUFBZTtZQUN2QixJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU07WUFDZCxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVU7WUFDbEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNO1lBQ2QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQ25CO1lBQ0MsQ0FBQyxDQUFDLE9BQU87WUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ1QsQ0FBQzs7Ozs7SUFFRCxLQUFLLENBQUMsS0FBVTtRQUNkLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssT0FBTyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQzVDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDMUI7SUFDSCxDQUFDOzs7WUF0REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E0QlQ7YUFDRjs7OztJQUVDLDRCQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1zdHJpbmcnLFxuICB0ZW1wbGF0ZTogYFxuICA8c2YtaXRlbS13cmFwIFtpZF09XCJpZFwiIFtzY2hlbWFdPVwic2NoZW1hXCIgW3VpXT1cInVpXCIgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIiBbZXJyb3JdPVwiZXJyb3JcIiBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiPlxuXG4gICAgPG5nLXRlbXBsYXRlICNpcHQ+XG4gICAgICA8aW5wdXQgbnotaW5wdXRcbiAgICAgICAgW2F0dHIuaWRdPVwiaWRcIlxuICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICBbYXR0ci5kaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgIFtuelNpemVdPVwidWkuc2l6ZVwiXG4gICAgICAgIFtuZ01vZGVsXT1cInZhbHVlXCJcbiAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwic2V0VmFsdWUoJGV2ZW50KVwiXG4gICAgICAgIFthdHRyLm1heExlbmd0aF09XCJzY2hlbWEubWF4TGVuZ3RoIHx8IG51bGxcIlxuICAgICAgICBbYXR0ci50eXBlXT1cInVpLnR5cGUgfHwgJ3RleHQnXCJcbiAgICAgICAgW2F0dHIucGxhY2Vob2xkZXJdPVwidWkucGxhY2Vob2xkZXJcIlxuICAgICAgICBbYXR0ci5hdXRvY29tcGxldGVdPVwidWkuYXV0b2NvbXBsZXRlXCJcbiAgICAgICAgW2F0dHIuYXV0b0ZvY3VzXT1cInVpLmF1dG9mb2N1c1wiPlxuICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidHlwZSA9PT0gJ2FkZG9uJzsgZWxzZSBpcHRcIj5cbiAgICAgIDxuei1pbnB1dC1ncm91cFxuICAgICAgICBbbnpBZGRPbkJlZm9yZV09XCJ1aS5hZGRPbkJlZm9yZVwiIFtuekFkZE9uQWZ0ZXJdPVwidWkuYWRkT25BZnRlclwiXG4gICAgICAgIFtuekFkZE9uQmVmb3JlSWNvbl09XCJ1aS5hZGRPbkJlZm9yZUljb25cIiBbbnpBZGRPbkFmdGVySWNvbl09XCJ1aS5hZGRPbkFmdGVySWNvblwiXG4gICAgICAgIFtuelByZWZpeF09XCJ1aS5wcmVmaXhcIiBbbnpQcmVmaXhJY29uXT1cInVpLnByZWZpeEljb25cIlxuICAgICAgICBbbnpTdWZmaXhdPVwidWkuc3VmZml4XCIgW256U3VmZml4SWNvbl09XCJ1aS5zdWZmaXhJY29uXCI+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJpcHRcIj48L25nLXRlbXBsYXRlPlxuICAgICAgPC9uei1pbnB1dC1ncm91cD5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9zZi1pdGVtLXdyYXA+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIFN0cmluZ1dpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xuICB0eXBlOiBzdHJpbmc7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy50eXBlID0gISEoXG4gICAgICB0aGlzLnVpLmFkZE9uQWZ0ZXIgfHxcbiAgICAgIHRoaXMudWkuYWRkT25CZWZvcmUgfHxcbiAgICAgIHRoaXMudWkuYWRkT25BZnRlckljb24gfHxcbiAgICAgIHRoaXMudWkuYWRkT25CZWZvcmVJY29uIHx8XG4gICAgICB0aGlzLnVpLnByZWZpeCB8fFxuICAgICAgdGhpcy51aS5wcmVmaXhJY29uIHx8XG4gICAgICB0aGlzLnVpLnN1ZmZpeCB8fFxuICAgICAgdGhpcy51aS5zdWZmaXhJY29uXG4gICAgKVxuICAgICAgPyAnYWRkb24nXG4gICAgICA6ICcnO1xuICB9XG5cbiAgcmVzZXQodmFsdWU6IGFueSkge1xuICAgIGlmICh0aGlzLnNjaGVtYS5mb3JtYXQgPT09ICdjb2xvcicgJiYgIXZhbHVlKSB7XG4gICAgICB0aGlzLnNldFZhbHVlKCcjMDAwMDAwJyk7XG4gICAgfVxuICB9XG59XG4iXX0=