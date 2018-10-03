/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class NoticeIconTabComponent {
    constructor() {
        this.locale = {};
        this.select = new EventEmitter();
        this.clear = new EventEmitter();
    }
    /**
     * @param {?} item
     * @return {?}
     */
    onClick(item) {
        this.select.emit(/** @type {?} */ ({
            title: this.data.title,
            item,
        }));
    }
    /**
     * @return {?}
     */
    onClear() {
        this.clear.emit(this.data.title);
    }
}
NoticeIconTabComponent.decorators = [
    { type: Component, args: [{
                selector: 'notice-icon-tab',
                template: `
  <div *ngIf="data.list?.length === 0; else listTpl" class="notice-icon__notfound">
    <img class="notice-icon__notfound-img" *ngIf="data.emptyImage" src="{{data.emptyImage}}" alt="not found" />
    <p>{{data.emptyText || locale.emptyText}}</p>
  </div>
  <ng-template #listTpl>
    <nz-list [nzDataSource]="data.list" [nzRenderItem]="item">
      <ng-template #item let-item>
        <nz-list-item (click)="onClick(item)" [ngClass]="{'notice-icon__item-read': item.read}">
          <nz-list-item-meta
            [nzTitle]="nzTitle"
            [nzDescription]="nzDescription"
            [nzAvatar]="item.avatar">
            <ng-template #nzTitle>
              {{item.title}}
              <div class="notice-icon__item-extra" *ngIf="item.extra"><nz-tag [nzColor]="item.color">{{item.extra}}</nz-tag></div>
            </ng-template>
            <ng-template #nzDescription>
              <div *ngIf="item.description" class="notice-icon__item-desc">{{item.description}}</div>
              <div *ngIf="item.datetime" class="notice-icon__item-time">{{item.datetime}}</div>
            </ng-template>
          </nz-list-item-meta>
        </nz-list-item>
      </ng-template>
    </nz-list>
    <div class="notice-icon__clear" (click)="onClear()">{{ data.clearText || locale.clearText }}</div>
  </ng-template>
  `,
                preserveWhitespaces: false
            }] }
];
NoticeIconTabComponent.propDecorators = {
    locale: [{ type: Input }],
    data: [{ type: Input }],
    select: [{ type: Output }],
    clear: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    NoticeIconTabComponent.prototype.locale;
    /** @type {?} */
    NoticeIconTabComponent.prototype.data;
    /** @type {?} */
    NoticeIconTabComponent.prototype.select;
    /** @type {?} */
    NoticeIconTabComponent.prototype.clear;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWNlLWljb24tdGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvbm90aWNlLWljb24vIiwic291cmNlcyI6WyJub3RpY2UtaWNvbi10YWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBbUN2RSxNQUFNOztzQkFFVSxFQUFFO3NCQUlQLElBQUksWUFBWSxFQUFvQjtxQkFFckMsSUFBSSxZQUFZLEVBQVU7Ozs7OztJQUVsQyxPQUFPLENBQUMsSUFBZ0I7UUFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLG1CQUFtQjtZQUNqQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLO1lBQ3RCLElBQUk7U0FDTCxFQUFDLENBQUM7S0FDSjs7OztJQUVELE9BQU87UUFDTCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ2xDOzs7WUFuREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMkJUO2dCQUNELG1CQUFtQixFQUFFLEtBQUs7YUFDM0I7OztxQkFFRSxLQUFLO21CQUVMLEtBQUs7cUJBRUwsTUFBTTtvQkFFTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5vdGljZUl0ZW0sIE5vdGljZUljb25TZWxlY3QgfSBmcm9tICcuL25vdGljZS1pY29uLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm90aWNlLWljb24tdGFiJyxcbiAgdGVtcGxhdGU6IGBcbiAgPGRpdiAqbmdJZj1cImRhdGEubGlzdD8ubGVuZ3RoID09PSAwOyBlbHNlIGxpc3RUcGxcIiBjbGFzcz1cIm5vdGljZS1pY29uX19ub3Rmb3VuZFwiPlxuICAgIDxpbWcgY2xhc3M9XCJub3RpY2UtaWNvbl9fbm90Zm91bmQtaW1nXCIgKm5nSWY9XCJkYXRhLmVtcHR5SW1hZ2VcIiBzcmM9XCJ7e2RhdGEuZW1wdHlJbWFnZX19XCIgYWx0PVwibm90IGZvdW5kXCIgLz5cbiAgICA8cD57e2RhdGEuZW1wdHlUZXh0IHx8IGxvY2FsZS5lbXB0eVRleHR9fTwvcD5cbiAgPC9kaXY+XG4gIDxuZy10ZW1wbGF0ZSAjbGlzdFRwbD5cbiAgICA8bnotbGlzdCBbbnpEYXRhU291cmNlXT1cImRhdGEubGlzdFwiIFtuelJlbmRlckl0ZW1dPVwiaXRlbVwiPlxuICAgICAgPG5nLXRlbXBsYXRlICNpdGVtIGxldC1pdGVtPlxuICAgICAgICA8bnotbGlzdC1pdGVtIChjbGljayk9XCJvbkNsaWNrKGl0ZW0pXCIgW25nQ2xhc3NdPVwieydub3RpY2UtaWNvbl9faXRlbS1yZWFkJzogaXRlbS5yZWFkfVwiPlxuICAgICAgICAgIDxuei1saXN0LWl0ZW0tbWV0YVxuICAgICAgICAgICAgW256VGl0bGVdPVwibnpUaXRsZVwiXG4gICAgICAgICAgICBbbnpEZXNjcmlwdGlvbl09XCJuekRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgIFtuekF2YXRhcl09XCJpdGVtLmF2YXRhclwiPlxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNuelRpdGxlPlxuICAgICAgICAgICAgICB7e2l0ZW0udGl0bGV9fVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm90aWNlLWljb25fX2l0ZW0tZXh0cmFcIiAqbmdJZj1cIml0ZW0uZXh0cmFcIj48bnotdGFnIFtuekNvbG9yXT1cIml0ZW0uY29sb3JcIj57e2l0ZW0uZXh0cmF9fTwvbnotdGFnPjwvZGl2PlxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjbnpEZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cIml0ZW0uZGVzY3JpcHRpb25cIiBjbGFzcz1cIm5vdGljZS1pY29uX19pdGVtLWRlc2NcIj57e2l0ZW0uZGVzY3JpcHRpb259fTwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiaXRlbS5kYXRldGltZVwiIGNsYXNzPVwibm90aWNlLWljb25fX2l0ZW0tdGltZVwiPnt7aXRlbS5kYXRldGltZX19PC9kaXY+XG4gICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgIDwvbnotbGlzdC1pdGVtLW1ldGE+XG4gICAgICAgIDwvbnotbGlzdC1pdGVtPlxuICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8L256LWxpc3Q+XG4gICAgPGRpdiBjbGFzcz1cIm5vdGljZS1pY29uX19jbGVhclwiIChjbGljayk9XCJvbkNsZWFyKClcIj57eyBkYXRhLmNsZWFyVGV4dCB8fCBsb2NhbGUuY2xlYXJUZXh0IH19PC9kaXY+XG4gIDwvbmctdGVtcGxhdGU+XG4gIGAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBOb3RpY2VJY29uVGFiQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgbG9jYWxlOiBhbnkgPSB7fTtcbiAgQElucHV0KClcbiAgZGF0YTogTm90aWNlSXRlbTtcbiAgQE91dHB1dCgpXG4gIHNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8Tm90aWNlSWNvblNlbGVjdD4oKTtcbiAgQE91dHB1dCgpXG4gIGNsZWFyID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgb25DbGljayhpdGVtOiBOb3RpY2VJdGVtKSB7XG4gICAgdGhpcy5zZWxlY3QuZW1pdCg8Tm90aWNlSWNvblNlbGVjdD57XG4gICAgICB0aXRsZTogdGhpcy5kYXRhLnRpdGxlLFxuICAgICAgaXRlbSxcbiAgICB9KTtcbiAgfVxuXG4gIG9uQ2xlYXIoKSB7XG4gICAgdGhpcy5jbGVhci5lbWl0KHRoaXMuZGF0YS50aXRsZSk7XG4gIH1cbn1cbiJdfQ==