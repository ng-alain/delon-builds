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
    reValid() {
        this.formProperty.updateValueAndValidity({ onlySelf: false, emitValueEvent: false, emitValidator: true });
    }
    addItem() {
        const property = this.formProperty.add({});
        this.reValid();
        if (this.ui.add) {
            this.ui.add(property);
        }
    }
    removeItem(index) {
        this.formProperty.remove(index);
        this.reValid();
        if (this.ui.remove) {
            this.ui.remove(index);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ArrayWidget, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: ArrayWidget, selector: "sf-array", host: { properties: { "class.sf__array": "true" } }, usesInheritance: true, ngImport: i0, template: `<nz-form-item [class.ant-form-item-with-help]="showError">
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ArrayWidget, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXkud2lkZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS9zcmMvd2lkZ2V0cy9hcnJheS9hcnJheS53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU1yRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7Ozs7Ozs7O0FBc0VqRCxNQUFNLE9BQU8sV0FBWSxTQUFRLGlCQUFpQjtJQXBFbEQ7O1FBd0VFLGNBQVMsR0FBRyxDQUFDLENBQUM7S0FpRGY7SUEvQ0MsSUFBSSxXQUFXO1FBQ2IsT0FBTyxDQUNMLElBQUksQ0FBQyxRQUFRO1lBQ2IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBSSxJQUFJLElBQUssSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUE2QixDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVMsQ0FBQyxDQUNuSCxDQUFDO0lBQ0osQ0FBQztJQUVELElBQUksVUFBVTtRQUNaLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXO1lBQUUsT0FBTyxLQUFLLENBQUM7UUFDckQsSUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBSSxJQUFJO1lBQzNCLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBNkIsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFTO1lBRWhGLE9BQU8sS0FBSyxDQUFDO1FBQ2YsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsUUFBUTtRQUNOLE1BQU0sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNwRSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQzFCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUNqQztRQUVELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3RSxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sSUFBSSxRQUFRLENBQUM7UUFDbkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQztJQUNuRixDQUFDO0lBRU8sT0FBTztRQUNiLElBQUksQ0FBQyxZQUFZLENBQUMsc0JBQXNCLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDNUcsQ0FBQztJQUVELE9BQU87UUFDTCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDZixJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFO1lBQ2YsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDdkI7SUFDSCxDQUFDO0lBRUQsVUFBVSxDQUFDLEtBQWE7UUFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2YsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRTtZQUNsQixJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN2QjtJQUNILENBQUM7OEdBcERVLFdBQVc7a0dBQVgsV0FBVyw0SEFsRVo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBNkRNOzsyRkFLTCxXQUFXO2tCQXBFdkIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQTZETTtvQkFDaEIsSUFBSSxFQUFFLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxFQUFFO29CQUNyQyxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDdEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbmltcG9ydCB7IE56QnV0dG9uVHlwZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvYnV0dG9uJztcblxuaW1wb3J0IHR5cGUgeyBGb3JtUHJvcGVydHkgfSBmcm9tICcuLi8uLi9tb2RlbC9mb3JtLnByb3BlcnR5JztcbmltcG9ydCB7IEFycmF5TGF5b3V0V2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtYXJyYXknLFxuICB0ZW1wbGF0ZTogYDxuei1mb3JtLWl0ZW0gW2NsYXNzLmFudC1mb3JtLWl0ZW0td2l0aC1oZWxwXT1cInNob3dFcnJvclwiPlxuICAgIEBpZiAoc2NoZW1hLnRpdGxlKSB7XG4gICAgICA8ZGl2IG56LWNvbCBbbnpTcGFuXT1cInVpLnNwYW5MYWJlbCFcIiBjbGFzcz1cImFudC1mb3JtLWl0ZW0tbGFiZWxcIj5cbiAgICAgICAgPGxhYmVsIFtjbGFzcy5hbnQtZm9ybS1pdGVtLXJlcXVpcmVkXT1cInVpLnJlcXVpcmVkXCI+XG4gICAgICAgICAge3sgc2NoZW1hLnRpdGxlIH19XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJzZl9fb3B0aW9uYWxcIj5cbiAgICAgICAgICAgIHt7IHVpLm9wdGlvbmFsIH19XG4gICAgICAgICAgICBAaWYgKG9oKSB7XG4gICAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgICAgbnotdG9vbHRpcFxuICAgICAgICAgICAgICAgIFtuelRvb2x0aXBUaXRsZV09XCJvaC50ZXh0XCJcbiAgICAgICAgICAgICAgICBbbnpUb29sdGlwUGxhY2VtZW50XT1cIm9oLnBsYWNlbWVudFwiXG4gICAgICAgICAgICAgICAgW256VG9vbHRpcFRyaWdnZXJdPVwib2gudHJpZ2dlclwiXG4gICAgICAgICAgICAgICAgW256VG9vbHRpcE92ZXJsYXlDbGFzc05hbWVdPVwib2gub3ZlcmxheUNsYXNzTmFtZVwiXG4gICAgICAgICAgICAgICAgW256VG9vbHRpcE92ZXJsYXlTdHlsZV09XCJvaC5vdmVybGF5U3R5bGVcIlxuICAgICAgICAgICAgICAgIFtuelRvb2x0aXBNb3VzZUVudGVyRGVsYXldPVwib2gubW91c2VFbnRlckRlbGF5XCJcbiAgICAgICAgICAgICAgICBbbnpUb29sdGlwTW91c2VMZWF2ZURlbGF5XT1cIm9oLm1vdXNlTGVhdmVEZWxheVwiXG4gICAgICAgICAgICAgICAgbnotaWNvblxuICAgICAgICAgICAgICAgIFtuelR5cGVdPVwib2guaWNvbiFcIlxuICAgICAgICAgICAgICA+PC9pPlxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNmX19hcnJheS1hZGRcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIG56LWJ1dHRvblxuICAgICAgICAgICAgW256VHlwZV09XCJhZGRUeXBlXCJcbiAgICAgICAgICAgIFtkaXNhYmxlZF09XCJhZGREaXNhYmxlZFwiXG4gICAgICAgICAgICAoY2xpY2spPVwiYWRkSXRlbSgpXCJcbiAgICAgICAgICAgIFtpbm5lckhUTUxdPVwiYWRkVGl0bGVcIlxuICAgICAgICAgID48L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICB9XG4gICAgPGRpdiBuei1jb2wgY2xhc3M9XCJhbnQtZm9ybS1pdGVtLWNvbnRyb2wtd3JhcHBlclwiIFtuelNwYW5dPVwidWkuc3BhbkNvbnRyb2whXCIgW256T2Zmc2V0XT1cInVpLm9mZnNldENvbnRyb2whXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LWZvcm0taXRlbS1jb250cm9sXCIgW2NsYXNzLmhhcy1lcnJvcl09XCJzaG93RXJyb3JcIj5cbiAgICAgICAgPGRpdiBuei1yb3cgY2xhc3M9XCJzZl9fYXJyYXktY29udGFpbmVyXCI+XG4gICAgICAgICAgQGZvciAoaSBvZiAkYW55KGZvcm1Qcm9wZXJ0eSkucHJvcGVydGllczsgdHJhY2sgJGluZGV4KSB7XG4gICAgICAgICAgICBAaWYgKGkudmlzaWJsZSAmJiAhaS51aS5oaWRkZW4pIHtcbiAgICAgICAgICAgICAgPGRpdiBuei1jb2wgW256U3Bhbl09XCJhcnJheVNwYW5cIiBbYXR0ci5kYXRhLWluZGV4XT1cIiRpbmRleFwiIGNsYXNzPVwic2ZfX2FycmF5LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICA8bnotY2FyZD5cbiAgICAgICAgICAgICAgICAgIDxzZi1pdGVtIFtmb3JtUHJvcGVydHldPVwiaVwiIC8+XG4gICAgICAgICAgICAgICAgICBAaWYgKHNob3dSZW1vdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzZl9fYXJyYXktcmVtb3ZlXCIgKGNsaWNrKT1cInJlbW92ZUl0ZW0oJGluZGV4KVwiIFthdHRyLnRpdGxlXT1cInJlbW92ZVRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGkgbnotaWNvbiBuelR5cGU9XCJkZWxldGVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L256LWNhcmQ+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIEBpZiAoIXVpLm9ubHlWaXN1YWwgJiYgc2hvd0Vycm9yKSB7XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImFudC1mb3JtLWV4cGxhaW5cIj57eyBlcnJvciB9fTwvZGl2PlxuICAgICAgICB9XG4gICAgICAgIEBpZiAoc2NoZW1hLmRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgPGRpdiBbaW5uZXJIVE1MXT1cInVpLl9kZXNjcmlwdGlvblwiIGNsYXNzPVwiYW50LWZvcm0tZXh0cmFcIj48L2Rpdj5cbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvbnotZm9ybS1pdGVtPmAsXG4gIGhvc3Q6IHsgJ1tjbGFzcy5zZl9fYXJyYXldJzogJ3RydWUnIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEFycmF5V2lkZ2V0IGV4dGVuZHMgQXJyYXlMYXlvdXRXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xuICBhZGRUaXRsZSE6IFNhZmVIdG1sO1xuICBhZGRUeXBlITogTnpCdXR0b25UeXBlO1xuICByZW1vdmVUaXRsZT86IHN0cmluZyB8IG51bGw7XG4gIGFycmF5U3BhbiA9IDg7XG5cbiAgZ2V0IGFkZERpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmRpc2FibGVkIHx8XG4gICAgICAodGhpcy5zY2hlbWEubWF4SXRlbXMgIT0gbnVsbCAmJiAodGhpcy5mb3JtUHJvcGVydHkucHJvcGVydGllcyBhcyBGb3JtUHJvcGVydHlbXSkubGVuZ3RoID49IHRoaXMuc2NoZW1hLm1heEl0ZW1zISlcbiAgICApO1xuICB9XG5cbiAgZ2V0IHNob3dSZW1vdmUoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgIXRoaXMucmVtb3ZlVGl0bGUpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoXG4gICAgICB0aGlzLnNjaGVtYS5taW5JdGVtcyAhPSBudWxsICYmXG4gICAgICAodGhpcy5mb3JtUHJvcGVydHkucHJvcGVydGllcyBhcyBGb3JtUHJvcGVydHlbXSkubGVuZ3RoIDw9IHRoaXMuc2NoZW1hLm1pbkl0ZW1zIVxuICAgIClcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgZ3JpZCwgYWRkVGl0bGUsIGFkZFR5cGUsIHJlbW92YWJsZSwgcmVtb3ZlVGl0bGUgfSA9IHRoaXMudWk7XG4gICAgaWYgKGdyaWQgJiYgZ3JpZC5hcnJheVNwYW4pIHtcbiAgICAgIHRoaXMuYXJyYXlTcGFuID0gZ3JpZC5hcnJheVNwYW47XG4gICAgfVxuXG4gICAgdGhpcy5hZGRUaXRsZSA9IHRoaXMuZG9tLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKGFkZFRpdGxlIHx8IHRoaXMubC5hZGRUZXh0KTtcbiAgICB0aGlzLmFkZFR5cGUgPSBhZGRUeXBlIHx8ICdkYXNoZWQnO1xuICAgIHRoaXMucmVtb3ZlVGl0bGUgPSByZW1vdmFibGUgPT09IGZhbHNlID8gbnVsbCA6IHJlbW92ZVRpdGxlIHx8IHRoaXMubC5yZW1vdmVUZXh0O1xuICB9XG5cbiAgcHJpdmF0ZSByZVZhbGlkKCk6IHZvaWQge1xuICAgIHRoaXMuZm9ybVByb3BlcnR5LnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoeyBvbmx5U2VsZjogZmFsc2UsIGVtaXRWYWx1ZUV2ZW50OiBmYWxzZSwgZW1pdFZhbGlkYXRvcjogdHJ1ZSB9KTtcbiAgfVxuXG4gIGFkZEl0ZW0oKTogdm9pZCB7XG4gICAgY29uc3QgcHJvcGVydHkgPSB0aGlzLmZvcm1Qcm9wZXJ0eS5hZGQoe30pO1xuICAgIHRoaXMucmVWYWxpZCgpO1xuICAgIGlmICh0aGlzLnVpLmFkZCkge1xuICAgICAgdGhpcy51aS5hZGQocHJvcGVydHkpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUl0ZW0oaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuZm9ybVByb3BlcnR5LnJlbW92ZShpbmRleCk7XG4gICAgdGhpcy5yZVZhbGlkKCk7XG4gICAgaWYgKHRoaXMudWkucmVtb3ZlKSB7XG4gICAgICB0aGlzLnVpLnJlbW92ZShpbmRleCk7XG4gICAgfVxuICB9XG59XG4iXX0=