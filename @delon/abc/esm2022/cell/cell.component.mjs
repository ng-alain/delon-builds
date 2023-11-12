import { __decorate } from "tslib";
import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, Output, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { updateHostClass } from '@delon/util/browser';
import { InputBoolean } from '@delon/util/decorator';
import { WINDOW } from '@delon/util/token';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
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
import * as i5 from "ng-zorro-antd/radio";
import * as i6 from "ng-zorro-antd/icon";
import * as i7 from "ng-zorro-antd/tag";
import * as i8 from "ng-zorro-antd/badge";
import * as i9 from "ng-zorro-antd/tooltip";
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
      <label nz-radio [nzDisabled]="disabled" [ngModel]="value" (ngModelChange)="change($event)">
        {{ safeOpt.radio?.label }}
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
  `, isInline: true, dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i4.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "ngmodule", type: NzRadioModule }, { kind: "component", type: i5.NzRadioComponent, selector: "[nz-radio],[nz-radio-button]", inputs: ["nzValue", "nzDisabled", "nzAutoFocus"], exportAs: ["nzRadio"] }, { kind: "ngmodule", type: NzIconModule }, { kind: "directive", type: i6.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "ngmodule", type: NzTagModule }, { kind: "component", type: i7.NzTagComponent, selector: "nz-tag", inputs: ["nzMode", "nzColor", "nzChecked"], outputs: ["nzOnClose", "nzCheckedChange"], exportAs: ["nzTag"] }, { kind: "ngmodule", type: NzBadgeModule }, { kind: "component", type: i8.NzBadgeComponent, selector: "nz-badge", inputs: ["nzShowZero", "nzShowDot", "nzStandalone", "nzDot", "nzOverflowCount", "nzColor", "nzStyle", "nzText", "nzTitle", "nzStatus", "nzCount", "nzOffset", "nzSize"], exportAs: ["nzBadge"] }, { kind: "ngmodule", type: NzToolTipModule }, { kind: "directive", type: i9.NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }, { kind: "directive", type: CellHostDirective, selector: "[cell-widget-host]", inputs: ["data"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
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
      <label nz-radio [nzDisabled]="disabled" [ngModel]="value" (ngModelChange)="change($event)">
        {{ safeOpt.radio?.label }}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvY2VsbC9jZWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbkQsT0FBTyxFQUNMLHVCQUF1QixFQUV2QixTQUFTLEVBRVQsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBR0wsTUFBTSxFQUdOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFLN0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBZ0IsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDbkUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUVwRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFeEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7Ozs7Ozs7O0FBNEUxRCxNQUFNLE9BQU8sYUFBYTtJQWlCeEIsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsR0FBRyxFQUFFLE9BQU8sSUFBSSxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLEdBQUcsRUFBRSxRQUFRLEtBQUssTUFBTSxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxJQUFJLFFBQVE7UUFDVixPQUFPO1lBQ0wsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLE9BQU8sRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQzNDLENBQUM7SUFDSixDQUFDO0lBRUQsWUFDVSxHQUFnQixFQUNoQixNQUFjLEVBQ2QsR0FBc0IsRUFDdEIsRUFBMkIsRUFDM0IsUUFBbUIsRUFDbkIsTUFBc0I7SUFDOUIsOERBQThEO0lBQ3RDLEdBQVE7UUFQeEIsUUFBRyxHQUFILEdBQUcsQ0FBYTtRQUNoQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDdEIsT0FBRSxHQUFGLEVBQUUsQ0FBeUI7UUFDM0IsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUVOLFFBQUcsR0FBSCxHQUFHLENBQUs7UUEvQmxDLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBR0QsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDO1FBRXRDLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsYUFBUSxHQUFHLEtBQUssQ0FBQztJQTBCdkMsQ0FBQztJQUVJLFdBQVc7UUFDakIsSUFBSSxDQUFDLFFBQVEsRUFBRSxXQUFXLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNyRSxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztZQUNmLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssSUFBSyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQTJCLENBQUMsU0FBUyxDQUFDO1lBQ3JGLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLElBQUksRUFBRSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUM7WUFDcEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUN6QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDbEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sUUFBUTtRQUNkLE1BQU0sRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQzlCLE1BQU0sRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDaEQsZUFBZSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUFFO1lBQzFDLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSTtZQUNkLENBQUMsU0FBUyxVQUFVLEVBQUUsQ0FBQyxFQUFFLFVBQVUsSUFBSSxJQUFJO1lBQzNDLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksSUFBSSxJQUFJO1lBQy9CLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSztZQUM5QixDQUFDLG1CQUFtQixDQUFDLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDdkMsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQ2xDLENBQUMsQ0FBQztRQUNILEVBQUUsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxHQUFHLElBQUksRUFBRSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzRDtRQUNoRSwrREFBK0Q7UUFDL0QsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3hFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNqQjthQUFNO1lBQ0wsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQztJQUVELE1BQU0sQ0FBQyxLQUFnQjtRQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsS0FBSyxDQUFDLENBQVE7UUFDWixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkIsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXBCLElBQUksSUFBSSxDQUFDLFFBQVE7WUFBRSxPQUFPO1FBRTFCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBQy9CLE1BQU0sR0FBRyxHQUFHLElBQUksRUFBRSxHQUFHLENBQUM7UUFDdEIsSUFBSSxHQUFHLElBQUksSUFBSTtZQUFFLE9BQU87UUFFeEIsSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzNCLElBQUksQ0FBQyxHQUFjLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDOUM7YUFBTTtZQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2hDO0lBQ0gsQ0FBQztJQUVELFFBQVEsQ0FBQyxHQUFXO1FBQ2xCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1FBQ2hDLElBQUksTUFBTSxJQUFJLElBQUksSUFBSSxNQUFNLENBQUMsR0FBRyxJQUFJLElBQUk7WUFBRSxPQUFPO1FBRWpELElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2IsTUFBTSxJQUFJLEdBQUksSUFBSSxDQUFDLEtBQWtCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ3JELElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHO2dCQUFFLEdBQUcsR0FBRyxLQUFLLENBQUM7WUFDekMsT0FBTyxPQUFPLE1BQU0sQ0FBQyxHQUFHLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUQsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsTUFBTTthQUNSLE9BQU8sQ0FDTixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBWSxDQUFDLEVBQ3RDLE1BQU0sQ0FBQyxjQUFjLENBQ3RCO2FBQ0EsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsRUFBRSxXQUFXLEVBQUUsQ0FBQztJQUMvQixDQUFDOzhHQXZIVSxhQUFhLHFMQXdDZCxNQUFNO2tHQXhDTCxhQUFhLG9QQXRFZDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FxRFQsMkRBT0MsV0FBVywrVkFDWCxnQkFBZ0IsbUpBQ2hCLGFBQWEsbU1BQ2IsWUFBWSxpTkFDWixXQUFXLDhNQUNYLGFBQWEsc1NBQ2IsZUFBZSw4ZEFDZixpQkFBaUI7O0FBaUJNO0lBQWYsWUFBWSxFQUFFOzhDQUFpQjtBQUNoQjtJQUFmLFlBQVksRUFBRTsrQ0FBa0I7MkZBZi9CLGFBQWE7a0JBeEV6QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBcURUO29CQUNELFFBQVEsRUFBRSxNQUFNO29CQUNoQixtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLFVBQVUsRUFBRSxJQUFJO29CQUNoQixPQUFPLEVBQUU7d0JBQ1AsV0FBVzt3QkFDWCxnQkFBZ0I7d0JBQ2hCLGFBQWE7d0JBQ2IsWUFBWTt3QkFDWixXQUFXO3dCQUNYLGFBQWE7d0JBQ2IsZUFBZTt3QkFDZixpQkFBaUI7cUJBQ2xCO2lCQUNGOzswQkF5Q0ksTUFBTTsyQkFBQyxNQUFNO3lDQTdCUCxLQUFLO3NCQUFiLEtBQUs7Z0JBQ2EsV0FBVztzQkFBN0IsTUFBTTtnQkFDRSxPQUFPO3NCQUFmLEtBQUs7Z0JBQ21CLE9BQU87c0JBQS9CLEtBQUs7Z0JBQ21CLFFBQVE7c0JBQWhDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ1RlbXBsYXRlT3V0bGV0IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHR5cGUgeyBTYWZlVmFsdWUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgdXBkYXRlSG9zdENsYXNzIH0gZnJvbSAnQGRlbG9uL3V0aWwvYnJvd3Nlcic7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIElucHV0Qm9vbGVhbiB9IGZyb20gJ0BkZWxvbi91dGlsL2RlY29yYXRvcic7XG5pbXBvcnQgeyBXSU5ET1cgfSBmcm9tICdAZGVsb24vdXRpbC90b2tlbic7XG5pbXBvcnQgeyBOekJhZGdlTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9iYWRnZSc7XG5pbXBvcnQgdHlwZSB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBOekljb25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2ljb24nO1xuaW1wb3J0IHsgTnpJbWFnZSwgTnpJbWFnZVNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2ltYWdlJztcbmltcG9ydCB7IE56UmFkaW9Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3JhZGlvJztcbmltcG9ydCB7IE56VGFnTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC90YWcnO1xuaW1wb3J0IHsgTnpUb29sVGlwTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC90b29sdGlwJztcblxuaW1wb3J0IHsgQ2VsbEhvc3REaXJlY3RpdmUgfSBmcm9tICcuL2NlbGwtaG9zdC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ2VsbFNlcnZpY2UgfSBmcm9tICcuL2NlbGwuc2VydmljZSc7XG5pbXBvcnQgdHlwZSB7IENlbGxEZWZhdWx0VGV4dCwgQ2VsbE9wdGlvbnMsIENlbGxUZXh0UmVzdWx0LCBDZWxsVmFsdWUsIENlbGxXaWRnZXREYXRhIH0gZnJvbSAnLi9jZWxsLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2VsbCwgW2NlbGxdJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctdGVtcGxhdGUgI3RleHQ+XG4gICAgICBAc3dpdGNoKHNhZmVPcHQudHlwZSkgeyBAY2FzZSgnY2hlY2tib3gnKSB7XG4gICAgICA8bGFiZWwgbnotcmFkaW8gW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIiBbbmdNb2RlbF09XCJ2YWx1ZVwiIChuZ01vZGVsQ2hhbmdlKT1cImNoYW5nZSgkZXZlbnQpXCI+XG4gICAgICAgIHt7IHNhZmVPcHQucmFkaW8/LmxhYmVsIH19XG4gICAgICA8L2xhYmVsPlxuICAgICAgfSBAY2FzZSgncmFkaW8nKSB7XG4gICAgICA8bGFiZWwgbnotcmFkaW8gW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIiBbbmdNb2RlbF09XCJ2YWx1ZVwiIChuZ01vZGVsQ2hhbmdlKT1cImNoYW5nZSgkZXZlbnQpXCI+XG4gICAgICAgIHt7IHNhZmVPcHQucmFkaW8/LmxhYmVsIH19XG4gICAgICA8L2xhYmVsPlxuICAgICAgfSBAY2FzZSgnbGluaycpIHtcbiAgICAgIDxhIChjbGljayk9XCJfbGluaygkZXZlbnQpXCIgW2F0dHIudGFyZ2V0XT1cInNhZmVPcHQubGluaz8udGFyZ2V0XCIgW2F0dHIudGl0bGVdPVwidmFsdWVcIiBbaW5uZXJIVE1MXT1cIl90ZXh0XCI+PC9hPlxuICAgICAgfSBAY2FzZSgndGFnJykge1xuICAgICAgPG56LXRhZyBbbnpDb2xvcl09XCJyZXM/LnJlc3VsdD8uY29sb3JcIj5cbiAgICAgICAgPHNwYW4gW2lubmVySFRNTF09XCJfdGV4dFwiPjwvc3Bhbj5cbiAgICAgIDwvbnotdGFnPlxuICAgICAgfSBAY2FzZSgnYmFkZ2UnKSB7XG4gICAgICA8bnotYmFkZ2UgW256U3RhdHVzXT1cInJlcz8ucmVzdWx0Py5jb2xvclwiIG56VGV4dD1cInt7IF90ZXh0IH19XCIgLz5cbiAgICAgIH0gQGNhc2UoJ3dpZGdldCcpIHtcbiAgICAgIDxuZy10ZW1wbGF0ZSBjZWxsLXdpZGdldC1ob3N0IFtkYXRhXT1cImhvc3REYXRhXCIgLz5cbiAgICAgIH0gQGNhc2UoJ2ltZycpIHsgQGZvciAoaSBvZiAkYW55KF90ZXh0KTsgdHJhY2sgJGluZGV4KSB7XG4gICAgICA8aW1nXG4gICAgICAgIFthdHRyLnNyY109XCJpXCJcbiAgICAgICAgW2F0dHIuaGVpZ2h0XT1cInNhZmVPcHQuaW1nPy5zaXplXCJcbiAgICAgICAgW2F0dHIud2lkdGhdPVwic2FmZU9wdC5pbWc/LnNpemVcIlxuICAgICAgICAoY2xpY2spPVwiX3Nob3dJbWcoaSlcIlxuICAgICAgICBjbGFzcz1cImltZ1wiXG4gICAgICAgIFtjbGFzcy5wb2ludF09XCJzYWZlT3B0LmltZz8uYmlnXCJcbiAgICAgIC8+XG4gICAgICB9IH0gQGRlZmF1bHQgeyBAaWYoaXNUZXh0KSB7XG4gICAgICA8c3BhbiBbaW5uZXJUZXh0XT1cIl90ZXh0XCIgW2F0dHIudGl0bGVdPVwidmFsdWVcIj48L3NwYW4+XG4gICAgICB9IEBlbHNlIHtcbiAgICAgIDxzcGFuIFtpbm5lckhUTUxdPVwiX3RleHRcIiBbYXR0ci50aXRsZV09XCJ2YWx1ZVwiPjwvc3Bhbj5cbiAgICAgIH0gQGlmKF91bml0KSB7XG4gICAgICA8c3BhbiBjbGFzcz1cInVuaXRcIj57eyBfdW5pdCB9fTwvc3Bhbj5cbiAgICAgIH0gfSB9XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGUgI3RleHRXcmFwPlxuICAgICAgQGlmIChzaG93RGVmYXVsdCkge1xuICAgICAge3sgc2FmZU9wdC5kZWZhdWx0Py50ZXh0IH19XG4gICAgICB9IEBlbHNlIHsgQGlmIChzYWZlT3B0LnRvb2x0aXApIHtcbiAgICAgIDxzcGFuIFtuei10b29sdGlwXT1cInNhZmVPcHQudG9vbHRpcFwiPlxuICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwidGV4dFwiIC8+XG4gICAgICA8L3NwYW4+XG4gICAgICB9IEBlbHNlIHtcbiAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJ0ZXh0XCIgLz5cbiAgICAgIH0gfVxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgQGlmIChsb2FkaW5nKSB7XG4gICAgPHNwYW4gbnotaWNvbiBuelR5cGU9XCJsb2FkaW5nXCI+PC9zcGFuPlxuICAgIH0gQGVsc2Uge1xuICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJ0ZXh0V3JhcFwiIC8+XG4gICAgfVxuICBgLFxuICBleHBvcnRBczogJ2NlbGwnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBOZ1RlbXBsYXRlT3V0bGV0LFxuICAgIE56UmFkaW9Nb2R1bGUsXG4gICAgTnpJY29uTW9kdWxlLFxuICAgIE56VGFnTW9kdWxlLFxuICAgIE56QmFkZ2VNb2R1bGUsXG4gICAgTnpUb29sVGlwTW9kdWxlLFxuICAgIENlbGxIb3N0RGlyZWN0aXZlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ2VsbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2xvYWRpbmc6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Rpc2FibGVkOiBCb29sZWFuSW5wdXQ7XG5cbiAgcHJpdmF0ZSBkZXN0cm95JD86IFN1YnNjcmlwdGlvbjtcblxuICBfdGV4dCE6IHN0cmluZyB8IFNhZmVWYWx1ZSB8IHN0cmluZ1tdIHwgbnVtYmVyO1xuICBfdW5pdD86IHN0cmluZztcbiAgcmVzPzogQ2VsbFRleHRSZXN1bHQ7XG4gIHNob3dEZWZhdWx0ID0gZmFsc2U7XG5cbiAgQElucHV0KCkgdmFsdWU/OiBDZWxsVmFsdWU7XG4gIEBPdXRwdXQoKSByZWFkb25seSB2YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8TnpTYWZlQW55PigpO1xuICBASW5wdXQoKSBvcHRpb25zPzogQ2VsbE9wdGlvbnM7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBsb2FkaW5nID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkaXNhYmxlZCA9IGZhbHNlO1xuXG4gIGdldCBzYWZlT3B0KCk6IENlbGxPcHRpb25zIHtcbiAgICByZXR1cm4gdGhpcy5yZXM/Lm9wdGlvbnMgPz8ge307XG4gIH1cblxuICBnZXQgaXNUZXh0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnJlcz8uc2FmZUh0bWwgPT09ICd0ZXh0JztcbiAgfVxuXG4gIGdldCBob3N0RGF0YSgpOiBDZWxsV2lkZ2V0RGF0YSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgb3B0aW9uczogdGhpcy5zcnYuZml4T3B0aW9ucyh0aGlzLm9wdGlvbnMpXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc3J2OiBDZWxsU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBpbWdTcnY6IE56SW1hZ2VTZXJ2aWNlLFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgQEluamVjdChXSU5ET1cpIHByaXZhdGUgd2luOiBhbnlcbiAgKSB7fVxuXG4gIHByaXZhdGUgdXBkYXRlVmFsdWUoKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JD8udW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLmRlc3Ryb3kkID0gdGhpcy5zcnYuZ2V0KHRoaXMudmFsdWUsIHRoaXMub3B0aW9ucykuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICB0aGlzLnJlcyA9IHJlcztcbiAgICAgIHRoaXMuc2hvd0RlZmF1bHQgPSB0aGlzLnZhbHVlID09ICh0aGlzLnNhZmVPcHQuZGVmYXVsdCBhcyBDZWxsRGVmYXVsdFRleHQpLmNvbmRpdGlvbjtcbiAgICAgIHRoaXMuX3RleHQgPSByZXMucmVzdWx0Py50ZXh0ID8/ICcnO1xuICAgICAgdGhpcy5fdW5pdCA9IHJlcy5yZXN1bHQ/LnVuaXQgPz8gdGhpcy5zYWZlT3B0Py51bml0O1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgdGhpcy5zZXRDbGFzcygpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDbGFzcygpOiB2b2lkIHtcbiAgICBjb25zdCB7IGVsLCByZW5kZXJlciB9ID0gdGhpcztcbiAgICBjb25zdCB7IHJlbmRlclR5cGUsIHNpemUsIHR5cGUgfSA9IHRoaXMuc2FmZU9wdDtcbiAgICB1cGRhdGVIb3N0Q2xhc3MoZWwubmF0aXZlRWxlbWVudCwgcmVuZGVyZXIsIHtcbiAgICAgIFtgY2VsbGBdOiB0cnVlLFxuICAgICAgW2BjZWxsX18ke3JlbmRlclR5cGV9YF06IHJlbmRlclR5cGUgIT0gbnVsbCxcbiAgICAgIFtgY2VsbF9fJHtzaXplfWBdOiBzaXplICE9IG51bGwsXG4gICAgICBbYGNlbGxfX2hhcy11bml0YF06IHRoaXMuX3VuaXQsXG4gICAgICBbYGNlbGxfX2hhcy1kZWZhdWx0YF06IHRoaXMuc2hvd0RlZmF1bHQsXG4gICAgICBbYGNlbGxfX2Rpc2FibGVkYF06IHRoaXMuZGlzYWJsZWRcbiAgICB9KTtcbiAgICBlbC5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS10eXBlJywgYCR7dHlwZX1gKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgW3AgaW4ga2V5b2YgQ2VsbENvbXBvbmVudF0/OiBTaW1wbGVDaGFuZ2UgfSk6IHZvaWQge1xuICAgIC8vIERvIG5vdCBjYWxsIHVwZGF0ZVZhbHVlIHdoZW4gb25seSB1cGRhdGluZyBsb2FkaW5nLCBkaXNhYmxlZFxuICAgIGlmIChPYmplY3Qua2V5cyhjaGFuZ2VzKS5ldmVyeShrID0+IFsnbG9hZGluZycsICdkaXNhYmxlZCddLmluY2x1ZGVzKGspKSkge1xuICAgICAgdGhpcy5zZXRDbGFzcygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVwZGF0ZVZhbHVlKCk7XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlKHZhbHVlOiBOelNhZmVBbnkpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHZhbHVlKTtcbiAgfVxuXG4gIF9saW5rKGU6IEV2ZW50KTogdm9pZCB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkgcmV0dXJuO1xuXG4gICAgY29uc3QgbGluayA9IHRoaXMuc2FmZU9wdC5saW5rO1xuICAgIGNvbnN0IHVybCA9IGxpbms/LnVybDtcbiAgICBpZiAodXJsID09IG51bGwpIHJldHVybjtcblxuICAgIGlmICgvaHR0cHM/OlxcL1xcLy9nLnRlc3QodXJsKSkge1xuICAgICAgKHRoaXMud2luIGFzIFdpbmRvdykub3Blbih1cmwsIGxpbms/LnRhcmdldCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwodXJsKTtcbiAgICB9XG4gIH1cblxuICBfc2hvd0ltZyhpbWc6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuc2FmZU9wdC5pbWc7XG4gICAgaWYgKGNvbmZpZyA9PSBudWxsIHx8IGNvbmZpZy5iaWcgPT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgbGV0IGlkeCA9IC0xO1xuICAgIGNvbnN0IGxpc3QgPSAodGhpcy5fdGV4dCBhcyBzdHJpbmdbXSkubWFwKChwLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGlkeCA9PT0gLTEgJiYgcCA9PT0gaW1nKSBpZHggPSBpbmRleDtcbiAgICAgIHJldHVybiB0eXBlb2YgY29uZmlnLmJpZyA9PT0gJ2Z1bmN0aW9uJyA/IGNvbmZpZy5iaWcocCkgOiBwO1xuICAgIH0pO1xuICAgIHRoaXMuaW1nU3J2XG4gICAgICAucHJldmlldyhcbiAgICAgICAgbGlzdC5tYXAocCA9PiAoeyBzcmM6IHAgfSkgYXMgTnpJbWFnZSksXG4gICAgICAgIGNvbmZpZy5wcmV2aWV3T3B0aW9uc1xuICAgICAgKVxuICAgICAgLnN3aXRjaFRvKGlkeCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkPy51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=