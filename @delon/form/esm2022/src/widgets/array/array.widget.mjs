import { Component, ViewEncapsulation } from '@angular/core';
import { ArrayLayoutWidget } from '../../widget';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/button";
import * as i3 from "ng-zorro-antd/core/transition-patch";
import * as i4 from "ng-zorro-antd/core/wave";
import * as i5 from "ng-zorro-antd/card";
import * as i6 from "ng-zorro-antd/grid";
import * as i7 from "ng-zorro-antd/form";
import * as i8 from "ng-zorro-antd/icon";
import * as i9 from "ng-zorro-antd/tooltip";
import * as i10 from "../../sf-item.component";
export class ArrayWidget extends ArrayLayoutWidget {
    constructor() {
        super(...arguments);
        this.arraySpan = 8;
    }
    get addDisabled() {
        return (this.disabled ||
            (this.schema.maxItems != null && this.formProperty.properties.length >= this.schema.maxItems));
    }
    get showRemove() {
        if (this.disabled || !this.removeTitle)
            return false;
        if (this.schema.minItems != null &&
            this.formProperty.properties.length <= this.schema.minItems)
            return false;
        return true;
    }
    ngOnInit() {
        const { grid, addTitle, addType, removable, removeTitle } = this.ui;
        if (grid && grid.arraySpan) {
            this.arraySpan = grid.arraySpan;
        }
        this.addTitle = this.dom.bypassSecurityTrustHtml(addTitle || this.l.addText);
        this.addType = addType || 'dashed';
        this.removeTitle = removable === false ? null : removeTitle || this.l.removeText;
    }
    reValid() {
        this.formProperty.updateValueAndValidity({ onlySelf: false, emitValueEvent: false, emitValidator: true });
    }
    addItem() {
        const property = this.formProperty.add({});
        this.reValid();
        this.ui.add?.(property);
    }
    removeItem(index) {
        this.formProperty.remove(index);
        this.reValid();
        this.ui.remove?.(index);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: ArrayWidget, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.9", type: ArrayWidget, selector: "sf-array", host: { properties: { "class.sf__array": "true" } }, usesInheritance: true, ngImport: i0, template: `<nz-form-item [class.ant-form-item-with-help]="showError">
    @if (schema.title) {
      <div nz-col [nzSpan]="ui.spanLabel!" class="ant-form-item-label">
        <label [class.ant-form-item-required]="ui.required">
          {{ schema.title }}
          <span class="sf__optional">
            {{ ui.optional }}
            @if (oh) {
              <i
                nz-tooltip
                [nzTooltipTitle]="oh.text"
                [nzTooltipPlacement]="oh.placement"
                [nzTooltipTrigger]="oh.trigger"
                [nzTooltipOverlayClassName]="oh.overlayClassName"
                [nzTooltipOverlayStyle]="oh.overlayStyle"
                [nzTooltipMouseEnterDelay]="oh.mouseEnterDelay"
                [nzTooltipMouseLeaveDelay]="oh.mouseLeaveDelay"
                nz-icon
                [nzType]="oh.icon!"
              ></i>
            }
          </span>
        </label>
        <div class="sf__array-add">
          <button
            type="button"
            nz-button
            [nzType]="addType"
            [disabled]="addDisabled"
            (click)="addItem()"
            [innerHTML]="addTitle"
          ></button>
        </div>
      </div>
    }
    <div nz-col class="ant-form-item-control-wrapper" [nzSpan]="ui.spanControl!" [nzOffset]="ui.offsetControl!">
      <div class="ant-form-item-control" [class.has-error]="showError">
        <div nz-row class="sf__array-container">
          <ng-container *ngFor="let i of $any(formProperty).properties; let $index = index">
            @if (i.visible && !i.ui.hidden) {
              <div nz-col [nzSpan]="arraySpan" [attr.data-index]="$index" class="sf__array-item">
                <nz-card>
                  <sf-item [formProperty]="i" />
                  @if (showRemove) {
                    <span class="sf__array-remove" (click)="removeItem($index)" [attr.title]="removeTitle">
                      <i nz-icon nzType="delete"></i>
                    </span>
                  }
                </nz-card>
              </div>
            }
          </ng-container>
        </div>
        @if (!ui.onlyVisual && showError) {
          <div class="ant-form-explain">{{ error }}</div>
        }
        @if (schema.description) {
          <div [innerHTML]="ui._description" class="ant-form-extra"></div>
        }
      </div>
    </div>
  </nz-form-item>`, isInline: true, dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i2.NzButtonComponent, selector: "button[nz-button], a[nz-button]", inputs: ["nzBlock", "nzGhost", "nzSearch", "nzLoading", "nzDanger", "disabled", "tabIndex", "nzType", "nzShape", "nzSize"], exportAs: ["nzButton"] }, { kind: "directive", type: i3.ɵNzTransitionPatchDirective, selector: "[nz-button], nz-button-group, [nz-icon], [nz-menu-item], [nz-submenu], nz-select-top-control, nz-select-placeholder, nz-input-group", inputs: ["hidden"] }, { kind: "directive", type: i4.NzWaveDirective, selector: "[nz-wave],button[nz-button]:not([nzType=\"link\"]):not([nzType=\"text\"])", inputs: ["nzWaveExtraNode"], exportAs: ["nzWave"] }, { kind: "component", type: i5.NzCardComponent, selector: "nz-card", inputs: ["nzBordered", "nzBorderless", "nzLoading", "nzHoverable", "nzBodyStyle", "nzCover", "nzActions", "nzType", "nzSize", "nzTitle", "nzExtra"], exportAs: ["nzCard"] }, { kind: "directive", type: i6.NzColDirective, selector: "[nz-col],nz-col,nz-form-control,nz-form-label", inputs: ["nzFlex", "nzSpan", "nzOrder", "nzOffset", "nzPush", "nzPull", "nzXs", "nzSm", "nzMd", "nzLg", "nzXl", "nzXXl"], exportAs: ["nzCol"] }, { kind: "directive", type: i6.NzRowDirective, selector: "[nz-row],nz-row,nz-form-item", inputs: ["nzAlign", "nzJustify", "nzGutter"], exportAs: ["nzRow"] }, { kind: "component", type: i7.NzFormItemComponent, selector: "nz-form-item", exportAs: ["nzFormItem"] }, { kind: "directive", type: i8.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "directive", type: i9.NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "cdkConnectedOverlayPush", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }, { kind: "component", type: i10.SFItemComponent, selector: "sf-item", inputs: ["formProperty", "footer"], exportAs: ["sfItem"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: ArrayWidget, decorators: [{
            type: Component,
            args: [{
                    selector: 'sf-array',
                    template: `<nz-form-item [class.ant-form-item-with-help]="showError">
    @if (schema.title) {
      <div nz-col [nzSpan]="ui.spanLabel!" class="ant-form-item-label">
        <label [class.ant-form-item-required]="ui.required">
          {{ schema.title }}
          <span class="sf__optional">
            {{ ui.optional }}
            @if (oh) {
              <i
                nz-tooltip
                [nzTooltipTitle]="oh.text"
                [nzTooltipPlacement]="oh.placement"
                [nzTooltipTrigger]="oh.trigger"
                [nzTooltipOverlayClassName]="oh.overlayClassName"
                [nzTooltipOverlayStyle]="oh.overlayStyle"
                [nzTooltipMouseEnterDelay]="oh.mouseEnterDelay"
                [nzTooltipMouseLeaveDelay]="oh.mouseLeaveDelay"
                nz-icon
                [nzType]="oh.icon!"
              ></i>
            }
          </span>
        </label>
        <div class="sf__array-add">
          <button
            type="button"
            nz-button
            [nzType]="addType"
            [disabled]="addDisabled"
            (click)="addItem()"
            [innerHTML]="addTitle"
          ></button>
        </div>
      </div>
    }
    <div nz-col class="ant-form-item-control-wrapper" [nzSpan]="ui.spanControl!" [nzOffset]="ui.offsetControl!">
      <div class="ant-form-item-control" [class.has-error]="showError">
        <div nz-row class="sf__array-container">
          <ng-container *ngFor="let i of $any(formProperty).properties; let $index = index">
            @if (i.visible && !i.ui.hidden) {
              <div nz-col [nzSpan]="arraySpan" [attr.data-index]="$index" class="sf__array-item">
                <nz-card>
                  <sf-item [formProperty]="i" />
                  @if (showRemove) {
                    <span class="sf__array-remove" (click)="removeItem($index)" [attr.title]="removeTitle">
                      <i nz-icon nzType="delete"></i>
                    </span>
                  }
                </nz-card>
              </div>
            }
          </ng-container>
        </div>
        @if (!ui.onlyVisual && showError) {
          <div class="ant-form-explain">{{ error }}</div>
        }
        @if (schema.description) {
          <div [innerHTML]="ui._description" class="ant-form-extra"></div>
        }
      </div>
    </div>
  </nz-form-item>`,
                    host: { '[class.sf__array]': 'true' },
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXkud2lkZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS9zcmMvd2lkZ2V0cy9hcnJheS9hcnJheS53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU1yRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7Ozs7Ozs7OztBQXNFakQsTUFBTSxPQUFPLFdBQVksU0FBUSxpQkFBaUI7SUFwRWxEOztRQXdFRSxjQUFTLEdBQUcsQ0FBQyxDQUFDO0tBNkNmO0lBM0NDLElBQUksV0FBVztRQUNiLE9BQU8sQ0FDTCxJQUFJLENBQUMsUUFBUTtZQUNiLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLElBQUksSUFBSSxJQUFLLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBNkIsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFTLENBQUMsQ0FDbkgsQ0FBQztJQUNKLENBQUM7SUFFRCxJQUFJLFVBQVU7UUFDWixJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVztZQUFFLE9BQU8sS0FBSyxDQUFDO1FBQ3JELElBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLElBQUksSUFBSTtZQUMzQixJQUFJLENBQUMsWUFBWSxDQUFDLFVBQTZCLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUztZQUVoRixPQUFPLEtBQUssQ0FBQztRQUNmLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELFFBQVE7UUFDTixNQUFNLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDcEUsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDakM7UUFFRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLElBQUksUUFBUSxDQUFDO1FBQ25DLElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUM7SUFDbkYsQ0FBQztJQUVPLE9BQU87UUFDYixJQUFJLENBQUMsWUFBWSxDQUFDLHNCQUFzQixDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzVHLENBQUM7SUFFRCxPQUFPO1FBQ0wsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsVUFBVSxDQUFDLEtBQWE7UUFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDOzhHQWhEVSxXQUFXO2tHQUFYLFdBQVcsNEhBbEVaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQTZETTs7MkZBS0wsV0FBVztrQkFwRXZCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkE2RE07b0JBQ2hCLElBQUksRUFBRSxFQUFFLG1CQUFtQixFQUFFLE1BQU0sRUFBRTtvQkFDckMsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5pbXBvcnQgeyBOekJ1dHRvblR5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2J1dHRvbic7XG5cbmltcG9ydCB0eXBlIHsgRm9ybVByb3BlcnR5IH0gZnJvbSAnLi4vLi4vbW9kZWwvZm9ybS5wcm9wZXJ0eSc7XG5pbXBvcnQgeyBBcnJheUxheW91dFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLWFycmF5JyxcbiAgdGVtcGxhdGU6IGA8bnotZm9ybS1pdGVtIFtjbGFzcy5hbnQtZm9ybS1pdGVtLXdpdGgtaGVscF09XCJzaG93RXJyb3JcIj5cbiAgICBAaWYgKHNjaGVtYS50aXRsZSkge1xuICAgICAgPGRpdiBuei1jb2wgW256U3Bhbl09XCJ1aS5zcGFuTGFiZWwhXCIgY2xhc3M9XCJhbnQtZm9ybS1pdGVtLWxhYmVsXCI+XG4gICAgICAgIDxsYWJlbCBbY2xhc3MuYW50LWZvcm0taXRlbS1yZXF1aXJlZF09XCJ1aS5yZXF1aXJlZFwiPlxuICAgICAgICAgIHt7IHNjaGVtYS50aXRsZSB9fVxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2ZfX29wdGlvbmFsXCI+XG4gICAgICAgICAgICB7eyB1aS5vcHRpb25hbCB9fVxuICAgICAgICAgICAgQGlmIChvaCkge1xuICAgICAgICAgICAgICA8aVxuICAgICAgICAgICAgICAgIG56LXRvb2x0aXBcbiAgICAgICAgICAgICAgICBbbnpUb29sdGlwVGl0bGVdPVwib2gudGV4dFwiXG4gICAgICAgICAgICAgICAgW256VG9vbHRpcFBsYWNlbWVudF09XCJvaC5wbGFjZW1lbnRcIlxuICAgICAgICAgICAgICAgIFtuelRvb2x0aXBUcmlnZ2VyXT1cIm9oLnRyaWdnZXJcIlxuICAgICAgICAgICAgICAgIFtuelRvb2x0aXBPdmVybGF5Q2xhc3NOYW1lXT1cIm9oLm92ZXJsYXlDbGFzc05hbWVcIlxuICAgICAgICAgICAgICAgIFtuelRvb2x0aXBPdmVybGF5U3R5bGVdPVwib2gub3ZlcmxheVN0eWxlXCJcbiAgICAgICAgICAgICAgICBbbnpUb29sdGlwTW91c2VFbnRlckRlbGF5XT1cIm9oLm1vdXNlRW50ZXJEZWxheVwiXG4gICAgICAgICAgICAgICAgW256VG9vbHRpcE1vdXNlTGVhdmVEZWxheV09XCJvaC5tb3VzZUxlYXZlRGVsYXlcIlxuICAgICAgICAgICAgICAgIG56LWljb25cbiAgICAgICAgICAgICAgICBbbnpUeXBlXT1cIm9oLmljb24hXCJcbiAgICAgICAgICAgICAgPjwvaT5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzZl9fYXJyYXktYWRkXCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBuei1idXR0b25cbiAgICAgICAgICAgIFtuelR5cGVdPVwiYWRkVHlwZVwiXG4gICAgICAgICAgICBbZGlzYWJsZWRdPVwiYWRkRGlzYWJsZWRcIlxuICAgICAgICAgICAgKGNsaWNrKT1cImFkZEl0ZW0oKVwiXG4gICAgICAgICAgICBbaW5uZXJIVE1MXT1cImFkZFRpdGxlXCJcbiAgICAgICAgICA+PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgfVxuICAgIDxkaXYgbnotY29sIGNsYXNzPVwiYW50LWZvcm0taXRlbS1jb250cm9sLXdyYXBwZXJcIiBbbnpTcGFuXT1cInVpLnNwYW5Db250cm9sIVwiIFtuek9mZnNldF09XCJ1aS5vZmZzZXRDb250cm9sIVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImFudC1mb3JtLWl0ZW0tY29udHJvbFwiIFtjbGFzcy5oYXMtZXJyb3JdPVwic2hvd0Vycm9yXCI+XG4gICAgICAgIDxkaXYgbnotcm93IGNsYXNzPVwic2ZfX2FycmF5LWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGkgb2YgJGFueShmb3JtUHJvcGVydHkpLnByb3BlcnRpZXM7IGxldCAkaW5kZXggPSBpbmRleFwiPlxuICAgICAgICAgICAgQGlmIChpLnZpc2libGUgJiYgIWkudWkuaGlkZGVuKSB7XG4gICAgICAgICAgICAgIDxkaXYgbnotY29sIFtuelNwYW5dPVwiYXJyYXlTcGFuXCIgW2F0dHIuZGF0YS1pbmRleF09XCIkaW5kZXhcIiBjbGFzcz1cInNmX19hcnJheS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgPG56LWNhcmQ+XG4gICAgICAgICAgICAgICAgICA8c2YtaXRlbSBbZm9ybVByb3BlcnR5XT1cImlcIiAvPlxuICAgICAgICAgICAgICAgICAgQGlmIChzaG93UmVtb3ZlKSB7XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2ZfX2FycmF5LXJlbW92ZVwiIChjbGljayk9XCJyZW1vdmVJdGVtKCRpbmRleClcIiBbYXR0ci50aXRsZV09XCJyZW1vdmVUaXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpIG56LWljb24gbnpUeXBlPVwiZGVsZXRlXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9uei1jYXJkPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIEBpZiAoIXVpLm9ubHlWaXN1YWwgJiYgc2hvd0Vycm9yKSB7XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImFudC1mb3JtLWV4cGxhaW5cIj57eyBlcnJvciB9fTwvZGl2PlxuICAgICAgICB9XG4gICAgICAgIEBpZiAoc2NoZW1hLmRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgPGRpdiBbaW5uZXJIVE1MXT1cInVpLl9kZXNjcmlwdGlvblwiIGNsYXNzPVwiYW50LWZvcm0tZXh0cmFcIj48L2Rpdj5cbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvbnotZm9ybS1pdGVtPmAsXG4gIGhvc3Q6IHsgJ1tjbGFzcy5zZl9fYXJyYXldJzogJ3RydWUnIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEFycmF5V2lkZ2V0IGV4dGVuZHMgQXJyYXlMYXlvdXRXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xuICBhZGRUaXRsZSE6IFNhZmVIdG1sO1xuICBhZGRUeXBlITogTnpCdXR0b25UeXBlO1xuICByZW1vdmVUaXRsZT86IHN0cmluZyB8IG51bGw7XG4gIGFycmF5U3BhbiA9IDg7XG5cbiAgZ2V0IGFkZERpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmRpc2FibGVkIHx8XG4gICAgICAodGhpcy5zY2hlbWEubWF4SXRlbXMgIT0gbnVsbCAmJiAodGhpcy5mb3JtUHJvcGVydHkucHJvcGVydGllcyBhcyBGb3JtUHJvcGVydHlbXSkubGVuZ3RoID49IHRoaXMuc2NoZW1hLm1heEl0ZW1zISlcbiAgICApO1xuICB9XG5cbiAgZ2V0IHNob3dSZW1vdmUoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgIXRoaXMucmVtb3ZlVGl0bGUpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoXG4gICAgICB0aGlzLnNjaGVtYS5taW5JdGVtcyAhPSBudWxsICYmXG4gICAgICAodGhpcy5mb3JtUHJvcGVydHkucHJvcGVydGllcyBhcyBGb3JtUHJvcGVydHlbXSkubGVuZ3RoIDw9IHRoaXMuc2NoZW1hLm1pbkl0ZW1zIVxuICAgIClcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgZ3JpZCwgYWRkVGl0bGUsIGFkZFR5cGUsIHJlbW92YWJsZSwgcmVtb3ZlVGl0bGUgfSA9IHRoaXMudWk7XG4gICAgaWYgKGdyaWQgJiYgZ3JpZC5hcnJheVNwYW4pIHtcbiAgICAgIHRoaXMuYXJyYXlTcGFuID0gZ3JpZC5hcnJheVNwYW47XG4gICAgfVxuXG4gICAgdGhpcy5hZGRUaXRsZSA9IHRoaXMuZG9tLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKGFkZFRpdGxlIHx8IHRoaXMubC5hZGRUZXh0KTtcbiAgICB0aGlzLmFkZFR5cGUgPSBhZGRUeXBlIHx8ICdkYXNoZWQnO1xuICAgIHRoaXMucmVtb3ZlVGl0bGUgPSByZW1vdmFibGUgPT09IGZhbHNlID8gbnVsbCA6IHJlbW92ZVRpdGxlIHx8IHRoaXMubC5yZW1vdmVUZXh0O1xuICB9XG5cbiAgcHJpdmF0ZSByZVZhbGlkKCk6IHZvaWQge1xuICAgIHRoaXMuZm9ybVByb3BlcnR5LnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoeyBvbmx5U2VsZjogZmFsc2UsIGVtaXRWYWx1ZUV2ZW50OiBmYWxzZSwgZW1pdFZhbGlkYXRvcjogdHJ1ZSB9KTtcbiAgfVxuXG4gIGFkZEl0ZW0oKTogdm9pZCB7XG4gICAgY29uc3QgcHJvcGVydHkgPSB0aGlzLmZvcm1Qcm9wZXJ0eS5hZGQoe30pO1xuICAgIHRoaXMucmVWYWxpZCgpO1xuICAgIHRoaXMudWkuYWRkPy4ocHJvcGVydHkpO1xuICB9XG5cbiAgcmVtb3ZlSXRlbShpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5mb3JtUHJvcGVydHkucmVtb3ZlKGluZGV4KTtcbiAgICB0aGlzLnJlVmFsaWQoKTtcbiAgICB0aGlzLnVpLnJlbW92ZT8uKGluZGV4KTtcbiAgfVxufVxuIl19