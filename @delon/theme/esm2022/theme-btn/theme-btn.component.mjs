import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Inject, InjectionToken, Input, isDevMode, Optional, Output } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NzDropDownDirective, NzDropdownMenuComponent } from 'ng-zorro-antd/dropdown';
import { NzTooltipDirective } from 'ng-zorro-antd/tooltip';
import * as i0 from "@angular/core";
import * as i1 from "@delon/util/config";
import * as i2 from "@angular/cdk/platform";
import * as i3 from "@angular/cdk/bidi";
export const ALAIN_THEME_BTN_KEYS = new InjectionToken('ALAIN_THEME_BTN_KEYS');
export class ThemeBtnComponent {
    constructor(renderer, configSrv, platform, doc, directionality, KEYS, cdr) {
        this.renderer = renderer;
        this.configSrv = configSrv;
        this.platform = platform;
        this.doc = doc;
        this.directionality = directionality;
        this.cdr = cdr;
        this.theme = 'default';
        this.isDev = isDevMode();
        this.types = [
            { key: 'default', text: 'Default Theme' },
            { key: 'dark', text: 'Dark Theme' },
            { key: 'compact', text: 'Compact Theme' }
        ];
        this.devTips = `When the dark.css file can't be found, you need to run it once: npm run theme`;
        this.deployUrl = '';
        this.themeChange = new EventEmitter();
        this.dir$ = this.directionality.change?.pipe(takeUntilDestroyed());
        this.dir = 'ltr';
        this.key = '';
        this.key = KEYS ?? 'site-theme';
    }
    ngOnInit() {
        this.dir = this.directionality.value;
        this.dir$.subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        this.initTheme();
    }
    initTheme() {
        if (!this.platform.isBrowser) {
            return;
        }
        this.theme = localStorage.getItem(this.key) || 'default';
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
        this.themeChange.emit(theme);
        this.renderer.setAttribute(this.doc.body, 'data-theme', theme);
        const dom = this.doc.getElementById(this.key);
        if (dom) {
            dom.remove();
        }
        localStorage.removeItem(this.key);
        if (theme !== 'default') {
            const el = this.doc.createElement('link');
            el.type = 'text/css';
            el.rel = 'stylesheet';
            el.id = this.key;
            el.href = `${this.deployUrl}assets/style.${theme}.css`;
            localStorage.setItem(this.key, theme);
            this.doc.body.append(el);
        }
        this.updateChartTheme();
    }
    ngOnDestroy() {
        const el = this.doc.getElementById(this.key);
        if (el != null) {
            this.doc.body.removeChild(el);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: ThemeBtnComponent, deps: [{ token: i0.Renderer2 }, { token: i1.AlainConfigService }, { token: i2.Platform }, { token: DOCUMENT }, { token: i3.Directionality, optional: true }, { token: ALAIN_THEME_BTN_KEYS, optional: true }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.9", type: ThemeBtnComponent, isStandalone: true, selector: "theme-btn", inputs: { types: "types", devTips: "devTips", deployUrl: "deployUrl" }, outputs: { themeChange: "themeChange" }, host: { properties: { "class.theme-btn": "true", "class.theme-btn-rtl": "dir === 'rtl'" } }, ngImport: i0, template: "<div\n  class=\"ant-avatar ant-avatar-circle ant-avatar-icon\"\n  nz-dropdown\n  nzPlacement=\"topCenter\"\n  [nzDropdownMenu]=\"types.length > 0 ? menu : null\"\n>\n  <svg\n    nz-tooltip\n    [nzTooltipTitle]=\"isDev ? devTips : null\"\n    class=\"anticon\"\n    role=\"img\"\n    width=\"21\"\n    height=\"21\"\n    viewBox=\"0 0 21 21\"\n    fill=\"currentColor\"\n  >\n    <g fill-rule=\"evenodd\">\n      <g fill-rule=\"nonzero\">\n        <path\n          d=\"M7.02 3.635l12.518 12.518a1.863 1.863 0 010 2.635l-1.317 1.318a1.863 1.863 0 01-2.635 0L3.068 7.588A2.795 2.795 0 117.02 3.635zm2.09 14.428a.932.932 0 110 1.864.932.932 0 010-1.864zm-.043-9.747L7.75 9.635l9.154 9.153 1.318-1.317-9.154-9.155zM3.52 12.473c.514 0 .931.417.931.931v.932h.932a.932.932 0 110 1.864h-.932v.931a.932.932 0 01-1.863 0l-.001-.931h-.93a.932.932 0 010-1.864h.93v-.932c0-.514.418-.931.933-.931zm15.374-3.727a1.398 1.398 0 110 2.795 1.398 1.398 0 010-2.795zM4.385 4.953a.932.932 0 000 1.317l2.046 2.047L7.75 7 5.703 4.953a.932.932 0 00-1.318 0zM14.701.36a.932.932 0 01.931.932v.931h.932a.932.932 0 010 1.864h-.933l.001.932a.932.932 0 11-1.863 0l-.001-.932h-.93a.932.932 0 110-1.864h.93v-.931a.932.932 0 01.933-.932z\"\n        />\n      </g>\n    </g>\n  </svg>\n  <nz-dropdown-menu #menu=\"nzDropdownMenu\">\n    <ul nz-menu nzSelectable>\n      @for (i of types; track $index) {\n        <li nz-menu-item (click)=\"onThemeChange(i.key)\">{{ i.text }}</li>\n      }\n    </ul>\n  </nz-dropdown-menu>\n</div>\n", dependencies: [{ kind: "directive", type: NzDropDownDirective, selector: "[nz-dropdown]", inputs: ["nzDropdownMenu", "nzTrigger", "nzMatchWidthElement", "nzBackdrop", "nzClickHide", "nzDisabled", "nzVisible", "nzOverlayClassName", "nzOverlayStyle", "nzPlacement"], outputs: ["nzVisibleChange"], exportAs: ["nzDropdown"] }, { kind: "component", type: NzDropdownMenuComponent, selector: "nz-dropdown-menu", exportAs: ["nzDropdownMenu"] }, { kind: "directive", type: NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "cdkConnectedOverlayPush", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: ThemeBtnComponent, decorators: [{
            type: Component,
            args: [{ selector: 'theme-btn', host: {
                        '[class.theme-btn]': `true`,
                        '[class.theme-btn-rtl]': `dir === 'rtl'`
                    }, changeDetection: ChangeDetectionStrategy.OnPush, standalone: true, imports: [NzDropDownDirective, NzDropdownMenuComponent, NzTooltipDirective], template: "<div\n  class=\"ant-avatar ant-avatar-circle ant-avatar-icon\"\n  nz-dropdown\n  nzPlacement=\"topCenter\"\n  [nzDropdownMenu]=\"types.length > 0 ? menu : null\"\n>\n  <svg\n    nz-tooltip\n    [nzTooltipTitle]=\"isDev ? devTips : null\"\n    class=\"anticon\"\n    role=\"img\"\n    width=\"21\"\n    height=\"21\"\n    viewBox=\"0 0 21 21\"\n    fill=\"currentColor\"\n  >\n    <g fill-rule=\"evenodd\">\n      <g fill-rule=\"nonzero\">\n        <path\n          d=\"M7.02 3.635l12.518 12.518a1.863 1.863 0 010 2.635l-1.317 1.318a1.863 1.863 0 01-2.635 0L3.068 7.588A2.795 2.795 0 117.02 3.635zm2.09 14.428a.932.932 0 110 1.864.932.932 0 010-1.864zm-.043-9.747L7.75 9.635l9.154 9.153 1.318-1.317-9.154-9.155zM3.52 12.473c.514 0 .931.417.931.931v.932h.932a.932.932 0 110 1.864h-.932v.931a.932.932 0 01-1.863 0l-.001-.931h-.93a.932.932 0 010-1.864h.93v-.932c0-.514.418-.931.933-.931zm15.374-3.727a1.398 1.398 0 110 2.795 1.398 1.398 0 010-2.795zM4.385 4.953a.932.932 0 000 1.317l2.046 2.047L7.75 7 5.703 4.953a.932.932 0 00-1.318 0zM14.701.36a.932.932 0 01.931.932v.931h.932a.932.932 0 010 1.864h-.933l.001.932a.932.932 0 11-1.863 0l-.001-.932h-.93a.932.932 0 110-1.864h.93v-.931a.932.932 0 01.933-.932z\"\n        />\n      </g>\n    </g>\n  </svg>\n  <nz-dropdown-menu #menu=\"nzDropdownMenu\">\n    <ul nz-menu nzSelectable>\n      @for (i of types; track $index) {\n        <li nz-menu-item (click)=\"onThemeChange(i.key)\">{{ i.text }}</li>\n      }\n    </ul>\n  </nz-dropdown-menu>\n</div>\n" }]
        }], ctorParameters: () => [{ type: i0.Renderer2 }, { type: i1.AlainConfigService }, { type: i2.Platform }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: i3.Directionality, decorators: [{
                    type: Optional
                }] }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [ALAIN_THEME_BTN_KEYS]
                }] }, { type: i0.ChangeDetectorRef }], propDecorators: { types: [{
                type: Input
            }], devTips: [{
                type: Input
            }], deployUrl: [{
                type: Input
            }], themeChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnRuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lL3RoZW1lLWJ0bi90aGVtZS1idG4uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdGhlbWUvdGhlbWUtYnRuL3RoZW1lLWJ0bi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUNMLHVCQUF1QixFQUV2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLE1BQU0sRUFDTixjQUFjLEVBQ2QsS0FBSyxFQUNMLFNBQVMsRUFHVCxRQUFRLEVBQ1IsTUFBTSxFQUVQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBSWhFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7OztBQU8zRCxNQUFNLENBQUMsTUFBTSxvQkFBb0IsR0FBRyxJQUFJLGNBQWMsQ0FBUyxzQkFBc0IsQ0FBQyxDQUFDO0FBYXZGLE1BQU0sT0FBTyxpQkFBaUI7SUFlNUIsWUFDVSxRQUFtQixFQUNuQixTQUE2QixFQUM3QixRQUFrQixFQUNBLEdBQWMsRUFDcEIsY0FBOEIsRUFDUixJQUFZLEVBQzlDLEdBQXNCO1FBTnRCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsY0FBUyxHQUFULFNBQVMsQ0FBb0I7UUFDN0IsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNBLFFBQUcsR0FBSCxHQUFHLENBQVc7UUFDcEIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBRTFDLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBckJ4QixVQUFLLEdBQUcsU0FBUyxD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Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIEluamVjdCxcbiAgSW5qZWN0aW9uVG9rZW4sXG4gIElucHV0LFxuICBpc0Rldk1vZGUsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0YWtlVW50aWxEZXN0cm95ZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlL3J4anMtaW50ZXJvcCc7XG5cbmltcG9ydCB7IEFsYWluQ29uZmlnU2VydmljZSB9IGZyb20gJ0BkZWxvbi91dGlsL2NvbmZpZyc7XG5pbXBvcnQgdHlwZSB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBOekRyb3BEb3duRGlyZWN0aXZlLCBOekRyb3Bkb3duTWVudUNvbXBvbmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQvZHJvcGRvd24nO1xuaW1wb3J0IHsgTnpUb29sdGlwRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC90b29sdGlwJztcblxuZXhwb3J0IGludGVyZmFjZSBUaGVtZUJ0blR5cGUge1xuICBrZXk6IHN0cmluZztcbiAgdGV4dDogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgQUxBSU5fVEhFTUVfQlROX0tFWVMgPSBuZXcgSW5qZWN0aW9uVG9rZW48c3RyaW5nPignQUxBSU5fVEhFTUVfQlROX0tFWVMnKTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGhlbWUtYnRuJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RoZW1lLWJ0bi5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLnRoZW1lLWJ0bl0nOiBgdHJ1ZWAsXG4gICAgJ1tjbGFzcy50aGVtZS1idG4tcnRsXSc6IGBkaXIgPT09ICdydGwnYFxuICB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW056RHJvcERvd25EaXJlY3RpdmUsIE56RHJvcGRvd25NZW51Q29tcG9uZW50LCBOelRvb2x0aXBEaXJlY3RpdmVdXG59KVxuZXhwb3J0IGNsYXNzIFRoZW1lQnRuQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIHRoZW1lID0gJ2RlZmF1bHQnO1xuICBpc0RldiA9IGlzRGV2TW9kZSgpO1xuICBASW5wdXQoKSB0eXBlczogVGhlbWVCdG5UeXBlW10gPSBbXG4gICAgeyBrZXk6ICdkZWZhdWx0JywgdGV4dDogJ0RlZmF1bHQgVGhlbWUnIH0sXG4gICAgeyBrZXk6ICdkYXJrJywgdGV4dDogJ0RhcmsgVGhlbWUnIH0sXG4gICAgeyBrZXk6ICdjb21wYWN0JywgdGV4dDogJ0NvbXBhY3QgVGhlbWUnIH1cbiAgXTtcbiAgQElucHV0KCkgZGV2VGlwcyA9IGBXaGVuIHRoZSBkYXJrLmNzcyBmaWxlIGNhbid0IGJlIGZvdW5kLCB5b3UgbmVlZCB0byBydW4gaXQgb25jZTogbnBtIHJ1biB0aGVtZWA7XG4gIEBJbnB1dCgpIGRlcGxveVVybCA9ICcnO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgdGhlbWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgcHJpdmF0ZSBkaXIkID0gdGhpcy5kaXJlY3Rpb25hbGl0eS5jaGFuZ2U/LnBpcGUodGFrZVVudGlsRGVzdHJveWVkKCkpO1xuICBkaXI6IERpcmVjdGlvbiA9ICdsdHInO1xuICBwcml2YXRlIGtleSA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGNvbmZpZ1NydjogQWxhaW5Db25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBOelNhZmVBbnksXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBkaXJlY3Rpb25hbGl0eTogRGlyZWN0aW9uYWxpdHksXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChBTEFJTl9USEVNRV9CVE5fS0VZUykgS0VZUzogc3RyaW5nLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHtcbiAgICB0aGlzLmtleSA9IEtFWVMgPz8gJ3NpdGUtdGhlbWUnO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5kaXIgPSB0aGlzLmRpcmVjdGlvbmFsaXR5LnZhbHVlO1xuICAgIHRoaXMuZGlyJC5zdWJzY3JpYmUoKGRpcmVjdGlvbjogRGlyZWN0aW9uKSA9PiB7XG4gICAgICB0aGlzLmRpciA9IGRpcmVjdGlvbjtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgICB0aGlzLmluaXRUaGVtZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0VGhlbWUoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnRoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5rZXkpIHx8ICdkZWZhdWx0JztcbiAgICB0aGlzLnVwZGF0ZUNoYXJ0VGhlbWUoKTtcbiAgICB0aGlzLm9uVGhlbWVDaGFuZ2UodGhpcy50aGVtZSk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUNoYXJ0VGhlbWUoKTogdm9pZCB7XG4gICAgdGhpcy5jb25maWdTcnYuc2V0KCdjaGFydCcsIHsgdGhlbWU6IHRoaXMudGhlbWUgPT09ICdkYXJrJyA/ICdkYXJrJyA6ICcnIH0pO1xuICB9XG5cbiAgb25UaGVtZUNoYW5nZSh0aGVtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnRoZW1lID0gdGhlbWU7XG4gICAgdGhpcy50aGVtZUNoYW5nZS5lbWl0KHRoZW1lKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmRvYy5ib2R5LCAnZGF0YS10aGVtZScsIHRoZW1lKTtcbiAgICBjb25zdCBkb20gPSB0aGlzLmRvYy5nZXRFbGVtZW50QnlJZCh0aGlzLmtleSk7XG4gICAgaWYgKGRvbSkge1xuICAgICAgZG9tLnJlbW92ZSgpO1xuICAgIH1cbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh0aGlzLmtleSk7XG4gICAgaWYgKHRoZW1lICE9PSAnZGVmYXVsdCcpIHtcbiAgICAgIGNvbnN0IGVsID0gdGhpcy5kb2MuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgZWwudHlwZSA9ICd0ZXh0L2Nzcyc7XG4gICAgICBlbC5yZWwgPSAnc3R5bGVzaGVldCc7XG4gICAgICBlbC5pZCA9IHRoaXMua2V5O1xuICAgICAgZWwuaHJlZiA9IGAke3RoaXMuZGVwbG95VXJsfWFzc2V0cy9zdHlsZS4ke3RoZW1lfS5jc3NgO1xuXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLmtleSwgdGhlbWUpO1xuICAgICAgdGhpcy5kb2MuYm9keS5hcHBlbmQoZWwpO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZUNoYXJ0VGhlbWUoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGNvbnN0IGVsID0gdGhpcy5kb2MuZ2V0RWxlbWVudEJ5SWQodGhpcy5rZXkpO1xuICAgIGlmIChlbCAhPSBudWxsKSB7XG4gICAgICB0aGlzLmRvYy5ib2R5LnJlbW92ZUNoaWxkKGVsKTtcbiAgICB9XG4gIH1cbn1cbiIsIjxkaXZcbiAgY2xhc3M9XCJhbnQtYXZhdGFyIGFudC1hdmF0YXItY2lyY2xlIGFudC1hdmF0YXItaWNvblwiXG4gIG56LWRyb3Bkb3duXG4gIG56UGxhY2VtZW50PVwidG9wQ2VudGVyXCJcbiAgW256RHJvcGRvd25NZW51XT1cInR5cGVzLmxlbmd0aCA+IDAgPyBtZW51IDogbnVsbFwiXG4+XG4gIDxzdmdcbiAgICBuei10b29sdGlwXG4gICAgW256VG9vbHRpcFRpdGxlXT1cImlzRGV2ID8gZGV2VGlwcyA6IG51bGxcIlxuICAgIGNsYXNzPVwiYW50aWNvblwiXG4gICAgcm9sZT1cImltZ1wiXG4gICAgd2lkdGg9XCIyMVwiXG4gICAgaGVpZ2h0PVwiMjFcIlxuICAgIHZpZXdCb3g9XCIwIDAgMjEgMjFcIlxuICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICA+XG4gICAgPGcgZmlsbC1ydWxlPVwiZXZlbm9kZFwiPlxuICAgICAgPGcgZmlsbC1ydWxlPVwibm9uemVyb1wiPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGQ9XCJNNy4wMiAzLjYzNWwxMi41MTggMTIuNTE4YTEuODYzIDEuODYzIDAgMDEwIDIuNjM1bC0xLjMxNyAxLjMxOGExLjg2MyAxLjg2MyAwIDAxLTIuNjM1IDBMMy4wNjggNy41ODhBMi43OTUgMi43OTUgMCAxMTcuMDIgMy42MzV6bTIuMDkgMTQuNDI4YS45MzIuOTMyIDAgMTEwIDEuODY0LjkzMi45MzIgMCAwMTAtMS44NjR6bS0uMDQzLTkuNzQ3TDcuNzUgOS42MzVsOS4xNTQgOS4xNTMgMS4zMTgtMS4zMTctOS4xNTQtOS4xNTV6TTMuNTIgMTIuNDczYy41MTQgMCAuOTMxLjQxNy45MzEuOTMxdi45MzJoLjkzMmEuOTMyLjkzMiAwIDExMCAxLjg2NGgtLjkzMnYuOTMxYS45MzIuOTMyIDAgMDEtMS44NjMgMGwtLjAwMS0uOTMxaC0uOTNhLjkzMi45MzIgMCAwMTAtMS44NjRoLjkzdi0uOTMyYzAtLjUxNC40MTgtLjkzMS45MzMtLjkzMXptMTUuMzc0LTMuNzI3YTEuMzk4IDEuMzk4IDAgMTEwIDIuNzk1IDEuMzk4IDEuMzk4IDAgMDEwLTIuNzk1ek00LjM4NSA0Ljk1M2EuOTMyLjkzMiAwIDAwMCAxLjMxN2wyLjA0NiAyLjA0N0w3Ljc1IDcgNS43MDMgNC45NTNhLjkzMi45MzIgMCAwMC0xLjMxOCAwek0xNC43MDEuMzZhLjkzMi45MzIgMCAwMS45MzEuOTMydi45MzFoLjkzMmEuOTMyLjkzMiAwIDAxMCAxLjg2NGgtLjkzM2wuMDAxLjkzMmEuOTMyLjkzMiAwIDExLTEuODYzIDBsLS4wMDEtLjkzMmgtLjkzYS45MzIuOTMyIDAgMTEwLTEuODY0aC45M3YtLjkzMWEuOTMyLjkzMiAwIDAxLjkzMy0uOTMyelwiXG4gICAgICAgIC8+XG4gICAgICA8L2c+XG4gICAgPC9nPlxuICA8L3N2Zz5cbiAgPG56LWRyb3Bkb3duLW1lbnUgI21lbnU9XCJuekRyb3Bkb3duTWVudVwiPlxuICAgIDx1bCBuei1tZW51IG56U2VsZWN0YWJsZT5cbiAgICAgIEBmb3IgKGkgb2YgdHlwZXM7IHRyYWNrICRpbmRleCkge1xuICAgICAgICA8bGkgbnotbWVudS1pdGVtIChjbGljayk9XCJvblRoZW1lQ2hhbmdlKGkua2V5KVwiPnt7IGkudGV4dCB9fTwvbGk+XG4gICAgICB9XG4gICAgPC91bD5cbiAgPC9uei1kcm9wZG93bi1tZW51PlxuPC9kaXY+XG4iXX0=