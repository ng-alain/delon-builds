function removeClass(el, classMap, renderer) {
    // tslint:disable-next-line: forin
    for (const i in classMap) {
        renderer.removeClass(el, i);
    }
}
function addClass(el, classMap, renderer) {
    for (const i in classMap) {
        if (classMap[i]) {
            renderer.addClass(el, i);
        }
    }
}
/**
 * Update host component style `class`
 *
 * 更新宿主组件样式 `class`
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
 */
export function updateHostClass(el, renderer, classMap, preClean = false) {
    if (preClean === true) {
        renderer.removeAttribute(el, 'class');
    }
    else {
        removeClass(el, classMap, renderer);
    }
    classMap = Object.assign({}, classMap);
    addClass(el, classMap, renderer);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy91dGlsL2Jyb3dzZXIvc3R5bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsU0FBUyxXQUFXLENBQUMsRUFBZSxFQUFFLFFBQWdCLEVBQUUsUUFBbUI7SUFDekUsa0NBQWtDO0lBQ2xDLEtBQUssTUFBTSxDQUFDLElBQUksUUFBUSxFQUFFO1FBQ3hCLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQzdCO0FBQ0gsQ0FBQztBQUVELFNBQVMsUUFBUSxDQUFDLEVBQWUsRUFBRSxRQUFhLEVBQUUsUUFBbUI7SUFDbkUsS0FBSyxNQUFNLENBQUMsSUFBSSxRQUFRLEVBQUU7UUFDeEIsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDZixRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUMxQjtLQUNGO0FBQ0gsQ0FBQztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7O0dBZ0JHO0FBQ0gsTUFBTSxVQUFVLGVBQWUsQ0FBQyxFQUFlLEVBQUUsUUFBbUIsRUFBRSxRQUFnQixFQUFFLFdBQW9CLEtBQUs7SUFDL0csSUFBSSxRQUFRLEtBQUssSUFBSSxFQUFFO1FBQ3JCLFFBQVEsQ0FBQyxlQUFlLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQ3ZDO1NBQU07UUFDTCxXQUFXLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztLQUNyQztJQUNELFFBQVEscUJBQVEsUUFBUSxDQUFFLENBQUM7SUFDM0IsUUFBUSxDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDbkMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5mdW5jdGlvbiByZW1vdmVDbGFzcyhlbDogSFRNTEVsZW1lbnQsIGNsYXNzTWFwOiBvYmplY3QsIHJlbmRlcmVyOiBSZW5kZXJlcjIpOiB2b2lkIHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBmb3JpblxuICBmb3IgKGNvbnN0IGkgaW4gY2xhc3NNYXApIHtcbiAgICByZW5kZXJlci5yZW1vdmVDbGFzcyhlbCwgaSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkQ2xhc3MoZWw6IEhUTUxFbGVtZW50LCBjbGFzc01hcDogYW55LCByZW5kZXJlcjogUmVuZGVyZXIyKTogdm9pZCB7XG4gIGZvciAoY29uc3QgaSBpbiBjbGFzc01hcCkge1xuICAgIGlmIChjbGFzc01hcFtpXSkge1xuICAgICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWwsIGkpO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFVwZGF0ZSBob3N0IGNvbXBvbmVudCBzdHlsZSBgY2xhc3NgXG4gKlxuICog5pu05paw5a6/5Li757uE5Lu25qC35byPIGBjbGFzc2BcbiAqXG4gKiBgYGB0c1xuICogdXBkYXRlSG9zdENsYXNzKFxuICogIHRoaXMuZWwubmF0aXZlRWxlbWVudCxcbiAqICB0aGlzLnJlbmRlcmVyLFxuICogIHtcbiAqICAgIFsgJ2NsYXNzbmFtZScgXTogdHJ1ZSxcbiAqICAgIFsgJ2NsYXNzbmFtZScgXTogdGhpcy50eXBlID09PSAnMScsXG4gKiAgICBbIHRoaXMuY2xzIF06IHRydWUsXG4gKiAgICBbIGBhLSR7dGhpcy5jbHN9YCBdOiB0cnVlXG4gKiAgfSlcbiAqIGBgYFxuICovXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlSG9zdENsYXNzKGVsOiBIVE1MRWxlbWVudCwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgY2xhc3NNYXA6IG9iamVjdCwgcHJlQ2xlYW46IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICBpZiAocHJlQ2xlYW4gPT09IHRydWUpIHtcbiAgICByZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUoZWwsICdjbGFzcycpO1xuICB9IGVsc2Uge1xuICAgIHJlbW92ZUNsYXNzKGVsLCBjbGFzc01hcCwgcmVuZGVyZXIpO1xuICB9XG4gIGNsYXNzTWFwID0geyAuLi5jbGFzc01hcCB9O1xuICBhZGRDbGFzcyhlbCwgY2xhc3NNYXAsIHJlbmRlcmVyKTtcbn1cbiJdfQ==