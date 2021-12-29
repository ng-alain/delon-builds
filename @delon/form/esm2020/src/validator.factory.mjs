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
SchemaValidatorFactory.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: SchemaValidatorFactory, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
SchemaValidatorFactory.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: SchemaValidatorFactory });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: SchemaValidatorFactory, decorators: [{
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
                // swallow errors thrown in ajv due to invalid schemas, these
                // still get displayed
                if (extraOptions.debug) {
                    console.warn(e);
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
AjvSchemaValidatorFactory.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: AjvSchemaValidatorFactory, deps: [{ token: AlainConfigService }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Injectable });
AjvSchemaValidatorFactory.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: AjvSchemaValidatorFactory });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: AjvSchemaValidatorFactory, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.AlainConfigService, decorators: [{
                    type: Inject,
                    args: [AlainConfigService]
                }] }, { type: i0.NgZone }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLmZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3NyYy92YWxpZGF0b3IuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUUzRCxPQUFPLEdBQUcsTUFBTSxLQUFLLENBQUM7QUFDdEIsT0FBTyxVQUFVLE1BQU0sYUFBYSxDQUFDO0FBRXJDLE9BQU8sRUFBRSxrQkFBa0IsRUFBaUIsTUFBTSxvQkFBb0IsQ0FBQztBQUN2RSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFVBQVUsQ0FBQzs7O0FBTXZDLE1BQU0sT0FBZ0Isc0JBQXNCOzttSEFBdEIsc0JBQXNCO3VIQUF0QixzQkFBc0I7MkZBQXRCLHNCQUFzQjtrQkFEM0MsVUFBVTs7QUFTWCxNQUFNLE9BQU8seUJBQTBCLFNBQVEsc0JBQXNCO0lBSW5FLFlBQXdDLE1BQTBCLEVBQVUsTUFBYztRQUN4RixLQUFLLEVBQUUsQ0FBQztRQURrRSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBRXhGLElBQUksQ0FBQyxDQUFDLE9BQU8sUUFBUSxLQUFLLFFBQVEsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDakQsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkMsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDO1FBQzdDLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUM7Z0JBQ2pCLFNBQVMsRUFBRSxJQUFJO2dCQUNmLFFBQVEsRUFBRSxFQUFFO2dCQUNaLEdBQUcsYUFBYTtnQkFDaEIsT0FBTyxFQUFFO29CQUNQLFVBQVUsRUFBRSxzREFBc0Q7b0JBQ2xFLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztvQkFDbEIsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO29CQUNwQixTQUFTLEVBQUUsS0FBSyxDQUFDLE1BQU07b0JBQ3ZCLEdBQUcsYUFBYSxDQUFDLE9BQU87aUJBQ3pCO2FBQ0YsQ0FBQyxDQUFDO1lBQ0gsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFnQixDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsaUJBQWlCLENBQ2YsTUFBZ0IsRUFDaEIsWUFBMEQ7UUFFMUQsTUFBTSxjQUFjLEdBQWE7WUFDL0IsR0FBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQTJCO1lBQzVDLEdBQUcsQ0FBRSxZQUFZLENBQUMsY0FBMkIsSUFBSSxFQUFFLENBQUM7U0FDckQsQ0FBQztRQUVGLE9BQU8sQ0FBQyxLQUFjLEVBQWUsRUFBRTtZQUNyQyxJQUFJO2dCQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFDdkU7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDViw2REFBNkQ7Z0JBQzdELHNCQUFzQjtnQkFDdEIsSUFBSSxZQUFZLENBQUMsS0FBSyxFQUFFO29CQUN0QixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNqQjthQUNGO1lBQ0QsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7WUFDN0IsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLGNBQWMsSUFBSSxNQUFNLEVBQUU7Z0JBQzVDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN2RTtZQUNELE9BQU8sTUFBcUIsQ0FBQztRQUMvQixDQUFDLENBQUM7SUFDSixDQUFDOztzSEFyRFUseUJBQXlCLGtCQUloQixrQkFBa0I7MEhBSjNCLHlCQUF5QjsyRkFBekIseUJBQXlCO2tCQURyQyxVQUFVOzswQkFLSSxNQUFNOzJCQUFDLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCBBanYgZnJvbSAnYWp2JztcbmltcG9ydCBhZGRGb3JtYXRzIGZyb20gJ2Fqdi1mb3JtYXRzJztcblxuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlLCBBbGFpblNGQ29uZmlnIH0gZnJvbSAnQGRlbG9uL3V0aWwvY29uZmlnJztcbmltcG9ydCB7IFJFR0VYIH0gZnJvbSAnQGRlbG9uL3V0aWwvZm9ybWF0JztcbmltcG9ydCB0eXBlIHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuaW1wb3J0IHsgbWVyZ2VDb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgeyBFcnJvckRhdGEgfSBmcm9tICcuL2Vycm9ycyc7XG5pbXBvcnQgeyBTRlZhbHVlIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgU0ZTY2hlbWEgfSBmcm9tICcuL3NjaGVtYSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTY2hlbWFWYWxpZGF0b3JGYWN0b3J5IHtcbiAgYWJzdHJhY3QgY3JlYXRlVmFsaWRhdG9yRm4oXG4gICAgc2NoZW1hOiBTRlNjaGVtYSxcbiAgICBleHRyYU9wdGlvbnM6IHsgaW5nb3JlS2V5d29yZHM6IHN0cmluZ1tdOyBkZWJ1ZzogYm9vbGVhbiB9XG4gICk6ICh2YWx1ZTogU0ZWYWx1ZSkgPT4gRXJyb3JEYXRhW107XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBanZTY2hlbWFWYWxpZGF0b3JGYWN0b3J5IGV4dGVuZHMgU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSB7XG4gIHByb3RlY3RlZCBhanY6IEFqdjtcbiAgcHJvdGVjdGVkIG9wdGlvbnM6IEFsYWluU0ZDb25maWc7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChBbGFpbkNvbmZpZ1NlcnZpY2UpIGNvZ1NydjogQWxhaW5Db25maWdTZXJ2aWNlLCBwcml2YXRlIG5nWm9uZTogTmdab25lKSB7XG4gICAgc3VwZXIoKTtcbiAgICBpZiAoISh0eXBlb2YgZG9jdW1lbnQgPT09ICdvYmplY3QnICYmICEhZG9jdW1lbnQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMub3B0aW9ucyA9IG1lcmdlQ29uZmlnKGNvZ1Nydik7XG4gICAgY29uc3QgY3VzdG9tT3B0aW9ucyA9IHRoaXMub3B0aW9ucy5hanYgfHwge307XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgdGhpcy5hanYgPSBuZXcgQWp2KHtcbiAgICAgICAgYWxsRXJyb3JzOiB0cnVlLFxuICAgICAgICBsb29wRW51bTogNTAsXG4gICAgICAgIC4uLmN1c3RvbU9wdGlvbnMsXG4gICAgICAgIGZvcm1hdHM6IHtcbiAgICAgICAgICAnZGF0YS11cmwnOiAvXmRhdGE6KFthLXpdK1xcL1thLXowLTktKy5dKyk/O25hbWU9KC4qKTtiYXNlNjQsKC4qKSQvLFxuICAgICAgICAgIGNvbG9yOiBSRUdFWC5jb2xvcixcbiAgICAgICAgICBtb2JpbGU6IFJFR0VYLm1vYmlsZSxcbiAgICAgICAgICAnaWQtY2FyZCc6IFJFR0VYLmlkQ2FyZCxcbiAgICAgICAgICAuLi5jdXN0b21PcHRpb25zLmZvcm1hdHNcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBhZGRGb3JtYXRzKHRoaXMuYWp2IGFzIE56U2FmZUFueSk7XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVWYWxpZGF0b3JGbihcbiAgICBzY2hlbWE6IFNGU2NoZW1hLFxuICAgIGV4dHJhT3B0aW9uczogeyBpbmdvcmVLZXl3b3Jkczogc3RyaW5nW107IGRlYnVnOiBib29sZWFuIH1cbiAgKTogKHZhbHVlOiBTRlZhbHVlKSA9PiBFcnJvckRhdGFbXSB7XG4gICAgY29uc3QgaW5nb3JlS2V5d29yZHM6IHN0cmluZ1tdID0gW1xuICAgICAgLi4uKHRoaXMub3B0aW9ucy5pbmdvcmVLZXl3b3JkcyBhcyBzdHJpbmdbXSksXG4gICAgICAuLi4oKGV4dHJhT3B0aW9ucy5pbmdvcmVLZXl3b3JkcyBhcyBzdHJpbmdbXSkgfHwgW10pXG4gICAgXTtcblxuICAgIHJldHVybiAodmFsdWU6IFNGVmFsdWUpOiBFcnJvckRhdGFbXSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLmFqdi52YWxpZGF0ZShzY2hlbWEsIHZhbHVlKSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIHN3YWxsb3cgZXJyb3JzIHRocm93biBpbiBhanYgZHVlIHRvIGludmFsaWQgc2NoZW1hcywgdGhlc2VcbiAgICAgICAgLy8gc3RpbGwgZ2V0IGRpc3BsYXllZFxuICAgICAgICBpZiAoZXh0cmFPcHRpb25zLmRlYnVnKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsZXQgZXJyb3JzID0gdGhpcy5hanYuZXJyb3JzO1xuICAgICAgaWYgKHRoaXMub3B0aW9ucyAmJiBpbmdvcmVLZXl3b3JkcyAmJiBlcnJvcnMpIHtcbiAgICAgICAgZXJyb3JzID0gZXJyb3JzLmZpbHRlcih3ID0+IGluZ29yZUtleXdvcmRzLmluZGV4T2Yody5rZXl3b3JkKSA9PT0gLTEpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGVycm9ycyBhcyBFcnJvckRhdGFbXTtcbiAgICB9O1xuICB9XG59XG4iXX0=