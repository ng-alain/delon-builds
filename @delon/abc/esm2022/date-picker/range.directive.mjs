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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: RangePickerDirective, deps: [{ token: i1.DomSanitizer }, { token: i2.AlainConfigService }, { token: i3.NzRangePickerComponent, host: true, optional: true }, { token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.0.9", type: RangePickerDirective, isStandalone: true, selector: "nz-range-picker[extend]", inputs: { shortcut: "shortcut", ngModelEnd: "ngModelEnd" }, outputs: { ngModelEndChange: "ngModelEndChange" }, exportAs: ["extendRangePicker"], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: RangePickerDirective, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL2RhdGUtcGlja2VyL3JhbmdlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBR0wsU0FBUyxFQUNULFlBQVksRUFDWixJQUFJLEVBQ0osS0FBSyxFQUVMLFFBQVEsRUFDUixNQUFNLEVBR1AsTUFBTSxlQUFlLENBQUM7QUFJdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGVBQWUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzNFLE9BQU8sRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFLekQsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7O0FBTzdFLE1BQU0sT0FBTyxvQkFBb0I7SUFTL0IsSUFDSSxRQUFRLENBQUMsR0FBd0M7UUFDbkQsTUFBTSxJQUFJLEdBQUcsWUFBWSxDQUN2QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsRUFDWixJQUFJLEVBQ0osSUFBSSxDQUFDLGdCQUFnQixFQUNyQixHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FDUyxDQUFDO1FBQ2xDLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxFQUFFO1lBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxLQUFLLEtBQUssQ0FBQztTQUM5QjtRQUNELENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDNUIsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyRCxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxTQUFTLEdBQUcsSUFB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QUFDLENBQUMsQ0FBQztnQkFDckQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDbEIsQ0FBQyxDQUFDO1lBQ0YsV0FBVyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUM7U0FDNUI7UUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQ3JELE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFTyxlQUFlO1FBQ3JCLElBQUksSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLEVBQUU7WUFDaEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNoQztJQUNILENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3pCLENBQUM7OEdBcktVLG9CQUFvQjtrR0FBcEIsb0JBQW9COzsyRkFBcEIsb0JBQW9CO2tCQUxoQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLFVBQVUsRUFBRSxJQUFJO2lCQUNqQjs7MEJBNENJLElBQUk7OzBCQUFJLFFBQVE7d0VBakNmLFFBQVE7c0JBRFgsS0FBSztnQkFvQnFCLFVBQVU7c0JBQXBDLEtBQUs7dUJBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO2dCQUNOLGdCQUFnQjtzQkFBbEMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENvbXBvbmVudFJlZixcbiAgRGlyZWN0aXZlLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3QsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q29udGFpbmVyUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbmltcG9ydCB7IEFsYWluQ29uZmlnU2VydmljZSwgQWxhaW5EYXRlUmFuZ2VQaWNrZXJTaG9ydGN1dCwgQWxhaW5EYXRlUmFuZ2VQaWNrZXJTaG9ydGN1dEl0ZW0gfSBmcm9tICdAZGVsb24vdXRpbC9jb25maWcnO1xuaW1wb3J0IHsgZml4RW5kVGltZU9mUmFuZ2UsIGdldFRpbWVEaXN0YW5jZSB9IGZyb20gJ0BkZWxvbi91dGlsL2RhdGUtdGltZSc7XG5pbXBvcnQgeyBhc3NlcnQsIGRlZXBNZXJnZUtleSB9IGZyb20gJ0BkZWxvbi91dGlsL290aGVyJztcbmltcG9ydCB0eXBlIHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IE56RGF0ZVBpY2tlckNvbXBvbmVudCwgTnpSYW5nZVBpY2tlckNvbXBvbmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQvZGF0ZS1waWNrZXInO1xuaW1wb3J0IHsgRGF0ZVBpY2tlclNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2RhdGUtcGlja2VyL2RhdGUtcGlja2VyLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBSYW5nZVBpY2tlclNob3J0Y3V0VHBsQ29tcG9uZW50IH0gZnJvbSAnLi9yYW5nZS1zaG9ydGN1dC5jb21wb25lbnQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICduei1yYW5nZS1waWNrZXJbZXh0ZW5kXScsXG4gIGV4cG9ydEFzOiAnZXh0ZW5kUmFuZ2VQaWNrZXInLFxuICBzdGFuZGFsb25lOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIFJhbmdlUGlja2VyRGlyZWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3Nob3J0Y3V0OiBBbGFpbkRhdGVSYW5nZVBpY2tlclNob3J0Y3V0IHwgc3RyaW5nIHwgbnVsbDtcblxuICBwcml2YXRlIGRlZmF1bHRTaG9ydGN1dHM6IEFsYWluRGF0ZVJhbmdlUGlja2VyU2hvcnRjdXQ7XG4gIHByaXZhdGUgX3Nob3J0Y3V0OiBBbGFpbkRhdGVSYW5nZVBpY2tlclNob3J0Y3V0IHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgc2hvcnRjdXRGYWN0b3J5OiBDb21wb25lbnRSZWY8UmFuZ2VQaWNrZXJTaG9ydGN1dFRwbENvbXBvbmVudD4gfCBudWxsID0gbnVsbDtcbiAgc3RhcnQ6IERhdGUgfCBudWxsID0gbnVsbDtcbiAgZW5kOiBEYXRlIHwgbnVsbCA9IG51bGw7XG5cbiAgQElucHV0KClcbiAgc2V0IHNob3J0Y3V0KHZhbDogQWxhaW5EYXRlUmFuZ2VQaWNrZXJTaG9ydGN1dCB8IG51bGwpIHtcbiAgICBjb25zdCBpdGVtID0gZGVlcE1lcmdlS2V5KFxuICAgICAgeyBsaXN0OiBbXSB9LFxuICAgICAgdHJ1ZSxcbiAgICAgIHRoaXMuZGVmYXVsdFNob3J0Y3V0cyxcbiAgICAgIHZhbCA9PSBudWxsID8ge30gOiB2YWxcbiAgICApIGFzIEFsYWluRGF0ZVJhbmdlUGlja2VyU2hvcnRjdXQ7XG4gICAgaWYgKHR5cGVvZiB2YWwgIT09ICdvYmplY3QnKSB7XG4gICAgICBpdGVtLmVuYWJsZWQgPSB2YWwgIT09IGZhbHNlO1xuICAgIH1cbiAgICAoaXRlbS5saXN0IHx8IFtdKS5mb3JFYWNoKGkgPT4ge1xuICAgICAgaS5fdGV4dCA9IHRoaXMuZG9tLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKGkudGV4dCk7XG4gICAgfSk7XG4gICAgdGhpcy5fc2hvcnRjdXQgPSBpdGVtO1xuICAgIHRoaXMucmVmcmVzaFNob3J0Y3V0KCk7XG4gIH1cbiAgZ2V0IHNob3J0Y3V0KCk6IEFsYWluRGF0ZVJhbmdlUGlja2VyU2hvcnRjdXQgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvcnRjdXQ7XG4gIH1cbiAgQElucHV0KHsgcmVxdWlyZWQ6IHRydWUgfSkgbmdNb2RlbEVuZDogTnpTYWZlQW55O1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbmdNb2RlbEVuZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8TnpTYWZlQW55PigpO1xuXG4gIHByaXZhdGUgZ2V0IGRwKCk6IE56RGF0ZVBpY2tlckNvbXBvbmVudCB7XG4gICAgcmV0dXJuIHRoaXMubmF0aXZlQ29tcC5kYXRlUGlja2VyO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgc3J2KCk6IERhdGVQaWNrZXJTZXJ2aWNlIHtcbiAgICByZXR1cm4gdGhpcy5kcC5kYXRlUGlja2VyU2VydmljZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZG9tOiBEb21TYW5pdGl6ZXIsXG4gICAgY29uZmlnU3J2OiBBbGFpbkNvbmZpZ1NlcnZpY2UsXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBwcml2YXRlIG5hdGl2ZUNvbXA6IE56UmFuZ2VQaWNrZXJDb21wb25lbnQsXG4gICAgcHJpdmF0ZSB2Y3I6IFZpZXdDb250YWluZXJSZWZcbiAgKSB7XG4gICAgaWYgKHR5cGVvZiBuZ0Rldk1vZGUgPT09ICd1bmRlZmluZWQnIHx8IG5nRGV2TW9kZSkge1xuICAgICAgYXNzZXJ0KFxuICAgICAgICAhIW5hdGl2ZUNvbXAsXG4gICAgICAgIGBJdCBzaG91bGQgYmUgYXR0YWNoZWQgdG8gbnotcmFuZ2UtcGlja2VyIGNvbXBvbmVudCwgZm9yIGV4YW1wbGU6ICc8bnotcmFuZ2UtcGlja2VyIFsobmdNb2RlbCldPVwiaS5zdGFydFwiIGV4dGVuZCBbKG5nTW9kZWxFbmQpXT1cImkuZW5kXCIgc2hvcnRjdXQ+PC9uei1yYW5nZS1waWNrZXI+J2BcbiAgICAgICk7XG4gICAgfVxuICAgIGNvbnN0IGNvZyA9IGNvbmZpZ1Nydi5tZXJnZSgnZGF0YVJhbmdlJywge1xuICAgICAgbnpGb3JtYXQ6ICd5eXl5LU1NLWRkJyxcbiAgICAgIG56QWxsb3dDbGVhcjogdHJ1ZSxcbiAgICAgIG56QXV0b0ZvY3VzOiBmYWxzZSxcbiAgICAgIG56UG9wdXBTdHlsZTogeyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9LFxuICAgICAgbnpTaG93VG9kYXk6IHRydWUsXG4gICAgICBzaG9ydGN1dHM6IHtcbiAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAgIGNsb3NlZDogdHJ1ZSxcbiAgICAgICAgbGlzdDogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICfku4rlpKknLFxuICAgICAgICAgICAgZm46ICgpID0+IGdldFRpbWVEaXN0YW5jZSgndG9kYXknKVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ+aYqOWkqScsXG4gICAgICAgICAgICBmbjogKCkgPT4gZ2V0VGltZURpc3RhbmNlKCd5ZXN0ZXJkYXknKVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ+i/kTPlpKknLFxuICAgICAgICAgICAgZm46ICgpID0+IGdldFRpbWVEaXN0YW5jZSgtMilcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICfov5E35aSpJyxcbiAgICAgICAgICAgIGZuOiAoKSA9PiBnZXRUaW1lRGlzdGFuY2UoLTYpXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAn5pys5ZGoJyxcbiAgICAgICAgICAgIGZuOiAoKSA9PiBnZXRUaW1lRGlzdGFuY2UoJ3dlZWsnKVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ+acrOaciCcsXG4gICAgICAgICAgICBmbjogKCkgPT4gZ2V0VGltZURpc3RhbmNlKCdtb250aCcpXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAn5YWo5bm0JyxcbiAgICAgICAgICAgIGZuOiAoKSA9PiBnZXRUaW1lRGlzdGFuY2UoJ3llYXInKVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0pITtcbiAgICB0aGlzLmRlZmF1bHRTaG9ydGN1dHMgPSB7IC4uLmNvZy5zaG9ydGN1dHMgfSBhcyBBbGFpbkRhdGVSYW5nZVBpY2tlclNob3J0Y3V0O1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgY29nKTtcbiAgfVxuXG4gIHByaXZhdGUgY2QoKTogdm9pZCB7XG4gICAgKHRoaXMuZHAgYXMgTnpTYWZlQW55KS5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBwcml2YXRlIG92ZXJyaWRlTmF0aXZlKCk6IHZvaWQge1xuICAgIGNvbnN0IGRwID0gdGhpcy5kcDtcbiAgICBkcC53cml0ZVZhbHVlID0gKHZhbHVlOiBEYXRlKSA9PiB7XG4gICAgICBjb25zdCBkYXRlcyA9ICh2YWx1ZSAmJiB0aGlzLm5nTW9kZWxFbmQgPyBbdmFsdWUsIHRoaXMubmdNb2RlbEVuZF0gOiBbXSkuZmlsdGVyKHcgPT4gISF3KTtcbiAgICAgIHRoaXMuc3J2LnNldFZhbHVlKHRoaXMuc3J2Lm1ha2VWYWx1ZShkYXRlcykpO1xuICAgICAgdGhpcy5zdGFydCA9IGRhdGVzLmxlbmd0aCA+IDAgPyBkYXRlc1swXSA6IG51bGw7XG4gICAgICB0aGlzLmVuZCA9IGRhdGVzLmxlbmd0aCA+IDAgPyBkYXRlc1sxXSA6IG51bGw7XG4gICAgICB0aGlzLmNkKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IG9sZE9uQ2hhbmdlRm4gPSBkcC5vbkNoYW5nZUZuO1xuICAgIGRwLm9uQ2hhbmdlRm4gPSAobGlzdDogQXJyYXk8RGF0ZSB8IG51bGw+KSA9PiB7XG4gICAgICBsZXQgc3RhcnQ6IERhdGUgfCBudWxsID0gbnVsbDtcbiAgICAgIGxldCBlbmQ6IERhdGUgfCBudWxsID0gbnVsbDtcbiAgICAgIGlmIChsaXN0Lmxlbmd0aCA+IDAgJiYgbGlzdC5maWx0ZXIodyA9PiB3ICE9IG51bGwpLmxlbmd0aCA9PT0gMikge1xuICAgICAgICBbc3RhcnQsIGVuZF0gPSBmaXhFbmRUaW1lT2ZSYW5nZShbbGlzdFswXSEsIGxpc3RbMV0hXSk7XG4gICAgICB9XG4gICAgICB0aGlzLnN0YXJ0ID0gc3RhcnQ7XG4gICAgICB0aGlzLmVuZCA9IGVuZDtcbiAgICAgIG9sZE9uQ2hhbmdlRm4oc3RhcnQpO1xuICAgICAgdGhpcy5uZ01vZGVsRW5kID0gZW5kO1xuICAgICAgdGhpcy5uZ01vZGVsRW5kQ2hhbmdlLmVtaXQoZW5kKTtcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSByZWZyZXNoU2hvcnRjdXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9zaG9ydGN1dCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB7IGVuYWJsZWQsIGxpc3QgfSA9IHRoaXMuX3Nob3J0Y3V0O1xuICAgIGxldCBleHRyYUZvb3RlcjogVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IHVuZGVmaW5lZDtcbiAgICBpZiAoIXRoaXMubmF0aXZlQ29tcCB8fCAhZW5hYmxlZCkge1xuICAgICAgZXh0cmFGb290ZXIgPSB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghdGhpcy5zaG9ydGN1dEZhY3RvcnkpIHtcbiAgICAgICAgdGhpcy5zaG9ydGN1dEZhY3RvcnkgPSB0aGlzLnZjci5jcmVhdGVDb21wb25lbnQoUmFuZ2VQaWNrZXJTaG9ydGN1dFRwbENvbXBvbmVudCk7XG4gICAgICB9XG4gICAgICBjb25zdCB7IGluc3RhbmNlIH0gPSB0aGlzLnNob3J0Y3V0RmFjdG9yeTtcbiAgICAgIGluc3RhbmNlLmxpc3QgPSBsaXN0ITtcbiAgICAgIGluc3RhbmNlLmNsaWNrID0gKGl0ZW06IEFsYWluRGF0ZVJhbmdlUGlja2VyU2hvcnRjdXRJdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGl0ZW0uZm4oW3RoaXMuc3RhcnQsIHRoaXMuZW5kXSk7XG4gICAgICAgIHRoaXMuc3J2LnNldFZhbHVlKHRoaXMuc3J2Lm1ha2VWYWx1ZShyZXMgYXMgRGF0ZVtdKSk7XG4gICAgICAgIHRoaXMuZHAub25DaGFuZ2VGbihyZXMpO1xuICAgICAgICB0aGlzLmRwLmNsb3NlKCk7XG4gICAgICB9O1xuICAgICAgZXh0cmFGb290ZXIgPSBpbnN0YW5jZS50cGw7XG4gICAgfVxuICAgIHRoaXMubmF0aXZlQ29tcC5kYXRlUGlja2VyLmV4dHJhRm9vdGVyID0gZXh0cmFGb290ZXI7XG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB0aGlzLmNkKCkpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMub3ZlcnJpZGVOYXRpdmUoKTtcbiAgICB0aGlzLnJlZnJlc2hTaG9ydGN1dCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBkZXN0b3J5U2hvcnRjdXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2hvcnRjdXRGYWN0b3J5ICE9IG51bGwpIHtcbiAgICAgIHRoaXMuc2hvcnRjdXRGYWN0b3J5LmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3RvcnlTaG9ydGN1dCgpO1xuICB9XG59XG4iXX0=