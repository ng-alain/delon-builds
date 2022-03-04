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
    constructor(dom, configSrv, nativeComp, resolver, injector) {
        this.dom = dom;
        this.nativeComp = nativeComp;
        this.resolver = resolver;
        this.injector = injector;
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
                const factory = this.resolver.resolveComponentFactory(RangePickerShortcutTplComponent);
                this.shortcutFactory = factory.create(this.injector);
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
RangePickerDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: RangePickerDirective, deps: [{ token: i1.DomSanitizer }, { token: i2.AlainConfigService }, { token: i3.NzRangePickerComponent, host: true, optional: true }, { token: i0.ComponentFactoryResolver }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Directive });
RangePickerDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.2.5", type: RangePickerDirective, selector: "nz-range-picker[extend]", inputs: { shortcut: "shortcut", ngModelEnd: "ngModelEnd" }, outputs: { ngModelEndChange: "ngModelEndChange" }, exportAs: ["extendRangePicker"], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: RangePickerDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'nz-range-picker[extend]',
                    exportAs: 'extendRangePicker'
                }]
        }], ctorParameters: function () { return [{ type: i1.DomSanitizer }, { type: i2.AlainConfigService }, { type: i3.NzRangePickerComponent, decorators: [{
                    type: Host
                }, {
                    type: Optional
                }] }, { type: i0.ComponentFactoryResolver }, { type: i0.Injector }]; }, propDecorators: { shortcut: [{
                type: Input
            }], ngModelEnd: [{
                type: Input
            }], ngModelEndChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL2RhdGUtcGlja2VyL3JhbmdlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBSUwsU0FBUyxFQUNULFlBQVksRUFDWixJQUFJLEVBRUosS0FBSyxFQUVMLFFBQVEsRUFDUixNQUFNLEVBRVAsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUcvQixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDM0UsT0FBTyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUt6RCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7Ozs7QUFNN0UsTUFBTSxPQUFPLG9CQUFvQjtJQXlDL0IsWUFDVSxHQUFpQixFQUN6QixTQUE2QixFQUNELFVBQWtDLEVBQ3RELFFBQWtDLEVBQ2xDLFFBQWtCO1FBSmxCLFFBQUcsR0FBSCxHQUFHLENBQWM7UUFFRyxlQUFVLEdBQVYsVUFBVSxDQUF3QjtRQUN0RCxhQUFRLEdBQVIsUUFBUSxDQUEwQjtRQUNsQyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBMUNwQixjQUFTLEdBQXdDLElBQUksQ0FBQztRQUN0RCxhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUMvQixvQkFBZSxHQUF5RCxJQUFJLENBQUM7UUFDckYsVUFBSyxHQUFnQixJQUFJLENBQUM7UUFDMUIsUUFBRyxHQUFnQixJQUFJLENBQUM7UUF1QkwscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQWEsQ0FBQztRQWlCbEUsTUFBTSxDQUNKLENBQUMsQ0FBQyxVQUFVLEVBQ1oscUtBQXFLLENBQ3RLLENBQUM7UUFDRixNQUFNLEdBQUcsR0FBRyxTQUFTLENB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QUFJOzswQkFBSSxRQUFROzBHQWpDZixRQUFRO3NCQURYLEtBQUs7Z0JBb0JHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ2EsZ0JBQWdCO3NCQUFsQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBDb21wb25lbnRSZWYsXG4gIERpcmVjdGl2ZSxcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0LFxuICBJbmplY3RvcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgVGVtcGxhdGVSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlLCBBbGFpbkRhdGVSYW5nZVBpY2tlclNob3J0Y3V0LCBBbGFpbkRhdGVSYW5nZVBpY2tlclNob3J0Y3V0SXRlbSB9IGZyb20gJ0BkZWxvbi91dGlsL2NvbmZpZyc7XG5pbXBvcnQgeyBmaXhFbmRUaW1lT2ZSYW5nZSwgZ2V0VGltZURpc3RhbmNlIH0gZnJvbSAnQGRlbG9uL3V0aWwvZGF0ZS10aW1lJztcbmltcG9ydCB7IGFzc2VydCwgZGVlcE1lcmdlS2V5IH0gZnJvbSAnQGRlbG9uL3V0aWwvb3RoZXInO1xuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgTnpEYXRlUGlja2VyQ29tcG9uZW50LCBOelJhbmdlUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC9kYXRlLXBpY2tlcic7XG5pbXBvcnQgeyBEYXRlUGlja2VyU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvZGF0ZS1waWNrZXIvZGF0ZS1waWNrZXIuc2VydmljZSc7XG5cbmltcG9ydCB7IFJhbmdlUGlja2VyU2hvcnRjdXRUcGxDb21wb25lbnQgfSBmcm9tICcuL3JhbmdlLXNob3J0Y3V0LmNvbXBvbmVudCc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ256LXJhbmdlLXBpY2tlcltleHRlbmRdJyxcbiAgZXhwb3J0QXM6ICdleHRlbmRSYW5nZVBpY2tlcidcbn0pXG5leHBvcnQgY2xhc3MgUmFuZ2VQaWNrZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc2hvcnRjdXQ6IEFsYWluRGF0ZVJhbmdlUGlja2VyU2hvcnRjdXQgfCBzdHJpbmcgfCBudWxsO1xuXG4gIHByaXZhdGUgZGVmYXVsdFNob3J0Y3V0czogQWxhaW5EYXRlUmFuZ2VQaWNrZXJTaG9ydGN1dDtcbiAgcHJpdmF0ZSBfc2hvcnRjdXQ6IEFsYWluRGF0ZVJhbmdlUGlja2VyU2hvcnRjdXQgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHByaXZhdGUgc2hvcnRjdXRGYWN0b3J5OiBDb21wb25lbnRSZWY8UmFuZ2VQaWNrZXJTaG9ydGN1dFRwbENvbXBvbmVudD4gfCBudWxsID0gbnVsbDtcbiAgc3RhcnQ6IERhdGUgfCBudWxsID0gbnVsbDtcbiAgZW5kOiBEYXRlIHwgbnVsbCA9IG51bGw7XG5cbiAgQElucHV0KClcbiAgc2V0IHNob3J0Y3V0KHZhbDogQWxhaW5EYXRlUmFuZ2VQaWNrZXJTaG9ydGN1dCB8IG51bGwpIHtcbiAgICBjb25zdCBpdGVtID0gZGVlcE1lcmdlS2V5KFxuICAgICAgeyBsaXN0OiBbXSB9LFxuICAgICAgdHJ1ZSxcbiAgICAgIHRoaXMuZGVmYXVsdFNob3J0Y3V0cyxcbiAgICAgIHZhbCA9PSBudWxsID8ge30gOiB2YWxcbiAgICApIGFzIEFsYWluRGF0ZVJhbmdlUGlja2VyU2hvcnRjdXQ7XG4gICAgaWYgKHR5cGVvZiB2YWwgIT09ICdvYmplY3QnKSB7XG4gICAgICBpdGVtLmVuYWJsZWQgPSB2YWwgIT09IGZhbHNlO1xuICAgIH1cbiAgICAoaXRlbS5saXN0IHx8IFtdKS5mb3JFYWNoKGkgPT4ge1xuICAgICAgaS5fdGV4dCA9IHRoaXMuZG9tLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKGkudGV4dCk7XG4gICAgfSk7XG4gICAgdGhpcy5fc2hvcnRjdXQgPSBpdGVtO1xuICAgIHRoaXMucmVmcmVzaFNob3J0Y3V0KCk7XG4gIH1cbiAgZ2V0IHNob3J0Y3V0KCk6IEFsYWluRGF0ZVJhbmdlUGlja2VyU2hvcnRjdXQgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvcnRjdXQ7XG4gIH1cbiAgQElucHV0KCkgbmdNb2RlbEVuZDogTnpTYWZlQW55O1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbmdNb2RlbEVuZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8TnpTYWZlQW55PigpO1xuXG4gIHByaXZhdGUgZ2V0IGRwKCk6IE56RGF0ZVBpY2tlckNvbXBvbmVudCB7XG4gICAgcmV0dXJuIHRoaXMubmF0aXZlQ29tcC5kYXRlUGlja2VyO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgc3J2KCk6IERhdGVQaWNrZXJTZXJ2aWNlIHtcbiAgICByZXR1cm4gdGhpcy5kcC5kYXRlUGlja2VyU2VydmljZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZG9tOiBEb21TYW5pdGl6ZXIsXG4gICAgY29uZmlnU3J2OiBBbGFpbkNvbmZpZ1NlcnZpY2UsXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBwcml2YXRlIG5hdGl2ZUNvbXA6IE56UmFuZ2VQaWNrZXJDb21wb25lbnQsXG4gICAgcHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yXG4gICkge1xuICAgIGFzc2VydChcbiAgICAgICEhbmF0aXZlQ29tcCxcbiAgICAgIGBJdCBzaG91bGQgYmUgYXR0YWNoZWQgdG8gbnotcmFuZ2UtcGlja2VyIGNvbXBvbmVudCwgZm9yIGV4YW1wbGU6ICc8bnotcmFuZ2UtcGlja2VyIFsobmdNb2RlbCldPVwiaS5zdGFydFwiIGV4dGVuZCBbKG5nTW9kZWxFbmQpXT1cImkuZW5kXCIgc2hvcnRjdXQ+PC9uei1yYW5nZS1waWNrZXI+J2BcbiAgICApO1xuICAgIGNvbnN0IGNvZyA9IGNvbmZpZ1Nydi5tZXJnZSgnZGF0YVJhbmdlJywge1xuICAgICAgbnpGb3JtYXQ6ICd5eXl5LU1NLWRkJyxcbiAgICAgIG56QWxsb3dDbGVhcjogdHJ1ZSxcbiAgICAgIG56QXV0b0ZvY3VzOiBmYWxzZSxcbiAgICAgIG56UG9wdXBTdHlsZTogeyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9LFxuICAgICAgbnpTaG93VG9kYXk6IHRydWUsXG4gICAgICBzaG9ydGN1dHM6IHtcbiAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAgIGNsb3NlZDogdHJ1ZSxcbiAgICAgICAgbGlzdDogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICfku4rlpKknLFxuICAgICAgICAgICAgZm46ICgpID0+IGdldFRpbWVEaXN0YW5jZSgndG9kYXknKVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ+aYqOWkqScsXG4gICAgICAgICAgICBmbjogKCkgPT4gZ2V0VGltZURpc3RhbmNlKCd5ZXN0ZXJkYXknKVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ+i/kTPlpKknLFxuICAgICAgICAgICAgZm46ICgpID0+IGdldFRpbWVEaXN0YW5jZSgtMilcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICfov5E35aSpJyxcbiAgICAgICAgICAgIGZuOiAoKSA9PiBnZXRUaW1lRGlzdGFuY2UoLTYpXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAn5pys5ZGoJyxcbiAgICAgICAgICAgIGZuOiAoKSA9PiBnZXRUaW1lRGlzdGFuY2UoJ3dlZWsnKVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ+acrOaciCcsXG4gICAgICAgICAgICBmbjogKCkgPT4gZ2V0VGltZURpc3RhbmNlKCdtb250aCcpXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAn5YWo5bm0JyxcbiAgICAgICAgICAgIGZuOiAoKSA9PiBnZXRUaW1lRGlzdGFuY2UoJ3llYXInKVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0pITtcbiAgICB0aGlzLmRlZmF1bHRTaG9ydGN1dHMgPSB7IC4uLmNvZy5zaG9ydGN1dHMgfSBhcyBBbGFpbkRhdGVSYW5nZVBpY2tlclNob3J0Y3V0O1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgY29nKTtcbiAgfVxuXG4gIHByaXZhdGUgY2QoKTogdm9pZCB7XG4gICAgKHRoaXMuZHAgYXMgTnpTYWZlQW55KS5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBwcml2YXRlIG92ZXJyaWRlTmF0aXZlKCk6IHZvaWQge1xuICAgIGNvbnN0IGRwID0gdGhpcy5kcDtcbiAgICBkcC53cml0ZVZhbHVlID0gKHZhbHVlOiBEYXRlKSA9PiB7XG4gICAgICBjb25zdCBkYXRlcyA9ICh2YWx1ZSAmJiB0aGlzLm5nTW9kZWxFbmQgPyBbdmFsdWUsIHRoaXMubmdNb2RlbEVuZF0gOiBbXSkuZmlsdGVyKHcgPT4gISF3KTtcbiAgICAgIHRoaXMuc3J2LnNldFZhbHVlKHRoaXMuc3J2Lm1ha2VWYWx1ZShkYXRlcykpO1xuICAgICAgdGhpcy5zdGFydCA9IGRhdGVzLmxlbmd0aCA+IDAgPyBkYXRlc1swXSA6IG51bGw7XG4gICAgICB0aGlzLmVuZCA9IGRhdGVzLmxlbmd0aCA+IDAgPyBkYXRlc1sxXSA6IG51bGw7XG4gICAgICB0aGlzLmNkKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IG9sZE9uQ2hhbmdlRm4gPSBkcC5vbkNoYW5nZUZuO1xuICAgIGRwLm9uQ2hhbmdlRm4gPSAobGlzdDogQXJyYXk8RGF0ZSB8IG51bGw+KSA9PiB7XG4gICAgICBsZXQgc3RhcnQ6IERhdGUgfCBudWxsID0gbnVsbDtcbiAgICAgIGxldCBlbmQ6IERhdGUgfCBudWxsID0gbnVsbDtcbiAgICAgIGlmIChsaXN0Lmxlbmd0aCA+IDAgJiYgbGlzdC5maWx0ZXIodyA9PiB3ICE9IG51bGwpLmxlbmd0aCA9PT0gMikge1xuICAgICAgICBbc3RhcnQsIGVuZF0gPSBmaXhFbmRUaW1lT2ZSYW5nZShbbGlzdFswXSEsIGxpc3RbMV0hXSk7XG4gICAgICB9XG4gICAgICB0aGlzLnN0YXJ0ID0gc3RhcnQ7XG4gICAgICB0aGlzLmVuZCA9IGVuZDtcbiAgICAgIG9sZE9uQ2hhbmdlRm4oc3RhcnQpO1xuICAgICAgdGhpcy5uZ01vZGVsRW5kID0gZW5kO1xuICAgICAgdGhpcy5uZ01vZGVsRW5kQ2hhbmdlLmVtaXQoZW5kKTtcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSByZWZyZXNoU2hvcnRjdXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9zaG9ydGN1dCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB7IGVuYWJsZWQsIGxpc3QgfSA9IHRoaXMuX3Nob3J0Y3V0O1xuICAgIGxldCBleHRyYUZvb3RlcjogVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IHVuZGVmaW5lZDtcbiAgICBpZiAoIXRoaXMubmF0aXZlQ29tcCB8fCAhZW5hYmxlZCkge1xuICAgICAgZXh0cmFGb290ZXIgPSB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghdGhpcy5zaG9ydGN1dEZhY3RvcnkpIHtcbiAgICAgICAgY29uc3QgZmFjdG9yeSA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoUmFuZ2VQaWNrZXJTaG9ydGN1dFRwbENvbXBvbmVudCk7XG4gICAgICAgIHRoaXMuc2hvcnRjdXRGYWN0b3J5ID0gZmFjdG9yeS5jcmVhdGUodGhpcy5pbmplY3Rvcik7XG4gICAgICB9XG4gICAgICBjb25zdCB7IGluc3RhbmNlIH0gPSB0aGlzLnNob3J0Y3V0RmFjdG9yeTtcbiAgICAgIGluc3RhbmNlLmxpc3QgPSBsaXN0ITtcbiAgICAgIGluc3RhbmNlLmNsaWNrID0gKGl0ZW06IEFsYWluRGF0ZVJhbmdlUGlja2VyU2hvcnRjdXRJdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGl0ZW0uZm4oW3RoaXMuc3RhcnQsIHRoaXMuZW5kXSk7XG4gICAgICAgIHRoaXMuc3J2LnNldFZhbHVlKHRoaXMuc3J2Lm1ha2VWYWx1ZShyZXMgYXMgRGF0ZVtdKSk7XG4gICAgICAgIHRoaXMuZHAub25DaGFuZ2VGbihyZXMpO1xuICAgICAgICB0aGlzLmRwLmNsb3NlKCk7XG4gICAgICB9O1xuICAgICAgZXh0cmFGb290ZXIgPSBpbnN0YW5jZS50cGw7XG4gICAgfVxuICAgIHRoaXMubmF0aXZlQ29tcC5kYXRlUGlja2VyLmV4dHJhRm9vdGVyID0gZXh0cmFGb290ZXI7XG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB0aGlzLmNkKCkpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMub3ZlcnJpZGVOYXRpdmUoKTtcbiAgICB0aGlzLnJlZnJlc2hTaG9ydGN1dCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBkZXN0b3J5U2hvcnRjdXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2hvcnRjdXRGYWN0b3J5ICE9IG51bGwpIHtcbiAgICAgIHRoaXMuc2hvcnRjdXRGYWN0b3J5LmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3RvcnlTaG9ydGN1dCgpO1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19