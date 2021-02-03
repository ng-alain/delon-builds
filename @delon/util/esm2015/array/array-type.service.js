/**
 * @fileoverview added by tsickle
 * Generated from: array-type.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 * @template T
 */
export function ArrayServiceTreeToArrOptions() { }
if (false) {
    /**
     * 深度项名，默认：`'deep'`
     * @type {?|undefined}
     */
    ArrayServiceTreeToArrOptions.prototype.deepMapName;
    /**
     * 扁平后数组的父数据项名，默认：`'parent'`
     * @type {?|undefined}
     */
    ArrayServiceTreeToArrOptions.prototype.parentMapName;
    /**
     * 源数据子项名，默认：`'children'`
     * @type {?|undefined}
     */
    ArrayServiceTreeToArrOptions.prototype.childrenMapName;
    /**
     * 是否移除 `children` 节点，默认：`true`
     * @type {?|undefined}
     */
    ArrayServiceTreeToArrOptions.prototype.clearChildren;
    /**
     * 转换成数组结构时回调
     * @type {?|undefined}
     */
    ArrayServiceTreeToArrOptions.prototype.cb;
}
/**
 * @record
 * @template T
 */
export function ArrayServiceArrToTreeOptions() { }
if (false) {
    /**
     * 编号项名，默认：`'id'`
     * @type {?|undefined}
     */
    ArrayServiceArrToTreeOptions.prototype.idMapName;
    /**
     * 父编号项名，默认：`'parent_id'`
     * @type {?|undefined}
     */
    ArrayServiceArrToTreeOptions.prototype.parentIdMapName;
    /**
     * 根父编号值，默认会自动计算得到最合适的根父编号值，例如：
     * \@example
     * ```ts
     * const res = srv.arrToTree([
     *    { id: 2, parent_id: 'a', title: 'c1' },
     *    { id: 4, parent_id: 2, title: 't1' },
     *  ],
     *  { rootParentValue: 'a' });
     * ```
     * @type {?|undefined}
     */
    ArrayServiceArrToTreeOptions.prototype.rootParentIdValue;
    /**
     * 子项名，默认：`'children'`
     * @type {?|undefined}
     */
    ArrayServiceArrToTreeOptions.prototype.childrenMapName;
    /**
     * 转换成树数据时回调
     * @type {?|undefined}
     */
    ArrayServiceArrToTreeOptions.prototype.cb;
}
/**
 * @record
 * @template T
 */
export function ArrayServiceArrToTreeNodeOptions() { }
if (false) {
    /**
     * 编号项名，默认：`'id'`
     * @type {?|undefined}
     */
    ArrayServiceArrToTreeNodeOptions.prototype.idMapName;
    /**
     * 父编号项名，默认：`'parent_id'`
     * @type {?|undefined}
     */
    ArrayServiceArrToTreeNodeOptions.prototype.parentIdMapName;
    /**
     * 标题项名，默认：`'title'`
     * @type {?|undefined}
     */
    ArrayServiceArrToTreeNodeOptions.prototype.titleMapName;
    /**
     * 设置为叶子节点项名，若数据源不存在时自动根据 `children` 值决定是否为叶子节点，默认：`'isLeaf'`
     * @type {?|undefined}
     */
    ArrayServiceArrToTreeNodeOptions.prototype.isLeafMapName;
    /**
     * 节点 Checkbox 是否选中项名，默认：`'checked'`
     * @type {?|undefined}
     */
    ArrayServiceArrToTreeNodeOptions.prototype.checkedMapname;
    /**
     * 节点本身是否选中项名，默认：`'selected'`
     * @type {?|undefined}
     */
    ArrayServiceArrToTreeNodeOptions.prototype.selectedMapname;
    /**
     * 节点是否展开(叶子节点无效)项名，默认：`'expanded'`
     * @type {?|undefined}
     */
    ArrayServiceArrToTreeNodeOptions.prototype.expandedMapname;
    /**
     * 设置是否禁用节点(不可进行任何操作)项名，默认：`'disabled'`
     * @type {?|undefined}
     */
    ArrayServiceArrToTreeNodeOptions.prototype.disabledMapname;
    /**
     * 转换成树数据后，执行的递归回调
     * @type {?|undefined}
     */
    ArrayServiceArrToTreeNodeOptions.prototype.cb;
}
/**
 * @record
 */
export function ArrayServiceGetKeysByTreeNodeOptions() { }
if (false) {
    /**
     * 是否包含半选状态的值，默认：`true`
     * @type {?|undefined}
     */
    ArrayServiceGetKeysByTreeNodeOptions.prototype.includeHalfChecked;
    /**
     * 是否重新指定 `key` 键名，若不指定表示使用 `NzTreeNode.key` 值
     * @type {?|undefined}
     */
    ArrayServiceGetKeysByTreeNodeOptions.prototype.keyMapName;
    /**
     * 回调，返回一个值 `key` 值，优先级高于其他
     * @type {?|undefined}
     */
    ArrayServiceGetKeysByTreeNodeOptions.prototype.cb;
}
/**
 * @record
 */
export function ArrayServiceGroupByResult() { }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXktdHlwZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdXRpbC9hcnJheS9hcnJheS10eXBlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUEsa0RBV0M7Ozs7OztJQVRDLG1EQUFxQjs7Ozs7SUFFckIscURBQXVCOzs7OztJQUV2Qix1REFBeUI7Ozs7O0lBRXpCLHFEQUF3Qjs7Ozs7SUFFeEIsMENBQXVEOzs7Ozs7QUFHekQsa0RBcUJDOzs7Ozs7SUFuQkMsaURBQW1COzs7OztJQUVuQix1REFBeUI7Ozs7Ozs7Ozs7Ozs7SUFZekIseURBQXdCOzs7OztJQUV4Qix1REFBeUI7Ozs7O0lBRXpCLDBDQUF1Qjs7Ozs7O0FBR3pCLHNEQW1CQzs7Ozs7O0lBakJDLHFEQUFtQjs7Ozs7SUFFbkIsMkRBQXlCOzs7OztJQUV6Qix3REFBc0I7Ozs7O0lBRXRCLHlEQUF1Qjs7Ozs7SUFFdkIsMERBQXdCOzs7OztJQUV4QiwyREFBeUI7Ozs7O0lBRXpCLDJEQUF5Qjs7Ozs7SUFFekIsMkRBQXlCOzs7OztJQUV6Qiw4Q0FBdUQ7Ozs7O0FBR3pELDBEQU9DOzs7Ozs7SUFMQyxrRUFBNkI7Ozs7O0lBRTdCLDBEQUFvQjs7Ozs7SUFFcEIsa0RBQXdFOzs7OztBQUcxRSwrQ0FHQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE56VHJlZU5vZGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHJlZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXJyYXlTZXJ2aWNlVHJlZVRvQXJyT3B0aW9uczxUIGV4dGVuZHMgb2JqZWN0ID0gYW55PiB7XG4gIC8qKiDmt7HluqbpobnlkI3vvIzpu5jorqTvvJpgJ2RlZXAnYCAqL1xuICBkZWVwTWFwTmFtZT86IHN0cmluZztcbiAgLyoqIOaJgeW5s+WQjuaVsOe7hOeahOeItuaVsOaNrumhueWQje+8jOm7mOiupO+8mmAncGFyZW50J2AgKi9cbiAgcGFyZW50TWFwTmFtZT86IHN0cmluZztcbiAgLyoqIOa6kOaVsOaNruWtkOmhueWQje+8jOm7mOiupO+8mmAnY2hpbGRyZW4nYCAqL1xuICBjaGlsZHJlbk1hcE5hbWU/OiBzdHJpbmc7XG4gIC8qKiDmmK/lkKbnp7vpmaQgYGNoaWxkcmVuYCDoioLngrnvvIzpu5jorqTvvJpgdHJ1ZWAgKi9cbiAgY2xlYXJDaGlsZHJlbj86IGJvb2xlYW47XG4gIC8qKiDovazmjaLmiJDmlbDnu4Tnu5PmnoTml7blm57osIMgKi9cbiAgY2I/OiAoaXRlbTogVCwgcGFyZW50OiBUIHwgbnVsbCwgZGVlcDogbnVtYmVyKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFycmF5U2VydmljZUFyclRvVHJlZU9wdGlvbnM8VCBleHRlbmRzIG9iamVjdCA9IGFueT4ge1xuICAvKiog57yW5Y+36aG55ZCN77yM6buY6K6k77yaYCdpZCdgICovXG4gIGlkTWFwTmFtZT86IHN0cmluZztcbiAgLyoqIOeItue8luWPt+mhueWQje+8jOm7mOiupO+8mmAncGFyZW50X2lkJ2AgKi9cbiAgcGFyZW50SWRNYXBOYW1lPzogc3RyaW5nO1xuICAvKipcbiAgICog5qC554i257yW5Y+35YC877yM6buY6K6k5Lya6Ieq5Yqo6K6h566X5b6X5Yiw5pyA5ZCI6YCC55qE5qC554i257yW5Y+35YC877yM5L6L5aaC77yaXG4gICAqIEBleGFtcGxlXG4gICAqIGBgYHRzXG4gICAqIGNvbnN0IHJlcyA9IHNydi5hcnJUb1RyZWUoW1xuICAgKiAgICB7IGlkOiAyLCBwYXJlbnRfaWQ6ICdhJywgdGl0bGU6ICdjMScgfSxcbiAgICogICAgeyBpZDogNCwgcGFyZW50X2lkOiAyLCB0aXRsZTogJ3QxJyB9LFxuICAgKiAgXSxcbiAgICogIHsgcm9vdFBhcmVudFZhbHVlOiAnYScgfSk7XG4gICAqIGBgYFxuICAgKi9cbiAgcm9vdFBhcmVudElkVmFsdWU/OiBhbnk7XG4gIC8qKiDlrZDpobnlkI3vvIzpu5jorqTvvJpgJ2NoaWxkcmVuJ2AgKi9cbiAgY2hpbGRyZW5NYXBOYW1lPzogc3RyaW5nO1xuICAvKiog6L2s5o2i5oiQ5qCR5pWw5o2u5pe25Zue6LCDICovXG4gIGNiPzogKGl0ZW06IFQpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXJyYXlTZXJ2aWNlQXJyVG9UcmVlTm9kZU9wdGlvbnM8VCBleHRlbmRzIG9iamVjdCA9IGFueT4ge1xuICAvKiog57yW5Y+36aG55ZCN77yM6buY6K6k77yaYCdpZCdgICovXG4gIGlkTWFwTmFtZT86IHN0cmluZztcbiAgLyoqIOeItue8luWPt+mhueWQje+8jOm7mOiupO+8mmAncGFyZW50X2lkJ2AgKi9cbiAgcGFyZW50SWRNYXBOYW1lPzogc3RyaW5nO1xuICAvKiog5qCH6aKY6aG55ZCN77yM6buY6K6k77yaYCd0aXRsZSdgICovXG4gIHRpdGxlTWFwTmFtZT86IHN0cmluZztcbiAgLyoqIOiuvue9ruS4uuWPtuWtkOiKgueCuemhueWQje+8jOiLpeaVsOaNrua6kOS4jeWtmOWcqOaXtuiHquWKqOagueaNriBgY2hpbGRyZW5gIOWAvOWGs+WumuaYr+WQpuS4uuWPtuWtkOiKgueCue+8jOm7mOiupO+8mmAnaXNMZWFmJ2AgKi9cbiAgaXNMZWFmTWFwTmFtZT86IHN0cmluZztcbiAgLyoqIOiKgueCuSBDaGVja2JveCDmmK/lkKbpgInkuK3pobnlkI3vvIzpu5jorqTvvJpgJ2NoZWNrZWQnYCAqL1xuICBjaGVja2VkTWFwbmFtZT86IHN0cmluZztcbiAgLyoqIOiKgueCueacrOi6q+aYr+WQpumAieS4remhueWQje+8jOm7mOiupO+8mmAnc2VsZWN0ZWQnYCAqL1xuICBzZWxlY3RlZE1hcG5hbWU/OiBzdHJpbmc7XG4gIC8qKiDoioLngrnmmK/lkKblsZXlvIAo5Y+25a2Q6IqC54K55peg5pWIKemhueWQje+8jOm7mOiupO+8mmAnZXhwYW5kZWQnYCAqL1xuICBleHBhbmRlZE1hcG5hbWU/OiBzdHJpbmc7XG4gIC8qKiDorr7nva7mmK/lkKbnpoHnlKjoioLngrko5LiN5Y+v6L+b6KGM5Lu75L2V5pON5L2cKemhueWQje+8jOm7mOiupO+8mmAnZGlzYWJsZWQnYCAqL1xuICBkaXNhYmxlZE1hcG5hbWU/OiBzdHJpbmc7XG4gIC8qKiDovazmjaLmiJDmoJHmlbDmja7lkI7vvIzmiafooYznmoTpgJLlvZLlm57osIMgKi9cbiAgY2I/OiAoaXRlbTogVCwgcGFyZW50OiBUIHwgbnVsbCwgZGVlcDogbnVtYmVyKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFycmF5U2VydmljZUdldEtleXNCeVRyZWVOb2RlT3B0aW9ucyB7XG4gIC8qKiDmmK/lkKbljIXlkKvljYrpgInnirbmgIHnmoTlgLzvvIzpu5jorqTvvJpgdHJ1ZWAgKi9cbiAgaW5jbHVkZUhhbGZDaGVja2VkPzogYm9vbGVhbjtcbiAgLyoqIOaYr+WQpumHjeaWsOaMh+WumiBga2V5YCDplK7lkI3vvIzoi6XkuI3mjIflrprooajnpLrkvb/nlKggYE56VHJlZU5vZGUua2V5YCDlgLwgKi9cbiAga2V5TWFwTmFtZT86IHN0cmluZztcbiAgLyoqIOWbnuiwg++8jOi/lOWbnuS4gOS4quWAvCBga2V5YCDlgLzvvIzkvJjlhYjnuqfpq5jkuo7lhbbku5YgKi9cbiAgY2I/OiAoaXRlbTogTnpUcmVlTm9kZSwgcGFyZW50OiBOelRyZWVOb2RlIHwgbnVsbCwgZGVlcDogbnVtYmVyKSA9PiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXJyYXlTZXJ2aWNlR3JvdXBCeVJlc3VsdCB7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbiAgW2tleTogbnVtYmVyXTogYW55O1xufVxuIl19