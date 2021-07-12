import { Component, ViewChild } from '@angular/core';
export class RangePickerShortcutTplComponent {
    constructor() {
        this.list = [];
    }
    click(_) { }
}
RangePickerShortcutTplComponent.decorators = [
    { type: Component, args: [{
                selector: '',
                template: `
    <ng-template #tpl>
      <a
        *ngFor="let i of list; let first = first"
        (click)="click(i)"
        [innerHTML]="i._text"
        [ngClass]="{ 'ml-sm': !first }"
      ></a>
    </ng-template>
  `
            },] }
];
RangePickerShortcutTplComponent.propDecorators = {
    tpl: [{ type: ViewChild, args: ['tpl', { static: true },] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2Utc2hvcnRjdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL2RhdGUtcGlja2VyL3JhbmdlLXNob3J0Y3V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFlLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQWlCbEUsTUFBTSxPQUFPLCtCQUErQjtJQWI1QztRQWlCRSxTQUFJLEdBQXVDLEVBQUUsQ0FBQztJQUdoRCxDQUFDO0lBREMsS0FBSyxDQUFDLENBQW1DLElBQVMsQ0FBQzs7O1lBbkJwRCxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLEVBQUU7Z0JBQ1osUUFBUSxFQUFFOzs7Ozs7Ozs7R0FTVDthQUNGOzs7a0JBRUUsU0FBUyxTQUFDLEtBQUssRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWxhaW5EYXRlUmFuZ2VQaWNrZXJTaG9ydGN1dEl0ZW0gfSBmcm9tICdAZGVsb24vdXRpbC9jb25maWcnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICcnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy10ZW1wbGF0ZSAjdHBsPlxuICAgICAgPGFcbiAgICAgICAgKm5nRm9yPVwibGV0IGkgb2YgbGlzdDsgbGV0IGZpcnN0ID0gZmlyc3RcIlxuICAgICAgICAoY2xpY2spPVwiY2xpY2soaSlcIlxuICAgICAgICBbaW5uZXJIVE1MXT1cImkuX3RleHRcIlxuICAgICAgICBbbmdDbGFzc109XCJ7ICdtbC1zbSc6ICFmaXJzdCB9XCJcbiAgICAgID48L2E+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBSYW5nZVBpY2tlclNob3J0Y3V0VHBsQ29tcG9uZW50IHtcbiAgQFZpZXdDaGlsZCgndHBsJywgeyBzdGF0aWM6IHRydWUgfSlcbiAgdHBsITogVGVtcGxhdGVSZWY8dm9pZD47XG5cbiAgbGlzdDogQWxhaW5EYXRlUmFuZ2VQaWNrZXJTaG9ydGN1dEl0ZW1bXSA9IFtdO1xuXG4gIGNsaWNrKF86IEFsYWluRGF0ZVJhbmdlUGlja2VyU2hvcnRjdXRJdGVtKTogdm9pZCB7fVxufVxuIl19