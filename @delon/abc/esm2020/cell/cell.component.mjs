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
    setClass() {
        const { el, renderer } = this;
        updateHostClass(el.nativeElement, renderer, {
            [`cell`]: true,
            [`cell__default`]: this.showDefault,
            [`cell__${this.type}`]: this.type != null,
            [`cell__${this.size}`]: this.size != null,
            [`cell__has-unit`]: this._unit
        });
        el.nativeElement.dataset.type = this.safeOpt.type;
    }
    ngOnChanges(changes) {
        if (changes.value) {
            this.destroy$?.unsubscribe();
            this.destroy$ = this.srv.get(this.value, this.options).subscribe(res => {
                this.res = res;
                this.showDefault = this.value == this.defaultCondition;
                this._text = res?.result?.text ?? this.default ?? '';
                this._unit = res?.result?.unit;
                this.cdr.detectChanges();
                this.setClass();
            });
        }
    }
    _stopPropagation(ev) {
        ev.preventDefault();
        ev.stopPropagation();
    }
    _link(e) {
        this._stopPropagation(e);
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
}
CellComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.2", ngImport: i0, type: CellComponent, deps: [{ token: i1.CellService }, { token: i2.Router }, { token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i3.NzImageService }, { token: WINDOW }], target: i0.ɵɵFactoryTarget.Component });
CellComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.2", type: CellComponent, selector: "[cell]", inputs: { value: "value", default: "default", defaultCondition: "defaultCondition", options: "options", truncate: "truncate", loading: "loading", type: "type", size: "size" }, exportAs: ["cell"], usesOnChanges: true, ngImport: i0, template: `
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
                    selector: '[cell]',
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
            }], truncate: [{
                type: Input
            }], loading: [{
                type: Input
            }], type: [{
                type: Input
            }], size: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvY2VsbC9jZWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUV2QixTQUFTLEVBRVQsTUFBTSxFQUNOLEtBQUssRUFLTCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFLdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBZ0IsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDbkUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7Ozs7Ozs7OztBQXdEM0MsTUFBTSxPQUFPLGFBQWE7SUFvQ3hCLFlBQ1UsR0FBZ0IsRUFDaEIsTUFBYyxFQUNkLEdBQXNCLEVBQ3RCLEVBQTJCLEVBQzNCLFFBQW1CLEVBQ25CLE1BQXNCO0lBQzlCLDhEQUE4RDtJQUN0QyxHQUFRO1FBUHhCLFFBQUcsR0FBSCxHQUFHLENBQWE7UUFDaEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3RCLE9BQUUsR0FBRixFQUFFLENBQXlCO1FBQzNCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFFTixRQUFHLEdBQUgsR0FBRyxDQUFLO1FBbkNsQyxnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUdYLFlBQU8sR0FBRyxHQUFHLENBQUM7UUFDZCxxQkFBZ0IsR0FBYSxJQUFJLENBQUM7UUFFbEIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixZQUFPLEdBQUcsS0FBSyxDQUFDO0lBNkJ0QyxDQUFDO0lBekJKLElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLEdBQUcsRUFBRSxPQUFRLENBQUM7SUFDNUIsQ0FBQztJQUNELElBQUksTUFB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QUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxRQUFRO29CQUNsQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTBDVDtvQkFDRCxRQUFRLEVBQUUsTUFBTTtvQkFDaEIsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUN0Qzs7MEJBNkNJLE1BQU07MkJBQUMsTUFBTTs0Q0FqQ1AsS0FBSztzQkFBYixLQUFLO2dCQUNHLE9BQU87c0JBQWYsS0FBSztnQkFDRyxnQkFBZ0I7c0JBQXhCLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLO2dCQUNtQixRQUFRO3NCQUFoQyxLQUFLO2dCQUNtQixPQUFPO3NCQUEvQixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IHVwZGF0ZUhvc3RDbGFzcyB9IGZyb20gJ0BkZWxvbi91dGlsL2Jyb3dzZXInO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBJbnB1dEJvb2xlYW4gfSBmcm9tICdAZGVsb24vdXRpbC9kZWNvcmF0b3InO1xuaW1wb3J0IHsgV0lORE9XIH0gZnJvbSAnQGRlbG9uL3V0aWwvdG9rZW4nO1xuaW1wb3J0IHsgTnpJbWFnZSwgTnpJbWFnZVNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2ltYWdlJztcblxuaW1wb3J0IHsgQ2VsbFNlcnZpY2UgfSBmcm9tICcuL2NlbGwuc2VydmljZSc7XG5pbXBvcnQgdHlwZSB7IENlbGxPcHRpb25zLCBDZWxsVGV4dFJlc3VsdCwgQ2VsbFdpZGdldERhdGEgfSBmcm9tICcuL2NlbGwudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbY2VsbF0nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy10ZW1wbGF0ZSAjdGV4dD5cbiAgICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cInJlcz8udHlwZVwiPlxuICAgICAgICA8YVxuICAgICAgICAgICpuZ1N3aXRjaENhc2U9XCInbGluaydcIlxuICAgICAgICAgIChjbGljayk9XCJfbGluaygkZXZlbnQpXCJcbiAgICAgICAgICBbYXR0ci50YXJnZXRdPVwic2FmZU9wdC5saW5rPy50YXJnZXRcIlxuICAgICAgICAgIFtpbm5lckhUTUxdPVwiX3RleHRcIlxuICAgICAgICAgIFthdHRyLnRpdGxlXT1cInRydW5jYXRlID8gdmFsdWUgOiBudWxsXCJcbiAgICAgICAgPjwvYT5cbiAgICAgICAgPG56LXRhZyAqbmdTd2l0Y2hDYXNlPVwiJ3RhZydcIiBbbnpDb2xvcl09XCJyZXM/LnJlc3VsdD8uY29sb3JcIj5cbiAgICAgICAgICA8c3BhbiBbaW5uZXJIVE1MXT1cIl90ZXh0XCI+PC9zcGFuPlxuICAgICAgICA8L256LXRhZz5cbiAgICAgICAgPG56LWJhZGdlICpuZ1N3aXRjaENhc2U9XCInYmFkZ2UnXCIgW256U3RhdHVzXT1cInJlcz8ucmVzdWx0Py5jb2xvclwiIG56VGV4dD1cInt7IF90ZXh0IH19XCI+PC9uei1iYWRnZT5cbiAgICAgICAgPG5nLXRlbXBsYXRlICpuZ1N3aXRjaENhc2U9XCInd2lkZ2V0J1wiIGNlbGwtd2lkZ2V0LWhvc3QgW2RhdGFdPVwiaG9zdERhdGFcIj48L25nLXRlbXBsYXRlPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInaW1nJ1wiPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICpuZ0Zvcj1cImxldCBpIG9mICRhbnkoX3RleHQpXCJcbiAgICAgICAgICAgIFthdHRyLnNyY109XCJpXCJcbiAgICAgICAgICAgIFthdHRyLmhlaWdodF09XCJzYWZlT3B0LmltZz8uc2l6ZVwiXG4gICAgICAgICAgICBbYXR0ci53aWR0aF09XCJzYWZlT3B0LmltZz8uc2l6ZVwiXG4gICAgICAgICAgICAoY2xpY2spPVwiX3Nob3dJbWcoaSlcIlxuICAgICAgICAgICAgY2xhc3M9XCJpbWdcIlxuICAgICAgICAgICAgW2NsYXNzLnBvaW50XT1cInNhZmVPcHQuaW1nPy5iaWdcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaERlZmF1bHQ+XG4gICAgICAgICAgPHNwYW4gKm5nSWY9XCIhaXNUZXh0XCIgW2lubmVySFRNTF09XCJfdGV4dFwiIFthdHRyLnRpdGxlXT1cInRydW5jYXRlID8gdmFsdWUgOiBudWxsXCI+PC9zcGFuPlxuICAgICAgICAgIDxzcGFuICpuZ0lmPVwiaXNUZXh0XCIgW2lubmVyVGV4dF09XCJfdGV4dFwiIFthdHRyLnRpdGxlXT1cInRydW5jYXRlID8gdmFsdWUgOiBudWxsXCI+PC9zcGFuPlxuICAgICAgICAgIDxzcGFuICpuZ0lmPVwiX3VuaXRcIiBjbGFzcz1cInVuaXRcIj57eyBfdW5pdCB9fTwvc3Bhbj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZSAjdGV4dFdyYXA+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwic2hvd0RlZmF1bHRcIj57eyBkZWZhdWx0IH19PC9uZy1jb250YWluZXI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXNob3dEZWZhdWx0XCI+XG4gICAgICAgIDxzcGFuICpuZ0lmPVwic2FmZU9wdD8udG9vbHRpcDsgZWxzZSB0ZXh0XCIgbnotdG9vbHRpcCBbbnpUb29sdGlwVGl0bGVdPVwic2FmZU9wdC50b29sdGlwXCI+XG4gICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRleHRcIj48L25nLXRlbXBsYXRlPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxzcGFuICpuZ0lmPVwibG9hZGluZzsgZWxzZSB0ZXh0V3JhcFwiIG56LWljb24gbnpUeXBlPVwibG9hZGluZ1wiPjwvc3Bhbj5cbiAgYCxcbiAgZXhwb3J0QXM6ICdjZWxsJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIENlbGxDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV90cnVuY2F0ZTogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbG9hZGluZzogQm9vbGVhbklucHV0O1xuXG4gIHByaXZhdGUgZGVzdHJveSQ/OiBTdWJzY3JpcHRpb247XG5cbiAgX3RleHQhOiBzdHJpbmcgfCBTYWZlSHRtbDtcbiAgX3VuaXQ/OiBzdHJpbmc7XG4gIHJlcz86IENlbGxUZXh0UmVzdWx0O1xuICBzaG93RGVmYXVsdCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIHZhbHVlPzogdW5rbm93bjtcbiAgQElucHV0KCkgZGVmYXVsdCA9ICctJztcbiAgQElucHV0KCkgZGVmYXVsdENvbmRpdGlvbj86IHVua25vd24gPSBudWxsO1xuICBASW5wdXQoKSBvcHRpb25zPzogQ2VsbE9wdGlvbnM7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSB0cnVuY2F0ZSA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbG9hZGluZyA9IGZhbHNlO1xuICBASW5wdXQoKSB0eXBlPzogJ3ByaW1hcnknIHwgJ3N1Y2Nlc3MnIHwgJ2RhbmdlcicgfCAnd2FybmluZyc7XG4gIEBJbnB1dCgpIHNpemU/OiAnbGFyZ2UnIHwgJ3NtYWxsJztcblxuICBnZXQgc2FmZU9wdCgpOiBDZWxsT3B0aW9ucyB7XG4gICAgcmV0dXJuIHRoaXMucmVzPy5vcHRpb25zITtcbiAgfVxuICBnZXQgaXNUZXh0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnJlcz8uc2FmZUh0bWwgPT09ICd0ZXh0JztcbiAgfVxuICBnZXQgaG9zdERhdGEoKTogQ2VsbFdpZGdldERhdGEge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgIGRlZmF1bHQ6IHRoaXMuZGVmYXVsdCxcbiAgICAgIGRlZmF1bHRDb25kaXRpb246IHRoaXMuZGVmYXVsdENvbmRpdGlvbixcbiAgICAgIG9wdGlvbnM6IHRoaXMuc3J2LmZpeE9wdGlvbnModGhpcy5vcHRpb25zKSxcbiAgICAgIHRydW5jYXRlOiB0aGlzLnRydW5jYXRlXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc3J2OiBDZWxsU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBpbWdTcnY6IE56SW1hZ2VTZXJ2aWNlLFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgQEluamVjdChXSU5ET1cpIHByaXZhdGUgd2luOiBhbnlcbiAgKSB7fVxuXG4gIHByaXZhdGUgc2V0Q2xhc3MoKTogdm9pZCB7XG4gICAgY29uc3QgeyBlbCwgcmVuZGVyZXIgfSA9IHRoaXM7XG4gICAgdXBkYXRlSG9zdENsYXNzKGVsLm5hdGl2ZUVsZW1lbnQsIHJlbmRlcmVyLCB7XG4gICAgICBbYGNlbGxgXTogdHJ1ZSxcbiAgICAgIFtgY2VsbF9fZGVmYXVsdGBdOiB0aGlzLnNob3dEZWZhdWx0LFxuICAgICAgW2BjZWxsX18ke3RoaXMudHlwZX1gXTogdGhpcy50eXBlICE9IG51bGwsXG4gICAgICBbYGNlbGxfXyR7dGhpcy5zaXplfWBdOiB0aGlzLnNpemUgIT0gbnVsbCxcbiAgICAgIFtgY2VsbF9faGFzLXVuaXRgXTogdGhpcy5fdW5pdFxuICAgIH0pO1xuICAgIGVsLm5hdGl2ZUVsZW1lbnQuZGF0YXNldC50eXBlID0gdGhpcy5zYWZlT3B0LnR5cGU7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtwIGluIGtleW9mIENlbGxDb21wb25lbnRdPzogU2ltcGxlQ2hhbmdlIH0pOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy52YWx1ZSkge1xuICAgICAgdGhpcy5kZXN0cm95JD8udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuZGVzdHJveSQgPSB0aGlzLnNydi5nZXQodGhpcy52YWx1ZSwgdGhpcy5vcHRpb25zKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgdGhpcy5yZXMgPSByZXM7XG4gICAgICAgIHRoaXMuc2hvd0RlZmF1bHQgPSB0aGlzLnZhbHVlID09IHRoaXMuZGVmYXVsdENvbmRpdGlvbjtcbiAgICAgICAgdGhpcy5fdGV4dCA9IHJlcz8ucmVzdWx0Py50ZXh0ID8/IHRoaXMuZGVmYXVsdCA/PyAnJztcbiAgICAgICAgdGhpcy5fdW5pdCA9IHJlcz8ucmVzdWx0Py51bml0O1xuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIHRoaXMuc2V0Q2xhc3MoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3N0b3BQcm9wYWdhdGlvbihldjogRXZlbnQpOiB2b2lkIHtcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgX2xpbmsoZTogRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLl9zdG9wUHJvcGFnYXRpb24oZSk7XG4gICAgY29uc3QgbGluayA9IHRoaXMuc2FmZU9wdC5saW5rO1xuICAgIGNvbnN0IHVybCA9IGxpbms/LnVybDtcbiAgICBpZiAodXJsID09IG51bGwpIHJldHVybjtcblxuICAgIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHVybCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICh0aGlzLndpbiBhcyBXaW5kb3cpLm9wZW4odXJsLCBsaW5rPy50YXJnZXQpO1xuICAgIH1cbiAgfVxuXG4gIF9zaG93SW1nKGltZzogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgY29uZmlnID0gdGhpcy5zYWZlT3B0LmltZztcbiAgICBpZiAoY29uZmlnID09IG51bGwgfHwgY29uZmlnLmJpZyA9PSBudWxsKSByZXR1cm47XG5cbiAgICBsZXQgaWR4ID0gLTE7XG4gICAgY29uc3QgbGlzdCA9ICh0aGlzLl90ZXh0IGFzIHN0cmluZ1tdKS5tYXAoKHAsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaWR4ID09PSAtMSAmJiBwID09PSBpbWcpIGlkeCA9IGluZGV4O1xuICAgICAgcmV0dXJuIHR5cGVvZiBjb25maWcuYmlnID09PSAnZnVuY3Rpb24nID8gY29uZmlnLmJpZyhwKSA6IHA7XG4gICAgfSk7XG4gICAgdGhpcy5pbWdTcnZcbiAgICAgIC5wcmV2aWV3KFxuICAgICAgICBsaXN0Lm1hcChwID0+ICh7IHNyYzogcCB9IGFzIE56SW1hZ2UpKSxcbiAgICAgICAgY29uZmlnLnByZXZpZXdPcHRpb25zXG4gICAgICApXG4gICAgICAuc3dpdGNoVG8oaWR4KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQ/LnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==