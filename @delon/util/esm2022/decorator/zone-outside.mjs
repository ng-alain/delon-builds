import { warn } from '@delon/util/other';
function makeFn(type, options) {
    return (_, __, descriptor) => {
        const source = descriptor.value;
        descriptor.value = function (...data) {
            const that = this;
            const ngZone = that[options?.ngZoneName || 'ngZone'];
            if (!ngZone) {
                if (typeof ngDevMode === 'undefined' || ngDevMode) {
                    warn(`ZoneOutside: Decorator should have 'ngZone' property with 'NgZone' class.`);
                }
                return source.call(this, ...data);
            }
            let res;
            ngZone[type](() => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9uZS1vdXRzaWRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdXRpbC9kZWNvcmF0b3Ivem9uZS1vdXRzaWRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQVN6QyxTQUFTLE1BQU0sQ0FBQyxJQUFpQyxFQUFFLE9BQXFCO0lBQ3RFLE9BQU8sQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxFQUFFO1FBQzNCLE1BQU0sTUFBTSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUM7UUFDaEMsVUFBVSxDQUFDLEtBQUssR0FBRyxVQUFVLEdBQUcsSUFBaUI7WUFDL0MsTUFBTSxJQUFJLEdBQUcsSUFBaUIsQ0FBQztZQUMvQixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQVUsSUFBSSxRQUFRLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ1osSUFBSSxPQUFPLFNBQVMsS0FBSyxXQUFXLElBQUksU0FBUyxFQUFFLENBQUM7b0JBQ2xELElBQUksQ0FBQywyRUFBMkUsQ0FBQyxDQUFDO2dCQUNwRixDQUFDO2dCQUNELE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztZQUNwQyxDQUFDO1lBQ0QsSUFBSSxHQUFjLENBQUM7WUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRTtnQkFDaEIsR0FBRyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFDbkMsQ0FBQyxDQUFDLENBQUM7WUFDSCxPQUFPLEdBQUcsQ0FBQztRQUNiLENBQUMsQ0FBQztRQUVGLE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUMsQ0FBQztBQUNKLENBQUM7QUFFRDs7Ozs7Ozs7Ozs7OztHQWFHO0FBQ0gsTUFBTSxVQUFVLFdBQVcsQ0FBQyxPQUFxQjtJQUMvQyxPQUFPLE1BQU0sQ0FBQyxtQkFBbUIsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUM5QyxDQUFDO0FBRUQ7Ozs7Ozs7Ozs7Ozs7R0FhRztBQUNILE1BQU0sVUFBVSxPQUFPLENBQUMsT0FBcUI7SUFDM0MsT0FBTyxNQUFNLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ2hDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3YXJuIH0gZnJvbSAnQGRlbG9uL3V0aWwvb3RoZXInO1xuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFpvbmVPcHRpb25zIHtcbiAgbmdab25lTmFtZT86IHN0cmluZztcbn1cblxudHlwZSBEZWNvcmF0b3JUeXBlID0gKHRhcmdldDogdW5rbm93biwgZm46IHN0cmluZywgZGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yKSA9PiBQcm9wZXJ0eURlc2NyaXB0b3I7XG5cbmZ1bmN0aW9uIG1ha2VGbih0eXBlOiAncnVuT3V0c2lkZUFuZ3VsYXInIHwgJ3J1bicsIG9wdGlvbnM/OiBab25lT3B0aW9ucyk6IERlY29yYXRvclR5cGUge1xuICByZXR1cm4gKF8sIF9fLCBkZXNjcmlwdG9yKSA9PiB7XG4gICAgY29uc3Qgc291cmNlID0gZGVzY3JpcHRvci52YWx1ZTtcbiAgICBkZXNjcmlwdG9yLnZhbHVlID0gZnVuY3Rpb24gKC4uLmRhdGE6IE56U2FmZUFueVtdKTogKCkgPT4gdm9pZCB7XG4gICAgICBjb25zdCB0aGF0ID0gdGhpcyBhcyBOelNhZmVBbnk7XG4gICAgICBjb25zdCBuZ1pvbmUgPSB0aGF0W29wdGlvbnM/Lm5nWm9uZU5hbWUgfHwgJ25nWm9uZSddO1xuICAgICAgaWYgKCFuZ1pvbmUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBuZ0Rldk1vZGUgPT09ICd1bmRlZmluZWQnIHx8IG5nRGV2TW9kZSkge1xuICAgICAgICAgIHdhcm4oYFpvbmVPdXRzaWRlOiBEZWNvcmF0b3Igc2hvdWxkIGhhdmUgJ25nWm9uZScgcHJvcGVydHkgd2l0aCAnTmdab25lJyBjbGFzcy5gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc291cmNlLmNhbGwodGhpcywgLi4uZGF0YSk7XG4gICAgICB9XG4gICAgICBsZXQgcmVzOiBOelNhZmVBbnk7XG4gICAgICBuZ1pvbmVbdHlwZV0oKCkgPT4ge1xuICAgICAgICByZXMgPSBzb3VyY2UuY2FsbCh0aGlzLCAuLi5kYXRhKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJlcztcbiAgICB9O1xuXG4gICAgcmV0dXJuIGRlc2NyaXB0b3I7XG4gIH07XG59XG5cbi8qKlxuICogVGhlIGRlY29yYXRpb24gbWV0aG9kIHJ1bnMgaW4gYHJ1bk91dHNpZGVBbmd1bGFyYFxuICpcbiAqIOijhemlsOaWueazlei/kOihjOWcqCBgcnVuT3V0c2lkZUFuZ3VsYXJgIOWGhVxuICpcbiAqIGBgYHRzXG4gKiBjbGFzcyBNb2NrQ2xhc3Mge1xuICogIGNvbnN0cnVjdG9yKHB1YmxpYyBuZ1pvbmU6IE5nWm9uZSkge31cbiAqXG4gKiAge0FUfVpvbmVPdXRzaWRlKClcbiAqICBydW5PdXRzaWRlQW5ndWxhcigpOiB2b2lkIHt9XG4gKiB9XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFpvbmVPdXRzaWRlKG9wdGlvbnM/OiBab25lT3B0aW9ucyk6IERlY29yYXRvclR5cGUge1xuICByZXR1cm4gbWFrZUZuKCdydW5PdXRzaWRlQW5ndWxhcicsIG9wdGlvbnMpO1xufVxuXG4vKipcbiAqIFRoZSBkZWNvcmF0aW9uIG1ldGhvZCBydW5zIGluIGBydW5gXG4gKlxuICog6KOF6aWw5pa55rOV6L+Q6KGM5ZyoIGBydW5gIOWGhVxuICpcbiAqIGBgYHRzXG4gKiBjbGFzcyBNb2NrQ2xhc3Mge1xuICogIGNvbnN0cnVjdG9yKHB1YmxpYyBuZ1pvbmU6IE5nWm9uZSkge31cbiAqXG4gKiAge0FUfVpvbmVSdW4oKVxuICogIHJ1bigpOiB2b2lkIHt9XG4gKiB9XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFpvbmVSdW4ob3B0aW9ucz86IFpvbmVPcHRpb25zKTogRGVjb3JhdG9yVHlwZSB7XG4gIHJldHVybiBtYWtlRm4oJ3J1bicsIG9wdGlvbnMpO1xufVxuIl19