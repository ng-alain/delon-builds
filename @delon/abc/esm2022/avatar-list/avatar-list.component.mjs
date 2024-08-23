import { Directionality } from '@angular/cdk/bidi';
import { NgClass, NgStyle } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, DestroyRef, Input, ViewEncapsulation, inject, numberAttribute } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NzAvatarComponent } from 'ng-zorro-antd/avatar';
import { NzTooltipDirective } from 'ng-zorro-antd/tooltip';
import { AvatarListItemComponent } from './avatar-list-item.component';
import * as i0 from "@angular/core";
export class AvatarListComponent {
    constructor() {
        this.cdr = inject(ChangeDetectorRef);
        this.directionality = inject(Directionality);
        this.destroy$ = inject(DestroyRef);
        this.inited = false;
        this.items = [];
        this.exceedCount = 0;
        this.dir = 'ltr';
        this.cls = '';
        this.avatarSize = 'default';
        this.maxLength = 0;
        this.excessItemsStyle = null;
    }
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
        this.directionality.change.pipe(takeUntilDestroyed(this.destroy$)).subscribe(direction => {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.1", ngImport: i0, type: AvatarListComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.1", type: AvatarListComponent, isStandalone: true, selector: "avatar-list", inputs: { size: "size", maxLength: ["maxLength", "maxLength", numberAttribute], excessItemsStyle: "excessItemsStyle" }, host: { properties: { "class.avatar-list": "true", "class.avatar-list-rtl": "dir === 'rtl'" } }, queries: [{ propertyName: "_items", predicate: AvatarListItemComponent }], exportAs: ["avatarList"], usesOnChanges: true, ngImport: i0, template: "<ul class=\"avatar-list__wrap\">\n  @for (i of items; track $index) {\n    <li [ngClass]=\"cls\">\n      @if (i.tips) {\n        <nz-avatar\n          nz-tooltip\n          [nzTooltipTitle]=\"i.tips\"\n          [nzSrc]=\"i.src\"\n          [nzText]=\"i.text\"\n          [nzIcon]=\"i.icon\"\n          [nzSize]=\"avatarSize\"\n        />\n      } @else {\n        <nz-avatar [nzSrc]=\"i.src\" [nzText]=\"i.text\" [nzIcon]=\"i.icon\" [nzSize]=\"avatarSize\" />\n      }\n    </li>\n  }\n  @if (exceedCount > 0) {\n    <li [ngClass]=\"cls\">\n      <nz-avatar [nzSize]=\"avatarSize\" style=\"cursor: auto\" [ngStyle]=\"excessItemsStyle\" [nzText]=\"'+' + exceedCount\" />\n    </li>\n  }\n</ul>\n", dependencies: [{ kind: "directive", type: NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "component", type: NzAvatarComponent, selector: "nz-avatar", inputs: ["nzShape", "nzSize", "nzGap", "nzText", "nzSrc", "nzSrcSet", "nzAlt", "nzIcon"], outputs: ["nzError"], exportAs: ["nzAvatar"] }, { kind: "directive", type: NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "cdkConnectedOverlayPush", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.1", ngImport: i0, type: AvatarListComponent, decorators: [{
            type: Component,
            args: [{ selector: 'avatar-list', exportAs: 'avatarList', host: {
                        '[class.avatar-list]': 'true',
                        '[class.avatar-list-rtl]': `dir === 'rtl'`
                    }, preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, standalone: true, imports: [NgStyle, NgClass, NzAvatarComponent, NzTooltipDirective], template: "<ul class=\"avatar-list__wrap\">\n  @for (i of items; track $index) {\n    <li [ngClass]=\"cls\">\n      @if (i.tips) {\n        <nz-avatar\n          nz-tooltip\n          [nzTooltipTitle]=\"i.tips\"\n          [nzSrc]=\"i.src\"\n          [nzText]=\"i.text\"\n          [nzIcon]=\"i.icon\"\n          [nzSize]=\"avatarSize\"\n        />\n      } @else {\n        <nz-avatar [nzSrc]=\"i.src\" [nzText]=\"i.text\" [nzIcon]=\"i.icon\" [nzSize]=\"avatarSize\" />\n      }\n    </li>\n  }\n  @if (exceedCount > 0) {\n    <li [ngClass]=\"cls\">\n      <nz-avatar [nzSize]=\"avatarSize\" style=\"cursor: auto\" [ngStyle]=\"excessItemsStyle\" [nzText]=\"'+' + exceedCount\" />\n    </li>\n  }\n</ul>\n" }]
        }], propDecorators: { _items: [{
                type: ContentChildren,
                args: [AvatarListItemComponent, { descendants: false }]
            }], size: [{
                type: Input
            }], maxLength: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], excessItemsStyle: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL2F2YXRhci1saXN0L2F2YXRhci1saXN0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9hdmF0YXItbGlzdC9hdmF0YXItbGlzdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWEsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUQsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNuRCxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsZUFBZSxFQUNmLFVBQVUsRUFDVixLQUFLLEVBR0wsaUJBQWlCLEVBQ2pCLE1BQU0sRUFDTixlQUFlLEVBQ2hCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRWhFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXpELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRTNELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDOztBQWdCdkUsTUFBTSxPQUFPLG1CQUFtQjtJQWRoQztRQWVtQixRQUFHLEdBQUcsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDaEMsbUJBQWMsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDeEMsYUFBUSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUV2QyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBSXZCLFVBQUssR0FBOEIsRUFBRSxDQUFDO1FBQ3RDLGdCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLFFBQUcsR0FBZSxLQUFLLENB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QU07c0JBRHRCLGVBQWU7dUJBQUMsdUJBQXVCLEVBQUUsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFO2dCQVU1RCxJQUFJO3NCQURQLEtBQUs7Z0JBY2lDLFNBQVM7c0JBQS9DLEtBQUs7dUJBQUMsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFO2dCQUM1QixnQkFBZ0I7c0JBQXhCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3Rpb24sIERpcmVjdGlvbmFsaXR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHsgTmdDbGFzcywgTmdTdHlsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBEZXN0cm95UmVmLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBRdWVyeUxpc3QsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBpbmplY3QsXG4gIG51bWJlckF0dHJpYnV0ZVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRha2VVbnRpbERlc3Ryb3llZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvcnhqcy1pbnRlcm9wJztcblxuaW1wb3J0IHsgTnpBdmF0YXJDb21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL2F2YXRhcic7XG5pbXBvcnQgdHlwZSB7IE5nU3R5bGVJbnRlcmZhY2UsIE56U2l6ZUxEU1R5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgTnpUb29sdGlwRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC90b29sdGlwJztcblxuaW1wb3J0IHsgQXZhdGFyTGlzdEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2F2YXRhci1saXN0LWl0ZW0uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXZhdGFyLWxpc3QnLFxuICBleHBvcnRBczogJ2F2YXRhckxpc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vYXZhdGFyLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hdmF0YXItbGlzdF0nOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy5hdmF0YXItbGlzdC1ydGxdJzogYGRpciA9PT0gJ3J0bCdgXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW05nU3R5bGUsIE5nQ2xhc3MsIE56QXZhdGFyQ29tcG9uZW50LCBOelRvb2x0aXBEaXJlY3RpdmVdXG59KVxuZXhwb3J0IGNsYXNzIEF2YXRhckxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xuICBwcml2YXRlIHJlYWRvbmx5IGNkciA9IGluamVjdChDaGFuZ2VEZXRlY3RvclJlZik7XG4gIHByaXZhdGUgcmVhZG9ubHkgZGlyZWN0aW9uYWxpdHkgPSBpbmplY3QoRGlyZWN0aW9uYWxpdHkpO1xuICBwcml2YXRlIHJlYWRvbmx5IGRlc3Ryb3kkID0gaW5qZWN0KERlc3Ryb3lSZWYpO1xuXG4gIHByaXZhdGUgaW5pdGVkID0gZmFsc2U7XG4gIEBDb250ZW50Q2hpbGRyZW4oQXZhdGFyTGlzdEl0ZW1Db21wb25lbnQsIHsgZGVzY2VuZGFudHM6IGZhbHNlIH0pXG4gIHByaXZhdGUgcmVhZG9ubHkgX2l0ZW1zITogUXVlcnlMaXN0PEF2YXRhckxpc3RJdGVtQ29tcG9uZW50PjtcblxuICBpdGVtczogQXZhdGFyTGlzdEl0ZW1Db21wb25lbnRbXSA9IFtdO1xuICBleGNlZWRDb3VudCA9IDA7XG4gIGRpcj86IERpcmVjdGlvbiA9ICdsdHInO1xuXG4gIGNscyA9ICcnO1xuICBhdmF0YXJTaXplOiBOelNpemVMRFNUeXBlID0gJ2RlZmF1bHQnO1xuICBASW5wdXQoKVxuICBzZXQgc2l6ZSh2YWx1ZTogJ2xhcmdlJyB8ICdzbWFsbCcgfCAnbWluaScgfCAnZGVmYXVsdCcpIHtcbiAgICB0aGlzLmNscyA9IGBhdmF0YXItbGlzdF9faXRlbSR7dmFsdWUgPT09ICdkZWZhdWx0JyA/ICcnIDogYCBhdmF0YXItbGlzdF9fJHt2YWx1ZX1gfWA7XG4gICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgY2FzZSAnbGFyZ2UnOlxuICAgICAgY2FzZSAnc21hbGwnOlxuICAgICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgICAgIHRoaXMuYXZhdGFyU2l6ZSA9IHZhbHVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMuYXZhdGFyU2l6ZSA9ICdzbWFsbCc7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBASW5wdXQoeyB0cmFuc2Zvcm06IG51bWJlckF0dHJpYnV0ZSB9KSBtYXhMZW5ndGggPSAwO1xuICBASW5wdXQoKSBleGNlc3NJdGVtc1N0eWxlOiBOZ1N0eWxlSW50ZXJmYWNlIHwgbnVsbCA9IG51bGw7XG5cbiAgcHJpdmF0ZSBnZW4oKTogdm9pZCB7XG4gICAgY29uc3QgeyBfaXRlbXMgfSA9IHRoaXM7XG4gICAgY29uc3QgbWF4TGVuZ3RoID0gdGhpcy5tYXhMZW5ndGggPiAwID8gdGhpcy5tYXhMZW5ndGggOiBfaXRlbXMubGVuZ3RoO1xuICAgIGNvbnN0IG51bU9mQ2hpbGRyZW4gPSBfaXRlbXMubGVuZ3RoO1xuICAgIGNvbnN0IG51bVRvU2hvdyA9IG1heExlbmd0aCA+IDAgJiYgbWF4TGVuZ3RoID49IG51bU9mQ2hpbGRyZW4gPyBudW1PZkNoaWxkcmVuIDogbWF4TGVuZ3RoO1xuICAgIHRoaXMuaXRlbXMgPSBfaXRlbXMudG9BcnJheSgpLnNsaWNlKDAsIG51bVRvU2hvdyk7XG4gICAgdGhpcy5leGNlZWRDb3VudCA9IG51bVRvU2hvdyA8IG51bU9mQ2hpbGRyZW4gPyBudW1PZkNoaWxkcmVuIC0gbWF4TGVuZ3RoIDogMDtcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5kaXIgPSB0aGlzLmRpcmVjdGlvbmFsaXR5LnZhbHVlO1xuICAgIHRoaXMuZGlyZWN0aW9uYWxpdHkuY2hhbmdlLnBpcGUodGFrZVVudGlsRGVzdHJveWVkKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoZGlyZWN0aW9uID0+IHtcbiAgICAgIHRoaXMuZGlyID0gZGlyZWN0aW9uO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuICAgIHRoaXMuZ2VuKCk7XG4gICAgdGhpcy5pbml0ZWQgPSB0cnVlO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW5pdGVkKSB7XG4gICAgICB0aGlzLmdlbigpO1xuICAgIH1cbiAgfVxufVxuIiwiPHVsIGNsYXNzPVwiYXZhdGFyLWxpc3RfX3dyYXBcIj5cbiAgQGZvciAoaSBvZiBpdGVtczsgdHJhY2sgJGluZGV4KSB7XG4gICAgPGxpIFtuZ0NsYXNzXT1cImNsc1wiPlxuICAgICAgQGlmIChpLnRpcHMpIHtcbiAgICAgICAgPG56LWF2YXRhclxuICAgICAgICAgIG56LXRvb2x0aXBcbiAgICAgICAgICBbbnpUb29sdGlwVGl0bGVdPVwiaS50aXBzXCJcbiAgICAgICAgICBbbnpTcmNdPVwiaS5zcmNcIlxuICAgICAgICAgIFtuelRleHRdPVwiaS50ZXh0XCJcbiAgICAgICAgICBbbnpJY29uXT1cImkuaWNvblwiXG4gICAgICAgICAgW256U2l6ZV09XCJhdmF0YXJTaXplXCJcbiAgICAgICAgLz5cbiAgICAgIH0gQGVsc2Uge1xuICAgICAgICA8bnotYXZhdGFyIFtuelNyY109XCJpLnNyY1wiIFtuelRleHRdPVwiaS50ZXh0XCIgW256SWNvbl09XCJpLmljb25cIiBbbnpTaXplXT1cImF2YXRhclNpemVcIiAvPlxuICAgICAgfVxuICAgIDwvbGk+XG4gIH1cbiAgQGlmIChleGNlZWRDb3VudCA+IDApIHtcbiAgICA8bGkgW25nQ2xhc3NdPVwiY2xzXCI+XG4gICAgICA8bnotYXZhdGFyIFtuelNpemVdPVwiYXZhdGFyU2l6ZVwiIHN0eWxlPVwiY3Vyc29yOiBhdXRvXCIgW25nU3R5bGVdPVwiZXhjZXNzSXRlbXNTdHlsZVwiIFtuelRleHRdPVwiJysnICsgZXhjZWVkQ291bnRcIiAvPlxuICAgIDwvbGk+XG4gIH1cbjwvdWw+XG4iXX0=