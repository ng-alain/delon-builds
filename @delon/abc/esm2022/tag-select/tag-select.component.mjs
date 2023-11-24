import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, DestroyRef, EventEmitter, Input, Optional, Output, ViewEncapsulation, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { InputBoolean } from '@delon/util/decorator';
import * as i0 from "@angular/core";
import * as i1 from "@delon/theme";
import * as i2 from "@angular/cdk/bidi";
import * as i3 from "ng-zorro-antd/icon";
export class TagSelectComponent {
    constructor(i18n, directionality, cdr) {
        this.i18n = i18n;
        this.directionality = directionality;
        this.cdr = cdr;
        this.destroy$ = inject(DestroyRef);
        this.locale = {};
        this.expand = false;
        this.dir = 'ltr';
        /** 是否启用 `展开与收进` */
        this.expandable = true;
        this.change = new EventEmitter();
    }
    ngOnInit() {
        this.dir = this.directionality.value;
        this.directionality.change?.pipe(takeUntilDestroyed(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
        });
        this.i18n.change.pipe(takeUntilDestroyed(this.destroy$)).subscribe(() => {
            this.locale = this.i18n.getData('tagSelect');
            this.cdr.detectChanges();
        });
    }
    trigger() {
        this.expand = !this.expand;
        this.change.emit(this.expand);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TagSelectComponent, deps: [{ token: i1.DelonLocaleService }, { token: i2.Directionality, optional: true }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: TagSelectComponent, selector: "tag-select", inputs: { expandable: "expandable" }, outputs: { change: "change" }, host: { properties: { "class.tag-select": "true", "class.tag-select-rtl": "dir === 'rtl'", "class.tag-select-rtl__has-expand": "dir === 'rtl' && expandable", "class.tag-select__has-expand": "expandable", "class.tag-select__expanded": "expand" } }, exportAs: ["tagSelect"], ngImport: i0, template: "<ng-content />\n@if (expandable) {\n  <a class=\"ant-tag ant-tag-checkable tag-select__trigger\" (click)=\"trigger()\">\n    {{ expand ? locale.collapse : locale.expand }}\n    <i nz-icon nzType=\"down\" [style.transform]=\"expand ? 'rotate(-180deg)' : null\"></i>\n  </a>\n}\n", dependencies: [{ kind: "directive", type: i3.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
__decorate([
    InputBoolean()
], TagSelectComponent.prototype, "expandable", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TagSelectComponent, decorators: [{
            type: Component,
            args: [{ selector: 'tag-select', exportAs: 'tagSelect', host: {
                        '[class.tag-select]': 'true',
                        '[class.tag-select-rtl]': `dir === 'rtl'`,
                        '[class.tag-select-rtl__has-expand]': `dir === 'rtl' && expandable`,
                        '[class.tag-select__has-expand]': 'expandable',
                        '[class.tag-select__expanded]': 'expand'
                    }, preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<ng-content />\n@if (expandable) {\n  <a class=\"ant-tag ant-tag-checkable tag-select__trigger\" (click)=\"trigger()\">\n    {{ expand ? locale.collapse : locale.expand }}\n    <i nz-icon nzType=\"down\" [style.transform]=\"expand ? 'rotate(-180deg)' : null\"></i>\n  </a>\n}\n" }]
        }], ctorParameters: () => [{ type: i1.DelonLocaleService }, { type: i2.Directionality, decorators: [{
                    type: Optional
                }] }, { type: i0.ChangeDetectorRef }], propDecorators: { expandable: [{
                type: Input
            }], change: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvdGFnLXNlbGVjdC90YWctc2VsZWN0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy90YWctc2VsZWN0L3RhZy1zZWxlY3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFDTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUVMLFFBQVEsRUFDUixNQUFNLEVBQ04saUJBQWlCLEVBQ2pCLE1BQU0sRUFDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUdoRSxPQUFPLEVBQWdCLFlBQVksRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7OztBQWlCbkUsTUFBTSxPQUFPLGtCQUFrQjtJQVk3QixZQUNVLElBQXdCLEVBQ1osY0FBOEIsRUFDMUMsR0FBc0I7UUFGdEIsU0FBSSxHQUFKLElBQUksQ0FBb0I7UUFDWixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDMUMsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFaeEIsYUFBUSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN0QyxXQUFNLEdBQWUsRUFBRSxDQUFDO1FBQ3hCLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixRQUFHLEdBQWMsS0FBSyxDQUFDO1FBRXZCLG1CQUFtQjtRQUNNLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFDeEIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7SUFNckQsQ0FBQztJQUVKLFFBQVE7UUFDTixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxTQUFvQixFQUFFLEVBQUU7WUFDckcsSUFBSSxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUN0RSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsT0FBTztRQUNMLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoQyxDQUFDOzhHQWhDVSxrQkFBa0I7a0dBQWxCLGtCQUFrQix3WUNsQy9CLHVSQU9BOztBRG9DMkI7SUFBZixZQUFZLEVBQUU7c0RBQW1COzJGQVRoQyxrQkFBa0I7a0JBZjlCLFNBQVM7K0JBQ0UsWUFBWSxZQUNaLFdBQVcsUUFFZjt3QkFDSixvQkFBb0IsRUFBRSxNQUFNO3dCQUM1Qix3QkFBd0IsRUFBRSxlQUFlO3dCQUN6QyxvQ0FBb0MsRUFBRSw2QkFBNkI7d0JBQ25FLGdDQUFnQyxFQUFFLFlBQVk7d0JBQzlDLDhCQUE4QixFQUFFLFFBQVE7cUJBQ3pDLHVCQUNvQixLQUFLLG1CQUNULHVCQUF1QixDQUFDLE1BQU0saUJBQ2hDLGlCQUFpQixDQUFDLElBQUk7OzBCQWdCbEMsUUFBUTt5RUFMYyxVQUFVO3NCQUFsQyxLQUFLO2dCQUNhLE1BQU07c0JBQXhCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3Rpb24sIERpcmVjdGlvbmFsaXR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIERlc3Ryb3lSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIGluamVjdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRha2VVbnRpbERlc3Ryb3llZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvcnhqcy1pbnRlcm9wJztcblxuaW1wb3J0IHsgRGVsb25Mb2NhbGVTZXJ2aWNlLCBMb2NhbGVEYXRhIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgSW5wdXRCb29sZWFuIH0gZnJvbSAnQGRlbG9uL3V0aWwvZGVjb3JhdG9yJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGFnLXNlbGVjdCcsXG4gIGV4cG9ydEFzOiAndGFnU2VsZWN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhZy1zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy50YWctc2VsZWN0XSc6ICd0cnVlJyxcbiAgICAnW2NsYXNzLnRhZy1zZWxlY3QtcnRsXSc6IGBkaXIgPT09ICdydGwnYCxcbiAgICAnW2NsYXNzLnRhZy1zZWxlY3QtcnRsX19oYXMtZXhwYW5kXSc6IGBkaXIgPT09ICdydGwnICYmIGV4cGFuZGFibGVgLFxuICAgICdbY2xhc3MudGFnLXNlbGVjdF9faGFzLWV4cGFuZF0nOiAnZXhwYW5kYWJsZScsXG4gICAgJ1tjbGFzcy50YWctc2VsZWN0X19leHBhbmRlZF0nOiAnZXhwYW5kJ1xuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgVGFnU2VsZWN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2V4cGFuZGFibGU6IEJvb2xlYW5JbnB1dDtcblxuICBwcml2YXRlIGRlc3Ryb3kkID0gaW5qZWN0KERlc3Ryb3lSZWYpO1xuICBsb2NhbGU6IExvY2FsZURhdGEgPSB7fTtcbiAgZXhwYW5kID0gZmFsc2U7XG4gIGRpcjogRGlyZWN0aW9uID0gJ2x0cic7XG5cbiAgLyoqIOaYr+WQpuWQr+eUqCBg5bGV5byA5LiO5pS26L+bYCAqL1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZXhwYW5kYWJsZSA9IHRydWU7XG4gIEBPdXRwdXQoKSByZWFkb25seSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBpMThuOiBEZWxvbkxvY2FsZVNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBkaXJlY3Rpb25hbGl0eTogRGlyZWN0aW9uYWxpdHksXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmRpciA9IHRoaXMuZGlyZWN0aW9uYWxpdHkudmFsdWU7XG4gICAgdGhpcy5kaXJlY3Rpb25hbGl0eS5jaGFuZ2U/LnBpcGUodGFrZVVudGlsRGVzdHJveWVkKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKGRpcmVjdGlvbjogRGlyZWN0aW9uKSA9PiB7XG4gICAgICB0aGlzLmRpciA9IGRpcmVjdGlvbjtcbiAgICB9KTtcbiAgICB0aGlzLmkxOG4uY2hhbmdlLnBpcGUodGFrZVVudGlsRGVzdHJveWVkKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5sb2NhbGUgPSB0aGlzLmkxOG4uZ2V0RGF0YSgndGFnU2VsZWN0Jyk7XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gIH1cblxuICB0cmlnZ2VyKCk6IHZvaWQge1xuICAgIHRoaXMuZXhwYW5kID0gIXRoaXMuZXhwYW5kO1xuICAgIHRoaXMuY2hhbmdlLmVtaXQodGhpcy5leHBhbmQpO1xuICB9XG59XG4iLCI8bmctY29udGVudCAvPlxuQGlmIChleHBhbmRhYmxlKSB7XG4gIDxhIGNsYXNzPVwiYW50LXRhZyBhbnQtdGFnLWNoZWNrYWJsZSB0YWctc2VsZWN0X190cmlnZ2VyXCIgKGNsaWNrKT1cInRyaWdnZXIoKVwiPlxuICAgIHt7IGV4cGFuZCA/IGxvY2FsZS5jb2xsYXBzZSA6IGxvY2FsZS5leHBhbmQgfX1cbiAgICA8aSBuei1pY29uIG56VHlwZT1cImRvd25cIiBbc3R5bGUudHJhbnNmb3JtXT1cImV4cGFuZCA/ICdyb3RhdGUoLTE4MGRlZyknIDogbnVsbFwiPjwvaT5cbiAgPC9hPlxufVxuIl19