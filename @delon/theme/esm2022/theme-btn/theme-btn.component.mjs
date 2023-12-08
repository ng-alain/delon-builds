import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Inject, InjectionToken, Input, isDevMode, Optional, Output } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import * as i0 from "@angular/core";
import * as i1 from "@delon/util/config";
import * as i2 from "@angular/cdk/platform";
import * as i3 from "@angular/cdk/bidi";
import * as i4 from "ng-zorro-antd/menu";
import * as i5 from "ng-zorro-antd/dropdown";
import * as i6 from "ng-zorro-antd/tooltip";
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: ThemeBtnComponent, deps: [{ token: i0.Renderer2 }, { token: i1.AlainConfigService }, { token: i2.Platform }, { token: DOCUMENT }, { token: i3.Directionality, optional: true }, { token: ALAIN_THEME_BTN_KEYS, optional: true }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.2", type: ThemeBtnComponent, isStandalone: true, selector: "theme-btn", inputs: { types: "types", devTips: "devTips", deployUrl: "deployUrl" }, outputs: { themeChange: "themeChange" }, host: { properties: { "class.theme-btn": "true", "class.theme-btn-rtl": "dir === 'rtl'" } }, ngImport: i0, template: "<div\n  class=\"ant-avatar ant-avatar-circle ant-avatar-icon\"\n  nz-dropdown\n  nzPlacement=\"topCenter\"\n  [nzDropdownMenu]=\"types.length > 0 ? menu : null\"\n>\n  <svg\n    nz-tooltip\n    [nzTooltipTitle]=\"isDev ? devTips : null\"\n    class=\"anticon\"\n    role=\"img\"\n    width=\"21\"\n    height=\"21\"\n    viewBox=\"0 0 21 21\"\n    fill=\"currentColor\"\n  >\n    <g fill-rule=\"evenodd\">\n      <g fill-rule=\"nonzero\">\n        <path\n          d=\"M7.02 3.635l12.518 12.518a1.863 1.863 0 010 2.635l-1.317 1.318a1.863 1.863 0 01-2.635 0L3.068 7.588A2.795 2.795 0 117.02 3.635zm2.09 14.428a.932.932 0 110 1.864.932.932 0 010-1.864zm-.043-9.747L7.75 9.635l9.154 9.153 1.318-1.317-9.154-9.155zM3.52 12.473c.514 0 .931.417.931.931v.932h.932a.932.932 0 110 1.864h-.932v.931a.932.932 0 01-1.863 0l-.001-.931h-.93a.932.932 0 010-1.864h.93v-.932c0-.514.418-.931.933-.931zm15.374-3.727a1.398 1.398 0 110 2.795 1.398 1.398 0 010-2.795zM4.385 4.953a.932.932 0 000 1.317l2.046 2.047L7.75 7 5.703 4.953a.932.932 0 00-1.318 0zM14.701.36a.932.932 0 01.931.932v.931h.932a.932.932 0 010 1.864h-.933l.001.932a.932.932 0 11-1.863 0l-.001-.932h-.93a.932.932 0 110-1.864h.93v-.931a.932.932 0 01.933-.932z\"\n        />\n      </g>\n    </g>\n  </svg>\n  <nz-dropdown-menu #menu=\"nzDropdownMenu\">\n    <ul nz-menu nzSelectable>\n      @for (i of types; track $index) {\n        <li nz-menu-item (click)=\"onThemeChange(i.key)\">{{ i.text }}</li>\n      }\n    </ul>\n  </nz-dropdown-menu>\n</div>\n", dependencies: [{ kind: "ngmodule", type: NzDropDownModule }, { kind: "directive", type: i4.NzMenuDirective, selector: "[nz-menu]", inputs: ["nzInlineIndent", "nzTheme", "nzMode", "nzInlineCollapsed", "nzSelectable"], outputs: ["nzClick"], exportAs: ["nzMenu"] }, { kind: "component", type: i4.NzMenuItemComponent, selector: "[nz-menu-item]", inputs: ["nzPaddingLeft", "nzDisabled", "nzSelected", "nzDanger", "nzMatchRouterExact", "nzMatchRouter"], exportAs: ["nzMenuItem"] }, { kind: "directive", type: i5.NzDropDownDirective, selector: "[nz-dropdown]", inputs: ["nzDropdownMenu", "nzTrigger", "nzMatchWidthElement", "nzBackdrop", "nzClickHide", "nzDisabled", "nzVisible", "nzOverlayClassName", "nzOverlayStyle", "nzPlacement"], outputs: ["nzVisibleChange"], exportAs: ["nzDropdown"] }, { kind: "component", type: i5.NzDropdownMenuComponent, selector: "nz-dropdown-menu", exportAs: ["nzDropdownMenu"] }, { kind: "ngmodule", type: NzToolTipModule }, { kind: "directive", type: i6.NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "cdkConnectedOverlayPush", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: ThemeBtnComponent, decorators: [{
            type: Component,
            args: [{ selector: 'theme-btn', host: {
                        '[class.theme-btn]': `true`,
                        '[class.theme-btn-rtl]': `dir === 'rtl'`
                    }, changeDetection: ChangeDetectionStrategy.OnPush, standalone: true, imports: [NzDropDownModule, NzToolTipModule], template: "<div\n  class=\"ant-avatar ant-avatar-circle ant-avatar-icon\"\n  nz-dropdown\n  nzPlacement=\"topCenter\"\n  [nzDropdownMenu]=\"types.length > 0 ? menu : null\"\n>\n  <svg\n    nz-tooltip\n    [nzTooltipTitle]=\"isDev ? devTips : null\"\n    class=\"anticon\"\n    role=\"img\"\n    width=\"21\"\n    height=\"21\"\n    viewBox=\"0 0 21 21\"\n    fill=\"currentColor\"\n  >\n    <g fill-rule=\"evenodd\">\n      <g fill-rule=\"nonzero\">\n        <path\n          d=\"M7.02 3.635l12.518 12.518a1.863 1.863 0 010 2.635l-1.317 1.318a1.863 1.863 0 01-2.635 0L3.068 7.588A2.795 2.795 0 117.02 3.635zm2.09 14.428a.932.932 0 110 1.864.932.932 0 010-1.864zm-.043-9.747L7.75 9.635l9.154 9.153 1.318-1.317-9.154-9.155zM3.52 12.473c.514 0 .931.417.931.931v.932h.932a.932.932 0 110 1.864h-.932v.931a.932.932 0 01-1.863 0l-.001-.931h-.93a.932.932 0 010-1.864h.93v-.932c0-.514.418-.931.933-.931zm15.374-3.727a1.398 1.398 0 110 2.795 1.398 1.398 0 010-2.795zM4.385 4.953a.932.932 0 000 1.317l2.046 2.047L7.75 7 5.703 4.953a.932.932 0 00-1.318 0zM14.701.36a.932.932 0 01.931.932v.931h.932a.932.932 0 010 1.864h-.933l.001.932a.932.932 0 11-1.863 0l-.001-.932h-.93a.932.932 0 110-1.864h.93v-.931a.932.932 0 01.933-.932z\"\n        />\n      </g>\n    </g>\n  </svg>\n  <nz-dropdown-menu #menu=\"nzDropdownMenu\">\n    <ul nz-menu nzSelectable>\n      @for (i of types; track $index) {\n        <li nz-menu-item (click)=\"onThemeChange(i.key)\">{{ i.text }}</li>\n      }\n    </ul>\n  </nz-dropdown-menu>\n</div>\n" }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnRuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lL3RoZW1lLWJ0bi90aGVtZS1idG4uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdGhlbWUvdGhlbWUtYnRuL3RoZW1lLWJ0bi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUNMLHVCQUF1QixFQUV2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLE1BQU0sRUFDTixjQUFjLEVBQ2QsS0FBSyxFQUNMLFNBQVMsRUFHVCxRQUFRLEVBQ1IsTUFBTSxFQUVQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBSWhFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzFELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7Ozs7QUFPeEQsTUFBTSxDQUFDLE1BQU0sb0JBQW9CLEdBQUcsSUFBSSxjQUFjLENBQVMsc0JBQXNCLENBQUMsQ0FBQztBQWF2RixNQUFNLE9BQU8saUJBQWlCO0lBZTVCLFlBQ1UsUUFBbUIsRUFDbkIsU0FBNkIsRUFDN0IsUUFBa0IsRUFDQSxHQUFjLEVBQ3BCLGNBQThCLEVBQ1IsSUFBWSxFQUM5QyxHQUFzQjtRQU50QixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLGNBQVMsR0FBVCxTQUFTLENBQW9CO1FBQzdCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDQSxRQUFHLEdBQUgsR0FBRyxDQUFXO1FBQ3BCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUUxQyxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQXJCeEIsVUFBSyxHQUFHLFNBQVMsQ0FBQztRQUMxQixV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LCBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIEluamVjdCxcbiAgSW5qZWN0aW9uVG9rZW4sXG4gIElucHV0LFxuICBpc0Rldk1vZGUsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0YWtlVW50aWxEZXN0cm95ZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlL3J4anMtaW50ZXJvcCc7XG5cbmltcG9ydCB7IEFsYWluQ29uZmlnU2VydmljZSB9IGZyb20gJ0BkZWxvbi91dGlsL2NvbmZpZyc7XG5pbXBvcnQgdHlwZSB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBOekRyb3BEb3duTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9kcm9wZG93bic7XG5pbXBvcnQgeyBOelRvb2xUaXBNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3Rvb2x0aXAnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRoZW1lQnRuVHlwZSB7XG4gIGtleTogc3RyaW5nO1xuICB0ZXh0OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBBTEFJTl9USEVNRV9CVE5fS0VZUyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxzdHJpbmc+KCdBTEFJTl9USEVNRV9CVE5fS0VZUycpO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0aGVtZS1idG4nLFxuICB0ZW1wbGF0ZVVybDogJy4vdGhlbWUtYnRuLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MudGhlbWUtYnRuXSc6IGB0cnVlYCxcbiAgICAnW2NsYXNzLnRoZW1lLWJ0bi1ydGxdJzogYGRpciA9PT0gJ3J0bCdgXG4gIH0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTnpEcm9wRG93bk1vZHVsZSwgTnpUb29sVGlwTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBUaGVtZUJ0bkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSB0aGVtZSA9ICdkZWZhdWx0JztcbiAgaXNEZXYgPSBpc0Rldk1vZGUoKTtcbiAgQElucHV0KCkgdHlwZXM6IFRoZW1lQnRuVHlwZVtdID0gW1xuICAgIHsga2V5OiAnZGVmYXVsdCcsIHRleHQ6ICdEZWZhdWx0IFRoZW1lJyB9LFxuICAgIHsga2V5OiAnZGFyaycsIHRleHQ6ICdEYXJrIFRoZW1lJyB9LFxuICAgIHsga2V5OiAnY29tcGFjdCcsIHRleHQ6ICdDb21wYWN0IFRoZW1lJyB9XG4gIF07XG4gIEBJbnB1dCgpIGRldlRpcHMgPSBgV2hlbiB0aGUgZGFyay5jc3MgZmlsZSBjYW4ndCBiZSBmb3VuZCwgeW91IG5lZWQgdG8gcnVuIGl0IG9uY2U6IG5wbSBydW4gdGhlbWVgO1xuICBASW5wdXQoKSBkZXBsb3lVcmwgPSAnJztcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHRoZW1lQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIHByaXZhdGUgZGlyJCA9IHRoaXMuZGlyZWN0aW9uYWxpdHkuY2hhbmdlPy5waXBlKHRha2VVbnRpbERlc3Ryb3llZCgpKTtcbiAgZGlyOiBEaXJlY3Rpb24gPSAnbHRyJztcbiAgcHJpdmF0ZSBrZXkgPSAnJztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBjb25maWdTcnY6IEFsYWluQ29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSxcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogTnpTYWZlQW55LFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZGlyZWN0aW9uYWxpdHk6IERpcmVjdGlvbmFsaXR5LFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoQUxBSU5fVEhFTUVfQlROX0tFWVMpIEtFWVM6IHN0cmluZyxcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7XG4gICAgdGhpcy5rZXkgPSBLRVlTID8/ICdzaXRlLXRoZW1lJztcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZGlyID0gdGhpcy5kaXJlY3Rpb25hbGl0eS52YWx1ZTtcbiAgICB0aGlzLmRpciQuc3Vic2NyaWJlKChkaXJlY3Rpb246IERpcmVjdGlvbikgPT4ge1xuICAgICAgdGhpcy5kaXIgPSBkaXJlY3Rpb247XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gICAgdGhpcy5pbml0VGhlbWUoKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdFRoZW1lKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy50aGVtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMua2V5KSB8fCAnZGVmYXVsdCc7XG4gICAgdGhpcy51cGRhdGVDaGFydFRoZW1lKCk7XG4gICAgdGhpcy5vblRoZW1lQ2hhbmdlKHRoaXMudGhlbWUpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVDaGFydFRoZW1lKCk6IHZvaWQge1xuICAgIHRoaXMuY29uZmlnU3J2LnNldCgnY2hhcnQnLCB7IHRoZW1lOiB0aGlzLnRoZW1lID09PSAnZGFyaycgPyAnZGFyaycgOiAnJyB9KTtcbiAgfVxuXG4gIG9uVGhlbWVDaGFuZ2UodGhlbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy50aGVtZSA9IHRoZW1lO1xuICAgIHRoaXMudGhlbWVDaGFuZ2UuZW1pdCh0aGVtZSk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5kb2MuYm9keSwgJ2RhdGEtdGhlbWUnLCB0aGVtZSk7XG4gICAgY29uc3QgZG9tID0gdGhpcy5kb2MuZ2V0RWxlbWVudEJ5SWQodGhpcy5rZXkpO1xuICAgIGlmIChkb20pIHtcbiAgICAgIGRvbS5yZW1vdmUoKTtcbiAgICB9XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odGhpcy5rZXkpO1xuICAgIGlmICh0aGVtZSAhPT0gJ2RlZmF1bHQnKSB7XG4gICAgICBjb25zdCBlbCA9IHRoaXMuZG9jLmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgIGVsLnR5cGUgPSAndGV4dC9jc3MnO1xuICAgICAgZWwucmVsID0gJ3N0eWxlc2hlZXQnO1xuICAgICAgZWwuaWQgPSB0aGlzLmtleTtcbiAgICAgIGVsLmhyZWYgPSBgJHt0aGlzLmRlcGxveVVybH1hc3NldHMvc3R5bGUuJHt0aGVtZX0uY3NzYDtcblxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5rZXksIHRoZW1lKTtcbiAgICAgIHRoaXMuZG9jLmJvZHkuYXBwZW5kKGVsKTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVDaGFydFRoZW1lKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBjb25zdCBlbCA9IHRoaXMuZG9jLmdldEVsZW1lbnRCeUlkKHRoaXMua2V5KTtcbiAgICBpZiAoZWwgIT0gbnVsbCkge1xuICAgICAgdGhpcy5kb2MuYm9keS5yZW1vdmVDaGlsZChlbCk7XG4gICAgfVxuICB9XG59XG4iLCI8ZGl2XG4gIGNsYXNzPVwiYW50LWF2YXRhciBhbnQtYXZhdGFyLWNpcmNsZSBhbnQtYXZhdGFyLWljb25cIlxuICBuei1kcm9wZG93blxuICBuelBsYWNlbWVudD1cInRvcENlbnRlclwiXG4gIFtuekRyb3Bkb3duTWVudV09XCJ0eXBlcy5sZW5ndGggPiAwID8gbWVudSA6IG51bGxcIlxuPlxuICA8c3ZnXG4gICAgbnotdG9vbHRpcFxuICAgIFtuelRvb2x0aXBUaXRsZV09XCJpc0RldiA/IGRldlRpcHMgOiBudWxsXCJcbiAgICBjbGFzcz1cImFudGljb25cIlxuICAgIHJvbGU9XCJpbWdcIlxuICAgIHdpZHRoPVwiMjFcIlxuICAgIGhlaWdodD1cIjIxXCJcbiAgICB2aWV3Qm94PVwiMCAwIDIxIDIxXCJcbiAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgPlxuICAgIDxnIGZpbGwtcnVsZT1cImV2ZW5vZGRcIj5cbiAgICAgIDxnIGZpbGwtcnVsZT1cIm5vbnplcm9cIj5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBkPVwiTTcuMDIgMy42MzVsMTIuNTE4IDEyLjUxOGExLjg2MyAxLjg2MyAwIDAxMCAyLjYzNWwtMS4zMTcgMS4zMThhMS44NjMgMS44NjMgMCAwMS0yLjYzNSAwTDMuMDY4IDcuNTg4QTIuNzk1IDIuNzk1IDAgMTE3LjAyIDMuNjM1em0yLjA5IDE0LjQyOGEuOTMyLjkzMiAwIDExMCAxLjg2NC45MzIuOTMyIDAgMDEwLTEuODY0em0tLjA0My05Ljc0N0w3Ljc1IDkuNjM1bDkuMTU0IDkuMTUzIDEuMzE4LTEuMzE3LTkuMTU0LTkuMTU1ek0zLjUyIDEyLjQ3M2MuNTE0IDAgLjkzMS40MTcuOTMxLjkzMXYuOTMyaC45MzJhLjkzMi45MzIgMCAxMTAgMS44NjRoLS45MzJ2LjkzMWEuOTMyLjkzMiAwIDAxLTEuODYzIDBsLS4wMDEtLjkzMWgtLjkzYS45MzIuOTMyIDAgMDEwLTEuODY0aC45M3YtLjkzMmMwLS41MTQuNDE4LS45MzEuOTMzLS45MzF6bTE1LjM3NC0zLjcyN2ExLjM5OCAxLjM5OCAwIDExMCAyLjc5NSAxLjM5OCAxLjM5OCAwIDAxMC0yLjc5NXpNNC4zODUgNC45NTNhLjkzMi45MzIgMCAwMDAgMS4zMTdsMi4wNDYgMi4wNDdMNy43NSA3IDUuNzAzIDQuOTUzYS45MzIuOTMyIDAgMDAtMS4zMTggMHpNMTQuNzAxLjM2YS45MzIuOTMyIDAgMDEuOTMxLjkzMnYuOTMxaC45MzJhLjkzMi45MzIgMCAwMTAgMS44NjRoLS45MzNsLjAwMS45MzJhLjkzMi45MzIgMCAxMS0xLjg2MyAwbC0uMDAxLS45MzJoLS45M2EuOTMyLjkzMiAwIDExMC0xLjg2NGguOTN2LS45MzFhLjkzMi45MzIgMCAwMS45MzMtLjkzMnpcIlxuICAgICAgICAvPlxuICAgICAgPC9nPlxuICAgIDwvZz5cbiAgPC9zdmc+XG4gIDxuei1kcm9wZG93bi1tZW51ICNtZW51PVwibnpEcm9wZG93bk1lbnVcIj5cbiAgICA8dWwgbnotbWVudSBuelNlbGVjdGFibGU+XG4gICAgICBAZm9yIChpIG9mIHR5cGVzOyB0cmFjayAkaW5kZXgpIHtcbiAgICAgICAgPGxpIG56LW1lbnUtaXRlbSAoY2xpY2spPVwib25UaGVtZUNoYW5nZShpLmtleSlcIj57eyBpLnRleHQgfX08L2xpPlxuICAgICAgfVxuICAgIDwvdWw+XG4gIDwvbnotZHJvcGRvd24tbWVudT5cbjwvZGl2PlxuIl19