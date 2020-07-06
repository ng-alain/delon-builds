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
     * Whether to animate, Default: `false`
     * @type {?|undefined}
     */
    OnboardingConfig.prototype.animation;
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy50eXBlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvb25ib2FyZGluZy8iLCJzb3VyY2VzIjpbIm9uYm9hcmRpbmcudHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFJQSxzQ0FxQkM7Ozs7OztJQWpCQyxpQ0FBeUI7Ozs7O0lBSXpCLGdDQUFlOzs7OztJQUlmLHdDQUF1Qjs7Ozs7SUFJdkIscUNBQW9COzs7OztJQUlwQixxQ0FBb0I7Ozs7O0FBR3RCLG9DQXlEQzs7Ozs7O0lBckRDLG1DQUFrQjs7Ozs7SUFJbEIsa0NBWWtCOzs7OztJQUlsQixtQ0FBbUI7Ozs7O0lBSW5CLCtCQUFlOzs7OztJQUlmLCtCQUFtQzs7Ozs7SUFJbkMsaUNBQXFDOzs7Ozs7SUFLckMsOEJBQXlDOzs7Ozs7SUFLekMsOEJBQXlDOzs7Ozs7SUFLekMsOEJBQXlDOzs7Ozs7SUFLekMsOEJBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IHR5cGUgT25ib2FyZGluZ09wVHlwZSA9ICduZXh0JyB8ICdwcmV2JyB8ICdza2lwJyB8ICdkb25lJztcblxuZXhwb3J0IGludGVyZmFjZSBPbmJvYXJkaW5nQ29uZmlnIHtcbiAgLyoqXG4gICAqIE9uYm9hcmRpbmcgaXRlbXNcbiAgICovXG4gIGl0ZW1zPzogT25ib2FyZGluZ0l0ZW1bXTtcbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gc2hvdyBtYXNrIG9yIG5vdCwgRGVmYXVsdDogYHRydWVgXG4gICAqL1xuICBtYXNrPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIENsaWNraW5nIG9uIHRoZSBtYXNrIChhcmVhIG91dHNpZGUgdGhlIG9uYm9hcmRpbmcpIHRvIGNsb3NlIHRoZSBvbmJvYXJkaW5nIG9yIG5vdCwgRGVmYXVsdDogYHRydWVgXG4gICAqL1xuICBtYXNrQ2xvc2FibGU/OiBib29sZWFuO1xuICAvKipcbiAgICogV2hldGhlciB0byBhbmltYXRlLCBEZWZhdWx0OiBgZmFsc2VgXG4gICAqL1xuICBhbmltYXRpb24/OiBib29sZWFuO1xuICAvKipcbiAgICogV2hldGhlciB0byBzaG93IHRvdGFsLCBEZWZhdWx0OiBgdHJ1ZWBcbiAgICovXG4gIHNob3dUb3RhbD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgT25ib2FyZGluZ0l0ZW0ge1xuICAvKipcbiAgICogVGhlIENTUyBzZWxlY3Rvciwgd2hpY2ggaWRlbnRpZmllcyB0aGUgaHRtbCBlbGVtZW50IHlvdSB3YW50IHRvIGRlc2NyaWJlXG4gICAqL1xuICBzZWxlY3RvcnM6IHN0cmluZztcbiAgLyoqXG4gICAqIFBvc2l0aW9uaW5nIG9mIHRoZSBzZWxlY3RvciBlbGVtZW50LCByZWxhdGl2ZSB0byB0aGUgY29udGVudHMgb2YgdGhlIGNoaWxkcmVuLCBEZWZhdWx0OiBgYm90dG9tTGVmdGBcbiAgICovXG4gIHBvc2l0aW9uPzpcbiAgICB8ICd0b3AnXG4gICAgfCAnbGVmdCdcbiAgICB8ICdyaWdodCdcbiAgICB8ICdib3R0b20nXG4gICAgfCAndG9wTGVmdCdcbiAgICB8ICd0b3BSaWdodCdcbiAgICB8ICdib3R0b21MZWZ0J1xuICAgIHwgJ2JvdHRvbVJpZ2h0J1xuICAgIHwgJ2xlZnRUb3AnXG4gICAgfCAnbGVmdEJvdHRvbSdcbiAgICB8ICdyaWdodFRvcCdcbiAgICB8ICdyaWdodEJvdHRvbSc7XG4gIC8qKlxuICAgKiBDbGFzcyBuYW1lIG9mIHRoZSBwYW5lbFxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICAvKipcbiAgICogV2lkdGggb2YgdGhlIHBhbmVsXG4gICAqL1xuICB3aWR0aD86IG51bWJlcjtcbiAgLyoqXG4gICAqIFRpdGxlIHRleHQgb2YgdGhlIHBhbmVsXG4gICAqL1xuICB0aXRsZT86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICAvKipcbiAgICogQ29udGVudCB0ZXh0IG9mIHRoZSBwYW5lbFxuICAgKi9cbiAgY29udGVudD86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICAvKipcbiAgICogU2tpcCBidXR0b24gb2YgdGhlIHBhbmVsXG4gICAqIC0gYG51bGxgIERvbid0IHNob3dcbiAgICovXG4gIHNraXA/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGw7XG4gIC8qKlxuICAgKiBQcmV2IGJ1dHRvbiBvZiB0aGUgcGFuZWxcbiAgICogLSBgbnVsbGAgRG9uJ3Qgc2hvd1xuICAgKi9cbiAgcHJldj86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbDtcbiAgLyoqXG4gICAqIE5leHQgYnV0dG9uIG9mIHRoZSBwYW5lbFxuICAgKiAtIGBudWxsYCBEb24ndCBzaG93XG4gICAqL1xuICBuZXh0Pzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsO1xuICAvKipcbiAgICogRG9uZSBidXR0b24gb2YgdGhlIHBhbmVsXG4gICAqIC0gYG51bGxgIERvbid0IHNob3dcbiAgICovXG4gIGRvbmU/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGw7XG59XG4iXX0=