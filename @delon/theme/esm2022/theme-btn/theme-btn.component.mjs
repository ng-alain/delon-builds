import { Directionality } from '@angular/cdk/bidi';
import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, EventEmitter, inject, InjectionToken, Input, isDevMode, Output, Renderer2 } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AlainConfigService } from '@delon/util/config';
import { NzDropDownDirective, NzDropdownMenuComponent } from 'ng-zorro-antd/dropdown';
import { NzMenuDirective, NzMenuItemComponent } from 'ng-zorro-antd/menu';
import { NzTooltipDirective } from 'ng-zorro-antd/tooltip';
import * as i0 from "@angular/core";
export const ALAIN_THEME_BTN_KEYS = new InjectionToken('ALAIN_THEME_BTN_KEYS');
export class ThemeBtnComponent {
    constructor() {
        this.doc = inject(DOCUMENT);
        this.platform = inject(Platform);
        this.renderer = inject(Renderer2);
        this.configSrv = inject(AlainConfigService);
        this.directionality = inject(Directionality);
        this.cdr = inject(ChangeDetectorRef);
        this.destroy$ = inject(DestroyRef);
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
        this.dir = 'ltr';
        this.key = inject(ALAIN_THEME_BTN_KEYS, { optional: true }) ?? 'site-theme';
    }
    ngOnInit() {
        this.dir = this.directionality.value;
        this.directionality.change.pipe(takeUntilDestroyed(this.destroy$)).subscribe((direction) => {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.11", ngImport: i0, type: ThemeBtnComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.11", type: ThemeBtnComponent, isStandalone: true, selector: "theme-btn", inputs: { types: "types", devTips: "devTips", deployUrl: "deployUrl" }, outputs: { themeChange: "themeChange" }, host: { properties: { "class.theme-btn": "true", "class.theme-btn-rtl": "dir === 'rtl'" } }, ngImport: i0, template: "<div\n  class=\"ant-avatar ant-avatar-circle ant-avatar-icon\"\n  nz-dropdown\n  nzPlacement=\"topCenter\"\n  [nzDropdownMenu]=\"types.length > 0 ? menu : null\"\n>\n  <svg\n    nz-tooltip\n    [nzTooltipTitle]=\"isDev ? devTips : null\"\n    class=\"anticon\"\n    role=\"img\"\n    width=\"21\"\n    height=\"21\"\n    viewBox=\"0 0 21 21\"\n    fill=\"currentColor\"\n  >\n    <g fill-rule=\"evenodd\">\n      <g fill-rule=\"nonzero\">\n        <path\n          d=\"M7.02 3.635l12.518 12.518a1.863 1.863 0 010 2.635l-1.317 1.318a1.863 1.863 0 01-2.635 0L3.068 7.588A2.795 2.795 0 117.02 3.635zm2.09 14.428a.932.932 0 110 1.864.932.932 0 010-1.864zm-.043-9.747L7.75 9.635l9.154 9.153 1.318-1.317-9.154-9.155zM3.52 12.473c.514 0 .931.417.931.931v.932h.932a.932.932 0 110 1.864h-.932v.931a.932.932 0 01-1.863 0l-.001-.931h-.93a.932.932 0 010-1.864h.93v-.932c0-.514.418-.931.933-.931zm15.374-3.727a1.398 1.398 0 110 2.795 1.398 1.398 0 010-2.795zM4.385 4.953a.932.932 0 000 1.317l2.046 2.047L7.75 7 5.703 4.953a.932.932 0 00-1.318 0zM14.701.36a.932.932 0 01.931.932v.931h.932a.932.932 0 010 1.864h-.933l.001.932a.932.932 0 11-1.863 0l-.001-.932h-.93a.932.932 0 110-1.864h.93v-.931a.932.932 0 01.933-.932z\"\n        />\n      </g>\n    </g>\n  </svg>\n  <nz-dropdown-menu #menu=\"nzDropdownMenu\">\n    <ul nz-menu nzSelectable>\n      @for (i of types; track $index) {\n        <li nz-menu-item (click)=\"onThemeChange(i.key)\">{{ i.text }}</li>\n      }\n    </ul>\n  </nz-dropdown-menu>\n</div>\n", dependencies: [{ kind: "directive", type: NzDropDownDirective, selector: "[nz-dropdown]", inputs: ["nzDropdownMenu", "nzTrigger", "nzMatchWidthElement", "nzBackdrop", "nzClickHide", "nzDisabled", "nzVisible", "nzOverlayClassName", "nzOverlayStyle", "nzPlacement"], outputs: ["nzVisibleChange"], exportAs: ["nzDropdown"] }, { kind: "component", type: NzDropdownMenuComponent, selector: "nz-dropdown-menu", exportAs: ["nzDropdownMenu"] }, { kind: "directive", type: NzMenuDirective, selector: "[nz-menu]", inputs: ["nzInlineIndent", "nzTheme", "nzMode", "nzInlineCollapsed", "nzSelectable"], outputs: ["nzClick"], exportAs: ["nzMenu"] }, { kind: "component", type: NzMenuItemComponent, selector: "[nz-menu-item]", inputs: ["nzPaddingLeft", "nzDisabled", "nzSelected", "nzDanger", "nzMatchRouterExact", "nzMatchRouter"], exportAs: ["nzMenuItem"] }, { kind: "directive", type: NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "cdkConnectedOverlayPush", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.11", ngImport: i0, type: ThemeBtnComponent, decorators: [{
            type: Component,
            args: [{ selector: 'theme-btn', host: {
                        '[class.theme-btn]': `true`,
                        '[class.theme-btn-rtl]': `dir === 'rtl'`
                    }, changeDetection: ChangeDetectionStrategy.OnPush, standalone: true, imports: [NzDropDownDirective, NzDropdownMenuComponent, NzMenuDirective, NzMenuItemComponent, NzTooltipDirective], template: "<div\n  class=\"ant-avatar ant-avatar-circle ant-avatar-icon\"\n  nz-dropdown\n  nzPlacement=\"topCenter\"\n  [nzDropdownMenu]=\"types.length > 0 ? menu : null\"\n>\n  <svg\n    nz-tooltip\n    [nzTooltipTitle]=\"isDev ? devTips : null\"\n    class=\"anticon\"\n    role=\"img\"\n    width=\"21\"\n    height=\"21\"\n    viewBox=\"0 0 21 21\"\n    fill=\"currentColor\"\n  >\n    <g fill-rule=\"evenodd\">\n      <g fill-rule=\"nonzero\">\n        <path\n          d=\"M7.02 3.635l12.518 12.518a1.863 1.863 0 010 2.635l-1.317 1.318a1.863 1.863 0 01-2.635 0L3.068 7.588A2.795 2.795 0 117.02 3.635zm2.09 14.428a.932.932 0 110 1.864.932.932 0 010-1.864zm-.043-9.747L7.75 9.635l9.154 9.153 1.318-1.317-9.154-9.155zM3.52 12.473c.514 0 .931.417.931.931v.932h.932a.932.932 0 110 1.864h-.932v.931a.932.932 0 01-1.863 0l-.001-.931h-.93a.932.932 0 010-1.864h.93v-.932c0-.514.418-.931.933-.931zm15.374-3.727a1.398 1.398 0 110 2.795 1.398 1.398 0 010-2.795zM4.385 4.953a.932.932 0 000 1.317l2.046 2.047L7.75 7 5.703 4.953a.932.932 0 00-1.318 0zM14.701.36a.932.932 0 01.931.932v.931h.932a.932.932 0 010 1.864h-.933l.001.932a.932.932 0 11-1.863 0l-.001-.932h-.93a.932.932 0 110-1.864h.93v-.931a.932.932 0 01.933-.932z\"\n        />\n      </g>\n    </g>\n  </svg>\n  <nz-dropdown-menu #menu=\"nzDropdownMenu\">\n    <ul nz-menu nzSelectable>\n      @for (i of types; track $index) {\n        <li nz-menu-item (click)=\"onThemeChange(i.key)\">{{ i.text }}</li>\n      }\n    </ul>\n  </nz-dropdown-menu>\n</div>\n" }]
        }], propDecorators: { types: [{
                type: Input
            }], devTips: [{
                type: Input
            }], deployUrl: [{
                type: Input
            }], themeChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnRuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lL3RoZW1lLWJ0bi90aGVtZS1idG4uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdGhlbWUvdGhlbWUtYnRuL3RoZW1lLWJ0bi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWEsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixNQUFNLEVBQ04sY0FBYyxFQUNkLEtBQUssRUFDTCxTQUFTLEVBR1QsTUFBTSxFQUNOLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUVoRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RixPQUFPLEVBQUUsZUFBZSxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDMUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0FBTzNELE1BQU0sQ0FBQyxNQUFNLG9CQUFvQixHQUFHLElBQUksY0FBYyxDQUFTLHNCQUFzQixDQUFDLENBQUM7QUFhdkYsTUFBTSxPQUFPLGlCQUFpQjtJQVg5QjtRQVltQixRQUFHLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3ZCLGFBQVEsR0FB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d0JBQ0osbUJBQW1CLEVBQUUsTUFBTTt3QkFDM0IsdUJBQXVCLEVBQUUsZUFBZTtxQkFDekMsbUJBQ2dCLHVCQUF1QixDQUFDLE1BQU0sY0FDbkMsSUFBSSxXQUNQLENBQUMsbUJBQW1CLEVBQUUsdUJBQXVCLEVBQUUsZUFBZSxFQUFFLG1CQUFtQixFQUFFLGtCQUFrQixDQUFDOzhCQWF4RyxLQUFLO3NCQUFiLEtBQUs7Z0JBS0csT0FBTztzQkFBZixLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ2EsV0FBVztzQkFBN0IsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRGVzdHJveVJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBpbmplY3QsXG4gIEluamVjdGlvblRva2VuLFxuICBJbnB1dCxcbiAgaXNEZXZNb2RlLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0YWtlVW50aWxEZXN0cm95ZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlL3J4anMtaW50ZXJvcCc7XG5cbmltcG9ydCB7IEFsYWluQ29uZmlnU2VydmljZSB9IGZyb20gJ0BkZWxvbi91dGlsL2NvbmZpZyc7XG5pbXBvcnQgeyBOekRyb3BEb3duRGlyZWN0aXZlLCBOekRyb3Bkb3duTWVudUNvbXBvbmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQvZHJvcGRvd24nO1xuaW1wb3J0IHsgTnpNZW51RGlyZWN0aXZlLCBOek1lbnVJdGVtQ29tcG9uZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC9tZW51JztcbmltcG9ydCB7IE56VG9vbHRpcERpcmVjdGl2ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvdG9vbHRpcCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGhlbWVCdG5UeXBlIHtcbiAga2V5OiBzdHJpbmc7XG4gIHRleHQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IEFMQUlOX1RIRU1FX0JUTl9LRVlTID0gbmV3IEluamVjdGlvblRva2VuPHN0cmluZz4oJ0FMQUlOX1RIRU1FX0JUTl9LRVlTJyk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RoZW1lLWJ0bicsXG4gIHRlbXBsYXRlVXJsOiAnLi90aGVtZS1idG4uY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy50aGVtZS1idG5dJzogYHRydWVgLFxuICAgICdbY2xhc3MudGhlbWUtYnRuLXJ0bF0nOiBgZGlyID09PSAncnRsJ2BcbiAgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtOekRyb3BEb3duRGlyZWN0aXZlLCBOekRyb3Bkb3duTWVudUNvbXBvbmVudCwgTnpNZW51RGlyZWN0aXZlLCBOek1lbnVJdGVtQ29tcG9uZW50LCBOelRvb2x0aXBEaXJlY3RpdmVdXG59KVxuZXhwb3J0IGNsYXNzIFRoZW1lQnRuQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIHJlYWRvbmx5IGRvYyA9IGluamVjdChET0NVTUVOVCk7XG4gIHByaXZhdGUgcmVhZG9ubHkgcGxhdGZvcm0gPSBpbmplY3QoUGxhdGZvcm0pO1xuICBwcml2YXRlIHJlYWRvbmx5IHJlbmRlcmVyID0gaW5qZWN0KFJlbmRlcmVyMik7XG4gIHByaXZhdGUgcmVhZG9ubHkgY29uZmlnU3J2ID0gaW5qZWN0KEFsYWluQ29uZmlnU2VydmljZSk7XG4gIHByaXZhdGUgcmVhZG9ubHkgZGlyZWN0aW9uYWxpdHkgPSBpbmplY3QoRGlyZWN0aW9uYWxpdHkpO1xuICBwcml2YXRlIHJlYWRvbmx5IGNkciA9IGluamVjdChDaGFuZ2VEZXRlY3RvclJlZik7XG4gIHByaXZhdGUgcmVhZG9ubHkgZGVzdHJveSQgPSBpbmplY3QoRGVzdHJveVJlZik7XG5cbiAgcHJpdmF0ZSB0aGVtZSA9ICdkZWZhdWx0JztcbiAgaXNEZXYgPSBpc0Rldk1vZGUoKTtcbiAgQElucHV0KCkgdHlwZXM6IFRoZW1lQnRuVHlwZVtdID0gW1xuICAgIHsga2V5OiAnZGVmYXVsdCcsIHRleHQ6ICdEZWZhdWx0IFRoZW1lJyB9LFxuICAgIHsga2V5OiAnZGFyaycsIHRleHQ6ICdEYXJrIFRoZW1lJyB9LFxuICAgIHsga2V5OiAnY29tcGFjdCcsIHRleHQ6ICdDb21wYWN0IFRoZW1lJyB9XG4gIF07XG4gIEBJbnB1dCgpIGRldlRpcHMgPSBgV2hlbiB0aGUgZGFyay5jc3MgZmlsZSBjYW4ndCBiZSBmb3VuZCwgeW91IG5lZWQgdG8gcnVuIGl0IG9uY2U6IG5wbSBydW4gdGhlbWVgO1xuICBASW5wdXQoKSBkZXBsb3lVcmwgPSAnJztcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHRoZW1lQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIGRpcj86IERpcmVjdGlvbiA9ICdsdHInO1xuICBwcml2YXRlIGtleSA9IGluamVjdChBTEFJTl9USEVNRV9CVE5fS0VZUywgeyBvcHRpb25hbDogdHJ1ZSB9KSA/PyAnc2l0ZS10aGVtZSc7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5kaXIgPSB0aGlzLmRpcmVjdGlvbmFsaXR5LnZhbHVlO1xuICAgIHRoaXMuZGlyZWN0aW9uYWxpdHkuY2hhbmdlLnBpcGUodGFrZVVudGlsRGVzdHJveWVkKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKGRpcmVjdGlvbjogRGlyZWN0aW9uKSA9PiB7XG4gICAgICB0aGlzLmRpciA9IGRpcmVjdGlvbjtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgICB0aGlzLmluaXRUaGVtZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0VGhlbWUoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnRoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5rZXkpIHx8ICdkZWZhdWx0JztcbiAgICB0aGlzLnVwZGF0ZUNoYXJ0VGhlbWUoKTtcbiAgICB0aGlzLm9uVGhlbWVDaGFuZ2UodGhpcy50aGVtZSk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUNoYXJ0VGhlbWUoKTogdm9pZCB7XG4gICAgdGhpcy5jb25maWdTcnYuc2V0KCdjaGFydCcsIHsgdGhlbWU6IHRoaXMudGhlbWUgPT09ICdkYXJrJyA/ICdkYXJrJyA6ICcnIH0pO1xuICB9XG5cbiAgb25UaGVtZUNoYW5nZSh0aGVtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnRoZW1lID0gdGhlbWU7XG4gICAgdGhpcy50aGVtZUNoYW5nZS5lbWl0KHRoZW1lKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmRvYy5ib2R5LCAnZGF0YS10aGVtZScsIHRoZW1lKTtcbiAgICBjb25zdCBkb20gPSB0aGlzLmRvYy5nZXRFbGVtZW50QnlJZCh0aGlzLmtleSk7XG4gICAgaWYgKGRvbSkge1xuICAgICAgZG9tLnJlbW92ZSgpO1xuICAgIH1cbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh0aGlzLmtleSk7XG4gICAgaWYgKHRoZW1lICE9PSAnZGVmYXVsdCcpIHtcbiAgICAgIGNvbnN0IGVsID0gdGhpcy5kb2MuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgZWwudHlwZSA9ICd0ZXh0L2Nzcyc7XG4gICAgICBlbC5yZWwgPSAnc3R5bGVzaGVldCc7XG4gICAgICBlbC5pZCA9IHRoaXMua2V5O1xuICAgICAgZWwuaHJlZiA9IGAke3RoaXMuZGVwbG95VXJsfWFzc2V0cy9zdHlsZS4ke3RoZW1lfS5jc3NgO1xuXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLmtleSwgdGhlbWUpO1xuICAgICAgdGhpcy5kb2MuYm9keS5hcHBlbmQoZWwpO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZUNoYXJ0VGhlbWUoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGNvbnN0IGVsID0gdGhpcy5kb2MuZ2V0RWxlbWVudEJ5SWQodGhpcy5rZXkpO1xuICAgIGlmIChlbCAhPSBudWxsKSB7XG4gICAgICB0aGlzLmRvYy5ib2R5LnJlbW92ZUNoaWxkKGVsKTtcbiAgICB9XG4gIH1cbn1cbiIsIjxkaXZcbiAgY2xhc3M9XCJhbnQtYXZhdGFyIGFudC1hdmF0YXItY2lyY2xlIGFudC1hdmF0YXItaWNvblwiXG4gIG56LWRyb3Bkb3duXG4gIG56UGxhY2VtZW50PVwidG9wQ2VudGVyXCJcbiAgW256RHJvcGRvd25NZW51XT1cInR5cGVzLmxlbmd0aCA+IDAgPyBtZW51IDogbnVsbFwiXG4+XG4gIDxzdmdcbiAgICBuei10b29sdGlwXG4gICAgW256VG9vbHRpcFRpdGxlXT1cImlzRGV2ID8gZGV2VGlwcyA6IG51bGxcIlxuICAgIGNsYXNzPVwiYW50aWNvblwiXG4gICAgcm9sZT1cImltZ1wiXG4gICAgd2lkdGg9XCIyMVwiXG4gICAgaGVpZ2h0PVwiMjFcIlxuICAgIHZpZXdCb3g9XCIwIDAgMjEgMjFcIlxuICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICA+XG4gICAgPGcgZmlsbC1ydWxlPVwiZXZlbm9kZFwiPlxuICAgICAgPGcgZmlsbC1ydWxlPVwibm9uemVyb1wiPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGQ9XCJNNy4wMiAzLjYzNWwxMi41MTggMTIuNTE4YTEuODYzIDEuODYzIDAgMDEwIDIuNjM1bC0xLjMxNyAxLjMxOGExLjg2MyAxLjg2MyAwIDAxLTIuNjM1IDBMMy4wNjggNy41ODhBMi43OTUgMi43OTUgMCAxMTcuMDIgMy42MzV6bTIuMDkgMTQuNDI4YS45MzIuOTMyIDAgMTEwIDEuODY0LjkzMi45MzIgMCAwMTAtMS44NjR6bS0uMDQzLTkuNzQ3TDcuNzUgOS42MzVsOS4xNTQgOS4xNTMgMS4zMTgtMS4zMTctOS4xNTQtOS4xNTV6TTMuNTIgMTIuNDczYy41MTQgMCAuOTMxLjQxNy45MzEuOTMxdi45MzJoLjkzMmEuOTMyLjkzMiAwIDExMCAxLjg2NGgtLjkzMnYuOTMxYS45MzIuOTMyIDAgMDEtMS44NjMgMGwtLjAwMS0uOTMxaC0uOTNhLjkzMi45MzIgMCAwMTAtMS44NjRoLjkzdi0uOTMyYzAtLjUxNC40MTgtLjkzMS45MzMtLjkzMXptMTUuMzc0LTMuNzI3YTEuMzk4IDEuMzk4IDAgMTEwIDIuNzk1IDEuMzk4IDEuMzk4IDAgMDEwLTIuNzk1ek00LjM4NSA0Ljk1M2EuOTMyLjkzMiAwIDAwMCAxLjMxN2wyLjA0NiAyLjA0N0w3Ljc1IDcgNS43MDMgNC45NTNhLjkzMi45MzIgMCAwMC0xLjMxOCAwek0xNC43MDEuMzZhLjkzMi45MzIgMCAwMS45MzEuOTMydi45MzFoLjkzMmEuOTMyLjkzMiAwIDAxMCAxLjg2NGgtLjkzM2wuMDAxLjkzMmEuOTMyLjkzMiAwIDExLTEuODYzIDBsLS4wMDEtLjkzMmgtLjkzYS45MzIuOTMyIDAgMTEwLTEuODY0aC45M3YtLjkzMWEuOTMyLjkzMiAwIDAxLjkzMy0uOTMyelwiXG4gICAgICAgIC8+XG4gICAgICA8L2c+XG4gICAgPC9nPlxuICA8L3N2Zz5cbiAgPG56LWRyb3Bkb3duLW1lbnUgI21lbnU9XCJuekRyb3Bkb3duTWVudVwiPlxuICAgIDx1bCBuei1tZW51IG56U2VsZWN0YWJsZT5cbiAgICAgIEBmb3IgKGkgb2YgdHlwZXM7IHRyYWNrICRpbmRleCkge1xuICAgICAgICA8bGkgbnotbWVudS1pdGVtIChjbGljayk9XCJvblRoZW1lQ2hhbmdlKGkua2V5KVwiPnt7IGkudGV4dCB9fTwvbGk+XG4gICAgICB9XG4gICAgPC91bD5cbiAgPC9uei1kcm9wZG93bi1tZW51PlxuPC9kaXY+XG4iXX0=