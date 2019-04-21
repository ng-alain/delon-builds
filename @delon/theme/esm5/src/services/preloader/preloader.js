/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlbG9hZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL3RoZW1lLyIsInNvdXJjZXMiOlsic3JjL3NlcnZpY2VzL3ByZWxvYWRlci9wcmVsb2FkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLE1BQU0sVUFBVSxpQkFBaUI7O1FBQ3pCLElBQUksR0FBRyxtQkFBQSxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxFQUFDOztRQUN0QyxTQUFTLEdBQUcsbUJBQUEsUUFBUSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsRUFBQztJQUV2RCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7Ozs7SUFFL0IsU0FBUyxNQUFNO1FBQ2IsMENBQTBDO1FBQzFDLElBQUksQ0FBQyxTQUFTO1lBQUUsT0FBTztRQUN2QixTQUFTLENBQUMsZ0JBQWdCLENBQUMsZUFBZTs7O1FBQUU7WUFDMUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxrQkFBa0IsQ0FBQztRQUMzQyxDQUFDLEVBQUMsQ0FBQztRQUVILFNBQVMsQ0FBQyxTQUFTLElBQUksbURBQW1ELENBQUM7SUFDN0UsQ0FBQztJQUVELENBQUMsbUJBQUEsTUFBTSxFQUFPLENBQUMsQ0FBQyxZQUFZOzs7SUFBRztRQUM3QixVQUFVOzs7UUFBQztZQUNULE1BQU0sRUFBRSxDQUFDO1lBQ1QsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQzNCLENBQUMsR0FBRSxHQUFHLENBQUMsQ0FBQztJQUNWLENBQUMsQ0FBQSxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBwcmVsb2FkZXJGaW5pc2hlZCgpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSE7XG4gIGNvbnN0IHByZWxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVsb2FkZXInKSE7XG5cbiAgYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuXG4gIGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAvLyBwcmVsb2FkZXIgdmFsdWUgbnVsbCB3aGVuIHJ1bm5pbmcgLS1obXJcbiAgICBpZiAoIXByZWxvYWRlcikgcmV0dXJuO1xuICAgIHByZWxvYWRlci5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgZnVuY3Rpb24oKSB7XG4gICAgICBwcmVsb2FkZXIuY2xhc3NOYW1lID0gJ3ByZWxvYWRlci1oaWRkZW4nO1xuICAgIH0pO1xuXG4gICAgcHJlbG9hZGVyLmNsYXNzTmFtZSArPSAnIHByZWxvYWRlci1oaWRkZW4tYWRkIHByZWxvYWRlci1oaWRkZW4tYWRkLWFjdGl2ZSc7XG4gIH1cblxuICAod2luZG93IGFzIGFueSkuYXBwQm9vdHN0cmFwID0gKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgICBib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7XG4gICAgfSwgMTAwKTtcbiAgfTtcbn1cbiJdfQ==