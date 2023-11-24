import { Component, ViewEncapsulation } from '@angular/core';
import { getData } from '../../utils';
import { ControlUIWidget } from '../../widget';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "ng-zorro-antd/core/transition-patch";
import * as i4 from "ng-zorro-antd/checkbox";
import * as i5 from "ng-zorro-antd/grid";
import * as i6 from "ng-zorro-antd/icon";
import * as i7 from "ng-zorro-antd/tooltip";
import * as i8 from "../../sf-item-wrap.component";
export class CheckboxWidget extends ControlUIWidget {
    constructor() {
        super(...arguments);
        this.data = [];
        this.allChecked = false;
        this.indeterminate = false;
        this.labelTitle = ``;
        this.inited = false;
    }
    reset(value) {
        this.inited = false;
        getData(this.schema, this.ui, value).subscribe(list => {
            this.data = list;
            this.allChecked = false;
            this.indeterminate = false;
            this.labelTitle = list.length === 0 ? '' : this.schema.title;
            const { span } = this.ui;
            this.grid_span = span && span > 0 ? span : 0;
            this.updateAllChecked();
            this.inited = true;
            this.detectChanges();
        });
    }
    _setValue(value) {
        this.setValue(value);
        this.detectChanges();
        this.notifyChange(value);
    }
    notifySet() {
        const checkList = this.data.filter(w => w.checked);
        this.updateAllChecked().setValue(checkList.map(item => item.value));
        this.notifyChange(checkList);
    }
    groupInGridChange(values) {
        this.data.forEach(item => (item.checked = values.indexOf(item.value) !== -1));
        this.notifySet();
    }
    onAllChecked() {
        this.data.forEach(item => (item.checked = this.allChecked));
        this.notifySet();
    }
    updateAllChecked() {
        if (this.data.every(item => item.checked !== true)) {
            this.allChecked = false;
            this.indeterminate = false;
        }
        else if (this.data.every(item => item.checked === true)) {
            this.allChecked = true;
            this.indeterminate = false;
        }
        else {
            this.indeterminate = true;
        }
        this.detectChanges();
        return this;
    }
    notifyChange(res) {
        if (this.ui.change)
            this.ui.change(res);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CheckboxWidget, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: CheckboxWidget, selector: "sf-checkbox", usesInheritance: true, ngImport: i0, template: `<ng-template #all>
      @if (ui.checkAll) {
        <label
          nz-checkbox
          class="sf__checkbox-all mr-sm"
          [(ngModel)]="allChecked"
          (ngModelChange)="onAllChecked()"
          [nzIndeterminate]="indeterminate"
        >
          {{ ui.checkAllText || l.checkAllText }}
        </label>
      }
    </ng-template>
    <sf-item-wrap
      [id]="id"
      [schema]="schema"
      [ui]="ui"
      [showError]="showError"
      [error]="error"
      [showTitle]="true"
      [title]="labelTitle"
    >
      @if (inited) {
        @if (data.length === 0) {
          <label nz-checkbox [nzDisabled]="disabled" [ngModel]="value" (ngModelChange)="_setValue($event)">
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
        } @else {
          @if (grid_span === 0) {
            <ng-template [ngTemplateOutlet]="all" />
            <nz-checkbox-group [ngModel]="data" (ngModelChange)="notifySet()" />
          } @else {
            <nz-checkbox-wrapper class="sf__checkbox-list" (nzOnChange)="groupInGridChange($event)">
              <div nz-row>
                @if (ui.checkAll) {
                  <div nz-col [nzSpan]="grid_span">
                    <ng-template [ngTemplateOutlet]="all" />
                  </div>
                }
                @for (i of data; track $index) {
                  <div nz-col [nzSpan]="grid_span">
                    <label nz-checkbox [nzValue]="i.value" [ngModel]="i.checked" [nzDisabled]="i.disabled">
                      {{ i.label }}
                    </label>
                  </div>
                }
              </div>
            </nz-checkbox-wrapper>
          }
        }
      }
    </sf-item-wrap>`, isInline: true, dependencies: [{ kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i3.ɵNzTransitionPatchDirective, selector: "[nz-button], nz-button-group, [nz-icon], [nz-menu-item], [nz-submenu], nz-select-top-control, nz-select-placeholder, nz-input-group", inputs: ["hidden"] }, { kind: "component", type: i4.NzCheckboxComponent, selector: "[nz-checkbox]", inputs: ["nzValue", "nzAutoFocus", "nzDisabled", "nzIndeterminate", "nzChecked", "nzId"], outputs: ["nzCheckedChange"], exportAs: ["nzCheckbox"] }, { kind: "component", type: i4.NzCheckboxGroupComponent, selector: "nz-checkbox-group", inputs: ["nzDisabled"], exportAs: ["nzCheckboxGroup"] }, { kind: "component", type: i4.NzCheckboxWrapperComponent, selector: "nz-checkbox-wrapper", outputs: ["nzOnChange"], exportAs: ["nzCheckboxWrapper"] }, { kind: "directive", type: i5.NzColDirective, selector: "[nz-col],nz-col,nz-form-control,nz-form-label", inputs: ["nzFlex", "nzSpan", "nzOrder", "nzOffset", "nzPush", "nzPull", "nzXs", "nzSm", "nzMd", "nzLg", "nzXl", "nzXXl"], exportAs: ["nzCol"] }, { kind: "directive", type: i5.NzRowDirective, selector: "[nz-row],nz-row,nz-form-item", inputs: ["nzAlign", "nzJustify", "nzGutter"], exportAs: ["nzRow"] }, { kind: "directive", type: i6.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "directive", type: i7.NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "cdkConnectedOverlayPush", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }, { kind: "component", type: i8.SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CheckboxWidget, decorators: [{
            type: Component,
            args: [{
                    selector: 'sf-checkbox',
                    template: `<ng-template #all>
      @if (ui.checkAll) {
        <label
          nz-checkbox
          class="sf__checkbox-all mr-sm"
          [(ngModel)]="allChecked"
          (ngModelChange)="onAllChecked()"
          [nzIndeterminate]="indeterminate"
        >
          {{ ui.checkAllText || l.checkAllText }}
        </label>
      }
    </ng-template>
    <sf-item-wrap
      [id]="id"
      [schema]="schema"
      [ui]="ui"
      [showError]="showError"
      [error]="error"
      [showTitle]="true"
      [title]="labelTitle"
    >
      @if (inited) {
        @if (data.length === 0) {
          <label nz-checkbox [nzDisabled]="disabled" [ngModel]="value" (ngModelChange)="_setValue($event)">
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
        } @else {
          @if (grid_span === 0) {
            <ng-template [ngTemplateOutlet]="all" />
            <nz-checkbox-group [ngModel]="data" (ngModelChange)="notifySet()" />
          } @else {
            <nz-checkbox-wrapper class="sf__checkbox-list" (nzOnChange)="groupInGridChange($event)">
              <div nz-row>
                @if (ui.checkAll) {
                  <div nz-col [nzSpan]="grid_span">
                    <ng-template [ngTemplateOutlet]="all" />
                  </div>
                }
                @for (i of data; track $index) {
                  <div nz-col [nzSpan]="grid_span">
                    <label nz-checkbox [nzValue]="i.value" [ngModel]="i.checked" [nzDisabled]="i.disabled">
                      {{ i.label }}
                    </label>
                  </div>
                }
              </div>
            </nz-checkbox-wrapper>
          }
        }
      }
    </sf-item-wrap>`,
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gud2lkZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS9zcmMvd2lkZ2V0cy9jaGVja2JveC9jaGVja2JveC53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUs3RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7Ozs7Ozs7QUE0RS9DLE1BQU0sT0FBTyxjQUFlLFNBQVEsZUFBdUM7SUExRTNFOztRQTJFRSxTQUFJLEdBQW1CLEVBQUUsQ0FBQztRQUMxQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBRXRCLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFDeEIsV0FBTSxHQUFHLEtBQUssQ0FBQztLQXlEaEI7SUF2REMsS0FBSyxDQUFDLEtBQWM7UUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDcEQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDakIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDeEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQWdCLENBQUM7WUFDekUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFH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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBb0VRO29CQUNsQixtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDdEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNGQ2hlY2tib3hXaWRnZXRTY2hlbWEgfSBmcm9tICcuL3NjaGVtYSc7XG5pbXBvcnQgeyBTRlZhbHVlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlJztcbmltcG9ydCB7IFNGU2NoZW1hRW51bSB9IGZyb20gJy4uLy4uL3NjaGVtYSc7XG5pbXBvcnQgeyBnZXREYXRhIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHsgQ29udHJvbFVJV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtY2hlY2tib3gnLFxuICB0ZW1wbGF0ZTogYDxuZy10ZW1wbGF0ZSAjYWxsPlxuICAgICAgQGlmICh1aS5jaGVja0FsbCkge1xuICAgICAgICA8bGFiZWxcbiAgICAgICAgICBuei1jaGVja2JveFxuICAgICAgICAgIGNsYXNzPVwic2ZfX2NoZWNrYm94LWFsbCBtci1zbVwiXG4gICAgICAgICAgWyhuZ01vZGVsKV09XCJhbGxDaGVja2VkXCJcbiAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJvbkFsbENoZWNrZWQoKVwiXG4gICAgICAgICAgW256SW5kZXRlcm1pbmF0ZV09XCJpbmRldGVybWluYXRlXCJcbiAgICAgICAgPlxuICAgICAgICAgIHt7IHVpLmNoZWNrQWxsVGV4dCB8fCBsLmNoZWNrQWxsVGV4dCB9fVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgfVxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPHNmLWl0ZW0td3JhcFxuICAgICAgW2lkXT1cImlkXCJcbiAgICAgIFtzY2hlbWFdPVwic2NoZW1hXCJcbiAgICAgIFt1aV09XCJ1aVwiXG4gICAgICBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiXG4gICAgICBbZXJyb3JdPVwiZXJyb3JcIlxuICAgICAgW3Nob3dUaXRsZV09XCJ0cnVlXCJcbiAgICAgIFt0aXRsZV09XCJsYWJlbFRpdGxlXCJcbiAgICA+XG4gICAgICBAaWYgKGluaXRlZCkge1xuICAgICAgICBAaWYgKGRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgPGxhYmVsIG56LWNoZWNrYm94IFtuekRpc2FibGVkXT1cImRpc2FibGVkXCIgW25nTW9kZWxdPVwidmFsdWVcIiAobmdNb2RlbENoYW5nZSk9XCJfc2V0VmFsdWUoJGV2ZW50KVwiPlxuICAgICAgICAgICAge3sgc2NoZW1hLnRpdGxlIH19XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNmX19vcHRpb25hbFwiPlxuICAgICAgICAgICAgICB7eyB1aS5vcHRpb25hbCB9fVxuICAgICAgICAgICAgICBAaWYgKG9oKSB7XG4gICAgICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgICAgIG56LXRvb2x0aXBcbiAgICAgICAgICAgICAgICAgIFtuelRvb2x0aXBUaXRsZV09XCJvaC50ZXh0XCJcbiAgICAgICAgICAgICAgICAgIFtuelRvb2x0aXBQbGFjZW1lbnRdPVwib2gucGxhY2VtZW50XCJcbiAgICAgICAgICAgICAgICAgIFtuelRvb2x0aXBUcmlnZ2VyXT1cIm9oLnRyaWdnZXJcIlxuICAgICAgICAgICAgICAgICAgW256VG9vbHRpcE92ZXJsYXlDbGFzc05hbWVdPVwib2gub3ZlcmxheUNsYXNzTmFtZVwiXG4gICAgICAgICAgICAgICAgICBbbnpUb29sdGlwT3ZlcmxheVN0eWxlXT1cIm9oLm92ZXJsYXlTdHlsZVwiXG4gICAgICAgICAgICAgICAgICBbbnpUb29sdGlwTW91c2VFbnRlckRlbGF5XT1cIm9oLm1vdXNlRW50ZXJEZWxheVwiXG4gICAgICAgICAgICAgICAgICBbbnpUb29sdGlwTW91c2VMZWF2ZURlbGF5XT1cIm9oLm1vdXNlTGVhdmVEZWxheVwiXG4gICAgICAgICAgICAgICAgICBuei1pY29uXG4gICAgICAgICAgICAgICAgICBbbnpUeXBlXT1cIm9oLmljb24hXCJcbiAgICAgICAgICAgICAgICA+PC9pPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgfSBAZWxzZSB7XG4gICAgICAgICAgQGlmIChncmlkX3NwYW4gPT09IDApIHtcbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJhbGxcIiAvPlxuICAgICAgICAgICAgPG56LWNoZWNrYm94LWdyb3VwIFtuZ01vZGVsXT1cImRhdGFcIiAobmdNb2RlbENoYW5nZSk9XCJub3RpZnlTZXQoKVwiIC8+XG4gICAgICAgICAgfSBAZWxzZSB7XG4gICAgICAgICAgICA8bnotY2hlY2tib3gtd3JhcHBlciBjbGFzcz1cInNmX19jaGVja2JveC1saXN0XCIgKG56T25DaGFuZ2UpPVwiZ3JvdXBJbkdyaWRDaGFuZ2UoJGV2ZW50KVwiPlxuICAgICAgICAgICAgICA8ZGl2IG56LXJvdz5cbiAgICAgICAgICAgICAgICBAaWYgKHVpLmNoZWNrQWxsKSB7XG4gICAgICAgICAgICAgICAgICA8ZGl2IG56LWNvbCBbbnpTcGFuXT1cImdyaWRfc3BhblwiPlxuICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiYWxsXCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBAZm9yIChpIG9mIGRhdGE7IHRyYWNrICRpbmRleCkge1xuICAgICAgICAgICAgICAgICAgPGRpdiBuei1jb2wgW256U3Bhbl09XCJncmlkX3NwYW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIG56LWNoZWNrYm94IFtuelZhbHVlXT1cImkudmFsdWVcIiBbbmdNb2RlbF09XCJpLmNoZWNrZWRcIiBbbnpEaXNhYmxlZF09XCJpLmRpc2FibGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAge3sgaS5sYWJlbCB9fVxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbnotY2hlY2tib3gtd3JhcHBlcj5cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICA8L3NmLWl0ZW0td3JhcD5gLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBDaGVja2JveFdpZGdldCBleHRlbmRzIENvbnRyb2xVSVdpZGdldDxTRkNoZWNrYm94V2lkZ2V0U2NoZW1hPiB7XG4gIGRhdGE6IFNGU2NoZW1hRW51bVtdID0gW107XG4gIGFsbENoZWNrZWQgPSBmYWxzZTtcbiAgaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICBncmlkX3NwYW4hOiBudW1iZXI7XG4gIGxhYmVsVGl0bGU6IHN0cmluZyA9IGBgO1xuICBpbml0ZWQgPSBmYWxzZTtcblxuICByZXNldCh2YWx1ZTogU0ZWYWx1ZSk6IHZvaWQge1xuICAgIHRoaXMuaW5pdGVkID0gZmFsc2U7XG4gICAgZ2V0RGF0YSh0aGlzLnNjaGVtYSwgdGhpcy51aSwgdmFsdWUpLnN1YnNjcmliZShsaXN0ID0+IHtcbiAgICAgIHRoaXMuZGF0YSA9IGxpc3Q7XG4gICAgICB0aGlzLmFsbENoZWNrZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5sYWJlbFRpdGxlID0gbGlzdC5sZW5ndGggPT09IDAgPyAnJyA6ICh0aGlzLnNjaGVtYS50aXRsZSBhcyBzdHJpbmcpO1xuICAgICAgY29uc3QgeyBzcGFuIH0gPSB0aGlzLnVpO1xuICAgICAgdGhpcy5ncmlkX3NwYW4gPSBzcGFuICYmIHNwYW4gPiAwID8gc3BhbiA6IDA7XG5cbiAgICAgIHRoaXMudXBkYXRlQWxsQ2hlY2tlZCgpO1xuICAgICAgdGhpcy5pbml0ZWQgPSB0cnVlO1xuICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gIH1cblxuICBfc2V0VmFsdWUodmFsdWU6IFNGVmFsdWUpOiB2b2lkIHtcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgICB0aGlzLm5vdGlmeUNoYW5nZSh2YWx1ZSk7XG4gIH1cblxuICBub3RpZnlTZXQoKTogdm9pZCB7XG4gICAgY29uc3QgY2hlY2tMaXN0ID0gdGhpcy5kYXRhLmZpbHRlcih3ID0+IHcuY2hlY2tlZCk7XG4gICAgdGhpcy51cGRhdGVBbGxDaGVja2VkKCkuc2V0VmFsdWUoY2hlY2tMaXN0Lm1hcChpdGVtID0+IGl0ZW0udmFsdWUpKTtcbiAgICB0aGlzLm5vdGlmeUNoYW5nZShjaGVja0xpc3QpO1xuICB9XG5cbiAgZ3JvdXBJbkdyaWRDaGFuZ2UodmFsdWVzOiBTRlZhbHVlW10pOiB2b2lkIHtcbiAgICB0aGlzLmRhdGEuZm9yRWFjaChpdGVtID0+IChpdGVtLmNoZWNrZWQgPSB2YWx1ZXMuaW5kZXhPZihpdGVtLnZhbHVlKSAhPT0gLTEpKTtcbiAgICB0aGlzLm5vdGlmeVNldCgpO1xuICB9XG5cbiAgb25BbGxDaGVja2VkKCk6IHZvaWQge1xuICAgIHRoaXMuZGF0YS5mb3JFYWNoKGl0ZW0gPT4gKGl0ZW0uY2hlY2tlZCA9IHRoaXMuYWxsQ2hlY2tlZCkpO1xuICAgIHRoaXMubm90aWZ5U2V0KCk7XG4gIH1cblxuICB1cGRhdGVBbGxDaGVja2VkKCk6IHRoaXMge1xuICAgIGlmICh0aGlzLmRhdGEuZXZlcnkoaXRlbSA9PiBpdGVtLmNoZWNrZWQgIT09IHRydWUpKSB7XG4gICAgICB0aGlzLmFsbENoZWNrZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5kYXRhLmV2ZXJ5KGl0ZW0gPT4gaXRlbS5jaGVja2VkID09PSB0cnVlKSkge1xuICAgICAgdGhpcy5hbGxDaGVja2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMuaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmluZGV0ZXJtaW5hdGUgPSB0cnVlO1xuICAgIH1cbiAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHByaXZhdGUgbm90aWZ5Q2hhbmdlKHJlczogYm9vbGVhbiB8IFNGU2NoZW1hRW51bVtdKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudWkuY2hhbmdlKSB0aGlzLnVpLmNoYW5nZShyZXMpO1xuICB9XG59XG4iXX0=