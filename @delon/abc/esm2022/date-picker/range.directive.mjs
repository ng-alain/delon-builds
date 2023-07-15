import { Directive, EventEmitter, Host, Input, Optional, Output } from '@angular/core';
import { fixEndTimeOfRange, getTimeDistance } from '@delon/util/date-time';
import { assert, deepMergeKey } from '@delon/util/other';
import { RangePickerShortcutTplComponent } from './range-shortcut.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "@delon/util/config";
import * as i3 from "ng-zorro-antd/date-picker";
class RangePickerDirective {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: RangePickerDirective, deps: [{ token: i1.DomSanitizer }, { token: i2.AlainConfigService }, { token: i3.NzRangePickerComponent, host: true, optional: true }, { token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.5", type: RangePickerDirective, selector: "nz-range-picker[extend]", inputs: { shortcut: "shortcut", ngModelEnd: "ngModelEnd" }, outputs: { ngModelEndChange: "ngModelEndChange" }, exportAs: ["extendRangePicker"], ngImport: i0 }); }
}
export { RangePickerDirective };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: RangePickerDirective, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL2RhdGUtcGlja2VyL3JhbmdlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBR0wsU0FBUyxFQUNULFlBQVksRUFDWixJQUFJLEVBQ0osS0FBSyxFQUVMLFFBQVEsRUFDUixNQUFNLEVBR1AsTUFBTSxlQUFlLENBQUM7QUFJdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGVBQWUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzNFLE9BQU8sRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFLekQsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7O0FBRTdFLE1BSWEsb0JBQW9CO0lBUy9CLElBQ0ksUUFBUSxDQUFDLEdBQXdDO1FBQ25ELE1BQU0sSUFBSSxHQUFHLFlBQVksQ0FDdkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQ1osSUFBSSxFQUNKLElBQUksQ0FBQyxnQkFBZ0IsRUFDckIsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQ1MsQ0FBQztRQUNsQyxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFBRTtZQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsS0FBSyxLQUFLLENBQUM7U0FDOUI7UUFDRCxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQzVCLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckQsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FB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Q0FBQyxDQUFDO2dCQUN4QixJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2xCLENBQUMsQ0FBQztZQUNGLFdBQVcsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDO1NBQzVCO1FBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUNyRCxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRU8sZUFBZTtRQUNyQixJQUFJLElBQUksQ0FBQyxlQUFlLElBQUksSUFBSSxFQUFFO1lBQ2hDLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDaEM7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN6QixDQUFDOzhHQW5LVSxvQkFBb0I7a0dBQXBCLG9CQUFvQjs7U0FBcEIsb0JBQW9COzJGQUFwQixvQkFBb0I7a0JBSmhDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsUUFBUSxFQUFFLG1CQUFtQjtpQkFDOUI7OzBCQTRDSSxJQUFJOzswQkFBSSxRQUFROzJFQWpDZixRQUFRO3NCQURYLEtBQUs7Z0JBb0JxQixVQUFVO3NCQUFwQyxLQUFLO3VCQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtnQkFDTixnQkFBZ0I7c0JBQWxDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDb21wb25lbnRSZWYsXG4gIERpcmVjdGl2ZSxcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0LFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NvbnRhaW5lclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UsIEFsYWluRGF0ZVJhbmdlUGlja2VyU2hvcnRjdXQsIEFsYWluRGF0ZVJhbmdlUGlja2VyU2hvcnRjdXRJdGVtIH0gZnJvbSAnQGRlbG9uL3V0aWwvY29uZmlnJztcbmltcG9ydCB7IGZpeEVuZFRpbWVPZlJhbmdlLCBnZXRUaW1lRGlzdGFuY2UgfSBmcm9tICdAZGVsb24vdXRpbC9kYXRlLXRpbWUnO1xuaW1wb3J0IHsgYXNzZXJ0LCBkZWVwTWVyZ2VLZXkgfSBmcm9tICdAZGVsb24vdXRpbC9vdGhlcic7XG5pbXBvcnQgdHlwZSB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBOekRhdGVQaWNrZXJDb21wb25lbnQsIE56UmFuZ2VQaWNrZXJDb21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL2RhdGUtcGlja2VyJztcbmltcG9ydCB7IERhdGVQaWNrZXJTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9kYXRlLXBpY2tlci9kYXRlLXBpY2tlci5zZXJ2aWNlJztcblxuaW1wb3J0IHsgUmFuZ2VQaWNrZXJTaG9ydGN1dFRwbENvbXBvbmVudCB9IGZyb20gJy4vcmFuZ2Utc2hvcnRjdXQuY29tcG9uZW50JztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbnotcmFuZ2UtcGlja2VyW2V4dGVuZF0nLFxuICBleHBvcnRBczogJ2V4dGVuZFJhbmdlUGlja2VyJ1xufSlcbmV4cG9ydCBjbGFzcyBSYW5nZVBpY2tlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9zaG9ydGN1dDogQWxhaW5EYXRlUmFuZ2VQaWNrZXJTaG9ydGN1dCB8IHN0cmluZyB8IG51bGw7XG5cbiAgcHJpdmF0ZSBkZWZhdWx0U2hvcnRjdXRzOiBBbGFpbkRhdGVSYW5nZVBpY2tlclNob3J0Y3V0O1xuICBwcml2YXRlIF9zaG9ydGN1dDogQWxhaW5EYXRlUmFuZ2VQaWNrZXJTaG9ydGN1dCB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIHNob3J0Y3V0RmFjdG9yeTogQ29tcG9uZW50UmVmPFJhbmdlUGlja2VyU2hvcnRjdXRUcGxDb21wb25lbnQ+IHwgbnVsbCA9IG51bGw7XG4gIHN0YXJ0OiBEYXRlIHwgbnVsbCA9IG51bGw7XG4gIGVuZDogRGF0ZSB8IG51bGwgPSBudWxsO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBzaG9ydGN1dCh2YWw6IEFsYWluRGF0ZVJhbmdlUGlja2VyU2hvcnRjdXQgfCBudWxsKSB7XG4gICAgY29uc3QgaXRlbSA9IGRlZXBNZXJnZUtleShcbiAgICAgIHsgbGlzdDogW10gfSxcbiAgICAgIHRydWUsXG4gICAgICB0aGlzLmRlZmF1bHRTaG9ydGN1dHMsXG4gICAgICB2YWwgPT0gbnVsbCA/IHt9IDogdmFsXG4gICAgKSBhcyBBbGFpbkRhdGVSYW5nZVBpY2tlclNob3J0Y3V0O1xuICAgIGlmICh0eXBlb2YgdmFsICE9PSAnb2JqZWN0Jykge1xuICAgICAgaXRlbS5lbmFibGVkID0gdmFsICE9PSBmYWxzZTtcbiAgICB9XG4gICAgKGl0ZW0ubGlzdCB8fCBbXSkuZm9yRWFjaChpID0+IHtcbiAgICAgIGkuX3RleHQgPSB0aGlzLmRvbS5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChpLnRleHQpO1xuICAgIH0pO1xuICAgIHRoaXMuX3Nob3J0Y3V0ID0gaXRlbTtcbiAgICB0aGlzLnJlZnJlc2hTaG9ydGN1dCgpO1xuICB9XG4gIGdldCBzaG9ydGN1dCgpOiBBbGFpbkRhdGVSYW5nZVBpY2tlclNob3J0Y3V0IHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3J0Y3V0O1xuICB9XG4gIEBJbnB1dCh7IHJlcXVpcmVkOiB0cnVlIH0pIG5nTW9kZWxFbmQ6IE56U2FmZUFueTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG5nTW9kZWxFbmRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE56U2FmZUFueT4oKTtcblxuICBwcml2YXRlIGdldCBkcCgpOiBOekRhdGVQaWNrZXJDb21wb25lbnQge1xuICAgIHJldHVybiB0aGlzLm5hdGl2ZUNvbXAuZGF0ZVBpY2tlcjtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IHNydigpOiBEYXRlUGlja2VyU2VydmljZSB7XG4gICAgcmV0dXJuIHRoaXMuZHAuZGF0ZVBpY2tlclNlcnZpY2U7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGRvbTogRG9tU2FuaXRpemVyLFxuICAgIGNvbmZpZ1NydjogQWxhaW5Db25maWdTZXJ2aWNlLFxuICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHJpdmF0ZSBuYXRpdmVDb21wOiBOelJhbmdlUGlja2VyQ29tcG9uZW50LFxuICAgIHByaXZhdGUgdmNyOiBWaWV3Q29udGFpbmVyUmVmXG4gICkge1xuICAgIGFzc2VydChcbiAgICAgICEhbmF0aXZlQ29tcCxcbiAgICAgIGBJdCBzaG91bGQgYmUgYXR0YWNoZWQgdG8gbnotcmFuZ2UtcGlja2VyIGNvbXBvbmVudCwgZm9yIGV4YW1wbGU6ICc8bnotcmFuZ2UtcGlja2VyIFsobmdNb2RlbCldPVwiaS5zdGFydFwiIGV4dGVuZCBbKG5nTW9kZWxFbmQpXT1cImkuZW5kXCIgc2hvcnRjdXQ+PC9uei1yYW5nZS1waWNrZXI+J2BcbiAgICApO1xuICAgIGNvbnN0IGNvZyA9IGNvbmZpZ1Nydi5tZXJnZSgnZGF0YVJhbmdlJywge1xuICAgICAgbnpGb3JtYXQ6ICd5eXl5LU1NLWRkJyxcbiAgICAgIG56QWxsb3dDbGVhcjogdHJ1ZSxcbiAgICAgIG56QXV0b0ZvY3VzOiBmYWxzZSxcbiAgICAgIG56UG9wdXBTdHlsZTogeyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9LFxuICAgICAgbnpTaG93VG9kYXk6IHRydWUsXG4gICAgICBzaG9ydGN1dHM6IHtcbiAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAgIGNsb3NlZDogdHJ1ZSxcbiAgICAgICAgbGlzdDogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICfku4rlpKknLFxuICAgICAgICAgICAgZm46ICgpID0+IGdldFRpbWVEaXN0YW5jZSgndG9kYXknKVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ+aYqOWkqScsXG4gICAgICAgICAgICBmbjogKCkgPT4gZ2V0VGltZURpc3RhbmNlKCd5ZXN0ZXJkYXknKVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ+i/kTPlpKknLFxuICAgICAgICAgICAgZm46ICgpID0+IGdldFRpbWVEaXN0YW5jZSgtMilcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICfov5E35aSpJyxcbiAgICAgICAgICAgIGZuOiAoKSA9PiBnZXRUaW1lRGlzdGFuY2UoLTYpXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAn5pys5ZGoJyxcbiAgICAgICAgICAgIGZuOiAoKSA9PiBnZXRUaW1lRGlzdGFuY2UoJ3dlZWsnKVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ+acrOaciCcsXG4gICAgICAgICAgICBmbjogKCkgPT4gZ2V0VGltZURpc3RhbmNlKCdtb250aCcpXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAn5YWo5bm0JyxcbiAgICAgICAgICAgIGZuOiAoKSA9PiBnZXRUaW1lRGlzdGFuY2UoJ3llYXInKVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0pITtcbiAgICB0aGlzLmRlZmF1bHRTaG9ydGN1dHMgPSB7IC4uLmNvZy5zaG9ydGN1dHMgfSBhcyBBbGFpbkRhdGVSYW5nZVBpY2tlclNob3J0Y3V0O1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgY29nKTtcbiAgfVxuXG4gIHByaXZhdGUgY2QoKTogdm9pZCB7XG4gICAgKHRoaXMuZHAgYXMgTnpTYWZlQW55KS5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBwcml2YXRlIG92ZXJyaWRlTmF0aXZlKCk6IHZvaWQge1xuICAgIGNvbnN0IGRwID0gdGhpcy5kcDtcbiAgICBkcC53cml0ZVZhbHVlID0gKHZhbHVlOiBEYXRlKSA9PiB7XG4gICAgICBjb25zdCBkYXRlcyA9ICh2YWx1ZSAmJiB0aGlzLm5nTW9kZWxFbmQgPyBbdmFsdWUsIHRoaXMubmdNb2RlbEVuZF0gOiBbXSkuZmlsdGVyKHcgPT4gISF3KTtcbiAgICAgIHRoaXMuc3J2LnNldFZhbHVlKHRoaXMuc3J2Lm1ha2VWYWx1ZShkYXRlcykpO1xuICAgICAgdGhpcy5zdGFydCA9IGRhdGVzLmxlbmd0aCA+IDAgPyBkYXRlc1swXSA6IG51bGw7XG4gICAgICB0aGlzLmVuZCA9IGRhdGVzLmxlbmd0aCA+IDAgPyBkYXRlc1sxXSA6IG51bGw7XG4gICAgICB0aGlzLmNkKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IG9sZE9uQ2hhbmdlRm4gPSBkcC5vbkNoYW5nZUZuO1xuICAgIGRwLm9uQ2hhbmdlRm4gPSAobGlzdDogQXJyYXk8RGF0ZSB8IG51bGw+KSA9PiB7XG4gICAgICBsZXQgc3RhcnQ6IERhdGUgfCBudWxsID0gbnVsbDtcbiAgICAgIGxldCBlbmQ6IERhdGUgfCBudWxsID0gbnVsbDtcbiAgICAgIGlmIChsaXN0Lmxlbmd0aCA+IDAgJiYgbGlzdC5maWx0ZXIodyA9PiB3ICE9IG51bGwpLmxlbmd0aCA9PT0gMikge1xuICAgICAgICBbc3RhcnQsIGVuZF0gPSBmaXhFbmRUaW1lT2ZSYW5nZShbbGlzdFswXSEsIGxpc3RbMV0hXSk7XG4gICAgICB9XG4gICAgICB0aGlzLnN0YXJ0ID0gc3RhcnQ7XG4gICAgICB0aGlzLmVuZCA9IGVuZDtcbiAgICAgIG9sZE9uQ2hhbmdlRm4oc3RhcnQpO1xuICAgICAgdGhpcy5uZ01vZGVsRW5kID0gZW5kO1xuICAgICAgdGhpcy5uZ01vZGVsRW5kQ2hhbmdlLmVtaXQoZW5kKTtcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSByZWZyZXNoU2hvcnRjdXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9zaG9ydGN1dCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB7IGVuYWJsZWQsIGxpc3QgfSA9IHRoaXMuX3Nob3J0Y3V0O1xuICAgIGxldCBleHRyYUZvb3RlcjogVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IHVuZGVmaW5lZDtcbiAgICBpZiAoIXRoaXMubmF0aXZlQ29tcCB8fCAhZW5hYmxlZCkge1xuICAgICAgZXh0cmFGb290ZXIgPSB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghdGhpcy5zaG9ydGN1dEZhY3RvcnkpIHtcbiAgICAgICAgdGhpcy5zaG9ydGN1dEZhY3RvcnkgPSB0aGlzLnZjci5jcmVhdGVDb21wb25lbnQoUmFuZ2VQaWNrZXJTaG9ydGN1dFRwbENvbXBvbmVudCk7XG4gICAgICB9XG4gICAgICBjb25zdCB7IGluc3RhbmNlIH0gPSB0aGlzLnNob3J0Y3V0RmFjdG9yeTtcbiAgICAgIGluc3RhbmNlLmxpc3QgPSBsaXN0ITtcbiAgICAgIGluc3RhbmNlLmNsaWNrID0gKGl0ZW06IEFsYWluRGF0ZVJhbmdlUGlja2VyU2hvcnRjdXRJdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGl0ZW0uZm4oW3RoaXMuc3RhcnQsIHRoaXMuZW5kXSk7XG4gICAgICAgIHRoaXMuc3J2LnNldFZhbHVlKHRoaXMuc3J2Lm1ha2VWYWx1ZShyZXMgYXMgRGF0ZVtdKSk7XG4gICAgICAgIHRoaXMuZHAub25DaGFuZ2VGbihyZXMpO1xuICAgICAgICB0aGlzLmRwLmNsb3NlKCk7XG4gICAgICB9O1xuICAgICAgZXh0cmFGb290ZXIgPSBpbnN0YW5jZS50cGw7XG4gICAgfVxuICAgIHRoaXMubmF0aXZlQ29tcC5kYXRlUGlja2VyLmV4dHJhRm9vdGVyID0gZXh0cmFGb290ZXI7XG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB0aGlzLmNkKCkpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMub3ZlcnJpZGVOYXRpdmUoKTtcbiAgICB0aGlzLnJlZnJlc2hTaG9ydGN1dCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBkZXN0b3J5U2hvcnRjdXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2hvcnRjdXRGYWN0b3J5ICE9IG51bGwpIHtcbiAgICAgIHRoaXMuc2hvcnRjdXRGYWN0b3J5LmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3RvcnlTaG9ydGN1dCgpO1xuICB9XG59XG4iXX0=