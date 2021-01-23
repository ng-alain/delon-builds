/**
 * @fileoverview added by tsickle
 * Generated from: src/services/menu/interface.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function MenuIcon() { }
if (false) {
    /**
     * Type for icon
     * @type {?}
     */
    MenuIcon.prototype.type;
    /**
     * Value for the icon, can be set Class Name, nz-icon of `nzType`, image
     * @type {?|undefined}
     */
    MenuIcon.prototype.value;
    /**
     * Type of the ant design icon, default: `outline`
     * @type {?|undefined}
     */
    MenuIcon.prototype.theme;
    /**
     * Rotate icon with animation, default: `false`
     * @type {?|undefined}
     */
    MenuIcon.prototype.spin;
    /**
     * Only support the two-tone icon. Specific the primary color
     * @type {?|undefined}
     */
    MenuIcon.prototype.twoToneColor;
    /**
     * Type of the icon from iconfont
     * @type {?|undefined}
     */
    MenuIcon.prototype.iconfont;
    /**
     * Rotate degrees
     * @type {?|undefined}
     */
    MenuIcon.prototype.rotate;
}
/**
 * @record
 */
export function Menu() { }
if (false) {
    /**
     * Text of menu item, can be choose one of  `text` or `i18n` (Support HTML)
     * @type {?|undefined}
     */
    Menu.prototype.text;
    /**
     * I18n key of menu item, can be choose one of  `text` or `i18n` (Support HTML)
     * @type {?|undefined}
     */
    Menu.prototype.i18n;
    /**
     * Whether to display the group name, default: `true`
     * @type {?|undefined}
     */
    Menu.prototype.group;
    /**
     * Routing for the menu item, can be choose one of `link` or `externalLink`
     * @type {?|undefined}
     */
    Menu.prototype.link;
    /**
     * External link for the menu item, can be choose one of `link` or `externalLink`
     * @type {?|undefined}
     */
    Menu.prototype.externalLink;
    /**
     * Specifies `externalLink` where to display the linked URL
     * @type {?|undefined}
     */
    Menu.prototype.target;
    /**
     * Icon for the menu item, only valid for the first level menu
     * @type {?|undefined}
     */
    Menu.prototype.icon;
    /**
     * Badget for the menu item when `group` is `true`
     * @type {?|undefined}
     */
    Menu.prototype.badge;
    /**
     * Whether to display a red dot instead of `badge` value
     * @type {?|undefined}
     */
    Menu.prototype.badgeDot;
    /**
     * Badge [color](https://ng.ant.design/components/badge/en#nz-badge)
     * @type {?|undefined}
     */
    Menu.prototype.badgeStatus;
    /**
     * Whether disable for the menu item
     * @type {?|undefined}
     */
    Menu.prototype.disabled;
    /**
     * Whether hidden for the menu item
     * @type {?|undefined}
     */
    Menu.prototype.hide;
    /**
     * Whether hide in breadcrumbs, which are valid when the `page-header` component automatically generates breadcrumbs
     * @type {?|undefined}
     */
    Menu.prototype.hideInBreadcrumb;
    /**
     * ACL configuration, it's equivalent to `ACLService.can(roleOrAbility: ACLCanType)` parameter value
     * @type {?|undefined}
     */
    Menu.prototype.acl;
    /**
     * Whether shortcut menu item
     * @type {?|undefined}
     */
    Menu.prototype.shortcut;
    /**
     * Wheter shortcut menu root node
     * @type {?|undefined}
     */
    Menu.prototype.shortcutRoot;
    /**
     * Whether to allow reuse, need to cooperate with the `reuse-tab` component
     * @type {?|undefined}
     */
    Menu.prototype.reuse;
    /**
     * Whether to expand, when `checkStrictly` is valid in `sidebar-nav` component
     * @type {?|undefined}
     */
    Menu.prototype.open;
    /**
     * Unique identifier of the menu item, can be used in `getItem`,` setItem` to update a menu
     * @type {?|undefined}
     */
    Menu.prototype.key;
    /**
     * Children menu of menu item
     * @type {?|undefined}
     */
    Menu.prototype.children;
    /* Skipping unhandled member: [key: string]: any;*/
}
/**
 * \@inner Just only inner type
 * @record
 */
export function MenuInner() { }
if (false) {
    /** @type {?|undefined} */
    MenuInner.prototype._id;
    /** @type {?|undefined} */
    MenuInner.prototype._parent;
    /** @type {?|undefined} */
    MenuInner.prototype._depth;
    /** @type {?|undefined} */
    MenuInner.prototype._hidden;
    /** @type {?|undefined} */
    MenuInner.prototype._selected;
    /** @type {?|undefined} */
    MenuInner.prototype._open;
    /** @type {?|undefined} */
    MenuInner.prototype._aclResult;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdGhlbWUvc3JjL3NlcnZpY2VzL21lbnUvaW50ZXJmYWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsOEJBZUM7Ozs7OztJQWJDLHdCQUE0Qzs7Ozs7SUFFNUMseUJBQWU7Ozs7O0lBRWYseUJBQXVDOzs7OztJQUV2Qyx3QkFBZTs7Ozs7SUFFZixnQ0FBc0I7Ozs7O0lBRXRCLDRCQUFrQjs7Ozs7SUFFbEIsMEJBQWdCOzs7OztBQUdsQiwwQkFvRUM7Ozs7OztJQWpFQyxvQkFBYzs7Ozs7SUFFZCxvQkFBYzs7Ozs7SUFFZCxxQkFBZ0I7Ozs7O0lBRWhCLG9CQUFjOzs7OztJQUVkLDRCQUFzQjs7Ozs7SUFFdEIsc0JBQWlEOzs7OztJQUVqRCxvQkFBZ0M7Ozs7O0lBRWhDLHFCQUFlOzs7OztJQUVmLHdCQUFtQjs7Ozs7SUFFbkIsMkJBQXFCOzs7OztJQUVyQix3QkFBbUI7Ozs7O0lBRW5CLG9CQUFlOzs7OztJQUVmLGdDQUEyQjs7Ozs7SUFFM0IsbUJBMEJNOzs7OztJQUVOLHdCQUFtQjs7Ozs7SUFFbkIsNEJBQXVCOzs7OztJQUV2QixxQkFBZ0I7Ozs7O0lBRWhCLG9CQUFlOzs7OztJQUVmLG1CQUFhOzs7OztJQUViLHdCQUFrQjs7Ozs7OztBQUlwQiwrQkFRQzs7O0lBUEMsd0JBQWE7O0lBQ2IsNEJBQXNCOztJQUN0QiwyQkFBZ0I7O0lBQ2hCLDRCQUFrQjs7SUFDbEIsOEJBQW9COztJQUNwQiwwQkFBZ0I7O0lBQ2hCLCtCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgTWVudUljb24ge1xuICAvKiogVHlwZSBmb3IgaWNvbiAqL1xuICB0eXBlOiAnY2xhc3MnIHwgJ2ljb24nIHwgJ2ljb25mb250JyB8ICdpbWcnO1xuICAvKiogVmFsdWUgZm9yIHRoZSBpY29uLCBjYW4gYmUgc2V0IENsYXNzIE5hbWUsIG56LWljb24gb2YgYG56VHlwZWAsIGltYWdlICovXG4gIHZhbHVlPzogc3RyaW5nO1xuICAvKiogVHlwZSBvZiB0aGUgYW50IGRlc2lnbiBpY29uLCBkZWZhdWx0OiBgb3V0bGluZWAgKi9cbiAgdGhlbWU/OiAnb3V0bGluZScgfCAndHdvdG9uZScgfCAnZmlsbCc7XG4gIC8qKiBSb3RhdGUgaWNvbiB3aXRoIGFuaW1hdGlvbiwgZGVmYXVsdDogYGZhbHNlYCAqL1xuICBzcGluPzogYm9vbGVhbjtcbiAgLyoqIE9ubHkgc3VwcG9ydCB0aGUgdHdvLXRvbmUgaWNvbi4gU3BlY2lmaWMgdGhlIHByaW1hcnkgY29sb3IgKi9cbiAgdHdvVG9uZUNvbG9yPzogc3RyaW5nO1xuICAvKiogVHlwZSBvZiB0aGUgaWNvbiBmcm9tIGljb25mb250ICovXG4gIGljb25mb250Pzogc3RyaW5nO1xuICAvKiogUm90YXRlIGRlZ3JlZXMgKi9cbiAgcm90YXRlPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1lbnUge1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG4gIC8qKiBUZXh0IG9mIG1lbnUgaXRlbSwgY2FuIGJlIGNob29zZSBvbmUgb2YgIGB0ZXh0YCBvciBgaTE4bmAgKFN1cHBvcnQgSFRNTCkgKi9cbiAgdGV4dD86IHN0cmluZztcbiAgLyoqIEkxOG4ga2V5IG9mIG1lbnUgaXRlbSwgY2FuIGJlIGNob29zZSBvbmUgb2YgIGB0ZXh0YCBvciBgaTE4bmAgKFN1cHBvcnQgSFRNTCkgKi9cbiAgaTE4bj86IHN0cmluZztcbiAgLyoqIFdoZXRoZXIgdG8gZGlzcGxheSB0aGUgZ3JvdXAgbmFtZSwgZGVmYXVsdDogYHRydWVgICovXG4gIGdyb3VwPzogYm9vbGVhbjtcbiAgLyoqIFJvdXRpbmcgZm9yIHRoZSBtZW51IGl0ZW0sIGNhbiBiZSBjaG9vc2Ugb25lIG9mIGBsaW5rYCBvciBgZXh0ZXJuYWxMaW5rYCAqL1xuICBsaW5rPzogc3RyaW5nO1xuICAvKiogRXh0ZXJuYWwgbGluayBmb3IgdGhlIG1lbnUgaXRlbSwgY2FuIGJlIGNob29zZSBvbmUgb2YgYGxpbmtgIG9yIGBleHRlcm5hbExpbmtgICovXG4gIGV4dGVybmFsTGluaz86IHN0cmluZztcbiAgLyoqIFNwZWNpZmllcyBgZXh0ZXJuYWxMaW5rYCB3aGVyZSB0byBkaXNwbGF5IHRoZSBsaW5rZWQgVVJMICovXG4gIHRhcmdldD86ICdfYmxhbmsnIHwgJ19zZWxmJyB8ICdfcGFyZW50JyB8ICdfdG9wJztcbiAgLyoqIEljb24gZm9yIHRoZSBtZW51IGl0ZW0sIG9ubHkgdmFsaWQgZm9yIHRoZSBmaXJzdCBsZXZlbCBtZW51ICovXG4gIGljb24/OiBzdHJpbmcgfCBNZW51SWNvbiB8IG51bGw7XG4gIC8qKiBCYWRnZXQgZm9yIHRoZSBtZW51IGl0ZW0gd2hlbiBgZ3JvdXBgIGlzIGB0cnVlYCAqL1xuICBiYWRnZT86IG51bWJlcjtcbiAgLyoqIFdoZXRoZXIgdG8gZGlzcGxheSBhIHJlZCBkb3QgaW5zdGVhZCBvZiBgYmFkZ2VgIHZhbHVlICovXG4gIGJhZGdlRG90PzogYm9vbGVhbjtcbiAgLyoqIEJhZGdlIFtjb2xvcl0oaHR0cHM6Ly9uZy5hbnQuZGVzaWduL2NvbXBvbmVudHMvYmFkZ2UvZW4jbnotYmFkZ2UpICovXG4gIGJhZGdlU3RhdHVzPzogc3RyaW5nO1xuICAvKiogV2hldGhlciBkaXNhYmxlIGZvciB0aGUgbWVudSBpdGVtICovXG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgLyoqIFdoZXRoZXIgaGlkZGVuIGZvciB0aGUgbWVudSBpdGVtICovXG4gIGhpZGU/OiBib29sZWFuO1xuICAvKiogV2hldGhlciBoaWRlIGluIGJyZWFkY3J1bWJzLCB3aGljaCBhcmUgdmFsaWQgd2hlbiB0aGUgYHBhZ2UtaGVhZGVyYCBjb21wb25lbnQgYXV0b21hdGljYWxseSBnZW5lcmF0ZXMgYnJlYWRjcnVtYnMgKi9cbiAgaGlkZUluQnJlYWRjcnVtYj86IGJvb2xlYW47XG4gIC8qKiBBQ0wgY29uZmlndXJhdGlvbiwgaXQncyBlcXVpdmFsZW50IHRvIGBBQ0xTZXJ2aWNlLmNhbihyb2xlT3JBYmlsaXR5OiBBQ0xDYW5UeXBlKWAgcGFyYW1ldGVyIHZhbHVlICovXG4gIGFjbD86XG4gICAgfCBudW1iZXJcbiAgICB8IG51bWJlcltdXG4gICAgfCBzdHJpbmdcbiAgICB8IHN0cmluZ1tdXG4gICAgfCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDop5LoibJcbiAgICAgICAgICovXG4gICAgICAgIHJvbGU/OiBzdHJpbmdbXTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOadg+mZkOeCuVxuICAgICAgICAgKi9cbiAgICAgICAgYWJpbGl0eT86IG51bWJlcltdIHwgc3RyaW5nW107XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbGlkYXRlZCBhZ2FpbnN0LCBkZWZhdWx0OiBgb25lT2ZgXG4gICAgICAgICAqIC0gYGFsbE9mYCB0aGUgdmFsdWUgdmFsaWRhdGVzIGFnYWluc3QgYWxsIHRoZSByb2xlcyBvciBhYmlsaXRpZXNcbiAgICAgICAgICogLSBgb25lT2ZgIHRoZSB2YWx1ZSB2YWxpZGF0ZXMgYWdhaW5zdCBleGFjdGx5IG9uZSBvZiB0aGUgcm9sZXMgb3IgYWJpbGl0aWVzXG4gICAgICAgICAqL1xuICAgICAgICBtb2RlPzogJ2FsbE9mJyB8ICdvbmVPZic7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaYr+WQpuWPluWPje+8jOWNs+e7k+aenOS4uiBgdHJ1ZWAg5pe26KGo56S65pyq5o6I5p2DXG4gICAgICAgICAqL1xuICAgICAgICBleGNlcHQ/OiBib29sZWFuO1xuICAgICAgfTtcbiAgLyoqIFdoZXRoZXIgc2hvcnRjdXQgbWVudSBpdGVtICovXG4gIHNob3J0Y3V0PzogYm9vbGVhbjtcbiAgLyoqIFdoZXRlciBzaG9ydGN1dCBtZW51IHJvb3Qgbm9kZSAqL1xuICBzaG9ydGN1dFJvb3Q/OiBib29sZWFuO1xuICAvKiogV2hldGhlciB0byBhbGxvdyByZXVzZSwgbmVlZCB0byBjb29wZXJhdGUgd2l0aCB0aGUgYHJldXNlLXRhYmAgY29tcG9uZW50ICovXG4gIHJldXNlPzogYm9vbGVhbjtcbiAgLyoqIFdoZXRoZXIgdG8gZXhwYW5kLCB3aGVuIGBjaGVja1N0cmljdGx5YCBpcyB2YWxpZCBpbiBgc2lkZWJhci1uYXZgIGNvbXBvbmVudCAqL1xuICBvcGVuPzogYm9vbGVhbjtcbiAgLyoqIFVuaXF1ZSBpZGVudGlmaWVyIG9mIHRoZSBtZW51IGl0ZW0sIGNhbiBiZSB1c2VkIGluIGBnZXRJdGVtYCxgIHNldEl0ZW1gIHRvIHVwZGF0ZSBhIG1lbnUgKi9cbiAga2V5Pzogc3RyaW5nO1xuICAvKiogQ2hpbGRyZW4gbWVudSBvZiBtZW51IGl0ZW0gKi9cbiAgY2hpbGRyZW4/OiBNZW51W107XG59XG5cbi8qKiBAaW5uZXIgSnVzdCBvbmx5IGlubmVyIHR5cGUgKi9cbmV4cG9ydCBpbnRlcmZhY2UgTWVudUlubmVyIGV4dGVuZHMgTWVudSB7XG4gIF9pZD86IG51bWJlcjtcbiAgX3BhcmVudD86IE1lbnUgfCBudWxsO1xuICBfZGVwdGg/OiBudW1iZXI7XG4gIF9oaWRkZW4/OiBib29sZWFuO1xuICBfc2VsZWN0ZWQ/OiBib29sZWFuO1xuICBfb3Blbj86IGJvb2xlYW47XG4gIF9hY2xSZXN1bHQ/OiBib29sZWFuO1xufVxuIl19