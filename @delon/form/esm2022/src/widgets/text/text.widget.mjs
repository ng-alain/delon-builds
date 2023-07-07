import { Component, ViewEncapsulation } from '@angular/core';
import { toBool } from '../../utils';
import { ControlUIWidget } from '../../widget';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../sf-item-wrap.component";
class TextWidget extends ControlUIWidget {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.4", ngImport: i0, type: TextWidget, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.4", type: TextWidget, selector: "sf-text", usesInheritance: true, ngImport: i0, template: "<sf-item-wrap\n  [id]=\"id\"\n  [schema]=\"schema\"\n  [ui]=\"ui\"\n  [showError]=\"showError\"\n  [error]=\"error\"\n  [showTitle]=\"schema.title\"\n  [class.sf__text-html]=\"ui.html\"\n>\n  <span *ngIf=\"ui.html\" [innerHTML]=\"text\"></span>\n  <span *ngIf=\"!ui.html\" [innerText]=\"text\"></span>\n</sf-item-wrap>\n", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
export { TextWidget };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.4", ngImport: i0, type: TextWidget, decorators: [{
            type: Component,
            args: [{ selector: 'sf-text', preserveWhitespaces: false, encapsulation: ViewEncapsulation.None, template: "<sf-item-wrap\n  [id]=\"id\"\n  [schema]=\"schema\"\n  [ui]=\"ui\"\n  [showError]=\"showError\"\n  [error]=\"error\"\n  [showTitle]=\"schema.title\"\n  [class.sf__text-html]=\"ui.html\"\n>\n  <span *ngIf=\"ui.html\" [innerHTML]=\"text\"></span>\n  <span *ngIf=\"!ui.html\" [innerText]=\"text\"></span>\n</sf-item-wrap>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC53aWRnZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3NyYy93aWRnZXRzL3RleHQvdGV4dC53aWRnZXQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3NyYy93aWRnZXRzL3RleHQvdGV4dC53aWRnZXQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3JFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDckMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7OztBQUcvQyxNQU1hLFVBQVcsU0FBUSxlQUFtQztJQU5uRTs7UUFPRSxTQUFJLEdBQVcsRUFBRSxDQUFDO0tBU25CO0lBUkMsUUFBUTtRQUNOLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELEtBQUssQ0FBQyxLQUFjO1FBQ2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxJQUFJLEdBQUcsQ0FBQztJQUNsRCxDQUFDOzhHQVRVLFVBQVU7a0dBQVYsVUFBVSxzRUNidkIsa1VBWUE7O1NEQ2EsVUFBVTsyRkFBVixVQUFVO2tCQU50QixTQUFTOytCQUNFLFNBQVMsdUJBRUUsS0FBSyxpQkFDWCxpQkFBaUIsQ0FBQyxJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNGVmFsdWUgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgdG9Cb29sIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHsgQ29udHJvbFVJV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcbmltcG9ydCB7IFNGVGV4dFdpZGdldFNjaGVtYSB9IGZyb20gJy4vc2NoZW1hJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtdGV4dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90ZXh0LndpZGdldC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgVGV4dFdpZGdldCBleHRlbmRzIENvbnRyb2xVSVdpZGdldDxTRlRleHRXaWRnZXRTY2hlbWE+IGltcGxlbWVudHMgT25Jbml0IHtcbiAgdGV4dDogc3RyaW5nID0gJyc7XG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudWkuX3JlcXVpcmVkID0gZmFsc2U7XG4gICAgdGhpcy51aS5odG1sID0gdG9Cb29sKHRoaXMudWkuaHRtbCwgdHJ1ZSk7XG4gIH1cblxuICByZXNldCh2YWx1ZTogU0ZWYWx1ZSk6IHZvaWQge1xuICAgIHRoaXMudGV4dCA9IHZhbHVlIHx8IHRoaXMudWkuZGVmYXVsdFRleHQgfHwgJy0nO1xuICB9XG59XG4iLCI8c2YtaXRlbS13cmFwXG4gIFtpZF09XCJpZFwiXG4gIFtzY2hlbWFdPVwic2NoZW1hXCJcbiAgW3VpXT1cInVpXCJcbiAgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIlxuICBbZXJyb3JdPVwiZXJyb3JcIlxuICBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiXG4gIFtjbGFzcy5zZl9fdGV4dC1odG1sXT1cInVpLmh0bWxcIlxuPlxuICA8c3BhbiAqbmdJZj1cInVpLmh0bWxcIiBbaW5uZXJIVE1MXT1cInRleHRcIj48L3NwYW4+XG4gIDxzcGFuICpuZ0lmPVwiIXVpLmh0bWxcIiBbaW5uZXJUZXh0XT1cInRleHRcIj48L3NwYW4+XG48L3NmLWl0ZW0td3JhcD5cbiJdfQ==