import { __decorate } from "tslib";
import { NgClass, NgStyle } from '@angular/common';
import { ChangeDetectionStrategy, Component, ContentChildren, Input, Optional, ViewEncapsulation } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { InputNumber } from '@delon/util/decorator';
import { NzAvatarComponent } from 'ng-zorro-antd/avatar';
import { NzTooltipDirective } from 'ng-zorro-antd/tooltip';
import { AvatarListItemComponent } from './avatar-list-item.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/bidi";
export class AvatarListComponent {
    set size(value) {
        this.cls = `avatar-list__item${value === 'default' ? '' : ` avatar-list__${value}`}`;
        switch (value) {
            case 'large':
            case 'small':
            case 'default':
                this.avatarSize = value;
                break;
            default:
                this.avatarSize = 'small';
                break;
        }
    }
    constructor(cdr, directionality) {
        this.cdr = cdr;
        this.directionality = directionality;
        this.inited = false;
        this.dir$ = this.directionality.change?.pipe(takeUntilDestroyed());
        this.items = [];
        this.exceedCount = 0;
        this.dir = 'ltr';
        this.cls = '';
        this.avatarSize = 'default';
        this.maxLength = 0;
        this.excessItemsStyle = null;
    }
    gen() {
        const { _items } = this;
        const maxLength = this.maxLength > 0 ? this.maxLength : _items.length;
        const numOfChildren = _items.length;
        const numToShow = maxLength > 0 && maxLength >= numOfChildren ? numOfChildren : maxLength;
        this.items = _items.toArray().slice(0, numToShow);
        this.exceedCount = numToShow < numOfChildren ? numOfChildren - maxLength : 0;
        this.cdr.detectChanges();
    }
    ngAfterViewInit() {
        this.dir = this.directionality.value;
        this.dir$.subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        this.gen();
        this.inited = true;
    }
    ngOnChanges() {
        if (this.inited) {
            this.gen();
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: AvatarListComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i1.Directionality, optional: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.9", type: AvatarListComponent, isStandalone: true, selector: "avatar-list", inputs: { size: "size", maxLength: "maxLength", excessItemsStyle: "excessItemsStyle" }, host: { properties: { "class.avatar-list": "true", "class.avatar-list-rtl": "dir === 'rtl'" } }, queries: [{ propertyName: "_items", predicate: AvatarListItemComponent }], exportAs: ["avatarList"], usesOnChanges: true, ngImport: i0, template: "<ul class=\"avatar-list__wrap\">\n  @for (i of items; track $index) {\n    <li [ngClass]=\"cls\">\n      @if (i.tips) {\n        <nz-avatar\n          nz-tooltip\n          [nzTooltipTitle]=\"i.tips\"\n          [nzSrc]=\"i.src\"\n          [nzText]=\"i.text\"\n          [nzIcon]=\"i.icon\"\n          [nzSize]=\"avatarSize\"\n        />\n      } @else {\n        <nz-avatar [nzSrc]=\"i.src\" [nzText]=\"i.text\" [nzIcon]=\"i.icon\" [nzSize]=\"avatarSize\" />\n      }\n    </li>\n  }\n  @if (exceedCount > 0) {\n    <li [ngClass]=\"cls\">\n      <nz-avatar [nzSize]=\"avatarSize\" style=\"cursor: auto\" [ngStyle]=\"excessItemsStyle\" [nzText]=\"'+' + exceedCount\" />\n    </li>\n  }\n</ul>\n", dependencies: [{ kind: "directive", type: NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "component", type: NzAvatarComponent, selector: "nz-avatar", inputs: ["nzShape", "nzSize", "nzGap", "nzText", "nzSrc", "nzSrcSet", "nzAlt", "nzIcon"], outputs: ["nzError"], exportAs: ["nzAvatar"] }, { kind: "directive", type: NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "cdkConnectedOverlayPush", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
__decorate([
    InputNumber()
], AvatarListComponent.prototype, "maxLength", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: AvatarListComponent, decorators: [{
            type: Component,
            args: [{ selector: 'avatar-list', exportAs: 'avatarList', host: {
                        '[class.avatar-list]': 'true',
                        '[class.avatar-list-rtl]': `dir === 'rtl'`
                    }, preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, standalone: true, imports: [NgStyle, NgClass, NzAvatarComponent, NzTooltipDirective], template: "<ul class=\"avatar-list__wrap\">\n  @for (i of items; track $index) {\n    <li [ngClass]=\"cls\">\n      @if (i.tips) {\n        <nz-avatar\n          nz-tooltip\n          [nzTooltipTitle]=\"i.tips\"\n          [nzSrc]=\"i.src\"\n          [nzText]=\"i.text\"\n          [nzIcon]=\"i.icon\"\n          [nzSize]=\"avatarSize\"\n        />\n      } @else {\n        <nz-avatar [nzSrc]=\"i.src\" [nzText]=\"i.text\" [nzIcon]=\"i.icon\" [nzSize]=\"avatarSize\" />\n      }\n    </li>\n  }\n  @if (exceedCount > 0) {\n    <li [ngClass]=\"cls\">\n      <nz-avatar [nzSize]=\"avatarSize\" style=\"cursor: auto\" [ngStyle]=\"excessItemsStyle\" [nzText]=\"'+' + exceedCount\" />\n    </li>\n  }\n</ul>\n" }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i1.Directionality, decorators: [{
                    type: Optional
                }] }], propDecorators: { _items: [{
                type: ContentChildren,
                args: [AvatarListItemComponent, { descendants: false }]
            }], size: [{
                type: Input
            }], maxLength: [{
                type: Input
            }], excessItemsStyle: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL2F2YXRhci1saXN0L2F2YXRhci1saXN0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9hdmF0YXItbGlzdC9hdmF0YXItbGlzdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNuRCxPQUFPLEVBRUwsdUJBQXVCLEVBRXZCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsS0FBSyxFQUVMLFFBQVEsRUFFUixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFaEUsT0FBTyxFQUFFLFdBQVcsRUFBZSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXpELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRTNELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7QUFnQnZFLE1BQU0sT0FBTyxtQkFBbUI7SUFjOUIsSUFDSSxJQUFJLENBQUMsS0FBNkM7UUFDcEQsSUFBSSxDQUFDLEdBQUcsR0FBRyxvQkFBb0IsS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsS0FBSyxFQUFFLEVBQUUsQ0FBQztRQUNyRixRQUFRLEtBQUssRUFBRTtZQUNiLEtBQUssT0FBTyxDQUFDO1lBQ2IsS0FBSyxPQUFPLENBQUM7WUFDYixLQUFLLFNBQVM7Z0JBQ1osSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7Z0JBQ3hCLE1BQU07WUFDUjtn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QUssRUFBRTtnQkFXNUQsSUFBSTtzQkFEUCxLQUFLO2dCQWNrQixTQUFTO3NCQUFoQyxLQUFLO2dCQUNHLGdCQUFnQjtzQkFBeEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQgeyBOZ0NsYXNzLCBOZ1N0eWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9wdGlvbmFsLFxuICBRdWVyeUxpc3QsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdGFrZVVudGlsRGVzdHJveWVkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZS9yeGpzLWludGVyb3AnO1xuXG5pbXBvcnQgeyBJbnB1dE51bWJlciwgTnVtYmVySW5wdXQgfSBmcm9tICdAZGVsb24vdXRpbC9kZWNvcmF0b3InO1xuaW1wb3J0IHsgTnpBdmF0YXJDb21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL2F2YXRhcic7XG5pbXBvcnQgdHlwZSB7IE5nU3R5bGVJbnRlcmZhY2UsIE56U2l6ZUxEU1R5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgTnpUb29sdGlwRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC90b29sdGlwJztcblxuaW1wb3J0IHsgQXZhdGFyTGlzdEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2F2YXRhci1saXN0LWl0ZW0uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXZhdGFyLWxpc3QnLFxuICBleHBvcnRBczogJ2F2YXRhckxpc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vYXZhdGFyLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hdmF0YXItbGlzdF0nOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy5hdmF0YXItbGlzdC1ydGxdJzogYGRpciA9PT0gJ3J0bCdgXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW05nU3R5bGUsIE5nQ2xhc3MsIE56QXZhdGFyQ29tcG9uZW50LCBOelRvb2x0aXBEaXJlY3RpdmVdXG59KVxuZXhwb3J0IGNsYXNzIEF2YXRhckxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbWF4TGVuZ3RoOiBOdW1iZXJJbnB1dDtcblxuICBwcml2YXRlIGluaXRlZCA9IGZhbHNlO1xuICBAQ29udGVudENoaWxkcmVuKEF2YXRhckxpc3RJdGVtQ29tcG9uZW50LCB7IGRlc2NlbmRhbnRzOiBmYWxzZSB9KVxuICBwcml2YXRlIF9pdGVtcyE6IFF1ZXJ5TGlzdDxBdmF0YXJMaXN0SXRlbUNvbXBvbmVudD47XG4gIHByaXZhdGUgZGlyJCA9IHRoaXMuZGlyZWN0aW9uYWxpdHkuY2hhbmdlPy5waXBlKHRha2VVbnRpbERlc3Ryb3llZCgpKTtcblxuICBpdGVtczogQXZhdGFyTGlzdEl0ZW1Db21wb25lbnRbXSA9IFtdO1xuICBleGNlZWRDb3VudCA9IDA7XG4gIGRpcjogRGlyZWN0aW9uID0gJ2x0cic7XG5cbiAgY2xzID0gJyc7XG4gIGF2YXRhclNpemU6IE56U2l6ZUxEU1R5cGUgPSAnZGVmYXVsdCc7XG4gIEBJbnB1dCgpXG4gIHNldCBzaXplKHZhbHVlOiAnbGFyZ2UnIHwgJ3NtYWxsJyB8ICdtaW5pJyB8ICdkZWZhdWx0Jykge1xuICAgIHRoaXMuY2xzID0gYGF2YXRhci1saXN0X19pdGVtJHt2YWx1ZSA9PT0gJ2RlZmF1bHQnID8gJycgOiBgIGF2YXRhci1saXN0X18ke3ZhbHVlfWB9YDtcbiAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICBjYXNlICdsYXJnZSc6XG4gICAgICBjYXNlICdzbWFsbCc6XG4gICAgICBjYXNlICdkZWZhdWx0JzpcbiAgICAgICAgdGhpcy5hdmF0YXJTaXplID0gdmFsdWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy5hdmF0YXJTaXplID0gJ3NtYWxsJztcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIG1heExlbmd0aCA9IDA7XG4gIEBJbnB1dCgpIGV4Y2Vzc0l0ZW1zU3R5bGU6IE5nU3R5bGVJbnRlcmZhY2UgfCBudWxsID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBkaXJlY3Rpb25hbGl0eTogRGlyZWN0aW9uYWxpdHlcbiAgKSB7fVxuXG4gIHByaXZhdGUgZ2VuKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgX2l0ZW1zIH0gPSB0aGlzO1xuICAgIGNvbnN0IG1heExlbmd0aCA9IHRoaXMubWF4TGVuZ3RoID4gMCA/IHRoaXMubWF4TGVuZ3RoIDogX2l0ZW1zLmxlbmd0aDtcbiAgICBjb25zdCBudW1PZkNoaWxkcmVuID0gX2l0ZW1zLmxlbmd0aDtcbiAgICBjb25zdCBudW1Ub1Nob3cgPSBtYXhMZW5ndGggPiAwICYmIG1heExlbmd0aCA+PSBudW1PZkNoaWxkcmVuID8gbnVtT2ZDaGlsZHJlbiA6IG1heExlbmd0aDtcbiAgICB0aGlzLml0ZW1zID0gX2l0ZW1zLnRvQXJyYXkoKS5zbGljZSgwLCBudW1Ub1Nob3cpO1xuICAgIHRoaXMuZXhjZWVkQ291bnQgPSBudW1Ub1Nob3cgPCBudW1PZkNoaWxkcmVuID8gbnVtT2ZDaGlsZHJlbiAtIG1heExlbmd0aCA6IDA7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZGlyID0gdGhpcy5kaXJlY3Rpb25hbGl0eS52YWx1ZTtcbiAgICB0aGlzLmRpciQuc3Vic2NyaWJlKChkaXJlY3Rpb246IERpcmVjdGlvbikgPT4ge1xuICAgICAgdGhpcy5kaXIgPSBkaXJlY3Rpb247XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gICAgdGhpcy5nZW4oKTtcbiAgICB0aGlzLmluaXRlZCA9IHRydWU7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pbml0ZWQpIHtcbiAgICAgIHRoaXMuZ2VuKCk7XG4gICAgfVxuICB9XG59XG4iLCI8dWwgY2xhc3M9XCJhdmF0YXItbGlzdF9fd3JhcFwiPlxuICBAZm9yIChpIG9mIGl0ZW1zOyB0cmFjayAkaW5kZXgpIHtcbiAgICA8bGkgW25nQ2xhc3NdPVwiY2xzXCI+XG4gICAgICBAaWYgKGkudGlwcykge1xuICAgICAgICA8bnotYXZhdGFyXG4gICAgICAgICAgbnotdG9vbHRpcFxuICAgICAgICAgIFtuelRvb2x0aXBUaXRsZV09XCJpLnRpcHNcIlxuICAgICAgICAgIFtuelNyY109XCJpLnNyY1wiXG4gICAgICAgICAgW256VGV4dF09XCJpLnRleHRcIlxuICAgICAgICAgIFtuekljb25dPVwiaS5pY29uXCJcbiAgICAgICAgICBbbnpTaXplXT1cImF2YXRhclNpemVcIlxuICAgICAgICAvPlxuICAgICAgfSBAZWxzZSB7XG4gICAgICAgIDxuei1hdmF0YXIgW256U3JjXT1cImkuc3JjXCIgW256VGV4dF09XCJpLnRleHRcIiBbbnpJY29uXT1cImkuaWNvblwiIFtuelNpemVdPVwiYXZhdGFyU2l6ZVwiIC8+XG4gICAgICB9XG4gICAgPC9saT5cbiAgfVxuICBAaWYgKGV4Y2VlZENvdW50ID4gMCkge1xuICAgIDxsaSBbbmdDbGFzc109XCJjbHNcIj5cbiAgICAgIDxuei1hdmF0YXIgW256U2l6ZV09XCJhdmF0YXJTaXplXCIgc3R5bGU9XCJjdXJzb3I6IGF1dG9cIiBbbmdTdHlsZV09XCJleGNlc3NJdGVtc1N0eWxlXCIgW256VGV4dF09XCInKycgKyBleGNlZWRDb3VudFwiIC8+XG4gICAgPC9saT5cbiAgfVxuPC91bD5cbiJdfQ==