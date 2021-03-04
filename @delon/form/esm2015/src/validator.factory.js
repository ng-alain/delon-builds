import { Inject, Injectable, NgZone } from '@angular/core';
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
    constructor(cogSrv, ngZone) {
        super();
        this.ngZone = ngZone;
        if (!(typeof document === 'object' && !!document)) {
            return;
        }
        this.options = mergeConfig(cogSrv);
        const customOptions = this.options.ajv || {};
        this.ngZone.runOutsideAngular(() => {
            this.ajv = new Ajv(Object.assign(Object.assign({ allErrors: true }, customOptions), { formats: Object.assign({ ip: REGEX.ip, 'data-url': /^data:([a-z]+\/[a-z0-9-+.]+)?;name=(.*);base64,(.*)$/, color: REGEX.color, mobile: REGEX.mobile, 'id-card': REGEX.idCard }, customOptions.formats) }));
        });
    }
    createValidatorFn(schema, extraOptions) {
        const ingoreKeywords = [...this.options.ingoreKeywords, ...(extraOptions.ingoreKeywords || [])];
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
AjvSchemaValidatorFactory.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AjvSchemaValidatorFactory.ctorParameters = () => [
    { type: AlainConfigService, decorators: [{ type: Inject, args: [AlainConfigService,] }] },
    { type: NgZone }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLmZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3NyYy92YWxpZGF0b3IuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0QsT0FBTyxFQUFFLGtCQUFrQixFQUFpQixNQUFNLG9CQUFvQixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMzQyxPQUFPLEdBQThCLE1BQU0sS0FBSyxDQUFDO0FBQ2pELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFNdkMsTUFBTSxPQUFnQixzQkFBc0I7OztZQUQzQyxVQUFVOztBQU1YLE1BQU0sT0FBTyx5QkFBMEIsU0FBUSxzQkFBc0I7SUFJbkUsWUFBd0MsTUFBMEIsRUFBVSxNQUFjO1FBQ3hGLEtBQUssRUFBRSxDQUFDO1FBRGtFLFdBQU0sR0FBTixNQUFNLENBQVE7UUFFeEYsSUFBSSxDQUFDLENBQUMsT0FBTyxRQUFRLEtBQUssUUFBUSxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNqRCxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuQyxNQUFNLGFBQWEsR0FBZSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUM7UUFDekQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUU7WUFDakMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLEdBQUcsK0JBQ2hCLFNBQVMsRUFBRSxJQUFJLElBQ1osYUFBYSxLQUNoQixPQUFPLGtCQUNMLEVBQUUsRUFBRSxLQUFLLENBQUMsRUFBRSxFQUNaLFVBQVUsRUFBRSxzREFBc0QsRUFDbEUsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQ2xCLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTSxFQUNwQixTQUFTLEVBQUUsS0FBSyxDQUFDLE1BQU0sSUFDcEIsYUFBYSxDQUFDLE9BQU8sS0FFMUIsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGlCQUFpQixDQUFDLE1BQWdCLEVBQUUsWUFBMEQ7UUFDNUYsTUFBTSxjQUFjLEdBQWEsQ0FBQyxHQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBMkIsRUFBRSxHQUFHLENBQUUsWUFBWSxDQUFDLGNBQTJCLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUV0SSxPQUFPLENBQUMsS0FBYyxFQUFlLEVBQUU7WUFDckMsSUFBSTtnQkFDRixJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQ3ZFO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1YsNkRBQTZEO2dCQUM3RCxzQkFBc0I7Z0JBQ3RCLElBQUksWUFBWSxDQUFDLEtBQUssRUFBRTtvQkFDdEIsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDakI7YUFDRjtZQUNELElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO1lBQzdCLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxjQUFjLElBQUksTUFBTSxFQUFFO2dCQUM1QyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDdkU7WUFDRCxPQUFPLE1BQXFCLENBQUM7UUFDL0IsQ0FBQyxDQUFDO0lBQ0osQ0FBQzs7O1lBL0NGLFVBQVU7Ozs7WUFiRixrQkFBa0IsdUJBa0JaLE1BQU0sU0FBQyxrQkFBa0I7WUFuQlgsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UsIEFsYWluU0ZDb25maWcgfSBmcm9tICdAZGVsb24vdXRpbC9jb25maWcnO1xuaW1wb3J0IHsgUkVHRVggfSBmcm9tICdAZGVsb24vdXRpbC9mb3JtYXQnO1xuaW1wb3J0IEFqdiwgeyBPcHRpb25zIGFzIEFqdk9wdGlvbnMgfSBmcm9tICdhanYnO1xuaW1wb3J0IHsgbWVyZ2VDb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgeyBFcnJvckRhdGEgfSBmcm9tICcuL2Vycm9ycyc7XG5pbXBvcnQgeyBTRlZhbHVlIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgU0ZTY2hlbWEgfSBmcm9tICcuL3NjaGVtYSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTY2hlbWFWYWxpZGF0b3JGYWN0b3J5IHtcbiAgYWJzdHJhY3QgY3JlYXRlVmFsaWRhdG9yRm4oc2NoZW1hOiBTRlNjaGVtYSwgZXh0cmFPcHRpb25zOiB7IGluZ29yZUtleXdvcmRzOiBzdHJpbmdbXTsgZGVidWc6IGJvb2xlYW4gfSk6ICh2YWx1ZTogU0ZWYWx1ZSkgPT4gRXJyb3JEYXRhW107XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBanZTY2hlbWFWYWxpZGF0b3JGYWN0b3J5IGV4dGVuZHMgU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSB7XG4gIHByb3RlY3RlZCBhanY6IEFqdjtcbiAgcHJvdGVjdGVkIG9wdGlvbnM6IEFsYWluU0ZDb25maWc7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChBbGFpbkNvbmZpZ1NlcnZpY2UpIGNvZ1NydjogQWxhaW5Db25maWdTZXJ2aWNlLCBwcml2YXRlIG5nWm9uZTogTmdab25lKSB7XG4gICAgc3VwZXIoKTtcbiAgICBpZiAoISh0eXBlb2YgZG9jdW1lbnQgPT09ICdvYmplY3QnICYmICEhZG9jdW1lbnQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMub3B0aW9ucyA9IG1lcmdlQ29uZmlnKGNvZ1Nydik7XG4gICAgY29uc3QgY3VzdG9tT3B0aW9uczogQWp2T3B0aW9ucyA9IHRoaXMub3B0aW9ucy5hanYgfHwge307XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgdGhpcy5hanYgPSBuZXcgQWp2KHtcbiAgICAgICAgYWxsRXJyb3JzOiB0cnVlLFxuICAgICAgICAuLi5jdXN0b21PcHRpb25zLFxuICAgICAgICBmb3JtYXRzOiB7XG4gICAgICAgICAgaXA6IFJFR0VYLmlwLFxuICAgICAgICAgICdkYXRhLXVybCc6IC9eZGF0YTooW2Etel0rXFwvW2EtejAtOS0rLl0rKT87bmFtZT0oLiopO2Jhc2U2NCwoLiopJC8sXG4gICAgICAgICAgY29sb3I6IFJFR0VYLmNvbG9yLFxuICAgICAgICAgIG1vYmlsZTogUkVHRVgubW9iaWxlLFxuICAgICAgICAgICdpZC1jYXJkJzogUkVHRVguaWRDYXJkLFxuICAgICAgICAgIC4uLmN1c3RvbU9wdGlvbnMuZm9ybWF0cyxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlVmFsaWRhdG9yRm4oc2NoZW1hOiBTRlNjaGVtYSwgZXh0cmFPcHRpb25zOiB7IGluZ29yZUtleXdvcmRzOiBzdHJpbmdbXTsgZGVidWc6IGJvb2xlYW4gfSk6ICh2YWx1ZTogU0ZWYWx1ZSkgPT4gRXJyb3JEYXRhW10ge1xuICAgIGNvbnN0IGluZ29yZUtleXdvcmRzOiBzdHJpbmdbXSA9IFsuLi4odGhpcy5vcHRpb25zLmluZ29yZUtleXdvcmRzIGFzIHN0cmluZ1tdKSwgLi4uKChleHRyYU9wdGlvbnMuaW5nb3JlS2V5d29yZHMgYXMgc3RyaW5nW10pIHx8IFtdKV07XG5cbiAgICByZXR1cm4gKHZhbHVlOiBTRlZhbHVlKTogRXJyb3JEYXRhW10gPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5hanYudmFsaWRhdGUoc2NoZW1hLCB2YWx1ZSkpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBzd2FsbG93IGVycm9ycyB0aHJvd24gaW4gYWp2IGR1ZSB0byBpbnZhbGlkIHNjaGVtYXMsIHRoZXNlXG4gICAgICAgIC8vIHN0aWxsIGdldCBkaXNwbGF5ZWRcbiAgICAgICAgaWYgKGV4dHJhT3B0aW9ucy5kZWJ1Zykge1xuICAgICAgICAgIGNvbnNvbGUud2FybihlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGV0IGVycm9ycyA9IHRoaXMuYWp2LmVycm9ycztcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMgJiYgaW5nb3JlS2V5d29yZHMgJiYgZXJyb3JzKSB7XG4gICAgICAgIGVycm9ycyA9IGVycm9ycy5maWx0ZXIodyA9PiBpbmdvcmVLZXl3b3Jkcy5pbmRleE9mKHcua2V5d29yZCkgPT09IC0xKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBlcnJvcnMgYXMgRXJyb3JEYXRhW107XG4gICAgfTtcbiAgfVxufVxuIl19