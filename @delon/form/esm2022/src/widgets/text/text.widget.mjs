import { Component, ViewEncapsulation } from '@angular/core';
import { toBool } from '../../utils';
import { ControlUIWidget } from '../../widget';
import * as i0 from "@angular/core";
import * as i1 from "../../sf-item-wrap.component";
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: TextWidget, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.9", type: TextWidget, selector: "sf-text", usesInheritance: true, ngImport: i0, template: `<sf-item-wrap
    [id]="id"
    [schema]="schema"
    [ui]="ui"
    [showError]="showError"
    [error]="error"
    [showTitle]="schema.title"
    [class.sf__text-html]="ui.html"
  >
    @if (ui.html) {
      <span [innerHTML]="text"></span>
    } @else {
      <span [innerText]="text"></span>
    }
  </sf-item-wrap>`, isInline: true, dependencies: [{ kind: "component", type: i1.SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: TextWidget, decorators: [{
            type: Component,
            args: [{
                    selector: 'sf-text',
                    template: `<sf-item-wrap
    [id]="id"
    [schema]="schema"
    [ui]="ui"
    [showError]="showError"
    [error]="error"
    [showTitle]="schema.title"
    [class.sf__text-html]="ui.html"
  >
    @if (ui.html) {
      <span [innerHTML]="text"></span>
    } @else {
      <span [innerText]="text"></span>
    }
  </sf-item-wrap>`,
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC53aWRnZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3NyYy93aWRnZXRzL3RleHQvdGV4dC53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUlyRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxjQUFjLENBQUM7OztBQXNCL0MsTUFBTSxPQUFPLFVBQVcsU0FBUSxlQUFtQztJQXBCbkU7O1FBcUJFLFNBQUksR0FBVyxFQUFFLENBQUM7S0FTbkI7SUFSQyxRQUFRO1FBQ04sSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsS0FBSyxDQUFDLEtBQWM7UUFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLElBQUksR0FBRyxDQUFDO0lBQ2xELENBQUM7OEdBVFUsVUFBVTtrR0FBVixVQUFVLHNFQWxCWDs7Ozs7Ozs7Ozs7Ozs7a0JBY007OzJGQUlMLFVBQVU7a0JBcEJ0QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxTQUFTO29CQUNuQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7O2tCQWNNO29CQUNoQixtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDdEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU0ZUZXh0V2lkZ2V0U2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEnO1xuaW1wb3J0IHsgU0ZWYWx1ZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZSc7XG5pbXBvcnQgeyB0b0Jvb2wgfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgeyBDb250cm9sVUlXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi10ZXh0JyxcbiAgdGVtcGxhdGU6IGA8c2YtaXRlbS13cmFwXG4gICAgW2lkXT1cImlkXCJcbiAgICBbc2NoZW1hXT1cInNjaGVtYVwiXG4gICAgW3VpXT1cInVpXCJcbiAgICBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiXG4gICAgW2Vycm9yXT1cImVycm9yXCJcbiAgICBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiXG4gICAgW2NsYXNzLnNmX190ZXh0LWh0bWxdPVwidWkuaHRtbFwiXG4gID5cbiAgICBAaWYgKHVpLmh0bWwpIHtcbiAgICAgIDxzcGFuIFtpbm5lckhUTUxdPVwidGV4dFwiPjwvc3Bhbj5cbiAgICB9IEBlbHNlIHtcbiAgICAgIDxzcGFuIFtpbm5lclRleHRdPVwidGV4dFwiPjwvc3Bhbj5cbiAgICB9XG4gIDwvc2YtaXRlbS13cmFwPmAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFRleHRXaWRnZXQgZXh0ZW5kcyBDb250cm9sVUlXaWRnZXQ8U0ZUZXh0V2lkZ2V0U2NoZW1hPiBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHRleHQ6IHN0cmluZyA9ICcnO1xuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnVpLl9yZXF1aXJlZCA9IGZhbHNlO1xuICAgIHRoaXMudWkuaHRtbCA9IHRvQm9vbCh0aGlzLnVpLmh0bWwsIHRydWUpO1xuICB9XG5cbiAgcmVzZXQodmFsdWU6IFNGVmFsdWUpOiB2b2lkIHtcbiAgICB0aGlzLnRleHQgPSB2YWx1ZSB8fCB0aGlzLnVpLmRlZmF1bHRUZXh0IHx8ICctJztcbiAgfVxufVxuIl19