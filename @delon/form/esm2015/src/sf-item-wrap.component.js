/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class SFItemWrapComponent {
}
SFItemWrapComponent.decorators = [
    { type: Component, args: [{
                selector: 'sf-item-wrap',
                template: `
  <nz-form-item [style.width.px]="ui.width">
    <nz-col *ngIf="showTitle" [nzSpan]="ui.spanLabel" class="ant-form-item-label">
      <label [attr.for]="id" [class.ant-form-item-required]="ui._required">
        {{ schema.title }}
        <span class="optional">
          {{ ui.optional }}
          <nz-tooltip *ngIf="ui.optionalHelp" [nzTitle]="ui.optionalHelp">
            <i nz-tooltip class="anticon anticon-question-circle-o"></i>
          </nz-tooltip>
        </span>
      </label>
    </nz-col>
    <nz-col class="ant-form-item-control-wrapper" [nzSpan]="ui.spanControl" [nzOffset]="ui.offsetControl">
      <div class="ant-form-item-control" [class.has-error]="showError">
        <ng-content></ng-content>
        <nz-form-extra *ngIf="schema.description" [innerHTML]="schema.description"></nz-form-extra>
        <nz-form-explain *ngIf="!ui.onlyVisual && showError">{{error}}</nz-form-explain>
      </div>
    </nz-col>
  </nz-form-item>`
            }] }
];
SFItemWrapComponent.propDecorators = {
    id: [{ type: Input }],
    schema: [{ type: Input }],
    ui: [{ type: Input }],
    showError: [{ type: Input }],
    error: [{ type: Input }],
    showTitle: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    SFItemWrapComponent.prototype.id;
    /** @type {?} */
    SFItemWrapComponent.prototype.schema;
    /** @type {?} */
    SFItemWrapComponent.prototype.ui;
    /** @type {?} */
    SFItemWrapComponent.prototype.showError;
    /** @type {?} */
    SFItemWrapComponent.prototype.error;
    /** @type {?} */
    SFItemWrapComponent.prototype.showTitle;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2YtaXRlbS13cmFwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9mb3JtLyIsInNvdXJjZXMiOlsic3JjL3NmLWl0ZW0td3JhcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBNEJqRCxNQUFNOzs7WUF4QkwsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQW9CTTthQUNqQjs7O2lCQUVFLEtBQUs7cUJBQ0wsS0FBSztpQkFDTCxLQUFLO3dCQUNMLEtBQUs7b0JBQ0wsS0FBSzt3QkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTRlNjaGVtYSB9IGZyb20gJy4vc2NoZW1hL2luZGV4JztcclxuaW1wb3J0IHsgU0ZVSVNjaGVtYUl0ZW0gfSBmcm9tICcuL3NjaGVtYS91aSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NmLWl0ZW0td3JhcCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8bnotZm9ybS1pdGVtIFtzdHlsZS53aWR0aC5weF09XCJ1aS53aWR0aFwiPlxyXG4gICAgPG56LWNvbCAqbmdJZj1cInNob3dUaXRsZVwiIFtuelNwYW5dPVwidWkuc3BhbkxhYmVsXCIgY2xhc3M9XCJhbnQtZm9ybS1pdGVtLWxhYmVsXCI+XHJcbiAgICAgIDxsYWJlbCBbYXR0ci5mb3JdPVwiaWRcIiBbY2xhc3MuYW50LWZvcm0taXRlbS1yZXF1aXJlZF09XCJ1aS5fcmVxdWlyZWRcIj5cclxuICAgICAgICB7eyBzY2hlbWEudGl0bGUgfX1cclxuICAgICAgICA8c3BhbiBjbGFzcz1cIm9wdGlvbmFsXCI+XHJcbiAgICAgICAgICB7eyB1aS5vcHRpb25hbCB9fVxyXG4gICAgICAgICAgPG56LXRvb2x0aXAgKm5nSWY9XCJ1aS5vcHRpb25hbEhlbHBcIiBbbnpUaXRsZV09XCJ1aS5vcHRpb25hbEhlbHBcIj5cclxuICAgICAgICAgICAgPGkgbnotdG9vbHRpcCBjbGFzcz1cImFudGljb24gYW50aWNvbi1xdWVzdGlvbi1jaXJjbGUtb1wiPjwvaT5cclxuICAgICAgICAgIDwvbnotdG9vbHRpcD5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvbGFiZWw+XHJcbiAgICA8L256LWNvbD5cclxuICAgIDxuei1jb2wgY2xhc3M9XCJhbnQtZm9ybS1pdGVtLWNvbnRyb2wtd3JhcHBlclwiIFtuelNwYW5dPVwidWkuc3BhbkNvbnRyb2xcIiBbbnpPZmZzZXRdPVwidWkub2Zmc2V0Q29udHJvbFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LWZvcm0taXRlbS1jb250cm9sXCIgW2NsYXNzLmhhcy1lcnJvcl09XCJzaG93RXJyb3JcIj5cclxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICAgICAgPG56LWZvcm0tZXh0cmEgKm5nSWY9XCJzY2hlbWEuZGVzY3JpcHRpb25cIiBbaW5uZXJIVE1MXT1cInNjaGVtYS5kZXNjcmlwdGlvblwiPjwvbnotZm9ybS1leHRyYT5cclxuICAgICAgICA8bnotZm9ybS1leHBsYWluICpuZ0lmPVwiIXVpLm9ubHlWaXN1YWwgJiYgc2hvd0Vycm9yXCI+e3tlcnJvcn19PC9uei1mb3JtLWV4cGxhaW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uei1jb2w+XHJcbiAgPC9uei1mb3JtLWl0ZW0+YCxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNGSXRlbVdyYXBDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgc2NoZW1hOiBTRlNjaGVtYTtcclxuICBASW5wdXQoKSB1aTogU0ZVSVNjaGVtYUl0ZW07XHJcbiAgQElucHV0KCkgc2hvd0Vycm9yOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGVycm9yOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgc2hvd1RpdGxlOiBib29sZWFuO1xyXG59XHJcbiJdfQ==