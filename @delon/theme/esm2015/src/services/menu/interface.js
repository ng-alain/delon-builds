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
    /**
     * \@inner Not recommended
     * @type {?|undefined}
     */
    Menu.prototype._id;
    /**
     * \@inner Not recommended
     * @type {?|undefined}
     */
    Menu.prototype._parent;
    /**
     * \@inner Not recommended
     * @type {?|undefined}
     */
    Menu.prototype._depth;
    /**
     * \@inner Not recommended
     * @type {?|undefined}
     */
    Menu.prototype._hidden;
    /**
     * \@inner Not recommended
     * @type {?|undefined}
     */
    Menu.prototype._selected;
    /**
     * \@inner Not recommended
     * @type {?|undefined}
     */
    Menu.prototype._open;
    /**
     * \@inner Not recommended
     * @type {?|undefined}
     */
    Menu.prototype._aclResult;
    /* Skipping unhandled member: [key: string]: any;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3ZzdHMvd29yay8xL3MvcGFja2FnZXMvdGhlbWUvIiwic291cmNlcyI6WyJzcmMvc2VydmljZXMvbWVudS9pbnRlcmZhY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSw4QkFlQzs7Ozs7O0lBYkMsd0JBQTRDOzs7OztJQUU1Qyx5QkFBZTs7Ozs7SUFFZix5QkFBdUM7Ozs7O0lBRXZDLHdCQUFlOzs7OztJQUVmLGdDQUFzQjs7Ozs7SUFFdEIsNEJBQWtCOzs7OztJQUVsQiwwQkFBZ0I7Ozs7O0FBR2xCLDBCQWtGQzs7Ozs7O0lBL0VDLG9CQUFjOzs7OztJQUVkLG9CQUFjOzs7OztJQUVkLHFCQUFnQjs7Ozs7SUFFaEIsb0JBQWM7Ozs7O0lBRWQsNEJBQXNCOzs7OztJQUV0QixzQkFBaUQ7Ozs7O0lBRWpELG9CQUFnQzs7Ozs7SUFFaEMscUJBQWU7Ozs7O0lBRWYsd0JBQW1COzs7OztJQUVuQiwyQkFBcUI7Ozs7O0lBRXJCLHdCQUFtQjs7Ozs7SUFFbkIsb0JBQWU7Ozs7O0lBRWYsZ0NBQTJCOzs7OztJQUUzQixtQkEwQk07Ozs7O0lBRU4sd0JBQW1COzs7OztJQUVuQiw0QkFBdUI7Ozs7O0lBRXZCLHFCQUFnQjs7Ozs7SUFFaEIsb0JBQWU7Ozs7O0lBRWYsbUJBQWE7Ozs7O0lBRWIsd0JBQWtCOzs7OztJQUVsQixtQkFBYTs7Ozs7SUFFYix1QkFBc0I7Ozs7O0lBRXRCLHNCQUFnQjs7Ozs7SUFFaEIsdUJBQWtCOzs7OztJQUVsQix5QkFBb0I7Ozs7O0lBRXBCLHFCQUFnQjs7Ozs7SUFFaEIsMEJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBNZW51SWNvbiB7XG4gIC8qKiBUeXBlIGZvciBpY29uICovXG4gIHR5cGU6ICdjbGFzcycgfCAnaWNvbicgfCAnaWNvbmZvbnQnIHwgJ2ltZyc7XG4gIC8qKiBWYWx1ZSBmb3IgdGhlIGljb24sIGNhbiBiZSBzZXQgQ2xhc3MgTmFtZSwgbnotaWNvbiBvZiBgbnpUeXBlYCwgaW1hZ2UgKi9cbiAgdmFsdWU/OiBzdHJpbmc7XG4gIC8qKiBUeXBlIG9mIHRoZSBhbnQgZGVzaWduIGljb24sIGRlZmF1bHQ6IGBvdXRsaW5lYCAqL1xuICB0aGVtZT86ICdvdXRsaW5lJyB8ICd0d290b25lJyB8ICdmaWxsJztcbiAgLyoqIFJvdGF0ZSBpY29uIHdpdGggYW5pbWF0aW9uLCBkZWZhdWx0OiBgZmFsc2VgICovXG4gIHNwaW4/OiBib29sZWFuO1xuICAvKiogT25seSBzdXBwb3J0IHRoZSB0d28tdG9uZSBpY29uLiBTcGVjaWZpYyB0aGUgcHJpbWFyeSBjb2xvciAqL1xuICB0d29Ub25lQ29sb3I/OiBzdHJpbmc7XG4gIC8qKiBUeXBlIG9mIHRoZSBpY29uIGZyb20gaWNvbmZvbnQgKi9cbiAgaWNvbmZvbnQ/OiBzdHJpbmc7XG4gIC8qKiBSb3RhdGUgZGVncmVlcyAqL1xuICByb3RhdGU/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWVudSB7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbiAgLyoqIFRleHQgb2YgbWVudSBpdGVtLCBjYW4gYmUgY2hvb3NlIG9uZSBvZiAgYHRleHRgIG9yIGBpMThuYCAoU3VwcG9ydCBIVE1MKSAqL1xuICB0ZXh0Pzogc3RyaW5nO1xuICAvKiogSTE4biBrZXkgb2YgbWVudSBpdGVtLCBjYW4gYmUgY2hvb3NlIG9uZSBvZiAgYHRleHRgIG9yIGBpMThuYCAoU3VwcG9ydCBIVE1MKSAqL1xuICBpMThuPzogc3RyaW5nO1xuICAvKiogV2hldGhlciB0byBkaXNwbGF5IHRoZSBncm91cCBuYW1lLCBkZWZhdWx0OiBgdHJ1ZWAgKi9cbiAgZ3JvdXA/OiBib29sZWFuO1xuICAvKiogUm91dGluZyBmb3IgdGhlIG1lbnUgaXRlbSwgY2FuIGJlIGNob29zZSBvbmUgb2YgYGxpbmtgIG9yIGBleHRlcm5hbExpbmtgICovXG4gIGxpbms/OiBzdHJpbmc7XG4gIC8qKiBFeHRlcm5hbCBsaW5rIGZvciB0aGUgbWVudSBpdGVtLCBjYW4gYmUgY2hvb3NlIG9uZSBvZiBgbGlua2Agb3IgYGV4dGVybmFsTGlua2AgKi9cbiAgZXh0ZXJuYWxMaW5rPzogc3RyaW5nO1xuICAvKiogU3BlY2lmaWVzIGBleHRlcm5hbExpbmtgIHdoZXJlIHRvIGRpc3BsYXkgdGhlIGxpbmtlZCBVUkwgKi9cbiAgdGFyZ2V0PzogJ19ibGFuaycgfCAnX3NlbGYnIHwgJ19wYXJlbnQnIHwgJ190b3AnO1xuICAvKiogSWNvbiBmb3IgdGhlIG1lbnUgaXRlbSwgb25seSB2YWxpZCBmb3IgdGhlIGZpcnN0IGxldmVsIG1lbnUgKi9cbiAgaWNvbj86IHN0cmluZyB8IE1lbnVJY29uIHwgbnVsbDtcbiAgLyoqIEJhZGdldCBmb3IgdGhlIG1lbnUgaXRlbSB3aGVuIGBncm91cGAgaXMgYHRydWVgICovXG4gIGJhZGdlPzogbnVtYmVyO1xuICAvKiogV2hldGhlciB0byBkaXNwbGF5IGEgcmVkIGRvdCBpbnN0ZWFkIG9mIGBiYWRnZWAgdmFsdWUgKi9cbiAgYmFkZ2VEb3Q/OiBib29sZWFuO1xuICAvKiogQmFkZ2UgW2NvbG9yXShodHRwczovL25nLmFudC5kZXNpZ24vY29tcG9uZW50cy9iYWRnZS9lbiNuei1iYWRnZSkgKi9cbiAgYmFkZ2VTdGF0dXM/OiBzdHJpbmc7XG4gIC8qKiBXaGV0aGVyIGRpc2FibGUgZm9yIHRoZSBtZW51IGl0ZW0gKi9cbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICAvKiogV2hldGhlciBoaWRkZW4gZm9yIHRoZSBtZW51IGl0ZW0gKi9cbiAgaGlkZT86IGJvb2xlYW47XG4gIC8qKiBXaGV0aGVyIGhpZGUgaW4gYnJlYWRjcnVtYnMsIHdoaWNoIGFyZSB2YWxpZCB3aGVuIHRoZSBgcGFnZS1oZWFkZXJgIGNvbXBvbmVudCBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlcyBicmVhZGNydW1icyAqL1xuICBoaWRlSW5CcmVhZGNydW1iPzogYm9vbGVhbjtcbiAgLyoqIEFDTCBjb25maWd1cmF0aW9uLCBpdCdzIGVxdWl2YWxlbnQgdG8gYEFDTFNlcnZpY2UuY2FuKHJvbGVPckFiaWxpdHk6IEFDTENhblR5cGUpYCBwYXJhbWV0ZXIgdmFsdWUgKi9cbiAgYWNsPzpcbiAgICB8IG51bWJlclxuICAgIHwgbnVtYmVyW11cbiAgICB8IHN0cmluZ1xuICAgIHwgc3RyaW5nW11cbiAgICB8IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOinkuiJslxuICAgICAgICAgKi9cbiAgICAgICAgcm9sZT86IHN0cmluZ1tdO1xuICAgICAgICAvKipcbiAgICAgICAgICog5p2D6ZmQ54K5XG4gICAgICAgICAqL1xuICAgICAgICBhYmlsaXR5PzogbnVtYmVyW10gfCBzdHJpbmdbXTtcblxuICAgICAgICAvKipcbiAgICAgICAgICog5qCh6aqM5qih5byP77yM6buY6K6k77yaYG9uZU9mYFxuICAgICAgICAgKiAtIGBhbGxPZmAg6KGo56S65b+F6aG75ruh6Laz5omA5pyJ6KeS6Imy5oiW5p2D6ZmQ54K55pWw57uE566X5pyJ5pWIXG4gICAgICAgICAqIC0gYG9uZU9mYCDooajnpLrlj6rpobvmu6HotrPop5LoibLmiJbmnYPpmZDngrnmlbDnu4TkuK3nmoTkuIDpobnnrpfmnInmlYhcbiAgICAgICAgICovXG4gICAgICAgIG1vZGU/OiAnYWxsT2YnIHwgJ29uZU9mJztcblxuICAgICAgICAvKipcbiAgICAgICAgICog5piv5ZCm5Y+W5Y+N77yM5Y2z57uT5p6c5Li6IGB0cnVlYCDml7booajnpLrmnKrmjojmnYNcbiAgICAgICAgICovXG4gICAgICAgIGV4Y2VwdD86IGJvb2xlYW47XG4gICAgICB9O1xuICAvKiogV2hldGhlciBzaG9ydGN1dCBtZW51IGl0ZW0gKi9cbiAgc2hvcnRjdXQ/OiBib29sZWFuO1xuICAvKiogV2hldGVyIHNob3J0Y3V0IG1lbnUgcm9vdCBub2RlICovXG4gIHNob3J0Y3V0Um9vdD86IGJvb2xlYW47XG4gIC8qKiBXaGV0aGVyIHRvIGFsbG93IHJldXNlLCBuZWVkIHRvIGNvb3BlcmF0ZSB3aXRoIHRoZSBgcmV1c2UtdGFiYCBjb21wb25lbnQgKi9cbiAgcmV1c2U/OiBib29sZWFuO1xuICAvKiogV2hldGhlciB0byBleHBhbmQsIHdoZW4gYGNoZWNrU3RyaWN0bHlgIGlzIHZhbGlkIGluIGBzaWRlYmFyLW5hdmAgY29tcG9uZW50ICovXG4gIG9wZW4/OiBib29sZWFuO1xuICAvKiogVW5pcXVlIGlkZW50aWZpZXIgb2YgdGhlIG1lbnUgaXRlbSwgY2FuIGJlIHVzZWQgaW4gYGdldEl0ZW1gLGAgc2V0SXRlbWAgdG8gdXBkYXRlIGEgbWVudSAqL1xuICBrZXk/OiBzdHJpbmc7XG4gIC8qKiBDaGlsZHJlbiBtZW51IG9mIG1lbnUgaXRlbSAqL1xuICBjaGlsZHJlbj86IE1lbnVbXTtcbiAgLyoqIEBpbm5lciBOb3QgcmVjb21tZW5kZWQgKi9cbiAgX2lkPzogbnVtYmVyO1xuICAvKiogQGlubmVyIE5vdCByZWNvbW1lbmRlZCAqL1xuICBfcGFyZW50PzogTWVudSB8IG51bGw7XG4gIC8qKiBAaW5uZXIgTm90IHJlY29tbWVuZGVkICovXG4gIF9kZXB0aD86IG51bWJlcjtcbiAgLyoqIEBpbm5lciBOb3QgcmVjb21tZW5kZWQgKi9cbiAgX2hpZGRlbj86IGJvb2xlYW47XG4gIC8qKiBAaW5uZXIgTm90IHJlY29tbWVuZGVkICovXG4gIF9zZWxlY3RlZD86IGJvb2xlYW47XG4gIC8qKiBAaW5uZXIgTm90IHJlY29tbWVuZGVkICovXG4gIF9vcGVuPzogYm9vbGVhbjtcbiAgLyoqIEBpbm5lciBOb3QgcmVjb21tZW5kZWQgKi9cbiAgX2FjbFJlc3VsdD86IGJvb2xlYW47XG59XG4iXX0=