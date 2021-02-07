import { Component, TemplateRef, ViewChild } from '@angular/core';
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
      <a *ngFor="let i of list; let first = first" (click)="click(i)" [innerHTML]="i._text" [ngClass]="{ 'ml-sm': !first }"></a>
    </ng-template>
  `
            },] }
];
RangePickerShortcutTplComponent.propDecorators = {
    tpl: [{ type: ViewChild, args: ['tpl', { static: true },] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2Utc2hvcnRjdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL2RhdGUtcGlja2VyL3JhbmdlLXNob3J0Y3V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFXbEUsTUFBTSxPQUFPLCtCQUErQjtJQVI1QztRQVlFLFNBQUksR0FBdUMsRUFBRSxDQUFDO0lBR2hELENBQUM7SUFEQyxLQUFLLENBQUMsQ0FBbUMsSUFBUyxDQUFDOzs7WUFkcEQsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxFQUFFO2dCQUNaLFFBQVEsRUFBRTs7OztHQUlUO2FBQ0Y7OztrQkFFRSxTQUFTLFNBQUMsS0FBSyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWxhaW5EYXRlUmFuZ2VQaWNrZXJTaG9ydGN1dEl0ZW0gfSBmcm9tICdAZGVsb24vdXRpbC9jb25maWcnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICcnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy10ZW1wbGF0ZSAjdHBsPlxuICAgICAgPGEgKm5nRm9yPVwibGV0IGkgb2YgbGlzdDsgbGV0IGZpcnN0ID0gZmlyc3RcIiAoY2xpY2spPVwiY2xpY2soaSlcIiBbaW5uZXJIVE1MXT1cImkuX3RleHRcIiBbbmdDbGFzc109XCJ7ICdtbC1zbSc6ICFmaXJzdCB9XCI+PC9hPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIFJhbmdlUGlja2VyU2hvcnRjdXRUcGxDb21wb25lbnQge1xuICBAVmlld0NoaWxkKCd0cGwnLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICB0cGwhOiBUZW1wbGF0ZVJlZjx2b2lkPjtcblxuICBsaXN0OiBBbGFpbkRhdGVSYW5nZVBpY2tlclNob3J0Y3V0SXRlbVtdID0gW107XG5cbiAgY2xpY2soXzogQWxhaW5EYXRlUmFuZ2VQaWNrZXJTaG9ydGN1dEl0ZW0pOiB2b2lkIHt9XG59XG4iXX0=