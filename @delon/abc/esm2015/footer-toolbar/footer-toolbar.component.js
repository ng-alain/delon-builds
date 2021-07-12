import { __decorate } from "tslib";
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, Inject, Input, Renderer2, ViewEncapsulation, } from '@angular/core';
import { InputBoolean } from '@delon/util/decorator';
const CLSBODY = 'footer-toolbar__body';
export class FooterToolbarComponent {
    constructor(el, renderer, doc) {
        this.el = el;
        this.renderer = renderer;
        this.doc = doc;
        this.errorCollect = false;
    }
    get bodyCls() {
        return this.doc.querySelector('body').classList;
    }
    ngOnInit() {
        this.renderer.addClass(this.el.nativeElement, 'footer-toolbar');
        this.bodyCls.add(CLSBODY);
    }
    ngOnDestroy() {
        this.bodyCls.remove(CLSBODY);
    }
}
FooterToolbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'footer-toolbar',
                exportAs: 'footerToolbar',
                template: "<div class=\"footer-toolbar__left\">\n  <ng-container *nzStringTemplateOutlet=\"extra\">{{ extra }}</ng-container>\n</div>\n<div class=\"footer-toolbar__right\">\n  <error-collect *ngIf=\"errorCollect\"></error-collect>\n  <ng-content></ng-content>\n</div>\n",
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            },] }
];
FooterToolbarComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
FooterToolbarComponent.propDecorators = {
    errorCollect: [{ type: Input }],
    extra: [{ type: Input }]
};
__decorate([
    InputBoolean()
], FooterToolbarComponent.prototype, "errorCollect", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLXRvb2xiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL2Zvb3Rlci10b29sYmFyL2Zvb3Rlci10b29sYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixNQUFNLEVBQ04sS0FBSyxFQUdMLFNBQVMsRUFFVCxpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFnQixZQUFZLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVuRSxNQUFNLE9BQU8sR0FBRyxzQkFBc0IsQ0FBQztBQVV2QyxNQUFNLE9BQU8sc0JBQXNCO0lBTWpDLFlBQW9CLEVBQWMsRUFBVSxRQUFtQixFQUE0QixHQUFRO1FBQS9FLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQTRCLFFBQUcsR0FBSCxHQUFHLENBQUs7UUFIMUUsaUJBQVksR0FBRyxLQUFLLENBQUM7SUFHd0QsQ0FBQztJQUV2RyxJQUFZLE9BQU87UUFDakIsT0FBUSxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQWlCLENBQUMsU0FBUyxDQUFDO0lBQ25FLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQy9CLENBQUM7OztZQTNCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLDhRQUE4QztnQkFDOUMsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3RDOzs7WUFwQkMsVUFBVTtZQUtWLFNBQVM7NENBc0J5RCxNQUFNLFNBQUMsUUFBUTs7OzJCQUhoRixLQUFLO29CQUNMLEtBQUs7O0FBRG1CO0lBQWYsWUFBWSxFQUFFOzREQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIElucHV0Qm9vbGVhbiB9IGZyb20gJ0BkZWxvbi91dGlsL2RlY29yYXRvcic7XG5cbmNvbnN0IENMU0JPRFkgPSAnZm9vdGVyLXRvb2xiYXJfX2JvZHknO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmb290ZXItdG9vbGJhcicsXG4gIGV4cG9ydEFzOiAnZm9vdGVyVG9vbGJhcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9mb290ZXItdG9vbGJhci5jb21wb25lbnQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgRm9vdGVyVG9vbGJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Vycm9yQ29sbGVjdDogQm9vbGVhbklucHV0O1xuXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBlcnJvckNvbGxlY3QgPSBmYWxzZTtcbiAgQElucHV0KCkgZXh0cmE6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IGFueSkge31cblxuICBwcml2YXRlIGdldCBib2R5Q2xzKCk6IERPTVRva2VuTGlzdCB7XG4gICAgcmV0dXJuICh0aGlzLmRvYy5xdWVyeVNlbGVjdG9yKCdib2R5JykgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTGlzdDtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnZm9vdGVyLXRvb2xiYXInKTtcbiAgICB0aGlzLmJvZHlDbHMuYWRkKENMU0JPRFkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5ib2R5Q2xzLnJlbW92ZShDTFNCT0RZKTtcbiAgfVxufVxuIl19