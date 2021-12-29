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
RangePickerDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: RangePickerDirective, deps: [{ token: i1.DomSanitizer }, { token: i2.AlainConfigService }, { token: i3.NzRangePickerComponent, host: true, optional: true }, { token: i0.ComponentFactoryResolver }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Directive });
RangePickerDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.1.1", type: RangePickerDirective, selector: "nz-range-picker[extend]", inputs: { shortcut: "shortcut", ngModelEnd: "ngModelEnd" }, outputs: { ngModelEndChange: "ngModelEndChange" }, exportAs: ["extendRangePicker"], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: RangePickerDirective, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL2RhdGUtcGlja2VyL3JhbmdlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBSUwsU0FBUyxFQUNULFlBQVksRUFDWixJQUFJLEVBRUosS0FBSyxFQUVMLFFBQVEsRUFDUixNQUFNLEVBRVAsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUcvQixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDM0UsT0FBTyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUt6RCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7Ozs7QUFNN0UsTUFBTSxPQUFPLG9CQUFvQjtJQXlDL0IsWUFDVSxHQUFpQixFQUN6QixTQUE2QixFQUNELFVBQWtDLEVBQ3RELFFBQWtDLEVBQ2xDLFFBQWtCO1FBSmxCLFFBQUcsR0FBSCxHQUFHLENBQWM7UUFFRyxlQUFVLEdBQVYsVUFBVSxDQUF3QjtRQUN0RCxhQUFRLEdBQVIsUUFBUSxDQUEwQjtRQUNsQyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBekNwQixhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUMvQixvQkFBZSxHQUF5RCxJQUFJLENBQUM7UUFDckYsVUFBSyxHQUFnQixJQUFJLENBQUM7UUFDMUIsUUFBRyxHQUFnQixJQUFJLENBQUM7UUF1QkwscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQWEsQ0FBQztRQWlCbEUsTUFBTSxDQUNKLENBQUMsQ0FBQyxVQUFVLEVBQ1oscUtBQXFLLENBQ3RLLENBQUM7UUFDRixNQUFNLEdBQUcsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRTtZQUN2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O3NCQURYLEtBQUs7Z0JBb0JHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ2EsZ0JBQWdCO3NCQUFsQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBDb21wb25lbnRSZWYsXG4gIERpcmVjdGl2ZSxcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0LFxuICBJbmplY3RvcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgVGVtcGxhdGVSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlLCBBbGFpbkRhdGVSYW5nZVBpY2tlclNob3J0Y3V0LCBBbGFpbkRhdGVSYW5nZVBpY2tlclNob3J0Y3V0SXRlbSB9IGZyb20gJ0BkZWxvbi91dGlsL2NvbmZpZyc7XG5pbXBvcnQgeyBmaXhFbmRUaW1lT2ZSYW5nZSwgZ2V0VGltZURpc3RhbmNlIH0gZnJvbSAnQGRlbG9uL3V0aWwvZGF0ZS10aW1lJztcbmltcG9ydCB7IGFzc2VydCwgZGVlcE1lcmdlS2V5IH0gZnJvbSAnQGRlbG9uL3V0aWwvb3RoZXInO1xuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgTnpEYXRlUGlja2VyQ29tcG9uZW50LCBOelJhbmdlUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC9kYXRlLXBpY2tlcic7XG5pbXBvcnQgeyBEYXRlUGlja2VyU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvZGF0ZS1waWNrZXIvZGF0ZS1waWNrZXIuc2VydmljZSc7XG5cbmltcG9ydCB7IFJhbmdlUGlja2VyU2hvcnRjdXRUcGxDb21wb25lbnQgfSBmcm9tICcuL3JhbmdlLXNob3J0Y3V0LmNvbXBvbmVudCc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ256LXJhbmdlLXBpY2tlcltleHRlbmRdJyxcbiAgZXhwb3J0QXM6ICdleHRlbmRSYW5nZVBpY2tlcidcbn0pXG5leHBvcnQgY2xhc3MgUmFuZ2VQaWNrZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc2hvcnRjdXQ6IEFsYWluRGF0ZVJhbmdlUGlja2VyU2hvcnRjdXQgfCBzdHJpbmcgfCBudWxsO1xuXG4gIHByaXZhdGUgZGVmYXVsdFNob3J0Y3V0czogQWxhaW5EYXRlUmFuZ2VQaWNrZXJTaG9ydGN1dDtcbiAgcHJpdmF0ZSBfc2hvcnRjdXQ6IEFsYWluRGF0ZVJhbmdlUGlja2VyU2hvcnRjdXQ7XG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIHNob3J0Y3V0RmFjdG9yeTogQ29tcG9uZW50UmVmPFJhbmdlUGlja2VyU2hvcnRjdXRUcGxDb21wb25lbnQ+IHwgbnVsbCA9IG51bGw7XG4gIHN0YXJ0OiBEYXRlIHwgbnVsbCA9IG51bGw7XG4gIGVuZDogRGF0ZSB8IG51bGwgPSBudWxsO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBzaG9ydGN1dCh2YWw6IEFsYWluRGF0ZVJhbmdlUGlja2VyU2hvcnRjdXQgfCBudWxsKSB7XG4gICAgY29uc3QgaXRlbSA9IGRlZXBNZXJnZUtleShcbiAgICAgIHsgbGlzdDogW10gfSxcbiAgICAgIHRydWUsXG4gICAgICB0aGlzLmRlZmF1bHRTaG9ydGN1dHMsXG4gICAgICB2YWwgPT0gbnVsbCA/IHt9IDogdmFsXG4gICAgKSBhcyBBbGFpbkRhdGVSYW5nZVBpY2tlclNob3J0Y3V0O1xuICAgIGlmICh0eXBlb2YgdmFsICE9PSAnb2JqZWN0Jykge1xuICAgICAgaXRlbS5lbmFibGVkID0gdmFsICE9PSBmYWxzZTtcbiAgICB9XG4gICAgKGl0ZW0ubGlzdCB8fCBbXSkuZm9yRWFjaChpID0+IHtcbiAgICAgIGkuX3RleHQgPSB0aGlzLmRvbS5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChpLnRleHQpO1xuICAgIH0pO1xuICAgIHRoaXMuX3Nob3J0Y3V0ID0gaXRlbTtcbiAgICB0aGlzLnJlZnJlc2hTaG9ydGN1dCgpO1xuICB9XG4gIGdldCBzaG9ydGN1dCgpOiBBbGFpbkRhdGVSYW5nZVBpY2tlclNob3J0Y3V0IHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3J0Y3V0O1xuICB9XG4gIEBJbnB1dCgpIG5nTW9kZWxFbmQ6IE56U2FmZUFueTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG5nTW9kZWxFbmRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE56U2FmZUFueT4oKTtcblxuICBwcml2YXRlIGdldCBkcCgpOiBOekRhdGVQaWNrZXJDb21wb25lbnQge1xuICAgIHJldHVybiB0aGlzLm5hdGl2ZUNvbXAuZGF0ZVBpY2tlcjtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IHNydigpOiBEYXRlUGlja2VyU2VydmljZSB7XG4gICAgcmV0dXJuIHRoaXMuZHAuZGF0ZVBpY2tlclNlcnZpY2U7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGRvbTogRG9tU2FuaXRpemVyLFxuICAgIGNvbmZpZ1NydjogQWxhaW5Db25maWdTZXJ2aWNlLFxuICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHJpdmF0ZSBuYXRpdmVDb21wOiBOelJhbmdlUGlja2VyQ29tcG9uZW50LFxuICAgIHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvclxuICApIHtcbiAgICBhc3NlcnQoXG4gICAgICAhIW5hdGl2ZUNvbXAsXG4gICAgICBgSXQgc2hvdWxkIGJlIGF0dGFjaGVkIHRvIG56LXJhbmdlLXBpY2tlciBjb21wb25lbnQsIGZvciBleGFtcGxlOiAnPG56LXJhbmdlLXBpY2tlciBbKG5nTW9kZWwpXT1cImkuc3RhcnRcIiBleHRlbmQgWyhuZ01vZGVsRW5kKV09XCJpLmVuZFwiIHNob3J0Y3V0PjwvbnotcmFuZ2UtcGlja2VyPidgXG4gICAgKTtcbiAgICBjb25zdCBjb2cgPSBjb25maWdTcnYubWVyZ2UoJ2RhdGFSYW5nZScsIHtcbiAgICAgIG56Rm9ybWF0OiAneXl5eS1NTS1kZCcsXG4gICAgICBuekFsbG93Q2xlYXI6IHRydWUsXG4gICAgICBuekF1dG9Gb2N1czogZmFsc2UsXG4gICAgICBuelBvcHVwU3R5bGU6IHsgcG9zaXRpb246ICdyZWxhdGl2ZScgfSxcbiAgICAgIG56U2hvd1RvZGF5OiB0cnVlLFxuICAgICAgc2hvcnRjdXRzOiB7XG4gICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICBjbG9zZWQ6IHRydWUsXG4gICAgICAgIGxpc3Q6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAn5LuK5aSpJyxcbiAgICAgICAgICAgIGZuOiAoKSA9PiBnZXRUaW1lRGlzdGFuY2UoJ3RvZGF5JylcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICfmmKjlpKknLFxuICAgICAgICAgICAgZm46ICgpID0+IGdldFRpbWVEaXN0YW5jZSgneWVzdGVyZGF5JylcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICfov5Ez5aSpJyxcbiAgICAgICAgICAgIGZuOiAoKSA9PiBnZXRUaW1lRGlzdGFuY2UoLTIpXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAn6L+RN+WkqScsXG4gICAgICAgICAgICBmbjogKCkgPT4gZ2V0VGltZURpc3RhbmNlKC02KVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ+acrOWRqCcsXG4gICAgICAgICAgICBmbjogKCkgPT4gZ2V0VGltZURpc3RhbmNlKCd3ZWVrJylcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICfmnKzmnIgnLFxuICAgICAgICAgICAgZm46ICgpID0+IGdldFRpbWVEaXN0YW5jZSgnbW9udGgnKVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ+WFqOW5tCcsXG4gICAgICAgICAgICBmbjogKCkgPT4gZ2V0VGltZURpc3RhbmNlKCd5ZWFyJylcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9KSE7XG4gICAgdGhpcy5kZWZhdWx0U2hvcnRjdXRzID0geyAuLi5jb2cuc2hvcnRjdXRzIH0gYXMgQWxhaW5EYXRlUmFuZ2VQaWNrZXJTaG9ydGN1dDtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvZyk7XG4gIH1cblxuICBwcml2YXRlIGNkKCk6IHZvaWQge1xuICAgICh0aGlzLmRwIGFzIE56U2FmZUFueSkuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcHJpdmF0ZSBvdmVycmlkZU5hdGl2ZSgpOiB2b2lkIHtcbiAgICBjb25zdCBkcCA9IHRoaXMuZHA7XG4gICAgZHAud3JpdGVWYWx1ZSA9ICh2YWx1ZTogRGF0ZSkgPT4ge1xuICAgICAgY29uc3QgZGF0ZXMgPSAodmFsdWUgJiYgdGhpcy5uZ01vZGVsRW5kID8gW3ZhbHVlLCB0aGlzLm5nTW9kZWxFbmRdIDogW10pLmZpbHRlcih3ID0+ICEhdyk7XG4gICAgICB0aGlzLnNydi5zZXRWYWx1ZSh0aGlzLnNydi5tYWtlVmFsdWUoZGF0ZXMpKTtcbiAgICAgIHRoaXMuc3RhcnQgPSBkYXRlcy5sZW5ndGggPiAwID8gZGF0ZXNbMF0gOiBudWxsO1xuICAgICAgdGhpcy5lbmQgPSBkYXRlcy5sZW5ndGggPiAwID8gZGF0ZXNbMV0gOiBudWxsO1xuICAgICAgdGhpcy5jZCgpO1xuICAgIH07XG5cbiAgICBjb25zdCBvbGRPbkNoYW5nZUZuID0gZHAub25DaGFuZ2VGbjtcbiAgICBkcC5vbkNoYW5nZUZuID0gKGxpc3Q6IEFycmF5PERhdGUgfCBudWxsPikgPT4ge1xuICAgICAgbGV0IHN0YXJ0OiBEYXRlIHwgbnVsbCA9IG51bGw7XG4gICAgICBsZXQgZW5kOiBEYXRlIHwgbnVsbCA9IG51bGw7XG4gICAgICBpZiAobGlzdC5sZW5ndGggPiAwICYmIGxpc3QuZmlsdGVyKHcgPT4gdyAhPSBudWxsKS5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgW3N0YXJ0LCBlbmRdID0gZml4RW5kVGltZU9mUmFuZ2UoW2xpc3RbMF0hLCBsaXN0WzFdIV0pO1xuICAgICAgfVxuICAgICAgdGhpcy5zdGFydCA9IHN0YXJ0O1xuICAgICAgdGhpcy5lbmQgPSBlbmQ7XG4gICAgICBvbGRPbkNoYW5nZUZuKHN0YXJ0KTtcbiAgICAgIHRoaXMubmdNb2RlbEVuZCA9IGVuZDtcbiAgICAgIHRoaXMubmdNb2RlbEVuZENoYW5nZS5lbWl0KGVuZCk7XG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgcmVmcmVzaFNob3J0Y3V0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5fc2hvcnRjdXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgeyBlbmFibGVkLCBsaXN0IH0gPSB0aGlzLl9zaG9ydGN1dDtcbiAgICBsZXQgZXh0cmFGb290ZXI6IFRlbXBsYXRlUmVmPE56U2FmZUFueT4gfCB1bmRlZmluZWQ7XG4gICAgaWYgKCF0aGlzLm5hdGl2ZUNvbXAgfHwgIWVuYWJsZWQpIHtcbiAgICAgIGV4dHJhRm9vdGVyID0gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIXRoaXMuc2hvcnRjdXRGYWN0b3J5KSB7XG4gICAgICAgIGNvbnN0IGZhY3RvcnkgPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFJhbmdlUGlja2VyU2hvcnRjdXRUcGxDb21wb25lbnQpO1xuICAgICAgICB0aGlzLnNob3J0Y3V0RmFjdG9yeSA9IGZhY3RvcnkuY3JlYXRlKHRoaXMuaW5qZWN0b3IpO1xuICAgICAgfVxuICAgICAgY29uc3QgeyBpbnN0YW5jZSB9ID0gdGhpcy5zaG9ydGN1dEZhY3Rvcnk7XG4gICAgICBpbnN0YW5jZS5saXN0ID0gbGlzdCE7XG4gICAgICBpbnN0YW5jZS5jbGljayA9IChpdGVtOiBBbGFpbkRhdGVSYW5nZVBpY2tlclNob3J0Y3V0SXRlbSkgPT4ge1xuICAgICAgICBjb25zdCByZXMgPSBpdGVtLmZuKFt0aGlzLnN0YXJ0LCB0aGlzLmVuZF0pO1xuICAgICAgICB0aGlzLnNydi5zZXRWYWx1ZSh0aGlzLnNydi5tYWtlVmFsdWUocmVzIGFzIERhdGVbXSkpO1xuICAgICAgICB0aGlzLmRwLm9uQ2hhbmdlRm4ocmVzKTtcbiAgICAgICAgdGhpcy5kcC5jbG9zZSgpO1xuICAgICAgfTtcbiAgICAgIGV4dHJhRm9vdGVyID0gaW5zdGFuY2UudHBsO1xuICAgIH1cbiAgICB0aGlzLm5hdGl2ZUNvbXAuZGF0ZVBpY2tlci5leHRyYUZvb3RlciA9IGV4dHJhRm9vdGVyO1xuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gdGhpcy5jZCgpKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm92ZXJyaWRlTmF0aXZlKCk7XG4gICAgdGhpcy5yZWZyZXNoU2hvcnRjdXQoKTtcbiAgfVxuXG4gIHByaXZhdGUgZGVzdG9yeVNob3J0Y3V0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNob3J0Y3V0RmFjdG9yeSAhPSBudWxsKSB7XG4gICAgICB0aGlzLnNob3J0Y3V0RmFjdG9yeS5kZXN0cm95KCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0b3J5U2hvcnRjdXQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==