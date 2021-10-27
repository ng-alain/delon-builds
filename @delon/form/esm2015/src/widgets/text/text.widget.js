import { Component, ViewEncapsulation } from '@angular/core';
import { ControlUIWidget } from '../../widget';
export class TextWidget extends ControlUIWidget {
    constructor() {
        super(...arguments);
        this.text = '';
    }
    ngOnInit() {
        this.ui._required = false;
    }
    reset(value) {
        this.text = value || this.ui.defaultText || '-';
    }
}
TextWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-text',
                template: "<sf-item-wrap\n  [id]=\"id\"\n  [schema]=\"schema\"\n  [ui]=\"ui\"\n  [showError]=\"showError\"\n  [error]=\"error\"\n  [showTitle]=\"schema.title\"\n  [class.sf__text-html]=\"ui.html\"\n>\n  <span *ngIf=\"ui.html\" [innerHTML]=\"text\"></span>\n  <span *ngIf=\"!ui.html\" [innerText]=\"text\"></span>\n</sf-item-wrap>\n",
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC53aWRnZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3NyYy93aWRnZXRzL3RleHQvdGV4dC53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUdyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBUy9DLE1BQU0sT0FBTyxVQUFXLFNBQVEsZUFBbUM7SUFObkU7O1FBT0UsU0FBSSxHQUFXLEVBQUUsQ0FBQztJQVFwQixDQUFDO0lBUEMsUUFBUTtRQUNOLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBRUQsS0FBSyxDQUFDLEtBQWM7UUFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLElBQUksR0FBRyxDQUFDO0lBQ2xELENBQUM7OztZQWRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsU0FBUztnQkFDbkIsNFVBQWlDO2dCQUNqQyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTRlZhbHVlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlJztcbmltcG9ydCB7IENvbnRyb2xVSVdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5pbXBvcnQgeyBTRlRleHRXaWRnZXRTY2hlbWEgfSBmcm9tICcuL3NjaGVtYSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLXRleHQnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGV4dC53aWRnZXQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFRleHRXaWRnZXQgZXh0ZW5kcyBDb250cm9sVUlXaWRnZXQ8U0ZUZXh0V2lkZ2V0U2NoZW1hPiBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHRleHQ6IHN0cmluZyA9ICcnO1xuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnVpLl9yZXF1aXJlZCA9IGZhbHNlO1xuICB9XG5cbiAgcmVzZXQodmFsdWU6IFNGVmFsdWUpOiB2b2lkIHtcbiAgICB0aGlzLnRleHQgPSB2YWx1ZSB8fCB0aGlzLnVpLmRlZmF1bHRUZXh0IHx8ICctJztcbiAgfVxufVxuIl19