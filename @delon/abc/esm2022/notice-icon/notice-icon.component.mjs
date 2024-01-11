import { __decorate } from "tslib";
import { NgClass, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { InputBoolean, InputNumber } from '@delon/util/decorator';
import { NzBadgeComponent } from 'ng-zorro-antd/badge';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { NzSpinComponent } from 'ng-zorro-antd/spin';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NoticeIconTabComponent } from './notice-icon-tab.component';
import * as i0 from "@angular/core";
import * as i1 from "@delon/theme";
import * as i2 from "ng-zorro-antd/dropdown";
import * as i3 from "ng-zorro-antd/tabs";
export class NoticeIconComponent {
    get overlayCls() {
        return `header-dropdown notice-icon${!this.centered ? ' notice-icon__tab-left' : ''}`;
    }
    constructor(i18n, cdr) {
        this.i18n = i18n;
        this.cdr = cdr;
        this.locale = {};
        this.data = [];
        this.loading = false;
        this.popoverVisible = false;
        this.centered = false;
        this.select = new EventEmitter();
        this.clear = new EventEmitter();
        this.popoverVisibleChange = new EventEmitter();
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: NoticeIconComponent, deps: [{ token: i1.DelonLocaleService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.9", type: NoticeIconComponent, isStandalone: true, selector: "notice-icon", inputs: { data: "data", count: "count", loading: "loading", popoverVisible: "popoverVisible", btnClass: "btnClass", btnIconClass: "btnIconClass", centered: "centered" }, outputs: { select: "select", clear: "clear", popoverVisibleChange: "popoverVisibleChange" }, host: { properties: { "class.notice-icon__btn": "true" } }, exportAs: ["noticeIcon"], usesOnChanges: true, ngImport: i0, template: "<ng-template #badgeTpl>\n  <nz-badge [nzCount]=\"count\" [ngClass]=\"btnClass!\" [nzStyle]=\"{ 'box-shadow': 'none' }\">\n    <i nz-icon nzType=\"bell\" [ngClass]=\"btnIconClass!\"></i>\n  </nz-badge>\n</ng-template>\n@if (data!.length <= 0) {\n  <ng-template [ngTemplateOutlet]=\"badgeTpl\" />\n} @else {\n  <div\n    nz-dropdown\n    [nzVisible]=\"popoverVisible\"\n    (nzVisibleChange)=\"onVisibleChange($event)\"\n    nzTrigger=\"click\"\n    nzPlacement=\"bottomRight\"\n    [nzOverlayClassName]=\"overlayCls\"\n    [nzDropdownMenu]=\"noticeMenu\"\n  >\n    <ng-template [ngTemplateOutlet]=\"badgeTpl\" />\n  </div>\n  <nz-dropdown-menu #noticeMenu=\"nzDropdownMenu\">\n    <nz-spin [nzSpinning]=\"loading\" [nzDelay]=\"0\">\n      <nz-tabset nzSelectedIndex=\"0\" [nzCentered]=\"centered\">\n        @for (i of data; track $index) {\n          <nz-tab [nzTitle]=\"i.title\">\n            <notice-icon-tab [locale]=\"locale\" [data]=\"i\" (select)=\"onSelect($event)\" (clear)=\"onClear($event)\" />\n          </nz-tab>\n        }\n      </nz-tabset>\n    </nz-spin>\n  </nz-dropdown-menu>\n}\n", dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: NzBadgeComponent, selector: "nz-badge", inputs: ["nzShowZero", "nzShowDot", "nzStandalone", "nzDot", "nzOverflowCount", "nzColor", "nzStyle", "nzText", "nzTitle", "nzStatus", "nzCount", "nzOffset", "nzSize"], exportAs: ["nzBadge"] }, { kind: "directive", type: NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "ngmodule", type: NzDropDownModule }, { kind: "directive", type: i2.NzDropDownDirective, selector: "[nz-dropdown]", inputs: ["nzDropdownMenu", "nzTrigger", "nzMatchWidthElement", "nzBackdrop", "nzClickHide", "nzDisabled", "nzVisible", "nzOverlayClassName", "nzOverlayStyle", "nzPlacement"], outputs: ["nzVisibleChange"], exportAs: ["nzDropdown"] }, { kind: "component", type: i2.NzDropdownMenuComponent, selector: "nz-dropdown-menu", exportAs: ["nzDropdownMenu"] }, { kind: "component", type: NzSpinComponent, selector: "nz-spin", inputs: ["nzIndicator", "nzSize", "nzTip", "nzDelay", "nzSimple", "nzSpinning"], exportAs: ["nzSpin"] }, { kind: "ngmodule", type: NzTabsModule }, { kind: "component", type: i3.NzTabSetComponent, selector: "nz-tabset", inputs: ["nzSelectedIndex", "nzTabPosition", "nzTabBarExtraContent", "nzCanDeactivate", "nzAddIcon", "nzTabBarStyle", "nzType", "nzSize", "nzAnimated", "nzTabBarGutter", "nzHideAdd", "nzCentered", "nzHideAll", "nzLinkRouter", "nzLinkExact"], outputs: ["nzSelectChange", "nzSelectedIndexChange", "nzTabListScroll", "nzClose", "nzAdd"], exportAs: ["nzTabset"] }, { kind: "component", type: i3.NzTabComponent, selector: "nz-tab", inputs: ["nzTitle", "nzClosable", "nzCloseIcon", "nzDisabled", "nzForceRender"], outputs: ["nzSelect", "nzDeselect", "nzClick", "nzContextmenu"], exportAs: ["nzTab"] }, { kind: "component", type: NoticeIconTabComponent, selector: "notice-icon-tab", inputs: ["locale", "data"], outputs: ["select", "clear"], exportAs: ["noticeIconTab"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
__decorate([
    InputNumber()
], NoticeIconComponent.prototype, "count", void 0);
__decorate([
    InputBoolean()
], NoticeIconComponent.prototype, "loading", void 0);
__decorate([
    InputBoolean()
], NoticeIconComponent.prototype, "popoverVisible", void 0);
__decorate([
    InputBoolean()
], NoticeIconComponent.prototype, "centered", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: NoticeIconComponent, decorators: [{
            type: Component,
            args: [{ selector: 'notice-icon', exportAs: 'noticeIcon', host: { '[class.notice-icon__btn]': 'true' }, preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, standalone: true, imports: [
                        NgClass,
                        NgTemplateOutlet,
                        NzBadgeComponent,
                        NzIconDirective,
                        NzDropDownModule,
                        NzSpinComponent,
                        NzTabsModule,
                        NoticeIconTabComponent
                    ], template: "<ng-template #badgeTpl>\n  <nz-badge [nzCount]=\"count\" [ngClass]=\"btnClass!\" [nzStyle]=\"{ 'box-shadow': 'none' }\">\n    <i nz-icon nzType=\"bell\" [ngClass]=\"btnIconClass!\"></i>\n  </nz-badge>\n</ng-template>\n@if (data!.length <= 0) {\n  <ng-template [ngTemplateOutlet]=\"badgeTpl\" />\n} @else {\n  <div\n    nz-dropdown\n    [nzVisible]=\"popoverVisible\"\n    (nzVisibleChange)=\"onVisibleChange($event)\"\n    nzTrigger=\"click\"\n    nzPlacement=\"bottomRight\"\n    [nzOverlayClassName]=\"overlayCls\"\n    [nzDropdownMenu]=\"noticeMenu\"\n  >\n    <ng-template [ngTemplateOutlet]=\"badgeTpl\" />\n  </div>\n  <nz-dropdown-menu #noticeMenu=\"nzDropdownMenu\">\n    <nz-spin [nzSpinning]=\"loading\" [nzDelay]=\"0\">\n      <nz-tabset nzSelectedIndex=\"0\" [nzCentered]=\"centered\">\n        @for (i of data; track $index) {\n          <nz-tab [nzTitle]=\"i.title\">\n            <notice-icon-tab [locale]=\"locale\" [data]=\"i\" (select)=\"onSelect($event)\" (clear)=\"onClear($event)\" />\n          </nz-tab>\n        }\n      </nz-tabset>\n    </nz-spin>\n  </nz-dropdown-menu>\n}\n" }]
        }], ctorParameters: () => [{ type: i1.DelonLocaleService }, { type: i0.ChangeDetectorRef }], propDecorators: { data: [{
                type: Input
            }], count: [{
                type: Input
            }], loading: [{
                type: Input
            }], popoverVisible: [{
                type: Input
            }], btnClass: [{
                type: Input
            }], btnIconClass: [{
                type: Input
            }], centered: [{
                type: Input
            }], select: [{
                type: Output
            }], clear: [{
                type: Output
            }], popoverVisibleChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWNlLWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL25vdGljZS1pY29uL25vdGljZS1pY29uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9ub3RpY2UtaWNvbi9ub3RpY2UtaWNvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzVELE9BQU8sRUFDTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUNOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUl2QixPQUFPLEVBQWdCLFlBQVksRUFBRSxXQUFXLEVBQWUsTUFBTSx1QkFBdUIsQ0FBQztBQUM3RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7Ozs7QUF1QnJFLE1BQU0sT0FBTyxtQkFBbUI7SUFvQjlCLElBQUksVUFBVTtRQUNaLE9BQU8sOEJBQThCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBQ3hGLENBQUM7SUFFRCxZQUNVLElBQXdCLEVBQ3hCLEdBQXNCO1FBRHRCLFNBQUksR0FBSixJQUFJLENBQW9CO1FBQ3hCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBbkJoQyxXQUFNLEdBQWUsRUFBRSxDQUFDO1FBRWYsU0FBSSxHQUFpQixFQUFFLENBQUM7UUFFUixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBR3ZCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdkIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFvQixDQUFDO1FBQzlDLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQ25DLHlCQUFvQixHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7SUFTbkUsQ0FBQztJQUVKLGVBQWUsQ0FBQyxNQUFlO1FBQzdCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELFFBQVEsQ0FBQyxDQUFtQjtRQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRUQsT0FBTyxDQUFDLEtBQWE7UUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDM0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMzQixDQUFDOzhHQXREVSxtQkFBbUI7a0dBQW5CLG1CQUFtQix5YkMvQ2hDLCtrQ0ErQkEsNENETUksT0FBTyxvRkFDUCxnQkFBZ0Isb0pBQ2hCLGdCQUFnQixxUEFDaEIsZUFBZSxnS0FDZixnQkFBZ0IsMmNBQ2hCLGVBQWUsMEpBQ2YsWUFBWSwyckJBQ1osc0JBQXNCOztBQWFBO0lBQWQsV0FBVyxFQUFFO2tEQUFnQjtBQUNkO0lBQWYsWUFBWSxFQUFFO29EQUFpQjtBQUNoQjtJQUFmLFlBQVksRUFBRTsyREFBd0I7QUFHdkI7SUFBZixZQUFZLEVBQUU7cURBQWtCOzJGQWYvQixtQkFBbUI7a0JBcEIvQixTQUFTOytCQUNFLGFBQWEsWUFDYixZQUFZLFFBRWhCLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxFQUFFLHVCQUN2QixLQUFLLG1CQUNULHVCQUF1QixDQUFDLE1BQU0saUJBQ2hDLGlCQUFpQixDQUFDLElBQUksY0FDekIsSUFBSSxXQUNQO3dCQUNQLE9BQU87d0JBQ1AsZ0JBQWdCO3dCQUNoQixnQkFBZ0I7d0JBQ2hCLGVBQWU7d0JBQ2YsZ0JBQWdCO3dCQUNoQixlQUFlO3dCQUNmLFlBQVk7d0JBQ1osc0JBQXNCO3FCQUN2Qjt1SEFXUSxJQUFJO3NCQUFaLEtBQUs7Z0JBQ2tCLEtBQUs7c0JBQTVCLEtBQUs7Z0JBQ21CLE9BQU87c0JBQS9CLEtBQUs7Z0JBQ21CLGNBQWM7c0JBQXRDLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxZQUFZO3NCQUFwQixLQUFLO2dCQUNtQixRQUFRO3NCQUFoQyxLQUFLO2dCQUNhLE1BQU07c0JBQXhCLE1BQU07Z0JBQ1ksS0FBSztzQkFBdkIsTUFBTTtnQkFDWSxvQkFBb0I7c0JBQXRDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ0NsYXNzLCBOZ1RlbXBsYXRlT3V0bGV0IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IERlbG9uTG9jYWxlU2VydmljZSwgTG9jYWxlRGF0YSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIsIE51bWJlcklucHV0IH0gZnJvbSAnQGRlbG9uL3V0aWwvZGVjb3JhdG9yJztcbmltcG9ydCB7IE56QmFkZ2VDb21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL2JhZGdlJztcbmltcG9ydCB0eXBlIHsgTmdDbGFzc1R5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgTnpEcm9wRG93bk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvZHJvcGRvd24nO1xuaW1wb3J0IHsgTnpJY29uRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pY29uJztcbmltcG9ydCB7IE56U3BpbkNvbXBvbmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQvc3Bpbic7XG5pbXBvcnQgeyBOelRhYnNNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3RhYnMnO1xuXG5pbXBvcnQgeyBOb3RpY2VJY29uVGFiQ29tcG9uZW50IH0gZnJvbSAnLi9ub3RpY2UtaWNvbi10YWIuY29tcG9uZW50JztcbmltcG9ydCB7IE5vdGljZUljb25TZWxlY3QsIE5vdGljZUl0ZW0gfSBmcm9tICcuL25vdGljZS1pY29uLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm90aWNlLWljb24nLFxuICBleHBvcnRBczogJ25vdGljZUljb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vbm90aWNlLWljb24uY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7ICdbY2xhc3Mubm90aWNlLWljb25fX2J0bl0nOiAndHJ1ZScgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXG4gICAgTmdDbGFzcyxcbiAgICBOZ1RlbXBsYXRlT3V0bGV0LFxuICAgIE56QmFkZ2VDb21wb25lbnQsXG4gICAgTnpJY29uRGlyZWN0aXZlLFxuICAgIE56RHJvcERvd25Nb2R1bGUsXG4gICAgTnpTcGluQ29tcG9uZW50LFxuICAgIE56VGFic01vZHVsZSxcbiAgICBOb3RpY2VJY29uVGFiQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTm90aWNlSWNvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfY291bnQ6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbG9hZGluZzogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfcG9wb3ZlclZpc2libGU6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2NlbnRlcmVkOiBCb29sZWFuSW5wdXQ7XG5cbiAgcHJpdmF0ZSBpMThuJCE6IFN1YnNjcmlwdGlvbjtcbiAgbG9jYWxlOiBMb2NhbGVEYXRhID0ge307XG5cbiAgQElucHV0KCkgZGF0YTogTm90aWNlSXRlbVtdID0gW107XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGNvdW50PzogbnVtYmVyO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbG9hZGluZyA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgcG9wb3ZlclZpc2libGUgPSBmYWxzZTtcbiAgQElucHV0KCkgYnRuQ2xhc3M/OiBOZ0NsYXNzVHlwZTtcbiAgQElucHV0KCkgYnRuSWNvbkNsYXNzPzogTmdDbGFzc1R5cGU7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBjZW50ZXJlZCA9IGZhbHNlO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgc2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxOb3RpY2VJY29uU2VsZWN0PigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2xlYXIgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHBvcG92ZXJWaXNpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIGdldCBvdmVybGF5Q2xzKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBoZWFkZXItZHJvcGRvd24gbm90aWNlLWljb24keyF0aGlzLmNlbnRlcmVkID8gJyBub3RpY2UtaWNvbl9fdGFiLWxlZnQnIDogJyd9YDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaTE4bjogRGVsb25Mb2NhbGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHt9XG5cbiAgb25WaXNpYmxlQ2hhbmdlKHJlc3VsdDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMucG9wb3ZlclZpc2libGVDaGFuZ2UuZW1pdChyZXN1bHQpO1xuICB9XG5cbiAgb25TZWxlY3QoaTogTm90aWNlSWNvblNlbGVjdCk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0LmVtaXQoaSk7XG4gIH1cblxuICBvbkNsZWFyKHRpdGxlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFyLmVtaXQodGl0bGUpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pMThuJCA9IHRoaXMuaTE4bi5jaGFuZ2Uuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMubG9jYWxlID0gdGhpcy5pMThuLmdldERhdGEoJ25vdGljZUljb24nKTtcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmkxOG4kLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiIsIjxuZy10ZW1wbGF0ZSAjYmFkZ2VUcGw+XG4gIDxuei1iYWRnZSBbbnpDb3VudF09XCJjb3VudFwiIFtuZ0NsYXNzXT1cImJ0bkNsYXNzIVwiIFtuelN0eWxlXT1cInsgJ2JveC1zaGFkb3cnOiAnbm9uZScgfVwiPlxuICAgIDxpIG56LWljb24gbnpUeXBlPVwiYmVsbFwiIFtuZ0NsYXNzXT1cImJ0bkljb25DbGFzcyFcIj48L2k+XG4gIDwvbnotYmFkZ2U+XG48L25nLXRlbXBsYXRlPlxuQGlmIChkYXRhIS5sZW5ndGggPD0gMCkge1xuICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiYmFkZ2VUcGxcIiAvPlxufSBAZWxzZSB7XG4gIDxkaXZcbiAgICBuei1kcm9wZG93blxuICAgIFtuelZpc2libGVdPVwicG9wb3ZlclZpc2libGVcIlxuICAgIChuelZpc2libGVDaGFuZ2UpPVwib25WaXNpYmxlQ2hhbmdlKCRldmVudClcIlxuICAgIG56VHJpZ2dlcj1cImNsaWNrXCJcbiAgICBuelBsYWNlbWVudD1cImJvdHRvbVJpZ2h0XCJcbiAgICBbbnpPdmVybGF5Q2xhc3NOYW1lXT1cIm92ZXJsYXlDbHNcIlxuICAgIFtuekRyb3Bkb3duTWVudV09XCJub3RpY2VNZW51XCJcbiAgPlxuICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJiYWRnZVRwbFwiIC8+XG4gIDwvZGl2PlxuICA8bnotZHJvcGRvd24tbWVudSAjbm90aWNlTWVudT1cIm56RHJvcGRvd25NZW51XCI+XG4gICAgPG56LXNwaW4gW256U3Bpbm5pbmddPVwibG9hZGluZ1wiIFtuekRlbGF5XT1cIjBcIj5cbiAgICAgIDxuei10YWJzZXQgbnpTZWxlY3RlZEluZGV4PVwiMFwiIFtuekNlbnRlcmVkXT1cImNlbnRlcmVkXCI+XG4gICAgICAgIEBmb3IgKGkgb2YgZGF0YTsgdHJhY2sgJGluZGV4KSB7XG4gICAgICAgICAgPG56LXRhYiBbbnpUaXRsZV09XCJpLnRpdGxlXCI+XG4gICAgICAgICAgICA8bm90aWNlLWljb24tdGFiIFtsb2NhbGVdPVwibG9jYWxlXCIgW2RhdGFdPVwiaVwiIChzZWxlY3QpPVwib25TZWxlY3QoJGV2ZW50KVwiIChjbGVhcik9XCJvbkNsZWFyKCRldmVudClcIiAvPlxuICAgICAgICAgIDwvbnotdGFiPlxuICAgICAgICB9XG4gICAgICA8L256LXRhYnNldD5cbiAgICA8L256LXNwaW4+XG4gIDwvbnotZHJvcGRvd24tbWVudT5cbn1cbiJdfQ==