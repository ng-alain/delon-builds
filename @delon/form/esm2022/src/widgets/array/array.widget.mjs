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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.3", ngImport: i0, type: ArrayWidget, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.1.3", type: ArrayWidget, selector: "sf-array", host: { properties: { "class.sf__array": "true" } }, usesInheritance: true, ngImport: i0, template: `<nz-form-item [class.ant-form-item-with-help]="showError">
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.3", ngImport: i0, type: ArrayWidget, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXkud2lkZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS9zcmMvd2lkZ2V0cy9hcnJheS9hcnJheS53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU9yRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7Ozs7Ozs7OztBQXNFakQsTUFBTSxPQUFPLFdBQVksU0FBUSxpQkFBaUI7SUFwRWxEOztRQXdFRSxjQUFTLEdBQUcsQ0FBQyxDQUFDO0tBbURmO0lBakRDLElBQUksV0FBVztRQUNiLE9BQU8sQ0FDTCxJQUFJLENBQUMsUUFBUTtZQUNiLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLElBQUksSUFBSSxJQUFLLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBNkIsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFTLENBQUMsQ0FDbkgsQ0FBQztJQUNKLENBQUM7SUFFRCxJQUFJLFVBQVU7UUFDWixJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVztZQUFFLE9BQU8sS0FBSyxDQUFDO1FBQ3JELElBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLElBQUksSUFBSTtZQUMzQixJQUFJLENBQUMsWUFBWSxDQUFDLFVBQTZCLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUztZQUVoRixPQUFPLEtBQUssQ0FBQztRQUNmLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELFFBQVE7UUFDTixNQUFNLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDcEUsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNsQyxDQUFDO1FBRUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdFLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxJQUFJLFFBQVEsQ0FBQztRQUNuQyxJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO0lBQ25GLENBQUM7SUFFTyxPQUFPLENBQUMsT0FBa0M7UUFDaEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQztZQUN2QyxRQUFRLEVBQUUsS0FBSztZQUNmLGNBQWMsRUFBRSxLQUFLO1lBQ3JCLGFBQWEsRUFBRSxJQUFJO1lBQ25CLEdBQUcsT0FBTztTQUNYLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxPQUFPO1FBQ0wsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsVUFBVSxDQUFDLEtBQWE7UUFDdEIsTUFBTSxVQUFVLEdBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUE2QixDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNoRixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsVUFBVSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQzs4R0F0RFUsV0FBVztrR0FBWCxXQUFXLDRIQWxFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkE2RE07OzJGQUtMLFdBQVc7a0JBcEV2QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUNwQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBNkRNO29CQUNoQixJQUFJLEVBQUUsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLEVBQUU7b0JBQ3JDLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUN0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuaW1wb3J0IHsgTnpCdXR0b25UeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9idXR0b24nO1xuXG5pbXBvcnQgeyBTRlVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHR5cGUgeyBGb3JtUHJvcGVydHkgfSBmcm9tICcuLi8uLi9tb2RlbC9mb3JtLnByb3BlcnR5JztcbmltcG9ydCB7IEFycmF5TGF5b3V0V2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtYXJyYXknLFxuICB0ZW1wbGF0ZTogYDxuei1mb3JtLWl0ZW0gW2NsYXNzLmFudC1mb3JtLWl0ZW0td2l0aC1oZWxwXT1cInNob3dFcnJvclwiPlxuICAgIEBpZiAoc2NoZW1hLnRpdGxlKSB7XG4gICAgICA8ZGl2IG56LWNvbCBbbnpTcGFuXT1cInVpLnNwYW5MYWJlbCFcIiBjbGFzcz1cImFudC1mb3JtLWl0ZW0tbGFiZWxcIj5cbiAgICAgICAgPGxhYmVsIFtjbGFzcy5hbnQtZm9ybS1pdGVtLXJlcXVpcmVkXT1cInVpLnJlcXVpcmVkXCI+XG4gICAgICAgICAge3sgc2NoZW1hLnRpdGxlIH19XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJzZl9fb3B0aW9uYWxcIj5cbiAgICAgICAgICAgIHt7IHVpLm9wdGlvbmFsIH19XG4gICAgICAgICAgICBAaWYgKG9oKSB7XG4gICAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgICAgbnotdG9vbHRpcFxuICAgICAgICAgICAgICAgIFtuelRvb2x0aXBUaXRsZV09XCJvaC50ZXh0XCJcbiAgICAgICAgICAgICAgICBbbnpUb29sdGlwUGxhY2VtZW50XT1cIm9oLnBsYWNlbWVudFwiXG4gICAgICAgICAgICAgICAgW256VG9vbHRpcFRyaWdnZXJdPVwib2gudHJpZ2dlclwiXG4gICAgICAgICAgICAgICAgW256VG9vbHRpcE92ZXJsYXlDbGFzc05hbWVdPVwib2gub3ZlcmxheUNsYXNzTmFtZVwiXG4gICAgICAgICAgICAgICAgW256VG9vbHRpcE92ZXJsYXlTdHlsZV09XCJvaC5vdmVybGF5U3R5bGVcIlxuICAgICAgICAgICAgICAgIFtuelRvb2x0aXBNb3VzZUVudGVyRGVsYXldPVwib2gubW91c2VFbnRlckRlbGF5XCJcbiAgICAgICAgICAgICAgICBbbnpUb29sdGlwTW91c2VMZWF2ZURlbGF5XT1cIm9oLm1vdXNlTGVhdmVEZWxheVwiXG4gICAgICAgICAgICAgICAgbnotaWNvblxuICAgICAgICAgICAgICAgIFtuelR5cGVdPVwib2guaWNvbiFcIlxuICAgICAgICAgICAgICA+PC9pPlxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNmX19hcnJheS1hZGRcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIG56LWJ1dHRvblxuICAgICAgICAgICAgW256VHlwZV09XCJhZGRUeXBlXCJcbiAgICAgICAgICAgIFtkaXNhYmxlZF09XCJhZGREaXNhYmxlZFwiXG4gICAgICAgICAgICAoY2xpY2spPVwiYWRkSXRlbSgpXCJcbiAgICAgICAgICAgIFtpbm5lckhUTUxdPVwiYWRkVGl0bGVcIlxuICAgICAgICAgID48L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICB9XG4gICAgPGRpdiBuei1jb2wgY2xhc3M9XCJhbnQtZm9ybS1pdGVtLWNvbnRyb2wtd3JhcHBlclwiIFtuelNwYW5dPVwidWkuc3BhbkNvbnRyb2whXCIgW256T2Zmc2V0XT1cInVpLm9mZnNldENvbnRyb2whXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LWZvcm0taXRlbS1jb250cm9sXCIgW2NsYXNzLmhhcy1lcnJvcl09XCJzaG93RXJyb3JcIj5cbiAgICAgICAgPGRpdiBuei1yb3cgY2xhc3M9XCJzZl9fYXJyYXktY29udGFpbmVyXCI+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaSBvZiAkYW55KGZvcm1Qcm9wZXJ0eSkucHJvcGVydGllczsgbGV0ICRpbmRleCA9IGluZGV4XCI+XG4gICAgICAgICAgICBAaWYgKGkudmlzaWJsZSAmJiAhaS51aS5oaWRkZW4pIHtcbiAgICAgICAgICAgICAgPGRpdiBuei1jb2wgW256U3Bhbl09XCJhcnJheVNwYW5cIiBbYXR0ci5kYXRhLWluZGV4XT1cIiRpbmRleFwiIGNsYXNzPVwic2ZfX2FycmF5LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICA8bnotY2FyZD5cbiAgICAgICAgICAgICAgICAgIDxzZi1pdGVtIFtmb3JtUHJvcGVydHldPVwiaVwiIC8+XG4gICAgICAgICAgICAgICAgICBAaWYgKHNob3dSZW1vdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzZl9fYXJyYXktcmVtb3ZlXCIgKGNsaWNrKT1cInJlbW92ZUl0ZW0oJGluZGV4KVwiIFthdHRyLnRpdGxlXT1cInJlbW92ZVRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGkgbnotaWNvbiBuelR5cGU9XCJkZWxldGVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L256LWNhcmQ+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgQGlmICghdWkub25seVZpc3VhbCAmJiBzaG93RXJyb3IpIHtcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LWZvcm0tZXhwbGFpblwiPnt7IGVycm9yIH19PC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAgQGlmIChzY2hlbWEuZGVzY3JpcHRpb24pIHtcbiAgICAgICAgICA8ZGl2IFtpbm5lckhUTUxdPVwidWkuX2Rlc2NyaXB0aW9uXCIgY2xhc3M9XCJhbnQtZm9ybS1leHRyYVwiPjwvZGl2PlxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9uei1mb3JtLWl0ZW0+YCxcbiAgaG9zdDogeyAnW2NsYXNzLnNmX19hcnJheV0nOiAndHJ1ZScgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgQXJyYXlXaWRnZXQgZXh0ZW5kcyBBcnJheUxheW91dFdpZGdldCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGFkZFRpdGxlITogU2FmZUh0bWw7XG4gIGFkZFR5cGUhOiBOekJ1dHRvblR5cGU7XG4gIHJlbW92ZVRpdGxlPzogc3RyaW5nIHwgbnVsbDtcbiAgYXJyYXlTcGFuID0gODtcblxuICBnZXQgYWRkRGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuZGlzYWJsZWQgfHxcbiAgICAgICh0aGlzLnNjaGVtYS5tYXhJdGVtcyAhPSBudWxsICYmICh0aGlzLmZvcm1Qcm9wZXJ0eS5wcm9wZXJ0aWVzIGFzIEZvcm1Qcm9wZXJ0eVtdKS5sZW5ndGggPj0gdGhpcy5zY2hlbWEubWF4SXRlbXMhKVxuICAgICk7XG4gIH1cblxuICBnZXQgc2hvd1JlbW92ZSgpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCAhdGhpcy5yZW1vdmVUaXRsZSkgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChcbiAgICAgIHRoaXMuc2NoZW1hLm1pbkl0ZW1zICE9IG51bGwgJiZcbiAgICAgICh0aGlzLmZvcm1Qcm9wZXJ0eS5wcm9wZXJ0aWVzIGFzIEZvcm1Qcm9wZXJ0eVtdKS5sZW5ndGggPD0gdGhpcy5zY2hlbWEubWluSXRlbXMhXG4gICAgKVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3QgeyBncmlkLCBhZGRUaXRsZSwgYWRkVHlwZSwgcmVtb3ZhYmxlLCByZW1vdmVUaXRsZSB9ID0gdGhpcy51aTtcbiAgICBpZiAoZ3JpZCAmJiBncmlkLmFycmF5U3Bhbikge1xuICAgICAgdGhpcy5hcnJheVNwYW4gPSBncmlkLmFycmF5U3BhbjtcbiAgICB9XG5cbiAgICB0aGlzLmFkZFRpdGxlID0gdGhpcy5kb20uYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoYWRkVGl0bGUgfHwgdGhpcy5sLmFkZFRleHQpO1xuICAgIHRoaXMuYWRkVHlwZSA9IGFkZFR5cGUgfHwgJ2Rhc2hlZCc7XG4gICAgdGhpcy5yZW1vdmVUaXRsZSA9IHJlbW92YWJsZSA9PT0gZmFsc2UgPyBudWxsIDogcmVtb3ZlVGl0bGUgfHwgdGhpcy5sLnJlbW92ZVRleHQ7XG4gIH1cblxuICBwcml2YXRlIHJlVmFsaWQob3B0aW9ucz86IFNGVXBkYXRlVmFsdWVBbmRWYWxpZGl0eSk6IHZvaWQge1xuICAgIHRoaXMuZm9ybVByb3BlcnR5LnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoe1xuICAgICAgb25seVNlbGY6IGZhbHNlLFxuICAgICAgZW1pdFZhbHVlRXZlbnQ6IGZhbHNlLFxuICAgICAgZW1pdFZhbGlkYXRvcjogdHJ1ZSxcbiAgICAgIC4uLm9wdGlvbnNcbiAgICB9KTtcbiAgfVxuXG4gIGFkZEl0ZW0oKTogdm9pZCB7XG4gICAgY29uc3QgcHJvcGVydHkgPSB0aGlzLmZvcm1Qcm9wZXJ0eS5hZGQoe30pO1xuICAgIHRoaXMucmVWYWxpZCgpO1xuICAgIHRoaXMudWkuYWRkPy4ocHJvcGVydHkpO1xuICB9XG5cbiAgcmVtb3ZlSXRlbShpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgdXBkYXRlUGF0aCA9ICh0aGlzLmZvcm1Qcm9wZXJ0eS5wcm9wZXJ0aWVzIGFzIEZvcm1Qcm9wZXJ0eVtdKVtpbmRleF0ucGF0aDtcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5yZW1vdmUoaW5kZXgpO1xuICAgIHRoaXMucmVWYWxpZCh7IHVwZGF0ZVBhdGgsIGVtaXRWYWx1ZUV2ZW50OiB0cnVlIH0pO1xuICAgIHRoaXMudWkucmVtb3ZlPy4oaW5kZXgpO1xuICB9XG59XG4iXX0=