import { Directive, EventEmitter, Host, Input, Optional, Output } from '@angular/core';
import { fixEndTimeOfRange, getTimeDistance } from '@delon/util/date-time';
import { assert, deepMergeKey } from '@delon/util/other';
import { RangePickerShortcutTplComponent } from './range-shortcut.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "@delon/util/config";
import * as i3 from "ng-zorro-antd/date-picker";
export class RangePickerDirective {
    set shortcut(val) {
        const item = deepMergeKey({ list: [] }, true, this.defaultShortcuts, val == null ? {} : val);
        if (typeof val !== 'object') {
            item.enabled = val !== false;
        }
        (item.list || []).forEach(i => {
            i._text = this.dom.bypassSecurityTrustHtml(i.text);
        });
        this._shortcut = item;
        this.refreshShortcut();
    }
    get shortcut() {
        return this._shortcut;
    }
    get dp() {
        return this.nativeComp.datePicker;
    }
    get srv() {
        return this.dp.datePickerService;
    }
    constructor(dom, configSrv, nativeComp, vcr) {
        this.dom = dom;
        this.nativeComp = nativeComp;
        this.vcr = vcr;
        this._shortcut = null;
        this.shortcutFactory = null;
        this.start = null;
        this.end = null;
        this.ngModelEndChange = new EventEmitter();
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
            assert(!!nativeComp, `It should be attached to nz-range-picker component, for example: '<nz-range-picker [(ngModel)]="i.start" extend [(ngModelEnd)]="i.end" shortcut></nz-range-picker>'`);
        }
        const cog = configSrv.merge('dataRange', {
            nzFormat: 'yyyy-MM-dd',
            nzAllowClear: true,
            nzAutoFocus: false,
            nzPopupStyle: { position: 'relative' },
            nzShowToday: true,
            shortcuts: {
                enabled: false,
                closed: true,
                list: [
                    {
                        text: '今天',
                        fn: () => getTimeDistance('today')
                    },
                    {
                        text: '昨天',
                        fn: () => getTimeDistance('yesterday')
                    },
                    {
                        text: '近3天',
                        fn: () => getTimeDistance(-2)
                    },
                    {
                        text: '近7天',
                        fn: () => getTimeDistance(-6)
                    },
                    {
                        text: '本周',
                        fn: () => getTimeDistance('week')
                    },
                    {
                        text: '本月',
                        fn: () => getTimeDistance('month')
                    },
                    {
                        text: '全年',
                        fn: () => getTimeDistance('year')
                    }
                ]
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
            const dates = (value && this.ngModelEnd ? [value, this.ngModelEnd] : []).filter(w => !!w);
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
            this.ngModelEnd = end;
            this.ngModelEndChange.emit(end);
        };
    }
    refreshShortcut() {
        if (!this._shortcut) {
            return;
        }
        const { enabled, list } = this._shortcut;
        let extraFooter;
        if (!this.nativeComp || !enabled) {
            extraFooter = undefined;
        }
        else {
            if (!this.shortcutFactory) {
                this.shortcutFactory = this.vcr.createComponent(RangePickerShortcutTplComponent);
            }
            const { instance } = this.shortcutFactory;
            instance.list = list;
            instance.click = (item) => {
                const res = item.fn([this.start, this.end]);
                this.srv.setValue(this.srv.makeValue(res));
                this.dp.onChangeFn(res);
                this.dp.close();
            };
            extraFooter = instance.tpl;
        }
        this.nativeComp.datePicker.extraFooter = extraFooter;
        Promise.resolve().then(() => this.cd());
    }
    ngAfterViewInit() {
        this.overrideNative();
        this.refreshShortcut();
    }
    destoryShortcut() {
        if (this.shortcutFactory != null) {
            this.shortcutFactory.destroy();
        }
    }
    ngOnDestroy() {
        this.destoryShortcut();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: RangePickerDirective, deps: [{ token: i1.DomSanitizer }, { token: i2.AlainConfigService }, { token: i3.NzRangePickerComponent, host: true, optional: true }, { token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.1.0", type: RangePickerDirective, isStandalone: true, selector: "nz-range-picker[extend]", inputs: { shortcut: "shortcut", ngModelEnd: "ngModelEnd" }, outputs: { ngModelEndChange: "ngModelEndChange" }, exportAs: ["extendRangePicker"], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: RangePickerDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'nz-range-picker[extend]',
                    exportAs: 'extendRangePicker',
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i1.DomSanitizer }, { type: i2.AlainConfigService }, { type: i3.NzRangePickerComponent, decorators: [{
                    type: Host
                }, {
                    type: Optional
                }] }, { type: i0.ViewContainerRef }], propDecorators: { shortcut: [{
                type: Input
            }], ngModelEnd: [{
                type: Input,
                args: [{ required: true }]
            }], ngModelEndChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL2RhdGUtcGlja2VyL3JhbmdlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBR0wsU0FBUyxFQUNULFlBQVksRUFDWixJQUFJLEVBQ0osS0FBSyxFQUVMLFFBQVEsRUFDUixNQUFNLEVBR1AsTUFBTSxlQUFlLENBQUM7QUFJdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGVBQWUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzNFLE9BQU8sRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFLekQsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7O0FBTzdFLE1BQU0sT0FBTyxvQkFBb0I7SUFTL0IsSUFDSSxRQUFRLENBQUMsR0FBd0M7UUFDbkQsTUFBTSxJQUFJLEdBQUcsWUFBWSxDQUN2QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsRUFDWixJQUFJLEVBQ0osSUFBSSxDQUFDLGdCQUFnQixFQUNyQixHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FDUyxDQUFDO1FBQ2xDLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxFQUFFLENBQUM7WUFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLEtBQUssS0FBSyxDQUFDO1FBQy9CLENBQUM7UUFDRCxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQzVCLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckQsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsU0FB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QUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ29tcG9uZW50UmVmLFxuICBEaXJlY3RpdmUsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdCxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlLCBBbGFpbkRhdGVSYW5nZVBpY2tlclNob3J0Y3V0LCBBbGFpbkRhdGVSYW5nZVBpY2tlclNob3J0Y3V0SXRlbSB9IGZyb20gJ0BkZWxvbi91dGlsL2NvbmZpZyc7XG5pbXBvcnQgeyBmaXhFbmRUaW1lT2ZSYW5nZSwgZ2V0VGltZURpc3RhbmNlIH0gZnJvbSAnQGRlbG9uL3V0aWwvZGF0ZS10aW1lJztcbmltcG9ydCB7IGFzc2VydCwgZGVlcE1lcmdlS2V5IH0gZnJvbSAnQGRlbG9uL3V0aWwvb3RoZXInO1xuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgTnpEYXRlUGlja2VyQ29tcG9uZW50LCBOelJhbmdlUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC9kYXRlLXBpY2tlcic7XG5pbXBvcnQgeyBEYXRlUGlja2VyU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvZGF0ZS1waWNrZXIvZGF0ZS1waWNrZXIuc2VydmljZSc7XG5cbmltcG9ydCB7IFJhbmdlUGlja2VyU2hvcnRjdXRUcGxDb21wb25lbnQgfSBmcm9tICcuL3JhbmdlLXNob3J0Y3V0LmNvbXBvbmVudCc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ256LXJhbmdlLXBpY2tlcltleHRlbmRdJyxcbiAgZXhwb3J0QXM6ICdleHRlbmRSYW5nZVBpY2tlcicsXG4gIHN0YW5kYWxvbmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgUmFuZ2VQaWNrZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc2hvcnRjdXQ6IEFsYWluRGF0ZVJhbmdlUGlja2VyU2hvcnRjdXQgfCBzdHJpbmcgfCBudWxsO1xuXG4gIHByaXZhdGUgZGVmYXVsdFNob3J0Y3V0czogQWxhaW5EYXRlUmFuZ2VQaWNrZXJTaG9ydGN1dDtcbiAgcHJpdmF0ZSBfc2hvcnRjdXQ6IEFsYWluRGF0ZVJhbmdlUGlja2VyU2hvcnRjdXQgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBzaG9ydGN1dEZhY3Rvcnk6IENvbXBvbmVudFJlZjxSYW5nZVBpY2tlclNob3J0Y3V0VHBsQ29tcG9uZW50PiB8IG51bGwgPSBudWxsO1xuICBzdGFydDogRGF0ZSB8IG51bGwgPSBudWxsO1xuICBlbmQ6IERhdGUgfCBudWxsID0gbnVsbDtcblxuICBASW5wdXQoKVxuICBzZXQgc2hvcnRjdXQodmFsOiBBbGFpbkRhdGVSYW5nZVBpY2tlclNob3J0Y3V0IHwgbnVsbCkge1xuICAgIGNvbnN0IGl0ZW0gPSBkZWVwTWVyZ2VLZXkoXG4gICAgICB7IGxpc3Q6IFtdIH0sXG4gICAgICB0cnVlLFxuICAgICAgdGhpcy5kZWZhdWx0U2hvcnRjdXRzLFxuICAgICAgdmFsID09IG51bGwgPyB7fSA6IHZhbFxuICAgICkgYXMgQWxhaW5EYXRlUmFuZ2VQaWNrZXJTaG9ydGN1dDtcbiAgICBpZiAodHlwZW9mIHZhbCAhPT0gJ29iamVjdCcpIHtcbiAgICAgIGl0ZW0uZW5hYmxlZCA9IHZhbCAhPT0gZmFsc2U7XG4gICAgfVxuICAgIChpdGVtLmxpc3QgfHwgW10pLmZvckVhY2goaSA9PiB7XG4gICAgICBpLl90ZXh0ID0gdGhpcy5kb20uYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoaS50ZXh0KTtcbiAgICB9KTtcbiAgICB0aGlzLl9zaG9ydGN1dCA9IGl0ZW07XG4gICAgdGhpcy5yZWZyZXNoU2hvcnRjdXQoKTtcbiAgfVxuICBnZXQgc2hvcnRjdXQoKTogQWxhaW5EYXRlUmFuZ2VQaWNrZXJTaG9ydGN1dCB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLl9zaG9ydGN1dDtcbiAgfVxuICBASW5wdXQoeyByZXF1aXJlZDogdHJ1ZSB9KSBuZ01vZGVsRW5kOiBOelNhZmVBbnk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuZ01vZGVsRW5kQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxOelNhZmVBbnk+KCk7XG5cbiAgcHJpdmF0ZSBnZXQgZHAoKTogTnpEYXRlUGlja2VyQ29tcG9uZW50IHtcbiAgICByZXR1cm4gdGhpcy5uYXRpdmVDb21wLmRhdGVQaWNrZXI7XG4gIH1cblxuICBwcml2YXRlIGdldCBzcnYoKTogRGF0ZVBpY2tlclNlcnZpY2Uge1xuICAgIHJldHVybiB0aGlzLmRwLmRhdGVQaWNrZXJTZXJ2aWNlO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBkb206IERvbVNhbml0aXplcixcbiAgICBjb25maWdTcnY6IEFsYWluQ29uZmlnU2VydmljZSxcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIHByaXZhdGUgbmF0aXZlQ29tcDogTnpSYW5nZVBpY2tlckNvbXBvbmVudCxcbiAgICBwcml2YXRlIHZjcjogVmlld0NvbnRhaW5lclJlZlxuICApIHtcbiAgICBpZiAodHlwZW9mIG5nRGV2TW9kZSA9PT0gJ3VuZGVmaW5lZCcgfHwgbmdEZXZNb2RlKSB7XG4gICAgICBhc3NlcnQoXG4gICAgICAgICEhbmF0aXZlQ29tcCxcbiAgICAgICAgYEl0IHNob3VsZCBiZSBhdHRhY2hlZCB0byBuei1yYW5nZS1waWNrZXIgY29tcG9uZW50LCBmb3IgZXhhbXBsZTogJzxuei1yYW5nZS1waWNrZXIgWyhuZ01vZGVsKV09XCJpLnN0YXJ0XCIgZXh0ZW5kIFsobmdNb2RlbEVuZCldPVwiaS5lbmRcIiBzaG9ydGN1dD48L256LXJhbmdlLXBpY2tlcj4nYFxuICAgICAgKTtcbiAgICB9XG4gICAgY29uc3QgY29nID0gY29uZmlnU3J2Lm1lcmdlKCdkYXRhUmFuZ2UnLCB7XG4gICAgICBuekZvcm1hdDogJ3l5eXktTU0tZGQnLFxuICAgICAgbnpBbGxvd0NsZWFyOiB0cnVlLFxuICAgICAgbnpBdXRvRm9jdXM6IGZhbHNlLFxuICAgICAgbnpQb3B1cFN0eWxlOiB7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH0sXG4gICAgICBuelNob3dUb2RheTogdHJ1ZSxcbiAgICAgIHNob3J0Y3V0czoge1xuICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgICAgY2xvc2VkOiB0cnVlLFxuICAgICAgICBsaXN0OiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ+S7iuWkqScsXG4gICAgICAgICAgICBmbjogKCkgPT4gZ2V0VGltZURpc3RhbmNlKCd0b2RheScpXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAn5pio5aSpJyxcbiAgICAgICAgICAgIGZuOiAoKSA9PiBnZXRUaW1lRGlzdGFuY2UoJ3llc3RlcmRheScpXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAn6L+RM+WkqScsXG4gICAgICAgICAgICBmbjogKCkgPT4gZ2V0VGltZURpc3RhbmNlKC0yKVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ+i/kTflpKknLFxuICAgICAgICAgICAgZm46ICgpID0+IGdldFRpbWVEaXN0YW5jZSgtNilcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICfmnKzlkagnLFxuICAgICAgICAgICAgZm46ICgpID0+IGdldFRpbWVEaXN0YW5jZSgnd2VlaycpXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAn5pys5pyIJyxcbiAgICAgICAgICAgIGZuOiAoKSA9PiBnZXRUaW1lRGlzdGFuY2UoJ21vbnRoJylcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICflhajlubQnLFxuICAgICAgICAgICAgZm46ICgpID0+IGdldFRpbWVEaXN0YW5jZSgneWVhcicpXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSkhO1xuICAgIHRoaXMuZGVmYXVsdFNob3J0Y3V0cyA9IHsgLi4uY29nLnNob3J0Y3V0cyB9IGFzIEFsYWluRGF0ZVJhbmdlUGlja2VyU2hvcnRjdXQ7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb2cpO1xuICB9XG5cbiAgcHJpdmF0ZSBjZCgpOiB2b2lkIHtcbiAgICAodGhpcy5kcCBhcyBOelNhZmVBbnkpLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHByaXZhdGUgb3ZlcnJpZGVOYXRpdmUoKTogdm9pZCB7XG4gICAgY29uc3QgZHAgPSB0aGlzLmRwO1xuICAgIGRwLndyaXRlVmFsdWUgPSAodmFsdWU6IERhdGUpID0+IHtcbiAgICAgIGNvbnN0IGRhdGVzID0gKHZhbHVlICYmIHRoaXMubmdNb2RlbEVuZCA/IFt2YWx1ZSwgdGhpcy5uZ01vZGVsRW5kXSA6IFtdKS5maWx0ZXIodyA9PiAhIXcpO1xuICAgICAgdGhpcy5zcnYuc2V0VmFsdWUodGhpcy5zcnYubWFrZVZhbHVlKGRhdGVzKSk7XG4gICAgICB0aGlzLnN0YXJ0ID0gZGF0ZXMubGVuZ3RoID4gMCA/IGRhdGVzWzBdIDogbnVsbDtcbiAgICAgIHRoaXMuZW5kID0gZGF0ZXMubGVuZ3RoID4gMCA/IGRhdGVzWzFdIDogbnVsbDtcbiAgICAgIHRoaXMuY2QoKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb2xkT25DaGFuZ2VGbiA9IGRwLm9uQ2hhbmdlRm47XG4gICAgZHAub25DaGFuZ2VGbiA9IChsaXN0OiBBcnJheTxEYXRlIHwgbnVsbD4pID0+IHtcbiAgICAgIGxldCBzdGFydDogRGF0ZSB8IG51bGwgPSBudWxsO1xuICAgICAgbGV0IGVuZDogRGF0ZSB8IG51bGwgPSBudWxsO1xuICAgICAgaWYgKGxpc3QubGVuZ3RoID4gMCAmJiBsaXN0LmZpbHRlcih3ID0+IHcgIT0gbnVsbCkubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIFtzdGFydCwgZW5kXSA9IGZpeEVuZFRpbWVPZlJhbmdlKFtsaXN0WzBdISwgbGlzdFsxXSFdKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc3RhcnQgPSBzdGFydDtcbiAgICAgIHRoaXMuZW5kID0gZW5kO1xuICAgICAgb2xkT25DaGFuZ2VGbihzdGFydCk7XG4gICAgICB0aGlzLm5nTW9kZWxFbmQgPSBlbmQ7XG4gICAgICB0aGlzLm5nTW9kZWxFbmRDaGFuZ2UuZW1pdChlbmQpO1xuICAgIH07XG4gIH1cblxuICBwcml2YXRlIHJlZnJlc2hTaG9ydGN1dCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX3Nob3J0Y3V0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHsgZW5hYmxlZCwgbGlzdCB9ID0gdGhpcy5fc2hvcnRjdXQ7XG4gICAgbGV0IGV4dHJhRm9vdGVyOiBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgdW5kZWZpbmVkO1xuICAgIGlmICghdGhpcy5uYXRpdmVDb21wIHx8ICFlbmFibGVkKSB7XG4gICAgICBleHRyYUZvb3RlciA9IHVuZGVmaW5lZDtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCF0aGlzLnNob3J0Y3V0RmFjdG9yeSkge1xuICAgICAgICB0aGlzLnNob3J0Y3V0RmFjdG9yeSA9IHRoaXMudmNyLmNyZWF0ZUNvbXBvbmVudChSYW5nZVBpY2tlclNob3J0Y3V0VHBsQ29tcG9uZW50KTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHsgaW5zdGFuY2UgfSA9IHRoaXMuc2hvcnRjdXRGYWN0b3J5O1xuICAgICAgaW5zdGFuY2UubGlzdCA9IGxpc3QhO1xuICAgICAgaW5zdGFuY2UuY2xpY2sgPSAoaXRlbTogQWxhaW5EYXRlUmFuZ2VQaWNrZXJTaG9ydGN1dEl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgcmVzID0gaXRlbS5mbihbdGhpcy5zdGFydCwgdGhpcy5lbmRdKTtcbiAgICAgICAgdGhpcy5zcnYuc2V0VmFsdWUodGhpcy5zcnYubWFrZVZhbHVlKHJlcyBhcyBEYXRlW10pKTtcbiAgICAgICAgdGhpcy5kcC5vbkNoYW5nZUZuKHJlcyk7XG4gICAgICAgIHRoaXMuZHAuY2xvc2UoKTtcbiAgICAgIH07XG4gICAgICBleHRyYUZvb3RlciA9IGluc3RhbmNlLnRwbDtcbiAgICB9XG4gICAgdGhpcy5uYXRpdmVDb21wLmRhdGVQaWNrZXIuZXh0cmFGb290ZXIgPSBleHRyYUZvb3RlcjtcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHRoaXMuY2QoKSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5vdmVycmlkZU5hdGl2ZSgpO1xuICAgIHRoaXMucmVmcmVzaFNob3J0Y3V0KCk7XG4gIH1cblxuICBwcml2YXRlIGRlc3RvcnlTaG9ydGN1dCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zaG9ydGN1dEZhY3RvcnkgIT0gbnVsbCkge1xuICAgICAgdGhpcy5zaG9ydGN1dEZhY3RvcnkuZGVzdHJveSgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdG9yeVNob3J0Y3V0KCk7XG4gIH1cbn1cbiJdfQ==