import { NgClass, NgTemplateOutlet } from '@angular/common';
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
    }
    get overlayCls() {
        return `header-dropdown notice-icon${!this.centered ? ' notice-icon__tab-left' : ''}`;
    }
    onVisibleChange(result) {
        this.popoverVisibleChange.emit(result);
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
        this.i18n$.unsubscribe();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NoticeIconComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.1.0", type: NoticeIconComponent, isStandalone: true, selector: "notice-icon", inputs: { data: "data", count: ["count", "count", numberAttribute], loading: ["loading", "loading", booleanAttribute], popoverVisible: ["popoverVisible", "popoverVisible", booleanAttribute], btnClass: "btnClass", btnIconClass: "btnIconClass", centered: ["centered", "centered", booleanAttribute] }, outputs: { select: "select", clear: "clear", popoverVisibleChange: "popoverVisibleChange" }, host: { properties: { "class.notice-icon__btn": "true" } }, exportAs: ["noticeIcon"], usesOnChanges: true, ngImport: i0, template: "<ng-template #badgeTpl>\n  <nz-badge [nzCount]=\"count\" [ngClass]=\"btnClass!\" [nzStyle]=\"{ 'box-shadow': 'none' }\">\n    <i nz-icon nzType=\"bell\" [ngClass]=\"btnIconClass!\"></i>\n  </nz-badge>\n</ng-template>\n@if (data!.length <= 0) {\n  <ng-template [ngTemplateOutlet]=\"badgeTpl\" />\n} @else {\n  <div\n    nz-dropdown\n    [nzVisible]=\"popoverVisible\"\n    (nzVisibleChange)=\"onVisibleChange($event)\"\n    nzTrigger=\"click\"\n    nzPlacement=\"bottomRight\"\n    [nzOverlayClassName]=\"overlayCls\"\n    [nzDropdownMenu]=\"noticeMenu\"\n  >\n    <ng-template [ngTemplateOutlet]=\"badgeTpl\" />\n  </div>\n  <nz-dropdown-menu #noticeMenu=\"nzDropdownMenu\">\n    <nz-spin [nzSpinning]=\"loading\" [nzDelay]=\"0\">\n      <nz-tabset nzSelectedIndex=\"0\" [nzCentered]=\"centered\">\n        @for (i of data; track $index) {\n          <nz-tab [nzTitle]=\"i.title\">\n            <notice-icon-tab [locale]=\"locale\" [data]=\"i\" (select)=\"onSelect($event)\" (clear)=\"onClear($event)\" />\n          </nz-tab>\n        }\n      </nz-tabset>\n    </nz-spin>\n  </nz-dropdown-menu>\n}\n", dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: NzBadgeComponent, selector: "nz-badge", inputs: ["nzShowZero", "nzShowDot", "nzStandalone", "nzDot", "nzOverflowCount", "nzColor", "nzStyle", "nzText", "nzTitle", "nzStatus", "nzCount", "nzOffset", "nzSize"], exportAs: ["nzBadge"] }, { kind: "directive", type: NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "directive", type: NzDropDownDirective, selector: "[nz-dropdown]", inputs: ["nzDropdownMenu", "nzTrigger", "nzMatchWidthElement", "nzBackdrop", "nzClickHide", "nzDisabled", "nzVisible", "nzOverlayClassName", "nzOverlayStyle", "nzPlacement"], outputs: ["nzVisibleChange"], exportAs: ["nzDropdown"] }, { kind: "component", type: NzDropdownMenuComponent, selector: "nz-dropdown-menu", exportAs: ["nzDropdownMenu"] }, { kind: "component", type: NzSpinComponent, selector: "nz-spin", inputs: ["nzIndicator", "nzSize", "nzTip", "nzDelay", "nzSimple", "nzSpinning"], exportAs: ["nzSpin"] }, { kind: "component", type: NzTabSetComponent, selector: "nz-tabset", inputs: ["nzSelectedIndex", "nzTabPosition", "nzTabBarExtraContent", "nzCanDeactivate", "nzAddIcon", "nzTabBarStyle", "nzType", "nzSize", "nzAnimated", "nzTabBarGutter", "nzHideAdd", "nzCentered", "nzHideAll", "nzLinkRouter", "nzLinkExact"], outputs: ["nzSelectChange", "nzSelectedIndexChange", "nzTabListScroll", "nzClose", "nzAdd"], exportAs: ["nzTabset"] }, { kind: "component", type: NzTabComponent, selector: "nz-tab", inputs: ["nzTitle", "nzClosable", "nzCloseIcon", "nzDisabled", "nzForceRender"], outputs: ["nzSelect", "nzDeselect", "nzClick", "nzContextmenu"], exportAs: ["nzTab"] }, { kind: "component", type: NoticeIconTabComponent, selector: "notice-icon-tab", inputs: ["locale", "data"], outputs: ["select", "clear"], exportAs: ["noticeIconTab"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NoticeIconComponent, decorators: [{
            type: Component,
            args: [{ selector: 'notice-icon', exportAs: 'noticeIcon', host: { '[class.notice-icon__btn]': 'true' }, preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, standalone: true, imports: [
                        NgClass,
                        NgTemplateOutlet,
                        NzBadgeComponent,
                        NzIconDirective,
                        NzDropDownDirective,
                        NzDropdownMenuComponent,
                        NzSpinComponent,
                        NzTabSetComponent,
                        NzTabComponent,
                        NoticeIconTabComponent
                    ], template: "<ng-template #badgeTpl>\n  <nz-badge [nzCount]=\"count\" [ngClass]=\"btnClass!\" [nzStyle]=\"{ 'box-shadow': 'none' }\">\n    <i nz-icon nzType=\"bell\" [ngClass]=\"btnIconClass!\"></i>\n  </nz-badge>\n</ng-template>\n@if (data!.length <= 0) {\n  <ng-template [ngTemplateOutlet]=\"badgeTpl\" />\n} @else {\n  <div\n    nz-dropdown\n    [nzVisible]=\"popoverVisible\"\n    (nzVisibleChange)=\"onVisibleChange($event)\"\n    nzTrigger=\"click\"\n    nzPlacement=\"bottomRight\"\n    [nzOverlayClassName]=\"overlayCls\"\n    [nzDropdownMenu]=\"noticeMenu\"\n  >\n    <ng-template [ngTemplateOutlet]=\"badgeTpl\" />\n  </div>\n  <nz-dropdown-menu #noticeMenu=\"nzDropdownMenu\">\n    <nz-spin [nzSpinning]=\"loading\" [nzDelay]=\"0\">\n      <nz-tabset nzSelectedIndex=\"0\" [nzCentered]=\"centered\">\n        @for (i of data; track $index) {\n          <nz-tab [nzTitle]=\"i.title\">\n            <notice-icon-tab [locale]=\"locale\" [data]=\"i\" (select)=\"onSelect($event)\" (clear)=\"onClear($event)\" />\n          </nz-tab>\n        }\n      </nz-tabset>\n    </nz-spin>\n  </nz-dropdown-menu>\n}\n" }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWNlLWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL25vdGljZS1pY29uL25vdGljZS1pY29uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9ub3RpY2UtaWNvbi9ub3RpY2UtaWNvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDNUQsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUNOLGlCQUFpQixFQUNqQixnQkFBZ0IsRUFDaEIsTUFBTSxFQUNOLGVBQWUsRUFDaEIsTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFjLE1BQU0sY0FBYyxDQUFDO0FBQzlELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXZELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLGNBQWMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXZFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDOztBQXlCckUsTUFBTSxPQUFPLG1CQUFtQjtJQXRCaEM7UUF1Qm1CLFNBQUksR0FBRyxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNsQyxRQUFHLEdBQUcsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFFakQsV0FBTSxHQUFlLEVB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QUNZLG9CQUFvQjtzQkFBdEMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nQ2xhc3MsIE5nVGVtcGxhdGVPdXRsZXQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIGJvb2xlYW5BdHRyaWJ1dGUsXG4gIGluamVjdCxcbiAgbnVtYmVyQXR0cmlidXRlXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IERlbG9uTG9jYWxlU2VydmljZSwgTG9jYWxlRGF0YSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBOekJhZGdlQ29tcG9uZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC9iYWRnZSc7XG5pbXBvcnQgdHlwZSB7IE5nQ2xhc3NUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IE56RHJvcERvd25EaXJlY3RpdmUsIE56RHJvcGRvd25NZW51Q29tcG9uZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC9kcm9wZG93bic7XG5pbXBvcnQgeyBOekljb25EaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL2ljb24nO1xuaW1wb3J0IHsgTnpTcGluQ29tcG9uZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC9zcGluJztcbmltcG9ydCB7IE56VGFiQ29tcG9uZW50LCBOelRhYlNldENvbXBvbmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQvdGFicyc7XG5cbmltcG9ydCB7IE5vdGljZUljb25UYWJDb21wb25lbnQgfSBmcm9tICcuL25vdGljZS1pY29uLXRhYi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTm90aWNlSWNvblNlbGVjdCwgTm90aWNlSXRlbSB9IGZyb20gJy4vbm90aWNlLWljb24udHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3RpY2UtaWNvbicsXG4gIGV4cG9ydEFzOiAnbm90aWNlSWNvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9ub3RpY2UtaWNvbi5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHsgJ1tjbGFzcy5ub3RpY2UtaWNvbl9fYnRuXSc6ICd0cnVlJyB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtcbiAgICBOZ0NsYXNzLFxuICAgIE5nVGVtcGxhdGVPdXRsZXQsXG4gICAgTnpCYWRnZUNvbXBvbmVudCxcbiAgICBOekljb25EaXJlY3RpdmUsXG4gICAgTnpEcm9wRG93bkRpcmVjdGl2ZSxcbiAgICBOekRyb3Bkb3duTWVudUNvbXBvbmVudCxcbiAgICBOelNwaW5Db21wb25lbnQsXG4gICAgTnpUYWJTZXRDb21wb25lbnQsXG4gICAgTnpUYWJDb21wb25lbnQsXG4gICAgTm90aWNlSWNvblRhYkNvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE5vdGljZUljb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSByZWFkb25seSBpMThuID0gaW5qZWN0KERlbG9uTG9jYWxlU2VydmljZSk7XG4gIHByaXZhdGUgcmVhZG9ubHkgY2RyID0gaW5qZWN0KENoYW5nZURldGVjdG9yUmVmKTtcbiAgcHJpdmF0ZSBpMThuJCE6IFN1YnNjcmlwdGlvbjtcbiAgbG9jYWxlOiBMb2NhbGVEYXRhID0ge307XG5cbiAgQElucHV0KCkgZGF0YTogTm90aWNlSXRlbVtdID0gW107XG4gIEBJbnB1dCh7IHRyYW5zZm9ybTogbnVtYmVyQXR0cmlidXRlIH0pIGNvdW50PzogbnVtYmVyO1xuICBASW5wdXQoeyB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGUgfSkgbG9hZGluZyA9IGZhbHNlO1xuICBASW5wdXQoeyB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGUgfSkgcG9wb3ZlclZpc2libGUgPSBmYWxzZTtcbiAgQElucHV0KCkgYnRuQ2xhc3M/OiBOZ0NsYXNzVHlwZTtcbiAgQElucHV0KCkgYnRuSWNvbkNsYXNzPzogTmdDbGFzc1R5cGU7XG4gIEBJbnB1dCh7IHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZSB9KSBjZW50ZXJlZCA9IGZhbHNlO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgc2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxOb3RpY2VJY29uU2VsZWN0PigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2xlYXIgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHBvcG92ZXJWaXNpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIGdldCBvdmVybGF5Q2xzKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBoZWFkZXItZHJvcGRvd24gbm90aWNlLWljb24keyF0aGlzLmNlbnRlcmVkID8gJyBub3RpY2UtaWNvbl9fdGFiLWxlZnQnIDogJyd9YDtcbiAgfVxuXG4gIG9uVmlzaWJsZUNoYW5nZShyZXN1bHQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLnBvcG92ZXJWaXNpYmxlQ2hhbmdlLmVtaXQocmVzdWx0KTtcbiAgfVxuXG4gIG9uU2VsZWN0KGk6IE5vdGljZUljb25TZWxlY3QpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdC5lbWl0KGkpO1xuICB9XG5cbiAgb25DbGVhcih0aXRsZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhci5lbWl0KHRpdGxlKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaTE4biQgPSB0aGlzLmkxOG4uY2hhbmdlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmxvY2FsZSA9IHRoaXMuaTE4bi5nZXREYXRhKCdub3RpY2VJY29uJyk7XG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5pMThuJC51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iLCI8bmctdGVtcGxhdGUgI2JhZGdlVHBsPlxuICA8bnotYmFkZ2UgW256Q291bnRdPVwiY291bnRcIiBbbmdDbGFzc109XCJidG5DbGFzcyFcIiBbbnpTdHlsZV09XCJ7ICdib3gtc2hhZG93JzogJ25vbmUnIH1cIj5cbiAgICA8aSBuei1pY29uIG56VHlwZT1cImJlbGxcIiBbbmdDbGFzc109XCJidG5JY29uQ2xhc3MhXCI+PC9pPlxuICA8L256LWJhZGdlPlxuPC9uZy10ZW1wbGF0ZT5cbkBpZiAoZGF0YSEubGVuZ3RoIDw9IDApIHtcbiAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImJhZGdlVHBsXCIgLz5cbn0gQGVsc2Uge1xuICA8ZGl2XG4gICAgbnotZHJvcGRvd25cbiAgICBbbnpWaXNpYmxlXT1cInBvcG92ZXJWaXNpYmxlXCJcbiAgICAobnpWaXNpYmxlQ2hhbmdlKT1cIm9uVmlzaWJsZUNoYW5nZSgkZXZlbnQpXCJcbiAgICBuelRyaWdnZXI9XCJjbGlja1wiXG4gICAgbnpQbGFjZW1lbnQ9XCJib3R0b21SaWdodFwiXG4gICAgW256T3ZlcmxheUNsYXNzTmFtZV09XCJvdmVybGF5Q2xzXCJcbiAgICBbbnpEcm9wZG93bk1lbnVdPVwibm90aWNlTWVudVwiXG4gID5cbiAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiYmFkZ2VUcGxcIiAvPlxuICA8L2Rpdj5cbiAgPG56LWRyb3Bkb3duLW1lbnUgI25vdGljZU1lbnU9XCJuekRyb3Bkb3duTWVudVwiPlxuICAgIDxuei1zcGluIFtuelNwaW5uaW5nXT1cImxvYWRpbmdcIiBbbnpEZWxheV09XCIwXCI+XG4gICAgICA8bnotdGFic2V0IG56U2VsZWN0ZWRJbmRleD1cIjBcIiBbbnpDZW50ZXJlZF09XCJjZW50ZXJlZFwiPlxuICAgICAgICBAZm9yIChpIG9mIGRhdGE7IHRyYWNrICRpbmRleCkge1xuICAgICAgICAgIDxuei10YWIgW256VGl0bGVdPVwiaS50aXRsZVwiPlxuICAgICAgICAgICAgPG5vdGljZS1pY29uLXRhYiBbbG9jYWxlXT1cImxvY2FsZVwiIFtkYXRhXT1cImlcIiAoc2VsZWN0KT1cIm9uU2VsZWN0KCRldmVudClcIiAoY2xlYXIpPVwib25DbGVhcigkZXZlbnQpXCIgLz5cbiAgICAgICAgICA8L256LXRhYj5cbiAgICAgICAgfVxuICAgICAgPC9uei10YWJzZXQ+XG4gICAgPC9uei1zcGluPlxuICA8L256LWRyb3Bkb3duLW1lbnU+XG59XG4iXX0=