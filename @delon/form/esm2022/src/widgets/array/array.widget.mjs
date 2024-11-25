import { Component, ViewEncapsulation } from '@angular/core';
import { ArrayLayoutWidget } from '../../widget';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/button";
import * as i2 from "ng-zorro-antd/core/transition-patch";
import * as i3 from "ng-zorro-antd/core/wave";
import * as i4 from "ng-zorro-antd/card";
import * as i5 from "ng-zorro-antd/grid";
import * as i6 from "ng-zorro-antd/form";
import * as i7 from "ng-zorro-antd/icon";
import * as i8 from "ng-zorro-antd/tooltip";
import * as i9 from "../../sf-item.component";
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
    reValid(options) {
        this.formProperty.updateValueAndValidity({
            onlySelf: false,
            emitValueEvent: false,
            emitValidator: true,
            ...options
        });
    }
    addItem() {
        const property = this.formProperty.add({});
        this.reValid();
        this.ui.add?.(property);
    }
    removeItem(index) {
        const updatePath = this.formProperty.properties[index].path;
        this.formProperty.remove(index);
        this.reValid({ updatePath, emitValueEvent: true });
        this.ui.remove?.(index);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.11", ngImport: i0, type: ArrayWidget, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.11", type: ArrayWidget, selector: "sf-array", host: { properties: { "class.sf__array": "true" } }, usesInheritance: true, ngImport: i0, template: `<nz-form-item [class.ant-form-item-with-help]="showError">
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
          @for (i of $any(formProperty).properties; track $index) {
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
          }
        </div>
        @if (!ui.onlyVisual && showError) {
          <div class="ant-form-explain">{{ error }}</div>
        }
        @if (schema.description) {
          <div [innerHTML]="ui._description" class="ant-form-extra"></div>
        }
      </div>
    </div>
  </nz-form-item>`, isInline: true, dependencies: [{ kind: "component", type: i1.NzButtonComponent, selector: "button[nz-button], a[nz-button]", inputs: ["nzBlock", "nzGhost", "nzSearch", "nzLoading", "nzDanger", "disabled", "tabIndex", "nzType", "nzShape", "nzSize"], exportAs: ["nzButton"] }, { kind: "directive", type: i2.ɵNzTransitionPatchDirective, selector: "[nz-button], nz-button-group, [nz-icon], [nz-menu-item], [nz-submenu], nz-select-top-control, nz-select-placeholder, nz-input-group", inputs: ["hidden"] }, { kind: "directive", type: i3.NzWaveDirective, selector: "[nz-wave],button[nz-button]:not([nzType=\"link\"]):not([nzType=\"text\"])", inputs: ["nzWaveExtraNode"], exportAs: ["nzWave"] }, { kind: "component", type: i4.NzCardComponent, selector: "nz-card", inputs: ["nzBordered", "nzBorderless", "nzLoading", "nzHoverable", "nzBodyStyle", "nzCover", "nzActions", "nzType", "nzSize", "nzTitle", "nzExtra"], exportAs: ["nzCard"] }, { kind: "directive", type: i5.NzColDirective, selector: "[nz-col],nz-col,nz-form-control,nz-form-label", inputs: ["nzFlex", "nzSpan", "nzOrder", "nzOffset", "nzPush", "nzPull", "nzXs", "nzSm", "nzMd", "nzLg", "nzXl", "nzXXl"], exportAs: ["nzCol"] }, { kind: "directive", type: i5.NzRowDirective, selector: "[nz-row],nz-row,nz-form-item", inputs: ["nzAlign", "nzJustify", "nzGutter"], exportAs: ["nzRow"] }, { kind: "component", type: i6.NzFormItemComponent, selector: "nz-form-item", exportAs: ["nzFormItem"] }, { kind: "directive", type: i7.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "directive", type: i8.NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "cdkConnectedOverlayPush", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }, { kind: "component", type: i9.SFItemComponent, selector: "sf-item", inputs: ["formProperty", "footer"], exportAs: ["sfItem"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.11", ngImport: i0, type: ArrayWidget, decorators: [{
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
          @for (i of $any(formProperty).properties; track $index) {
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
          }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXkud2lkZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS9zcmMvd2lkZ2V0cy9hcnJheS9hcnJheS53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU9yRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7Ozs7Ozs7O0FBc0VqRCxNQUFNLE9BQU8sV0FBWSxTQUFRLGlCQUFpQjtJQXBFbEQ7O1FBd0VFLGNBQVMsR0FBRyxDQUFDLENBQUM7S0FtRGY7SUFqREMsSUFBSSxXQUFXO1FBQ2IsT0FBTyxDQUNMLElBQUksQ0FBQyxRQUFRO1lBQ2IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBSSxJQUFJLElBQUssSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUE2QixDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVMsQ0FBQyxDQUNuSCxDQUFDO0lBQ0osQ0FBQztJQUVELElBQUksVUFBVTtRQUNaLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXO1lBQUUsT0FBTyxLQUFLLENBQUM7UUFDckQsSUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBSSxJQUFJO1lBQzNCLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBNkIsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFTO1lBRWhGLE9BQU8sS0FBSyxDQUFDO1FBQ2YsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsUUFBUTtRQUNOLE1BQU0sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNwRSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ2xDLENBQUM7UUFFRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLElBQUksUUFBUSxDQUFDO1FBQ25DLElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUM7SUFDbkYsQ0FBQztJQUVPLE9BQU8sQ0FBQyxPQUFrQztRQUNoRCxJQUFJLENBQUMsWUFBWSxDQUFDLHNCQUFzQixDQUFDO1lBQ3ZDLFFBQVEsRUFBRSxLQUFLO1lBQ2YsY0FBYyxFQUFFLEtBQUs7WUFDckIsYUFBYSxFQUFFLElBQUk7WUFDbkIsR0FBRyxPQUFPO1NBQ1gsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELE9BQU87UUFDTCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCxVQUFVLENBQUMsS0FBYTtRQUN0QixNQUFNLFVBQVUsR0FBSSxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQTZCLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ2hGLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDOytHQXREVSxXQUFXO21HQUFYLFdBQVcsNEhBbEVaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQTZETTs7NEZBS0wsV0FBVztrQkFwRXZCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkE2RE07b0JBQ2hCLElBQUksRUFBRSxFQUFFLG1CQUFtQixFQUFFLE1BQU0sRUFBRTtvQkFDckMsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5pbXBvcnQgeyBOekJ1dHRvblR5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2J1dHRvbic7XG5cbmltcG9ydCB7IFNGVXBkYXRlVmFsdWVBbmRWYWxpZGl0eSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZSc7XG5pbXBvcnQgdHlwZSB7IEZvcm1Qcm9wZXJ0eSB9IGZyb20gJy4uLy4uL21vZGVsL2Zvcm0ucHJvcGVydHknO1xuaW1wb3J0IHsgQXJyYXlMYXlvdXRXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1hcnJheScsXG4gIHRlbXBsYXRlOiBgPG56LWZvcm0taXRlbSBbY2xhc3MuYW50LWZvcm0taXRlbS13aXRoLWhlbHBdPVwic2hvd0Vycm9yXCI+XG4gICAgQGlmIChzY2hlbWEudGl0bGUpIHtcbiAgICAgIDxkaXYgbnotY29sIFtuelNwYW5dPVwidWkuc3BhbkxhYmVsIVwiIGNsYXNzPVwiYW50LWZvcm0taXRlbS1sYWJlbFwiPlxuICAgICAgICA8bGFiZWwgW2NsYXNzLmFudC1mb3JtLWl0ZW0tcmVxdWlyZWRdPVwidWkucmVxdWlyZWRcIj5cbiAgICAgICAgICB7eyBzY2hlbWEudGl0bGUgfX1cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInNmX19vcHRpb25hbFwiPlxuICAgICAgICAgICAge3sgdWkub3B0aW9uYWwgfX1cbiAgICAgICAgICAgIEBpZiAob2gpIHtcbiAgICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgICBuei10b29sdGlwXG4gICAgICAgICAgICAgICAgW256VG9vbHRpcFRpdGxlXT1cIm9oLnRleHRcIlxuICAgICAgICAgICAgICAgIFtuelRvb2x0aXBQbGFjZW1lbnRdPVwib2gucGxhY2VtZW50XCJcbiAgICAgICAgICAgICAgICBbbnpUb29sdGlwVHJpZ2dlcl09XCJvaC50cmlnZ2VyXCJcbiAgICAgICAgICAgICAgICBbbnpUb29sdGlwT3ZlcmxheUNsYXNzTmFtZV09XCJvaC5vdmVybGF5Q2xhc3NOYW1lXCJcbiAgICAgICAgICAgICAgICBbbnpUb29sdGlwT3ZlcmxheVN0eWxlXT1cIm9oLm92ZXJsYXlTdHlsZVwiXG4gICAgICAgICAgICAgICAgW256VG9vbHRpcE1vdXNlRW50ZXJEZWxheV09XCJvaC5tb3VzZUVudGVyRGVsYXlcIlxuICAgICAgICAgICAgICAgIFtuelRvb2x0aXBNb3VzZUxlYXZlRGVsYXldPVwib2gubW91c2VMZWF2ZURlbGF5XCJcbiAgICAgICAgICAgICAgICBuei1pY29uXG4gICAgICAgICAgICAgICAgW256VHlwZV09XCJvaC5pY29uIVwiXG4gICAgICAgICAgICAgID48L2k+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2ZfX2FycmF5LWFkZFwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgbnotYnV0dG9uXG4gICAgICAgICAgICBbbnpUeXBlXT1cImFkZFR5cGVcIlxuICAgICAgICAgICAgW2Rpc2FibGVkXT1cImFkZERpc2FibGVkXCJcbiAgICAgICAgICAgIChjbGljayk9XCJhZGRJdGVtKClcIlxuICAgICAgICAgICAgW2lubmVySFRNTF09XCJhZGRUaXRsZVwiXG4gICAgICAgICAgPjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIH1cbiAgICA8ZGl2IG56LWNvbCBjbGFzcz1cImFudC1mb3JtLWl0ZW0tY29udHJvbC13cmFwcGVyXCIgW256U3Bhbl09XCJ1aS5zcGFuQ29udHJvbCFcIiBbbnpPZmZzZXRdPVwidWkub2Zmc2V0Q29udHJvbCFcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJhbnQtZm9ybS1pdGVtLWNvbnRyb2xcIiBbY2xhc3MuaGFzLWVycm9yXT1cInNob3dFcnJvclwiPlxuICAgICAgICA8ZGl2IG56LXJvdyBjbGFzcz1cInNmX19hcnJheS1jb250YWluZXJcIj5cbiAgICAgICAgICBAZm9yIChpIG9mICRhbnkoZm9ybVByb3BlcnR5KS5wcm9wZXJ0aWVzOyB0cmFjayAkaW5kZXgpIHtcbiAgICAgICAgICAgIEBpZiAoaS52aXNpYmxlICYmICFpLnVpLmhpZGRlbikge1xuICAgICAgICAgICAgICA8ZGl2IG56LWNvbCBbbnpTcGFuXT1cImFycmF5U3BhblwiIFthdHRyLmRhdGEtaW5kZXhdPVwiJGluZGV4XCIgY2xhc3M9XCJzZl9fYXJyYXktaXRlbVwiPlxuICAgICAgICAgICAgICAgIDxuei1jYXJkPlxuICAgICAgICAgICAgICAgICAgPHNmLWl0ZW0gW2Zvcm1Qcm9wZXJ0eV09XCJpXCIgLz5cbiAgICAgICAgICAgICAgICAgIEBpZiAoc2hvd1JlbW92ZSkge1xuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNmX19hcnJheS1yZW1vdmVcIiAoY2xpY2spPVwicmVtb3ZlSXRlbSgkaW5kZXgpXCIgW2F0dHIudGl0bGVdPVwicmVtb3ZlVGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aSBuei1pY29uIG56VHlwZT1cImRlbGV0ZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvbnotY2FyZD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgQGlmICghdWkub25seVZpc3VhbCAmJiBzaG93RXJyb3IpIHtcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LWZvcm0tZXhwbGFpblwiPnt7IGVycm9yIH19PC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAgQGlmIChzY2hlbWEuZGVzY3JpcHRpb24pIHtcbiAgICAgICAgICA8ZGl2IFtpbm5lckhUTUxdPVwidWkuX2Rlc2NyaXB0aW9uXCIgY2xhc3M9XCJhbnQtZm9ybS1leHRyYVwiPjwvZGl2PlxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9uei1mb3JtLWl0ZW0+YCxcbiAgaG9zdDogeyAnW2NsYXNzLnNmX19hcnJheV0nOiAndHJ1ZScgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgQXJyYXlXaWRnZXQgZXh0ZW5kcyBBcnJheUxheW91dFdpZGdldCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGFkZFRpdGxlITogU2FmZUh0bWw7XG4gIGFkZFR5cGUhOiBOekJ1dHRvblR5cGU7XG4gIHJlbW92ZVRpdGxlPzogc3RyaW5nIHwgbnVsbDtcbiAgYXJyYXlTcGFuID0gODtcblxuICBnZXQgYWRkRGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuZGlzYWJsZWQgfHxcbiAgICAgICh0aGlzLnNjaGVtYS5tYXhJdGVtcyAhPSBudWxsICYmICh0aGlzLmZvcm1Qcm9wZXJ0eS5wcm9wZXJ0aWVzIGFzIEZvcm1Qcm9wZXJ0eVtdKS5sZW5ndGggPj0gdGhpcy5zY2hlbWEubWF4SXRlbXMhKVxuICAgICk7XG4gIH1cblxuICBnZXQgc2hvd1JlbW92ZSgpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCAhdGhpcy5yZW1vdmVUaXRsZSkgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChcbiAgICAgIHRoaXMuc2NoZW1hLm1pbkl0ZW1zICE9IG51bGwgJiZcbiAgICAgICh0aGlzLmZvcm1Qcm9wZXJ0eS5wcm9wZXJ0aWVzIGFzIEZvcm1Qcm9wZXJ0eVtdKS5sZW5ndGggPD0gdGhpcy5zY2hlbWEubWluSXRlbXMhXG4gICAgKVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3QgeyBncmlkLCBhZGRUaXRsZSwgYWRkVHlwZSwgcmVtb3ZhYmxlLCByZW1vdmVUaXRsZSB9ID0gdGhpcy51aTtcbiAgICBpZiAoZ3JpZCAmJiBncmlkLmFycmF5U3Bhbikge1xuICAgICAgdGhpcy5hcnJheVNwYW4gPSBncmlkLmFycmF5U3BhbjtcbiAgICB9XG5cbiAgICB0aGlzLmFkZFRpdGxlID0gdGhpcy5kb20uYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoYWRkVGl0bGUgfHwgdGhpcy5sLmFkZFRleHQpO1xuICAgIHRoaXMuYWRkVHlwZSA9IGFkZFR5cGUgfHwgJ2Rhc2hlZCc7XG4gICAgdGhpcy5yZW1vdmVUaXRsZSA9IHJlbW92YWJsZSA9PT0gZmFsc2UgPyBudWxsIDogcmVtb3ZlVGl0bGUgfHwgdGhpcy5sLnJlbW92ZVRleHQ7XG4gIH1cblxuICBwcml2YXRlIHJlVmFsaWQob3B0aW9ucz86IFNGVXBkYXRlVmFsdWVBbmRWYWxpZGl0eSk6IHZvaWQge1xuICAgIHRoaXMuZm9ybVByb3BlcnR5LnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoe1xuICAgICAgb25seVNlbGY6IGZhbHNlLFxuICAgICAgZW1pdFZhbHVlRXZlbnQ6IGZhbHNlLFxuICAgICAgZW1pdFZhbGlkYXRvcjogdHJ1ZSxcbiAgICAgIC4uLm9wdGlvbnNcbiAgICB9KTtcbiAgfVxuXG4gIGFkZEl0ZW0oKTogdm9pZCB7XG4gICAgY29uc3QgcHJvcGVydHkgPSB0aGlzLmZvcm1Qcm9wZXJ0eS5hZGQoe30pO1xuICAgIHRoaXMucmVWYWxpZCgpO1xuICAgIHRoaXMudWkuYWRkPy4ocHJvcGVydHkpO1xuICB9XG5cbiAgcmVtb3ZlSXRlbShpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgdXBkYXRlUGF0aCA9ICh0aGlzLmZvcm1Qcm9wZXJ0eS5wcm9wZXJ0aWVzIGFzIEZvcm1Qcm9wZXJ0eVtdKVtpbmRleF0ucGF0aDtcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5yZW1vdmUoaW5kZXgpO1xuICAgIHRoaXMucmVWYWxpZCh7IHVwZGF0ZVBhdGgsIGVtaXRWYWx1ZUV2ZW50OiB0cnVlIH0pO1xuICAgIHRoaXMudWkucmVtb3ZlPy4oaW5kZXgpO1xuICB9XG59XG4iXX0=