/**
 * @fileoverview added by tsickle
 * Generated from: src/other/style.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} el
 * @param {?} classMap
 * @param {?} renderer
 * @return {?}
 */
function removeClass(el, classMap, renderer) {
    // tslint:disable-next-line: forin
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vdXRpbC8iLCJzb3VyY2VzIjpbInNyYy9vdGhlci9zdHlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVBLFNBQVMsV0FBVyxDQUFDLEVBQWUsRUFBRSxRQUFnQixFQUFFLFFBQW1CO0lBQ3pFLGtDQUFrQztJQUNsQyxLQUFLLE1BQU0sQ0FBQyxJQUFJLFFBQVEsRUFBRTtRQUN4QixRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUM3QjtBQUNILENBQUM7Ozs7Ozs7QUFFRCxTQUFTLFFBQVEsQ0FBQyxFQUFlLEVBQUUsUUFBZ0IsRUFBRSxRQUFtQjtJQUN0RSxLQUFLLE1BQU0sQ0FBQyxJQUFJLFFBQVEsRUFBRTtRQUN4QixJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNmLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzFCO0tBQ0Y7QUFDSCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJELE1BQU0sVUFBVSxlQUFlLENBQzdCLEVBQWUsRUFDZixRQUFtQixFQUNuQixRQUFnQixFQUNoQixXQUFvQixLQUFLO0lBRXpCLElBQUksUUFBUSxLQUFLLElBQUksRUFBRTtRQUNyQixRQUFRLENBQUMsZUFBZSxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztLQUN2QztTQUFNO1FBQ0wsV0FBVyxDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7S0FDckM7SUFDRCxRQUFRLHFCQUFRLFFBQVEsQ0FBRSxDQUFDO0lBQzNCLFFBQVEsQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQ25DLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoZWw6IEhUTUxFbGVtZW50LCBjbGFzc01hcDogb2JqZWN0LCByZW5kZXJlcjogUmVuZGVyZXIyKTogdm9pZCB7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZm9yaW5cbiAgZm9yIChjb25zdCBpIGluIGNsYXNzTWFwKSB7XG4gICAgcmVuZGVyZXIucmVtb3ZlQ2xhc3MoZWwsIGkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZENsYXNzKGVsOiBIVE1MRWxlbWVudCwgY2xhc3NNYXA6IG9iamVjdCwgcmVuZGVyZXI6IFJlbmRlcmVyMik6IHZvaWQge1xuICBmb3IgKGNvbnN0IGkgaW4gY2xhc3NNYXApIHtcbiAgICBpZiAoY2xhc3NNYXBbaV0pIHtcbiAgICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsLCBpKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiDmm7TmlrDlrr/kuLvnu4Tku7bmoLflvI8gYGNsYXNzYO+8jOS+i+Wmgu+8mlxuICpcbiAqIGBgYHRzXG4gKiB1cGRhdGVIb3N0Q2xhc3MoXG4gKiAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LFxuICogIHRoaXMucmVuZGVyZXIsXG4gKiAge1xuICogICAgWyAnY2xhc3NuYW1lJyBdOiB0cnVlLFxuICogICAgWyAnY2xhc3NuYW1lJyBdOiB0aGlzLnR5cGUgPT09ICcxJyxcbiAqICAgIFsgdGhpcy5jbHMgXTogdHJ1ZSxcbiAqICAgIFsgYGEtJHt0aGlzLmNsc31gIF06IHRydWVcbiAqICB9KVxuICogYGBgXG4gKlxuICogQHBhcmFtIFtjbGVhbkFsbF0g5piv5ZCm5YWI5riF55CG5omA5pyJIGBjbGFzc2Ag5YC877yM6buY6K6k77yaYGZhbHNlYFxuICovXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlSG9zdENsYXNzKFxuICBlbDogSFRNTEVsZW1lbnQsXG4gIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gIGNsYXNzTWFwOiBvYmplY3QsXG4gIGNsZWFuQWxsOiBib29sZWFuID0gZmFsc2UsXG4pOiB2b2lkIHtcbiAgaWYgKGNsZWFuQWxsID09PSB0cnVlKSB7XG4gICAgcmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKGVsLCAnY2xhc3MnKTtcbiAgfSBlbHNlIHtcbiAgICByZW1vdmVDbGFzcyhlbCwgY2xhc3NNYXAsIHJlbmRlcmVyKTtcbiAgfVxuICBjbGFzc01hcCA9IHsgLi4uY2xhc3NNYXAgfTtcbiAgYWRkQ2xhc3MoZWwsIGNsYXNzTWFwLCByZW5kZXJlcik7XG59XG4iXX0=