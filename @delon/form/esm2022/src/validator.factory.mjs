import { Inject, Injectable } from '@angular/core';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import { AlainConfigService } from '@delon/util/config';
import { REGEX } from '@delon/util/format';
import { mergeConfig } from './config';
import * as i0 from "@angular/core";
import * as i1 from "@delon/util/config";
class SchemaValidatorFactory {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.3", ngImport: i0, type: SchemaValidatorFactory, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.3", ngImport: i0, type: SchemaValidatorFactory }); }
}
export { SchemaValidatorFactory };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.3", ngImport: i0, type: SchemaValidatorFactory, decorators: [{
            type: Injectable
        }] });
class AjvSchemaValidatorFactory extends SchemaValidatorFactory {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.3", ngImport: i0, type: AjvSchemaValidatorFactory, deps: [{ token: AlainConfigService }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.3", ngImport: i0, type: AjvSchemaValidatorFactory }); }
}
export { AjvSchemaValidatorFactory };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.3", ngImport: i0, type: AjvSchemaValidatorFactory, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.AlainConfigService, decorators: [{
                    type: Inject,
                    args: [AlainConfigService]
                }] }, { type: i0.NgZone }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLmZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3NyYy92YWxpZGF0b3IuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUUzRCxPQUFPLEdBQUcsTUFBTSxLQUFLLENBQUM7QUFDdEIsT0FBTyxVQUFVLE1BQU0sYUFBYSxDQUFDO0FBRXJDLE9BQU8sRUFBRSxrQkFBa0IsRUFBaUIsTUFBTSxvQkFBb0IsQ0FBQztBQUN2RSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFVBQVUsQ0FBQzs7O0FBS3ZDLE1BQ3NCLHNCQUFzQjs4R0FBdEIsc0JBQXNCO2tIQUF0QixzQkFBc0I7O1NBQXRCLHNCQUFzQjsyRkFBdEIsc0JBQXNCO2tCQUQzQyxVQUFVOztBQVFYLE1BQ2EseUJBQTBCLFNBQVEsc0JBQXNCO0lBSW5FLFlBQXdDLE1BQTBCLEVBQVUsTUFBYztRQUN4RixLQUFLLEVBQUUsQ0FBQztRQURrRSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBRXhGLElBQUksQ0FBQyxDQUFDLE9BQU8sUUFBUSxLQUFLLFFBQVEsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDakQsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkMsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDO1FBQzdDLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUM7Z0JBQ2pCLFNBQVMsRUFBRSxJQUFJO2dCQUNmLFFBQVEsRUFBRSxFQUFFO2dCQUNaLEdBQUcsYUFBYTtnQkFDaEIsT0FBTyxFQUFFO29CQUNQLFVBQVUsRUFBRSxzREFBc0Q7b0JBQ2xFLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztvQkFDbEIsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO29CQUNwQixTQUFTLEVBQUUsS0FBSyxDQUFDLE1BQU07b0JBQ3ZCLEdBQUcsYUFBYSxDQUFDLE9BQU87aUJBQ3pCO2FBQ0YsQ0FBQyxDQUFDO1lBQ0gsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFnQixDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsaUJBQWlCLENBQ2YsTUFBZ0IsRUFDaEIsWUFBMEQ7UUFFMUQsTUFBTSxjQUFjLEdBQWE7WUFDL0IsR0FBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQTJCO1lBQzVDLEdBQUcsQ0FBRSxZQUFZLENBQUMsY0FBMkIsSUFBSSxFQUFFLENBQUM7U0FDckQsQ0FBQztRQUVGLE9BQU8sQ0FBQyxLQUFjLEVBQWUsRUFBRTtZQUNyQyxJQUFJO2dCQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFDdkU7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDVixJQUFJLE9BQU8sU0FBUyxLQUFLLFdBQVcsSUFBSSxTQUFTLEVBQUU7b0JBQ2pELDZEQUE2RDtvQkFDN0Qsc0JBQXNCO29CQUN0QixJQUFJLFlBQVksQ0FBQyxLQUFLLEVBQUU7d0JBQ3RCLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ2pCO2lCQUNGO2FBQ0Y7WUFDRCxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztZQUM3QixJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksY0FBYyxJQUFJLE1BQU0sRUFBRTtnQkFDNUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3ZFO1lBQ0QsT0FBTyxNQUFxQixDQUFDO1FBQy9CLENBQUMsQ0FBQztJQUNKLENBQUM7OEdBdkRVLHlCQUF5QixrQkFJaEIsa0JBQWtCO2tIQUozQix5QkFBeUI7O1NBQXpCLHlCQUF5QjsyRkFBekIseUJBQXlCO2tCQURyQyxVQUFVOzswQkFLSSxNQUFNOzJCQUFDLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCBBanYgZnJvbSAnYWp2JztcbmltcG9ydCBhZGRGb3JtYXRzIGZyb20gJ2Fqdi1mb3JtYXRzJztcblxuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlLCBBbGFpblNGQ29uZmlnIH0gZnJvbSAnQGRlbG9uL3V0aWwvY29uZmlnJztcbmltcG9ydCB7IFJFR0VYIH0gZnJvbSAnQGRlbG9uL3V0aWwvZm9ybWF0JztcbmltcG9ydCB0eXBlIHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuaW1wb3J0IHsgbWVyZ2VDb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgeyBFcnJvckRhdGEgfSBmcm9tICcuL2Vycm9ycyc7XG5pbXBvcnQgeyBTRlZhbHVlIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgU0ZTY2hlbWEgfSBmcm9tICcuL3NjaGVtYSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTY2hlbWFWYWxpZGF0b3JGYWN0b3J5IHtcbiAgYWJzdHJhY3QgY3JlYXRlVmFsaWRhdG9yRm4oXG4gICAgc2NoZW1hOiBTRlNjaGVtYSxcbiAgICBleHRyYU9wdGlvbnM6IHsgaW5nb3JlS2V5d29yZHM6IHN0cmluZ1tdOyBkZWJ1ZzogYm9vbGVhbiB9XG4gICk6ICh2YWx1ZTogU0ZWYWx1ZSkgPT4gRXJyb3JEYXRhW107XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBanZTY2hlbWFWYWxpZGF0b3JGYWN0b3J5IGV4dGVuZHMgU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSB7XG4gIHByb3RlY3RlZCBhanYhOiBBanY7XG4gIHByb3RlY3RlZCBvcHRpb25zITogQWxhaW5TRkNvbmZpZztcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KEFsYWluQ29uZmlnU2VydmljZSkgY29nU3J2OiBBbGFpbkNvbmZpZ1NlcnZpY2UsIHByaXZhdGUgbmdab25lOiBOZ1pvbmUpIHtcbiAgICBzdXBlcigpO1xuICAgIGlmICghKHR5cGVvZiBkb2N1bWVudCA9PT0gJ29iamVjdCcgJiYgISFkb2N1bWVudCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5vcHRpb25zID0gbWVyZ2VDb25maWcoY29nU3J2KTtcbiAgICBjb25zdCBjdXN0b21PcHRpb25zID0gdGhpcy5vcHRpb25zLmFqdiB8fCB7fTtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICB0aGlzLmFqdiA9IG5ldyBBanYoe1xuICAgICAgICBhbGxFcnJvcnM6IHRydWUsXG4gICAgICAgIGxvb3BFbnVtOiA1MCxcbiAgICAgICAgLi4uY3VzdG9tT3B0aW9ucyxcbiAgICAgICAgZm9ybWF0czoge1xuICAgICAgICAgICdkYXRhLXVybCc6IC9eZGF0YTooW2Etel0rXFwvW2EtejAtOS0rLl0rKT87bmFtZT0oLiopO2Jhc2U2NCwoLiopJC8sXG4gICAgICAgICAgY29sb3I6IFJFR0VYLmNvbG9yLFxuICAgICAgICAgIG1vYmlsZTogUkVHRVgubW9iaWxlLFxuICAgICAgICAgICdpZC1jYXJkJzogUkVHRVguaWRDYXJkLFxuICAgICAgICAgIC4uLmN1c3RvbU9wdGlvbnMuZm9ybWF0c1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGFkZEZvcm1hdHModGhpcy5hanYgYXMgTnpTYWZlQW55KTtcbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZVZhbGlkYXRvckZuKFxuICAgIHNjaGVtYTogU0ZTY2hlbWEsXG4gICAgZXh0cmFPcHRpb25zOiB7IGluZ29yZUtleXdvcmRzOiBzdHJpbmdbXTsgZGVidWc6IGJvb2xlYW4gfVxuICApOiAodmFsdWU6IFNGVmFsdWUpID0+IEVycm9yRGF0YVtdIHtcbiAgICBjb25zdCBpbmdvcmVLZXl3b3Jkczogc3RyaW5nW10gPSBbXG4gICAgICAuLi4odGhpcy5vcHRpb25zLmluZ29yZUtleXdvcmRzIGFzIHN0cmluZ1tdKSxcbiAgICAgIC4uLigoZXh0cmFPcHRpb25zLmluZ29yZUtleXdvcmRzIGFzIHN0cmluZ1tdKSB8fCBbXSlcbiAgICBdO1xuXG4gICAgcmV0dXJuICh2YWx1ZTogU0ZWYWx1ZSk6IEVycm9yRGF0YVtdID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuYWp2LnZhbGlkYXRlKHNjaGVtYSwgdmFsdWUpKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBuZ0Rldk1vZGUgPT09ICd1bmRlZmluZWQnIHx8IG5nRGV2TW9kZSkge1xuICAgICAgICAgIC8vIHN3YWxsb3cgZXJyb3JzIHRocm93biBpbiBhanYgZHVlIHRvIGludmFsaWQgc2NoZW1hcywgdGhlc2VcbiAgICAgICAgICAvLyBzdGlsbCBnZXQgZGlzcGxheWVkXG4gICAgICAgICAgaWYgKGV4dHJhT3B0aW9ucy5kZWJ1Zykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGV0IGVycm9ycyA9IHRoaXMuYWp2LmVycm9ycztcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMgJiYgaW5nb3JlS2V5d29yZHMgJiYgZXJyb3JzKSB7XG4gICAgICAgIGVycm9ycyA9IGVycm9ycy5maWx0ZXIodyA9PiBpbmdvcmVLZXl3b3Jkcy5pbmRleE9mKHcua2V5d29yZCkgPT09IC0xKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBlcnJvcnMgYXMgRXJyb3JEYXRhW107XG4gICAgfTtcbiAgfVxufVxuIl19