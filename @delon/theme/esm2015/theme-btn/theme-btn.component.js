/**
 * @fileoverview added by tsickle
 * Generated from: theme-btn.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * TIPS: When it does not take effect, you need to run it once: npm run theme
 */
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, Component, Renderer2 } from '@angular/core';
import { AlainConfigService } from '@delon/util';
export class LayoutThemeBtnComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnRuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90aGVtZS90aGVtZS1idG4vIiwic291cmNlcyI6WyJ0aGVtZS1idG4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBR0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQXFCLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFTakQsTUFBTSxPQUFPLHVCQUF1Qjs7Ozs7O0lBSWxDLFlBQW9CLFFBQW1CLEVBQVUsU0FBNkIsRUFBVSxRQUFrQjtRQUF0RixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVUsY0FBUyxHQUFULFNBQVMsQ0FBb0I7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBSDFHLFVBQUssR0FBYyxTQUFTLENBQUM7SUFHZ0YsQ0FBQzs7OztJQUU5RyxRQUFRO1FBQ04sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7Ozs7O0lBRU8sU0FBUztRQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUM1QixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsbUJBQUEsWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBYSxDQUFDLElBQUksU0FBUyxDQUFDO1FBQzVFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Ozs7O0lBRU8sZ0JBQWdCO1FBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzlFLENBQUM7Ozs7O0lBRUQsYUFBYSxDQUFDLEtBQWdCO1FBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUM1QixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQzs7Y0FDekQsR0FBRyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDO1FBQ2pELElBQUksR0FBRyxFQUFFO1lBQ1AsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ2Q7UUFDRCxZQUFZLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3RDLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTs7a0JBQ2pCLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNyRCxFQUFFLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztZQUNyQixFQUFFLENBQUMsR0FBRyxHQUFHLFlBQVksQ0FBQztZQUN0QixFQUFFLENBQUMsRUFBRSxHQUFHLFlBQVksQ0FBQztZQUNyQixFQUFFLENBQUMsSUFBSSxHQUFHLGdCQUFnQixLQUFLLE1BQU0sQ0FBQztZQUV0QyxZQUFZLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQztZQUMxQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUMxQjtRQUNELElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ1gsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQzs7O1lBeERGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1Qiw0OENBQXlDO2dCQUN6QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7OztZQVQrRCxTQUFTO1lBQ2hFLGtCQUFrQjtZQUZsQixRQUFROzs7O0lBWWYsd0NBQTZCOzs7OztJQUM3QixxQ0FBNkI7Ozs7O0lBRWpCLDJDQUEyQjs7Ozs7SUFBRSw0Q0FBcUM7Ozs7O0lBQUUsMkNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUSVBTOiBXaGVuIGl0IGRvZXMgbm90IHRha2UgZWZmZWN0LCB5b3UgbmVlZCB0byBydW4gaXQgb25jZTogbnBtIHJ1biB0aGVtZVxuICovXG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbnR5cGUgU2l0ZVRoZW1lID0gJ2RlZmF1bHQnIHwgJ2RhcmsnIHwgJ2NvbXBhY3QnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsYXlvdXQtdGhlbWUtYnRuJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RoZW1lLWJ0bi5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBMYXlvdXRUaGVtZUJ0bkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgdGhlbWU6IFNpdGVUaGVtZSA9ICdkZWZhdWx0JztcbiAgcHJpdmF0ZSBlbCE6IEhUTUxMaW5rRWxlbWVudDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgY29uZmlnU3J2OiBBbGFpbkNvbmZpZ1NlcnZpY2UsIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaW5pdFRoZW1lKCk7XG4gIH1cblxuICBwcml2YXRlIGluaXRUaGVtZSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudGhlbWUgPSAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NpdGUtdGhlbWUnKSBhcyBTaXRlVGhlbWUpIHx8ICdkZWZhdWx0JztcbiAgICB0aGlzLnVwZGF0ZUNoYXJ0VGhlbWUoKTtcbiAgICB0aGlzLm9uVGhlbWVDaGFuZ2UodGhpcy50aGVtZSk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUNoYXJ0VGhlbWUoKTogdm9pZCB7XG4gICAgdGhpcy5jb25maWdTcnYuc2V0KCdjaGFydCcsIHsgdGhlbWU6IHRoaXMudGhlbWUgPT09ICdkYXJrJyA/ICdkYXJrJyA6ICcnIH0pO1xuICB9XG5cbiAgb25UaGVtZUNoYW5nZSh0aGVtZTogU2l0ZVRoZW1lKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnRoZW1lID0gdGhlbWU7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoZG9jdW1lbnQuYm9keSwgJ2RhdGEtdGhlbWUnLCB0aGVtZSk7XG4gICAgY29uc3QgZG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpdGUtdGhlbWUnKTtcbiAgICBpZiAoZG9tKSB7XG4gICAgICBkb20ucmVtb3ZlKCk7XG4gICAgfVxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdzaXRlLXRoZW1lJyk7XG4gICAgaWYgKHRoZW1lICE9PSAnZGVmYXVsdCcpIHtcbiAgICAgIGNvbnN0IGVsID0gKHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJykpO1xuICAgICAgZWwudHlwZSA9ICd0ZXh0L2Nzcyc7XG4gICAgICBlbC5yZWwgPSAnc3R5bGVzaGVldCc7XG4gICAgICBlbC5pZCA9ICdzaXRlLXRoZW1lJztcbiAgICAgIGVsLmhyZWYgPSBgYXNzZXRzL3N0eWxlLiR7dGhlbWV9LmNzc2A7XG5cbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzaXRlLXRoZW1lJywgdGhlbWUpO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoZWwpO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZUNoYXJ0VGhlbWUoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmVsKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuZWwpO1xuICAgIH1cbiAgfVxufVxuIl19