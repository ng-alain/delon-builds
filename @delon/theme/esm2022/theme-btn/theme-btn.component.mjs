import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, EventEmitter, inject, Inject, InjectionToken, Input, isDevMode, Optional, Output } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import * as i0 from "@angular/core";
import * as i1 from "@delon/util/config";
import * as i2 from "@angular/cdk/platform";
import * as i3 from "@angular/cdk/bidi";
import * as i4 from "@angular/common";
import * as i5 from "ng-zorro-antd/menu";
import * as i6 from "ng-zorro-antd/dropdown";
import * as i7 from "ng-zorro-antd/tooltip";
export const ALAIN_THEME_BTN_KEYS = new InjectionToken('ALAIN_THEME_BTN_KEYS');
export class ThemeBtnComponent {
    constructor(renderer, configSrv, platform, doc, directionality, KEYS, cdr) {
        this.renderer = renderer;
        this.configSrv = configSrv;
        this.platform = platform;
        this.doc = doc;
        this.directionality = directionality;
        this.KEYS = KEYS;
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
        this.destroy$ = inject(DestroyRef);
        this.dir = 'ltr';
    }
    ngOnInit() {
        this.dir = this.directionality.value;
        this.directionality.change?.pipe(takeUntilDestroyed(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
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
        this.themeChange.emit(theme);
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
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.7", ngImport: i0, type: ThemeBtnComponent, deps: [{ token: i0.Renderer2 }, { token: i1.AlainConfigService }, { token: i2.Platform }, { token: DOCUMENT }, { token: i3.Directionality, optional: true }, { token: ALAIN_THEME_BTN_KEYS }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.7", type: ThemeBtnComponent, selector: "theme-btn", inputs: { types: "types", devTips: "devTips", deployUrl: "deployUrl" }, outputs: { themeChange: "themeChange" }, host: { properties: { "class.theme-btn": "true", "class.theme-btn-rtl": "dir === 'rtl'" } }, ngImport: i0, template: "<div\n  class=\"ant-avatar ant-avatar-circle ant-avatar-icon\"\n  nz-dropdown\n  nzPlacement=\"topCenter\"\n  [nzDropdownMenu]=\"types.length > 0 ? menu : null\"\n>\n  <svg\n    nz-tooltip\n    [nzTooltipTitle]=\"isDev ? devTips : null\"\n    class=\"anticon\"\n    role=\"img\"\n    width=\"21\"\n    height=\"21\"\n    viewBox=\"0 0 21 21\"\n    fill=\"currentColor\"\n  >\n    <g fill-rule=\"evenodd\">\n      <g fill-rule=\"nonzero\">\n        <path\n          d=\"M7.02 3.635l12.518 12.518a1.863 1.863 0 010 2.635l-1.317 1.318a1.863 1.863 0 01-2.635 0L3.068 7.588A2.795 2.795 0 117.02 3.635zm2.09 14.428a.932.932 0 110 1.864.932.932 0 010-1.864zm-.043-9.747L7.75 9.635l9.154 9.153 1.318-1.317-9.154-9.155zM3.52 12.473c.514 0 .931.417.931.931v.932h.932a.932.932 0 110 1.864h-.932v.931a.932.932 0 01-1.863 0l-.001-.931h-.93a.932.932 0 010-1.864h.93v-.932c0-.514.418-.931.933-.931zm15.374-3.727a1.398 1.398 0 110 2.795 1.398 1.398 0 010-2.795zM4.385 4.953a.932.932 0 000 1.317l2.046 2.047L7.75 7 5.703 4.953a.932.932 0 00-1.318 0zM14.701.36a.932.932 0 01.931.932v.931h.932a.932.932 0 010 1.864h-.933l.001.932a.932.932 0 11-1.863 0l-.001-.932h-.93a.932.932 0 110-1.864h.93v-.931a.932.932 0 01.933-.932z\"\n        ></path>\n      </g>\n    </g>\n  </svg>\n  <nz-dropdown-menu #menu=\"nzDropdownMenu\">\n    <ul nz-menu nzSelectable>\n      <li nz-menu-item *ngFor=\"let i of types\" (click)=\"onThemeChange(i.key)\">{{ i.text }}</li>\n    </ul>\n  </nz-dropdown-menu>\n</div>\n", dependencies: [{ kind: "directive", type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i5.NzMenuDirective, selector: "[nz-menu]", inputs: ["nzInlineIndent", "nzTheme", "nzMode", "nzInlineCollapsed", "nzSelectable"], outputs: ["nzClick"], exportAs: ["nzMenu"] }, { kind: "directive", type: i5.NzMenuItemDirective, selector: "[nz-menu-item]", inputs: ["nzPaddingLeft", "nzDisabled", "nzSelected", "nzDanger", "nzMatchRouterExact", "nzMatchRouter"], exportAs: ["nzMenuItem"] }, { kind: "directive", type: i6.NzDropDownDirective, selector: "[nz-dropdown]", inputs: ["nzDropdownMenu", "nzTrigger", "nzMatchWidthElement", "nzBackdrop", "nzClickHide", "nzDisabled", "nzVisible", "nzOverlayClassName", "nzOverlayStyle", "nzPlacement"], outputs: ["nzVisibleChange"], exportAs: ["nzDropdown"] }, { kind: "component", type: i6.NzDropdownMenuComponent, selector: "nz-dropdown-menu", exportAs: ["nzDropdownMenu"] }, { kind: "directive", type: i7.NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.7", ngImport: i0, type: ThemeBtnComponent, decorators: [{
            type: Component,
            args: [{ selector: 'theme-btn', host: {
                        '[class.theme-btn]': `true`,
                        '[class.theme-btn-rtl]': `dir === 'rtl'`
                    }, changeDetection: ChangeDetectionStrategy.OnPush, template: "<div\n  class=\"ant-avatar ant-avatar-circle ant-avatar-icon\"\n  nz-dropdown\n  nzPlacement=\"topCenter\"\n  [nzDropdownMenu]=\"types.length > 0 ? menu : null\"\n>\n  <svg\n    nz-tooltip\n    [nzTooltipTitle]=\"isDev ? devTips : null\"\n    class=\"anticon\"\n    role=\"img\"\n    width=\"21\"\n    height=\"21\"\n    viewBox=\"0 0 21 21\"\n    fill=\"currentColor\"\n  >\n    <g fill-rule=\"evenodd\">\n      <g fill-rule=\"nonzero\">\n        <path\n          d=\"M7.02 3.635l12.518 12.518a1.863 1.863 0 010 2.635l-1.317 1.318a1.863 1.863 0 01-2.635 0L3.068 7.588A2.795 2.795 0 117.02 3.635zm2.09 14.428a.932.932 0 110 1.864.932.932 0 010-1.864zm-.043-9.747L7.75 9.635l9.154 9.153 1.318-1.317-9.154-9.155zM3.52 12.473c.514 0 .931.417.931.931v.932h.932a.932.932 0 110 1.864h-.932v.931a.932.932 0 01-1.863 0l-.001-.931h-.93a.932.932 0 010-1.864h.93v-.932c0-.514.418-.931.933-.931zm15.374-3.727a1.398 1.398 0 110 2.795 1.398 1.398 0 010-2.795zM4.385 4.953a.932.932 0 000 1.317l2.046 2.047L7.75 7 5.703 4.953a.932.932 0 00-1.318 0zM14.701.36a.932.932 0 01.931.932v.931h.932a.932.932 0 010 1.864h-.933l.001.932a.932.932 0 11-1.863 0l-.001-.932h-.93a.932.932 0 110-1.864h.93v-.931a.932.932 0 01.933-.932z\"\n        ></path>\n      </g>\n    </g>\n  </svg>\n  <nz-dropdown-menu #menu=\"nzDropdownMenu\">\n    <ul nz-menu nzSelectable>\n      <li nz-menu-item *ngFor=\"let i of types\" (click)=\"onThemeChange(i.key)\">{{ i.text }}</li>\n    </ul>\n  </nz-dropdown-menu>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: i1.AlainConfigService }, { type: i2.Platform }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: i3.Directionality, decorators: [{
                    type: Optional
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [ALAIN_THEME_BTN_KEYS]
                }] }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { types: [{
                type: Input
            }], devTips: [{
                type: Input
            }], deployUrl: [{
                type: Input
            }], themeChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnRuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lL3RoZW1lLWJ0bi90aGVtZS1idG4uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdGhlbWUvdGhlbWUtYnRuL3RoZW1lLWJ0bi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUNMLHVCQUF1QixFQUV2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixNQUFNLEVBQ04sTUFBTSxFQUNOLGNBQWMsRUFDZCxLQUFLLEVBQ0wsU0FBUyxFQUdULFFBQVEsRUFDUixNQUFNLEVBRVAsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7Ozs7OztBQVVoRSxNQUFNLENBQUMsTUFBTSxvQkFBb0IsR0FBRyxJQUFJLGNBQWMsQ0FBUyxzQkFBc0IsQ0FBQyxDQUFDO0FBV3ZGLE1BQU0sT0FBTyxpQkFBaUI7SUFjNUIsWUFDVSxRQUFtQixFQUNuQixTQUE2QixFQUM3QixRQUFrQixFQUNBLEdBQWMsRUFDcEIsY0FBOEIsRUFDWixJQUFZLEVBQzFDLEdBQXNCO1FBTnRCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsY0FBUyxHQUFULFNBQVMsQ0FBb0I7UUFDN0IsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNBLFFBQUcsR0FBSCxHQUFHLENBQVc7UUFDcEIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQ1osU0FBSSxHQUFKLElBQUksQ0FBUTtRQUMxQyxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQXBCeEIsVUFBSyxHQUFHLFNBQVMsQ0FBQztRQUMxQixVQUFLLEdBQUcsU0FBUyxFQUFFLENBQUM7UUFDWCxVQUFLLEdBQW1CO1lB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QyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztZQUN2QyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDMUI7UUFDRCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsV0FBVztRQUNULE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QyxJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUU7WUFDZCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDL0I7SUFDSCxDQUFDOzhHQTVFVSxpQkFBaUIscUdBa0JsQixRQUFRLDJEQUVSLG9CQUFvQjtrR0FwQm5CLGlCQUFpQiwrUEN6QzlCLHc4Q0E4QkE7OzJGRFdhLGlCQUFpQjtrQkFUN0IsU0FBUzsrQkFDRSxXQUFXLFFBRWY7d0JBQ0osbUJBQW1CLEVBQUUsTUFBTTt3QkFDM0IsdUJBQXVCLEVBQUUsZUFBZTtxQkFDekMsbUJBQ2dCLHVCQUF1QixDQUFDLE1BQU07OzBCQW9CNUMsTUFBTTsyQkFBQyxRQUFROzswQkFDZixRQUFROzswQkFDUixNQUFNOzJCQUFDLG9CQUFvQjs0RUFqQnJCLEtBQUs7c0JBQWIsS0FBSztnQkFLRyxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDYSxXQUFXO3NCQUE3QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBEZXN0cm95UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIGluamVjdCxcbiAgSW5qZWN0LFxuICBJbmplY3Rpb25Ub2tlbixcbiAgSW5wdXQsXG4gIGlzRGV2TW9kZSxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRha2VVbnRpbERlc3Ryb3llZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvcnhqcy1pbnRlcm9wJztcblxuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3V0aWwvY29uZmlnJztcbmltcG9ydCB0eXBlIHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBUaGVtZUJ0blR5cGUge1xuICBrZXk6IHN0cmluZztcbiAgdGV4dDogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgQUxBSU5fVEhFTUVfQlROX0tFWVMgPSBuZXcgSW5qZWN0aW9uVG9rZW48c3RyaW5nPignQUxBSU5fVEhFTUVfQlROX0tFWVMnKTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGhlbWUtYnRuJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RoZW1lLWJ0bi5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLnRoZW1lLWJ0bl0nOiBgdHJ1ZWAsXG4gICAgJ1tjbGFzcy50aGVtZS1idG4tcnRsXSc6IGBkaXIgPT09ICdydGwnYFxuICB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBUaGVtZUJ0bkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSB0aGVtZSA9ICdkZWZhdWx0JztcbiAgaXNEZXYgPSBpc0Rldk1vZGUoKTtcbiAgQElucHV0KCkgdHlwZXM6IFRoZW1lQnRuVHlwZVtdID0gW1xuICAgIHsga2V5OiAnZGVmYXVsdCcsIHRleHQ6ICdEZWZhdWx0IFRoZW1lJyB9LFxuICAgIHsga2V5OiAnZGFyaycsIHRleHQ6ICdEYXJrIFRoZW1lJyB9LFxuICAgIHsga2V5OiAnY29tcGFjdCcsIHRleHQ6ICdDb21wYWN0IFRoZW1lJyB9XG4gIF07XG4gIEBJbnB1dCgpIGRldlRpcHMgPSBgV2hlbiB0aGUgZGFyay5jc3MgZmlsZSBjYW4ndCBiZSBmb3VuZCwgeW91IG5lZWQgdG8gcnVuIGl0IG9uY2U6IG5wbSBydW4gdGhlbWVgO1xuICBASW5wdXQoKSBkZXBsb3lVcmwgPSAnJztcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHRoZW1lQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIHByaXZhdGUgZGVzdHJveSQgPSBpbmplY3QoRGVzdHJveVJlZik7XG4gIGRpcjogRGlyZWN0aW9uID0gJ2x0cic7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgY29uZmlnU3J2OiBBbGFpbkNvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0sXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IE56U2FmZUFueSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGRpcmVjdGlvbmFsaXR5OiBEaXJlY3Rpb25hbGl0eSxcbiAgICBASW5qZWN0KEFMQUlOX1RIRU1FX0JUTl9LRVlTKSBwcml2YXRlIEtFWVM6IHN0cmluZyxcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZGlyID0gdGhpcy5kaXJlY3Rpb25hbGl0eS52YWx1ZTtcbiAgICB0aGlzLmRpcmVjdGlvbmFsaXR5LmNoYW5nZT8ucGlwZSh0YWtlVW50aWxEZXN0cm95ZWQodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoZGlyZWN0aW9uOiBEaXJlY3Rpb24pID0+IHtcbiAgICAgIHRoaXMuZGlyID0gZGlyZWN0aW9uO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuICAgIHRoaXMuaW5pdFRoZW1lKCk7XG4gIH1cblxuICBwcml2YXRlIGluaXRUaGVtZSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudGhlbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLktFWVMpIHx8ICdkZWZhdWx0JztcbiAgICB0aGlzLnVwZGF0ZUNoYXJ0VGhlbWUoKTtcbiAgICB0aGlzLm9uVGhlbWVDaGFuZ2UodGhpcy50aGVtZSk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUNoYXJ0VGhlbWUoKTogdm9pZCB7XG4gICAgdGhpcy5jb25maWdTcnYuc2V0KCdjaGFydCcsIHsgdGhlbWU6IHRoaXMudGhlbWUgPT09ICdkYXJrJyA/ICdkYXJrJyA6ICcnIH0pO1xuICB9XG5cbiAgb25UaGVtZUNoYW5nZSh0aGVtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnRoZW1lID0gdGhlbWU7XG4gICAgdGhpcy50aGVtZUNoYW5nZS5lbWl0KHRoZW1lKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmRvYy5ib2R5LCAnZGF0YS10aGVtZScsIHRoZW1lKTtcbiAgICBjb25zdCBkb20gPSB0aGlzLmRvYy5nZXRFbGVtZW50QnlJZCh0aGlzLktFWVMpO1xuICAgIGlmIChkb20pIHtcbiAgICAgIGRvbS5yZW1vdmUoKTtcbiAgICB9XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odGhpcy5LRVlTKTtcbiAgICBpZiAodGhlbWUgIT09ICdkZWZhdWx0Jykge1xuICAgICAgY29uc3QgZWwgPSB0aGlzLmRvYy5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICBlbC50eXBlID0gJ3RleHQvY3NzJztcbiAgICAgIGVsLnJlbCA9ICdzdHlsZXNoZWV0JztcbiAgICAgIGVsLmlkID0gdGhpcy5LRVlTO1xuICAgICAgZWwuaHJlZiA9IGAke3RoaXMuZGVwbG95VXJsfWFzc2V0cy9zdHlsZS4ke3RoZW1lfS5jc3NgO1xuXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLktFWVMsIHRoZW1lKTtcbiAgICAgIHRoaXMuZG9jLmJvZHkuYXBwZW5kKGVsKTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVDaGFydFRoZW1lKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBjb25zdCBlbCA9IHRoaXMuZG9jLmdldEVsZW1lbnRCeUlkKHRoaXMuS0VZUyk7XG4gICAgaWYgKGVsICE9IG51bGwpIHtcbiAgICAgIHRoaXMuZG9jLmJvZHkucmVtb3ZlQ2hpbGQoZWwpO1xuICAgIH1cbiAgfVxufVxuIiwiPGRpdlxuICBjbGFzcz1cImFudC1hdmF0YXIgYW50LWF2YXRhci1jaXJjbGUgYW50LWF2YXRhci1pY29uXCJcbiAgbnotZHJvcGRvd25cbiAgbnpQbGFjZW1lbnQ9XCJ0b3BDZW50ZXJcIlxuICBbbnpEcm9wZG93bk1lbnVdPVwidHlwZXMubGVuZ3RoID4gMCA/IG1lbnUgOiBudWxsXCJcbj5cbiAgPHN2Z1xuICAgIG56LXRvb2x0aXBcbiAgICBbbnpUb29sdGlwVGl0bGVdPVwiaXNEZXYgPyBkZXZUaXBzIDogbnVsbFwiXG4gICAgY2xhc3M9XCJhbnRpY29uXCJcbiAgICByb2xlPVwiaW1nXCJcbiAgICB3aWR0aD1cIjIxXCJcbiAgICBoZWlnaHQ9XCIyMVwiXG4gICAgdmlld0JveD1cIjAgMCAyMSAyMVwiXG4gICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gID5cbiAgICA8ZyBmaWxsLXJ1bGU9XCJldmVub2RkXCI+XG4gICAgICA8ZyBmaWxsLXJ1bGU9XCJub256ZXJvXCI+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgZD1cIk03LjAyIDMuNjM1bDEyLjUxOCAxMi41MThhMS44NjMgMS44NjMgMCAwMTAgMi42MzVsLTEuMzE3IDEuMzE4YTEuODYzIDEuODYzIDAgMDEtMi42MzUgMEwzLjA2OCA3LjU4OEEyLjc5NSAyLjc5NSAwIDExNy4wMiAzLjYzNXptMi4wOSAxNC40MjhhLjkzMi45MzIgMCAxMTAgMS44NjQuOTMyLjkzMiAwIDAxMC0xLjg2NHptLS4wNDMtOS43NDdMNy43NSA5LjYzNWw5LjE1NCA5LjE1MyAxLjMxOC0xLjMxNy05LjE1NC05LjE1NXpNMy41MiAxMi40NzNjLjUxNCAwIC45MzEuNDE3LjkzMS45MzF2LjkzMmguOTMyYS45MzIuOTMyIDAgMTEwIDEuODY0aC0uOTMydi45MzFhLjkzMi45MzIgMCAwMS0xLjg2MyAwbC0uMDAxLS45MzFoLS45M2EuOTMyLjkzMiAwIDAxMC0xLjg2NGguOTN2LS45MzJjMC0uNTE0LjQxOC0uOTMxLjkzMy0uOTMxem0xNS4zNzQtMy43MjdhMS4zOTggMS4zOTggMCAxMTAgMi43OTUgMS4zOTggMS4zOTggMCAwMTAtMi43OTV6TTQuMzg1IDQuOTUzYS45MzIuOTMyIDAgMDAwIDEuMzE3bDIuMDQ2IDIuMDQ3TDcuNzUgNyA1LjcwMyA0Ljk1M2EuOTMyLjkzMiAwIDAwLTEuMzE4IDB6TTE0LjcwMS4zNmEuOTMyLjkzMiAwIDAxLjkzMS45MzJ2LjkzMWguOTMyYS45MzIuOTMyIDAgMDEwIDEuODY0aC0uOTMzbC4wMDEuOTMyYS45MzIuOTMyIDAgMTEtMS44NjMgMGwtLjAwMS0uOTMyaC0uOTNhLjkzMi45MzIgMCAxMTAtMS44NjRoLjkzdi0uOTMxYS45MzIuOTMyIDAgMDEuOTMzLS45MzJ6XCJcbiAgICAgICAgPjwvcGF0aD5cbiAgICAgIDwvZz5cbiAgICA8L2c+XG4gIDwvc3ZnPlxuICA8bnotZHJvcGRvd24tbWVudSAjbWVudT1cIm56RHJvcGRvd25NZW51XCI+XG4gICAgPHVsIG56LW1lbnUgbnpTZWxlY3RhYmxlPlxuICAgICAgPGxpIG56LW1lbnUtaXRlbSAqbmdGb3I9XCJsZXQgaSBvZiB0eXBlc1wiIChjbGljayk9XCJvblRoZW1lQ2hhbmdlKGkua2V5KVwiPnt7IGkudGV4dCB9fTwvbGk+XG4gICAgPC91bD5cbiAgPC9uei1kcm9wZG93bi1tZW51PlxuPC9kaXY+XG4iXX0=