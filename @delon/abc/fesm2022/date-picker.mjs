import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { viewChild, Component, inject, ViewContainerRef, input, model, Directive, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzRangePickerComponent, NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { DomSanitizer } from '@angular/platform-browser';
import { DelonLocaleService } from '@delon/theme';
import { AlainConfigService } from '@delon/util/config';
import { fixEndTimeOfRange, getTimeDistance } from '@delon/util/date-time';
import { deepMergeKey, assert } from '@delon/util/other';
import { toBoolean } from 'ng-zorro-antd/core/util';

class RangePickerShortcutTplComponent {
    tpl = viewChild.required('tpl');
    list = [];
    click(_) { }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.1", ngImport: i0, type: RangePickerShortcutTplComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.1.1", type: RangePickerShortcutTplComponent, isStandalone: true, selector: "ng-component", viewQueries: [{ propertyName: "tpl", first: true, predicate: ["tpl"], descendants: true, isSignal: true }], ngImport: i0, template: `
    <ng-template #tpl>
      @for (i of list; track $index) {
        <a (click)="click(i)" [innerHTML]="i._text" [class.ml-sm]="!$first"></a>
      }
    </ng-template>
  `, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.1", ngImport: i0, type: RangePickerShortcutTplComponent, decorators: [{
            type: Component,
            args: [{
                    selector: '',
                    template: `
    <ng-template #tpl>
      @for (i of list; track $index) {
        <a (click)="click(i)" [innerHTML]="i._text" [class.ml-sm]="!$first"></a>
      }
    </ng-template>
  `
                }]
        }], propDecorators: { tpl: [{ type: i0.ViewChild, args: ['tpl', { isSignal: true }] }] } });

class RangePickerDirective {
    dom = inject(DomSanitizer);
    vcr = inject(ViewContainerRef);
    nativeComp = inject(NzRangePickerComponent, { host: true, optional: true });
    cogSrv = inject(AlainConfigService);
    defaultShortcuts;
    _shortcut = null;
    shortcutFactory = null;
    start = null;
    end = null;
    locale = inject(DelonLocaleService).getData('datePicker');
    shortcut = input(null, { ...(ngDevMode ? { debugName: "shortcut" } : {}), transform: (v) => {
            const cog = deepMergeKey({ list: [] }, true, this.defaultShortcuts, v == null ? {} : v);
            if (typeof v !== 'object') {
                cog.enabled = toBoolean(v) !== false;
            }
            this._shortcut = cog;
            this.refreshShortcut();
            return cog;
        } });
    ngModelEnd = model.required(...(ngDevMode ? [{ debugName: "ngModelEnd" }] : []));
    get dp() {
        return this.nativeComp.datePicker;
    }
    get srv() {
        return this.dp.datePickerService;
    }
    constructor() {
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
            assert(!!this.nativeComp, `It should be attached to nz-range-picker component, for example: '<nz-range-picker [(ngModel)]="i.start" extend [(ngModelEnd)]="i.end" shortcut></nz-range-picker>'`);
        }
        const cog = this.cogSrv.merge('dataRange', {
            nzFormat: 'yyyy-MM-dd',
            nzAllowClear: true,
            nzAutoFocus: false,
            nzPopupStyle: { position: 'relative' },
            nzShowToday: true,
            shortcuts: {
                enabled: false,
                closed: true,
                list: ['today', 'yesterday', '-3', '-7', 'week', 'lastWeek', 'month', 'lastMonth', 'year']
            }
        });
        this.defaultShortcuts = { ...cog.shortcuts };
        Object.assign(this, cog);
    }
    cd() {
        this.dp.cdr.markForCheck();
    }
    overrideNative() {
        const dp = this.dp;
        dp.writeValue = (value) => {
            const dates = (value && this.ngModelEnd() ? [value, this.ngModelEnd()] : []).filter(w => !!w);
            this.srv.setValue(this.srv.makeValue(dates));
            this.start = dates.length > 0 ? dates[0] : null;
            this.end = dates.length > 0 ? dates[1] : null;
            this.cd();
        };
        const oldOnChangeFn = dp.onChangeFn;
        dp.onChangeFn = (list) => {
            let start = null;
            let end = null;
            if (list.length > 0 && list.filter(w => w != null).length === 2) {
                [start, end] = fixEndTimeOfRange([list[0], list[1]]);
            }
            this.start = start;
            this.end = end;
            oldOnChangeFn(start);
            this.ngModelEnd.set(end);
        };
    }
    refreshShortcut() {
        if (!this._shortcut) {
            return;
        }
        const { enabled } = this._shortcut;
        const list = (this._shortcut.list ?? []).map(i => {
            let item = typeof i === 'string' ? {} : i;
            if (typeof i === 'string') {
                switch (i) {
                    case 'today': {
                        item.fn = () => getTimeDistance('today');
                        item.text = this.locale.today;
                        break;
                    }
                    case 'yesterday': {
                        item.fn = () => getTimeDistance('yesterday');
                        item.text = this.locale.yesterday;
                        break;
                    }
                    case '-3': {
                        item.fn = () => getTimeDistance(-2);
                        item.text = this.locale.last3Days;
                        break;
                    }
                    case '-7': {
                        item.fn = () => getTimeDistance(-6);
                        item.text = this.locale.last7Days;
                        break;
                    }
                    case 'week': {
                        item.fn = () => getTimeDistance('week');
                        item.text = this.locale.thisWeek;
                        break;
                    }
                    case 'lastWeek': {
                        item.fn = () => getTimeDistance('-week');
                        item.text = this.locale.lastWeek;
                        break;
                    }
                    case 'month': {
                        item.fn = () => getTimeDistance('month');
                        item.text = this.locale.thisMonth;
                        break;
                    }
                    case 'lastMonth': {
                        item.fn = () => getTimeDistance('-month');
                        item.text = this.locale.lastMonth;
                        break;
                    }
                    case 'year': {
                        item.fn = () => getTimeDistance('year');
                        item.text = this.locale.thisYear;
                        break;
                    }
                }
            }
            item._text = this.dom.bypassSecurityTrustHtml(item.text);
            return item;
        });
        let extraFooter;
        if (!this.nativeComp || !enabled) {
            extraFooter = undefined;
        }
        else {
            if (!this.shortcutFactory) {
                this.shortcutFactory = this.vcr.createComponent(RangePickerShortcutTplComponent);
            }
            const instance = this.shortcutFactory.instance;
            instance.list = list;
            instance.click = (item) => {
                const res = item.fn([this.start, this.end]);
                this.srv.setValue(this.srv.makeValue(res));
                this.dp.onChangeFn(res);
                this.dp.close();
            };
            extraFooter = instance.tpl();
        }
        this.nativeComp.datePicker.extraFooter = extraFooter;
        Promise.resolve().then(() => this.cd());
    }
    ngAfterViewInit() {
        this.overrideNative();
        this.refreshShortcut();
    }
    ngOnDestroy() {
        this.shortcutFactory?.destroy();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.1", ngImport: i0, type: RangePickerDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "21.1.1", type: RangePickerDirective, isStandalone: true, selector: "nz-range-picker[extend]", inputs: { shortcut: { classPropertyName: "shortcut", publicName: "shortcut", isSignal: true, isRequired: false, transformFunction: null }, ngModelEnd: { classPropertyName: "ngModelEnd", publicName: "ngModelEnd", isSignal: true, isRequired: true, transformFunction: null } }, outputs: { ngModelEnd: "ngModelEndChange" }, exportAs: ["extendRangePicker"], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.1", ngImport: i0, type: RangePickerDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'nz-range-picker[extend]',
                    exportAs: 'extendRangePicker'
                }]
        }], ctorParameters: () => [], propDecorators: { shortcut: [{ type: i0.Input, args: [{ isSignal: true, alias: "shortcut", required: false }] }], ngModelEnd: [{ type: i0.Input, args: [{ isSignal: true, alias: "ngModelEnd", required: true }] }, { type: i0.Output, args: ["ngModelEndChange"] }] } });

const COMPONENTS = [RangePickerDirective, RangePickerShortcutTplComponent];
class DatePickerModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.1", ngImport: i0, type: DatePickerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "21.1.1", ngImport: i0, type: DatePickerModule, imports: [CommonModule, FormsModule, NzDatePickerModule, RangePickerDirective, RangePickerShortcutTplComponent], exports: [RangePickerDirective, RangePickerShortcutTplComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "21.1.1", ngImport: i0, type: DatePickerModule, imports: [CommonModule, FormsModule, NzDatePickerModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.1", ngImport: i0, type: DatePickerModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, FormsModule, NzDatePickerModule, ...COMPONENTS],
                    exports: COMPONENTS
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { DatePickerModule, RangePickerDirective, RangePickerShortcutTplComponent };
//# sourceMappingURL=date-picker.mjs.map
