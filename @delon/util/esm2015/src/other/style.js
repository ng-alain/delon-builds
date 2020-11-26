/**
 * @fileoverview added by tsickle
 * Generated from: src/other/style.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGUuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdnN0cy93b3JrLzEvcy9wYWNrYWdlcy91dGlsLyIsInNvdXJjZXMiOlsic3JjL290aGVyL3N0eWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBR0EsU0FBUyxXQUFXLENBQUMsRUFBZSxFQUFFLFFBQWdCLEVBQUUsUUFBbUI7SUFDekUsa0NBQWtDO0lBQ2xDLEtBQUssTUFBTSxDQUFDLElBQUksUUFBUSxFQUFFO1FBQ3hCLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQzdCO0FBQ0gsQ0FBQzs7Ozs7OztBQUVELFNBQVMsUUFBUSxDQUFDLEVBQWUsRUFBRSxRQUFtQixFQUFFLFFBQW1CO0lBQ3pFLEtBQUssTUFBTSxDQUFDLElBQUksUUFBUSxFQUFFO1FBQ3hCLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2YsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDMUI7S0FDRjtBQUNILENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQkQsTUFBTSxVQUFVLGVBQWUsQ0FBQyxFQUFlLEVBQUUsUUFBbUIsRUFBRSxRQUFnQixFQUFFLFdBQW9CLEtBQUs7SUFDL0csSUFBSSxRQUFRLEtBQUssSUFBSSxFQUFFO1FBQ3JCLFFBQVEsQ0FBQyxlQUFlLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQ3ZDO1NBQU07UUFDTCxXQUFXLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztLQUNyQztJQUNELFFBQVEscUJBQVEsUUFBUSxDQUFFLENBQUM7SUFDM0IsUUFBUSxDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDbkMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoZWw6IEhUTUxFbGVtZW50LCBjbGFzc01hcDogb2JqZWN0LCByZW5kZXJlcjogUmVuZGVyZXIyKTogdm9pZCB7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZm9yaW5cbiAgZm9yIChjb25zdCBpIGluIGNsYXNzTWFwKSB7XG4gICAgcmVuZGVyZXIucmVtb3ZlQ2xhc3MoZWwsIGkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZENsYXNzKGVsOiBIVE1MRWxlbWVudCwgY2xhc3NNYXA6IE56U2FmZUFueSwgcmVuZGVyZXI6IFJlbmRlcmVyMik6IHZvaWQge1xuICBmb3IgKGNvbnN0IGkgaW4gY2xhc3NNYXApIHtcbiAgICBpZiAoY2xhc3NNYXBbaV0pIHtcbiAgICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsLCBpKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiDmm7TmlrDlrr/kuLvnu4Tku7bmoLflvI8gYGNsYXNzYO+8jOS+i+Wmgu+8mlxuICpcbiAqIGBgYHRzXG4gKiB1cGRhdGVIb3N0Q2xhc3MoXG4gKiAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LFxuICogIHRoaXMucmVuZGVyZXIsXG4gKiAge1xuICogICAgWyAnY2xhc3NuYW1lJyBdOiB0cnVlLFxuICogICAgWyAnY2xhc3NuYW1lJyBdOiB0aGlzLnR5cGUgPT09ICcxJyxcbiAqICAgIFsgdGhpcy5jbHMgXTogdHJ1ZSxcbiAqICAgIFsgYGEtJHt0aGlzLmNsc31gIF06IHRydWVcbiAqICB9KVxuICogYGBgXG4gKlxuICogQHBhcmFtIFtjbGVhbkFsbF0g5piv5ZCm5YWI5riF55CG5omA5pyJIGBjbGFzc2Ag5YC877yM6buY6K6k77yaYGZhbHNlYFxuICovXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlSG9zdENsYXNzKGVsOiBIVE1MRWxlbWVudCwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgY2xhc3NNYXA6IG9iamVjdCwgY2xlYW5BbGw6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICBpZiAoY2xlYW5BbGwgPT09IHRydWUpIHtcbiAgICByZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUoZWwsICdjbGFzcycpO1xuICB9IGVsc2Uge1xuICAgIHJlbW92ZUNsYXNzKGVsLCBjbGFzc01hcCwgcmVuZGVyZXIpO1xuICB9XG4gIGNsYXNzTWFwID0geyAuLi5jbGFzc01hcCB9O1xuICBhZGRDbGFzcyhlbCwgY2xhc3NNYXAsIHJlbmRlcmVyKTtcbn1cbiJdfQ==