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
        assert(!!nativeComp, `It should be attached to nz-range-picker component, for example: '<nz-range-picker [(ngModel)]="i.start" extend [(ngModelEnd)]="i.end" shortcut></nz-range-picker>'`);
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.4", ngImport: i0, type: RangePickerDirective, deps: [{ token: i1.DomSanitizer }, { token: i2.AlainConfigService }, { token: i3.NzRangePickerComponent, host: true, optional: true }, { token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.4", type: RangePickerDirective, selector: "nz-range-picker[extend]", inputs: { shortcut: "shortcut", ngModelEnd: "ngModelEnd" }, outputs: { ngModelEndChange: "ngModelEndChange" }, exportAs: ["extendRangePicker"], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.4", ngImport: i0, type: RangePickerDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'nz-range-picker[extend]',
                    exportAs: 'extendRangePicker'
                }]
        }], ctorParameters: function () { return [{ type: i1.DomSanitizer }, { type: i2.AlainConfigService }, { type: i3.NzRangePickerComponent, decorators: [{
                    type: Host
                }, {
                    type: Optional
                }] }, { type: i0.ViewContainerRef }]; }, propDecorators: { shortcut: [{
                type: Input
            }], ngModelEnd: [{
                type: Input,
                args: [{ required: true }]
            }], ngModelEndChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL2RhdGUtcGlja2VyL3JhbmdlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBR0wsU0FBUyxFQUNULFlBQVksRUFDWixJQUFJLEVBQ0osS0FBSyxFQUVMLFFBQVEsRUFDUixNQUFNLEVBR1AsTUFBTSxlQUFlLENBQUM7QUFJdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGVBQWUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzNFLE9BQU8sRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFLekQsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7O0FBTTdFLE1BQU0sT0FBTyxvQkFBb0I7SUFTL0IsSUFDSSxRQUFRLENBQUMsR0FBd0M7UUFDbkQsTUFBTSxJQUFJLEdBQUcsWUFBWSxDQUN2QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsRUFDWixJQUFJLEVBQ0osSUFBSSxDQUFDLGdCQUFnQixFQUNyQixHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FDUyxDQUFDO1FBQ2xDLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxFQUFFO1lBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxLQUFLLEtBQUssQ0FBQztTQUM5QjtRQUNELENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDNUIsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyRCxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxTQUFTLEdBQUcsSUFB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R0FBRyxDQUFDLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDbEIsQ0FBQyxDQUFDO1lBQ0YsV0FBVyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUM7U0FDNUI7UUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQ3JELE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFTyxlQUFlO1FBQ3JCLElBQUksSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLEVBQUU7WUFDaEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNoQztJQUNILENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3pCLENBQUM7OEdBbktVLG9CQUFvQjtrR0FBcEIsb0JBQW9COzsyRkFBcEIsb0JBQW9CO2tCQUpoQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLFFBQVEsRUFBRSxtQkFBbUI7aUJBQzlCOzswQkE0Q0ksSUFBSTs7MEJBQUksUUFBUTsyRUFqQ2YsUUFBUTtzQkFEWCxLQUFLO2dCQW9CcUIsVUFBVTtzQkFBcEMsS0FBSzt1QkFBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7Z0JBQ04sZ0JBQWdCO3NCQUFsQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ29tcG9uZW50UmVmLFxuICBEaXJlY3RpdmUsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdCxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlLCBBbGFpbkRhdGVSYW5nZVBpY2tlclNob3J0Y3V0LCBBbGFpbkRhdGVSYW5nZVBpY2tlclNob3J0Y3V0SXRlbSB9IGZyb20gJ0BkZWxvbi91dGlsL2NvbmZpZyc7XG5pbXBvcnQgeyBmaXhFbmRUaW1lT2ZSYW5nZSwgZ2V0VGltZURpc3RhbmNlIH0gZnJvbSAnQGRlbG9uL3V0aWwvZGF0ZS10aW1lJztcbmltcG9ydCB7IGFzc2VydCwgZGVlcE1lcmdlS2V5IH0gZnJvbSAnQGRlbG9uL3V0aWwvb3RoZXInO1xuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgTnpEYXRlUGlja2VyQ29tcG9uZW50LCBOelJhbmdlUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC9kYXRlLXBpY2tlcic7XG5pbXBvcnQgeyBEYXRlUGlja2VyU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvZGF0ZS1waWNrZXIvZGF0ZS1waWNrZXIuc2VydmljZSc7XG5cbmltcG9ydCB7IFJhbmdlUGlja2VyU2hvcnRjdXRUcGxDb21wb25lbnQgfSBmcm9tICcuL3JhbmdlLXNob3J0Y3V0LmNvbXBvbmVudCc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ256LXJhbmdlLXBpY2tlcltleHRlbmRdJyxcbiAgZXhwb3J0QXM6ICdleHRlbmRSYW5nZVBpY2tlcidcbn0pXG5leHBvcnQgY2xhc3MgUmFuZ2VQaWNrZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc2hvcnRjdXQ6IEFsYWluRGF0ZVJhbmdlUGlja2VyU2hvcnRjdXQgfCBzdHJpbmcgfCBudWxsO1xuXG4gIHByaXZhdGUgZGVmYXVsdFNob3J0Y3V0czogQWxhaW5EYXRlUmFuZ2VQaWNrZXJTaG9ydGN1dDtcbiAgcHJpdmF0ZSBfc2hvcnRjdXQ6IEFsYWluRGF0ZVJhbmdlUGlja2VyU2hvcnRjdXQgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBzaG9ydGN1dEZhY3Rvcnk6IENvbXBvbmVudFJlZjxSYW5nZVBpY2tlclNob3J0Y3V0VHBsQ29tcG9uZW50PiB8IG51bGwgPSBudWxsO1xuICBzdGFydDogRGF0ZSB8IG51bGwgPSBudWxsO1xuICBlbmQ6IERhdGUgfCBudWxsID0gbnVsbDtcblxuICBASW5wdXQoKVxuICBzZXQgc2hvcnRjdXQodmFsOiBBbGFpbkRhdGVSYW5nZVBpY2tlclNob3J0Y3V0IHwgbnVsbCkge1xuICAgIGNvbnN0IGl0ZW0gPSBkZWVwTWVyZ2VLZXkoXG4gICAgICB7IGxpc3Q6IFtdIH0sXG4gICAgICB0cnVlLFxuICAgICAgdGhpcy5kZWZhdWx0U2hvcnRjdXRzLFxuICAgICAgdmFsID09IG51bGwgPyB7fSA6IHZhbFxuICAgICkgYXMgQWxhaW5EYXRlUmFuZ2VQaWNrZXJTaG9ydGN1dDtcbiAgICBpZiAodHlwZW9mIHZhbCAhPT0gJ29iamVjdCcpIHtcbiAgICAgIGl0ZW0uZW5hYmxlZCA9IHZhbCAhPT0gZmFsc2U7XG4gICAgfVxuICAgIChpdGVtLmxpc3QgfHwgW10pLmZvckVhY2goaSA9PiB7XG4gICAgICBpLl90ZXh0ID0gdGhpcy5kb20uYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoaS50ZXh0KTtcbiAgICB9KTtcbiAgICB0aGlzLl9zaG9ydGN1dCA9IGl0ZW07XG4gICAgdGhpcy5yZWZyZXNoU2hvcnRjdXQoKTtcbiAgfVxuICBnZXQgc2hvcnRjdXQoKTogQWxhaW5EYXRlUmFuZ2VQaWNrZXJTaG9ydGN1dCB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLl9zaG9ydGN1dDtcbiAgfVxuICBASW5wdXQoeyByZXF1aXJlZDogdHJ1ZSB9KSBuZ01vZGVsRW5kOiBOelNhZmVBbnk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuZ01vZGVsRW5kQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxOelNhZmVBbnk+KCk7XG5cbiAgcHJpdmF0ZSBnZXQgZHAoKTogTnpEYXRlUGlja2VyQ29tcG9uZW50IHtcbiAgICByZXR1cm4gdGhpcy5uYXRpdmVDb21wLmRhdGVQaWNrZXI7XG4gIH1cblxuICBwcml2YXRlIGdldCBzcnYoKTogRGF0ZVBpY2tlclNlcnZpY2Uge1xuICAgIHJldHVybiB0aGlzLmRwLmRhdGVQaWNrZXJTZXJ2aWNlO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBkb206IERvbVNhbml0aXplcixcbiAgICBjb25maWdTcnY6IEFsYWluQ29uZmlnU2VydmljZSxcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIHByaXZhdGUgbmF0aXZlQ29tcDogTnpSYW5nZVBpY2tlckNvbXBvbmVudCxcbiAgICBwcml2YXRlIHZjcjogVmlld0NvbnRhaW5lclJlZlxuICApIHtcbiAgICBhc3NlcnQoXG4gICAgICAhIW5hdGl2ZUNvbXAsXG4gICAgICBgSXQgc2hvdWxkIGJlIGF0dGFjaGVkIHRvIG56LXJhbmdlLXBpY2tlciBjb21wb25lbnQsIGZvciBleGFtcGxlOiAnPG56LXJhbmdlLXBpY2tlciBbKG5nTW9kZWwpXT1cImkuc3RhcnRcIiBleHRlbmQgWyhuZ01vZGVsRW5kKV09XCJpLmVuZFwiIHNob3J0Y3V0PjwvbnotcmFuZ2UtcGlja2VyPidgXG4gICAgKTtcbiAgICBjb25zdCBjb2cgPSBjb25maWdTcnYubWVyZ2UoJ2RhdGFSYW5nZScsIHtcbiAgICAgIG56Rm9ybWF0OiAneXl5eS1NTS1kZCcsXG4gICAgICBuekFsbG93Q2xlYXI6IHRydWUsXG4gICAgICBuekF1dG9Gb2N1czogZmFsc2UsXG4gICAgICBuelBvcHVwU3R5bGU6IHsgcG9zaXRpb246ICdyZWxhdGl2ZScgfSxcbiAgICAgIG56U2hvd1RvZGF5OiB0cnVlLFxuICAgICAgc2hvcnRjdXRzOiB7XG4gICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICBjbG9zZWQ6IHRydWUsXG4gICAgICAgIGxpc3Q6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAn5LuK5aSpJyxcbiAgICAgICAgICAgIGZuOiAoKSA9PiBnZXRUaW1lRGlzdGFuY2UoJ3RvZGF5JylcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICfmmKjlpKknLFxuICAgICAgICAgICAgZm46ICgpID0+IGdldFRpbWVEaXN0YW5jZSgneWVzdGVyZGF5JylcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICfov5Ez5aSpJyxcbiAgICAgICAgICAgIGZuOiAoKSA9PiBnZXRUaW1lRGlzdGFuY2UoLTIpXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAn6L+RN+WkqScsXG4gICAgICAgICAgICBmbjogKCkgPT4gZ2V0VGltZURpc3RhbmNlKC02KVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ+acrOWRqCcsXG4gICAgICAgICAgICBmbjogKCkgPT4gZ2V0VGltZURpc3RhbmNlKCd3ZWVrJylcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICfmnKzmnIgnLFxuICAgICAgICAgICAgZm46ICgpID0+IGdldFRpbWVEaXN0YW5jZSgnbW9udGgnKVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ+WFqOW5tCcsXG4gICAgICAgICAgICBmbjogKCkgPT4gZ2V0VGltZURpc3RhbmNlKCd5ZWFyJylcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9KSE7XG4gICAgdGhpcy5kZWZhdWx0U2hvcnRjdXRzID0geyAuLi5jb2cuc2hvcnRjdXRzIH0gYXMgQWxhaW5EYXRlUmFuZ2VQaWNrZXJTaG9ydGN1dDtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvZyk7XG4gIH1cblxuICBwcml2YXRlIGNkKCk6IHZvaWQge1xuICAgICh0aGlzLmRwIGFzIE56U2FmZUFueSkuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcHJpdmF0ZSBvdmVycmlkZU5hdGl2ZSgpOiB2b2lkIHtcbiAgICBjb25zdCBkcCA9IHRoaXMuZHA7XG4gICAgZHAud3JpdGVWYWx1ZSA9ICh2YWx1ZTogRGF0ZSkgPT4ge1xuICAgICAgY29uc3QgZGF0ZXMgPSAodmFsdWUgJiYgdGhpcy5uZ01vZGVsRW5kID8gW3ZhbHVlLCB0aGlzLm5nTW9kZWxFbmRdIDogW10pLmZpbHRlcih3ID0+ICEhdyk7XG4gICAgICB0aGlzLnNydi5zZXRWYWx1ZSh0aGlzLnNydi5tYWtlVmFsdWUoZGF0ZXMpKTtcbiAgICAgIHRoaXMuc3RhcnQgPSBkYXRlcy5sZW5ndGggPiAwID8gZGF0ZXNbMF0gOiBudWxsO1xuICAgICAgdGhpcy5lbmQgPSBkYXRlcy5sZW5ndGggPiAwID8gZGF0ZXNbMV0gOiBudWxsO1xuICAgICAgdGhpcy5jZCgpO1xuICAgIH07XG5cbiAgICBjb25zdCBvbGRPbkNoYW5nZUZuID0gZHAub25DaGFuZ2VGbjtcbiAgICBkcC5vbkNoYW5nZUZuID0gKGxpc3Q6IEFycmF5PERhdGUgfCBudWxsPikgPT4ge1xuICAgICAgbGV0IHN0YXJ0OiBEYXRlIHwgbnVsbCA9IG51bGw7XG4gICAgICBsZXQgZW5kOiBEYXRlIHwgbnVsbCA9IG51bGw7XG4gICAgICBpZiAobGlzdC5sZW5ndGggPiAwICYmIGxpc3QuZmlsdGVyKHcgPT4gdyAhPSBudWxsKS5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgW3N0YXJ0LCBlbmRdID0gZml4RW5kVGltZU9mUmFuZ2UoW2xpc3RbMF0hLCBsaXN0WzFdIV0pO1xuICAgICAgfVxuICAgICAgdGhpcy5zdGFydCA9IHN0YXJ0O1xuICAgICAgdGhpcy5lbmQgPSBlbmQ7XG4gICAgICBvbGRPbkNoYW5nZUZuKHN0YXJ0KTtcbiAgICAgIHRoaXMubmdNb2RlbEVuZCA9IGVuZDtcbiAgICAgIHRoaXMubmdNb2RlbEVuZENoYW5nZS5lbWl0KGVuZCk7XG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgcmVmcmVzaFNob3J0Y3V0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5fc2hvcnRjdXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgeyBlbmFibGVkLCBsaXN0IH0gPSB0aGlzLl9zaG9ydGN1dDtcbiAgICBsZXQgZXh0cmFGb290ZXI6IFRlbXBsYXRlUmVmPE56U2FmZUFueT4gfCB1bmRlZmluZWQ7XG4gICAgaWYgKCF0aGlzLm5hdGl2ZUNvbXAgfHwgIWVuYWJsZWQpIHtcbiAgICAgIGV4dHJhRm9vdGVyID0gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIXRoaXMuc2hvcnRjdXRGYWN0b3J5KSB7XG4gICAgICAgIHRoaXMuc2hvcnRjdXRGYWN0b3J5ID0gdGhpcy52Y3IuY3JlYXRlQ29tcG9uZW50KFJhbmdlUGlja2VyU2hvcnRjdXRUcGxDb21wb25lbnQpO1xuICAgICAgfVxuICAgICAgY29uc3QgeyBpbnN0YW5jZSB9ID0gdGhpcy5zaG9ydGN1dEZhY3Rvcnk7XG4gICAgICBpbnN0YW5jZS5saXN0ID0gbGlzdCE7XG4gICAgICBpbnN0YW5jZS5jbGljayA9IChpdGVtOiBBbGFpbkRhdGVSYW5nZVBpY2tlclNob3J0Y3V0SXRlbSkgPT4ge1xuICAgICAgICBjb25zdCByZXMgPSBpdGVtLmZuKFt0aGlzLnN0YXJ0LCB0aGlzLmVuZF0pO1xuICAgICAgICB0aGlzLnNydi5zZXRWYWx1ZSh0aGlzLnNydi5tYWtlVmFsdWUocmVzIGFzIERhdGVbXSkpO1xuICAgICAgICB0aGlzLmRwLm9uQ2hhbmdlRm4ocmVzKTtcbiAgICAgICAgdGhpcy5kcC5jbG9zZSgpO1xuICAgICAgfTtcbiAgICAgIGV4dHJhRm9vdGVyID0gaW5zdGFuY2UudHBsO1xuICAgIH1cbiAgICB0aGlzLm5hdGl2ZUNvbXAuZGF0ZVBpY2tlci5leHRyYUZvb3RlciA9IGV4dHJhRm9vdGVyO1xuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gdGhpcy5jZCgpKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm92ZXJyaWRlTmF0aXZlKCk7XG4gICAgdGhpcy5yZWZyZXNoU2hvcnRjdXQoKTtcbiAgfVxuXG4gIHByaXZhdGUgZGVzdG9yeVNob3J0Y3V0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNob3J0Y3V0RmFjdG9yeSAhPSBudWxsKSB7XG4gICAgICB0aGlzLnNob3J0Y3V0RmFjdG9yeS5kZXN0cm95KCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0b3J5U2hvcnRjdXQoKTtcbiAgfVxufVxuIl19