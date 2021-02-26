import { Inject, Injectable } from '@angular/core';
import { AlainConfigService } from '@delon/util/config';
import { REGEX } from '@delon/util/format';
import Ajv from 'ajv';
import { mergeConfig } from './config';
export class SchemaValidatorFactory {
}
SchemaValidatorFactory.decorators = [
    { type: Injectable }
];
export class AjvSchemaValidatorFactory extends SchemaValidatorFactory {
    constructor(cogSrv) {
        super();
        if (!(typeof document === 'object' && !!document)) {
            return;
        }
        this.options = mergeConfig(cogSrv);
        this.ajv = new Ajv(Object.assign(Object.assign({}, this.options.ajv), { 
            // errorDataPath: 'property',
            allErrors: true }));
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
AjvSchemaValidatorFactory.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AjvSchemaValidatorFactory.ctorParameters = () => [
    { type: AlainConfigService, decorators: [{ type: Inject, args: [AlainConfigService,] }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLmZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3NyYy92YWxpZGF0b3IuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsa0JBQWtCLEVBQWlCLE1BQU0sb0JBQW9CLENBQUM7QUFDdkUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzNDLE9BQU8sR0FBRyxNQUFNLEtBQUssQ0FBQztBQUN0QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBTXZDLE1BQU0sT0FBZ0Isc0JBQXNCOzs7WUFEM0MsVUFBVTs7QUFNWCxNQUFNLE9BQU8seUJBQTBCLFNBQVEsc0JBQXNCO0lBSW5FLFlBQXdDLE1BQTBCO1FBQ2hFLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLENBQUMsT0FBTyxRQUFRLEtBQUssUUFBUSxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNqRCxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksR0FBRyxpQ0FDYixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUc7WUFDbkIsNkJBQTZCO1lBQzdCLFNBQVMsRUFBRSxJQUFJLElBQ2YsQ0FBQztRQUNILElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxzREFBc0QsQ0FBQyxDQUFDO1FBQ3ZGLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxNQUFnQixFQUFFLFlBQTBEO1FBQzVGLE1BQU0sY0FBYyxHQUFhLENBQUMsR0FBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQTJCLEVBQUUsR0FBRyxDQUFFLFlBQVksQ0FBQyxjQUEyQixJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFdEksT0FBTyxDQUFDLEtBQWMsRUFBZSxFQUFFO1lBQ3JDLElBQUk7Z0JBQ0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ2xDO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1YsNkRBQTZEO2dCQUM3RCxzQkFBc0I7Z0JBQ3RCLElBQUksWUFBWSxDQUFDLEtBQUssRUFBRTtvQkFDdEIsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDakI7YUFDRjtZQUNELElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO1lBQzdCLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxjQUFjLElBQUksTUFBTSxFQUFFO2dCQUM1QyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDdkU7WUFDRCxPQUFPLE1BQXFCLENBQUM7UUFDL0IsQ0FBQyxDQUFDO0lBQ0osQ0FBQzs7O1lBekNGLFVBQVU7Ozs7WUFiRixrQkFBa0IsdUJBa0JaLE1BQU0sU0FBQyxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFsYWluQ29uZmlnU2VydmljZSwgQWxhaW5TRkNvbmZpZyB9IGZyb20gJ0BkZWxvbi91dGlsL2NvbmZpZyc7XG5pbXBvcnQgeyBSRUdFWCB9IGZyb20gJ0BkZWxvbi91dGlsL2Zvcm1hdCc7XG5pbXBvcnQgQWp2IGZyb20gJ2Fqdic7XG5pbXBvcnQgeyBtZXJnZUNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7IEVycm9yRGF0YSB9IGZyb20gJy4vZXJyb3JzJztcbmltcG9ydCB7IFNGVmFsdWUgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBTRlNjaGVtYSB9IGZyb20gJy4vc2NoZW1hJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNjaGVtYVZhbGlkYXRvckZhY3Rvcnkge1xuICBhYnN0cmFjdCBjcmVhdGVWYWxpZGF0b3JGbihzY2hlbWE6IFNGU2NoZW1hLCBleHRyYU9wdGlvbnM6IHsgaW5nb3JlS2V5d29yZHM6IHN0cmluZ1tdOyBkZWJ1ZzogYm9vbGVhbiB9KTogKHZhbHVlOiBTRlZhbHVlKSA9PiBFcnJvckRhdGFbXTtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFqdlNjaGVtYVZhbGlkYXRvckZhY3RvcnkgZXh0ZW5kcyBTY2hlbWFWYWxpZGF0b3JGYWN0b3J5IHtcbiAgcHJvdGVjdGVkIGFqdjogQWp2O1xuICBwcm90ZWN0ZWQgb3B0aW9uczogQWxhaW5TRkNvbmZpZztcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KEFsYWluQ29uZmlnU2VydmljZSkgY29nU3J2OiBBbGFpbkNvbmZpZ1NlcnZpY2UpIHtcbiAgICBzdXBlcigpO1xuICAgIGlmICghKHR5cGVvZiBkb2N1bWVudCA9PT0gJ29iamVjdCcgJiYgISFkb2N1bWVudCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5vcHRpb25zID0gbWVyZ2VDb25maWcoY29nU3J2KTtcbiAgICB0aGlzLmFqdiA9IG5ldyBBanYoe1xuICAgICAgLi4udGhpcy5vcHRpb25zLmFqdixcbiAgICAgIC8vIGVycm9yRGF0YVBhdGg6ICdwcm9wZXJ0eScsXG4gICAgICBhbGxFcnJvcnM6IHRydWUsXG4gICAgfSk7XG4gICAgdGhpcy5hanYuYWRkRm9ybWF0KCdkYXRhLXVybCcsIC9eZGF0YTooW2Etel0rXFwvW2EtejAtOS0rLl0rKT87bmFtZT0oLiopO2Jhc2U2NCwoLiopJC8pO1xuICAgIHRoaXMuYWp2LmFkZEZvcm1hdCgnY29sb3InLCBSRUdFWC5jb2xvcik7XG4gICAgdGhpcy5hanYuYWRkRm9ybWF0KCdtb2JpbGUnLCBSRUdFWC5tb2JpbGUpO1xuICAgIHRoaXMuYWp2LmFkZEZvcm1hdCgnaWQtY2FyZCcsIFJFR0VYLmlkQ2FyZCk7XG4gIH1cblxuICBjcmVhdGVWYWxpZGF0b3JGbihzY2hlbWE6IFNGU2NoZW1hLCBleHRyYU9wdGlvbnM6IHsgaW5nb3JlS2V5d29yZHM6IHN0cmluZ1tdOyBkZWJ1ZzogYm9vbGVhbiB9KTogKHZhbHVlOiBTRlZhbHVlKSA9PiBFcnJvckRhdGFbXSB7XG4gICAgY29uc3QgaW5nb3JlS2V5d29yZHM6IHN0cmluZ1tdID0gWy4uLih0aGlzLm9wdGlvbnMuaW5nb3JlS2V5d29yZHMgYXMgc3RyaW5nW10pLCAuLi4oKGV4dHJhT3B0aW9ucy5pbmdvcmVLZXl3b3JkcyBhcyBzdHJpbmdbXSkgfHwgW10pXTtcblxuICAgIHJldHVybiAodmFsdWU6IFNGVmFsdWUpOiBFcnJvckRhdGFbXSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLmFqdi52YWxpZGF0ZShzY2hlbWEsIHZhbHVlKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gc3dhbGxvdyBlcnJvcnMgdGhyb3duIGluIGFqdiBkdWUgdG8gaW52YWxpZCBzY2hlbWFzLCB0aGVzZVxuICAgICAgICAvLyBzdGlsbCBnZXQgZGlzcGxheWVkXG4gICAgICAgIGlmIChleHRyYU9wdGlvbnMuZGVidWcpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxldCBlcnJvcnMgPSB0aGlzLmFqdi5lcnJvcnM7XG4gICAgICBpZiAodGhpcy5vcHRpb25zICYmIGluZ29yZUtleXdvcmRzICYmIGVycm9ycykge1xuICAgICAgICBlcnJvcnMgPSBlcnJvcnMuZmlsdGVyKHcgPT4gaW5nb3JlS2V5d29yZHMuaW5kZXhPZih3LmtleXdvcmQpID09PSAtMSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZXJyb3JzIGFzIEVycm9yRGF0YVtdO1xuICAgIH07XG4gIH1cbn1cbiJdfQ==