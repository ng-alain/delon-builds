/**
 * @fileoverview added by tsickle
 * Generated from: onboarding.types.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function OnboardingConfig() { }
if (false) {
    /**
     * Onboarding items
     * @type {?|undefined}
     */
    OnboardingConfig.prototype.items;
    /**
     * Whether to show mask or not, Default: `true`
     * @type {?|undefined}
     */
    OnboardingConfig.prototype.mask;
    /**
     * Clicking on the mask (area outside the onboarding) to close the onboarding or not, Default: `true`
     * @type {?|undefined}
     */
    OnboardingConfig.prototype.maskClosable;
    /**
     * Whether to show total, Default: `true`
     * @type {?|undefined}
     */
    OnboardingConfig.prototype.showTotal;
}
/**
 * @record
 */
export function OnboardingItem() { }
if (false) {
    /**
     * The CSS selector, which identifies the html element you want to describe
     * @type {?}
     */
    OnboardingItem.prototype.selectors;
    /**
     * Positioning of the selector element, relative to the contents of the children, Default: `bottomLeft`
     * @type {?|undefined}
     */
    OnboardingItem.prototype.position;
    /**
     * Class name of the panel
     * @type {?|undefined}
     */
    OnboardingItem.prototype.className;
    /**
     * Light style
     * @type {?|undefined}
     */
    OnboardingItem.prototype.lightStyle;
    /**
     * Width of the panel
     * @type {?|undefined}
     */
    OnboardingItem.prototype.width;
    /**
     * Title text of the panel
     * @type {?|undefined}
     */
    OnboardingItem.prototype.title;
    /**
     * Content text of the panel
     * @type {?|undefined}
     */
    OnboardingItem.prototype.content;
    /**
     * Skip button of the panel
     * - `null` Don't show
     * @type {?|undefined}
     */
    OnboardingItem.prototype.skip;
    /**
     * Prev button of the panel
     * - `null` Don't show
     * @type {?|undefined}
     */
    OnboardingItem.prototype.prev;
    /**
     * Next button of the panel
     * - `null` Don't show
     * @type {?|undefined}
     */
    OnboardingItem.prototype.next;
    /**
     * Done button of the panel
     * - `null` Don't show
     * @type {?|undefined}
     */
    OnboardingItem.prototype.done;
    /**
     * Target router url
     * @type {?|undefined}
     */
    OnboardingItem.prototype.url;
    /**
     * Callback before entering, triggered when call `next` operates
     * - `number` indicate delay
     * @type {?|undefined}
     */
    OnboardingItem.prototype.before;
    /**
     * Callback after entering, triggered when call `prev` operates
     * - `number` indicate delay
     * @type {?|undefined}
     */
    OnboardingItem.prototype.after;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy50eXBlcy5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS92c3RzL3dvcmsvMS9zL3BhY2thZ2VzL2FiYy9vbmJvYXJkaW5nLyIsInNvdXJjZXMiOlsib25ib2FyZGluZy50eXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQU1BLHNDQWlCQzs7Ozs7O0lBYkMsaUNBQXlCOzs7OztJQUl6QixnQ0FBZTs7Ozs7SUFJZix3Q0FBdUI7Ozs7O0lBSXZCLHFDQUFvQjs7Ozs7QUFHdEIsb0NBMkVDOzs7Ozs7SUF2RUMsbUNBQWtCOzs7OztJQUlsQixrQ0FZa0I7Ozs7O0lBSWxCLG1DQUFtQjs7Ozs7SUFJbkIsb0NBQW9COzs7OztJQUlwQiwrQkFBZTs7Ozs7SUFJZiwrQkFBbUM7Ozs7O0lBSW5DLGlDQUFnRDs7Ozs7O0lBS2hELDhCQUF5Qzs7Ozs7O0lBS3pDLDhCQUF5Qzs7Ozs7O0lBS3pDLDhCQUF5Qzs7Ozs7O0lBS3pDLDhCQUF5Qzs7Ozs7SUFJekMsNkJBQWE7Ozs7OztJQUtiLGdDQUFrQzs7Ozs7O0lBS2xDLCtCQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgdHlwZSBPbmJvYXJkaW5nT3BUeXBlID0gJ25leHQnIHwgJ3ByZXYnIHwgJ3NraXAnIHwgJ2RvbmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE9uYm9hcmRpbmdDb25maWcge1xuICAvKipcbiAgICogT25ib2FyZGluZyBpdGVtc1xuICAgKi9cbiAgaXRlbXM/OiBPbmJvYXJkaW5nSXRlbVtdO1xuICAvKipcbiAgICogV2hldGhlciB0byBzaG93IG1hc2sgb3Igbm90LCBEZWZhdWx0OiBgdHJ1ZWBcbiAgICovXG4gIG1hc2s/OiBib29sZWFuO1xuICAvKipcbiAgICogQ2xpY2tpbmcgb24gdGhlIG1hc2sgKGFyZWEgb3V0c2lkZSB0aGUgb25ib2FyZGluZykgdG8gY2xvc2UgdGhlIG9uYm9hcmRpbmcgb3Igbm90LCBEZWZhdWx0OiBgdHJ1ZWBcbiAgICovXG4gIG1hc2tDbG9zYWJsZT86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIHNob3cgdG90YWwsIERlZmF1bHQ6IGB0cnVlYFxuICAgKi9cbiAgc2hvd1RvdGFsPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBPbmJvYXJkaW5nSXRlbSB7XG4gIC8qKlxuICAgKiBUaGUgQ1NTIHNlbGVjdG9yLCB3aGljaCBpZGVudGlmaWVzIHRoZSBodG1sIGVsZW1lbnQgeW91IHdhbnQgdG8gZGVzY3JpYmVcbiAgICovXG4gIHNlbGVjdG9yczogc3RyaW5nO1xuICAvKipcbiAgICogUG9zaXRpb25pbmcgb2YgdGhlIHNlbGVjdG9yIGVsZW1lbnQsIHJlbGF0aXZlIHRvIHRoZSBjb250ZW50cyBvZiB0aGUgY2hpbGRyZW4sIERlZmF1bHQ6IGBib3R0b21MZWZ0YFxuICAgKi9cbiAgcG9zaXRpb24/OlxuICAgIHwgJ3RvcCdcbiAgICB8ICdsZWZ0J1xuICAgIHwgJ3JpZ2h0J1xuICAgIHwgJ2JvdHRvbSdcbiAgICB8ICd0b3BMZWZ0J1xuICAgIHwgJ3RvcFJpZ2h0J1xuICAgIHwgJ2JvdHRvbUxlZnQnXG4gICAgfCAnYm90dG9tUmlnaHQnXG4gICAgfCAnbGVmdFRvcCdcbiAgICB8ICdsZWZ0Qm90dG9tJ1xuICAgIHwgJ3JpZ2h0VG9wJ1xuICAgIHwgJ3JpZ2h0Qm90dG9tJztcbiAgLyoqXG4gICAqIENsYXNzIG5hbWUgb2YgdGhlIHBhbmVsXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBMaWdodCBzdHlsZVxuICAgKi9cbiAgbGlnaHRTdHlsZT86IHN0cmluZztcbiAgLyoqXG4gICAqIFdpZHRoIG9mIHRoZSBwYW5lbFxuICAgKi9cbiAgd2lkdGg/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBUaXRsZSB0ZXh0IG9mIHRoZSBwYW5lbFxuICAgKi9cbiAgdGl0bGU/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgLyoqXG4gICAqIENvbnRlbnQgdGV4dCBvZiB0aGUgcGFuZWxcbiAgICovXG4gIGNvbnRlbnQ/OiBzdHJpbmcgfCBTYWZlSHRtbCB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICAvKipcbiAgICogU2tpcCBidXR0b24gb2YgdGhlIHBhbmVsXG4gICAqIC0gYG51bGxgIERvbid0IHNob3dcbiAgICovXG4gIHNraXA/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGw7XG4gIC8qKlxuICAgKiBQcmV2IGJ1dHRvbiBvZiB0aGUgcGFuZWxcbiAgICogLSBgbnVsbGAgRG9uJ3Qgc2hvd1xuICAgKi9cbiAgcHJldj86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbDtcbiAgLyoqXG4gICAqIE5leHQgYnV0dG9uIG9mIHRoZSBwYW5lbFxuICAgKiAtIGBudWxsYCBEb24ndCBzaG93XG4gICAqL1xuICBuZXh0Pzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsO1xuICAvKipcbiAgICogRG9uZSBidXR0b24gb2YgdGhlIHBhbmVsXG4gICAqIC0gYG51bGxgIERvbid0IHNob3dcbiAgICovXG4gIGRvbmU/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGw7XG4gIC8qKlxuICAgKiBUYXJnZXQgcm91dGVyIHVybFxuICAgKi9cbiAgdXJsPzogc3RyaW5nO1xuICAvKipcbiAgICogQ2FsbGJhY2sgYmVmb3JlIGVudGVyaW5nLCB0cmlnZ2VyZWQgd2hlbiBjYWxsIGBuZXh0YCBvcGVyYXRlc1xuICAgKiAtIGBudW1iZXJgIGluZGljYXRlIGRlbGF5XG4gICAqL1xuICBiZWZvcmU/OiBPYnNlcnZhYmxlPGFueT4gfCBudW1iZXI7XG4gIC8qKlxuICAgKiBDYWxsYmFjayBhZnRlciBlbnRlcmluZywgdHJpZ2dlcmVkIHdoZW4gY2FsbCBgcHJldmAgb3BlcmF0ZXNcbiAgICogLSBgbnVtYmVyYCBpbmRpY2F0ZSBkZWxheVxuICAgKi9cbiAgYWZ0ZXI/OiBPYnNlcnZhYmxlPGFueT4gfCBudW1iZXI7XG59XG4iXX0=