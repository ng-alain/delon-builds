import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, ContentChildren, DestroyRef, Input, Optional, ViewEncapsulation, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { InputNumber } from '@delon/util/decorator';
import { AvatarListItemComponent } from './avatar-list-item.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/bidi";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/avatar";
import * as i4 from "ng-zorro-antd/tooltip";
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
        this.destroy$ = inject(DestroyRef);
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
        this.directionality.change?.pipe(takeUntilDestroyed(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
        });
        this.gen();
        this.inited = true;
    }
    ngOnChanges() {
        if (this.inited) {
            this.gen();
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.7", ngImport: i0, type: AvatarListComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i1.Directionality, optional: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.7", type: AvatarListComponent, selector: "avatar-list", inputs: { size: "size", maxLength: "maxLength", excessItemsStyle: "excessItemsStyle" }, host: { properties: { "class.avatar-list": "true", "class.avatar-list-rtl": "dir === 'rtl'" } }, queries: [{ propertyName: "_items", predicate: AvatarListItemComponent }], exportAs: ["avatarList"], usesOnChanges: true, ngImport: i0, template: "<ul class=\"avatar-list__wrap\">\n  <li *ngFor=\"let i of items\" [ngClass]=\"cls\">\n    <nz-avatar\n      *ngIf=\"i.tips\"\n      nz-tooltip\n      [nzTooltipTitle]=\"i.tips\"\n      [nzSrc]=\"i.src\"\n      [nzText]=\"i.text\"\n      [nzIcon]=\"i.icon\"\n      [nzSize]=\"avatarSize\"\n    ></nz-avatar>\n    <nz-avatar *ngIf=\"!i.tips\" [nzSrc]=\"i.src\" [nzText]=\"i.text\" [nzIcon]=\"i.icon\" [nzSize]=\"avatarSize\"></nz-avatar>\n  </li>\n  <li *ngIf=\"exceedCount > 0\" [ngClass]=\"cls\">\n    <nz-avatar\n      [nzSize]=\"avatarSize\"\n      style=\"cursor: auto\"\n      [ngStyle]=\"excessItemsStyle\"\n      [nzText]=\"'+' + exceedCount\"\n    ></nz-avatar>\n  </li>\n</ul>\n", dependencies: [{ kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "component", type: i3.NzAvatarComponent, selector: "nz-avatar", inputs: ["nzShape", "nzSize", "nzGap", "nzText", "nzSrc", "nzSrcSet", "nzAlt", "nzIcon"], outputs: ["nzError"], exportAs: ["nzAvatar"] }, { kind: "directive", type: i4.NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
__decorate([
    InputNumber()
], AvatarListComponent.prototype, "maxLength", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.7", ngImport: i0, type: AvatarListComponent, decorators: [{
            type: Component,
            args: [{ selector: 'avatar-list', exportAs: 'avatarList', host: {
                        '[class.avatar-list]': 'true',
                        '[class.avatar-list-rtl]': `dir === 'rtl'`
                    }, preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<ul class=\"avatar-list__wrap\">\n  <li *ngFor=\"let i of items\" [ngClass]=\"cls\">\n    <nz-avatar\n      *ngIf=\"i.tips\"\n      nz-tooltip\n      [nzTooltipTitle]=\"i.tips\"\n      [nzSrc]=\"i.src\"\n      [nzText]=\"i.text\"\n      [nzIcon]=\"i.icon\"\n      [nzSize]=\"avatarSize\"\n    ></nz-avatar>\n    <nz-avatar *ngIf=\"!i.tips\" [nzSrc]=\"i.src\" [nzText]=\"i.text\" [nzIcon]=\"i.icon\" [nzSize]=\"avatarSize\"></nz-avatar>\n  </li>\n  <li *ngIf=\"exceedCount > 0\" [ngClass]=\"cls\">\n    <nz-avatar\n      [nzSize]=\"avatarSize\"\n      style=\"cursor: auto\"\n      [ngStyle]=\"excessItemsStyle\"\n      [nzText]=\"'+' + exceedCount\"\n    ></nz-avatar>\n  </li>\n</ul>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.Directionality, decorators: [{
                    type: Optional
                }] }]; }, propDecorators: { _items: [{
                type: ContentChildren,
                args: [AvatarListItemComponent, { descendants: false }]
            }], size: [{
                type: Input
            }], maxLength: [{
                type: Input
            }], excessItemsStyle: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL2F2YXRhci1saXN0L2F2YXRhci1saXN0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9hdmF0YXItbGlzdC9hdmF0YXItbGlzdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUVMLHVCQUF1QixFQUV2QixTQUFTLEVBQ1QsZUFBZSxFQUNmLFVBQVUsRUFDVixLQUFLLEVBRUwsUUFBUSxFQUVSLGlCQUFpQixFQUNqQixNQUFNLEVBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFaEUsT0FBTyxFQUFFLFdBQVcsRUFBZSxNQUFNLHVCQUF1QixDQUFDO0FBR2pFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7Ozs7QUFjdkUsTUFBTSxPQUFPLG1CQUFtQjtJQWM5QixJQUNJLElBQUksQ0FBQyxLQUE2QztRQUNwRCxJQUFJLENBQUMsR0FBRyxHQUFHLG9CQUFvQixLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixLQUFLLEVBQUUsRUFBRSxDQUFDO1FBQ3JGLFFBQVEsS0FBSyxFQUFFO1lBQ2IsS0FBSyxPQUFPLENBQUM7WUFDYixLQUFLLE9BQU8sQ0FBQztZQUNiLEtBQUssU0FBUztnQkFDWixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztnQkFDeEIsTUFBTTtZQUNSO2dCQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDO2dCQUMxQixNQUFNO1NBQ1Q7SUFDSCxDQUFDO0lBSUQsWUFDVSxHQUFzQixFQUNWLGNBQThCO1FBRDFDLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ1YsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBOUI1QyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBR2YsYUFBUSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUV0QyxVQUFLLEdBQThCLEVBQUUsQ0FBQztRQUN0QyxnQkFBVyxHQUFHLENBQUMsQ0FBQztRQUNoQixRQUFHLEdBQWMsS0FBSyxDQUFDO1FBRXZCLFFBQUcsR0FBRyxFQUFFLENBQUM7UUFDVCxlQUFVLEdBQWtCLFNBQVMsQ0FBQztRQWVkLGNBQVMsR0FBRyxDQUFDLENBQUM7UUFDN0IscUJBQWdCLEdBQTRCLElBQUksQ0FBQztJQUt2RCxDQUFDO0lBRUksR0FBRztRQUNULE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDeEIsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDdEUsTUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUNwQyxNQUFNLFNBQVMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxJQUFJLFNBQVMsSUFBSSxhQUFhLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQzFGLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUM7UUFDckMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFNBQW9CLEVBQUUsRUFBRTtZQUNyRyxJQUFJLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNYLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQ1o7SUFDSCxDQUFDOzhHQTNEVSxtQkFBbUI7a0dBQW5CLG1CQUFtQixtUUFJYix1QkFBdUIsNEVDdEMxQyxnckJBc0JBOztBRHdDMEI7SUFBZCxXQUFXLEVBQUU7c0RBQWU7MkZBNUIzQixtQkFBbUI7a0JBWi9CLFNBQVM7K0JBQ0UsYUFBYSxZQUNiLFlBQVksUUFFaEI7d0JBQ0oscUJBQXFCLEVBQUUsTUFBTTt3QkFDN0IseUJBQXlCLEVBQUUsZUFBZTtxQkFDM0MsdUJBQ29CLEtBQUssbUJBQ1QsdUJBQXVCLENBQUMsTUFBTSxpQkFDaEMsaUJBQWlCLENBQUMsSUFBSTs7MEJBbUNsQyxRQUFROzRDQTVCSCxNQUFNO3NCQURiLGVBQWU7dUJBQUMsdUJBQXVCLEVBQUUsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFO2dCQVc1RCxJQUFJO3NCQURQLEtBQUs7Z0JBY2tCLFNBQVM7c0JBQWhDLEtBQUs7Z0JBQ0csZ0JBQWdCO3NCQUF4QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIERlc3Ryb3lSZWYsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9wdGlvbmFsLFxuICBRdWVyeUxpc3QsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBpbmplY3Rcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0YWtlVW50aWxEZXN0cm95ZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlL3J4anMtaW50ZXJvcCc7XG5cbmltcG9ydCB7IElucHV0TnVtYmVyLCBOdW1iZXJJbnB1dCB9IGZyb20gJ0BkZWxvbi91dGlsL2RlY29yYXRvcic7XG5pbXBvcnQgdHlwZSB7IE5nU3R5bGVJbnRlcmZhY2UsIE56U2l6ZUxEU1R5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5pbXBvcnQgeyBBdmF0YXJMaXN0SXRlbUNvbXBvbmVudCB9IGZyb20gJy4vYXZhdGFyLWxpc3QtaXRlbS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhdmF0YXItbGlzdCcsXG4gIGV4cG9ydEFzOiAnYXZhdGFyTGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9hdmF0YXItbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmF2YXRhci1saXN0XSc6ICd0cnVlJyxcbiAgICAnW2NsYXNzLmF2YXRhci1saXN0LXJ0bF0nOiBgZGlyID09PSAncnRsJ2BcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEF2YXRhckxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbWF4TGVuZ3RoOiBOdW1iZXJJbnB1dDtcblxuICBwcml2YXRlIGluaXRlZCA9IGZhbHNlO1xuICBAQ29udGVudENoaWxkcmVuKEF2YXRhckxpc3RJdGVtQ29tcG9uZW50LCB7IGRlc2NlbmRhbnRzOiBmYWxzZSB9KVxuICBwcml2YXRlIF9pdGVtcyE6IFF1ZXJ5TGlzdDxBdmF0YXJMaXN0SXRlbUNvbXBvbmVudD47XG4gIHByaXZhdGUgZGVzdHJveSQgPSBpbmplY3QoRGVzdHJveVJlZik7XG5cbiAgaXRlbXM6IEF2YXRhckxpc3RJdGVtQ29tcG9uZW50W10gPSBbXTtcbiAgZXhjZWVkQ291bnQgPSAwO1xuICBkaXI6IERpcmVjdGlvbiA9ICdsdHInO1xuXG4gIGNscyA9ICcnO1xuICBhdmF0YXJTaXplOiBOelNpemVMRFNUeXBlID0gJ2RlZmF1bHQnO1xuICBASW5wdXQoKVxuICBzZXQgc2l6ZSh2YWx1ZTogJ2xhcmdlJyB8ICdzbWFsbCcgfCAnbWluaScgfCAnZGVmYXVsdCcpIHtcbiAgICB0aGlzLmNscyA9IGBhdmF0YXItbGlzdF9faXRlbSR7dmFsdWUgPT09ICdkZWZhdWx0JyA/ICcnIDogYCBhdmF0YXItbGlzdF9fJHt2YWx1ZX1gfWA7XG4gICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgY2FzZSAnbGFyZ2UnOlxuICAgICAgY2FzZSAnc21hbGwnOlxuICAgICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgICAgIHRoaXMuYXZhdGFyU2l6ZSA9IHZhbHVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMuYXZhdGFyU2l6ZSA9ICdzbWFsbCc7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBtYXhMZW5ndGggPSAwO1xuICBASW5wdXQoKSBleGNlc3NJdGVtc1N0eWxlOiBOZ1N0eWxlSW50ZXJmYWNlIHwgbnVsbCA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZGlyZWN0aW9uYWxpdHk6IERpcmVjdGlvbmFsaXR5XG4gICkge31cblxuICBwcml2YXRlIGdlbigpOiB2b2lkIHtcbiAgICBjb25zdCB7IF9pdGVtcyB9ID0gdGhpcztcbiAgICBjb25zdCBtYXhMZW5ndGggPSB0aGlzLm1heExlbmd0aCA+IDAgPyB0aGlzLm1heExlbmd0aCA6IF9pdGVtcy5sZW5ndGg7XG4gICAgY29uc3QgbnVtT2ZDaGlsZHJlbiA9IF9pdGVtcy5sZW5ndGg7XG4gICAgY29uc3QgbnVtVG9TaG93ID0gbWF4TGVuZ3RoID4gMCAmJiBtYXhMZW5ndGggPj0gbnVtT2ZDaGlsZHJlbiA/IG51bU9mQ2hpbGRyZW4gOiBtYXhMZW5ndGg7XG4gICAgdGhpcy5pdGVtcyA9IF9pdGVtcy50b0FycmF5KCkuc2xpY2UoMCwgbnVtVG9TaG93KTtcbiAgICB0aGlzLmV4Y2VlZENvdW50ID0gbnVtVG9TaG93IDwgbnVtT2ZDaGlsZHJlbiA/IG51bU9mQ2hpbGRyZW4gLSBtYXhMZW5ndGggOiAwO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmRpciA9IHRoaXMuZGlyZWN0aW9uYWxpdHkudmFsdWU7XG4gICAgdGhpcy5kaXJlY3Rpb25hbGl0eS5jaGFuZ2U/LnBpcGUodGFrZVVudGlsRGVzdHJveWVkKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKGRpcmVjdGlvbjogRGlyZWN0aW9uKSA9PiB7XG4gICAgICB0aGlzLmRpciA9IGRpcmVjdGlvbjtcbiAgICB9KTtcbiAgICB0aGlzLmdlbigpO1xuICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmluaXRlZCkge1xuICAgICAgdGhpcy5nZW4oKTtcbiAgICB9XG4gIH1cbn1cbiIsIjx1bCBjbGFzcz1cImF2YXRhci1saXN0X193cmFwXCI+XG4gIDxsaSAqbmdGb3I9XCJsZXQgaSBvZiBpdGVtc1wiIFtuZ0NsYXNzXT1cImNsc1wiPlxuICAgIDxuei1hdmF0YXJcbiAgICAgICpuZ0lmPVwiaS50aXBzXCJcbiAgICAgIG56LXRvb2x0aXBcbiAgICAgIFtuelRvb2x0aXBUaXRsZV09XCJpLnRpcHNcIlxuICAgICAgW256U3JjXT1cImkuc3JjXCJcbiAgICAgIFtuelRleHRdPVwiaS50ZXh0XCJcbiAgICAgIFtuekljb25dPVwiaS5pY29uXCJcbiAgICAgIFtuelNpemVdPVwiYXZhdGFyU2l6ZVwiXG4gICAgPjwvbnotYXZhdGFyPlxuICAgIDxuei1hdmF0YXIgKm5nSWY9XCIhaS50aXBzXCIgW256U3JjXT1cImkuc3JjXCIgW256VGV4dF09XCJpLnRleHRcIiBbbnpJY29uXT1cImkuaWNvblwiIFtuelNpemVdPVwiYXZhdGFyU2l6ZVwiPjwvbnotYXZhdGFyPlxuICA8L2xpPlxuICA8bGkgKm5nSWY9XCJleGNlZWRDb3VudCA+IDBcIiBbbmdDbGFzc109XCJjbHNcIj5cbiAgICA8bnotYXZhdGFyXG4gICAgICBbbnpTaXplXT1cImF2YXRhclNpemVcIlxuICAgICAgc3R5bGU9XCJjdXJzb3I6IGF1dG9cIlxuICAgICAgW25nU3R5bGVdPVwiZXhjZXNzSXRlbXNTdHlsZVwiXG4gICAgICBbbnpUZXh0XT1cIicrJyArIGV4Y2VlZENvdW50XCJcbiAgICA+PC9uei1hdmF0YXI+XG4gIDwvbGk+XG48L3VsPlxuIl19