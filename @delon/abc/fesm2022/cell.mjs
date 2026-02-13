import { NgTemplateOutlet, CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { inject, Injectable, ViewContainerRef, input, effect, Directive, Renderer2, ElementRef, DestroyRef, signal, computed, model, booleanAttribute, ViewEncapsulation, ChangeDetectionStrategy, Component, NgModule, makeEnvironmentProviders, provideEnvironmentInitializer } from '@angular/core';
import { toObservable, takeUntilDestroyed } from '@angular/core/rxjs-interop';
import * as i1 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { of, map, combineLatest, take } from 'rxjs';
import { updateHostClass } from '@delon/util/browser';
import { WINDOW } from '@delon/util/token';
import { NzBadgeComponent, NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzCheckboxComponent, NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';
import { NzImageService, NzImageModule } from 'ng-zorro-antd/image';
import { NzRadioComponent, NzRadioModule } from 'ng-zorro-antd/radio';
import { NzTagComponent, NzTagModule } from 'ng-zorro-antd/tag';
import { NzTooltipDirective, NzTooltipModule } from 'ng-zorro-antd/tooltip';
import { deepMerge, warn } from '@delon/util/other';
import { DomSanitizer } from '@angular/platform-browser';
import { yn } from '@delon/theme';
import { AlainConfigService } from '@delon/util/config';
import { formatDate } from '@delon/util/date-time';
import { CurrencyService, formatMask } from '@delon/util/format';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { NzImageModule as NzImageModule$1 } from 'ng-zorro-antd/experimental/image';

class CellService {
    nzI18n = inject(NzI18nService);
    currency = inject(CurrencyService);
    dom = inject(DomSanitizer);
    configSrv = inject(AlainConfigService);
    globalOptions = this.configSrv.merge('cell', {
        date: { format: 'yyyy-MM-dd HH:mm:ss' },
        img: { size: 32 },
        default: { text: '-' }
    });
    widgets = {
        date: {
            type: 'fn',
            ref: (value, opt) => {
                return {
                    text: formatDate(value, opt.date.format, {
                        locale: this.nzI18n.getDateLocale(),
                        customFormat: this.configSrv.get('themePipe')?.dateFormatCustom
                    })
                };
            }
        },
        mega: {
            type: 'fn',
            ref: (value, opt) => {
                const res = this.currency.mega(value, opt.mega);
                return { text: res.value, unit: res.unitI18n };
            }
        },
        currency: {
            type: 'fn',
            ref: (value, opt) => {
                return { text: this.currency.format(value, opt.currency) };
            }
        },
        cny: {
            type: 'fn',
            ref: (value, opt) => {
                return { text: this.currency.cny(value, opt.cny) };
            }
        },
        boolean: {
            type: 'fn',
            ref: (value, opt) => {
                return { text: this.dom.bypassSecurityTrustHtml(yn(value, opt.boolean)) };
            }
        },
        img: {
            type: 'fn',
            ref: value => {
                return { text: Array.isArray(value) ? value : [value] };
            }
        }
    };
    registerWidget(key, widget) {
        this.widgets[key] = { type: 'widget', ref: widget };
    }
    getWidget(key) {
        return this.widgets[key];
    }
    genType(value, options) {
        if (options.type != null)
            return options.type;
        const typeOf = typeof value;
        // When is timestamp
        if (typeOf === 'number' && /^[0-9]{13}$/g.test(value))
            return 'date';
        if (value instanceof Date || options.date != null)
            return 'date';
        // Auto detection
        if (options.widget != null)
            return 'widget';
        else if (options.mega != null)
            return 'mega';
        else if (options.currency != null)
            return 'currency';
        else if (options.cny != null)
            return 'cny';
        else if (options.img != null)
            return 'img';
        else if (options.link != null)
            return 'link';
        else if (options.html != null)
            return 'html';
        else if (options.badge != null)
            return 'badge';
        else if (options.tag != null)
            return 'tag';
        else if (options.checkbox != null)
            return 'checkbox';
        else if (options.radio != null)
            return 'radio';
        else if (options.enum != null)
            return 'enum';
        else if (typeOf === 'number')
            return 'number';
        else if (typeOf === 'boolean' || options.boolean != null)
            return 'boolean';
        else
            return 'string';
    }
    fixOptions(options) {
        return deepMerge({}, this.globalOptions, options);
    }
    get(value, options) {
        const type = this.genType(value, { ...options });
        const opt = this.fixOptions(options);
        opt.type = type;
        const isSafeHtml = typeof value === 'object' &&
            typeof value?.getTypeName === 'function' &&
            value?.getTypeName() != null;
        let res = {
            result: typeof value === 'object' && !isSafeHtml
                ? value
                : { text: value == null ? '' : isSafeHtml ? value : `${value}` },
            options: opt
        };
        const widget = this.widgets[type];
        if (widget?.type === 'fn') {
            res.result = widget.ref(value, opt);
        }
        return (typeof value === 'function' ? value(value, opt) : of(res.result)).pipe(map(text => {
            res.result = text;
            let dictData;
            switch (type) {
                case 'badge':
                    dictData = (opt.badge?.data ?? {})[value];
                    res.result = { color: 'default', ...dictData };
                    break;
                case 'tag':
                    dictData = (opt.tag?.data ?? {})[value];
                    res.result = dictData;
                    break;
                case 'enum':
                    res.result = { text: (opt.enum ?? {})[value] };
                    break;
                case 'html':
                    res.safeHtml = opt.html?.safe;
                    break;
                case 'string':
                    if (isSafeHtml)
                        res.safeHtml = 'safeHtml';
                    break;
            }
            if ((type === 'badge' || type === 'tag') && dictData?.tooltip != null) {
                res.options.tooltip = dictData.tooltip;
            }
            if (opt.mask != null) {
                res.result.text = formatMask(res.result.text, opt.mask);
            }
            return res;
        }));
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.4", ngImport: i0, type: CellService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "21.1.4", ngImport: i0, type: CellService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.4", ngImport: i0, type: CellService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });

class CellHostDirective {
    srv = inject(CellService);
    vcr = inject(ViewContainerRef);
    data = input.required(...(ngDevMode ? [{ debugName: "data" }] : []));
    constructor() {
        effect(() => {
            const data = this.data();
            const widget = data.options.widget;
            const componentType = this.srv.getWidget(widget.key)?.ref;
            if (componentType == null) {
                if (typeof ngDevMode === 'undefined' || ngDevMode) {
                    warn(`cell: No widget for type "${widget.key}"`);
                }
                return;
            }
            this.vcr.clear();
            const componentRef = this.vcr.createComponent(componentType);
            componentRef.instance.data = data;
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.4", ngImport: i0, type: CellHostDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "21.1.4", type: CellHostDirective, isStandalone: true, selector: "[cell-widget-host]", inputs: { data: { classPropertyName: "data", publicName: "data", isSignal: true, isRequired: true, transformFunction: null } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.4", ngImport: i0, type: CellHostDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cell-widget-host]'
                }]
        }], ctorParameters: () => [], propDecorators: { data: [{ type: i0.Input, args: [{ isSignal: true, alias: "data", required: true }] }] } });

class CellComponent {
    srv = inject(CellService);
    router = inject(Router);
    renderer = inject(Renderer2);
    imgSrv = inject(NzImageService);
    win = inject(WINDOW);
    el = inject(ElementRef).nativeElement;
    d$ = inject(DestroyRef);
    _text = signal('', ...(ngDevMode ? [{ debugName: "_text" }] : []));
    _unit = signal(undefined, ...(ngDevMode ? [{ debugName: "_unit" }] : []));
    _res = signal(undefined, ...(ngDevMode ? [{ debugName: "_res" }] : []));
    showDefault = computed(() => this.value() == this.safeOpt.default?.condition, ...(ngDevMode ? [{ debugName: "showDefault" }] : []));
    value = model(...(ngDevMode ? [undefined, { debugName: "value" }] : []));
    options = input(...(ngDevMode ? [undefined, { debugName: "options" }] : []));
    loading = input(false, { ...(ngDevMode ? { debugName: "loading" } : {}), transform: booleanAttribute });
    disabled = input(false, { ...(ngDevMode ? { debugName: "disabled" } : {}), transform: booleanAttribute });
    get safeOpt() {
        return this._res()?.options ?? {};
    }
    isText = computed(() => this._res()?.safeHtml === 'text', ...(ngDevMode ? [{ debugName: "isText" }] : []));
    constructor() {
        combineLatest([toObservable(this.loading), toObservable(this.disabled)])
            .pipe(takeUntilDestroyed())
            .subscribe(() => this.setClass());
        let sub = null;
        effect(() => {
            const v = this.value();
            const o = this.options();
            sub?.unsubscribe();
            sub = this.srv
                .get(v, o)
                .pipe(take(1), takeUntilDestroyed(this.d$))
                .subscribe(res => {
                this._res.set(res);
                this._text.set(res.result?.text ?? '');
                this._unit.set(res.result?.unit ?? this.safeOpt?.unit);
                this.setClass();
            });
        });
    }
    setClass() {
        const { el, renderer } = this;
        const { renderType, size, type } = this.safeOpt;
        updateHostClass(el, renderer, {
            [`cell`]: true,
            [`cell__${renderType}`]: renderType != null,
            [`cell__${size}`]: size != null,
            [`cell__has-unit`]: this._unit(),
            [`cell__has-default`]: this.showDefault(),
            [`cell__disabled`]: this.disabled()
        });
        el.setAttribute('data-type', `${type}`);
    }
    _link(e) {
        e.preventDefault();
        e.stopPropagation();
        if (this.disabled())
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
        const list = this._text().map((p, index) => {
            if (idx === -1 && p === img)
                idx = index;
            return typeof config.big === 'function' ? config.big(p) : p;
        });
        this.imgSrv
            .preview(list.map(p => ({ src: p })), config.previewOptions)
            .switchTo(idx);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.4", ngImport: i0, type: CellComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.1.4", type: CellComponent, isStandalone: true, selector: "cell, [cell]", inputs: { value: { classPropertyName: "value", publicName: "value", isSignal: true, isRequired: false, transformFunction: null }, options: { classPropertyName: "options", publicName: "options", isSignal: true, isRequired: false, transformFunction: null }, loading: { classPropertyName: "loading", publicName: "loading", isSignal: true, isRequired: false, transformFunction: null }, disabled: { classPropertyName: "disabled", publicName: "disabled", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { value: "valueChange" }, exportAs: ["cell"], ngImport: i0, template: `
    <ng-template #text>
      @let res = _res();
      @let text = _text();
      @switch (safeOpt.type) {
        @case ('checkbox') {
          <label nz-checkbox [nzDisabled]="disabled()" [ngModel]="value()" (ngModelChange)="value.set($event)">
            {{ safeOpt.checkbox?.label }}
          </label>
        }
        @case ('radio') {
          <label nz-radio [nzDisabled]="disabled()" [ngModel]="value()" (ngModelChange)="value.set($event)">
            {{ safeOpt.radio?.label }}
          </label>
        }
        @case ('link') {
          <a (click)="_link($event)" [attr.target]="safeOpt.link?.target" [attr.title]="value()" [innerHTML]="text"></a>
        }
        @case ('tag') {
          <nz-tag [nzColor]="res?.result?.color">
            <span [innerHTML]="text"></span>
          </nz-tag>
        }
        @case ('badge') {
          <nz-badge [nzStatus]="res?.result?.color" nzText="{{ text }}" />
        }
        @case ('widget') {
          @if (res) {
            <ng-template cell-widget-host [data]="res" />
          }
        }
        @case ('img') {
          @for (i of $any(text); track $index) {
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
          @if (isText()) {
            <span [innerText]="text" [attr.title]="value()"></span>
          } @else {
            <span [innerHTML]="text" [attr.title]="value()"></span>
          }
          @if (_unit()) {
            <span class="unit">{{ _unit() }}</span>
          }
        }
      }
    </ng-template>
    <ng-template #textWrap>
      @if (showDefault()) {
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
    @if (loading()) {
      <nz-icon nzType="loading" />
    } @else {
      <ng-template [ngTemplateOutlet]="textWrap" />
    }
  `, isInline: true, dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: NzCheckboxComponent, selector: "[nz-checkbox]", inputs: ["nzValue", "nzAutoFocus", "nzDisabled", "nzIndeterminate", "nzChecked", "nzId", "nzName"], outputs: ["nzCheckedChange"], exportAs: ["nzCheckbox"] }, { kind: "component", type: NzRadioComponent, selector: "[nz-radio],[nz-radio-button]", inputs: ["nzValue", "nzDisabled", "nzAutoFocus", "nz-radio-button"], exportAs: ["nzRadio"] }, { kind: "directive", type: NzIconDirective, selector: "nz-icon,[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "component", type: NzTagComponent, selector: "nz-tag", inputs: ["nzMode", "nzColor", "nzChecked", "nzBordered"], outputs: ["nzOnClose", "nzCheckedChange"], exportAs: ["nzTag"] }, { kind: "component", type: NzBadgeComponent, selector: "nz-badge", inputs: ["nzShowZero", "nzShowDot", "nzStandalone", "nzDot", "nzOverflowCount", "nzColor", "nzStyle", "nzText", "nzTitle", "nzStatus", "nzCount", "nzOffset", "nzSize"], exportAs: ["nzBadge"] }, { kind: "directive", type: NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "cdkConnectedOverlayPush", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }, { kind: "ngmodule", type: NzImageModule }, { kind: "directive", type: CellHostDirective, selector: "[cell-widget-host]", inputs: ["data"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.4", ngImport: i0, type: CellComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'cell, [cell]',
                    template: `
    <ng-template #text>
      @let res = _res();
      @let text = _text();
      @switch (safeOpt.type) {
        @case ('checkbox') {
          <label nz-checkbox [nzDisabled]="disabled()" [ngModel]="value()" (ngModelChange)="value.set($event)">
            {{ safeOpt.checkbox?.label }}
          </label>
        }
        @case ('radio') {
          <label nz-radio [nzDisabled]="disabled()" [ngModel]="value()" (ngModelChange)="value.set($event)">
            {{ safeOpt.radio?.label }}
          </label>
        }
        @case ('link') {
          <a (click)="_link($event)" [attr.target]="safeOpt.link?.target" [attr.title]="value()" [innerHTML]="text"></a>
        }
        @case ('tag') {
          <nz-tag [nzColor]="res?.result?.color">
            <span [innerHTML]="text"></span>
          </nz-tag>
        }
        @case ('badge') {
          <nz-badge [nzStatus]="res?.result?.color" nzText="{{ text }}" />
        }
        @case ('widget') {
          @if (res) {
            <ng-template cell-widget-host [data]="res" />
          }
        }
        @case ('img') {
          @for (i of $any(text); track $index) {
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
          @if (isText()) {
            <span [innerText]="text" [attr.title]="value()"></span>
          } @else {
            <span [innerHTML]="text" [attr.title]="value()"></span>
          }
          @if (_unit()) {
            <span class="unit">{{ _unit() }}</span>
          }
        }
      }
    </ng-template>
    <ng-template #textWrap>
      @if (showDefault()) {
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
    @if (loading()) {
      <nz-icon nzType="loading" />
    } @else {
      <ng-template [ngTemplateOutlet]="textWrap" />
    }
  `,
                    exportAs: 'cell',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
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
        }], ctorParameters: () => [], propDecorators: { value: [{ type: i0.Input, args: [{ isSignal: true, alias: "value", required: false }] }, { type: i0.Output, args: ["valueChange"] }], options: [{ type: i0.Input, args: [{ isSignal: true, alias: "options", required: false }] }], loading: [{ type: i0.Input, args: [{ isSignal: true, alias: "loading", required: false }] }], disabled: [{ type: i0.Input, args: [{ isSignal: true, alias: "disabled", required: false }] }] } });

const COMPS = [CellComponent];
class CellModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.4", ngImport: i0, type: CellModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "21.1.4", ngImport: i0, type: CellModule, imports: [CommonModule,
            FormsModule,
            NzCheckboxModule,
            NzRadioModule,
            NzBadgeModule,
            NzTagModule,
            NzTooltipModule,
            NzIconModule,
            NzImageModule$1, CellComponent, CellHostDirective], exports: [CellComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "21.1.4", ngImport: i0, type: CellModule, imports: [CommonModule,
            FormsModule,
            NzCheckboxModule,
            NzRadioModule,
            NzBadgeModule,
            NzTagModule,
            NzTooltipModule,
            NzIconModule,
            NzImageModule$1, COMPS] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.4", ngImport: i0, type: CellModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        NzCheckboxModule,
                        NzRadioModule,
                        NzBadgeModule,
                        NzTagModule,
                        NzTooltipModule,
                        NzIconModule,
                        NzImageModule$1,
                        ...COMPS,
                        CellHostDirective
                    ],
                    exports: COMPS
                }]
        }] });

/**
 * Just only using Standalone widgets
 */
function provideCellWidgets(...widgets) {
    return makeEnvironmentProviders([
        provideEnvironmentInitializer(() => {
            const srv = inject(CellService);
            widgets.forEach(widget => srv.registerWidget(widget.KEY, widget.type));
        })
    ]);
}

/**
 * Generated bundle index. Do not edit.
 */

export { CellComponent, CellHostDirective, CellModule, CellService, provideCellWidgets };
//# sourceMappingURL=cell.mjs.map
