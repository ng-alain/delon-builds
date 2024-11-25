import { Directionality } from '@angular/cdk/bidi';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, DestroyRef, Input, ViewEncapsulation, inject, numberAttribute } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NzAvatarComponent } from 'ng-zorro-antd/avatar';
import { NzTooltipDirective } from 'ng-zorro-antd/tooltip';
import { AvatarListItemComponent } from './avatar-list-item.component';
import * as i0 from "@angular/core";
/**
 * @deprecated Will be removed in v20, Please use `nz-avatar-group` instead.
 */
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.11", ngImport: i0, type: AvatarListComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.11", type: AvatarListComponent, isStandalone: true, selector: "avatar-list", inputs: { size: "size", maxLength: ["maxLength", "maxLength", numberAttribute], excessItemsStyle: "excessItemsStyle" }, host: { properties: { "class.avatar-list": "true", "class.avatar-list-rtl": "dir === 'rtl'" } }, queries: [{ propertyName: "_items", predicate: AvatarListItemComponent }], exportAs: ["avatarList"], usesOnChanges: true, ngImport: i0, template: "<ul class=\"avatar-list__wrap\">\n  @for (i of items; track $index) {\n    <li [class]=\"cls\">\n      @if (i.tips) {\n        <nz-avatar\n          nz-tooltip\n          [nzTooltipTitle]=\"i.tips\"\n          [nzSrc]=\"i.src\"\n          [nzText]=\"i.text\"\n          [nzIcon]=\"i.icon\"\n          [nzSize]=\"avatarSize\"\n        />\n      } @else {\n        <nz-avatar [nzSrc]=\"i.src\" [nzText]=\"i.text\" [nzIcon]=\"i.icon\" [nzSize]=\"avatarSize\" />\n      }\n    </li>\n  }\n  @if (exceedCount > 0) {\n    <li [class]=\"cls\">\n      <nz-avatar [nzSize]=\"avatarSize\" style=\"cursor: auto\" [style]=\"excessItemsStyle\" [nzText]=\"'+' + exceedCount\" />\n    </li>\n  }\n</ul>\n", dependencies: [{ kind: "component", type: NzAvatarComponent, selector: "nz-avatar", inputs: ["nzShape", "nzSize", "nzGap", "nzText", "nzSrc", "nzSrcSet", "nzAlt", "nzIcon"], outputs: ["nzError"], exportAs: ["nzAvatar"] }, { kind: "directive", type: NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "cdkConnectedOverlayPush", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.11", ngImport: i0, type: AvatarListComponent, decorators: [{
            type: Component,
            args: [{ selector: 'avatar-list', exportAs: 'avatarList', host: {
                        '[class.avatar-list]': 'true',
                        '[class.avatar-list-rtl]': `dir === 'rtl'`
                    }, preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, standalone: true, imports: [NzAvatarComponent, NzTooltipDirective], template: "<ul class=\"avatar-list__wrap\">\n  @for (i of items; track $index) {\n    <li [class]=\"cls\">\n      @if (i.tips) {\n        <nz-avatar\n          nz-tooltip\n          [nzTooltipTitle]=\"i.tips\"\n          [nzSrc]=\"i.src\"\n          [nzText]=\"i.text\"\n          [nzIcon]=\"i.icon\"\n          [nzSize]=\"avatarSize\"\n        />\n      } @else {\n        <nz-avatar [nzSrc]=\"i.src\" [nzText]=\"i.text\" [nzIcon]=\"i.icon\" [nzSize]=\"avatarSize\" />\n      }\n    </li>\n  }\n  @if (exceedCount > 0) {\n    <li [class]=\"cls\">\n      <nz-avatar [nzSize]=\"avatarSize\" style=\"cursor: auto\" [style]=\"excessItemsStyle\" [nzText]=\"'+' + exceedCount\" />\n    </li>\n  }\n</ul>\n" }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL2F2YXRhci1saXN0L2F2YXRhci1saXN0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9hdmF0YXItbGlzdC9hdmF0YXItbGlzdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWEsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUQsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULGVBQWUsRUFDZixVQUFVLEVBQ1YsS0FBSyxFQUdMLGlCQUFpQixFQUNqQixNQUFNLEVBQ04sZUFBZSxFQUNoQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUVoRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV6RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUUzRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7QUFFdkU7O0dBRUc7QUFlSCxNQUFNLE9BQU8sbUJBQW1CO0lBZGhDO1FBZW1CLFFBQUcsR0FBRyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNoQyxtQkFBYyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN4QyxhQUFRLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRXZDLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFJdkIsVUFBSyxHQUE4QixFQUFFLENBQUM7UUFDdEMsZ0JBQVcsR0FBRyxDQUFDLENBQUM7UUFDaEIsUUFBRyxHQUFlLEtBQUssQ0FBQztRQUV4QixRQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ1QsZUFBVSxHQUFr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aUMsU0FBUztzQkFBL0MsS0FBSzt1QkFBQyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUU7Z0JBQzVCLGdCQUFnQjtzQkFBeEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBEZXN0cm95UmVmLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBRdWVyeUxpc3QsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBpbmplY3QsXG4gIG51bWJlckF0dHJpYnV0ZVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRha2VVbnRpbERlc3Ryb3llZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvcnhqcy1pbnRlcm9wJztcblxuaW1wb3J0IHsgTnpBdmF0YXJDb21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL2F2YXRhcic7XG5pbXBvcnQgdHlwZSB7IE5nU3R5bGVJbnRlcmZhY2UsIE56U2l6ZUxEU1R5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgTnpUb29sdGlwRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC90b29sdGlwJztcblxuaW1wb3J0IHsgQXZhdGFyTGlzdEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2F2YXRhci1saXN0LWl0ZW0uY29tcG9uZW50JztcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBXaWxsIGJlIHJlbW92ZWQgaW4gdjIwLCBQbGVhc2UgdXNlIGBuei1hdmF0YXItZ3JvdXBgIGluc3RlYWQuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F2YXRhci1saXN0JyxcbiAgZXhwb3J0QXM6ICdhdmF0YXJMaXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2F2YXRhci1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYXZhdGFyLWxpc3RdJzogJ3RydWUnLFxuICAgICdbY2xhc3MuYXZhdGFyLWxpc3QtcnRsXSc6IGBkaXIgPT09ICdydGwnYFxuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtOekF2YXRhckNvbXBvbmVudCwgTnpUb29sdGlwRGlyZWN0aXZlXVxufSlcbmV4cG9ydCBjbGFzcyBBdmF0YXJMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcbiAgcHJpdmF0ZSByZWFkb25seSBjZHIgPSBpbmplY3QoQ2hhbmdlRGV0ZWN0b3JSZWYpO1xuICBwcml2YXRlIHJlYWRvbmx5IGRpcmVjdGlvbmFsaXR5ID0gaW5qZWN0KERpcmVjdGlvbmFsaXR5KTtcbiAgcHJpdmF0ZSByZWFkb25seSBkZXN0cm95JCA9IGluamVjdChEZXN0cm95UmVmKTtcblxuICBwcml2YXRlIGluaXRlZCA9IGZhbHNlO1xuICBAQ29udGVudENoaWxkcmVuKEF2YXRhckxpc3RJdGVtQ29tcG9uZW50LCB7IGRlc2NlbmRhbnRzOiBmYWxzZSB9KVxuICBwcml2YXRlIHJlYWRvbmx5IF9pdGVtcyE6IFF1ZXJ5TGlzdDxBdmF0YXJMaXN0SXRlbUNvbXBvbmVudD47XG5cbiAgaXRlbXM6IEF2YXRhckxpc3RJdGVtQ29tcG9uZW50W10gPSBbXTtcbiAgZXhjZWVkQ291bnQgPSAwO1xuICBkaXI/OiBEaXJlY3Rpb24gPSAnbHRyJztcblxuICBjbHMgPSAnJztcbiAgYXZhdGFyU2l6ZTogTnpTaXplTERTVHlwZSA9ICdkZWZhdWx0JztcbiAgQElucHV0KClcbiAgc2V0IHNpemUodmFsdWU6ICdsYXJnZScgfCAnc21hbGwnIHwgJ21pbmknIHwgJ2RlZmF1bHQnKSB7XG4gICAgdGhpcy5jbHMgPSBgYXZhdGFyLWxpc3RfX2l0ZW0ke3ZhbHVlID09PSAnZGVmYXVsdCcgPyAnJyA6IGAgYXZhdGFyLWxpc3RfXyR7dmFsdWV9YH1gO1xuICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgIGNhc2UgJ2xhcmdlJzpcbiAgICAgIGNhc2UgJ3NtYWxsJzpcbiAgICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgICAgICB0aGlzLmF2YXRhclNpemUgPSB2YWx1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLmF2YXRhclNpemUgPSAnc21hbGwnO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgQElucHV0KHsgdHJhbnNmb3JtOiBudW1iZXJBdHRyaWJ1dGUgfSkgbWF4TGVuZ3RoID0gMDtcbiAgQElucHV0KCkgZXhjZXNzSXRlbXNTdHlsZTogTmdTdHlsZUludGVyZmFjZSB8IG51bGwgPSBudWxsO1xuXG4gIHByaXZhdGUgZ2VuKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgX2l0ZW1zIH0gPSB0aGlzO1xuICAgIGNvbnN0IG1heExlbmd0aCA9IHRoaXMubWF4TGVuZ3RoID4gMCA/IHRoaXMubWF4TGVuZ3RoIDogX2l0ZW1zLmxlbmd0aDtcbiAgICBjb25zdCBudW1PZkNoaWxkcmVuID0gX2l0ZW1zLmxlbmd0aDtcbiAgICBjb25zdCBudW1Ub1Nob3cgPSBtYXhMZW5ndGggPiAwICYmIG1heExlbmd0aCA+PSBudW1PZkNoaWxkcmVuID8gbnVtT2ZDaGlsZHJlbiA6IG1heExlbmd0aDtcbiAgICB0aGlzLml0ZW1zID0gX2l0ZW1zLnRvQXJyYXkoKS5zbGljZSgwLCBudW1Ub1Nob3cpO1xuICAgIHRoaXMuZXhjZWVkQ291bnQgPSBudW1Ub1Nob3cgPCBudW1PZkNoaWxkcmVuID8gbnVtT2ZDaGlsZHJlbiAtIG1heExlbmd0aCA6IDA7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZGlyID0gdGhpcy5kaXJlY3Rpb25hbGl0eS52YWx1ZTtcbiAgICB0aGlzLmRpcmVjdGlvbmFsaXR5LmNoYW5nZS5waXBlKHRha2VVbnRpbERlc3Ryb3llZCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKGRpcmVjdGlvbiA9PiB7XG4gICAgICB0aGlzLmRpciA9IGRpcmVjdGlvbjtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgICB0aGlzLmdlbigpO1xuICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmluaXRlZCkge1xuICAgICAgdGhpcy5nZW4oKTtcbiAgICB9XG4gIH1cbn1cbiIsIjx1bCBjbGFzcz1cImF2YXRhci1saXN0X193cmFwXCI+XG4gIEBmb3IgKGkgb2YgaXRlbXM7IHRyYWNrICRpbmRleCkge1xuICAgIDxsaSBbY2xhc3NdPVwiY2xzXCI+XG4gICAgICBAaWYgKGkudGlwcykge1xuICAgICAgICA8bnotYXZhdGFyXG4gICAgICAgICAgbnotdG9vbHRpcFxuICAgICAgICAgIFtuelRvb2x0aXBUaXRsZV09XCJpLnRpcHNcIlxuICAgICAgICAgIFtuelNyY109XCJpLnNyY1wiXG4gICAgICAgICAgW256VGV4dF09XCJpLnRleHRcIlxuICAgICAgICAgIFtuekljb25dPVwiaS5pY29uXCJcbiAgICAgICAgICBbbnpTaXplXT1cImF2YXRhclNpemVcIlxuICAgICAgICAvPlxuICAgICAgfSBAZWxzZSB7XG4gICAgICAgIDxuei1hdmF0YXIgW256U3JjXT1cImkuc3JjXCIgW256VGV4dF09XCJpLnRleHRcIiBbbnpJY29uXT1cImkuaWNvblwiIFtuelNpemVdPVwiYXZhdGFyU2l6ZVwiIC8+XG4gICAgICB9XG4gICAgPC9saT5cbiAgfVxuICBAaWYgKGV4Y2VlZENvdW50ID4gMCkge1xuICAgIDxsaSBbY2xhc3NdPVwiY2xzXCI+XG4gICAgICA8bnotYXZhdGFyIFtuelNpemVdPVwiYXZhdGFyU2l6ZVwiIHN0eWxlPVwiY3Vyc29yOiBhdXRvXCIgW3N0eWxlXT1cImV4Y2Vzc0l0ZW1zU3R5bGVcIiBbbnpUZXh0XT1cIicrJyArIGV4Y2VlZENvdW50XCIgLz5cbiAgICA8L2xpPlxuICB9XG48L3VsPlxuIl19