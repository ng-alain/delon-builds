import { Component, ViewEncapsulation } from '@angular/core';
import { toBool } from '../../utils';
import { ControlUIWidget } from '../../widget';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../sf-item-wrap.component";
export class TextWidget extends ControlUIWidget {
    constructor() {
        super(...arguments);
        this.text = '';
    }
    ngOnInit() {
        this.ui._required = false;
        this.ui.html = toBool(this.ui.html, true);
    }
    reset(value) {
        this.text = value || this.ui.defaultText || '-';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.1", ngImport: i0, type: TextWidget, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.1", type: TextWidget, selector: "sf-text", usesInheritance: true, ngImport: i0, template: "<sf-item-wrap\n  [id]=\"id\"\n  [schema]=\"schema\"\n  [ui]=\"ui\"\n  [showError]=\"showError\"\n  [error]=\"error\"\n  [showTitle]=\"schema.title\"\n  [class.sf__text-html]=\"ui.html\"\n>\n  <span *ngIf=\"ui.html\" [innerHTML]=\"text\"></span>\n  <span *ngIf=\"!ui.html\" [innerText]=\"text\"></span>\n</sf-item-wrap>\n", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.1", ngImport: i0, type: TextWidget, decorators: [{
            type: Component,
            args: [{ selector: 'sf-text', preserveWhitespaces: false, encapsulation: ViewEncapsulation.None, template: "<sf-item-wrap\n  [id]=\"id\"\n  [schema]=\"schema\"\n  [ui]=\"ui\"\n  [showError]=\"showError\"\n  [error]=\"error\"\n  [showTitle]=\"schema.title\"\n  [class.sf__text-html]=\"ui.html\"\n>\n  <span *ngIf=\"ui.html\" [innerHTML]=\"text\"></span>\n  <span *ngIf=\"!ui.html\" [innerText]=\"text\"></span>\n</sf-item-wrap>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC53aWRnZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3NyYy93aWRnZXRzL3RleHQvdGV4dC53aWRnZXQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3NyYy93aWRnZXRzL3RleHQvdGV4dC53aWRnZXQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSXJFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDckMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7OztBQVEvQyxNQUFNLE9BQU8sVUFBVyxTQUFRLGVBQW1DO0lBTm5FOztRQU9FLFNBQUksR0FBVyxFQUFFLENBQUM7S0FTbkI7SUFSQyxRQUFRO1FBQ04sSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsS0FBSyxDQUFDLEtBQWM7UUFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLElBQUksR0FBRyxDQUFDO0lBQ2xELENBQUM7OEdBVFUsVUFBVTtrR0FBVixVQUFVLHNFQ2J2QixrVUFZQTs7MkZEQ2EsVUFBVTtrQkFOdEIsU0FBUzsrQkFDRSxTQUFTLHVCQUVFLEtBQUssaUJBQ1gsaUJBQWlCLENBQUMsSUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTRlRleHRXaWRnZXRTY2hlbWEgfSBmcm9tICcuL3NjaGVtYSc7XG5pbXBvcnQgeyBTRlZhbHVlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlJztcbmltcG9ydCB7IHRvQm9vbCB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IENvbnRyb2xVSVdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLXRleHQnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGV4dC53aWRnZXQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFRleHRXaWRnZXQgZXh0ZW5kcyBDb250cm9sVUlXaWRnZXQ8U0ZUZXh0V2lkZ2V0U2NoZW1hPiBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHRleHQ6IHN0cmluZyA9ICcnO1xuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnVpLl9yZXF1aXJlZCA9IGZhbHNlO1xuICAgIHRoaXMudWkuaHRtbCA9IHRvQm9vbCh0aGlzLnVpLmh0bWwsIHRydWUpO1xuICB9XG5cbiAgcmVzZXQodmFsdWU6IFNGVmFsdWUpOiB2b2lkIHtcbiAgICB0aGlzLnRleHQgPSB2YWx1ZSB8fCB0aGlzLnVpLmRlZmF1bHRUZXh0IHx8ICctJztcbiAgfVxufVxuIiwiPHNmLWl0ZW0td3JhcFxuICBbaWRdPVwiaWRcIlxuICBbc2NoZW1hXT1cInNjaGVtYVwiXG4gIFt1aV09XCJ1aVwiXG4gIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCJcbiAgW2Vycm9yXT1cImVycm9yXCJcbiAgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIlxuICBbY2xhc3Muc2ZfX3RleHQtaHRtbF09XCJ1aS5odG1sXCJcbj5cbiAgPHNwYW4gKm5nSWY9XCJ1aS5odG1sXCIgW2lubmVySFRNTF09XCJ0ZXh0XCI+PC9zcGFuPlxuICA8c3BhbiAqbmdJZj1cIiF1aS5odG1sXCIgW2lubmVyVGV4dF09XCJ0ZXh0XCI+PC9zcGFuPlxuPC9zZi1pdGVtLXdyYXA+XG4iXX0=