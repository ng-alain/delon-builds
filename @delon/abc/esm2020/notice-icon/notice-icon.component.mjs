import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { InputBoolean, InputNumber } from '@delon/util/decorator';
import * as i0 from "@angular/core";
import * as i1 from "@delon/theme";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/badge";
import * as i4 from "ng-zorro-antd/dropdown";
import * as i5 from "ng-zorro-antd/icon";
import * as i6 from "ng-zorro-antd/spin";
import * as i7 from "ng-zorro-antd/tabs";
import * as i8 from "./notice-icon-tab.component";
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
}
NoticeIconComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: NoticeIconComponent, deps: [{ token: i1.DelonLocaleService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
NoticeIconComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.3", type: NoticeIconComponent, selector: "notice-icon", inputs: { data: "data", count: "count", loading: "loading", popoverVisible: "popoverVisible", btnClass: "btnClass", btnIconClass: "btnIconClass", centered: "centered" }, outputs: { select: "select", clear: "clear", popoverVisibleChange: "popoverVisibleChange" }, host: { properties: { "class.notice-icon__btn": "true" } }, exportAs: ["noticeIcon"], usesOnChanges: true, ngImport: i0, template: "<ng-template #badgeTpl>\n  <nz-badge [nzCount]=\"count\" [ngClass]=\"btnClass!\" [nzStyle]=\"{ 'box-shadow': 'none' }\">\n    <i nz-icon nzType=\"bell\" [ngClass]=\"btnIconClass!\"></i>\n  </nz-badge>\n</ng-template>\n<div *ngIf=\"data!.length === 0\">\n  <ng-template [ngTemplateOutlet]=\"badgeTpl\"></ng-template>\n</div>\n<div\n  *ngIf=\"data!.length > 0\"\n  nz-dropdown\n  [nzVisible]=\"popoverVisible\"\n  (nzVisibleChange)=\"onVisibleChange($event)\"\n  nzTrigger=\"click\"\n  nzPlacement=\"bottomRight\"\n  [nzOverlayClassName]=\"overlayCls\"\n  [nzDropdownMenu]=\"noticeMenu\"\n>\n  <ng-template [ngTemplateOutlet]=\"badgeTpl\"></ng-template>\n</div>\n<nz-dropdown-menu #noticeMenu=\"nzDropdownMenu\">\n  <nz-spin [nzSpinning]=\"loading\" [nzDelay]=\"0\">\n    <nz-tabset nzSelectedIndex=\"0\" [nzCentered]=\"centered\">\n      <nz-tab *ngFor=\"let i of data\" [nzTitle]=\"i.title\">\n        <notice-icon-tab\n          [locale]=\"locale\"\n          [data]=\"i\"\n          (select)=\"onSelect($event)\"\n          (clear)=\"onClear($event)\"\n        ></notice-icon-tab>\n      </nz-tab>\n    </nz-tabset>\n  </nz-spin>\n</nz-dropdown-menu>\n", dependencies: [{ kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: i3.NzBadgeComponent, selector: "nz-badge", inputs: ["nzShowZero", "nzShowDot", "nzStandalone", "nzDot", "nzOverflowCount", "nzColor", "nzStyle", "nzText", "nzTitle", "nzStatus", "nzCount", "nzOffset", "nzSize"], exportAs: ["nzBadge"] }, { kind: "directive", type: i4.NzDropDownDirective, selector: "[nz-dropdown]", inputs: ["nzDropdownMenu", "nzTrigger", "nzMatchWidthElement", "nzBackdrop", "nzClickHide", "nzDisabled", "nzVisible", "nzOverlayClassName", "nzOverlayStyle", "nzPlacement"], outputs: ["nzVisibleChange"], exportAs: ["nzDropdown"] }, { kind: "component", type: i4.NzDropdownMenuComponent, selector: "nz-dropdown-menu", exportAs: ["nzDropdownMenu"] }, { kind: "directive", type: i5.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "component", type: i6.NzSpinComponent, selector: "nz-spin", inputs: ["nzIndicator", "nzSize", "nzTip", "nzDelay", "nzSimple", "nzSpinning"], exportAs: ["nzSpin"] }, { kind: "component", type: i7.NzTabSetComponent, selector: "nz-tabset", inputs: ["nzSelectedIndex", "nzTabPosition", "nzTabBarExtraContent", "nzCanDeactivate", "nzAddIcon", "nzTabBarStyle", "nzType", "nzSize", "nzAnimated", "nzTabBarGutter", "nzHideAdd", "nzCentered", "nzHideAll", "nzLinkRouter", "nzLinkExact"], outputs: ["nzSelectChange", "nzSelectedIndexChange", "nzTabListScroll", "nzClose", "nzAdd"], exportAs: ["nzTabset"] }, { kind: "component", type: i7.NzTabComponent, selector: "nz-tab", inputs: ["nzTitle", "nzClosable", "nzCloseIcon", "nzDisabled", "nzForceRender"], outputs: ["nzSelect", "nzDeselect", "nzClick", "nzContextmenu"], exportAs: ["nzTab"] }, { kind: "component", type: i8.NoticeIconTabComponent, selector: "notice-icon-tab", inputs: ["locale", "data"], outputs: ["select", "clear"], exportAs: ["noticeIconTab"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: NoticeIconComponent, decorators: [{
            type: Component,
            args: [{ selector: 'notice-icon', exportAs: 'noticeIcon', host: { '[class.notice-icon__btn]': 'true' }, preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<ng-template #badgeTpl>\n  <nz-badge [nzCount]=\"count\" [ngClass]=\"btnClass!\" [nzStyle]=\"{ 'box-shadow': 'none' }\">\n    <i nz-icon nzType=\"bell\" [ngClass]=\"btnIconClass!\"></i>\n  </nz-badge>\n</ng-template>\n<div *ngIf=\"data!.length === 0\">\n  <ng-template [ngTemplateOutlet]=\"badgeTpl\"></ng-template>\n</div>\n<div\n  *ngIf=\"data!.length > 0\"\n  nz-dropdown\n  [nzVisible]=\"popoverVisible\"\n  (nzVisibleChange)=\"onVisibleChange($event)\"\n  nzTrigger=\"click\"\n  nzPlacement=\"bottomRight\"\n  [nzOverlayClassName]=\"overlayCls\"\n  [nzDropdownMenu]=\"noticeMenu\"\n>\n  <ng-template [ngTemplateOutlet]=\"badgeTpl\"></ng-template>\n</div>\n<nz-dropdown-menu #noticeMenu=\"nzDropdownMenu\">\n  <nz-spin [nzSpinning]=\"loading\" [nzDelay]=\"0\">\n    <nz-tabset nzSelectedIndex=\"0\" [nzCentered]=\"centered\">\n      <nz-tab *ngFor=\"let i of data\" [nzTitle]=\"i.title\">\n        <notice-icon-tab\n          [locale]=\"locale\"\n          [data]=\"i\"\n          (select)=\"onSelect($event)\"\n          (clear)=\"onClear($event)\"\n        ></notice-icon-tab>\n      </nz-tab>\n    </nz-tabset>\n  </nz-spin>\n</nz-dropdown-menu>\n" }]
        }], ctorParameters: function () { return [{ type: i1.DelonLocaleService }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { data: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWNlLWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL25vdGljZS1pY29uL25vdGljZS1pY29uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9ub3RpY2UtaWNvbi9ub3RpY2UtaWNvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUV2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFJTCxNQUFNLEVBQ04saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBSXZCLE9BQU8sRUFBZ0IsWUFBWSxFQUFFLFdBQVcsRUFBZSxNQUFNLHVCQUF1QixDQUFDOzs7Ozs7Ozs7O0FBYzdGLE1BQU0sT0FBTyxtQkFBbUI7SUFvQjlCLElBQUksVUFBVTtRQUNaLE9BQU8sOEJBQThCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBQ3hGLENBQUM7SUFFRCxZQUFvQixJQUF3QixFQUFVLEdBQXNCO1FBQXhELFNBQUksR0FBSixJQUFJLENBQW9CO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFqQjVFLFdBQU0sR0FBZSxFQUFFLENBQUM7UUFFZixTQUFJLEdBQWlCLEVBQUUsQ0FBQztRQUVSLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFHdkIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUN2QixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQW9CLENBQUM7UUFDOUMsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDbkMseUJBQW9CLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztJQU1TLENBQUM7SUFFaEYsZUFBZSxDQUFDLE1BQWU7UUFDN0IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsUUFBUSxDQUFDLENBQW1CO1FBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxPQUFPLENBQUMsS0FBYTtRQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUMzQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzlDLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzNCLENBQUM7O2dIQW5EVSxtQkFBbUI7b0dBQW5CLG1CQUFtQixxYUM3QmhDLG9vQ0FrQ0E7QURLMEI7SUFBZCxXQUFXLEVBQUU7a0RBQWdCO0FBQ2Q7SUFBZixZQUFZLEVBQUU7b0RBQWlCO0FBQ2hCO0lBQWYsWUFBWSxFQUFFOzJEQUF3QjtBQUd2QjtJQUFmLFlBQVksRUFBRTtxREFBa0I7MkZBZi9CLG1CQUFtQjtrQkFUL0IsU0FBUzsrQkFDRSxhQUFhLFlBQ2IsWUFBWSxRQUVoQixFQUFFLDBCQUEwQixFQUFFLE1BQU0sRUFBRSx1QkFDdkIsS0FBSyxtQkFDVCx1QkFBdUIsQ0FBQyxNQUFNLGlCQUNoQyxpQkFBaUIsQ0FBQyxJQUFJO3lJQVc1QixJQUFJO3NCQUFaLEtBQUs7Z0JBQ2tCLEtBQUs7c0JBQTVCLEtBQUs7Z0JBQ21CLE9BQU87c0JBQS9CLEtBQUs7Z0JBQ21CLGNBQWM7c0JBQXRDLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxZQUFZO3NCQUFwQixLQUFLO2dCQUNtQixRQUFRO3NCQUFoQyxLQUFLO2dCQUNhLE1BQU07c0JBQXhCLE1BQU07Z0JBQ1ksS0FBSztzQkFBdkIsTUFBTTtnQkFDWSxvQkFBb0I7c0JBQXRDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBEZWxvbkxvY2FsZVNlcnZpY2UsIExvY2FsZURhdGEgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyLCBOdW1iZXJJbnB1dCB9IGZyb20gJ0BkZWxvbi91dGlsL2RlY29yYXRvcic7XG5pbXBvcnQgdHlwZSB7IE5nQ2xhc3NUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuaW1wb3J0IHsgTm90aWNlSWNvblNlbGVjdCwgTm90aWNlSXRlbSB9IGZyb20gJy4vbm90aWNlLWljb24udHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3RpY2UtaWNvbicsXG4gIGV4cG9ydEFzOiAnbm90aWNlSWNvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9ub3RpY2UtaWNvbi5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHsgJ1tjbGFzcy5ub3RpY2UtaWNvbl9fYnRuXSc6ICd0cnVlJyB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgTm90aWNlSWNvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfY291bnQ6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbG9hZGluZzogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfcG9wb3ZlclZpc2libGU6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2NlbnRlcmVkOiBCb29sZWFuSW5wdXQ7XG5cbiAgcHJpdmF0ZSBpMThuJCE6IFN1YnNjcmlwdGlvbjtcbiAgbG9jYWxlOiBMb2NhbGVEYXRhID0ge307XG5cbiAgQElucHV0KCkgZGF0YTogTm90aWNlSXRlbVtdID0gW107XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGNvdW50PzogbnVtYmVyO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbG9hZGluZyA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgcG9wb3ZlclZpc2libGUgPSBmYWxzZTtcbiAgQElucHV0KCkgYnRuQ2xhc3M/OiBOZ0NsYXNzVHlwZTtcbiAgQElucHV0KCkgYnRuSWNvbkNsYXNzPzogTmdDbGFzc1R5cGU7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBjZW50ZXJlZCA9IGZhbHNlO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgc2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxOb3RpY2VJY29uU2VsZWN0PigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2xlYXIgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHBvcG92ZXJWaXNpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIGdldCBvdmVybGF5Q2xzKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBoZWFkZXItZHJvcGRvd24gbm90aWNlLWljb24keyF0aGlzLmNlbnRlcmVkID8gJyBub3RpY2UtaWNvbl9fdGFiLWxlZnQnIDogJyd9YDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaTE4bjogRGVsb25Mb2NhbGVTZXJ2aWNlLCBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgb25WaXNpYmxlQ2hhbmdlKHJlc3VsdDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMucG9wb3ZlclZpc2libGVDaGFuZ2UuZW1pdChyZXN1bHQpO1xuICB9XG5cbiAgb25TZWxlY3QoaTogTm90aWNlSWNvblNlbGVjdCk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0LmVtaXQoaSk7XG4gIH1cblxuICBvbkNsZWFyKHRpdGxlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFyLmVtaXQodGl0bGUpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pMThuJCA9IHRoaXMuaTE4bi5jaGFuZ2Uuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMubG9jYWxlID0gdGhpcy5pMThuLmdldERhdGEoJ25vdGljZUljb24nKTtcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmkxOG4kLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiIsIjxuZy10ZW1wbGF0ZSAjYmFkZ2VUcGw+XG4gIDxuei1iYWRnZSBbbnpDb3VudF09XCJjb3VudFwiIFtuZ0NsYXNzXT1cImJ0bkNsYXNzIVwiIFtuelN0eWxlXT1cInsgJ2JveC1zaGFkb3cnOiAnbm9uZScgfVwiPlxuICAgIDxpIG56LWljb24gbnpUeXBlPVwiYmVsbFwiIFtuZ0NsYXNzXT1cImJ0bkljb25DbGFzcyFcIj48L2k+XG4gIDwvbnotYmFkZ2U+XG48L25nLXRlbXBsYXRlPlxuPGRpdiAqbmdJZj1cImRhdGEhLmxlbmd0aCA9PT0gMFwiPlxuICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiYmFkZ2VUcGxcIj48L25nLXRlbXBsYXRlPlxuPC9kaXY+XG48ZGl2XG4gICpuZ0lmPVwiZGF0YSEubGVuZ3RoID4gMFwiXG4gIG56LWRyb3Bkb3duXG4gIFtuelZpc2libGVdPVwicG9wb3ZlclZpc2libGVcIlxuICAobnpWaXNpYmxlQ2hhbmdlKT1cIm9uVmlzaWJsZUNoYW5nZSgkZXZlbnQpXCJcbiAgbnpUcmlnZ2VyPVwiY2xpY2tcIlxuICBuelBsYWNlbWVudD1cImJvdHRvbVJpZ2h0XCJcbiAgW256T3ZlcmxheUNsYXNzTmFtZV09XCJvdmVybGF5Q2xzXCJcbiAgW256RHJvcGRvd25NZW51XT1cIm5vdGljZU1lbnVcIlxuPlxuICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiYmFkZ2VUcGxcIj48L25nLXRlbXBsYXRlPlxuPC9kaXY+XG48bnotZHJvcGRvd24tbWVudSAjbm90aWNlTWVudT1cIm56RHJvcGRvd25NZW51XCI+XG4gIDxuei1zcGluIFtuelNwaW5uaW5nXT1cImxvYWRpbmdcIiBbbnpEZWxheV09XCIwXCI+XG4gICAgPG56LXRhYnNldCBuelNlbGVjdGVkSW5kZXg9XCIwXCIgW256Q2VudGVyZWRdPVwiY2VudGVyZWRcIj5cbiAgICAgIDxuei10YWIgKm5nRm9yPVwibGV0IGkgb2YgZGF0YVwiIFtuelRpdGxlXT1cImkudGl0bGVcIj5cbiAgICAgICAgPG5vdGljZS1pY29uLXRhYlxuICAgICAgICAgIFtsb2NhbGVdPVwibG9jYWxlXCJcbiAgICAgICAgICBbZGF0YV09XCJpXCJcbiAgICAgICAgICAoc2VsZWN0KT1cIm9uU2VsZWN0KCRldmVudClcIlxuICAgICAgICAgIChjbGVhcik9XCJvbkNsZWFyKCRldmVudClcIlxuICAgICAgICA+PC9ub3RpY2UtaWNvbi10YWI+XG4gICAgICA8L256LXRhYj5cbiAgICA8L256LXRhYnNldD5cbiAgPC9uei1zcGluPlxuPC9uei1kcm9wZG93bi1tZW51PlxuIl19