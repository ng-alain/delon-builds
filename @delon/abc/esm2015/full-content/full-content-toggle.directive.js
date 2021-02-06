import { Directive } from '@angular/core';
import { FullContentComponent } from './full-content.component';
export class FullContentToggleDirective {
    constructor(parent) {
        this.parent = parent;
    }
    _click() {
        this.parent.toggle();
    }
}
FullContentToggleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[full-toggle]',
                exportAs: 'fullToggle',
                host: {
                    '(click)': '_click()',
                },
            },] }
];
/** @nocollapse */
FullContentToggleDirective.ctorParameters = () => [
    { type: FullContentComponent }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbC1jb250ZW50LXRvZ2dsZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvZnVsbC1jb250ZW50L2Z1bGwtY29udGVudC10b2dnbGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFTaEUsTUFBTSxPQUFPLDBCQUEwQjtJQUNyQyxZQUFvQixNQUE0QjtRQUE1QixXQUFNLEdBQU4sTUFBTSxDQUFzQjtJQUFHLENBQUM7SUFFcEQsTUFBTTtRQUNKLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7O1lBWkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixRQUFRLEVBQUUsWUFBWTtnQkFDdEIsSUFBSSxFQUFFO29CQUNKLFNBQVMsRUFBRSxVQUFVO2lCQUN0QjthQUNGOzs7O1lBUlEsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGdWxsQ29udGVudENvbXBvbmVudCB9IGZyb20gJy4vZnVsbC1jb250ZW50LmNvbXBvbmVudCc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tmdWxsLXRvZ2dsZV0nLFxuICBleHBvcnRBczogJ2Z1bGxUb2dnbGUnLFxuICBob3N0OiB7XG4gICAgJyhjbGljayknOiAnX2NsaWNrKCknLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBGdWxsQ29udGVudFRvZ2dsZURpcmVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFyZW50OiBGdWxsQ29udGVudENvbXBvbmVudCkge31cblxuICBfY2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5wYXJlbnQudG9nZ2xlKCk7XG4gIH1cbn1cbiJdfQ==