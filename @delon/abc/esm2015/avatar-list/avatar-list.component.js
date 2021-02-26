import { __decorate, __metadata } from "tslib";
import { Directionality } from '@angular/cdk/bidi';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, Input, Optional, QueryList, ViewEncapsulation, } from '@angular/core';
import { InputNumber } from '@delon/util/decorator';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AvatarListItemComponent } from './avatar-list-item.component';
export class AvatarListComponent {
    constructor(cdr, directionality) {
        this.cdr = cdr;
        this.directionality = directionality;
        this.inited = false;
        this.destroy$ = new Subject();
        this.items = [];
        this.exceedCount = 0;
        this.dir = 'ltr';
        this.cls = '';
        this.avatarSize = 'default';
        this.maxLength = 0;
    }
    set size(value) {
        this.cls = 'avatar-list__item' + (value === 'default' ? '' : ` avatar-list__${value}`);
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
        var _a;
        this.dir = this.directionality.value;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
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
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
AvatarListComponent.decorators = [
    { type: Component, args: [{
                selector: 'avatar-list',
                exportAs: 'avatarList',
                template: "<ul class=\"avatar-list__wrap\">\n  <li *ngFor=\"let i of items\" [ngClass]=\"cls\">\n    <nz-avatar *ngIf=\"i.tips\" nz-tooltip [nzTooltipTitle]=\"i.tips\" [nzSrc]=\"i.src\" [nzText]=\"i.text\" [nzIcon]=\"i.icon\" [nzSize]=\"avatarSize\"></nz-avatar>\n    <nz-avatar *ngIf=\"!i.tips\" [nzSrc]=\"i.src\" [nzText]=\"i.text\" [nzIcon]=\"i.icon\" [nzSize]=\"avatarSize\"></nz-avatar>\n  </li>\n  <li *ngIf=\"exceedCount > 0\" [ngClass]=\"cls\">\n    <nz-avatar [nzSize]=\"avatarSize\" style=\"cursor: auto;\" [ngStyle]=\"excessItemsStyle\" [nzText]=\"'+' + exceedCount\"></nz-avatar>\n  </li>\n</ul>\n",
                host: {
                    '[class.avatar-list]': 'true',
                    '[class.avatar-list-rtl]': `dir === 'rtl'`,
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            },] }
];
/** @nocollapse */
AvatarListComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: Directionality, decorators: [{ type: Optional }] }
];
AvatarListComponent.propDecorators = {
    _items: [{ type: ContentChildren, args: [AvatarListItemComponent, { descendants: false },] }],
    size: [{ type: Input }],
    maxLength: [{ type: Input }],
    excessItemsStyle: [{ type: Input }]
};
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], AvatarListComponent.prototype, "maxLength", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL2F2YXRhci1saXN0L2F2YXRhci1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFhLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzlELE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsS0FBSyxFQUdMLFFBQVEsRUFDUixTQUFTLEVBQ1QsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQWUsTUFBTSx1QkFBdUIsQ0FBQztBQUVqRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQWN2RSxNQUFNLE9BQU8sbUJBQW1CO0lBK0I5QixZQUFvQixHQUFzQixFQUFzQixjQUE4QjtRQUExRSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUFzQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUE1QnRGLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFHZixhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUV2QyxVQUFLLEdBQThCLEVBQUUsQ0FBQztRQUN0QyxnQkFBVyxHQUFHLENBQUMsQ0FBQztRQUNoQixRQUFHLEdBQWMsS0FBSyxDQUFDO1FBRXZCLFFBQUcsR0FBRyxFQUFFLENBQUM7UUFDVCxlQUFVLEdBQWtCLFNBQVMsQ0FBQztRQWVkLGNBQVMsR0FBRyxDQUFDLENBQUM7SUFHMkQsQ0FBQztJQWpCbEcsSUFDSSxJQUFJLENBQUMsS0FBNkM7UUFDcEQsSUFBSSxDQUFDLEdBQUcsR0FBRyxtQkFBbUIsR0FBRyxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDdkYsUUFBUSxLQUFLLEVBQUU7WUFDYixLQUFLLE9BQU8sQ0FBQztZQUNiLEtBQUssT0FBTyxDQUFDO1lBQ2IsS0FBSyxTQUFTO2dCQUNaLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO2dCQUN4QixNQUFNO1lBQ1I7Z0JBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUM7Z0JBQzFCLE1BQU07U0FDVDtJQUNILENBQUM7SUFNTyxHQUFHO1FBQ1QsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQztRQUN4QixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUN0RSxNQUFNLGFBQWEsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ3BDLE1BQU0sU0FBUyxHQUFHLFNBQVMsR0FBRyxDQUFDLElBQUksU0FBUyxJQUFJLGFBQWEsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDMUYsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3RSxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxlQUFlOztRQUNiLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUM7UUFDckMsTUFBQSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sMENBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsU0FBb0IsRUFBRSxFQUFFO1lBQzVGLElBQUksQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDO1FBQ3ZCLENBQUMsRUFBRTtRQUNILElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNYLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQ1o7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7WUF6RUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUUsWUFBWTtnQkFDdEIsa21CQUEyQztnQkFDM0MsSUFBSSxFQUFFO29CQUNKLHFCQUFxQixFQUFFLE1BQU07b0JBQzdCLHlCQUF5QixFQUFFLGVBQWU7aUJBQzNDO2dCQUNELG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0Qzs7OztZQTNCQyxpQkFBaUI7WUFKQyxjQUFjLHVCQStEYSxRQUFROzs7cUJBM0JwRCxlQUFlLFNBQUMsdUJBQXVCLEVBQUUsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFO21CQVUvRCxLQUFLO3dCQWNMLEtBQUs7K0JBQ0wsS0FBSzs7QUFEa0I7SUFBZCxXQUFXLEVBQUU7O3NEQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT3B0aW9uYWwsXG4gIFF1ZXJ5TGlzdCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXROdW1iZXIsIE51bWJlcklucHV0IH0gZnJvbSAnQGRlbG9uL3V0aWwvZGVjb3JhdG9yJztcbmltcG9ydCB7IE56U2l6ZUxEU1R5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXZhdGFyTGlzdEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2F2YXRhci1saXN0LWl0ZW0uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXZhdGFyLWxpc3QnLFxuICBleHBvcnRBczogJ2F2YXRhckxpc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vYXZhdGFyLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hdmF0YXItbGlzdF0nOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy5hdmF0YXItbGlzdC1ydGxdJzogYGRpciA9PT0gJ3J0bCdgLFxuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIEF2YXRhckxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9tYXhMZW5ndGg6IE51bWJlcklucHV0O1xuXG4gIHByaXZhdGUgaW5pdGVkID0gZmFsc2U7XG4gIEBDb250ZW50Q2hpbGRyZW4oQXZhdGFyTGlzdEl0ZW1Db21wb25lbnQsIHsgZGVzY2VuZGFudHM6IGZhbHNlIH0pXG4gIHByaXZhdGUgX2l0ZW1zITogUXVlcnlMaXN0PEF2YXRhckxpc3RJdGVtQ29tcG9uZW50PjtcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgaXRlbXM6IEF2YXRhckxpc3RJdGVtQ29tcG9uZW50W10gPSBbXTtcbiAgZXhjZWVkQ291bnQgPSAwO1xuICBkaXI6IERpcmVjdGlvbiA9ICdsdHInO1xuXG4gIGNscyA9ICcnO1xuICBhdmF0YXJTaXplOiBOelNpemVMRFNUeXBlID0gJ2RlZmF1bHQnO1xuICBASW5wdXQoKVxuICBzZXQgc2l6ZSh2YWx1ZTogJ2xhcmdlJyB8ICdzbWFsbCcgfCAnbWluaScgfCAnZGVmYXVsdCcpIHtcbiAgICB0aGlzLmNscyA9ICdhdmF0YXItbGlzdF9faXRlbScgKyAodmFsdWUgPT09ICdkZWZhdWx0JyA/ICcnIDogYCBhdmF0YXItbGlzdF9fJHt2YWx1ZX1gKTtcbiAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICBjYXNlICdsYXJnZSc6XG4gICAgICBjYXNlICdzbWFsbCc6XG4gICAgICBjYXNlICdkZWZhdWx0JzpcbiAgICAgICAgdGhpcy5hdmF0YXJTaXplID0gdmFsdWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy5hdmF0YXJTaXplID0gJ3NtYWxsJztcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIG1heExlbmd0aCA9IDA7XG4gIEBJbnB1dCgpIGV4Y2Vzc0l0ZW1zU3R5bGU6IHt9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgQE9wdGlvbmFsKCkgcHJpdmF0ZSBkaXJlY3Rpb25hbGl0eTogRGlyZWN0aW9uYWxpdHkpIHt9XG5cbiAgcHJpdmF0ZSBnZW4oKTogdm9pZCB7XG4gICAgY29uc3QgeyBfaXRlbXMgfSA9IHRoaXM7XG4gICAgY29uc3QgbWF4TGVuZ3RoID0gdGhpcy5tYXhMZW5ndGggPiAwID8gdGhpcy5tYXhMZW5ndGggOiBfaXRlbXMubGVuZ3RoO1xuICAgIGNvbnN0IG51bU9mQ2hpbGRyZW4gPSBfaXRlbXMubGVuZ3RoO1xuICAgIGNvbnN0IG51bVRvU2hvdyA9IG1heExlbmd0aCA+IDAgJiYgbWF4TGVuZ3RoID49IG51bU9mQ2hpbGRyZW4gPyBudW1PZkNoaWxkcmVuIDogbWF4TGVuZ3RoO1xuICAgIHRoaXMuaXRlbXMgPSBfaXRlbXMudG9BcnJheSgpLnNsaWNlKDAsIG51bVRvU2hvdyk7XG4gICAgdGhpcy5leGNlZWRDb3VudCA9IG51bVRvU2hvdyA8IG51bU9mQ2hpbGRyZW4gPyBudW1PZkNoaWxkcmVuIC0gbWF4TGVuZ3RoIDogMDtcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5kaXIgPSB0aGlzLmRpcmVjdGlvbmFsaXR5LnZhbHVlO1xuICAgIHRoaXMuZGlyZWN0aW9uYWxpdHkuY2hhbmdlPy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKChkaXJlY3Rpb246IERpcmVjdGlvbikgPT4ge1xuICAgICAgdGhpcy5kaXIgPSBkaXJlY3Rpb247XG4gICAgfSk7XG4gICAgdGhpcy5nZW4oKTtcbiAgICB0aGlzLmluaXRlZCA9IHRydWU7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pbml0ZWQpIHtcbiAgICAgIHRoaXMuZ2VuKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=