import { Directive, EventEmitter, Host, Input, Optional, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { fixEndTimeOfRange, getTimeDistance } from '@delon/util/date-time';
import { assert, deepMergeKey } from '@delon/util/other';
import { RangePickerShortcutTplComponent } from './range-shortcut.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "@delon/util/config";
import * as i3 from "ng-zorro-antd/date-picker";
export class RangePickerDirective {
    constructor(dom, configSrv, nativeComp, vcr) {
        this.dom = dom;
        this.nativeComp = nativeComp;
        this.vcr = vcr;
        this._shortcut = null;
        this.destroy$ = new Subject();
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
        this.destroy$.next();
        this.destroy$.complete();
    }
}
RangePickerDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.5", ngImport: i0, type: RangePickerDirective, deps: [{ token: i1.DomSanitizer }, { token: i2.AlainConfigService }, { token: i3.NzRangePickerComponent, host: true, optional: true }, { token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
RangePickerDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.5", type: RangePickerDirective, selector: "nz-range-picker[extend]", inputs: { shortcut: "shortcut", ngModelEnd: "ngModelEnd" }, outputs: { ngModelEndChange: "ngModelEndChange" }, exportAs: ["extendRangePicker"], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.5", ngImport: i0, type: RangePickerDirective, decorators: [{
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
                type: Input
            }], ngModelEndChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL2RhdGUtcGlja2VyL3JhbmdlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBR0wsU0FBUyxFQUNULFlBQVksRUFDWixJQUFJLEVBQ0osS0FBSyxFQUVMLFFBQVEsRUFDUixNQUFNLEVBR1AsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUcvQixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDM0UsT0FBTyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUt6RCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7Ozs7QUFNN0UsTUFBTSxPQUFPLG9CQUFvQjtJQXlDL0IsWUFDVSxHQUFpQixFQUN6QixTQUE2QixFQUNELFVBQWtDLEVBQ3RELEdBQXFCO1FBSHJCLFFBQUcsR0FBSCxHQUFHLENBQWM7UUFFRyxlQUFVLEdBQVYsVUFBVSxDQUF3QjtRQUN0RCxRQUFHLEdBQUgsR0FBRyxDQUFrQjtRQXpDdkIsY0FBUyxHQUF3QyxJQUFJLENBQUM7UUFDdEQsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFDL0Isb0JBQWUsR0FBeUQsSUFBSSxDQUFDO1FBQ3JGLFVBQUssR0FBZ0IsSUFBSSxDQUFDO1FBQzFCLFFBQUcsR0FBZ0IsSUFBSSxDQUFDO1FBdUJMLHFCQUFnQixHQUFHLElBQUksWUFBWSxFQUFhLENBQUM7UUFnQmxFLE1BQU0sQ0FDSixDQUFDLENBQUMsVUFBVSxFQUNaLHFLQUFxSyxDQUN0SyxDQUFDO1FBQ0YsTUFBTSxHQUFHLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUU7WUFDdkMsUUFBUSxFQUFF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ImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENvbXBvbmVudFJlZixcbiAgRGlyZWN0aXZlLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3QsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q29udGFpbmVyUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEFsYWluQ29uZmlnU2VydmljZSwgQWxhaW5EYXRlUmFuZ2VQaWNrZXJTaG9ydGN1dCwgQWxhaW5EYXRlUmFuZ2VQaWNrZXJTaG9ydGN1dEl0ZW0gfSBmcm9tICdAZGVsb24vdXRpbC9jb25maWcnO1xuaW1wb3J0IHsgZml4RW5kVGltZU9mUmFuZ2UsIGdldFRpbWVEaXN0YW5jZSB9IGZyb20gJ0BkZWxvbi91dGlsL2RhdGUtdGltZSc7XG5pbXBvcnQgeyBhc3NlcnQsIGRlZXBNZXJnZUtleSB9IGZyb20gJ0BkZWxvbi91dGlsL290aGVyJztcbmltcG9ydCB0eXBlIHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IE56RGF0ZVBpY2tlckNvbXBvbmVudCwgTnpSYW5nZVBpY2tlckNvbXBvbmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQvZGF0ZS1waWNrZXInO1xuaW1wb3J0IHsgRGF0ZVBpY2tlclNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2RhdGUtcGlja2VyL2RhdGUtcGlja2VyLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBSYW5nZVBpY2tlclNob3J0Y3V0VHBsQ29tcG9uZW50IH0gZnJvbSAnLi9yYW5nZS1zaG9ydGN1dC5jb21wb25lbnQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICduei1yYW5nZS1waWNrZXJbZXh0ZW5kXScsXG4gIGV4cG9ydEFzOiAnZXh0ZW5kUmFuZ2VQaWNrZXInXG59KVxuZXhwb3J0IGNsYXNzIFJhbmdlUGlja2VyRGlyZWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3Nob3J0Y3V0OiBBbGFpbkRhdGVSYW5nZVBpY2tlclNob3J0Y3V0IHwgc3RyaW5nIHwgbnVsbDtcblxuICBwcml2YXRlIGRlZmF1bHRTaG9ydGN1dHM6IEFsYWluRGF0ZVJhbmdlUGlja2VyU2hvcnRjdXQ7XG4gIHByaXZhdGUgX3Nob3J0Y3V0OiBBbGFpbkRhdGVSYW5nZVBpY2tlclNob3J0Y3V0IHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIHNob3J0Y3V0RmFjdG9yeTogQ29tcG9uZW50UmVmPFJhbmdlUGlja2VyU2hvcnRjdXRUcGxDb21wb25lbnQ+IHwgbnVsbCA9IG51bGw7XG4gIHN0YXJ0OiBEYXRlIHwgbnVsbCA9IG51bGw7XG4gIGVuZDogRGF0ZSB8IG51bGwgPSBudWxsO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBzaG9ydGN1dCh2YWw6IEFsYWluRGF0ZVJhbmdlUGlja2VyU2hvcnRjdXQgfCBudWxsKSB7XG4gICAgY29uc3QgaXRlbSA9IGRlZXBNZXJnZUtleShcbiAgICAgIHsgbGlzdDogW10gfSxcbiAgICAgIHRydWUsXG4gICAgICB0aGlzLmRlZmF1bHRTaG9ydGN1dHMsXG4gICAgICB2YWwgPT0gbnVsbCA/IHt9IDogdmFsXG4gICAgKSBhcyBBbGFpbkRhdGVSYW5nZVBpY2tlclNob3J0Y3V0O1xuICAgIGlmICh0eXBlb2YgdmFsICE9PSAnb2JqZWN0Jykge1xuICAgICAgaXRlbS5lbmFibGVkID0gdmFsICE9PSBmYWxzZTtcbiAgICB9XG4gICAgKGl0ZW0ubGlzdCB8fCBbXSkuZm9yRWFjaChpID0+IHtcbiAgICAgIGkuX3RleHQgPSB0aGlzLmRvbS5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChpLnRleHQpO1xuICAgIH0pO1xuICAgIHRoaXMuX3Nob3J0Y3V0ID0gaXRlbTtcbiAgICB0aGlzLnJlZnJlc2hTaG9ydGN1dCgpO1xuICB9XG4gIGdldCBzaG9ydGN1dCgpOiBBbGFpbkRhdGVSYW5nZVBpY2tlclNob3J0Y3V0IHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3J0Y3V0O1xuICB9XG4gIEBJbnB1dCgpIG5nTW9kZWxFbmQ6IE56U2FmZUFueTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG5nTW9kZWxFbmRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE56U2FmZUFueT4oKTtcblxuICBwcml2YXRlIGdldCBkcCgpOiBOekRhdGVQaWNrZXJDb21wb25lbnQge1xuICAgIHJldHVybiB0aGlzLm5hdGl2ZUNvbXAuZGF0ZVBpY2tlcjtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IHNydigpOiBEYXRlUGlja2VyU2VydmljZSB7XG4gICAgcmV0dXJuIHRoaXMuZHAuZGF0ZVBpY2tlclNlcnZpY2U7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGRvbTogRG9tU2FuaXRpemVyLFxuICAgIGNvbmZpZ1NydjogQWxhaW5Db25maWdTZXJ2aWNlLFxuICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHJpdmF0ZSBuYXRpdmVDb21wOiBOelJhbmdlUGlja2VyQ29tcG9uZW50LFxuICAgIHByaXZhdGUgdmNyOiBWaWV3Q29udGFpbmVyUmVmXG4gICkge1xuICAgIGFzc2VydChcbiAgICAgICEhbmF0aXZlQ29tcCxcbiAgICAgIGBJdCBzaG91bGQgYmUgYXR0YWNoZWQgdG8gbnotcmFuZ2UtcGlja2VyIGNvbXBvbmVudCwgZm9yIGV4YW1wbGU6ICc8bnotcmFuZ2UtcGlja2VyIFsobmdNb2RlbCldPVwiaS5zdGFydFwiIGV4dGVuZCBbKG5nTW9kZWxFbmQpXT1cImkuZW5kXCIgc2hvcnRjdXQ+PC9uei1yYW5nZS1waWNrZXI+J2BcbiAgICApO1xuICAgIGNvbnN0IGNvZyA9IGNvbmZpZ1Nydi5tZXJnZSgnZGF0YVJhbmdlJywge1xuICAgICAgbnpGb3JtYXQ6ICd5eXl5LU1NLWRkJyxcbiAgICAgIG56QWxsb3dDbGVhcjogdHJ1ZSxcbiAgICAgIG56QXV0b0ZvY3VzOiBmYWxzZSxcbiAgICAgIG56UG9wdXBTdHlsZTogeyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9LFxuICAgICAgbnpTaG93VG9kYXk6IHRydWUsXG4gICAgICBzaG9ydGN1dHM6IHtcbiAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAgIGNsb3NlZDogdHJ1ZSxcbiAgICAgICAgbGlzdDogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICfku4rlpKknLFxuICAgICAgICAgICAgZm46ICgpID0+IGdldFRpbWVEaXN0YW5jZSgndG9kYXknKVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ+aYqOWkqScsXG4gICAgICAgICAgICBmbjogKCkgPT4gZ2V0VGltZURpc3RhbmNlKCd5ZXN0ZXJkYXknKVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ+i/kTPlpKknLFxuICAgICAgICAgICAgZm46ICgpID0+IGdldFRpbWVEaXN0YW5jZSgtMilcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICfov5E35aSpJyxcbiAgICAgICAgICAgIGZuOiAoKSA9PiBnZXRUaW1lRGlzdGFuY2UoLTYpXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAn5pys5ZGoJyxcbiAgICAgICAgICAgIGZuOiAoKSA9PiBnZXRUaW1lRGlzdGFuY2UoJ3dlZWsnKVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ+acrOaciCcsXG4gICAgICAgICAgICBmbjogKCkgPT4gZ2V0VGltZURpc3RhbmNlKCdtb250aCcpXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAn5YWo5bm0JyxcbiAgICAgICAgICAgIGZuOiAoKSA9PiBnZXRUaW1lRGlzdGFuY2UoJ3llYXInKVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0pITtcbiAgICB0aGlzLmRlZmF1bHRTaG9ydGN1dHMgPSB7IC4uLmNvZy5zaG9ydGN1dHMgfSBhcyBBbGFpbkRhdGVSYW5nZVBpY2tlclNob3J0Y3V0O1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgY29nKTtcbiAgfVxuXG4gIHByaXZhdGUgY2QoKTogdm9pZCB7XG4gICAgKHRoaXMuZHAgYXMgTnpTYWZlQW55KS5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBwcml2YXRlIG92ZXJyaWRlTmF0aXZlKCk6IHZvaWQge1xuICAgIGNvbnN0IGRwID0gdGhpcy5kcDtcbiAgICBkcC53cml0ZVZhbHVlID0gKHZhbHVlOiBEYXRlKSA9PiB7XG4gICAgICBjb25zdCBkYXRlcyA9ICh2YWx1ZSAmJiB0aGlzLm5nTW9kZWxFbmQgPyBbdmFsdWUsIHRoaXMubmdNb2RlbEVuZF0gOiBbXSkuZmlsdGVyKHcgPT4gISF3KTtcbiAgICAgIHRoaXMuc3J2LnNldFZhbHVlKHRoaXMuc3J2Lm1ha2VWYWx1ZShkYXRlcykpO1xuICAgICAgdGhpcy5zdGFydCA9IGRhdGVzLmxlbmd0aCA+IDAgPyBkYXRlc1swXSA6IG51bGw7XG4gICAgICB0aGlzLmVuZCA9IGRhdGVzLmxlbmd0aCA+IDAgPyBkYXRlc1sxXSA6IG51bGw7XG4gICAgICB0aGlzLmNkKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IG9sZE9uQ2hhbmdlRm4gPSBkcC5vbkNoYW5nZUZuO1xuICAgIGRwLm9uQ2hhbmdlRm4gPSAobGlzdDogQXJyYXk8RGF0ZSB8IG51bGw+KSA9PiB7XG4gICAgICBsZXQgc3RhcnQ6IERhdGUgfCBudWxsID0gbnVsbDtcbiAgICAgIGxldCBlbmQ6IERhdGUgfCBudWxsID0gbnVsbDtcbiAgICAgIGlmIChsaXN0Lmxlbmd0aCA+IDAgJiYgbGlzdC5maWx0ZXIodyA9PiB3ICE9IG51bGwpLmxlbmd0aCA9PT0gMikge1xuICAgICAgICBbc3RhcnQsIGVuZF0gPSBmaXhFbmRUaW1lT2ZSYW5nZShbbGlzdFswXSEsIGxpc3RbMV0hXSk7XG4gICAgICB9XG4gICAgICB0aGlzLnN0YXJ0ID0gc3RhcnQ7XG4gICAgICB0aGlzLmVuZCA9IGVuZDtcbiAgICAgIG9sZE9uQ2hhbmdlRm4oc3RhcnQpO1xuICAgICAgdGhpcy5uZ01vZGVsRW5kID0gZW5kO1xuICAgICAgdGhpcy5uZ01vZGVsRW5kQ2hhbmdlLmVtaXQoZW5kKTtcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSByZWZyZXNoU2hvcnRjdXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9zaG9ydGN1dCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB7IGVuYWJsZWQsIGxpc3QgfSA9IHRoaXMuX3Nob3J0Y3V0O1xuICAgIGxldCBleHRyYUZvb3RlcjogVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IHVuZGVmaW5lZDtcbiAgICBpZiAoIXRoaXMubmF0aXZlQ29tcCB8fCAhZW5hYmxlZCkge1xuICAgICAgZXh0cmFGb290ZXIgPSB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghdGhpcy5zaG9ydGN1dEZhY3RvcnkpIHtcbiAgICAgICAgdGhpcy5zaG9ydGN1dEZhY3RvcnkgPSB0aGlzLnZjci5jcmVhdGVDb21wb25lbnQoUmFuZ2VQaWNrZXJTaG9ydGN1dFRwbENvbXBvbmVudCk7XG4gICAgICB9XG4gICAgICBjb25zdCB7IGluc3RhbmNlIH0gPSB0aGlzLnNob3J0Y3V0RmFjdG9yeTtcbiAgICAgIGluc3RhbmNlLmxpc3QgPSBsaXN0ITtcbiAgICAgIGluc3RhbmNlLmNsaWNrID0gKGl0ZW06IEFsYWluRGF0ZVJhbmdlUGlja2VyU2hvcnRjdXRJdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGl0ZW0uZm4oW3RoaXMuc3RhcnQsIHRoaXMuZW5kXSk7XG4gICAgICAgIHRoaXMuc3J2LnNldFZhbHVlKHRoaXMuc3J2Lm1ha2VWYWx1ZShyZXMgYXMgRGF0ZVtdKSk7XG4gICAgICAgIHRoaXMuZHAub25DaGFuZ2VGbihyZXMpO1xuICAgICAgICB0aGlzLmRwLmNsb3NlKCk7XG4gICAgICB9O1xuICAgICAgZXh0cmFGb290ZXIgPSBpbnN0YW5jZS50cGw7XG4gICAgfVxuICAgIHRoaXMubmF0aXZlQ29tcC5kYXRlUGlja2VyLmV4dHJhRm9vdGVyID0gZXh0cmFGb290ZXI7XG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB0aGlzLmNkKCkpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMub3ZlcnJpZGVOYXRpdmUoKTtcbiAgICB0aGlzLnJlZnJlc2hTaG9ydGN1dCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBkZXN0b3J5U2hvcnRjdXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2hvcnRjdXRGYWN0b3J5ICE9IG51bGwpIHtcbiAgICAgIHRoaXMuc2hvcnRjdXRGYWN0b3J5LmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3RvcnlTaG9ydGN1dCgpO1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19