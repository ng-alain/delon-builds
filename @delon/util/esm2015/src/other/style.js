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
 *  {
 *    [ 'classname' ]: true,
 *    [ 'classname' ]: this.type === '1',
 *    [ this.cls ]: true,
 *    [ `a-${this.cls}` ]: true
 *  },
 *  this.renderer)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vdXRpbC8iLCJzb3VyY2VzIjpbInNyYy9vdGhlci9zdHlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRUEsU0FBUyxXQUFXLENBQ2xCLEVBQWUsRUFDZixRQUFnQixFQUNoQixRQUFtQjtJQUVuQixpQ0FBaUM7SUFDakMsS0FBSyxNQUFNLENBQUMsSUFBSSxRQUFRLEVBQUU7UUFDeEIsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDN0I7QUFDSCxDQUFDOzs7Ozs7O0FBRUQsU0FBUyxRQUFRLENBQ2YsRUFBZSxFQUNmLFFBQWdCLEVBQ2hCLFFBQW1CO0lBRW5CLEtBQUssTUFBTSxDQUFDLElBQUksUUFBUSxFQUFFO1FBQ3hCLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2YsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDMUI7S0FDRjtBQUNILENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQkQsTUFBTSxVQUFVLGVBQWUsQ0FDN0IsRUFBZSxFQUNmLFFBQW1CLEVBQ25CLFFBQWdCLEVBQ2hCLFFBQVEsR0FBRyxLQUFLO0lBRWhCLElBQUksUUFBUSxLQUFLLElBQUksRUFBRTtRQUNyQixRQUFRLENBQUMsZUFBZSxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztLQUN2QztTQUFNO1FBQ0wsV0FBVyxDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7S0FDckM7SUFDRCxRQUFRLHFCQUFRLFFBQVEsQ0FBRSxDQUFDO0lBQzNCLFFBQVEsQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQ25DLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoXG4gIGVsOiBIVE1MRWxlbWVudCxcbiAgY2xhc3NNYXA6IG9iamVjdCxcbiAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbik6IHZvaWQge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Zm9yaW5cbiAgZm9yIChjb25zdCBpIGluIGNsYXNzTWFwKSB7XG4gICAgcmVuZGVyZXIucmVtb3ZlQ2xhc3MoZWwsIGkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZENsYXNzKFxuICBlbDogSFRNTEVsZW1lbnQsXG4gIGNsYXNzTWFwOiBvYmplY3QsXG4gIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4pOiB2b2lkIHtcbiAgZm9yIChjb25zdCBpIGluIGNsYXNzTWFwKSB7XG4gICAgaWYgKGNsYXNzTWFwW2ldKSB7XG4gICAgICByZW5kZXJlci5hZGRDbGFzcyhlbCwgaSk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICog5pu05paw5a6/5Li757uE5Lu25qC35byPIGBjbGFzc2DvvIzkvovlpoLvvJpcbiAqXG4gKiBgYGB0c1xuICogdXBkYXRlSG9zdENsYXNzKFxuICogIHRoaXMuZWwubmF0aXZlRWxlbWVudCxcbiAqICB7XG4gKiAgICBbICdjbGFzc25hbWUnIF06IHRydWUsXG4gKiAgICBbICdjbGFzc25hbWUnIF06IHRoaXMudHlwZSA9PT0gJzEnLFxuICogICAgWyB0aGlzLmNscyBdOiB0cnVlLFxuICogICAgWyBgYS0ke3RoaXMuY2xzfWAgXTogdHJ1ZVxuICogIH0sXG4gKiAgdGhpcy5yZW5kZXJlcilcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBbY2xlYW5BbGxdIOaYr+WQpuWFiOa4heeQhuaJgOaciSBgY2xhc3NgIOWAvO+8jOm7mOiupO+8mmBmYWxzZWBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUhvc3RDbGFzcyhcbiAgZWw6IEhUTUxFbGVtZW50LFxuICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICBjbGFzc01hcDogb2JqZWN0LFxuICBjbGVhbkFsbCA9IGZhbHNlXG4pOiB2b2lkIHtcbiAgaWYgKGNsZWFuQWxsID09PSB0cnVlKSB7XG4gICAgcmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKGVsLCAnY2xhc3MnKTtcbiAgfSBlbHNlIHtcbiAgICByZW1vdmVDbGFzcyhlbCwgY2xhc3NNYXAsIHJlbmRlcmVyKTtcbiAgfVxuICBjbGFzc01hcCA9IHsgLi4uY2xhc3NNYXAgfTtcbiAgYWRkQ2xhc3MoZWwsIGNsYXNzTWFwLCByZW5kZXJlcik7XG59XG4iXX0=