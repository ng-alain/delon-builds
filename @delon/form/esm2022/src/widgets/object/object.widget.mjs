import { Component, ViewEncapsulation } from '@angular/core';
import { ArrayProperty } from '../../model/array.property';
import { toBool } from '../../utils';
import { ObjectLayoutWidget } from '../../widget';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/core/transition-patch";
import * as i3 from "ng-zorro-antd/card";
import * as i4 from "ng-zorro-antd/grid";
import * as i5 from "ng-zorro-antd/icon";
import * as i6 from "ng-zorro-antd/tooltip";
import * as i7 from "../../sf-item.component";
import * as i8 from "../../sf-fixed.directive";
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.11", ngImport: i0, type: ObjectWidget, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.11", type: ObjectWidget, selector: "sf-object", usesInheritance: true, ngImport: i0, template: `<ng-template #default let-noTitle>
      @if (!noTitle && title) {
        <div class="sf__title">{{ title }}</div>
      }
      @if (grid) {
        <div nz-row [nzGutter]="grid.gutter">
          @for (i of list; track $index) {
            @if (i.property.visible && i.show) {
              <div
                nz-col
                [nzSpan]="i.grid.span"
                [nzOffset]="i.grid.offset"
                [nzXs]="i.grid.xs"
                [nzSm]="i.grid.sm"
                [nzMd]="i.grid.md"
                [nzLg]="i.grid.lg"
                [nzXl]="i.grid.xl"
                [nzXXl]="i.grid.xxl"
              >
                <sf-item [formProperty]="i.property" [fixed-label]="i.spanLabelFixed" />
              </div>
            }
          }
        </div>
      } @else {
        @for (i of list; track $index) {
          @if (i.property.visible && i.show) {
            <sf-item [formProperty]="i.property" [fixed-label]="i.spanLabelFixed" />
          }
        }
      }
    </ng-template>
    @if (type === 'card') {
      <nz-card
        [nzTitle]="cardTitleTpl"
        [nzExtra]="ui.cardExtra"
        [nzSize]="ui.cardSize || 'small'"
        [nzActions]="ui.cardActions || []"
        [nzBodyStyle]="ui.cardBodyStyle!"
        [nzBordered]="ui.cardBordered || true"
        [nzBorderless]="ui.cardBorderless || false"
        class="sf__object-card"
        [class.sf__object-card-fold]="!expand"
      >
        <ng-template #cardTitleTpl>
          <div [class.point]="showExpand" (click)="changeExpand()">
            @if (showExpand) {
              <i nz-icon [nzType]="expand ? 'down' : 'up'" class="mr-xs text-xs"></i>
            }
            {{ title }}
            @if (ui.optional || oh) {
              <span class="sf__optional">
                {{ ui.optional }}
                @if (oh) {
                  <i
                    s
                    nz-tooltip
                    [nzTooltipTitle]="oh.text"
                    [nzTooltipPlacement]="oh.placement"
                    [nzTooltipTrigger]="oh.trigger"
                    [nzTooltipColor]="oh.bgColor"
                    [nzTooltipOverlayClassName]="oh.overlayClassName"
                    [nzTooltipOverlayStyle]="oh.overlayStyle"
                    [nzTooltipMouseEnterDelay]="oh.mouseEnterDelay"
                    [nzTooltipMouseLeaveDelay]="oh.mouseLeaveDelay"
                    nz-icon
                    [nzType]="oh.icon!"
                  ></i>
                }
              </span>
            }
          </div>
        </ng-template>
        <ng-template [ngTemplateOutlet]="default" [ngTemplateOutletContext]="{ $implicit: true }" />
      </nz-card>
    } @else {
      <ng-template [ngTemplateOutlet]="default" />
    }`, isInline: true, dependencies: [{ kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i2.ɵNzTransitionPatchDirective, selector: "[nz-button], nz-button-group, [nz-icon], [nz-menu-item], [nz-submenu], nz-select-top-control, nz-select-placeholder, nz-input-group", inputs: ["hidden"] }, { kind: "component", type: i3.NzCardComponent, selector: "nz-card", inputs: ["nzBordered", "nzBorderless", "nzLoading", "nzHoverable", "nzBodyStyle", "nzCover", "nzActions", "nzType", "nzSize", "nzTitle", "nzExtra"], exportAs: ["nzCard"] }, { kind: "directive", type: i4.NzColDirective, selector: "[nz-col],nz-col,nz-form-control,nz-form-label", inputs: ["nzFlex", "nzSpan", "nzOrder", "nzOffset", "nzPush", "nzPull", "nzXs", "nzSm", "nzMd", "nzLg", "nzXl", "nzXXl"], exportAs: ["nzCol"] }, { kind: "directive", type: i4.NzRowDirective, selector: "[nz-row],nz-row,nz-form-item", inputs: ["nzAlign", "nzJustify", "nzGutter"], exportAs: ["nzRow"] }, { kind: "directive", type: i5.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "directive", type: i6.NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "cdkConnectedOverlayPush", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }, { kind: "component", type: i7.SFItemComponent, selector: "sf-item", inputs: ["formProperty", "footer"], exportAs: ["sfItem"] }, { kind: "directive", type: i8.SFFixedDirective, selector: "[fixed-label]", inputs: ["fixed-label"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.11", ngImport: i0, type: ObjectWidget, decorators: [{
            type: Component,
            args: [{
                    selector: 'sf-object',
                    template: `<ng-template #default let-noTitle>
      @if (!noTitle && title) {
        <div class="sf__title">{{ title }}</div>
      }
      @if (grid) {
        <div nz-row [nzGutter]="grid.gutter">
          @for (i of list; track $index) {
            @if (i.property.visible && i.show) {
              <div
                nz-col
                [nzSpan]="i.grid.span"
                [nzOffset]="i.grid.offset"
                [nzXs]="i.grid.xs"
                [nzSm]="i.grid.sm"
                [nzMd]="i.grid.md"
                [nzLg]="i.grid.lg"
                [nzXl]="i.grid.xl"
                [nzXXl]="i.grid.xxl"
              >
                <sf-item [formProperty]="i.property" [fixed-label]="i.spanLabelFixed" />
              </div>
            }
          }
        </div>
      } @else {
        @for (i of list; track $index) {
          @if (i.property.visible && i.show) {
            <sf-item [formProperty]="i.property" [fixed-label]="i.spanLabelFixed" />
          }
        }
      }
    </ng-template>
    @if (type === 'card') {
      <nz-card
        [nzTitle]="cardTitleTpl"
        [nzExtra]="ui.cardExtra"
        [nzSize]="ui.cardSize || 'small'"
        [nzActions]="ui.cardActions || []"
        [nzBodyStyle]="ui.cardBodyStyle!"
        [nzBordered]="ui.cardBordered || true"
        [nzBorderless]="ui.cardBorderless || false"
        class="sf__object-card"
        [class.sf__object-card-fold]="!expand"
      >
        <ng-template #cardTitleTpl>
          <div [class.point]="showExpand" (click)="changeExpand()">
            @if (showExpand) {
              <i nz-icon [nzType]="expand ? 'down' : 'up'" class="mr-xs text-xs"></i>
            }
            {{ title }}
            @if (ui.optional || oh) {
              <span class="sf__optional">
                {{ ui.optional }}
                @if (oh) {
                  <i
                    s
                    nz-tooltip
                    [nzTooltipTitle]="oh.text"
                    [nzTooltipPlacement]="oh.placement"
                    [nzTooltipTrigger]="oh.trigger"
                    [nzTooltipColor]="oh.bgColor"
                    [nzTooltipOverlayClassName]="oh.overlayClassName"
                    [nzTooltipOverlayStyle]="oh.overlayStyle"
                    [nzTooltipMouseEnterDelay]="oh.mouseEnterDelay"
                    [nzTooltipMouseLeaveDelay]="oh.mouseLeaveDelay"
                    nz-icon
                    [nzType]="oh.icon!"
                  ></i>
                }
              </span>
            }
          </div>
        </ng-template>
        <ng-template [ngTemplateOutlet]="default" [ngTemplateOutletContext]="{ $implicit: true }" />
      </nz-card>
    } @else {
      <ng-template [ngTemplateOutlet]="default" />
    }`,
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqZWN0LndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm0vc3JjL3dpZGdldHMvb2JqZWN0L29iamVjdC53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUlyRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFHM0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNyQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7Ozs7Ozs7QUFzRmxELE1BQU0sT0FBTyxZQUFhLFNBQVEsa0JBQWtCO0lBbkZwRDs7UUFxRkUsU0FBSSxHQUE2QixTQUFTLENBQUM7UUFDM0MsU0FBSSxHQUFnQixFQUFFLENBQUM7UUFFdkIsZUFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixXQUFNLEdBQUcsSUFBSSxDQUFDO0tBb0NmO0lBbENDLFFBQVE7UUFDTixNQUFNLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQztRQUNsQyxNQUFNLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLFNBQVMsQ0FBQztRQUM5QixJQUNFLElBQUksQ0FBQyxJQUFJLEtBQUssTUFBTTtZQUNwQixDQUFDLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsTUFBTSxZQUFZLGFBQWEsQ0FBQyxJQUFJLFNBQVMsS0FBSyxJQUFJLENBQUMsRUFDakcsQ0FBQztZQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFlLENBQUM7UUFDM0MsQ0FBQztRQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBb0IsQ0FBQztRQUNqQyxNQUFNLElBQUksR0FBZ0IsRUFBRSxDQUFDO1FBQzdCLEtBQUssTUFBTSxHQUFHLElBQUksWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQzVDLE1BQU0sUUFBUSxHQUFJLFlBQVksQ0FBQyxVQUE4QyxDQUFDLEdBQUcsQ0FBaUIsQ0FBQztZQUNuRyxNQUFNLElBQUksR0FBRztnQkFDWCxRQUFRO2dCQUNSLElBQUksRUFBRSxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtnQkFDcEMsY0FBYyxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMsY0FBYztnQkFDMUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxLQUFLLEtBQUs7YUFDbkMsQ0FBQztZQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEIsQ0FBQztRQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFFRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNyQixPQUFPO1FBQ1QsQ0FBQztRQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzNCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQzsrR0F6Q1UsWUFBWTttR0FBWixZQUFZLHdFQWpGYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUE2RU47OzRGQUlPLFlBQVk7a0JBbkZ4QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BNkVOO29CQUNKLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUN0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgdHlwZSB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbmltcG9ydCB7IEFycmF5UHJvcGVydHkgfSBmcm9tICcuLi8uLi9tb2RlbC9hcnJheS5wcm9wZXJ0eSc7XG5pbXBvcnQgeyBGb3JtUHJvcGVydHkgfSBmcm9tICcuLi8uLi9tb2RlbC9mb3JtLnByb3BlcnR5JztcbmltcG9ydCB0eXBlIHsgU0ZHcmlkU2NoZW1hIH0gZnJvbSAnLi4vLi4vc2NoZW1hL3VpJztcbmltcG9ydCB7IHRvQm9vbCB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IE9iamVjdExheW91dFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5pbXBvcnQgdHlwZSB7IFNGT2JqZWN0V2lkZ2V0UmVuZGVyVHlwZSB9IGZyb20gJy4vc2NoZW1hJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2Ytb2JqZWN0JyxcbiAgdGVtcGxhdGU6IGA8bmctdGVtcGxhdGUgI2RlZmF1bHQgbGV0LW5vVGl0bGU+XG4gICAgICBAaWYgKCFub1RpdGxlICYmIHRpdGxlKSB7XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzZl9fdGl0bGVcIj57eyB0aXRsZSB9fTwvZGl2PlxuICAgICAgfVxuICAgICAgQGlmIChncmlkKSB7XG4gICAgICAgIDxkaXYgbnotcm93IFtuekd1dHRlcl09XCJncmlkLmd1dHRlclwiPlxuICAgICAgICAgIEBmb3IgKGkgb2YgbGlzdDsgdHJhY2sgJGluZGV4KSB7XG4gICAgICAgICAgICBAaWYgKGkucHJvcGVydHkudmlzaWJsZSAmJiBpLnNob3cpIHtcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIG56LWNvbFxuICAgICAgICAgICAgICAgIFtuelNwYW5dPVwiaS5ncmlkLnNwYW5cIlxuICAgICAgICAgICAgICAgIFtuek9mZnNldF09XCJpLmdyaWQub2Zmc2V0XCJcbiAgICAgICAgICAgICAgICBbbnpYc109XCJpLmdyaWQueHNcIlxuICAgICAgICAgICAgICAgIFtuelNtXT1cImkuZ3JpZC5zbVwiXG4gICAgICAgICAgICAgICAgW256TWRdPVwiaS5ncmlkLm1kXCJcbiAgICAgICAgICAgICAgICBbbnpMZ109XCJpLmdyaWQubGdcIlxuICAgICAgICAgICAgICAgIFtuelhsXT1cImkuZ3JpZC54bFwiXG4gICAgICAgICAgICAgICAgW256WFhsXT1cImkuZ3JpZC54eGxcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHNmLWl0ZW0gW2Zvcm1Qcm9wZXJ0eV09XCJpLnByb3BlcnR5XCIgW2ZpeGVkLWxhYmVsXT1cImkuc3BhbkxhYmVsRml4ZWRcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgfSBAZWxzZSB7XG4gICAgICAgIEBmb3IgKGkgb2YgbGlzdDsgdHJhY2sgJGluZGV4KSB7XG4gICAgICAgICAgQGlmIChpLnByb3BlcnR5LnZpc2libGUgJiYgaS5zaG93KSB7XG4gICAgICAgICAgICA8c2YtaXRlbSBbZm9ybVByb3BlcnR5XT1cImkucHJvcGVydHlcIiBbZml4ZWQtbGFiZWxdPVwiaS5zcGFuTGFiZWxGaXhlZFwiIC8+XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICBAaWYgKHR5cGUgPT09ICdjYXJkJykge1xuICAgICAgPG56LWNhcmRcbiAgICAgICAgW256VGl0bGVdPVwiY2FyZFRpdGxlVHBsXCJcbiAgICAgICAgW256RXh0cmFdPVwidWkuY2FyZEV4dHJhXCJcbiAgICAgICAgW256U2l6ZV09XCJ1aS5jYXJkU2l6ZSB8fCAnc21hbGwnXCJcbiAgICAgICAgW256QWN0aW9uc109XCJ1aS5jYXJkQWN0aW9ucyB8fCBbXVwiXG4gICAgICAgIFtuekJvZHlTdHlsZV09XCJ1aS5jYXJkQm9keVN0eWxlIVwiXG4gICAgICAgIFtuekJvcmRlcmVkXT1cInVpLmNhcmRCb3JkZXJlZCB8fCB0cnVlXCJcbiAgICAgICAgW256Qm9yZGVybGVzc109XCJ1aS5jYXJkQm9yZGVybGVzcyB8fCBmYWxzZVwiXG4gICAgICAgIGNsYXNzPVwic2ZfX29iamVjdC1jYXJkXCJcbiAgICAgICAgW2NsYXNzLnNmX19vYmplY3QtY2FyZC1mb2xkXT1cIiFleHBhbmRcIlxuICAgICAgPlxuICAgICAgICA8bmctdGVtcGxhdGUgI2NhcmRUaXRsZVRwbD5cbiAgICAgICAgICA8ZGl2IFtjbGFzcy5wb2ludF09XCJzaG93RXhwYW5kXCIgKGNsaWNrKT1cImNoYW5nZUV4cGFuZCgpXCI+XG4gICAgICAgICAgICBAaWYgKHNob3dFeHBhbmQpIHtcbiAgICAgICAgICAgICAgPGkgbnotaWNvbiBbbnpUeXBlXT1cImV4cGFuZCA/ICdkb3duJyA6ICd1cCdcIiBjbGFzcz1cIm1yLXhzIHRleHQteHNcIj48L2k+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB7eyB0aXRsZSB9fVxuICAgICAgICAgICAgQGlmICh1aS5vcHRpb25hbCB8fCBvaCkge1xuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNmX19vcHRpb25hbFwiPlxuICAgICAgICAgICAgICAgIHt7IHVpLm9wdGlvbmFsIH19XG4gICAgICAgICAgICAgICAgQGlmIChvaCkge1xuICAgICAgICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgICAgICAgc1xuICAgICAgICAgICAgICAgICAgICBuei10b29sdGlwXG4gICAgICAgICAgICAgICAgICAgIFtuelRvb2x0aXBUaXRsZV09XCJvaC50ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgW256VG9vbHRpcFBsYWNlbWVudF09XCJvaC5wbGFjZW1lbnRcIlxuICAgICAgICAgICAgICAgICAgICBbbnpUb29sdGlwVHJpZ2dlcl09XCJvaC50cmlnZ2VyXCJcbiAgICAgICAgICAgICAgICAgICAgW256VG9vbHRpcENvbG9yXT1cIm9oLmJnQ29sb3JcIlxuICAgICAgICAgICAgICAgICAgICBbbnpUb29sdGlwT3ZlcmxheUNsYXNzTmFtZV09XCJvaC5vdmVybGF5Q2xhc3NOYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgW256VG9vbHRpcE92ZXJsYXlTdHlsZV09XCJvaC5vdmVybGF5U3R5bGVcIlxuICAgICAgICAgICAgICAgICAgICBbbnpUb29sdGlwTW91c2VFbnRlckRlbGF5XT1cIm9oLm1vdXNlRW50ZXJEZWxheVwiXG4gICAgICAgICAgICAgICAgICAgIFtuelRvb2x0aXBNb3VzZUxlYXZlRGVsYXldPVwib2gubW91c2VMZWF2ZURlbGF5XCJcbiAgICAgICAgICAgICAgICAgICAgbnotaWNvblxuICAgICAgICAgICAgICAgICAgICBbbnpUeXBlXT1cIm9oLmljb24hXCJcbiAgICAgICAgICAgICAgICAgID48L2k+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJkZWZhdWx0XCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiB0cnVlIH1cIiAvPlxuICAgICAgPC9uei1jYXJkPlxuICAgIH0gQGVsc2Uge1xuICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImRlZmF1bHRcIiAvPlxuICAgIH1gLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBPYmplY3RXaWRnZXQgZXh0ZW5kcyBPYmplY3RMYXlvdXRXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xuICBncmlkOiBOelNhZmVBbnk7XG4gIHR5cGU6IFNGT2JqZWN0V2lkZ2V0UmVuZGVyVHlwZSA9ICdkZWZhdWx0JztcbiAgbGlzdDogTnpTYWZlQW55W10gPSBbXTtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIHNob3dFeHBhbmQgPSB0cnVlO1xuICBleHBhbmQgPSB0cnVlO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgZm9ybVByb3BlcnR5LCB1aSB9ID0gdGhpcztcbiAgICBjb25zdCB7IGdyaWQsIHNob3dUaXRsZSwgdHlwZSB9ID0gdWk7XG4gICAgdGhpcy5zaG93RXhwYW5kID0gdG9Cb29sKHVpLnNob3dFeHBhbmQsIHRydWUpO1xuICAgIHRoaXMuZXhwYW5kID0gdG9Cb29sKHVpLmV4cGFuZCwgdHJ1ZSk7XG4gICAgdGhpcy50eXBlID0gdHlwZSA/PyAnZGVmYXVsdCc7XG4gICAgaWYgKFxuICAgICAgdGhpcy50eXBlID09PSAnY2FyZCcgfHxcbiAgICAgICghZm9ybVByb3BlcnR5LmlzUm9vdCgpICYmICEoZm9ybVByb3BlcnR5LnBhcmVudCBpbnN0YW5jZW9mIEFycmF5UHJvcGVydHkpICYmIHNob3dUaXRsZSA9PT0gdHJ1ZSlcbiAgICApIHtcbiAgICAgIHRoaXMudGl0bGUgPSB0aGlzLnNjaGVtYS50aXRsZSBhcyBzdHJpbmc7XG4gICAgfVxuICAgIHRoaXMuZ3JpZCA9IGdyaWQgYXMgU0ZHcmlkU2NoZW1hO1xuICAgIGNvbnN0IGxpc3Q6IE56U2FmZUFueVtdID0gW107XG4gICAgZm9yIChjb25zdCBrZXkgb2YgZm9ybVByb3BlcnR5LnByb3BlcnRpZXNJZCkge1xuICAgICAgY29uc3QgcHJvcGVydHkgPSAoZm9ybVByb3BlcnR5LnByb3BlcnRpZXMgYXMgeyBba2V5OiBzdHJpbmddOiBGb3JtUHJvcGVydHkgfSlba2V5XSBhcyBGb3JtUHJvcGVydHk7XG4gICAgICBjb25zdCBpdGVtID0ge1xuICAgICAgICBwcm9wZXJ0eSxcbiAgICAgICAgZ3JpZDogcHJvcGVydHkudWkuZ3JpZCB8fCBncmlkIHx8IHt9LFxuICAgICAgICBzcGFuTGFiZWxGaXhlZDogcHJvcGVydHkudWkuc3BhbkxhYmVsRml4ZWQsXG4gICAgICAgIHNob3c6IHByb3BlcnR5LnVpLmhpZGRlbiA9PT0gZmFsc2VcbiAgICAgIH07XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICAgIHRoaXMubGlzdCA9IGxpc3Q7XG4gIH1cblxuICBjaGFuZ2VFeHBhbmQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnNob3dFeHBhbmQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5leHBhbmQgPSAhdGhpcy5leHBhbmQ7XG4gICAgdGhpcy5kZXRlY3RDaGFuZ2VzKHRydWUpO1xuICB9XG59XG4iXX0=