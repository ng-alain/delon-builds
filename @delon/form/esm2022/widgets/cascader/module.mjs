import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DelonFormModule } from '@delon/form';
import { NzCascaderModule } from 'ng-zorro-antd/cascader';
import { CascaderWidget } from './widget';
import * as i0 from "@angular/core";
import * as i1 from "@delon/form";
export class CascaderWidgetModule {
    constructor(widgetRegistry) {
        widgetRegistry.register(CascaderWidget.KEY, CascaderWidget);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.1", ngImport: i0, type: CascaderWidgetModule, deps: [{ token: i1.WidgetRegistry }], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.1", ngImport: i0, type: CascaderWidgetModule, imports: [FormsModule, DelonFormModule, NzCascaderModule, CascaderWidget] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.1", ngImport: i0, type: CascaderWidgetModule, imports: [FormsModule, DelonFormModule, NzCascaderModule, CascaderWidget] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.1", ngImport: i0, type: CascaderWidgetModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [FormsModule, DelonFormModule, NzCascaderModule, CascaderWidget]
                }]
        }], ctorParameters: () => [{ type: i1.WidgetRegistry }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS93aWRnZXRzL2Nhc2NhZGVyL21vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsZUFBZSxFQUFrQixNQUFNLGFBQWEsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUUxRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sVUFBVSxDQUFDOzs7QUFLMUMsTUFBTSxPQUFPLG9CQUFvQjtJQUMvQixZQUFZLGNBQThCO1FBQ3hDLGNBQWMsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxjQUFjLENBQUMsQ0FBQztJQUM5RCxDQUFDOzhHQUhVLG9CQUFvQjsrR0FBcEIsb0JBQW9CLFlBRnJCLFdBQVcsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsY0FBYzsrR0FFN0Qsb0JBQW9CLFlBRnJCLFdBQVcsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsY0FBYzs7MkZBRTdELG9CQUFvQjtrQkFIaEMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxXQUFXLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLGNBQWMsQ0FBQztpQkFDMUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IERlbG9uRm9ybU1vZHVsZSwgV2lkZ2V0UmVnaXN0cnkgfSBmcm9tICdAZGVsb24vZm9ybSc7XG5pbXBvcnQgeyBOekNhc2NhZGVyTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jYXNjYWRlcic7XG5cbmltcG9ydCB7IENhc2NhZGVyV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbRm9ybXNNb2R1bGUsIERlbG9uRm9ybU1vZHVsZSwgTnpDYXNjYWRlck1vZHVsZSwgQ2FzY2FkZXJXaWRnZXRdXG59KVxuZXhwb3J0IGNsYXNzIENhc2NhZGVyV2lkZ2V0TW9kdWxlIHtcbiAgY29uc3RydWN0b3Iod2lkZ2V0UmVnaXN0cnk6IFdpZGdldFJlZ2lzdHJ5KSB7XG4gICAgd2lkZ2V0UmVnaXN0cnkucmVnaXN0ZXIoQ2FzY2FkZXJXaWRnZXQuS0VZLCBDYXNjYWRlcldpZGdldCk7XG4gIH1cbn1cbiJdfQ==