import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DelonFormModule } from '@delon/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMentionModule } from 'ng-zorro-antd/mention';
import { MentionWidget } from './widget';
import * as i0 from "@angular/core";
import * as i1 from "@delon/form";
export * from './widget';
export * from './schema';
export class MentionWidgetModule {
    constructor(widgetRegistry) {
        widgetRegistry.register(MentionWidget.KEY, MentionWidget);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MentionWidgetModule, deps: [{ token: i1.WidgetRegistry }], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: MentionWidgetModule, declarations: [MentionWidget], imports: [FormsModule, DelonFormModule, NzMentionModule, NzInputModule, CommonModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MentionWidgetModule, imports: [FormsModule, DelonFormModule, NzMentionModule, NzInputModule, CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MentionWidgetModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [FormsModule, DelonFormModule, NzMentionModule, NzInputModule, CommonModule],
                    declarations: [MentionWidget]
                }]
        }], ctorParameters: function () { return [{ type: i1.WidgetRegistry }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3dpZGdldHMvbWVudGlvbi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLGVBQWUsRUFBa0IsTUFBTSxhQUFhLENBQUM7QUFDOUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUV4RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sVUFBVSxDQUFDOzs7QUFFekMsY0FBYyxVQUFVLENBQUM7QUFDekIsY0FBYyxVQUFVLENBQUM7QUFNekIsTUFBTSxPQUFPLG1CQUFtQjtJQUM5QixZQUFZLGNBQThCO1FBQ3hDLGNBQWMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUM1RCxDQUFDOytHQUhVLG1CQUFtQjtnSEFBbkIsbUJBQW1CLGlCQUZmLGFBQWEsYUFEbEIsV0FBVyxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLFlBQVk7Z0hBR3pFLG1CQUFtQixZQUhwQixXQUFXLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUUsWUFBWTs7NEZBR3pFLG1CQUFtQjtrQkFKL0IsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxXQUFXLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUUsWUFBWSxDQUFDO29CQUNyRixZQUFZLEVBQUUsQ0FBQyxhQUFhLENBQUM7aUJBQzlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgRGVsb25Gb3JtTW9kdWxlLCBXaWRnZXRSZWdpc3RyeSB9IGZyb20gJ0BkZWxvbi9mb3JtJztcbmltcG9ydCB7IE56SW5wdXRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2lucHV0JztcbmltcG9ydCB7IE56TWVudGlvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvbWVudGlvbic7XG5cbmltcG9ydCB7IE1lbnRpb25XaWRnZXQgfSBmcm9tICcuL3dpZGdldCc7XG5cbmV4cG9ydCAqIGZyb20gJy4vd2lkZ2V0JztcbmV4cG9ydCAqIGZyb20gJy4vc2NoZW1hJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0Zvcm1zTW9kdWxlLCBEZWxvbkZvcm1Nb2R1bGUsIE56TWVudGlvbk1vZHVsZSwgTnpJbnB1dE1vZHVsZSwgQ29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbTWVudGlvbldpZGdldF1cbn0pXG5leHBvcnQgY2xhc3MgTWVudGlvbldpZGdldE1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKHdpZGdldFJlZ2lzdHJ5OiBXaWRnZXRSZWdpc3RyeSkge1xuICAgIHdpZGdldFJlZ2lzdHJ5LnJlZ2lzdGVyKE1lbnRpb25XaWRnZXQuS0VZLCBNZW50aW9uV2lkZ2V0KTtcbiAgfVxufVxuIl19