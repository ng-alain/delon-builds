/**
 * @fileoverview added by tsickle
 * Generated from: plyr.types.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function PlyrMediaSource() { }
if (false) {
    /**
     * Note: YouTube and Vimeo are currently not supported as audio sources.
     * @type {?}
     */
    PlyrMediaSource.prototype.type;
    /**
     * Title of the new media. Used for the aria-label attribute on the play button, and outer container. YouTube and Vimeo are populated automatically.
     * @type {?|undefined}
     */
    PlyrMediaSource.prototype.title;
    /**
     * This is an array of sources. For HTML5 media, the properties of this object are mapped directly to HTML attributes so more can be added to the object if required.
     * @type {?}
     */
    PlyrMediaSource.prototype.sources;
    /**
     * The URL for the poster image (HTML5 video only).
     * @type {?|undefined}
     */
    PlyrMediaSource.prototype.poster;
    /**
     * An array of track objects. Each element in the array is mapped directly to a track element and any keys mapped directly to HTML attributes so as in the example above,
     * it will render as <track kind="captions" label="English" srclang="en" src="https://cdn.selz.com/plyr/1.0/example_captions_en.vtt" default> and similar for the French version.
     * Booleans are converted to HTML5 value-less attributes.
     * @type {?|undefined}
     */
    PlyrMediaSource.prototype.tracks;
}
/**
 * @record
 */
export function PlyrSource() { }
if (false) {
    /**
     * The URL of the media file (or YouTube/Vimeo URL).
     * @type {?}
     */
    PlyrSource.prototype.src;
    /**
     * The MIME type of the media file (if HTML5).
     * @type {?|undefined}
     */
    PlyrSource.prototype.type;
    /** @type {?|undefined} */
    PlyrSource.prototype.provider;
    /** @type {?|undefined} */
    PlyrSource.prototype.size;
}
/**
 * @record
 */
export function PlyrTrack() { }
if (false) {
    /**
     * Indicates how the text track is meant to be used
     * @type {?}
     */
    PlyrTrack.prototype.kind;
    /**
     * Indicates a user-readable title for the track
     * @type {?}
     */
    PlyrTrack.prototype.label;
    /**
     * The language of the track text data. It must be a valid BCP 47 language tag. If the kind attribute is set to subtitles, then srclang must be defined.
     * @type {?|undefined}
     */
    PlyrTrack.prototype.srcLang;
    /**
     * The URL of the track (.vtt file).
     * @type {?}
     */
    PlyrTrack.prototype.src;
    /** @type {?|undefined} */
    PlyrTrack.prototype.default;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGx5ci50eXBlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvbWVkaWEvIiwic291cmNlcyI6WyJwbHlyLnR5cGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBR0EscUNBMkJDOzs7Ozs7SUF2QkMsK0JBQW9COzs7OztJQUtwQixnQ0FBZTs7Ozs7SUFLZixrQ0FBc0I7Ozs7O0lBS3RCLGlDQUFnQjs7Ozs7OztJQU9oQixpQ0FBcUI7Ozs7O0FBR3ZCLGdDQVdDOzs7Ozs7SUFQQyx5QkFBWTs7Ozs7SUFJWiwwQkFBYzs7SUFDZCw4QkFBd0I7O0lBQ3hCLDBCQUFjOzs7OztBQUtoQiwrQkFtQkM7Ozs7OztJQWZDLHlCQUFvQjs7Ozs7SUFJcEIsMEJBQWM7Ozs7O0lBSWQsNEJBQWlCOzs7OztJQUlqQix3QkFBWTs7SUFFWiw0QkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgdHlwZSBQbHlyTWVkaWFUeXBlID0gJ2F1ZGlvJyB8ICd2aWRlbyc7XG5leHBvcnQgdHlwZSBQbHlyUHJvdmlkZXIgPSAnaHRtbDUnIHwgJ3lvdXR1YmUnIHwgJ3ZpbWVvJztcblxuZXhwb3J0IGludGVyZmFjZSBQbHlyTWVkaWFTb3VyY2Uge1xuICAvKipcbiAgICogTm90ZTogWW91VHViZSBhbmQgVmltZW8gYXJlIGN1cnJlbnRseSBub3Qgc3VwcG9ydGVkIGFzIGF1ZGlvIHNvdXJjZXMuXG4gICAqL1xuICB0eXBlOiBQbHlyTWVkaWFUeXBlO1xuXG4gIC8qKlxuICAgKiBUaXRsZSBvZiB0aGUgbmV3IG1lZGlhLiBVc2VkIGZvciB0aGUgYXJpYS1sYWJlbCBhdHRyaWJ1dGUgb24gdGhlIHBsYXkgYnV0dG9uLCBhbmQgb3V0ZXIgY29udGFpbmVyLiBZb3VUdWJlIGFuZCBWaW1lbyBhcmUgcG9wdWxhdGVkIGF1dG9tYXRpY2FsbHkuXG4gICAqL1xuICB0aXRsZT86IHN0cmluZztcblxuICAvKipcbiAgICogVGhpcyBpcyBhbiBhcnJheSBvZiBzb3VyY2VzLiBGb3IgSFRNTDUgbWVkaWEsIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgb2JqZWN0IGFyZSBtYXBwZWQgZGlyZWN0bHkgdG8gSFRNTCBhdHRyaWJ1dGVzIHNvIG1vcmUgY2FuIGJlIGFkZGVkIHRvIHRoZSBvYmplY3QgaWYgcmVxdWlyZWQuXG4gICAqL1xuICBzb3VyY2VzOiBQbHlyU291cmNlW107XG5cbiAgLyoqXG4gICAqIFRoZSBVUkwgZm9yIHRoZSBwb3N0ZXIgaW1hZ2UgKEhUTUw1IHZpZGVvIG9ubHkpLlxuICAgKi9cbiAgcG9zdGVyPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBbiBhcnJheSBvZiB0cmFjayBvYmplY3RzLiBFYWNoIGVsZW1lbnQgaW4gdGhlIGFycmF5IGlzIG1hcHBlZCBkaXJlY3RseSB0byBhIHRyYWNrIGVsZW1lbnQgYW5kIGFueSBrZXlzIG1hcHBlZCBkaXJlY3RseSB0byBIVE1MIGF0dHJpYnV0ZXMgc28gYXMgaW4gdGhlIGV4YW1wbGUgYWJvdmUsXG4gICAqIGl0IHdpbGwgcmVuZGVyIGFzIDx0cmFjayBraW5kPVwiY2FwdGlvbnNcIiBsYWJlbD1cIkVuZ2xpc2hcIiBzcmNsYW5nPVwiZW5cIiBzcmM9XCJodHRwczovL2Nkbi5zZWx6LmNvbS9wbHlyLzEuMC9leGFtcGxlX2NhcHRpb25zX2VuLnZ0dFwiIGRlZmF1bHQ+IGFuZCBzaW1pbGFyIGZvciB0aGUgRnJlbmNoIHZlcnNpb24uXG4gICAqIEJvb2xlYW5zIGFyZSBjb252ZXJ0ZWQgdG8gSFRNTDUgdmFsdWUtbGVzcyBhdHRyaWJ1dGVzLlxuICAgKi9cbiAgdHJhY2tzPzogUGx5clRyYWNrW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGx5clNvdXJjZSB7XG4gIC8qKlxuICAgKiBUaGUgVVJMIG9mIHRoZSBtZWRpYSBmaWxlIChvciBZb3VUdWJlL1ZpbWVvIFVSTCkuXG4gICAqL1xuICBzcmM6IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBNSU1FIHR5cGUgb2YgdGhlIG1lZGlhIGZpbGUgKGlmIEhUTUw1KS5cbiAgICovXG4gIHR5cGU/OiBzdHJpbmc7XG4gIHByb3ZpZGVyPzogUGx5clByb3ZpZGVyO1xuICBzaXplPzogbnVtYmVyO1xufVxuXG5leHBvcnQgdHlwZSBQbHlyVHJhY2tLaW5kID0gJ3N1YnRpdGxlcycgfCAnY2FwdGlvbnMnIHwgJ2Rlc2NyaXB0aW9ucycgfCAnY2hhcHRlcnMnIHwgJ21ldGFkYXRhJztcblxuZXhwb3J0IGludGVyZmFjZSBQbHlyVHJhY2sge1xuICAvKipcbiAgICogSW5kaWNhdGVzIGhvdyB0aGUgdGV4dCB0cmFjayBpcyBtZWFudCB0byBiZSB1c2VkXG4gICAqL1xuICBraW5kOiBQbHlyVHJhY2tLaW5kO1xuICAvKipcbiAgICogSW5kaWNhdGVzIGEgdXNlci1yZWFkYWJsZSB0aXRsZSBmb3IgdGhlIHRyYWNrXG4gICAqL1xuICBsYWJlbDogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIGxhbmd1YWdlIG9mIHRoZSB0cmFjayB0ZXh0IGRhdGEuIEl0IG11c3QgYmUgYSB2YWxpZCBCQ1AgNDcgbGFuZ3VhZ2UgdGFnLiBJZiB0aGUga2luZCBhdHRyaWJ1dGUgaXMgc2V0IHRvIHN1YnRpdGxlcywgdGhlbiBzcmNsYW5nIG11c3QgYmUgZGVmaW5lZC5cbiAgICovXG4gIHNyY0xhbmc/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgVVJMIG9mIHRoZSB0cmFjayAoLnZ0dCBmaWxlKS5cbiAgICovXG4gIHNyYzogc3RyaW5nO1xuXG4gIGRlZmF1bHQ/OiBib29sZWFuO1xufVxuIl19