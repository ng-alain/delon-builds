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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: ArrayWidget, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.1.0", type: ArrayWidget, selector: "sf-array", host: { properties: { "class.sf__array": "true" } }, usesInheritance: true, ngImport: i0, template: `<nz-form-item [class.ant-form-item-with-help]="showError">
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: ArrayWidget, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXkud2lkZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS9zcmMvd2lkZ2V0cy9hcnJheS9hcnJheS53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU1yRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7Ozs7Ozs7OztBQXNFakQsTUFBTSxPQUFPLFdBQVksU0FBUSxpQkFBaUI7SUFwRWxEOztRQXdFRSxjQUFTLEdBQUcsQ0FBQyxDQUFDO0tBNkNmO0lBM0NDLElBQUksV0FBVztRQUNiLE9BQU8sQ0FDTCxJQUFJLENBQUMsUUFBUTtZQUNiLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLElBQUksSUFBSSxJQUFLLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBNkIsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFTLENBQUMsQ0FDbkgsQ0FBQztJQUNKLENBQUM7SUFFRCxJQUFJLFVBQVU7UUFDWixJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVztZQUFFLE9BQU8sS0FBSyxDQUFDO1FBQ3JELElBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLElBQUksSUFBSTtZQUMzQixJQUFJLENBQUMsWUFBWSxDQUFDLFVBQTZCLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUztZQUVoRixPQUFPLEtBQUssQ0FBQztRQUNmLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELFFBQVE7UUFDTixNQUFNLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDcEUsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNsQyxDQUFDO1FBRUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdFLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxJQUFJLFFBQVEsQ0FBQztRQUNuQyxJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO0lBQ25GLENBQUM7SUFFTyxPQUFPO1FBQ2IsSUFBSSxDQUFDLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUM1RyxDQUFDO0lBRUQsT0FBTztRQUNMLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELFVBQVUsQ0FBQyxLQUFhO1FBQ3RCLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQzs4R0FoRFUsV0FBVztrR0FBWCxXQUFXLDRIQWxFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkE2RE07OzJGQUtMLFdBQVc7a0JBcEV2QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUNwQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBNkRNO29CQUNoQixJQUFJLEVBQUUsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLEVBQUU7b0JBQ3JDLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUN0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuaW1wb3J0IHsgTnpCdXR0b25UeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9idXR0b24nO1xuXG5pbXBvcnQgdHlwZSB7IEZvcm1Qcm9wZXJ0eSB9IGZyb20gJy4uLy4uL21vZGVsL2Zvcm0ucHJvcGVydHknO1xuaW1wb3J0IHsgQXJyYXlMYXlvdXRXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1hcnJheScsXG4gIHRlbXBsYXRlOiBgPG56LWZvcm0taXRlbSBbY2xhc3MuYW50LWZvcm0taXRlbS13aXRoLWhlbHBdPVwic2hvd0Vycm9yXCI+XG4gICAgQGlmIChzY2hlbWEudGl0bGUpIHtcbiAgICAgIDxkaXYgbnotY29sIFtuelNwYW5dPVwidWkuc3BhbkxhYmVsIVwiIGNsYXNzPVwiYW50LWZvcm0taXRlbS1sYWJlbFwiPlxuICAgICAgICA8bGFiZWwgW2NsYXNzLmFudC1mb3JtLWl0ZW0tcmVxdWlyZWRdPVwidWkucmVxdWlyZWRcIj5cbiAgICAgICAgICB7eyBzY2hlbWEudGl0bGUgfX1cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInNmX19vcHRpb25hbFwiPlxuICAgICAgICAgICAge3sgdWkub3B0aW9uYWwgfX1cbiAgICAgICAgICAgIEBpZiAob2gpIHtcbiAgICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgICBuei10b29sdGlwXG4gICAgICAgICAgICAgICAgW256VG9vbHRpcFRpdGxlXT1cIm9oLnRleHRcIlxuICAgICAgICAgICAgICAgIFtuelRvb2x0aXBQbGFjZW1lbnRdPVwib2gucGxhY2VtZW50XCJcbiAgICAgICAgICAgICAgICBbbnpUb29sdGlwVHJpZ2dlcl09XCJvaC50cmlnZ2VyXCJcbiAgICAgICAgICAgICAgICBbbnpUb29sdGlwT3ZlcmxheUNsYXNzTmFtZV09XCJvaC5vdmVybGF5Q2xhc3NOYW1lXCJcbiAgICAgICAgICAgICAgICBbbnpUb29sdGlwT3ZlcmxheVN0eWxlXT1cIm9oLm92ZXJsYXlTdHlsZVwiXG4gICAgICAgICAgICAgICAgW256VG9vbHRpcE1vdXNlRW50ZXJEZWxheV09XCJvaC5tb3VzZUVudGVyRGVsYXlcIlxuICAgICAgICAgICAgICAgIFtuelRvb2x0aXBNb3VzZUxlYXZlRGVsYXldPVwib2gubW91c2VMZWF2ZURlbGF5XCJcbiAgICAgICAgICAgICAgICBuei1pY29uXG4gICAgICAgICAgICAgICAgW256VHlwZV09XCJvaC5pY29uIVwiXG4gICAgICAgICAgICAgID48L2k+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2ZfX2FycmF5LWFkZFwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgbnotYnV0dG9uXG4gICAgICAgICAgICBbbnpUeXBlXT1cImFkZFR5cGVcIlxuICAgICAgICAgICAgW2Rpc2FibGVkXT1cImFkZERpc2FibGVkXCJcbiAgICAgICAgICAgIChjbGljayk9XCJhZGRJdGVtKClcIlxuICAgICAgICAgICAgW2lubmVySFRNTF09XCJhZGRUaXRsZVwiXG4gICAgICAgICAgPjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIH1cbiAgICA8ZGl2IG56LWNvbCBjbGFzcz1cImFudC1mb3JtLWl0ZW0tY29udHJvbC13cmFwcGVyXCIgW256U3Bhbl09XCJ1aS5zcGFuQ29udHJvbCFcIiBbbnpPZmZzZXRdPVwidWkub2Zmc2V0Q29udHJvbCFcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJhbnQtZm9ybS1pdGVtLWNvbnRyb2xcIiBbY2xhc3MuaGFzLWVycm9yXT1cInNob3dFcnJvclwiPlxuICAgICAgICA8ZGl2IG56LXJvdyBjbGFzcz1cInNmX19hcnJheS1jb250YWluZXJcIj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpIG9mICRhbnkoZm9ybVByb3BlcnR5KS5wcm9wZXJ0aWVzOyBsZXQgJGluZGV4ID0gaW5kZXhcIj5cbiAgICAgICAgICAgIEBpZiAoaS52aXNpYmxlICYmICFpLnVpLmhpZGRlbikge1xuICAgICAgICAgICAgICA8ZGl2IG56LWNvbCBbbnpTcGFuXT1cImFycmF5U3BhblwiIFthdHRyLmRhdGEtaW5kZXhdPVwiJGluZGV4XCIgY2xhc3M9XCJzZl9fYXJyYXktaXRlbVwiPlxuICAgICAgICAgICAgICAgIDxuei1jYXJkPlxuICAgICAgICAgICAgICAgICAgPHNmLWl0ZW0gW2Zvcm1Qcm9wZXJ0eV09XCJpXCIgLz5cbiAgICAgICAgICAgICAgICAgIEBpZiAoc2hvd1JlbW92ZSkge1xuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNmX19hcnJheS1yZW1vdmVcIiAoY2xpY2spPVwicmVtb3ZlSXRlbSgkaW5kZXgpXCIgW2F0dHIudGl0bGVdPVwicmVtb3ZlVGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aSBuei1pY29uIG56VHlwZT1cImRlbGV0ZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvbnotY2FyZD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBAaWYgKCF1aS5vbmx5VmlzdWFsICYmIHNob3dFcnJvcikge1xuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtZm9ybS1leHBsYWluXCI+e3sgZXJyb3IgfX08L2Rpdj5cbiAgICAgICAgfVxuICAgICAgICBAaWYgKHNjaGVtYS5kZXNjcmlwdGlvbikge1xuICAgICAgICAgIDxkaXYgW2lubmVySFRNTF09XCJ1aS5fZGVzY3JpcHRpb25cIiBjbGFzcz1cImFudC1mb3JtLWV4dHJhXCI+PC9kaXY+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L256LWZvcm0taXRlbT5gLFxuICBob3N0OiB7ICdbY2xhc3Muc2ZfX2FycmF5XSc6ICd0cnVlJyB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBBcnJheVdpZGdldCBleHRlbmRzIEFycmF5TGF5b3V0V2lkZ2V0IGltcGxlbWVudHMgT25Jbml0IHtcbiAgYWRkVGl0bGUhOiBTYWZlSHRtbDtcbiAgYWRkVHlwZSE6IE56QnV0dG9uVHlwZTtcbiAgcmVtb3ZlVGl0bGU/OiBzdHJpbmcgfCBudWxsO1xuICBhcnJheVNwYW4gPSA4O1xuXG4gIGdldCBhZGREaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5kaXNhYmxlZCB8fFxuICAgICAgKHRoaXMuc2NoZW1hLm1heEl0ZW1zICE9IG51bGwgJiYgKHRoaXMuZm9ybVByb3BlcnR5LnByb3BlcnRpZXMgYXMgRm9ybVByb3BlcnR5W10pLmxlbmd0aCA+PSB0aGlzLnNjaGVtYS5tYXhJdGVtcyEpXG4gICAgKTtcbiAgfVxuXG4gIGdldCBzaG93UmVtb3ZlKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmRpc2FibGVkIHx8ICF0aGlzLnJlbW92ZVRpdGxlKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKFxuICAgICAgdGhpcy5zY2hlbWEubWluSXRlbXMgIT0gbnVsbCAmJlxuICAgICAgKHRoaXMuZm9ybVByb3BlcnR5LnByb3BlcnRpZXMgYXMgRm9ybVByb3BlcnR5W10pLmxlbmd0aCA8PSB0aGlzLnNjaGVtYS5taW5JdGVtcyFcbiAgICApXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IGdyaWQsIGFkZFRpdGxlLCBhZGRUeXBlLCByZW1vdmFibGUsIHJlbW92ZVRpdGxlIH0gPSB0aGlzLnVpO1xuICAgIGlmIChncmlkICYmIGdyaWQuYXJyYXlTcGFuKSB7XG4gICAgICB0aGlzLmFycmF5U3BhbiA9IGdyaWQuYXJyYXlTcGFuO1xuICAgIH1cblxuICAgIHRoaXMuYWRkVGl0bGUgPSB0aGlzLmRvbS5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChhZGRUaXRsZSB8fCB0aGlzLmwuYWRkVGV4dCk7XG4gICAgdGhpcy5hZGRUeXBlID0gYWRkVHlwZSB8fCAnZGFzaGVkJztcbiAgICB0aGlzLnJlbW92ZVRpdGxlID0gcmVtb3ZhYmxlID09PSBmYWxzZSA/IG51bGwgOiByZW1vdmVUaXRsZSB8fCB0aGlzLmwucmVtb3ZlVGV4dDtcbiAgfVxuXG4gIHByaXZhdGUgcmVWYWxpZCgpOiB2b2lkIHtcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHsgb25seVNlbGY6IGZhbHNlLCBlbWl0VmFsdWVFdmVudDogZmFsc2UsIGVtaXRWYWxpZGF0b3I6IHRydWUgfSk7XG4gIH1cblxuICBhZGRJdGVtKCk6IHZvaWQge1xuICAgIGNvbnN0IHByb3BlcnR5ID0gdGhpcy5mb3JtUHJvcGVydHkuYWRkKHt9KTtcbiAgICB0aGlzLnJlVmFsaWQoKTtcbiAgICB0aGlzLnVpLmFkZD8uKHByb3BlcnR5KTtcbiAgfVxuXG4gIHJlbW92ZUl0ZW0oaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuZm9ybVByb3BlcnR5LnJlbW92ZShpbmRleCk7XG4gICAgdGhpcy5yZVZhbGlkKCk7XG4gICAgdGhpcy51aS5yZW1vdmU/LihpbmRleCk7XG4gIH1cbn1cbiJdfQ==