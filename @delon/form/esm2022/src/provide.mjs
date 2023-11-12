import { ENVIRONMENT_INITIALIZER, NgZone, inject, makeEnvironmentProviders } from '@angular/core';
import { AlainConfigService } from '@delon/util/config';
import { AjvSchemaValidatorFactory, SchemaValidatorFactory } from './validator.factory';
import { WidgetRegistry } from './widget.factory';
import { NzWidgetRegistry } from './widgets/nz-widget.registry';
/**
 * Just only using Standalone widgets
 */
export function provideSFConfig(options) {
    const provides = [
        {
            provide: SchemaValidatorFactory,
            useClass: AjvSchemaValidatorFactory,
            deps: [AlainConfigService, NgZone]
        },
        { provide: WidgetRegistry, useClass: NzWidgetRegistry }
    ];
    if (options?.widgets) {
        provides.push({
            provide: ENVIRONMENT_INITIALIZER,
            multi: true,
            useValue: () => {
                const srv = inject(WidgetRegistry);
                options?.widgets?.forEach(widget => srv.register(widget.KEY, widget.type));
            }
        });
    }
    return makeEnvironmentProviders(provides);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmlkZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm0vc3JjL3Byb3ZpZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUV2QixNQUFNLEVBRU4sTUFBTSxFQUNOLHdCQUF3QixFQUN6QixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUd4RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN4RixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFPaEU7O0dBRUc7QUFDSCxNQUFNLFVBQVUsZUFBZSxDQUFDLE9BQStDO0lBQzdFLE1BQU0sUUFBUSxHQUEyQztRQUN2RDtZQUNFLE9BQU8sRUFBRSxzQkFBc0I7WUFDL0IsUUFBUSxFQUFFLHlCQUF5QjtZQUNuQyxJQUFJLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxNQUFNLENBQUM7U0FDbkM7UUFDRCxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFO0tBQ3hELENBQUM7SUFDRixJQUFJLE9BQU8sRUFBRSxPQUFPLEVBQUU7UUFDcEIsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNaLE9BQU8sRUFBRSx1QkFBdUI7WUFDaEMsS0FBSyxFQUFFLElBQUk7WUFDWCxRQUFRLEVBQUUsR0FBRyxFQUFFO2dCQUNiLE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztnQkFDbkMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDN0UsQ0FBQztTQUNGLENBQUMsQ0FBQztLQUNKO0lBQ0QsT0FBTyx3QkFBd0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUM1QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRU5WSVJPTk1FTlRfSU5JVElBTElaRVIsXG4gIEVudmlyb25tZW50UHJvdmlkZXJzLFxuICBOZ1pvbmUsXG4gIFByb3ZpZGVyLFxuICBpbmplY3QsXG4gIG1ha2VFbnZpcm9ubWVudFByb3ZpZGVyc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3V0aWwvY29uZmlnJztcbmltcG9ydCB0eXBlIHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuaW1wb3J0IHsgQWp2U2NoZW1hVmFsaWRhdG9yRmFjdG9yeSwgU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSB9IGZyb20gJy4vdmFsaWRhdG9yLmZhY3RvcnknO1xuaW1wb3J0IHsgV2lkZ2V0UmVnaXN0cnkgfSBmcm9tICcuL3dpZGdldC5mYWN0b3J5JztcbmltcG9ydCB7IE56V2lkZ2V0UmVnaXN0cnkgfSBmcm9tICcuL3dpZGdldHMvbnotd2lkZ2V0LnJlZ2lzdHJ5JztcblxuZXhwb3J0IGludGVyZmFjZSBTRldpZGdldFByb3ZpZGVDb25maWcge1xuICBLRVk6IHN0cmluZztcbiAgdHlwZTogTnpTYWZlQW55O1xufVxuXG4vKipcbiAqIEp1c3Qgb25seSB1c2luZyBTdGFuZGFsb25lIHdpZGdldHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVTRkNvbmZpZyhvcHRpb25zPzogeyB3aWRnZXRzPzogU0ZXaWRnZXRQcm92aWRlQ29uZmlnW10gfSk6IEVudmlyb25tZW50UHJvdmlkZXJzIHtcbiAgY29uc3QgcHJvdmlkZXM6IEFycmF5PFByb3ZpZGVyIHwgRW52aXJvbm1lbnRQcm92aWRlcnM+ID0gW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IFNjaGVtYVZhbGlkYXRvckZhY3RvcnksXG4gICAgICB1c2VDbGFzczogQWp2U2NoZW1hVmFsaWRhdG9yRmFjdG9yeSxcbiAgICAgIGRlcHM6IFtBbGFpbkNvbmZpZ1NlcnZpY2UsIE5nWm9uZV1cbiAgICB9LFxuICAgIHsgcHJvdmlkZTogV2lkZ2V0UmVnaXN0cnksIHVzZUNsYXNzOiBOeldpZGdldFJlZ2lzdHJ5IH1cbiAgXTtcbiAgaWYgKG9wdGlvbnM/LndpZGdldHMpIHtcbiAgICBwcm92aWRlcy5wdXNoKHtcbiAgICAgIHByb3ZpZGU6IEVOVklST05NRU5UX0lOSVRJQUxJWkVSLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgICB1c2VWYWx1ZTogKCkgPT4ge1xuICAgICAgICBjb25zdCBzcnYgPSBpbmplY3QoV2lkZ2V0UmVnaXN0cnkpO1xuICAgICAgICBvcHRpb25zPy53aWRnZXRzPy5mb3JFYWNoKHdpZGdldCA9PiBzcnYucmVnaXN0ZXIod2lkZ2V0LktFWSwgd2lkZ2V0LnR5cGUpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICByZXR1cm4gbWFrZUVudmlyb25tZW50UHJvdmlkZXJzKHByb3ZpZGVzKTtcbn1cbiJdfQ==