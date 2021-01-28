import { Directionality } from '@angular/cdk/bidi';
import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, Input, isDevMode, Optional, Renderer2 } from '@angular/core';
import { AlainConfigService } from '@delon/util';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@delon/util";
import * as i2 from "@angular/cdk/platform";
import * as i3 from "@angular/cdk/bidi";
import * as i4 from "ng-zorro-antd/dropdown";
import * as i5 from "ng-zorro-antd/tooltip";
import * as i6 from "ng-zorro-antd/menu";
import * as i7 from "@angular/common";
export const ThemeBtnStorageKey = `site-theme`;
export class ThemeBtnComponent {
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
/** @nocollapse */ ThemeBtnComponent.ɵfac = function ThemeBtnComponent_Factory(t) { return new (t || ThemeBtnComponent)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1.AlainConfigService), i0.ɵɵdirectiveInject(i2.Platform), i0.ɵɵdirectiveInject(DOCUMENT), i0.ɵɵdirectiveInject(i3.Directionality, 8)); };
/** @nocollapse */ ThemeBtnComponent.ɵcmp = i0.ɵɵngDeclareComponent({ version: "11.1.1", type: ThemeBtnComponent, selector: "theme-btn", inputs: { types: "types", devTips: "devTips" }, host: { properties: { "class.theme-btn": "true", "class.theme-btn-rtl": "dir === 'rtl'" } }, ngImport: i0, template: "<div class=\"ant-avatar ant-avatar-circle ant-avatar-icon\" nz-dropdown nzPlacement=\"topCenter\" [nzDropdownMenu]=\"types.length > 0 ? menu : null\">\n  <svg nz-tooltip [nzTooltipTitle]=\"isDev ? devTips : null\" class=\"anticon\" role=\"img\" width=\"21\" height=\"21\" viewBox=\"0 0 21 21\" fill=\"currentColor\">\n    <g fill-rule=\"evenodd\">\n      <g fill-rule=\"nonzero\">\n        <path\n          d=\"M7.02 3.635l12.518 12.518a1.863 1.863 0 010 2.635l-1.317 1.318a1.863 1.863 0 01-2.635 0L3.068 7.588A2.795 2.795 0 117.02 3.635zm2.09 14.428a.932.932 0 110 1.864.932.932 0 010-1.864zm-.043-9.747L7.75 9.635l9.154 9.153 1.318-1.317-9.154-9.155zM3.52 12.473c.514 0 .931.417.931.931v.932h.932a.932.932 0 110 1.864h-.932v.931a.932.932 0 01-1.863 0l-.001-.931h-.93a.932.932 0 010-1.864h.93v-.932c0-.514.418-.931.933-.931zm15.374-3.727a1.398 1.398 0 110 2.795 1.398 1.398 0 010-2.795zM4.385 4.953a.932.932 0 000 1.317l2.046 2.047L7.75 7 5.703 4.953a.932.932 0 00-1.318 0zM14.701.36a.932.932 0 01.931.932v.931h.932a.932.932 0 010 1.864h-.933l.001.932a.932.932 0 11-1.863 0l-.001-.932h-.93a.932.932 0 110-1.864h.93v-.931a.932.932 0 01.933-.932z\"\n        ></path>\n      </g>\n    </g>\n  </svg>\n  <nz-dropdown-menu #menu=\"nzDropdownMenu\">\n    <ul nz-menu nzSelectable>\n      <li nz-menu-item *ngFor=\"let i of types\" (click)=\"onThemeChange(i.key)\">{{ i.text }}</li>\n    </ul>\n  </nz-dropdown-menu>\n</div>\n", directives: [{ type: i4.NzDropDownDirective, selector: "[nz-dropdown]", inputs: ["nzDropdownMenu", "nzTrigger", "nzMatchWidthElement", "nzBackdrop", "nzHasBackdrop", "nzClickHide", "nzDisabled", "nzVisible", "nzOverlayClassName", "nzOverlayStyle", "nzPlacement"], outputs: ["nzVisibleChange"], exportAs: ["nzDropdown"] }, { type: i5.NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipTitle", "nz-tooltip", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }, { type: i4.NzDropdownMenuComponent, selector: "nz-dropdown-menu", exportAs: ["nzDropdownMenu"] }, { type: i6.NzMenuDirective, selector: "[nz-menu]", inputs: ["nzInlineIndent", "nzTheme", "nzMode", "nzInlineCollapsed", "nzSelectable"], outputs: ["nzClick"], exportAs: ["nzMenu"] }, { type: i7.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i6.NzMenuItemDirective, selector: "[nz-menu-item]", inputs: ["nzDisabled", "nzSelected", "nzDanger", "nzMatchRouterExact", "nzMatchRouter", "nzPaddingLeft"], exportAs: ["nzMenuItem"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ThemeBtnComponent, [{
        type: Component,
        args: [{
                selector: 'theme-btn',
                templateUrl: './theme-btn.component.html',
                host: {
                    '[class.theme-btn]': `true`,
                    '[class.theme-btn-rtl]': `dir === 'rtl'`,
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: i0.Renderer2 }, { type: i1.AlainConfigService }, { type: i2.Platform }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: i3.Directionality, decorators: [{
                type: Optional
            }] }]; }, { types: [{
            type: Input
        }], devTips: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnRuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lL3RoZW1lLWJ0bi90aGVtZS1idG4uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdGhlbWUvdGhlbWUtYnRuL3RoZW1lLWJ0bi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWEsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFxQixRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JJLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7O0FBRTNDLE1BQU0sQ0FBQyxNQUFNLGtCQUFrQixHQUFHLFlBQVksQ0FBQztBQWdCL0MsTUFBTSxPQUFPLGlCQUFpQjtJQWE1QixZQUNVLFFBQW1CLEVBQ25CLFNBQTZCLEVBQzdCLFFBQWtCLEVBQ0EsR0FBUSxFQUNkLGNBQThCO1FBSjFDLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsY0FBUyxHQUFULFNBQVMsQ0FBb0I7UUFDN0IsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNBLFFBQUcsR0FBSCxHQUFHLENBQUs7UUFDZCxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFqQjVDLFVBQUssR0FBRyxTQUFTLENBQUM7UUFDMUIsVUFBSyxHQUFHLFNB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QUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ1gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNwQztRQUNELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDOztxR0F4RVUsaUJBQWlCLDJJQWlCbEIsUUFBUTsrRkFqQlAsaUJBQWlCLDhMQ3hCOUIsODRDQWdCQTt1RkRRYSxpQkFBaUI7Y0FUN0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixXQUFXLEVBQUUsNEJBQTRCO2dCQUN6QyxJQUFJLEVBQUU7b0JBQ0osbUJBQW1CLEVBQUUsTUFBTTtvQkFDM0IsdUJBQXVCLEVBQUUsZUFBZTtpQkFDekM7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7O3NCQWtCSSxNQUFNO3VCQUFDLFFBQVE7O3NCQUNmLFFBQVE7d0JBZkYsS0FBSztrQkFBYixLQUFLO1lBS0csT0FBTztrQkFBZixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEluamVjdCwgSW5wdXQsIGlzRGV2TW9kZSwgT25EZXN0cm95LCBPbkluaXQsIE9wdGlvbmFsLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFsYWluQ29uZmlnU2VydmljZSB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IGNvbnN0IFRoZW1lQnRuU3RvcmFnZUtleSA9IGBzaXRlLXRoZW1lYDtcblxuZXhwb3J0IGludGVyZmFjZSBUaGVtZUJ0blR5cGUge1xuICBrZXk6IHN0cmluZztcbiAgdGV4dDogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0aGVtZS1idG4nLFxuICB0ZW1wbGF0ZVVybDogJy4vdGhlbWUtYnRuLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MudGhlbWUtYnRuXSc6IGB0cnVlYCxcbiAgICAnW2NsYXNzLnRoZW1lLWJ0bi1ydGxdJzogYGRpciA9PT0gJ3J0bCdgLFxuICB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVGhlbWVCdG5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgdGhlbWUgPSAnZGVmYXVsdCc7XG4gIGlzRGV2ID0gaXNEZXZNb2RlKCk7XG4gIEBJbnB1dCgpIHR5cGVzOiBUaGVtZUJ0blR5cGVbXSA9IFtcbiAgICB7IGtleTogJ2RlZmF1bHQnLCB0ZXh0OiAnRGVmYXVsdCBUaGVtZScgfSxcbiAgICB7IGtleTogJ2RhcmsnLCB0ZXh0OiAnRGFyayBUaGVtZScgfSxcbiAgICB7IGtleTogJ2NvbXBhY3QnLCB0ZXh0OiAnQ29tcGFjdCBUaGVtZScgfSxcbiAgXTtcbiAgQElucHV0KCkgZGV2VGlwcyA9IGBXaGVuIHRoZSBkYXJrLmNzcyBmaWxlIGNhbid0IGJlIGZvdW5kLCB5b3UgbmVlZCB0byBydW4gaXQgb25jZTogbnBtIHJ1biB0aGVtZWA7XG4gIHByaXZhdGUgZWwhOiBIVE1MTGlua0VsZW1lbnQ7XG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBkaXI6IERpcmVjdGlvbiA9ICdsdHInO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGNvbmZpZ1NydjogQWxhaW5Db25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBhbnksXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBkaXJlY3Rpb25hbGl0eTogRGlyZWN0aW9uYWxpdHksXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmRpciA9IHRoaXMuZGlyZWN0aW9uYWxpdHkudmFsdWU7XG4gICAgdGhpcy5kaXJlY3Rpb25hbGl0eS5jaGFuZ2U/LnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKGRpcmVjdGlvbjogRGlyZWN0aW9uKSA9PiB7XG4gICAgICB0aGlzLmRpciA9IGRpcmVjdGlvbjtcbiAgICB9KTtcbiAgICB0aGlzLmluaXRUaGVtZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0VGhlbWUoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnRoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oVGhlbWVCdG5TdG9yYWdlS2V5KSB8fCAnZGVmYXVsdCc7XG4gICAgdGhpcy51cGRhdGVDaGFydFRoZW1lKCk7XG4gICAgdGhpcy5vblRoZW1lQ2hhbmdlKHRoaXMudGhlbWUpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVDaGFydFRoZW1lKCk6IHZvaWQge1xuICAgIHRoaXMuY29uZmlnU3J2LnNldCgnY2hhcnQnLCB7IHRoZW1lOiB0aGlzLnRoZW1lID09PSAnZGFyaycgPyAnZGFyaycgOiAnJyB9KTtcbiAgfVxuXG4gIG9uVGhlbWVDaGFuZ2UodGhlbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy50aGVtZSA9IHRoZW1lO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuZG9jLmJvZHksICdkYXRhLXRoZW1lJywgdGhlbWUpO1xuICAgIGNvbnN0IGRvbSA9IHRoaXMuZG9jLmdldEVsZW1lbnRCeUlkKFRoZW1lQnRuU3RvcmFnZUtleSk7XG4gICAgaWYgKGRvbSkge1xuICAgICAgZG9tLnJlbW92ZSgpO1xuICAgIH1cbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShUaGVtZUJ0blN0b3JhZ2VLZXkpO1xuICAgIGlmICh0aGVtZSAhPT0gJ2RlZmF1bHQnKSB7XG4gICAgICBjb25zdCBlbCA9ICh0aGlzLmVsID0gdGhpcy5kb2MuY3JlYXRlRWxlbWVudCgnbGluaycpKTtcbiAgICAgIGVsLnR5cGUgPSAndGV4dC9jc3MnO1xuICAgICAgZWwucmVsID0gJ3N0eWxlc2hlZXQnO1xuICAgICAgZWwuaWQgPSBUaGVtZUJ0blN0b3JhZ2VLZXk7XG4gICAgICBlbC5ocmVmID0gYGFzc2V0cy9zdHlsZS4ke3RoZW1lfS5jc3NgO1xuXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShUaGVtZUJ0blN0b3JhZ2VLZXksIHRoZW1lKTtcbiAgICAgIHRoaXMuZG9jLmJvZHkuYXBwZW5kKGVsKTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVDaGFydFRoZW1lKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5lbCkge1xuICAgICAgdGhpcy5kb2MuYm9keS5yZW1vdmVDaGlsZCh0aGlzLmVsKTtcbiAgICB9XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiYW50LWF2YXRhciBhbnQtYXZhdGFyLWNpcmNsZSBhbnQtYXZhdGFyLWljb25cIiBuei1kcm9wZG93biBuelBsYWNlbWVudD1cInRvcENlbnRlclwiIFtuekRyb3Bkb3duTWVudV09XCJ0eXBlcy5sZW5ndGggPiAwID8gbWVudSA6IG51bGxcIj5cbiAgPHN2ZyBuei10b29sdGlwIFtuelRvb2x0aXBUaXRsZV09XCJpc0RldiA/IGRldlRpcHMgOiBudWxsXCIgY2xhc3M9XCJhbnRpY29uXCIgcm9sZT1cImltZ1wiIHdpZHRoPVwiMjFcIiBoZWlnaHQ9XCIyMVwiIHZpZXdCb3g9XCIwIDAgMjEgMjFcIiBmaWxsPVwiY3VycmVudENvbG9yXCI+XG4gICAgPGcgZmlsbC1ydWxlPVwiZXZlbm9kZFwiPlxuICAgICAgPGcgZmlsbC1ydWxlPVwibm9uemVyb1wiPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGQ9XCJNNy4wMiAzLjYzNWwxMi41MTggMTIuNTE4YTEuODYzIDEuODYzIDAgMDEwIDIuNjM1bC0xLjMxNyAxLjMxOGExLjg2MyAxLjg2MyAwIDAxLTIuNjM1IDBMMy4wNjggNy41ODhBMi43OTUgMi43OTUgMCAxMTcuMDIgMy42MzV6bTIuMDkgMTQuNDI4YS45MzIuOTMyIDAgMTEwIDEuODY0LjkzMi45MzIgMCAwMTAtMS44NjR6bS0uMDQzLTkuNzQ3TDcuNzUgOS42MzVsOS4xNTQgOS4xNTMgMS4zMTgtMS4zMTctOS4xNTQtOS4xNTV6TTMuNTIgMTIuNDczYy41MTQgMCAuOTMxLjQxNy45MzEuOTMxdi45MzJoLjkzMmEuOTMyLjkzMiAwIDExMCAxLjg2NGgtLjkzMnYuOTMxYS45MzIuOTMyIDAgMDEtMS44NjMgMGwtLjAwMS0uOTMxaC0uOTNhLjkzMi45MzIgMCAwMTAtMS44NjRoLjkzdi0uOTMyYzAtLjUxNC40MTgtLjkzMS45MzMtLjkzMXptMTUuMzc0LTMuNzI3YTEuMzk4IDEuMzk4IDAgMTEwIDIuNzk1IDEuMzk4IDEuMzk4IDAgMDEwLTIuNzk1ek00LjM4NSA0Ljk1M2EuOTMyLjkzMiAwIDAwMCAxLjMxN2wyLjA0NiAyLjA0N0w3Ljc1IDcgNS43MDMgNC45NTNhLjkzMi45MzIgMCAwMC0xLjMxOCAwek0xNC43MDEuMzZhLjkzMi45MzIgMCAwMS45MzEuOTMydi45MzFoLjkzMmEuOTMyLjkzMiAwIDAxMCAxLjg2NGgtLjkzM2wuMDAxLjkzMmEuOTMyLjkzMiAwIDExLTEuODYzIDBsLS4wMDEtLjkzMmgtLjkzYS45MzIuOTMyIDAgMTEwLTEuODY0aC45M3YtLjkzMWEuOTMyLjkzMiAwIDAxLjkzMy0uOTMyelwiXG4gICAgICAgID48L3BhdGg+XG4gICAgICA8L2c+XG4gICAgPC9nPlxuICA8L3N2Zz5cbiAgPG56LWRyb3Bkb3duLW1lbnUgI21lbnU9XCJuekRyb3Bkb3duTWVudVwiPlxuICAgIDx1bCBuei1tZW51IG56U2VsZWN0YWJsZT5cbiAgICAgIDxsaSBuei1tZW51LWl0ZW0gKm5nRm9yPVwibGV0IGkgb2YgdHlwZXNcIiAoY2xpY2spPVwib25UaGVtZUNoYW5nZShpLmtleSlcIj57eyBpLnRleHQgfX08L2xpPlxuICAgIDwvdWw+XG4gIDwvbnotZHJvcGRvd24tbWVudT5cbjwvZGl2PlxuIl19