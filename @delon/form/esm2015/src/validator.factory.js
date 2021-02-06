import { Inject, Injectable } from '@angular/core';
import { AlainConfigService } from '@delon/util/config';
import { REGEX } from '@delon/util/format';
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
AjvSchemaValidatorFactory.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AjvSchemaValidatorFactory.ctorParameters = () => [
    { type: AlainConfigService, decorators: [{ type: Inject, args: [AlainConfigService,] }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLmZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3NyYy92YWxpZGF0b3IuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsa0JBQWtCLEVBQWlCLE1BQU0sb0JBQW9CLENBQUM7QUFDdkUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFRdkMsTUFBTSxPQUFnQixzQkFBc0I7OztZQUQzQyxVQUFVOztBQU1YLE1BQU0sT0FBTyx5QkFBMEIsU0FBUSxzQkFBc0I7SUFJbkUsWUFBd0MsTUFBMEI7UUFDaEUsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsQ0FBQyxPQUFPLFFBQVEsS0FBSyxRQUFRLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ2pELE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxHQUFHLGlDQUNiLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxLQUNuQixhQUFhLEVBQUUsVUFBVSxFQUN6QixTQUFTLEVBQUUsSUFBSSxFQUNmLFlBQVksRUFBRSxJQUFJLElBQ2xCLENBQUM7UUFDSCxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsc0RBQXNELENBQUMsQ0FBQztRQUN2RixJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsaUJBQWlCLENBQUMsTUFBZ0IsRUFBRSxZQUEwRDtRQUM1RixNQUFNLGNBQWMsR0FBYSxDQUFDLEdBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUEyQixFQUFFLEdBQUcsQ0FBRSxZQUFZLENBQUMsY0FBMkIsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRXRJLE9BQU8sQ0FBQyxLQUFjLEVBQWUsRUFBRTtZQUNyQyxJQUFJO2dCQUNGLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQzthQUNsQztZQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNWLDZEQUE2RDtnQkFDN0Qsc0JBQXNCO2dCQUN0QixJQUFJLFlBQVksQ0FBQyxLQUFLLEVBQUU7b0JBQ3RCLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ2pCO2FBQ0Y7WUFDRCxJQUFJLE1BQU0sR0FBVSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztZQUNwQyxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksY0FBYyxJQUFJLE1BQU0sRUFBRTtnQkFDNUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3ZFO1lBQ0QsT0FBTyxNQUFNLENBQUM7UUFDaEIsQ0FBQyxDQUFDO0lBQ0osQ0FBQzs7O1lBMUNGLFVBQVU7Ozs7WUFmRixrQkFBa0IsdUJBb0JaLE1BQU0sU0FBQyxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFsYWluQ29uZmlnU2VydmljZSwgQWxhaW5TRkNvbmZpZyB9IGZyb20gJ0BkZWxvbi91dGlsL2NvbmZpZyc7XG5pbXBvcnQgeyBSRUdFWCB9IGZyb20gJ0BkZWxvbi91dGlsL2Zvcm1hdCc7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgbWVyZ2VDb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgeyBFcnJvckRhdGEgfSBmcm9tICcuL2Vycm9ycyc7XG5pbXBvcnQgeyBTRlZhbHVlIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgU0ZTY2hlbWEgfSBmcm9tICcuL3NjaGVtYSc7XG5cbmRlY2xhcmUgdmFyIEFqdjogTnpTYWZlQW55O1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSB7XG4gIGFic3RyYWN0IGNyZWF0ZVZhbGlkYXRvckZuKHNjaGVtYTogU0ZTY2hlbWEsIGV4dHJhT3B0aW9uczogeyBpbmdvcmVLZXl3b3Jkczogc3RyaW5nW107IGRlYnVnOiBib29sZWFuIH0pOiAodmFsdWU6IFNGVmFsdWUpID0+IEVycm9yRGF0YVtdO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWp2U2NoZW1hVmFsaWRhdG9yRmFjdG9yeSBleHRlbmRzIFNjaGVtYVZhbGlkYXRvckZhY3Rvcnkge1xuICBwcm90ZWN0ZWQgYWp2OiBOelNhZmVBbnk7XG4gIHByb3RlY3RlZCBvcHRpb25zOiBBbGFpblNGQ29uZmlnO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoQWxhaW5Db25maWdTZXJ2aWNlKSBjb2dTcnY6IEFsYWluQ29uZmlnU2VydmljZSkge1xuICAgIHN1cGVyKCk7XG4gICAgaWYgKCEodHlwZW9mIGRvY3VtZW50ID09PSAnb2JqZWN0JyAmJiAhIWRvY3VtZW50KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLm9wdGlvbnMgPSBtZXJnZUNvbmZpZyhjb2dTcnYpO1xuICAgIHRoaXMuYWp2ID0gbmV3IEFqdih7XG4gICAgICAuLi50aGlzLm9wdGlvbnMuYWp2LFxuICAgICAgZXJyb3JEYXRhUGF0aDogJ3Byb3BlcnR5JyxcbiAgICAgIGFsbEVycm9yczogdHJ1ZSxcbiAgICAgIGpzb25Qb2ludGVyczogdHJ1ZSxcbiAgICB9KTtcbiAgICB0aGlzLmFqdi5hZGRGb3JtYXQoJ2RhdGEtdXJsJywgL15kYXRhOihbYS16XStcXC9bYS16MC05LSsuXSspPztuYW1lPSguKik7YmFzZTY0LCguKikkLyk7XG4gICAgdGhpcy5hanYuYWRkRm9ybWF0KCdjb2xvcicsIFJFR0VYLmNvbG9yKTtcbiAgICB0aGlzLmFqdi5hZGRGb3JtYXQoJ21vYmlsZScsIFJFR0VYLm1vYmlsZSk7XG4gICAgdGhpcy5hanYuYWRkRm9ybWF0KCdpZC1jYXJkJywgUkVHRVguaWRDYXJkKTtcbiAgfVxuXG4gIGNyZWF0ZVZhbGlkYXRvckZuKHNjaGVtYTogU0ZTY2hlbWEsIGV4dHJhT3B0aW9uczogeyBpbmdvcmVLZXl3b3Jkczogc3RyaW5nW107IGRlYnVnOiBib29sZWFuIH0pOiAodmFsdWU6IFNGVmFsdWUpID0+IEVycm9yRGF0YVtdIHtcbiAgICBjb25zdCBpbmdvcmVLZXl3b3Jkczogc3RyaW5nW10gPSBbLi4uKHRoaXMub3B0aW9ucy5pbmdvcmVLZXl3b3JkcyBhcyBzdHJpbmdbXSksIC4uLigoZXh0cmFPcHRpb25zLmluZ29yZUtleXdvcmRzIGFzIHN0cmluZ1tdKSB8fCBbXSldO1xuXG4gICAgcmV0dXJuICh2YWx1ZTogU0ZWYWx1ZSk6IEVycm9yRGF0YVtdID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuYWp2LnZhbGlkYXRlKHNjaGVtYSwgdmFsdWUpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBzd2FsbG93IGVycm9ycyB0aHJvd24gaW4gYWp2IGR1ZSB0byBpbnZhbGlkIHNjaGVtYXMsIHRoZXNlXG4gICAgICAgIC8vIHN0aWxsIGdldCBkaXNwbGF5ZWRcbiAgICAgICAgaWYgKGV4dHJhT3B0aW9ucy5kZWJ1Zykge1xuICAgICAgICAgIGNvbnNvbGUud2FybihlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGV0IGVycm9yczogYW55W10gPSB0aGlzLmFqdi5lcnJvcnM7XG4gICAgICBpZiAodGhpcy5vcHRpb25zICYmIGluZ29yZUtleXdvcmRzICYmIGVycm9ycykge1xuICAgICAgICBlcnJvcnMgPSBlcnJvcnMuZmlsdGVyKHcgPT4gaW5nb3JlS2V5d29yZHMuaW5kZXhPZih3LmtleXdvcmQpID09PSAtMSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZXJyb3JzO1xuICAgIH07XG4gIH1cbn1cbiJdfQ==