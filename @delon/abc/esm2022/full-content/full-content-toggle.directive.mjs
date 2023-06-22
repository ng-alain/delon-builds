import { Directive } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./full-content.component";
class FullContentToggleDirective {
    constructor(parent) {
        this.parent = parent;
    }
    _click() {
        this.parent.toggle();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.2", ngImport: i0, type: FullContentToggleDirective, deps: [{ token: i1.FullContentComponent }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.2", type: FullContentToggleDirective, selector: "[full-toggle]", host: { listeners: { "click": "_click()" } }, exportAs: ["fullToggle"], ngImport: i0 }); }
}
export { FullContentToggleDirective };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.2", ngImport: i0, type: FullContentToggleDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[full-toggle]',
                    exportAs: 'fullToggle',
                    host: {
                        '(click)': '_click()'
                    }
                }]
        }], ctorParameters: function () { return [{ type: i1.FullContentComponent }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbC1jb250ZW50LXRvZ2dsZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvZnVsbC1jb250ZW50L2Z1bGwtY29udGVudC10b2dnbGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQUkxQyxNQU9hLDBCQUEwQjtJQUNyQyxZQUFvQixNQUE0QjtRQUE1QixXQUFNLEdBQU4sTUFBTSxDQUFzQjtJQUFHLENBQUM7SUFFcEQsTUFBTTtRQUNKLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs4R0FMVSwwQkFBMEI7a0dBQTFCLDBCQUEwQjs7U0FBMUIsMEJBQTBCOzJGQUExQiwwQkFBMEI7a0JBUHRDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFFBQVEsRUFBRSxZQUFZO29CQUN0QixJQUFJLEVBQUU7d0JBQ0osU0FBUyxFQUFFLFVBQVU7cUJBQ3RCO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZ1bGxDb250ZW50Q29tcG9uZW50IH0gZnJvbSAnLi9mdWxsLWNvbnRlbnQuY29tcG9uZW50JztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2Z1bGwtdG9nZ2xlXScsXG4gIGV4cG9ydEFzOiAnZnVsbFRvZ2dsZScsXG4gIGhvc3Q6IHtcbiAgICAnKGNsaWNrKSc6ICdfY2xpY2soKSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBGdWxsQ29udGVudFRvZ2dsZURpcmVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFyZW50OiBGdWxsQ29udGVudENvbXBvbmVudCkge31cblxuICBfY2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5wYXJlbnQudG9nZ2xlKCk7XG4gIH1cbn1cbiJdfQ==