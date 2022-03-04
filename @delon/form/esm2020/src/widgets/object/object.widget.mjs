import { Component, ViewEncapsulation } from '@angular/core';
import { ArrayProperty } from '../../model/array.property';
import { toBool } from '../../utils';
import { ObjectLayoutWidget } from '../../widget';
import * as i0 from "@angular/core";
import * as i1 from "../../sf-item.component";
import * as i2 from "ng-zorro-antd/card";
import * as i3 from "@angular/common";
import * as i4 from "ng-zorro-antd/grid";
import * as i5 from "../../sf-fixed.directive";
import * as i6 from "ng-zorro-antd/core/transition-patch";
import * as i7 from "ng-zorro-antd/icon";
export class ObjectWidget extends ObjectLayoutWidget {
    constructor() {
        super(...arguments);
        this.type = 'default';
        this.list = [];
        this.showExpand = true;
        this.expand = true;
    }
    ngOnInit() {
        const { formProperty, ui } = this;
        const { grid, showTitle, type } = ui;
        this.showExpand = toBool(ui.showExpand, true);
        this.expand = toBool(ui.expand, true);
        this.type = type ?? 'default';
        if (this.type === 'card' ||
            (!formProperty.isRoot() && !(formProperty.parent instanceof ArrayProperty) && showTitle === true)) {
            this.title = this.schema.title;
        }
        this.grid = grid;
        const list = [];
        for (const key of formProperty.propertiesId) {
            const property = formProperty.properties[key];
            const item = {
                property,
                grid: property.ui.grid || grid || {},
                spanLabelFixed: property.ui.spanLabelFixed,
                show: property.ui.hidden === false
            };
            list.push(item);
        }
        this.list = list;
    }
    changeExpand() {
        if (!this.showExpand) {
            return;
        }
        this.expand = !this.expand;
        this.detectChanges(true);
    }
}
ObjectWidget.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: ObjectWidget, deps: null, target: i0.ɵɵFactoryTarget.Component });
ObjectWidget.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.5", type: ObjectWidget, selector: "sf-object", usesInheritance: true, ngImport: i0, template: "<ng-template #default let-noTitle>\n  <div *ngIf=\"!noTitle && title\" class=\"sf__title\">{{ title }}</div>\n  <ng-container *ngIf=\"grid; else noGrid\">\n    <div nz-row [nzGutter]=\"grid.gutter\">\n      <ng-container *ngFor=\"let i of list\">\n        <ng-container *ngIf=\"i.property.visible && i.show\">\n          <div\n            nz-col\n            [nzSpan]=\"i.grid.span\"\n            [nzOffset]=\"i.grid.offset\"\n            [nzXs]=\"i.grid.xs\"\n            [nzSm]=\"i.grid.sm\"\n            [nzMd]=\"i.grid.md\"\n            [nzLg]=\"i.grid.lg\"\n            [nzXl]=\"i.grid.xl\"\n            [nzXXl]=\"i.grid.xxl\"\n          >\n            <sf-item [formProperty]=\"i.property\" [fixed-label]=\"i.spanLabelFixed\"></sf-item>\n          </div>\n        </ng-container>\n      </ng-container>\n    </div>\n  </ng-container>\n  <ng-template #noGrid>\n    <ng-container *ngFor=\"let i of list\">\n      <ng-container *ngIf=\"i.property.visible && i.show\">\n        <sf-item [formProperty]=\"i.property\" [fixed-label]=\"i.spanLabelFixed\"></sf-item>\n      </ng-container>\n    </ng-container>\n  </ng-template>\n</ng-template>\n<nz-card\n  *ngIf=\"type === 'card'; else default\"\n  [nzTitle]=\"cardTitleTpl\"\n  [nzExtra]=\"ui.cardExtra\"\n  [nzSize]=\"ui.cardSize || 'small'\"\n  [nzActions]=\"ui.cardActions || []\"\n  [nzBodyStyle]=\"ui.cardBodyStyle!\"\n  [nzBordered]=\"ui.cardBordered || true\"\n  [nzBorderless]=\"ui.cardBorderless || false\"\n  class=\"sf__object-card\"\n  [class.sf__object-card-fold]=\"!expand\"\n>\n  <ng-template #cardTitleTpl>\n    <div [class.point]=\"showExpand\" (click)=\"changeExpand()\">\n      <i *ngIf=\"showExpand\" nz-icon [nzType]=\"expand ? 'down' : 'up'\" class=\"mr-xs text-xs\"></i>\n      {{ title }}\n    </div>\n  </ng-template>\n  <ng-template [ngTemplateOutlet]=\"default\" [ngTemplateOutletContext]=\"{ $implicit: true }\"></ng-template>\n</nz-card>\n", components: [{ type: i1.SFItemComponent, selector: "sf-item", inputs: ["formProperty", "footer"], exportAs: ["sfItem"] }, { type: i2.NzCardComponent, selector: "nz-card", inputs: ["nzBordered", "nzBorderless", "nzLoading", "nzHoverable", "nzBodyStyle", "nzCover", "nzActions", "nzType", "nzSize", "nzTitle", "nzExtra"], exportAs: ["nzCard"] }], directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i4.NzRowDirective, selector: "[nz-row],nz-row,nz-form-item", inputs: ["nzAlign", "nzJustify", "nzGutter"], exportAs: ["nzRow"] }, { type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i4.NzColDirective, selector: "[nz-col],nz-col,nz-form-control,nz-form-label", inputs: ["nzFlex", "nzSpan", "nzOrder", "nzOffset", "nzPush", "nzPull", "nzXs", "nzSm", "nzMd", "nzLg", "nzXl", "nzXXl"], exportAs: ["nzCol"] }, { type: i5.SFFixedDirective, selector: "[fixed-label]", inputs: ["fixed-label"] }, { type: i6.ɵNzTransitionPatchDirective, selector: "[nz-button], nz-button-group, [nz-icon], [nz-menu-item], [nz-submenu], nz-select-top-control, nz-select-placeholder, nz-input-group", inputs: ["hidden"] }, { type: i7.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { type: i3.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: ObjectWidget, decorators: [{
            type: Component,
            args: [{ selector: 'sf-object', preserveWhitespaces: false, encapsulation: ViewEncapsulation.None, template: "<ng-template #default let-noTitle>\n  <div *ngIf=\"!noTitle && title\" class=\"sf__title\">{{ title }}</div>\n  <ng-container *ngIf=\"grid; else noGrid\">\n    <div nz-row [nzGutter]=\"grid.gutter\">\n      <ng-container *ngFor=\"let i of list\">\n        <ng-container *ngIf=\"i.property.visible && i.show\">\n          <div\n            nz-col\n            [nzSpan]=\"i.grid.span\"\n            [nzOffset]=\"i.grid.offset\"\n            [nzXs]=\"i.grid.xs\"\n            [nzSm]=\"i.grid.sm\"\n            [nzMd]=\"i.grid.md\"\n            [nzLg]=\"i.grid.lg\"\n            [nzXl]=\"i.grid.xl\"\n            [nzXXl]=\"i.grid.xxl\"\n          >\n            <sf-item [formProperty]=\"i.property\" [fixed-label]=\"i.spanLabelFixed\"></sf-item>\n          </div>\n        </ng-container>\n      </ng-container>\n    </div>\n  </ng-container>\n  <ng-template #noGrid>\n    <ng-container *ngFor=\"let i of list\">\n      <ng-container *ngIf=\"i.property.visible && i.show\">\n        <sf-item [formProperty]=\"i.property\" [fixed-label]=\"i.spanLabelFixed\"></sf-item>\n      </ng-container>\n    </ng-container>\n  </ng-template>\n</ng-template>\n<nz-card\n  *ngIf=\"type === 'card'; else default\"\n  [nzTitle]=\"cardTitleTpl\"\n  [nzExtra]=\"ui.cardExtra\"\n  [nzSize]=\"ui.cardSize || 'small'\"\n  [nzActions]=\"ui.cardActions || []\"\n  [nzBodyStyle]=\"ui.cardBodyStyle!\"\n  [nzBordered]=\"ui.cardBordered || true\"\n  [nzBorderless]=\"ui.cardBorderless || false\"\n  class=\"sf__object-card\"\n  [class.sf__object-card-fold]=\"!expand\"\n>\n  <ng-template #cardTitleTpl>\n    <div [class.point]=\"showExpand\" (click)=\"changeExpand()\">\n      <i *ngIf=\"showExpand\" nz-icon [nzType]=\"expand ? 'down' : 'up'\" class=\"mr-xs text-xs\"></i>\n      {{ title }}\n    </div>\n  </ng-template>\n  <ng-template [ngTemplateOutlet]=\"default\" [ngTemplateOutletContext]=\"{ $implicit: true }\"></ng-template>\n</nz-card>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqZWN0LndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm0vc3JjL3dpZGdldHMvb2JqZWN0L29iamVjdC53aWRnZXQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3NyYy93aWRnZXRzL29iamVjdC9vYmplY3Qud2lkZ2V0Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUlyRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFHM0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNyQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7Ozs7OztBQVNsRCxNQUFNLE9BQU8sWUFBYSxTQUFRLGtCQUFrQjtJQU5wRDs7UUFRRSxTQUFJLEdBQTZCLFNBQVMsQ0FBQztRQUMzQyxTQUFJLEdBQWdCLEVBQUUsQ0FBQztRQUV2QixlQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLFdBQU0sR0FBRyxJQUFJLENBQUM7S0FvQ2Y7SUFsQ0MsUUFBUTtRQUNOLE1BQU0sRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLE1BQU0sRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksU0FBUyxDQUFDO1FBQzlCLElBQ0UsSUFBSSxDQUFDLElBQUksS0FBSyxNQUFNO1lBQ3BCLENBQUMsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxNQUFNLFlBQVksYUFBYSxDQUFDLElBQUksU0FBUyxLQUFLLElBQUksQ0FBQyxFQUNqRztZQUNBLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFlLENBQUM7U0FDMUM7UUFDRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQW9CLENBQUM7UUFDakMsTUFBTSxJQUFJLEdBQWdCLEVBQUUsQ0FBQztRQUM3QixLQUFLLE1BQU0sR0FBRyxJQUFJLFlBQVksQ0FBQyxZQUFZLEVBQUU7WUFDM0MsTUFBTSxRQUFRLEdBQUksWUFBWSxDQUFDLFVBQThDLENBQUMsR0FBRyxDQUFpQixDQUFDO1lBQ25HLE1BQU0sSUFBSSxHQUFHO2dCQUNYLFFBQVE7Z0JBQ1IsSUFBSSxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO2dCQUNwQyxjQUFjLEVBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBQyxjQUFjO2dCQUMxQyxJQUFJLEVBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEtBQUssS0FBSzthQUNuQyxDQUFDO1lBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNqQjtRQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFFRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDcEIsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDM0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQixDQUFDOzt5R0F6Q1UsWUFBWTs2RkFBWixZQUFZLHdFQ2pCekIsaTREQW1EQTsyRkRsQ2EsWUFBWTtrQkFOeEIsU0FBUzsrQkFDRSxXQUFXLHVCQUVBLEtBQUssaUJBQ1gsaUJBQWlCLENBQUMsSUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgdHlwZSB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbmltcG9ydCB7IEFycmF5UHJvcGVydHkgfSBmcm9tICcuLi8uLi9tb2RlbC9hcnJheS5wcm9wZXJ0eSc7XG5pbXBvcnQgeyBGb3JtUHJvcGVydHkgfSBmcm9tICcuLi8uLi9tb2RlbC9mb3JtLnByb3BlcnR5JztcbmltcG9ydCB0eXBlIHsgU0ZHcmlkU2NoZW1hIH0gZnJvbSAnLi4vLi4vc2NoZW1hL3VpJztcbmltcG9ydCB7IHRvQm9vbCB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IE9iamVjdExheW91dFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5pbXBvcnQgdHlwZSB7IFNGT2JqZWN0V2lkZ2V0UmVuZGVyVHlwZSB9IGZyb20gJy4vc2NoZW1hJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2Ytb2JqZWN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL29iamVjdC53aWRnZXQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIE9iamVjdFdpZGdldCBleHRlbmRzIE9iamVjdExheW91dFdpZGdldCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGdyaWQ6IE56U2FmZUFueTtcbiAgdHlwZTogU0ZPYmplY3RXaWRnZXRSZW5kZXJUeXBlID0gJ2RlZmF1bHQnO1xuICBsaXN0OiBOelNhZmVBbnlbXSA9IFtdO1xuICB0aXRsZT86IHN0cmluZztcbiAgc2hvd0V4cGFuZCA9IHRydWU7XG4gIGV4cGFuZCA9IHRydWU7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3QgeyBmb3JtUHJvcGVydHksIHVpIH0gPSB0aGlzO1xuICAgIGNvbnN0IHsgZ3JpZCwgc2hvd1RpdGxlLCB0eXBlIH0gPSB1aTtcbiAgICB0aGlzLnNob3dFeHBhbmQgPSB0b0Jvb2wodWkuc2hvd0V4cGFuZCwgdHJ1ZSk7XG4gICAgdGhpcy5leHBhbmQgPSB0b0Jvb2wodWkuZXhwYW5kLCB0cnVlKTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlID8/ICdkZWZhdWx0JztcbiAgICBpZiAoXG4gICAgICB0aGlzLnR5cGUgPT09ICdjYXJkJyB8fFxuICAgICAgKCFmb3JtUHJvcGVydHkuaXNSb290KCkgJiYgIShmb3JtUHJvcGVydHkucGFyZW50IGluc3RhbmNlb2YgQXJyYXlQcm9wZXJ0eSkgJiYgc2hvd1RpdGxlID09PSB0cnVlKVxuICAgICkge1xuICAgICAgdGhpcy50aXRsZSA9IHRoaXMuc2NoZW1hLnRpdGxlIGFzIHN0cmluZztcbiAgICB9XG4gICAgdGhpcy5ncmlkID0gZ3JpZCBhcyBTRkdyaWRTY2hlbWE7XG4gICAgY29uc3QgbGlzdDogTnpTYWZlQW55W10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBmb3JtUHJvcGVydHkucHJvcGVydGllc0lkKSB7XG4gICAgICBjb25zdCBwcm9wZXJ0eSA9IChmb3JtUHJvcGVydHkucHJvcGVydGllcyBhcyB7IFtrZXk6IHN0cmluZ106IEZvcm1Qcm9wZXJ0eSB9KVtrZXldIGFzIEZvcm1Qcm9wZXJ0eTtcbiAgICAgIGNvbnN0IGl0ZW0gPSB7XG4gICAgICAgIHByb3BlcnR5LFxuICAgICAgICBncmlkOiBwcm9wZXJ0eS51aS5ncmlkIHx8IGdyaWQgfHwge30sXG4gICAgICAgIHNwYW5MYWJlbEZpeGVkOiBwcm9wZXJ0eS51aS5zcGFuTGFiZWxGaXhlZCxcbiAgICAgICAgc2hvdzogcHJvcGVydHkudWkuaGlkZGVuID09PSBmYWxzZVxuICAgICAgfTtcbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gICAgdGhpcy5saXN0ID0gbGlzdDtcbiAgfVxuXG4gIGNoYW5nZUV4cGFuZCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuc2hvd0V4cGFuZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmV4cGFuZCA9ICF0aGlzLmV4cGFuZDtcbiAgICB0aGlzLmRldGVjdENoYW5nZXModHJ1ZSk7XG4gIH1cbn1cbiIsIjxuZy10ZW1wbGF0ZSAjZGVmYXVsdCBsZXQtbm9UaXRsZT5cbiAgPGRpdiAqbmdJZj1cIiFub1RpdGxlICYmIHRpdGxlXCIgY2xhc3M9XCJzZl9fdGl0bGVcIj57eyB0aXRsZSB9fTwvZGl2PlxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiZ3JpZDsgZWxzZSBub0dyaWRcIj5cbiAgICA8ZGl2IG56LXJvdyBbbnpHdXR0ZXJdPVwiZ3JpZC5ndXR0ZXJcIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGkgb2YgbGlzdFwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaS5wcm9wZXJ0eS52aXNpYmxlICYmIGkuc2hvd1wiPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIG56LWNvbFxuICAgICAgICAgICAgW256U3Bhbl09XCJpLmdyaWQuc3BhblwiXG4gICAgICAgICAgICBbbnpPZmZzZXRdPVwiaS5ncmlkLm9mZnNldFwiXG4gICAgICAgICAgICBbbnpYc109XCJpLmdyaWQueHNcIlxuICAgICAgICAgICAgW256U21dPVwiaS5ncmlkLnNtXCJcbiAgICAgICAgICAgIFtuek1kXT1cImkuZ3JpZC5tZFwiXG4gICAgICAgICAgICBbbnpMZ109XCJpLmdyaWQubGdcIlxuICAgICAgICAgICAgW256WGxdPVwiaS5ncmlkLnhsXCJcbiAgICAgICAgICAgIFtuelhYbF09XCJpLmdyaWQueHhsXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c2YtaXRlbSBbZm9ybVByb3BlcnR5XT1cImkucHJvcGVydHlcIiBbZml4ZWQtbGFiZWxdPVwiaS5zcGFuTGFiZWxGaXhlZFwiPjwvc2YtaXRlbT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgPC9uZy1jb250YWluZXI+XG4gIDxuZy10ZW1wbGF0ZSAjbm9HcmlkPlxuICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGkgb2YgbGlzdFwiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImkucHJvcGVydHkudmlzaWJsZSAmJiBpLnNob3dcIj5cbiAgICAgICAgPHNmLWl0ZW0gW2Zvcm1Qcm9wZXJ0eV09XCJpLnByb3BlcnR5XCIgW2ZpeGVkLWxhYmVsXT1cImkuc3BhbkxhYmVsRml4ZWRcIj48L3NmLWl0ZW0+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9uZy10ZW1wbGF0ZT5cbjwvbmctdGVtcGxhdGU+XG48bnotY2FyZFxuICAqbmdJZj1cInR5cGUgPT09ICdjYXJkJzsgZWxzZSBkZWZhdWx0XCJcbiAgW256VGl0bGVdPVwiY2FyZFRpdGxlVHBsXCJcbiAgW256RXh0cmFdPVwidWkuY2FyZEV4dHJhXCJcbiAgW256U2l6ZV09XCJ1aS5jYXJkU2l6ZSB8fCAnc21hbGwnXCJcbiAgW256QWN0aW9uc109XCJ1aS5jYXJkQWN0aW9ucyB8fCBbXVwiXG4gIFtuekJvZHlTdHlsZV09XCJ1aS5jYXJkQm9keVN0eWxlIVwiXG4gIFtuekJvcmRlcmVkXT1cInVpLmNhcmRCb3JkZXJlZCB8fCB0cnVlXCJcbiAgW256Qm9yZGVybGVzc109XCJ1aS5jYXJkQm9yZGVybGVzcyB8fCBmYWxzZVwiXG4gIGNsYXNzPVwic2ZfX29iamVjdC1jYXJkXCJcbiAgW2NsYXNzLnNmX19vYmplY3QtY2FyZC1mb2xkXT1cIiFleHBhbmRcIlxuPlxuICA8bmctdGVtcGxhdGUgI2NhcmRUaXRsZVRwbD5cbiAgICA8ZGl2IFtjbGFzcy5wb2ludF09XCJzaG93RXhwYW5kXCIgKGNsaWNrKT1cImNoYW5nZUV4cGFuZCgpXCI+XG4gICAgICA8aSAqbmdJZj1cInNob3dFeHBhbmRcIiBuei1pY29uIFtuelR5cGVdPVwiZXhwYW5kID8gJ2Rvd24nIDogJ3VwJ1wiIGNsYXNzPVwibXIteHMgdGV4dC14c1wiPjwvaT5cbiAgICAgIHt7IHRpdGxlIH19XG4gICAgPC9kaXY+XG4gIDwvbmctdGVtcGxhdGU+XG4gIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJkZWZhdWx0XCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiB0cnVlIH1cIj48L25nLXRlbXBsYXRlPlxuPC9uei1jYXJkPlxuIl19