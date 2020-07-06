/**
 * @fileoverview added by tsickle
 * Generated from: onboarding.types.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function OnboardingData() { }
if (false) {
    /**
     * Onboarding items
     * @type {?|undefined}
     */
    OnboardingData.prototype.items;
    /**
     * Whether to show mask or not, Default: `true`
     * @type {?|undefined}
     */
    OnboardingData.prototype.mask;
    /**
     * Clicking on the mask (area outside the onboarding) to close the onboarding or not, Default: `true`
     * @type {?|undefined}
     */
    OnboardingData.prototype.maskClosable;
    /**
     * Whether to animate, Default: `false`
     * @type {?|undefined}
     */
    OnboardingData.prototype.animation;
    /**
     * Whether to show total, Default: `true`
     * @type {?|undefined}
     */
    OnboardingData.prototype.showTotal;
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
    OnboardingItem.prototype.selector;
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
     * Headline text of the panel
     * @type {?|undefined}
     */
    OnboardingItem.prototype.headline;
    /**
     * Detail text of the panel
     * @type {?|undefined}
     */
    OnboardingItem.prototype.detail;
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy50eXBlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvb25ib2FyZGluZy8iLCJzb3VyY2VzIjpbIm9uYm9hcmRpbmcudHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFJQSxvQ0FxQkM7Ozs7OztJQWpCQywrQkFBeUI7Ozs7O0lBSXpCLDhCQUFlOzs7OztJQUlmLHNDQUF1Qjs7Ozs7SUFJdkIsbUNBQW9COzs7OztJQUlwQixtQ0FBb0I7Ozs7O0FBR3RCLG9DQXlEQzs7Ozs7O0lBckRDLGtDQUFpQjs7Ozs7SUFJakIsa0NBWWtCOzs7OztJQUlsQixtQ0FBbUI7Ozs7O0lBSW5CLCtCQUFlOzs7OztJQUlmLGtDQUFzQzs7Ozs7SUFJdEMsZ0NBQW9DOzs7Ozs7SUFLcEMsOEJBQXlDOzs7Ozs7SUFLekMsOEJBQXlDOzs7Ozs7SUFLekMsOEJBQXlDOzs7Ozs7SUFLekMsOEJBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IHR5cGUgT25ib2FyZGluZ09wVHlwZSA9ICduZXh0JyB8ICdwcmV2JyB8ICdza2lwJyB8ICdkb25lJztcblxuZXhwb3J0IGludGVyZmFjZSBPbmJvYXJkaW5nRGF0YSB7XG4gIC8qKlxuICAgKiBPbmJvYXJkaW5nIGl0ZW1zXG4gICAqL1xuICBpdGVtcz86IE9uYm9hcmRpbmdJdGVtW107XG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIHNob3cgbWFzayBvciBub3QsIERlZmF1bHQ6IGB0cnVlYFxuICAgKi9cbiAgbWFzaz86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBDbGlja2luZyBvbiB0aGUgbWFzayAoYXJlYSBvdXRzaWRlIHRoZSBvbmJvYXJkaW5nKSB0byBjbG9zZSB0aGUgb25ib2FyZGluZyBvciBub3QsIERlZmF1bHQ6IGB0cnVlYFxuICAgKi9cbiAgbWFza0Nsb3NhYmxlPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gYW5pbWF0ZSwgRGVmYXVsdDogYGZhbHNlYFxuICAgKi9cbiAgYW5pbWF0aW9uPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gc2hvdyB0b3RhbCwgRGVmYXVsdDogYHRydWVgXG4gICAqL1xuICBzaG93VG90YWw/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE9uYm9hcmRpbmdJdGVtIHtcbiAgLyoqXG4gICAqIFRoZSBDU1Mgc2VsZWN0b3IsIHdoaWNoIGlkZW50aWZpZXMgdGhlIGh0bWwgZWxlbWVudCB5b3Ugd2FudCB0byBkZXNjcmliZVxuICAgKi9cbiAgc2VsZWN0b3I6IHN0cmluZztcbiAgLyoqXG4gICAqIFBvc2l0aW9uaW5nIG9mIHRoZSBzZWxlY3RvciBlbGVtZW50LCByZWxhdGl2ZSB0byB0aGUgY29udGVudHMgb2YgdGhlIGNoaWxkcmVuLCBEZWZhdWx0OiBgYm90dG9tTGVmdGBcbiAgICovXG4gIHBvc2l0aW9uPzpcbiAgICB8ICd0b3AnXG4gICAgfCAnbGVmdCdcbiAgICB8ICdyaWdodCdcbiAgICB8ICdib3R0b20nXG4gICAgfCAndG9wTGVmdCdcbiAgICB8ICd0b3BSaWdodCdcbiAgICB8ICdib3R0b21MZWZ0J1xuICAgIHwgJ2JvdHRvbVJpZ2h0J1xuICAgIHwgJ2xlZnRUb3AnXG4gICAgfCAnbGVmdEJvdHRvbSdcbiAgICB8ICdyaWdodFRvcCdcbiAgICB8ICdyaWdodEJvdHRvbSc7XG4gIC8qKlxuICAgKiBDbGFzcyBuYW1lIG9mIHRoZSBwYW5lbFxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICAvKipcbiAgICogV2lkdGggb2YgdGhlIHBhbmVsXG4gICAqL1xuICB3aWR0aD86IG51bWJlcjtcbiAgLyoqXG4gICAqIEhlYWRsaW5lIHRleHQgb2YgdGhlIHBhbmVsXG4gICAqL1xuICBoZWFkbGluZT86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICAvKipcbiAgICogRGV0YWlsIHRleHQgb2YgdGhlIHBhbmVsXG4gICAqL1xuICBkZXRhaWw/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgLyoqXG4gICAqIFNraXAgYnV0dG9uIG9mIHRoZSBwYW5lbFxuICAgKiAtIGBudWxsYCBEb24ndCBzaG93XG4gICAqL1xuICBza2lwPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsO1xuICAvKipcbiAgICogUHJldiBidXR0b24gb2YgdGhlIHBhbmVsXG4gICAqIC0gYG51bGxgIERvbid0IHNob3dcbiAgICovXG4gIHByZXY/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGw7XG4gIC8qKlxuICAgKiBOZXh0IGJ1dHRvbiBvZiB0aGUgcGFuZWxcbiAgICogLSBgbnVsbGAgRG9uJ3Qgc2hvd1xuICAgKi9cbiAgbmV4dD86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbDtcbiAgLyoqXG4gICAqIERvbmUgYnV0dG9uIG9mIHRoZSBwYW5lbFxuICAgKiAtIGBudWxsYCBEb24ndCBzaG93XG4gICAqL1xuICBkb25lPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsO1xufVxuIl19