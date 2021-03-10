import { warn } from '@delon/util/other';
function makeFn(type, options) {
    return (_, __, descriptor) => {
        const source = descriptor.value;
        descriptor.value = function (...data) {
            const that = this;
            const ngZone = that[(options === null || options === void 0 ? void 0 : options.ngZoneName) || 'ngZone'];
            if (!ngZone) {
                warn(`ZoneOutside: Decorator should have 'ngZone' property with 'NgZone' class.`);
                return source.call(this, ...data);
            }
            let res;
            ngZone[type](() => {
                console.log('in runOutsideAngular call');
                res = source.call(this, ...data);
            });
            return res;
        };
        return descriptor;
    };
}
/**
 * The decoration method runs in `runOutsideAngular`
 *
 * 装饰方法运行在 `runOutsideAngular` 内
 *
 * ```ts
 * class MockClass {
 *  constructor(public ngZone: NgZone) {}
 *
 *  {AT}ZoneOutside()
 *  runOutsideAngular(): void {}
 * }
 * ```
 */
export function ZoneOutside(options) {
    return makeFn('runOutsideAngular', options);
}
/**
 * The decoration method runs in `run`
 *
 * 装饰方法运行在 `run` 内
 *
 * ```ts
 * class MockClass {
 *  constructor(public ngZone: NgZone) {}
 *
 *  {AT}ZoneRun()
 *  run(): void {}
 * }
 * ```
 */
export function ZoneRun(options) {
    return makeFn('run', options);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9uZS1vdXRzaWRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdXRpbC9kZWNvcmF0b3Ivem9uZS1vdXRzaWRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQVF6QyxTQUFTLE1BQU0sQ0FBQyxJQUFpQyxFQUFFLE9BQXFCO0lBQ3RFLE9BQU8sQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxFQUFFO1FBQzNCLE1BQU0sTUFBTSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUM7UUFDaEMsVUFBVSxDQUFDLEtBQUssR0FBRyxVQUFVLEdBQUcsSUFBUztZQUN2QyxNQUFNLElBQUksR0FBRyxJQUFXLENBQUM7WUFDekIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUEsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLFVBQVUsS0FBSSxRQUFRLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNYLElBQUksQ0FBQywyRUFBMkUsQ0FBQyxDQUFDO2dCQUNsRixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7YUFDbkM7WUFDRCxJQUFJLEdBQVEsQ0FBQztZQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQztnQkFDekMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFDbkMsQ0FBQyxDQUFDLENBQUM7WUFDSCxPQUFPLEdBQUcsQ0FBQztRQUNiLENBQUMsQ0FBQztRQUVGLE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUMsQ0FBQztBQUNKLENBQUM7QUFFRDs7Ozs7Ozs7Ozs7OztHQWFHO0FBQ0gsTUFBTSxVQUFVLFdBQVcsQ0FBQyxPQUFxQjtJQUMvQyxPQUFPLE1BQU0sQ0FBQyxtQkFBbUIsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUM5QyxDQUFDO0FBRUQ7Ozs7Ozs7Ozs7Ozs7R0FhRztBQUNILE1BQU0sVUFBVSxPQUFPLENBQUMsT0FBcUI7SUFDM0MsT0FBTyxNQUFNLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ2hDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3YXJuIH0gZnJvbSAnQGRlbG9uL3V0aWwvb3RoZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIFpvbmVPcHRpb25zIHtcbiAgbmdab25lTmFtZT86IHN0cmluZztcbn1cblxudHlwZSBEZWNvcmF0b3JUeXBlID0gKHRhcmdldDogYW55LCBmbjogc3RyaW5nLCBkZXNjcmlwdG9yOiBQcm9wZXJ0eURlc2NyaXB0b3IpID0+IFByb3BlcnR5RGVzY3JpcHRvcjtcblxuZnVuY3Rpb24gbWFrZUZuKHR5cGU6ICdydW5PdXRzaWRlQW5ndWxhcicgfCAncnVuJywgb3B0aW9ucz86IFpvbmVPcHRpb25zKTogRGVjb3JhdG9yVHlwZSB7XG4gIHJldHVybiAoXywgX18sIGRlc2NyaXB0b3IpID0+IHtcbiAgICBjb25zdCBzb3VyY2UgPSBkZXNjcmlwdG9yLnZhbHVlO1xuICAgIGRlc2NyaXB0b3IudmFsdWUgPSBmdW5jdGlvbiAoLi4uZGF0YTogYW55KTogKCkgPT4gdm9pZCB7XG4gICAgICBjb25zdCB0aGF0ID0gdGhpcyBhcyBhbnk7XG4gICAgICBjb25zdCBuZ1pvbmUgPSB0aGF0W29wdGlvbnM/Lm5nWm9uZU5hbWUgfHwgJ25nWm9uZSddO1xuICAgICAgaWYgKCFuZ1pvbmUpIHtcbiAgICAgICAgd2FybihgWm9uZU91dHNpZGU6IERlY29yYXRvciBzaG91bGQgaGF2ZSAnbmdab25lJyBwcm9wZXJ0eSB3aXRoICdOZ1pvbmUnIGNsYXNzLmApO1xuICAgICAgICByZXR1cm4gc291cmNlLmNhbGwodGhpcywgLi4uZGF0YSk7XG4gICAgICB9XG4gICAgICBsZXQgcmVzOiBhbnk7XG4gICAgICBuZ1pvbmVbdHlwZV0oKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnaW4gcnVuT3V0c2lkZUFuZ3VsYXIgY2FsbCcpO1xuICAgICAgICByZXMgPSBzb3VyY2UuY2FsbCh0aGlzLCAuLi5kYXRhKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJlcztcbiAgICB9O1xuXG4gICAgcmV0dXJuIGRlc2NyaXB0b3I7XG4gIH07XG59XG5cbi8qKlxuICogVGhlIGRlY29yYXRpb24gbWV0aG9kIHJ1bnMgaW4gYHJ1bk91dHNpZGVBbmd1bGFyYFxuICpcbiAqIOijhemlsOaWueazlei/kOihjOWcqCBgcnVuT3V0c2lkZUFuZ3VsYXJgIOWGhVxuICpcbiAqIGBgYHRzXG4gKiBjbGFzcyBNb2NrQ2xhc3Mge1xuICogIGNvbnN0cnVjdG9yKHB1YmxpYyBuZ1pvbmU6IE5nWm9uZSkge31cbiAqXG4gKiAge0FUfVpvbmVPdXRzaWRlKClcbiAqICBydW5PdXRzaWRlQW5ndWxhcigpOiB2b2lkIHt9XG4gKiB9XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFpvbmVPdXRzaWRlKG9wdGlvbnM/OiBab25lT3B0aW9ucyk6IERlY29yYXRvclR5cGUge1xuICByZXR1cm4gbWFrZUZuKCdydW5PdXRzaWRlQW5ndWxhcicsIG9wdGlvbnMpO1xufVxuXG4vKipcbiAqIFRoZSBkZWNvcmF0aW9uIG1ldGhvZCBydW5zIGluIGBydW5gXG4gKlxuICog6KOF6aWw5pa55rOV6L+Q6KGM5ZyoIGBydW5gIOWGhVxuICpcbiAqIGBgYHRzXG4gKiBjbGFzcyBNb2NrQ2xhc3Mge1xuICogIGNvbnN0cnVjdG9yKHB1YmxpYyBuZ1pvbmU6IE5nWm9uZSkge31cbiAqXG4gKiAge0FUfVpvbmVSdW4oKVxuICogIHJ1bigpOiB2b2lkIHt9XG4gKiB9XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFpvbmVSdW4ob3B0aW9ucz86IFpvbmVPcHRpb25zKTogRGVjb3JhdG9yVHlwZSB7XG4gIHJldHVybiBtYWtlRm4oJ3J1bicsIG9wdGlvbnMpO1xufVxuIl19