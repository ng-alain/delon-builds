/**
 * @fileoverview added by tsickle
 * Generated from: plyr.types.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGx5ci50eXBlcy5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS92c3RzL3dvcmsvMS9zL3BhY2thZ2VzL2FiYy9tZWRpYS8iLCJzb3VyY2VzIjpbInBseXIudHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFHQSxxQ0EyQkM7Ozs7OztJQXZCQywrQkFBb0I7Ozs7O0lBS3BCLGdDQUFlOzs7OztJQUtmLGtDQUFzQjs7Ozs7SUFLdEIsaUNBQWdCOzs7Ozs7O0lBT2hCLGlDQUFxQjs7Ozs7QUFHdkIsZ0NBV0M7Ozs7OztJQVBDLHlCQUFZOzs7OztJQUlaLDBCQUFjOztJQUNkLDhCQUF3Qjs7SUFDeEIsMEJBQWM7Ozs7O0FBS2hCLCtCQW1CQzs7Ozs7O0lBZkMseUJBQW9COzs7OztJQUlwQiwwQkFBYzs7Ozs7SUFJZCw0QkFBaUI7Ozs7O0lBSWpCLHdCQUFZOztJQUVaLDRCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB0eXBlIFBseXJNZWRpYVR5cGUgPSAnYXVkaW8nIHwgJ3ZpZGVvJztcbmV4cG9ydCB0eXBlIFBseXJQcm92aWRlciA9ICdodG1sNScgfCAneW91dHViZScgfCAndmltZW8nO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBseXJNZWRpYVNvdXJjZSB7XG4gIC8qKlxuICAgKiBOb3RlOiBZb3VUdWJlIGFuZCBWaW1lbyBhcmUgY3VycmVudGx5IG5vdCBzdXBwb3J0ZWQgYXMgYXVkaW8gc291cmNlcy5cbiAgICovXG4gIHR5cGU6IFBseXJNZWRpYVR5cGU7XG5cbiAgLyoqXG4gICAqIFRpdGxlIG9mIHRoZSBuZXcgbWVkaWEuIFVzZWQgZm9yIHRoZSBhcmlhLWxhYmVsIGF0dHJpYnV0ZSBvbiB0aGUgcGxheSBidXR0b24sIGFuZCBvdXRlciBjb250YWluZXIuIFlvdVR1YmUgYW5kIFZpbWVvIGFyZSBwb3B1bGF0ZWQgYXV0b21hdGljYWxseS5cbiAgICovXG4gIHRpdGxlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGlzIGlzIGFuIGFycmF5IG9mIHNvdXJjZXMuIEZvciBIVE1MNSBtZWRpYSwgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBvYmplY3QgYXJlIG1hcHBlZCBkaXJlY3RseSB0byBIVE1MIGF0dHJpYnV0ZXMgc28gbW9yZSBjYW4gYmUgYWRkZWQgdG8gdGhlIG9iamVjdCBpZiByZXF1aXJlZC5cbiAgICovXG4gIHNvdXJjZXM6IFBseXJTb3VyY2VbXTtcblxuICAvKipcbiAgICogVGhlIFVSTCBmb3IgdGhlIHBvc3RlciBpbWFnZSAoSFRNTDUgdmlkZW8gb25seSkuXG4gICAqL1xuICBwb3N0ZXI/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEFuIGFycmF5IG9mIHRyYWNrIG9iamVjdHMuIEVhY2ggZWxlbWVudCBpbiB0aGUgYXJyYXkgaXMgbWFwcGVkIGRpcmVjdGx5IHRvIGEgdHJhY2sgZWxlbWVudCBhbmQgYW55IGtleXMgbWFwcGVkIGRpcmVjdGx5IHRvIEhUTUwgYXR0cmlidXRlcyBzbyBhcyBpbiB0aGUgZXhhbXBsZSBhYm92ZSxcbiAgICogaXQgd2lsbCByZW5kZXIgYXMgPHRyYWNrIGtpbmQ9XCJjYXB0aW9uc1wiIGxhYmVsPVwiRW5nbGlzaFwiIHNyY2xhbmc9XCJlblwiIHNyYz1cImh0dHBzOi8vY2RuLnNlbHouY29tL3BseXIvMS4wL2V4YW1wbGVfY2FwdGlvbnNfZW4udnR0XCIgZGVmYXVsdD4gYW5kIHNpbWlsYXIgZm9yIHRoZSBGcmVuY2ggdmVyc2lvbi5cbiAgICogQm9vbGVhbnMgYXJlIGNvbnZlcnRlZCB0byBIVE1MNSB2YWx1ZS1sZXNzIGF0dHJpYnV0ZXMuXG4gICAqL1xuICB0cmFja3M/OiBQbHlyVHJhY2tbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQbHlyU291cmNlIHtcbiAgLyoqXG4gICAqIFRoZSBVUkwgb2YgdGhlIG1lZGlhIGZpbGUgKG9yIFlvdVR1YmUvVmltZW8gVVJMKS5cbiAgICovXG4gIHNyYzogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIE1JTUUgdHlwZSBvZiB0aGUgbWVkaWEgZmlsZSAoaWYgSFRNTDUpLlxuICAgKi9cbiAgdHlwZT86IHN0cmluZztcbiAgcHJvdmlkZXI/OiBQbHlyUHJvdmlkZXI7XG4gIHNpemU/OiBudW1iZXI7XG59XG5cbmV4cG9ydCB0eXBlIFBseXJUcmFja0tpbmQgPSAnc3VidGl0bGVzJyB8ICdjYXB0aW9ucycgfCAnZGVzY3JpcHRpb25zJyB8ICdjaGFwdGVycycgfCAnbWV0YWRhdGEnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBseXJUcmFjayB7XG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgaG93IHRoZSB0ZXh0IHRyYWNrIGlzIG1lYW50IHRvIGJlIHVzZWRcbiAgICovXG4gIGtpbmQ6IFBseXJUcmFja0tpbmQ7XG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgYSB1c2VyLXJlYWRhYmxlIHRpdGxlIGZvciB0aGUgdHJhY2tcbiAgICovXG4gIGxhYmVsOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgbGFuZ3VhZ2Ugb2YgdGhlIHRyYWNrIHRleHQgZGF0YS4gSXQgbXVzdCBiZSBhIHZhbGlkIEJDUCA0NyBsYW5ndWFnZSB0YWcuIElmIHRoZSBraW5kIGF0dHJpYnV0ZSBpcyBzZXQgdG8gc3VidGl0bGVzLCB0aGVuIHNyY2xhbmcgbXVzdCBiZSBkZWZpbmVkLlxuICAgKi9cbiAgc3JjTGFuZz86IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBVUkwgb2YgdGhlIHRyYWNrICgudnR0IGZpbGUpLlxuICAgKi9cbiAgc3JjOiBzdHJpbmc7XG5cbiAgZGVmYXVsdD86IGJvb2xlYW47XG59XG4iXX0=