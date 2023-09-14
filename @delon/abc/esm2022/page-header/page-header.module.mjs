import { ObserversModule } from '@angular/cdk/observers';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { PageHeaderComponent } from './page-header.component';
import * as i0 from "@angular/core";
const COMPONENTS = [PageHeaderComponent];
export class PageHeaderModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.5", ngImport: i0, type: PageHeaderModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.5", ngImport: i0, type: PageHeaderModule, declarations: [PageHeaderComponent], imports: [CommonModule,
            RouterModule,
            ObserversModule,
            NzAffixModule,
            NzSkeletonModule,
            NzBreadCrumbModule,
            NzOutletModule], exports: [PageHeaderComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.5", ngImport: i0, type: PageHeaderModule, imports: [CommonModule,
            RouterModule,
            ObserversModule,
            NzAffixModule,
            NzSkeletonModule,
            NzBreadCrumbModule,
            NzOutletModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.5", ngImport: i0, type: PageHeaderModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        RouterModule,
                        ObserversModule,
                        NzAffixModule,
                        NzSkeletonModule,
                        NzBreadCrumbModule,
                        NzOutletModule
                    ],
                    declarations: COMPONENTS,
                    exports: COMPONENTS
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1oZWFkZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3BhZ2UtaGVhZGVyL3BhZ2UtaGVhZGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDekQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFMUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7O0FBRTlELE1BQU0sVUFBVSxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQWV6QyxNQUFNLE9BQU8sZ0JBQWdCOzhHQUFoQixnQkFBZ0I7K0dBQWhCLGdCQUFnQixpQkFmVCxtQkFBbUIsYUFJbkMsWUFBWTtZQUNaLFlBQVk7WUFDWixlQUFlO1lBQ2YsYUFBYTtZQUNiLGdCQUFnQjtZQUNoQixrQkFBa0I7WUFDbEIsY0FBYyxhQVZFLG1CQUFtQjsrR0FlMUIsZ0JBQWdCLFlBWHpCLFlBQVk7WUFDWixZQUFZO1lBQ1osZUFBZTtZQUNmLGFBQWE7WUFDYixnQkFBZ0I7WUFDaEIsa0JBQWtCO1lBQ2xCLGNBQWM7OzJGQUtMLGdCQUFnQjtrQkFiNUIsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixZQUFZO3dCQUNaLGVBQWU7d0JBQ2YsYUFBYTt3QkFDYixnQkFBZ0I7d0JBQ2hCLGtCQUFrQjt3QkFDbEIsY0FBYztxQkFDZjtvQkFDRCxZQUFZLEVBQUUsVUFBVTtvQkFDeEIsT0FBTyxFQUFFLFVBQVU7aUJBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2ZXJzTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL29ic2VydmVycyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IE56QWZmaXhNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2FmZml4JztcbmltcG9ydCB7IE56QnJlYWRDcnVtYk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvYnJlYWRjcnVtYic7XG5pbXBvcnQgeyBOek91dGxldE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9vdXRsZXQnO1xuaW1wb3J0IHsgTnpTa2VsZXRvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvc2tlbGV0b24nO1xuXG5pbXBvcnQgeyBQYWdlSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlLWhlYWRlci5jb21wb25lbnQnO1xuXG5jb25zdCBDT01QT05FTlRTID0gW1BhZ2VIZWFkZXJDb21wb25lbnRdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBPYnNlcnZlcnNNb2R1bGUsXG4gICAgTnpBZmZpeE1vZHVsZSxcbiAgICBOelNrZWxldG9uTW9kdWxlLFxuICAgIE56QnJlYWRDcnVtYk1vZHVsZSxcbiAgICBOek91dGxldE1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IENPTVBPTkVOVFMsXG4gIGV4cG9ydHM6IENPTVBPTkVOVFNcbn0pXG5leHBvcnQgY2xhc3MgUGFnZUhlYWRlck1vZHVsZSB7fVxuIl19