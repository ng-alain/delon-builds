/**
 * @fileoverview added by tsickle
 * Generated from: array-type.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXktdHlwZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdXRpbC9hcnJheS9hcnJheS10eXBlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFQSxrREFXQzs7Ozs7O0lBVEMsbURBQXFCOzs7OztJQUVyQixxREFBdUI7Ozs7O0lBRXZCLHVEQUF5Qjs7Ozs7SUFFekIscURBQXdCOzs7OztJQUV4QiwwQ0FBb0Q7Ozs7O0FBR3RELGtEQXFCQzs7Ozs7O0lBbkJDLGlEQUFtQjs7Ozs7SUFFbkIsdURBQXlCOzs7Ozs7Ozs7Ozs7O0lBWXpCLHlEQUF3Qjs7Ozs7SUFFeEIsdURBQXlCOzs7OztJQUV6QiwwQ0FBeUI7Ozs7O0FBRzNCLHNEQW1CQzs7Ozs7O0lBakJDLHFEQUFtQjs7Ozs7SUFFbkIsMkRBQXlCOzs7OztJQUV6Qix3REFBc0I7Ozs7O0lBRXRCLHlEQUF1Qjs7Ozs7SUFFdkIsMERBQXdCOzs7OztJQUV4QiwyREFBeUI7Ozs7O0lBRXpCLDJEQUF5Qjs7Ozs7SUFFekIsMkRBQXlCOzs7OztJQUV6Qiw4Q0FBb0Q7Ozs7O0FBR3RELDBEQU9DOzs7Ozs7SUFMQyxrRUFBNkI7Ozs7O0lBRTdCLDBEQUFvQjs7Ozs7SUFFcEIsa0RBQWlFOzs7OztBQUduRSwrQ0FHQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE56VHJlZU5vZGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHJlZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXJyYXlTZXJ2aWNlVHJlZVRvQXJyT3B0aW9ucyB7XG4gIC8qKiDmt7HluqbpobnlkI3vvIzpu5jorqTvvJpgJ2RlZXAnYCAqL1xuICBkZWVwTWFwTmFtZT86IHN0cmluZztcbiAgLyoqIOaJgeW5s+WQjuaVsOe7hOeahOeItuaVsOaNrumhueWQje+8jOm7mOiupO+8mmAncGFyZW50J2AgKi9cbiAgcGFyZW50TWFwTmFtZT86IHN0cmluZztcbiAgLyoqIOa6kOaVsOaNruWtkOmhueWQje+8jOm7mOiupO+8mmAnY2hpbGRyZW4nYCAqL1xuICBjaGlsZHJlbk1hcE5hbWU/OiBzdHJpbmc7XG4gIC8qKiDmmK/lkKbnp7vpmaQgYGNoaWxkcmVuYCDoioLngrnvvIzpu5jorqTvvJpgdHJ1ZWAgKi9cbiAgY2xlYXJDaGlsZHJlbj86IGJvb2xlYW47XG4gIC8qKiDovazmjaLmiJDmlbDnu4Tnu5PmnoTml7blm57osIMgKi9cbiAgY2I/OiAoaXRlbTogYW55LCBwYXJlbnQ6IGFueSwgZGVlcDogbnVtYmVyKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFycmF5U2VydmljZUFyclRvVHJlZU9wdGlvbnMge1xuICAvKiog57yW5Y+36aG55ZCN77yM6buY6K6k77yaYCdpZCdgICovXG4gIGlkTWFwTmFtZT86IHN0cmluZztcbiAgLyoqIOeItue8luWPt+mhueWQje+8jOm7mOiupO+8mmAncGFyZW50X2lkJ2AgKi9cbiAgcGFyZW50SWRNYXBOYW1lPzogc3RyaW5nO1xuICAvKipcbiAgICog5qC554i257yW5Y+35YC877yM6buY6K6k5Lya6Ieq5Yqo6K6h566X5b6X5Yiw5pyA5ZCI6YCC55qE5qC554i257yW5Y+35YC877yM5L6L5aaC77yaXG4gICAqIEBleGFtcGxlXG4gICAqIGBgYHRzXG4gICAqIGNvbnN0IHJlcyA9IHNydi5hcnJUb1RyZWUoW1xuICAgKiAgICB7IGlkOiAyLCBwYXJlbnRfaWQ6ICdhJywgdGl0bGU6ICdjMScgfSxcbiAgICogICAgeyBpZDogNCwgcGFyZW50X2lkOiAyLCB0aXRsZTogJ3QxJyB9LFxuICAgKiAgXSxcbiAgICogIHsgcm9vdFBhcmVudFZhbHVlOiAnYScgfSk7XG4gICAqIGBgYFxuICAgKi9cbiAgcm9vdFBhcmVudElkVmFsdWU/OiBhbnk7XG4gIC8qKiDlrZDpobnlkI3vvIzpu5jorqTvvJpgJ2NoaWxkcmVuJ2AgKi9cbiAgY2hpbGRyZW5NYXBOYW1lPzogc3RyaW5nO1xuICAvKiog6L2s5o2i5oiQ5qCR5pWw5o2u5pe25Zue6LCDICovXG4gIGNiPzogKGl0ZW06IGFueSkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcnJheVNlcnZpY2VBcnJUb1RyZWVOb2RlT3B0aW9ucyB7XG4gIC8qKiDnvJblj7fpobnlkI3vvIzpu5jorqTvvJpgJ2lkJ2AgKi9cbiAgaWRNYXBOYW1lPzogc3RyaW5nO1xuICAvKiog54i257yW5Y+36aG55ZCN77yM6buY6K6k77yaYCdwYXJlbnRfaWQnYCAqL1xuICBwYXJlbnRJZE1hcE5hbWU/OiBzdHJpbmc7XG4gIC8qKiDmoIfpopjpobnlkI3vvIzpu5jorqTvvJpgJ3RpdGxlJ2AgKi9cbiAgdGl0bGVNYXBOYW1lPzogc3RyaW5nO1xuICAvKiog6K6+572u5Li65Y+25a2Q6IqC54K56aG55ZCN77yM6Iul5pWw5o2u5rqQ5LiN5a2Y5Zyo5pe26Ieq5Yqo5qC55o2uIGBjaGlsZHJlbmAg5YC85Yaz5a6a5piv5ZCm5Li65Y+25a2Q6IqC54K577yM6buY6K6k77yaYCdpc0xlYWYnYCAqL1xuICBpc0xlYWZNYXBOYW1lPzogc3RyaW5nO1xuICAvKiog6IqC54K5IENoZWNrYm94IOaYr+WQpumAieS4remhueWQje+8jOm7mOiupO+8mmAnY2hlY2tlZCdgICovXG4gIGNoZWNrZWRNYXBuYW1lPzogc3RyaW5nO1xuICAvKiog6IqC54K55pys6Lqr5piv5ZCm6YCJ5Lit6aG55ZCN77yM6buY6K6k77yaYCdzZWxlY3RlZCdgICovXG4gIHNlbGVjdGVkTWFwbmFtZT86IHN0cmluZztcbiAgLyoqIOiKgueCueaYr+WQpuWxleW8gCjlj7blrZDoioLngrnml6DmlYgp6aG55ZCN77yM6buY6K6k77yaYCdleHBhbmRlZCdgICovXG4gIGV4cGFuZGVkTWFwbmFtZT86IHN0cmluZztcbiAgLyoqIOiuvue9ruaYr+WQpuemgeeUqOiKgueCuSjkuI3lj6/ov5vooYzku7vkvZXmk43kvZwp6aG55ZCN77yM6buY6K6k77yaYCdkaXNhYmxlZCdgICovXG4gIGRpc2FibGVkTWFwbmFtZT86IHN0cmluZztcbiAgLyoqIOi9rOaNouaIkOagkeaVsOaNruWQju+8jOaJp+ihjOeahOmAkuW9kuWbnuiwgyAqL1xuICBjYj86IChpdGVtOiBhbnksIHBhcmVudDogYW55LCBkZWVwOiBudW1iZXIpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXJyYXlTZXJ2aWNlR2V0S2V5c0J5VHJlZU5vZGVPcHRpb25zIHtcbiAgLyoqIOaYr+WQpuWMheWQq+WNiumAieeKtuaAgeeahOWAvO+8jOm7mOiupO+8mmB0cnVlYCAqL1xuICBpbmNsdWRlSGFsZkNoZWNrZWQ/OiBib29sZWFuO1xuICAvKiog5piv5ZCm6YeN5paw5oyH5a6aIGBrZXlgIOmUruWQje+8jOiLpeS4jeaMh+WumuihqOekuuS9v+eUqCBgTnpUcmVlTm9kZS5rZXlgIOWAvCAqL1xuICBrZXlNYXBOYW1lPzogc3RyaW5nO1xuICAvKiog5Zue6LCD77yM6L+U5Zue5LiA5Liq5YC8IGBrZXlgIOWAvO+8jOS8mOWFiOe6p+mrmOS6juWFtuS7liAqL1xuICBjYj86IChpdGVtOiBOelRyZWVOb2RlLCBwYXJlbnQ6IE56VHJlZU5vZGUsIGRlZXA6IG51bWJlcikgPT4gYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFycmF5U2VydmljZUdyb3VwQnlSZXN1bHQge1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG4gIFtrZXk6IG51bWJlcl06IGFueTtcbn1cbiJdfQ==