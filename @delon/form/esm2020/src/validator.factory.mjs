import { Inject, Injectable } from '@angular/core';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import { AlainConfigService } from '@delon/util/config';
import { REGEX } from '@delon/util/format';
import { mergeConfig } from './config';
import * as i0 from "@angular/core";
import * as i1 from "@delon/util/config";
export class SchemaValidatorFactory {
}
SchemaValidatorFactory.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.3", ngImport: i0, type: SchemaValidatorFactory, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
SchemaValidatorFactory.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.3", ngImport: i0, type: SchemaValidatorFactory });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.3", ngImport: i0, type: SchemaValidatorFactory, decorators: [{
            type: Injectable
        }] });
export class AjvSchemaValidatorFactory extends SchemaValidatorFactory {
    constructor(cogSrv, ngZone) {
        super();
        this.ngZone = ngZone;
        if (!(typeof document === 'object' && !!document)) {
            return;
        }
        this.options = mergeConfig(cogSrv);
        const customOptions = this.options.ajv || {};
        this.ngZone.runOutsideAngular(() => {
            this.ajv = new Ajv({
                allErrors: true,
                loopEnum: 50,
                ...customOptions,
                formats: {
                    'data-url': /^data:([a-z]+\/[a-z0-9-+.]+)?;name=(.*);base64,(.*)$/,
                    color: REGEX.color,
                    mobile: REGEX.mobile,
                    'id-card': REGEX.idCard,
                    ...customOptions.formats
                }
            });
            addFormats(this.ajv);
        });
    }
    createValidatorFn(schema, extraOptions) {
        const ingoreKeywords = [
            ...this.options.ingoreKeywords,
            ...(extraOptions.ingoreKeywords || [])
        ];
        return (value) => {
            try {
                this.ngZone.runOutsideAngular(() => this.ajv.validate(schema, value));
            }
            catch (e) {
                if (typeof ngDevMode === 'undefined' || ngDevMode) {
                    // swallow errors thrown in ajv due to invalid schemas, these
                    // still get displayed
                    if (extraOptions.debug) {
                        console.warn(e);
                    }
                }
            }
            let errors = this.ajv.errors;
            if (this.options && ingoreKeywords && errors) {
                errors = errors.filter(w => ingoreKeywords.indexOf(w.keyword) === -1);
            }
            return errors;
        };
    }
}
AjvSchemaValidatorFactory.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.3", ngImport: i0, type: AjvSchemaValidatorFactory, deps: [{ token: AlainConfigService }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Injectable });
AjvSchemaValidatorFactory.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.3", ngImport: i0, type: AjvSchemaValidatorFactory });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.3", ngImport: i0, type: AjvSchemaValidatorFactory, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.AlainConfigService, decorators: [{
                    type: Inject,
                    args: [AlainConfigService]
                }] }, { type: i0.NgZone }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLmZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3NyYy92YWxpZGF0b3IuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUUzRCxPQUFPLEdBQUcsTUFBTSxLQUFLLENBQUM7QUFDdEIsT0FBTyxVQUFVLE1BQU0sYUFBYSxDQUFDO0FBRXJDLE9BQU8sRUFBRSxrQkFBa0IsRUFBaUIsTUFBTSxvQkFBb0IsQ0FBQztBQUN2RSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFVBQVUsQ0FBQzs7O0FBTXZDLE1BQU0sT0FBZ0Isc0JBQXNCOzttSEFBdEIsc0JBQXNCO3VIQUF0QixzQkFBc0I7MkZBQXRCLHNCQUFzQjtrQkFEM0MsVUFBVTs7QUFTWCxNQUFNLE9BQU8seUJBQTBCLFNBQVEsc0JBQXNCO0lBSW5FLFlBQXdDLE1BQTBCLEVBQVUsTUFBYztRQUN4RixLQUFLLEVBQUUsQ0FBQztRQURrRSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBRXhGLElBQUksQ0FBQyxDQUFDLE9BQU8sUUFBUSxLQUFLLFFBQVEsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDakQsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkMsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDO1FBQzdDLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUM7Z0JBQ2pCLFNBQVMsRUFBRSxJQUFJO2dCQUNmLFFBQVEsRUFBRSxFQUFFO2dCQUNaLEdBQUcsYUFBYTtnQkFDaEIsT0FBTyxFQUFFO29CQUNQLFVBQVUsRUFBRSxzREFBc0Q7b0JBQ2xFLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztvQkFDbEIsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO29CQUNwQixTQUFTLEVBQUUsS0FBSyxDQUFDLE1BQU07b0JBQ3ZCLEdBQUcsYUFBYSxDQUFDLE9BQU87aUJBQ3pCO2FBQ0YsQ0FBQyxDQUFDO1lBQ0gsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFnQixDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsaUJBQWlCLENBQ2YsTUFBZ0IsRUFDaEIsWUFBMEQ7UUFFMUQsTUFBTSxjQUFjLEdBQWE7WUFDL0IsR0FBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQTJCO1lBQzVDLEdBQUcsQ0FBRSxZQUFZLENBQUMsY0FBMkIsSUFBSSxFQUFFLENBQUM7U0FDckQsQ0FBQztRQUVGLE9BQU8sQ0FBQyxLQUFjLEVBQWUsRUFBRTtZQUNyQyxJQUFJO2dCQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFDdkU7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDVixJQUFJLE9BQU8sU0FBUyxLQUFLLFdBQVcsSUFBSSxTQUFTLEVBQUU7b0JBQ2pELDZEQUE2RDtvQkFDN0Qsc0JBQXNCO29CQUN0QixJQUFJLFlBQVksQ0FBQyxLQUFLLEVBQUU7d0JBQ3RCLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ2pCO2lCQUNGO2FBQ0Y7WUFDRCxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztZQUM3QixJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksY0FBYyxJQUFJLE1BQU0sRUFBRTtnQkFDNUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3ZFO1lBQ0QsT0FBTyxNQUFxQixDQUFDO1FBQy9CLENBQUMsQ0FBQztJQUNKLENBQUM7O3NIQXZEVSx5QkFBeUIsa0JBSWhCLGtCQUFrQjswSEFKM0IseUJBQXlCOzJGQUF6Qix5QkFBeUI7a0JBRHJDLFVBQVU7OzBCQUtJLE1BQU07MkJBQUMsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IEFqdiBmcm9tICdhanYnO1xuaW1wb3J0IGFkZEZvcm1hdHMgZnJvbSAnYWp2LWZvcm1hdHMnO1xuXG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UsIEFsYWluU0ZDb25maWcgfSBmcm9tICdAZGVsb24vdXRpbC9jb25maWcnO1xuaW1wb3J0IHsgUkVHRVggfSBmcm9tICdAZGVsb24vdXRpbC9mb3JtYXQnO1xuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5pbXBvcnQgeyBtZXJnZUNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7IEVycm9yRGF0YSB9IGZyb20gJy4vZXJyb3JzJztcbmltcG9ydCB7IFNGVmFsdWUgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBTRlNjaGVtYSB9IGZyb20gJy4vc2NoZW1hJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNjaGVtYVZhbGlkYXRvckZhY3Rvcnkge1xuICBhYnN0cmFjdCBjcmVhdGVWYWxpZGF0b3JGbihcbiAgICBzY2hlbWE6IFNGU2NoZW1hLFxuICAgIGV4dHJhT3B0aW9uczogeyBpbmdvcmVLZXl3b3Jkczogc3RyaW5nW107IGRlYnVnOiBib29sZWFuIH1cbiAgKTogKHZhbHVlOiBTRlZhbHVlKSA9PiBFcnJvckRhdGFbXTtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFqdlNjaGVtYVZhbGlkYXRvckZhY3RvcnkgZXh0ZW5kcyBTY2hlbWFWYWxpZGF0b3JGYWN0b3J5IHtcbiAgcHJvdGVjdGVkIGFqdiE6IEFqdjtcbiAgcHJvdGVjdGVkIG9wdGlvbnMhOiBBbGFpblNGQ29uZmlnO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoQWxhaW5Db25maWdTZXJ2aWNlKSBjb2dTcnY6IEFsYWluQ29uZmlnU2VydmljZSwgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSkge1xuICAgIHN1cGVyKCk7XG4gICAgaWYgKCEodHlwZW9mIGRvY3VtZW50ID09PSAnb2JqZWN0JyAmJiAhIWRvY3VtZW50KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLm9wdGlvbnMgPSBtZXJnZUNvbmZpZyhjb2dTcnYpO1xuICAgIGNvbnN0IGN1c3RvbU9wdGlvbnMgPSB0aGlzLm9wdGlvbnMuYWp2IHx8IHt9O1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHRoaXMuYWp2ID0gbmV3IEFqdih7XG4gICAgICAgIGFsbEVycm9yczogdHJ1ZSxcbiAgICAgICAgbG9vcEVudW06IDUwLFxuICAgICAgICAuLi5jdXN0b21PcHRpb25zLFxuICAgICAgICBmb3JtYXRzOiB7XG4gICAgICAgICAgJ2RhdGEtdXJsJzogL15kYXRhOihbYS16XStcXC9bYS16MC05LSsuXSspPztuYW1lPSguKik7YmFzZTY0LCguKikkLyxcbiAgICAgICAgICBjb2xvcjogUkVHRVguY29sb3IsXG4gICAgICAgICAgbW9iaWxlOiBSRUdFWC5tb2JpbGUsXG4gICAgICAgICAgJ2lkLWNhcmQnOiBSRUdFWC5pZENhcmQsXG4gICAgICAgICAgLi4uY3VzdG9tT3B0aW9ucy5mb3JtYXRzXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgYWRkRm9ybWF0cyh0aGlzLmFqdiBhcyBOelNhZmVBbnkpO1xuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlVmFsaWRhdG9yRm4oXG4gICAgc2NoZW1hOiBTRlNjaGVtYSxcbiAgICBleHRyYU9wdGlvbnM6IHsgaW5nb3JlS2V5d29yZHM6IHN0cmluZ1tdOyBkZWJ1ZzogYm9vbGVhbiB9XG4gICk6ICh2YWx1ZTogU0ZWYWx1ZSkgPT4gRXJyb3JEYXRhW10ge1xuICAgIGNvbnN0IGluZ29yZUtleXdvcmRzOiBzdHJpbmdbXSA9IFtcbiAgICAgIC4uLih0aGlzLm9wdGlvbnMuaW5nb3JlS2V5d29yZHMgYXMgc3RyaW5nW10pLFxuICAgICAgLi4uKChleHRyYU9wdGlvbnMuaW5nb3JlS2V5d29yZHMgYXMgc3RyaW5nW10pIHx8IFtdKVxuICAgIF07XG5cbiAgICByZXR1cm4gKHZhbHVlOiBTRlZhbHVlKTogRXJyb3JEYXRhW10gPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5hanYudmFsaWRhdGUoc2NoZW1hLCB2YWx1ZSkpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAodHlwZW9mIG5nRGV2TW9kZSA9PT0gJ3VuZGVmaW5lZCcgfHwgbmdEZXZNb2RlKSB7XG4gICAgICAgICAgLy8gc3dhbGxvdyBlcnJvcnMgdGhyb3duIGluIGFqdiBkdWUgdG8gaW52YWxpZCBzY2hlbWFzLCB0aGVzZVxuICAgICAgICAgIC8vIHN0aWxsIGdldCBkaXNwbGF5ZWRcbiAgICAgICAgICBpZiAoZXh0cmFPcHRpb25zLmRlYnVnKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsZXQgZXJyb3JzID0gdGhpcy5hanYuZXJyb3JzO1xuICAgICAgaWYgKHRoaXMub3B0aW9ucyAmJiBpbmdvcmVLZXl3b3JkcyAmJiBlcnJvcnMpIHtcbiAgICAgICAgZXJyb3JzID0gZXJyb3JzLmZpbHRlcih3ID0+IGluZ29yZUtleXdvcmRzLmluZGV4T2Yody5rZXl3b3JkKSA9PT0gLTEpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGVycm9ycyBhcyBFcnJvckRhdGFbXTtcbiAgICB9O1xuICB9XG59XG4iXX0=