import { Platform } from '@angular/cdk/platform';
import { Component, ChangeDetectionStrategy, Renderer2, NgModule } from '@angular/core';
import { AlainConfigService, DelonUtilModule } from '@delon/util';
import { CommonModule } from '@angular/common';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

/**
 * @fileoverview added by tsickle
 * Generated from: theme-btn.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LayoutThemeBtnComponent {
    /**
     * @param {?} renderer
     * @param {?} configSrv
     * @param {?} platform
     */
    constructor(renderer, configSrv, platform) {
        this.renderer = renderer;
        this.configSrv = configSrv;
        this.platform = platform;
        this.theme = 'default';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initTheme();
    }
    /**
     * @private
     * @return {?}
     */
    initTheme() {
        if (!this.platform.isBrowser) {
            return;
        }
        this.theme = ((/** @type {?} */ (localStorage.getItem('site-theme')))) || 'default';
        this.updateChartTheme();
        this.onThemeChange(this.theme);
    }
    /**
     * @private
     * @return {?}
     */
    updateChartTheme() {
        this.configSrv.set('chart', { theme: this.theme === 'dark' ? 'dark' : '' });
    }
    /**
     * @param {?} theme
     * @return {?}
     */
    onThemeChange(theme) {
        if (!this.platform.isBrowser) {
            return;
        }
        this.theme = theme;
        this.renderer.setAttribute(document.body, 'data-theme', theme);
        /** @type {?} */
        const dom = document.getElementById('site-theme');
        if (dom) {
            dom.remove();
        }
        localStorage.removeItem('site-theme');
        if (theme !== 'default') {
            /** @type {?} */
            const el = (this.el = document.createElement('link'));
            el.type = 'text/css';
            el.rel = 'stylesheet';
            el.id = 'site-theme';
            el.href = `assets/style.${theme}.css`;
            localStorage.setItem('site-theme', theme);
            document.body.append(el);
        }
        this.updateChartTheme();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.el) {
            document.body.removeChild(this.el);
        }
    }
}
LayoutThemeBtnComponent.decorators = [
    { type: Component, args: [{
                selector: 'layout-theme-btn',
                template: "<div class=\"ant-avatar ant-avatar-circle ant-avatar-icon\" nz-dropdown nzPlacement=\"topCenter\" [nzDropdownMenu]=\"menu\">\n  <svg class=\"anticon\" role=\"img\" width=\"21\" height=\"21\" viewBox=\"0 0 21 21\" fill=\"currentColor\">\n    <g fill-rule=\"evenodd\">\n      <g fill-rule=\"nonzero\">\n        <path\n          d=\"M7.02 3.635l12.518 12.518a1.863 1.863 0 010 2.635l-1.317 1.318a1.863 1.863 0 01-2.635 0L3.068 7.588A2.795 2.795 0 117.02 3.635zm2.09 14.428a.932.932 0 110 1.864.932.932 0 010-1.864zm-.043-9.747L7.75 9.635l9.154 9.153 1.318-1.317-9.154-9.155zM3.52 12.473c.514 0 .931.417.931.931v.932h.932a.932.932 0 110 1.864h-.932v.931a.932.932 0 01-1.863 0l-.001-.931h-.93a.932.932 0 010-1.864h.93v-.932c0-.514.418-.931.933-.931zm15.374-3.727a1.398 1.398 0 110 2.795 1.398 1.398 0 010-2.795zM4.385 4.953a.932.932 0 000 1.317l2.046 2.047L7.75 7 5.703 4.953a.932.932 0 00-1.318 0zM14.701.36a.932.932 0 01.931.932v.931h.932a.932.932 0 010 1.864h-.933l.001.932a.932.932 0 11-1.863 0l-.001-.932h-.93a.932.932 0 110-1.864h.93v-.931a.932.932 0 01.933-.932z\"\n        ></path>\n      </g>\n    </g>\n  </svg>\n  <nz-dropdown-menu #menu=\"nzDropdownMenu\">\n    <ul nz-menu nzSelectable>\n      <li nz-menu-item (click)=\"onThemeChange('default')\">Default Theme</li>\n      <li nz-menu-item (click)=\"onThemeChange('dark')\">Dark Theme</li>\n      <li nz-menu-item (click)=\"onThemeChange('compact')\">Compact Theme</li>\n    </ul>\n  </nz-dropdown-menu>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
LayoutThemeBtnComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: AlainConfigService },
    { type: Platform }
];
if (false) {
    /** @type {?} */
    LayoutThemeBtnComponent.prototype.theme;
    /**
     * @type {?}
     * @private
     */
    LayoutThemeBtnComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    LayoutThemeBtnComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    LayoutThemeBtnComponent.prototype.configSrv;
    /**
     * @type {?}
     * @private
     */
    LayoutThemeBtnComponent.prototype.platform;
}

/**
 * @fileoverview added by tsickle
 * Generated from: theme-btn.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [LayoutThemeBtnComponent];
class LayoutThemeBtnModule {
}
LayoutThemeBtnModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, DelonUtilModule, NzDropDownModule],
                declarations: [...COMPONENTS],
                exports: [...COMPONENTS],
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: layout-theme-btn.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { LayoutThemeBtnComponent, LayoutThemeBtnModule };
//# sourceMappingURL=layout-theme-btn.js.map
