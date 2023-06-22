import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
class AvatarListItemComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.2", ngImport: i0, type: AvatarListItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.2", type: AvatarListItemComponent, selector: "avatar-list-item, [avatar-list-item]", inputs: { src: "src", text: "text", icon: "icon", tips: "tips" }, exportAs: ["avatarListItem"], ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
export { AvatarListItemComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.2", ngImport: i0, type: AvatarListItemComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'avatar-list-item, [avatar-list-item]',
                    exportAs: 'avatarListItem',
                    template: `<ng-content></ng-content>`,
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }], propDecorators: { src: [{
                type: Input
            }], text: [{
                type: Input
            }], icon: [{
                type: Input
            }], tips: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLWxpc3QtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvYXZhdGFyLWxpc3QvYXZhdGFyLWxpc3QtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTdGLE1BUWEsdUJBQXVCOzhHQUF2Qix1QkFBdUI7a0dBQXZCLHVCQUF1Qiw0S0FMeEIsMkJBQTJCOztTQUsxQix1QkFBdUI7MkZBQXZCLHVCQUF1QjtrQkFSbkMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsc0NBQXNDO29CQUNoRCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3RDOzhCQUVVLEdBQUc7c0JBQVgsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhdmF0YXItbGlzdC1pdGVtLCBbYXZhdGFyLWxpc3QtaXRlbV0nLFxuICBleHBvcnRBczogJ2F2YXRhckxpc3RJdGVtJyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEF2YXRhckxpc3RJdGVtQ29tcG9uZW50IHtcbiAgQElucHV0KCkgc3JjPzogc3RyaW5nO1xuICBASW5wdXQoKSB0ZXh0Pzogc3RyaW5nO1xuICBASW5wdXQoKSBpY29uPzogc3RyaW5nO1xuICBASW5wdXQoKSB0aXBzPzogc3RyaW5nO1xufVxuIl19