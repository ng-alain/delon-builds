/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
export function preloaderFinished() {
    /** @type {?} */
    const body = (/** @type {?} */ (document.querySelector('body')));
    /** @type {?} */
    const preloader = (/** @type {?} */ (document.querySelector('.preloader')));
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
    () => {
        setTimeout((/**
         * @return {?}
         */
        () => {
            remove();
            body.style.overflow = '';
        }), 100);
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlbG9hZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL3RoZW1lLyIsInNvdXJjZXMiOlsic3JjL3NlcnZpY2VzL3ByZWxvYWRlci9wcmVsb2FkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLE1BQU0sVUFBVSxpQkFBaUI7O1VBQ3pCLElBQUksR0FBRyxtQkFBQSxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxFQUFDOztVQUN0QyxTQUFTLEdBQUcsbUJBQUEsUUFBUSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsRUFBQztJQUV2RCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7Ozs7SUFFL0IsU0FBUyxNQUFNO1FBQ2IsMENBQTBDO1FBQzFDLElBQUksQ0FBQyxTQUFTO1lBQUUsT0FBTztRQUN2QixTQUFTLENBQUMsZ0JBQWdCLENBQUMsZUFBZTs7O1FBQUU7WUFDMUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxrQkFBa0IsQ0FBQztRQUMzQyxDQUFDLEVBQUMsQ0FBQztRQUVILFNBQVMsQ0FBQyxTQUFTLElBQUksbURBQW1ELENBQUM7SUFDN0UsQ0FBQztJQUVELENBQUMsbUJBQUEsTUFBTSxFQUFPLENBQUMsQ0FBQyxZQUFZOzs7SUFBRyxHQUFHLEVBQUU7UUFDbEMsVUFBVTs7O1FBQUMsR0FBRyxFQUFFO1lBQ2QsTUFBTSxFQUFFLENBQUM7WUFDVCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDM0IsQ0FBQyxHQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsQ0FBQyxDQUFBLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHByZWxvYWRlckZpbmlzaGVkKCkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpITtcbiAgY29uc3QgcHJlbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWxvYWRlcicpITtcblxuICBib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG5cbiAgZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgIC8vIHByZWxvYWRlciB2YWx1ZSBudWxsIHdoZW4gcnVubmluZyAtLWhtclxuICAgIGlmICghcHJlbG9hZGVyKSByZXR1cm47XG4gICAgcHJlbG9hZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBwcmVsb2FkZXIuY2xhc3NOYW1lID0gJ3ByZWxvYWRlci1oaWRkZW4nO1xuICAgIH0pO1xuXG4gICAgcHJlbG9hZGVyLmNsYXNzTmFtZSArPSAnIHByZWxvYWRlci1oaWRkZW4tYWRkIHByZWxvYWRlci1oaWRkZW4tYWRkLWFjdGl2ZSc7XG4gIH1cblxuICAod2luZG93IGFzIGFueSkuYXBwQm9vdHN0cmFwID0gKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgICBib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7XG4gICAgfSwgMTAwKTtcbiAgfTtcbn1cbiJdfQ==