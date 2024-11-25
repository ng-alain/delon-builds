import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewEncapsulation, booleanAttribute, inject, numberAttribute } from '@angular/core';
import { DelonLocaleService } from '@delon/theme';
import { NzBadgeComponent } from 'ng-zorro-antd/badge';
import { NzDropDownDirective, NzDropdownMenuComponent } from 'ng-zorro-antd/dropdown';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { NzSpinComponent } from 'ng-zorro-antd/spin';
import { NzTabComponent, NzTabSetComponent } from 'ng-zorro-antd/tabs';
import { NoticeIconTabComponent } from './notice-icon-tab.component';
import * as i0 from "@angular/core";
export class NoticeIconComponent {
    constructor() {
        this.i18n = inject(DelonLocaleService);
        this.cdr = inject(ChangeDetectorRef);
        this.locale = {};
        this.data = [];
        this.loading = false;
        this.popoverVisible = false;
        this.centered = false;
        this.select = new EventEmitter();
        this.clear = new EventEmitter();
        this.popoverVisibleChange = new EventEmitter();
        this.delayShow = false;
    }
    get overlayCls() {
        return `header-dropdown notice-icon${!this.centered ? ' notice-icon__tab-left' : ''}`;
    }
    onVisibleChange(result) {
        this.delayShow = result;
        this.popoverVisibleChange.emit(result);
        if (result) {
            // Next tick run
            Promise.resolve().then(() => this.cdr.detectChanges());
        }
    }
    onSelect(i) {
        this.select.emit(i);
    }
    onClear(title) {
        this.clear.emit(title);
    }
    ngOnInit() {
        this.i18n$ = this.i18n.change.subscribe(() => {
            this.locale = this.i18n.getData('noticeIcon');
            this.cdr.markForCheck();
        });
    }
    ngOnChanges() {
        this.cdr.markForCheck();
    }
    ngOnDestroy() {
        this.i18n$?.unsubscribe();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.11", ngImport: i0, type: NoticeIconComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.11", type: NoticeIconComponent, isStandalone: true, selector: "notice-icon", inputs: { data: "data", count: ["count", "count", numberAttribute], loading: ["loading", "loading", booleanAttribute], popoverVisible: ["popoverVisible", "popoverVisible", booleanAttribute], btnClass: "btnClass", btnIconClass: "btnIconClass", centered: ["centered", "centered", booleanAttribute] }, outputs: { select: "select", clear: "clear", popoverVisibleChange: "popoverVisibleChange" }, host: { properties: { "class.notice-icon__btn": "true" } }, exportAs: ["noticeIcon"], usesOnChanges: true, ngImport: i0, template: "<ng-template #badgeTpl>\n  <nz-badge [nzCount]=\"count\" [class]=\"btnClass!\" [nzStyle]=\"{ 'box-shadow': 'none' }\">\n    <i nz-icon nzType=\"bell\" [class]=\"btnIconClass!\"></i>\n  </nz-badge>\n</ng-template>\n@if (data!.length <= 0) {\n  <ng-template [ngTemplateOutlet]=\"badgeTpl\" />\n} @else {\n  <div\n    nz-dropdown\n    [nzVisible]=\"popoverVisible\"\n    (nzVisibleChange)=\"onVisibleChange($event)\"\n    nzTrigger=\"click\"\n    nzPlacement=\"bottomRight\"\n    [nzOverlayClassName]=\"overlayCls\"\n    [nzDropdownMenu]=\"noticeMenu\"\n  >\n    <ng-template [ngTemplateOutlet]=\"badgeTpl\" />\n  </div>\n  <nz-dropdown-menu #noticeMenu=\"nzDropdownMenu\">\n    <nz-spin [nzSpinning]=\"loading\" [nzDelay]=\"0\">\n      @if (delayShow) {\n        <nz-tabset [nzSelectedIndex]=\"0\" [nzCentered]=\"centered\">\n          @for (i of data; track $index) {\n            <nz-tab [nzTitle]=\"i.title\">\n              <notice-icon-tab [locale]=\"locale\" [data]=\"i\" (select)=\"onSelect($event)\" (clear)=\"onClear($event)\" />\n            </nz-tab>\n          }\n        </nz-tabset>\n      }\n    </nz-spin>\n  </nz-dropdown-menu>\n}\n", dependencies: [{ kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: NzBadgeComponent, selector: "nz-badge", inputs: ["nzShowZero", "nzShowDot", "nzStandalone", "nzDot", "nzOverflowCount", "nzColor", "nzStyle", "nzText", "nzTitle", "nzStatus", "nzCount", "nzOffset", "nzSize"], exportAs: ["nzBadge"] }, { kind: "directive", type: NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "directive", type: NzDropDownDirective, selector: "[nz-dropdown]", inputs: ["nzDropdownMenu", "nzTrigger", "nzMatchWidthElement", "nzBackdrop", "nzClickHide", "nzDisabled", "nzVisible", "nzOverlayClassName", "nzOverlayStyle", "nzPlacement"], outputs: ["nzVisibleChange"], exportAs: ["nzDropdown"] }, { kind: "component", type: NzDropdownMenuComponent, selector: "nz-dropdown-menu", exportAs: ["nzDropdownMenu"] }, { kind: "component", type: NzSpinComponent, selector: "nz-spin", inputs: ["nzIndicator", "nzSize", "nzTip", "nzDelay", "nzSimple", "nzSpinning"], exportAs: ["nzSpin"] }, { kind: "component", type: NzTabSetComponent, selector: "nz-tabset", inputs: ["nzSelectedIndex", "nzTabPosition", "nzTabBarExtraContent", "nzCanDeactivate", "nzAddIcon", "nzTabBarStyle", "nzType", "nzSize", "nzAnimated", "nzTabBarGutter", "nzHideAdd", "nzCentered", "nzHideAll", "nzLinkRouter", "nzLinkExact", "nzDestroyInactiveTabPane"], outputs: ["nzSelectChange", "nzSelectedIndexChange", "nzTabListScroll", "nzClose", "nzAdd"], exportAs: ["nzTabset"] }, { kind: "component", type: NzTabComponent, selector: "nz-tab", inputs: ["nzTitle", "nzClosable", "nzCloseIcon", "nzDisabled", "nzForceRender"], outputs: ["nzSelect", "nzDeselect", "nzClick", "nzContextmenu"], exportAs: ["nzTab"] }, { kind: "component", type: NoticeIconTabComponent, selector: "notice-icon-tab", inputs: ["locale", "data"], outputs: ["select", "clear"], exportAs: ["noticeIconTab"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.11", ngImport: i0, type: NoticeIconComponent, decorators: [{
            type: Component,
            args: [{ selector: 'notice-icon', exportAs: 'noticeIcon', host: { '[class.notice-icon__btn]': 'true' }, preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, standalone: true, imports: [
                        NgTemplateOutlet,
                        NzBadgeComponent,
                        NzIconDirective,
                        NzDropDownDirective,
                        NzDropdownMenuComponent,
                        NzSpinComponent,
                        NzTabSetComponent,
                        NzTabComponent,
                        NoticeIconTabComponent
                    ], template: "<ng-template #badgeTpl>\n  <nz-badge [nzCount]=\"count\" [class]=\"btnClass!\" [nzStyle]=\"{ 'box-shadow': 'none' }\">\n    <i nz-icon nzType=\"bell\" [class]=\"btnIconClass!\"></i>\n  </nz-badge>\n</ng-template>\n@if (data!.length <= 0) {\n  <ng-template [ngTemplateOutlet]=\"badgeTpl\" />\n} @else {\n  <div\n    nz-dropdown\n    [nzVisible]=\"popoverVisible\"\n    (nzVisibleChange)=\"onVisibleChange($event)\"\n    nzTrigger=\"click\"\n    nzPlacement=\"bottomRight\"\n    [nzOverlayClassName]=\"overlayCls\"\n    [nzDropdownMenu]=\"noticeMenu\"\n  >\n    <ng-template [ngTemplateOutlet]=\"badgeTpl\" />\n  </div>\n  <nz-dropdown-menu #noticeMenu=\"nzDropdownMenu\">\n    <nz-spin [nzSpinning]=\"loading\" [nzDelay]=\"0\">\n      @if (delayShow) {\n        <nz-tabset [nzSelectedIndex]=\"0\" [nzCentered]=\"centered\">\n          @for (i of data; track $index) {\n            <nz-tab [nzTitle]=\"i.title\">\n              <notice-icon-tab [locale]=\"locale\" [data]=\"i\" (select)=\"onSelect($event)\" (clear)=\"onClear($event)\" />\n            </nz-tab>\n          }\n        </nz-tabset>\n      }\n    </nz-spin>\n  </nz-dropdown-menu>\n}\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], count: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], loading: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], popoverVisible: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], btnClass: [{
                type: Input
            }], btnIconClass: [{
                type: Input
            }], centered: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], select: [{
                type: Output
            }], clear: [{
                type: Output
            }], popoverVisibleChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWNlLWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL25vdGljZS1pY29uL25vdGljZS1pY29uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9ub3RpY2UtaWNvbi9ub3RpY2UtaWNvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNuRCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFJTCxNQUFNLEVBQ04saUJBQWlCLEVBQ2pCLGdCQUFnQixFQUNoQixNQUFNLEVBQ04sZUFBZSxFQUNoQixNQUFNLGVBQWUsQ0FBQztBQUd2QixPQUFPLEVBQUUsa0JBQWtCLEVBQWMsTUFBTSxjQUFjLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFdkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLHVCQUF1QixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsY0FBYyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdkUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7O0FBd0JyRSxNQUFNLE9BQU8sbUJBQW1CO0lBckJoQztRQXNCbUIsU0FBSSxHQUFHLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ2xDLFFBQUcsR0FBRyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUVqRCxXQUFNLEdBQWUsRUFBRSxDQUFDO1FB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QUFTLEVBQUUsZ0JBQWdCLEVBQUU7Z0JBQzdCLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csWUFBWTtzQkFBcEIsS0FBSztnQkFDa0MsUUFBUTtzQkFBL0MsS0FBSzt1QkFBQyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRTtnQkFDbkIsTUFBTTtzQkFBeEIsTUFBTTtnQkFDWSxLQUFLO3NCQUF2QixNQUFNO2dCQUNZLG9CQUFvQjtzQkFBdEMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nVGVtcGxhdGVPdXRsZXQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIGJvb2xlYW5BdHRyaWJ1dGUsXG4gIGluamVjdCxcbiAgbnVtYmVyQXR0cmlidXRlXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IERlbG9uTG9jYWxlU2VydmljZSwgTG9jYWxlRGF0YSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBOekJhZGdlQ29tcG9uZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC9iYWRnZSc7XG5pbXBvcnQgdHlwZSB7IE5nQ2xhc3NUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IE56RHJvcERvd25EaXJlY3RpdmUsIE56RHJvcGRvd25NZW51Q29tcG9uZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC9kcm9wZG93bic7XG5pbXBvcnQgeyBOekljb25EaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL2ljb24nO1xuaW1wb3J0IHsgTnpTcGluQ29tcG9uZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC9zcGluJztcbmltcG9ydCB7IE56VGFiQ29tcG9uZW50LCBOelRhYlNldENvbXBvbmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQvdGFicyc7XG5cbmltcG9ydCB7IE5vdGljZUljb25UYWJDb21wb25lbnQgfSBmcm9tICcuL25vdGljZS1pY29uLXRhYi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTm90aWNlSWNvblNlbGVjdCwgTm90aWNlSXRlbSB9IGZyb20gJy4vbm90aWNlLWljb24udHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3RpY2UtaWNvbicsXG4gIGV4cG9ydEFzOiAnbm90aWNlSWNvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9ub3RpY2UtaWNvbi5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHsgJ1tjbGFzcy5ub3RpY2UtaWNvbl9fYnRuXSc6ICd0cnVlJyB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtcbiAgICBOZ1RlbXBsYXRlT3V0bGV0LFxuICAgIE56QmFkZ2VDb21wb25lbnQsXG4gICAgTnpJY29uRGlyZWN0aXZlLFxuICAgIE56RHJvcERvd25EaXJlY3RpdmUsXG4gICAgTnpEcm9wZG93bk1lbnVDb21wb25lbnQsXG4gICAgTnpTcGluQ29tcG9uZW50LFxuICAgIE56VGFiU2V0Q29tcG9uZW50LFxuICAgIE56VGFiQ29tcG9uZW50LFxuICAgIE5vdGljZUljb25UYWJDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOb3RpY2VJY29uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgaTE4biA9IGluamVjdChEZWxvbkxvY2FsZVNlcnZpY2UpO1xuICBwcml2YXRlIHJlYWRvbmx5IGNkciA9IGluamVjdChDaGFuZ2VEZXRlY3RvclJlZik7XG4gIHByaXZhdGUgaTE4biQ/OiBTdWJzY3JpcHRpb247XG4gIGxvY2FsZTogTG9jYWxlRGF0YSA9IHt9O1xuXG4gIEBJbnB1dCgpIGRhdGE6IE5vdGljZUl0ZW1bXSA9IFtdO1xuICBASW5wdXQoeyB0cmFuc2Zvcm06IG51bWJlckF0dHJpYnV0ZSB9KSBjb3VudD86IG51bWJlcjtcbiAgQElucHV0KHsgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlIH0pIGxvYWRpbmcgPSBmYWxzZTtcbiAgQElucHV0KHsgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlIH0pIHBvcG92ZXJWaXNpYmxlID0gZmFsc2U7XG4gIEBJbnB1dCgpIGJ0bkNsYXNzPzogTmdDbGFzc1R5cGU7XG4gIEBJbnB1dCgpIGJ0bkljb25DbGFzcz86IE5nQ2xhc3NUeXBlO1xuICBASW5wdXQoeyB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGUgfSkgY2VudGVyZWQgPSBmYWxzZTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8Tm90aWNlSWNvblNlbGVjdD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNsZWFyID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBwb3BvdmVyVmlzaWJsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBnZXQgb3ZlcmxheUNscygpOiBzdHJpbmcge1xuICAgIHJldHVybiBgaGVhZGVyLWRyb3Bkb3duIG5vdGljZS1pY29uJHshdGhpcy5jZW50ZXJlZCA/ICcgbm90aWNlLWljb25fX3RhYi1sZWZ0JyA6ICcnfWA7XG4gIH1cblxuICBkZWxheVNob3cgPSBmYWxzZTtcbiAgb25WaXNpYmxlQ2hhbmdlKHJlc3VsdDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGVsYXlTaG93ID0gcmVzdWx0O1xuICAgIHRoaXMucG9wb3ZlclZpc2libGVDaGFuZ2UuZW1pdChyZXN1bHQpO1xuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIC8vIE5leHQgdGljayBydW5cbiAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpKTtcbiAgICB9XG4gIH1cblxuICBvblNlbGVjdChpOiBOb3RpY2VJY29uU2VsZWN0KTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3QuZW1pdChpKTtcbiAgfVxuXG4gIG9uQ2xlYXIodGl0bGU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuY2xlYXIuZW1pdCh0aXRsZSk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmkxOG4kID0gdGhpcy5pMThuLmNoYW5nZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5sb2NhbGUgPSB0aGlzLmkxOG4uZ2V0RGF0YSgnbm90aWNlSWNvbicpO1xuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuaTE4biQ/LnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiIsIjxuZy10ZW1wbGF0ZSAjYmFkZ2VUcGw+XG4gIDxuei1iYWRnZSBbbnpDb3VudF09XCJjb3VudFwiIFtjbGFzc109XCJidG5DbGFzcyFcIiBbbnpTdHlsZV09XCJ7ICdib3gtc2hhZG93JzogJ25vbmUnIH1cIj5cbiAgICA8aSBuei1pY29uIG56VHlwZT1cImJlbGxcIiBbY2xhc3NdPVwiYnRuSWNvbkNsYXNzIVwiPjwvaT5cbiAgPC9uei1iYWRnZT5cbjwvbmctdGVtcGxhdGU+XG5AaWYgKGRhdGEhLmxlbmd0aCA8PSAwKSB7XG4gIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJiYWRnZVRwbFwiIC8+XG59IEBlbHNlIHtcbiAgPGRpdlxuICAgIG56LWRyb3Bkb3duXG4gICAgW256VmlzaWJsZV09XCJwb3BvdmVyVmlzaWJsZVwiXG4gICAgKG56VmlzaWJsZUNoYW5nZSk9XCJvblZpc2libGVDaGFuZ2UoJGV2ZW50KVwiXG4gICAgbnpUcmlnZ2VyPVwiY2xpY2tcIlxuICAgIG56UGxhY2VtZW50PVwiYm90dG9tUmlnaHRcIlxuICAgIFtuek92ZXJsYXlDbGFzc05hbWVdPVwib3ZlcmxheUNsc1wiXG4gICAgW256RHJvcGRvd25NZW51XT1cIm5vdGljZU1lbnVcIlxuICA+XG4gICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImJhZGdlVHBsXCIgLz5cbiAgPC9kaXY+XG4gIDxuei1kcm9wZG93bi1tZW51ICNub3RpY2VNZW51PVwibnpEcm9wZG93bk1lbnVcIj5cbiAgICA8bnotc3BpbiBbbnpTcGlubmluZ109XCJsb2FkaW5nXCIgW256RGVsYXldPVwiMFwiPlxuICAgICAgQGlmIChkZWxheVNob3cpIHtcbiAgICAgICAgPG56LXRhYnNldCBbbnpTZWxlY3RlZEluZGV4XT1cIjBcIiBbbnpDZW50ZXJlZF09XCJjZW50ZXJlZFwiPlxuICAgICAgICAgIEBmb3IgKGkgb2YgZGF0YTsgdHJhY2sgJGluZGV4KSB7XG4gICAgICAgICAgICA8bnotdGFiIFtuelRpdGxlXT1cImkudGl0bGVcIj5cbiAgICAgICAgICAgICAgPG5vdGljZS1pY29uLXRhYiBbbG9jYWxlXT1cImxvY2FsZVwiIFtkYXRhXT1cImlcIiAoc2VsZWN0KT1cIm9uU2VsZWN0KCRldmVudClcIiAoY2xlYXIpPVwib25DbGVhcigkZXZlbnQpXCIgLz5cbiAgICAgICAgICAgIDwvbnotdGFiPlxuICAgICAgICAgIH1cbiAgICAgICAgPC9uei10YWJzZXQ+XG4gICAgICB9XG4gICAgPC9uei1zcGluPlxuICA8L256LWRyb3Bkb3duLW1lbnU+XG59XG4iXX0=