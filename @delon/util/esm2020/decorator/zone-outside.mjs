import { warn } from '@delon/util/other';
function makeFn(type, options) {
    return (_, __, descriptor) => {
        const source = descriptor.value;
        descriptor.value = function (...data) {
            const that = this;
            const ngZone = that[options?.ngZoneName || 'ngZone'];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9uZS1vdXRzaWRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdXRpbC9kZWNvcmF0b3Ivem9uZS1vdXRzaWRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQVN6QyxTQUFTLE1BQU0sQ0FBQyxJQUFpQyxFQUFFLE9BQXFCO0lBQ3RFLE9BQU8sQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxFQUFFO1FBQzNCLE1BQU0sTUFBTSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUM7UUFDaEMsVUFBVSxDQUFDLEtBQUssR0FBRyxVQUFVLEdBQUcsSUFBaUI7WUFDL0MsTUFBTSxJQUFJLEdBQUcsSUFBaUIsQ0FBQztZQUMvQixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQVUsSUFBSSxRQUFRLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNYLElBQUksQ0FBQywyRUFBMkUsQ0FBQyxDQUFDO2dCQUNsRixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7YUFDbkM7WUFDRCxJQUFJLEdBQWMsQ0FBQztZQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFO2dCQUNoQixHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztZQUNuQyxDQUFDLENBQUMsQ0FBQztZQUNILE9BQU8sR0FBRyxDQUFDO1FBQ2IsQ0FBQyxDQUFDO1FBRUYsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVEOzs7Ozs7Ozs7Ozs7O0dBYUc7QUFDSCxNQUFNLFVBQVUsV0FBVyxDQUFDLE9BQXFCO0lBQy9DLE9BQU8sTUFBTSxDQUFDLG1CQUFtQixFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQzlDLENBQUM7QUFFRDs7Ozs7Ozs7Ozs7OztHQWFHO0FBQ0gsTUFBTSxVQUFVLE9BQU8sQ0FBQyxPQUFxQjtJQUMzQyxPQUFPLE1BQU0sQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDaEMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdhcm4gfSBmcm9tICdAZGVsb24vdXRpbC9vdGhlcic7XG5pbXBvcnQgdHlwZSB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgWm9uZU9wdGlvbnMge1xuICBuZ1pvbmVOYW1lPzogc3RyaW5nO1xufVxuXG50eXBlIERlY29yYXRvclR5cGUgPSAodGFyZ2V0OiB1bmtub3duLCBmbjogc3RyaW5nLCBkZXNjcmlwdG9yOiBQcm9wZXJ0eURlc2NyaXB0b3IpID0+IFByb3BlcnR5RGVzY3JpcHRvcjtcblxuZnVuY3Rpb24gbWFrZUZuKHR5cGU6ICdydW5PdXRzaWRlQW5ndWxhcicgfCAncnVuJywgb3B0aW9ucz86IFpvbmVPcHRpb25zKTogRGVjb3JhdG9yVHlwZSB7XG4gIHJldHVybiAoXywgX18sIGRlc2NyaXB0b3IpID0+IHtcbiAgICBjb25zdCBzb3VyY2UgPSBkZXNjcmlwdG9yLnZhbHVlO1xuICAgIGRlc2NyaXB0b3IudmFsdWUgPSBmdW5jdGlvbiAoLi4uZGF0YTogTnpTYWZlQW55W10pOiAoKSA9PiB2b2lkIHtcbiAgICAgIGNvbnN0IHRoYXQgPSB0aGlzIGFzIE56U2FmZUFueTtcbiAgICAgIGNvbnN0IG5nWm9uZSA9IHRoYXRbb3B0aW9ucz8ubmdab25lTmFtZSB8fCAnbmdab25lJ107XG4gICAgICBpZiAoIW5nWm9uZSkge1xuICAgICAgICB3YXJuKGBab25lT3V0c2lkZTogRGVjb3JhdG9yIHNob3VsZCBoYXZlICduZ1pvbmUnIHByb3BlcnR5IHdpdGggJ05nWm9uZScgY2xhc3MuYCk7XG4gICAgICAgIHJldHVybiBzb3VyY2UuY2FsbCh0aGlzLCAuLi5kYXRhKTtcbiAgICAgIH1cbiAgICAgIGxldCByZXM6IE56U2FmZUFueTtcbiAgICAgIG5nWm9uZVt0eXBlXSgoKSA9PiB7XG4gICAgICAgIHJlcyA9IHNvdXJjZS5jYWxsKHRoaXMsIC4uLmRhdGEpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH07XG5cbiAgICByZXR1cm4gZGVzY3JpcHRvcjtcbiAgfTtcbn1cblxuLyoqXG4gKiBUaGUgZGVjb3JhdGlvbiBtZXRob2QgcnVucyBpbiBgcnVuT3V0c2lkZUFuZ3VsYXJgXG4gKlxuICog6KOF6aWw5pa55rOV6L+Q6KGM5ZyoIGBydW5PdXRzaWRlQW5ndWxhcmAg5YaFXG4gKlxuICogYGBgdHNcbiAqIGNsYXNzIE1vY2tDbGFzcyB7XG4gKiAgY29uc3RydWN0b3IocHVibGljIG5nWm9uZTogTmdab25lKSB7fVxuICpcbiAqICB7QVR9Wm9uZU91dHNpZGUoKVxuICogIHJ1bk91dHNpZGVBbmd1bGFyKCk6IHZvaWQge31cbiAqIH1cbiAqIGBgYFxuICovXG5leHBvcnQgZnVuY3Rpb24gWm9uZU91dHNpZGUob3B0aW9ucz86IFpvbmVPcHRpb25zKTogRGVjb3JhdG9yVHlwZSB7XG4gIHJldHVybiBtYWtlRm4oJ3J1bk91dHNpZGVBbmd1bGFyJywgb3B0aW9ucyk7XG59XG5cbi8qKlxuICogVGhlIGRlY29yYXRpb24gbWV0aG9kIHJ1bnMgaW4gYHJ1bmBcbiAqXG4gKiDoo4XppbDmlrnms5Xov5DooYzlnKggYHJ1bmAg5YaFXG4gKlxuICogYGBgdHNcbiAqIGNsYXNzIE1vY2tDbGFzcyB7XG4gKiAgY29uc3RydWN0b3IocHVibGljIG5nWm9uZTogTmdab25lKSB7fVxuICpcbiAqICB7QVR9Wm9uZVJ1bigpXG4gKiAgcnVuKCk6IHZvaWQge31cbiAqIH1cbiAqIGBgYFxuICovXG5leHBvcnQgZnVuY3Rpb24gWm9uZVJ1bihvcHRpb25zPzogWm9uZU9wdGlvbnMpOiBEZWNvcmF0b3JUeXBlIHtcbiAgcmV0dXJuIG1ha2VGbigncnVuJywgb3B0aW9ucyk7XG59XG4iXX0=