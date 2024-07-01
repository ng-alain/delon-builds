import { Injectable, NgZone, inject } from '@angular/core';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import { AlainConfigService } from '@delon/util/config';
import { REGEX } from '@delon/util/format';
import { mergeConfig } from './config';
import * as i0 from "@angular/core";
export class SchemaValidatorFactory {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.5", ngImport: i0, type: SchemaValidatorFactory, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.0.5", ngImport: i0, type: SchemaValidatorFactory }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.5", ngImport: i0, type: SchemaValidatorFactory, decorators: [{
            type: Injectable
        }] });
export class AjvSchemaValidatorFactory extends SchemaValidatorFactory {
    constructor() {
        super();
        this.ngZone = inject(NgZone);
        this.cogSrv = inject(AlainConfigService);
        if (!(typeof document === 'object' && !!document)) {
            return;
        }
        this.options = mergeConfig(this.cogSrv);
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.5", ngImport: i0, type: AjvSchemaValidatorFactory, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.0.5", ngImport: i0, type: AjvSchemaValidatorFactory }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.5", ngImport: i0, type: AjvSchemaValidatorFactory, decorators: [{
            type: Injectable
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLmZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3NyYy92YWxpZGF0b3IuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0QsT0FBTyxHQUFHLE1BQU0sS0FBSyxDQUFDO0FBQ3RCLE9BQU8sVUFBVSxNQUFNLGFBQWEsQ0FBQztBQUVyQyxPQUFPLEVBQUUsa0JBQWtCLEVBQWlCLE1BQU0sb0JBQW9CLENBQUM7QUFDdkUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRzNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxVQUFVLENBQUM7O0FBTXZDLE1BQU0sT0FBZ0Isc0JBQXNCOzhHQUF0QixzQkFBc0I7a0hBQXRCLHNCQUFzQjs7MkZBQXRCLHNCQUFzQjtrQkFEM0MsVUFBVTs7QUFTWCxNQUFNLE9BQU8seUJBQTBCLFNBQVEsc0JBQXNCO0lBT25FO1FBQ0UsS0FBSyxFQUFFLENBQUM7UUFQTyxXQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hCLFdBQU0sR0FBRyxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQU9uRCxJQUFJLENBQUMsQ0FBQyxPQUFPLFFBQVEsS0FBSyxRQUFRLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDbEQsT0FBTztRQUNULENBQUM7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEMsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDO1FBQzdDLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUM7Z0JBQ2pCLFNBQVMsRUFBRSxJQUFJO2dCQUNmLFFBQVEsRUFBRSxFQUFFO2dCQUNaLEdBQUcsYUFBYTtnQkFDaEIsT0FBTyxFQUFFO29CQUNQLFVBQVUsRUFBRSxzREFBc0Q7b0JBQ2xFLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztvQkFDbEIsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO29CQUNwQixTQUFTLEVBQUUsS0FBSyxDQUFDLE1BQU07b0JBQ3ZCLEdBQUcsYUFBYSxDQUFDLE9BQU87aUJBQ3pCO2FBQ0YsQ0FBQyxDQUFDO1lBQ0gsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFnQixDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsaUJBQWlCLENBQ2YsTUFBZ0IsRUFDaEIsWUFBMEQ7UUFFMUQsTUFBTSxjQUFjLEdBQWE7WUFDL0IsR0FBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQTJCO1lBQzVDLEdBQUcsQ0FBRSxZQUFZLENBQUMsY0FBMkIsSUFBSSxFQUFFLENBQUM7U0FDckQsQ0FBQztRQUVGLE9BQU8sQ0FBQyxLQUFjLEVBQWUsRUFBRTtZQUNyQyxJQUFJLENBQUM7Z0JBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN4RSxDQUFDO1lBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztnQkFDWCxJQUFJLE9BQU8sU0FBUyxLQUFLLFdBQVcsSUFBSSxTQUFTLEVBQUUsQ0FBQztvQkFDbEQsNkRBQTZEO29CQUM3RCxzQkFBc0I7b0JBQ3RCLElBQUksWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO3dCQUN2QixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNsQixDQUFDO2dCQUNILENBQUM7WUFDSCxDQUFDO1lBQ0QsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7WUFDN0IsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLGNBQWMsSUFBSSxNQUFNLEVBQUUsQ0FBQztnQkFDN0MsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hFLENBQUM7WUFDRCxPQUFPLE1BQXFCLENBQUM7UUFDL0IsQ0FBQyxDQUFDO0lBQ0osQ0FBQzs4R0ExRFUseUJBQXlCO2tIQUF6Qix5QkFBeUI7OzJGQUF6Qix5QkFBeUI7a0JBRHJDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBOZ1pvbmUsIGluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgQWp2IGZyb20gJ2Fqdic7XG5pbXBvcnQgYWRkRm9ybWF0cyBmcm9tICdhanYtZm9ybWF0cyc7XG5cbmltcG9ydCB7IEFsYWluQ29uZmlnU2VydmljZSwgQWxhaW5TRkNvbmZpZyB9IGZyb20gJ0BkZWxvbi91dGlsL2NvbmZpZyc7XG5pbXBvcnQgeyBSRUdFWCB9IGZyb20gJ0BkZWxvbi91dGlsL2Zvcm1hdCc7XG5pbXBvcnQgdHlwZSB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbmltcG9ydCB7IG1lcmdlQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHsgRXJyb3JEYXRhIH0gZnJvbSAnLi9lcnJvcnMnO1xuaW1wb3J0IHsgU0ZWYWx1ZSB9IGZyb20gJy4vaW50ZXJmYWNlJztcbmltcG9ydCB7IFNGU2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSB7XG4gIGFic3RyYWN0IGNyZWF0ZVZhbGlkYXRvckZuKFxuICAgIHNjaGVtYTogU0ZTY2hlbWEsXG4gICAgZXh0cmFPcHRpb25zOiB7IGluZ29yZUtleXdvcmRzOiBzdHJpbmdbXTsgZGVidWc6IGJvb2xlYW4gfVxuICApOiAodmFsdWU6IFNGVmFsdWUpID0+IEVycm9yRGF0YVtdO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWp2U2NoZW1hVmFsaWRhdG9yRmFjdG9yeSBleHRlbmRzIFNjaGVtYVZhbGlkYXRvckZhY3Rvcnkge1xuICBwcml2YXRlIHJlYWRvbmx5IG5nWm9uZSA9IGluamVjdChOZ1pvbmUpO1xuICBwcml2YXRlIHJlYWRvbmx5IGNvZ1NydiA9IGluamVjdChBbGFpbkNvbmZpZ1NlcnZpY2UpO1xuXG4gIHByb3RlY3RlZCBhanYhOiBBanY7XG4gIHByb3RlY3RlZCBvcHRpb25zITogQWxhaW5TRkNvbmZpZztcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIGlmICghKHR5cGVvZiBkb2N1bWVudCA9PT0gJ29iamVjdCcgJiYgISFkb2N1bWVudCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5vcHRpb25zID0gbWVyZ2VDb25maWcodGhpcy5jb2dTcnYpO1xuICAgIGNvbnN0IGN1c3RvbU9wdGlvbnMgPSB0aGlzLm9wdGlvbnMuYWp2IHx8IHt9O1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHRoaXMuYWp2ID0gbmV3IEFqdih7XG4gICAgICAgIGFsbEVycm9yczogdHJ1ZSxcbiAgICAgICAgbG9vcEVudW06IDUwLFxuICAgICAgICAuLi5jdXN0b21PcHRpb25zLFxuICAgICAgICBmb3JtYXRzOiB7XG4gICAgICAgICAgJ2RhdGEtdXJsJzogL15kYXRhOihbYS16XStcXC9bYS16MC05LSsuXSspPztuYW1lPSguKik7YmFzZTY0LCguKikkLyxcbiAgICAgICAgICBjb2xvcjogUkVHRVguY29sb3IsXG4gICAgICAgICAgbW9iaWxlOiBSRUdFWC5tb2JpbGUsXG4gICAgICAgICAgJ2lkLWNhcmQnOiBSRUdFWC5pZENhcmQsXG4gICAgICAgICAgLi4uY3VzdG9tT3B0aW9ucy5mb3JtYXRzXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgYWRkRm9ybWF0cyh0aGlzLmFqdiBhcyBOelNhZmVBbnkpO1xuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlVmFsaWRhdG9yRm4oXG4gICAgc2NoZW1hOiBTRlNjaGVtYSxcbiAgICBleHRyYU9wdGlvbnM6IHsgaW5nb3JlS2V5d29yZHM6IHN0cmluZ1tdOyBkZWJ1ZzogYm9vbGVhbiB9XG4gICk6ICh2YWx1ZTogU0ZWYWx1ZSkgPT4gRXJyb3JEYXRhW10ge1xuICAgIGNvbnN0IGluZ29yZUtleXdvcmRzOiBzdHJpbmdbXSA9IFtcbiAgICAgIC4uLih0aGlzLm9wdGlvbnMuaW5nb3JlS2V5d29yZHMgYXMgc3RyaW5nW10pLFxuICAgICAgLi4uKChleHRyYU9wdGlvbnMuaW5nb3JlS2V5d29yZHMgYXMgc3RyaW5nW10pIHx8IFtdKVxuICAgIF07XG5cbiAgICByZXR1cm4gKHZhbHVlOiBTRlZhbHVlKTogRXJyb3JEYXRhW10gPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5hanYudmFsaWRhdGUoc2NoZW1hLCB2YWx1ZSkpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAodHlwZW9mIG5nRGV2TW9kZSA9PT0gJ3VuZGVmaW5lZCcgfHwgbmdEZXZNb2RlKSB7XG4gICAgICAgICAgLy8gc3dhbGxvdyBlcnJvcnMgdGhyb3duIGluIGFqdiBkdWUgdG8gaW52YWxpZCBzY2hlbWFzLCB0aGVzZVxuICAgICAgICAgIC8vIHN0aWxsIGdldCBkaXNwbGF5ZWRcbiAgICAgICAgICBpZiAoZXh0cmFPcHRpb25zLmRlYnVnKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsZXQgZXJyb3JzID0gdGhpcy5hanYuZXJyb3JzO1xuICAgICAgaWYgKHRoaXMub3B0aW9ucyAmJiBpbmdvcmVLZXl3b3JkcyAmJiBlcnJvcnMpIHtcbiAgICAgICAgZXJyb3JzID0gZXJyb3JzLmZpbHRlcih3ID0+IGluZ29yZUtleXdvcmRzLmluZGV4T2Yody5rZXl3b3JkKSA9PT0gLTEpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGVycm9ycyBhcyBFcnJvckRhdGFbXTtcbiAgICB9O1xuICB9XG59XG4iXX0=