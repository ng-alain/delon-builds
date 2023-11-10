import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NuMonacoEditorModule } from '@ng-util/monaco-editor';
import { DelonFormModule } from '@delon/form';
import { MonacoEditorWidget } from './widget';
import * as i0 from "@angular/core";
import * as i1 from "@delon/form";
export * from './widget';
export * from './schema';
export class MonacoEditorWidgetModule {
    constructor(widgetRegistry) {
        widgetRegistry.register(MonacoEditorWidget.KEY, MonacoEditorWidget);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: MonacoEditorWidgetModule, deps: [{ token: i1.WidgetRegistry }], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.0.2", ngImport: i0, type: MonacoEditorWidgetModule, declarations: [MonacoEditorWidget], imports: [FormsModule, DelonFormModule, NuMonacoEditorModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: MonacoEditorWidgetModule, imports: [FormsModule, DelonFormModule, NuMonacoEditorModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: MonacoEditorWidgetModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [FormsModule, DelonFormModule, NuMonacoEditorModule],
                    declarations: [MonacoEditorWidget]
                }]
        }], ctorParameters: () => [{ type: i1.WidgetRegistry }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3dpZGdldHMtdGhpcmQvbW9uYWNvLWVkaXRvci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUU5RCxPQUFPLEVBQUUsZUFBZSxFQUFrQixNQUFNLGFBQWEsQ0FBQztBQUU5RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxVQUFVLENBQUM7OztBQUU5QyxjQUFjLFVBQVUsQ0FBQztBQUN6QixjQUFjLFVBQVUsQ0FBQztBQU16QixNQUFNLE9BQU8sd0JBQXdCO0lBQ25DLFlBQVksY0FBOEI7UUFDeEMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUN0RSxDQUFDOzhHQUhVLHdCQUF3QjsrR0FBeEIsd0JBQXdCLGlCQUZwQixrQkFBa0IsYUFEdkIsV0FBVyxFQUFFLGVBQWUsRUFBRSxvQkFBb0I7K0dBR2pELHdCQUF3QixZQUh6QixXQUFXLEVBQUUsZUFBZSxFQUFFLG9CQUFvQjs7MkZBR2pELHdCQUF3QjtrQkFKcEMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxXQUFXLEVBQUUsZUFBZSxFQUFFLG9CQUFvQixDQUFDO29CQUM3RCxZQUFZLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztpQkFDbkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IE51TW9uYWNvRWRpdG9yTW9kdWxlIH0gZnJvbSAnQG5nLXV0aWwvbW9uYWNvLWVkaXRvcic7XG5cbmltcG9ydCB7IERlbG9uRm9ybU1vZHVsZSwgV2lkZ2V0UmVnaXN0cnkgfSBmcm9tICdAZGVsb24vZm9ybSc7XG5cbmltcG9ydCB7IE1vbmFjb0VkaXRvcldpZGdldCB9IGZyb20gJy4vd2lkZ2V0JztcblxuZXhwb3J0ICogZnJvbSAnLi93aWRnZXQnO1xuZXhwb3J0ICogZnJvbSAnLi9zY2hlbWEnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbRm9ybXNNb2R1bGUsIERlbG9uRm9ybU1vZHVsZSwgTnVNb25hY29FZGl0b3JNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtNb25hY29FZGl0b3JXaWRnZXRdXG59KVxuZXhwb3J0IGNsYXNzIE1vbmFjb0VkaXRvcldpZGdldE1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKHdpZGdldFJlZ2lzdHJ5OiBXaWRnZXRSZWdpc3RyeSkge1xuICAgIHdpZGdldFJlZ2lzdHJ5LnJlZ2lzdGVyKE1vbmFjb0VkaXRvcldpZGdldC5LRVksIE1vbmFjb0VkaXRvcldpZGdldCk7XG4gIH1cbn1cbiJdfQ==