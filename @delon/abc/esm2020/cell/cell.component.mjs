import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Inject, Input, ViewEncapsulation } from '@angular/core';
import { updateHostClass } from '@delon/util/browser';
import { InputBoolean } from '@delon/util/decorator';
import { WINDOW } from '@delon/util/token';
import * as i0 from "@angular/core";
import * as i1 from "./cell.service";
import * as i2 from "@angular/router";
import * as i3 from "ng-zorro-antd/image";
import * as i4 from "@angular/common";
import * as i5 from "ng-zorro-antd/badge";
import * as i6 from "ng-zorro-antd/tag";
import * as i7 from "ng-zorro-antd/tooltip";
import * as i8 from "ng-zorro-antd/icon";
import * as i9 from "./cell-host.directive";
export class CellComponent {
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
        this.default = '-';
        this.defaultCondition = null;
        this.truncate = false;
        this.loading = false;
    }
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
    /**
     * 日期快捷项
     *
     * @example
     * <cell [date]="1000"></cell>
     * 等同于
     * <cell [value]="1000" [options]="{type: 'date'}"></cell>
     */
    set date(value) {
        this.value = value;
        this.options = { type: 'date' };
        this.updateValue();
    }
    get safeOpt() {
        return this.res?.options;
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
            [`cell__has-default`]: this.showDefault
        });
        el.nativeElement.dataset.type = this.safeOpt.type;
    }
    ngOnChanges() {
        this.updateValue();
    }
    _link(e) {
        e.preventDefault();
        e.stopPropagation();
        const link = this.safeOpt.link;
        const url = link?.url;
        if (url == null)
            return;
        if (url.startsWith('/')) {
            this.router.navigateByUrl(url);
        }
        else {
            this.win.open(url, link?.target);
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
}
CellComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.2", ngImport: i0, type: CellComponent, deps: [{ token: i1.CellService }, { token: i2.Router }, { token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i3.NzImageService }, { token: WINDOW }], target: i0.ɵɵFactoryTarget.Component });
CellComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.2", type: CellComponent, selector: "cell, [cell]", inputs: { value: "value", default: "default", defaultCondition: "defaultCondition", options: "options", unit: "unit", truncate: "truncate", loading: "loading", type: "type", size: "size", currency: "currency", date: "date" }, exportAs: ["cell"], usesOnChanges: true, ngImport: i0, template: `
    <ng-template #text>
      <ng-container [ngSwitch]="res?.type">
        <a
          *ngSwitchCase="'link'"
          (click)="_link($event)"
          [attr.target]="safeOpt.link?.target"
          [innerHTML]="_text"
          [attr.title]="truncate ? value : null"
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
  `, isInline: true, dependencies: [{ kind: "directive", type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i4.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i4.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: i4.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { kind: "directive", type: i4.NgSwitchDefault, selector: "[ngSwitchDefault]" }, { kind: "component", type: i5.NzBadgeComponent, selector: "nz-badge", inputs: ["nzShowZero", "nzShowDot", "nzStandalone", "nzDot", "nzOverflowCount", "nzColor", "nzStyle", "nzText", "nzTitle", "nzStatus", "nzCount", "nzOffset", "nzSize"], exportAs: ["nzBadge"] }, { kind: "component", type: i6.NzTagComponent, selector: "nz-tag", inputs: ["nzMode", "nzColor", "nzChecked"], outputs: ["nzOnClose", "nzCheckedChange"], exportAs: ["nzTag"] }, { kind: "directive", type: i7.NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }, { kind: "directive", type: i8.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "directive", type: i9.CellHostDirective, selector: "[cell-widget-host]", inputs: ["data"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    InputBoolean()
], CellComponent.prototype, "truncate", void 0);
__decorate([
    InputBoolean()
], CellComponent.prototype, "loading", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.2", ngImport: i0, type: CellComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'cell, [cell]',
                    template: `
    <ng-template #text>
      <ng-container [ngSwitch]="res?.type">
        <a
          *ngSwitchCase="'link'"
          (click)="_link($event)"
          [attr.target]="safeOpt.link?.target"
          [innerHTML]="_text"
          [attr.title]="truncate ? value : null"
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
            }], type: [{
                type: Input
            }], size: [{
                type: Input
            }], currency: [{
                type: Input
            }], date: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvY2VsbC9jZWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUV2QixTQUFTLEVBRVQsTUFBTSxFQUNOLEtBQUssRUFJTCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFLdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBZ0IsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDbkUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7Ozs7Ozs7OztBQXdEM0MsTUFBTSxPQUFPLGFBQWE7SUFtRXhCLFlBQ1UsR0FBZ0IsRUFDaEIsTUFBYyxFQUNkLEdBQXNCLEVBQ3RCLEVBQTJCLEVBQzNCLFFBQW1CLEVBQ25CLE1BQXNCO0lBQzlCLDhEQUE4RDtJQUN0QyxHQUFRO1FBUHhCLFFBQUcsR0FBSCxHQUFHLENBQWE7UUFDaEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3RCLE9BQUUsR0FBRixFQUFFLENBQXlCO1FBQzNCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFFTixRQUFHLEdBQUgsR0FBRyxDQUFLO1FBbEVsQyxnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUdYLFlBQU8sR0FBRyxHQUFHLENBQUM7UUFDZCxxQkFBZ0IsR0FBYSxJQUFJLENBQUM7UUFHbEIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixZQUFPLEdBQUcsS0FBSyxDQUFDO0lBMkR0QyxDQUFDO0lBdkRKOzs7Ozs7O09BT0c7SUFDSCxJQUNJLFFBQVEsQ0FBQyxLQUFhO1FBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FB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dEI7YUFDQSxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxFQUFFLFdBQVcsRUFBRSxDQUFDO0lBQy9CLENBQUM7OzBHQTNJVSxhQUFhLHFMQTJFZCxNQUFNOzhGQTNFTCxhQUFhLCtUQWhEZDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMENUO0FBc0J3QjtJQUFmLFlBQVksRUFBRTsrQ0FBa0I7QUFDakI7SUFBZixZQUFZLEVBQUU7OENBQWlCOzJGQWpCOUIsYUFBYTtrQkFsRHpCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMENUO29CQUNELFFBQVEsRUFBRSxNQUFNO29CQUNoQixtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3RDOzswQkE0RUksTUFBTTsyQkFBQyxNQUFNOzRDQWhFUCxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLO2dCQUNHLGdCQUFnQjtzQkFBeEIsS0FBSztnQkFDRyxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNtQixRQUFRO3NCQUFoQyxLQUFLO2dCQUNtQixPQUFPO3NCQUEvQixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBV0YsUUFBUTtzQkFEWCxLQUFLO2dCQWdCRixJQUFJO3NCQURQLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIFJlbmRlcmVyMixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyB1cGRhdGVIb3N0Q2xhc3MgfSBmcm9tICdAZGVsb24vdXRpbC9icm93c2VyJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgSW5wdXRCb29sZWFuIH0gZnJvbSAnQGRlbG9uL3V0aWwvZGVjb3JhdG9yJztcbmltcG9ydCB7IFdJTkRPVyB9IGZyb20gJ0BkZWxvbi91dGlsL3Rva2VuJztcbmltcG9ydCB7IE56SW1hZ2UsIE56SW1hZ2VTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pbWFnZSc7XG5cbmltcG9ydCB7IENlbGxTZXJ2aWNlIH0gZnJvbSAnLi9jZWxsLnNlcnZpY2UnO1xuaW1wb3J0IHR5cGUgeyBDZWxsT3B0aW9ucywgQ2VsbFRleHRSZXN1bHQsIENlbGxXaWRnZXREYXRhIH0gZnJvbSAnLi9jZWxsLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2VsbCwgW2NlbGxdJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctdGVtcGxhdGUgI3RleHQ+XG4gICAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJyZXM/LnR5cGVcIj5cbiAgICAgICAgPGFcbiAgICAgICAgICAqbmdTd2l0Y2hDYXNlPVwiJ2xpbmsnXCJcbiAgICAgICAgICAoY2xpY2spPVwiX2xpbmsoJGV2ZW50KVwiXG4gICAgICAgICAgW2F0dHIudGFyZ2V0XT1cInNhZmVPcHQubGluaz8udGFyZ2V0XCJcbiAgICAgICAgICBbaW5uZXJIVE1MXT1cIl90ZXh0XCJcbiAgICAgICAgICBbYXR0ci50aXRsZV09XCJ0cnVuY2F0ZSA/IHZhbHVlIDogbnVsbFwiXG4gICAgICAgID48L2E+XG4gICAgICAgIDxuei10YWcgKm5nU3dpdGNoQ2FzZT1cIid0YWcnXCIgW256Q29sb3JdPVwicmVzPy5yZXN1bHQ/LmNvbG9yXCI+XG4gICAgICAgICAgPHNwYW4gW2lubmVySFRNTF09XCJfdGV4dFwiPjwvc3Bhbj5cbiAgICAgICAgPC9uei10YWc+XG4gICAgICAgIDxuei1iYWRnZSAqbmdTd2l0Y2hDYXNlPVwiJ2JhZGdlJ1wiIFtuelN0YXR1c109XCJyZXM/LnJlc3VsdD8uY29sb3JcIiBuelRleHQ9XCJ7eyBfdGV4dCB9fVwiPjwvbnotYmFkZ2U+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSAqbmdTd2l0Y2hDYXNlPVwiJ3dpZGdldCdcIiBjZWxsLXdpZGdldC1ob3N0IFtkYXRhXT1cImhvc3REYXRhXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ2ltZydcIj5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAqbmdGb3I9XCJsZXQgaSBvZiAkYW55KF90ZXh0KVwiXG4gICAgICAgICAgICBbYXR0ci5zcmNdPVwiaVwiXG4gICAgICAgICAgICBbYXR0ci5oZWlnaHRdPVwic2FmZU9wdC5pbWc/LnNpemVcIlxuICAgICAgICAgICAgW2F0dHIud2lkdGhdPVwic2FmZU9wdC5pbWc/LnNpemVcIlxuICAgICAgICAgICAgKGNsaWNrKT1cIl9zaG93SW1nKGkpXCJcbiAgICAgICAgICAgIGNsYXNzPVwiaW1nXCJcbiAgICAgICAgICAgIFtjbGFzcy5wb2ludF09XCJzYWZlT3B0LmltZz8uYmlnXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hEZWZhdWx0PlxuICAgICAgICAgIDxzcGFuICpuZ0lmPVwiIWlzVGV4dFwiIFtpbm5lckhUTUxdPVwiX3RleHRcIiBbYXR0ci50aXRsZV09XCJ0cnVuY2F0ZSA/IHZhbHVlIDogbnVsbFwiPjwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiAqbmdJZj1cImlzVGV4dFwiIFtpbm5lclRleHRdPVwiX3RleHRcIiBbYXR0ci50aXRsZV09XCJ0cnVuY2F0ZSA/IHZhbHVlIDogbnVsbFwiPjwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiAqbmdJZj1cIl91bml0XCIgY2xhc3M9XCJ1bml0XCI+e3sgX3VuaXQgfX08L3NwYW4+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGUgI3RleHRXcmFwPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInNob3dEZWZhdWx0XCI+e3sgZGVmYXVsdCB9fTwvbmctY29udGFpbmVyPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFzaG93RGVmYXVsdFwiPlxuICAgICAgICA8c3BhbiAqbmdJZj1cInNhZmVPcHQ/LnRvb2x0aXA7IGVsc2UgdGV4dFwiIG56LXRvb2x0aXAgW256VG9vbHRpcFRpdGxlXT1cInNhZmVPcHQudG9vbHRpcFwiPlxuICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJ0ZXh0XCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8c3BhbiAqbmdJZj1cImxvYWRpbmc7IGVsc2UgdGV4dFdyYXBcIiBuei1pY29uIG56VHlwZT1cImxvYWRpbmdcIj48L3NwYW4+XG4gIGAsXG4gIGV4cG9ydEFzOiAnY2VsbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBDZWxsQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfdHJ1bmNhdGU6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2xvYWRpbmc6IEJvb2xlYW5JbnB1dDtcblxuICBwcml2YXRlIGRlc3Ryb3kkPzogU3Vic2NyaXB0aW9uO1xuXG4gIF90ZXh0ITogc3RyaW5nIHwgU2FmZUh0bWw7XG4gIF91bml0Pzogc3RyaW5nO1xuICByZXM/OiBDZWxsVGV4dFJlc3VsdDtcbiAgc2hvd0RlZmF1bHQgPSBmYWxzZTtcblxuICBASW5wdXQoKSB2YWx1ZT86IHVua25vd247XG4gIEBJbnB1dCgpIGRlZmF1bHQgPSAnLSc7XG4gIEBJbnB1dCgpIGRlZmF1bHRDb25kaXRpb24/OiB1bmtub3duID0gbnVsbDtcbiAgQElucHV0KCkgb3B0aW9ucz86IENlbGxPcHRpb25zO1xuICBASW5wdXQoKSB1bml0Pzogc3RyaW5nO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgdHJ1bmNhdGUgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGxvYWRpbmcgPSBmYWxzZTtcbiAgQElucHV0KCkgdHlwZT86ICdwcmltYXJ5JyB8ICdzdWNjZXNzJyB8ICdkYW5nZXInIHwgJ3dhcm5pbmcnO1xuICBASW5wdXQoKSBzaXplPzogJ2xhcmdlJyB8ICdzbWFsbCc7XG5cbiAgLyoqXG4gICAqIOi0p+W4geW/q+aNt+mhuVxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiA8Y2VsbCBbY3VycmVuY3ldPVwiMTAwMFwiPjwvY2VsbD5cbiAgICog562J5ZCM5LqOXG4gICAqIDxjZWxsIFt2YWx1ZV09XCIxMDAwXCIgW29wdGlvbnNdPVwie3R5cGU6ICdjdXJyZW5jeSd9XCI+PC9jZWxsPlxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IGN1cnJlbmN5KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5vcHRpb25zID0geyB0eXBlOiAnY3VycmVuY3knIH07XG4gICAgdGhpcy51cGRhdGVWYWx1ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIOaXpeacn+W/q+aNt+mhuVxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiA8Y2VsbCBbZGF0ZV09XCIxMDAwXCI+PC9jZWxsPlxuICAgKiDnrYnlkIzkuo5cbiAgICogPGNlbGwgW3ZhbHVlXT1cIjEwMDBcIiBbb3B0aW9uc109XCJ7dHlwZTogJ2RhdGUnfVwiPjwvY2VsbD5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBkYXRlKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcgfCBEYXRlKSB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMub3B0aW9ucyA9IHsgdHlwZTogJ2RhdGUnIH07XG4gICAgdGhpcy51cGRhdGVWYWx1ZSgpO1xuICB9XG5cbiAgZ2V0IHNhZmVPcHQoKTogQ2VsbE9wdGlvbnMge1xuICAgIHJldHVybiB0aGlzLnJlcz8ub3B0aW9ucyE7XG4gIH1cbiAgZ2V0IGlzVGV4dCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5yZXM/LnNhZmVIdG1sID09PSAndGV4dCc7XG4gIH1cbiAgZ2V0IGhvc3REYXRhKCk6IENlbGxXaWRnZXREYXRhIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICBkZWZhdWx0OiB0aGlzLmRlZmF1bHQsXG4gICAgICBkZWZhdWx0Q29uZGl0aW9uOiB0aGlzLmRlZmF1bHRDb25kaXRpb24sXG4gICAgICBvcHRpb25zOiB0aGlzLnNydi5maXhPcHRpb25zKHRoaXMub3B0aW9ucyksXG4gICAgICB0cnVuY2F0ZTogdGhpcy50cnVuY2F0ZVxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHNydjogQ2VsbFNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgaW1nU3J2OiBOekltYWdlU2VydmljZSxcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgIEBJbmplY3QoV0lORE9XKSBwcml2YXRlIHdpbjogYW55XG4gICkge31cblxuICBwcml2YXRlIHVwZGF0ZVZhbHVlKCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQ/LnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5kZXN0cm95JCA9IHRoaXMuc3J2LmdldCh0aGlzLnZhbHVlLCB0aGlzLm9wdGlvbnMpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgdGhpcy5yZXMgPSByZXM7XG4gICAgICB0aGlzLnNob3dEZWZhdWx0ID0gdGhpcy52YWx1ZSA9PSB0aGlzLmRlZmF1bHRDb25kaXRpb247XG4gICAgICB0aGlzLl90ZXh0ID0gcmVzLnJlc3VsdD8udGV4dCA/PyAnJztcbiAgICAgIHRoaXMuX3VuaXQgPSByZXMucmVzdWx0Py51bml0ID8/IHRoaXMudW5pdDtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIHRoaXMuc2V0Q2xhc3MoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0Q2xhc3MoKTogdm9pZCB7XG4gICAgY29uc3QgeyBlbCwgcmVuZGVyZXIgfSA9IHRoaXM7XG4gICAgdXBkYXRlSG9zdENsYXNzKGVsLm5hdGl2ZUVsZW1lbnQsIHJlbmRlcmVyLCB7XG4gICAgICBbYGNlbGxgXTogdHJ1ZSxcbiAgICAgIFtgY2VsbF9fJHt0aGlzLnR5cGV9YF06IHRoaXMudHlwZSAhPSBudWxsLFxuICAgICAgW2BjZWxsX18ke3RoaXMuc2l6ZX1gXTogdGhpcy5zaXplICE9IG51bGwsXG4gICAgICBbYGNlbGxfX2hhcy11bml0YF06IHRoaXMuX3VuaXQsXG4gICAgICBbYGNlbGxfX2hhcy1kZWZhdWx0YF06IHRoaXMuc2hvd0RlZmF1bHRcbiAgICB9KTtcbiAgICBlbC5uYXRpdmVFbGVtZW50LmRhdGFzZXQudHlwZSA9IHRoaXMuc2FmZU9wdC50eXBlO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVWYWx1ZSgpO1xuICB9XG5cbiAgX2xpbmsoZTogRXZlbnQpOiB2b2lkIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCBsaW5rID0gdGhpcy5zYWZlT3B0Lmxpbms7XG4gICAgY29uc3QgdXJsID0gbGluaz8udXJsO1xuICAgIGlmICh1cmwgPT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwodXJsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgKHRoaXMud2luIGFzIFdpbmRvdykub3Blbih1cmwsIGxpbms/LnRhcmdldCk7XG4gICAgfVxuICB9XG5cbiAgX3Nob3dJbWcoaW1nOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBjb25maWcgPSB0aGlzLnNhZmVPcHQuaW1nO1xuICAgIGlmIChjb25maWcgPT0gbnVsbCB8fCBjb25maWcuYmlnID09PSBmYWxzZSkgcmV0dXJuO1xuXG4gICAgbGV0IGlkeCA9IC0xO1xuICAgIGNvbnN0IGxpc3QgPSAodGhpcy5fdGV4dCBhcyBzdHJpbmdbXSkubWFwKChwLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGlkeCA9PT0gLTEgJiYgcCA9PT0gaW1nKSBpZHggPSBpbmRleDtcbiAgICAgIHJldHVybiB0eXBlb2YgY29uZmlnLmJpZyA9PT0gJ2Z1bmN0aW9uJyA/IGNvbmZpZy5iaWcocCkgOiBwO1xuICAgIH0pO1xuICAgIHRoaXMuaW1nU3J2XG4gICAgICAucHJldmlldyhcbiAgICAgICAgbGlzdC5tYXAocCA9PiAoeyBzcmM6IHAgfSBhcyBOekltYWdlKSksXG4gICAgICAgIGNvbmZpZy5wcmV2aWV3T3B0aW9uc1xuICAgICAgKVxuICAgICAgLnN3aXRjaFRvKGlkeCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkPy51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=