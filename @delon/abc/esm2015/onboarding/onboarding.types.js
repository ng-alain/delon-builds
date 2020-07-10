/**
 * @fileoverview added by tsickle
 * Generated from: onboarding.types.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy50eXBlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvb25ib2FyZGluZy8iLCJzb3VyY2VzIjpbIm9uYm9hcmRpbmcudHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFNQSxzQ0FpQkM7Ozs7OztJQWJDLGlDQUF5Qjs7Ozs7SUFJekIsZ0NBQWU7Ozs7O0lBSWYsd0NBQXVCOzs7OztJQUl2QixxQ0FBb0I7Ozs7O0FBR3RCLG9DQXVFQzs7Ozs7O0lBbkVDLG1DQUFrQjs7Ozs7SUFJbEIsa0NBWWtCOzs7OztJQUlsQixtQ0FBbUI7Ozs7O0lBSW5CLCtCQUFlOzs7OztJQUlmLCtCQUFtQzs7Ozs7SUFJbkMsaUNBQWdEOzs7Ozs7SUFLaEQsOEJBQXlDOzs7Ozs7SUFLekMsOEJBQXlDOzs7Ozs7SUFLekMsOEJBQXlDOzs7Ozs7SUFLekMsOEJBQXlDOzs7OztJQUl6Qyw2QkFBYTs7Ozs7O0lBS2IsZ0NBQWtDOzs7Ozs7SUFLbEMsK0JBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCB0eXBlIE9uYm9hcmRpbmdPcFR5cGUgPSAnbmV4dCcgfCAncHJldicgfCAnc2tpcCcgfCAnZG9uZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgT25ib2FyZGluZ0NvbmZpZyB7XG4gIC8qKlxuICAgKiBPbmJvYXJkaW5nIGl0ZW1zXG4gICAqL1xuICBpdGVtcz86IE9uYm9hcmRpbmdJdGVtW107XG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIHNob3cgbWFzayBvciBub3QsIERlZmF1bHQ6IGB0cnVlYFxuICAgKi9cbiAgbWFzaz86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBDbGlja2luZyBvbiB0aGUgbWFzayAoYXJlYSBvdXRzaWRlIHRoZSBvbmJvYXJkaW5nKSB0byBjbG9zZSB0aGUgb25ib2FyZGluZyBvciBub3QsIERlZmF1bHQ6IGB0cnVlYFxuICAgKi9cbiAgbWFza0Nsb3NhYmxlPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gc2hvdyB0b3RhbCwgRGVmYXVsdDogYHRydWVgXG4gICAqL1xuICBzaG93VG90YWw/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE9uYm9hcmRpbmdJdGVtIHtcbiAgLyoqXG4gICAqIFRoZSBDU1Mgc2VsZWN0b3IsIHdoaWNoIGlkZW50aWZpZXMgdGhlIGh0bWwgZWxlbWVudCB5b3Ugd2FudCB0byBkZXNjcmliZVxuICAgKi9cbiAgc2VsZWN0b3JzOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBQb3NpdGlvbmluZyBvZiB0aGUgc2VsZWN0b3IgZWxlbWVudCwgcmVsYXRpdmUgdG8gdGhlIGNvbnRlbnRzIG9mIHRoZSBjaGlsZHJlbiwgRGVmYXVsdDogYGJvdHRvbUxlZnRgXG4gICAqL1xuICBwb3NpdGlvbj86XG4gICAgfCAndG9wJ1xuICAgIHwgJ2xlZnQnXG4gICAgfCAncmlnaHQnXG4gICAgfCAnYm90dG9tJ1xuICAgIHwgJ3RvcExlZnQnXG4gICAgfCAndG9wUmlnaHQnXG4gICAgfCAnYm90dG9tTGVmdCdcbiAgICB8ICdib3R0b21SaWdodCdcbiAgICB8ICdsZWZ0VG9wJ1xuICAgIHwgJ2xlZnRCb3R0b20nXG4gICAgfCAncmlnaHRUb3AnXG4gICAgfCAncmlnaHRCb3R0b20nO1xuICAvKipcbiAgICogQ2xhc3MgbmFtZSBvZiB0aGUgcGFuZWxcbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgLyoqXG4gICAqIFdpZHRoIG9mIHRoZSBwYW5lbFxuICAgKi9cbiAgd2lkdGg/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBUaXRsZSB0ZXh0IG9mIHRoZSBwYW5lbFxuICAgKi9cbiAgdGl0bGU/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgLyoqXG4gICAqIENvbnRlbnQgdGV4dCBvZiB0aGUgcGFuZWxcbiAgICovXG4gIGNvbnRlbnQ/OiBzdHJpbmcgfCBTYWZlSHRtbCB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICAvKipcbiAgICogU2tpcCBidXR0b24gb2YgdGhlIHBhbmVsXG4gICAqIC0gYG51bGxgIERvbid0IHNob3dcbiAgICovXG4gIHNraXA/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGw7XG4gIC8qKlxuICAgKiBQcmV2IGJ1dHRvbiBvZiB0aGUgcGFuZWxcbiAgICogLSBgbnVsbGAgRG9uJ3Qgc2hvd1xuICAgKi9cbiAgcHJldj86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbDtcbiAgLyoqXG4gICAqIE5leHQgYnV0dG9uIG9mIHRoZSBwYW5lbFxuICAgKiAtIGBudWxsYCBEb24ndCBzaG93XG4gICAqL1xuICBuZXh0Pzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsO1xuICAvKipcbiAgICogRG9uZSBidXR0b24gb2YgdGhlIHBhbmVsXG4gICAqIC0gYG51bGxgIERvbid0IHNob3dcbiAgICovXG4gIGRvbmU/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGw7XG4gIC8qKlxuICAgKiBUYXJnZXQgcm91dGVyIHVybFxuICAgKi9cbiAgdXJsPzogc3RyaW5nO1xuICAvKipcbiAgICogQ2FsbGJhY2sgYmVmb3JlIGVudGVyaW5nLCB0cmlnZ2VyZWQgd2hlbiBjYWxsIGBuZXh0YCBvcGVyYXRlc1xuICAgKiAtIGBudW1iZXJgIGluZGljYXRlIGRlbGF5XG4gICAqL1xuICBiZWZvcmU/OiBPYnNlcnZhYmxlPGFueT4gfCBudW1iZXI7XG4gIC8qKlxuICAgKiBDYWxsYmFjayBhZnRlciBlbnRlcmluZywgdHJpZ2dlcmVkIHdoZW4gY2FsbCBgcHJldmAgb3BlcmF0ZXNcbiAgICogLSBgbnVtYmVyYCBpbmRpY2F0ZSBkZWxheVxuICAgKi9cbiAgYWZ0ZXI/OiBPYnNlcnZhYmxlPGFueT4gfCBudW1iZXI7XG59XG4iXX0=