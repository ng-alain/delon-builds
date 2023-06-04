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
class CellComponent {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: CellComponent, deps: [{ token: i1.CellService }, { token: i2.Router }, { token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i3.NzImageService }, { token: WINDOW }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.4", type: CellComponent, selector: "cell, [cell]", inputs: { value: "value", default: "default", defaultCondition: "defaultCondition", options: "options", unit: "unit", truncate: "truncate", loading: "loading", disabled: "disabled", type: "type", size: "size", currency: "currency" }, outputs: { valueChange: "valueChange" }, exportAs: ["cell"], usesOnChanges: true, ngImport: i0, template: `
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
export { CellComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: CellComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvY2VsbC9jZWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUV2QixTQUFTLEVBRVQsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBR0wsTUFBTSxFQUVOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUt2QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFnQixZQUFZLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FBTzNDLE1Ba0VhLGFBQWE7SUF3QnhCOzs7Ozs7O09BT0c7SUFDSCxJQUNJLFFBQVEsQ0FBQyxLQUFhO1FBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxHQUFHLEVBQUUsT0FBTyxJQUFJLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsR0FBRyxFQUFFLFFBQVEsS0FBSyxNQUFNLENBQUM7SUFDdkMsQ0FBQztJQUVELElBQUksUUFBUTtRQUNWLE9BQU87WUFDTCxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3JCLGdCQUFnQixFQUFFLElBQUksQ0FBQyxnQkFBZ0I7WUFDdkMsT0FBTyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsVUFB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S0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQVdGLFFBQVE7c0JBRFgsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyB1cGRhdGVIb3N0Q2xhc3MgfSBmcm9tICdAZGVsb24vdXRpbC9icm93c2VyJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgSW5wdXRCb29sZWFuIH0gZnJvbSAnQGRlbG9uL3V0aWwvZGVjb3JhdG9yJztcbmltcG9ydCB7IFdJTkRPVyB9IGZyb20gJ0BkZWxvbi91dGlsL3Rva2VuJztcbmltcG9ydCB0eXBlIHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IE56SW1hZ2UsIE56SW1hZ2VTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pbWFnZSc7XG5cbmltcG9ydCB7IENlbGxTZXJ2aWNlIH0gZnJvbSAnLi9jZWxsLnNlcnZpY2UnO1xuaW1wb3J0IHR5cGUgeyBDZWxsT3B0aW9ucywgQ2VsbFRleHRSZXN1bHQsIENlbGxXaWRnZXREYXRhIH0gZnJvbSAnLi9jZWxsLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2VsbCwgW2NlbGxdJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctdGVtcGxhdGUgI3RleHQ+XG4gICAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJzYWZlT3B0LnR5cGVcIj5cbiAgICAgICAgPGxhYmVsXG4gICAgICAgICAgKm5nU3dpdGNoQ2FzZT1cIidjaGVja2JveCdcIlxuICAgICAgICAgIG56LWNoZWNrYm94XG4gICAgICAgICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICAgIFtuZ01vZGVsXT1cInZhbHVlXCJcbiAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJjaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgICAgPnt7IHNhZmVPcHQuY2hlY2tib3g/LmxhYmVsIH19PC9sYWJlbFxuICAgICAgICA+XG4gICAgICAgIDxsYWJlbFxuICAgICAgICAgICpuZ1N3aXRjaENhc2U9XCIncmFkaW8nXCJcbiAgICAgICAgICBuei1yYWRpb1xuICAgICAgICAgIFtuekRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgICBbbmdNb2RlbF09XCJ2YWx1ZVwiXG4gICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiY2hhbmdlKCRldmVudClcIlxuICAgICAgICAgID57eyBzYWZlT3B0LnJhZGlvPy5sYWJlbCB9fTwvbGFiZWxcbiAgICAgICAgPlxuICAgICAgICA8YVxuICAgICAgICAgICpuZ1N3aXRjaENhc2U9XCInbGluaydcIlxuICAgICAgICAgIChjbGljayk9XCJfbGluaygkZXZlbnQpXCJcbiAgICAgICAgICBbYXR0ci50YXJnZXRdPVwic2FmZU9wdC5saW5rPy50YXJnZXRcIlxuICAgICAgICAgIFthdHRyLnRpdGxlXT1cInRydW5jYXRlID8gdmFsdWUgOiBudWxsXCJcbiAgICAgICAgICBbaW5uZXJIVE1MXT1cIl90ZXh0XCJcbiAgICAgICAgPjwvYT5cbiAgICAgICAgPG56LXRhZyAqbmdTd2l0Y2hDYXNlPVwiJ3RhZydcIiBbbnpDb2xvcl09XCJyZXM/LnJlc3VsdD8uY29sb3JcIj5cbiAgICAgICAgICA8c3BhbiBbaW5uZXJIVE1MXT1cIl90ZXh0XCI+PC9zcGFuPlxuICAgICAgICA8L256LXRhZz5cbiAgICAgICAgPG56LWJhZGdlICpuZ1N3aXRjaENhc2U9XCInYmFkZ2UnXCIgW256U3RhdHVzXT1cInJlcz8ucmVzdWx0Py5jb2xvclwiIG56VGV4dD1cInt7IF90ZXh0IH19XCI+PC9uei1iYWRnZT5cbiAgICAgICAgPG5nLXRlbXBsYXRlICpuZ1N3aXRjaENhc2U9XCInd2lkZ2V0J1wiIGNlbGwtd2lkZ2V0LWhvc3QgW2RhdGFdPVwiaG9zdERhdGFcIj48L25nLXRlbXBsYXRlPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInaW1nJ1wiPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICpuZ0Zvcj1cImxldCBpIG9mICRhbnkoX3RleHQpXCJcbiAgICAgICAgICAgIFthdHRyLnNyY109XCJpXCJcbiAgICAgICAgICAgIFthdHRyLmhlaWdodF09XCJzYWZlT3B0LmltZz8uc2l6ZVwiXG4gICAgICAgICAgICBbYXR0ci53aWR0aF09XCJzYWZlT3B0LmltZz8uc2l6ZVwiXG4gICAgICAgICAgICAoY2xpY2spPVwiX3Nob3dJbWcoaSlcIlxuICAgICAgICAgICAgY2xhc3M9XCJpbWdcIlxuICAgICAgICAgICAgW2NsYXNzLnBvaW50XT1cInNhZmVPcHQuaW1nPy5iaWdcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaERlZmF1bHQ+XG4gICAgICAgICAgPHNwYW4gKm5nSWY9XCIhaXNUZXh0XCIgW2lubmVySFRNTF09XCJfdGV4dFwiIFthdHRyLnRpdGxlXT1cInRydW5jYXRlID8gdmFsdWUgOiBudWxsXCI+PC9zcGFuPlxuICAgICAgICAgIDxzcGFuICpuZ0lmPVwiaXNUZXh0XCIgW2lubmVyVGV4dF09XCJfdGV4dFwiIFthdHRyLnRpdGxlXT1cInRydW5jYXRlID8gdmFsdWUgOiBudWxsXCI+PC9zcGFuPlxuICAgICAgICAgIDxzcGFuICpuZ0lmPVwiX3VuaXRcIiBjbGFzcz1cInVuaXRcIj57eyBfdW5pdCB9fTwvc3Bhbj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZSAjdGV4dFdyYXA+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwic2hvd0RlZmF1bHRcIj57eyBkZWZhdWx0IH19PC9uZy1jb250YWluZXI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXNob3dEZWZhdWx0XCI+XG4gICAgICAgIDxzcGFuICpuZ0lmPVwic2FmZU9wdD8udG9vbHRpcDsgZWxzZSB0ZXh0XCIgbnotdG9vbHRpcCBbbnpUb29sdGlwVGl0bGVdPVwic2FmZU9wdC50b29sdGlwXCI+XG4gICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRleHRcIj48L25nLXRlbXBsYXRlPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxzcGFuICpuZ0lmPVwibG9hZGluZzsgZWxzZSB0ZXh0V3JhcFwiIG56LWljb24gbnpUeXBlPVwibG9hZGluZ1wiPjwvc3Bhbj5cbiAgYCxcbiAgZXhwb3J0QXM6ICdjZWxsJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIENlbGxDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV90cnVuY2F0ZTogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbG9hZGluZzogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZGlzYWJsZWQ6IEJvb2xlYW5JbnB1dDtcblxuICBwcml2YXRlIGRlc3Ryb3kkPzogU3Vic2NyaXB0aW9uO1xuXG4gIF90ZXh0ITogc3RyaW5nIHwgU2FmZUh0bWw7XG4gIF91bml0Pzogc3RyaW5nO1xuICByZXM/OiBDZWxsVGV4dFJlc3VsdDtcbiAgc2hvd0RlZmF1bHQgPSBmYWxzZTtcblxuICBASW5wdXQoKSB2YWx1ZT86IHVua25vd247XG4gIEBPdXRwdXQoKSByZWFkb25seSB2YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8TnpTYWZlQW55PigpO1xuICBASW5wdXQoKSBkZWZhdWx0ID0gJy0nO1xuICBASW5wdXQoKSBkZWZhdWx0Q29uZGl0aW9uPzogdW5rbm93biA9IG51bGw7XG4gIEBJbnB1dCgpIG9wdGlvbnM/OiBDZWxsT3B0aW9ucztcbiAgQElucHV0KCkgdW5pdD86IHN0cmluZztcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHRydW5jYXRlID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBsb2FkaW5nID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSB0eXBlPzogJ3ByaW1hcnknIHwgJ3N1Y2Nlc3MnIHwgJ2RhbmdlcicgfCAnd2FybmluZyc7XG4gIEBJbnB1dCgpIHNpemU/OiAnbGFyZ2UnIHwgJ3NtYWxsJztcblxuICAvKipcbiAgICog6LSn5biB5b+r5o236aG5XG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIDxjZWxsIFtjdXJyZW5jeV09XCIxMDAwXCI+PC9jZWxsPlxuICAgKiDnrYnlkIzkuo5cbiAgICogPGNlbGwgW3ZhbHVlXT1cIjEwMDBcIiBbb3B0aW9uc109XCJ7dHlwZTogJ2N1cnJlbmN5J31cIj48L2NlbGw+XG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgY3VycmVuY3kodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLm9wdGlvbnMgPSB7IHR5cGU6ICdjdXJyZW5jeScgfTtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlKCk7XG4gIH1cblxuICBnZXQgc2FmZU9wdCgpOiBDZWxsT3B0aW9ucyB7XG4gICAgcmV0dXJuIHRoaXMucmVzPy5vcHRpb25zID8/IHt9O1xuICB9XG5cbiAgZ2V0IGlzVGV4dCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5yZXM/LnNhZmVIdG1sID09PSAndGV4dCc7XG4gIH1cblxuICBnZXQgaG9zdERhdGEoKTogQ2VsbFdpZGdldERhdGEge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgIGRlZmF1bHQ6IHRoaXMuZGVmYXVsdCxcbiAgICAgIGRlZmF1bHRDb25kaXRpb246IHRoaXMuZGVmYXVsdENvbmRpdGlvbixcbiAgICAgIG9wdGlvbnM6IHRoaXMuc3J2LmZpeE9wdGlvbnModGhpcy5vcHRpb25zKSxcbiAgICAgIHRydW5jYXRlOiB0aGlzLnRydW5jYXRlXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc3J2OiBDZWxsU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBpbWdTcnY6IE56SW1hZ2VTZXJ2aWNlLFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgQEluamVjdChXSU5ET1cpIHByaXZhdGUgd2luOiBhbnlcbiAgKSB7fVxuXG4gIHByaXZhdGUgdXBkYXRlVmFsdWUoKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JD8udW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLmRlc3Ryb3kkID0gdGhpcy5zcnYuZ2V0KHRoaXMudmFsdWUsIHRoaXMub3B0aW9ucykuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICB0aGlzLnJlcyA9IHJlcztcbiAgICAgIHRoaXMuc2hvd0RlZmF1bHQgPSB0aGlzLnZhbHVlID09IHRoaXMuZGVmYXVsdENvbmRpdGlvbjtcbiAgICAgIHRoaXMuX3RleHQgPSByZXMucmVzdWx0Py50ZXh0ID8/ICcnO1xuICAgICAgdGhpcy5fdW5pdCA9IHJlcy5yZXN1bHQ/LnVuaXQgPz8gdGhpcy51bml0O1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgdGhpcy5zZXRDbGFzcygpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDbGFzcygpOiB2b2lkIHtcbiAgICBjb25zdCB7IGVsLCByZW5kZXJlciB9ID0gdGhpcztcbiAgICB1cGRhdGVIb3N0Q2xhc3MoZWwubmF0aXZlRWxlbWVudCwgcmVuZGVyZXIsIHtcbiAgICAgIFtgY2VsbGBdOiB0cnVlLFxuICAgICAgW2BjZWxsX18ke3RoaXMudHlwZX1gXTogdGhpcy50eXBlICE9IG51bGwsXG4gICAgICBbYGNlbGxfXyR7dGhpcy5zaXplfWBdOiB0aGlzLnNpemUgIT0gbnVsbCxcbiAgICAgIFtgY2VsbF9faGFzLXVuaXRgXTogdGhpcy5fdW5pdCxcbiAgICAgIFtgY2VsbF9faGFzLWRlZmF1bHRgXTogdGhpcy5zaG93RGVmYXVsdCxcbiAgICAgIFtgY2VsbF9fZGlzYWJsZWRgXTogdGhpcy5kaXNhYmxlZFxuICAgIH0pO1xuICAgIGVsLm5hdGl2ZUVsZW1lbnQuZGF0YXNldC50eXBlID0gdGhpcy5zYWZlT3B0LnR5cGU7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlKCk7XG4gIH1cblxuICBjaGFuZ2UodmFsdWU6IE56U2FmZUFueSk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodmFsdWUpO1xuICB9XG5cbiAgX2xpbmsoZTogRXZlbnQpOiB2b2lkIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSByZXR1cm47XG5cbiAgICBjb25zdCBsaW5rID0gdGhpcy5zYWZlT3B0Lmxpbms7XG4gICAgY29uc3QgdXJsID0gbGluaz8udXJsO1xuICAgIGlmICh1cmwgPT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgaWYgKC9odHRwcz86XFwvXFwvL2cudGVzdCh1cmwpKSB7XG4gICAgICAodGhpcy53aW4gYXMgV2luZG93KS5vcGVuKHVybCwgbGluaz8udGFyZ2V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCh1cmwpO1xuICAgIH1cbiAgfVxuXG4gIF9zaG93SW1nKGltZzogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgY29uZmlnID0gdGhpcy5zYWZlT3B0LmltZztcbiAgICBpZiAoY29uZmlnID09IG51bGwgfHwgY29uZmlnLmJpZyA9PT0gZmFsc2UpIHJldHVybjtcblxuICAgIGxldCBpZHggPSAtMTtcbiAgICBjb25zdCBsaXN0ID0gKHRoaXMuX3RleHQgYXMgc3RyaW5nW10pLm1hcCgocCwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpZHggPT09IC0xICYmIHAgPT09IGltZykgaWR4ID0gaW5kZXg7XG4gICAgICByZXR1cm4gdHlwZW9mIGNvbmZpZy5iaWcgPT09ICdmdW5jdGlvbicgPyBjb25maWcuYmlnKHApIDogcDtcbiAgICB9KTtcbiAgICB0aGlzLmltZ1NydlxuICAgICAgLnByZXZpZXcoXG4gICAgICAgIGxpc3QubWFwKHAgPT4gKHsgc3JjOiBwIH0gYXMgTnpJbWFnZSkpLFxuICAgICAgICBjb25maWcucHJldmlld09wdGlvbnNcbiAgICAgIClcbiAgICAgIC5zd2l0Y2hUbyhpZHgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JD8udW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19