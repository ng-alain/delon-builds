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
    ngOnChanges(changes) {
        // Do not call updateValue when only updating loading, disabled, size
        if (Object.keys(changes).every(k => ['loading', 'disabled', 'size'].includes(k))) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvY2VsbC9jZWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUV2QixTQUFTLEVBRVQsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBR0wsTUFBTSxFQUdOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUt2QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFnQixZQUFZLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FBMkUzQyxNQUFNLE9BQU8sYUFBYTtJQXdCeEI7Ozs7Ozs7T0FPRztJQUNILElBQ0ksUUFBUSxDQUFDLEtBQWE7UUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsQ0FBQztRQUNwQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLEdBQUcsRUFBRSxPQUFPLElBQUksRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxHQUFHLEVBQUUsUUFBUSxLQUFLLE1BQU0sQ0FBQztJQUN2QyxDQUFDO0lBRUQsSUFBSSxRQUFRO1FBQ1YsT0FBTztZQUNMLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjtZQUN2QyxPQUFPLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FB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OzJCQUFDLE1BQU07NENBckRQLEtBQUs7c0JBQWIsS0FBSztnQkFDYSxXQUFXO3NCQUE3QixNQUFNO2dCQUNFLE9BQU87c0JBQWYsS0FBSztnQkFDRyxnQkFBZ0I7c0JBQXhCLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDbUIsUUFBUTtzQkFBaEMsS0FBSztnQkFDbUIsT0FBTztzQkFBL0IsS0FBSztnQkFDbUIsUUFBUTtzQkFBaEMsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQVdGLFFBQVE7c0JBRFgsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB0eXBlIHsgU2FmZVZhbHVlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IHVwZGF0ZUhvc3RDbGFzcyB9IGZyb20gJ0BkZWxvbi91dGlsL2Jyb3dzZXInO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBJbnB1dEJvb2xlYW4gfSBmcm9tICdAZGVsb24vdXRpbC9kZWNvcmF0b3InO1xuaW1wb3J0IHsgV0lORE9XIH0gZnJvbSAnQGRlbG9uL3V0aWwvdG9rZW4nO1xuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgTnpJbWFnZSwgTnpJbWFnZVNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2ltYWdlJztcblxuaW1wb3J0IHsgQ2VsbFNlcnZpY2UgfSBmcm9tICcuL2NlbGwuc2VydmljZSc7XG5pbXBvcnQgdHlwZSB7IENlbGxPcHRpb25zLCBDZWxsVGV4dFJlc3VsdCwgQ2VsbFZhbHVlLCBDZWxsV2lkZ2V0RGF0YSB9IGZyb20gJy4vY2VsbC50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NlbGwsIFtjZWxsXScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLXRlbXBsYXRlICN0ZXh0PlxuICAgICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwic2FmZU9wdC50eXBlXCI+XG4gICAgICAgIDxsYWJlbFxuICAgICAgICAgICpuZ1N3aXRjaENhc2U9XCInY2hlY2tib3gnXCJcbiAgICAgICAgICBuei1jaGVja2JveFxuICAgICAgICAgIFtuekRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgICBbbmdNb2RlbF09XCJ2YWx1ZVwiXG4gICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiY2hhbmdlKCRldmVudClcIlxuICAgICAgICA+XG4gICAgICAgICAge3sgc2FmZU9wdC5jaGVja2JveD8ubGFiZWwgfX1cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGxhYmVsXG4gICAgICAgICAgKm5nU3dpdGNoQ2FzZT1cIidyYWRpbydcIlxuICAgICAgICAgIG56LXJhZGlvXG4gICAgICAgICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICAgIFtuZ01vZGVsXT1cInZhbHVlXCJcbiAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJjaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgID5cbiAgICAgICAgICB7eyBzYWZlT3B0LnJhZGlvPy5sYWJlbCB9fVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8YVxuICAgICAgICAgICpuZ1N3aXRjaENhc2U9XCInbGluaydcIlxuICAgICAgICAgIChjbGljayk9XCJfbGluaygkZXZlbnQpXCJcbiAgICAgICAgICBbYXR0ci50YXJnZXRdPVwic2FmZU9wdC5saW5rPy50YXJnZXRcIlxuICAgICAgICAgIFthdHRyLnRpdGxlXT1cInRydW5jYXRlID8gdmFsdWUgOiBudWxsXCJcbiAgICAgICAgICBbaW5uZXJIVE1MXT1cIl90ZXh0XCJcbiAgICAgICAgPjwvYT5cbiAgICAgICAgPG56LXRhZyAqbmdTd2l0Y2hDYXNlPVwiJ3RhZydcIiBbbnpDb2xvcl09XCJyZXM/LnJlc3VsdD8uY29sb3JcIj5cbiAgICAgICAgICA8c3BhbiBbaW5uZXJIVE1MXT1cIl90ZXh0XCI+PC9zcGFuPlxuICAgICAgICA8L256LXRhZz5cbiAgICAgICAgPG56LWJhZGdlICpuZ1N3aXRjaENhc2U9XCInYmFkZ2UnXCIgW256U3RhdHVzXT1cInJlcz8ucmVzdWx0Py5jb2xvclwiIG56VGV4dD1cInt7IF90ZXh0IH19XCI+PC9uei1iYWRnZT5cbiAgICAgICAgPG5nLXRlbXBsYXRlICpuZ1N3aXRjaENhc2U9XCInd2lkZ2V0J1wiIGNlbGwtd2lkZ2V0LWhvc3QgW2RhdGFdPVwiaG9zdERhdGFcIj48L25nLXRlbXBsYXRlPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInaW1nJ1wiPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICpuZ0Zvcj1cImxldCBpIG9mICRhbnkoX3RleHQpXCJcbiAgICAgICAgICAgIFthdHRyLnNyY109XCJpXCJcbiAgICAgICAgICAgIFthdHRyLmhlaWdodF09XCJzYWZlT3B0LmltZz8uc2l6ZVwiXG4gICAgICAgICAgICBbYXR0ci53aWR0aF09XCJzYWZlT3B0LmltZz8uc2l6ZVwiXG4gICAgICAgICAgICAoY2xpY2spPVwiX3Nob3dJbWcoaSlcIlxuICAgICAgICAgICAgY2xhc3M9XCJpbWdcIlxuICAgICAgICAgICAgW2NsYXNzLnBvaW50XT1cInNhZmVPcHQuaW1nPy5iaWdcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaERlZmF1bHQ+XG4gICAgICAgICAgPHNwYW4gKm5nSWY9XCIhaXNUZXh0XCIgW2lubmVySFRNTF09XCJfdGV4dFwiIFthdHRyLnRpdGxlXT1cInRydW5jYXRlID8gdmFsdWUgOiBudWxsXCI+PC9zcGFuPlxuICAgICAgICAgIDxzcGFuICpuZ0lmPVwiaXNUZXh0XCIgW2lubmVyVGV4dF09XCJfdGV4dFwiIFthdHRyLnRpdGxlXT1cInRydW5jYXRlID8gdmFsdWUgOiBudWxsXCI+PC9zcGFuPlxuICAgICAgICAgIDxzcGFuICpuZ0lmPVwiX3VuaXRcIiBjbGFzcz1cInVuaXRcIj57eyBfdW5pdCB9fTwvc3Bhbj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZSAjdGV4dFdyYXA+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwic2hvd0RlZmF1bHRcIj57eyBkZWZhdWx0IH19PC9uZy1jb250YWluZXI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXNob3dEZWZhdWx0XCI+XG4gICAgICAgIDxzcGFuICpuZ0lmPVwic2FmZU9wdD8udG9vbHRpcDsgZWxzZSB0ZXh0XCIgbnotdG9vbHRpcCBbbnpUb29sdGlwVGl0bGVdPVwic2FmZU9wdC50b29sdGlwXCI+XG4gICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRleHRcIj48L25nLXRlbXBsYXRlPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxzcGFuICpuZ0lmPVwibG9hZGluZzsgZWxzZSB0ZXh0V3JhcFwiIG56LWljb24gbnpUeXBlPVwibG9hZGluZ1wiPjwvc3Bhbj5cbiAgYCxcbiAgZXhwb3J0QXM6ICdjZWxsJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIENlbGxDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV90cnVuY2F0ZTogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbG9hZGluZzogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZGlzYWJsZWQ6IEJvb2xlYW5JbnB1dDtcblxuICBwcml2YXRlIGRlc3Ryb3kkPzogU3Vic2NyaXB0aW9uO1xuXG4gIF90ZXh0ITogc3RyaW5nIHwgU2FmZVZhbHVlIHwgc3RyaW5nW10gfCBudW1iZXI7XG4gIF91bml0Pzogc3RyaW5nO1xuICByZXM/OiBDZWxsVGV4dFJlc3VsdDtcbiAgc2hvd0RlZmF1bHQgPSBmYWxzZTtcblxuICBASW5wdXQoKSB2YWx1ZT86IENlbGxWYWx1ZTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxOelNhZmVBbnk+KCk7XG4gIEBJbnB1dCgpIGRlZmF1bHQgPSAnLSc7XG4gIEBJbnB1dCgpIGRlZmF1bHRDb25kaXRpb24/OiB1bmtub3duID0gbnVsbDtcbiAgQElucHV0KCkgb3B0aW9ucz86IENlbGxPcHRpb25zO1xuICBASW5wdXQoKSB1bml0Pzogc3RyaW5nO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgdHJ1bmNhdGUgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGxvYWRpbmcgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIHR5cGU/OiAncHJpbWFyeScgfCAnc3VjY2VzcycgfCAnZGFuZ2VyJyB8ICd3YXJuaW5nJztcbiAgQElucHV0KCkgc2l6ZT86ICdsYXJnZScgfCAnc21hbGwnIHwgbnVsbDtcblxuICAvKipcbiAgICog6LSn5biB5b+r5o236aG5XG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIDxjZWxsIFtjdXJyZW5jeV09XCIxMDAwXCI+PC9jZWxsPlxuICAgKiDnrYnlkIzkuo5cbiAgICogPGNlbGwgW3ZhbHVlXT1cIjEwMDBcIiBbb3B0aW9uc109XCJ7dHlwZTogJ2N1cnJlbmN5J31cIj48L2NlbGw+XG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgY3VycmVuY3kodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLm9wdGlvbnMgPSB7IHR5cGU6ICdjdXJyZW5jeScgfTtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlKCk7XG4gIH1cblxuICBnZXQgc2FmZU9wdCgpOiBDZWxsT3B0aW9ucyB7XG4gICAgcmV0dXJuIHRoaXMucmVzPy5vcHRpb25zID8/IHt9O1xuICB9XG5cbiAgZ2V0IGlzVGV4dCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5yZXM/LnNhZmVIdG1sID09PSAndGV4dCc7XG4gIH1cblxuICBnZXQgaG9zdERhdGEoKTogQ2VsbFdpZGdldERhdGEge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgIGRlZmF1bHQ6IHRoaXMuZGVmYXVsdCxcbiAgICAgIGRlZmF1bHRDb25kaXRpb246IHRoaXMuZGVmYXVsdENvbmRpdGlvbixcbiAgICAgIG9wdGlvbnM6IHRoaXMuc3J2LmZpeE9wdGlvbnModGhpcy5vcHRpb25zKSxcbiAgICAgIHRydW5jYXRlOiB0aGlzLnRydW5jYXRlXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc3J2OiBDZWxsU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBpbWdTcnY6IE56SW1hZ2VTZXJ2aWNlLFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgQEluamVjdChXSU5ET1cpIHByaXZhdGUgd2luOiBhbnlcbiAgKSB7fVxuXG4gIHByaXZhdGUgdXBkYXRlVmFsdWUoKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JD8udW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLmRlc3Ryb3kkID0gdGhpcy5zcnYuZ2V0KHRoaXMudmFsdWUsIHRoaXMub3B0aW9ucykuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICB0aGlzLnJlcyA9IHJlcztcbiAgICAgIHRoaXMuc2hvd0RlZmF1bHQgPSB0aGlzLnZhbHVlID09IHRoaXMuZGVmYXVsdENvbmRpdGlvbjtcbiAgICAgIHRoaXMuX3RleHQgPSByZXMucmVzdWx0Py50ZXh0ID8/ICcnO1xuICAgICAgdGhpcy5fdW5pdCA9IHJlcy5yZXN1bHQ/LnVuaXQgPz8gdGhpcy51bml0O1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgdGhpcy5zZXRDbGFzcygpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDbGFzcygpOiB2b2lkIHtcbiAgICBjb25zdCB7IGVsLCByZW5kZXJlciB9ID0gdGhpcztcbiAgICB1cGRhdGVIb3N0Q2xhc3MoZWwubmF0aXZlRWxlbWVudCwgcmVuZGVyZXIsIHtcbiAgICAgIFtgY2VsbGBdOiB0cnVlLFxuICAgICAgW2BjZWxsX18ke3RoaXMudHlwZX1gXTogdGhpcy50eXBlICE9IG51bGwsXG4gICAgICBbYGNlbGxfXyR7dGhpcy5zaXplfWBdOiB0aGlzLnNpemUgIT0gbnVsbCxcbiAgICAgIFtgY2VsbF9faGFzLXVuaXRgXTogdGhpcy5fdW5pdCxcbiAgICAgIFtgY2VsbF9faGFzLWRlZmF1bHRgXTogdGhpcy5zaG93RGVmYXVsdCxcbiAgICAgIFtgY2VsbF9fZGlzYWJsZWRgXTogdGhpcy5kaXNhYmxlZFxuICAgIH0pO1xuICAgIGVsLm5hdGl2ZUVsZW1lbnQuZGF0YXNldC50eXBlID0gdGhpcy5zYWZlT3B0LnR5cGU7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtwIGluIGtleW9mIENlbGxDb21wb25lbnRdPzogU2ltcGxlQ2hhbmdlIH0pOiB2b2lkIHtcbiAgICAvLyBEbyBub3QgY2FsbCB1cGRhdGVWYWx1ZSB3aGVuIG9ubHkgdXBkYXRpbmcgbG9hZGluZywgZGlzYWJsZWQsIHNpemVcbiAgICBpZiAoT2JqZWN0LmtleXMoY2hhbmdlcykuZXZlcnkoayA9PiBbJ2xvYWRpbmcnLCAnZGlzYWJsZWQnLCAnc2l6ZSddLmluY2x1ZGVzKGspKSkge1xuICAgICAgdGhpcy5zZXRDbGFzcygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVwZGF0ZVZhbHVlKCk7XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlKHZhbHVlOiBOelNhZmVBbnkpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHZhbHVlKTtcbiAgfVxuXG4gIF9saW5rKGU6IEV2ZW50KTogdm9pZCB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkgcmV0dXJuO1xuXG4gICAgY29uc3QgbGluayA9IHRoaXMuc2FmZU9wdC5saW5rO1xuICAgIGNvbnN0IHVybCA9IGxpbms/LnVybDtcbiAgICBpZiAodXJsID09IG51bGwpIHJldHVybjtcblxuICAgIGlmICgvaHR0cHM/OlxcL1xcLy9nLnRlc3QodXJsKSkge1xuICAgICAgKHRoaXMud2luIGFzIFdpbmRvdykub3Blbih1cmwsIGxpbms/LnRhcmdldCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwodXJsKTtcbiAgICB9XG4gIH1cblxuICBfc2hvd0ltZyhpbWc6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuc2FmZU9wdC5pbWc7XG4gICAgaWYgKGNvbmZpZyA9PSBudWxsIHx8IGNvbmZpZy5iaWcgPT09IGZhbHNlKSByZXR1cm47XG5cbiAgICBsZXQgaWR4ID0gLTE7XG4gICAgY29uc3QgbGlzdCA9ICh0aGlzLl90ZXh0IGFzIHN0cmluZ1tdKS5tYXAoKHAsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaWR4ID09PSAtMSAmJiBwID09PSBpbWcpIGlkeCA9IGluZGV4O1xuICAgICAgcmV0dXJuIHR5cGVvZiBjb25maWcuYmlnID09PSAnZnVuY3Rpb24nID8gY29uZmlnLmJpZyhwKSA6IHA7XG4gICAgfSk7XG4gICAgdGhpcy5pbWdTcnZcbiAgICAgIC5wcmV2aWV3KFxuICAgICAgICBsaXN0Lm1hcChwID0+ICh7IHNyYzogcCB9KSBhcyBOekltYWdlKSxcbiAgICAgICAgY29uZmlnLnByZXZpZXdPcHRpb25zXG4gICAgICApXG4gICAgICAuc3dpdGNoVG8oaWR4KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQ/LnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==