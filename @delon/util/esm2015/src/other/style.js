/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * @param {?} el
 * @param {?} classMap
 * @param {?} renderer
 * @return {?}
 */
function removeClass(el, classMap, renderer) {
    // tslint:disable-next-line:forin
    for (const i in classMap) {
        renderer.removeClass(el, i);
    }
}
/**
 * @param {?} el
 * @param {?} classMap
 * @param {?} renderer
 * @return {?}
 */
function addClass(el, classMap, renderer) {
    for (const i in classMap) {
        if (classMap[i]) {
            renderer.addClass(el, i);
        }
    }
}
/**
 * 更新宿主组件样式 `class`，例如：
 *
 * ```ts
 * updateHostClass(
 *  this.el.nativeElement,
 *  this.renderer,
 *  {
 *    [ 'classname' ]: true,
 *    [ 'classname' ]: this.type === '1',
 *    [ this.cls ]: true,
 *    [ `a-${this.cls}` ]: true
 *  })
 * ```
 *
 * @param {?} el
 * @param {?} renderer
 * @param {?} classMap
 * @param {?=} cleanAll
 * @return {?}
 */
export function updateHostClass(el, renderer, classMap, cleanAll = false) {
    if (cleanAll === true) {
        renderer.removeAttribute(el, 'class');
    }
    else {
        removeClass(el, classMap, renderer);
    }
    classMap = Object.assign({}, classMap);
    addClass(el, classMap, renderer);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vdXRpbC8iLCJzb3VyY2VzIjpbInNyYy9vdGhlci9zdHlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRUEsU0FBUyxXQUFXLENBQUMsRUFBZSxFQUFFLFFBQWdCLEVBQUUsUUFBbUI7SUFDekUsaUNBQWlDO0lBQ2pDLEtBQUssTUFBTSxDQUFDLElBQUksUUFBUSxFQUFFO1FBQ3hCLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQzdCO0FBQ0gsQ0FBQzs7Ozs7OztBQUVELFNBQVMsUUFBUSxDQUFDLEVBQWUsRUFBRSxRQUFnQixFQUFFLFFBQW1CO0lBQ3RFLEtBQUssTUFBTSxDQUFDLElBQUksUUFBUSxFQUFFO1FBQ3hCLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2YsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDMUI7S0FDRjtBQUNILENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQkQsTUFBTSxVQUFVLGVBQWUsQ0FDN0IsRUFBZSxFQUNmLFFBQW1CLEVBQ25CLFFBQWdCLEVBQ2hCLFdBQW9CLEtBQUs7SUFFekIsSUFBSSxRQUFRLEtBQUssSUFBSSxFQUFFO1FBQ3JCLFFBQVEsQ0FBQyxlQUFlLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQ3ZDO1NBQU07UUFDTCxXQUFXLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztLQUNyQztJQUNELFFBQVEscUJBQVEsUUFBUSxDQUFFLENBQUM7SUFDM0IsUUFBUSxDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDbkMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5mdW5jdGlvbiByZW1vdmVDbGFzcyhlbDogSFRNTEVsZW1lbnQsIGNsYXNzTWFwOiBvYmplY3QsIHJlbmRlcmVyOiBSZW5kZXJlcjIpOiB2b2lkIHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmZvcmluXG4gIGZvciAoY29uc3QgaSBpbiBjbGFzc01hcCkge1xuICAgIHJlbmRlcmVyLnJlbW92ZUNsYXNzKGVsLCBpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRDbGFzcyhlbDogSFRNTEVsZW1lbnQsIGNsYXNzTWFwOiBvYmplY3QsIHJlbmRlcmVyOiBSZW5kZXJlcjIpOiB2b2lkIHtcbiAgZm9yIChjb25zdCBpIGluIGNsYXNzTWFwKSB7XG4gICAgaWYgKGNsYXNzTWFwW2ldKSB7XG4gICAgICByZW5kZXJlci5hZGRDbGFzcyhlbCwgaSk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICog5pu05paw5a6/5Li757uE5Lu25qC35byPIGBjbGFzc2DvvIzkvovlpoLvvJpcbiAqXG4gKiBgYGB0c1xuICogdXBkYXRlSG9zdENsYXNzKFxuICogIHRoaXMuZWwubmF0aXZlRWxlbWVudCxcbiAqICB0aGlzLnJlbmRlcmVyLFxuICogIHtcbiAqICAgIFsgJ2NsYXNzbmFtZScgXTogdHJ1ZSxcbiAqICAgIFsgJ2NsYXNzbmFtZScgXTogdGhpcy50eXBlID09PSAnMScsXG4gKiAgICBbIHRoaXMuY2xzIF06IHRydWUsXG4gKiAgICBbIGBhLSR7dGhpcy5jbHN9YCBdOiB0cnVlXG4gKiAgfSlcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBbY2xlYW5BbGxdIOaYr+WQpuWFiOa4heeQhuaJgOaciSBgY2xhc3NgIOWAvO+8jOm7mOiupO+8mmBmYWxzZWBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUhvc3RDbGFzcyhcbiAgZWw6IEhUTUxFbGVtZW50LFxuICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICBjbGFzc01hcDogb2JqZWN0LFxuICBjbGVhbkFsbDogYm9vbGVhbiA9IGZhbHNlLFxuKTogdm9pZCB7XG4gIGlmIChjbGVhbkFsbCA9PT0gdHJ1ZSkge1xuICAgIHJlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZShlbCwgJ2NsYXNzJyk7XG4gIH0gZWxzZSB7XG4gICAgcmVtb3ZlQ2xhc3MoZWwsIGNsYXNzTWFwLCByZW5kZXJlcik7XG4gIH1cbiAgY2xhc3NNYXAgPSB7IC4uLmNsYXNzTWFwIH07XG4gIGFkZENsYXNzKGVsLCBjbGFzc01hcCwgcmVuZGVyZXIpO1xufVxuIl19