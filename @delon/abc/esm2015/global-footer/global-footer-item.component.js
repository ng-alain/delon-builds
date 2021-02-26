import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, Input, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from '@delon/util/decorator';
export class GlobalFooterItemComponent {
}
GlobalFooterItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'global-footer-item',
                exportAs: 'globalFooterItem',
                template: ` <ng-template #host><ng-content></ng-content></ng-template> `,
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            },] }
];
GlobalFooterItemComponent.propDecorators = {
    host: [{ type: ViewChild, args: ['host', { static: true },] }],
    href: [{ type: Input }],
    blankTarget: [{ type: Input }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], GlobalFooterItemComponent.prototype, "blankTarget", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLWZvb3Rlci1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9nbG9iYWwtZm9vdGVyL2dsb2JhbC1mb290ZXItaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckgsT0FBTyxFQUFnQixZQUFZLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQVVuRSxNQUFNLE9BQU8seUJBQXlCOzs7WUFSckMsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFFBQVEsRUFBRSw4REFBOEQ7Z0JBQ3hFLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0Qzs7O21CQUlFLFNBQVMsU0FBQyxNQUFNLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO21CQUVsQyxLQUFLOzBCQUNMLEtBQUs7O0FBQW1CO0lBQWYsWUFBWSxFQUFFOzs4REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgSW5wdXRCb29sZWFuIH0gZnJvbSAnQGRlbG9uL3V0aWwvZGVjb3JhdG9yJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2xvYmFsLWZvb3Rlci1pdGVtJyxcbiAgZXhwb3J0QXM6ICdnbG9iYWxGb290ZXJJdGVtJyxcbiAgdGVtcGxhdGU6IGAgPG5nLXRlbXBsYXRlICNob3N0PjxuZy1jb250ZW50PjwvbmctY29udGVudD48L25nLXRlbXBsYXRlPiBgLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIEdsb2JhbEZvb3Rlckl0ZW1Db21wb25lbnQge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfYmxhbmtUYXJnZXQ6IEJvb2xlYW5JbnB1dDtcblxuICBAVmlld0NoaWxkKCdob3N0JywgeyBzdGF0aWM6IHRydWUgfSkgaG9zdDogVGVtcGxhdGVSZWY8dm9pZD47XG5cbiAgQElucHV0KCkgaHJlZjogc3RyaW5nO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYmxhbmtUYXJnZXQ6IGJvb2xlYW47XG59XG4iXX0=