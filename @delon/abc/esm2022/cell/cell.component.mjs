import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewEncapsulation, booleanAttribute, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { updateHostClass } from '@delon/util/browser';
import { WINDOW } from '@delon/util/token';
import { NzBadgeComponent } from 'ng-zorro-antd/badge';
import { NzCheckboxComponent } from 'ng-zorro-antd/checkbox';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { NzImageModule, NzImageService } from 'ng-zorro-antd/image';
import { NzRadioComponent } from 'ng-zorro-antd/radio';
import { NzTagComponent } from 'ng-zorro-antd/tag';
import { NzTooltipDirective } from 'ng-zorro-antd/tooltip';
import { CellHostDirective } from './cell-host.directive';
import { CellService } from './cell.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
export class CellComponent {
    constructor() {
        this.srv = inject(CellService);
        this.router = inject(Router);
        this.cdr = inject(ChangeDetectorRef);
        this.renderer = inject(Renderer2);
        this.imgSrv = inject(NzImageService);
        this.win = inject(WINDOW);
        this.el = inject(ElementRef).nativeElement;
        this.showDefault = false;
        this.valueChange = new EventEmitter();
        this.loading = false;
        this.disabled = false;
    }
    get safeOpt() {
        return this.res?.options ?? {};
    }
    get isText() {
        return this.res?.safeHtml === 'text';
    }
    get hostData() {
        return {
            value: this.value,
            options: this.srv.fixOptions(this.options)
        };
    }
    updateValue() {
        this.destroy$?.unsubscribe();
        this.destroy$ = this.srv.get(this.value, this.options).subscribe(res => {
            this.res = res;
            this.showDefault = this.value == this.safeOpt.default.condition;
            this._text = res.result?.text ?? '';
            this._unit = res.result?.unit ?? this.safeOpt?.unit;
            this.cdr.detectChanges();
            this.setClass();
        });
    }
    setClass() {
        const { el, renderer } = this;
        const { renderType, size, type } = this.safeOpt;
        updateHostClass(el, renderer, {
            [`cell`]: true,
            [`cell__${renderType}`]: renderType != null,
            [`cell__${size}`]: size != null,
            [`cell__has-unit`]: this._unit,
            [`cell__has-default`]: this.showDefault,
            [`cell__disabled`]: this.disabled
        });
        el.setAttribute('data-type', `${type}`);
    }
    ngOnChanges(changes) {
        // Do not call updateValue when only updating loading, disabled
        if (Object.keys(changes).every(k => ['loading', 'disabled'].includes(k))) {
            this.setClass();
        }
        else {
            this.updateValue();
        }
    }
    change(value) {
        this.value = value;
        this.valueChange.emit(value);
    }
    _link(e) {
        e.preventDefault();
        e.stopPropagation();
        if (this.disabled)
            return;
        const link = this.safeOpt.link;
        const url = link?.url;
        if (url == null)
            return;
        if (/https?:\/\//g.test(url)) {
            this.win.open(url, link?.target);
        }
        else {
            this.router.navigateByUrl(url);
        }
    }
    _showImg(img) {
        const config = this.safeOpt.img;
        if (config == null || config.big == null)
            return;
        let idx = -1;
        const list = this._text.map((p, index) => {
            if (idx === -1 && p === img)
                idx = index;
            return typeof config.big === 'function' ? config.big(p) : p;
        });
        this.imgSrv
            .preview(list.map(p => ({ src: p })), config.previewOptions)
            .switchTo(idx);
    }
    ngOnDestroy() {
        this.destroy$?.unsubscribe();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: CellComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.1.0", type: CellComponent, isStandalone: true, selector: "cell, [cell]", inputs: { value: "value", options: "options", loading: ["loading", "loading", booleanAttribute], disabled: ["disabled", "disabled", booleanAttribute] }, outputs: { valueChange: "valueChange" }, exportAs: ["cell"], usesOnChanges: true, ngImport: i0, template: `
    <ng-template #text>
      @switch (safeOpt.type) {
        @case ('checkbox') {
          <label nz-checkbox [nzDisabled]="disabled" [ngModel]="value" (ngModelChange)="change($event)">
            {{ safeOpt.checkbox?.label }}
          </label>
        }
        @case ('radio') {
          <label nz-radio [nzDisabled]="disabled" [ngModel]="value" (ngModelChange)="change($event)">
            {{ safeOpt.radio?.label }}
          </label>
        }
        @case ('link') {
          <a (click)="_link($event)" [attr.target]="safeOpt.link?.target" [attr.title]="value" [innerHTML]="_text"></a>
        }
        @case ('tag') {
          <nz-tag [nzColor]="res?.result?.color">
            <span [innerHTML]="_text"></span>
          </nz-tag>
        }
        @case ('badge') {
          <nz-badge [nzStatus]="res?.result?.color" nzText="{{ _text }}" />
        }
        @case ('widget') {
          <ng-template cell-widget-host [data]="hostData" />
        }
        @case ('img') {
          @for (i of $any(_text); track $index) {
            <img
              [attr.src]="i"
              [attr.height]="safeOpt.img?.size"
              [attr.width]="safeOpt.img?.size"
              (click)="_showImg(i)"
              class="img"
              [class.point]="safeOpt.img?.big"
            />
          }
        }
        @default {
          @if (isText) {
            <span [innerText]="_text" [attr.title]="value"></span>
          } @else {
            <span [innerHTML]="_text" [attr.title]="value"></span>
          }
          @if (_unit) {
            <span class="unit">{{ _unit }}</span>
          }
        }
      }
    </ng-template>
    <ng-template #textWrap>
      @if (showDefault) {
        {{ safeOpt.default?.text }}
      } @else {
        @if (safeOpt.tooltip) {
          <span [nz-tooltip]="safeOpt.tooltip">
            <ng-template [ngTemplateOutlet]="text" />
          </span>
        } @else {
          <ng-template [ngTemplateOutlet]="text" />
        }
      }
    </ng-template>
    @if (loading) {
      <span nz-icon nzType="loading"></span>
    } @else {
      <ng-template [ngTemplateOutlet]="textWrap" />
    }
  `, isInline: true, dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: NzCheckboxComponent, selector: "[nz-checkbox]", inputs: ["nzValue", "nzAutoFocus", "nzDisabled", "nzIndeterminate", "nzChecked", "nzId"], outputs: ["nzCheckedChange"], exportAs: ["nzCheckbox"] }, { kind: "component", type: NzRadioComponent, selector: "[nz-radio],[nz-radio-button]", inputs: ["nzValue", "nzDisabled", "nzAutoFocus"], exportAs: ["nzRadio"] }, { kind: "directive", type: NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "component", type: NzTagComponent, selector: "nz-tag", inputs: ["nzMode", "nzColor", "nzChecked", "nzBordered"], outputs: ["nzOnClose", "nzCheckedChange"], exportAs: ["nzTag"] }, { kind: "component", type: NzBadgeComponent, selector: "nz-badge", inputs: ["nzShowZero", "nzShowDot", "nzStandalone", "nzDot", "nzOverflowCount", "nzColor", "nzStyle", "nzText", "nzTitle", "nzStatus", "nzCount", "nzOffset", "nzSize"], exportAs: ["nzBadge"] }, { kind: "directive", type: NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "cdkConnectedOverlayPush", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }, { kind: "ngmodule", type: NzImageModule }, { kind: "directive", type: CellHostDirective, selector: "[cell-widget-host]", inputs: ["data"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: CellComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'cell, [cell]',
                    template: `
    <ng-template #text>
      @switch (safeOpt.type) {
        @case ('checkbox') {
          <label nz-checkbox [nzDisabled]="disabled" [ngModel]="value" (ngModelChange)="change($event)">
            {{ safeOpt.checkbox?.label }}
          </label>
        }
        @case ('radio') {
          <label nz-radio [nzDisabled]="disabled" [ngModel]="value" (ngModelChange)="change($event)">
            {{ safeOpt.radio?.label }}
          </label>
        }
        @case ('link') {
          <a (click)="_link($event)" [attr.target]="safeOpt.link?.target" [attr.title]="value" [innerHTML]="_text"></a>
        }
        @case ('tag') {
          <nz-tag [nzColor]="res?.result?.color">
            <span [innerHTML]="_text"></span>
          </nz-tag>
        }
        @case ('badge') {
          <nz-badge [nzStatus]="res?.result?.color" nzText="{{ _text }}" />
        }
        @case ('widget') {
          <ng-template cell-widget-host [data]="hostData" />
        }
        @case ('img') {
          @for (i of $any(_text); track $index) {
            <img
              [attr.src]="i"
              [attr.height]="safeOpt.img?.size"
              [attr.width]="safeOpt.img?.size"
              (click)="_showImg(i)"
              class="img"
              [class.point]="safeOpt.img?.big"
            />
          }
        }
        @default {
          @if (isText) {
            <span [innerText]="_text" [attr.title]="value"></span>
          } @else {
            <span [innerHTML]="_text" [attr.title]="value"></span>
          }
          @if (_unit) {
            <span class="unit">{{ _unit }}</span>
          }
        }
      }
    </ng-template>
    <ng-template #textWrap>
      @if (showDefault) {
        {{ safeOpt.default?.text }}
      } @else {
        @if (safeOpt.tooltip) {
          <span [nz-tooltip]="safeOpt.tooltip">
            <ng-template [ngTemplateOutlet]="text" />
          </span>
        } @else {
          <ng-template [ngTemplateOutlet]="text" />
        }
      }
    </ng-template>
    @if (loading) {
      <span nz-icon nzType="loading"></span>
    } @else {
      <ng-template [ngTemplateOutlet]="textWrap" />
    }
  `,
                    exportAs: 'cell',
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    standalone: true,
                    imports: [
                        FormsModule,
                        NgTemplateOutlet,
                        NzCheckboxComponent,
                        NzRadioComponent,
                        NzIconDirective,
                        NzTagComponent,
                        NzBadgeComponent,
                        NzTooltipDirective,
                        NzImageModule,
                        CellHostDirective
                    ]
                }]
        }], propDecorators: { value: [{
                type: Input
            }], valueChange: [{
                type: Output
            }], options: [{
                type: Input
            }], loading: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], disabled: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvY2VsbC9jZWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNuRCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNOLFNBQVMsRUFFVCxpQkFBaUIsRUFDakIsZ0JBQWdCLEVBQ2hCLE1BQU0sRUFDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBR3pDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFN0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBVyxhQUFhLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDN0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRTNELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxXQUFXLEVB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QUNmLGNBQWMsNktBQ2QsZ0JBQWdCLHFQQUNoQixrQkFBa0Isb2NBQ2xCLGFBQWEsK0JBQ2IsaUJBQWlCOzsyRkFHUixhQUFhO2tCQTFGekIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FxRVQ7b0JBQ0QsUUFBUSxFQUFFLE1BQU07b0JBQ2hCLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLE9BQU8sRUFBRTt3QkFDUCxXQUFXO3dCQUNYLGdCQUFnQjt3QkFDaEIsbUJBQW1CO3dCQUNuQixnQkFBZ0I7d0JBQ2hCLGVBQWU7d0JBQ2YsY0FBYzt3QkFDZCxnQkFBZ0I7d0JBQ2hCLGtCQUFrQjt3QkFDbEIsYUFBYTt3QkFDYixpQkFBaUI7cUJBQ2xCO2lCQUNGOzhCQWlCVSxLQUFLO3NCQUFiLEtBQUs7Z0JBQ2EsV0FBVztzQkFBN0IsTUFBTTtnQkFDRSxPQUFPO3NCQUFmLEtBQUs7Z0JBQ2tDLE9BQU87c0JBQTlDLEtBQUs7dUJBQUMsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUU7Z0JBQ0UsUUFBUTtzQkFBL0MsS0FBSzt1QkFBQyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nVGVtcGxhdGVPdXRsZXQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgYm9vbGVhbkF0dHJpYnV0ZSxcbiAgaW5qZWN0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgdHlwZSB7IFNhZmVWYWx1ZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyB1cGRhdGVIb3N0Q2xhc3MgfSBmcm9tICdAZGVsb24vdXRpbC9icm93c2VyJztcbmltcG9ydCB7IFdJTkRPVyB9IGZyb20gJ0BkZWxvbi91dGlsL3Rva2VuJztcbmltcG9ydCB7IE56QmFkZ2VDb21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL2JhZGdlJztcbmltcG9ydCB7IE56Q2hlY2tib3hDb21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL2NoZWNrYm94JztcbmltcG9ydCB0eXBlIHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IE56SWNvbkRpcmVjdGl2ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaWNvbic7XG5pbXBvcnQgeyBOekltYWdlLCBOekltYWdlTW9kdWxlLCBOekltYWdlU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaW1hZ2UnO1xuaW1wb3J0IHsgTnpSYWRpb0NvbXBvbmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQvcmFkaW8nO1xuaW1wb3J0IHsgTnpUYWdDb21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL3RhZyc7XG5pbXBvcnQgeyBOelRvb2x0aXBEaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL3Rvb2x0aXAnO1xuXG5pbXBvcnQgeyBDZWxsSG9zdERpcmVjdGl2ZSB9IGZyb20gJy4vY2VsbC1ob3N0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDZWxsU2VydmljZSB9IGZyb20gJy4vY2VsbC5zZXJ2aWNlJztcbmltcG9ydCB0eXBlIHsgQ2VsbERlZmF1bHRUZXh0LCBDZWxsT3B0aW9ucywgQ2VsbFRleHRSZXN1bHQsIENlbGxWYWx1ZSwgQ2VsbFdpZGdldERhdGEgfSBmcm9tICcuL2NlbGwudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZWxsLCBbY2VsbF0nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy10ZW1wbGF0ZSAjdGV4dD5cbiAgICAgIEBzd2l0Y2ggKHNhZmVPcHQudHlwZSkge1xuICAgICAgICBAY2FzZSAoJ2NoZWNrYm94Jykge1xuICAgICAgICAgIDxsYWJlbCBuei1jaGVja2JveCBbbnpEaXNhYmxlZF09XCJkaXNhYmxlZFwiIFtuZ01vZGVsXT1cInZhbHVlXCIgKG5nTW9kZWxDaGFuZ2UpPVwiY2hhbmdlKCRldmVudClcIj5cbiAgICAgICAgICAgIHt7IHNhZmVPcHQuY2hlY2tib3g/LmxhYmVsIH19XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgfVxuICAgICAgICBAY2FzZSAoJ3JhZGlvJykge1xuICAgICAgICAgIDxsYWJlbCBuei1yYWRpbyBbbnpEaXNhYmxlZF09XCJkaXNhYmxlZFwiIFtuZ01vZGVsXT1cInZhbHVlXCIgKG5nTW9kZWxDaGFuZ2UpPVwiY2hhbmdlKCRldmVudClcIj5cbiAgICAgICAgICAgIHt7IHNhZmVPcHQucmFkaW8/LmxhYmVsIH19XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgfVxuICAgICAgICBAY2FzZSAoJ2xpbmsnKSB7XG4gICAgICAgICAgPGEgKGNsaWNrKT1cIl9saW5rKCRldmVudClcIiBbYXR0ci50YXJnZXRdPVwic2FmZU9wdC5saW5rPy50YXJnZXRcIiBbYXR0ci50aXRsZV09XCJ2YWx1ZVwiIFtpbm5lckhUTUxdPVwiX3RleHRcIj48L2E+XG4gICAgICAgIH1cbiAgICAgICAgQGNhc2UgKCd0YWcnKSB7XG4gICAgICAgICAgPG56LXRhZyBbbnpDb2xvcl09XCJyZXM/LnJlc3VsdD8uY29sb3JcIj5cbiAgICAgICAgICAgIDxzcGFuIFtpbm5lckhUTUxdPVwiX3RleHRcIj48L3NwYW4+XG4gICAgICAgICAgPC9uei10YWc+XG4gICAgICAgIH1cbiAgICAgICAgQGNhc2UgKCdiYWRnZScpIHtcbiAgICAgICAgICA8bnotYmFkZ2UgW256U3RhdHVzXT1cInJlcz8ucmVzdWx0Py5jb2xvclwiIG56VGV4dD1cInt7IF90ZXh0IH19XCIgLz5cbiAgICAgICAgfVxuICAgICAgICBAY2FzZSAoJ3dpZGdldCcpIHtcbiAgICAgICAgICA8bmctdGVtcGxhdGUgY2VsbC13aWRnZXQtaG9zdCBbZGF0YV09XCJob3N0RGF0YVwiIC8+XG4gICAgICAgIH1cbiAgICAgICAgQGNhc2UgKCdpbWcnKSB7XG4gICAgICAgICAgQGZvciAoaSBvZiAkYW55KF90ZXh0KTsgdHJhY2sgJGluZGV4KSB7XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIFthdHRyLnNyY109XCJpXCJcbiAgICAgICAgICAgICAgW2F0dHIuaGVpZ2h0XT1cInNhZmVPcHQuaW1nPy5zaXplXCJcbiAgICAgICAgICAgICAgW2F0dHIud2lkdGhdPVwic2FmZU9wdC5pbWc/LnNpemVcIlxuICAgICAgICAgICAgICAoY2xpY2spPVwiX3Nob3dJbWcoaSlcIlxuICAgICAgICAgICAgICBjbGFzcz1cImltZ1wiXG4gICAgICAgICAgICAgIFtjbGFzcy5wb2ludF09XCJzYWZlT3B0LmltZz8uYmlnXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEBkZWZhdWx0IHtcbiAgICAgICAgICBAaWYgKGlzVGV4dCkge1xuICAgICAgICAgICAgPHNwYW4gW2lubmVyVGV4dF09XCJfdGV4dFwiIFthdHRyLnRpdGxlXT1cInZhbHVlXCI+PC9zcGFuPlxuICAgICAgICAgIH0gQGVsc2Uge1xuICAgICAgICAgICAgPHNwYW4gW2lubmVySFRNTF09XCJfdGV4dFwiIFthdHRyLnRpdGxlXT1cInZhbHVlXCI+PC9zcGFuPlxuICAgICAgICAgIH1cbiAgICAgICAgICBAaWYgKF91bml0KSB7XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInVuaXRcIj57eyBfdW5pdCB9fTwvc3Bhbj5cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZSAjdGV4dFdyYXA+XG4gICAgICBAaWYgKHNob3dEZWZhdWx0KSB7XG4gICAgICAgIHt7IHNhZmVPcHQuZGVmYXVsdD8udGV4dCB9fVxuICAgICAgfSBAZWxzZSB7XG4gICAgICAgIEBpZiAoc2FmZU9wdC50b29sdGlwKSB7XG4gICAgICAgICAgPHNwYW4gW256LXRvb2x0aXBdPVwic2FmZU9wdC50b29sdGlwXCI+XG4gICAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwidGV4dFwiIC8+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICB9IEBlbHNlIHtcbiAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwidGV4dFwiIC8+XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIEBpZiAobG9hZGluZykge1xuICAgICAgPHNwYW4gbnotaWNvbiBuelR5cGU9XCJsb2FkaW5nXCI+PC9zcGFuPlxuICAgIH0gQGVsc2Uge1xuICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRleHRXcmFwXCIgLz5cbiAgICB9XG4gIGAsXG4gIGV4cG9ydEFzOiAnY2VsbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW1xuICAgIEZvcm1zTW9kdWxlLFxuICAgIE5nVGVtcGxhdGVPdXRsZXQsXG4gICAgTnpDaGVja2JveENvbXBvbmVudCxcbiAgICBOelJhZGlvQ29tcG9uZW50LFxuICAgIE56SWNvbkRpcmVjdGl2ZSxcbiAgICBOelRhZ0NvbXBvbmVudCxcbiAgICBOekJhZGdlQ29tcG9uZW50LFxuICAgIE56VG9vbHRpcERpcmVjdGl2ZSxcbiAgICBOekltYWdlTW9kdWxlLFxuICAgIENlbGxIb3N0RGlyZWN0aXZlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ2VsbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSByZWFkb25seSBzcnYgPSBpbmplY3QoQ2VsbFNlcnZpY2UpO1xuICBwcml2YXRlIHJlYWRvbmx5IHJvdXRlciA9IGluamVjdChSb3V0ZXIpO1xuICBwcml2YXRlIHJlYWRvbmx5IGNkciA9IGluamVjdChDaGFuZ2VEZXRlY3RvclJlZik7XG4gIHByaXZhdGUgcmVhZG9ubHkgcmVuZGVyZXIgPSBpbmplY3QoUmVuZGVyZXIyKTtcbiAgcHJpdmF0ZSByZWFkb25seSBpbWdTcnYgPSBpbmplY3QoTnpJbWFnZVNlcnZpY2UpO1xuICBwcml2YXRlIHJlYWRvbmx5IHdpbiA9IGluamVjdChXSU5ET1cpO1xuICBwcml2YXRlIHJlYWRvbmx5IGVsOiBIVE1MRWxlbWVudCA9IGluamVjdChFbGVtZW50UmVmKS5uYXRpdmVFbGVtZW50O1xuXG4gIHByaXZhdGUgZGVzdHJveSQ/OiBTdWJzY3JpcHRpb247XG5cbiAgX3RleHQhOiBzdHJpbmcgfCBTYWZlVmFsdWUgfCBzdHJpbmdbXSB8IG51bWJlcjtcbiAgX3VuaXQ/OiBzdHJpbmc7XG4gIHJlcz86IENlbGxUZXh0UmVzdWx0O1xuICBzaG93RGVmYXVsdCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIHZhbHVlPzogQ2VsbFZhbHVlO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgdmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE56U2FmZUFueT4oKTtcbiAgQElucHV0KCkgb3B0aW9ucz86IENlbGxPcHRpb25zO1xuICBASW5wdXQoeyB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGUgfSkgbG9hZGluZyA9IGZhbHNlO1xuICBASW5wdXQoeyB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGUgfSkgZGlzYWJsZWQgPSBmYWxzZTtcblxuICBnZXQgc2FmZU9wdCgpOiBDZWxsT3B0aW9ucyB7XG4gICAgcmV0dXJuIHRoaXMucmVzPy5vcHRpb25zID8/IHt9O1xuICB9XG5cbiAgZ2V0IGlzVGV4dCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5yZXM/LnNhZmVIdG1sID09PSAndGV4dCc7XG4gIH1cblxuICBnZXQgaG9zdERhdGEoKTogQ2VsbFdpZGdldERhdGEge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgIG9wdGlvbnM6IHRoaXMuc3J2LmZpeE9wdGlvbnModGhpcy5vcHRpb25zKVxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVZhbHVlKCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQ/LnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5kZXN0cm95JCA9IHRoaXMuc3J2LmdldCh0aGlzLnZhbHVlLCB0aGlzLm9wdGlvbnMpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgdGhpcy5yZXMgPSByZXM7XG4gICAgICB0aGlzLnNob3dEZWZhdWx0ID0gdGhpcy52YWx1ZSA9PSAodGhpcy5zYWZlT3B0LmRlZmF1bHQgYXMgQ2VsbERlZmF1bHRUZXh0KS5jb25kaXRpb247XG4gICAgICB0aGlzLl90ZXh0ID0gcmVzLnJlc3VsdD8udGV4dCA/PyAnJztcbiAgICAgIHRoaXMuX3VuaXQgPSByZXMucmVzdWx0Py51bml0ID8/IHRoaXMuc2FmZU9wdD8udW5pdDtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIHRoaXMuc2V0Q2xhc3MoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0Q2xhc3MoKTogdm9pZCB7XG4gICAgY29uc3QgeyBlbCwgcmVuZGVyZXIgfSA9IHRoaXM7XG4gICAgY29uc3QgeyByZW5kZXJUeXBlLCBzaXplLCB0eXBlIH0gPSB0aGlzLnNhZmVPcHQ7XG4gICAgdXBkYXRlSG9zdENsYXNzKGVsLCByZW5kZXJlciwge1xuICAgICAgW2BjZWxsYF06IHRydWUsXG4gICAgICBbYGNlbGxfXyR7cmVuZGVyVHlwZX1gXTogcmVuZGVyVHlwZSAhPSBudWxsLFxuICAgICAgW2BjZWxsX18ke3NpemV9YF06IHNpemUgIT0gbnVsbCxcbiAgICAgIFtgY2VsbF9faGFzLXVuaXRgXTogdGhpcy5fdW5pdCxcbiAgICAgIFtgY2VsbF9faGFzLWRlZmF1bHRgXTogdGhpcy5zaG93RGVmYXVsdCxcbiAgICAgIFtgY2VsbF9fZGlzYWJsZWRgXTogdGhpcy5kaXNhYmxlZFxuICAgIH0pO1xuICAgIGVsLnNldEF0dHJpYnV0ZSgnZGF0YS10eXBlJywgYCR7dHlwZX1gKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgW3AgaW4ga2V5b2YgQ2VsbENvbXBvbmVudF0/OiBTaW1wbGVDaGFuZ2UgfSk6IHZvaWQge1xuICAgIC8vIERvIG5vdCBjYWxsIHVwZGF0ZVZhbHVlIHdoZW4gb25seSB1cGRhdGluZyBsb2FkaW5nLCBkaXNhYmxlZFxuICAgIGlmIChPYmplY3Qua2V5cyhjaGFuZ2VzKS5ldmVyeShrID0+IFsnbG9hZGluZycsICdkaXNhYmxlZCddLmluY2x1ZGVzKGspKSkge1xuICAgICAgdGhpcy5zZXRDbGFzcygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVwZGF0ZVZhbHVlKCk7XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlKHZhbHVlOiBOelNhZmVBbnkpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHZhbHVlKTtcbiAgfVxuXG4gIF9saW5rKGU6IEV2ZW50KTogdm9pZCB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkgcmV0dXJuO1xuXG4gICAgY29uc3QgbGluayA9IHRoaXMuc2FmZU9wdC5saW5rO1xuICAgIGNvbnN0IHVybCA9IGxpbms/LnVybDtcbiAgICBpZiAodXJsID09IG51bGwpIHJldHVybjtcblxuICAgIGlmICgvaHR0cHM/OlxcL1xcLy9nLnRlc3QodXJsKSkge1xuICAgICAgdGhpcy53aW4ub3Blbih1cmwsIGxpbms/LnRhcmdldCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwodXJsKTtcbiAgICB9XG4gIH1cblxuICBfc2hvd0ltZyhpbWc6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuc2FmZU9wdC5pbWc7XG4gICAgaWYgKGNvbmZpZyA9PSBudWxsIHx8IGNvbmZpZy5iaWcgPT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgbGV0IGlkeCA9IC0xO1xuICAgIGNvbnN0IGxpc3QgPSAodGhpcy5fdGV4dCBhcyBzdHJpbmdbXSkubWFwKChwLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGlkeCA9PT0gLTEgJiYgcCA9PT0gaW1nKSBpZHggPSBpbmRleDtcbiAgICAgIHJldHVybiB0eXBlb2YgY29uZmlnLmJpZyA9PT0gJ2Z1bmN0aW9uJyA/IGNvbmZpZy5iaWcocCkgOiBwO1xuICAgIH0pO1xuICAgIHRoaXMuaW1nU3J2XG4gICAgICAucHJldmlldyhcbiAgICAgICAgbGlzdC5tYXAocCA9PiAoeyBzcmM6IHAgfSkgYXMgTnpJbWFnZSksXG4gICAgICAgIGNvbmZpZy5wcmV2aWV3T3B0aW9uc1xuICAgICAgKVxuICAgICAgLnN3aXRjaFRvKGlkeCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkPy51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=