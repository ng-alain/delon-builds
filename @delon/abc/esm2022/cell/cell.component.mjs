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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.4", ngImport: i0, type: CellComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.2.4", type: CellComponent, isStandalone: true, selector: "cell, [cell]", inputs: { value: "value", options: "options", loading: ["loading", "loading", booleanAttribute], disabled: ["disabled", "disabled", booleanAttribute] }, outputs: { valueChange: "valueChange" }, exportAs: ["cell"], usesOnChanges: true, ngImport: i0, template: `
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
          @if (res != null) {
            <ng-template cell-widget-host [data]="res" />
          }
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.4", ngImport: i0, type: CellComponent, decorators: [{
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
          @if (res != null) {
            <ng-template cell-widget-host [data]="res" />
          }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvY2VsbC9jZWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNuRCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNOLFNBQVMsRUFFVCxpQkFBaUIsRUFDakIsZ0JBQWdCLEVBQ2hCLE1BQU0sRUFDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBR3pDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFN0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBVyxhQUFhLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDN0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRTNELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxXQUFXLEVB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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F1RVQ7b0JBQ0QsUUFBUSxFQUFFLE1BQU07b0JBQ2hCLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLE9BQU8sRUFBRTt3QkFDUCxXQUFXO3dCQUNYLGdCQUFnQjt3QkFDaEIsbUJBQW1CO3dCQUNuQixnQkFBZ0I7d0JBQ2hCLGVBQWU7d0JBQ2YsY0FBYzt3QkFDZCxnQkFBZ0I7d0JBQ2hCLGtCQUFrQjt3QkFDbEIsYUFBYTt3QkFDYixpQkFBaUI7cUJBQ2xCO2lCQUNGOzhCQWlCVSxLQUFLO3NCQUFiLEtBQUs7Z0JBQ2EsV0FBVztzQkFBN0IsTUFBTTtnQkFDRSxPQUFPO3NCQUFmLEtBQUs7Z0JBQ2tDLE9BQU87c0JBQTlDLEtBQUs7dUJBQUMsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUU7Z0JBQ0UsUUFBUTtzQkFBL0MsS0FBSzt1QkFBQyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nVGVtcGxhdGVPdXRsZXQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgYm9vbGVhbkF0dHJpYnV0ZSxcbiAgaW5qZWN0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgdHlwZSB7IFNhZmVWYWx1ZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyB1cGRhdGVIb3N0Q2xhc3MgfSBmcm9tICdAZGVsb24vdXRpbC9icm93c2VyJztcbmltcG9ydCB7IFdJTkRPVyB9IGZyb20gJ0BkZWxvbi91dGlsL3Rva2VuJztcbmltcG9ydCB7IE56QmFkZ2VDb21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL2JhZGdlJztcbmltcG9ydCB7IE56Q2hlY2tib3hDb21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL2NoZWNrYm94JztcbmltcG9ydCB0eXBlIHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IE56SWNvbkRpcmVjdGl2ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaWNvbic7XG5pbXBvcnQgeyBOekltYWdlLCBOekltYWdlTW9kdWxlLCBOekltYWdlU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaW1hZ2UnO1xuaW1wb3J0IHsgTnpSYWRpb0NvbXBvbmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQvcmFkaW8nO1xuaW1wb3J0IHsgTnpUYWdDb21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL3RhZyc7XG5pbXBvcnQgeyBOelRvb2x0aXBEaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL3Rvb2x0aXAnO1xuXG5pbXBvcnQgeyBDZWxsSG9zdERpcmVjdGl2ZSB9IGZyb20gJy4vY2VsbC1ob3N0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDZWxsU2VydmljZSB9IGZyb20gJy4vY2VsbC5zZXJ2aWNlJztcbmltcG9ydCB0eXBlIHsgQ2VsbERlZmF1bHRUZXh0LCBDZWxsT3B0aW9ucywgQ2VsbFRleHRSZXN1bHQsIENlbGxWYWx1ZSB9IGZyb20gJy4vY2VsbC50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NlbGwsIFtjZWxsXScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLXRlbXBsYXRlICN0ZXh0PlxuICAgICAgQHN3aXRjaCAoc2FmZU9wdC50eXBlKSB7XG4gICAgICAgIEBjYXNlICgnY2hlY2tib3gnKSB7XG4gICAgICAgICAgPGxhYmVsIG56LWNoZWNrYm94IFtuekRpc2FibGVkXT1cImRpc2FibGVkXCIgW25nTW9kZWxdPVwidmFsdWVcIiAobmdNb2RlbENoYW5nZSk9XCJjaGFuZ2UoJGV2ZW50KVwiPlxuICAgICAgICAgICAge3sgc2FmZU9wdC5jaGVja2JveD8ubGFiZWwgfX1cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICB9XG4gICAgICAgIEBjYXNlICgncmFkaW8nKSB7XG4gICAgICAgICAgPGxhYmVsIG56LXJhZGlvIFtuekRpc2FibGVkXT1cImRpc2FibGVkXCIgW25nTW9kZWxdPVwidmFsdWVcIiAobmdNb2RlbENoYW5nZSk9XCJjaGFuZ2UoJGV2ZW50KVwiPlxuICAgICAgICAgICAge3sgc2FmZU9wdC5yYWRpbz8ubGFiZWwgfX1cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICB9XG4gICAgICAgIEBjYXNlICgnbGluaycpIHtcbiAgICAgICAgICA8YSAoY2xpY2spPVwiX2xpbmsoJGV2ZW50KVwiIFthdHRyLnRhcmdldF09XCJzYWZlT3B0Lmxpbms/LnRhcmdldFwiIFthdHRyLnRpdGxlXT1cInZhbHVlXCIgW2lubmVySFRNTF09XCJfdGV4dFwiPjwvYT5cbiAgICAgICAgfVxuICAgICAgICBAY2FzZSAoJ3RhZycpIHtcbiAgICAgICAgICA8bnotdGFnIFtuekNvbG9yXT1cInJlcz8ucmVzdWx0Py5jb2xvclwiPlxuICAgICAgICAgICAgPHNwYW4gW2lubmVySFRNTF09XCJfdGV4dFwiPjwvc3Bhbj5cbiAgICAgICAgICA8L256LXRhZz5cbiAgICAgICAgfVxuICAgICAgICBAY2FzZSAoJ2JhZGdlJykge1xuICAgICAgICAgIDxuei1iYWRnZSBbbnpTdGF0dXNdPVwicmVzPy5yZXN1bHQ/LmNvbG9yXCIgbnpUZXh0PVwie3sgX3RleHQgfX1cIiAvPlxuICAgICAgICB9XG4gICAgICAgIEBjYXNlICgnd2lkZ2V0Jykge1xuICAgICAgICAgIEBpZiAocmVzICE9IG51bGwpIHtcbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBjZWxsLXdpZGdldC1ob3N0IFtkYXRhXT1cInJlc1wiIC8+XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEBjYXNlICgnaW1nJykge1xuICAgICAgICAgIEBmb3IgKGkgb2YgJGFueShfdGV4dCk7IHRyYWNrICRpbmRleCkge1xuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBbYXR0ci5zcmNdPVwiaVwiXG4gICAgICAgICAgICAgIFthdHRyLmhlaWdodF09XCJzYWZlT3B0LmltZz8uc2l6ZVwiXG4gICAgICAgICAgICAgIFthdHRyLndpZHRoXT1cInNhZmVPcHQuaW1nPy5zaXplXCJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cIl9zaG93SW1nKGkpXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJpbWdcIlxuICAgICAgICAgICAgICBbY2xhc3MucG9pbnRdPVwic2FmZU9wdC5pbWc/LmJpZ1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBAZGVmYXVsdCB7XG4gICAgICAgICAgQGlmIChpc1RleHQpIHtcbiAgICAgICAgICAgIDxzcGFuIFtpbm5lclRleHRdPVwiX3RleHRcIiBbYXR0ci50aXRsZV09XCJ2YWx1ZVwiPjwvc3Bhbj5cbiAgICAgICAgICB9IEBlbHNlIHtcbiAgICAgICAgICAgIDxzcGFuIFtpbm5lckhUTUxdPVwiX3RleHRcIiBbYXR0ci50aXRsZV09XCJ2YWx1ZVwiPjwvc3Bhbj5cbiAgICAgICAgICB9XG4gICAgICAgICAgQGlmIChfdW5pdCkge1xuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ1bml0XCI+e3sgX3VuaXQgfX08L3NwYW4+XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGUgI3RleHRXcmFwPlxuICAgICAgQGlmIChzaG93RGVmYXVsdCkge1xuICAgICAgICB7eyBzYWZlT3B0LmRlZmF1bHQ/LnRleHQgfX1cbiAgICAgIH0gQGVsc2Uge1xuICAgICAgICBAaWYgKHNhZmVPcHQudG9vbHRpcCkge1xuICAgICAgICAgIDxzcGFuIFtuei10b29sdGlwXT1cInNhZmVPcHQudG9vbHRpcFwiPlxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRleHRcIiAvPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgfSBAZWxzZSB7XG4gICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRleHRcIiAvPlxuICAgICAgICB9XG4gICAgICB9XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICBAaWYgKGxvYWRpbmcpIHtcbiAgICAgIDxzcGFuIG56LWljb24gbnpUeXBlPVwibG9hZGluZ1wiPjwvc3Bhbj5cbiAgICB9IEBlbHNlIHtcbiAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJ0ZXh0V3JhcFwiIC8+XG4gICAgfVxuICBgLFxuICBleHBvcnRBczogJ2NlbGwnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBOZ1RlbXBsYXRlT3V0bGV0LFxuICAgIE56Q2hlY2tib3hDb21wb25lbnQsXG4gICAgTnpSYWRpb0NvbXBvbmVudCxcbiAgICBOekljb25EaXJlY3RpdmUsXG4gICAgTnpUYWdDb21wb25lbnQsXG4gICAgTnpCYWRnZUNvbXBvbmVudCxcbiAgICBOelRvb2x0aXBEaXJlY3RpdmUsXG4gICAgTnpJbWFnZU1vZHVsZSxcbiAgICBDZWxsSG9zdERpcmVjdGl2ZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIENlbGxDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgc3J2ID0gaW5qZWN0KENlbGxTZXJ2aWNlKTtcbiAgcHJpdmF0ZSByZWFkb25seSByb3V0ZXIgPSBpbmplY3QoUm91dGVyKTtcbiAgcHJpdmF0ZSByZWFkb25seSBjZHIgPSBpbmplY3QoQ2hhbmdlRGV0ZWN0b3JSZWYpO1xuICBwcml2YXRlIHJlYWRvbmx5IHJlbmRlcmVyID0gaW5qZWN0KFJlbmRlcmVyMik7XG4gIHByaXZhdGUgcmVhZG9ubHkgaW1nU3J2ID0gaW5qZWN0KE56SW1hZ2VTZXJ2aWNlKTtcbiAgcHJpdmF0ZSByZWFkb25seSB3aW4gPSBpbmplY3QoV0lORE9XKTtcbiAgcHJpdmF0ZSByZWFkb25seSBlbDogSFRNTEVsZW1lbnQgPSBpbmplY3QoRWxlbWVudFJlZikubmF0aXZlRWxlbWVudDtcblxuICBwcml2YXRlIGRlc3Ryb3kkPzogU3Vic2NyaXB0aW9uO1xuXG4gIF90ZXh0ITogc3RyaW5nIHwgU2FmZVZhbHVlIHwgc3RyaW5nW10gfCBudW1iZXI7XG4gIF91bml0Pzogc3RyaW5nO1xuICByZXM/OiBDZWxsVGV4dFJlc3VsdDtcbiAgc2hvd0RlZmF1bHQgPSBmYWxzZTtcblxuICBASW5wdXQoKSB2YWx1ZT86IENlbGxWYWx1ZTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxOelNhZmVBbnk+KCk7XG4gIEBJbnB1dCgpIG9wdGlvbnM/OiBDZWxsT3B0aW9ucztcbiAgQElucHV0KHsgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlIH0pIGxvYWRpbmcgPSBmYWxzZTtcbiAgQElucHV0KHsgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlIH0pIGRpc2FibGVkID0gZmFsc2U7XG5cbiAgZ2V0IHNhZmVPcHQoKTogQ2VsbE9wdGlvbnMge1xuICAgIHJldHVybiB0aGlzLnJlcz8ub3B0aW9ucyA/PyB7fTtcbiAgfVxuXG4gIGdldCBpc1RleHQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucmVzPy5zYWZlSHRtbCA9PT0gJ3RleHQnO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVWYWx1ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkPy51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuZGVzdHJveSQgPSB0aGlzLnNydi5nZXQodGhpcy52YWx1ZSwgdGhpcy5vcHRpb25zKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgIHRoaXMucmVzID0gcmVzO1xuICAgICAgdGhpcy5zaG93RGVmYXVsdCA9IHRoaXMudmFsdWUgPT0gKHRoaXMuc2FmZU9wdC5kZWZhdWx0IGFzIENlbGxEZWZhdWx0VGV4dCkuY29uZGl0aW9uO1xuICAgICAgdGhpcy5fdGV4dCA9IHJlcy5yZXN1bHQ/LnRleHQgPz8gJyc7XG4gICAgICB0aGlzLl91bml0ID0gcmVzLnJlc3VsdD8udW5pdCA/PyB0aGlzLnNhZmVPcHQ/LnVuaXQ7XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB0aGlzLnNldENsYXNzKCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHNldENsYXNzKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgZWwsIHJlbmRlcmVyIH0gPSB0aGlzO1xuICAgIGNvbnN0IHsgcmVuZGVyVHlwZSwgc2l6ZSwgdHlwZSB9ID0gdGhpcy5zYWZlT3B0O1xuICAgIHVwZGF0ZUhvc3RDbGFzcyhlbCwgcmVuZGVyZXIsIHtcbiAgICAgIFtgY2VsbGBdOiB0cnVlLFxuICAgICAgW2BjZWxsX18ke3JlbmRlclR5cGV9YF06IHJlbmRlclR5cGUgIT0gbnVsbCxcbiAgICAgIFtgY2VsbF9fJHtzaXplfWBdOiBzaXplICE9IG51bGwsXG4gICAgICBbYGNlbGxfX2hhcy11bml0YF06IHRoaXMuX3VuaXQsXG4gICAgICBbYGNlbGxfX2hhcy1kZWZhdWx0YF06IHRoaXMuc2hvd0RlZmF1bHQsXG4gICAgICBbYGNlbGxfX2Rpc2FibGVkYF06IHRoaXMuZGlzYWJsZWRcbiAgICB9KTtcbiAgICBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScsIGAke3R5cGV9YCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtwIGluIGtleW9mIENlbGxDb21wb25lbnRdPzogU2ltcGxlQ2hhbmdlIH0pOiB2b2lkIHtcbiAgICAvLyBEbyBub3QgY2FsbCB1cGRhdGVWYWx1ZSB3aGVuIG9ubHkgdXBkYXRpbmcgbG9hZGluZywgZGlzYWJsZWRcbiAgICBpZiAoT2JqZWN0LmtleXMoY2hhbmdlcykuZXZlcnkoayA9PiBbJ2xvYWRpbmcnLCAnZGlzYWJsZWQnXS5pbmNsdWRlcyhrKSkpIHtcbiAgICAgIHRoaXMuc2V0Q2xhc3MoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51cGRhdGVWYWx1ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGNoYW5nZSh2YWx1ZTogTnpTYWZlQW55KTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh2YWx1ZSk7XG4gIH1cblxuICBfbGluayhlOiBFdmVudCk6IHZvaWQge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHJldHVybjtcblxuICAgIGNvbnN0IGxpbmsgPSB0aGlzLnNhZmVPcHQubGluaztcbiAgICBjb25zdCB1cmwgPSBsaW5rPy51cmw7XG4gICAgaWYgKHVybCA9PSBudWxsKSByZXR1cm47XG5cbiAgICBpZiAoL2h0dHBzPzpcXC9cXC8vZy50ZXN0KHVybCkpIHtcbiAgICAgIHRoaXMud2luLm9wZW4odXJsLCBsaW5rPy50YXJnZXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHVybCk7XG4gICAgfVxuICB9XG5cbiAgX3Nob3dJbWcoaW1nOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBjb25maWcgPSB0aGlzLnNhZmVPcHQuaW1nO1xuICAgIGlmIChjb25maWcgPT0gbnVsbCB8fCBjb25maWcuYmlnID09IG51bGwpIHJldHVybjtcblxuICAgIGxldCBpZHggPSAtMTtcbiAgICBjb25zdCBsaXN0ID0gKHRoaXMuX3RleHQgYXMgc3RyaW5nW10pLm1hcCgocCwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpZHggPT09IC0xICYmIHAgPT09IGltZykgaWR4ID0gaW5kZXg7XG4gICAgICByZXR1cm4gdHlwZW9mIGNvbmZpZy5iaWcgPT09ICdmdW5jdGlvbicgPyBjb25maWcuYmlnKHApIDogcDtcbiAgICB9KTtcbiAgICB0aGlzLmltZ1NydlxuICAgICAgLnByZXZpZXcoXG4gICAgICAgIGxpc3QubWFwKHAgPT4gKHsgc3JjOiBwIH0pIGFzIE56SW1hZ2UpLFxuICAgICAgICBjb25maWcucHJldmlld09wdGlvbnNcbiAgICAgIClcbiAgICAgIC5zd2l0Y2hUbyhpZHgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JD8udW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19