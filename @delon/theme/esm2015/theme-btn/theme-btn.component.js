import { Directionality } from '@angular/cdk/bidi';
import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, InjectionToken, Input, isDevMode, Optional, Renderer2 } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AlainConfigService } from '@delon/util/config';
export const ALAIN_THEME_BTN_KEYS = new InjectionToken('ALAIN_THEME_BTN_KEYS');
export class ThemeBtnComponent {
    constructor(renderer, configSrv, platform, doc, directionality, KEYS) {
        this.renderer = renderer;
        this.configSrv = configSrv;
        this.platform = platform;
        this.doc = doc;
        this.directionality = directionality;
        this.KEYS = KEYS;
        this.theme = 'default';
        this.isDev = isDevMode();
        this.types = [
            { key: 'default', text: 'Default Theme' },
            { key: 'dark', text: 'Dark Theme' },
            { key: 'compact', text: 'Compact Theme' }
        ];
        this.devTips = `When the dark.css file can't be found, you need to run it once: npm run theme`;
        this.deployUrl = '';
        this.destroy$ = new Subject();
        this.dir = 'ltr';
    }
    ngOnInit() {
        var _a;
        this.dir = this.directionality.value;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
        });
        this.initTheme();
    }
    initTheme() {
        if (!this.platform.isBrowser) {
            return;
        }
        this.theme = localStorage.getItem(this.KEYS) || 'default';
        this.updateChartTheme();
        this.onThemeChange(this.theme);
    }
    updateChartTheme() {
        this.configSrv.set('chart', { theme: this.theme === 'dark' ? 'dark' : '' });
    }
    onThemeChange(theme) {
        if (!this.platform.isBrowser) {
            return;
        }
        this.theme = theme;
        this.renderer.setAttribute(this.doc.body, 'data-theme', theme);
        const dom = this.doc.getElementById(this.KEYS);
        if (dom) {
            dom.remove();
        }
        localStorage.removeItem(this.KEYS);
        if (theme !== 'default') {
            const el = this.doc.createElement('link');
            el.type = 'text/css';
            el.rel = 'stylesheet';
            el.id = this.KEYS;
            el.href = `${this.deployUrl}assets/style.${theme}.css`;
            localStorage.setItem(this.KEYS, theme);
            this.doc.body.append(el);
        }
        this.updateChartTheme();
    }
    ngOnDestroy() {
        const el = this.doc.getElementById(this.KEYS);
        if (el != null) {
            this.doc.body.removeChild(el);
        }
        this.destroy$.next();
        this.destroy$.complete();
    }
}
ThemeBtnComponent.decorators = [
    { type: Component, args: [{
                selector: 'theme-btn',
                template: "<div\n  class=\"ant-avatar ant-avatar-circle ant-avatar-icon\"\n  nz-dropdown\n  nzPlacement=\"topCenter\"\n  [nzDropdownMenu]=\"types.length > 0 ? menu : null\"\n>\n  <svg\n    nz-tooltip\n    [nzTooltipTitle]=\"isDev ? devTips : null\"\n    class=\"anticon\"\n    role=\"img\"\n    width=\"21\"\n    height=\"21\"\n    viewBox=\"0 0 21 21\"\n    fill=\"currentColor\"\n  >\n    <g fill-rule=\"evenodd\">\n      <g fill-rule=\"nonzero\">\n        <path\n          d=\"M7.02 3.635l12.518 12.518a1.863 1.863 0 010 2.635l-1.317 1.318a1.863 1.863 0 01-2.635 0L3.068 7.588A2.795 2.795 0 117.02 3.635zm2.09 14.428a.932.932 0 110 1.864.932.932 0 010-1.864zm-.043-9.747L7.75 9.635l9.154 9.153 1.318-1.317-9.154-9.155zM3.52 12.473c.514 0 .931.417.931.931v.932h.932a.932.932 0 110 1.864h-.932v.931a.932.932 0 01-1.863 0l-.001-.931h-.93a.932.932 0 010-1.864h.93v-.932c0-.514.418-.931.933-.931zm15.374-3.727a1.398 1.398 0 110 2.795 1.398 1.398 0 010-2.795zM4.385 4.953a.932.932 0 000 1.317l2.046 2.047L7.75 7 5.703 4.953a.932.932 0 00-1.318 0zM14.701.36a.932.932 0 01.931.932v.931h.932a.932.932 0 010 1.864h-.933l.001.932a.932.932 0 11-1.863 0l-.001-.932h-.93a.932.932 0 110-1.864h.93v-.931a.932.932 0 01.933-.932z\"\n        ></path>\n      </g>\n    </g>\n  </svg>\n  <nz-dropdown-menu #menu=\"nzDropdownMenu\">\n    <ul nz-menu nzSelectable>\n      <li nz-menu-item *ngFor=\"let i of types\" (click)=\"onThemeChange(i.key)\">{{ i.text }}</li>\n    </ul>\n  </nz-dropdown-menu>\n</div>\n",
                host: {
                    '[class.theme-btn]': `true`,
                    '[class.theme-btn-rtl]': `dir === 'rtl'`
                },
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
ThemeBtnComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: AlainConfigService },
    { type: Platform },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Directionality, decorators: [{ type: Optional }] },
    { type: String, decorators: [{ type: Inject, args: [ALAIN_THEME_BTN_KEYS,] }] }
];
ThemeBtnComponent.propDecorators = {
    types: [{ type: Input }],
    devTips: [{ type: Input }],
    deployUrl: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnRuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lL3RoZW1lLWJ0bi90aGVtZS1idG4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBYSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULE1BQU0sRUFDTixjQUFjLEVBQ2QsS0FBSyxFQUNMLFNBQVMsRUFHVCxRQUFRLEVBQ1IsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBUXhELE1BQU0sQ0FBQyxNQUFNLG9CQUFvQixHQUFHLElBQUksY0FBYyxDQUFTLHNCQUFzQixDQUFDLENBQUM7QUFXdkYsTUFBTSxPQUFPLGlCQUFpQjtJQWE1QixZQUNVLFFBQW1CLEVBQ25CLFNBQTZCLEVBQzdCLFFBQWtCLEVBQ0EsR0FBYyxFQUNwQixjQUE4QixFQUNaLElBQVk7UUFMMUMsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixjQUFTLEdBQVQsU0FBUyxDQUFvQjtRQUM3QixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ0EsUUFBRyxHQUFILEdBQUcsQ0FBVztRQUNwQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDWixTQUFJLEdBQUosSUFBSSxDQUFRO1FBbEI1QyxVQUFLLEdBQUcsU0FBUyxDQUFDO1FBQzFCLFVBQUssR0FBRyxTQUFTLEVB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O1NBQzFCO1FBQ0QsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELFdBQVc7UUFDVCxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUMsSUFBSSxFQUFFLElBQUksSUFBSSxFQUFFO1lBQ2QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQy9CO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLENBQUM7OztZQW5GRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLGs5Q0FBeUM7Z0JBQ3pDLElBQUksRUFBRTtvQkFDSixtQkFBbUIsRUFBRSxNQUFNO29CQUMzQix1QkFBdUIsRUFBRSxlQUFlO2lCQUN6QztnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7O1lBdkJDLFNBQVM7WUFLRixrQkFBa0I7WUFqQmxCLFFBQVE7NENBcURaLE1BQU0sU0FBQyxRQUFRO1lBdERBLGNBQWMsdUJBdUQ3QixRQUFRO3lDQUNSLE1BQU0sU0FBQyxvQkFBb0I7OztvQkFoQjdCLEtBQUs7c0JBS0wsS0FBSzt3QkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEluamVjdCxcbiAgSW5qZWN0aW9uVG9rZW4sXG4gIElucHV0LFxuICBpc0Rldk1vZGUsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UgfSBmcm9tICdAZGVsb24vdXRpbC9jb25maWcnO1xuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRoZW1lQnRuVHlwZSB7XG4gIGtleTogc3RyaW5nO1xuICB0ZXh0OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBBTEFJTl9USEVNRV9CVE5fS0VZUyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxzdHJpbmc+KCdBTEFJTl9USEVNRV9CVE5fS0VZUycpO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0aGVtZS1idG4nLFxuICB0ZW1wbGF0ZVVybDogJy4vdGhlbWUtYnRuLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MudGhlbWUtYnRuXSc6IGB0cnVlYCxcbiAgICAnW2NsYXNzLnRoZW1lLWJ0bi1ydGxdJzogYGRpciA9PT0gJ3J0bCdgXG4gIH0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFRoZW1lQnRuQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIHRoZW1lID0gJ2RlZmF1bHQnO1xuICBpc0RldiA9IGlzRGV2TW9kZSgpO1xuICBASW5wdXQoKSB0eXBlczogVGhlbWVCdG5UeXBlW10gPSBbXG4gICAgeyBrZXk6ICdkZWZhdWx0JywgdGV4dDogJ0RlZmF1bHQgVGhlbWUnIH0sXG4gICAgeyBrZXk6ICdkYXJrJywgdGV4dDogJ0RhcmsgVGhlbWUnIH0sXG4gICAgeyBrZXk6ICdjb21wYWN0JywgdGV4dDogJ0NvbXBhY3QgVGhlbWUnIH1cbiAgXTtcbiAgQElucHV0KCkgZGV2VGlwcyA9IGBXaGVuIHRoZSBkYXJrLmNzcyBmaWxlIGNhbid0IGJlIGZvdW5kLCB5b3UgbmVlZCB0byBydW4gaXQgb25jZTogbnBtIHJ1biB0aGVtZWA7XG4gIEBJbnB1dCgpIGRlcGxveVVybCA9ICcnO1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgZGlyOiBEaXJlY3Rpb24gPSAnbHRyJztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBjb25maWdTcnY6IEFsYWluQ29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSxcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogTnpTYWZlQW55LFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZGlyZWN0aW9uYWxpdHk6IERpcmVjdGlvbmFsaXR5LFxuICAgIEBJbmplY3QoQUxBSU5fVEhFTUVfQlROX0tFWVMpIHByaXZhdGUgS0VZUzogc3RyaW5nXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmRpciA9IHRoaXMuZGlyZWN0aW9uYWxpdHkudmFsdWU7XG4gICAgdGhpcy5kaXJlY3Rpb25hbGl0eS5jaGFuZ2U/LnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKGRpcmVjdGlvbjogRGlyZWN0aW9uKSA9PiB7XG4gICAgICB0aGlzLmRpciA9IGRpcmVjdGlvbjtcbiAgICB9KTtcbiAgICB0aGlzLmluaXRUaGVtZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0VGhlbWUoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnRoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5LRVlTKSB8fCAnZGVmYXVsdCc7XG4gICAgdGhpcy51cGRhdGVDaGFydFRoZW1lKCk7XG4gICAgdGhpcy5vblRoZW1lQ2hhbmdlKHRoaXMudGhlbWUpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVDaGFydFRoZW1lKCk6IHZvaWQge1xuICAgIHRoaXMuY29uZmlnU3J2LnNldCgnY2hhcnQnLCB7IHRoZW1lOiB0aGlzLnRoZW1lID09PSAnZGFyaycgPyAnZGFyaycgOiAnJyB9KTtcbiAgfVxuXG4gIG9uVGhlbWVDaGFuZ2UodGhlbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy50aGVtZSA9IHRoZW1lO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuZG9jLmJvZHksICdkYXRhLXRoZW1lJywgdGhlbWUpO1xuICAgIGNvbnN0IGRvbSA9IHRoaXMuZG9jLmdldEVsZW1lbnRCeUlkKHRoaXMuS0VZUyk7XG4gICAgaWYgKGRvbSkge1xuICAgICAgZG9tLnJlbW92ZSgpO1xuICAgIH1cbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh0aGlzLktFWVMpO1xuICAgIGlmICh0aGVtZSAhPT0gJ2RlZmF1bHQnKSB7XG4gICAgICBjb25zdCBlbCA9IHRoaXMuZG9jLmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgIGVsLnR5cGUgPSAndGV4dC9jc3MnO1xuICAgICAgZWwucmVsID0gJ3N0eWxlc2hlZXQnO1xuICAgICAgZWwuaWQgPSB0aGlzLktFWVM7XG4gICAgICBlbC5ocmVmID0gYCR7dGhpcy5kZXBsb3lVcmx9YXNzZXRzL3N0eWxlLiR7dGhlbWV9LmNzc2A7XG5cbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuS0VZUywgdGhlbWUpO1xuICAgICAgdGhpcy5kb2MuYm9keS5hcHBlbmQoZWwpO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZUNoYXJ0VGhlbWUoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGNvbnN0IGVsID0gdGhpcy5kb2MuZ2V0RWxlbWVudEJ5SWQodGhpcy5LRVlTKTtcbiAgICBpZiAoZWwgIT0gbnVsbCkge1xuICAgICAgdGhpcy5kb2MuYm9keS5yZW1vdmVDaGlsZChlbCk7XG4gICAgfVxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19