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
export class ThemeBtnComponent {
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
ThemeBtnComponent.decorators = [
    { type: Component, args: [{
                selector: 'theme-btn',
                template: "<div class=\"ant-avatar ant-avatar-circle ant-avatar-icon\" nz-dropdown nzPlacement=\"topCenter\" [nzDropdownMenu]=\"menu\">\n  <svg class=\"anticon\" role=\"img\" width=\"21\" height=\"21\" viewBox=\"0 0 21 21\" fill=\"currentColor\">\n    <g fill-rule=\"evenodd\">\n      <g fill-rule=\"nonzero\">\n        <path\n          d=\"M7.02 3.635l12.518 12.518a1.863 1.863 0 010 2.635l-1.317 1.318a1.863 1.863 0 01-2.635 0L3.068 7.588A2.795 2.795 0 117.02 3.635zm2.09 14.428a.932.932 0 110 1.864.932.932 0 010-1.864zm-.043-9.747L7.75 9.635l9.154 9.153 1.318-1.317-9.154-9.155zM3.52 12.473c.514 0 .931.417.931.931v.932h.932a.932.932 0 110 1.864h-.932v.931a.932.932 0 01-1.863 0l-.001-.931h-.93a.932.932 0 010-1.864h.93v-.932c0-.514.418-.931.933-.931zm15.374-3.727a1.398 1.398 0 110 2.795 1.398 1.398 0 010-2.795zM4.385 4.953a.932.932 0 000 1.317l2.046 2.047L7.75 7 5.703 4.953a.932.932 0 00-1.318 0zM14.701.36a.932.932 0 01.931.932v.931h.932a.932.932 0 010 1.864h-.933l.001.932a.932.932 0 11-1.863 0l-.001-.932h-.93a.932.932 0 110-1.864h.93v-.931a.932.932 0 01.933-.932z\"\n        ></path>\n      </g>\n    </g>\n  </svg>\n  <nz-dropdown-menu #menu=\"nzDropdownMenu\">\n    <ul nz-menu nzSelectable>\n      <li nz-menu-item (click)=\"onThemeChange('default')\">Default Theme</li>\n      <li nz-menu-item (click)=\"onThemeChange('dark')\">Dark Theme</li>\n      <li nz-menu-item (click)=\"onThemeChange('compact')\">Compact Theme</li>\n    </ul>\n  </nz-dropdown-menu>\n</div>\n",
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
    { type: Platform }
];
if (false) {
    /** @type {?} */
    ThemeBtnComponent.prototype.theme;
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnRuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90aGVtZS90aGVtZS1idG4vIiwic291cmNlcyI6WyJ0aGVtZS1idG4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBR0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQXFCLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFZakQsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7O0lBSTVCLFlBQW9CLFFBQW1CLEVBQVUsU0FBNkIsRUFBVSxRQUFrQjtRQUF0RixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVUsY0FBUyxHQUFULFNBQVMsQ0FBb0I7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBSDFHLFVBQUssR0FBYyxTQUFTLENBQUM7SUFHZ0YsQ0FBQzs7OztJQUU5RyxRQUFRO1FBQ04sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7Ozs7O0lBRU8sU0FBUztRQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUM1QixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsbUJBQUEsWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBYSxDQUFDLElBQUksU0FBUyxDQUFDO1FBQzVFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Ozs7O0lBRU8sZ0JBQWdCO1FBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzlFLENBQUM7Ozs7O0lBRUQsYUFBYSxDQUFDLEtBQWdCO1FBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUM1QixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQzs7Y0FDekQsR0FBRyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDO1FBQ2pELElBQUksR0FBRyxFQUFFO1lBQ1AsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ2Q7UUFDRCxZQUFZLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3RDLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTs7a0JBQ2pCLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNyRCxFQUFFLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztZQUNyQixFQUFFLENBQUMsR0FBRyxHQUFHLFlBQVksQ0FBQztZQUN0QixFQUFFLENBQUMsRUFBRSxHQUFHLFlBQVksQ0FBQztZQUNyQixFQUFFLENBQUMsSUFBSSxHQUFHLGdCQUFnQixLQUFLLE1BQU0sQ0FBQztZQUV0QyxZQUFZLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQztZQUMxQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUMxQjtRQUNELElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ1gsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQzs7O1lBM0RGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsNDhDQUF5QztnQkFDekMsSUFBSSxFQUFFO29CQUNKLG1CQUFtQixFQUFFLE1BQU07aUJBQzVCO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7O1lBWitELFNBQVM7WUFDaEUsa0JBQWtCO1lBRmxCLFFBQVE7Ozs7SUFlZixrQ0FBNkI7Ozs7O0lBQzdCLCtCQUE2Qjs7Ozs7SUFFakIscUNBQTJCOzs7OztJQUFFLHNDQUFxQzs7Ozs7SUFBRSxxQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRJUFM6IFdoZW4gaXQgZG9lcyBub3QgdGFrZSBlZmZlY3QsIHlvdSBuZWVkIHRvIHJ1biBpdCBvbmNlOiBucG0gcnVuIHRoZW1lXG4gKi9cbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFsYWluQ29uZmlnU2VydmljZSB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxudHlwZSBTaXRlVGhlbWUgPSAnZGVmYXVsdCcgfCAnZGFyaycgfCAnY29tcGFjdCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RoZW1lLWJ0bicsXG4gIHRlbXBsYXRlVXJsOiAnLi90aGVtZS1idG4uY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy50aGVtZS1idG5dJzogYHRydWVgLFxuICB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVGhlbWVCdG5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHRoZW1lOiBTaXRlVGhlbWUgPSAnZGVmYXVsdCc7XG4gIHByaXZhdGUgZWwhOiBIVE1MTGlua0VsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIGNvbmZpZ1NydjogQWxhaW5Db25maWdTZXJ2aWNlLCBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmluaXRUaGVtZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0VGhlbWUoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnRoZW1lID0gKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzaXRlLXRoZW1lJykgYXMgU2l0ZVRoZW1lKSB8fCAnZGVmYXVsdCc7XG4gICAgdGhpcy51cGRhdGVDaGFydFRoZW1lKCk7XG4gICAgdGhpcy5vblRoZW1lQ2hhbmdlKHRoaXMudGhlbWUpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVDaGFydFRoZW1lKCk6IHZvaWQge1xuICAgIHRoaXMuY29uZmlnU3J2LnNldCgnY2hhcnQnLCB7IHRoZW1lOiB0aGlzLnRoZW1lID09PSAnZGFyaycgPyAnZGFyaycgOiAnJyB9KTtcbiAgfVxuXG4gIG9uVGhlbWVDaGFuZ2UodGhlbWU6IFNpdGVUaGVtZSk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy50aGVtZSA9IHRoZW1lO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKGRvY3VtZW50LmJvZHksICdkYXRhLXRoZW1lJywgdGhlbWUpO1xuICAgIGNvbnN0IGRvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaXRlLXRoZW1lJyk7XG4gICAgaWYgKGRvbSkge1xuICAgICAgZG9tLnJlbW92ZSgpO1xuICAgIH1cbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnc2l0ZS10aGVtZScpO1xuICAgIGlmICh0aGVtZSAhPT0gJ2RlZmF1bHQnKSB7XG4gICAgICBjb25zdCBlbCA9ICh0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpKTtcbiAgICAgIGVsLnR5cGUgPSAndGV4dC9jc3MnO1xuICAgICAgZWwucmVsID0gJ3N0eWxlc2hlZXQnO1xuICAgICAgZWwuaWQgPSAnc2l0ZS10aGVtZSc7XG4gICAgICBlbC5ocmVmID0gYGFzc2V0cy9zdHlsZS4ke3RoZW1lfS5jc3NgO1xuXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2l0ZS10aGVtZScsIHRoZW1lKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGVsKTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVDaGFydFRoZW1lKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5lbCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLmVsKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==