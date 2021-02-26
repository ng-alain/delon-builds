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
        const customOptions = this.options.ajv || {};
        this.ajv = new Ajv(Object.assign(Object.assign({ allErrors: true }, customOptions), { formats: Object.assign({ ip: REGEX.ip, 'data-url': /^data:([a-z]+\/[a-z0-9-+.]+)?;name=(.*);base64,(.*)$/, color: REGEX.color, mobile: REGEX.mobile, 'id-card': REGEX.idCard }, customOptions.formats) }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLmZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3NyYy92YWxpZGF0b3IuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsa0JBQWtCLEVBQWlCLE1BQU0sb0JBQW9CLENBQUM7QUFDdkUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzNDLE9BQU8sR0FBOEIsTUFBTSxLQUFLLENBQUM7QUFDakQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQU12QyxNQUFNLE9BQWdCLHNCQUFzQjs7O1lBRDNDLFVBQVU7O0FBTVgsTUFBTSxPQUFPLHlCQUEwQixTQUFRLHNCQUFzQjtJQUluRSxZQUF3QyxNQUEwQjtRQUNoRSxLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxDQUFDLE9BQU8sUUFBUSxLQUFLLFFBQVEsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDakQsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkMsTUFBTSxhQUFhLEdBQWUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDO1FBQ3pELElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxHQUFHLCtCQUNoQixTQUFTLEVBQUUsSUFBSSxJQUNaLGFBQWEsS0FDaEIsT0FBTyxrQkFDTCxFQUFFLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFDWixVQUFVLEVBQUUsc0RBQXNELEVBQ2xFLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxFQUNsQixNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU0sRUFDcEIsU0FBUyxFQUFFLEtBQUssQ0FBQyxNQUFNLElBQ3BCLGFBQWEsQ0FBQyxPQUFPLEtBRTFCLENBQUM7SUFDTCxDQUFDO0lBRUQsaUJBQWlCLENBQUMsTUFBZ0IsRUFBRSxZQUEwRDtRQUM1RixNQUFNLGNBQWMsR0FBYSxDQUFDLEdBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUEyQixFQUFFLEdBQUcsQ0FBRSxZQUFZLENBQUMsY0FBMkIsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRXRJLE9BQU8sQ0FBQyxLQUFjLEVBQWUsRUFBRTtZQUNyQyxJQUFJO2dCQUNGLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQzthQUNsQztZQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNWLDZEQUE2RDtnQkFDN0Qsc0JBQXNCO2dCQUN0QixJQUFJLFlBQVksQ0FBQyxLQUFLLEVBQUU7b0JBQ3RCLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ2pCO2FBQ0Y7WUFDRCxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztZQUM3QixJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksY0FBYyxJQUFJLE1BQU0sRUFBRTtnQkFDNUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3ZFO1lBQ0QsT0FBTyxNQUFxQixDQUFDO1FBQy9CLENBQUMsQ0FBQztJQUNKLENBQUM7OztZQTdDRixVQUFVOzs7O1lBYkYsa0JBQWtCLHVCQWtCWixNQUFNLFNBQUMsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UsIEFsYWluU0ZDb25maWcgfSBmcm9tICdAZGVsb24vdXRpbC9jb25maWcnO1xuaW1wb3J0IHsgUkVHRVggfSBmcm9tICdAZGVsb24vdXRpbC9mb3JtYXQnO1xuaW1wb3J0IEFqdiwgeyBPcHRpb25zIGFzIEFqdk9wdGlvbnMgfSBmcm9tICdhanYnO1xuaW1wb3J0IHsgbWVyZ2VDb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgeyBFcnJvckRhdGEgfSBmcm9tICcuL2Vycm9ycyc7XG5pbXBvcnQgeyBTRlZhbHVlIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgU0ZTY2hlbWEgfSBmcm9tICcuL3NjaGVtYSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTY2hlbWFWYWxpZGF0b3JGYWN0b3J5IHtcbiAgYWJzdHJhY3QgY3JlYXRlVmFsaWRhdG9yRm4oc2NoZW1hOiBTRlNjaGVtYSwgZXh0cmFPcHRpb25zOiB7IGluZ29yZUtleXdvcmRzOiBzdHJpbmdbXTsgZGVidWc6IGJvb2xlYW4gfSk6ICh2YWx1ZTogU0ZWYWx1ZSkgPT4gRXJyb3JEYXRhW107XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBanZTY2hlbWFWYWxpZGF0b3JGYWN0b3J5IGV4dGVuZHMgU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSB7XG4gIHByb3RlY3RlZCBhanY6IEFqdjtcbiAgcHJvdGVjdGVkIG9wdGlvbnM6IEFsYWluU0ZDb25maWc7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChBbGFpbkNvbmZpZ1NlcnZpY2UpIGNvZ1NydjogQWxhaW5Db25maWdTZXJ2aWNlKSB7XG4gICAgc3VwZXIoKTtcbiAgICBpZiAoISh0eXBlb2YgZG9jdW1lbnQgPT09ICdvYmplY3QnICYmICEhZG9jdW1lbnQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMub3B0aW9ucyA9IG1lcmdlQ29uZmlnKGNvZ1Nydik7XG4gICAgY29uc3QgY3VzdG9tT3B0aW9uczogQWp2T3B0aW9ucyA9IHRoaXMub3B0aW9ucy5hanYgfHwge307XG4gICAgdGhpcy5hanYgPSBuZXcgQWp2KHtcbiAgICAgIGFsbEVycm9yczogdHJ1ZSxcbiAgICAgIC4uLmN1c3RvbU9wdGlvbnMsXG4gICAgICBmb3JtYXRzOiB7XG4gICAgICAgIGlwOiBSRUdFWC5pcCxcbiAgICAgICAgJ2RhdGEtdXJsJzogL15kYXRhOihbYS16XStcXC9bYS16MC05LSsuXSspPztuYW1lPSguKik7YmFzZTY0LCguKikkLyxcbiAgICAgICAgY29sb3I6IFJFR0VYLmNvbG9yLFxuICAgICAgICBtb2JpbGU6IFJFR0VYLm1vYmlsZSxcbiAgICAgICAgJ2lkLWNhcmQnOiBSRUdFWC5pZENhcmQsXG4gICAgICAgIC4uLmN1c3RvbU9wdGlvbnMuZm9ybWF0cyxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVWYWxpZGF0b3JGbihzY2hlbWE6IFNGU2NoZW1hLCBleHRyYU9wdGlvbnM6IHsgaW5nb3JlS2V5d29yZHM6IHN0cmluZ1tdOyBkZWJ1ZzogYm9vbGVhbiB9KTogKHZhbHVlOiBTRlZhbHVlKSA9PiBFcnJvckRhdGFbXSB7XG4gICAgY29uc3QgaW5nb3JlS2V5d29yZHM6IHN0cmluZ1tdID0gWy4uLih0aGlzLm9wdGlvbnMuaW5nb3JlS2V5d29yZHMgYXMgc3RyaW5nW10pLCAuLi4oKGV4dHJhT3B0aW9ucy5pbmdvcmVLZXl3b3JkcyBhcyBzdHJpbmdbXSkgfHwgW10pXTtcblxuICAgIHJldHVybiAodmFsdWU6IFNGVmFsdWUpOiBFcnJvckRhdGFbXSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLmFqdi52YWxpZGF0ZShzY2hlbWEsIHZhbHVlKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gc3dhbGxvdyBlcnJvcnMgdGhyb3duIGluIGFqdiBkdWUgdG8gaW52YWxpZCBzY2hlbWFzLCB0aGVzZVxuICAgICAgICAvLyBzdGlsbCBnZXQgZGlzcGxheWVkXG4gICAgICAgIGlmIChleHRyYU9wdGlvbnMuZGVidWcpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxldCBlcnJvcnMgPSB0aGlzLmFqdi5lcnJvcnM7XG4gICAgICBpZiAodGhpcy5vcHRpb25zICYmIGluZ29yZUtleXdvcmRzICYmIGVycm9ycykge1xuICAgICAgICBlcnJvcnMgPSBlcnJvcnMuZmlsdGVyKHcgPT4gaW5nb3JlS2V5d29yZHMuaW5kZXhPZih3LmtleXdvcmQpID09PSAtMSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZXJyb3JzIGFzIEVycm9yRGF0YVtdO1xuICAgIH07XG4gIH1cbn1cbiJdfQ==