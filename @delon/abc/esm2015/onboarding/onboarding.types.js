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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy50eXBlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9vbmJvYXJkaW5nL29uYm9hcmRpbmcudHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFNQSxzQ0FpQkM7Ozs7OztJQWJDLGlDQUF5Qjs7Ozs7SUFJekIsZ0NBQWU7Ozs7O0lBSWYsd0NBQXVCOzs7OztJQUl2QixxQ0FBb0I7Ozs7O0FBR3RCLG9DQTJFQzs7Ozs7O0lBdkVDLG1DQUFrQjs7Ozs7SUFJbEIsa0NBWWtCOzs7OztJQUlsQixtQ0FBbUI7Ozs7O0lBSW5CLG9DQUFvQjs7Ozs7SUFJcEIsK0JBQWU7Ozs7O0lBSWYsK0JBQW1DOzs7OztJQUluQyxpQ0FBZ0Q7Ozs7OztJQUtoRCw4QkFBeUM7Ozs7OztJQUt6Qyw4QkFBeUM7Ozs7OztJQUt6Qyw4QkFBeUM7Ozs7OztJQUt6Qyw4QkFBeUM7Ozs7O0lBSXpDLDZCQUFhOzs7Ozs7SUFLYixnQ0FBa0M7Ozs7OztJQUtsQywrQkFBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IHR5cGUgT25ib2FyZGluZ09wVHlwZSA9ICduZXh0JyB8ICdwcmV2JyB8ICdza2lwJyB8ICdkb25lJztcblxuZXhwb3J0IGludGVyZmFjZSBPbmJvYXJkaW5nQ29uZmlnIHtcbiAgLyoqXG4gICAqIE9uYm9hcmRpbmcgaXRlbXNcbiAgICovXG4gIGl0ZW1zPzogT25ib2FyZGluZ0l0ZW1bXTtcbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gc2hvdyBtYXNrIG9yIG5vdCwgRGVmYXVsdDogYHRydWVgXG4gICAqL1xuICBtYXNrPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIENsaWNraW5nIG9uIHRoZSBtYXNrIChhcmVhIG91dHNpZGUgdGhlIG9uYm9hcmRpbmcpIHRvIGNsb3NlIHRoZSBvbmJvYXJkaW5nIG9yIG5vdCwgRGVmYXVsdDogYHRydWVgXG4gICAqL1xuICBtYXNrQ2xvc2FibGU/OiBib29sZWFuO1xuICAvKipcbiAgICogV2hldGhlciB0byBzaG93IHRvdGFsLCBEZWZhdWx0OiBgdHJ1ZWBcbiAgICovXG4gIHNob3dUb3RhbD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgT25ib2FyZGluZ0l0ZW0ge1xuICAvKipcbiAgICogVGhlIENTUyBzZWxlY3Rvciwgd2hpY2ggaWRlbnRpZmllcyB0aGUgaHRtbCBlbGVtZW50IHlvdSB3YW50IHRvIGRlc2NyaWJlXG4gICAqL1xuICBzZWxlY3RvcnM6IHN0cmluZztcbiAgLyoqXG4gICAqIFBvc2l0aW9uaW5nIG9mIHRoZSBzZWxlY3RvciBlbGVtZW50LCByZWxhdGl2ZSB0byB0aGUgY29udGVudHMgb2YgdGhlIGNoaWxkcmVuLCBEZWZhdWx0OiBgYm90dG9tTGVmdGBcbiAgICovXG4gIHBvc2l0aW9uPzpcbiAgICB8ICd0b3AnXG4gICAgfCAnbGVmdCdcbiAgICB8ICdyaWdodCdcbiAgICB8ICdib3R0b20nXG4gICAgfCAndG9wTGVmdCdcbiAgICB8ICd0b3BSaWdodCdcbiAgICB8ICdib3R0b21MZWZ0J1xuICAgIHwgJ2JvdHRvbVJpZ2h0J1xuICAgIHwgJ2xlZnRUb3AnXG4gICAgfCAnbGVmdEJvdHRvbSdcbiAgICB8ICdyaWdodFRvcCdcbiAgICB8ICdyaWdodEJvdHRvbSc7XG4gIC8qKlxuICAgKiBDbGFzcyBuYW1lIG9mIHRoZSBwYW5lbFxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICAvKipcbiAgICogTGlnaHQgc3R5bGVcbiAgICovXG4gIGxpZ2h0U3R5bGU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBXaWR0aCBvZiB0aGUgcGFuZWxcbiAgICovXG4gIHdpZHRoPzogbnVtYmVyO1xuICAvKipcbiAgICogVGl0bGUgdGV4dCBvZiB0aGUgcGFuZWxcbiAgICovXG4gIHRpdGxlPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIC8qKlxuICAgKiBDb250ZW50IHRleHQgb2YgdGhlIHBhbmVsXG4gICAqL1xuICBjb250ZW50Pzogc3RyaW5nIHwgU2FmZUh0bWwgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgLyoqXG4gICAqIFNraXAgYnV0dG9uIG9mIHRoZSBwYW5lbFxuICAgKiAtIGBudWxsYCBEb24ndCBzaG93XG4gICAqL1xuICBza2lwPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsO1xuICAvKipcbiAgICogUHJldiBidXR0b24gb2YgdGhlIHBhbmVsXG4gICAqIC0gYG51bGxgIERvbid0IHNob3dcbiAgICovXG4gIHByZXY/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGw7XG4gIC8qKlxuICAgKiBOZXh0IGJ1dHRvbiBvZiB0aGUgcGFuZWxcbiAgICogLSBgbnVsbGAgRG9uJ3Qgc2hvd1xuICAgKi9cbiAgbmV4dD86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbDtcbiAgLyoqXG4gICAqIERvbmUgYnV0dG9uIG9mIHRoZSBwYW5lbFxuICAgKiAtIGBudWxsYCBEb24ndCBzaG93XG4gICAqL1xuICBkb25lPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsO1xuICAvKipcbiAgICogVGFyZ2V0IHJvdXRlciB1cmxcbiAgICovXG4gIHVybD86IHN0cmluZztcbiAgLyoqXG4gICAqIENhbGxiYWNrIGJlZm9yZSBlbnRlcmluZywgdHJpZ2dlcmVkIHdoZW4gY2FsbCBgbmV4dGAgb3BlcmF0ZXNcbiAgICogLSBgbnVtYmVyYCBpbmRpY2F0ZSBkZWxheVxuICAgKi9cbiAgYmVmb3JlPzogT2JzZXJ2YWJsZTxhbnk+IHwgbnVtYmVyO1xuICAvKipcbiAgICogQ2FsbGJhY2sgYWZ0ZXIgZW50ZXJpbmcsIHRyaWdnZXJlZCB3aGVuIGNhbGwgYHByZXZgIG9wZXJhdGVzXG4gICAqIC0gYG51bWJlcmAgaW5kaWNhdGUgZGVsYXlcbiAgICovXG4gIGFmdGVyPzogT2JzZXJ2YWJsZTxhbnk+IHwgbnVtYmVyO1xufVxuIl19