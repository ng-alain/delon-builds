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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.11", ngImport: i0, type: CellComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.11", type: CellComponent, isStandalone: true, selector: "cell, [cell]", inputs: { value: "value", options: "options", loading: ["loading", "loading", booleanAttribute], disabled: ["disabled", "disabled", booleanAttribute] }, outputs: { valueChange: "valueChange" }, exportAs: ["cell"], usesOnChanges: true, ngImport: i0, template: `
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
          @if (res) {
            <ng-template cell-widget-host [data]="res" />
          }
        }
        @case ('img') {
          @for (i of $any(_text); track $index) {
            @let img = safeOpt.img;
            <img
              [attr.src]="i"
              [attr.height]="img?.size"
              [attr.width]="img?.size"
              (click)="_showImg(i)"
              class="img"
              [class.point]="img?.big"
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
  `, isInline: true, dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: NzCheckboxComponent, selector: "[nz-checkbox]", inputs: ["nzValue", "nzAutoFocus", "nzDisabled", "nzIndeterminate", "nzChecked", "nzId"], outputs: ["nzCheckedChange"], exportAs: ["nzCheckbox"] }, { kind: "component", type: NzRadioComponent, selector: "[nz-radio],[nz-radio-button]", inputs: ["nzValue", "nzDisabled", "nzAutoFocus", "nz-radio-button"], exportAs: ["nzRadio"] }, { kind: "directive", type: NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "component", type: NzTagComponent, selector: "nz-tag", inputs: ["nzMode", "nzColor", "nzChecked", "nzBordered"], outputs: ["nzOnClose", "nzCheckedChange"], exportAs: ["nzTag"] }, { kind: "component", type: NzBadgeComponent, selector: "nz-badge", inputs: ["nzShowZero", "nzShowDot", "nzStandalone", "nzDot", "nzOverflowCount", "nzColor", "nzStyle", "nzText", "nzTitle", "nzStatus", "nzCount", "nzOffset", "nzSize"], exportAs: ["nzBadge"] }, { kind: "directive", type: NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "cdkConnectedOverlayPush", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }, { kind: "ngmodule", type: NzImageModule }, { kind: "directive", type: CellHostDirective, selector: "[cell-widget-host]", inputs: ["data"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.11", ngImport: i0, type: CellComponent, decorators: [{
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
          @if (res) {
            <ng-template cell-widget-host [data]="res" />
          }
        }
        @case ('img') {
          @for (i of $any(_text); track $index) {
            @let img = safeOpt.img;
            <img
              [attr.src]="i"
              [attr.height]="img?.size"
              [attr.width]="img?.size"
              (click)="_showImg(i)"
              class="img"
              [class.point]="img?.big"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvY2VsbC9jZWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNuRCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNOLFNBQVMsRUFFVCxpQkFBaUIsRUFDakIsZ0JBQWdCLEVBQ2hCLE1BQU0sRUFDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBR3pDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFN0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBVyxhQUFhLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDN0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRTNELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxXQUFXLEVB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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdFVDtvQkFDRCxRQUFRLEVBQUUsTUFBTTtvQkFDaEIsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxVQUFVLEVBQUUsSUFBSTtvQkFDaEIsT0FBTyxFQUFFO3dCQUNQLFdBQVc7d0JBQ1gsZ0JBQWdCO3dCQUNoQixtQkFBbUI7d0JBQ25CLGdCQUFnQjt3QkFDaEIsZUFBZTt3QkFDZixjQUFjO3dCQUNkLGdCQUFnQjt3QkFDaEIsa0JBQWtCO3dCQUNsQixhQUFhO3dCQUNiLGlCQUFpQjtxQkFDbEI7aUJBQ0Y7OEJBaUJVLEtBQUs7c0JBQWIsS0FBSztnQkFDYSxXQUFXO3NCQUE3QixNQUFNO2dCQUNFLE9BQU87c0JBQWYsS0FBSztnQkFDa0MsT0FBTztzQkFBOUMsS0FBSzt1QkFBQyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRTtnQkFDRSxRQUFRO3NCQUEvQyxLQUFLO3VCQUFDLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdUZW1wbGF0ZU91dGxldCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2UsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBib29sZWFuQXR0cmlidXRlLFxuICBpbmplY3Rcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB0eXBlIHsgU2FmZVZhbHVlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IHVwZGF0ZUhvc3RDbGFzcyB9IGZyb20gJ0BkZWxvbi91dGlsL2Jyb3dzZXInO1xuaW1wb3J0IHsgV0lORE9XIH0gZnJvbSAnQGRlbG9uL3V0aWwvdG9rZW4nO1xuaW1wb3J0IHsgTnpCYWRnZUNvbXBvbmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQvYmFkZ2UnO1xuaW1wb3J0IHsgTnpDaGVja2JveENvbXBvbmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY2hlY2tib3gnO1xuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgTnpJY29uRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pY29uJztcbmltcG9ydCB7IE56SW1hZ2UsIE56SW1hZ2VNb2R1bGUsIE56SW1hZ2VTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pbWFnZSc7XG5pbXBvcnQgeyBOelJhZGlvQ29tcG9uZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC9yYWRpbyc7XG5pbXBvcnQgeyBOelRhZ0NvbXBvbmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQvdGFnJztcbmltcG9ydCB7IE56VG9vbHRpcERpcmVjdGl2ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvdG9vbHRpcCc7XG5cbmltcG9ydCB7IENlbGxIb3N0RGlyZWN0aXZlIH0gZnJvbSAnLi9jZWxsLWhvc3QuZGlyZWN0aXZlJztcbmltcG9ydCB7IENlbGxTZXJ2aWNlIH0gZnJvbSAnLi9jZWxsLnNlcnZpY2UnO1xuaW1wb3J0IHR5cGUgeyBDZWxsRGVmYXVsdFRleHQsIENlbGxPcHRpb25zLCBDZWxsVGV4dFJlc3VsdCwgQ2VsbFZhbHVlIH0gZnJvbSAnLi9jZWxsLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2VsbCwgW2NlbGxdJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctdGVtcGxhdGUgI3RleHQ+XG4gICAgICBAc3dpdGNoIChzYWZlT3B0LnR5cGUpIHtcbiAgICAgICAgQGNhc2UgKCdjaGVja2JveCcpIHtcbiAgICAgICAgICA8bGFiZWwgbnotY2hlY2tib3ggW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIiBbbmdNb2RlbF09XCJ2YWx1ZVwiIChuZ01vZGVsQ2hhbmdlKT1cImNoYW5nZSgkZXZlbnQpXCI+XG4gICAgICAgICAgICB7eyBzYWZlT3B0LmNoZWNrYm94Py5sYWJlbCB9fVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIH1cbiAgICAgICAgQGNhc2UgKCdyYWRpbycpIHtcbiAgICAgICAgICA8bGFiZWwgbnotcmFkaW8gW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIiBbbmdNb2RlbF09XCJ2YWx1ZVwiIChuZ01vZGVsQ2hhbmdlKT1cImNoYW5nZSgkZXZlbnQpXCI+XG4gICAgICAgICAgICB7eyBzYWZlT3B0LnJhZGlvPy5sYWJlbCB9fVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIH1cbiAgICAgICAgQGNhc2UgKCdsaW5rJykge1xuICAgICAgICAgIDxhIChjbGljayk9XCJfbGluaygkZXZlbnQpXCIgW2F0dHIudGFyZ2V0XT1cInNhZmVPcHQubGluaz8udGFyZ2V0XCIgW2F0dHIudGl0bGVdPVwidmFsdWVcIiBbaW5uZXJIVE1MXT1cIl90ZXh0XCI+PC9hPlxuICAgICAgICB9XG4gICAgICAgIEBjYXNlICgndGFnJykge1xuICAgICAgICAgIDxuei10YWcgW256Q29sb3JdPVwicmVzPy5yZXN1bHQ/LmNvbG9yXCI+XG4gICAgICAgICAgICA8c3BhbiBbaW5uZXJIVE1MXT1cIl90ZXh0XCI+PC9zcGFuPlxuICAgICAgICAgIDwvbnotdGFnPlxuICAgICAgICB9XG4gICAgICAgIEBjYXNlICgnYmFkZ2UnKSB7XG4gICAgICAgICAgPG56LWJhZGdlIFtuelN0YXR1c109XCJyZXM/LnJlc3VsdD8uY29sb3JcIiBuelRleHQ9XCJ7eyBfdGV4dCB9fVwiIC8+XG4gICAgICAgIH1cbiAgICAgICAgQGNhc2UgKCd3aWRnZXQnKSB7XG4gICAgICAgICAgQGlmIChyZXMpIHtcbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBjZWxsLXdpZGdldC1ob3N0IFtkYXRhXT1cInJlc1wiIC8+XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEBjYXNlICgnaW1nJykge1xuICAgICAgICAgIEBmb3IgKGkgb2YgJGFueShfdGV4dCk7IHRyYWNrICRpbmRleCkge1xuICAgICAgICAgICAgQGxldCBpbWcgPSBzYWZlT3B0LmltZztcbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgW2F0dHIuc3JjXT1cImlcIlxuICAgICAgICAgICAgICBbYXR0ci5oZWlnaHRdPVwiaW1nPy5zaXplXCJcbiAgICAgICAgICAgICAgW2F0dHIud2lkdGhdPVwiaW1nPy5zaXplXCJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cIl9zaG93SW1nKGkpXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJpbWdcIlxuICAgICAgICAgICAgICBbY2xhc3MucG9pbnRdPVwiaW1nPy5iaWdcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQGRlZmF1bHQge1xuICAgICAgICAgIEBpZiAoaXNUZXh0KSB7XG4gICAgICAgICAgICA8c3BhbiBbaW5uZXJUZXh0XT1cIl90ZXh0XCIgW2F0dHIudGl0bGVdPVwidmFsdWVcIj48L3NwYW4+XG4gICAgICAgICAgfSBAZWxzZSB7XG4gICAgICAgICAgICA8c3BhbiBbaW5uZXJIVE1MXT1cIl90ZXh0XCIgW2F0dHIudGl0bGVdPVwidmFsdWVcIj48L3NwYW4+XG4gICAgICAgICAgfVxuICAgICAgICAgIEBpZiAoX3VuaXQpIHtcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidW5pdFwiPnt7IF91bml0IH19PC9zcGFuPlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlICN0ZXh0V3JhcD5cbiAgICAgIEBpZiAoc2hvd0RlZmF1bHQpIHtcbiAgICAgICAge3sgc2FmZU9wdC5kZWZhdWx0Py50ZXh0IH19XG4gICAgICB9IEBlbHNlIHtcbiAgICAgICAgQGlmIChzYWZlT3B0LnRvb2x0aXApIHtcbiAgICAgICAgICA8c3BhbiBbbnotdG9vbHRpcF09XCJzYWZlT3B0LnRvb2x0aXBcIj5cbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJ0ZXh0XCIgLz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIH0gQGVsc2Uge1xuICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJ0ZXh0XCIgLz5cbiAgICAgICAgfVxuICAgICAgfVxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgQGlmIChsb2FkaW5nKSB7XG4gICAgICA8c3BhbiBuei1pY29uIG56VHlwZT1cImxvYWRpbmdcIj48L3NwYW4+XG4gICAgfSBAZWxzZSB7XG4gICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwidGV4dFdyYXBcIiAvPlxuICAgIH1cbiAgYCxcbiAgZXhwb3J0QXM6ICdjZWxsJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgTmdUZW1wbGF0ZU91dGxldCxcbiAgICBOekNoZWNrYm94Q29tcG9uZW50LFxuICAgIE56UmFkaW9Db21wb25lbnQsXG4gICAgTnpJY29uRGlyZWN0aXZlLFxuICAgIE56VGFnQ29tcG9uZW50LFxuICAgIE56QmFkZ2VDb21wb25lbnQsXG4gICAgTnpUb29sdGlwRGlyZWN0aXZlLFxuICAgIE56SW1hZ2VNb2R1bGUsXG4gICAgQ2VsbEhvc3REaXJlY3RpdmVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDZWxsQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIHJlYWRvbmx5IHNydiA9IGluamVjdChDZWxsU2VydmljZSk7XG4gIHByaXZhdGUgcmVhZG9ubHkgcm91dGVyID0gaW5qZWN0KFJvdXRlcik7XG4gIHByaXZhdGUgcmVhZG9ubHkgY2RyID0gaW5qZWN0KENoYW5nZURldGVjdG9yUmVmKTtcbiAgcHJpdmF0ZSByZWFkb25seSByZW5kZXJlciA9IGluamVjdChSZW5kZXJlcjIpO1xuICBwcml2YXRlIHJlYWRvbmx5IGltZ1NydiA9IGluamVjdChOekltYWdlU2VydmljZSk7XG4gIHByaXZhdGUgcmVhZG9ubHkgd2luID0gaW5qZWN0KFdJTkRPVyk7XG4gIHByaXZhdGUgcmVhZG9ubHkgZWw6IEhUTUxFbGVtZW50ID0gaW5qZWN0KEVsZW1lbnRSZWYpLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgcHJpdmF0ZSBkZXN0cm95JD86IFN1YnNjcmlwdGlvbjtcblxuICBfdGV4dCE6IHN0cmluZyB8IFNhZmVWYWx1ZSB8IHN0cmluZ1tdIHwgbnVtYmVyO1xuICBfdW5pdD86IHN0cmluZztcbiAgcmVzPzogQ2VsbFRleHRSZXN1bHQ7XG4gIHNob3dEZWZhdWx0ID0gZmFsc2U7XG5cbiAgQElucHV0KCkgdmFsdWU/OiBDZWxsVmFsdWU7XG4gIEBPdXRwdXQoKSByZWFkb25seSB2YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8TnpTYWZlQW55PigpO1xuICBASW5wdXQoKSBvcHRpb25zPzogQ2VsbE9wdGlvbnM7XG4gIEBJbnB1dCh7IHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZSB9KSBsb2FkaW5nID0gZmFsc2U7XG4gIEBJbnB1dCh7IHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZSB9KSBkaXNhYmxlZCA9IGZhbHNlO1xuXG4gIGdldCBzYWZlT3B0KCk6IENlbGxPcHRpb25zIHtcbiAgICByZXR1cm4gdGhpcy5yZXM/Lm9wdGlvbnMgPz8ge307XG4gIH1cblxuICBnZXQgaXNUZXh0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnJlcz8uc2FmZUh0bWwgPT09ICd0ZXh0JztcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlVmFsdWUoKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JD8udW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLmRlc3Ryb3kkID0gdGhpcy5zcnYuZ2V0KHRoaXMudmFsdWUsIHRoaXMub3B0aW9ucykuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICB0aGlzLnJlcyA9IHJlcztcbiAgICAgIHRoaXMuc2hvd0RlZmF1bHQgPSB0aGlzLnZhbHVlID09ICh0aGlzLnNhZmVPcHQuZGVmYXVsdCBhcyBDZWxsRGVmYXVsdFRleHQpLmNvbmRpdGlvbjtcbiAgICAgIHRoaXMuX3RleHQgPSByZXMucmVzdWx0Py50ZXh0ID8/ICcnO1xuICAgICAgdGhpcy5fdW5pdCA9IHJlcy5yZXN1bHQ/LnVuaXQgPz8gdGhpcy5zYWZlT3B0Py51bml0O1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgdGhpcy5zZXRDbGFzcygpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDbGFzcygpOiB2b2lkIHtcbiAgICBjb25zdCB7IGVsLCByZW5kZXJlciB9ID0gdGhpcztcbiAgICBjb25zdCB7IHJlbmRlclR5cGUsIHNpemUsIHR5cGUgfSA9IHRoaXMuc2FmZU9wdDtcbiAgICB1cGRhdGVIb3N0Q2xhc3MoZWwsIHJlbmRlcmVyLCB7XG4gICAgICBbYGNlbGxgXTogdHJ1ZSxcbiAgICAgIFtgY2VsbF9fJHtyZW5kZXJUeXBlfWBdOiByZW5kZXJUeXBlICE9IG51bGwsXG4gICAgICBbYGNlbGxfXyR7c2l6ZX1gXTogc2l6ZSAhPSBudWxsLFxuICAgICAgW2BjZWxsX19oYXMtdW5pdGBdOiB0aGlzLl91bml0LFxuICAgICAgW2BjZWxsX19oYXMtZGVmYXVsdGBdOiB0aGlzLnNob3dEZWZhdWx0LFxuICAgICAgW2BjZWxsX19kaXNhYmxlZGBdOiB0aGlzLmRpc2FibGVkXG4gICAgfSk7XG4gICAgZWwuc2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnLCBgJHt0eXBlfWApO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogeyBbcCBpbiBrZXlvZiBDZWxsQ29tcG9uZW50XT86IFNpbXBsZUNoYW5nZSB9KTogdm9pZCB7XG4gICAgLy8gRG8gbm90IGNhbGwgdXBkYXRlVmFsdWUgd2hlbiBvbmx5IHVwZGF0aW5nIGxvYWRpbmcsIGRpc2FibGVkXG4gICAgaWYgKE9iamVjdC5rZXlzKGNoYW5nZXMpLmV2ZXJ5KGsgPT4gWydsb2FkaW5nJywgJ2Rpc2FibGVkJ10uaW5jbHVkZXMoaykpKSB7XG4gICAgICB0aGlzLnNldENsYXNzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudXBkYXRlVmFsdWUoKTtcbiAgICB9XG4gIH1cblxuICBjaGFuZ2UodmFsdWU6IE56U2FmZUFueSk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodmFsdWUpO1xuICB9XG5cbiAgX2xpbmsoZTogRXZlbnQpOiB2b2lkIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSByZXR1cm47XG5cbiAgICBjb25zdCBsaW5rID0gdGhpcy5zYWZlT3B0Lmxpbms7XG4gICAgY29uc3QgdXJsID0gbGluaz8udXJsO1xuICAgIGlmICh1cmwgPT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgaWYgKC9odHRwcz86XFwvXFwvL2cudGVzdCh1cmwpKSB7XG4gICAgICB0aGlzLndpbi5vcGVuKHVybCwgbGluaz8udGFyZ2V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCh1cmwpO1xuICAgIH1cbiAgfVxuXG4gIF9zaG93SW1nKGltZzogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgY29uZmlnID0gdGhpcy5zYWZlT3B0LmltZztcbiAgICBpZiAoY29uZmlnID09IG51bGwgfHwgY29uZmlnLmJpZyA9PSBudWxsKSByZXR1cm47XG5cbiAgICBsZXQgaWR4ID0gLTE7XG4gICAgY29uc3QgbGlzdCA9ICh0aGlzLl90ZXh0IGFzIHN0cmluZ1tdKS5tYXAoKHAsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaWR4ID09PSAtMSAmJiBwID09PSBpbWcpIGlkeCA9IGluZGV4O1xuICAgICAgcmV0dXJuIHR5cGVvZiBjb25maWcuYmlnID09PSAnZnVuY3Rpb24nID8gY29uZmlnLmJpZyhwKSA6IHA7XG4gICAgfSk7XG4gICAgdGhpcy5pbWdTcnZcbiAgICAgIC5wcmV2aWV3KFxuICAgICAgICBsaXN0Lm1hcChwID0+ICh7IHNyYzogcCB9KSBhcyBOekltYWdlKSxcbiAgICAgICAgY29uZmlnLnByZXZpZXdPcHRpb25zXG4gICAgICApXG4gICAgICAuc3dpdGNoVG8oaWR4KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQ/LnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==