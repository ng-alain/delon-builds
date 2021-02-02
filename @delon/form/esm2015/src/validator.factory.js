import { Inject, Injectable } from '@angular/core';
import { AlainConfigService } from '@delon/util/config';
import { REGEX } from '@delon/util/format';
import { mergeConfig } from './config';
import * as i0 from "@angular/core";
import * as i1 from "@delon/util/config";
export class SchemaValidatorFactory {
}
/** @nocollapse */ SchemaValidatorFactory.ɵfac = function SchemaValidatorFactory_Factory(t) { return new (t || SchemaValidatorFactory)(); };
/** @nocollapse */ SchemaValidatorFactory.ɵprov = i0.ɵɵdefineInjectable({ token: SchemaValidatorFactory, factory: SchemaValidatorFactory.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SchemaValidatorFactory, [{
        type: Injectable
    }], null, null); })();
export class AjvSchemaValidatorFactory extends SchemaValidatorFactory {
    constructor(cogSrv) {
        super();
        if (!(typeof document === 'object' && !!document)) {
            return;
        }
        this.options = mergeConfig(cogSrv);
        this.ajv = new Ajv(Object.assign(Object.assign({}, this.options.ajv), { errorDataPath: 'property', allErrors: true, jsonPointers: true }));
        this.ajv.addFormat('data-url', /^data:([a-z]+\/[a-z0-9-+.]+)?;name=(.*);base64,(.*)$/);
        this.ajv.addFormat('color', REGEX.color);
        this.ajv.addFormat('mobile', REGEX.mobile);
        this.ajv.addFormat('id-card', REGEX.idCard);
    }
    createValidatorFn(schema, extraOptions) {
        const ingoreKeywords = [...this.options.ingoreKeywords, ...(extraOptions.ingoreKeywords || [])];
        return (value) => {
            try {
                this.ajv.validate(schema, value);
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
/** @nocollapse */ AjvSchemaValidatorFactory.ɵfac = function AjvSchemaValidatorFactory_Factory(t) { return new (t || AjvSchemaValidatorFactory)(i0.ɵɵinject(AlainConfigService)); };
/** @nocollapse */ AjvSchemaValidatorFactory.ɵprov = i0.ɵɵdefineInjectable({ token: AjvSchemaValidatorFactory, factory: AjvSchemaValidatorFactory.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AjvSchemaValidatorFactory, [{
        type: Injectable
    }], function () { return [{ type: i1.AlainConfigService, decorators: [{
                type: Inject,
                args: [AlainConfigService]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLmZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3NyYy92YWxpZGF0b3IuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsa0JBQWtCLEVBQWlCLE1BQU0sb0JBQW9CLENBQUM7QUFDdkUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxVQUFVLENBQUM7OztBQVF2QyxNQUFNLE9BQWdCLHNCQUFzQjs7K0dBQXRCLHNCQUFzQjtpRkFBdEIsc0JBQXNCLFdBQXRCLHNCQUFzQjt1RkFBdEIsc0JBQXNCO2NBRDNDLFVBQVU7O0FBTVgsTUFBTSxPQUFPLHlCQUEwQixTQUFRLHNCQUFzQjtJQUluRSxZQUF3QyxNQUEwQjtRQUNoRSxLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxDQUFDLE9BQU8sUUFBUSxLQUFLLFFBQVEsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDakQsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLEdBQUcsaUNBQ2IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEtBQ25CLGFBQWEsRUFBRSxVQUFVLEVBQ3pCLFNBQVMsRUFBRSxJQUFJLEVBQ2YsWUFBWSxFQUFFLElBQUksSUFDbEIsQ0FBQztRQUNILElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxzREFBc0QsQ0FBQyxDQUFDO1FBQ3ZGLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxNQUFnQixFQUFFLFlBQTBEO1FBQzVGLE1BQU0sY0FBYyxHQUFhLENBQUMsR0FBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQTJCLEVBQUUsR0FBRyxDQUFFLFlBQVksQ0FBQyxjQUEyQixJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFdEksT0FBTyxDQUFDLEtBQWMsRUFBZSxFQUFFO1lBQ3JDLElBQUk7Z0JBQ0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ2xDO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1YsNkRBQTZEO2dCQUM3RCxzQkFBc0I7Z0JBQ3RCLElBQUksWUFBWSxDQUFDLEtBQUssRUFBRTtvQkFDdEIsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDakI7YUFDRjtZQUNELElBQUksTUFBTSxHQUFVLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO1lBQ3BDLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxjQUFjLElBQUksTUFBTSxFQUFFO2dCQUM1QyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDdkU7WUFDRCxPQUFPLE1BQU0sQ0FBQztRQUNoQixDQUFDLENBQUM7SUFDSixDQUFDOztxSEF6Q1UseUJBQXlCLGNBSWhCLGtCQUFrQjtvRkFKM0IseUJBQXlCLFdBQXpCLHlCQUF5Qjt1RkFBekIseUJBQXlCO2NBRHJDLFVBQVU7O3NCQUtJLE1BQU07dUJBQUMsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UsIEFsYWluU0ZDb25maWcgfSBmcm9tICdAZGVsb24vdXRpbC9jb25maWcnO1xuaW1wb3J0IHsgUkVHRVggfSBmcm9tICdAZGVsb24vdXRpbC9mb3JtYXQnO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IG1lcmdlQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHsgRXJyb3JEYXRhIH0gZnJvbSAnLi9lcnJvcnMnO1xuaW1wb3J0IHsgU0ZWYWx1ZSB9IGZyb20gJy4vaW50ZXJmYWNlJztcbmltcG9ydCB7IFNGU2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEnO1xuXG5kZWNsYXJlIHZhciBBanY6IE56U2FmZUFueTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNjaGVtYVZhbGlkYXRvckZhY3Rvcnkge1xuICBhYnN0cmFjdCBjcmVhdGVWYWxpZGF0b3JGbihzY2hlbWE6IFNGU2NoZW1hLCBleHRyYU9wdGlvbnM6IHsgaW5nb3JlS2V5d29yZHM6IHN0cmluZ1tdOyBkZWJ1ZzogYm9vbGVhbiB9KTogKHZhbHVlOiBTRlZhbHVlKSA9PiBFcnJvckRhdGFbXTtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFqdlNjaGVtYVZhbGlkYXRvckZhY3RvcnkgZXh0ZW5kcyBTY2hlbWFWYWxpZGF0b3JGYWN0b3J5IHtcbiAgcHJvdGVjdGVkIGFqdjogTnpTYWZlQW55O1xuICBwcm90ZWN0ZWQgb3B0aW9uczogQWxhaW5TRkNvbmZpZztcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KEFsYWluQ29uZmlnU2VydmljZSkgY29nU3J2OiBBbGFpbkNvbmZpZ1NlcnZpY2UpIHtcbiAgICBzdXBlcigpO1xuICAgIGlmICghKHR5cGVvZiBkb2N1bWVudCA9PT0gJ29iamVjdCcgJiYgISFkb2N1bWVudCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5vcHRpb25zID0gbWVyZ2VDb25maWcoY29nU3J2KTtcbiAgICB0aGlzLmFqdiA9IG5ldyBBanYoe1xuICAgICAgLi4udGhpcy5vcHRpb25zLmFqdixcbiAgICAgIGVycm9yRGF0YVBhdGg6ICdwcm9wZXJ0eScsXG4gICAgICBhbGxFcnJvcnM6IHRydWUsXG4gICAgICBqc29uUG9pbnRlcnM6IHRydWUsXG4gICAgfSk7XG4gICAgdGhpcy5hanYuYWRkRm9ybWF0KCdkYXRhLXVybCcsIC9eZGF0YTooW2Etel0rXFwvW2EtejAtOS0rLl0rKT87bmFtZT0oLiopO2Jhc2U2NCwoLiopJC8pO1xuICAgIHRoaXMuYWp2LmFkZEZvcm1hdCgnY29sb3InLCBSRUdFWC5jb2xvcik7XG4gICAgdGhpcy5hanYuYWRkRm9ybWF0KCdtb2JpbGUnLCBSRUdFWC5tb2JpbGUpO1xuICAgIHRoaXMuYWp2LmFkZEZvcm1hdCgnaWQtY2FyZCcsIFJFR0VYLmlkQ2FyZCk7XG4gIH1cblxuICBjcmVhdGVWYWxpZGF0b3JGbihzY2hlbWE6IFNGU2NoZW1hLCBleHRyYU9wdGlvbnM6IHsgaW5nb3JlS2V5d29yZHM6IHN0cmluZ1tdOyBkZWJ1ZzogYm9vbGVhbiB9KTogKHZhbHVlOiBTRlZhbHVlKSA9PiBFcnJvckRhdGFbXSB7XG4gICAgY29uc3QgaW5nb3JlS2V5d29yZHM6IHN0cmluZ1tdID0gWy4uLih0aGlzLm9wdGlvbnMuaW5nb3JlS2V5d29yZHMgYXMgc3RyaW5nW10pLCAuLi4oKGV4dHJhT3B0aW9ucy5pbmdvcmVLZXl3b3JkcyBhcyBzdHJpbmdbXSkgfHwgW10pXTtcblxuICAgIHJldHVybiAodmFsdWU6IFNGVmFsdWUpOiBFcnJvckRhdGFbXSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLmFqdi52YWxpZGF0ZShzY2hlbWEsIHZhbHVlKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gc3dhbGxvdyBlcnJvcnMgdGhyb3duIGluIGFqdiBkdWUgdG8gaW52YWxpZCBzY2hlbWFzLCB0aGVzZVxuICAgICAgICAvLyBzdGlsbCBnZXQgZGlzcGxheWVkXG4gICAgICAgIGlmIChleHRyYU9wdGlvbnMuZGVidWcpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxldCBlcnJvcnM6IGFueVtdID0gdGhpcy5hanYuZXJyb3JzO1xuICAgICAgaWYgKHRoaXMub3B0aW9ucyAmJiBpbmdvcmVLZXl3b3JkcyAmJiBlcnJvcnMpIHtcbiAgICAgICAgZXJyb3JzID0gZXJyb3JzLmZpbHRlcih3ID0+IGluZ29yZUtleXdvcmRzLmluZGV4T2Yody5rZXl3b3JkKSA9PT0gLTEpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGVycm9ycztcbiAgICB9O1xuICB9XG59XG4iXX0=