import { __decorate } from "tslib";
import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, Output, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { updateHostClass } from '@delon/util/browser';
import { InputBoolean } from '@delon/util/decorator';
import { WINDOW } from '@delon/util/token';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { CellHostDirective } from './cell-host.directive';
import * as i0 from "@angular/core";
import * as i1 from "./cell.service";
import * as i2 from "@angular/router";
import * as i3 from "ng-zorro-antd/image";
import * as i4 from "@angular/forms";
import * as i5 from "ng-zorro-antd/checkbox";
import * as i6 from "ng-zorro-antd/radio";
import * as i7 from "ng-zorro-antd/icon";
import * as i8 from "ng-zorro-antd/tag";
import * as i9 from "ng-zorro-antd/badge";
import * as i10 from "ng-zorro-antd/tooltip";
export class CellComponent {
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
    constructor(srv, router, cdr, el, renderer, imgSrv, 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    win) {
        this.srv = srv;
        this.router = router;
        this.cdr = cdr;
        this.el = el;
        this.renderer = renderer;
        this.imgSrv = imgSrv;
        this.win = win;
        this.showDefault = false;
        this.valueChange = new EventEmitter();
        this.loading = false;
        this.disabled = false;
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
        updateHostClass(el.nativeElement, renderer, {
            [`cell`]: true,
            [`cell__${renderType}`]: renderType != null,
            [`cell__${size}`]: size != null,
            [`cell__has-unit`]: this._unit,
            [`cell__has-default`]: this.showDefault,
            [`cell__disabled`]: this.disabled
        });
        el.nativeElement.setAttribute('data-type', `${type}`);
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: CellComponent, deps: [{ token: i1.CellService }, { token: i2.Router }, { token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i3.NzImageService }, { token: WINDOW }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.2", type: CellComponent, isStandalone: true, selector: "cell, [cell]", inputs: { value: "value", options: "options", loading: "loading", disabled: "disabled" }, outputs: { valueChange: "valueChange" }, exportAs: ["cell"], usesOnChanges: true, ngImport: i0, template: `
    <ng-template #text>
      @switch(safeOpt.type) { @case('checkbox') {
      <label nz-checkbox [nzDisabled]="disabled" [ngModel]="value" (ngModelChange)="change($event)">
        {{ safeOpt.checkbox?.label }}
      </label>
      } @case('radio') {
      <label nz-radio [nzDisabled]="disabled" [ngModel]="value" (ngModelChange)="change($event)">
        {{ safeOpt.radio?.label }}
      </label>
      } @case('link') {
      <a (click)="_link($event)" [attr.target]="safeOpt.link?.target" [attr.title]="value" [innerHTML]="_text"></a>
      } @case('tag') {
      <nz-tag [nzColor]="res?.result?.color">
        <span [innerHTML]="_text"></span>
      </nz-tag>
      } @case('badge') {
      <nz-badge [nzStatus]="res?.result?.color" nzText="{{ _text }}" />
      } @case('widget') {
      <ng-template cell-widget-host [data]="hostData" />
      } @case('img') { @for (i of $any(_text); track $index) {
      <img
        [attr.src]="i"
        [attr.height]="safeOpt.img?.size"
        [attr.width]="safeOpt.img?.size"
        (click)="_showImg(i)"
        class="img"
        [class.point]="safeOpt.img?.big"
      />
      } } @default { @if(isText) {
      <span [innerText]="_text" [attr.title]="value"></span>
      } @else {
      <span [innerHTML]="_text" [attr.title]="value"></span>
      } @if(_unit) {
      <span class="unit">{{ _unit }}</span>
      } } }
    </ng-template>
    <ng-template #textWrap>
      @if (showDefault) {
      {{ safeOpt.default?.text }}
      } @else { @if (safeOpt.tooltip) {
      <span [nz-tooltip]="safeOpt.tooltip">
        <ng-template [ngTemplateOutlet]="text" />
      </span>
      } @else {
      <ng-template [ngTemplateOutlet]="text" />
      } }
    </ng-template>
    @if (loading) {
    <span nz-icon nzType="loading"></span>
    } @else {
    <ng-template [ngTemplateOutlet]="textWrap" />
    }
  `, isInline: true, dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i4.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "ngmodule", type: NzCheckboxModule }, { kind: "component", type: i5.NzCheckboxComponent, selector: "[nz-checkbox]", inputs: ["nzValue", "nzAutoFocus", "nzDisabled", "nzIndeterminate", "nzChecked", "nzId"], outputs: ["nzCheckedChange"], exportAs: ["nzCheckbox"] }, { kind: "ngmodule", type: NzRadioModule }, { kind: "component", type: i6.NzRadioComponent, selector: "[nz-radio],[nz-radio-button]", inputs: ["nzValue", "nzDisabled", "nzAutoFocus"], exportAs: ["nzRadio"] }, { kind: "ngmodule", type: NzIconModule }, { kind: "directive", type: i7.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "ngmodule", type: NzTagModule }, { kind: "component", type: i8.NzTagComponent, selector: "nz-tag", inputs: ["nzMode", "nzColor", "nzChecked"], outputs: ["nzOnClose", "nzCheckedChange"], exportAs: ["nzTag"] }, { kind: "ngmodule", type: NzBadgeModule }, { kind: "component", type: i9.NzBadgeComponent, selector: "nz-badge", inputs: ["nzShowZero", "nzShowDot", "nzStandalone", "nzDot", "nzOverflowCount", "nzColor", "nzStyle", "nzText", "nzTitle", "nzStatus", "nzCount", "nzOffset", "nzSize"], exportAs: ["nzBadge"] }, { kind: "ngmodule", type: NzToolTipModule }, { kind: "directive", type: i10.NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }, { kind: "directive", type: CellHostDirective, selector: "[cell-widget-host]", inputs: ["data"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
__decorate([
    InputBoolean()
], CellComponent.prototype, "loading", void 0);
__decorate([
    InputBoolean()
], CellComponent.prototype, "disabled", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: CellComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'cell, [cell]',
                    template: `
    <ng-template #text>
      @switch(safeOpt.type) { @case('checkbox') {
      <label nz-checkbox [nzDisabled]="disabled" [ngModel]="value" (ngModelChange)="change($event)">
        {{ safeOpt.checkbox?.label }}
      </label>
      } @case('radio') {
      <label nz-radio [nzDisabled]="disabled" [ngModel]="value" (ngModelChange)="change($event)">
        {{ safeOpt.radio?.label }}
      </label>
      } @case('link') {
      <a (click)="_link($event)" [attr.target]="safeOpt.link?.target" [attr.title]="value" [innerHTML]="_text"></a>
      } @case('tag') {
      <nz-tag [nzColor]="res?.result?.color">
        <span [innerHTML]="_text"></span>
      </nz-tag>
      } @case('badge') {
      <nz-badge [nzStatus]="res?.result?.color" nzText="{{ _text }}" />
      } @case('widget') {
      <ng-template cell-widget-host [data]="hostData" />
      } @case('img') { @for (i of $any(_text); track $index) {
      <img
        [attr.src]="i"
        [attr.height]="safeOpt.img?.size"
        [attr.width]="safeOpt.img?.size"
        (click)="_showImg(i)"
        class="img"
        [class.point]="safeOpt.img?.big"
      />
      } } @default { @if(isText) {
      <span [innerText]="_text" [attr.title]="value"></span>
      } @else {
      <span [innerHTML]="_text" [attr.title]="value"></span>
      } @if(_unit) {
      <span class="unit">{{ _unit }}</span>
      } } }
    </ng-template>
    <ng-template #textWrap>
      @if (showDefault) {
      {{ safeOpt.default?.text }}
      } @else { @if (safeOpt.tooltip) {
      <span [nz-tooltip]="safeOpt.tooltip">
        <ng-template [ngTemplateOutlet]="text" />
      </span>
      } @else {
      <ng-template [ngTemplateOutlet]="text" />
      } }
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
                        NzCheckboxModule,
                        NzRadioModule,
                        NzIconModule,
                        NzTagModule,
                        NzBadgeModule,
                        NzToolTipModule,
                        CellHostDirective
                    ]
                }]
        }], ctorParameters: () => [{ type: i1.CellService }, { type: i2.Router }, { type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i3.NzImageService }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [WINDOW]
                }] }], propDecorators: { value: [{
                type: Input
            }], valueChange: [{
                type: Output
            }], options: [{
                type: Input
            }], loading: [{
                type: Input
            }], disabled: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvY2VsbC9jZWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbkQsT0FBTyxFQUNMLHVCQUF1QixFQUV2QixTQUFTLEVBRVQsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBR0wsTUFBTSxFQUdOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFLN0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBZ0IsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDbkUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUUxRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFeEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7Ozs7Ozs7OztBQTZFMUQsTUFBTSxPQUFPLGFBQWE7SUFpQnhCLElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLEdBQUcsRUFBRSxPQUFPLElBQUksRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFRCxJQUFJLE1BQU07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Ozs7Ozs7Ozs7O0dBcURUO29CQUNELFFBQVEsRUFBRSxNQUFNO29CQUNoQixtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLFVBQVUsRUFBRSxJQUFJO29CQUNoQixPQUFPLEVBQUU7d0JBQ1AsV0FBVzt3QkFDWCxnQkFBZ0I7d0JBQ2hCLGdCQUFnQjt3QkFDaEIsYUFBYTt3QkFDYixZQUFZO3dCQUNaLFdBQVc7d0JBQ1gsYUFBYTt3QkFDYixlQUFlO3dCQUNmLGlCQUFpQjtxQkFDbEI7aUJBQ0Y7OzBCQXlDSSxNQUFNOzJCQUFDLE1BQU07eUNBN0JQLEtBQUs7c0JBQWIsS0FBSztnQkFDYSxXQUFXO3NCQUE3QixNQUFNO2dCQUNFLE9BQU87c0JBQWYsS0FBSztnQkFDbUIsT0FBTztzQkFBL0IsS0FBSztnQkFDbUIsUUFBUTtzQkFBaEMsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nVGVtcGxhdGVPdXRsZXQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2UsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgdHlwZSB7IFNhZmVWYWx1ZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyB1cGRhdGVIb3N0Q2xhc3MgfSBmcm9tICdAZGVsb24vdXRpbC9icm93c2VyJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgSW5wdXRCb29sZWFuIH0gZnJvbSAnQGRlbG9uL3V0aWwvZGVjb3JhdG9yJztcbmltcG9ydCB7IFdJTkRPVyB9IGZyb20gJ0BkZWxvbi91dGlsL3Rva2VuJztcbmltcG9ydCB7IE56QmFkZ2VNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2JhZGdlJztcbmltcG9ydCB7IE56Q2hlY2tib3hNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NoZWNrYm94JztcbmltcG9ydCB0eXBlIHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IE56SWNvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaWNvbic7XG5pbXBvcnQgeyBOekltYWdlLCBOekltYWdlU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaW1hZ2UnO1xuaW1wb3J0IHsgTnpSYWRpb01vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvcmFkaW8nO1xuaW1wb3J0IHsgTnpUYWdNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3RhZyc7XG5pbXBvcnQgeyBOelRvb2xUaXBNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3Rvb2x0aXAnO1xuXG5pbXBvcnQgeyBDZWxsSG9zdERpcmVjdGl2ZSB9IGZyb20gJy4vY2VsbC1ob3N0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDZWxsU2VydmljZSB9IGZyb20gJy4vY2VsbC5zZXJ2aWNlJztcbmltcG9ydCB0eXBlIHsgQ2VsbERlZmF1bHRUZXh0LCBDZWxsT3B0aW9ucywgQ2VsbFRleHRSZXN1bHQsIENlbGxWYWx1ZSwgQ2VsbFdpZGdldERhdGEgfSBmcm9tICcuL2NlbGwudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZWxsLCBbY2VsbF0nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy10ZW1wbGF0ZSAjdGV4dD5cbiAgICAgIEBzd2l0Y2goc2FmZU9wdC50eXBlKSB7IEBjYXNlKCdjaGVja2JveCcpIHtcbiAgICAgIDxsYWJlbCBuei1jaGVja2JveCBbbnpEaXNhYmxlZF09XCJkaXNhYmxlZFwiIFtuZ01vZGVsXT1cInZhbHVlXCIgKG5nTW9kZWxDaGFuZ2UpPVwiY2hhbmdlKCRldmVudClcIj5cbiAgICAgICAge3sgc2FmZU9wdC5jaGVja2JveD8ubGFiZWwgfX1cbiAgICAgIDwvbGFiZWw+XG4gICAgICB9IEBjYXNlKCdyYWRpbycpIHtcbiAgICAgIDxsYWJlbCBuei1yYWRpbyBbbnpEaXNhYmxlZF09XCJkaXNhYmxlZFwiIFtuZ01vZGVsXT1cInZhbHVlXCIgKG5nTW9kZWxDaGFuZ2UpPVwiY2hhbmdlKCRldmVudClcIj5cbiAgICAgICAge3sgc2FmZU9wdC5yYWRpbz8ubGFiZWwgfX1cbiAgICAgIDwvbGFiZWw+XG4gICAgICB9IEBjYXNlKCdsaW5rJykge1xuICAgICAgPGEgKGNsaWNrKT1cIl9saW5rKCRldmVudClcIiBbYXR0ci50YXJnZXRdPVwic2FmZU9wdC5saW5rPy50YXJnZXRcIiBbYXR0ci50aXRsZV09XCJ2YWx1ZVwiIFtpbm5lckhUTUxdPVwiX3RleHRcIj48L2E+XG4gICAgICB9IEBjYXNlKCd0YWcnKSB7XG4gICAgICA8bnotdGFnIFtuekNvbG9yXT1cInJlcz8ucmVzdWx0Py5jb2xvclwiPlxuICAgICAgICA8c3BhbiBbaW5uZXJIVE1MXT1cIl90ZXh0XCI+PC9zcGFuPlxuICAgICAgPC9uei10YWc+XG4gICAgICB9IEBjYXNlKCdiYWRnZScpIHtcbiAgICAgIDxuei1iYWRnZSBbbnpTdGF0dXNdPVwicmVzPy5yZXN1bHQ/LmNvbG9yXCIgbnpUZXh0PVwie3sgX3RleHQgfX1cIiAvPlxuICAgICAgfSBAY2FzZSgnd2lkZ2V0Jykge1xuICAgICAgPG5nLXRlbXBsYXRlIGNlbGwtd2lkZ2V0LWhvc3QgW2RhdGFdPVwiaG9zdERhdGFcIiAvPlxuICAgICAgfSBAY2FzZSgnaW1nJykgeyBAZm9yIChpIG9mICRhbnkoX3RleHQpOyB0cmFjayAkaW5kZXgpIHtcbiAgICAgIDxpbWdcbiAgICAgICAgW2F0dHIuc3JjXT1cImlcIlxuICAgICAgICBbYXR0ci5oZWlnaHRdPVwic2FmZU9wdC5pbWc/LnNpemVcIlxuICAgICAgICBbYXR0ci53aWR0aF09XCJzYWZlT3B0LmltZz8uc2l6ZVwiXG4gICAgICAgIChjbGljayk9XCJfc2hvd0ltZyhpKVwiXG4gICAgICAgIGNsYXNzPVwiaW1nXCJcbiAgICAgICAgW2NsYXNzLnBvaW50XT1cInNhZmVPcHQuaW1nPy5iaWdcIlxuICAgICAgLz5cbiAgICAgIH0gfSBAZGVmYXVsdCB7IEBpZihpc1RleHQpIHtcbiAgICAgIDxzcGFuIFtpbm5lclRleHRdPVwiX3RleHRcIiBbYXR0ci50aXRsZV09XCJ2YWx1ZVwiPjwvc3Bhbj5cbiAgICAgIH0gQGVsc2Uge1xuICAgICAgPHNwYW4gW2lubmVySFRNTF09XCJfdGV4dFwiIFthdHRyLnRpdGxlXT1cInZhbHVlXCI+PC9zcGFuPlxuICAgICAgfSBAaWYoX3VuaXQpIHtcbiAgICAgIDxzcGFuIGNsYXNzPVwidW5pdFwiPnt7IF91bml0IH19PC9zcGFuPlxuICAgICAgfSB9IH1cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZSAjdGV4dFdyYXA+XG4gICAgICBAaWYgKHNob3dEZWZhdWx0KSB7XG4gICAgICB7eyBzYWZlT3B0LmRlZmF1bHQ/LnRleHQgfX1cbiAgICAgIH0gQGVsc2UgeyBAaWYgKHNhZmVPcHQudG9vbHRpcCkge1xuICAgICAgPHNwYW4gW256LXRvb2x0aXBdPVwic2FmZU9wdC50b29sdGlwXCI+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJ0ZXh0XCIgLz5cbiAgICAgIDwvc3Bhbj5cbiAgICAgIH0gQGVsc2Uge1xuICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRleHRcIiAvPlxuICAgICAgfSB9XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICBAaWYgKGxvYWRpbmcpIHtcbiAgICA8c3BhbiBuei1pY29uIG56VHlwZT1cImxvYWRpbmdcIj48L3NwYW4+XG4gICAgfSBAZWxzZSB7XG4gICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRleHRXcmFwXCIgLz5cbiAgICB9XG4gIGAsXG4gIGV4cG9ydEFzOiAnY2VsbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW1xuICAgIEZvcm1zTW9kdWxlLFxuICAgIE5nVGVtcGxhdGVPdXRsZXQsXG4gICAgTnpDaGVja2JveE1vZHVsZSxcbiAgICBOelJhZGlvTW9kdWxlLFxuICAgIE56SWNvbk1vZHVsZSxcbiAgICBOelRhZ01vZHVsZSxcbiAgICBOekJhZGdlTW9kdWxlLFxuICAgIE56VG9vbFRpcE1vZHVsZSxcbiAgICBDZWxsSG9zdERpcmVjdGl2ZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIENlbGxDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9sb2FkaW5nOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9kaXNhYmxlZDogQm9vbGVhbklucHV0O1xuXG4gIHByaXZhdGUgZGVzdHJveSQ/OiBTdWJzY3JpcHRpb247XG5cbiAgX3RleHQhOiBzdHJpbmcgfCBTYWZlVmFsdWUgfCBzdHJpbmdbXSB8IG51bWJlcjtcbiAgX3VuaXQ/OiBzdHJpbmc7XG4gIHJlcz86IENlbGxUZXh0UmVzdWx0O1xuICBzaG93RGVmYXVsdCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIHZhbHVlPzogQ2VsbFZhbHVlO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgdmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE56U2FmZUFueT4oKTtcbiAgQElucHV0KCkgb3B0aW9ucz86IENlbGxPcHRpb25zO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbG9hZGluZyA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZGlzYWJsZWQgPSBmYWxzZTtcblxuICBnZXQgc2FmZU9wdCgpOiBDZWxsT3B0aW9ucyB7XG4gICAgcmV0dXJuIHRoaXMucmVzPy5vcHRpb25zID8/IHt9O1xuICB9XG5cbiAgZ2V0IGlzVGV4dCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5yZXM/LnNhZmVIdG1sID09PSAndGV4dCc7XG4gIH1cblxuICBnZXQgaG9zdERhdGEoKTogQ2VsbFdpZGdldERhdGEge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgIG9wdGlvbnM6IHRoaXMuc3J2LmZpeE9wdGlvbnModGhpcy5vcHRpb25zKVxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHNydjogQ2VsbFNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgaW1nU3J2OiBOekltYWdlU2VydmljZSxcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgIEBJbmplY3QoV0lORE9XKSBwcml2YXRlIHdpbjogYW55XG4gICkge31cblxuICBwcml2YXRlIHVwZGF0ZVZhbHVlKCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQ/LnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5kZXN0cm95JCA9IHRoaXMuc3J2LmdldCh0aGlzLnZhbHVlLCB0aGlzLm9wdGlvbnMpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgdGhpcy5yZXMgPSByZXM7XG4gICAgICB0aGlzLnNob3dEZWZhdWx0ID0gdGhpcy52YWx1ZSA9PSAodGhpcy5zYWZlT3B0LmRlZmF1bHQgYXMgQ2VsbERlZmF1bHRUZXh0KS5jb25kaXRpb247XG4gICAgICB0aGlzLl90ZXh0ID0gcmVzLnJlc3VsdD8udGV4dCA/PyAnJztcbiAgICAgIHRoaXMuX3VuaXQgPSByZXMucmVzdWx0Py51bml0ID8/IHRoaXMuc2FmZU9wdD8udW5pdDtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIHRoaXMuc2V0Q2xhc3MoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0Q2xhc3MoKTogdm9pZCB7XG4gICAgY29uc3QgeyBlbCwgcmVuZGVyZXIgfSA9IHRoaXM7XG4gICAgY29uc3QgeyByZW5kZXJUeXBlLCBzaXplLCB0eXBlIH0gPSB0aGlzLnNhZmVPcHQ7XG4gICAgdXBkYXRlSG9zdENsYXNzKGVsLm5hdGl2ZUVsZW1lbnQsIHJlbmRlcmVyLCB7XG4gICAgICBbYGNlbGxgXTogdHJ1ZSxcbiAgICAgIFtgY2VsbF9fJHtyZW5kZXJUeXBlfWBdOiByZW5kZXJUeXBlICE9IG51bGwsXG4gICAgICBbYGNlbGxfXyR7c2l6ZX1gXTogc2l6ZSAhPSBudWxsLFxuICAgICAgW2BjZWxsX19oYXMtdW5pdGBdOiB0aGlzLl91bml0LFxuICAgICAgW2BjZWxsX19oYXMtZGVmYXVsdGBdOiB0aGlzLnNob3dEZWZhdWx0LFxuICAgICAgW2BjZWxsX19kaXNhYmxlZGBdOiB0aGlzLmRpc2FibGVkXG4gICAgfSk7XG4gICAgZWwubmF0aXZlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScsIGAke3R5cGV9YCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtwIGluIGtleW9mIENlbGxDb21wb25lbnRdPzogU2ltcGxlQ2hhbmdlIH0pOiB2b2lkIHtcbiAgICAvLyBEbyBub3QgY2FsbCB1cGRhdGVWYWx1ZSB3aGVuIG9ubHkgdXBkYXRpbmcgbG9hZGluZywgZGlzYWJsZWRcbiAgICBpZiAoT2JqZWN0LmtleXMoY2hhbmdlcykuZXZlcnkoayA9PiBbJ2xvYWRpbmcnLCAnZGlzYWJsZWQnXS5pbmNsdWRlcyhrKSkpIHtcbiAgICAgIHRoaXMuc2V0Q2xhc3MoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51cGRhdGVWYWx1ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGNoYW5nZSh2YWx1ZTogTnpTYWZlQW55KTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh2YWx1ZSk7XG4gIH1cblxuICBfbGluayhlOiBFdmVudCk6IHZvaWQge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHJldHVybjtcblxuICAgIGNvbnN0IGxpbmsgPSB0aGlzLnNhZmVPcHQubGluaztcbiAgICBjb25zdCB1cmwgPSBsaW5rPy51cmw7XG4gICAgaWYgKHVybCA9PSBudWxsKSByZXR1cm47XG5cbiAgICBpZiAoL2h0dHBzPzpcXC9cXC8vZy50ZXN0KHVybCkpIHtcbiAgICAgICh0aGlzLndpbiBhcyBXaW5kb3cpLm9wZW4odXJsLCBsaW5rPy50YXJnZXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHVybCk7XG4gICAgfVxuICB9XG5cbiAgX3Nob3dJbWcoaW1nOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBjb25maWcgPSB0aGlzLnNhZmVPcHQuaW1nO1xuICAgIGlmIChjb25maWcgPT0gbnVsbCB8fCBjb25maWcuYmlnID09IG51bGwpIHJldHVybjtcblxuICAgIGxldCBpZHggPSAtMTtcbiAgICBjb25zdCBsaXN0ID0gKHRoaXMuX3RleHQgYXMgc3RyaW5nW10pLm1hcCgocCwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpZHggPT09IC0xICYmIHAgPT09IGltZykgaWR4ID0gaW5kZXg7XG4gICAgICByZXR1cm4gdHlwZW9mIGNvbmZpZy5iaWcgPT09ICdmdW5jdGlvbicgPyBjb25maWcuYmlnKHApIDogcDtcbiAgICB9KTtcbiAgICB0aGlzLmltZ1NydlxuICAgICAgLnByZXZpZXcoXG4gICAgICAgIGxpc3QubWFwKHAgPT4gKHsgc3JjOiBwIH0pIGFzIE56SW1hZ2UpLFxuICAgICAgICBjb25maWcucHJldmlld09wdGlvbnNcbiAgICAgIClcbiAgICAgIC5zd2l0Y2hUbyhpZHgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JD8udW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19