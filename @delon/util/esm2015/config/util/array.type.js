/**
 * @fileoverview added by tsickle
 * Generated from: util/array.type.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function AlainUtilArrayConfig() { }
if (false) {
    /**
     * 深度项名，默认：`'deep'`
     * @type {?|undefined}
     */
    AlainUtilArrayConfig.prototype.deepMapName;
    /**
     * 扁平后数组的父数据项名，默认：`'parent'`
     * @type {?|undefined}
     */
    AlainUtilArrayConfig.prototype.parentMapName;
    /**
     * 编号项名，默认：`'id'`
     * @type {?|undefined}
     */
    AlainUtilArrayConfig.prototype.idMapName;
    /**
     * 父编号项名，默认：`'parent_id'`
     * @type {?|undefined}
     */
    AlainUtilArrayConfig.prototype.parentIdMapName;
    /**
     * 源数据子项名，默认：`'children'`
     * @type {?|undefined}
     */
    AlainUtilArrayConfig.prototype.childrenMapName;
    /**
     * 标题项名，默认：`'title'`
     * @type {?|undefined}
     */
    AlainUtilArrayConfig.prototype.titleMapName;
    /**
     * 节点 Checkbox 是否选中项名，默认：`'checked'`
     * @type {?|undefined}
     */
    AlainUtilArrayConfig.prototype.checkedMapname;
    /**
     * 节点本身是否选中项名，默认：`'selected'`
     * @type {?|undefined}
     */
    AlainUtilArrayConfig.prototype.selectedMapname;
    /**
     * 节点是否展开(叶子节点无效)项名，默认：`'expanded'`
     * @type {?|undefined}
     */
    AlainUtilArrayConfig.prototype.expandedMapname;
    /**
     * 设置是否禁用节点(不可进行任何操作)项名，默认：`'disabled'`
     * @type {?|undefined}
     */
    AlainUtilArrayConfig.prototype.disabledMapname;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXkudHlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3V0aWwvY29uZmlnL3V0aWwvYXJyYXkudHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLDBDQXFCQzs7Ozs7O0lBbkJDLDJDQUFxQjs7Ozs7SUFFckIsNkNBQXVCOzs7OztJQUV2Qix5Q0FBbUI7Ozs7O0lBRW5CLCtDQUF5Qjs7Ozs7SUFFekIsK0NBQXlCOzs7OztJQUV6Qiw0Q0FBc0I7Ozs7O0lBRXRCLDhDQUF3Qjs7Ozs7SUFFeEIsK0NBQXlCOzs7OztJQUV6QiwrQ0FBeUI7Ozs7O0lBRXpCLCtDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgQWxhaW5VdGlsQXJyYXlDb25maWcge1xuICAvKiog5rex5bqm6aG55ZCN77yM6buY6K6k77yaYCdkZWVwJ2AgKi9cbiAgZGVlcE1hcE5hbWU/OiBzdHJpbmc7XG4gIC8qKiDmiYHlubPlkI7mlbDnu4TnmoTniLbmlbDmja7pobnlkI3vvIzpu5jorqTvvJpgJ3BhcmVudCdgICovXG4gIHBhcmVudE1hcE5hbWU/OiBzdHJpbmc7XG4gIC8qKiDnvJblj7fpobnlkI3vvIzpu5jorqTvvJpgJ2lkJ2AgKi9cbiAgaWRNYXBOYW1lPzogc3RyaW5nO1xuICAvKiog54i257yW5Y+36aG55ZCN77yM6buY6K6k77yaYCdwYXJlbnRfaWQnYCAqL1xuICBwYXJlbnRJZE1hcE5hbWU/OiBzdHJpbmc7XG4gIC8qKiDmupDmlbDmja7lrZDpobnlkI3vvIzpu5jorqTvvJpgJ2NoaWxkcmVuJ2AgKi9cbiAgY2hpbGRyZW5NYXBOYW1lPzogc3RyaW5nO1xuICAvKiog5qCH6aKY6aG55ZCN77yM6buY6K6k77yaYCd0aXRsZSdgICovXG4gIHRpdGxlTWFwTmFtZT86IHN0cmluZztcbiAgLyoqIOiKgueCuSBDaGVja2JveCDmmK/lkKbpgInkuK3pobnlkI3vvIzpu5jorqTvvJpgJ2NoZWNrZWQnYCAqL1xuICBjaGVja2VkTWFwbmFtZT86IHN0cmluZztcbiAgLyoqIOiKgueCueacrOi6q+aYr+WQpumAieS4remhueWQje+8jOm7mOiupO+8mmAnc2VsZWN0ZWQnYCAqL1xuICBzZWxlY3RlZE1hcG5hbWU/OiBzdHJpbmc7XG4gIC8qKiDoioLngrnmmK/lkKblsZXlvIAo5Y+25a2Q6IqC54K55peg5pWIKemhueWQje+8jOm7mOiupO+8mmAnZXhwYW5kZWQnYCAqL1xuICBleHBhbmRlZE1hcG5hbWU/OiBzdHJpbmc7XG4gIC8qKiDorr7nva7mmK/lkKbnpoHnlKjoioLngrko5LiN5Y+v6L+b6KGM5Lu75L2V5pON5L2cKemhueWQje+8jOm7mOiupO+8mmAnZGlzYWJsZWQnYCAqL1xuICBkaXNhYmxlZE1hcG5hbWU/OiBzdHJpbmc7XG59XG4iXX0=