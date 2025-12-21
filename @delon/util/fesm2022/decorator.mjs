import { warn } from '@delon/util/other';

function makeFn(type, options) {
    return (_, __, descriptor) => {
        const source = descriptor.value;
        descriptor.value = function (...data) {
            const that = this;
            const ngZone = that[options?.ngZoneName ?? 'ngZone'];
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
 *  readonly ngZone = inject(NgZone);
 *
 *  {AT}ZoneOutside()
 *  runOutsideAngular(): void {}
 * }
 * ```
 */
function ZoneOutside(options) {
    return makeFn('runOutsideAngular', options);
}
/**
 * The decoration method runs in `run`
 *
 * 装饰方法运行在 `run` 内
 *
 * ```ts
 * class MockClass {
 *  readonly ngZone = inject(NgZone);
 *
 *  {AT}ZoneRun()
 *  run(): void {}
 * }
 * ```
 */
function ZoneRun(options) {
    return makeFn('run', options);
}

/**
 * Generated bundle index. Do not edit.
 */

export { ZoneOutside, ZoneRun };
//# sourceMappingURL=decorator.mjs.map
