import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { G2WaterWaveComponent } from './water-wave.component';
import * as i0 from "@angular/core";
const COMPONENTS = [G2WaterWaveComponent];
export class G2WaterWaveModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.5", ngImport: i0, type: G2WaterWaveModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.0.5", ngImport: i0, type: G2WaterWaveModule, imports: [CommonModule, NzOutletModule, G2WaterWaveComponent], exports: [G2WaterWaveComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.0.5", ngImport: i0, type: G2WaterWaveModule, imports: [CommonModule, NzOutletModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.5", ngImport: i0, type: G2WaterWaveModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, NzOutletModule, ...COMPONENTS],
                    exports: COMPONENTS
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2F0ZXItd2F2ZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jaGFydC93YXRlci13YXZlL3dhdGVyLXdhdmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUUzRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7QUFFOUQsTUFBTSxVQUFVLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBTTFDLE1BQU0sT0FBTyxpQkFBaUI7OEdBQWpCLGlCQUFpQjsrR0FBakIsaUJBQWlCLFlBSGxCLFlBQVksRUFBRSxjQUFjLEVBSHBCLG9CQUFvQixhQUFwQixvQkFBb0I7K0dBTTNCLGlCQUFpQixZQUhsQixZQUFZLEVBQUUsY0FBYzs7MkZBRzNCLGlCQUFpQjtrQkFKN0IsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsY0FBYyxFQUFFLEdBQUcsVUFBVSxDQUFDO29CQUN0RCxPQUFPLEVBQUUsVUFBVTtpQkFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTnpPdXRsZXRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvb3V0bGV0JztcblxuaW1wb3J0IHsgRzJXYXRlcldhdmVDb21wb25lbnQgfSBmcm9tICcuL3dhdGVyLXdhdmUuY29tcG9uZW50JztcblxuY29uc3QgQ09NUE9ORU5UUyA9IFtHMldhdGVyV2F2ZUNvbXBvbmVudF07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE56T3V0bGV0TW9kdWxlLCAuLi5DT01QT05FTlRTXSxcbiAgZXhwb3J0czogQ09NUE9ORU5UU1xufSlcbmV4cG9ydCBjbGFzcyBHMldhdGVyV2F2ZU1vZHVsZSB7fVxuIl19