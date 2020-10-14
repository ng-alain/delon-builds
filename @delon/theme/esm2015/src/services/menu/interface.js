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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3ZzdHMvd29yay8xL3MvcGFja2FnZXMvdGhlbWUvIiwic291cmNlcyI6WyJzcmMvc2VydmljZXMvbWVudS9pbnRlcmZhY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSw4QkFlQzs7Ozs7O0lBYkMsd0JBQTRDOzs7OztJQUU1Qyx5QkFBZTs7Ozs7SUFFZix5QkFBdUM7Ozs7O0lBRXZDLHdCQUFlOzs7OztJQUVmLGdDQUFzQjs7Ozs7SUFFdEIsNEJBQWtCOzs7OztJQUVsQiwwQkFBZ0I7Ozs7O0FBR2xCLDBCQXdEQzs7Ozs7O0lBckRDLG9CQUFjOzs7OztJQUVkLG9CQUFjOzs7OztJQUVkLHFCQUFnQjs7Ozs7SUFFaEIsb0JBQWM7Ozs7O0lBRWQsNEJBQXNCOzs7OztJQUV0QixzQkFBaUQ7Ozs7O0lBRWpELG9CQUFnQzs7Ozs7SUFFaEMscUJBQWU7Ozs7O0lBRWYsd0JBQW1COzs7OztJQUVuQiwyQkFBcUI7Ozs7O0lBRXJCLHdCQUFtQjs7Ozs7SUFFbkIsb0JBQWU7Ozs7O0lBRWYsZ0NBQTJCOzs7OztJQUUzQixtQkFBVTs7Ozs7SUFFVix3QkFBbUI7Ozs7O0lBRW5CLDRCQUF1Qjs7Ozs7SUFFdkIscUJBQWdCOzs7OztJQUVoQixvQkFBZTs7Ozs7SUFFZixtQkFBYTs7Ozs7SUFFYix3QkFBa0I7Ozs7O0lBRWxCLG1CQUFhOzs7OztJQUViLHVCQUFzQjs7Ozs7SUFFdEIsc0JBQWdCOzs7OztJQUVoQix1QkFBa0I7Ozs7O0lBRWxCLHlCQUFvQjs7Ozs7SUFFcEIscUJBQWdCOzs7OztJQUVoQiwwQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIE1lbnVJY29uIHtcbiAgLyoqIFR5cGUgZm9yIGljb24gKi9cbiAgdHlwZTogJ2NsYXNzJyB8ICdpY29uJyB8ICdpY29uZm9udCcgfCAnaW1nJztcbiAgLyoqIFZhbHVlIGZvciB0aGUgaWNvbiwgY2FuIGJlIHNldCBDbGFzcyBOYW1lLCBuei1pY29uIG9mIGBuelR5cGVgLCBpbWFnZSAqL1xuICB2YWx1ZT86IHN0cmluZztcbiAgLyoqIFR5cGUgb2YgdGhlIGFudCBkZXNpZ24gaWNvbiwgZGVmYXVsdDogYG91dGxpbmVgICovXG4gIHRoZW1lPzogJ291dGxpbmUnIHwgJ3R3b3RvbmUnIHwgJ2ZpbGwnO1xuICAvKiogUm90YXRlIGljb24gd2l0aCBhbmltYXRpb24sIGRlZmF1bHQ6IGBmYWxzZWAgKi9cbiAgc3Bpbj86IGJvb2xlYW47XG4gIC8qKiBPbmx5IHN1cHBvcnQgdGhlIHR3by10b25lIGljb24uIFNwZWNpZmljIHRoZSBwcmltYXJ5IGNvbG9yICovXG4gIHR3b1RvbmVDb2xvcj86IHN0cmluZztcbiAgLyoqIFR5cGUgb2YgdGhlIGljb24gZnJvbSBpY29uZm9udCAqL1xuICBpY29uZm9udD86IHN0cmluZztcbiAgLyoqIFJvdGF0ZSBkZWdyZWVzICovXG4gIHJvdGF0ZT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNZW51IHtcbiAgW2tleTogc3RyaW5nXTogYW55O1xuICAvKiogVGV4dCBvZiBtZW51IGl0ZW0sIGNhbiBiZSBjaG9vc2Ugb25lIG9mICBgdGV4dGAgb3IgYGkxOG5gIChTdXBwb3J0IEhUTUwpICovXG4gIHRleHQ/OiBzdHJpbmc7XG4gIC8qKiBJMThuIGtleSBvZiBtZW51IGl0ZW0sIGNhbiBiZSBjaG9vc2Ugb25lIG9mICBgdGV4dGAgb3IgYGkxOG5gIChTdXBwb3J0IEhUTUwpICovXG4gIGkxOG4/OiBzdHJpbmc7XG4gIC8qKiBXaGV0aGVyIHRvIGRpc3BsYXkgdGhlIGdyb3VwIG5hbWUsIGRlZmF1bHQ6IGB0cnVlYCAqL1xuICBncm91cD86IGJvb2xlYW47XG4gIC8qKiBSb3V0aW5nIGZvciB0aGUgbWVudSBpdGVtLCBjYW4gYmUgY2hvb3NlIG9uZSBvZiBgbGlua2Agb3IgYGV4dGVybmFsTGlua2AgKi9cbiAgbGluaz86IHN0cmluZztcbiAgLyoqIEV4dGVybmFsIGxpbmsgZm9yIHRoZSBtZW51IGl0ZW0sIGNhbiBiZSBjaG9vc2Ugb25lIG9mIGBsaW5rYCBvciBgZXh0ZXJuYWxMaW5rYCAqL1xuICBleHRlcm5hbExpbms/OiBzdHJpbmc7XG4gIC8qKiBTcGVjaWZpZXMgYGV4dGVybmFsTGlua2Agd2hlcmUgdG8gZGlzcGxheSB0aGUgbGlua2VkIFVSTCAqL1xuICB0YXJnZXQ/OiAnX2JsYW5rJyB8ICdfc2VsZicgfCAnX3BhcmVudCcgfCAnX3RvcCc7XG4gIC8qKiBJY29uIGZvciB0aGUgbWVudSBpdGVtLCBvbmx5IHZhbGlkIGZvciB0aGUgZmlyc3QgbGV2ZWwgbWVudSAqL1xuICBpY29uPzogc3RyaW5nIHwgTWVudUljb24gfCBudWxsO1xuICAvKiogQmFkZ2V0IGZvciB0aGUgbWVudSBpdGVtIHdoZW4gYGdyb3VwYCBpcyBgdHJ1ZWAgKi9cbiAgYmFkZ2U/OiBudW1iZXI7XG4gIC8qKiBXaGV0aGVyIHRvIGRpc3BsYXkgYSByZWQgZG90IGluc3RlYWQgb2YgYGJhZGdlYCB2YWx1ZSAqL1xuICBiYWRnZURvdD86IGJvb2xlYW47XG4gIC8qKiBCYWRnZSBbY29sb3JdKGh0dHBzOi8vbmcuYW50LmRlc2lnbi9jb21wb25lbnRzL2JhZGdlL2VuI256LWJhZGdlKSAqL1xuICBiYWRnZVN0YXR1cz86IHN0cmluZztcbiAgLyoqIFdoZXRoZXIgZGlzYWJsZSBmb3IgdGhlIG1lbnUgaXRlbSAqL1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIC8qKiBXaGV0aGVyIGhpZGRlbiBmb3IgdGhlIG1lbnUgaXRlbSAqL1xuICBoaWRlPzogYm9vbGVhbjtcbiAgLyoqIFdoZXRoZXIgaGlkZSBpbiBicmVhZGNydW1icywgd2hpY2ggYXJlIHZhbGlkIHdoZW4gdGhlIGBwYWdlLWhlYWRlcmAgY29tcG9uZW50IGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVzIGJyZWFkY3J1bWJzICovXG4gIGhpZGVJbkJyZWFkY3J1bWI/OiBib29sZWFuO1xuICAvKiogQUNMIGNvbmZpZ3VyYXRpb24sIGl0J3MgZXF1aXZhbGVudCB0byBgQUNMU2VydmljZS5jYW4ocm9sZU9yQWJpbGl0eTogQUNMQ2FuVHlwZSlgIHBhcmFtZXRlciB2YWx1ZSAqL1xuICBhY2w/OiBhbnk7XG4gIC8qKiBXaGV0aGVyIHNob3J0Y3V0IG1lbnUgaXRlbSAqL1xuICBzaG9ydGN1dD86IGJvb2xlYW47XG4gIC8qKiBXaGV0ZXIgc2hvcnRjdXQgbWVudSByb290IG5vZGUgKi9cbiAgc2hvcnRjdXRSb290PzogYm9vbGVhbjtcbiAgLyoqIFdoZXRoZXIgdG8gYWxsb3cgcmV1c2UsIG5lZWQgdG8gY29vcGVyYXRlIHdpdGggdGhlIGByZXVzZS10YWJgIGNvbXBvbmVudCAqL1xuICByZXVzZT86IGJvb2xlYW47XG4gIC8qKiBXaGV0aGVyIHRvIGV4cGFuZCwgd2hlbiBgY2hlY2tTdHJpY3RseWAgaXMgdmFsaWQgaW4gYHNpZGViYXItbmF2YCBjb21wb25lbnQgKi9cbiAgb3Blbj86IGJvb2xlYW47XG4gIC8qKiBVbmlxdWUgaWRlbnRpZmllciBvZiB0aGUgbWVudSBpdGVtLCBjYW4gYmUgdXNlZCBpbiBgZ2V0SXRlbWAsYCBzZXRJdGVtYCB0byB1cGRhdGUgYSBtZW51ICovXG4gIGtleT86IHN0cmluZztcbiAgLyoqIENoaWxkcmVuIG1lbnUgb2YgbWVudSBpdGVtICovXG4gIGNoaWxkcmVuPzogTWVudVtdO1xuICAvKiogQGlubmVyIE5vdCByZWNvbW1lbmRlZCAqL1xuICBfaWQ/OiBudW1iZXI7XG4gIC8qKiBAaW5uZXIgTm90IHJlY29tbWVuZGVkICovXG4gIF9wYXJlbnQ/OiBNZW51IHwgbnVsbDtcbiAgLyoqIEBpbm5lciBOb3QgcmVjb21tZW5kZWQgKi9cbiAgX2RlcHRoPzogbnVtYmVyO1xuICAvKiogQGlubmVyIE5vdCByZWNvbW1lbmRlZCAqL1xuICBfaGlkZGVuPzogYm9vbGVhbjtcbiAgLyoqIEBpbm5lciBOb3QgcmVjb21tZW5kZWQgKi9cbiAgX3NlbGVjdGVkPzogYm9vbGVhbjtcbiAgLyoqIEBpbm5lciBOb3QgcmVjb21tZW5kZWQgKi9cbiAgX29wZW4/OiBib29sZWFuO1xuICAvKiogQGlubmVyIE5vdCByZWNvbW1lbmRlZCAqL1xuICBfYWNsUmVzdWx0PzogYm9vbGVhbjtcbn1cbiJdfQ==