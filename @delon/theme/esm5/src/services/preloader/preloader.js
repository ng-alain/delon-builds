/**
 * @fileoverview added by tsickle
 * Generated from: src/services/preloader/preloader.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
export function preloaderFinished() {
    /** @type {?} */
    var body = (/** @type {?} */ (document.querySelector('body')));
    /** @type {?} */
    var preloader = (/** @type {?} */ (document.querySelector('.preloader')));
    body.style.overflow = 'hidden';
    /**
     * @return {?}
     */
    function remove() {
        // preloader value null when running --hmr
        if (!preloader)
            return;
        preloader.addEventListener('transitionend', (/**
         * @return {?}
         */
        function () {
            preloader.className = 'preloader-hidden';
        }));
        preloader.className += ' preloader-hidden-add preloader-hidden-add-active';
    }
    ((/** @type {?} */ (window))).appBootstrap = (/**
     * @return {?}
     */
    function () {
        setTimeout((/**
         * @return {?}
         */
        function () {
            remove();
            body.style.overflow = '';
        }), 100);
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlbG9hZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL3RoZW1lLyIsInNvdXJjZXMiOlsic3JjL3NlcnZpY2VzL3ByZWxvYWRlci9wcmVsb2FkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxNQUFNLFVBQVUsaUJBQWlCOztRQUN6QixJQUFJLEdBQUcsbUJBQUEsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsRUFBQzs7UUFDdEMsU0FBUyxHQUFHLG1CQUFBLFFBQVEsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEVBQUM7SUFFdkQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDOzs7O0lBRS9CLFNBQVMsTUFBTTtRQUNiLDBDQUEwQztRQUMxQyxJQUFJLENBQUMsU0FBUztZQUFFLE9BQU87UUFDdkIsU0FBUyxDQUFDLGdCQUFnQixDQUFDLGVBQWU7OztRQUFFO1lBQzFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsa0JBQWtCLENBQUM7UUFDM0MsQ0FBQyxFQUFDLENBQUM7UUFFSCxTQUFTLENBQUMsU0FBUyxJQUFJLG1EQUFtRCxDQUFDO0lBQzdFLENBQUM7SUFFRCxDQUFDLG1CQUFBLE1BQU0sRUFBTyxDQUFDLENBQUMsWUFBWTs7O0lBQUc7UUFDN0IsVUFBVTs7O1FBQUM7WUFDVCxNQUFNLEVBQUUsQ0FBQztZQUNULElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUMzQixDQUFDLEdBQUUsR0FBRyxDQUFDLENBQUM7SUFDVixDQUFDLENBQUEsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gcHJlbG9hZGVyRmluaXNoZWQoKSB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykhO1xuICBjb25zdCBwcmVsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlbG9hZGVyJykhO1xuXG4gIGJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcblxuICBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgLy8gcHJlbG9hZGVyIHZhbHVlIG51bGwgd2hlbiBydW5uaW5nIC0taG1yXG4gICAgaWYgKCFwcmVsb2FkZXIpIHJldHVybjtcbiAgICBwcmVsb2FkZXIuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsICgpID0+IHtcbiAgICAgIHByZWxvYWRlci5jbGFzc05hbWUgPSAncHJlbG9hZGVyLWhpZGRlbic7XG4gICAgfSk7XG5cbiAgICBwcmVsb2FkZXIuY2xhc3NOYW1lICs9ICcgcHJlbG9hZGVyLWhpZGRlbi1hZGQgcHJlbG9hZGVyLWhpZGRlbi1hZGQtYWN0aXZlJztcbiAgfVxuXG4gICh3aW5kb3cgYXMgYW55KS5hcHBCb290c3RyYXAgPSAoKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICByZW1vdmUoKTtcbiAgICAgIGJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcbiAgICB9LCAxMDApO1xuICB9O1xufVxuIl19