import { Directionality } from '@angular/cdk/bidi';
import { Platform } from '@angular/cdk/platform';
import { DOCUMENT, CommonModule } from '@angular/common';
import { isDevMode, Component, ChangeDetectionStrategy, Renderer2, Inject, Optional, Input, NgModule } from '@angular/core';
import { AlainConfigService } from '@delon/util/config';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

const ThemeBtnStorageKey = `site-theme`;
class ThemeBtnComponent {
    constructor(renderer, configSrv, platform, doc, directionality) {
        this.renderer = renderer;
        this.configSrv = configSrv;
        this.platform = platform;
        this.doc = doc;
        this.directionality = directionality;
        this.theme = 'default';
        this.isDev = isDevMode();
        this.types = [
            { key: 'default', text: 'Default Theme' },
            { key: 'dark', text: 'Dark Theme' },
            { key: 'compact', text: 'Compact Theme' },
        ];
        this.devTips = `When the dark.css file can't be found, you need to run it once: npm run theme`;
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
        this.theme = localStorage.getItem(ThemeBtnStorageKey) || 'default';
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
        const dom = this.doc.getElementById(ThemeBtnStorageKey);
        if (dom) {
            dom.remove();
        }
        localStorage.removeItem(ThemeBtnStorageKey);
        if (theme !== 'default') {
            const el = (this.el = this.doc.createElement('link'));
            el.type = 'text/css';
            el.rel = 'stylesheet';
            el.id = ThemeBtnStorageKey;
            el.href = `assets/style.${theme}.css`;
            localStorage.setItem(ThemeBtnStorageKey, theme);
            this.doc.body.append(el);
        }
        this.updateChartTheme();
    }
    ngOnDestroy() {
        if (this.el) {
            this.doc.body.removeChild(this.el);
        }
        this.destroy$.next();
        this.destroy$.complete();
    }
}
ThemeBtnComponent.decorators = [
    { type: Component, args: [{
                selector: 'theme-btn',
                template: "<div class=\"ant-avatar ant-avatar-circle ant-avatar-icon\" nz-dropdown nzPlacement=\"topCenter\" [nzDropdownMenu]=\"types.length > 0 ? menu : null\">\n  <svg nz-tooltip [nzTooltipTitle]=\"isDev ? devTips : null\" class=\"anticon\" role=\"img\" width=\"21\" height=\"21\" viewBox=\"0 0 21 21\" fill=\"currentColor\">\n    <g fill-rule=\"evenodd\">\n      <g fill-rule=\"nonzero\">\n        <path\n          d=\"M7.02 3.635l12.518 12.518a1.863 1.863 0 010 2.635l-1.317 1.318a1.863 1.863 0 01-2.635 0L3.068 7.588A2.795 2.795 0 117.02 3.635zm2.09 14.428a.932.932 0 110 1.864.932.932 0 010-1.864zm-.043-9.747L7.75 9.635l9.154 9.153 1.318-1.317-9.154-9.155zM3.52 12.473c.514 0 .931.417.931.931v.932h.932a.932.932 0 110 1.864h-.932v.931a.932.932 0 01-1.863 0l-.001-.931h-.93a.932.932 0 010-1.864h.93v-.932c0-.514.418-.931.933-.931zm15.374-3.727a1.398 1.398 0 110 2.795 1.398 1.398 0 010-2.795zM4.385 4.953a.932.932 0 000 1.317l2.046 2.047L7.75 7 5.703 4.953a.932.932 0 00-1.318 0zM14.701.36a.932.932 0 01.931.932v.931h.932a.932.932 0 010 1.864h-.933l.001.932a.932.932 0 11-1.863 0l-.001-.932h-.93a.932.932 0 110-1.864h.93v-.931a.932.932 0 01.933-.932z\"\n        ></path>\n      </g>\n    </g>\n  </svg>\n  <nz-dropdown-menu #menu=\"nzDropdownMenu\">\n    <ul nz-menu nzSelectable>\n      <li nz-menu-item *ngFor=\"let i of types\" (click)=\"onThemeChange(i.key)\">{{ i.text }}</li>\n    </ul>\n  </nz-dropdown-menu>\n</div>\n",
                host: {
                    '[class.theme-btn]': `true`,
                    '[class.theme-btn-rtl]': `dir === 'rtl'`,
                },
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
/** @nocollapse */
ThemeBtnComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: AlainConfigService },
    { type: Platform },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Directionality, decorators: [{ type: Optional }] }
];
ThemeBtnComponent.propDecorators = {
    types: [{ type: Input }],
    devTips: [{ type: Input }]
};

const COMPONENTS = [ThemeBtnComponent];
class ThemeBtnModule {
}
ThemeBtnModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, NzDropDownModule, NzToolTipModule],
                declarations: COMPONENTS,
                exports: COMPONENTS,
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { ThemeBtnComponent, ThemeBtnModule, ThemeBtnStorageKey };
//# sourceMappingURL=layout-theme-btn.js.map
