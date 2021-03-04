export interface ZoneOptions {
    ngZoneName?: string;
}
declare type DecoratorType = (target: any, fn: string, descriptor: PropertyDescriptor) => PropertyDescriptor;
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
export declare function ZoneOutside(options?: ZoneOptions): DecoratorType;
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
export declare function ZoneRun(options?: ZoneOptions): DecoratorType;
export {};
