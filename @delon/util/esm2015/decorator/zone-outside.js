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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9uZS1vdXRzaWRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdXRpbC9kZWNvcmF0b3Ivem9uZS1vdXRzaWRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQVF6QyxTQUFTLE1BQU0sQ0FBQyxJQUFpQyxFQUFFLE9BQXFCO0lBQ3RFLE9BQU8sQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxFQUFFO1FBQzNCLE1BQU0sTUFBTSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUM7UUFDaEMsVUFBVSxDQUFDLEtBQUssR0FBRyxVQUFVLEdBQUcsSUFBUztZQUN2QyxNQUFNLElBQUksR0FBRyxJQUFXLENBQUM7WUFDekIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUEsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLFVBQVUsS0FBSSxRQUFRLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNYLElBQUksQ0FBQywyRUFBMkUsQ0FBQyxDQUFDO2dCQUNsRixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7YUFDbkM7WUFDRCxJQUFJLEdBQVEsQ0FBQztZQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2hCLEdBQUcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO1lBQ25DLENBQUMsQ0FBQyxDQUFDO1lBQ0gsT0FBTyxHQUFHLENBQUM7UUFDYixDQUFDLENBQUM7UUFFRixPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDLENBQUM7QUFDSixDQUFDO0FBRUQ7Ozs7Ozs7Ozs7Ozs7R0FhRztBQUNILE1BQU0sVUFBVSxXQUFXLENBQUMsT0FBcUI7SUFDL0MsT0FBTyxNQUFNLENBQUMsbUJBQW1CLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDOUMsQ0FBQztBQUVEOzs7Ozs7Ozs7Ozs7O0dBYUc7QUFDSCxNQUFNLFVBQVUsT0FBTyxDQUFDLE9BQXFCO0lBQzNDLE9BQU8sTUFBTSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNoQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgd2FybiB9IGZyb20gJ0BkZWxvbi91dGlsL290aGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBab25lT3B0aW9ucyB7XG4gIG5nWm9uZU5hbWU/OiBzdHJpbmc7XG59XG5cbnR5cGUgRGVjb3JhdG9yVHlwZSA9ICh0YXJnZXQ6IGFueSwgZm46IHN0cmluZywgZGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yKSA9PiBQcm9wZXJ0eURlc2NyaXB0b3I7XG5cbmZ1bmN0aW9uIG1ha2VGbih0eXBlOiAncnVuT3V0c2lkZUFuZ3VsYXInIHwgJ3J1bicsIG9wdGlvbnM/OiBab25lT3B0aW9ucyk6IERlY29yYXRvclR5cGUge1xuICByZXR1cm4gKF8sIF9fLCBkZXNjcmlwdG9yKSA9PiB7XG4gICAgY29uc3Qgc291cmNlID0gZGVzY3JpcHRvci52YWx1ZTtcbiAgICBkZXNjcmlwdG9yLnZhbHVlID0gZnVuY3Rpb24gKC4uLmRhdGE6IGFueSk6ICgpID0+IHZvaWQge1xuICAgICAgY29uc3QgdGhhdCA9IHRoaXMgYXMgYW55O1xuICAgICAgY29uc3Qgbmdab25lID0gdGhhdFtvcHRpb25zPy5uZ1pvbmVOYW1lIHx8ICduZ1pvbmUnXTtcbiAgICAgIGlmICghbmdab25lKSB7XG4gICAgICAgIHdhcm4oYFpvbmVPdXRzaWRlOiBEZWNvcmF0b3Igc2hvdWxkIGhhdmUgJ25nWm9uZScgcHJvcGVydHkgd2l0aCAnTmdab25lJyBjbGFzcy5gKTtcbiAgICAgICAgcmV0dXJuIHNvdXJjZS5jYWxsKHRoaXMsIC4uLmRhdGEpO1xuICAgICAgfVxuICAgICAgbGV0IHJlczogYW55O1xuICAgICAgbmdab25lW3R5cGVdKCgpID0+IHtcbiAgICAgICAgcmVzID0gc291cmNlLmNhbGwodGhpcywgLi4uZGF0YSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiByZXM7XG4gICAgfTtcblxuICAgIHJldHVybiBkZXNjcmlwdG9yO1xuICB9O1xufVxuXG4vKipcbiAqIFRoZSBkZWNvcmF0aW9uIG1ldGhvZCBydW5zIGluIGBydW5PdXRzaWRlQW5ndWxhcmBcbiAqXG4gKiDoo4XppbDmlrnms5Xov5DooYzlnKggYHJ1bk91dHNpZGVBbmd1bGFyYCDlhoVcbiAqXG4gKiBgYGB0c1xuICogY2xhc3MgTW9ja0NsYXNzIHtcbiAqICBjb25zdHJ1Y3RvcihwdWJsaWMgbmdab25lOiBOZ1pvbmUpIHt9XG4gKlxuICogIHtBVH1ab25lT3V0c2lkZSgpXG4gKiAgcnVuT3V0c2lkZUFuZ3VsYXIoKTogdm9pZCB7fVxuICogfVxuICogYGBgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBab25lT3V0c2lkZShvcHRpb25zPzogWm9uZU9wdGlvbnMpOiBEZWNvcmF0b3JUeXBlIHtcbiAgcmV0dXJuIG1ha2VGbigncnVuT3V0c2lkZUFuZ3VsYXInLCBvcHRpb25zKTtcbn1cblxuLyoqXG4gKiBUaGUgZGVjb3JhdGlvbiBtZXRob2QgcnVucyBpbiBgcnVuYFxuICpcbiAqIOijhemlsOaWueazlei/kOihjOWcqCBgcnVuYCDlhoVcbiAqXG4gKiBgYGB0c1xuICogY2xhc3MgTW9ja0NsYXNzIHtcbiAqICBjb25zdHJ1Y3RvcihwdWJsaWMgbmdab25lOiBOZ1pvbmUpIHt9XG4gKlxuICogIHtBVH1ab25lUnVuKClcbiAqICBydW4oKTogdm9pZCB7fVxuICogfVxuICogYGBgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBab25lUnVuKG9wdGlvbnM/OiBab25lT3B0aW9ucyk6IERlY29yYXRvclR5cGUge1xuICByZXR1cm4gbWFrZUZuKCdydW4nLCBvcHRpb25zKTtcbn1cbiJdfQ==