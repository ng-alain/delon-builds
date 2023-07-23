import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, Output, ViewEncapsulation } from '@angular/core';
import { updateHostClass } from '@delon/util/browser';
import { InputBoolean } from '@delon/util/decorator';
import { WINDOW } from '@delon/util/token';
import * as i0 from "@angular/core";
import * as i1 from "./cell.service";
import * as i2 from "@angular/router";
import * as i3 from "ng-zorro-antd/image";
import * as i4 from "@angular/common";
import * as i5 from "@angular/forms";
import * as i6 from "ng-zorro-antd/checkbox";
import * as i7 from "ng-zorro-antd/radio";
import * as i8 from "ng-zorro-antd/badge";
import * as i9 from "ng-zorro-antd/tag";
import * as i10 from "ng-zorro-antd/tooltip";
import * as i11 from "ng-zorro-antd/icon";
import * as i12 from "./cell-host.directive";
export class CellComponent {
    /**
     * 货币快捷项
     *
     * @example
     * <cell [currency]="1000"></cell>
     * 等同于
     * <cell [value]="1000" [options]="{type: 'currency'}"></cell>
     */
    set currency(value) {
        this.value = value;
        this.options = { type: 'currency' };
        this.updateValue();
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
        const { renderType, size } = this.safeOpt;
        updateHostClass(el.nativeElement, renderer, {
            [`cell`]: true,
            [`cell__${renderType}`]: renderType != null,
            [`cell__${size}`]: size != null,
            [`cell__has-unit`]: this._unit,
            [`cell__has-default`]: this.showDefault,
            [`cell__disabled`]: this.disabled
        });
        el.nativeElement.dataset.type = this.safeOpt.type;
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.6", ngImport: i0, type: CellComponent, deps: [{ token: i1.CellService }, { token: i2.Router }, { token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i3.NzImageService }, { token: WINDOW }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.6", type: CellComponent, selector: "cell, [cell]", inputs: { value: "value", options: "options", loading: "loading", disabled: "disabled", currency: "currency" }, outputs: { valueChange: "valueChange" }, exportAs: ["cell"], usesOnChanges: true, ngImport: i0, template: `
    <ng-template #text>
      <ng-container [ngSwitch]="safeOpt.type">
        <label
          *ngSwitchCase="'checkbox'"
          nz-checkbox
          [nzDisabled]="disabled"
          [ngModel]="value"
          (ngModelChange)="change($event)"
        >
          {{ safeOpt.checkbox?.label }}
        </label>
        <label
          *ngSwitchCase="'radio'"
          nz-radio
          [nzDisabled]="disabled"
          [ngModel]="value"
          (ngModelChange)="change($event)"
        >
          {{ safeOpt.radio?.label }}
        </label>
        <a
          *ngSwitchCase="'link'"
          (click)="_link($event)"
          [attr.target]="safeOpt.link?.target"
          [attr.title]="value"
          [innerHTML]="_text"
        ></a>
        <nz-tag *ngSwitchCase="'tag'" [nzColor]="res?.result?.color">
          <span [innerHTML]="_text"></span>
        </nz-tag>
        <nz-badge *ngSwitchCase="'badge'" [nzStatus]="res?.result?.color" nzText="{{ _text }}"></nz-badge>
        <ng-template *ngSwitchCase="'widget'" cell-widget-host [data]="hostData"></ng-template>
        <ng-container *ngSwitchCase="'img'">
          <img
            *ngFor="let i of $any(_text)"
            [attr.src]="i"
            [attr.height]="safeOpt.img?.size"
            [attr.width]="safeOpt.img?.size"
            (click)="_showImg(i)"
            class="img"
            [class.point]="safeOpt.img?.big"
          />
        </ng-container>
        <ng-container *ngSwitchDefault>
          <span *ngIf="!isText" [innerHTML]="_text" [attr.title]="value"></span>
          <span *ngIf="isText" [innerText]="_text" [attr.title]="value"></span>
          <span *ngIf="_unit" class="unit">{{ _unit }}</span>
        </ng-container>
      </ng-container>
    </ng-template>
    <ng-template #textWrap>
      <ng-container *ngIf="showDefault">{{ safeOpt.default?.text }}</ng-container>
      <ng-container *ngIf="!showDefault">
        <span *ngIf="safeOpt?.tooltip; else text" nz-tooltip [nzTooltipTitle]="safeOpt.tooltip">
          <ng-template [ngTemplateOutlet]="text"></ng-template>
        </span>
      </ng-container>
    </ng-template>
    <span *ngIf="loading; else textWrap" nz-icon nzType="loading"></span>
  `, isInline: true, dependencies: [{ kind: "directive", type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i4.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i4.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: i4.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { kind: "directive", type: i4.NgSwitchDefault, selector: "[ngSwitchDefault]" }, { kind: "directive", type: i5.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i5.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: i6.NzCheckboxComponent, selector: "[nz-checkbox]", inputs: ["nzValue", "nzAutoFocus", "nzDisabled", "nzIndeterminate", "nzChecked", "nzId"], outputs: ["nzCheckedChange"], exportAs: ["nzCheckbox"] }, { kind: "component", type: i7.NzRadioComponent, selector: "[nz-radio],[nz-radio-button]", inputs: ["nzValue", "nzDisabled", "nzAutoFocus"], exportAs: ["nzRadio"] }, { kind: "component", type: i8.NzBadgeComponent, selector: "nz-badge", inputs: ["nzShowZero", "nzShowDot", "nzStandalone", "nzDot", "nzOverflowCount", "nzColor", "nzStyle", "nzText", "nzTitle", "nzStatus", "nzCount", "nzOffset", "nzSize"], exportAs: ["nzBadge"] }, { kind: "component", type: i9.NzTagComponent, selector: "nz-tag", inputs: ["nzMode", "nzColor", "nzChecked"], outputs: ["nzOnClose", "nzCheckedChange"], exportAs: ["nzTag"] }, { kind: "directive", type: i10.NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }, { kind: "directive", type: i11.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "directive", type: i12.CellHostDirective, selector: "[cell-widget-host]", inputs: ["data"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
__decorate([
    InputBoolean()
], CellComponent.prototype, "loading", void 0);
__decorate([
    InputBoolean()
], CellComponent.prototype, "disabled", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.6", ngImport: i0, type: CellComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'cell, [cell]',
                    template: `
    <ng-template #text>
      <ng-container [ngSwitch]="safeOpt.type">
        <label
          *ngSwitchCase="'checkbox'"
          nz-checkbox
          [nzDisabled]="disabled"
          [ngModel]="value"
          (ngModelChange)="change($event)"
        >
          {{ safeOpt.checkbox?.label }}
        </label>
        <label
          *ngSwitchCase="'radio'"
          nz-radio
          [nzDisabled]="disabled"
          [ngModel]="value"
          (ngModelChange)="change($event)"
        >
          {{ safeOpt.radio?.label }}
        </label>
        <a
          *ngSwitchCase="'link'"
          (click)="_link($event)"
          [attr.target]="safeOpt.link?.target"
          [attr.title]="value"
          [innerHTML]="_text"
        ></a>
        <nz-tag *ngSwitchCase="'tag'" [nzColor]="res?.result?.color">
          <span [innerHTML]="_text"></span>
        </nz-tag>
        <nz-badge *ngSwitchCase="'badge'" [nzStatus]="res?.result?.color" nzText="{{ _text }}"></nz-badge>
        <ng-template *ngSwitchCase="'widget'" cell-widget-host [data]="hostData"></ng-template>
        <ng-container *ngSwitchCase="'img'">
          <img
            *ngFor="let i of $any(_text)"
            [attr.src]="i"
            [attr.height]="safeOpt.img?.size"
            [attr.width]="safeOpt.img?.size"
            (click)="_showImg(i)"
            class="img"
            [class.point]="safeOpt.img?.big"
          />
        </ng-container>
        <ng-container *ngSwitchDefault>
          <span *ngIf="!isText" [innerHTML]="_text" [attr.title]="value"></span>
          <span *ngIf="isText" [innerText]="_text" [attr.title]="value"></span>
          <span *ngIf="_unit" class="unit">{{ _unit }}</span>
        </ng-container>
      </ng-container>
    </ng-template>
    <ng-template #textWrap>
      <ng-container *ngIf="showDefault">{{ safeOpt.default?.text }}</ng-container>
      <ng-container *ngIf="!showDefault">
        <span *ngIf="safeOpt?.tooltip; else text" nz-tooltip [nzTooltipTitle]="safeOpt.tooltip">
          <ng-template [ngTemplateOutlet]="text"></ng-template>
        </span>
      </ng-container>
    </ng-template>
    <span *ngIf="loading; else textWrap" nz-icon nzType="loading"></span>
  `,
                    exportAs: 'cell',
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: function () { return [{ type: i1.CellService }, { type: i2.Router }, { type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i3.NzImageService }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [WINDOW]
                }] }]; }, propDecorators: { value: [{
                type: Input
            }], valueChange: [{
                type: Output
            }], options: [{
                type: Input
            }], loading: [{
                type: Input
            }], disabled: [{
                type: Input
            }], currency: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvY2VsbC9jZWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUV2QixTQUFTLEVBRVQsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBR0wsTUFBTSxFQUdOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUt2QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFnQixZQUFZLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FBMkUzQyxNQUFNLE9BQU8sYUFBYTtJQWlCeEI7Ozs7Ozs7T0FPRztJQUNILElBQ0ksUUFBUSxDQUFDLEtBQWE7UUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsQ0FBQztRQUNwQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLEdBQUcsRUFBRSxPQUFPLElBQUksRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxHQUFHLEVBQUUsUUFBUSxLQUFLLE1BQU0sQ0FBQztJQUN2QyxDQUFDO0lBRUQsSUFBSSxRQUFRO1FBQ1YsT0FBTztZQUNMLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixPQUFPLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUMzQyxDQUFDO0lBQ0osQ0FBQztJQUVELFlBQ1UsR0FB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dCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFNpbXBsZUNoYW5nZSxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgdHlwZSB7IFNhZmVWYWx1ZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyB1cGRhdGVIb3N0Q2xhc3MgfSBmcm9tICdAZGVsb24vdXRpbC9icm93c2VyJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgSW5wdXRCb29sZWFuIH0gZnJvbSAnQGRlbG9uL3V0aWwvZGVjb3JhdG9yJztcbmltcG9ydCB7IFdJTkRPVyB9IGZyb20gJ0BkZWxvbi91dGlsL3Rva2VuJztcbmltcG9ydCB0eXBlIHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IE56SW1hZ2UsIE56SW1hZ2VTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pbWFnZSc7XG5cbmltcG9ydCB7IENlbGxTZXJ2aWNlIH0gZnJvbSAnLi9jZWxsLnNlcnZpY2UnO1xuaW1wb3J0IHR5cGUgeyBDZWxsRGVmYXVsdFRleHQsIENlbGxPcHRpb25zLCBDZWxsVGV4dFJlc3VsdCwgQ2VsbFZhbHVlLCBDZWxsV2lkZ2V0RGF0YSB9IGZyb20gJy4vY2VsbC50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NlbGwsIFtjZWxsXScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLXRlbXBsYXRlICN0ZXh0PlxuICAgICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwic2FmZU9wdC50eXBlXCI+XG4gICAgICAgIDxsYWJlbFxuICAgICAgICAgICpuZ1N3aXRjaENhc2U9XCInY2hlY2tib3gnXCJcbiAgICAgICAgICBuei1jaGVja2JveFxuICAgICAgICAgIFtuekRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgICBbbmdNb2RlbF09XCJ2YWx1ZVwiXG4gICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiY2hhbmdlKCRldmVudClcIlxuICAgICAgICA+XG4gICAgICAgICAge3sgc2FmZU9wdC5jaGVja2JveD8ubGFiZWwgfX1cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGxhYmVsXG4gICAgICAgICAgKm5nU3dpdGNoQ2FzZT1cIidyYWRpbydcIlxuICAgICAgICAgIG56LXJhZGlvXG4gICAgICAgICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICAgIFtuZ01vZGVsXT1cInZhbHVlXCJcbiAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJjaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgID5cbiAgICAgICAgICB7eyBzYWZlT3B0LnJhZGlvPy5sYWJlbCB9fVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8YVxuICAgICAgICAgICpuZ1N3aXRjaENhc2U9XCInbGluaydcIlxuICAgICAgICAgIChjbGljayk9XCJfbGluaygkZXZlbnQpXCJcbiAgICAgICAgICBbYXR0ci50YXJnZXRdPVwic2FmZU9wdC5saW5rPy50YXJnZXRcIlxuICAgICAgICAgIFthdHRyLnRpdGxlXT1cInZhbHVlXCJcbiAgICAgICAgICBbaW5uZXJIVE1MXT1cIl90ZXh0XCJcbiAgICAgICAgPjwvYT5cbiAgICAgICAgPG56LXRhZyAqbmdTd2l0Y2hDYXNlPVwiJ3RhZydcIiBbbnpDb2xvcl09XCJyZXM/LnJlc3VsdD8uY29sb3JcIj5cbiAgICAgICAgICA8c3BhbiBbaW5uZXJIVE1MXT1cIl90ZXh0XCI+PC9zcGFuPlxuICAgICAgICA8L256LXRhZz5cbiAgICAgICAgPG56LWJhZGdlICpuZ1N3aXRjaENhc2U9XCInYmFkZ2UnXCIgW256U3RhdHVzXT1cInJlcz8ucmVzdWx0Py5jb2xvclwiIG56VGV4dD1cInt7IF90ZXh0IH19XCI+PC9uei1iYWRnZT5cbiAgICAgICAgPG5nLXRlbXBsYXRlICpuZ1N3aXRjaENhc2U9XCInd2lkZ2V0J1wiIGNlbGwtd2lkZ2V0LWhvc3QgW2RhdGFdPVwiaG9zdERhdGFcIj48L25nLXRlbXBsYXRlPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInaW1nJ1wiPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICpuZ0Zvcj1cImxldCBpIG9mICRhbnkoX3RleHQpXCJcbiAgICAgICAgICAgIFthdHRyLnNyY109XCJpXCJcbiAgICAgICAgICAgIFthdHRyLmhlaWdodF09XCJzYWZlT3B0LmltZz8uc2l6ZVwiXG4gICAgICAgICAgICBbYXR0ci53aWR0aF09XCJzYWZlT3B0LmltZz8uc2l6ZVwiXG4gICAgICAgICAgICAoY2xpY2spPVwiX3Nob3dJbWcoaSlcIlxuICAgICAgICAgICAgY2xhc3M9XCJpbWdcIlxuICAgICAgICAgICAgW2NsYXNzLnBvaW50XT1cInNhZmVPcHQuaW1nPy5iaWdcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaERlZmF1bHQ+XG4gICAgICAgICAgPHNwYW4gKm5nSWY9XCIhaXNUZXh0XCIgW2lubmVySFRNTF09XCJfdGV4dFwiIFthdHRyLnRpdGxlXT1cInZhbHVlXCI+PC9zcGFuPlxuICAgICAgICAgIDxzcGFuICpuZ0lmPVwiaXNUZXh0XCIgW2lubmVyVGV4dF09XCJfdGV4dFwiIFthdHRyLnRpdGxlXT1cInZhbHVlXCI+PC9zcGFuPlxuICAgICAgICAgIDxzcGFuICpuZ0lmPVwiX3VuaXRcIiBjbGFzcz1cInVuaXRcIj57eyBfdW5pdCB9fTwvc3Bhbj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZSAjdGV4dFdyYXA+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwic2hvd0RlZmF1bHRcIj57eyBzYWZlT3B0LmRlZmF1bHQ/LnRleHQgfX08L25nLWNvbnRhaW5lcj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhc2hvd0RlZmF1bHRcIj5cbiAgICAgICAgPHNwYW4gKm5nSWY9XCJzYWZlT3B0Py50b29sdGlwOyBlbHNlIHRleHRcIiBuei10b29sdGlwIFtuelRvb2x0aXBUaXRsZV09XCJzYWZlT3B0LnRvb2x0aXBcIj5cbiAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwidGV4dFwiPjwvbmctdGVtcGxhdGU+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPHNwYW4gKm5nSWY9XCJsb2FkaW5nOyBlbHNlIHRleHRXcmFwXCIgbnotaWNvbiBuelR5cGU9XCJsb2FkaW5nXCI+PC9zcGFuPlxuICBgLFxuICBleHBvcnRBczogJ2NlbGwnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgQ2VsbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2xvYWRpbmc6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Rpc2FibGVkOiBCb29sZWFuSW5wdXQ7XG5cbiAgcHJpdmF0ZSBkZXN0cm95JD86IFN1YnNjcmlwdGlvbjtcblxuICBfdGV4dCE6IHN0cmluZyB8IFNhZmVWYWx1ZSB8IHN0cmluZ1tdIHwgbnVtYmVyO1xuICBfdW5pdD86IHN0cmluZztcbiAgcmVzPzogQ2VsbFRleHRSZXN1bHQ7XG4gIHNob3dEZWZhdWx0ID0gZmFsc2U7XG5cbiAgQElucHV0KCkgdmFsdWU/OiBDZWxsVmFsdWU7XG4gIEBPdXRwdXQoKSByZWFkb25seSB2YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8TnpTYWZlQW55PigpO1xuICBASW5wdXQoKSBvcHRpb25zPzogQ2VsbE9wdGlvbnM7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBsb2FkaW5nID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkaXNhYmxlZCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiDotKfluIHlv6vmjbfpoblcbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogPGNlbGwgW2N1cnJlbmN5XT1cIjEwMDBcIj48L2NlbGw+XG4gICAqIOetieWQjOS6jlxuICAgKiA8Y2VsbCBbdmFsdWVdPVwiMTAwMFwiIFtvcHRpb25zXT1cInt0eXBlOiAnY3VycmVuY3knfVwiPjwvY2VsbD5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBjdXJyZW5jeSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMub3B0aW9ucyA9IHsgdHlwZTogJ2N1cnJlbmN5JyB9O1xuICAgIHRoaXMudXBkYXRlVmFsdWUoKTtcbiAgfVxuXG4gIGdldCBzYWZlT3B0KCk6IENlbGxPcHRpb25zIHtcbiAgICByZXR1cm4gdGhpcy5yZXM/Lm9wdGlvbnMgPz8ge307XG4gIH1cblxuICBnZXQgaXNUZXh0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnJlcz8uc2FmZUh0bWwgPT09ICd0ZXh0JztcbiAgfVxuXG4gIGdldCBob3N0RGF0YSgpOiBDZWxsV2lkZ2V0RGF0YSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgb3B0aW9uczogdGhpcy5zcnYuZml4T3B0aW9ucyh0aGlzLm9wdGlvbnMpXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc3J2OiBDZWxsU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBpbWdTcnY6IE56SW1hZ2VTZXJ2aWNlLFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgQEluamVjdChXSU5ET1cpIHByaXZhdGUgd2luOiBhbnlcbiAgKSB7fVxuXG4gIHByaXZhdGUgdXBkYXRlVmFsdWUoKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JD8udW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLmRlc3Ryb3kkID0gdGhpcy5zcnYuZ2V0KHRoaXMudmFsdWUsIHRoaXMub3B0aW9ucykuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICB0aGlzLnJlcyA9IHJlcztcbiAgICAgIHRoaXMuc2hvd0RlZmF1bHQgPSB0aGlzLnZhbHVlID09ICh0aGlzLnNhZmVPcHQuZGVmYXVsdCBhcyBDZWxsRGVmYXVsdFRleHQpLmNvbmRpdGlvbjtcbiAgICAgIHRoaXMuX3RleHQgPSByZXMucmVzdWx0Py50ZXh0ID8/ICcnO1xuICAgICAgdGhpcy5fdW5pdCA9IHJlcy5yZXN1bHQ/LnVuaXQgPz8gdGhpcy5zYWZlT3B0Py51bml0O1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgdGhpcy5zZXRDbGFzcygpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDbGFzcygpOiB2b2lkIHtcbiAgICBjb25zdCB7IGVsLCByZW5kZXJlciB9ID0gdGhpcztcbiAgICBjb25zdCB7IHJlbmRlclR5cGUsIHNpemUgfSA9IHRoaXMuc2FmZU9wdDtcbiAgICB1cGRhdGVIb3N0Q2xhc3MoZWwubmF0aXZlRWxlbWVudCwgcmVuZGVyZXIsIHtcbiAgICAgIFtgY2VsbGBdOiB0cnVlLFxuICAgICAgW2BjZWxsX18ke3JlbmRlclR5cGV9YF06IHJlbmRlclR5cGUgIT0gbnVsbCxcbiAgICAgIFtgY2VsbF9fJHtzaXplfWBdOiBzaXplICE9IG51bGwsXG4gICAgICBbYGNlbGxfX2hhcy11bml0YF06IHRoaXMuX3VuaXQsXG4gICAgICBbYGNlbGxfX2hhcy1kZWZhdWx0YF06IHRoaXMuc2hvd0RlZmF1bHQsXG4gICAgICBbYGNlbGxfX2Rpc2FibGVkYF06IHRoaXMuZGlzYWJsZWRcbiAgICB9KTtcbiAgICBlbC5uYXRpdmVFbGVtZW50LmRhdGFzZXQudHlwZSA9IHRoaXMuc2FmZU9wdC50eXBlO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogeyBbcCBpbiBrZXlvZiBDZWxsQ29tcG9uZW50XT86IFNpbXBsZUNoYW5nZSB9KTogdm9pZCB7XG4gICAgLy8gRG8gbm90IGNhbGwgdXBkYXRlVmFsdWUgd2hlbiBvbmx5IHVwZGF0aW5nIGxvYWRpbmcsIGRpc2FibGVkXG4gICAgaWYgKE9iamVjdC5rZXlzKGNoYW5nZXMpLmV2ZXJ5KGsgPT4gWydsb2FkaW5nJywgJ2Rpc2FibGVkJ10uaW5jbHVkZXMoaykpKSB7XG4gICAgICB0aGlzLnNldENsYXNzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudXBkYXRlVmFsdWUoKTtcbiAgICB9XG4gIH1cblxuICBjaGFuZ2UodmFsdWU6IE56U2FmZUFueSk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodmFsdWUpO1xuICB9XG5cbiAgX2xpbmsoZTogRXZlbnQpOiB2b2lkIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSByZXR1cm47XG5cbiAgICBjb25zdCBsaW5rID0gdGhpcy5zYWZlT3B0Lmxpbms7XG4gICAgY29uc3QgdXJsID0gbGluaz8udXJsO1xuICAgIGlmICh1cmwgPT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgaWYgKC9odHRwcz86XFwvXFwvL2cudGVzdCh1cmwpKSB7XG4gICAgICAodGhpcy53aW4gYXMgV2luZG93KS5vcGVuKHVybCwgbGluaz8udGFyZ2V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCh1cmwpO1xuICAgIH1cbiAgfVxuXG4gIF9zaG93SW1nKGltZzogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgY29uZmlnID0gdGhpcy5zYWZlT3B0LmltZztcbiAgICBpZiAoY29uZmlnID09IG51bGwgfHwgY29uZmlnLmJpZyA9PSBudWxsKSByZXR1cm47XG5cbiAgICBsZXQgaWR4ID0gLTE7XG4gICAgY29uc3QgbGlzdCA9ICh0aGlzLl90ZXh0IGFzIHN0cmluZ1tdKS5tYXAoKHAsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaWR4ID09PSAtMSAmJiBwID09PSBpbWcpIGlkeCA9IGluZGV4O1xuICAgICAgcmV0dXJuIHR5cGVvZiBjb25maWcuYmlnID09PSAnZnVuY3Rpb24nID8gY29uZmlnLmJpZyhwKSA6IHA7XG4gICAgfSk7XG4gICAgdGhpcy5pbWdTcnZcbiAgICAgIC5wcmV2aWV3KFxuICAgICAgICBsaXN0Lm1hcChwID0+ICh7IHNyYzogcCB9KSBhcyBOekltYWdlKSxcbiAgICAgICAgY29uZmlnLnByZXZpZXdPcHRpb25zXG4gICAgICApXG4gICAgICAuc3dpdGNoVG8oaWR4KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQ/LnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==