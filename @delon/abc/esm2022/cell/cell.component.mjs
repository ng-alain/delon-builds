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
            default: this.default,
            defaultCondition: this.defaultCondition,
            options: this.srv.fixOptions(this.options),
            truncate: this.truncate
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
        this.default = '-';
        this.defaultCondition = null;
        this.truncate = false;
        this.loading = false;
        this.disabled = false;
    }
    updateValue() {
        this.destroy$?.unsubscribe();
        this.destroy$ = this.srv.get(this.value, this.options).subscribe(res => {
            this.res = res;
            this.showDefault = this.value == this.defaultCondition;
            this._text = res.result?.text ?? '';
            this._unit = res.result?.unit ?? this.unit;
            this.cdr.detectChanges();
            this.setClass();
        });
    }
    setClass() {
        const { el, renderer } = this;
        updateHostClass(el.nativeElement, renderer, {
            [`cell`]: true,
            [`cell__${this.type}`]: this.type != null,
            [`cell__${this.size}`]: this.size != null,
            [`cell__has-unit`]: this._unit,
            [`cell__has-default`]: this.showDefault,
            [`cell__disabled`]: this.disabled
        });
        el.nativeElement.dataset.type = this.safeOpt.type;
    }
    ngOnChanges() {
        this.updateValue();
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
        if (config == null || config.big === false)
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.6", type: CellComponent, selector: "cell, [cell]", inputs: { value: "value", default: "default", defaultCondition: "defaultCondition", options: "options", unit: "unit", truncate: "truncate", loading: "loading", disabled: "disabled", type: "type", size: "size", currency: "currency" }, outputs: { valueChange: "valueChange" }, exportAs: ["cell"], usesOnChanges: true, ngImport: i0, template: `
    <ng-template #text>
      <ng-container [ngSwitch]="safeOpt.type">
        <label
          *ngSwitchCase="'checkbox'"
          nz-checkbox
          [nzDisabled]="disabled"
          [ngModel]="value"
          (ngModelChange)="change($event)"
          >{{ safeOpt.checkbox?.label }}</label
        >
        <label
          *ngSwitchCase="'radio'"
          nz-radio
          [nzDisabled]="disabled"
          [ngModel]="value"
          (ngModelChange)="change($event)"
          >{{ safeOpt.radio?.label }}</label
        >
        <a
          *ngSwitchCase="'link'"
          (click)="_link($event)"
          [attr.target]="safeOpt.link?.target"
          [attr.title]="truncate ? value : null"
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
          <span *ngIf="!isText" [innerHTML]="_text" [attr.title]="truncate ? value : null"></span>
          <span *ngIf="isText" [innerText]="_text" [attr.title]="truncate ? value : null"></span>
          <span *ngIf="_unit" class="unit">{{ _unit }}</span>
        </ng-container>
      </ng-container>
    </ng-template>
    <ng-template #textWrap>
      <ng-container *ngIf="showDefault">{{ default }}</ng-container>
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
], CellComponent.prototype, "truncate", void 0);
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
          >{{ safeOpt.checkbox?.label }}</label
        >
        <label
          *ngSwitchCase="'radio'"
          nz-radio
          [nzDisabled]="disabled"
          [ngModel]="value"
          (ngModelChange)="change($event)"
          >{{ safeOpt.radio?.label }}</label
        >
        <a
          *ngSwitchCase="'link'"
          (click)="_link($event)"
          [attr.target]="safeOpt.link?.target"
          [attr.title]="truncate ? value : null"
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
          <span *ngIf="!isText" [innerHTML]="_text" [attr.title]="truncate ? value : null"></span>
          <span *ngIf="isText" [innerText]="_text" [attr.title]="truncate ? value : null"></span>
          <span *ngIf="_unit" class="unit">{{ _unit }}</span>
        </ng-container>
      </ng-container>
    </ng-template>
    <ng-template #textWrap>
      <ng-container *ngIf="showDefault">{{ default }}</ng-container>
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
            }], default: [{
                type: Input
            }], defaultCondition: [{
                type: Input
            }], options: [{
                type: Input
            }], unit: [{
                type: Input
            }], truncate: [{
                type: Input
            }], loading: [{
                type: Input
            }], disabled: [{
                type: Input
            }], type: [{
                type: Input
            }], size: [{
                type: Input
            }], currency: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvY2VsbC9jZWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUV2QixTQUFTLEVBRVQsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBR0wsTUFBTSxFQUVOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUt2QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFnQixZQUFZLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FBeUUzQyxNQUFNLE9BQU8sYUFBYTtJQXdCeEI7Ozs7Ozs7T0FPRztJQUNILElBQ0ksUUFBUSxDQUFDLEtBQWE7UUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsQ0FBQztRQUNwQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLEdBQUcsRUFBRSxPQUFPLElBQUksRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxHQUFHLEVBQUUsUUFBUSxLQUFLLE1BQU0sQ0FBQztJQUN2QyxDQUFDO0lBRUQsSUFBSSxRQUFRO1FBQ1YsT0FBTztZQUNMLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjtZQUN2QyxPQUFPLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FB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Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFXRixRQUFRO3NCQURYLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgdXBkYXRlSG9zdENsYXNzIH0gZnJvbSAnQGRlbG9uL3V0aWwvYnJvd3Nlcic7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIElucHV0Qm9vbGVhbiB9IGZyb20gJ0BkZWxvbi91dGlsL2RlY29yYXRvcic7XG5pbXBvcnQgeyBXSU5ET1cgfSBmcm9tICdAZGVsb24vdXRpbC90b2tlbic7XG5pbXBvcnQgdHlwZSB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBOekltYWdlLCBOekltYWdlU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaW1hZ2UnO1xuXG5pbXBvcnQgeyBDZWxsU2VydmljZSB9IGZyb20gJy4vY2VsbC5zZXJ2aWNlJztcbmltcG9ydCB0eXBlIHsgQ2VsbE9wdGlvbnMsIENlbGxUZXh0UmVzdWx0LCBDZWxsV2lkZ2V0RGF0YSB9IGZyb20gJy4vY2VsbC50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NlbGwsIFtjZWxsXScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLXRlbXBsYXRlICN0ZXh0PlxuICAgICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwic2FmZU9wdC50eXBlXCI+XG4gICAgICAgIDxsYWJlbFxuICAgICAgICAgICpuZ1N3aXRjaENhc2U9XCInY2hlY2tib3gnXCJcbiAgICAgICAgICBuei1jaGVja2JveFxuICAgICAgICAgIFtuekRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgICBbbmdNb2RlbF09XCJ2YWx1ZVwiXG4gICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiY2hhbmdlKCRldmVudClcIlxuICAgICAgICAgID57eyBzYWZlT3B0LmNoZWNrYm94Py5sYWJlbCB9fTwvbGFiZWxcbiAgICAgICAgPlxuICAgICAgICA8bGFiZWxcbiAgICAgICAgICAqbmdTd2l0Y2hDYXNlPVwiJ3JhZGlvJ1wiXG4gICAgICAgICAgbnotcmFkaW9cbiAgICAgICAgICBbbnpEaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgICAgW25nTW9kZWxdPVwidmFsdWVcIlxuICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cImNoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgICA+e3sgc2FmZU9wdC5yYWRpbz8ubGFiZWwgfX08L2xhYmVsXG4gICAgICAgID5cbiAgICAgICAgPGFcbiAgICAgICAgICAqbmdTd2l0Y2hDYXNlPVwiJ2xpbmsnXCJcbiAgICAgICAgICAoY2xpY2spPVwiX2xpbmsoJGV2ZW50KVwiXG4gICAgICAgICAgW2F0dHIudGFyZ2V0XT1cInNhZmVPcHQubGluaz8udGFyZ2V0XCJcbiAgICAgICAgICBbYXR0ci50aXRsZV09XCJ0cnVuY2F0ZSA/IHZhbHVlIDogbnVsbFwiXG4gICAgICAgICAgW2lubmVySFRNTF09XCJfdGV4dFwiXG4gICAgICAgID48L2E+XG4gICAgICAgIDxuei10YWcgKm5nU3dpdGNoQ2FzZT1cIid0YWcnXCIgW256Q29sb3JdPVwicmVzPy5yZXN1bHQ/LmNvbG9yXCI+XG4gICAgICAgICAgPHNwYW4gW2lubmVySFRNTF09XCJfdGV4dFwiPjwvc3Bhbj5cbiAgICAgICAgPC9uei10YWc+XG4gICAgICAgIDxuei1iYWRnZSAqbmdTd2l0Y2hDYXNlPVwiJ2JhZGdlJ1wiIFtuelN0YXR1c109XCJyZXM/LnJlc3VsdD8uY29sb3JcIiBuelRleHQ9XCJ7eyBfdGV4dCB9fVwiPjwvbnotYmFkZ2U+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSAqbmdTd2l0Y2hDYXNlPVwiJ3dpZGdldCdcIiBjZWxsLXdpZGdldC1ob3N0IFtkYXRhXT1cImhvc3REYXRhXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ2ltZydcIj5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAqbmdGb3I9XCJsZXQgaSBvZiAkYW55KF90ZXh0KVwiXG4gICAgICAgICAgICBbYXR0ci5zcmNdPVwiaVwiXG4gICAgICAgICAgICBbYXR0ci5oZWlnaHRdPVwic2FmZU9wdC5pbWc/LnNpemVcIlxuICAgICAgICAgICAgW2F0dHIud2lkdGhdPVwic2FmZU9wdC5pbWc/LnNpemVcIlxuICAgICAgICAgICAgKGNsaWNrKT1cIl9zaG93SW1nKGkpXCJcbiAgICAgICAgICAgIGNsYXNzPVwiaW1nXCJcbiAgICAgICAgICAgIFtjbGFzcy5wb2ludF09XCJzYWZlT3B0LmltZz8uYmlnXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hEZWZhdWx0PlxuICAgICAgICAgIDxzcGFuICpuZ0lmPVwiIWlzVGV4dFwiIFtpbm5lckhUTUxdPVwiX3RleHRcIiBbYXR0ci50aXRsZV09XCJ0cnVuY2F0ZSA/IHZhbHVlIDogbnVsbFwiPjwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiAqbmdJZj1cImlzVGV4dFwiIFtpbm5lclRleHRdPVwiX3RleHRcIiBbYXR0ci50aXRsZV09XCJ0cnVuY2F0ZSA/IHZhbHVlIDogbnVsbFwiPjwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiAqbmdJZj1cIl91bml0XCIgY2xhc3M9XCJ1bml0XCI+e3sgX3VuaXQgfX08L3NwYW4+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGUgI3RleHRXcmFwPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInNob3dEZWZhdWx0XCI+e3sgZGVmYXVsdCB9fTwvbmctY29udGFpbmVyPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFzaG93RGVmYXVsdFwiPlxuICAgICAgICA8c3BhbiAqbmdJZj1cInNhZmVPcHQ/LnRvb2x0aXA7IGVsc2UgdGV4dFwiIG56LXRvb2x0aXAgW256VG9vbHRpcFRpdGxlXT1cInNhZmVPcHQudG9vbHRpcFwiPlxuICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJ0ZXh0XCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8c3BhbiAqbmdJZj1cImxvYWRpbmc7IGVsc2UgdGV4dFdyYXBcIiBuei1pY29uIG56VHlwZT1cImxvYWRpbmdcIj48L3NwYW4+XG4gIGAsXG4gIGV4cG9ydEFzOiAnY2VsbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBDZWxsQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfdHJ1bmNhdGU6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2xvYWRpbmc6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Rpc2FibGVkOiBCb29sZWFuSW5wdXQ7XG5cbiAgcHJpdmF0ZSBkZXN0cm95JD86IFN1YnNjcmlwdGlvbjtcblxuICBfdGV4dCE6IHN0cmluZyB8IFNhZmVIdG1sO1xuICBfdW5pdD86IHN0cmluZztcbiAgcmVzPzogQ2VsbFRleHRSZXN1bHQ7XG4gIHNob3dEZWZhdWx0ID0gZmFsc2U7XG5cbiAgQElucHV0KCkgdmFsdWU/OiB1bmtub3duO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgdmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE56U2FmZUFueT4oKTtcbiAgQElucHV0KCkgZGVmYXVsdCA9ICctJztcbiAgQElucHV0KCkgZGVmYXVsdENvbmRpdGlvbj86IHVua25vd24gPSBudWxsO1xuICBASW5wdXQoKSBvcHRpb25zPzogQ2VsbE9wdGlvbnM7XG4gIEBJbnB1dCgpIHVuaXQ/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSB0cnVuY2F0ZSA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbG9hZGluZyA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgdHlwZT86ICdwcmltYXJ5JyB8ICdzdWNjZXNzJyB8ICdkYW5nZXInIHwgJ3dhcm5pbmcnO1xuICBASW5wdXQoKSBzaXplPzogJ2xhcmdlJyB8ICdzbWFsbCc7XG5cbiAgLyoqXG4gICAqIOi0p+W4geW/q+aNt+mhuVxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiA8Y2VsbCBbY3VycmVuY3ldPVwiMTAwMFwiPjwvY2VsbD5cbiAgICog562J5ZCM5LqOXG4gICAqIDxjZWxsIFt2YWx1ZV09XCIxMDAwXCIgW29wdGlvbnNdPVwie3R5cGU6ICdjdXJyZW5jeSd9XCI+PC9jZWxsPlxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IGN1cnJlbmN5KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5vcHRpb25zID0geyB0eXBlOiAnY3VycmVuY3knIH07XG4gICAgdGhpcy51cGRhdGVWYWx1ZSgpO1xuICB9XG5cbiAgZ2V0IHNhZmVPcHQoKTogQ2VsbE9wdGlvbnMge1xuICAgIHJldHVybiB0aGlzLnJlcz8ub3B0aW9ucyA/PyB7fTtcbiAgfVxuXG4gIGdldCBpc1RleHQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucmVzPy5zYWZlSHRtbCA9PT0gJ3RleHQnO1xuICB9XG5cbiAgZ2V0IGhvc3REYXRhKCk6IENlbGxXaWRnZXREYXRhIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICBkZWZhdWx0OiB0aGlzLmRlZmF1bHQsXG4gICAgICBkZWZhdWx0Q29uZGl0aW9uOiB0aGlzLmRlZmF1bHRDb25kaXRpb24sXG4gICAgICBvcHRpb25zOiB0aGlzLnNydi5maXhPcHRpb25zKHRoaXMub3B0aW9ucyksXG4gICAgICB0cnVuY2F0ZTogdGhpcy50cnVuY2F0ZVxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHNydjogQ2VsbFNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgaW1nU3J2OiBOekltYWdlU2VydmljZSxcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgIEBJbmplY3QoV0lORE9XKSBwcml2YXRlIHdpbjogYW55XG4gICkge31cblxuICBwcml2YXRlIHVwZGF0ZVZhbHVlKCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQ/LnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5kZXN0cm95JCA9IHRoaXMuc3J2LmdldCh0aGlzLnZhbHVlLCB0aGlzLm9wdGlvbnMpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgdGhpcy5yZXMgPSByZXM7XG4gICAgICB0aGlzLnNob3dEZWZhdWx0ID0gdGhpcy52YWx1ZSA9PSB0aGlzLmRlZmF1bHRDb25kaXRpb247XG4gICAgICB0aGlzLl90ZXh0ID0gcmVzLnJlc3VsdD8udGV4dCA/PyAnJztcbiAgICAgIHRoaXMuX3VuaXQgPSByZXMucmVzdWx0Py51bml0ID8/IHRoaXMudW5pdDtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIHRoaXMuc2V0Q2xhc3MoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0Q2xhc3MoKTogdm9pZCB7XG4gICAgY29uc3QgeyBlbCwgcmVuZGVyZXIgfSA9IHRoaXM7XG4gICAgdXBkYXRlSG9zdENsYXNzKGVsLm5hdGl2ZUVsZW1lbnQsIHJlbmRlcmVyLCB7XG4gICAgICBbYGNlbGxgXTogdHJ1ZSxcbiAgICAgIFtgY2VsbF9fJHt0aGlzLnR5cGV9YF06IHRoaXMudHlwZSAhPSBudWxsLFxuICAgICAgW2BjZWxsX18ke3RoaXMuc2l6ZX1gXTogdGhpcy5zaXplICE9IG51bGwsXG4gICAgICBbYGNlbGxfX2hhcy11bml0YF06IHRoaXMuX3VuaXQsXG4gICAgICBbYGNlbGxfX2hhcy1kZWZhdWx0YF06IHRoaXMuc2hvd0RlZmF1bHQsXG4gICAgICBbYGNlbGxfX2Rpc2FibGVkYF06IHRoaXMuZGlzYWJsZWRcbiAgICB9KTtcbiAgICBlbC5uYXRpdmVFbGVtZW50LmRhdGFzZXQudHlwZSA9IHRoaXMuc2FmZU9wdC50eXBlO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVWYWx1ZSgpO1xuICB9XG5cbiAgY2hhbmdlKHZhbHVlOiBOelNhZmVBbnkpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHZhbHVlKTtcbiAgfVxuXG4gIF9saW5rKGU6IEV2ZW50KTogdm9pZCB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkgcmV0dXJuO1xuXG4gICAgY29uc3QgbGluayA9IHRoaXMuc2FmZU9wdC5saW5rO1xuICAgIGNvbnN0IHVybCA9IGxpbms/LnVybDtcbiAgICBpZiAodXJsID09IG51bGwpIHJldHVybjtcblxuICAgIGlmICgvaHR0cHM/OlxcL1xcLy9nLnRlc3QodXJsKSkge1xuICAgICAgKHRoaXMud2luIGFzIFdpbmRvdykub3Blbih1cmwsIGxpbms/LnRhcmdldCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwodXJsKTtcbiAgICB9XG4gIH1cblxuICBfc2hvd0ltZyhpbWc6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuc2FmZU9wdC5pbWc7XG4gICAgaWYgKGNvbmZpZyA9PSBudWxsIHx8IGNvbmZpZy5iaWcgPT09IGZhbHNlKSByZXR1cm47XG5cbiAgICBsZXQgaWR4ID0gLTE7XG4gICAgY29uc3QgbGlzdCA9ICh0aGlzLl90ZXh0IGFzIHN0cmluZ1tdKS5tYXAoKHAsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaWR4ID09PSAtMSAmJiBwID09PSBpbWcpIGlkeCA9IGluZGV4O1xuICAgICAgcmV0dXJuIHR5cGVvZiBjb25maWcuYmlnID09PSAnZnVuY3Rpb24nID8gY29uZmlnLmJpZyhwKSA6IHA7XG4gICAgfSk7XG4gICAgdGhpcy5pbWdTcnZcbiAgICAgIC5wcmV2aWV3KFxuICAgICAgICBsaXN0Lm1hcChwID0+ICh7IHNyYzogcCB9IGFzIE56SW1hZ2UpKSxcbiAgICAgICAgY29uZmlnLnByZXZpZXdPcHRpb25zXG4gICAgICApXG4gICAgICAuc3dpdGNoVG8oaWR4KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQ/LnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==