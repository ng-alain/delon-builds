/**
 * @fileoverview added by tsickle
 * Generated from: theme-btn.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, Input, isDevMode, Renderer2 } from '@angular/core';
import { AlainConfigService } from '@delon/util';
/** @type {?} */
export const ThemeBtnStorageKey = `site-theme`;
/**
 * @record
 */
export function ThemeBtnType() { }
if (false) {
    /** @type {?} */
    ThemeBtnType.prototype.key;
    /** @type {?} */
    ThemeBtnType.prototype.text;
}
export class ThemeBtnComponent {
    /**
     * @param {?} renderer
     * @param {?} configSrv
     * @param {?} platform
     * @param {?} doc
     */
    constructor(renderer, configSrv, platform, doc) {
        this.renderer = renderer;
        this.configSrv = configSrv;
        this.platform = platform;
        this.doc = doc;
        this.theme = 'default';
        this.isDev = isDevMode();
        this.types = [
            { key: 'default', text: 'Default Theme' },
            { key: 'dark', text: 'Dark Theme' },
            { key: 'compact', text: 'Compact Theme' },
        ];
        this.devTips = `When the dark.css file can't be found, you need to run it once: npm run theme`;
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
        this.theme = localStorage.getItem(ThemeBtnStorageKey) || 'default';
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
        this.renderer.setAttribute(this.doc.body, 'data-theme', theme);
        /** @type {?} */
        const dom = this.doc.getElementById(ThemeBtnStorageKey);
        if (dom) {
            dom.remove();
        }
        localStorage.removeItem(ThemeBtnStorageKey);
        if (theme !== 'default') {
            /** @type {?} */
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
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.el) {
            this.doc.body.removeChild(this.el);
        }
    }
}
ThemeBtnComponent.decorators = [
    { type: Component, args: [{
                selector: 'theme-btn',
                template: "<div class=\"ant-avatar ant-avatar-circle ant-avatar-icon\" nz-dropdown nzPlacement=\"topCenter\" [nzDropdownMenu]=\"types.length > 0 ? menu : null\">\n  <svg nz-tooltip [nzTooltipTitle]=\"isDev ? devTips : null\" class=\"anticon\" role=\"img\" width=\"21\" height=\"21\" viewBox=\"0 0 21 21\" fill=\"currentColor\">\n    <g fill-rule=\"evenodd\">\n      <g fill-rule=\"nonzero\">\n        <path\n          d=\"M7.02 3.635l12.518 12.518a1.863 1.863 0 010 2.635l-1.317 1.318a1.863 1.863 0 01-2.635 0L3.068 7.588A2.795 2.795 0 117.02 3.635zm2.09 14.428a.932.932 0 110 1.864.932.932 0 010-1.864zm-.043-9.747L7.75 9.635l9.154 9.153 1.318-1.317-9.154-9.155zM3.52 12.473c.514 0 .931.417.931.931v.932h.932a.932.932 0 110 1.864h-.932v.931a.932.932 0 01-1.863 0l-.001-.931h-.93a.932.932 0 010-1.864h.93v-.932c0-.514.418-.931.933-.931zm15.374-3.727a1.398 1.398 0 110 2.795 1.398 1.398 0 010-2.795zM4.385 4.953a.932.932 0 000 1.317l2.046 2.047L7.75 7 5.703 4.953a.932.932 0 00-1.318 0zM14.701.36a.932.932 0 01.931.932v.931h.932a.932.932 0 010 1.864h-.933l.001.932a.932.932 0 11-1.863 0l-.001-.932h-.93a.932.932 0 110-1.864h.93v-.931a.932.932 0 01.933-.932z\"\n        ></path>\n      </g>\n    </g>\n  </svg>\n  <nz-dropdown-menu #menu=\"nzDropdownMenu\">\n    <ul nz-menu nzSelectable>\n      <li nz-menu-item *ngFor=\"let i of types\" (click)=\"onThemeChange(i.key)\">{{ i.text }}</li>\n    </ul>\n  </nz-dropdown-menu>\n</div>\n",
                host: {
                    '[class.theme-btn]': `true`,
                },
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
ThemeBtnComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: AlainConfigService },
    { type: Platform },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
ThemeBtnComponent.propDecorators = {
    types: [{ type: Input }],
    devTips: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    ThemeBtnComponent.prototype.theme;
    /** @type {?} */
    ThemeBtnComponent.prototype.isDev;
    /** @type {?} */
    ThemeBtnComponent.prototype.types;
    /** @type {?} */
    ThemeBtnComponent.prototype.devTips;
    /**
     * @type {?}
     * @private
     */
    ThemeBtnComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    ThemeBtnComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    ThemeBtnComponent.prototype.configSrv;
    /**
     * @type {?}
     * @private
     */
    ThemeBtnComponent.prototype.platform;
    /**
     * @type {?}
     * @private
     */
    ThemeBtnComponent.prototype.doc;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnRuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90aGVtZS90aGVtZS1idG4vIiwic291cmNlcyI6WyJ0aGVtZS1idG4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFxQixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0gsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sYUFBYSxDQUFDOztBQUVqRCxNQUFNLE9BQU8sa0JBQWtCLEdBQUcsWUFBWTs7OztBQUU5QyxrQ0FHQzs7O0lBRkMsMkJBQVk7O0lBQ1osNEJBQWE7O0FBV2YsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7OztJQVc1QixZQUNVLFFBQW1CLEVBQ25CLFNBQTZCLEVBQzdCLFFBQWtCLEVBQ0EsR0FBUTtRQUgxQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLGNBQVMsR0FBVCxTQUFTLENBQW9CO1FBQzdCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDQSxRQUFHLEdBQUgsR0FBRyxDQUFLO1FBZDVCLFVBQUssR0FBRyxTQUFTLENBQUM7UUFDMUIsVUFBSyxHQUFHLFNBQVMsRUFBRSxDQUFDO1FBQ1gsVUFBSyxHQUFtQjtZQUMvQixFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRTtZQUN6QyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRTtZQUNuQyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRTtTQUMxQyxDQUFDO1FBQ08sWUFBTyxHQUFHLCtF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c0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5qZWN0LCBJbnB1dCwgaXNEZXZNb2RlLCBPbkRlc3Ryb3ksIE9uSW5pdCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbmV4cG9ydCBjb25zdCBUaGVtZUJ0blN0b3JhZ2VLZXkgPSBgc2l0ZS10aGVtZWA7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGhlbWVCdG5UeXBlIHtcbiAga2V5OiBzdHJpbmc7XG4gIHRleHQ6IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGhlbWUtYnRuJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RoZW1lLWJ0bi5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLnRoZW1lLWJ0bl0nOiBgdHJ1ZWAsXG4gIH0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBUaGVtZUJ0bkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSB0aGVtZSA9ICdkZWZhdWx0JztcbiAgaXNEZXYgPSBpc0Rldk1vZGUoKTtcbiAgQElucHV0KCkgdHlwZXM6IFRoZW1lQnRuVHlwZVtdID0gW1xuICAgIHsga2V5OiAnZGVmYXVsdCcsIHRleHQ6ICdEZWZhdWx0IFRoZW1lJyB9LFxuICAgIHsga2V5OiAnZGFyaycsIHRleHQ6ICdEYXJrIFRoZW1lJyB9LFxuICAgIHsga2V5OiAnY29tcGFjdCcsIHRleHQ6ICdDb21wYWN0IFRoZW1lJyB9LFxuICBdO1xuICBASW5wdXQoKSBkZXZUaXBzID0gYFdoZW4gdGhlIGRhcmsuY3NzIGZpbGUgY2FuJ3QgYmUgZm91bmQsIHlvdSBuZWVkIHRvIHJ1biBpdCBvbmNlOiBucG0gcnVuIHRoZW1lYDtcbiAgcHJpdmF0ZSBlbCE6IEhUTUxMaW5rRWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBjb25maWdTcnY6IEFsYWluQ29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSxcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogYW55LFxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pbml0VGhlbWUoKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdFRoZW1lKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy50aGVtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFRoZW1lQnRuU3RvcmFnZUtleSkgfHwgJ2RlZmF1bHQnO1xuICAgIHRoaXMudXBkYXRlQ2hhcnRUaGVtZSgpO1xuICAgIHRoaXMub25UaGVtZUNoYW5nZSh0aGlzLnRoZW1lKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlQ2hhcnRUaGVtZSgpOiB2b2lkIHtcbiAgICB0aGlzLmNvbmZpZ1Nydi5zZXQoJ2NoYXJ0JywgeyB0aGVtZTogdGhpcy50aGVtZSA9PT0gJ2RhcmsnID8gJ2RhcmsnIDogJycgfSk7XG4gIH1cblxuICBvblRoZW1lQ2hhbmdlKHRoZW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudGhlbWUgPSB0aGVtZTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmRvYy5ib2R5LCAnZGF0YS10aGVtZScsIHRoZW1lKTtcbiAgICBjb25zdCBkb20gPSB0aGlzLmRvYy5nZXRFbGVtZW50QnlJZChUaGVtZUJ0blN0b3JhZ2VLZXkpO1xuICAgIGlmIChkb20pIHtcbiAgICAgIGRvbS5yZW1vdmUoKTtcbiAgICB9XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oVGhlbWVCdG5TdG9yYWdlS2V5KTtcbiAgICBpZiAodGhlbWUgIT09ICdkZWZhdWx0Jykge1xuICAgICAgY29uc3QgZWwgPSAodGhpcy5lbCA9IHRoaXMuZG9jLmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKSk7XG4gICAgICBlbC50eXBlID0gJ3RleHQvY3NzJztcbiAgICAgIGVsLnJlbCA9ICdzdHlsZXNoZWV0JztcbiAgICAgIGVsLmlkID0gVGhlbWVCdG5TdG9yYWdlS2V5O1xuICAgICAgZWwuaHJlZiA9IGBhc3NldHMvc3R5bGUuJHt0aGVtZX0uY3NzYDtcblxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oVGhlbWVCdG5TdG9yYWdlS2V5LCB0aGVtZSk7XG4gICAgICB0aGlzLmRvYy5ib2R5LmFwcGVuZChlbCk7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlQ2hhcnRUaGVtZSgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZWwpIHtcbiAgICAgIHRoaXMuZG9jLmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5lbCk7XG4gICAgfVxuICB9XG59XG4iXX0=