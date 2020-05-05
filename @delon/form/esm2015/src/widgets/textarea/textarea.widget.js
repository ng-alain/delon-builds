/**
 * @fileoverview added by tsickle
 * Generated from: src/widgets/textarea/textarea.widget.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { ControlUIWidget } from '../../widget';
export class TextareaWidget extends ControlUIWidget {
    constructor() {
        super(...arguments);
        this.autosize = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        const { autosize } = this.ui;
        if (autosize != null) {
            this.autosize = autosize;
        }
    }
}
TextareaWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-textarea',
                template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <textarea\n    nz-input\n    [attr.id]=\"id\"\n    [disabled]=\"disabled\"\n    [attr.disabled]=\"disabled\"\n    [nzSize]=\"ui.size\"\n    [ngModel]=\"value\"\n    (ngModelChange)=\"setValue($event)\"\n    [attr.maxLength]=\"schema.maxLength || null\"\n    [attr.placeholder]=\"ui.placeholder\"\n    [nzAutosize]=\"autosize\"\n  >\n  </textarea>\n</sf-item-wrap>\n",
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None
            }] }
];
if (false) {
    /** @type {?} */
    TextareaWidget.prototype.autosize;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGFyZWEud2lkZ2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0cy90ZXh0YXJlYS90ZXh0YXJlYS53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFTL0MsTUFBTSxPQUFPLGNBQWUsU0FBUSxlQUF1QztJQU4zRTs7UUFPRSxhQUFRLEdBQTJCLElBQUksQ0FBQztJQVExQyxDQUFDOzs7O0lBTkMsUUFBUTtjQUNBLEVBQUUsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUU7UUFDNUIsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1NBQzFCO0lBQ0gsQ0FBQzs7O1lBZEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixnZ0JBQXFDO2dCQUNyQyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0Qzs7OztJQUVDLGtDQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXV0b1NpemVUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pbnB1dCc7XG5pbXBvcnQgeyBDb250cm9sVUlXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuaW1wb3J0IHsgU0ZUZXh0YXJlYVdpZGdldFNjaGVtYSB9IGZyb20gJy4vc2NoZW1hJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtdGV4dGFyZWEnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGV4dGFyZWEud2lkZ2V0Lmh0bWwnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgVGV4dGFyZWFXaWRnZXQgZXh0ZW5kcyBDb250cm9sVUlXaWRnZXQ8U0ZUZXh0YXJlYVdpZGdldFNjaGVtYT4gaW1wbGVtZW50cyBPbkluaXQge1xuICBhdXRvc2l6ZTogYm9vbGVhbiB8IEF1dG9TaXplVHlwZSA9IHRydWU7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3QgeyBhdXRvc2l6ZSB9ID0gdGhpcy51aTtcbiAgICBpZiAoYXV0b3NpemUgIT0gbnVsbCkge1xuICAgICAgdGhpcy5hdXRvc2l6ZSA9IGF1dG9zaXplO1xuICAgIH1cbiAgfVxufVxuIl19